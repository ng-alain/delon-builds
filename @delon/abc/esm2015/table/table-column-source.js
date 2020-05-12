/**
 * @fileoverview added by tsickle
 * Generated from: table-column-source.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DomSanitizer } from '@angular/platform-browser';
import { Host, Inject, Injectable, Optional } from '@angular/core';
import { ACLService } from '@delon/acl';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { deepCopy } from '@delon/util';
import { STRowSource } from './table-row.directive';
import { STConfig } from './table.config';
export class STColumnSource {
    /**
     * @param {?} dom
     * @param {?} rowSource
     * @param {?} acl
     * @param {?} i18nSrv
     * @param {?} cog
     */
    constructor(dom, rowSource, acl, i18nSrv, cog) {
        this.dom = dom;
        this.rowSource = rowSource;
        this.acl = acl;
        this.i18nSrv = i18nSrv;
        this.cog = cog;
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
            pop = Object.assign({}, pop, i.pop);
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
                    item.modal = Object.assign({ paramsName: 'record', size: 'lg' }, modal, item.modal);
                }
            }
            if (item.type === 'drawer') {
                if (item.drawer == null || item.drawer.component == null) {
                    console.warn(`[st] Should specify drawer parameter`);
                    item.type = 'none';
                }
                else {
                    item.drawer = Object.assign({ paramsName: 'record', size: 'lg' }, drawer, item.drawer);
                }
            }
            if (item.type === 'del' && typeof item.pop === 'undefined') {
                item.pop = true;
            }
            // pop
            this.fixPop(item, (/** @type {?} */ (pop)));
            if (item.icon) {
                item.icon = Object.assign({}, btnIcon, (typeof item.icon === 'string' ? { type: item.icon } : item.icon));
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
        const res = this.fixCoerce(item);
        res.reName = Object.assign({}, this.cog.sortReName, res.reName);
        return res;
    }
    /**
     * @private
     * @param {?} item
     * @return {?}
     */
    fixCoerce(item) {
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
            res.icon = (/** @type {?} */ (Object.assign({}, baseIcon, { type: res.icon })));
        }
        else {
            res.icon = Object.assign({}, baseIcon, res.icon);
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
     * @param {?} list
     * @return {?}
     */
    process(list) {
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
        const copyColumens = (/** @type {?} */ (deepCopy(list)));
        for (const item of copyColumens) {
            if (item.iif && !item.iif(item)) {
                continue;
            }
            if (this.acl && item.acl && !this.acl.can(item.acl)) {
                continue;
            }
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
                (item.type === 'tag' && item.tag == null)) {
                ((/** @type {?} */ (item))).type = '';
            }
            // className
            if (!item.className) {
                item.className = {
                    number: 'text-right',
                    currency: 'text-right',
                    date: 'text-center',
                }[(/** @type {?} */ (item.type))];
            }
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
            // restore custom row
            this.restoreRender(item);
            item.__point = point++;
            columns.push(item);
        }
        if (checkboxCount > 1) {
            throw new Error(`[st]: just only one column checkbox`);
        }
        if (radioCount > 1) {
            throw new Error(`[st]: just only one column radio`);
        }
        this.fixedCoerce(columns);
        return columns;
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
    { type: STConfig }
];
if (false) {
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
    STColumnSource.prototype.cog;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtY29sdW1uLXNvdXJjZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvdGFibGUvIiwic291cmNlcyI6WyJ0YWJsZS1jb2x1bW4tc291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUN4QyxPQUFPLEVBQW9CLGdCQUFnQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFdkMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUkxQyxNQUFNLE9BQU8sY0FBYzs7Ozs7Ozs7SUFDekIsWUFDVSxHQUFpQixFQUNULFNBQXNCLEVBQ2xCLEdBQWUsRUFDVyxPQUF5QixFQUMvRCxHQUFhO1FBSmIsUUFBRyxHQUFILEdBQUcsQ0FBYztRQUNULGNBQVMsR0FBVCxTQUFTLENBQWE7UUFDbEIsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUNXLFlBQU8sR0FBUCxPQUFPLENBQWtCO1FBQy9ELFFBQUcsR0FBSCxHQUFHLENBQVU7SUFDcEIsQ0FBQzs7Ozs7OztJQUVJLE1BQU0sQ0FBQyxDQUFpQixFQUFFLEdBQXNCO1FBQ3RELElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxLQUFLLEVBQUU7WUFDcEMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7WUFDZCxPQUFPO1NBQ1I7O1lBRUcsR0FBRyxxQkFDRixHQUFHLENBQ1A7UUFDRCxJQUFJLE9B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Q0FBQztJQUNkLENBQUM7Ozs7Ozs7SUFFRCxXQUFXLENBQUMsR0FBYTs7Y0FDakIsQ0FBQyxHQUFHLG1CQUFBLEdBQUcsQ0FBQyxNQUFNLEVBQUM7UUFDckIsQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDbEIsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUN4QixtQkFBQSxDQUFDLENBQUMsS0FBSyxFQUFDLENBQUMsT0FBTzs7OztZQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxFQUFDLENBQUM7U0FDNUM7YUFBTTtZQUNMLG1CQUFBLENBQUMsQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1NBQy9CO1FBQ0QsT0FBTyxtQkFBQSxJQUFJLEVBQUEsQ0FBQztJQUNkLENBQUM7OztZQWxWRixVQUFVOzs7O1lBVkYsWUFBWTtZQU1aLFdBQVcsdUJBUWYsSUFBSTtZQVpBLFVBQVUsdUJBYWQsUUFBUTs0Q0FDUixRQUFRLFlBQUksTUFBTSxTQUFDLGdCQUFnQjtZQVQvQixRQUFROzs7Ozs7O0lBTWIsNkJBQXlCOzs7OztJQUN6QixtQ0FBc0M7Ozs7O0lBQ3RDLDZCQUFtQzs7Ozs7SUFDbkMsaUNBQXVFOzs7OztJQUN2RSw2QkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEhvc3QsIEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFDTFNlcnZpY2UgfSBmcm9tICdAZGVsb24vYWNsJztcbmltcG9ydCB7IEFsYWluSTE4TlNlcnZpY2UsIEFMQUlOX0kxOE5fVE9LRU4gfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgZGVlcENvcHkgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbmltcG9ydCB7IFNUUm93U291cmNlIH0gZnJvbSAnLi90YWJsZS1yb3cuZGlyZWN0aXZlJztcbmltcG9ydCB7IFNUQ29uZmlnIH0gZnJvbSAnLi90YWJsZS5jb25maWcnO1xuaW1wb3J0IHsgU1RDb2x1bW4sIFNUQ29sdW1uQnV0dG9uLCBTVENvbHVtbkZpbHRlciwgU1RTb3J0TWFwLCBTVEljb24sIFNUQ29sdW1uQnV0dG9uUG9wIH0gZnJvbSAnLi90YWJsZS5pbnRlcmZhY2VzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNUQ29sdW1uU291cmNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBkb206IERvbVNhbml0aXplcixcbiAgICBASG9zdCgpIHByaXZhdGUgcm93U291cmNlOiBTVFJvd1NvdXJjZSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGFjbDogQUNMU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KEFMQUlOX0kxOE5fVE9LRU4pIHByaXZhdGUgaTE4blNydjogQWxhaW5JMThOU2VydmljZSxcbiAgICBwcml2YXRlIGNvZzogU1RDb25maWcsXG4gICkge31cblxuICBwcml2YXRlIGZpeFBvcChpOiBTVENvbHVtbkJ1dHRvbiwgZGVmOiBTVENvbHVtbkJ1dHRvblBvcCk6IHZvaWQge1xuICAgIGlmIChpLnBvcCA9PSBudWxsIHx8IGkucG9wID09PSBmYWxzZSkge1xuICAgICAgaS5wb3AgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgcG9wID0ge1xuICAgICAgLi4uZGVmLFxuICAgIH07XG4gICAgaWYgKHR5cGVvZiBpLnBvcCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHBvcC50aXRsZSA9IGkucG9wO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGkucG9wID09PSAnb2JqZWN0Jykge1xuICAgICAgcG9wID0ge1xuICAgICAgICAuLi5wb3AsXG4gICAgICAgIC4uLmkucG9wLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHBvcC5jb25kaXRpb24gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHBvcC5jb25kaXRpb24gPSAoKSA9PiBmYWxzZTtcbiAgICB9XG5cbiAgICBpLnBvcCA9IHBvcDtcbiAgfVxuXG4gIHByaXZhdGUgYnRuQ29lcmNlKGxpc3Q6IFNUQ29sdW1uQnV0dG9uW10pOiBTVENvbHVtbkJ1dHRvbltdIHtcbiAgICBpZiAoIWxpc3QpIHJldHVybiBbXTtcbiAgICBjb25zdCByZXQ6IFNUQ29sdW1uQnV0dG9uW10gPSBbXTtcbiAgICBjb25zdCB7IG1vZGFsLCBkcmF3ZXIsIHBvcCwgYnRuSWNvbiB9ID0gdGhpcy5jb2c7XG5cbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgbGlzdCkge1xuICAgICAgaWYgKHRoaXMuYWNsICYmIGl0ZW0uYWNsICYmICF0aGlzLmFjbC5jYW4oaXRlbS5hY2wpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbS50eXBlID09PSAnbW9kYWwnIHx8IGl0ZW0udHlwZSA9PT0gJ3N0YXRpYycpIHtcbiAgICAgICAgaWYgKGl0ZW0ubW9kYWwgPT0gbnVsbCB8fCBpdGVtLm1vZGFsLmNvbXBvbmVudCA9PSBudWxsKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGBbc3RdIFNob3VsZCBzcGVjaWZ5IG1vZGFsIHBhcmFtZXRlcmApO1xuICAgICAgICAgIGl0ZW0udHlwZSA9ICdub25lJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtLm1vZGFsID0geyAuLi57IHBhcmFtc05hbWU6ICdyZWNvcmQnLCBzaXplOiAnbGcnIH0sIC4uLm1vZGFsLCAuLi5pdGVtLm1vZGFsIH07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ2RyYXdlcicpIHtcbiAgICAgICAgaWYgKGl0ZW0uZHJhd2VyID09IG51bGwgfHwgaXRlbS5kcmF3ZXIuY29tcG9uZW50ID09IG51bGwpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oYFtzdF0gU2hvdWxkIHNwZWNpZnkgZHJhd2VyIHBhcmFtZXRlcmApO1xuICAgICAgICAgIGl0ZW0udHlwZSA9ICdub25lJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtLmRyYXdlciA9IHsgLi4ueyBwYXJhbXNOYW1lOiAncmVjb3JkJywgc2l6ZTogJ2xnJyB9LCAuLi5kcmF3ZXIsIC4uLml0ZW0uZHJhd2VyIH07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ2RlbCcgJiYgdHlwZW9mIGl0ZW0ucG9wID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBpdGVtLnBvcCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIC8vIHBvcFxuICAgICAgdGhpcy5maXhQb3AoaXRlbSwgcG9wISk7XG5cbiAgICAgIGlmIChpdGVtLmljb24pIHtcbiAgICAgICAgaXRlbS5pY29uID0ge1xuICAgICAgICAgIC4uLmJ0bkljb24sXG4gICAgICAgICAgLi4uKHR5cGVvZiBpdGVtLmljb24gPT09ICdzdHJpbmcnID8geyB0eXBlOiBpdGVtLmljb24gfSA6IGl0ZW0uaWNvbiksXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGl0ZW0uY2hpbGRyZW4gPSBpdGVtLmNoaWxkcmVuICYmIGl0ZW0uY2hpbGRyZW4ubGVuZ3RoID4gMCA/IHRoaXMuYnRuQ29lcmNlKGl0ZW0uY2hpbGRyZW4pIDogW107XG5cbiAgICAgIC8vIGkxOG5cbiAgICAgIGlmIChpdGVtLmkxOG4gJiYgdGhpcy5pMThuU3J2KSB7XG4gICAgICAgIGl0ZW0udGV4dCA9IHRoaXMuaTE4blNydi5mYW55aShpdGVtLmkxOG4pO1xuICAgICAgfVxuXG4gICAgICByZXQucHVzaChpdGVtKTtcbiAgICB9XG4gICAgdGhpcy5idG5Db2VyY2VJZihyZXQpO1xuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBwcml2YXRlIGJ0bkNvZXJjZUlmKGxpc3Q6IFNUQ29sdW1uQnV0dG9uW10pIHtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgbGlzdCkge1xuICAgICAgaWYgKCFpdGVtLmlpZikgaXRlbS5paWYgPSAoKSA9PiB0cnVlO1xuICAgICAgaXRlbS5paWZCZWhhdmlvciA9IGl0ZW0uaWlmQmVoYXZpb3IgfHwgdGhpcy5jb2cuaWlmQmVoYXZpb3I7XG4gICAgICBpZiAoaXRlbS5jaGlsZHJlbiAmJiBpdGVtLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5idG5Db2VyY2VJZihpdGVtLmNoaWxkcmVuKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGl0ZW0uY2hpbGRyZW4gPSBbXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGZpeGVkQ29lcmNlKGxpc3Q6IFNUQ29sdW1uW10pIHtcbiAgICBjb25zdCBjb3VudFJlZHVjZSA9IChhOiBudW1iZXIsIGI6IFNUQ29sdW1uKSA9PiBhICsgK2Iud2lkdGghLnRvU3RyaW5nKCkucmVwbGFjZSgncHgnLCAnJyk7XG4gICAgLy8gbGVmdCB3aWR0aFxuICAgIGxpc3RcbiAgICAgIC5maWx0ZXIodyA9PiB3LmZpeGVkICYmIHcuZml4ZWQgPT09ICdsZWZ0JyAmJiB3LndpZHRoKVxuICAgICAgLmZvckVhY2goKGl0ZW0sIGlkeCkgPT4gKGl0ZW0uX2xlZnQgPSBsaXN0LnNsaWNlKDAsIGlkeCkucmVkdWNlKGNvdW50UmVkdWNlLCAwKSArICdweCcpKTtcbiAgICAvLyByaWdodCB3aWR0aFxuICAgIGxpc3RcbiAgICAgIC5maWx0ZXIodyA9PiB3LmZpeGVkICYmIHcuZml4ZWQgPT09ICdyaWdodCcgJiYgdy53aWR0aClcbiAgICAgIC5yZXZlcnNlKClcbiAgICAgIC5mb3JFYWNoKChpdGVtLCBpZHgpID0+IChpdGVtLl9yaWdodCA9IChpZHggPiAwID8gbGlzdC5zbGljZSgtaWR4KS5yZWR1Y2UoY291bnRSZWR1Y2UsIDApIDogMCkgKyAncHgnKSk7XG4gIH1cblxuICBwcml2YXRlIHNvcnRDb2VyY2UoaXRlbTogU1RDb2x1bW4pOiBTVFNvcnRNYXAge1xuICAgIGNvbnN0IHJlcyA9IHRoaXMuZml4Q29lcmNlKGl0ZW0pO1xuICAgIHJlcy5yZU5hbWUgPSB7XG4gICAgICAuLi50aGlzLmNvZy5zb3J0UmVOYW1lLFxuICAgICAgLi4ucmVzLnJlTmFtZSxcbiAgICB9O1xuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBwcml2YXRlIGZpeENvZXJjZShpdGVtOiBTVENvbHVtbik6IFNUU29ydE1hcCB7XG4gICAgaWYgKHR5cGVvZiBpdGVtLnNvcnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4geyBlbmFibGVkOiBmYWxzZSB9O1xuICAgIH1cblxuICAgIGxldCByZXM6IFNUU29ydE1hcCA9IHt9O1xuXG4gICAgaWYgKHR5cGVvZiBpdGVtLnNvcnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXMua2V5ID0gaXRlbS5zb3J0O1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGl0ZW0uc29ydCAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICByZXMgPSBpdGVtLnNvcnQ7XG4gICAgfVxuXG4gICAgaWYgKCFyZXMua2V5KSB7XG4gICAgICByZXMua2V5ID0gaXRlbS5pbmRleEtleTtcbiAgICB9XG5cbiAgICByZXMuZW5hYmxlZCA9IHRydWU7XG5cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgcHJpdmF0ZSBmaWx0ZXJDb2VyY2UoaXRlbTogU1RDb2x1bW4pOiBTVENvbHVtbkZpbHRlciB8IG51bGwge1xuICAgIGlmIChpdGVtLmZpbHRlciA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBsZXQgcmVzOiBTVENvbHVtbkZpbHRlciB8IG51bGwgPSBpdGVtLmZpbHRlcjtcbiAgICByZXMudHlwZSA9IHJlcy50eXBlIHx8ICdkZWZhdWx0JztcblxuICAgIGxldCBpY29uID0gJ2ZpbHRlcic7XG4gICAgbGV0IGljb25UaGVtZSA9ICdmaWxsJztcbiAgICBpZiAocmVzLnR5cGUgPT09ICdrZXl3b3JkJykge1xuICAgICAgaWYgKHJlcy5tZW51cyA9PSBudWxsIHx8IHJlcy5tZW51cyEubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJlcy5tZW51cyA9IFt7IHZhbHVlOiAnJyB9XTtcbiAgICAgIH1cbiAgICAgIGljb24gPSAnc2VhcmNoJztcbiAgICAgIGljb25UaGVtZSA9ICdvdXRsaW5lJztcbiAgICB9XG5cbiAgICBpZiAocmVzLm1lbnVzIS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcmVzLm11bHRpcGxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmVzLm11bHRpcGxlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXMuY29uZmlybVRleHQgPSByZXMuY29uZmlybVRleHQgfHwgdGhpcy5jb2cuZmlsdGVyQ29uZmlybVRleHQ7XG4gICAgcmVzLmNsZWFyVGV4dCA9IHJlcy5jbGVhclRleHQgfHwgdGhpcy5jb2cuZmlsdGVyQ2xlYXJUZXh0O1xuICAgIHJlcy5rZXkgPSByZXMua2V5IHx8IGl0ZW0uaW5kZXhLZXk7XG4gICAgcmVzLmljb24gPSByZXMuaWNvbiB8fCBpY29uO1xuXG4gICAgY29uc3QgYmFzZUljb24gPSB7IHR5cGU6IGljb24sIHRoZW1lOiBpY29uVGhlbWUgfSBhcyBTVEljb247XG4gICAgaWYgKHR5cGVvZiByZXMuaWNvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJlcy5pY29uID0geyAuLi5iYXNlSWNvbiwgdHlwZTogcmVzLmljb24gfSBhcyBTVEljb247XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcy5pY29uID0geyAuLi5iYXNlSWNvbiwgLi4ucmVzLmljb24gfTtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZURlZmF1bHQocmVzKTtcblxuICAgIGlmICh0aGlzLmFjbCkge1xuICAgICAgcmVzLm1lbnVzID0gcmVzLm1lbnVzIS5maWx0ZXIodyA9PiB0aGlzLmFjbC5jYW4ody5hY2wpKTtcbiAgICB9XG5cbiAgICBpZiAocmVzLm1lbnVzIS5sZW5ndGggPD0gMCkge1xuICAgICAgcmVzID0gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgcHJpdmF0ZSByZXN0b3JlUmVuZGVyKGl0ZW06IFNUQ29sdW1uKSB7XG4gICAgaWYgKGl0ZW0ucmVuZGVyVGl0bGUpIHtcbiAgICAgIGl0ZW0uX19yZW5kZXJUaXRsZSA9IHRoaXMucm93U291cmNlLmdldFRpdGxlKGl0ZW0ucmVuZGVyVGl0bGUpO1xuICAgIH1cbiAgICBpZiAoaXRlbS5yZW5kZXIpIHtcbiAgICAgIGl0ZW0uX19yZW5kZXIgPSB0aGlzLnJvd1NvdXJjZS5nZXRSb3coaXRlbS5yZW5kZXIpO1xuICAgIH1cbiAgfVxuXG4gIHByb2Nlc3MobGlzdDogU1RDb2x1bW5bXSk6IFNUQ29sdW1uW10ge1xuICAgIGlmICghbGlzdCB8fCBsaXN0Lmxlbmd0aCA9PT0gMCkgdGhyb3cgbmV3IEVycm9yKGBbc3RdOiB0aGUgY29sdW1ucyBwcm9wZXJ0eSBtdXNlIGJlIGRlZmluZSFgKTtcblxuICAgIGNvbnN0IHsgbm9JbmRleCB9ID0gdGhpcy5jb2c7XG4gICAgbGV0IGNoZWNrYm94Q291bnQgPSAwO1xuICAgIGxldCByYWRpb0NvdW50ID0gMDtcbiAgICBsZXQgcG9pbnQgPSAwO1xuICAgIGNvbnN0IGNvbHVtbnM6IFNUQ29sdW1uW10gPSBbXTtcbiAgICBjb25zdCBjb3B5Q29sdW1lbnMgPSBkZWVwQ29weShsaXN0KSBhcyBTVENvbHVtbltdO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiBjb3B5Q29sdW1lbnMpIHtcbiAgICAgIGlmIChpdGVtLmlpZiAmJiAhaXRlbS5paWYoaXRlbSkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5hY2wgJiYgaXRlbS5hY2wgJiYgIXRoaXMuYWNsLmNhbihpdGVtLmFjbCkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICAvLyBpbmRleFxuICAgICAgaWYgKGl0ZW0uaW5kZXgpIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGl0ZW0uaW5kZXgpKSB7XG4gICAgICAgICAgaXRlbS5pbmRleCA9IGl0ZW0uaW5kZXguc3BsaXQoJy4nKTtcbiAgICAgICAgfVxuICAgICAgICBpdGVtLmluZGV4S2V5ID0gaXRlbS5pbmRleC5qb2luKCcuJyk7XG4gICAgICB9XG5cbiAgICAgIC8vICNyZWdpb24gdGl0bGVcblxuICAgICAgY29uc3QgdGl0ID0gKHR5cGVvZiBpdGVtLnRpdGxlID09PSAnc3RyaW5nJyA/IHsgdGV4dDogaXRlbS50aXRsZSB9IDogaXRlbS50aXRsZSkgfHwge307XG4gICAgICBpZiAodGl0LmkxOG4gJiYgdGhpcy5pMThuU3J2KSB7XG4gICAgICAgIHRpdC50ZXh0ID0gdGhpcy5pMThuU3J2LmZhbnlpKHRpdC5pMThuKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aXQudGV4dCkge1xuICAgICAgICB0aXQuX3RleHQgPSB0aGlzLmRvbS5ieXBhc3NTZWN1cml0eVRydXN0SHRtbCh0aXQudGV4dCk7XG4gICAgICB9XG4gICAgICBpdGVtLnRpdGxlID0gdGl0O1xuXG4gICAgICAvLyAjZW5kcmVnaW9uXG5cbiAgICAgIC8vIG5vXG4gICAgICBpZiAoaXRlbS50eXBlID09PSAnbm8nKSB7XG4gICAgICAgIGl0ZW0ubm9JbmRleCA9IGl0ZW0ubm9JbmRleCA9PSBudWxsID8gbm9JbmRleCA6IGl0ZW0ubm9JbmRleDtcbiAgICAgIH1cbiAgICAgIC8vIGNoZWNrYm94XG4gICAgICBpZiAoaXRlbS5zZWxlY3Rpb25zID09IG51bGwpIHtcbiAgICAgICAgaXRlbS5zZWxlY3Rpb25zID0gW107XG4gICAgICB9XG4gICAgICBpZiAoaXRlbS50eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgICsrY2hlY2tib3hDb3VudDtcbiAgICAgICAgaWYgKCFpdGVtLndpZHRoKSB7XG4gICAgICAgICAgaXRlbS53aWR0aCA9IGAke2l0ZW0uc2VsZWN0aW9ucy5sZW5ndGggPiAwID8gNjIgOiA1MH1weGA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmFjbCkge1xuICAgICAgICBpdGVtLnNlbGVjdGlvbnMgPSBpdGVtLnNlbGVjdGlvbnMuZmlsdGVyKHcgPT4gdGhpcy5hY2wuY2FuKHcuYWNsKSk7XG4gICAgICB9XG4gICAgICAvLyByYWRpb1xuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgICArK3JhZGlvQ291bnQ7XG4gICAgICAgIGl0ZW0uc2VsZWN0aW9ucyA9IFtdO1xuICAgICAgICBpZiAoIWl0ZW0ud2lkdGgpIHtcbiAgICAgICAgICBpdGVtLndpZHRoID0gJzUwcHgnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyB0eXBlc1xuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ3luJykge1xuICAgICAgICBpdGVtLnluID0geyB0cnV0aDogdHJ1ZSwgLi4uaXRlbS55biB9O1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICAoaXRlbS50eXBlID09PSAnbGluaycgJiYgdHlwZW9mIGl0ZW0uY2xpY2sgIT09ICdmdW5jdGlvbicpIHx8XG4gICAgICAgIChpdGVtLnR5cGUgPT09ICdiYWRnZScgJiYgaXRlbS5iYWRnZSA9PSBudWxsKSB8fFxuICAgICAgICAoaXRlbS50eXBlID09PSAndGFnJyAmJiBpdGVtLnRhZyA9PSBudWxsKVxuICAgICAgKSB7XG4gICAgICAgIChpdGVtIGFzIGFueSkudHlwZSA9ICcnO1xuICAgICAgfVxuICAgICAgLy8gY2xhc3NOYW1lXG4gICAgICBpZiAoIWl0ZW0uY2xhc3NOYW1lKSB7XG4gICAgICAgIGl0ZW0uY2xhc3NOYW1lID0ge1xuICAgICAgICAgIG51bWJlcjogJ3RleHQtcmlnaHQnLFxuICAgICAgICAgIGN1cnJlbmN5OiAndGV4dC1yaWdodCcsXG4gICAgICAgICAgZGF0ZTogJ3RleHQtY2VudGVyJyxcbiAgICAgICAgfVtpdGVtLnR5cGUhXTtcbiAgICAgIH1cbiAgICAgIC8vIHdpZHRoXG4gICAgICBpZiAodHlwZW9mIGl0ZW0ud2lkdGggPT09ICdudW1iZXInKSB7XG4gICAgICAgIGl0ZW0ud2lkdGggPSBgJHtpdGVtLndpZHRofXB4YDtcbiAgICAgIH1cblxuICAgICAgLy8gc29ydGVyXG4gICAgICBpdGVtLl9zb3J0ID0gdGhpcy5zb3J0Q29lcmNlKGl0ZW0pO1xuICAgICAgLy8gZmlsdGVyXG4gICAgICBpdGVtLmZpbHRlciA9IHRoaXMuZmlsdGVyQ29lcmNlKGl0ZW0pIGFzIFNUQ29sdW1uRmlsdGVyO1xuICAgICAgLy8gYnV0dG9uc1xuICAgICAgaXRlbS5idXR0b25zID0gdGhpcy5idG5Db2VyY2UoaXRlbS5idXR0b25zISk7XG4gICAgICAvLyByZXN0b3JlIGN1c3RvbSByb3dcbiAgICAgIHRoaXMucmVzdG9yZVJlbmRlcihpdGVtKTtcblxuICAgICAgaXRlbS5fX3BvaW50ID0gcG9pbnQrKztcbiAgICAgIGNvbHVtbnMucHVzaChpdGVtKTtcbiAgICB9XG4gICAgaWYgKGNoZWNrYm94Q291bnQgPiAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFtzdF06IGp1c3Qgb25seSBvbmUgY29sdW1uIGNoZWNrYm94YCk7XG4gICAgfVxuICAgIGlmIChyYWRpb0NvdW50ID4gMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBbc3RdOiBqdXN0IG9ubHkgb25lIGNvbHVtbiByYWRpb2ApO1xuICAgIH1cblxuICAgIHRoaXMuZml4ZWRDb2VyY2UoY29sdW1ucyk7XG5cbiAgICByZXR1cm4gY29sdW1ucztcbiAgfVxuXG4gIHJlc3RvcmVBbGxSZW5kZXIoY29sdW1uczogU1RDb2x1bW5bXSkge1xuICAgIGNvbHVtbnMuZm9yRWFjaChpID0+IHRoaXMucmVzdG9yZVJlbmRlcihpKSk7XG4gIH1cblxuICB1cGRhdGVEZWZhdWx0KGZpbHRlcjogU1RDb2x1bW5GaWx0ZXIpOiB0aGlzIHtcbiAgICBpZiAoZmlsdGVyLnR5cGUgPT09ICdkZWZhdWx0Jykge1xuICAgICAgZmlsdGVyLmRlZmF1bHQgPSBmaWx0ZXIubWVudXMhLmZpbmRJbmRleCh3ID0+IHcuY2hlY2tlZCEpICE9PSAtMTtcbiAgICB9IGVsc2Uge1xuICAgICAgZmlsdGVyLmRlZmF1bHQgPSAhIWZpbHRlci5tZW51cyFbMF0udmFsdWU7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY2xlYW5GaWx0ZXIoY29sOiBTVENvbHVtbik6IHRoaXMge1xuICAgIGNvbnN0IGYgPSBjb2wuZmlsdGVyITtcbiAgICBmLmRlZmF1bHQgPSBmYWxzZTtcbiAgICBpZiAoZi50eXBlID09PSAnZGVmYXVsdCcpIHtcbiAgICAgIGYubWVudXMhLmZvckVhY2goaSA9PiAoaS5jaGVja2VkID0gZmFsc2UpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZi5tZW51cyFbMF0udmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG4iXX0=