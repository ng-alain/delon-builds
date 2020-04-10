/**
 * @fileoverview added by tsickle
 * Generated from: table-column-source.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __assign, __values } from "tslib";
import { Host, Inject, Injectable, Optional } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ACLService } from '@delon/acl';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { deepCopy } from '@delon/util';
import { STRowSource } from './table-row.directive';
import { STConfig } from './table.config';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtY29sdW1uLXNvdXJjZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvdGFibGUvIiwic291cmNlcyI6WyJ0YWJsZS1jb2x1bW4tc291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDeEMsT0FBTyxFQUFvQixnQkFBZ0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNsRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXZDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHMUM7SUFFRSx3QkFDVSxHQUFpQixFQUNULFNBQXNCLEVBQ2xCLEdBQWUsRUFDVyxPQUF5QixFQUMvRCxHQUFhO1FBSmIsUUFBRyxHQUFILEdBQUcsQ0FBYztRQUNULGNBQVMsR0FBVCxTQUFTLENBQWE7UUFDbEIsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUNXLFlBQU8sR0FBUCxPQUFPLENBQWtCO1FBQy9ELFFBQUcsR0FBSCxHQUFHLENBQVU7SUFDcEIsQ0FBQzs7Ozs7OztJQUVJLCtCQUFNOzs7Ozs7SUFBZCxVQUFlLENBQWlCLEVBQUUsR0FBc0I7UUFDdEQsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLEtBQUssRUFBRTtZQUNwQyxDQUFDLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztZQUNkLE9BQU87U0FDUjs7WUFFRyxHQUFHLGdCQUNGLEdBQUcsQ0FDUDtRQUNELElBQUksT0FBTyxDQUFDLENB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WkEsVUFBVSx1QkFhZCxRQUFRO2dEQUNSLFFBQVEsWUFBSSxNQUFNLFNBQUMsZ0JBQWdCO2dCQVQvQixRQUFROztJQXNWakIscUJBQUM7Q0FBQSxBQW5WRCxJQW1WQztTQWxWWSxjQUFjOzs7Ozs7SUFFdkIsNkJBQXlCOzs7OztJQUN6QixtQ0FBc0M7Ozs7O0lBQ3RDLDZCQUFtQzs7Ozs7SUFDbkMsaUNBQXVFOzs7OztJQUN2RSw2QkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIb3N0LCBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEFDTFNlcnZpY2UgfSBmcm9tICdAZGVsb24vYWNsJztcbmltcG9ydCB7IEFsYWluSTE4TlNlcnZpY2UsIEFMQUlOX0kxOE5fVE9LRU4gfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgZGVlcENvcHkgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgU1RSb3dTb3VyY2UgfSBmcm9tICcuL3RhYmxlLXJvdy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU1RDb25maWcgfSBmcm9tICcuL3RhYmxlLmNvbmZpZyc7XG5pbXBvcnQgeyBTVENvbHVtbiwgU1RDb2x1bW5CdXR0b24sIFNUQ29sdW1uQnV0dG9uUG9wLCBTVENvbHVtbkZpbHRlciwgU1RJY29uLCBTVFNvcnRNYXAgfSBmcm9tICcuL3RhYmxlLmludGVyZmFjZXMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU1RDb2x1bW5Tb3VyY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGRvbTogRG9tU2FuaXRpemVyLFxuICAgIEBIb3N0KCkgcHJpdmF0ZSByb3dTb3VyY2U6IFNUUm93U291cmNlLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgYWNsOiBBQ0xTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoQUxBSU5fSTE4Tl9UT0tFTikgcHJpdmF0ZSBpMThuU3J2OiBBbGFpbkkxOE5TZXJ2aWNlLFxuICAgIHByaXZhdGUgY29nOiBTVENvbmZpZyxcbiAgKSB7fVxuXG4gIHByaXZhdGUgZml4UG9wKGk6IFNUQ29sdW1uQnV0dG9uLCBkZWY6IFNUQ29sdW1uQnV0dG9uUG9wKTogdm9pZCB7XG4gICAgaWYgKGkucG9wID09IG51bGwgfHwgaS5wb3AgPT09IGZhbHNlKSB7XG4gICAgICBpLnBvcCA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBwb3AgPSB7XG4gICAgICAuLi5kZWYsXG4gICAgfTtcbiAgICBpZiAodHlwZW9mIGkucG9wID09PSAnc3RyaW5nJykge1xuICAgICAgcG9wLnRpdGxlID0gaS5wb3A7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgaS5wb3AgPT09ICdvYmplY3QnKSB7XG4gICAgICBwb3AgPSB7XG4gICAgICAgIC4uLnBvcCxcbiAgICAgICAgLi4uaS5wb3AsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcG9wLmNvbmRpdGlvbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcG9wLmNvbmRpdGlvbiA9ICgpID0+IGZhbHNlO1xuICAgIH1cblxuICAgIGkucG9wID0gcG9wO1xuICB9XG5cbiAgcHJpdmF0ZSBidG5Db2VyY2UobGlzdDogU1RDb2x1bW5CdXR0b25bXSk6IFNUQ29sdW1uQnV0dG9uW10ge1xuICAgIGlmICghbGlzdCkgcmV0dXJuIFtdO1xuICAgIGNvbnN0IHJldDogU1RDb2x1bW5CdXR0b25bXSA9IFtdO1xuICAgIGNvbnN0IHsgbW9kYWwsIGRyYXdlciwgcG9wLCBidG5JY29uIH0gPSB0aGlzLmNvZztcblxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBsaXN0KSB7XG4gICAgICBpZiAodGhpcy5hY2wgJiYgaXRlbS5hY2wgJiYgIXRoaXMuYWNsLmNhbihpdGVtLmFjbCkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdtb2RhbCcgfHwgaXRlbS50eXBlID09PSAnc3RhdGljJykge1xuICAgICAgICBpZiAoaXRlbS5tb2RhbCA9PSBudWxsIHx8IGl0ZW0ubW9kYWwuY29tcG9uZW50ID09IG51bGwpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oYFtzdF0gU2hvdWxkIHNwZWNpZnkgbW9kYWwgcGFyYW1ldGVyYCk7XG4gICAgICAgICAgaXRlbS50eXBlID0gJ25vbmUnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW0ubW9kYWwgPSB7IC4uLnsgcGFyYW1zTmFtZTogJ3JlY29yZCcsIHNpemU6ICdsZycgfSwgLi4ubW9kYWwsIC4uLml0ZW0ubW9kYWwgfTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbS50eXBlID09PSAnZHJhd2VyJykge1xuICAgICAgICBpZiAoaXRlbS5kcmF3ZXIgPT0gbnVsbCB8fCBpdGVtLmRyYXdlci5jb21wb25lbnQgPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihgW3N0XSBTaG91bGQgc3BlY2lmeSBkcmF3ZXIgcGFyYW1ldGVyYCk7XG4gICAgICAgICAgaXRlbS50eXBlID0gJ25vbmUnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW0uZHJhd2VyID0geyAuLi57IHBhcmFtc05hbWU6ICdyZWNvcmQnLCBzaXplOiAnbGcnIH0sIC4uLmRyYXdlciwgLi4uaXRlbS5kcmF3ZXIgfTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbS50eXBlID09PSAnZGVsJyAmJiB0eXBlb2YgaXRlbS5wb3AgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGl0ZW0ucG9wID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgLy8gcG9wXG4gICAgICB0aGlzLmZpeFBvcChpdGVtLCBwb3AhKTtcblxuICAgICAgaWYgKGl0ZW0uaWNvbikge1xuICAgICAgICBpdGVtLmljb24gPSB7XG4gICAgICAgICAgLi4uYnRuSWNvbixcbiAgICAgICAgICAuLi4odHlwZW9mIGl0ZW0uaWNvbiA9PT0gJ3N0cmluZycgPyB7IHR5cGU6IGl0ZW0uaWNvbiB9IDogaXRlbS5pY29uKSxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgaXRlbS5jaGlsZHJlbiA9IGl0ZW0uY2hpbGRyZW4gJiYgaXRlbS5jaGlsZHJlbi5sZW5ndGggPiAwID8gdGhpcy5idG5Db2VyY2UoaXRlbS5jaGlsZHJlbikgOiBbXTtcblxuICAgICAgLy8gaTE4blxuICAgICAgaWYgKGl0ZW0uaTE4biAmJiB0aGlzLmkxOG5TcnYpIHtcbiAgICAgICAgaXRlbS50ZXh0ID0gdGhpcy5pMThuU3J2LmZhbnlpKGl0ZW0uaTE4bik7XG4gICAgICB9XG5cbiAgICAgIHJldC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgICB0aGlzLmJ0bkNvZXJjZUlmKHJldCk7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIHByaXZhdGUgYnRuQ29lcmNlSWYobGlzdDogU1RDb2x1bW5CdXR0b25bXSkge1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiBsaXN0KSB7XG4gICAgICBpZiAoIWl0ZW0uaWlmKSBpdGVtLmlpZiA9ICgpID0+IHRydWU7XG4gICAgICBpdGVtLmlpZkJlaGF2aW9yID0gaXRlbS5paWZCZWhhdmlvciB8fCB0aGlzLmNvZy5paWZCZWhhdmlvcjtcbiAgICAgIGlmIChpdGVtLmNoaWxkcmVuICYmIGl0ZW0uY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLmJ0bkNvZXJjZUlmKGl0ZW0uY2hpbGRyZW4pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXRlbS5jaGlsZHJlbiA9IFtdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZml4ZWRDb2VyY2UobGlzdDogU1RDb2x1bW5bXSkge1xuICAgIGNvbnN0IGNvdW50UmVkdWNlID0gKGE6IG51bWJlciwgYjogU1RDb2x1bW4pID0+IGEgKyArYi53aWR0aCEudG9TdHJpbmcoKS5yZXBsYWNlKCdweCcsICcnKTtcbiAgICAvLyBsZWZ0IHdpZHRoXG4gICAgbGlzdFxuICAgICAgLmZpbHRlcih3ID0+IHcuZml4ZWQgJiYgdy5maXhlZCA9PT0gJ2xlZnQnICYmIHcud2lkdGgpXG4gICAgICAuZm9yRWFjaCgoaXRlbSwgaWR4KSA9PiAoaXRlbS5fbGVmdCA9IGxpc3Quc2xpY2UoMCwgaWR4KS5yZWR1Y2UoY291bnRSZWR1Y2UsIDApICsgJ3B4JykpO1xuICAgIC8vIHJpZ2h0IHdpZHRoXG4gICAgbGlzdFxuICAgICAgLmZpbHRlcih3ID0+IHcuZml4ZWQgJiYgdy5maXhlZCA9PT0gJ3JpZ2h0JyAmJiB3LndpZHRoKVxuICAgICAgLnJldmVyc2UoKVxuICAgICAgLmZvckVhY2goKGl0ZW0sIGlkeCkgPT4gKGl0ZW0uX3JpZ2h0ID0gKGlkeCA+IDAgPyBsaXN0LnNsaWNlKC1pZHgpLnJlZHVjZShjb3VudFJlZHVjZSwgMCkgOiAwKSArICdweCcpKTtcbiAgfVxuXG4gIHByaXZhdGUgc29ydENvZXJjZShpdGVtOiBTVENvbHVtbik6IFNUU29ydE1hcCB7XG4gICAgY29uc3QgcmVzID0gdGhpcy5maXhDb2VyY2UoaXRlbSk7XG4gICAgcmVzLnJlTmFtZSA9IHtcbiAgICAgIC4uLnRoaXMuY29nLnNvcnRSZU5hbWUsXG4gICAgICAuLi5yZXMucmVOYW1lLFxuICAgIH07XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIHByaXZhdGUgZml4Q29lcmNlKGl0ZW06IFNUQ29sdW1uKTogU1RTb3J0TWFwIHtcbiAgICBpZiAodHlwZW9mIGl0ZW0uc29ydCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiB7IGVuYWJsZWQ6IGZhbHNlIH07XG4gICAgfVxuXG4gICAgbGV0IHJlczogU1RTb3J0TWFwID0ge307XG5cbiAgICBpZiAodHlwZW9mIGl0ZW0uc29ydCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJlcy5rZXkgPSBpdGVtLnNvcnQ7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgaXRlbS5zb3J0ICE9PSAnYm9vbGVhbicpIHtcbiAgICAgIHJlcyA9IGl0ZW0uc29ydDtcbiAgICB9XG5cbiAgICBpZiAoIXJlcy5rZXkpIHtcbiAgICAgIHJlcy5rZXkgPSBpdGVtLmluZGV4S2V5O1xuICAgIH1cblxuICAgIHJlcy5lbmFibGVkID0gdHJ1ZTtcblxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBwcml2YXRlIGZpbHRlckNvZXJjZShpdGVtOiBTVENvbHVtbik6IFNUQ29sdW1uRmlsdGVyIHwgbnVsbCB7XG4gICAgaWYgKGl0ZW0uZmlsdGVyID09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGxldCByZXM6IFNUQ29sdW1uRmlsdGVyIHwgbnVsbCA9IGl0ZW0uZmlsdGVyO1xuICAgIHJlcy50eXBlID0gcmVzLnR5cGUgfHwgJ2RlZmF1bHQnO1xuXG4gICAgbGV0IGljb24gPSAnZmlsdGVyJztcbiAgICBsZXQgaWNvblRoZW1lID0gJ2ZpbGwnO1xuICAgIGlmIChyZXMudHlwZSA9PT0gJ2tleXdvcmQnKSB7XG4gICAgICBpZiAocmVzLm1lbnVzID09IG51bGwgfHwgcmVzLm1lbnVzIS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmVzLm1lbnVzID0gW3sgdmFsdWU6ICcnIH1dO1xuICAgICAgfVxuICAgICAgaWNvbiA9ICdzZWFyY2gnO1xuICAgICAgaWNvblRoZW1lID0gJ291dGxpbmUnO1xuICAgIH1cblxuICAgIGlmIChyZXMubWVudXMhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiByZXMubXVsdGlwbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXMubXVsdGlwbGUgPSB0cnVlO1xuICAgIH1cblxuICAgIHJlcy5jb25maXJtVGV4dCA9IHJlcy5jb25maXJtVGV4dCB8fCB0aGlzLmNvZy5maWx0ZXJDb25maXJtVGV4dDtcbiAgICByZXMuY2xlYXJUZXh0ID0gcmVzLmNsZWFyVGV4dCB8fCB0aGlzLmNvZy5maWx0ZXJDbGVhclRleHQ7XG4gICAgcmVzLmtleSA9IHJlcy5rZXkgfHwgaXRlbS5pbmRleEtleTtcbiAgICByZXMuaWNvbiA9IHJlcy5pY29uIHx8IGljb247XG5cbiAgICBjb25zdCBiYXNlSWNvbiA9IHsgdHlwZTogaWNvbiwgdGhlbWU6IGljb25UaGVtZSB9IGFzIFNUSWNvbjtcbiAgICBpZiAodHlwZW9mIHJlcy5pY29uID09PSAnc3RyaW5nJykge1xuICAgICAgcmVzLmljb24gPSB7IC4uLmJhc2VJY29uLCB0eXBlOiByZXMuaWNvbiB9IGFzIFNUSWNvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzLmljb24gPSB7IC4uLmJhc2VJY29uLCAuLi5yZXMuaWNvbiB9O1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlRGVmYXVsdChyZXMpO1xuXG4gICAgaWYgKHRoaXMuYWNsKSB7XG4gICAgICByZXMubWVudXMgPSByZXMubWVudXMhLmZpbHRlcih3ID0+IHRoaXMuYWNsLmNhbih3LmFjbCkpO1xuICAgIH1cblxuICAgIGlmIChyZXMubWVudXMhLmxlbmd0aCA8PSAwKSB7XG4gICAgICByZXMgPSBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBwcml2YXRlIHJlc3RvcmVSZW5kZXIoaXRlbTogU1RDb2x1bW4pIHtcbiAgICBpZiAoaXRlbS5yZW5kZXJUaXRsZSkge1xuICAgICAgaXRlbS5fX3JlbmRlclRpdGxlID0gdGhpcy5yb3dTb3VyY2UuZ2V0VGl0bGUoaXRlbS5yZW5kZXJUaXRsZSk7XG4gICAgfVxuICAgIGlmIChpdGVtLnJlbmRlcikge1xuICAgICAgaXRlbS5fX3JlbmRlciA9IHRoaXMucm93U291cmNlLmdldFJvdyhpdGVtLnJlbmRlcik7XG4gICAgfVxuICB9XG5cbiAgcHJvY2VzcyhsaXN0OiBTVENvbHVtbltdKTogU1RDb2x1bW5bXSB7XG4gICAgaWYgKCFsaXN0IHx8IGxpc3QubGVuZ3RoID09PSAwKSB0aHJvdyBuZXcgRXJyb3IoYFtzdF06IHRoZSBjb2x1bW5zIHByb3BlcnR5IG11c2UgYmUgZGVmaW5lIWApO1xuXG4gICAgY29uc3QgeyBub0luZGV4IH0gPSB0aGlzLmNvZztcbiAgICBsZXQgY2hlY2tib3hDb3VudCA9IDA7XG4gICAgbGV0IHJhZGlvQ291bnQgPSAwO1xuICAgIGxldCBwb2ludCA9IDA7XG4gICAgY29uc3QgY29sdW1uczogU1RDb2x1bW5bXSA9IFtdO1xuICAgIGNvbnN0IGNvcHlDb2x1bWVucyA9IGRlZXBDb3B5KGxpc3QpIGFzIFNUQ29sdW1uW107XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGNvcHlDb2x1bWVucykge1xuICAgICAgaWYgKGl0ZW0uaWlmICYmICFpdGVtLmlpZihpdGVtKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmFjbCAmJiBpdGVtLmFjbCAmJiAhdGhpcy5hY2wuY2FuKGl0ZW0uYWNsKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIC8vIGluZGV4XG4gICAgICBpZiAoaXRlbS5pbmRleCkge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoaXRlbS5pbmRleCkpIHtcbiAgICAgICAgICBpdGVtLmluZGV4ID0gaXRlbS5pbmRleC5zcGxpdCgnLicpO1xuICAgICAgICB9XG4gICAgICAgIGl0ZW0uaW5kZXhLZXkgPSBpdGVtLmluZGV4LmpvaW4oJy4nKTtcbiAgICAgIH1cblxuICAgICAgLy8gI3JlZ2lvbiB0aXRsZVxuXG4gICAgICBjb25zdCB0aXQgPSAodHlwZW9mIGl0ZW0udGl0bGUgPT09ICdzdHJpbmcnID8geyB0ZXh0OiBpdGVtLnRpdGxlIH0gOiBpdGVtLnRpdGxlKSB8fCB7fTtcbiAgICAgIGlmICh0aXQuaTE4biAmJiB0aGlzLmkxOG5TcnYpIHtcbiAgICAgICAgdGl0LnRleHQgPSB0aGlzLmkxOG5TcnYuZmFueWkodGl0LmkxOG4pO1xuICAgICAgfVxuICAgICAgaWYgKHRpdC50ZXh0KSB7XG4gICAgICAgIHRpdC5fdGV4dCA9IHRoaXMuZG9tLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHRpdC50ZXh0KTtcbiAgICAgIH1cbiAgICAgIGl0ZW0udGl0bGUgPSB0aXQ7XG5cbiAgICAgIC8vICNlbmRyZWdpb25cblxuICAgICAgLy8gbm9cbiAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdubycpIHtcbiAgICAgICAgaXRlbS5ub0luZGV4ID0gaXRlbS5ub0luZGV4ID09IG51bGwgPyBub0luZGV4IDogaXRlbS5ub0luZGV4O1xuICAgICAgfVxuICAgICAgLy8gY2hlY2tib3hcbiAgICAgIGlmIChpdGVtLnNlbGVjdGlvbnMgPT0gbnVsbCkge1xuICAgICAgICBpdGVtLnNlbGVjdGlvbnMgPSBbXTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgKytjaGVja2JveENvdW50O1xuICAgICAgICBpZiAoIWl0ZW0ud2lkdGgpIHtcbiAgICAgICAgICBpdGVtLndpZHRoID0gYCR7aXRlbS5zZWxlY3Rpb25zLmxlbmd0aCA+IDAgPyA2MiA6IDUwfXB4YDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuYWNsKSB7XG4gICAgICAgIGl0ZW0uc2VsZWN0aW9ucyA9IGl0ZW0uc2VsZWN0aW9ucy5maWx0ZXIodyA9PiB0aGlzLmFjbC5jYW4ody5hY2wpKTtcbiAgICAgIH1cbiAgICAgIC8vIHJhZGlvXG4gICAgICBpZiAoaXRlbS50eXBlID09PSAncmFkaW8nKSB7XG4gICAgICAgICsrcmFkaW9Db3VudDtcbiAgICAgICAgaXRlbS5zZWxlY3Rpb25zID0gW107XG4gICAgICAgIGlmICghaXRlbS53aWR0aCkge1xuICAgICAgICAgIGl0ZW0ud2lkdGggPSAnNTBweCc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIHR5cGVzXG4gICAgICBpZiAoaXRlbS50eXBlID09PSAneW4nKSB7XG4gICAgICAgIGl0ZW0ueW4gPSB7IHRydXRoOiB0cnVlLCAuLi5pdGVtLnluIH07XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIChpdGVtLnR5cGUgPT09ICdsaW5rJyAmJiB0eXBlb2YgaXRlbS5jbGljayAhPT0gJ2Z1bmN0aW9uJykgfHxcbiAgICAgICAgKGl0ZW0udHlwZSA9PT0gJ2JhZGdlJyAmJiBpdGVtLmJhZGdlID09IG51bGwpIHx8XG4gICAgICAgIChpdGVtLnR5cGUgPT09ICd0YWcnICYmIGl0ZW0udGFnID09IG51bGwpXG4gICAgICApIHtcbiAgICAgICAgKGl0ZW0gYXMgYW55KS50eXBlID0gJyc7XG4gICAgICB9XG4gICAgICAvLyBjbGFzc05hbWVcbiAgICAgIGlmICghaXRlbS5jbGFzc05hbWUpIHtcbiAgICAgICAgaXRlbS5jbGFzc05hbWUgPSAoe1xuICAgICAgICAgIG51bWJlcjogJ3RleHQtcmlnaHQnLFxuICAgICAgICAgIGN1cnJlbmN5OiAndGV4dC1yaWdodCcsXG4gICAgICAgICAgZGF0ZTogJ3RleHQtY2VudGVyJyxcbiAgICAgICAgfSBhcyBOelNhZmVBbnkpW2l0ZW0udHlwZSFdO1xuICAgICAgfVxuICAgICAgLy8gd2lkdGhcbiAgICAgIGlmICh0eXBlb2YgaXRlbS53aWR0aCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgaXRlbS53aWR0aCA9IGAke2l0ZW0ud2lkdGh9cHhgO1xuICAgICAgfVxuXG4gICAgICAvLyBzb3J0ZXJcbiAgICAgIGl0ZW0uX3NvcnQgPSB0aGlzLnNvcnRDb2VyY2UoaXRlbSk7XG4gICAgICAvLyBmaWx0ZXJcbiAgICAgIGl0ZW0uZmlsdGVyID0gdGhpcy5maWx0ZXJDb2VyY2UoaXRlbSkgYXMgU1RDb2x1bW5GaWx0ZXI7XG4gICAgICAvLyBidXR0b25zXG4gICAgICBpdGVtLmJ1dHRvbnMgPSB0aGlzLmJ0bkNvZXJjZShpdGVtLmJ1dHRvbnMhKTtcbiAgICAgIC8vIHJlc3RvcmUgY3VzdG9tIHJvd1xuICAgICAgdGhpcy5yZXN0b3JlUmVuZGVyKGl0ZW0pO1xuXG4gICAgICBpdGVtLl9fcG9pbnQgPSBwb2ludCsrO1xuICAgICAgY29sdW1ucy5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgICBpZiAoY2hlY2tib3hDb3VudCA+IDEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgW3N0XToganVzdCBvbmx5IG9uZSBjb2x1bW4gY2hlY2tib3hgKTtcbiAgICB9XG4gICAgaWYgKHJhZGlvQ291bnQgPiAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFtzdF06IGp1c3Qgb25seSBvbmUgY29sdW1uIHJhZGlvYCk7XG4gICAgfVxuXG4gICAgdGhpcy5maXhlZENvZXJjZShjb2x1bW5zKTtcblxuICAgIHJldHVybiBjb2x1bW5zO1xuICB9XG5cbiAgcmVzdG9yZUFsbFJlbmRlcihjb2x1bW5zOiBTVENvbHVtbltdKSB7XG4gICAgY29sdW1ucy5mb3JFYWNoKGkgPT4gdGhpcy5yZXN0b3JlUmVuZGVyKGkpKTtcbiAgfVxuXG4gIHVwZGF0ZURlZmF1bHQoZmlsdGVyOiBTVENvbHVtbkZpbHRlcik6IHRoaXMge1xuICAgIGlmIChmaWx0ZXIudHlwZSA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICBmaWx0ZXIuZGVmYXVsdCA9IGZpbHRlci5tZW51cyEuZmluZEluZGV4KHcgPT4gdy5jaGVja2VkISkgIT09IC0xO1xuICAgIH0gZWxzZSB7XG4gICAgICBmaWx0ZXIuZGVmYXVsdCA9ICEhZmlsdGVyLm1lbnVzIVswXS52YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjbGVhbkZpbHRlcihjb2w6IFNUQ29sdW1uKTogdGhpcyB7XG4gICAgY29uc3QgZiA9IGNvbC5maWx0ZXIhO1xuICAgIGYuZGVmYXVsdCA9IGZhbHNlO1xuICAgIGlmIChmLnR5cGUgPT09ICdkZWZhdWx0Jykge1xuICAgICAgZi5tZW51cyEuZm9yRWFjaChpID0+IChpLmNoZWNrZWQgPSBmYWxzZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmLm1lbnVzIVswXS52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cbiJdfQ==