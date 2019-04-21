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
export class ScrollService {
    /**
     * @param {?} win
     * @param {?} doc
     */
    constructor(win, doc) {
        this.win = win;
        this.doc = doc;
    }
    /**
     * 获取滚动条位置
     * @param {?=} element 指定元素，默认 `window`
     * @return {?}
     */
    getScrollPosition(element) {
        if (element && element !== this.win) {
            return [element.scrollLeft, element.scrollTop];
        }
        else {
            return [this.win.pageXOffset, this.win.pageYOffset];
        }
    }
    /**
     * 设置滚动条位置
     * @param {?} element 指定元素
     * @param {?} position
     * @return {?}
     */
    scrollToPosition(element, position) {
        (element || this.win).scrollTo(position[0], position[1]);
    }
    /**
     * 设置滚动条至指定元素
     * @param {?=} element 指定元素，默认 `document.body`
     * @param {?=} topOffset 偏移值，默认 `0`
     * @return {?}
     */
    scrollToElement(element, topOffset = 0) {
        if (!element)
            element = this.doc.body;
        (/** @type {?} */ (element)).scrollIntoView();
        /** @type {?} */
        const w = this.win;
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
        this.scrollToElement(this.doc.body, topOffset);
    }
}
ScrollService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ScrollService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [WINDOW,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
/** @nocollapse */ ScrollService.ngInjectableDef = i0.defineInjectable({ factory: function ScrollService_Factory() { return new ScrollService(i0.inject(i1.WINDOW), i0.inject(i2.DOCUMENT)); }, token: ScrollService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vdGhlbWUvIiwic291cmNlcyI6WyJzcmMvc2VydmljZXMvc2Nyb2xsL3Njcm9sbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7O0FBRzFDLE1BQU0sT0FBTyxhQUFhOzs7OztJQUN4QixZQUFvQyxHQUFRLEVBQTRCLEdBQVE7UUFBNUMsUUFBRyxHQUFILEdBQUcsQ0FBSztRQUE0QixRQUFHLEdBQUgsR0FBRyxDQUFLO0lBQUksQ0FBQzs7Ozs7O0lBTXJGLGlCQUFpQixDQUFDLE9BQWlCO1FBQ2pDLElBQUksT0FBTyxJQUFJLE9BQU8sS0FBSyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ25DLE9BQU8sQ0FBRSxPQUFPLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUUsQ0FBQztTQUNsRDthQUFNO1lBQ0wsT0FBTyxDQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFFLENBQUM7U0FDdkQ7SUFDSCxDQUFDOzs7Ozs7O0lBTUQsZ0JBQWdCLENBQUMsT0FBNEMsRUFBRSxRQUEwQjtRQUN2RixDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7Ozs7O0lBT0QsZUFBZSxDQUFDLE9BQXdCLEVBQUUsU0FBUyxHQUFHLENBQUM7UUFDckQsSUFBSSxDQUFDLE9BQU87WUFBRSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFFdEMsbUJBQUEsT0FBTyxFQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7O2NBRXBCLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRztRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFO1lBQ25CLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLG1CQUFBLE9BQU8sRUFBQyxDQUFDLHFCQUFxQixFQUFFLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxDQUFDO1lBRWhFLElBQUksQ0FBQyxDQUFDLFdBQVcsR0FBRyxFQUFFLEVBQUU7Z0JBQ3RCLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQy9CO1NBQ0Y7SUFDSCxDQUFDOzs7Ozs7SUFNRCxXQUFXLENBQUMsU0FBUyxHQUFHLENBQUM7UUFDdkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7WUFsREYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7Ozs0Q0FFbkIsTUFBTSxTQUFDLE1BQU07NENBQXFCLE1BQU0sU0FBQyxRQUFROzs7Ozs7OztJQUFsRCw0QkFBZ0M7Ozs7O0lBQUUsNEJBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBXSU5ET1cgfSBmcm9tICcuLi8uLi93aW5fdG9rZW5zJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBTY3JvbGxTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoQEluamVjdChXSU5ET1cpIHByaXZhdGUgd2luOiBhbnksIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnkpIHsgfVxuXG4gIC8qKlxuICAgKiDojrflj5bmu5rliqjmnaHkvY3nva5cbiAgICogQHBhcmFtIGVsZW1lbnQg5oyH5a6a5YWD57Sg77yM6buY6K6kIGB3aW5kb3dgXG4gICAqL1xuICBnZXRTY3JvbGxQb3NpdGlvbihlbGVtZW50PzogRWxlbWVudCk6IFsgbnVtYmVyLCBudW1iZXIgXSB7XG4gICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudCAhPT0gdGhpcy53aW4pIHtcbiAgICAgIHJldHVybiBbIGVsZW1lbnQuc2Nyb2xsTGVmdCwgZWxlbWVudC5zY3JvbGxUb3AgXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFsgdGhpcy53aW4ucGFnZVhPZmZzZXQsIHRoaXMud2luLnBhZ2VZT2Zmc2V0IF07XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOiuvue9rua7muWKqOadoeS9jee9rlxuICAgKiBAcGFyYW0gZWxlbWVudCDmjIflrprlhYPntKBcbiAgICovXG4gIHNjcm9sbFRvUG9zaXRpb24oZWxlbWVudDogRWxlbWVudCB8IFdpbmRvdyB8IG51bGwgfCB1bmRlZmluZWQsIHBvc2l0aW9uOiBbbnVtYmVyLCBudW1iZXJdKTogdm9pZCB7XG4gICAgKGVsZW1lbnQgfHwgdGhpcy53aW4pLnNjcm9sbFRvKHBvc2l0aW9uWzBdLCBwb3NpdGlvblsxXSk7XG4gIH1cblxuICAvKipcbiAgICog6K6+572u5rua5Yqo5p2h6Iez5oyH5a6a5YWD57SgXG4gICAqIEBwYXJhbSBlbGVtZW50IOaMh+WumuWFg+e0oO+8jOm7mOiupCBgZG9jdW1lbnQuYm9keWBcbiAgICogQHBhcmFtIHRvcE9mZnNldCDlgY/np7vlgLzvvIzpu5jorqQgYDBgXG4gICAqL1xuICBzY3JvbGxUb0VsZW1lbnQoZWxlbWVudD86IEVsZW1lbnQgfCBudWxsLCB0b3BPZmZzZXQgPSAwKSB7XG4gICAgaWYgKCFlbGVtZW50KSBlbGVtZW50ID0gdGhpcy5kb2MuYm9keTtcblxuICAgIGVsZW1lbnQhLnNjcm9sbEludG9WaWV3KCk7XG5cbiAgICBjb25zdCB3ID0gdGhpcy53aW47XG4gICAgaWYgKHcgJiYgdy5zY3JvbGxCeSkge1xuICAgICAgdy5zY3JvbGxCeSgwLCBlbGVtZW50IS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgLSB0b3BPZmZzZXQpO1xuXG4gICAgICBpZiAody5wYWdlWU9mZnNldCA8IDIwKSB7XG4gICAgICAgIHcuc2Nyb2xsQnkoMCwgLXcucGFnZVlPZmZzZXQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDmu5rliqjoh7Ppobbpg6hcbiAgICogQHBhcmFtIHRvcE9mZnNldCDlgY/np7vlgLzvvIzpu5jorqQgYDBgXG4gICAqL1xuICBzY3JvbGxUb1RvcCh0b3BPZmZzZXQgPSAwKSB7XG4gICAgdGhpcy5zY3JvbGxUb0VsZW1lbnQodGhpcy5kb2MuYm9keSwgdG9wT2Zmc2V0KTtcbiAgfVxufVxuIl19