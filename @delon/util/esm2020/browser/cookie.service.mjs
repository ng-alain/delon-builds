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
}
CookieService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: CookieService, deps: [{ token: DOCUMENT }, { token: i1.Platform }], target: i0.ɵɵFactoryTarget.Injectable });
CookieService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: CookieService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: CookieService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: i1.Platform }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29va2llLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy91dGlsL2Jyb3dzZXIvY29va2llLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFrQm5EOzs7O0dBSUc7QUFFSCxNQUFNLE9BQU8sYUFBYTtJQWN4QixZQUFzQyxJQUFlLEVBQVUsUUFBa0I7UUFBM0MsU0FBSSxHQUFKLElBQUksQ0FBVztRQUFVLGFBQVEsR0FBUixRQUFRLENBQVU7SUFBRyxDQUFDO0lBYnJGLElBQVksR0FBRztRQUNiLE9BQU8sSUFBSSxDQUFDLElBQUksSUFBSSxRQUFRLENBQUM7SUFDL0IsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3hELENBQUM7SUFJRDs7OztPQUlHO0lBQ0gsTUFBTTtRQUNKLE1BQU0sR0FBRyxHQUE4QixFQUFFLENBQUM7UUFDMUMsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbkMsTUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbEMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO2dCQUNiLE1BQU0sSUFBSSxHQUFHLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQzVELElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRTtvQkFDckIsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQzdEO2FBQ0Y7U0FDRjtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxHQUFHLENBQUMsR0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsR0FBRyxDQUFDLEdBQVcsRUFBRSxLQUFhLEVBQUUsT0FBdUI7UUFDckQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFO1lBQzVCLE9BQU87U0FDUjtRQUNELE1BQU0sR0FBRyxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLE9BQU8sRUFBRSxDQUFDO1FBQ3RDLElBQUksT0FBTyxHQUFHLENBQUMsT0FBTyxLQUFLLFFBQVEsRUFBRTtZQUNuQyxHQUFHLENBQUMsT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUUsR0FBRyxHQUFHLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1NBQ3pEO1FBQ0QsSUFBSSxPQUFPLEdBQUcsQ0FBQyxPQUFPLEtBQUssUUFBUSxFQUFFO1lBQ25DLEdBQUcsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1NBQzVEO1FBQ0QsTUFBTSxNQUFNLEdBQXdDLEdBQWdCLENBQUM7UUFDckUsTUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7YUFDbkMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUM7YUFDNUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUssTUFBTSxDQUFDLENBQUMsQ0FBWSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2FBQ3ZELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNiLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsa0JBQWtCLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksa0JBQWtCLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQ3ZGLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFDbkMsRUFBRSxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsR0FBVyxFQUFFLE9BQXVCO1FBQ3pDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILFNBQVM7UUFDUCxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7MkdBeEZVLGFBQWEsa0JBY0osUUFBUTsrR0FkakIsYUFBYSxjQURBLE1BQU07NEZBQ25CLGFBQWE7a0JBRHpCLFVBQVU7bUJBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzswQkFlbkIsTUFBTTsyQkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBDb29raWVPcHRpb25zIHtcbiAgcGF0aD86IHN0cmluZztcbiAgZG9tYWluPzogc3RyaW5nO1xuICAvKipcbiAgICogRXhwaXJhdGlvbiB0aW1lLCBgbnVtYmVyYCBpcyBzZWNvbmRzXG4gICAqXG4gICAqIOi/h+acn+aXtumXtO+8jGBudW1iZXJgIOexu+Wei+ihqOekuuenkuaVsFxuICAgKi9cbiAgZXhwaXJlcz86IG51bWJlciB8IERhdGUgfCBzdHJpbmc7XG4gIHNlY3VyZT86IGJvb2xlYW47XG4gIEh0dHBPbmx5PzogYm9vbGVhbjtcbiAgU2FtZVNpdGU/OiBib29sZWFuIHwgJ2xheCcgfCAnc3RyaWN0JyB8ICdub25lJztcbn1cblxuLyoqXG4gKiBBIHNldCBvZiBzaW1wbGUgQ29va2llIG1hbmlwdWxhdGlvbiBjbGFzc2VzLlxuICpcbiAqIOS4gOe7hOeugOWNleeahCBDb29raWUg5pON5L2c57G744CCXG4gKi9cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQ29va2llU2VydmljZSB7XG4gIHByaXZhdGUgZ2V0IGRvYygpOiBEb2N1bWVudCB7XG4gICAgcmV0dXJuIHRoaXMuX2RvYyB8fCBkb2N1bWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcmlnaW5hbCBjb29raWUgdmFsdWVcbiAgICpcbiAgICog5Y6f5aeLQ29va2ll5YC8XG4gICAqL1xuICBnZXQgY29va2llKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMucGxhdGZvcm0uaXNCcm93c2VyID8gdGhpcy5kb2MuY29va2llIDogJyc7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2M6IE56U2FmZUFueSwgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0pIHt9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgY29va2llIGtleS12YWx1ZSBwYWlyc1xuICAgKlxuICAgKiDojrflj5bmiYDmnIlDb29raWXplK7lgLzlr7lcbiAgICovXG4gIGdldEFsbCgpOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHtcbiAgICBjb25zdCByZXQ6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcbiAgICBjb25zdCBhcnIgPSB0aGlzLmNvb2tpZS5zcGxpdCgnOyAnKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgY29va2llID0gYXJyW2ldO1xuICAgICAgY29uc3QgaW5kZXggPSBjb29raWUuaW5kZXhPZignPScpO1xuICAgICAgaWYgKGluZGV4ID4gMCkge1xuICAgICAgICBjb25zdCBuYW1lID0gZGVjb2RlVVJJQ29tcG9uZW50KGNvb2tpZS5zdWJzdHJpbmcoMCwgaW5kZXgpKTtcbiAgICAgICAgaWYgKHJldFtuYW1lXSA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0W25hbWVdID0gZGVjb2RlVVJJQ29tcG9uZW50KGNvb2tpZS5zdWJzdHJpbmcoaW5kZXggKyAxKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHZhbHVlIG9mIGdpdmVuIGNvb2tpZSBga2V5YFxuICAgKlxuICAgKiDojrflj5bmjIflrpogYGtleWAg55qE5YC8XG4gICAqL1xuICBnZXQoa2V5OiBzdHJpbmcpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLmdldEFsbCgpW2tleV07XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBhIHZhbHVlIGZvciBnaXZlbiBjb29raWUga2V5XG4gICAqXG4gICAqIOiuvue9ruaMh+WumiBDb29raWUg6ZSu55qE5YC8XG4gICAqL1xuICBwdXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIG9wdGlvbnM/OiBDb29raWVPcHRpb25zKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBvcHQgPSB7IHBhdGg6ICcvJywgLi4ub3B0aW9ucyB9O1xuICAgIGlmICh0eXBlb2Ygb3B0LmV4cGlyZXMgPT09ICdudW1iZXInKSB7XG4gICAgICBvcHQuZXhwaXJlcyA9IG5ldyBEYXRlKCtuZXcgRGF0ZSgpICsgb3B0LmV4cGlyZXMgKiAxZTMpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG9wdC5leHBpcmVzICE9PSAnc3RyaW5nJykge1xuICAgICAgb3B0LmV4cGlyZXMgPSBvcHQuZXhwaXJlcyA/IG9wdC5leHBpcmVzLnRvVVRDU3RyaW5nKCkgOiAnJztcbiAgICB9XG4gICAgY29uc3Qgb3B0U3RyOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB8IGJvb2xlYW4gfSA9IG9wdCBhcyBOelNhZmVBbnk7XG4gICAgY29uc3QgYXR0cmlidXRlcyA9IE9iamVjdC5rZXlzKG9wdFN0cilcbiAgICAgIC5maWx0ZXIoayA9PiBvcHRTdHJba10gJiYgb3B0U3RyW2tdICE9PSB0cnVlKVxuICAgICAgLm1hcChrID0+IGAke2t9PSR7KG9wdFN0cltrXSBhcyBzdHJpbmcpLnNwbGl0KCc7JylbMF19YClcbiAgICAgIC5qb2luKCc7Jyk7XG4gICAgdGhpcy5kb2MuY29va2llID0gYCR7ZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhrZXkpKX09JHtlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKHZhbHVlKSl9JHtcbiAgICAgIGF0dHJpYnV0ZXMgPyBgOyAke2F0dHJpYnV0ZXN9YCA6ICcnXG4gICAgfWA7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGdpdmVuIGNvb2tpZVxuICAgKlxuICAgKiDnp7vpmaTmjIflrpogQ29va2llXG4gICAqL1xuICByZW1vdmUoa2V5OiBzdHJpbmcsIG9wdGlvbnM/OiBDb29raWVPcHRpb25zKTogdm9pZCB7XG4gICAgdGhpcy5wdXQoa2V5LCAnJywgb3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGFsbCBjb29raWVzXG4gICAqXG4gICAqIOenu+mZpOaJgOaciSBDb29raWVzXG4gICAqL1xuICByZW1vdmVBbGwoKTogdm9pZCB7XG4gICAgdGhpcy5kb2MuY29va2llID0gJyc7XG4gIH1cbn1cbiJdfQ==