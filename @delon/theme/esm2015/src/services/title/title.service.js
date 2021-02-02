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
export class TitleService {
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
        this.DELAY_TIME = 25;
        /** 设置默认标题名 */
        this.default = `Not Page Name`;
        this.i18n$ = this.i18nSrv.change.pipe(filter(() => !!this.i18n$)).subscribe(() => this.setTitle());
    }
    /** 设置分隔符 */
    set separator(value) {
        this._separator = value;
    }
    /** 设置前缀 */
    set prefix(value) {
        this._prefix = value;
    }
    /** 设置后缀 */
    set suffix(value) {
        this._suffix = value;
    }
    /** 设置是否反转 */
    set reverse(value) {
        this._reverse = value;
    }
    getByElement() {
        const el = (this.doc.querySelector('.alain-default__content-title h1') || this.doc.querySelector('.page-header__title'));
        if (el) {
            let text = '';
            el.childNodes.forEach(val => {
                if (!text && val.nodeType === 3) {
                    text = val.textContent.trim();
                }
            });
            return text || el.firstChild.textContent.trim();
        }
        return '';
    }
    getByRoute() {
        let next = this.injector.get(ActivatedRoute);
        while (next.firstChild)
            next = next.firstChild;
        const data = (next.snapshot && next.snapshot.data) || {};
        if (data.titleI18n && this.i18nSrv)
            data.title = this.i18nSrv.fanyi(data.titleI18n);
        return data.title;
    }
    getByMenu() {
        const menus = this.menuSrv.getPathByUrl(this.injector.get(Router).url);
        if (!menus || menus.length <= 0)
            return '';
        const item = menus[menus.length - 1];
        let title;
        if (item.i18n && this.i18nSrv)
            title = this.i18nSrv.fanyi(item.i18n);
        return title || item.text;
    }
    _setTitle(title) {
        if (!title) {
            title = this.getByRoute() || this.getByMenu() || this.getByElement() || this.default;
        }
        if (title && !Array.isArray(title)) {
            title = [title];
        }
        let newTitles = [];
        if (this._prefix) {
            newTitles.push(this._prefix);
        }
        newTitles.push(...title);
        if (this._suffix) {
            newTitles.push(this._suffix);
        }
        if (this._reverse) {
            newTitles = newTitles.reverse();
        }
        this.title.setTitle(newTitles.join(this._separator));
    }
    /**
     * Set the document title, will be delay `25ms`, pls refer to [#1261](https://github.com/ng-alain/ng-alain/issues/1261)
     */
    setTitle(title) {
        setTimeout(() => this._setTitle(title), this.DELAY_TIME);
    }
    /**
     * Set i18n key of the document title
     */
    setTitleByI18n(key, params) {
        this.setTitle(this.i18nSrv.fanyi(key, params));
    }
    ngOnDestroy() {
        this.i18n$.unsubscribe();
    }
}
/** @nocollapse */ TitleService.ɵfac = function TitleService_Factory(t) { return new (t || TitleService)(i0.ɵɵinject(i0.Injector), i0.ɵɵinject(i1.Title), i0.ɵɵinject(i2.MenuService), i0.ɵɵinject(ALAIN_I18N_TOKEN, 8), i0.ɵɵinject(DOCUMENT)); };
/** @nocollapse */ TitleService.ɵprov = i0.ɵɵdefineInjectable({ token: TitleService, factory: TitleService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TitleService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: i0.Injector }, { type: i1.Title }, { type: i2.MenuService }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [ALAIN_I18N_TOKEN]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGl0bGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lL3NyYy9zZXJ2aWNlcy90aXRsZS90aXRsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQWEsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXpELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QyxPQUFPLEVBQW9CLGdCQUFnQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7OztBQUduRCxNQUFNLE9BQU8sWUFBWTtJQVN2QixZQUNVLFFBQWtCLEVBQ2xCLEtBQVksRUFDWixPQUFvQixFQUdwQixPQUF5QixFQUNQLEdBQVE7UUFOMUIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixVQUFLLEdBQUwsS0FBSyxDQUFPO1FBQ1osWUFBTyxHQUFQLE9BQU8sQ0FBYTtRQUdwQixZQUFPLEdBQVAsT0FBTyxDQUFrQjtRQUNQLFFBQUcsR0FBSCxHQUFHLENBQUs7UUFmNUIsWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUNyQixZQUFPLEdBQVcsRUFBRSxDQUFDO1FBQ3JCLGVBQVUsR0FBVyxLQUFLLENBQUM7UUFDM0IsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUd6QixlQUFVLEdBQUcsRUFBRSxDQUFDO1FBa0N6QixjQUFjO1FBQ2QsWUFBTyxHQUFHLGVBQWUsQ0FBQztRQXhCeEIsSUFBSSxDQUFD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LENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMzQixDQUFDOzsyRkFsSFUsWUFBWSw0RkFjYixnQkFBZ0Isa0JBRWhCLFFBQVE7dUVBaEJQLFlBQVksV0FBWixZQUFZLG1CQURDLE1BQU07dUZBQ25CLFlBQVk7Y0FEeEIsVUFBVTtlQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7c0JBYzdCLFFBQVE7O3NCQUNSLE1BQU07dUJBQUMsZ0JBQWdCOztzQkFFdkIsTUFBTTt1QkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3RvciwgT25EZXN0cm95LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEFsYWluSTE4TlNlcnZpY2UsIEFMQUlOX0kxOE5fVE9LRU4gfSBmcm9tICcuLi9pMThuL2kxOG4nO1xuaW1wb3J0IHsgTWVudVNlcnZpY2UgfSBmcm9tICcuLi9tZW51L21lbnUuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgVGl0bGVTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfcHJlZml4OiBzdHJpbmcgPSAnJztcbiAgcHJpdmF0ZSBfc3VmZml4OiBzdHJpbmcgPSAnJztcbiAgcHJpdmF0ZSBfc2VwYXJhdG9yOiBzdHJpbmcgPSAnIC0gJztcbiAgcHJpdmF0ZSBfcmV2ZXJzZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIGkxOG4kOiBTdWJzY3JpcHRpb247XG5cbiAgcmVhZG9ubHkgREVMQVlfVElNRSA9IDI1O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgdGl0bGU6IFRpdGxlLFxuICAgIHByaXZhdGUgbWVudVNydjogTWVudVNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KEFMQUlOX0kxOE5fVE9LRU4pXG4gICAgcHJpdmF0ZSBpMThuU3J2OiBBbGFpbkkxOE5TZXJ2aWNlLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnksXG4gICkge1xuICAgIHRoaXMuaTE4biQgPSB0aGlzLmkxOG5TcnYuY2hhbmdlLnBpcGUoZmlsdGVyKCgpID0+ICEhdGhpcy5pMThuJCkpLnN1YnNjcmliZSgoKSA9PiB0aGlzLnNldFRpdGxlKCkpO1xuICB9XG5cbiAgLyoqIOiuvue9ruWIhumalOespiAqL1xuICBzZXQgc2VwYXJhdG9yKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zZXBhcmF0b3IgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKiDorr7nva7liY3nvIAgKi9cbiAgc2V0IHByZWZpeCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcHJlZml4ID0gdmFsdWU7XG4gIH1cblxuICAvKiog6K6+572u5ZCO57yAICovXG4gIHNldCBzdWZmaXgodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3N1ZmZpeCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqIOiuvue9ruaYr+WQpuWPjei9rCAqL1xuICBzZXQgcmV2ZXJzZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3JldmVyc2UgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKiDorr7nva7pu5jorqTmoIfpopjlkI0gKi9cbiAgZGVmYXVsdCA9IGBOb3QgUGFnZSBOYW1lYDtcblxuICBwcml2YXRlIGdldEJ5RWxlbWVudCgpOiBzdHJpbmcge1xuICAgIGNvbnN0IGVsID0gKHRoaXMuZG9jLnF1ZXJ5U2VsZWN0b3IoJy5hbGFpbi1kZWZhdWx0X19jb250ZW50LXRpdGxlIGgxJykgfHwgdGhpcy5kb2MucXVlcnlTZWxlY3RvcignLnBhZ2UtaGVhZGVyX190aXRsZScpKSBhcyBIVE1MRWxlbWVudDtcbiAgICBpZiAoZWwpIHtcbiAgICAgIGxldCB0ZXh0ID0gJyc7XG4gICAgICBlbC5jaGlsZE5vZGVzLmZvckVhY2godmFsID0+IHtcbiAgICAgICAgaWYgKCF0ZXh0ICYmIHZhbC5ub2RlVHlwZSA9PT0gMykge1xuICAgICAgICAgIHRleHQgPSB2YWwudGV4dENvbnRlbnQhLnRyaW0oKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGV4dCB8fCBlbC5maXJzdENoaWxkIS50ZXh0Q29udGVudCEudHJpbSgpO1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBwcml2YXRlIGdldEJ5Um91dGUoKTogc3RyaW5nIHtcbiAgICBsZXQgbmV4dCA9IHRoaXMuaW5qZWN0b3IuZ2V0KEFjdGl2YXRlZFJvdXRlKTtcbiAgICB3aGlsZSAobmV4dC5maXJzdENoaWxkKSBuZXh0ID0gbmV4dC5maXJzdENoaWxkO1xuICAgIGNvbnN0IGRhdGEgPSAobmV4dC5zbmFwc2hvdCAmJiBuZXh0LnNuYXBzaG90LmRhdGEpIHx8IHt9O1xuICAgIGlmIChkYXRhLnRpdGxlSTE4biAmJiB0aGlzLmkxOG5TcnYpIGRhdGEudGl0bGUgPSB0aGlzLmkxOG5TcnYuZmFueWkoZGF0YS50aXRsZUkxOG4pO1xuICAgIHJldHVybiBkYXRhLnRpdGxlO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRCeU1lbnUoKTogc3RyaW5nIHtcbiAgICBjb25zdCBtZW51cyA9IHRoaXMubWVudVNydi5nZXRQYXRoQnlVcmwodGhpcy5pbmplY3Rvci5nZXQ8Um91dGVyPihSb3V0ZXIpLnVybCk7XG4gICAgaWYgKCFtZW51cyB8fCBtZW51cy5sZW5ndGggPD0gMCkgcmV0dXJuICcnO1xuXG4gICAgY29uc3QgaXRlbSA9IG1lbnVzW21lbnVzLmxlbmd0aCAtIDFdO1xuICAgIGxldCB0aXRsZTtcbiAgICBpZiAoaXRlbS5pMThuICYmIHRoaXMuaTE4blNydikgdGl0bGUgPSB0aGlzLmkxOG5TcnYuZmFueWkoaXRlbS5pMThuKTtcbiAgICByZXR1cm4gdGl0bGUgfHwgaXRlbS50ZXh0ITtcbiAgfVxuXG4gIHByaXZhdGUgX3NldFRpdGxlKHRpdGxlPzogc3RyaW5nIHwgc3RyaW5nW10pOiB2b2lkIHtcbiAgICBpZiAoIXRpdGxlKSB7XG4gICAgICB0aXRsZSA9IHRoaXMuZ2V0QnlSb3V0ZSgpIHx8IHRoaXMuZ2V0QnlNZW51KCkgfHwgdGhpcy5nZXRCeUVsZW1lbnQoKSB8fCB0aGlzLmRlZmF1bHQ7XG4gICAgfVxuICAgIGlmICh0aXRsZSAmJiAhQXJyYXkuaXNBcnJheSh0aXRsZSkpIHtcbiAgICAgIHRpdGxlID0gW3RpdGxlXTtcbiAgICB9XG5cbiAgICBsZXQgbmV3VGl0bGVzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGlmICh0aGlzLl9wcmVmaXgpIHtcbiAgICAgIG5ld1RpdGxlcy5wdXNoKHRoaXMuX3ByZWZpeCk7XG4gICAgfVxuICAgIG5ld1RpdGxlcy5wdXNoKC4uLih0aXRsZSBhcyBzdHJpbmdbXSkpO1xuICAgIGlmICh0aGlzLl9zdWZmaXgpIHtcbiAgICAgIG5ld1RpdGxlcy5wdXNoKHRoaXMuX3N1ZmZpeCk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9yZXZlcnNlKSB7XG4gICAgICBuZXdUaXRsZXMgPSBuZXdUaXRsZXMucmV2ZXJzZSgpO1xuICAgIH1cbiAgICB0aGlzLnRpdGxlLnNldFRpdGxlKG5ld1RpdGxlcy5qb2luKHRoaXMuX3NlcGFyYXRvcikpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgZG9jdW1lbnQgdGl0bGUsIHdpbGwgYmUgZGVsYXkgYDI1bXNgLCBwbHMgcmVmZXIgdG8gWyMxMjYxXShodHRwczovL2dpdGh1Yi5jb20vbmctYWxhaW4vbmctYWxhaW4vaXNzdWVzLzEyNjEpXG4gICAqL1xuICBzZXRUaXRsZSh0aXRsZT86IHN0cmluZyB8IHN0cmluZ1tdKTogdm9pZCB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLl9zZXRUaXRsZSh0aXRsZSksIHRoaXMuREVMQVlfVElNRSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGkxOG4ga2V5IG9mIHRoZSBkb2N1bWVudCB0aXRsZVxuICAgKi9cbiAgc2V0VGl0bGVCeUkxOG4oa2V5OiBzdHJpbmcsIHBhcmFtcz86IHt9KTogdm9pZCB7XG4gICAgdGhpcy5zZXRUaXRsZSh0aGlzLmkxOG5TcnYuZmFueWkoa2V5LCBwYXJhbXMpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuaTE4biQudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19