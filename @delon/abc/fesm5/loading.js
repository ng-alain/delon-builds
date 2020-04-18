import { Injectable, ɵɵdefineInjectable, Component, ChangeDetectionStrategy, ViewEncapsulation, ɵɵinject, NgModule } from '@angular/core';
import { __assign } from 'tslib';
import { Overlay, OverlayModule } from '@angular/cdk/overlay';
import { ComponentPortal, PortalModule } from '@angular/cdk/portal';
import { Subject, timer } from 'rxjs';
import { debounce } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpinModule } from 'ng-zorro-antd/spin';

/**
 * @fileoverview added by tsickle
 * Generated from: loading.config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LoadingConfig = /** @class */ (function () {
    function LoadingConfig() {
        this.type = 'spin';
        this.text = '加载中...';
        this.icon = {
            type: 'loading',
            theme: 'outline',
            spin: true,
        };
        this.delay = 0;
    }
    LoadingConfig.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ LoadingConfig.ɵprov = ɵɵdefineInjectable({ factory: function LoadingConfig_Factory() { return new LoadingConfig(); }, token: LoadingConfig, providedIn: "root" });
    return LoadingConfig;
}());
if (false) {
    /** @type {?} */
    LoadingConfig.prototype.type;
    /** @type {?} */
    LoadingConfig.prototype.text;
    /** @type {?} */
    LoadingConfig.prototype.icon;
    /** @type {?} */
    LoadingConfig.prototype.custom;
    /** @type {?} */
    LoadingConfig.prototype.delay;
}

/**
 * @fileoverview added by tsickle
 * Generated from: loading.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LoadingDefaultComponent = /** @class */ (function () {
    function LoadingDefaultComponent() {
    }
    Object.defineProperty(LoadingDefaultComponent.prototype, "icon", {
        get: /**
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (this.options.icon));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoadingDefaultComponent.prototype, "custom", {
        get: /**
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (this.options.custom));
        },
        enumerable: true,
        configurable: true
    });
    LoadingDefaultComponent.decorators = [
        { type: Component, args: [{
                    selector: 'loading-default',
                    template: "<div class=\"loading-default__icon\" *ngIf=\"options.type !== 'text'\">\n  <ng-container [ngSwitch]=\"options.type\">\n    <nz-spin *ngSwitchCase=\"'spin'\" nzSimple></nz-spin>\n    <i *ngSwitchCase=\"'icon'\" nz-icon [nzType]=\"icon.type\" [nzTheme]=\"icon.theme\" [nzSpin]=\"icon.spin\"></i>\n    <div *ngSwitchDefault class=\"loading-default__custom\" [ngStyle]=\"custom.style\" [innerHTML]=\"custom.html\"></div>\n  </ng-container>\n</div>\n<div *ngIf=\"options.text\" class=\"loading-default__text\">{{ options.text }}</div>\n",
                    host: {
                        '[class.loading-default]': 'true',
                    },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    return LoadingDefaultComponent;
}());
if (false) {
    /** @type {?} */
    LoadingDefaultComponent.prototype.options;
}

/**
 * @fileoverview added by tsickle
 * Generated from: loading.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LoadingService = /** @class */ (function () {
    function LoadingService(cog, overlay) {
        var _this = this;
        this.cog = cog;
        this.overlay = overlay;
        this.compRef = null;
        this.opt = null;
        this.n$ = new Subject();
        this.loading$ = this.n$
            .asObservable()
            .pipe(debounce((/**
         * @return {?}
         */
        function () { return timer((/** @type {?} */ (_this.opt)).delay); })))
            .subscribe((/**
         * @return {?}
         */
        function () { return _this.create(); }));
    }
    Object.defineProperty(LoadingService.prototype, "instance", {
        get: /**
         * @return {?}
         */
        function () {
            return this.compRef != null ? this.compRef.instance : null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    LoadingService.prototype.create = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.opt == null)
            return;
        this._close(false);
        this._overlayRef = this.overlay.create({
            positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
            scrollStrategy: this.overlay.scrollStrategies.block(),
            hasBackdrop: true,
            backdropClass: 'loading-backdrop',
        });
        /** @type {?} */
        var comp = new ComponentPortal(LoadingDefaultComponent);
        this.compRef = this._overlayRef.attach(comp);
        Object.assign(this.instance, { options: this.opt });
        this.compRef.changeDetectorRef.markForCheck();
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    LoadingService.prototype.open = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        this.opt = __assign(__assign({}, this.cog), options);
        this.n$.next();
    };
    /**
     * @private
     * @param {?} cleanOpt
     * @return {?}
     */
    LoadingService.prototype._close = /**
     * @private
     * @param {?} cleanOpt
     * @return {?}
     */
    function (cleanOpt) {
        if (cleanOpt)
            this.opt = null;
        if (!this._overlayRef)
            return;
        this._overlayRef.detach();
        this.compRef = null;
    };
    /**
     * @return {?}
     */
    LoadingService.prototype.close = /**
     * @return {?}
     */
    function () {
        this._close(true);
    };
    /**
     * @return {?}
     */
    LoadingService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.loading$.unsubscribe();
    };
    LoadingService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    LoadingService.ctorParameters = function () { return [
        { type: LoadingConfig },
        { type: Overlay }
    ]; };
    /** @nocollapse */ LoadingService.ɵprov = ɵɵdefineInjectable({ factory: function LoadingService_Factory() { return new LoadingService(ɵɵinject(LoadingConfig), ɵɵinject(Overlay)); }, token: LoadingService, providedIn: "root" });
    return LoadingService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    LoadingService.prototype._overlayRef;
    /**
     * @type {?}
     * @private
     */
    LoadingService.prototype.compRef;
    /**
     * @type {?}
     * @private
     */
    LoadingService.prototype.opt;
    /**
     * @type {?}
     * @private
     */
    LoadingService.prototype.n$;
    /**
     * @type {?}
     * @private
     */
    LoadingService.prototype.loading$;
    /**
     * @type {?}
     * @private
     */
    LoadingService.prototype.cog;
    /**
     * @type {?}
     * @private
     */
    LoadingService.prototype.overlay;
}

/**
 * @fileoverview added by tsickle
 * Generated from: loading.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LoadingModule = /** @class */ (function () {
    function LoadingModule() {
    }
    LoadingModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, OverlayModule, PortalModule, NzIconModule, NzSpinModule],
                    declarations: [LoadingDefaultComponent],
                    exports: [LoadingDefaultComponent],
                },] }
    ];
    return LoadingModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: loading.interfaces.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function LoadingIcon() { }
if (false) {
    /** @type {?|undefined} */
    LoadingIcon.prototype.type;
    /** @type {?|undefined} */
    LoadingIcon.prototype.theme;
    /** @type {?|undefined} */
    LoadingIcon.prototype.spin;
}
/**
 * @record
 */
function LoadingCustom() { }
if (false) {
    /** @type {?|undefined} */
    LoadingCustom.prototype.html;
    /** @type {?|undefined} */
    LoadingCustom.prototype.style;
}
/**
 * @record
 */
function LoadingShowOptions() { }
if (false) {
    /**
     * Display type of loading indicator
     * @type {?|undefined}
     */
    LoadingShowOptions.prototype.type;
    /**
     * Customized description content
     * @type {?|undefined}
     */
    LoadingShowOptions.prototype.text;
    /**
     * Custom icon
     * @type {?|undefined}
     */
    LoadingShowOptions.prototype.icon;
    /**
     * Custom loading indicator
     * @type {?|undefined}
     */
    LoadingShowOptions.prototype.custom;
    /**
     * Specifies a delay in milliseconds for loading state (prevent flush), unit: milliseconds
     * @type {?|undefined}
     */
    LoadingShowOptions.prototype.delay;
}

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: loading.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { LoadingConfig, LoadingDefaultComponent, LoadingModule, LoadingService };
//# sourceMappingURL=loading.js.map
