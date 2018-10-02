/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ElementRef, NgZone, ChangeDetectionStrategy, } from '@angular/core';
import { toNumber } from '@delon/util';
var G2GaugeComponent = /** @class */ (function () {
    function G2GaugeComponent(zone) {
        this.zone = zone;
        this.color = '#2F9CFF';
        this.bgColor = '#F0F2F5';
        this.initFlag = false;
    }
    Object.defineProperty(G2GaugeComponent.prototype, "height", {
        get: /**
         * @return {?}
         */
        function () {
            return this._height;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._height = toNumber(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G2GaugeComponent.prototype, "percent", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._percent = toNumber(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    G2GaugeComponent.prototype.createData = /**
     * @return {?}
     */
    function () {
        return [{ name: this.title, value: +this._percent }];
    };
    /**
     * @return {?}
     */
    G2GaugeComponent.prototype.draw = /**
     * @return {?}
     */
    function () {
        if (!this.chart)
            return;
        this.chart.guide().clear();
        /** @type {?} */
        var data = this.createData();
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
            html: "\n      <div style=\"width: 300px;text-align: center;font-size: 12px!important;\">\n        <p style=\"font-size: 14px; color: rgba(0,0,0,0.43);margin: 0;\">" + this.title + "</p>\n        <p style=\"font-size: 24px;color: rgba(0,0,0,0.85);margin: 0;\">\n          " + data[0].value + "%\n        </p>\n      </div>"
        });
        this.chart.changeData(data);
    };
    /**
     * @return {?}
     */
    G2GaugeComponent.prototype.runInstall = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.zone.runOutsideAngular(function () { return setTimeout(function () { return _this.install(); }); });
    };
    /**
     * @return {?}
     */
    G2GaugeComponent.prototype.install = /**
     * @return {?}
     */
    function () {
        this.node.nativeElement.innerHTML = '';
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
                var point = cfg.points[0]; // 获取第一个标记点
                point = this.parsePoint(point);
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
        var data = this.createData();
        /** @type {?} */
        var chart = new G2.Chart({
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
    };
    /**
     * @return {?}
     */
    G2GaugeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.initFlag = true;
        this.runInstall();
    };
    /**
     * @return {?}
     */
    G2GaugeComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (this.initFlag)
            this.draw();
    };
    /**
     * @return {?}
     */
    G2GaugeComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.chart)
            this.chart.destroy();
    };
    G2GaugeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'g2-gauge',
                    template: "<div #container></div>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    G2GaugeComponent.ctorParameters = function () { return [
        { type: NgZone }
    ]; };
    G2GaugeComponent.propDecorators = {
        title: [{ type: Input }],
        height: [{ type: Input }],
        color: [{ type: Input }],
        bgColor: [{ type: Input }],
        format: [{ type: Input }],
        percent: [{ type: Input }],
        node: [{ type: ViewChild, args: ['container',] }]
    };
    return G2GaugeComponent;
}());
export { G2GaugeComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F1Z2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NoYXJ0L2dhdWdlLyIsInNvdXJjZXMiOlsiZ2F1Z2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUlWLE1BQU0sRUFDTix1QkFBdUIsR0FDeEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7SUF1Q3JDLDBCQUFvQixJQUFZO1FBQVosU0FBSSxHQUFKLElBQUksQ0FBUTtxQkFqQmYsU0FBUzt1QkFDUCxTQUFTO3dCQWNULEtBQUs7S0FFWTtJQXpCcEMsc0JBQ0ksb0NBQU07Ozs7UUFEVjtZQUVFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUNyQjs7Ozs7UUFDRCxVQUFXLEtBQVU7WUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDaEM7OztPQUhBO0lBU0Qsc0JBQ0kscUNBQU87Ozs7O1FBRFgsVUFDWSxLQUFVO1lBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2pDOzs7T0FBQTs7OztJQVlPLHFDQUFVOzs7O1FBQ2hCLE9BQU8sQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDOzs7OztJQUcvQywrQkFBSTs7OztRQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSztZQUFFLE9BQU87UUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7UUFDM0IsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDOztRQUUvQixJQUFJLENBQUMsS0FB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TSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BCLEtBQUs7YUFDRixLQUFLLENBQUM7WUFDTCxjQUFjLEVBQUUsSUFBSTtTQUNyQixDQUFDO2FBQ0QsUUFBUSxDQUFDLFNBQVMsQ0FBQzthQUNuQixLQUFLLENBQUMsU0FBUyxDQUFDO2FBQ2hCLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2FBQ2pCLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7Ozs7O0lBR2QsbUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0tBQ25COzs7O0lBRUQsc0NBQVc7OztJQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsUUFBUTtZQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUNoQzs7OztJQUVELHNDQUFXOzs7SUFBWDtRQUNFLElBQUksSUFBSSxDQUFDLEtBQUs7WUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0tBQ3RDOztnQkFoTUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQixRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7Ozs7Z0JBWEMsTUFBTTs7O3dCQWVMLEtBQUs7eUJBRUwsS0FBSzt3QkFRTCxLQUFLOzBCQUNMLEtBQUs7eUJBQ0wsS0FBSzswQkFFTCxLQUFLO3VCQVFMLFNBQVMsU0FBQyxXQUFXOzsyQkE3Q3hCOztTQW9CYSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBWaWV3Q2hpbGQsXHJcbiAgRWxlbWVudFJlZixcclxuICBPbkluaXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBOZ1pvbmUsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHRvTnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xyXG5cclxuZGVjbGFyZSB2YXIgRzI6IGFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZzItZ2F1Z2UnLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiAjY29udGFpbmVyPjwvZGl2PmAsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHMkdhdWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XHJcbiAgLy8gI3JlZ2lvbiBmaWVsZHNcclxuXHJcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcclxuXHJcbiAgQElucHV0KClcclxuICBnZXQgaGVpZ2h0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcclxuICB9XHJcbiAgc2V0IGhlaWdodCh2YWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLl9oZWlnaHQgPSB0b051bWJlcih2YWx1ZSk7XHJcbiAgfVxyXG4gIHByaXZhdGUgX2hlaWdodDtcclxuICBASW5wdXQoKSBjb2xvciA9ICcjMkY5Q0ZGJztcclxuICBASW5wdXQoKSBiZ0NvbG9yID0gJyNGMEYyRjUnO1xyXG4gIEBJbnB1dCgpIGZvcm1hdDogRnVuY3Rpb247XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHBlcmNlbnQodmFsdWU6IGFueSkge1xyXG4gICAgdGhpcy5fcGVyY2VudCA9IHRvTnVtYmVyKHZhbHVlKTtcclxuICB9XHJcbiAgcHJpdmF0ZSBfcGVyY2VudDogbnVtYmVyO1xyXG5cclxuICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicpIHByaXZhdGUgbm9kZTogRWxlbWVudFJlZjtcclxuXHJcbiAgcHJpdmF0ZSBjaGFydDogYW55O1xyXG4gIHByaXZhdGUgaW5pdEZsYWcgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB6b25lOiBOZ1pvbmUpIHt9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlRGF0YSgpIHtcclxuICAgIHJldHVybiBbeyBuYW1lOiB0aGlzLnRpdGxlLCB2YWx1ZTogK3RoaXMuX3BlcmNlbnQgfV07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRyYXcoKSB7XHJcbiAgICBpZiAoIXRoaXMuY2hhcnQpIHJldHVybjtcclxuICAgIHRoaXMuY2hhcnQuZ3VpZGUoKS5jbGVhcigpO1xyXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuY3JlYXRlRGF0YSgpO1xyXG4gICAgLy8g57uY5Yi25Luq6KGo55uY6IOM5pmvXHJcbiAgICB0aGlzLmNoYXJ0Lmd1aWRlKCkuYXJjKHtcclxuICAgICAgekluZGV4OiAwLFxyXG4gICAgICB0b3A6IGZhbHNlLFxyXG4gICAgICBzdGFydDogWzAsIDAuOTVdLFxyXG4gICAgICBlbmQ6IFsxMDAsIDAuOTVdLFxyXG4gICAgICBzdHlsZToge1xyXG4gICAgICAgIC8vIOW6leeBsOiJslxyXG4gICAgICAgIHN0cm9rZTogdGhpcy5iZ0NvbG9yLFxyXG4gICAgICAgIGxpbmVXaWR0aDogMTIsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIC8vIOe7mOWItuaMh+agh1xyXG4gICAgdGhpcy5jaGFydC5ndWlkZSgpLmFyYyh7XHJcbiAgICAgIHpJbmRleDogMSxcclxuICAgICAgc3RhcnQ6IFswLCAwLjk1XSxcclxuICAgICAgZW5kOiBbZGF0YVswXS52YWx1ZSwgMC45NV0sXHJcbiAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgc3Ryb2tlOiB0aGlzLmNvbG9yLFxyXG4gICAgICAgIGxpbmVXaWR0aDogMTIsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIC8vIOe7mOWItuaVsOWtl1xyXG4gICAgdGhpcy5jaGFydC5ndWlkZSgpLmh0bWwoe1xyXG4gICAgICBwb3NpdGlvbjogWyc1MCUnLCAnOTUlJ10sXHJcbiAgICAgIGh0bWw6IGBcclxuICAgICAgPGRpdiBzdHlsZT1cIndpZHRoOiAzMDBweDt0ZXh0LWFsaWduOiBjZW50ZXI7Zm9udC1zaXplOiAxMnB4IWltcG9ydGFudDtcIj5cclxuICAgICAgICA8cCBzdHlsZT1cImZvbnQtc2l6ZTogMTRweDsgY29sb3I6IHJnYmEoMCwwLDAsMC40Myk7bWFyZ2luOiAwO1wiPiR7dGhpcy50aXRsZX08L3A+XHJcbiAgICAgICAgPHAgc3R5bGU9XCJmb250LXNpemU6IDI0cHg7Y29sb3I6IHJnYmEoMCwwLDAsMC44NSk7bWFyZ2luOiAwO1wiPlxyXG4gICAgICAgICAgJHtkYXRhWzBdLnZhbHVlfSVcclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PmBcclxuICAgIH0pO1xyXG4gICAgdGhpcy5jaGFydC5jaGFuZ2VEYXRhKGRhdGEpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBydW5JbnN0YWxsKCkge1xyXG4gICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbnN0YWxsKCkpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5zdGFsbCgpIHtcclxuICAgIHRoaXMubm9kZS5uYXRpdmVFbGVtZW50LmlubmVySFRNTCA9ICcnO1xyXG4gICAgY29uc3QgU2hhcGUgPSBHMi5TaGFwZTtcclxuICAgIC8vIOiHquWumuS5iVNoYXBlIOmDqOWIhlxyXG4gICAgU2hhcGUucmVnaXN0ZXJTaGFwZSgncG9pbnQnLCAncG9pbnRlcicsIHtcclxuICAgICAgZHJhd1NoYXBlKGNmZywgZ3JvdXApIHtcclxuICAgICAgICBsZXQgcG9pbnQgPSBjZmcucG9pbnRzWzBdOyAvLyDojrflj5bnrKzkuIDkuKrmoIforrDngrlcclxuICAgICAgICBwb2ludCA9IHRoaXMucGFyc2VQb2ludChwb2ludCk7XHJcbiAgICAgICAgY29uc3QgY2VudGVyID0gdGhpcy5wYXJzZVBvaW50KHtcclxuICAgICAgICAgIC8vIOiOt+WPluaegeWdkOagh+ezu+S4i+eUu+W4g+S4reW/g+eCuVxyXG4gICAgICAgICAgeDogMCxcclxuICAgICAgICAgIHk6IDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8g57uY5Yi25oyH6ZKIXHJcbiAgICAgICAgZ3JvdXAuYWRkU2hhcGUoJ2xpbmUnLCB7XHJcbiAgICAgICAgICBhdHRyczoge1xyXG4gICAgICAgICAgICB4MTogY2VudGVyLngsXHJcbiAgICAgICAgICAgIHkxOiBjZW50ZXIueSxcclxuICAgICAgICAgICAgeDI6IHBvaW50LngsXHJcbiAgICAgICAgICAgIHkyOiBwb2ludC55LFxyXG4gICAgICAgICAgICBzdHJva2U6IGNmZy5jb2xvcixcclxuICAgICAgICAgICAgbGluZVdpZHRoOiAyLFxyXG4gICAgICAgICAgICBsaW5lQ2FwOiAncm91bmQnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gY29uc3QgeyBvcmlnaW4gfSA9IGNmZztcclxuICAgICAgICAvLyBncm91cC5hZGRTaGFwZSgndGV4dCcsIHtcclxuICAgICAgICAvLyAgIGF0dHJzOiB7XHJcbiAgICAgICAgLy8gICAgIHg6IGNlbnRlci54LFxyXG4gICAgICAgIC8vICAgICB5OiBjZW50ZXIueSArIDgwLFxyXG4gICAgICAgIC8vICAgICB0ZXh0OiBgJHtvcmlnaW4uX29yaWdpbi52YWx1ZX0lYCxcclxuICAgICAgICAvLyAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAvLyAgICAgZm9udFNpemU6IDI0LFxyXG4gICAgICAgIC8vICAgICBmaWxsOiAncmdiYSgwLCAwLCAwLCAwLjg1KScsXHJcbiAgICAgICAgLy8gICB9LFxyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIHJldHVybiBncm91cC5hZGRTaGFwZSgnY2lyY2xlJywge1xyXG4gICAgICAgICAgYXR0cnM6IHtcclxuICAgICAgICAgICAgeDogY2VudGVyLngsXHJcbiAgICAgICAgICAgIHk6IGNlbnRlci55LFxyXG4gICAgICAgICAgICByOiA5Ljc1LFxyXG4gICAgICAgICAgICBzdHJva2U6IGNmZy5jb2xvcixcclxuICAgICAgICAgICAgbGluZVdpZHRoOiAyLFxyXG4gICAgICAgICAgICBmaWxsOiAnI2ZmZicsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuY3JlYXRlRGF0YSgpO1xyXG4gICAgY29uc3QgY2hhcnQgPSBuZXcgRzIuQ2hhcnQoe1xyXG4gICAgICBjb250YWluZXI6IHRoaXMubm9kZS5uYXRpdmVFbGVtZW50LFxyXG4gICAgICBmb3JjZUZpdDogdHJ1ZSxcclxuICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcclxuICAgICAgcGFkZGluZzogWzEwLCAxMCwgMzAsIDEwXSxcclxuICAgIH0pO1xyXG4gICAgY2hhcnQuc291cmNlKGRhdGEpO1xyXG5cclxuICAgIGNoYXJ0LmNvb3JkKCdwb2xhcicsIHtcclxuICAgICAgc3RhcnRBbmdsZTogLTEuMiAqIE1hdGguUEksXHJcbiAgICAgIGVuZEFuZ2xlOiAwLjIgKiBNYXRoLlBJLFxyXG4gICAgfSk7XHJcbiAgICBjaGFydC5zY2FsZSgndmFsdWUnLCB7XHJcbiAgICAgIG1pbjogMCxcclxuICAgICAgbWF4OiAxMDAsXHJcbiAgICAgIG5pY2U6IHRydWUsXHJcbiAgICAgIHRpY2tDb3VudDogNixcclxuICAgIH0pO1xyXG5cclxuICAgIGNoYXJ0LmF4aXMoJzEnLCBmYWxzZSk7XHJcbiAgICAvLyDliLvluqblgLxcclxuICAgIGNoYXJ0LmF4aXMoJ3ZhbHVlJywge1xyXG4gICAgICB6SW5kZXg6IDIsXHJcbiAgICAgIGxpbmU6IG51bGwsXHJcbiAgICAgIGxhYmVsOiB7XHJcbiAgICAgICAgb2Zmc2V0OiAtMTIsXHJcbiAgICAgICAgZm9ybWF0dGVyOiB0aGlzLmZvcm1hdCxcclxuICAgICAgfSxcclxuICAgICAgdGlja0xpbmU6IG51bGwsXHJcbiAgICAgIGdyaWQ6IG51bGwsXHJcbiAgICB9KTtcclxuICAgIGNoYXJ0LmxlZ2VuZChmYWxzZSk7XHJcbiAgICBjaGFydFxyXG4gICAgICAucG9pbnQoe1xyXG4gICAgICAgIGdlbmVyYXRlUG9pbnRzOiB0cnVlLFxyXG4gICAgICB9KVxyXG4gICAgICAucG9zaXRpb24oJ3ZhbHVlKjEnKVxyXG4gICAgICAuc2hhcGUoJ3BvaW50ZXInKVxyXG4gICAgICAuY29sb3IodGhpcy5jb2xvcilcclxuICAgICAgLmFjdGl2ZShmYWxzZSk7XHJcblxyXG4gICAgdGhpcy5jaGFydCA9IGNoYXJ0O1xyXG4gICAgdGhpcy5kcmF3KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaW5pdEZsYWcgPSB0cnVlO1xyXG4gICAgdGhpcy5ydW5JbnN0YWxsKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmluaXRGbGFnKSB0aGlzLmRyYXcoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuY2hhcnQpIHRoaXMuY2hhcnQuZGVzdHJveSgpO1xyXG4gIH1cclxufVxyXG4iXX0=