/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, } from '@angular/core';
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
                    template: "\n    <ng-content></ng-content>\n  ",
                    host: {
                        '[style.height.px]': 'height',
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9jaGFydC9jdXN0b20vIiwic291cmNlcyI6WyJjdXN0b20uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDMUMsT0FBTyxFQUFFLFNBQVMsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTlDO0lBcUJFLGFBQWE7SUFFYiwyQkFBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7UUFaMUIsWUFBTyxHQUF3QixJQUFJLENBQUM7UUFLcEIsZUFBVSxHQUFHLENBQUMsQ0FBQztRQUNwQixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUN4QyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUN4QyxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztJQUl2QixDQUFDOzs7OztJQUU5Qix1Q0FBVzs7OztJQUFuQjtRQUNFLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBRU8sOENBQWtCOzs7O0lBQTFCO1FBQUEsaUJBTUM7UUFMQyxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPO1lBQUUsT0FBTztRQUVqRCxJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDO2FBQ3ZDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7YUFDbEQsU0FBUzs7O1FBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxFQUFFLENBQUMsRUFBekIsQ0FBeUIsRUFBQyxDQUFDO0lBQ2hELENBQUM7Ozs7SUFFRCwyQ0FBZTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELHVDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMzQixJQUFJLElBQUksQ0FBQyxPQUFPO1lBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMvQyxDQUFDOztnQkE5Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4QixRQUFRLEVBQUUscUNBRVQ7b0JBQ0QsSUFBSSxFQUFFO3dCQUNKLG1CQUFtQixFQUFFLFFBQVE7cUJBQzlCO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkFuQkMsVUFBVTs7O3lCQXlCVCxLQUFLOzZCQUNMLEtBQUs7eUJBQ0wsTUFBTTt5QkFDTixNQUFNOzBCQUNOLE1BQU07O0lBSmlCO1FBQWQsV0FBVyxFQUFFOztxREFBZ0I7SUFDZjtRQUFkLFdBQVcsRUFBRTs7eURBQWdCO0lBK0J6Qyx3QkFBQztDQUFBLEFBL0NELElBK0NDO1NBckNZLGlCQUFpQjs7Ozs7O0lBQzVCLG9DQUE0Qzs7SUFJNUMsbUNBQXVDOztJQUN2Qyx1Q0FBdUM7O0lBQ3ZDLG1DQUEyRDs7SUFDM0QsbUNBQTJEOztJQUMzRCxvQ0FBNEQ7Ozs7O0lBSWhELCtCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZzIsZzItY3VzdG9tJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW3N0eWxlLmhlaWdodC5weF0nOiAnaGVpZ2h0JyxcbiAgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEcyQ3VzdG9tQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSByZXNpemUkOiBTdWJzY3JpcHRpb24gfCBudWxsID0gbnVsbDtcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGhlaWdodDogbnVtYmVyO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSByZXNpemVUaW1lID0gMDtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHJlbmRlciA9IG5ldyBFdmVudEVtaXR0ZXI8RWxlbWVudFJlZj4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHJlc2l6ZSA9IG5ldyBFdmVudEVtaXR0ZXI8RWxlbWVudFJlZj4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGRlc3Ryb3kgPSBuZXcgRXZlbnRFbWl0dGVyPEVsZW1lbnRSZWY+KCk7XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHt9XG5cbiAgcHJpdmF0ZSByZW5kZXJDaGFydCgpIHtcbiAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgdGhpcy5yZW5kZXIuZW1pdCh0aGlzLmVsKTtcbiAgICB0aGlzLmluc3RhbGxSZXNpemVFdmVudCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbnN0YWxsUmVzaXplRXZlbnQoKSB7XG4gICAgaWYgKHRoaXMucmVzaXplVGltZSA8PSAwIHx8IHRoaXMucmVzaXplJCkgcmV0dXJuO1xuXG4gICAgdGhpcy5yZXNpemUkID0gZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpXG4gICAgICAucGlwZShkZWJvdW5jZVRpbWUoTWF0aC5taW4oMjAwLCB0aGlzLnJlc2l6ZVRpbWUpKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5yZXNpemUuZW1pdCh0aGlzLmVsKSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5yZW5kZXJDaGFydCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95LmVtaXQodGhpcy5lbCk7XG4gICAgaWYgKHRoaXMucmVzaXplJCkgdGhpcy5yZXNpemUkLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==