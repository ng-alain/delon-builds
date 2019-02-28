/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, NgZone, } from '@angular/core';
import { InputNumber } from '@delon/util';
var G2GaugeComponent = /** @class */ (function () {
    // #endregion
    function G2GaugeComponent(el, ngZone) {
        this.el = el;
        this.ngZone = ngZone;
        // #region fields
        this.delay = 0;
        this.color = '#2f9cff';
        this.bgColor = '#f0f2f5';
        this.padding = [10, 10, 30, 10];
    }
    /**
     * @private
     * @return {?}
     */
    G2GaugeComponent.prototype.install = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var Shape = G2.Shape;
        // 自定义Shape 部分
        Shape.registerShape('point', 'pointer', {
            drawShape: /**
             * @param {?} cfg
             * @param {?} group
             * @return {?}
             */
            function (cfg, group) {
                /** @type {?} */
                var center = this.parsePoint({
                    // 获取极坐标系下画布中心点
                    x: 0,
                    y: 0,
                });
                // 绘制指针
                group.addShape('line', {
                    attrs: {
                        x1: center.x,
                        y1: center.y,
                        x2: cfg.x,
                        y2: cfg.y,
                        stroke: cfg.color,
                        lineWidth: 2.5,
                        lineCap: 'round',
                    },
                });
                return group.addShape('circle', {
                    attrs: {
                        x: center.x,
                        y: center.y,
                        r: 9.75,
                        stroke: cfg.color,
                        lineWidth: 2,
                        fill: '#fff',
                    },
                });
            },
        });
        var _a = this, el = _a.el, height = _a.height, padding = _a.padding, format = _a.format;
        /** @type {?} */
        var chart = (this.chart = new G2.Chart({
            container: el.nativeElement,
            animate: false,
            forceFit: true,
            height: height,
            padding: padding,
        }));
        chart
            .point({ generatePoints: true })
            .position('value*1')
            .shape('pointer')
            .active(false);
        chart.coord('polar', {
            startAngle: Math.PI * -1.2,
            endAngle: Math.PI * 0.2,
        });
        chart.scale('value', {
            min: 0,
            max: 100,
            nice: true,
            tickCount: 6,
        });
        chart.axis('1', false);
        // 刻度值
        chart.axis('value', {
            zIndex: 2,
            line: null,
            label: {
                offset: -12,
                formatter: format,
            },
            tickLine: null,
            grid: null,
        });
        chart.legend(false);
        chart.render();
        this.attachChart();
    };
    /**
     * @private
     * @return {?}
     */
    G2GaugeComponent.prototype.attachChart = /**
     * @private
     * @return {?}
     */
    function () {
        var _a = this, chart = _a.chart, bgColor = _a.bgColor, color = _a.color, title = _a.title, percent = _a.percent;
        if (!chart)
            return;
        chart.get('geoms')[0].color(color);
        /** @type {?} */
        var guide = chart.guide();
        guide.clear();
        /** @type {?} */
        var data = [{ name: title, value: percent }];
        // 绘制仪表盘背景
        guide.arc({
            zIndex: 0,
            top: false,
            start: [0, 0.95],
            end: [100, 0.95],
            style: {
                // 底灰色
                stroke: bgColor,
                lineWidth: 12,
            },
        });
        // 绘制指标
        guide.arc({
            zIndex: 1,
            start: [0, 0.95],
            end: [data[0].value, 0.95],
            style: {
                stroke: color,
                lineWidth: 12,
            },
        });
        // 绘制数字
        guide.html({
            position: ['50%', '95%'],
            html: "<div class=\"g2-gauge__desc\">\n        <div class=\"g2-gauge__title\">" + title + "</div>\n        <div class=\"g2-gauge__percent\">" + data[0].value + "%</div>\n      </div>",
        });
        chart.changeData(data);
    };
    /**
     * @return {?}
     */
    G2GaugeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () { return setTimeout((/**
         * @return {?}
         */
        function () { return _this.install(); }), _this.delay); }));
    };
    /**
     * @return {?}
     */
    G2GaugeComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        function () { return _this.attachChart(); }));
    };
    /**
     * @return {?}
     */
    G2GaugeComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.chart) {
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () { return _this.chart.destroy(); }));
        }
    };
    G2GaugeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'g2-gauge',
                    template: "",
                    host: {
                        '[class.g2-gauge]': 'true',
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    G2GaugeComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgZone }
    ]; };
    G2GaugeComponent.propDecorators = {
        delay: [{ type: Input }],
        title: [{ type: Input }],
        height: [{ type: Input }],
        color: [{ type: Input }],
        bgColor: [{ type: Input }],
        format: [{ type: Input }],
        percent: [{ type: Input }],
        padding: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Object)
    ], G2GaugeComponent.prototype, "delay", void 0);
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Object)
    ], G2GaugeComponent.prototype, "height", void 0);
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Number)
    ], G2GaugeComponent.prototype, "percent", void 0);
    return G2GaugeComponent;
}());
export { G2GaugeComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    G2GaugeComponent.prototype.chart;
    /** @type {?} */
    G2GaugeComponent.prototype.delay;
    /** @type {?} */
    G2GaugeComponent.prototype.title;
    /** @type {?} */
    G2GaugeComponent.prototype.height;
    /** @type {?} */
    G2GaugeComponent.prototype.color;
    /** @type {?} */
    G2GaugeComponent.prototype.bgColor;
    /** @type {?} */
    G2GaugeComponent.prototype.format;
    /** @type {?} */
    G2GaugeComponent.prototype.percent;
    /** @type {?} */
    G2GaugeComponent.prototype.padding;
    /**
     * @type {?}
     * @private
     */
    G2GaugeComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    G2GaugeComponent.prototype.ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F1Z2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NoYXJ0L2dhdWdlLyIsInNvdXJjZXMiOlsiZ2F1Z2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxNQUFNLEdBSVAsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUkxQztJQXNCRSxhQUFhO0lBRWIsMEJBQW9CLEVBQWMsRUFBVSxNQUFjO1FBQXRDLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFROztRQVhsQyxVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBR3pCLFVBQUssR0FBRyxTQUFTLENBQUM7UUFDbEIsWUFBTyxHQUFHLFNBQVMsQ0FBQztRQUdwQixZQUFPLEdBQTJCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFJQyxDQUFDOzs7OztJQUV0RCxrQ0FBTzs7OztJQUFmOztZQUNRLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSztRQUN0QixjQUFjO1FBQ2QsS0FBSyxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFO1lBQ3RDLFNBQVM7Ozs7O3NCQUFDLEdBQUcsRUFBRSxLQUFLOztvQkFDWixNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQzs7b0JBRTdCLENBQUMsRUFBRSxDQUFDO29CQUNKLENBQUMsRUFBRSxDQUFDO2lCQUNMLENBQUM7Z0JBQ0YsT0FBTztnQkFDUCxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRTtvQkFDckIsS0FBSyxFQUFFO3dCQUNMLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQzt3QkFDWixFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7d0JBQ1osRUFBRSxFQUFFLEdB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TUFBTSxDQUFDLGlCQUFpQjs7O1FBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxXQUFXLEVBQUUsRUFBbEIsQ0FBa0IsRUFBQyxDQUFDO0lBQzFELENBQUM7Ozs7SUFFRCxzQ0FBVzs7O0lBQVg7UUFBQSxpQkFJQztRQUhDLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCOzs7WUFBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBcEIsQ0FBb0IsRUFBQyxDQUFDO1NBQzNEO0lBQ0gsQ0FBQzs7Z0JBN0pGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsUUFBUSxFQUFFLEVBQUU7b0JBQ1osSUFBSSxFQUFFO3dCQUNKLGtCQUFrQixFQUFFLE1BQU07cUJBQzNCO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkFsQkMsVUFBVTtnQkFFVixNQUFNOzs7d0JBc0JMLEtBQUs7d0JBQ0wsS0FBSzt5QkFDTCxLQUFLO3dCQUNMLEtBQUs7MEJBQ0wsS0FBSzt5QkFDTCxLQUFLOzBCQUNMLEtBQUs7MEJBQ0wsS0FBSzs7SUFQa0I7UUFBZCxXQUFXLEVBQUU7O21EQUFXO0lBRVY7UUFBZCxXQUFXLEVBQUU7O29EQUFRO0lBSVA7UUFBZCxXQUFXLEVBQUU7O3FEQUFpQjtJQTJJMUMsdUJBQUM7Q0FBQSxBQTlKRCxJQThKQztTQXRKWSxnQkFBZ0I7Ozs7OztJQUMzQixpQ0FBbUI7O0lBSW5CLGlDQUFrQzs7SUFDbEMsaUNBQXVCOztJQUN2QixrQ0FBK0I7O0lBQy9CLGlDQUEyQjs7SUFDM0IsbUNBQTZCOztJQUM3QixrQ0FBbUU7O0lBQ25FLG1DQUF3Qzs7SUFDeEMsbUNBQTREOzs7OztJQUloRCw4QkFBc0I7Ozs7O0lBQUUsa0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbnB1dE51bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuZGVjbGFyZSB2YXIgRzI6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZzItZ2F1Z2UnLFxuICB0ZW1wbGF0ZTogYGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmcyLWdhdWdlXSc6ICd0cnVlJyxcbiAgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEcyR2F1Z2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgcHJpdmF0ZSBjaGFydDogYW55O1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgZGVsYXkgPSAwO1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBoZWlnaHQ7XG4gIEBJbnB1dCgpIGNvbG9yID0gJyMyZjljZmYnO1xuICBASW5wdXQoKSBiZ0NvbG9yID0gJyNmMGYyZjUnO1xuICBASW5wdXQoKSBmb3JtYXQ6ICh0ZXh0OiBzdHJpbmcsIGl0ZW06IHt9LCBpbmRleDogbnVtYmVyKSA9PiBzdHJpbmc7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHBlcmNlbnQ6IG51bWJlcjtcbiAgQElucHV0KCkgcGFkZGluZzogQXJyYXk8bnVtYmVyIHwgc3RyaW5nPiA9IFsxMCwgMTAsIDMwLCAxMF07XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgbmdab25lOiBOZ1pvbmUpIHt9XG5cbiAgcHJpdmF0ZSBpbnN0YWxsKCkge1xuICAgIGNvbnN0IFNoYXBlID0gRzIuU2hhcGU7XG4gICAgLy8g6Ieq5a6a5LmJU2hhcGUg6YOo5YiGXG4gICAgU2hhcGUucmVnaXN0ZXJTaGFwZSgncG9pbnQnLCAncG9pbnRlcicsIHtcbiAgICAgIGRyYXdTaGFwZShjZmcsIGdyb3VwKSB7XG4gICAgICAgIGNvbnN0IGNlbnRlciA9IHRoaXMucGFyc2VQb2ludCh7XG4gICAgICAgICAgLy8g6I635Y+W5p6B5Z2Q5qCH57O75LiL55S75biD5Lit5b+D54K5XG4gICAgICAgICAgeDogMCxcbiAgICAgICAgICB5OiAwLFxuICAgICAgICB9KTtcbiAgICAgICAgLy8g57uY5Yi25oyH6ZKIXG4gICAgICAgIGdyb3VwLmFkZFNoYXBlKCdsaW5lJywge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICB4MTogY2VudGVyLngsXG4gICAgICAgICAgICB5MTogY2VudGVyLnksXG4gICAgICAgICAgICB4MjogY2ZnLngsXG4gICAgICAgICAgICB5MjogY2ZnLnksXG4gICAgICAgICAgICBzdHJva2U6IGNmZy5jb2xvcixcbiAgICAgICAgICAgIGxpbmVXaWR0aDogMi41LFxuICAgICAgICAgICAgbGluZUNhcDogJ3JvdW5kJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGdyb3VwLmFkZFNoYXBlKCdjaXJjbGUnLCB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHg6IGNlbnRlci54LFxuICAgICAgICAgICAgeTogY2VudGVyLnksXG4gICAgICAgICAgICByOiA5Ljc1LFxuICAgICAgICAgICAgc3Ryb2tlOiBjZmcuY29sb3IsXG4gICAgICAgICAgICBsaW5lV2lkdGg6IDIsXG4gICAgICAgICAgICBmaWxsOiAnI2ZmZicsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgY29uc3QgeyBlbCwgaGVpZ2h0LCBwYWRkaW5nLCBmb3JtYXQgfSA9IHRoaXM7XG5cbiAgICBjb25zdCBjaGFydCA9ICh0aGlzLmNoYXJ0ID0gbmV3IEcyLkNoYXJ0KHtcbiAgICAgIGNvbnRhaW5lcjogZWwubmF0aXZlRWxlbWVudCxcbiAgICAgIGFuaW1hdGU6IGZhbHNlLFxuICAgICAgZm9yY2VGaXQ6IHRydWUsXG4gICAgICBoZWlnaHQsXG4gICAgICBwYWRkaW5nLFxuICAgIH0pKTtcbiAgICBjaGFydFxuICAgICAgLnBvaW50KHsgZ2VuZXJhdGVQb2ludHM6IHRydWUgfSlcbiAgICAgIC5wb3NpdGlvbigndmFsdWUqMScpXG4gICAgICAuc2hhcGUoJ3BvaW50ZXInKVxuICAgICAgLmFjdGl2ZShmYWxzZSk7XG4gICAgY2hhcnQuY29vcmQoJ3BvbGFyJywge1xuICAgICAgc3RhcnRBbmdsZTogTWF0aC5QSSAqIC0xLjIsXG4gICAgICBlbmRBbmdsZTogTWF0aC5QSSAqIDAuMixcbiAgICB9KTtcbiAgICBjaGFydC5zY2FsZSgndmFsdWUnLCB7XG4gICAgICBtaW46IDAsXG4gICAgICBtYXg6IDEwMCxcbiAgICAgIG5pY2U6IHRydWUsXG4gICAgICB0aWNrQ291bnQ6IDYsXG4gICAgfSk7XG4gICAgY2hhcnQuYXhpcygnMScsIGZhbHNlKTtcbiAgICAvLyDliLvluqblgLxcbiAgICBjaGFydC5heGlzKCd2YWx1ZScsIHtcbiAgICAgIHpJbmRleDogMixcbiAgICAgIGxpbmU6IG51bGwsXG4gICAgICBsYWJlbDoge1xuICAgICAgICBvZmZzZXQ6IC0xMixcbiAgICAgICAgZm9ybWF0dGVyOiBmb3JtYXQsXG4gICAgICB9LFxuICAgICAgdGlja0xpbmU6IG51bGwsXG4gICAgICBncmlkOiBudWxsLFxuICAgIH0pO1xuICAgIGNoYXJ0LmxlZ2VuZChmYWxzZSk7XG5cbiAgICBjaGFydC5yZW5kZXIoKTtcblxuICAgIHRoaXMuYXR0YWNoQ2hhcnQoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXR0YWNoQ2hhcnQoKSB7XG4gICAgY29uc3QgeyBjaGFydCwgYmdDb2xvciwgY29sb3IsIHRpdGxlLCBwZXJjZW50IH0gPSB0aGlzO1xuICAgIGlmICghY2hhcnQpIHJldHVybjtcbiAgICBjaGFydC5nZXQoJ2dlb21zJylbMF0uY29sb3IoY29sb3IpO1xuICAgIGNvbnN0IGd1aWRlID0gY2hhcnQuZ3VpZGUoKTtcbiAgICBndWlkZS5jbGVhcigpO1xuICAgIGNvbnN0IGRhdGEgPSBbeyBuYW1lOiB0aXRsZSwgdmFsdWU6IHBlcmNlbnQgfV07XG4gICAgLy8g57uY5Yi25Luq6KGo55uY6IOM5pmvXG4gICAgZ3VpZGUuYXJjKHtcbiAgICAgIHpJbmRleDogMCxcbiAgICAgIHRvcDogZmFsc2UsXG4gICAgICBzdGFydDogWzAsIDAuOTVdLFxuICAgICAgZW5kOiBbMTAwLCAwLjk1XSxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIC8vIOW6leeBsOiJslxuICAgICAgICBzdHJva2U6IGJnQ29sb3IsXG4gICAgICAgIGxpbmVXaWR0aDogMTIsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIC8vIOe7mOWItuaMh+agh1xuICAgIGd1aWRlLmFyYyh7XG4gICAgICB6SW5kZXg6IDEsXG4gICAgICBzdGFydDogWzAsIDAuOTVdLFxuICAgICAgZW5kOiBbZGF0YVswXS52YWx1ZSwgMC45NV0sXG4gICAgICBzdHlsZToge1xuICAgICAgICBzdHJva2U6IGNvbG9yLFxuICAgICAgICBsaW5lV2lkdGg6IDEyLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICAvLyDnu5jliLbmlbDlrZdcbiAgICBndWlkZS5odG1sKHtcbiAgICAgIHBvc2l0aW9uOiBbJzUwJScsICc5NSUnXSxcbiAgICAgIGh0bWw6IGA8ZGl2IGNsYXNzPVwiZzItZ2F1Z2VfX2Rlc2NcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImcyLWdhdWdlX190aXRsZVwiPiR7dGl0bGV9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJnMi1nYXVnZV9fcGVyY2VudFwiPiR7ZGF0YVswXS52YWx1ZX0lPC9kaXY+XG4gICAgICA8L2Rpdj5gLFxuICAgIH0pO1xuXG4gICAgY2hhcnQuY2hhbmdlRGF0YShkYXRhKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbnN0YWxsKCksIHRoaXMuZGVsYXkpKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuYXR0YWNoQ2hhcnQoKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jaGFydCkge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5jaGFydC5kZXN0cm95KCkpO1xuICAgIH1cbiAgfVxufVxuIl19