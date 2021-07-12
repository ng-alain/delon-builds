import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/cdk/platform";
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
        const opt = Object.assign({ path: '/' }, options);
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
CookieService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CookieService_Factory() { return new CookieService(i0.ɵɵinject(i1.DOCUMENT), i0.ɵɵinject(i2.Platform)); }, token: CookieService, providedIn: "root" });
CookieService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
CookieService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Platform }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29va2llLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy91dGlsL2Jyb3dzZXIvY29va2llLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQWtCbkQ7Ozs7R0FJRztBQUVILE1BQU0sT0FBTyxhQUFhO0lBY3hCLFlBQXNDLElBQWUsRUFBVSxRQUFrQjtRQUEzQyxTQUFJLEdBQUosSUFBSSxDQUFXO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUFHLENBQUM7SUFickYsSUFBWSxHQUFHO1FBQ2IsT0FBTyxJQUFJLENBQUMsSUFBSSxJQUFJLFFBQVEsQ0FBQztJQUMvQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDeEQsQ0FBQztJQUlEOzs7O09BSUc7SUFDSCxNQUFNO1FBQ0osTUFBTSxHQUFHLEdBQThCLEVBQUUsQ0FBQztRQUMxQyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNuQyxNQUFNLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEIsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNsQyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7Z0JBQ2IsTUFBTSxJQUFJLEdBQUcsa0JBQWtCLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDNUQsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFO29CQUNyQixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsa0JBQWtCLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDN0Q7YUFDRjtTQUNGO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILEdBQUcsQ0FBQyxHQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxHQUFHLENBQUMsR0FBVyxFQUFFLEtBQXlCLEVBQUUsT0FBdUI7UUFDakUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFO1lBQzVCLE9BQU87U0FDUjtRQUNELE1BQU0sR0FBRyxtQkFBSyxJQUFJLEVBQUUsR0FBRyxJQUFLLE9BQU8sQ0FBRSxDQUFDO1FBQ3RDLElBQUksT0FBTyxHQUFHLENBQUMsT0FBTyxLQUFLLFFBQVEsRUFBRTtZQUNuQyxHQUFHLENBQUMsT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUUsR0FBRyxHQUFHLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1NBQ3pEO1FBQ0QsSUFBSSxPQUFPLEdBQUcsQ0FBQyxPQUFPLEtBQUssUUFBUSxFQUFFO1lBQ25DLEdBQUcsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1NBQzVEO1FBQ0QsTUFBTSxNQUFNLEdBQXdDLEdBQWdCLENBQUM7UUFDckUsTUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7YUFDbkMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUM7YUFDNUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUssTUFBTSxDQUFDLENBQUMsQ0FBWSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2FBQ3ZELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNiLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsa0JBQWtCLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksa0JBQWtCLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQ3ZGLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFDbkMsRUFBRSxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsR0FBVyxFQUFFLE9BQXVCO1FBQ3pDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILFNBQVM7UUFDUCxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7OztZQXpGRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7NENBZW5CLE1BQU0sU0FBQyxRQUFRO1lBeENyQixRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29va2llT3B0aW9ucyB7XG4gIHBhdGg/OiBzdHJpbmc7XG4gIGRvbWFpbj86IHN0cmluZztcbiAgLyoqXG4gICAqIEV4cGlyYXRpb24gdGltZSwgYG51bWJlcmAgaXMgc2Vjb25kc1xuICAgKlxuICAgKiDov4fmnJ/ml7bpl7TvvIxgbnVtYmVyYCDnsbvlnovooajnpLrnp5LmlbBcbiAgICovXG4gIGV4cGlyZXM/OiBudW1iZXIgfCBEYXRlIHwgc3RyaW5nO1xuICBzZWN1cmU/OiBib29sZWFuO1xuICBIdHRwT25seT86IGJvb2xlYW47XG4gIFNhbWVTaXRlPzogYm9vbGVhbiB8ICdsYXgnIHwgJ3N0cmljdCcgfCAnbm9uZSc7XG59XG5cbi8qKlxuICogQSBzZXQgb2Ygc2ltcGxlIENvb2tpZSBtYW5pcHVsYXRpb24gY2xhc3Nlcy5cbiAqXG4gKiDkuIDnu4TnroDljZXnmoQgQ29va2llIOaTjeS9nOexu+OAglxuICovXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIENvb2tpZVNlcnZpY2Uge1xuICBwcml2YXRlIGdldCBkb2MoKTogRG9jdW1lbnQge1xuICAgIHJldHVybiB0aGlzLl9kb2MgfHwgZG9jdW1lbnQ7XG4gIH1cblxuICAvKipcbiAgICogT3JpZ2luYWwgY29va2llIHZhbHVlXG4gICAqXG4gICAqIOWOn+Wni0Nvb2tpZeWAvFxuICAgKi9cbiAgZ2V0IGNvb2tpZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnBsYXRmb3JtLmlzQnJvd3NlciA/IHRoaXMuZG9jLmNvb2tpZSA6ICcnO1xuICB9XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBfZG9jOiBOelNhZmVBbnksIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtKSB7fVxuXG4gIC8qKlxuICAgKiBHZXQgYWxsIGNvb2tpZSBrZXktdmFsdWUgcGFpcnNcbiAgICpcbiAgICog6I635Y+W5omA5pyJQ29va2ll6ZSu5YC85a+5XG4gICAqL1xuICBnZXRBbGwoKTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB7XG4gICAgY29uc3QgcmV0OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XG4gICAgY29uc3QgYXJyID0gdGhpcy5jb29raWUuc3BsaXQoJzsgJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNvb2tpZSA9IGFycltpXTtcbiAgICAgIGNvbnN0IGluZGV4ID0gY29va2llLmluZGV4T2YoJz0nKTtcbiAgICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IGRlY29kZVVSSUNvbXBvbmVudChjb29raWUuc3Vic3RyaW5nKDAsIGluZGV4KSk7XG4gICAgICAgIGlmIChyZXRbbmFtZV0gPT0gbnVsbCkge1xuICAgICAgICAgIHJldFtuYW1lXSA9IGRlY29kZVVSSUNvbXBvbmVudChjb29raWUuc3Vic3RyaW5nKGluZGV4ICsgMSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB2YWx1ZSBvZiBnaXZlbiBjb29raWUgYGtleWBcbiAgICpcbiAgICog6I635Y+W5oyH5a6aIGBrZXlgIOeahOWAvFxuICAgKi9cbiAgZ2V0KGtleTogc3RyaW5nKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5nZXRBbGwoKVtrZXldO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgYSB2YWx1ZSBmb3IgZ2l2ZW4gY29va2llIGtleVxuICAgKlxuICAgKiDorr7nva7mjIflrpogQ29va2llIOmUrueahOWAvFxuICAgKi9cbiAgcHV0KGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkLCBvcHRpb25zPzogQ29va2llT3B0aW9ucyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgb3B0ID0geyBwYXRoOiAnLycsIC4uLm9wdGlvbnMgfTtcbiAgICBpZiAodHlwZW9mIG9wdC5leHBpcmVzID09PSAnbnVtYmVyJykge1xuICAgICAgb3B0LmV4cGlyZXMgPSBuZXcgRGF0ZSgrbmV3IERhdGUoKSArIG9wdC5leHBpcmVzICogMWUzKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvcHQuZXhwaXJlcyAhPT0gJ3N0cmluZycpIHtcbiAgICAgIG9wdC5leHBpcmVzID0gb3B0LmV4cGlyZXMgPyBvcHQuZXhwaXJlcy50b1VUQ1N0cmluZygpIDogJyc7XG4gICAgfVxuICAgIGNvbnN0IG9wdFN0cjogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBib29sZWFuIH0gPSBvcHQgYXMgTnpTYWZlQW55O1xuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBPYmplY3Qua2V5cyhvcHRTdHIpXG4gICAgICAuZmlsdGVyKGsgPT4gb3B0U3RyW2tdICYmIG9wdFN0cltrXSAhPT0gdHJ1ZSlcbiAgICAgIC5tYXAoayA9PiBgJHtrfT0keyhvcHRTdHJba10gYXMgc3RyaW5nKS5zcGxpdCgnOycpWzBdfWApXG4gICAgICAuam9pbignOycpO1xuICAgIHRoaXMuZG9jLmNvb2tpZSA9IGAke2VuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoa2V5KSl9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyh2YWx1ZSkpfSR7XG4gICAgICBhdHRyaWJ1dGVzID8gYDsgJHthdHRyaWJ1dGVzfWAgOiAnJ1xuICAgIH1gO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBnaXZlbiBjb29raWVcbiAgICpcbiAgICog56e76Zmk5oyH5a6aIENvb2tpZVxuICAgKi9cbiAgcmVtb3ZlKGtleTogc3RyaW5nLCBvcHRpb25zPzogQ29va2llT3B0aW9ucyk6IHZvaWQge1xuICAgIHRoaXMucHV0KGtleSwgdW5kZWZpbmVkLCBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYWxsIGNvb2tpZXNcbiAgICpcbiAgICog56e76Zmk5omA5pyJIENvb2tpZXNcbiAgICovXG4gIHJlbW92ZUFsbCgpOiB2b2lkIHtcbiAgICB0aGlzLmRvYy5jb29raWUgPSAnJztcbiAgfVxufVxuIl19