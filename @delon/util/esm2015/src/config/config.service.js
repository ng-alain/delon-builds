/**
 * @fileoverview added by tsickle
 * Generated from: src/config/config.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, Optional } from '@angular/core';
import { deepMergeKey } from '../other/deep';
import { ALAIN_CONFIG } from './config.types';
import * as i0 from "@angular/core";
import * as i1 from "./index";
export class AlainConfigService {
    /**
     * @param {?=} defaultConfig
     */
    constructor(defaultConfig) {
        this.config = Object.assign({}, defaultConfig);
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
     * @template T
     * @param {?} componentName
     * @param {...?} defaultValues
     * @return {?}
     */
    merge(componentName, ...defaultValues) {
        return deepMergeKey({}, true, ...defaultValues, this.get(componentName));
    }
    /**
     * @template T
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdnN0cy93b3JrLzEvcy9wYWNrYWdlcy91dGlsLyIsInNvdXJjZXMiOlsic3JjL2NvbmZpZy9jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdDLE9BQU8sRUFBK0IsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUczRSxNQUFNLE9BQU8sa0JBQWtCOzs7O0lBRzdCLFlBQThDLGFBQTJCO1FBQ3ZFLElBQUksQ0FBQyxNQUFNLHFCQUFRLGFBQWEsQ0FBRSxDQUFDO0lBQ3JDLENBQUM7Ozs7Ozs7SUFFRCxHQUFHLENBQTJCLGFBQWdCLEVBQUUsR0FBWTs7Y0FDcEQsR0FBRyxHQUFHLG1CQUFBLENBQUMsQ0FBQyxtQkFBQSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUFnQyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQWE7UUFDN0YsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0lBQ3pDLENBQUM7Ozs7Ozs7SUFFRCxLQUFLLENBQTJCLGFBQWdCLEVBQUUsR0FBRyxhQUErQjtRQUNsRixPQUFPLFlBQVksQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLEdBQUcsYUFBYSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUMzRSxDQUFDOzs7Ozs7OztJQUVELE1BQU0sQ0FBMkIsYUFBd0IsRUFBRSxhQUFnQixFQUFFLGFBQTZCO1FBQ3hHLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDekUsQ0FBQzs7Ozs7Ozs7SUFFRCxTQUFTLENBQTJCLGFBQXdCLEVBQUUsYUFBZ0IsRUFBRSxHQUFXO1FBQ3pGLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDN0QsQ0FBQzs7Ozs7OztJQUVELEdBQUcsQ0FBMkIsYUFBZ0IsRUFBRSxLQUFxQjtRQUNuRSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxtQ0FBUSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFLLEtBQUssQ0FBRSxDQUFDO0lBQzNFLENBQUM7OztZQTNCRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7OzRDQUluQixRQUFRLFlBQUksTUFBTSxTQUFDLFlBQVk7Ozs7Ozs7O0lBRjVDLG9DQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBkZWVwTWVyZ2VLZXkgfSBmcm9tICcuLi9vdGhlci9kZWVwJztcbmltcG9ydCB7IEFsYWluQ29uZmlnLCBBbGFpbkNvbmZpZ0tleSwgQUxBSU5fQ09ORklHIH0gZnJvbSAnLi9jb25maWcudHlwZXMnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEFsYWluQ29uZmlnU2VydmljZSB7XG4gIHByaXZhdGUgY29uZmlnOiBBbGFpbkNvbmZpZztcblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KEFMQUlOX0NPTkZJRykgZGVmYXVsdENvbmZpZz86IEFsYWluQ29uZmlnKSB7XG4gICAgdGhpcy5jb25maWcgPSB7IC4uLmRlZmF1bHRDb25maWcgfTtcbiAgfVxuXG4gIGdldDxUIGV4dGVuZHMgQWxhaW5Db25maWdLZXk+KGNvbXBvbmVudE5hbWU6IFQsIGtleT86IHN0cmluZyk6IEFsYWluQ29uZmlnW1RdIHtcbiAgICBjb25zdCByZXMgPSAoKHRoaXMuY29uZmlnW2NvbXBvbmVudE5hbWVdIGFzIHsgW2tleTogc3RyaW5nXTogTnpTYWZlQW55IH0pIHx8IHt9KSBhcyBOelNhZmVBbnk7XG4gICAgcmV0dXJuIGtleSA/IHsgW2tleV06IHJlc1trZXldIH0gOiByZXM7XG4gIH1cblxuICBtZXJnZTxUIGV4dGVuZHMgQWxhaW5Db25maWdLZXk+KGNvbXBvbmVudE5hbWU6IFQsIC4uLmRlZmF1bHRWYWx1ZXM6IEFsYWluQ29uZmlnW1RdW10pOiBBbGFpbkNvbmZpZ1tUXSB7XG4gICAgcmV0dXJuIGRlZXBNZXJnZUtleSh7fSwgdHJ1ZSwgLi4uZGVmYXVsdFZhbHVlcywgdGhpcy5nZXQoY29tcG9uZW50TmFtZSkpO1xuICB9XG5cbiAgYXR0YWNoPFQgZXh0ZW5kcyBBbGFpbkNvbmZpZ0tleT4oY29tcG9uZW50VGhpczogTnpTYWZlQW55LCBjb21wb25lbnROYW1lOiBULCBkZWZhdWx0VmFsdWVzOiBBbGFpbkNvbmZpZ1tUXSk6IHZvaWQge1xuICAgIE9iamVjdC5hc3NpZ24oY29tcG9uZW50VGhpcywgdGhpcy5tZXJnZShjb21wb25lbnROYW1lLCBkZWZhdWx0VmFsdWVzKSk7XG4gIH1cblxuICBhdHRhY2hLZXk8VCBleHRlbmRzIEFsYWluQ29uZmlnS2V5Pihjb21wb25lbnRUaGlzOiBOelNhZmVBbnksIGNvbXBvbmVudE5hbWU6IFQsIGtleTogc3RyaW5nKTogdm9pZCB7XG4gICAgT2JqZWN0LmFzc2lnbihjb21wb25lbnRUaGlzLCB0aGlzLmdldChjb21wb25lbnROYW1lLCBrZXkpKTtcbiAgfVxuXG4gIHNldDxUIGV4dGVuZHMgQWxhaW5Db25maWdLZXk+KGNvbXBvbmVudE5hbWU6IFQsIHZhbHVlOiBBbGFpbkNvbmZpZ1tUXSk6IHZvaWQge1xuICAgIHRoaXMuY29uZmlnW2NvbXBvbmVudE5hbWVdID0geyAuLi50aGlzLmNvbmZpZ1tjb21wb25lbnROYW1lXSwgLi4udmFsdWUgfTtcbiAgfVxufVxuIl19