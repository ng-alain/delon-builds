import { Host, Inject, Injectable, Optional } from '@angular/core';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { deepCopy, warn } from '@delon/util/other';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "./st-row.directive";
import * as i3 from "@delon/acl";
import * as i4 from "./st-widget";
export class STColumnSource {
    constructor(dom, rowSource, acl, i18nSrv, stWidgetRegistry) {
        this.dom = dom;
        this.rowSource = rowSource;
        this.acl = acl;
        this.i18nSrv = i18nSrv;
        this.stWidgetRegistry = stWidgetRegistry;
    }
    setCog(val) {
        this.cog = val;
    }
    fixPop(i, def) {
        if (i.pop == null || i.pop === false) {
            i.pop = false;
            return;
        }
        let pop = {
            ...def
        };
        if (typeof i.pop === 'string') {
            pop.title = i.pop;
        }
        else if (typeof i.pop === 'object') {
            pop = {
                ...pop,
                ...i.pop
            };
        }
        if (typeof pop.condition !== 'function') {
            pop.condition = () => false;
        }
        i.pop = pop;
    }
    btnCoerce(list) {
        if (!list)
            return [];
        const ret = [];
        const { modal, drawer, pop, btnIcon } = this.cog;
        for (const item of list) {
            if (this.acl && item.acl && !this.acl.can(item.acl)) {
                continue;
            }
            if (item.type === 'modal' || item.type === 'static') {
                if (item.modal == null || item.modal.component == null) {
                    if (typeof ngDevMode === 'undefined' || ngDevMode) {
                        console.warn(`[st] Should specify modal parameter when type is modal or static`);
                    }
                    item.type = 'none';
                }
                else {
                    item.modal = { ...{ paramsName: 'record', size: 'lg' }, ...modal, ...item.modal };
                }
            }
            if (item.type === 'drawer') {
                if (item.drawer == null || item.drawer.component == null) {
                    if (typeof ngDevMode === 'undefined' || ngDevMode) {
                        console.warn(`[st] Should specify drawer parameter when type is drawer`);
                    }
                    item.type = 'none';
                }
                else {
                    item.drawer = { ...{ paramsName: 'record', size: 'lg' }, ...drawer, ...item.drawer };
                }
            }
            if (item.type === 'del' && typeof item.pop === 'undefined') {
                item.pop = true;
            }
            // pop
            this.fixPop(item, pop);
            if (typeof item.icon !== 'function') {
                item.icon = {
                    ...btnIcon,
                    ...(typeof item.icon === 'string' ? { type: item.icon } : item.icon)
                };
            }
            item.children = item.children && item.children.length > 0 ? this.btnCoerce(item.children) : [];
            // i18n
            if (item.i18n && this.i18nSrv) {
                item.text = this.i18nSrv.fanyi(item.i18n);
            }
            ret.push(item);
        }
        this.btnCoerceIf(ret);
        return ret;
    }
    btnCoerceIf(list) {
        for (const item of list) {
            item.iifBehavior = item.iifBehavior || this.cog.iifBehavior;
            if (item.children && item.children.length > 0) {
                this.btnCoerceIf(item.children);
            }
            else {
                item.children = [];
            }
        }
    }
    fixedCoerce(list) {
        const countReduce = (a, b) => a + +b.width.toString().replace('px', '');
        // left width
        list
            .filter(w => w.fixed && w.fixed === 'left' && w.width)
            .forEach((item, idx) => (item._left = `${list.slice(0, idx).reduce(countReduce, 0)}px`));
        // right width
        list
            .filter(w => w.fixed && w.fixed === 'right' && w.width)
            .reverse()
            .forEach((item, idx) => (item._right = `${idx > 0 ? list.slice(-idx).reduce(countReduce, 0) : 0}px`));
    }
    sortCoerce(item) {
        const res = this.fixSortCoerce(item);
        res.reName = {
            ...this.cog.sortReName,
            ...res.reName
        };
        return res;
    }
    fixSortCoerce(item) {
        if (typeof item.sort === 'undefined') {
            return { enabled: false };
        }
        let res = {};
        if (typeof item.sort === 'string') {
            res.key = item.sort;
        }
        else if (typeof item.sort !== 'boolean') {
            res = item.sort;
        }
        else if (typeof item.sort === 'boolean') {
            res.compare = (a, b) => a[item.indexKey] - b[item.indexKey];
        }
        if (!res.key) {
            res.key = item.indexKey;
        }
        res.enabled = true;
        return res;
    }
    filterCoerce(item) {
        if (item.filter == null) {
            return null;
        }
        let res = item.filter;
        res.type = res.type || 'default';
        res.showOPArea = res.showOPArea !== false;
        let icon = 'filter';
        let iconTheme = 'fill';
        let fixMenus = true;
        let value = undefined;
        switch (res.type) {
            case 'keyword':
                icon = 'search';
                iconTheme = 'outline';
                break;
            case 'number':
                icon = 'search';
                iconTheme = 'outline';
                res.number = {
                    step: 1,
                    min: -Infinity,
                    max: Infinity,
                    ...res.number
                };
                break;
            case 'date':
                icon = 'calendar';
                iconTheme = 'outline';
                res.date = {
                    range: false,
                    mode: 'date',
                    showToday: true,
                    showNow: false,
                    ...res.date
                };
                break;
            case 'custom':
                break;
            default:
                fixMenus = false;
                break;
        }
        if (fixMenus && (res.menus == null || res.menus.length === 0)) {
            res.menus = [{ value }];
        }
        if (res.menus?.length === 0) {
            return null;
        }
        if (typeof res.multiple === 'undefined') {
            res.multiple = true;
        }
        res.confirmText = res.confirmText || this.cog.filterConfirmText;
        res.clearText = res.clearText || this.cog.filterClearText;
        res.key = res.key || item.indexKey;
        res.icon = res.icon || icon;
        const baseIcon = { type: icon, theme: iconTheme };
        if (typeof res.icon === 'string') {
            res.icon = { ...baseIcon, type: res.icon };
        }
        else {
            res.icon = { ...baseIcon, ...res.icon };
        }
        this.updateDefault(res);
        if (this.acl) {
            res.menus = res.menus?.filter(w => this.acl.can(w.acl));
        }
        return res.menus?.length === 0 ? null : res;
    }
    restoreRender(item) {
        if (item.renderTitle) {
            item.__renderTitle =
                typeof item.renderTitle === 'string'
                    ? this.rowSource.getTitle(item.renderTitle)
                    : item.renderTitle;
        }
        if (item.render) {
            item.__render =
                typeof item.render === 'string' ? this.rowSource.getRow(item.render) : item.render;
        }
    }
    widgetCoerce(item) {
        if (item.type !== 'widget')
            return;
        if (item.widget == null || !this.stWidgetRegistry.has(item.widget.type)) {
            delete item.type;
            if (typeof ngDevMode === 'undefined' || ngDevMode) {
                warn(`st: No widget for type "${item.widget?.type}"`);
            }
        }
    }
    genHeaders(rootColumns) {
        const rows = [];
        const widths = [];
        const fillRowCells = (columns, colIndex, rowIndex = 0) => {
            // Init rows
            rows[rowIndex] = rows[rowIndex] || [];
            let currentColIndex = colIndex;
            const colSpans = columns.map(column => {
                const cell = {
                    column,
                    colStart: currentColIndex,
                    hasSubColumns: false
                };
                let colSpan = 1;
                const subColumns = column.children;
                if (Array.isArray(subColumns) && subColumns.length > 0) {
                    colSpan = fillRowCells(subColumns, currentColIndex, rowIndex + 1).reduce((total, count) => total + count, 0);
                    cell.hasSubColumns = true;
                }
                else {
                    widths.push(cell.column.width || '');
                }
                if ('colSpan' in column) {
                    colSpan = column.colSpan;
                }
                if ('rowSpan' in column) {
                    cell.rowSpan = column.rowSpan;
                }
                cell.colSpan = colSpan;
                cell.colEnd = cell.colStart + colSpan - 1;
                rows[rowIndex].push(cell);
                currentColIndex += colSpan;
                return colSpan;
            });
            return colSpans;
        };
        fillRowCells(rootColumns, 0);
        // Handle `rowSpan`
        const rowCount = rows.length;
        for (let rowIndex = 0; rowIndex < rowCount; rowIndex += 1) {
            rows[rowIndex].forEach(cell => {
                if (!('rowSpan' in cell) && !cell.hasSubColumns) {
                    cell.rowSpan = rowCount - rowIndex;
                }
            });
        }
        return { headers: rows, headerWidths: rowCount > 1 ? widths : null };
    }
    cleanCond(list) {
        const res = [];
        const copyList = deepCopy(list);
        for (const item of copyList) {
            if (typeof item.iif === 'function' && !item.iif(item)) {
                continue;
            }
            if (this.acl && item.acl && !this.acl.can(item.acl)) {
                continue;
            }
            if (Array.isArray(item.children) && item.children.length > 0) {
                item.children = this.cleanCond(item.children);
            }
            res.push(item);
        }
        return res;
    }
    mergeClass(item) {
        const builtInClassNames = [];
        if (item._isTruncate) {
            builtInClassNames.push('text-truncate');
        }
        const rawClassName = item.className;
        if (!rawClassName) {
            const typeClass = {
                number: 'text-right',
                currency: 'text-right',
                date: 'text-center'
            }[item.type];
            if (typeClass) {
                builtInClassNames.push(typeClass);
            }
            item._className = builtInClassNames;
            return;
        }
        const rawClassNameIsArray = Array.isArray(rawClassName);
        if (!rawClassNameIsArray && typeof rawClassName === 'object') {
            const objClassNames = rawClassName;
            builtInClassNames.forEach(key => (objClassNames[key] = true));
            item._className = objClassNames;
            return;
        }
        const arrayClassNames = rawClassNameIsArray ? Array.from(rawClassName) : [rawClassName];
        arrayClassNames.splice(0, 0, ...builtInClassNames);
        item._className = [...new Set(arrayClassNames)].filter(w => !!w);
    }
    process(list, options) {
        if (!list || list.length === 0) {
            return { columns: [], headers: [], headerWidths: null };
        }
        const { noIndex } = this.cog;
        let checkboxCount = 0;
        let radioCount = 0;
        let point = 0;
        const columns = [];
        const processItem = (item) => {
            // index
            if (item.index) {
                if (!Array.isArray(item.index)) {
                    item.index = item.index.toString().split('.');
                }
                item.indexKey = item.index.join('.');
            }
            // #region title
            const tit = (typeof item.title === 'string' ? { text: item.title } : item.title) || {};
            if (tit.i18n && this.i18nSrv) {
                tit.text = this.i18nSrv.fanyi(tit.i18n);
            }
            if (tit.text) {
                tit._text = this.dom.bypassSecurityTrustHtml(tit.text);
            }
            item.title = tit;
            // #endregion
            // no
            if (item.type === 'no') {
                item.noIndex = item.noIndex == null ? noIndex : item.noIndex;
            }
            // checkbox
            if (item.selections == null) {
                item.selections = [];
            }
            if (item.type === 'checkbox') {
                ++checkboxCount;
                if (!item.width) {
                    item.width = `${item.selections.length > 0 ? 62 : 50}px`;
                }
            }
            if (this.acl) {
                item.selections = item.selections.filter(w => this.acl.can(w.acl));
            }
            // radio
            if (item.type === 'radio') {
                ++radioCount;
                item.selections = [];
                if (!item.width) {
                    item.width = '50px';
                }
            }
            // types
            if (item.type === 'yn') {
                item.yn = { truth: true, ...this.cog.yn, ...item.yn };
            }
            // date
            if (item.type === 'date') {
                item.dateFormat = item.dateFormat || this.cog.date?.format;
            }
            if ((item.type === 'link' && typeof item.click !== 'function') ||
                (item.type === 'badge' && item.badge == null) ||
                (item.type === 'tag' && item.tag == null) ||
                (item.type === 'enum' && item.enum == null)) {
                item.type = '';
            }
            item._isTruncate = !!item.width && options.widthMode.strictBehavior === 'truncate' && item.type !== 'img';
            // className
            this.mergeClass(item);
            // width
            if (typeof item.width === 'number') {
                item._width = item.width;
                item.width = `${item.width}px`;
            }
            item._left = false;
            item._right = false;
            item.safeType = item.safeType ?? options.safeType;
            // sorter
            item._sort = this.sortCoerce(item);
            // filter
            item.filter = this.filterCoerce(item);
            // buttons
            item.buttons = this.btnCoerce(item.buttons);
            // widget
            this.widgetCoerce(item);
            // restore custom row
            this.restoreRender(item);
            // resizable
            item.resizable = {
                disabled: true,
                bounds: 'window',
                minWidth: 60,
                maxWidth: 360,
                preview: true,
                ...options.resizable,
                ...(typeof item.resizable === 'boolean' ? { disabled: !item.resizable } : item.resizable)
            };
            item.__point = point++;
            return item;
        };
        const processList = (data) => {
            for (const item of data) {
                columns.push(processItem(item));
                if (Array.isArray(item.children)) {
                    processList(item.children);
                }
            }
        };
        const copyList = this.cleanCond(list);
        processList(copyList);
        if (checkboxCount > 1) {
            throw new Error(`[st]: just only one column checkbox`);
        }
        if (radioCount > 1) {
            throw new Error(`[st]: just only one column radio`);
        }
        this.fixedCoerce(columns);
        return {
            columns: columns.filter(w => !Array.isArray(w.children) || w.children.length === 0),
            ...this.genHeaders(copyList)
        };
    }
    restoreAllRender(columns) {
        columns.forEach(i => this.restoreRender(i));
    }
    updateDefault(filter) {
        if (filter.menus == null)
            return this;
        if (filter.type === 'default') {
            filter.default = filter.menus.findIndex(w => w.checked) !== -1;
        }
        else {
            filter.default = !!filter.menus[0].value;
        }
        return this;
    }
    cleanFilter(col) {
        const f = col.filter;
        f.default = false;
        if (f.type === 'default') {
            f.menus.forEach(i => (i.checked = false));
        }
        else {
            f.menus[0].value = undefined;
        }
        return this;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: STColumnSource, deps: [{ token: i1.DomSanitizer }, { token: i2.STRowSource, host: true }, { token: i3.ACLService, optional: true }, { token: ALAIN_I18N_TOKEN, optional: true }, { token: i4.STWidgetRegistry }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: STColumnSource }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: STColumnSource, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.DomSanitizer }, { type: i2.STRowSource, decorators: [{
                    type: Host
                }] }, { type: i3.ACLService, decorators: [{
                    type: Optional
                }] }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [ALAIN_I18N_TOKEN]
                }] }, { type: i4.STWidgetRegistry }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtY29sdW1uLXNvdXJjZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9zdC9zdC1jb2x1bW4tc291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQWUsTUFBTSxlQUFlLENBQUM7QUFJaEYsT0FBTyxFQUFvQixnQkFBZ0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUVsRSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7Ozs7QUEwQm5ELE1BQU0sT0FBTyxjQUFjO0lBR3pCLFlBQ1UsR0FBaUIsRUFDVCxTQUFzQixFQUNsQixHQUFlLEVBQ1csT0FBeUIsRUFDL0QsZ0JBQWtDO1FBSmxDLFFBQUcsR0FBSCxHQUFHLENBQWM7UUFDVCxjQUFTLEdBQVQsU0FBUyxDQUFhO1FBQ2xCLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDVyxZQUFPLEdBQVAsT0FBTyxDQUFrQjtRQUMvRCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQ3pDLENBQUM7SUFFSixNQUFNLENBQUMsR0FBa0I7UUFDdkIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDakIsQ0FBQztJQUVPLE1BQU0sQ0FBQyxDQUFpQixFQUFFLEdBQXNCO1FBQ3RELElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxLQUFLLEVBQUU7WUFDcEMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7WUFDZCxPQUFPO1NBQ1I7UUFFRCxJQUFJLEdBQUcsR0FBRztZQUNSLEdBQUcsR0FBRztTQUNQLENBQUM7UUFDRixJQUFJLE9BQU8sQ0FBQyxDQUFDLEdBQUcsS0FBSyxRQUFRLEVBQUU7WUFDN0IsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FB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MkZBQWQsY0FBYztrQkFEMUIsVUFBVTs7MEJBTU4sSUFBSTs7MEJBQ0osUUFBUTs7MEJBQ1IsUUFBUTs7MEJBQUksTUFBTTsyQkFBQyxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIb3N0LCBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbmltcG9ydCB7IEFDTFNlcnZpY2UgfSBmcm9tICdAZGVsb24vYWNsJztcbmltcG9ydCB7IEFsYWluSTE4TlNlcnZpY2UsIEFMQUlOX0kxOE5fVE9LRU4gfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgQWxhaW5TVENvbmZpZyB9IGZyb20gJ0BkZWxvbi91dGlsL2NvbmZpZyc7XG5pbXBvcnQgeyBkZWVwQ29weSwgd2FybiB9IGZyb20gJ0BkZWxvbi91dGlsL290aGVyJztcbmltcG9ydCB0eXBlIHsgTmdDbGFzc0ludGVyZmFjZSwgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuaW1wb3J0IHsgU1RSb3dTb3VyY2UgfSBmcm9tICcuL3N0LXJvdy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU1RXaWRnZXRSZWdpc3RyeSB9IGZyb20gJy4vc3Qtd2lkZ2V0JztcbmltcG9ydCB7XG4gIFNUQ29sdW1uLFxuICBTVENvbHVtbkJ1dHRvbixcbiAgU1RDb2x1bW5CdXR0b25Qb3AsXG4gIFNUQ29sdW1uRmlsdGVyLFxuICBTVENvbHVtbkdyb3VwVHlwZSxcbiAgU1RDb2x1bW5TYWZlVHlwZSxcbiAgU1RJY29uLFxuICBTVFJlc2l6YWJsZSxcbiAgU1RTb3J0TWFwLFxuICBTVFdpZHRoTW9kZVxufSBmcm9tICcuL3N0LmludGVyZmFjZXMnO1xuaW1wb3J0IHsgX1NUQ29sdW1uLCBfU1RIZWFkZXIgfSBmcm9tICcuL3N0LnR5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtblNvdXJjZVByb2Nlc3NPcHRpb25zIHtcbiAgd2lkdGhNb2RlOiBTVFdpZHRoTW9kZTtcbiAgcmVzaXphYmxlPzogU1RSZXNpemFibGU7XG4gIHNhZmVUeXBlOiBTVENvbHVtblNhZmVUeXBlO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU1RDb2x1bW5Tb3VyY2Uge1xuICBwcml2YXRlIGNvZyE6IEFsYWluU1RDb25maWc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBkb206IERvbVNhbml0aXplcixcbiAgICBASG9zdCgpIHByaXZhdGUgcm93U291cmNlOiBTVFJvd1NvdXJjZSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGFjbDogQUNMU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KEFMQUlOX0kxOE5fVE9LRU4pIHByaXZhdGUgaTE4blNydjogQWxhaW5JMThOU2VydmljZSxcbiAgICBwcml2YXRlIHN0V2lkZ2V0UmVnaXN0cnk6IFNUV2lkZ2V0UmVnaXN0cnlcbiAgKSB7fVxuXG4gIHNldENvZyh2YWw6IEFsYWluU1RDb25maWcpOiB2b2lkIHtcbiAgICB0aGlzLmNvZyA9IHZhbDtcbiAgfVxuXG4gIHByaXZhdGUgZml4UG9wKGk6IFNUQ29sdW1uQnV0dG9uLCBkZWY6IFNUQ29sdW1uQnV0dG9uUG9wKTogdm9pZCB7XG4gICAgaWYgKGkucG9wID09IG51bGwgfHwgaS5wb3AgPT09IGZhbHNlKSB7XG4gICAgICBpLnBvcCA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBwb3AgPSB7XG4gICAgICAuLi5kZWZcbiAgICB9O1xuICAgIGlmICh0eXBlb2YgaS5wb3AgPT09ICdzdHJpbmcnKSB7XG4gICAgICBwb3AudGl0bGUgPSBpLnBvcDtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBpLnBvcCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHBvcCA9IHtcbiAgICAgICAgLi4ucG9wLFxuICAgICAgICAuLi5pLnBvcFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHBvcC5jb25kaXRpb24gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHBvcC5jb25kaXRpb24gPSAoKSA9PiBmYWxzZTtcbiAgICB9XG5cbiAgICBpLnBvcCA9IHBvcDtcbiAgfVxuXG4gIHByaXZhdGUgYnRuQ29lcmNlKGxpc3Q6IFNUQ29sdW1uQnV0dG9uW10pOiBTVENvbHVtbkJ1dHRvbltdIHtcbiAgICBpZiAoIWxpc3QpIHJldHVybiBbXTtcbiAgICBjb25zdCByZXQ6IFNUQ29sdW1uQnV0dG9uW10gPSBbXTtcbiAgICBjb25zdCB7IG1vZGFsLCBkcmF3ZXIsIHBvcCwgYnRuSWNvbiB9ID0gdGhpcy5jb2c7XG5cbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgbGlzdCkge1xuICAgICAgaWYgKHRoaXMuYWNsICYmIGl0ZW0uYWNsICYmICF0aGlzLmFjbC5jYW4oaXRlbS5hY2wpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbS50eXBlID09PSAnbW9kYWwnIHx8IGl0ZW0udHlwZSA9PT0gJ3N0YXRpYycpIHtcbiAgICAgICAgaWYgKGl0ZW0ubW9kYWwgPT0gbnVsbCB8fCBpdGVtLm1vZGFsLmNvbXBvbmVudCA9PSBudWxsKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBuZ0Rldk1vZGUgPT09ICd1bmRlZmluZWQnIHx8IG5nRGV2TW9kZSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBbc3RdIFNob3VsZCBzcGVjaWZ5IG1vZGFsIHBhcmFtZXRlciB3aGVuIHR5cGUgaXMgbW9kYWwgb3Igc3RhdGljYCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGl0ZW0udHlwZSA9ICdub25lJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtLm1vZGFsID0geyAuLi57IHBhcmFtc05hbWU6ICdyZWNvcmQnLCBzaXplOiAnbGcnIH0sIC4uLm1vZGFsLCAuLi5pdGVtLm1vZGFsIH07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ2RyYXdlcicpIHtcbiAgICAgICAgaWYgKGl0ZW0uZHJhd2VyID09IG51bGwgfHwgaXRlbS5kcmF3ZXIuY29tcG9uZW50ID09IG51bGwpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIG5nRGV2TW9kZSA9PT0gJ3VuZGVmaW5lZCcgfHwgbmdEZXZNb2RlKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYFtzdF0gU2hvdWxkIHNwZWNpZnkgZHJhd2VyIHBhcmFtZXRlciB3aGVuIHR5cGUgaXMgZHJhd2VyYCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGl0ZW0udHlwZSA9ICdub25lJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtLmRyYXdlciA9IHsgLi4ueyBwYXJhbXNOYW1lOiAncmVjb3JkJywgc2l6ZTogJ2xnJyB9LCAuLi5kcmF3ZXIsIC4uLml0ZW0uZHJhd2VyIH07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ2RlbCcgJiYgdHlwZW9mIGl0ZW0ucG9wID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBpdGVtLnBvcCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIC8vIHBvcFxuICAgICAgdGhpcy5maXhQb3AoaXRlbSwgcG9wISk7XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlbS5pY29uICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGl0ZW0uaWNvbiA9IHtcbiAgICAgICAgICAuLi5idG5JY29uLFxuICAgICAgICAgIC4uLih0eXBlb2YgaXRlbS5pY29uID09PSAnc3RyaW5nJyA/IHsgdHlwZTogaXRlbS5pY29uIH0gOiBpdGVtLmljb24pXG4gICAgICAgIH0gYXMgU1RJY29uO1xuICAgICAgfVxuXG4gICAgICBpdGVtLmNoaWxkcmVuID0gaXRlbS5jaGlsZHJlbiAmJiBpdGVtLmNoaWxkcmVuLmxlbmd0aCA+IDAgPyB0aGlzLmJ0bkNvZXJjZShpdGVtLmNoaWxkcmVuKSA6IFtdO1xuXG4gICAgICAvLyBpMThuXG4gICAgICBpZiAoaXRlbS5pMThuICYmIHRoaXMuaTE4blNydikge1xuICAgICAgICBpdGVtLnRleHQgPSB0aGlzLmkxOG5TcnYuZmFueWkoaXRlbS5pMThuKTtcbiAgICAgIH1cblxuICAgICAgcmV0LnB1c2goaXRlbSk7XG4gICAgfVxuICAgIHRoaXMuYnRuQ29lcmNlSWYocmV0KTtcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgcHJpdmF0ZSBidG5Db2VyY2VJZihsaXN0OiBTVENvbHVtbkJ1dHRvbltdKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGxpc3QpIHtcbiAgICAgIGl0ZW0uaWlmQmVoYXZpb3IgPSBpdGVtLmlpZkJlaGF2aW9yIHx8IHRoaXMuY29nLmlpZkJlaGF2aW9yO1xuICAgICAgaWYgKGl0ZW0uY2hpbGRyZW4gJiYgaXRlbS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuYnRuQ29lcmNlSWYoaXRlbS5jaGlsZHJlbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpdGVtLmNoaWxkcmVuID0gW107XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBmaXhlZENvZXJjZShsaXN0OiBfU1RDb2x1bW5bXSk6IHZvaWQge1xuICAgIGNvbnN0IGNvdW50UmVkdWNlID0gKGE6IG51bWJlciwgYjogX1NUQ29sdW1uKTogbnVtYmVyID0+IGEgKyArYi53aWR0aCEudG9TdHJpbmcoKS5yZXBsYWNlKCdweCcsICcnKTtcbiAgICAvLyBsZWZ0IHdpZHRoXG4gICAgbGlzdFxuICAgICAgLmZpbHRlcih3ID0+IHcuZml4ZWQgJiYgdy5maXhlZCA9PT0gJ2xlZnQnICYmIHcud2lkdGgpXG4gICAgICAuZm9yRWFjaCgoaXRlbSwgaWR4KSA9PiAoaXRlbS5fbGVmdCA9IGAke2xpc3Quc2xpY2UoMCwgaWR4KS5yZWR1Y2UoY291bnRSZWR1Y2UsIDApfXB4YCkpO1xuICAgIC8vIHJpZ2h0IHdpZHRoXG4gICAgbGlzdFxuICAgICAgLmZpbHRlcih3ID0+IHcuZml4ZWQgJiYgdy5maXhlZCA9PT0gJ3JpZ2h0JyAmJiB3LndpZHRoKVxuICAgICAgLnJldmVyc2UoKVxuICAgICAgLmZvckVhY2goKGl0ZW0sIGlkeCkgPT4gKGl0ZW0uX3JpZ2h0ID0gYCR7aWR4ID4gMCA/IGxpc3Quc2xpY2UoLWlkeCkucmVkdWNlKGNvdW50UmVkdWNlLCAwKSA6IDB9cHhgKSk7XG4gIH1cblxuICBwcml2YXRlIHNvcnRDb2VyY2UoaXRlbTogX1NUQ29sdW1uKTogU1RTb3J0TWFwIHtcbiAgICBjb25zdCByZXMgPSB0aGlzLmZpeFNvcnRDb2VyY2UoaXRlbSk7XG4gICAgcmVzLnJlTmFtZSA9IHtcbiAgICAgIC4uLnRoaXMuY29nLnNvcnRSZU5hbWUsXG4gICAgICAuLi5yZXMucmVOYW1lXG4gICAgfTtcbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgcHJpdmF0ZSBmaXhTb3J0Q29lcmNlKGl0ZW06IF9TVENvbHVtbik6IFNUU29ydE1hcCB7XG4gICAgaWYgKHR5cGVvZiBpdGVtLnNvcnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4geyBlbmFibGVkOiBmYWxzZSB9O1xuICAgIH1cblxuICAgIGxldCByZXM6IFNUU29ydE1hcCA9IHt9O1xuXG4gICAgaWYgKHR5cGVvZiBpdGVtLnNvcnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXMua2V5ID0gaXRlbS5zb3J0O1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGl0ZW0uc29ydCAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICByZXMgPSBpdGVtLnNvcnQ7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgaXRlbS5zb3J0ID09PSAnYm9vbGVhbicpIHtcbiAgICAgIHJlcy5jb21wYXJlID0gKGEsIGIpID0+IGFbaXRlbS5pbmRleEtleSFdIC0gYltpdGVtLmluZGV4S2V5IV07XG4gICAgfVxuXG4gICAgaWYgKCFyZXMua2V5KSB7XG4gICAgICByZXMua2V5ID0gaXRlbS5pbmRleEtleTtcbiAgICB9XG5cbiAgICByZXMuZW5hYmxlZCA9IHRydWU7XG5cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgcHJpdmF0ZSBmaWx0ZXJDb2VyY2UoaXRlbTogX1NUQ29sdW1uKTogU1RDb2x1bW5GaWx0ZXIgfCBudWxsIHtcbiAgICBpZiAoaXRlbS5maWx0ZXIgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgbGV0IHJlczogU1RDb2x1bW5GaWx0ZXIgfCBudWxsID0gaXRlbS5maWx0ZXI7XG4gICAgcmVzLnR5cGUgPSByZXMudHlwZSB8fCAnZGVmYXVsdCc7XG4gICAgcmVzLnNob3dPUEFyZWEgPSByZXMuc2hvd09QQXJlYSAhPT0gZmFsc2U7XG5cbiAgICBsZXQgaWNvbiA9ICdmaWx0ZXInO1xuICAgIGxldCBpY29uVGhlbWUgPSAnZmlsbCc7XG4gICAgbGV0IGZpeE1lbnVzID0gdHJ1ZTtcbiAgICBsZXQgdmFsdWU6IE56U2FmZUFueSA9IHVuZGVmaW5lZDtcbiAgICBzd2l0Y2ggKHJlcy50eXBlKSB7XG4gICAgICBjYXNlICdrZXl3b3JkJzpcbiAgICAgICAgaWNvbiA9ICdzZWFyY2gnO1xuICAgICAgICBpY29uVGhlbWUgPSAnb3V0bGluZSc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgaWNvbiA9ICdzZWFyY2gnO1xuICAgICAgICBpY29uVGhlbWUgPSAnb3V0bGluZSc7XG4gICAgICAgIHJlcy5udW1iZXIgPSB7XG4gICAgICAgICAgc3RlcDogMSxcbiAgICAgICAgICBtaW46IC1JbmZpbml0eSxcbiAgICAgICAgICBtYXg6IEluZmluaXR5LFxuICAgICAgICAgIC4uLnJlcy5udW1iZXJcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkYXRlJzpcbiAgICAgICAgaWNvbiA9ICdjYWxlbmRhcic7XG4gICAgICAgIGljb25UaGVtZSA9ICdvdXRsaW5lJztcbiAgICAgICAgcmVzLmRhdGUgPSB7XG4gICAgICAgICAgcmFuZ2U6IGZhbHNlLFxuICAgICAgICAgIG1vZGU6ICdkYXRlJyxcbiAgICAgICAgICBzaG93VG9kYXk6IHRydWUsXG4gICAgICAgICAgc2hvd05vdzogZmFsc2UsXG4gICAgICAgICAgLi4ucmVzLmRhdGVcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjdXN0b20nOlxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGZpeE1lbnVzID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZiAoZml4TWVudXMgJiYgKHJlcy5tZW51cyA9PSBudWxsIHx8IHJlcy5tZW51cyEubGVuZ3RoID09PSAwKSkge1xuICAgICAgcmVzLm1lbnVzID0gW3sgdmFsdWUgfV07XG4gICAgfVxuXG4gICAgaWYgKHJlcy5tZW51cz8ubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHJlcy5tdWx0aXBsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJlcy5tdWx0aXBsZSA9IHRydWU7XG4gICAgfVxuXG4gICAgcmVzLmNvbmZpcm1UZXh0ID0gcmVzLmNvbmZpcm1UZXh0IHx8IHRoaXMuY29nLmZpbHRlckNvbmZpcm1UZXh0O1xuICAgIHJlcy5jbGVhclRleHQgPSByZXMuY2xlYXJUZXh0IHx8IHRoaXMuY29nLmZpbHRlckNsZWFyVGV4dDtcbiAgICByZXMua2V5ID0gcmVzLmtleSB8fCBpdGVtLmluZGV4S2V5O1xuICAgIHJlcy5pY29uID0gcmVzLmljb24gfHwgaWNvbjtcblxuICAgIGNvbnN0IGJhc2VJY29uID0geyB0eXBlOiBpY29uLCB0aGVtZTogaWNvblRoZW1lIH0gYXMgU1RJY29uO1xuICAgIGlmICh0eXBlb2YgcmVzLmljb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXMuaWNvbiA9IHsgLi4uYmFzZUljb24sIHR5cGU6IHJlcy5pY29uIH0gYXMgU1RJY29uO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXMuaWNvbiA9IHsgLi4uYmFzZUljb24sIC4uLnJlcy5pY29uIH07XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVEZWZhdWx0KHJlcyk7XG5cbiAgICBpZiAodGhpcy5hY2wpIHtcbiAgICAgIHJlcy5tZW51cyA9IHJlcy5tZW51cz8uZmlsdGVyKHcgPT4gdGhpcy5hY2wuY2FuKHcuYWNsISkpO1xuICAgIH1cblxuICAgIHJldHVybiByZXMubWVudXM/Lmxlbmd0aCA9PT0gMCA/IG51bGwgOiByZXM7XG4gIH1cblxuICBwcml2YXRlIHJlc3RvcmVSZW5kZXIoaXRlbTogX1NUQ29sdW1uKTogdm9pZCB7XG4gICAgaWYgKGl0ZW0ucmVuZGVyVGl0bGUpIHtcbiAgICAgIGl0ZW0uX19yZW5kZXJUaXRsZSA9XG4gICAgICAgIHR5cGVvZiBpdGVtLnJlbmRlclRpdGxlID09PSAnc3RyaW5nJ1xuICAgICAgICAgID8gdGhpcy5yb3dTb3VyY2UuZ2V0VGl0bGUoaXRlbS5yZW5kZXJUaXRsZSlcbiAgICAgICAgICA6IChpdGVtLnJlbmRlclRpdGxlIGFzIFRlbXBsYXRlUmVmPHZvaWQ+KTtcbiAgICB9XG4gICAgaWYgKGl0ZW0ucmVuZGVyKSB7XG4gICAgICBpdGVtLl9fcmVuZGVyID1cbiAgICAgICAgdHlwZW9mIGl0ZW0ucmVuZGVyID09PSAnc3RyaW5nJyA/IHRoaXMucm93U291cmNlLmdldFJvdyhpdGVtLnJlbmRlcikgOiAoaXRlbS5yZW5kZXIgYXMgVGVtcGxhdGVSZWY8dm9pZD4pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgd2lkZ2V0Q29lcmNlKGl0ZW06IF9TVENvbHVtbik6IHZvaWQge1xuICAgIGlmIChpdGVtLnR5cGUgIT09ICd3aWRnZXQnKSByZXR1cm47XG4gICAgaWYgKGl0ZW0ud2lkZ2V0ID09IG51bGwgfHwgIXRoaXMuc3RXaWRnZXRSZWdpc3RyeS5oYXMoaXRlbS53aWRnZXQudHlwZSkpIHtcbiAgICAgIGRlbGV0ZSBpdGVtLnR5cGU7XG4gICAgICBpZiAodHlwZW9mIG5nRGV2TW9kZSA9PT0gJ3VuZGVmaW5lZCcgfHwgbmdEZXZNb2RlKSB7XG4gICAgICAgIHdhcm4oYHN0OiBObyB3aWRnZXQgZm9yIHR5cGUgXCIke2l0ZW0ud2lkZ2V0Py50eXBlfVwiYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZW5IZWFkZXJzKHJvb3RDb2x1bW5zOiBfU1RDb2x1bW5bXSk6IHsgaGVhZGVyczogX1NUSGVhZGVyW11bXTsgaGVhZGVyV2lkdGhzOiBzdHJpbmdbXSB8IG51bGwgfSB7XG4gICAgY29uc3Qgcm93czogX1NUSGVhZGVyW11bXSA9IFtdO1xuICAgIGNvbnN0IHdpZHRoczogc3RyaW5nW10gPSBbXTtcbiAgICBjb25zdCBmaWxsUm93Q2VsbHMgPSAoY29sdW1uczogX1NUQ29sdW1uW10sIGNvbEluZGV4OiBudW1iZXIsIHJvd0luZGV4ID0gMCk6IG51bWJlcltdID0+IHtcbiAgICAgIC8vIEluaXQgcm93c1xuICAgICAgcm93c1tyb3dJbmRleF0gPSByb3dzW3Jvd0luZGV4XSB8fCBbXTtcblxuICAgICAgbGV0IGN1cnJlbnRDb2xJbmRleCA9IGNvbEluZGV4O1xuICAgICAgY29uc3QgY29sU3BhbnM6IG51bWJlcltdID0gY29sdW1ucy5tYXAoY29sdW1uID0+IHtcbiAgICAgICAgY29uc3QgY2VsbDogU1RDb2x1bW5Hcm91cFR5cGUgPSB7XG4gICAgICAgICAgY29sdW1uLFxuICAgICAgICAgIGNvbFN0YXJ0OiBjdXJyZW50Q29sSW5kZXgsXG4gICAgICAgICAgaGFzU3ViQ29sdW1uczogZmFsc2VcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgY29sU3BhbiA9IDE7XG5cbiAgICAgICAgY29uc3Qgc3ViQ29sdW1ucyA9IGNvbHVtbi5jaGlsZHJlbjtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc3ViQ29sdW1ucykgJiYgc3ViQ29sdW1ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgY29sU3BhbiA9IGZpbGxSb3dDZWxscyhzdWJDb2x1bW5zLCBjdXJyZW50Q29sSW5kZXgsIHJvd0luZGV4ICsgMSkucmVkdWNlKCh0b3RhbCwgY291bnQpID0+IHRvdGFsICsgY291bnQsIDApO1xuICAgICAgICAgIGNlbGwuaGFzU3ViQ29sdW1ucyA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2lkdGhzLnB1c2goKGNlbGwuY29sdW1uLndpZHRoIGFzIHN0cmluZykgfHwgJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCdjb2xTcGFuJyBpbiBjb2x1bW4pIHtcbiAgICAgICAgICBjb2xTcGFuID0gY29sdW1uLmNvbFNwYW4hO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCdyb3dTcGFuJyBpbiBjb2x1bW4pIHtcbiAgICAgICAgICBjZWxsLnJvd1NwYW4gPSBjb2x1bW4ucm93U3BhbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNlbGwuY29sU3BhbiA9IGNvbFNwYW47XG4gICAgICAgIGNlbGwuY29sRW5kID0gY2VsbC5jb2xTdGFydCArIGNvbFNwYW4gLSAxO1xuICAgICAgICByb3dzW3Jvd0luZGV4XS5wdXNoKGNlbGwgYXMgTnpTYWZlQW55KTtcblxuICAgICAgICBjdXJyZW50Q29sSW5kZXggKz0gY29sU3BhbjtcblxuICAgICAgICByZXR1cm4gY29sU3BhbjtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gY29sU3BhbnM7XG4gICAgfTtcblxuICAgIGZpbGxSb3dDZWxscyhyb290Q29sdW1ucywgMCk7XG5cbiAgICAvLyBIYW5kbGUgYHJvd1NwYW5gXG4gICAgY29uc3Qgcm93Q291bnQgPSByb3dzLmxlbmd0aDtcbiAgICBmb3IgKGxldCByb3dJbmRleCA9IDA7IHJvd0luZGV4IDwgcm93Q291bnQ7IHJvd0luZGV4ICs9IDEpIHtcbiAgICAgIHJvd3Nbcm93SW5kZXhdLmZvckVhY2goY2VsbCA9PiB7XG4gICAgICAgIGlmICghKCdyb3dTcGFuJyBpbiBjZWxsKSAmJiAhKGNlbGwgYXMgX1NUSGVhZGVyKS5oYXNTdWJDb2x1bW5zKSB7XG4gICAgICAgICAgKGNlbGwgYXMgX1NUSGVhZGVyKS5yb3dTcGFuID0gcm93Q291bnQgLSByb3dJbmRleDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgaGVhZGVyczogcm93cywgaGVhZGVyV2lkdGhzOiByb3dDb3VudCA+IDEgPyB3aWR0aHMgOiBudWxsIH07XG4gIH1cblxuICBwcml2YXRlIGNsZWFuQ29uZChsaXN0OiBfU1RDb2x1bW5bXSk6IF9TVENvbHVtbltdIHtcbiAgICBjb25zdCByZXM6IF9TVENvbHVtbltdID0gW107XG4gICAgY29uc3QgY29weUxpc3QgPSBkZWVwQ29weShsaXN0KTtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgY29weUxpc3QpIHtcbiAgICAgIGlmICh0eXBlb2YgaXRlbS5paWYgPT09ICdmdW5jdGlvbicgJiYgIWl0ZW0uaWlmKGl0ZW0pKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuYWNsICYmIGl0ZW0uYWNsICYmICF0aGlzLmFjbC5jYW4oaXRlbS5hY2wpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbS5jaGlsZHJlbikgJiYgaXRlbS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgIGl0ZW0uY2hpbGRyZW4gPSB0aGlzLmNsZWFuQ29uZChpdGVtLmNoaWxkcmVuKTtcbiAgICAgIH1cbiAgICAgIHJlcy5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgcHJpdmF0ZSBtZXJnZUNsYXNzKGl0ZW06IF9TVENvbHVtbik6IHZvaWQge1xuICAgIGNvbnN0IGJ1aWx0SW5DbGFzc05hbWVzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGlmIChpdGVtLl9pc1RydW5jYXRlKSB7XG4gICAgICBidWlsdEluQ2xhc3NOYW1lcy5wdXNoKCd0ZXh0LXRydW5jYXRlJyk7XG4gICAgfVxuICAgIGNvbnN0IHJhd0NsYXNzTmFtZSA9IGl0ZW0uY2xhc3NOYW1lO1xuICAgIGlmICghcmF3Q2xhc3NOYW1lKSB7XG4gICAgICBjb25zdCB0eXBlQ2xhc3MgPSAoXG4gICAgICAgIHtcbiAgICAgICAgICBudW1iZXI6ICd0ZXh0LXJpZ2h0JyxcbiAgICAgICAgICBjdXJyZW5jeTogJ3RleHQtcmlnaHQnLFxuICAgICAgICAgIGRhdGU6ICd0ZXh0LWNlbnRlcidcbiAgICAgICAgfSBhcyBOelNhZmVBbnlcbiAgICAgIClbaXRlbS50eXBlIV07XG4gICAgICBpZiAodHlwZUNsYXNzKSB7XG4gICAgICAgIGJ1aWx0SW5DbGFzc05hbWVzLnB1c2godHlwZUNsYXNzKTtcbiAgICAgIH1cbiAgICAgIGl0ZW0uX2NsYXNzTmFtZSA9IGJ1aWx0SW5DbGFzc05hbWVzO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHJhd0NsYXNzTmFtZUlzQXJyYXkgPSBBcnJheS5pc0FycmF5KHJhd0NsYXNzTmFtZSk7XG4gICAgaWYgKCFyYXdDbGFzc05hbWVJc0FycmF5ICYmIHR5cGVvZiByYXdDbGFzc05hbWUgPT09ICdvYmplY3QnKSB7XG4gICAgICBjb25zdCBvYmpDbGFzc05hbWVzOiBOZ0NsYXNzSW50ZXJmYWNlID0gcmF3Q2xhc3NOYW1lO1xuICAgICAgYnVpbHRJbkNsYXNzTmFtZXMuZm9yRWFjaChrZXkgPT4gKG9iakNsYXNzTmFtZXNba2V5XSA9IHRydWUpKTtcbiAgICAgIGl0ZW0uX2NsYXNzTmFtZSA9IG9iakNsYXNzTmFtZXM7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgYXJyYXlDbGFzc05hbWVzID0gcmF3Q2xhc3NOYW1lSXNBcnJheSA/IEFycmF5LmZyb20ocmF3Q2xhc3NOYW1lIGFzIHN0cmluZ1tdKSA6IFtyYXdDbGFzc05hbWVdO1xuICAgIGFycmF5Q2xhc3NOYW1lcy5zcGxpY2UoMCwgMCwgLi4uYnVpbHRJbkNsYXNzTmFtZXMpO1xuICAgIGl0ZW0uX2NsYXNzTmFtZSA9IFsuLi5uZXcgU2V0KGFycmF5Q2xhc3NOYW1lcyldLmZpbHRlcih3ID0+ICEhdyk7XG4gIH1cblxuICBwcm9jZXNzKFxuICAgIGxpc3Q6IFNUQ29sdW1uW10sXG4gICAgb3B0aW9uczogU1RDb2x1bW5Tb3VyY2VQcm9jZXNzT3B0aW9uc1xuICApOiB7IGNvbHVtbnM6IF9TVENvbHVtbltdOyBoZWFkZXJzOiBfU1RIZWFkZXJbXVtdOyBoZWFkZXJXaWR0aHM6IHN0cmluZ1tdIHwgbnVsbCB9IHtcbiAgICBpZiAoIWxpc3QgfHwgbGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB7IGNvbHVtbnM6IFtdLCBoZWFkZXJzOiBbXSwgaGVhZGVyV2lkdGhzOiBudWxsIH07XG4gICAgfVxuICAgIGNvbnN0IHsgbm9JbmRleCB9ID0gdGhpcy5jb2c7XG4gICAgbGV0IGNoZWNrYm94Q291bnQgPSAwO1xuICAgIGxldCByYWRpb0NvdW50ID0gMDtcbiAgICBsZXQgcG9pbnQgPSAwO1xuICAgIGNvbnN0IGNvbHVtbnM6IF9TVENvbHVtbltdID0gW107XG5cbiAgICBjb25zdCBwcm9jZXNzSXRlbSA9IChpdGVtOiBfU1RDb2x1bW4pOiBfU1RDb2x1bW4gPT4ge1xuICAgICAgLy8gaW5kZXhcbiAgICAgIGlmIChpdGVtLmluZGV4KSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShpdGVtLmluZGV4KSkge1xuICAgICAgICAgIGl0ZW0uaW5kZXggPSBpdGVtLmluZGV4LnRvU3RyaW5nKCkuc3BsaXQoJy4nKTtcbiAgICAgICAgfVxuICAgICAgICBpdGVtLmluZGV4S2V5ID0gaXRlbS5pbmRleC5qb2luKCcuJyk7XG4gICAgICB9XG5cbiAgICAgIC8vICNyZWdpb24gdGl0bGVcblxuICAgICAgY29uc3QgdGl0ID0gKHR5cGVvZiBpdGVtLnRpdGxlID09PSAnc3RyaW5nJyA/IHsgdGV4dDogaXRlbS50aXRsZSB9IDogaXRlbS50aXRsZSkgfHwge307XG4gICAgICBpZiAodGl0LmkxOG4gJiYgdGhpcy5pMThuU3J2KSB7XG4gICAgICAgIHRpdC50ZXh0ID0gdGhpcy5pMThuU3J2LmZhbnlpKHRpdC5pMThuKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aXQudGV4dCkge1xuICAgICAgICB0aXQuX3RleHQgPSB0aGlzLmRvbS5ieXBhc3NTZWN1cml0eVRydXN0SHRtbCh0aXQudGV4dCk7XG4gICAgICB9XG4gICAgICBpdGVtLnRpdGxlID0gdGl0O1xuXG4gICAgICAvLyAjZW5kcmVnaW9uXG5cbiAgICAgIC8vIG5vXG4gICAgICBpZiAoaXRlbS50eXBlID09PSAnbm8nKSB7XG4gICAgICAgIGl0ZW0ubm9JbmRleCA9IGl0ZW0ubm9JbmRleCA9PSBudWxsID8gbm9JbmRleCA6IGl0ZW0ubm9JbmRleDtcbiAgICAgIH1cbiAgICAgIC8vIGNoZWNrYm94XG4gICAgICBpZiAoaXRlbS5zZWxlY3Rpb25zID09IG51bGwpIHtcbiAgICAgICAgaXRlbS5zZWxlY3Rpb25zID0gW107XG4gICAgICB9XG4gICAgICBpZiAoaXRlbS50eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgICsrY2hlY2tib3hDb3VudDtcbiAgICAgICAgaWYgKCFpdGVtLndpZHRoKSB7XG4gICAgICAgICAgaXRlbS53aWR0aCA9IGAke2l0ZW0uc2VsZWN0aW9ucy5sZW5ndGggPiAwID8gNjIgOiA1MH1weGA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmFjbCkge1xuICAgICAgICBpdGVtLnNlbGVjdGlvbnMgPSBpdGVtLnNlbGVjdGlvbnMuZmlsdGVyKHcgPT4gdGhpcy5hY2wuY2FuKHcuYWNsISkpO1xuICAgICAgfVxuICAgICAgLy8gcmFkaW9cbiAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgICAgKytyYWRpb0NvdW50O1xuICAgICAgICBpdGVtLnNlbGVjdGlvbnMgPSBbXTtcbiAgICAgICAgaWYgKCFpdGVtLndpZHRoKSB7XG4gICAgICAgICAgaXRlbS53aWR0aCA9ICc1MHB4JztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gdHlwZXNcbiAgICAgIGlmIChpdGVtLnR5cGUgPT09ICd5bicpIHtcbiAgICAgICAgaXRlbS55biA9IHsgdHJ1dGg6IHRydWUsIC4uLnRoaXMuY29nLnluLCAuLi5pdGVtLnluIH07XG4gICAgICB9XG4gICAgICAvLyBkYXRlXG4gICAgICBpZiAoaXRlbS50eXBlID09PSAnZGF0ZScpIHtcbiAgICAgICAgaXRlbS5kYXRlRm9ybWF0ID0gaXRlbS5kYXRlRm9ybWF0IHx8IHRoaXMuY29nLmRhdGU/LmZvcm1hdDtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgKGl0ZW0udHlwZSA9PT0gJ2xpbmsnICYmIHR5cGVvZiBpdGVtLmNsaWNrICE9PSAnZnVuY3Rpb24nKSB8fFxuICAgICAgICAoaXRlbS50eXBlID09PSAnYmFkZ2UnICYmIGl0ZW0uYmFkZ2UgPT0gbnVsbCkgfHxcbiAgICAgICAgKGl0ZW0udHlwZSA9PT0gJ3RhZycgJiYgaXRlbS50YWcgPT0gbnVsbCkgfHxcbiAgICAgICAgKGl0ZW0udHlwZSA9PT0gJ2VudW0nICYmIGl0ZW0uZW51bSA9PSBudWxsKVxuICAgICAgKSB7XG4gICAgICAgIGl0ZW0udHlwZSA9ICcnO1xuICAgICAgfVxuICAgICAgaXRlbS5faXNUcnVuY2F0ZSA9ICEhaXRlbS53aWR0aCAmJiBvcHRpb25zLndpZHRoTW9kZS5zdHJpY3RCZWhhdmlvciA9PT0gJ3RydW5jYXRlJyAmJiBpdGVtLnR5cGUgIT09ICdpbWcnO1xuICAgICAgLy8gY2xhc3NOYW1lXG4gICAgICB0aGlzLm1lcmdlQ2xhc3MoaXRlbSk7XG4gICAgICAvLyB3aWR0aFxuICAgICAgaWYgKHR5cGVvZiBpdGVtLndpZHRoID09PSAnbnVtYmVyJykge1xuICAgICAgICBpdGVtLl93aWR0aCA9IGl0ZW0ud2lkdGg7XG4gICAgICAgIGl0ZW0ud2lkdGggPSBgJHtpdGVtLndpZHRofXB4YDtcbiAgICAgIH1cbiAgICAgIGl0ZW0uX2xlZnQgPSBmYWxzZTtcbiAgICAgIGl0ZW0uX3JpZ2h0ID0gZmFsc2U7XG4gICAgICBpdGVtLnNhZmVUeXBlID0gaXRlbS5zYWZlVHlwZSA/PyBvcHRpb25zLnNhZmVUeXBlO1xuXG4gICAgICAvLyBzb3J0ZXJcbiAgICAgIGl0ZW0uX3NvcnQgPSB0aGlzLnNvcnRDb2VyY2UoaXRlbSk7XG4gICAgICAvLyBmaWx0ZXJcbiAgICAgIGl0ZW0uZmlsdGVyID0gdGhpcy5maWx0ZXJDb2VyY2UoaXRlbSkgYXMgU1RDb2x1bW5GaWx0ZXI7XG4gICAgICAvLyBidXR0b25zXG4gICAgICBpdGVtLmJ1dHRvbnMgPSB0aGlzLmJ0bkNvZXJjZShpdGVtLmJ1dHRvbnMhKTtcbiAgICAgIC8vIHdpZGdldFxuICAgICAgdGhpcy53aWRnZXRDb2VyY2UoaXRlbSk7XG4gICAgICAvLyByZXN0b3JlIGN1c3RvbSByb3dcbiAgICAgIHRoaXMucmVzdG9yZVJlbmRlcihpdGVtKTtcbiAgICAgIC8vIHJlc2l6YWJsZVxuICAgICAgaXRlbS5yZXNpemFibGUgPSB7XG4gICAgICAgIGRpc2FibGVkOiB0cnVlLFxuICAgICAgICBib3VuZHM6ICd3aW5kb3cnLFxuICAgICAgICBtaW5XaWR0aDogNjAsXG4gICAgICAgIG1heFdpZHRoOiAzNjAsXG4gICAgICAgIHByZXZpZXc6IHRydWUsXG4gICAgICAgIC4uLm9wdGlvbnMucmVzaXphYmxlLFxuICAgICAgICAuLi4odHlwZW9mIGl0ZW0ucmVzaXphYmxlID09PSAnYm9vbGVhbicgPyAoeyBkaXNhYmxlZDogIWl0ZW0ucmVzaXphYmxlIH0gYXMgU1RSZXNpemFibGUpIDogaXRlbS5yZXNpemFibGUpXG4gICAgICB9O1xuXG4gICAgICBpdGVtLl9fcG9pbnQgPSBwb2ludCsrO1xuXG4gICAgICByZXR1cm4gaXRlbTtcbiAgICB9O1xuXG4gICAgY29uc3QgcHJvY2Vzc0xpc3QgPSAoZGF0YTogX1NUQ29sdW1uW10pOiB2b2lkID0+IHtcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBkYXRhKSB7XG4gICAgICAgIGNvbHVtbnMucHVzaChwcm9jZXNzSXRlbShpdGVtKSk7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZW0uY2hpbGRyZW4pKSB7XG4gICAgICAgICAgcHJvY2Vzc0xpc3QoaXRlbS5jaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgY29weUxpc3QgPSB0aGlzLmNsZWFuQ29uZChsaXN0IGFzIF9TVENvbHVtbltdKTtcbiAgICBwcm9jZXNzTGlzdChjb3B5TGlzdCk7XG5cbiAgICBpZiAoY2hlY2tib3hDb3VudCA+IDEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgW3N0XToganVzdCBvbmx5IG9uZSBjb2x1bW4gY2hlY2tib3hgKTtcbiAgICB9XG4gICAgaWYgKHJhZGlvQ291bnQgPiAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFtzdF06IGp1c3Qgb25seSBvbmUgY29sdW1uIHJhZGlvYCk7XG4gICAgfVxuXG4gICAgdGhpcy5maXhlZENvZXJjZShjb2x1bW5zIGFzIF9TVENvbHVtbltdKTtcbiAgICByZXR1cm4ge1xuICAgICAgY29sdW1uczogY29sdW1ucy5maWx0ZXIodyA9PiAhQXJyYXkuaXNBcnJheSh3LmNoaWxkcmVuKSB8fCB3LmNoaWxkcmVuLmxlbmd0aCA9PT0gMCksXG4gICAgICAuLi50aGlzLmdlbkhlYWRlcnMoY29weUxpc3QpXG4gICAgfTtcbiAgfVxuXG4gIHJlc3RvcmVBbGxSZW5kZXIoY29sdW1uczogX1NUQ29sdW1uW10pOiB2b2lkIHtcbiAgICBjb2x1bW5zLmZvckVhY2goaSA9PiB0aGlzLnJlc3RvcmVSZW5kZXIoaSkpO1xuICB9XG5cbiAgdXBkYXRlRGVmYXVsdChmaWx0ZXI6IFNUQ29sdW1uRmlsdGVyKTogdGhpcyB7XG4gICAgaWYgKGZpbHRlci5tZW51cyA9PSBudWxsKSByZXR1cm4gdGhpcztcblxuICAgIGlmIChmaWx0ZXIudHlwZSA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICBmaWx0ZXIuZGVmYXVsdCA9IGZpbHRlci5tZW51cyEuZmluZEluZGV4KHcgPT4gdy5jaGVja2VkISkgIT09IC0xO1xuICAgIH0gZWxzZSB7XG4gICAgICBmaWx0ZXIuZGVmYXVsdCA9ICEhZmlsdGVyLm1lbnVzIVswXS52YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjbGVhbkZpbHRlcihjb2w6IF9TVENvbHVtbik6IHRoaXMge1xuICAgIGNvbnN0IGYgPSBjb2wuZmlsdGVyITtcbiAgICBmLmRlZmF1bHQgPSBmYWxzZTtcbiAgICBpZiAoZi50eXBlID09PSAnZGVmYXVsdCcpIHtcbiAgICAgIGYubWVudXMhLmZvckVhY2goaSA9PiAoaS5jaGVja2VkID0gZmFsc2UpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZi5tZW51cyFbMF0udmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG4iXX0=