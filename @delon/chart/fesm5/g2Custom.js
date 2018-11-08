import { __decorate, __metadata, __spread } from 'tslib';
import { Component, ElementRef, Input, EventEmitter, Output, HostBinding, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { InputNumber, DelonUtilModule } from '@delon/util';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
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
     * @return {?}
     */
    G2CustomComponent.prototype.renderChart = /**
     * @return {?}
     */
    function () {
        this.el.nativeElement.innerHTML = '';
        this.render.emit(this.el);
        this.installResizeEvent();
    };
    /**
     * @return {?}
     */
    G2CustomComponent.prototype.installResizeEvent = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.resizeTime <= 0 || !this.resize$)
            return;
        this.resize$ = fromEvent(window, 'resize')
            .pipe(debounceTime(Math.min(200, this.resizeTime)))
            .subscribe(function () { return _this.resize.emit(_this.el); });
    };
    /**
     * @return {?}
     */
    G2CustomComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout(function () { return _this.renderChart(); });
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
                    template: "<ng-content></ng-content>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    G2CustomComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    G2CustomComponent.propDecorators = {
        height: [{ type: HostBinding, args: ['style.height.px',] }, { type: Input }],
        resizeTime: [{ type: Input }],
        render: [{ type: Output }],
        resize: [{ type: Output }],
        destroy: [{ type: Output }]
    };
    __decorate([
        InputNumber(),
        __metadata("design:type", Number)
    ], G2CustomComponent.prototype, "height", void 0);
    __decorate([
        InputNumber(),
        __metadata("design:type", Object)
    ], G2CustomComponent.prototype, "resizeTime", void 0);
    return G2CustomComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var COMPONENTS = [G2CustomComponent];
var G2CustomModule = /** @class */ (function () {
    function G2CustomModule() {
    }
    /**
     * @return {?}
     */
    G2CustomModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: G2CustomModule, providers: [] };
    };
    G2CustomModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, DelonUtilModule],
                    declarations: __spread(COMPONENTS),
                    exports: __spread(COMPONENTS),
                },] }
    ];
    return G2CustomModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { G2CustomComponent, G2CustomModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZzJDdXN0b20uanMubWFwIiwic291cmNlcyI6WyJuZzovL0BkZWxvbi9jaGFydC9jdXN0b20vY3VzdG9tLmNvbXBvbmVudC50cyIsIm5nOi8vQGRlbG9uL2NoYXJ0L2N1c3RvbS9jdXN0b20ubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBFdmVudEVtaXR0ZXIsXG4gIE91dHB1dCxcbiAgSG9zdEJpbmRpbmcsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnMixnMi1jdXN0b20nLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBHMkN1c3RvbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBwcml2YXRlIHJlc2l6ZSQ6IFN1YnNjcmlwdGlvbiA9IG51bGw7XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmhlaWdodC5weCcpXG4gIEBJbnB1dCgpXG4gIEBJbnB1dE51bWJlcigpXG4gIGhlaWdodDogbnVtYmVyO1xuXG4gIEBJbnB1dCgpXG4gIEBJbnB1dE51bWJlcigpXG4gIHJlc2l6ZVRpbWUgPSAwO1xuXG4gIEBPdXRwdXQoKVxuICByZWFkb25seSByZW5kZXIgPSBuZXcgRXZlbnRFbWl0dGVyPEVsZW1lbnRSZWY+KCk7XG5cbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IHJlc2l6ZSA9IG5ldyBFdmVudEVtaXR0ZXI8RWxlbWVudFJlZj4oKTtcblxuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgZGVzdHJveSA9IG5ldyBFdmVudEVtaXR0ZXI8RWxlbWVudFJlZj4oKTtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge31cblxuICBwcml2YXRlIHJlbmRlckNoYXJ0KCkge1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgICB0aGlzLnJlbmRlci5lbWl0KHRoaXMuZWwpO1xuICAgIHRoaXMuaW5zdGFsbFJlc2l6ZUV2ZW50KCk7XG4gIH1cblxuICBwcml2YXRlIGluc3RhbGxSZXNpemVFdmVudCgpIHtcbiAgICBpZiAodGhpcy5yZXNpemVUaW1lIDw9IDAgfHwgIXRoaXMucmVzaXplJCkgcmV0dXJuO1xuXG4gICAgdGhpcy5yZXNpemUkID0gZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpXG4gICAgICAucGlwZShkZWJvdW5jZVRpbWUoTWF0aC5taW4oMjAwLCB0aGlzLnJlc2l6ZVRpbWUpKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5yZXNpemUuZW1pdCh0aGlzLmVsKSk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMucmVuZGVyQ2hhcnQoKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kuZW1pdCh0aGlzLmVsKTtcbiAgICBpZiAodGhpcy5yZXNpemUkKSB0aGlzLnJlc2l6ZSQudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEZWxvblV0aWxNb2R1bGUgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbmltcG9ydCB7IEcyQ3VzdG9tQ29tcG9uZW50IH0gZnJvbSAnLi9jdXN0b20uY29tcG9uZW50JztcblxuY29uc3QgQ09NUE9ORU5UUyA9IFtHMkN1c3RvbUNvbXBvbmVudF07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIERlbG9uVXRpbE1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogWy4uLkNPTVBPTkVOVFNdLFxuICBleHBvcnRzOiBbLi4uQ09NUE9ORU5UU10sXG59KVxuZXhwb3J0IGNsYXNzIEcyQ3VzdG9tTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHsgbmdNb2R1bGU6IEcyQ3VzdG9tTW9kdWxlLCBwcm92aWRlcnM6IFtdIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJ0c2xpYl8xLl9fZGVjb3JhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7SUE4Q0UsMkJBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBeEIxQixZQUFPLEdBQWlCLElBQUksQ0FBQztRQVdyQyxlQUFVLEdBQUcsQ0FBQyxDQUFDO1FBR04sV0FBTSxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFHeEMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFHeEMsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7S0FJWjs7OztJQUU5Qix1Q0FBVzs7O0lBQW5CO1FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7S0FDM0I7Ozs7SUFFTyw4Q0FBa0I7OztJQUExQjtRQUFBLGlCQU1DO1FBTEMsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPO1lBQUUsT0FBTztRQUVsRCxJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDO2FBQ3ZDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7YUFDbEQsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsRUFBRSxDQUFDLEdBQUEsQ0FBQyxDQUFDO0tBQy9DOzs7O0lBRUQsb0NBQVE7OztJQUFSO1FBQUEsaUJBRUM7UUFEQyxVQUFVLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxXQUFXLEVBQUUsR0FBQSxDQUFDLENBQUM7S0FDdEM7Ozs7SUFFRCx1Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDM0IsSUFBSSxJQUFJLENBQUMsT0FBTztZQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDOUM7O2dCQXRERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkFoQkMsVUFBVTs7O3lCQXVCVCxXQUFXLFNBQUMsaUJBQWlCLGNBQzdCLEtBQUs7NkJBSUwsS0FBSzt5QkFJTCxNQUFNO3lCQUdOLE1BQU07MEJBR04sTUFBTTs7SUFaUEE7UUFEQyxXQUFXLEVBQUU7O3FEQUNDO0lBSWZBO1FBREMsV0FBVyxFQUFFOzt5REFDQztJQXFDakIsd0JBQUM7Q0F2REQ7Ozs7Ozs7SUNUTSxVQUFVLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQztBQUV0QztJQUFBO0tBU0M7Ozs7SUFIUSxzQkFBTzs7O0lBQWQ7UUFDRSxPQUFPLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUM7S0FDcEQ7O2dCQVJGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZUFBZSxDQUFDO29CQUN4QyxZQUFZLFdBQU0sVUFBVSxDQUFDO29CQUM3QixPQUFPLFdBQU0sVUFBVSxDQUFDO2lCQUN6Qjs7SUFLRCxxQkFBQztDQVREOzs7Ozs7Ozs7Ozs7OzsifQ==