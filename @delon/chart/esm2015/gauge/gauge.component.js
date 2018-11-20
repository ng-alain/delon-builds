/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ElementRef, NgZone, ChangeDetectionStrategy, } from '@angular/core';
import { toNumber } from '@delon/util';
export class G2GaugeComponent {
    /**
     * @param {?} zone
     */
    constructor(zone) {
        this.zone = zone;
        this.color = '#2F9CFF';
        this.bgColor = '#F0F2F5';
        this.initFlag = false;
    }
    /**
     * @return {?}
     */
    get height() {
        return this._height;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set height(value) {
        this._height = toNumber(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set percent(value) {
        this._percent = toNumber(value);
    }
    /**
     * @return {?}
     */
    createData() {
        return [{ name: this.title, value: +this._percent }];
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
      </div>`
        });
        this.chart.changeData(data);
    }
    /**
     * @return {?}
     */
    runInstall() {
        this.zone.runOutsideAngular(() => setTimeout(() => this.install()));
    }
    /**
     * @return {?}
     */
    install() {
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
                let point = cfg.points[0]; // 获取第一个标记点
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
            startAngle: -1.2 * Math.PI,
            endAngle: 0.2 * Math.PI,
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
    ngOnInit() {
        this.initFlag = true;
        this.runInstall();
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
        if (this.chart)
            this.chart.destroy();
    }
}
G2GaugeComponent.decorators = [
    { type: Component, args: [{
                selector: 'g2-gauge',
                template: `<div #container></div>`,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
G2GaugeComponent.ctorParameters = () => [
    { type: NgZone }
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
if (false) {
    /** @type {?} */
    G2GaugeComponent.prototype.title;
    /** @type {?} */
    G2GaugeComponent.prototype._height;
    /** @type {?} */
    G2GaugeComponent.prototype.color;
    /** @type {?} */
    G2GaugeComponent.prototype.bgColor;
    /** @type {?} */
    G2GaugeComponent.prototype.format;
    /** @type {?} */
    G2GaugeComponent.prototype._percent;
    /** @type {?} */
    G2GaugeComponent.prototype.node;
    /** @type {?} */
    G2GaugeComponent.prototype.chart;
    /** @type {?} */
    G2GaugeComponent.prototype.initFlag;
    /** @type {?} */
    G2GaugeComponent.prototype.zone;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F1Z2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NoYXJ0L2dhdWdlLyIsInNvdXJjZXMiOlsiZ2F1Z2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUlWLE1BQU0sRUFDTix1QkFBdUIsR0FDeEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQVN2QyxNQUFNOzs7O0lBOEJKLFlBQW9CLElBQVk7UUFBWixTQUFJLEdBQUosSUFBSSxDQUFRO3FCQWpCZixTQUFTO3VCQUNQLFNBQVM7d0JBY1QsS0FBSztLQUVZOzs7O0lBekJwQyxJQUNJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7S0FDckI7Ozs7O0lBQ0QsSUFBSSxNQUFNLENBQUMsS0FBVTtRQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNoQzs7Ozs7SUFNRCxJQUNJLE9BQU8sQ0FBQyxLQUFVO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ2pDOzs7O0lBWU8sVUFBVTtRQUNoQixPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQzs7Ozs7SUFHL0MsSUFBSTtRQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSztZQUFFLE9BQU87UUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7UUFDM0IsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDOztRQUUvQixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFB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Q0YsS0FBSyxDQUFDO1lBQ0wsY0FBYyxFQUFFLElBQUk7U0FDckIsQ0FBQzthQUNELFFBQVEsQ0FBQyxTQUFTLENBQUM7YUFDbkIsS0FBSyxDQUFDLFNBQVMsQ0FBQzthQUNoQixLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzthQUNqQixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDOzs7OztJQUdkLFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7S0FDbkI7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsUUFBUTtZQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUNoQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxLQUFLO1lBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUN0Qzs7O1lBaE1GLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUFYQyxNQUFNOzs7b0JBZUwsS0FBSztxQkFFTCxLQUFLO29CQVFMLEtBQUs7c0JBQ0wsS0FBSztxQkFDTCxLQUFLO3NCQUVMLEtBQUs7bUJBUUwsU0FBUyxTQUFDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBWaWV3Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxuICBPbkNoYW5nZXMsXG4gIE5nWm9uZSxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdG9OdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbmRlY2xhcmUgdmFyIEcyOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2cyLWdhdWdlJyxcbiAgdGVtcGxhdGU6IGA8ZGl2ICNjb250YWluZXI+PC9kaXY+YCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEcyR2F1Z2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcbiAgfVxuICBzZXQgaGVpZ2h0KHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl9oZWlnaHQgPSB0b051bWJlcih2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfaGVpZ2h0O1xuICBASW5wdXQoKSBjb2xvciA9ICcjMkY5Q0ZGJztcbiAgQElucHV0KCkgYmdDb2xvciA9ICcjRjBGMkY1JztcbiAgQElucHV0KCkgZm9ybWF0OiBGdW5jdGlvbjtcblxuICBASW5wdXQoKVxuICBzZXQgcGVyY2VudCh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5fcGVyY2VudCA9IHRvTnVtYmVyKHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9wZXJjZW50OiBudW1iZXI7XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicpIHByaXZhdGUgbm9kZTogRWxlbWVudFJlZjtcblxuICBwcml2YXRlIGNoYXJ0OiBhbnk7XG4gIHByaXZhdGUgaW5pdEZsYWcgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHpvbmU6IE5nWm9uZSkge31cblxuICBwcml2YXRlIGNyZWF0ZURhdGEoKSB7XG4gICAgcmV0dXJuIFt7IG5hbWU6IHRoaXMudGl0bGUsIHZhbHVlOiArdGhpcy5fcGVyY2VudCB9XTtcbiAgfVxuXG4gIHByaXZhdGUgZHJhdygpIHtcbiAgICBpZiAoIXRoaXMuY2hhcnQpIHJldHVybjtcbiAgICB0aGlzLmNoYXJ0Lmd1aWRlKCkuY2xlYXIoKTtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5jcmVhdGVEYXRhKCk7XG4gICAgLy8g57uY5Yi25Luq6KGo55uY6IOM5pmvXG4gICAgdGhpcy5jaGFydC5ndWlkZSgpLmFyYyh7XG4gICAgICB6SW5kZXg6IDAsXG4gICAgICB0b3A6IGZhbHNlLFxuICAgICAgc3RhcnQ6IFswLCAwLjk1XSxcbiAgICAgIGVuZDogWzEwMCwgMC45NV0sXG4gICAgICBzdHlsZToge1xuICAgICAgICAvLyDlupXngbDoibJcbiAgICAgICAgc3Ryb2tlOiB0aGlzLmJnQ29sb3IsXG4gICAgICAgIGxpbmVXaWR0aDogMTIsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIC8vIOe7mOWItuaMh+agh1xuICAgIHRoaXMuY2hhcnQuZ3VpZGUoKS5hcmMoe1xuICAgICAgekluZGV4OiAxLFxuICAgICAgc3RhcnQ6IFswLCAwLjk1XSxcbiAgICAgIGVuZDogW2RhdGFbMF0udmFsdWUsIDAuOTVdLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgc3Ryb2tlOiB0aGlzLmNvbG9yLFxuICAgICAgICBsaW5lV2lkdGg6IDEyLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICAvLyDnu5jliLbmlbDlrZdcbiAgICB0aGlzLmNoYXJ0Lmd1aWRlKCkuaHRtbCh7XG4gICAgICBwb3NpdGlvbjogWyc1MCUnLCAnOTUlJ10sXG4gICAgICBodG1sOiBgXG4gICAgICA8ZGl2IHN0eWxlPVwid2lkdGg6IDMwMHB4O3RleHQtYWxpZ246IGNlbnRlcjtmb250LXNpemU6IDEycHghaW1wb3J0YW50O1wiPlxuICAgICAgICA8cCBzdHlsZT1cImZvbnQtc2l6ZTogMTRweDsgY29sb3I6IHJnYmEoMCwwLDAsMC40Myk7bWFyZ2luOiAwO1wiPiR7dGhpcy50aXRsZX08L3A+XG4gICAgICAgIDxwIHN0eWxlPVwiZm9udC1zaXplOiAyNHB4O2NvbG9yOiByZ2JhKDAsMCwwLDAuODUpO21hcmdpbjogMDtcIj5cbiAgICAgICAgICAke2RhdGFbMF0udmFsdWV9JVxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5gXG4gICAgfSk7XG4gICAgdGhpcy5jaGFydC5jaGFuZ2VEYXRhKGRhdGEpO1xuICB9XG5cbiAgcHJpdmF0ZSBydW5JbnN0YWxsKCkge1xuICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5zdGFsbCgpKSk7XG4gIH1cblxuICBwcml2YXRlIGluc3RhbGwoKSB7XG4gICAgdGhpcy5ub2RlLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgY29uc3QgU2hhcGUgPSBHMi5TaGFwZTtcbiAgICAvLyDoh6rlrprkuYlTaGFwZSDpg6jliIZcbiAgICBTaGFwZS5yZWdpc3RlclNoYXBlKCdwb2ludCcsICdwb2ludGVyJywge1xuICAgICAgZHJhd1NoYXBlKGNmZywgZ3JvdXApIHtcbiAgICAgICAgbGV0IHBvaW50ID0gY2ZnLnBvaW50c1swXTsgLy8g6I635Y+W56ys5LiA5Liq5qCH6K6w54K5XG4gICAgICAgIHBvaW50ID0gdGhpcy5wYXJzZVBvaW50KHBvaW50KTtcbiAgICAgICAgY29uc3QgY2VudGVyID0gdGhpcy5wYXJzZVBvaW50KHtcbiAgICAgICAgICAvLyDojrflj5bmnoHlnZDmoIfns7vkuIvnlLvluIPkuK3lv4PngrlcbiAgICAgICAgICB4OiAwLFxuICAgICAgICAgIHk6IDAsXG4gICAgICAgIH0pO1xuICAgICAgICAvLyDnu5jliLbmjIfpkohcbiAgICAgICAgZ3JvdXAuYWRkU2hhcGUoJ2xpbmUnLCB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHgxOiBjZW50ZXIueCxcbiAgICAgICAgICAgIHkxOiBjZW50ZXIueSxcbiAgICAgICAgICAgIHgyOiBwb2ludC54LFxuICAgICAgICAgICAgeTI6IHBvaW50LnksXG4gICAgICAgICAgICBzdHJva2U6IGNmZy5jb2xvcixcbiAgICAgICAgICAgIGxpbmVXaWR0aDogMixcbiAgICAgICAgICAgIGxpbmVDYXA6ICdyb3VuZCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gY29uc3QgeyBvcmlnaW4gfSA9IGNmZztcbiAgICAgICAgLy8gZ3JvdXAuYWRkU2hhcGUoJ3RleHQnLCB7XG4gICAgICAgIC8vICAgYXR0cnM6IHtcbiAgICAgICAgLy8gICAgIHg6IGNlbnRlci54LFxuICAgICAgICAvLyAgICAgeTogY2VudGVyLnkgKyA4MCxcbiAgICAgICAgLy8gICAgIHRleHQ6IGAke29yaWdpbi5fb3JpZ2luLnZhbHVlfSVgLFxuICAgICAgICAvLyAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgLy8gICAgIGZvbnRTaXplOiAyNCxcbiAgICAgICAgLy8gICAgIGZpbGw6ICdyZ2JhKDAsIDAsIDAsIDAuODUpJyxcbiAgICAgICAgLy8gICB9LFxuICAgICAgICAvLyB9KTtcbiAgICAgICAgcmV0dXJuIGdyb3VwLmFkZFNoYXBlKCdjaXJjbGUnLCB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHg6IGNlbnRlci54LFxuICAgICAgICAgICAgeTogY2VudGVyLnksXG4gICAgICAgICAgICByOiA5Ljc1LFxuICAgICAgICAgICAgc3Ryb2tlOiBjZmcuY29sb3IsXG4gICAgICAgICAgICBsaW5lV2lkdGg6IDIsXG4gICAgICAgICAgICBmaWxsOiAnI2ZmZicsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuY3JlYXRlRGF0YSgpO1xuICAgIGNvbnN0IGNoYXJ0ID0gbmV3IEcyLkNoYXJ0KHtcbiAgICAgIGNvbnRhaW5lcjogdGhpcy5ub2RlLm5hdGl2ZUVsZW1lbnQsXG4gICAgICBmb3JjZUZpdDogdHJ1ZSxcbiAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXG4gICAgICBwYWRkaW5nOiBbMTAsIDEwLCAzMCwgMTBdLFxuICAgIH0pO1xuICAgIGNoYXJ0LnNvdXJjZShkYXRhKTtcblxuICAgIGNoYXJ0LmNvb3JkKCdwb2xhcicsIHtcbiAgICAgIHN0YXJ0QW5nbGU6IC0xLjIgKiBNYXRoLlBJLFxuICAgICAgZW5kQW5nbGU6IDAuMiAqIE1hdGguUEksXG4gICAgfSk7XG4gICAgY2hhcnQuc2NhbGUoJ3ZhbHVlJywge1xuICAgICAgbWluOiAwLFxuICAgICAgbWF4OiAxMDAsXG4gICAgICBuaWNlOiB0cnVlLFxuICAgICAgdGlja0NvdW50OiA2LFxuICAgIH0pO1xuXG4gICAgY2hhcnQuYXhpcygnMScsIGZhbHNlKTtcbiAgICAvLyDliLvluqblgLxcbiAgICBjaGFydC5heGlzKCd2YWx1ZScsIHtcbiAgICAgIHpJbmRleDogMixcbiAgICAgIGxpbmU6IG51bGwsXG4gICAgICBsYWJlbDoge1xuICAgICAgICBvZmZzZXQ6IC0xMixcbiAgICAgICAgZm9ybWF0dGVyOiB0aGlzLmZvcm1hdCxcbiAgICAgIH0sXG4gICAgICB0aWNrTGluZTogbnVsbCxcbiAgICAgIGdyaWQ6IG51bGwsXG4gICAgfSk7XG4gICAgY2hhcnQubGVnZW5kKGZhbHNlKTtcbiAgICBjaGFydFxuICAgICAgLnBvaW50KHtcbiAgICAgICAgZ2VuZXJhdGVQb2ludHM6IHRydWUsXG4gICAgICB9KVxuICAgICAgLnBvc2l0aW9uKCd2YWx1ZSoxJylcbiAgICAgIC5zaGFwZSgncG9pbnRlcicpXG4gICAgICAuY29sb3IodGhpcy5jb2xvcilcbiAgICAgIC5hY3RpdmUoZmFsc2UpO1xuXG4gICAgdGhpcy5jaGFydCA9IGNoYXJ0O1xuICAgIHRoaXMuZHJhdygpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbml0RmxhZyA9IHRydWU7XG4gICAgdGhpcy5ydW5JbnN0YWxsKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pbml0RmxhZykgdGhpcy5kcmF3KCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jaGFydCkgdGhpcy5jaGFydC5kZXN0cm95KCk7XG4gIH1cbn1cbiJdfQ==