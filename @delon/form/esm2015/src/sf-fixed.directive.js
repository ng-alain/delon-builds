import { __decorate } from "tslib";
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { InputNumber } from '@delon/util/decorator';
export class SFFixedDirective {
    constructor(er, render) {
        this.render = render;
        this._inited = false;
        this.el = er.nativeElement;
    }
    init() {
        if (!this._inited || this.num == null || this.num <= 0)
            return;
        const widgetEl = this.el.querySelector('.ant-row') || this.el;
        this.render.addClass(widgetEl, 'sf__fixed');
        const labelEl = widgetEl.querySelector('.ant-form-item-label');
        const controlEl = widgetEl.querySelector('.ant-form-item-control-wrapper,.ant-form-item-control');
        const unit = `${this.num}px`;
        if (labelEl) {
            this.render.setStyle(labelEl, 'flex', `0 0 ${unit}`);
            this.render.setStyle(controlEl, 'max-width', `calc(100% - ${unit})`);
        }
        else {
            this.render.setStyle(controlEl, 'margin-left', unit);
        }
    }
    ngAfterViewInit() {
        this._inited = true;
        this.init();
    }
    ngOnChanges() {
        if (this._inited)
            this.init();
    }
}
SFFixedDirective.decorators = [
    { type: Directive, args: [{ selector: '[fixed-label]' },] }
];
SFFixedDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
SFFixedDirective.propDecorators = {
    num: [{ type: Input, args: ['fixed-label',] }]
};
__decorate([
    InputNumber()
], SFFixedDirective.prototype, "num", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2YtZml4ZWQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS9zcmMvc2YtZml4ZWQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFhLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVsRyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFHcEQsTUFBTSxPQUFPLGdCQUFnQjtJQXFCM0IsWUFBWSxFQUFjLEVBQVUsTUFBaUI7UUFBakIsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQW5CN0MsWUFBTyxHQUFHLEtBQUssQ0FBQztRQW9CdEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsYUFBK0IsQ0FBQztJQUMvQyxDQUFDO0lBakJPLElBQUk7UUFDVixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7WUFBRSxPQUFPO1FBQy9ELE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDOUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQzVDLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUMvRCxNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLHVEQUF1RCxDQUFDLENBQUM7UUFDbEcsTUFBTSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDN0IsSUFBSSxPQUFPLEVBQUU7WUFDWCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sSUFBSSxFQUFFLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsV0FBVyxFQUFFLGVBQWUsSUFBSSxHQUFHLENBQUMsQ0FBQztTQUN0RTthQUFNO1lBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUN0RDtJQUNILENBQUM7SUFNRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxPQUFPO1lBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hDLENBQUM7OztZQWpDRixTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFOzs7WUFKTCxVQUFVO1lBQW9CLFNBQVM7OztrQkFTdkUsS0FBSyxTQUFDLGFBQWE7O0FBQWlCO0lBQWQsV0FBVyxFQUFFOzZDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbC9kZWNvcmF0b3InO1xuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbZml4ZWQtbGFiZWxdJyB9KVxuZXhwb3J0IGNsYXNzIFNGRml4ZWREaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xuICBwcml2YXRlIGVsOiBIVE1MRGl2RWxlbWVudDtcbiAgcHJpdmF0ZSBfaW5pdGVkID0gZmFsc2U7XG5cbiAgQElucHV0KCdmaXhlZC1sYWJlbCcpIEBJbnB1dE51bWJlcigpIG51bTogbnVtYmVyO1xuXG4gIHByaXZhdGUgaW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX2luaXRlZCB8fCB0aGlzLm51bSA9PSBudWxsIHx8IHRoaXMubnVtIDw9IDApIHJldHVybjtcbiAgICBjb25zdCB3aWRnZXRFbCA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcignLmFudC1yb3cnKSB8fCB0aGlzLmVsO1xuICAgIHRoaXMucmVuZGVyLmFkZENsYXNzKHdpZGdldEVsLCAnc2ZfX2ZpeGVkJyk7XG4gICAgY29uc3QgbGFiZWxFbCA9IHdpZGdldEVsLnF1ZXJ5U2VsZWN0b3IoJy5hbnQtZm9ybS1pdGVtLWxhYmVsJyk7XG4gICAgY29uc3QgY29udHJvbEVsID0gd2lkZ2V0RWwucXVlcnlTZWxlY3RvcignLmFudC1mb3JtLWl0ZW0tY29udHJvbC13cmFwcGVyLC5hbnQtZm9ybS1pdGVtLWNvbnRyb2wnKTtcbiAgICBjb25zdCB1bml0ID0gYCR7dGhpcy5udW19cHhgO1xuICAgIGlmIChsYWJlbEVsKSB7XG4gICAgICB0aGlzLnJlbmRlci5zZXRTdHlsZShsYWJlbEVsLCAnZmxleCcsIGAwIDAgJHt1bml0fWApO1xuICAgICAgdGhpcy5yZW5kZXIuc2V0U3R5bGUoY29udHJvbEVsLCAnbWF4LXdpZHRoJywgYGNhbGMoMTAwJSAtICR7dW5pdH0pYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyLnNldFN0eWxlKGNvbnRyb2xFbCwgJ21hcmdpbi1sZWZ0JywgdW5pdCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoZXI6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyOiBSZW5kZXJlcjIpIHtcbiAgICB0aGlzLmVsID0gZXIubmF0aXZlRWxlbWVudCBhcyBIVE1MRGl2RWxlbWVudDtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9pbml0ZWQgPSB0cnVlO1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2luaXRlZCkgdGhpcy5pbml0KCk7XG4gIH1cbn1cbiJdfQ==