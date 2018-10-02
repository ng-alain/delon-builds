/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
/** @type {?} */
var LAYOUT_KEY = 'layout';
/** @type {?} */
var USER_KEY = 'user';
/** @type {?} */
var APP_KEY = 'app';
var SettingsService = /** @class */ (function () {
    function SettingsService() {
        this.notify$ = new Subject();
        this._app = null;
        this._user = null;
        this._layout = null;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    SettingsService.prototype.get = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return JSON.parse(localStorage.getItem(key) || 'null') || null;
    };
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    SettingsService.prototype.set = /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    };
    Object.defineProperty(SettingsService.prototype, "layout", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this._layout) {
                this._layout = Object.assign(/** @type {?} */ ({
                    fixed: true,
                    collapsed: false,
                    boxed: false,
                    lang: null,
                }), this.get(LAYOUT_KEY));
                this.set(LAYOUT_KEY, this._layout);
            }
            return this._layout;
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
                this._app = Object.assign(/** @type {?} */ ({
                    year: new Date().getFullYear(),
                }), this.get(APP_KEY));
                this.set(APP_KEY, this._app);
            }
            return this._app;
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
                this._user = Object.assign(/** @type {?} */ ({}), this.get(USER_KEY));
                this.set(USER_KEY, this._user);
            }
            return this._user;
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
        this.set(LAYOUT_KEY, this._layout);
        this.notify$.next(/** @type {?} */ ({ type: 'layout', name: name, value: value }));
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
        this.set(APP_KEY, value);
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
        this.set(USER_KEY, value);
        this.notify$.next({ type: 'user', value: value });
        return true;
    };
    SettingsService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ SettingsService.ngInjectableDef = i0.defineInjectable({ factory: function SettingsService_Factory() { return new SettingsService(); }, token: SettingsService, providedIn: "root" });
    return SettingsService;
}());
export { SettingsService };
if (false) {
    /** @type {?} */
    SettingsService.prototype.notify$;
    /** @type {?} */
    SettingsService.prototype._app;
    /** @type {?} */
    SettingsService.prototype._user;
    /** @type {?} */
    SettingsService.prototype._layout;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi90aGVtZS8iLCJzb3VyY2VzIjpbInNyYy9zZXJ2aWNlcy9zZXR0aW5ncy9zZXR0aW5ncy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQWMsTUFBTSxNQUFNLENBQUM7OztBQUczQyxJQUFNLFVBQVUsR0FBRyxRQUFRLENBQUM7O0FBQzVCLElBQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQzs7QUFDeEIsSUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDOzs7dUJBSUYsSUFBSSxPQUFPLEVBQWtCO29CQUMzQixJQUFJO3FCQUNGLElBQUk7dUJBQ0EsSUFBSTs7Ozs7O0lBRXRCLDZCQUFHOzs7O2NBQUMsR0FBVztRQUNyQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUM7Ozs7Ozs7SUFHekQsNkJBQUc7Ozs7O2NBQUMsR0FBVyxFQUFFLEtBQVU7UUFDakMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOztJQUduRCxzQkFBSSxtQ0FBTTs7OztRQUFWO1lBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sbUJBQ2xCO29CQUNOLEtBQUssRUFBRSxJQUFJO29CQUNYLFNBQVMsRUFBRSxLQUFLO29CQUNoQixLQUFLLEVBQUUsS0FBSztvQkFDWixJQUFJLEVBQUUsSUFBSTtpQkFDWCxHQUNELElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQ3JCLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3BDO1lBQ0QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3JCOzs7T0FBQTtJQUVELHNCQUFJLGdDQUFHOzs7O1FBQVA7WUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDZCxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLG1CQUNsQjtvQkFDSCxJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUU7aUJBQy9CLEdBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FDbEIsQ0FBQztnQkFDRixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDOUI7WUFDRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDbEI7OztPQUFBO0lBRUQsc0JBQUksaUNBQUk7Ozs7UUFBUjtZQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sbUJBQU8sRUFBRSxHQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDekQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2hDO1lBQ0QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ25COzs7T0FBQTtJQUVELHNCQUFJLG1DQUFNOzs7O1FBQVY7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDcEM7OztPQUFBOzs7Ozs7SUFFRCxtQ0FBUzs7Ozs7SUFBVCxVQUFVLElBQXFCLEVBQUUsS0FBVztRQUMxQyxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQztTQUMzQjthQUFNO1lBQ0wsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7U0FDckI7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLG1CQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLE1BQUEsRUFBRSxLQUFLLE9BQUEsRUFBUyxFQUFDLENBQUM7UUFDMUQsT0FBTyxJQUFJLENBQUM7S0FDYjs7Ozs7SUFFRCxnQ0FBTTs7OztJQUFOLFVBQU8sS0FBVTtRQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLENBQUM7UUFDMUMsT0FBTyxJQUFJLENBQUM7S0FDYjs7Ozs7SUFFRCxpQ0FBTzs7OztJQUFQLFVBQVEsS0FBVztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQyxDQUFDO1FBQzNDLE9BQU8sSUFBSSxDQUFDO0tBQ2I7O2dCQS9FRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7MEJBUmxDOztTQVNhLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQXBwLCBMYXlvdXQsIFVzZXIsIFNldHRpbmdzTm90aWZ5IH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xyXG5cclxuY29uc3QgTEFZT1VUX0tFWSA9ICdsYXlvdXQnO1xyXG5jb25zdCBVU0VSX0tFWSA9ICd1c2VyJztcclxuY29uc3QgQVBQX0tFWSA9ICdhcHAnO1xyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIFNldHRpbmdzU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBub3RpZnkkID0gbmV3IFN1YmplY3Q8U2V0dGluZ3NOb3RpZnk+KCk7XHJcbiAgcHJpdmF0ZSBfYXBwOiBBcHAgPSBudWxsO1xyXG4gIHByaXZhdGUgX3VzZXI6IFVzZXIgPSBudWxsO1xyXG4gIHByaXZhdGUgX2xheW91dDogTGF5b3V0ID0gbnVsbDtcclxuXHJcbiAgcHJpdmF0ZSBnZXQoa2V5OiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkgfHwgJ251bGwnKSB8fCBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcclxuICB9XHJcblxyXG4gIGdldCBsYXlvdXQoKTogTGF5b3V0IHtcclxuICAgIGlmICghdGhpcy5fbGF5b3V0KSB7XHJcbiAgICAgIHRoaXMuX2xheW91dCA9IE9iamVjdC5hc3NpZ24oXHJcbiAgICAgICAgPExheW91dD57XHJcbiAgICAgICAgICBmaXhlZDogdHJ1ZSxcclxuICAgICAgICAgIGNvbGxhcHNlZDogZmFsc2UsXHJcbiAgICAgICAgICBib3hlZDogZmFsc2UsXHJcbiAgICAgICAgICBsYW5nOiBudWxsLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGhpcy5nZXQoTEFZT1VUX0tFWSksXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuc2V0KExBWU9VVF9LRVksIHRoaXMuX2xheW91dCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5fbGF5b3V0O1xyXG4gIH1cclxuXHJcbiAgZ2V0IGFwcCgpOiBBcHAge1xyXG4gICAgaWYgKCF0aGlzLl9hcHApIHtcclxuICAgICAgdGhpcy5fYXBwID0gT2JqZWN0LmFzc2lnbihcclxuICAgICAgICA8QXBwPntcclxuICAgICAgICAgIHllYXI6IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRoaXMuZ2V0KEFQUF9LRVkpLFxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLnNldChBUFBfS0VZLCB0aGlzLl9hcHApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuX2FwcDtcclxuICB9XHJcblxyXG4gIGdldCB1c2VyKCk6IFVzZXIge1xyXG4gICAgaWYgKCF0aGlzLl91c2VyKSB7XHJcbiAgICAgIHRoaXMuX3VzZXIgPSBPYmplY3QuYXNzaWduKDxVc2VyPnt9LCB0aGlzLmdldChVU0VSX0tFWSkpO1xyXG4gICAgICB0aGlzLnNldChVU0VSX0tFWSwgdGhpcy5fdXNlcik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5fdXNlcjtcclxuICB9XHJcblxyXG4gIGdldCBub3RpZnkoKTogT2JzZXJ2YWJsZTxTZXR0aW5nc05vdGlmeT4ge1xyXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5JC5hc09ic2VydmFibGUoKTtcclxuICB9XHJcblxyXG4gIHNldExheW91dChuYW1lOiBzdHJpbmcgfCBMYXlvdXQsIHZhbHVlPzogYW55KTogYm9vbGVhbiB7XHJcbiAgICBpZiAodHlwZW9mIG5hbWUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHRoaXMubGF5b3V0W25hbWVdID0gdmFsdWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9sYXlvdXQgPSBuYW1lO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXQoTEFZT1VUX0tFWSwgdGhpcy5fbGF5b3V0KTtcclxuICAgIHRoaXMubm90aWZ5JC5uZXh0KHsgdHlwZTogJ2xheW91dCcsIG5hbWUsIHZhbHVlIH0gYXMgYW55KTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgc2V0QXBwKHZhbHVlOiBBcHApIHtcclxuICAgIHRoaXMuX2FwcCA9IHZhbHVlO1xyXG4gICAgdGhpcy5zZXQoQVBQX0tFWSwgdmFsdWUpO1xyXG4gICAgdGhpcy5ub3RpZnkkLm5leHQoeyB0eXBlOiAnYXBwJywgdmFsdWUgfSk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHNldFVzZXIodmFsdWU6IFVzZXIpIHtcclxuICAgIHRoaXMuX3VzZXIgPSB2YWx1ZTtcclxuICAgIHRoaXMuc2V0KFVTRVJfS0VZLCB2YWx1ZSk7XHJcbiAgICB0aGlzLm5vdGlmeSQubmV4dCh7IHR5cGU6ICd1c2VyJywgdmFsdWUgfSk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn1cclxuIl19