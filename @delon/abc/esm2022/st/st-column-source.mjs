import { Host, Inject, Injectable, Optional } from '@angular/core';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { deepCopy, warn } from '@delon/util/other';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "./st-row.directive";
import * as i3 from "@delon/acl";
import * as i4 from "./st-widget";
class STColumnSource {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.2", ngImport: i0, type: STColumnSource, deps: [{ token: i1.DomSanitizer }, { token: i2.STRowSource, host: true }, { token: i3.ACLService, optional: true }, { token: ALAIN_I18N_TOKEN, optional: true }, { token: i4.STWidgetRegistry }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.1.2", ngImport: i0, type: STColumnSource }); }
}
export { STColumnSource };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.2", ngImport: i0, type: STColumnSource, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtY29sdW1uLXNvdXJjZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9zdC9zdC1jb2x1bW4tc291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQWUsTUFBTSxlQUFlLENBQUM7QUFJaEYsT0FBTyxFQUFvQixnQkFBZ0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUVsRSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7Ozs7QUF5Qm5ELE1BQ2EsY0FBYztJQUd6QixZQUNVLEdBQWlCLEVBQ1QsU0FBc0IsRUFDbEIsR0FBZSxFQUNXLE9BQXlCLEVBQy9ELGdCQUFrQztRQUpsQyxRQUFHLEdBQUgsR0FBRyxDQUFjO1FBQ1QsY0FBUyxHQUFULFNBQVMsQ0FBYTtRQUNsQixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQ1csWUFBTyxHQUFQLE9BQU8sQ0FBa0I7UUFDL0QscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUN6QyxDQUFDO0lBRUosTUFBTSxDQUFDLEdBQWtCO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ2pCLENBQUM7SUFFTyxNQUFNLENBQUMsQ0FBaUIsRUFBRSxHQUFzQjtRQUN0RCxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssS0FBSyxFQUFFO1lBQ3BDLENBQUMsQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO1lBQ2QsT0FBTztTQUNSO1FBRUQsSUFBSSxHQUFHLEdBQUc7WUFDUixHQUFHLEdBQUc7U0FDUCxDQUFDO1FBQ0YsSUFBSSxPQUFPLENBQUMsQ0FBQyxHQUFHLEtBQUssUUFBUSxFQUFFO1lBQzdCLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztTQUNuQjthQUFNLElBQUksT0FBTyxDQUFDLENBQUMsR0FBRyxLQUFLLFFBQVEsRUFBRTtZQUNwQyxHQUFHLEdBQUc7Z0JBQ0osR0FBRyxHQUFHO2dCQUNOLEdBQUcsQ0FBQyxDQUFDLEdBQUc7YUFDVCxDQUFDO1NBQ0g7UUFFRCxJQUFJLE9BQU8sR0FBRyxDQUFDLFNBQVMsS0FBSyxVQUFVLEVBQUU7WUFDdkMsR0FBRyxDQUFDLFNBQVMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7U0FDN0I7UUFFRCxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNkLENBQUM7SUFFTyxTQUFTLENBQUMsSUFBc0I7UUFDdEMsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPLEVBQUUsQ0FBQztRQUNyQixNQUFNLEdBQUcsR0FBcUIsRUFBRSxDQUFDO1FBQ2pDLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBRWpELEtBQUssTUFBTSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQ3ZCLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNuRCxTQUFTO2FBQ1Y7WUFFRCxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO2dCQUNuRCxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxJQUFJLElBQUksRUFBRTtvQkFDdEQsSUFBSSxPQUFPLFNBQVMsS0FBSyxXQUFXLElBQUksU0FBUyxFQUFFO3dCQUNqRCxPQUFPLENBQUMsSUFBSSxDQUFDLGtFQUFrRSxDQUFDLENBQUM7cUJBQ2xGO29CQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO2lCQUNwQjtxQkFBTTtvQkFDTCxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLEdBQUcsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2lCQUNuRjthQUNGO1lBRUQsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtnQkFDMUIsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsSUFBSSxJQUFJLEVBQUU7b0JBQ3hELElBQUksT0FBTyxTQUFTLEtBQUssV0FBVyxJQUFJLFNBQVMsRUFBRTt3QkFDakQsT0FBTyxDQUFDLElBQUksQ0FBQywwREFBMEQsQ0FBQyxDQUFDO3FCQUMxRTtvQkFDRCxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztpQkFDcEI7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxHQUFHLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztpQkFDdEY7YUFDRjtZQUVELElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxLQUFLLElBQUksT0FBTyxJQUFJLENBQUMsR0FBRyxLQUFLLFdBQVcsRUFBRTtnQkFDMUQsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUM7YUFDakI7WUFFRCxNQUFNO1lBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBSSxDQUFDLENBQUM7WUFFeEIsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNiLElBQUksQ0FBQyxJQUFJLEdBQUc7b0JBQ1YsR0FBRyxPQUFPO29CQUNWLEdBQUcsQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7aUJBQ3JFLENBQUM7YUFDSDtZQUVELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFFL0YsT0FBTztZQUNQLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUM3QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUMzQztZQUVELEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEI7UUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUVPLFdBQVcsQ0FBQyxJQUFzQjtRQUN4QyxLQUFLLE1BQU0sSUFBSSxJQUFJLElBQUksRUFBRTtZQUN2QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUM7WUFDNUQsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDN0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDakM7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7YUFDcEI7U0FDRjtJQUNILENBQUM7SUFFTyxXQUFXLENBQUMsSUFBaUI7UUFDbkMsTUFBTSxXQUFXLEdBQUcsQ0FBQyxDQUFTLEVBQUUsQ0FBWSxFQUFVLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDcEcsYUFBYTtRQUNiLElBQUk7YUFDRCxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxLQUFLLEtBQUssTUFBTSxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUM7YUFDckQsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUMzRixjQUFjO1FBQ2QsSUFBSTthQUNELE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLEtBQUssS0FBSyxPQUFPLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQzthQUN0RCxPQUFPLEVBQUU7YUFDVCxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzFHLENBQUM7SUFFTyxVQUFVLENBQUMsSUFBZTtRQUNoQyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLEdBQUcsQ0FBQyxNQUFNLEdBQUc7WUFDWCxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVTtZQUN0QixHQUFHLEdBQUcsQ0FBQyxNQUFNO1NBQ2QsQ0FBQztRQUNGLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUVPLGFBQWEsQ0FBQyxJQUFlO1FBQ25DLElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLFdBQVcsRUFBRTtZQUNwQyxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDO1NBQzNCO1FBRUQsSUFBSSxHQUFHLEdBQWMsRUFBRSxDQUFDO1FBRXhCLElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUNqQyxHQUFHLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDckI7YUFBTSxJQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDekMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDakI7YUFBTSxJQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDekMsR0FBRyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFTLENBQUMsQ0FBQztTQUMvRDtRQUVELElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFO1lBQ1osR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQ3pCO1FBRUQsR0FBRyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFFbkIsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRU8sWUFBWSxDQUFDLElBQWU7UUFDbEMsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksRUFBRTtZQUN2QixPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsSUFBSSxHQUFHLEdBQTBCLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDN0MsR0FBRyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxJQUFJLFNBQVMsQ0FBQztRQUNqQyxHQUFHLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxVQUFVLEtBQUssS0FBSyxDQUFDO1FBRTFDLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQztRQUNwQixJQUFJLFNBQVMsR0FBRyxNQUFNLENBQUM7UUFDdkIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksS0FBSyxHQUFjLFNBQVMsQ0FBQztRQUNqQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLEVBQUU7WUFDaEIsS0FBSyxTQUFTO2dCQUNaLElBQUksR0FBRyxRQUFRLENBQUM7Z0JBQ2hCLFNBQVMsR0FBRyxTQUFTLENBQUM7Z0JBQ3RCLE1BQU07WUFDUixLQUFLLFFBQVE7Z0JBQ1gsSUFBSSxHQUFHLFFBQVEsQ0FBQztnQkFDaEIsU0FBUyxHQUFHLFNBQVMsQ0FBQztnQkFDdEIsR0FBRyxDQUFDLE1BQU0sR0FBRztvQkFDWCxJQUFJLEVBQUUsQ0FBQztvQkFDUCxHQUFHLEVBQUUsQ0FBQyxRQUFRO29CQUNkLEdBQUcsRUFBRSxRQUFRO29CQUNiLEdBQUcsR0FBRyxDQUFDLE1BQU07aUJBQ2QsQ0FBQztnQkFDRixNQUFNO1lBQ1IsS0FBSyxNQUFNO2dCQUNULElBQUksR0FBRyxVQUFVLENBQUM7Z0JBQ2xCLFNBQVMsR0FBRyxTQUFTLENBQUM7Z0JBQ3RCLEdBQUcsQ0FBQyxJQUFJLEdBQUc7b0JBQ1QsS0FBSyxFQUFFLEtBQUs7b0JBQ1osSUFBSSxFQUFFLE1BQU07b0JBQ1osU0FBUyxFQUFFLElBQUk7b0JBQ2YsT0FBTyxFQUFFLEtBQUs7b0JBQ2QsR0FBRyxHQUFHLENBQUMsSUFBSTtpQkFDWixDQUFDO2dCQUNGLE1BQU07WUFDUixLQUFLLFFBQVE7Z0JBQ1gsTUFBTTtZQUNSO2dCQUNFLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBQ2pCLE1BQU07U0FDVDtRQUNELElBQUksUUFBUSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksR0FBRyxDQUFDLEtBQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDOUQsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztTQUN6QjtRQUVELElBQUksR0FBRyxDQUFDLEtBQUssRUFBRSxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzNCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxJQUFJLE9BQU8sR0FBRyxDQUFDLFFBQVEsS0FBSyxXQUFXLEVBQUU7WUFDdkMsR0FBRyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDckI7UUFFRCxHQUFHLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQztRQUNoRSxHQUFHLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUM7UUFDMUQsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDbkMsR0FBRyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQztRQUU1QixNQUFNLFFBQVEsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBWSxDQUFDO1FBQzVELElBQUksT0FBTyxHQUFHLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUNoQyxHQUFHLENBQUMsSUFBSSxHQUFHLEVBQUUsR0FBRyxRQUFRLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQVksQ0FBQztTQUN0RDthQUFNO1lBQ0wsR0FBRyxDQUFDLElBQUksR0FBRyxFQUFFLEdBQUcsUUFBUSxFQUFFLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3pDO1FBRUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUV4QixJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDWixHQUFHLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUksQ0FBQyxDQUFDLENBQUM7U0FDMUQ7UUFFRCxPQUFPLEdBQUcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDOUMsQ0FBQztJQUVPLGFBQWEsQ0FBQyxJQUFlO1FBQ25DLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLENBQUMsYUFBYTtnQkFDaEIsT0FBTyxJQUFJLENBQUMsV0FBVyxLQUFLLFFBQVE7b0JBQ2xDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO29CQUMzQyxDQUFDLENBQUUsSUFBSSxDQUFDLFdBQWlDLENBQUM7U0FDL0M7UUFDRCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsUUFBUTtnQkFDWCxPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFFLElBQUksQ0FBQyxNQUE0QixDQUFDO1NBQzdHO0lBQ0gsQ0FBQztJQUVPLFlBQVksQ0FBQyxJQUFlO1FBQ2xDLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxRQUFRO1lBQUUsT0FBTztRQUNuQyxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3ZFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztZQUNqQixJQUFJLE9BQU8sU0FBUyxLQUFLLFdBQVcsSUFBSSxTQUFTLEVBQUU7Z0JBQ2pELElBQUksQ0FBQywyQkFBMkIsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLEdBQUcsQ0FBQyxDQUFDO2FBQ3ZEO1NBQ0Y7SUFDSCxDQUFDO0lBRU8sVUFBVSxDQUFDLFdBQXdCO1FBQ3pDLE1BQU0sSUFBSSxHQUFrQixFQUFFLENBQUM7UUFDL0IsTUFBTSxNQUFNLEdBQWEsRUFBRSxDQUFDO1FBQzVCLE1BQU0sWUFBWSxHQUFHLENBQUMsT0FBb0IsRUFBRSxRQUFnQixFQUFFLFFBQVEsR0FBRyxDQUFDLEVBQVksRUFBRTtZQUN0RixZQUFZO1lBQ1osSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFdEMsSUFBSSxlQUFlLEdBQUcsUUFBUSxDQUFDO1lBQy9CLE1BQU0sUUFBUSxHQUFhLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQzlDLE1BQU0sSUFBSSxHQUFzQjtvQkFDOUIsTUFBTTtvQkFDTixRQUFRLEVBQUUsZUFBZTtvQkFDekIsYUFBYSxFQUFFLEtBQUs7aUJBQ3JCLENBQUM7Z0JBRUYsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDO2dCQUVoQixNQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO2dCQUNuQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQ3RELE9BQU8sR0FBRyxZQUFZLENBQUMsVUFBVSxFQUFFLGVBQWUsRUFBRSxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxHQUFHLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDN0csSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7aUJBQzNCO3FCQUFNO29CQUNMLE1BQU0sQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFnQixJQUFJLEVBQUUsQ0FBQyxDQUFDO2lCQUNsRDtnQkFFRCxJQUFJLFNBQVMsSUFBSSxNQUFNLEVBQUU7b0JBQ3ZCLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBUSxDQUFDO2lCQUMzQjtnQkFFRCxJQUFJLFNBQVMsSUFBSSxNQUFNLEVBQUU7b0JBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztpQkFDL0I7Z0JBRUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLEdBQUcsQ0FBQyxDQUFDO2dCQUMxQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQWlCLENBQUMsQ0FBQztnQkFFdkMsZUFBZSxJQUFJLE9BQU8sQ0FBQztnQkFFM0IsT0FBTyxPQUFPLENBQUM7WUFDakIsQ0FBQyxDQUFDLENBQUM7WUFFSCxPQUFPLFFBQVEsQ0FBQztRQUNsQixDQUFDLENBQUM7UUFFRixZQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRTdCLG1CQUFtQjtRQUNuQixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzdCLEtBQUssSUFBSSxRQUFRLEdBQUcsQ0FBQyxFQUFFLFFBQVEsR0FBRyxRQUFRLEVBQUUsUUFBUSxJQUFJLENBQUMsRUFBRTtZQUN6RCxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUM1QixJQUFJLENBQUMsQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLElBQUksQ0FBRSxJQUFrQixDQUFDLGFBQWEsRUFBRTtvQkFDN0QsSUFBa0IsQ0FBQyxPQUFPLEdBQUcsUUFBUSxHQUFHLFFBQVEsQ0FBQztpQkFDbkQ7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNKO1FBRUQsT0FBTyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdkUsQ0FBQztJQUVPLFNBQVMsQ0FBQyxJQUFpQjtRQUNqQyxNQUFNLEdBQUcsR0FBZ0IsRUFBRSxDQUFDO1FBQzVCLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxLQUFLLE1BQU0sSUFBSSxJQUFJLFFBQVEsRUFBRTtZQUMzQixJQUFJLE9BQU8sSUFBSSxDQUFDLEdBQUcsS0FBSyxVQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNyRCxTQUFTO2FBQ1Y7WUFDRCxJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDbkQsU0FBUzthQUNWO1lBQ0QsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQzVELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDL0M7WUFDRCxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hCO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRU8sVUFBVSxDQUFDLElBQWU7UUFDaEMsTUFBTSxpQkFBaUIsR0FBYSxFQUFFLENBQUM7UUFDdkMsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLGlCQUFpQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUN6QztRQUNELE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDcEMsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNqQixNQUFNLFNBQVMsR0FDYjtnQkFDRSxNQUFNLEVBQUUsWUFBWTtnQkFDcEIsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLElBQUksRUFBRSxhQUFhO2FBRXRCLENBQUMsSUFBSSxDQUFDLElBQUssQ0FBQyxDQUFDO1lBQ2QsSUFBSSxTQUFTLEVBQUU7Z0JBQ2IsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ25DO1lBQ0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxpQkFBaUIsQ0FBQztZQUNwQyxPQUFPO1NBQ1I7UUFFRCxNQUFNLG1CQUFtQixHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLG1CQUFtQixJQUFJLE9BQU8sWUFBWSxLQUFLLFFBQVEsRUFBRTtZQUM1RCxNQUFNLGFBQWEsR0FBcUIsWUFBWSxDQUFDO1lBQ3JELGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDOUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxhQUFhLENBQUM7WUFDaEMsT0FBTztTQUNSO1FBRUQsTUFBTSxlQUFlLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBd0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3BHLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLGlCQUFpQixDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVELE9BQU8sQ0FDTCxJQUFnQixFQUNoQixPQUFxQztRQUVyQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzlCLE9BQU8sRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDO1NBQ3pEO1FBQ0QsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDN0IsSUFBSSxhQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLElBQUksVUFBVSxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZCxNQUFNLE9BQU8sR0FBZ0IsRUFBRSxDQUFDO1FBRWhDLE1BQU0sV0FBVyxHQUFHLENBQUMsSUFBZSxFQUFhLEVBQUU7WUFDakQsUUFBUTtZQUNSLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQy9DO2dCQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDdEM7WUFFRCxnQkFBZ0I7WUFFaEIsTUFBTSxHQUFHLEdBQUcsQ0FBQyxPQUFPLElBQUksQ0FBQyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDdkYsSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQzVCLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3pDO1lBQ0QsSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFO2dCQUNaLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDeEQ7WUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztZQUVqQixhQUFhO1lBRWIsS0FBSztZQUNMLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUM5RDtZQUNELFdBQVc7WUFDWCxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxFQUFFO2dCQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQzthQUN0QjtZQUNELElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxVQUFVLEVBQUU7Z0JBQzVCLEVBQUUsYUFBYSxDQUFDO2dCQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtvQkFDZixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDO2lCQUMxRDthQUNGO1lBQ0QsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUNaLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBSSxDQUFDLENBQUMsQ0FBQzthQUNyRTtZQUNELFFBQVE7WUFDUixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssT0FBTyxFQUFFO2dCQUN6QixFQUFFLFVBQVUsQ0FBQztnQkFDYixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztnQkFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7b0JBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7aUJBQ3JCO2FBQ0Y7WUFDRCxRQUFRO1lBQ1IsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRTtnQkFDdEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQzthQUN2RDtZQUNELE9BQU87WUFDUCxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssTUFBTSxFQUFFO2dCQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDO2FBQzVEO1lBQ0QsSUFDRSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssTUFBTSxJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssS0FBSyxVQUFVLENBQUM7Z0JBQzFELENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxPQUFPLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUM7Z0JBQzdDLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxLQUFLLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUM7Z0JBQ3pDLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsRUFDM0M7Z0JBQ0EsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7YUFDaEI7WUFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsY0FBYyxLQUFLLFVBQVUsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQztZQUMxRyxZQUFZO1lBQ1osSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0QixRQUFRO1lBQ1IsSUFBSSxPQUFPLElBQUksQ0FBQyxLQUFLLEtBQUssUUFBUSxFQUFFO2dCQUNsQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUM7YUFDaEM7WUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQztZQUVsRCxTQUFTO1lBQ1QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ25DLFNBQVM7WUFDVCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFtQixDQUFDO1lBQ3hELFVBQVU7WUFDVixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQVEsQ0FBQyxDQUFDO1lBQzdDLFNBQVM7WUFDVCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hCLHFCQUFxQjtZQUNyQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3pCLFlBQVk7WUFDWixJQUFJLENBQUMsU0FBUyxHQUFHO2dCQUNmLFFBQVEsRUFBRSxJQUFJO2dCQUNkLE1BQU0sRUFBRSxRQUFRO2dCQUNoQixRQUFRLEVBQUUsRUFBRTtnQkFDWixRQUFRLEVBQUUsR0FBRztnQkFDYixPQUFPLEVBQUUsSUFBSTtnQkFDYixHQUFHLE9BQU8sQ0FBQyxTQUFTO2dCQUNwQixHQUFHLENBQUMsT0FBTyxJQUFJLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFrQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQzNHLENBQUM7WUFFRixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssRUFBRSxDQUFDO1lBRXZCLE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQyxDQUFDO1FBRUYsTUFBTSxXQUFXLEdBQUcsQ0FBQyxJQUFpQixFQUFRLEVBQUU7WUFDOUMsS0FBSyxNQUFNLElBQUksSUFBSSxJQUFJLEVBQUU7Z0JBQ3ZCLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ2hDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7b0JBQ2hDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQzVCO2FBQ0Y7UUFDSCxDQUFDLENBQUM7UUFFRixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQW1CLENBQUMsQ0FBQztRQUNyRCxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFdEIsSUFBSSxhQUFhLEdBQUcsQ0FBQyxFQUFFO1lBQ3JCLE1BQU0sSUFBSSxLQUFLLENBQUMscUNBQXFDLENBQUMsQ0FBQztTQUN4RDtRQUNELElBQUksVUFBVSxHQUFHLENBQUMsRUFBRTtZQUNsQixNQUFNLElBQUksS0FBSyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7U0FDckQ7UUFFRCxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQXNCLENBQUMsQ0FBQztRQUN6QyxPQUFPO1lBQ0wsT0FBTyxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztZQUNuRixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO1NBQzdCLENBQUM7SUFDSixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsT0FBb0I7UUFDbkMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsYUFBYSxDQUFDLE1BQXNCO1FBQ2xDLElBQUksTUFBTSxDQUFDLEtBQUssSUFBSSxJQUFJO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFFdEMsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUM3QixNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxLQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ2xFO2FBQU07WUFDTCxNQUFNLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztTQUMzQztRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELFdBQVcsQ0FBQyxHQUFjO1FBQ3hCLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFPLENBQUM7UUFDdEIsQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDbEIsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUN4QixDQUFDLENBQUMsS0FBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQzVDO2FBQU07WUFDTCxDQUFDLENBQUMsS0FBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7U0FDL0I7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7OEdBcmhCVSxjQUFjLCtIQU9ILGdCQUFnQjtrSEFQM0IsY0FBYzs7U0FBZCxjQUFjOzJGQUFkLGNBQWM7a0JBRDFCLFVBQVU7OzBCQU1OLElBQUk7OzBCQUNKLFFBQVE7OzBCQUNSLFFBQVE7OzBCQUFJLE1BQU07MkJBQUMsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSG9zdCwgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5pbXBvcnQgeyBBQ0xTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL2FjbCc7XG5pbXBvcnQgeyBBbGFpbkkxOE5TZXJ2aWNlLCBBTEFJTl9JMThOX1RPS0VOIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IEFsYWluU1RDb25maWcgfSBmcm9tICdAZGVsb24vdXRpbC9jb25maWcnO1xuaW1wb3J0IHsgZGVlcENvcHksIHdhcm4gfSBmcm9tICdAZGVsb24vdXRpbC9vdGhlcic7XG5pbXBvcnQgdHlwZSB7IE5nQ2xhc3NJbnRlcmZhY2UsIE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbmltcG9ydCB7IFNUUm93U291cmNlIH0gZnJvbSAnLi9zdC1yb3cuZGlyZWN0aXZlJztcbmltcG9ydCB7IFNUV2lkZ2V0UmVnaXN0cnkgfSBmcm9tICcuL3N0LXdpZGdldCc7XG5pbXBvcnQge1xuICBTVENvbHVtbixcbiAgU1RDb2x1bW5CdXR0b24sXG4gIFNUQ29sdW1uQnV0dG9uUG9wLFxuICBTVENvbHVtbkZpbHRlcixcbiAgU1RDb2x1bW5Hcm91cFR5cGUsXG4gIFNUQ29sdW1uU2FmZVR5cGUsXG4gIFNUSWNvbixcbiAgU1RSZXNpemFibGUsXG4gIFNUU29ydE1hcCxcbiAgU1RXaWR0aE1vZGVcbn0gZnJvbSAnLi9zdC5pbnRlcmZhY2VzJztcbmltcG9ydCB7IF9TVENvbHVtbiwgX1NUSGVhZGVyIH0gZnJvbSAnLi9zdC50eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RDb2x1bW5Tb3VyY2VQcm9jZXNzT3B0aW9ucyB7XG4gIHdpZHRoTW9kZTogU1RXaWR0aE1vZGU7XG4gIHJlc2l6YWJsZT86IFNUUmVzaXphYmxlO1xuICBzYWZlVHlwZTogU1RDb2x1bW5TYWZlVHlwZTtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNUQ29sdW1uU291cmNlIHtcbiAgcHJpdmF0ZSBjb2chOiBBbGFpblNUQ29uZmlnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZG9tOiBEb21TYW5pdGl6ZXIsXG4gICAgQEhvc3QoKSBwcml2YXRlIHJvd1NvdXJjZTogU1RSb3dTb3VyY2UsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBhY2w6IEFDTFNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChBTEFJTl9JMThOX1RPS0VOKSBwcml2YXRlIGkxOG5TcnY6IEFsYWluSTE4TlNlcnZpY2UsXG4gICAgcHJpdmF0ZSBzdFdpZGdldFJlZ2lzdHJ5OiBTVFdpZGdldFJlZ2lzdHJ5XG4gICkge31cblxuICBzZXRDb2codmFsOiBBbGFpblNUQ29uZmlnKTogdm9pZCB7XG4gICAgdGhpcy5jb2cgPSB2YWw7XG4gIH1cblxuICBwcml2YXRlIGZpeFBvcChpOiBTVENvbHVtbkJ1dHRvbiwgZGVmOiBTVENvbHVtbkJ1dHRvblBvcCk6IHZvaWQge1xuICAgIGlmIChpLnBvcCA9PSBudWxsIHx8IGkucG9wID09PSBmYWxzZSkge1xuICAgICAgaS5wb3AgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgcG9wID0ge1xuICAgICAgLi4uZGVmXG4gICAgfTtcbiAgICBpZiAodHlwZW9mIGkucG9wID09PSAnc3RyaW5nJykge1xuICAgICAgcG9wLnRpdGxlID0gaS5wb3A7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgaS5wb3AgPT09ICdvYmplY3QnKSB7XG4gICAgICBwb3AgPSB7XG4gICAgICAgIC4uLnBvcCxcbiAgICAgICAgLi4uaS5wb3BcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBwb3AuY29uZGl0aW9uICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwb3AuY29uZGl0aW9uID0gKCkgPT4gZmFsc2U7XG4gICAgfVxuXG4gICAgaS5wb3AgPSBwb3A7XG4gIH1cblxuICBwcml2YXRlIGJ0bkNvZXJjZShsaXN0OiBTVENvbHVtbkJ1dHRvbltdKTogU1RDb2x1bW5CdXR0b25bXSB7XG4gICAgaWYgKCFsaXN0KSByZXR1cm4gW107XG4gICAgY29uc3QgcmV0OiBTVENvbHVtbkJ1dHRvbltdID0gW107XG4gICAgY29uc3QgeyBtb2RhbCwgZHJhd2VyLCBwb3AsIGJ0bkljb24gfSA9IHRoaXMuY29nO1xuXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGxpc3QpIHtcbiAgICAgIGlmICh0aGlzLmFjbCAmJiBpdGVtLmFjbCAmJiAhdGhpcy5hY2wuY2FuKGl0ZW0uYWNsKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ21vZGFsJyB8fCBpdGVtLnR5cGUgPT09ICdzdGF0aWMnKSB7XG4gICAgICAgIGlmIChpdGVtLm1vZGFsID09IG51bGwgfHwgaXRlbS5tb2RhbC5jb21wb25lbnQgPT0gbnVsbCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgbmdEZXZNb2RlID09PSAndW5kZWZpbmVkJyB8fCBuZ0Rldk1vZGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgW3N0XSBTaG91bGQgc3BlY2lmeSBtb2RhbCBwYXJhbWV0ZXIgd2hlbiB0eXBlIGlzIG1vZGFsIG9yIHN0YXRpY2ApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpdGVtLnR5cGUgPSAnbm9uZSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbS5tb2RhbCA9IHsgLi4ueyBwYXJhbXNOYW1lOiAncmVjb3JkJywgc2l6ZTogJ2xnJyB9LCAuLi5tb2RhbCwgLi4uaXRlbS5tb2RhbCB9O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdkcmF3ZXInKSB7XG4gICAgICAgIGlmIChpdGVtLmRyYXdlciA9PSBudWxsIHx8IGl0ZW0uZHJhd2VyLmNvbXBvbmVudCA9PSBudWxsKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBuZ0Rldk1vZGUgPT09ICd1bmRlZmluZWQnIHx8IG5nRGV2TW9kZSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBbc3RdIFNob3VsZCBzcGVjaWZ5IGRyYXdlciBwYXJhbWV0ZXIgd2hlbiB0eXBlIGlzIGRyYXdlcmApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpdGVtLnR5cGUgPSAnbm9uZSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbS5kcmF3ZXIgPSB7IC4uLnsgcGFyYW1zTmFtZTogJ3JlY29yZCcsIHNpemU6ICdsZycgfSwgLi4uZHJhd2VyLCAuLi5pdGVtLmRyYXdlciB9O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdkZWwnICYmIHR5cGVvZiBpdGVtLnBvcCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgaXRlbS5wb3AgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBwb3BcbiAgICAgIHRoaXMuZml4UG9wKGl0ZW0sIHBvcCEpO1xuXG4gICAgICBpZiAoaXRlbS5pY29uKSB7XG4gICAgICAgIGl0ZW0uaWNvbiA9IHtcbiAgICAgICAgICAuLi5idG5JY29uLFxuICAgICAgICAgIC4uLih0eXBlb2YgaXRlbS5pY29uID09PSAnc3RyaW5nJyA/IHsgdHlwZTogaXRlbS5pY29uIH0gOiBpdGVtLmljb24pXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGl0ZW0uY2hpbGRyZW4gPSBpdGVtLmNoaWxkcmVuICYmIGl0ZW0uY2hpbGRyZW4ubGVuZ3RoID4gMCA/IHRoaXMuYnRuQ29lcmNlKGl0ZW0uY2hpbGRyZW4pIDogW107XG5cbiAgICAgIC8vIGkxOG5cbiAgICAgIGlmIChpdGVtLmkxOG4gJiYgdGhpcy5pMThuU3J2KSB7XG4gICAgICAgIGl0ZW0udGV4dCA9IHRoaXMuaTE4blNydi5mYW55aShpdGVtLmkxOG4pO1xuICAgICAgfVxuXG4gICAgICByZXQucHVzaChpdGVtKTtcbiAgICB9XG4gICAgdGhpcy5idG5Db2VyY2VJZihyZXQpO1xuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBwcml2YXRlIGJ0bkNvZXJjZUlmKGxpc3Q6IFNUQ29sdW1uQnV0dG9uW10pOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgbGlzdCkge1xuICAgICAgaXRlbS5paWZCZWhhdmlvciA9IGl0ZW0uaWlmQmVoYXZpb3IgfHwgdGhpcy5jb2cuaWlmQmVoYXZpb3I7XG4gICAgICBpZiAoaXRlbS5jaGlsZHJlbiAmJiBpdGVtLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5idG5Db2VyY2VJZihpdGVtLmNoaWxkcmVuKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGl0ZW0uY2hpbGRyZW4gPSBbXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGZpeGVkQ29lcmNlKGxpc3Q6IF9TVENvbHVtbltdKTogdm9pZCB7XG4gICAgY29uc3QgY291bnRSZWR1Y2UgPSAoYTogbnVtYmVyLCBiOiBfU1RDb2x1bW4pOiBudW1iZXIgPT4gYSArICtiLndpZHRoIS50b1N0cmluZygpLnJlcGxhY2UoJ3B4JywgJycpO1xuICAgIC8vIGxlZnQgd2lkdGhcbiAgICBsaXN0XG4gICAgICAuZmlsdGVyKHcgPT4gdy5maXhlZCAmJiB3LmZpeGVkID09PSAnbGVmdCcgJiYgdy53aWR0aClcbiAgICAgIC5mb3JFYWNoKChpdGVtLCBpZHgpID0+IChpdGVtLl9sZWZ0ID0gYCR7bGlzdC5zbGljZSgwLCBpZHgpLnJlZHVjZShjb3VudFJlZHVjZSwgMCl9cHhgKSk7XG4gICAgLy8gcmlnaHQgd2lkdGhcbiAgICBsaXN0XG4gICAgICAuZmlsdGVyKHcgPT4gdy5maXhlZCAmJiB3LmZpeGVkID09PSAncmlnaHQnICYmIHcud2lkdGgpXG4gICAgICAucmV2ZXJzZSgpXG4gICAgICAuZm9yRWFjaCgoaXRlbSwgaWR4KSA9PiAoaXRlbS5fcmlnaHQgPSBgJHtpZHggPiAwID8gbGlzdC5zbGljZSgtaWR4KS5yZWR1Y2UoY291bnRSZWR1Y2UsIDApIDogMH1weGApKTtcbiAgfVxuXG4gIHByaXZhdGUgc29ydENvZXJjZShpdGVtOiBfU1RDb2x1bW4pOiBTVFNvcnRNYXAge1xuICAgIGNvbnN0IHJlcyA9IHRoaXMuZml4U29ydENvZXJjZShpdGVtKTtcbiAgICByZXMucmVOYW1lID0ge1xuICAgICAgLi4udGhpcy5jb2cuc29ydFJlTmFtZSxcbiAgICAgIC4uLnJlcy5yZU5hbWVcbiAgICB9O1xuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBwcml2YXRlIGZpeFNvcnRDb2VyY2UoaXRlbTogX1NUQ29sdW1uKTogU1RTb3J0TWFwIHtcbiAgICBpZiAodHlwZW9mIGl0ZW0uc29ydCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiB7IGVuYWJsZWQ6IGZhbHNlIH07XG4gICAgfVxuXG4gICAgbGV0IHJlczogU1RTb3J0TWFwID0ge307XG5cbiAgICBpZiAodHlwZW9mIGl0ZW0uc29ydCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJlcy5rZXkgPSBpdGVtLnNvcnQ7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgaXRlbS5zb3J0ICE9PSAnYm9vbGVhbicpIHtcbiAgICAgIHJlcyA9IGl0ZW0uc29ydDtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBpdGVtLnNvcnQgPT09ICdib29sZWFuJykge1xuICAgICAgcmVzLmNvbXBhcmUgPSAoYSwgYikgPT4gYVtpdGVtLmluZGV4S2V5IV0gLSBiW2l0ZW0uaW5kZXhLZXkhXTtcbiAgICB9XG5cbiAgICBpZiAoIXJlcy5rZXkpIHtcbiAgICAgIHJlcy5rZXkgPSBpdGVtLmluZGV4S2V5O1xuICAgIH1cblxuICAgIHJlcy5lbmFibGVkID0gdHJ1ZTtcblxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBwcml2YXRlIGZpbHRlckNvZXJjZShpdGVtOiBfU1RDb2x1bW4pOiBTVENvbHVtbkZpbHRlciB8IG51bGwge1xuICAgIGlmIChpdGVtLmZpbHRlciA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBsZXQgcmVzOiBTVENvbHVtbkZpbHRlciB8IG51bGwgPSBpdGVtLmZpbHRlcjtcbiAgICByZXMudHlwZSA9IHJlcy50eXBlIHx8ICdkZWZhdWx0JztcbiAgICByZXMuc2hvd09QQXJlYSA9IHJlcy5zaG93T1BBcmVhICE9PSBmYWxzZTtcblxuICAgIGxldCBpY29uID0gJ2ZpbHRlcic7XG4gICAgbGV0IGljb25UaGVtZSA9ICdmaWxsJztcbiAgICBsZXQgZml4TWVudXMgPSB0cnVlO1xuICAgIGxldCB2YWx1ZTogTnpTYWZlQW55ID0gdW5kZWZpbmVkO1xuICAgIHN3aXRjaCAocmVzLnR5cGUpIHtcbiAgICAgIGNhc2UgJ2tleXdvcmQnOlxuICAgICAgICBpY29uID0gJ3NlYXJjaCc7XG4gICAgICAgIGljb25UaGVtZSA9ICdvdXRsaW5lJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICBpY29uID0gJ3NlYXJjaCc7XG4gICAgICAgIGljb25UaGVtZSA9ICdvdXRsaW5lJztcbiAgICAgICAgcmVzLm51bWJlciA9IHtcbiAgICAgICAgICBzdGVwOiAxLFxuICAgICAgICAgIG1pbjogLUluZmluaXR5LFxuICAgICAgICAgIG1heDogSW5maW5pdHksXG4gICAgICAgICAgLi4ucmVzLm51bWJlclxuICAgICAgICB9O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgICBpY29uID0gJ2NhbGVuZGFyJztcbiAgICAgICAgaWNvblRoZW1lID0gJ291dGxpbmUnO1xuICAgICAgICByZXMuZGF0ZSA9IHtcbiAgICAgICAgICByYW5nZTogZmFsc2UsXG4gICAgICAgICAgbW9kZTogJ2RhdGUnLFxuICAgICAgICAgIHNob3dUb2RheTogdHJ1ZSxcbiAgICAgICAgICBzaG93Tm93OiBmYWxzZSxcbiAgICAgICAgICAuLi5yZXMuZGF0ZVxuICAgICAgICB9O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2N1c3RvbSc6XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgZml4TWVudXMgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmIChmaXhNZW51cyAmJiAocmVzLm1lbnVzID09IG51bGwgfHwgcmVzLm1lbnVzIS5sZW5ndGggPT09IDApKSB7XG4gICAgICByZXMubWVudXMgPSBbeyB2YWx1ZSB9XTtcbiAgICB9XG5cbiAgICBpZiAocmVzLm1lbnVzPy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcmVzLm11bHRpcGxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmVzLm11bHRpcGxlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXMuY29uZmlybVRleHQgPSByZXMuY29uZmlybVRleHQgfHwgdGhpcy5jb2cuZmlsdGVyQ29uZmlybVRleHQ7XG4gICAgcmVzLmNsZWFyVGV4dCA9IHJlcy5jbGVhclRleHQgfHwgdGhpcy5jb2cuZmlsdGVyQ2xlYXJUZXh0O1xuICAgIHJlcy5rZXkgPSByZXMua2V5IHx8IGl0ZW0uaW5kZXhLZXk7XG4gICAgcmVzLmljb24gPSByZXMuaWNvbiB8fCBpY29uO1xuXG4gICAgY29uc3QgYmFzZUljb24gPSB7IHR5cGU6IGljb24sIHRoZW1lOiBpY29uVGhlbWUgfSBhcyBTVEljb247XG4gICAgaWYgKHR5cGVvZiByZXMuaWNvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJlcy5pY29uID0geyAuLi5iYXNlSWNvbiwgdHlwZTogcmVzLmljb24gfSBhcyBTVEljb247XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcy5pY29uID0geyAuLi5iYXNlSWNvbiwgLi4ucmVzLmljb24gfTtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZURlZmF1bHQocmVzKTtcblxuICAgIGlmICh0aGlzLmFjbCkge1xuICAgICAgcmVzLm1lbnVzID0gcmVzLm1lbnVzPy5maWx0ZXIodyA9PiB0aGlzLmFjbC5jYW4ody5hY2whKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcy5tZW51cz8ubGVuZ3RoID09PSAwID8gbnVsbCA6IHJlcztcbiAgfVxuXG4gIHByaXZhdGUgcmVzdG9yZVJlbmRlcihpdGVtOiBfU1RDb2x1bW4pOiB2b2lkIHtcbiAgICBpZiAoaXRlbS5yZW5kZXJUaXRsZSkge1xuICAgICAgaXRlbS5fX3JlbmRlclRpdGxlID1cbiAgICAgICAgdHlwZW9mIGl0ZW0ucmVuZGVyVGl0bGUgPT09ICdzdHJpbmcnXG4gICAgICAgICAgPyB0aGlzLnJvd1NvdXJjZS5nZXRUaXRsZShpdGVtLnJlbmRlclRpdGxlKVxuICAgICAgICAgIDogKGl0ZW0ucmVuZGVyVGl0bGUgYXMgVGVtcGxhdGVSZWY8dm9pZD4pO1xuICAgIH1cbiAgICBpZiAoaXRlbS5yZW5kZXIpIHtcbiAgICAgIGl0ZW0uX19yZW5kZXIgPVxuICAgICAgICB0eXBlb2YgaXRlbS5yZW5kZXIgPT09ICdzdHJpbmcnID8gdGhpcy5yb3dTb3VyY2UuZ2V0Um93KGl0ZW0ucmVuZGVyKSA6IChpdGVtLnJlbmRlciBhcyBUZW1wbGF0ZVJlZjx2b2lkPik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB3aWRnZXRDb2VyY2UoaXRlbTogX1NUQ29sdW1uKTogdm9pZCB7XG4gICAgaWYgKGl0ZW0udHlwZSAhPT0gJ3dpZGdldCcpIHJldHVybjtcbiAgICBpZiAoaXRlbS53aWRnZXQgPT0gbnVsbCB8fCAhdGhpcy5zdFdpZGdldFJlZ2lzdHJ5LmhhcyhpdGVtLndpZGdldC50eXBlKSkge1xuICAgICAgZGVsZXRlIGl0ZW0udHlwZTtcbiAgICAgIGlmICh0eXBlb2YgbmdEZXZNb2RlID09PSAndW5kZWZpbmVkJyB8fCBuZ0Rldk1vZGUpIHtcbiAgICAgICAgd2Fybihgc3Q6IE5vIHdpZGdldCBmb3IgdHlwZSBcIiR7aXRlbS53aWRnZXQ/LnR5cGV9XCJgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdlbkhlYWRlcnMocm9vdENvbHVtbnM6IF9TVENvbHVtbltdKTogeyBoZWFkZXJzOiBfU1RIZWFkZXJbXVtdOyBoZWFkZXJXaWR0aHM6IHN0cmluZ1tdIHwgbnVsbCB9IHtcbiAgICBjb25zdCByb3dzOiBfU1RIZWFkZXJbXVtdID0gW107XG4gICAgY29uc3Qgd2lkdGhzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGNvbnN0IGZpbGxSb3dDZWxscyA9IChjb2x1bW5zOiBfU1RDb2x1bW5bXSwgY29sSW5kZXg6IG51bWJlciwgcm93SW5kZXggPSAwKTogbnVtYmVyW10gPT4ge1xuICAgICAgLy8gSW5pdCByb3dzXG4gICAgICByb3dzW3Jvd0luZGV4XSA9IHJvd3Nbcm93SW5kZXhdIHx8IFtdO1xuXG4gICAgICBsZXQgY3VycmVudENvbEluZGV4ID0gY29sSW5kZXg7XG4gICAgICBjb25zdCBjb2xTcGFuczogbnVtYmVyW10gPSBjb2x1bW5zLm1hcChjb2x1bW4gPT4ge1xuICAgICAgICBjb25zdCBjZWxsOiBTVENvbHVtbkdyb3VwVHlwZSA9IHtcbiAgICAgICAgICBjb2x1bW4sXG4gICAgICAgICAgY29sU3RhcnQ6IGN1cnJlbnRDb2xJbmRleCxcbiAgICAgICAgICBoYXNTdWJDb2x1bW5zOiBmYWxzZVxuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBjb2xTcGFuID0gMTtcblxuICAgICAgICBjb25zdCBzdWJDb2x1bW5zID0gY29sdW1uLmNoaWxkcmVuO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzdWJDb2x1bW5zKSAmJiBzdWJDb2x1bW5zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb2xTcGFuID0gZmlsbFJvd0NlbGxzKHN1YkNvbHVtbnMsIGN1cnJlbnRDb2xJbmRleCwgcm93SW5kZXggKyAxKS5yZWR1Y2UoKHRvdGFsLCBjb3VudCkgPT4gdG90YWwgKyBjb3VudCwgMCk7XG4gICAgICAgICAgY2VsbC5oYXNTdWJDb2x1bW5zID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3aWR0aHMucHVzaCgoY2VsbC5jb2x1bW4ud2lkdGggYXMgc3RyaW5nKSB8fCAnJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJ2NvbFNwYW4nIGluIGNvbHVtbikge1xuICAgICAgICAgIGNvbFNwYW4gPSBjb2x1bW4uY29sU3BhbiE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJ3Jvd1NwYW4nIGluIGNvbHVtbikge1xuICAgICAgICAgIGNlbGwucm93U3BhbiA9IGNvbHVtbi5yb3dTcGFuO1xuICAgICAgICB9XG5cbiAgICAgICAgY2VsbC5jb2xTcGFuID0gY29sU3BhbjtcbiAgICAgICAgY2VsbC5jb2xFbmQgPSBjZWxsLmNvbFN0YXJ0ICsgY29sU3BhbiAtIDE7XG4gICAgICAgIHJvd3Nbcm93SW5kZXhdLnB1c2goY2VsbCBhcyBOelNhZmVBbnkpO1xuXG4gICAgICAgIGN1cnJlbnRDb2xJbmRleCArPSBjb2xTcGFuO1xuXG4gICAgICAgIHJldHVybiBjb2xTcGFuO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBjb2xTcGFucztcbiAgICB9O1xuXG4gICAgZmlsbFJvd0NlbGxzKHJvb3RDb2x1bW5zLCAwKTtcblxuICAgIC8vIEhhbmRsZSBgcm93U3BhbmBcbiAgICBjb25zdCByb3dDb3VudCA9IHJvd3MubGVuZ3RoO1xuICAgIGZvciAobGV0IHJvd0luZGV4ID0gMDsgcm93SW5kZXggPCByb3dDb3VudDsgcm93SW5kZXggKz0gMSkge1xuICAgICAgcm93c1tyb3dJbmRleF0uZm9yRWFjaChjZWxsID0+IHtcbiAgICAgICAgaWYgKCEoJ3Jvd1NwYW4nIGluIGNlbGwpICYmICEoY2VsbCBhcyBfU1RIZWFkZXIpLmhhc1N1YkNvbHVtbnMpIHtcbiAgICAgICAgICAoY2VsbCBhcyBfU1RIZWFkZXIpLnJvd1NwYW4gPSByb3dDb3VudCAtIHJvd0luZGV4O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBoZWFkZXJzOiByb3dzLCBoZWFkZXJXaWR0aHM6IHJvd0NvdW50ID4gMSA/IHdpZHRocyA6IG51bGwgfTtcbiAgfVxuXG4gIHByaXZhdGUgY2xlYW5Db25kKGxpc3Q6IF9TVENvbHVtbltdKTogX1NUQ29sdW1uW10ge1xuICAgIGNvbnN0IHJlczogX1NUQ29sdW1uW10gPSBbXTtcbiAgICBjb25zdCBjb3B5TGlzdCA9IGRlZXBDb3B5KGxpc3QpO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiBjb3B5TGlzdCkge1xuICAgICAgaWYgKHR5cGVvZiBpdGVtLmlpZiA9PT0gJ2Z1bmN0aW9uJyAmJiAhaXRlbS5paWYoaXRlbSkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5hY2wgJiYgaXRlbS5hY2wgJiYgIXRoaXMuYWNsLmNhbihpdGVtLmFjbCkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShpdGVtLmNoaWxkcmVuKSAmJiBpdGVtLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgaXRlbS5jaGlsZHJlbiA9IHRoaXMuY2xlYW5Db25kKGl0ZW0uY2hpbGRyZW4pO1xuICAgICAgfVxuICAgICAgcmVzLnB1c2goaXRlbSk7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBwcml2YXRlIG1lcmdlQ2xhc3MoaXRlbTogX1NUQ29sdW1uKTogdm9pZCB7XG4gICAgY29uc3QgYnVpbHRJbkNsYXNzTmFtZXM6IHN0cmluZ1tdID0gW107XG4gICAgaWYgKGl0ZW0uX2lzVHJ1bmNhdGUpIHtcbiAgICAgIGJ1aWx0SW5DbGFzc05hbWVzLnB1c2goJ3RleHQtdHJ1bmNhdGUnKTtcbiAgICB9XG4gICAgY29uc3QgcmF3Q2xhc3NOYW1lID0gaXRlbS5jbGFzc05hbWU7XG4gICAgaWYgKCFyYXdDbGFzc05hbWUpIHtcbiAgICAgIGNvbnN0IHR5cGVDbGFzcyA9IChcbiAgICAgICAge1xuICAgICAgICAgIG51bWJlcjogJ3RleHQtcmlnaHQnLFxuICAgICAgICAgIGN1cnJlbmN5OiAndGV4dC1yaWdodCcsXG4gICAgICAgICAgZGF0ZTogJ3RleHQtY2VudGVyJ1xuICAgICAgICB9IGFzIE56U2FmZUFueVxuICAgICAgKVtpdGVtLnR5cGUhXTtcbiAgICAgIGlmICh0eXBlQ2xhc3MpIHtcbiAgICAgICAgYnVpbHRJbkNsYXNzTmFtZXMucHVzaCh0eXBlQ2xhc3MpO1xuICAgICAgfVxuICAgICAgaXRlbS5fY2xhc3NOYW1lID0gYnVpbHRJbkNsYXNzTmFtZXM7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcmF3Q2xhc3NOYW1lSXNBcnJheSA9IEFycmF5LmlzQXJyYXkocmF3Q2xhc3NOYW1lKTtcbiAgICBpZiAoIXJhd0NsYXNzTmFtZUlzQXJyYXkgJiYgdHlwZW9mIHJhd0NsYXNzTmFtZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGNvbnN0IG9iakNsYXNzTmFtZXM6IE5nQ2xhc3NJbnRlcmZhY2UgPSByYXdDbGFzc05hbWU7XG4gICAgICBidWlsdEluQ2xhc3NOYW1lcy5mb3JFYWNoKGtleSA9PiAob2JqQ2xhc3NOYW1lc1trZXldID0gdHJ1ZSkpO1xuICAgICAgaXRlbS5fY2xhc3NOYW1lID0gb2JqQ2xhc3NOYW1lcztcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBhcnJheUNsYXNzTmFtZXMgPSByYXdDbGFzc05hbWVJc0FycmF5ID8gQXJyYXkuZnJvbShyYXdDbGFzc05hbWUgYXMgc3RyaW5nW10pIDogW3Jhd0NsYXNzTmFtZV07XG4gICAgYXJyYXlDbGFzc05hbWVzLnNwbGljZSgwLCAwLCAuLi5idWlsdEluQ2xhc3NOYW1lcyk7XG4gICAgaXRlbS5fY2xhc3NOYW1lID0gWy4uLm5ldyBTZXQoYXJyYXlDbGFzc05hbWVzKV0uZmlsdGVyKHcgPT4gISF3KTtcbiAgfVxuXG4gIHByb2Nlc3MoXG4gICAgbGlzdDogU1RDb2x1bW5bXSxcbiAgICBvcHRpb25zOiBTVENvbHVtblNvdXJjZVByb2Nlc3NPcHRpb25zXG4gICk6IHsgY29sdW1uczogX1NUQ29sdW1uW107IGhlYWRlcnM6IF9TVEhlYWRlcltdW107IGhlYWRlcldpZHRoczogc3RyaW5nW10gfCBudWxsIH0ge1xuICAgIGlmICghbGlzdCB8fCBsaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHsgY29sdW1uczogW10sIGhlYWRlcnM6IFtdLCBoZWFkZXJXaWR0aHM6IG51bGwgfTtcbiAgICB9XG4gICAgY29uc3QgeyBub0luZGV4IH0gPSB0aGlzLmNvZztcbiAgICBsZXQgY2hlY2tib3hDb3VudCA9IDA7XG4gICAgbGV0IHJhZGlvQ291bnQgPSAwO1xuICAgIGxldCBwb2ludCA9IDA7XG4gICAgY29uc3QgY29sdW1uczogX1NUQ29sdW1uW10gPSBbXTtcblxuICAgIGNvbnN0IHByb2Nlc3NJdGVtID0gKGl0ZW06IF9TVENvbHVtbik6IF9TVENvbHVtbiA9PiB7XG4gICAgICAvLyBpbmRleFxuICAgICAgaWYgKGl0ZW0uaW5kZXgpIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGl0ZW0uaW5kZXgpKSB7XG4gICAgICAgICAgaXRlbS5pbmRleCA9IGl0ZW0uaW5kZXgudG9TdHJpbmcoKS5zcGxpdCgnLicpO1xuICAgICAgICB9XG4gICAgICAgIGl0ZW0uaW5kZXhLZXkgPSBpdGVtLmluZGV4LmpvaW4oJy4nKTtcbiAgICAgIH1cblxuICAgICAgLy8gI3JlZ2lvbiB0aXRsZVxuXG4gICAgICBjb25zdCB0aXQgPSAodHlwZW9mIGl0ZW0udGl0bGUgPT09ICdzdHJpbmcnID8geyB0ZXh0OiBpdGVtLnRpdGxlIH0gOiBpdGVtLnRpdGxlKSB8fCB7fTtcbiAgICAgIGlmICh0aXQuaTE4biAmJiB0aGlzLmkxOG5TcnYpIHtcbiAgICAgICAgdGl0LnRleHQgPSB0aGlzLmkxOG5TcnYuZmFueWkodGl0LmkxOG4pO1xuICAgICAgfVxuICAgICAgaWYgKHRpdC50ZXh0KSB7XG4gICAgICAgIHRpdC5fdGV4dCA9IHRoaXMuZG9tLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHRpdC50ZXh0KTtcbiAgICAgIH1cbiAgICAgIGl0ZW0udGl0bGUgPSB0aXQ7XG5cbiAgICAgIC8vICNlbmRyZWdpb25cblxuICAgICAgLy8gbm9cbiAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdubycpIHtcbiAgICAgICAgaXRlbS5ub0luZGV4ID0gaXRlbS5ub0luZGV4ID09IG51bGwgPyBub0luZGV4IDogaXRlbS5ub0luZGV4O1xuICAgICAgfVxuICAgICAgLy8gY2hlY2tib3hcbiAgICAgIGlmIChpdGVtLnNlbGVjdGlvbnMgPT0gbnVsbCkge1xuICAgICAgICBpdGVtLnNlbGVjdGlvbnMgPSBbXTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgKytjaGVja2JveENvdW50O1xuICAgICAgICBpZiAoIWl0ZW0ud2lkdGgpIHtcbiAgICAgICAgICBpdGVtLndpZHRoID0gYCR7aXRlbS5zZWxlY3Rpb25zLmxlbmd0aCA+IDAgPyA2MiA6IDUwfXB4YDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuYWNsKSB7XG4gICAgICAgIGl0ZW0uc2VsZWN0aW9ucyA9IGl0ZW0uc2VsZWN0aW9ucy5maWx0ZXIodyA9PiB0aGlzLmFjbC5jYW4ody5hY2whKSk7XG4gICAgICB9XG4gICAgICAvLyByYWRpb1xuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgICArK3JhZGlvQ291bnQ7XG4gICAgICAgIGl0ZW0uc2VsZWN0aW9ucyA9IFtdO1xuICAgICAgICBpZiAoIWl0ZW0ud2lkdGgpIHtcbiAgICAgICAgICBpdGVtLndpZHRoID0gJzUwcHgnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyB0eXBlc1xuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ3luJykge1xuICAgICAgICBpdGVtLnluID0geyB0cnV0aDogdHJ1ZSwgLi4udGhpcy5jb2cueW4sIC4uLml0ZW0ueW4gfTtcbiAgICAgIH1cbiAgICAgIC8vIGRhdGVcbiAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdkYXRlJykge1xuICAgICAgICBpdGVtLmRhdGVGb3JtYXQgPSBpdGVtLmRhdGVGb3JtYXQgfHwgdGhpcy5jb2cuZGF0ZT8uZm9ybWF0O1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICAoaXRlbS50eXBlID09PSAnbGluaycgJiYgdHlwZW9mIGl0ZW0uY2xpY2sgIT09ICdmdW5jdGlvbicpIHx8XG4gICAgICAgIChpdGVtLnR5cGUgPT09ICdiYWRnZScgJiYgaXRlbS5iYWRnZSA9PSBudWxsKSB8fFxuICAgICAgICAoaXRlbS50eXBlID09PSAndGFnJyAmJiBpdGVtLnRhZyA9PSBudWxsKSB8fFxuICAgICAgICAoaXRlbS50eXBlID09PSAnZW51bScgJiYgaXRlbS5lbnVtID09IG51bGwpXG4gICAgICApIHtcbiAgICAgICAgaXRlbS50eXBlID0gJyc7XG4gICAgICB9XG4gICAgICBpdGVtLl9pc1RydW5jYXRlID0gISFpdGVtLndpZHRoICYmIG9wdGlvbnMud2lkdGhNb2RlLnN0cmljdEJlaGF2aW9yID09PSAndHJ1bmNhdGUnICYmIGl0ZW0udHlwZSAhPT0gJ2ltZyc7XG4gICAgICAvLyBjbGFzc05hbWVcbiAgICAgIHRoaXMubWVyZ2VDbGFzcyhpdGVtKTtcbiAgICAgIC8vIHdpZHRoXG4gICAgICBpZiAodHlwZW9mIGl0ZW0ud2lkdGggPT09ICdudW1iZXInKSB7XG4gICAgICAgIGl0ZW0uX3dpZHRoID0gaXRlbS53aWR0aDtcbiAgICAgICAgaXRlbS53aWR0aCA9IGAke2l0ZW0ud2lkdGh9cHhgO1xuICAgICAgfVxuICAgICAgaXRlbS5fbGVmdCA9IGZhbHNlO1xuICAgICAgaXRlbS5fcmlnaHQgPSBmYWxzZTtcbiAgICAgIGl0ZW0uc2FmZVR5cGUgPSBpdGVtLnNhZmVUeXBlID8/IG9wdGlvbnMuc2FmZVR5cGU7XG5cbiAgICAgIC8vIHNvcnRlclxuICAgICAgaXRlbS5fc29ydCA9IHRoaXMuc29ydENvZXJjZShpdGVtKTtcbiAgICAgIC8vIGZpbHRlclxuICAgICAgaXRlbS5maWx0ZXIgPSB0aGlzLmZpbHRlckNvZXJjZShpdGVtKSBhcyBTVENvbHVtbkZpbHRlcjtcbiAgICAgIC8vIGJ1dHRvbnNcbiAgICAgIGl0ZW0uYnV0dG9ucyA9IHRoaXMuYnRuQ29lcmNlKGl0ZW0uYnV0dG9ucyEpO1xuICAgICAgLy8gd2lkZ2V0XG4gICAgICB0aGlzLndpZGdldENvZXJjZShpdGVtKTtcbiAgICAgIC8vIHJlc3RvcmUgY3VzdG9tIHJvd1xuICAgICAgdGhpcy5yZXN0b3JlUmVuZGVyKGl0ZW0pO1xuICAgICAgLy8gcmVzaXphYmxlXG4gICAgICBpdGVtLnJlc2l6YWJsZSA9IHtcbiAgICAgICAgZGlzYWJsZWQ6IHRydWUsXG4gICAgICAgIGJvdW5kczogJ3dpbmRvdycsXG4gICAgICAgIG1pbldpZHRoOiA2MCxcbiAgICAgICAgbWF4V2lkdGg6IDM2MCxcbiAgICAgICAgcHJldmlldzogdHJ1ZSxcbiAgICAgICAgLi4ub3B0aW9ucy5yZXNpemFibGUsXG4gICAgICAgIC4uLih0eXBlb2YgaXRlbS5yZXNpemFibGUgPT09ICdib29sZWFuJyA/ICh7IGRpc2FibGVkOiAhaXRlbS5yZXNpemFibGUgfSBhcyBTVFJlc2l6YWJsZSkgOiBpdGVtLnJlc2l6YWJsZSlcbiAgICAgIH07XG5cbiAgICAgIGl0ZW0uX19wb2ludCA9IHBvaW50Kys7XG5cbiAgICAgIHJldHVybiBpdGVtO1xuICAgIH07XG5cbiAgICBjb25zdCBwcm9jZXNzTGlzdCA9IChkYXRhOiBfU1RDb2x1bW5bXSk6IHZvaWQgPT4ge1xuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgY29sdW1ucy5wdXNoKHByb2Nlc3NJdGVtKGl0ZW0pKTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbS5jaGlsZHJlbikpIHtcbiAgICAgICAgICBwcm9jZXNzTGlzdChpdGVtLmNoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBjb3B5TGlzdCA9IHRoaXMuY2xlYW5Db25kKGxpc3QgYXMgX1NUQ29sdW1uW10pO1xuICAgIHByb2Nlc3NMaXN0KGNvcHlMaXN0KTtcblxuICAgIGlmIChjaGVja2JveENvdW50ID4gMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBbc3RdOiBqdXN0IG9ubHkgb25lIGNvbHVtbiBjaGVja2JveGApO1xuICAgIH1cbiAgICBpZiAocmFkaW9Db3VudCA+IDEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgW3N0XToganVzdCBvbmx5IG9uZSBjb2x1bW4gcmFkaW9gKTtcbiAgICB9XG5cbiAgICB0aGlzLmZpeGVkQ29lcmNlKGNvbHVtbnMgYXMgX1NUQ29sdW1uW10pO1xuICAgIHJldHVybiB7XG4gICAgICBjb2x1bW5zOiBjb2x1bW5zLmZpbHRlcih3ID0+ICFBcnJheS5pc0FycmF5KHcuY2hpbGRyZW4pIHx8IHcuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSxcbiAgICAgIC4uLnRoaXMuZ2VuSGVhZGVycyhjb3B5TGlzdClcbiAgICB9O1xuICB9XG5cbiAgcmVzdG9yZUFsbFJlbmRlcihjb2x1bW5zOiBfU1RDb2x1bW5bXSk6IHZvaWQge1xuICAgIGNvbHVtbnMuZm9yRWFjaChpID0+IHRoaXMucmVzdG9yZVJlbmRlcihpKSk7XG4gIH1cblxuICB1cGRhdGVEZWZhdWx0KGZpbHRlcjogU1RDb2x1bW5GaWx0ZXIpOiB0aGlzIHtcbiAgICBpZiAoZmlsdGVyLm1lbnVzID09IG51bGwpIHJldHVybiB0aGlzO1xuXG4gICAgaWYgKGZpbHRlci50eXBlID09PSAnZGVmYXVsdCcpIHtcbiAgICAgIGZpbHRlci5kZWZhdWx0ID0gZmlsdGVyLm1lbnVzIS5maW5kSW5kZXgodyA9PiB3LmNoZWNrZWQhKSAhPT0gLTE7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpbHRlci5kZWZhdWx0ID0gISFmaWx0ZXIubWVudXMhWzBdLnZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNsZWFuRmlsdGVyKGNvbDogX1NUQ29sdW1uKTogdGhpcyB7XG4gICAgY29uc3QgZiA9IGNvbC5maWx0ZXIhO1xuICAgIGYuZGVmYXVsdCA9IGZhbHNlO1xuICAgIGlmIChmLnR5cGUgPT09ICdkZWZhdWx0Jykge1xuICAgICAgZi5tZW51cyEuZm9yRWFjaChpID0+IChpLmNoZWNrZWQgPSBmYWxzZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmLm1lbnVzIVswXS52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cbiJdfQ==