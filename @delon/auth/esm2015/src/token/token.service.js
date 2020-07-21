/**
 * @fileoverview added by tsickle
 * Generated from: src/token/token.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
export class TokenService {
    /**
     * @param {?} configSrv
     * @param {?} store
     */
    constructor(configSrv, store) {
        this.store = store;
        this.change$ = new BehaviorSubject(null);
        this._referrer = {};
        this._options = mergeConfig(configSrv);
    }
    /**
     * 授权失败后跳转路由路径（支持外部链接地址），通过设置[全局配置](https://ng-alain.com/docs/global-config)来改变
     * @return {?}
     */
    get login_url() {
        return this._options.login_url;
    }
    /**
     * 当前请求页面的来源页面的地址
     * @return {?}
     */
    get referrer() {
        return this._referrer;
    }
    /**
     * @return {?}
     */
    get options() {
        return this._options;
    }
    /**
     * 设置 Token 信息，当用户 Token 发生变动时都需要调用此方法重新刷新
     * @param {?} data
     * @return {?}
     */
    set(data) {
        this.change$.next(data);
        return this.store.set((/** @type {?} */ (this._options.store_key)), data);
    }
    /**
     * @template T
     * @param {?=} type
     * @return {?}
     */
    get(type) {
        /** @type {?} */
        const data = this.store.get((/** @type {?} */ (this._options.store_key)));
        return type ? ((/** @type {?} */ (Object.assign(new type(), data)))) : ((/** @type {?} */ (data)));
    }
    /**
     * 清除 Token 信息，当用户退出登录时调用。
     * ```
     * // 清除所有 Token 信息
     * tokenService.clear();
     * // 只清除 token 字段
     * tokenService.clear({ onlyToken: true });
     * ```
     * @param {?=} options
     * @return {?}
     */
    clear(options = { onlyToken: false }) {
        /** @type {?} */
        let data = null;
        if (options.onlyToken === true) {
            data = (/** @type {?} */ (this.get()));
            data.token = ``;
            this.set(data);
        }
        else {
            this.store.remove((/** @type {?} */ (this._options.store_key)));
        }
        this.change$.next(data);
    }
    /**
     * 订阅 Token 对象变更通知
     * @return {?}
     */
    change() {
        return this.change$.pipe(share());
    }
}
/** @nocollapse */
TokenService.ctorParameters = () => [
    { type: AlainConfigService },
    { type: undefined, decorators: [{ type: Inject, args: [DA_STORE_TOKEN,] }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2F1dGgvc3JjL3Rva2VuL3Rva2VuLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvQyxPQUFPLEVBQW1CLGtCQUFrQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsY0FBYyxFQUFVLE1BQU0sb0JBQW9CLENBQUM7Ozs7QUFHNUQsTUFBTSxVQUFVLHdCQUF3QjtJQUN0QyxPQUFPLElBQUksWUFBWSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0FBQzlFLENBQUM7Ozs7QUFLRCxNQUFNLE9BQU8sWUFBWTs7Ozs7SUFLdkIsWUFBWSxTQUE2QixFQUFrQyxLQUFhO1FBQWIsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUpoRixZQUFPLEdBQUcsSUFBSSxlQUFlLENBQXFCLElBQUksQ0FBQyxDQUFDO1FBQ3hELGNBQVMsR0FBaUIsRUFBRSxDQUFDO1FBSW5DLElBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7O0lBS0QsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQztJQUNqQyxDQUFDOzs7OztJQUtELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7Ozs7OztJQUtELEdBQUcsQ0FBQyxJQUFpQjtRQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLG1CQUFBLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7Ozs7O0lBY0QsR0FBRyxDQUF3QixJQUFrQjs7Y0FDckMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLG1CQUFBLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFDLENBQUM7UUFDckQsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQUEsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBQSxJQUFJLEVBQUssQ0FBQyxDQUFDO0lBQ3JFLENBQUM7Ozs7Ozs7Ozs7OztJQVdELEtBQUssQ0FBQyxVQUFrQyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUU7O1lBQ3RELElBQUksR0FBdUIsSUFBSTtRQUNuQyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEtBQUssSUFBSSxFQUFFO1lBQzlCLElBQUksR0FBRyxtQkFBQSxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQWUsQ0FBQztZQUNqQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUNoQixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hCO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxtQkFBQSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBQyxDQUFDLENBQUM7U0FDN0M7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7OztJQUtELE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7OztZQTVGdUIsa0JBQWtCOzRDQW1CRSxNQUFNLFNBQUMsY0FBYzs7Ozs7OztJQUpqRSwrQkFBZ0U7Ozs7O0lBQ2hFLGlDQUFxQzs7Ozs7SUFDckMsZ0NBQWtDOzs7OztJQUVTLDZCQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbGFpbkF1dGhDb25maWcsIEFsYWluQ29uZmlnU2VydmljZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc2hhcmUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBtZXJnZUNvbmZpZyB9IGZyb20gJy4uL2F1dGguY29uZmlnJztcbmltcG9ydCB7IERBX1NUT1JFX1RPS0VOLCBJU3RvcmUgfSBmcm9tICcuLi9zdG9yZS9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQXV0aFJlZmVycmVyLCBJVG9rZW5Nb2RlbCwgSVRva2VuU2VydmljZSB9IGZyb20gJy4vaW50ZXJmYWNlJztcblxuZXhwb3J0IGZ1bmN0aW9uIERBX1NFUlZJQ0VfVE9LRU5fRkFDVE9SWSgpOiBJVG9rZW5TZXJ2aWNlIHtcbiAgcmV0dXJuIG5ldyBUb2tlblNlcnZpY2UoaW5qZWN0KEFsYWluQ29uZmlnU2VydmljZSksIGluamVjdChEQV9TVE9SRV9UT0tFTikpO1xufVxuXG4vKipcbiAqIOe7tOaKpFRva2Vu5L+h5oGv5pyN5Yqh77yMW+WcqOe6v+aWh+aho10oaHR0cHM6Ly9uZy1hbGFpbi5jb20vYXV0aClcbiAqL1xuZXhwb3J0IGNsYXNzIFRva2VuU2VydmljZSBpbXBsZW1lbnRzIElUb2tlblNlcnZpY2Uge1xuICBwcml2YXRlIGNoYW5nZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PElUb2tlbk1vZGVsIHwgbnVsbD4obnVsbCk7XG4gIHByaXZhdGUgX3JlZmVycmVyOiBBdXRoUmVmZXJyZXIgPSB7fTtcbiAgcHJpdmF0ZSBfb3B0aW9uczogQWxhaW5BdXRoQ29uZmlnO1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZ1NydjogQWxhaW5Db25maWdTZXJ2aWNlLCBASW5qZWN0KERBX1NUT1JFX1RPS0VOKSBwcml2YXRlIHN0b3JlOiBJU3RvcmUpIHtcbiAgICB0aGlzLl9vcHRpb25zID0gbWVyZ2VDb25maWcoY29uZmlnU3J2KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmjojmnYPlpLHotKXlkI7ot7Povazot6/nlLHot6/lvoTvvIjmlK/mjIHlpJbpg6jpk77mjqXlnLDlnYDvvInvvIzpgJrov4forr7nva5b5YWo5bGA6YWN572uXShodHRwczovL25nLWFsYWluLmNvbS9kb2NzL2dsb2JhbC1jb25maWcp5p2l5pS55Y+YXG4gICAqL1xuICBnZXQgbG9naW5fdXJsKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX29wdGlvbnMubG9naW5fdXJsO1xuICB9XG5cbiAgLyoqXG4gICAqIOW9k+WJjeivt+axgumhtemdoueahOadpea6kOmhtemdoueahOWcsOWdgFxuICAgKi9cbiAgZ2V0IHJlZmVycmVyKCkge1xuICAgIHJldHVybiB0aGlzLl9yZWZlcnJlcjtcbiAgfVxuXG4gIGdldCBvcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLl9vcHRpb25zO1xuICB9XG5cbiAgLyoqXG4gICAqIOiuvue9riBUb2tlbiDkv6Hmga/vvIzlvZPnlKjmiLcgVG9rZW4g5Y+R55Sf5Y+Y5Yqo5pe26YO96ZyA6KaB6LCD55So5q2k5pa55rOV6YeN5paw5Yi35pawXG4gICAqL1xuICBzZXQoZGF0YTogSVRva2VuTW9kZWwpOiBib29sZWFuIHtcbiAgICB0aGlzLmNoYW5nZSQubmV4dChkYXRhKTtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5zZXQodGhpcy5fb3B0aW9ucy5zdG9yZV9rZXkhLCBkYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDojrflj5YgVG9rZW4g5L+h5oGv77yM5L6L5aaC77yaXG4gICAqIGBgYFxuICAgKiAvLyDov5Tlm54gYGFueWAg57G75Z6LIFRva2VuIOWvueixoVxuICAgKiBjb25zdCB0b2tlbiA9IHRva2VuU2VydmljZS5nZXQoKTtcbiAgICogLy8g6I635Y+WIEpXVCDnsbvlnovnmoQgVG9rZW4g5a+56LGhXG4gICAqIGNvbnN0IHRva2VuID0gdG9rZW5TZXJ2aWNlLmdldDxKV1RUb2tlbk1vZGVsPihKV1RUb2tlbk1vZGVsKTtcbiAgICogLy8g6I635Y+WIFNpbXBsZSDnsbvlnovnmoQgVG9rZW4g5a+56LGhXG4gICAqIGNvbnN0IHRva2VuID0gdG9rZW5TZXJ2aWNlLmdldDxTaW1wbGVUb2tlbk1vZGVsPihTaW1wbGVUb2tlbk1vZGVsKTtcbiAgICogYGBgXG4gICAqL1xuICBnZXQodHlwZT86IGFueSk6IGFueTtcbiAgZ2V0PFQgZXh0ZW5kcyBJVG9rZW5Nb2RlbD4odHlwZT86IG5ldyAoKSA9PiBUKTogVCB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuc3RvcmUuZ2V0KHRoaXMuX29wdGlvbnMuc3RvcmVfa2V5ISk7XG4gICAgcmV0dXJuIHR5cGUgPyAoT2JqZWN0LmFzc2lnbihuZXcgdHlwZSgpLCBkYXRhKSBhcyBUKSA6IChkYXRhIGFzIFQpO1xuICB9XG5cbiAgLyoqXG4gICAqIOa4hemZpCBUb2tlbiDkv6Hmga/vvIzlvZPnlKjmiLfpgIDlh7rnmbvlvZXml7bosIPnlKjjgIJcbiAgICogYGBgXG4gICAqIC8vIOa4hemZpOaJgOaciSBUb2tlbiDkv6Hmga9cbiAgICogdG9rZW5TZXJ2aWNlLmNsZWFyKCk7XG4gICAqIC8vIOWPqua4hemZpCB0b2tlbiDlrZfmrrVcbiAgICogdG9rZW5TZXJ2aWNlLmNsZWFyKHsgb25seVRva2VuOiB0cnVlIH0pO1xuICAgKiBgYGBcbiAgICovXG4gIGNsZWFyKG9wdGlvbnM6IHsgb25seVRva2VuOiBib29sZWFuIH0gPSB7IG9ubHlUb2tlbjogZmFsc2UgfSkge1xuICAgIGxldCBkYXRhOiBJVG9rZW5Nb2RlbCB8IG51bGwgPSBudWxsO1xuICAgIGlmIChvcHRpb25zLm9ubHlUb2tlbiA9PT0gdHJ1ZSkge1xuICAgICAgZGF0YSA9IHRoaXMuZ2V0KCkgYXMgSVRva2VuTW9kZWw7XG4gICAgICBkYXRhLnRva2VuID0gYGA7XG4gICAgICB0aGlzLnNldChkYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdG9yZS5yZW1vdmUodGhpcy5fb3B0aW9ucy5zdG9yZV9rZXkhKTtcbiAgICB9XG4gICAgdGhpcy5jaGFuZ2UkLm5leHQoZGF0YSk7XG4gIH1cblxuICAvKipcbiAgICog6K6i6ZiFIFRva2VuIOWvueixoeWPmOabtOmAmuefpVxuICAgKi9cbiAgY2hhbmdlKCk6IE9ic2VydmFibGU8SVRva2VuTW9kZWwgfCBudWxsPiB7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlJC5waXBlKHNoYXJlKCkpO1xuICB9XG59XG4iXX0=