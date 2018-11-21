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
/**
 * 变更语言
 * \@param lang 语言代码
 * \@param emit 是否触发 `change`，默认：true
 * @type {?}
 */
AlainI18NService.prototype.use;
/**
 * 返回当前语言列表
 * @type {?}
 */
AlainI18NService.prototype.getLangs;
/**
 * 翻译
 * - `interpolateParams` 模板所需要的参数对象
 * - `isSafe` 是否返回安全字符，自动调用 `bypassSecurityTrustHtml`
 * @type {?}
 */
AlainI18NService.prototype.fanyi;
/**
 * 调用 `use` 触发变更通知
 * @type {?}
 */
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi90aGVtZS8iLCJzb3VyY2VzIjpbInNyYy9zZXJ2aWNlcy9pMThuL2kxOG4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNELE9BQU8sRUFBYyxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEJ4QyxXQUFhLGdCQUFnQixHQUFHLElBQUksY0FBYyxDQUNoRCxzQkFBc0IsQ0FDdkIsQ0FBQzs7O3VCQUlrQixJQUFJLGVBQWUsQ0FBUyxJQUFJLENBQUM7O0lBRW5ELHNCQUFJLHdDQUFNOzs7O1FBQVY7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsSUFBSSxJQUFJLEVBQVQsQ0FBUyxDQUFDLENBQUMsQ0FBQztTQUNqRTs7O09BQUE7Ozs7O0lBRUQsa0NBQUc7Ozs7SUFBSCxVQUFJLElBQVk7UUFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN6Qjs7OztJQUVELHVDQUFROzs7SUFBUjtRQUNFLE9BQU8sRUFBRSxDQUFDO0tBQ1g7Ozs7O0lBRUQsb0NBQUs7Ozs7SUFBTCxVQUFNLEdBQVc7UUFDZixPQUFPLEdBQUcsQ0FBQztLQUNaOztnQkFsQkYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OytCQXBDbEM7O1NBcUNhLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IGludGVyZmFjZSBBbGFpbkkxOE5TZXJ2aWNlIHtcbiAgW2tleTogc3RyaW5nXTogYW55O1xuXG4gIC8qKlxuICAgKiDlj5jmm7Tor63oqIBcbiAgICogQHBhcmFtIGxhbmcg6K+t6KiA5Luj56CBXG4gICAqIEBwYXJhbSBlbWl0IOaYr+WQpuinpuWPkSBgY2hhbmdlYO+8jOm7mOiupO+8mnRydWVcbiAgICovXG4gIHVzZShsYW5nOiBzdHJpbmcsIGVtaXQ/OiBib29sZWFuKTogdm9pZDtcblxuICAvKipcbiAgICog6L+U5Zue5b2T5YmN6K+t6KiA5YiX6KGoXG4gICAqL1xuICBnZXRMYW5ncygpOiBhbnlbXTtcblxuICAvKipcbiAgICog57+76K+RXG4gICAqIC0gYGludGVycG9sYXRlUGFyYW1zYCDmqKHmnb/miYDpnIDopoHnmoTlj4LmlbDlr7nosaFcbiAgICogLSBgaXNTYWZlYCDmmK/lkKbov5Tlm57lronlhajlrZfnrKbvvIzoh6rliqjosIPnlKggYGJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sYFxuICAgKi9cbiAgZmFueWkoa2V5OiBzdHJpbmcsIGludGVycG9sYXRlUGFyYW1zPzogT2JqZWN0LCBpc1NhZmU/OiBib29sZWFuKTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiDosIPnlKggYHVzZWAg6Kem5Y+R5Y+Y5pu06YCa55+lXG4gICAqL1xuICByZWFkb25seSBjaGFuZ2U6IE9ic2VydmFibGU8c3RyaW5nPjtcbn1cblxuZXhwb3J0IGNvbnN0IEFMQUlOX0kxOE5fVE9LRU4gPSBuZXcgSW5qZWN0aW9uVG9rZW48QWxhaW5JMThOU2VydmljZT4oXG4gICdhbGFpblRyYW5zbGF0b3JUb2tlbicsXG4pO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEFsYWluSTE4TlNlcnZpY2VGYWtlIGltcGxlbWVudHMgQWxhaW5JMThOU2VydmljZSB7XG4gIHByaXZhdGUgY2hhbmdlJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPihudWxsKTtcblxuICBnZXQgY2hhbmdlKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlJC5hc09ic2VydmFibGUoKS5waXBlKGZpbHRlcih3ID0+IHcgIT0gbnVsbCkpO1xuICB9XG5cbiAgdXNlKGxhbmc6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuY2hhbmdlJC5uZXh0KGxhbmcpO1xuICB9XG5cbiAgZ2V0TGFuZ3MoKTogYW55W10ge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGZhbnlpKGtleTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGtleTtcbiAgfVxufVxuIl19