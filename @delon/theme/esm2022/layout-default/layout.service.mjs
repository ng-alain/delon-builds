import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SettingsService } from '@delon/theme';
import * as i0 from "@angular/core";
const DEFAULT = {
    logoExpanded: `./assets/logo-full.svg`,
    logoCollapsed: `./assets/logo.svg`,
    logoLink: `/`,
    showHeaderCollapse: true,
    showSiderCollapse: false,
    hideAside: false,
    hideHeader: false
};
export class LayoutDefaultService {
    constructor() {
        this.settings = inject(SettingsService);
        this._options$ = new BehaviorSubject(DEFAULT);
        this._options = DEFAULT;
    }
    get options() {
        return this._options;
    }
    get options$() {
        return this._options$.asObservable();
    }
    get collapsedIcon() {
        const collapsed = this.settings.layout.collapsed;
        let type = collapsed ? 'unfold' : 'fold';
        if (this.settings.layout.direction === 'rtl') {
            type = collapsed ? 'fold' : 'unfold';
        }
        return `menu-${type}`;
    }
    notify() {
        this._options$.next(this._options);
    }
    /**
     * Set layout configuration
     *
     * 设置布局配置
     */
    setOptions(options) {
        this._options = {
            ...DEFAULT,
            ...options
        };
        this.notify();
    }
    /**
     * Toggle the collapsed state of the sidebar menu bar
     *
     * 切换侧边栏菜单栏折叠状态
     */
    toggleCollapsed(status) {
        this.settings.setLayout('collapsed', status != null ? status : !this.settings.layout.collapsed);
        this.notify();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.1", ngImport: i0, type: LayoutDefaultService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.1", ngImport: i0, type: LayoutDefaultService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.1", ngImport: i0, type: LayoutDefaultService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS9sYXlvdXQtZGVmYXVsdC9sYXlvdXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7O0FBSS9DLE1BQU0sT0FBTyxHQUF5QjtJQUNwQyxZQUFZLEVBQUUsd0JBQXdCO0lBQ3RDLGFBQWEsRUFBRSxtQkFBbUI7SUFDbEMsUUFBUSxFQUFFLEdBQUc7SUFDYixrQkFBa0IsRUFBRSxJQUFJO0lBQ3hCLGlCQUFpQixFQUFFLEtBQUs7SUFDeEIsU0FBUyxFQUFFLEtBQUs7SUFDaEIsVUFBVSxFQUFFLEtBQUs7Q0FDbEIsQ0FBQztBQUdGLE1BQU0sT0FBTyxvQkFBb0I7SUFEakM7UUFFbUIsYUFBUSxHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM1QyxjQUFTLEdBQUcsSUFBSSxlQUFlLENBQXVCLE9BQU8sQ0FBQyxDQUFDO1FBQy9ELGFBQVEsR0FBeUIsT0FBTyxDQUFDO0tBNkNsRDtJQTNDQyxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUVELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBRUQsSUFBSSxhQUFhO1FBQ2YsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ2pELElBQUksSUFBSSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDekMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEtBQUssS0FBSyxFQUFFLENBQUM7WUFDN0MsSUFBSSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFDdkMsQ0FBQztRQUNELE9BQU8sUUFBUSxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRU8sTUFBTTtRQUNaLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILFVBQVUsQ0FBQyxPQUFxQztRQUM5QyxJQUFJLENBQUMsUUFBUSxHQUFHO1lBQ2QsR0FBRyxPQUFPO1lBQ1YsR0FBRyxPQUFPO1NBQ1gsQ0FBQztRQUNGLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGVBQWUsQ0FBQyxNQUFnQjtRQUM5QixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsTUFBTSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2hHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDOzhHQS9DVSxvQkFBb0I7a0hBQXBCLG9CQUFvQixjQURQLE1BQU07OzJGQUNuQixvQkFBb0I7a0JBRGhDLFVBQVU7bUJBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgaW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgU2V0dGluZ3NTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcblxuaW1wb3J0IHsgTGF5b3V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tICcuL3R5cGVzJztcblxuY29uc3QgREVGQVVMVDogTGF5b3V0RGVmYXVsdE9wdGlvbnMgPSB7XG4gIGxvZ29FeHBhbmRlZDogYC4vYXNzZXRzL2xvZ28tZnVsbC5zdmdgLFxuICBsb2dvQ29sbGFwc2VkOiBgLi9hc3NldHMvbG9nby5zdmdgLFxuICBsb2dvTGluazogYC9gLFxuICBzaG93SGVhZGVyQ29sbGFwc2U6IHRydWUsXG4gIHNob3dTaWRlckNvbGxhcHNlOiBmYWxzZSxcbiAgaGlkZUFzaWRlOiBmYWxzZSxcbiAgaGlkZUhlYWRlcjogZmFsc2Vcbn07XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgTGF5b3V0RGVmYXVsdFNlcnZpY2Uge1xuICBwcml2YXRlIHJlYWRvbmx5IHNldHRpbmdzID0gaW5qZWN0KFNldHRpbmdzU2VydmljZSk7XG4gIHByaXZhdGUgX29wdGlvbnMkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxMYXlvdXREZWZhdWx0T3B0aW9ucz4oREVGQVVMVCk7XG4gIHByaXZhdGUgX29wdGlvbnM6IExheW91dERlZmF1bHRPcHRpb25zID0gREVGQVVMVDtcblxuICBnZXQgb3B0aW9ucygpOiBMYXlvdXREZWZhdWx0T3B0aW9ucyB7XG4gICAgcmV0dXJuIHRoaXMuX29wdGlvbnM7XG4gIH1cblxuICBnZXQgb3B0aW9ucyQoKTogT2JzZXJ2YWJsZTxMYXlvdXREZWZhdWx0T3B0aW9ucz4ge1xuICAgIHJldHVybiB0aGlzLl9vcHRpb25zJC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIGdldCBjb2xsYXBzZWRJY29uKCk6IHN0cmluZyB7XG4gICAgY29uc3QgY29sbGFwc2VkID0gdGhpcy5zZXR0aW5ncy5sYXlvdXQuY29sbGFwc2VkO1xuICAgIGxldCB0eXBlID0gY29sbGFwc2VkID8gJ3VuZm9sZCcgOiAnZm9sZCc7XG4gICAgaWYgKHRoaXMuc2V0dGluZ3MubGF5b3V0LmRpcmVjdGlvbiA9PT0gJ3J0bCcpIHtcbiAgICAgIHR5cGUgPSBjb2xsYXBzZWQgPyAnZm9sZCcgOiAndW5mb2xkJztcbiAgICB9XG4gICAgcmV0dXJuIGBtZW51LSR7dHlwZX1gO1xuICB9XG5cbiAgcHJpdmF0ZSBub3RpZnkoKTogdm9pZCB7XG4gICAgdGhpcy5fb3B0aW9ucyQubmV4dCh0aGlzLl9vcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgbGF5b3V0IGNvbmZpZ3VyYXRpb25cbiAgICpcbiAgICog6K6+572u5biD5bGA6YWN572uXG4gICAqL1xuICBzZXRPcHRpb25zKG9wdGlvbnM/OiBMYXlvdXREZWZhdWx0T3B0aW9ucyB8IG51bGwpOiB2b2lkIHtcbiAgICB0aGlzLl9vcHRpb25zID0ge1xuICAgICAgLi4uREVGQVVMVCxcbiAgICAgIC4uLm9wdGlvbnNcbiAgICB9O1xuICAgIHRoaXMubm90aWZ5KCk7XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlIHRoZSBjb2xsYXBzZWQgc3RhdGUgb2YgdGhlIHNpZGViYXIgbWVudSBiYXJcbiAgICpcbiAgICog5YiH5o2i5L6n6L655qCP6I+c5Y2V5qCP5oqY5Y+g54q25oCBXG4gICAqL1xuICB0b2dnbGVDb2xsYXBzZWQoc3RhdHVzPzogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuc2V0dGluZ3Muc2V0TGF5b3V0KCdjb2xsYXBzZWQnLCBzdGF0dXMgIT0gbnVsbCA/IHN0YXR1cyA6ICF0aGlzLnNldHRpbmdzLmxheW91dC5jb2xsYXBzZWQpO1xuICAgIHRoaXMubm90aWZ5KCk7XG4gIH1cbn1cbiJdfQ==