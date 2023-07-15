import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/platform";
class ScrollService {
    _getDoc() {
        return this._doc || document;
    }
    _getWin() {
        const doc = this._getDoc();
        return doc.defaultView || window;
    }
    constructor(_doc, platform) {
        this._doc = _doc;
        this.platform = platform;
    }
    /**
     * 获取滚动条位置
     *
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
            return [win.scrollX, win.scrollY];
        }
    }
    /**
     * 设置滚动条位置
     *
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
     *
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
            if (win.scrollY < 20) {
                win.scrollBy(0, -win.scrollY);
            }
        }
    }
    /**
     * 滚动至顶部
     *
     * @param topOffset 偏移值，默认 `0`
     */
    scrollToTop(topOffset = 0) {
        if (!this.platform.isBrowser) {
            return;
        }
        this.scrollToElement(this._getDoc().body, topOffset);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: ScrollService, deps: [{ token: DOCUMENT }, { token: i1.Platform }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: ScrollService, providedIn: 'root' }); }
}
export { ScrollService };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: ScrollService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: i1.Platform }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy91dGlsL2Jyb3dzZXIvc2Nyb2xsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFJbkQsTUFDYSxhQUFhO0lBQ2hCLE9BQU87UUFDYixPQUFPLElBQUksQ0FBQyxJQUFJLElBQUksUUFBUSxDQUFDO0lBQy9CLENBQUM7SUFFTyxPQUFPO1FBQ2IsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzNCLE9BQU8sR0FBRyxDQUFDLFdBQVcsSUFBSSxNQUFNLENBQUM7SUFDbkMsQ0FBQztJQUVELFlBQXNDLElBQWUsRUFBVSxRQUFrQjtRQUEzQyxTQUFJLEdBQUosSUFBSSxDQUFXO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUFHLENBQUM7SUFFckY7Ozs7T0FJRztJQUNILGlCQUFpQixDQUFDLE9BQTBCO1FBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUM1QixPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ2Y7UUFFRCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDM0IsSUFBSSxPQUFPLElBQUksT0FBTyxLQUFLLEdBQUcsRUFBRTtZQUM5QixPQUFPLENBQUUsT0FBbUIsQ0FBQyxVQUFVLEVBQUcsT0FBbUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUMxRTthQUFNO1lBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ25DO0lBQ0gsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxnQkFBZ0IsQ0FBQyxPQUE0QyxFQUFFLFFBQTBCO1FBQ3ZGLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUM1QixPQUFPO1NBQ1I7UUFDRCxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILGVBQWUsQ0FBQyxPQUF3QixFQUFFLFlBQW9CLENBQUM7UUFDN0QsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFO1lBQzVCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDWixPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQztTQUMvQjtRQUVELE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUV6QixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDM0IsSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLFFBQVEsRUFBRTtZQUN2QixHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxPQUFRLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDLENBQUM7WUFFbEUsSUFBSSxHQUFHLENBQUMsT0FBTyxHQUFHLEVBQUUsRUFBRTtnQkFDcEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDL0I7U0FDRjtJQUNILENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsV0FBVyxDQUFDLFlBQW9CLENBQUM7UUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFO1lBQzVCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztJQUN2RCxDQUFDOzhHQTlFVSxhQUFhLGtCQVVKLFFBQVE7a0hBVmpCLGFBQWEsY0FEQSxNQUFNOztTQUNuQixhQUFhOzJGQUFiLGFBQWE7a0JBRHpCLFVBQVU7bUJBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzswQkFXbkIsTUFBTTsyQkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBTY3JvbGxTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfZ2V0RG9jKCk6IERvY3VtZW50IHtcbiAgICByZXR1cm4gdGhpcy5fZG9jIHx8IGRvY3VtZW50O1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0V2luKCk6IFdpbmRvdyB7XG4gICAgY29uc3QgZG9jID0gdGhpcy5fZ2V0RG9jKCk7XG4gICAgcmV0dXJuIGRvYy5kZWZhdWx0VmlldyB8fCB3aW5kb3c7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2M6IE56U2FmZUFueSwgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0pIHt9XG5cbiAgLyoqXG4gICAqIOiOt+WPlua7muWKqOadoeS9jee9rlxuICAgKlxuICAgKiBAcGFyYW0gZWxlbWVudCDmjIflrprlhYPntKDvvIzpu5jorqQgYHdpbmRvd2BcbiAgICovXG4gIGdldFNjcm9sbFBvc2l0aW9uKGVsZW1lbnQ/OiBFbGVtZW50IHwgV2luZG93KTogW251bWJlciwgbnVtYmVyXSB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuIFswLCAwXTtcbiAgICB9XG5cbiAgICBjb25zdCB3aW4gPSB0aGlzLl9nZXRXaW4oKTtcbiAgICBpZiAoZWxlbWVudCAmJiBlbGVtZW50ICE9PSB3aW4pIHtcbiAgICAgIHJldHVybiBbKGVsZW1lbnQgYXMgRWxlbWVudCkuc2Nyb2xsTGVmdCwgKGVsZW1lbnQgYXMgRWxlbWVudCkuc2Nyb2xsVG9wXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFt3aW4uc2Nyb2xsWCwgd2luLnNjcm9sbFldO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDorr7nva7mu5rliqjmnaHkvY3nva5cbiAgICpcbiAgICogQHBhcmFtIGVsZW1lbnQg5oyH5a6a5YWD57SgXG4gICAqL1xuICBzY3JvbGxUb1Bvc2l0aW9uKGVsZW1lbnQ6IEVsZW1lbnQgfCBXaW5kb3cgfCBudWxsIHwgdW5kZWZpbmVkLCBwb3NpdGlvbjogW251bWJlciwgbnVtYmVyXSk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgKGVsZW1lbnQgfHwgdGhpcy5fZ2V0V2luKCkpLnNjcm9sbFRvKHBvc2l0aW9uWzBdLCBwb3NpdGlvblsxXSk7XG4gIH1cblxuICAvKipcbiAgICog6K6+572u5rua5Yqo5p2h6Iez5oyH5a6a5YWD57SgXG4gICAqXG4gICAqIEBwYXJhbSBlbGVtZW50IOaMh+WumuWFg+e0oO+8jOm7mOiupCBgZG9jdW1lbnQuYm9keWBcbiAgICogQHBhcmFtIHRvcE9mZnNldCDlgY/np7vlgLzvvIzpu5jorqQgYDBgXG4gICAqL1xuICBzY3JvbGxUb0VsZW1lbnQoZWxlbWVudD86IEVsZW1lbnQgfCBudWxsLCB0b3BPZmZzZXQ6IG51bWJlciA9IDApOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghZWxlbWVudCkge1xuICAgICAgZWxlbWVudCA9IHRoaXMuX2dldERvYygpLmJvZHk7XG4gICAgfVxuXG4gICAgZWxlbWVudC5zY3JvbGxJbnRvVmlldygpO1xuXG4gICAgY29uc3Qgd2luID0gdGhpcy5fZ2V0V2luKCk7XG4gICAgaWYgKHdpbiAmJiB3aW4uc2Nyb2xsQnkpIHtcbiAgICAgIHdpbi5zY3JvbGxCeSgwLCBlbGVtZW50IS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgLSB0b3BPZmZzZXQpO1xuXG4gICAgICBpZiAod2luLnNjcm9sbFkgPCAyMCkge1xuICAgICAgICB3aW4uc2Nyb2xsQnkoMCwgLXdpbi5zY3JvbGxZKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog5rua5Yqo6Iez6aG26YOoXG4gICAqXG4gICAqIEBwYXJhbSB0b3BPZmZzZXQg5YGP56e75YC877yM6buY6K6kIGAwYFxuICAgKi9cbiAgc2Nyb2xsVG9Ub3AodG9wT2Zmc2V0OiBudW1iZXIgPSAwKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNjcm9sbFRvRWxlbWVudCh0aGlzLl9nZXREb2MoKS5ib2R5LCB0b3BPZmZzZXQpO1xuICB9XG59XG4iXX0=