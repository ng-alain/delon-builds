import { Component, Input, ViewChild, NgZone, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { toNumber, DelonUtilModule } from '@delon/util';
import { __spread } from 'tslib';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var COMPONENTS = [G2GaugeComponent];
var G2GaugeModule = /** @class */ (function () {
    function G2GaugeModule() {
    }
    /**
     * @return {?}
     */
    G2GaugeModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: G2GaugeModule, providers: [] };
    };
    G2GaugeModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, DelonUtilModule],
                    declarations: __spread(COMPONENTS),
                    exports: __spread(COMPONENTS),
                },] }
    ];
    return G2GaugeModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { G2GaugeComponent, G2GaugeModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F1Z2UuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BkZWxvbi9jaGFydC9nYXVnZS9nYXVnZS5jb21wb25lbnQudHMiLCJuZzovL0BkZWxvbi9jaGFydC9nYXVnZS9nYXVnZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgVmlld0NoaWxkLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgT25Jbml0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkNoYW5nZXMsXHJcbiAgTmdab25lLFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyB0b051bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcclxuXHJcbmRlY2xhcmUgdmFyIEcyOiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2cyLWdhdWdlJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgI2NvbnRhaW5lcj48L2Rpdj5gLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRzJHYXVnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xyXG4gIC8vICNyZWdpb24gZmllbGRzXHJcblxyXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IGhlaWdodCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9oZWlnaHQ7XHJcbiAgfVxyXG4gIHNldCBoZWlnaHQodmFsdWU6IGFueSkge1xyXG4gICAgdGhpcy5faGVpZ2h0ID0gdG9OdW1iZXIodmFsdWUpO1xyXG4gIH1cclxuICBwcml2YXRlIF9oZWlnaHQ7XHJcbiAgQElucHV0KCkgY29sb3IgPSAnIzJGOUNGRic7XHJcbiAgQElucHV0KCkgYmdDb2xvciA9ICcjRjBGMkY1JztcclxuICBASW5wdXQoKSBmb3JtYXQ6IEZ1bmN0aW9uO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBwZXJjZW50KHZhbHVlOiBhbnkpIHtcclxuICAgIHRoaXMuX3BlcmNlbnQgPSB0b051bWJlcih2YWx1ZSk7XHJcbiAgfVxyXG4gIHByaXZhdGUgX3BlcmNlbnQ6IG51bWJlcjtcclxuXHJcbiAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICBAVmlld0NoaWxkKCdjb250YWluZXInKSBwcml2YXRlIG5vZGU6IEVsZW1lbnRSZWY7XHJcblxyXG4gIHByaXZhdGUgY2hhcnQ6IGFueTtcclxuICBwcml2YXRlIGluaXRGbGFnID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgem9uZTogTmdab25lKSB7fVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZURhdGEoKSB7XHJcbiAgICByZXR1cm4gW3sgbmFtZTogdGhpcy50aXRsZSwgdmFsdWU6ICt0aGlzLl9wZXJjZW50IH1dO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkcmF3KCkge1xyXG4gICAgaWYgKCF0aGlzLmNoYXJ0KSByZXR1cm47XHJcbiAgICB0aGlzLmNoYXJ0Lmd1aWRlKCkuY2xlYXIoKTtcclxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNyZWF0ZURhdGEoKTtcclxuICAgIC8vIMOnwrvCmMOlwojCtsOkwrvCqsOowqHCqMOnwpvCmMOowoPCjMOmwpnCr1xyXG4gICAgdGhpcy5jaGFydC5ndWlkZSgpLmFyYyh7XHJcbiAgICAgIHpJbmRleDogMCxcclxuICAgICAgdG9wOiBmYWxzZSxcclxuICAgICAgc3RhcnQ6IFswLCAwLjk1XSxcclxuICAgICAgZW5kOiBbMTAwLCAwLjk1XSxcclxuICAgICAgc3R5bGU6IHtcclxuICAgICAgICAvLyDDpcK6wpXDp8KBwrDDqMKJwrJcclxuICAgICAgICBzdHJva2U6IHRoaXMuYmdDb2xvcixcclxuICAgICAgICBsaW5lV2lkdGg6IDEyLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICAvLyDDp8K7wpjDpcKIwrbDpsKMwofDpsKgwodcclxuICAgIHRoaXMuY2hhcnQuZ3VpZGUoKS5hcmMoe1xyXG4gICAgICB6SW5kZXg6IDEsXHJcbiAgICAgIHN0YXJ0OiBbMCwgMC45NV0sXHJcbiAgICAgIGVuZDogW2RhdGFbMF0udmFsdWUsIDAuOTVdLFxyXG4gICAgICBzdHlsZToge1xyXG4gICAgICAgIHN0cm9rZTogdGhpcy5jb2xvcixcclxuICAgICAgICBsaW5lV2lkdGg6IDEyLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICAvLyDDp8K7wpjDpcKIwrbDpsKVwrDDpcKtwpdcclxuICAgIHRoaXMuY2hhcnQuZ3VpZGUoKS5odG1sKHtcclxuICAgICAgcG9zaXRpb246IFsnNTAlJywgJzk1JSddLFxyXG4gICAgICBodG1sOiBgXHJcbiAgICAgIDxkaXYgc3R5bGU9XCJ3aWR0aDogMzAwcHg7dGV4dC1hbGlnbjogY2VudGVyO2ZvbnQtc2l6ZTogMTJweCFpbXBvcnRhbnQ7XCI+XHJcbiAgICAgICAgPHAgc3R5bGU9XCJmb250LXNpemU6IDE0cHg7IGNvbG9yOiByZ2JhKDAsMCwwLDAuNDMpO21hcmdpbjogMDtcIj4ke3RoaXMudGl0bGV9PC9wPlxyXG4gICAgICAgIDxwIHN0eWxlPVwiZm9udC1zaXplOiAyNHB4O2NvbG9yOiByZ2JhKDAsMCwwLDAuODUpO21hcmdpbjogMDtcIj5cclxuICAgICAgICAgICR7ZGF0YVswXS52YWx1ZX0lXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5gXHJcbiAgICB9KTtcclxuICAgIHRoaXMuY2hhcnQuY2hhbmdlRGF0YShkYXRhKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcnVuSW5zdGFsbCgpIHtcclxuICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5zdGFsbCgpKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluc3RhbGwoKSB7XHJcbiAgICB0aGlzLm5vZGUubmF0aXZlRWxlbWVudC5pbm5lckhUTUwgPSAnJztcclxuICAgIGNvbnN0IFNoYXBlID0gRzIuU2hhcGU7XHJcbiAgICAvLyDDqMKHwqrDpcKuwprDpMK5wolTaGFwZSDDqcKDwqjDpcKIwoZcclxuICAgIFNoYXBlLnJlZ2lzdGVyU2hhcGUoJ3BvaW50JywgJ3BvaW50ZXInLCB7XHJcbiAgICAgIGRyYXdTaGFwZShjZmcsIGdyb3VwKSB7XHJcbiAgICAgICAgbGV0IHBvaW50ID0gY2ZnLnBvaW50c1swXTsgLy8gw6jCjsK3w6XCj8KWw6fCrMKsw6TCuMKAw6TCuMKqw6bCoMKHw6jCrsKww6fCgsK5XHJcbiAgICAgICAgcG9pbnQgPSB0aGlzLnBhcnNlUG9pbnQocG9pbnQpO1xyXG4gICAgICAgIGNvbnN0IGNlbnRlciA9IHRoaXMucGFyc2VQb2ludCh7XHJcbiAgICAgICAgICAvLyDDqMKOwrfDpcKPwpbDpsKewoHDpcKdwpDDpsKgwofDp8KzwrvDpMK4wovDp8KUwrvDpcK4woPDpMK4wq3DpcK/woPDp8KCwrlcclxuICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICB5OiAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIMOnwrvCmMOlwojCtsOmwozCh8OpwpLCiFxyXG4gICAgICAgIGdyb3VwLmFkZFNoYXBlKCdsaW5lJywge1xyXG4gICAgICAgICAgYXR0cnM6IHtcclxuICAgICAgICAgICAgeDE6IGNlbnRlci54LFxyXG4gICAgICAgICAgICB5MTogY2VudGVyLnksXHJcbiAgICAgICAgICAgIHgyOiBwb2ludC54LFxyXG4gICAgICAgICAgICB5MjogcG9pbnQueSxcclxuICAgICAgICAgICAgc3Ryb2tlOiBjZmcuY29sb3IsXHJcbiAgICAgICAgICAgIGxpbmVXaWR0aDogMixcclxuICAgICAgICAgICAgbGluZUNhcDogJ3JvdW5kJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIGNvbnN0IHsgb3JpZ2luIH0gPSBjZmc7XHJcbiAgICAgICAgLy8gZ3JvdXAuYWRkU2hhcGUoJ3RleHQnLCB7XHJcbiAgICAgICAgLy8gICBhdHRyczoge1xyXG4gICAgICAgIC8vICAgICB4OiBjZW50ZXIueCxcclxuICAgICAgICAvLyAgICAgeTogY2VudGVyLnkgKyA4MCxcclxuICAgICAgICAvLyAgICAgdGV4dDogYCR7b3JpZ2luLl9vcmlnaW4udmFsdWV9JWAsXHJcbiAgICAgICAgLy8gICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgLy8gICAgIGZvbnRTaXplOiAyNCxcclxuICAgICAgICAvLyAgICAgZmlsbDogJ3JnYmEoMCwgMCwgMCwgMC44NSknLFxyXG4gICAgICAgIC8vICAgfSxcclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICByZXR1cm4gZ3JvdXAuYWRkU2hhcGUoJ2NpcmNsZScsIHtcclxuICAgICAgICAgIGF0dHJzOiB7XHJcbiAgICAgICAgICAgIHg6IGNlbnRlci54LFxyXG4gICAgICAgICAgICB5OiBjZW50ZXIueSxcclxuICAgICAgICAgICAgcjogOS43NSxcclxuICAgICAgICAgICAgc3Ryb2tlOiBjZmcuY29sb3IsXHJcbiAgICAgICAgICAgIGxpbmVXaWR0aDogMixcclxuICAgICAgICAgICAgZmlsbDogJyNmZmYnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNyZWF0ZURhdGEoKTtcclxuICAgIGNvbnN0IGNoYXJ0ID0gbmV3IEcyLkNoYXJ0KHtcclxuICAgICAgY29udGFpbmVyOiB0aGlzLm5vZGUubmF0aXZlRWxlbWVudCxcclxuICAgICAgZm9yY2VGaXQ6IHRydWUsXHJcbiAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXHJcbiAgICAgIHBhZGRpbmc6IFsxMCwgMTAsIDMwLCAxMF0sXHJcbiAgICB9KTtcclxuICAgIGNoYXJ0LnNvdXJjZShkYXRhKTtcclxuXHJcbiAgICBjaGFydC5jb29yZCgncG9sYXInLCB7XHJcbiAgICAgIHN0YXJ0QW5nbGU6IC0xLjIgKiBNYXRoLlBJLFxyXG4gICAgICBlbmRBbmdsZTogMC4yICogTWF0aC5QSSxcclxuICAgIH0pO1xyXG4gICAgY2hhcnQuc2NhbGUoJ3ZhbHVlJywge1xyXG4gICAgICBtaW46IDAsXHJcbiAgICAgIG1heDogMTAwLFxyXG4gICAgICBuaWNlOiB0cnVlLFxyXG4gICAgICB0aWNrQ291bnQ6IDYsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjaGFydC5heGlzKCcxJywgZmFsc2UpO1xyXG4gICAgLy8gw6XCiMK7w6XCusKmw6XCgMK8XHJcbiAgICBjaGFydC5heGlzKCd2YWx1ZScsIHtcclxuICAgICAgekluZGV4OiAyLFxyXG4gICAgICBsaW5lOiBudWxsLFxyXG4gICAgICBsYWJlbDoge1xyXG4gICAgICAgIG9mZnNldDogLTEyLFxyXG4gICAgICAgIGZvcm1hdHRlcjogdGhpcy5mb3JtYXQsXHJcbiAgICAgIH0sXHJcbiAgICAgIHRpY2tMaW5lOiBudWxsLFxyXG4gICAgICBncmlkOiBudWxsLFxyXG4gICAgfSk7XHJcbiAgICBjaGFydC5sZWdlbmQoZmFsc2UpO1xyXG4gICAgY2hhcnRcclxuICAgICAgLnBvaW50KHtcclxuICAgICAgICBnZW5lcmF0ZVBvaW50czogdHJ1ZSxcclxuICAgICAgfSlcclxuICAgICAgLnBvc2l0aW9uKCd2YWx1ZSoxJylcclxuICAgICAgLnNoYXBlKCdwb2ludGVyJylcclxuICAgICAgLmNvbG9yKHRoaXMuY29sb3IpXHJcbiAgICAgIC5hY3RpdmUoZmFsc2UpO1xyXG5cclxuICAgIHRoaXMuY2hhcnQgPSBjaGFydDtcclxuICAgIHRoaXMuZHJhdygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmluaXRGbGFnID0gdHJ1ZTtcclxuICAgIHRoaXMucnVuSW5zdGFsbCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pbml0RmxhZykgdGhpcy5kcmF3KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmNoYXJ0KSB0aGlzLmNoYXJ0LmRlc3Ryb3koKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRGVsb25VdGlsTW9kdWxlIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xyXG5cclxuaW1wb3J0IHsgRzJHYXVnZUNvbXBvbmVudCB9IGZyb20gJy4vZ2F1Z2UuY29tcG9uZW50JztcclxuXHJcbmNvbnN0IENPTVBPTkVOVFMgPSBbRzJHYXVnZUNvbXBvbmVudF07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIERlbG9uVXRpbE1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbLi4uQ09NUE9ORU5UU10sXHJcbiAgZXhwb3J0czogWy4uLkNPTVBPTkVOVFNdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRzJHYXVnZU1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4geyBuZ01vZHVsZTogRzJHYXVnZU1vZHVsZSwgcHJvdmlkZXJzOiBbXSB9O1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7SUFrREUsMEJBQW9CLElBQVk7UUFBWixTQUFJLEdBQUosSUFBSSxDQUFRO3FCQWpCZixTQUFTO3VCQUNQLFNBQVM7d0JBY1QsS0FBSztLQUVZO0lBekJwQyxzQkFDSSxvQ0FBTTs7OztRQURWO1lBRUUsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3JCOzs7OztRQUNELFVB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