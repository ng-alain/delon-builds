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
import { deepCopy, warn } from '@delon/util';
import { STRowSource } from './st-row.directive';
import { STWidgetRegistry } from './st-widget';
var STColumnSource = /** @class */ (function () {
    function STColumnSource(dom, rowSource, acl, i18nSrv, stWidgetRegistry) {
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
    STColumnSource.prototype.setCog = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.cog = val;
    };
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
     * @private
     * @param {?} item
     * @return {?}
     */
    STColumnSource.prototype.widgetCoerce = /**
     * @private
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var _a;
        if (item.type !== 'widget')
            return;
        if (item.widget == null || !this.stWidgetRegistry.has(item.widget.type)) {
            delete item.type;
            warn("st: No widget for type \"" + ((_a = item.widget) === null || _a === void 0 ? void 0 : _a.type) + "\"");
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
                // widget
                this.widgetCoerce(item);
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
        { type: STWidgetRegistry }
    ]; };
    return STColumnSource;
}());
export { STColumnSource };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtY29sdW1uLXNvdXJjZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvc3QvIiwic291cmNlcyI6WyJzdC1jb2x1bW4tc291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDeEMsT0FBTyxFQUFvQixnQkFBZ0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNsRSxPQUFPLEVBQWlCLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFNUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUcvQztJQUlFLHdCQUNVLEdBQWlCLEVBQ1QsU0FBc0IsRUFDbEIsR0FBZSxFQUNXLE9BQXlCLEVBQy9ELGdCQUFrQztRQUpsQyxRQUFHLEdBQUgsR0FBRyxDQUFjO1FBQ1QsY0FBUyxHQUFULFNBQVMsQ0FBYTtRQUNsQixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQ1csWUFBTyxHQUFQLE9BQU8sQ0FBa0I7UUFDL0QscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUN6QyxDQUFDOzs7OztJQUVKLCtCQUFNOzs7O0lBQU4sVUFBTyxHQUFrQjtRQUN2QixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNqQixDQUFDOzs7Ozs7O0lBRU8sK0JBQU07Ozs7OztJQUFkLFVBQWUsQ0FBaUIsRUFBRSxHQUFzQjtRQUN0RCxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssS0FBSyxFQUFFO1lBQ3BDLENBQUMsQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO1lBQ2QsT0FBTztTQUNSOztZQUVHLEdBQUcsZ0JBQ0YsR0FBRyxDQUNQO1FBQ0QsSUFBSSxPQUFPLENBQUMsQ0FBQyxHQUFHLEtBQUssUUFBUSxFQUFFO1lBQzdCLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQztTQUNuQjthQUFNLElBQUksT0FBTyxDQUFDLENBQUMsR0FBRyxLQUFLLFFBQVEsRUFBRTtZQUNwQyxHQUFHLHlCQUNFLEdBQUcsR0FDSCxDQUFDLENBQUMsR0FBRyxDQUNULENBQUM7U0FDSDtRQUVELElBQUksT0FBTyxHQUFHLENBQUMsU0FBUyxLQUFLLFVBQVUsRUFBRTtZQUN2QyxHQUFHLENBQUMsU0FBUzs7O1lBQUcsY0FBTSxPQUFBLEtBQUssRUFBTCxDQUFLLENBQUEsQ0FBQztTQUM3QjtRQUVELENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ2QsQ0FBQzs7Ozs7O0lBRU8sa0NBQVM7Ozs7O0lBQWpCLFVBQWtCLElBQXNCOztRQUN0QyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU8sRUFBRSxDQUFDOztZQUNmLEdBQUcsR0FBcUIsRUFBRTtRQUMxQixJQUFBLGFBQTBDLEVBQXhDLGdCQUFLLEVBQUUsa0JBQU0sRUFBRSxZQUFHLEVBQUUsb0JBQW9COztZQUVoRCxLQUFtQixJQUFBLFNBQUEsU0FBQSxJQUFJLENBQUEsMEJBQUEsNENBQUU7Z0JBQXBCLElBQU0sSUFBSSxpQkFBQTtnQkFDYixJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDbkQsU0FBUztpQkFDVjtnQkFFRCxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO29CQUNuRCxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxJQUFJLElBQUksRUFBRTt3QkFDdEQsT0FBTyxDQUFDLElBQUksQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO3dCQUNwRCxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztxQkFDcEI7eUJBQU07d0JBQ0wsSUFBSSxDQUFDLEtBQUsscUJBQVEsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBSyxLQUFLLEdBQUssSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFDO3FCQUNuRjtpQkFDRjtnQkFFRCxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO29CQUMxQixJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxJQUFJLElBQUksRUFBRTt3QkFDeEQsT0FBTyxDQUFDLElBQUksQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO3dCQUNyRCxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztxQkFDcEI7eUJBQU07d0JBQ0wsSUFBSSxDQUFDLE1BQU0scUJBQVEsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBSyxNQUFNLEdBQUssSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFDO3FCQUN0RjtpQkFDRjtnQkFFRCxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssS0FBSyxJQUFJLE9BQU8sSUFBSSxDQUFDLEdBQUcsS0FBSyxXQUFXLEVBQUU7b0JBQzFELElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO2lCQUNqQjtnQkFFRCxNQUFNO2dCQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLG1CQUFBLEdBQUcsRUFBQyxDQUFDLENBQUM7Z0JBRXhCLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtvQkFDYixJQUFJLENBQUMsSUFBSSx5QkFDSixPQUFPLEdBQ1AsQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FDckUsQ0FBQztpQkFDSDtnQkFFRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2dCQUUvRixPQUFPO2dCQUNQLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO29CQUM3QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDM0M7Z0JBRUQsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNoQjs7Ozs7Ozs7O1FBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QixPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7Ozs7OztJQUVPLG9DQUFXOzs7OztJQUFuQixVQUFvQixJQUFzQjs7O1lBQ3hDLEtBQW1CLElBQUEsU0FBQSxTQUFBLElBQUksQ0FBQSwwQkFBQSw0Q0FBRTtnQkFBcEIsSUFBTSxJQUFJLGlCQUFBO2dCQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRztvQkFBRSxJQUFJLENBQUMsR0FBRzs7O29CQUFHLGNBQU0sT0FBQSxJQUFJLEVBQUosQ0FBSSxDQUFBLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQztnQkFDNUQsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDN0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQ2pDO3FCQUFNO29CQUNMLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO2lCQUNwQjthQUNGOzs7Ozs7Ozs7SUFDSCxDQUFDOzs7Ozs7SUFFTyxvQ0FBVzs7Ozs7SUFBbkIsVUFBb0IsSUFBZ0I7O1lBQzVCLFdBQVc7Ozs7O1FBQUcsVUFBQyxDQUFTLEVBQUUsQ0FBVyxJQUFLLE9BQUEsQ0FBQyxHQUFHLENBQUMsbUJBQUEsQ0FBQyxDQUFDLEtBQUssRUFBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQTFDLENBQTBDLENBQUE7UUFDMUYsYUFBYTtRQUNiLElBQUk7YUFDRCxNQUFNOzs7O1FBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxLQUFLLEtBQUssTUFBTSxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQXhDLENBQXdDLEVBQUM7YUFDckQsT0FBTzs7Ozs7UUFBQyxVQUFDLElBQUksRUFBRSxHQUFHLElBQUssT0FBQSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBL0QsQ0FBK0QsRUFBQyxDQUFDO1FBQzNGLGNBQWM7UUFDZCxJQUFJO2FBQ0QsTUFBTTs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFLLE9BQU8sSUFBSSxDQUFDLENBQUMsS0FBSyxFQUF6QyxDQUF5QyxFQUFDO2FBQ3RELE9BQU8sRUFBRTthQUNULE9BQU87Ozs7O1FBQUMsVUFBQyxJQUFJLEVBQUUsR0FBRyxJQUFLLE9BQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUE5RSxDQUE4RSxFQUFDLENBQUM7SUFDNUcsQ0FBQzs7Ozs7O0lBRU8sbUNBQVU7Ozs7O0lBQWxCLFVBQW1CLElBQWM7O1lBQ3pCLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztRQUNoQyxHQUFHLENBQUMsTUFBTSx5QkFDTCxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FDbkIsR0FBRyxDQUFDLE1BQU0sQ0FDZCxDQUFDO1FBQ0YsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOzs7Ozs7SUFFTyxrQ0FBUzs7Ozs7SUFBakIsVUFBa0IsSUFBYztRQUM5QixJQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxXQUFXLEVBQUU7WUFDcEMsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQztTQUMzQjs7WUFFRyxHQUFHLEdBQWMsRUFBRTtRQUV2QixJQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDakMsR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ3JCO2FBQU0sSUFBSSxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQ3pDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ2pCO1FBRUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7WUFDWixHQUFHLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDekI7UUFFRCxHQUFHLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUVuQixPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7Ozs7OztJQUVPLHFDQUFZOzs7OztJQUFwQixVQUFxQixJQUFjO1FBQW5DLGlCQWlEQztRQWhEQyxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxFQUFFO1lBQ3ZCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7O1lBRUcsR0FBRyxHQUEwQixJQUFJLENBQUMsTUFBTTtRQUM1QyxHQUFHLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLElBQUksU0FBUyxDQUFDOztZQUU3QixJQUFJLEdBQUcsUUFBUTs7WUFDZixTQUFTLEdBQUcsTUFBTTtRQUN0QixJQUFJLEdBQUcsQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQzFCLElBQUksR0FBRyxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksbUJBQUEsR0FBRyxDQUFDLEtBQUssRUFBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQ2hELEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2FBQzdCO1lBQ0QsSUFBSSxHQUFHLFFBQVEsQ0FBQztZQUNoQixTQUFTLEdBQUcsU0FBUyxDQUFDO1NBQ3ZCO1FBRUQsSUFBSSxtQkFBQSxHQUFHLENBQUMsS0FBSyxFQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUMzQixPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsSUFBSSxPQUFPLEdBQUcsQ0FBQyxRQUFRLEtBQUssV0FBVyxFQUFFO1lBQ3ZDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQ3JCO1FBRUQsR0FBRyxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUM7UUFDaEUsR0FBRyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDO1FBQzFELEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ25DLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUM7O1lBRXRCLFFBQVEsR0FBRyxtQkFBQSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxFQUFVO1FBQzNELElBQUksT0FBTyxHQUFHLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUNoQyxHQUFHLENBQUMsSUFBSSxHQUFHLHlDQUFLLFFBQVEsS0FBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksS0FBWSxDQUFDO1NBQ3REO2FBQU07WUFDTCxHQUFHLENBQUMsSUFBSSx5QkFBUSxRQUFRLEdBQUssR0FBRyxDQUFDLElBQUksQ0FBRSxDQUFDO1NBQ3pDO1FBRUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUV4QixJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDWixHQUFHLENBQUMsS0FBSyxHQUFHLG1CQUFBLEdBQUcsQ0FBQyxLQUFLLEVBQUMsQ0FBQyxNQUFNOzs7O1lBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQW5CLENBQW1CLEVBQUMsQ0FBQztTQUN6RDtRQUVELElBQUksbUJBQUEsR0FBRyxDQUFDLEtBQUssRUFBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDMUIsR0FBRyxHQUFHLElBQUksQ0FBQztTQUNaO1FBRUQsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOzs7Ozs7SUFFTyxzQ0FBYTs7Ozs7SUFBckIsVUFBc0IsSUFBYztRQUNsQyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDaEU7UUFDRCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNwRDtJQUNILENBQUM7Ozs7OztJQUVPLHFDQUFZOzs7OztJQUFwQixVQUFxQixJQUFjOztRQUNqQyxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUTtZQUFFLE9BQU87UUFDbkMsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN2RSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDakIsSUFBSSxDQUFDLHFDQUEyQixJQUFJLENBQUMsTUFBTSwwQ0FBRSxJQUFJLFFBQUcsQ0FBQyxDQUFDO1NBQ3ZEO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxnQ0FBTzs7OztJQUFQLFVBQVEsSUFBZ0I7O1FBQXhCLGlCQThHQztRQTdHQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQztZQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsNENBQTRDLENBQUMsQ0FBQztRQUV0RixJQUFBLDBCQUFPOztZQUNYLGFBQWEsR0FBRyxDQUFDOztZQUNqQixVQUFVLEdBQUcsQ0FBQzs7WUFDZCxLQUFLLEdBQUcsQ0FBQzs7WUFDUCxPQUFPLEdBQWUsRUFBRTs7WUFDeEIsWUFBWSxHQUFHLG1CQUFBLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBYzs7WUFDakQsS0FBbUIsSUFBQSxpQkFBQSxTQUFBLFlBQVksQ0FBQSwwQ0FBQSxvRUFBRTtnQkFBNUIsSUFBTSxJQUFJLHlCQUFBO2dCQUNiLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQy9CLFNBQVM7aUJBQ1Y7Z0JBQ0QsSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ25ELFNBQVM7aUJBQ1Y7Z0JBQ0QsUUFBUTtnQkFDUixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7b0JBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO3dCQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3FCQUNwQztvQkFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUN0Qzs7O29CQUlLLEdBQUcsR0FBRyxDQUFDLE9BQU8sSUFBSSxDQUFDLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUU7Z0JBQ3RGLElBQUksR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO29CQUM1QixHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDekM7Z0JBQ0QsSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFO29CQUNaLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ3hEO2dCQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO2dCQUVqQixhQUFhO2dCQUViLEtBQUs7Z0JBQ0wsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRTtvQkFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2lCQUM5RDtnQkFDRCxXQUFXO2dCQUNYLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLEVBQUU7b0JBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO2lCQUN0QjtnQkFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssVUFBVSxFQUFFO29CQUM1QixFQUFFLGFBQWEsQ0FBQztvQkFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7d0JBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQUksQ0FBQztxQkFDMUQ7aUJBQ0Y7Z0JBQ0QsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFO29CQUNaLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNOzs7O29CQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFuQixDQUFtQixFQUFDLENBQUM7aUJBQ3BFO2dCQUNELFFBQVE7Z0JBQ1IsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRTtvQkFDekIsRUFBRSxVQUFVLENBQUM7b0JBQ2IsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7b0JBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO3dCQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO3FCQUNyQjtpQkFDRjtnQkFDRCxRQUFRO2dCQUNSLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUU7b0JBQ3RCLElBQUksQ0FBQyxFQUFFLGNBQUssS0FBSyxFQUFFLElBQUksSUFBSyxJQUFJLENBQUMsRUFBRSxDQUFFLENBQUM7aUJBQ3ZDO2dCQUNELElBQ0UsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLE1BQU0sSUFBSSxPQUFPLElBQUksQ0FBQyxLQUFLLEtBQUssVUFBVSxDQUFDO29CQUMxRCxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDO29CQUM3QyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssS0FBSyxJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLEVBQ3pDO29CQUNBLENBQUMsbUJBQUEsSUFBSSxFQUFPLENBQUMsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO2lCQUN6QjtnQkFDRCxZQUFZO2dCQUNaLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO29CQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsbUJBQUE7d0JBQ2hCLE1BQU0sRUFBRSxZQUFZO3dCQUNwQixRQUFRLEVBQUUsWUFBWTt3QkFDdEIsSUFBSSxFQUFFLGFBQWE7cUJBQ3BCLEVBQWEsQ0FBQyxDQUFDLG1CQUFBLElBQUksQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO2lCQUM3QjtnQkFDRCxRQUFRO2dCQUNSLElBQUksT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLFFBQVEsRUFBRTtvQkFDbEMsSUFBSSxDQUFDLEtBQUssR0FBTSxJQUFJLENBQUMsS0FBSyxPQUFJLENBQUM7aUJBQ2hDO2dCQUVELFNBQVM7Z0JBQ1QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNuQyxTQUFTO2dCQUNULElBQUksQ0FBQyxNQUFNLEdBQUcsbUJBQUEsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBa0IsQ0FBQztnQkFDeEQsVUFBVTtnQkFDVixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQUEsSUFBSSxDQUFDLE9BQU8sRUFBQyxDQUFDLENBQUM7Z0JBQzdDLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDeEIscUJBQXFCO2dCQUNyQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUV6QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssRUFBRSxDQUFDO2dCQUN2QixPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3BCOzs7Ozs7Ozs7UUFDRCxJQUFJLGFBQWEsR0FBRyxDQUFDLEVBQUU7WUFDckIsTUFBTSxJQUFJLEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO1NBQ3hEO1FBQ0QsSUFBSSxVQUFVLEdBQUcsQ0FBQyxFQUFFO1lBQ2xCLE1BQU0sSUFBSSxLQUFLLENBQUMsa0NBQWtDLENBQUMsQ0FBQztTQUNyRDtRQUVELElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFMUIsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQzs7Ozs7SUFFRCx5Q0FBZ0I7Ozs7SUFBaEIsVUFBaUIsT0FBbUI7UUFBcEMsaUJBRUM7UUFEQyxPQUFPLENBQUMsT0FBTzs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBckIsQ0FBcUIsRUFBQyxDQUFDO0lBQzlDLENBQUM7Ozs7Ozs7SUFFRCxzQ0FBYTs7Ozs7O0lBQWIsVUFBYyxNQUFzQjtRQUNsQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQzdCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsbUJBQUEsTUFBTSxDQUFDLEtBQUssRUFBQyxDQUFDLFNBQVM7Ozs7WUFBQyxVQUFBLENBQUMsV0FBSSxtQkFBQSxDQUFDLENBQUMsT0FBTyxFQUFDLEdBQUEsRUFBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ2xFO2FBQU07WUFDTCxNQUFNLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxtQkFBQSxNQUFNLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1NBQzNDO1FBQ0QsT0FBTyxtQkFBQSxJQUFJLEVBQUEsQ0FBQztJQUNkLENBQUM7Ozs7Ozs7SUFFRCxvQ0FBVzs7Ozs7O0lBQVgsVUFBWSxHQUFhOztZQUNqQixDQUFDLEdBQUcsbUJBQUEsR0FBRyxDQUFDLE1BQU0sRUFBQztRQUNyQixDQUFDLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNsQixJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQ3hCLG1CQUFBLENBQUMsQ0FBQyxLQUFLLEVBQUMsQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLEVBQW5CLENBQW1CLEVBQUMsQ0FBQztTQUM1QzthQUFNO1lBQ0wsbUJBQUEsQ0FBQyxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7U0FDL0I7UUFDRCxPQUFPLG1CQUFBLElBQUksRUFBQSxDQUFDO0lBQ2QsQ0FBQzs7Z0JBbFdGLFVBQVU7Ozs7Z0JBVEYsWUFBWTtnQkFLWixXQUFXLHVCQVVmLElBQUk7Z0JBZEEsVUFBVSx1QkFlZCxRQUFRO2dEQUNSLFFBQVEsWUFBSSxNQUFNLFNBQUMsZ0JBQWdCO2dCQVgvQixnQkFBZ0I7O0lBc1d6QixxQkFBQztDQUFBLEFBbldELElBbVdDO1NBbFdZLGNBQWM7Ozs7OztJQUN6Qiw2QkFBMkI7Ozs7O0lBR3pCLDZCQUF5Qjs7Ozs7SUFDekIsbUNBQXNDOzs7OztJQUN0Qyw2QkFBbUM7Ozs7O0lBQ25DLGlDQUF1RTs7Ozs7SUFDdkUsMENBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSG9zdCwgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBBQ0xTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL2FjbCc7XG5pbXBvcnQgeyBBbGFpbkkxOE5TZXJ2aWNlLCBBTEFJTl9JMThOX1RPS0VOIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IEFsYWluU1RDb25maWcsIGRlZXBDb3B5LCB3YXJuIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IFNUUm93U291cmNlIH0gZnJvbSAnLi9zdC1yb3cuZGlyZWN0aXZlJztcbmltcG9ydCB7IFNUV2lkZ2V0UmVnaXN0cnkgfSBmcm9tICcuL3N0LXdpZGdldCc7XG5pbXBvcnQgeyBTVENvbHVtbiwgU1RDb2x1bW5CdXR0b24sIFNUQ29sdW1uQnV0dG9uUG9wLCBTVENvbHVtbkZpbHRlciwgU1RJY29uLCBTVFNvcnRNYXAgfSBmcm9tICcuL3N0LmludGVyZmFjZXMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU1RDb2x1bW5Tb3VyY2Uge1xuICBwcml2YXRlIGNvZzogQWxhaW5TVENvbmZpZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGRvbTogRG9tU2FuaXRpemVyLFxuICAgIEBIb3N0KCkgcHJpdmF0ZSByb3dTb3VyY2U6IFNUUm93U291cmNlLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgYWNsOiBBQ0xTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoQUxBSU5fSTE4Tl9UT0tFTikgcHJpdmF0ZSBpMThuU3J2OiBBbGFpbkkxOE5TZXJ2aWNlLFxuICAgIHByaXZhdGUgc3RXaWRnZXRSZWdpc3RyeTogU1RXaWRnZXRSZWdpc3RyeSxcbiAgKSB7fVxuXG4gIHNldENvZyh2YWw6IEFsYWluU1RDb25maWcpOiB2b2lkIHtcbiAgICB0aGlzLmNvZyA9IHZhbDtcbiAgfVxuXG4gIHByaXZhdGUgZml4UG9wKGk6IFNUQ29sdW1uQnV0dG9uLCBkZWY6IFNUQ29sdW1uQnV0dG9uUG9wKTogdm9pZCB7XG4gICAgaWYgKGkucG9wID09IG51bGwgfHwgaS5wb3AgPT09IGZhbHNlKSB7XG4gICAgICBpLnBvcCA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBwb3AgPSB7XG4gICAgICAuLi5kZWYsXG4gICAgfTtcbiAgICBpZiAodHlwZW9mIGkucG9wID09PSAnc3RyaW5nJykge1xuICAgICAgcG9wLnRpdGxlID0gaS5wb3A7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgaS5wb3AgPT09ICdvYmplY3QnKSB7XG4gICAgICBwb3AgPSB7XG4gICAgICAgIC4uLnBvcCxcbiAgICAgICAgLi4uaS5wb3AsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcG9wLmNvbmRpdGlvbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcG9wLmNvbmRpdGlvbiA9ICgpID0+IGZhbHNlO1xuICAgIH1cblxuICAgIGkucG9wID0gcG9wO1xuICB9XG5cbiAgcHJpdmF0ZSBidG5Db2VyY2UobGlzdDogU1RDb2x1bW5CdXR0b25bXSk6IFNUQ29sdW1uQnV0dG9uW10ge1xuICAgIGlmICghbGlzdCkgcmV0dXJuIFtdO1xuICAgIGNvbnN0IHJldDogU1RDb2x1bW5CdXR0b25bXSA9IFtdO1xuICAgIGNvbnN0IHsgbW9kYWwsIGRyYXdlciwgcG9wLCBidG5JY29uIH0gPSB0aGlzLmNvZztcblxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBsaXN0KSB7XG4gICAgICBpZiAodGhpcy5hY2wgJiYgaXRlbS5hY2wgJiYgIXRoaXMuYWNsLmNhbihpdGVtLmFjbCkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdtb2RhbCcgfHwgaXRlbS50eXBlID09PSAnc3RhdGljJykge1xuICAgICAgICBpZiAoaXRlbS5tb2RhbCA9PSBudWxsIHx8IGl0ZW0ubW9kYWwuY29tcG9uZW50ID09IG51bGwpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oYFtzdF0gU2hvdWxkIHNwZWNpZnkgbW9kYWwgcGFyYW1ldGVyYCk7XG4gICAgICAgICAgaXRlbS50eXBlID0gJ25vbmUnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW0ubW9kYWwgPSB7IC4uLnsgcGFyYW1zTmFtZTogJ3JlY29yZCcsIHNpemU6ICdsZycgfSwgLi4ubW9kYWwsIC4uLml0ZW0ubW9kYWwgfTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbS50eXBlID09PSAnZHJhd2VyJykge1xuICAgICAgICBpZiAoaXRlbS5kcmF3ZXIgPT0gbnVsbCB8fCBpdGVtLmRyYXdlci5jb21wb25lbnQgPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihgW3N0XSBTaG91bGQgc3BlY2lmeSBkcmF3ZXIgcGFyYW1ldGVyYCk7XG4gICAgICAgICAgaXRlbS50eXBlID0gJ25vbmUnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW0uZHJhd2VyID0geyAuLi57IHBhcmFtc05hbWU6ICdyZWNvcmQnLCBzaXplOiAnbGcnIH0sIC4uLmRyYXdlciwgLi4uaXRlbS5kcmF3ZXIgfTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbS50eXBlID09PSAnZGVsJyAmJiB0eXBlb2YgaXRlbS5wb3AgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGl0ZW0ucG9wID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgLy8gcG9wXG4gICAgICB0aGlzLmZpeFBvcChpdGVtLCBwb3AhKTtcblxuICAgICAgaWYgKGl0ZW0uaWNvbikge1xuICAgICAgICBpdGVtLmljb24gPSB7XG4gICAgICAgICAgLi4uYnRuSWNvbixcbiAgICAgICAgICAuLi4odHlwZW9mIGl0ZW0uaWNvbiA9PT0gJ3N0cmluZycgPyB7IHR5cGU6IGl0ZW0uaWNvbiB9IDogaXRlbS5pY29uKSxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgaXRlbS5jaGlsZHJlbiA9IGl0ZW0uY2hpbGRyZW4gJiYgaXRlbS5jaGlsZHJlbi5sZW5ndGggPiAwID8gdGhpcy5idG5Db2VyY2UoaXRlbS5jaGlsZHJlbikgOiBbXTtcblxuICAgICAgLy8gaTE4blxuICAgICAgaWYgKGl0ZW0uaTE4biAmJiB0aGlzLmkxOG5TcnYpIHtcbiAgICAgICAgaXRlbS50ZXh0ID0gdGhpcy5pMThuU3J2LmZhbnlpKGl0ZW0uaTE4bik7XG4gICAgICB9XG5cbiAgICAgIHJldC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgICB0aGlzLmJ0bkNvZXJjZUlmKHJldCk7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIHByaXZhdGUgYnRuQ29lcmNlSWYobGlzdDogU1RDb2x1bW5CdXR0b25bXSkge1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiBsaXN0KSB7XG4gICAgICBpZiAoIWl0ZW0uaWlmKSBpdGVtLmlpZiA9ICgpID0+IHRydWU7XG4gICAgICBpdGVtLmlpZkJlaGF2aW9yID0gaXRlbS5paWZCZWhhdmlvciB8fCB0aGlzLmNvZy5paWZCZWhhdmlvcjtcbiAgICAgIGlmIChpdGVtLmNoaWxkcmVuICYmIGl0ZW0uY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLmJ0bkNvZXJjZUlmKGl0ZW0uY2hpbGRyZW4pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXRlbS5jaGlsZHJlbiA9IFtdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZml4ZWRDb2VyY2UobGlzdDogU1RDb2x1bW5bXSkge1xuICAgIGNvbnN0IGNvdW50UmVkdWNlID0gKGE6IG51bWJlciwgYjogU1RDb2x1bW4pID0+IGEgKyArYi53aWR0aCEudG9TdHJpbmcoKS5yZXBsYWNlKCdweCcsICcnKTtcbiAgICAvLyBsZWZ0IHdpZHRoXG4gICAgbGlzdFxuICAgICAgLmZpbHRlcih3ID0+IHcuZml4ZWQgJiYgdy5maXhlZCA9PT0gJ2xlZnQnICYmIHcud2lkdGgpXG4gICAgICAuZm9yRWFjaCgoaXRlbSwgaWR4KSA9PiAoaXRlbS5fbGVmdCA9IGxpc3Quc2xpY2UoMCwgaWR4KS5yZWR1Y2UoY291bnRSZWR1Y2UsIDApICsgJ3B4JykpO1xuICAgIC8vIHJpZ2h0IHdpZHRoXG4gICAgbGlzdFxuICAgICAgLmZpbHRlcih3ID0+IHcuZml4ZWQgJiYgdy5maXhlZCA9PT0gJ3JpZ2h0JyAmJiB3LndpZHRoKVxuICAgICAgLnJldmVyc2UoKVxuICAgICAgLmZvckVhY2goKGl0ZW0sIGlkeCkgPT4gKGl0ZW0uX3JpZ2h0ID0gKGlkeCA+IDAgPyBsaXN0LnNsaWNlKC1pZHgpLnJlZHVjZShjb3VudFJlZHVjZSwgMCkgOiAwKSArICdweCcpKTtcbiAgfVxuXG4gIHByaXZhdGUgc29ydENvZXJjZShpdGVtOiBTVENvbHVtbik6IFNUU29ydE1hcCB7XG4gICAgY29uc3QgcmVzID0gdGhpcy5maXhDb2VyY2UoaXRlbSk7XG4gICAgcmVzLnJlTmFtZSA9IHtcbiAgICAgIC4uLnRoaXMuY29nLnNvcnRSZU5hbWUsXG4gICAgICAuLi5yZXMucmVOYW1lLFxuICAgIH07XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIHByaXZhdGUgZml4Q29lcmNlKGl0ZW06IFNUQ29sdW1uKTogU1RTb3J0TWFwIHtcbiAgICBpZiAodHlwZW9mIGl0ZW0uc29ydCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiB7IGVuYWJsZWQ6IGZhbHNlIH07XG4gICAgfVxuXG4gICAgbGV0IHJlczogU1RTb3J0TWFwID0ge307XG5cbiAgICBpZiAodHlwZW9mIGl0ZW0uc29ydCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJlcy5rZXkgPSBpdGVtLnNvcnQ7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgaXRlbS5zb3J0ICE9PSAnYm9vbGVhbicpIHtcbiAgICAgIHJlcyA9IGl0ZW0uc29ydDtcbiAgICB9XG5cbiAgICBpZiAoIXJlcy5rZXkpIHtcbiAgICAgIHJlcy5rZXkgPSBpdGVtLmluZGV4S2V5O1xuICAgIH1cblxuICAgIHJlcy5lbmFibGVkID0gdHJ1ZTtcblxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBwcml2YXRlIGZpbHRlckNvZXJjZShpdGVtOiBTVENvbHVtbik6IFNUQ29sdW1uRmlsdGVyIHwgbnVsbCB7XG4gICAgaWYgKGl0ZW0uZmlsdGVyID09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGxldCByZXM6IFNUQ29sdW1uRmlsdGVyIHwgbnVsbCA9IGl0ZW0uZmlsdGVyO1xuICAgIHJlcy50eXBlID0gcmVzLnR5cGUgfHwgJ2RlZmF1bHQnO1xuXG4gICAgbGV0IGljb24gPSAnZmlsdGVyJztcbiAgICBsZXQgaWNvblRoZW1lID0gJ2ZpbGwnO1xuICAgIGlmIChyZXMudHlwZSA9PT0gJ2tleXdvcmQnKSB7XG4gICAgICBpZiAocmVzLm1lbnVzID09IG51bGwgfHwgcmVzLm1lbnVzIS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmVzLm1lbnVzID0gW3sgdmFsdWU6ICcnIH1dO1xuICAgICAgfVxuICAgICAgaWNvbiA9ICdzZWFyY2gnO1xuICAgICAgaWNvblRoZW1lID0gJ291dGxpbmUnO1xuICAgIH1cblxuICAgIGlmIChyZXMubWVudXMhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiByZXMubXVsdGlwbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXMubXVsdGlwbGUgPSB0cnVlO1xuICAgIH1cblxuICAgIHJlcy5jb25maXJtVGV4dCA9IHJlcy5jb25maXJtVGV4dCB8fCB0aGlzLmNvZy5maWx0ZXJDb25maXJtVGV4dDtcbiAgICByZXMuY2xlYXJUZXh0ID0gcmVzLmNsZWFyVGV4dCB8fCB0aGlzLmNvZy5maWx0ZXJDbGVhclRleHQ7XG4gICAgcmVzLmtleSA9IHJlcy5rZXkgfHwgaXRlbS5pbmRleEtleTtcbiAgICByZXMuaWNvbiA9IHJlcy5pY29uIHx8IGljb247XG5cbiAgICBjb25zdCBiYXNlSWNvbiA9IHsgdHlwZTogaWNvbiwgdGhlbWU6IGljb25UaGVtZSB9IGFzIFNUSWNvbjtcbiAgICBpZiAodHlwZW9mIHJlcy5pY29uID09PSAnc3RyaW5nJykge1xuICAgICAgcmVzLmljb24gPSB7IC4uLmJhc2VJY29uLCB0eXBlOiByZXMuaWNvbiB9IGFzIFNUSWNvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzLmljb24gPSB7IC4uLmJhc2VJY29uLCAuLi5yZXMuaWNvbiB9O1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlRGVmYXVsdChyZXMpO1xuXG4gICAgaWYgKHRoaXMuYWNsKSB7XG4gICAgICByZXMubWVudXMgPSByZXMubWVudXMhLmZpbHRlcih3ID0+IHRoaXMuYWNsLmNhbih3LmFjbCkpO1xuICAgIH1cblxuICAgIGlmIChyZXMubWVudXMhLmxlbmd0aCA8PSAwKSB7XG4gICAgICByZXMgPSBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBwcml2YXRlIHJlc3RvcmVSZW5kZXIoaXRlbTogU1RDb2x1bW4pIHtcbiAgICBpZiAoaXRlbS5yZW5kZXJUaXRsZSkge1xuICAgICAgaXRlbS5fX3JlbmRlclRpdGxlID0gdGhpcy5yb3dTb3VyY2UuZ2V0VGl0bGUoaXRlbS5yZW5kZXJUaXRsZSk7XG4gICAgfVxuICAgIGlmIChpdGVtLnJlbmRlcikge1xuICAgICAgaXRlbS5fX3JlbmRlciA9IHRoaXMucm93U291cmNlLmdldFJvdyhpdGVtLnJlbmRlcik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB3aWRnZXRDb2VyY2UoaXRlbTogU1RDb2x1bW4pOiB2b2lkIHtcbiAgICBpZiAoaXRlbS50eXBlICE9PSAnd2lkZ2V0JykgcmV0dXJuO1xuICAgIGlmIChpdGVtLndpZGdldCA9PSBudWxsIHx8ICF0aGlzLnN0V2lkZ2V0UmVnaXN0cnkuaGFzKGl0ZW0ud2lkZ2V0LnR5cGUpKSB7XG4gICAgICBkZWxldGUgaXRlbS50eXBlO1xuICAgICAgd2Fybihgc3Q6IE5vIHdpZGdldCBmb3IgdHlwZSBcIiR7aXRlbS53aWRnZXQ/LnR5cGV9XCJgKTtcbiAgICB9XG4gIH1cblxuICBwcm9jZXNzKGxpc3Q6IFNUQ29sdW1uW10pOiBTVENvbHVtbltdIHtcbiAgICBpZiAoIWxpc3QgfHwgbGlzdC5sZW5ndGggPT09IDApIHRocm93IG5ldyBFcnJvcihgW3N0XTogdGhlIGNvbHVtbnMgcHJvcGVydHkgbXVzZSBiZSBkZWZpbmUhYCk7XG5cbiAgICBjb25zdCB7IG5vSW5kZXggfSA9IHRoaXMuY29nO1xuICAgIGxldCBjaGVja2JveENvdW50ID0gMDtcbiAgICBsZXQgcmFkaW9Db3VudCA9IDA7XG4gICAgbGV0IHBvaW50ID0gMDtcbiAgICBjb25zdCBjb2x1bW5zOiBTVENvbHVtbltdID0gW107XG4gICAgY29uc3QgY29weUNvbHVtZW5zID0gZGVlcENvcHkobGlzdCkgYXMgU1RDb2x1bW5bXTtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgY29weUNvbHVtZW5zKSB7XG4gICAgICBpZiAoaXRlbS5paWYgJiYgIWl0ZW0uaWlmKGl0ZW0pKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuYWNsICYmIGl0ZW0uYWNsICYmICF0aGlzLmFjbC5jYW4oaXRlbS5hY2wpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgLy8gaW5kZXhcbiAgICAgIGlmIChpdGVtLmluZGV4KSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShpdGVtLmluZGV4KSkge1xuICAgICAgICAgIGl0ZW0uaW5kZXggPSBpdGVtLmluZGV4LnNwbGl0KCcuJyk7XG4gICAgICAgIH1cbiAgICAgICAgaXRlbS5pbmRleEtleSA9IGl0ZW0uaW5kZXguam9pbignLicpO1xuICAgICAgfVxuXG4gICAgICAvLyAjcmVnaW9uIHRpdGxlXG5cbiAgICAgIGNvbnN0IHRpdCA9ICh0eXBlb2YgaXRlbS50aXRsZSA9PT0gJ3N0cmluZycgPyB7IHRleHQ6IGl0ZW0udGl0bGUgfSA6IGl0ZW0udGl0bGUpIHx8IHt9O1xuICAgICAgaWYgKHRpdC5pMThuICYmIHRoaXMuaTE4blNydikge1xuICAgICAgICB0aXQudGV4dCA9IHRoaXMuaTE4blNydi5mYW55aSh0aXQuaTE4bik7XG4gICAgICB9XG4gICAgICBpZiAodGl0LnRleHQpIHtcbiAgICAgICAgdGl0Ll90ZXh0ID0gdGhpcy5kb20uYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwodGl0LnRleHQpO1xuICAgICAgfVxuICAgICAgaXRlbS50aXRsZSA9IHRpdDtcblxuICAgICAgLy8gI2VuZHJlZ2lvblxuXG4gICAgICAvLyBub1xuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ25vJykge1xuICAgICAgICBpdGVtLm5vSW5kZXggPSBpdGVtLm5vSW5kZXggPT0gbnVsbCA/IG5vSW5kZXggOiBpdGVtLm5vSW5kZXg7XG4gICAgICB9XG4gICAgICAvLyBjaGVja2JveFxuICAgICAgaWYgKGl0ZW0uc2VsZWN0aW9ucyA9PSBudWxsKSB7XG4gICAgICAgIGl0ZW0uc2VsZWN0aW9ucyA9IFtdO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICArK2NoZWNrYm94Q291bnQ7XG4gICAgICAgIGlmICghaXRlbS53aWR0aCkge1xuICAgICAgICAgIGl0ZW0ud2lkdGggPSBgJHtpdGVtLnNlbGVjdGlvbnMubGVuZ3RoID4gMCA/IDYyIDogNTB9cHhgO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5hY2wpIHtcbiAgICAgICAgaXRlbS5zZWxlY3Rpb25zID0gaXRlbS5zZWxlY3Rpb25zLmZpbHRlcih3ID0+IHRoaXMuYWNsLmNhbih3LmFjbCkpO1xuICAgICAgfVxuICAgICAgLy8gcmFkaW9cbiAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgICAgKytyYWRpb0NvdW50O1xuICAgICAgICBpdGVtLnNlbGVjdGlvbnMgPSBbXTtcbiAgICAgICAgaWYgKCFpdGVtLndpZHRoKSB7XG4gICAgICAgICAgaXRlbS53aWR0aCA9ICc1MHB4JztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gdHlwZXNcbiAgICAgIGlmIChpdGVtLnR5cGUgPT09ICd5bicpIHtcbiAgICAgICAgaXRlbS55biA9IHsgdHJ1dGg6IHRydWUsIC4uLml0ZW0ueW4gfTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgKGl0ZW0udHlwZSA9PT0gJ2xpbmsnICYmIHR5cGVvZiBpdGVtLmNsaWNrICE9PSAnZnVuY3Rpb24nKSB8fFxuICAgICAgICAoaXRlbS50eXBlID09PSAnYmFkZ2UnICYmIGl0ZW0uYmFkZ2UgPT0gbnVsbCkgfHxcbiAgICAgICAgKGl0ZW0udHlwZSA9PT0gJ3RhZycgJiYgaXRlbS50YWcgPT0gbnVsbClcbiAgICAgICkge1xuICAgICAgICAoaXRlbSBhcyBhbnkpLnR5cGUgPSAnJztcbiAgICAgIH1cbiAgICAgIC8vIGNsYXNzTmFtZVxuICAgICAgaWYgKCFpdGVtLmNsYXNzTmFtZSkge1xuICAgICAgICBpdGVtLmNsYXNzTmFtZSA9ICh7XG4gICAgICAgICAgbnVtYmVyOiAndGV4dC1yaWdodCcsXG4gICAgICAgICAgY3VycmVuY3k6ICd0ZXh0LXJpZ2h0JyxcbiAgICAgICAgICBkYXRlOiAndGV4dC1jZW50ZXInLFxuICAgICAgICB9IGFzIE56U2FmZUFueSlbaXRlbS50eXBlIV07XG4gICAgICB9XG4gICAgICAvLyB3aWR0aFxuICAgICAgaWYgKHR5cGVvZiBpdGVtLndpZHRoID09PSAnbnVtYmVyJykge1xuICAgICAgICBpdGVtLndpZHRoID0gYCR7aXRlbS53aWR0aH1weGA7XG4gICAgICB9XG5cbiAgICAgIC8vIHNvcnRlclxuICAgICAgaXRlbS5fc29ydCA9IHRoaXMuc29ydENvZXJjZShpdGVtKTtcbiAgICAgIC8vIGZpbHRlclxuICAgICAgaXRlbS5maWx0ZXIgPSB0aGlzLmZpbHRlckNvZXJjZShpdGVtKSBhcyBTVENvbHVtbkZpbHRlcjtcbiAgICAgIC8vIGJ1dHRvbnNcbiAgICAgIGl0ZW0uYnV0dG9ucyA9IHRoaXMuYnRuQ29lcmNlKGl0ZW0uYnV0dG9ucyEpO1xuICAgICAgLy8gd2lkZ2V0XG4gICAgICB0aGlzLndpZGdldENvZXJjZShpdGVtKTtcbiAgICAgIC8vIHJlc3RvcmUgY3VzdG9tIHJvd1xuICAgICAgdGhpcy5yZXN0b3JlUmVuZGVyKGl0ZW0pO1xuXG4gICAgICBpdGVtLl9fcG9pbnQgPSBwb2ludCsrO1xuICAgICAgY29sdW1ucy5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgICBpZiAoY2hlY2tib3hDb3VudCA+IDEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgW3N0XToganVzdCBvbmx5IG9uZSBjb2x1bW4gY2hlY2tib3hgKTtcbiAgICB9XG4gICAgaWYgKHJhZGlvQ291bnQgPiAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFtzdF06IGp1c3Qgb25seSBvbmUgY29sdW1uIHJhZGlvYCk7XG4gICAgfVxuXG4gICAgdGhpcy5maXhlZENvZXJjZShjb2x1bW5zKTtcblxuICAgIHJldHVybiBjb2x1bW5zO1xuICB9XG5cbiAgcmVzdG9yZUFsbFJlbmRlcihjb2x1bW5zOiBTVENvbHVtbltdKSB7XG4gICAgY29sdW1ucy5mb3JFYWNoKGkgPT4gdGhpcy5yZXN0b3JlUmVuZGVyKGkpKTtcbiAgfVxuXG4gIHVwZGF0ZURlZmF1bHQoZmlsdGVyOiBTVENvbHVtbkZpbHRlcik6IHRoaXMge1xuICAgIGlmIChmaWx0ZXIudHlwZSA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICBmaWx0ZXIuZGVmYXVsdCA9IGZpbHRlci5tZW51cyEuZmluZEluZGV4KHcgPT4gdy5jaGVja2VkISkgIT09IC0xO1xuICAgIH0gZWxzZSB7XG4gICAgICBmaWx0ZXIuZGVmYXVsdCA9ICEhZmlsdGVyLm1lbnVzIVswXS52YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjbGVhbkZpbHRlcihjb2w6IFNUQ29sdW1uKTogdGhpcyB7XG4gICAgY29uc3QgZiA9IGNvbC5maWx0ZXIhO1xuICAgIGYuZGVmYXVsdCA9IGZhbHNlO1xuICAgIGlmIChmLnR5cGUgPT09ICdkZWZhdWx0Jykge1xuICAgICAgZi5tZW51cyEuZm9yRWFjaChpID0+IChpLmNoZWNrZWQgPSBmYWxzZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmLm1lbnVzIVswXS52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cbiJdfQ==