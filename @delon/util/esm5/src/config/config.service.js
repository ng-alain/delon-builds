/**
 * @fileoverview added by tsickle
 * Generated from: src/config/config.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __assign } from "tslib";
import { Inject, Injectable, Optional } from '@angular/core';
import { deepMergeKey } from '../other/other';
import { ALAIN_CONFIG } from './config.types';
import * as i0 from "@angular/core";
import * as i1 from "./index";
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
        var res = (/** @type {?} */ ((((/** @type {?} */ (this.config[componentName]))) || {})));
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
        return deepMergeKey({}, true, defaultValues, this.get(componentName));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdXRpbC8iLCJzb3VyY2VzIjpbInNyYy9jb25maWcvY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQStCLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFFM0U7SUFJRSw0QkFBOEMsYUFBMkI7UUFDdkUsSUFBSSxDQUFDLE1BQU0sR0FBRyxhQUFhLElBQUksRUFBRSxDQUFDO0lBQ3BDLENBQUM7Ozs7Ozs7SUFFRCxnQ0FBRzs7Ozs7O0lBQUgsVUFBOEIsYUFBZ0IsRUFBRSxHQUFZOzs7WUFDcEQsR0FBRyxHQUFHLG1CQUFBLENBQUMsQ0FBQyxtQkFBQSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUFnQyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQWE7UUFDN0YsT0FBTyxHQUFHLENBQUMsQ0FBQyxXQUFHLEdBQUMsR0FBRyxJQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBRyxDQUFDLENBQUMsR0FBRyxDQUFDO0lBQ3pDLENBQUM7Ozs7Ozs7SUFFRCxrQ0FBSzs7Ozs7O0lBQUwsVUFBbUMsYUFBZ0IsRUFBRSxhQUFnQjtRQUNuRSxPQUFPLFlBQVksQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDeEUsQ0FBQzs7Ozs7Ozs7SUFFRCxtQ0FBTTs7Ozs7OztJQUFOLFVBQW9DLGFBQXdCLEVBQUUsYUFBZ0IsRUFBRSxhQUFnQjtRQUM5RixNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7Ozs7Ozs7O0lBRUQsc0NBQVM7Ozs7Ozs7SUFBVCxVQUFvQyxhQUF3QixFQUFFLGFBQWdCLEVBQUUsR0FBVztRQUN6RixNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzdELENBQUM7Ozs7Ozs7SUFFRCxnQ0FBRzs7Ozs7O0lBQUgsVUFBOEIsYUFBZ0IsRUFBRSxLQUFxQjtRQUNuRSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyx5QkFBUSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFLLEtBQUssQ0FBRSxDQUFDO0lBQzNFLENBQUM7O2dCQTNCRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O2dEQUluQixRQUFRLFlBQUksTUFBTSxTQUFDLFlBQVk7Ozs2QkFUOUM7Q0FpQ0MsQUE1QkQsSUE0QkM7U0EzQlksa0JBQWtCOzs7Ozs7SUFDN0Isb0NBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IGRlZXBNZXJnZUtleSB9IGZyb20gJy4uL290aGVyL290aGVyJztcbmltcG9ydCB7IEFsYWluQ29uZmlnLCBBbGFpbkNvbmZpZ0tleSwgQUxBSU5fQ09ORklHIH0gZnJvbSAnLi9jb25maWcudHlwZXMnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEFsYWluQ29uZmlnU2VydmljZSB7XG4gIHByaXZhdGUgY29uZmlnOiBBbGFpbkNvbmZpZztcblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KEFMQUlOX0NPTkZJRykgZGVmYXVsdENvbmZpZz86IEFsYWluQ29uZmlnKSB7XG4gICAgdGhpcy5jb25maWcgPSBkZWZhdWx0Q29uZmlnIHx8IHt9O1xuICB9XG5cbiAgZ2V0PFQgZXh0ZW5kcyBBbGFpbkNvbmZpZ0tleT4oY29tcG9uZW50TmFtZTogVCwga2V5Pzogc3RyaW5nKTogQWxhaW5Db25maWdbVF0ge1xuICAgIGNvbnN0IHJlcyA9ICgodGhpcy5jb25maWdbY29tcG9uZW50TmFtZV0gYXMgeyBba2V5OiBzdHJpbmddOiBOelNhZmVBbnkgfSkgfHwge30pIGFzIE56U2FmZUFueTtcbiAgICByZXR1cm4ga2V5ID8geyBba2V5XTogcmVzW2tleV0gfSA6IHJlcztcbiAgfVxuXG4gIG1lcmdlPFIsIFQgZXh0ZW5kcyBBbGFpbkNvbmZpZ0tleT4oY29tcG9uZW50TmFtZTogVCwgZGVmYXVsdFZhbHVlczogUik6IFIge1xuICAgIHJldHVybiBkZWVwTWVyZ2VLZXkoe30sIHRydWUsIGRlZmF1bHRWYWx1ZXMsIHRoaXMuZ2V0KGNvbXBvbmVudE5hbWUpKTtcbiAgfVxuXG4gIGF0dGFjaDxSLCBUIGV4dGVuZHMgQWxhaW5Db25maWdLZXk+KGNvbXBvbmVudFRoaXM6IE56U2FmZUFueSwgY29tcG9uZW50TmFtZTogVCwgZGVmYXVsdFZhbHVlczogUikge1xuICAgIE9iamVjdC5hc3NpZ24oY29tcG9uZW50VGhpcywgdGhpcy5tZXJnZShjb21wb25lbnROYW1lLCBkZWZhdWx0VmFsdWVzKSk7XG4gIH1cblxuICBhdHRhY2hLZXk8VCBleHRlbmRzIEFsYWluQ29uZmlnS2V5Pihjb21wb25lbnRUaGlzOiBOelNhZmVBbnksIGNvbXBvbmVudE5hbWU6IFQsIGtleTogc3RyaW5nKSB7XG4gICAgT2JqZWN0LmFzc2lnbihjb21wb25lbnRUaGlzLCB0aGlzLmdldChjb21wb25lbnROYW1lLCBrZXkpKTtcbiAgfVxuXG4gIHNldDxUIGV4dGVuZHMgQWxhaW5Db25maWdLZXk+KGNvbXBvbmVudE5hbWU6IFQsIHZhbHVlOiBBbGFpbkNvbmZpZ1tUXSk6IHZvaWQge1xuICAgIHRoaXMuY29uZmlnW2NvbXBvbmVudE5hbWVdID0geyAuLi50aGlzLmNvbmZpZ1tjb21wb25lbnROYW1lXSwgLi4udmFsdWUgfTtcbiAgfVxufVxuIl19