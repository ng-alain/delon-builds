/**
 * @fileoverview added by tsickle
 * Generated from: src/config/config.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __assign } from "tslib";
import { Inject, Injectable, Optional } from '@angular/core';
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
        Object.assign(componentThis, __assign(__assign({}, defaultValues), this.get(componentName)));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdGhlbWUvIiwic291cmNlcyI6WyJzcmMvY29uZmlnL2NvbmZpZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3RCxPQUFPLEVBQStCLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFFM0U7SUFJRSw0QkFBOEMsYUFBMkI7UUFDdkUsSUFBSSxDQUFDLE1BQU0sR0FBRyxhQUFhLElBQUksRUFBRSxDQUFDO0lBQ3BDLENBQUM7Ozs7Ozs7SUFFRCxnQ0FBRzs7Ozs7O0lBQUgsVUFBOEIsYUFBZ0IsRUFBRSxHQUFZOzs7WUFDcEQsR0FBRyxHQUFHLENBQUMsbUJBQUEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsRUFBZ0MsQ0FBQyxJQUFJLEVBQUU7UUFDOUUsT0FBTyxHQUFHLENBQUMsQ0FBQyxXQUFHLEdBQUMsR0FBRyxJQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBRyxDQUFDLENBQUMsR0FBRyxDQUFDO0lBQ3pDLENBQUM7Ozs7Ozs7O0lBRUQsbUNBQU07Ozs7Ozs7SUFBTixVQUFvQyxhQUF3QixFQUFFLGFBQWdCLEVBQUUsYUFBZ0I7UUFDOUYsTUFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFhLHdCQUFPLGFBQWEsR0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxFQUFHLENBQUM7SUFDakYsQ0FBQzs7Ozs7Ozs7SUFFRCxzQ0FBUzs7Ozs7OztJQUFULFVBQW9DLGFBQXdCLEVBQUUsYUFBZ0IsRUFBRSxHQUFXO1FBQ3pGLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDN0QsQ0FBQzs7Ozs7OztJQUVELGdDQUFHOzs7Ozs7SUFBSCxVQUE4QixhQUFnQixFQUFFLEtBQXFCO1FBQ25FLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLHlCQUFRLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUssS0FBSyxDQUFFLENBQUM7SUFDM0UsQ0FBQzs7Z0JBdkJGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7Z0RBSW5CLFFBQVEsWUFBSSxNQUFNLFNBQUMsWUFBWTs7OzZCQVI5QztDQTRCQyxBQXhCRCxJQXdCQztTQXZCWSxrQkFBa0I7Ozs7OztJQUM3QixvQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgQWxhaW5Db25maWcsIEFsYWluQ29uZmlnS2V5LCBBTEFJTl9DT05GSUcgfSBmcm9tICcuL2NvbmZpZy50eXBlcyc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQWxhaW5Db25maWdTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBjb25maWc6IEFsYWluQ29uZmlnO1xuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBJbmplY3QoQUxBSU5fQ09ORklHKSBkZWZhdWx0Q29uZmlnPzogQWxhaW5Db25maWcpIHtcbiAgICB0aGlzLmNvbmZpZyA9IGRlZmF1bHRDb25maWcgfHwge307XG4gIH1cblxuICBnZXQ8VCBleHRlbmRzIEFsYWluQ29uZmlnS2V5Pihjb21wb25lbnROYW1lOiBULCBrZXk/OiBzdHJpbmcpOiBBbGFpbkNvbmZpZ1tUXSB7XG4gICAgY29uc3QgcmVzID0gKHRoaXMuY29uZmlnW2NvbXBvbmVudE5hbWVdIGFzIHsgW2tleTogc3RyaW5nXTogTnpTYWZlQW55IH0pIHx8IHt9O1xuICAgIHJldHVybiBrZXkgPyB7IFtrZXldOiByZXNba2V5XSB9IDogcmVzO1xuICB9XG5cbiAgYXR0YWNoPFIsIFQgZXh0ZW5kcyBBbGFpbkNvbmZpZ0tleT4oY29tcG9uZW50VGhpczogTnpTYWZlQW55LCBjb21wb25lbnROYW1lOiBULCBkZWZhdWx0VmFsdWVzOiBSKSB7XG4gICAgT2JqZWN0LmFzc2lnbihjb21wb25lbnRUaGlzLCB7IC4uLmRlZmF1bHRWYWx1ZXMsIC4uLnRoaXMuZ2V0KGNvbXBvbmVudE5hbWUpIH0pO1xuICB9XG5cbiAgYXR0YWNoS2V5PFQgZXh0ZW5kcyBBbGFpbkNvbmZpZ0tleT4oY29tcG9uZW50VGhpczogTnpTYWZlQW55LCBjb21wb25lbnROYW1lOiBULCBrZXk6IHN0cmluZykge1xuICAgIE9iamVjdC5hc3NpZ24oY29tcG9uZW50VGhpcywgdGhpcy5nZXQoY29tcG9uZW50TmFtZSwga2V5KSk7XG4gIH1cblxuICBzZXQ8VCBleHRlbmRzIEFsYWluQ29uZmlnS2V5Pihjb21wb25lbnROYW1lOiBULCB2YWx1ZTogQWxhaW5Db25maWdbVF0pOiB2b2lkIHtcbiAgICB0aGlzLmNvbmZpZ1tjb21wb25lbnROYW1lXSA9IHsgLi4udGhpcy5jb25maWdbY29tcG9uZW50TmFtZV0sIC4uLnZhbHVlIH07XG4gIH1cbn1cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIFdpdGhDb25maWcoY29tcG9uZW50TmFtZTogQ29uZmlnS2V5LCBjb25maWdPcHRpb25zPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkge31cbiJdfQ==