import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/platform";
/**
 * A set of simple Cookie manipulation classes.
 *
 * 一组简单的 Cookie 操作类。
 */
export class CookieService {
    constructor(_doc, platform) {
        this._doc = _doc;
        this.platform = platform;
    }
    get doc() {
        return this._doc || document;
    }
    /**
     * Original cookie value
     *
     * 原始Cookie值
     */
    get cookie() {
        return this.platform.isBrowser ? this.doc.cookie : '';
    }
    /**
     * Get all cookie key-value pairs
     *
     * 获取所有Cookie键值对
     */
    getAll() {
        const ret = {};
        const arr = this.cookie.split('; ');
        for (let i = 0; i < arr.length; i++) {
            const cookie = arr[i];
            const index = cookie.indexOf('=');
            if (index > 0) {
                const name = decodeURIComponent(cookie.substring(0, index));
                if (ret[name] == null) {
                    ret[name] = decodeURIComponent(cookie.substring(index + 1));
                }
            }
        }
        return ret;
    }
    /**
     * Get the value of given cookie `key`
     *
     * 获取指定 `key` 的值
     */
    get(key) {
        return this.getAll()[key];
    }
    /**
     * Sets a value for given cookie key
     *
     * 设置指定 Cookie 键的值
     */
    put(key, value, options) {
        if (!this.platform.isBrowser) {
            return;
        }
        const opt = { path: '/', ...options };
        if (typeof opt.expires === 'number') {
            opt.expires = new Date(+new Date() + opt.expires * 1e3);
        }
        if (typeof opt.expires !== 'string') {
            opt.expires = opt.expires ? opt.expires.toUTCString() : '';
        }
        const optStr = opt;
        const attributes = Object.keys(optStr)
            .filter(k => optStr[k] && optStr[k] !== true)
            .map(k => `${k}=${optStr[k].split(';')[0]}`)
            .join(';');
        this.doc.cookie = `${encodeURIComponent(String(key))}=${encodeURIComponent(String(value))}${attributes ? `; ${attributes}` : ''}`;
    }
    /**
     * Remove given cookie
     *
     * 移除指定 Cookie
     */
    remove(key, options) {
        this.put(key, undefined, options);
    }
    /**
     * Remove all cookies
     *
     * 移除所有 Cookies
     */
    removeAll() {
        this.doc.cookie = '';
    }
}
CookieService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.5", ngImport: i0, type: CookieService, deps: [{ token: DOCUMENT }, { token: i1.Platform }], target: i0.ɵɵFactoryTarget.Injectable });
CookieService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.5", ngImport: i0, type: CookieService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.5", ngImport: i0, type: CookieService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: i1.Platform }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29va2llLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy91dGlsL2Jyb3dzZXIvY29va2llLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFrQm5EOzs7O0dBSUc7QUFFSCxNQUFNLE9BQU8sYUFBYTtJQWN4QixZQUFzQyxJQUFlLEVBQVUsUUFBa0I7UUFBM0MsU0FBSSxHQUFKLElBQUksQ0FBVztRQUFVLGFBQVEsR0FBUixRQUFRLENBQVU7SUFBRyxDQUFDO0lBYnJGLElBQVksR0FBRztRQUNiLE9BQU8sSUFBSSxDQUFDLElBQUksSUFBSSxRQUFRLENBQUM7SUFDL0IsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3hELENBQUM7SUFJRDs7OztPQUlHO0lBQ0gsTUFBTTtRQUNKLE1BQU0sR0FBRyxHQUE4QixFQUFFLENBQUM7UUFDMUMsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbkMsTUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbEMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO2dCQUNiLE1BQU0sSUFBSSxHQUFHLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQzVELElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRTtvQkFDckIsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQzdEO2FBQ0Y7U0FDRjtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxHQUFHLENBQUMsR0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsR0FBRyxDQUFDLEdBQVcsRUFBRSxLQUF5QixFQUFFLE9BQXVCO1FBQ2pFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUM1QixPQUFPO1NBQ1I7UUFDRCxNQUFNLEdBQUcsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxPQUFPLEVBQUUsQ0FBQztRQUN0QyxJQUFJLE9BQU8sR0FBRyxDQUFDLE9BQU8sS0FBSyxRQUFRLEVBQUU7WUFDbkMsR0FBRyxDQUFDLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFLEdBQUcsR0FBRyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsQ0FBQztTQUN6RDtRQUNELElBQUksT0FBTyxHQUFHLENBQUMsT0FBTyxLQUFLLFFBQVEsRUFBRTtZQUNuQyxHQUFHLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztTQUM1RDtRQUNELE1BQU0sTUFBTSxHQUF3QyxHQUFnQixDQUFDO1FBQ3JFLE1BQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2FBQ25DLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDO2FBQzVDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFLLE1BQU0sQ0FBQyxDQUFDLENBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQzthQUN2RCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDYixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUN2RixVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQ25DLEVBQUUsQ0FBQztJQUNMLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLEdBQVcsRUFBRSxPQUF1QjtRQUN6QyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxTQUFTO1FBQ1AsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7OzBHQXhGVSxhQUFhLGtCQWNKLFFBQVE7OEdBZGpCLGFBQWEsY0FEQSxNQUFNOzJGQUNuQixhQUFhO2tCQUR6QixVQUFVO21CQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7MEJBZW5CLE1BQU07MkJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgdHlwZSB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29va2llT3B0aW9ucyB7XG4gIHBhdGg/OiBzdHJpbmc7XG4gIGRvbWFpbj86IHN0cmluZztcbiAgLyoqXG4gICAqIEV4cGlyYXRpb24gdGltZSwgYG51bWJlcmAgaXMgc2Vjb25kc1xuICAgKlxuICAgKiDov4fmnJ/ml7bpl7TvvIxgbnVtYmVyYCDnsbvlnovooajnpLrnp5LmlbBcbiAgICovXG4gIGV4cGlyZXM/OiBudW1iZXIgfCBEYXRlIHwgc3RyaW5nO1xuICBzZWN1cmU/OiBib29sZWFuO1xuICBIdHRwT25seT86IGJvb2xlYW47XG4gIFNhbWVTaXRlPzogYm9vbGVhbiB8ICdsYXgnIHwgJ3N0cmljdCcgfCAnbm9uZSc7XG59XG5cbi8qKlxuICogQSBzZXQgb2Ygc2ltcGxlIENvb2tpZSBtYW5pcHVsYXRpb24gY2xhc3Nlcy5cbiAqXG4gKiDkuIDnu4TnroDljZXnmoQgQ29va2llIOaTjeS9nOexu+OAglxuICovXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIENvb2tpZVNlcnZpY2Uge1xuICBwcml2YXRlIGdldCBkb2MoKTogRG9jdW1lbnQge1xuICAgIHJldHVybiB0aGlzLl9kb2MgfHwgZG9jdW1lbnQ7XG4gIH1cblxuICAvKipcbiAgICogT3JpZ2luYWwgY29va2llIHZhbHVlXG4gICAqXG4gICAqIOWOn+Wni0Nvb2tpZeWAvFxuICAgKi9cbiAgZ2V0IGNvb2tpZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnBsYXRmb3JtLmlzQnJvd3NlciA/IHRoaXMuZG9jLmNvb2tpZSA6ICcnO1xuICB9XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBfZG9jOiBOelNhZmVBbnksIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtKSB7fVxuXG4gIC8qKlxuICAgKiBHZXQgYWxsIGNvb2tpZSBrZXktdmFsdWUgcGFpcnNcbiAgICpcbiAgICog6I635Y+W5omA5pyJQ29va2ll6ZSu5YC85a+5XG4gICAqL1xuICBnZXRBbGwoKTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB7XG4gICAgY29uc3QgcmV0OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XG4gICAgY29uc3QgYXJyID0gdGhpcy5jb29raWUuc3BsaXQoJzsgJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNvb2tpZSA9IGFycltpXTtcbiAgICAgIGNvbnN0IGluZGV4ID0gY29va2llLmluZGV4T2YoJz0nKTtcbiAgICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IGRlY29kZVVSSUNvbXBvbmVudChjb29raWUuc3Vic3RyaW5nKDAsIGluZGV4KSk7XG4gICAgICAgIGlmIChyZXRbbmFtZV0gPT0gbnVsbCkge1xuICAgICAgICAgIHJldFtuYW1lXSA9IGRlY29kZVVSSUNvbXBvbmVudChjb29raWUuc3Vic3RyaW5nKGluZGV4ICsgMSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB2YWx1ZSBvZiBnaXZlbiBjb29raWUgYGtleWBcbiAgICpcbiAgICog6I635Y+W5oyH5a6aIGBrZXlgIOeahOWAvFxuICAgKi9cbiAgZ2V0KGtleTogc3RyaW5nKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5nZXRBbGwoKVtrZXldO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgYSB2YWx1ZSBmb3IgZ2l2ZW4gY29va2llIGtleVxuICAgKlxuICAgKiDorr7nva7mjIflrpogQ29va2llIOmUrueahOWAvFxuICAgKi9cbiAgcHV0KGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkLCBvcHRpb25zPzogQ29va2llT3B0aW9ucyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgb3B0ID0geyBwYXRoOiAnLycsIC4uLm9wdGlvbnMgfTtcbiAgICBpZiAodHlwZW9mIG9wdC5leHBpcmVzID09PSAnbnVtYmVyJykge1xuICAgICAgb3B0LmV4cGlyZXMgPSBuZXcgRGF0ZSgrbmV3IERhdGUoKSArIG9wdC5leHBpcmVzICogMWUzKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvcHQuZXhwaXJlcyAhPT0gJ3N0cmluZycpIHtcbiAgICAgIG9wdC5leHBpcmVzID0gb3B0LmV4cGlyZXMgPyBvcHQuZXhwaXJlcy50b1VUQ1N0cmluZygpIDogJyc7XG4gICAgfVxuICAgIGNvbnN0IG9wdFN0cjogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBib29sZWFuIH0gPSBvcHQgYXMgTnpTYWZlQW55O1xuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBPYmplY3Qua2V5cyhvcHRTdHIpXG4gICAgICAuZmlsdGVyKGsgPT4gb3B0U3RyW2tdICYmIG9wdFN0cltrXSAhPT0gdHJ1ZSlcbiAgICAgIC5tYXAoayA9PiBgJHtrfT0keyhvcHRTdHJba10gYXMgc3RyaW5nKS5zcGxpdCgnOycpWzBdfWApXG4gICAgICAuam9pbignOycpO1xuICAgIHRoaXMuZG9jLmNvb2tpZSA9IGAke2VuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoa2V5KSl9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyh2YWx1ZSkpfSR7XG4gICAgICBhdHRyaWJ1dGVzID8gYDsgJHthdHRyaWJ1dGVzfWAgOiAnJ1xuICAgIH1gO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBnaXZlbiBjb29raWVcbiAgICpcbiAgICog56e76Zmk5oyH5a6aIENvb2tpZVxuICAgKi9cbiAgcmVtb3ZlKGtleTogc3RyaW5nLCBvcHRpb25zPzogQ29va2llT3B0aW9ucyk6IHZvaWQge1xuICAgIHRoaXMucHV0KGtleSwgdW5kZWZpbmVkLCBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYWxsIGNvb2tpZXNcbiAgICpcbiAgICog56e76Zmk5omA5pyJIENvb2tpZXNcbiAgICovXG4gIHJlbW92ZUFsbCgpOiB2b2lkIHtcbiAgICB0aGlzLmRvYy5jb29raWUgPSAnJztcbiAgfVxufVxuIl19