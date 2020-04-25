/**
 * @fileoverview added by tsickle
 * Generated from: src/config/config.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, Optional } from '@angular/core';
import { deepMergeKey } from '../other/other';
import { ALAIN_CONFIG } from './config.types';
import * as i0 from "@angular/core";
import * as i1 from "./index";
export class AlainConfigService {
    /**
     * @param {?=} defaultConfig
     */
    constructor(defaultConfig) {
        this.config = defaultConfig || {};
    }
    /**
     * @template T
     * @param {?} componentName
     * @param {?=} key
     * @return {?}
     */
    get(componentName, key) {
        /** @type {?} */
        const res = (/** @type {?} */ ((((/** @type {?} */ (this.config[componentName]))) || {})));
        return key ? { [key]: res[key] } : res;
    }
    /**
     * @template R, T
     * @param {?} componentName
     * @param {?} defaultValues
     * @return {?}
     */
    merge(componentName, defaultValues) {
        return deepMergeKey({}, true, defaultValues, this.get(componentName));
    }
    /**
     * @template R, T
     * @param {?} componentThis
     * @param {?} componentName
     * @param {?} defaultValues
     * @return {?}
     */
    attach(componentThis, componentName, defaultValues) {
        Object.assign(componentThis, this.merge(componentName, defaultValues));
    }
    /**
     * @template T
     * @param {?} componentThis
     * @param {?} componentName
     * @param {?} key
     * @return {?}
     */
    attachKey(componentThis, componentName, key) {
        Object.assign(componentThis, this.get(componentName, key));
    }
    /**
     * @template T
     * @param {?} componentName
     * @param {?} value
     * @return {?}
     */
    set(componentName, value) {
        this.config[componentName] = Object.assign(Object.assign({}, this.config[componentName]), value);
    }
}
AlainConfigService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
AlainConfigService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [ALAIN_CONFIG,] }] }
];
/** @nocollapse */ AlainConfigService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AlainConfigService_Factory() { return new i1.AlainConfigService(i0.ɵɵinject(i1.ALAIN_CONFIG, 8)); }, token: i1.AlainConfigService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    AlainConfigService.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdXRpbC8iLCJzb3VyY2VzIjpbInNyYy9jb25maWcvY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBK0IsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUczRSxNQUFNLE9BQU8sa0JBQWtCOzs7O0lBRzdCLFlBQThDLGFBQTJCO1FBQ3ZFLElBQUksQ0FBQyxNQUFNLEdBQUcsYUFBYSxJQUFJLEVBQUUsQ0FBQztJQUNwQyxDQUFDOzs7Ozs7O0lBRUQsR0FBRyxDQUEyQixhQUFnQixFQUFFLEdBQVk7O2NBQ3BELEdBQUcsR0FBRyxtQkFBQSxDQUFDLENBQUMsbUJBQUEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsRUFBZ0MsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFhO1FBQzdGLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUN6QyxDQUFDOzs7Ozs7O0lBRUQsS0FBSyxDQUE4QixhQUFnQixFQUFFLGFBQWdCO1FBQ25FLE9BQU8sWUFBWSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUN4RSxDQUFDOzs7Ozs7OztJQUVELE1BQU0sQ0FBOEIsYUFBd0IsRUFBRSxhQUFnQixFQUFFLGFBQWdCO1FBQzlGLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDekUsQ0FBQzs7Ozs7Ozs7SUFFRCxTQUFTLENBQTJCLGFBQXdCLEVBQUUsYUFBZ0IsRUFBRSxHQUFXO1FBQ3pGLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDN0QsQ0FBQzs7Ozs7OztJQUVELEdBQUcsQ0FBMkIsYUFBZ0IsRUFBRSxLQUFxQjtRQUNuRSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxtQ0FBUSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFLLEtBQUssQ0FBRSxDQUFDO0lBQzNFLENBQUM7OztZQTNCRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7OzRDQUluQixRQUFRLFlBQUksTUFBTSxTQUFDLFlBQVk7Ozs7Ozs7O0lBRjVDLG9DQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBkZWVwTWVyZ2VLZXkgfSBmcm9tICcuLi9vdGhlci9vdGhlcic7XG5pbXBvcnQgeyBBbGFpbkNvbmZpZywgQWxhaW5Db25maWdLZXksIEFMQUlOX0NPTkZJRyB9IGZyb20gJy4vY29uZmlnLnR5cGVzJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBBbGFpbkNvbmZpZ1NlcnZpY2Uge1xuICBwcml2YXRlIGNvbmZpZzogQWxhaW5Db25maWc7XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEluamVjdChBTEFJTl9DT05GSUcpIGRlZmF1bHRDb25maWc/OiBBbGFpbkNvbmZpZykge1xuICAgIHRoaXMuY29uZmlnID0gZGVmYXVsdENvbmZpZyB8fCB7fTtcbiAgfVxuXG4gIGdldDxUIGV4dGVuZHMgQWxhaW5Db25maWdLZXk+KGNvbXBvbmVudE5hbWU6IFQsIGtleT86IHN0cmluZyk6IEFsYWluQ29uZmlnW1RdIHtcbiAgICBjb25zdCByZXMgPSAoKHRoaXMuY29uZmlnW2NvbXBvbmVudE5hbWVdIGFzIHsgW2tleTogc3RyaW5nXTogTnpTYWZlQW55IH0pIHx8IHt9KSBhcyBOelNhZmVBbnk7XG4gICAgcmV0dXJuIGtleSA/IHsgW2tleV06IHJlc1trZXldIH0gOiByZXM7XG4gIH1cblxuICBtZXJnZTxSLCBUIGV4dGVuZHMgQWxhaW5Db25maWdLZXk+KGNvbXBvbmVudE5hbWU6IFQsIGRlZmF1bHRWYWx1ZXM6IFIpOiBSIHtcbiAgICByZXR1cm4gZGVlcE1lcmdlS2V5KHt9LCB0cnVlLCBkZWZhdWx0VmFsdWVzLCB0aGlzLmdldChjb21wb25lbnROYW1lKSk7XG4gIH1cblxuICBhdHRhY2g8UiwgVCBleHRlbmRzIEFsYWluQ29uZmlnS2V5Pihjb21wb25lbnRUaGlzOiBOelNhZmVBbnksIGNvbXBvbmVudE5hbWU6IFQsIGRlZmF1bHRWYWx1ZXM6IFIpIHtcbiAgICBPYmplY3QuYXNzaWduKGNvbXBvbmVudFRoaXMsIHRoaXMubWVyZ2UoY29tcG9uZW50TmFtZSwgZGVmYXVsdFZhbHVlcykpO1xuICB9XG5cbiAgYXR0YWNoS2V5PFQgZXh0ZW5kcyBBbGFpbkNvbmZpZ0tleT4oY29tcG9uZW50VGhpczogTnpTYWZlQW55LCBjb21wb25lbnROYW1lOiBULCBrZXk6IHN0cmluZykge1xuICAgIE9iamVjdC5hc3NpZ24oY29tcG9uZW50VGhpcywgdGhpcy5nZXQoY29tcG9uZW50TmFtZSwga2V5KSk7XG4gIH1cblxuICBzZXQ8VCBleHRlbmRzIEFsYWluQ29uZmlnS2V5Pihjb21wb25lbnROYW1lOiBULCB2YWx1ZTogQWxhaW5Db25maWdbVF0pOiB2b2lkIHtcbiAgICB0aGlzLmNvbmZpZ1tjb21wb25lbnROYW1lXSA9IHsgLi4udGhpcy5jb25maWdbY29tcG9uZW50TmFtZV0sIC4uLnZhbHVlIH07XG4gIH1cbn1cbiJdfQ==