/* eslint-disable @typescript-eslint/no-explicit-any */
import { Inject, Injectable, Optional } from '@angular/core';
import { deepMergeKey } from '@delon/util/other';
import { ALAIN_CONFIG } from './config.types';
import * as i0 from "@angular/core";
class AlainConfigService {
    constructor(defaultConfig) {
        this.config = { ...defaultConfig };
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
        this.config[componentName] = { ...this.config[componentName], ...value };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: AlainConfigService, deps: [{ token: ALAIN_CONFIG, optional: true }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: AlainConfigService, providedIn: 'root' }); }
}
export { AlainConfigService };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: AlainConfigService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [ALAIN_CONFIG]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy91dGlsL2NvbmZpZy9jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1REFBdUQ7QUFDdkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUdqRCxPQUFPLEVBQStCLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUUzRSxNQUNhLGtCQUFrQjtJQUc3QixZQUE4QyxhQUEyQjtRQUN2RSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsR0FBRyxhQUFhLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRUQsR0FBRyxDQUEyQixhQUFnQixFQUFFLEdBQVk7UUFDMUQsTUFBTSxHQUFHLEdBQUcsQ0FBRSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBZ0MsSUFBSSxFQUFFLENBQWMsQ0FBQztRQUM1RixPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDekMsQ0FBQztJQUVELEtBQUssQ0FBMkIsYUFBZ0IsRUFBRSxHQUFHLGFBQW9DO1FBQ3ZGLE9BQU8sWUFBWSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsR0FBRyxhQUFhLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFRCxNQUFNLENBQTJCLGFBQXNCLEVBQUUsYUFBZ0IsRUFBRSxhQUE2QjtRQUN0RyxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQW9CLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBRUQsU0FBUyxDQUEyQixhQUFzQixFQUFFLGFBQWdCLEVBQUUsR0FBVztRQUN2RixNQUFNLENBQUMsTUFBTSxDQUFDLGFBQW9CLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRUQsR0FBRyxDQUEyQixhQUFnQixFQUFFLEtBQXFCO1FBQ25FLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQUUsR0FBRyxLQUFLLEVBQUUsQ0FBQztJQUMzRSxDQUFDOzhHQTFCVSxrQkFBa0Isa0JBR0csWUFBWTtrSEFIakMsa0JBQWtCLGNBREwsTUFBTTs7U0FDbkIsa0JBQWtCOzJGQUFsQixrQkFBa0I7a0JBRDlCLFVBQVU7bUJBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzswQkFJbkIsUUFBUTs7MEJBQUksTUFBTTsyQkFBQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAqL1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBkZWVwTWVyZ2VLZXkgfSBmcm9tICdAZGVsb24vdXRpbC9vdGhlcic7XG5pbXBvcnQgdHlwZSB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbmltcG9ydCB7IEFsYWluQ29uZmlnLCBBbGFpbkNvbmZpZ0tleSwgQUxBSU5fQ09ORklHIH0gZnJvbSAnLi9jb25maWcudHlwZXMnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEFsYWluQ29uZmlnU2VydmljZSB7XG4gIHByaXZhdGUgY29uZmlnOiBBbGFpbkNvbmZpZztcblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KEFMQUlOX0NPTkZJRykgZGVmYXVsdENvbmZpZz86IEFsYWluQ29uZmlnKSB7XG4gICAgdGhpcy5jb25maWcgPSB7IC4uLmRlZmF1bHRDb25maWcgfTtcbiAgfVxuXG4gIGdldDxUIGV4dGVuZHMgQWxhaW5Db25maWdLZXk+KGNvbXBvbmVudE5hbWU6IFQsIGtleT86IHN0cmluZyk6IEFsYWluQ29uZmlnW1RdIHtcbiAgICBjb25zdCByZXMgPSAoKHRoaXMuY29uZmlnW2NvbXBvbmVudE5hbWVdIGFzIHsgW2tleTogc3RyaW5nXTogdW5rbm93biB9KSB8fCB7fSkgYXMgTnpTYWZlQW55O1xuICAgIHJldHVybiBrZXkgPyB7IFtrZXldOiByZXNba2V5XSB9IDogcmVzO1xuICB9XG5cbiAgbWVyZ2U8VCBleHRlbmRzIEFsYWluQ29uZmlnS2V5Pihjb21wb25lbnROYW1lOiBULCAuLi5kZWZhdWx0VmFsdWVzOiBBcnJheTxBbGFpbkNvbmZpZ1tUXT4pOiBBbGFpbkNvbmZpZ1tUXSB7XG4gICAgcmV0dXJuIGRlZXBNZXJnZUtleSh7fSwgdHJ1ZSwgLi4uZGVmYXVsdFZhbHVlcywgdGhpcy5nZXQoY29tcG9uZW50TmFtZSkpO1xuICB9XG5cbiAgYXR0YWNoPFQgZXh0ZW5kcyBBbGFpbkNvbmZpZ0tleT4oY29tcG9uZW50VGhpczogdW5rbm93biwgY29tcG9uZW50TmFtZTogVCwgZGVmYXVsdFZhbHVlczogQWxhaW5Db25maWdbVF0pOiB2b2lkIHtcbiAgICBPYmplY3QuYXNzaWduKGNvbXBvbmVudFRoaXMgYXMgYW55LCB0aGlzLm1lcmdlKGNvbXBvbmVudE5hbWUsIGRlZmF1bHRWYWx1ZXMpKTtcbiAgfVxuXG4gIGF0dGFjaEtleTxUIGV4dGVuZHMgQWxhaW5Db25maWdLZXk+KGNvbXBvbmVudFRoaXM6IHVua25vd24sIGNvbXBvbmVudE5hbWU6IFQsIGtleTogc3RyaW5nKTogdm9pZCB7XG4gICAgT2JqZWN0LmFzc2lnbihjb21wb25lbnRUaGlzIGFzIGFueSwgdGhpcy5nZXQoY29tcG9uZW50TmFtZSwga2V5KSk7XG4gIH1cblxuICBzZXQ8VCBleHRlbmRzIEFsYWluQ29uZmlnS2V5Pihjb21wb25lbnROYW1lOiBULCB2YWx1ZTogQWxhaW5Db25maWdbVF0pOiB2b2lkIHtcbiAgICB0aGlzLmNvbmZpZ1tjb21wb25lbnROYW1lXSA9IHsgLi4udGhpcy5jb25maWdbY29tcG9uZW50TmFtZV0sIC4uLnZhbHVlIH07XG4gIH1cbn1cbiJdfQ==