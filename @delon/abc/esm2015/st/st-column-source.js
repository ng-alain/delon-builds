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
/**
 * @record
 */
export function STColumnSourceProcessOptions() { }
if (false) {
    /** @type {?} */
    STColumnSourceProcessOptions.prototype.widthMode;
    /** @type {?} */
    STColumnSourceProcessOptions.prototype.resizable;
}
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
            item.__renderTitle =
                typeof item.renderTitle === 'string' ? this.rowSource.getTitle(item.renderTitle) : ((/** @type {?} */ (item.renderTitle)));
        }
        if (item.render) {
            item.__render = typeof item.render === 'string' ? this.rowSource.getRow(item.render) : ((/** @type {?} */ (item.render)));
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
     * @param {?} options
     * @return {?}
     */
    process(list, options) {
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
            item._isTruncate = !!item.width && options.widthMode.strictBehavior === 'truncate' && item.type !== 'img';
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
            item.resizable = Object.assign(Object.assign({ disabled: true, bounds: 'window', minWidth: 60, maxWidth: 360, preview: true }, options.resizable), (typeof item.resizable === 'boolean' ? ((/** @type {?} */ ({ disabled: !item.resizable }))) : item.resizable));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtY29sdW1uLXNvdXJjZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS92c3RzL3dvcmsvMS9zL3BhY2thZ2VzL2FiYy9zdC8iLCJzb3VyY2VzIjpbInN0LWNvbHVtbi1zb3VyY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFlLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3hDLE9BQU8sRUFBb0IsZ0JBQWdCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDbEUsT0FBTyxFQUFpQixRQUFRLEVBQUUsSUFBSSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTVELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7QUFjL0Msa0RBR0M7OztJQUZDLGlEQUF1Qjs7SUFDdkIsaURBQXVCOztBQUl6QixNQUFNLE9BQU8sY0FBYzs7Ozs7Ozs7SUFHekIsWUFDVSxHQUFpQixFQUNULFNBQXNCLEVBQ2xCLEdBQWUsRUFDVyxPQUF5QixFQUMvRCxnQkFBa0M7UUFKbEMsUUFBRyxHQUFILEdBQUcsQ0FBYztRQUNULGNBQVMsR0FBVCxTQUFTLENBQWE7UUFDbEIsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUNXLFlBQU8sR0FBUCxPQUFPLENBQWtCO1FBQy9ELHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFDekMsQ0FBQzs7Ozs7SUFFSixNQUFNLENBQUMsR0FBa0I7UUFDdkIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDakIsQ0FBQzs7Ozs7OztJQUVPLE1BQU0sQ0FBQyxDQUFpQixFQUFFLEdBQXNCO1FBQ3RELElBQUksQ0FBQyxD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QXFCdkIsNkJBQTJCOzs7OztJQUd6Qiw2QkFBeUI7Ozs7O0lBQ3pCLG1DQUFzQzs7Ozs7SUFDdEMsNkJBQW1DOzs7OztJQUNuQyxpQ0FBdUU7Ozs7O0lBQ3ZFLDBDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhvc3QsIEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEFDTFNlcnZpY2UgfSBmcm9tICdAZGVsb24vYWNsJztcbmltcG9ydCB7IEFsYWluSTE4TlNlcnZpY2UsIEFMQUlOX0kxOE5fVE9LRU4gfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgQWxhaW5TVENvbmZpZywgZGVlcENvcHksIHdhcm4gfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgU1RSb3dTb3VyY2UgfSBmcm9tICcuL3N0LXJvdy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU1RXaWRnZXRSZWdpc3RyeSB9IGZyb20gJy4vc3Qtd2lkZ2V0JztcbmltcG9ydCB7XG4gIFNUQ29sdW1uLFxuICBTVENvbHVtbkJ1dHRvbixcbiAgU1RDb2x1bW5CdXR0b25Qb3AsXG4gIFNUQ29sdW1uRmlsdGVyLFxuICBTVENvbHVtbkdyb3VwVHlwZSxcbiAgU1RJY29uLFxuICBTVFJlc2l6YWJsZSxcbiAgU1RTb3J0TWFwLFxuICBTVFdpZHRoTW9kZSxcbn0gZnJvbSAnLi9zdC5pbnRlcmZhY2VzJztcbmltcG9ydCB7IF9TVENvbHVtbiB9IGZyb20gJy4vc3QudHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNUQ29sdW1uU291cmNlUHJvY2Vzc09wdGlvbnMge1xuICB3aWR0aE1vZGU6IFNUV2lkdGhNb2RlO1xuICByZXNpemFibGU6IFNUUmVzaXphYmxlO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU1RDb2x1bW5Tb3VyY2Uge1xuICBwcml2YXRlIGNvZzogQWxhaW5TVENvbmZpZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGRvbTogRG9tU2FuaXRpemVyLFxuICAgIEBIb3N0KCkgcHJpdmF0ZSByb3dTb3VyY2U6IFNUUm93U291cmNlLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgYWNsOiBBQ0xTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoQUxBSU5fSTE4Tl9UT0tFTikgcHJpdmF0ZSBpMThuU3J2OiBBbGFpbkkxOE5TZXJ2aWNlLFxuICAgIHByaXZhdGUgc3RXaWRnZXRSZWdpc3RyeTogU1RXaWRnZXRSZWdpc3RyeSxcbiAgKSB7fVxuXG4gIHNldENvZyh2YWw6IEFsYWluU1RDb25maWcpOiB2b2lkIHtcbiAgICB0aGlzLmNvZyA9IHZhbDtcbiAgfVxuXG4gIHByaXZhdGUgZml4UG9wKGk6IFNUQ29sdW1uQnV0dG9uLCBkZWY6IFNUQ29sdW1uQnV0dG9uUG9wKTogdm9pZCB7XG4gICAgaWYgKGkucG9wID09IG51bGwgfHwgaS5wb3AgPT09IGZhbHNlKSB7XG4gICAgICBpLnBvcCA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBwb3AgPSB7XG4gICAgICAuLi5kZWYsXG4gICAgfTtcbiAgICBpZiAodHlwZW9mIGkucG9wID09PSAnc3RyaW5nJykge1xuICAgICAgcG9wLnRpdGxlID0gaS5wb3A7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgaS5wb3AgPT09ICdvYmplY3QnKSB7XG4gICAgICBwb3AgPSB7XG4gICAgICAgIC4uLnBvcCxcbiAgICAgICAgLi4uaS5wb3AsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcG9wLmNvbmRpdGlvbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcG9wLmNvbmRpdGlvbiA9ICgpID0+IGZhbHNlO1xuICAgIH1cblxuICAgIGkucG9wID0gcG9wO1xuICB9XG5cbiAgcHJpdmF0ZSBidG5Db2VyY2UobGlzdDogU1RDb2x1bW5CdXR0b25bXSk6IFNUQ29sdW1uQnV0dG9uW10ge1xuICAgIGlmICghbGlzdCkgcmV0dXJuIFtdO1xuICAgIGNvbnN0IHJldDogU1RDb2x1bW5CdXR0b25bXSA9IFtdO1xuICAgIGNvbnN0IHsgbW9kYWwsIGRyYXdlciwgcG9wLCBidG5JY29uIH0gPSB0aGlzLmNvZztcblxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBsaXN0KSB7XG4gICAgICBpZiAodGhpcy5hY2wgJiYgaXRlbS5hY2wgJiYgIXRoaXMuYWNsLmNhbihpdGVtLmFjbCkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdtb2RhbCcgfHwgaXRlbS50eXBlID09PSAnc3RhdGljJykge1xuICAgICAgICBpZiAoaXRlbS5tb2RhbCA9PSBudWxsIHx8IGl0ZW0ubW9kYWwuY29tcG9uZW50ID09IG51bGwpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oYFtzdF0gU2hvdWxkIHNwZWNpZnkgbW9kYWwgcGFyYW1ldGVyYCk7XG4gICAgICAgICAgaXRlbS50eXBlID0gJ25vbmUnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW0ubW9kYWwgPSB7IC4uLnsgcGFyYW1zTmFtZTogJ3JlY29yZCcsIHNpemU6ICdsZycgfSwgLi4ubW9kYWwsIC4uLml0ZW0ubW9kYWwgfTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbS50eXBlID09PSAnZHJhd2VyJykge1xuICAgICAgICBpZiAoaXRlbS5kcmF3ZXIgPT0gbnVsbCB8fCBpdGVtLmRyYXdlci5jb21wb25lbnQgPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihgW3N0XSBTaG91bGQgc3BlY2lmeSBkcmF3ZXIgcGFyYW1ldGVyYCk7XG4gICAgICAgICAgaXRlbS50eXBlID0gJ25vbmUnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW0uZHJhd2VyID0geyAuLi57IHBhcmFtc05hbWU6ICdyZWNvcmQnLCBzaXplOiAnbGcnIH0sIC4uLmRyYXdlciwgLi4uaXRlbS5kcmF3ZXIgfTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbS50eXBlID09PSAnZGVsJyAmJiB0eXBlb2YgaXRlbS5wb3AgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGl0ZW0ucG9wID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgLy8gcG9wXG4gICAgICB0aGlzLmZpeFBvcChpdGVtLCBwb3AhKTtcblxuICAgICAgaWYgKGl0ZW0uaWNvbikge1xuICAgICAgICBpdGVtLmljb24gPSB7XG4gICAgICAgICAgLi4uYnRuSWNvbixcbiAgICAgICAgICAuLi4odHlwZW9mIGl0ZW0uaWNvbiA9PT0gJ3N0cmluZycgPyB7IHR5cGU6IGl0ZW0uaWNvbiB9IDogaXRlbS5pY29uKSxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgaXRlbS5jaGlsZHJlbiA9IGl0ZW0uY2hpbGRyZW4gJiYgaXRlbS5jaGlsZHJlbi5sZW5ndGggPiAwID8gdGhpcy5idG5Db2VyY2UoaXRlbS5jaGlsZHJlbikgOiBbXTtcblxuICAgICAgLy8gaTE4blxuICAgICAgaWYgKGl0ZW0uaTE4biAmJiB0aGlzLmkxOG5TcnYpIHtcbiAgICAgICAgaXRlbS50ZXh0ID0gdGhpcy5pMThuU3J2LmZhbnlpKGl0ZW0uaTE4bik7XG4gICAgICB9XG5cbiAgICAgIHJldC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgICB0aGlzLmJ0bkNvZXJjZUlmKHJldCk7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIHByaXZhdGUgYnRuQ29lcmNlSWYobGlzdDogU1RDb2x1bW5CdXR0b25bXSk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiBsaXN0KSB7XG4gICAgICBpZiAoIWl0ZW0uaWlmKSBpdGVtLmlpZiA9ICgpID0+IHRydWU7XG4gICAgICBpdGVtLmlpZkJlaGF2aW9yID0gaXRlbS5paWZCZWhhdmlvciB8fCB0aGlzLmNvZy5paWZCZWhhdmlvcjtcbiAgICAgIGlmIChpdGVtLmNoaWxkcmVuICYmIGl0ZW0uY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLmJ0bkNvZXJjZUlmKGl0ZW0uY2hpbGRyZW4pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXRlbS5jaGlsZHJlbiA9IFtdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZml4ZWRDb2VyY2UobGlzdDogX1NUQ29sdW1uW10pOiB2b2lkIHtcbiAgICBjb25zdCBjb3VudFJlZHVjZSA9IChhOiBudW1iZXIsIGI6IF9TVENvbHVtbikgPT4gYSArICtiLndpZHRoIS50b1N0cmluZygpLnJlcGxhY2UoJ3B4JywgJycpO1xuICAgIC8vIGxlZnQgd2lkdGhcbiAgICBsaXN0XG4gICAgICAuZmlsdGVyKHcgPT4gdy5maXhlZCAmJiB3LmZpeGVkID09PSAnbGVmdCcgJiYgdy53aWR0aClcbiAgICAgIC5mb3JFYWNoKChpdGVtLCBpZHgpID0+IChpdGVtLl9sZWZ0ID0gbGlzdC5zbGljZSgwLCBpZHgpLnJlZHVjZShjb3VudFJlZHVjZSwgMCkgKyAncHgnKSk7XG4gICAgLy8gcmlnaHQgd2lkdGhcbiAgICBsaXN0XG4gICAgICAuZmlsdGVyKHcgPT4gdy5maXhlZCAmJiB3LmZpeGVkID09PSAncmlnaHQnICYmIHcud2lkdGgpXG4gICAgICAucmV2ZXJzZSgpXG4gICAgICAuZm9yRWFjaCgoaXRlbSwgaWR4KSA9PiAoaXRlbS5fcmlnaHQgPSAoaWR4ID4gMCA/IGxpc3Quc2xpY2UoLWlkeCkucmVkdWNlKGNvdW50UmVkdWNlLCAwKSA6IDApICsgJ3B4JykpO1xuICB9XG5cbiAgcHJpdmF0ZSBzb3J0Q29lcmNlKGl0ZW06IF9TVENvbHVtbik6IFNUU29ydE1hcCB7XG4gICAgY29uc3QgcmVzID0gdGhpcy5maXhTb3J0Q29lcmNlKGl0ZW0pO1xuICAgIHJlcy5yZU5hbWUgPSB7XG4gICAgICAuLi50aGlzLmNvZy5zb3J0UmVOYW1lLFxuICAgICAgLi4ucmVzLnJlTmFtZSxcbiAgICB9O1xuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBwcml2YXRlIGZpeFNvcnRDb2VyY2UoaXRlbTogX1NUQ29sdW1uKTogU1RTb3J0TWFwIHtcbiAgICBpZiAodHlwZW9mIGl0ZW0uc29ydCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiB7IGVuYWJsZWQ6IGZhbHNlIH07XG4gICAgfVxuXG4gICAgbGV0IHJlczogU1RTb3J0TWFwID0ge307XG5cbiAgICBpZiAodHlwZW9mIGl0ZW0uc29ydCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJlcy5rZXkgPSBpdGVtLnNvcnQ7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgaXRlbS5zb3J0ICE9PSAnYm9vbGVhbicpIHtcbiAgICAgIHJlcyA9IGl0ZW0uc29ydDtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBpdGVtLnNvcnQgPT09ICdib29sZWFuJykge1xuICAgICAgcmVzLmNvbXBhcmUgPSAoYSwgYikgPT4gYVtpdGVtLmluZGV4S2V5IV0gLSBiW2l0ZW0uaW5kZXhLZXkhXTtcbiAgICB9XG5cbiAgICBpZiAoIXJlcy5rZXkpIHtcbiAgICAgIHJlcy5rZXkgPSBpdGVtLmluZGV4S2V5O1xuICAgIH1cblxuICAgIHJlcy5lbmFibGVkID0gdHJ1ZTtcblxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBwcml2YXRlIGZpbHRlckNvZXJjZShpdGVtOiBfU1RDb2x1bW4pOiBTVENvbHVtbkZpbHRlciB8IG51bGwge1xuICAgIGlmIChpdGVtLmZpbHRlciA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBsZXQgcmVzOiBTVENvbHVtbkZpbHRlciB8IG51bGwgPSBpdGVtLmZpbHRlcjtcbiAgICByZXMudHlwZSA9IHJlcy50eXBlIHx8ICdkZWZhdWx0JztcblxuICAgIGxldCBpY29uID0gJ2ZpbHRlcic7XG4gICAgbGV0IGljb25UaGVtZSA9ICdmaWxsJztcbiAgICBpZiAocmVzLnR5cGUgPT09ICdrZXl3b3JkJykge1xuICAgICAgaWYgKHJlcy5tZW51cyA9PSBudWxsIHx8IHJlcy5tZW51cyEubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJlcy5tZW51cyA9IFt7IHZhbHVlOiAnJyB9XTtcbiAgICAgIH1cbiAgICAgIGljb24gPSAnc2VhcmNoJztcbiAgICAgIGljb25UaGVtZSA9ICdvdXRsaW5lJztcbiAgICB9XG5cbiAgICBpZiAocmVzLm1lbnVzIS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcmVzLm11bHRpcGxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmVzLm11bHRpcGxlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXMuY29uZmlybVRleHQgPSByZXMuY29uZmlybVRleHQgfHwgdGhpcy5jb2cuZmlsdGVyQ29uZmlybVRleHQ7XG4gICAgcmVzLmNsZWFyVGV4dCA9IHJlcy5jbGVhclRleHQgfHwgdGhpcy5jb2cuZmlsdGVyQ2xlYXJUZXh0O1xuICAgIHJlcy5rZXkgPSByZXMua2V5IHx8IGl0ZW0uaW5kZXhLZXk7XG4gICAgcmVzLmljb24gPSByZXMuaWNvbiB8fCBpY29uO1xuXG4gICAgY29uc3QgYmFzZUljb24gPSB7IHR5cGU6IGljb24sIHRoZW1lOiBpY29uVGhlbWUgfSBhcyBTVEljb247XG4gICAgaWYgKHR5cGVvZiByZXMuaWNvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJlcy5pY29uID0geyAuLi5iYXNlSWNvbiwgdHlwZTogcmVzLmljb24gfSBhcyBTVEljb247XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcy5pY29uID0geyAuLi5iYXNlSWNvbiwgLi4ucmVzLmljb24gfTtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZURlZmF1bHQocmVzKTtcblxuICAgIGlmICh0aGlzLmFjbCkge1xuICAgICAgcmVzLm1lbnVzID0gcmVzLm1lbnVzIS5maWx0ZXIodyA9PiB0aGlzLmFjbC5jYW4ody5hY2wpKTtcbiAgICB9XG5cbiAgICBpZiAocmVzLm1lbnVzIS5sZW5ndGggPD0gMCkge1xuICAgICAgcmVzID0gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgcHJpdmF0ZSByZXN0b3JlUmVuZGVyKGl0ZW06IF9TVENvbHVtbik6IHZvaWQge1xuICAgIGlmIChpdGVtLnJlbmRlclRpdGxlKSB7XG4gICAgICBpdGVtLl9fcmVuZGVyVGl0bGUgPVxuICAgICAgICB0eXBlb2YgaXRlbS5yZW5kZXJUaXRsZSA9PT0gJ3N0cmluZycgPyB0aGlzLnJvd1NvdXJjZS5nZXRUaXRsZShpdGVtLnJlbmRlclRpdGxlKSA6IChpdGVtLnJlbmRlclRpdGxlIGFzIFRlbXBsYXRlUmVmPHZvaWQ+KTtcbiAgICB9XG4gICAgaWYgKGl0ZW0ucmVuZGVyKSB7XG4gICAgICBpdGVtLl9fcmVuZGVyID0gdHlwZW9mIGl0ZW0ucmVuZGVyID09PSAnc3RyaW5nJyA/IHRoaXMucm93U291cmNlLmdldFJvdyhpdGVtLnJlbmRlcikgOiAoaXRlbS5yZW5kZXIgYXMgVGVtcGxhdGVSZWY8dm9pZD4pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgd2lkZ2V0Q29lcmNlKGl0ZW06IF9TVENvbHVtbik6IHZvaWQge1xuICAgIGlmIChpdGVtLnR5cGUgIT09ICd3aWRnZXQnKSByZXR1cm47XG4gICAgaWYgKGl0ZW0ud2lkZ2V0ID09IG51bGwgfHwgIXRoaXMuc3RXaWRnZXRSZWdpc3RyeS5oYXMoaXRlbS53aWRnZXQudHlwZSkpIHtcbiAgICAgIGRlbGV0ZSBpdGVtLnR5cGU7XG4gICAgICB3YXJuKGBzdDogTm8gd2lkZ2V0IGZvciB0eXBlIFwiJHtpdGVtLndpZGdldD8udHlwZX1cImApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2VuSGVhZGVycyhyb290Q29sdW1uczogX1NUQ29sdW1uW10pOiB7IGhlYWRlcnM6IF9TVENvbHVtbltdW107IGhlYWRlcldpZHRoczogc3RyaW5nW10gfCBudWxsIH0ge1xuICAgIGNvbnN0IHJvd3M6IF9TVENvbHVtbltdW10gPSBbXTtcbiAgICBjb25zdCB3aWR0aHM6IHN0cmluZ1tdID0gW107XG4gICAgY29uc3QgZmlsbFJvd0NlbGxzID0gKGNvbHVtbnM6IF9TVENvbHVtbltdLCBjb2xJbmRleDogbnVtYmVyLCByb3dJbmRleCA9IDApOiBudW1iZXJbXSA9PiB7XG4gICAgICAvLyBJbml0IHJvd3NcbiAgICAgIHJvd3Nbcm93SW5kZXhdID0gcm93c1tyb3dJbmRleF0gfHwgW107XG5cbiAgICAgIGxldCBjdXJyZW50Q29sSW5kZXggPSBjb2xJbmRleDtcbiAgICAgIGNvbnN0IGNvbFNwYW5zOiBudW1iZXJbXSA9IGNvbHVtbnMubWFwKGNvbHVtbiA9PiB7XG4gICAgICAgIGNvbnN0IGNlbGw6IFNUQ29sdW1uR3JvdXBUeXBlID0ge1xuICAgICAgICAgIGNvbHVtbixcbiAgICAgICAgICBjb2xTdGFydDogY3VycmVudENvbEluZGV4LFxuICAgICAgICAgIGhhc1N1YkNvbHVtbnM6IGZhbHNlLFxuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBjb2xTcGFuOiBudW1iZXIgPSAxO1xuXG4gICAgICAgIGNvbnN0IHN1YkNvbHVtbnMgPSBjb2x1bW4uY2hpbGRyZW47XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHN1YkNvbHVtbnMpICYmIHN1YkNvbHVtbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbFNwYW4gPSBmaWxsUm93Q2VsbHMoc3ViQ29sdW1ucywgY3VycmVudENvbEluZGV4LCByb3dJbmRleCArIDEpLnJlZHVjZSgodG90YWwsIGNvdW50KSA9PiB0b3RhbCArIGNvdW50LCAwKTtcbiAgICAgICAgICBjZWxsLmhhc1N1YkNvbHVtbnMgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdpZHRocy5wdXNoKChjZWxsLmNvbHVtbi53aWR0aCBhcyBzdHJpbmcpIHx8ICcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgnY29sU3BhbicgaW4gY29sdW1uKSB7XG4gICAgICAgICAgY29sU3BhbiA9IGNvbHVtbi5jb2xTcGFuITtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgncm93U3BhbicgaW4gY29sdW1uKSB7XG4gICAgICAgICAgY2VsbC5yb3dTcGFuID0gY29sdW1uLnJvd1NwYW47XG4gICAgICAgIH1cblxuICAgICAgICBjZWxsLmNvbFNwYW4gPSBjb2xTcGFuO1xuICAgICAgICBjZWxsLmNvbEVuZCA9IGNlbGwuY29sU3RhcnQgKyBjb2xTcGFuIC0gMTtcbiAgICAgICAgcm93c1tyb3dJbmRleF0ucHVzaChjZWxsIGFzIE56U2FmZUFueSk7XG5cbiAgICAgICAgY3VycmVudENvbEluZGV4ICs9IGNvbFNwYW47XG5cbiAgICAgICAgcmV0dXJuIGNvbFNwYW47XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGNvbFNwYW5zO1xuICAgIH07XG5cbiAgICBmaWxsUm93Q2VsbHMocm9vdENvbHVtbnMsIDApO1xuXG4gICAgLy8gSGFuZGxlIGByb3dTcGFuYFxuICAgIGNvbnN0IHJvd0NvdW50ID0gcm93cy5sZW5ndGg7XG4gICAgZm9yIChsZXQgcm93SW5kZXggPSAwOyByb3dJbmRleCA8IHJvd0NvdW50OyByb3dJbmRleCArPSAxKSB7XG4gICAgICByb3dzW3Jvd0luZGV4XS5mb3JFYWNoKGNlbGwgPT4ge1xuICAgICAgICBpZiAoISgncm93U3BhbicgaW4gY2VsbCkgJiYgIWNlbGwuaGFzU3ViQ29sdW1ucykge1xuICAgICAgICAgIGNlbGwucm93U3BhbiA9IHJvd0NvdW50IC0gcm93SW5kZXg7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7IGhlYWRlcnM6IHJvd3MsIGhlYWRlcldpZHRoczogcm93Q291bnQgPiAxID8gd2lkdGhzIDogbnVsbCB9O1xuICB9XG5cbiAgcHJpdmF0ZSBjbGVhbkNvbmQobGlzdDogX1NUQ29sdW1uW10pOiBfU1RDb2x1bW5bXSB7XG4gICAgY29uc3QgcmVzOiBfU1RDb2x1bW5bXSA9IFtdO1xuICAgIGNvbnN0IGNvcHlMaXN0ID0gZGVlcENvcHkobGlzdCk7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGNvcHlMaXN0KSB7XG4gICAgICBpZiAoaXRlbS5paWYgJiYgIWl0ZW0uaWlmKGl0ZW0pKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuYWNsICYmIGl0ZW0uYWNsICYmICF0aGlzLmFjbC5jYW4oaXRlbS5hY2wpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgcmVzLnB1c2goaXRlbSk7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBwcm9jZXNzKFxuICAgIGxpc3Q6IFNUQ29sdW1uW10sXG4gICAgb3B0aW9uczogU1RDb2x1bW5Tb3VyY2VQcm9jZXNzT3B0aW9ucyxcbiAgKTogeyBjb2x1bW5zOiBfU1RDb2x1bW5bXTsgaGVhZGVyczogX1NUQ29sdW1uW11bXTsgaGVhZGVyV2lkdGhzOiBzdHJpbmdbXSB8IG51bGwgfSB7XG4gICAgaWYgKCFsaXN0IHx8IGxpc3QubGVuZ3RoID09PSAwKSB0aHJvdyBuZXcgRXJyb3IoYFtzdF06IHRoZSBjb2x1bW5zIHByb3BlcnR5IG11c2UgYmUgZGVmaW5lIWApO1xuXG4gICAgY29uc3QgeyBub0luZGV4IH0gPSB0aGlzLmNvZztcbiAgICBsZXQgY2hlY2tib3hDb3VudCA9IDA7XG4gICAgbGV0IHJhZGlvQ291bnQgPSAwO1xuICAgIGxldCBwb2ludCA9IDA7XG4gICAgY29uc3QgY29sdW1uczogX1NUQ29sdW1uW10gPSBbXTtcblxuICAgIGNvbnN0IHByb2Nlc3NJdGVtID0gKGl0ZW06IF9TVENvbHVtbik6IF9TVENvbHVtbiA9PiB7XG4gICAgICAvLyBpbmRleFxuICAgICAgaWYgKGl0ZW0uaW5kZXgpIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGl0ZW0uaW5kZXgpKSB7XG4gICAgICAgICAgaXRlbS5pbmRleCA9IGl0ZW0uaW5kZXguc3BsaXQoJy4nKTtcbiAgICAgICAgfVxuICAgICAgICBpdGVtLmluZGV4S2V5ID0gaXRlbS5pbmRleC5qb2luKCcuJyk7XG4gICAgICB9XG5cbiAgICAgIC8vICNyZWdpb24gdGl0bGVcblxuICAgICAgY29uc3QgdGl0ID0gKHR5cGVvZiBpdGVtLnRpdGxlID09PSAnc3RyaW5nJyA/IHsgdGV4dDogaXRlbS50aXRsZSB9IDogaXRlbS50aXRsZSkgfHwge307XG4gICAgICBpZiAodGl0LmkxOG4gJiYgdGhpcy5pMThuU3J2KSB7XG4gICAgICAgIHRpdC50ZXh0ID0gdGhpcy5pMThuU3J2LmZhbnlpKHRpdC5pMThuKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aXQudGV4dCkge1xuICAgICAgICB0aXQuX3RleHQgPSB0aGlzLmRvbS5ieXBhc3NTZWN1cml0eVRydXN0SHRtbCh0aXQudGV4dCk7XG4gICAgICB9XG4gICAgICBpdGVtLnRpdGxlID0gdGl0O1xuXG4gICAgICAvLyAjZW5kcmVnaW9uXG5cbiAgICAgIC8vIG5vXG4gICAgICBpZiAoaXRlbS50eXBlID09PSAnbm8nKSB7XG4gICAgICAgIGl0ZW0ubm9JbmRleCA9IGl0ZW0ubm9JbmRleCA9PSBudWxsID8gbm9JbmRleCA6IGl0ZW0ubm9JbmRleDtcbiAgICAgIH1cbiAgICAgIC8vIGNoZWNrYm94XG4gICAgICBpZiAoaXRlbS5zZWxlY3Rpb25zID09IG51bGwpIHtcbiAgICAgICAgaXRlbS5zZWxlY3Rpb25zID0gW107XG4gICAgICB9XG4gICAgICBpZiAoaXRlbS50eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgICsrY2hlY2tib3hDb3VudDtcbiAgICAgICAgaWYgKCFpdGVtLndpZHRoKSB7XG4gICAgICAgICAgaXRlbS53aWR0aCA9IGAke2l0ZW0uc2VsZWN0aW9ucy5sZW5ndGggPiAwID8gNjIgOiA1MH1weGA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmFjbCkge1xuICAgICAgICBpdGVtLnNlbGVjdGlvbnMgPSBpdGVtLnNlbGVjdGlvbnMuZmlsdGVyKHcgPT4gdGhpcy5hY2wuY2FuKHcuYWNsKSk7XG4gICAgICB9XG4gICAgICAvLyByYWRpb1xuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgICArK3JhZGlvQ291bnQ7XG4gICAgICAgIGl0ZW0uc2VsZWN0aW9ucyA9IFtdO1xuICAgICAgICBpZiAoIWl0ZW0ud2lkdGgpIHtcbiAgICAgICAgICBpdGVtLndpZHRoID0gJzUwcHgnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyB0eXBlc1xuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ3luJykge1xuICAgICAgICBpdGVtLnluID0geyB0cnV0aDogdHJ1ZSwgLi4uaXRlbS55biB9O1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICAoaXRlbS50eXBlID09PSAnbGluaycgJiYgdHlwZW9mIGl0ZW0uY2xpY2sgIT09ICdmdW5jdGlvbicpIHx8XG4gICAgICAgIChpdGVtLnR5cGUgPT09ICdiYWRnZScgJiYgaXRlbS5iYWRnZSA9PSBudWxsKSB8fFxuICAgICAgICAoaXRlbS50eXBlID09PSAndGFnJyAmJiBpdGVtLnRhZyA9PSBudWxsKSB8fFxuICAgICAgICAoaXRlbS50eXBlID09PSAnZW51bScgJiYgaXRlbS5lbnVtID09IG51bGwpXG4gICAgICApIHtcbiAgICAgICAgaXRlbS50eXBlID0gJyc7XG4gICAgICB9XG4gICAgICBpdGVtLl9pc1RydW5jYXRlID0gISFpdGVtLndpZHRoICYmIG9wdGlvbnMud2lkdGhNb2RlLnN0cmljdEJlaGF2aW9yID09PSAndHJ1bmNhdGUnICYmIGl0ZW0udHlwZSAhPT0gJ2ltZyc7XG4gICAgICAvLyBjbGFzc05hbWVcbiAgICAgIGlmICghaXRlbS5jbGFzc05hbWUpIHtcbiAgICAgICAgaXRlbS5jbGFzc05hbWUgPSAoe1xuICAgICAgICAgIG51bWJlcjogJ3RleHQtcmlnaHQnLFxuICAgICAgICAgIGN1cnJlbmN5OiAndGV4dC1yaWdodCcsXG4gICAgICAgICAgZGF0ZTogJ3RleHQtY2VudGVyJyxcbiAgICAgICAgfSBhcyBOelNhZmVBbnkpW2l0ZW0udHlwZSFdO1xuICAgICAgfVxuICAgICAgaXRlbS5fY2xhc3NOYW1lID0gaXRlbS5jbGFzc05hbWUgfHwgKGl0ZW0uX2lzVHJ1bmNhdGUgPyAndGV4dC10cnVuY2F0ZScgOiBudWxsKTtcbiAgICAgIC8vIHdpZHRoXG4gICAgICBpZiAodHlwZW9mIGl0ZW0ud2lkdGggPT09ICdudW1iZXInKSB7XG4gICAgICAgIGl0ZW0ud2lkdGggPSBgJHtpdGVtLndpZHRofXB4YDtcbiAgICAgIH1cblxuICAgICAgLy8gc29ydGVyXG4gICAgICBpdGVtLl9zb3J0ID0gdGhpcy5zb3J0Q29lcmNlKGl0ZW0pO1xuICAgICAgLy8gZmlsdGVyXG4gICAgICBpdGVtLmZpbHRlciA9IHRoaXMuZmlsdGVyQ29lcmNlKGl0ZW0pIGFzIFNUQ29sdW1uRmlsdGVyO1xuICAgICAgLy8gYnV0dG9uc1xuICAgICAgaXRlbS5idXR0b25zID0gdGhpcy5idG5Db2VyY2UoaXRlbS5idXR0b25zISk7XG4gICAgICAvLyB3aWRnZXRcbiAgICAgIHRoaXMud2lkZ2V0Q29lcmNlKGl0ZW0pO1xuICAgICAgLy8gcmVzdG9yZSBjdXN0b20gcm93XG4gICAgICB0aGlzLnJlc3RvcmVSZW5kZXIoaXRlbSk7XG4gICAgICAvLyByZXNpemFibGVcbiAgICAgIGl0ZW0ucmVzaXphYmxlID0ge1xuICAgICAgICBkaXNhYmxlZDogdHJ1ZSxcbiAgICAgICAgYm91bmRzOiAnd2luZG93JyxcbiAgICAgICAgbWluV2lkdGg6IDYwLFxuICAgICAgICBtYXhXaWR0aDogMzYwLFxuICAgICAgICBwcmV2aWV3OiB0cnVlLFxuICAgICAgICAuLi5vcHRpb25zLnJlc2l6YWJsZSxcbiAgICAgICAgLi4uKHR5cGVvZiBpdGVtLnJlc2l6YWJsZSA9PT0gJ2Jvb2xlYW4nID8gKHsgZGlzYWJsZWQ6ICFpdGVtLnJlc2l6YWJsZSB9IGFzIFNUUmVzaXphYmxlKSA6IGl0ZW0ucmVzaXphYmxlKSxcbiAgICAgIH07XG5cbiAgICAgIGl0ZW0uX19wb2ludCA9IHBvaW50Kys7XG5cbiAgICAgIHJldHVybiBpdGVtO1xuICAgIH07XG5cbiAgICBjb25zdCBwcm9jZXNzTGlzdCA9IChkYXRhOiBfU1RDb2x1bW5bXSk6IHZvaWQgPT4ge1xuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgY29sdW1ucy5wdXNoKHByb2Nlc3NJdGVtKGl0ZW0pKTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbS5jaGlsZHJlbikpIHtcbiAgICAgICAgICBwcm9jZXNzTGlzdChpdGVtLmNoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBjb3B5TGlzdCA9IHRoaXMuY2xlYW5Db25kKGxpc3QgYXMgX1NUQ29sdW1uW10pO1xuICAgIHByb2Nlc3NMaXN0KGNvcHlMaXN0KTtcblxuICAgIGlmIChjaGVja2JveENvdW50ID4gMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBbc3RdOiBqdXN0IG9ubHkgb25lIGNvbHVtbiBjaGVja2JveGApO1xuICAgIH1cbiAgICBpZiAocmFkaW9Db3VudCA+IDEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgW3N0XToganVzdCBvbmx5IG9uZSBjb2x1bW4gcmFkaW9gKTtcbiAgICB9XG5cbiAgICB0aGlzLmZpeGVkQ29lcmNlKGNvbHVtbnMgYXMgX1NUQ29sdW1uW10pO1xuICAgIHJldHVybiB7IGNvbHVtbnM6IGNvbHVtbnMuZmlsdGVyKHcgPT4gIUFycmF5LmlzQXJyYXkody5jaGlsZHJlbikgfHwgdy5jaGlsZHJlbi5sZW5ndGggPT09IDApLCAuLi50aGlzLmdlbkhlYWRlcnMoY29weUxpc3QpIH07XG4gIH1cblxuICByZXN0b3JlQWxsUmVuZGVyKGNvbHVtbnM6IF9TVENvbHVtbltdKTogdm9pZCB7XG4gICAgY29sdW1ucy5mb3JFYWNoKGkgPT4gdGhpcy5yZXN0b3JlUmVuZGVyKGkpKTtcbiAgfVxuXG4gIHVwZGF0ZURlZmF1bHQoZmlsdGVyOiBTVENvbHVtbkZpbHRlcik6IHRoaXMge1xuICAgIGlmIChmaWx0ZXIudHlwZSA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICBmaWx0ZXIuZGVmYXVsdCA9IGZpbHRlci5tZW51cyEuZmluZEluZGV4KHcgPT4gdy5jaGVja2VkISkgIT09IC0xO1xuICAgIH0gZWxzZSB7XG4gICAgICBmaWx0ZXIuZGVmYXVsdCA9ICEhZmlsdGVyLm1lbnVzIVswXS52YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjbGVhbkZpbHRlcihjb2w6IF9TVENvbHVtbik6IHRoaXMge1xuICAgIGNvbnN0IGYgPSBjb2wuZmlsdGVyITtcbiAgICBmLmRlZmF1bHQgPSBmYWxzZTtcbiAgICBpZiAoZi50eXBlID09PSAnZGVmYXVsdCcpIHtcbiAgICAgIGYubWVudXMhLmZvckVhY2goaSA9PiAoaS5jaGVja2VkID0gZmFsc2UpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZi5tZW51cyFbMF0udmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG4iXX0=