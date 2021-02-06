import { Inject, Injectable, Optional } from '@angular/core';
import { deepMergeKey } from '@delon/util/other';
import { ALAIN_CONFIG } from './config.types';
import * as i0 from "@angular/core";
import * as i1 from "./config.types";
export class AlainConfigService {
    constructor(defaultConfig) {
        this.config = Object.assign({}, defaultConfig);
    }
    get(componentName, key) {
        const res = (this.config[componentName] || {});
        return key ? { [key]: res[key] } : res;
    }
    merge(componentName, ...defaultValues) {
        return deepMergeKey({}, true, ...defaultValues, this.get(componentName));
    }
    attach(componentThis, componentName, defaultValues) {
        Object.assign(componentThis, this.merge(componentName, defaultValues));
    }
    attachKey(componentThis, componentName, key) {
        Object.assign(componentThis, this.get(componentName, key));
    }
    set(componentName, value) {
        this.config[componentName] = Object.assign(Object.assign({}, this.config[componentName]), value);
    }
}
/** @nocollapse */ AlainConfigService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AlainConfigService_Factory() { return new AlainConfigService(i0.ɵɵinject(i1.ALAIN_CONFIG, 8)); }, token: AlainConfigService, providedIn: "root" });
AlainConfigService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
AlainConfigService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [ALAIN_CONFIG,] }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy91dGlsL2NvbmZpZy9jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBK0IsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUczRSxNQUFNLE9BQU8sa0JBQWtCO0lBRzdCLFlBQThDLGFBQTJCO1FBQ3ZFLElBQUksQ0FBQyxNQUFNLHFCQUFRLGFBQWEsQ0FBRSxDQUFDO0lBQ3JDLENBQUM7SUFFRCxHQUFHLENBQTJCLGFBQWdCLEVBQUUsR0FBWTtRQUMxRCxNQUFNLEdBQUcsR0FBRyxDQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUE0QixJQUFJLEVBQUUsQ0FBUSxDQUFDO1FBQ2xGLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUN6QyxDQUFDO0lBRUQsS0FBSyxDQUEyQixhQUFnQixFQUFFLEdBQUcsYUFBK0I7UUFDbEYsT0FBTyxZQUFZLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHLGFBQWEsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVELE1BQU0sQ0FBMkIsYUFBa0IsRUFBRSxhQUFnQixFQUFFLGFBQTZCO1FBQ2xHLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVELFNBQVMsQ0FBMkIsYUFBa0IsRUFBRSxhQUFnQixFQUFFLEdBQVc7UUFDbkYsTUFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsR0FBRyxDQUEyQixhQUFnQixFQUFFLEtBQXFCO1FBQ25FLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLG1DQUFRLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUssS0FBSyxDQUFFLENBQUM7SUFDM0UsQ0FBQzs7OztZQTNCRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7OzRDQUluQixRQUFRLFlBQUksTUFBTSxTQUFDLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBkZWVwTWVyZ2VLZXkgfSBmcm9tICdAZGVsb24vdXRpbC9vdGhlcic7XG5pbXBvcnQgeyBBbGFpbkNvbmZpZywgQWxhaW5Db25maWdLZXksIEFMQUlOX0NPTkZJRyB9IGZyb20gJy4vY29uZmlnLnR5cGVzJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBBbGFpbkNvbmZpZ1NlcnZpY2Uge1xuICBwcml2YXRlIGNvbmZpZzogQWxhaW5Db25maWc7XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEluamVjdChBTEFJTl9DT05GSUcpIGRlZmF1bHRDb25maWc/OiBBbGFpbkNvbmZpZykge1xuICAgIHRoaXMuY29uZmlnID0geyAuLi5kZWZhdWx0Q29uZmlnIH07XG4gIH1cblxuICBnZXQ8VCBleHRlbmRzIEFsYWluQ29uZmlnS2V5Pihjb21wb25lbnROYW1lOiBULCBrZXk/OiBzdHJpbmcpOiBBbGFpbkNvbmZpZ1tUXSB7XG4gICAgY29uc3QgcmVzID0gKCh0aGlzLmNvbmZpZ1tjb21wb25lbnROYW1lXSBhcyB7IFtrZXk6IHN0cmluZ106IGFueSB9KSB8fCB7fSkgYXMgYW55O1xuICAgIHJldHVybiBrZXkgPyB7IFtrZXldOiByZXNba2V5XSB9IDogcmVzO1xuICB9XG5cbiAgbWVyZ2U8VCBleHRlbmRzIEFsYWluQ29uZmlnS2V5Pihjb21wb25lbnROYW1lOiBULCAuLi5kZWZhdWx0VmFsdWVzOiBBbGFpbkNvbmZpZ1tUXVtdKTogQWxhaW5Db25maWdbVF0ge1xuICAgIHJldHVybiBkZWVwTWVyZ2VLZXkoe30sIHRydWUsIC4uLmRlZmF1bHRWYWx1ZXMsIHRoaXMuZ2V0KGNvbXBvbmVudE5hbWUpKTtcbiAgfVxuXG4gIGF0dGFjaDxUIGV4dGVuZHMgQWxhaW5Db25maWdLZXk+KGNvbXBvbmVudFRoaXM6IGFueSwgY29tcG9uZW50TmFtZTogVCwgZGVmYXVsdFZhbHVlczogQWxhaW5Db25maWdbVF0pOiB2b2lkIHtcbiAgICBPYmplY3QuYXNzaWduKGNvbXBvbmVudFRoaXMsIHRoaXMubWVyZ2UoY29tcG9uZW50TmFtZSwgZGVmYXVsdFZhbHVlcykpO1xuICB9XG5cbiAgYXR0YWNoS2V5PFQgZXh0ZW5kcyBBbGFpbkNvbmZpZ0tleT4oY29tcG9uZW50VGhpczogYW55LCBjb21wb25lbnROYW1lOiBULCBrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgIE9iamVjdC5hc3NpZ24oY29tcG9uZW50VGhpcywgdGhpcy5nZXQoY29tcG9uZW50TmFtZSwga2V5KSk7XG4gIH1cblxuICBzZXQ8VCBleHRlbmRzIEFsYWluQ29uZmlnS2V5Pihjb21wb25lbnROYW1lOiBULCB2YWx1ZTogQWxhaW5Db25maWdbVF0pOiB2b2lkIHtcbiAgICB0aGlzLmNvbmZpZ1tjb21wb25lbnROYW1lXSA9IHsgLi4udGhpcy5jb25maWdbY29tcG9uZW50TmFtZV0sIC4uLnZhbHVlIH07XG4gIH1cbn1cbiJdfQ==