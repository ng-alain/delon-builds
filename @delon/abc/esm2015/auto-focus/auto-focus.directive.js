import { __decorate } from "tslib";
import { ChangeDetectorRef, Directive, ElementRef, Input } from '@angular/core';
import { InputBoolean, InputNumber } from '@delon/util/decorator';
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
AutoFocusDirective.decorators = [
    { type: Directive, args: [{
                selector: '[auto-focus], input[autofocus="autofocus"], textarea[autofocus="autofocus"]',
                exportAs: 'autoFocus',
            },] }
];
AutoFocusDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
AutoFocusDirective.propDecorators = {
    enabled: [{ type: Input }],
    delay: [{ type: Input }]
};
__decorate([
    InputBoolean()
], AutoFocusDirective.prototype, "enabled", void 0);
__decorate([
    InputNumber()
], AutoFocusDirective.prototype, "delay", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0by1mb2N1cy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvYXV0by1mb2N1cy9hdXRvLWZvY3VzLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFpQixpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRixPQUFPLEVBQWdCLFlBQVksRUFBRSxXQUFXLEVBQWUsTUFBTSx1QkFBdUIsQ0FBQztBQU03RixNQUFNLE9BQU8sa0JBQWtCO0lBTzdCLFlBQW9CLEVBQTJCLEVBQVUsR0FBc0I7UUFBM0QsT0FBRSxHQUFGLEVBQUUsQ0FBeUI7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUh0RCxZQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLFVBQUssR0FBRyxHQUFHLENBQUM7SUFFOEMsQ0FBQztJQUVuRixlQUFlO1FBQ2IsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUM7UUFDakMsSUFBSSxDQUFDLENBQUMsRUFBRSxZQUFZLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNqRCxPQUFPO1NBQ1I7UUFDRCxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQ25DLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDMUIsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQixDQUFDOzs7WUF0QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw2RUFBNkU7Z0JBQ3ZGLFFBQVEsRUFBRSxXQUFXO2FBQ3RCOzs7WUFOcUQsVUFBVTtZQUF4QyxpQkFBaUI7OztzQkFXdEMsS0FBSztvQkFDTCxLQUFLOztBQURtQjtJQUFmLFlBQVksRUFBRTttREFBZ0I7QUFDaEI7SUFBZCxXQUFXLEVBQUU7aURBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3RvclJlZiwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyLCBOdW1iZXJJbnB1dCB9IGZyb20gJ0BkZWxvbi91dGlsL2RlY29yYXRvcic7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thdXRvLWZvY3VzXSwgaW5wdXRbYXV0b2ZvY3VzPVwiYXV0b2ZvY3VzXCJdLCB0ZXh0YXJlYVthdXRvZm9jdXM9XCJhdXRvZm9jdXNcIl0nLFxuICBleHBvcnRBczogJ2F1dG9Gb2N1cycsXG59KVxuZXhwb3J0IGNsYXNzIEF1dG9Gb2N1c0RpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZW5hYmxlZDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZGVsYXk6IE51bWJlcklucHV0O1xuXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBlbmFibGVkID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgZGVsYXkgPSAzMDA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgY29uc3QgZWwgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgaWYgKCEoZWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgfHwgIXRoaXMuZW5hYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGVsLmZvY3VzKHsgcHJldmVudFNjcm9sbDogZmFsc2UgfSk7XG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9LCB0aGlzLmRlbGF5KTtcbiAgfVxufVxuIl19