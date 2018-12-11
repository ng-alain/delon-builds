/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// tslint:disable:no-any
import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input, } from '@angular/core';
import { InputBoolean, InputNumber } from '@delon/util';
/**
 * @record
 */
export function G2MiniAreaData() { }
if (false) {
    /** @type {?} */
    G2MiniAreaData.prototype.x;
    /** @type {?} */
    G2MiniAreaData.prototype.y;
    /* Skipping unhandled member: [key: string]: any;*/
}
var G2MiniAreaComponent = /** @class */ (function () {
    // #endregion
    function G2MiniAreaComponent(el) {
        this.el = el;
        // #region fields
        this.delay = 0;
        this.color = 'rgba(24, 144, 255, 0.2)';
        this.borderColor = '#1890FF';
        this.borderWidth = 2;
        this.fit = true;
        this.line = false;
        this.animate = true;
        this.padding = [8, 8, 8, 8];
        this.data = [];
        this.yTooltipSuffix = '';
        this.tooltipType = 'default';
    }
    /**
     * @return {?}
     */
    G2MiniAreaComponent.prototype.install = /**
     * @return {?}
     */
    function () {
        var _a = this, el = _a.el, fit = _a.fit, height = _a.height, padding = _a.padding, xAxis = _a.xAxis, yAxis = _a.yAxis, yTooltipSuffix = _a.yTooltipSuffix, tooltipType = _a.tooltipType, line = _a.line;
        /** @type {?} */
        var chart = this.chart = new G2.Chart({
            container: el.nativeElement,
            forceFit: fit,
            height: height,
            padding: padding,
        });
        if (!xAxis && !yAxis) {
            chart.axis(false);
        }
        if (xAxis) {
            chart.axis('x', xAxis);
        }
        else {
            chart.axis('x', false);
        }
        if (yAxis) {
            chart.axis('y', yAxis);
        }
        else {
            chart.axis('y', false);
        }
        chart.legend(false);
        chart.tooltip({
            'type': tooltipType === 'mini' ? 'mini' : null,
            'showTitle': false,
            'hideMarkders': false,
            'g2-tooltip': { padding: 4 },
            'g2-tooltip-list-item': { margin: "0px 4px" },
        });
        chart
            .area()
            .position('x*y')
            .tooltip('x*y', function (x, y) { return ({ name: x, value: y + yTooltipSuffix }); })
            .shape('smooth')
            .opacity(1);
        if (line) {
            chart.line().position('x*y').shape('smooth').opacity(1).tooltip(false);
        }
        chart.render();
        this.attachChart();
    };
    /**
     * @return {?}
     */
    G2MiniAreaComponent.prototype.attachChart = /**
     * @return {?}
     */
    function () {
        var _a = this, chart = _a.chart, line = _a.line, fit = _a.fit, height = _a.height, animate = _a.animate, padding = _a.padding, data = _a.data, color = _a.color, borderColor = _a.borderColor, borderWidth = _a.borderWidth;
        if (!chart || !data || data.length <= 0)
            return;
        /** @type {?} */
        var geoms = chart.get('geoms');
        geoms.forEach(function (g) { return g.color(color); });
        if (line) {
            geoms[1].color(borderColor).size(borderWidth);
        }
        chart.set('forceFit', fit);
        chart.set('height', height);
        chart.set('animate', animate);
        chart.set('padding', padding);
        chart.changeData(data);
    };
    /**
     * @return {?}
     */
    G2MiniAreaComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout(function () { return _this.install(); }, this.delay);
    };
    /**
     * @return {?}
     */
    G2MiniAreaComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.attachChart();
    };
    /**
     * @return {?}
     */
    G2MiniAreaComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.chart)
            this.chart.destroy();
    };
    G2MiniAreaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'g2-mini-area',
                    template: "",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    G2MiniAreaComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    G2MiniAreaComponent.propDecorators = {
        delay: [{ type: Input }],
        color: [{ type: Input }],
        borderColor: [{ type: Input }],
        borderWidth: [{ type: Input }],
        height: [{ type: HostBinding, args: ['style.height.px',] }, { type: Input }],
        fit: [{ type: Input }],
        line: [{ type: Input }],
        animate: [{ type: Input }],
        xAxis: [{ type: Input }],
        yAxis: [{ type: Input }],
        padding: [{ type: Input }],
        data: [{ type: Input }],
        yTooltipSuffix: [{ type: Input }],
        tooltipType: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Object)
    ], G2MiniAreaComponent.prototype, "delay", void 0);
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Object)
    ], G2MiniAreaComponent.prototype, "borderWidth", void 0);
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Object)
    ], G2MiniAreaComponent.prototype, "height", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], G2MiniAreaComponent.prototype, "fit", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], G2MiniAreaComponent.prototype, "line", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], G2MiniAreaComponent.prototype, "animate", void 0);
    return G2MiniAreaComponent;
}());
export { G2MiniAreaComponent };
if (false) {
    /** @type {?} */
    G2MiniAreaComponent.prototype.chart;
    /** @type {?} */
    G2MiniAreaComponent.prototype.delay;
    /** @type {?} */
    G2MiniAreaComponent.prototype.color;
    /** @type {?} */
    G2MiniAreaComponent.prototype.borderColor;
    /** @type {?} */
    G2MiniAreaComponent.prototype.borderWidth;
    /** @type {?} */
    G2MiniAreaComponent.prototype.height;
    /** @type {?} */
    G2MiniAreaComponent.prototype.fit;
    /** @type {?} */
    G2MiniAreaComponent.prototype.line;
    /** @type {?} */
    G2MiniAreaComponent.prototype.animate;
    /** @type {?} */
    G2MiniAreaComponent.prototype.xAxis;
    /** @type {?} */
    G2MiniAreaComponent.prototype.yAxis;
    /** @type {?} */
    G2MiniAreaComponent.prototype.padding;
    /** @type {?} */
    G2MiniAreaComponent.prototype.data;
    /** @type {?} */
    G2MiniAreaComponent.prototype.yTooltipSuffix;
    /** @type {?} */
    G2MiniAreaComponent.prototype.tooltipType;
    /** @type {?} */
    G2MiniAreaComponent.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluaS1hcmVhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9jaGFydC9taW5pLWFyZWEvIiwic291cmNlcyI6WyJtaW5pLWFyZWEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsS0FBSyxHQUlOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7O0FBSXhELG9DQUlDOzs7SUFIQywyQkFBTzs7SUFDUCwyQkFBTzs7O0FBSVQ7SUF5QkUsYUFBYTtJQUViLDZCQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTs7UUFqQlYsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUN6QixVQUFLLEdBQUcseUJBQXlCLENBQUM7UUFDbEMsZ0JBQVcsR0FBRyxTQUFTLENBQUM7UUFDVCxnQkFBVyxHQUFHLENBQUMsQ0FBQztRQUVmLFFBQUcsR0FBRyxJQUFJLENBQUM7UUFDWCxTQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2IsWUFBTyxHQUFHLElBQUksQ0FBQztRQUcvQixZQUFPLEdBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNqQyxTQUFJLEdBQXFCLEVBQUUsQ0FBQztRQUM1QixtQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUNwQixnQkFBVyxHQUF1QixTQUFTLENBQUM7SUFJZixDQUFDOzs7O0lBRS9CLHFDQUFPOzs7SUFBZjtRQUNRLElBQUEsU0FBb0YsRUFBbEYsVUFBRSxFQUFFLFlBQUcsRUFBRSxrQkFBTSxFQUFFLG9CQUFPLEVBQUUsZ0JBQUssRUFBRSxnQkFBSyxFQUFFLGtDQUFjLEVBQUUsNEJBQVcsRUFBRSxjQUFhOztZQUNwRixLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FB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d0RBQWdCO0lBMkYxQywwQkFBQztDQUFBLEFBNUdELElBNEdDO1NBdkdZLG1CQUFtQjs7O0lBQzlCLG9DQUFtQjs7SUFJbkIsb0NBQWtDOztJQUNsQyxvQ0FBMkM7O0lBQzNDLDBDQUFpQzs7SUFDakMsMENBQXdDOztJQUN4QyxxQ0FBK0Q7O0lBQy9ELGtDQUFvQzs7SUFDcEMsbUNBQXNDOztJQUN0QyxzQ0FBd0M7O0lBQ3hDLG9DQUFvQjs7SUFDcEIsb0NBQW9COztJQUNwQixzQ0FBMEM7O0lBQzFDLG1DQUFxQzs7SUFDckMsNkNBQTZCOztJQUM3QiwwQ0FBcUQ7O0lBSXpDLGlDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOm5vLWFueVxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbmRlY2xhcmUgdmFyIEcyOiBhbnk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRzJNaW5pQXJlYURhdGEge1xuICB4OiBhbnk7XG4gIHk6IGFueTtcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnMi1taW5pLWFyZWEnLFxuICB0ZW1wbGF0ZTogYGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBHMk1pbmlBcmVhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgY2hhcnQ6IGFueTtcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGRlbGF5ID0gMDtcbiAgQElucHV0KCkgY29sb3IgPSAncmdiYSgyNCwgMTQ0LCAyNTUsIDAuMiknO1xuICBASW5wdXQoKSBib3JkZXJDb2xvciA9ICcjMTg5MEZGJztcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgYm9yZGVyV2lkdGggPSAyO1xuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmhlaWdodC5weCcpIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGhlaWdodDtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGZpdCA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBsaW5lID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBhbmltYXRlID0gdHJ1ZTtcbiAgQElucHV0KCkgeEF4aXM6IGFueTtcbiAgQElucHV0KCkgeUF4aXM6IGFueTtcbiAgQElucHV0KCkgcGFkZGluZzogbnVtYmVyW10gPSBbOCwgOCwgOCwgOF07XG4gIEBJbnB1dCgpIGRhdGE6IEcyTWluaUFyZWFEYXRhW10gPSBbXTtcbiAgQElucHV0KCkgeVRvb2x0aXBTdWZmaXggPSAnJztcbiAgQElucHV0KCkgdG9vbHRpcFR5cGU6ICdtaW5pJyB8ICdkZWZhdWx0JyA9ICdkZWZhdWx0JztcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikgeyB9XG5cbiAgcHJpdmF0ZSBpbnN0YWxsKCkge1xuICAgIGNvbnN0IHsgZWwsIGZpdCwgaGVpZ2h0LCBwYWRkaW5nLCB4QXhpcywgeUF4aXMsIHlUb29sdGlwU3VmZml4LCB0b29sdGlwVHlwZSwgbGluZSB9ID0gdGhpcztcbiAgICBjb25zdCBjaGFydCA9IHRoaXMuY2hhcnQgPSBuZXcgRzIuQ2hhcnQoe1xuICAgICAgY29udGFpbmVyOiBlbC5uYXRpdmVFbGVtZW50LFxuICAgICAgZm9yY2VGaXQ6IGZpdCxcbiAgICAgIGhlaWdodCxcbiAgICAgIHBhZGRpbmcsXG4gICAgfSk7XG5cbiAgICBpZiAoIXhBeGlzICYmICF5QXhpcykge1xuICAgICAgY2hhcnQuYXhpcyhmYWxzZSk7XG4gICAgfVxuXG4gICAgaWYgKHhBeGlzKSB7XG4gICAgICBjaGFydC5heGlzKCd4JywgeEF4aXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGFydC5heGlzKCd4JywgZmFsc2UpO1xuICAgIH1cblxuICAgIGlmICh5QXhpcykge1xuICAgICAgY2hhcnQuYXhpcygneScsIHlBeGlzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hhcnQuYXhpcygneScsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBjaGFydC5sZWdlbmQoZmFsc2UpO1xuICAgIGNoYXJ0LnRvb2x0aXAoe1xuICAgICAgJ3R5cGUnOiB0b29sdGlwVHlwZSA9PT0gJ21pbmknID8gJ21pbmknIDogbnVsbCxcbiAgICAgICdzaG93VGl0bGUnOiBmYWxzZSxcbiAgICAgICdoaWRlTWFya2RlcnMnOiBmYWxzZSxcbiAgICAgICdnMi10b29sdGlwJzogeyBwYWRkaW5nOiA0IH0sXG4gICAgICAnZzItdG9vbHRpcC1saXN0LWl0ZW0nOiB7IG1hcmdpbjogYDBweCA0cHhgIH0sXG4gICAgfSk7XG5cbiAgICBjaGFydFxuICAgICAgLmFyZWEoKVxuICAgICAgLnBvc2l0aW9uKCd4KnknKVxuICAgICAgLnRvb2x0aXAoJ3gqeScsICh4LCB5KSA9PiAoeyBuYW1lOiB4LCB2YWx1ZTogeSArIHlUb29sdGlwU3VmZml4IH0pKVxuICAgICAgLnNoYXBlKCdzbW9vdGgnKVxuICAgICAgLm9wYWNpdHkoMSk7XG5cbiAgICBpZiAobGluZSkge1xuICAgICAgY2hhcnQubGluZSgpLnBvc2l0aW9uKCd4KnknKS5zaGFwZSgnc21vb3RoJykub3BhY2l0eSgxKS50b29sdGlwKGZhbHNlKTtcbiAgICB9XG5cbiAgICBjaGFydC5yZW5kZXIoKTtcblxuICAgIHRoaXMuYXR0YWNoQ2hhcnQoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXR0YWNoQ2hhcnQoKSB7XG4gICAgY29uc3QgeyBjaGFydCwgbGluZSwgZml0LCBoZWlnaHQsIGFuaW1hdGUsIHBhZGRpbmcsIGRhdGEsIGNvbG9yLCBib3JkZXJDb2xvciwgYm9yZGVyV2lkdGggfSA9IHRoaXM7XG4gICAgaWYgKCFjaGFydCB8fCAhZGF0YSB8fCBkYXRhLmxlbmd0aCA8PSAwKSByZXR1cm4gO1xuXG4gICAgY29uc3QgZ2VvbXMgPSBjaGFydC5nZXQoJ2dlb21zJyk7XG4gICAgZ2VvbXMuZm9yRWFjaChnID0+IGcuY29sb3IoY29sb3IpKTtcbiAgICBpZiAobGluZSkge1xuICAgICAgZ2VvbXNbMV0uY29sb3IoYm9yZGVyQ29sb3IpLnNpemUoYm9yZGVyV2lkdGgpO1xuICAgIH1cblxuICAgIGNoYXJ0LnNldCgnZm9yY2VGaXQnLCBmaXQpO1xuICAgIGNoYXJ0LnNldCgnaGVpZ2h0JywgaGVpZ2h0KTtcbiAgICBjaGFydC5zZXQoJ2FuaW1hdGUnLCBhbmltYXRlKTtcbiAgICBjaGFydC5zZXQoJ3BhZGRpbmcnLCBwYWRkaW5nKTtcblxuICAgIGNoYXJ0LmNoYW5nZURhdGEoZGF0YSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5zdGFsbCgpLCB0aGlzLmRlbGF5KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuYXR0YWNoQ2hhcnQoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNoYXJ0KSB0aGlzLmNoYXJ0LmRlc3Ryb3koKTtcbiAgfVxufVxuIl19