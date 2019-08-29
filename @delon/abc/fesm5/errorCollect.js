import { __assign, __decorate, __metadata, __spread } from 'tslib';
import { DOCUMENT, CommonModule } from '@angular/common';
import { Injectable, ɵɵdefineInjectable, Component, ChangeDetectionStrategy, ViewEncapsulation, ElementRef, ChangeDetectorRef, Inject, Input, NgModule } from '@angular/core';
import { InputNumber, DelonUtilModule } from '@delon/util';
import { NzIconModule } from 'ng-zorro-antd/icon';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ErrorCollectConfig = /** @class */ (function () {
    function ErrorCollectConfig() {
        /**
         * 监听频率
         */
        this.freq = 500;
        /**
         * 顶部偏移值
         */
        this.offsetTop = 65 + 64 + 8 * 2;
    }
    ErrorCollectConfig.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ ErrorCollectConfig.ngInjectableDef = ɵɵdefineInjectable({ factory: function ErrorCollectConfig_Factory() { return new ErrorCollectConfig(); }, token: ErrorCollectConfig, providedIn: "root" });
    return ErrorCollectConfig;
}());
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ErrorCollectComponent = /** @class */ (function () {
    function ErrorCollectComponent(cog, el, cdr, doc) {
        this.el = el;
        this.cdr = cdr;
        this.doc = doc;
        this.$time = null;
        this._hiden = true;
        this.count = 0;
        Object.assign(this, __assign({}, new ErrorCollectConfig(), cog));
    }
    Object.defineProperty(ErrorCollectComponent.prototype, "errEls", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (this.formEl)).querySelectorAll('.has-error');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    ErrorCollectComponent.prototype.update = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var count = this.errEls.length;
        if (count === this.count)
            return;
        this.count = count;
        this._hiden = count === 0;
        this.cdr.markForCheck();
    };
    /**
     * @return {?}
     */
    ErrorCollectComponent.prototype._click = /**
     * @return {?}
     */
    function () {
        if (this.count === 0)
            return false;
        // nz-form-control
        /** @type {?} */
        var els = this.errEls;
        /** @type {?} */
        var formItemEl = this.findParent(els[0], '[nz-form-control]') || els[0];
        formItemEl.scrollIntoView(true);
        // fix header height
        this.doc.documentElement.scrollTop -= this.offsetTop;
    };
    /**
     * @private
     * @return {?}
     */
    ErrorCollectComponent.prototype.install = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.uninstall();
        this.$time = setInterval((/**
         * @return {?}
         */
        function () { return _this.update(); }), this.freq);
        this.update();
    };
    /**
     * @private
     * @return {?}
     */
    ErrorCollectComponent.prototype.uninstall = /**
     * @private
     * @return {?}
     */
    function () {
        clearInterval((/** @type {?} */ (this.$time)));
    };
    /**
     * @private
     * @param {?} el
     * @param {?} selector
     * @return {?}
     */
    ErrorCollectComponent.prototype.findParent = /**
     * @private
     * @param {?} el
     * @param {?} selector
     * @return {?}
     */
    function (el, selector) {
        /** @type {?} */
        var retEl = null;
        while (el) {
            if (el.querySelector(selector)) {
                retEl = (/** @type {?} */ (el));
                break;
            }
            el = (/** @type {?} */ (el.parentElement));
        }
        return (/** @type {?} */ (retEl));
    };
    /**
     * @return {?}
     */
    ErrorCollectComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.formEl = this.findParent(this.el.nativeElement, 'form');
        if (this.formEl === null)
            throw new Error('No found form element');
        this.install();
    };
    /**
     * @return {?}
     */
    ErrorCollectComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.uninstall();
    };
    ErrorCollectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'error-collect, [error-collect]',
                    exportAs: 'errorCollect',
                    template: "\n    <i nz-icon nzType=\"exclamation-circle\"></i>\n    <span class=\"pl-sm\">{{ count }}</span>\n  ",
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
    ErrorCollectComponent.ctorParameters = function () { return [
        { type: ErrorCollectConfig },
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
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
    return ErrorCollectComponent;
}());
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var COMPONENTS = [ErrorCollectComponent];
var ErrorCollectModule = /** @class */ (function () {
    function ErrorCollectModule() {
    }
    ErrorCollectModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, DelonUtilModule, NzIconModule],
                    declarations: __spread(COMPONENTS),
                    exports: __spread(COMPONENTS),
                },] }
    ];
    return ErrorCollectModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ErrorCollectComponent, ErrorCollectConfig, ErrorCollectModule };
//# sourceMappingURL=errorCollect.js.map
