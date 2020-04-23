/**
 * @fileoverview added by tsickle
 * Generated from: src/config/config.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, Optional } from '@angular/core';
import { ALAIN_CONFIG } from './config.types';
import * as i0 from "@angular/core";
import * as i1 from "./config.types";
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
        const res = ((/** @type {?} */ (this.config[componentName]))) || {};
        return key ? { [key]: res[key] } : res;
    }
    /**
     * @template R, T
     * @param {?} componentName
     * @param {?} defaultValues
     * @return {?}
     */
    merge(componentName, defaultValues) {
        return Object.assign(Object.assign({}, defaultValues), this.get(componentName));
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
/** @nocollapse */ AlainConfigService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AlainConfigService_Factory() { return new AlainConfigService(i0.ɵɵinject(i1.ALAIN_CONFIG, 8)); }, token: AlainConfigService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    AlainConfigService.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdGhlbWUvIiwic291cmNlcyI6WyJzcmMvY29uZmlnL2NvbmZpZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdELE9BQU8sRUFBK0IsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUczRSxNQUFNLE9BQU8sa0JBQWtCOzs7O0lBRzdCLFlBQThDLGFBQTJCO1FBQ3ZFLElBQUksQ0FBQyxNQUFNLEdBQUcsYUFBYSxJQUFJLEVBQUUsQ0FBQztJQUNwQyxDQUFDOzs7Ozs7O0lBRUQsR0FBRyxDQUEyQixhQUFnQixFQUFFLEdBQVk7O2NBQ3BELEdBQUcsR0FBRyxDQUFDLG1CQUFBLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQWdDLENBQUMsSUFBSSxFQUFFO1FBQzlFLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUN6QyxDQUFDOzs7Ozs7O0lBRUQsS0FBSyxDQUE4QixhQUFnQixFQUFFLGFBQWdCO1FBQ25FLHVDQUFZLGFBQWEsR0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxFQUFHO0lBQzFELENBQUM7Ozs7Ozs7O0lBRUQsTUFBTSxDQUE4QixhQUF3QixFQUFFLGFBQWdCLEVBQUUsYUFBZ0I7UUFDOUYsTUFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUN6RSxDQUFDOzs7Ozs7OztJQUVELFNBQVMsQ0FBMkIsYUFBd0IsRUFBRSxhQUFnQixFQUFFLEdBQVc7UUFDekYsTUFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDOzs7Ozs7O0lBRUQsR0FBRyxDQUEyQixhQUFnQixFQUFFLEtBQXFCO1FBQ25FLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLG1DQUFRLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUssS0FBSyxDQUFFLENBQUM7SUFDM0UsQ0FBQzs7O1lBM0JGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7NENBSW5CLFFBQVEsWUFBSSxNQUFNLFNBQUMsWUFBWTs7Ozs7Ozs7SUFGNUMsb0NBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IEFsYWluQ29uZmlnLCBBbGFpbkNvbmZpZ0tleSwgQUxBSU5fQ09ORklHIH0gZnJvbSAnLi9jb25maWcudHlwZXMnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEFsYWluQ29uZmlnU2VydmljZSB7XG4gIHByaXZhdGUgY29uZmlnOiBBbGFpbkNvbmZpZztcblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KEFMQUlOX0NPTkZJRykgZGVmYXVsdENvbmZpZz86IEFsYWluQ29uZmlnKSB7XG4gICAgdGhpcy5jb25maWcgPSBkZWZhdWx0Q29uZmlnIHx8IHt9O1xuICB9XG5cbiAgZ2V0PFQgZXh0ZW5kcyBBbGFpbkNvbmZpZ0tleT4oY29tcG9uZW50TmFtZTogVCwga2V5Pzogc3RyaW5nKTogQWxhaW5Db25maWdbVF0ge1xuICAgIGNvbnN0IHJlcyA9ICh0aGlzLmNvbmZpZ1tjb21wb25lbnROYW1lXSBhcyB7IFtrZXk6IHN0cmluZ106IE56U2FmZUFueSB9KSB8fCB7fTtcbiAgICByZXR1cm4ga2V5ID8geyBba2V5XTogcmVzW2tleV0gfSA6IHJlcztcbiAgfVxuXG4gIG1lcmdlPFIsIFQgZXh0ZW5kcyBBbGFpbkNvbmZpZ0tleT4oY29tcG9uZW50TmFtZTogVCwgZGVmYXVsdFZhbHVlczogUikge1xuICAgIHJldHVybiB7IC4uLmRlZmF1bHRWYWx1ZXMsIC4uLnRoaXMuZ2V0KGNvbXBvbmVudE5hbWUpIH07XG4gIH1cblxuICBhdHRhY2g8UiwgVCBleHRlbmRzIEFsYWluQ29uZmlnS2V5Pihjb21wb25lbnRUaGlzOiBOelNhZmVBbnksIGNvbXBvbmVudE5hbWU6IFQsIGRlZmF1bHRWYWx1ZXM6IFIpIHtcbiAgICBPYmplY3QuYXNzaWduKGNvbXBvbmVudFRoaXMsIHRoaXMubWVyZ2UoY29tcG9uZW50TmFtZSwgZGVmYXVsdFZhbHVlcykpO1xuICB9XG5cbiAgYXR0YWNoS2V5PFQgZXh0ZW5kcyBBbGFpbkNvbmZpZ0tleT4oY29tcG9uZW50VGhpczogTnpTYWZlQW55LCBjb21wb25lbnROYW1lOiBULCBrZXk6IHN0cmluZykge1xuICAgIE9iamVjdC5hc3NpZ24oY29tcG9uZW50VGhpcywgdGhpcy5nZXQoY29tcG9uZW50TmFtZSwga2V5KSk7XG4gIH1cblxuICBzZXQ8VCBleHRlbmRzIEFsYWluQ29uZmlnS2V5Pihjb21wb25lbnROYW1lOiBULCB2YWx1ZTogQWxhaW5Db25maWdbVF0pOiB2b2lkIHtcbiAgICB0aGlzLmNvbmZpZ1tjb21wb25lbnROYW1lXSA9IHsgLi4udGhpcy5jb25maWdbY29tcG9uZW50TmFtZV0sIC4uLnZhbHVlIH07XG4gIH1cbn1cbiJdfQ==