/**
 * @license ng-alain(cipchk@qq.com) v11.3.1
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('@delon/util/config'), require('@angular/cdk/platform'), require('@angular/cdk/bidi'), require('ng-zorro-antd/dropdown'), require('ng-zorro-antd/tooltip'), require('ng-zorro-antd/menu')) :
    typeof define === 'function' && define.amd ? define('@delon/theme/theme-btn', ['exports', '@angular/common', '@angular/core', 'rxjs', 'rxjs/operators', '@delon/util/config', '@angular/cdk/platform', '@angular/cdk/bidi', 'ng-zorro-antd/dropdown', 'ng-zorro-antd/tooltip', 'ng-zorro-antd/menu'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.delon = global.delon || {}, global.delon.theme = global.delon.theme || {}, global.delon.theme['theme-btn'] = {}), global.ng.common, global.ng.core, global.rxjs, global.rxjs.operators, global.i1, global.ng.cdk.platform, global.ng.cdk.bidi, global.i4, global.i5, global.i6));
}(this, (function (exports, i7, i0, rxjs, operators, i1, i2, i3, i4, i5, i6) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);

    var ThemeBtnStorageKey = "site-theme";
    var ThemeBtnComponent = /** @class */ (function () {
        function ThemeBtnComponent(renderer, configSrv, platform, doc, directionality) {
            this.renderer = renderer;
            this.configSrv = configSrv;
            this.platform = platform;
            this.doc = doc;
            this.directionality = directionality;
            this.theme = 'default';
            this.isDev = i0.isDevMode();
            this.types = [
                { key: 'default', text: 'Default Theme' },
                { key: 'dark', text: 'Dark Theme' },
                { key: 'compact', text: 'Compact Theme' },
            ];
            this.devTips = "When the dark.css file can't be found, you need to run it once: npm run theme";
            this.destroy$ = new rxjs.Subject();
            this.dir = 'ltr';
        }
        ThemeBtnComponent.prototype.ngOnInit = function () {
            var _this = this;
            var _a;
            this.dir = this.directionality.value;
            (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(operators.takeUntil(this.destroy$)).subscribe(function (direction) {
                _this.dir = direction;
            });
            this.initTheme();
        };
        ThemeBtnComponent.prototype.initTheme = function () {
            if (!this.platform.isBrowser) {
                return;
            }
            this.theme = localStorage.getItem(ThemeBtnStorageKey) || 'default';
            this.updateChartTheme();
            this.onThemeChange(this.theme);
        };
        ThemeBtnComponent.prototype.updateChartTheme = function () {
            this.configSrv.set('chart', { theme: this.theme === 'dark' ? 'dark' : '' });
        };
        ThemeBtnComponent.prototype.onThemeChange = function (theme) {
            if (!this.platform.isBrowser) {
                return;
            }
            this.theme = theme;
            this.renderer.setAttribute(this.doc.body, 'data-theme', theme);
            var dom = this.doc.getElementById(ThemeBtnStorageKey);
            if (dom) {
                dom.remove();
            }
            localStorage.removeItem(ThemeBtnStorageKey);
            if (theme !== 'default') {
                var el = (this.el = this.doc.createElement('link'));
                el.type = 'text/css';
                el.rel = 'stylesheet';
                el.id = ThemeBtnStorageKey;
                el.href = "assets/style." + theme + ".css";
                localStorage.setItem(ThemeBtnStorageKey, theme);
                this.doc.body.append(el);
            }
            this.updateChartTheme();
        };
        ThemeBtnComponent.prototype.ngOnDestroy = function () {
            if (this.el) {
                this.doc.body.removeChild(this.el);
            }
            this.destroy$.next();
            this.destroy$.complete();
        };
        return ThemeBtnComponent;
    }());
    /** @nocollapse */ ThemeBtnComponent.ɵfac = function ThemeBtnComponent_Factory(t) { return new (t || ThemeBtnComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.AlainConfigService), i0.ɵɵdirectiveInject(i2.Platform), i0.ɵɵdirectiveInject(i7.DOCUMENT), i0.ɵɵdirectiveInject(i3.Directionality, 8)); };
    /** @nocollapse */ ThemeBtnComponent.ɵcmp = i0.ɵɵngDeclareComponent({ version: "11.1.1", type: ThemeBtnComponent, selector: "theme-btn", inputs: { types: "types", devTips: "devTips" }, host: { properties: { "class.theme-btn": "true", "class.theme-btn-rtl": "dir === 'rtl'" } }, ngImport: i0__namespace, template: "<div class=\"ant-avatar ant-avatar-circle ant-avatar-icon\" nz-dropdown nzPlacement=\"topCenter\" [nzDropdownMenu]=\"types.length > 0 ? menu : null\">\n  <svg nz-tooltip [nzTooltipTitle]=\"isDev ? devTips : null\" class=\"anticon\" role=\"img\" width=\"21\" height=\"21\" viewBox=\"0 0 21 21\" fill=\"currentColor\">\n    <g fill-rule=\"evenodd\">\n      <g fill-rule=\"nonzero\">\n        <path\n          d=\"M7.02 3.635l12.518 12.518a1.863 1.863 0 010 2.635l-1.317 1.318a1.863 1.863 0 01-2.635 0L3.068 7.588A2.795 2.795 0 117.02 3.635zm2.09 14.428a.932.932 0 110 1.864.932.932 0 010-1.864zm-.043-9.747L7.75 9.635l9.154 9.153 1.318-1.317-9.154-9.155zM3.52 12.473c.514 0 .931.417.931.931v.932h.932a.932.932 0 110 1.864h-.932v.931a.932.932 0 01-1.863 0l-.001-.931h-.93a.932.932 0 010-1.864h.93v-.932c0-.514.418-.931.933-.931zm15.374-3.727a1.398 1.398 0 110 2.795 1.398 1.398 0 010-2.795zM4.385 4.953a.932.932 0 000 1.317l2.046 2.047L7.75 7 5.703 4.953a.932.932 0 00-1.318 0zM14.701.36a.932.932 0 01.931.932v.931h.932a.932.932 0 010 1.864h-.933l.001.932a.932.932 0 11-1.863 0l-.001-.932h-.93a.932.932 0 110-1.864h.93v-.931a.932.932 0 01.933-.932z\"\n        ></path>\n      </g>\n    </g>\n  </svg>\n  <nz-dropdown-menu #menu=\"nzDropdownMenu\">\n    <ul nz-menu nzSelectable>\n      <li nz-menu-item *ngFor=\"let i of types\" (click)=\"onThemeChange(i.key)\">{{ i.text }}</li>\n    </ul>\n  </nz-dropdown-menu>\n</div>\n", directives: [{ type: i4.NzDropDownDirective, selector: "[nz-dropdown]", inputs: ["nzDropdownMenu", "nzTrigger", "nzMatchWidthElement", "nzBackdrop", "nzHasBackdrop", "nzClickHide", "nzDisabled", "nzVisible", "nzOverlayClassName", "nzOverlayStyle", "nzPlacement"], outputs: ["nzVisibleChange"], exportAs: ["nzDropdown"] }, { type: i5.NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipTitle", "nz-tooltip", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }, { type: i4.NzDropdownMenuComponent, selector: "nz-dropdown-menu", exportAs: ["nzDropdownMenu"] }, { type: i6.NzMenuDirective, selector: "[nz-menu]", inputs: ["nzInlineIndent", "nzTheme", "nzMode", "nzInlineCollapsed", "nzSelectable"], outputs: ["nzClick"], exportAs: ["nzMenu"] }, { type: i7.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i6.NzMenuItemDirective, selector: "[nz-menu-item]", inputs: ["nzDisabled", "nzSelected", "nzDanger", "nzMatchRouterExact", "nzMatchRouter", "nzPaddingLeft"], exportAs: ["nzMenuItem"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ThemeBtnComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'theme-btn',
                        templateUrl: './theme-btn.component.html',
                        host: {
                            '[class.theme-btn]': "true",
                            '[class.theme-btn-rtl]': "dir === 'rtl'",
                        },
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], function () {
            return [{ type: i0.Renderer2 }, { type: i1.AlainConfigService }, { type: i2.Platform }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i7.DOCUMENT]
                        }] }, { type: i3.Directionality, decorators: [{
                            type: i0.Optional
                        }] }];
        }, { types: [{
                    type: i0.Input
                }], devTips: [{
                    type: i0.Input
                }] });
    })();

    var COMPONENTS = [ThemeBtnComponent];
    var ThemeBtnModule = /** @class */ (function () {
        function ThemeBtnModule() {
        }
        return ThemeBtnModule;
    }());
    /** @nocollapse */ ThemeBtnModule.ɵmod = i0.ɵɵdefineNgModule({ type: ThemeBtnModule });
    /** @nocollapse */ ThemeBtnModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ThemeBtnModule_Factory(t) { return new (t || ThemeBtnModule)(); }, imports: [[i7.CommonModule, i4.NzDropDownModule, i5.NzToolTipModule]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ThemeBtnModule, { declarations: [ThemeBtnComponent], imports: [i7.CommonModule, i4.NzDropDownModule, i5.NzToolTipModule], exports: [ThemeBtnComponent] }); })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ThemeBtnModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [i7.CommonModule, i4.NzDropDownModule, i5.NzToolTipModule],
                        declarations: COMPONENTS,
                        exports: COMPONENTS,
                    }]
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ThemeBtnComponent = ThemeBtnComponent;
    exports.ThemeBtnModule = ThemeBtnModule;
    exports.ThemeBtnStorageKey = ThemeBtnStorageKey;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=layout-theme-btn.umd.js.map
