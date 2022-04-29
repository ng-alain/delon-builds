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
        this.voidIIf = () => true;
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
            if (!item.iif)
                item.iif = this.voidIIf;
            item.iifBehavior = item.iifBehavior || this.cog.iifBehavior;
            if (item.children && item.children.length > 0) {
                this.btnCoerceIf(item.children);
            }
            else {
                item.children = [];
            }
        }
    }
    fixMaxMultiple(col) {
        const curCog = col.maxMultipleButton;
        const btns = col.buttons;
        const btnSize = btns.length;
        if (curCog == null || btnSize <= 0)
            return;
        const cog = {
            count: 2,
            text: '更多',
            ...(typeof curCog === 'number' ? { count: curCog } : curCog)
        };
        if (cog.count >= btnSize)
            return;
        col.buttons = btns.slice(0, cog.count);
        col.buttons.push({ text: cog.text, children: btns.slice(cog.count), iif: this.voidIIf });
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
            default:
                fixMenus = false;
                break;
        }
        if (fixMenus && (res.menus == null || res.menus.length === 0)) {
            res.menus = [{ value }];
        }
        if (res.menus.length === 0) {
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
            res.menus = res.menus.filter(w => this.acl.can(w.acl));
        }
        if (res.menus.length <= 0) {
            res = null;
        }
        return res;
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
            if (item.iif && !item.iif(item)) {
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
            if (!item.className) {
                item.className = {
                    number: 'text-right',
                    currency: 'text-right',
                    date: 'text-center'
                }[item.type];
            }
            item._className = item.className || (item._isTruncate ? 'text-truncate' : null);
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
            this.fixMaxMultiple(item);
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
STColumnSource.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.5", ngImport: i0, type: STColumnSource, deps: [{ token: i1.DomSanitizer }, { token: i2.STRowSource, host: true }, { token: i3.ACLService, optional: true }, { token: ALAIN_I18N_TOKEN, optional: true }, { token: i4.STWidgetRegistry }], target: i0.ɵɵFactoryTarget.Injectable });
STColumnSource.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.5", ngImport: i0, type: STColumnSource });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.5", ngImport: i0, type: STColumnSource, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtY29sdW1uLXNvdXJjZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9zdC9zdC1jb2x1bW4tc291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQWUsTUFBTSxlQUFlLENBQUM7QUFJaEYsT0FBTyxFQUFvQixnQkFBZ0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUVsRSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7Ozs7QUEyQm5ELE1BQU0sT0FBTyxjQUFjO0lBSXpCLFlBQ1UsR0FBaUIsRUFDVCxTQUFzQixFQUNsQixHQUFlLEVBQ1csT0FBeUIsRUFDL0QsZ0JBQWtDO1FBSmxDLFFBQUcsR0FBSCxHQUFHLENBQWM7UUFDVCxjQUFTLEdBQVQsU0FBUyxDQUFhO1FBQ2xCLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDVyxZQUFPLEdBQVAsT0FBTyxDQUFrQjtRQUMvRCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBUHBDLFlBQU8sR0FBRyxHQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFRbkMsQ0FBQztJQUVKLE1BQU0sQ0FBQyxHQUFrQjtRQUN2QixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNqQixDQUFDO0lBRU8sTUFBTSxDQUFDLENBQWlCLEVBQUUsR0FBc0I7UUFDdEQsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLEtBQUssRUFBRTtZQUNwQyxDQUFDLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztZQUNkLE9BQU87U0FDUjtRQUVELElBQUksR0FBRyxHQUFHO1lBQ1IsR0FBRyxHQUFHO1NBQ1AsQ0FBQztRQUNGLElBQUksT0FBTyxDQUFDLENBQUMsR0FBRyxLQUFLLFFBQVEsRUFB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SW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5pbXBvcnQgeyBBQ0xTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL2FjbCc7XG5pbXBvcnQgeyBBbGFpbkkxOE5TZXJ2aWNlLCBBTEFJTl9JMThOX1RPS0VOIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IEFsYWluU1RDb25maWcgfSBmcm9tICdAZGVsb24vdXRpbC9jb25maWcnO1xuaW1wb3J0IHsgZGVlcENvcHksIHdhcm4gfSBmcm9tICdAZGVsb24vdXRpbC9vdGhlcic7XG5pbXBvcnQgdHlwZSB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbmltcG9ydCB7IFNUUm93U291cmNlIH0gZnJvbSAnLi9zdC1yb3cuZGlyZWN0aXZlJztcbmltcG9ydCB7IFNUV2lkZ2V0UmVnaXN0cnkgfSBmcm9tICcuL3N0LXdpZGdldCc7XG5pbXBvcnQge1xuICBTVENvbHVtbixcbiAgU1RDb2x1bW5CdXR0b24sXG4gIFNUQ29sdW1uQnV0dG9uUG9wLFxuICBTVENvbHVtbkZpbHRlcixcbiAgU1RDb2x1bW5Hcm91cFR5cGUsXG4gIFNUQ29sdW1uTWF4TXVsdGlwbGVCdXR0b24sXG4gIFNUQ29sdW1uU2FmZVR5cGUsXG4gIFNUSWNvbixcbiAgU1RSZXNpemFibGUsXG4gIFNUU29ydE1hcCxcbiAgU1RXaWR0aE1vZGVcbn0gZnJvbSAnLi9zdC5pbnRlcmZhY2VzJztcbmltcG9ydCB7IF9TVENvbHVtbiwgX1NUSGVhZGVyIH0gZnJvbSAnLi9zdC50eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RDb2x1bW5Tb3VyY2VQcm9jZXNzT3B0aW9ucyB7XG4gIHdpZHRoTW9kZTogU1RXaWR0aE1vZGU7XG4gIHJlc2l6YWJsZT86IFNUUmVzaXphYmxlO1xuICBzYWZlVHlwZTogU1RDb2x1bW5TYWZlVHlwZTtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNUQ29sdW1uU291cmNlIHtcbiAgcHJpdmF0ZSBjb2chOiBBbGFpblNUQ29uZmlnO1xuICBwcml2YXRlIHZvaWRJSWYgPSAoKTogYm9vbGVhbiA9PiB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZG9tOiBEb21TYW5pdGl6ZXIsXG4gICAgQEhvc3QoKSBwcml2YXRlIHJvd1NvdXJjZTogU1RSb3dTb3VyY2UsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBhY2w6IEFDTFNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChBTEFJTl9JMThOX1RPS0VOKSBwcml2YXRlIGkxOG5TcnY6IEFsYWluSTE4TlNlcnZpY2UsXG4gICAgcHJpdmF0ZSBzdFdpZGdldFJlZ2lzdHJ5OiBTVFdpZGdldFJlZ2lzdHJ5XG4gICkge31cblxuICBzZXRDb2codmFsOiBBbGFpblNUQ29uZmlnKTogdm9pZCB7XG4gICAgdGhpcy5jb2cgPSB2YWw7XG4gIH1cblxuICBwcml2YXRlIGZpeFBvcChpOiBTVENvbHVtbkJ1dHRvbiwgZGVmOiBTVENvbHVtbkJ1dHRvblBvcCk6IHZvaWQge1xuICAgIGlmIChpLnBvcCA9PSBudWxsIHx8IGkucG9wID09PSBmYWxzZSkge1xuICAgICAgaS5wb3AgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgcG9wID0ge1xuICAgICAgLi4uZGVmXG4gICAgfTtcbiAgICBpZiAodHlwZW9mIGkucG9wID09PSAnc3RyaW5nJykge1xuICAgICAgcG9wLnRpdGxlID0gaS5wb3A7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgaS5wb3AgPT09ICdvYmplY3QnKSB7XG4gICAgICBwb3AgPSB7XG4gICAgICAgIC4uLnBvcCxcbiAgICAgICAgLi4uaS5wb3BcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBwb3AuY29uZGl0aW9uICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwb3AuY29uZGl0aW9uID0gKCkgPT4gZmFsc2U7XG4gICAgfVxuXG4gICAgaS5wb3AgPSBwb3A7XG4gIH1cblxuICBwcml2YXRlIGJ0bkNvZXJjZShsaXN0OiBTVENvbHVtbkJ1dHRvbltdKTogU1RDb2x1bW5CdXR0b25bXSB7XG4gICAgaWYgKCFsaXN0KSByZXR1cm4gW107XG4gICAgY29uc3QgcmV0OiBTVENvbHVtbkJ1dHRvbltdID0gW107XG4gICAgY29uc3QgeyBtb2RhbCwgZHJhd2VyLCBwb3AsIGJ0bkljb24gfSA9IHRoaXMuY29nO1xuXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGxpc3QpIHtcbiAgICAgIGlmICh0aGlzLmFjbCAmJiBpdGVtLmFjbCAmJiAhdGhpcy5hY2wuY2FuKGl0ZW0uYWNsKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ21vZGFsJyB8fCBpdGVtLnR5cGUgPT09ICdzdGF0aWMnKSB7XG4gICAgICAgIGlmIChpdGVtLm1vZGFsID09IG51bGwgfHwgaXRlbS5tb2RhbC5jb21wb25lbnQgPT0gbnVsbCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgbmdEZXZNb2RlID09PSAndW5kZWZpbmVkJyB8fCBuZ0Rldk1vZGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgW3N0XSBTaG91bGQgc3BlY2lmeSBtb2RhbCBwYXJhbWV0ZXIgd2hlbiB0eXBlIGlzIG1vZGFsIG9yIHN0YXRpY2ApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpdGVtLnR5cGUgPSAnbm9uZSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbS5tb2RhbCA9IHsgLi4ueyBwYXJhbXNOYW1lOiAncmVjb3JkJywgc2l6ZTogJ2xnJyB9LCAuLi5tb2RhbCwgLi4uaXRlbS5tb2RhbCB9O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdkcmF3ZXInKSB7XG4gICAgICAgIGlmIChpdGVtLmRyYXdlciA9PSBudWxsIHx8IGl0ZW0uZHJhd2VyLmNvbXBvbmVudCA9PSBudWxsKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBuZ0Rldk1vZGUgPT09ICd1bmRlZmluZWQnIHx8IG5nRGV2TW9kZSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBbc3RdIFNob3VsZCBzcGVjaWZ5IGRyYXdlciBwYXJhbWV0ZXIgd2hlbiB0eXBlIGlzIGRyYXdlcmApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpdGVtLnR5cGUgPSAnbm9uZSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbS5kcmF3ZXIgPSB7IC4uLnsgcGFyYW1zTmFtZTogJ3JlY29yZCcsIHNpemU6ICdsZycgfSwgLi4uZHJhd2VyLCAuLi5pdGVtLmRyYXdlciB9O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdkZWwnICYmIHR5cGVvZiBpdGVtLnBvcCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgaXRlbS5wb3AgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBwb3BcbiAgICAgIHRoaXMuZml4UG9wKGl0ZW0sIHBvcCEpO1xuXG4gICAgICBpZiAoaXRlbS5pY29uKSB7XG4gICAgICAgIGl0ZW0uaWNvbiA9IHtcbiAgICAgICAgICAuLi5idG5JY29uLFxuICAgICAgICAgIC4uLih0eXBlb2YgaXRlbS5pY29uID09PSAnc3RyaW5nJyA/IHsgdHlwZTogaXRlbS5pY29uIH0gOiBpdGVtLmljb24pXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGl0ZW0uY2hpbGRyZW4gPSBpdGVtLmNoaWxkcmVuICYmIGl0ZW0uY2hpbGRyZW4ubGVuZ3RoID4gMCA/IHRoaXMuYnRuQ29lcmNlKGl0ZW0uY2hpbGRyZW4pIDogW107XG5cbiAgICAgIC8vIGkxOG5cbiAgICAgIGlmIChpdGVtLmkxOG4gJiYgdGhpcy5pMThuU3J2KSB7XG4gICAgICAgIGl0ZW0udGV4dCA9IHRoaXMuaTE4blNydi5mYW55aShpdGVtLmkxOG4pO1xuICAgICAgfVxuXG4gICAgICByZXQucHVzaChpdGVtKTtcbiAgICB9XG4gICAgdGhpcy5idG5Db2VyY2VJZihyZXQpO1xuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBwcml2YXRlIGJ0bkNvZXJjZUlmKGxpc3Q6IFNUQ29sdW1uQnV0dG9uW10pOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgbGlzdCkge1xuICAgICAgaWYgKCFpdGVtLmlpZikgaXRlbS5paWYgPSB0aGlzLnZvaWRJSWY7XG4gICAgICBpdGVtLmlpZkJlaGF2aW9yID0gaXRlbS5paWZCZWhhdmlvciB8fCB0aGlzLmNvZy5paWZCZWhhdmlvcjtcbiAgICAgIGlmIChpdGVtLmNoaWxkcmVuICYmIGl0ZW0uY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLmJ0bkNvZXJjZUlmKGl0ZW0uY2hpbGRyZW4pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXRlbS5jaGlsZHJlbiA9IFtdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZml4TWF4TXVsdGlwbGUoY29sOiBfU1RDb2x1bW4pOiB2b2lkIHtcbiAgICBjb25zdCBjdXJDb2cgPSBjb2wubWF4TXVsdGlwbGVCdXR0b247XG4gICAgY29uc3QgYnRucyA9IGNvbC5idXR0b25zITtcbiAgICBjb25zdCBidG5TaXplID0gYnRucy5sZW5ndGg7XG4gICAgaWYgKGN1ckNvZyA9PSBudWxsIHx8IGJ0blNpemUgPD0gMCkgcmV0dXJuO1xuXG4gICAgY29uc3QgY29nOiBTVENvbHVtbk1heE11bHRpcGxlQnV0dG9uID0ge1xuICAgICAgY291bnQ6IDIsXG4gICAgICB0ZXh0OiAn5pu05aSaJyxcbiAgICAgIC4uLih0eXBlb2YgY3VyQ29nID09PSAnbnVtYmVyJyA/IHsgY291bnQ6IGN1ckNvZyB9IDogY3VyQ29nKVxuICAgIH07XG5cbiAgICBpZiAoY29nLmNvdW50ISA+PSBidG5TaXplKSByZXR1cm47XG5cbiAgICBjb2wuYnV0dG9ucyA9IGJ0bnMuc2xpY2UoMCwgY29nLmNvdW50KTtcbiAgICBjb2wuYnV0dG9ucy5wdXNoKHsgdGV4dDogY29nLnRleHQsIGNoaWxkcmVuOiBidG5zLnNsaWNlKGNvZy5jb3VudCksIGlpZjogdGhpcy52b2lkSUlmIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBmaXhlZENvZXJjZShsaXN0OiBfU1RDb2x1bW5bXSk6IHZvaWQge1xuICAgIGNvbnN0IGNvdW50UmVkdWNlID0gKGE6IG51bWJlciwgYjogX1NUQ29sdW1uKTogbnVtYmVyID0+IGEgKyArYi53aWR0aCEudG9TdHJpbmcoKS5yZXBsYWNlKCdweCcsICcnKTtcbiAgICAvLyBsZWZ0IHdpZHRoXG4gICAgbGlzdFxuICAgICAgLmZpbHRlcih3ID0+IHcuZml4ZWQgJiYgdy5maXhlZCA9PT0gJ2xlZnQnICYmIHcud2lkdGgpXG4gICAgICAuZm9yRWFjaCgoaXRlbSwgaWR4KSA9PiAoaXRlbS5fbGVmdCA9IGAke2xpc3Quc2xpY2UoMCwgaWR4KS5yZWR1Y2UoY291bnRSZWR1Y2UsIDApfXB4YCkpO1xuICAgIC8vIHJpZ2h0IHdpZHRoXG4gICAgbGlzdFxuICAgICAgLmZpbHRlcih3ID0+IHcuZml4ZWQgJiYgdy5maXhlZCA9PT0gJ3JpZ2h0JyAmJiB3LndpZHRoKVxuICAgICAgLnJldmVyc2UoKVxuICAgICAgLmZvckVhY2goKGl0ZW0sIGlkeCkgPT4gKGl0ZW0uX3JpZ2h0ID0gYCR7aWR4ID4gMCA/IGxpc3Quc2xpY2UoLWlkeCkucmVkdWNlKGNvdW50UmVkdWNlLCAwKSA6IDB9cHhgKSk7XG4gIH1cblxuICBwcml2YXRlIHNvcnRDb2VyY2UoaXRlbTogX1NUQ29sdW1uKTogU1RTb3J0TWFwIHtcbiAgICBjb25zdCByZXMgPSB0aGlzLmZpeFNvcnRDb2VyY2UoaXRlbSk7XG4gICAgcmVzLnJlTmFtZSA9IHtcbiAgICAgIC4uLnRoaXMuY29nLnNvcnRSZU5hbWUsXG4gICAgICAuLi5yZXMucmVOYW1lXG4gICAgfTtcbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgcHJpdmF0ZSBmaXhTb3J0Q29lcmNlKGl0ZW06IF9TVENvbHVtbik6IFNUU29ydE1hcCB7XG4gICAgaWYgKHR5cGVvZiBpdGVtLnNvcnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4geyBlbmFibGVkOiBmYWxzZSB9O1xuICAgIH1cblxuICAgIGxldCByZXM6IFNUU29ydE1hcCA9IHt9O1xuXG4gICAgaWYgKHR5cGVvZiBpdGVtLnNvcnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXMua2V5ID0gaXRlbS5zb3J0O1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGl0ZW0uc29ydCAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICByZXMgPSBpdGVtLnNvcnQ7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgaXRlbS5zb3J0ID09PSAnYm9vbGVhbicpIHtcbiAgICAgIHJlcy5jb21wYXJlID0gKGEsIGIpID0+IGFbaXRlbS5pbmRleEtleSFdIC0gYltpdGVtLmluZGV4S2V5IV07XG4gICAgfVxuXG4gICAgaWYgKCFyZXMua2V5KSB7XG4gICAgICByZXMua2V5ID0gaXRlbS5pbmRleEtleTtcbiAgICB9XG5cbiAgICByZXMuZW5hYmxlZCA9IHRydWU7XG5cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgcHJpdmF0ZSBmaWx0ZXJDb2VyY2UoaXRlbTogX1NUQ29sdW1uKTogU1RDb2x1bW5GaWx0ZXIgfCBudWxsIHtcbiAgICBpZiAoaXRlbS5maWx0ZXIgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgbGV0IHJlczogU1RDb2x1bW5GaWx0ZXIgfCBudWxsID0gaXRlbS5maWx0ZXI7XG4gICAgcmVzLnR5cGUgPSByZXMudHlwZSB8fCAnZGVmYXVsdCc7XG4gICAgcmVzLnNob3dPUEFyZWEgPSByZXMuc2hvd09QQXJlYSAhPT0gZmFsc2U7XG5cbiAgICBsZXQgaWNvbiA9ICdmaWx0ZXInO1xuICAgIGxldCBpY29uVGhlbWUgPSAnZmlsbCc7XG4gICAgbGV0IGZpeE1lbnVzID0gdHJ1ZTtcbiAgICBsZXQgdmFsdWU6IE56U2FmZUFueSA9IHVuZGVmaW5lZDtcbiAgICBzd2l0Y2ggKHJlcy50eXBlKSB7XG4gICAgICBjYXNlICdrZXl3b3JkJzpcbiAgICAgICAgaWNvbiA9ICdzZWFyY2gnO1xuICAgICAgICBpY29uVGhlbWUgPSAnb3V0bGluZSc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgaWNvbiA9ICdzZWFyY2gnO1xuICAgICAgICBpY29uVGhlbWUgPSAnb3V0bGluZSc7XG4gICAgICAgIHJlcy5udW1iZXIgPSB7XG4gICAgICAgICAgc3RlcDogMSxcbiAgICAgICAgICBtaW46IC1JbmZpbml0eSxcbiAgICAgICAgICBtYXg6IEluZmluaXR5LFxuICAgICAgICAgIC4uLnJlcy5udW1iZXJcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkYXRlJzpcbiAgICAgICAgaWNvbiA9ICdjYWxlbmRhcic7XG4gICAgICAgIGljb25UaGVtZSA9ICdvdXRsaW5lJztcbiAgICAgICAgcmVzLmRhdGUgPSB7XG4gICAgICAgICAgcmFuZ2U6IGZhbHNlLFxuICAgICAgICAgIG1vZGU6ICdkYXRlJyxcbiAgICAgICAgICBzaG93VG9kYXk6IHRydWUsXG4gICAgICAgICAgc2hvd05vdzogZmFsc2UsXG4gICAgICAgICAgLi4ucmVzLmRhdGVcbiAgICAgICAgfTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBmaXhNZW51cyA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKGZpeE1lbnVzICYmIChyZXMubWVudXMgPT0gbnVsbCB8fCByZXMubWVudXMhLmxlbmd0aCA9PT0gMCkpIHtcbiAgICAgIHJlcy5tZW51cyA9IFt7IHZhbHVlIH1dO1xuICAgIH1cblxuICAgIGlmIChyZXMubWVudXMhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiByZXMubXVsdGlwbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXMubXVsdGlwbGUgPSB0cnVlO1xuICAgIH1cblxuICAgIHJlcy5jb25maXJtVGV4dCA9IHJlcy5jb25maXJtVGV4dCB8fCB0aGlzLmNvZy5maWx0ZXJDb25maXJtVGV4dDtcbiAgICByZXMuY2xlYXJUZXh0ID0gcmVzLmNsZWFyVGV4dCB8fCB0aGlzLmNvZy5maWx0ZXJDbGVhclRleHQ7XG4gICAgcmVzLmtleSA9IHJlcy5rZXkgfHwgaXRlbS5pbmRleEtleTtcbiAgICByZXMuaWNvbiA9IHJlcy5pY29uIHx8IGljb247XG5cbiAgICBjb25zdCBiYXNlSWNvbiA9IHsgdHlwZTogaWNvbiwgdGhlbWU6IGljb25UaGVtZSB9IGFzIFNUSWNvbjtcbiAgICBpZiAodHlwZW9mIHJlcy5pY29uID09PSAnc3RyaW5nJykge1xuICAgICAgcmVzLmljb24gPSB7IC4uLmJhc2VJY29uLCB0eXBlOiByZXMuaWNvbiB9IGFzIFNUSWNvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzLmljb24gPSB7IC4uLmJhc2VJY29uLCAuLi5yZXMuaWNvbiB9O1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlRGVmYXVsdChyZXMpO1xuXG4gICAgaWYgKHRoaXMuYWNsKSB7XG4gICAgICByZXMubWVudXMgPSByZXMubWVudXMhLmZpbHRlcih3ID0+IHRoaXMuYWNsLmNhbih3LmFjbCEpKTtcbiAgICB9XG5cbiAgICBpZiAocmVzLm1lbnVzIS5sZW5ndGggPD0gMCkge1xuICAgICAgcmVzID0gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgcHJpdmF0ZSByZXN0b3JlUmVuZGVyKGl0ZW06IF9TVENvbHVtbik6IHZvaWQge1xuICAgIGlmIChpdGVtLnJlbmRlclRpdGxlKSB7XG4gICAgICBpdGVtLl9fcmVuZGVyVGl0bGUgPVxuICAgICAgICB0eXBlb2YgaXRlbS5yZW5kZXJUaXRsZSA9PT0gJ3N0cmluZydcbiAgICAgICAgICA/IHRoaXMucm93U291cmNlLmdldFRpdGxlKGl0ZW0ucmVuZGVyVGl0bGUpXG4gICAgICAgICAgOiAoaXRlbS5yZW5kZXJUaXRsZSBhcyBUZW1wbGF0ZVJlZjx2b2lkPik7XG4gICAgfVxuICAgIGlmIChpdGVtLnJlbmRlcikge1xuICAgICAgaXRlbS5fX3JlbmRlciA9XG4gICAgICAgIHR5cGVvZiBpdGVtLnJlbmRlciA9PT0gJ3N0cmluZycgPyB0aGlzLnJvd1NvdXJjZS5nZXRSb3coaXRlbS5yZW5kZXIpIDogKGl0ZW0ucmVuZGVyIGFzIFRlbXBsYXRlUmVmPHZvaWQ+KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHdpZGdldENvZXJjZShpdGVtOiBfU1RDb2x1bW4pOiB2b2lkIHtcbiAgICBpZiAoaXRlbS50eXBlICE9PSAnd2lkZ2V0JykgcmV0dXJuO1xuICAgIGlmIChpdGVtLndpZGdldCA9PSBudWxsIHx8ICF0aGlzLnN0V2lkZ2V0UmVnaXN0cnkuaGFzKGl0ZW0ud2lkZ2V0LnR5cGUpKSB7XG4gICAgICBkZWxldGUgaXRlbS50eXBlO1xuICAgICAgaWYgKHR5cGVvZiBuZ0Rldk1vZGUgPT09ICd1bmRlZmluZWQnIHx8IG5nRGV2TW9kZSkge1xuICAgICAgICB3YXJuKGBzdDogTm8gd2lkZ2V0IGZvciB0eXBlIFwiJHtpdGVtLndpZGdldD8udHlwZX1cImApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2VuSGVhZGVycyhyb290Q29sdW1uczogX1NUQ29sdW1uW10pOiB7IGhlYWRlcnM6IF9TVEhlYWRlcltdW107IGhlYWRlcldpZHRoczogc3RyaW5nW10gfCBudWxsIH0ge1xuICAgIGNvbnN0IHJvd3M6IF9TVEhlYWRlcltdW10gPSBbXTtcbiAgICBjb25zdCB3aWR0aHM6IHN0cmluZ1tdID0gW107XG4gICAgY29uc3QgZmlsbFJvd0NlbGxzID0gKGNvbHVtbnM6IF9TVENvbHVtbltdLCBjb2xJbmRleDogbnVtYmVyLCByb3dJbmRleCA9IDApOiBudW1iZXJbXSA9PiB7XG4gICAgICAvLyBJbml0IHJvd3NcbiAgICAgIHJvd3Nbcm93SW5kZXhdID0gcm93c1tyb3dJbmRleF0gfHwgW107XG5cbiAgICAgIGxldCBjdXJyZW50Q29sSW5kZXggPSBjb2xJbmRleDtcbiAgICAgIGNvbnN0IGNvbFNwYW5zOiBudW1iZXJbXSA9IGNvbHVtbnMubWFwKGNvbHVtbiA9PiB7XG4gICAgICAgIGNvbnN0IGNlbGw6IFNUQ29sdW1uR3JvdXBUeXBlID0ge1xuICAgICAgICAgIGNvbHVtbixcbiAgICAgICAgICBjb2xTdGFydDogY3VycmVudENvbEluZGV4LFxuICAgICAgICAgIGhhc1N1YkNvbHVtbnM6IGZhbHNlXG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IGNvbFNwYW4gPSAxO1xuXG4gICAgICAgIGNvbnN0IHN1YkNvbHVtbnMgPSBjb2x1bW4uY2hpbGRyZW47XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHN1YkNvbHVtbnMpICYmIHN1YkNvbHVtbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbFNwYW4gPSBmaWxsUm93Q2VsbHMoc3ViQ29sdW1ucywgY3VycmVudENvbEluZGV4LCByb3dJbmRleCArIDEpLnJlZHVjZSgodG90YWwsIGNvdW50KSA9PiB0b3RhbCArIGNvdW50LCAwKTtcbiAgICAgICAgICBjZWxsLmhhc1N1YkNvbHVtbnMgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdpZHRocy5wdXNoKChjZWxsLmNvbHVtbi53aWR0aCBhcyBzdHJpbmcpIHx8ICcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgnY29sU3BhbicgaW4gY29sdW1uKSB7XG4gICAgICAgICAgY29sU3BhbiA9IGNvbHVtbi5jb2xTcGFuITtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgncm93U3BhbicgaW4gY29sdW1uKSB7XG4gICAgICAgICAgY2VsbC5yb3dTcGFuID0gY29sdW1uLnJvd1NwYW47XG4gICAgICAgIH1cblxuICAgICAgICBjZWxsLmNvbFNwYW4gPSBjb2xTcGFuO1xuICAgICAgICBjZWxsLmNvbEVuZCA9IGNlbGwuY29sU3RhcnQgKyBjb2xTcGFuIC0gMTtcbiAgICAgICAgcm93c1tyb3dJbmRleF0ucHVzaChjZWxsIGFzIE56U2FmZUFueSk7XG5cbiAgICAgICAgY3VycmVudENvbEluZGV4ICs9IGNvbFNwYW47XG5cbiAgICAgICAgcmV0dXJuIGNvbFNwYW47XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGNvbFNwYW5zO1xuICAgIH07XG5cbiAgICBmaWxsUm93Q2VsbHMocm9vdENvbHVtbnMsIDApO1xuXG4gICAgLy8gSGFuZGxlIGByb3dTcGFuYFxuICAgIGNvbnN0IHJvd0NvdW50ID0gcm93cy5sZW5ndGg7XG4gICAgZm9yIChsZXQgcm93SW5kZXggPSAwOyByb3dJbmRleCA8IHJvd0NvdW50OyByb3dJbmRleCArPSAxKSB7XG4gICAgICByb3dzW3Jvd0luZGV4XS5mb3JFYWNoKGNlbGwgPT4ge1xuICAgICAgICBpZiAoISgncm93U3BhbicgaW4gY2VsbCkgJiYgIShjZWxsIGFzIF9TVEhlYWRlcikuaGFzU3ViQ29sdW1ucykge1xuICAgICAgICAgIChjZWxsIGFzIF9TVEhlYWRlcikucm93U3BhbiA9IHJvd0NvdW50IC0gcm93SW5kZXg7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7IGhlYWRlcnM6IHJvd3MsIGhlYWRlcldpZHRoczogcm93Q291bnQgPiAxID8gd2lkdGhzIDogbnVsbCB9O1xuICB9XG5cbiAgcHJpdmF0ZSBjbGVhbkNvbmQobGlzdDogX1NUQ29sdW1uW10pOiBfU1RDb2x1bW5bXSB7XG4gICAgY29uc3QgcmVzOiBfU1RDb2x1bW5bXSA9IFtdO1xuICAgIGNvbnN0IGNvcHlMaXN0ID0gZGVlcENvcHkobGlzdCk7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGNvcHlMaXN0KSB7XG4gICAgICBpZiAoaXRlbS5paWYgJiYgIWl0ZW0uaWlmKGl0ZW0pKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuYWNsICYmIGl0ZW0uYWNsICYmICF0aGlzLmFjbC5jYW4oaXRlbS5hY2wpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbS5jaGlsZHJlbikgJiYgaXRlbS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgIGl0ZW0uY2hpbGRyZW4gPSB0aGlzLmNsZWFuQ29uZChpdGVtLmNoaWxkcmVuKTtcbiAgICAgIH1cbiAgICAgIHJlcy5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgcHJvY2VzcyhcbiAgICBsaXN0OiBTVENvbHVtbltdLFxuICAgIG9wdGlvbnM6IFNUQ29sdW1uU291cmNlUHJvY2Vzc09wdGlvbnNcbiAgKTogeyBjb2x1bW5zOiBfU1RDb2x1bW5bXTsgaGVhZGVyczogX1NUSGVhZGVyW11bXTsgaGVhZGVyV2lkdGhzOiBzdHJpbmdbXSB8IG51bGwgfSB7XG4gICAgaWYgKCFsaXN0IHx8IGxpc3QubGVuZ3RoID09PSAwKSB0aHJvdyBuZXcgRXJyb3IoYFtzdF06IHRoZSBjb2x1bW5zIHByb3BlcnR5IG11c2UgYmUgZGVmaW5lIWApO1xuXG4gICAgY29uc3QgeyBub0luZGV4IH0gPSB0aGlzLmNvZztcbiAgICBsZXQgY2hlY2tib3hDb3VudCA9IDA7XG4gICAgbGV0IHJhZGlvQ291bnQgPSAwO1xuICAgIGxldCBwb2ludCA9IDA7XG4gICAgY29uc3QgY29sdW1uczogX1NUQ29sdW1uW10gPSBbXTtcblxuICAgIGNvbnN0IHByb2Nlc3NJdGVtID0gKGl0ZW06IF9TVENvbHVtbik6IF9TVENvbHVtbiA9PiB7XG4gICAgICAvLyBpbmRleFxuICAgICAgaWYgKGl0ZW0uaW5kZXgpIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGl0ZW0uaW5kZXgpKSB7XG4gICAgICAgICAgaXRlbS5pbmRleCA9IGl0ZW0uaW5kZXgudG9TdHJpbmcoKS5zcGxpdCgnLicpO1xuICAgICAgICB9XG4gICAgICAgIGl0ZW0uaW5kZXhLZXkgPSBpdGVtLmluZGV4LmpvaW4oJy4nKTtcbiAgICAgIH1cblxuICAgICAgLy8gI3JlZ2lvbiB0aXRsZVxuXG4gICAgICBjb25zdCB0aXQgPSAodHlwZW9mIGl0ZW0udGl0bGUgPT09ICdzdHJpbmcnID8geyB0ZXh0OiBpdGVtLnRpdGxlIH0gOiBpdGVtLnRpdGxlKSB8fCB7fTtcbiAgICAgIGlmICh0aXQuaTE4biAmJiB0aGlzLmkxOG5TcnYpIHtcbiAgICAgICAgdGl0LnRleHQgPSB0aGlzLmkxOG5TcnYuZmFueWkodGl0LmkxOG4pO1xuICAgICAgfVxuICAgICAgaWYgKHRpdC50ZXh0KSB7XG4gICAgICAgIHRpdC5fdGV4dCA9IHRoaXMuZG9tLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHRpdC50ZXh0KTtcbiAgICAgIH1cbiAgICAgIGl0ZW0udGl0bGUgPSB0aXQ7XG5cbiAgICAgIC8vICNlbmRyZWdpb25cblxuICAgICAgLy8gbm9cbiAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdubycpIHtcbiAgICAgICAgaXRlbS5ub0luZGV4ID0gaXRlbS5ub0luZGV4ID09IG51bGwgPyBub0luZGV4IDogaXRlbS5ub0luZGV4O1xuICAgICAgfVxuICAgICAgLy8gY2hlY2tib3hcbiAgICAgIGlmIChpdGVtLnNlbGVjdGlvbnMgPT0gbnVsbCkge1xuICAgICAgICBpdGVtLnNlbGVjdGlvbnMgPSBbXTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgKytjaGVja2JveENvdW50O1xuICAgICAgICBpZiAoIWl0ZW0ud2lkdGgpIHtcbiAgICAgICAgICBpdGVtLndpZHRoID0gYCR7aXRlbS5zZWxlY3Rpb25zLmxlbmd0aCA+IDAgPyA2MiA6IDUwfXB4YDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuYWNsKSB7XG4gICAgICAgIGl0ZW0uc2VsZWN0aW9ucyA9IGl0ZW0uc2VsZWN0aW9ucy5maWx0ZXIodyA9PiB0aGlzLmFjbC5jYW4ody5hY2whKSk7XG4gICAgICB9XG4gICAgICAvLyByYWRpb1xuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgICArK3JhZGlvQ291bnQ7XG4gICAgICAgIGl0ZW0uc2VsZWN0aW9ucyA9IFtdO1xuICAgICAgICBpZiAoIWl0ZW0ud2lkdGgpIHtcbiAgICAgICAgICBpdGVtLndpZHRoID0gJzUwcHgnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyB0eXBlc1xuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ3luJykge1xuICAgICAgICBpdGVtLnluID0geyB0cnV0aDogdHJ1ZSwgLi4udGhpcy5jb2cueW4sIC4uLml0ZW0ueW4gfTtcbiAgICAgIH1cbiAgICAgIC8vIGRhdGVcbiAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdkYXRlJykge1xuICAgICAgICBpdGVtLmRhdGVGb3JtYXQgPSBpdGVtLmRhdGVGb3JtYXQgfHwgdGhpcy5jb2cuZGF0ZT8uZm9ybWF0O1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICAoaXRlbS50eXBlID09PSAnbGluaycgJiYgdHlwZW9mIGl0ZW0uY2xpY2sgIT09ICdmdW5jdGlvbicpIHx8XG4gICAgICAgIChpdGVtLnR5cGUgPT09ICdiYWRnZScgJiYgaXRlbS5iYWRnZSA9PSBudWxsKSB8fFxuICAgICAgICAoaXRlbS50eXBlID09PSAndGFnJyAmJiBpdGVtLnRhZyA9PSBudWxsKSB8fFxuICAgICAgICAoaXRlbS50eXBlID09PSAnZW51bScgJiYgaXRlbS5lbnVtID09IG51bGwpXG4gICAgICApIHtcbiAgICAgICAgaXRlbS50eXBlID0gJyc7XG4gICAgICB9XG4gICAgICBpdGVtLl9pc1RydW5jYXRlID0gISFpdGVtLndpZHRoICYmIG9wdGlvbnMud2lkdGhNb2RlLnN0cmljdEJlaGF2aW9yID09PSAndHJ1bmNhdGUnICYmIGl0ZW0udHlwZSAhPT0gJ2ltZyc7XG4gICAgICAvLyBjbGFzc05hbWVcbiAgICAgIGlmICghaXRlbS5jbGFzc05hbWUpIHtcbiAgICAgICAgaXRlbS5jbGFzc05hbWUgPSAoXG4gICAgICAgICAge1xuICAgICAgICAgICAgbnVtYmVyOiAndGV4dC1yaWdodCcsXG4gICAgICAgICAgICBjdXJyZW5jeTogJ3RleHQtcmlnaHQnLFxuICAgICAgICAgICAgZGF0ZTogJ3RleHQtY2VudGVyJ1xuICAgICAgICAgIH0gYXMgTnpTYWZlQW55XG4gICAgICAgIClbaXRlbS50eXBlIV07XG4gICAgICB9XG4gICAgICBpdGVtLl9jbGFzc05hbWUgPSBpdGVtLmNsYXNzTmFtZSB8fCAoaXRlbS5faXNUcnVuY2F0ZSA/ICd0ZXh0LXRydW5jYXRlJyA6IG51bGwpO1xuICAgICAgLy8gd2lkdGhcbiAgICAgIGlmICh0eXBlb2YgaXRlbS53aWR0aCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgaXRlbS5fd2lkdGggPSBpdGVtLndpZHRoO1xuICAgICAgICBpdGVtLndpZHRoID0gYCR7aXRlbS53aWR0aH1weGA7XG4gICAgICB9XG4gICAgICBpdGVtLl9sZWZ0ID0gZmFsc2U7XG4gICAgICBpdGVtLl9yaWdodCA9IGZhbHNlO1xuICAgICAgaXRlbS5zYWZlVHlwZSA9IGl0ZW0uc2FmZVR5cGUgPz8gb3B0aW9ucy5zYWZlVHlwZTtcblxuICAgICAgLy8gc29ydGVyXG4gICAgICBpdGVtLl9zb3J0ID0gdGhpcy5zb3J0Q29lcmNlKGl0ZW0pO1xuICAgICAgLy8gZmlsdGVyXG4gICAgICBpdGVtLmZpbHRlciA9IHRoaXMuZmlsdGVyQ29lcmNlKGl0ZW0pIGFzIFNUQ29sdW1uRmlsdGVyO1xuICAgICAgLy8gYnV0dG9uc1xuICAgICAgaXRlbS5idXR0b25zID0gdGhpcy5idG5Db2VyY2UoaXRlbS5idXR0b25zISk7XG4gICAgICB0aGlzLmZpeE1heE11bHRpcGxlKGl0ZW0pO1xuICAgICAgLy8gd2lkZ2V0XG4gICAgICB0aGlzLndpZGdldENvZXJjZShpdGVtKTtcbiAgICAgIC8vIHJlc3RvcmUgY3VzdG9tIHJvd1xuICAgICAgdGhpcy5yZXN0b3JlUmVuZGVyKGl0ZW0pO1xuICAgICAgLy8gcmVzaXphYmxlXG4gICAgICBpdGVtLnJlc2l6YWJsZSA9IHtcbiAgICAgICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgICAgIGJvdW5kczogJ3dpbmRvdycsXG4gICAgICAgIG1pbldpZHRoOiA2MCxcbiAgICAgICAgbWF4V2lkdGg6IDM2MCxcbiAgICAgICAgcHJldmlldzogdHJ1ZSxcbiAgICAgICAgLi4ub3B0aW9ucy5yZXNpemFibGUsXG4gICAgICAgIC4uLih0eXBlb2YgaXRlbS5yZXNpemFibGUgPT09ICdib29sZWFuJyA/ICh7IGRpc2FibGVkOiAhaXRlbS5yZXNpemFibGUgfSBhcyBTVFJlc2l6YWJsZSkgOiBpdGVtLnJlc2l6YWJsZSlcbiAgICAgIH07XG5cbiAgICAgIGl0ZW0uX19wb2ludCA9IHBvaW50Kys7XG5cbiAgICAgIHJldHVybiBpdGVtO1xuICAgIH07XG5cbiAgICBjb25zdCBwcm9jZXNzTGlzdCA9IChkYXRhOiBfU1RDb2x1bW5bXSk6IHZvaWQgPT4ge1xuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgY29sdW1ucy5wdXNoKHByb2Nlc3NJdGVtKGl0ZW0pKTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbS5jaGlsZHJlbikpIHtcbiAgICAgICAgICBwcm9jZXNzTGlzdChpdGVtLmNoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBjb3B5TGlzdCA9IHRoaXMuY2xlYW5Db25kKGxpc3QgYXMgX1NUQ29sdW1uW10pO1xuICAgIHByb2Nlc3NMaXN0KGNvcHlMaXN0KTtcblxuICAgIGlmIChjaGVja2JveENvdW50ID4gMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBbc3RdOiBqdXN0IG9ubHkgb25lIGNvbHVtbiBjaGVja2JveGApO1xuICAgIH1cbiAgICBpZiAocmFkaW9Db3VudCA+IDEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgW3N0XToganVzdCBvbmx5IG9uZSBjb2x1bW4gcmFkaW9gKTtcbiAgICB9XG5cbiAgICB0aGlzLmZpeGVkQ29lcmNlKGNvbHVtbnMgYXMgX1NUQ29sdW1uW10pO1xuICAgIHJldHVybiB7XG4gICAgICBjb2x1bW5zOiBjb2x1bW5zLmZpbHRlcih3ID0+ICFBcnJheS5pc0FycmF5KHcuY2hpbGRyZW4pIHx8IHcuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSxcbiAgICAgIC4uLnRoaXMuZ2VuSGVhZGVycyhjb3B5TGlzdClcbiAgICB9O1xuICB9XG5cbiAgcmVzdG9yZUFsbFJlbmRlcihjb2x1bW5zOiBfU1RDb2x1bW5bXSk6IHZvaWQge1xuICAgIGNvbHVtbnMuZm9yRWFjaChpID0+IHRoaXMucmVzdG9yZVJlbmRlcihpKSk7XG4gIH1cblxuICB1cGRhdGVEZWZhdWx0KGZpbHRlcjogU1RDb2x1bW5GaWx0ZXIpOiB0aGlzIHtcbiAgICBpZiAoZmlsdGVyLnR5cGUgPT09ICdkZWZhdWx0Jykge1xuICAgICAgZmlsdGVyLmRlZmF1bHQgPSBmaWx0ZXIubWVudXMhLmZpbmRJbmRleCh3ID0+IHcuY2hlY2tlZCEpICE9PSAtMTtcbiAgICB9IGVsc2Uge1xuICAgICAgZmlsdGVyLmRlZmF1bHQgPSAhIWZpbHRlci5tZW51cyFbMF0udmFsdWU7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY2xlYW5GaWx0ZXIoY29sOiBfU1RDb2x1bW4pOiB0aGlzIHtcbiAgICBjb25zdCBmID0gY29sLmZpbHRlciE7XG4gICAgZi5kZWZhdWx0ID0gZmFsc2U7XG4gICAgaWYgKGYudHlwZSA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICBmLm1lbnVzIS5mb3JFYWNoKGkgPT4gKGkuY2hlY2tlZCA9IGZhbHNlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGYubWVudXMhWzBdLnZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuIl19