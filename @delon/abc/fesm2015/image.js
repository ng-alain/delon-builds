import { __decorate, __metadata } from 'tslib';
import { Directive, ElementRef, Input, NgModule } from '@angular/core';
import { AlainConfigService, InputNumber, DelonUtilModule } from '@delon/util';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: image.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * img标签
 * + 支持微信、qq头像规则缩略图规则
 * + 支持移除http&https协议http
 * + 支持增加onerror事件
 */
class ImageDirective {
    /**
     * @param {?} el
     * @param {?} configSrv
     */
    constructor(el, configSrv) {
        this.inited = false;
        configSrv.attach(this, 'image', { size: 64, error: `./assets/img/logo.svg` });
        this.imgEl = el.nativeElement;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.update();
        this.updateError();
        this.inited = true;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (!this.inited)
            return;
        if (changes.error) {
            this.updateError();
        }
        this.update();
    }
    /**
     * @private
     * @return {?}
     */
    update() {
        /** @type {?} */
        let newSrc = this.src;
        const { size, imgEl } = this;
        if (newSrc.includes('qlogo.cn')) {
            /** @type {?} */
            const arr = newSrc.split('/');
            /** @type {?} */
            const imgSize = arr[arr.length - 1];
            arr[arr.length - 1] = imgSize === '0' || +imgSize !== size ? size.toString() : imgSize;
            newSrc = arr.join('/');
        }
        newSrc = newSrc.replace(/^(?:https?:)/i, '');
        imgEl.src = newSrc;
        imgEl.height = size;
        imgEl.width = size;
    }
    /**
     * @private
     * @return {?}
     */
    updateError() {
        const { imgEl, error } = this;
        // tslint:disable-next-line: only-arrow-functions
        imgEl.onerror = (/**
         * @return {?}
         */
        function () {
            this.onerror = null;
            this.src = error;
        });
    }
}
ImageDirective.decorators = [
    { type: Directive, args: [{
                selector: '[_src]',
                exportAs: '_src',
            },] }
];
/** @nocollapse */
ImageDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: AlainConfigService }
];
ImageDirective.propDecorators = {
    src: [{ type: Input, args: ['_src',] }],
    size: [{ type: Input }],
    error: [{ type: Input }]
};
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], ImageDirective.prototype, "size", void 0);
if (false) {
    /** @type {?} */
    ImageDirective.prototype.src;
    /** @type {?} */
    ImageDirective.prototype.size;
    /** @type {?} */
    ImageDirective.prototype.error;
    /**
     * @type {?}
     * @private
     */
    ImageDirective.prototype.inited;
    /**
     * @type {?}
     * @private
     */
    ImageDirective.prototype.imgEl;
}

/**
 * @fileoverview added by tsickle
 * Generated from: image.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DIRECTIVES = [ImageDirective];
class ImageModule {
}
ImageModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, DelonUtilModule],
                declarations: [...DIRECTIVES],
                exports: [...DIRECTIVES],
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: image.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ImageDirective, ImageModule };
//# sourceMappingURL=image.js.map
