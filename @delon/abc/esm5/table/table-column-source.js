/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Optional, Inject, Host } from '@angular/core';
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
                        item.modal = Object.assign({}, modal, item.modal);
                    }
                }
                if (item.type === 'drawer') {
                    if (item.drawer == null || item.drawer.component == null) {
                        console.warn("[st] Should specify drawer parameter");
                        item.type = 'none';
                    }
                    else {
                        item.drawer = Object.assign({}, drawer, item.drawer);
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
                    item.icon = Object.assign({}, btnIcon, typeof item.icon === 'string' ? { type: item.icon } : item.icon);
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
            .forEach(function (item, idx) {
            return (item._left = list.slice(0, idx).reduce(countReduce, 0) + 'px');
        });
        // right width
        list
            .filter(function (w) { return w.fixed && w.fixed === 'right' && w.width; })
            .reverse()
            .forEach(function (item, idx) {
            return (item._right =
                (idx > 0 ? list.slice(-idx).reduce(countReduce, 0) : 0) + 'px');
        });
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
                    item.yn = Object.assign({ truth: true }, item.yn);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtY29sdW1uLXNvdXJjZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvdGFibGUvIiwic291cmNlcyI6WyJ0YWJsZS1jb2x1bW4tc291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBb0IsTUFBTSxjQUFjLENBQUM7QUFDbEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQVF2QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBRTFDLCtCQUdDOzs7Ozs7SUFEQyw0QkFBa0I7O0FBR3BCO0lBRUUsd0JBQ2tCLFNBQXNCLEVBQ2xCLEdBQWUsRUFHM0IsT0FBeUIsRUFDekIsR0FBYTtRQUxMLGNBQVMsR0FBVCxTQUFTLENBQWE7UUFDbEIsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUczQixZQUFPLEdBQVAsT0FBTyxDQUFrQjtRQUN6QixRQUFHLEdBQUgsR0FBRyxDQUFVO0lBQ3BCLENBQUM7Ozs7O0lBRUksa0NBQVM7Ozs7SUFBakIsVUFBa0IsSUFBc0I7O1FBQ3RDLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTyxFQUFFLENBQUM7O1lBQ2YsR0FBRyxHQUFxQixFQUFFO1FBQzFCLElBQUEsYUFBK0MsRUFBN0MsZ0JBQUssRUFBRSxrQkFBTSxFQUFFLHNCQUFRLEVBQUUsb0JBQW9COztZQUVyRCxLQUFtQixJQUFBLFNBQUEsaUJBQUEsSUFBSSxDQUFBLDBCQUFBLDRDQUFFO2dCQUFwQixJQUFNLElBQUksaUJBQUE7Z0JBQ2IsSUFBSSxJQUFJLENBQUMsR0FBRyxJ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QUksS0FBSyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7U0FDckQ7UUFFRCxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTFCLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7Ozs7O0lBRUQseUNBQWdCOzs7O0lBQWhCLFVBQWlCLE9BQW1CO1FBQXBDLGlCQUVDO1FBREMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQXJCLENBQXFCLENBQUMsQ0FBQztJQUM5QyxDQUFDOztnQkFoVEYsVUFBVTs7OztnQkFSRixXQUFXLHVCQVdmLElBQUk7Z0JBckJBLFVBQVUsdUJBc0JkLFFBQVE7Z0RBQ1IsUUFBUSxZQUNSLE1BQU0sU0FBQyxnQkFBZ0I7Z0JBYm5CLFFBQVE7O0lBd1RqQixxQkFBQztDQUFBLEFBalRELElBaVRDO1NBaFRZLGNBQWM7OztJQUV2QixtQ0FBc0M7O0lBQ3RDLDZCQUFtQzs7SUFDbkMsaUNBRWlDOztJQUNqQyw2QkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgSW5qZWN0LCBIb3N0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBQ0xTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL2FjbCc7XG5pbXBvcnQgeyBBTEFJTl9JMThOX1RPS0VOLCBBbGFpbkkxOE5TZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IGRlZXBDb3B5IH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5pbXBvcnQge1xuICBTVENvbHVtbixcbiAgU1RDb2x1bW5CdXR0b24sXG4gIFNUQ29sdW1uU29ydCxcbiAgU1RDb2x1bW5GaWx0ZXIsXG59IGZyb20gJy4vdGFibGUuaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBTVFJvd1NvdXJjZSB9IGZyb20gJy4vdGFibGUtcm93LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBTVENvbmZpZyB9IGZyb20gJy4vdGFibGUuY29uZmlnJztcblxuZXhwb3J0IGludGVyZmFjZSBTVFNvcnRNYXAgZXh0ZW5kcyBTVENvbHVtblNvcnQge1xuICAvKiog5piv5ZCm5ZCv55So5o6S5bqPICovXG4gIGVuYWJsZWQ/OiBib29sZWFuO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU1RDb2x1bW5Tb3VyY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBASG9zdCgpIHByaXZhdGUgcm93U291cmNlOiBTVFJvd1NvdXJjZSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGFjbDogQUNMU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoQUxBSU5fSTE4Tl9UT0tFTilcbiAgICBwcml2YXRlIGkxOG5TcnY6IEFsYWluSTE4TlNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjb2c6IFNUQ29uZmlnLFxuICApIHt9XG5cbiAgcHJpdmF0ZSBidG5Db2VyY2UobGlzdDogU1RDb2x1bW5CdXR0b25bXSk6IFNUQ29sdW1uQnV0dG9uW10ge1xuICAgIGlmICghbGlzdCkgcmV0dXJuIFtdO1xuICAgIGNvbnN0IHJldDogU1RDb2x1bW5CdXR0b25bXSA9IFtdO1xuICAgIGNvbnN0IHsgbW9kYWwsIGRyYXdlciwgcG9wVGl0bGUsIGJ0bkljb24gfSA9IHRoaXMuY29nO1xuXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGxpc3QpIHtcbiAgICAgIGlmICh0aGlzLmFjbCAmJiBpdGVtLmFjbCAmJiAhdGhpcy5hY2wuY2FuKGl0ZW0uYWNsKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ21vZGFsJyB8fCBpdGVtLnR5cGUgPT09ICdzdGF0aWMnKSB7XG4gICAgICAgIC8vIGNvbXBhdGlibGVcbiAgICAgICAgaWYgKGl0ZW0uY29tcG9uZW50ICE9IG51bGwpIHtcbiAgICAgICAgICBpdGVtLm1vZGFsID0ge1xuICAgICAgICAgICAgY29tcG9uZW50OiBpdGVtLmNvbXBvbmVudCxcbiAgICAgICAgICAgIHBhcmFtczogaXRlbS5wYXJhbXMsXG4gICAgICAgICAgICBwYXJhbXNOYW1lOiBpdGVtLnBhcmFtTmFtZSB8fCBtb2RhbC5wYXJhbXNOYW1lLFxuICAgICAgICAgICAgc2l6ZTogaXRlbS5zaXplIHx8IG1vZGFsLnNpemUsXG4gICAgICAgICAgICBtb2RhbE9wdGlvbnM6IGl0ZW0ubW9kYWxPcHRpb25zIHx8IG1vZGFsLm1vZGFsT3B0aW9ucyxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChpdGVtLm1vZGFsID09IG51bGwgfHwgaXRlbS5tb2RhbC5jb21wb25lbnQgPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihgW3N0XSBTaG91bGQgc3BlY2lmeSBtb2RhbCBwYXJhbWV0ZXJgKTtcbiAgICAgICAgICBpdGVtLnR5cGUgPSAnbm9uZSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbS5tb2RhbCA9IE9iamVjdC5hc3NpZ24oe30sIG1vZGFsLCBpdGVtLm1vZGFsKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbS50eXBlID09PSAnZHJhd2VyJykge1xuICAgICAgICBpZiAoaXRlbS5kcmF3ZXIgPT0gbnVsbCB8fCBpdGVtLmRyYXdlci5jb21wb25lbnQgPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihgW3N0XSBTaG91bGQgc3BlY2lmeSBkcmF3ZXIgcGFyYW1ldGVyYCk7XG4gICAgICAgICAgaXRlbS50eXBlID0gJ25vbmUnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW0uZHJhd2VyID0gT2JqZWN0LmFzc2lnbih7fSwgZHJhd2VyLCBpdGVtLmRyYXdlcik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ2RlbCcgJiYgdHlwZW9mIGl0ZW0ucG9wID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBpdGVtLnBvcCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtLnBvcCA9PT0gdHJ1ZSkge1xuICAgICAgICBpdGVtLnBvcFRpdGxlID0gaXRlbS5wb3BUaXRsZSB8fCBwb3BUaXRsZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGl0ZW0ucG9wID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtLmljb24pIHtcbiAgICAgICAgaXRlbS5pY29uID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICB7fSxcbiAgICAgICAgICBidG5JY29uLFxuICAgICAgICAgIHR5cGVvZiBpdGVtLmljb24gPT09ICdzdHJpbmcnID8geyB0eXBlOiBpdGVtLmljb24gfSA6IGl0ZW0uaWNvbixcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaXRlbS5jaGlsZHJlbiA9IGl0ZW0uY2hpbGRyZW4gJiYgaXRlbS5jaGlsZHJlbi5sZW5ndGggPiAwID8gdGhpcy5idG5Db2VyY2UoaXRlbS5jaGlsZHJlbikgOiBbXTtcblxuICAgICAgLy8gaTE4blxuICAgICAgaWYgKGl0ZW0uaTE4biAmJiB0aGlzLmkxOG5TcnYpIHtcbiAgICAgICAgaXRlbS50ZXh0ID0gdGhpcy5pMThuU3J2LmZhbnlpKGl0ZW0uaTE4bik7XG4gICAgICB9XG5cbiAgICAgIHJldC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgICB0aGlzLmJ0bkNvZXJjZUlmKHJldCk7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIHByaXZhdGUgYnRuQ29lcmNlSWYobGlzdDogU1RDb2x1bW5CdXR0b25bXSkge1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiBsaXN0KSB7XG4gICAgICBpZiAoIWl0ZW0uaWlmKSBpdGVtLmlpZiA9ICgpID0+IHRydWU7XG4gICAgICBpZiAoIWl0ZW0uY2hpbGRyZW4pIHtcbiAgICAgICAgaXRlbS5jaGlsZHJlbiA9IFtdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5idG5Db2VyY2VJZihpdGVtLmNoaWxkcmVuKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGZpeGVkQ29lcmNlKGxpc3Q6IFNUQ29sdW1uW10pIHtcbiAgICBjb25zdCBjb3VudFJlZHVjZSA9IChhOiBudW1iZXIsIGI6IFNUQ29sdW1uKSA9PlxuICAgICAgYSArICtiLndpZHRoLnRvU3RyaW5nKCkucmVwbGFjZSgncHgnLCAnJyk7XG4gICAgLy8gbGVmdCB3aWR0aFxuICAgIGxpc3RcbiAgICAgIC5maWx0ZXIodyA9PiB3LmZpeGVkICYmIHcuZml4ZWQgPT09ICdsZWZ0JyAmJiB3LndpZHRoKVxuICAgICAgLmZvckVhY2goXG4gICAgICAgIChpdGVtLCBpZHgpID0+XG4gICAgICAgICAgKGl0ZW0uX2xlZnQgPSBsaXN0LnNsaWNlKDAsIGlkeCkucmVkdWNlKGNvdW50UmVkdWNlLCAwKSArICdweCcpLFxuICAgICAgKTtcbiAgICAvLyByaWdodCB3aWR0aFxuICAgIGxpc3RcbiAgICAgIC5maWx0ZXIodyA9PiB3LmZpeGVkICYmIHcuZml4ZWQgPT09ICdyaWdodCcgJiYgdy53aWR0aClcbiAgICAgIC5yZXZlcnNlKClcbiAgICAgIC5mb3JFYWNoKFxuICAgICAgICAoaXRlbSwgaWR4KSA9PlxuICAgICAgICAgIChpdGVtLl9yaWdodCA9XG4gICAgICAgICAgICAoaWR4ID4gMCA/IGxpc3Quc2xpY2UoLWlkeCkucmVkdWNlKGNvdW50UmVkdWNlLCAwKSA6IDApICsgJ3B4JyksXG4gICAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBzb3J0Q29lcmNlKGl0ZW06IFNUQ29sdW1uKTogU1RTb3J0TWFwIHtcbiAgICAvLyBjb21wYXRpYmxlXG4gICAgaWYgKGl0ZW0uc29ydGVyICYmIHR5cGVvZiBpdGVtLnNvcnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgZGVmYXVsdDogaXRlbS5zb3J0IGFzIGFueSxcbiAgICAgICAgY29tcGFyZTogaXRlbS5zb3J0ZXIsXG4gICAgICAgIGtleTogaXRlbS5zb3J0S2V5IHx8IGl0ZW0uaW5kZXhLZXksXG4gICAgICAgIHJlTmFtZTogaXRlbS5zb3J0UmVOYW1lLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGl0ZW0uc29ydCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiB7IGVuYWJsZWQ6IGZhbHNlIH07XG4gICAgfVxuXG4gICAgbGV0IHJlczogU1RTb3J0TWFwID0ge307XG5cbiAgICBpZiAodHlwZW9mIGl0ZW0uc29ydCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJlcy5rZXkgPSBpdGVtLnNvcnQ7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgaXRlbS5zb3J0ICE9PSAnYm9vbGVhbicpIHtcbiAgICAgIHJlcyA9IGl0ZW0uc29ydDtcbiAgICB9XG5cbiAgICBpZiAoIXJlcy5rZXkpIHtcbiAgICAgIHJlcy5rZXkgPSBpdGVtLmluZGV4S2V5O1xuICAgIH1cblxuICAgIHJlcy5lbmFibGVkID0gdHJ1ZTtcblxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBwcml2YXRlIGZpbHRlckNvZXJjZShpdGVtOiBTVENvbHVtbik6IFNUQ29sdW1uRmlsdGVyIHtcbiAgICBsZXQgcmVzOiBTVENvbHVtbkZpbHRlciA9IG51bGw7XG4gICAgLy8gY29tcGF0aWJsZVxuICAgIGlmIChpdGVtLmZpbHRlcnMgJiYgaXRlbS5maWx0ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJlcyA9IHtcbiAgICAgICAgY29uZmlybVRleHQ6IGl0ZW0uZmlsdGVyQ29uZmlybVRleHQsXG4gICAgICAgIGNsZWFyVGV4dDogaXRlbS5maWx0ZXJDbGVhclRleHQsXG4gICAgICAgIGRlZmF1bHQ6IGl0ZW0uZmlsdGVyZWQsXG4gICAgICAgIGZuOiBpdGVtLmZpbHRlciBhcyBhbnksXG4gICAgICAgIGljb246IGl0ZW0uZmlsdGVySWNvbixcbiAgICAgICAga2V5OiBpdGVtLmZpbHRlcktleSB8fCBpdGVtLmluZGV4S2V5LFxuICAgICAgICBtZW51czogaXRlbS5maWx0ZXJzLFxuICAgICAgICBtdWx0aXBsZTogaXRlbS5maWx0ZXJNdWx0aXBsZSxcbiAgICAgICAgcmVOYW1lOiBpdGVtLmZpbHRlclJlTmFtZSxcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcyA9IGl0ZW0uZmlsdGVyO1xuICAgIH1cblxuICAgIGlmIChyZXMgPT0gbnVsbCB8fCByZXMubWVudXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHJlcy5tdWx0aXBsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJlcy5tdWx0aXBsZSA9IHRydWU7XG4gICAgfVxuICAgIGlmICghcmVzLmNvbmZpcm1UZXh0KSB7XG4gICAgICByZXMuY29uZmlybVRleHQgPSB0aGlzLmNvZy5maWx0ZXJDb25maXJtVGV4dDtcbiAgICB9XG4gICAgaWYgKCFyZXMuY2xlYXJUZXh0KSB7XG4gICAgICByZXMuY2xlYXJUZXh0ID0gdGhpcy5jb2cuZmlsdGVyQ2xlYXJUZXh0O1xuICAgIH1cbiAgICBpZiAoIXJlcy5pY29uKSB7XG4gICAgICByZXMuaWNvbiA9IGBmaWx0ZXJgO1xuICAgIH1cbiAgICBpZiAoIXJlcy5rZXkpIHtcbiAgICAgIHJlcy5rZXkgPSBpdGVtLmluZGV4S2V5O1xuICAgIH1cblxuICAgIHJlcy5kZWZhdWx0ID0gcmVzLm1lbnVzLmZpbmRJbmRleCh3ID0+IHcuY2hlY2tlZCkgIT09IC0xO1xuXG4gICAgaWYgKHRoaXMuYWNsKSB7XG4gICAgICByZXMubWVudXMgPSByZXMubWVudXMuZmlsdGVyKHcgPT4gdGhpcy5hY2wuY2FuKHcuYWNsKSk7XG4gICAgfVxuXG4gICAgaWYgKHJlcy5tZW51cy5sZW5ndGggPD0gMCkge1xuICAgICAgcmVzID0gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgcHJpdmF0ZSByZXN0b3JlUmVuZGVyKGl0ZW06IFNUQ29sdW1uKSB7XG4gICAgaWYgKGl0ZW0ucmVuZGVyVGl0bGUpIHtcbiAgICAgIGl0ZW0uX19yZW5kZXJUaXRsZSA9IHRoaXMucm93U291cmNlLmdldFRpdGxlKGl0ZW0ucmVuZGVyVGl0bGUpO1xuICAgIH1cbiAgICBpZiAoaXRlbS5yZW5kZXIpIHtcbiAgICAgIGl0ZW0uX19yZW5kZXIgPSB0aGlzLnJvd1NvdXJjZS5nZXRSb3coaXRlbS5yZW5kZXIpO1xuICAgIH1cbiAgfVxuXG4gIHByb2Nlc3MobGlzdDogU1RDb2x1bW5bXSk6IFNUQ29sdW1uW10ge1xuICAgIGlmICghbGlzdCB8fCBsaXN0Lmxlbmd0aCA9PT0gMClcbiAgICAgIHRocm93IG5ldyBFcnJvcihgW3N0XTogdGhlIGNvbHVtbnMgcHJvcGVydHkgbXVzZSBiZSBkZWZpbmUhYCk7XG5cbiAgICBjb25zdCB7IG5vSW5kZXggfSA9IHRoaXMuY29nO1xuICAgIGxldCBjaGVja2JveENvdW50ID0gMDtcbiAgICBsZXQgcmFkaW9Db3VudCA9IDA7XG4gICAgY29uc3QgY29sdW1uczogU1RDb2x1bW5bXSA9IFtdO1xuICAgIGNvbnN0IGNvcHlDb2x1bWVucyA9IGRlZXBDb3B5KGxpc3QpIGFzIFNUQ29sdW1uW107XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGNvcHlDb2x1bWVucykge1xuICAgICAgaWYgKHRoaXMuYWNsICYmIGl0ZW0uYWNsICYmICF0aGlzLmFjbC5jYW4oaXRlbS5hY2wpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgLy8gaW5kZXhcbiAgICAgIGlmIChpdGVtLmluZGV4KSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShpdGVtLmluZGV4KSkge1xuICAgICAgICAgIGl0ZW0uaW5kZXggPSBpdGVtLmluZGV4LnNwbGl0KCcuJyk7XG4gICAgICAgIH1cbiAgICAgICAgaXRlbS5pbmRleEtleSA9IGl0ZW0uaW5kZXguam9pbignLicpO1xuICAgICAgfVxuICAgICAgLy8gdGl0bGVcbiAgICAgIGlmIChpdGVtLmkxOG4gJiYgdGhpcy5pMThuU3J2KSB7XG4gICAgICAgIGl0ZW0udGl0bGUgPSB0aGlzLmkxOG5TcnYuZmFueWkoaXRlbS5pMThuKTtcbiAgICAgIH1cbiAgICAgIC8vIG5vXG4gICAgICBpZiAoaXRlbS50eXBlID09PSAnbm8nKSB7XG4gICAgICAgIGl0ZW0ubm9JbmRleCA9IGl0ZW0ubm9JbmRleCA9PSBudWxsID8gbm9JbmRleCA6IGl0ZW0ubm9JbmRleDtcbiAgICAgIH1cbiAgICAgIC8vIGNoZWNrYm94XG4gICAgICBpZiAoaXRlbS5zZWxlY3Rpb25zID09IG51bGwpIHtcbiAgICAgICAgaXRlbS5zZWxlY3Rpb25zID0gW107XG4gICAgICB9XG4gICAgICBpZiAoaXRlbS50eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgICsrY2hlY2tib3hDb3VudDtcbiAgICAgICAgaWYgKCFpdGVtLndpZHRoKSB7XG4gICAgICAgICAgaXRlbS53aWR0aCA9IGAke2l0ZW0uc2VsZWN0aW9ucy5sZW5ndGggPiAwID8gNjIgOiA1MH1weGA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmFjbCkge1xuICAgICAgICBpdGVtLnNlbGVjdGlvbnMgPSBpdGVtLnNlbGVjdGlvbnMuZmlsdGVyKHcgPT4gdGhpcy5hY2wuY2FuKHcuYWNsKSk7XG4gICAgICB9XG4gICAgICAvLyByYWRpb1xuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgICArK3JhZGlvQ291bnQ7XG4gICAgICAgIGl0ZW0uc2VsZWN0aW9ucyA9IFtdO1xuICAgICAgICBpZiAoIWl0ZW0ud2lkdGgpIHtcbiAgICAgICAgICBpdGVtLndpZHRoID0gJzUwcHgnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyB0eXBlc1xuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ3luJykge1xuICAgICAgICBpdGVtLnluID0gT2JqZWN0LmFzc2lnbih7IHRydXRoOiB0cnVlIH0sIGl0ZW0ueW4pO1xuICAgICAgICAvLyBjb21wYXRpYmxlXG4gICAgICAgIGlmIChpdGVtLnluVHJ1dGggIT0gbnVsbCkgaXRlbS55bi50cnV0aCA9IGl0ZW0ueW5UcnV0aDtcbiAgICAgICAgaWYgKGl0ZW0ueW5ZZXMgIT0gbnVsbCkgaXRlbS55bi55ZXMgPSBpdGVtLnluWWVzO1xuICAgICAgICBpZiAoaXRlbS55bk5vICE9IG51bGwpIGl0ZW0ueW4ubm8gPSBpdGVtLnluTm87XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIChpdGVtLnR5cGUgPT09ICdsaW5rJyAmJiB0eXBlb2YgaXRlbS5jbGljayAhPT0gJ2Z1bmN0aW9uJykgfHxcbiAgICAgICAgKGl0ZW0udHlwZSA9PT0gJ2JhZGdlJyAmJiBpdGVtLmJhZGdlID09IG51bGwpIHx8XG4gICAgICAgIChpdGVtLnR5cGUgPT09ICd0YWcnICYmIGl0ZW0udGFnID09IG51bGwpXG4gICAgICApIHtcbiAgICAgICAgKGl0ZW0gYXMgYW55KS50eXBlID0gJyc7XG4gICAgICB9XG4gICAgICAvLyBjbGFzc05hbWVcbiAgICAgIGlmICghaXRlbS5jbGFzc05hbWUpIHtcbiAgICAgICAgaXRlbS5jbGFzc05hbWUgPSB7XG4gICAgICAgICAgbnVtYmVyOiAndGV4dC1yaWdodCcsXG4gICAgICAgICAgY3VycmVuY3k6ICd0ZXh0LXJpZ2h0JyxcbiAgICAgICAgICBkYXRlOiAndGV4dC1jZW50ZXInLFxuICAgICAgICB9W2l0ZW0udHlwZV07XG4gICAgICB9XG5cbiAgICAgIC8vIHNvcnRlclxuICAgICAgaXRlbS5fc29ydCA9IHRoaXMuc29ydENvZXJjZShpdGVtKTtcbiAgICAgIC8vIGZpbHRlclxuICAgICAgaXRlbS5maWx0ZXIgPSB0aGlzLmZpbHRlckNvZXJjZShpdGVtKTtcbiAgICAgIC8vIGJ1dHRvbnNcbiAgICAgIGl0ZW0uYnV0dG9ucyA9IHRoaXMuYnRuQ29lcmNlKGl0ZW0uYnV0dG9ucyk7XG4gICAgICAvLyByZXN0b3JlIGN1c3RvbSByb3dcbiAgICAgIHRoaXMucmVzdG9yZVJlbmRlcihpdGVtKTtcblxuICAgICAgY29sdW1ucy5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgICBpZiAoY2hlY2tib3hDb3VudCA+IDEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgW3N0XToganVzdCBvbmx5IG9uZSBjb2x1bW4gY2hlY2tib3hgKTtcbiAgICB9XG4gICAgaWYgKHJhZGlvQ291bnQgPiAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFtzdF06IGp1c3Qgb25seSBvbmUgY29sdW1uIHJhZGlvYCk7XG4gICAgfVxuXG4gICAgdGhpcy5maXhlZENvZXJjZShjb2x1bW5zKTtcblxuICAgIHJldHVybiBjb2x1bW5zO1xuICB9XG5cbiAgcmVzdG9yZUFsbFJlbmRlcihjb2x1bW5zOiBTVENvbHVtbltdKSB7XG4gICAgY29sdW1ucy5mb3JFYWNoKGkgPT4gdGhpcy5yZXN0b3JlUmVuZGVyKGkpKTtcbiAgfVxufVxuIl19