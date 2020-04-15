/**
 * @fileoverview added by tsickle
 * Generated from: src/sf-fixed.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { InputNumber } from '@delon/util';
export class SFFixedDirective {
    /**
     * @param {?} er
     * @param {?} render
     */
    constructor(er, render) {
        this.render = render;
        this._inited = false;
        this.el = (/** @type {?} */ (er.nativeElement));
    }
    /**
     * @private
     * @return {?}
     */
    init() {
        if (!this._inited || this.num == null || this.num <= 0)
            return;
        /** @type {?} */
        const widgetEl = this.el.querySelector('.ant-row') || this.el;
        this.render.addClass(widgetEl, 'sf__fixed');
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
            const controlEl = widgetEl.querySelector('.ant-form-item-control');
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
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], SFFixedDirective.prototype, "num", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2YtZml4ZWQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvc2YtZml4ZWQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQWEsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFHMUMsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7SUFxQjNCLFlBQVksRUFBYyxFQUFVLE1BQWlCO1FBQWpCLFdBQU0sR0FBTixNQUFNLENBQVc7UUFuQjdDLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFvQnRCLElBQUksQ0FBQyxFQUFFLEdBQUcsbUJBQUEsRUFBRSxDQUFDLGFBQWEsRUFBa0IsQ0FBQztJQUMvQyxDQUFDOzs7OztJQWpCTyxJQUFJO1FBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQUUsT0FBTzs7Y0FDekQsUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFO1FBQzdELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQzs7Y0FDdEMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsc0JBQXNCLENBQUM7O2NBQ3hELElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUk7UUFDNUIsSUFBSSxPQUFPLEVBQUU7WUFDWCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQ3REO2FBQU07O2tCQUNDLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLHdCQUF3QixDQUFDO1lBQ2xFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDdEQ7SUFDSCxDQUFDOzs7O0lBTUQsZUFBZTtRQUNiLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNkLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsT0FBTztZQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQyxDQUFDOzs7WUFqQ0YsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRTs7OztZQUhMLFVBQVU7WUFBb0IsU0FBUzs7O2tCQVF2RSxLQUFLLFNBQUMsYUFBYTs7QUFBaUI7SUFBZCxXQUFXLEVBQUU7OzZDQUFhOzs7Ozs7SUFIakQsOEJBQTJCOzs7OztJQUMzQixtQ0FBd0I7O0lBRXhCLCtCQUFpRDs7Ozs7SUFpQnJCLGtDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbnB1dE51bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW2ZpeGVkLWxhYmVsXScgfSlcbmV4cG9ydCBjbGFzcyBTRkZpeGVkRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcbiAgcHJpdmF0ZSBlbDogSFRNTERpdkVsZW1lbnQ7XG4gIHByaXZhdGUgX2luaXRlZCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgnZml4ZWQtbGFiZWwnKSBASW5wdXROdW1iZXIoKSBudW06IG51bWJlcjtcblxuICBwcml2YXRlIGluaXQoKSB7XG4gICAgaWYgKCF0aGlzLl9pbml0ZWQgfHwgdGhpcy5udW0gPT0gbnVsbCB8fCB0aGlzLm51bSA8PSAwKSByZXR1cm47XG4gICAgY29uc3Qgd2lkZ2V0RWwgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJy5hbnQtcm93JykgfHwgdGhpcy5lbDtcbiAgICB0aGlzLnJlbmRlci5hZGRDbGFzcyh3aWRnZXRFbCwgJ3NmX19maXhlZCcpO1xuICAgIGNvbnN0IGxhYmVsRWwgPSB3aWRnZXRFbC5xdWVyeVNlbGVjdG9yKCcuYW50LWZvcm0taXRlbS1sYWJlbCcpO1xuICAgIGNvbnN0IHVuaXQgPSB0aGlzLm51bSArICdweCc7XG4gICAgaWYgKGxhYmVsRWwpIHtcbiAgICAgIHRoaXMucmVuZGVyLnNldFN0eWxlKGxhYmVsRWwsICd3aWR0aCcsIHVuaXQpO1xuICAgICAgdGhpcy5yZW5kZXIuc2V0U3R5bGUobGFiZWxFbCwgJ2ZsZXgnLCBgMCAwICR7dW5pdH1gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY29udHJvbEVsID0gd2lkZ2V0RWwucXVlcnlTZWxlY3RvcignLmFudC1mb3JtLWl0ZW0tY29udHJvbCcpO1xuICAgICAgdGhpcy5yZW5kZXIuc2V0U3R5bGUoY29udHJvbEVsLCAnbWFyZ2luLWxlZnQnLCB1bml0KTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihlcjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXI6IFJlbmRlcmVyMikge1xuICAgIHRoaXMuZWwgPSBlci5uYXRpdmVFbGVtZW50IGFzIEhUTUxEaXZFbGVtZW50O1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX2luaXRlZCA9IHRydWU7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5faW5pdGVkKSB0aGlzLmluaXQoKTtcbiAgfVxufVxuIl19