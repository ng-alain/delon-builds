import { __decorate, __metadata, __spread } from 'tslib';
import { Component, Input, TemplateRef, Inject, Optional, ViewChild, Renderer2, NgModule } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
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
var PageHeaderConfig = /** @class */ (function () {
    function PageHeaderConfig() {
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
         * 自动向上递归查找
         *  - 菜单数据源包含 `/ware`，则 `/ware/1` 也视为 `/ware` 项
         */
        this.recursiveBreadcrumb = false;
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
    return PageHeaderConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var PageHeaderComponent = /** @class */ (function () {
    // #endregion
    function PageHeaderComponent(cog, settings, renderer, router, menuSrv, i18nSrv, titleSrv, reuseSrv) {
        var _this = this;
        this.renderer = renderer;
        this.router = router;
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
            this.i18n$ = this.i18nSrv.change.subscribe(function () { return _this.refresh(); });
        }
        this.set$ = settings.notify
            .pipe(filter(function (w) { return _this.affix && w.type === 'layout' && w.name === 'collapsed'; }))
            .subscribe(function () { return _this.affix.updatePosition({}); });
        this.routerEvent$ = this.router.events
            .pipe(filter(function (event) { return event instanceof NavigationEnd; }))
            .subscribe(function (event) {
            _this._menus = null;
            _this.refresh();
        });
    }
    Object.defineProperty(PageHeaderComponent.prototype, "menus", {
        get: /**
         * @return {?}
         */
        function () {
            if (this._menus) {
                return this._menus;
            }
            this._menus = this.menuSrv.getPathByUrl(this.router.url.split('?')[0], this.recursiveBreadcrumb);
            return this._menus;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageHeaderComponent.prototype, "title", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value instanceof TemplateRef) {
                this._title = null;
                this._titleTpl = value;
            }
            else {
                this._title = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    PageHeaderComponent.prototype.refresh = /**
     * @return {?}
     */
    function () {
        this.setTitle().genBreadcrumb();
    };
    /**
     * @return {?}
     */
    PageHeaderComponent.prototype.genBreadcrumb = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.breadcrumb || !this.autoBreadcrumb || this.menus.length <= 0) {
            this.paths = [];
            return;
        }
        /** @type {?} */
        var paths = [];
        this.menus.forEach(function (item) {
            if (typeof item.hideInBreadcrumb !== 'undefined' && item.hideInBreadcrumb)
                return;
            /** @type {?} */
            var title = item.text;
            if (item.i18n && _this.i18nSrv)
                title = _this.i18nSrv.fanyi(item.i18n);
            paths.push({ title: title, link: item.link && [item.link] });
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
    };
    /**
     * @return {?}
     */
    PageHeaderComponent.prototype.setTitle = /**
     * @return {?}
     */
    function () {
        if (typeof this._title === 'undefined' &&
            typeof this._titleTpl === 'undefined' &&
            this.autoTitle &&
            this.menus.length > 0) {
            /** @type {?} */
            var item = this.menus[this.menus.length - 1];
            /** @type {?} */
            var title = item.text;
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
    };
    /**
     * @return {?}
     */
    PageHeaderComponent.prototype.checkContent = /**
     * @return {?}
     */
    function () {
        if (isEmpty(this.conTpl.nativeElement)) {
            this.renderer.setAttribute(this.conTpl.nativeElement, 'hidden', '');
        }
        else {
            this.renderer.removeAttribute(this.conTpl.nativeElement, 'hidden');
        }
    };
    /**
     * @return {?}
     */
    PageHeaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.refresh();
        this.inited = true;
    };
    /**
     * @return {?}
     */
    PageHeaderComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.checkContent();
    };
    /**
     * @return {?}
     */
    PageHeaderComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (this.inited)
            this.refresh();
    };
    /**
     * @return {?}
     */
    PageHeaderComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.i18n$)
            this.i18n$.unsubscribe();
        this.set$.unsubscribe();
        this.routerEvent$.unsubscribe();
    };
    PageHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'page-header',
                    template: "<nz-affix #affix *ngIf=\"fixed;else phTpl\" [nzOffsetTop]=\"fixedOffsetTop\">\n  <ng-template [ngTemplateOutlet]=\"phTpl\"></ng-template>\n</nz-affix>\n<ng-template #phTpl>\n  <div class=\"page-header\">\n    <div [ngClass]=\"{'page-header__wide': wide}\">\n      <nz-skeleton [nzLoading]=\"loading\" [nzTitle]=\"false\" [nzActive]=\"true\"\n        [nzParagraph]=\"{rows: 3}\" [nzAvatar]=\"{ size: 'large', shape: 'circle' }\">\n        <ng-container *ngIf=\"!breadcrumb; else breadcrumb\">\n          <nz-breadcrumb *ngIf=\"paths && paths.length > 0\">\n            <nz-breadcrumb-item *ngFor=\"let i of paths\">\n              <ng-container *ngIf=\"i.link\">\n                <a [routerLink]=\"i.link\">{{i.title}}</a>\n              </ng-container>\n              <ng-container *ngIf=\"!i.link\">{{i.title}}</ng-container>\n            </nz-breadcrumb-item>\n          </nz-breadcrumb>\n        </ng-container>\n        <div class=\"page-header__detail\">\n          <div *ngIf=\"logo\" class=\"page-header__logo\">\n            <ng-template [ngTemplateOutlet]=\"logo\"></ng-template>\n          </div>\n          <div class=\"page-header__main\">\n            <div class=\"page-header__row\">\n              <h1 *ngIf=\"_title || _titleTpl\" class=\"page-header__title\">\n                <ng-container *ngIf=\"_title; else _titleTpl\">{{_title}}</ng-container>\n              </h1>\n              <div *ngIf=\"action\" class=\"page-header__action\">\n                <ng-template [ngTemplateOutlet]=\"action\"></ng-template>\n              </div>\n            </div>\n            <div class=\"page-header__row\">\n              <div class=\"page-header__desc\" (cdkObserveContent)=\"checkContent()\" #conTpl>\n                <ng-content></ng-content>\n                <ng-template [ngTemplateOutlet]=\"content\"></ng-template>\n              </div>\n              <div *ngIf=\"extra\" class=\"page-header__extra\">\n                <ng-template [ngTemplateOutlet]=\"extra\"></ng-template>\n              </div>\n            </div>\n          </div>\n        </div>\n        <ng-template [ngTemplateOutlet]=\"tab\"></ng-template>\n      </nz-skeleton>\n    </div>\n  </div>\n</ng-template>\n",
                    preserveWhitespaces: false
                }] }
    ];
    /** @nocollapse */
    PageHeaderComponent.ctorParameters = function () { return [
        { type: PageHeaderConfig },
        { type: SettingsService },
        { type: Renderer2 },
        { type: Router },
        { type: MenuService },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [ALAIN_I18N_TOKEN,] }] },
        { type: TitleService, decorators: [{ type: Optional }, { type: Inject, args: [TitleService,] }] },
        { type: ReuseTabService, decorators: [{ type: Optional }, { type: Inject, args: [ReuseTabService,] }] }
    ]; };
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
        recursiveBreadcrumb: [{ type: Input }],
        logo: [{ type: Input }],
        action: [{ type: Input }],
        content: [{ type: Input }],
        extra: [{ type: Input }],
        tab: [{ type: Input }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], PageHeaderComponent.prototype, "loading", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], PageHeaderComponent.prototype, "wide", void 0);
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
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], PageHeaderComponent.prototype, "recursiveBreadcrumb", void 0);
    return PageHeaderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var COMPONENTS = [PageHeaderComponent];
var PageHeaderModule = /** @class */ (function () {
    function PageHeaderModule() {
    }
    /**
     * @return {?}
     */
    PageHeaderModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: PageHeaderModule, providers: [PageHeaderConfig] };
    };
    PageHeaderModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, RouterModule, DelonUtilModule, NgZorroAntdModule],
                    declarations: __spread(COMPONENTS),
                    exports: __spread(COMPONENTS),
                },] }
    ];
    return PageHeaderModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { PageHeaderConfig, PageHeaderComponent, PageHeaderModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZUhlYWRlci5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGRlbG9uL2FiYy9wYWdlLWhlYWRlci9wYWdlLWhlYWRlci5jb25maWcudHMiLCJuZzovL0BkZWxvbi9hYmMvcGFnZS1oZWFkZXIvcGFnZS1oZWFkZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AZGVsb24vYWJjL3BhZ2UtaGVhZGVyL3BhZ2UtaGVhZGVyLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgUGFnZUhlYWRlckNvbmZpZyB7XG4gIC8qKlxuICAgKiDDqcKmwpbDqcKhwrXDpsKWwofDpsKcwqzDr8K8wozDqMKLwqXDpsKMwofDpcKuwprDp8KpwrrDqMKhwqjDp8KkwrrDpMK4wo3DpsKYwr7Dp8KkwrpcbiAgICovXG4gIGhvbWU/OiBzdHJpbmcgPSAnw6nCpsKWw6nCocK1JztcbiAgLyoqXG4gICAqIMOpwqbClsOpwqHCtcOpwpPCvsOmwo7CpVxuICAgKi9cbiAgaG9tZUxpbms/OiBzdHJpbmcgPSAnLyc7XG4gIC8qKlxuICAgKiDDqcKmwpbDqcKhwrXDqcKTwr7DpsKOwqXDpcKbwr3DqcKZwoXDpcKMwpbDpcKPwoLDpsKVwrBcbiAgICovXG4gIGhvbWVJMThuPzogc3RyaW5nO1xuICAvKipcbiAgICogw6jCh8Kqw6XCisKow6fClMKfw6bCiMKQw6XCr8K8w6jCiMKqw6/CvMKMw6TCu8Klw6XCvcKTw6XCicKNw6jCt8Kvw6fClMKxw6TCu8KOw6TCuMK7w6jCj8Kcw6XCjcKVw6TCuMKtw6XCrsKaw6TCvcKNXG4gICAqL1xuICBhdXRvQnJlYWRjcnVtYj86IGJvb2xlYW4gPSB0cnVlO1xuICAvKipcbiAgICogw6jCh8Kqw6XCisKow6XCkMKRw6TCuMKKw6nCgMKSw6XCvcKSw6bCn8Klw6bCicK+XG4gICAqICAtIMOowo/CnMOlwo3ClcOmwpXCsMOmwo3CrsOmwrrCkMOlwozChcOlwpDCqyBgL3dhcmVgw6/CvMKMw6XCiMKZIGAvd2FyZS8xYCDDpMK5wp/DqMKnwobDpMK4wrogYC93YXJlYCDDqcKhwrlcbiAgICovXG4gIHJlY3Vyc2l2ZUJyZWFkY3J1bWI/OiBib29sZWFuID0gZmFsc2U7XG4gIC8qKlxuICAgKiDDqMKHwqrDpcKKwqjDp8KUwp/DpsKIwpDDpsKgwofDqcKiwpjDr8K8wozDpMK7wqXDpcK9wpPDpcKJwo3DqMK3wq/Dp8KUwrHDpMK7wo7DpMK4wrvDqMKPwpzDpcKNwpXDpMK4wq3DpcKuwprDpMK9wo1cbiAgICovXG4gIGF1dG9UaXRsZT86IGJvb2xlYW4gPSB0cnVlO1xuICAvKipcbiAgICogw6bCmMKvw6XCkMKmw6jCh8Kqw6XCisKow6XCsMKGw6bCoMKHw6XCh8KGw6TCv8Khw6bCgcKvw6XCkMKMw6bCrcKlw6jCh8KzIGBUaXRsZVNlcnZpY2Vgw6PCgMKBYFJldXNlU2VydmljZWAgw6TCuMKLXG4gICAqL1xuICBzeW5jVGl0bGU/OiBib29sZWFuID0gZmFsc2U7XG4gIC8qKlxuICAgKiDDpsKYwq/DpcKQwqbDpcKbwrrDpcKuwprDpsKowqHDpcK8wo9cbiAgICovXG4gIGZpeGVkPyA9IGZhbHNlO1xuICAvKipcbiAgICogw6XCm8K6w6XCrsKaw6XCgcKPw6fCp8K7w6XCgMK8XG4gICAqL1xuICBmaXhlZE9mZnNldFRvcD8gPSA2NDtcbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIFRlbXBsYXRlUmVmLFxuICBDb250ZW50Q2hpbGQsXG4gIE9uSW5pdCxcbiAgT25DaGFuZ2VzLFxuICBJbmplY3QsXG4gIE9wdGlvbmFsLFxuICBWaWV3Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIEFmdGVyVmlld0luaXQsXG4gIFJlbmRlcmVyMixcbiAgT25EZXN0cm95LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgUm91dGVyRXZlbnQsIE5hdmlnYXRpb25FbmQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTnpBZmZpeENvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IGlzRW1wdHksIElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQge1xuICBNZW51U2VydmljZSxcbiAgQUxBSU5fSTE4Tl9UT0tFTixcbiAgQWxhaW5JMThOU2VydmljZSxcbiAgTWVudSxcbiAgVGl0bGVTZXJ2aWNlLFxuICBTZXR0aW5nc1NlcnZpY2UsXG59IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBSZXVzZVRhYlNlcnZpY2UgfSBmcm9tICdAZGVsb24vYWJjL3JldXNlLXRhYic7XG5cbmltcG9ydCB7IFBhZ2VIZWFkZXJDb25maWcgfSBmcm9tICcuL3BhZ2UtaGVhZGVyLmNvbmZpZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhZ2UtaGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BhZ2UtaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2VIZWFkZXJDb21wb25lbnRcbiAgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBpbml0ZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBpMThuJDogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIHNldCQ6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSByb3V0ZXJFdmVudCQ6IFN1YnNjcmlwdGlvbjtcbiAgQFZpZXdDaGlsZCgnY29uVHBsJylcbiAgcHJpdmF0ZSBjb25UcGw6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2FmZml4JylcbiAgcHJpdmF0ZSBhZmZpeDogTnpBZmZpeENvbXBvbmVudDtcbiAgcHJpdmF0ZSBfbWVudXM6IE1lbnVbXTtcblxuICBwcml2YXRlIGdldCBtZW51cygpIHtcbiAgICBpZiAodGhpcy5fbWVudXMpIHtcbiAgICAgIHJldHVybiB0aGlzLl9tZW51cztcbiAgICB9XG4gICAgdGhpcy5fbWVudXMgPSB0aGlzLm1lbnVTcnYuZ2V0UGF0aEJ5VXJsKHRoaXMucm91dGVyLnVybC5zcGxpdCgnPycpWzBdLCB0aGlzLnJlY3Vyc2l2ZUJyZWFkY3J1bWIpO1xuXG4gICAgcmV0dXJuIHRoaXMuX21lbnVzO1xuICB9XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBfdGl0bGU6IHN0cmluZztcbiAgX3RpdGxlVHBsOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBASW5wdXQoKVxuICBzZXQgdGl0bGUodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgdGhpcy5fdGl0bGUgPSBudWxsO1xuICAgICAgdGhpcy5fdGl0bGVUcGwgPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdGl0bGUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKVxuICBASW5wdXRCb29sZWFuKClcbiAgbG9hZGluZyA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIEBJbnB1dEJvb2xlYW4oKVxuICB3aWRlID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgaG9tZTogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIGhvbWVMaW5rOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgaG9tZUkxOG46IHN0cmluZztcblxuICAvKipcbiAgICogw6jCh8Kqw6XCisKow6fClMKfw6bCiMKQw6XCr8K8w6jCiMKqw6/CvMKMw6TCu8Klw6XCvcKTw6XCicKNw6jCt8Kvw6fClMKxw6TCu8KOw6TCuMK7w6jCj8Kcw6XCjcKVw6TCuMKtw6XCrsKaw6TCvcKNXG4gICAqL1xuICBASW5wdXQoKVxuICBASW5wdXRCb29sZWFuKClcbiAgYXV0b0JyZWFkY3J1bWI6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIMOowofCqsOlworCqMOnwpTCn8OmwojCkMOmwqDCh8OpwqLCmMOvwrzCjMOkwrvCpcOlwr3Ck8OlwonCjcOowrfCr8OnwpTCscOkwrvCjsOkwrjCu8Oowo/CnMOlwo3ClcOkwrjCrcOlwq7CmsOkwr3CjVxuICAgKi9cbiAgQElucHV0KClcbiAgQElucHV0Qm9vbGVhbigpXG4gIGF1dG9UaXRsZTogYm9vbGVhbjtcblxuICAvKipcbiAgICogw6bCmMKvw6XCkMKmw6jCh8Kqw6XCisKow6XCsMKGw6bCoMKHw6nCosKYw6XCkMKMw6bCrcKlw6jCh8KzIGBUaXRsZVNlcnZpY2Vgw6PCgMKBYFJldXNlU2VydmljZWAgw6TCuMKLw6/CvMKMw6TCu8KFIGB0aXRsZWAgw6TCuMK6IGBzdHJpbmdgIMOnwrHCu8Olwp7Ci8OmwpfCtsOmwpzCicOmwpXCiFxuICAgKi9cbiAgQElucHV0KClcbiAgQElucHV0Qm9vbGVhbigpXG4gIHN5bmNUaXRsZTogYm9vbGVhbjtcblxuICBASW5wdXQoKVxuICBASW5wdXRCb29sZWFuKClcbiAgZml4ZWQ6IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgQElucHV0TnVtYmVyKClcbiAgZml4ZWRPZmZzZXRUb3A6IG51bWJlcjtcblxuICBwYXRoczogYW55W10gPSBbXTtcblxuICBASW5wdXQoKVxuICBicmVhZGNydW1iOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBJbnB1dCgpXG4gIEBJbnB1dEJvb2xlYW4oKVxuICByZWN1cnNpdmVCcmVhZGNydW1iOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIGxvZ286IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQElucHV0KClcbiAgYWN0aW9uOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBJbnB1dCgpXG4gIGNvbnRlbnQ6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQElucHV0KClcbiAgZXh0cmE6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQElucHV0KClcbiAgdGFiOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3RvcihcbiAgICBjb2c6IFBhZ2VIZWFkZXJDb25maWcsXG4gICAgc2V0dGluZ3M6IFNldHRpbmdzU2VydmljZSxcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIG1lbnVTcnY6IE1lbnVTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChBTEFJTl9JMThOX1RPS0VOKVxuICAgIHByaXZhdGUgaTE4blNydjogQWxhaW5JMThOU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoVGl0bGVTZXJ2aWNlKVxuICAgIHByaXZhdGUgdGl0bGVTcnY6IFRpdGxlU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoUmV1c2VUYWJTZXJ2aWNlKVxuICAgIHByaXZhdGUgcmV1c2VTcnY6IFJldXNlVGFiU2VydmljZSxcbiAgKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb2cpO1xuICAgIGlmICh0aGlzLmkxOG5TcnYpIHtcbiAgICAgIHRoaXMuaTE4biQgPSB0aGlzLmkxOG5TcnYuY2hhbmdlLnN1YnNjcmliZSgoKSA9PiB0aGlzLnJlZnJlc2goKSk7XG4gICAgfVxuICAgIHRoaXMuc2V0JCA9IHNldHRpbmdzLm5vdGlmeVxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcihcbiAgICAgICAgICB3ID0+IHRoaXMuYWZmaXggJiYgdy50eXBlID09PSAnbGF5b3V0JyAmJiB3Lm5hbWUgPT09ICdjb2xsYXBzZWQnLFxuICAgICAgICApLFxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmFmZml4LnVwZGF0ZVBvc2l0aW9uKHt9KSk7XG4gICAgdGhpcy5yb3V0ZXJFdmVudCQgPSB0aGlzLnJvdXRlci5ldmVudHNcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoKGV2ZW50OiBSb3V0ZXJFdmVudCkgPT4gZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKGV2ZW50OiBSb3V0ZXJFdmVudCkgPT4ge1xuICAgICAgICAgIHRoaXMuX21lbnVzID0gbnVsbDtcbiAgICAgICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5zZXRUaXRsZSgpLmdlbkJyZWFkY3J1bWIoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuQnJlYWRjcnVtYigpIHtcbiAgICBpZiAodGhpcy5icmVhZGNydW1iIHx8ICF0aGlzLmF1dG9CcmVhZGNydW1iIHx8IHRoaXMubWVudXMubGVuZ3RoIDw9IDApIHtcbiAgICAgIHRoaXMucGF0aHMgPSBbXTtcbiAgICAgIHJldHVybiA7XG4gICAgfVxuICAgIGNvbnN0IHBhdGhzOiBhbnlbXSA9IFtdO1xuICAgIHRoaXMubWVudXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGlmICh0eXBlb2YgaXRlbS5oaWRlSW5CcmVhZGNydW1iICE9PSAndW5kZWZpbmVkJyAmJiBpdGVtLmhpZGVJbkJyZWFkY3J1bWIpXG4gICAgICAgIHJldHVybjtcbiAgICAgIGxldCB0aXRsZSA9IGl0ZW0udGV4dDtcbiAgICAgIGlmIChpdGVtLmkxOG4gJiYgdGhpcy5pMThuU3J2KSB0aXRsZSA9IHRoaXMuaTE4blNydi5mYW55aShpdGVtLmkxOG4pO1xuICAgICAgcGF0aHMucHVzaCh7IHRpdGxlLCBsaW5rOiBpdGVtLmxpbmsgJiYgW2l0ZW0ubGlua10gfSk7XG4gICAgfSk7XG4gICAgLy8gYWRkIGhvbWVcbiAgICBpZiAodGhpcy5ob21lKSB7XG4gICAgICBwYXRocy5zcGxpY2UoMCwgMCwge1xuICAgICAgICB0aXRsZTpcbiAgICAgICAgICAodGhpcy5ob21lSTE4biAmJlxuICAgICAgICAgICAgdGhpcy5pMThuU3J2ICYmXG4gICAgICAgICAgICB0aGlzLmkxOG5TcnYuZmFueWkodGhpcy5ob21lSTE4bikpIHx8XG4gICAgICAgICAgdGhpcy5ob21lLFxuICAgICAgICBsaW5rOiBbdGhpcy5ob21lTGlua10sXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5wYXRocyA9IHBhdGhzO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRUaXRsZSgpIHtcbiAgICBpZiAoXG4gICAgICB0eXBlb2YgdGhpcy5fdGl0bGUgPT09ICd1bmRlZmluZWQnICYmXG4gICAgICB0eXBlb2YgdGhpcy5fdGl0bGVUcGwgPT09ICd1bmRlZmluZWQnICYmXG4gICAgICB0aGlzLmF1dG9UaXRsZSAmJlxuICAgICAgdGhpcy5tZW51cy5sZW5ndGggPiAwXG4gICAgKSB7XG4gICAgICBjb25zdCBpdGVtID0gdGhpcy5tZW51c1t0aGlzLm1lbnVzLmxlbmd0aCAtIDFdO1xuICAgICAgbGV0IHRpdGxlID0gaXRlbS50ZXh0O1xuICAgICAgaWYgKGl0ZW0uaTE4biAmJiB0aGlzLmkxOG5TcnYpIHRpdGxlID0gdGhpcy5pMThuU3J2LmZhbnlpKGl0ZW0uaTE4bik7XG4gICAgICB0aGlzLl90aXRsZSA9IHRpdGxlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl90aXRsZSAmJiB0aGlzLnN5bmNUaXRsZSkge1xuICAgICAgaWYgKHRoaXMudGl0bGVTcnYpIHtcbiAgICAgICAgdGhpcy50aXRsZVNydi5zZXRUaXRsZSh0aGlzLl90aXRsZSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5yZXVzZVNydikge1xuICAgICAgICB0aGlzLnJldXNlU3J2LnRpdGxlID0gdGhpcy5fdGl0bGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjaGVja0NvbnRlbnQoKSB7XG4gICAgaWYgKGlzRW1wdHkodGhpcy5jb25UcGwubmF0aXZlRWxlbWVudCkpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuY29uVHBsLm5hdGl2ZUVsZW1lbnQsICdoaWRkZW4nLCAnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKHRoaXMuY29uVHBsLm5hdGl2ZUVsZW1lbnQsICdoaWRkZW4nKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgICB0aGlzLmluaXRlZCA9IHRydWU7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja0NvbnRlbnQoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmluaXRlZCkgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pMThuJCkgdGhpcy5pMThuJC51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuc2V0JC51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMucm91dGVyRXZlbnQkLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE5nWm9ycm9BbnRkTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XG5pbXBvcnQgeyBEZWxvblV0aWxNb2R1bGUgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbmltcG9ydCB7IFBhZ2VIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL3BhZ2UtaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYWdlSGVhZGVyQ29uZmlnIH0gZnJvbSAnLi9wYWdlLWhlYWRlci5jb25maWcnO1xuXG5jb25zdCBDT01QT05FTlRTID0gW1BhZ2VIZWFkZXJDb21wb25lbnRdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBSb3V0ZXJNb2R1bGUsIERlbG9uVXRpbE1vZHVsZSwgTmdab3Jyb0FudGRNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRTXSxcbiAgZXhwb3J0czogWy4uLkNPTVBPTkVOVFNdLFxufSlcbmV4cG9ydCBjbGFzcyBQYWdlSGVhZGVyTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHsgbmdNb2R1bGU6IFBhZ2VIZWFkZXJNb2R1bGUsIHByb3ZpZGVyczogW1BhZ2VIZWFkZXJDb25maWddIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLElBQUE7Ozs7O29CQUlrQixJQUFJOzs7O3dCQUlBLEdBQUc7Ozs7OEJBUUksSUFBSTs7Ozs7bUNBS0MsS0FBSzs7Ozt5QkFJZixJQUFJOzs7O3lCQUlKLEtBQUs7Ozs7cUJBSWxCLEtBQUs7Ozs7OEJBSUksRUFBRTs7MkJBckN0QjtJQXNDQzs7Ozs7Ozs7SUMyR0MsNkJBQ0UsR0FBcUIsRUFDckIsUUFBeUIsRUFDakIsVUFDQSxRQUNBLFNBR0EsT0FBeUIsRUFHekIsUUFBc0IsRUFHdEIsUUFBeUI7UUFkbkMsaUJBcUNDO1FBbENTLGFBQVEsR0FBUixRQUFRO1FBQ1IsV0FBTSxHQUFOLE1BQU07UUFDTixZQUFPLEdBQVAsT0FBTztRQUdQLFlBQU8sR0FBUCxPQUFPLENBQWtCO1FBR3pCLGFBQVEsR0FBUixRQUFRLENBQWM7UUFHdEIsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7c0JBdkhsQixLQUFLO3VCQW1DWixLQUFLO29CQUlSLEtBQUs7cUJBd0NHLEVBQUU7UUEwQ2YsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDekIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUks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