/**
 * @fileoverview added by tsickle
 * Generated from: src/config/config.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __assign } from "tslib";
import { Inject, Injectable, Optional } from '@angular/core';
import { deepMergeKey } from '@delon/util';
import { ALAIN_CONFIG } from './config.types';
import * as i0 from "@angular/core";
import * as i1 from "./config.types";
var AlainConfigService = /** @class */ (function () {
    function AlainConfigService(defaultConfig) {
        this.config = defaultConfig || {};
    }
    /**
     * @template T
     * @param {?} componentName
     * @param {?=} key
     * @return {?}
     */
    AlainConfigService.prototype.get = /**
     * @template T
     * @param {?} componentName
     * @param {?=} key
     * @return {?}
     */
    function (componentName, key) {
        var _a;
        /** @type {?} */
        var res = ((/** @type {?} */ (this.config[componentName]))) || {};
        return key ? (_a = {}, _a[key] = res[key], _a) : res;
    };
    /**
     * @template R, T
     * @param {?} componentName
     * @param {?} defaultValues
     * @return {?}
     */
    AlainConfigService.prototype.merge = /**
     * @template R, T
     * @param {?} componentName
     * @param {?} defaultValues
     * @return {?}
     */
    function (componentName, defaultValues) {
        return deepMergeKey(defaultValues, true, this.get(componentName));
    };
    /**
     * @template R, T
     * @param {?} componentThis
     * @param {?} componentName
     * @param {?} defaultValues
     * @return {?}
     */
    AlainConfigService.prototype.attach = /**
     * @template R, T
     * @param {?} componentThis
     * @param {?} componentName
     * @param {?} defaultValues
     * @return {?}
     */
    function (componentThis, componentName, defaultValues) {
        Object.assign(componentThis, this.merge(componentName, defaultValues));
    };
    /**
     * @template T
     * @param {?} componentThis
     * @param {?} componentName
     * @param {?} key
     * @return {?}
     */
    AlainConfigService.prototype.attachKey = /**
     * @template T
     * @param {?} componentThis
     * @param {?} componentName
     * @param {?} key
     * @return {?}
     */
    function (componentThis, componentName, key) {
        Object.assign(componentThis, this.get(componentName, key));
    };
    /**
     * @template T
     * @param {?} componentName
     * @param {?} value
     * @return {?}
     */
    AlainConfigService.prototype.set = /**
     * @template T
     * @param {?} componentName
     * @param {?} value
     * @return {?}
     */
    function (componentName, value) {
        this.config[componentName] = __assign(__assign({}, this.config[componentName]), value);
    };
    AlainConfigService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    AlainConfigService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [ALAIN_CONFIG,] }] }
    ]; };
    /** @nocollapse */ AlainConfigService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AlainConfigService_Factory() { return new AlainConfigService(i0.ɵɵinject(i1.ALAIN_CONFIG, 8)); }, token: AlainConfigService, providedIn: "root" });
    return AlainConfigService;
}());
export { AlainConfigService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AlainConfigService.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdGhlbWUvIiwic291cmNlcyI6WyJzcmMvY29uZmlnL2NvbmZpZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTNDLE9BQU8sRUFBK0IsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUUzRTtJQUlFLDRCQUE4QyxhQUEyQjtRQUN2RSxJQUFJLENBQUMsTUFBTSxHQUFHLGFBQWEsSUFBSSxFQUFFLENBQUM7SUFDcEMsQ0FBQzs7Ozs7OztJQUVELGdDQUFHOzs7Ozs7SUFBSCxVQUE4QixhQUFnQixFQUFFLEdBQVk7OztZQUNwRCxHQUFHLEdBQUcsQ0FBQyxtQkFBQSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUFnQyxDQUFDLElBQUksRUFBRTtRQUM5RSxPQUFPLEdBQUcsQ0FBQyxDQUFDLFdBQUcsR0FBQyxHQUFHLElBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDekMsQ0FBQzs7Ozs7OztJQUVELGtDQUFLOzs7Ozs7SUFBTCxVQUFtQyxhQUFnQixFQUFFLGFBQWdCO1FBQ25FLE9BQU8sWUFBWSxDQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7Ozs7Ozs7O0lBRUQsbUNBQU07Ozs7Ozs7SUFBTixVQUFvQyxhQUF3QixFQUFFLGFBQWdCLEVBQUUsYUFBZ0I7UUFDOUYsTUFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUN6RSxDQUFDOzs7Ozs7OztJQUVELHNDQUFTOzs7Ozs7O0lBQVQsVUFBb0MsYUFBd0IsRUFBRSxhQUFnQixFQUFFLEdBQVc7UUFDekYsTUFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDOzs7Ozs7O0lBRUQsZ0NBQUc7Ozs7OztJQUFILFVBQThCLGFBQWdCLEVBQUUsS0FBcUI7UUFDbkUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMseUJBQVEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBSyxLQUFLLENBQUUsQ0FBQztJQUMzRSxDQUFDOztnQkEzQkYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztnREFJbkIsUUFBUSxZQUFJLE1BQU0sU0FBQyxZQUFZOzs7NkJBVDlDO0NBaUNDLEFBNUJELElBNEJDO1NBM0JZLGtCQUFrQjs7Ozs7O0lBQzdCLG9DQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGRlZXBNZXJnZUtleSB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBBbGFpbkNvbmZpZywgQWxhaW5Db25maWdLZXksIEFMQUlOX0NPTkZJRyB9IGZyb20gJy4vY29uZmlnLnR5cGVzJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBBbGFpbkNvbmZpZ1NlcnZpY2Uge1xuICBwcml2YXRlIGNvbmZpZzogQWxhaW5Db25maWc7XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEluamVjdChBTEFJTl9DT05GSUcpIGRlZmF1bHRDb25maWc/OiBBbGFpbkNvbmZpZykge1xuICAgIHRoaXMuY29uZmlnID0gZGVmYXVsdENvbmZpZyB8fCB7fTtcbiAgfVxuXG4gIGdldDxUIGV4dGVuZHMgQWxhaW5Db25maWdLZXk+KGNvbXBvbmVudE5hbWU6IFQsIGtleT86IHN0cmluZyk6IEFsYWluQ29uZmlnW1RdIHtcbiAgICBjb25zdCByZXMgPSAodGhpcy5jb25maWdbY29tcG9uZW50TmFtZV0gYXMgeyBba2V5OiBzdHJpbmddOiBOelNhZmVBbnkgfSkgfHwge307XG4gICAgcmV0dXJuIGtleSA/IHsgW2tleV06IHJlc1trZXldIH0gOiByZXM7XG4gIH1cblxuICBtZXJnZTxSLCBUIGV4dGVuZHMgQWxhaW5Db25maWdLZXk+KGNvbXBvbmVudE5hbWU6IFQsIGRlZmF1bHRWYWx1ZXM6IFIpOiBSIHtcbiAgICByZXR1cm4gZGVlcE1lcmdlS2V5KGRlZmF1bHRWYWx1ZXMsIHRydWUsIHRoaXMuZ2V0KGNvbXBvbmVudE5hbWUpKTtcbiAgfVxuXG4gIGF0dGFjaDxSLCBUIGV4dGVuZHMgQWxhaW5Db25maWdLZXk+KGNvbXBvbmVudFRoaXM6IE56U2FmZUFueSwgY29tcG9uZW50TmFtZTogVCwgZGVmYXVsdFZhbHVlczogUikge1xuICAgIE9iamVjdC5hc3NpZ24oY29tcG9uZW50VGhpcywgdGhpcy5tZXJnZShjb21wb25lbnROYW1lLCBkZWZhdWx0VmFsdWVzKSk7XG4gIH1cblxuICBhdHRhY2hLZXk8VCBleHRlbmRzIEFsYWluQ29uZmlnS2V5Pihjb21wb25lbnRUaGlzOiBOelNhZmVBbnksIGNvbXBvbmVudE5hbWU6IFQsIGtleTogc3RyaW5nKSB7XG4gICAgT2JqZWN0LmFzc2lnbihjb21wb25lbnRUaGlzLCB0aGlzLmdldChjb21wb25lbnROYW1lLCBrZXkpKTtcbiAgfVxuXG4gIHNldDxUIGV4dGVuZHMgQWxhaW5Db25maWdLZXk+KGNvbXBvbmVudE5hbWU6IFQsIHZhbHVlOiBBbGFpbkNvbmZpZ1tUXSk6IHZvaWQge1xuICAgIHRoaXMuY29uZmlnW2NvbXBvbmVudE5hbWVdID0geyAuLi50aGlzLmNvbmZpZ1tjb21wb25lbnROYW1lXSwgLi4udmFsdWUgfTtcbiAgfVxufVxuIl19