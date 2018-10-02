/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, Input, ElementRef, Renderer2, } from '@angular/core';
import { InputNumber } from '@delon/util';
var SFFixedDirective = /** @class */ (function () {
    function SFFixedDirective(er, render) {
        this.render = render;
        this._inited = false;
        this.el = /** @type {?} */ (er.nativeElement);
    }
    /**
     * @return {?}
     */
    SFFixedDirective.prototype.init = /**
     * @return {?}
     */
    function () {
        if (!this._inited || this.num == null || this.num <= 0)
            return;
        /** @type {?} */
        var widgetEl = this.el.querySelector('.ant-row') || this.el;
        this.render.addClass(widgetEl, 'sf-fixed');
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
            var controlEl = widgetEl.querySelector('.ant-form-item-control-wrapper');
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
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Number)
    ], SFFixedDirective.prototype, "num", void 0);
    return SFFixedDirective;
}());
export { SFFixedDirective };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2YtZml4ZWQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvc2YtZml4ZWQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsVUFBVSxFQUNWLFNBQVMsR0FHVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDOztJQTRCeEMsMEJBQVksRUFBYyxFQUFVLE1BQWlCO1FBQWpCLFdBQU0sR0FBTixNQUFNLENBQVc7dUJBdkJuQyxLQUFLO1FBd0JyQixJQUFJLENBQUMsRUFBRSxxQkFBRyxFQUFFLENBQUMsYUFBK0IsQ0FBQSxDQUFDO0tBQzlDOzs7O0lBbkJPLCtCQUFJOzs7O1FBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQUUsT0FBTzs7UUFDL0QsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUM5RCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7O1FBQzNDLElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsc0JBQXNCLENBQUMsQ0FBQzs7UUFDL0QsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUM7UUFDN0IsSUFBSSxPQUFPLEVBQUU7WUFDWCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBTyxJQUFNLENBQUMsQ0FBQztTQUN0RDthQUFNOztZQUNMLElBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQ3RDLGdDQUFnQyxDQUNqQyxDQUFDO1lBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUN0RDs7Ozs7SUFPSCwwQ0FBZTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDYjs7OztJQUVELHNDQUFXOzs7SUFBWDtRQUNFLElBQUksSUFBSSxDQUFDLE9BQU87WUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDL0I7O2dCQXJDRixTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFOzs7O2dCQVB0QyxVQUFVO2dCQUNWLFNBQVM7OztzQkFXUixLQUFLLFNBQUMsYUFBYTs7O1FBQ25CLFdBQVcsRUFBRTs7OzJCQWhCaEI7O1NBV2EsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBEaXJlY3RpdmUsXHJcbiAgSW5wdXQsXHJcbiAgRWxlbWVudFJlZixcclxuICBSZW5kZXJlcjIsXHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBPbkNoYW5nZXMsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xyXG5cclxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW2ZpeGVkLWxhYmVsXScgfSlcclxuZXhwb3J0IGNsYXNzIFNGRml4ZWREaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xyXG4gIHByaXZhdGUgZWw6IEhUTUxEaXZFbGVtZW50O1xyXG4gIHByaXZhdGUgX2luaXRlZCA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoJ2ZpeGVkLWxhYmVsJylcclxuICBASW5wdXROdW1iZXIoKVxyXG4gIG51bTogbnVtYmVyO1xyXG5cclxuICBwcml2YXRlIGluaXQoKSB7XHJcbiAgICBpZiAoIXRoaXMuX2luaXRlZCB8fCB0aGlzLm51bSA9PSBudWxsIHx8IHRoaXMubnVtIDw9IDApIHJldHVybjtcclxuICAgIGNvbnN0IHdpZGdldEVsID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKCcuYW50LXJvdycpIHx8IHRoaXMuZWw7XHJcbiAgICB0aGlzLnJlbmRlci5hZGRDbGFzcyh3aWRnZXRFbCwgJ3NmLWZpeGVkJyk7XHJcbiAgICBjb25zdCBsYWJlbEVsID0gd2lkZ2V0RWwucXVlcnlTZWxlY3RvcignLmFudC1mb3JtLWl0ZW0tbGFiZWwnKTtcclxuICAgIGNvbnN0IHVuaXQgPSB0aGlzLm51bSArICdweCc7XHJcbiAgICBpZiAobGFiZWxFbCkge1xyXG4gICAgICB0aGlzLnJlbmRlci5zZXRTdHlsZShsYWJlbEVsLCAnd2lkdGgnLCB1bml0KTtcclxuICAgICAgdGhpcy5yZW5kZXIuc2V0U3R5bGUobGFiZWxFbCwgJ2ZsZXgnLCBgMCAwICR7dW5pdH1gKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGNvbnRyb2xFbCA9IHdpZGdldEVsLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgJy5hbnQtZm9ybS1pdGVtLWNvbnRyb2wtd3JhcHBlcicsXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMucmVuZGVyLnNldFN0eWxlKGNvbnRyb2xFbCwgJ21hcmdpbi1sZWZ0JywgdW5pdCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihlcjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXI6IFJlbmRlcmVyMikge1xyXG4gICAgdGhpcy5lbCA9IGVyLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9pbml0ZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5pbml0KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9pbml0ZWQpIHRoaXMuaW5pdCgpO1xyXG4gIH1cclxufVxyXG4iXX0=