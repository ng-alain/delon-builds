import { __decorate } from "tslib";
import { Platform } from '@angular/cdk/platform';
import { DestroyRef, Directive, ElementRef, Input, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { timer } from 'rxjs';
import { InputBoolean, InputNumber } from '@delon/util/decorator/convert';
import * as i0 from "@angular/core";
export class AutoFocusDirective {
    constructor() {
        this.el = inject(ElementRef).nativeElement;
        this.platform = inject(Platform);
        this.d$ = inject(DestroyRef);
        this.enabled = true;
        this.delay = 300;
    }
    ngAfterViewInit() {
        const el = this.el;
        if (!this.platform.isBrowser || !(el instanceof HTMLElement) || !this.enabled) {
            return;
        }
        timer(this.delay)
            .pipe(takeUntilDestroyed(this.d$))
            .subscribe(() => {
            el.focus({ preventScroll: false });
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: AutoFocusDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.1.0", type: AutoFocusDirective, isStandalone: true, selector: "[auto-focus], input[autofocus=\"autofocus\"], textarea[autofocus=\"autofocus\"]", inputs: { enabled: "enabled", delay: "delay" }, exportAs: ["autoFocus"], ngImport: i0 }); }
}
__decorate([
    InputBoolean()
], AutoFocusDirective.prototype, "enabled", void 0);
__decorate([
    InputNumber()
], AutoFocusDirective.prototype, "delay", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: AutoFocusDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[auto-focus], input[autofocus="autofocus"], textarea[autofocus="autofocus"]',
                    exportAs: 'autoFocus',
                    standalone: true
                }]
        }], propDecorators: { enabled: [{
                type: Input
            }], delay: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0by1mb2N1cy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvYXV0by1mb2N1cy9hdXRvLWZvY3VzLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBaUIsVUFBVSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTdCLE9BQU8sRUFBZ0IsWUFBWSxFQUFFLFdBQVcsRUFBZSxNQUFNLCtCQUErQixDQUFDOztBQU9yRyxNQUFNLE9BQU8sa0JBQWtCO0lBTC9CO1FBUW1CLE9BQUUsR0FBRyxNQUFNLENBQTBCLFVBQVUsQ0FBQyxDQUFDLGFBQWEsQ0FBQztRQUMvRCxhQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVCLE9BQUUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFaEIsWUFBTyxHQUFHLElBQUksQ0FBQztRQUNoQixVQUFLLEdBQUcsR0FBRyxDQUFDO0tBYXJDO0lBWEMsZUFBZTtRQUNiLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQyxFQUFFLFlBQVksV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDOUUsT0FBTztRQUNULENBQUM7UUFDRCxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzthQUNkLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDakMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUNkLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7OEdBcEJVLGtCQUFrQjtrR0FBbEIsa0JBQWtCOztBQU9KO0lBQWYsWUFBWSxFQUFFO21EQUFnQjtBQUNoQjtJQUFkLFdBQVcsRUFBRTtpREFBYTsyRkFSekIsa0JBQWtCO2tCQUw5QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSw2RUFBNkU7b0JBQ3ZGLFFBQVEsRUFBRSxXQUFXO29CQUNyQixVQUFVLEVBQUUsSUFBSTtpQkFDakI7OEJBUTBCLE9BQU87c0JBQS9CLEtBQUs7Z0JBQ2tCLEtBQUs7c0JBQTVCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBEZXN0cm95UmVmLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBpbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRha2VVbnRpbERlc3Ryb3llZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvcnhqcy1pbnRlcm9wJztcbmltcG9ydCB7IHRpbWVyIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciwgTnVtYmVySW5wdXQgfSBmcm9tICdAZGVsb24vdXRpbC9kZWNvcmF0b3IvY29udmVydCc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thdXRvLWZvY3VzXSwgaW5wdXRbYXV0b2ZvY3VzPVwiYXV0b2ZvY3VzXCJdLCB0ZXh0YXJlYVthdXRvZm9jdXM9XCJhdXRvZm9jdXNcIl0nLFxuICBleHBvcnRBczogJ2F1dG9Gb2N1cycsXG4gIHN0YW5kYWxvbmU6IHRydWVcbn0pXG5leHBvcnQgY2xhc3MgQXV0b0ZvY3VzRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9lbmFibGVkOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9kZWxheTogTnVtYmVySW5wdXQ7XG4gIHByaXZhdGUgcmVhZG9ubHkgZWwgPSBpbmplY3Q8RWxlbWVudFJlZjxIVE1MRWxlbWVudD4+KEVsZW1lbnRSZWYpLm5hdGl2ZUVsZW1lbnQ7XG4gIHByaXZhdGUgcmVhZG9ubHkgcGxhdGZvcm0gPSBpbmplY3QoUGxhdGZvcm0pO1xuICBwcml2YXRlIHJlYWRvbmx5IGQkID0gaW5qZWN0KERlc3Ryb3lSZWYpO1xuXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBlbmFibGVkID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgZGVsYXkgPSAzMDA7XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IGVsID0gdGhpcy5lbDtcbiAgICBpZiAoIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyIHx8ICEoZWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgfHwgIXRoaXMuZW5hYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aW1lcih0aGlzLmRlbGF5KVxuICAgICAgLnBpcGUodGFrZVVudGlsRGVzdHJveWVkKHRoaXMuZCQpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIGVsLmZvY3VzKHsgcHJldmVudFNjcm9sbDogZmFsc2UgfSk7XG4gICAgICB9KTtcbiAgfVxufVxuIl19