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
            if (item.icon) {
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
            builtInClassNames.push({
                number: 'text-right',
                currency: 'text-right',
                date: 'text-center'
            }[item.type]);
            item._className = builtInClassNames.filter(w => !!w);
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
        if (!list || list.length === 0)
            throw new Error(`[st]: the columns property muse be define!`);
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
}
STColumnSource.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.8", ngImport: i0, type: STColumnSource, deps: [{ token: i1.DomSanitizer }, { token: i2.STRowSource, host: true }, { token: i3.ACLService, optional: true }, { token: ALAIN_I18N_TOKEN, optional: true }, { token: i4.STWidgetRegistry }], target: i0.ɵɵFactoryTarget.Injectable });
STColumnSource.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.8", ngImport: i0, type: STColumnSource });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.8", ngImport: i0, type: STColumnSource, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtY29sdW1uLXNvdXJjZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9zdC9zdC1jb2x1bW4tc291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQWUsTUFBTSxlQUFlLENBQUM7QUFJaEYsT0FBTyxFQUFvQixnQkFBZ0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUVsRSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7Ozs7QUEwQm5ELE1BQU0sT0FBTyxjQUFjO0lBR3pCLFlBQ1UsR0FBaUIsRUFDVCxTQUFzQixFQUNsQixHQUFlLEVBQ1csT0FBeUIsRUFDL0QsZ0JBQWtDO1FBSmxDLFFBQUcsR0FBSCxHQUFHLENBQWM7UUFDVCxjQUFTLEdBQVQsU0FBUyxDQUFhO1FBQ2xCLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDVyxZQUFPLEdBQVAsT0FBTyxDQUFrQjtRQUMvRCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQ3pDLENBQUM7SUFFSixNQUFNLENBQUMsR0FBa0I7UUFDdkIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDakIsQ0FBQztJQUVPLE1BQU0sQ0FBQyxDQUFpQixFQUFFLEdBQXNCO1FBQ3RELElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxLQUFLLEVBQUU7WUFDcEMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7WUFDZCxPQUFPO1NBQ1I7UUFFRCxJQUFJLEdBQUcsR0FBRztZQUNSLEdBQUcsR0FBRztTQUNQLENBQUM7UUFDRixJQUFJLE9BQU8sQ0FBQyxDQUFDLEdBQUcsS0FBSyxRQUFRLEVBQUU7WUFDN0IsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FB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TUFBTTsyQkFBQyxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIb3N0LCBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbmltcG9ydCB7IEFDTFNlcnZpY2UgfSBmcm9tICdAZGVsb24vYWNsJztcbmltcG9ydCB7IEFsYWluSTE4TlNlcnZpY2UsIEFMQUlOX0kxOE5fVE9LRU4gfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgQWxhaW5TVENvbmZpZyB9IGZyb20gJ0BkZWxvbi91dGlsL2NvbmZpZyc7XG5pbXBvcnQgeyBkZWVwQ29weSwgd2FybiB9IGZyb20gJ0BkZWxvbi91dGlsL290aGVyJztcbmltcG9ydCB0eXBlIHsgTmdDbGFzc0ludGVyZmFjZSwgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuaW1wb3J0IHsgU1RSb3dTb3VyY2UgfSBmcm9tICcuL3N0LXJvdy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU1RXaWRnZXRSZWdpc3RyeSB9IGZyb20gJy4vc3Qtd2lkZ2V0JztcbmltcG9ydCB7XG4gIFNUQ29sdW1uLFxuICBTVENvbHVtbkJ1dHRvbixcbiAgU1RDb2x1bW5CdXR0b25Qb3AsXG4gIFNUQ29sdW1uRmlsdGVyLFxuICBTVENvbHVtbkdyb3VwVHlwZSxcbiAgU1RDb2x1bW5TYWZlVHlwZSxcbiAgU1RJY29uLFxuICBTVFJlc2l6YWJsZSxcbiAgU1RTb3J0TWFwLFxuICBTVFdpZHRoTW9kZVxufSBmcm9tICcuL3N0LmludGVyZmFjZXMnO1xuaW1wb3J0IHsgX1NUQ29sdW1uLCBfU1RIZWFkZXIgfSBmcm9tICcuL3N0LnR5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBTVENvbHVtblNvdXJjZVByb2Nlc3NPcHRpb25zIHtcbiAgd2lkdGhNb2RlOiBTVFdpZHRoTW9kZTtcbiAgcmVzaXphYmxlPzogU1RSZXNpemFibGU7XG4gIHNhZmVUeXBlOiBTVENvbHVtblNhZmVUeXBlO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU1RDb2x1bW5Tb3VyY2Uge1xuICBwcml2YXRlIGNvZyE6IEFsYWluU1RDb25maWc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBkb206IERvbVNhbml0aXplcixcbiAgICBASG9zdCgpIHByaXZhdGUgcm93U291cmNlOiBTVFJvd1NvdXJjZSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGFjbDogQUNMU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KEFMQUlOX0kxOE5fVE9LRU4pIHByaXZhdGUgaTE4blNydjogQWxhaW5JMThOU2VydmljZSxcbiAgICBwcml2YXRlIHN0V2lkZ2V0UmVnaXN0cnk6IFNUV2lkZ2V0UmVnaXN0cnlcbiAgKSB7fVxuXG4gIHNldENvZyh2YWw6IEFsYWluU1RDb25maWcpOiB2b2lkIHtcbiAgICB0aGlzLmNvZyA9IHZhbDtcbiAgfVxuXG4gIHByaXZhdGUgZml4UG9wKGk6IFNUQ29sdW1uQnV0dG9uLCBkZWY6IFNUQ29sdW1uQnV0dG9uUG9wKTogdm9pZCB7XG4gICAgaWYgKGkucG9wID09IG51bGwgfHwgaS5wb3AgPT09IGZhbHNlKSB7XG4gICAgICBpLnBvcCA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBwb3AgPSB7XG4gICAgICAuLi5kZWZcbiAgICB9O1xuICAgIGlmICh0eXBlb2YgaS5wb3AgPT09ICdzdHJpbmcnKSB7XG4gICAgICBwb3AudGl0bGUgPSBpLnBvcDtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBpLnBvcCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHBvcCA9IHtcbiAgICAgICAgLi4ucG9wLFxuICAgICAgICAuLi5pLnBvcFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHBvcC5jb25kaXRpb24gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHBvcC5jb25kaXRpb24gPSAoKSA9PiBmYWxzZTtcbiAgICB9XG5cbiAgICBpLnBvcCA9IHBvcDtcbiAgfVxuXG4gIHByaXZhdGUgYnRuQ29lcmNlKGxpc3Q6IFNUQ29sdW1uQnV0dG9uW10pOiBTVENvbHVtbkJ1dHRvbltdIHtcbiAgICBpZiAoIWxpc3QpIHJldHVybiBbXTtcbiAgICBjb25zdCByZXQ6IFNUQ29sdW1uQnV0dG9uW10gPSBbXTtcbiAgICBjb25zdCB7IG1vZGFsLCBkcmF3ZXIsIHBvcCwgYnRuSWNvbiB9ID0gdGhpcy5jb2c7XG5cbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgbGlzdCkge1xuICAgICAgaWYgKHRoaXMuYWNsICYmIGl0ZW0uYWNsICYmICF0aGlzLmFjbC5jYW4oaXRlbS5hY2wpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbS50eXBlID09PSAnbW9kYWwnIHx8IGl0ZW0udHlwZSA9PT0gJ3N0YXRpYycpIHtcbiAgICAgICAgaWYgKGl0ZW0ubW9kYWwgPT0gbnVsbCB8fCBpdGVtLm1vZGFsLmNvbXBvbmVudCA9PSBudWxsKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBuZ0Rldk1vZGUgPT09ICd1bmRlZmluZWQnIHx8IG5nRGV2TW9kZSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBbc3RdIFNob3VsZCBzcGVjaWZ5IG1vZGFsIHBhcmFtZXRlciB3aGVuIHR5cGUgaXMgbW9kYWwgb3Igc3RhdGljYCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGl0ZW0udHlwZSA9ICdub25lJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtLm1vZGFsID0geyAuLi57IHBhcmFtc05hbWU6ICdyZWNvcmQnLCBzaXplOiAnbGcnIH0sIC4uLm1vZGFsLCAuLi5pdGVtLm1vZGFsIH07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ2RyYXdlcicpIHtcbiAgICAgICAgaWYgKGl0ZW0uZHJhd2VyID09IG51bGwgfHwgaXRlbS5kcmF3ZXIuY29tcG9uZW50ID09IG51bGwpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIG5nRGV2TW9kZSA9PT0gJ3VuZGVmaW5lZCcgfHwgbmdEZXZNb2RlKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYFtzdF0gU2hvdWxkIHNwZWNpZnkgZHJhd2VyIHBhcmFtZXRlciB3aGVuIHR5cGUgaXMgZHJhd2VyYCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGl0ZW0udHlwZSA9ICdub25lJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtLmRyYXdlciA9IHsgLi4ueyBwYXJhbXNOYW1lOiAncmVjb3JkJywgc2l6ZTogJ2xnJyB9LCAuLi5kcmF3ZXIsIC4uLml0ZW0uZHJhd2VyIH07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ2RlbCcgJiYgdHlwZW9mIGl0ZW0ucG9wID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBpdGVtLnBvcCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIC8vIHBvcFxuICAgICAgdGhpcy5maXhQb3AoaXRlbSwgcG9wISk7XG5cbiAgICAgIGlmIChpdGVtLmljb24pIHtcbiAgICAgICAgaXRlbS5pY29uID0ge1xuICAgICAgICAgIC4uLmJ0bkljb24sXG4gICAgICAgICAgLi4uKHR5cGVvZiBpdGVtLmljb24gPT09ICdzdHJpbmcnID8geyB0eXBlOiBpdGVtLmljb24gfSA6IGl0ZW0uaWNvbilcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgaXRlbS5jaGlsZHJlbiA9IGl0ZW0uY2hpbGRyZW4gJiYgaXRlbS5jaGlsZHJlbi5sZW5ndGggPiAwID8gdGhpcy5idG5Db2VyY2UoaXRlbS5jaGlsZHJlbikgOiBbXTtcblxuICAgICAgLy8gaTE4blxuICAgICAgaWYgKGl0ZW0uaTE4biAmJiB0aGlzLmkxOG5TcnYpIHtcbiAgICAgICAgaXRlbS50ZXh0ID0gdGhpcy5pMThuU3J2LmZhbnlpKGl0ZW0uaTE4bik7XG4gICAgICB9XG5cbiAgICAgIHJldC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgICB0aGlzLmJ0bkNvZXJjZUlmKHJldCk7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIHByaXZhdGUgYnRuQ29lcmNlSWYobGlzdDogU1RDb2x1bW5CdXR0b25bXSk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiBsaXN0KSB7XG4gICAgICBpdGVtLmlpZkJlaGF2aW9yID0gaXRlbS5paWZCZWhhdmlvciB8fCB0aGlzLmNvZy5paWZCZWhhdmlvcjtcbiAgICAgIGlmIChpdGVtLmNoaWxkcmVuICYmIGl0ZW0uY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLmJ0bkNvZXJjZUlmKGl0ZW0uY2hpbGRyZW4pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXRlbS5jaGlsZHJlbiA9IFtdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZml4ZWRDb2VyY2UobGlzdDogX1NUQ29sdW1uW10pOiB2b2lkIHtcbiAgICBjb25zdCBjb3VudFJlZHVjZSA9IChhOiBudW1iZXIsIGI6IF9TVENvbHVtbik6IG51bWJlciA9PiBhICsgK2Iud2lkdGghLnRvU3RyaW5nKCkucmVwbGFjZSgncHgnLCAnJyk7XG4gICAgLy8gbGVmdCB3aWR0aFxuICAgIGxpc3RcbiAgICAgIC5maWx0ZXIodyA9PiB3LmZpeGVkICYmIHcuZml4ZWQgPT09ICdsZWZ0JyAmJiB3LndpZHRoKVxuICAgICAgLmZvckVhY2goKGl0ZW0sIGlkeCkgPT4gKGl0ZW0uX2xlZnQgPSBgJHtsaXN0LnNsaWNlKDAsIGlkeCkucmVkdWNlKGNvdW50UmVkdWNlLCAwKX1weGApKTtcbiAgICAvLyByaWdodCB3aWR0aFxuICAgIGxpc3RcbiAgICAgIC5maWx0ZXIodyA9PiB3LmZpeGVkICYmIHcuZml4ZWQgPT09ICdyaWdodCcgJiYgdy53aWR0aClcbiAgICAgIC5yZXZlcnNlKClcbiAgICAgIC5mb3JFYWNoKChpdGVtLCBpZHgpID0+IChpdGVtLl9yaWdodCA9IGAke2lkeCA+IDAgPyBsaXN0LnNsaWNlKC1pZHgpLnJlZHVjZShjb3VudFJlZHVjZSwgMCkgOiAwfXB4YCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBzb3J0Q29lcmNlKGl0ZW06IF9TVENvbHVtbik6IFNUU29ydE1hcCB7XG4gICAgY29uc3QgcmVzID0gdGhpcy5maXhTb3J0Q29lcmNlKGl0ZW0pO1xuICAgIHJlcy5yZU5hbWUgPSB7XG4gICAgICAuLi50aGlzLmNvZy5zb3J0UmVOYW1lLFxuICAgICAgLi4ucmVzLnJlTmFtZVxuICAgIH07XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIHByaXZhdGUgZml4U29ydENvZXJjZShpdGVtOiBfU1RDb2x1bW4pOiBTVFNvcnRNYXAge1xuICAgIGlmICh0eXBlb2YgaXRlbS5zb3J0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIHsgZW5hYmxlZDogZmFsc2UgfTtcbiAgICB9XG5cbiAgICBsZXQgcmVzOiBTVFNvcnRNYXAgPSB7fTtcblxuICAgIGlmICh0eXBlb2YgaXRlbS5zb3J0ID09PSAnc3RyaW5nJykge1xuICAgICAgcmVzLmtleSA9IGl0ZW0uc29ydDtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBpdGVtLnNvcnQgIT09ICdib29sZWFuJykge1xuICAgICAgcmVzID0gaXRlbS5zb3J0O1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGl0ZW0uc29ydCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICByZXMuY29tcGFyZSA9IChhLCBiKSA9PiBhW2l0ZW0uaW5kZXhLZXkhXSAtIGJbaXRlbS5pbmRleEtleSFdO1xuICAgIH1cblxuICAgIGlmICghcmVzLmtleSkge1xuICAgICAgcmVzLmtleSA9IGl0ZW0uaW5kZXhLZXk7XG4gICAgfVxuXG4gICAgcmVzLmVuYWJsZWQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIHByaXZhdGUgZmlsdGVyQ29lcmNlKGl0ZW06IF9TVENvbHVtbik6IFNUQ29sdW1uRmlsdGVyIHwgbnVsbCB7XG4gICAgaWYgKGl0ZW0uZmlsdGVyID09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGxldCByZXM6IFNUQ29sdW1uRmlsdGVyIHwgbnVsbCA9IGl0ZW0uZmlsdGVyO1xuICAgIHJlcy50eXBlID0gcmVzLnR5cGUgfHwgJ2RlZmF1bHQnO1xuICAgIHJlcy5zaG93T1BBcmVhID0gcmVzLnNob3dPUEFyZWEgIT09IGZhbHNlO1xuXG4gICAgbGV0IGljb24gPSAnZmlsdGVyJztcbiAgICBsZXQgaWNvblRoZW1lID0gJ2ZpbGwnO1xuICAgIGxldCBmaXhNZW51cyA9IHRydWU7XG4gICAgbGV0IHZhbHVlOiBOelNhZmVBbnkgPSB1bmRlZmluZWQ7XG4gICAgc3dpdGNoIChyZXMudHlwZSkge1xuICAgICAgY2FzZSAna2V5d29yZCc6XG4gICAgICAgIGljb24gPSAnc2VhcmNoJztcbiAgICAgICAgaWNvblRoZW1lID0gJ291dGxpbmUnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgIGljb24gPSAnc2VhcmNoJztcbiAgICAgICAgaWNvblRoZW1lID0gJ291dGxpbmUnO1xuICAgICAgICByZXMubnVtYmVyID0ge1xuICAgICAgICAgIHN0ZXA6IDEsXG4gICAgICAgICAgbWluOiAtSW5maW5pdHksXG4gICAgICAgICAgbWF4OiBJbmZpbml0eSxcbiAgICAgICAgICAuLi5yZXMubnVtYmVyXG4gICAgICAgIH07XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICAgIGljb24gPSAnY2FsZW5kYXInO1xuICAgICAgICBpY29uVGhlbWUgPSAnb3V0bGluZSc7XG4gICAgICAgIHJlcy5kYXRlID0ge1xuICAgICAgICAgIHJhbmdlOiBmYWxzZSxcbiAgICAgICAgICBtb2RlOiAnZGF0ZScsXG4gICAgICAgICAgc2hvd1RvZGF5OiB0cnVlLFxuICAgICAgICAgIHNob3dOb3c6IGZhbHNlLFxuICAgICAgICAgIC4uLnJlcy5kYXRlXG4gICAgICAgIH07XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY3VzdG9tJzpcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBmaXhNZW51cyA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKGZpeE1lbnVzICYmIChyZXMubWVudXMgPT0gbnVsbCB8fCByZXMubWVudXMhLmxlbmd0aCA9PT0gMCkpIHtcbiAgICAgIHJlcy5tZW51cyA9IFt7IHZhbHVlIH1dO1xuICAgIH1cblxuICAgIGlmIChyZXMubWVudXM/Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiByZXMubXVsdGlwbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXMubXVsdGlwbGUgPSB0cnVlO1xuICAgIH1cblxuICAgIHJlcy5jb25maXJtVGV4dCA9IHJlcy5jb25maXJtVGV4dCB8fCB0aGlzLmNvZy5maWx0ZXJDb25maXJtVGV4dDtcbiAgICByZXMuY2xlYXJUZXh0ID0gcmVzLmNsZWFyVGV4dCB8fCB0aGlzLmNvZy5maWx0ZXJDbGVhclRleHQ7XG4gICAgcmVzLmtleSA9IHJlcy5rZXkgfHwgaXRlbS5pbmRleEtleTtcbiAgICByZXMuaWNvbiA9IHJlcy5pY29uIHx8IGljb247XG5cbiAgICBjb25zdCBiYXNlSWNvbiA9IHsgdHlwZTogaWNvbiwgdGhlbWU6IGljb25UaGVtZSB9IGFzIFNUSWNvbjtcbiAgICBpZiAodHlwZW9mIHJlcy5pY29uID09PSAnc3RyaW5nJykge1xuICAgICAgcmVzLmljb24gPSB7IC4uLmJhc2VJY29uLCB0eXBlOiByZXMuaWNvbiB9IGFzIFNUSWNvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzLmljb24gPSB7IC4uLmJhc2VJY29uLCAuLi5yZXMuaWNvbiB9O1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlRGVmYXVsdChyZXMpO1xuXG4gICAgaWYgKHRoaXMuYWNsKSB7XG4gICAgICByZXMubWVudXMgPSByZXMubWVudXM/LmZpbHRlcih3ID0+IHRoaXMuYWNsLmNhbih3LmFjbCEpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzLm1lbnVzPy5sZW5ndGggPT09IDAgPyBudWxsIDogcmVzO1xuICB9XG5cbiAgcHJpdmF0ZSByZXN0b3JlUmVuZGVyKGl0ZW06IF9TVENvbHVtbik6IHZvaWQge1xuICAgIGlmIChpdGVtLnJlbmRlclRpdGxlKSB7XG4gICAgICBpdGVtLl9fcmVuZGVyVGl0bGUgPVxuICAgICAgICB0eXBlb2YgaXRlbS5yZW5kZXJUaXRsZSA9PT0gJ3N0cmluZydcbiAgICAgICAgICA/IHRoaXMucm93U291cmNlLmdldFRpdGxlKGl0ZW0ucmVuZGVyVGl0bGUpXG4gICAgICAgICAgOiAoaXRlbS5yZW5kZXJUaXRsZSBhcyBUZW1wbGF0ZVJlZjx2b2lkPik7XG4gICAgfVxuICAgIGlmIChpdGVtLnJlbmRlcikge1xuICAgICAgaXRlbS5fX3JlbmRlciA9XG4gICAgICAgIHR5cGVvZiBpdGVtLnJlbmRlciA9PT0gJ3N0cmluZycgPyB0aGlzLnJvd1NvdXJjZS5nZXRSb3coaXRlbS5yZW5kZXIpIDogKGl0ZW0ucmVuZGVyIGFzIFRlbXBsYXRlUmVmPHZvaWQ+KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHdpZGdldENvZXJjZShpdGVtOiBfU1RDb2x1bW4pOiB2b2lkIHtcbiAgICBpZiAoaXRlbS50eXBlICE9PSAnd2lkZ2V0JykgcmV0dXJuO1xuICAgIGlmIChpdGVtLndpZGdldCA9PSBudWxsIHx8ICF0aGlzLnN0V2lkZ2V0UmVnaXN0cnkuaGFzKGl0ZW0ud2lkZ2V0LnR5cGUpKSB7XG4gICAgICBkZWxldGUgaXRlbS50eXBlO1xuICAgICAgaWYgKHR5cGVvZiBuZ0Rldk1vZGUgPT09ICd1bmRlZmluZWQnIHx8IG5nRGV2TW9kZSkge1xuICAgICAgICB3YXJuKGBzdDogTm8gd2lkZ2V0IGZvciB0eXBlIFwiJHtpdGVtLndpZGdldD8udHlwZX1cImApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2VuSGVhZGVycyhyb290Q29sdW1uczogX1NUQ29sdW1uW10pOiB7IGhlYWRlcnM6IF9TVEhlYWRlcltdW107IGhlYWRlcldpZHRoczogc3RyaW5nW10gfCBudWxsIH0ge1xuICAgIGNvbnN0IHJvd3M6IF9TVEhlYWRlcltdW10gPSBbXTtcbiAgICBjb25zdCB3aWR0aHM6IHN0cmluZ1tdID0gW107XG4gICAgY29uc3QgZmlsbFJvd0NlbGxzID0gKGNvbHVtbnM6IF9TVENvbHVtbltdLCBjb2xJbmRleDogbnVtYmVyLCByb3dJbmRleCA9IDApOiBudW1iZXJbXSA9PiB7XG4gICAgICAvLyBJbml0IHJvd3NcbiAgICAgIHJvd3Nbcm93SW5kZXhdID0gcm93c1tyb3dJbmRleF0gfHwgW107XG5cbiAgICAgIGxldCBjdXJyZW50Q29sSW5kZXggPSBjb2xJbmRleDtcbiAgICAgIGNvbnN0IGNvbFNwYW5zOiBudW1iZXJbXSA9IGNvbHVtbnMubWFwKGNvbHVtbiA9PiB7XG4gICAgICAgIGNvbnN0IGNlbGw6IFNUQ29sdW1uR3JvdXBUeXBlID0ge1xuICAgICAgICAgIGNvbHVtbixcbiAgICAgICAgICBjb2xTdGFydDogY3VycmVudENvbEluZGV4LFxuICAgICAgICAgIGhhc1N1YkNvbHVtbnM6IGZhbHNlXG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IGNvbFNwYW4gPSAxO1xuXG4gICAgICAgIGNvbnN0IHN1YkNvbHVtbnMgPSBjb2x1bW4uY2hpbGRyZW47XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHN1YkNvbHVtbnMpICYmIHN1YkNvbHVtbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbFNwYW4gPSBmaWxsUm93Q2VsbHMoc3ViQ29sdW1ucywgY3VycmVudENvbEluZGV4LCByb3dJbmRleCArIDEpLnJlZHVjZSgodG90YWwsIGNvdW50KSA9PiB0b3RhbCArIGNvdW50LCAwKTtcbiAgICAgICAgICBjZWxsLmhhc1N1YkNvbHVtbnMgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdpZHRocy5wdXNoKChjZWxsLmNvbHVtbi53aWR0aCBhcyBzdHJpbmcpIHx8ICcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgnY29sU3BhbicgaW4gY29sdW1uKSB7XG4gICAgICAgICAgY29sU3BhbiA9IGNvbHVtbi5jb2xTcGFuITtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgncm93U3BhbicgaW4gY29sdW1uKSB7XG4gICAgICAgICAgY2VsbC5yb3dTcGFuID0gY29sdW1uLnJvd1NwYW47XG4gICAgICAgIH1cblxuICAgICAgICBjZWxsLmNvbFNwYW4gPSBjb2xTcGFuO1xuICAgICAgICBjZWxsLmNvbEVuZCA9IGNlbGwuY29sU3RhcnQgKyBjb2xTcGFuIC0gMTtcbiAgICAgICAgcm93c1tyb3dJbmRleF0ucHVzaChjZWxsIGFzIE56U2FmZUFueSk7XG5cbiAgICAgICAgY3VycmVudENvbEluZGV4ICs9IGNvbFNwYW47XG5cbiAgICAgICAgcmV0dXJuIGNvbFNwYW47XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGNvbFNwYW5zO1xuICAgIH07XG5cbiAgICBmaWxsUm93Q2VsbHMocm9vdENvbHVtbnMsIDApO1xuXG4gICAgLy8gSGFuZGxlIGByb3dTcGFuYFxuICAgIGNvbnN0IHJvd0NvdW50ID0gcm93cy5sZW5ndGg7XG4gICAgZm9yIChsZXQgcm93SW5kZXggPSAwOyByb3dJbmRleCA8IHJvd0NvdW50OyByb3dJbmRleCArPSAxKSB7XG4gICAgICByb3dzW3Jvd0luZGV4XS5mb3JFYWNoKGNlbGwgPT4ge1xuICAgICAgICBpZiAoISgncm93U3BhbicgaW4gY2VsbCkgJiYgIShjZWxsIGFzIF9TVEhlYWRlcikuaGFzU3ViQ29sdW1ucykge1xuICAgICAgICAgIChjZWxsIGFzIF9TVEhlYWRlcikucm93U3BhbiA9IHJvd0NvdW50IC0gcm93SW5kZXg7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7IGhlYWRlcnM6IHJvd3MsIGhlYWRlcldpZHRoczogcm93Q291bnQgPiAxID8gd2lkdGhzIDogbnVsbCB9O1xuICB9XG5cbiAgcHJpdmF0ZSBjbGVhbkNvbmQobGlzdDogX1NUQ29sdW1uW10pOiBfU1RDb2x1bW5bXSB7XG4gICAgY29uc3QgcmVzOiBfU1RDb2x1bW5bXSA9IFtdO1xuICAgIGNvbnN0IGNvcHlMaXN0ID0gZGVlcENvcHkobGlzdCk7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGNvcHlMaXN0KSB7XG4gICAgICBpZiAodHlwZW9mIGl0ZW0uaWlmID09PSAnZnVuY3Rpb24nICYmICFpdGVtLmlpZihpdGVtKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmFjbCAmJiBpdGVtLmFjbCAmJiAhdGhpcy5hY2wuY2FuKGl0ZW0uYWNsKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZW0uY2hpbGRyZW4pICYmIGl0ZW0uY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICBpdGVtLmNoaWxkcmVuID0gdGhpcy5jbGVhbkNvbmQoaXRlbS5jaGlsZHJlbik7XG4gICAgICB9XG4gICAgICByZXMucHVzaChpdGVtKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIHByaXZhdGUgbWVyZ2VDbGFzcyhpdGVtOiBfU1RDb2x1bW4pOiB2b2lkIHtcbiAgICBjb25zdCBidWlsdEluQ2xhc3NOYW1lczogc3RyaW5nW10gPSBbXTtcbiAgICBpZiAoaXRlbS5faXNUcnVuY2F0ZSkge1xuICAgICAgYnVpbHRJbkNsYXNzTmFtZXMucHVzaCgndGV4dC10cnVuY2F0ZScpO1xuICAgIH1cbiAgICBjb25zdCByYXdDbGFzc05hbWUgPSBpdGVtLmNsYXNzTmFtZTtcbiAgICBpZiAoIXJhd0NsYXNzTmFtZSkge1xuICAgICAgYnVpbHRJbkNsYXNzTmFtZXMucHVzaChcbiAgICAgICAgKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG51bWJlcjogJ3RleHQtcmlnaHQnLFxuICAgICAgICAgICAgY3VycmVuY3k6ICd0ZXh0LXJpZ2h0JyxcbiAgICAgICAgICAgIGRhdGU6ICd0ZXh0LWNlbnRlcidcbiAgICAgICAgICB9IGFzIE56U2FmZUFueVxuICAgICAgICApW2l0ZW0udHlwZSFdXG4gICAgICApO1xuICAgICAgaXRlbS5fY2xhc3NOYW1lID0gYnVpbHRJbkNsYXNzTmFtZXMuZmlsdGVyKHcgPT4gISF3KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCByYXdDbGFzc05hbWVJc0FycmF5ID0gQXJyYXkuaXNBcnJheShyYXdDbGFzc05hbWUpO1xuICAgIGlmICghcmF3Q2xhc3NOYW1lSXNBcnJheSAmJiB0eXBlb2YgcmF3Q2xhc3NOYW1lID09PSAnb2JqZWN0Jykge1xuICAgICAgY29uc3Qgb2JqQ2xhc3NOYW1lczogTmdDbGFzc0ludGVyZmFjZSA9IHJhd0NsYXNzTmFtZTtcbiAgICAgIGJ1aWx0SW5DbGFzc05hbWVzLmZvckVhY2goa2V5ID0+IChvYmpDbGFzc05hbWVzW2tleV0gPSB0cnVlKSk7XG4gICAgICBpdGVtLl9jbGFzc05hbWUgPSBvYmpDbGFzc05hbWVzO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGFycmF5Q2xhc3NOYW1lcyA9IHJhd0NsYXNzTmFtZUlzQXJyYXkgPyBBcnJheS5mcm9tKHJhd0NsYXNzTmFtZSBhcyBzdHJpbmdbXSkgOiBbcmF3Q2xhc3NOYW1lXTtcbiAgICBhcnJheUNsYXNzTmFtZXMuc3BsaWNlKDAsIDAsIC4uLmJ1aWx0SW5DbGFzc05hbWVzKTtcbiAgICBpdGVtLl9jbGFzc05hbWUgPSBbLi4ubmV3IFNldChhcnJheUNsYXNzTmFtZXMpXS5maWx0ZXIodyA9PiAhIXcpO1xuICB9XG5cbiAgcHJvY2VzcyhcbiAgICBsaXN0OiBTVENvbHVtbltdLFxuICAgIG9wdGlvbnM6IFNUQ29sdW1uU291cmNlUHJvY2Vzc09wdGlvbnNcbiAgKTogeyBjb2x1bW5zOiBfU1RDb2x1bW5bXTsgaGVhZGVyczogX1NUSGVhZGVyW11bXTsgaGVhZGVyV2lkdGhzOiBzdHJpbmdbXSB8IG51bGwgfSB7XG4gICAgaWYgKCFsaXN0IHx8IGxpc3QubGVuZ3RoID09PSAwKSB0aHJvdyBuZXcgRXJyb3IoYFtzdF06IHRoZSBjb2x1bW5zIHByb3BlcnR5IG11c2UgYmUgZGVmaW5lIWApO1xuXG4gICAgY29uc3QgeyBub0luZGV4IH0gPSB0aGlzLmNvZztcbiAgICBsZXQgY2hlY2tib3hDb3VudCA9IDA7XG4gICAgbGV0IHJhZGlvQ291bnQgPSAwO1xuICAgIGxldCBwb2ludCA9IDA7XG4gICAgY29uc3QgY29sdW1uczogX1NUQ29sdW1uW10gPSBbXTtcblxuICAgIGNvbnN0IHByb2Nlc3NJdGVtID0gKGl0ZW06IF9TVENvbHVtbik6IF9TVENvbHVtbiA9PiB7XG4gICAgICAvLyBpbmRleFxuICAgICAgaWYgKGl0ZW0uaW5kZXgpIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGl0ZW0uaW5kZXgpKSB7XG4gICAgICAgICAgaXRlbS5pbmRleCA9IGl0ZW0uaW5kZXgudG9TdHJpbmcoKS5zcGxpdCgnLicpO1xuICAgICAgICB9XG4gICAgICAgIGl0ZW0uaW5kZXhLZXkgPSBpdGVtLmluZGV4LmpvaW4oJy4nKTtcbiAgICAgIH1cblxuICAgICAgLy8gI3JlZ2lvbiB0aXRsZVxuXG4gICAgICBjb25zdCB0aXQgPSAodHlwZW9mIGl0ZW0udGl0bGUgPT09ICdzdHJpbmcnID8geyB0ZXh0OiBpdGVtLnRpdGxlIH0gOiBpdGVtLnRpdGxlKSB8fCB7fTtcbiAgICAgIGlmICh0aXQuaTE4biAmJiB0aGlzLmkxOG5TcnYpIHtcbiAgICAgICAgdGl0LnRleHQgPSB0aGlzLmkxOG5TcnYuZmFueWkodGl0LmkxOG4pO1xuICAgICAgfVxuICAgICAgaWYgKHRpdC50ZXh0KSB7XG4gICAgICAgIHRpdC5fdGV4dCA9IHRoaXMuZG9tLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHRpdC50ZXh0KTtcbiAgICAgIH1cbiAgICAgIGl0ZW0udGl0bGUgPSB0aXQ7XG5cbiAgICAgIC8vICNlbmRyZWdpb25cblxuICAgICAgLy8gbm9cbiAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdubycpIHtcbiAgICAgICAgaXRlbS5ub0luZGV4ID0gaXRlbS5ub0luZGV4ID09IG51bGwgPyBub0luZGV4IDogaXRlbS5ub0luZGV4O1xuICAgICAgfVxuICAgICAgLy8gY2hlY2tib3hcbiAgICAgIGlmIChpdGVtLnNlbGVjdGlvbnMgPT0gbnVsbCkge1xuICAgICAgICBpdGVtLnNlbGVjdGlvbnMgPSBbXTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgKytjaGVja2JveENvdW50O1xuICAgICAgICBpZiAoIWl0ZW0ud2lkdGgpIHtcbiAgICAgICAgICBpdGVtLndpZHRoID0gYCR7aXRlbS5zZWxlY3Rpb25zLmxlbmd0aCA+IDAgPyA2MiA6IDUwfXB4YDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuYWNsKSB7XG4gICAgICAgIGl0ZW0uc2VsZWN0aW9ucyA9IGl0ZW0uc2VsZWN0aW9ucy5maWx0ZXIodyA9PiB0aGlzLmFjbC5jYW4ody5hY2whKSk7XG4gICAgICB9XG4gICAgICAvLyByYWRpb1xuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgICArK3JhZGlvQ291bnQ7XG4gICAgICAgIGl0ZW0uc2VsZWN0aW9ucyA9IFtdO1xuICAgICAgICBpZiAoIWl0ZW0ud2lkdGgpIHtcbiAgICAgICAgICBpdGVtLndpZHRoID0gJzUwcHgnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyB0eXBlc1xuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ3luJykge1xuICAgICAgICBpdGVtLnluID0geyB0cnV0aDogdHJ1ZSwgLi4udGhpcy5jb2cueW4sIC4uLml0ZW0ueW4gfTtcbiAgICAgIH1cbiAgICAgIC8vIGRhdGVcbiAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdkYXRlJykge1xuICAgICAgICBpdGVtLmRhdGVGb3JtYXQgPSBpdGVtLmRhdGVGb3JtYXQgfHwgdGhpcy5jb2cuZGF0ZT8uZm9ybWF0O1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICAoaXRlbS50eXBlID09PSAnbGluaycgJiYgdHlwZW9mIGl0ZW0uY2xpY2sgIT09ICdmdW5jdGlvbicpIHx8XG4gICAgICAgIChpdGVtLnR5cGUgPT09ICdiYWRnZScgJiYgaXRlbS5iYWRnZSA9PSBudWxsKSB8fFxuICAgICAgICAoaXRlbS50eXBlID09PSAndGFnJyAmJiBpdGVtLnRhZyA9PSBudWxsKSB8fFxuICAgICAgICAoaXRlbS50eXBlID09PSAnZW51bScgJiYgaXRlbS5lbnVtID09IG51bGwpXG4gICAgICApIHtcbiAgICAgICAgaXRlbS50eXBlID0gJyc7XG4gICAgICB9XG4gICAgICBpdGVtLl9pc1RydW5jYXRlID0gISFpdGVtLndpZHRoICYmIG9wdGlvbnMud2lkdGhNb2RlLnN0cmljdEJlaGF2aW9yID09PSAndHJ1bmNhdGUnICYmIGl0ZW0udHlwZSAhPT0gJ2ltZyc7XG4gICAgICAvLyBjbGFzc05hbWVcbiAgICAgIHRoaXMubWVyZ2VDbGFzcyhpdGVtKTtcbiAgICAgIC8vIHdpZHRoXG4gICAgICBpZiAodHlwZW9mIGl0ZW0ud2lkdGggPT09ICdudW1iZXInKSB7XG4gICAgICAgIGl0ZW0uX3dpZHRoID0gaXRlbS53aWR0aDtcbiAgICAgICAgaXRlbS53aWR0aCA9IGAke2l0ZW0ud2lkdGh9cHhgO1xuICAgICAgfVxuICAgICAgaXRlbS5fbGVmdCA9IGZhbHNlO1xuICAgICAgaXRlbS5fcmlnaHQgPSBmYWxzZTtcbiAgICAgIGl0ZW0uc2FmZVR5cGUgPSBpdGVtLnNhZmVUeXBlID8/IG9wdGlvbnMuc2FmZVR5cGU7XG5cbiAgICAgIC8vIHNvcnRlclxuICAgICAgaXRlbS5fc29ydCA9IHRoaXMuc29ydENvZXJjZShpdGVtKTtcbiAgICAgIC8vIGZpbHRlclxuICAgICAgaXRlbS5maWx0ZXIgPSB0aGlzLmZpbHRlckNvZXJjZShpdGVtKSBhcyBTVENvbHVtbkZpbHRlcjtcbiAgICAgIC8vIGJ1dHRvbnNcbiAgICAgIGl0ZW0uYnV0dG9ucyA9IHRoaXMuYnRuQ29lcmNlKGl0ZW0uYnV0dG9ucyEpO1xuICAgICAgLy8gd2lkZ2V0XG4gICAgICB0aGlzLndpZGdldENvZXJjZShpdGVtKTtcbiAgICAgIC8vIHJlc3RvcmUgY3VzdG9tIHJvd1xuICAgICAgdGhpcy5yZXN0b3JlUmVuZGVyKGl0ZW0pO1xuICAgICAgLy8gcmVzaXphYmxlXG4gICAgICBpdGVtLnJlc2l6YWJsZSA9IHtcbiAgICAgICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgICAgIGJvdW5kczogJ3dpbmRvdycsXG4gICAgICAgIG1pbldpZHRoOiA2MCxcbiAgICAgICAgbWF4V2lkdGg6IDM2MCxcbiAgICAgICAgcHJldmlldzogdHJ1ZSxcbiAgICAgICAgLi4ub3B0aW9ucy5yZXNpemFibGUsXG4gICAgICAgIC4uLih0eXBlb2YgaXRlbS5yZXNpemFibGUgPT09ICdib29sZWFuJyA/ICh7IGRpc2FibGVkOiAhaXRlbS5yZXNpemFibGUgfSBhcyBTVFJlc2l6YWJsZSkgOiBpdGVtLnJlc2l6YWJsZSlcbiAgICAgIH07XG5cbiAgICAgIGl0ZW0uX19wb2ludCA9IHBvaW50Kys7XG5cbiAgICAgIHJldHVybiBpdGVtO1xuICAgIH07XG5cbiAgICBjb25zdCBwcm9jZXNzTGlzdCA9IChkYXRhOiBfU1RDb2x1bW5bXSk6IHZvaWQgPT4ge1xuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgY29sdW1ucy5wdXNoKHByb2Nlc3NJdGVtKGl0ZW0pKTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbS5jaGlsZHJlbikpIHtcbiAgICAgICAgICBwcm9jZXNzTGlzdChpdGVtLmNoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBjb3B5TGlzdCA9IHRoaXMuY2xlYW5Db25kKGxpc3QgYXMgX1NUQ29sdW1uW10pO1xuICAgIHByb2Nlc3NMaXN0KGNvcHlMaXN0KTtcblxuICAgIGlmIChjaGVja2JveENvdW50ID4gMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBbc3RdOiBqdXN0IG9ubHkgb25lIGNvbHVtbiBjaGVja2JveGApO1xuICAgIH1cbiAgICBpZiAocmFkaW9Db3VudCA+IDEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgW3N0XToganVzdCBvbmx5IG9uZSBjb2x1bW4gcmFkaW9gKTtcbiAgICB9XG5cbiAgICB0aGlzLmZpeGVkQ29lcmNlKGNvbHVtbnMgYXMgX1NUQ29sdW1uW10pO1xuICAgIHJldHVybiB7XG4gICAgICBjb2x1bW5zOiBjb2x1bW5zLmZpbHRlcih3ID0+ICFBcnJheS5pc0FycmF5KHcuY2hpbGRyZW4pIHx8IHcuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSxcbiAgICAgIC4uLnRoaXMuZ2VuSGVhZGVycyhjb3B5TGlzdClcbiAgICB9O1xuICB9XG5cbiAgcmVzdG9yZUFsbFJlbmRlcihjb2x1bW5zOiBfU1RDb2x1bW5bXSk6IHZvaWQge1xuICAgIGNvbHVtbnMuZm9yRWFjaChpID0+IHRoaXMucmVzdG9yZVJlbmRlcihpKSk7XG4gIH1cblxuICB1cGRhdGVEZWZhdWx0KGZpbHRlcjogU1RDb2x1bW5GaWx0ZXIpOiB0aGlzIHtcbiAgICBpZiAoZmlsdGVyLm1lbnVzID09IG51bGwpIHJldHVybiB0aGlzO1xuXG4gICAgaWYgKGZpbHRlci50eXBlID09PSAnZGVmYXVsdCcpIHtcbiAgICAgIGZpbHRlci5kZWZhdWx0ID0gZmlsdGVyLm1lbnVzIS5maW5kSW5kZXgodyA9PiB3LmNoZWNrZWQhKSAhPT0gLTE7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpbHRlci5kZWZhdWx0ID0gISFmaWx0ZXIubWVudXMhWzBdLnZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNsZWFuRmlsdGVyKGNvbDogX1NUQ29sdW1uKTogdGhpcyB7XG4gICAgY29uc3QgZiA9IGNvbC5maWx0ZXIhO1xuICAgIGYuZGVmYXVsdCA9IGZhbHNlO1xuICAgIGlmIChmLnR5cGUgPT09ICdkZWZhdWx0Jykge1xuICAgICAgZi5tZW51cyEuZm9yRWFjaChpID0+IChpLmNoZWNrZWQgPSBmYWxzZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmLm1lbnVzIVswXS52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cbiJdfQ==