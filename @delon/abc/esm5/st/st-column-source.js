/**
 * @fileoverview added by tsickle
 * Generated from: st-column-source.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __assign, __values } from "tslib";
import { Host, Inject, Injectable, Optional } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ACLService } from '@delon/acl';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { deepCopy } from '@delon/util';
import { STRowSource } from './st-row.directive';
import { STConfig } from './st.config';
var STColumnSource = /** @class */ (function () {
    function STColumnSource(dom, rowSource, acl, i18nSrv, cog) {
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
    STColumnSource.prototype.fixPop = /**
     * @private
     * @param {?} i
     * @param {?} def
     * @return {?}
     */
    function (i, def) {
        if (i.pop == null || i.pop === false) {
            i.pop = false;
            return;
        }
        /** @type {?} */
        var pop = __assign({}, def);
        if (typeof i.pop === 'string') {
            pop.title = i.pop;
        }
        else if (typeof i.pop === 'object') {
            pop = __assign(__assign({}, pop), i.pop);
        }
        if (typeof pop.condition !== 'function') {
            pop.condition = (/**
             * @return {?}
             */
            function () { return false; });
        }
        i.pop = pop;
    };
    /**
     * @private
     * @param {?} list
     * @return {?}
     */
    STColumnSource.prototype.btnCoerce = /**
     * @private
     * @param {?} list
     * @return {?}
     */
    function (list) {
        var e_1, _a;
        if (!list)
            return [];
        /** @type {?} */
        var ret = [];
        var _b = this.cog, modal = _b.modal, drawer = _b.drawer, pop = _b.pop, btnIcon = _b.btnIcon;
        try {
            for (var list_1 = __values(list), list_1_1 = list_1.next(); !list_1_1.done; list_1_1 = list_1.next()) {
                var item = list_1_1.value;
                if (this.acl && item.acl && !this.acl.can(item.acl)) {
                    continue;
                }
                if (item.type === 'modal' || item.type === 'static') {
                    if (item.modal == null || item.modal.component == null) {
                        console.warn("[st] Should specify modal parameter");
                        item.type = 'none';
                    }
                    else {
                        item.modal = __assign(__assign({ paramsName: 'record', size: 'lg' }, modal), item.modal);
                    }
                }
                if (item.type === 'drawer') {
                    if (item.drawer == null || item.drawer.component == null) {
                        console.warn("[st] Should specify drawer parameter");
                        item.type = 'none';
                    }
                    else {
                        item.drawer = __assign(__assign({ paramsName: 'record', size: 'lg' }, drawer), item.drawer);
                    }
                }
                if (item.type === 'del' && typeof item.pop === 'undefined') {
                    item.pop = true;
                }
                // pop
                this.fixPop(item, (/** @type {?} */ (pop)));
                if (item.icon) {
                    item.icon = __assign(__assign({}, btnIcon), (typeof item.icon === 'string' ? { type: item.icon } : item.icon));
                }
                item.children = item.children && item.children.length > 0 ? this.btnCoerce(item.children) : [];
                // i18n
                if (item.i18n && this.i18nSrv) {
                    item.text = this.i18nSrv.fanyi(item.i18n);
                }
                ret.push(item);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (list_1_1 && !list_1_1.done && (_a = list_1.return)) _a.call(list_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.btnCoerceIf(ret);
        return ret;
    };
    /**
     * @private
     * @param {?} list
     * @return {?}
     */
    STColumnSource.prototype.btnCoerceIf = /**
     * @private
     * @param {?} list
     * @return {?}
     */
    function (list) {
        var e_2, _a;
        try {
            for (var list_2 = __values(list), list_2_1 = list_2.next(); !list_2_1.done; list_2_1 = list_2.next()) {
                var item = list_2_1.value;
                if (!item.iif)
                    item.iif = (/**
                     * @return {?}
                     */
                    function () { return true; });
                item.iifBehavior = item.iifBehavior || this.cog.iifBehavior;
                if (item.children && item.children.length > 0) {
                    this.btnCoerceIf(item.children);
                }
                else {
                    item.children = [];
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (list_2_1 && !list_2_1.done && (_a = list_2.return)) _a.call(list_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    /**
     * @private
     * @param {?} list
     * @return {?}
     */
    STColumnSource.prototype.fixedCoerce = /**
     * @private
     * @param {?} list
     * @return {?}
     */
    function (list) {
        /** @type {?} */
        var countReduce = (/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) { return a + +(/** @type {?} */ (b.width)).toString().replace('px', ''); });
        // left width
        list
            .filter((/**
         * @param {?} w
         * @return {?}
         */
        function (w) { return w.fixed && w.fixed === 'left' && w.width; }))
            .forEach((/**
         * @param {?} item
         * @param {?} idx
         * @return {?}
         */
        function (item, idx) { return (item._left = list.slice(0, idx).reduce(countReduce, 0) + 'px'); }));
        // right width
        list
            .filter((/**
         * @param {?} w
         * @return {?}
         */
        function (w) { return w.fixed && w.fixed === 'right' && w.width; }))
            .reverse()
            .forEach((/**
         * @param {?} item
         * @param {?} idx
         * @return {?}
         */
        function (item, idx) { return (item._right = (idx > 0 ? list.slice(-idx).reduce(countReduce, 0) : 0) + 'px'); }));
    };
    /**
     * @private
     * @param {?} item
     * @return {?}
     */
    STColumnSource.prototype.sortCoerce = /**
     * @private
     * @param {?} item
     * @return {?}
     */
    function (item) {
        /** @type {?} */
        var res = this.fixCoerce(item);
        res.reName = __assign(__assign({}, this.cog.sortReName), res.reName);
        return res;
    };
    /**
     * @private
     * @param {?} item
     * @return {?}
     */
    STColumnSource.prototype.fixCoerce = /**
     * @private
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (typeof item.sort === 'undefined') {
            return { enabled: false };
        }
        /** @type {?} */
        var res = {};
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
    };
    /**
     * @private
     * @param {?} item
     * @return {?}
     */
    STColumnSource.prototype.filterCoerce = /**
     * @private
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var _this = this;
        if (item.filter == null) {
            return null;
        }
        /** @type {?} */
        var res = item.filter;
        res.type = res.type || 'default';
        /** @type {?} */
        var icon = 'filter';
        /** @type {?} */
        var iconTheme = 'fill';
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
        var baseIcon = (/** @type {?} */ ({ type: icon, theme: iconTheme }));
        if (typeof res.icon === 'string') {
            res.icon = (/** @type {?} */ (__assign(__assign({}, baseIcon), { type: res.icon })));
        }
        else {
            res.icon = __assign(__assign({}, baseIcon), res.icon);
        }
        this.updateDefault(res);
        if (this.acl) {
            res.menus = (/** @type {?} */ (res.menus)).filter((/**
             * @param {?} w
             * @return {?}
             */
            function (w) { return _this.acl.can(w.acl); }));
        }
        if ((/** @type {?} */ (res.menus)).length <= 0) {
            res = null;
        }
        return res;
    };
    /**
     * @private
     * @param {?} item
     * @return {?}
     */
    STColumnSource.prototype.restoreRender = /**
     * @private
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (item.renderTitle) {
            item.__renderTitle = this.rowSource.getTitle(item.renderTitle);
        }
        if (item.render) {
            item.__render = this.rowSource.getRow(item.render);
        }
    };
    /**
     * @param {?} list
     * @return {?}
     */
    STColumnSource.prototype.process = /**
     * @param {?} list
     * @return {?}
     */
    function (list) {
        var e_3, _a;
        var _this = this;
        if (!list || list.length === 0)
            throw new Error("[st]: the columns property muse be define!");
        var noIndex = this.cog.noIndex;
        /** @type {?} */
        var checkboxCount = 0;
        /** @type {?} */
        var radioCount = 0;
        /** @type {?} */
        var point = 0;
        /** @type {?} */
        var columns = [];
        /** @type {?} */
        var copyColumens = (/** @type {?} */ (deepCopy(list)));
        try {
            for (var copyColumens_1 = __values(copyColumens), copyColumens_1_1 = copyColumens_1.next(); !copyColumens_1_1.done; copyColumens_1_1 = copyColumens_1.next()) {
                var item = copyColumens_1_1.value;
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
                var tit = (typeof item.title === 'string' ? { text: item.title } : item.title) || {};
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
                        item.width = (item.selections.length > 0 ? 62 : 50) + "px";
                    }
                }
                if (this.acl) {
                    item.selections = item.selections.filter((/**
                     * @param {?} w
                     * @return {?}
                     */
                    function (w) { return _this.acl.can(w.acl); }));
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
                    item.yn = __assign({ truth: true }, item.yn);
                }
                if ((item.type === 'link' && typeof item.click !== 'function') ||
                    (item.type === 'badge' && item.badge == null) ||
                    (item.type === 'tag' && item.tag == null)) {
                    ((/** @type {?} */ (item))).type = '';
                }
                // className
                if (!item.className) {
                    item.className = ((/** @type {?} */ ({
                        number: 'text-right',
                        currency: 'text-right',
                        date: 'text-center',
                    })))[(/** @type {?} */ (item.type))];
                }
                // width
                if (typeof item.width === 'number') {
                    item.width = item.width + "px";
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
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (copyColumens_1_1 && !copyColumens_1_1.done && (_a = copyColumens_1.return)) _a.call(copyColumens_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
        if (checkboxCount > 1) {
            throw new Error("[st]: just only one column checkbox");
        }
        if (radioCount > 1) {
            throw new Error("[st]: just only one column radio");
        }
        this.fixedCoerce(columns);
        return columns;
    };
    /**
     * @param {?} columns
     * @return {?}
     */
    STColumnSource.prototype.restoreAllRender = /**
     * @param {?} columns
     * @return {?}
     */
    function (columns) {
        var _this = this;
        columns.forEach((/**
         * @param {?} i
         * @return {?}
         */
        function (i) { return _this.restoreRender(i); }));
    };
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} filter
     * @return {THIS}
     */
    STColumnSource.prototype.updateDefault = /**
     * @template THIS
     * @this {THIS}
     * @param {?} filter
     * @return {THIS}
     */
    function (filter) {
        if (filter.type === 'default') {
            filter.default = (/** @type {?} */ (filter.menus)).findIndex((/**
             * @param {?} w
             * @return {?}
             */
            function (w) { return (/** @type {?} */ (w.checked)); })) !== -1;
        }
        else {
            filter.default = !!(/** @type {?} */ (filter.menus))[0].value;
        }
        return (/** @type {?} */ (this));
    };
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} col
     * @return {THIS}
     */
    STColumnSource.prototype.cleanFilter = /**
     * @template THIS
     * @this {THIS}
     * @param {?} col
     * @return {THIS}
     */
    function (col) {
        /** @type {?} */
        var f = (/** @type {?} */ (col.filter));
        f.default = false;
        if (f.type === 'default') {
            (/** @type {?} */ (f.menus)).forEach((/**
             * @param {?} i
             * @return {?}
             */
            function (i) { return (i.checked = false); }));
        }
        else {
            (/** @type {?} */ (f.menus))[0].value = undefined;
        }
        return (/** @type {?} */ (this));
    };
    STColumnSource.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    STColumnSource.ctorParameters = function () { return [
        { type: DomSanitizer },
        { type: STRowSource, decorators: [{ type: Host }] },
        { type: ACLService, decorators: [{ type: Optional }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [ALAIN_I18N_TOKEN,] }] },
        { type: STConfig }
    ]; };
    return STColumnSource;
}());
export { STColumnSource };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtY29sdW1uLXNvdXJjZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvc3QvIiwic291cmNlcyI6WyJzdC1jb2x1bW4tc291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDeEMsT0FBTyxFQUFvQixnQkFBZ0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNsRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXZDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBR3ZDO0lBRUUsd0JBQ1UsR0FBaUIsRUFDVCxTQUFzQixFQUNsQixHQUFlLEVBQ1csT0FBeUIsRUFDL0QsR0FBYTtRQUpiLFFBQUcsR0FBSCxHQUFHLENBQWM7UUFDVCxjQUFTLEdBQVQsU0FBUyxDQUFhO1FBQ2xCLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDVyxZQUFPLEdBQVAsT0FBTyxDQUFrQjtRQUMvRCxRQUFHLEdBQUgsR0FBRyxDQUFVO0lBQ3BCLENBQUM7Ozs7Ozs7SUFFSSwrQkFBTTs7Ozs7O0lBQWQsVUFBZSxDQUFpQixFQUFFLEdBQXNCO1FBQ3RELElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxLQUFLLEVBQUU7WUFDcEMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7WUFDZCxPQUFPO1NBQ1I7O1lBRUcsR0FBRyxnQkFDRixHQUFHLENBQ1A7UUFDRCxJQUFJLE9BQU8sQ0FBQyxDQUFDLEdBQUcsS0FB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YWQsUUFBUTtnREFDUixRQUFRLFlBQUksTUFBTSxTQUFDLGdCQUFnQjtnQkFUL0IsUUFBUTs7SUFzVmpCLHFCQUFDO0NBQUEsQUFuVkQsSUFtVkM7U0FsVlksY0FBYzs7Ozs7O0lBRXZCLDZCQUF5Qjs7Ozs7SUFDekIsbUNBQXNDOzs7OztJQUN0Qyw2QkFBbUM7Ozs7O0lBQ25DLGlDQUF1RTs7Ozs7SUFDdkUsNkJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSG9zdCwgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBBQ0xTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL2FjbCc7XG5pbXBvcnQgeyBBbGFpbkkxOE5TZXJ2aWNlLCBBTEFJTl9JMThOX1RPS0VOIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IGRlZXBDb3B5IH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IFNUUm93U291cmNlIH0gZnJvbSAnLi9zdC1yb3cuZGlyZWN0aXZlJztcbmltcG9ydCB7IFNUQ29uZmlnIH0gZnJvbSAnLi9zdC5jb25maWcnO1xuaW1wb3J0IHsgU1RDb2x1bW4sIFNUQ29sdW1uQnV0dG9uLCBTVENvbHVtbkJ1dHRvblBvcCwgU1RDb2x1bW5GaWx0ZXIsIFNUSWNvbiwgU1RTb3J0TWFwIH0gZnJvbSAnLi9zdC5pbnRlcmZhY2VzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNUQ29sdW1uU291cmNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBkb206IERvbVNhbml0aXplcixcbiAgICBASG9zdCgpIHByaXZhdGUgcm93U291cmNlOiBTVFJvd1NvdXJjZSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGFjbDogQUNMU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KEFMQUlOX0kxOE5fVE9LRU4pIHByaXZhdGUgaTE4blNydjogQWxhaW5JMThOU2VydmljZSxcbiAgICBwcml2YXRlIGNvZzogU1RDb25maWcsXG4gICkge31cblxuICBwcml2YXRlIGZpeFBvcChpOiBTVENvbHVtbkJ1dHRvbiwgZGVmOiBTVENvbHVtbkJ1dHRvblBvcCk6IHZvaWQge1xuICAgIGlmIChpLnBvcCA9PSBudWxsIHx8IGkucG9wID09PSBmYWxzZSkge1xuICAgICAgaS5wb3AgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgcG9wID0ge1xuICAgICAgLi4uZGVmLFxuICAgIH07XG4gICAgaWYgKHR5cGVvZiBpLnBvcCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHBvcC50aXRsZSA9IGkucG9wO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGkucG9wID09PSAnb2JqZWN0Jykge1xuICAgICAgcG9wID0ge1xuICAgICAgICAuLi5wb3AsXG4gICAgICAgIC4uLmkucG9wLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHBvcC5jb25kaXRpb24gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHBvcC5jb25kaXRpb24gPSAoKSA9PiBmYWxzZTtcbiAgICB9XG5cbiAgICBpLnBvcCA9IHBvcDtcbiAgfVxuXG4gIHByaXZhdGUgYnRuQ29lcmNlKGxpc3Q6IFNUQ29sdW1uQnV0dG9uW10pOiBTVENvbHVtbkJ1dHRvbltdIHtcbiAgICBpZiAoIWxpc3QpIHJldHVybiBbXTtcbiAgICBjb25zdCByZXQ6IFNUQ29sdW1uQnV0dG9uW10gPSBbXTtcbiAgICBjb25zdCB7IG1vZGFsLCBkcmF3ZXIsIHBvcCwgYnRuSWNvbiB9ID0gdGhpcy5jb2c7XG5cbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgbGlzdCkge1xuICAgICAgaWYgKHRoaXMuYWNsICYmIGl0ZW0uYWNsICYmICF0aGlzLmFjbC5jYW4oaXRlbS5hY2wpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbS50eXBlID09PSAnbW9kYWwnIHx8IGl0ZW0udHlwZSA9PT0gJ3N0YXRpYycpIHtcbiAgICAgICAgaWYgKGl0ZW0ubW9kYWwgPT0gbnVsbCB8fCBpdGVtLm1vZGFsLmNvbXBvbmVudCA9PSBudWxsKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGBbc3RdIFNob3VsZCBzcGVjaWZ5IG1vZGFsIHBhcmFtZXRlcmApO1xuICAgICAgICAgIGl0ZW0udHlwZSA9ICdub25lJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtLm1vZGFsID0geyAuLi57IHBhcmFtc05hbWU6ICdyZWNvcmQnLCBzaXplOiAnbGcnIH0sIC4uLm1vZGFsLCAuLi5pdGVtLm1vZGFsIH07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ2RyYXdlcicpIHtcbiAgICAgICAgaWYgKGl0ZW0uZHJhd2VyID09IG51bGwgfHwgaXRlbS5kcmF3ZXIuY29tcG9uZW50ID09IG51bGwpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oYFtzdF0gU2hvdWxkIHNwZWNpZnkgZHJhd2VyIHBhcmFtZXRlcmApO1xuICAgICAgICAgIGl0ZW0udHlwZSA9ICdub25lJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtLmRyYXdlciA9IHsgLi4ueyBwYXJhbXNOYW1lOiAncmVjb3JkJywgc2l6ZTogJ2xnJyB9LCAuLi5kcmF3ZXIsIC4uLml0ZW0uZHJhd2VyIH07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ2RlbCcgJiYgdHlwZW9mIGl0ZW0ucG9wID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBpdGVtLnBvcCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIC8vIHBvcFxuICAgICAgdGhpcy5maXhQb3AoaXRlbSwgcG9wISk7XG5cbiAgICAgIGlmIChpdGVtLmljb24pIHtcbiAgICAgICAgaXRlbS5pY29uID0ge1xuICAgICAgICAgIC4uLmJ0bkljb24sXG4gICAgICAgICAgLi4uKHR5cGVvZiBpdGVtLmljb24gPT09ICdzdHJpbmcnID8geyB0eXBlOiBpdGVtLmljb24gfSA6IGl0ZW0uaWNvbiksXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGl0ZW0uY2hpbGRyZW4gPSBpdGVtLmNoaWxkcmVuICYmIGl0ZW0uY2hpbGRyZW4ubGVuZ3RoID4gMCA/IHRoaXMuYnRuQ29lcmNlKGl0ZW0uY2hpbGRyZW4pIDogW107XG5cbiAgICAgIC8vIGkxOG5cbiAgICAgIGlmIChpdGVtLmkxOG4gJiYgdGhpcy5pMThuU3J2KSB7XG4gICAgICAgIGl0ZW0udGV4dCA9IHRoaXMuaTE4blNydi5mYW55aShpdGVtLmkxOG4pO1xuICAgICAgfVxuXG4gICAgICByZXQucHVzaChpdGVtKTtcbiAgICB9XG4gICAgdGhpcy5idG5Db2VyY2VJZihyZXQpO1xuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBwcml2YXRlIGJ0bkNvZXJjZUlmKGxpc3Q6IFNUQ29sdW1uQnV0dG9uW10pIHtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgbGlzdCkge1xuICAgICAgaWYgKCFpdGVtLmlpZikgaXRlbS5paWYgPSAoKSA9PiB0cnVlO1xuICAgICAgaXRlbS5paWZCZWhhdmlvciA9IGl0ZW0uaWlmQmVoYXZpb3IgfHwgdGhpcy5jb2cuaWlmQmVoYXZpb3I7XG4gICAgICBpZiAoaXRlbS5jaGlsZHJlbiAmJiBpdGVtLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5idG5Db2VyY2VJZihpdGVtLmNoaWxkcmVuKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGl0ZW0uY2hpbGRyZW4gPSBbXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGZpeGVkQ29lcmNlKGxpc3Q6IFNUQ29sdW1uW10pIHtcbiAgICBjb25zdCBjb3VudFJlZHVjZSA9IChhOiBudW1iZXIsIGI6IFNUQ29sdW1uKSA9PiBhICsgK2Iud2lkdGghLnRvU3RyaW5nKCkucmVwbGFjZSgncHgnLCAnJyk7XG4gICAgLy8gbGVmdCB3aWR0aFxuICAgIGxpc3RcbiAgICAgIC5maWx0ZXIodyA9PiB3LmZpeGVkICYmIHcuZml4ZWQgPT09ICdsZWZ0JyAmJiB3LndpZHRoKVxuICAgICAgLmZvckVhY2goKGl0ZW0sIGlkeCkgPT4gKGl0ZW0uX2xlZnQgPSBsaXN0LnNsaWNlKDAsIGlkeCkucmVkdWNlKGNvdW50UmVkdWNlLCAwKSArICdweCcpKTtcbiAgICAvLyByaWdodCB3aWR0aFxuICAgIGxpc3RcbiAgICAgIC5maWx0ZXIodyA9PiB3LmZpeGVkICYmIHcuZml4ZWQgPT09ICdyaWdodCcgJiYgdy53aWR0aClcbiAgICAgIC5yZXZlcnNlKClcbiAgICAgIC5mb3JFYWNoKChpdGVtLCBpZHgpID0+IChpdGVtLl9yaWdodCA9IChpZHggPiAwID8gbGlzdC5zbGljZSgtaWR4KS5yZWR1Y2UoY291bnRSZWR1Y2UsIDApIDogMCkgKyAncHgnKSk7XG4gIH1cblxuICBwcml2YXRlIHNvcnRDb2VyY2UoaXRlbTogU1RDb2x1bW4pOiBTVFNvcnRNYXAge1xuICAgIGNvbnN0IHJlcyA9IHRoaXMuZml4Q29lcmNlKGl0ZW0pO1xuICAgIHJlcy5yZU5hbWUgPSB7XG4gICAgICAuLi50aGlzLmNvZy5zb3J0UmVOYW1lLFxuICAgICAgLi4ucmVzLnJlTmFtZSxcbiAgICB9O1xuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBwcml2YXRlIGZpeENvZXJjZShpdGVtOiBTVENvbHVtbik6IFNUU29ydE1hcCB7XG4gICAgaWYgKHR5cGVvZiBpdGVtLnNvcnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4geyBlbmFibGVkOiBmYWxzZSB9O1xuICAgIH1cblxuICAgIGxldCByZXM6IFNUU29ydE1hcCA9IHt9O1xuXG4gICAgaWYgKHR5cGVvZiBpdGVtLnNvcnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXMua2V5ID0gaXRlbS5zb3J0O1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGl0ZW0uc29ydCAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICByZXMgPSBpdGVtLnNvcnQ7XG4gICAgfVxuXG4gICAgaWYgKCFyZXMua2V5KSB7XG4gICAgICByZXMua2V5ID0gaXRlbS5pbmRleEtleTtcbiAgICB9XG5cbiAgICByZXMuZW5hYmxlZCA9IHRydWU7XG5cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgcHJpdmF0ZSBmaWx0ZXJDb2VyY2UoaXRlbTogU1RDb2x1bW4pOiBTVENvbHVtbkZpbHRlciB8IG51bGwge1xuICAgIGlmIChpdGVtLmZpbHRlciA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBsZXQgcmVzOiBTVENvbHVtbkZpbHRlciB8IG51bGwgPSBpdGVtLmZpbHRlcjtcbiAgICByZXMudHlwZSA9IHJlcy50eXBlIHx8ICdkZWZhdWx0JztcblxuICAgIGxldCBpY29uID0gJ2ZpbHRlcic7XG4gICAgbGV0IGljb25UaGVtZSA9ICdmaWxsJztcbiAgICBpZiAocmVzLnR5cGUgPT09ICdrZXl3b3JkJykge1xuICAgICAgaWYgKHJlcy5tZW51cyA9PSBudWxsIHx8IHJlcy5tZW51cyEubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJlcy5tZW51cyA9IFt7IHZhbHVlOiAnJyB9XTtcbiAgICAgIH1cbiAgICAgIGljb24gPSAnc2VhcmNoJztcbiAgICAgIGljb25UaGVtZSA9ICdvdXRsaW5lJztcbiAgICB9XG5cbiAgICBpZiAocmVzLm1lbnVzIS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcmVzLm11bHRpcGxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmVzLm11bHRpcGxlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXMuY29uZmlybVRleHQgPSByZXMuY29uZmlybVRleHQgfHwgdGhpcy5jb2cuZmlsdGVyQ29uZmlybVRleHQ7XG4gICAgcmVzLmNsZWFyVGV4dCA9IHJlcy5jbGVhclRleHQgfHwgdGhpcy5jb2cuZmlsdGVyQ2xlYXJUZXh0O1xuICAgIHJlcy5rZXkgPSByZXMua2V5IHx8IGl0ZW0uaW5kZXhLZXk7XG4gICAgcmVzLmljb24gPSByZXMuaWNvbiB8fCBpY29uO1xuXG4gICAgY29uc3QgYmFzZUljb24gPSB7IHR5cGU6IGljb24sIHRoZW1lOiBpY29uVGhlbWUgfSBhcyBTVEljb247XG4gICAgaWYgKHR5cGVvZiByZXMuaWNvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJlcy5pY29uID0geyAuLi5iYXNlSWNvbiwgdHlwZTogcmVzLmljb24gfSBhcyBTVEljb247XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcy5pY29uID0geyAuLi5iYXNlSWNvbiwgLi4ucmVzLmljb24gfTtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZURlZmF1bHQocmVzKTtcblxuICAgIGlmICh0aGlzLmFjbCkge1xuICAgICAgcmVzLm1lbnVzID0gcmVzLm1lbnVzIS5maWx0ZXIodyA9PiB0aGlzLmFjbC5jYW4ody5hY2wpKTtcbiAgICB9XG5cbiAgICBpZiAocmVzLm1lbnVzIS5sZW5ndGggPD0gMCkge1xuICAgICAgcmVzID0gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgcHJpdmF0ZSByZXN0b3JlUmVuZGVyKGl0ZW06IFNUQ29sdW1uKSB7XG4gICAgaWYgKGl0ZW0ucmVuZGVyVGl0bGUpIHtcbiAgICAgIGl0ZW0uX19yZW5kZXJUaXRsZSA9IHRoaXMucm93U291cmNlLmdldFRpdGxlKGl0ZW0ucmVuZGVyVGl0bGUpO1xuICAgIH1cbiAgICBpZiAoaXRlbS5yZW5kZXIpIHtcbiAgICAgIGl0ZW0uX19yZW5kZXIgPSB0aGlzLnJvd1NvdXJjZS5nZXRSb3coaXRlbS5yZW5kZXIpO1xuICAgIH1cbiAgfVxuXG4gIHByb2Nlc3MobGlzdDogU1RDb2x1bW5bXSk6IFNUQ29sdW1uW10ge1xuICAgIGlmICghbGlzdCB8fCBsaXN0Lmxlbmd0aCA9PT0gMCkgdGhyb3cgbmV3IEVycm9yKGBbc3RdOiB0aGUgY29sdW1ucyBwcm9wZXJ0eSBtdXNlIGJlIGRlZmluZSFgKTtcblxuICAgIGNvbnN0IHsgbm9JbmRleCB9ID0gdGhpcy5jb2c7XG4gICAgbGV0IGNoZWNrYm94Q291bnQgPSAwO1xuICAgIGxldCByYWRpb0NvdW50ID0gMDtcbiAgICBsZXQgcG9pbnQgPSAwO1xuICAgIGNvbnN0IGNvbHVtbnM6IFNUQ29sdW1uW10gPSBbXTtcbiAgICBjb25zdCBjb3B5Q29sdW1lbnMgPSBkZWVwQ29weShsaXN0KSBhcyBTVENvbHVtbltdO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiBjb3B5Q29sdW1lbnMpIHtcbiAgICAgIGlmIChpdGVtLmlpZiAmJiAhaXRlbS5paWYoaXRlbSkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5hY2wgJiYgaXRlbS5hY2wgJiYgIXRoaXMuYWNsLmNhbihpdGVtLmFjbCkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICAvLyBpbmRleFxuICAgICAgaWYgKGl0ZW0uaW5kZXgpIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGl0ZW0uaW5kZXgpKSB7XG4gICAgICAgICAgaXRlbS5pbmRleCA9IGl0ZW0uaW5kZXguc3BsaXQoJy4nKTtcbiAgICAgICAgfVxuICAgICAgICBpdGVtLmluZGV4S2V5ID0gaXRlbS5pbmRleC5qb2luKCcuJyk7XG4gICAgICB9XG5cbiAgICAgIC8vICNyZWdpb24gdGl0bGVcblxuICAgICAgY29uc3QgdGl0ID0gKHR5cGVvZiBpdGVtLnRpdGxlID09PSAnc3RyaW5nJyA/IHsgdGV4dDogaXRlbS50aXRsZSB9IDogaXRlbS50aXRsZSkgfHwge307XG4gICAgICBpZiAodGl0LmkxOG4gJiYgdGhpcy5pMThuU3J2KSB7XG4gICAgICAgIHRpdC50ZXh0ID0gdGhpcy5pMThuU3J2LmZhbnlpKHRpdC5pMThuKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aXQudGV4dCkge1xuICAgICAgICB0aXQuX3RleHQgPSB0aGlzLmRvbS5ieXBhc3NTZWN1cml0eVRydXN0SHRtbCh0aXQudGV4dCk7XG4gICAgICB9XG4gICAgICBpdGVtLnRpdGxlID0gdGl0O1xuXG4gICAgICAvLyAjZW5kcmVnaW9uXG5cbiAgICAgIC8vIG5vXG4gICAgICBpZiAoaXRlbS50eXBlID09PSAnbm8nKSB7XG4gICAgICAgIGl0ZW0ubm9JbmRleCA9IGl0ZW0ubm9JbmRleCA9PSBudWxsID8gbm9JbmRleCA6IGl0ZW0ubm9JbmRleDtcbiAgICAgIH1cbiAgICAgIC8vIGNoZWNrYm94XG4gICAgICBpZiAoaXRlbS5zZWxlY3Rpb25zID09IG51bGwpIHtcbiAgICAgICAgaXRlbS5zZWxlY3Rpb25zID0gW107XG4gICAgICB9XG4gICAgICBpZiAoaXRlbS50eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgICsrY2hlY2tib3hDb3VudDtcbiAgICAgICAgaWYgKCFpdGVtLndpZHRoKSB7XG4gICAgICAgICAgaXRlbS53aWR0aCA9IGAke2l0ZW0uc2VsZWN0aW9ucy5sZW5ndGggPiAwID8gNjIgOiA1MH1weGA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmFjbCkge1xuICAgICAgICBpdGVtLnNlbGVjdGlvbnMgPSBpdGVtLnNlbGVjdGlvbnMuZmlsdGVyKHcgPT4gdGhpcy5hY2wuY2FuKHcuYWNsKSk7XG4gICAgICB9XG4gICAgICAvLyByYWRpb1xuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgICArK3JhZGlvQ291bnQ7XG4gICAgICAgIGl0ZW0uc2VsZWN0aW9ucyA9IFtdO1xuICAgICAgICBpZiAoIWl0ZW0ud2lkdGgpIHtcbiAgICAgICAgICBpdGVtLndpZHRoID0gJzUwcHgnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyB0eXBlc1xuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ3luJykge1xuICAgICAgICBpdGVtLnluID0geyB0cnV0aDogdHJ1ZSwgLi4uaXRlbS55biB9O1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICAoaXRlbS50eXBlID09PSAnbGluaycgJiYgdHlwZW9mIGl0ZW0uY2xpY2sgIT09ICdmdW5jdGlvbicpIHx8XG4gICAgICAgIChpdGVtLnR5cGUgPT09ICdiYWRnZScgJiYgaXRlbS5iYWRnZSA9PSBudWxsKSB8fFxuICAgICAgICAoaXRlbS50eXBlID09PSAndGFnJyAmJiBpdGVtLnRhZyA9PSBudWxsKVxuICAgICAgKSB7XG4gICAgICAgIChpdGVtIGFzIGFueSkudHlwZSA9ICcnO1xuICAgICAgfVxuICAgICAgLy8gY2xhc3NOYW1lXG4gICAgICBpZiAoIWl0ZW0uY2xhc3NOYW1lKSB7XG4gICAgICAgIGl0ZW0uY2xhc3NOYW1lID0gKHtcbiAgICAgICAgICBudW1iZXI6ICd0ZXh0LXJpZ2h0JyxcbiAgICAgICAgICBjdXJyZW5jeTogJ3RleHQtcmlnaHQnLFxuICAgICAgICAgIGRhdGU6ICd0ZXh0LWNlbnRlcicsXG4gICAgICAgIH0gYXMgTnpTYWZlQW55KVtpdGVtLnR5cGUhXTtcbiAgICAgIH1cbiAgICAgIC8vIHdpZHRoXG4gICAgICBpZiAodHlwZW9mIGl0ZW0ud2lkdGggPT09ICdudW1iZXInKSB7XG4gICAgICAgIGl0ZW0ud2lkdGggPSBgJHtpdGVtLndpZHRofXB4YDtcbiAgICAgIH1cblxuICAgICAgLy8gc29ydGVyXG4gICAgICBpdGVtLl9zb3J0ID0gdGhpcy5zb3J0Q29lcmNlKGl0ZW0pO1xuICAgICAgLy8gZmlsdGVyXG4gICAgICBpdGVtLmZpbHRlciA9IHRoaXMuZmlsdGVyQ29lcmNlKGl0ZW0pIGFzIFNUQ29sdW1uRmlsdGVyO1xuICAgICAgLy8gYnV0dG9uc1xuICAgICAgaXRlbS5idXR0b25zID0gdGhpcy5idG5Db2VyY2UoaXRlbS5idXR0b25zISk7XG4gICAgICAvLyByZXN0b3JlIGN1c3RvbSByb3dcbiAgICAgIHRoaXMucmVzdG9yZVJlbmRlcihpdGVtKTtcblxuICAgICAgaXRlbS5fX3BvaW50ID0gcG9pbnQrKztcbiAgICAgIGNvbHVtbnMucHVzaChpdGVtKTtcbiAgICB9XG4gICAgaWYgKGNoZWNrYm94Q291bnQgPiAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFtzdF06IGp1c3Qgb25seSBvbmUgY29sdW1uIGNoZWNrYm94YCk7XG4gICAgfVxuICAgIGlmIChyYWRpb0NvdW50ID4gMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBbc3RdOiBqdXN0IG9ubHkgb25lIGNvbHVtbiByYWRpb2ApO1xuICAgIH1cblxuICAgIHRoaXMuZml4ZWRDb2VyY2UoY29sdW1ucyk7XG5cbiAgICByZXR1cm4gY29sdW1ucztcbiAgfVxuXG4gIHJlc3RvcmVBbGxSZW5kZXIoY29sdW1uczogU1RDb2x1bW5bXSkge1xuICAgIGNvbHVtbnMuZm9yRWFjaChpID0+IHRoaXMucmVzdG9yZVJlbmRlcihpKSk7XG4gIH1cblxuICB1cGRhdGVEZWZhdWx0KGZpbHRlcjogU1RDb2x1bW5GaWx0ZXIpOiB0aGlzIHtcbiAgICBpZiAoZmlsdGVyLnR5cGUgPT09ICdkZWZhdWx0Jykge1xuICAgICAgZmlsdGVyLmRlZmF1bHQgPSBmaWx0ZXIubWVudXMhLmZpbmRJbmRleCh3ID0+IHcuY2hlY2tlZCEpICE9PSAtMTtcbiAgICB9IGVsc2Uge1xuICAgICAgZmlsdGVyLmRlZmF1bHQgPSAhIWZpbHRlci5tZW51cyFbMF0udmFsdWU7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY2xlYW5GaWx0ZXIoY29sOiBTVENvbHVtbik6IHRoaXMge1xuICAgIGNvbnN0IGYgPSBjb2wuZmlsdGVyITtcbiAgICBmLmRlZmF1bHQgPSBmYWxzZTtcbiAgICBpZiAoZi50eXBlID09PSAnZGVmYXVsdCcpIHtcbiAgICAgIGYubWVudXMhLmZvckVhY2goaSA9PiAoaS5jaGVja2VkID0gZmFsc2UpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZi5tZW51cyFbMF0udmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG4iXX0=