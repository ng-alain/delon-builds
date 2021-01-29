import { __decorate, __metadata } from 'tslib';
import { DOCUMENT, CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, ViewEncapsulation, ElementRef, Renderer2, Inject, Input, NgModule } from '@angular/core';
import { InputBoolean } from '@delon/util/other';
import { ErrorCollectModule } from '@delon/abc/error-collect';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';

/**
 * @fileoverview added by tsickle
 * Generated from: footer-toolbar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const CLSBODY = 'footer-toolbar__body';
class FooterToolbarComponent {
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} doc
     */
    constructor(el, renderer, doc) {
        this.el = el;
        this.renderer = renderer;
        this.doc = doc;
        this.errorCollect = false;
    }
    /**
     * @private
     * @return {?}
     */
    get bodyCls() {
        return ((/** @type {?} */ (this.doc.querySelector('body')))).classList;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.renderer.addClass(this.el.nativeElement, 'footer-toolbar');
        this.bodyCls.add(CLSBODY);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.bodyCls.remove(CLSBODY);
    }
}
FooterToolbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'footer-toolbar',
                exportAs: 'footerToolbar',
                template: "<div class=\"footer-toolbar__left\">\n  <ng-container *nzStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\n</div>\n<div class=\"footer-toolbar__right\">\n  <error-collect *ngIf=\"errorCollect\"></error-collect>\n  <ng-content></ng-content>\n</div>\n",
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
FooterToolbarComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
FooterToolbarComponent.propDecorators = {
    errorCollect: [{ type: Input }],
    extra: [{ type: Input }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], FooterToolbarComponent.prototype, "errorCollect", void 0);
if (false) {
    /** @type {?} */
    FooterToolbarComponent.ngAcceptInputType_errorCollect;
    /** @type {?} */
    FooterToolbarComponent.prototype.errorCollect;
    /** @type {?} */
    FooterToolbarComponent.prototype.extra;
    /**
     * @type {?}
     * @private
     */
    FooterToolbarComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    FooterToolbarComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    FooterToolbarComponent.prototype.doc;
}

/**
 * @fileoverview added by tsickle
 * Generated from: footer-toolbar.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [FooterToolbarComponent];
class FooterToolbarModule {
}
FooterToolbarModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, ErrorCollectModule, NzOutletModule],
                declarations: COMPONENTS,
                exports: COMPONENTS,
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: footerToolbar.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { FooterToolbarComponent, FooterToolbarModule };
//# sourceMappingURL=footerToolbar.js.map
