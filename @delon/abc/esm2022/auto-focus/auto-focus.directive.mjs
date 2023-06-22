import { __decorate } from "tslib";
import { Directive, Input } from '@angular/core';
import { InputBoolean, InputNumber } from '@delon/util/decorator';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/platform";
class AutoFocusDirective {
    constructor(el, cdr, platform) {
        this.el = el;
        this.cdr = cdr;
        this.platform = platform;
        this.enabled = true;
        this.delay = 300;
    }
    ngAfterViewInit() {
        const el = this.el.nativeElement;
        if (!this.platform.isBrowser || !(el instanceof HTMLElement) || !this.enabled) {
            return;
        }
        this._focusoutTimeout = setTimeout(() => {
            el.focus({ preventScroll: false });
            this.cdr.markForCheck();
        }, this.delay);
    }
    ngOnDestroy() {
        if (this._focusoutTimeout) {
            clearTimeout(this._focusoutTimeout);
            this._focusoutTimeout = null;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.2", ngImport: i0, type: AutoFocusDirective, deps: [{ token: i0.ElementRef }, { token: i0.ChangeDetectorRef }, { token: i1.Platform }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.2", type: AutoFocusDirective, selector: "[auto-focus], input[autofocus=\"autofocus\"], textarea[autofocus=\"autofocus\"]", inputs: { enabled: "enabled", delay: "delay" }, exportAs: ["autoFocus"], ngImport: i0 }); }
}
__decorate([
    InputBoolean()
], AutoFocusDirective.prototype, "enabled", void 0);
__decorate([
    InputNumber()
], AutoFocusDirective.prototype, "delay", void 0);
export { AutoFocusDirective };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.2", ngImport: i0, type: AutoFocusDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[auto-focus], input[autofocus="autofocus"], textarea[autofocus="autofocus"]',
                    exportAs: 'autoFocus'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i1.Platform }]; }, propDecorators: { enabled: [{
                type: Input
            }], delay: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0by1mb2N1cy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvYXV0by1mb2N1cy9hdXRvLWZvY3VzLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFvQyxTQUFTLEVBQWMsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBRTFHLE9BQU8sRUFBZ0IsWUFBWSxFQUFFLFdBQVcsRUFBZSxNQUFNLHVCQUF1QixDQUFDOzs7QUFHN0YsTUFJYSxrQkFBa0I7SUFRN0IsWUFBb0IsRUFBMkIsRUFBVSxHQUFzQixFQUFVLFFBQWtCO1FBQXZGLE9BQUUsR0FBRixFQUFFLENBQXlCO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBSGxGLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFDaEIsVUFBSyxHQUFHLEdBQUcsQ0FBQztJQUUwRSxDQUFDO0lBRS9HLGVBQWU7UUFDYixNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDLEVBQUUsWUFBWSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDN0UsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDdEMsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQ25DLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDMUIsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3pCLFlBQVksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1NBQzlCO0lBQ0gsQ0FBQzs4R0ExQlUsa0JBQWtCO2tHQUFsQixrQkFBa0I7O0FBS0o7SUFBZixZQUFZLEVBQUU7bURBQWdCO0FBQ2hCO0lBQWQsV0FBVyxFQUFFO2lEQUFhO1NBTnpCLGtCQUFrQjsyRkFBbEIsa0JBQWtCO2tCQUo5QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSw2RUFBNkU7b0JBQ3ZGLFFBQVEsRUFBRSxXQUFXO2lCQUN0Qjt3SkFNMEIsT0FBTztzQkFBL0IsS0FBSztnQkFDa0IsS0FBSztzQkFBNUIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7IEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdG9yUmVmLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyLCBOdW1iZXJJbnB1dCB9IGZyb20gJ0BkZWxvbi91dGlsL2RlY29yYXRvcic7XG5pbXBvcnQgdHlwZSB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thdXRvLWZvY3VzXSwgaW5wdXRbYXV0b2ZvY3VzPVwiYXV0b2ZvY3VzXCJdLCB0ZXh0YXJlYVthdXRvZm9jdXM9XCJhdXRvZm9jdXNcIl0nLFxuICBleHBvcnRBczogJ2F1dG9Gb2N1cydcbn0pXG5leHBvcnQgY2xhc3MgQXV0b0ZvY3VzRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2VuYWJsZWQ6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2RlbGF5OiBOdW1iZXJJbnB1dDtcblxuICBwcml2YXRlIF9mb2N1c291dFRpbWVvdXQ6IE56U2FmZUFueTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGVuYWJsZWQgPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBkZWxheSA9IDMwMDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PiwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSkge31cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgY29uc3QgZWwgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3NlciB8fCAhKGVsIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHx8ICF0aGlzLmVuYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fZm9jdXNvdXRUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBlbC5mb2N1cyh7IHByZXZlbnRTY3JvbGw6IGZhbHNlIH0pO1xuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfSwgdGhpcy5kZWxheSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZm9jdXNvdXRUaW1lb3V0KSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fZm9jdXNvdXRUaW1lb3V0KTtcbiAgICAgIHRoaXMuX2ZvY3Vzb3V0VGltZW91dCA9IG51bGw7XG4gICAgfVxuICB9XG59XG4iXX0=