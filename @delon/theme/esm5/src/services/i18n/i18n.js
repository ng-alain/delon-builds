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
 * - `params` 模板所需要的参数对象
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi90aGVtZS8iLCJzb3VyY2VzIjpbInNyYy9zZXJ2aWNlcy9pMThuL2kxOG4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNELE9BQU8sRUFBYyxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEJ4QyxXQUFhLGdCQUFnQixHQUFHLElBQUksY0FBYyxDQUNoRCxzQkFBc0IsQ0FDdkIsQ0FBQzs7O3VCQUlrQixJQUFJLGVBQWUsQ0FBUyxJQUFJLENBQUM7O0lBRW5ELHNCQUFJLHdDQUFNOzs7O1FBQVY7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsSUFBSSxJQUFJLEVBQVQsQ0FBUyxDQUFDLENBQUMsQ0FBQztTQUNqRTs7O09BQUE7Ozs7O0lBRUQsa0NBQUc7Ozs7SUFBSCxVQUFJLElBQVk7UUFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN6Qjs7OztJQUVELHVDQUFROzs7SUFBUjtRQUNFLE9BQU8sRUFBRSxDQUFDO0tBQ1g7Ozs7O0lBRUQsb0NBQUs7Ozs7SUFBTCxVQUFNLEdBQVc7UUFDZixPQUFPLEdBQUcsQ0FBQztLQUNaOztnQkFsQkYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OytCQXBDbEM7O1NBcUNhLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuZXhwb3J0IGludGVyZmFjZSBBbGFpbkkxOE5TZXJ2aWNlIHtcbiAgW2tleTogc3RyaW5nXTogYW55O1xuXG4gIC8qKlxuICAgKiDlj5jmm7Tor63oqIBcbiAgICogQHBhcmFtIGxhbmcg6K+t6KiA5Luj56CBXG4gICAqIEBwYXJhbSBlbWl0IOaYr+WQpuinpuWPkSBgY2hhbmdlYO+8jOm7mOiupO+8mnRydWVcbiAgICovXG4gIHVzZShsYW5nOiBzdHJpbmcsIGVtaXQ/OiBib29sZWFuKTogdm9pZDtcblxuICAvKipcbiAgICog6L+U5Zue5b2T5YmN6K+t6KiA5YiX6KGoXG4gICAqL1xuICBnZXRMYW5ncygpOiBhbnlbXTtcblxuICAvKipcbiAgICog57+76K+RXG4gICAqIC0gYHBhcmFtc2Ag5qih5p2/5omA6ZyA6KaB55qE5Y+C5pWw5a+56LGhXG4gICAqIC0gYGlzU2FmZWAg5piv5ZCm6L+U5Zue5a6J5YWo5a2X56ym77yM6Ieq5Yqo6LCD55SoIGBieXBhc3NTZWN1cml0eVRydXN0SHRtbGBcbiAgICovXG4gIGZhbnlpKGtleTogc3RyaW5nLCBwYXJhbXM/OiBPYmplY3QsIGlzU2FmZT86IGJvb2xlYW4pOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIOiwg+eUqCBgdXNlYCDop6blj5Hlj5jmm7TpgJrnn6VcbiAgICovXG4gIHJlYWRvbmx5IGNoYW5nZTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xufVxuXG5leHBvcnQgY29uc3QgQUxBSU5fSTE4Tl9UT0tFTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxBbGFpbkkxOE5TZXJ2aWNlPihcbiAgJ2FsYWluVHJhbnNsYXRvclRva2VuJyxcbik7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQWxhaW5JMThOU2VydmljZUZha2UgaW1wbGVtZW50cyBBbGFpbkkxOE5TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBjaGFuZ2UkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KG51bGwpO1xuXG4gIGdldCBjaGFuZ2UoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UkLmFzT2JzZXJ2YWJsZSgpLnBpcGUoZmlsdGVyKHcgPT4gdyAhPSBudWxsKSk7XG4gIH1cblxuICB1c2UobGFuZzogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5jaGFuZ2UkLm5leHQobGFuZyk7XG4gIH1cblxuICBnZXRMYW5ncygpOiBhbnlbXSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgZmFueWkoa2V5OiBzdHJpbmcpIHtcbiAgICByZXR1cm4ga2V5O1xuICB9XG59XG4iXX0=