/**
 * @license ng-alain(cipchk@qq.com) v2.0.0-beta.3-bb7009a
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
        // endregion
        function PageHeaderComponent(cog, settings, renderer, route, menuSrv, i18nSrv, titleSrv, reuseSrv) {
            var _this = this;
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
                this.i18n$ = this.i18nSrv.change.subscribe(function () { return _this.refresh(); });
            }
            this.set$ = settings.notify
                .pipe(operators.filter(function (w) { return _this.affix && w.type === 'layout' && w.name === 'collapsed'; }))
                .subscribe(function () { return _this.affix.updatePosition({}); });
        }
        Object.defineProperty(PageHeaderComponent.prototype, "menus", {
            get: /**
             * @return {?}
             */ function () {
                if (this._menus) {
                    return this._menus;
                }
                this._menus = this.menuSrv.getPathByUrl(this.route.url.split('?')[0]);
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
                if (this.breadcrumb || !this.autoBreadcrumb || this.menus.length <= 0)
                    return;
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
            };
        PageHeaderComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'page-header',
                        template: "<nz-affix #affix *ngIf=\"fixed;else phTpl\" [nzOffsetTop]=\"fixedOffsetTop\">\n  <ng-template [ngTemplateOutlet]=\"phTpl\"></ng-template>\n</nz-affix>\n<ng-template #phTpl>\n  <div class=\"page-header\">\n    <ng-container *ngIf=\"!breadcrumb; else breadcrumb\">\n      <nz-breadcrumb *ngIf=\"paths && paths.length > 0\">\n        <nz-breadcrumb-item *ngFor=\"let i of paths\">\n          <ng-container *ngIf=\"i.link\">\n            <a [routerLink]=\"i.link\">{{i.title}}</a>\n          </ng-container>\n          <ng-container *ngIf=\"!i.link\">{{i.title}}</ng-container>\n        </nz-breadcrumb-item>\n      </nz-breadcrumb>\n    </ng-container>\n    <div class=\"page-header__detail\">\n      <div *ngIf=\"logo\" class=\"page-header__logo\">\n        <ng-template [ngTemplateOutlet]=\"logo\"></ng-template>\n      </div>\n      <div class=\"page-header__main\">\n        <div class=\"page-header__row\">\n          <h1 *ngIf=\"_title || _titleTpl\" class=\"page-header__title\">\n            <ng-container *ngIf=\"_title; else _titleTpl\">{{_title}}</ng-container>\n          </h1>\n          <div *ngIf=\"action\" class=\"page-header__action\">\n            <ng-template [ngTemplateOutlet]=\"action\"></ng-template>\n          </div>\n        </div>\n        <div class=\"page-header__row\">\n          <div class=\"page-header__desc\" (cdkObserveContent)=\"checkContent()\" #conTpl>\n            <ng-content></ng-content>\n            <ng-template [ngTemplateOutlet]=\"content\"></ng-template>\n          </div>\n          <div *ngIf=\"extra\" class=\"page-header__extra\">\n            <ng-template [ngTemplateOutlet]=\"extra\"></ng-template>\n          </div>\n        </div>\n      </div>\n    </div>\n    <ng-template [ngTemplateOutlet]=\"tab\"></ng-template>\n  </div>\n</ng-template>\n",
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
            home: [{ type: core.Input }],
            homeLink: [{ type: core.Input }],
            homeI18n: [{ type: core.Input }],
            autoBreadcrumb: [{ type: core.Input }],
            autoTitle: [{ type: core.Input }],
            syncTitle: [{ type: core.Input }],
            fixed: [{ type: core.Input }],
            fixedOffsetTop: [{ type: core.Input }],
            breadcrumb: [{ type: core.Input }],
            logo: [{ type: core.Input }],
            action: [{ type: core.Input }],
            content: [{ type: core.Input }],
            extra: [{ type: core.Input }],
            tab: [{ type: core.Input }]
        };
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZUhlYWRlci51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BkZWxvbi9hYmMvcGFnZS1oZWFkZXIvcGFnZS1oZWFkZXIuY29uZmlnLnRzIiwibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm5nOi8vQGRlbG9uL2FiYy9wYWdlLWhlYWRlci9wYWdlLWhlYWRlci5jb21wb25lbnQudHMiLCJuZzovL0BkZWxvbi9hYmMvcGFnZS1oZWFkZXIvcGFnZS1oZWFkZXIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBQYWdlSGVhZGVyQ29uZmlnIHtcbiAgLyoqXG4gICAqIMOpwqbClsOpwqHCtcOmwpbCh8OmwpzCrMOvwrzCjMOowovCpcOmwozCh8Olwq7CmsOnwqnCusOowqHCqMOnwqTCusOkwrjCjcOmwpjCvsOnwqTCulxuICAgKi9cbiAgaG9tZT86IHN0cmluZyA9ICfDqcKmwpbDqcKhwrUnO1xuICAvKipcbiAgICogw6nCpsKWw6nCocK1w6nCk8K+w6bCjsKlXG4gICAqL1xuICBob21lTGluaz86IHN0cmluZyA9ICcvJztcbiAgLyoqXG4gICAqIMOpwqbClsOpwqHCtcOpwpPCvsOmwo7CpcOlwpvCvcOpwpnChcOlwozClsOlwo/CgsOmwpXCsFxuICAgKi9cbiAgaG9tZUkxOG4/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiDDqMKHwqrDpcKKwqjDp8KUwp/DpsKIwpDDpcKvwrzDqMKIwqrDr8K8wozDpMK7wqXDpcK9wpPDpcKJwo3DqMK3wq/Dp8KUwrHDpMK7wo7DpMK4wrvDqMKPwpzDpcKNwpXDpMK4wq3DpcKuwprDpMK9wo1cbiAgICovXG4gIGF1dG9CcmVhZGNydW1iPzogYm9vbGVhbiA9IHRydWU7XG4gIC8qKlxuICAgKiDDqMKHwqrDpcKKwqjDp8KUwp/DpsKIwpDDpsKgwofDqcKiwpjDr8K8wozDpMK7wqXDpcK9wpPDpcKJwo3DqMK3wq/Dp8KUwrHDpMK7wo7DpMK4wrvDqMKPwpzDpcKNwpXDpMK4wq3DpcKuwprDpMK9wo1cbiAgICovXG4gIGF1dG9UaXRsZT86IGJvb2xlYW4gPSB0cnVlO1xuICAvKipcbiAgICogw6bCmMKvw6XCkMKmw6jCh8Kqw6XCisKow6XCsMKGw6bCoMKHw6XCh8KGw6TCv8Khw6bCgcKvw6XCkMKMw6bCrcKlw6jCh8KzIGBUaXRsZVNlcnZpY2Vgw6PCgMKBYFJldXNlU2VydmljZWAgw6TCuMKLXG4gICAqL1xuICBzeW5jVGl0bGU/OiBib29sZWFuID0gZmFsc2U7XG4gIC8qKlxuICAgKiDDpsKYwq/DpcKQwqbDpcKbwrrDpcKuwprDpsKowqHDpcK8wo9cbiAgICovXG4gIGZpeGVkPyA9IGZhbHNlO1xuICAvKipcbiAgICogw6XCm8K6w6XCrsKaw6XCgcKPw6fCp8K7w6XCgMK8XG4gICAqL1xuICBmaXhlZE9mZnNldFRvcD8gPSA2NDtcbn1cbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIENvbnRlbnRDaGlsZCxcbiAgT25Jbml0LFxuICBPbkNoYW5nZXMsXG4gIEluamVjdCxcbiAgT3B0aW9uYWwsXG4gIFZpZXdDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgUmVuZGVyZXIyLFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE56QWZmaXhDb21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBpc0VtcHR5LCBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHtcbiAgTWVudVNlcnZpY2UsXG4gIEFMQUlOX0kxOE5fVE9LRU4sXG4gIEFsYWluSTE4TlNlcnZpY2UsXG4gIE1lbnUsXG4gIFRpdGxlU2VydmljZSxcbiAgU2V0dGluZ3NTZXJ2aWNlLFxufSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgUmV1c2VUYWJTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL2FiYy9yZXVzZS10YWInO1xuXG5pbXBvcnQgeyBQYWdlSGVhZGVyQ29uZmlnIH0gZnJvbSAnLi9wYWdlLWhlYWRlci5jb25maWcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwYWdlLWhlYWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYWdlLWhlYWRlci5jb21wb25lbnQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBQYWdlSGVhZGVyQ29tcG9uZW50XG4gIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgaW5pdGVkID0gZmFsc2U7XG4gIHByaXZhdGUgaTE4biQ6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBzZXQkOiBTdWJzY3JpcHRpb247XG4gIEBWaWV3Q2hpbGQoJ2NvblRwbCcpXG4gIHByaXZhdGUgY29uVHBsOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdhZmZpeCcpXG4gIHByaXZhdGUgYWZmaXg6IE56QWZmaXhDb21wb25lbnQ7XG4gIHByaXZhdGUgX21lbnVzOiBNZW51W107XG5cbiAgcHJpdmF0ZSBnZXQgbWVudXMoKSB7XG4gICAgaWYgKHRoaXMuX21lbnVzKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbWVudXM7XG4gICAgfVxuICAgIHRoaXMuX21lbnVzID0gdGhpcy5tZW51U3J2LmdldFBhdGhCeVVybCh0aGlzLnJvdXRlLnVybC5zcGxpdCgnPycpWzBdKTtcblxuICAgIHJldHVybiB0aGlzLl9tZW51cztcbiAgfVxuXG4gIC8vIHJlZ2lvbiBmaWVsZHNcblxuICBfdGl0bGU6IHN0cmluZztcbiAgX3RpdGxlVHBsOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBASW5wdXQoKVxuICBzZXQgdGl0bGUodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgdGhpcy5fdGl0bGUgPSBudWxsO1xuICAgICAgdGhpcy5fdGl0bGVUcGwgPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdGl0bGUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKVxuICBob21lOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgaG9tZUxpbms6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBob21lSTE4bjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiDDqMKHwqrDpcKKwqjDp8KUwp/DpsKIwpDDpcKvwrzDqMKIwqrDr8K8wozDpMK7wqXDpcK9wpPDpcKJwo3DqMK3wq/Dp8KUwrHDpMK7wo7DpMK4wrvDqMKPwpzDpcKNwpXDpMK4wq3DpcKuwprDpMK9wo1cbiAgICovXG4gIEBJbnB1dCgpXG4gIEBJbnB1dEJvb2xlYW4oKVxuICBhdXRvQnJlYWRjcnVtYjogYm9vbGVhbjtcblxuICAvKipcbiAgICogw6jCh8Kqw6XCisKow6fClMKfw6bCiMKQw6bCoMKHw6nCosKYw6/CvMKMw6TCu8Klw6XCvcKTw6XCicKNw6jCt8Kvw6fClMKxw6TCu8KOw6TCuMK7w6jCj8Kcw6XCjcKVw6TCuMKtw6XCrsKaw6TCvcKNXG4gICAqL1xuICBASW5wdXQoKVxuICBASW5wdXRCb29sZWFuKClcbiAgYXV0b1RpdGxlOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDDpsKYwq/DpcKQwqbDqMKHwqrDpcKKwqjDpcKwwobDpsKgwofDqcKiwpjDpcKQwozDpsKtwqXDqMKHwrMgYFRpdGxlU2VydmljZWDDo8KAwoFgUmV1c2VTZXJ2aWNlYCDDpMK4wovDr8K8wozDpMK7woUgYHRpdGxlYCDDpMK4wrogYHN0cmluZ2Agw6fCscK7w6XCnsKLw6bCl8K2w6bCnMKJw6bClcKIXG4gICAqL1xuICBASW5wdXQoKVxuICBASW5wdXRCb29sZWFuKClcbiAgc3luY1RpdGxlOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIEBJbnB1dEJvb2xlYW4oKVxuICBmaXhlZDogYm9vbGVhbjtcblxuICBASW5wdXQoKVxuICBASW5wdXROdW1iZXIoKVxuICBmaXhlZE9mZnNldFRvcDogbnVtYmVyO1xuXG4gIHBhdGhzOiBhbnlbXSA9IFtdO1xuXG4gIEBJbnB1dCgpXG4gIGJyZWFkY3J1bWI6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQElucHV0KClcbiAgbG9nbzogVGVtcGxhdGVSZWY8YW55PjtcblxuICBASW5wdXQoKVxuICBhY3Rpb246IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQElucHV0KClcbiAgY29udGVudDogVGVtcGxhdGVSZWY8YW55PjtcblxuICBASW5wdXQoKVxuICBleHRyYTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBASW5wdXQoKVxuICB0YWI6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLy8gZW5kcmVnaW9uXG5cbiAgY29uc3RydWN0b3IoXG4gICAgY29nOiBQYWdlSGVhZGVyQ29uZmlnLFxuICAgIHNldHRpbmdzOiBTZXR0aW5nc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgcm91dGU6IFJvdXRlcixcbiAgICBwcml2YXRlIG1lbnVTcnY6IE1lbnVTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChBTEFJTl9JMThOX1RPS0VOKVxuICAgIHByaXZhdGUgaTE4blNydjogQWxhaW5JMThOU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoVGl0bGVTZXJ2aWNlKVxuICAgIHByaXZhdGUgdGl0bGVTcnY6IFRpdGxlU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoUmV1c2VUYWJTZXJ2aWNlKVxuICAgIHByaXZhdGUgcmV1c2VTcnY6IFJldXNlVGFiU2VydmljZSxcbiAgKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb2cpO1xuICAgIGlmICh0aGlzLmkxOG5TcnYpIHtcbiAgICAgIHRoaXMuaTE4biQgPSB0aGlzLmkxOG5TcnYuY2hhbmdlLnN1YnNjcmliZSgoKSA9PiB0aGlzLnJlZnJlc2goKSk7XG4gICAgfVxuICAgIHRoaXMuc2V0JCA9IHNldHRpbmdzLm5vdGlmeVxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcihcbiAgICAgICAgICB3ID0+IHRoaXMuYWZmaXggJiYgdy50eXBlID09PSAnbGF5b3V0JyAmJiB3Lm5hbWUgPT09ICdjb2xsYXBzZWQnLFxuICAgICAgICApLFxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmFmZml4LnVwZGF0ZVBvc2l0aW9uKHt9KSk7XG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIHRoaXMuc2V0VGl0bGUoKS5nZW5CcmVhZGNydW1iKCk7XG4gIH1cblxuICBwcml2YXRlIGdlbkJyZWFkY3J1bWIoKSB7XG4gICAgaWYgKHRoaXMuYnJlYWRjcnVtYiB8fCAhdGhpcy5hdXRvQnJlYWRjcnVtYiB8fCB0aGlzLm1lbnVzLmxlbmd0aCA8PSAwKVxuICAgICAgcmV0dXJuO1xuICAgIGNvbnN0IHBhdGhzOiBhbnlbXSA9IFtdO1xuICAgIHRoaXMubWVudXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGlmICh0eXBlb2YgaXRlbS5oaWRlSW5CcmVhZGNydW1iICE9PSAndW5kZWZpbmVkJyAmJiBpdGVtLmhpZGVJbkJyZWFkY3J1bWIpXG4gICAgICAgIHJldHVybjtcbiAgICAgIGxldCB0aXRsZSA9IGl0ZW0udGV4dDtcbiAgICAgIGlmIChpdGVtLmkxOG4gJiYgdGhpcy5pMThuU3J2KSB0aXRsZSA9IHRoaXMuaTE4blNydi5mYW55aShpdGVtLmkxOG4pO1xuICAgICAgcGF0aHMucHVzaCh7IHRpdGxlLCBsaW5rOiBpdGVtLmxpbmsgJiYgW2l0ZW0ubGlua10gfSk7XG4gICAgfSk7XG4gICAgLy8gYWRkIGhvbWVcbiAgICBpZiAodGhpcy5ob21lKSB7XG4gICAgICBwYXRocy5zcGxpY2UoMCwgMCwge1xuICAgICAgICB0aXRsZTpcbiAgICAgICAgICAodGhpcy5ob21lSTE4biAmJlxuICAgICAgICAgICAgdGhpcy5pMThuU3J2ICYmXG4gICAgICAgICAgICB0aGlzLmkxOG5TcnYuZmFueWkodGhpcy5ob21lSTE4bikpIHx8XG4gICAgICAgICAgdGhpcy5ob21lLFxuICAgICAgICBsaW5rOiBbdGhpcy5ob21lTGlua10sXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5wYXRocyA9IHBhdGhzO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRUaXRsZSgpIHtcbiAgICBpZiAoXG4gICAgICB0eXBlb2YgdGhpcy5fdGl0bGUgPT09ICd1bmRlZmluZWQnICYmXG4gICAgICB0eXBlb2YgdGhpcy5fdGl0bGVUcGwgPT09ICd1bmRlZmluZWQnICYmXG4gICAgICB0aGlzLmF1dG9UaXRsZSAmJlxuICAgICAgdGhpcy5tZW51cy5sZW5ndGggPiAwXG4gICAgKSB7XG4gICAgICBjb25zdCBpdGVtID0gdGhpcy5tZW51c1t0aGlzLm1lbnVzLmxlbmd0aCAtIDFdO1xuICAgICAgbGV0IHRpdGxlID0gaXRlbS50ZXh0O1xuICAgICAgaWYgKGl0ZW0uaTE4biAmJiB0aGlzLmkxOG5TcnYpIHRpdGxlID0gdGhpcy5pMThuU3J2LmZhbnlpKGl0ZW0uaTE4bik7XG4gICAgICB0aGlzLl90aXRsZSA9IHRpdGxlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl90aXRsZSAmJiB0aGlzLnN5bmNUaXRsZSkge1xuICAgICAgaWYgKHRoaXMudGl0bGVTcnYpIHtcbiAgICAgICAgdGhpcy50aXRsZVNydi5zZXRUaXRsZSh0aGlzLl90aXRsZSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5yZXVzZVNydikge1xuICAgICAgICB0aGlzLnJldXNlU3J2LnRpdGxlID0gdGhpcy5fdGl0bGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjaGVja0NvbnRlbnQoKSB7XG4gICAgaWYgKGlzRW1wdHkodGhpcy5jb25UcGwubmF0aXZlRWxlbWVudCkpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuY29uVHBsLm5hdGl2ZUVsZW1lbnQsICdoaWRkZW4nLCAnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKHRoaXMuY29uVHBsLm5hdGl2ZUVsZW1lbnQsICdoaWRkZW4nKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgICB0aGlzLmluaXRlZCA9IHRydWU7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja0NvbnRlbnQoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmluaXRlZCkgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pMThuJCkgdGhpcy5pMThuJC51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuc2V0JC51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBOZ1pvcnJvQW50ZE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xuaW1wb3J0IHsgRGVsb25VdGlsTW9kdWxlIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5pbXBvcnQgeyBQYWdlSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlLWhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFnZUhlYWRlckNvbmZpZyB9IGZyb20gJy4vcGFnZS1oZWFkZXIuY29uZmlnJztcblxuY29uc3QgQ09NUE9ORU5UUyA9IFtQYWdlSGVhZGVyQ29tcG9uZW50XTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgUm91dGVyTW9kdWxlLCBEZWxvblV0aWxNb2R1bGUsIE5nWm9ycm9BbnRkTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbLi4uQ09NUE9ORU5UU10sXG4gIGV4cG9ydHM6IFsuLi5DT01QT05FTlRTXSxcbn0pXG5leHBvcnQgY2xhc3MgUGFnZUhlYWRlck1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7IG5nTW9kdWxlOiBQYWdlSGVhZGVyTW9kdWxlLCBwcm92aWRlcnM6IFtQYWdlSGVhZGVyQ29uZmlnXSB9O1xuICB9XG59XG4iXSwibmFtZXMiOlsiZmlsdGVyIiwiVGVtcGxhdGVSZWYiLCJpc0VtcHR5IiwiQ29tcG9uZW50IiwiU2V0dGluZ3NTZXJ2aWNlIiwiUmVuZGVyZXIyIiwiUm91dGVyIiwiTWVudVNlcnZpY2UiLCJPcHRpb25hbCIsIkluamVjdCIsIkFMQUlOX0kxOE5fVE9LRU4iLCJUaXRsZVNlcnZpY2UiLCJSZXVzZVRhYlNlcnZpY2UiLCJWaWV3Q2hpbGQiLCJJbnB1dCIsIklucHV0Qm9vbGVhbiIsIklucHV0TnVtYmVyIiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJSb3V0ZXJNb2R1bGUiLCJEZWxvblV0aWxNb2R1bGUiLCJOZ1pvcnJvQW50ZE1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLFFBQUE7Ozs7O3dCQUlrQixJQUFJOzs7OzRCQUlBLEdBQUc7Ozs7a0NBUUksSUFBSTs7Ozs2QkFJVCxJQUFJOzs7OzZCQUlKLEtBQUs7Ozs7eUJBSWxCLEtBQUs7Ozs7a0NBSUksRUFBRTs7K0JBaEN0QjtRQWlDQzs7SUNqQ0Q7Ozs7Ozs7Ozs7Ozs7O0FBY0Esd0JBb0MyQixVQUFVLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJO1FBQ3BELElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxHQUFHLElBQUksS0FBSyxJQUFJLEdBQUcsSUFBSSxHQUFHLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUM3SCxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsSUFBSSxPQUFPLE9BQU8sQ0FBQyxRQUFRLEtBQUssVUFBVTtZQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDOztZQUMxSCxLQUFLLElBQUksQ0FBQyxH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