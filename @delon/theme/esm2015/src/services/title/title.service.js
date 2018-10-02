/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable, Inject, Optional, Injector, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { MenuService } from '../menu/menu.service';
import { ALAIN_I18N_TOKEN } from '../i18n/i18n';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "../menu/menu.service";
import * as i3 from "../i18n/i18n";
import * as i4 from "@angular/common";
/**
 * 设置标题
 * @see https://ng-alain.com/docs/service#TitleService
 */
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
        this._default = 'Not Page Name';
        if (this.i18nSrv)
            this.i18n$ = this.i18nSrv.change.subscribe(() => this.setTitle());
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
     * 设置默认标题名
     * @param {?} value
     * @return {?}
     */
    set default(value) {
        this._default = value;
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
        if (data["titleI18n"] && this.i18nSrv)
            data["title"] = this.i18nSrv.fanyi(data["titleI18n"]);
        return data["title"];
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
            title =
                this.getByRoute() ||
                    this.getByMenu() ||
                    this.getByElement() ||
                    this._default;
        }
        if (title && !Array.isArray(title)) {
            title = [title];
        }
        /** @type {?} */
        let newTitles = [];
        if (this._prefix) {
            newTitles.push(this._prefix);
        }
        newTitles.push(...(/** @type {?} */ (title)));
        if (this._suffix) {
            newTitles.push(this._suffix);
        }
        if (this._reverse) {
            newTitles = newTitles.reverse();
        }
        this.title.setTitle(newTitles.join(this._separator));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.i18n$)
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
    TitleService.prototype._default;
    /** @type {?} */
    TitleService.prototype.i18n$;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGl0bGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi90aGVtZS8iLCJzb3VyY2VzIjpbInNyYy9zZXJ2aWNlcy90aXRsZS90aXRsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsVUFBVSxFQUNWLE1BQU0sRUFDTixRQUFRLEVBQ1IsUUFBUSxHQUVULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUczQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGdCQUFnQixFQUFvQixNQUFNLGNBQWMsQ0FBQzs7Ozs7Ozs7OztBQU9sRSxNQUFNOzs7Ozs7OztJQVFKLFlBQ1UsVUFDQSxPQUNBLFNBR0EsT0FBeUIsRUFDUCxHQUFRO1FBTjFCLGFBQVEsR0FBUixRQUFRO1FBQ1IsVUFBSyxHQUFMLEtBQUs7UUFDTCxZQUFPLEdBQVAsT0FBTztRQUdQLFlBQU8sR0FBUCxPQUFPLENBQWtCO1FBQ1AsUUFBRyxHQUFILEdBQUcsQ0FBSzt1QkFkbEIsRUFBRTt1QkFDRixFQUFFOzBCQUNDLEtBQUs7d0JBQ1AsS0FBSzt3QkFDTCxlQUFlO1FBWWhDLElBQUksSUFBSSxDQUFDLE9BQU87WUFDZCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztLQUNyRTs7Ozs7O0lBR0QsSUFBSSxTQUFTLENBQUMsS0FBYTtRQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztLQUN6Qjs7Ozs7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QixTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM5QjtRQUNELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixTQUFTLEdBQUcsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2pDO1FBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztLQUN0RDs7OztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxLQUFLO1lBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUMxQzs7O1lBM0dGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7WUFmaEMsUUFBUTtZQUlELEtBQUs7WUFJTCxXQUFXOzRDQW9CZixRQUFRLFlBQ1IsTUFBTSxTQUFDLGdCQUFnQjs0Q0FFdkIsTUFBTSxTQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEluamVjdGFibGUsXHJcbiAgSW5qZWN0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIEluamVjdG9yLFxyXG4gIE9uRGVzdHJveSxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFRpdGxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBNZW51U2VydmljZSB9IGZyb20gJy4uL21lbnUvbWVudS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQUxBSU5fSTE4Tl9UT0tFTiwgQWxhaW5JMThOU2VydmljZSB9IGZyb20gJy4uL2kxOG4vaTE4bic7XHJcblxyXG4vKipcclxuICog6K6+572u5qCH6aKYXHJcbiAqIEBzZWUgaHR0cHM6Ly9uZy1hbGFpbi5jb20vZG9jcy9zZXJ2aWNlI1RpdGxlU2VydmljZVxyXG4gKi9cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIFRpdGxlU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSBfcHJlZml4ID0gJyc7XHJcbiAgcHJpdmF0ZSBfc3VmZml4ID0gJyc7XHJcbiAgcHJpdmF0ZSBfc2VwYXJhdG9yID0gJyAtICc7XHJcbiAgcHJpdmF0ZSBfcmV2ZXJzZSA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX2RlZmF1bHQgPSAnTm90IFBhZ2UgTmFtZSc7XHJcbiAgcHJpdmF0ZSBpMThuJDogU3Vic2NyaXB0aW9uO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxyXG4gICAgcHJpdmF0ZSB0aXRsZTogVGl0bGUsXHJcbiAgICBwcml2YXRlIG1lbnVTcnY6IE1lbnVTZXJ2aWNlLFxyXG4gICAgQE9wdGlvbmFsKClcclxuICAgIEBJbmplY3QoQUxBSU5fSTE4Tl9UT0tFTilcclxuICAgIHByaXZhdGUgaTE4blNydjogQWxhaW5JMThOU2VydmljZSxcclxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnksXHJcbiAgKSB7XHJcbiAgICBpZiAodGhpcy5pMThuU3J2KVxyXG4gICAgICB0aGlzLmkxOG4kID0gdGhpcy5pMThuU3J2LmNoYW5nZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5zZXRUaXRsZSgpKTtcclxuICB9XHJcblxyXG4gIC8qKiDorr7nva7liIbpmpTnrKYgKi9cclxuICBzZXQgc2VwYXJhdG9yKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3NlcGFyYXRvciA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLyoqIOiuvue9ruWJjee8gCAqL1xyXG4gIHNldCBwcmVmaXgodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fcHJlZml4ID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICAvKiog6K6+572u5ZCO57yAICovXHJcbiAgc2V0IHN1ZmZpeCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9zdWZmaXggPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIC8qKiDorr7nva7mmK/lkKblj43ovawgKi9cclxuICBzZXQgcmV2ZXJzZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fcmV2ZXJzZSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLyoqIOiuvue9rum7mOiupOagh+mimOWQjSAqL1xyXG4gIHNldCBkZWZhdWx0KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX2RlZmF1bHQgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0QnlFbGVtZW50KCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBlbCA9XHJcbiAgICAgIHRoaXMuZG9jLnF1ZXJ5U2VsZWN0b3IoJy5hbGFpbi1kZWZhdWx0X19jb250ZW50LXRpdGxlIGgxJykgfHxcclxuICAgICAgdGhpcy5kb2MucXVlcnlTZWxlY3RvcignLnBhZ2UtaGVhZGVyX190aXRsZScpO1xyXG4gICAgaWYgKGVsKSB7XHJcbiAgICAgIHJldHVybiBlbC5maXJzdENoaWxkLnRleHRDb250ZW50LnRyaW0oKTtcclxuICAgIH1cclxuICAgIHJldHVybiAnJztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0QnlSb3V0ZSgpOiBzdHJpbmcge1xyXG4gICAgbGV0IG5leHQgPSB0aGlzLmluamVjdG9yLmdldChBY3RpdmF0ZWRSb3V0ZSk7XHJcbiAgICB3aGlsZSAobmV4dC5maXJzdENoaWxkKSBuZXh0ID0gbmV4dC5maXJzdENoaWxkO1xyXG4gICAgY29uc3QgZGF0YSA9IChuZXh0LnNuYXBzaG90ICYmIG5leHQuc25hcHNob3QuZGF0YSkgfHwge307XHJcbiAgICBpZiAoZGF0YS50aXRsZUkxOG4gJiYgdGhpcy5pMThuU3J2KVxyXG4gICAgICBkYXRhLnRpdGxlID0gdGhpcy5pMThuU3J2LmZhbnlpKGRhdGEudGl0bGVJMThuKTtcclxuICAgIHJldHVybiBkYXRhLnRpdGxlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRCeU1lbnUoKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IG1lbnVzID0gdGhpcy5tZW51U3J2LmdldFBhdGhCeVVybCh0aGlzLmluamVjdG9yLmdldChSb3V0ZXIpLnVybCk7XHJcbiAgICBpZiAoIW1lbnVzIHx8IG1lbnVzLmxlbmd0aCA8PSAwKSByZXR1cm4gJyc7XHJcblxyXG4gICAgY29uc3QgaXRlbSA9IG1lbnVzW21lbnVzLmxlbmd0aCAtIDFdO1xyXG4gICAgbGV0IHRpdGxlO1xyXG4gICAgaWYgKGl0ZW0uaTE4biAmJiB0aGlzLmkxOG5TcnYpIHRpdGxlID0gdGhpcy5pMThuU3J2LmZhbnlpKGl0ZW0uaTE4bik7XHJcbiAgICByZXR1cm4gdGl0bGUgfHwgaXRlbS50ZXh0O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog6K6+572u5qCH6aKYXHJcbiAgICovXHJcbiAgc2V0VGl0bGUodGl0bGU/OiBzdHJpbmcgfCBzdHJpbmdbXSkge1xyXG4gICAgaWYgKCF0aXRsZSkge1xyXG4gICAgICB0aXRsZSA9XHJcbiAgICAgICAgdGhpcy5nZXRCeVJvdXRlKCkgfHxcclxuICAgICAgICB0aGlzLmdldEJ5TWVudSgpIHx8XHJcbiAgICAgICAgdGhpcy5nZXRCeUVsZW1lbnQoKSB8fFxyXG4gICAgICAgIHRoaXMuX2RlZmF1bHQ7XHJcbiAgICB9XHJcbiAgICBpZiAodGl0bGUgJiYgIUFycmF5LmlzQXJyYXkodGl0bGUpKSB7XHJcbiAgICAgIHRpdGxlID0gW3RpdGxlXTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgbmV3VGl0bGVzID0gW107XHJcbiAgICBpZiAodGhpcy5fcHJlZml4KSB7XHJcbiAgICAgIG5ld1RpdGxlcy5wdXNoKHRoaXMuX3ByZWZpeCk7XHJcbiAgICB9XHJcbiAgICBuZXdUaXRsZXMucHVzaCguLi4odGl0bGUgYXMgc3RyaW5nW10pKTtcclxuICAgIGlmICh0aGlzLl9zdWZmaXgpIHtcclxuICAgICAgbmV3VGl0bGVzLnB1c2godGhpcy5fc3VmZml4KTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLl9yZXZlcnNlKSB7XHJcbiAgICAgIG5ld1RpdGxlcyA9IG5ld1RpdGxlcy5yZXZlcnNlKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnRpdGxlLnNldFRpdGxlKG5ld1RpdGxlcy5qb2luKHRoaXMuX3NlcGFyYXRvcikpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pMThuJCkgdGhpcy5pMThuJC51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=