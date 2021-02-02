import { Injectable, ɵɵdefineInjectable, ɵɵinject, Directive, ElementRef, NgZone, ChangeDetectorRef, ViewChild, Input } from '@angular/core';
import { AlainConfigService } from '@delon/util/config';
import { LazyService } from '@delon/util/other';
import { Subject } from 'rxjs';
import { __decorate, __metadata } from 'tslib';
import { Platform } from '@angular/cdk/platform';
import { InputNumber } from '@delon/util/decorator';
import { takeUntil, filter } from 'rxjs/operators';

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
 * Generated from: g2.base.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class G2BaseComponent {
    /**
     * @param {?} srv
     * @param {?} el
     * @param {?} ngZone
     * @param {?} platform
     * @param {?} cdr
     */
    constructor(srv, el, ngZone, platform, cdr) {
        this.srv = srv;
        this.el = el;
        this.ngZone = ngZone;
        this.platform = platform;
        this.cdr = cdr;
        this.destroy$ = new Subject();
        this.loaded = false;
        this.delay = 0;
        this.theme = (/** @type {?} */ (srv.cog.theme));
        this.srv.notify
            .pipe(takeUntil(this.destroy$), filter((/**
         * @return {?}
         */
        () => !this.loaded)))
            .subscribe((/**
         * @return {?}
         */
        () => this.load()));
    }
    /**
     * @return {?}
     */
    get chart() {
        return this._chart;
    }
    /**
     * @return {?}
     */
    onInit() { }
    /**
     * @return {?}
     */
    onChanges() { }
    /**
     * @private
     * @return {?}
     */
    load() {
        this.ngZone.run((/**
         * @return {?}
         */
        () => {
            this.loaded = true;
            this.cdr.detectChanges();
        }));
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => setTimeout((/**
         * @return {?}
         */
        () => this.install()), this.delay)));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.platform.isBrowser) {
            return;
        }
        this.onInit();
        if (((/** @type {?} */ (window))).G2) {
            this.load();
        }
        else {
            this.srv.libLoad();
        }
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.onChanges();
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => this.attachChart()));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.resize$) {
            this.resize$.unsubscribe();
        }
        this.destroy$.next();
        this.destroy$.complete();
        if (this._chart) {
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => this._chart.destroy()));
        }
    }
}
G2BaseComponent.decorators = [
    { type: Directive }
];
/** @nocollapse */
G2BaseComponent.ctorParameters = () => [
    { type: G2Service },
    { type: ElementRef },
    { type: NgZone },
    { type: Platform },
    { type: ChangeDetectorRef }
];
G2BaseComponent.propDecorators = {
    node: [{ type: ViewChild, args: ['container', { static: true },] }],
    delay: [{ type: Input }],
    theme: [{ type: Input }]
};
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2BaseComponent.prototype, "delay", void 0);
if (false) {
    /** @type {?} */
    G2BaseComponent.ngAcceptInputType_delay;
    /**
     * @type {?}
     * @protected
     */
    G2BaseComponent.prototype.node;
    /**
     * @type {?}
     * @protected
     */
    G2BaseComponent.prototype.resize$;
    /**
     * @type {?}
     * @protected
     */
    G2BaseComponent.prototype.destroy$;
    /**
     * @type {?}
     * @protected
     */
    G2BaseComponent.prototype._chart;
    /** @type {?} */
    G2BaseComponent.prototype.loaded;
    /** @type {?} */
    G2BaseComponent.prototype.delay;
    /** @type {?} */
    G2BaseComponent.prototype.theme;
    /**
     * @type {?}
     * @protected
     */
    G2BaseComponent.prototype.srv;
    /**
     * @type {?}
     * @protected
     */
    G2BaseComponent.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    G2BaseComponent.prototype.ngZone;
    /**
     * @type {?}
     * @protected
     */
    G2BaseComponent.prototype.platform;
    /**
     * @type {?}
     * @protected
     */
    G2BaseComponent.prototype.cdr;
    /**
     * @abstract
     * @return {?}
     */
    G2BaseComponent.prototype.install = function () { };
    /**
     * @abstract
     * @return {?}
     */
    G2BaseComponent.prototype.attachChart = function () { };
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

export { G2BaseComponent, G2Service };
//# sourceMappingURL=delon-chart-core.js.map
