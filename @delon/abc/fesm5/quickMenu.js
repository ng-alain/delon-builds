import { __decorate, __metadata, __spread } from 'tslib';
import { Component, Input, HostListener, ChangeDetectionStrategy, ChangeDetectorRef, Renderer2, ElementRef, TemplateRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { InputNumber, DelonUtilModule } from '@delon/util';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var QuickMenuComponent = /** @class */ (function () {
    // #endregion
    function QuickMenuComponent(cd, el, render) {
        this.cd = cd;
        this.el = el;
        this.render = render;
        // #region fields
        this._icon = 'question-circle';
        this.top = 120;
        this.width = 200;
        this.bgColor = '#fff';
        this.borderColor = '#ddd';
        this.show = false;
        this.ctrlStyle = {};
        this.initFlag = false;
    }
    Object.defineProperty(QuickMenuComponent.prototype, "icon", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value instanceof TemplateRef) {
                this._icon = null;
                this._iconTpl = value;
            }
            else {
                this._icon = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    QuickMenuComponent.prototype._click = /**
     * @return {?}
     */
    function () {
        this.show = !this.show;
        this.setStyle();
    };
    /**
     * @return {?}
     */
    QuickMenuComponent.prototype.setStyle = /**
     * @return {?}
     */
    function () {
        this.ctrlStyle = {
            'background-color': this.bgColor,
            'border-color': this.borderColor,
        };
        /** @type {?} */
        var res = [
            "top:" + this.top + "px",
            "width:" + this.width + "px",
            "background-color:" + this.bgColor,
            "border-color:" + this.borderColor,
            "margin-right:-" + (this.show ? 0 : this.width) + "px",
        ];
        this.render.setAttribute(this.el.nativeElement, 'style', res.join(';'));
        this.cd.detectChanges();
    };
    /**
     * @return {?}
     */
    QuickMenuComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.initFlag = true;
        this.setStyle();
    };
    /**
     * @return {?}
     */
    QuickMenuComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (this.initFlag)
            this.setStyle();
    };
    QuickMenuComponent.decorators = [
        { type: Component, args: [{
                    selector: 'quick-menu',
                    template: "<div class=\"quick-menu__inner\">\n  <div class=\"quick-menu__ctrl\" [ngStyle]=\"ctrlStyle\">\n    <div class=\"quick-menu__ctrl-icon\">\n      <ng-container *ngIf=\"_icon; else _iconTpl\">\n        <i nz-icon [type]=\"_icon\"></i>\n      </ng-container>\n    </div>\n  </div>\n  <ng-content></ng-content>\n</div>\n",
                    host: { '[class.quick-menu]': 'true' },
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    QuickMenuComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    QuickMenuComponent.propDecorators = {
        icon: [{ type: Input }],
        top: [{ type: Input }],
        width: [{ type: Input }],
        bgColor: [{ type: Input }],
        borderColor: [{ type: Input }],
        _click: [{ type: HostListener, args: ['click',] }]
    };
    __decorate([
        InputNumber(),
        __metadata("design:type", Object)
    ], QuickMenuComponent.prototype, "top", void 0);
    __decorate([
        InputNumber(),
        __metadata("design:type", Object)
    ], QuickMenuComponent.prototype, "width", void 0);
    return QuickMenuComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var COMPONENTS = [QuickMenuComponent];
var QuickMenuModule = /** @class */ (function () {
    function QuickMenuModule() {
    }
    /**
     * @return {?}
     */
    QuickMenuModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: QuickMenuModule, providers: [] };
    };
    QuickMenuModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, NgZorroAntdModule, DelonUtilModule],
                    declarations: __spread(COMPONENTS),
                    exports: __spread(COMPONENTS),
                },] }
    ];
    return QuickMenuModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { QuickMenuComponent, QuickMenuModule };

//# sourceMappingURL=quickMenu.js.map