import { Inject, Injectable, Optional } from '@angular/core';
import { deepMergeKey } from '../other/deep';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy91dGlsL3NyYy9jb25maWcvY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0MsT0FBTyxFQUErQixZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFHM0UsTUFBTSxPQUFPLGtCQUFrQjtJQUc3QixZQUE4QyxhQUEyQjtRQUN2RSxJQUFJLENBQUMsTUFBTSxxQkFBUSxhQUFhLENBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRUQsR0FBRyxDQUEyQixhQUFnQixFQUFFLEdBQVk7UUFDMUQsTUFBTSxHQUFHLEdBQUcsQ0FBRSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBa0MsSUFBSSxFQUFFLENBQWMsQ0FBQztRQUM5RixPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDekMsQ0FBQztJQUVELEtBQUssQ0FBMkIsYUFBZ0IsRUFBRSxHQUFHLGFBQStCO1FBQ2xGLE9BQU8sWUFBWSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsR0FBRyxhQUFhLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFRCxNQUFNLENBQTJCLGFBQXdCLEVBQUUsYUFBZ0IsRUFBRSxhQUE2QjtRQUN4RyxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFRCxTQUFTLENBQTJCLGFBQXdCLEVBQUUsYUFBZ0IsRUFBRSxHQUFXO1FBQ3pGLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELEdBQUcsQ0FBMkIsYUFBZ0IsRUFBRSxLQUFxQjtRQUNuRSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxtQ0FBUSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFLLEtBQUssQ0FBRSxDQUFDO0lBQzNFLENBQUM7O3VHQTFCVSxrQkFBa0IsY0FHRyxZQUFZOzZFQUhqQyxrQkFBa0IsV0FBbEIsa0JBQWtCLG1CQURMLE1BQU07dUZBQ25CLGtCQUFrQjtjQUQ5QixVQUFVO2VBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOztzQkFJbkIsUUFBUTs7c0JBQUksTUFBTTt1QkFBQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IGRlZXBNZXJnZUtleSB9IGZyb20gJy4uL290aGVyL2RlZXAnO1xuaW1wb3J0IHsgQWxhaW5Db25maWcsIEFsYWluQ29uZmlnS2V5LCBBTEFJTl9DT05GSUcgfSBmcm9tICcuL2NvbmZpZy50eXBlcyc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQWxhaW5Db25maWdTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBjb25maWc6IEFsYWluQ29uZmlnO1xuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBJbmplY3QoQUxBSU5fQ09ORklHKSBkZWZhdWx0Q29uZmlnPzogQWxhaW5Db25maWcpIHtcbiAgICB0aGlzLmNvbmZpZyA9IHsgLi4uZGVmYXVsdENvbmZpZyB9O1xuICB9XG5cbiAgZ2V0PFQgZXh0ZW5kcyBBbGFpbkNvbmZpZ0tleT4oY29tcG9uZW50TmFtZTogVCwga2V5Pzogc3RyaW5nKTogQWxhaW5Db25maWdbVF0ge1xuICAgIGNvbnN0IHJlcyA9ICgodGhpcy5jb25maWdbY29tcG9uZW50TmFtZV0gYXMgeyBba2V5OiBzdHJpbmddOiBOelNhZmVBbnkgfSkgfHwge30pIGFzIE56U2FmZUFueTtcbiAgICByZXR1cm4ga2V5ID8geyBba2V5XTogcmVzW2tleV0gfSA6IHJlcztcbiAgfVxuXG4gIG1lcmdlPFQgZXh0ZW5kcyBBbGFpbkNvbmZpZ0tleT4oY29tcG9uZW50TmFtZTogVCwgLi4uZGVmYXVsdFZhbHVlczogQWxhaW5Db25maWdbVF1bXSk6IEFsYWluQ29uZmlnW1RdIHtcbiAgICByZXR1cm4gZGVlcE1lcmdlS2V5KHt9LCB0cnVlLCAuLi5kZWZhdWx0VmFsdWVzLCB0aGlzLmdldChjb21wb25lbnROYW1lKSk7XG4gIH1cblxuICBhdHRhY2g8VCBleHRlbmRzIEFsYWluQ29uZmlnS2V5Pihjb21wb25lbnRUaGlzOiBOelNhZmVBbnksIGNvbXBvbmVudE5hbWU6IFQsIGRlZmF1bHRWYWx1ZXM6IEFsYWluQ29uZmlnW1RdKTogdm9pZCB7XG4gICAgT2JqZWN0LmFzc2lnbihjb21wb25lbnRUaGlzLCB0aGlzLm1lcmdlKGNvbXBvbmVudE5hbWUsIGRlZmF1bHRWYWx1ZXMpKTtcbiAgfVxuXG4gIGF0dGFjaEtleTxUIGV4dGVuZHMgQWxhaW5Db25maWdLZXk+KGNvbXBvbmVudFRoaXM6IE56U2FmZUFueSwgY29tcG9uZW50TmFtZTogVCwga2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBPYmplY3QuYXNzaWduKGNvbXBvbmVudFRoaXMsIHRoaXMuZ2V0KGNvbXBvbmVudE5hbWUsIGtleSkpO1xuICB9XG5cbiAgc2V0PFQgZXh0ZW5kcyBBbGFpbkNvbmZpZ0tleT4oY29tcG9uZW50TmFtZTogVCwgdmFsdWU6IEFsYWluQ29uZmlnW1RdKTogdm9pZCB7XG4gICAgdGhpcy5jb25maWdbY29tcG9uZW50TmFtZV0gPSB7IC4uLnRoaXMuY29uZmlnW2NvbXBvbmVudE5hbWVdLCAuLi52YWx1ZSB9O1xuICB9XG59XG4iXX0=