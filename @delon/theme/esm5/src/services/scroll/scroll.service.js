/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
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
        element.scrollIntoView();
        /** @type {?} */
        var w = this.win;
        if (w && w.scrollBy) {
            w.scrollBy(0, element.getBoundingClientRect().top - topOffset);
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
    /** @nocollapse */ ScrollService.ngInjectableDef = i0.defineInjectable({ factory: function ScrollService_Factory() { return new ScrollService(i0.inject(i1.WINDOW), i0.inject(i2.DOCUMENT)); }, token: ScrollService, providedIn: "root" });
    return ScrollService;
}());
export { ScrollService };
if (false) {
    /** @type {?} */
    ScrollService.prototype.win;
    /** @type {?} */
    ScrollService.prototype.doc;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdGhlbWUvIiwic291cmNlcyI6WyJzcmMvc2VydmljZXMvc2Nyb2xsL3Njcm9sbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7OztJQUl4Qyx1QkFDMEIsR0FBUSxFQUNOLEdBQVE7UUFEVixRQUFHLEdBQUgsR0FBRyxDQUFLO1FBQ04sUUFBRyxHQUFILEdBQUcsQ0FBSztLQUNoQztJQUVKOzs7O09BSUc7Ozs7Ozs7SUFDSCx1Q0FBZTs7Ozs7O0lBQWYsVUFBZ0IsT0FBaUIsRUFBRSxTQUFhO1FBQWIsMEJBQUEsRUFBQSxhQUFhO1FBQzlDLElBQUksQ0FBQyxPQUFPO1lBQUUsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBRXRDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQzs7UUFFekIsSUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFO1lBQ25CLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUMsQ0FBQztZQUUvRCxJQUFJLENBQUMsQ0FBQyxXQUFXLEdBQUcsRUFBRSxFQUFFO2dCQUN0QixDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUMvQjtTQUNGO0tBQ0Y7SUFFRDs7O09BR0c7Ozs7OztJQUNILG1DQUFXOzs7OztJQUFYLFVBQVksU0FBYTtRQUFiLDBCQUFBLEVBQUEsYUFBYTtRQUN2QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0tBQ2hEOztnQkFqQ0YsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztnREFHN0IsTUFBTSxTQUFDLE1BQU07Z0RBQ2IsTUFBTSxTQUFDLFFBQVE7Ozt3QkFScEI7O1NBS2EsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgV0lORE9XIH0gZnJvbSAnLi4vLi4vd2luX3Rva2Vucyc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgU2Nyb2xsU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoV0lORE9XKSBwcml2YXRlIHdpbjogYW55LFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnksXG4gICkge31cblxuICAvKipcbiAgICog6K6+572u5rua5Yqo5p2h6Iez5oyH5a6a5YWD57SgXG4gICAqIEBwYXJhbSBlbGVtZW50IOaMh+WumuWFg+e0oO+8jOm7mOiupCBgZG9jdW1lbnQuYm9keWBcbiAgICogQHBhcmFtIHRvcE9mZnNldCDlgY/np7vlgLzvvIzpu5jorqQgYDBgXG4gICAqL1xuICBzY3JvbGxUb0VsZW1lbnQoZWxlbWVudD86IEVsZW1lbnQsIHRvcE9mZnNldCA9IDApIHtcbiAgICBpZiAoIWVsZW1lbnQpIGVsZW1lbnQgPSB0aGlzLmRvYy5ib2R5O1xuXG4gICAgZWxlbWVudC5zY3JvbGxJbnRvVmlldygpO1xuXG4gICAgY29uc3QgdyA9IHRoaXMud2luO1xuICAgIGlmICh3ICYmIHcuc2Nyb2xsQnkpIHtcbiAgICAgIHcuc2Nyb2xsQnkoMCwgZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgLSB0b3BPZmZzZXQpO1xuXG4gICAgICBpZiAody5wYWdlWU9mZnNldCA8IDIwKSB7XG4gICAgICAgIHcuc2Nyb2xsQnkoMCwgLXcucGFnZVlPZmZzZXQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDmu5rliqjoh7Ppobbpg6hcbiAgICogQHBhcmFtIHRvcE9mZnNldCDlgY/np7vlgLzvvIzpu5jorqQgYDBgXG4gICAqL1xuICBzY3JvbGxUb1RvcCh0b3BPZmZzZXQgPSAwKSB7XG4gICAgdGhpcy5zY3JvbGxUb0VsZW1lbnQodGhpcy5kb2MuYm9keSwgdG9wT2Zmc2V0KTtcbiAgfVxufVxuIl19