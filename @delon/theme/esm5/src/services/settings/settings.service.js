/**
 * @fileoverview added by tsickle
 * Generated from: src/services/settings/settings.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __assign } from "tslib";
import { Platform } from '@angular/cdk/platform';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/platform";
/** @type {?} */
export var LAYOUT = 'layout';
/** @type {?} */
export var USER = 'user';
/** @type {?} */
export var APP = 'app';
var SettingsService = /** @class */ (function () {
    function SettingsService(platform) {
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
    SettingsService.prototype.get = /**
     * @private
     * @param {?} key
     * @return {?}
     */
    function (key) {
        if (!this.platform.isBrowser) {
            return null;
        }
        return JSON.parse(localStorage.getItem(key) || 'null') || null;
    };
    /**
     * @private
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    SettingsService.prototype.set = /**
     * @private
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        if (!this.platform.isBrowser) {
            return;
        }
        localStorage.setItem(key, JSON.stringify(value));
    };
    Object.defineProperty(SettingsService.prototype, "layout", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this._layout) {
                this._layout = __assign({ fixed: true, collapsed: false, boxed: false, lang: null }, this.get(LAYOUT));
                this.set(LAYOUT, this._layout);
            }
            return (/** @type {?} */ (this._layout));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsService.prototype, "app", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this._app) {
                this._app = __assign({ year: new Date().getFullYear() }, this.get(APP));
                this.set(APP, this._app);
            }
            return (/** @type {?} */ (this._app));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsService.prototype, "user", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this._user) {
                this._user = __assign({}, this.get(USER));
                this.set(USER, this._user);
            }
            return (/** @type {?} */ (this._user));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsService.prototype, "notify", {
        get: /**
         * @return {?}
         */
        function () {
            return this.notify$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} name
     * @param {?=} value
     * @return {?}
     */
    SettingsService.prototype.setLayout = /**
     * @param {?} name
     * @param {?=} value
     * @return {?}
     */
    function (name, value) {
        if (typeof name === 'string') {
            this.layout[name] = value;
        }
        else {
            this._layout = name;
        }
        this.set(LAYOUT, this._layout);
        this.notify$.next((/** @type {?} */ ({ type: 'layout', name: name, value: value })));
        return true;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    SettingsService.prototype.setApp = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._app = value;
        this.set(APP, value);
        this.notify$.next({ type: 'app', value: value });
        return true;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    SettingsService.prototype.setUser = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._user = value;
        this.set(USER, value);
        this.notify$.next({ type: 'user', value: value });
        return true;
    };
    SettingsService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    SettingsService.ctorParameters = function () { return [
        { type: Platform }
    ]; };
    /** @nocollapse */ SettingsService.ɵprov = i0.ɵɵdefineInjectable({ factory: function SettingsService_Factory() { return new SettingsService(i0.ɵɵinject(i1.Platform)); }, token: SettingsService, providedIn: "root" });
    return SettingsService;
}());
export { SettingsService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi90aGVtZS8iLCJzb3VyY2VzIjpbInNyYy9zZXJ2aWNlcy9zZXR0aW5ncy9zZXR0aW5ncy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7QUFHM0MsTUFBTSxLQUFPLE1BQU0sR0FBRyxRQUFROztBQUU5QixNQUFNLEtBQU8sSUFBSSxHQUFHLE1BQU07O0FBRTFCLE1BQU0sS0FBTyxHQUFHLEdBQUcsS0FBSztBQUV4QjtJQU9FLHlCQUFvQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBTDlCLFlBQU8sR0FBRyxJQUFJLE9BQU8sRUFBa0IsQ0FBQztRQUN4QyxTQUFJLEdBQWUsSUFBSSxDQUFDO1FBQ3hCLFVBQUssR0FBZ0IsSUFBSSxDQUFDO1FBQzFCLFlBQU8sR0FBa0IsSUFBSSxDQUFDO0lBRUcsQ0FBQzs7Ozs7O0lBRWxDLDZCQUFHOzs7OztJQUFYLFVBQVksR0FBVztRQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDNUIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQztJQUNqRSxDQUFDOzs7Ozs7O0lBRU8sNkJBQUc7Ozs7OztJQUFYLFVBQVksR0FBVyxFQUFFLEtBQVU7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFO1lBQzVCLE9BQU87U0FDUjtRQUNELFlBQVksQ0FBQyxPQUFPLENB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T0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQyxDQUFDO1FBQzNDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Z0JBbkZGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7Z0JBWHpCLFFBQVE7OzswQkFBakI7Q0ErRkMsQUFwRkQsSUFvRkM7U0FuRlksZUFBZTs7Ozs7O0lBQzFCLGtDQUFnRDs7Ozs7SUFDaEQsK0JBQWdDOzs7OztJQUNoQyxnQ0FBa0M7Ozs7O0lBQ2xDLGtDQUFzQzs7Ozs7SUFFMUIsbUNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQXBwLCBMYXlvdXQsIFNldHRpbmdzTm90aWZ5LCBVc2VyIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuXG5leHBvcnQgY29uc3QgTEFZT1VUID0gJ2xheW91dCc7XG5cbmV4cG9ydCBjb25zdCBVU0VSID0gJ3VzZXInO1xuXG5leHBvcnQgY29uc3QgQVBQID0gJ2FwcCc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgU2V0dGluZ3NTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBub3RpZnkkID0gbmV3IFN1YmplY3Q8U2V0dGluZ3NOb3RpZnk+KCk7XG4gIHByaXZhdGUgX2FwcDogQXBwIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgX3VzZXI6IFVzZXIgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBfbGF5b3V0OiBMYXlvdXQgfCBudWxsID0gbnVsbDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSkge31cblxuICBwcml2YXRlIGdldChrZXk6IHN0cmluZykge1xuICAgIGlmICghdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpIHx8ICdudWxsJykgfHwgbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gIH1cblxuICBnZXQgbGF5b3V0KCk6IExheW91dCB7XG4gICAgaWYgKCF0aGlzLl9sYXlvdXQpIHtcbiAgICAgIHRoaXMuX2xheW91dCA9IHtcbiAgICAgICAgZml4ZWQ6IHRydWUsXG4gICAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICAgIGJveGVkOiBmYWxzZSxcbiAgICAgICAgbGFuZzogbnVsbCxcbiAgICAgICAgLi4udGhpcy5nZXQoTEFZT1VUKSxcbiAgICAgIH07XG4gICAgICB0aGlzLnNldChMQVlPVVQsIHRoaXMuX2xheW91dCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9sYXlvdXQgYXMgTGF5b3V0O1xuICB9XG5cbiAgZ2V0IGFwcCgpOiBBcHAge1xuICAgIGlmICghdGhpcy5fYXBwKSB7XG4gICAgICB0aGlzLl9hcHAgPSB7XG4gICAgICAgIHllYXI6IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgLi4udGhpcy5nZXQoQVBQKSxcbiAgICAgIH07XG4gICAgICB0aGlzLnNldChBUFAsIHRoaXMuX2FwcCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9hcHAgYXMgQXBwO1xuICB9XG5cbiAgZ2V0IHVzZXIoKTogVXNlciB7XG4gICAgaWYgKCF0aGlzLl91c2VyKSB7XG4gICAgICB0aGlzLl91c2VyID0geyAuLi50aGlzLmdldChVU0VSKSB9O1xuICAgICAgdGhpcy5zZXQoVVNFUiwgdGhpcy5fdXNlcik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl91c2VyIGFzIFVzZXI7XG4gIH1cblxuICBnZXQgbm90aWZ5KCk6IE9ic2VydmFibGU8U2V0dGluZ3NOb3RpZnk+IHtcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkkLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgc2V0TGF5b3V0KG5hbWU6IHN0cmluZyB8IExheW91dCwgdmFsdWU/OiBhbnkpOiBib29sZWFuIHtcbiAgICBpZiAodHlwZW9mIG5hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLmxheW91dFtuYW1lXSA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9sYXlvdXQgPSBuYW1lO1xuICAgIH1cbiAgICB0aGlzLnNldChMQVlPVVQsIHRoaXMuX2xheW91dCk7XG4gICAgdGhpcy5ub3RpZnkkLm5leHQoeyB0eXBlOiAnbGF5b3V0JywgbmFtZSwgdmFsdWUgfSBhcyBhbnkpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgc2V0QXBwKHZhbHVlOiBBcHApIHtcbiAgICB0aGlzLl9hcHAgPSB2YWx1ZTtcbiAgICB0aGlzLnNldChBUFAsIHZhbHVlKTtcbiAgICB0aGlzLm5vdGlmeSQubmV4dCh7IHR5cGU6ICdhcHAnLCB2YWx1ZSB9KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHNldFVzZXIodmFsdWU6IFVzZXIpIHtcbiAgICB0aGlzLl91c2VyID0gdmFsdWU7XG4gICAgdGhpcy5zZXQoVVNFUiwgdmFsdWUpO1xuICAgIHRoaXMubm90aWZ5JC5uZXh0KHsgdHlwZTogJ3VzZXInLCB2YWx1ZSB9KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIl19