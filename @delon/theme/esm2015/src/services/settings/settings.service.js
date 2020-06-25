/**
 * @fileoverview added by tsickle
 * Generated from: src/services/settings/settings.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Platform } from '@angular/cdk/platform';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/platform";
/** @type {?} */
export const LAYOUT = 'layout';
/** @type {?} */
export const USER = 'user';
/** @type {?} */
export const APP = 'app';
export class SettingsService {
    /**
     * @param {?} platform
     */
    constructor(platform) {
        this.platform = platform;
        this.notify$ = new Subject();
        this._app = null;
        this._user = null;
        this._layout = null;
    }
    /**
     * @private
     * @param {?} key
     * @return {?}
     */
    get(key) {
        if (!this.platform.isBrowser) {
            return null;
        }
        return JSON.parse(localStorage.getItem(key) || 'null') || null;
    }
    /**
     * @private
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    set(key, value) {
        if (!this.platform.isBrowser) {
            return;
        }
        localStorage.setItem(key, JSON.stringify(value));
    }
    /**
     * @return {?}
     */
    get layout() {
        if (!this._layout) {
            this._layout = Object.assign({ fixed: true, collapsed: false, boxed: false, lang: null }, this.get(LAYOUT));
            this.set(LAYOUT, this._layout);
        }
        return (/** @type {?} */ (this._layout));
    }
    /**
     * @return {?}
     */
    get app() {
        if (!this._app) {
            this._app = Object.assign({ year: new Date().getFullYear() }, this.get(APP));
            this.set(APP, this._app);
        }
        return (/** @type {?} */ (this._app));
    }
    /**
     * @return {?}
     */
    get user() {
        if (!this._user) {
            this._user = Object.assign({}, this.get(USER));
            this.set(USER, this._user);
        }
        return (/** @type {?} */ (this._user));
    }
    /**
     * @return {?}
     */
    get notify() {
        return this.notify$.asObservable();
    }
    /**
     * @param {?} name
     * @param {?=} value
     * @return {?}
     */
    setLayout(name, value) {
        if (typeof name === 'string') {
            this.layout[name] = value;
        }
        else {
            this._layout = name;
        }
        this.set(LAYOUT, this._layout);
        this.notify$.next((/** @type {?} */ ({ type: 'layout', name, value })));
        return true;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setApp(value) {
        this._app = value;
        this.set(APP, value);
        this.notify$.next({ type: 'app', value });
        return true;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setUser(value) {
        this._user = value;
        this.set(USER, value);
        this.notify$.next({ type: 'user', value });
        return true;
    }
}
SettingsService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
SettingsService.ctorParameters = () => [
    { type: Platform }
];
/** @nocollapse */ SettingsService.ɵprov = i0.ɵɵdefineInjectable({ factory: function SettingsService_Factory() { return new SettingsService(i0.ɵɵinject(i1.Platform)); }, token: SettingsService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    SettingsService.prototype.notify$;
    /**
     * @type {?}
     * @private
     */
    SettingsService.prototype._app;
    /**
     * @type {?}
     * @private
     */
    SettingsService.prototype._user;
    /**
     * @type {?}
     * @private
     */
    SettingsService.prototype._layout;
    /**
     * @type {?}
     * @private
     */
    SettingsService.prototype.platform;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi90aGVtZS8iLCJzb3VyY2VzIjpbInNyYy9zZXJ2aWNlcy9zZXR0aW5ncy9zZXR0aW5ncy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7OztBQUczQyxNQUFNLE9BQU8sTUFBTSxHQUFHLFFBQVE7O0FBRTlCLE1BQU0sT0FBTyxJQUFJLEdBQUcsTUFBTTs7QUFFMUIsTUFBTSxPQUFPLEdBQUcsR0FBRyxLQUFLO0FBR3hCLE1BQU0sT0FBTyxlQUFlOzs7O0lBTTFCLFlBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFMOUIsWUFBTyxHQUFHLElBQUksT0FBTyxFQUFrQixDQUFDO1FBQ3hDLFNBQUksR0FBZSxJQUFJLENBQUM7UUFDeEIsVUFBSyxHQUFnQixJQUFJLENBQUM7UUFDMUIsWUFBTyxHQUFrQixJQUFJLENBQUM7SUFFRyxDQUFDOzs7Ozs7SUFFbEMsR0FBRyxDQUFDLEdBQVc7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFO1lBQzVCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUM7SUFDakUsQ0FBQzs7Ozs7OztJQUVPLEdBQUcsQ0FBQyxHQUFXLEVBQUUsS0FBVTtRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDNUIsT0FBTztTQUNSO1FBQ0QsWUFBWSxDQUFDLE9BQU8sQ0FBQyxH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VSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztZQVh6QixRQUFROzs7Ozs7OztJQWFmLGtDQUFnRDs7Ozs7SUFDaEQsK0JBQWdDOzs7OztJQUNoQyxnQ0FBa0M7Ozs7O0lBQ2xDLGtDQUFzQzs7Ozs7SUFFMUIsbUNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQXBwLCBMYXlvdXQsIFNldHRpbmdzTm90aWZ5LCBVc2VyIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuXG5leHBvcnQgY29uc3QgTEFZT1VUID0gJ2xheW91dCc7XG5cbmV4cG9ydCBjb25zdCBVU0VSID0gJ3VzZXInO1xuXG5leHBvcnQgY29uc3QgQVBQID0gJ2FwcCc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgU2V0dGluZ3NTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBub3RpZnkkID0gbmV3IFN1YmplY3Q8U2V0dGluZ3NOb3RpZnk+KCk7XG4gIHByaXZhdGUgX2FwcDogQXBwIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgX3VzZXI6IFVzZXIgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBfbGF5b3V0OiBMYXlvdXQgfCBudWxsID0gbnVsbDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSkge31cblxuICBwcml2YXRlIGdldChrZXk6IHN0cmluZykge1xuICAgIGlmICghdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpIHx8ICdudWxsJykgfHwgbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gIH1cblxuICBnZXQgbGF5b3V0KCk6IExheW91dCB7XG4gICAgaWYgKCF0aGlzLl9sYXlvdXQpIHtcbiAgICAgIHRoaXMuX2xheW91dCA9IHtcbiAgICAgICAgZml4ZWQ6IHRydWUsXG4gICAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICAgIGJveGVkOiBmYWxzZSxcbiAgICAgICAgbGFuZzogbnVsbCxcbiAgICAgICAgLi4udGhpcy5nZXQoTEFZT1VUKSxcbiAgICAgIH07XG4gICAgICB0aGlzLnNldChMQVlPVVQsIHRoaXMuX2xheW91dCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9sYXlvdXQgYXMgTGF5b3V0O1xuICB9XG5cbiAgZ2V0IGFwcCgpOiBBcHAge1xuICAgIGlmICghdGhpcy5fYXBwKSB7XG4gICAgICB0aGlzLl9hcHAgPSB7XG4gICAgICAgIHllYXI6IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgLi4udGhpcy5nZXQoQVBQKSxcbiAgICAgIH07XG4gICAgICB0aGlzLnNldChBUFAsIHRoaXMuX2FwcCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9hcHAgYXMgQXBwO1xuICB9XG5cbiAgZ2V0IHVzZXIoKTogVXNlciB7XG4gICAgaWYgKCF0aGlzLl91c2VyKSB7XG4gICAgICB0aGlzLl91c2VyID0geyAuLi50aGlzLmdldChVU0VSKSB9O1xuICAgICAgdGhpcy5zZXQoVVNFUiwgdGhpcy5fdXNlcik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl91c2VyIGFzIFVzZXI7XG4gIH1cblxuICBnZXQgbm90aWZ5KCk6IE9ic2VydmFibGU8U2V0dGluZ3NOb3RpZnk+IHtcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkkLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgc2V0TGF5b3V0KG5hbWU6IHN0cmluZyB8IExheW91dCwgdmFsdWU/OiBhbnkpOiBib29sZWFuIHtcbiAgICBpZiAodHlwZW9mIG5hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLmxheW91dFtuYW1lXSA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9sYXlvdXQgPSBuYW1lO1xuICAgIH1cbiAgICB0aGlzLnNldChMQVlPVVQsIHRoaXMuX2xheW91dCk7XG4gICAgdGhpcy5ub3RpZnkkLm5leHQoeyB0eXBlOiAnbGF5b3V0JywgbmFtZSwgdmFsdWUgfSBhcyBhbnkpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgc2V0QXBwKHZhbHVlOiBBcHApIHtcbiAgICB0aGlzLl9hcHAgPSB2YWx1ZTtcbiAgICB0aGlzLnNldChBUFAsIHZhbHVlKTtcbiAgICB0aGlzLm5vdGlmeSQubmV4dCh7IHR5cGU6ICdhcHAnLCB2YWx1ZSB9KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHNldFVzZXIodmFsdWU6IFVzZXIpIHtcbiAgICB0aGlzLl91c2VyID0gdmFsdWU7XG4gICAgdGhpcy5zZXQoVVNFUiwgdmFsdWUpO1xuICAgIHRoaXMubm90aWZ5JC5uZXh0KHsgdHlwZTogJ3VzZXInLCB2YWx1ZSB9KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIl19