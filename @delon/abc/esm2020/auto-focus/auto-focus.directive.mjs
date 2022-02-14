import { __decorate } from "tslib";
import { Directive, Input } from '@angular/core';
import { InputBoolean, InputNumber } from '@delon/util/decorator';
import * as i0 from "@angular/core";
export class AutoFocusDirective {
    constructor(el, cdr) {
        this.el = el;
        this.cdr = cdr;
        this.enabled = true;
        this.delay = 300;
    }
    ngAfterViewInit() {
        const el = this.el.nativeElement;
        if (!(el instanceof HTMLElement) || !this.enabled) {
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
}
AutoFocusDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: AutoFocusDirective, deps: [{ token: i0.ElementRef }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Directive });
AutoFocusDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.2.2", type: AutoFocusDirective, selector: "[auto-focus], input[autofocus=\"autofocus\"], textarea[autofocus=\"autofocus\"]", inputs: { enabled: "enabled", delay: "delay" }, exportAs: ["autoFocus"], ngImport: i0 });
__decorate([
    InputBoolean()
], AutoFocusDirective.prototype, "enabled", void 0);
__decorate([
    InputNumber()
], AutoFocusDirective.prototype, "delay", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: AutoFocusDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[auto-focus], input[autofocus="autofocus"], textarea[autofocus="autofocus"]',
                    exportAs: 'autoFocus'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { enabled: [{
                type: Input
            }], delay: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0by1mb2N1cy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvYXV0by1mb2N1cy9hdXRvLWZvY3VzLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFvQyxTQUFTLEVBQWMsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBRTFHLE9BQU8sRUFBZ0IsWUFBWSxFQUFFLFdBQVcsRUFBZSxNQUFNLHVCQUF1QixDQUFDOztBQU83RixNQUFNLE9BQU8sa0JBQWtCO0lBUTdCLFlBQW9CLEVBQTJCLEVBQVUsR0FBc0I7UUFBM0QsT0FBRSxHQUFGLEVBQUUsQ0FBeUI7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUh0RCxZQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLFVBQUssR0FBRyxHQUFHLENBQUM7SUFFOEMsQ0FBQztJQUVuRixlQUFlO1FBQ2IsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUM7UUFDakMsSUFBSSxDQUFDLENBQUMsRUFBRSxZQUFZLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNqRCxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUN0QyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMxQixDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDekIsWUFBWSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7U0FDOUI7SUFDSCxDQUFDOzsrR0ExQlUsa0JBQWtCO21HQUFsQixrQkFBa0I7QUFLSjtJQUFmLFlBQVksRUFBRTttREFBZ0I7QUFDaEI7SUFBZCxXQUFXLEVBQUU7aURBQWE7MkZBTnpCLGtCQUFrQjtrQkFKOUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsNkVBQTZFO29CQUN2RixRQUFRLEVBQUUsV0FBVztpQkFDdEI7aUlBTTBCLE9BQU87c0JBQS9CLEtBQUs7Z0JBQ2tCLEtBQUs7c0JBQTVCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3RvclJlZiwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciwgTnVtYmVySW5wdXQgfSBmcm9tICdAZGVsb24vdXRpbC9kZWNvcmF0b3InO1xuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYXV0by1mb2N1c10sIGlucHV0W2F1dG9mb2N1cz1cImF1dG9mb2N1c1wiXSwgdGV4dGFyZWFbYXV0b2ZvY3VzPVwiYXV0b2ZvY3VzXCJdJyxcbiAgZXhwb3J0QXM6ICdhdXRvRm9jdXMnXG59KVxuZXhwb3J0IGNsYXNzIEF1dG9Gb2N1c0RpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9lbmFibGVkOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9kZWxheTogTnVtYmVySW5wdXQ7XG5cbiAgcHJpdmF0ZSBfZm9jdXNvdXRUaW1lb3V0OiBOelNhZmVBbnk7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBlbmFibGVkID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgZGVsYXkgPSAzMDA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgY29uc3QgZWwgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgaWYgKCEoZWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgfHwgIXRoaXMuZW5hYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9mb2N1c291dFRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGVsLmZvY3VzKHsgcHJldmVudFNjcm9sbDogZmFsc2UgfSk7XG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9LCB0aGlzLmRlbGF5KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9mb2N1c291dFRpbWVvdXQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9mb2N1c291dFRpbWVvdXQpO1xuICAgICAgdGhpcy5fZm9jdXNvdXRUaW1lb3V0ID0gbnVsbDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==