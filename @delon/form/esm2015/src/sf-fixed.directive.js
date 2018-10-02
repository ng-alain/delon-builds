/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, Input, ElementRef, Renderer2, } from '@angular/core';
import { InputNumber } from '@delon/util';
export class SFFixedDirective {
    /**
     * @param {?} er
     * @param {?} render
     */
    constructor(er, render) {
        this.render = render;
        this._inited = false;
        this.el = /** @type {?} */ (er.nativeElement);
    }
    /**
     * @return {?}
     */
    init() {
        if (!this._inited || this.num == null || this.num <= 0)
            return;
        /** @type {?} */
        const widgetEl = this.el.querySelector('.ant-row') || this.el;
        this.render.addClass(widgetEl, 'sf-fixed');
        /** @type {?} */
        const labelEl = widgetEl.querySelector('.ant-form-item-label');
        /** @type {?} */
        const unit = this.num + 'px';
        if (labelEl) {
            this.render.setStyle(labelEl, 'width', unit);
            this.render.setStyle(labelEl, 'flex', `0 0 ${unit}`);
        }
        else {
            /** @type {?} */
            const controlEl = widgetEl.querySelector('.ant-form-item-control-wrapper');
            this.render.setStyle(controlEl, 'margin-left', unit);
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this._inited = true;
        this.init();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this._inited)
            this.init();
    }
}
SFFixedDirective.decorators = [
    { type: Directive, args: [{ selector: '[fixed-label]' },] }
];
/** @nocollapse */
SFFixedDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
SFFixedDirective.propDecorators = {
    num: [{ type: Input, args: ['fixed-label',] }]
};
tslib_1.__decorate([
    InputNumber(),
    tslib_1.__metadata("design:type", Number)
], SFFixedDirective.prototype, "num", void 0);
if (false) {
    /** @type {?} */
    SFFixedDirective.prototype.el;
    /** @type {?} */
    SFFixedDirective.prototype._inited;
    /** @type {?} */
    SFFixedDirective.prototype.num;
    /** @type {?} */
    SFFixedDirective.prototype.render;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2YtZml4ZWQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvc2YtZml4ZWQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsVUFBVSxFQUNWLFNBQVMsR0FHVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRzFDLE1BQU07Ozs7O0lBeUJKLFlBQVksRUFBYyxFQUFVLE1BQWlCO1FBQWpCLFdBQU0sR0FBTixNQUFNLENBQVc7dUJBdkJuQyxLQUFLO1FBd0JyQixJQUFJLENBQUMsRUFBRSxxQkFBRyxFQUFFLENBQUMsYUFBK0IsQ0FBQSxDQUFDO0tBQzlDOzs7O0lBbkJPLElBQUk7UUFDVixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7WUFBRSxPQUFPOztRQUMvRCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQzlELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQzs7UUFDM0MsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDOztRQUMvRCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztRQUM3QixJQUFJLE9BQU8sRUFBRTtZQUNYLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDN0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLElBQUksRUFBRSxDQUFDLENBQUM7U0FDdEQ7YUFBTTs7WUFDTCxNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUN0QyxnQ0FBZ0MsQ0FDakMsQ0FBQztZQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDdEQ7Ozs7O0lBT0gsZUFBZTtRQUNiLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUNiOzs7O0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLE9BQU87WUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDL0I7OztZQXJDRixTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFOzs7O1lBUHRDLFVBQVU7WUFDVixTQUFTOzs7a0JBV1IsS0FBSyxTQUFDLGFBQWE7OztJQUNuQixXQUFXLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIERpcmVjdGl2ZSxcclxuICBJbnB1dCxcclxuICBFbGVtZW50UmVmLFxyXG4gIFJlbmRlcmVyMixcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIE9uQ2hhbmdlcyxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XHJcblxyXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbZml4ZWQtbGFiZWxdJyB9KVxyXG5leHBvcnQgY2xhc3MgU0ZGaXhlZERpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XHJcbiAgcHJpdmF0ZSBlbDogSFRNTERpdkVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBfaW5pdGVkID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgnZml4ZWQtbGFiZWwnKVxyXG4gIEBJbnB1dE51bWJlcigpXHJcbiAgbnVtOiBudW1iZXI7XHJcblxyXG4gIHByaXZhdGUgaW5pdCgpIHtcclxuICAgIGlmICghdGhpcy5faW5pdGVkIHx8IHRoaXMubnVtID09IG51bGwgfHwgdGhpcy5udW0gPD0gMCkgcmV0dXJuO1xyXG4gICAgY29uc3Qgd2lkZ2V0RWwgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJy5hbnQtcm93JykgfHwgdGhpcy5lbDtcclxuICAgIHRoaXMucmVuZGVyLmFkZENsYXNzKHdpZGdldEVsLCAnc2YtZml4ZWQnKTtcclxuICAgIGNvbnN0IGxhYmVsRWwgPSB3aWRnZXRFbC5xdWVyeVNlbGVjdG9yKCcuYW50LWZvcm0taXRlbS1sYWJlbCcpO1xyXG4gICAgY29uc3QgdW5pdCA9IHRoaXMubnVtICsgJ3B4JztcclxuICAgIGlmIChsYWJlbEVsKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyLnNldFN0eWxlKGxhYmVsRWwsICd3aWR0aCcsIHVuaXQpO1xyXG4gICAgICB0aGlzLnJlbmRlci5zZXRTdHlsZShsYWJlbEVsLCAnZmxleCcsIGAwIDAgJHt1bml0fWApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgY29udHJvbEVsID0gd2lkZ2V0RWwucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAnLmFudC1mb3JtLWl0ZW0tY29udHJvbC13cmFwcGVyJyxcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5yZW5kZXIuc2V0U3R5bGUoY29udHJvbEVsLCAnbWFyZ2luLWxlZnQnLCB1bml0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVyOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcjogUmVuZGVyZXIyKSB7XHJcbiAgICB0aGlzLmVsID0gZXIubmF0aXZlRWxlbWVudCBhcyBIVE1MRGl2RWxlbWVudDtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2luaXRlZCA9IHRydWU7XHJcbiAgICB0aGlzLmluaXQoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX2luaXRlZCkgdGhpcy5pbml0KCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==