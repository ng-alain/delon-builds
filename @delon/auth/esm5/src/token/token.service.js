/**
 * @fileoverview added by tsickle
 * Generated from: src/token/token.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { inject, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { share } from 'rxjs/operators';
import { DelonAuthConfig } from '../auth.config';
import { DA_STORE_TOKEN } from '../store/interface';
/**
 * @return {?}
 */
export function DA_SERVICE_TOKEN_FACTORY() {
    return new TokenService(inject(DelonAuthConfig), inject(DA_STORE_TOKEN));
}
/**
 * 维护Token信息服务，[在线文档](https://ng-alain.com/auth)
 */
var TokenService = /** @class */ (function () {
    function TokenService(options, store) {
        this.options = options;
        this.store = store;
        this.change$ = new BehaviorSubject(null);
        this._referrer = {};
    }
    Object.defineProperty(TokenService.prototype, "login_url", {
        /**
         * 授权失败后跳转路由路径（支持外部链接地址），通过设置全局 `DelonAuthConfig.login_url` 来改变
         */
        get: /**
         * 授权失败后跳转路由路径（支持外部链接地址），通过设置全局 `DelonAuthConfig.login_url` 来改变
         * @return {?}
         */
        function () {
            return this.options.login_url;
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
        return this.store.set((/** @type {?} */ (this.options.store_key)), data);
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
        var data = this.store.get((/** @type {?} */ (this.options.store_key)));
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
            this.store.remove((/** @type {?} */ (this.options.store_key)));
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
        { type: DelonAuthConfig },
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
    TokenService.prototype.options;
    /**
     * @type {?}
     * @private
     */
    TokenService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hdXRoLyIsInNvdXJjZXMiOlsic3JjL3Rva2VuL3Rva2VuLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFFLGNBQWMsRUFBVSxNQUFNLG9CQUFvQixDQUFDOzs7O0FBRzVELE1BQU0sVUFBVSx3QkFBd0I7SUFDdEMsT0FBTyxJQUFJLFlBQVksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLEVBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7QUFDM0UsQ0FBQzs7OztBQUtEO0lBSUUsc0JBQW9CLE9BQXdCLEVBQWtDLEtBQWE7UUFBdkUsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFBa0MsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUhuRixZQUFPLEdBQUcsSUFBSSxlQUFlLENBQXFCLElBQUksQ0FBQyxDQUFDO1FBQ3hELGNBQVMsR0FBaUIsRUFBRSxDQUFDO0lBRXlELENBQUM7SUFLL0Ysc0JBQUksbUNBQVM7UUFIYjs7V0FFRzs7Ozs7UUFDSDtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7UUFDaEMsQ0FBQzs7O09BQUE7SUFLRCxzQkFBSSxrQ0FBUTtRQUhaOztXQUVHOzs7OztRQUNIO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3hCLENBQUM7OztPQUFBO0lBRUQ7O09BRUc7Ozs7OztJQUNILDBCQUFHOzs7OztJQUFILFVBQUksSUFBaUI7UUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxtQkFBQSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7OztJQWNELDBCQUFHOzs7OztJQUFILFVBQTJCLElBQWtCOztZQUNyQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsbUJBQUEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUMsQ0FBQztRQUNwRCxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBQSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFBLElBQUksRUFBSyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVEOzs7Ozs7OztPQVFHOzs7Ozs7Ozs7Ozs7SUFDSCw0QkFBSzs7Ozs7Ozs7Ozs7SUFBTCxVQUFNLE9BQXNEO1FBQXRELHdCQUFBLEVBQUEsWUFBb0MsU0FBUyxFQUFFLEtBQUssRUFBRTs7WUFDdEQsSUFBSSxHQUF1QixJQUFJO1FBQ25DLElBQUksT0FBTyxDQUFDLFNBQVMsS0FBSyxJQUFJLEVBQUU7WUFDOUIsSUFBSSxHQUFHLG1CQUFBLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBZSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1lBQ2hCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEI7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLG1CQUFBLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFDLENBQUMsQ0FBQztTQUM1QztRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCw2QkFBTTs7OztJQUFOO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7OztnQkFsRk0sZUFBZTtnREFleUIsTUFBTSxTQUFDLGNBQWM7O0lBb0V0RSxtQkFBQztDQUFBLEFBeEVELElBd0VDO1NBeEVZLFlBQVk7Ozs7OztJQUN2QiwrQkFBZ0U7Ozs7O0lBQ2hFLGlDQUFxQzs7Ozs7SUFFekIsK0JBQWdDOzs7OztJQUFFLDZCQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHNoYXJlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRGVsb25BdXRoQ29uZmlnIH0gZnJvbSAnLi4vYXV0aC5jb25maWcnO1xuaW1wb3J0IHsgREFfU1RPUkVfVE9LRU4sIElTdG9yZSB9IGZyb20gJy4uL3N0b3JlL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBBdXRoUmVmZXJyZXIsIElUb2tlbk1vZGVsLCBJVG9rZW5TZXJ2aWNlIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gREFfU0VSVklDRV9UT0tFTl9GQUNUT1JZKCk6IElUb2tlblNlcnZpY2Uge1xuICByZXR1cm4gbmV3IFRva2VuU2VydmljZShpbmplY3QoRGVsb25BdXRoQ29uZmlnKSwgaW5qZWN0KERBX1NUT1JFX1RPS0VOKSk7XG59XG5cbi8qKlxuICog57u05oqkVG9rZW7kv6Hmga/mnI3liqHvvIxb5Zyo57q/5paH5qGjXShodHRwczovL25nLWFsYWluLmNvbS9hdXRoKVxuICovXG5leHBvcnQgY2xhc3MgVG9rZW5TZXJ2aWNlIGltcGxlbWVudHMgSVRva2VuU2VydmljZSB7XG4gIHByaXZhdGUgY2hhbmdlJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8SVRva2VuTW9kZWwgfCBudWxsPihudWxsKTtcbiAgcHJpdmF0ZSBfcmVmZXJyZXI6IEF1dGhSZWZlcnJlciA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgb3B0aW9uczogRGVsb25BdXRoQ29uZmlnLCBASW5qZWN0KERBX1NUT1JFX1RPS0VOKSBwcml2YXRlIHN0b3JlOiBJU3RvcmUpIHt9XG5cbiAgLyoqXG4gICAqIOaOiOadg+Wksei0peWQjui3s+i9rOi3r+eUsei3r+W+hO+8iOaUr+aMgeWklumDqOmTvuaOpeWcsOWdgO+8ie+8jOmAmui/h+iuvue9ruWFqOWxgCBgRGVsb25BdXRoQ29uZmlnLmxvZ2luX3VybGAg5p2l5pS55Y+YXG4gICAqL1xuICBnZXQgbG9naW5fdXJsKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5sb2dpbl91cmw7XG4gIH1cblxuICAvKipcbiAgICog5b2T5YmN6K+35rGC6aG16Z2i55qE5p2l5rqQ6aG16Z2i55qE5Zyw5Z2AXG4gICAqL1xuICBnZXQgcmVmZXJyZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlZmVycmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIOiuvue9riBUb2tlbiDkv6Hmga9cbiAgICovXG4gIHNldChkYXRhOiBJVG9rZW5Nb2RlbCk6IGJvb2xlYW4ge1xuICAgIHRoaXMuY2hhbmdlJC5uZXh0KGRhdGEpO1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnNldCh0aGlzLm9wdGlvbnMuc3RvcmVfa2V5ISwgZGF0YSk7XG4gIH1cblxuICAvKipcbiAgICog6I635Y+WIFRva2VuIOS/oeaBr++8jOS+i+Wmgu+8mlxuICAgKiBgYGBcbiAgICogLy8g6L+U5ZueIGBhbnlgIOexu+WeiyBUb2tlbiDlr7nosaFcbiAgICogY29uc3QgdG9rZW4gPSB0b2tlblNlcnZpY2UuZ2V0KCk7XG4gICAqIC8vIOiOt+WPliBKV1Qg57G75Z6L55qEIFRva2VuIOWvueixoVxuICAgKiBjb25zdCB0b2tlbiA9IHRva2VuU2VydmljZS5nZXQ8SldUVG9rZW5Nb2RlbD4oSldUVG9rZW5Nb2RlbCk7XG4gICAqIC8vIOiOt+WPliBTaW1wbGUg57G75Z6L55qEIFRva2VuIOWvueixoVxuICAgKiBjb25zdCB0b2tlbiA9IHRva2VuU2VydmljZS5nZXQ8U2ltcGxlVG9rZW5Nb2RlbD4oU2ltcGxlVG9rZW5Nb2RlbCk7XG4gICAqIGBgYFxuICAgKi9cbiAgZ2V0KHR5cGU/OiBhbnkpOiBhbnk7XG4gIGdldDxUIGV4dGVuZHMgSVRva2VuTW9kZWw+KHR5cGU/OiBuZXcgKCkgPT4gVCk6IFQge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLnN0b3JlLmdldCh0aGlzLm9wdGlvbnMuc3RvcmVfa2V5ISk7XG4gICAgcmV0dXJuIHR5cGUgPyAoT2JqZWN0LmFzc2lnbihuZXcgdHlwZSgpLCBkYXRhKSBhcyBUKSA6IChkYXRhIGFzIFQpO1xuICB9XG5cbiAgLyoqXG4gICAqIOa4hemZpCBUb2tlbiDkv6Hmga/vvIzkvovlpoLvvJpcbiAgICogYGBgXG4gICAqIC8vIOa4hemZpOaJgOaciSBUb2tlbiDkv6Hmga9cbiAgICogdG9rZW5TZXJ2aWNlLmNsZWFyKCk7XG4gICAqIC8vIOWPqua4hemZpCB0b2tlbiDlrZfmrrVcbiAgICogdG9rZW5TZXJ2aWNlLmNsZWFyKHsgb25seVRva2VuOiB0cnVlIH0pO1xuICAgKiBgYGBcbiAgICovXG4gIGNsZWFyKG9wdGlvbnM6IHsgb25seVRva2VuOiBib29sZWFuIH0gPSB7IG9ubHlUb2tlbjogZmFsc2UgfSkge1xuICAgIGxldCBkYXRhOiBJVG9rZW5Nb2RlbCB8IG51bGwgPSBudWxsO1xuICAgIGlmIChvcHRpb25zLm9ubHlUb2tlbiA9PT0gdHJ1ZSkge1xuICAgICAgZGF0YSA9IHRoaXMuZ2V0KCkgYXMgSVRva2VuTW9kZWw7XG4gICAgICBkYXRhLnRva2VuID0gYGA7XG4gICAgICB0aGlzLnNldChkYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdG9yZS5yZW1vdmUodGhpcy5vcHRpb25zLnN0b3JlX2tleSEpO1xuICAgIH1cbiAgICB0aGlzLmNoYW5nZSQubmV4dChkYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDorqLpmIUgVG9rZW4g5a+56LGh5Y+Y5pu06YCa55+lXG4gICAqL1xuICBjaGFuZ2UoKTogT2JzZXJ2YWJsZTxJVG9rZW5Nb2RlbCB8IG51bGw+IHtcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UkLnBpcGUoc2hhcmUoKSk7XG4gIH1cbn1cbiJdfQ==