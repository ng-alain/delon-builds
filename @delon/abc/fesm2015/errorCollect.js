import { __decorate, __metadata } from 'tslib';
import { DOCUMENT, CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, ViewEncapsulation, ElementRef, ChangeDetectorRef, Inject, Input, Injectable, ɵɵdefineInjectable, NgModule } from '@angular/core';
import { AlainConfigService } from '@delon/theme';
import { InputNumber, deprecation10Cog, DelonUtilModule } from '@delon/util';
import { NzIconModule } from 'ng-zorro-antd/icon';

/**
 * @fileoverview added by tsickle
 * Generated from: error-collect.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ErrorCollectComponent {
    /**
     * @param {?} el
     * @param {?} cdr
     * @param {?} doc
     * @param {?} configSrv
     */
    constructor(el, cdr, doc, configSrv) {
        this.el = el;
        this.cdr = cdr;
        this.doc = doc;
        this.$time = null;
        this._hiden = true;
        this.count = 0;
        configSrv.attach(this, 'errorCollect', { freq: 500, offsetTop: 65 + 64 + 8 * 2 });
    }
    /**
     * @private
     * @return {?}
     */
    get errEls() {
        return (/** @type {?} */ (this.formEl)).querySelectorAll('.ant-form-item-has-error');
    }
    /**
     * @private
     * @return {?}
     */
    update() {
        /** @type {?} */
        const count = this.errEls.length;
        if (count === this.count)
            return;
        this.count = count;
        this._hiden = count === 0;
        this.cdr.markForCheck();
    }
    /**
     * @return {?}
     */
    _click() {
        if (this.count === 0)
            return false;
        // nz-form-control
        /** @type {?} */
        const els = this.errEls;
        /** @type {?} */
        const formItemEl = this.findParent(els[0], '[nz-form-control]') || els[0];
        formItemEl.scrollIntoView(true);
        // fix header height
        this.doc.documentElement.scrollTop -= this.offsetTop;
        return true;
    }
    /**
     * @private
     * @return {?}
     */
    install() {
        this.uninstall();
        this.$time = setInterval((/**
         * @return {?}
         */
        () => this.update()), this.freq);
        this.update();
    }
    /**
     * @private
     * @return {?}
     */
    uninstall() {
        clearInterval((/** @type {?} */ (this.$time)));
    }
    /**
     * @private
     * @param {?} el
     * @param {?} selector
     * @return {?}
     */
    findParent(el, selector) {
        /** @type {?} */
        let retEl = null;
        while (el) {
            if (el.querySelector(selector)) {
                retEl = (/** @type {?} */ (el));
                break;
            }
            el = (/** @type {?} */ (el.parentElement));
        }
        return retEl;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.formEl = this.findParent(this.el.nativeElement, 'form');
        if (this.formEl === null)
            throw new Error('No found form element');
        this.install();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.uninstall();
    }
}
ErrorCollectComponent.decorators = [
    { type: Component, args: [{
                selector: 'error-collect, [error-collect]',
                exportAs: 'errorCollect',
                template: `
    <i nz-icon nzType="exclamation-circle"></i>
    <span class="pl-sm">{{ count }}</span>
  `,
                host: {
                    '[class.error-collect]': 'true',
                    '[class.d-none]': '_hiden',
                    '(click)': '_click()',
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
ErrorCollectComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: AlainConfigService }
];
ErrorCollectComponent.propDecorators = {
    freq: [{ type: Input }],
    offsetTop: [{ type: Input }]
};
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], ErrorCollectComponent.prototype, "freq", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], ErrorCollectComponent.prototype, "offsetTop", void 0);
if (false) {
    /**
     * @type {?}
     * @private
     */
    ErrorCollectComponent.prototype.$time;
    /**
     * @type {?}
     * @private
     */
    ErrorCollectComponent.prototype.formEl;
    /** @type {?} */
    ErrorCollectComponent.prototype.freq;
    /** @type {?} */
    ErrorCollectComponent.prototype.offsetTop;
    /** @type {?} */
    ErrorCollectComponent.prototype._hiden;
    /** @type {?} */
    ErrorCollectComponent.prototype.count;
    /**
     * @type {?}
     * @private
     */
    ErrorCollectComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    ErrorCollectComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    ErrorCollectComponent.prototype.doc;
}

/**
 * @fileoverview added by tsickle
 * Generated from: error-collect.config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @deprecated `ErrorCollectConfig` is going to be removed in 10.0.0. Please refer to https://ng-alain.com/docs/global-config
 */
class ErrorCollectConfig {
    constructor() {
        /**
         * 监听频率
         */
        this.freq = 500;
        /**
         * 顶部偏移值
         */
        this.offsetTop = 65 + 64 + 8 * 2;
        deprecation10Cog(`ErrorCollectConfig`);
    }
}
ErrorCollectConfig.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ErrorCollectConfig.ctorParameters = () => [];
/** @nocollapse */ ErrorCollectConfig.ɵprov = ɵɵdefineInjectable({ factory: function ErrorCollectConfig_Factory() { return new ErrorCollectConfig(); }, token: ErrorCollectConfig, providedIn: "root" });
if (false) {
    /**
     * 监听频率
     * @type {?}
     */
    ErrorCollectConfig.prototype.freq;
    /**
     * 顶部偏移值
     * @type {?}
     */
    ErrorCollectConfig.prototype.offsetTop;
}

/**
 * @fileoverview added by tsickle
 * Generated from: error-collect.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [ErrorCollectComponent];
class ErrorCollectModule {
}
ErrorCollectModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, DelonUtilModule, NzIconModule],
                declarations: [...COMPONENTS],
                exports: [...COMPONENTS],
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: errorCollect.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ErrorCollectComponent, ErrorCollectConfig, ErrorCollectModule };
//# sourceMappingURL=errorCollect.js.map
