/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// tslint:disable:no-any
import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input, NgZone, ViewChild, } from '@angular/core';
import { InputBoolean, InputNumber } from '@delon/util';
import { fromEvent } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';
/** @type {?} */
var TITLE_HEIGHT = 41;
/**
 * @record
 */
export function G2BarData() { }
if (false) {
    /** @type {?} */
    G2BarData.prototype.x;
    /** @type {?} */
    G2BarData.prototype.y;
    /* Skipping unhandled member: [key: string]: any;*/
}
var G2BarComponent = /** @class */ (function () {
    // #endregion
    function G2BarComponent(ngZone) {
        this.ngZone = ngZone;
        // #region fields
        this.delay = 0;
        this.color = 'rgba(24, 144, 255, 0.85)';
        this.height = 0;
        this.padding = 'auto';
        this.data = [];
        this.autoLabel = true;
    }
    /**
     * @return {?}
     */
    G2BarComponent.prototype.getHeight = /**
     * @return {?}
     */
    function () {
        return this.title ? this.height - TITLE_HEIGHT : this.height;
    };
    /**
     * @return {?}
     */
    G2BarComponent.prototype.install = /**
     * @return {?}
     */
    function () {
        var _a = this, node = _a.node, padding = _a.padding;
        /** @type {?} */
        var container = (/** @type {?} */ (node.nativeElement));
        /** @type {?} */
        var chart = (this.chart = new G2.Chart({
            container: container,
            forceFit: true,
            legend: null,
            height: this.getHeight(),
            padding: padding,
        }));
        this.updatelabel();
        chart.axis('y', {
            title: false,
            line: false,
            tickLine: false,
        });
        chart.source([], {
            x: {
                type: 'cat',
            },
            y: {
                min: 0,
            },
        });
        chart.tooltip({
            showTitle: false,
        });
        chart
            .interval()
            .position('x*y')
            .tooltip('x*y', function (x, y) { return ({ name: x, value: y }); });
        chart.render();
        this.attachChart();
    };
    /**
     * @return {?}
     */
    G2BarComponent.prototype.attachChart = /**
     * @return {?}
     */
    function () {
        var _a = this, chart = _a.chart, padding = _a.padding, data = _a.data, color = _a.color;
        if (!chart || !data || data.length <= 0)
            return;
        this.installResizeEvent();
        /** @type {?} */
        var height = this.getHeight();
        if (chart.get('height') !== height) {
            chart.changeHeight(height);
        }
        // color
        chart.get('geoms')[0].color(color);
        chart.set('padding', padding);
        chart.changeData(data);
    };
    /**
     * @return {?}
     */
    G2BarComponent.prototype.updatelabel = /**
     * @return {?}
     */
    function () {
        var _a = this, node = _a.node, data = _a.data, chart = _a.chart;
        /** @type {?} */
        var canvasWidth = node.nativeElement.clientWidth;
        /** @type {?} */
        var minWidth = data.length * 30;
        chart.axis('x', canvasWidth > minWidth).repaint();
    };
    /**
     * @return {?}
     */
    G2BarComponent.prototype.installResizeEvent = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.autoLabel || this.resize$)
            return;
        this.resize$ = fromEvent(window, 'resize')
            .pipe(filter(function () { return _this.chart; }), debounceTime(200))
            .subscribe(function () { return _this.ngZone.runOutsideAngular(function () { return _this.updatelabel(); }); });
    };
    /**
     * @return {?}
     */
    G2BarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.ngZone.runOutsideAngular(function () { return setTimeout(function () { return _this.install(); }, _this.delay); });
    };
    /**
     * @return {?}
     */
    G2BarComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.ngZone.runOutsideAngular(function () { return _this.attachChart(); });
    };
    /**
     * @return {?}
     */
    G2BarComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.resize$) {
            this.resize$.unsubscribe();
        }
        if (this.chart) {
            this.ngZone.runOutsideAngular(function () { return _this.chart.destroy(); });
        }
    };
    G2BarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'g2-bar',
                    template: "<ng-container *stringTemplateOutlet=\"title\">\n  <h4 style=\"margin-bottom:20px\">{{title}}</h4>\n</ng-container>\n<div #container></div>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    G2BarComponent.ctorParameters = function () { return [
        { type: NgZone }
    ]; };
    G2BarComponent.propDecorators = {
        node: [{ type: ViewChild, args: ['container',] }],
        delay: [{ type: Input }],
        title: [{ type: Input }],
        color: [{ type: Input }],
        height: [{ type: HostBinding, args: ['style.height.px',] }, { type: Input }],
        padding: [{ type: Input }],
        data: [{ type: Input }],
        autoLabel: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Object)
    ], G2BarComponent.prototype, "delay", void 0);
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Object)
    ], G2BarComponent.prototype, "height", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], G2BarComponent.prototype, "autoLabel", void 0);
    return G2BarComponent;
}());
export { G2BarComponent };
if (false) {
    /** @type {?} */
    G2BarComponent.prototype.resize$;
    /** @type {?} */
    G2BarComponent.prototype.chart;
    /** @type {?} */
    G2BarComponent.prototype.node;
    /** @type {?} */
    G2BarComponent.prototype.delay;
    /** @type {?} */
    G2BarComponent.prototype.title;
    /** @type {?} */
    G2BarComponent.prototype.color;
    /** @type {?} */
    G2BarComponent.prototype.height;
    /** @type {?} */
    G2BarComponent.prototype.padding;
    /** @type {?} */
    G2BarComponent.prototype.data;
    /** @type {?} */
    G2BarComponent.prototype.autoLabel;
    /** @type {?} */
    G2BarComponent.prototype.ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9jaGFydC9iYXIvIiwic291cmNlcyI6WyJiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsS0FBSyxFQUNMLE1BQU0sRUFLTixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDeEQsT0FBTyxFQUFFLFNBQVMsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7SUFHaEQsWUFBWSxHQUFHLEVBQUU7Ozs7QUFFdkIsK0JBSUM7OztJQUhDLHNCQUFPOztJQUNQLHNCQUFPOzs7QUFJVDtJQXFCRSxhQUFhO0lBRWIsd0JBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFROztRQVZWLFVBQUssR0FBRyxDQUFDLENBQUM7UUFFekIsVUFBSyxHQUFHLDBCQUEwQixDQUFDO1FBQ1ksV0FBTSxHQUFHLENBQUMsQ0FBQztRQUMxRCxZQUFPLEdBQW9DLE1BQU0sQ0FBQztRQUNsRCxTQUFJLEdBQWdCLEVBQUUsQ0FBQztRQUNQLGNBQVMsR0FBRyxJQUFJLENBQUM7SUFJTCxDQUFDOzs7O0lBRTlCLGtDQUFTOzs7SUFBakI7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQy9ELENBQUM7Ozs7SUFFTyxnQ0FBTzs7O0lBQWY7UUFDUSxJQUFBLFNBQXdCLEVBQXRCLGNBQUksRUFBRSxvQkFBZ0I7O1lBRXhCLFNBQVMsR0FBRyxtQkFBQSxJQUFJLENB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QWlCLGNBQUcsS0FBSzswQkFDckMsS0FBSzt1QkFDTCxLQUFLOzRCQUNMLEtBQUs7O0lBTmtCO1FBQWQsV0FBVyxFQUFFOztpREFBVztJQUdzQjtRQUFkLFdBQVcsRUFBRTs7a0RBQVk7SUFHMUM7UUFBZixZQUFZLEVBQUU7O3FEQUFrQjtJQWlHNUMscUJBQUM7Q0FBQSxBQXBIRCxJQW9IQztTQS9HWSxjQUFjOzs7SUFDekIsaUNBQThCOztJQUU5QiwrQkFBbUI7O0lBQ25CLDhCQUFpRDs7SUFJakQsK0JBQWtDOztJQUNsQywrQkFBMkM7O0lBQzNDLCtCQUE0Qzs7SUFDNUMsZ0NBQW1FOztJQUNuRSxpQ0FBMkQ7O0lBQzNELDhCQUFnQzs7SUFDaEMsbUNBQTBDOztJQUk5QixnQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTpuby1hbnlcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmRlY2xhcmUgdmFyIEcyOiBhbnk7XG5jb25zdCBUSVRMRV9IRUlHSFQgPSA0MTtcblxuZXhwb3J0IGludGVyZmFjZSBHMkJhckRhdGEge1xuICB4OiBhbnk7XG4gIHk6IGFueTtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnMi1iYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEcyQmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgcmVzaXplJDogU3Vic2NyaXB0aW9uO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHByaXZhdGUgY2hhcnQ6IGFueTtcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJykgcHJpdmF0ZSBub2RlOiBFbGVtZW50UmVmO1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgZGVsYXkgPSAwO1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIGNvbG9yID0gJ3JnYmEoMjQsIDE0NCwgMjU1LCAwLjg1KSc7XG4gIEBIb3N0QmluZGluZygnc3R5bGUuaGVpZ2h0LnB4JykgQElucHV0KCkgQElucHV0TnVtYmVyKCkgaGVpZ2h0ID0gMDtcbiAgQElucHV0KCkgcGFkZGluZzogQXJyYXk8bnVtYmVyIHwgc3RyaW5nPiB8IHN0cmluZyA9ICdhdXRvJztcbiAgQElucHV0KCkgZGF0YTogRzJCYXJEYXRhW10gPSBbXTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGF1dG9MYWJlbCA9IHRydWU7XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbmdab25lOiBOZ1pvbmUpIHt9XG5cbiAgcHJpdmF0ZSBnZXRIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMudGl0bGUgPyB0aGlzLmhlaWdodCAtIFRJVExFX0hFSUdIVCA6IHRoaXMuaGVpZ2h0O1xuICB9XG5cbiAgcHJpdmF0ZSBpbnN0YWxsKCkge1xuICAgIGNvbnN0IHsgbm9kZSwgcGFkZGluZyB9ID0gdGhpcztcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IG5vZGUubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBjaGFydCA9ICh0aGlzLmNoYXJ0ID0gbmV3IEcyLkNoYXJ0KHtcbiAgICAgIGNvbnRhaW5lcixcbiAgICAgIGZvcmNlRml0OiB0cnVlLFxuICAgICAgbGVnZW5kOiBudWxsLFxuICAgICAgaGVpZ2h0OiB0aGlzLmdldEhlaWdodCgpLFxuICAgICAgcGFkZGluZyxcbiAgICB9KSk7XG4gICAgdGhpcy51cGRhdGVsYWJlbCgpO1xuICAgIGNoYXJ0LmF4aXMoJ3knLCB7XG4gICAgICB0aXRsZTogZmFsc2UsXG4gICAgICBsaW5lOiBmYWxzZSxcbiAgICAgIHRpY2tMaW5lOiBmYWxzZSxcbiAgICB9KTtcbiAgICBjaGFydC5zb3VyY2UoW10sIHtcbiAgICAgIHg6IHtcbiAgICAgICAgdHlwZTogJ2NhdCcsXG4gICAgICB9LFxuICAgICAgeToge1xuICAgICAgICBtaW46IDAsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGNoYXJ0LnRvb2x0aXAoe1xuICAgICAgc2hvd1RpdGxlOiBmYWxzZSxcbiAgICB9KTtcbiAgICBjaGFydFxuICAgICAgLmludGVydmFsKClcbiAgICAgIC5wb3NpdGlvbigneCp5JylcbiAgICAgIC50b29sdGlwKCd4KnknLCAoeCwgeSkgPT4gKHsgbmFtZTogeCwgdmFsdWU6IHkgfSkpO1xuXG4gICAgY2hhcnQucmVuZGVyKCk7XG5cbiAgICB0aGlzLmF0dGFjaENoYXJ0KCk7XG4gIH1cblxuICBwcml2YXRlIGF0dGFjaENoYXJ0KCkge1xuICAgIGNvbnN0IHsgY2hhcnQsIHBhZGRpbmcsIGRhdGEsIGNvbG9yIH0gPSB0aGlzO1xuICAgIGlmICghY2hhcnQgfHwgIWRhdGEgfHwgZGF0YS5sZW5ndGggPD0gMCkgcmV0dXJuO1xuICAgIHRoaXMuaW5zdGFsbFJlc2l6ZUV2ZW50KCk7XG4gICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQoKTtcbiAgICBpZiAoY2hhcnQuZ2V0KCdoZWlnaHQnKSAhPT0gaGVpZ2h0KSB7XG4gICAgICBjaGFydC5jaGFuZ2VIZWlnaHQoaGVpZ2h0KTtcbiAgICB9XG4gICAgLy8gY29sb3JcbiAgICBjaGFydC5nZXQoJ2dlb21zJylbMF0uY29sb3IoY29sb3IpO1xuICAgIGNoYXJ0LnNldCgncGFkZGluZycsIHBhZGRpbmcpO1xuXG4gICAgY2hhcnQuY2hhbmdlRGF0YShkYXRhKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlbGFiZWwoKSB7XG4gICAgY29uc3QgeyBub2RlLCBkYXRhLCBjaGFydCB9ID0gdGhpcztcbiAgICBjb25zdCBjYW52YXNXaWR0aCA9IG5vZGUubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aDtcbiAgICBjb25zdCBtaW5XaWR0aCA9IGRhdGEubGVuZ3RoICogMzA7XG4gICAgY2hhcnQuYXhpcygneCcsIGNhbnZhc1dpZHRoID4gbWluV2lkdGgpLnJlcGFpbnQoKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5zdGFsbFJlc2l6ZUV2ZW50KCkge1xuICAgIGlmICghdGhpcy5hdXRvTGFiZWwgfHwgdGhpcy5yZXNpemUkKSByZXR1cm47XG5cbiAgICB0aGlzLnJlc2l6ZSQgPSBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJylcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoKCkgPT4gdGhpcy5jaGFydCksXG4gICAgICAgIGRlYm91bmNlVGltZSgyMDApLFxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLnVwZGF0ZWxhYmVsKCkpKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbnN0YWxsKCksIHRoaXMuZGVsYXkpKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuYXR0YWNoQ2hhcnQoKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5yZXNpemUkKSB7XG4gICAgICB0aGlzLnJlc2l6ZSQudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY2hhcnQpIHtcbiAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuY2hhcnQuZGVzdHJveSgpKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==