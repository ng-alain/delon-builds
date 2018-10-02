import { Component, Input, HostBinding, ViewChild, NgZone, TemplateRef, ChangeDetectionStrategy, ChangeDetectorRef, NgModule } from '@angular/core';
import { toNumber, toBoolean, DelonUtilModule } from '@delon/util';
import { __spread } from 'tslib';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var G2RadarComponent = /** @class */ (function () {
    function G2RadarComponent(cd, zone) {
        this.cd = cd;
        this.zone = zone;
        // #region fields
        this._title = '';
        this._height = 0;
        this.padding = [44, 30, 16, 30];
        this._hasLegend = true;
        this._tickCount = 4;
        this.data = [];
        this.colors = [
            '#1890FF',
            '#FACC14',
            '#2FC25B',
            '#8543E0',
            '#F04864',
            '#13C2C2',
            '#fa8c16',
            '#a0d911',
        ];
        this.legendData = [];
    }
    Object.defineProperty(G2RadarComponent.prototype, "title", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value instanceof TemplateRef) {
                this._title = null;
                this._titleTpl = value;
            }
            else
                this._title = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G2RadarComponent.prototype, "height", {
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
    Object.defineProperty(G2RadarComponent.prototype, "hasLegend", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hasLegend;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._hasLegend = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G2RadarComponent.prototype, "tickCount", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._tickCount = toNumber(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} i
     * @return {?}
     */
    G2RadarComponent.prototype._click = /**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        var _this = this;
        this.legendData[i].checked = !this.legendData[i].checked;
        if (this.chart) {
            // const filterItem = this.legendData.filter(l => l.checked).map(l => l.name);
            this.chart.filter('name', function (val) { return _this.legendData.find(function (w) { return w.name === val; }).checked; });
            this.chart.repaint();
        }
    };
    /**
     * @return {?}
     */
    G2RadarComponent.prototype.runInstall = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.zone.runOutsideAngular(function () { return setTimeout(function () { return _this.install(); }); });
    };
    /**
     * @return {?}
     */
    G2RadarComponent.prototype.install = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.data || (this.data && this.data.length < 1))
            return;
        this.uninstall();
        this.node.nativeElement.innerHTML = '';
        /** @type {?} */
        var chart = new G2.Chart({
            container: this.node.nativeElement,
            forceFit: true,
            height: +this.height - (this.hasLegend ? 80 : 22),
            padding: this.padding,
        });
        chart.source(this.data, {
            value: {
                min: 0,
                tickCount: this._tickCount,
            },
        });
        chart.coord('polar');
        chart.legend(false);
        chart.axis('label', {
            line: null,
            labelOffset: 8,
            labels: {
                label: {
                    fill: 'rgba(0, 0, 0, .65)',
                },
            },
            grid: {
                line: {
                    stroke: '#e9e9e9',
                    lineWidth: 1,
                    lineDash: [0, 0],
                },
            },
        });
        chart.axis('value', {
            grid: {
                type: 'polygon',
                line: {
                    stroke: '#e9e9e9',
                    lineWidth: 1,
                    lineDash: [0, 0],
                },
            },
            labels: {
                label: {
                    fill: 'rgba(0, 0, 0, .65)',
                },
            },
        });
        chart
            .line()
            .position('label*value')
            .color('name', this.colors);
        chart
            .point()
            .position('label*value')
            .color('name', this.colors)
            .shape('circle')
            .size(3);
        chart.render();
        this.chart = chart;
        if (this.hasLegend) {
            this.zone.run(function () {
                _this.legendData = chart
                    .getAllGeoms()[0]
                    ._attrs.dataArray.map(function (item) {
                    /** @type {?} */
                    var origin = item[0]._origin;
                    /** @type {?} */
                    var result = {
                        name: origin.name,
                        color: item[0].color,
                        checked: true,
                        value: item.reduce(function (p, n) { return p + n._origin.value; }, 0),
                    };
                    return result;
                });
                _this.cd.detectChanges();
            });
        }
    };
    /**
     * @return {?}
     */
    G2RadarComponent.prototype.uninstall = /**
     * @return {?}
     */
    function () {
        if (this.chart) {
            this.chart.destroy();
            this.chart = null;
        }
    };
    /**
     * @return {?}
     */
    G2RadarComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.runInstall();
    };
    /**
     * @return {?}
     */
    G2RadarComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.uninstall();
    };
    G2RadarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'g2-radar',
                    template: "<h4 *ngIf=\"_title; else _titleTpl\">\r\n  {{ _title }}</h4>\r\n<div #container></div>\r\n<div nz-row class=\"g2-radar__legend\" *ngIf=\"hasLegend\">\r\n  <div nz-col [nzSpan]=\"24 / legendData.length\" *ngFor=\"let i of legendData; let idx = index\" (click)=\"_click(idx)\"\r\n    class=\"g2-radar__legend-item\">\r\n    <i class=\"g2-radar__legend-dot\" [ngStyle]=\"{'background-color': !i.checked ? '#aaa' : i.color}\"></i>\r\n    {{i.name}}\r\n    <h6 class=\"g2-radar__legend-title\">{{i.value}}</h6>\r\n  </div>\r\n</div>\r\n",
                    host: { '[class.g2-radar]': 'true' },
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false
                }] }
    ];
    /** @nocollapse */
    G2RadarComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NgZone }
    ]; };
    G2RadarComponent.propDecorators = {
        title: [{ type: Input }],
        height: [{ type: HostBinding, args: ['style.height.px',] }, { type: Input }],
        padding: [{ type: Input }],
        hasLegend: [{ type: Input }],
        tickCount: [{ type: Input }],
        data: [{ type: Input }],
        colors: [{ type: Input }],
        node: [{ type: ViewChild, args: ['container',] }]
    };
    return G2RadarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var COMPONENTS = [G2RadarComponent];
var G2RadarModule = /** @class */ (function () {
    function G2RadarModule() {
    }
    /**
     * @return {?}
     */
    G2RadarModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: G2RadarModule, providers: [] };
    };
    G2RadarModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, DelonUtilModule, NgZorroAntdModule],
                    declarations: __spread(COMPONENTS),
                    exports: __spread(COMPONENTS),
                },] }
    ];
    return G2RadarModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { G2RadarComponent, G2RadarModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkYXIuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BkZWxvbi9jaGFydC9yYWRhci9yYWRhci5jb21wb25lbnQudHMiLCJuZzovL0BkZWxvbi9jaGFydC9yYWRhci9yYWRhci5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgVmlld0NoaWxkLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBOZ1pvbmUsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHRvTnVtYmVyLCB0b0Jvb2xlYW4gfSBmcm9tICdAZGVsb24vdXRpbCc7XHJcblxyXG5kZWNsYXJlIHZhciBHMjogYW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnMi1yYWRhcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3JhZGFyLmNvbXBvbmVudC5odG1sJyxcclxuICBob3N0OiB7ICdbY2xhc3MuZzItcmFkYXJdJzogJ3RydWUnIH0sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHMlJhZGFyQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkNoYW5nZXMge1xyXG4gIC8vICNyZWdpb24gZmllbGRzXHJcblxyXG4gIF90aXRsZSA9ICcnO1xyXG4gIF90aXRsZVRwbDogVGVtcGxhdGVSZWY8YW55PjtcclxuICBASW5wdXQoKVxyXG4gIHNldCB0aXRsZSh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pikge1xyXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcclxuICAgICAgdGhpcy5fdGl0bGUgPSBudWxsO1xyXG4gICAgICB0aGlzLl90aXRsZVRwbCA9IHZhbHVlO1xyXG4gICAgfSBlbHNlIHRoaXMuX3RpdGxlID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmhlaWdodC5weCcpXHJcbiAgQElucHV0KClcclxuICBnZXQgaGVpZ2h0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcclxuICB9XHJcbiAgc2V0IGhlaWdodCh2YWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLl9oZWlnaHQgPSB0b051bWJlcih2YWx1ZSk7XHJcbiAgfVxyXG4gIHByaXZhdGUgX2hlaWdodCA9IDA7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcGFkZGluZzogbnVtYmVyW10gPSBbNDQsIDMwLCAxNiwgMzBdO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGdldCBoYXNMZWdlbmQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faGFzTGVnZW5kO1xyXG4gIH1cclxuICBzZXQgaGFzTGVnZW5kKHZhbHVlOiBhbnkpIHtcclxuICAgIHRoaXMuX2hhc0xlZ2VuZCA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG4gIHByaXZhdGUgX2hhc0xlZ2VuZCA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHRpY2tDb3VudCh2YWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLl90aWNrQ291bnQgPSB0b051bWJlcih2YWx1ZSk7XHJcbiAgfVxyXG4gIHByaXZhdGUgX3RpY2tDb3VudCA9IDQ7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZGF0YTogQXJyYXk8e1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgbGFiZWw6IHN0cmluZztcclxuICAgIHZhbHVlOiBudW1iZXI7XHJcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbiAgfT4gPSBbXTtcclxuXHJcbiAgQElucHV0KCkgY29sb3JzID0gW1xyXG4gICAgJyMxODkwRkYnLFxyXG4gICAgJyNGQUNDMTQnLFxyXG4gICAgJyMyRkMyNUInLFxyXG4gICAgJyM4NTQzRTAnLFxyXG4gICAgJyNGMDQ4NjQnLFxyXG4gICAgJyMxM0MyQzInLFxyXG4gICAgJyNmYThjMTYnLFxyXG4gICAgJyNhMGQ5MTEnLFxyXG4gIF07XHJcblxyXG4gIC8vICNlbmRyZWdpb25cclxuXHJcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJylcclxuICBwcml2YXRlIG5vZGU6IEVsZW1lbnRSZWY7XHJcblxyXG4gIHByaXZhdGUgY2hhcnQ6IGFueTtcclxuICBsZWdlbmREYXRhOiBhbnlbXSA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSB6b25lOiBOZ1pvbmUpIHt9XHJcblxyXG4gIF9jbGljayhpOiBudW1iZXIpIHtcclxuICAgIHRoaXMubGVnZW5kRGF0YVtpXS5jaGVja2VkID0gIXRoaXMubGVnZW5kRGF0YVtpXS5jaGVja2VkO1xyXG5cclxuICAgIGlmICh0aGlzLmNoYXJ0KSB7XHJcbiAgICAgIC8vIGNvbnN0IGZpbHRlckl0ZW0gPSB0aGlzLmxlZ2VuZERhdGEuZmlsdGVyKGwgPT4gbC5jaGVja2VkKS5tYXAobCA9PiBsLm5hbWUpO1xyXG4gICAgICB0aGlzLmNoYXJ0LmZpbHRlcihcclxuICAgICAgICAnbmFtZScsXHJcbiAgICAgICAgKHZhbDogYW55KSA9PiB0aGlzLmxlZ2VuZERhdGEuZmluZCh3ID0+IHcubmFtZSA9PT0gdmFsKS5jaGVja2VkLFxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLmNoYXJ0LnJlcGFpbnQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgcnVuSW5zdGFsbCgpIHtcclxuICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5zdGFsbCgpKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluc3RhbGwoKSB7XHJcbiAgICBpZiAoIXRoaXMuZGF0YSB8fCAodGhpcy5kYXRhICYmIHRoaXMuZGF0YS5sZW5ndGggPCAxKSkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMudW5pbnN0YWxsKCk7XHJcbiAgICB0aGlzLm5vZGUubmF0aXZlRWxlbWVudC5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICBjb25zdCBjaGFydCA9IG5ldyBHMi5DaGFydCh7XHJcbiAgICAgIGNvbnRhaW5lcjogdGhpcy5ub2RlLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgIGZvcmNlRml0OiB0cnVlLFxyXG4gICAgICBoZWlnaHQ6ICt0aGlzLmhlaWdodCAtICh0aGlzLmhhc0xlZ2VuZCA/IDgwIDogMjIpLFxyXG4gICAgICBwYWRkaW5nOiB0aGlzLnBhZGRpbmcsXHJcbiAgICB9KTtcclxuICAgIGNoYXJ0LnNvdXJjZSh0aGlzLmRhdGEsIHtcclxuICAgICAgdmFsdWU6IHtcclxuICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgdGlja0NvdW50OiB0aGlzLl90aWNrQ291bnQsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBjaGFydC5jb29yZCgncG9sYXInKTtcclxuICAgIGNoYXJ0LmxlZ2VuZChmYWxzZSk7XHJcblxyXG4gICAgY2hhcnQuYXhpcygnbGFiZWwnLCB7XHJcbiAgICAgIGxpbmU6IG51bGwsXHJcbiAgICAgIGxhYmVsT2Zmc2V0OiA4LFxyXG4gICAgICBsYWJlbHM6IHtcclxuICAgICAgICBsYWJlbDoge1xyXG4gICAgICAgICAgZmlsbDogJ3JnYmEoMCwgMCwgMCwgLjY1KScsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgZ3JpZDoge1xyXG4gICAgICAgIGxpbmU6IHtcclxuICAgICAgICAgIHN0cm9rZTogJyNlOWU5ZTknLFxyXG4gICAgICAgICAgbGluZVdpZHRoOiAxLFxyXG4gICAgICAgICAgbGluZURhc2g6IFswLCAwXSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgY2hhcnQuYXhpcygndmFsdWUnLCB7XHJcbiAgICAgIGdyaWQ6IHtcclxuICAgICAgICB0eXBlOiAncG9seWdvbicsXHJcbiAgICAgICAgbGluZToge1xyXG4gICAgICAgICAgc3Ryb2tlOiAnI2U5ZTllOScsXHJcbiAgICAgICAgICBsaW5lV2lkdGg6IDEsXHJcbiAgICAgICAgICBsaW5lRGFzaDogWzAsIDBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGxhYmVsczoge1xyXG4gICAgICAgIGxhYmVsOiB7XHJcbiAgICAgICAgICBmaWxsOiAncmdiYSgwLCAwLCAwLCAuNjUpJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgY2hhcnRcclxuICAgICAgLmxpbmUoKVxyXG4gICAgICAucG9zaXRpb24oJ2xhYmVsKnZhbHVlJylcclxuICAgICAgLmNvbG9yKCduYW1lJywgdGhpcy5jb2xvcnMpO1xyXG4gICAgY2hhcnRcclxuICAgICAgLnBvaW50KClcclxuICAgICAgLnBvc2l0aW9uKCdsYWJlbCp2YWx1ZScpXHJcbiAgICAgIC5jb2xvcignbmFtZScsIHRoaXMuY29sb3JzKVxyXG4gICAgICAuc2hhcGUoJ2NpcmNsZScpXHJcbiAgICAgIC5zaXplKDMpO1xyXG5cclxuICAgIGNoYXJ0LnJlbmRlcigpO1xyXG5cclxuICAgIHRoaXMuY2hhcnQgPSBjaGFydDtcclxuXHJcbiAgICBpZiAodGhpcy5oYXNMZWdlbmQpIHtcclxuICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5sZWdlbmREYXRhID0gY2hhcnRcclxuICAgICAgICAgIC5nZXRBbGxHZW9tcygpWzBdXHJcbiAgICAgICAgICAuX2F0dHJzLmRhdGFBcnJheS5tYXAoKGl0ZW06IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBvcmlnaW4gPSBpdGVtWzBdLl9vcmlnaW47XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHtcclxuICAgICAgICAgICAgICBuYW1lOiBvcmlnaW4ubmFtZSxcclxuICAgICAgICAgICAgICBjb2xvcjogaXRlbVswXS5jb2xvcixcclxuICAgICAgICAgICAgICBjaGVja2VkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIHZhbHVlOiBpdGVtLnJlZHVjZSgocCwgbikgPT4gcCArIG4uX29yaWdpbi52YWx1ZSwgMCksXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1bmluc3RhbGwoKSB7XHJcbiAgICBpZiAodGhpcy5jaGFydCkge1xyXG4gICAgICB0aGlzLmNoYXJ0LmRlc3Ryb3koKTtcclxuICAgICAgdGhpcy5jaGFydCA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcclxuICAgIHRoaXMucnVuSW5zdGFsbCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLnVuaW5zdGFsbCgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ1pvcnJvQW50ZE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xyXG5pbXBvcnQgeyBEZWxvblV0aWxNb2R1bGUgfSBmcm9tICdAZGVsb24vdXRpbCc7XHJcblxyXG5pbXBvcnQgeyBHMlJhZGFyQ29tcG9uZW50IH0gZnJvbSAnLi9yYWRhci5jb21wb25lbnQnO1xyXG5cclxuY29uc3QgQ09NUE9ORU5UUyA9IFtHMlJhZGFyQ29tcG9uZW50XTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRGVsb25VdGlsTW9kdWxlLCBOZ1pvcnJvQW50ZE1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbLi4uQ09NUE9ORU5UU10sXHJcbiAgZXhwb3J0czogWy4uLkNPTVBPTkVOVFNdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRzJSYWRhck1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4geyBuZ01vZHVsZTogRzJSYWRhck1vZHVsZSwgcHJvdmlkZXJzOiBbXSB9O1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0lBNEZFLDBCQUFvQixFQUFxQixFQUFVLElBQVk7UUFBM0MsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFROztzQkFqRXRELEVBQUU7dUJBa0JPLENBQUM7dUJBR0MsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7MEJBU2YsSUFBSTswQkFNSixDQUFDO29CQVFqQixFQUFFO3NCQUVXO1lBQ2hCLFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1NBQ1Y7MEJBUW1CLEVBQUU7S0FFNkM7SUEvRG5FLHNCQUNJLG1DQUFLOzs7OztRQURULFVBQ1UsS0FBZ0M7WUFDeEMsSUFBSSxLQUFLLFlBQVksV0FBVyxFQUFFO2dCQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7YUFDeEI7O2dCQUFNLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQzVCOzs7T0FBQTtJQUVELHNCQUVJ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