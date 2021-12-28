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
        setTimeout(() => {
            el.focus({ preventScroll: false });
            this.cdr.markForCheck();
        }, this.delay);
    }
}
AutoFocusDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: AutoFocusDirective, deps: [{ token: i0.ElementRef }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Directive });
AutoFocusDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.1.1", type: AutoFocusDirective, selector: "[auto-focus], input[autofocus=\"autofocus\"], textarea[autofocus=\"autofocus\"]", inputs: { enabled: "enabled", delay: "delay" }, exportAs: ["autoFocus"], ngImport: i0 });
__decorate([
    InputBoolean()
], AutoFocusDirective.prototype, "enabled", void 0);
__decorate([
    InputNumber()
], AutoFocusDirective.prototype, "delay", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: AutoFocusDirective, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0by1mb2N1cy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvYXV0by1mb2N1cy9hdXRvLWZvY3VzLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFvQyxTQUFTLEVBQWMsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9GLE9BQU8sRUFBZ0IsWUFBWSxFQUFFLFdBQVcsRUFBZSxNQUFNLHVCQUF1QixDQUFDOztBQU03RixNQUFNLE9BQU8sa0JBQWtCO0lBTzdCLFlBQW9CLEVBQTJCLEVBQVUsR0FBc0I7UUFBM0QsT0FBRSxHQUFGLEVBQUUsQ0FBeUI7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUh0RCxZQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLFVBQUssR0FBRyxHQUFHLENBQUM7SUFFOEMsQ0FBQztJQUVuRixlQUFlO1FBQ2IsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUM7UUFDakMsSUFBSSxDQUFDLENBQUMsRUFBRSxZQUFZLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNqRCxPQUFPO1NBQ1I7UUFDRCxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQ25DLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDMUIsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQixDQUFDOzsrR0FsQlUsa0JBQWtCO21HQUFsQixrQkFBa0I7QUFJSjtJQUFmLFlBQVksRUFBRTttREFBZ0I7QUFDaEI7SUFBZCxXQUFXLEVBQUU7aURBQWE7MkZBTHpCLGtCQUFrQjtrQkFKOUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsNkVBQTZFO29CQUN2RixRQUFRLEVBQUUsV0FBVztpQkFDdEI7aUlBSzBCLE9BQU87c0JBQS9CLEtBQUs7Z0JBQ2tCLEtBQUs7c0JBQTVCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3RvclJlZiwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIsIE51bWJlcklucHV0IH0gZnJvbSAnQGRlbG9uL3V0aWwvZGVjb3JhdG9yJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2F1dG8tZm9jdXNdLCBpbnB1dFthdXRvZm9jdXM9XCJhdXRvZm9jdXNcIl0sIHRleHRhcmVhW2F1dG9mb2N1cz1cImF1dG9mb2N1c1wiXScsXG4gIGV4cG9ydEFzOiAnYXV0b0ZvY3VzJ1xufSlcbmV4cG9ydCBjbGFzcyBBdXRvRm9jdXNEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2VuYWJsZWQ6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2RlbGF5OiBOdW1iZXJJbnB1dDtcblxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZW5hYmxlZCA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGRlbGF5ID0gMzAwO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IGVsID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuICAgIGlmICghKGVsIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHx8ICF0aGlzLmVuYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBlbC5mb2N1cyh7IHByZXZlbnRTY3JvbGw6IGZhbHNlIH0pO1xuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfSwgdGhpcy5kZWxheSk7XG4gIH1cbn1cbiJdfQ==