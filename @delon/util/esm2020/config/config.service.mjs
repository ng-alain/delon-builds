/* eslint-disable @typescript-eslint/no-explicit-any */
import { Inject, Injectable, Optional } from '@angular/core';
import { deepMergeKey } from '@delon/util/other';
import { ALAIN_CONFIG } from './config.types';
import * as i0 from "@angular/core";
export class AlainConfigService {
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
}
AlainConfigService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.2", ngImport: i0, type: AlainConfigService, deps: [{ token: ALAIN_CONFIG, optional: true }], target: i0.ɵɵFactoryTarget.Injectable });
AlainConfigService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.2", ngImport: i0, type: AlainConfigService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.2", ngImport: i0, type: AlainConfigService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [ALAIN_CONFIG]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy91dGlsL2NvbmZpZy9jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1REFBdUQ7QUFDdkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUdqRCxPQUFPLEVBQStCLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUczRSxNQUFNLE9BQU8sa0JBQWtCO0lBRzdCLFlBQThDLGFBQTJCO1FBQ3ZFLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxHQUFHLGFBQWEsRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFFRCxHQUFHLENBQTJCLGFBQWdCLEVBQUUsR0FBWTtRQUMxRCxNQUFNLEdBQUcsR0FBRyxDQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFnQyxJQUFJLEVBQUUsQ0FBYyxDQUFDO1FBQzVGLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUN6QyxDQUFDO0lBRUQsS0FBSyxDQUEyQixhQUFnQixFQUFFLEdBQUcsYUFBb0M7UUFDdkYsT0FBTyxZQUFZLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHLGFBQWEsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVELE1BQU0sQ0FBMkIsYUFBc0IsRUFBRSxhQUFnQixFQUFFLGFBQTZCO1FBQ3RHLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBb0IsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQ2hGLENBQUM7SUFFRCxTQUFTLENBQTJCLGFBQXNCLEVBQUUsYUFBZ0IsRUFBRSxHQUFXO1FBQ3ZGLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBb0IsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFRCxHQUFHLENBQTJCLGFBQWdCLEVBQUUsS0FBcUI7UUFDbkUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsRUFBRSxHQUFHLEtBQUssRUFBRSxDQUFDO0lBQzNFLENBQUM7OytHQTFCVSxrQkFBa0Isa0JBR0csWUFBWTttSEFIakMsa0JBQWtCLGNBREwsTUFBTTsyRkFDbkIsa0JBQWtCO2tCQUQ5QixVQUFVO21CQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7MEJBSW5CLFFBQVE7OzBCQUFJLE1BQU07MkJBQUMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgKi9cbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgZGVlcE1lcmdlS2V5IH0gZnJvbSAnQGRlbG9uL3V0aWwvb3RoZXInO1xuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5pbXBvcnQgeyBBbGFpbkNvbmZpZywgQWxhaW5Db25maWdLZXksIEFMQUlOX0NPTkZJRyB9IGZyb20gJy4vY29uZmlnLnR5cGVzJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBBbGFpbkNvbmZpZ1NlcnZpY2Uge1xuICBwcml2YXRlIGNvbmZpZzogQWxhaW5Db25maWc7XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEluamVjdChBTEFJTl9DT05GSUcpIGRlZmF1bHRDb25maWc/OiBBbGFpbkNvbmZpZykge1xuICAgIHRoaXMuY29uZmlnID0geyAuLi5kZWZhdWx0Q29uZmlnIH07XG4gIH1cblxuICBnZXQ8VCBleHRlbmRzIEFsYWluQ29uZmlnS2V5Pihjb21wb25lbnROYW1lOiBULCBrZXk/OiBzdHJpbmcpOiBBbGFpbkNvbmZpZ1tUXSB7XG4gICAgY29uc3QgcmVzID0gKCh0aGlzLmNvbmZpZ1tjb21wb25lbnROYW1lXSBhcyB7IFtrZXk6IHN0cmluZ106IHVua25vd24gfSkgfHwge30pIGFzIE56U2FmZUFueTtcbiAgICByZXR1cm4ga2V5ID8geyBba2V5XTogcmVzW2tleV0gfSA6IHJlcztcbiAgfVxuXG4gIG1lcmdlPFQgZXh0ZW5kcyBBbGFpbkNvbmZpZ0tleT4oY29tcG9uZW50TmFtZTogVCwgLi4uZGVmYXVsdFZhbHVlczogQXJyYXk8QWxhaW5Db25maWdbVF0+KTogQWxhaW5Db25maWdbVF0ge1xuICAgIHJldHVybiBkZWVwTWVyZ2VLZXkoe30sIHRydWUsIC4uLmRlZmF1bHRWYWx1ZXMsIHRoaXMuZ2V0KGNvbXBvbmVudE5hbWUpKTtcbiAgfVxuXG4gIGF0dGFjaDxUIGV4dGVuZHMgQWxhaW5Db25maWdLZXk+KGNvbXBvbmVudFRoaXM6IHVua25vd24sIGNvbXBvbmVudE5hbWU6IFQsIGRlZmF1bHRWYWx1ZXM6IEFsYWluQ29uZmlnW1RdKTogdm9pZCB7XG4gICAgT2JqZWN0LmFzc2lnbihjb21wb25lbnRUaGlzIGFzIGFueSwgdGhpcy5tZXJnZShjb21wb25lbnROYW1lLCBkZWZhdWx0VmFsdWVzKSk7XG4gIH1cblxuICBhdHRhY2hLZXk8VCBleHRlbmRzIEFsYWluQ29uZmlnS2V5Pihjb21wb25lbnRUaGlzOiB1bmtub3duLCBjb21wb25lbnROYW1lOiBULCBrZXk6IHN0cmluZyk6IHZvaWQge1xuICAgIE9iamVjdC5hc3NpZ24oY29tcG9uZW50VGhpcyBhcyBhbnksIHRoaXMuZ2V0KGNvbXBvbmVudE5hbWUsIGtleSkpO1xuICB9XG5cbiAgc2V0PFQgZXh0ZW5kcyBBbGFpbkNvbmZpZ0tleT4oY29tcG9uZW50TmFtZTogVCwgdmFsdWU6IEFsYWluQ29uZmlnW1RdKTogdm9pZCB7XG4gICAgdGhpcy5jb25maWdbY29tcG9uZW50TmFtZV0gPSB7IC4uLnRoaXMuY29uZmlnW2NvbXBvbmVudE5hbWVdLCAuLi52YWx1ZSB9O1xuICB9XG59XG4iXX0=