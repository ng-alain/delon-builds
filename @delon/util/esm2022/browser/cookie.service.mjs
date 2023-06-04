import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/platform";
/**
 * A set of simple Cookie manipulation classes.
 *
 * 一组简单的 Cookie 操作类。
 */
class CookieService {
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
    constructor(_doc, platform) {
        this._doc = _doc;
        this.platform = platform;
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: CookieService, deps: [{ token: DOCUMENT }, { token: i1.Platform }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: CookieService, providedIn: 'root' }); }
}
export { CookieService };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: CookieService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: i1.Platform }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29va2llLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy91dGlsL2Jyb3dzZXIvY29va2llLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFrQm5EOzs7O0dBSUc7QUFDSCxNQUNhLGFBQWE7SUFDeEIsSUFBWSxHQUFHO1FBQ2IsT0FBTyxJQUFJLENBQUMsSUFBSSxJQUFJLFFBQVEsQ0FBQztJQUMvQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDeEQsQ0FBQztJQUVELFlBQXNDLElBQWUsRUFBVSxRQUFrQjtRQUEzQyxTQUFJLEdBQUosSUFBSSxDQUFXO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUFHLENBQUM7SUFFckY7Ozs7T0FJRztJQUNILE1BQU07UUFDSixNQUFNLEdBQUcsR0FBOEIsRUFBRSxDQUFDO1FBQzFDLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ25DLE1BQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QixNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2xDLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRTtnQkFDYixNQUFNLElBQUksR0FBRyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUM1RCxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUU7b0JBQ3JCLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUM3RDthQUNGO1NBQ0Y7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsR0FBRyxDQUFDLEdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILEdBQUcsQ0FBQyxHQUFXLEVBQUUsS0FBYSxFQUFFLE9BQXVCO1FBQ3JELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUM1QixPQUFPO1NBQ1I7UUFDRCxNQUFNLEdBQUcsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxPQUFPLEVBQUUsQ0FBQztRQUN0QyxJQUFJLE9BQU8sR0FBRyxDQUFDLE9BQU8sS0FBSyxRQUFRLEVBQUU7WUFDbkMsR0FBRyxDQUFDLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFLEdBQUcsR0FBRyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsQ0FBQztTQUN6RDtRQUNELElBQUksT0FBTyxHQUFHLENBQUMsT0FBTyxLQUFLLFFBQVEsRUFBRTtZQUNuQyxHQUFHLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztTQUM1RDtRQUNELE1BQU0sTUFBTSxHQUF3QyxHQUFnQixDQUFDO1FBQ3JFLE1BQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2FBQ25DLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDO2FBQzVDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFLLE1BQU0sQ0FBQyxDQUFDLENBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQzthQUN2RCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDYixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUN2RixVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQ25DLEVBQUUsQ0FBQztJQUNMLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLEdBQVcsRUFBRSxPQUF1QjtRQUN6QyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxTQUFTO1FBQ1AsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7OEdBeEZVLGFBQWEsa0JBY0osUUFBUTtrSEFkakIsYUFBYSxjQURBLE1BQU07O1NBQ25CLGFBQWE7MkZBQWIsYUFBYTtrQkFEekIsVUFBVTttQkFBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7OzBCQWVuQixNQUFNOzJCQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvb2tpZU9wdGlvbnMge1xuICBwYXRoPzogc3RyaW5nO1xuICBkb21haW4/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBFeHBpcmF0aW9uIHRpbWUsIGBudW1iZXJgIGlzIHNlY29uZHNcbiAgICpcbiAgICog6L+H5pyf5pe26Ze077yMYG51bWJlcmAg57G75Z6L6KGo56S656eS5pWwXG4gICAqL1xuICBleHBpcmVzPzogbnVtYmVyIHwgRGF0ZSB8IHN0cmluZztcbiAgc2VjdXJlPzogYm9vbGVhbjtcbiAgSHR0cE9ubHk/OiBib29sZWFuO1xuICBTYW1lU2l0ZT86IGJvb2xlYW4gfCAnbGF4JyB8ICdzdHJpY3QnIHwgJ25vbmUnO1xufVxuXG4vKipcbiAqIEEgc2V0IG9mIHNpbXBsZSBDb29raWUgbWFuaXB1bGF0aW9uIGNsYXNzZXMuXG4gKlxuICog5LiA57uE566A5Y2V55qEIENvb2tpZSDmk43kvZznsbvjgIJcbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBDb29raWVTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBnZXQgZG9jKCk6IERvY3VtZW50IHtcbiAgICByZXR1cm4gdGhpcy5fZG9jIHx8IGRvY3VtZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIE9yaWdpbmFsIGNvb2tpZSB2YWx1ZVxuICAgKlxuICAgKiDljp/lp4tDb29raWXlgLxcbiAgICovXG4gIGdldCBjb29raWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIgPyB0aGlzLmRvYy5jb29raWUgOiAnJztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvYzogTnpTYWZlQW55LCBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSkge31cblxuICAvKipcbiAgICogR2V0IGFsbCBjb29raWUga2V5LXZhbHVlIHBhaXJzXG4gICAqXG4gICAqIOiOt+WPluaJgOaciUNvb2tpZemUruWAvOWvuVxuICAgKi9cbiAgZ2V0QWxsKCk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0ge1xuICAgIGNvbnN0IHJldDogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xuICAgIGNvbnN0IGFyciA9IHRoaXMuY29va2llLnNwbGl0KCc7ICcpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBjb29raWUgPSBhcnJbaV07XG4gICAgICBjb25zdCBpbmRleCA9IGNvb2tpZS5pbmRleE9mKCc9Jyk7XG4gICAgICBpZiAoaW5kZXggPiAwKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBkZWNvZGVVUklDb21wb25lbnQoY29va2llLnN1YnN0cmluZygwLCBpbmRleCkpO1xuICAgICAgICBpZiAocmV0W25hbWVdID09IG51bGwpIHtcbiAgICAgICAgICByZXRbbmFtZV0gPSBkZWNvZGVVUklDb21wb25lbnQoY29va2llLnN1YnN0cmluZyhpbmRleCArIDEpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgdmFsdWUgb2YgZ2l2ZW4gY29va2llIGBrZXlgXG4gICAqXG4gICAqIOiOt+WPluaMh+WumiBga2V5YCDnmoTlgLxcbiAgICovXG4gIGdldChrZXk6IHN0cmluZyk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QWxsKClba2V5XTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGEgdmFsdWUgZm9yIGdpdmVuIGNvb2tpZSBrZXlcbiAgICpcbiAgICog6K6+572u5oyH5a6aIENvb2tpZSDplK7nmoTlgLxcbiAgICovXG4gIHB1dChrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZywgb3B0aW9ucz86IENvb2tpZU9wdGlvbnMpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG9wdCA9IHsgcGF0aDogJy8nLCAuLi5vcHRpb25zIH07XG4gICAgaWYgKHR5cGVvZiBvcHQuZXhwaXJlcyA9PT0gJ251bWJlcicpIHtcbiAgICAgIG9wdC5leHBpcmVzID0gbmV3IERhdGUoK25ldyBEYXRlKCkgKyBvcHQuZXhwaXJlcyAqIDFlMyk7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb3B0LmV4cGlyZXMgIT09ICdzdHJpbmcnKSB7XG4gICAgICBvcHQuZXhwaXJlcyA9IG9wdC5leHBpcmVzID8gb3B0LmV4cGlyZXMudG9VVENTdHJpbmcoKSA6ICcnO1xuICAgIH1cbiAgICBjb25zdCBvcHRTdHI6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgYm9vbGVhbiB9ID0gb3B0IGFzIE56U2FmZUFueTtcbiAgICBjb25zdCBhdHRyaWJ1dGVzID0gT2JqZWN0LmtleXMob3B0U3RyKVxuICAgICAgLmZpbHRlcihrID0+IG9wdFN0cltrXSAmJiBvcHRTdHJba10gIT09IHRydWUpXG4gICAgICAubWFwKGsgPT4gYCR7a309JHsob3B0U3RyW2tdIGFzIHN0cmluZykuc3BsaXQoJzsnKVswXX1gKVxuICAgICAgLmpvaW4oJzsnKTtcbiAgICB0aGlzLmRvYy5jb29raWUgPSBgJHtlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGtleSkpfT0ke2VuY29kZVVSSUNvbXBvbmVudChTdHJpbmcodmFsdWUpKX0ke1xuICAgICAgYXR0cmlidXRlcyA/IGA7ICR7YXR0cmlidXRlc31gIDogJydcbiAgICB9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgZ2l2ZW4gY29va2llXG4gICAqXG4gICAqIOenu+mZpOaMh+WumiBDb29raWVcbiAgICovXG4gIHJlbW92ZShrZXk6IHN0cmluZywgb3B0aW9ucz86IENvb2tpZU9wdGlvbnMpOiB2b2lkIHtcbiAgICB0aGlzLnB1dChrZXksICcnLCBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYWxsIGNvb2tpZXNcbiAgICpcbiAgICog56e76Zmk5omA5pyJIENvb2tpZXNcbiAgICovXG4gIHJlbW92ZUFsbCgpOiB2b2lkIHtcbiAgICB0aGlzLmRvYy5jb29raWUgPSAnJztcbiAgfVxufVxuIl19