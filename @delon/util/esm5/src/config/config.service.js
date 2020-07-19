/**
 * @fileoverview added by tsickle
 * Generated from: src/config/config.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __assign, __read, __spread } from "tslib";
import { Inject, Injectable, Optional } from '@angular/core';
import { deepMergeKey } from '../other/deep';
import { ALAIN_CONFIG } from './config.types';
import * as i0 from "@angular/core";
import * as i1 from "./index";
var AlainConfigService = /** @class */ (function () {
    function AlainConfigService(defaultConfig) {
        this.config = __assign({}, defaultConfig);
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
        var res = (/** @type {?} */ ((((/** @type {?} */ (this.config[componentName]))) || {})));
        return key ? (_a = {}, _a[key] = res[key], _a) : res;
    };
    /**
     * @template T
     * @param {?} componentName
     * @param {...?} defaultValues
     * @return {?}
     */
    AlainConfigService.prototype.merge = /**
     * @template T
     * @param {?} componentName
     * @param {...?} defaultValues
     * @return {?}
     */
    function (componentName) {
        var defaultValues = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            defaultValues[_i - 1] = arguments[_i];
        }
        return deepMergeKey.apply(void 0, __spread([{}, true], defaultValues, [this.get(componentName)]));
    };
    /**
     * @template T
     * @param {?} componentThis
     * @param {?} componentName
     * @param {?} defaultValues
     * @return {?}
     */
    AlainConfigService.prototype.attach = /**
     * @template T
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
    /** @nocollapse */ AlainConfigService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AlainConfigService_Factory() { return new i1.AlainConfigService(i0.ɵɵinject(i1.ALAIN_CONFIG, 8)); }, token: i1.AlainConfigService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdXRpbC8iLCJzb3VyY2VzIjpbInNyYy9jb25maWcvY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0MsT0FBTyxFQUErQixZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBRTNFO0lBSUUsNEJBQThDLGFBQTJCO1FBQ3ZFLElBQUksQ0FBQyxNQUFNLGdCQUFRLGFBQWEsQ0FBRSxDQUFDO0lBQ3JDLENBQUM7Ozs7Ozs7SUFFRCxnQ0FBRzs7Ozs7O0lBQUgsVUFBOEIsYUFBZ0IsRUFBRSxHQUFZOzs7WUFDcEQsR0FBRyxHQUFHLG1CQUFBLENBQUMsQ0FBQyxtQkFBQSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUFnQyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQWE7UUFDN0YsT0FBTyxHQUFHLENBQUMsQ0FBQyxXQUFHLEdBQUMsR0FBRyxJQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBRyxDQUFDLENBQUMsR0FBRyxDQUFDO0lBQ3pDLENBQUM7Ozs7Ozs7SUFFRCxrQ0FBSzs7Ozs7O0lBQUwsVUFBZ0MsYUFBZ0I7UUFBRSx1QkFBa0M7YUFBbEMsVUFBa0MsRUFBbEMscUJBQWtDLEVBQWxDLElBQWtDO1lBQWxDLHNDQUFrQzs7UUFDbEYsT0FBTyxZQUFZLHlCQUFDLEVBQUUsRUFBRSxJQUFJLEdBQUssYUFBYSxHQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLElBQUU7SUFDM0UsQ0FBQzs7Ozs7Ozs7SUFFRCxtQ0FBTTs7Ozs7OztJQUFOLFVBQWlDLGFBQXdCLEVBQUUsYUFBZ0IsRUFBRSxhQUE2QjtRQUN4RyxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7Ozs7Ozs7O0lBRUQsc0NBQVM7Ozs7Ozs7SUFBVCxVQUFvQyxhQUF3QixFQUFFLGFBQWdCLEVBQUUsR0FBVztRQUN6RixNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzdELENBQUM7Ozs7Ozs7SUFFRCxnQ0FBRzs7Ozs7O0lBQUgsVUFBOEIsYUFBZ0IsRUFBRSxLQUFxQjtRQUNuRSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyx5QkFBUSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFLLEtBQUssQ0FBRSxDQUFDO0lBQzNFLENBQUM7O2dCQTNCRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O2dEQUluQixRQUFRLFlBQUksTUFBTSxTQUFDLFlBQVk7Ozs2QkFUOUM7Q0FpQ0MsQUE1QkQsSUE0QkM7U0EzQlksa0JBQWtCOzs7Ozs7SUFDN0Isb0NBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IGRlZXBNZXJnZUtleSB9IGZyb20gJy4uL290aGVyL2RlZXAnO1xuaW1wb3J0IHsgQWxhaW5Db25maWcsIEFsYWluQ29uZmlnS2V5LCBBTEFJTl9DT05GSUcgfSBmcm9tICcuL2NvbmZpZy50eXBlcyc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQWxhaW5Db25maWdTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBjb25maWc6IEFsYWluQ29uZmlnO1xuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBJbmplY3QoQUxBSU5fQ09ORklHKSBkZWZhdWx0Q29uZmlnPzogQWxhaW5Db25maWcpIHtcbiAgICB0aGlzLmNvbmZpZyA9IHsgLi4uZGVmYXVsdENvbmZpZyB9O1xuICB9XG5cbiAgZ2V0PFQgZXh0ZW5kcyBBbGFpbkNvbmZpZ0tleT4oY29tcG9uZW50TmFtZTogVCwga2V5Pzogc3RyaW5nKTogQWxhaW5Db25maWdbVF0ge1xuICAgIGNvbnN0IHJlcyA9ICgodGhpcy5jb25maWdbY29tcG9uZW50TmFtZV0gYXMgeyBba2V5OiBzdHJpbmddOiBOelNhZmVBbnkgfSkgfHwge30pIGFzIE56U2FmZUFueTtcbiAgICByZXR1cm4ga2V5ID8geyBba2V5XTogcmVzW2tleV0gfSA6IHJlcztcbiAgfVxuXG4gIG1lcmdlPFQgZXh0ZW5kcyBBbGFpbkNvbmZpZ0tleT4oY29tcG9uZW50TmFtZTogVCwgLi4uZGVmYXVsdFZhbHVlczogQWxhaW5Db25maWdbVF1bXSk6IEFsYWluQ29uZmlnW1RdIHtcbiAgICByZXR1cm4gZGVlcE1lcmdlS2V5KHt9LCB0cnVlLCAuLi5kZWZhdWx0VmFsdWVzLCB0aGlzLmdldChjb21wb25lbnROYW1lKSk7XG4gIH1cblxuICBhdHRhY2g8VCBleHRlbmRzIEFsYWluQ29uZmlnS2V5Pihjb21wb25lbnRUaGlzOiBOelNhZmVBbnksIGNvbXBvbmVudE5hbWU6IFQsIGRlZmF1bHRWYWx1ZXM6IEFsYWluQ29uZmlnW1RdKSB7XG4gICAgT2JqZWN0LmFzc2lnbihjb21wb25lbnRUaGlzLCB0aGlzLm1lcmdlKGNvbXBvbmVudE5hbWUsIGRlZmF1bHRWYWx1ZXMpKTtcbiAgfVxuXG4gIGF0dGFjaEtleTxUIGV4dGVuZHMgQWxhaW5Db25maWdLZXk+KGNvbXBvbmVudFRoaXM6IE56U2FmZUFueSwgY29tcG9uZW50TmFtZTogVCwga2V5OiBzdHJpbmcpIHtcbiAgICBPYmplY3QuYXNzaWduKGNvbXBvbmVudFRoaXMsIHRoaXMuZ2V0KGNvbXBvbmVudE5hbWUsIGtleSkpO1xuICB9XG5cbiAgc2V0PFQgZXh0ZW5kcyBBbGFpbkNvbmZpZ0tleT4oY29tcG9uZW50TmFtZTogVCwgdmFsdWU6IEFsYWluQ29uZmlnW1RdKTogdm9pZCB7XG4gICAgdGhpcy5jb25maWdbY29tcG9uZW50TmFtZV0gPSB7IC4uLnRoaXMuY29uZmlnW2NvbXBvbmVudE5hbWVdLCAuLi52YWx1ZSB9O1xuICB9XG59XG4iXX0=