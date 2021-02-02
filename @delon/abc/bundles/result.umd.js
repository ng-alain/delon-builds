/**
 * @license ng-alain(cipchk@qq.com) v11.3.1
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('@angular/cdk/bidi'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/core/outlet'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@delon/abc/result', ['exports', '@angular/core', 'rxjs', 'rxjs/operators', '@angular/cdk/bidi', 'ng-zorro-antd/icon', 'ng-zorro-antd/core/outlet', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.delon = global.delon || {}, global.delon.abc = global.delon.abc || {}, global.delon.abc.result = {}), global.ng.core, global.rxjs, global.rxjs.operators, global.ng.cdk.bidi, global['ng-zorro-antd/icon'], global['ng-zorro-antd/core/outlet'], global.ng.common));
}(this, (function (exports, i0, rxjs, operators, i1, i2, i3, i4) { 'use strict';

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

    var ResultComponent = /** @class */ (function () {
        function ResultComponent(directionality) {
            this.directionality = directionality;
            this.destroy$ = new rxjs.Subject();
            this._type = '';
            this._icon = '';
            this.dir = 'ltr';
        }
        Object.defineProperty(ResultComponent.prototype, "type", {
            set: function (value) {
                this._type = value;
                switch (value) {
                    case 'success':
                        this._icon = 'check-circle';
                        break;
                    case 'error':
                        this._icon = 'close-circle';
                        break;
                    default:
                        this._icon = value;
                        break;
                }
            },
            enumerable: false,
            configurable: true
        });
        ResultComponent.prototype.ngOnInit = function () {
            var _this = this;
            var _a;
            this.dir = this.directionality.value;
            (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(operators.takeUntil(this.destroy$)).subscribe(function (direction) {
                _this.dir = direction;
            });
        };
        ResultComponent.prototype.ngOnDestroy = function () {
            this.destroy$.next();
            this.destroy$.complete();
        };
        return ResultComponent;
    }());
    /** @nocollapse */ ResultComponent.ɵfac = function ResultComponent_Factory(t) { return new (t || ResultComponent)(i0.ɵɵdirectiveInject(i1.Directionality, 8)); };
    /** @nocollapse */ ResultComponent.ɵcmp = i0.ɵɵngDeclareComponent({ version: "11.1.1", type: ResultComponent, selector: "result", inputs: { type: "type", title: "title", description: "description", extra: "extra" }, host: { properties: { "class.result": "true", "class.result-rtl": "dir === 'rtl'" } }, exportAs: ["result"], ngImport: i0__namespace, template: "<div class=\"result__icon\">\n  <i nz-icon [nzType]=\"_icon\" class=\"result__icon-{{ _type }}\"></i>\n</div>\n<div class=\"result__title\">\n  <ng-container *nzStringTemplateOutlet=\"title\">{{ title }}</ng-container>\n</div>\n<div *ngIf=\"description\" class=\"result__desc\">\n  <ng-container *nzStringTemplateOutlet=\"description\">{{ description }}</ng-container>\n</div>\n<div *ngIf=\"extra\" class=\"result__extra\">\n  <ng-container *nzStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\n</div>\n<div class=\"result__actions\">\n  <ng-content></ng-content>\n</div>\n", directives: [{ type: i2.NzIconDirective, selector: "[nz-icon]", inputs: ["nzRotate", "nzSpin", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { type: i3.NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ResultComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'result',
                        exportAs: 'result',
                        templateUrl: './result.component.html',
                        host: {
                            '[class.result]': 'true',
                            '[class.result-rtl]': "dir === 'rtl'",
                        },
                        preserveWhitespaces: false,
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                    }]
            }], function () {
            return [{ type: i1.Directionality, decorators: [{
                            type: i0.Optional
                        }] }];
        }, { type: [{
                    type: i0.Input
                }], title: [{
                    type: i0.Input
                }], description: [{
                    type: i0.Input
                }], extra: [{
                    type: i0.Input
                }] });
    })();

    var COMPONENTS = [ResultComponent];
    var ResultModule = /** @class */ (function () {
        function ResultModule() {
        }
        return ResultModule;
    }());
    /** @nocollapse */ ResultModule.ɵmod = i0.ɵɵdefineNgModule({ type: ResultModule });
    /** @nocollapse */ ResultModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ResultModule_Factory(t) { return new (t || ResultModule)(); }, imports: [[i4.CommonModule, i2.NzIconModule, i3.NzOutletModule]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ResultModule, { declarations: [ResultComponent], imports: [i4.CommonModule, i2.NzIconModule, i3.NzOutletModule], exports: [ResultComponent] }); })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ResultModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [i4.CommonModule, i2.NzIconModule, i3.NzOutletModule],
                        declarations: COMPONENTS,
                        exports: COMPONENTS,
                    }]
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ResultComponent = ResultComponent;
    exports.ResultModule = ResultModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=result.umd.js.map
