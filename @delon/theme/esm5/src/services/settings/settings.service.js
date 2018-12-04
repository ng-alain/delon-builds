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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi90aGVtZS8iLCJzb3VyY2VzIjpbInNyYy9zZXJ2aWNlcy9zZXR0aW5ncy9zZXR0aW5ncy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQWMsTUFBTSxNQUFNLENBQUM7OztBQUczQyxJQUFNLFVBQVUsR0FBRyxRQUFRLENBQUM7O0FBQzVCLElBQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQzs7QUFDeEIsSUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDOzs7dUJBSUYsSUFBSSxPQUFPLEVBQWtCO29CQUMzQixJQUFJO3FCQUNGLElBQUk7dUJBQ0EsSUFBSTs7Ozs7O0lBRXRCLDZCQUFHOzs7O2NBQUMsR0FBVztRQUNyQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUM7Ozs7Ozs7SUFHekQsNkJBQUc7Ozs7O2NBQUMsR0FBVyxFQUFFLEtBQVU7UUFDakMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOztJQUduRCxzQkFBSSxtQ0FBTTs7OztRQUFWO1lBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sbUJBQ2xCO29CQUNOLEtBQUssRUFBRSxJQUFJO29CQUNYLFNBQVMsRUFBRSxLQUFLO29CQUNoQixLQUFLLEVBQUUsS0FBSztvQkFDWixJQUFJLEVBQUUsSUFBSTtpQkFDWCxHQUNELElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQ3JCLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3BDO1lBQ0QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3JCOzs7T0FBQTtJQUVELHNCQUFJLGdDQUFHOzs7O1FBQVA7WUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDZCxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLG1CQUNsQjtvQkFDSCxJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUU7aUJBQy9CLEdBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FDbEIsQ0FBQztnQkFDRixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDOUI7WUFDRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDbEI7OztPQUFBO0lBRUQsc0JBQUksaUNBQUk7Ozs7UUFBUjtZQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sbUJBQU8sRUFBRSxHQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDekQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2hDO1lBQ0QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ25COzs7T0FBQTtJQUVELHNCQUFJLG1DQUFNOzs7O1FBQVY7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDcEM7OztPQUFBOzs7Ozs7SUFFRCxtQ0FBUzs7Ozs7SUFBVCxVQUFVLElBQXFCLEVBQUUsS0FBVztRQUMxQyxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQztTQUMzQjthQUFNO1lBQ0wsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7U0FDckI7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLG1CQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLE1BQUEsRUFBRSxLQUFLLE9BQUEsRUFBUyxFQUFDLENBQUM7UUFDMUQsT0FBTyxJQUFJLENBQUM7S0FDYjs7Ozs7SUFFRCxnQ0FBTTs7OztJQUFOLFVBQU8sS0FBVTtRQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLENBQUM7UUFDMUMsT0FBTyxJQUFJLENBQUM7S0FDYjs7Ozs7SUFFRCxpQ0FBTzs7OztJQUFQLFVBQVEsS0FBVztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQyxDQUFDO1FBQzNDLE9BQU8sSUFBSSxDQUFDO0tBQ2I7O2dCQS9FRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7MEJBUmxDOztTQVNhLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBcHAsIExheW91dCwgVXNlciwgU2V0dGluZ3NOb3RpZnkgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5cbmNvbnN0IExBWU9VVF9LRVkgPSAnbGF5b3V0JztcbmNvbnN0IFVTRVJfS0VZID0gJ3VzZXInO1xuY29uc3QgQVBQX0tFWSA9ICdhcHAnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFNldHRpbmdzU2VydmljZSB7XG4gIHByaXZhdGUgbm90aWZ5JCA9IG5ldyBTdWJqZWN0PFNldHRpbmdzTm90aWZ5PigpO1xuICBwcml2YXRlIF9hcHA6IEFwcCA9IG51bGw7XG4gIHByaXZhdGUgX3VzZXI6IFVzZXIgPSBudWxsO1xuICBwcml2YXRlIF9sYXlvdXQ6IExheW91dCA9IG51bGw7XG5cbiAgcHJpdmF0ZSBnZXQoa2V5OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpIHx8ICdudWxsJykgfHwgbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICB9XG5cbiAgZ2V0IGxheW91dCgpOiBMYXlvdXQge1xuICAgIGlmICghdGhpcy5fbGF5b3V0KSB7XG4gICAgICB0aGlzLl9sYXlvdXQgPSBPYmplY3QuYXNzaWduKFxuICAgICAgICA8TGF5b3V0PntcbiAgICAgICAgICBmaXhlZDogdHJ1ZSxcbiAgICAgICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgICAgIGJveGVkOiBmYWxzZSxcbiAgICAgICAgICBsYW5nOiBudWxsLFxuICAgICAgICB9LFxuICAgICAgICB0aGlzLmdldChMQVlPVVRfS0VZKSxcbiAgICAgICk7XG4gICAgICB0aGlzLnNldChMQVlPVVRfS0VZLCB0aGlzLl9sYXlvdXQpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fbGF5b3V0O1xuICB9XG5cbiAgZ2V0IGFwcCgpOiBBcHAge1xuICAgIGlmICghdGhpcy5fYXBwKSB7XG4gICAgICB0aGlzLl9hcHAgPSBPYmplY3QuYXNzaWduKFxuICAgICAgICA8QXBwPntcbiAgICAgICAgICB5ZWFyOiBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCksXG4gICAgICAgIH0sXG4gICAgICAgIHRoaXMuZ2V0KEFQUF9LRVkpLFxuICAgICAgKTtcbiAgICAgIHRoaXMuc2V0KEFQUF9LRVksIHRoaXMuX2FwcCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9hcHA7XG4gIH1cblxuICBnZXQgdXNlcigpOiBVc2VyIHtcbiAgICBpZiAoIXRoaXMuX3VzZXIpIHtcbiAgICAgIHRoaXMuX3VzZXIgPSBPYmplY3QuYXNzaWduKDxVc2VyPnt9LCB0aGlzLmdldChVU0VSX0tFWSkpO1xuICAgICAgdGhpcy5zZXQoVVNFUl9LRVksIHRoaXMuX3VzZXIpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fdXNlcjtcbiAgfVxuXG4gIGdldCBub3RpZnkoKTogT2JzZXJ2YWJsZTxTZXR0aW5nc05vdGlmeT4ge1xuICAgIHJldHVybiB0aGlzLm5vdGlmeSQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBzZXRMYXlvdXQobmFtZTogc3RyaW5nIHwgTGF5b3V0LCB2YWx1ZT86IGFueSk6IGJvb2xlYW4ge1xuICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMubGF5b3V0W25hbWVdID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2xheW91dCA9IG5hbWU7XG4gICAgfVxuICAgIHRoaXMuc2V0KExBWU9VVF9LRVksIHRoaXMuX2xheW91dCk7XG4gICAgdGhpcy5ub3RpZnkkLm5leHQoeyB0eXBlOiAnbGF5b3V0JywgbmFtZSwgdmFsdWUgfSBhcyBhbnkpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgc2V0QXBwKHZhbHVlOiBBcHApIHtcbiAgICB0aGlzLl9hcHAgPSB2YWx1ZTtcbiAgICB0aGlzLnNldChBUFBfS0VZLCB2YWx1ZSk7XG4gICAgdGhpcy5ub3RpZnkkLm5leHQoeyB0eXBlOiAnYXBwJywgdmFsdWUgfSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBzZXRVc2VyKHZhbHVlOiBVc2VyKSB7XG4gICAgdGhpcy5fdXNlciA9IHZhbHVlO1xuICAgIHRoaXMuc2V0KFVTRVJfS0VZLCB2YWx1ZSk7XG4gICAgdGhpcy5ub3RpZnkkLm5leHQoeyB0eXBlOiAndXNlcicsIHZhbHVlIH0pO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iXX0=