import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/platform";
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
/** @nocollapse */ ScrollService.ɵfac = function ScrollService_Factory(t) { return new (t || ScrollService)(i0.ɵɵinject(DOCUMENT), i0.ɵɵinject(i1.Platform)); };
/** @nocollapse */ ScrollService.ɵprov = i0.ɵɵdefineInjectable({ token: ScrollService, factory: ScrollService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ScrollService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: i1.Platform }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy91dGlsL2Jyb3dzZXIvc2Nyb2xsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBR25ELE1BQU0sT0FBTyxhQUFhO0lBVXhCLFlBQXNDLElBQVMsRUFBVSxRQUFrQjtRQUFyQyxTQUFJLEdBQUosSUFBSSxDQUFLO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUFHLENBQUM7SUFUdkUsT0FBTztRQUNiLE9BQU8sSUFBSSxDQUFDLElBQUksSUFBSSxRQUFRLENBQUM7SUFDL0IsQ0FBQztJQUVPLE9BQU87UUFDYixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDM0IsT0FBTyxHQUFHLENBQUMsV0FBVyxJQUFJLE1BQU0sQ0FBQztJQUNuQyxDQUFDO0lBSUQ7OztPQUdHO0lBQ0gsaUJBQWlCLENBQUMsT0FBMEI7UUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFO1lBQzVCLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDZjtRQUVELE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMzQixJQUFJLE9BQU8sSUFBSSxPQUFPLEtBQUssR0FBRyxFQUFFO1lBQzlCLE9BQU8sQ0FBRSxPQUFtQixDQUFDLFVBQVUsRUFBRyxPQUFtQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzFFO2FBQU07WUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDM0M7SUFDSCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZ0JBQWdCLENBQUMsT0FBNEMsRUFBRSxRQUEwQjtRQUN2RixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDNUIsT0FBTztTQUNSO1FBQ0QsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGVBQWUsQ0FBQyxPQUF3QixFQUFFLFlBQW9CLENBQUM7UUFDN0QsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFO1lBQzVCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDWixPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQztTQUMvQjtRQUVELE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUV6QixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDM0IsSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLFFBQVEsRUFBRTtZQUN2QixHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxPQUFRLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDLENBQUM7WUFFbEUsSUFBSSxHQUFHLENBQUMsV0FBVyxHQUFHLEVBQUUsRUFBRTtnQkFDeEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDbkM7U0FDRjtJQUNILENBQUM7SUFFRDs7O09BR0c7SUFDSCxXQUFXLENBQUMsWUFBb0IsQ0FBQztRQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDNUIsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7OzZGQTFFVSxhQUFhLGNBVUosUUFBUTt3RUFWakIsYUFBYSxXQUFiLGFBQWEsbUJBREEsTUFBTTt1RkFDbkIsYUFBYTtjQUR6QixVQUFVO2VBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOztzQkFXbkIsTUFBTTt1QkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgU2Nyb2xsU2VydmljZSB7XG4gIHByaXZhdGUgX2dldERvYygpOiBEb2N1bWVudCB7XG4gICAgcmV0dXJuIHRoaXMuX2RvYyB8fCBkb2N1bWVudDtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFdpbigpOiBXaW5kb3cge1xuICAgIGNvbnN0IGRvYyA9IHRoaXMuX2dldERvYygpO1xuICAgIHJldHVybiBkb2MuZGVmYXVsdFZpZXcgfHwgd2luZG93O1xuICB9XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBfZG9jOiBhbnksIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtKSB7fVxuXG4gIC8qKlxuICAgKiDojrflj5bmu5rliqjmnaHkvY3nva5cbiAgICogQHBhcmFtIGVsZW1lbnQg5oyH5a6a5YWD57Sg77yM6buY6K6kIGB3aW5kb3dgXG4gICAqL1xuICBnZXRTY3JvbGxQb3NpdGlvbihlbGVtZW50PzogRWxlbWVudCB8IFdpbmRvdyk6IFtudW1iZXIsIG51bWJlcl0ge1xuICAgIGlmICghdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybiBbMCwgMF07XG4gICAgfVxuXG4gICAgY29uc3Qgd2luID0gdGhpcy5fZ2V0V2luKCk7XG4gICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudCAhPT0gd2luKSB7XG4gICAgICByZXR1cm4gWyhlbGVtZW50IGFzIEVsZW1lbnQpLnNjcm9sbExlZnQsIChlbGVtZW50IGFzIEVsZW1lbnQpLnNjcm9sbFRvcF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBbd2luLnBhZ2VYT2Zmc2V0LCB3aW4ucGFnZVlPZmZzZXRdO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDorr7nva7mu5rliqjmnaHkvY3nva5cbiAgICogQHBhcmFtIGVsZW1lbnQg5oyH5a6a5YWD57SgXG4gICAqL1xuICBzY3JvbGxUb1Bvc2l0aW9uKGVsZW1lbnQ6IEVsZW1lbnQgfCBXaW5kb3cgfCBudWxsIHwgdW5kZWZpbmVkLCBwb3NpdGlvbjogW251bWJlciwgbnVtYmVyXSk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgKGVsZW1lbnQgfHwgdGhpcy5fZ2V0V2luKCkpLnNjcm9sbFRvKHBvc2l0aW9uWzBdLCBwb3NpdGlvblsxXSk7XG4gIH1cblxuICAvKipcbiAgICog6K6+572u5rua5Yqo5p2h6Iez5oyH5a6a5YWD57SgXG4gICAqIEBwYXJhbSBlbGVtZW50IOaMh+WumuWFg+e0oO+8jOm7mOiupCBgZG9jdW1lbnQuYm9keWBcbiAgICogQHBhcmFtIHRvcE9mZnNldCDlgY/np7vlgLzvvIzpu5jorqQgYDBgXG4gICAqL1xuICBzY3JvbGxUb0VsZW1lbnQoZWxlbWVudD86IEVsZW1lbnQgfCBudWxsLCB0b3BPZmZzZXQ6IG51bWJlciA9IDApOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghZWxlbWVudCkge1xuICAgICAgZWxlbWVudCA9IHRoaXMuX2dldERvYygpLmJvZHk7XG4gICAgfVxuXG4gICAgZWxlbWVudC5zY3JvbGxJbnRvVmlldygpO1xuXG4gICAgY29uc3Qgd2luID0gdGhpcy5fZ2V0V2luKCk7XG4gICAgaWYgKHdpbiAmJiB3aW4uc2Nyb2xsQnkpIHtcbiAgICAgIHdpbi5zY3JvbGxCeSgwLCBlbGVtZW50IS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgLSB0b3BPZmZzZXQpO1xuXG4gICAgICBpZiAod2luLnBhZ2VZT2Zmc2V0IDwgMjApIHtcbiAgICAgICAgd2luLnNjcm9sbEJ5KDAsIC13aW4ucGFnZVlPZmZzZXQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDmu5rliqjoh7Ppobbpg6hcbiAgICogQHBhcmFtIHRvcE9mZnNldCDlgY/np7vlgLzvvIzpu5jorqQgYDBgXG4gICAqL1xuICBzY3JvbGxUb1RvcCh0b3BPZmZzZXQ6IG51bWJlciA9IDApOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2Nyb2xsVG9FbGVtZW50KHRoaXMuX2dldERvYygpLmJvZHksIHRvcE9mZnNldCk7XG4gIH1cbn1cbiJdfQ==