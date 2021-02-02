/**
 * @license ng-alain(cipchk@qq.com) v11.3.1
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@delon/util/browser'), require('rxjs'), require('rxjs/operators'), require('@delon/theme'), require('@angular/platform-browser'), require('@angular/cdk/bidi'), require('@angular/common'), require('ng-zorro-antd/button'), require('ng-zorro-antd/core/wave'), require('ng-zorro-antd/core/transition-patch'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('@delon/abc/exception', ['exports', '@angular/core', '@delon/util/browser', 'rxjs', 'rxjs/operators', '@delon/theme', '@angular/platform-browser', '@angular/cdk/bidi', '@angular/common', 'ng-zorro-antd/button', 'ng-zorro-antd/core/wave', 'ng-zorro-antd/core/transition-patch', '@angular/router'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.delon = global.delon || {}, global.delon.abc = global.delon.abc || {}, global.delon.abc.exception = {}), global.ng.core, global.browser, global.rxjs, global.rxjs.operators, global.delon.theme, global.ng.platformBrowser, global.ng.cdk.bidi, global.ng.common, global['ng-zorro-antd/button'], global.i6, global.i7, global.ng.router));
}(this, (function (exports, i0, browser, rxjs, operators, i1, i2, i3, i4, i5, i6, i7, i8) { 'use strict';

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

    var ExceptionComponent = /** @class */ (function () {
        function ExceptionComponent(i18n, dom, directionality) {
            this.i18n = i18n;
            this.dom = dom;
            this.directionality = directionality;
            this.destroy$ = new rxjs.Subject();
            this.locale = {};
            this.hasCon = false;
            this.dir = 'ltr';
            this._img = '';
            this._title = '';
            this._desc = '';
        }
        Object.defineProperty(ExceptionComponent.prototype, "type", {
            set: function (value) {
                var item = {
                    403: {
                        img: 'https://gw.alipayobjects.com/zos/rmsportal/wZcnGqRDyhPOEYFcZDnb.svg',
                        title: '403',
                    },
                    404: {
                        img: 'https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg',
                        title: '404',
                    },
                    500: {
                        img: 'https://gw.alipayobjects.com/zos/rmsportal/RVRUAYdCGeYNBWoKiIwB.svg',
                        title: '500',
                    },
                }[value];
                if (!item)
                    return;
                this.fixImg(item.img);
                this._type = value;
                this._title = item.title;
                this._desc = '';
            },
            enumerable: false,
            configurable: true
        });
        ExceptionComponent.prototype.fixImg = function (src) {
            this._img = this.dom.bypassSecurityTrustStyle("url('" + src + "')");
        };
        Object.defineProperty(ExceptionComponent.prototype, "img", {
            set: function (value) {
                this.fixImg(value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ExceptionComponent.prototype, "title", {
            set: function (value) {
                this._title = this.dom.bypassSecurityTrustHtml(value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ExceptionComponent.prototype, "desc", {
            set: function (value) {
                this._desc = this.dom.bypassSecurityTrustHtml(value);
            },
            enumerable: false,
            configurable: true
        });
        ExceptionComponent.prototype.checkContent = function () {
            this.hasCon = !browser.isEmpty(this.conTpl.nativeElement);
        };
        ExceptionComponent.prototype.ngOnInit = function () {
            var _this = this;
            var _a;
            this.dir = this.directionality.value;
            (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(operators.takeUntil(this.destroy$)).subscribe(function (direction) {
                _this.dir = direction;
            });
            this.i18n.change.pipe(operators.takeUntil(this.destroy$)).subscribe(function () { return (_this.locale = _this.i18n.getData('exception')); });
            this.checkContent();
        };
        ExceptionComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        return ExceptionComponent;
    }());
    /** @nocollapse */ ExceptionComponent.ɵfac = function ExceptionComponent_Factory(t) { return new (t || ExceptionComponent)(i0.ɵɵdirectiveInject(i1.DelonLocaleService), i0.ɵɵdirectiveInject(i2.DomSanitizer), i0.ɵɵdirectiveInject(i3.Directionality, 8)); };
    /** @nocollapse */ ExceptionComponent.ɵcmp = i0.ɵɵngDeclareComponent({ version: "11.1.1", type: ExceptionComponent, selector: "exception", inputs: { type: "type", img: "img", title: "title", desc: "desc" }, host: { properties: { "class.exception": "true", "class.exception-rtl": "dir === 'rtl'" } }, viewQueries: [{ propertyName: "conTpl", first: true, predicate: ["conTpl"], emitDistinctChangesOnly: false, descendants: true, static: true }], exportAs: ["exception"], ngImport: i0__namespace, template: "<div class=\"exception__img-block\">\n  <div class=\"exception__img\" [style.backgroundImage]=\"_img\"></div>\n</div>\n<div class=\"exception__cont\">\n  <h1 class=\"exception__cont-title\" [innerHTML]=\"_title\"></h1>\n  <div class=\"exception__cont-desc\" [innerHTML]=\"_desc || locale[_type]\"></div>\n  <div class=\"exception__cont-actions\">\n    <div (cdkObserveContent)=\"checkContent()\" #conTpl>\n      <ng-content></ng-content>\n    </div>\n    <button *ngIf=\"!hasCon\" nz-button [routerLink]=\"['/']\" [nzType]=\"'primary'\">{{ locale.backToHome }}</button>\n  </div>\n</div>\n", directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i5.NzButtonComponent, selector: "button[nz-button], a[nz-button]", inputs: ["nzBlock", "nzGhost", "nzSearch", "nzLoading", "nzDanger", "disabled", "tabIndex", "nzType", "nzShape", "nzSize"], exportAs: ["nzButton"] }, { type: i6.NzWaveDirective, selector: "[nz-wave],button[nz-button]:not([nzType=\"link\"]):not([nzType=\"text\"])", inputs: ["nzWaveExtraNode"], exportAs: ["nzWave"] }, { type: i7.ɵNzTransitionPatchDirective, selector: "[nz-button], nz-button-group, [nz-icon], [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group", inputs: ["hidden"] }, { type: i8.RouterLink, selector: ":not(a):not(area)[routerLink]", inputs: ["routerLink", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ExceptionComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'exception',
                        exportAs: 'exception',
                        templateUrl: './exception.component.html',
                        host: {
                            '[class.exception]': 'true',
                            '[class.exception-rtl]': "dir === 'rtl'",
                        },
                        preserveWhitespaces: false,
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                    }]
            }], function () {
            return [{ type: i1.DelonLocaleService }, { type: i2.DomSanitizer }, { type: i3.Directionality, decorators: [{
                            type: i0.Optional
                        }] }];
        }, { conTpl: [{
                    type: i0.ViewChild,
                    args: ['conTpl', { static: true }]
                }], type: [{
                    type: i0.Input
                }], img: [{
                    type: i0.Input
                }], title: [{
                    type: i0.Input
                }], desc: [{
                    type: i0.Input
                }] });
    })();

    var COMPONENTS = [ExceptionComponent];
    var ExceptionModule = /** @class */ (function () {
        function ExceptionModule() {
        }
        return ExceptionModule;
    }());
    /** @nocollapse */ ExceptionModule.ɵmod = i0.ɵɵdefineNgModule({ type: ExceptionModule });
    /** @nocollapse */ ExceptionModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ExceptionModule_Factory(t) { return new (t || ExceptionModule)(); }, imports: [[i4.CommonModule, i8.RouterModule, i1.DelonLocaleModule, i5.NzButtonModule]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ExceptionModule, { declarations: [ExceptionComponent], imports: [i4.CommonModule, i8.RouterModule, i1.DelonLocaleModule, i5.NzButtonModule], exports: [ExceptionComponent] }); })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ExceptionModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [i4.CommonModule, i8.RouterModule, i1.DelonLocaleModule, i5.NzButtonModule],
                        declarations: COMPONENTS,
                        exports: COMPONENTS,
                    }]
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ExceptionComponent = ExceptionComponent;
    exports.ExceptionModule = ExceptionModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=exception.umd.js.map
