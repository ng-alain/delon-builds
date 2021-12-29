import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DA_SERVICE_TOKEN } from '../token/interface';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const OPENTYPE = '_delonAuthSocialType';
const HREFCALLBACK = '_delonAuthSocialCallbackByHref';
export class SocialService {
    constructor(tokenService, doc, router) {
        this.tokenService = tokenService;
        this.doc = doc;
        this.router = router;
    }
    /**
     * 跳转至登录页，若为 `type=window` 时，返回值是 `Observable<ITokenModel>`
     *
     * @param url 获取授权地址
     * @param callback 当 `type=href` 成功时的回调路由地址
     * @param options.type 打开方式，默认 `window`
     * @param options.windowFeatures 等同 `window.open` 的 `features` 参数值
     */
    login(url, callback = '/', options = {}) {
        options = {
            type: 'window',
            windowFeatures: 'location=yes,height=570,width=520,scrollbars=yes,status=yes',
            ...options
        };
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
        return new Observable((observer) => {
            this.observer = observer;
        });
    }
    /**
     * 授权成功后的回调处理
     *
     * @param rawData 指定回调认证信息，为空时从根据当前URL解析
     */
    callback(rawData) {
        // from uri
        if (!rawData && this.router.url.indexOf('?') === -1) {
            throw new Error(`url muse contain a ?`);
        }
        // parse
        let data = { token: `` };
        if (typeof rawData === 'string') {
            const rightUrl = rawData.split('?')[1].split('#')[0];
            data = this.router.parseUrl(`./?${rightUrl}`).queryParams;
        }
        else {
            data = rawData;
        }
        if (!data || !data.token)
            throw new Error(`invalide token data`);
        this.tokenService.set(data);
        const url = localStorage.getItem(HREFCALLBACK) || '/';
        localStorage.removeItem(HREFCALLBACK);
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
    ngOnDestroy() {
        clearInterval(this._winTime);
        this._winTime = null;
    }
}
SocialService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: SocialService, deps: [{ token: DA_SERVICE_TOKEN }, { token: DOCUMENT }, { token: i1.Router }], target: i0.ɵɵFactoryTarget.Injectable });
SocialService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: SocialService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: SocialService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [DA_SERVICE_TOKEN]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: i1.Router }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29jaWFsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hdXRoL3NyYy9zb2NpYWwvc29jaWFsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sRUFBRSxVQUFVLEVBQVksTUFBTSxNQUFNLENBQUM7QUFJNUMsT0FBTyxFQUFFLGdCQUFnQixFQUE4QixNQUFNLG9CQUFvQixDQUFDOzs7QUFFbEYsTUFBTSxRQUFRLEdBQUcsc0JBQXNCLENBQUM7QUFDeEMsTUFBTSxZQUFZLEdBQUcsZ0NBQWdDLENBQUM7QUFLdEQsTUFBTSxPQUFPLGFBQWE7SUFLeEIsWUFDb0MsWUFBMkIsRUFDbkMsR0FBYyxFQUNoQyxNQUFjO1FBRlksaUJBQVksR0FBWixZQUFZLENBQWU7UUFDbkMsUUFBRyxHQUFILEdBQUcsQ0FBVztRQUNoQyxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQ3JCLENBQUM7SUFnQ0o7Ozs7Ozs7T0FPRztJQUNILEtBQUssQ0FDSCxHQUFXLEVBQ1gsV0FBbUIsR0FBRyxFQUN0QixVQUdJLEVBQUU7UUFFTixPQUFPLEdBQUc7WUFDUixJQUFJLEVBQUUsUUFBUTtZQUNkLGNBQWMsRUFBRSw2REFBNkQ7WUFDN0UsR0FBRyxPQUFPO1NBQ1gsQ0FBQztRQUNGLFlBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxJQUFLLENBQUMsQ0FBQztRQUM5QyxZQUFZLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxRQUFRLENBQUMsQ0FBQztRQUM3QyxJQUFJLE9BQU8sQ0FBQyxJQUFJLEtBQUssTUFBTSxFQUFFO1lBQzNCLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksR0FB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QUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDdkIsQ0FBQzs7MEdBaklVLGFBQWEsa0JBTWQsZ0JBQWdCLGFBQ2hCLFFBQVE7OEdBUFAsYUFBYTsyRkFBYixhQUFhO2tCQUR6QixVQUFVOzswQkFPTixNQUFNOzJCQUFDLGdCQUFnQjs7MEJBQ3ZCLE1BQU07MkJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5pbXBvcnQgeyBEQV9TRVJWSUNFX1RPS0VOLCBJVG9rZW5Nb2RlbCwgSVRva2VuU2VydmljZSB9IGZyb20gJy4uL3Rva2VuL2ludGVyZmFjZSc7XG5cbmNvbnN0IE9QRU5UWVBFID0gJ19kZWxvbkF1dGhTb2NpYWxUeXBlJztcbmNvbnN0IEhSRUZDQUxMQkFDSyA9ICdfZGVsb25BdXRoU29jaWFsQ2FsbGJhY2tCeUhyZWYnO1xuXG5leHBvcnQgdHlwZSBTb2NpYWxPcGVuVHlwZSA9ICdocmVmJyB8ICd3aW5kb3cnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU29jaWFsU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX3dpbjogV2luZG93IHwgbnVsbDtcbiAgcHJpdmF0ZSBfd2luVGltZTogTnpTYWZlQW55O1xuICBwcml2YXRlIG9ic2VydmVyOiBPYnNlcnZlcjxJVG9rZW5Nb2RlbCB8IG51bGw+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoREFfU0VSVklDRV9UT0tFTikgcHJpdmF0ZSB0b2tlblNlcnZpY2U6IElUb2tlblNlcnZpY2UsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IE56U2FmZUFueSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyXG4gICkge31cblxuICAvKipcbiAgICog5L2/55So56qX5L2T5omT5byA5o6I5p2D6aG177yM6L+U5Zue5YC85pivIGBPYnNlcnZhYmxlPElUb2tlbk1vZGVsPmAg55So5LqO6K6i6ZiF5o6I5p2D5ZCO6L+U5Zue55qE57uT5p6cXG4gICAqXG4gICAqIEBwYXJhbSB1cmwg6I635Y+W5o6I5p2D5Zyw5Z2AXG4gICAqIEBwYXJhbSBjYWxsYmFjayDlm57osIPot6/nlLHlnLDlnYBcbiAgICogQHBhcmFtIG9wdGlvbnMud2luZG93RmVhdHVyZXMg562J5ZCMIGB3aW5kb3cub3BlbmAg55qEIGBmZWF0dXJlc2Ag5Y+C5pWw5YC8XG4gICAqL1xuICBsb2dpbihcbiAgICB1cmw6IHN0cmluZyxcbiAgICBjYWxsYmFjaz86IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgdHlwZT86ICd3aW5kb3cnO1xuICAgICAgd2luZG93RmVhdHVyZXM/OiBzdHJpbmc7XG4gICAgfVxuICApOiBPYnNlcnZhYmxlPElUb2tlbk1vZGVsPjtcblxuICAvKipcbiAgICog6Lez6L2s6Iez5o6I5p2D6aG1XG4gICAqXG4gICAqIEBwYXJhbSB1cmwg6I635Y+W5o6I5p2D5Zyw5Z2AXG4gICAqIEBwYXJhbSBjYWxsYmFjayDlm57osIPot6/nlLHlnLDlnYBcbiAgICovXG4gIGxvZ2luKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGNhbGxiYWNrPzogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICB0eXBlPzogJ2hyZWYnO1xuICAgIH1cbiAgKTogdm9pZDtcblxuICAvKipcbiAgICog6Lez6L2s6Iez55m75b2V6aG177yM6Iul5Li6IGB0eXBlPXdpbmRvd2Ag5pe277yM6L+U5Zue5YC85pivIGBPYnNlcnZhYmxlPElUb2tlbk1vZGVsPmBcbiAgICpcbiAgICogQHBhcmFtIHVybCDojrflj5bmjojmnYPlnLDlnYBcbiAgICogQHBhcmFtIGNhbGxiYWNrIOW9kyBgdHlwZT1ocmVmYCDmiJDlip/ml7bnmoTlm57osIPot6/nlLHlnLDlnYBcbiAgICogQHBhcmFtIG9wdGlvbnMudHlwZSDmiZPlvIDmlrnlvI/vvIzpu5jorqQgYHdpbmRvd2BcbiAgICogQHBhcmFtIG9wdGlvbnMud2luZG93RmVhdHVyZXMg562J5ZCMIGB3aW5kb3cub3BlbmAg55qEIGBmZWF0dXJlc2Ag5Y+C5pWw5YC8XG4gICAqL1xuICBsb2dpbihcbiAgICB1cmw6IHN0cmluZyxcbiAgICBjYWxsYmFjazogc3RyaW5nID0gJy8nLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIHR5cGU/OiBTb2NpYWxPcGVuVHlwZTtcbiAgICAgIHdpbmRvd0ZlYXR1cmVzPzogc3RyaW5nO1xuICAgIH0gPSB7fVxuICApOiBPYnNlcnZhYmxlPElUb2tlbk1vZGVsIHwgbnVsbD4gfCB2b2lkIHtcbiAgICBvcHRpb25zID0ge1xuICAgICAgdHlwZTogJ3dpbmRvdycsXG4gICAgICB3aW5kb3dGZWF0dXJlczogJ2xvY2F0aW9uPXllcyxoZWlnaHQ9NTcwLHdpZHRoPTUyMCxzY3JvbGxiYXJzPXllcyxzdGF0dXM9eWVzJyxcbiAgICAgIC4uLm9wdGlvbnNcbiAgICB9O1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKE9QRU5UWVBFLCBvcHRpb25zLnR5cGUhKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShIUkVGQ0FMTEJBQ0ssIGNhbGxiYWNrKTtcbiAgICBpZiAob3B0aW9ucy50eXBlID09PSAnaHJlZicpIHtcbiAgICAgIHRoaXMuZG9jLmxvY2F0aW9uLmhyZWYgPSB1cmw7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fd2luID0gd2luZG93Lm9wZW4odXJsLCAnX2JsYW5rJywgb3B0aW9ucy53aW5kb3dGZWF0dXJlcyk7XG4gICAgdGhpcy5fd2luVGltZSA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLl93aW4gJiYgdGhpcy5fd2luLmNsb3NlZCkge1xuICAgICAgICB0aGlzLm5nT25EZXN0cm95KCk7XG5cbiAgICAgICAgbGV0IG1vZGVsID0gdGhpcy50b2tlblNlcnZpY2UuZ2V0KCk7XG4gICAgICAgIGlmIChtb2RlbCAmJiAhbW9kZWwudG9rZW4pIG1vZGVsID0gbnVsbDtcblxuICAgICAgICAvLyDop6blj5Hlj5jmm7TpgJrnn6VcbiAgICAgICAgaWYgKG1vZGVsKSB7XG4gICAgICAgICAgdGhpcy50b2tlblNlcnZpY2Uuc2V0KG1vZGVsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub2JzZXJ2ZXIubmV4dChtb2RlbCk7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgIH1cbiAgICB9LCAxMDApO1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXI6IE9ic2VydmVyPElUb2tlbk1vZGVsIHwgbnVsbD4pID0+IHtcbiAgICAgIHRoaXMub2JzZXJ2ZXIgPSBvYnNlcnZlcjtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmjojmnYPmiJDlip/lkI7nmoTlm57osIPlpITnkIZcbiAgICpcbiAgICogQHBhcmFtIHJhd0RhdGEg5oyH5a6a5Zue6LCD6K6k6K+B5L+h5oGv77yM5Li656m65pe25LuO5qC55o2u5b2T5YmNVVJM6Kej5p6QXG4gICAqL1xuICBjYWxsYmFjayhyYXdEYXRhPzogSVRva2VuTW9kZWwgfCBzdHJpbmcgfCBudWxsKTogSVRva2VuTW9kZWwge1xuICAgIC8vIGZyb20gdXJpXG4gICAgaWYgKCFyYXdEYXRhICYmIHRoaXMucm91dGVyLnVybC5pbmRleE9mKCc/JykgPT09IC0xKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYHVybCBtdXNlIGNvbnRhaW4gYSA/YCk7XG4gICAgfVxuICAgIC8vIHBhcnNlXG4gICAgbGV0IGRhdGE6IElUb2tlbk1vZGVsID0geyB0b2tlbjogYGAgfTtcbiAgICBpZiAodHlwZW9mIHJhd0RhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25zdCByaWdodFVybCA9IHJhd0RhdGEuc3BsaXQoJz8nKVsxXS5zcGxpdCgnIycpWzBdO1xuICAgICAgZGF0YSA9IHRoaXMucm91dGVyLnBhcnNlVXJsKGAuLz8ke3JpZ2h0VXJsfWApLnF1ZXJ5UGFyYW1zIGFzIElUb2tlbk1vZGVsO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRhID0gcmF3RGF0YSBhcyBJVG9rZW5Nb2RlbDtcbiAgICB9XG5cbiAgICBpZiAoIWRhdGEgfHwgIWRhdGEudG9rZW4pIHRocm93IG5ldyBFcnJvcihgaW52YWxpZGUgdG9rZW4gZGF0YWApO1xuICAgIHRoaXMudG9rZW5TZXJ2aWNlLnNldChkYXRhKTtcblxuICAgIGNvbnN0IHVybCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKEhSRUZDQUxMQkFDSykgfHwgJy8nO1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKEhSRUZDQUxMQkFDSyk7XG4gICAgY29uc3QgdHlwZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKE9QRU5UWVBFKTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShPUEVOVFlQRSk7XG4gICAgaWYgKHR5cGUgPT09ICd3aW5kb3cnKSB7XG4gICAgICB3aW5kb3cuY2xvc2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCh1cmwpO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLl93aW5UaW1lKTtcbiAgICB0aGlzLl93aW5UaW1lID0gbnVsbDtcbiAgfVxufVxuIl19