/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, } from '@angular/core';
import { InputNumber } from '@delon/util';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
export class G2CustomComponent {
    // #endregion
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
        if (this.resizeTime <= 0 || this.resize$)
            return;
        this.resize$ = fromEvent(window, 'resize')
            .pipe(debounceTime(Math.min(200, this.resizeTime)))
            .subscribe(() => this.resize.emit(this.el));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.renderChart();
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
                template: `
    <ng-content></ng-content>
  `,
                host: {
                    '[style.height.px]': 'height',
                },
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
G2CustomComponent.ctorParameters = () => [
    { type: ElementRef }
];
G2CustomComponent.propDecorators = {
    height: [{ type: Input }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9jaGFydC9jdXN0b20vIiwic291cmNlcyI6WyJjdXN0b20uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDMUMsT0FBTyxFQUFFLFNBQVMsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBWTlDLE1BQU0sT0FBTyxpQkFBaUI7Ozs7O0lBYTVCLFlBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBWjFCLFlBQU8sR0FBaUIsSUFBSSxDQUFDO1FBS2IsZUFBVSxHQUFHLENBQUMsQ0FBQztRQUNwQixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUN4QyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUN4QyxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztJQUl2QixDQUFDOzs7O0lBRTlCLFdBQVc7UUFDakIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVPLGtCQUFrQjtRQUN4QixJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPO1lBQUUsT0FBTztRQUVqRCxJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDO2FBQ3ZDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7YUFDbEQsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzNCLElBQUksSUFBSSxDQUFDLE9BQU87WUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQy9DLENBQUM7OztZQTlDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFFBQVEsRUFBRTs7R0FFVDtnQkFDRCxJQUFJLEVBQUU7b0JBQ0osbUJBQW1CLEVBQUUsUUFBUTtpQkFDOUI7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUFuQkMsVUFBVTs7O3FCQXlCVCxLQUFLO3lCQUNMLEtBQUs7cUJBQ0wsTUFBTTtxQkFDTixNQUFNO3NCQUNOLE1BQU07O0FBSmlCO0lBQWQsV0FBVyxFQUFFOztpREFBZ0I7QUFDZjtJQUFkLFdBQVcsRUFBRTs7cURBQWdCOzs7SUFMdkMsb0NBQXFDOztJQUlyQyxtQ0FBdUM7O0lBQ3ZDLHVDQUF1Qzs7SUFDdkMsbUNBQTJEOztJQUMzRCxtQ0FBMkQ7O0lBQzNELG9DQUE0RDs7SUFJaEQsK0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnMixnMi1jdXN0b20nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgYCxcbiAgaG9zdDoge1xuICAgICdbc3R5bGUuaGVpZ2h0LnB4XSc6ICdoZWlnaHQnLFxuICB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgRzJDdXN0b21Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIHJlc2l6ZSQ6IFN1YnNjcmlwdGlvbiA9IG51bGw7XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBoZWlnaHQ6IG51bWJlcjtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgcmVzaXplVGltZSA9IDA7XG4gIEBPdXRwdXQoKSByZWFkb25seSByZW5kZXIgPSBuZXcgRXZlbnRFbWl0dGVyPEVsZW1lbnRSZWY+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSByZXNpemUgPSBuZXcgRXZlbnRFbWl0dGVyPEVsZW1lbnRSZWY+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBkZXN0cm95ID0gbmV3IEV2ZW50RW1pdHRlcjxFbGVtZW50UmVmPigpO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7fVxuXG4gIHByaXZhdGUgcmVuZGVyQ2hhcnQoKSB7XG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmlubmVySFRNTCA9ICcnO1xuICAgIHRoaXMucmVuZGVyLmVtaXQodGhpcy5lbCk7XG4gICAgdGhpcy5pbnN0YWxsUmVzaXplRXZlbnQoKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5zdGFsbFJlc2l6ZUV2ZW50KCkge1xuICAgIGlmICh0aGlzLnJlc2l6ZVRpbWUgPD0gMCB8fCB0aGlzLnJlc2l6ZSQpIHJldHVybjtcblxuICAgIHRoaXMucmVzaXplJCA9IGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKVxuICAgICAgLnBpcGUoZGVib3VuY2VUaW1lKE1hdGgubWluKDIwMCwgdGhpcy5yZXNpemVUaW1lKSkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMucmVzaXplLmVtaXQodGhpcy5lbCkpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMucmVuZGVyQ2hhcnQoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveS5lbWl0KHRoaXMuZWwpO1xuICAgIGlmICh0aGlzLnJlc2l6ZSQpIHRoaXMucmVzaXplJC51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=