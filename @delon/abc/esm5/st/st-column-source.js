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
import { STConfig } from './st.config';
var STColumnSource = /** @class */ (function () {
    function STColumnSource(dom, rowSource, acl, i18nSrv, cog, stWidgetRegistry) {
        this.dom = dom;
        this.rowSource = rowSource;
        this.acl = acl;
        this.i18nSrv = i18nSrv;
        this.cog = cog;
        this.stWidgetRegistry = stWidgetRegistry;
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
        { type: STConfig },
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
    /**
     * @type {?}
     * @private
     */
    STColumnSource.prototype.stWidgetRegistry;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QtY29sdW1uLXNvdXJjZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvc3QvIiwic291cmNlcyI6WyJzdC1jb2x1bW4tc291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDeEMsT0FBTyxFQUFvQixnQkFBZ0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNsRSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU3QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDakQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFHdkM7SUFFRSx3QkFDVSxHQUFpQixFQUNULFNBQXNCLEVBQ2xCLEdBQWUsRUFDVyxPQUF5QixFQUMvRCxHQUFhLEVBQ2IsZ0JBQWtDO1FBTGxDLFFBQUcsR0FBSCxHQUFHLENBQWM7UUFDVCxjQUFTLEdBQVQsU0FBUyxDQUFhO1FBQ2xCLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDVyxZQUFPLEdBQVAsT0FBTyxDQUFrQjtRQUMvRCxRQUFHLEdBQUgsR0FBRyxDQUFVO1FBQ2IscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUN6QyxDQUFDOzs7Ozs7O0lBRUksK0JBQU07Ozs7OztJQUFkLFVBQWUsQ0FBaUIsRUFBRSxHQUFzQjtRQUN0RCxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssS0FBSyxFQUFFO1lBQ3BDLENBQUMsQ0FB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Ozs7O0lBQVgsVUFBWSxHQUFhOztZQUNqQixDQUFDLEdBQUcsbUJBQUEsR0FBRyxDQUFDLE1BQU0sRUFBQztRQUNyQixDQUFDLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNsQixJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQ3hCLG1CQUFBLENBQUMsQ0FBQyxLQUFLLEVBQUMsQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLEVBQW5CLENBQW1CLEVBQUMsQ0FBQztTQUM1QzthQUFNO1lBQ0wsbUJBQUEsQ0FBQyxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7U0FDL0I7UUFDRCxPQUFPLG1CQUFBLElBQUksRUFBQSxDQUFDO0lBQ2QsQ0FBQzs7Z0JBN1ZGLFVBQVU7Ozs7Z0JBVkYsWUFBWTtnQkFLWixXQUFXLHVCQVNmLElBQUk7Z0JBYkEsVUFBVSx1QkFjZCxRQUFRO2dEQUNSLFFBQVEsWUFBSSxNQUFNLFNBQUMsZ0JBQWdCO2dCQVQvQixRQUFRO2dCQURSLGdCQUFnQjs7SUFrV3pCLHFCQUFDO0NBQUEsQUE5VkQsSUE4VkM7U0E3VlksY0FBYzs7Ozs7O0lBRXZCLDZCQUF5Qjs7Ozs7SUFDekIsbUNBQXNDOzs7OztJQUN0Qyw2QkFBbUM7Ozs7O0lBQ25DLGlDQUF1RTs7Ozs7SUFDdkUsNkJBQXFCOzs7OztJQUNyQiwwQ0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIb3N0LCBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEFDTFNlcnZpY2UgfSBmcm9tICdAZGVsb24vYWNsJztcbmltcG9ydCB7IEFsYWluSTE4TlNlcnZpY2UsIEFMQUlOX0kxOE5fVE9LRU4gfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgZGVlcENvcHksIHdhcm4gfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgU1RSb3dTb3VyY2UgfSBmcm9tICcuL3N0LXJvdy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU1RXaWRnZXRSZWdpc3RyeSB9IGZyb20gJy4vc3Qtd2lkZ2V0JztcbmltcG9ydCB7IFNUQ29uZmlnIH0gZnJvbSAnLi9zdC5jb25maWcnO1xuaW1wb3J0IHsgU1RDb2x1bW4sIFNUQ29sdW1uQnV0dG9uLCBTVENvbHVtbkJ1dHRvblBvcCwgU1RDb2x1bW5GaWx0ZXIsIFNUSWNvbiwgU1RTb3J0TWFwIH0gZnJvbSAnLi9zdC5pbnRlcmZhY2VzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNUQ29sdW1uU291cmNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBkb206IERvbVNhbml0aXplcixcbiAgICBASG9zdCgpIHByaXZhdGUgcm93U291cmNlOiBTVFJvd1NvdXJjZSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGFjbDogQUNMU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KEFMQUlOX0kxOE5fVE9LRU4pIHByaXZhdGUgaTE4blNydjogQWxhaW5JMThOU2VydmljZSxcbiAgICBwcml2YXRlIGNvZzogU1RDb25maWcsXG4gICAgcHJpdmF0ZSBzdFdpZGdldFJlZ2lzdHJ5OiBTVFdpZGdldFJlZ2lzdHJ5LFxuICApIHt9XG5cbiAgcHJpdmF0ZSBmaXhQb3AoaTogU1RDb2x1bW5CdXR0b24sIGRlZjogU1RDb2x1bW5CdXR0b25Qb3ApOiB2b2lkIHtcbiAgICBpZiAoaS5wb3AgPT0gbnVsbCB8fCBpLnBvcCA9PT0gZmFsc2UpIHtcbiAgICAgIGkucG9wID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHBvcCA9IHtcbiAgICAgIC4uLmRlZixcbiAgICB9O1xuICAgIGlmICh0eXBlb2YgaS5wb3AgPT09ICdzdHJpbmcnKSB7XG4gICAgICBwb3AudGl0bGUgPSBpLnBvcDtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBpLnBvcCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHBvcCA9IHtcbiAgICAgICAgLi4ucG9wLFxuICAgICAgICAuLi5pLnBvcCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBwb3AuY29uZGl0aW9uICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwb3AuY29uZGl0aW9uID0gKCkgPT4gZmFsc2U7XG4gICAgfVxuXG4gICAgaS5wb3AgPSBwb3A7XG4gIH1cblxuICBwcml2YXRlIGJ0bkNvZXJjZShsaXN0OiBTVENvbHVtbkJ1dHRvbltdKTogU1RDb2x1bW5CdXR0b25bXSB7XG4gICAgaWYgKCFsaXN0KSByZXR1cm4gW107XG4gICAgY29uc3QgcmV0OiBTVENvbHVtbkJ1dHRvbltdID0gW107XG4gICAgY29uc3QgeyBtb2RhbCwgZHJhd2VyLCBwb3AsIGJ0bkljb24gfSA9IHRoaXMuY29nO1xuXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGxpc3QpIHtcbiAgICAgIGlmICh0aGlzLmFjbCAmJiBpdGVtLmFjbCAmJiAhdGhpcy5hY2wuY2FuKGl0ZW0uYWNsKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ21vZGFsJyB8fCBpdGVtLnR5cGUgPT09ICdzdGF0aWMnKSB7XG4gICAgICAgIGlmIChpdGVtLm1vZGFsID09IG51bGwgfHwgaXRlbS5tb2RhbC5jb21wb25lbnQgPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihgW3N0XSBTaG91bGQgc3BlY2lmeSBtb2RhbCBwYXJhbWV0ZXJgKTtcbiAgICAgICAgICBpdGVtLnR5cGUgPSAnbm9uZSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbS5tb2RhbCA9IHsgLi4ueyBwYXJhbXNOYW1lOiAncmVjb3JkJywgc2l6ZTogJ2xnJyB9LCAuLi5tb2RhbCwgLi4uaXRlbS5tb2RhbCB9O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdkcmF3ZXInKSB7XG4gICAgICAgIGlmIChpdGVtLmRyYXdlciA9PSBudWxsIHx8IGl0ZW0uZHJhd2VyLmNvbXBvbmVudCA9PSBudWxsKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGBbc3RdIFNob3VsZCBzcGVjaWZ5IGRyYXdlciBwYXJhbWV0ZXJgKTtcbiAgICAgICAgICBpdGVtLnR5cGUgPSAnbm9uZSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbS5kcmF3ZXIgPSB7IC4uLnsgcGFyYW1zTmFtZTogJ3JlY29yZCcsIHNpemU6ICdsZycgfSwgLi4uZHJhd2VyLCAuLi5pdGVtLmRyYXdlciB9O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdkZWwnICYmIHR5cGVvZiBpdGVtLnBvcCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgaXRlbS5wb3AgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBwb3BcbiAgICAgIHRoaXMuZml4UG9wKGl0ZW0sIHBvcCEpO1xuXG4gICAgICBpZiAoaXRlbS5pY29uKSB7XG4gICAgICAgIGl0ZW0uaWNvbiA9IHtcbiAgICAgICAgICAuLi5idG5JY29uLFxuICAgICAgICAgIC4uLih0eXBlb2YgaXRlbS5pY29uID09PSAnc3RyaW5nJyA/IHsgdHlwZTogaXRlbS5pY29uIH0gOiBpdGVtLmljb24pLFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBpdGVtLmNoaWxkcmVuID0gaXRlbS5jaGlsZHJlbiAmJiBpdGVtLmNoaWxkcmVuLmxlbmd0aCA+IDAgPyB0aGlzLmJ0bkNvZXJjZShpdGVtLmNoaWxkcmVuKSA6IFtdO1xuXG4gICAgICAvLyBpMThuXG4gICAgICBpZiAoaXRlbS5pMThuICYmIHRoaXMuaTE4blNydikge1xuICAgICAgICBpdGVtLnRleHQgPSB0aGlzLmkxOG5TcnYuZmFueWkoaXRlbS5pMThuKTtcbiAgICAgIH1cblxuICAgICAgcmV0LnB1c2goaXRlbSk7XG4gICAgfVxuICAgIHRoaXMuYnRuQ29lcmNlSWYocmV0KTtcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgcHJpdmF0ZSBidG5Db2VyY2VJZihsaXN0OiBTVENvbHVtbkJ1dHRvbltdKSB7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGxpc3QpIHtcbiAgICAgIGlmICghaXRlbS5paWYpIGl0ZW0uaWlmID0gKCkgPT4gdHJ1ZTtcbiAgICAgIGl0ZW0uaWlmQmVoYXZpb3IgPSBpdGVtLmlpZkJlaGF2aW9yIHx8IHRoaXMuY29nLmlpZkJlaGF2aW9yO1xuICAgICAgaWYgKGl0ZW0uY2hpbGRyZW4gJiYgaXRlbS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuYnRuQ29lcmNlSWYoaXRlbS5jaGlsZHJlbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpdGVtLmNoaWxkcmVuID0gW107XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBmaXhlZENvZXJjZShsaXN0OiBTVENvbHVtbltdKSB7XG4gICAgY29uc3QgY291bnRSZWR1Y2UgPSAoYTogbnVtYmVyLCBiOiBTVENvbHVtbikgPT4gYSArICtiLndpZHRoIS50b1N0cmluZygpLnJlcGxhY2UoJ3B4JywgJycpO1xuICAgIC8vIGxlZnQgd2lkdGhcbiAgICBsaXN0XG4gICAgICAuZmlsdGVyKHcgPT4gdy5maXhlZCAmJiB3LmZpeGVkID09PSAnbGVmdCcgJiYgdy53aWR0aClcbiAgICAgIC5mb3JFYWNoKChpdGVtLCBpZHgpID0+IChpdGVtLl9sZWZ0ID0gbGlzdC5zbGljZSgwLCBpZHgpLnJlZHVjZShjb3VudFJlZHVjZSwgMCkgKyAncHgnKSk7XG4gICAgLy8gcmlnaHQgd2lkdGhcbiAgICBsaXN0XG4gICAgICAuZmlsdGVyKHcgPT4gdy5maXhlZCAmJiB3LmZpeGVkID09PSAncmlnaHQnICYmIHcud2lkdGgpXG4gICAgICAucmV2ZXJzZSgpXG4gICAgICAuZm9yRWFjaCgoaXRlbSwgaWR4KSA9PiAoaXRlbS5fcmlnaHQgPSAoaWR4ID4gMCA/IGxpc3Quc2xpY2UoLWlkeCkucmVkdWNlKGNvdW50UmVkdWNlLCAwKSA6IDApICsgJ3B4JykpO1xuICB9XG5cbiAgcHJpdmF0ZSBzb3J0Q29lcmNlKGl0ZW06IFNUQ29sdW1uKTogU1RTb3J0TWFwIHtcbiAgICBjb25zdCByZXMgPSB0aGlzLmZpeENvZXJjZShpdGVtKTtcbiAgICByZXMucmVOYW1lID0ge1xuICAgICAgLi4udGhpcy5jb2cuc29ydFJlTmFtZSxcbiAgICAgIC4uLnJlcy5yZU5hbWUsXG4gICAgfTtcbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgcHJpdmF0ZSBmaXhDb2VyY2UoaXRlbTogU1RDb2x1bW4pOiBTVFNvcnRNYXAge1xuICAgIGlmICh0eXBlb2YgaXRlbS5zb3J0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIHsgZW5hYmxlZDogZmFsc2UgfTtcbiAgICB9XG5cbiAgICBsZXQgcmVzOiBTVFNvcnRNYXAgPSB7fTtcblxuICAgIGlmICh0eXBlb2YgaXRlbS5zb3J0ID09PSAnc3RyaW5nJykge1xuICAgICAgcmVzLmtleSA9IGl0ZW0uc29ydDtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBpdGVtLnNvcnQgIT09ICdib29sZWFuJykge1xuICAgICAgcmVzID0gaXRlbS5zb3J0O1xuICAgIH1cblxuICAgIGlmICghcmVzLmtleSkge1xuICAgICAgcmVzLmtleSA9IGl0ZW0uaW5kZXhLZXk7XG4gICAgfVxuXG4gICAgcmVzLmVuYWJsZWQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIHByaXZhdGUgZmlsdGVyQ29lcmNlKGl0ZW06IFNUQ29sdW1uKTogU1RDb2x1bW5GaWx0ZXIgfCBudWxsIHtcbiAgICBpZiAoaXRlbS5maWx0ZXIgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgbGV0IHJlczogU1RDb2x1bW5GaWx0ZXIgfCBudWxsID0gaXRlbS5maWx0ZXI7XG4gICAgcmVzLnR5cGUgPSByZXMudHlwZSB8fCAnZGVmYXVsdCc7XG5cbiAgICBsZXQgaWNvbiA9ICdmaWx0ZXInO1xuICAgIGxldCBpY29uVGhlbWUgPSAnZmlsbCc7XG4gICAgaWYgKHJlcy50eXBlID09PSAna2V5d29yZCcpIHtcbiAgICAgIGlmIChyZXMubWVudXMgPT0gbnVsbCB8fCByZXMubWVudXMhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXMubWVudXMgPSBbeyB2YWx1ZTogJycgfV07XG4gICAgICB9XG4gICAgICBpY29uID0gJ3NlYXJjaCc7XG4gICAgICBpY29uVGhlbWUgPSAnb3V0bGluZSc7XG4gICAgfVxuXG4gICAgaWYgKHJlcy5tZW51cyEubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHJlcy5tdWx0aXBsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJlcy5tdWx0aXBsZSA9IHRydWU7XG4gICAgfVxuXG4gICAgcmVzLmNvbmZpcm1UZXh0ID0gcmVzLmNvbmZpcm1UZXh0IHx8IHRoaXMuY29nLmZpbHRlckNvbmZpcm1UZXh0O1xuICAgIHJlcy5jbGVhclRleHQgPSByZXMuY2xlYXJUZXh0IHx8IHRoaXMuY29nLmZpbHRlckNsZWFyVGV4dDtcbiAgICByZXMua2V5ID0gcmVzLmtleSB8fCBpdGVtLmluZGV4S2V5O1xuICAgIHJlcy5pY29uID0gcmVzLmljb24gfHwgaWNvbjtcblxuICAgIGNvbnN0IGJhc2VJY29uID0geyB0eXBlOiBpY29uLCB0aGVtZTogaWNvblRoZW1lIH0gYXMgU1RJY29uO1xuICAgIGlmICh0eXBlb2YgcmVzLmljb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXMuaWNvbiA9IHsgLi4uYmFzZUljb24sIHR5cGU6IHJlcy5pY29uIH0gYXMgU1RJY29uO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXMuaWNvbiA9IHsgLi4uYmFzZUljb24sIC4uLnJlcy5pY29uIH07XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVEZWZhdWx0KHJlcyk7XG5cbiAgICBpZiAodGhpcy5hY2wpIHtcbiAgICAgIHJlcy5tZW51cyA9IHJlcy5tZW51cyEuZmlsdGVyKHcgPT4gdGhpcy5hY2wuY2FuKHcuYWNsKSk7XG4gICAgfVxuXG4gICAgaWYgKHJlcy5tZW51cyEubGVuZ3RoIDw9IDApIHtcbiAgICAgIHJlcyA9IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIHByaXZhdGUgcmVzdG9yZVJlbmRlcihpdGVtOiBTVENvbHVtbikge1xuICAgIGlmIChpdGVtLnJlbmRlclRpdGxlKSB7XG4gICAgICBpdGVtLl9fcmVuZGVyVGl0bGUgPSB0aGlzLnJvd1NvdXJjZS5nZXRUaXRsZShpdGVtLnJlbmRlclRpdGxlKTtcbiAgICB9XG4gICAgaWYgKGl0ZW0ucmVuZGVyKSB7XG4gICAgICBpdGVtLl9fcmVuZGVyID0gdGhpcy5yb3dTb3VyY2UuZ2V0Um93KGl0ZW0ucmVuZGVyKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHdpZGdldENvZXJjZShpdGVtOiBTVENvbHVtbik6IHZvaWQge1xuICAgIGlmIChpdGVtLnR5cGUgIT09ICd3aWRnZXQnKSByZXR1cm47XG4gICAgaWYgKGl0ZW0ud2lkZ2V0ID09IG51bGwgfHwgIXRoaXMuc3RXaWRnZXRSZWdpc3RyeS5oYXMoaXRlbS53aWRnZXQudHlwZSkpIHtcbiAgICAgIGRlbGV0ZSBpdGVtLnR5cGU7XG4gICAgICB3YXJuKGBzdDogTm8gd2lkZ2V0IGZvciB0eXBlIFwiJHtpdGVtLndpZGdldD8udHlwZX1cImApO1xuICAgIH1cbiAgfVxuXG4gIHByb2Nlc3MobGlzdDogU1RDb2x1bW5bXSk6IFNUQ29sdW1uW10ge1xuICAgIGlmICghbGlzdCB8fCBsaXN0Lmxlbmd0aCA9PT0gMCkgdGhyb3cgbmV3IEVycm9yKGBbc3RdOiB0aGUgY29sdW1ucyBwcm9wZXJ0eSBtdXNlIGJlIGRlZmluZSFgKTtcblxuICAgIGNvbnN0IHsgbm9JbmRleCB9ID0gdGhpcy5jb2c7XG4gICAgbGV0IGNoZWNrYm94Q291bnQgPSAwO1xuICAgIGxldCByYWRpb0NvdW50ID0gMDtcbiAgICBsZXQgcG9pbnQgPSAwO1xuICAgIGNvbnN0IGNvbHVtbnM6IFNUQ29sdW1uW10gPSBbXTtcbiAgICBjb25zdCBjb3B5Q29sdW1lbnMgPSBkZWVwQ29weShsaXN0KSBhcyBTVENvbHVtbltdO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiBjb3B5Q29sdW1lbnMpIHtcbiAgICAgIGlmIChpdGVtLmlpZiAmJiAhaXRlbS5paWYoaXRlbSkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5hY2wgJiYgaXRlbS5hY2wgJiYgIXRoaXMuYWNsLmNhbihpdGVtLmFjbCkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICAvLyBpbmRleFxuICAgICAgaWYgKGl0ZW0uaW5kZXgpIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGl0ZW0uaW5kZXgpKSB7XG4gICAgICAgICAgaXRlbS5pbmRleCA9IGl0ZW0uaW5kZXguc3BsaXQoJy4nKTtcbiAgICAgICAgfVxuICAgICAgICBpdGVtLmluZGV4S2V5ID0gaXRlbS5pbmRleC5qb2luKCcuJyk7XG4gICAgICB9XG5cbiAgICAgIC8vICNyZWdpb24gdGl0bGVcblxuICAgICAgY29uc3QgdGl0ID0gKHR5cGVvZiBpdGVtLnRpdGxlID09PSAnc3RyaW5nJyA/IHsgdGV4dDogaXRlbS50aXRsZSB9IDogaXRlbS50aXRsZSkgfHwge307XG4gICAgICBpZiAodGl0LmkxOG4gJiYgdGhpcy5pMThuU3J2KSB7XG4gICAgICAgIHRpdC50ZXh0ID0gdGhpcy5pMThuU3J2LmZhbnlpKHRpdC5pMThuKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aXQudGV4dCkge1xuICAgICAgICB0aXQuX3RleHQgPSB0aGlzLmRvbS5ieXBhc3NTZWN1cml0eVRydXN0SHRtbCh0aXQudGV4dCk7XG4gICAgICB9XG4gICAgICBpdGVtLnRpdGxlID0gdGl0O1xuXG4gICAgICAvLyAjZW5kcmVnaW9uXG5cbiAgICAgIC8vIG5vXG4gICAgICBpZiAoaXRlbS50eXBlID09PSAnbm8nKSB7XG4gICAgICAgIGl0ZW0ubm9JbmRleCA9IGl0ZW0ubm9JbmRleCA9PSBudWxsID8gbm9JbmRleCA6IGl0ZW0ubm9JbmRleDtcbiAgICAgIH1cbiAgICAgIC8vIGNoZWNrYm94XG4gICAgICBpZiAoaXRlbS5zZWxlY3Rpb25zID09IG51bGwpIHtcbiAgICAgICAgaXRlbS5zZWxlY3Rpb25zID0gW107XG4gICAgICB9XG4gICAgICBpZiAoaXRlbS50eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgICsrY2hlY2tib3hDb3VudDtcbiAgICAgICAgaWYgKCFpdGVtLndpZHRoKSB7XG4gICAgICAgICAgaXRlbS53aWR0aCA9IGAke2l0ZW0uc2VsZWN0aW9ucy5sZW5ndGggPiAwID8gNjIgOiA1MH1weGA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmFjbCkge1xuICAgICAgICBpdGVtLnNlbGVjdGlvbnMgPSBpdGVtLnNlbGVjdGlvbnMuZmlsdGVyKHcgPT4gdGhpcy5hY2wuY2FuKHcuYWNsKSk7XG4gICAgICB9XG4gICAgICAvLyByYWRpb1xuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgICArK3JhZGlvQ291bnQ7XG4gICAgICAgIGl0ZW0uc2VsZWN0aW9ucyA9IFtdO1xuICAgICAgICBpZiAoIWl0ZW0ud2lkdGgpIHtcbiAgICAgICAgICBpdGVtLndpZHRoID0gJzUwcHgnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyB0eXBlc1xuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ3luJykge1xuICAgICAgICBpdGVtLnluID0geyB0cnV0aDogdHJ1ZSwgLi4uaXRlbS55biB9O1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICAoaXRlbS50eXBlID09PSAnbGluaycgJiYgdHlwZW9mIGl0ZW0uY2xpY2sgIT09ICdmdW5jdGlvbicpIHx8XG4gICAgICAgIChpdGVtLnR5cGUgPT09ICdiYWRnZScgJiYgaXRlbS5iYWRnZSA9PSBudWxsKSB8fFxuICAgICAgICAoaXRlbS50eXBlID09PSAndGFnJyAmJiBpdGVtLnRhZyA9PSBudWxsKVxuICAgICAgKSB7XG4gICAgICAgIChpdGVtIGFzIGFueSkudHlwZSA9ICcnO1xuICAgICAgfVxuICAgICAgLy8gY2xhc3NOYW1lXG4gICAgICBpZiAoIWl0ZW0uY2xhc3NOYW1lKSB7XG4gICAgICAgIGl0ZW0uY2xhc3NOYW1lID0gKHtcbiAgICAgICAgICBudW1iZXI6ICd0ZXh0LXJpZ2h0JyxcbiAgICAgICAgICBjdXJyZW5jeTogJ3RleHQtcmlnaHQnLFxuICAgICAgICAgIGRhdGU6ICd0ZXh0LWNlbnRlcicsXG4gICAgICAgIH0gYXMgTnpTYWZlQW55KVtpdGVtLnR5cGUhXTtcbiAgICAgIH1cbiAgICAgIC8vIHdpZHRoXG4gICAgICBpZiAodHlwZW9mIGl0ZW0ud2lkdGggPT09ICdudW1iZXInKSB7XG4gICAgICAgIGl0ZW0ud2lkdGggPSBgJHtpdGVtLndpZHRofXB4YDtcbiAgICAgIH1cblxuICAgICAgLy8gc29ydGVyXG4gICAgICBpdGVtLl9zb3J0ID0gdGhpcy5zb3J0Q29lcmNlKGl0ZW0pO1xuICAgICAgLy8gZmlsdGVyXG4gICAgICBpdGVtLmZpbHRlciA9IHRoaXMuZmlsdGVyQ29lcmNlKGl0ZW0pIGFzIFNUQ29sdW1uRmlsdGVyO1xuICAgICAgLy8gYnV0dG9uc1xuICAgICAgaXRlbS5idXR0b25zID0gdGhpcy5idG5Db2VyY2UoaXRlbS5idXR0b25zISk7XG4gICAgICAvLyB3aWRnZXRcbiAgICAgIHRoaXMud2lkZ2V0Q29lcmNlKGl0ZW0pO1xuICAgICAgLy8gcmVzdG9yZSBjdXN0b20gcm93XG4gICAgICB0aGlzLnJlc3RvcmVSZW5kZXIoaXRlbSk7XG5cbiAgICAgIGl0ZW0uX19wb2ludCA9IHBvaW50Kys7XG4gICAgICBjb2x1bW5zLnB1c2goaXRlbSk7XG4gICAgfVxuICAgIGlmIChjaGVja2JveENvdW50ID4gMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBbc3RdOiBqdXN0IG9ubHkgb25lIGNvbHVtbiBjaGVja2JveGApO1xuICAgIH1cbiAgICBpZiAocmFkaW9Db3VudCA+IDEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgW3N0XToganVzdCBvbmx5IG9uZSBjb2x1bW4gcmFkaW9gKTtcbiAgICB9XG5cbiAgICB0aGlzLmZpeGVkQ29lcmNlKGNvbHVtbnMpO1xuXG4gICAgcmV0dXJuIGNvbHVtbnM7XG4gIH1cblxuICByZXN0b3JlQWxsUmVuZGVyKGNvbHVtbnM6IFNUQ29sdW1uW10pIHtcbiAgICBjb2x1bW5zLmZvckVhY2goaSA9PiB0aGlzLnJlc3RvcmVSZW5kZXIoaSkpO1xuICB9XG5cbiAgdXBkYXRlRGVmYXVsdChmaWx0ZXI6IFNUQ29sdW1uRmlsdGVyKTogdGhpcyB7XG4gICAgaWYgKGZpbHRlci50eXBlID09PSAnZGVmYXVsdCcpIHtcbiAgICAgIGZpbHRlci5kZWZhdWx0ID0gZmlsdGVyLm1lbnVzIS5maW5kSW5kZXgodyA9PiB3LmNoZWNrZWQhKSAhPT0gLTE7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpbHRlci5kZWZhdWx0ID0gISFmaWx0ZXIubWVudXMhWzBdLnZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNsZWFuRmlsdGVyKGNvbDogU1RDb2x1bW4pOiB0aGlzIHtcbiAgICBjb25zdCBmID0gY29sLmZpbHRlciE7XG4gICAgZi5kZWZhdWx0ID0gZmFsc2U7XG4gICAgaWYgKGYudHlwZSA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICBmLm1lbnVzIS5mb3JFYWNoKGkgPT4gKGkuY2hlY2tlZCA9IGZhbHNlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGYubWVudXMhWzBdLnZhbHVlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuIl19