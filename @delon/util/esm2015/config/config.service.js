import { Inject, Injectable, Optional } from '@angular/core';
import { deepMergeKey } from '@delon/util/other';
import { ALAIN_CONFIG } from './config.types';
import * as i0 from "@angular/core";
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
/** @nocollapse */ AlainConfigService.ɵfac = function AlainConfigService_Factory(t) { return new (t || AlainConfigService)(i0.ɵɵinject(ALAIN_CONFIG, 8)); };
/** @nocollapse */ AlainConfigService.ɵprov = i0.ɵɵdefineInjectable({ token: AlainConfigService, factory: AlainConfigService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AlainConfigService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [ALAIN_CONFIG]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy91dGlsL2NvbmZpZy9jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBK0IsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBRzNFLE1BQU0sT0FBTyxrQkFBa0I7SUFHN0IsWUFBOEMsYUFBMkI7UUFDdkUsSUFBSSxDQUFDLE1BQU0scUJBQVEsYUFBYSxDQUFFLENBQUM7SUFDckMsQ0FBQztJQUVELEdBQUcsQ0FBMkIsYUFBZ0IsRUFBRSxHQUFZO1FBQzFELE1BQU0sR0FBRyxHQUFHLENBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQTRCLElBQUksRUFBRSxDQUFRLENBQUM7UUFDbEYsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxLQUFLLENBQTJCLGFBQWdCLEVBQUUsR0FBRyxhQUErQjtRQUNsRixPQUFPLFlBQVksQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLEdBQUcsYUFBYSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRUQsTUFBTSxDQUEyQixhQUFrQixFQUFFLGFBQWdCLEVBQUUsYUFBNkI7UUFDbEcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRUQsU0FBUyxDQUEyQixhQUFrQixFQUFFLGFBQWdCLEVBQUUsR0FBVztRQUNuRixNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCxHQUFHLENBQTJCLGFBQWdCLEVBQUUsS0FBcUI7UUFDbkUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsbUNBQVEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBSyxLQUFLLENBQUUsQ0FBQztJQUMzRSxDQUFDOzt1R0ExQlUsa0JBQWtCLGNBR0csWUFBWTs2RUFIakMsa0JBQWtCLFdBQWxCLGtCQUFrQixtQkFETCxNQUFNO3VGQUNuQixrQkFBa0I7Y0FEOUIsVUFBVTtlQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7c0JBSW5CLFFBQVE7O3NCQUFJLE1BQU07dUJBQUMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGRlZXBNZXJnZUtleSB9IGZyb20gJ0BkZWxvbi91dGlsL290aGVyJztcbmltcG9ydCB7IEFsYWluQ29uZmlnLCBBbGFpbkNvbmZpZ0tleSwgQUxBSU5fQ09ORklHIH0gZnJvbSAnLi9jb25maWcudHlwZXMnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEFsYWluQ29uZmlnU2VydmljZSB7XG4gIHByaXZhdGUgY29uZmlnOiBBbGFpbkNvbmZpZztcblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KEFMQUlOX0NPTkZJRykgZGVmYXVsdENvbmZpZz86IEFsYWluQ29uZmlnKSB7XG4gICAgdGhpcy5jb25maWcgPSB7IC4uLmRlZmF1bHRDb25maWcgfTtcbiAgfVxuXG4gIGdldDxUIGV4dGVuZHMgQWxhaW5Db25maWdLZXk+KGNvbXBvbmVudE5hbWU6IFQsIGtleT86IHN0cmluZyk6IEFsYWluQ29uZmlnW1RdIHtcbiAgICBjb25zdCByZXMgPSAoKHRoaXMuY29uZmlnW2NvbXBvbmVudE5hbWVdIGFzIHsgW2tleTogc3RyaW5nXTogYW55IH0pIHx8IHt9KSBhcyBhbnk7XG4gICAgcmV0dXJuIGtleSA/IHsgW2tleV06IHJlc1trZXldIH0gOiByZXM7XG4gIH1cblxuICBtZXJnZTxUIGV4dGVuZHMgQWxhaW5Db25maWdLZXk+KGNvbXBvbmVudE5hbWU6IFQsIC4uLmRlZmF1bHRWYWx1ZXM6IEFsYWluQ29uZmlnW1RdW10pOiBBbGFpbkNvbmZpZ1tUXSB7XG4gICAgcmV0dXJuIGRlZXBNZXJnZUtleSh7fSwgdHJ1ZSwgLi4uZGVmYXVsdFZhbHVlcywgdGhpcy5nZXQoY29tcG9uZW50TmFtZSkpO1xuICB9XG5cbiAgYXR0YWNoPFQgZXh0ZW5kcyBBbGFpbkNvbmZpZ0tleT4oY29tcG9uZW50VGhpczogYW55LCBjb21wb25lbnROYW1lOiBULCBkZWZhdWx0VmFsdWVzOiBBbGFpbkNvbmZpZ1tUXSk6IHZvaWQge1xuICAgIE9iamVjdC5hc3NpZ24oY29tcG9uZW50VGhpcywgdGhpcy5tZXJnZShjb21wb25lbnROYW1lLCBkZWZhdWx0VmFsdWVzKSk7XG4gIH1cblxuICBhdHRhY2hLZXk8VCBleHRlbmRzIEFsYWluQ29uZmlnS2V5Pihjb21wb25lbnRUaGlzOiBhbnksIGNvbXBvbmVudE5hbWU6IFQsIGtleTogc3RyaW5nKTogdm9pZCB7XG4gICAgT2JqZWN0LmFzc2lnbihjb21wb25lbnRUaGlzLCB0aGlzLmdldChjb21wb25lbnROYW1lLCBrZXkpKTtcbiAgfVxuXG4gIHNldDxUIGV4dGVuZHMgQWxhaW5Db25maWdLZXk+KGNvbXBvbmVudE5hbWU6IFQsIHZhbHVlOiBBbGFpbkNvbmZpZ1tUXSk6IHZvaWQge1xuICAgIHRoaXMuY29uZmlnW2NvbXBvbmVudE5hbWVdID0geyAuLi50aGlzLmNvbmZpZ1tjb21wb25lbnROYW1lXSwgLi4udmFsdWUgfTtcbiAgfVxufVxuIl19