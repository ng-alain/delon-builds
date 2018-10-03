/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, TemplateRef, Inject, Optional, ViewChild, ElementRef, Renderer2, } from '@angular/core';
import { Router } from '@angular/router';
import { NzAffixComponent } from 'ng-zorro-antd';
import { filter } from 'rxjs/operators';
import { isEmpty, InputBoolean, InputNumber } from '@delon/util';
import { MenuService, ALAIN_I18N_TOKEN, TitleService, SettingsService, } from '@delon/theme';
import { ReuseTabService } from '@delon/abc/reuse-tab';
import { PageHeaderConfig } from './page-header.config';
export class PageHeaderComponent {
    /**
     * @param {?} cog
     * @param {?} settings
     * @param {?} renderer
     * @param {?} route
     * @param {?} menuSrv
     * @param {?} i18nSrv
     * @param {?} titleSrv
     * @param {?} reuseSrv
     */
    constructor(cog, settings, renderer, route, menuSrv, i18nSrv, titleSrv, reuseSrv) {
        this.renderer = renderer;
        this.route = route;
        this.menuSrv = menuSrv;
        this.i18nSrv = i18nSrv;
        this.titleSrv = titleSrv;
        this.reuseSrv = reuseSrv;
        this.inited = false;
        this.loading = false;
        this.wide = false;
        this.paths = [];
        Object.assign(this, cog);
        if (this.i18nSrv) {
            this.i18n$ = this.i18nSrv.change.subscribe(() => this.refresh());
        }
        this.set$ = settings.notify
            .pipe(filter(w => this.affix && w.type === 'layout' && w.name === 'collapsed'))
            .subscribe(() => this.affix.updatePosition({}));
    }
    /**
     * @return {?}
     */
    get menus() {
        if (this._menus) {
            return this._menus;
        }
        this._menus = this.menuSrv.getPathByUrl(this.route.url.split('?')[0]);
        return this._menus;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set title(value) {
        if (value instanceof TemplateRef) {
            this._title = null;
            this._titleTpl = value;
        }
        else {
            this._title = value;
        }
    }
    /**
     * @return {?}
     */
    refresh() {
        this.setTitle().genBreadcrumb();
    }
    /**
     * @return {?}
     */
    genBreadcrumb() {
        if (this.breadcrumb || !this.autoBreadcrumb || this.menus.length <= 0)
            return;
        /** @type {?} */
        const paths = [];
        this.menus.forEach(item => {
            if (typeof item.hideInBreadcrumb !== 'undefined' && item.hideInBreadcrumb)
                return;
            /** @type {?} */
            let title = item.text;
            if (item.i18n && this.i18nSrv)
                title = this.i18nSrv.fanyi(item.i18n);
            paths.push({ title, link: item.link && [item.link] });
        });
        // add home
        if (this.home) {
            paths.splice(0, 0, {
                title: (this.homeI18n &&
                    this.i18nSrv &&
                    this.i18nSrv.fanyi(this.homeI18n)) ||
                    this.home,
                link: [this.homeLink],
            });
        }
        this.paths = paths;
        return this;
    }
    /**
     * @return {?}
     */
    setTitle() {
        if (typeof this._title === 'undefined' &&
            typeof this._titleTpl === 'undefined' &&
            this.autoTitle &&
            this.menus.length > 0) {
            /** @type {?} */
            const item = this.menus[this.menus.length - 1];
            /** @type {?} */
            let title = item.text;
            if (item.i18n && this.i18nSrv)
                title = this.i18nSrv.fanyi(item.i18n);
            this._title = title;
        }
        if (this._title && this.syncTitle) {
            if (this.titleSrv) {
                this.titleSrv.setTitle(this._title);
            }
            if (this.reuseSrv) {
                this.reuseSrv.title = this._title;
            }
        }
        return this;
    }
    /**
     * @return {?}
     */
    checkContent() {
        if (isEmpty(this.conTpl.nativeElement)) {
            this.renderer.setAttribute(this.conTpl.nativeElement, 'hidden', '');
        }
        else {
            this.renderer.removeAttribute(this.conTpl.nativeElement, 'hidden');
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.refresh();
        this.inited = true;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.checkContent();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.inited)
            this.refresh();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.i18n$)
            this.i18n$.unsubscribe();
        this.set$.unsubscribe();
    }
}
PageHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'page-header',
                template: "<nz-affix #affix *ngIf=\"fixed;else phTpl\" [nzOffsetTop]=\"fixedOffsetTop\">\n  <ng-template [ngTemplateOutlet]=\"phTpl\"></ng-template>\n</nz-affix>\n<ng-template #phTpl>\n  <div class=\"page-header\">\n    <div [ngClass]=\"{'page-header__wide': wide}\">\n      <nz-skeleton [nzLoading]=\"loading\" [nzTitle]=\"false\" [nzActive]=\"true\"\n        [nzParagraph]=\"{rows: 3}\" [nzAvatar]=\"{ size: 'large', shape: 'circle' }\">\n        <ng-container *ngIf=\"!breadcrumb; else breadcrumb\">\n          <nz-breadcrumb *ngIf=\"paths && paths.length > 0\">\n            <nz-breadcrumb-item *ngFor=\"let i of paths\">\n              <ng-container *ngIf=\"i.link\">\n                <a [routerLink]=\"i.link\">{{i.title}}</a>\n              </ng-container>\n              <ng-container *ngIf=\"!i.link\">{{i.title}}</ng-container>\n            </nz-breadcrumb-item>\n          </nz-breadcrumb>\n        </ng-container>\n        <div class=\"page-header__detail\">\n          <div *ngIf=\"logo\" class=\"page-header__logo\">\n            <ng-template [ngTemplateOutlet]=\"logo\"></ng-template>\n          </div>\n          <div class=\"page-header__main\">\n            <div class=\"page-header__row\">\n              <h1 *ngIf=\"_title || _titleTpl\" class=\"page-header__title\">\n                <ng-container *ngIf=\"_title; else _titleTpl\">{{_title}}</ng-container>\n              </h1>\n              <div *ngIf=\"action\" class=\"page-header__action\">\n                <ng-template [ngTemplateOutlet]=\"action\"></ng-template>\n              </div>\n            </div>\n            <div class=\"page-header__row\">\n              <div class=\"page-header__desc\" (cdkObserveContent)=\"checkContent()\" #conTpl>\n                <ng-content></ng-content>\n                <ng-template [ngTemplateOutlet]=\"content\"></ng-template>\n              </div>\n              <div *ngIf=\"extra\" class=\"page-header__extra\">\n                <ng-template [ngTemplateOutlet]=\"extra\"></ng-template>\n              </div>\n            </div>\n          </div>\n        </div>\n        <ng-template [ngTemplateOutlet]=\"tab\"></ng-template>\n      </nz-skeleton>\n    </div>\n  </div>\n</ng-template>\n",
                preserveWhitespaces: false
            }] }
];
/** @nocollapse */
PageHeaderComponent.ctorParameters = () => [
    { type: PageHeaderConfig },
    { type: SettingsService },
    { type: Renderer2 },
    { type: Router },
    { type: MenuService },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [ALAIN_I18N_TOKEN,] }] },
    { type: TitleService, decorators: [{ type: Optional }, { type: Inject, args: [TitleService,] }] },
    { type: ReuseTabService, decorators: [{ type: Optional }, { type: Inject, args: [ReuseTabService,] }] }
];
PageHeaderComponent.propDecorators = {
    conTpl: [{ type: ViewChild, args: ['conTpl',] }],
    affix: [{ type: ViewChild, args: ['affix',] }],
    title: [{ type: Input }],
    loading: [{ type: Input }],
    wide: [{ type: Input }],
    home: [{ type: Input }],
    homeLink: [{ type: Input }],
    homeI18n: [{ type: Input }],
    autoBreadcrumb: [{ type: Input }],
    autoTitle: [{ type: Input }],
    syncTitle: [{ type: Input }],
    fixed: [{ type: Input }],
    fixedOffsetTop: [{ type: Input }],
    breadcrumb: [{ type: Input }],
    logo: [{ type: Input }],
    action: [{ type: Input }],
    content: [{ type: Input }],
    extra: [{ type: Input }],
    tab: [{ type: Input }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], PageHeaderComponent.prototype, "loading", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], PageHeaderComponent.prototype, "wide", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], PageHeaderComponent.prototype, "autoBreadcrumb", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], PageHeaderComponent.prototype, "autoTitle", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], PageHeaderComponent.prototype, "syncTitle", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], PageHeaderComponent.prototype, "fixed", void 0);
tslib_1.__decorate([
    InputNumber(),
    tslib_1.__metadata("design:type", Number)
], PageHeaderComponent.prototype, "fixedOffsetTop", void 0);
if (false) {
    /** @type {?} */
    PageHeaderComponent.prototype.inited;
    /** @type {?} */
    PageHeaderComponent.prototype.i18n$;
    /** @type {?} */
    PageHeaderComponent.prototype.set$;
    /** @type {?} */
    PageHeaderComponent.prototype.conTpl;
    /** @type {?} */
    PageHeaderComponent.prototype.affix;
    /** @type {?} */
    PageHeaderComponent.prototype._menus;
    /** @type {?} */
    PageHeaderComponent.prototype._title;
    /** @type {?} */
    PageHeaderComponent.prototype._titleTpl;
    /** @type {?} */
    PageHeaderComponent.prototype.loading;
    /** @type {?} */
    PageHeaderComponent.prototype.wide;
    /** @type {?} */
    PageHeaderComponent.prototype.home;
    /** @type {?} */
    PageHeaderComponent.prototype.homeLink;
    /** @type {?} */
    PageHeaderComponent.prototype.homeI18n;
    /**
     * 自动生成导航，以当前路由从主菜单中定位
     * @type {?}
     */
    PageHeaderComponent.prototype.autoBreadcrumb;
    /**
     * 自动生成标题，以当前路由从主菜单中定位
     * @type {?}
     */
    PageHeaderComponent.prototype.autoTitle;
    /**
     * 是否自动将标题同步至 `TitleService`、`ReuseService` 下，仅 `title` 为 `string` 类型时有效
     * @type {?}
     */
    PageHeaderComponent.prototype.syncTitle;
    /** @type {?} */
    PageHeaderComponent.prototype.fixed;
    /** @type {?} */
    PageHeaderComponent.prototype.fixedOffsetTop;
    /** @type {?} */
    PageHeaderComponent.prototype.paths;
    /** @type {?} */
    PageHeaderComponent.prototype.breadcrumb;
    /** @type {?} */
    PageHeaderComponent.prototype.logo;
    /** @type {?} */
    PageHeaderComponent.prototype.action;
    /** @type {?} */
    PageHeaderComponent.prototype.content;
    /** @type {?} */
    PageHeaderComponent.prototype.extra;
    /** @type {?} */
    PageHeaderComponent.prototype.tab;
    /** @type {?} */
    PageHeaderComponent.prototype.renderer;
    /** @type {?} */
    PageHeaderComponent.prototype.route;
    /** @type {?} */
    PageHeaderComponent.prototype.menuSrv;
    /** @type {?} */
    PageHeaderComponent.prototype.i18nSrv;
    /** @type {?} */
    PageHeaderComponent.prototype.titleSrv;
    /** @type {?} */
    PageHeaderComponent.prototype.reuseSrv;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9wYWdlLWhlYWRlci8iLCJzb3VyY2VzIjpbInBhZ2UtaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFdBQVcsRUFJWCxNQUFNLEVBQ04sUUFBUSxFQUNSLFNBQVMsRUFDVCxVQUFVLEVBRVYsU0FBUyxHQUVWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXhDLE9BQU8sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNqRSxPQUFPLEVBQ0wsV0FBVyxFQUNYLGdCQUFnQixFQUdoQixZQUFZLEVBQ1osZUFBZSxHQUNoQixNQUFNLGNBQWMsQ0FBQztBQUN0QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFdkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFPeEQsTUFBTTs7Ozs7Ozs7Ozs7SUFzR0osWUFDRSxHQUFxQixFQUNyQixRQUF5QixFQUNqQixVQUNBLE9BQ0EsU0FHQSxPQUF5QixFQUd6QixRQUFzQixFQUd0QixRQUF5QjtRQVh6QixhQUFRLEdBQVIsUUFBUTtRQUNSLFVBQUssR0FBTCxLQUFLO1FBQ0wsWUFBTyxHQUFQLE9BQU87UUFHUCxZQUFPLEdBQVAsT0FBTyxDQUFrQjtRQUd6QixhQUFRLEdBQVIsUUFBUSxDQUFjO1FBR3RCLGFBQVEsR0FBUixRQUFRLENBQWlCO3NCQWxIbEIsS0FBSzt1QkFrQ1osS0FBSztvQkFJUixLQUFLO3FC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TCxLQUFLO21CQUdMLEtBQUs7cUJBR0wsS0FBSztzQkFHTCxLQUFLO29CQUdMLEtBQUs7a0JBR0wsS0FBSzs7O0lBOURMLFlBQVksRUFBRTs7OztJQUlkLFlBQVksRUFBRTs7OztJQWdCZCxZQUFZLEVBQUU7Ozs7SUFPZCxZQUFZLEVBQUU7Ozs7SUFPZCxZQUFZLEVBQUU7Ozs7SUFJZCxZQUFZLEVBQUU7Ozs7SUFJZCxXQUFXLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBUZW1wbGF0ZVJlZixcbiAgQ29udGVudENoaWxkLFxuICBPbkluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgSW5qZWN0LFxuICBPcHRpb25hbCxcbiAgVmlld0NoaWxkLFxuICBFbGVtZW50UmVmLFxuICBBZnRlclZpZXdJbml0LFxuICBSZW5kZXJlcjIsXG4gIE9uRGVzdHJveSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTnpBZmZpeENvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IGlzRW1wdHksIElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQge1xuICBNZW51U2VydmljZSxcbiAgQUxBSU5fSTE4Tl9UT0tFTixcbiAgQWxhaW5JMThOU2VydmljZSxcbiAgTWVudSxcbiAgVGl0bGVTZXJ2aWNlLFxuICBTZXR0aW5nc1NlcnZpY2UsXG59IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBSZXVzZVRhYlNlcnZpY2UgfSBmcm9tICdAZGVsb24vYWJjL3JldXNlLXRhYic7XG5cbmltcG9ydCB7IFBhZ2VIZWFkZXJDb25maWcgfSBmcm9tICcuL3BhZ2UtaGVhZGVyLmNvbmZpZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhZ2UtaGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BhZ2UtaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2VIZWFkZXJDb21wb25lbnRcbiAgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBpbml0ZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBpMThuJDogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIHNldCQ6IFN1YnNjcmlwdGlvbjtcbiAgQFZpZXdDaGlsZCgnY29uVHBsJylcbiAgcHJpdmF0ZSBjb25UcGw6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2FmZml4JylcbiAgcHJpdmF0ZSBhZmZpeDogTnpBZmZpeENvbXBvbmVudDtcbiAgcHJpdmF0ZSBfbWVudXM6IE1lbnVbXTtcblxuICBwcml2YXRlIGdldCBtZW51cygpIHtcbiAgICBpZiAodGhpcy5fbWVudXMpIHtcbiAgICAgIHJldHVybiB0aGlzLl9tZW51cztcbiAgICB9XG4gICAgdGhpcy5fbWVudXMgPSB0aGlzLm1lbnVTcnYuZ2V0UGF0aEJ5VXJsKHRoaXMucm91dGUudXJsLnNwbGl0KCc/JylbMF0pO1xuXG4gICAgcmV0dXJuIHRoaXMuX21lbnVzO1xuICB9XG5cbiAgLy8gcmVnaW9uIGZpZWxkc1xuXG4gIF90aXRsZTogc3RyaW5nO1xuICBfdGl0bGVUcGw6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBJbnB1dCgpXG4gIHNldCB0aXRsZSh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLl90aXRsZSA9IG51bGw7XG4gICAgICB0aGlzLl90aXRsZVRwbCA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl90aXRsZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIEBJbnB1dEJvb2xlYW4oKVxuICBsb2FkaW5nID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgQElucHV0Qm9vbGVhbigpXG4gIHdpZGUgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBob21lOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgaG9tZUxpbms6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBob21lSTE4bjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiDoh6rliqjnlJ/miJDlr7zoiKrvvIzku6XlvZPliY3ot6/nlLHku47kuLvoj5zljZXkuK3lrprkvY1cbiAgICovXG4gIEBJbnB1dCgpXG4gIEBJbnB1dEJvb2xlYW4oKVxuICBhdXRvQnJlYWRjcnVtYjogYm9vbGVhbjtcblxuICAvKipcbiAgICog6Ieq5Yqo55Sf5oiQ5qCH6aKY77yM5Lul5b2T5YmN6Lev55Sx5LuO5Li76I+c5Y2V5Lit5a6a5L2NXG4gICAqL1xuICBASW5wdXQoKVxuICBASW5wdXRCb29sZWFuKClcbiAgYXV0b1RpdGxlOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDmmK/lkKboh6rliqjlsIbmoIfpopjlkIzmraXoh7MgYFRpdGxlU2VydmljZWDjgIFgUmV1c2VTZXJ2aWNlYCDkuIvvvIzku4UgYHRpdGxlYCDkuLogYHN0cmluZ2Ag57G75Z6L5pe25pyJ5pWIXG4gICAqL1xuICBASW5wdXQoKVxuICBASW5wdXRCb29sZWFuKClcbiAgc3luY1RpdGxlOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIEBJbnB1dEJvb2xlYW4oKVxuICBmaXhlZDogYm9vbGVhbjtcblxuICBASW5wdXQoKVxuICBASW5wdXROdW1iZXIoKVxuICBmaXhlZE9mZnNldFRvcDogbnVtYmVyO1xuXG4gIHBhdGhzOiBhbnlbXSA9IFtdO1xuXG4gIEBJbnB1dCgpXG4gIGJyZWFkY3J1bWI6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQElucHV0KClcbiAgbG9nbzogVGVtcGxhdGVSZWY8YW55PjtcblxuICBASW5wdXQoKVxuICBhY3Rpb246IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQElucHV0KClcbiAgY29udGVudDogVGVtcGxhdGVSZWY8YW55PjtcblxuICBASW5wdXQoKVxuICBleHRyYTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBASW5wdXQoKVxuICB0YWI6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLy8gZW5kcmVnaW9uXG5cbiAgY29uc3RydWN0b3IoXG4gICAgY29nOiBQYWdlSGVhZGVyQ29uZmlnLFxuICAgIHNldHRpbmdzOiBTZXR0aW5nc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgcm91dGU6IFJvdXRlcixcbiAgICBwcml2YXRlIG1lbnVTcnY6IE1lbnVTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChBTEFJTl9JMThOX1RPS0VOKVxuICAgIHByaXZhdGUgaTE4blNydjogQWxhaW5JMThOU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoVGl0bGVTZXJ2aWNlKVxuICAgIHByaXZhdGUgdGl0bGVTcnY6IFRpdGxlU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoUmV1c2VUYWJTZXJ2aWNlKVxuICAgIHByaXZhdGUgcmV1c2VTcnY6IFJldXNlVGFiU2VydmljZSxcbiAgKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb2cpO1xuICAgIGlmICh0aGlzLmkxOG5TcnYpIHtcbiAgICAgIHRoaXMuaTE4biQgPSB0aGlzLmkxOG5TcnYuY2hhbmdlLnN1YnNjcmliZSgoKSA9PiB0aGlzLnJlZnJlc2goKSk7XG4gICAgfVxuICAgIHRoaXMuc2V0JCA9IHNldHRpbmdzLm5vdGlmeVxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcihcbiAgICAgICAgICB3ID0+IHRoaXMuYWZmaXggJiYgdy50eXBlID09PSAnbGF5b3V0JyAmJiB3Lm5hbWUgPT09ICdjb2xsYXBzZWQnLFxuICAgICAgICApLFxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmFmZml4LnVwZGF0ZVBvc2l0aW9uKHt9KSk7XG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIHRoaXMuc2V0VGl0bGUoKS5nZW5CcmVhZGNydW1iKCk7XG4gIH1cblxuICBwcml2YXRlIGdlbkJyZWFkY3J1bWIoKSB7XG4gICAgaWYgKHRoaXMuYnJlYWRjcnVtYiB8fCAhdGhpcy5hdXRvQnJlYWRjcnVtYiB8fCB0aGlzLm1lbnVzLmxlbmd0aCA8PSAwKVxuICAgICAgcmV0dXJuO1xuICAgIGNvbnN0IHBhdGhzOiBhbnlbXSA9IFtdO1xuICAgIHRoaXMubWVudXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGlmICh0eXBlb2YgaXRlbS5oaWRlSW5CcmVhZGNydW1iICE9PSAndW5kZWZpbmVkJyAmJiBpdGVtLmhpZGVJbkJyZWFkY3J1bWIpXG4gICAgICAgIHJldHVybjtcbiAgICAgIGxldCB0aXRsZSA9IGl0ZW0udGV4dDtcbiAgICAgIGlmIChpdGVtLmkxOG4gJiYgdGhpcy5pMThuU3J2KSB0aXRsZSA9IHRoaXMuaTE4blNydi5mYW55aShpdGVtLmkxOG4pO1xuICAgICAgcGF0aHMucHVzaCh7IHRpdGxlLCBsaW5rOiBpdGVtLmxpbmsgJiYgW2l0ZW0ubGlua10gfSk7XG4gICAgfSk7XG4gICAgLy8gYWRkIGhvbWVcbiAgICBpZiAodGhpcy5ob21lKSB7XG4gICAgICBwYXRocy5zcGxpY2UoMCwgMCwge1xuICAgICAgICB0aXRsZTpcbiAgICAgICAgICAodGhpcy5ob21lSTE4biAmJlxuICAgICAgICAgICAgdGhpcy5pMThuU3J2ICYmXG4gICAgICAgICAgICB0aGlzLmkxOG5TcnYuZmFueWkodGhpcy5ob21lSTE4bikpIHx8XG4gICAgICAgICAgdGhpcy5ob21lLFxuICAgICAgICBsaW5rOiBbdGhpcy5ob21lTGlua10sXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5wYXRocyA9IHBhdGhzO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRUaXRsZSgpIHtcbiAgICBpZiAoXG4gICAgICB0eXBlb2YgdGhpcy5fdGl0bGUgPT09ICd1bmRlZmluZWQnICYmXG4gICAgICB0eXBlb2YgdGhpcy5fdGl0bGVUcGwgPT09ICd1bmRlZmluZWQnICYmXG4gICAgICB0aGlzLmF1dG9UaXRsZSAmJlxuICAgICAgdGhpcy5tZW51cy5sZW5ndGggPiAwXG4gICAgKSB7XG4gICAgICBjb25zdCBpdGVtID0gdGhpcy5tZW51c1t0aGlzLm1lbnVzLmxlbmd0aCAtIDFdO1xuICAgICAgbGV0IHRpdGxlID0gaXRlbS50ZXh0O1xuICAgICAgaWYgKGl0ZW0uaTE4biAmJiB0aGlzLmkxOG5TcnYpIHRpdGxlID0gdGhpcy5pMThuU3J2LmZhbnlpKGl0ZW0uaTE4bik7XG4gICAgICB0aGlzLl90aXRsZSA9IHRpdGxlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl90aXRsZSAmJiB0aGlzLnN5bmNUaXRsZSkge1xuICAgICAgaWYgKHRoaXMudGl0bGVTcnYpIHtcbiAgICAgICAgdGhpcy50aXRsZVNydi5zZXRUaXRsZSh0aGlzLl90aXRsZSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5yZXVzZVNydikge1xuICAgICAgICB0aGlzLnJldXNlU3J2LnRpdGxlID0gdGhpcy5fdGl0bGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjaGVja0NvbnRlbnQoKSB7XG4gICAgaWYgKGlzRW1wdHkodGhpcy5jb25UcGwubmF0aXZlRWxlbWVudCkpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuY29uVHBsLm5hdGl2ZUVsZW1lbnQsICdoaWRkZW4nLCAnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKHRoaXMuY29uVHBsLm5hdGl2ZUVsZW1lbnQsICdoaWRkZW4nKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgICB0aGlzLmluaXRlZCA9IHRydWU7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja0NvbnRlbnQoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmluaXRlZCkgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pMThuJCkgdGhpcy5pMThuJC51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuc2V0JC51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=