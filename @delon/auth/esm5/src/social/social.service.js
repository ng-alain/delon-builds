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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29jaWFsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYXV0aC8iLCJzb3VyY2VzIjpbInNyYy9zb2NpYWwvc29jaWFsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxVQUFVLEVBQVksTUFBTSxNQUFNLENBQUM7QUFFNUMsT0FBTyxFQUFFLGdCQUFnQixFQUE4QixNQUFNLG9CQUFvQixDQUFDOztJQUU1RSxRQUFRLEdBQUcsc0JBQXNCOztJQUNqQyxZQUFZLEdBQUcsZ0NBQWdDO0FBSXJEO0lBTUUsdUJBQ29DLFlBQTJCLEVBQ25DLEdBQVEsRUFDMUIsTUFBYztRQUZZLGlCQUFZLEdBQVosWUFBWSxDQUFlO1FBQ25DLFFBQUcsR0FBSCxHQUFHLENBQUs7UUFDMUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUNyQixDQUFDO0lBOEJKOzs7Ozs7T0FNRzs7Ozs7Ozs7SUFDSCw2QkFBSzs7Ozs7OztJQUFMLFVBQ0UsR0FBVyxFQUNYLFFBQXNCLEVBQ3RCLE9BR007UUFOUixpQkF3Q0M7UUF0Q0MseUJBQUEsRUFBQSxjQUFzQjtRQUN0Qix3QkFBQSxFQUFBLFlBR007UUFFTixPQUFPLHNCQUNMLElBQUksRUFBRSxRQUFRLEVBQ2QsY0FBYyxFQUFFLDZEQUE2RCxJQUMxRSxPQUFPLENBQ1gsQ0FBQztRQUNGLFlBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLG1CQUFBLE9BQU8sQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQzlDLFlBQVksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzdDLElBQUksT0FBTyxDQUFD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YSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUN2QixDQUFDOztnQkEvSEYsVUFBVTs7OztnREFPTixNQUFNLFNBQUMsZ0JBQWdCO2dEQUN2QixNQUFNLFNBQUMsUUFBUTtnQkFsQlgsTUFBTTs7SUEwSWYsb0JBQUM7Q0FBQSxBQWhJRCxJQWdJQztTQS9IWSxhQUFhOzs7Ozs7SUFDeEIsNkJBQTRCOzs7OztJQUM1QixpQ0FBc0I7Ozs7O0lBQ3RCLGlDQUErQzs7Ozs7SUFHN0MscUNBQTZEOzs7OztJQUM3RCw0QkFBa0M7Ozs7O0lBQ2xDLCtCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgREFfU0VSVklDRV9UT0tFTiwgSVRva2VuTW9kZWwsIElUb2tlblNlcnZpY2UgfSBmcm9tICcuLi90b2tlbi9pbnRlcmZhY2UnO1xuXG5jb25zdCBPUEVOVFlQRSA9ICdfZGVsb25BdXRoU29jaWFsVHlwZSc7XG5jb25zdCBIUkVGQ0FMTEJBQ0sgPSAnX2RlbG9uQXV0aFNvY2lhbENhbGxiYWNrQnlIcmVmJztcblxuZXhwb3J0IHR5cGUgU29jaWFsT3BlblR5cGUgPSAnaHJlZicgfCAnd2luZG93JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNvY2lhbFNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF93aW46IFdpbmRvdyB8IG51bGw7XG4gIHByaXZhdGUgX3dpblRpbWU6IGFueTtcbiAgcHJpdmF0ZSBvYnNlcnZlcjogT2JzZXJ2ZXI8SVRva2VuTW9kZWwgfCBudWxsPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KERBX1NFUlZJQ0VfVE9LRU4pIHByaXZhdGUgdG9rZW5TZXJ2aWNlOiBJVG9rZW5TZXJ2aWNlLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnksXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiDkvb/nlKjnqpfkvZPmiZPlvIDmjojmnYPpobXvvIzov5Tlm57lgLzmmK8gYE9ic2VydmFibGU8SVRva2VuTW9kZWw+YCDnlKjkuo7orqLpmIXmjojmnYPlkI7ov5Tlm57nmoTnu5PmnpxcbiAgICogQHBhcmFtIHVybCDojrflj5bmjojmnYPlnLDlnYBcbiAgICogQHBhcmFtIGNhbGxiYWNrIOWbnuiwg+i3r+eUseWcsOWdgFxuICAgKiBAcGFyYW0gb3B0aW9ucy53aW5kb3dGZWF0dXJlcyDnrYnlkIwgYHdpbmRvdy5vcGVuYCDnmoQgYGZlYXR1cmVzYCDlj4LmlbDlgLxcbiAgICovXG4gIGxvZ2luKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGNhbGxiYWNrPzogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICB0eXBlPzogJ3dpbmRvdyc7XG4gICAgICB3aW5kb3dGZWF0dXJlcz86IHN0cmluZztcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPElUb2tlbk1vZGVsPjtcblxuICAvKipcbiAgICog6Lez6L2s6Iez5o6I5p2D6aG1XG4gICAqIEBwYXJhbSB1cmwg6I635Y+W5o6I5p2D5Zyw5Z2AXG4gICAqIEBwYXJhbSBjYWxsYmFjayDlm57osIPot6/nlLHlnLDlnYBcbiAgICovXG4gIGxvZ2luKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGNhbGxiYWNrPzogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICB0eXBlPzogJ2hyZWYnO1xuICAgIH0sXG4gICk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIOi3s+i9rOiHs+eZu+W9lemhte+8jOiLpeS4uiBgdHlwZT13aW5kb3dgIOaXtu+8jOi/lOWbnuWAvOaYryBgT2JzZXJ2YWJsZTxJVG9rZW5Nb2RlbD5gXG4gICAqIEBwYXJhbSB1cmwg6I635Y+W5o6I5p2D5Zyw5Z2AXG4gICAqIEBwYXJhbSBjYWxsYmFjayDlvZMgYHR5cGU9aHJlZmAg5oiQ5Yqf5pe255qE5Zue6LCD6Lev55Sx5Zyw5Z2AXG4gICAqIEBwYXJhbSBvcHRpb25zLnR5cGUg5omT5byA5pa55byP77yM6buY6K6kIGB3aW5kb3dgXG4gICAqIEBwYXJhbSBvcHRpb25zLndpbmRvd0ZlYXR1cmVzIOetieWQjCBgd2luZG93Lm9wZW5gIOeahCBgZmVhdHVyZXNgIOWPguaVsOWAvFxuICAgKi9cbiAgbG9naW4oXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgY2FsbGJhY2s6IHN0cmluZyA9ICcvJyxcbiAgICBvcHRpb25zOiB7XG4gICAgICB0eXBlPzogU29jaWFsT3BlblR5cGU7XG4gICAgICB3aW5kb3dGZWF0dXJlcz86IHN0cmluZztcbiAgICB9ID0ge30sXG4gICk6IE9ic2VydmFibGU8SVRva2VuTW9kZWwgfCBudWxsPiB8IHZvaWQge1xuICAgIG9wdGlvbnMgPSB7XG4gICAgICB0eXBlOiAnd2luZG93JyxcbiAgICAgIHdpbmRvd0ZlYXR1cmVzOiAnbG9jYXRpb249eWVzLGhlaWdodD01NzAsd2lkdGg9NTIwLHNjcm9sbGJhcnM9eWVzLHN0YXR1cz15ZXMnLFxuICAgICAgLi4ub3B0aW9ucyxcbiAgICB9O1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKE9QRU5UWVBFLCBvcHRpb25zLnR5cGUhKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShIUkVGQ0FMTEJBQ0ssIGNhbGxiYWNrKTtcbiAgICBpZiAob3B0aW9ucy50eXBlID09PSAnaHJlZicpIHtcbiAgICAgIHRoaXMuZG9jLmxvY2F0aW9uLmhyZWYgPSB1cmw7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fd2luID0gd2luZG93Lm9wZW4odXJsLCAnX2JsYW5rJywgb3B0aW9ucy53aW5kb3dGZWF0dXJlcyk7XG4gICAgdGhpcy5fd2luVGltZSA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLl93aW4gJiYgdGhpcy5fd2luLmNsb3NlZCkge1xuICAgICAgICB0aGlzLm5nT25EZXN0cm95KCk7XG5cbiAgICAgICAgbGV0IG1vZGVsID0gdGhpcy50b2tlblNlcnZpY2UuZ2V0KCk7XG4gICAgICAgIGlmIChtb2RlbCAmJiAhbW9kZWwudG9rZW4pIG1vZGVsID0gbnVsbDtcblxuICAgICAgICAvLyDop6blj5Hlj5jmm7TpgJrnn6VcbiAgICAgICAgaWYgKG1vZGVsKSB7XG4gICAgICAgICAgdGhpcy50b2tlblNlcnZpY2Uuc2V0KG1vZGVsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub2JzZXJ2ZXIubmV4dChtb2RlbCk7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgIH1cbiAgICB9LCAxMDApO1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IE9ic2VydmVyPElUb2tlbk1vZGVsIHwgbnVsbD4pID0+IHtcbiAgICAgIHRoaXMub2JzZXJ2ZXIgPSBvYnNlcnZlcjtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmjojmnYPmiJDlip/lkI7nmoTlm57osIPlpITnkIZcbiAgICpcbiAgICogQHBhcmFtIHJhd0RhdGEg5oyH5a6a5Zue6LCD6K6k6K+B5L+h5oGv77yM5Li656m65pe25LuO5qC55o2u5b2T5YmNVVJM6Kej5p6QXG4gICAqL1xuICBjYWxsYmFjayhyYXdEYXRhPzogSVRva2VuTW9kZWwgfCBzdHJpbmcgfCBudWxsKTogSVRva2VuTW9kZWwge1xuICAgIC8vIGZyb20gdXJpXG4gICAgaWYgKCFyYXdEYXRhICYmIHRoaXMucm91dGVyLnVybC5pbmRleE9mKCc/JykgPT09IC0xKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYHVybCBtdXNlIGNvbnRhaW4gYSA/YCk7XG4gICAgfVxuICAgIC8vIHBhcnNlXG4gICAgbGV0IGRhdGE6IElUb2tlbk1vZGVsID0geyB0b2tlbjogYGAgfTtcbiAgICBpZiAodHlwZW9mIHJhd0RhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25zdCByaWdodFVybCA9IHJhd0RhdGEuc3BsaXQoJz8nKVsxXS5zcGxpdCgnIycpWzBdO1xuICAgICAgZGF0YSA9IHRoaXMucm91dGVyLnBhcnNlVXJsKCcuLz8nICsgcmlnaHRVcmwpLnF1ZXJ5UGFyYW1zIGFzIElUb2tlbk1vZGVsO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRhID0gcmF3RGF0YSBhcyBJVG9rZW5Nb2RlbDtcbiAgICB9XG5cbiAgICBpZiAoIWRhdGEgfHwgIWRhdGEudG9rZW4pIHRocm93IG5ldyBFcnJvcihgaW52YWxpZGUgdG9rZW4gZGF0YWApO1xuICAgIHRoaXMudG9rZW5TZXJ2aWNlLnNldChkYXRhKTtcblxuICAgIGNvbnN0IHVybCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKEhSRUZDQUxMQkFDSykgfHwgJy8nO1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKEhSRUZDQUxMQkFDSyk7XG4gICAgY29uc3QgdHlwZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKE9QRU5UWVBFKTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShPUEVOVFlQRSk7XG4gICAgaWYgKHR5cGUgPT09ICd3aW5kb3cnKSB7XG4gICAgICB3aW5kb3cuY2xvc2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCh1cmwpO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLl93aW5UaW1lKTtcbiAgICB0aGlzLl93aW5UaW1lID0gbnVsbDtcbiAgfVxufVxuIl19