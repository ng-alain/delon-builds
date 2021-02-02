/**
 * @license ng-alain(cipchk@qq.com) v11.3.1
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('ng-zorro-antd/spin'), require('ng-zorro-antd/icon'), require('@angular/cdk/portal'), require('rxjs'), require('rxjs/operators'), require('@angular/cdk/overlay'), require('@delon/util/config'), require('@angular/cdk/bidi')) :
    typeof define === 'function' && define.amd ? define('@delon/abc/loading', ['exports', '@angular/core', '@angular/common', 'ng-zorro-antd/spin', 'ng-zorro-antd/icon', '@angular/cdk/portal', 'rxjs', 'rxjs/operators', '@angular/cdk/overlay', '@delon/util/config', '@angular/cdk/bidi'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.delon = global.delon || {}, global.delon.abc = global.delon.abc || {}, global.delon.abc.loading = {}), global.ng.core, global.ng.common, global['ng-zorro-antd/spin'], global['ng-zorro-antd/icon'], global.ng.cdk.portal, global.rxjs, global.rxjs.operators, global.ng.cdk.overlay, global.i2$1, global.ng.cdk.bidi));
}(this, (function (exports, i0, i1, i2, i3, portal, rxjs, operators, i1$1, i2$1, i3$1) { 'use strict';

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

    var LoadingDefaultComponent = /** @class */ (function () {
        function LoadingDefaultComponent() {
            this.dir = 'ltr';
        }
        Object.defineProperty(LoadingDefaultComponent.prototype, "icon", {
            get: function () {
                return this.options.icon;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(LoadingDefaultComponent.prototype, "custom", {
            get: function () {
                return this.options.custom;
            },
            enumerable: false,
            configurable: true
        });
        return LoadingDefaultComponent;
    }());
    /** @nocollapse */ LoadingDefaultComponent.ɵfac = function LoadingDefaultComponent_Factory(t) { return new (t || LoadingDefaultComponent)(); };
    /** @nocollapse */ LoadingDefaultComponent.ɵcmp = i0.ɵɵngDeclareComponent({ version: "11.1.1", type: LoadingDefaultComponent, selector: "loading-default", host: { properties: { "class.loading-default": "true", "class.loading-default-rtl": "dir === 'rtl'" } }, ngImport: i0__namespace, template: "<div class=\"loading-default__icon\" *ngIf=\"options.type !== 'text'\">\n  <ng-container [ngSwitch]=\"options.type\">\n    <nz-spin *ngSwitchCase=\"'spin'\" nzSimple></nz-spin>\n    <i *ngSwitchCase=\"'icon'\" nz-icon [nzType]=\"icon.type\" [nzTheme]=\"icon.theme\" [nzSpin]=\"icon.spin\"></i>\n    <div *ngSwitchDefault class=\"loading-default__custom\" [ngStyle]=\"custom.style\" [innerHTML]=\"custom.html\"></div>\n  </ng-container>\n</div>\n<div *ngIf=\"options.text\" class=\"loading-default__text\">{{ options.text }}</div>\n", directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { type: i1.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { type: i2.NzSpinComponent, selector: "nz-spin", inputs: ["nzIndicator", "nzSize", "nzTip", "nzDelay", "nzSimple", "nzSpinning"], exportAs: ["nzSpin"] }, { type: i3.NzIconDirective, selector: "[nz-icon]", inputs: ["nzRotate", "nzSpin", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { type: i1.NgSwitchDefault, selector: "[ngSwitchDefault]" }, { type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoadingDefaultComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'loading-default',
                        templateUrl: './loading.component.html',
                        host: {
                            '[class.loading-default]': 'true',
                            '[class.loading-default-rtl]': "dir === 'rtl'",
                        },
                        preserveWhitespaces: false,
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                    }]
            }], null, null);
    })();

    var LoadingService = /** @class */ (function () {
        function LoadingService(overlay, configSrv, directionality) {
            var _this = this;
            this.overlay = overlay;
            this.configSrv = configSrv;
            this.directionality = directionality;
            this.compRef = null;
            this.opt = null;
            this.n$ = new rxjs.Subject();
            this.cog = configSrv.merge('loading', {
                type: 'spin',
                text: '加载中...',
                icon: {
                    type: 'loading',
                    theme: 'outline',
                    spin: true,
                },
                delay: 0,
            });
            this.loading$ = this.n$
                .asObservable()
                .pipe(operators.debounce(function () { return rxjs.timer(_this.opt.delay); }))
                .subscribe(function () { return _this.create(); });
        }
        Object.defineProperty(LoadingService.prototype, "instance", {
            get: function () {
                return this.compRef != null ? this.compRef.instance : null;
            },
            enumerable: false,
            configurable: true
        });
        LoadingService.prototype.create = function () {
            if (this.opt == null)
                return;
            this._close(false);
            this._overlayRef = this.overlay.create({
                positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
                scrollStrategy: this.overlay.scrollStrategies.block(),
                hasBackdrop: true,
                backdropClass: 'loading-backdrop',
            });
            this.compRef = this._overlayRef.attach(new portal.ComponentPortal(LoadingDefaultComponent));
            var dir = this.configSrv.get('loading').direction || this.directionality.value;
            Object.assign(this.instance, { options: this.opt, dir: dir });
            this.compRef.changeDetectorRef.markForCheck();
        };
        /**
         * Open a new loading indicator
         *
         * 打开一个新加载指示符
         */
        LoadingService.prototype.open = function (options) {
            this.opt = Object.assign(Object.assign({}, this.cog), options);
            this.n$.next();
        };
        LoadingService.prototype._close = function (cleanOpt) {
            if (cleanOpt)
                this.opt = null;
            if (!this._overlayRef)
                return;
            this._overlayRef.detach();
            this.compRef = null;
        };
        /**
         * Turn off a loading indicator
         *
         * 关闭一个加载指示符
         */
        LoadingService.prototype.close = function () {
            this._close(true);
        };
        LoadingService.prototype.ngOnDestroy = function () {
            this.loading$.unsubscribe();
        };
        return LoadingService;
    }());
    /** @nocollapse */ LoadingService.ɵfac = function LoadingService_Factory(t) { return new (t || LoadingService)(i0.ɵɵinject(i1$1.Overlay), i0.ɵɵinject(i2$1.AlainConfigService), i0.ɵɵinject(i3$1.Directionality, 8)); };
    /** @nocollapse */ LoadingService.ɵprov = i0.ɵɵdefineInjectable({ token: LoadingService, factory: LoadingService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoadingService, [{
                type: i0.Injectable,
                args: [{ providedIn: 'root' }]
            }], function () {
            return [{ type: i1$1.Overlay }, { type: i2$1.AlainConfigService }, { type: i3$1.Directionality, decorators: [{
                            type: i0.Optional
                        }] }];
        }, null);
    })();

    var COMPONENTS = [LoadingDefaultComponent];
    var LoadingModule = /** @class */ (function () {
        function LoadingModule() {
        }
        return LoadingModule;
    }());
    /** @nocollapse */ LoadingModule.ɵmod = i0.ɵɵdefineNgModule({ type: LoadingModule });
    /** @nocollapse */ LoadingModule.ɵinj = i0.ɵɵdefineInjector({ factory: function LoadingModule_Factory(t) { return new (t || LoadingModule)(); }, imports: [[i1.CommonModule, i1$1.OverlayModule, portal.PortalModule, i3.NzIconModule, i2.NzSpinModule]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(LoadingModule, { declarations: [LoadingDefaultComponent], imports: [i1.CommonModule, i1$1.OverlayModule, portal.PortalModule, i3.NzIconModule, i2.NzSpinModule], exports: [LoadingDefaultComponent] }); })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoadingModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [i1.CommonModule, i1$1.OverlayModule, portal.PortalModule, i3.NzIconModule, i2.NzSpinModule],
                        declarations: COMPONENTS,
                        entryComponents: COMPONENTS,
                        exports: COMPONENTS,
                    }]
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.LoadingDefaultComponent = LoadingDefaultComponent;
    exports.LoadingModule = LoadingModule;
    exports.LoadingService = LoadingService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=loading.umd.js.map
