/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewEncapsulation, } from '@angular/core';
import { InputNumber } from '@delon/util';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
var G2CustomComponent = /** @class */ (function () {
    // #endregion
    function G2CustomComponent(el) {
        this.el = el;
        this.resize$ = null;
        this.resizeTime = 0;
        this.render = new EventEmitter();
        this.resize = new EventEmitter();
        this.destroy = new EventEmitter();
    }
    /**
     * @private
     * @return {?}
     */
    G2CustomComponent.prototype.renderChart = /**
     * @private
     * @return {?}
     */
    function () {
        this.el.nativeElement.innerHTML = '';
        this.render.emit(this.el);
        this.installResizeEvent();
    };
    /**
     * @private
     * @return {?}
     */
    G2CustomComponent.prototype.installResizeEvent = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.resizeTime <= 0 || this.resize$)
            return;
        this.resize$ = fromEvent(window, 'resize')
            .pipe(debounceTime(Math.min(200, this.resizeTime)))
            .subscribe((/**
         * @return {?}
         */
        function () { return _this.resize.emit(_this.el); }));
    };
    /**
     * @return {?}
     */
    G2CustomComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.renderChart();
    };
    /**
     * @return {?}
     */
    G2CustomComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy.emit(this.el);
        if (this.resize$)
            this.resize$.unsubscribe();
    };
    G2CustomComponent.decorators = [
        { type: Component, args: [{
                    selector: 'g2,g2-custom',
                    exportAs: 'g2Custom',
                    template: "\n    <ng-content></ng-content>\n  ",
                    host: {
                        '[style.height.px]': 'height',
                    },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    G2CustomComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
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
    return G2CustomComponent;
}());
export { G2CustomComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
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
    /**
     * @type {?}
     * @private
     */
    G2CustomComponent.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9jaGFydC9jdXN0b20vIiwic291cmNlcyI6WyJjdXN0b20uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUNOLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxTQUFTLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU5QztJQXdCRSxhQUFhO0lBRWIsMkJBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBWjFCLFlBQU8sR0FBd0IsSUFBSSxDQUFDO1FBS3BCLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDcEIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFDeEMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFDeEMsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7SUFJdkIsQ0FBQzs7Ozs7SUFFOUIsdUNBQVc7Ozs7SUFBbkI7UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM1QixDQUFDOzs7OztJQUVPLDhDQUFrQjs7OztJQUExQjtRQUFBLGlCQU1DO1FBTEMsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTztZQUFFLE9BQU87UUFFakQsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQzthQUN2QyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2FBQ2xELFNBQVM7OztRQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsRUFBRSxDQUFDLEVBQXpCLENBQXlCLEVBQUMsQ0FBQztJQUNoRCxDQUFDOzs7O0lBRUQsMkNBQWU7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCx1Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDM0IsSUFBSSxJQUFJLENBQUMsT0FBTztZQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDL0MsQ0FBQzs7Z0JBakRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLFFBQVEsRUFBRSxxQ0FFVDtvQkFDRCxJQUFJLEVBQUU7d0JBQ0osbUJBQW1CLEVBQUUsUUFBUTtxQkFDOUI7b0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUN0Qzs7OztnQkF2QkMsVUFBVTs7O3lCQTZCVCxLQUFLOzZCQUNMLEtBQUs7eUJBQ0wsTUFBTTt5QkFDTixNQUFNOzBCQUNOLE1BQU07O0lBSmlCO1FBQWQsV0FBVyxFQUFFOztxREFBZ0I7SUFDZjtRQUFkLFdBQVcsRUFBRTs7eURBQWdCO0lBK0J6Qyx3QkFBQztDQUFBLEFBbERELElBa0RDO1NBckNZLGlCQUFpQjs7Ozs7O0lBQzVCLG9DQUE0Qzs7SUFJNUMsbUNBQXVDOztJQUN2Qyx1Q0FBdUM7O0lBQ3ZDLG1DQUEyRDs7SUFDM0QsbUNBQTJEOztJQUMzRCxvQ0FBNEQ7Ozs7O0lBSWhELCtCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbnB1dE51bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IGZyb21FdmVudCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2cyLGcyLWN1c3RvbScsXG4gIGV4cG9ydEFzOiAnZzJDdXN0b20nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgYCxcbiAgaG9zdDoge1xuICAgICdbc3R5bGUuaGVpZ2h0LnB4XSc6ICdoZWlnaHQnLFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIEcyQ3VzdG9tQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSByZXNpemUkOiBTdWJzY3JpcHRpb24gfCBudWxsID0gbnVsbDtcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGhlaWdodDogbnVtYmVyO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSByZXNpemVUaW1lID0gMDtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHJlbmRlciA9IG5ldyBFdmVudEVtaXR0ZXI8RWxlbWVudFJlZj4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHJlc2l6ZSA9IG5ldyBFdmVudEVtaXR0ZXI8RWxlbWVudFJlZj4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGRlc3Ryb3kgPSBuZXcgRXZlbnRFbWl0dGVyPEVsZW1lbnRSZWY+KCk7XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHt9XG5cbiAgcHJpdmF0ZSByZW5kZXJDaGFydCgpIHtcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgdGhpcy5yZW5kZXIuZW1pdCh0aGlzLmVsKTtcbiAgICB0aGlzLmluc3RhbGxSZXNpemVFdmVudCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbnN0YWxsUmVzaXplRXZlbnQoKSB7XG4gICAgaWYgKHRoaXMucmVzaXplVGltZSA8PSAwIHx8IHRoaXMucmVzaXplJCkgcmV0dXJuO1xuXG4gICAgdGhpcy5yZXNpemUkID0gZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpXG4gICAgICAucGlwZShkZWJvdW5jZVRpbWUoTWF0aC5taW4oMjAwLCB0aGlzLnJlc2l6ZVRpbWUpKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5yZXNpemUuZW1pdCh0aGlzLmVsKSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5yZW5kZXJDaGFydCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95LmVtaXQodGhpcy5lbCk7XG4gICAgaWYgKHRoaXMucmVzaXplJCkgdGhpcy5yZXNpemUkLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==