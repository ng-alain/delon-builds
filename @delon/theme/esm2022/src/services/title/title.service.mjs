import { DOCUMENT } from '@angular/common';
import { DestroyRef, Injectable, Injector, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { of, map, delay, isObservable, switchMap } from 'rxjs';
import { ALAIN_I18N_TOKEN } from '../i18n/i18n';
import { MenuService } from '../menu/menu.service';
import * as i0 from "@angular/core";
export class TitleService {
    constructor() {
        this.destroy$ = inject(DestroyRef);
        this._prefix = '';
        this._suffix = '';
        this._separator = ' - ';
        this._reverse = false;
        this.DELAY_TIME = 25;
        this.doc = inject(DOCUMENT);
        this.injector = inject(Injector);
        this.title = inject(Title);
        this.menuSrv = inject(MenuService);
        this.i18nSrv = inject(ALAIN_I18N_TOKEN);
        /**
         * Set default title name
         *
         * 设置默认标题名
         */
        this.default = `Not Page Name`;
        this.i18nSrv.change.pipe(takeUntilDestroyed()).subscribe(() => this.setTitle());
    }
    /**
     * Set separator
     *
     * 设置分隔符
     */
    set separator(value) {
        this._separator = value;
    }
    /**
     * Set prefix
     *
     * 设置前缀
     */
    set prefix(value) {
        this._prefix = value;
    }
    /**
     * Set suffix
     *
     * 设置后缀
     */
    set suffix(value) {
        this._suffix = value;
    }
    /**
     * Set whether to reverse
     *
     * 设置是否反转
     */
    set reverse(value) {
        this._reverse = value;
    }
    getByElement() {
        return of('').pipe(delay(this.DELAY_TIME), map(() => {
            const el = ((this.selector != null ? this.doc.querySelector(this.selector) : null) ||
                this.doc.querySelector('.alain-default__content-title h1') ||
                this.doc.querySelector('.page-header__title'));
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
        }));
    }
    getByRoute() {
        let next = this.injector.get(ActivatedRoute);
        while (next.firstChild)
            next = next.firstChild;
        const data = (next.snapshot && next.snapshot.data) || {};
        if (data.titleI18n)
            data.title = this.i18nSrv.fanyi(data.titleI18n);
        return isObservable(data.title) ? data.title : of(data.title);
    }
    getByMenu() {
        const menus = this.menuSrv.getPathByUrl(this.injector.get(Router).url);
        if (!menus || menus.length <= 0)
            return of('');
        const item = menus[menus.length - 1];
        let title;
        if (item.i18n)
            title = this.i18nSrv.fanyi(item.i18n);
        return of(title || item.text);
    }
    /**
     * Set the document title
     */
    setTitle(title) {
        this.tit$?.unsubscribe();
        this.tit$ = of(title)
            .pipe(switchMap(tit => (tit ? of(tit) : this.getByRoute())), switchMap(tit => (tit ? of(tit) : this.getByMenu())), switchMap(tit => (tit ? of(tit) : this.getByElement())), map(tit => tit || this.default), map(title => (!Array.isArray(title) ? [title] : title)), takeUntilDestroyed(this.destroy$))
            .subscribe(titles => {
            let newTitles = [];
            if (this._prefix) {
                newTitles.push(this._prefix);
            }
            newTitles.push(...titles.filter(title => !!title));
            if (this._suffix) {
                newTitles.push(this._suffix);
            }
            if (this._reverse) {
                newTitles = newTitles.reverse();
            }
            this.title.setTitle(newTitles.join(this._separator));
        });
    }
    /**
     * Set i18n key of the document title
     */
    setTitleByI18n(key, params) {
        this.setTitle(this.i18nSrv.fanyi(key, params));
    }
    ngOnDestroy() {
        this.tit$?.unsubscribe();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.3", ngImport: i0, type: TitleService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.1.3", ngImport: i0, type: TitleService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.3", ngImport: i0, type: TitleService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGl0bGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lL3NyYy9zZXJ2aWNlcy90aXRsZS90aXRsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQWEsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBYyxFQUFFLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUV6RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDaEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQVFuRCxNQUFNLE9BQU8sWUFBWTtJQWdCdkI7UUFmUSxhQUFRLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzlCLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFDckIsWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUNyQixlQUFVLEdBQVcsS0FBSyxDQUFDO1FBQzNCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFHekIsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUVSLFFBQUcsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdkIsYUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1QixVQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FB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RUQ7O09BRUc7SUFDSCxjQUFjLENBQUMsR0FBVyxFQUFFLE1BQWdCO1FBQzFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxDQUFDO0lBQzNCLENBQUM7OEdBcEpVLFlBQVk7a0hBQVosWUFBWSxjQURDLE1BQU07OzJGQUNuQixZQUFZO2tCQUR4QixVQUFVO21CQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IERlc3Ryb3lSZWYsIEluamVjdGFibGUsIEluamVjdG9yLCBPbkRlc3Ryb3ksIGluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdGFrZVVudGlsRGVzdHJveWVkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZS9yeGpzLWludGVyb3AnO1xuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIG1hcCwgZGVsYXksIGlzT2JzZXJ2YWJsZSwgc3dpdGNoTWFwLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQUxBSU5fSTE4Tl9UT0tFTiB9IGZyb20gJy4uL2kxOG4vaTE4bic7XG5pbXBvcnQgeyBNZW51U2VydmljZSB9IGZyb20gJy4uL21lbnUvbWVudS5zZXJ2aWNlJztcblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZVRpdGxlIHtcbiAgdGl0bGU/OiBzdHJpbmcgfCBPYnNlcnZhYmxlPHN0cmluZz47XG4gIHRpdGxlSTE4bj86IHN0cmluZztcbn1cblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBUaXRsZVNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGRlc3Ryb3kkID0gaW5qZWN0KERlc3Ryb3lSZWYpO1xuICBwcml2YXRlIF9wcmVmaXg6IHN0cmluZyA9ICcnO1xuICBwcml2YXRlIF9zdWZmaXg6IHN0cmluZyA9ICcnO1xuICBwcml2YXRlIF9zZXBhcmF0b3I6IHN0cmluZyA9ICcgLSAnO1xuICBwcml2YXRlIF9yZXZlcnNlOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgdGl0JD86IFN1YnNjcmlwdGlvbjtcblxuICByZWFkb25seSBERUxBWV9USU1FID0gMjU7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBkb2MgPSBpbmplY3QoRE9DVU1FTlQpO1xuICBwcml2YXRlIHJlYWRvbmx5IGluamVjdG9yID0gaW5qZWN0KEluamVjdG9yKTtcbiAgcHJpdmF0ZSByZWFkb25seSB0aXRsZSA9IGluamVjdChUaXRsZSk7XG4gIHByaXZhdGUgcmVhZG9ubHkgbWVudVNydiA9IGluamVjdChNZW51U2VydmljZSk7XG4gIHByaXZhdGUgcmVhZG9ubHkgaTE4blNydiA9IGluamVjdChBTEFJTl9JMThOX1RPS0VOKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmkxOG5TcnYuY2hhbmdlLnBpcGUodGFrZVVudGlsRGVzdHJveWVkKCkpLnN1YnNjcmliZSgoKSA9PiB0aGlzLnNldFRpdGxlKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBzZXBhcmF0b3JcbiAgICpcbiAgICog6K6+572u5YiG6ZqU56ymXG4gICAqL1xuICBzZXQgc2VwYXJhdG9yKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zZXBhcmF0b3IgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgcHJlZml4XG4gICAqXG4gICAqIOiuvue9ruWJjee8gFxuICAgKi9cbiAgc2V0IHByZWZpeCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcHJlZml4ID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHN1ZmZpeFxuICAgKlxuICAgKiDorr7nva7lkI7nvIBcbiAgICovXG4gIHNldCBzdWZmaXgodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3N1ZmZpeCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB3aGV0aGVyIHRvIHJldmVyc2VcbiAgICpcbiAgICog6K6+572u5piv5ZCm5Y+N6L2sXG4gICAqL1xuICBzZXQgcmV2ZXJzZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3JldmVyc2UgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGRlZmF1bHQgQ1NTIHNlbGVjdG9yIHN0cmluZ1xuICAgKlxuICAgKiDorr7nva7pu5jorqRDU1PpgInmi6nlmajlrZfnrKbkuLJcbiAgICovXG4gIHNlbGVjdG9yPzogc3RyaW5nIHwgbnVsbDtcblxuICAvKipcbiAgICogU2V0IGRlZmF1bHQgdGl0bGUgbmFtZVxuICAgKlxuICAgKiDorr7nva7pu5jorqTmoIfpopjlkI1cbiAgICovXG4gIGRlZmF1bHQgPSBgTm90IFBhZ2UgTmFtZWA7XG5cbiAgcHJpdmF0ZSBnZXRCeUVsZW1lbnQoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gb2YoJycpLnBpcGUoXG4gICAgICBkZWxheSh0aGlzLkRFTEFZX1RJTUUpLFxuICAgICAgbWFwKCgpID0+IHtcbiAgICAgICAgY29uc3QgZWwgPSAoKHRoaXMuc2VsZWN0b3IgIT0gbnVsbCA/IHRoaXMuZG9jLnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3RvcikgOiBudWxsKSB8fFxuICAgICAgICAgIHRoaXMuZG9jLnF1ZXJ5U2VsZWN0b3IoJy5hbGFpbi1kZWZhdWx0X19jb250ZW50LXRpdGxlIGgxJykgfHxcbiAgICAgICAgICB0aGlzLmRvYy5xdWVyeVNlbGVjdG9yKCcucGFnZS1oZWFkZXJfX3RpdGxlJykpIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICBpZiAoZWwpIHtcbiAgICAgICAgICBsZXQgdGV4dCA9ICcnO1xuICAgICAgICAgIGVsLmNoaWxkTm9kZXMuZm9yRWFjaCh2YWwgPT4ge1xuICAgICAgICAgICAgaWYgKCF0ZXh0ICYmIHZhbC5ub2RlVHlwZSA9PT0gMykge1xuICAgICAgICAgICAgICB0ZXh0ID0gdmFsLnRleHRDb250ZW50IS50cmltKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIHRleHQgfHwgZWwuZmlyc3RDaGlsZCEudGV4dENvbnRlbnQhLnRyaW0oKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGdldEJ5Um91dGUoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICBsZXQgbmV4dCA9IHRoaXMuaW5qZWN0b3IuZ2V0KEFjdGl2YXRlZFJvdXRlKTtcbiAgICB3aGlsZSAobmV4dC5maXJzdENoaWxkKSBuZXh0ID0gbmV4dC5maXJzdENoaWxkO1xuICAgIGNvbnN0IGRhdGE6IFJvdXRlVGl0bGUgPSAobmV4dC5zbmFwc2hvdCAmJiBuZXh0LnNuYXBzaG90LmRhdGEpIHx8IHt9O1xuICAgIGlmIChkYXRhLnRpdGxlSTE4bikgZGF0YS50aXRsZSA9IHRoaXMuaTE4blNydi5mYW55aShkYXRhLnRpdGxlSTE4bik7XG4gICAgcmV0dXJuIGlzT2JzZXJ2YWJsZShkYXRhLnRpdGxlKSA/IGRhdGEudGl0bGUgOiBvZihkYXRhLnRpdGxlISk7XG4gIH1cblxuICBwcml2YXRlIGdldEJ5TWVudSgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIGNvbnN0IG1lbnVzID0gdGhpcy5tZW51U3J2LmdldFBhdGhCeVVybCh0aGlzLmluamVjdG9yLmdldDxSb3V0ZXI+KFJvdXRlcikudXJsKTtcbiAgICBpZiAoIW1lbnVzIHx8IG1lbnVzLmxlbmd0aCA8PSAwKSByZXR1cm4gb2YoJycpO1xuXG4gICAgY29uc3QgaXRlbSA9IG1lbnVzW21lbnVzLmxlbmd0aCAtIDFdO1xuICAgIGxldCB0aXRsZTtcbiAgICBpZiAoaXRlbS5pMThuKSB0aXRsZSA9IHRoaXMuaTE4blNydi5mYW55aShpdGVtLmkxOG4pO1xuICAgIHJldHVybiBvZih0aXRsZSB8fCBpdGVtLnRleHQhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGRvY3VtZW50IHRpdGxlXG4gICAqL1xuICBzZXRUaXRsZSh0aXRsZT86IHN0cmluZyB8IHN0cmluZ1tdKTogdm9pZCB7XG4gICAgdGhpcy50aXQkPy51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMudGl0JCA9IG9mKHRpdGxlKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcCh0aXQgPT4gKHRpdCA/IG9mKHRpdCkgOiB0aGlzLmdldEJ5Um91dGUoKSkpLFxuICAgICAgICBzd2l0Y2hNYXAodGl0ID0+ICh0aXQgPyBvZih0aXQpIDogdGhpcy5nZXRCeU1lbnUoKSkpLFxuICAgICAgICBzd2l0Y2hNYXAodGl0ID0+ICh0aXQgPyBvZih0aXQpIDogdGhpcy5nZXRCeUVsZW1lbnQoKSkpLFxuICAgICAgICBtYXAodGl0ID0+IHRpdCB8fCB0aGlzLmRlZmF1bHQpLFxuICAgICAgICBtYXAodGl0bGUgPT4gKCFBcnJheS5pc0FycmF5KHRpdGxlKSA/IFt0aXRsZV0gOiB0aXRsZSkpLFxuICAgICAgICB0YWtlVW50aWxEZXN0cm95ZWQodGhpcy5kZXN0cm95JClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUodGl0bGVzID0+IHtcbiAgICAgICAgbGV0IG5ld1RpdGxlczogc3RyaW5nW10gPSBbXTtcbiAgICAgICAgaWYgKHRoaXMuX3ByZWZpeCkge1xuICAgICAgICAgIG5ld1RpdGxlcy5wdXNoKHRoaXMuX3ByZWZpeCk7XG4gICAgICAgIH1cbiAgICAgICAgbmV3VGl0bGVzLnB1c2goLi4udGl0bGVzLmZpbHRlcih0aXRsZSA9PiAhIXRpdGxlKSk7XG4gICAgICAgIGlmICh0aGlzLl9zdWZmaXgpIHtcbiAgICAgICAgICBuZXdUaXRsZXMucHVzaCh0aGlzLl9zdWZmaXgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9yZXZlcnNlKSB7XG4gICAgICAgICAgbmV3VGl0bGVzID0gbmV3VGl0bGVzLnJldmVyc2UoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRpdGxlLnNldFRpdGxlKG5ld1RpdGxlcy5qb2luKHRoaXMuX3NlcGFyYXRvcikpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGkxOG4ga2V5IG9mIHRoZSBkb2N1bWVudCB0aXRsZVxuICAgKi9cbiAgc2V0VGl0bGVCeUkxOG4oa2V5OiBzdHJpbmcsIHBhcmFtcz86IHVua25vd24pOiB2b2lkIHtcbiAgICB0aGlzLnNldFRpdGxlKHRoaXMuaTE4blNydi5mYW55aShrZXksIHBhcmFtcykpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy50aXQkPy51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=