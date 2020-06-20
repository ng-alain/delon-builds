/**
 * @fileoverview added by tsickle
 * Generated from: src/services/scroll/scroll.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/cdk/platform";
var ScrollService = /** @class */ (function () {
    function ScrollService(_doc, platform) {
        this._doc = _doc;
        this.platform = platform;
    }
    /**
     * @private
     * @return {?}
     */
    ScrollService.prototype._getDocument = /**
     * @private
     * @return {?}
     */
    function () {
        return this._doc || document;
    };
    /**
     * @private
     * @return {?}
     */
    ScrollService.prototype._getWindow = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var doc = this._getDocument();
        return doc.defaultView || window;
    };
    /**
     * 获取滚动条位置
     * @param element 指定元素，默认 `window`
     */
    /**
     * 获取滚动条位置
     * @param {?=} element 指定元素，默认 `window`
     * @return {?}
     */
    ScrollService.prototype.getScrollPosition = /**
     * 获取滚动条位置
     * @param {?=} element 指定元素，默认 `window`
     * @return {?}
     */
    function (element) {
        if (!this.platform.isBrowser) {
            return [0, 0];
        }
        /** @type {?} */
        var win = this._getWindow();
        if (element && element !== win) {
            return [((/** @type {?} */ (element))).scrollLeft, ((/** @type {?} */ (element))).scrollTop];
        }
        else {
            return [win.pageXOffset, win.pageYOffset];
        }
    };
    /**
     * 设置滚动条位置
     * @param element 指定元素
     */
    /**
     * 设置滚动条位置
     * @param {?} element 指定元素
     * @param {?} position
     * @return {?}
     */
    ScrollService.prototype.scrollToPosition = /**
     * 设置滚动条位置
     * @param {?} element 指定元素
     * @param {?} position
     * @return {?}
     */
    function (element, position) {
        if (!this.platform.isBrowser) {
            return;
        }
        (element || this._getWindow()).scrollTo(position[0], position[1]);
    };
    /**
     * 设置滚动条至指定元素
     * @param element 指定元素，默认 `document.body`
     * @param topOffset 偏移值，默认 `0`
     */
    /**
     * 设置滚动条至指定元素
     * @param {?=} element 指定元素，默认 `document.body`
     * @param {?=} topOffset 偏移值，默认 `0`
     * @return {?}
     */
    ScrollService.prototype.scrollToElement = /**
     * 设置滚动条至指定元素
     * @param {?=} element 指定元素，默认 `document.body`
     * @param {?=} topOffset 偏移值，默认 `0`
     * @return {?}
     */
    function (element, topOffset) {
        if (topOffset === void 0) { topOffset = 0; }
        if (!this.platform.isBrowser) {
            return;
        }
        if (!element)
            element = this._getDocument().body;
        (/** @type {?} */ (element)).scrollIntoView();
        /** @type {?} */
        var w = this._getWindow();
        if (w && w.scrollBy) {
            w.scrollBy(0, (/** @type {?} */ (element)).getBoundingClientRect().top - topOffset);
            if (w.pageYOffset < 20) {
                w.scrollBy(0, -w.pageYOffset);
            }
        }
    };
    /**
     * 滚动至顶部
     * @param topOffset 偏移值，默认 `0`
     */
    /**
     * 滚动至顶部
     * @param {?=} topOffset 偏移值，默认 `0`
     * @return {?}
     */
    ScrollService.prototype.scrollToTop = /**
     * 滚动至顶部
     * @param {?=} topOffset 偏移值，默认 `0`
     * @return {?}
     */
    function (topOffset) {
        if (topOffset === void 0) { topOffset = 0; }
        if (!this.platform.isBrowser) {
            return;
        }
        this.scrollToElement(this._getDocument().body, topOffset);
    };
    ScrollService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ScrollService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: Platform }
    ]; };
    /** @nocollapse */ ScrollService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ScrollService_Factory() { return new ScrollService(i0.ɵɵinject(i1.DOCUMENT), i0.ɵɵinject(i2.Platform)); }, token: ScrollService, providedIn: "root" });
    return ScrollService;
}());
export { ScrollService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ScrollService.prototype._doc;
    /**
     * @type {?}
     * @private
     */
    ScrollService.prototype.platform;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdGhlbWUvIiwic291cmNlcyI6WyJzcmMvc2VydmljZXMvc2Nyb2xsL3Njcm9sbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUVuRDtJQVdFLHVCQUFzQyxJQUFTLEVBQVUsUUFBa0I7UUFBckMsU0FBSSxHQUFKLElBQUksQ0FBSztRQUFVLGFBQVEsR0FBUixRQUFRLENBQVU7SUFBRyxDQUFDOzs7OztJQVR2RSxvQ0FBWTs7OztJQUFwQjtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksSUFBSSxRQUFRLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFFTyxrQ0FBVTs7OztJQUFsQjs7WUFDUSxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRTtRQUMvQixPQUFPLEdBQUcsQ0FBQyxXQUFXLElBQUksTUFBTSxDQUFDO0lBQ25DLENBQUM7SUFJRDs7O09BR0c7Ozs7OztJQUNILHlDQUFpQjs7Ozs7SUFBakIsVUFBa0IsT0FBMEI7UUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFO1lBQzVCLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDZjs7WUFDSyxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRTtRQUM3QixJQUFJLE9BQU8sSUFBSSxPQUFPLEtBQUssR0FBRyxFQUFFO1lBQzlCLE9BQU8sQ0FBQyxDQUFDLG1CQUFBLE9BQU8sRUFBVyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUMsbUJBQUEsT0FBTyxFQUFXLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUMxRTthQUFNO1lBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzNDO0lBQ0gsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7OztJQUNILHdDQUFnQjs7Ozs7O0lBQWhCLFVBQWlCLE9BQTRDLEVBQUUsUUFBMEI7UUFDdkYsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFO1lBQzVCLE9BQU87U0FDUjtRQUNELENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVEOzs7O09BSUc7Ozs7Ozs7SUFDSCx1Q0FBZTs7Ozs7O0lBQWYsVUFBZ0IsT0FBd0IsRUFBRSxTQUFhO1FBQWIsMEJBQUEsRUFBQSxhQUFhO1FBQ3JELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUM1QixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsT0FBTztZQUFFLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDO1FBRWpELG1CQUFBLE9BQU8sRUFBQyxDQUFDLGNBQWMsRUFBRSxDQUFDOztZQUVwQixDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRTtRQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFO1lBQ25CLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLG1CQUFBLE9BQU8sRUFBQyxDQUFDLHFCQUFxQixFQUFFLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxDQUFDO1lBRWhFLElBQUksQ0FBQyxDQUFDLFdBQVcsR0FBRyxFQUFFLEVBQUU7Z0JBQ3RCLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQy9CO1NBQ0Y7SUFDSCxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSCxtQ0FBVzs7Ozs7SUFBWCxVQUFZLFNBQWE7UUFBYiwwQkFBQSxFQUFBLGFBQWE7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFO1lBQzVCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztJQUM1RCxDQUFDOztnQkF4RUYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztnREFXbkIsTUFBTSxTQUFDLFFBQVE7Z0JBZnJCLFFBQVE7Ozt3QkFBakI7Q0E2RUMsQUF6RUQsSUF5RUM7U0F4RVksYUFBYTs7Ozs7O0lBVVosNkJBQW1DOzs7OztJQUFFLGlDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFNjcm9sbFNlcnZpY2Uge1xuICBwcml2YXRlIF9nZXREb2N1bWVudCgpOiBEb2N1bWVudCB7XG4gICAgcmV0dXJuIHRoaXMuX2RvYyB8fCBkb2N1bWVudDtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFdpbmRvdygpOiBXaW5kb3cge1xuICAgIGNvbnN0IGRvYyA9IHRoaXMuX2dldERvY3VtZW50KCk7XG4gICAgcmV0dXJuIGRvYy5kZWZhdWx0VmlldyB8fCB3aW5kb3c7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2M6IGFueSwgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0pIHt9XG5cbiAgLyoqXG4gICAqIOiOt+WPlua7muWKqOadoeS9jee9rlxuICAgKiBAcGFyYW0gZWxlbWVudCDmjIflrprlhYPntKDvvIzpu5jorqQgYHdpbmRvd2BcbiAgICovXG4gIGdldFNjcm9sbFBvc2l0aW9uKGVsZW1lbnQ/OiBFbGVtZW50IHwgV2luZG93KTogW251bWJlciwgbnVtYmVyXSB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuIFswLCAwXTtcbiAgICB9XG4gICAgY29uc3Qgd2luID0gdGhpcy5fZ2V0V2luZG93KCk7XG4gICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudCAhPT0gd2luKSB7XG4gICAgICByZXR1cm4gWyhlbGVtZW50IGFzIEVsZW1lbnQpLnNjcm9sbExlZnQsIChlbGVtZW50IGFzIEVsZW1lbnQpLnNjcm9sbFRvcF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBbd2luLnBhZ2VYT2Zmc2V0LCB3aW4ucGFnZVlPZmZzZXRdO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDorr7nva7mu5rliqjmnaHkvY3nva5cbiAgICogQHBhcmFtIGVsZW1lbnQg5oyH5a6a5YWD57SgXG4gICAqL1xuICBzY3JvbGxUb1Bvc2l0aW9uKGVsZW1lbnQ6IEVsZW1lbnQgfCBXaW5kb3cgfCBudWxsIHwgdW5kZWZpbmVkLCBwb3NpdGlvbjogW251bWJlciwgbnVtYmVyXSk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgKGVsZW1lbnQgfHwgdGhpcy5fZ2V0V2luZG93KCkpLnNjcm9sbFRvKHBvc2l0aW9uWzBdLCBwb3NpdGlvblsxXSk7XG4gIH1cblxuICAvKipcbiAgICog6K6+572u5rua5Yqo5p2h6Iez5oyH5a6a5YWD57SgXG4gICAqIEBwYXJhbSBlbGVtZW50IOaMh+WumuWFg+e0oO+8jOm7mOiupCBgZG9jdW1lbnQuYm9keWBcbiAgICogQHBhcmFtIHRvcE9mZnNldCDlgY/np7vlgLzvvIzpu5jorqQgYDBgXG4gICAqL1xuICBzY3JvbGxUb0VsZW1lbnQoZWxlbWVudD86IEVsZW1lbnQgfCBudWxsLCB0b3BPZmZzZXQgPSAwKSB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIWVsZW1lbnQpIGVsZW1lbnQgPSB0aGlzLl9nZXREb2N1bWVudCgpLmJvZHk7XG5cbiAgICBlbGVtZW50IS5zY3JvbGxJbnRvVmlldygpO1xuXG4gICAgY29uc3QgdyA9IHRoaXMuX2dldFdpbmRvdygpO1xuICAgIGlmICh3ICYmIHcuc2Nyb2xsQnkpIHtcbiAgICAgIHcuc2Nyb2xsQnkoMCwgZWxlbWVudCEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC0gdG9wT2Zmc2V0KTtcblxuICAgICAgaWYgKHcucGFnZVlPZmZzZXQgPCAyMCkge1xuICAgICAgICB3LnNjcm9sbEJ5KDAsIC13LnBhZ2VZT2Zmc2V0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog5rua5Yqo6Iez6aG26YOoXG4gICAqIEBwYXJhbSB0b3BPZmZzZXQg5YGP56e75YC877yM6buY6K6kIGAwYFxuICAgKi9cbiAgc2Nyb2xsVG9Ub3AodG9wT2Zmc2V0ID0gMCkge1xuICAgIGlmICghdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zY3JvbGxUb0VsZW1lbnQodGhpcy5fZ2V0RG9jdW1lbnQoKS5ib2R5LCB0b3BPZmZzZXQpO1xuICB9XG59XG4iXX0=