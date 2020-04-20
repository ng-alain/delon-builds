/**
 * @fileoverview added by tsickle
 * Generated from: src/sf-fixed.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { InputNumber } from '@delon/util';
var SFFixedDirective = /** @class */ (function () {
    function SFFixedDirective(er, render) {
        this.render = render;
        this._inited = false;
        this.el = (/** @type {?} */ (er.nativeElement));
    }
    /**
     * @private
     * @return {?}
     */
    SFFixedDirective.prototype.init = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this._inited || this.num == null || this.num <= 0)
            return;
        /** @type {?} */
        var widgetEl = this.el.querySelector('.ant-row') || this.el;
        this.render.addClass(widgetEl, 'sf__fixed');
        /** @type {?} */
        var labelEl = widgetEl.querySelector('.ant-form-item-label');
        /** @type {?} */
        var unit = this.num + 'px';
        if (labelEl) {
            this.render.setStyle(labelEl, 'width', unit);
            this.render.setStyle(labelEl, 'max-width', unit);
            this.render.setStyle(labelEl, 'flex', "0 0 " + unit);
        }
        else {
            /** @type {?} */
            var controlEl = widgetEl.querySelector('.ant-form-item-control');
            this.render.setStyle(controlEl, 'margin-left', unit);
        }
    };
    /**
     * @return {?}
     */
    SFFixedDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this._inited = true;
        this.init();
    };
    /**
     * @return {?}
     */
    SFFixedDirective.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (this._inited)
            this.init();
    };
    SFFixedDirective.decorators = [
        { type: Directive, args: [{ selector: '[fixed-label]' },] }
    ];
    /** @nocollapse */
    SFFixedDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    SFFixedDirective.propDecorators = {
        num: [{ type: Input, args: ['fixed-label',] }]
    };
    __decorate([
        InputNumber(),
        __metadata("design:type", Number)
    ], SFFixedDirective.prototype, "num", void 0);
    return SFFixedDirective;
}());
export { SFFixedDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SFFixedDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    SFFixedDirective.prototype._inited;
    /** @type {?} */
    SFFixedDirective.prototype.num;
    /**
     * @type {?}
     * @private
     */
    SFFixedDirective.prototype.render;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2YtZml4ZWQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvc2YtZml4ZWQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQWEsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFMUM7SUF1QkUsMEJBQVksRUFBYyxFQUFVLE1BQWlCO1FBQWpCLFdBQU0sR0FBTixNQUFNLENBQVc7UUFwQjdDLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFxQnRCLElBQUksQ0FBQyxFQUFFLEdBQUcsbUJBQUEsRUFBRSxDQUFDLGFBQWEsRUFBa0IsQ0FBQztJQUMvQyxDQUFDOzs7OztJQWxCTywrQkFBSTs7OztJQUFaO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQUUsT0FBTzs7WUFDekQsUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFO1FBQzdELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQzs7WUFDdEMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsc0JBQXNCLENBQUM7O1lBQ3hELElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUk7UUFDNUIsSUFBSSxPQUFPLEVBQUU7WUFDWCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDakQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFPLElBQU0sQ0FBQyxDQUFDO1NBQ3REO2FBQU07O2dCQUNDLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLHdCQUF3QixDQUFDO1lBQ2xFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDdEQ7SUFDSCxDQUFDOzs7O0lBTUQsMENBQWU7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2QsQ0FBQzs7OztJQUVELHNDQUFXOzs7SUFBWDtRQUNFLElBQUksSUFBSSxDQUFDLE9BQU87WUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEMsQ0FBQzs7Z0JBbENGLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUU7Ozs7Z0JBSEwsVUFBVTtnQkFBb0IsU0FBUzs7O3NCQVF2RSxLQUFLLFNBQUMsYUFBYTs7SUFBaUI7UUFBZCxXQUFXLEVBQUU7O2lEQUFhO0lBOEJuRCx1QkFBQztDQUFBLEFBbkNELElBbUNDO1NBbENZLGdCQUFnQjs7Ozs7O0lBQzNCLDhCQUEyQjs7Ozs7SUFDM0IsbUNBQXdCOztJQUV4QiwrQkFBaUQ7Ozs7O0lBa0JyQixrQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tmaXhlZC1sYWJlbF0nIH0pXG5leHBvcnQgY2xhc3MgU0ZGaXhlZERpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XG4gIHByaXZhdGUgZWw6IEhUTUxEaXZFbGVtZW50O1xuICBwcml2YXRlIF9pbml0ZWQgPSBmYWxzZTtcblxuICBASW5wdXQoJ2ZpeGVkLWxhYmVsJykgQElucHV0TnVtYmVyKCkgbnVtOiBudW1iZXI7XG5cbiAgcHJpdmF0ZSBpbml0KCkge1xuICAgIGlmICghdGhpcy5faW5pdGVkIHx8IHRoaXMubnVtID09IG51bGwgfHwgdGhpcy5udW0gPD0gMCkgcmV0dXJuO1xuICAgIGNvbnN0IHdpZGdldEVsID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKCcuYW50LXJvdycpIHx8IHRoaXMuZWw7XG4gICAgdGhpcy5yZW5kZXIuYWRkQ2xhc3Mod2lkZ2V0RWwsICdzZl9fZml4ZWQnKTtcbiAgICBjb25zdCBsYWJlbEVsID0gd2lkZ2V0RWwucXVlcnlTZWxlY3RvcignLmFudC1mb3JtLWl0ZW0tbGFiZWwnKTtcbiAgICBjb25zdCB1bml0ID0gdGhpcy5udW0gKyAncHgnO1xuICAgIGlmIChsYWJlbEVsKSB7XG4gICAgICB0aGlzLnJlbmRlci5zZXRTdHlsZShsYWJlbEVsLCAnd2lkdGgnLCB1bml0KTtcbiAgICAgIHRoaXMucmVuZGVyLnNldFN0eWxlKGxhYmVsRWwsICdtYXgtd2lkdGgnLCB1bml0KTtcbiAgICAgIHRoaXMucmVuZGVyLnNldFN0eWxlKGxhYmVsRWwsICdmbGV4JywgYDAgMCAke3VuaXR9YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGNvbnRyb2xFbCA9IHdpZGdldEVsLnF1ZXJ5U2VsZWN0b3IoJy5hbnQtZm9ybS1pdGVtLWNvbnRyb2wnKTtcbiAgICAgIHRoaXMucmVuZGVyLnNldFN0eWxlKGNvbnRyb2xFbCwgJ21hcmdpbi1sZWZ0JywgdW5pdCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoZXI6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyOiBSZW5kZXJlcjIpIHtcbiAgICB0aGlzLmVsID0gZXIubmF0aXZlRWxlbWVudCBhcyBIVE1MRGl2RWxlbWVudDtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9pbml0ZWQgPSB0cnVlO1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2luaXRlZCkgdGhpcy5pbml0KCk7XG4gIH1cbn1cbiJdfQ==