import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@delon/theme";
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
    constructor(settings) {
        this.settings = settings;
        this._options$ = new BehaviorSubject(DEFAULT);
        this._options = DEFAULT;
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: LayoutDefaultService, deps: [{ token: i1.SettingsService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: LayoutDefaultService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: LayoutDefaultService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: () => [{ type: i1.SettingsService }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS9sYXlvdXQtZGVmYXVsdC9sYXlvdXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7OztBQU1uRCxNQUFNLE9BQU8sR0FBeUI7SUFDcEMsWUFBWSxFQUFFLHdCQUF3QjtJQUN0QyxhQUFhLEVBQUUsbUJBQW1CO0lBQ2xDLFFBQVEsRUFBRSxHQUFHO0lBQ2Isa0JBQWtCLEVBQUUsSUFBSTtJQUN4QixpQkFBaUIsRUFBRSxLQUFLO0lBQ3hCLFNBQVMsRUFBRSxLQUFLO0lBQ2hCLFVBQVUsRUFBRSxLQUFLO0NBQ2xCLENBQUM7QUFHRixNQUFNLE9BQU8sb0JBQW9CO0lBSS9CLElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxJQUFJLGFBQWE7UUFDZixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDakQsSUFBSSxJQUFJLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUN6QyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFNBQVMsS0FBSyxLQUFLLEVBQUUsQ0FBQztZQUM3QyxJQUFJLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUN2QyxDQUFDO1FBQ0QsT0FBTyxRQUFRLElBQUksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxZQUFvQixRQUF5QjtRQUF6QixhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQXBCckMsY0FBUyxHQUFHLElBQUksZUFBZSxDQUF1QixPQUFPLENBQUMsQ0FBQztRQUMvRCxhQUFRLEdBQXlCLE9BQU8sQ0FBQztJQW1CRCxDQUFDO0lBRXpDLE1BQU07UUFDWixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxVQUFVLENBQUMsT0FBcUM7UUFDOUMsSUFBSSxDQUFDLFFBQVEsR0FBRztZQUNkLEdBQUcsT0FBTztZQUNWLEdBQUcsT0FBTztTQUNYLENBQUM7UUFDRixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxlQUFlLENBQUMsTUFBZ0I7UUFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLE1BQU0sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNoRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQzs4R0FoRFUsb0JBQW9CO2tIQUFwQixvQkFBb0IsY0FEUCxNQUFNOzsyRkFDbkIsb0JBQW9CO2tCQURoQyxVQUFVO21CQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBTZXR0aW5nc1NlcnZpY2UgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuXG5pbXBvcnQgeyBMYXlvdXREZWZhdWx0T3B0aW9ucyB9IGZyb20gJy4vdHlwZXMnO1xuXG5jb25zdCBERUZBVUxUOiBMYXlvdXREZWZhdWx0T3B0aW9ucyA9IHtcbiAgbG9nb0V4cGFuZGVkOiBgLi9hc3NldHMvbG9nby1mdWxsLnN2Z2AsXG4gIGxvZ29Db2xsYXBzZWQ6IGAuL2Fzc2V0cy9sb2dvLnN2Z2AsXG4gIGxvZ29MaW5rOiBgL2AsXG4gIHNob3dIZWFkZXJDb2xsYXBzZTogdHJ1ZSxcbiAgc2hvd1NpZGVyQ29sbGFwc2U6IGZhbHNlLFxuICBoaWRlQXNpZGU6IGZhbHNlLFxuICBoaWRlSGVhZGVyOiBmYWxzZVxufTtcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBMYXlvdXREZWZhdWx0U2VydmljZSB7XG4gIHByaXZhdGUgX29wdGlvbnMkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxMYXlvdXREZWZhdWx0T3B0aW9ucz4oREVGQVVMVCk7XG4gIHByaXZhdGUgX29wdGlvbnM6IExheW91dERlZmF1bHRPcHRpb25zID0gREVGQVVMVDtcblxuICBnZXQgb3B0aW9ucygpOiBMYXlvdXREZWZhdWx0T3B0aW9ucyB7XG4gICAgcmV0dXJuIHRoaXMuX29wdGlvbnM7XG4gIH1cblxuICBnZXQgb3B0aW9ucyQoKTogT2JzZXJ2YWJsZTxMYXlvdXREZWZhdWx0T3B0aW9ucz4ge1xuICAgIHJldHVybiB0aGlzLl9vcHRpb25zJC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIGdldCBjb2xsYXBzZWRJY29uKCk6IHN0cmluZyB7XG4gICAgY29uc3QgY29sbGFwc2VkID0gdGhpcy5zZXR0aW5ncy5sYXlvdXQuY29sbGFwc2VkO1xuICAgIGxldCB0eXBlID0gY29sbGFwc2VkID8gJ3VuZm9sZCcgOiAnZm9sZCc7XG4gICAgaWYgKHRoaXMuc2V0dGluZ3MubGF5b3V0LmRpcmVjdGlvbiA9PT0gJ3J0bCcpIHtcbiAgICAgIHR5cGUgPSBjb2xsYXBzZWQgPyAnZm9sZCcgOiAndW5mb2xkJztcbiAgICB9XG4gICAgcmV0dXJuIGBtZW51LSR7dHlwZX1gO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXR0aW5nczogU2V0dGluZ3NTZXJ2aWNlKSB7fVxuXG4gIHByaXZhdGUgbm90aWZ5KCk6IHZvaWQge1xuICAgIHRoaXMuX29wdGlvbnMkLm5leHQodGhpcy5fb3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGxheW91dCBjb25maWd1cmF0aW9uXG4gICAqXG4gICAqIOiuvue9ruW4g+WxgOmFjee9rlxuICAgKi9cbiAgc2V0T3B0aW9ucyhvcHRpb25zPzogTGF5b3V0RGVmYXVsdE9wdGlvbnMgfCBudWxsKTogdm9pZCB7XG4gICAgdGhpcy5fb3B0aW9ucyA9IHtcbiAgICAgIC4uLkRFRkFVTFQsXG4gICAgICAuLi5vcHRpb25zXG4gICAgfTtcbiAgICB0aGlzLm5vdGlmeSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZSB0aGUgY29sbGFwc2VkIHN0YXRlIG9mIHRoZSBzaWRlYmFyIG1lbnUgYmFyXG4gICAqXG4gICAqIOWIh+aNouS+p+i+ueagj+iPnOWNleagj+aKmOWPoOeKtuaAgVxuICAgKi9cbiAgdG9nZ2xlQ29sbGFwc2VkKHN0YXR1cz86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLnNldHRpbmdzLnNldExheW91dCgnY29sbGFwc2VkJywgc3RhdHVzICE9IG51bGwgPyBzdGF0dXMgOiAhdGhpcy5zZXR0aW5ncy5sYXlvdXQuY29sbGFwc2VkKTtcbiAgICB0aGlzLm5vdGlmeSgpO1xuICB9XG59XG4iXX0=