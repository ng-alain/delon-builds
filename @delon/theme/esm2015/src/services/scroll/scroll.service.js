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
export class ScrollService {
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
    _getDocument() {
        return this._doc || document;
    }
    /**
     * @private
     * @return {?}
     */
    _getWindow() {
        /** @type {?} */
        const doc = this._getDocument();
        return doc.defaultView || window;
    }
    /**
     * 获取滚动条位置
     * @param {?=} element 指定元素，默认 `window`
     * @return {?}
     */
    getScrollPosition(element) {
        if (!this.platform.isBrowser) {
            return [0, 0];
        }
        /** @type {?} */
        const win = this._getWindow();
        if (element && element !== win) {
            return [((/** @type {?} */ (element))).scrollLeft, ((/** @type {?} */ (element))).scrollTop];
        }
        else {
            return [win.pageXOffset, win.pageYOffset];
        }
    }
    /**
     * 设置滚动条位置
     * @param {?} element 指定元素
     * @param {?} position
     * @return {?}
     */
    scrollToPosition(element, position) {
        if (!this.platform.isBrowser) {
            return;
        }
        (element || this._getWindow()).scrollTo(position[0], position[1]);
    }
    /**
     * 设置滚动条至指定元素
     * @param {?=} element 指定元素，默认 `document.body`
     * @param {?=} topOffset 偏移值，默认 `0`
     * @return {?}
     */
    scrollToElement(element, topOffset = 0) {
        if (!this.platform.isBrowser) {
            return;
        }
        if (!element)
            element = this._getDocument().body;
        (/** @type {?} */ (element)).scrollIntoView();
        /** @type {?} */
        const w = this._getWindow();
        if (w && w.scrollBy) {
            w.scrollBy(0, (/** @type {?} */ (element)).getBoundingClientRect().top - topOffset);
            if (w.pageYOffset < 20) {
                w.scrollBy(0, -w.pageYOffset);
            }
        }
    }
    /**
     * 滚动至顶部
     * @param {?=} topOffset 偏移值，默认 `0`
     * @return {?}
     */
    scrollToTop(topOffset = 0) {
        if (!this.platform.isBrowser) {
            return;
        }
        this.scrollToElement(this._getDocument().body, topOffset);
    }
}
ScrollService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ScrollService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Platform }
];
/** @nocollapse */ ScrollService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ScrollService_Factory() { return new ScrollService(i0.ɵɵinject(i1.DOCUMENT), i0.ɵɵinject(i2.Platform)); }, token: ScrollService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdGhlbWUvIiwic291cmNlcyI6WyJzcmMvc2VydmljZXMvc2Nyb2xsL3Njcm9sbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUduRCxNQUFNLE9BQU8sYUFBYTs7Ozs7SUFVeEIsWUFBc0MsSUFBUyxFQUFVLFFBQWtCO1FBQXJDLFNBQUksR0FBSixJQUFJLENBQUs7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQUcsQ0FBQzs7Ozs7SUFUdkUsWUFBWTtRQUNsQixPQUFPLElBQUksQ0FBQyxJQUFJLElBQUksUUFBUSxDQUFDO0lBQy9CLENBQUM7Ozs7O0lBRU8sVUFBVTs7Y0FDVixHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRTtRQUMvQixPQUFPLEdBQUcsQ0FBQyxXQUFXLElBQUksTUFBTSxDQUFDO0lBQ25DLENBQUM7Ozs7OztJQVFELGlCQUFpQixDQUFDLE9BQTBCO1FBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUM1QixPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ2Y7O2NBQ0ssR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUU7UUFDN0IsSUFBSSxPQUFPLElBQUksT0FBTyxLQUFLLEdBQUcsRUFBRTtZQUM5QixPQUFPLENBQUMsQ0FBQyxtQkFBQSxPQUFPLEVBQVcsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDLG1CQUFBLE9BQU8sRUFBVyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDMUU7YUFBTTtZQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUMzQztJQUNILENBQUM7Ozs7Ozs7SUFNRCxnQkFBZ0IsQ0FBQyxPQUE0QyxFQUFFLFFBQTBCO1FBQ3ZGLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUM1QixPQUFPO1NBQ1I7UUFDRCxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7Ozs7Ozs7SUFPRCxlQUFlLENBQUMsT0FBd0IsRUFBRSxTQUFTLEdBQUcsQ0FBQztRQUNyRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDNUIsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLE9BQU87WUFBRSxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQztRQUVqRCxtQkFBQSxPQUFPLEVBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQzs7Y0FFcEIsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUU7UUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRTtZQUNuQixDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxtQkFBQSxPQUFPLEVBQUMsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUMsQ0FBQztZQUVoRSxJQUFJLENBQUMsQ0FBQyxXQUFXLEdBQUcsRUFBRSxFQUFFO2dCQUN0QixDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUMvQjtTQUNGO0lBQ0gsQ0FBQzs7Ozs7O0lBTUQsV0FBVyxDQUFDLFNBQVMsR0FBRyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUM1QixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7O1lBeEVGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7NENBV25CLE1BQU0sU0FBQyxRQUFRO1lBZnJCLFFBQVE7Ozs7Ozs7O0lBZUgsNkJBQW1DOzs7OztJQUFFLGlDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFNjcm9sbFNlcnZpY2Uge1xuICBwcml2YXRlIF9nZXREb2N1bWVudCgpOiBEb2N1bWVudCB7XG4gICAgcmV0dXJuIHRoaXMuX2RvYyB8fCBkb2N1bWVudDtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFdpbmRvdygpOiBXaW5kb3cge1xuICAgIGNvbnN0IGRvYyA9IHRoaXMuX2dldERvY3VtZW50KCk7XG4gICAgcmV0dXJuIGRvYy5kZWZhdWx0VmlldyB8fCB3aW5kb3c7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2M6IGFueSwgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0pIHt9XG5cbiAgLyoqXG4gICAqIOiOt+WPlua7muWKqOadoeS9jee9rlxuICAgKiBAcGFyYW0gZWxlbWVudCDmjIflrprlhYPntKDvvIzpu5jorqQgYHdpbmRvd2BcbiAgICovXG4gIGdldFNjcm9sbFBvc2l0aW9uKGVsZW1lbnQ/OiBFbGVtZW50IHwgV2luZG93KTogW251bWJlciwgbnVtYmVyXSB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuIFswLCAwXTtcbiAgICB9XG4gICAgY29uc3Qgd2luID0gdGhpcy5fZ2V0V2luZG93KCk7XG4gICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudCAhPT0gd2luKSB7XG4gICAgICByZXR1cm4gWyhlbGVtZW50IGFzIEVsZW1lbnQpLnNjcm9sbExlZnQsIChlbGVtZW50IGFzIEVsZW1lbnQpLnNjcm9sbFRvcF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBbd2luLnBhZ2VYT2Zmc2V0LCB3aW4ucGFnZVlPZmZzZXRdO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDorr7nva7mu5rliqjmnaHkvY3nva5cbiAgICogQHBhcmFtIGVsZW1lbnQg5oyH5a6a5YWD57SgXG4gICAqL1xuICBzY3JvbGxUb1Bvc2l0aW9uKGVsZW1lbnQ6IEVsZW1lbnQgfCBXaW5kb3cgfCBudWxsIHwgdW5kZWZpbmVkLCBwb3NpdGlvbjogW251bWJlciwgbnVtYmVyXSk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgKGVsZW1lbnQgfHwgdGhpcy5fZ2V0V2luZG93KCkpLnNjcm9sbFRvKHBvc2l0aW9uWzBdLCBwb3NpdGlvblsxXSk7XG4gIH1cblxuICAvKipcbiAgICog6K6+572u5rua5Yqo5p2h6Iez5oyH5a6a5YWD57SgXG4gICAqIEBwYXJhbSBlbGVtZW50IOaMh+WumuWFg+e0oO+8jOm7mOiupCBgZG9jdW1lbnQuYm9keWBcbiAgICogQHBhcmFtIHRvcE9mZnNldCDlgY/np7vlgLzvvIzpu5jorqQgYDBgXG4gICAqL1xuICBzY3JvbGxUb0VsZW1lbnQoZWxlbWVudD86IEVsZW1lbnQgfCBudWxsLCB0b3BPZmZzZXQgPSAwKSB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIWVsZW1lbnQpIGVsZW1lbnQgPSB0aGlzLl9nZXREb2N1bWVudCgpLmJvZHk7XG5cbiAgICBlbGVtZW50IS5zY3JvbGxJbnRvVmlldygpO1xuXG4gICAgY29uc3QgdyA9IHRoaXMuX2dldFdpbmRvdygpO1xuICAgIGlmICh3ICYmIHcuc2Nyb2xsQnkpIHtcbiAgICAgIHcuc2Nyb2xsQnkoMCwgZWxlbWVudCEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC0gdG9wT2Zmc2V0KTtcblxuICAgICAgaWYgKHcucGFnZVlPZmZzZXQgPCAyMCkge1xuICAgICAgICB3LnNjcm9sbEJ5KDAsIC13LnBhZ2VZT2Zmc2V0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog5rua5Yqo6Iez6aG26YOoXG4gICAqIEBwYXJhbSB0b3BPZmZzZXQg5YGP56e75YC877yM6buY6K6kIGAwYFxuICAgKi9cbiAgc2Nyb2xsVG9Ub3AodG9wT2Zmc2V0ID0gMCkge1xuICAgIGlmICghdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zY3JvbGxUb0VsZW1lbnQodGhpcy5fZ2V0RG9jdW1lbnQoKS5ib2R5LCB0b3BPZmZzZXQpO1xuICB9XG59XG4iXX0=