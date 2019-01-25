/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Injector, Optional } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ALAIN_I18N_TOKEN } from '../i18n/i18n';
import { MenuService } from '../menu/menu.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "../menu/menu.service";
import * as i3 from "../i18n/i18n";
import * as i4 from "@angular/common";
export class TitleService {
    /**
     * @param {?} injector
     * @param {?} title
     * @param {?} menuSrv
     * @param {?} i18nSrv
     * @param {?} doc
     */
    constructor(injector, title, menuSrv, i18nSrv, doc) {
        this.injector = injector;
        this.title = title;
        this.menuSrv = menuSrv;
        this.i18nSrv = i18nSrv;
        this.doc = doc;
        this._prefix = '';
        this._suffix = '';
        this._separator = ' - ';
        this._reverse = false;
        /**
         * 设置默认标题名
         */
        this.default = `Not Page Name`;
        this.i18n$ = this.i18nSrv.change
            .pipe(filter(() => !!this.i18n$))
            .subscribe(() => this.setTitle());
    }
    /**
     * 设置分隔符
     * @param {?} value
     * @return {?}
     */
    set separator(value) {
        this._separator = value;
    }
    /**
     * 设置前缀
     * @param {?} value
     * @return {?}
     */
    set prefix(value) {
        this._prefix = value;
    }
    /**
     * 设置后缀
     * @param {?} value
     * @return {?}
     */
    set suffix(value) {
        this._suffix = value;
    }
    /**
     * 设置是否反转
     * @param {?} value
     * @return {?}
     */
    set reverse(value) {
        this._reverse = value;
    }
    /**
     * @return {?}
     */
    getByElement() {
        /** @type {?} */
        const el = this.doc.querySelector('.alain-default__content-title h1') ||
            this.doc.querySelector('.page-header__title');
        if (el) {
            return el.firstChild.textContent.trim();
        }
        return '';
    }
    /**
     * @return {?}
     */
    getByRoute() {
        /** @type {?} */
        let next = this.injector.get(ActivatedRoute);
        while (next.firstChild)
            next = next.firstChild;
        /** @type {?} */
        const data = (next.snapshot && next.snapshot.data) || {};
        if (data.titleI18n && this.i18nSrv)
            data.title = this.i18nSrv.fanyi(data.titleI18n);
        return data.title;
    }
    /**
     * @return {?}
     */
    getByMenu() {
        /** @type {?} */
        const menus = this.menuSrv.getPathByUrl(this.injector.get(Router).url);
        if (!menus || menus.length <= 0)
            return '';
        /** @type {?} */
        const item = menus[menus.length - 1];
        /** @type {?} */
        let title;
        if (item.i18n && this.i18nSrv)
            title = this.i18nSrv.fanyi(item.i18n);
        return title || item.text;
    }
    /**
     * 设置标题
     * @param {?=} title
     * @return {?}
     */
    setTitle(title) {
        if (!title) {
            title = this.getByRoute() || this.getByMenu() || this.getByElement() || this.default;
        }
        if (title && !Array.isArray(title)) {
            title = [title];
        }
        /** @type {?} */
        let newTitles = [];
        if (this._prefix) {
            newTitles.push(this._prefix);
        }
        newTitles.push(...((/** @type {?} */ (title))));
        if (this._suffix) {
            newTitles.push(this._suffix);
        }
        if (this._reverse) {
            newTitles = newTitles.reverse();
        }
        this.title.setTitle(newTitles.join(this._separator));
    }
    /**
     * 设置国际化标题
     * @param {?} key
     * @param {?=} params
     * @return {?}
     */
    setTitleByI18n(key, params) {
        this.setTitle(this.i18nSrv.fanyi(key, params));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.i18n$.unsubscribe();
    }
}
TitleService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
TitleService.ctorParameters = () => [
    { type: Injector },
    { type: Title },
    { type: MenuService },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [ALAIN_I18N_TOKEN,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
/** @nocollapse */ TitleService.ngInjectableDef = i0.defineInjectable({ factory: function TitleService_Factory() { return new TitleService(i0.inject(i0.INJECTOR), i0.inject(i1.Title), i0.inject(i2.MenuService), i0.inject(i3.ALAIN_I18N_TOKEN, 8), i0.inject(i4.DOCUMENT)); }, token: TitleService, providedIn: "root" });
if (false) {
    /** @type {?} */
    TitleService.prototype._prefix;
    /** @type {?} */
    TitleService.prototype._suffix;
    /** @type {?} */
    TitleService.prototype._separator;
    /** @type {?} */
    TitleService.prototype._reverse;
    /** @type {?} */
    TitleService.prototype.i18n$;
    /**
     * 设置默认标题名
     * @type {?}
     */
    TitleService.prototype.default;
    /** @type {?} */
    TitleService.prototype.injector;
    /** @type {?} */
    TitleService.prototype.title;
    /** @type {?} */
    TitleService.prototype.menuSrv;
    /** @type {?} */
    TitleService.prototype.i18nSrv;
    /** @type {?} */
    TitleService.prototype.doc;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGl0bGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi90aGVtZS8iLCJzb3VyY2VzIjpbInNyYy9zZXJ2aWNlcy90aXRsZS90aXRsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFhLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV6RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEMsT0FBTyxFQUFvQixnQkFBZ0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNsRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7OztBQUduRCxNQUFNLE9BQU8sWUFBWTs7Ozs7Ozs7SUFPdkIsWUFDVSxRQUFrQixFQUNsQixLQUFZLEVBQ1osT0FBb0IsRUFHcEIsT0FBeUIsRUFFUCxHQUFRO1FBUDFCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsVUFBSyxHQUFMLEtBQUssQ0FBTztRQUNaLFlBQU8sR0FBUCxPQUFPLENBQWE7UUFHcEIsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7UUFFUCxRQUFHLEdBQUgsR0FBRyxDQUFLO1FBZDVCLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFDYixZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixhQUFRLEdBQUcsS0FBSyxDQUFDOzs7O1FBdUN6QixZQUFPLEdBQUcsZUFBZSxDQUFDO1FBMUJ4QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTTthQUM3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ImltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0b3IsIE9uRGVzdHJveSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRpdGxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBBbGFpbkkxOE5TZXJ2aWNlLCBBTEFJTl9JMThOX1RPS0VOIH0gZnJvbSAnLi4vaTE4bi9pMThuJztcbmltcG9ydCB7IE1lbnVTZXJ2aWNlIH0gZnJvbSAnLi4vbWVudS9tZW51LnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFRpdGxlU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX3ByZWZpeCA9ICcnO1xuICBwcml2YXRlIF9zdWZmaXggPSAnJztcbiAgcHJpdmF0ZSBfc2VwYXJhdG9yID0gJyAtICc7XG4gIHByaXZhdGUgX3JldmVyc2UgPSBmYWxzZTtcbiAgcHJpdmF0ZSBpMThuJDogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgdGl0bGU6IFRpdGxlLFxuICAgIHByaXZhdGUgbWVudVNydjogTWVudVNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KEFMQUlOX0kxOE5fVE9LRU4pXG4gICAgcHJpdmF0ZSBpMThuU3J2OiBBbGFpbkkxOE5TZXJ2aWNlLFxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogYW55LFxuICApIHtcbiAgICB0aGlzLmkxOG4kID0gdGhpcy5pMThuU3J2LmNoYW5nZVxuICAgICAgLnBpcGUoZmlsdGVyKCgpID0+ICEhdGhpcy5pMThuJCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuc2V0VGl0bGUoKSk7XG4gIH1cblxuICAvKiog6K6+572u5YiG6ZqU56ymICovXG4gIHNldCBzZXBhcmF0b3IodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NlcGFyYXRvciA9IHZhbHVlO1xuICB9XG5cbiAgLyoqIOiuvue9ruWJjee8gCAqL1xuICBzZXQgcHJlZml4KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wcmVmaXggPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKiDorr7nva7lkI7nvIAgKi9cbiAgc2V0IHN1ZmZpeCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3VmZml4ID0gdmFsdWU7XG4gIH1cblxuICAvKiog6K6+572u5piv5ZCm5Y+N6L2sICovXG4gIHNldCByZXZlcnNlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcmV2ZXJzZSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqIOiuvue9rum7mOiupOagh+mimOWQjSAqL1xuICBkZWZhdWx0ID0gYE5vdCBQYWdlIE5hbWVgO1xuXG4gIHByaXZhdGUgZ2V0QnlFbGVtZW50KCk6IHN0cmluZyB7XG4gICAgY29uc3QgZWwgPVxuICAgICAgdGhpcy5kb2MucXVlcnlTZWxlY3RvcignLmFsYWluLWRlZmF1bHRfX2NvbnRlbnQtdGl0bGUgaDEnKSB8fFxuICAgICAgdGhpcy5kb2MucXVlcnlTZWxlY3RvcignLnBhZ2UtaGVhZGVyX190aXRsZScpO1xuICAgIGlmIChlbCkge1xuICAgICAgcmV0dXJuIGVsLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQudHJpbSgpO1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBwcml2YXRlIGdldEJ5Um91dGUoKTogc3RyaW5nIHtcbiAgICBsZXQgbmV4dCA9IHRoaXMuaW5qZWN0b3IuZ2V0KEFjdGl2YXRlZFJvdXRlKTtcbiAgICB3aGlsZSAobmV4dC5maXJzdENoaWxkKSBuZXh0ID0gbmV4dC5maXJzdENoaWxkO1xuICAgIGNvbnN0IGRhdGEgPSAobmV4dC5zbmFwc2hvdCAmJiBuZXh0LnNuYXBzaG90LmRhdGEpIHx8IHt9O1xuICAgIGlmIChkYXRhLnRpdGxlSTE4biAmJiB0aGlzLmkxOG5TcnYpIGRhdGEudGl0bGUgPSB0aGlzLmkxOG5TcnYuZmFueWkoZGF0YS50aXRsZUkxOG4pO1xuICAgIHJldHVybiBkYXRhLnRpdGxlO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRCeU1lbnUoKTogc3RyaW5nIHtcbiAgICBjb25zdCBtZW51cyA9IHRoaXMubWVudVNydi5nZXRQYXRoQnlVcmwodGhpcy5pbmplY3Rvci5nZXQoUm91dGVyKS51cmwpO1xuICAgIGlmICghbWVudXMgfHwgbWVudXMubGVuZ3RoIDw9IDApIHJldHVybiAnJztcblxuICAgIGNvbnN0IGl0ZW0gPSBtZW51c1ttZW51cy5sZW5ndGggLSAxXTtcbiAgICBsZXQgdGl0bGU7XG4gICAgaWYgKGl0ZW0uaTE4biAmJiB0aGlzLmkxOG5TcnYpIHRpdGxlID0gdGhpcy5pMThuU3J2LmZhbnlpKGl0ZW0uaTE4bik7XG4gICAgcmV0dXJuIHRpdGxlIHx8IGl0ZW0udGV4dDtcbiAgfVxuXG4gIC8qKlxuICAgKiDorr7nva7moIfpophcbiAgICovXG4gIHNldFRpdGxlKHRpdGxlPzogc3RyaW5nIHwgc3RyaW5nW10pIHtcbiAgICBpZiAoIXRpdGxlKSB7XG4gICAgICB0aXRsZSA9IHRoaXMuZ2V0QnlSb3V0ZSgpIHx8IHRoaXMuZ2V0QnlNZW51KCkgfHwgdGhpcy5nZXRCeUVsZW1lbnQoKSB8fCB0aGlzLmRlZmF1bHQ7XG4gICAgfVxuICAgIGlmICh0aXRsZSAmJiAhQXJyYXkuaXNBcnJheSh0aXRsZSkpIHtcbiAgICAgIHRpdGxlID0gW3RpdGxlXTtcbiAgICB9XG5cbiAgICBsZXQgbmV3VGl0bGVzID0gW107XG4gICAgaWYgKHRoaXMuX3ByZWZpeCkge1xuICAgICAgbmV3VGl0bGVzLnB1c2godGhpcy5fcHJlZml4KTtcbiAgICB9XG4gICAgbmV3VGl0bGVzLnB1c2goLi4uKHRpdGxlIGFzIHN0cmluZ1tdKSk7XG4gICAgaWYgKHRoaXMuX3N1ZmZpeCkge1xuICAgICAgbmV3VGl0bGVzLnB1c2godGhpcy5fc3VmZml4KTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3JldmVyc2UpIHtcbiAgICAgIG5ld1RpdGxlcyA9IG5ld1RpdGxlcy5yZXZlcnNlKCk7XG4gICAgfVxuICAgIHRoaXMudGl0bGUuc2V0VGl0bGUobmV3VGl0bGVzLmpvaW4odGhpcy5fc2VwYXJhdG9yKSk7XG4gIH1cblxuICAvKipcbiAgICog6K6+572u5Zu96ZmF5YyW5qCH6aKYXG4gICAqL1xuICBzZXRUaXRsZUJ5STE4bihrZXk6IHN0cmluZywgcGFyYW1zPzoge30pIHtcbiAgICB0aGlzLnNldFRpdGxlKHRoaXMuaTE4blNydi5mYW55aShrZXksIHBhcmFtcykpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5pMThuJC51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=