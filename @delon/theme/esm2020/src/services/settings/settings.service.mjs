import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/platform";
export const ALAIN_SETTING_KEYS = new InjectionToken('ALAIN_SETTING_KEYS');
export class SettingsService {
    constructor(platform, KEYS) {
        this.platform = platform;
        this.KEYS = KEYS;
        this.notify$ = new Subject();
        this._app = null;
        this._user = null;
        this._layout = null;
    }
    getData(key) {
        if (!this.platform.isBrowser) {
            return null;
        }
        return JSON.parse(localStorage.getItem(key) || 'null') || null;
    }
    setData(key, value) {
        if (!this.platform.isBrowser) {
            return;
        }
        localStorage.setItem(key, JSON.stringify(value));
    }
    get layout() {
        if (!this._layout) {
            this._layout = {
                fixed: true,
                collapsed: false,
                boxed: false,
                lang: null,
                ...this.getData(this.KEYS.layout)
            };
            this.setData(this.KEYS.layout, this._layout);
        }
        return this._layout;
    }
    get app() {
        if (!this._app) {
            this._app = {
                year: new Date().getFullYear(),
                ...this.getData(this.KEYS.app)
            };
            this.setData(this.KEYS.app, this._app);
        }
        return this._app;
    }
    get user() {
        if (!this._user) {
            this._user = { ...this.getData(this.KEYS.user) };
            this.setData(this.KEYS.user, this._user);
        }
        return this._user;
    }
    get notify() {
        return this.notify$.asObservable();
    }
    setLayout(name, value) {
        if (typeof name === 'string') {
            this.layout[name] = value;
        }
        else {
            this._layout = name;
        }
        this.setData(this.KEYS.layout, this._layout);
        this.notify$.next({ type: 'layout', name, value });
        return true;
    }
    getLayout() {
        return this._layout;
    }
    setApp(value) {
        this._app = value;
        this.setData(this.KEYS.app, value);
        this.notify$.next({ type: 'app', value });
    }
    getApp() {
        return this._app;
    }
    setUser(value) {
        this._user = value;
        this.setData(this.KEYS.user, value);
        this.notify$.next({ type: 'user', value });
    }
    getUser() {
        return this._user;
    }
}
SettingsService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.5", ngImport: i0, type: SettingsService, deps: [{ token: i1.Platform }, { token: ALAIN_SETTING_KEYS }], target: i0.ɵɵFactoryTarget.Injectable });
SettingsService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.1.5", ngImport: i0, type: SettingsService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.5", ngImport: i0, type: SettingsService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: i1.Platform }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [ALAIN_SETTING_KEYS]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lL3NyYy9zZXJ2aWNlcy9zZXR0aW5ncy9zZXR0aW5ncy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRSxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7QUFlM0MsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQUcsSUFBSSxjQUFjLENBQWUsb0JBQW9CLENBQUMsQ0FBQztBQUd6RixNQUFNLE9BQU8sZUFBZTtJQU0xQixZQUFvQixRQUFrQixFQUFzQyxJQUFrQjtRQUExRSxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQXNDLFNBQUksR0FBSixJQUFJLENBQWM7UUFMdEYsWUFBTyxHQUFHLElBQUksT0FBTyxFQUFrQixDQUFDO1FBQ3hDLFNBQUksR0FBYSxJQUFJLENBQUM7UUFDdEIsVUFBSyxHQUFhLElBQUksQ0FBQztRQUN2QixZQUFPLEdBQWEsSUFBSSxDQUFDO0lBRWdFLENBQUM7SUFFbEcsT0FBTyxDQUFDLEdBQVc7UUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFO1lBQzVCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUM7SUFDakUsQ0FBQztJQUVELE9BQU8sQ0FBQyxHQUFXLEVBQUUsS0FBZ0I7UUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFO1lBQzVCLE9BQU87U0FDUjtRQUNELFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksQ0FB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QUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUNELE9BQU87UUFDTCxPQUFPLElBQUksQ0FBQyxLQUFxQixDQUFDO0lBQ3BDLENBQUM7OzRHQS9GVSxlQUFlLDBDQU1zQixrQkFBa0I7Z0hBTnZELGVBQWUsY0FERixNQUFNOzJGQUNuQixlQUFlO2tCQUQzQixVQUFVO21CQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7MEJBT1MsTUFBTTsyQkFBQyxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuaW1wb3J0IHsgQXBwLCBMYXlvdXQsIFNldHRpbmdzTm90aWZ5LCBVc2VyIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2V0dGluZ3NLZXlzIHtcbiAgLyoqIExheW91dCBkYXRhIHNwZWNpZmllcyB0aGUgc3RvcmVkIGtleSwgIGRlZmF1bHQ6IGBsYXlvdXRgICovXG4gIGxheW91dDogc3RyaW5nO1xuICAvKiogVXNlciBkYXRhIHNwZWNpZmllcyB0aGUgc3RvcmVkIGtleSwgIGRlZmF1bHQ6IGB1c2VyYCAqL1xuICB1c2VyOiBzdHJpbmc7XG4gIC8qKiBBcHAgZGF0YSBzcGVjaWZpZXMgdGhlIHN0b3JlZCBrZXksICBkZWZhdWx0OiBgYXBwYCAqL1xuICBhcHA6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IEFMQUlOX1NFVFRJTkdfS0VZUyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxTZXR0aW5nc0tleXM+KCdBTEFJTl9TRVRUSU5HX0tFWVMnKTtcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBTZXR0aW5nc1NlcnZpY2U8TCBleHRlbmRzIExheW91dCA9IExheW91dCwgVSBleHRlbmRzIFVzZXIgPSBVc2VyLCBBIGV4dGVuZHMgQXBwID0gQXBwPiB7XG4gIHByaXZhdGUgbm90aWZ5JCA9IG5ldyBTdWJqZWN0PFNldHRpbmdzTm90aWZ5PigpO1xuICBwcml2YXRlIF9hcHA6IEEgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBfdXNlcjogVSB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIF9sYXlvdXQ6IEwgfCBudWxsID0gbnVsbDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSwgQEluamVjdChBTEFJTl9TRVRUSU5HX0tFWVMpIHByaXZhdGUgS0VZUzogU2V0dGluZ3NLZXlzKSB7fVxuXG4gIGdldERhdGEoa2V5OiBzdHJpbmcpOiBOelNhZmVBbnkge1xuICAgIGlmICghdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpIHx8ICdudWxsJykgfHwgbnVsbDtcbiAgfVxuXG4gIHNldERhdGEoa2V5OiBzdHJpbmcsIHZhbHVlOiBOelNhZmVBbnkpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgfVxuXG4gIGdldCBsYXlvdXQoKTogTCB7XG4gICAgaWYgKCF0aGlzLl9sYXlvdXQpIHtcbiAgICAgIHRoaXMuX2xheW91dCA9IHtcbiAgICAgICAgZml4ZWQ6IHRydWUsXG4gICAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICAgIGJveGVkOiBmYWxzZSxcbiAgICAgICAgbGFuZzogbnVsbCxcbiAgICAgICAgLi4udGhpcy5nZXREYXRhKHRoaXMuS0VZUy5sYXlvdXQpXG4gICAgICB9O1xuICAgICAgdGhpcy5zZXREYXRhKHRoaXMuS0VZUy5sYXlvdXQsIHRoaXMuX2xheW91dCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9sYXlvdXQgYXMgTDtcbiAgfVxuXG4gIGdldCBhcHAoKTogQSB7XG4gICAgaWYgKCF0aGlzLl9hcHApIHtcbiAgICAgIHRoaXMuX2FwcCA9IHtcbiAgICAgICAgeWVhcjogbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLFxuICAgICAgICAuLi50aGlzLmdldERhdGEodGhpcy5LRVlTLmFwcClcbiAgICAgIH07XG4gICAgICB0aGlzLnNldERhdGEodGhpcy5LRVlTLmFwcCwgdGhpcy5fYXBwKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2FwcCBhcyBBO1xuICB9XG5cbiAgZ2V0IHVzZXIoKTogVSB7XG4gICAgaWYgKCF0aGlzLl91c2VyKSB7XG4gICAgICB0aGlzLl91c2VyID0geyAuLi50aGlzLmdldERhdGEodGhpcy5LRVlTLnVzZXIpIH07XG4gICAgICB0aGlzLnNldERhdGEodGhpcy5LRVlTLnVzZXIsIHRoaXMuX3VzZXIpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fdXNlciBhcyBVO1xuICB9XG5cbiAgZ2V0IG5vdGlmeSgpOiBPYnNlcnZhYmxlPFNldHRpbmdzTm90aWZ5PiB7XG4gICAgcmV0dXJuIHRoaXMubm90aWZ5JC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIHNldExheW91dDxUIGV4dGVuZHMgTGF5b3V0ID0gTGF5b3V0PihuYW1lOiBULCB2YWx1ZT86IE56U2FmZUFueSk6IGJvb2xlYW47XG4gIHNldExheW91dChuYW1lOiBzdHJpbmcgfCBMLCB2YWx1ZT86IE56U2FmZUFueSk6IGJvb2xlYW47XG4gIHNldExheW91dChuYW1lOiBzdHJpbmcgfCBMLCB2YWx1ZT86IE56U2FmZUFueSk6IGJvb2xlYW4ge1xuICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICh0aGlzLmxheW91dCBhcyBMYXlvdXQpW25hbWVdID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2xheW91dCA9IG5hbWU7XG4gICAgfVxuICAgIHRoaXMuc2V0RGF0YSh0aGlzLktFWVMubGF5b3V0LCB0aGlzLl9sYXlvdXQpO1xuICAgIHRoaXMubm90aWZ5JC5uZXh0KHsgdHlwZTogJ2xheW91dCcsIG5hbWUsIHZhbHVlIH0gYXMgTnpTYWZlQW55KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBnZXRMYXlvdXQ8VD4oKTogVCB7XG4gICAgcmV0dXJuIHRoaXMuX2xheW91dCBhcyB1bmtub3duIGFzIFQ7XG4gIH1cblxuICBzZXRBcHA8VCBleHRlbmRzIEFwcCA9IEFwcD4odmFsdWU6IFQpOiB2b2lkO1xuICBzZXRBcHAodmFsdWU6IEEpOiB2b2lkO1xuICBzZXRBcHAodmFsdWU6IEEpOiB2b2lkIHtcbiAgICB0aGlzLl9hcHAgPSB2YWx1ZTtcbiAgICB0aGlzLnNldERhdGEodGhpcy5LRVlTLmFwcCwgdmFsdWUpO1xuICAgIHRoaXMubm90aWZ5JC5uZXh0KHsgdHlwZTogJ2FwcCcsIHZhbHVlIH0pO1xuICB9XG4gIGdldEFwcDxUPigpOiBUIHtcbiAgICByZXR1cm4gdGhpcy5fYXBwIGFzIHVua25vd24gYXMgVDtcbiAgfVxuXG4gIHNldFVzZXI8VCBleHRlbmRzIFVzZXIgPSBVc2VyPih2YWx1ZTogVCk6IHZvaWQ7XG4gIHNldFVzZXIodmFsdWU6IFUpOiB2b2lkO1xuICBzZXRVc2VyKHZhbHVlOiBVKTogdm9pZCB7XG4gICAgdGhpcy5fdXNlciA9IHZhbHVlO1xuICAgIHRoaXMuc2V0RGF0YSh0aGlzLktFWVMudXNlciwgdmFsdWUpO1xuICAgIHRoaXMubm90aWZ5JC5uZXh0KHsgdHlwZTogJ3VzZXInLCB2YWx1ZSB9KTtcbiAgfVxuICBnZXRVc2VyPFQ+KCk6IFQge1xuICAgIHJldHVybiB0aGlzLl91c2VyIGFzIHVua25vd24gYXMgVDtcbiAgfVxufVxuIl19