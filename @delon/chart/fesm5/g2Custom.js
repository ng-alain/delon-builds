import { __decorate, __metadata, __spread } from 'tslib';
import { EventEmitter, Component, ChangeDetectionStrategy, ViewEncapsulation, ElementRef, Input, Output, NgModule } from '@angular/core';
import { InputNumber, DelonUtilModule } from '@delon/util';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: custom.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var G2CustomComponent = /** @class */ (function () {
    // #endregion
    function G2CustomComponent(el) {
        this.el = el;
        this.resize$ = null;
        this.resizeTime = 0;
        this.render = new EventEmitter();
        this.resize = new EventEmitter();
        this.destroy = new EventEmitter();
    }
    /**
     * @private
     * @return {?}
     */
    G2CustomComponent.prototype.renderChart = /**
     * @private
     * @return {?}
     */
    function () {
        this.el.nativeElement.innerHTML = '';
        this.render.emit(this.el);
        this.installResizeEvent();
    };
    /**
     * @private
     * @return {?}
     */
    G2CustomComponent.prototype.installResizeEvent = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.resizeTime <= 0 || this.resize$)
            return;
        this.resize$ = fromEvent(window, 'resize')
            .pipe(debounceTime(Math.min(200, this.resizeTime)))
            .subscribe((/**
         * @return {?}
         */
        function () { return _this.resize.emit(_this.el); }));
    };
    /**
     * @return {?}
     */
    G2CustomComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.renderChart();
    };
    /**
     * @return {?}
     */
    G2CustomComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy.emit(this.el);
        if (this.resize$)
            this.resize$.unsubscribe();
    };
    G2CustomComponent.decorators = [
        { type: Component, args: [{
                    selector: 'g2,g2-custom',
                    exportAs: 'g2Custom',
                    template: "\n    <ng-content></ng-content>\n  ",
                    host: {
                        '[style.height.px]': 'height',
                    },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    G2CustomComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    G2CustomComponent.propDecorators = {
        height: [{ type: Input }],
        resizeTime: [{ type: Input }],
        render: [{ type: Output }],
        resize: [{ type: Output }],
        destroy: [{ type: Output }]
    };
    __decorate([
        InputNumber(),
        __metadata("design:type", Number)
    ], G2CustomComponent.prototype, "height", void 0);
    __decorate([
        InputNumber(),
        __metadata("design:type", Object)
    ], G2CustomComponent.prototype, "resizeTime", void 0);
    return G2CustomComponent;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    G2CustomComponent.prototype.resize$;
    /** @type {?} */
    G2CustomComponent.prototype.height;
    /** @type {?} */
    G2CustomComponent.prototype.resizeTime;
    /** @type {?} */
    G2CustomComponent.prototype.render;
    /** @type {?} */
    G2CustomComponent.prototype.resize;
    /** @type {?} */
    G2CustomComponent.prototype.destroy;
    /**
     * @type {?}
     * @private
     */
    G2CustomComponent.prototype.el;
}

/**
 * @fileoverview added by tsickle
 * Generated from: custom.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var COMPONENTS = [G2CustomComponent];
var G2CustomModule = /** @class */ (function () {
    function G2CustomModule() {
    }
    G2CustomModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, DelonUtilModule],
                    declarations: __spread(COMPONENTS),
                    exports: __spread(COMPONENTS),
                },] }
    ];
    return G2CustomModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: g2Custom.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { G2CustomComponent, G2CustomModule };
//# sourceMappingURL=g2Custom.js.map
