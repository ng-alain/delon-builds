/**
 * @fileoverview added by tsickle
 * Generated from: gauge.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, NgZone, ViewEncapsulation, } from '@angular/core';
import { Chart, registerShape } from '@antv/g2';
import { AlainConfigService, InputNumber } from '@delon/util';
export class G2GaugeComponent {
    // #endregion
    /**
     * @param {?} el
     * @param {?} ngZone
     * @param {?} configSrv
     */
    constructor(el, ngZone, configSrv) {
        this.el = el;
        this.ngZone = ngZone;
        // #region fields
        this.delay = 0;
        this.padding = [10, 10, 30, 10];
        configSrv.attachKey(this, 'chart', 'theme');
    }
    /**
     * @private
     * @return {?}
     */
    install() {
        // 自定义Shape 部分
        registerShape('point', 'pointer', {
            /**
             * @param {?} cfg
             * @param {?} container
             * @return {?}
             */
            draw(cfg, container) {
                /** @type {?} */
                const group = container.addGroup({});
                // 获取极坐标系下画布中心点
                /** @type {?} */
                const center = ((/** @type {?} */ (this))).parsePoint({ x: 0, y: 0 });
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
                group.addShape('circle', {
                    attrs: {
                        x: center.x,
                        y: center.y,
                        r: 5.75,
                        stroke: cfg.color,
                        lineWidth: 2,
                        fill: '#fff',
                    },
                });
                return group;
            },
        });
        const { el, height, padding, format, theme } = this;
        /** @type {?} */
        const chart = (this.chart = new Chart({
            container: el.nativeElement,
            autoFit: true,
            height,
            padding,
            theme,
        }));
        chart.legend(false);
        chart.animate(false);
        chart.tooltip(false);
        chart.coordinate('polar', {
            startAngle: (-9 / 8) * Math.PI,
            endAngle: (1 / 8) * Math.PI,
            radius: 0.75,
        });
        chart.scale('value', {
            min: 0,
            max: 100,
            nice: true,
            tickCount: 6,
        });
        chart.axis('1', false);
        chart.axis('value', {
            line: null,
            label: {
                offset: -12,
                formatter: format,
            },
            tickLine: null,
            grid: null,
        });
        chart.point().position('value*1').shape('pointer');
        this.attachChart();
    }
    /**
     * @private
     * @return {?}
     */
    attachChart() {
        const { chart, percent, color, bgColor, title } = this;
        if (!chart)
            return;
        /** @type {?} */
        const data = [{ name: title, value: percent }];
        /** @type {?} */
        const val = data[0].value;
        chart.annotation().clear(true);
        if (color) {
            chart.geometries[0].color(color);
        }
        // 绘制仪表盘背景
        chart.annotation().arc({
            top: false,
            start: [0, 0.95],
            end: [100, 0.95],
            style: {
                stroke: bgColor,
                lineWidth: 12,
                lineDash: null,
            },
        });
        chart.annotation().arc({
            start: [0, 0.95],
            end: [data[0].value, 0.95],
            style: {
                stroke: color,
                lineWidth: 12,
                lineDash: null,
            },
        });
        // 绘制指标数字
        chart.annotation().text({
            position: ['50%', '85%'],
            content: title,
            style: {
                fontSize: 12,
                fill: 'rgba(0, 0, 0, 0.43)',
                textAlign: 'center',
            },
        });
        chart.annotation().text({
            position: ['50%', '90%'],
            content: `${val} %`,
            style: {
                fontSize: 24,
                fill: 'rgba(0, 0, 0, 0.85)',
                textAlign: 'center',
            },
            offsetY: 15,
        });
        chart.changeData(data);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => setTimeout((/**
         * @return {?}
         */
        () => this.install()), this.delay)));
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => this.attachChart()));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.chart) {
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => this.chart.destroy()));
        }
    }
}
G2GaugeComponent.decorators = [
    { type: Component, args: [{
                selector: 'g2-gauge',
                exportAs: 'g2Gauge',
                template: ``,
                host: {
                    '[class.g2-gauge]': 'true',
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
G2GaugeComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone },
    { type: AlainConfigService }
];
G2GaugeComponent.propDecorators = {
    delay: [{ type: Input }],
    title: [{ type: Input }],
    height: [{ type: Input }],
    color: [{ type: Input }],
    bgColor: [{ type: Input }],
    format: [{ type: Input }],
    percent: [{ type: Input }],
    padding: [{ type: Input }],
    theme: [{ type: Input }]
};
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2GaugeComponent.prototype, "delay", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], G2GaugeComponent.prototype, "height", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], G2GaugeComponent.prototype, "percent", void 0);
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
    /** @type {?} */
    G2GaugeComponent.prototype.theme;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F1Z2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NoYXJ0L2dhdWdlLyIsInNvdXJjZXMiOlsiZ2F1Z2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUlOLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBUyxNQUFNLFVBQVUsQ0FBQztBQUN2RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBYzlELE1BQU0sT0FBTyxnQkFBZ0I7Ozs7Ozs7SUFpQjNCLFlBQW9CLEVBQWMsRUFBVSxNQUFjLEVBQUUsU0FBNkI7UUFBckUsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7O1FBWmxDLFVBQUssR0FBRyxDQUFDLENBQUM7UUFPekIsWUFBTyxHQUErQixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBTTlELFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7OztJQUVPLE9BQU87UUFDYixjQUFjO1FBQ2QsYUFBYSxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUU7Ozs7OztZQUNoQyxJQUFJLENBQUMsR0FBRyxFQUFFLFNBQVM7O3NCQUNYLEtBQUssR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQzs7O3NCQUU5QixNQUFNLEdBQUcsQ0FBQyxtQkFBQSxJQUFJLEVBQWEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO2dCQUM3RCxPQUFPO2dCQUNQLEtB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WUF0QkMsVUFBVTtZQUVWLE1BQU07WUFPQyxrQkFBa0I7OztvQkFtQnhCLEtBQUs7b0JBQ0wsS0FBSztxQkFDTCxLQUFLO29CQUNMLEtBQUs7c0JBQ0wsS0FBSztxQkFDTCxLQUFLO3NCQUNMLEtBQUs7c0JBQ0wsS0FBSztvQkFDTCxLQUFLOztBQVJrQjtJQUFkLFdBQVcsRUFBRTs7K0NBQVc7QUFFVjtJQUFkLFdBQVcsRUFBRTs7Z0RBQWdCO0FBSWY7SUFBZCxXQUFXLEVBQUU7O2lEQUFpQjs7Ozs7O0lBVnhDLGlDQUFxQjs7SUFJckIsaUNBQWtDOztJQUNsQyxpQ0FBdUI7O0lBQ3ZCLGtDQUF1Qzs7SUFDdkMsaUNBQXVCOztJQUN2QixtQ0FBeUI7O0lBQ3pCLGtDQUFtRTs7SUFDbkUsbUNBQXdDOztJQUN4QyxtQ0FBZ0U7O0lBQ2hFLGlDQUEyQzs7Ozs7SUFJL0IsOEJBQXNCOzs7OztJQUFFLGtDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENoYXJ0LCByZWdpc3RlclNoYXBlLCBUeXBlcyB9IGZyb20gJ0BhbnR2L2cyJztcbmltcG9ydCB7IEFsYWluQ29uZmlnU2VydmljZSwgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnMi1nYXVnZScsXG4gIGV4cG9ydEFzOiAnZzJHYXVnZScsXG4gIHRlbXBsYXRlOiBgYCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuZzItZ2F1Z2VdJzogJ3RydWUnLFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIEcyR2F1Z2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgcHJpdmF0ZSBjaGFydDogQ2hhcnQ7XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBkZWxheSA9IDA7XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGhlaWdodDogbnVtYmVyO1xuICBASW5wdXQoKSBjb2xvcjogc3RyaW5nOyAvLyA9ICcjMmY5Y2ZmJztcbiAgQElucHV0KCkgYmdDb2xvcjogc3RyaW5nOyAvLyA9ICcjZjBmMmY1JztcbiAgQElucHV0KCkgZm9ybWF0OiAodGV4dDogc3RyaW5nLCBpdGVtOiB7fSwgaW5kZXg6IG51bWJlcikgPT4gc3RyaW5nO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBwZXJjZW50OiBudW1iZXI7XG4gIEBJbnB1dCgpIHBhZGRpbmc6IG51bWJlciB8IG51bWJlcltdIHwgJ2F1dG8nID0gWzEwLCAxMCwgMzAsIDEwXTtcbiAgQElucHV0KCkgdGhlbWU6IHN0cmluZyB8IFR5cGVzLkxvb3NlT2JqZWN0O1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIG5nWm9uZTogTmdab25lLCBjb25maWdTcnY6IEFsYWluQ29uZmlnU2VydmljZSkge1xuICAgIGNvbmZpZ1Nydi5hdHRhY2hLZXkodGhpcywgJ2NoYXJ0JywgJ3RoZW1lJyk7XG4gIH1cblxuICBwcml2YXRlIGluc3RhbGwoKSB7XG4gICAgLy8g6Ieq5a6a5LmJU2hhcGUg6YOo5YiGXG4gICAgcmVnaXN0ZXJTaGFwZSgncG9pbnQnLCAncG9pbnRlcicsIHtcbiAgICAgIGRyYXcoY2ZnLCBjb250YWluZXIpIHtcbiAgICAgICAgY29uc3QgZ3JvdXAgPSBjb250YWluZXIuYWRkR3JvdXAoe30pO1xuICAgICAgICAvLyDojrflj5bmnoHlnZDmoIfns7vkuIvnlLvluIPkuK3lv4PngrlcbiAgICAgICAgY29uc3QgY2VudGVyID0gKHRoaXMgYXMgTnpTYWZlQW55KS5wYXJzZVBvaW50KHsgeDogMCwgeTogMCB9KTtcbiAgICAgICAgLy8g57uY5Yi25oyH6ZKIXG4gICAgICAgIGdyb3VwLmFkZFNoYXBlKCdsaW5lJywge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICB4MTogY2VudGVyLngsXG4gICAgICAgICAgICB5MTogY2VudGVyLnksXG4gICAgICAgICAgICB4MjogY2ZnLngsXG4gICAgICAgICAgICB5MjogY2ZnLnksXG4gICAgICAgICAgICBzdHJva2U6IGNmZy5jb2xvcixcbiAgICAgICAgICAgIGxpbmVXaWR0aDogMi41LFxuICAgICAgICAgICAgbGluZUNhcDogJ3JvdW5kJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgZ3JvdXAuYWRkU2hhcGUoJ2NpcmNsZScsIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgeDogY2VudGVyLngsXG4gICAgICAgICAgICB5OiBjZW50ZXIueSxcbiAgICAgICAgICAgIHI6IDUuNzUsXG4gICAgICAgICAgICBzdHJva2U6IGNmZy5jb2xvcixcbiAgICAgICAgICAgIGxpbmVXaWR0aDogMixcbiAgICAgICAgICAgIGZpbGw6ICcjZmZmJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGdyb3VwO1xuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHsgZWwsIGhlaWdodCwgcGFkZGluZywgZm9ybWF0LCB0aGVtZSB9ID0gdGhpcztcblxuICAgIGNvbnN0IGNoYXJ0ID0gKHRoaXMuY2hhcnQgPSBuZXcgQ2hhcnQoe1xuICAgICAgY29udGFpbmVyOiBlbC5uYXRpdmVFbGVtZW50LFxuICAgICAgYXV0b0ZpdDogdHJ1ZSxcbiAgICAgIGhlaWdodCxcbiAgICAgIHBhZGRpbmcsXG4gICAgICB0aGVtZSxcbiAgICB9KSk7XG4gICAgY2hhcnQubGVnZW5kKGZhbHNlKTtcbiAgICBjaGFydC5hbmltYXRlKGZhbHNlKTtcbiAgICBjaGFydC50b29sdGlwKGZhbHNlKTtcbiAgICBjaGFydC5jb29yZGluYXRlKCdwb2xhcicsIHtcbiAgICAgIHN0YXJ0QW5nbGU6ICgtOSAvIDgpICogTWF0aC5QSSxcbiAgICAgIGVuZEFuZ2xlOiAoMSAvIDgpICogTWF0aC5QSSxcbiAgICAgIHJhZGl1czogMC43NSxcbiAgICB9KTtcbiAgICBjaGFydC5zY2FsZSgndmFsdWUnLCB7XG4gICAgICBtaW46IDAsXG4gICAgICBtYXg6IDEwMCxcbiAgICAgIG5pY2U6IHRydWUsXG4gICAgICB0aWNrQ291bnQ6IDYsXG4gICAgfSk7XG4gICAgY2hhcnQuYXhpcygnMScsIGZhbHNlKTtcbiAgICBjaGFydC5heGlzKCd2YWx1ZScsIHtcbiAgICAgIGxpbmU6IG51bGwsXG4gICAgICBsYWJlbDoge1xuICAgICAgICBvZmZzZXQ6IC0xMixcbiAgICAgICAgZm9ybWF0dGVyOiBmb3JtYXQsXG4gICAgICB9LFxuICAgICAgdGlja0xpbmU6IG51bGwsXG4gICAgICBncmlkOiBudWxsLFxuICAgIH0pO1xuICAgIGNoYXJ0LnBvaW50KCkucG9zaXRpb24oJ3ZhbHVlKjEnKS5zaGFwZSgncG9pbnRlcicpO1xuXG4gICAgdGhpcy5hdHRhY2hDaGFydCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBhdHRhY2hDaGFydCgpIHtcbiAgICBjb25zdCB7IGNoYXJ0LCBwZXJjZW50LCBjb2xvciwgYmdDb2xvciwgdGl0bGUgfSA9IHRoaXM7XG4gICAgaWYgKCFjaGFydCkgcmV0dXJuO1xuXG4gICAgY29uc3QgZGF0YSA9IFt7IG5hbWU6IHRpdGxlLCB2YWx1ZTogcGVyY2VudCB9XTtcbiAgICBjb25zdCB2YWwgPSBkYXRhWzBdLnZhbHVlO1xuICAgIGNoYXJ0LmFubm90YXRpb24oKS5jbGVhcih0cnVlKTtcbiAgICBpZiAoY29sb3IpIHtcbiAgICAgIGNoYXJ0Lmdlb21ldHJpZXNbMF0uY29sb3IoY29sb3IpO1xuICAgIH1cbiAgICAvLyDnu5jliLbku6rooajnm5jog4zmma9cbiAgICBjaGFydC5hbm5vdGF0aW9uKCkuYXJjKHtcbiAgICAgIHRvcDogZmFsc2UsXG4gICAgICBzdGFydDogWzAsIDAuOTVdLFxuICAgICAgZW5kOiBbMTAwLCAwLjk1XSxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIHN0cm9rZTogYmdDb2xvcixcbiAgICAgICAgbGluZVdpZHRoOiAxMixcbiAgICAgICAgbGluZURhc2g6IG51bGwsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGNoYXJ0LmFubm90YXRpb24oKS5hcmMoe1xuICAgICAgc3RhcnQ6IFswLCAwLjk1XSxcbiAgICAgIGVuZDogW2RhdGFbMF0udmFsdWUsIDAuOTVdLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgc3Ryb2tlOiBjb2xvcixcbiAgICAgICAgbGluZVdpZHRoOiAxMixcbiAgICAgICAgbGluZURhc2g6IG51bGwsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgLy8g57uY5Yi25oyH5qCH5pWw5a2XXG4gICAgY2hhcnQuYW5ub3RhdGlvbigpLnRleHQoe1xuICAgICAgcG9zaXRpb246IFsnNTAlJywgJzg1JSddLFxuICAgICAgY29udGVudDogdGl0bGUsXG4gICAgICBzdHlsZToge1xuICAgICAgICBmb250U2l6ZTogMTIsXG4gICAgICAgIGZpbGw6ICdyZ2JhKDAsIDAsIDAsIDAuNDMpJyxcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgY2hhcnQuYW5ub3RhdGlvbigpLnRleHQoe1xuICAgICAgcG9zaXRpb246IFsnNTAlJywgJzkwJSddLFxuICAgICAgY29udGVudDogYCR7dmFsfSAlYCxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGZvbnRTaXplOiAyNCxcbiAgICAgICAgZmlsbDogJ3JnYmEoMCwgMCwgMCwgMC44NSknLFxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgfSxcbiAgICAgIG9mZnNldFk6IDE1LFxuICAgIH0pO1xuXG4gICAgY2hhcnQuY2hhbmdlRGF0YShkYXRhKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbnN0YWxsKCksIHRoaXMuZGVsYXkpKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuYXR0YWNoQ2hhcnQoKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jaGFydCkge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5jaGFydC5kZXN0cm95KCkpO1xuICAgIH1cbiAgfVxufVxuIl19