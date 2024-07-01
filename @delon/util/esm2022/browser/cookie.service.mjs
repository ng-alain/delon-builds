import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * A set of simple Cookie manipulation classes.
 *
 * 一组简单的 Cookie 操作类。
 */
export class CookieService {
    constructor() {
        this._doc = inject(DOCUMENT);
        this.platform = inject(Platform);
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
        this.put(key, '', options);
    }
    /**
     * Remove all cookies
     *
     * 移除所有 Cookies
     */
    removeAll() {
        this.doc.cookie = '';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: CookieService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: CookieService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: CookieService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29va2llLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy91dGlsL2Jyb3dzZXIvY29va2llLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFrQm5EOzs7O0dBSUc7QUFFSCxNQUFNLE9BQU8sYUFBYTtJQUQxQjtRQUVtQixTQUFJLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hCLGFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7S0F3RjlDO0lBdEZDLElBQVksR0FBRztRQUNiLE9BQU8sSUFBSSxDQUFDLElBQUksSUFBSSxRQUFRLENBQUM7SUFDL0IsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3hELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTTtRQUNKLE1BQU0sR0FBRyxHQUE4QixFQUFFLENBQUM7UUFDMUMsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNwQyxNQUFNLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEIsTUFBTSxLQUFLLEdBQUcsTUFBTSxD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c0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgaW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBDb29raWVPcHRpb25zIHtcbiAgcGF0aD86IHN0cmluZztcbiAgZG9tYWluPzogc3RyaW5nO1xuICAvKipcbiAgICogRXhwaXJhdGlvbiB0aW1lLCBgbnVtYmVyYCBpcyBzZWNvbmRzXG4gICAqXG4gICAqIOi/h+acn+aXtumXtO+8jGBudW1iZXJgIOexu+Wei+ihqOekuuenkuaVsFxuICAgKi9cbiAgZXhwaXJlcz86IG51bWJlciB8IERhdGUgfCBzdHJpbmc7XG4gIHNlY3VyZT86IGJvb2xlYW47XG4gIEh0dHBPbmx5PzogYm9vbGVhbjtcbiAgU2FtZVNpdGU/OiBib29sZWFuIHwgJ2xheCcgfCAnc3RyaWN0JyB8ICdub25lJztcbn1cblxuLyoqXG4gKiBBIHNldCBvZiBzaW1wbGUgQ29va2llIG1hbmlwdWxhdGlvbiBjbGFzc2VzLlxuICpcbiAqIOS4gOe7hOeugOWNleeahCBDb29raWUg5pON5L2c57G744CCXG4gKi9cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQ29va2llU2VydmljZSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2RvYyA9IGluamVjdChET0NVTUVOVCk7XG4gIHByaXZhdGUgcmVhZG9ubHkgcGxhdGZvcm0gPSBpbmplY3QoUGxhdGZvcm0pO1xuXG4gIHByaXZhdGUgZ2V0IGRvYygpOiBEb2N1bWVudCB7XG4gICAgcmV0dXJuIHRoaXMuX2RvYyB8fCBkb2N1bWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcmlnaW5hbCBjb29raWUgdmFsdWVcbiAgICpcbiAgICog5Y6f5aeLQ29va2ll5YC8XG4gICAqL1xuICBnZXQgY29va2llKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMucGxhdGZvcm0uaXNCcm93c2VyID8gdGhpcy5kb2MuY29va2llIDogJyc7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCBjb29raWUga2V5LXZhbHVlIHBhaXJzXG4gICAqXG4gICAqIOiOt+WPluaJgOaciUNvb2tpZemUruWAvOWvuVxuICAgKi9cbiAgZ2V0QWxsKCk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0ge1xuICAgIGNvbnN0IHJldDogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xuICAgIGNvbnN0IGFyciA9IHRoaXMuY29va2llLnNwbGl0KCc7ICcpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBjb29raWUgPSBhcnJbaV07XG4gICAgICBjb25zdCBpbmRleCA9IGNvb2tpZS5pbmRleE9mKCc9Jyk7XG4gICAgICBpZiAoaW5kZXggPiAwKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBkZWNvZGVVUklDb21wb25lbnQoY29va2llLnN1YnN0cmluZygwLCBpbmRleCkpO1xuICAgICAgICBpZiAocmV0W25hbWVdID09IG51bGwpIHtcbiAgICAgICAgICByZXRbbmFtZV0gPSBkZWNvZGVVUklDb21wb25lbnQoY29va2llLnN1YnN0cmluZyhpbmRleCArIDEpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdmFsdWUgb2YgZ2l2ZW4gY29va2llIGBrZXlgXG4gICAqXG4gICAqIOiOt+WPluaMh+WumiBga2V5YCDnmoTlgLxcbiAgICovXG4gIGdldChrZXk6IHN0cmluZyk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QWxsKClba2V5XTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGEgdmFsdWUgZm9yIGdpdmVuIGNvb2tpZSBrZXlcbiAgICpcbiAgICog6K6+572u5oyH5a6aIENvb2tpZSDplK7nmoTlgLxcbiAgICovXG4gIHB1dChrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZywgb3B0aW9ucz86IENvb2tpZU9wdGlvbnMpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG9wdCA9IHsgcGF0aDogJy8nLCAuLi5vcHRpb25zIH07XG4gICAgaWYgKHR5cGVvZiBvcHQuZXhwaXJlcyA9PT0gJ251bWJlcicpIHtcbiAgICAgIG9wdC5leHBpcmVzID0gbmV3IERhdGUoK25ldyBEYXRlKCkgKyBvcHQuZXhwaXJlcyAqIDFlMyk7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb3B0LmV4cGlyZXMgIT09ICdzdHJpbmcnKSB7XG4gICAgICBvcHQuZXhwaXJlcyA9IG9wdC5leHBpcmVzID8gb3B0LmV4cGlyZXMudG9VVENTdHJpbmcoKSA6ICcnO1xuICAgIH1cbiAgICBjb25zdCBvcHRTdHI6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgYm9vbGVhbiB9ID0gb3B0IGFzIE56U2FmZUFueTtcbiAgICBjb25zdCBhdHRyaWJ1dGVzID0gT2JqZWN0LmtleXMob3B0U3RyKVxuICAgICAgLmZpbHRlcihrID0+IG9wdFN0cltrXSAmJiBvcHRTdHJba10gIT09IHRydWUpXG4gICAgICAubWFwKGsgPT4gYCR7a309JHsob3B0U3RyW2tdIGFzIHN0cmluZykuc3BsaXQoJzsnKVswXX1gKVxuICAgICAgLmpvaW4oJzsnKTtcbiAgICB0aGlzLmRvYy5jb29raWUgPSBgJHtlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGtleSkpfT0ke2VuY29kZVVSSUNvbXBvbmVudChTdHJpbmcodmFsdWUpKX0ke1xuICAgICAgYXR0cmlidXRlcyA/IGA7ICR7YXR0cmlidXRlc31gIDogJydcbiAgICB9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgZ2l2ZW4gY29va2llXG4gICAqXG4gICAqIOenu+mZpOaMh+WumiBDb29raWVcbiAgICovXG4gIHJlbW92ZShrZXk6IHN0cmluZywgb3B0aW9ucz86IENvb2tpZU9wdGlvbnMpOiB2b2lkIHtcbiAgICB0aGlzLnB1dChrZXksICcnLCBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYWxsIGNvb2tpZXNcbiAgICpcbiAgICog56e76Zmk5omA5pyJIENvb2tpZXNcbiAgICovXG4gIHJlbW92ZUFsbCgpOiB2b2lkIHtcbiAgICB0aGlzLmRvYy5jb29raWUgPSAnJztcbiAgfVxufVxuIl19