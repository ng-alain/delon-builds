/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { Observable } from 'rxjs';
import { DA_SERVICE_TOKEN, } from '../token/interface';
/** @type {?} */
const OPENTYPE = '_delonAuthSocialType';
/** @type {?} */
const HREFCALLBACK = '_delonAuthSocialCallbackByHref';
/** @typedef {?} */
var SocialOpenType;
export { SocialOpenType };
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
        options = Object.assign({
            type: 'window',
            windowFeatures: 'location=yes,height=570,width=520,scrollbars=yes,status=yes',
        }, options);
        localStorage.setItem(OPENTYPE, options.type);
        localStorage.setItem(HREFCALLBACK, callback);
        if (options.type === 'href') {
            this.doc.location.href = url;
            return;
        }
        this._win = window.open(url, '_blank', options.windowFeatures);
        this._win$ = setInterval(() => {
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
        }, 100);
        return Observable.create((observer) => {
            this.observer = observer;
        });
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
        /** @type {?} */
        let data = { token: `` };
        if (typeof rawData === 'string') {
            /** @type {?} */
            const rightUrl = rawData.split('?')[1].split('#')[0];
            data = /** @type {?} */ (this.router.parseUrl('./?' + rightUrl).queryParams);
        }
        else {
            data = rawData;
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
        clearInterval(this._win$);
        this._win$ = null;
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
    /** @type {?} */
    SocialService.prototype._win;
    /** @type {?} */
    SocialService.prototype._win$;
    /** @type {?} */
    SocialService.prototype.observer;
    /** @type {?} */
    SocialService.prototype.tokenService;
    /** @type {?} */
    SocialService.prototype.doc;
    /** @type {?} */
    SocialService.prototype.router;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29jaWFsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYXV0aC8iLCJzb3VyY2VzIjpbInNyYy9zb2NpYWwvc29jaWFsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFZLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUU1QyxPQUFPLEVBR0wsZ0JBQWdCLEdBQ2pCLE1BQU0sb0JBQW9CLENBQUM7O0FBRTVCLE1BQU0sUUFBUSxHQUFHLHNCQUFzQixDQUFDOztBQUN4QyxNQUFNLFlBQVksR0FBRyxnQ0FBZ0MsQ0FBQzs7OztBQUt0RCxNQUFNOzs7Ozs7SUFLSixZQUNvQyxZQUEyQixFQUNuQyxHQUFRLEVBQzFCO1FBRjBCLGlCQUFZLEdBQVosWUFBWSxDQUFlO1FBQ25DLFFBQUcsR0FBSCxHQUFHLENBQUs7UUFDMUIsV0FBTSxHQUFOLE1BQU07S0FDWjs7Ozs7Ozs7SUFxQ0osS0FBSyxDQUNILEdBQVcsRUFDWCxXQUFtQixHQUFHLEVBQ3RCLFVBR0ksRUFBRTtRQUVOLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUNyQjtZQUNFLElBQUksRUFBRSxRQUFRO1lBQ2QsY0FBYyxFQUNaLDZEQUE2RDtTQUNoRSxFQUNELE9BQU8sQ0FDUixDQUFDO1FBQ0YsWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdDLFlBQVksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzdDLElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7WUFDM0IsSUFBSSxDQUFDLEdB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LElBQUksQ0FBQztLQUNuQjs7O1lBbElGLFVBQVU7Ozs7NENBT04sTUFBTSxTQUFDLGdCQUFnQjs0Q0FDdkIsTUFBTSxTQUFDLFFBQVE7WUF2QlgsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgT2JzZXJ2ZXIsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7XHJcbiAgSVRva2VuTW9kZWwsXHJcbiAgSVRva2VuU2VydmljZSxcclxuICBEQV9TRVJWSUNFX1RPS0VOLFxyXG59IGZyb20gJy4uL3Rva2VuL2ludGVyZmFjZSc7XHJcblxyXG5jb25zdCBPUEVOVFlQRSA9ICdfZGVsb25BdXRoU29jaWFsVHlwZSc7XHJcbmNvbnN0IEhSRUZDQUxMQkFDSyA9ICdfZGVsb25BdXRoU29jaWFsQ2FsbGJhY2tCeUhyZWYnO1xyXG5cclxuZXhwb3J0IHR5cGUgU29jaWFsT3BlblR5cGUgPSAnaHJlZicgfCAnd2luZG93JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNvY2lhbFNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgX3dpbjogV2luZG93O1xyXG4gIHByaXZhdGUgX3dpbiQ6IGFueTtcclxuICBwcml2YXRlIG9ic2VydmVyOiBPYnNlcnZlcjxJVG9rZW5Nb2RlbD47XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQEluamVjdChEQV9TRVJWSUNFX1RPS0VOKSBwcml2YXRlIHRva2VuU2VydmljZTogSVRva2VuU2VydmljZSxcclxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnksXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICkge31cclxuXHJcbiAgLyoqXHJcbiAgICog5L2/55So56qX5L2T5omT5byA5o6I5p2D6aG177yM6L+U5Zue5YC85pivIGBPYnNlcnZhYmxlPElUb2tlbk1vZGVsPmAg55So5LqO6K6i6ZiF5o6I5p2D5ZCO6L+U5Zue55qE57uT5p6cXHJcbiAgICogQHBhcmFtIHVybCDojrflj5bmjojmnYPlnLDlnYBcclxuICAgKiBAcGFyYW0gY2FsbGJhY2sg5Zue6LCD6Lev55Sx5Zyw5Z2AXHJcbiAgICogQHBhcmFtIG9wdGlvbnMud2luZG93RmVhdHVyZXMg562J5ZCMIGB3aW5kb3cub3BlbmAg55qEIGBmZWF0dXJlc2Ag5Y+C5pWw5YC8XHJcbiAgICovXHJcbiAgbG9naW4oXHJcbiAgICB1cmw6IHN0cmluZyxcclxuICAgIGNhbGxiYWNrPzogc3RyaW5nLFxyXG4gICAgb3B0aW9ucz86IHtcclxuICAgICAgdHlwZT86ICd3aW5kb3cnO1xyXG4gICAgICB3aW5kb3dGZWF0dXJlcz86IHN0cmluZztcclxuICAgIH0sXHJcbiAgKTogT2JzZXJ2YWJsZTxJVG9rZW5Nb2RlbD47XHJcblxyXG4gIC8qKlxyXG4gICAqIOi3s+i9rOiHs+aOiOadg+mhtVxyXG4gICAqIEBwYXJhbSB1cmwg6I635Y+W5o6I5p2D5Zyw5Z2AXHJcbiAgICogQHBhcmFtIGNhbGxiYWNrIOWbnuiwg+i3r+eUseWcsOWdgFxyXG4gICAqL1xyXG4gIGxvZ2luKFxyXG4gICAgdXJsOiBzdHJpbmcsXHJcbiAgICBjYWxsYmFjaz86IHN0cmluZyxcclxuICAgIG9wdGlvbnM/OiB7XHJcbiAgICAgIHR5cGU/OiAnaHJlZic7XHJcbiAgICB9LFxyXG4gICk6IHZvaWQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIOi3s+i9rOiHs+eZu+W9lemhte+8jOiLpeS4uiBgdHlwZT13aW5kb3dgIOaXtu+8jOi/lOWbnuWAvOaYryBgT2JzZXJ2YWJsZTxJVG9rZW5Nb2RlbD5gXHJcbiAgICogQHBhcmFtIHVybCDojrflj5bmjojmnYPlnLDlnYBcclxuICAgKiBAcGFyYW0gY2FsbGJhY2sg5b2TIGB0eXBlPWhyZWZgIOaIkOWKn+aXtueahOWbnuiwg+i3r+eUseWcsOWdgFxyXG4gICAqIEBwYXJhbSBvcHRpb25zLnR5cGUg5omT5byA5pa55byP77yM6buY6K6kIGB3aW5kb3dgXHJcbiAgICogQHBhcmFtIG9wdGlvbnMud2luZG93RmVhdHVyZXMg562J5ZCMIGB3aW5kb3cub3BlbmAg55qEIGBmZWF0dXJlc2Ag5Y+C5pWw5YC8XHJcbiAgICovXHJcbiAgbG9naW4oXHJcbiAgICB1cmw6IHN0cmluZyxcclxuICAgIGNhbGxiYWNrOiBzdHJpbmcgPSAnLycsXHJcbiAgICBvcHRpb25zOiB7XHJcbiAgICAgIHR5cGU/OiBTb2NpYWxPcGVuVHlwZTtcclxuICAgICAgd2luZG93RmVhdHVyZXM/OiBzdHJpbmc7XHJcbiAgICB9ID0ge30sXHJcbiAgKTogT2JzZXJ2YWJsZTxJVG9rZW5Nb2RlbD4gfCB2b2lkIHtcclxuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKFxyXG4gICAgICB7XHJcbiAgICAgICAgdHlwZTogJ3dpbmRvdycsXHJcbiAgICAgICAgd2luZG93RmVhdHVyZXM6XHJcbiAgICAgICAgICAnbG9jYXRpb249eWVzLGhlaWdodD01NzAsd2lkdGg9NTIwLHNjcm9sbGJhcnM9eWVzLHN0YXR1cz15ZXMnLFxyXG4gICAgICB9LFxyXG4gICAgICBvcHRpb25zLFxyXG4gICAgKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKE9QRU5UWVBFLCBvcHRpb25zLnR5cGUpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oSFJFRkNBTExCQUNLLCBjYWxsYmFjayk7XHJcbiAgICBpZiAob3B0aW9ucy50eXBlID09PSAnaHJlZicpIHtcclxuICAgICAgdGhpcy5kb2MubG9jYXRpb24uaHJlZiA9IHVybDtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX3dpbiA9IHdpbmRvdy5vcGVuKHVybCwgJ19ibGFuaycsIG9wdGlvbnMud2luZG93RmVhdHVyZXMpO1xyXG4gICAgdGhpcy5fd2luJCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuX3dpbiAmJiB0aGlzLl93aW4uY2xvc2VkKSB7XHJcbiAgICAgICAgdGhpcy5uZ09uRGVzdHJveSgpO1xyXG5cclxuICAgICAgICBsZXQgbW9kZWwgPSB0aGlzLnRva2VuU2VydmljZS5nZXQoKTtcclxuICAgICAgICBpZiAobW9kZWwgJiYgIW1vZGVsLnRva2VuKSBtb2RlbCA9IG51bGw7XHJcblxyXG4gICAgICAgIC8vIOinpuWPkeWPmOabtOmAmuefpVxyXG4gICAgICAgIGlmIChtb2RlbCkge1xyXG4gICAgICAgICAgdGhpcy50b2tlblNlcnZpY2Uuc2V0KG1vZGVsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXIubmV4dChtb2RlbCk7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlci5jb21wbGV0ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9LCAxMDApO1xyXG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcjogT2JzZXJ2ZXI8SVRva2VuTW9kZWw+KSA9PiB7XHJcbiAgICAgIHRoaXMub2JzZXJ2ZXIgPSBvYnNlcnZlcjtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5o6I5p2D5oiQ5Yqf5ZCO55qE5Zue6LCD5aSE55CGXHJcbiAgICpcclxuICAgKiBAcGFyYW0gcmF3RGF0YSDmjIflrprlm57osIPorqTor4Hkv6Hmga/vvIzkuLrnqbrml7bku47moLnmja7lvZPliY1VUkzop6PmnpBcclxuICAgKi9cclxuICBjYWxsYmFjayhyYXdEYXRhPzogc3RyaW5nIHwgSVRva2VuTW9kZWwpOiBJVG9rZW5Nb2RlbCB7XHJcbiAgICAvLyBmcm9tIHVyaVxyXG4gICAgaWYgKCFyYXdEYXRhICYmIHRoaXMucm91dGVyLnVybC5pbmRleE9mKCc/JykgPT09IC0xKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgdXJsIG11c2UgY29udGFpbiBhID9gKTtcclxuICAgIH1cclxuICAgIC8vIHBhcnNlXHJcbiAgICBsZXQgZGF0YTogSVRva2VuTW9kZWwgPSB7IHRva2VuOiBgYCB9O1xyXG4gICAgaWYgKHR5cGVvZiByYXdEYXRhID09PSAnc3RyaW5nJykge1xyXG4gICAgICBjb25zdCByaWdodFVybCA9IHJhd0RhdGEuc3BsaXQoJz8nKVsxXS5zcGxpdCgnIycpWzBdO1xyXG4gICAgICBkYXRhID0gPGFueT50aGlzLnJvdXRlci5wYXJzZVVybCgnLi8/JyArIHJpZ2h0VXJsKS5xdWVyeVBhcmFtcztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRhdGEgPSByYXdEYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghZGF0YSB8fCAhZGF0YS50b2tlbikgdGhyb3cgbmV3IEVycm9yKGBpbnZhbGlkZSB0b2tlbiBkYXRhYCk7XHJcbiAgICB0aGlzLnRva2VuU2VydmljZS5zZXQoZGF0YSk7XHJcblxyXG4gICAgY29uc3QgdXJsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oSFJFRkNBTExCQUNLKSB8fCAnLyc7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShIUkVGQ0FMTEJBQ0spO1xyXG4gICAgY29uc3QgdHlwZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKE9QRU5UWVBFKTtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKE9QRU5UWVBFKTtcclxuICAgIGlmICh0eXBlID09PSAnd2luZG93Jykge1xyXG4gICAgICB3aW5kb3cuY2xvc2UoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwodXJsKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLl93aW4kKTtcclxuICAgIHRoaXMuX3dpbiQgPSBudWxsO1xyXG4gIH1cclxufVxyXG4iXX0=