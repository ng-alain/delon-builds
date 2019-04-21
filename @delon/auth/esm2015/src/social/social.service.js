/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DA_SERVICE_TOKEN } from '../token/interface';
/** @type {?} */
const OPENTYPE = '_delonAuthSocialType';
/** @type {?} */
const HREFCALLBACK = '_delonAuthSocialCallbackByHref';
export class SocialService {
    /**
     * @param {?} tokenService
     * @param {?} doc
     * @param {?} router
     */
    constructor(tokenService, doc, router) {
        this.tokenService = tokenService;
        this.doc = doc;
        this.router = router;
    }
    /**
     * 跳转至登录页，若为 `type=window` 时，返回值是 `Observable<ITokenModel>`
     * @param {?} url 获取授权地址
     * @param {?=} callback 当 `type=href` 成功时的回调路由地址
     * @param {?=} options
     * @return {?}
     */
    login(url, callback = '/', options = {}) {
        options = Object.assign({ type: 'window', windowFeatures: 'location=yes,height=570,width=520,scrollbars=yes,status=yes' }, options);
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
        () => {
            if (this._win && this._win.closed) {
                this.ngOnDestroy();
                /** @type {?} */
                let model = this.tokenService.get();
                if (model && !model.token)
                    model = null;
                // 触发变更通知
                if (model) {
                    this.tokenService.set(model);
                }
                this.observer.next(model);
                this.observer.complete();
            }
        }), 100);
        return Observable.create((/**
         * @param {?} observer
         * @return {?}
         */
        (observer) => (this.observer = observer)));
    }
    /**
     * 授权成功后的回调处理
     *
     * @param {?=} rawData 指定回调认证信息，为空时从根据当前URL解析
     * @return {?}
     */
    callback(rawData) {
        // from uri
        if (!rawData && this.router.url.indexOf('?') === -1) {
            throw new Error(`url muse contain a ?`);
        }
        // parse
        /** @type {?} */
        let data = { token: `` };
        if (typeof rawData === 'string') {
            /** @type {?} */
            const rightUrl = rawData.split('?')[1].split('#')[0];
            data = (/** @type {?} */ (this.router.parseUrl('./?' + rightUrl).queryParams));
        }
        else {
            data = (/** @type {?} */ (rawData));
        }
        if (!data || !data.token)
            throw new Error(`invalide token data`);
        this.tokenService.set(data);
        /** @type {?} */
        const url = localStorage.getItem(HREFCALLBACK) || '/';
        localStorage.removeItem(HREFCALLBACK);
        /** @type {?} */
        const type = localStorage.getItem(OPENTYPE);
        localStorage.removeItem(OPENTYPE);
        if (type === 'window') {
            window.close();
        }
        else {
            this.router.navigateByUrl(url);
        }
        return data;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        clearInterval(this._winTime);
        this._winTime = null;
    }
}
SocialService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SocialService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DA_SERVICE_TOKEN,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Router }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29jaWFsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYXV0aC8iLCJzb3VyY2VzIjpbInNyYy9zb2NpYWwvc29jaWFsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFFLFVBQVUsRUFBWSxNQUFNLE1BQU0sQ0FBQztBQUU1QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQThCLE1BQU0sb0JBQW9CLENBQUM7O01BRTVFLFFBQVEsR0FBRyxzQkFBc0I7O01BQ2pDLFlBQVksR0FBRyxnQ0FBZ0M7QUFLckQsTUFBTSxPQUFPLGFBQWE7Ozs7OztJQUt4QixZQUNvQyxZQUEyQixFQUNuQyxHQUFRLEVBQzFCLE1BQWM7UUFGWSxpQkFBWSxHQUFaLFlBQVksQ0FBZTtRQUNuQyxRQUFHLEdBQUgsR0FBRyxDQUFLO1FBQzFCLFdBQU0sR0FBTixNQUFNLENBQVE7SUFDckIsQ0FBQzs7Ozs7Ozs7SUFxQ0osS0FBSyxDQUNILEdBQVcsRUFDWCxXQUFtQixHQUFHLEVBQ3RCLFVBR0ksRUFBRTtRQUVOLE9BQU8sbUJBQ0wsSUFBSSxFQUFFLFFBQVEsRUFDZCxjQUFjLEVBQUUsNkRBQTZELElBQzFFLE9BQU8sQ0FDWCxDQUFDO1FBQ0YsWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsbUJBQUEsT0FBTyxDQUFDLElBQUksRUFBQyxDQUFDLENBQUM7UUFDOUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDN0MsSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTtZQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FB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O0lBQ3ZCLENBQUM7OztZQS9IRixVQUFVOzs7OzRDQU9OLE1BQU0sU0FBQyxnQkFBZ0I7NENBQ3ZCLE1BQU0sU0FBQyxRQUFRO1lBbEJYLE1BQU07Ozs7Ozs7SUFZYiw2QkFBNEI7Ozs7O0lBQzVCLGlDQUFpQjs7Ozs7SUFDakIsaUNBQStDOzs7OztJQUc3QyxxQ0FBNkQ7Ozs7O0lBQzdELDRCQUFrQzs7Ozs7SUFDbEMsK0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPYnNlcnZlciB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBEQV9TRVJWSUNFX1RPS0VOLCBJVG9rZW5Nb2RlbCwgSVRva2VuU2VydmljZSB9IGZyb20gJy4uL3Rva2VuL2ludGVyZmFjZSc7XG5cbmNvbnN0IE9QRU5UWVBFID0gJ19kZWxvbkF1dGhTb2NpYWxUeXBlJztcbmNvbnN0IEhSRUZDQUxMQkFDSyA9ICdfZGVsb25BdXRoU29jaWFsQ2FsbGJhY2tCeUhyZWYnO1xuXG5leHBvcnQgdHlwZSBTb2NpYWxPcGVuVHlwZSA9ICdocmVmJyB8ICd3aW5kb3cnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU29jaWFsU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX3dpbjogV2luZG93IHwgbnVsbDtcbiAgcHJpdmF0ZSBfd2luVGltZTtcbiAgcHJpdmF0ZSBvYnNlcnZlcjogT2JzZXJ2ZXI8SVRva2VuTW9kZWwgfCBudWxsPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KERBX1NFUlZJQ0VfVE9LRU4pIHByaXZhdGUgdG9rZW5TZXJ2aWNlOiBJVG9rZW5TZXJ2aWNlLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnksXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiDkvb/nlKjnqpfkvZPmiZPlvIDmjojmnYPpobXvvIzov5Tlm57lgLzmmK8gYE9ic2VydmFibGU8SVRva2VuTW9kZWw+YCDnlKjkuo7orqLpmIXmjojmnYPlkI7ov5Tlm57nmoTnu5PmnpxcbiAgICogQHBhcmFtIHVybCDojrflj5bmjojmnYPlnLDlnYBcbiAgICogQHBhcmFtIGNhbGxiYWNrIOWbnuiwg+i3r+eUseWcsOWdgFxuICAgKiBAcGFyYW0gb3B0aW9ucy53aW5kb3dGZWF0dXJlcyDnrYnlkIwgYHdpbmRvdy5vcGVuYCDnmoQgYGZlYXR1cmVzYCDlj4LmlbDlgLxcbiAgICovXG4gIGxvZ2luKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGNhbGxiYWNrPzogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICB0eXBlPzogJ3dpbmRvdyc7XG4gICAgICB3aW5kb3dGZWF0dXJlcz86IHN0cmluZztcbiAgICB9LFxuICApOiBPYnNlcnZhYmxlPElUb2tlbk1vZGVsPjtcblxuICAvKipcbiAgICog6Lez6L2s6Iez5o6I5p2D6aG1XG4gICAqIEBwYXJhbSB1cmwg6I635Y+W5o6I5p2D5Zyw5Z2AXG4gICAqIEBwYXJhbSBjYWxsYmFjayDlm57osIPot6/nlLHlnLDlnYBcbiAgICovXG4gIGxvZ2luKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGNhbGxiYWNrPzogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICB0eXBlPzogJ2hyZWYnO1xuICAgIH0sXG4gICk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIOi3s+i9rOiHs+eZu+W9lemhte+8jOiLpeS4uiBgdHlwZT13aW5kb3dgIOaXtu+8jOi/lOWbnuWAvOaYryBgT2JzZXJ2YWJsZTxJVG9rZW5Nb2RlbD5gXG4gICAqIEBwYXJhbSB1cmwg6I635Y+W5o6I5p2D5Zyw5Z2AXG4gICAqIEBwYXJhbSBjYWxsYmFjayDlvZMgYHR5cGU9aHJlZmAg5oiQ5Yqf5pe255qE5Zue6LCD6Lev55Sx5Zyw5Z2AXG4gICAqIEBwYXJhbSBvcHRpb25zLnR5cGUg5omT5byA5pa55byP77yM6buY6K6kIGB3aW5kb3dgXG4gICAqIEBwYXJhbSBvcHRpb25zLndpbmRvd0ZlYXR1cmVzIOetieWQjCBgd2luZG93Lm9wZW5gIOeahCBgZmVhdHVyZXNgIOWPguaVsOWAvFxuICAgKi9cbiAgbG9naW4oXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgY2FsbGJhY2s6IHN0cmluZyA9ICcvJyxcbiAgICBvcHRpb25zOiB7XG4gICAgICB0eXBlPzogU29jaWFsT3BlblR5cGU7XG4gICAgICB3aW5kb3dGZWF0dXJlcz86IHN0cmluZztcbiAgICB9ID0ge30sXG4gICk6IE9ic2VydmFibGU8SVRva2VuTW9kZWw+IHwgdm9pZCB7XG4gICAgb3B0aW9ucyA9IHtcbiAgICAgIHR5cGU6ICd3aW5kb3cnLFxuICAgICAgd2luZG93RmVhdHVyZXM6ICdsb2NhdGlvbj15ZXMsaGVpZ2h0PTU3MCx3aWR0aD01MjAsc2Nyb2xsYmFycz15ZXMsc3RhdHVzPXllcycsXG4gICAgICAuLi5vcHRpb25zLFxuICAgIH07XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oT1BFTlRZUEUsIG9wdGlvbnMudHlwZSEpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKEhSRUZDQUxMQkFDSywgY2FsbGJhY2spO1xuICAgIGlmIChvcHRpb25zLnR5cGUgPT09ICdocmVmJykge1xuICAgICAgdGhpcy5kb2MubG9jYXRpb24uaHJlZiA9IHVybDtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl93aW4gPSB3aW5kb3cub3Blbih1cmwsICdfYmxhbmsnLCBvcHRpb25zLndpbmRvd0ZlYXR1cmVzKTtcbiAgICB0aGlzLl93aW5UaW1lID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX3dpbiAmJiB0aGlzLl93aW4uY2xvc2VkKSB7XG4gICAgICAgIHRoaXMubmdPbkRlc3Ryb3koKTtcblxuICAgICAgICBsZXQgbW9kZWwgPSB0aGlzLnRva2VuU2VydmljZS5nZXQoKTtcbiAgICAgICAgaWYgKG1vZGVsICYmICFtb2RlbC50b2tlbikgbW9kZWwgPSBudWxsO1xuXG4gICAgICAgIC8vIOinpuWPkeWPmOabtOmAmuefpVxuICAgICAgICBpZiAobW9kZWwpIHtcbiAgICAgICAgICB0aGlzLnRva2VuU2VydmljZS5zZXQobW9kZWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vYnNlcnZlci5uZXh0KG1vZGVsKTtcbiAgICAgICAgdGhpcy5vYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgfVxuICAgIH0sIDEwMCk7XG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKFxuICAgICAgKG9ic2VydmVyOiBPYnNlcnZlcjxJVG9rZW5Nb2RlbCB8IG51bGw+KSA9PiAodGhpcy5vYnNlcnZlciA9IG9ic2VydmVyKSxcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIOaOiOadg+aIkOWKn+WQjueahOWbnuiwg+WkhOeQhlxuICAgKlxuICAgKiBAcGFyYW0gcmF3RGF0YSDmjIflrprlm57osIPorqTor4Hkv6Hmga/vvIzkuLrnqbrml7bku47moLnmja7lvZPliY1VUkzop6PmnpBcbiAgICovXG4gIGNhbGxiYWNrKHJhd0RhdGE/OiBJVG9rZW5Nb2RlbCB8IHN0cmluZyB8IG51bGwpOiBJVG9rZW5Nb2RlbCB7XG4gICAgLy8gZnJvbSB1cmlcbiAgICBpZiAoIXJhd0RhdGEgJiYgdGhpcy5yb3V0ZXIudXJsLmluZGV4T2YoJz8nKSA9PT0gLTEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgdXJsIG11c2UgY29udGFpbiBhID9gKTtcbiAgICB9XG4gICAgLy8gcGFyc2VcbiAgICBsZXQgZGF0YTogSVRva2VuTW9kZWwgPSB7IHRva2VuOiBgYCB9O1xuICAgIGlmICh0eXBlb2YgcmF3RGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnN0IHJpZ2h0VXJsID0gcmF3RGF0YS5zcGxpdCgnPycpWzFdLnNwbGl0KCcjJylbMF07XG4gICAgICBkYXRhID0gdGhpcy5yb3V0ZXIucGFyc2VVcmwoJy4vPycgKyByaWdodFVybCkucXVlcnlQYXJhbXMgYXMgSVRva2VuTW9kZWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGEgPSByYXdEYXRhIGFzIElUb2tlbk1vZGVsO1xuICAgIH1cblxuICAgIGlmICghZGF0YSB8fCAhZGF0YS50b2tlbikgdGhyb3cgbmV3IEVycm9yKGBpbnZhbGlkZSB0b2tlbiBkYXRhYCk7XG4gICAgdGhpcy50b2tlblNlcnZpY2Uuc2V0KGRhdGEpO1xuXG4gICAgY29uc3QgdXJsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oSFJFRkNBTExCQUNLKSB8fCAnLyc7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oSFJFRkNBTExCQUNLKTtcbiAgICBjb25zdCB0eXBlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oT1BFTlRZUEUpO1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKE9QRU5UWVBFKTtcbiAgICBpZiAodHlwZSA9PT0gJ3dpbmRvdycpIHtcbiAgICAgIHdpbmRvdy5jbG9zZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHVybCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMuX3dpblRpbWUpO1xuICAgIHRoaXMuX3dpblRpbWUgPSBudWxsO1xuICB9XG59XG4iXX0=