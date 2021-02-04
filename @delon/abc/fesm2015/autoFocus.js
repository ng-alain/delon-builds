import { __decorate, __metadata } from 'tslib';
import { Directive, ElementRef, ChangeDetectorRef, Input, NgModule } from '@angular/core';
import { InputBoolean, InputNumber } from '@delon/util/decorator';

/**
 * @fileoverview added by tsickle
 * Generated from: auto-focus.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AutoFocusDirective {
    /**
     * @param {?} el
     * @param {?} cdr
     */
    constructor(el, cdr) {
        this.el = el;
        this.cdr = cdr;
        this.enabled = true;
        this.delay = 300;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        /** @type {?} */
        const el = this.el.nativeElement;
        if (!(el instanceof HTMLElement) || !this.enabled) {
            return;
        }
        setTimeout((/**
         * @return {?}
         */
        () => {
            el.focus({ preventScroll: false });
            this.cdr.markForCheck();
        }), this.delay);
    }
}
AutoFocusDirective.decorators = [
    { type: Directive, args: [{
                selector: '[auto-focus], input[autofocus="autofocus"], textarea[autofocus="autofocus"]',
                exportAs: 'autoFocus',
            },] }
];
/** @nocollapse */
AutoFocusDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
AutoFocusDirective.propDecorators = {
    enabled: [{ type: Input }],
    delay: [{ type: Input }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], AutoFocusDirective.prototype, "enabled", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], AutoFocusDirective.prototype, "delay", void 0);
if (false) {
    /** @type {?} */
    AutoFocusDirective.ngAcceptInputType_enabled;
    /** @type {?} */
    AutoFocusDirective.ngAcceptInputType_delay;
    /** @type {?} */
    AutoFocusDirective.prototype.enabled;
    /** @type {?} */
    AutoFocusDirective.prototype.delay;
    /**
     * @type {?}
     * @private
     */
    AutoFocusDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    AutoFocusDirective.prototype.cdr;
}

/**
 * @fileoverview added by tsickle
 * Generated from: auto-focus.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [AutoFocusDirective];
class AutoFocusModule {
}
AutoFocusModule.decorators = [
    { type: NgModule, args: [{
                declarations: COMPONENTS,
                exports: COMPONENTS,
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: autoFocus.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AutoFocusDirective, AutoFocusModule };
//# sourceMappingURL=autoFocus.js.map
