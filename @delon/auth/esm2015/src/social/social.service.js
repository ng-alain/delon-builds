/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DA_SERVICE_TOKEN, } from '../token/interface';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29jaWFsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYXV0aC8iLCJzb3VyY2VzIjpbInNyYy9zb2NpYWwvc29jaWFsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFFLFVBQVUsRUFBWSxNQUFNLE1BQU0sQ0FBQztBQUU1QyxPQUFPLEVBQ0wsZ0JBQWdCLEdBR2pCLE1BQU0sb0JBQW9CLENBQUM7O01BRXRCLFFBQVEsR0FBRyxzQkFBc0I7O01BQ2pDLFlBQVksR0FBRyxnQ0FBZ0M7QUFLckQsTUFBTSxPQUFPLGFBQWE7Ozs7OztJQUt4QixZQUNvQyxZQUEyQixFQUVuQyxHQUFRLEVBQzFCLE1BQWM7UUFIWSxpQkFBWSxHQUFaLFlBQVksQ0FBZTtRQUVuQyxRQUFHLEdBQUgsR0FBRyxDQUFLO1FBQzFCLFdBQU0sR0FBTixNQUFNLENBQVE7SUFDcEIsQ0FBQzs7Ozs7Ozs7SUFxQ0wsS0FBSyxDQUNILEdBQVcsRUFDWCxXQUFtQixHQUFHLEVBQ3RCLFVBR0ksRUFBRTtRQUVOLE9BQU8sbUJBQ0wsSUFBSSxFQUFFLFFBQVEsRUFDZCxjQUFjLEVBQ1osNkRBQTZELElBQzVELE9BQU8sQ0FDWCxDQUFDO1FBQ0YsWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdDLFlBQVksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzdDLElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7WUFDM0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFH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QVU7Ozs7NENBT04sTUFBTSxTQUFDLGdCQUFnQjs0Q0FFdkIsTUFBTSxTQUFDLFFBQVE7WUF2QlgsTUFBTTs7OztJQWdCYiw2QkFBcUI7O0lBQ3JCLGlDQUFpQjs7SUFDakIsaUNBQXdDOztJQUd0QyxxQ0FBNkQ7O0lBRTdELDRCQUFrQzs7SUFDbEMsK0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPYnNlcnZlciB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQge1xuICBEQV9TRVJWSUNFX1RPS0VOLFxuICBJVG9rZW5Nb2RlbCxcbiAgSVRva2VuU2VydmljZSxcbn0gZnJvbSAnLi4vdG9rZW4vaW50ZXJmYWNlJztcblxuY29uc3QgT1BFTlRZUEUgPSAnX2RlbG9uQXV0aFNvY2lhbFR5cGUnO1xuY29uc3QgSFJFRkNBTExCQUNLID0gJ19kZWxvbkF1dGhTb2NpYWxDYWxsYmFja0J5SHJlZic7XG5cbmV4cG9ydCB0eXBlIFNvY2lhbE9wZW5UeXBlID0gJ2hyZWYnIHwgJ3dpbmRvdyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTb2NpYWxTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfd2luOiBXaW5kb3c7XG4gIHByaXZhdGUgX3dpblRpbWU7XG4gIHByaXZhdGUgb2JzZXJ2ZXI6IE9ic2VydmVyPElUb2tlbk1vZGVsPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KERBX1NFUlZJQ0VfVE9LRU4pIHByaXZhdGUgdG9rZW5TZXJ2aWNlOiBJVG9rZW5TZXJ2aWNlLFxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogYW55LFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICkgeyB9XG5cbiAgLyoqXG4gICAqIOS9v+eUqOeql+S9k+aJk+W8gOaOiOadg+mhte+8jOi/lOWbnuWAvOaYryBgT2JzZXJ2YWJsZTxJVG9rZW5Nb2RlbD5gIOeUqOS6juiuoumYheaOiOadg+WQjui/lOWbnueahOe7k+aenFxuICAgKiBAcGFyYW0gdXJsIOiOt+WPluaOiOadg+WcsOWdgFxuICAgKiBAcGFyYW0gY2FsbGJhY2sg5Zue6LCD6Lev55Sx5Zyw5Z2AXG4gICAqIEBwYXJhbSBvcHRpb25zLndpbmRvd0ZlYXR1cmVzIOetieWQjCBgd2luZG93Lm9wZW5gIOeahCBgZmVhdHVyZXNgIOWPguaVsOWAvFxuICAgKi9cbiAgbG9naW4oXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgY2FsbGJhY2s/OiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIHR5cGU/OiAnd2luZG93JztcbiAgICAgIHdpbmRvd0ZlYXR1cmVzPzogc3RyaW5nO1xuICAgIH0sXG4gICk6IE9ic2VydmFibGU8SVRva2VuTW9kZWw+O1xuXG4gIC8qKlxuICAgKiDot7Povazoh7PmjojmnYPpobVcbiAgICogQHBhcmFtIHVybCDojrflj5bmjojmnYPlnLDlnYBcbiAgICogQHBhcmFtIGNhbGxiYWNrIOWbnuiwg+i3r+eUseWcsOWdgFxuICAgKi9cbiAgbG9naW4oXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgY2FsbGJhY2s/OiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIHR5cGU/OiAnaHJlZic7XG4gICAgfSxcbiAgKTogdm9pZDtcblxuICAvKipcbiAgICog6Lez6L2s6Iez55m75b2V6aG177yM6Iul5Li6IGB0eXBlPXdpbmRvd2Ag5pe277yM6L+U5Zue5YC85pivIGBPYnNlcnZhYmxlPElUb2tlbk1vZGVsPmBcbiAgICogQHBhcmFtIHVybCDojrflj5bmjojmnYPlnLDlnYBcbiAgICogQHBhcmFtIGNhbGxiYWNrIOW9kyBgdHlwZT1ocmVmYCDmiJDlip/ml7bnmoTlm57osIPot6/nlLHlnLDlnYBcbiAgICogQHBhcmFtIG9wdGlvbnMudHlwZSDmiZPlvIDmlrnlvI/vvIzpu5jorqQgYHdpbmRvd2BcbiAgICogQHBhcmFtIG9wdGlvbnMud2luZG93RmVhdHVyZXMg562J5ZCMIGB3aW5kb3cub3BlbmAg55qEIGBmZWF0dXJlc2Ag5Y+C5pWw5YC8XG4gICAqL1xuICBsb2dpbihcbiAgICB1cmw6IHN0cmluZyxcbiAgICBjYWxsYmFjazogc3RyaW5nID0gJy8nLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIHR5cGU/OiBTb2NpYWxPcGVuVHlwZTtcbiAgICAgIHdpbmRvd0ZlYXR1cmVzPzogc3RyaW5nO1xuICAgIH0gPSB7fSxcbiAgKTogT2JzZXJ2YWJsZTxJVG9rZW5Nb2RlbD4gfCB2b2lkIHtcbiAgICBvcHRpb25zID0ge1xuICAgICAgdHlwZTogJ3dpbmRvdycsXG4gICAgICB3aW5kb3dGZWF0dXJlczpcbiAgICAgICAgJ2xvY2F0aW9uPXllcyxoZWlnaHQ9NTcwLHdpZHRoPTUyMCxzY3JvbGxiYXJzPXllcyxzdGF0dXM9eWVzJyxcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgfTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShPUEVOVFlQRSwgb3B0aW9ucy50eXBlKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShIUkVGQ0FMTEJBQ0ssIGNhbGxiYWNrKTtcbiAgICBpZiAob3B0aW9ucy50eXBlID09PSAnaHJlZicpIHtcbiAgICAgIHRoaXMuZG9jLmxvY2F0aW9uLmhyZWYgPSB1cmw7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fd2luID0gd2luZG93Lm9wZW4odXJsLCAnX2JsYW5rJywgb3B0aW9ucy53aW5kb3dGZWF0dXJlcyk7XG4gICAgdGhpcy5fd2luVGltZSA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLl93aW4gJiYgdGhpcy5fd2luLmNsb3NlZCkge1xuICAgICAgICB0aGlzLm5nT25EZXN0cm95KCk7XG5cbiAgICAgICAgbGV0IG1vZGVsID0gdGhpcy50b2tlblNlcnZpY2UuZ2V0KCk7XG4gICAgICAgIGlmIChtb2RlbCAmJiAhbW9kZWwudG9rZW4pIG1vZGVsID0gbnVsbDtcblxuICAgICAgICAvLyDop6blj5Hlj5jmm7TpgJrnn6VcbiAgICAgICAgaWYgKG1vZGVsKSB7XG4gICAgICAgICAgdGhpcy50b2tlblNlcnZpY2Uuc2V0KG1vZGVsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub2JzZXJ2ZXIubmV4dChtb2RlbCk7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgIH1cbiAgICB9LCAxMDApO1xuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgob2JzZXJ2ZXI6IE9ic2VydmVyPElUb2tlbk1vZGVsPikgPT4ge1xuICAgICAgdGhpcy5vYnNlcnZlciA9IG9ic2VydmVyO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIOaOiOadg+aIkOWKn+WQjueahOWbnuiwg+WkhOeQhlxuICAgKlxuICAgKiBAcGFyYW0gcmF3RGF0YSDmjIflrprlm57osIPorqTor4Hkv6Hmga/vvIzkuLrnqbrml7bku47moLnmja7lvZPliY1VUkzop6PmnpBcbiAgICovXG4gIGNhbGxiYWNrKHJhd0RhdGE/OiBzdHJpbmcgfCBJVG9rZW5Nb2RlbCk6IElUb2tlbk1vZGVsIHtcbiAgICAvLyBmcm9tIHVyaVxuICAgIGlmICghcmF3RGF0YSAmJiB0aGlzLnJvdXRlci51cmwuaW5kZXhPZignPycpID09PSAtMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGB1cmwgbXVzZSBjb250YWluIGEgP2ApO1xuICAgIH1cbiAgICAvLyBwYXJzZVxuICAgIGxldCBkYXRhOiBJVG9rZW5Nb2RlbCA9IHsgdG9rZW46IGBgIH07XG4gICAgaWYgKHR5cGVvZiByYXdEYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgY29uc3QgcmlnaHRVcmwgPSByYXdEYXRhLnNwbGl0KCc/JylbMV0uc3BsaXQoJyMnKVswXTtcbiAgICAgIGRhdGEgPSB0aGlzLnJvdXRlci5wYXJzZVVybCgnLi8/JyArIHJpZ2h0VXJsKS5xdWVyeVBhcmFtcyBhcyBJVG9rZW5Nb2RlbDtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0YSA9IHJhd0RhdGE7XG4gICAgfVxuXG4gICAgaWYgKCFkYXRhIHx8ICFkYXRhLnRva2VuKSB0aHJvdyBuZXcgRXJyb3IoYGludmFsaWRlIHRva2VuIGRhdGFgKTtcbiAgICB0aGlzLnRva2VuU2VydmljZS5zZXQoZGF0YSk7XG5cbiAgICBjb25zdCB1cmwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShIUkVGQ0FMTEJBQ0spIHx8ICcvJztcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShIUkVGQ0FMTEJBQ0spO1xuICAgIGNvbnN0IHR5cGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShPUEVOVFlQRSk7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oT1BFTlRZUEUpO1xuICAgIGlmICh0eXBlID09PSAnd2luZG93Jykge1xuICAgICAgd2luZG93LmNsb3NlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwodXJsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5fd2luVGltZSk7XG4gICAgdGhpcy5fd2luVGltZSA9IG51bGw7XG4gIH1cbn1cbiJdfQ==