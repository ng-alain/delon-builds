/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, Input, EventEmitter, Output, HostBinding, ChangeDetectionStrategy } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { InputNumber } from '@delon/util';
export class G2CustomComponent {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this.resize$ = null;
        this.resizeTime = 0;
        this.render = new EventEmitter();
        this.resize = new EventEmitter();
        this.destroy = new EventEmitter();
    }
    /**
     * @return {?}
     */
    renderChart() {
        this.el.nativeElement.innerHTML = '';
        this.render.emit(this.el);
        this.installResizeEvent();
    }
    /**
     * @return {?}
     */
    installResizeEvent() {
        if (this.resizeTime <= 0 || !this.resize$)
            return;
        this.resize$ = fromEvent(window, 'resize')
            .pipe(debounceTime(Math.min(200, this.resizeTime)))
            .subscribe(() => this.resize.emit(this.el));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        setTimeout(() => this.renderChart());
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy.emit(this.el);
        if (this.resize$)
            this.resize$.unsubscribe();
    }
}
G2CustomComponent.decorators = [
    { type: Component, args: [{
                selector: 'g2,g2-custom',
                template: `<ng-content></ng-content>`,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
G2CustomComponent.ctorParameters = () => [
    { type: ElementRef }
];
G2CustomComponent.propDecorators = {
    height: [{ type: HostBinding, args: ['style.height.px',] }, { type: Input }],
    resizeTime: [{ type: Input }],
    render: [{ type: Output }],
    resize: [{ type: Output }],
    destroy: [{ type: Output }]
};
tslib_1.__decorate([
    InputNumber(),
    tslib_1.__metadata("design:type", Number)
], G2CustomComponent.prototype, "height", void 0);
tslib_1.__decorate([
    InputNumber(),
    tslib_1.__metadata("design:type", Object)
], G2CustomComponent.prototype, "resizeTime", void 0);
if (false) {
    /** @type {?} */
    G2CustomComponent.prototype.resize$;
    /** @type {?} */
    G2CustomComponent.prototype.height;
    /** @type {?} */
    G2CustomComponent.prototype.resizeTime;
    /** @type {?} */
    G2CustomComponent.prototype.render;
    /** @type {?} */
    G2CustomComponent.prototype.resize;
    /** @type {?} */
    G2CustomComponent.prototype.destroy;
    /** @type {?} */
    G2CustomComponent.prototype.el;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9jaGFydC9jdXN0b20vIiwic291cmNlcyI6WyJjdXN0b20uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxVQUFVLEVBQ1YsS0FBSyxFQUVMLFlBQVksRUFDWixNQUFNLEVBQ04sV0FBVyxFQUNYLHVCQUF1QixFQUN4QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQWdCLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQU8xQyxNQUFNOzs7O0lBMEJKLFlBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO3VCQXhCRixJQUFJOzBCQVd2QixDQUFDO3NCQUdxQixJQUFJLFlBQVksRUFBYztzQkFHOUIsSUFBSSxZQUFZLEVBQWM7dUJBRzdCLElBQUksWUFBWSxFQUFjO0tBSTVCOzs7O0lBRTlCLFdBQVc7UUFDakIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7Ozs7O0lBR3BCLGtCQUFrQjtRQUN4QixJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU87WUFBRSxPQUFPO1FBRWxELElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUM7YUFDdkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQzthQUNsRCxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Ozs7O0lBR2hELFFBQVE7UUFDTixVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7S0FDdEM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzNCLElBQUksSUFBSSxDQUFDLE9BQU87WUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQzlDOzs7WUF0REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OztZQWhCQyxVQUFVOzs7cUJBdUJULFdBQVcsU0FBQyxpQkFBaUIsY0FDN0IsS0FBSzt5QkFJTCxLQUFLO3FCQUlMLE1BQU07cUJBR04sTUFBTTtzQkFHTixNQUFNOzs7SUFiTixXQUFXLEVBQUU7Ozs7SUFJYixXQUFXLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgRXZlbnRFbWl0dGVyLFxuICBPdXRwdXQsXG4gIEhvc3RCaW5kaW5nLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBJbnB1dE51bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZzIsZzItY3VzdG9tJyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgRzJDdXN0b21Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgcHJpdmF0ZSByZXNpemUkOiBTdWJzY3JpcHRpb24gPSBudWxsO1xuXG4gIC8vIHJlZ2lvbjogZmllbGRzXG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5oZWlnaHQucHgnKVxuICBASW5wdXQoKVxuICBASW5wdXROdW1iZXIoKVxuICBoZWlnaHQ6IG51bWJlcjtcblxuICBASW5wdXQoKVxuICBASW5wdXROdW1iZXIoKVxuICByZXNpemVUaW1lID0gMDtcblxuICBAT3V0cHV0KClcbiAgcmVuZGVyOiBFdmVudEVtaXR0ZXI8RWxlbWVudFJlZj4gPSBuZXcgRXZlbnRFbWl0dGVyPEVsZW1lbnRSZWY+KCk7XG5cbiAgQE91dHB1dCgpXG4gIHJlc2l6ZTogRXZlbnRFbWl0dGVyPEVsZW1lbnRSZWY+ID0gbmV3IEV2ZW50RW1pdHRlcjxFbGVtZW50UmVmPigpO1xuXG4gIEBPdXRwdXQoKVxuICBkZXN0cm95OiBFdmVudEVtaXR0ZXI8RWxlbWVudFJlZj4gPSBuZXcgRXZlbnRFbWl0dGVyPEVsZW1lbnRSZWY+KCk7XG5cbiAgLy8gZW5kcmVnaW9uXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge31cblxuICBwcml2YXRlIHJlbmRlckNoYXJ0KCkge1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgICB0aGlzLnJlbmRlci5lbWl0KHRoaXMuZWwpO1xuICAgIHRoaXMuaW5zdGFsbFJlc2l6ZUV2ZW50KCk7XG4gIH1cblxuICBwcml2YXRlIGluc3RhbGxSZXNpemVFdmVudCgpIHtcbiAgICBpZiAodGhpcy5yZXNpemVUaW1lIDw9IDAgfHwgIXRoaXMucmVzaXplJCkgcmV0dXJuO1xuXG4gICAgdGhpcy5yZXNpemUkID0gZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpXG4gICAgICAucGlwZShkZWJvdW5jZVRpbWUoTWF0aC5taW4oMjAwLCB0aGlzLnJlc2l6ZVRpbWUpKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5yZXNpemUuZW1pdCh0aGlzLmVsKSk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMucmVuZGVyQ2hhcnQoKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kuZW1pdCh0aGlzLmVsKTtcbiAgICBpZiAodGhpcy5yZXNpemUkKSB0aGlzLnJlc2l6ZSQudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19