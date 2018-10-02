import { __decorate, __metadata } from 'tslib';
import { Component, Input, TemplateRef, Inject, Optional, ViewChild, Renderer2, NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { filter } from 'rxjs/operators';
import { isEmpty, InputBoolean, InputNumber, DelonUtilModule } from '@delon/util';
import { MenuService, ALAIN_I18N_TOKEN, TitleService, SettingsService } from '@delon/theme';
import { ReuseTabService } from '@delon/abc/reuse-tab';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class PageHeaderConfig {
    constructor() {
        /**
         * 首页文本，若指定空表示不显示
         */
        this.home = '首页';
        /**
         * 首页链接
         */
        this.homeLink = '/';
        /**
         * 自动生成导航，以当前路由从主菜单中定位
         */
        this.autoBreadcrumb = true;
        /**
         * 自动生成标题，以当前路由从主菜单中定位
         */
        this.autoTitle = true;
        /**
         * 是否自动将标准信息同步至 `TitleService`、`ReuseService` 下
         */
        this.syncTitle = false;
        /**
         * 是否固定模式
         */
        this.fixed = false;
        /**
         * 固定偏移值
         */
        this.fixedOffsetTop = 64;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class PageHeaderComponent {
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
                template: "<nz-affix #affix *ngIf=\"fixed;else phTpl\" [nzOffsetTop]=\"fixedOffsetTop\">\r\n  <ng-template [ngTemplateOutlet]=\"phTpl\"></ng-template>\r\n</nz-affix>\r\n<ng-template #phTpl>\r\n  <div class=\"page-header\">\r\n    <ng-container *ngIf=\"!breadcrumb; else breadcrumb\">\r\n      <nz-breadcrumb *ngIf=\"paths && paths.length > 0\">\r\n        <nz-breadcrumb-item *ngFor=\"let i of paths\">\r\n          <ng-container *ngIf=\"i.link\">\r\n            <a [routerLink]=\"i.link\">{{i.title}}</a>\r\n          </ng-container>\r\n          <ng-container *ngIf=\"!i.link\">{{i.title}}</ng-container>\r\n        </nz-breadcrumb-item>\r\n      </nz-breadcrumb>\r\n    </ng-container>\r\n    <div class=\"page-header__detail\">\r\n      <div *ngIf=\"logo\" class=\"page-header__logo\">\r\n        <ng-template [ngTemplateOutlet]=\"logo\"></ng-template>\r\n      </div>\r\n      <div class=\"page-header__main\">\r\n        <div class=\"page-header__row\">\r\n          <h1 *ngIf=\"_title || _titleTpl\" class=\"page-header__title\">\r\n            <ng-container *ngIf=\"_title; else _titleTpl\">{{_title}}</ng-container>\r\n          </h1>\r\n          <div *ngIf=\"action\" class=\"page-header__action\">\r\n            <ng-template [ngTemplateOutlet]=\"action\"></ng-template>\r\n          </div>\r\n        </div>\r\n        <div class=\"page-header__row\">\r\n          <div class=\"page-header__desc\" (cdkObserveContent)=\"checkContent()\" #conTpl>\r\n            <ng-content></ng-content>\r\n            <ng-template [ngTemplateOutlet]=\"content\"></ng-template>\r\n          </div>\r\n          <div *ngIf=\"extra\" class=\"page-header__extra\">\r\n            <ng-template [ngTemplateOutlet]=\"extra\"></ng-template>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <ng-template [ngTemplateOutlet]=\"tab\"></ng-template>\r\n  </div>\r\n</ng-template>\r\n",
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
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], PageHeaderComponent.prototype, "autoBreadcrumb", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], PageHeaderComponent.prototype, "autoTitle", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], PageHeaderComponent.prototype, "syncTitle", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], PageHeaderComponent.prototype, "fixed", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], PageHeaderComponent.prototype, "fixedOffsetTop", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [PageHeaderComponent];
class PageHeaderModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: PageHeaderModule, providers: [PageHeaderConfig] };
    }
}
PageHeaderModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, RouterModule, DelonUtilModule, NgZorroAntdModule],
                declarations: [...COMPONENTS],
                exports: [...COMPONENTS],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { PageHeaderConfig, PageHeaderComponent, PageHeaderModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZUhlYWRlci5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGRlbG9uL2FiYy9wYWdlLWhlYWRlci9wYWdlLWhlYWRlci5jb25maWcudHMiLCJuZzovL0BkZWxvbi9hYmMvcGFnZS1oZWFkZXIvcGFnZS1oZWFkZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AZGVsb24vYWJjL3BhZ2UtaGVhZGVyL3BhZ2UtaGVhZGVyLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgUGFnZUhlYWRlckNvbmZpZyB7XHJcbiAgLyoqXHJcbiAgICogw6nCpsKWw6nCocK1w6bClsKHw6bCnMKsw6/CvMKMw6jCi8Klw6bCjMKHw6XCrsKaw6fCqcK6w6jCocKow6fCpMK6w6TCuMKNw6bCmMK+w6fCpMK6XHJcbiAgICovXHJcbiAgaG9tZT86IHN0cmluZyA9ICfDqcKmwpbDqcKhwrUnO1xyXG4gIC8qKlxyXG4gICAqIMOpwqbClsOpwqHCtcOpwpPCvsOmwo7CpVxyXG4gICAqL1xyXG4gIGhvbWVMaW5rPzogc3RyaW5nID0gJy8nO1xyXG4gIC8qKlxyXG4gICAqIMOpwqbClsOpwqHCtcOpwpPCvsOmwo7CpcOlwpvCvcOpwpnChcOlwozClsOlwo/CgsOmwpXCsFxyXG4gICAqL1xyXG4gIGhvbWVJMThuPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIMOowofCqsOlworCqMOnwpTCn8OmwojCkMOlwq/CvMOowojCqsOvwrzCjMOkwrvCpcOlwr3Ck8OlwonCjcOowrfCr8OnwpTCscOkwrvCjsOkwrjCu8Oowo/CnMOlwo3ClcOkwrjCrcOlwq7CmsOkwr3CjVxyXG4gICAqL1xyXG4gIGF1dG9CcmVhZGNydW1iPzogYm9vbGVhbiA9IHRydWU7XHJcbiAgLyoqXHJcbiAgICogw6jCh8Kqw6XCisKow6fClMKfw6bCiMKQw6bCoMKHw6nCosKYw6/CvMKMw6TCu8Klw6XCvcKTw6XCicKNw6jCt8Kvw6fClMKxw6TCu8KOw6TCuMK7w6jCj8Kcw6XCjcKVw6TCuMKtw6XCrsKaw6TCvcKNXHJcbiAgICovXHJcbiAgYXV0b1RpdGxlPzogYm9vbGVhbiA9IHRydWU7XHJcbiAgLyoqXHJcbiAgICogw6bCmMKvw6XCkMKmw6jCh8Kqw6XCisKow6XCsMKGw6bCoMKHw6XCh8KGw6TCv8Khw6bCgcKvw6XCkMKMw6bCrcKlw6jCh8KzIGBUaXRsZVNlcnZpY2Vgw6PCgMKBYFJldXNlU2VydmljZWAgw6TCuMKLXHJcbiAgICovXHJcbiAgc3luY1RpdGxlPzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIC8qKlxyXG4gICAqIMOmwpjCr8OlwpDCpsOlwpvCusOlwq7CmsOmwqjCocOlwrzCj1xyXG4gICAqL1xyXG4gIGZpeGVkPyA9IGZhbHNlO1xyXG4gIC8qKlxyXG4gICAqIMOlwpvCusOlwq7CmsOlwoHCj8OnwqfCu8OlwoDCvFxyXG4gICAqL1xyXG4gIGZpeGVkT2Zmc2V0VG9wPyA9IDY0O1xyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBPbkluaXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIEluamVjdCxcclxuICBPcHRpb25hbCxcclxuICBWaWV3Q2hpbGQsXHJcbiAgRWxlbWVudFJlZixcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIFJlbmRlcmVyMixcclxuICBPbkRlc3Ryb3ksXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE56QWZmaXhDb21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IGlzRW1wdHksIElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XHJcbmltcG9ydCB7XHJcbiAgTWVudVNlcnZpY2UsXHJcbiAgQUxBSU5fSTE4Tl9UT0tFTixcclxuICBBbGFpbkkxOE5TZXJ2aWNlLFxyXG4gIE1lbnUsXHJcbiAgVGl0bGVTZXJ2aWNlLFxyXG4gIFNldHRpbmdzU2VydmljZSxcclxufSBmcm9tICdAZGVsb24vdGhlbWUnO1xyXG5pbXBvcnQgeyBSZXVzZVRhYlNlcnZpY2UgfSBmcm9tICdAZGVsb24vYWJjL3JldXNlLXRhYic7XHJcblxyXG5pbXBvcnQgeyBQYWdlSGVhZGVyQ29uZmlnIH0gZnJvbSAnLi9wYWdlLWhlYWRlci5jb25maWcnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwYWdlLWhlYWRlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BhZ2UtaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBhZ2VIZWFkZXJDb21wb25lbnRcclxuICBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgaW5pdGVkID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBpMThuJDogU3Vic2NyaXB0aW9uO1xyXG4gIHByaXZhdGUgc2V0JDogU3Vic2NyaXB0aW9uO1xyXG4gIEBWaWV3Q2hpbGQoJ2NvblRwbCcpXHJcbiAgcHJpdmF0ZSBjb25UcGw6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnYWZmaXgnKVxyXG4gIHByaXZhdGUgYWZmaXg6IE56QWZmaXhDb21wb25lbnQ7XHJcbiAgcHJpdmF0ZSBfbWVudXM6IE1lbnVbXTtcclxuXHJcbiAgcHJpdmF0ZSBnZXQgbWVudXMoKSB7XHJcbiAgICBpZiAodGhpcy5fbWVudXMpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX21lbnVzO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fbWVudXMgPSB0aGlzLm1lbnVTcnYuZ2V0UGF0aEJ5VXJsKHRoaXMucm91dGUudXJsLnNwbGl0KCc/JylbMF0pO1xyXG5cclxuICAgIHJldHVybiB0aGlzLl9tZW51cztcclxuICB9XHJcblxyXG4gIC8vIHJlZ2lvbiBmaWVsZHNcclxuXHJcbiAgX3RpdGxlOiBzdHJpbmc7XHJcbiAgX3RpdGxlVHBsOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHRpdGxlKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XHJcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xyXG4gICAgICB0aGlzLl90aXRsZSA9IG51bGw7XHJcbiAgICAgIHRoaXMuX3RpdGxlVHBsID0gdmFsdWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl90aXRsZSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBob21lOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgaG9tZUxpbms6IHN0cmluZztcclxuXHJcbiAgQElucHV0KClcclxuICBob21lSTE4bjogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiDDqMKHwqrDpcKKwqjDp8KUwp/DpsKIwpDDpcKvwrzDqMKIwqrDr8K8wozDpMK7wqXDpcK9wpPDpcKJwo3DqMK3wq/Dp8KUwrHDpMK7wo7DpMK4wrvDqMKPwpzDpcKNwpXDpMK4wq3DpcKuwprDpMK9wo1cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIEBJbnB1dEJvb2xlYW4oKVxyXG4gIGF1dG9CcmVhZGNydW1iOiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiDDqMKHwqrDpcKKwqjDp8KUwp/DpsKIwpDDpsKgwofDqcKiwpjDr8K8wozDpMK7wqXDpcK9wpPDpcKJwo3DqMK3wq/Dp8KUwrHDpMK7wo7DpMK4wrvDqMKPwpzDpcKNwpXDpMK4wq3DpcKuwprDpMK9wo1cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIEBJbnB1dEJvb2xlYW4oKVxyXG4gIGF1dG9UaXRsZTogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogw6bCmMKvw6XCkMKmw6jCh8Kqw6XCisKow6XCsMKGw6bCoMKHw6nCosKYw6XCkMKMw6bCrcKlw6jCh8KzIGBUaXRsZVNlcnZpY2Vgw6PCgMKBYFJldXNlU2VydmljZWAgw6TCuMKLw6/CvMKMw6TCu8KFIGB0aXRsZWAgw6TCuMK6IGBzdHJpbmdgIMOnwrHCu8Olwp7Ci8OmwpfCtsOmwpzCicOmwpXCiFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgQElucHV0Qm9vbGVhbigpXHJcbiAgc3luY1RpdGxlOiBib29sZWFuO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIEBJbnB1dEJvb2xlYW4oKVxyXG4gIGZpeGVkOiBib29sZWFuO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIEBJbnB1dE51bWJlcigpXHJcbiAgZml4ZWRPZmZzZXRUb3A6IG51bWJlcjtcclxuXHJcbiAgcGF0aHM6IGFueVtdID0gW107XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgYnJlYWRjcnVtYjogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgQElucHV0KClcclxuICBsb2dvOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGFjdGlvbjogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgQElucHV0KClcclxuICBjb250ZW50OiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGV4dHJhOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHRhYjogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgLy8gZW5kcmVnaW9uXHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgY29nOiBQYWdlSGVhZGVyQ29uZmlnLFxyXG4gICAgc2V0dGluZ3M6IFNldHRpbmdzU2VydmljZSxcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgcm91dGU6IFJvdXRlcixcclxuICAgIHByaXZhdGUgbWVudVNydjogTWVudVNlcnZpY2UsXHJcbiAgICBAT3B0aW9uYWwoKVxyXG4gICAgQEluamVjdChBTEFJTl9JMThOX1RPS0VOKVxyXG4gICAgcHJpdmF0ZSBpMThuU3J2OiBBbGFpbkkxOE5TZXJ2aWNlLFxyXG4gICAgQE9wdGlvbmFsKClcclxuICAgIEBJbmplY3QoVGl0bGVTZXJ2aWNlKVxyXG4gICAgcHJpdmF0ZSB0aXRsZVNydjogVGl0bGVTZXJ2aWNlLFxyXG4gICAgQE9wdGlvbmFsKClcclxuICAgIEBJbmplY3QoUmV1c2VUYWJTZXJ2aWNlKVxyXG4gICAgcHJpdmF0ZSByZXVzZVNydjogUmV1c2VUYWJTZXJ2aWNlLFxyXG4gICkge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb2cpO1xyXG4gICAgaWYgKHRoaXMuaTE4blNydikge1xyXG4gICAgICB0aGlzLmkxOG4kID0gdGhpcy5pMThuU3J2LmNoYW5nZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5yZWZyZXNoKCkpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXQkID0gc2V0dGluZ3Mubm90aWZ5XHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIGZpbHRlcihcclxuICAgICAgICAgIHcgPT4gdGhpcy5hZmZpeCAmJiB3LnR5cGUgPT09ICdsYXlvdXQnICYmIHcubmFtZSA9PT0gJ2NvbGxhcHNlZCcsXHJcbiAgICAgICAgKSxcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuYWZmaXgudXBkYXRlUG9zaXRpb24oe30pKTtcclxuICB9XHJcblxyXG4gIHJlZnJlc2goKSB7XHJcbiAgICB0aGlzLnNldFRpdGxlKCkuZ2VuQnJlYWRjcnVtYigpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZW5CcmVhZGNydW1iKCkge1xyXG4gICAgaWYgKHRoaXMuYnJlYWRjcnVtYiB8fCAhdGhpcy5hdXRvQnJlYWRjcnVtYiB8fCB0aGlzLm1lbnVzLmxlbmd0aCA8PSAwKVxyXG4gICAgICByZXR1cm47XHJcbiAgICBjb25zdCBwYXRoczogYW55W10gPSBbXTtcclxuICAgIHRoaXMubWVudXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgaWYgKHR5cGVvZiBpdGVtLmhpZGVJbkJyZWFkY3J1bWIgIT09ICd1bmRlZmluZWQnICYmIGl0ZW0uaGlkZUluQnJlYWRjcnVtYilcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIGxldCB0aXRsZSA9IGl0ZW0udGV4dDtcclxuICAgICAgaWYgKGl0ZW0uaTE4biAmJiB0aGlzLmkxOG5TcnYpIHRpdGxlID0gdGhpcy5pMThuU3J2LmZhbnlpKGl0ZW0uaTE4bik7XHJcbiAgICAgIHBhdGhzLnB1c2goeyB0aXRsZSwgbGluazogaXRlbS5saW5rICYmIFtpdGVtLmxpbmtdIH0pO1xyXG4gICAgfSk7XHJcbiAgICAvLyBhZGQgaG9tZVxyXG4gICAgaWYgKHRoaXMuaG9tZSkge1xyXG4gICAgICBwYXRocy5zcGxpY2UoMCwgMCwge1xyXG4gICAgICAgIHRpdGxlOlxyXG4gICAgICAgICAgKHRoaXMuaG9tZUkxOG4gJiZcclxuICAgICAgICAgICAgdGhpcy5pMThuU3J2ICYmXHJcbiAgICAgICAgICAgIHRoaXMuaTE4blNydi5mYW55aSh0aGlzLmhvbWVJMThuKSkgfHxcclxuICAgICAgICAgIHRoaXMuaG9tZSxcclxuICAgICAgICBsaW5rOiBbdGhpcy5ob21lTGlua10sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5wYXRocyA9IHBhdGhzO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFRpdGxlKCkge1xyXG4gICAgaWYgKFxyXG4gICAgICB0eXBlb2YgdGhpcy5fdGl0bGUgPT09ICd1bmRlZmluZWQnICYmXHJcbiAgICAgIHR5cGVvZiB0aGlzLl90aXRsZVRwbCA9PT0gJ3VuZGVmaW5lZCcgJiZcclxuICAgICAgdGhpcy5hdXRvVGl0bGUgJiZcclxuICAgICAgdGhpcy5tZW51cy5sZW5ndGggPiAwXHJcbiAgICApIHtcclxuICAgICAgY29uc3QgaXRlbSA9IHRoaXMubWVudXNbdGhpcy5tZW51cy5sZW5ndGggLSAxXTtcclxuICAgICAgbGV0IHRpdGxlID0gaXRlbS50ZXh0O1xyXG4gICAgICBpZiAoaXRlbS5pMThuICYmIHRoaXMuaTE4blNydikgdGl0bGUgPSB0aGlzLmkxOG5TcnYuZmFueWkoaXRlbS5pMThuKTtcclxuICAgICAgdGhpcy5fdGl0bGUgPSB0aXRsZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5fdGl0bGUgJiYgdGhpcy5zeW5jVGl0bGUpIHtcclxuICAgICAgaWYgKHRoaXMudGl0bGVTcnYpIHtcclxuICAgICAgICB0aGlzLnRpdGxlU3J2LnNldFRpdGxlKHRoaXMuX3RpdGxlKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5yZXVzZVNydikge1xyXG4gICAgICAgIHRoaXMucmV1c2VTcnYudGl0bGUgPSB0aGlzLl90aXRsZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tDb250ZW50KCkge1xyXG4gICAgaWYgKGlzRW1wdHkodGhpcy5jb25UcGwubmF0aXZlRWxlbWVudCkpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5jb25UcGwubmF0aXZlRWxlbWVudCwgJ2hpZGRlbicsICcnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKHRoaXMuY29uVHBsLm5hdGl2ZUVsZW1lbnQsICdoaWRkZW4nKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgICB0aGlzLmluaXRlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNoZWNrQ29udGVudCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pbml0ZWQpIHRoaXMucmVmcmVzaCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pMThuJCkgdGhpcy5pMThuJC51bnN1YnNjcmliZSgpO1xyXG4gICAgdGhpcy5zZXQkLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE5nWm9ycm9BbnRkTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XHJcbmltcG9ydCB7IERlbG9uVXRpbE1vZHVsZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcclxuXHJcbmltcG9ydCB7IFBhZ2VIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL3BhZ2UtaGVhZGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBhZ2VIZWFkZXJDb25maWcgfSBmcm9tICcuL3BhZ2UtaGVhZGVyLmNvbmZpZyc7XHJcblxyXG5jb25zdCBDT01QT05FTlRTID0gW1BhZ2VIZWFkZXJDb21wb25lbnRdO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBSb3V0ZXJNb2R1bGUsIERlbG9uVXRpbE1vZHVsZSwgTmdab3Jyb0FudGRNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogWy4uLkNPTVBPTkVOVFNdLFxyXG4gIGV4cG9ydHM6IFsuLi5DT01QT05FTlRTXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBhZ2VIZWFkZXJNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHsgbmdNb2R1bGU6IFBhZ2VIZWFkZXJNb2R1bGUsIHByb3ZpZGVyczogW1BhZ2VIZWFkZXJDb25maWddIH07XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7OztvQkFJa0IsSUFBSTs7Ozt3QkFJQSxHQUFHOzs7OzhCQVFJLElBQUk7Ozs7eUJBSVQsSUFBSTs7Ozt5QkFJSixLQUFLOzs7O3FCQUlsQixLQUFLOzs7OzhCQUlJLEVBQUU7O0NBQ3JCOzs7Ozs7Ozs7Ozs7Ozs7OztJQ21HQyxZQUNFLEdBQXFCLEVBQ3JCLFFBQXlCLEVBQ2pCLFVBQ0EsT0FDQSxTQUdBLE9BQXlCLEVBR3pCLFFBQXNCLEVBR3RCLFFBQXlCO1FBWHpCLGFBQVEsR0FBUixRQUFRO1FBQ1IsVUFBSyxHQUFMLEtBQUs7UUFDTCxZQUFPLEdBQVAsT0FBTztRQUdQLFlBQU8sR0FBUCxPQUFPLENBQWtCO1FBR3pCLGFBQVEsR0FBUixRQUFRLENBQWM7UUFHdEIsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7c0JBMUdsQixLQUFLO3FCQXNFUCxFQUFFO1FBc0NmLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1NBQ2xFO1FBQ0QsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsTUFBTTthQUN4QixJQUFJLENBQ0gsTUFBTSxDQUNKLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssUUFBUSxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssV0FBVyxDQUNqRSxDQUNGO2FBQ0EsU0FBUyxDQUFDLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxj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