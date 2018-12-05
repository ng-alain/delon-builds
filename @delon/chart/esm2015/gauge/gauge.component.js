/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// tslint:disable:no-any
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild, } from '@angular/core';
import { InputNumber } from '@delon/util';
export class G2GaugeComponent {
    constructor() {
        // #region fields
        this.color = '#2F9CFF';
        this.bgColor = '#F0F2F5';
        this.initFlag = false;
    }
    /**
     * @return {?}
     */
    createData() {
        return [{ name: this.title, value: this.percent }];
    }
    /**
     * @return {?}
     */
    draw() {
        if (!this.chart)
            return;
        this.chart.guide().clear();
        /** @type {?} */
        const data = this.createData();
        // 绘制仪表盘背景
        this.chart.guide().arc({
            zIndex: 0,
            top: false,
            start: [0, 0.95],
            end: [100, 0.95],
            style: {
                // 底灰色
                stroke: this.bgColor,
                lineWidth: 12,
            },
        });
        // 绘制指标
        this.chart.guide().arc({
            zIndex: 1,
            start: [0, 0.95],
            end: [data[0].value, 0.95],
            style: {
                stroke: this.color,
                lineWidth: 12,
            },
        });
        // 绘制数字
        this.chart.guide().html({
            position: ['50%', '95%'],
            html: `
      <div style="width: 300px;text-align: center;font-size: 12px!important;">
        <p style="font-size: 14px; color: rgba(0,0,0,0.43);margin: 0;">${this.title}</p>
        <p style="font-size: 24px;color: rgba(0,0,0,0.85);margin: 0;">
          ${data[0].value}%
        </p>
      </div>`,
        });
        this.chart.changeData(data);
    }
    /**
     * @return {?}
     */
    install() {
        this.uninstall();
        this.node.nativeElement.innerHTML = '';
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
                let point = cfg.points[0];
                point = this.parsePoint(point);
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
                        x2: point.x,
                        y2: point.y,
                        stroke: cfg.color,
                        lineWidth: 2,
                        lineCap: 'round',
                    },
                });
                // const { origin } = cfg;
                // group.addShape('text', {
                //   attrs: {
                //     x: center.x,
                //     y: center.y + 80,
                //     text: `${origin._origin.value}%`,
                //     textAlign: 'center',
                //     fontSize: 24,
                //     fill: 'rgba(0, 0, 0, 0.85)',
                //   },
                // });
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
        /** @type {?} */
        const data = this.createData();
        /** @type {?} */
        const chart = new G2.Chart({
            container: this.node.nativeElement,
            forceFit: true,
            height: this.height,
            padding: [10, 10, 30, 10],
        });
        chart.source(data);
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
                formatter: this.format,
            },
            tickLine: null,
            grid: null,
        });
        chart.legend(false);
        chart
            .point({
            generatePoints: true,
        })
            .position('value*1')
            .shape('pointer')
            .color(this.color)
            .active(false);
        this.chart = chart;
        this.draw();
    }
    /**
     * @return {?}
     */
    uninstall() {
        if (this.chart)
            this.chart.destroy();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initFlag = true;
        this.install();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.initFlag)
            this.draw();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.uninstall();
    }
}
G2GaugeComponent.decorators = [
    { type: Component, args: [{
                selector: 'g2-gauge',
                template: `<div #container></div>`,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
G2GaugeComponent.propDecorators = {
    title: [{ type: Input }],
    height: [{ type: Input }],
    color: [{ type: Input }],
    bgColor: [{ type: Input }],
    format: [{ type: Input }],
    percent: [{ type: Input }],
    node: [{ type: ViewChild, args: ['container',] }]
};
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
    G2GaugeComponent.prototype.node;
    /** @type {?} */
    G2GaugeComponent.prototype.chart;
    /** @type {?} */
    G2GaugeComponent.prototype.initFlag;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F1Z2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NoYXJ0L2dhdWdlLyIsInNvdXJjZXMiOlsiZ2F1Z2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBSUwsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFTMUMsTUFBTSxPQUFPLGdCQUFnQjtJQUw3QjtRQU1FLGlCQUFpQjtRQUlSLFVBQUssR0FBRyxTQUFTLENBQUM7UUFDbEIsWUFBTyxHQUFHLFNBQVMsQ0FBQztRQVVyQixhQUFRLEdBQUcsS0FBSyxDQUFDO0lBK0ozQixDQUFDOzs7O0lBN0pTLFVBQVU7UUFDaEIsT0FBTyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ3JELENBQUM7Ozs7SUFFTyxJQUFJO1FBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQUUsT0FBTztRQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDOztjQUNyQixJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRTtRQUM5QixVQUFVO1FBQ1YsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFDckIsTUFBTSxFQUFFLENBQUM7WUFDVCxHQUFHLEVBQUUsS0FBSztZQUNWLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUM7WUFDaEIsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQztZQUNoQixLQUFLLEVBQUU7O2dCQUVMLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTztnQkFDcEIsU0FB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LENBQUMsQ0FBQztRQUVqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZCxDQUFDOzs7O0lBRU8sU0FBUztRQUNmLElBQUksSUFBSSxDQUFDLEtBQUs7WUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsUUFBUTtZQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNqQyxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDOzs7WUFuTEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQixRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7O29CQUlFLEtBQUs7cUJBQ0wsS0FBSztvQkFDTCxLQUFLO3NCQUNMLEtBQUs7cUJBRUwsS0FBSztzQkFDTCxLQUFLO21CQUlMLFNBQVMsU0FBQyxXQUFXOztBQVRFO0lBQWQsV0FBVyxFQUFFOztnREFBUTtBQUtQO0lBQWQsV0FBVyxFQUFFOztpREFBaUI7OztJQU54QyxpQ0FBdUI7O0lBQ3ZCLGtDQUErQjs7SUFDL0IsaUNBQTJCOztJQUMzQixtQ0FBNkI7O0lBRTdCLGtDQUEwQjs7SUFDMUIsbUNBQXdDOztJQUl4QyxnQ0FBaUQ7O0lBRWpELGlDQUFtQjs7SUFDbkIsb0NBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6bm8tYW55XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgVmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5kZWNsYXJlIHZhciBHMjogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnMi1nYXVnZScsXG4gIHRlbXBsYXRlOiBgPGRpdiAjY29udGFpbmVyPjwvZGl2PmAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBHMkdhdWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgaGVpZ2h0O1xuICBASW5wdXQoKSBjb2xvciA9ICcjMkY5Q0ZGJztcbiAgQElucHV0KCkgYmdDb2xvciA9ICcjRjBGMkY1JztcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmJhbi10eXBlc1xuICBASW5wdXQoKSBmb3JtYXQ6IEZ1bmN0aW9uO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBwZXJjZW50OiBudW1iZXI7XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicpIHByaXZhdGUgbm9kZTogRWxlbWVudFJlZjtcblxuICBwcml2YXRlIGNoYXJ0OiBhbnk7XG4gIHByaXZhdGUgaW5pdEZsYWcgPSBmYWxzZTtcblxuICBwcml2YXRlIGNyZWF0ZURhdGEoKSB7XG4gICAgcmV0dXJuIFt7IG5hbWU6IHRoaXMudGl0bGUsIHZhbHVlOiB0aGlzLnBlcmNlbnQgfV07XG4gIH1cblxuICBwcml2YXRlIGRyYXcoKSB7XG4gICAgaWYgKCF0aGlzLmNoYXJ0KSByZXR1cm47XG4gICAgdGhpcy5jaGFydC5ndWlkZSgpLmNsZWFyKCk7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuY3JlYXRlRGF0YSgpO1xuICAgIC8vIOe7mOWItuS7quihqOebmOiDjOaZr1xuICAgIHRoaXMuY2hhcnQuZ3VpZGUoKS5hcmMoe1xuICAgICAgekluZGV4OiAwLFxuICAgICAgdG9wOiBmYWxzZSxcbiAgICAgIHN0YXJ0OiBbMCwgMC45NV0sXG4gICAgICBlbmQ6IFsxMDAsIDAuOTVdLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgLy8g5bqV54Gw6ImyXG4gICAgICAgIHN0cm9rZTogdGhpcy5iZ0NvbG9yLFxuICAgICAgICBsaW5lV2lkdGg6IDEyLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICAvLyDnu5jliLbmjIfmoIdcbiAgICB0aGlzLmNoYXJ0Lmd1aWRlKCkuYXJjKHtcbiAgICAgIHpJbmRleDogMSxcbiAgICAgIHN0YXJ0OiBbMCwgMC45NV0sXG4gICAgICBlbmQ6IFtkYXRhWzBdLnZhbHVlLCAwLjk1XSxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIHN0cm9rZTogdGhpcy5jb2xvcixcbiAgICAgICAgbGluZVdpZHRoOiAxMixcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgLy8g57uY5Yi25pWw5a2XXG4gICAgdGhpcy5jaGFydC5ndWlkZSgpLmh0bWwoe1xuICAgICAgcG9zaXRpb246IFsnNTAlJywgJzk1JSddLFxuICAgICAgaHRtbDogYFxuICAgICAgPGRpdiBzdHlsZT1cIndpZHRoOiAzMDBweDt0ZXh0LWFsaWduOiBjZW50ZXI7Zm9udC1zaXplOiAxMnB4IWltcG9ydGFudDtcIj5cbiAgICAgICAgPHAgc3R5bGU9XCJmb250LXNpemU6IDE0cHg7IGNvbG9yOiByZ2JhKDAsMCwwLDAuNDMpO21hcmdpbjogMDtcIj4ke3RoaXMudGl0bGV9PC9wPlxuICAgICAgICA8cCBzdHlsZT1cImZvbnQtc2l6ZTogMjRweDtjb2xvcjogcmdiYSgwLDAsMCwwLjg1KTttYXJnaW46IDA7XCI+XG4gICAgICAgICAgJHtkYXRhWzBdLnZhbHVlfSVcbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+YCxcbiAgICB9KTtcbiAgICB0aGlzLmNoYXJ0LmNoYW5nZURhdGEoZGF0YSk7XG4gIH1cblxuICBwcml2YXRlIGluc3RhbGwoKSB7XG4gICAgdGhpcy51bmluc3RhbGwoKTtcbiAgICB0aGlzLm5vZGUubmF0aXZlRWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgICBjb25zdCBTaGFwZSA9IEcyLlNoYXBlO1xuICAgIC8vIOiHquWumuS5iVNoYXBlIOmDqOWIhlxuICAgIFNoYXBlLnJlZ2lzdGVyU2hhcGUoJ3BvaW50JywgJ3BvaW50ZXInLCB7XG4gICAgICBkcmF3U2hhcGUoY2ZnLCBncm91cCkge1xuICAgICAgICBsZXQgcG9pbnQgPSBjZmcucG9pbnRzWzBdOyAvLyDojrflj5bnrKzkuIDkuKrmoIforrDngrlcbiAgICAgICAgcG9pbnQgPSB0aGlzLnBhcnNlUG9pbnQocG9pbnQpO1xuICAgICAgICBjb25zdCBjZW50ZXIgPSB0aGlzLnBhcnNlUG9pbnQoe1xuICAgICAgICAgIC8vIOiOt+WPluaegeWdkOagh+ezu+S4i+eUu+W4g+S4reW/g+eCuVxuICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgeTogMCxcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIOe7mOWItuaMh+mSiFxuICAgICAgICBncm91cC5hZGRTaGFwZSgnbGluZScsIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgeDE6IGNlbnRlci54LFxuICAgICAgICAgICAgeTE6IGNlbnRlci55LFxuICAgICAgICAgICAgeDI6IHBvaW50LngsXG4gICAgICAgICAgICB5MjogcG9pbnQueSxcbiAgICAgICAgICAgIHN0cm9rZTogY2ZnLmNvbG9yLFxuICAgICAgICAgICAgbGluZVdpZHRoOiAyLFxuICAgICAgICAgICAgbGluZUNhcDogJ3JvdW5kJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBjb25zdCB7IG9yaWdpbiB9ID0gY2ZnO1xuICAgICAgICAvLyBncm91cC5hZGRTaGFwZSgndGV4dCcsIHtcbiAgICAgICAgLy8gICBhdHRyczoge1xuICAgICAgICAvLyAgICAgeDogY2VudGVyLngsXG4gICAgICAgIC8vICAgICB5OiBjZW50ZXIueSArIDgwLFxuICAgICAgICAvLyAgICAgdGV4dDogYCR7b3JpZ2luLl9vcmlnaW4udmFsdWV9JWAsXG4gICAgICAgIC8vICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAvLyAgICAgZm9udFNpemU6IDI0LFxuICAgICAgICAvLyAgICAgZmlsbDogJ3JnYmEoMCwgMCwgMCwgMC44NSknLFxuICAgICAgICAvLyAgIH0sXG4gICAgICAgIC8vIH0pO1xuICAgICAgICByZXR1cm4gZ3JvdXAuYWRkU2hhcGUoJ2NpcmNsZScsIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgeDogY2VudGVyLngsXG4gICAgICAgICAgICB5OiBjZW50ZXIueSxcbiAgICAgICAgICAgIHI6IDkuNzUsXG4gICAgICAgICAgICBzdHJva2U6IGNmZy5jb2xvcixcbiAgICAgICAgICAgIGxpbmVXaWR0aDogMixcbiAgICAgICAgICAgIGZpbGw6ICcjZmZmJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBjb25zdCBkYXRhID0gdGhpcy5jcmVhdGVEYXRhKCk7XG4gICAgY29uc3QgY2hhcnQgPSBuZXcgRzIuQ2hhcnQoe1xuICAgICAgY29udGFpbmVyOiB0aGlzLm5vZGUubmF0aXZlRWxlbWVudCxcbiAgICAgIGZvcmNlRml0OiB0cnVlLFxuICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcbiAgICAgIHBhZGRpbmc6IFsxMCwgMTAsIDMwLCAxMF0sXG4gICAgfSk7XG4gICAgY2hhcnQuc291cmNlKGRhdGEpO1xuXG4gICAgY2hhcnQuY29vcmQoJ3BvbGFyJywge1xuICAgICAgc3RhcnRBbmdsZTogTWF0aC5QSSAqIC0xLjIsXG4gICAgICBlbmRBbmdsZTogTWF0aC5QSSAqIDAuMixcbiAgICB9KTtcbiAgICBjaGFydC5zY2FsZSgndmFsdWUnLCB7XG4gICAgICBtaW46IDAsXG4gICAgICBtYXg6IDEwMCxcbiAgICAgIG5pY2U6IHRydWUsXG4gICAgICB0aWNrQ291bnQ6IDYsXG4gICAgfSk7XG5cbiAgICBjaGFydC5heGlzKCcxJywgZmFsc2UpO1xuICAgIC8vIOWIu+W6puWAvFxuICAgIGNoYXJ0LmF4aXMoJ3ZhbHVlJywge1xuICAgICAgekluZGV4OiAyLFxuICAgICAgbGluZTogbnVsbCxcbiAgICAgIGxhYmVsOiB7XG4gICAgICAgIG9mZnNldDogLTEyLFxuICAgICAgICBmb3JtYXR0ZXI6IHRoaXMuZm9ybWF0LFxuICAgICAgfSxcbiAgICAgIHRpY2tMaW5lOiBudWxsLFxuICAgICAgZ3JpZDogbnVsbCxcbiAgICB9KTtcbiAgICBjaGFydC5sZWdlbmQoZmFsc2UpO1xuICAgIGNoYXJ0XG4gICAgICAucG9pbnQoe1xuICAgICAgICBnZW5lcmF0ZVBvaW50czogdHJ1ZSxcbiAgICAgIH0pXG4gICAgICAucG9zaXRpb24oJ3ZhbHVlKjEnKVxuICAgICAgLnNoYXBlKCdwb2ludGVyJylcbiAgICAgIC5jb2xvcih0aGlzLmNvbG9yKVxuICAgICAgLmFjdGl2ZShmYWxzZSk7XG5cbiAgICB0aGlzLmNoYXJ0ID0gY2hhcnQ7XG4gICAgdGhpcy5kcmF3KCk7XG4gIH1cblxuICBwcml2YXRlIHVuaW5zdGFsbCgpIHtcbiAgICBpZiAodGhpcy5jaGFydCkgdGhpcy5jaGFydC5kZXN0cm95KCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmluaXRGbGFnID0gdHJ1ZTtcbiAgICB0aGlzLmluc3RhbGwoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmluaXRGbGFnKSB0aGlzLmRyYXcoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMudW5pbnN0YWxsKCk7XG4gIH1cbn1cbiJdfQ==