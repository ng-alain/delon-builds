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
}
LayoutDefaultService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.5", ngImport: i0, type: LayoutDefaultService, deps: [{ token: i1.SettingsService }], target: i0.ɵɵFactoryTarget.Injectable });
LayoutDefaultService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.1.5", ngImport: i0, type: LayoutDefaultService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.5", ngImport: i0, type: LayoutDefaultService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: i1.SettingsService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS9sYXlvdXQtZGVmYXVsdC9sYXlvdXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7OztBQU1uRCxNQUFNLE9BQU8sR0FBeUI7SUFDcEMsWUFBWSxFQUFFLHdCQUF3QjtJQUN0QyxhQUFhLEVBQUUsbUJBQW1CO0lBQ2xDLFFBQVEsRUFBRSxHQUFHO0lBQ2Isa0JBQWtCLEVBQUUsSUFBSTtJQUN4QixpQkFBaUIsRUFBRSxLQUFLO0lBQ3hCLFNBQVMsRUFBRSxLQUFLO0lBQ2hCLFVBQVUsRUFBRSxLQUFLO0NBQ2xCLENBQUM7QUFHRixNQUFNLE9BQU8sb0JBQW9CO0lBSS9CLElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxJQUFJLGFBQWE7UUFDZixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDakQsSUFBSSxJQUFJLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUN6QyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFNBQVMsS0FBSyxLQUFLLEVBQUU7WUFDNUMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7U0FDdEM7UUFDRCxPQUFPLFFBQVEsSUFBSSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELFlBQW9CLFFBQXlCO1FBQXpCLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBcEJyQyxjQUFTLEdBQUcsSUFBSSxlQUFlLENBQXVCLE9BQU8sQ0FBQyxDQUFDO1FBQy9ELGFBQVEsR0FBeUIsT0FBTyxDQUFDO0lBbUJELENBQUM7SUFFekMsTUFBTTtRQUNaLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILFVBQVUsQ0FBQyxPQUFxQztRQUM5QyxJQUFJLENBQUMsUUFBUSxHQUFHO1lBQ2QsR0FBRyxPQUFPO1lBQ1YsR0FBRyxPQUFPO1NBQ1gsQ0FBQztRQUNGLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGVBQWUsQ0FBQyxNQUFnQjtRQUM5QixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsTUFBTSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2hHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDOztpSEFoRFUsb0JBQW9CO3FIQUFwQixvQkFBb0IsY0FEUCxNQUFNOzJGQUNuQixvQkFBb0I7a0JBRGhDLFVBQVU7bUJBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFNldHRpbmdzU2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5cbmltcG9ydCB7IExheW91dERlZmF1bHRPcHRpb25zIH0gZnJvbSAnLi90eXBlcyc7XG5cbmNvbnN0IERFRkFVTFQ6IExheW91dERlZmF1bHRPcHRpb25zID0ge1xuICBsb2dvRXhwYW5kZWQ6IGAuL2Fzc2V0cy9sb2dvLWZ1bGwuc3ZnYCxcbiAgbG9nb0NvbGxhcHNlZDogYC4vYXNzZXRzL2xvZ28uc3ZnYCxcbiAgbG9nb0xpbms6IGAvYCxcbiAgc2hvd0hlYWRlckNvbGxhcHNlOiB0cnVlLFxuICBzaG93U2lkZXJDb2xsYXBzZTogZmFsc2UsXG4gIGhpZGVBc2lkZTogZmFsc2UsXG4gIGhpZGVIZWFkZXI6IGZhbHNlXG59O1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIExheW91dERlZmF1bHRTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfb3B0aW9ucyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PExheW91dERlZmF1bHRPcHRpb25zPihERUZBVUxUKTtcbiAgcHJpdmF0ZSBfb3B0aW9uczogTGF5b3V0RGVmYXVsdE9wdGlvbnMgPSBERUZBVUxUO1xuXG4gIGdldCBvcHRpb25zKCk6IExheW91dERlZmF1bHRPcHRpb25zIHtcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9ucztcbiAgfVxuXG4gIGdldCBvcHRpb25zJCgpOiBPYnNlcnZhYmxlPExheW91dERlZmF1bHRPcHRpb25zPiB7XG4gICAgcmV0dXJuIHRoaXMuX29wdGlvbnMkLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgZ2V0IGNvbGxhcHNlZEljb24oKTogc3RyaW5nIHtcbiAgICBjb25zdCBjb2xsYXBzZWQgPSB0aGlzLnNldHRpbmdzLmxheW91dC5jb2xsYXBzZWQ7XG4gICAgbGV0IHR5cGUgPSBjb2xsYXBzZWQgPyAndW5mb2xkJyA6ICdmb2xkJztcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5sYXlvdXQuZGlyZWN0aW9uID09PSAncnRsJykge1xuICAgICAgdHlwZSA9IGNvbGxhcHNlZCA/ICdmb2xkJyA6ICd1bmZvbGQnO1xuICAgIH1cbiAgICByZXR1cm4gYG1lbnUtJHt0eXBlfWA7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNldHRpbmdzOiBTZXR0aW5nc1NlcnZpY2UpIHt9XG5cbiAgcHJpdmF0ZSBub3RpZnkoKTogdm9pZCB7XG4gICAgdGhpcy5fb3B0aW9ucyQubmV4dCh0aGlzLl9vcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgbGF5b3V0IGNvbmZpZ3VyYXRpb25cbiAgICpcbiAgICog6K6+572u5biD5bGA6YWN572uXG4gICAqL1xuICBzZXRPcHRpb25zKG9wdGlvbnM/OiBMYXlvdXREZWZhdWx0T3B0aW9ucyB8IG51bGwpOiB2b2lkIHtcbiAgICB0aGlzLl9vcHRpb25zID0ge1xuICAgICAgLi4uREVGQVVMVCxcbiAgICAgIC4uLm9wdGlvbnNcbiAgICB9O1xuICAgIHRoaXMubm90aWZ5KCk7XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlIHRoZSBjb2xsYXBzZWQgc3RhdGUgb2YgdGhlIHNpZGViYXIgbWVudSBiYXJcbiAgICpcbiAgICog5YiH5o2i5L6n6L655qCP6I+c5Y2V5qCP5oqY5Y+g54q25oCBXG4gICAqL1xuICB0b2dnbGVDb2xsYXBzZWQoc3RhdHVzPzogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuc2V0dGluZ3Muc2V0TGF5b3V0KCdjb2xsYXBzZWQnLCBzdGF0dXMgIT0gbnVsbCA/IHN0YXR1cyA6ICF0aGlzLnNldHRpbmdzLmxheW91dC5jb2xsYXBzZWQpO1xuICAgIHRoaXMubm90aWZ5KCk7XG4gIH1cbn1cbiJdfQ==