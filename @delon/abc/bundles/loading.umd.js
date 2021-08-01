/**
 * @license ng-alain(cipchk@qq.com) v12.0.3
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/cdk/bidi'), require('@angular/cdk/overlay'), require('@angular/cdk/portal'), require('rxjs'), require('rxjs/operators'), require('@delon/util/config'), require('@angular/common'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/spin')) :
    typeof define === 'function' && define.amd ? define('@delon/abc/loading', ['exports', '@angular/core', '@angular/cdk/bidi', '@angular/cdk/overlay', '@angular/cdk/portal', 'rxjs', 'rxjs/operators', '@delon/util/config', '@angular/common', 'ng-zorro-antd/icon', 'ng-zorro-antd/spin'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.delon = global.delon || {}, global.delon.abc = global.delon.abc || {}, global.delon.abc.loading = {}), global.ng.core, global.ng.cdk.bidi, global.ng.cdk.overlay, global.ng.cdk.portal, global.rxjs, global.rxjs.operators, global.i2, global.ng.common, global['ng-zorro-antd/icon'], global['ng-zorro-antd/spin']));
}(this, (function (exports, i0, i3, i1, portal, rxjs, operators, i2, common, icon, spin) { 'use strict';

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
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);

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
    LoadingDefaultComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'loading-default',
                    template: "<div class=\"loading-default__icon\" *ngIf=\"options.type! !== 'text'\">\n  <ng-container [ngSwitch]=\"options.type!\">\n    <nz-spin *ngSwitchCase=\"'spin'\" nzSimple></nz-spin>\n    <i *ngSwitchCase=\"'icon'\" nz-icon [nzType]=\"icon.type!\" [nzTheme]=\"icon.theme!\" [nzSpin]=\"icon.spin\"></i>\n    <div *ngSwitchDefault class=\"loading-default__custom\" [ngStyle]=\"custom.style!\" [innerHTML]=\"custom.html\"></div>\n  </ng-container>\n</div>\n<div *ngIf=\"options.text\" class=\"loading-default__text\">{{ options.text }}</div>\n",
                    host: {
                        '[class.loading-default]': 'true',
                        '[class.loading-default-rtl]': "dir === 'rtl'"
                    },
                    preserveWhitespaces: false,
                    changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    encapsulation: i0.ViewEncapsulation.None
                },] }
    ];

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
                    spin: true
                },
                delay: 0
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
                backdropClass: 'loading-backdrop'
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
    LoadingService.ɵprov = i0__namespace.ɵɵdefineInjectable({ factory: function LoadingService_Factory() { return new LoadingService(i0__namespace.ɵɵinject(i1__namespace.Overlay), i0__namespace.ɵɵinject(i2__namespace.AlainConfigService), i0__namespace.ɵɵinject(i3__namespace.Directionality, 8)); }, token: LoadingService, providedIn: "root" });
    LoadingService.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];
    LoadingService.ctorParameters = function () { return [
        { type: i1.Overlay },
        { type: i2.AlainConfigService },
        { type: i3.Directionality, decorators: [{ type: i0.Optional }] }
    ]; };

    var COMPONENTS = [LoadingDefaultComponent];
    var LoadingModule = /** @class */ (function () {
        function LoadingModule() {
        }
        return LoadingModule;
    }());
    LoadingModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [common.CommonModule, i1.OverlayModule, portal.PortalModule, icon.NzIconModule, spin.NzSpinModule],
                    declarations: COMPONENTS,
                    entryComponents: COMPONENTS,
                    exports: COMPONENTS
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.LoadingDefaultComponent = LoadingDefaultComponent;
    exports.LoadingModule = LoadingModule;
    exports.LoadingService = LoadingService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=loading.umd.js.map
