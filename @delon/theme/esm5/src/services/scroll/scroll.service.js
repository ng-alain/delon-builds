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
    ScrollService.prototype._getDoc = /**
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
    ScrollService.prototype._getWin = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var doc = this._getDoc();
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
        var win = this._getWin();
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
        (element || this._getWin()).scrollTo(position[0], position[1]);
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
        if (!element) {
            element = this._getDoc().body;
        }
        element.scrollIntoView();
        /** @type {?} */
        var win = this._getWin();
        if (win && win.scrollBy) {
            win.scrollBy(0, (/** @type {?} */ (element)).getBoundingClientRect().top - topOffset);
            if (win.pageYOffset < 20) {
                win.scrollBy(0, -win.pageYOffset);
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
        this.scrollToElement(this._getDoc().body, topOffset);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdGhlbWUvIiwic291cmNlcyI6WyJzcmMvc2VydmljZXMvc2Nyb2xsL3Njcm9sbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUVuRDtJQVdFLHVCQUFzQyxJQUFTLEVBQVUsUUFBa0I7UUFBckMsU0FBSSxHQUFKLElBQUksQ0FBSztRQUFVLGFBQVEsR0FBUixRQUFRLENBQVU7SUFBRyxDQUFDOzs7OztJQVR2RSwrQkFBTzs7OztJQUFmO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxJQUFJLFFBQVEsQ0FBQztJQUMvQixDQUFDOzs7OztJQUVPLCtCQUFPOzs7O0lBQWY7O1lBQ1EsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUU7UUFDMUIsT0FBTyxHQUFHLENBQUMsV0FBVyxJQUFJLE1BQU0sQ0FBQztJQUNuQyxDQUFDO0lBSUQ7OztPQUdHOzs7Ozs7SUFDSCx5Q0FBaUI7Ozs7O0lBQWpCLFVBQWtCLE9BQTBCO1FBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUM1QixPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ2Y7O1lBRUssR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUU7UUFDMUIsSUFBSSxPQUFPLElBQUksT0FBTyxLQUFLLEdBQUcsRUFBRTtZQUM5QixPQUFPLENBQUMsQ0FBQyxtQkFBQSxPQUFPLEVBQVcsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDLG1CQUFBLE9BQU8sRUFBVyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDMUU7YUFBTTtZQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUMzQztJQUNILENBQUM7SUFFRDs7O09BR0c7Ozs7Ozs7SUFDSCx3Q0FBZ0I7Ozs7OztJQUFoQixVQUFpQixPQUE0QyxFQUFFLFFBQTBCO1FBQ3ZGLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUM1QixPQUFPO1NBQ1I7UUFDRCxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFRDs7OztPQUlHOzs7Ozs7O0lBQ0gsdUNBQWU7Ozs7OztJQUFmLFVBQWdCLE9BQXdCLEVBQUUsU0FBYTtRQUFiLDBCQUFBLEVBQUEsYUFBYTtRQUNyRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDNUIsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNaLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDO1NBQy9CO1FBRUQsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDOztZQUVuQixHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRTtRQUMxQixJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsUUFBUSxFQUFFO1lBQ3ZCLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLG1CQUFBLE9BQU8sRUFBQyxDQUFDLHFCQUFxQixFQUFFLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxDQUFDO1lBRWxFLElBQUksR0FBRyxDQUFDLFdBQVcsR0FBRyxFQUFFLEVBQUU7Z0JBQ3hCLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ25DO1NBQ0Y7SUFDSCxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSCxtQ0FBVzs7Ozs7SUFBWCxVQUFZLFNBQWE7UUFBYiwwQkFBQSxFQUFBLGFBQWE7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFO1lBQzVCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztJQUN2RCxDQUFDOztnQkEzRUYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztnREFXbkIsTUFBTSxTQUFDLFFBQVE7Z0JBZnJCLFFBQVE7Ozt3QkFBakI7Q0FnRkMsQUE1RUQsSUE0RUM7U0EzRVksYUFBYTs7Ozs7O0lBVVosNkJBQW1DOzs7OztJQUFFLGlDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFNjcm9sbFNlcnZpY2Uge1xuICBwcml2YXRlIF9nZXREb2MoKTogRG9jdW1lbnQge1xuICAgIHJldHVybiB0aGlzLl9kb2MgfHwgZG9jdW1lbnQ7XG4gIH1cblxuICBwcml2YXRlIF9nZXRXaW4oKTogV2luZG93IHtcbiAgICBjb25zdCBkb2MgPSB0aGlzLl9nZXREb2MoKTtcbiAgICByZXR1cm4gZG9jLmRlZmF1bHRWaWV3IHx8IHdpbmRvdztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvYzogYW55LCBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSkge31cblxuICAvKipcbiAgICog6I635Y+W5rua5Yqo5p2h5L2N572uXG4gICAqIEBwYXJhbSBlbGVtZW50IOaMh+WumuWFg+e0oO+8jOm7mOiupCBgd2luZG93YFxuICAgKi9cbiAgZ2V0U2Nyb2xsUG9zaXRpb24oZWxlbWVudD86IEVsZW1lbnQgfCBXaW5kb3cpOiBbbnVtYmVyLCBudW1iZXJdIHtcbiAgICBpZiAoIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm4gWzAsIDBdO1xuICAgIH1cblxuICAgIGNvbnN0IHdpbiA9IHRoaXMuX2dldFdpbigpO1xuICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQgIT09IHdpbikge1xuICAgICAgcmV0dXJuIFsoZWxlbWVudCBhcyBFbGVtZW50KS5zY3JvbGxMZWZ0LCAoZWxlbWVudCBhcyBFbGVtZW50KS5zY3JvbGxUb3BdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gW3dpbi5wYWdlWE9mZnNldCwgd2luLnBhZ2VZT2Zmc2V0XTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog6K6+572u5rua5Yqo5p2h5L2N572uXG4gICAqIEBwYXJhbSBlbGVtZW50IOaMh+WumuWFg+e0oFxuICAgKi9cbiAgc2Nyb2xsVG9Qb3NpdGlvbihlbGVtZW50OiBFbGVtZW50IHwgV2luZG93IHwgbnVsbCB8IHVuZGVmaW5lZCwgcG9zaXRpb246IFtudW1iZXIsIG51bWJlcl0pOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIChlbGVtZW50IHx8IHRoaXMuX2dldFdpbigpKS5zY3JvbGxUbyhwb3NpdGlvblswXSwgcG9zaXRpb25bMV0pO1xuICB9XG5cbiAgLyoqXG4gICAqIOiuvue9rua7muWKqOadoeiHs+aMh+WumuWFg+e0oFxuICAgKiBAcGFyYW0gZWxlbWVudCDmjIflrprlhYPntKDvvIzpu5jorqQgYGRvY3VtZW50LmJvZHlgXG4gICAqIEBwYXJhbSB0b3BPZmZzZXQg5YGP56e75YC877yM6buY6K6kIGAwYFxuICAgKi9cbiAgc2Nyb2xsVG9FbGVtZW50KGVsZW1lbnQ/OiBFbGVtZW50IHwgbnVsbCwgdG9wT2Zmc2V0ID0gMCkge1xuICAgIGlmICghdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICBlbGVtZW50ID0gdGhpcy5fZ2V0RG9jKCkuYm9keTtcbiAgICB9XG5cbiAgICBlbGVtZW50LnNjcm9sbEludG9WaWV3KCk7XG5cbiAgICBjb25zdCB3aW4gPSB0aGlzLl9nZXRXaW4oKTtcbiAgICBpZiAod2luICYmIHdpbi5zY3JvbGxCeSkge1xuICAgICAgd2luLnNjcm9sbEJ5KDAsIGVsZW1lbnQhLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtIHRvcE9mZnNldCk7XG5cbiAgICAgIGlmICh3aW4ucGFnZVlPZmZzZXQgPCAyMCkge1xuICAgICAgICB3aW4uc2Nyb2xsQnkoMCwgLXdpbi5wYWdlWU9mZnNldCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOa7muWKqOiHs+mhtumDqFxuICAgKiBAcGFyYW0gdG9wT2Zmc2V0IOWBj+enu+WAvO+8jOm7mOiupCBgMGBcbiAgICovXG4gIHNjcm9sbFRvVG9wKHRvcE9mZnNldCA9IDApIHtcbiAgICBpZiAoIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2Nyb2xsVG9FbGVtZW50KHRoaXMuX2dldERvYygpLmJvZHksIHRvcE9mZnNldCk7XG4gIH1cbn1cbiJdfQ==