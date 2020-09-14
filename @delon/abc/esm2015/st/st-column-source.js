/**
 * @fileoverview added by tsickle
 * Generated from: st-column-source.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Host, Inject, Injectable, Optional } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ACLService } from '@delon/acl';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { deepCopy, warn } from '@delon/util';
import { STRowSource } from './st-row.directive';
import { STWidgetRegistry } from './st-widget';
export class STColumnSource {
    /**
     * @param {?} dom
     * @param {?} rowSource
     * @param {?} acl
     * @param {?} i18nSrv
     * @param {?} stWidgetRegistry
     */
    constructor(dom, rowSource, acl, i18nSrv, stWidgetRegistry) {
        this.dom = dom;
        this.rowSource = rowSource;
        this.acl = acl;
        this.i18nSrv = i18nSrv;
        this.stWidgetRegistry = stWidgetRegistry;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    setCog(val) {
        this.cog = val;
    }
    /**
     * @private
     * @param {?} i
     * @param {?} def
     * @return {?}
     */
    fixPop(i, def) {
        if (i.pop == null || i.pop === false) {
            i.pop = false;
            return;
        }
        /** @type {?} */
        let pop = Object.assign({}, def);
        if (typeof i.pop === 'string') {
            pop.title = i.pop;
        }
        else if (typeof i.pop === 'object') {
            pop = Object.assign(Object.assign({}, pop), i.pop);
        }
        if (typeof pop.condition !== 'function') {
            pop.condition = (/**
             * @return {?}
             */
            () => false);
        }
        i.pop = pop;
    }
    /**
     * @private
     * @param {?} list
     * @return {?}
     */
    btnCoerce(list) {
        if (!list)
            return [];
        /** @type {?} */
        const ret = [];
        const { modal, drawer, pop, btnIcon } = this.cog;
        for (const item of list) {
            if (this.acl && item.acl && !this.acl.can(item.acl)) {
                continue;
            }
            if (item.type === 'modal' || item.type === 'static') {
                if (item.modal == null || item.modal.component == null) {
                    console.warn(`[st] Should specify modal parameter`);
                    item.type = 'none';
                }
                else {
                    item.modal = Object.assign(Object.assign({ paramsName: 'record', size: 'lg' }, modal), item.modal);
                }
            }
            if (item.type === 'drawer') {
                if (item.drawer == null || item.drawer.component == null) {
                    console.warn(`[st] Should specify drawer parameter`);
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
            this.fixPop(item, (/** @type {?} */ (pop)));
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
    /**
     * @private
     * @param {?} list
     * @return {?}
     */
    btnCoerceIf(list) {
        for (const item of list) {
            if (!item.iif)
                item.iif = (/**
                 * @return {?}
                 */
                () => true);
            item.iifBehavior = item.iifBehavior || this.cog.iifBehavior;
            if (item.children && item.children.length > 0) {
                this.btnCoerceIf(item.children);
            }
            else {
                item.children = [];
            }
        }
    }
    /**
     * @private
     * @param {?} list
     * @return {?}
     */
    fixedCoerce(list) {
        /** @type {?} */
        const countReduce = (/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => a + +(/** @type {?} */ (b.width)).toString().replace('px', ''));
        // left width
        list
            .filter((/**
         * @param {?} w
         * @return {?}
         */
        w => w.fixed && w.fixed === 'left' && w.width))
            .forEach((/**
         * @param {?} item
         * @param {?} idx
         * @return {?}
         */
        (item, idx) => (item._left = list.slice(0, idx).reduce(countReduce, 0) + 'px')));
        // right width
        list
            .filter((/**
         * @param {?} w
         * @return {?}
         */
        w => w.fixed && w.fixed === 'right' && w.width))
            .reverse()
            .forEach((/**
         * @param {?} item
         * @param {?} idx
         * @return {?}
         */
        (item, idx) => (item._right = (idx > 0 ? list.slice(-idx).reduce(countReduce, 0) : 0) + 'px')));
    }
    /**
     * @private
     * @param {?} item
     * @return {?}
     */
    sortCoerce(item) {
        /** @type {?} */
        const res = this.fixSortCoerce(item);
        res.reName = Object.assign(Object.assign({}, this.cog.sortReName), res.reName);
        return res;
    }
    /**
     * @private
     * @param {?} item
     * @return {?}
     */
    fixSortCoerce(item) {
        if (typeof item.sort === 'undefined') {
            return { enabled: false };
        }
        /** @type {?} */
        let res = {};
        if (typeof item.sort === 'string') {
            res.key = item.sort;
        }
        else if (typeof item.sort !== 'boolean') {
            res = item.sort;
        }
        else if (typeof item.sort === 'boolean') {
            res.compare = (/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            (a, b) => a[(/** @type {?} */ (item.indexKey))] - b[(/** @type {?} */ (item.indexKey))]);
        }
        if (!res.key) {
            res.key = item.indexKey;
        }
        res.enabled = true;
        return res;
    }
    /**
     * @private
     * @param {?} item
     * @return {?}
     */
    filterCoerce(item) {
        if (item.filter == null) {
            return null;
        }
        /** @type {?} */
        let res = item.filter;
        res.type = res.type || 'default';
        /** @type {?} */
        let icon = 'filter';
        /** @type {?} */
        let iconTheme = 'fill';
        if (res.type === 'keyword') {
            if (res.menus == null || (/** @type {?} */ (res.menus)).length === 0) {
                res.menus = [{ value: '' }];
            }
            icon = 'search';
            iconTheme = 'outline';
        }
        if ((/** @type {?} */ (res.menus)).length === 0) {
            return null;
        }
        if (typeof res.multiple === 'undefined') {
            res.multiple = true;
        }
        res.confirmText = res.confirmText || this.cog.filterConfirmText;
        res.clearText = res.clearText || this.cog.filterClearText;
        res.key = res.key || item.indexKey;
        res.icon = res.icon || icon;
        /** @type {?} */
        const baseIcon = (/** @type {?} */ ({ type: icon, theme: iconTheme }));
        if (typeof res.icon === 'string') {
            res.icon = (/** @type {?} */ (Object.assign(Object.assign({}, baseIcon), { type: res.icon })));
        }
        else {
            res.icon = Object.assign(Object.assign({}, baseIcon), res.icon);
        }
        this.updateDefault(res);
        if (this.acl) {
            res.menus = (/** @type {?} */ (res.menus)).filter((/**
             * @param {?} w
             * @return {?}
             */
            w => this.acl.can(w.acl)));
        }
        if ((/** @type {?} */ (res.menus)).length <= 0) {
            res = null;
        }
        return res;
    }
    /**
     * @private
     * @param {?} item
     * @return {?}
     */
    restoreRender(item) {
        if (item.renderTitle) {
            item.__renderTitle = this.rowSource.getTitle(item.renderTitle);
        }
        if (item.render) {
            item.__render = this.rowSource.getRow(item.render);
        }
    }
    /**
     * @private
     * @param {?} item
     * @return {?}
     */
    widgetCoerce(item) {
        var _a;
        if (item.type !== 'widget')
            return;
        if (item.widget == null || !this.stWidgetRegistry.has(item.widget.type)) {
            delete item.type;
            warn(`st: No widget for type "${(_a = item.widget) === null || _a === void 0 ? void 0 : _a.type}"`);
        }
    }
    /**
     * @private
     * @param {?} rootColumns
     * @return {?}
     */
    genHeaders(rootColumns) {
        /** @type {?} */
        const rows = [];
        /** @type {?} */
        const widths = [];
        /** @type {?} */
        const fillRowCells = (/**
         * @param {?} columns
         * @param {?} colIndex
         * @param {?=} rowIndex
         * @return {?}
         */
        (columns, colIndex, rowIndex = 0) => {
            // Init rows
            rows[rowIndex] = rows[rowIndex] || [];
            /** @type {?} */
            let currentColIndex = colIndex;
            /** @type {?} */
            const colSpans = columns.map((/**
             * @param {?} column
             * @return {?}
             */
            column => {
                /** @type {?} */
                const cell = {
                    column,
                    colStart: currentColIndex,
                    hasSubColumns: false,
                };
                /** @type {?} */
                let colSpan = 1;
                /** @type {?} */
                const subColumns = column.children;
                if (Array.isArray(subColumns) && subColumns.length > 0) {
                    colSpan = fillRowCells(subColumns, currentColIndex, rowIndex + 1).reduce((/**
                     * @param {?} total
                     * @param {?} count
                     * @return {?}
                     */
                    (total, count) => total + count), 0);
                    cell.hasSubColumns = true;
                }
                else {
                    widths.push(((/** @type {?} */ (cell.column.width))) || '');
                }
                if ('colSpan' in column) {
                    colSpan = (/** @type {?} */ (column.colSpan));
                }
                if ('rowSpan' in column) {
                    cell.rowSpan = column.rowSpan;
                }
                cell.colSpan = colSpan;
                cell.colEnd = cell.colStart + colSpan - 1;
                rows[rowIndex].push((/** @type {?} */ (cell)));
                currentColIndex += colSpan;
                return colSpan;
            }));
            return colSpans;
        });
        fillRowCells(rootColumns, 0);
        // Handle `rowSpan`
        /** @type {?} */
        const rowCount = rows.length;
        for (let rowIndex = 0; rowIndex < rowCount; rowIndex += 1) {
            rows[rowIndex].forEach((/**
             * @param {?} cell
             * @return {?}
             */
            cell => {
                if (!('rowSpan' in cell) && !cell.hasSubColumns) {
                    cell.rowSpan = rowCount - rowIndex;
                }
            }));
        }
        return { headers: rows, headerWidths: rowCount > 1 ? widths : null };
    }
    /**
     * @private
     * @param {?} list
     * @return {?}
     */
    cleanCond(list) {
        /** @type {?} */
        const res = [];
        /** @type {?} */
        const copyList = deepCopy(list);
        for (const item of copyList) {
            if (item.iif && !item.iif(item)) {
                continue;
            }
            if (this.acl && item.acl && !this.acl.can(item.acl)) {
                continue;
            }
            res.push(item);
        }
        return res;
    }
    /**
     * @param {?} list
     * @param {?} widthMode
     * @param {?} resizable
     * @return {?}
     */
    process(list, widthMode, resizable) {
        if (!list || list.length === 0)
            throw new Error(`[st]: the columns property muse be define!`);
        const { noIndex } = this.cog;
        /** @type {?} */
        let checkboxCount = 0;
        /** @type {?} */
        let radioCount = 0;
        /** @type {?} */
        let point = 0;
        /** @type {?} */
        const columns = [];
        /** @type {?} */
        const processItem = (/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            // index
            if (item.index) {
                if (!Array.isArray(item.index)) {
                    item.index = item.index.split('.');
                }
                item.indexKey = item.index.join('.');
            }
            // #region title
            /** @type {?} */
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
                item.selections = item.selections.filter((/**
                 * @param {?} w
                 * @return {?}
                 */
                w => this.acl.can(w.acl)));
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
                item.yn = Object.assign({ truth: true }, item.yn);
            }
            if ((item.type === 'link' && typeof item.click !== 'function') ||
                (item.type === 'badge' && item.badge == null) ||
                (item.type === 'tag' && item.tag == null) ||
                (item.type === 'enum' && item.enum == null)) {
                item.type = '';
            }
            item._isTruncate = !!item.width && widthMode.strictBehavior === 'truncate' && item.type !== 'img';
            // className
            if (!item.className) {
                item.className = ((/** @type {?} */ ({
                    number: 'text-right',
                    currency: 'text-right',
                    date: 'text-center',
                })))[(/** @type {?} */ (item.type))];
            }
            item._className = item.className || (item._isTruncate ? 'text-truncate' : null);
            // width
            if (typeof item.width === 'number') {
                item.width = `${item.width}px`;
            }
            // sorter
            item._sort = this.sortCoerce(item);
            // filter
            item.filter = (/** @type {?} */ (this.filterCoerce(item)));
            // buttons
            item.buttons = this.btnCoerce((/** @type {?} */ (item.buttons)));
            // widget
            this.widgetCoerce(item);
            // restore custom row
            this.restoreRender(item);
            // resizable
            item.resizable = Object.assign(Object.assign({ disabled: true, bounds: 'window', minWidth: 60, maxWidth: 360, preview: true }, resizable), (typeof item.resizable === 'boolean' ? ((/** @type {?} */ ({ disabled: !item.resizable }))) : item.resizable));
            item.__point = point++;
            return item;
        });
        /** @type {?} */
        const processList = (/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            for (const item of data) {
                columns.push(processItem(item));
                if (Array.isArray(item.children)) {
                    processList(item.children);
                }
            }
        });
        /** @type {?} */
        const copyList = this.cleanCond((/** @type {?} */ (list)));
        processList(copyList);
        if (checkboxCount > 1) {
            throw new Error(`[st]: just only one column checkbox`);
        }
        if (radioCount > 1) {
            throw new Error(`[st]: just only one column radio`);
        }
        this.fixedCoerce((/** @type {?} */ (columns)));
        return Object.assign({ columns: columns.filter((/**
             * @param {?} w
             * @return {?}
             */
            w => !Array.isArray(w.children) || w.children.length === 0)) }, this.genHeaders(copyList));
    }
    /**
     * @param {?} columns
     * @return {?}
     */
    restoreAllRender(columns) {
        columns.forEach((/**
         * @param {?} i
         * @return {?}
         */
        i => this.restoreRender(i)));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} filter
     * @return {THIS}
     */
    updateDefault(filter) {
        if (filter.type === 'default') {
            filter.default = (/** @type {?} */ (filter.menus)).findIndex((/**
             * @param {?} w
             * @return {?}
             */
            w => (/** @type {?} */ (w.checked)))) !== -1;
        }
        else {
            filter.default = !!(/** @type {?} */ (filter.menus))[0].value;
        }
        return (/** @type {?} */ (this));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} col
     * @return {THIS}
     */
    cleanFilter(col) {
        /** @type {?} */
        const f = (/** @type {?} */ (col.filter));
        f.default = false;
        if (f.type === 'default') {
            (/** @type {?} */ (f.menus)).forEach((/**
             * @param {?} i
             * @return {?}
             */
            i => (i.checked = false)));
        }
        else {
            (/** @type {?} */ (f.menus))[0].value = undefined;
        }
        return (/** @type {?} */ (this));
    }
}
STColumnSource.decorators = [
    { type: Injectable }
];
/** @nocollapse */
STColumnSource.ctorParameters = () => [
    { type: DomSanitizer },
    { type: STRowSource, decorators: [{ type: Host }] },
    { type: ACLService, decorators: [{ type: Optional }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [ALAIN_I18N_TOKEN,] }] },
    { type: STWidgetRegistry }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    STColumnSource.prototype.cog;
    /**
     * @type {?}
     * @private
     */
    STColumnSource.prototype.dom;
    /**
     * @type {?}
     * @private
     */
    STColumnSource.prototype.rowSource;
    /**
     * @type {?}
     * @private
     */
    STColumnSource.prototype.acl;
    /**
     * @type {?}
     * @private
     */
    STColumnSource.prototype.i18nSrv;
    /**
     * @type {?}
     * @private
     */
    STColumnSource.prototype.stWidgetRegistry;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtY29sdW1uLXNvdXJjZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9zdC9zdC1jb2x1bW4tc291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUN4QyxPQUFPLEVBQW9CLGdCQUFnQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ2xFLE9BQU8sRUFBaUIsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU1RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDakQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBZS9DLE1BQU0sT0FBTyxjQUFjOzs7Ozs7OztJQUd6QixZQUNVLEdBQWlCLEVBQ1QsU0FBc0IsRUFDbEIsR0FBZSxFQUNXLE9BQXlCLEVBQy9ELGdCQUFrQztRQUpsQyxRQUFHLEdBQUgsR0FBRyxDQUFjO1FBQ1QsY0FBUyxHQUFULFNBQVMsQ0FBYTtRQUNsQixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQ1csWUFBTyxHQUFQLE9BQU8sQ0FBa0I7UUFDL0QscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUN6QyxDQUFDOzs7OztJQUVKLE1BQU0sQ0FBQyxHQUFrQjtRQUN2QixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNqQixDQUFDOzs7Ozs7O0lBRU8sTUFBTSxDQUFDLENBQWlCLEVBQUUsR0FBc0I7UUFDdEQsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLEtBQUss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QU0sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLG1CQUFBLE1BQU0sQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7U0FDM0M7UUFDRCxPQUFPLG1CQUFBLElBQUksRUFBQSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7OztJQUVELFdBQVcsQ0FBQyxHQUFjOztjQUNsQixDQUFDLEdBQUcsbUJBQUEsR0FBRyxDQUFDLE1BQU0sRUFBQztRQUNyQixDQUFDLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNsQixJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQ3hCLG1CQUFBLENBQUMsQ0FBQyxLQUFLLEVBQUMsQ0FBQyxPQUFPOzs7O1lBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLEVBQUMsQ0FBQztTQUM1QzthQUFNO1lBQ0wsbUJBQUEsQ0FBQyxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7U0FDL0I7UUFDRCxPQUFPLG1CQUFBLElBQUksRUFBQSxDQUFDO0lBQ2QsQ0FBQzs7O1lBdmNGLFVBQVU7Ozs7WUFwQkYsWUFBWTtZQUtaLFdBQVcsdUJBcUJmLElBQUk7WUF6QkEsVUFBVSx1QkEwQmQsUUFBUTs0Q0FDUixRQUFRLFlBQUksTUFBTSxTQUFDLGdCQUFnQjtZQXRCL0IsZ0JBQWdCOzs7Ozs7O0lBZ0J2Qiw2QkFBMkI7Ozs7O0lBR3pCLDZCQUF5Qjs7Ozs7SUFDekIsbUNBQXNDOzs7OztJQUN0Qyw2QkFBbUM7Ozs7O0lBQ25DLGlDQUF1RTs7Ozs7SUFDdkUsMENBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSG9zdCwgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBBQ0xTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL2FjbCc7XG5pbXBvcnQgeyBBbGFpbkkxOE5TZXJ2aWNlLCBBTEFJTl9JMThOX1RPS0VOIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IEFsYWluU1RDb25maWcsIGRlZXBDb3B5LCB3YXJuIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IFNUUm93U291cmNlIH0gZnJvbSAnLi9zdC1yb3cuZGlyZWN0aXZlJztcbmltcG9ydCB7IFNUV2lkZ2V0UmVnaXN0cnkgfSBmcm9tICcuL3N0LXdpZGdldCc7XG5pbXBvcnQge1xuICBTVENvbHVtbixcbiAgU1RDb2x1bW5CdXR0b24sXG4gIFNUQ29sdW1uQnV0dG9uUG9wLFxuICBTVENvbHVtbkZpbHRlcixcbiAgU1RDb2x1bW5Hcm91cFR5cGUsXG4gIFNUSWNvbixcbiAgU1RSZXNpemFibGUsXG4gIFNUU29ydE1hcCxcbiAgU1RXaWR0aE1vZGUsXG59IGZyb20gJy4vc3QuaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBfU1RDb2x1bW4gfSBmcm9tICcuL3N0LnR5cGVzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNUQ29sdW1uU291cmNlIHtcbiAgcHJpdmF0ZSBjb2c6IEFsYWluU1RDb25maWc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBkb206IERvbVNhbml0aXplcixcbiAgICBASG9zdCgpIHByaXZhdGUgcm93U291cmNlOiBTVFJvd1NvdXJjZSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGFjbDogQUNMU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KEFMQUlOX0kxOE5fVE9LRU4pIHByaXZhdGUgaTE4blNydjogQWxhaW5JMThOU2VydmljZSxcbiAgICBwcml2YXRlIHN0V2lkZ2V0UmVnaXN0cnk6IFNUV2lkZ2V0UmVnaXN0cnksXG4gICkge31cblxuICBzZXRDb2codmFsOiBBbGFpblNUQ29uZmlnKTogdm9pZCB7XG4gICAgdGhpcy5jb2cgPSB2YWw7XG4gIH1cblxuICBwcml2YXRlIGZpeFBvcChpOiBTVENvbHVtbkJ1dHRvbiwgZGVmOiBTVENvbHVtbkJ1dHRvblBvcCk6IHZvaWQge1xuICAgIGlmIChpLnBvcCA9PSBudWxsIHx8IGkucG9wID09PSBmYWxzZSkge1xuICAgICAgaS5wb3AgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgcG9wID0ge1xuICAgICAgLi4uZGVmLFxuICAgIH07XG4gICAgaWYgKHR5cGVvZiBpLnBvcCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHBvcC50aXRsZSA9IGkucG9wO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGkucG9wID09PSAnb2JqZWN0Jykge1xuICAgICAgcG9wID0ge1xuICAgICAgICAuLi5wb3AsXG4gICAgICAgIC4uLmkucG9wLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHBvcC5jb25kaXRpb24gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHBvcC5jb25kaXRpb24gPSAoKSA9PiBmYWxzZTtcbiAgICB9XG5cbiAgICBpLnBvcCA9IHBvcDtcbiAgfVxuXG4gIHByaXZhdGUgYnRuQ29lcmNlKGxpc3Q6IFNUQ29sdW1uQnV0dG9uW10pOiBTVENvbHVtbkJ1dHRvbltdIHtcbiAgICBpZiAoIWxpc3QpIHJldHVybiBbXTtcbiAgICBjb25zdCByZXQ6IFNUQ29sdW1uQnV0dG9uW10gPSBbXTtcbiAgICBjb25zdCB7IG1vZGFsLCBkcmF3ZXIsIHBvcCwgYnRuSWNvbiB9ID0gdGhpcy5jb2c7XG5cbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgbGlzdCkge1xuICAgICAgaWYgKHRoaXMuYWNsICYmIGl0ZW0uYWNsICYmICF0aGlzLmFjbC5jYW4oaXRlbS5hY2wpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbS50eXBlID09PSAnbW9kYWwnIHx8IGl0ZW0udHlwZSA9PT0gJ3N0YXRpYycpIHtcbiAgICAgICAgaWYgKGl0ZW0ubW9kYWwgPT0gbnVsbCB8fCBpdGVtLm1vZGFsLmNvbXBvbmVudCA9PSBudWxsKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGBbc3RdIFNob3VsZCBzcGVjaWZ5IG1vZGFsIHBhcmFtZXRlcmApO1xuICAgICAgICAgIGl0ZW0udHlwZSA9ICdub25lJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtLm1vZGFsID0geyAuLi57IHBhcmFtc05hbWU6ICdyZWNvcmQnLCBzaXplOiAnbGcnIH0sIC4uLm1vZGFsLCAuLi5pdGVtLm1vZGFsIH07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ2RyYXdlcicpIHtcbiAgICAgICAgaWYgKGl0ZW0uZHJhd2VyID09IG51bGwgfHwgaXRlbS5kcmF3ZXIuY29tcG9uZW50ID09IG51bGwpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oYFtzdF0gU2hvdWxkIHNwZWNpZnkgZHJhd2VyIHBhcmFtZXRlcmApO1xuICAgICAgICAgIGl0ZW0udHlwZSA9ICdub25lJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtLmRyYXdlciA9IHsgLi4ueyBwYXJhbXNOYW1lOiAncmVjb3JkJywgc2l6ZTogJ2xnJyB9LCAuLi5kcmF3ZXIsIC4uLml0ZW0uZHJhd2VyIH07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ2RlbCcgJiYgdHlwZW9mIGl0ZW0ucG9wID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBpdGVtLnBvcCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIC8vIHBvcFxuICAgICAgdGhpcy5maXhQb3AoaXRlbSwgcG9wISk7XG5cbiAgICAgIGlmIChpdGVtLmljb24pIHtcbiAgICAgICAgaXRlbS5pY29uID0ge1xuICAgICAgICAgIC4uLmJ0bkljb24sXG4gICAgICAgICAgLi4uKHR5cGVvZiBpdGVtLmljb24gPT09ICdzdHJpbmcnID8geyB0eXBlOiBpdGVtLmljb24gfSA6IGl0ZW0uaWNvbiksXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGl0ZW0uY2hpbGRyZW4gPSBpdGVtLmNoaWxkcmVuICYmIGl0ZW0uY2hpbGRyZW4ubGVuZ3RoID4gMCA/IHRoaXMuYnRuQ29lcmNlKGl0ZW0uY2hpbGRyZW4pIDogW107XG5cbiAgICAgIC8vIGkxOG5cbiAgICAgIGlmIChpdGVtLmkxOG4gJiYgdGhpcy5pMThuU3J2KSB7XG4gICAgICAgIGl0ZW0udGV4dCA9IHRoaXMuaTE4blNydi5mYW55aShpdGVtLmkxOG4pO1xuICAgICAgfVxuXG4gICAgICByZXQucHVzaChpdGVtKTtcbiAgICB9XG4gICAgdGhpcy5idG5Db2VyY2VJZihyZXQpO1xuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBwcml2YXRlIGJ0bkNvZXJjZUlmKGxpc3Q6IFNUQ29sdW1uQnV0dG9uW10pOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgbGlzdCkge1xuICAgICAgaWYgKCFpdGVtLmlpZikgaXRlbS5paWYgPSAoKSA9PiB0cnVlO1xuICAgICAgaXRlbS5paWZCZWhhdmlvciA9IGl0ZW0uaWlmQmVoYXZpb3IgfHwgdGhpcy5jb2cuaWlmQmVoYXZpb3I7XG4gICAgICBpZiAoaXRlbS5jaGlsZHJlbiAmJiBpdGVtLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5idG5Db2VyY2VJZihpdGVtLmNoaWxkcmVuKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGl0ZW0uY2hpbGRyZW4gPSBbXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGZpeGVkQ29lcmNlKGxpc3Q6IF9TVENvbHVtbltdKTogdm9pZCB7XG4gICAgY29uc3QgY291bnRSZWR1Y2UgPSAoYTogbnVtYmVyLCBiOiBfU1RDb2x1bW4pID0+IGEgKyArYi53aWR0aCEudG9TdHJpbmcoKS5yZXBsYWNlKCdweCcsICcnKTtcbiAgICAvLyBsZWZ0IHdpZHRoXG4gICAgbGlzdFxuICAgICAgLmZpbHRlcih3ID0+IHcuZml4ZWQgJiYgdy5maXhlZCA9PT0gJ2xlZnQnICYmIHcud2lkdGgpXG4gICAgICAuZm9yRWFjaCgoaXRlbSwgaWR4KSA9PiAoaXRlbS5fbGVmdCA9IGxpc3Quc2xpY2UoMCwgaWR4KS5yZWR1Y2UoY291bnRSZWR1Y2UsIDApICsgJ3B4JykpO1xuICAgIC8vIHJpZ2h0IHdpZHRoXG4gICAgbGlzdFxuICAgICAgLmZpbHRlcih3ID0+IHcuZml4ZWQgJiYgdy5maXhlZCA9PT0gJ3JpZ2h0JyAmJiB3LndpZHRoKVxuICAgICAgLnJldmVyc2UoKVxuICAgICAgLmZvckVhY2goKGl0ZW0sIGlkeCkgPT4gKGl0ZW0uX3JpZ2h0ID0gKGlkeCA+IDAgPyBsaXN0LnNsaWNlKC1pZHgpLnJlZHVjZShjb3VudFJlZHVjZSwgMCkgOiAwKSArICdweCcpKTtcbiAgfVxuXG4gIHByaXZhdGUgc29ydENvZXJjZShpdGVtOiBfU1RDb2x1bW4pOiBTVFNvcnRNYXAge1xuICAgIGNvbnN0IHJlcyA9IHRoaXMuZml4U29ydENvZXJjZShpdGVtKTtcbiAgICByZXMucmVOYW1lID0ge1xuICAgICAgLi4udGhpcy5jb2cuc29ydFJlTmFtZSxcbiAgICAgIC4uLnJlcy5yZU5hbWUsXG4gICAgfTtcbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgcHJpdmF0ZSBmaXhTb3J0Q29lcmNlKGl0ZW06IF9TVENvbHVtbik6IFNUU29ydE1hcCB7XG4gICAgaWYgKHR5cGVvZiBpdGVtLnNvcnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4geyBlbmFibGVkOiBmYWxzZSB9O1xuICAgIH1cblxuICAgIGxldCByZXM6IFNUU29ydE1hcCA9IHt9O1xuXG4gICAgaWYgKHR5cGVvZiBpdGVtLnNvcnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXMua2V5ID0gaXRlbS5zb3J0O1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGl0ZW0uc29ydCAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICByZXMgPSBpdGVtLnNvcnQ7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgaXRlbS5zb3J0ID09PSAnYm9vbGVhbicpIHtcbiAgICAgIHJlcy5jb21wYXJlID0gKGEsIGIpID0+IGFbaXRlbS5pbmRleEtleSFdIC0gYltpdGVtLmluZGV4S2V5IV07XG4gICAgfVxuXG4gICAgaWYgKCFyZXMua2V5KSB7XG4gICAgICByZXMua2V5ID0gaXRlbS5pbmRleEtleTtcbiAgICB9XG5cbiAgICByZXMuZW5hYmxlZCA9IHRydWU7XG5cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgcHJpdmF0ZSBmaWx0ZXJDb2VyY2UoaXRlbTogX1NUQ29sdW1uKTogU1RDb2x1bW5GaWx0ZXIgfCBudWxsIHtcbiAgICBpZiAoaXRlbS5maWx0ZXIgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgbGV0IHJlczogU1RDb2x1bW5GaWx0ZXIgfCBudWxsID0gaXRlbS5maWx0ZXI7XG4gICAgcmVzLnR5cGUgPSByZXMudHlwZSB8fCAnZGVmYXVsdCc7XG5cbiAgICBsZXQgaWNvbiA9ICdmaWx0ZXInO1xuICAgIGxldCBpY29uVGhlbWUgPSAnZmlsbCc7XG4gICAgaWYgKHJlcy50eXBlID09PSAna2V5d29yZCcpIHtcbiAgICAgIGlmIChyZXMubWVudXMgPT0gbnVsbCB8fCByZXMubWVudXMhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXMubWVudXMgPSBbeyB2YWx1ZTogJycgfV07XG4gICAgICB9XG4gICAgICBpY29uID0gJ3NlYXJjaCc7XG4gICAgICBpY29uVGhlbWUgPSAnb3V0bGluZSc7XG4gICAgfVxuXG4gICAgaWYgKHJlcy5tZW51cyEubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHJlcy5tdWx0aXBsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJlcy5tdWx0aXBsZSA9IHRydWU7XG4gICAgfVxuXG4gICAgcmVzLmNvbmZpcm1UZXh0ID0gcmVzLmNvbmZpcm1UZXh0IHx8IHRoaXMuY29nLmZpbHRlckNvbmZpcm1UZXh0O1xuICAgIHJlcy5jbGVhclRleHQgPSByZXMuY2xlYXJUZXh0IHx8IHRoaXMuY29nLmZpbHRlckNsZWFyVGV4dDtcbiAgICByZXMua2V5ID0gcmVzLmtleSB8fCBpdGVtLmluZGV4S2V5O1xuICAgIHJlcy5pY29uID0gcmVzLmljb24gfHwgaWNvbjtcblxuICAgIGNvbnN0IGJhc2VJY29uID0geyB0eXBlOiBpY29uLCB0aGVtZTogaWNvblRoZW1lIH0gYXMgU1RJY29uO1xuICAgIGlmICh0eXBlb2YgcmVzLmljb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXMuaWNvbiA9IHsgLi4uYmFzZUljb24sIHR5cGU6IHJlcy5pY29uIH0gYXMgU1RJY29uO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXMuaWNvbiA9IHsgLi4uYmFzZUljb24sIC4uLnJlcy5pY29uIH07XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVEZWZhdWx0KHJlcyk7XG5cbiAgICBpZiAodGhpcy5hY2wpIHtcbiAgICAgIHJlcy5tZW51cyA9IHJlcy5tZW51cyEuZmlsdGVyKHcgPT4gdGhpcy5hY2wuY2FuKHcuYWNsKSk7XG4gICAgfVxuXG4gICAgaWYgKHJlcy5tZW51cyEubGVuZ3RoIDw9IDApIHtcbiAgICAgIHJlcyA9IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIHByaXZhdGUgcmVzdG9yZVJlbmRlcihpdGVtOiBfU1RDb2x1bW4pOiB2b2lkIHtcbiAgICBpZiAoaXRlbS5yZW5kZXJUaXRsZSkge1xuICAgICAgaXRlbS5fX3JlbmRlclRpdGxlID0gdGhpcy5yb3dTb3VyY2UuZ2V0VGl0bGUoaXRlbS5yZW5kZXJUaXRsZSk7XG4gICAgfVxuICAgIGlmIChpdGVtLnJlbmRlcikge1xuICAgICAgaXRlbS5fX3JlbmRlciA9IHRoaXMucm93U291cmNlLmdldFJvdyhpdGVtLnJlbmRlcik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB3aWRnZXRDb2VyY2UoaXRlbTogX1NUQ29sdW1uKTogdm9pZCB7XG4gICAgaWYgKGl0ZW0udHlwZSAhPT0gJ3dpZGdldCcpIHJldHVybjtcbiAgICBpZiAoaXRlbS53aWRnZXQgPT0gbnVsbCB8fCAhdGhpcy5zdFdpZGdldFJlZ2lzdHJ5LmhhcyhpdGVtLndpZGdldC50eXBlKSkge1xuICAgICAgZGVsZXRlIGl0ZW0udHlwZTtcbiAgICAgIHdhcm4oYHN0OiBObyB3aWRnZXQgZm9yIHR5cGUgXCIke2l0ZW0ud2lkZ2V0Py50eXBlfVwiYCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZW5IZWFkZXJzKHJvb3RDb2x1bW5zOiBfU1RDb2x1bW5bXSk6IHsgaGVhZGVyczogX1NUQ29sdW1uW11bXTsgaGVhZGVyV2lkdGhzOiBzdHJpbmdbXSB8IG51bGwgfSB7XG4gICAgY29uc3Qgcm93czogX1NUQ29sdW1uW11bXSA9IFtdO1xuICAgIGNvbnN0IHdpZHRoczogc3RyaW5nW10gPSBbXTtcbiAgICBjb25zdCBmaWxsUm93Q2VsbHMgPSAoY29sdW1uczogX1NUQ29sdW1uW10sIGNvbEluZGV4OiBudW1iZXIsIHJvd0luZGV4ID0gMCk6IG51bWJlcltdID0+IHtcbiAgICAgIC8vIEluaXQgcm93c1xuICAgICAgcm93c1tyb3dJbmRleF0gPSByb3dzW3Jvd0luZGV4XSB8fCBbXTtcblxuICAgICAgbGV0IGN1cnJlbnRDb2xJbmRleCA9IGNvbEluZGV4O1xuICAgICAgY29uc3QgY29sU3BhbnM6IG51bWJlcltdID0gY29sdW1ucy5tYXAoY29sdW1uID0+IHtcbiAgICAgICAgY29uc3QgY2VsbDogU1RDb2x1bW5Hcm91cFR5cGUgPSB7XG4gICAgICAgICAgY29sdW1uLFxuICAgICAgICAgIGNvbFN0YXJ0OiBjdXJyZW50Q29sSW5kZXgsXG4gICAgICAgICAgaGFzU3ViQ29sdW1uczogZmFsc2UsXG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IGNvbFNwYW46IG51bWJlciA9IDE7XG5cbiAgICAgICAgY29uc3Qgc3ViQ29sdW1ucyA9IGNvbHVtbi5jaGlsZHJlbjtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc3ViQ29sdW1ucykgJiYgc3ViQ29sdW1ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgY29sU3BhbiA9IGZpbGxSb3dDZWxscyhzdWJDb2x1bW5zLCBjdXJyZW50Q29sSW5kZXgsIHJvd0luZGV4ICsgMSkucmVkdWNlKCh0b3RhbCwgY291bnQpID0+IHRvdGFsICsgY291bnQsIDApO1xuICAgICAgICAgIGNlbGwuaGFzU3ViQ29sdW1ucyA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2lkdGhzLnB1c2goKGNlbGwuY29sdW1uLndpZHRoIGFzIHN0cmluZykgfHwgJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCdjb2xTcGFuJyBpbiBjb2x1bW4pIHtcbiAgICAgICAgICBjb2xTcGFuID0gY29sdW1uLmNvbFNwYW4hO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCdyb3dTcGFuJyBpbiBjb2x1bW4pIHtcbiAgICAgICAgICBjZWxsLnJvd1NwYW4gPSBjb2x1bW4ucm93U3BhbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNlbGwuY29sU3BhbiA9IGNvbFNwYW47XG4gICAgICAgIGNlbGwuY29sRW5kID0gY2VsbC5jb2xTdGFydCArIGNvbFNwYW4gLSAxO1xuICAgICAgICByb3dzW3Jvd0luZGV4XS5wdXNoKGNlbGwgYXMgTnpTYWZlQW55KTtcblxuICAgICAgICBjdXJyZW50Q29sSW5kZXggKz0gY29sU3BhbjtcblxuICAgICAgICByZXR1cm4gY29sU3BhbjtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gY29sU3BhbnM7XG4gICAgfTtcblxuICAgIGZpbGxSb3dDZWxscyhyb290Q29sdW1ucywgMCk7XG5cbiAgICAvLyBIYW5kbGUgYHJvd1NwYW5gXG4gICAgY29uc3Qgcm93Q291bnQgPSByb3dzLmxlbmd0aDtcbiAgICBmb3IgKGxldCByb3dJbmRleCA9IDA7IHJvd0luZGV4IDwgcm93Q291bnQ7IHJvd0luZGV4ICs9IDEpIHtcbiAgICAgIHJvd3Nbcm93SW5kZXhdLmZvckVhY2goY2VsbCA9PiB7XG4gICAgICAgIGlmICghKCdyb3dTcGFuJyBpbiBjZWxsKSAmJiAhY2VsbC5oYXNTdWJDb2x1bW5zKSB7XG4gICAgICAgICAgY2VsbC5yb3dTcGFuID0gcm93Q291bnQgLSByb3dJbmRleDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgaGVhZGVyczogcm93cywgaGVhZGVyV2lkdGhzOiByb3dDb3VudCA+IDEgPyB3aWR0aHMgOiBudWxsIH07XG4gIH1cblxuICBwcml2YXRlIGNsZWFuQ29uZChsaXN0OiBfU1RDb2x1bW5bXSk6IF9TVENvbHVtbltdIHtcbiAgICBjb25zdCByZXM6IF9TVENvbHVtbltdID0gW107XG4gICAgY29uc3QgY29weUxpc3QgPSBkZWVwQ29weShsaXN0KTtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgY29weUxpc3QpIHtcbiAgICAgIGlmIChpdGVtLmlpZiAmJiAhaXRlbS5paWYoaXRlbSkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5hY2wgJiYgaXRlbS5hY2wgJiYgIXRoaXMuYWNsLmNhbihpdGVtLmFjbCkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICByZXMucHVzaChpdGVtKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIHByb2Nlc3MoXG4gICAgbGlzdDogU1RDb2x1bW5bXSxcbiAgICB3aWR0aE1vZGU6IFNUV2lkdGhNb2RlLFxuICAgIHJlc2l6YWJsZTogU1RSZXNpemFibGUsXG4gICk6IHsgY29sdW1uczogX1NUQ29sdW1uW107IGhlYWRlcnM6IF9TVENvbHVtbltdW107IGhlYWRlcldpZHRoczogc3RyaW5nW10gfCBudWxsIH0ge1xuICAgIGlmICghbGlzdCB8fCBsaXN0Lmxlbmd0aCA9PT0gMCkgdGhyb3cgbmV3IEVycm9yKGBbc3RdOiB0aGUgY29sdW1ucyBwcm9wZXJ0eSBtdXNlIGJlIGRlZmluZSFgKTtcblxuICAgIGNvbnN0IHsgbm9JbmRleCB9ID0gdGhpcy5jb2c7XG4gICAgbGV0IGNoZWNrYm94Q291bnQgPSAwO1xuICAgIGxldCByYWRpb0NvdW50ID0gMDtcbiAgICBsZXQgcG9pbnQgPSAwO1xuICAgIGNvbnN0IGNvbHVtbnM6IF9TVENvbHVtbltdID0gW107XG5cbiAgICBjb25zdCBwcm9jZXNzSXRlbSA9IChpdGVtOiBfU1RDb2x1bW4pOiBfU1RDb2x1bW4gPT4ge1xuICAgICAgLy8gaW5kZXhcbiAgICAgIGlmIChpdGVtLmluZGV4KSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShpdGVtLmluZGV4KSkge1xuICAgICAgICAgIGl0ZW0uaW5kZXggPSBpdGVtLmluZGV4LnNwbGl0KCcuJyk7XG4gICAgICAgIH1cbiAgICAgICAgaXRlbS5pbmRleEtleSA9IGl0ZW0uaW5kZXguam9pbignLicpO1xuICAgICAgfVxuXG4gICAgICAvLyAjcmVnaW9uIHRpdGxlXG5cbiAgICAgIGNvbnN0IHRpdCA9ICh0eXBlb2YgaXRlbS50aXRsZSA9PT0gJ3N0cmluZycgPyB7IHRleHQ6IGl0ZW0udGl0bGUgfSA6IGl0ZW0udGl0bGUpIHx8IHt9O1xuICAgICAgaWYgKHRpdC5pMThuICYmIHRoaXMuaTE4blNydikge1xuICAgICAgICB0aXQudGV4dCA9IHRoaXMuaTE4blNydi5mYW55aSh0aXQuaTE4bik7XG4gICAgICB9XG4gICAgICBpZiAodGl0LnRleHQpIHtcbiAgICAgICAgdGl0Ll90ZXh0ID0gdGhpcy5kb20uYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwodGl0LnRleHQpO1xuICAgICAgfVxuICAgICAgaXRlbS50aXRsZSA9IHRpdDtcblxuICAgICAgLy8gI2VuZHJlZ2lvblxuXG4gICAgICAvLyBub1xuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ25vJykge1xuICAgICAgICBpdGVtLm5vSW5kZXggPSBpdGVtLm5vSW5kZXggPT0gbnVsbCA/IG5vSW5kZXggOiBpdGVtLm5vSW5kZXg7XG4gICAgICB9XG4gICAgICAvLyBjaGVja2JveFxuICAgICAgaWYgKGl0ZW0uc2VsZWN0aW9ucyA9PSBudWxsKSB7XG4gICAgICAgIGl0ZW0uc2VsZWN0aW9ucyA9IFtdO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICArK2NoZWNrYm94Q291bnQ7XG4gICAgICAgIGlmICghaXRlbS53aWR0aCkge1xuICAgICAgICAgIGl0ZW0ud2lkdGggPSBgJHtpdGVtLnNlbGVjdGlvbnMubGVuZ3RoID4gMCA/IDYyIDogNTB9cHhgO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5hY2wpIHtcbiAgICAgICAgaXRlbS5zZWxlY3Rpb25zID0gaXRlbS5zZWxlY3Rpb25zLmZpbHRlcih3ID0+IHRoaXMuYWNsLmNhbih3LmFjbCkpO1xuICAgICAgfVxuICAgICAgLy8gcmFkaW9cbiAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgICAgKytyYWRpb0NvdW50O1xuICAgICAgICBpdGVtLnNlbGVjdGlvbnMgPSBbXTtcbiAgICAgICAgaWYgKCFpdGVtLndpZHRoKSB7XG4gICAgICAgICAgaXRlbS53aWR0aCA9ICc1MHB4JztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gdHlwZXNcbiAgICAgIGlmIChpdGVtLnR5cGUgPT09ICd5bicpIHtcbiAgICAgICAgaXRlbS55biA9IHsgdHJ1dGg6IHRydWUsIC4uLml0ZW0ueW4gfTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgKGl0ZW0udHlwZSA9PT0gJ2xpbmsnICYmIHR5cGVvZiBpdGVtLmNsaWNrICE9PSAnZnVuY3Rpb24nKSB8fFxuICAgICAgICAoaXRlbS50eXBlID09PSAnYmFkZ2UnICYmIGl0ZW0uYmFkZ2UgPT0gbnVsbCkgfHxcbiAgICAgICAgKGl0ZW0udHlwZSA9PT0gJ3RhZycgJiYgaXRlbS50YWcgPT0gbnVsbCkgfHxcbiAgICAgICAgKGl0ZW0udHlwZSA9PT0gJ2VudW0nICYmIGl0ZW0uZW51bSA9PSBudWxsKVxuICAgICAgKSB7XG4gICAgICAgIGl0ZW0udHlwZSA9ICcnO1xuICAgICAgfVxuICAgICAgaXRlbS5faXNUcnVuY2F0ZSA9ICEhaXRlbS53aWR0aCAmJiB3aWR0aE1vZGUuc3RyaWN0QmVoYXZpb3IgPT09ICd0cnVuY2F0ZScgJiYgaXRlbS50eXBlICE9PSAnaW1nJztcbiAgICAgIC8vIGNsYXNzTmFtZVxuICAgICAgaWYgKCFpdGVtLmNsYXNzTmFtZSkge1xuICAgICAgICBpdGVtLmNsYXNzTmFtZSA9ICh7XG4gICAgICAgICAgbnVtYmVyOiAndGV4dC1yaWdodCcsXG4gICAgICAgICAgY3VycmVuY3k6ICd0ZXh0LXJpZ2h0JyxcbiAgICAgICAgICBkYXRlOiAndGV4dC1jZW50ZXInLFxuICAgICAgICB9IGFzIE56U2FmZUFueSlbaXRlbS50eXBlIV07XG4gICAgICB9XG4gICAgICBpdGVtLl9jbGFzc05hbWUgPSBpdGVtLmNsYXNzTmFtZSB8fCAoaXRlbS5faXNUcnVuY2F0ZSA/ICd0ZXh0LXRydW5jYXRlJyA6IG51bGwpO1xuICAgICAgLy8gd2lkdGhcbiAgICAgIGlmICh0eXBlb2YgaXRlbS53aWR0aCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgaXRlbS53aWR0aCA9IGAke2l0ZW0ud2lkdGh9cHhgO1xuICAgICAgfVxuXG4gICAgICAvLyBzb3J0ZXJcbiAgICAgIGl0ZW0uX3NvcnQgPSB0aGlzLnNvcnRDb2VyY2UoaXRlbSk7XG4gICAgICAvLyBmaWx0ZXJcbiAgICAgIGl0ZW0uZmlsdGVyID0gdGhpcy5maWx0ZXJDb2VyY2UoaXRlbSkgYXMgU1RDb2x1bW5GaWx0ZXI7XG4gICAgICAvLyBidXR0b25zXG4gICAgICBpdGVtLmJ1dHRvbnMgPSB0aGlzLmJ0bkNvZXJjZShpdGVtLmJ1dHRvbnMhKTtcbiAgICAgIC8vIHdpZGdldFxuICAgICAgdGhpcy53aWRnZXRDb2VyY2UoaXRlbSk7XG4gICAgICAvLyByZXN0b3JlIGN1c3RvbSByb3dcbiAgICAgIHRoaXMucmVzdG9yZVJlbmRlcihpdGVtKTtcbiAgICAgIC8vIHJlc2l6YWJsZVxuICAgICAgaXRlbS5yZXNpemFibGUgPSB7XG4gICAgICAgIGRpc2FibGVkOiB0cnVlLFxuICAgICAgICBib3VuZHM6ICd3aW5kb3cnLFxuICAgICAgICBtaW5XaWR0aDogNjAsXG4gICAgICAgIG1heFdpZHRoOiAzNjAsXG4gICAgICAgIHByZXZpZXc6IHRydWUsXG4gICAgICAgIC4uLnJlc2l6YWJsZSxcbiAgICAgICAgLi4uKHR5cGVvZiBpdGVtLnJlc2l6YWJsZSA9PT0gJ2Jvb2xlYW4nID8gKHsgZGlzYWJsZWQ6ICFpdGVtLnJlc2l6YWJsZSB9IGFzIFNUUmVzaXphYmxlKSA6IGl0ZW0ucmVzaXphYmxlKSxcbiAgICAgIH07XG5cbiAgICAgIGl0ZW0uX19wb2ludCA9IHBvaW50Kys7XG5cbiAgICAgIHJldHVybiBpdGVtO1xuICAgIH07XG5cbiAgICBjb25zdCBwcm9jZXNzTGlzdCA9IChkYXRhOiBfU1RDb2x1bW5bXSk6IHZvaWQgPT4ge1xuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgY29sdW1ucy5wdXNoKHByb2Nlc3NJdGVtKGl0ZW0pKTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbS5jaGlsZHJlbikpIHtcbiAgICAgICAgICBwcm9jZXNzTGlzdChpdGVtLmNoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBjb3B5TGlzdCA9IHRoaXMuY2xlYW5Db25kKGxpc3QgYXMgX1NUQ29sdW1uW10pO1xuICAgIHByb2Nlc3NMaXN0KGNvcHlMaXN0KTtcblxuICAgIGlmIChjaGVja2JveENvdW50ID4gMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBbc3RdOiBqdXN0IG9ubHkgb25lIGNvbHVtbiBjaGVja2JveGApO1xuICAgIH1cbiAgICBpZiAocmFkaW9Db3VudCA+IDEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgW3N0XToganVzdCBvbmx5IG9uZSBjb2x1bW4gcmFkaW9gKTtcbiAgICB9XG5cbiAgICB0aGlzLmZpeGVkQ29lcmNlKGNvbHVtbnMgYXMgX1NUQ29sdW1uW10pO1xuICAgIHJldHVybiB7IGNvbHVtbnM6IGNvbHVtbnMuZmlsdGVyKHcgPT4gIUFycmF5LmlzQXJyYXkody5jaGlsZHJlbikgfHwgdy5jaGlsZHJlbi5sZW5ndGggPT09IDApLCAuLi50aGlzLmdlbkhlYWRlcnMoY29weUxpc3QpIH07XG4gIH1cblxuICByZXN0b3JlQWxsUmVuZGVyKGNvbHVtbnM6IF9TVENvbHVtbltdKTogdm9pZCB7XG4gICAgY29sdW1ucy5mb3JFYWNoKGkgPT4gdGhpcy5yZXN0b3JlUmVuZGVyKGkpKTtcbiAgfVxuXG4gIHVwZGF0ZURlZmF1bHQoZmlsdGVyOiBTVENvbHVtbkZpbHRlcik6IHRoaXMge1xuICAgIGlmIChmaWx0ZXIudHlwZSA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICBmaWx0ZXIuZGVmYXVsdCA9IGZpbHRlci5tZW51cyEuZmluZEluZGV4KHcgPT4gdy5jaGVja2VkISkgIT09IC0xO1xuICAgIH0gZWxzZSB7XG4gICAgICBmaWx0ZXIuZGVmYXVsdCA9ICEhZmlsdGVyLm1lbnVzIVswXS52YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjbGVhbkZpbHRlcihjb2w6IF9TVENvbHVtbik6IHRoaXMge1xuICAgIGNvbnN0IGYgPSBjb2wuZmlsdGVyITtcbiAgICBmLmRlZmF1bHQgPSBmYWxzZTtcbiAgICBpZiAoZi50eXBlID09PSAnZGVmYXVsdCcpIHtcbiAgICAgIGYubWVudXMhLmZvckVhY2goaSA9PiAoaS5jaGVja2VkID0gZmFsc2UpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZi5tZW51cyFbMF0udmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG4iXX0=