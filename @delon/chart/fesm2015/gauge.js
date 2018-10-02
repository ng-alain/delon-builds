import { Component, Input, ViewChild, NgZone, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { toNumber, DelonUtilModule } from '@delon/util';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class G2GaugeComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [G2GaugeComponent];
class G2GaugeModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: G2GaugeModule, providers: [] };
    }
}
G2GaugeModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, DelonUtilModule],
                declarations: [...COMPONENTS],
                exports: [...COMPONENTS],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { G2GaugeComponent, G2GaugeModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F1Z2UuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BkZWxvbi9jaGFydC9nYXVnZS9nYXVnZS5jb21wb25lbnQudHMiLCJuZzovL0BkZWxvbi9jaGFydC9nYXVnZS9nYXVnZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgVmlld0NoaWxkLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgT25Jbml0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkNoYW5nZXMsXHJcbiAgTmdab25lLFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyB0b051bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcclxuXHJcbmRlY2xhcmUgdmFyIEcyOiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2cyLWdhdWdlJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgI2NvbnRhaW5lcj48L2Rpdj5gLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRzJHYXVnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xyXG4gIC8vICNyZWdpb24gZmllbGRzXHJcblxyXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IGhlaWdodCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9oZWlnaHQ7XHJcbiAgfVxyXG4gIHNldCBoZWlnaHQodmFsdWU6IGFueSkge1xyXG4gICAgdGhpcy5faGVpZ2h0ID0gdG9OdW1iZXIodmFsdWUpO1xyXG4gIH1cclxuICBwcml2YXRlIF9oZWlnaHQ7XHJcbiAgQElucHV0KCkgY29sb3IgPSAnIzJGOUNGRic7XHJcbiAgQElucHV0KCkgYmdDb2xvciA9ICcjRjBGMkY1JztcclxuICBASW5wdXQoKSBmb3JtYXQ6IEZ1bmN0aW9uO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBwZXJjZW50KHZhbHVlOiBhbnkpIHtcclxuICAgIHRoaXMuX3BlcmNlbnQgPSB0b051bWJlcih2YWx1ZSk7XHJcbiAgfVxyXG4gIHByaXZhdGUgX3BlcmNlbnQ6IG51bWJlcjtcclxuXHJcbiAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICBAVmlld0NoaWxkKCdjb250YWluZXInKSBwcml2YXRlIG5vZGU6IEVsZW1lbnRSZWY7XHJcblxyXG4gIHByaXZhdGUgY2hhcnQ6IGFueTtcclxuICBwcml2YXRlIGluaXRGbGFnID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgem9uZTogTmdab25lKSB7fVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZURhdGEoKSB7XHJcbiAgICByZXR1cm4gW3sgbmFtZTogdGhpcy50aXRsZSwgdmFsdWU6ICt0aGlzLl9wZXJjZW50IH1dO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkcmF3KCkge1xyXG4gICAgaWYgKCF0aGlzLmNoYXJ0KSByZXR1cm47XHJcbiAgICB0aGlzLmNoYXJ0Lmd1aWRlKCkuY2xlYXIoKTtcclxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNyZWF0ZURhdGEoKTtcclxuICAgIC8vIMOnwrvCmMOlwojCtsOkwrvCqsOowqHCqMOnwpvCmMOowoPCjMOmwpnCr1xyXG4gICAgdGhpcy5jaGFydC5ndWlkZSgpLmFyYyh7XHJcbiAgICAgIHpJbmRleDogMCxcclxuICAgICAgdG9wOiBmYWxzZSxcclxuICAgICAgc3RhcnQ6IFswLCAwLjk1XSxcclxuICAgICAgZW5kOiBbMTAwLCAwLjk1XSxcclxuICAgICAgc3R5bGU6IHtcclxuICAgICAgICAvLyDDpcK6wpXDp8KBwrDDqMKJwrJcclxuICAgICAgICBzdHJva2U6IHRoaXMuYmdDb2xvcixcclxuICAgICAgICBsaW5lV2lkdGg6IDEyLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICAvLyDDp8K7wpjDpcKIwrbDpsKMwofDpsKgwodcclxuICAgIHRoaXMuY2hhcnQuZ3VpZGUoKS5hcmMoe1xyXG4gICAgICB6SW5kZXg6IDEsXHJcbiAgICAgIHN0YXJ0OiBbMCwgMC45NV0sXHJcbiAgICAgIGVuZDogW2RhdGFbMF0udmFsdWUsIDAuOTVdLFxyXG4gICAgICBzdHlsZToge1xyXG4gICAgICAgIHN0cm9rZTogdGhpcy5jb2xvcixcclxuICAgICAgICBsaW5lV2lkdGg6IDEyLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICAvLyDDp8K7wpjDpcKIwrbDpsKVwrDDpcKtwpdcclxuICAgIHRoaXMuY2hhcnQuZ3VpZGUoKS5odG1sKHtcclxuICAgICAgcG9zaXRpb246IFsnNTAlJywgJzk1JSddLFxyXG4gICAgICBodG1sOiBgXHJcbiAgICAgIDxkaXYgc3R5bGU9XCJ3aWR0aDogMzAwcHg7dGV4dC1hbGlnbjogY2VudGVyO2ZvbnQtc2l6ZTogMTJweCFpbXBvcnRhbnQ7XCI+XHJcbiAgICAgICAgPHAgc3R5bGU9XCJmb250LXNpemU6IDE0cHg7IGNvbG9yOiByZ2JhKDAsMCwwLDAuNDMpO21hcmdpbjogMDtcIj4ke3RoaXMudGl0bGV9PC9wPlxyXG4gICAgICAgIDxwIHN0eWxlPVwiZm9udC1zaXplOiAyNHB4O2NvbG9yOiByZ2JhKDAsMCwwLDAuODUpO21hcmdpbjogMDtcIj5cclxuICAgICAgICAgICR7ZGF0YVswXS52YWx1ZX0lXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5gXHJcbiAgICB9KTtcclxuICAgIHRoaXMuY2hhcnQuY2hhbmdlRGF0YShkYXRhKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcnVuSW5zdGFsbCgpIHtcclxuICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5zdGFsbCgpKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluc3RhbGwoKSB7XHJcbiAgICB0aGlzLm5vZGUubmF0aXZlRWxlbWVudC5pbm5lckhUTUwgPSAnJztcclxuICAgIGNvbnN0IFNoYXBlID0gRzIuU2hhcGU7XHJcbiAgICAvLyDDqMKHwqrDpcKuwprDpMK5wolTaGFwZSDDqcKDwqjDpcKIwoZcclxuICAgIFNoYXBlLnJlZ2lzdGVyU2hhcGUoJ3BvaW50JywgJ3BvaW50ZXInLCB7XHJcbiAgICAgIGRyYXdTaGFwZShjZmcsIGdyb3VwKSB7XHJcbiAgICAgICAgbGV0IHBvaW50ID0gY2ZnLnBvaW50c1swXTsgLy8gw6jCjsK3w6XCj8KWw6fCrMKsw6TCuMKAw6TCuMKqw6bCoMKHw6jCrsKww6fCgsK5XHJcbiAgICAgICAgcG9pbnQgPSB0aGlzLnBhcnNlUG9pbnQocG9pbnQpO1xyXG4gICAgICAgIGNvbnN0IGNlbnRlciA9IHRoaXMucGFyc2VQb2ludCh7XHJcbiAgICAgICAgICAvLyDDqMKOwrfDpcKPwpbDpsKewoHDpcKdwpDDpsKgwofDp8KzwrvDpMK4wovDp8KUwrvDpcK4woPDpMK4wq3DpcK/woPDp8KCwrlcclxuICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICB5OiAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIMOnwrvCmMOlwojCtsOmwozCh8OpwpLCiFxyXG4gICAgICAgIGdyb3VwLmFkZFNoYXBlKCdsaW5lJywge1xyXG4gICAgICAgICAgYXR0cnM6IHtcclxuICAgICAgICAgICAgeDE6IGNlbnRlci54LFxyXG4gICAgICAgICAgICB5MTogY2VudGVyLnksXHJcbiAgICAgICAgICAgIHgyOiBwb2ludC54LFxyXG4gICAgICAgICAgICB5MjogcG9pbnQueSxcclxuICAgICAgICAgICAgc3Ryb2tlOiBjZmcuY29sb3IsXHJcbiAgICAgICAgICAgIGxpbmVXaWR0aDogMixcclxuICAgICAgICAgICAgbGluZUNhcDogJ3JvdW5kJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIGNvbnN0IHsgb3JpZ2luIH0gPSBjZmc7XHJcbiAgICAgICAgLy8gZ3JvdXAuYWRkU2hhcGUoJ3RleHQnLCB7XHJcbiAgICAgICAgLy8gICBhdHRyczoge1xyXG4gICAgICAgIC8vICAgICB4OiBjZW50ZXIueCxcclxuICAgICAgICAvLyAgICAgeTogY2VudGVyLnkgKyA4MCxcclxuICAgICAgICAvLyAgICAgdGV4dDogYCR7b3JpZ2luLl9vcmlnaW4udmFsdWV9JWAsXHJcbiAgICAgICAgLy8gICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgLy8gICAgIGZvbnRTaXplOiAyNCxcclxuICAgICAgICAvLyAgICAgZmlsbDogJ3JnYmEoMCwgMCwgMCwgMC44NSknLFxyXG4gICAgICAgIC8vICAgfSxcclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICByZXR1cm4gZ3JvdXAuYWRkU2hhcGUoJ2NpcmNsZScsIHtcclxuICAgICAgICAgIGF0dHJzOiB7XHJcbiAgICAgICAgICAgIHg6IGNlbnRlci54LFxyXG4gICAgICAgICAgICB5OiBjZW50ZXIueSxcclxuICAgICAgICAgICAgcjogOS43NSxcclxuICAgICAgICAgICAgc3Ryb2tlOiBjZmcuY29sb3IsXHJcbiAgICAgICAgICAgIGxpbmVXaWR0aDogMixcclxuICAgICAgICAgICAgZmlsbDogJyNmZmYnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNyZWF0ZURhdGEoKTtcclxuICAgIGNvbnN0IGNoYXJ0ID0gbmV3IEcyLkNoYXJ0KHtcclxuICAgICAgY29udGFpbmVyOiB0aGlzLm5vZGUubmF0aXZlRWxlbWVudCxcclxuICAgICAgZm9yY2VGaXQ6IHRydWUsXHJcbiAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXHJcbiAgICAgIHBhZGRpbmc6IFsxMCwgMTAsIDMwLCAxMF0sXHJcbiAgICB9KTtcclxuICAgIGNoYXJ0LnNvdXJjZShkYXRhKTtcclxuXHJcbiAgICBjaGFydC5jb29yZCgncG9sYXInLCB7XHJcbiAgICAgIHN0YXJ0QW5nbGU6IC0xLjIgKiBNYXRoLlBJLFxyXG4gICAgICBlbmRBbmdsZTogMC4yICogTWF0aC5QSSxcclxuICAgIH0pO1xyXG4gICAgY2hhcnQuc2NhbGUoJ3ZhbHVlJywge1xyXG4gICAgICBtaW46IDAsXHJcbiAgICAgIG1heDogMTAwLFxyXG4gICAgICBuaWNlOiB0cnVlLFxyXG4gICAgICB0aWNrQ291bnQ6IDYsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjaGFydC5heGlzKCcxJywgZmFsc2UpO1xyXG4gICAgLy8gw6XCiMK7w6XCusKmw6XCgMK8XHJcbiAgICBjaGFydC5heGlzKCd2YWx1ZScsIHtcclxuICAgICAgekluZGV4OiAyLFxyXG4gICAgICBsaW5lOiBudWxsLFxyXG4gICAgICBsYWJlbDoge1xyXG4gICAgICAgIG9mZnNldDogLTEyLFxyXG4gICAgICAgIGZvcm1hdHRlcjogdGhpcy5mb3JtYXQsXHJcbiAgICAgIH0sXHJcbiAgICAgIHRpY2tMaW5lOiBudWxsLFxyXG4gICAgICBncmlkOiBudWxsLFxyXG4gICAgfSk7XHJcbiAgICBjaGFydC5sZWdlbmQoZmFsc2UpO1xyXG4gICAgY2hhcnRcclxuICAgICAgLnBvaW50KHtcclxuICAgICAgICBnZW5lcmF0ZVBvaW50czogdHJ1ZSxcclxuICAgICAgfSlcclxuICAgICAgLnBvc2l0aW9uKCd2YWx1ZSoxJylcclxuICAgICAgLnNoYXBlKCdwb2ludGVyJylcclxuICAgICAgLmNvbG9yKHRoaXMuY29sb3IpXHJcbiAgICAgIC5hY3RpdmUoZmFsc2UpO1xyXG5cclxuICAgIHRoaXMuY2hhcnQgPSBjaGFydDtcclxuICAgIHRoaXMuZHJhdygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmluaXRGbGFnID0gdHJ1ZTtcclxuICAgIHRoaXMucnVuSW5zdGFsbCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pbml0RmxhZykgdGhpcy5kcmF3KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmNoYXJ0KSB0aGlzLmNoYXJ0LmRlc3Ryb3koKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRGVsb25VdGlsTW9kdWxlIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xyXG5cclxuaW1wb3J0IHsgRzJHYXVnZUNvbXBvbmVudCB9IGZyb20gJy4vZ2F1Z2UuY29tcG9uZW50JztcclxuXHJcbmNvbnN0IENPTVBPTkVOVFMgPSBbRzJHYXVnZUNvbXBvbmVudF07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIERlbG9uVXRpbE1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbLi4uQ09NUE9ORU5UU10sXHJcbiAgZXhwb3J0czogWy4uLkNPTVBPTkVOVFNdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRzJHYXVnZU1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4geyBuZ01vZHVsZTogRzJHYXVnZU1vZHVsZSwgcHJvdmlkZXJzOiBbXSB9O1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztJQWtERSxZQUFvQixJQUFZO1FBQVosU0FBSSxHQUFKLElBQUksQ0FBUTtxQkFqQmYsU0FBUzt1QkFDUCxTQUFTO3dCQWNULEtBQUs7S0FFWTs7OztJQXpCcEMsSUFDSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0tBQ3JCOzs7OztJQUNELElBQUksTUFB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