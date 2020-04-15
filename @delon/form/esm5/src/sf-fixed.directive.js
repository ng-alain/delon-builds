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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2YtZml4ZWQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvc2YtZml4ZWQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQWEsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFMUM7SUFzQkUsMEJBQVksRUFBYyxFQUFVLE1BQWlCO1FBQWpCLFdBQU0sR0FBTixNQUFNLENBQVc7UUFuQjdDLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFvQnRCLElBQUksQ0FBQyxFQUFFLEdBQUcsbUJBQUEsRUFBRSxDQUFDLGFBQWEsRUFBa0IsQ0FBQztJQUMvQyxDQUFDOzs7OztJQWpCTywrQkFBSTs7OztJQUFaO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQUUsT0FBTzs7WUFDekQsUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFO1FBQzdELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQzs7WUFDdEMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsc0JBQXNCLENBQUM7O1lBQ3hELElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUk7UUFDNUIsSUFBSSxPQUFPLEVBQUU7WUFDWCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBTyxJQUFNLENBQUMsQ0FBQztTQUN0RDthQUFNOztnQkFDQyxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQztZQUNsRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3REO0lBQ0gsQ0FBQzs7OztJQU1ELDBDQUFlOzs7SUFBZjtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNkLENBQUM7Ozs7SUFFRCxzQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxPQUFPO1lBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hDLENBQUM7O2dCQWpDRixTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFOzs7O2dCQUhMLFVBQVU7Z0JBQW9CLFNBQVM7OztzQkFRdkUsS0FBSyxTQUFDLGFBQWE7O0lBQWlCO1FBQWQsV0FBVyxFQUFFOztpREFBYTtJQTZCbkQsdUJBQUM7Q0FBQSxBQWxDRCxJQWtDQztTQWpDWSxnQkFBZ0I7Ozs7OztJQUMzQiw4QkFBMkI7Ozs7O0lBQzNCLG1DQUF3Qjs7SUFFeEIsK0JBQWlEOzs7OztJQWlCckIsa0NBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbZml4ZWQtbGFiZWxdJyB9KVxuZXhwb3J0IGNsYXNzIFNGRml4ZWREaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xuICBwcml2YXRlIGVsOiBIVE1MRGl2RWxlbWVudDtcbiAgcHJpdmF0ZSBfaW5pdGVkID0gZmFsc2U7XG5cbiAgQElucHV0KCdmaXhlZC1sYWJlbCcpIEBJbnB1dE51bWJlcigpIG51bTogbnVtYmVyO1xuXG4gIHByaXZhdGUgaW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuX2luaXRlZCB8fCB0aGlzLm51bSA9PSBudWxsIHx8IHRoaXMubnVtIDw9IDApIHJldHVybjtcbiAgICBjb25zdCB3aWRnZXRFbCA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcignLmFudC1yb3cnKSB8fCB0aGlzLmVsO1xuICAgIHRoaXMucmVuZGVyLmFkZENsYXNzKHdpZGdldEVsLCAnc2ZfX2ZpeGVkJyk7XG4gICAgY29uc3QgbGFiZWxFbCA9IHdpZGdldEVsLnF1ZXJ5U2VsZWN0b3IoJy5hbnQtZm9ybS1pdGVtLWxhYmVsJyk7XG4gICAgY29uc3QgdW5pdCA9IHRoaXMubnVtICsgJ3B4JztcbiAgICBpZiAobGFiZWxFbCkge1xuICAgICAgdGhpcy5yZW5kZXIuc2V0U3R5bGUobGFiZWxFbCwgJ3dpZHRoJywgdW5pdCk7XG4gICAgICB0aGlzLnJlbmRlci5zZXRTdHlsZShsYWJlbEVsLCAnZmxleCcsIGAwIDAgJHt1bml0fWApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjb250cm9sRWwgPSB3aWRnZXRFbC5xdWVyeVNlbGVjdG9yKCcuYW50LWZvcm0taXRlbS1jb250cm9sJyk7XG4gICAgICB0aGlzLnJlbmRlci5zZXRTdHlsZShjb250cm9sRWwsICdtYXJnaW4tbGVmdCcsIHVuaXQpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGVyOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcjogUmVuZGVyZXIyKSB7XG4gICAgdGhpcy5lbCA9IGVyLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTERpdkVsZW1lbnQ7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5faW5pdGVkID0gdHJ1ZTtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9pbml0ZWQpIHRoaXMuaW5pdCgpO1xuICB9XG59XG4iXX0=