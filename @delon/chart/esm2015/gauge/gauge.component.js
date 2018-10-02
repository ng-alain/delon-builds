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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F1Z2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NoYXJ0L2dhdWdlLyIsInNvdXJjZXMiOlsiZ2F1Z2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUlWLE1BQU0sRUFDTix1QkFBdUIsR0FDeEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQVN2QyxNQUFNOzs7O0lBOEJKLFlBQW9CLElBQVk7UUFBWixTQUFJLEdBQUosSUFBSSxDQUFRO3FCQWpCZixTQUFTO3VCQUNQLFNBQVM7d0JBY1QsS0FBSztLQUVZOzs7O0lBekJwQyxJQUNJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7S0FDckI7Ozs7O0lBQ0QsSUFBSSxNQUFNLENBQUMsS0FBVTtRQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNoQzs7Ozs7SUFNRCxJQUNJLE9BQU8sQ0FBQyxLQUFVO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ2pDOzs7O0lBWU8sVUFBVTtRQUNoQixPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQzs7Ozs7SUFHL0MsSUFBSTtRQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSztZQUFFLE9BQU87UUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7UUFDM0IsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDOztRQUUvQixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFB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Q0YsS0FBSyxDQUFDO1lBQ0wsY0FBYyxFQUFFLElBQUk7U0FDckIsQ0FBQzthQUNELFFBQVEsQ0FBQyxTQUFTLENBQUM7YUFDbkIsS0FBSyxDQUFDLFNBQVMsQ0FBQzthQUNoQixLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzthQUNqQixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDOzs7OztJQUdkLFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7S0FDbkI7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsUUFBUTtZQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUNoQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxLQUFLO1lBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUN0Qzs7O1lBaE1GLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUFYQyxNQUFNOzs7b0JBZUwsS0FBSztxQkFFTCxLQUFLO29CQVFMLEtBQUs7c0JBQ0wsS0FBSztxQkFDTCxLQUFLO3NCQUVMLEtBQUs7bUJBUUwsU0FBUyxTQUFDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBWaWV3Q2hpbGQsXHJcbiAgRWxlbWVudFJlZixcclxuICBPbkluaXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBOZ1pvbmUsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHRvTnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xyXG5cclxuZGVjbGFyZSB2YXIgRzI6IGFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZzItZ2F1Z2UnLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiAjY29udGFpbmVyPjwvZGl2PmAsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHMkdhdWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XHJcbiAgLy8gI3JlZ2lvbiBmaWVsZHNcclxuXHJcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcclxuXHJcbiAgQElucHV0KClcclxuICBnZXQgaGVpZ2h0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcclxuICB9XHJcbiAgc2V0IGhlaWdodCh2YWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLl9oZWlnaHQgPSB0b051bWJlcih2YWx1ZSk7XHJcbiAgfVxyXG4gIHByaXZhdGUgX2hlaWdodDtcclxuICBASW5wdXQoKSBjb2xvciA9ICcjMkY5Q0ZGJztcclxuICBASW5wdXQoKSBiZ0NvbG9yID0gJyNGMEYyRjUnO1xyXG4gIEBJbnB1dCgpIGZvcm1hdDogRnVuY3Rpb247XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHBlcmNlbnQodmFsdWU6IGFueSkge1xyXG4gICAgdGhpcy5fcGVyY2VudCA9IHRvTnVtYmVyKHZhbHVlKTtcclxuICB9XHJcbiAgcHJpdmF0ZSBfcGVyY2VudDogbnVtYmVyO1xyXG5cclxuICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicpIHByaXZhdGUgbm9kZTogRWxlbWVudFJlZjtcclxuXHJcbiAgcHJpdmF0ZSBjaGFydDogYW55O1xyXG4gIHByaXZhdGUgaW5pdEZsYWcgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB6b25lOiBOZ1pvbmUpIHt9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlRGF0YSgpIHtcclxuICAgIHJldHVybiBbeyBuYW1lOiB0aGlzLnRpdGxlLCB2YWx1ZTogK3RoaXMuX3BlcmNlbnQgfV07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRyYXcoKSB7XHJcbiAgICBpZiAoIXRoaXMuY2hhcnQpIHJldHVybjtcclxuICAgIHRoaXMuY2hhcnQuZ3VpZGUoKS5jbGVhcigpO1xyXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuY3JlYXRlRGF0YSgpO1xyXG4gICAgLy8g57uY5Yi25Luq6KGo55uY6IOM5pmvXHJcbiAgICB0aGlzLmNoYXJ0Lmd1aWRlKCkuYXJjKHtcclxuICAgICAgekluZGV4OiAwLFxyXG4gICAgICB0b3A6IGZhbHNlLFxyXG4gICAgICBzdGFydDogWzAsIDAuOTVdLFxyXG4gICAgICBlbmQ6IFsxMDAsIDAuOTVdLFxyXG4gICAgICBzdHlsZToge1xyXG4gICAgICAgIC8vIOW6leeBsOiJslxyXG4gICAgICAgIHN0cm9rZTogdGhpcy5iZ0NvbG9yLFxyXG4gICAgICAgIGxpbmVXaWR0aDogMTIsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIC8vIOe7mOWItuaMh+agh1xyXG4gICAgdGhpcy5jaGFydC5ndWlkZSgpLmFyYyh7XHJcbiAgICAgIHpJbmRleDogMSxcclxuICAgICAgc3RhcnQ6IFswLCAwLjk1XSxcclxuICAgICAgZW5kOiBbZGF0YVswXS52YWx1ZSwgMC45NV0sXHJcbiAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgc3Ryb2tlOiB0aGlzLmNvbG9yLFxyXG4gICAgICAgIGxpbmVXaWR0aDogMTIsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIC8vIOe7mOWItuaVsOWtl1xyXG4gICAgdGhpcy5jaGFydC5ndWlkZSgpLmh0bWwoe1xyXG4gICAgICBwb3NpdGlvbjogWyc1MCUnLCAnOTUlJ10sXHJcbiAgICAgIGh0bWw6IGBcclxuICAgICAgPGRpdiBzdHlsZT1cIndpZHRoOiAzMDBweDt0ZXh0LWFsaWduOiBjZW50ZXI7Zm9udC1zaXplOiAxMnB4IWltcG9ydGFudDtcIj5cclxuICAgICAgICA8cCBzdHlsZT1cImZvbnQtc2l6ZTogMTRweDsgY29sb3I6IHJnYmEoMCwwLDAsMC40Myk7bWFyZ2luOiAwO1wiPiR7dGhpcy50aXRsZX08L3A+XHJcbiAgICAgICAgPHAgc3R5bGU9XCJmb250LXNpemU6IDI0cHg7Y29sb3I6IHJnYmEoMCwwLDAsMC44NSk7bWFyZ2luOiAwO1wiPlxyXG4gICAgICAgICAgJHtkYXRhWzBdLnZhbHVlfSVcclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PmBcclxuICAgIH0pO1xyXG4gICAgdGhpcy5jaGFydC5jaGFuZ2VEYXRhKGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBydW5JbnN0YWxsKCkge1xyXG4gICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbnN0YWxsKCkpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5zdGFsbCgpIHtcclxuICAgIHRoaXMubm9kZS5uYXRpdmVFbGVtZW50LmlubmVySFRNTCA9ICcnO1xyXG4gICAgY29uc3QgU2hhcGUgPSBHMi5TaGFwZTtcclxuICAgIC8vIOiHquWumuS5iVNoYXBlIOmDqOWIhlxyXG4gICAgU2hhcGUucmVnaXN0ZXJTaGFwZSgncG9pbnQnLCAncG9pbnRlcicsIHtcclxuICAgICAgZHJhd1NoYXBlKGNmZywgZ3JvdXApIHtcclxuICAgICAgICBsZXQgcG9pbnQgPSBjZmcucG9pbnRzWzBdOyAvLyDojrflj5bnrKzkuIDkuKrmoIforrDngrlcclxuICAgICAgICBwb2ludCA9IHRoaXMucGFyc2VQb2ludChwb2ludCk7XHJcbiAgICAgICAgY29uc3QgY2VudGVyID0gdGhpcy5wYXJzZVBvaW50KHtcclxuICAgICAgICAgIC8vIOiOt+WPluaegeWdkOagh+ezu+S4i+eUu+W4g+S4reW/g+eCuVxyXG4gICAgICAgICAgeDogMCxcclxuICAgICAgICAgIHk6IDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8g57uY5Yi25oyH6ZKIXHJcbiAgICAgICAgZ3JvdXAuYWRkU2hhcGUoJ2xpbmUnLCB7XHJcbiAgICAgICAgICBhdHRyczoge1xyXG4gICAgICAgICAgICB4MTogY2VudGVyLngsXHJcbiAgICAgICAgICAgIHkxOiBjZW50ZXIueSxcclxuICAgICAgICAgICAgeDI6IHBvaW50LngsXHJcbiAgICAgICAgICAgIHkyOiBwb2ludC55LFxyXG4gICAgICAgICAgICBzdHJva2U6IGNmZy5jb2xvcixcclxuICAgICAgICAgICAgbGluZVdpZHRoOiAyLFxyXG4gICAgICAgICAgICBsaW5lQ2FwOiAncm91bmQnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gY29uc3QgeyBvcmlnaW4gfSA9IGNmZztcclxuICAgICAgICAvLyBncm91cC5hZGRTaGFwZSgndGV4dCcsIHtcclxuICAgICAgICAvLyAgIGF0dHJzOiB7XHJcbiAgICAgICAgLy8gICAgIHg6IGNlbnRlci54LFxyXG4gICAgICAgIC8vICAgICB5OiBjZW50ZXIueSArIDgwLFxyXG4gICAgICAgIC8vICAgICB0ZXh0OiBgJHtvcmlnaW4uX29yaWdpbi52YWx1ZX0lYCxcclxuICAgICAgICAvLyAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAvLyAgICAgZm9udFNpemU6IDI0LFxyXG4gICAgICAgIC8vICAgICBmaWxsOiAncmdiYSgwLCAwLCAwLCAwLjg1KScsXHJcbiAgICAgICAgLy8gICB9LFxyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIHJldHVybiBncm91cC5hZGRTaGFwZSgnY2lyY2xlJywge1xyXG4gICAgICAgICAgYXR0cnM6IHtcclxuICAgICAgICAgICAgeDogY2VudGVyLngsXHJcbiAgICAgICAgICAgIHk6IGNlbnRlci55LFxyXG4gICAgICAgICAgICByOiA5Ljc1LFxyXG4gICAgICAgICAgICBzdHJva2U6IGNmZy5jb2xvcixcclxuICAgICAgICAgICAgbGluZVdpZHRoOiAyLFxyXG4gICAgICAgICAgICBmaWxsOiAnI2ZmZicsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuY3JlYXRlRGF0YSgpO1xyXG4gICAgY29uc3QgY2hhcnQgPSBuZXcgRzIuQ2hhcnQoe1xyXG4gICAgICBjb250YWluZXI6IHRoaXMubm9kZS5uYXRpdmVFbGVtZW50LFxyXG4gICAgICBmb3JjZUZpdDogdHJ1ZSxcclxuICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcclxuICAgICAgcGFkZGluZzogWzEwLCAxMCwgMzAsIDEwXSxcclxuICAgIH0pO1xyXG4gICAgY2hhcnQuc291cmNlKGRhdGEpO1xyXG5cclxuICAgIGNoYXJ0LmNvb3JkKCdwb2xhcicsIHtcclxuICAgICAgc3RhcnRBbmdsZTogLTEuMiAqIE1hdGguUEksXHJcbiAgICAgIGVuZEFuZ2xlOiAwLjIgKiBNYXRoLlBJLFxyXG4gICAgfSk7XHJcbiAgICBjaGFydC5zY2FsZSgndmFsdWUnLCB7XHJcbiAgICAgIG1pbjogMCxcclxuICAgICAgbWF4OiAxMDAsXHJcbiAgICAgIG5pY2U6IHRydWUsXHJcbiAgICAgIHRpY2tDb3VudDogNixcclxuICAgIH0pO1xyXG5cclxuICAgIGNoYXJ0LmF4aXMoJzEnLCBmYWxzZSk7XHJcbiAgICAvLyDliLvluqblgLxcclxuICAgIGNoYXJ0LmF4aXMoJ3ZhbHVlJywge1xyXG4gICAgICB6SW5kZXg6IDIsXHJcbiAgICAgIGxpbmU6IG51bGwsXHJcbiAgICAgIGxhYmVsOiB7XHJcbiAgICAgICAgb2Zmc2V0OiAtMTIsXHJcbiAgICAgICAgZm9ybWF0dGVyOiB0aGlzLmZvcm1hdCxcclxuICAgICAgfSxcclxuICAgICAgdGlja0xpbmU6IG51bGwsXHJcbiAgICAgIGdyaWQ6IG51bGwsXHJcbiAgICB9KTtcclxuICAgIGNoYXJ0LmxlZ2VuZChmYWxzZSk7XHJcbiAgICBjaGFydFxyXG4gICAgICAucG9pbnQoe1xyXG4gICAgICAgIGdlbmVyYXRlUG9pbnRzOiB0cnVlLFxyXG4gICAgICB9KVxyXG4gICAgICAucG9zaXRpb24oJ3ZhbHVlKjEnKVxyXG4gICAgICAuc2hhcGUoJ3BvaW50ZXInKVxyXG4gICAgICAuY29sb3IodGhpcy5jb2xvcilcclxuICAgICAgLmFjdGl2ZShmYWxzZSk7XHJcblxyXG4gICAgdGhpcy5jaGFydCA9IGNoYXJ0O1xyXG4gICAgdGhpcy5kcmF3KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaW5pdEZsYWcgPSB0cnVlO1xyXG4gICAgdGhpcy5ydW5JbnN0YWxsKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmluaXRGbGFnKSB0aGlzLmRyYXcoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuY2hhcnQpIHRoaXMuY2hhcnQuZGVzdHJveSgpO1xyXG4gIH1cclxufVxyXG4iXX0=