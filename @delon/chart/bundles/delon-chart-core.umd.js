/**
 * @license ng-alain(cipchk@qq.com) v11.0.2
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@delon/util'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('@delon/chart/core', ['exports', '@angular/core', '@delon/util', 'rxjs'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.delon = global.delon || {}, global.delon.chart = global.delon.chart || {}, global.delon.chart.core = {}), global.ng.core, global.i1, global.rxjs));
}(this, (function (exports, i0, i1, rxjs) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: g2.servicce.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var G2Service = /** @class */ (function () {
        /**
         * @param {?} cogSrv
         * @param {?} lazySrv
         */
        function G2Service(cogSrv, lazySrv) {
            this.cogSrv = cogSrv;
            this.lazySrv = lazySrv;
            this.loading = false;
            this.loaded = false;
            this.notify$ = new rxjs.Subject();
            this.cog = { theme: '' };
        }
        Object.defineProperty(G2Service.prototype, "cog", {
            /**
             * @return {?}
             */
            get: function () {
                return this._cog;
            },
            /**
             * @param {?} val
             * @return {?}
             */
            set: function (val) {
                this._cog = ( /** @type {?} */(this.cogSrv.merge('chart', ( /** @type {?} */({
                    theme: '',
                    libs: [
                        'https://gw.alipayobjects.com/os/lib/antv/g2/4.1.4/dist/g2.min.js',
                        'https://gw.alipayobjects.com/os/lib/antv/data-set/0.11.7/dist/data-set.js',
                    ],
                })), val)));
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @template THIS
         * @this {THIS}
         * @return {THIS}
         */
        G2Service.prototype.libLoad = function () {
            var _this = this;
            if (( /** @type {?} */(this)).loading) {
                if (( /** @type {?} */(this)).loaded) {
                    ( /** @type {?} */(this)).notify$.next();
                }
                return ( /** @type {?} */(this));
            }
            ( /** @type {?} */(this)).loading = true;
            ( /** @type {?} */(this)).lazySrv.load(( /** @type {?} */(( /** @type {?} */(this)).cog.libs))).then(( /**
             * @return {?}
             */function () {
                ( /** @type {?} */(_this)).loaded = true;
                ( /** @type {?} */(_this)).notify$.next();
            }));
            return ( /** @type {?} */(this));
        };
        Object.defineProperty(G2Service.prototype, "notify", {
            /**
             * @return {?}
             */
            get: function () {
                return this.notify$.asObservable();
            },
            enumerable: false,
            configurable: true
        });
        /**
         * @return {?}
         */
        G2Service.prototype.ngOnDestroy = function () {
            this.notify$.unsubscribe();
        };
        return G2Service;
    }());
    G2Service.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    G2Service.ctorParameters = function () { return [
        { type: i1.AlainConfigService },
        { type: i1.LazyService }
    ]; };
    /** @nocollapse */ G2Service.ɵprov = i0.ɵɵdefineInjectable({ factory: function G2Service_Factory() { return new G2Service(i0.ɵɵinject(i1.AlainConfigService), i0.ɵɵinject(i1.LazyService)); }, token: G2Service, providedIn: "root" });
    if (false) {
        /**
         * @type {?}
         * @private
         */
        G2Service.prototype._cog;
        /**
         * @type {?}
         * @private
         */
        G2Service.prototype.loading;
        /**
         * @type {?}
         * @private
         */
        G2Service.prototype.loaded;
        /**
         * @type {?}
         * @private
         */
        G2Service.prototype.notify$;
        /**
         * @type {?}
         * @private
         */
        G2Service.prototype.cogSrv;
        /**
         * @type {?}
         * @private
         */
        G2Service.prototype.lazySrv;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: delon-chart-core.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.G2Service = G2Service;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=delon-chart-core.umd.js.map
