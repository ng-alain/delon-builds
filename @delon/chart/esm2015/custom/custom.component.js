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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9jaGFydC9jdXN0b20vIiwic291cmNlcyI6WyJjdXN0b20uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxVQUFVLEVBQ1YsS0FBSyxFQUVMLFlBQVksRUFDWixNQUFNLEVBQ04sV0FBVyxFQUNYLHVCQUF1QixFQUN4QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQWdCLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQU8xQyxNQUFNOzs7O0lBMEJKLFlBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO3VCQXhCRixJQUFJOzBCQVd2QixDQUFDO3NCQUdxQixJQUFJLFlBQVksRUFBYztzQkFHOUIsSUFBSSxZQUFZLEVBQWM7dUJBRzdCLElBQUksWUFBWSxFQUFjO0tBSTVCOzs7O0lBRTlCLFdBQVc7UUFDakIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7Ozs7O0lBR3BCLGtCQUFrQjtRQUN4QixJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU87WUFBRSxPQUFPO1FBRWxELElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUM7YUFDdkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQzthQUNsRCxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Ozs7O0lBR2hELFFBQVE7UUFDTixVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7S0FDdEM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzNCLElBQUksSUFBSSxDQUFDLE9BQU87WUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQzlDOzs7WUF0REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OztZQWhCQyxVQUFVOzs7cUJBdUJULFdBQVcsU0FBQyxpQkFBaUIsY0FDN0IsS0FBSzt5QkFJTCxLQUFLO3FCQUlMLE1BQU07cUJBR04sTUFBTTtzQkFHTixNQUFNOzs7SUFiTixXQUFXLEVBQUU7Ozs7SUFJYixXQUFXLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBPbkluaXQsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIE91dHB1dCxcclxuICBIb3N0QmluZGluZyxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneVxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24sIGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnMixnMi1jdXN0b20nLFxyXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIEcyQ3VzdG9tQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICBwcml2YXRlIHJlc2l6ZSQ6IFN1YnNjcmlwdGlvbiA9IG51bGw7XHJcblxyXG4gIC8vIHJlZ2lvbjogZmllbGRzXHJcblxyXG4gIEBIb3N0QmluZGluZygnc3R5bGUuaGVpZ2h0LnB4JylcclxuICBASW5wdXQoKVxyXG4gIEBJbnB1dE51bWJlcigpXHJcbiAgaGVpZ2h0OiBudW1iZXI7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgQElucHV0TnVtYmVyKClcclxuICByZXNpemVUaW1lID0gMDtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcmVuZGVyOiBFdmVudEVtaXR0ZXI8RWxlbWVudFJlZj4gPSBuZXcgRXZlbnRFbWl0dGVyPEVsZW1lbnRSZWY+KCk7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHJlc2l6ZTogRXZlbnRFbWl0dGVyPEVsZW1lbnRSZWY+ID0gbmV3IEV2ZW50RW1pdHRlcjxFbGVtZW50UmVmPigpO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBkZXN0cm95OiBFdmVudEVtaXR0ZXI8RWxlbWVudFJlZj4gPSBuZXcgRXZlbnRFbWl0dGVyPEVsZW1lbnRSZWY+KCk7XHJcblxyXG4gIC8vIGVuZHJlZ2lvblxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7fVxyXG5cclxuICBwcml2YXRlIHJlbmRlckNoYXJ0KCkge1xyXG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmlubmVySFRNTCA9ICcnO1xyXG4gICAgdGhpcy5yZW5kZXIuZW1pdCh0aGlzLmVsKTtcclxuICAgIHRoaXMuaW5zdGFsbFJlc2l6ZUV2ZW50KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluc3RhbGxSZXNpemVFdmVudCgpIHtcclxuICAgIGlmICh0aGlzLnJlc2l6ZVRpbWUgPD0gMCB8fCAhdGhpcy5yZXNpemUkKSByZXR1cm47XHJcblxyXG4gICAgdGhpcy5yZXNpemUkID0gZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpXHJcbiAgICAgIC5waXBlKGRlYm91bmNlVGltZShNYXRoLm1pbigyMDAsIHRoaXMucmVzaXplVGltZSkpKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMucmVzaXplLmVtaXQodGhpcy5lbCkpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMucmVuZGVyQ2hhcnQoKSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveS5lbWl0KHRoaXMuZWwpO1xyXG4gICAgaWYgKHRoaXMucmVzaXplJCkgdGhpcy5yZXNpemUkLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==