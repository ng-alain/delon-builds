/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { InjectionToken, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import * as i0 from "@angular/core";
/**
 * @record
 */
export function AlainI18NService() { }
/* TODO: handle strange member:
[key: string]: any;
*/
/** @type {?} */
AlainI18NService.prototype.use;
/** @type {?} */
AlainI18NService.prototype.getLangs;
/** @type {?} */
AlainI18NService.prototype.fanyi;
/** @type {?} */
AlainI18NService.prototype.change;
/** @type {?} */
export var ALAIN_I18N_TOKEN = new InjectionToken('alainTranslatorToken');
var AlainI18NServiceFake = /** @class */ (function () {
    function AlainI18NServiceFake() {
        this.change$ = new BehaviorSubject(null);
    }
    Object.defineProperty(AlainI18NServiceFake.prototype, "change", {
        get: /**
         * @return {?}
         */
        function () {
            return this.change$.asObservable().pipe(filter(function (w) { return w != null; }));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} lang
     * @return {?}
     */
    AlainI18NServiceFake.prototype.use = /**
     * @param {?} lang
     * @return {?}
     */
    function (lang) {
        this.change$.next(lang);
    };
    /**
     * @return {?}
     */
    AlainI18NServiceFake.prototype.getLangs = /**
     * @return {?}
     */
    function () {
        return [];
    };
    /**
     * @param {?} key
     * @return {?}
     */
    AlainI18NServiceFake.prototype.fanyi = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return key;
    };
    AlainI18NServiceFake.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ AlainI18NServiceFake.ngInjectableDef = i0.defineInjectable({ factory: function AlainI18NServiceFake_Factory() { return new AlainI18NServiceFake(); }, token: AlainI18NServiceFake, providedIn: "root" });
    return AlainI18NServiceFake;
}());
export { AlainI18NServiceFake };
if (false) {
    /** @type {?} */
    AlainI18NServiceFake.prototype.change$;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi90aGVtZS8iLCJzb3VyY2VzIjpbInNyYy9zZXJ2aWNlcy9pMThuL2kxOG4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNELE9BQU8sRUFBYyxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjeEMsV0FBYSxnQkFBZ0IsR0FBRyxJQUFJLGNBQWMsQ0FDaEQsc0JBQXNCLENBQ3ZCLENBQUM7Ozt1QkFJa0IsSUFBSSxlQUFlLENBQVMsSUFBSSxDQUFDOztJQUVuRCxzQkFBSSx3Q0FBTTs7OztRQUFWO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLElBQUksSUFBSSxFQUFULENBQVMsQ0FBQyxDQUFDLENBQUM7U0FDakU7OztPQUFBOzs7OztJQUVELGtDQUFHOzs7O0lBQUgsVUFBSSxJQUFZO1FBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDekI7Ozs7SUFFRCx1Q0FBUTs7O0lBQVI7UUFDRSxPQUFPLEVBQUUsQ0FBQztLQUNYOzs7OztJQUVELG9DQUFLOzs7O0lBQUwsVUFBTSxHQUFXO1FBQ2YsT0FBTyxHQUFHLENBQUM7S0FDWjs7Z0JBbEJGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7OzsrQkFwQmxDOztTQXFCYSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBbGFpbkkxOE5TZXJ2aWNlIHtcclxuICBba2V5OiBzdHJpbmddOiBhbnk7XHJcblxyXG4gIHVzZShsYW5nOiBzdHJpbmcpOiB2b2lkO1xyXG5cclxuICBnZXRMYW5ncygpOiBhbnlbXTtcclxuXHJcbiAgZmFueWkoa2V5OiBzdHJpbmcpOiBhbnk7XHJcblxyXG4gIHJlYWRvbmx5IGNoYW5nZTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQUxBSU5fSTE4Tl9UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxBbGFpbkkxOE5TZXJ2aWNlPihcclxuICAnYWxhaW5UcmFuc2xhdG9yVG9rZW4nLFxyXG4pO1xyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIEFsYWluSTE4TlNlcnZpY2VGYWtlIGltcGxlbWVudHMgQWxhaW5JMThOU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBjaGFuZ2UkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KG51bGwpO1xyXG5cclxuICBnZXQgY2hhbmdlKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XHJcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UkLmFzT2JzZXJ2YWJsZSgpLnBpcGUoZmlsdGVyKHcgPT4gdyAhPSBudWxsKSk7XHJcbiAgfVxyXG5cclxuICB1c2UobGFuZzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLmNoYW5nZSQubmV4dChsYW5nKTtcclxuICB9XHJcblxyXG4gIGdldExhbmdzKCk6IGFueVtdIHtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcblxyXG4gIGZhbnlpKGtleTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4ga2V5O1xyXG4gIH1cclxufVxyXG4iXX0=