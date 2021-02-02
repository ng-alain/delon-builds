/**
 * @fileoverview added by tsickle
 * Generated from: cookie.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/cdk/platform";
/**
 * @record
 */
export function CookieOptions() { }
if (false) {
    /** @type {?|undefined} */
    CookieOptions.prototype.path;
    /** @type {?|undefined} */
    CookieOptions.prototype.domain;
    /**
     * Expiration time, `number` is seconds
     *
     * 过期时间，`number` 类型表示秒数
     * @type {?|undefined}
     */
    CookieOptions.prototype.expires;
    /** @type {?|undefined} */
    CookieOptions.prototype.secure;
    /** @type {?|undefined} */
    CookieOptions.prototype.HttpOnly;
    /** @type {?|undefined} */
    CookieOptions.prototype.SameSite;
}
/**
 * A set of simple Cookie manipulation classes.
 *
 * 一组简单的 Cookie 操作类。
 */
export class CookieService {
    /**
     * @param {?} _doc
     * @param {?} platform
     */
    constructor(_doc, platform) {
        this._doc = _doc;
        this.platform = platform;
    }
    /**
     * @private
     * @return {?}
     */
    get doc() {
        return this._doc || document;
    }
    /**
     * Original cookie value
     *
     * 原始Cookie值
     * @return {?}
     */
    get cookie() {
        return this.platform.isBrowser ? this.doc.cookie : '';
    }
    /**
     * Get all cookie key-value pairs
     *
     * 获取所有Cookie键值对
     * @return {?}
     */
    getAll() {
        /** @type {?} */
        const ret = {};
        /** @type {?} */
        const arr = this.cookie.split('; ');
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < arr.length; i++) {
            /** @type {?} */
            const cookie = arr[i];
            /** @type {?} */
            const index = cookie.indexOf('=');
            if (index > 0) {
                /** @type {?} */
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
     * @param {?} key
     * @return {?}
     */
    get(key) {
        return this.getAll()[key];
    }
    /**
     * Sets a value for given cookie key
     *
     * 设置指定 Cookie 键的值
     * @param {?} key
     * @param {?} value
     * @param {?=} options
     * @return {?}
     */
    put(key, value, options) {
        if (!this.platform.isBrowser) {
            return;
        }
        /** @type {?} */
        const opt = Object.assign({ path: '/' }, options);
        if (typeof opt.expires === 'number') {
            opt.expires = new Date(+new Date() + opt.expires * 1e3);
        }
        if (typeof opt.expires !== 'string') {
            opt.expires = opt.expires ? opt.expires.toUTCString() : '';
        }
        /** @type {?} */
        const optStr = (/** @type {?} */ (opt));
        /** @type {?} */
        const attributes = Object.keys(optStr)
            .filter((/**
         * @param {?} k
         * @return {?}
         */
        k => optStr[k] && optStr[k] !== true))
            .map((/**
         * @param {?} k
         * @return {?}
         */
        k => `${k}=${((/** @type {?} */ (optStr[k]))).split(';')[0]}`))
            .join(';');
        this.doc.cookie = encodeURIComponent(String(key)) + '=' + encodeURIComponent(String(value)) + (attributes ? '; ' + attributes : '');
    }
    /**
     * Remove given cookie
     *
     * 移除指定 Cookie
     * @param {?} key
     * @param {?=} options
     * @return {?}
     */
    remove(key, options) {
        this.put(key, undefined, options);
    }
    /**
     * Remove all cookies
     *
     * 移除所有 Cookies
     * @return {?}
     */
    removeAll() {
        this.doc.cookie = '';
    }
}
CookieService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
CookieService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Platform }
];
/** @nocollapse */ CookieService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CookieService_Factory() { return new CookieService(i0.ɵɵinject(i1.DOCUMENT), i0.ɵɵinject(i2.Platform)); }, token: CookieService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    CookieService.prototype._doc;
    /**
     * @type {?}
     * @private
     */
    CookieService.prototype.platform;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29va2llLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy91dGlsL2Jyb3dzZXIvY29va2llLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7O0FBRW5ELG1DQVlDOzs7SUFYQyw2QkFBYzs7SUFDZCwrQkFBZ0I7Ozs7Ozs7SUFNaEIsZ0NBQWlDOztJQUNqQywrQkFBaUI7O0lBQ2pCLGlDQUFtQjs7SUFDbkIsaUNBQStDOzs7Ozs7O0FBU2pELE1BQU0sT0FBTyxhQUFhOzs7OztJQWN4QixZQUFzQyxJQUFTLEVBQVUsUUFBa0I7UUFBckMsU0FBSSxHQUFKLElBQUksQ0FBSztRQUFVLGFBQVEsR0FBUixRQUFRLENBQVU7SUFBRyxDQUFDOzs7OztJQWIvRSxJQUFZLEdBQUc7UUFDYixPQUFPLElBQUksQ0FBQyxJQUFJLElBQUksUUFBUSxDQUFDO0lBQy9CLENBQUM7Ozs7Ozs7SUFPRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3hELENBQUM7Ozs7Ozs7SUFTRCxNQUFNOztjQUNFLEdBQUcsR0FBOEIsRUFBRTs7Y0FDbkMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztRQUNuQywwQ0FBMEM7UUFDMUMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFF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Q0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBDb29raWVPcHRpb25zIHtcbiAgcGF0aD86IHN0cmluZztcbiAgZG9tYWluPzogc3RyaW5nO1xuICAvKipcbiAgICogRXhwaXJhdGlvbiB0aW1lLCBgbnVtYmVyYCBpcyBzZWNvbmRzXG4gICAqXG4gICAqIOi/h+acn+aXtumXtO+8jGBudW1iZXJgIOexu+Wei+ihqOekuuenkuaVsFxuICAgKi9cbiAgZXhwaXJlcz86IG51bWJlciB8IERhdGUgfCBzdHJpbmc7XG4gIHNlY3VyZT86IGJvb2xlYW47XG4gIEh0dHBPbmx5PzogYm9vbGVhbjtcbiAgU2FtZVNpdGU/OiBib29sZWFuIHwgJ2xheCcgfCAnc3RyaWN0JyB8ICdub25lJztcbn1cblxuLyoqXG4gKiBBIHNldCBvZiBzaW1wbGUgQ29va2llIG1hbmlwdWxhdGlvbiBjbGFzc2VzLlxuICpcbiAqIOS4gOe7hOeugOWNleeahCBDb29raWUg5pON5L2c57G744CCXG4gKi9cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQ29va2llU2VydmljZSB7XG4gIHByaXZhdGUgZ2V0IGRvYygpOiBEb2N1bWVudCB7XG4gICAgcmV0dXJuIHRoaXMuX2RvYyB8fCBkb2N1bWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcmlnaW5hbCBjb29raWUgdmFsdWVcbiAgICpcbiAgICog5Y6f5aeLQ29va2ll5YC8XG4gICAqL1xuICBnZXQgY29va2llKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMucGxhdGZvcm0uaXNCcm93c2VyID8gdGhpcy5kb2MuY29va2llIDogJyc7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2M6IGFueSwgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0pIHt9XG5cbiAgLyoqXG4gICAqIEdldCBhbGwgY29va2llIGtleS12YWx1ZSBwYWlyc1xuICAgKlxuICAgKiDojrflj5bmiYDmnIlDb29raWXplK7lgLzlr7lcbiAgICovXG4gIGdldEFsbCgpOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHtcbiAgICBjb25zdCByZXQ6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcbiAgICBjb25zdCBhcnIgPSB0aGlzLmNvb2tpZS5zcGxpdCgnOyAnKTtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHByZWZlci1mb3Itb2ZcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgY29va2llID0gYXJyW2ldO1xuICAgICAgY29uc3QgaW5kZXggPSBjb29raWUuaW5kZXhPZignPScpO1xuICAgICAgaWYgKGluZGV4ID4gMCkge1xuICAgICAgICBjb25zdCBuYW1lID0gZGVjb2RlVVJJQ29tcG9uZW50KGNvb2tpZS5zdWJzdHJpbmcoMCwgaW5kZXgpKTtcbiAgICAgICAgaWYgKHJldFtuYW1lXSA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0W25hbWVdID0gZGVjb2RlVVJJQ29tcG9uZW50KGNvb2tpZS5zdWJzdHJpbmcoaW5kZXggKyAxKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHZhbHVlIG9mIGdpdmVuIGNvb2tpZSBga2V5YFxuICAgKlxuICAgKiDojrflj5bmjIflrpogYGtleWAg55qE5YC8XG4gICAqL1xuICBnZXQoa2V5OiBzdHJpbmcpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLmdldEFsbCgpW2tleV07XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBhIHZhbHVlIGZvciBnaXZlbiBjb29raWUga2V5XG4gICAqXG4gICAqIOiuvue9ruaMh+WumiBDb29raWUg6ZSu55qE5YC8XG4gICAqL1xuICBwdXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQsIG9wdGlvbnM/OiBDb29raWVPcHRpb25zKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBvcHQgPSB7IHBhdGg6ICcvJywgLi4ub3B0aW9ucyB9O1xuICAgIGlmICh0eXBlb2Ygb3B0LmV4cGlyZXMgPT09ICdudW1iZXInKSB7XG4gICAgICBvcHQuZXhwaXJlcyA9IG5ldyBEYXRlKCtuZXcgRGF0ZSgpICsgb3B0LmV4cGlyZXMgKiAxZTMpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG9wdC5leHBpcmVzICE9PSAnc3RyaW5nJykge1xuICAgICAgb3B0LmV4cGlyZXMgPSBvcHQuZXhwaXJlcyA/IG9wdC5leHBpcmVzLnRvVVRDU3RyaW5nKCkgOiAnJztcbiAgICB9XG4gICAgY29uc3Qgb3B0U3RyOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB8IGJvb2xlYW4gfSA9IG9wdCBhcyBhbnk7XG4gICAgY29uc3QgYXR0cmlidXRlcyA9IE9iamVjdC5rZXlzKG9wdFN0cilcbiAgICAgIC5maWx0ZXIoayA9PiBvcHRTdHJba10gJiYgb3B0U3RyW2tdICE9PSB0cnVlKVxuICAgICAgLm1hcChrID0+IGAke2t9PSR7KG9wdFN0cltrXSBhcyBzdHJpbmcpLnNwbGl0KCc7JylbMF19YClcbiAgICAgIC5qb2luKCc7Jyk7XG4gICAgdGhpcy5kb2MuY29va2llID0gZW5jb2RlVVJJQ29tcG9uZW50KFN0cmluZyhrZXkpKSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcodmFsdWUpKSArIChhdHRyaWJ1dGVzID8gJzsgJyArIGF0dHJpYnV0ZXMgOiAnJyk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGdpdmVuIGNvb2tpZVxuICAgKlxuICAgKiDnp7vpmaTmjIflrpogQ29va2llXG4gICAqL1xuICByZW1vdmUoa2V5OiBzdHJpbmcsIG9wdGlvbnM/OiBDb29raWVPcHRpb25zKTogdm9pZCB7XG4gICAgdGhpcy5wdXQoa2V5LCB1bmRlZmluZWQsIG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhbGwgY29va2llc1xuICAgKlxuICAgKiDnp7vpmaTmiYDmnIkgQ29va2llc1xuICAgKi9cbiAgcmVtb3ZlQWxsKCk6IHZvaWQge1xuICAgIHRoaXMuZG9jLmNvb2tpZSA9ICcnO1xuICB9XG59XG4iXX0=