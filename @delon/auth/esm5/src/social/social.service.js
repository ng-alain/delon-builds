/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) { return (_this.observer = observer); }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29jaWFsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYXV0aC8iLCJzb3VyY2VzIjpbInNyYy9zb2NpYWwvc29jaWFsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxVQUFVLEVBQVksTUFBTSxNQUFNLENBQUM7QUFFNUMsT0FBTyxFQUFFLGdCQUFnQixFQUE4QixNQUFNLG9CQUFvQixDQUFDOztJQUU1RSxRQUFRLEdBQUcsc0JBQXNCOztJQUNqQyxZQUFZLEdBQUcsZ0NBQWdDO0FBSXJEO0lBTUUsdUJBQ29DLFlBQTJCLEVBQ25DLEdBQVEsRUFDMUIsTUFBYztRQUZZLGlCQUFZLEdBQVosWUFBWSxDQUFlO1FBQ25DLFFBQUcsR0FBSCxHQUFHLENBQUs7UUFDMUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUNyQixDQUFDO0lBOEJKOzs7Ozs7T0FNRzs7Ozs7Ozs7SUFDSCw2QkFBSzs7Ozs7OztJQUFMLFVBQ0UsR0FBVyxFQUNYLFFBQXNCLEVBQ3RCLE9BR007UUFOUixpQkFzQ0M7UUFwQ0MseUJBQUEsRUFBQSxjQUFzQjtRQUN0Qix3QkFBQSxFQUFBLFlBR007UUFFTixPQUFPLHNCQUNMLElBQUksRUFBRSxRQUFRLEVBQ2QsY0FBYyxFQUFFLDZEQUE2RCxJQUMxRSxPQUFPLENBQ1gsQ0FBQztRQUNGLFlBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLG1CQUFBLE9BQU8sQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQzlDLFlBQVksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzdDLElBQUksT0FBTyxDQUFD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Ozs7SUFBWDtRQUNFLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDdkIsQ0FBQzs7Z0JBN0hGLFVBQVU7Ozs7Z0RBT04sTUFBTSxTQUFDLGdCQUFnQjtnREFDdkIsTUFBTSxTQUFDLFFBQVE7Z0JBbEJYLE1BQU07O0lBd0lmLG9CQUFDO0NBQUEsQUE5SEQsSUE4SEM7U0E3SFksYUFBYTs7Ozs7O0lBQ3hCLDZCQUE0Qjs7Ozs7SUFDNUIsaUNBQWlCOzs7OztJQUNqQixpQ0FBK0M7Ozs7O0lBRzdDLHFDQUE2RDs7Ozs7SUFDN0QsNEJBQWtDOzs7OztJQUNsQywrQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IERBX1NFUlZJQ0VfVE9LRU4sIElUb2tlbk1vZGVsLCBJVG9rZW5TZXJ2aWNlIH0gZnJvbSAnLi4vdG9rZW4vaW50ZXJmYWNlJztcblxuY29uc3QgT1BFTlRZUEUgPSAnX2RlbG9uQXV0aFNvY2lhbFR5cGUnO1xuY29uc3QgSFJFRkNBTExCQUNLID0gJ19kZWxvbkF1dGhTb2NpYWxDYWxsYmFja0J5SHJlZic7XG5cbmV4cG9ydCB0eXBlIFNvY2lhbE9wZW5UeXBlID0gJ2hyZWYnIHwgJ3dpbmRvdyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTb2NpYWxTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfd2luOiBXaW5kb3cgfCBudWxsO1xuICBwcml2YXRlIF93aW5UaW1lO1xuICBwcml2YXRlIG9ic2VydmVyOiBPYnNlcnZlcjxJVG9rZW5Nb2RlbCB8IG51bGw+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoREFfU0VSVklDRV9UT0tFTikgcHJpdmF0ZSB0b2tlblNlcnZpY2U6IElUb2tlblNlcnZpY2UsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IGFueSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICApIHt9XG5cbiAgLyoqXG4gICAqIOS9v+eUqOeql+S9k+aJk+W8gOaOiOadg+mhte+8jOi/lOWbnuWAvOaYryBgT2JzZXJ2YWJsZTxJVG9rZW5Nb2RlbD5gIOeUqOS6juiuoumYheaOiOadg+WQjui/lOWbnueahOe7k+aenFxuICAgKiBAcGFyYW0gdXJsIOiOt+WPluaOiOadg+WcsOWdgFxuICAgKiBAcGFyYW0gY2FsbGJhY2sg5Zue6LCD6Lev55Sx5Zyw5Z2AXG4gICAqIEBwYXJhbSBvcHRpb25zLndpbmRvd0ZlYXR1cmVzIOetieWQjCBgd2luZG93Lm9wZW5gIOeahCBgZmVhdHVyZXNgIOWPguaVsOWAvFxuICAgKi9cbiAgbG9naW4oXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgY2FsbGJhY2s/OiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIHR5cGU/OiAnd2luZG93JztcbiAgICAgIHdpbmRvd0ZlYXR1cmVzPzogc3RyaW5nO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8SVRva2VuTW9kZWw+O1xuXG4gIC8qKlxuICAgKiDot7Povazoh7PmjojmnYPpobVcbiAgICogQHBhcmFtIHVybCDojrflj5bmjojmnYPlnLDlnYBcbiAgICogQHBhcmFtIGNhbGxiYWNrIOWbnuiwg+i3r+eUseWcsOWdgFxuICAgKi9cbiAgbG9naW4oXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgY2FsbGJhY2s/OiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIHR5cGU/OiAnaHJlZic7XG4gICAgfSxcbiAgKTogdm9pZDtcblxuICAvKipcbiAgICog6Lez6L2s6Iez55m75b2V6aG177yM6Iul5Li6IGB0eXBlPXdpbmRvd2Ag5pe277yM6L+U5Zue5YC85pivIGBPYnNlcnZhYmxlPElUb2tlbk1vZGVsPmBcbiAgICogQHBhcmFtIHVybCDojrflj5bmjojmnYPlnLDlnYBcbiAgICogQHBhcmFtIGNhbGxiYWNrIOW9kyBgdHlwZT1ocmVmYCDmiJDlip/ml7bnmoTlm57osIPot6/nlLHlnLDlnYBcbiAgICogQHBhcmFtIG9wdGlvbnMudHlwZSDmiZPlvIDmlrnlvI/vvIzpu5jorqQgYHdpbmRvd2BcbiAgICogQHBhcmFtIG9wdGlvbnMud2luZG93RmVhdHVyZXMg562J5ZCMIGB3aW5kb3cub3BlbmAg55qEIGBmZWF0dXJlc2Ag5Y+C5pWw5YC8XG4gICAqL1xuICBsb2dpbihcbiAgICB1cmw6IHN0cmluZyxcbiAgICBjYWxsYmFjazogc3RyaW5nID0gJy8nLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIHR5cGU/OiBTb2NpYWxPcGVuVHlwZTtcbiAgICAgIHdpbmRvd0ZlYXR1cmVzPzogc3RyaW5nO1xuICAgIH0gPSB7fSxcbiAgKTogT2JzZXJ2YWJsZTxJVG9rZW5Nb2RlbD4gfCB2b2lkIHtcbiAgICBvcHRpb25zID0ge1xuICAgICAgdHlwZTogJ3dpbmRvdycsXG4gICAgICB3aW5kb3dGZWF0dXJlczogJ2xvY2F0aW9uPXllcyxoZWlnaHQ9NTcwLHdpZHRoPTUyMCxzY3JvbGxiYXJzPXllcyxzdGF0dXM9eWVzJyxcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgfTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShPUEVOVFlQRSwgb3B0aW9ucy50eXBlISk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oSFJFRkNBTExCQUNLLCBjYWxsYmFjayk7XG4gICAgaWYgKG9wdGlvbnMudHlwZSA9PT0gJ2hyZWYnKSB7XG4gICAgICB0aGlzLmRvYy5sb2NhdGlvbi5ocmVmID0gdXJsO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3dpbiA9IHdpbmRvdy5vcGVuKHVybCwgJ19ibGFuaycsIG9wdGlvbnMud2luZG93RmVhdHVyZXMpO1xuICAgIHRoaXMuX3dpblRpbWUgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fd2luICYmIHRoaXMuX3dpbi5jbG9zZWQpIHtcbiAgICAgICAgdGhpcy5uZ09uRGVzdHJveSgpO1xuXG4gICAgICAgIGxldCBtb2RlbCA9IHRoaXMudG9rZW5TZXJ2aWNlLmdldCgpO1xuICAgICAgICBpZiAobW9kZWwgJiYgIW1vZGVsLnRva2VuKSBtb2RlbCA9IG51bGw7XG5cbiAgICAgICAgLy8g6Kem5Y+R5Y+Y5pu06YCa55+lXG4gICAgICAgIGlmIChtb2RlbCkge1xuICAgICAgICAgIHRoaXMudG9rZW5TZXJ2aWNlLnNldChtb2RlbCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm9ic2VydmVyLm5leHQobW9kZWwpO1xuICAgICAgICB0aGlzLm9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICB9XG4gICAgfSwgMTAwKTtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyOiBPYnNlcnZlcjxJVG9rZW5Nb2RlbCB8IG51bGw+KSA9PiAodGhpcy5vYnNlcnZlciA9IG9ic2VydmVyKSk7XG4gIH1cblxuICAvKipcbiAgICog5o6I5p2D5oiQ5Yqf5ZCO55qE5Zue6LCD5aSE55CGXG4gICAqXG4gICAqIEBwYXJhbSByYXdEYXRhIOaMh+WumuWbnuiwg+iupOivgeS/oeaBr++8jOS4uuepuuaXtuS7juagueaNruW9k+WJjVVSTOino+aekFxuICAgKi9cbiAgY2FsbGJhY2socmF3RGF0YT86IElUb2tlbk1vZGVsIHwgc3RyaW5nIHwgbnVsbCk6IElUb2tlbk1vZGVsIHtcbiAgICAvLyBmcm9tIHVyaVxuICAgIGlmICghcmF3RGF0YSAmJiB0aGlzLnJvdXRlci51cmwuaW5kZXhPZignPycpID09PSAtMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGB1cmwgbXVzZSBjb250YWluIGEgP2ApO1xuICAgIH1cbiAgICAvLyBwYXJzZVxuICAgIGxldCBkYXRhOiBJVG9rZW5Nb2RlbCA9IHsgdG9rZW46IGBgIH07XG4gICAgaWYgKHR5cGVvZiByYXdEYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgY29uc3QgcmlnaHRVcmwgPSByYXdEYXRhLnNwbGl0KCc/JylbMV0uc3BsaXQoJyMnKVswXTtcbiAgICAgIGRhdGEgPSB0aGlzLnJvdXRlci5wYXJzZVVybCgnLi8/JyArIHJpZ2h0VXJsKS5xdWVyeVBhcmFtcyBhcyBJVG9rZW5Nb2RlbDtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0YSA9IHJhd0RhdGEgYXMgSVRva2VuTW9kZWw7XG4gICAgfVxuXG4gICAgaWYgKCFkYXRhIHx8ICFkYXRhLnRva2VuKSB0aHJvdyBuZXcgRXJyb3IoYGludmFsaWRlIHRva2VuIGRhdGFgKTtcbiAgICB0aGlzLnRva2VuU2VydmljZS5zZXQoZGF0YSk7XG5cbiAgICBjb25zdCB1cmwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShIUkVGQ0FMTEJBQ0spIHx8ICcvJztcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShIUkVGQ0FMTEJBQ0spO1xuICAgIGNvbnN0IHR5cGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShPUEVOVFlQRSk7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oT1BFTlRZUEUpO1xuICAgIGlmICh0eXBlID09PSAnd2luZG93Jykge1xuICAgICAgd2luZG93LmNsb3NlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwodXJsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5fd2luVGltZSk7XG4gICAgdGhpcy5fd2luVGltZSA9IG51bGw7XG4gIH1cbn1cbiJdfQ==