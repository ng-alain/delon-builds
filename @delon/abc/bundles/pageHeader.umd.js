/**
 * @license ng-alain(cipchk@qq.com) v2.0.0
 * (c) 2018 Cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('rxjs/operators'), require('@delon/util'), require('@delon/theme'), require('@delon/abc/reuse-tab'), require('@angular/common'), require('ng-zorro-antd')) :
    typeof define === 'function' && define.amd ? define('@delon/abc/page-header', ['exports', '@angular/core', '@angular/router', 'rxjs/operators', '@delon/util', '@delon/theme', '@delon/abc/reuse-tab', '@angular/common', 'ng-zorro-antd'], factory) :
    (factory((global.delon = global.delon || {}, global.delon.abc = global.delon.abc || {}, global.delon.abc['page-header'] = {}),global.ng.core,global.ng.router,global.rxjs.operators,global.delon.util,global.delon.theme,global.delon.abc['reuse-tab'],global.ng.common,global.ngZorro.antd));
}(this, (function (exports,core,router,operators,util,theme,reuseTab,common,ngZorroAntd) { 'use strict';

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

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var PageHeaderComponent = /** @class */ (function () {
        // #endregion
        function PageHeaderComponent(cog, settings, renderer, router$$1, menuSrv, i18nSrv, titleSrv, reuseSrv) {
            var _this = this;
            this.renderer = renderer;
            this.router = router$$1;
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
                .pipe(operators.filter(function (w) { return _this.affix && w.type === 'layout' && w.name === 'collapsed'; }))
                .subscribe(function () { return _this.affix.updatePosition({}); });
            this.routerEvent$ = this.router.events
                .pipe(operators.filter(function (event) { return event instanceof router.NavigationEnd; }))
                .subscribe(function (event) {
                _this._menus = null;
                _this.refresh();
            });
        }
        Object.defineProperty(PageHeaderComponent.prototype, "menus", {
            get: /**
             * @return {?}
             */ function () {
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
             */ function (value) {
                if (value instanceof core.TemplateRef) {
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
                if (util.isEmpty(this.conTpl.nativeElement)) {
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
            { type: core.Component, args: [{
                        selector: 'page-header',
                        template: "<nz-affix #affix *ngIf=\"fixed;else phTpl\" [nzOffsetTop]=\"fixedOffsetTop\">\n  <ng-template [ngTemplateOutlet]=\"phTpl\"></ng-template>\n</nz-affix>\n<ng-template #phTpl>\n  <div class=\"page-header\">\n    <div [ngClass]=\"{'page-header__wide': wide}\">\n      <nz-skeleton [nzLoading]=\"loading\" [nzTitle]=\"false\" [nzActive]=\"true\"\n        [nzParagraph]=\"{rows: 3}\" [nzAvatar]=\"{ size: 'large', shape: 'circle' }\">\n        <ng-container *ngIf=\"!breadcrumb; else breadcrumb\">\n          <nz-breadcrumb *ngIf=\"paths && paths.length > 0\">\n            <nz-breadcrumb-item *ngFor=\"let i of paths\">\n              <ng-container *ngIf=\"i.link\">\n                <a [routerLink]=\"i.link\">{{i.title}}</a>\n              </ng-container>\n              <ng-container *ngIf=\"!i.link\">{{i.title}}</ng-container>\n            </nz-breadcrumb-item>\n          </nz-breadcrumb>\n        </ng-container>\n        <div class=\"page-header__detail\">\n          <div *ngIf=\"logo\" class=\"page-header__logo\">\n            <ng-template [ngTemplateOutlet]=\"logo\"></ng-template>\n          </div>\n          <div class=\"page-header__main\">\n            <div class=\"page-header__row\">\n              <h1 *ngIf=\"_title || _titleTpl\" class=\"page-header__title\">\n                <ng-container *ngIf=\"_title; else _titleTpl\">{{_title}}</ng-container>\n              </h1>\n              <div *ngIf=\"action\" class=\"page-header__action\">\n                <ng-template [ngTemplateOutlet]=\"action\"></ng-template>\n              </div>\n            </div>\n            <div class=\"page-header__row\">\n              <div class=\"page-header__desc\" (cdkObserveContent)=\"checkContent()\" #conTpl>\n                <ng-content></ng-content>\n                <ng-template [ngTemplateOutlet]=\"content\"></ng-template>\n              </div>\n              <div *ngIf=\"extra\" class=\"page-header__extra\">\n                <ng-template [ngTemplateOutlet]=\"extra\"></ng-template>\n              </div>\n            </div>\n          </div>\n        </div>\n        <ng-template [ngTemplateOutlet]=\"tab\"></ng-template>\n      </nz-skeleton>\n    </div>\n  </div>\n</ng-template>\n",
                        preserveWhitespaces: false
                    }] }
        ];
        /** @nocollapse */
        PageHeaderComponent.ctorParameters = function () {
            return [
                { type: PageHeaderConfig },
                { type: theme.SettingsService },
                { type: core.Renderer2 },
                { type: router.Router },
                { type: theme.MenuService },
                { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [theme.ALAIN_I18N_TOKEN,] }] },
                { type: theme.TitleService, decorators: [{ type: core.Optional }, { type: core.Inject, args: [theme.TitleService,] }] },
                { type: reuseTab.ReuseTabService, decorators: [{ type: core.Optional }, { type: core.Inject, args: [reuseTab.ReuseTabService,] }] }
            ];
        };
        PageHeaderComponent.propDecorators = {
            conTpl: [{ type: core.ViewChild, args: ['conTpl',] }],
            affix: [{ type: core.ViewChild, args: ['affix',] }],
            title: [{ type: core.Input }],
            loading: [{ type: core.Input }],
            wide: [{ type: core.Input }],
            home: [{ type: core.Input }],
            homeLink: [{ type: core.Input }],
            homeI18n: [{ type: core.Input }],
            autoBreadcrumb: [{ type: core.Input }],
            autoTitle: [{ type: core.Input }],
            syncTitle: [{ type: core.Input }],
            fixed: [{ type: core.Input }],
            fixedOffsetTop: [{ type: core.Input }],
            breadcrumb: [{ type: core.Input }],
            recursiveBreadcrumb: [{ type: core.Input }],
            logo: [{ type: core.Input }],
            action: [{ type: core.Input }],
            content: [{ type: core.Input }],
            extra: [{ type: core.Input }],
            tab: [{ type: core.Input }]
        };
        __decorate([
            util.InputBoolean(),
            __metadata("design:type", Object)
        ], PageHeaderComponent.prototype, "loading", void 0);
        __decorate([
            util.InputBoolean(),
            __metadata("design:type", Object)
        ], PageHeaderComponent.prototype, "wide", void 0);
        __decorate([
            util.InputBoolean(),
            __metadata("design:type", Boolean)
        ], PageHeaderComponent.prototype, "autoBreadcrumb", void 0);
        __decorate([
            util.InputBoolean(),
            __metadata("design:type", Boolean)
        ], PageHeaderComponent.prototype, "autoTitle", void 0);
        __decorate([
            util.InputBoolean(),
            __metadata("design:type", Boolean)
        ], PageHeaderComponent.prototype, "syncTitle", void 0);
        __decorate([
            util.InputBoolean(),
            __metadata("design:type", Boolean)
        ], PageHeaderComponent.prototype, "fixed", void 0);
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Number)
        ], PageHeaderComponent.prototype, "fixedOffsetTop", void 0);
        __decorate([
            util.InputBoolean(),
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
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, router.RouterModule, util.DelonUtilModule, ngZorroAntd.NgZorroAntdModule],
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

    exports.PageHeaderConfig = PageHeaderConfig;
    exports.PageHeaderComponent = PageHeaderComponent;
    exports.PageHeaderModule = PageHeaderModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZUhlYWRlci51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BkZWxvbi9hYmMvcGFnZS1oZWFkZXIvcGFnZS1oZWFkZXIuY29uZmlnLnRzIiwibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm5nOi8vQGRlbG9uL2FiYy9wYWdlLWhlYWRlci9wYWdlLWhlYWRlci5jb21wb25lbnQudHMiLCJuZzovL0BkZWxvbi9hYmMvcGFnZS1oZWFkZXIvcGFnZS1oZWFkZXIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBQYWdlSGVhZGVyQ29uZmlnIHtcbiAgLyoqXG4gICAqIMOpwqbClsOpwqHCtcOmwpbCh8OmwpzCrMOvwrzCjMOowovCpcOmwozCh8Olwq7CmsOnwqnCusOowqHCqMOnwqTCusOkwrjCjcOmwpjCvsOnwqTCulxuICAgKi9cbiAgaG9tZT86IHN0cmluZyA9ICfDqcKmwpbDqcKhwrUnO1xuICAvKipcbiAgICogw6nCpsKWw6nCocK1w6nCk8K+w6bCjsKlXG4gICAqL1xuICBob21lTGluaz86IHN0cmluZyA9ICcvJztcbiAgLyoqXG4gICAqIMOpwqbClsOpwqHCtcOpwpPCvsOmwo7CpcOlwpvCvcOpwpnChcOlwozClsOlwo/CgsOmwpXCsFxuICAgKi9cbiAgaG9tZUkxOG4/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDDqMKHwqrDpcKKwqjDp8KUwp/DpsKIwpDDpcKvwrzDqMKIwqrDr8K8wozDpMK7wqXDpcK9wpPDpcKJwo3DqMK3wq/Dp8KUwrHDpMK7wo7DpMK4wrvDqMKPwpzDpcKNwpXDpMK4wq3DpcKuwprDpMK9wo1cbiAgICovXG4gIGF1dG9CcmVhZGNydW1iPzogYm9vbGVhbiA9IHRydWU7XG4gIC8qKlxuICAgKiDDqMKHwqrDpcKKwqjDpcKQwpHDpMK4worDqcKAwpLDpcK9wpLDpsKfwqXDpsKJwr5cbiAgICogIC0gw6jCj8Kcw6XCjcKVw6bClcKww6bCjcKuw6bCusKQw6XCjMKFw6XCkMKrIGAvd2FyZWDDr8K8wozDpcKIwpkgYC93YXJlLzFgIMOkwrnCn8OowqfChsOkwrjCuiBgL3dhcmVgIMOpwqHCuVxuICAgKi9cbiAgcmVjdXJzaXZlQnJlYWRjcnVtYj86IGJvb2xlYW4gPSBmYWxzZTtcbiAgLyoqXG4gICAqIMOowofCqsOlworCqMOnwpTCn8OmwojCkMOmwqDCh8OpwqLCmMOvwrzCjMOkwrvCpcOlwr3Ck8OlwonCjcOowrfCr8OnwpTCscOkwrvCjsOkwrjCu8Oowo/CnMOlwo3ClcOkwrjCrcOlwq7CmsOkwr3CjVxuICAgKi9cbiAgYXV0b1RpdGxlPzogYm9vbGVhbiA9IHRydWU7XG4gIC8qKlxuICAgKiDDpsKYwq/DpcKQwqbDqMKHwqrDpcKKwqjDpcKwwobDpsKgwofDpcKHwobDpMK/wqHDpsKBwq/DpcKQwozDpsKtwqXDqMKHwrMgYFRpdGxlU2VydmljZWDDo8KAwoFgUmV1c2VTZXJ2aWNlYCDDpMK4wotcbiAgICovXG4gIHN5bmNUaXRsZT86IGJvb2xlYW4gPSBmYWxzZTtcbiAgLyoqXG4gICAqIMOmwpjCr8OlwpDCpsOlwpvCusOlwq7CmsOmwqjCocOlwrzCj1xuICAgKi9cbiAgZml4ZWQ/ID0gZmFsc2U7XG4gIC8qKlxuICAgKiDDpcKbwrrDpcKuwprDpcKBwo/Dp8KnwrvDpcKAwrxcbiAgICovXG4gIGZpeGVkT2Zmc2V0VG9wPyA9IDY0O1xufVxuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBUZW1wbGF0ZVJlZixcbiAgQ29udGVudENoaWxkLFxuICBPbkluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgSW5qZWN0LFxuICBPcHRpb25hbCxcbiAgVmlld0NoaWxkLFxuICBFbGVtZW50UmVmLFxuICBBZnRlclZpZXdJbml0LFxuICBSZW5kZXJlcjIsXG4gIE9uRGVzdHJveSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlckV2ZW50LCBOYXZpZ2F0aW9uRW5kIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE56QWZmaXhDb21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBpc0VtcHR5LCBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHtcbiAgTWVudVNlcnZpY2UsXG4gIEFMQUlOX0kxOE5fVE9LRU4sXG4gIEFsYWluSTE4TlNlcnZpY2UsXG4gIE1lbnUsXG4gIFRpdGxlU2VydmljZSxcbiAgU2V0dGluZ3NTZXJ2aWNlLFxufSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgUmV1c2VUYWJTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL2FiYy9yZXVzZS10YWInO1xuXG5pbXBvcnQgeyBQYWdlSGVhZGVyQ29uZmlnIH0gZnJvbSAnLi9wYWdlLWhlYWRlci5jb25maWcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwYWdlLWhlYWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYWdlLWhlYWRlci5jb21wb25lbnQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBQYWdlSGVhZGVyQ29tcG9uZW50XG4gIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgaW5pdGVkID0gZmFsc2U7XG4gIHByaXZhdGUgaTE4biQ6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBzZXQkOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgcm91dGVyRXZlbnQkOiBTdWJzY3JpcHRpb247XG4gIEBWaWV3Q2hpbGQoJ2NvblRwbCcpXG4gIHByaXZhdGUgY29uVHBsOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdhZmZpeCcpXG4gIHByaXZhdGUgYWZmaXg6IE56QWZmaXhDb21wb25lbnQ7XG4gIHByaXZhdGUgX21lbnVzOiBNZW51W107XG5cbiAgcHJpdmF0ZSBnZXQgbWVudXMoKSB7XG4gICAgaWYgKHRoaXMuX21lbnVzKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbWVudXM7XG4gICAgfVxuICAgIHRoaXMuX21lbnVzID0gdGhpcy5tZW51U3J2LmdldFBhdGhCeVVybCh0aGlzLnJvdXRlci51cmwuc3BsaXQoJz8nKVswXSwgdGhpcy5yZWN1cnNpdmVCcmVhZGNydW1iKTtcblxuICAgIHJldHVybiB0aGlzLl9tZW51cztcbiAgfVxuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgX3RpdGxlOiBzdHJpbmc7XG4gIF90aXRsZVRwbDogVGVtcGxhdGVSZWY8YW55PjtcbiAgQElucHV0KClcbiAgc2V0IHRpdGxlKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIHRoaXMuX3RpdGxlID0gbnVsbDtcbiAgICAgIHRoaXMuX3RpdGxlVHBsID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3RpdGxlID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KClcbiAgQElucHV0Qm9vbGVhbigpXG4gIGxvYWRpbmcgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBASW5wdXRCb29sZWFuKClcbiAgd2lkZSA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIGhvbWU6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBob21lTGluazogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIGhvbWVJMThuOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIMOowofCqsOlworCqMOnwpTCn8OmwojCkMOlwq/CvMOowojCqsOvwrzCjMOkwrvCpcOlwr3Ck8OlwonCjcOowrfCr8OnwpTCscOkwrvCjsOkwrjCu8Oowo/CnMOlwo3ClcOkwrjCrcOlwq7CmsOkwr3CjVxuICAgKi9cbiAgQElucHV0KClcbiAgQElucHV0Qm9vbGVhbigpXG4gIGF1dG9CcmVhZGNydW1iOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDDqMKHwqrDpcKKwqjDp8KUwp/DpsKIwpDDpsKgwofDqcKiwpjDr8K8wozDpMK7wqXDpcK9wpPDpcKJwo3DqMK3wq/Dp8KUwrHDpMK7wo7DpMK4wrvDqMKPwpzDpcKNwpXDpMK4wq3DpcKuwprDpMK9wo1cbiAgICovXG4gIEBJbnB1dCgpXG4gIEBJbnB1dEJvb2xlYW4oKVxuICBhdXRvVGl0bGU6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIMOmwpjCr8OlwpDCpsOowofCqsOlworCqMOlwrDChsOmwqDCh8OpwqLCmMOlwpDCjMOmwq3CpcOowofCsyBgVGl0bGVTZXJ2aWNlYMOjwoDCgWBSZXVzZVNlcnZpY2VgIMOkwrjCi8OvwrzCjMOkwrvChSBgdGl0bGVgIMOkwrjCuiBgc3RyaW5nYCDDp8KxwrvDpcKewovDpsKXwrbDpsKcwonDpsKVwohcbiAgICovXG4gIEBJbnB1dCgpXG4gIEBJbnB1dEJvb2xlYW4oKVxuICBzeW5jVGl0bGU6IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgQElucHV0Qm9vbGVhbigpXG4gIGZpeGVkOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIEBJbnB1dE51bWJlcigpXG4gIGZpeGVkT2Zmc2V0VG9wOiBudW1iZXI7XG5cbiAgcGF0aHM6IGFueVtdID0gW107XG5cbiAgQElucHV0KClcbiAgYnJlYWRjcnVtYjogVGVtcGxhdGVSZWY8YW55PjtcblxuICBASW5wdXQoKVxuICBASW5wdXRCb29sZWFuKClcbiAgcmVjdXJzaXZlQnJlYWRjcnVtYjogYm9vbGVhbjtcblxuICBASW5wdXQoKVxuICBsb2dvOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBJbnB1dCgpXG4gIGFjdGlvbjogVGVtcGxhdGVSZWY8YW55PjtcblxuICBASW5wdXQoKVxuICBjb250ZW50OiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBJbnB1dCgpXG4gIGV4dHJhOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBJbnB1dCgpXG4gIHRhYjogVGVtcGxhdGVSZWY8YW55PjtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgY29uc3RydWN0b3IoXG4gICAgY29nOiBQYWdlSGVhZGVyQ29uZmlnLFxuICAgIHNldHRpbmdzOiBTZXR0aW5nc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBtZW51U3J2OiBNZW51U2VydmljZSxcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoQUxBSU5fSTE4Tl9UT0tFTilcbiAgICBwcml2YXRlIGkxOG5TcnY6IEFsYWluSTE4TlNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KFRpdGxlU2VydmljZSlcbiAgICBwcml2YXRlIHRpdGxlU3J2OiBUaXRsZVNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KFJldXNlVGFiU2VydmljZSlcbiAgICBwcml2YXRlIHJldXNlU3J2OiBSZXVzZVRhYlNlcnZpY2UsXG4gICkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29nKTtcbiAgICBpZiAodGhpcy5pMThuU3J2KSB7XG4gICAgICB0aGlzLmkxOG4kID0gdGhpcy5pMThuU3J2LmNoYW5nZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5yZWZyZXNoKCkpO1xuICAgIH1cbiAgICB0aGlzLnNldCQgPSBzZXR0aW5ncy5ub3RpZnlcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoXG4gICAgICAgICAgdyA9PiB0aGlzLmFmZml4ICYmIHcudHlwZSA9PT0gJ2xheW91dCcgJiYgdy5uYW1lID09PSAnY29sbGFwc2VkJyxcbiAgICAgICAgKSxcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5hZmZpeC51cGRhdGVQb3NpdGlvbih7fSkpO1xuICAgIHRoaXMucm91dGVyRXZlbnQkID0gdGhpcy5yb3V0ZXIuZXZlbnRzXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKChldmVudDogUm91dGVyRXZlbnQpID0+IGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChldmVudDogUm91dGVyRXZlbnQpID0+IHtcbiAgICAgICAgICB0aGlzLl9tZW51cyA9IG51bGw7XG4gICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIHRoaXMuc2V0VGl0bGUoKS5nZW5CcmVhZGNydW1iKCk7XG4gIH1cblxuICBwcml2YXRlIGdlbkJyZWFkY3J1bWIoKSB7XG4gICAgaWYgKHRoaXMuYnJlYWRjcnVtYiB8fCAhdGhpcy5hdXRvQnJlYWRjcnVtYiB8fCB0aGlzLm1lbnVzLmxlbmd0aCA8PSAwKSB7XG4gICAgICB0aGlzLnBhdGhzID0gW107XG4gICAgICByZXR1cm4gO1xuICAgIH1cbiAgICBjb25zdCBwYXRoczogYW55W10gPSBbXTtcbiAgICB0aGlzLm1lbnVzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpZiAodHlwZW9mIGl0ZW0uaGlkZUluQnJlYWRjcnVtYiAhPT0gJ3VuZGVmaW5lZCcgJiYgaXRlbS5oaWRlSW5CcmVhZGNydW1iKVxuICAgICAgICByZXR1cm47XG4gICAgICBsZXQgdGl0bGUgPSBpdGVtLnRleHQ7XG4gICAgICBpZiAoaXRlbS5pMThuICYmIHRoaXMuaTE4blNydikgdGl0bGUgPSB0aGlzLmkxOG5TcnYuZmFueWkoaXRlbS5pMThuKTtcbiAgICAgIHBhdGhzLnB1c2goeyB0aXRsZSwgbGluazogaXRlbS5saW5rICYmIFtpdGVtLmxpbmtdIH0pO1xuICAgIH0pO1xuICAgIC8vIGFkZCBob21lXG4gICAgaWYgKHRoaXMuaG9tZSkge1xuICAgICAgcGF0aHMuc3BsaWNlKDAsIDAsIHtcbiAgICAgICAgdGl0bGU6XG4gICAgICAgICAgKHRoaXMuaG9tZUkxOG4gJiZcbiAgICAgICAgICAgIHRoaXMuaTE4blNydiAmJlxuICAgICAgICAgICAgdGhpcy5pMThuU3J2LmZhbnlpKHRoaXMuaG9tZUkxOG4pKSB8fFxuICAgICAgICAgIHRoaXMuaG9tZSxcbiAgICAgICAgbGluazogW3RoaXMuaG9tZUxpbmtdLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMucGF0aHMgPSBwYXRocztcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByaXZhdGUgc2V0VGl0bGUoKSB7XG4gICAgaWYgKFxuICAgICAgdHlwZW9mIHRoaXMuX3RpdGxlID09PSAndW5kZWZpbmVkJyAmJlxuICAgICAgdHlwZW9mIHRoaXMuX3RpdGxlVHBsID09PSAndW5kZWZpbmVkJyAmJlxuICAgICAgdGhpcy5hdXRvVGl0bGUgJiZcbiAgICAgIHRoaXMubWVudXMubGVuZ3RoID4gMFxuICAgICkge1xuICAgICAgY29uc3QgaXRlbSA9IHRoaXMubWVudXNbdGhpcy5tZW51cy5sZW5ndGggLSAxXTtcbiAgICAgIGxldCB0aXRsZSA9IGl0ZW0udGV4dDtcbiAgICAgIGlmIChpdGVtLmkxOG4gJiYgdGhpcy5pMThuU3J2KSB0aXRsZSA9IHRoaXMuaTE4blNydi5mYW55aShpdGVtLmkxOG4pO1xuICAgICAgdGhpcy5fdGl0bGUgPSB0aXRsZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fdGl0bGUgJiYgdGhpcy5zeW5jVGl0bGUpIHtcbiAgICAgIGlmICh0aGlzLnRpdGxlU3J2KSB7XG4gICAgICAgIHRoaXMudGl0bGVTcnYuc2V0VGl0bGUodGhpcy5fdGl0bGUpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucmV1c2VTcnYpIHtcbiAgICAgICAgdGhpcy5yZXVzZVNydi50aXRsZSA9IHRoaXMuX3RpdGxlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY2hlY2tDb250ZW50KCkge1xuICAgIGlmIChpc0VtcHR5KHRoaXMuY29uVHBsLm5hdGl2ZUVsZW1lbnQpKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmNvblRwbC5uYXRpdmVFbGVtZW50LCAnaGlkZGVuJywgJycpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLmNvblRwbC5uYXRpdmVFbGVtZW50LCAnaGlkZGVuJyk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tDb250ZW50KCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pbml0ZWQpIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaTE4biQpIHRoaXMuaTE4biQudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLnNldCQudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLnJvdXRlckV2ZW50JC51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBOZ1pvcnJvQW50ZE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xuaW1wb3J0IHsgRGVsb25VdGlsTW9kdWxlIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5pbXBvcnQgeyBQYWdlSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlLWhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFnZUhlYWRlckNvbmZpZyB9IGZyb20gJy4vcGFnZS1oZWFkZXIuY29uZmlnJztcblxuY29uc3QgQ09NUE9ORU5UUyA9IFtQYWdlSGVhZGVyQ29tcG9uZW50XTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgUm91dGVyTW9kdWxlLCBEZWxvblV0aWxNb2R1bGUsIE5nWm9ycm9BbnRkTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbLi4uQ09NUE9ORU5UU10sXG4gIGV4cG9ydHM6IFsuLi5DT01QT05FTlRTXSxcbn0pXG5leHBvcnQgY2xhc3MgUGFnZUhlYWRlck1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7IG5nTW9kdWxlOiBQYWdlSGVhZGVyTW9kdWxlLCBwcm92aWRlcnM6IFtQYWdlSGVhZGVyQ29uZmlnXSB9O1xuICB9XG59XG4iXSwibmFtZXMiOlsicm91dGVyIiwiZmlsdGVyIiwiTmF2aWdhdGlvbkVuZCIsIlRlbXBsYXRlUmVmIiwiaXNFbXB0eSIsIkNvbXBvbmVudCIsIlNldHRpbmdzU2VydmljZSIsIlJlbmRlcmVyMiIsIlJvdXRlciIsIk1lbnVTZXJ2aWNlIiwiT3B0aW9uYWwiLCJJbmplY3QiLCJBTEFJTl9JMThOX1RPS0VOIiwiVGl0bGVTZXJ2aWNlIiwiUmV1c2VUYWJTZXJ2aWNlIiwiVmlld0NoaWxkIiwiSW5wdXQiLCJJbnB1dEJvb2xlYW4iLCJJbnB1dE51bWJlciIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiUm91dGVyTW9kdWxlIiwiRGVsb25VdGlsTW9kdWxlIiwiTmdab3Jyb0FudGRNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxRQUFBOzs7Ozt3QkFJa0IsSUFBSTs7Ozs0QkFJQSxHQUFHOzs7O2tDQVFJLElBQUk7Ozs7O3VDQUtDLEtBQUs7Ozs7NkJBSWYsSUFBSTs7Ozs2QkFJSixLQUFLOzs7O3lCQUlsQixLQUFLOzs7O2tDQUlJLEVBQUU7OytCQXJDdEI7UUFzQ0M7O0lDdENEOzs7Ozs7Ozs7Ozs7OztBQWNBLHdCQW9DMkIsVUFBVSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSTtRQUNwRCxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sR0FBRyxJQUFJLEtBQUssSUFBSSxHQUFHLElBQUksR0FBRyxNQUFNLENBQUMsd0JBQXdCLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUM7UUFDN0gsSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLElBQUksT0FBTyxPQUFPLENBQUMsUUFBUSxLQUFLLFVBQVU7WUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQzs7WUFDMUgsS0FBSyxJQUFJLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxHQUFH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