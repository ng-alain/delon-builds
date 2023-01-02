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
    constructor(settings) {
        this.settings = settings;
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
}
LayoutDefaultService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: LayoutDefaultService, deps: [{ token: i1.SettingsService }], target: i0.ɵɵFactoryTarget.Injectable });
LayoutDefaultService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: LayoutDefaultService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.4", ngImport: i0, type: LayoutDefaultService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: i1.SettingsService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS9sYXlvdXQtZGVmYXVsdC9sYXlvdXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7OztBQU1uRCxNQUFNLE9BQU8sR0FBeUI7SUFDcEMsWUFBWSxFQUFFLHdCQUF3QjtJQUN0QyxhQUFhLEVBQUUsbUJBQW1CO0lBQ2xDLFFBQVEsRUFBRSxHQUFHO0lBQ2Isa0JBQWtCLEVBQUUsSUFBSTtJQUN4QixpQkFBaUIsRUFBRSxLQUFLO0lBQ3hCLFNBQVMsRUFBRSxLQUFLO0lBQ2hCLFVBQVUsRUFBRSxLQUFLO0NBQ2xCLENBQUM7QUFHRixNQUFNLE9BQU8sb0JBQW9CO0lBcUIvQixZQUFvQixRQUF5QjtRQUF6QixhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQXBCckMsY0FBUyxHQUFHLElBQUksZUFBZSxDQUF1QixPQUFPLENBQUMsQ0FBQztRQUMvRCxhQUFRLEdBQXlCLE9BQU8sQ0FBQztJQW1CRCxDQUFDO0lBakJqRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUVELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBRUQsSUFBSSxhQUFhO1FBQ2YsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ2pELElBQUksSUFBSSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDekMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEtBQUssS0FBSyxFQUFFO1lBQzVDLElBQUksR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1NBQ3RDO1FBQ0QsT0FBTyxRQUFRLElBQUksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFJTyxNQUFNO1FBQ1osSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsVUFBVSxDQUFDLE9BQXFDO1FBQzlDLElBQUksQ0FBQyxRQUFRLEdBQUc7WUFDZCxHQUFHLE9BQU87WUFDVixHQUFHLE9BQU87U0FDWCxDQUFDO1FBQ0YsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsZUFBZSxDQUFDLE1BQWdCO1FBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxNQUFNLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDaEcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7O2lIQWhEVSxvQkFBb0I7cUhBQXBCLG9CQUFvQixjQURQLE1BQU07MkZBQ25CLG9CQUFvQjtrQkFEaEMsVUFBVTttQkFBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgU2V0dGluZ3NTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcblxuaW1wb3J0IHsgTGF5b3V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tICcuL3R5cGVzJztcblxuY29uc3QgREVGQVVMVDogTGF5b3V0RGVmYXVsdE9wdGlvbnMgPSB7XG4gIGxvZ29FeHBhbmRlZDogYC4vYXNzZXRzL2xvZ28tZnVsbC5zdmdgLFxuICBsb2dvQ29sbGFwc2VkOiBgLi9hc3NldHMvbG9nby5zdmdgLFxuICBsb2dvTGluazogYC9gLFxuICBzaG93SGVhZGVyQ29sbGFwc2U6IHRydWUsXG4gIHNob3dTaWRlckNvbGxhcHNlOiBmYWxzZSxcbiAgaGlkZUFzaWRlOiBmYWxzZSxcbiAgaGlkZUhlYWRlcjogZmFsc2Vcbn07XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgTGF5b3V0RGVmYXVsdFNlcnZpY2Uge1xuICBwcml2YXRlIF9vcHRpb25zJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TGF5b3V0RGVmYXVsdE9wdGlvbnM+KERFRkFVTFQpO1xuICBwcml2YXRlIF9vcHRpb25zOiBMYXlvdXREZWZhdWx0T3B0aW9ucyA9IERFRkFVTFQ7XG5cbiAgZ2V0IG9wdGlvbnMoKTogTGF5b3V0RGVmYXVsdE9wdGlvbnMge1xuICAgIHJldHVybiB0aGlzLl9vcHRpb25zO1xuICB9XG5cbiAgZ2V0IG9wdGlvbnMkKCk6IE9ic2VydmFibGU8TGF5b3V0RGVmYXVsdE9wdGlvbnM+IHtcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9ucyQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBnZXQgY29sbGFwc2VkSWNvbigpOiBzdHJpbmcge1xuICAgIGNvbnN0IGNvbGxhcHNlZCA9IHRoaXMuc2V0dGluZ3MubGF5b3V0LmNvbGxhcHNlZDtcbiAgICBsZXQgdHlwZSA9IGNvbGxhcHNlZCA/ICd1bmZvbGQnIDogJ2ZvbGQnO1xuICAgIGlmICh0aGlzLnNldHRpbmdzLmxheW91dC5kaXJlY3Rpb24gPT09ICdydGwnKSB7XG4gICAgICB0eXBlID0gY29sbGFwc2VkID8gJ2ZvbGQnIDogJ3VuZm9sZCc7XG4gICAgfVxuICAgIHJldHVybiBgbWVudS0ke3R5cGV9YDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2V0dGluZ3M6IFNldHRpbmdzU2VydmljZSkge31cblxuICBwcml2YXRlIG5vdGlmeSgpOiB2b2lkIHtcbiAgICB0aGlzLl9vcHRpb25zJC5uZXh0KHRoaXMuX29wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBsYXlvdXQgY29uZmlndXJhdGlvblxuICAgKlxuICAgKiDorr7nva7luIPlsYDphY3nva5cbiAgICovXG4gIHNldE9wdGlvbnMob3B0aW9ucz86IExheW91dERlZmF1bHRPcHRpb25zIHwgbnVsbCk6IHZvaWQge1xuICAgIHRoaXMuX29wdGlvbnMgPSB7XG4gICAgICAuLi5ERUZBVUxULFxuICAgICAgLi4ub3B0aW9uc1xuICAgIH07XG4gICAgdGhpcy5ub3RpZnkoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGUgdGhlIGNvbGxhcHNlZCBzdGF0ZSBvZiB0aGUgc2lkZWJhciBtZW51IGJhclxuICAgKlxuICAgKiDliIfmjaLkvqfovrnmoI/oj5zljZXmoI/mipjlj6DnirbmgIFcbiAgICovXG4gIHRvZ2dsZUNvbGxhcHNlZChzdGF0dXM/OiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5zZXR0aW5ncy5zZXRMYXlvdXQoJ2NvbGxhcHNlZCcsIHN0YXR1cyAhPSBudWxsID8gc3RhdHVzIDogIXRoaXMuc2V0dGluZ3MubGF5b3V0LmNvbGxhcHNlZCk7XG4gICAgdGhpcy5ub3RpZnkoKTtcbiAgfVxufVxuIl19