/**
 * @fileoverview added by tsickle
 * Generated from: src/social/social.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DA_SERVICE_TOKEN } from '../token/interface';
/** @type {?} */
var OPENTYPE = '_delonAuthSocialType';
/** @type {?} */
var HREFCALLBACK = '_delonAuthSocialCallbackByHref';
var SocialService = /** @class */ (function () {
    function SocialService(tokenService, doc, router) {
        this.tokenService = tokenService;
        this.doc = doc;
        this.router = router;
    }
    /**
     * 跳转至登录页，若为 `type=window` 时，返回值是 `Observable<ITokenModel>`
     * @param url 获取授权地址
     * @param callback 当 `type=href` 成功时的回调路由地址
     * @param options.type 打开方式，默认 `window`
     * @param options.windowFeatures 等同 `window.open` 的 `features` 参数值
     */
    /**
     * 跳转至登录页，若为 `type=window` 时，返回值是 `Observable<ITokenModel>`
     * @param {?} url 获取授权地址
     * @param {?=} callback 当 `type=href` 成功时的回调路由地址
     * @param {?=} options
     * @return {?}
     */
    SocialService.prototype.login = /**
     * 跳转至登录页，若为 `type=window` 时，返回值是 `Observable<ITokenModel>`
     * @param {?} url 获取授权地址
     * @param {?=} callback 当 `type=href` 成功时的回调路由地址
     * @param {?=} options
     * @return {?}
     */
    function (url, callback, options) {
        var _this = this;
        if (callback === void 0) { callback = '/'; }
        if (options === void 0) { options = {}; }
        options = tslib_1.__assign({ type: 'window', windowFeatures: 'location=yes,height=570,width=520,scrollbars=yes,status=yes' }, options);
        localStorage.setItem(OPENTYPE, (/** @type {?} */ (options.type)));
        localStorage.setItem(HREFCALLBACK, callback);
        if (options.type === 'href') {
            this.doc.location.href = url;
            return;
        }
        this._win = window.open(url, '_blank', options.windowFeatures);
        this._winTime = setInterval((/**
         * @return {?}
         */
        function () {
            if (_this._win && _this._win.closed) {
                _this.ngOnDestroy();
                /** @type {?} */
                var model = _this.tokenService.get();
                if (model && !model.token)
                    model = null;
                // 触发变更通知
                if (model) {
                    _this.tokenService.set(model);
                }
                _this.observer.next(model);
                _this.observer.complete();
            }
        }), 100);
        return new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            _this.observer = observer;
        }));
    };
    /**
     * 授权成功后的回调处理
     *
     * @param rawData 指定回调认证信息，为空时从根据当前URL解析
     */
    /**
     * 授权成功后的回调处理
     *
     * @param {?=} rawData 指定回调认证信息，为空时从根据当前URL解析
     * @return {?}
     */
    SocialService.prototype.callback = /**
     * 授权成功后的回调处理
     *
     * @param {?=} rawData 指定回调认证信息，为空时从根据当前URL解析
     * @return {?}
     */
    function (rawData) {
        // from uri
        if (!rawData && this.router.url.indexOf('?') === -1) {
            throw new Error("url muse contain a ?");
        }
        // parse
        /** @type {?} */
        var data = { token: "" };
        if (typeof rawData === 'string') {
            /** @type {?} */
            var rightUrl = rawData.split('?')[1].split('#')[0];
            data = (/** @type {?} */ (this.router.parseUrl('./?' + rightUrl).queryParams));
        }
        else {
            data = (/** @type {?} */ (rawData));
        }
        if (!data || !data.token)
            throw new Error("invalide token data");
        this.tokenService.set(data);
        /** @type {?} */
        var url = localStorage.getItem(HREFCALLBACK) || '/';
        localStorage.removeItem(HREFCALLBACK);
        /** @type {?} */
        var type = localStorage.getItem(OPENTYPE);
        localStorage.removeItem(OPENTYPE);
        if (type === 'window') {
            window.close();
        }
        else {
            this.router.navigateByUrl(url);
        }
        return data;
    };
    /**
     * @return {?}
     */
    SocialService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        clearInterval(this._winTime);
        this._winTime = null;
    };
    SocialService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SocialService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DA_SERVICE_TOKEN,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: Router }
    ]; };
    return SocialService;
}());
export { SocialService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SocialService.prototype._win;
    /**
     * @type {?}
     * @private
     */
    SocialService.prototype._winTime;
    /**
     * @type {?}
     * @private
     */
    SocialService.prototype.observer;
    /**
     * @type {?}
     * @private
     */
    SocialService.prototype.tokenService;
    /**
     * @type {?}
     * @private
     */
    SocialService.prototype.doc;
    /**
     * @type {?}
     * @private
     */
    SocialService.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29jaWFsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYXV0aC8iLCJzb3VyY2VzIjpbInNyYy9zb2NpYWwvc29jaWFsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsVUFBVSxFQUFZLE1BQU0sTUFBTSxDQUFDO0FBRTVDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBOEIsTUFBTSxvQkFBb0IsQ0FBQzs7SUFFNUUsUUFBUSxHQUFHLHNCQUFzQjs7SUFDakMsWUFBWSxHQUFHLGdDQUFnQztBQUlyRDtJQU1FLHVCQUNvQyxZQUEyQixFQUNuQyxHQUFRLEVBQzFCLE1BQWM7UUFGWSxpQkFBWSxHQUFaLFlBQVksQ0FBZTtRQUNuQyxRQUFHLEdBQUgsR0FBRyxDQUFLO1FBQzFCLFdBQU0sR0FBTixNQUFNLENBQVE7SUFDckIsQ0FBQztJQThCSjs7Ozs7O09BTUc7Ozs7Ozs7O0lBQ0gsNkJBQUs7Ozs7Ozs7SUFBTCxVQUNFLEdBQVcsRUFDWCxRQUFzQixFQUN0QixPQUdNO1FBTlIsaUJBd0NDO1FBdENDLHlCQUFBLEVBQUEsY0FBc0I7UUFDdEIsd0JBQUEsRUFBQSxZQUdNO1FBRU4sT0FBTyxzQkFDTCxJQUFJLEVBQUUsUUFBUSxFQUNkLGNBQWMsRUFBRSw2REFBNkQsSUFDMUUsT0FBTyxDQUNYLENBQUM7UUFDRixZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxtQkFBQSxPQUFPLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUM5QyxZQUFZLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxRQUFRLENBQUMsQ0FBQztRQUM3QyxJQUFJLE9BQU8sQ0FB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QWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDdkIsQ0FBQzs7Z0JBL0hGLFVBQVU7Ozs7Z0RBT04sTUFBTSxTQUFDLGdCQUFnQjtnREFDdkIsTUFBTSxTQUFDLFFBQVE7Z0JBbEJYLE1BQU07O0lBMElmLG9CQUFDO0NBQUEsQUFoSUQsSUFnSUM7U0EvSFksYUFBYTs7Ozs7O0lBQ3hCLDZCQUE0Qjs7Ozs7SUFDNUIsaUNBQXNCOzs7OztJQUN0QixpQ0FBK0M7Ozs7O0lBRzdDLHFDQUE2RDs7Ozs7SUFDN0QsNEJBQWtDOzs7OztJQUNsQywrQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IERBX1NFUlZJQ0VfVE9LRU4sIElUb2tlbk1vZGVsLCBJVG9rZW5TZXJ2aWNlIH0gZnJvbSAnLi4vdG9rZW4vaW50ZXJmYWNlJztcblxuY29uc3QgT1BFTlRZUEUgPSAnX2RlbG9uQXV0aFNvY2lhbFR5cGUnO1xuY29uc3QgSFJFRkNBTExCQUNLID0gJ19kZWxvbkF1dGhTb2NpYWxDYWxsYmFja0J5SHJlZic7XG5cbmV4cG9ydCB0eXBlIFNvY2lhbE9wZW5UeXBlID0gJ2hyZWYnIHwgJ3dpbmRvdyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTb2NpYWxTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfd2luOiBXaW5kb3cgfCBudWxsO1xuICBwcml2YXRlIF93aW5UaW1lOiBhbnk7XG4gIHByaXZhdGUgb2JzZXJ2ZXI6IE9ic2VydmVyPElUb2tlbk1vZGVsIHwgbnVsbD47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChEQV9TRVJWSUNFX1RPS0VOKSBwcml2YXRlIHRva2VuU2VydmljZTogSVRva2VuU2VydmljZSxcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogYW55LFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICkge31cblxuICAvKipcbiAgICog5L2/55So56qX5L2T5omT5byA5o6I5p2D6aG177yM6L+U5Zue5YC85pivIGBPYnNlcnZhYmxlPElUb2tlbk1vZGVsPmAg55So5LqO6K6i6ZiF5o6I5p2D5ZCO6L+U5Zue55qE57uT5p6cXG4gICAqIEBwYXJhbSB1cmwg6I635Y+W5o6I5p2D5Zyw5Z2AXG4gICAqIEBwYXJhbSBjYWxsYmFjayDlm57osIPot6/nlLHlnLDlnYBcbiAgICogQHBhcmFtIG9wdGlvbnMud2luZG93RmVhdHVyZXMg562J5ZCMIGB3aW5kb3cub3BlbmAg55qEIGBmZWF0dXJlc2Ag5Y+C5pWw5YC8XG4gICAqL1xuICBsb2dpbihcbiAgICB1cmw6IHN0cmluZyxcbiAgICBjYWxsYmFjaz86IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgdHlwZT86ICd3aW5kb3cnO1xuICAgICAgd2luZG93RmVhdHVyZXM/OiBzdHJpbmc7XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxJVG9rZW5Nb2RlbD47XG5cbiAgLyoqXG4gICAqIOi3s+i9rOiHs+aOiOadg+mhtVxuICAgKiBAcGFyYW0gdXJsIOiOt+WPluaOiOadg+WcsOWdgFxuICAgKiBAcGFyYW0gY2FsbGJhY2sg5Zue6LCD6Lev55Sx5Zyw5Z2AXG4gICAqL1xuICBsb2dpbihcbiAgICB1cmw6IHN0cmluZyxcbiAgICBjYWxsYmFjaz86IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgdHlwZT86ICdocmVmJztcbiAgICB9LFxuICApOiB2b2lkO1xuXG4gIC8qKlxuICAgKiDot7Povazoh7PnmbvlvZXpobXvvIzoi6XkuLogYHR5cGU9d2luZG93YCDml7bvvIzov5Tlm57lgLzmmK8gYE9ic2VydmFibGU8SVRva2VuTW9kZWw+YFxuICAgKiBAcGFyYW0gdXJsIOiOt+WPluaOiOadg+WcsOWdgFxuICAgKiBAcGFyYW0gY2FsbGJhY2sg5b2TIGB0eXBlPWhyZWZgIOaIkOWKn+aXtueahOWbnuiwg+i3r+eUseWcsOWdgFxuICAgKiBAcGFyYW0gb3B0aW9ucy50eXBlIOaJk+W8gOaWueW8j++8jOm7mOiupCBgd2luZG93YFxuICAgKiBAcGFyYW0gb3B0aW9ucy53aW5kb3dGZWF0dXJlcyDnrYnlkIwgYHdpbmRvdy5vcGVuYCDnmoQgYGZlYXR1cmVzYCDlj4LmlbDlgLxcbiAgICovXG4gIGxvZ2luKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGNhbGxiYWNrOiBzdHJpbmcgPSAnLycsXG4gICAgb3B0aW9uczoge1xuICAgICAgdHlwZT86IFNvY2lhbE9wZW5UeXBlO1xuICAgICAgd2luZG93RmVhdHVyZXM/OiBzdHJpbmc7XG4gICAgfSA9IHt9LFxuICApOiBPYnNlcnZhYmxlPElUb2tlbk1vZGVsIHwgbnVsbD4gfCB2b2lkIHtcbiAgICBvcHRpb25zID0ge1xuICAgICAgdHlwZTogJ3dpbmRvdycsXG4gICAgICB3aW5kb3dGZWF0dXJlczogJ2xvY2F0aW9uPXllcyxoZWlnaHQ9NTcwLHdpZHRoPTUyMCxzY3JvbGxiYXJzPXllcyxzdGF0dXM9eWVzJyxcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgfTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShPUEVOVFlQRSwgb3B0aW9ucy50eXBlISk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oSFJFRkNBTExCQUNLLCBjYWxsYmFjayk7XG4gICAgaWYgKG9wdGlvbnMudHlwZSA9PT0gJ2hyZWYnKSB7XG4gICAgICB0aGlzLmRvYy5sb2NhdGlvbi5ocmVmID0gdXJsO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3dpbiA9IHdpbmRvdy5vcGVuKHVybCwgJ19ibGFuaycsIG9wdGlvbnMud2luZG93RmVhdHVyZXMpO1xuICAgIHRoaXMuX3dpblRpbWUgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fd2luICYmIHRoaXMuX3dpbi5jbG9zZWQpIHtcbiAgICAgICAgdGhpcy5uZ09uRGVzdHJveSgpO1xuXG4gICAgICAgIGxldCBtb2RlbCA9IHRoaXMudG9rZW5TZXJ2aWNlLmdldCgpO1xuICAgICAgICBpZiAobW9kZWwgJiYgIW1vZGVsLnRva2VuKSBtb2RlbCA9IG51bGw7XG5cbiAgICAgICAgLy8g6Kem5Y+R5Y+Y5pu06YCa55+lXG4gICAgICAgIGlmIChtb2RlbCkge1xuICAgICAgICAgIHRoaXMudG9rZW5TZXJ2aWNlLnNldChtb2RlbCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm9ic2VydmVyLm5leHQobW9kZWwpO1xuICAgICAgICB0aGlzLm9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICB9XG4gICAgfSwgMTAwKTtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyOiBPYnNlcnZlcjxJVG9rZW5Nb2RlbCB8IG51bGw+KSA9PiB7XG4gICAgICB0aGlzLm9ic2VydmVyID0gb2JzZXJ2ZXI7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICog5o6I5p2D5oiQ5Yqf5ZCO55qE5Zue6LCD5aSE55CGXG4gICAqXG4gICAqIEBwYXJhbSByYXdEYXRhIOaMh+WumuWbnuiwg+iupOivgeS/oeaBr++8jOS4uuepuuaXtuS7juagueaNruW9k+WJjVVSTOino+aekFxuICAgKi9cbiAgY2FsbGJhY2socmF3RGF0YT86IElUb2tlbk1vZGVsIHwgc3RyaW5nIHwgbnVsbCk6IElUb2tlbk1vZGVsIHtcbiAgICAvLyBmcm9tIHVyaVxuICAgIGlmICghcmF3RGF0YSAmJiB0aGlzLnJvdXRlci51cmwuaW5kZXhPZignPycpID09PSAtMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGB1cmwgbXVzZSBjb250YWluIGEgP2ApO1xuICAgIH1cbiAgICAvLyBwYXJzZVxuICAgIGxldCBkYXRhOiBJVG9rZW5Nb2RlbCA9IHsgdG9rZW46IGBgIH07XG4gICAgaWYgKHR5cGVvZiByYXdEYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgY29uc3QgcmlnaHRVcmwgPSByYXdEYXRhLnNwbGl0KCc/JylbMV0uc3BsaXQoJyMnKVswXTtcbiAgICAgIGRhdGEgPSB0aGlzLnJvdXRlci5wYXJzZVVybCgnLi8/JyArIHJpZ2h0VXJsKS5xdWVyeVBhcmFtcyBhcyBJVG9rZW5Nb2RlbDtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0YSA9IHJhd0RhdGEgYXMgSVRva2VuTW9kZWw7XG4gICAgfVxuXG4gICAgaWYgKCFkYXRhIHx8ICFkYXRhLnRva2VuKSB0aHJvdyBuZXcgRXJyb3IoYGludmFsaWRlIHRva2VuIGRhdGFgKTtcbiAgICB0aGlzLnRva2VuU2VydmljZS5zZXQoZGF0YSk7XG5cbiAgICBjb25zdCB1cmwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShIUkVGQ0FMTEJBQ0spIHx8ICcvJztcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShIUkVGQ0FMTEJBQ0spO1xuICAgIGNvbnN0IHR5cGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShPUEVOVFlQRSk7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oT1BFTlRZUEUpO1xuICAgIGlmICh0eXBlID09PSAnd2luZG93Jykge1xuICAgICAgd2luZG93LmNsb3NlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwodXJsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5fd2luVGltZSk7XG4gICAgdGhpcy5fd2luVGltZSA9IG51bGw7XG4gIH1cbn1cbiJdfQ==