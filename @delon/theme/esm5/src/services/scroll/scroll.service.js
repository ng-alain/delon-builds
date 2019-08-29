/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { WINDOW } from '../../win_tokens';
import * as i0 from "@angular/core";
import * as i1 from "../../win_tokens";
import * as i2 from "@angular/common";
var ScrollService = /** @class */ (function () {
    function ScrollService(win, doc) {
        this.win = win;
        this.doc = doc;
    }
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
        if (element && element !== this.win) {
            return [element.scrollLeft, element.scrollTop];
        }
        else {
            return [this.win.pageXOffset, this.win.pageYOffset];
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
        (element || this.win).scrollTo(position[0], position[1]);
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
        if (!element)
            element = this.doc.body;
        (/** @type {?} */ (element)).scrollIntoView();
        /** @type {?} */
        var w = this.win;
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
        this.scrollToElement(this.doc.body, topOffset);
    };
    ScrollService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ScrollService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [WINDOW,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    /** @nocollapse */ ScrollService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ScrollService_Factory() { return new ScrollService(i0.ɵɵinject(i1.WINDOW), i0.ɵɵinject(i2.DOCUMENT)); }, token: ScrollService, providedIn: "root" });
    return ScrollService;
}());
export { ScrollService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ScrollService.prototype.win;
    /**
     * @type {?}
     * @private
     */
    ScrollService.prototype.doc;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdGhlbWUvIiwic291cmNlcyI6WyJzcmMvc2VydmljZXMvc2Nyb2xsL3Njcm9sbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7O0FBRTFDO0lBRUUsdUJBQW9DLEdBQVEsRUFBNEIsR0FBUTtRQUE1QyxRQUFHLEdBQUgsR0FBRyxDQUFLO1FBQTRCLFFBQUcsR0FBSCxHQUFHLENBQUs7SUFBRyxDQUFDO0lBRXBGOzs7T0FHRzs7Ozs7O0lBQ0gseUNBQWlCOzs7OztJQUFqQixVQUFrQixPQUFpQjtRQUNqQyxJQUFJLE9BQU8sSUFBSSxPQUFPLEtBQUssSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNuQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDaEQ7YUFBTTtZQUNMLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3JEO0lBQ0gsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7OztJQUNILHdDQUFnQjs7Ozs7O0lBQWhCLFVBQWlCLE9BQTRDLEVBQUUsUUFBMEI7UUFDdkYsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVEOzs7O09BSUc7Ozs7Ozs7SUFDSCx1Q0FBZTs7Ozs7O0lBQWYsVUFBZ0IsT0FBd0IsRUFBRSxTQUFhO1FBQWIsMEJBQUEsRUFBQSxhQUFhO1FBQ3JELElBQUksQ0FBQyxPQUFPO1lBQUUsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBRXRDLG1CQUFBLE9BQU8sRUFBQyxDQUFDLGNBQWMsRUFBRSxDQUFDOztZQUVwQixDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUc7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRTtZQUNuQixDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxtQkFBQSxPQUFPLEVBQUMsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUMsQ0FBQztZQUVoRSxJQUFJLENBQUMsQ0FBQyxXQUFXLEdBQUcsRUFBRSxFQUFFO2dCQUN0QixDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUMvQjtTQUNGO0lBQ0gsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7O0lBQ0gsbUNBQVc7Ozs7O0lBQVgsVUFBWSxTQUFhO1FBQWIsMEJBQUEsRUFBQSxhQUFhO1FBQ3ZCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDakQsQ0FBQzs7Z0JBbERGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7Z0RBRW5CLE1BQU0sU0FBQyxNQUFNO2dEQUFxQixNQUFNLFNBQUMsUUFBUTs7O3dCQU5oRTtDQXVEQyxBQW5ERCxJQW1EQztTQWxEWSxhQUFhOzs7Ozs7SUFDWiw0QkFBZ0M7Ozs7O0lBQUUsNEJBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBXSU5ET1cgfSBmcm9tICcuLi8uLi93aW5fdG9rZW5zJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBTY3JvbGxTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoQEluamVjdChXSU5ET1cpIHByaXZhdGUgd2luOiBhbnksIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnkpIHt9XG5cbiAgLyoqXG4gICAqIOiOt+WPlua7muWKqOadoeS9jee9rlxuICAgKiBAcGFyYW0gZWxlbWVudCDmjIflrprlhYPntKDvvIzpu5jorqQgYHdpbmRvd2BcbiAgICovXG4gIGdldFNjcm9sbFBvc2l0aW9uKGVsZW1lbnQ/OiBFbGVtZW50KTogW251bWJlciwgbnVtYmVyXSB7XG4gICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudCAhPT0gdGhpcy53aW4pIHtcbiAgICAgIHJldHVybiBbZWxlbWVudC5zY3JvbGxMZWZ0LCBlbGVtZW50LnNjcm9sbFRvcF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBbdGhpcy53aW4ucGFnZVhPZmZzZXQsIHRoaXMud2luLnBhZ2VZT2Zmc2V0XTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog6K6+572u5rua5Yqo5p2h5L2N572uXG4gICAqIEBwYXJhbSBlbGVtZW50IOaMh+WumuWFg+e0oFxuICAgKi9cbiAgc2Nyb2xsVG9Qb3NpdGlvbihlbGVtZW50OiBFbGVtZW50IHwgV2luZG93IHwgbnVsbCB8IHVuZGVmaW5lZCwgcG9zaXRpb246IFtudW1iZXIsIG51bWJlcl0pOiB2b2lkIHtcbiAgICAoZWxlbWVudCB8fCB0aGlzLndpbikuc2Nyb2xsVG8ocG9zaXRpb25bMF0sIHBvc2l0aW9uWzFdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDorr7nva7mu5rliqjmnaHoh7PmjIflrprlhYPntKBcbiAgICogQHBhcmFtIGVsZW1lbnQg5oyH5a6a5YWD57Sg77yM6buY6K6kIGBkb2N1bWVudC5ib2R5YFxuICAgKiBAcGFyYW0gdG9wT2Zmc2V0IOWBj+enu+WAvO+8jOm7mOiupCBgMGBcbiAgICovXG4gIHNjcm9sbFRvRWxlbWVudChlbGVtZW50PzogRWxlbWVudCB8IG51bGwsIHRvcE9mZnNldCA9IDApIHtcbiAgICBpZiAoIWVsZW1lbnQpIGVsZW1lbnQgPSB0aGlzLmRvYy5ib2R5O1xuXG4gICAgZWxlbWVudCEuc2Nyb2xsSW50b1ZpZXcoKTtcblxuICAgIGNvbnN0IHcgPSB0aGlzLndpbjtcbiAgICBpZiAodyAmJiB3LnNjcm9sbEJ5KSB7XG4gICAgICB3LnNjcm9sbEJ5KDAsIGVsZW1lbnQhLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtIHRvcE9mZnNldCk7XG5cbiAgICAgIGlmICh3LnBhZ2VZT2Zmc2V0IDwgMjApIHtcbiAgICAgICAgdy5zY3JvbGxCeSgwLCAtdy5wYWdlWU9mZnNldCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOa7muWKqOiHs+mhtumDqFxuICAgKiBAcGFyYW0gdG9wT2Zmc2V0IOWBj+enu+WAvO+8jOm7mOiupCBgMGBcbiAgICovXG4gIHNjcm9sbFRvVG9wKHRvcE9mZnNldCA9IDApIHtcbiAgICB0aGlzLnNjcm9sbFRvRWxlbWVudCh0aGlzLmRvYy5ib2R5LCB0b3BPZmZzZXQpO1xuICB9XG59XG4iXX0=