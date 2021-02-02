import { Platform } from '@angular/cdk/platform';
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
        // tslint:disable-next-line: prefer-for-of
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
        this.doc.cookie = encodeURIComponent(String(key)) + '=' + encodeURIComponent(String(value)) + (attributes ? '; ' + attributes : '');
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
/** @nocollapse */ CookieService.ɵfac = function CookieService_Factory(t) { return new (t || CookieService)(i0.ɵɵinject(DOCUMENT), i0.ɵɵinject(i1.Platform)); };
/** @nocollapse */ CookieService.ɵprov = i0.ɵɵdefineInjectable({ token: CookieService, factory: CookieService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CookieService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: i1.Platform }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29va2llLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy91dGlsL2Jyb3dzZXIvY29va2llLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBZ0JuRDs7OztHQUlHO0FBRUgsTUFBTSxPQUFPLGFBQWE7SUFjeEIsWUFBc0MsSUFBUyxFQUFVLFFBQWtCO1FBQXJDLFNBQUksR0FBSixJQUFJLENBQUs7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQUcsQ0FBQztJQWIvRSxJQUFZLEdBQUc7UUFDYixPQUFPLElBQUksQ0FBQyxJQUFJLElBQUksUUFBUSxDQUFDO0lBQy9CLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN4RCxDQUFDO0lBSUQ7Ozs7T0FJRztJQUNILE1BQU07UUFDSixNQUFNLEdBQUcsR0FBOEIsRUFBRSxDQUFDO1FBQzFDLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BDLDBDQUEwQztRQUMxQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNuQyxNQUFNLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEIsTUFBTSxLQUFLLEdBQUcsTUFB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IjpbImltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvb2tpZU9wdGlvbnMge1xuICBwYXRoPzogc3RyaW5nO1xuICBkb21haW4/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBFeHBpcmF0aW9uIHRpbWUsIGBudW1iZXJgIGlzIHNlY29uZHNcbiAgICpcbiAgICog6L+H5pyf5pe26Ze077yMYG51bWJlcmAg57G75Z6L6KGo56S656eS5pWwXG4gICAqL1xuICBleHBpcmVzPzogbnVtYmVyIHwgRGF0ZSB8IHN0cmluZztcbiAgc2VjdXJlPzogYm9vbGVhbjtcbiAgSHR0cE9ubHk/OiBib29sZWFuO1xuICBTYW1lU2l0ZT86IGJvb2xlYW4gfCAnbGF4JyB8ICdzdHJpY3QnIHwgJ25vbmUnO1xufVxuXG4vKipcbiAqIEEgc2V0IG9mIHNpbXBsZSBDb29raWUgbWFuaXB1bGF0aW9uIGNsYXNzZXMuXG4gKlxuICog5LiA57uE566A5Y2V55qEIENvb2tpZSDmk43kvZznsbvjgIJcbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBDb29raWVTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBnZXQgZG9jKCk6IERvY3VtZW50IHtcbiAgICByZXR1cm4gdGhpcy5fZG9jIHx8IGRvY3VtZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIE9yaWdpbmFsIGNvb2tpZSB2YWx1ZVxuICAgKlxuICAgKiDljp/lp4tDb29raWXlgLxcbiAgICovXG4gIGdldCBjb29raWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIgPyB0aGlzLmRvYy5jb29raWUgOiAnJztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvYzogYW55LCBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSkge31cblxuICAvKipcbiAgICogR2V0IGFsbCBjb29raWUga2V5LXZhbHVlIHBhaXJzXG4gICAqXG4gICAqIOiOt+WPluaJgOaciUNvb2tpZemUruWAvOWvuVxuICAgKi9cbiAgZ2V0QWxsKCk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0ge1xuICAgIGNvbnN0IHJldDogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xuICAgIGNvbnN0IGFyciA9IHRoaXMuY29va2llLnNwbGl0KCc7ICcpO1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogcHJlZmVyLWZvci1vZlxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBjb29raWUgPSBhcnJbaV07XG4gICAgICBjb25zdCBpbmRleCA9IGNvb2tpZS5pbmRleE9mKCc9Jyk7XG4gICAgICBpZiAoaW5kZXggPiAwKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBkZWNvZGVVUklDb21wb25lbnQoY29va2llLnN1YnN0cmluZygwLCBpbmRleCkpO1xuICAgICAgICBpZiAocmV0W25hbWVdID09IG51bGwpIHtcbiAgICAgICAgICByZXRbbmFtZV0gPSBkZWNvZGVVUklDb21wb25lbnQoY29va2llLnN1YnN0cmluZyhpbmRleCArIDEpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdmFsdWUgb2YgZ2l2ZW4gY29va2llIGBrZXlgXG4gICAqXG4gICAqIOiOt+WPluaMh+WumiBga2V5YCDnmoTlgLxcbiAgICovXG4gIGdldChrZXk6IHN0cmluZyk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QWxsKClba2V5XTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGEgdmFsdWUgZm9yIGdpdmVuIGNvb2tpZSBrZXlcbiAgICpcbiAgICog6K6+572u5oyH5a6aIENvb2tpZSDplK7nmoTlgLxcbiAgICovXG4gIHB1dChrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCwgb3B0aW9ucz86IENvb2tpZU9wdGlvbnMpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG9wdCA9IHsgcGF0aDogJy8nLCAuLi5vcHRpb25zIH07XG4gICAgaWYgKHR5cGVvZiBvcHQuZXhwaXJlcyA9PT0gJ251bWJlcicpIHtcbiAgICAgIG9wdC5leHBpcmVzID0gbmV3IERhdGUoK25ldyBEYXRlKCkgKyBvcHQuZXhwaXJlcyAqIDFlMyk7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb3B0LmV4cGlyZXMgIT09ICdzdHJpbmcnKSB7XG4gICAgICBvcHQuZXhwaXJlcyA9IG9wdC5leHBpcmVzID8gb3B0LmV4cGlyZXMudG9VVENTdHJpbmcoKSA6ICcnO1xuICAgIH1cbiAgICBjb25zdCBvcHRTdHI6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgYm9vbGVhbiB9ID0gb3B0IGFzIGFueTtcbiAgICBjb25zdCBhdHRyaWJ1dGVzID0gT2JqZWN0LmtleXMob3B0U3RyKVxuICAgICAgLmZpbHRlcihrID0+IG9wdFN0cltrXSAmJiBvcHRTdHJba10gIT09IHRydWUpXG4gICAgICAubWFwKGsgPT4gYCR7a309JHsob3B0U3RyW2tdIGFzIHN0cmluZykuc3BsaXQoJzsnKVswXX1gKVxuICAgICAgLmpvaW4oJzsnKTtcbiAgICB0aGlzLmRvYy5jb29raWUgPSBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGtleSkpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyh2YWx1ZSkpICsgKGF0dHJpYnV0ZXMgPyAnOyAnICsgYXR0cmlidXRlcyA6ICcnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgZ2l2ZW4gY29va2llXG4gICAqXG4gICAqIOenu+mZpOaMh+WumiBDb29raWVcbiAgICovXG4gIHJlbW92ZShrZXk6IHN0cmluZywgb3B0aW9ucz86IENvb2tpZU9wdGlvbnMpOiB2b2lkIHtcbiAgICB0aGlzLnB1dChrZXksIHVuZGVmaW5lZCwgb3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGFsbCBjb29raWVzXG4gICAqXG4gICAqIOenu+mZpOaJgOaciSBDb29raWVzXG4gICAqL1xuICByZW1vdmVBbGwoKTogdm9pZCB7XG4gICAgdGhpcy5kb2MuY29va2llID0gJyc7XG4gIH1cbn1cbiJdfQ==