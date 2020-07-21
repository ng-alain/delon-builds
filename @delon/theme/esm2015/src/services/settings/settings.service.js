/**
 * @fileoverview added by tsickle
 * Generated from: src/services/settings/settings.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @param {?} key
     * @return {?}
     */
    getData(key) {
        if (!this.platform.isBrowser) {
            return null;
        }
        return JSON.parse(localStorage.getItem(key) || 'null') || null;
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    setData(key, value) {
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
            this._layout = Object.assign({ fixed: true, collapsed: false, boxed: false, lang: null }, this.getData(LAYOUT));
            this.setData(LAYOUT, this._layout);
        }
        return (/** @type {?} */ (this._layout));
    }
    /**
     * @return {?}
     */
    get app() {
        if (!this._app) {
            this._app = Object.assign({ year: new Date().getFullYear() }, this.getData(APP));
            this.setData(APP, this._app);
        }
        return (/** @type {?} */ (this._app));
    }
    /**
     * @return {?}
     */
    get user() {
        if (!this._user) {
            this._user = Object.assign({}, this.getData(USER));
            this.setData(USER, this._user);
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
        this.setData(LAYOUT, this._layout);
        this.notify$.next((/** @type {?} */ ({ type: 'layout', name, value })));
        return true;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setApp(value) {
        this._app = value;
        this.setData(APP, value);
        this.notify$.next({ type: 'app', value });
        return true;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setUser(value) {
        this._user = value;
        this.setData(USER, value);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lL3NyYy9zZXJ2aWNlcy9zZXR0aW5ncy9zZXR0aW5ncy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7OztBQUczQyxNQUFNLE9BQU8sTUFBTSxHQUFHLFFBQVE7O0FBRTlCLE1BQU0sT0FBTyxJQUFJLEdBQUcsTUFBTTs7QUFFMUIsTUFBTSxPQUFPLEdBQUcsR0FBRyxLQUFLO0FBR3hCLE1BQU0sT0FBTyxlQUFlOzs7O0lBTTFCLFlBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFMOUIsWUFBTyxHQUFHLElBQUksT0FBTyxFQUFrQixDQUFDO1FBQ3hDLFNBQUksR0FBZSxJQUFJLENBQUM7UUFDeEIsVUFBSyxHQUFnQixJQUFJLENBQUM7UUFDMUIsWUFBTyxHQUFrQixJQUFJLENBQUM7SUFFRyxDQUFDOzs7OztJQUUxQyxPQUFPLENBQUMsR0FBVztRQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDNUIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQztJQUNqRSxDQUFDOzs7Ozs7SUFFRCxPQUFPLENBQUMsR0FBVyxFQUFFLEtBQVU7UUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFO1lBQzVCLE9BQU87U0FDUjtRQUNELFlBQVks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Q0FBQzs7O1lBbkZGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7WUFYekIsUUFBUTs7Ozs7Ozs7SUFhZixrQ0FBZ0Q7Ozs7O0lBQ2hELCtCQUFnQzs7Ozs7SUFDaEMsZ0NBQWtDOzs7OztJQUNsQyxrQ0FBc0M7Ozs7O0lBRTFCLG1DQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFwcCwgTGF5b3V0LCBTZXR0aW5nc05vdGlmeSwgVXNlciB9IGZyb20gJy4vaW50ZXJmYWNlJztcblxuZXhwb3J0IGNvbnN0IExBWU9VVCA9ICdsYXlvdXQnO1xuXG5leHBvcnQgY29uc3QgVVNFUiA9ICd1c2VyJztcblxuZXhwb3J0IGNvbnN0IEFQUCA9ICdhcHAnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFNldHRpbmdzU2VydmljZSB7XG4gIHByaXZhdGUgbm90aWZ5JCA9IG5ldyBTdWJqZWN0PFNldHRpbmdzTm90aWZ5PigpO1xuICBwcml2YXRlIF9hcHA6IEFwcCB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIF91c2VyOiBVc2VyIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgX2xheW91dDogTGF5b3V0IHwgbnVsbCA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0pIHt9XG5cbiAgZ2V0RGF0YShrZXk6IHN0cmluZykge1xuICAgIGlmICghdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpIHx8ICdudWxsJykgfHwgbnVsbDtcbiAgfVxuXG4gIHNldERhdGEoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcbiAgICBpZiAoIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgfVxuXG4gIGdldCBsYXlvdXQoKTogTGF5b3V0IHtcbiAgICBpZiAoIXRoaXMuX2xheW91dCkge1xuICAgICAgdGhpcy5fbGF5b3V0ID0ge1xuICAgICAgICBmaXhlZDogdHJ1ZSxcbiAgICAgICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgICAgICAgYm94ZWQ6IGZhbHNlLFxuICAgICAgICBsYW5nOiBudWxsLFxuICAgICAgICAuLi50aGlzLmdldERhdGEoTEFZT1VUKSxcbiAgICAgIH07XG4gICAgICB0aGlzLnNldERhdGEoTEFZT1VULCB0aGlzLl9sYXlvdXQpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fbGF5b3V0IGFzIExheW91dDtcbiAgfVxuXG4gIGdldCBhcHAoKTogQXBwIHtcbiAgICBpZiAoIXRoaXMuX2FwcCkge1xuICAgICAgdGhpcy5fYXBwID0ge1xuICAgICAgICB5ZWFyOiBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCksXG4gICAgICAgIC4uLnRoaXMuZ2V0RGF0YShBUFApLFxuICAgICAgfTtcbiAgICAgIHRoaXMuc2V0RGF0YShBUFAsIHRoaXMuX2FwcCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9hcHAgYXMgQXBwO1xuICB9XG5cbiAgZ2V0IHVzZXIoKTogVXNlciB7XG4gICAgaWYgKCF0aGlzLl91c2VyKSB7XG4gICAgICB0aGlzLl91c2VyID0geyAuLi50aGlzLmdldERhdGEoVVNFUikgfTtcbiAgICAgIHRoaXMuc2V0RGF0YShVU0VSLCB0aGlzLl91c2VyKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3VzZXIgYXMgVXNlcjtcbiAgfVxuXG4gIGdldCBub3RpZnkoKTogT2JzZXJ2YWJsZTxTZXR0aW5nc05vdGlmeT4ge1xuICAgIHJldHVybiB0aGlzLm5vdGlmeSQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBzZXRMYXlvdXQobmFtZTogc3RyaW5nIHwgTGF5b3V0LCB2YWx1ZT86IGFueSk6IGJvb2xlYW4ge1xuICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMubGF5b3V0W25hbWVdID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2xheW91dCA9IG5hbWU7XG4gICAgfVxuICAgIHRoaXMuc2V0RGF0YShMQVlPVVQsIHRoaXMuX2xheW91dCk7XG4gICAgdGhpcy5ub3RpZnkkLm5leHQoeyB0eXBlOiAnbGF5b3V0JywgbmFtZSwgdmFsdWUgfSBhcyBhbnkpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgc2V0QXBwKHZhbHVlOiBBcHApIHtcbiAgICB0aGlzLl9hcHAgPSB2YWx1ZTtcbiAgICB0aGlzLnNldERhdGEoQVBQLCB2YWx1ZSk7XG4gICAgdGhpcy5ub3RpZnkkLm5leHQoeyB0eXBlOiAnYXBwJywgdmFsdWUgfSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBzZXRVc2VyKHZhbHVlOiBVc2VyKSB7XG4gICAgdGhpcy5fdXNlciA9IHZhbHVlO1xuICAgIHRoaXMuc2V0RGF0YShVU0VSLCB2YWx1ZSk7XG4gICAgdGhpcy5ub3RpZnkkLm5leHQoeyB0eXBlOiAndXNlcicsIHZhbHVlIH0pO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iXX0=