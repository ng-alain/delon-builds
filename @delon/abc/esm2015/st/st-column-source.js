import { Host, Inject, Injectable, Optional } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ACLService } from '@delon/acl';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { deepCopy, warn } from '@delon/util/other';
import { STRowSource } from './st-row.directive';
import { STWidgetRegistry } from './st-widget';
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
        let pop = Object.assign({}, def);
        if (typeof i.pop === 'string') {
            pop.title = i.pop;
        }
        else if (typeof i.pop === 'object') {
            pop = Object.assign(Object.assign({}, pop), i.pop);
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
                    console.warn(`[st] Should specify modal parameter when type is modal or static`);
                    item.type = 'none';
                }
                else {
                    item.modal = Object.assign(Object.assign({ paramsName: 'record', size: 'lg' }, modal), item.modal);
                }
            }
            if (item.type === 'drawer') {
                if (item.drawer == null || item.drawer.component == null) {
                    console.warn(`[st] Should specify drawer parameter when type is drawer`);
                    item.type = 'none';
                }
                else {
                    item.drawer = Object.assign(Object.assign({ paramsName: 'record', size: 'lg' }, drawer), item.drawer);
                }
            }
            if (item.type === 'del' && typeof item.pop === 'undefined') {
                item.pop = true;
            }
            // pop
            this.fixPop(item, pop);
            if (item.icon) {
                item.icon = Object.assign(Object.assign({}, btnIcon), (typeof item.icon === 'string' ? { type: item.icon } : item.icon));
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
                item.iif = () => true;
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
        res.reName = Object.assign(Object.assign({}, this.cog.sortReName), res.reName);
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
        let icon = 'filter';
        let iconTheme = 'fill';
        if (res.type === 'keyword') {
            if (res.menus == null || res.menus.length === 0) {
                res.menus = [{ value: '' }];
            }
            icon = 'search';
            iconTheme = 'outline';
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
            res.icon = Object.assign(Object.assign({}, baseIcon), { type: res.icon });
        }
        else {
            res.icon = Object.assign(Object.assign({}, baseIcon), res.icon);
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
        var _a;
        if (item.type !== 'widget')
            return;
        if (item.widget == null || !this.stWidgetRegistry.has(item.widget.type)) {
            delete item.type;
            warn(`st: No widget for type "${(_a = item.widget) === null || _a === void 0 ? void 0 : _a.type}"`);
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
            var _a, _b;
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
                item.yn = Object.assign(Object.assign({ truth: true }, this.cog.yn), item.yn);
            }
            // date
            if (item.type === 'date') {
                item.dateFormat = item.dateFormat || ((_a = this.cog.date) === null || _a === void 0 ? void 0 : _a.format);
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
            item.safeType = (_b = item.safeType) !== null && _b !== void 0 ? _b : options.safeType;
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
            item.resizable = Object.assign(Object.assign({ disabled: true, bounds: 'window', minWidth: 60, maxWidth: 360, preview: true }, options.resizable), (typeof item.resizable === 'boolean' ? { disabled: !item.resizable } : item.resizable));
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
        return Object.assign({ columns: columns.filter(w => !Array.isArray(w.children) || w.children.length === 0) }, this.genHeaders(copyList));
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
STColumnSource.decorators = [
    { type: Injectable }
];
STColumnSource.ctorParameters = () => [
    { type: DomSanitizer },
    { type: STRowSource, decorators: [{ type: Host }] },
    { type: ACLService, decorators: [{ type: Optional }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [ALAIN_I18N_TOKEN,] }] },
    { type: STWidgetRegistry }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtY29sdW1uLXNvdXJjZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9zdC9zdC1jb2x1bW4tc291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQWUsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXpELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDeEMsT0FBTyxFQUFvQixnQkFBZ0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUVsRSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBR25ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFzQi9DLE1BQU0sT0FBTyxjQUFjO0lBR3pCLFlBQ1UsR0FBaUIsRUFDVCxTQUFzQixFQUNsQixHQUFlLEVBQ1csT0FBeUIsRUFDL0QsZ0JBQWtDO1FBSmxDLFFBQUcsR0FBSCxHQUFHLENBQWM7UUFDVCxjQUFTLEdBQVQsU0FBUyxDQUFhO1FBQ2xCLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDVyxZQUFPLEdBQVAsT0FBTyxDQUFrQjtRQUMvRCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQ3pDLENBQUM7SUFFSixNQUFNLENBQUMsR0FBa0I7UUFDdkIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDakIsQ0FBQztJQUVPLE1BQU0sQ0FBQyxDQUFpQixFQUFFLEdBQXNCO1FBQ3RELElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxLQUFLLEVBQUU7WUFDcEMsQ0FBQyxDQUFD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R0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQzVDO2FBQU07WUFDTCxDQUFDLENBQUMsS0FBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7U0FDL0I7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7OztZQTFkRixVQUFVOzs7WUE5QkYsWUFBWTtZQVFaLFdBQVcsdUJBNEJmLElBQUk7WUFsQ0EsVUFBVSx1QkFtQ2QsUUFBUTs0Q0FDUixRQUFRLFlBQUksTUFBTSxTQUFDLGdCQUFnQjtZQTdCL0IsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSG9zdCwgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5pbXBvcnQgeyBBQ0xTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL2FjbCc7XG5pbXBvcnQgeyBBbGFpbkkxOE5TZXJ2aWNlLCBBTEFJTl9JMThOX1RPS0VOIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IEFsYWluU1RDb25maWcgfSBmcm9tICdAZGVsb24vdXRpbC9jb25maWcnO1xuaW1wb3J0IHsgZGVlcENvcHksIHdhcm4gfSBmcm9tICdAZGVsb24vdXRpbC9vdGhlcic7XG5pbXBvcnQgdHlwZSB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbmltcG9ydCB7IFNUUm93U291cmNlIH0gZnJvbSAnLi9zdC1yb3cuZGlyZWN0aXZlJztcbmltcG9ydCB7IFNUV2lkZ2V0UmVnaXN0cnkgfSBmcm9tICcuL3N0LXdpZGdldCc7XG5pbXBvcnQge1xuICBTVENvbHVtbixcbiAgU1RDb2x1bW5CdXR0b24sXG4gIFNUQ29sdW1uQnV0dG9uUG9wLFxuICBTVENvbHVtbkZpbHRlcixcbiAgU1RDb2x1bW5Hcm91cFR5cGUsXG4gIFNUQ29sdW1uU2FmZVR5cGUsXG4gIFNUSWNvbixcbiAgU1RSZXNpemFibGUsXG4gIFNUU29ydE1hcCxcbiAgU1RXaWR0aE1vZGVcbn0gZnJvbSAnLi9zdC5pbnRlcmZhY2VzJztcbmltcG9ydCB7IF9TVENvbHVtbiwgX1NUSGVhZGVyIH0gZnJvbSAnLi9zdC50eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RDb2x1bW5Tb3VyY2VQcm9jZXNzT3B0aW9ucyB7XG4gIHdpZHRoTW9kZTogU1RXaWR0aE1vZGU7XG4gIHJlc2l6YWJsZTogU1RSZXNpemFibGU7XG4gIHNhZmVUeXBlOiBTVENvbHVtblNhZmVUeXBlO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU1RDb2x1bW5Tb3VyY2Uge1xuICBwcml2YXRlIGNvZzogQWxhaW5TVENvbmZpZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGRvbTogRG9tU2FuaXRpemVyLFxuICAgIEBIb3N0KCkgcHJpdmF0ZSByb3dTb3VyY2U6IFNUUm93U291cmNlLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgYWNsOiBBQ0xTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoQUxBSU5fSTE4Tl9UT0tFTikgcHJpdmF0ZSBpMThuU3J2OiBBbGFpbkkxOE5TZXJ2aWNlLFxuICAgIHByaXZhdGUgc3RXaWRnZXRSZWdpc3RyeTogU1RXaWRnZXRSZWdpc3RyeVxuICApIHt9XG5cbiAgc2V0Q29nKHZhbDogQWxhaW5TVENvbmZpZyk6IHZvaWQge1xuICAgIHRoaXMuY29nID0gdmFsO1xuICB9XG5cbiAgcHJpdmF0ZSBmaXhQb3AoaTogU1RDb2x1bW5CdXR0b24sIGRlZjogU1RDb2x1bW5CdXR0b25Qb3ApOiB2b2lkIHtcbiAgICBpZiAoaS5wb3AgPT0gbnVsbCB8fCBpLnBvcCA9PT0gZmFsc2UpIHtcbiAgICAgIGkucG9wID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHBvcCA9IHtcbiAgICAgIC4uLmRlZlxuICAgIH07XG4gICAgaWYgKHR5cGVvZiBpLnBvcCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHBvcC50aXRsZSA9IGkucG9wO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGkucG9wID09PSAnb2JqZWN0Jykge1xuICAgICAgcG9wID0ge1xuICAgICAgICAuLi5wb3AsXG4gICAgICAgIC4uLmkucG9wXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcG9wLmNvbmRpdGlvbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcG9wLmNvbmRpdGlvbiA9ICgpID0+IGZhbHNlO1xuICAgIH1cblxuICAgIGkucG9wID0gcG9wO1xuICB9XG5cbiAgcHJpdmF0ZSBidG5Db2VyY2UobGlzdDogU1RDb2x1bW5CdXR0b25bXSk6IFNUQ29sdW1uQnV0dG9uW10ge1xuICAgIGlmICghbGlzdCkgcmV0dXJuIFtdO1xuICAgIGNvbnN0IHJldDogU1RDb2x1bW5CdXR0b25bXSA9IFtdO1xuICAgIGNvbnN0IHsgbW9kYWwsIGRyYXdlciwgcG9wLCBidG5JY29uIH0gPSB0aGlzLmNvZztcblxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBsaXN0KSB7XG4gICAgICBpZiAodGhpcy5hY2wgJiYgaXRlbS5hY2wgJiYgIXRoaXMuYWNsLmNhbihpdGVtLmFjbCkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdtb2RhbCcgfHwgaXRlbS50eXBlID09PSAnc3RhdGljJykge1xuICAgICAgICBpZiAoaXRlbS5tb2RhbCA9PSBudWxsIHx8IGl0ZW0ubW9kYWwuY29tcG9uZW50ID09IG51bGwpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oYFtzdF0gU2hvdWxkIHNwZWNpZnkgbW9kYWwgcGFyYW1ldGVyIHdoZW4gdHlwZSBpcyBtb2RhbCBvciBzdGF0aWNgKTtcbiAgICAgICAgICBpdGVtLnR5cGUgPSAnbm9uZSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbS5tb2RhbCA9IHsgLi4ueyBwYXJhbXNOYW1lOiAncmVjb3JkJywgc2l6ZTogJ2xnJyB9LCAuLi5tb2RhbCwgLi4uaXRlbS5tb2RhbCB9O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdkcmF3ZXInKSB7XG4gICAgICAgIGlmIChpdGVtLmRyYXdlciA9PSBudWxsIHx8IGl0ZW0uZHJhd2VyLmNvbXBvbmVudCA9PSBudWxsKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGBbc3RdIFNob3VsZCBzcGVjaWZ5IGRyYXdlciBwYXJhbWV0ZXIgd2hlbiB0eXBlIGlzIGRyYXdlcmApO1xuICAgICAgICAgIGl0ZW0udHlwZSA9ICdub25lJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtLmRyYXdlciA9IHsgLi4ueyBwYXJhbXNOYW1lOiAncmVjb3JkJywgc2l6ZTogJ2xnJyB9LCAuLi5kcmF3ZXIsIC4uLml0ZW0uZHJhd2VyIH07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ2RlbCcgJiYgdHlwZW9mIGl0ZW0ucG9wID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBpdGVtLnBvcCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIC8vIHBvcFxuICAgICAgdGhpcy5maXhQb3AoaXRlbSwgcG9wISk7XG5cbiAgICAgIGlmIChpdGVtLmljb24pIHtcbiAgICAgICAgaXRlbS5pY29uID0ge1xuICAgICAgICAgIC4uLmJ0bkljb24sXG4gICAgICAgICAgLi4uKHR5cGVvZiBpdGVtLmljb24gPT09ICdzdHJpbmcnID8geyB0eXBlOiBpdGVtLmljb24gfSA6IGl0ZW0uaWNvbilcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgaXRlbS5jaGlsZHJlbiA9IGl0ZW0uY2hpbGRyZW4gJiYgaXRlbS5jaGlsZHJlbi5sZW5ndGggPiAwID8gdGhpcy5idG5Db2VyY2UoaXRlbS5jaGlsZHJlbikgOiBbXTtcblxuICAgICAgLy8gaTE4blxuICAgICAgaWYgKGl0ZW0uaTE4biAmJiB0aGlzLmkxOG5TcnYpIHtcbiAgICAgICAgaXRlbS50ZXh0ID0gdGhpcy5pMThuU3J2LmZhbnlpKGl0ZW0uaTE4bik7XG4gICAgICB9XG5cbiAgICAgIHJldC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgICB0aGlzLmJ0bkNvZXJjZUlmKHJldCk7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIHByaXZhdGUgYnRuQ29lcmNlSWYobGlzdDogU1RDb2x1bW5CdXR0b25bXSk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiBsaXN0KSB7XG4gICAgICBpZiAoIWl0ZW0uaWlmKSBpdGVtLmlpZiA9ICgpID0+IHRydWU7XG4gICAgICBpdGVtLmlpZkJlaGF2aW9yID0gaXRlbS5paWZCZWhhdmlvciB8fCB0aGlzLmNvZy5paWZCZWhhdmlvcjtcbiAgICAgIGlmIChpdGVtLmNoaWxkcmVuICYmIGl0ZW0uY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLmJ0bkNvZXJjZUlmKGl0ZW0uY2hpbGRyZW4pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXRlbS5jaGlsZHJlbiA9IFtdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZml4ZWRDb2VyY2UobGlzdDogX1NUQ29sdW1uW10pOiB2b2lkIHtcbiAgICBjb25zdCBjb3VudFJlZHVjZSA9IChhOiBudW1iZXIsIGI6IF9TVENvbHVtbikgPT4gYSArICtiLndpZHRoIS50b1N0cmluZygpLnJlcGxhY2UoJ3B4JywgJycpO1xuICAgIC8vIGxlZnQgd2lkdGhcbiAgICBsaXN0XG4gICAgICAuZmlsdGVyKHcgPT4gdy5maXhlZCAmJiB3LmZpeGVkID09PSAnbGVmdCcgJiYgdy53aWR0aClcbiAgICAgIC5mb3JFYWNoKChpdGVtLCBpZHgpID0+IChpdGVtLl9sZWZ0ID0gYCR7bGlzdC5zbGljZSgwLCBpZHgpLnJlZHVjZShjb3VudFJlZHVjZSwgMCl9cHhgKSk7XG4gICAgLy8gcmlnaHQgd2lkdGhcbiAgICBsaXN0XG4gICAgICAuZmlsdGVyKHcgPT4gdy5maXhlZCAmJiB3LmZpeGVkID09PSAncmlnaHQnICYmIHcud2lkdGgpXG4gICAgICAucmV2ZXJzZSgpXG4gICAgICAuZm9yRWFjaCgoaXRlbSwgaWR4KSA9PiAoaXRlbS5fcmlnaHQgPSBgJHtpZHggPiAwID8gbGlzdC5zbGljZSgtaWR4KS5yZWR1Y2UoY291bnRSZWR1Y2UsIDApIDogMH1weGApKTtcbiAgfVxuXG4gIHByaXZhdGUgc29ydENvZXJjZShpdGVtOiBfU1RDb2x1bW4pOiBTVFNvcnRNYXAge1xuICAgIGNvbnN0IHJlcyA9IHRoaXMuZml4U29ydENvZXJjZShpdGVtKTtcbiAgICByZXMucmVOYW1lID0ge1xuICAgICAgLi4udGhpcy5jb2cuc29ydFJlTmFtZSxcbiAgICAgIC4uLnJlcy5yZU5hbWVcbiAgICB9O1xuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBwcml2YXRlIGZpeFNvcnRDb2VyY2UoaXRlbTogX1NUQ29sdW1uKTogU1RTb3J0TWFwIHtcbiAgICBpZiAodHlwZW9mIGl0ZW0uc29ydCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiB7IGVuYWJsZWQ6IGZhbHNlIH07XG4gICAgfVxuXG4gICAgbGV0IHJlczogU1RTb3J0TWFwID0ge307XG5cbiAgICBpZiAodHlwZW9mIGl0ZW0uc29ydCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJlcy5rZXkgPSBpdGVtLnNvcnQ7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgaXRlbS5zb3J0ICE9PSAnYm9vbGVhbicpIHtcbiAgICAgIHJlcyA9IGl0ZW0uc29ydDtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBpdGVtLnNvcnQgPT09ICdib29sZWFuJykge1xuICAgICAgcmVzLmNvbXBhcmUgPSAoYSwgYikgPT4gYVtpdGVtLmluZGV4S2V5IV0gLSBiW2l0ZW0uaW5kZXhLZXkhXTtcbiAgICB9XG5cbiAgICBpZiAoIXJlcy5rZXkpIHtcbiAgICAgIHJlcy5rZXkgPSBpdGVtLmluZGV4S2V5O1xuICAgIH1cblxuICAgIHJlcy5lbmFibGVkID0gdHJ1ZTtcblxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBwcml2YXRlIGZpbHRlckNvZXJjZShpdGVtOiBfU1RDb2x1bW4pOiBTVENvbHVtbkZpbHRlciB8IG51bGwge1xuICAgIGlmIChpdGVtLmZpbHRlciA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBsZXQgcmVzOiBTVENvbHVtbkZpbHRlciB8IG51bGwgPSBpdGVtLmZpbHRlcjtcbiAgICByZXMudHlwZSA9IHJlcy50eXBlIHx8ICdkZWZhdWx0JztcblxuICAgIGxldCBpY29uID0gJ2ZpbHRlcic7XG4gICAgbGV0IGljb25UaGVtZSA9ICdmaWxsJztcbiAgICBpZiAocmVzLnR5cGUgPT09ICdrZXl3b3JkJykge1xuICAgICAgaWYgKHJlcy5tZW51cyA9PSBudWxsIHx8IHJlcy5tZW51cyEubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJlcy5tZW51cyA9IFt7IHZhbHVlOiAnJyB9XTtcbiAgICAgIH1cbiAgICAgIGljb24gPSAnc2VhcmNoJztcbiAgICAgIGljb25UaGVtZSA9ICdvdXRsaW5lJztcbiAgICB9XG5cbiAgICBpZiAocmVzLm1lbnVzIS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcmVzLm11bHRpcGxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmVzLm11bHRpcGxlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXMuY29uZmlybVRleHQgPSByZXMuY29uZmlybVRleHQgfHwgdGhpcy5jb2cuZmlsdGVyQ29uZmlybVRleHQ7XG4gICAgcmVzLmNsZWFyVGV4dCA9IHJlcy5jbGVhclRleHQgfHwgdGhpcy5jb2cuZmlsdGVyQ2xlYXJUZXh0O1xuICAgIHJlcy5rZXkgPSByZXMua2V5IHx8IGl0ZW0uaW5kZXhLZXk7XG4gICAgcmVzLmljb24gPSByZXMuaWNvbiB8fCBpY29uO1xuXG4gICAgY29uc3QgYmFzZUljb24gPSB7IHR5cGU6IGljb24sIHRoZW1lOiBpY29uVGhlbWUgfSBhcyBTVEljb247XG4gICAgaWYgKHR5cGVvZiByZXMuaWNvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJlcy5pY29uID0geyAuLi5iYXNlSWNvbiwgdHlwZTogcmVzLmljb24gfSBhcyBTVEljb247XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcy5pY29uID0geyAuLi5iYXNlSWNvbiwgLi4ucmVzLmljb24gfTtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZURlZmF1bHQocmVzKTtcblxuICAgIGlmICh0aGlzLmFjbCkge1xuICAgICAgcmVzLm1lbnVzID0gcmVzLm1lbnVzIS5maWx0ZXIodyA9PiB0aGlzLmFjbC5jYW4ody5hY2whKSk7XG4gICAgfVxuXG4gICAgaWYgKHJlcy5tZW51cyEubGVuZ3RoIDw9IDApIHtcbiAgICAgIHJlcyA9IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIHByaXZhdGUgcmVzdG9yZVJlbmRlcihpdGVtOiBfU1RDb2x1bW4pOiB2b2lkIHtcbiAgICBpZiAoaXRlbS5yZW5kZXJUaXRsZSkge1xuICAgICAgaXRlbS5fX3JlbmRlclRpdGxlID1cbiAgICAgICAgdHlwZW9mIGl0ZW0ucmVuZGVyVGl0bGUgPT09ICdzdHJpbmcnXG4gICAgICAgICAgPyB0aGlzLnJvd1NvdXJjZS5nZXRUaXRsZShpdGVtLnJlbmRlclRpdGxlKVxuICAgICAgICAgIDogKGl0ZW0ucmVuZGVyVGl0bGUgYXMgVGVtcGxhdGVSZWY8dm9pZD4pO1xuICAgIH1cbiAgICBpZiAoaXRlbS5yZW5kZXIpIHtcbiAgICAgIGl0ZW0uX19yZW5kZXIgPVxuICAgICAgICB0eXBlb2YgaXRlbS5yZW5kZXIgPT09ICdzdHJpbmcnID8gdGhpcy5yb3dTb3VyY2UuZ2V0Um93KGl0ZW0ucmVuZGVyKSA6IChpdGVtLnJlbmRlciBhcyBUZW1wbGF0ZVJlZjx2b2lkPik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB3aWRnZXRDb2VyY2UoaXRlbTogX1NUQ29sdW1uKTogdm9pZCB7XG4gICAgaWYgKGl0ZW0udHlwZSAhPT0gJ3dpZGdldCcpIHJldHVybjtcbiAgICBpZiAoaXRlbS53aWRnZXQgPT0gbnVsbCB8fCAhdGhpcy5zdFdpZGdldFJlZ2lzdHJ5LmhhcyhpdGVtLndpZGdldC50eXBlKSkge1xuICAgICAgZGVsZXRlIGl0ZW0udHlwZTtcbiAgICAgIHdhcm4oYHN0OiBObyB3aWRnZXQgZm9yIHR5cGUgXCIke2l0ZW0ud2lkZ2V0Py50eXBlfVwiYCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZW5IZWFkZXJzKHJvb3RDb2x1bW5zOiBfU1RDb2x1bW5bXSk6IHsgaGVhZGVyczogX1NUSGVhZGVyW11bXTsgaGVhZGVyV2lkdGhzOiBzdHJpbmdbXSB8IG51bGwgfSB7XG4gICAgY29uc3Qgcm93czogX1NUSGVhZGVyW11bXSA9IFtdO1xuICAgIGNvbnN0IHdpZHRoczogc3RyaW5nW10gPSBbXTtcbiAgICBjb25zdCBmaWxsUm93Q2VsbHMgPSAoY29sdW1uczogX1NUQ29sdW1uW10sIGNvbEluZGV4OiBudW1iZXIsIHJvd0luZGV4ID0gMCk6IG51bWJlcltdID0+IHtcbiAgICAgIC8vIEluaXQgcm93c1xuICAgICAgcm93c1tyb3dJbmRleF0gPSByb3dzW3Jvd0luZGV4XSB8fCBbXTtcblxuICAgICAgbGV0IGN1cnJlbnRDb2xJbmRleCA9IGNvbEluZGV4O1xuICAgICAgY29uc3QgY29sU3BhbnM6IG51bWJlcltdID0gY29sdW1ucy5tYXAoY29sdW1uID0+IHtcbiAgICAgICAgY29uc3QgY2VsbDogU1RDb2x1bW5Hcm91cFR5cGUgPSB7XG4gICAgICAgICAgY29sdW1uLFxuICAgICAgICAgIGNvbFN0YXJ0OiBjdXJyZW50Q29sSW5kZXgsXG4gICAgICAgICAgaGFzU3ViQ29sdW1uczogZmFsc2VcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgY29sU3BhbiA9IDE7XG5cbiAgICAgICAgY29uc3Qgc3ViQ29sdW1ucyA9IGNvbHVtbi5jaGlsZHJlbjtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc3ViQ29sdW1ucykgJiYgc3ViQ29sdW1ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgY29sU3BhbiA9IGZpbGxSb3dDZWxscyhzdWJDb2x1bW5zLCBjdXJyZW50Q29sSW5kZXgsIHJvd0luZGV4ICsgMSkucmVkdWNlKCh0b3RhbCwgY291bnQpID0+IHRvdGFsICsgY291bnQsIDApO1xuICAgICAgICAgIGNlbGwuaGFzU3ViQ29sdW1ucyA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2lkdGhzLnB1c2goKGNlbGwuY29sdW1uLndpZHRoIGFzIHN0cmluZykgfHwgJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCdjb2xTcGFuJyBpbiBjb2x1bW4pIHtcbiAgICAgICAgICBjb2xTcGFuID0gY29sdW1uLmNvbFNwYW4hO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCdyb3dTcGFuJyBpbiBjb2x1bW4pIHtcbiAgICAgICAgICBjZWxsLnJvd1NwYW4gPSBjb2x1bW4ucm93U3BhbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNlbGwuY29sU3BhbiA9IGNvbFNwYW47XG4gICAgICAgIGNlbGwuY29sRW5kID0gY2VsbC5jb2xTdGFydCArIGNvbFNwYW4gLSAxO1xuICAgICAgICByb3dzW3Jvd0luZGV4XS5wdXNoKGNlbGwgYXMgTnpTYWZlQW55KTtcblxuICAgICAgICBjdXJyZW50Q29sSW5kZXggKz0gY29sU3BhbjtcblxuICAgICAgICByZXR1cm4gY29sU3BhbjtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gY29sU3BhbnM7XG4gICAgfTtcblxuICAgIGZpbGxSb3dDZWxscyhyb290Q29sdW1ucywgMCk7XG5cbiAgICAvLyBIYW5kbGUgYHJvd1NwYW5gXG4gICAgY29uc3Qgcm93Q291bnQgPSByb3dzLmxlbmd0aDtcbiAgICBmb3IgKGxldCByb3dJbmRleCA9IDA7IHJvd0luZGV4IDwgcm93Q291bnQ7IHJvd0luZGV4ICs9IDEpIHtcbiAgICAgIHJvd3Nbcm93SW5kZXhdLmZvckVhY2goY2VsbCA9PiB7XG4gICAgICAgIGlmICghKCdyb3dTcGFuJyBpbiBjZWxsKSAmJiAhKGNlbGwgYXMgX1NUSGVhZGVyKS5oYXNTdWJDb2x1bW5zKSB7XG4gICAgICAgICAgKGNlbGwgYXMgX1NUSGVhZGVyKS5yb3dTcGFuID0gcm93Q291bnQgLSByb3dJbmRleDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgaGVhZGVyczogcm93cywgaGVhZGVyV2lkdGhzOiByb3dDb3VudCA+IDEgPyB3aWR0aHMgOiBudWxsIH07XG4gIH1cblxuICBwcml2YXRlIGNsZWFuQ29uZChsaXN0OiBfU1RDb2x1bW5bXSk6IF9TVENvbHVtbltdIHtcbiAgICBjb25zdCByZXM6IF9TVENvbHVtbltdID0gW107XG4gICAgY29uc3QgY29weUxpc3QgPSBkZWVwQ29weShsaXN0KTtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgY29weUxpc3QpIHtcbiAgICAgIGlmIChpdGVtLmlpZiAmJiAhaXRlbS5paWYoaXRlbSkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5hY2wgJiYgaXRlbS5hY2wgJiYgIXRoaXMuYWNsLmNhbihpdGVtLmFjbCkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShpdGVtLmNoaWxkcmVuKSAmJiBpdGVtLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgaXRlbS5jaGlsZHJlbiA9IHRoaXMuY2xlYW5Db25kKGl0ZW0uY2hpbGRyZW4pO1xuICAgICAgfVxuICAgICAgcmVzLnB1c2goaXRlbSk7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBwcm9jZXNzKFxuICAgIGxpc3Q6IFNUQ29sdW1uW10sXG4gICAgb3B0aW9uczogU1RDb2x1bW5Tb3VyY2VQcm9jZXNzT3B0aW9uc1xuICApOiB7IGNvbHVtbnM6IF9TVENvbHVtbltdOyBoZWFkZXJzOiBfU1RIZWFkZXJbXVtdOyBoZWFkZXJXaWR0aHM6IHN0cmluZ1tdIHwgbnVsbCB9IHtcbiAgICBpZiAoIWxpc3QgfHwgbGlzdC5sZW5ndGggPT09IDApIHRocm93IG5ldyBFcnJvcihgW3N0XTogdGhlIGNvbHVtbnMgcHJvcGVydHkgbXVzZSBiZSBkZWZpbmUhYCk7XG5cbiAgICBjb25zdCB7IG5vSW5kZXggfSA9IHRoaXMuY29nO1xuICAgIGxldCBjaGVja2JveENvdW50ID0gMDtcbiAgICBsZXQgcmFkaW9Db3VudCA9IDA7XG4gICAgbGV0IHBvaW50ID0gMDtcbiAgICBjb25zdCBjb2x1bW5zOiBfU1RDb2x1bW5bXSA9IFtdO1xuXG4gICAgY29uc3QgcHJvY2Vzc0l0ZW0gPSAoaXRlbTogX1NUQ29sdW1uKTogX1NUQ29sdW1uID0+IHtcbiAgICAgIC8vIGluZGV4XG4gICAgICBpZiAoaXRlbS5pbmRleCkge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoaXRlbS5pbmRleCkpIHtcbiAgICAgICAgICBpdGVtLmluZGV4ID0gaXRlbS5pbmRleC50b1N0cmluZygpLnNwbGl0KCcuJyk7XG4gICAgICAgIH1cbiAgICAgICAgaXRlbS5pbmRleEtleSA9IGl0ZW0uaW5kZXguam9pbignLicpO1xuICAgICAgfVxuXG4gICAgICAvLyAjcmVnaW9uIHRpdGxlXG5cbiAgICAgIGNvbnN0IHRpdCA9ICh0eXBlb2YgaXRlbS50aXRsZSA9PT0gJ3N0cmluZycgPyB7IHRleHQ6IGl0ZW0udGl0bGUgfSA6IGl0ZW0udGl0bGUpIHx8IHt9O1xuICAgICAgaWYgKHRpdC5pMThuICYmIHRoaXMuaTE4blNydikge1xuICAgICAgICB0aXQudGV4dCA9IHRoaXMuaTE4blNydi5mYW55aSh0aXQuaTE4bik7XG4gICAgICB9XG4gICAgICBpZiAodGl0LnRleHQpIHtcbiAgICAgICAgdGl0Ll90ZXh0ID0gdGhpcy5kb20uYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwodGl0LnRleHQpO1xuICAgICAgfVxuICAgICAgaXRlbS50aXRsZSA9IHRpdDtcblxuICAgICAgLy8gI2VuZHJlZ2lvblxuXG4gICAgICAvLyBub1xuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ25vJykge1xuICAgICAgICBpdGVtLm5vSW5kZXggPSBpdGVtLm5vSW5kZXggPT0gbnVsbCA/IG5vSW5kZXggOiBpdGVtLm5vSW5kZXg7XG4gICAgICB9XG4gICAgICAvLyBjaGVja2JveFxuICAgICAgaWYgKGl0ZW0uc2VsZWN0aW9ucyA9PSBudWxsKSB7XG4gICAgICAgIGl0ZW0uc2VsZWN0aW9ucyA9IFtdO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICArK2NoZWNrYm94Q291bnQ7XG4gICAgICAgIGlmICghaXRlbS53aWR0aCkge1xuICAgICAgICAgIGl0ZW0ud2lkdGggPSBgJHtpdGVtLnNlbGVjdGlvbnMubGVuZ3RoID4gMCA/IDYyIDogNTB9cHhgO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5hY2wpIHtcbiAgICAgICAgaXRlbS5zZWxlY3Rpb25zID0gaXRlbS5zZWxlY3Rpb25zLmZpbHRlcih3ID0+IHRoaXMuYWNsLmNhbih3LmFjbCEpKTtcbiAgICAgIH1cbiAgICAgIC8vIHJhZGlvXG4gICAgICBpZiAoaXRlbS50eXBlID09PSAncmFkaW8nKSB7XG4gICAgICAgICsrcmFkaW9Db3VudDtcbiAgICAgICAgaXRlbS5zZWxlY3Rpb25zID0gW107XG4gICAgICAgIGlmICghaXRlbS53aWR0aCkge1xuICAgICAgICAgIGl0ZW0ud2lkdGggPSAnNTBweCc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIHR5cGVzXG4gICAgICBpZiAoaXRlbS50eXBlID09PSAneW4nKSB7XG4gICAgICAgIGl0ZW0ueW4gPSB7IHRydXRoOiB0cnVlLCAuLi50aGlzLmNvZy55biwgLi4uaXRlbS55biB9O1xuICAgICAgfVxuICAgICAgLy8gZGF0ZVxuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ2RhdGUnKSB7XG4gICAgICAgIGl0ZW0uZGF0ZUZvcm1hdCA9IGl0ZW0uZGF0ZUZvcm1hdCB8fCB0aGlzLmNvZy5kYXRlPy5mb3JtYXQ7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIChpdGVtLnR5cGUgPT09ICdsaW5rJyAmJiB0eXBlb2YgaXRlbS5jbGljayAhPT0gJ2Z1bmN0aW9uJykgfHxcbiAgICAgICAgKGl0ZW0udHlwZSA9PT0gJ2JhZGdlJyAmJiBpdGVtLmJhZGdlID09IG51bGwpIHx8XG4gICAgICAgIChpdGVtLnR5cGUgPT09ICd0YWcnICYmIGl0ZW0udGFnID09IG51bGwpIHx8XG4gICAgICAgIChpdGVtLnR5cGUgPT09ICdlbnVtJyAmJiBpdGVtLmVudW0gPT0gbnVsbClcbiAgICAgICkge1xuICAgICAgICBpdGVtLnR5cGUgPSAnJztcbiAgICAgIH1cbiAgICAgIGl0ZW0uX2lzVHJ1bmNhdGUgPSAhIWl0ZW0ud2lkdGggJiYgb3B0aW9ucy53aWR0aE1vZGUuc3RyaWN0QmVoYXZpb3IgPT09ICd0cnVuY2F0ZScgJiYgaXRlbS50eXBlICE9PSAnaW1nJztcbiAgICAgIC8vIGNsYXNzTmFtZVxuICAgICAgaWYgKCFpdGVtLmNsYXNzTmFtZSkge1xuICAgICAgICBpdGVtLmNsYXNzTmFtZSA9IChcbiAgICAgICAgICB7XG4gICAgICAgICAgICBudW1iZXI6ICd0ZXh0LXJpZ2h0JyxcbiAgICAgICAgICAgIGN1cnJlbmN5OiAndGV4dC1yaWdodCcsXG4gICAgICAgICAgICBkYXRlOiAndGV4dC1jZW50ZXInXG4gICAgICAgICAgfSBhcyBOelNhZmVBbnlcbiAgICAgICAgKVtpdGVtLnR5cGUhXTtcbiAgICAgIH1cbiAgICAgIGl0ZW0uX2NsYXNzTmFtZSA9IGl0ZW0uY2xhc3NOYW1lIHx8IChpdGVtLl9pc1RydW5jYXRlID8gJ3RleHQtdHJ1bmNhdGUnIDogbnVsbCk7XG4gICAgICAvLyB3aWR0aFxuICAgICAgaWYgKHR5cGVvZiBpdGVtLndpZHRoID09PSAnbnVtYmVyJykge1xuICAgICAgICBpdGVtLl93aWR0aCA9IGl0ZW0ud2lkdGg7XG4gICAgICAgIGl0ZW0ud2lkdGggPSBgJHtpdGVtLndpZHRofXB4YDtcbiAgICAgIH1cbiAgICAgIGl0ZW0uX2xlZnQgPSBmYWxzZTtcbiAgICAgIGl0ZW0uX3JpZ2h0ID0gZmFsc2U7XG4gICAgICBpdGVtLnNhZmVUeXBlID0gaXRlbS5zYWZlVHlwZSA/PyBvcHRpb25zLnNhZmVUeXBlO1xuXG4gICAgICAvLyBzb3J0ZXJcbiAgICAgIGl0ZW0uX3NvcnQgPSB0aGlzLnNvcnRDb2VyY2UoaXRlbSk7XG4gICAgICAvLyBmaWx0ZXJcbiAgICAgIGl0ZW0uZmlsdGVyID0gdGhpcy5maWx0ZXJDb2VyY2UoaXRlbSkgYXMgU1RDb2x1bW5GaWx0ZXI7XG4gICAgICAvLyBidXR0b25zXG4gICAgICBpdGVtLmJ1dHRvbnMgPSB0aGlzLmJ0bkNvZXJjZShpdGVtLmJ1dHRvbnMhKTtcbiAgICAgIC8vIHdpZGdldFxuICAgICAgdGhpcy53aWRnZXRDb2VyY2UoaXRlbSk7XG4gICAgICAvLyByZXN0b3JlIGN1c3RvbSByb3dcbiAgICAgIHRoaXMucmVzdG9yZVJlbmRlcihpdGVtKTtcbiAgICAgIC8vIHJlc2l6YWJsZVxuICAgICAgaXRlbS5yZXNpemFibGUgPSB7XG4gICAgICAgIGRpc2FibGVkOiB0cnVlLFxuICAgICAgICBib3VuZHM6ICd3aW5kb3cnLFxuICAgICAgICBtaW5XaWR0aDogNjAsXG4gICAgICAgIG1heFdpZHRoOiAzNjAsXG4gICAgICAgIHByZXZpZXc6IHRydWUsXG4gICAgICAgIC4uLm9wdGlvbnMucmVzaXphYmxlLFxuICAgICAgICAuLi4odHlwZW9mIGl0ZW0ucmVzaXphYmxlID09PSAnYm9vbGVhbicgPyAoeyBkaXNhYmxlZDogIWl0ZW0ucmVzaXphYmxlIH0gYXMgU1RSZXNpemFibGUpIDogaXRlbS5yZXNpemFibGUpXG4gICAgICB9O1xuXG4gICAgICBpdGVtLl9fcG9pbnQgPSBwb2ludCsrO1xuXG4gICAgICByZXR1cm4gaXRlbTtcbiAgICB9O1xuXG4gICAgY29uc3QgcHJvY2Vzc0xpc3QgPSAoZGF0YTogX1NUQ29sdW1uW10pOiB2b2lkID0+IHtcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBkYXRhKSB7XG4gICAgICAgIGNvbHVtbnMucHVzaChwcm9jZXNzSXRlbShpdGVtKSk7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZW0uY2hpbGRyZW4pKSB7XG4gICAgICAgICAgcHJvY2Vzc0xpc3QoaXRlbS5jaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgY29weUxpc3QgPSB0aGlzLmNsZWFuQ29uZChsaXN0IGFzIF9TVENvbHVtbltdKTtcbiAgICBwcm9jZXNzTGlzdChjb3B5TGlzdCk7XG5cbiAgICBpZiAoY2hlY2tib3hDb3VudCA+IDEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgW3N0XToganVzdCBvbmx5IG9uZSBjb2x1bW4gY2hlY2tib3hgKTtcbiAgICB9XG4gICAgaWYgKHJhZGlvQ291bnQgPiAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFtzdF06IGp1c3Qgb25seSBvbmUgY29sdW1uIHJhZGlvYCk7XG4gICAgfVxuXG4gICAgdGhpcy5maXhlZENvZXJjZShjb2x1bW5zIGFzIF9TVENvbHVtbltdKTtcbiAgICByZXR1cm4ge1xuICAgICAgY29sdW1uczogY29sdW1ucy5maWx0ZXIodyA9PiAhQXJyYXkuaXNBcnJheSh3LmNoaWxkcmVuKSB8fCB3LmNoaWxkcmVuLmxlbmd0aCA9PT0gMCksXG4gICAgICAuLi50aGlzLmdlbkhlYWRlcnMoY29weUxpc3QpXG4gICAgfTtcbiAgfVxuXG4gIHJlc3RvcmVBbGxSZW5kZXIoY29sdW1uczogX1NUQ29sdW1uW10pOiB2b2lkIHtcbiAgICBjb2x1bW5zLmZvckVhY2goaSA9PiB0aGlzLnJlc3RvcmVSZW5kZXIoaSkpO1xuICB9XG5cbiAgdXBkYXRlRGVmYXVsdChmaWx0ZXI6IFNUQ29sdW1uRmlsdGVyKTogdGhpcyB7XG4gICAgaWYgKGZpbHRlci50eXBlID09PSAnZGVmYXVsdCcpIHtcbiAgICAgIGZpbHRlci5kZWZhdWx0ID0gZmlsdGVyLm1lbnVzIS5maW5kSW5kZXgodyA9PiB3LmNoZWNrZWQhKSAhPT0gLTE7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpbHRlci5kZWZhdWx0ID0gISFmaWx0ZXIubWVudXMhWzBdLnZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNsZWFuRmlsdGVyKGNvbDogX1NUQ29sdW1uKTogdGhpcyB7XG4gICAgY29uc3QgZiA9IGNvbC5maWx0ZXIhO1xuICAgIGYuZGVmYXVsdCA9IGZhbHNlO1xuICAgIGlmIChmLnR5cGUgPT09ICdkZWZhdWx0Jykge1xuICAgICAgZi5tZW51cyEuZm9yRWFjaChpID0+IChpLmNoZWNrZWQgPSBmYWxzZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmLm1lbnVzIVswXS52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cbiJdfQ==