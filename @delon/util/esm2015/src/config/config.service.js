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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy91dGlsL3NyYy9jb25maWcvY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3QyxPQUFPLEVBQStCLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFHM0UsTUFBTSxPQUFPLGtCQUFrQjs7OztJQUc3QixZQUE4QyxhQUEyQjtRQUN2RSxJQUFJLENBQUMsTUFBTSxxQkFBUSxhQUFhLENBQUUsQ0FBQztJQUNyQyxDQUFDOzs7Ozs7O0lBRUQsR0FBRyxDQUEyQixhQUFnQixFQUFFLEdBQVk7O2NBQ3BELEdBQUcsR0FBRyxtQkFBQSxDQUFDLENBQUMsbUJBQUEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsRUFBZ0MsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFhO1FBQzdGLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUN6QyxDQUFDOzs7Ozs7O0lBRUQsS0FBSyxDQUEyQixhQUFnQixFQUFFLEdBQUcsYUFBK0I7UUFDbEYsT0FBTyxZQUFZLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHLGFBQWEsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDM0UsQ0FBQzs7Ozs7Ozs7SUFFRCxNQUFNLENBQTJCLGFBQXdCLEVBQUUsYUFBZ0IsRUFBRSxhQUE2QjtRQUN4RyxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7Ozs7Ozs7O0lBRUQsU0FBUyxDQUEyQixhQUF3QixFQUFFLGFBQWdCLEVBQUUsR0FBVztRQUN6RixNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzdELENBQUM7Ozs7Ozs7SUFFRCxHQUFHLENBQTJCLGFBQWdCLEVBQUUsS0FBcUI7UUFDbkUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsbUNBQVEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBSyxLQUFLLENBQUUsQ0FBQztJQUMzRSxDQUFDOzs7WUEzQkYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7Ozs0Q0FJbkIsUUFBUSxZQUFJLE1BQU0sU0FBQyxZQUFZOzs7Ozs7OztJQUY1QyxvQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgZGVlcE1lcmdlS2V5IH0gZnJvbSAnLi4vb3RoZXIvZGVlcCc7XG5pbXBvcnQgeyBBbGFpbkNvbmZpZywgQWxhaW5Db25maWdLZXksIEFMQUlOX0NPTkZJRyB9IGZyb20gJy4vY29uZmlnLnR5cGVzJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBBbGFpbkNvbmZpZ1NlcnZpY2Uge1xuICBwcml2YXRlIGNvbmZpZzogQWxhaW5Db25maWc7XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEluamVjdChBTEFJTl9DT05GSUcpIGRlZmF1bHRDb25maWc/OiBBbGFpbkNvbmZpZykge1xuICAgIHRoaXMuY29uZmlnID0geyAuLi5kZWZhdWx0Q29uZmlnIH07XG4gIH1cblxuICBnZXQ8VCBleHRlbmRzIEFsYWluQ29uZmlnS2V5Pihjb21wb25lbnROYW1lOiBULCBrZXk/OiBzdHJpbmcpOiBBbGFpbkNvbmZpZ1tUXSB7XG4gICAgY29uc3QgcmVzID0gKCh0aGlzLmNvbmZpZ1tjb21wb25lbnROYW1lXSBhcyB7IFtrZXk6IHN0cmluZ106IE56U2FmZUFueSB9KSB8fCB7fSkgYXMgTnpTYWZlQW55O1xuICAgIHJldHVybiBrZXkgPyB7IFtrZXldOiByZXNba2V5XSB9IDogcmVzO1xuICB9XG5cbiAgbWVyZ2U8VCBleHRlbmRzIEFsYWluQ29uZmlnS2V5Pihjb21wb25lbnROYW1lOiBULCAuLi5kZWZhdWx0VmFsdWVzOiBBbGFpbkNvbmZpZ1tUXVtdKTogQWxhaW5Db25maWdbVF0ge1xuICAgIHJldHVybiBkZWVwTWVyZ2VLZXkoe30sIHRydWUsIC4uLmRlZmF1bHRWYWx1ZXMsIHRoaXMuZ2V0KGNvbXBvbmVudE5hbWUpKTtcbiAgfVxuXG4gIGF0dGFjaDxUIGV4dGVuZHMgQWxhaW5Db25maWdLZXk+KGNvbXBvbmVudFRoaXM6IE56U2FmZUFueSwgY29tcG9uZW50TmFtZTogVCwgZGVmYXVsdFZhbHVlczogQWxhaW5Db25maWdbVF0pIHtcbiAgICBPYmplY3QuYXNzaWduKGNvbXBvbmVudFRoaXMsIHRoaXMubWVyZ2UoY29tcG9uZW50TmFtZSwgZGVmYXVsdFZhbHVlcykpO1xuICB9XG5cbiAgYXR0YWNoS2V5PFQgZXh0ZW5kcyBBbGFpbkNvbmZpZ0tleT4oY29tcG9uZW50VGhpczogTnpTYWZlQW55LCBjb21wb25lbnROYW1lOiBULCBrZXk6IHN0cmluZykge1xuICAgIE9iamVjdC5hc3NpZ24oY29tcG9uZW50VGhpcywgdGhpcy5nZXQoY29tcG9uZW50TmFtZSwga2V5KSk7XG4gIH1cblxuICBzZXQ8VCBleHRlbmRzIEFsYWluQ29uZmlnS2V5Pihjb21wb25lbnROYW1lOiBULCB2YWx1ZTogQWxhaW5Db25maWdbVF0pOiB2b2lkIHtcbiAgICB0aGlzLmNvbmZpZ1tjb21wb25lbnROYW1lXSA9IHsgLi4udGhpcy5jb25maWdbY29tcG9uZW50TmFtZV0sIC4uLnZhbHVlIH07XG4gIH1cbn1cbiJdfQ==