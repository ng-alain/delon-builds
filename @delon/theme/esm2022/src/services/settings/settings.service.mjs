import { Platform } from '@angular/cdk/platform';
import { Injectable, InjectionToken, inject } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export const ALAIN_SETTING_KEYS = new InjectionToken('ALAIN_SETTING_KEYS');
export const ALAIN_SETTING_DEFAULT = {
    provide: ALAIN_SETTING_KEYS,
    useValue: {
        layout: 'layout',
        user: 'user',
        app: 'app'
    }
};
export class SettingsService {
    constructor() {
        this.KEYS = inject(ALAIN_SETTING_KEYS);
        this.platform = inject(Platform);
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.11", ngImport: i0, type: SettingsService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.11", ngImport: i0, type: SettingsService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.11", ngImport: i0, type: SettingsService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lL3NyYy9zZXJ2aWNlcy9zZXR0aW5ncy9zZXR0aW5ncy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBWSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0UsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFlM0MsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQUcsSUFBSSxjQUFjLENBQWUsb0JBQW9CLENBQUMsQ0FBQztBQUN6RixNQUFNLENBQUMsTUFBTSxxQkFBcUIsR0FBYTtJQUM3QyxPQUFPLEVBQUUsa0JBQWtCO0lBQzNCLFFBQVEsRUFBRTtRQUNSLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLElBQUksRUFBRSxNQUFNO1FBQ1osR0FBRyxFQUFFLEtBQUs7S0FDWDtDQUNGLENBQUM7QUFHRixNQUFNLE9BQU8sZUFBZTtJQUQ1QjtRQUVtQixTQUFJLEdBQUcsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDbEMsYUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVyQyxZQUFPLEdBQUcsSUFBSSxPQUFPLEVBQWtCLENBQUM7UUFDeEMsU0FBSSxHQUFhLElBQUksQ0FBQztRQUN0QixVQUFLLEdBQWEsSUFBSSxDQUFDO1FBQ3ZCLFlBQU8sR0FBYSxJQUFJLENBQUM7S0EwRmxDO0lBeEZDLE9BQU8sQ0FBQyxHQUFXO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQzdCLE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQztRQUNELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZ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QUcsS0FBSyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUNELE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxJQUFvQixDQUFDO0lBQ25DLENBQUM7SUFJRCxPQUFPLENBQUMsS0FBUTtRQUNkLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUNELE9BQU87UUFDTCxPQUFPLElBQUksQ0FBQyxLQUFxQixDQUFDO0lBQ3BDLENBQUM7K0dBaEdVLGVBQWU7bUhBQWYsZUFBZSxjQURGLE1BQU07OzRGQUNuQixlQUFlO2tCQUQzQixVQUFVO21CQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7IEluamVjdGFibGUsIEluamVjdGlvblRva2VuLCBQcm92aWRlciwgaW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuaW1wb3J0IHsgQXBwLCBMYXlvdXQsIFNldHRpbmdzTm90aWZ5LCBVc2VyIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2V0dGluZ3NLZXlzIHtcbiAgLyoqIExheW91dCBkYXRhIHNwZWNpZmllcyB0aGUgc3RvcmVkIGtleSwgIGRlZmF1bHQ6IGBsYXlvdXRgICovXG4gIGxheW91dDogc3RyaW5nO1xuICAvKiogVXNlciBkYXRhIHNwZWNpZmllcyB0aGUgc3RvcmVkIGtleSwgIGRlZmF1bHQ6IGB1c2VyYCAqL1xuICB1c2VyOiBzdHJpbmc7XG4gIC8qKiBBcHAgZGF0YSBzcGVjaWZpZXMgdGhlIHN0b3JlZCBrZXksICBkZWZhdWx0OiBgYXBwYCAqL1xuICBhcHA6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IEFMQUlOX1NFVFRJTkdfS0VZUyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxTZXR0aW5nc0tleXM+KCdBTEFJTl9TRVRUSU5HX0tFWVMnKTtcbmV4cG9ydCBjb25zdCBBTEFJTl9TRVRUSU5HX0RFRkFVTFQ6IFByb3ZpZGVyID0ge1xuICBwcm92aWRlOiBBTEFJTl9TRVRUSU5HX0tFWVMsXG4gIHVzZVZhbHVlOiB7XG4gICAgbGF5b3V0OiAnbGF5b3V0JyxcbiAgICB1c2VyOiAndXNlcicsXG4gICAgYXBwOiAnYXBwJ1xuICB9XG59O1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFNldHRpbmdzU2VydmljZTxMIGV4dGVuZHMgTGF5b3V0ID0gTGF5b3V0LCBVIGV4dGVuZHMgVXNlciA9IFVzZXIsIEEgZXh0ZW5kcyBBcHAgPSBBcHA+IHtcbiAgcHJpdmF0ZSByZWFkb25seSBLRVlTID0gaW5qZWN0KEFMQUlOX1NFVFRJTkdfS0VZUyk7XG4gIHByaXZhdGUgcmVhZG9ubHkgcGxhdGZvcm0gPSBpbmplY3QoUGxhdGZvcm0pO1xuXG4gIHByaXZhdGUgbm90aWZ5JCA9IG5ldyBTdWJqZWN0PFNldHRpbmdzTm90aWZ5PigpO1xuICBwcml2YXRlIF9hcHA6IEEgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBfdXNlcjogVSB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIF9sYXlvdXQ6IEwgfCBudWxsID0gbnVsbDtcblxuICBnZXREYXRhKGtleTogc3RyaW5nKTogTnpTYWZlQW55IHtcbiAgICBpZiAoIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSB8fCAnbnVsbCcpIHx8IG51bGw7XG4gIH1cblxuICBzZXREYXRhKGtleTogc3RyaW5nLCB2YWx1ZTogTnpTYWZlQW55KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gIH1cblxuICBnZXQgbGF5b3V0KCk6IEwge1xuICAgIGlmICghdGhpcy5fbGF5b3V0KSB7XG4gICAgICB0aGlzLl9sYXlvdXQgPSB7XG4gICAgICAgIGZpeGVkOiB0cnVlLFxuICAgICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgICBib3hlZDogZmFsc2UsXG4gICAgICAgIGxhbmc6IG51bGwsXG4gICAgICAgIC4uLnRoaXMuZ2V0RGF0YSh0aGlzLktFWVMubGF5b3V0KVxuICAgICAgfTtcbiAgICAgIHRoaXMuc2V0RGF0YSh0aGlzLktFWVMubGF5b3V0LCB0aGlzLl9sYXlvdXQpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fbGF5b3V0IGFzIEw7XG4gIH1cblxuICBnZXQgYXBwKCk6IEEge1xuICAgIGlmICghdGhpcy5fYXBwKSB7XG4gICAgICB0aGlzLl9hcHAgPSB7XG4gICAgICAgIHllYXI6IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgLi4udGhpcy5nZXREYXRhKHRoaXMuS0VZUy5hcHApXG4gICAgICB9O1xuICAgICAgdGhpcy5zZXREYXRhKHRoaXMuS0VZUy5hcHAsIHRoaXMuX2FwcCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9hcHAgYXMgQTtcbiAgfVxuXG4gIGdldCB1c2VyKCk6IFUge1xuICAgIGlmICghdGhpcy5fdXNlcikge1xuICAgICAgdGhpcy5fdXNlciA9IHsgLi4udGhpcy5nZXREYXRhKHRoaXMuS0VZUy51c2VyKSB9O1xuICAgICAgdGhpcy5zZXREYXRhKHRoaXMuS0VZUy51c2VyLCB0aGlzLl91c2VyKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3VzZXIgYXMgVTtcbiAgfVxuXG4gIGdldCBub3RpZnkoKTogT2JzZXJ2YWJsZTxTZXR0aW5nc05vdGlmeT4ge1xuICAgIHJldHVybiB0aGlzLm5vdGlmeSQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBzZXRMYXlvdXQ8VCBleHRlbmRzIExheW91dCA9IExheW91dD4obmFtZTogVCwgdmFsdWU/OiBOelNhZmVBbnkpOiBib29sZWFuO1xuICBzZXRMYXlvdXQobmFtZTogc3RyaW5nIHwgTCwgdmFsdWU/OiBOelNhZmVBbnkpOiBib29sZWFuO1xuICBzZXRMYXlvdXQobmFtZTogc3RyaW5nIHwgTCwgdmFsdWU/OiBOelNhZmVBbnkpOiBib29sZWFuIHtcbiAgICBpZiAodHlwZW9mIG5hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAodGhpcy5sYXlvdXQgYXMgTGF5b3V0KVtuYW1lXSA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9sYXlvdXQgPSBuYW1lO1xuICAgIH1cbiAgICB0aGlzLnNldERhdGEodGhpcy5LRVlTLmxheW91dCwgdGhpcy5fbGF5b3V0KTtcbiAgICB0aGlzLm5vdGlmeSQubmV4dCh7IHR5cGU6ICdsYXlvdXQnLCBuYW1lLCB2YWx1ZSB9IGFzIE56U2FmZUFueSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgZ2V0TGF5b3V0PFQ+KCk6IFQge1xuICAgIHJldHVybiB0aGlzLl9sYXlvdXQgYXMgdW5rbm93biBhcyBUO1xuICB9XG5cbiAgc2V0QXBwPFQgZXh0ZW5kcyBBcHAgPSBBcHA+KHZhbHVlOiBUKTogdm9pZDtcbiAgc2V0QXBwKHZhbHVlOiBBKTogdm9pZDtcbiAgc2V0QXBwKHZhbHVlOiBBKTogdm9pZCB7XG4gICAgdGhpcy5fYXBwID0gdmFsdWU7XG4gICAgdGhpcy5zZXREYXRhKHRoaXMuS0VZUy5hcHAsIHZhbHVlKTtcbiAgICB0aGlzLm5vdGlmeSQubmV4dCh7IHR5cGU6ICdhcHAnLCB2YWx1ZSB9KTtcbiAgfVxuICBnZXRBcHA8VD4oKTogVCB7XG4gICAgcmV0dXJuIHRoaXMuX2FwcCBhcyB1bmtub3duIGFzIFQ7XG4gIH1cblxuICBzZXRVc2VyPFQgZXh0ZW5kcyBVc2VyID0gVXNlcj4odmFsdWU6IFQpOiB2b2lkO1xuICBzZXRVc2VyKHZhbHVlOiBVKTogdm9pZDtcbiAgc2V0VXNlcih2YWx1ZTogVSk6IHZvaWQge1xuICAgIHRoaXMuX3VzZXIgPSB2YWx1ZTtcbiAgICB0aGlzLnNldERhdGEodGhpcy5LRVlTLnVzZXIsIHZhbHVlKTtcbiAgICB0aGlzLm5vdGlmeSQubmV4dCh7IHR5cGU6ICd1c2VyJywgdmFsdWUgfSk7XG4gIH1cbiAgZ2V0VXNlcjxUPigpOiBUIHtcbiAgICByZXR1cm4gdGhpcy5fdXNlciBhcyB1bmtub3duIGFzIFQ7XG4gIH1cbn1cbiJdfQ==