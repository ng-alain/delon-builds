import { __decorate, __metadata, __spread } from 'tslib';
import { Platform } from '@angular/cdk/platform';
import { Directive, ElementRef, Input, NgModule } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { AlainConfigService, InputNumber, InputBoolean, DelonUtilModule } from '@delon/util';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: image.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ImageDirective = /** @class */ (function () {
    function ImageDirective(el, configSrv, http, platform) {
        this.http = http;
        this.platform = platform;
        this.useHttp = false;
        this.inited = false;
        configSrv.attach(this, 'image', { size: 64, error: "./assets/img/logo.svg" });
        this.imgEl = el.nativeElement;
    }
    /**
     * @return {?}
     */
    ImageDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.update();
        this.updateError();
        this.inited = true;
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    ImageDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _a = this, size = _a.size, imgEl = _a.imgEl;
        imgEl.height = size;
        imgEl.width = size;
        if (this.inited) {
            if (changes.error) {
                this.updateError();
            }
            this.update();
        }
    };
    /**
     * @private
     * @return {?}
     */
    ImageDirective.prototype.update = /**
     * @private
     * @return {?}
     */
    function () {
        var _a = this, size = _a.size, imgEl = _a.imgEl, useHttp = _a.useHttp;
        if (useHttp) {
            this.getByHttp();
            return;
        }
        /** @type {?} */
        var newSrc = this.src;
        if (newSrc.includes('qlogo.cn')) {
            /** @type {?} */
            var arr = newSrc.split('/');
            /** @type {?} */
            var imgSize = arr[arr.length - 1];
            arr[arr.length - 1] = imgSize === '0' || +imgSize !== size ? size.toString() : imgSize;
            newSrc = arr.join('/');
        }
        newSrc = newSrc.replace(/^(?:https?:)/i, '');
        imgEl.src = newSrc;
    };
    /**
     * @private
     * @return {?}
     */
    ImageDirective.prototype.getByHttp = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.platform.isBrowser) {
            return;
        }
        var imgEl = this.imgEl;
        this.http.get(this.src, null, { responseType: 'blob' }).subscribe((/**
         * @param {?} blob
         * @return {?}
         */
        function (blob) {
            /** @type {?} */
            var reader = new FileReader();
            reader.onloadend = (/**
             * @return {?}
             */
            function () { return (imgEl.src = (/** @type {?} */ (reader.result))); });
            reader.onerror = (/**
             * @return {?}
             */
            function () { return _this.setError(); });
            reader.readAsDataURL(blob);
        }), (/**
         * @return {?}
         */
        function () { return _this.setError(); }));
    };
    /**
     * @private
     * @return {?}
     */
    ImageDirective.prototype.updateError = /**
     * @private
     * @return {?}
     */
    function () {
        var _a = this, imgEl = _a.imgEl, error = _a.error;
        // tslint:disable-next-line: only-arrow-functions
        imgEl.onerror = (/**
         * @return {?}
         */
        function () {
            this.onerror = null;
            this.src = error;
        });
    };
    /**
     * @private
     * @return {?}
     */
    ImageDirective.prototype.setError = /**
     * @private
     * @return {?}
     */
    function () {
        var _a = this, imgEl = _a.imgEl, error = _a.error;
        imgEl.src = error;
    };
    ImageDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[_src]',
                    exportAs: '_src',
                },] }
    ];
    /** @nocollapse */
    ImageDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: AlainConfigService },
        { type: _HttpClient },
        { type: Platform }
    ]; };
    ImageDirective.propDecorators = {
        src: [{ type: Input, args: ['_src',] }],
        size: [{ type: Input }],
        error: [{ type: Input }],
        useHttp: [{ type: Input }]
    };
    __decorate([
        InputNumber(),
        __metadata("design:type", Number)
    ], ImageDirective.prototype, "size", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], ImageDirective.prototype, "useHttp", void 0);
    return ImageDirective;
}());
if (false) {
    /** @type {?} */
    ImageDirective.prototype.src;
    /** @type {?} */
    ImageDirective.prototype.size;
    /** @type {?} */
    ImageDirective.prototype.error;
    /** @type {?} */
    ImageDirective.prototype.useHttp;
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
    /**
     * @type {?}
     * @private
     */
    ImageDirective.prototype.http;
    /**
     * @type {?}
     * @private
     */
    ImageDirective.prototype.platform;
}

/**
 * @fileoverview added by tsickle
 * Generated from: image.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DIRECTIVES = [ImageDirective];
var ImageModule = /** @class */ (function () {
    function ImageModule() {
    }
    ImageModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, DelonUtilModule],
                    declarations: __spread(DIRECTIVES),
                    exports: __spread(DIRECTIVES),
                },] }
    ];
    return ImageModule;
}());

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
