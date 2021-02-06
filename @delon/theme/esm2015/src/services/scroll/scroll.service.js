import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/cdk/platform";
/**
 * @deprecated Will be removed in 12.0.0, Pls used `import { ScrollService } from '{AT}delon/util/browser';` instead
 */
export class ScrollService {
    constructor(_doc, platform) {
        this._doc = _doc;
        this.platform = platform;
    }
    _getDoc() {
        return this._doc || document;
    }
    _getWin() {
        const doc = this._getDoc();
        return doc.defaultView || window;
    }
    /**
     * 获取滚动条位置
     * @param element 指定元素，默认 `window`
     */
    getScrollPosition(element) {
        if (!this.platform.isBrowser) {
            return [0, 0];
        }
        const win = this._getWin();
        if (element && element !== win) {
            return [element.scrollLeft, element.scrollTop];
        }
        else {
            return [win.pageXOffset, win.pageYOffset];
        }
    }
    /**
     * 设置滚动条位置
     * @param element 指定元素
     */
    scrollToPosition(element, position) {
        if (!this.platform.isBrowser) {
            return;
        }
        (element || this._getWin()).scrollTo(position[0], position[1]);
    }
    /**
     * 设置滚动条至指定元素
     * @param element 指定元素，默认 `document.body`
     * @param topOffset 偏移值，默认 `0`
     */
    scrollToElement(element, topOffset = 0) {
        if (!this.platform.isBrowser) {
            return;
        }
        if (!element) {
            element = this._getDoc().body;
        }
        element.scrollIntoView();
        const win = this._getWin();
        if (win && win.scrollBy) {
            win.scrollBy(0, element.getBoundingClientRect().top - topOffset);
            if (win.pageYOffset < 20) {
                win.scrollBy(0, -win.pageYOffset);
            }
        }
    }
    /**
     * 滚动至顶部
     * @param topOffset 偏移值，默认 `0`
     */
    scrollToTop(topOffset = 0) {
        if (!this.platform.isBrowser) {
            return;
        }
        this.scrollToElement(this._getDoc().body, topOffset);
    }
}
/** @nocollapse */ ScrollService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ScrollService_Factory() { return new ScrollService(i0.ɵɵinject(i1.DOCUMENT), i0.ɵɵinject(i2.Platform)); }, token: ScrollService, providedIn: "root" });
ScrollService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ScrollService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Platform }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS9zcmMvc2VydmljZXMvc2Nyb2xsL3Njcm9sbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFFbkQ7O0dBRUc7QUFFSCxNQUFNLE9BQU8sYUFBYTtJQVV4QixZQUFzQyxJQUFTLEVBQVUsUUFBa0I7UUFBckMsU0FBSSxHQUFKLElBQUksQ0FBSztRQUFVLGFBQVEsR0FBUixRQUFRLENBQVU7SUFBRyxDQUFDO0lBVHZFLE9BQU87UUFDYixPQUFPLElBQUksQ0FBQyxJQUFJLElBQUksUUFBUSxDQUFDO0lBQy9CLENBQUM7SUFFTyxPQUFPO1FBQ2IsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzNCLE9BQU8sR0FBRyxDQUFDLFdBQVcsSUFBSSxNQUFNLENBQUM7SUFDbkMsQ0FBQztJQUlEOzs7T0FHRztJQUNILGlCQUFpQixDQUFDLE9BQTBCO1FBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUM1QixPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ2Y7UUFFRCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDM0IsSUFBSSxPQUFPLElBQUksT0FBTyxLQUFLLEdBQUcsRUFBRTtZQUM5QixPQUFPLENBQUUsT0FBbUIsQ0FBQyxVQUFVLEVBQUcsT0FBbUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUMxRTthQUFNO1lBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzNDO0lBQ0gsQ0FBQztJQUVEOzs7T0FHRztJQUNILGdCQUFnQixDQUFDLE9BQTRDLEVBQUUsUUFBMEI7UUFDdkYsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFO1lBQzVCLE9BQU87U0FDUjtRQUNELENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxlQUFlLENBQUMsT0FBd0IsRUFBRSxZQUFvQixDQUFDO1FBQzdELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUM1QixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ1osT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUM7U0FDL0I7UUFFRCxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFekIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzNCLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxRQUFRLEVBQUU7WUFDdkIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsT0FBUSxDQUFDLHFCQUFxQixFQUFFLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxDQUFDO1lBRWxFLElBQUksR0FBRyxDQUFDLFdBQVcsR0FBRyxFQUFFLEVBQUU7Z0JBQ3hCLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ25DO1NBQ0Y7SUFDSCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsV0FBVyxDQUFDLFlBQW9CLENBQUM7UUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFO1lBQzVCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7O1lBM0VGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7NENBV25CLE1BQU0sU0FBQyxRQUFRO1lBbEJyQixRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgV2lsbCBiZSByZW1vdmVkIGluIDEyLjAuMCwgUGxzIHVzZWQgYGltcG9ydCB7IFNjcm9sbFNlcnZpY2UgfSBmcm9tICd7QVR9ZGVsb24vdXRpbC9icm93c2VyJztgIGluc3RlYWRcbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBTY3JvbGxTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfZ2V0RG9jKCk6IERvY3VtZW50IHtcbiAgICByZXR1cm4gdGhpcy5fZG9jIHx8IGRvY3VtZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0V2luKCk6IFdpbmRvdyB7XG4gICAgY29uc3QgZG9jID0gdGhpcy5fZ2V0RG9jKCk7XG4gICAgcmV0dXJuIGRvYy5kZWZhdWx0VmlldyB8fCB3aW5kb3c7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2M6IGFueSwgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0pIHt9XG5cbiAgLyoqXG4gICAqIOiOt+WPlua7muWKqOadoeS9jee9rlxuICAgKiBAcGFyYW0gZWxlbWVudCDmjIflrprlhYPntKDvvIzpu5jorqQgYHdpbmRvd2BcbiAgICovXG4gIGdldFNjcm9sbFBvc2l0aW9uKGVsZW1lbnQ/OiBFbGVtZW50IHwgV2luZG93KTogW251bWJlciwgbnVtYmVyXSB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuIFswLCAwXTtcbiAgICB9XG5cbiAgICBjb25zdCB3aW4gPSB0aGlzLl9nZXRXaW4oKTtcbiAgICBpZiAoZWxlbWVudCAmJiBlbGVtZW50ICE9PSB3aW4pIHtcbiAgICAgIHJldHVybiBbKGVsZW1lbnQgYXMgRWxlbWVudCkuc2Nyb2xsTGVmdCwgKGVsZW1lbnQgYXMgRWxlbWVudCkuc2Nyb2xsVG9wXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFt3aW4ucGFnZVhPZmZzZXQsIHdpbi5wYWdlWU9mZnNldF07XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOiuvue9rua7muWKqOadoeS9jee9rlxuICAgKiBAcGFyYW0gZWxlbWVudCDmjIflrprlhYPntKBcbiAgICovXG4gIHNjcm9sbFRvUG9zaXRpb24oZWxlbWVudDogRWxlbWVudCB8IFdpbmRvdyB8IG51bGwgfCB1bmRlZmluZWQsIHBvc2l0aW9uOiBbbnVtYmVyLCBudW1iZXJdKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAoZWxlbWVudCB8fCB0aGlzLl9nZXRXaW4oKSkuc2Nyb2xsVG8ocG9zaXRpb25bMF0sIHBvc2l0aW9uWzFdKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDorr7nva7mu5rliqjmnaHoh7PmjIflrprlhYPntKBcbiAgICogQHBhcmFtIGVsZW1lbnQg5oyH5a6a5YWD57Sg77yM6buY6K6kIGBkb2N1bWVudC5ib2R5YFxuICAgKiBAcGFyYW0gdG9wT2Zmc2V0IOWBj+enu+WAvO+8jOm7mOiupCBgMGBcbiAgICovXG4gIHNjcm9sbFRvRWxlbWVudChlbGVtZW50PzogRWxlbWVudCB8IG51bGwsIHRvcE9mZnNldDogbnVtYmVyID0gMCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICBlbGVtZW50ID0gdGhpcy5fZ2V0RG9jKCkuYm9keTtcbiAgICB9XG5cbiAgICBlbGVtZW50LnNjcm9sbEludG9WaWV3KCk7XG5cbiAgICBjb25zdCB3aW4gPSB0aGlzLl9nZXRXaW4oKTtcbiAgICBpZiAod2luICYmIHdpbi5zY3JvbGxCeSkge1xuICAgICAgd2luLnNjcm9sbEJ5KDAsIGVsZW1lbnQhLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtIHRvcE9mZnNldCk7XG5cbiAgICAgIGlmICh3aW4ucGFnZVlPZmZzZXQgPCAyMCkge1xuICAgICAgICB3aW4uc2Nyb2xsQnkoMCwgLXdpbi5wYWdlWU9mZnNldCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOa7muWKqOiHs+mhtumDqFxuICAgKiBAcGFyYW0gdG9wT2Zmc2V0IOWBj+enu+WAvO+8jOm7mOiupCBgMGBcbiAgICovXG4gIHNjcm9sbFRvVG9wKHRvcE9mZnNldDogbnVtYmVyID0gMCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zY3JvbGxUb0VsZW1lbnQodGhpcy5fZ2V0RG9jKCkuYm9keSwgdG9wT2Zmc2V0KTtcbiAgfVxufVxuIl19