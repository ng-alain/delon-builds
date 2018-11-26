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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F1Z2UuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BkZWxvbi9jaGFydC9nYXVnZS9nYXVnZS5jb21wb25lbnQudHMiLCJuZzovL0BkZWxvbi9jaGFydC9nYXVnZS9nYXVnZS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgVmlld0NoaWxkLFxuICBFbGVtZW50UmVmLFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgT25DaGFuZ2VzLFxuICBOZ1pvbmUsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRvTnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5kZWNsYXJlIHZhciBHMjogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnMi1nYXVnZScsXG4gIHRlbXBsYXRlOiBgPGRpdiAjY29udGFpbmVyPjwvZGl2PmAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBHMkdhdWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBnZXQgaGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLl9oZWlnaHQ7XG4gIH1cbiAgc2V0IGhlaWdodCh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5faGVpZ2h0ID0gdG9OdW1iZXIodmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX2hlaWdodDtcbiAgQElucHV0KCkgY29sb3IgPSAnIzJGOUNGRic7XG4gIEBJbnB1dCgpIGJnQ29sb3IgPSAnI0YwRjJGNSc7XG4gIEBJbnB1dCgpIGZvcm1hdDogRnVuY3Rpb247XG5cbiAgQElucHV0KClcbiAgc2V0IHBlcmNlbnQodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX3BlcmNlbnQgPSB0b051bWJlcih2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfcGVyY2VudDogbnVtYmVyO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBAVmlld0NoaWxkKCdjb250YWluZXInKSBwcml2YXRlIG5vZGU6IEVsZW1lbnRSZWY7XG5cbiAgcHJpdmF0ZSBjaGFydDogYW55O1xuICBwcml2YXRlIGluaXRGbGFnID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB6b25lOiBOZ1pvbmUpIHt9XG5cbiAgcHJpdmF0ZSBjcmVhdGVEYXRhKCkge1xuICAgIHJldHVybiBbeyBuYW1lOiB0aGlzLnRpdGxlLCB2YWx1ZTogK3RoaXMuX3BlcmNlbnQgfV07XG4gIH1cblxuICBwcml2YXRlIGRyYXcoKSB7XG4gICAgaWYgKCF0aGlzLmNoYXJ0KSByZXR1cm47XG4gICAgdGhpcy5jaGFydC5ndWlkZSgpLmNsZWFyKCk7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuY3JlYXRlRGF0YSgpO1xuICAgIC8vIMOnwrvCmMOlwojCtsOkwrvCqsOowqHCqMOnwpvCmMOowoPCjMOmwpnCr1xuICAgIHRoaXMuY2hhcnQuZ3VpZGUoKS5hcmMoe1xuICAgICAgekluZGV4OiAwLFxuICAgICAgdG9wOiBmYWxzZSxcbiAgICAgIHN0YXJ0OiBbMCwgMC45NV0sXG4gICAgICBlbmQ6IFsxMDAsIDAuOTVdLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgLy8gw6XCusKVw6fCgcKww6jCicKyXG4gICAgICAgIHN0cm9rZTogdGhpcy5iZ0NvbG9yLFxuICAgICAgICBsaW5lV2lkdGg6IDEyLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICAvLyDDp8K7wpjDpcKIwrbDpsKMwofDpsKgwodcbiAgICB0aGlzLmNoYXJ0Lmd1aWRlKCkuYXJjKHtcbiAgICAgIHpJbmRleDogMSxcbiAgICAgIHN0YXJ0OiBbMCwgMC45NV0sXG4gICAgICBlbmQ6IFtkYXRhWzBdLnZhbHVlLCAwLjk1XSxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIHN0cm9rZTogdGhpcy5jb2xvcixcbiAgICAgICAgbGluZVdpZHRoOiAxMixcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgLy8gw6fCu8KYw6XCiMK2w6bClcKww6XCrcKXXG4gICAgdGhpcy5jaGFydC5ndWlkZSgpLmh0bWwoe1xuICAgICAgcG9zaXRpb246IFsnNTAlJywgJzk1JSddLFxuICAgICAgaHRtbDogYFxuICAgICAgPGRpdiBzdHlsZT1cIndpZHRoOiAzMDBweDt0ZXh0LWFsaWduOiBjZW50ZXI7Zm9udC1zaXplOiAxMnB4IWltcG9ydGFudDtcIj5cbiAgICAgICAgPHAgc3R5bGU9XCJmb250LXNpemU6IDE0cHg7IGNvbG9yOiByZ2JhKDAsMCwwLDAuNDMpO21hcmdpbjogMDtcIj4ke3RoaXMudGl0bGV9PC9wPlxuICAgICAgICA8cCBzdHlsZT1cImZvbnQtc2l6ZTogMjRweDtjb2xvcjogcmdiYSgwLDAsMCwwLjg1KTttYXJnaW46IDA7XCI+XG4gICAgICAgICAgJHtkYXRhWzBdLnZhbHVlfSVcbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+YFxuICAgIH0pO1xuICAgIHRoaXMuY2hhcnQuY2hhbmdlRGF0YShkYXRhKTtcbiAgfVxuXG4gIHByaXZhdGUgcnVuSW5zdGFsbCgpIHtcbiAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmluc3RhbGwoKSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbnN0YWxsKCkge1xuICAgIHRoaXMubm9kZS5uYXRpdmVFbGVtZW50LmlubmVySFRNTCA9ICcnO1xuICAgIGNvbnN0IFNoYXBlID0gRzIuU2hhcGU7XG4gICAgLy8gw6jCh8Kqw6XCrsKaw6TCucKJU2hhcGUgw6nCg8Kow6XCiMKGXG4gICAgU2hhcGUucmVnaXN0ZXJTaGFwZSgncG9pbnQnLCAncG9pbnRlcicsIHtcbiAgICAgIGRyYXdTaGFwZShjZmcsIGdyb3VwKSB7XG4gICAgICAgIGxldCBwb2ludCA9IGNmZy5wb2ludHNbMF07IC8vIMOowo7Ct8Olwo/ClsOnwqzCrMOkwrjCgMOkwrjCqsOmwqDCh8Oowq7CsMOnwoLCuVxuICAgICAgICBwb2ludCA9IHRoaXMucGFyc2VQb2ludChwb2ludCk7XG4gICAgICAgIGNvbnN0IGNlbnRlciA9IHRoaXMucGFyc2VQb2ludCh7XG4gICAgICAgICAgLy8gw6jCjsK3w6XCj8KWw6bCnsKBw6XCncKQw6bCoMKHw6fCs8K7w6TCuMKLw6fClMK7w6XCuMKDw6TCuMKtw6XCv8KDw6fCgsK5XG4gICAgICAgICAgeDogMCxcbiAgICAgICAgICB5OiAwLFxuICAgICAgICB9KTtcbiAgICAgICAgLy8gw6fCu8KYw6XCiMK2w6bCjMKHw6nCksKIXG4gICAgICAgIGdyb3VwLmFkZFNoYXBlKCdsaW5lJywge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICB4MTogY2VudGVyLngsXG4gICAgICAgICAgICB5MTogY2VudGVyLnksXG4gICAgICAgICAgICB4MjogcG9pbnQueCxcbiAgICAgICAgICAgIHkyOiBwb2ludC55LFxuICAgICAgICAgICAgc3Ryb2tlOiBjZmcuY29sb3IsXG4gICAgICAgICAgICBsaW5lV2lkdGg6IDIsXG4gICAgICAgICAgICBsaW5lQ2FwOiAncm91bmQnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGNvbnN0IHsgb3JpZ2luIH0gPSBjZmc7XG4gICAgICAgIC8vIGdyb3VwLmFkZFNoYXBlKCd0ZXh0Jywge1xuICAgICAgICAvLyAgIGF0dHJzOiB7XG4gICAgICAgIC8vICAgICB4OiBjZW50ZXIueCxcbiAgICAgICAgLy8gICAgIHk6IGNlbnRlci55ICsgODAsXG4gICAgICAgIC8vICAgICB0ZXh0OiBgJHtvcmlnaW4uX29yaWdpbi52YWx1ZX0lYCxcbiAgICAgICAgLy8gICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgIC8vICAgICBmb250U2l6ZTogMjQsXG4gICAgICAgIC8vICAgICBmaWxsOiAncmdiYSgwLCAwLCAwLCAwLjg1KScsXG4gICAgICAgIC8vICAgfSxcbiAgICAgICAgLy8gfSk7XG4gICAgICAgIHJldHVybiBncm91cC5hZGRTaGFwZSgnY2lyY2xlJywge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICB4OiBjZW50ZXIueCxcbiAgICAgICAgICAgIHk6IGNlbnRlci55LFxuICAgICAgICAgICAgcjogOS43NSxcbiAgICAgICAgICAgIHN0cm9rZTogY2ZnLmNvbG9yLFxuICAgICAgICAgICAgbGluZVdpZHRoOiAyLFxuICAgICAgICAgICAgZmlsbDogJyNmZmYnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNyZWF0ZURhdGEoKTtcbiAgICBjb25zdCBjaGFydCA9IG5ldyBHMi5DaGFydCh7XG4gICAgICBjb250YWluZXI6IHRoaXMubm9kZS5uYXRpdmVFbGVtZW50LFxuICAgICAgZm9yY2VGaXQ6IHRydWUsXG4gICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxuICAgICAgcGFkZGluZzogWzEwLCAxMCwgMzAsIDEwXSxcbiAgICB9KTtcbiAgICBjaGFydC5zb3VyY2UoZGF0YSk7XG5cbiAgICBjaGFydC5jb29yZCgncG9sYXInLCB7XG4gICAgICBzdGFydEFuZ2xlOiAtMS4yICogTWF0aC5QSSxcbiAgICAgIGVuZEFuZ2xlOiAwLjIgKiBNYXRoLlBJLFxuICAgIH0pO1xuICAgIGNoYXJ0LnNjYWxlKCd2YWx1ZScsIHtcbiAgICAgIG1pbjogMCxcbiAgICAgIG1heDogMTAwLFxuICAgICAgbmljZTogdHJ1ZSxcbiAgICAgIHRpY2tDb3VudDogNixcbiAgICB9KTtcblxuICAgIGNoYXJ0LmF4aXMoJzEnLCBmYWxzZSk7XG4gICAgLy8gw6XCiMK7w6XCusKmw6XCgMK8XG4gICAgY2hhcnQuYXhpcygndmFsdWUnLCB7XG4gICAgICB6SW5kZXg6IDIsXG4gICAgICBsaW5lOiBudWxsLFxuICAgICAgbGFiZWw6IHtcbiAgICAgICAgb2Zmc2V0OiAtMTIsXG4gICAgICAgIGZvcm1hdHRlcjogdGhpcy5mb3JtYXQsXG4gICAgICB9LFxuICAgICAgdGlja0xpbmU6IG51bGwsXG4gICAgICBncmlkOiBudWxsLFxuICAgIH0pO1xuICAgIGNoYXJ0LmxlZ2VuZChmYWxzZSk7XG4gICAgY2hhcnRcbiAgICAgIC5wb2ludCh7XG4gICAgICAgIGdlbmVyYXRlUG9pbnRzOiB0cnVlLFxuICAgICAgfSlcbiAgICAgIC5wb3NpdGlvbigndmFsdWUqMScpXG4gICAgICAuc2hhcGUoJ3BvaW50ZXInKVxuICAgICAgLmNvbG9yKHRoaXMuY29sb3IpXG4gICAgICAuYWN0aXZlKGZhbHNlKTtcblxuICAgIHRoaXMuY2hhcnQgPSBjaGFydDtcbiAgICB0aGlzLmRyYXcoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaW5pdEZsYWcgPSB0cnVlO1xuICAgIHRoaXMucnVuSW5zdGFsbCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW5pdEZsYWcpIHRoaXMuZHJhdygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2hhcnQpIHRoaXMuY2hhcnQuZGVzdHJveSgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IERlbG9uVXRpbE1vZHVsZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuaW1wb3J0IHsgRzJHYXVnZUNvbXBvbmVudCB9IGZyb20gJy4vZ2F1Z2UuY29tcG9uZW50JztcblxuY29uc3QgQ09NUE9ORU5UUyA9IFtHMkdhdWdlQ29tcG9uZW50XTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRGVsb25VdGlsTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbLi4uQ09NUE9ORU5UU10sXG4gIGV4cG9ydHM6IFsuLi5DT01QT05FTlRTXSxcbn0pXG5leHBvcnQgY2xhc3MgRzJHYXVnZU1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7IG5nTW9kdWxlOiBHMkdhdWdlTW9kdWxlLCBwcm92aWRlcnM6IFtdIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtJQWtERSwwQkFBb0IsSUFBWTtRQUFaLFNBQUksR0FBSixJQUFJLENBQVE7cUJBakJmLFNBQVM7dUJBQ1AsU0FBUzt3QkFjVCxLQUFLO0tBRVk7SUF6QnBDLHNCQUNJLG9DQUFNOzs7O1FBRFY7WUFFRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDckI7Ozs7O1FBQ0QsVUFBVyxLQUFVO1lBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2hDOzs7T0FIQTtJQVNELHNCQUNJLHFDQUFPOzs7OztRQURYLFVBQ1ksS0FBVTtZQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNqQzs7O09BQUE7Ozs7SUFZTyxxQ0FBVTs7OztRQUNoQixPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQzs7Ozs7SUFHL0MsK0JBQUk7Ozs7UUFDVixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7WUFBRSxPQUFPO1FBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7O1FBQzNCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzs7UUFFL0Is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