/**
 * @fileoverview added by tsickle
 * Generated from: src/token/token.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { inject, Inject } from '@angular/core';
import { AlainConfigService } from '@delon/util';
import { BehaviorSubject } from 'rxjs';
import { share } from 'rxjs/operators';
import { mergeConfig } from '../auth.config';
import { DA_STORE_TOKEN } from '../store/interface';
/**
 * @return {?}
 */
export function DA_SERVICE_TOKEN_FACTORY() {
    return new TokenService(inject(AlainConfigService), inject(DA_STORE_TOKEN));
}
/**
 * 维护Token信息服务，[在线文档](https://ng-alain.com/auth)
 */
var TokenService = /** @class */ (function () {
    function TokenService(configSrv, store) {
        this.store = store;
        this.change$ = new BehaviorSubject(null);
        this._referrer = {};
        this._options = mergeConfig(configSrv);
    }
    Object.defineProperty(TokenService.prototype, "login_url", {
        /**
         * 授权失败后跳转路由路径（支持外部链接地址），通过设置[全局配置](https://ng-alain.com/docs/global-config)来改变
         */
        get: /**
         * 授权失败后跳转路由路径（支持外部链接地址），通过设置[全局配置](https://ng-alain.com/docs/global-config)来改变
         * @return {?}
         */
        function () {
            return this._options.login_url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TokenService.prototype, "referrer", {
        /**
         * 当前请求页面的来源页面的地址
         */
        get: /**
         * 当前请求页面的来源页面的地址
         * @return {?}
         */
        function () {
            return this._referrer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TokenService.prototype, "options", {
        get: /**
         * @return {?}
         */
        function () {
            return this._options;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 设置 Token 信息
     */
    /**
     * 设置 Token 信息
     * @param {?} data
     * @return {?}
     */
    TokenService.prototype.set = /**
     * 设置 Token 信息
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.change$.next(data);
        return this.store.set((/** @type {?} */ (this._options.store_key)), data);
    };
    /**
     * @template T
     * @param {?=} type
     * @return {?}
     */
    TokenService.prototype.get = /**
     * @template T
     * @param {?=} type
     * @return {?}
     */
    function (type) {
        /** @type {?} */
        var data = this.store.get((/** @type {?} */ (this._options.store_key)));
        return type ? ((/** @type {?} */ (Object.assign(new type(), data)))) : ((/** @type {?} */ (data)));
    };
    /**
     * 清除 Token 信息，例如：
     * ```
     * // 清除所有 Token 信息
     * tokenService.clear();
     * // 只清除 token 字段
     * tokenService.clear({ onlyToken: true });
     * ```
     */
    /**
     * 清除 Token 信息，例如：
     * ```
     * // 清除所有 Token 信息
     * tokenService.clear();
     * // 只清除 token 字段
     * tokenService.clear({ onlyToken: true });
     * ```
     * @param {?=} options
     * @return {?}
     */
    TokenService.prototype.clear = /**
     * 清除 Token 信息，例如：
     * ```
     * // 清除所有 Token 信息
     * tokenService.clear();
     * // 只清除 token 字段
     * tokenService.clear({ onlyToken: true });
     * ```
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        if (options === void 0) { options = { onlyToken: false }; }
        /** @type {?} */
        var data = null;
        if (options.onlyToken === true) {
            data = (/** @type {?} */ (this.get()));
            data.token = "";
            this.set(data);
        }
        else {
            this.store.remove((/** @type {?} */ (this._options.store_key)));
        }
        this.change$.next(data);
    };
    /**
     * 订阅 Token 对象变更通知
     */
    /**
     * 订阅 Token 对象变更通知
     * @return {?}
     */
    TokenService.prototype.change = /**
     * 订阅 Token 对象变更通知
     * @return {?}
     */
    function () {
        return this.change$.pipe(share());
    };
    /** @nocollapse */
    TokenService.ctorParameters = function () { return [
        { type: AlainConfigService },
        { type: undefined, decorators: [{ type: Inject, args: [DA_STORE_TOKEN,] }] }
    ]; };
    return TokenService;
}());
export { TokenService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    TokenService.prototype.change$;
    /**
     * @type {?}
     * @private
     */
    TokenService.prototype._referrer;
    /**
     * @type {?}
     * @private
     */
    TokenService.prototype._options;
    /**
     * @type {?}
     * @private
     */
    TokenService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hdXRoLyIsInNvdXJjZXMiOlsic3JjL3Rva2VuL3Rva2VuLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvQyxPQUFPLEVBQW1CLGtCQUFrQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsY0FBYyxFQUFVLE1BQU0sb0JBQW9CLENBQUM7Ozs7QUFHNUQsTUFBTSxVQUFVLHdCQUF3QjtJQUN0QyxPQUFPLElBQUksWUFBWSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0FBQzlFLENBQUM7Ozs7QUFLRDtJQUtFLHNCQUFZLFNBQTZCLEVBQWtDLEtBQWE7UUFBYixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBSmhGLFlBQU8sR0FBRyxJQUFJLGVBQWUsQ0FBcUIsSUFBSSxDQUFDLENBQUM7UUFDeEQsY0FBUyxHQUFpQixFQUFFLENBQUM7UUFJbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUtELHNCQUFJLG1DQUFTO1FBSGI7O1dBRUc7Ozs7O1FBQ0g7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDO1FBQ2pDLENBQUM7OztPQUFBO0lBS0Qsc0JBQUksa0NBQVE7UUFIWjs7V0FFRzs7Ozs7UUFDSDtZQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN4QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGlDQUFPOzs7O1FBQVg7WUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7SUFFRDs7T0FFRzs7Ozs7O0lBQ0gsMEJBQUc7Ozs7O0lBQUgsVUFBSSxJQUFpQjtRQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLG1CQUFBLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7Ozs7O0lBY0QsMEJBQUc7Ozs7O0lBQUgsVUFBMkIsSUFBa0I7O1lBQ3JDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxtQkFBQSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBQyxDQUFDO1FBQ3JELE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFBLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQUEsSUFBSSxFQUFLLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7Ozs7Ozs7Ozs7OztJQUNILDRCQUFLOzs7Ozs7Ozs7OztJQUFMLFVBQU0sT0FBc0Q7UUFBdEQsd0JBQUEsRUFBQSxZQUFvQyxTQUFTLEVBQUUsS0FBSyxFQUFFOztZQUN0RCxJQUFJLEdBQXVCLElBQUk7UUFDbkMsSUFBSSxPQUFPLENBQUMsU0FBUyxLQUFLLElBQUksRUFBRTtZQUM5QixJQUFJLEdBQUcsbUJBQUEsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFlLENBQUM7WUFDakMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7WUFDaEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNoQjthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsbUJBQUEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUMsQ0FBQyxDQUFDO1NBQzdDO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILDZCQUFNOzs7O0lBQU47UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7O2dCQTVGdUIsa0JBQWtCO2dEQW1CRSxNQUFNLFNBQUMsY0FBYzs7SUEwRW5FLG1CQUFDO0NBQUEsQUEvRUQsSUErRUM7U0EvRVksWUFBWTs7Ozs7O0lBQ3ZCLCtCQUFnRTs7Ozs7SUFDaEUsaUNBQXFDOzs7OztJQUNyQyxnQ0FBa0M7Ozs7O0lBRVMsNkJBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFsYWluQXV0aENvbmZpZywgQWxhaW5Db25maWdTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzaGFyZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IG1lcmdlQ29uZmlnIH0gZnJvbSAnLi4vYXV0aC5jb25maWcnO1xuaW1wb3J0IHsgREFfU1RPUkVfVE9LRU4sIElTdG9yZSB9IGZyb20gJy4uL3N0b3JlL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBBdXRoUmVmZXJyZXIsIElUb2tlbk1vZGVsLCBJVG9rZW5TZXJ2aWNlIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gREFfU0VSVklDRV9UT0tFTl9GQUNUT1JZKCk6IElUb2tlblNlcnZpY2Uge1xuICByZXR1cm4gbmV3IFRva2VuU2VydmljZShpbmplY3QoQWxhaW5Db25maWdTZXJ2aWNlKSwgaW5qZWN0KERBX1NUT1JFX1RPS0VOKSk7XG59XG5cbi8qKlxuICog57u05oqkVG9rZW7kv6Hmga/mnI3liqHvvIxb5Zyo57q/5paH5qGjXShodHRwczovL25nLWFsYWluLmNvbS9hdXRoKVxuICovXG5leHBvcnQgY2xhc3MgVG9rZW5TZXJ2aWNlIGltcGxlbWVudHMgSVRva2VuU2VydmljZSB7XG4gIHByaXZhdGUgY2hhbmdlJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8SVRva2VuTW9kZWwgfCBudWxsPihudWxsKTtcbiAgcHJpdmF0ZSBfcmVmZXJyZXI6IEF1dGhSZWZlcnJlciA9IHt9O1xuICBwcml2YXRlIF9vcHRpb25zOiBBbGFpbkF1dGhDb25maWc7XG5cbiAgY29uc3RydWN0b3IoY29uZmlnU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UsIEBJbmplY3QoREFfU1RPUkVfVE9LRU4pIHByaXZhdGUgc3RvcmU6IElTdG9yZSkge1xuICAgIHRoaXMuX29wdGlvbnMgPSBtZXJnZUNvbmZpZyhjb25maWdTcnYpO1xuICB9XG5cbiAgLyoqXG4gICAqIOaOiOadg+Wksei0peWQjui3s+i9rOi3r+eUsei3r+W+hO+8iOaUr+aMgeWklumDqOmTvuaOpeWcsOWdgO+8ie+8jOmAmui/h+iuvue9rlvlhajlsYDphY3nva5dKGh0dHBzOi8vbmctYWxhaW4uY29tL2RvY3MvZ2xvYmFsLWNvbmZpZynmnaXmlLnlj5hcbiAgICovXG4gIGdldCBsb2dpbl91cmwoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9ucy5sb2dpbl91cmw7XG4gIH1cblxuICAvKipcbiAgICog5b2T5YmN6K+35rGC6aG16Z2i55qE5p2l5rqQ6aG16Z2i55qE5Zyw5Z2AXG4gICAqL1xuICBnZXQgcmVmZXJyZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlZmVycmVyO1xuICB9XG5cbiAgZ2V0IG9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX29wdGlvbnM7XG4gIH1cblxuICAvKipcbiAgICog6K6+572uIFRva2VuIOS/oeaBr1xuICAgKi9cbiAgc2V0KGRhdGE6IElUb2tlbk1vZGVsKTogYm9vbGVhbiB7XG4gICAgdGhpcy5jaGFuZ2UkLm5leHQoZGF0YSk7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuc2V0KHRoaXMuX29wdGlvbnMuc3RvcmVfa2V5ISwgZGF0YSk7XG4gIH1cblxuICAvKipcbiAgICog6I635Y+WIFRva2VuIOS/oeaBr++8jOS+i+Wmgu+8mlxuICAgKiBgYGBcbiAgICogLy8g6L+U5ZueIGBhbnlgIOexu+WeiyBUb2tlbiDlr7nosaFcbiAgICogY29uc3QgdG9rZW4gPSB0b2tlblNlcnZpY2UuZ2V0KCk7XG4gICAqIC8vIOiOt+WPliBKV1Qg57G75Z6L55qEIFRva2VuIOWvueixoVxuICAgKiBjb25zdCB0b2tlbiA9IHRva2VuU2VydmljZS5nZXQ8SldUVG9rZW5Nb2RlbD4oSldUVG9rZW5Nb2RlbCk7XG4gICAqIC8vIOiOt+WPliBTaW1wbGUg57G75Z6L55qEIFRva2VuIOWvueixoVxuICAgKiBjb25zdCB0b2tlbiA9IHRva2VuU2VydmljZS5nZXQ8U2ltcGxlVG9rZW5Nb2RlbD4oU2ltcGxlVG9rZW5Nb2RlbCk7XG4gICAqIGBgYFxuICAgKi9cbiAgZ2V0KHR5cGU/OiBhbnkpOiBhbnk7XG4gIGdldDxUIGV4dGVuZHMgSVRva2VuTW9kZWw+KHR5cGU/OiBuZXcgKCkgPT4gVCk6IFQge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLnN0b3JlLmdldCh0aGlzLl9vcHRpb25zLnN0b3JlX2tleSEpO1xuICAgIHJldHVybiB0eXBlID8gKE9iamVjdC5hc3NpZ24obmV3IHR5cGUoKSwgZGF0YSkgYXMgVCkgOiAoZGF0YSBhcyBUKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmuIXpmaQgVG9rZW4g5L+h5oGv77yM5L6L5aaC77yaXG4gICAqIGBgYFxuICAgKiAvLyDmuIXpmaTmiYDmnIkgVG9rZW4g5L+h5oGvXG4gICAqIHRva2VuU2VydmljZS5jbGVhcigpO1xuICAgKiAvLyDlj6rmuIXpmaQgdG9rZW4g5a2X5q61XG4gICAqIHRva2VuU2VydmljZS5jbGVhcih7IG9ubHlUb2tlbjogdHJ1ZSB9KTtcbiAgICogYGBgXG4gICAqL1xuICBjbGVhcihvcHRpb25zOiB7IG9ubHlUb2tlbjogYm9vbGVhbiB9ID0geyBvbmx5VG9rZW46IGZhbHNlIH0pIHtcbiAgICBsZXQgZGF0YTogSVRva2VuTW9kZWwgfCBudWxsID0gbnVsbDtcbiAgICBpZiAob3B0aW9ucy5vbmx5VG9rZW4gPT09IHRydWUpIHtcbiAgICAgIGRhdGEgPSB0aGlzLmdldCgpIGFzIElUb2tlbk1vZGVsO1xuICAgICAgZGF0YS50b2tlbiA9IGBgO1xuICAgICAgdGhpcy5zZXQoZGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RvcmUucmVtb3ZlKHRoaXMuX29wdGlvbnMuc3RvcmVfa2V5ISk7XG4gICAgfVxuICAgIHRoaXMuY2hhbmdlJC5uZXh0KGRhdGEpO1xuICB9XG5cbiAgLyoqXG4gICAqIOiuoumYhSBUb2tlbiDlr7nosaHlj5jmm7TpgJrnn6VcbiAgICovXG4gIGNoYW5nZSgpOiBPYnNlcnZhYmxlPElUb2tlbk1vZGVsIHwgbnVsbD4ge1xuICAgIHJldHVybiB0aGlzLmNoYW5nZSQucGlwZShzaGFyZSgpKTtcbiAgfVxufVxuIl19