/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
        localStorage.setItem(OPENTYPE, options.type);
        localStorage.setItem(HREFCALLBACK, callback);
        if (options.type === 'href') {
            this.doc.location.href = url;
            return;
        }
        this._win = window.open(url, '_blank', options.windowFeatures);
        this._winTime = setInterval(() => {
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
        // parse
        /** @type {?} */
        let data = { token: `` };
        if (typeof rawData === 'string') {
            /** @type {?} */
            const rightUrl = rawData.split('?')[1].split('#')[0];
            data = (/** @type {?} */ (this.router.parseUrl('./?' + rightUrl).queryParams));
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
    /** @type {?} */
    SocialService.prototype._win;
    /** @type {?} */
    SocialService.prototype._winTime;
    /** @type {?} */
    SocialService.prototype.observer;
    /** @type {?} */
    SocialService.prototype.tokenService;
    /** @type {?} */
    SocialService.prototype.doc;
    /** @type {?} */
    SocialService.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29jaWFsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYXV0aC8iLCJzb3VyY2VzIjpbInNyYy9zb2NpYWwvc29jaWFsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFFLFVBQVUsRUFBWSxNQUFNLE1BQU0sQ0FBQztBQUU1QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQThCLE1BQU0sb0JBQW9CLENBQUM7O01BRTVFLFFBQVEsR0FBRyxzQkFBc0I7O01BQ2pDLFlBQVksR0FBRyxnQ0FBZ0M7QUFLckQsTUFBTSxPQUFPLGFBQWE7Ozs7OztJQUt4QixZQUNvQyxZQUEyQixFQUVuQyxHQUFRLEVBQzFCLE1BQWM7UUFIWSxpQkFBWSxHQUFaLFlBQVksQ0FBZTtRQUVuQyxRQUFHLEdBQUgsR0FBRyxDQUFLO1FBQzFCLFdBQU0sR0FBTixNQUFNLENBQVE7SUFDckIsQ0FBQzs7Ozs7Ozs7SUFxQ0osS0FBSyxDQUNILEdBQVcsRUFDWCxXQUFtQixHQUFHLEVBQ3RCLFVBR0ksRUFBRTtRQUVOLE9BQU8sbUJBQ0wsSUFBSSxFQUFFLFFBQVEsRUFDZCxjQUFjLEVBQUUsNkRBQTZELElBQzFFLE9BQU8sQ0FDWCxDQUFDO1FBQ0YsWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdDLFlBQVksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzdDLElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7WUFDM0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFH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QVU7Ozs7NENBT04sTUFBTSxTQUFDLGdCQUFnQjs0Q0FFdkIsTUFBTSxTQUFDLFFBQVE7WUFuQlgsTUFBTTs7OztJQVliLDZCQUFxQjs7SUFDckIsaUNBQWlCOztJQUNqQixpQ0FBd0M7O0lBR3RDLHFDQUE2RDs7SUFFN0QsNEJBQWtDOztJQUNsQywrQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IERBX1NFUlZJQ0VfVE9LRU4sIElUb2tlbk1vZGVsLCBJVG9rZW5TZXJ2aWNlIH0gZnJvbSAnLi4vdG9rZW4vaW50ZXJmYWNlJztcblxuY29uc3QgT1BFTlRZUEUgPSAnX2RlbG9uQXV0aFNvY2lhbFR5cGUnO1xuY29uc3QgSFJFRkNBTExCQUNLID0gJ19kZWxvbkF1dGhTb2NpYWxDYWxsYmFja0J5SHJlZic7XG5cbmV4cG9ydCB0eXBlIFNvY2lhbE9wZW5UeXBlID0gJ2hyZWYnIHwgJ3dpbmRvdyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTb2NpYWxTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfd2luOiBXaW5kb3c7XG4gIHByaXZhdGUgX3dpblRpbWU7XG4gIHByaXZhdGUgb2JzZXJ2ZXI6IE9ic2VydmVyPElUb2tlbk1vZGVsPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KERBX1NFUlZJQ0VfVE9LRU4pIHByaXZhdGUgdG9rZW5TZXJ2aWNlOiBJVG9rZW5TZXJ2aWNlLFxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogYW55LFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICkge31cblxuICAvKipcbiAgICog5L2/55So56qX5L2T5omT5byA5o6I5p2D6aG177yM6L+U5Zue5YC85pivIGBPYnNlcnZhYmxlPElUb2tlbk1vZGVsPmAg55So5LqO6K6i6ZiF5o6I5p2D5ZCO6L+U5Zue55qE57uT5p6cXG4gICAqIEBwYXJhbSB1cmwg6I635Y+W5o6I5p2D5Zyw5Z2AXG4gICAqIEBwYXJhbSBjYWxsYmFjayDlm57osIPot6/nlLHlnLDlnYBcbiAgICogQHBhcmFtIG9wdGlvbnMud2luZG93RmVhdHVyZXMg562J5ZCMIGB3aW5kb3cub3BlbmAg55qEIGBmZWF0dXJlc2Ag5Y+C5pWw5YC8XG4gICAqL1xuICBsb2dpbihcbiAgICB1cmw6IHN0cmluZyxcbiAgICBjYWxsYmFjaz86IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgdHlwZT86ICd3aW5kb3cnO1xuICAgICAgd2luZG93RmVhdHVyZXM/OiBzdHJpbmc7XG4gICAgfSxcbiAgKTogT2JzZXJ2YWJsZTxJVG9rZW5Nb2RlbD47XG5cbiAgLyoqXG4gICAqIOi3s+i9rOiHs+aOiOadg+mhtVxuICAgKiBAcGFyYW0gdXJsIOiOt+WPluaOiOadg+WcsOWdgFxuICAgKiBAcGFyYW0gY2FsbGJhY2sg5Zue6LCD6Lev55Sx5Zyw5Z2AXG4gICAqL1xuICBsb2dpbihcbiAgICB1cmw6IHN0cmluZyxcbiAgICBjYWxsYmFjaz86IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgdHlwZT86ICdocmVmJztcbiAgICB9LFxuICApOiB2b2lkO1xuXG4gIC8qKlxuICAgKiDot7Povazoh7PnmbvlvZXpobXvvIzoi6XkuLogYHR5cGU9d2luZG93YCDml7bvvIzov5Tlm57lgLzmmK8gYE9ic2VydmFibGU8SVRva2VuTW9kZWw+YFxuICAgKiBAcGFyYW0gdXJsIOiOt+WPluaOiOadg+WcsOWdgFxuICAgKiBAcGFyYW0gY2FsbGJhY2sg5b2TIGB0eXBlPWhyZWZgIOaIkOWKn+aXtueahOWbnuiwg+i3r+eUseWcsOWdgFxuICAgKiBAcGFyYW0gb3B0aW9ucy50eXBlIOaJk+W8gOaWueW8j++8jOm7mOiupCBgd2luZG93YFxuICAgKiBAcGFyYW0gb3B0aW9ucy53aW5kb3dGZWF0dXJlcyDnrYnlkIwgYHdpbmRvdy5vcGVuYCDnmoQgYGZlYXR1cmVzYCDlj4LmlbDlgLxcbiAgICovXG4gIGxvZ2luKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGNhbGxiYWNrOiBzdHJpbmcgPSAnLycsXG4gICAgb3B0aW9uczoge1xuICAgICAgdHlwZT86IFNvY2lhbE9wZW5UeXBlO1xuICAgICAgd2luZG93RmVhdHVyZXM/OiBzdHJpbmc7XG4gICAgfSA9IHt9LFxuICApOiBPYnNlcnZhYmxlPElUb2tlbk1vZGVsPiB8IHZvaWQge1xuICAgIG9wdGlvbnMgPSB7XG4gICAgICB0eXBlOiAnd2luZG93JyxcbiAgICAgIHdpbmRvd0ZlYXR1cmVzOiAnbG9jYXRpb249eWVzLGhlaWdodD01NzAsd2lkdGg9NTIwLHNjcm9sbGJhcnM9eWVzLHN0YXR1cz15ZXMnLFxuICAgICAgLi4ub3B0aW9ucyxcbiAgICB9O1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKE9QRU5UWVBFLCBvcHRpb25zLnR5cGUpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKEhSRUZDQUxMQkFDSywgY2FsbGJhY2spO1xuICAgIGlmIChvcHRpb25zLnR5cGUgPT09ICdocmVmJykge1xuICAgICAgdGhpcy5kb2MubG9jYXRpb24uaHJlZiA9IHVybDtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl93aW4gPSB3aW5kb3cub3Blbih1cmwsICdfYmxhbmsnLCBvcHRpb25zLndpbmRvd0ZlYXR1cmVzKTtcbiAgICB0aGlzLl93aW5UaW1lID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX3dpbiAmJiB0aGlzLl93aW4uY2xvc2VkKSB7XG4gICAgICAgIHRoaXMubmdPbkRlc3Ryb3koKTtcblxuICAgICAgICBsZXQgbW9kZWwgPSB0aGlzLnRva2VuU2VydmljZS5nZXQoKTtcbiAgICAgICAgaWYgKG1vZGVsICYmICFtb2RlbC50b2tlbikgbW9kZWwgPSBudWxsO1xuXG4gICAgICAgIC8vIOinpuWPkeWPmOabtOmAmuefpVxuICAgICAgICBpZiAobW9kZWwpIHtcbiAgICAgICAgICB0aGlzLnRva2VuU2VydmljZS5zZXQobW9kZWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vYnNlcnZlci5uZXh0KG1vZGVsKTtcbiAgICAgICAgdGhpcy5vYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgfVxuICAgIH0sIDEwMCk7XG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKChvYnNlcnZlcjogT2JzZXJ2ZXI8SVRva2VuTW9kZWw+KSA9PiB7XG4gICAgICB0aGlzLm9ic2VydmVyID0gb2JzZXJ2ZXI7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICog5o6I5p2D5oiQ5Yqf5ZCO55qE5Zue6LCD5aSE55CGXG4gICAqXG4gICAqIEBwYXJhbSByYXdEYXRhIOaMh+WumuWbnuiwg+iupOivgeS/oeaBr++8jOS4uuepuuaXtuS7juagueaNruW9k+WJjVVSTOino+aekFxuICAgKi9cbiAgY2FsbGJhY2socmF3RGF0YT86IHN0cmluZyB8IElUb2tlbk1vZGVsKTogSVRva2VuTW9kZWwge1xuICAgIC8vIGZyb20gdXJpXG4gICAgaWYgKCFyYXdEYXRhICYmIHRoaXMucm91dGVyLnVybC5pbmRleE9mKCc/JykgPT09IC0xKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYHVybCBtdXNlIGNvbnRhaW4gYSA/YCk7XG4gICAgfVxuICAgIC8vIHBhcnNlXG4gICAgbGV0IGRhdGE6IElUb2tlbk1vZGVsID0geyB0b2tlbjogYGAgfTtcbiAgICBpZiAodHlwZW9mIHJhd0RhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25zdCByaWdodFVybCA9IHJhd0RhdGEuc3BsaXQoJz8nKVsxXS5zcGxpdCgnIycpWzBdO1xuICAgICAgZGF0YSA9IHRoaXMucm91dGVyLnBhcnNlVXJsKCcuLz8nICsgcmlnaHRVcmwpLnF1ZXJ5UGFyYW1zIGFzIElUb2tlbk1vZGVsO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRhID0gcmF3RGF0YTtcbiAgICB9XG5cbiAgICBpZiAoIWRhdGEgfHwgIWRhdGEudG9rZW4pIHRocm93IG5ldyBFcnJvcihgaW52YWxpZGUgdG9rZW4gZGF0YWApO1xuICAgIHRoaXMudG9rZW5TZXJ2aWNlLnNldChkYXRhKTtcblxuICAgIGNvbnN0IHVybCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKEhSRUZDQUxMQkFDSykgfHwgJy8nO1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKEhSRUZDQUxMQkFDSyk7XG4gICAgY29uc3QgdHlwZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKE9QRU5UWVBFKTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShPUEVOVFlQRSk7XG4gICAgaWYgKHR5cGUgPT09ICd3aW5kb3cnKSB7XG4gICAgICB3aW5kb3cuY2xvc2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCh1cmwpO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLl93aW5UaW1lKTtcbiAgICB0aGlzLl93aW5UaW1lID0gbnVsbDtcbiAgfVxufVxuIl19