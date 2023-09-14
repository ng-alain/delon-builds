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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.5", ngImport: i0, type: SettingsService, deps: [{ token: i1.Platform }, { token: ALAIN_SETTING_KEYS }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.5", ngImport: i0, type: SettingsService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.5", ngImport: i0, type: SettingsService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: i1.Platform }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [ALAIN_SETTING_KEYS]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lL3NyYy9zZXJ2aWNlcy9zZXR0aW5ncy9zZXR0aW5ncy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRSxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7QUFlM0MsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQUcsSUFBSSxjQUFjLENBQWUsb0JBQW9CLENBQUMsQ0FBQztBQUd6RixNQUFNLE9BQU8sZUFBZTtJQU0xQixZQUNVLFFBQWtCLEVBQ1UsSUFBa0I7UUFEOUMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNVLFNBQUksR0FBSixJQUFJLENBQWM7UUFQaEQsWUFBTyxHQUFHLElBQUksT0FBTyxFQUFrQixDQUFDO1FBQ3hDLFNBQUksR0FBYSxJQUFJLENBQUM7UUFDdEIsVUFBSyxHQUFhLElBQUksQ0FBQztRQUN2QixZQUFPLEdBQWEsSUFBSSxDQUFDO0lBSzlCLENBQUM7SUFFSixPQUFPLENBQUMsR0FBVztRQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDNUIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQztJQUNqRSxDQUFDO0lBRUQsT0FBTyxDQUFDLEdBQVcsRUFBRSxLQUFnQjtRQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDNUIsT0FBTztTQUNSO1FBQ0QsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxJQUFJLE1BQU07UUFDUixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHO2dCQUNiLEtBQUssRUFBRSxJQUFJO2dCQUNYLFNBQVMsRUFBRSxLQUFLO2dCQUNoQixLQUFLLEVBQUUsS0FBSztnQkFDWixJQUFJLEVBQUUsSUFBSTtnQkFDVixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7YUFDbEMsQ0FBQztZQUNGLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzlDO1FBQ0QsT0FBTyxJQUFJLENBQUMsT0FBWSxDQUFDO0lBQzNCLENBQUM7SUFFRCxJQUFJLEdBQUc7UUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNkLElBQUksQ0FBQyxJQUFJLEdBQUc7Z0JBQ1YsSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFO2dCQUM5QixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7YUFDL0IsQ0FBQztZQUNGLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3hDO1FBQ0QsT0FBTyxJQUFJLENBQUMsSUFBUyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxJQUFJLElBQUk7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQ2pELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzFDO1FBQ0QsT0FBTyxJQUFJLENBQUMsS0FBVSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUlELFNBQVMsQ0FBQyxJQUFnQixFQUFFLEtBQWlCO1FBQzNDLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQzNCLElBQUksQ0FBQyxNQUFpQixDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQztTQUN2QzthQUFNO1lBQ0wsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7U0FDckI7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBZSxDQUFDLENBQUM7UUFDaEUsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ0QsU0FBUztRQUNQLE9BQU8sSUFBSSxDQUFDLE9BQXVCLENBQUM7SUFDdEMsQ0FBQztJQUlELE1BQU0sQ0FBQyxLQUFRO1FBQ2IsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBQ0QsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLElBQW9CLENBQUM7SUFDbkMsQ0FBQztJQUlELE9BQU8sQ0FBQyxLQUFRO1FBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0QsT0FBTztRQUNMLE9BQU8sSUFBSSxDQUFDLEtBQXFCLENBQUM7SUFDcEMsQ0FBQzs4R0FsR1UsZUFBZSwwQ0FRaEIsa0JBQWtCO2tIQVJqQixlQUFlLGNBREYsTUFBTTs7MkZBQ25CLGVBQWU7a0JBRDNCLFVBQVU7bUJBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzswQkFTN0IsTUFBTTsyQkFBQyxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuaW1wb3J0IHsgQXBwLCBMYXlvdXQsIFNldHRpbmdzTm90aWZ5LCBVc2VyIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2V0dGluZ3NLZXlzIHtcbiAgLyoqIExheW91dCBkYXRhIHNwZWNpZmllcyB0aGUgc3RvcmVkIGtleSwgIGRlZmF1bHQ6IGBsYXlvdXRgICovXG4gIGxheW91dDogc3RyaW5nO1xuICAvKiogVXNlciBkYXRhIHNwZWNpZmllcyB0aGUgc3RvcmVkIGtleSwgIGRlZmF1bHQ6IGB1c2VyYCAqL1xuICB1c2VyOiBzdHJpbmc7XG4gIC8qKiBBcHAgZGF0YSBzcGVjaWZpZXMgdGhlIHN0b3JlZCBrZXksICBkZWZhdWx0OiBgYXBwYCAqL1xuICBhcHA6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IEFMQUlOX1NFVFRJTkdfS0VZUyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxTZXR0aW5nc0tleXM+KCdBTEFJTl9TRVRUSU5HX0tFWVMnKTtcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBTZXR0aW5nc1NlcnZpY2U8TCBleHRlbmRzIExheW91dCA9IExheW91dCwgVSBleHRlbmRzIFVzZXIgPSBVc2VyLCBBIGV4dGVuZHMgQXBwID0gQXBwPiB7XG4gIHByaXZhdGUgbm90aWZ5JCA9IG5ldyBTdWJqZWN0PFNldHRpbmdzTm90aWZ5PigpO1xuICBwcml2YXRlIF9hcHA6IEEgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBfdXNlcjogVSB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIF9sYXlvdXQ6IEwgfCBudWxsID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgICBASW5qZWN0KEFMQUlOX1NFVFRJTkdfS0VZUykgcHJpdmF0ZSBLRVlTOiBTZXR0aW5nc0tleXNcbiAgKSB7fVxuXG4gIGdldERhdGEoa2V5OiBzdHJpbmcpOiBOelNhZmVBbnkge1xuICAgIGlmICghdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpIHx8ICdudWxsJykgfHwgbnVsbDtcbiAgfVxuXG4gIHNldERhdGEoa2V5OiBzdHJpbmcsIHZhbHVlOiBOelNhZmVBbnkpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgfVxuXG4gIGdldCBsYXlvdXQoKTogTCB7XG4gICAgaWYgKCF0aGlzLl9sYXlvdXQpIHtcbiAgICAgIHRoaXMuX2xheW91dCA9IHtcbiAgICAgICAgZml4ZWQ6IHRydWUsXG4gICAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICAgIGJveGVkOiBmYWxzZSxcbiAgICAgICAgbGFuZzogbnVsbCxcbiAgICAgICAgLi4udGhpcy5nZXREYXRhKHRoaXMuS0VZUy5sYXlvdXQpXG4gICAgICB9O1xuICAgICAgdGhpcy5zZXREYXRhKHRoaXMuS0VZUy5sYXlvdXQsIHRoaXMuX2xheW91dCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9sYXlvdXQgYXMgTDtcbiAgfVxuXG4gIGdldCBhcHAoKTogQSB7XG4gICAgaWYgKCF0aGlzLl9hcHApIHtcbiAgICAgIHRoaXMuX2FwcCA9IHtcbiAgICAgICAgeWVhcjogbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLFxuICAgICAgICAuLi50aGlzLmdldERhdGEodGhpcy5LRVlTLmFwcClcbiAgICAgIH07XG4gICAgICB0aGlzLnNldERhdGEodGhpcy5LRVlTLmFwcCwgdGhpcy5fYXBwKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2FwcCBhcyBBO1xuICB9XG5cbiAgZ2V0IHVzZXIoKTogVSB7XG4gICAgaWYgKCF0aGlzLl91c2VyKSB7XG4gICAgICB0aGlzLl91c2VyID0geyAuLi50aGlzLmdldERhdGEodGhpcy5LRVlTLnVzZXIpIH07XG4gICAgICB0aGlzLnNldERhdGEodGhpcy5LRVlTLnVzZXIsIHRoaXMuX3VzZXIpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fdXNlciBhcyBVO1xuICB9XG5cbiAgZ2V0IG5vdGlmeSgpOiBPYnNlcnZhYmxlPFNldHRpbmdzTm90aWZ5PiB7XG4gICAgcmV0dXJuIHRoaXMubm90aWZ5JC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIHNldExheW91dDxUIGV4dGVuZHMgTGF5b3V0ID0gTGF5b3V0PihuYW1lOiBULCB2YWx1ZT86IE56U2FmZUFueSk6IGJvb2xlYW47XG4gIHNldExheW91dChuYW1lOiBzdHJpbmcgfCBMLCB2YWx1ZT86IE56U2FmZUFueSk6IGJvb2xlYW47XG4gIHNldExheW91dChuYW1lOiBzdHJpbmcgfCBMLCB2YWx1ZT86IE56U2FmZUFueSk6IGJvb2xlYW4ge1xuICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICh0aGlzLmxheW91dCBhcyBMYXlvdXQpW25hbWVdID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2xheW91dCA9IG5hbWU7XG4gICAgfVxuICAgIHRoaXMuc2V0RGF0YSh0aGlzLktFWVMubGF5b3V0LCB0aGlzLl9sYXlvdXQpO1xuICAgIHRoaXMubm90aWZ5JC5uZXh0KHsgdHlwZTogJ2xheW91dCcsIG5hbWUsIHZhbHVlIH0gYXMgTnpTYWZlQW55KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBnZXRMYXlvdXQ8VD4oKTogVCB7XG4gICAgcmV0dXJuIHRoaXMuX2xheW91dCBhcyB1bmtub3duIGFzIFQ7XG4gIH1cblxuICBzZXRBcHA8VCBleHRlbmRzIEFwcCA9IEFwcD4odmFsdWU6IFQpOiB2b2lkO1xuICBzZXRBcHAodmFsdWU6IEEpOiB2b2lkO1xuICBzZXRBcHAodmFsdWU6IEEpOiB2b2lkIHtcbiAgICB0aGlzLl9hcHAgPSB2YWx1ZTtcbiAgICB0aGlzLnNldERhdGEodGhpcy5LRVlTLmFwcCwgdmFsdWUpO1xuICAgIHRoaXMubm90aWZ5JC5uZXh0KHsgdHlwZTogJ2FwcCcsIHZhbHVlIH0pO1xuICB9XG4gIGdldEFwcDxUPigpOiBUIHtcbiAgICByZXR1cm4gdGhpcy5fYXBwIGFzIHVua25vd24gYXMgVDtcbiAgfVxuXG4gIHNldFVzZXI8VCBleHRlbmRzIFVzZXIgPSBVc2VyPih2YWx1ZTogVCk6IHZvaWQ7XG4gIHNldFVzZXIodmFsdWU6IFUpOiB2b2lkO1xuICBzZXRVc2VyKHZhbHVlOiBVKTogdm9pZCB7XG4gICAgdGhpcy5fdXNlciA9IHZhbHVlO1xuICAgIHRoaXMuc2V0RGF0YSh0aGlzLktFWVMudXNlciwgdmFsdWUpO1xuICAgIHRoaXMubm90aWZ5JC5uZXh0KHsgdHlwZTogJ3VzZXInLCB2YWx1ZSB9KTtcbiAgfVxuICBnZXRVc2VyPFQ+KCk6IFQge1xuICAgIHJldHVybiB0aGlzLl91c2VyIGFzIHVua25vd24gYXMgVDtcbiAgfVxufVxuIl19