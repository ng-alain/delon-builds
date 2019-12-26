import { Injectable, ɵɵdefineInjectable, Component, ChangeDetectionStrategy, ViewEncapsulation, ɵɵinject, NgModule } from '@angular/core';
import { Overlay, OverlayModule } from '@angular/cdk/overlay';
import { ComponentPortal, PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpinModule } from 'ng-zorro-antd/spin';

/**
 * @fileoverview added by tsickle
 * Generated from: loading.config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LoadingConfig {
    constructor() {
        this.type = 'spin';
        this.text = '加载中...';
        this.icon = {
            type: 'loading',
            theme: 'outline',
            spin: true,
        };
        this.delay = 0;
    }
}
LoadingConfig.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ LoadingConfig.ngInjectableDef = ɵɵdefineInjectable({ factory: function LoadingConfig_Factory() { return new LoadingConfig(); }, token: LoadingConfig, providedIn: "root" });
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
class LoadingDefaultComponent {
    /**
     * @return {?}
     */
    get icon() {
        return (/** @type {?} */ (this.options.icon));
    }
    /**
     * @return {?}
     */
    get custom() {
        return (/** @type {?} */ (this.options.custom));
    }
}
LoadingDefaultComponent.decorators = [
    { type: Component, args: [{
                selector: 'loading-default',
                template: "<div class=\"loading-default__icon\" *ngIf=\"options.type !== 'text'\">\n  <ng-container [ngSwitch]=\"options.type\">\n    <nz-spin *ngSwitchCase=\"'spin'\" nzSimple></nz-spin>\n    <i *ngSwitchCase=\"'icon'\" nz-icon [nzType]=\"icon.type\" [nzTheme]=\"icon.theme\" [nzSpin]=\"icon.spin\"></i>\n    <div *ngSwitchDefault class=\"loading-default__custom\" [ngStyle]=\"custom.style\" [innerHTML]=\"custom.html\"></div>\n  </ng-container>\n</div>\n<div *ngIf=\"options.text\" class=\"loading-default__text\">{{ options.text }}</div>",
                host: {
                    '[class.loading-default]': 'true',
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
if (false) {
    /** @type {?} */
    LoadingDefaultComponent.prototype.options;
}

/**
 * @fileoverview added by tsickle
 * Generated from: loading.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LoadingService {
    /**
     * @param {?} cog
     * @param {?} overlay
     */
    constructor(cog, overlay) {
        this.cog = cog;
        this.overlay = overlay;
        this.compRef = null;
    }
    /**
     * @return {?}
     */
    get instance() {
        return (/** @type {?} */ (this.compRef)).instance;
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    open(options) {
        if (this.compRef)
            return;
        options = Object.assign({}, this.cog, options);
        this._overlayRef = this.overlay.create({
            positionStrategy: this.overlay
                .position()
                .global()
                .centerHorizontally()
                .centerVertically(),
            scrollStrategy: this.overlay.scrollStrategies.block(),
            hasBackdrop: true,
            backdropClass: 'loading-backdrop',
        });
        /** @type {?} */
        const comp = new ComponentPortal(LoadingDefaultComponent);
        this.compRef = this._overlayRef.attach(comp);
        Object.assign(this.instance, { options });
        this.compRef.changeDetectorRef.detectChanges();
    }
    /**
     * @return {?}
     */
    close() {
        if (!this._overlayRef)
            return;
        (/** @type {?} */ (this.compRef)).destroy();
        this._overlayRef.detach();
        this.compRef = null;
    }
}
LoadingService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
LoadingService.ctorParameters = () => [
    { type: LoadingConfig },
    { type: Overlay }
];
/** @nocollapse */ LoadingService.ngInjectableDef = ɵɵdefineInjectable({ factory: function LoadingService_Factory() { return new LoadingService(ɵɵinject(LoadingConfig), ɵɵinject(Overlay)); }, token: LoadingService, providedIn: "root" });
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
class LoadingModule {
}
LoadingModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, OverlayModule, PortalModule, NzIconModule, NzSpinModule],
                declarations: [LoadingDefaultComponent],
                entryComponents: [LoadingDefaultComponent],
                exports: [LoadingDefaultComponent],
            },] }
];

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
    /** @type {?|undefined} */
    LoadingShowOptions.prototype.type;
    /** @type {?|undefined} */
    LoadingShowOptions.prototype.text;
    /** @type {?|undefined} */
    LoadingShowOptions.prototype.icon;
    /** @type {?|undefined} */
    LoadingShowOptions.prototype.custom;
    /** @type {?|undefined} */
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
