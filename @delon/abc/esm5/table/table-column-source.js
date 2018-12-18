/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Host, Inject, Injectable, Optional } from '@angular/core';
import { ACLService } from '@delon/acl';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { deepCopy } from '@delon/util';
import { STRowSource } from './table-row.directive';
import { STConfig } from './table.config';
/**
 * @record
 */
export function STSortMap() { }
if (false) {
    /**
     * 是否启用排序
     * @type {?|undefined}
     */
    STSortMap.prototype.enabled;
}
var STColumnSource = /** @class */ (function () {
    function STColumnSource(rowSource, acl, i18nSrv, cog) {
        this.rowSource = rowSource;
        this.acl = acl;
        this.i18nSrv = i18nSrv;
        this.cog = cog;
    }
    /**
     * @param {?} list
     * @return {?}
     */
    STColumnSource.prototype.btnCoerce = /**
     * @param {?} list
     * @return {?}
     */
    function (list) {
        var e_1, _a;
        if (!list)
            return [];
        /** @type {?} */
        var ret = [];
        var _b = this.cog, modal = _b.modal, drawer = _b.drawer, popTitle = _b.popTitle, btnIcon = _b.btnIcon;
        try {
            for (var list_1 = tslib_1.__values(list), list_1_1 = list_1.next(); !list_1_1.done; list_1_1 = list_1.next()) {
                var item = list_1_1.value;
                if (this.acl && item.acl && !this.acl.can(item.acl)) {
                    continue;
                }
                if (item.type === 'modal' || item.type === 'static') {
                    // compatible
                    if (item.component != null) {
                        item.modal = {
                            component: item.component,
                            params: item.params,
                            paramsName: item.paramName || modal.paramsName,
                            size: item.size || modal.size,
                            modalOptions: item.modalOptions || modal.modalOptions,
                        };
                    }
                    if (item.modal == null || item.modal.component == null) {
                        console.warn("[st] Should specify modal parameter");
                        item.type = 'none';
                    }
                    else {
                        item.modal = tslib_1.__assign({ paramsName: 'record', size: 'lg' }, modal, item.modal);
                    }
                }
                if (item.type === 'drawer') {
                    if (item.drawer == null || item.drawer.component == null) {
                        console.warn("[st] Should specify drawer parameter");
                        item.type = 'none';
                    }
                    else {
                        item.drawer = tslib_1.__assign({ paramsName: 'record', size: 'lg' }, drawer, item.drawer);
                    }
                }
                if (item.type === 'del' && typeof item.pop === 'undefined') {
                    item.pop = true;
                }
                if (item.pop === true) {
                    item.popTitle = item.popTitle || popTitle;
                }
                else {
                    item.pop = false;
                }
                if (item.icon) {
                    item.icon = tslib_1.__assign({}, btnIcon, (typeof item.icon === 'string' ? { type: item.icon } : item.icon));
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
     * @param {?} list
     * @return {?}
     */
    STColumnSource.prototype.btnCoerceIf = /**
     * @param {?} list
     * @return {?}
     */
    function (list) {
        var e_2, _a;
        try {
            for (var list_2 = tslib_1.__values(list), list_2_1 = list_2.next(); !list_2_1.done; list_2_1 = list_2.next()) {
                var item = list_2_1.value;
                if (!item.iif)
                    item.iif = function () { return true; };
                if (!item.children) {
                    item.children = [];
                }
                else {
                    this.btnCoerceIf(item.children);
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
     * @param {?} list
     * @return {?}
     */
    STColumnSource.prototype.fixedCoerce = /**
     * @param {?} list
     * @return {?}
     */
    function (list) {
        /** @type {?} */
        var countReduce = function (a, b) {
            return a + +b.width.toString().replace('px', '');
        };
        // left width
        list
            .filter(function (w) { return w.fixed && w.fixed === 'left' && w.width; })
            .forEach(function (item, idx) { return (item._left = list.slice(0, idx).reduce(countReduce, 0) + 'px'); });
        // right width
        list
            .filter(function (w) { return w.fixed && w.fixed === 'right' && w.width; })
            .reverse()
            .forEach(function (item, idx) { return (item._right = (idx > 0 ? list.slice(-idx).reduce(countReduce, 0) : 0) + 'px'); });
    };
    /**
     * @param {?} item
     * @return {?}
     */
    STColumnSource.prototype.sortCoerce = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        // compatible
        if (item.sorter && typeof item.sorter === 'function') {
            return {
                enabled: true,
                // tslint:disable-next-line:no-any
                default: (/** @type {?} */ (item.sort)),
                compare: item.sorter,
                key: item.sortKey || item.indexKey,
                reName: item.sortReName,
            };
        }
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
     * @param {?} item
     * @return {?}
     */
    STColumnSource.prototype.filterCoerce = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var _this = this;
        /** @type {?} */
        var res = null;
        // compatible
        if (item.filters && item.filters.length > 0) {
            res = {
                confirmText: item.filterConfirmText,
                clearText: item.filterClearText,
                default: item.filtered,
                // tslint:disable-next-line:no-any
                fn: (/** @type {?} */ (item.filter)),
                icon: item.filterIcon,
                key: item.filterKey || item.indexKey,
                menus: item.filters,
                multiple: item.filterMultiple,
                reName: item.filterReName,
            };
        }
        else {
            res = item.filter;
        }
        if (res == null || res.menus.length === 0) {
            return null;
        }
        if (typeof res.multiple === 'undefined') {
            res.multiple = true;
        }
        if (!res.confirmText) {
            res.confirmText = this.cog.filterConfirmText;
        }
        if (!res.clearText) {
            res.clearText = this.cog.filterClearText;
        }
        if (!res.icon) {
            res.icon = "filter";
        }
        if (!res.key) {
            res.key = item.indexKey;
        }
        res.default = res.menus.findIndex(function (w) { return w.checked; }) !== -1;
        if (this.acl) {
            res.menus = res.menus.filter(function (w) { return _this.acl.can(w.acl); });
        }
        if (res.menus.length <= 0) {
            res = null;
        }
        return res;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    STColumnSource.prototype.restoreRender = /**
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
        var _this = this;
        var e_3, _a;
        if (!list || list.length === 0)
            throw new Error("[st]: the columns property muse be define!");
        var noIndex = this.cog.noIndex;
        /** @type {?} */
        var checkboxCount = 0;
        /** @type {?} */
        var radioCount = 0;
        /** @type {?} */
        var columns = [];
        /** @type {?} */
        var copyColumens = (/** @type {?} */ (deepCopy(list)));
        try {
            for (var copyColumens_1 = tslib_1.__values(copyColumens), copyColumens_1_1 = copyColumens_1.next(); !copyColumens_1_1.done; copyColumens_1_1 = copyColumens_1.next()) {
                var item = copyColumens_1_1.value;
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
                // title
                if (item.i18n && this.i18nSrv) {
                    item.title = this.i18nSrv.fanyi(item.i18n);
                }
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
                    item.selections = item.selections.filter(function (w) { return _this.acl.can(w.acl); });
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
                    item.yn = tslib_1.__assign({ truth: true }, item.yn);
                    // compatible
                    if (item.ynTruth != null)
                        item.yn.truth = item.ynTruth;
                    if (item.ynYes != null)
                        item.yn.yes = item.ynYes;
                    if (item.ynNo != null)
                        item.yn.no = item.ynNo;
                }
                if ((item.type === 'link' && typeof item.click !== 'function') ||
                    (item.type === 'badge' && item.badge == null) ||
                    (item.type === 'tag' && item.tag == null)) {
                    // tslint:disable-next-line:no-any
                    ((/** @type {?} */ (item))).type = '';
                }
                // className
                if (!item.className) {
                    item.className = {
                        number: 'text-right',
                        currency: 'text-right',
                        date: 'text-center',
                    }[item.type];
                }
                // sorter
                item._sort = this.sortCoerce(item);
                // filter
                item.filter = this.filterCoerce(item);
                // buttons
                item.buttons = this.btnCoerce(item.buttons);
                // restore custom row
                this.restoreRender(item);
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
        columns.forEach(function (i) { return _this.restoreRender(i); });
    };
    STColumnSource.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    STColumnSource.ctorParameters = function () { return [
        { type: STRowSource, decorators: [{ type: Host }] },
        { type: ACLService, decorators: [{ type: Optional }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [ALAIN_I18N_TOKEN,] }] },
        { type: STConfig }
    ]; };
    return STColumnSource;
}());
export { STColumnSource };
if (false) {
    /** @type {?} */
    STColumnSource.prototype.rowSource;
    /** @type {?} */
    STColumnSource.prototype.acl;
    /** @type {?} */
    STColumnSource.prototype.i18nSrv;
    /** @type {?} */
    STColumnSource.prototype.cog;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtY29sdW1uLXNvdXJjZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvdGFibGUvIiwic291cmNlcyI6WyJ0YWJsZS1jb2x1bW4tc291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3hDLE9BQU8sRUFBb0IsZ0JBQWdCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDbEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUV2QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBUTFDLCtCQUdDOzs7Ozs7SUFEQyw0QkFBa0I7O0FBR3BCO0lBRUUsd0JBQ2tCLFNBQXNCLEVBQ2xCLEdBQWUsRUFDVyxPQUF5QixFQUMvRCxHQUFhO1FBSEwsY0FBUyxHQUFULFNBQVMsQ0FBYTtRQUNsQixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQ1csWUFBTyxHQUFQLE9BQU8sQ0FBa0I7UUFDL0QsUUFBRyxHQUFILEdBQUcsQ0FBVTtJQUNuQixDQUFDOzs7OztJQUVHLGtDQUFTOzs7O0lBQWpCLFVBQWtCLElBQXNCOztRQUN0QyxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU8sRUFBRSxDQUFDOztZQUNmLEdBQUcsR0FBcUIsRUFBRTtRQUMxQixJQUFBLGFBQStDLEVBQTdDLGdCQUFLLEVBQUUsa0JBQU0sRUFBRSxzQkFBUSxFQUFFLG9CQUFvQjs7WUFFckQsS0FBbUIsSUFBQSxTQUFBLGlCQUFBLElBQUksQ0FBQSwwQkFBQSw0Q0FBRTtnQkFBcEIsSUFBTSxJQUFJLGlCQUFBO2dCQUNiLElBQUksSUFBSSxDQUFDLEdBQUcsSUFB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QUFNLElBQUksS0FBSyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7U0FDckQ7UUFFRCxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTFCLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7Ozs7O0lBRUQseUNBQWdCOzs7O0lBQWhCLFVBQWlCLE9BQW1CO1FBQXBDLGlCQUVDO1FBREMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQXJCLENBQXFCLENBQUMsQ0FBQztJQUM5QyxDQUFDOztnQkF6U0YsVUFBVTs7OztnQkFkRixXQUFXLHVCQWlCZixJQUFJO2dCQXJCQSxVQUFVLHVCQXNCZCxRQUFRO2dEQUNSLFFBQVEsWUFBSSxNQUFNLFNBQUMsZ0JBQWdCO2dCQWxCL0IsUUFBUTs7SUF1VGpCLHFCQUFDO0NBQUEsQUExU0QsSUEwU0M7U0F6U1ksY0FBYzs7O0lBRXZCLG1DQUFzQzs7SUFDdEMsNkJBQW1DOztJQUNuQyxpQ0FBdUU7O0lBQ3ZFLDZCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhvc3QsIEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFDTFNlcnZpY2UgfSBmcm9tICdAZGVsb24vYWNsJztcbmltcG9ydCB7IEFsYWluSTE4TlNlcnZpY2UsIEFMQUlOX0kxOE5fVE9LRU4gfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgZGVlcENvcHkgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbmltcG9ydCB7IFNUUm93U291cmNlIH0gZnJvbSAnLi90YWJsZS1yb3cuZGlyZWN0aXZlJztcbmltcG9ydCB7IFNUQ29uZmlnIH0gZnJvbSAnLi90YWJsZS5jb25maWcnO1xuaW1wb3J0IHtcbiAgU1RDb2x1bW4sXG4gIFNUQ29sdW1uQnV0dG9uLFxuICBTVENvbHVtbkZpbHRlcixcbiAgU1RDb2x1bW5Tb3J0LFxufSBmcm9tICcuL3RhYmxlLmludGVyZmFjZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNUU29ydE1hcCBleHRlbmRzIFNUQ29sdW1uU29ydCB7XG4gIC8qKiDmmK/lkKblkK/nlKjmjpLluo8gKi9cbiAgZW5hYmxlZD86IGJvb2xlYW47XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTVENvbHVtblNvdXJjZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBIb3N0KCkgcHJpdmF0ZSByb3dTb3VyY2U6IFNUUm93U291cmNlLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgYWNsOiBBQ0xTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoQUxBSU5fSTE4Tl9UT0tFTikgcHJpdmF0ZSBpMThuU3J2OiBBbGFpbkkxOE5TZXJ2aWNlLFxuICAgIHByaXZhdGUgY29nOiBTVENvbmZpZyxcbiAgKSB7IH1cblxuICBwcml2YXRlIGJ0bkNvZXJjZShsaXN0OiBTVENvbHVtbkJ1dHRvbltdKTogU1RDb2x1bW5CdXR0b25bXSB7XG4gICAgaWYgKCFsaXN0KSByZXR1cm4gW107XG4gICAgY29uc3QgcmV0OiBTVENvbHVtbkJ1dHRvbltdID0gW107XG4gICAgY29uc3QgeyBtb2RhbCwgZHJhd2VyLCBwb3BUaXRsZSwgYnRuSWNvbiB9ID0gdGhpcy5jb2c7XG5cbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgbGlzdCkge1xuICAgICAgaWYgKHRoaXMuYWNsICYmIGl0ZW0uYWNsICYmICF0aGlzLmFjbC5jYW4oaXRlbS5hY2wpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbS50eXBlID09PSAnbW9kYWwnIHx8IGl0ZW0udHlwZSA9PT0gJ3N0YXRpYycpIHtcbiAgICAgICAgLy8gY29tcGF0aWJsZVxuICAgICAgICBpZiAoaXRlbS5jb21wb25lbnQgIT0gbnVsbCkge1xuICAgICAgICAgIGl0ZW0ubW9kYWwgPSB7XG4gICAgICAgICAgICBjb21wb25lbnQ6IGl0ZW0uY29tcG9uZW50LFxuICAgICAgICAgICAgcGFyYW1zOiBpdGVtLnBhcmFtcyxcbiAgICAgICAgICAgIHBhcmFtc05hbWU6IGl0ZW0ucGFyYW1OYW1lIHx8IG1vZGFsLnBhcmFtc05hbWUsXG4gICAgICAgICAgICBzaXplOiBpdGVtLnNpemUgfHwgbW9kYWwuc2l6ZSxcbiAgICAgICAgICAgIG1vZGFsT3B0aW9uczogaXRlbS5tb2RhbE9wdGlvbnMgfHwgbW9kYWwubW9kYWxPcHRpb25zLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGl0ZW0ubW9kYWwgPT0gbnVsbCB8fCBpdGVtLm1vZGFsLmNvbXBvbmVudCA9PSBudWxsKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGBbc3RdIFNob3VsZCBzcGVjaWZ5IG1vZGFsIHBhcmFtZXRlcmApO1xuICAgICAgICAgIGl0ZW0udHlwZSA9ICdub25lJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtLm1vZGFsID0geyAuLi57IHBhcmFtc05hbWU6ICdyZWNvcmQnLCBzaXplOiAnbGcnIH0sIC4uLm1vZGFsLCAuLi5pdGVtLm1vZGFsIH07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ2RyYXdlcicpIHtcbiAgICAgICAgaWYgKGl0ZW0uZHJhd2VyID09IG51bGwgfHwgaXRlbS5kcmF3ZXIuY29tcG9uZW50ID09IG51bGwpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oYFtzdF0gU2hvdWxkIHNwZWNpZnkgZHJhd2VyIHBhcmFtZXRlcmApO1xuICAgICAgICAgIGl0ZW0udHlwZSA9ICdub25lJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtLmRyYXdlciA9IHsgLi4ueyBwYXJhbXNOYW1lOiAncmVjb3JkJywgc2l6ZTogJ2xnJyB9LCAuLi5kcmF3ZXIsIC4uLml0ZW0uZHJhd2VyIH07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ2RlbCcgJiYgdHlwZW9mIGl0ZW0ucG9wID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBpdGVtLnBvcCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtLnBvcCA9PT0gdHJ1ZSkge1xuICAgICAgICBpdGVtLnBvcFRpdGxlID0gaXRlbS5wb3BUaXRsZSB8fCBwb3BUaXRsZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGl0ZW0ucG9wID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtLmljb24pIHtcbiAgICAgICAgaXRlbS5pY29uID0ge1xuICAgICAgICAgIC4uLmJ0bkljb24sXG4gICAgICAgICAgLi4uKHR5cGVvZiBpdGVtLmljb24gPT09ICdzdHJpbmcnID8geyB0eXBlOiBpdGVtLmljb24gfSA6IGl0ZW0uaWNvbiksXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGl0ZW0uY2hpbGRyZW4gPSBpdGVtLmNoaWxkcmVuICYmIGl0ZW0uY2hpbGRyZW4ubGVuZ3RoID4gMCA/IHRoaXMuYnRuQ29lcmNlKGl0ZW0uY2hpbGRyZW4pIDogW107XG5cbiAgICAgIC8vIGkxOG5cbiAgICAgIGlmIChpdGVtLmkxOG4gJiYgdGhpcy5pMThuU3J2KSB7XG4gICAgICAgIGl0ZW0udGV4dCA9IHRoaXMuaTE4blNydi5mYW55aShpdGVtLmkxOG4pO1xuICAgICAgfVxuXG4gICAgICByZXQucHVzaChpdGVtKTtcbiAgICB9XG4gICAgdGhpcy5idG5Db2VyY2VJZihyZXQpO1xuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBwcml2YXRlIGJ0bkNvZXJjZUlmKGxpc3Q6IFNUQ29sdW1uQnV0dG9uW10pIHtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgbGlzdCkge1xuICAgICAgaWYgKCFpdGVtLmlpZikgaXRlbS5paWYgPSAoKSA9PiB0cnVlO1xuICAgICAgaWYgKCFpdGVtLmNoaWxkcmVuKSB7XG4gICAgICAgIGl0ZW0uY2hpbGRyZW4gPSBbXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYnRuQ29lcmNlSWYoaXRlbS5jaGlsZHJlbik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBmaXhlZENvZXJjZShsaXN0OiBTVENvbHVtbltdKSB7XG4gICAgY29uc3QgY291bnRSZWR1Y2UgPSAoYTogbnVtYmVyLCBiOiBTVENvbHVtbikgPT5cbiAgICAgIGEgKyArYi53aWR0aC50b1N0cmluZygpLnJlcGxhY2UoJ3B4JywgJycpO1xuICAgIC8vIGxlZnQgd2lkdGhcbiAgICBsaXN0XG4gICAgICAuZmlsdGVyKHcgPT4gdy5maXhlZCAmJiB3LmZpeGVkID09PSAnbGVmdCcgJiYgdy53aWR0aClcbiAgICAgIC5mb3JFYWNoKChpdGVtLCBpZHgpID0+IChpdGVtLl9sZWZ0ID0gbGlzdC5zbGljZSgwLCBpZHgpLnJlZHVjZShjb3VudFJlZHVjZSwgMCkgKyAncHgnKSk7XG4gICAgLy8gcmlnaHQgd2lkdGhcbiAgICBsaXN0XG4gICAgICAuZmlsdGVyKHcgPT4gdy5maXhlZCAmJiB3LmZpeGVkID09PSAncmlnaHQnICYmIHcud2lkdGgpXG4gICAgICAucmV2ZXJzZSgpXG4gICAgICAuZm9yRWFjaCgoaXRlbSwgaWR4KSA9PiAoaXRlbS5fcmlnaHQgPSAoaWR4ID4gMCA/IGxpc3Quc2xpY2UoLWlkeCkucmVkdWNlKGNvdW50UmVkdWNlLCAwKSA6IDApICsgJ3B4JykpO1xuICB9XG5cbiAgcHJpdmF0ZSBzb3J0Q29lcmNlKGl0ZW06IFNUQ29sdW1uKTogU1RTb3J0TWFwIHtcbiAgICAvLyBjb21wYXRpYmxlXG4gICAgaWYgKGl0ZW0uc29ydGVyICYmIHR5cGVvZiBpdGVtLnNvcnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgICAgICBkZWZhdWx0OiBpdGVtLnNvcnQgYXMgYW55LFxuICAgICAgICBjb21wYXJlOiBpdGVtLnNvcnRlcixcbiAgICAgICAga2V5OiBpdGVtLnNvcnRLZXkgfHwgaXRlbS5pbmRleEtleSxcbiAgICAgICAgcmVOYW1lOiBpdGVtLnNvcnRSZU5hbWUsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgaXRlbS5zb3J0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIHsgZW5hYmxlZDogZmFsc2UgfTtcbiAgICB9XG5cbiAgICBsZXQgcmVzOiBTVFNvcnRNYXAgPSB7fTtcblxuICAgIGlmICh0eXBlb2YgaXRlbS5zb3J0ID09PSAnc3RyaW5nJykge1xuICAgICAgcmVzLmtleSA9IGl0ZW0uc29ydDtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBpdGVtLnNvcnQgIT09ICdib29sZWFuJykge1xuICAgICAgcmVzID0gaXRlbS5zb3J0O1xuICAgIH1cblxuICAgIGlmICghcmVzLmtleSkge1xuICAgICAgcmVzLmtleSA9IGl0ZW0uaW5kZXhLZXk7XG4gICAgfVxuXG4gICAgcmVzLmVuYWJsZWQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIHByaXZhdGUgZmlsdGVyQ29lcmNlKGl0ZW06IFNUQ29sdW1uKTogU1RDb2x1bW5GaWx0ZXIge1xuICAgIGxldCByZXM6IFNUQ29sdW1uRmlsdGVyID0gbnVsbDtcbiAgICAvLyBjb21wYXRpYmxlXG4gICAgaWYgKGl0ZW0uZmlsdGVycyAmJiBpdGVtLmZpbHRlcnMubGVuZ3RoID4gMCkge1xuICAgICAgcmVzID0ge1xuICAgICAgICBjb25maXJtVGV4dDogaXRlbS5maWx0ZXJDb25maXJtVGV4dCxcbiAgICAgICAgY2xlYXJUZXh0OiBpdGVtLmZpbHRlckNsZWFyVGV4dCxcbiAgICAgICAgZGVmYXVsdDogaXRlbS5maWx0ZXJlZCxcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgICAgICBmbjogaXRlbS5maWx0ZXIgYXMgYW55LFxuICAgICAgICBpY29uOiBpdGVtLmZpbHRlckljb24sXG4gICAgICAgIGtleTogaXRlbS5maWx0ZXJLZXkgfHwgaXRlbS5pbmRleEtleSxcbiAgICAgICAgbWVudXM6IGl0ZW0uZmlsdGVycyxcbiAgICAgICAgbXVsdGlwbGU6IGl0ZW0uZmlsdGVyTXVsdGlwbGUsXG4gICAgICAgIHJlTmFtZTogaXRlbS5maWx0ZXJSZU5hbWUsXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXMgPSBpdGVtLmZpbHRlcjtcbiAgICB9XG5cbiAgICBpZiAocmVzID09IG51bGwgfHwgcmVzLm1lbnVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiByZXMubXVsdGlwbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXMubXVsdGlwbGUgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoIXJlcy5jb25maXJtVGV4dCkge1xuICAgICAgcmVzLmNvbmZpcm1UZXh0ID0gdGhpcy5jb2cuZmlsdGVyQ29uZmlybVRleHQ7XG4gICAgfVxuICAgIGlmICghcmVzLmNsZWFyVGV4dCkge1xuICAgICAgcmVzLmNsZWFyVGV4dCA9IHRoaXMuY29nLmZpbHRlckNsZWFyVGV4dDtcbiAgICB9XG4gICAgaWYgKCFyZXMuaWNvbikge1xuICAgICAgcmVzLmljb24gPSBgZmlsdGVyYDtcbiAgICB9XG4gICAgaWYgKCFyZXMua2V5KSB7XG4gICAgICByZXMua2V5ID0gaXRlbS5pbmRleEtleTtcbiAgICB9XG5cbiAgICByZXMuZGVmYXVsdCA9IHJlcy5tZW51cy5maW5kSW5kZXgodyA9PiB3LmNoZWNrZWQpICE9PSAtMTtcblxuICAgIGlmICh0aGlzLmFjbCkge1xuICAgICAgcmVzLm1lbnVzID0gcmVzLm1lbnVzLmZpbHRlcih3ID0+IHRoaXMuYWNsLmNhbih3LmFjbCkpO1xuICAgIH1cblxuICAgIGlmIChyZXMubWVudXMubGVuZ3RoIDw9IDApIHtcbiAgICAgIHJlcyA9IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIHByaXZhdGUgcmVzdG9yZVJlbmRlcihpdGVtOiBTVENvbHVtbikge1xuICAgIGlmIChpdGVtLnJlbmRlclRpdGxlKSB7XG4gICAgICBpdGVtLl9fcmVuZGVyVGl0bGUgPSB0aGlzLnJvd1NvdXJjZS5nZXRUaXRsZShpdGVtLnJlbmRlclRpdGxlKTtcbiAgICB9XG4gICAgaWYgKGl0ZW0ucmVuZGVyKSB7XG4gICAgICBpdGVtLl9fcmVuZGVyID0gdGhpcy5yb3dTb3VyY2UuZ2V0Um93KGl0ZW0ucmVuZGVyKTtcbiAgICB9XG4gIH1cblxuICBwcm9jZXNzKGxpc3Q6IFNUQ29sdW1uW10pOiBTVENvbHVtbltdIHtcbiAgICBpZiAoIWxpc3QgfHwgbGlzdC5sZW5ndGggPT09IDApXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFtzdF06IHRoZSBjb2x1bW5zIHByb3BlcnR5IG11c2UgYmUgZGVmaW5lIWApO1xuXG4gICAgY29uc3QgeyBub0luZGV4IH0gPSB0aGlzLmNvZztcbiAgICBsZXQgY2hlY2tib3hDb3VudCA9IDA7XG4gICAgbGV0IHJhZGlvQ291bnQgPSAwO1xuICAgIGNvbnN0IGNvbHVtbnM6IFNUQ29sdW1uW10gPSBbXTtcbiAgICBjb25zdCBjb3B5Q29sdW1lbnMgPSBkZWVwQ29weShsaXN0KSBhcyBTVENvbHVtbltdO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiBjb3B5Q29sdW1lbnMpIHtcbiAgICAgIGlmICh0aGlzLmFjbCAmJiBpdGVtLmFjbCAmJiAhdGhpcy5hY2wuY2FuKGl0ZW0uYWNsKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIC8vIGluZGV4XG4gICAgICBpZiAoaXRlbS5pbmRleCkge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoaXRlbS5pbmRleCkpIHtcbiAgICAgICAgICBpdGVtLmluZGV4ID0gaXRlbS5pbmRleC5zcGxpdCgnLicpO1xuICAgICAgICB9XG4gICAgICAgIGl0ZW0uaW5kZXhLZXkgPSBpdGVtLmluZGV4LmpvaW4oJy4nKTtcbiAgICAgIH1cbiAgICAgIC8vIHRpdGxlXG4gICAgICBpZiAoaXRlbS5pMThuICYmIHRoaXMuaTE4blNydikge1xuICAgICAgICBpdGVtLnRpdGxlID0gdGhpcy5pMThuU3J2LmZhbnlpKGl0ZW0uaTE4bik7XG4gICAgICB9XG4gICAgICAvLyBub1xuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ25vJykge1xuICAgICAgICBpdGVtLm5vSW5kZXggPSBpdGVtLm5vSW5kZXggPT0gbnVsbCA/IG5vSW5kZXggOiBpdGVtLm5vSW5kZXg7XG4gICAgICB9XG4gICAgICAvLyBjaGVja2JveFxuICAgICAgaWYgKGl0ZW0uc2VsZWN0aW9ucyA9PSBudWxsKSB7XG4gICAgICAgIGl0ZW0uc2VsZWN0aW9ucyA9IFtdO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICArK2NoZWNrYm94Q291bnQ7XG4gICAgICAgIGlmICghaXRlbS53aWR0aCkge1xuICAgICAgICAgIGl0ZW0ud2lkdGggPSBgJHtpdGVtLnNlbGVjdGlvbnMubGVuZ3RoID4gMCA/IDYyIDogNTB9cHhgO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5hY2wpIHtcbiAgICAgICAgaXRlbS5zZWxlY3Rpb25zID0gaXRlbS5zZWxlY3Rpb25zLmZpbHRlcih3ID0+IHRoaXMuYWNsLmNhbih3LmFjbCkpO1xuICAgICAgfVxuICAgICAgLy8gcmFkaW9cbiAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgICAgKytyYWRpb0NvdW50O1xuICAgICAgICBpdGVtLnNlbGVjdGlvbnMgPSBbXTtcbiAgICAgICAgaWYgKCFpdGVtLndpZHRoKSB7XG4gICAgICAgICAgaXRlbS53aWR0aCA9ICc1MHB4JztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gdHlwZXNcbiAgICAgIGlmIChpdGVtLnR5cGUgPT09ICd5bicpIHtcbiAgICAgICAgaXRlbS55biA9IHsgdHJ1dGg6IHRydWUsIC4uLml0ZW0ueW4gfTtcbiAgICAgICAgLy8gY29tcGF0aWJsZVxuICAgICAgICBpZiAoaXRlbS55blRydXRoICE9IG51bGwpIGl0ZW0ueW4udHJ1dGggPSBpdGVtLnluVHJ1dGg7XG4gICAgICAgIGlmIChpdGVtLnluWWVzICE9IG51bGwpIGl0ZW0ueW4ueWVzID0gaXRlbS55blllcztcbiAgICAgICAgaWYgKGl0ZW0ueW5ObyAhPSBudWxsKSBpdGVtLnluLm5vID0gaXRlbS55bk5vO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICAoaXRlbS50eXBlID09PSAnbGluaycgJiYgdHlwZW9mIGl0ZW0uY2xpY2sgIT09ICdmdW5jdGlvbicpIHx8XG4gICAgICAgIChpdGVtLnR5cGUgPT09ICdiYWRnZScgJiYgaXRlbS5iYWRnZSA9PSBudWxsKSB8fFxuICAgICAgICAoaXRlbS50eXBlID09PSAndGFnJyAmJiBpdGVtLnRhZyA9PSBudWxsKVxuICAgICAgKSB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICAgICAgKGl0ZW0gYXMgYW55KS50eXBlID0gJyc7XG4gICAgICB9XG4gICAgICAvLyBjbGFzc05hbWVcbiAgICAgIGlmICghaXRlbS5jbGFzc05hbWUpIHtcbiAgICAgICAgaXRlbS5jbGFzc05hbWUgPSB7XG4gICAgICAgICAgbnVtYmVyOiAndGV4dC1yaWdodCcsXG4gICAgICAgICAgY3VycmVuY3k6ICd0ZXh0LXJpZ2h0JyxcbiAgICAgICAgICBkYXRlOiAndGV4dC1jZW50ZXInLFxuICAgICAgICB9W2l0ZW0udHlwZV07XG4gICAgICB9XG5cbiAgICAgIC8vIHNvcnRlclxuICAgICAgaXRlbS5fc29ydCA9IHRoaXMuc29ydENvZXJjZShpdGVtKTtcbiAgICAgIC8vIGZpbHRlclxuICAgICAgaXRlbS5maWx0ZXIgPSB0aGlzLmZpbHRlckNvZXJjZShpdGVtKTtcbiAgICAgIC8vIGJ1dHRvbnNcbiAgICAgIGl0ZW0uYnV0dG9ucyA9IHRoaXMuYnRuQ29lcmNlKGl0ZW0uYnV0dG9ucyk7XG4gICAgICAvLyByZXN0b3JlIGN1c3RvbSByb3dcbiAgICAgIHRoaXMucmVzdG9yZVJlbmRlcihpdGVtKTtcblxuICAgICAgY29sdW1ucy5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgICBpZiAoY2hlY2tib3hDb3VudCA+IDEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgW3N0XToganVzdCBvbmx5IG9uZSBjb2x1bW4gY2hlY2tib3hgKTtcbiAgICB9XG4gICAgaWYgKHJhZGlvQ291bnQgPiAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFtzdF06IGp1c3Qgb25seSBvbmUgY29sdW1uIHJhZGlvYCk7XG4gICAgfVxuXG4gICAgdGhpcy5maXhlZENvZXJjZShjb2x1bW5zKTtcblxuICAgIHJldHVybiBjb2x1bW5zO1xuICB9XG5cbiAgcmVzdG9yZUFsbFJlbmRlcihjb2x1bW5zOiBTVENvbHVtbltdKSB7XG4gICAgY29sdW1ucy5mb3JFYWNoKGkgPT4gdGhpcy5yZXN0b3JlUmVuZGVyKGkpKTtcbiAgfVxufVxuIl19