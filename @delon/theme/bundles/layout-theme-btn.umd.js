/**
 * @license ng-alain(cipchk@qq.com) v11.7.1
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/bidi'), require('@angular/cdk/platform'), require('@angular/common'), require('@angular/core'), require('@delon/util/config'), require('rxjs'), require('rxjs/operators'), require('ng-zorro-antd/dropdown'), require('ng-zorro-antd/tooltip')) :
    typeof define === 'function' && define.amd ? define('@delon/theme/theme-btn', ['exports', '@angular/cdk/bidi', '@angular/cdk/platform', '@angular/common', '@angular/core', '@delon/util/config', 'rxjs', 'rxjs/operators', 'ng-zorro-antd/dropdown', 'ng-zorro-antd/tooltip'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.delon = global.delon || {}, global.delon.theme = global.delon.theme || {}, global.delon.theme['theme-btn'] = {}), global.ng.cdk.bidi, global.ng.cdk.platform, global.ng.common, global.ng.core, global.config, global.rxjs, global.rxjs.operators, global.dropdown, global.tooltip));
}(this, (function (exports, bidi, platform, common, core, config, rxjs, operators, dropdown, tooltip) { 'use strict';

    var ThemeBtnStorageKey = "site-theme";
    var ThemeBtnComponent = /** @class */ (function () {
        function ThemeBtnComponent(renderer, configSrv, platform, doc, directionality) {
            this.renderer = renderer;
            this.configSrv = configSrv;
            this.platform = platform;
            this.doc = doc;
            this.directionality = directionality;
            this.theme = 'default';
            this.isDev = core.isDevMode();
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
    ThemeBtnComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'theme-btn',
                    template: "<div class=\"ant-avatar ant-avatar-circle ant-avatar-icon\" nz-dropdown nzPlacement=\"topCenter\" [nzDropdownMenu]=\"types.length > 0 ? menu : null\">\n  <svg nz-tooltip [nzTooltipTitle]=\"isDev ? devTips : null\" class=\"anticon\" role=\"img\" width=\"21\" height=\"21\" viewBox=\"0 0 21 21\" fill=\"currentColor\">\n    <g fill-rule=\"evenodd\">\n      <g fill-rule=\"nonzero\">\n        <path\n          d=\"M7.02 3.635l12.518 12.518a1.863 1.863 0 010 2.635l-1.317 1.318a1.863 1.863 0 01-2.635 0L3.068 7.588A2.795 2.795 0 117.02 3.635zm2.09 14.428a.932.932 0 110 1.864.932.932 0 010-1.864zm-.043-9.747L7.75 9.635l9.154 9.153 1.318-1.317-9.154-9.155zM3.52 12.473c.514 0 .931.417.931.931v.932h.932a.932.932 0 110 1.864h-.932v.931a.932.932 0 01-1.863 0l-.001-.931h-.93a.932.932 0 010-1.864h.93v-.932c0-.514.418-.931.933-.931zm15.374-3.727a1.398 1.398 0 110 2.795 1.398 1.398 0 010-2.795zM4.385 4.953a.932.932 0 000 1.317l2.046 2.047L7.75 7 5.703 4.953a.932.932 0 00-1.318 0zM14.701.36a.932.932 0 01.931.932v.931h.932a.932.932 0 010 1.864h-.933l.001.932a.932.932 0 11-1.863 0l-.001-.932h-.93a.932.932 0 110-1.864h.93v-.931a.932.932 0 01.933-.932z\"\n        ></path>\n      </g>\n    </g>\n  </svg>\n  <nz-dropdown-menu #menu=\"nzDropdownMenu\">\n    <ul nz-menu nzSelectable>\n      <li nz-menu-item *ngFor=\"let i of types\" (click)=\"onThemeChange(i.key)\">{{ i.text }}</li>\n    </ul>\n  </nz-dropdown-menu>\n</div>\n",
                    host: {
                        '[class.theme-btn]': "true",
                        '[class.theme-btn-rtl]': "dir === 'rtl'",
                    },
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                },] }
    ];
    /** @nocollapse */
    ThemeBtnComponent.ctorParameters = function () { return [
        { type: core.Renderer2 },
        { type: config.AlainConfigService },
        { type: platform.Platform },
        { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
        { type: bidi.Directionality, decorators: [{ type: core.Optional }] }
    ]; };
    ThemeBtnComponent.propDecorators = {
        types: [{ type: core.Input }],
        devTips: [{ type: core.Input }]
    };

    var COMPONENTS = [ThemeBtnComponent];
    var ThemeBtnModule = /** @class */ (function () {
        function ThemeBtnModule() {
        }
        return ThemeBtnModule;
    }());
    ThemeBtnModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule, dropdown.NzDropDownModule, tooltip.NzToolTipModule],
                    declarations: COMPONENTS,
                    exports: COMPONENTS,
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ThemeBtnComponent = ThemeBtnComponent;
    exports.ThemeBtnModule = ThemeBtnModule;
    exports.ThemeBtnStorageKey = ThemeBtnStorageKey;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=layout-theme-btn.umd.js.map
