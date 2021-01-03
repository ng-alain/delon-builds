import { Injectable, ɵɵdefineInjectable, ɵɵinject } from '@angular/core';
import { AlainConfigService, LazyService } from '@delon/util';
import { Subject } from 'rxjs';

/**
 * @fileoverview added by tsickle
 * Generated from: types/interaction.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: types/time.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: g2.servicce.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class G2Service {
    /**
     * @param {?} cogSrv
     * @param {?} lazySrv
     */
    constructor(cogSrv, lazySrv) {
        this.cogSrv = cogSrv;
        this.lazySrv = lazySrv;
        this.loading = false;
        this.loaded = false;
        this.notify$ = new Subject();
        this.cog = { theme: '' };
    }
    /**
     * @return {?}
     */
    get cog() {
        return this._cog;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set cog(val) {
        this._cog = (/** @type {?} */ (this.cogSrv.merge('chart', (/** @type {?} */ ({
            theme: '',
            libs: [
                'https://gw.alipayobjects.com/os/lib/antv/g2/4.1.4/dist/g2.min.js',
                'https://gw.alipayobjects.com/os/lib/antv/data-set/0.11.7/dist/data-set.js',
            ],
        })), val)));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    libLoad() {
        if ((/** @type {?} */ (this)).loading) {
            if ((/** @type {?} */ (this)).loaded) {
                (/** @type {?} */ (this)).notify$.next();
            }
            return (/** @type {?} */ (this));
        }
        (/** @type {?} */ (this)).loading = true;
        (/** @type {?} */ (this)).lazySrv.load((/** @type {?} */ ((/** @type {?} */ (this)).cog.libs))).then((/**
         * @return {?}
         */
        () => {
            (/** @type {?} */ (this)).loaded = true;
            (/** @type {?} */ (this)).notify$.next();
        }));
        return (/** @type {?} */ (this));
    }
    /**
     * @return {?}
     */
    get notify() {
        return this.notify$.asObservable();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.notify$.unsubscribe();
    }
}
G2Service.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
G2Service.ctorParameters = () => [
    { type: AlainConfigService },
    { type: LazyService }
];
/** @nocollapse */ G2Service.ɵprov = ɵɵdefineInjectable({ factory: function G2Service_Factory() { return new G2Service(ɵɵinject(AlainConfigService), ɵɵinject(LazyService)); }, token: G2Service, providedIn: "root" });
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
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: delon-chart-core.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { G2Service };
//# sourceMappingURL=delon-chart-core.js.map
