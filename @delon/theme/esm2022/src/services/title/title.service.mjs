import { DOCUMENT } from '@angular/common';
import { DestroyRef, Inject, Injectable, Optional, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { of, map, delay, isObservable, switchMap } from 'rxjs';
import { ALAIN_I18N_TOKEN } from '../i18n/i18n';
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
        this.destroy$ = inject(DestroyRef);
        this._prefix = '';
        this._suffix = '';
        this._separator = ' - ';
        this._reverse = false;
        this.DELAY_TIME = 25;
        /**
         * Set default title name
         *
         * 设置默认标题名
         */
        this.default = `Not Page Name`;
        i18nSrv.change.pipe(takeUntilDestroyed()).subscribe(() => this.setTitle());
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
        if (data.titleI18n && this.i18nSrv)
            data.title = this.i18nSrv.fanyi(data.titleI18n);
        return isObservable(data.title) ? data.title : of(data.title);
    }
    getByMenu() {
        const menus = this.menuSrv.getPathByUrl(this.injector.get(Router).url);
        if (!menus || menus.length <= 0)
            return of('');
        const item = menus[menus.length - 1];
        let title;
        if (item.i18n && this.i18nSrv)
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TitleService, deps: [{ token: i0.Injector }, { token: i1.Title }, { token: i2.MenuService }, { token: ALAIN_I18N_TOKEN, optional: true }, { token: DOCUMENT }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TitleService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TitleService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.Title }, { type: i2.MenuService }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [ALAIN_I18N_TOKEN]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGl0bGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lL3NyYy9zZXJ2aWNlcy90aXRsZS90aXRsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQXVCLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEcsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFaEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQWMsRUFBRSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFJekYsT0FBTyxFQUFvQixnQkFBZ0IsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7OztBQVNsRSxNQUFNLE9BQU8sWUFBWTtJQVV2QixZQUNVLFFBQWtCLEVBQ2xCLEtBQVksRUFDWixPQUFvQixFQUdwQixPQUF5QixFQUNQLEdBQWM7UUFOaEMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixVQUFLLEdBQUwsS0FBSyxDQUFPO1FBQ1osWUFBTyxHQUFQLE9BQU8sQ0FBYTtRQUdwQixZQUFPLEdBQVAsT0FBTyxDQUFrQjtRQUNQLFFBQUcsR0FBSCxHQUFHLENBQVc7UUFoQmxDLGFBQVEsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDOUIsWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUNyQixZQUFPLEdBQVcsRUFBRSxDQUFDO1FBQ3JCLGVBQVUsR0FBVyxLQUFLLENBQUM7UUFDM0IsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUd6QixlQUFVLEdBQUcsRUFBRSxDQUFDO1FB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QUMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsQ0FBQztJQUMzQixDQUFDOytHQXRKVSxZQUFZLDBGQWViLGdCQUFnQiw2QkFFaEIsUUFBUTttSEFqQlAsWUFBWSxjQURDLE1BQU07OzRGQUNuQixZQUFZO2tCQUR4QixVQUFVO21CQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7MEJBZTdCLFFBQVE7OzBCQUNSLE1BQU07MkJBQUMsZ0JBQWdCOzswQkFFdkIsTUFBTTsyQkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRGVzdHJveVJlZiwgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3RvciwgT25EZXN0cm95LCBPcHRpb25hbCwgaW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0YWtlVW50aWxEZXN0cm95ZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlL3J4anMtaW50ZXJvcCc7XG5pbXBvcnQgeyBUaXRsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgbWFwLCBkZWxheSwgaXNPYnNlcnZhYmxlLCBzd2l0Y2hNYXAsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgdHlwZSB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbmltcG9ydCB7IEFsYWluSTE4TlNlcnZpY2UsIEFMQUlOX0kxOE5fVE9LRU4gfSBmcm9tICcuLi9pMThuL2kxOG4nO1xuaW1wb3J0IHsgTWVudVNlcnZpY2UgfSBmcm9tICcuLi9tZW51L21lbnUuc2VydmljZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVUaXRsZSB7XG4gIHRpdGxlPzogc3RyaW5nIHwgT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICB0aXRsZUkxOG4/OiBzdHJpbmc7XG59XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgVGl0bGVTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IGluamVjdChEZXN0cm95UmVmKTtcbiAgcHJpdmF0ZSBfcHJlZml4OiBzdHJpbmcgPSAnJztcbiAgcHJpdmF0ZSBfc3VmZml4OiBzdHJpbmcgPSAnJztcbiAgcHJpdmF0ZSBfc2VwYXJhdG9yOiBzdHJpbmcgPSAnIC0gJztcbiAgcHJpdmF0ZSBfcmV2ZXJzZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIHRpdCQ/OiBTdWJzY3JpcHRpb247XG5cbiAgcmVhZG9ubHkgREVMQVlfVElNRSA9IDI1O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgdGl0bGU6IFRpdGxlLFxuICAgIHByaXZhdGUgbWVudVNydjogTWVudVNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KEFMQUlOX0kxOE5fVE9LRU4pXG4gICAgcHJpdmF0ZSBpMThuU3J2OiBBbGFpbkkxOE5TZXJ2aWNlLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBOelNhZmVBbnlcbiAgKSB7XG4gICAgaTE4blNydi5jaGFuZ2UucGlwZSh0YWtlVW50aWxEZXN0cm95ZWQoKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMuc2V0VGl0bGUoKSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHNlcGFyYXRvclxuICAgKlxuICAgKiDorr7nva7liIbpmpTnrKZcbiAgICovXG4gIHNldCBzZXBhcmF0b3IodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NlcGFyYXRvciA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBwcmVmaXhcbiAgICpcbiAgICog6K6+572u5YmN57yAXG4gICAqL1xuICBzZXQgcHJlZml4KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wcmVmaXggPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgc3VmZml4XG4gICAqXG4gICAqIOiuvue9ruWQjue8gFxuICAgKi9cbiAgc2V0IHN1ZmZpeCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3VmZml4ID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHdoZXRoZXIgdG8gcmV2ZXJzZVxuICAgKlxuICAgKiDorr7nva7mmK/lkKblj43ovaxcbiAgICovXG4gIHNldCByZXZlcnNlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcmV2ZXJzZSA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgZGVmYXVsdCBDU1Mgc2VsZWN0b3Igc3RyaW5nXG4gICAqXG4gICAqIOiuvue9rum7mOiupENTU+mAieaLqeWZqOWtl+espuS4slxuICAgKi9cbiAgc2VsZWN0b3I/OiBzdHJpbmcgfCBudWxsO1xuXG4gIC8qKlxuICAgKiBTZXQgZGVmYXVsdCB0aXRsZSBuYW1lXG4gICAqXG4gICAqIOiuvue9rum7mOiupOagh+mimOWQjVxuICAgKi9cbiAgZGVmYXVsdCA9IGBOb3QgUGFnZSBOYW1lYDtcblxuICBwcml2YXRlIGdldEJ5RWxlbWVudCgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiBvZignJykucGlwZShcbiAgICAgIGRlbGF5KHRoaXMuREVMQVlfVElNRSksXG4gICAgICBtYXAoKCkgPT4ge1xuICAgICAgICBjb25zdCBlbCA9ICgodGhpcy5zZWxlY3RvciAhPSBudWxsID8gdGhpcy5kb2MucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9yKSA6IG51bGwpIHx8XG4gICAgICAgICAgdGhpcy5kb2MucXVlcnlTZWxlY3RvcignLmFsYWluLWRlZmF1bHRfX2NvbnRlbnQtdGl0bGUgaDEnKSB8fFxuICAgICAgICAgIHRoaXMuZG9jLnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLWhlYWRlcl9fdGl0bGUnKSkgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgIGlmIChlbCkge1xuICAgICAgICAgIGxldCB0ZXh0ID0gJyc7XG4gICAgICAgICAgZWwuY2hpbGROb2Rlcy5mb3JFYWNoKHZhbCA9PiB7XG4gICAgICAgICAgICBpZiAoIXRleHQgJiYgdmFsLm5vZGVUeXBlID09PSAzKSB7XG4gICAgICAgICAgICAgIHRleHQgPSB2YWwudGV4dENvbnRlbnQhLnRyaW0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gdGV4dCB8fCBlbC5maXJzdENoaWxkIS50ZXh0Q29udGVudCEudHJpbSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0QnlSb3V0ZSgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIGxldCBuZXh0ID0gdGhpcy5pbmplY3Rvci5nZXQoQWN0aXZhdGVkUm91dGUpO1xuICAgIHdoaWxlIChuZXh0LmZpcnN0Q2hpbGQpIG5leHQgPSBuZXh0LmZpcnN0Q2hpbGQ7XG4gICAgY29uc3QgZGF0YTogUm91dGVUaXRsZSA9IChuZXh0LnNuYXBzaG90ICYmIG5leHQuc25hcHNob3QuZGF0YSkgfHwge307XG4gICAgaWYgKGRhdGEudGl0bGVJMThuICYmIHRoaXMuaTE4blNydikgZGF0YS50aXRsZSA9IHRoaXMuaTE4blNydi5mYW55aShkYXRhLnRpdGxlSTE4bik7XG4gICAgcmV0dXJuIGlzT2JzZXJ2YWJsZShkYXRhLnRpdGxlKSA/IGRhdGEudGl0bGUgOiBvZihkYXRhLnRpdGxlISk7XG4gIH1cblxuICBwcml2YXRlIGdldEJ5TWVudSgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIGNvbnN0IG1lbnVzID0gdGhpcy5tZW51U3J2LmdldFBhdGhCeVVybCh0aGlzLmluamVjdG9yLmdldDxSb3V0ZXI+KFJvdXRlcikudXJsKTtcbiAgICBpZiAoIW1lbnVzIHx8IG1lbnVzLmxlbmd0aCA8PSAwKSByZXR1cm4gb2YoJycpO1xuXG4gICAgY29uc3QgaXRlbSA9IG1lbnVzW21lbnVzLmxlbmd0aCAtIDFdO1xuICAgIGxldCB0aXRsZTtcbiAgICBpZiAoaXRlbS5pMThuICYmIHRoaXMuaTE4blNydikgdGl0bGUgPSB0aGlzLmkxOG5TcnYuZmFueWkoaXRlbS5pMThuKTtcbiAgICByZXR1cm4gb2YodGl0bGUgfHwgaXRlbS50ZXh0ISk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBkb2N1bWVudCB0aXRsZVxuICAgKi9cbiAgc2V0VGl0bGUodGl0bGU/OiBzdHJpbmcgfCBzdHJpbmdbXSk6IHZvaWQge1xuICAgIHRoaXMudGl0JD8udW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLnRpdCQgPSBvZih0aXRsZSlcbiAgICAgIC5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAodGl0ID0+ICh0aXQgPyBvZih0aXQpIDogdGhpcy5nZXRCeVJvdXRlKCkpKSxcbiAgICAgICAgc3dpdGNoTWFwKHRpdCA9PiAodGl0ID8gb2YodGl0KSA6IHRoaXMuZ2V0QnlNZW51KCkpKSxcbiAgICAgICAgc3dpdGNoTWFwKHRpdCA9PiAodGl0ID8gb2YodGl0KSA6IHRoaXMuZ2V0QnlFbGVtZW50KCkpKSxcbiAgICAgICAgbWFwKHRpdCA9PiB0aXQgfHwgdGhpcy5kZWZhdWx0KSxcbiAgICAgICAgbWFwKHRpdGxlID0+ICghQXJyYXkuaXNBcnJheSh0aXRsZSkgPyBbdGl0bGVdIDogdGl0bGUpKSxcbiAgICAgICAgdGFrZVVudGlsRGVzdHJveWVkKHRoaXMuZGVzdHJveSQpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKHRpdGxlcyA9PiB7XG4gICAgICAgIGxldCBuZXdUaXRsZXM6IHN0cmluZ1tdID0gW107XG4gICAgICAgIGlmICh0aGlzLl9wcmVmaXgpIHtcbiAgICAgICAgICBuZXdUaXRsZXMucHVzaCh0aGlzLl9wcmVmaXgpO1xuICAgICAgICB9XG4gICAgICAgIG5ld1RpdGxlcy5wdXNoKC4uLnRpdGxlcy5maWx0ZXIodGl0bGUgPT4gISF0aXRsZSkpO1xuICAgICAgICBpZiAodGhpcy5fc3VmZml4KSB7XG4gICAgICAgICAgbmV3VGl0bGVzLnB1c2godGhpcy5fc3VmZml4KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fcmV2ZXJzZSkge1xuICAgICAgICAgIG5ld1RpdGxlcyA9IG5ld1RpdGxlcy5yZXZlcnNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50aXRsZS5zZXRUaXRsZShuZXdUaXRsZXMuam9pbih0aGlzLl9zZXBhcmF0b3IpKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBpMThuIGtleSBvZiB0aGUgZG9jdW1lbnQgdGl0bGVcbiAgICovXG4gIHNldFRpdGxlQnlJMThuKGtleTogc3RyaW5nLCBwYXJhbXM/OiB1bmtub3duKTogdm9pZCB7XG4gICAgdGhpcy5zZXRUaXRsZSh0aGlzLmkxOG5TcnYuZmFueWkoa2V5LCBwYXJhbXMpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMudGl0JD8udW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19