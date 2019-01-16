/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// tslint:disable:no-any
import { ChangeDetectionStrategy, Component, ElementRef, Input, NgZone, } from '@angular/core';
import { InputNumber } from '@delon/util';
export class G2GaugeComponent {
    // #endregion
    /**
     * @param {?} el
     * @param {?} ngZone
     */
    constructor(el, ngZone) {
        this.el = el;
        this.ngZone = ngZone;
        // #region fields
        this.delay = 0;
        this.color = '#2f9cff';
        this.bgColor = '#f0f2f5';
        this.padding = [10, 10, 30, 10];
    }
    /**
     * @return {?}
     */
    install() {
        /** @type {?} */
        const Shape = G2.Shape;
        // 自定义Shape 部分
        Shape.registerShape('point', 'pointer', {
            /**
             * @param {?} cfg
             * @param {?} group
             * @return {?}
             */
            drawShape(cfg, group) {
                /** @type {?} */
                const center = this.parsePoint({
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
        const { el, height, padding, format } = this;
        /** @type {?} */
        const chart = this.chart = new G2.Chart({
            container: el.nativeElement,
            animate: false,
            forceFit: true,
            height,
            padding,
        });
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
    }
    /**
     * @return {?}
     */
    attachChart() {
        const { chart, bgColor, color, title, percent } = this;
        if (!chart)
            return;
        chart.get('geoms')[0].color(color);
        /** @type {?} */
        const guide = chart.guide();
        guide.clear();
        /** @type {?} */
        const data = [{ name: title, value: percent }];
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
            html: `<div class="g2-gauge__desc">
        <div class="g2-gauge__title">${title}</div>
        <div class="g2-gauge__percent">${data[0].value}%</div>
      </div>`,
        });
        chart.changeData(data);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.ngZone.runOutsideAngular(() => setTimeout(() => this.install(), this.delay));
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.ngZone.runOutsideAngular(() => this.attachChart());
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.chart) {
            this.chart.destroy();
        }
    }
}
G2GaugeComponent.decorators = [
    { type: Component, args: [{
                selector: 'g2-gauge',
                template: ``,
                host: {
                    '[class.g2-gauge]': 'true',
                },
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
G2GaugeComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone }
];
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
if (false) {
    /** @type {?} */
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
    /** @type {?} */
    G2GaugeComponent.prototype.el;
    /** @type {?} */
    G2GaugeComponent.prototype.ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F1Z2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NoYXJ0L2dhdWdlLyIsInNvdXJjZXMiOlsiZ2F1Z2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxHQUlQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFZMUMsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7O0lBZ0IzQixZQUFvQixFQUFjLEVBQVUsTUFBYztRQUF0QyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTs7UUFYbEMsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUd6QixVQUFLLEdBQUcsU0FBUyxDQUFDO1FBQ2xCLFlBQU8sR0FBRyxTQUFTLENBQUM7UUFHcEIsWUFBTyxHQUEyQixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBSUUsQ0FBQzs7OztJQUV2RCxPQUFPOztjQUNQLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSztRQUN0QixjQUFjO1FBQ2QsS0FBSyxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFOzs7Ozs7WUFDdEMsU0FBUyxDQUFDLEdBQUcsRUFBRSxLQUFLOztzQkFDWixNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQzs7b0JBRTdCLENBQUMsRUFBRSxDQUFDO29CQUNKLENBQUMsRUFBRSxDQUFDO2lCQUNMLENBQUM7Z0JBQ0YsT0FBTztnQkFDUCxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRTtvQkFDckIsS0FBSyxFQUFFO3dCQUNMLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQzt3QkFDWixFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7d0JBQ1osRUFBRSxFQUFF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V0FBVztRQUNULElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDdEI7SUFDSCxDQUFDOzs7WUE3SkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQixRQUFRLEVBQUUsRUFBRTtnQkFDWixJQUFJLEVBQUU7b0JBQ0osa0JBQWtCLEVBQUUsTUFBTTtpQkFDM0I7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUFsQkMsVUFBVTtZQUVWLE1BQU07OztvQkFzQkwsS0FBSztvQkFDTCxLQUFLO3FCQUNMLEtBQUs7b0JBQ0wsS0FBSztzQkFDTCxLQUFLO3FCQUNMLEtBQUs7c0JBQ0wsS0FBSztzQkFDTCxLQUFLOztBQVBrQjtJQUFkLFdBQVcsRUFBRTs7K0NBQVc7QUFFVjtJQUFkLFdBQVcsRUFBRTs7Z0RBQVE7QUFJUDtJQUFkLFdBQVcsRUFBRTs7aURBQWlCOzs7SUFWeEMsaUNBQW1COztJQUluQixpQ0FBa0M7O0lBQ2xDLGlDQUF1Qjs7SUFDdkIsa0NBQStCOztJQUMvQixpQ0FBMkI7O0lBQzNCLG1DQUE2Qjs7SUFDN0Isa0NBQW1FOztJQUNuRSxtQ0FBd0M7O0lBQ3hDLG1DQUE0RDs7SUFJaEQsOEJBQXNCOztJQUFFLGtDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOm5vLWFueVxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbnB1dE51bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuZGVjbGFyZSB2YXIgRzI6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZzItZ2F1Z2UnLFxuICB0ZW1wbGF0ZTogYGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmcyLWdhdWdlXSc6ICd0cnVlJyxcbiAgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEcyR2F1Z2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgcHJpdmF0ZSBjaGFydDogYW55O1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgZGVsYXkgPSAwO1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBoZWlnaHQ7XG4gIEBJbnB1dCgpIGNvbG9yID0gJyMyZjljZmYnO1xuICBASW5wdXQoKSBiZ0NvbG9yID0gJyNmMGYyZjUnO1xuICBASW5wdXQoKSBmb3JtYXQ6ICh0ZXh0OiBzdHJpbmcsIGl0ZW06IHt9LCBpbmRleDogbnVtYmVyKSA9PiBzdHJpbmc7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHBlcmNlbnQ6IG51bWJlcjtcbiAgQElucHV0KCkgcGFkZGluZzogQXJyYXk8bnVtYmVyIHwgc3RyaW5nPiA9IFsxMCwgMTAsIDMwLCAxMF07XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgbmdab25lOiBOZ1pvbmUpIHsgfVxuXG4gIHByaXZhdGUgaW5zdGFsbCgpIHtcbiAgICBjb25zdCBTaGFwZSA9IEcyLlNoYXBlO1xuICAgIC8vIOiHquWumuS5iVNoYXBlIOmDqOWIhlxuICAgIFNoYXBlLnJlZ2lzdGVyU2hhcGUoJ3BvaW50JywgJ3BvaW50ZXInLCB7XG4gICAgICBkcmF3U2hhcGUoY2ZnLCBncm91cCkge1xuICAgICAgICBjb25zdCBjZW50ZXIgPSB0aGlzLnBhcnNlUG9pbnQoe1xuICAgICAgICAgIC8vIOiOt+WPluaegeWdkOagh+ezu+S4i+eUu+W4g+S4reW/g+eCuVxuICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgeTogMCxcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIOe7mOWItuaMh+mSiFxuICAgICAgICBncm91cC5hZGRTaGFwZSgnbGluZScsIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgeDE6IGNlbnRlci54LFxuICAgICAgICAgICAgeTE6IGNlbnRlci55LFxuICAgICAgICAgICAgeDI6IGNmZy54LFxuICAgICAgICAgICAgeTI6IGNmZy55LFxuICAgICAgICAgICAgc3Ryb2tlOiBjZmcuY29sb3IsXG4gICAgICAgICAgICBsaW5lV2lkdGg6IDIuNSxcbiAgICAgICAgICAgIGxpbmVDYXA6ICdyb3VuZCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBncm91cC5hZGRTaGFwZSgnY2lyY2xlJywge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICB4OiBjZW50ZXIueCxcbiAgICAgICAgICAgIHk6IGNlbnRlci55LFxuICAgICAgICAgICAgcjogOS43NSxcbiAgICAgICAgICAgIHN0cm9rZTogY2ZnLmNvbG9yLFxuICAgICAgICAgICAgbGluZVdpZHRoOiAyLFxuICAgICAgICAgICAgZmlsbDogJyNmZmYnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHsgZWwsIGhlaWdodCwgcGFkZGluZywgZm9ybWF0IH0gPSB0aGlzO1xuXG4gICAgY29uc3QgY2hhcnQgPSB0aGlzLmNoYXJ0ID0gbmV3IEcyLkNoYXJ0KHtcbiAgICAgIGNvbnRhaW5lcjogZWwubmF0aXZlRWxlbWVudCxcbiAgICAgIGFuaW1hdGU6IGZhbHNlLFxuICAgICAgZm9yY2VGaXQ6IHRydWUsXG4gICAgICBoZWlnaHQsXG4gICAgICBwYWRkaW5nLFxuICAgIH0pO1xuICAgIGNoYXJ0XG4gICAgICAucG9pbnQoeyBnZW5lcmF0ZVBvaW50czogdHJ1ZSB9KVxuICAgICAgLnBvc2l0aW9uKCd2YWx1ZSoxJylcbiAgICAgIC5zaGFwZSgncG9pbnRlcicpXG4gICAgICAuYWN0aXZlKGZhbHNlKTtcbiAgICBjaGFydC5jb29yZCgncG9sYXInLCB7XG4gICAgICBzdGFydEFuZ2xlOiBNYXRoLlBJICogLTEuMixcbiAgICAgIGVuZEFuZ2xlOiBNYXRoLlBJICogMC4yLFxuICAgIH0pO1xuICAgIGNoYXJ0LnNjYWxlKCd2YWx1ZScsIHtcbiAgICAgIG1pbjogMCxcbiAgICAgIG1heDogMTAwLFxuICAgICAgbmljZTogdHJ1ZSxcbiAgICAgIHRpY2tDb3VudDogNixcbiAgICB9KTtcbiAgICBjaGFydC5heGlzKCcxJywgZmFsc2UpO1xuICAgIC8vIOWIu+W6puWAvFxuICAgIGNoYXJ0LmF4aXMoJ3ZhbHVlJywge1xuICAgICAgekluZGV4OiAyLFxuICAgICAgbGluZTogbnVsbCxcbiAgICAgIGxhYmVsOiB7XG4gICAgICAgIG9mZnNldDogLTEyLFxuICAgICAgICBmb3JtYXR0ZXI6IGZvcm1hdCxcbiAgICAgIH0sXG4gICAgICB0aWNrTGluZTogbnVsbCxcbiAgICAgIGdyaWQ6IG51bGwsXG4gICAgfSk7XG4gICAgY2hhcnQubGVnZW5kKGZhbHNlKTtcblxuICAgIGNoYXJ0LnJlbmRlcigpO1xuXG4gICAgdGhpcy5hdHRhY2hDaGFydCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBhdHRhY2hDaGFydCgpIHtcbiAgICBjb25zdCB7IGNoYXJ0LCBiZ0NvbG9yLCBjb2xvciwgdGl0bGUsIHBlcmNlbnQgfSA9IHRoaXM7XG4gICAgaWYgKCFjaGFydCkgcmV0dXJuO1xuICAgIGNoYXJ0LmdldCgnZ2VvbXMnKVswXS5jb2xvcihjb2xvcik7XG4gICAgY29uc3QgZ3VpZGUgPSBjaGFydC5ndWlkZSgpO1xuICAgIGd1aWRlLmNsZWFyKCk7XG4gICAgY29uc3QgZGF0YSA9IFt7IG5hbWU6IHRpdGxlLCB2YWx1ZTogcGVyY2VudCB9XTtcbiAgICAvLyDnu5jliLbku6rooajnm5jog4zmma9cbiAgICBndWlkZS5hcmMoe1xuICAgICAgekluZGV4OiAwLFxuICAgICAgdG9wOiBmYWxzZSxcbiAgICAgIHN0YXJ0OiBbMCwgMC45NV0sXG4gICAgICBlbmQ6IFsxMDAsIDAuOTVdLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgLy8g5bqV54Gw6ImyXG4gICAgICAgIHN0cm9rZTogYmdDb2xvcixcbiAgICAgICAgbGluZVdpZHRoOiAxMixcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgLy8g57uY5Yi25oyH5qCHXG4gICAgZ3VpZGUuYXJjKHtcbiAgICAgIHpJbmRleDogMSxcbiAgICAgIHN0YXJ0OiBbMCwgMC45NV0sXG4gICAgICBlbmQ6IFtkYXRhWzBdLnZhbHVlLCAwLjk1XSxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIHN0cm9rZTogY29sb3IsXG4gICAgICAgIGxpbmVXaWR0aDogMTIsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIC8vIOe7mOWItuaVsOWtl1xuICAgIGd1aWRlLmh0bWwoe1xuICAgICAgcG9zaXRpb246IFsnNTAlJywgJzk1JSddLFxuICAgICAgaHRtbDogYDxkaXYgY2xhc3M9XCJnMi1nYXVnZV9fZGVzY1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZzItZ2F1Z2VfX3RpdGxlXCI+JHt0aXRsZX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImcyLWdhdWdlX19wZXJjZW50XCI+JHtkYXRhWzBdLnZhbHVlfSU8L2Rpdj5cbiAgICAgIDwvZGl2PmAsXG4gICAgfSk7XG5cbiAgICBjaGFydC5jaGFuZ2VEYXRhKGRhdGEpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmluc3RhbGwoKSwgdGhpcy5kZWxheSkpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5hdHRhY2hDaGFydCgpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNoYXJ0KSB7XG4gICAgICB0aGlzLmNoYXJ0LmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==