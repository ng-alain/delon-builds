import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@delon/theme";
export class LayoutDefaultService {
    constructor(settings) {
        this.settings = settings;
        this._options$ = new BehaviorSubject({});
        this.options$ = this._options$.pipe(distinctUntilChanged());
        this._options = {};
    }
    get options() {
        return this._options;
    }
    get collapsedIcon() {
        const collapsed = this.settings.layout.collapsed;
        let type = collapsed ? 'unfold' : 'fold';
        if (this.settings.layout.direction === 'rtl') {
            type = collapsed ? 'fold' : 'unfold';
        }
        return `menu-${type}`;
    }
    /**
     * Set layout configuration
     *
     * 设置布局配置
     */
    setOptions(options) {
        this._options = {
            logoExpanded: `./assets/logo-full.svg`,
            logoCollapsed: `./assets/logo.svg`,
            logoLink: `/`,
            showHeaderCollapse: true,
            hideAside: false,
            ...options
        };
        this._options$.next(this._options);
    }
    /**
     * Toggle the collapsed state of the sidebar menu bar
     *
     * 切换侧边栏菜单栏折叠状态
     */
    toggleCollapsed(status) {
        this.settings.setLayout('collapsed', status ?? !this.settings.layout.collapsed);
    }
}
LayoutDefaultService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: LayoutDefaultService, deps: [{ token: i1.SettingsService }], target: i0.ɵɵFactoryTarget.Injectable });
LayoutDefaultService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: LayoutDefaultService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: LayoutDefaultService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: i1.SettingsService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS9sYXlvdXQtZGVmYXVsdC9sYXlvdXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxNQUFNLENBQUM7OztBQU83RCxNQUFNLE9BQU8sb0JBQW9CO0lBa0IvQixZQUFvQixRQUF5QjtRQUF6QixhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQWpCckMsY0FBUyxHQUFHLElBQUksZUFBZSxDQUF1QixFQUFFLENBQUMsQ0FBQztRQUNsRSxhQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDO1FBQy9DLGFBQVEsR0FBeUIsRUFBRSxDQUFDO0lBZUksQ0FBQztJQWJqRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUVELElBQUksYUFBYTtRQUNmLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUNqRCxJQUFJLElBQUksR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ3pDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FBUyxLQUFLLEtBQUssRUFBRTtZQUM1QyxJQUFJLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztTQUN0QztRQUNELE9BQU8sUUFBUSxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBSUQ7Ozs7T0FJRztJQUNILFVBQVUsQ0FBQyxPQUFxQztRQUM5QyxJQUFJLENBQUMsUUFBUSxHQUFHO1lBQ2QsWUFBWSxFQUFFLHdCQUF3QjtZQUN0QyxhQUFhLEVBQUUsbUJBQW1CO1lBQ2xDLFFBQVEsRUFBRSxHQUFHO1lBQ2Isa0JBQWtCLEVBQUUsSUFBSTtZQUN4QixTQUFTLEVBQUUsS0FBSztZQUNoQixHQUFHLE9BQU87U0FDWCxDQUFDO1FBQ0YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsZUFBZSxDQUFDLE1BQWdCO1FBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNsRixDQUFDOztrSEE1Q1Usb0JBQW9CO3NIQUFwQixvQkFBb0IsY0FEUCxNQUFNOzRGQUNuQixvQkFBb0I7a0JBRGhDLFVBQVU7bUJBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBkaXN0aW5jdFVudGlsQ2hhbmdlZCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBTZXR0aW5nc1NlcnZpY2UgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuXG5pbXBvcnQgeyBMYXlvdXREZWZhdWx0T3B0aW9ucyB9IGZyb20gJy4vdHlwZXMnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIExheW91dERlZmF1bHRTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfb3B0aW9ucyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PExheW91dERlZmF1bHRPcHRpb25zPih7fSk7XG4gIG9wdGlvbnMkID0gdGhpcy5fb3B0aW9ucyQucGlwZShkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKTtcbiAgcHJpdmF0ZSBfb3B0aW9uczogTGF5b3V0RGVmYXVsdE9wdGlvbnMgPSB7fTtcblxuICBnZXQgb3B0aW9ucygpOiBMYXlvdXREZWZhdWx0T3B0aW9ucyB7XG4gICAgcmV0dXJuIHRoaXMuX29wdGlvbnM7XG4gIH1cblxuICBnZXQgY29sbGFwc2VkSWNvbigpOiBzdHJpbmcge1xuICAgIGNvbnN0IGNvbGxhcHNlZCA9IHRoaXMuc2V0dGluZ3MubGF5b3V0LmNvbGxhcHNlZDtcbiAgICBsZXQgdHlwZSA9IGNvbGxhcHNlZCA/ICd1bmZvbGQnIDogJ2ZvbGQnO1xuICAgIGlmICh0aGlzLnNldHRpbmdzLmxheW91dC5kaXJlY3Rpb24gPT09ICdydGwnKSB7XG4gICAgICB0eXBlID0gY29sbGFwc2VkID8gJ2ZvbGQnIDogJ3VuZm9sZCc7XG4gICAgfVxuICAgIHJldHVybiBgbWVudS0ke3R5cGV9YDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2V0dGluZ3M6IFNldHRpbmdzU2VydmljZSkge31cblxuICAvKipcbiAgICogU2V0IGxheW91dCBjb25maWd1cmF0aW9uXG4gICAqXG4gICAqIOiuvue9ruW4g+WxgOmFjee9rlxuICAgKi9cbiAgc2V0T3B0aW9ucyhvcHRpb25zPzogTGF5b3V0RGVmYXVsdE9wdGlvbnMgfCBudWxsKTogdm9pZCB7XG4gICAgdGhpcy5fb3B0aW9ucyA9IHtcbiAgICAgIGxvZ29FeHBhbmRlZDogYC4vYXNzZXRzL2xvZ28tZnVsbC5zdmdgLFxuICAgICAgbG9nb0NvbGxhcHNlZDogYC4vYXNzZXRzL2xvZ28uc3ZnYCxcbiAgICAgIGxvZ29MaW5rOiBgL2AsXG4gICAgICBzaG93SGVhZGVyQ29sbGFwc2U6IHRydWUsXG4gICAgICBoaWRlQXNpZGU6IGZhbHNlLFxuICAgICAgLi4ub3B0aW9uc1xuICAgIH07XG4gICAgdGhpcy5fb3B0aW9ucyQubmV4dCh0aGlzLl9vcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGUgdGhlIGNvbGxhcHNlZCBzdGF0ZSBvZiB0aGUgc2lkZWJhciBtZW51IGJhclxuICAgKlxuICAgKiDliIfmjaLkvqfovrnmoI/oj5zljZXmoI/mipjlj6DnirbmgIFcbiAgICovXG4gIHRvZ2dsZUNvbGxhcHNlZChzdGF0dXM/OiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5zZXR0aW5ncy5zZXRMYXlvdXQoJ2NvbGxhcHNlZCcsIHN0YXR1cyA/PyAhdGhpcy5zZXR0aW5ncy5sYXlvdXQuY29sbGFwc2VkKTtcbiAgfVxufVxuIl19