import { __decorate, __metadata, __spread } from 'tslib';
import { Component, Input, HostBinding, Renderer2, ElementRef, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputNumber, DelonUtilModule } from '@delon/util';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var EllipsisComponent = /** @class */ (function () {
    function EllipsisComponent(el, render) {
        /**
         * 在按照行数截取下最大的行数，超过则截取省略
         */
        this.lines = 3;
        render.setStyle(el.nativeElement, '-webkit-box-orient', 'vertical');
    }
    EllipsisComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ellipsis',
                    template: "\n    <ng-content></ng-content>\n  ",
                    host: { '[class.ellipsis]': 'true' },
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    EllipsisComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    EllipsisComponent.propDecorators = {
        lines: [{ type: Input }, { type: HostBinding, args: ['style.-webkit-line-clamp',] }]
    };
    __decorate([
        InputNumber(),
        __metadata("design:type", Object)
    ], EllipsisComponent.prototype, "lines", void 0);
    return EllipsisComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var COMPONENTS = [EllipsisComponent];
var EllipsisModule = /** @class */ (function () {
    function EllipsisModule() {
    }
    /**
     * @return {?}
     */
    EllipsisModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: EllipsisModule, providers: [] };
    };
    EllipsisModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, DelonUtilModule],
                    declarations: __spread(COMPONENTS),
                    exports: __spread(COMPONENTS),
                },] }
    ];
    return EllipsisModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { EllipsisComponent, EllipsisModule };

//# sourceMappingURL=ellipsis.js.map