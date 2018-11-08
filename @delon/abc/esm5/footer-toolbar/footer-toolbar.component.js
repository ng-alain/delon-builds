/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Inject, TemplateRef, ElementRef, Renderer2, } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { InputBoolean } from '@delon/util';
/** @type {?} */
var CLSBODY = 'footer-toolbar__body';
var FooterToolbarComponent = /** @class */ (function () {
    function FooterToolbarComponent(el, renderer, doc) {
        this.el = el;
        this.renderer = renderer;
        this.doc = doc;
        this.errorCollect = false;
        this._extra = '';
    }
    Object.defineProperty(FooterToolbarComponent.prototype, "extra", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value instanceof TemplateRef) {
                this._extra = null;
                this._extraTpl = value;
            }
            else {
                this._extra = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FooterToolbarComponent.prototype, "bodyCls", {
        get: /**
         * @return {?}
         */
        function () {
            return this.doc.querySelector('body').classList;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FooterToolbarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.renderer.addClass(this.el.nativeElement, 'footer-toolbar');
        this.bodyCls.add(CLSBODY);
    };
    /**
     * @return {?}
     */
    FooterToolbarComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.bodyCls.remove(CLSBODY);
    };
    FooterToolbarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'footer-toolbar',
                    template: "<div class=\"footer-toolbar__left\">\n  <ng-container *ngIf=\"_extra; else _extraTpl\">{{_extra}}</ng-container>\n</div>\n<div class=\"footer-toolbar__right\">\n  <error-collect *ngIf=\"errorCollect\"></error-collect>\n  <ng-content></ng-content>\n</div>\n",
                    preserveWhitespaces: false
                }] }
    ];
    /** @nocollapse */
    FooterToolbarComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    FooterToolbarComponent.propDecorators = {
        errorCollect: [{ type: Input }],
        extra: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], FooterToolbarComponent.prototype, "errorCollect", void 0);
    return FooterToolbarComponent;
}());
export { FooterToolbarComponent };
if (false) {
    /** @type {?} */
    FooterToolbarComponent.prototype.errorCollect;
    /** @type {?} */
    FooterToolbarComponent.prototype._extra;
    /** @type {?} */
    FooterToolbarComponent.prototype._extraTpl;
    /** @type {?} */
    FooterToolbarComponent.prototype.el;
    /** @type {?} */
    FooterToolbarComponent.prototype.renderer;
    /** @type {?} */
    FooterToolbarComponent.prototype.doc;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLXRvb2xiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9mb290ZXItdG9vbGJhci8iLCJzb3VyY2VzIjpbImZvb3Rlci10b29sYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUdMLE1BQU0sRUFDTixXQUFXLEVBQ1gsVUFBVSxFQUNWLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGFBQWEsQ0FBQzs7SUFFckMsT0FBTyxHQUFHLHNCQUFzQjtBQUV0QztJQXNCRSxnQ0FDVSxFQUFjLEVBQ2QsUUFBbUIsRUFDRCxHQUFRO1FBRjFCLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ0QsUUFBRyxHQUFILEdBQUcsQ0FBSztRQWpCcEMsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFFckIsV0FBTSxHQUFHLEVBQUUsQ0FBQztJQWdCVCxDQUFDO0lBZEosc0JBQ0kseUNBQUs7Ozs7O1FBRFQsVUFDVSxLQUFnQztZQUN4QyxJQUFJLEtBQUssWUFBWSxXQUFXLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQzthQUN4QjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzthQUNyQjtRQUNILENBQUM7OztPQUFBO0lBUUQsc0JBQVksMkNBQU87Ozs7UUFBbkI7WUFDRSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNsRCxDQUFDOzs7T0FBQTs7OztJQUVELHlDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELDRDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQy9CLENBQUM7O2dCQXZDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsNFFBQThDO29CQUM5QyxtQkFBbUIsRUFBRSxLQUFLO2lCQUMzQjs7OztnQkFaQyxVQUFVO2dCQUNWLFNBQVM7Z0RBZ0NOLE1BQU0sU0FBQyxRQUFROzs7K0JBbkJqQixLQUFLO3dCQU1MLEtBQUs7O0lBSk47UUFEQyxZQUFZLEVBQUU7O2dFQUNNO0lBZ0N2Qiw2QkFBQztDQUFBLEFBeENELElBd0NDO1NBbkNZLHNCQUFzQjs7O0lBQ2pDLDhDQUVxQjs7SUFFckIsd0NBQVk7O0lBQ1osMkNBQTRCOztJQVkxQixvQ0FBc0I7O0lBQ3RCLDBDQUEyQjs7SUFDM0IscUNBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIEluamVjdCxcbiAgVGVtcGxhdGVSZWYsXG4gIEVsZW1lbnRSZWYsXG4gIFJlbmRlcmVyMixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbmNvbnN0IENMU0JPRFkgPSAnZm9vdGVyLXRvb2xiYXJfX2JvZHknO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmb290ZXItdG9vbGJhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9mb290ZXItdG9vbGJhci5jb21wb25lbnQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBGb290ZXJUb29sYmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKVxuICBASW5wdXRCb29sZWFuKClcbiAgZXJyb3JDb2xsZWN0ID0gZmFsc2U7XG5cbiAgX2V4dHJhID0gJyc7XG4gIF9leHRyYVRwbDogVGVtcGxhdGVSZWY8YW55PjtcbiAgQElucHV0KClcbiAgc2V0IGV4dHJhKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIHRoaXMuX2V4dHJhID0gbnVsbDtcbiAgICAgIHRoaXMuX2V4dHJhVHBsID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2V4dHJhID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IGFueSxcbiAgKSB7fVxuXG4gIHByaXZhdGUgZ2V0IGJvZHlDbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9jLnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3Q7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2Zvb3Rlci10b29sYmFyJyk7XG4gICAgdGhpcy5ib2R5Q2xzLmFkZChDTFNCT0RZKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuYm9keUNscy5yZW1vdmUoQ0xTQk9EWSk7XG4gIH1cbn1cbiJdfQ==