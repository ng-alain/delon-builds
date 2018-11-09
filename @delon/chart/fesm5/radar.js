import { Component, Input, HostBinding, ViewChild, NgZone, TemplateRef, ChangeDetectionStrategy, ChangeDetectorRef, NgModule } from '@angular/core';
import { toNumber, toBoolean, DelonUtilModule } from '@delon/util';
import { __spread } from 'tslib';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
                    template: "<h4 *ngIf=\"_title; else _titleTpl\">\n  {{ _title }}</h4>\n<div #container></div>\n<div nz-row class=\"g2-radar__legend\" *ngIf=\"hasLegend\">\n  <div nz-col [nzSpan]=\"24 / legendData.length\" *ngFor=\"let i of legendData; let idx = index\" (click)=\"_click(idx)\"\n    class=\"g2-radar__legend-item\">\n    <i class=\"g2-radar__legend-dot\" [ngStyle]=\"{'background-color': !i.checked ? '#aaa' : i.color}\"></i>\n    {{i.name}}\n    <h6 class=\"g2-radar__legend-title\">{{i.value}}</h6>\n  </div>\n</div>\n",
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
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { G2RadarComponent, G2RadarModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkYXIuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BkZWxvbi9jaGFydC9yYWRhci9yYWRhci5jb21wb25lbnQudHMiLCJuZzovL0BkZWxvbi9jaGFydC9yYWRhci9yYWRhci5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgSG9zdEJpbmRpbmcsXG4gIFZpZXdDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgT25EZXN0cm95LFxuICBPbkNoYW5nZXMsXG4gIE5nWm9uZSxcbiAgVGVtcGxhdGVSZWYsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0b051bWJlciwgdG9Cb29sZWFuIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5kZWNsYXJlIHZhciBHMjogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnMi1yYWRhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9yYWRhci5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHsgJ1tjbGFzcy5nMi1yYWRhcl0nOiAndHJ1ZScgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBHMlJhZGFyQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIF90aXRsZSA9ICcnO1xuICBfdGl0bGVUcGw6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBJbnB1dCgpXG4gIHNldCB0aXRsZSh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLl90aXRsZSA9IG51bGw7XG4gICAgICB0aGlzLl90aXRsZVRwbCA9IHZhbHVlO1xuICAgIH0gZWxzZSB0aGlzLl90aXRsZSA9IHZhbHVlO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5oZWlnaHQucHgnKVxuICBASW5wdXQoKVxuICBnZXQgaGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLl9oZWlnaHQ7XG4gIH1cbiAgc2V0IGhlaWdodCh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5faGVpZ2h0ID0gdG9OdW1iZXIodmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX2hlaWdodCA9IDA7XG5cbiAgQElucHV0KClcbiAgcGFkZGluZzogbnVtYmVyW10gPSBbNDQsIDMwLCAxNiwgMzBdO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBoYXNMZWdlbmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hhc0xlZ2VuZDtcbiAgfVxuICBzZXQgaGFzTGVnZW5kKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl9oYXNMZWdlbmQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX2hhc0xlZ2VuZCA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgc2V0IHRpY2tDb3VudCh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5fdGlja0NvdW50ID0gdG9OdW1iZXIodmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX3RpY2tDb3VudCA9IDQ7XG5cbiAgQElucHV0KClcbiAgZGF0YTogQXJyYXk8e1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBsYWJlbDogc3RyaW5nO1xuICAgIHZhbHVlOiBudW1iZXI7XG4gICAgW2tleTogc3RyaW5nXTogYW55O1xuICB9PiA9IFtdO1xuXG4gIEBJbnB1dCgpIGNvbG9ycyA9IFtcbiAgICAnIzE4OTBGRicsXG4gICAgJyNGQUNDMTQnLFxuICAgICcjMkZDMjVCJyxcbiAgICAnIzg1NDNFMCcsXG4gICAgJyNGMDQ4NjQnLFxuICAgICcjMTNDMkMyJyxcbiAgICAnI2ZhOGMxNicsXG4gICAgJyNhMGQ5MTEnLFxuICBdO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBAVmlld0NoaWxkKCdjb250YWluZXInKVxuICBwcml2YXRlIG5vZGU6IEVsZW1lbnRSZWY7XG5cbiAgcHJpdmF0ZSBjaGFydDogYW55O1xuICBsZWdlbmREYXRhOiBhbnlbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIHpvbmU6IE5nWm9uZSkge31cblxuICBfY2xpY2soaTogbnVtYmVyKSB7XG4gICAgdGhpcy5sZWdlbmREYXRhW2ldLmNoZWNrZWQgPSAhdGhpcy5sZWdlbmREYXRhW2ldLmNoZWNrZWQ7XG5cbiAgICBpZiAodGhpcy5jaGFydCkge1xuICAgICAgLy8gY29uc3QgZmlsdGVySXRlbSA9IHRoaXMubGVnZW5kRGF0YS5maWx0ZXIobCA9PiBsLmNoZWNrZWQpLm1hcChsID0+IGwubmFtZSk7XG4gICAgICB0aGlzLmNoYXJ0LmZpbHRlcihcbiAgICAgICAgJ25hbWUnLFxuICAgICAgICAodmFsOiBhbnkpID0+IHRoaXMubGVnZW5kRGF0YS5maW5kKHcgPT4gdy5uYW1lID09PSB2YWwpLmNoZWNrZWQsXG4gICAgICApO1xuICAgICAgdGhpcy5jaGFydC5yZXBhaW50KCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBydW5JbnN0YWxsKCkge1xuICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5zdGFsbCgpKSk7XG4gIH1cblxuICBwcml2YXRlIGluc3RhbGwoKSB7XG4gICAgaWYgKCF0aGlzLmRhdGEgfHwgKHRoaXMuZGF0YSAmJiB0aGlzLmRhdGEubGVuZ3RoIDwgMSkpIHJldHVybjtcblxuICAgIHRoaXMudW5pbnN0YWxsKCk7XG4gICAgdGhpcy5ub2RlLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBjb25zdCBjaGFydCA9IG5ldyBHMi5DaGFydCh7XG4gICAgICBjb250YWluZXI6IHRoaXMubm9kZS5uYXRpdmVFbGVtZW50LFxuICAgICAgZm9yY2VGaXQ6IHRydWUsXG4gICAgICBoZWlnaHQ6ICt0aGlzLmhlaWdodCAtICh0aGlzLmhhc0xlZ2VuZCA/IDgwIDogMjIpLFxuICAgICAgcGFkZGluZzogdGhpcy5wYWRkaW5nLFxuICAgIH0pO1xuICAgIGNoYXJ0LnNvdXJjZSh0aGlzLmRhdGEsIHtcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIG1pbjogMCxcbiAgICAgICAgdGlja0NvdW50OiB0aGlzLl90aWNrQ291bnQsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgY2hhcnQuY29vcmQoJ3BvbGFyJyk7XG4gICAgY2hhcnQubGVnZW5kKGZhbHNlKTtcblxuICAgIGNoYXJ0LmF4aXMoJ2xhYmVsJywge1xuICAgICAgbGluZTogbnVsbCxcbiAgICAgIGxhYmVsT2Zmc2V0OiA4LFxuICAgICAgbGFiZWxzOiB7XG4gICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgZmlsbDogJ3JnYmEoMCwgMCwgMCwgLjY1KScsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgZ3JpZDoge1xuICAgICAgICBsaW5lOiB7XG4gICAgICAgICAgc3Ryb2tlOiAnI2U5ZTllOScsXG4gICAgICAgICAgbGluZVdpZHRoOiAxLFxuICAgICAgICAgIGxpbmVEYXNoOiBbMCwgMF0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgY2hhcnQuYXhpcygndmFsdWUnLCB7XG4gICAgICBncmlkOiB7XG4gICAgICAgIHR5cGU6ICdwb2x5Z29uJyxcbiAgICAgICAgbGluZToge1xuICAgICAgICAgIHN0cm9rZTogJyNlOWU5ZTknLFxuICAgICAgICAgIGxpbmVXaWR0aDogMSxcbiAgICAgICAgICBsaW5lRGFzaDogWzAsIDBdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGxhYmVsczoge1xuICAgICAgICBsYWJlbDoge1xuICAgICAgICAgIGZpbGw6ICdyZ2JhKDAsIDAsIDAsIC42NSknLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNoYXJ0XG4gICAgICAubGluZSgpXG4gICAgICAucG9zaXRpb24oJ2xhYmVsKnZhbHVlJylcbiAgICAgIC5jb2xvcignbmFtZScsIHRoaXMuY29sb3JzKTtcbiAgICBjaGFydFxuICAgICAgLnBvaW50KClcbiAgICAgIC5wb3NpdGlvbignbGFiZWwqdmFsdWUnKVxuICAgICAgLmNvbG9yKCduYW1lJywgdGhpcy5jb2xvcnMpXG4gICAgICAuc2hhcGUoJ2NpcmNsZScpXG4gICAgICAuc2l6ZSgzKTtcblxuICAgIGNoYXJ0LnJlbmRlcigpO1xuXG4gICAgdGhpcy5jaGFydCA9IGNoYXJ0O1xuXG4gICAgaWYgKHRoaXMuaGFzTGVnZW5kKSB7XG4gICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5sZWdlbmREYXRhID0gY2hhcnRcbiAgICAgICAgICAuZ2V0QWxsR2VvbXMoKVswXVxuICAgICAgICAgIC5fYXR0cnMuZGF0YUFycmF5Lm1hcCgoaXRlbTogYW55KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcmlnaW4gPSBpdGVtWzBdLl9vcmlnaW47XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAgICAgICAgIG5hbWU6IG9yaWdpbi5uYW1lLFxuICAgICAgICAgICAgICBjb2xvcjogaXRlbVswXS5jb2xvcixcbiAgICAgICAgICAgICAgY2hlY2tlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgdmFsdWU6IGl0ZW0ucmVkdWNlKChwLCBuKSA9PiBwICsgbi5fb3JpZ2luLnZhbHVlLCAwKSxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1bmluc3RhbGwoKSB7XG4gICAgaWYgKHRoaXMuY2hhcnQpIHtcbiAgICAgIHRoaXMuY2hhcnQuZGVzdHJveSgpO1xuICAgICAgdGhpcy5jaGFydCA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5ydW5JbnN0YWxsKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnVuaW5zdGFsbCgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nWm9ycm9BbnRkTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XG5pbXBvcnQgeyBEZWxvblV0aWxNb2R1bGUgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbmltcG9ydCB7IEcyUmFkYXJDb21wb25lbnQgfSBmcm9tICcuL3JhZGFyLmNvbXBvbmVudCc7XG5cbmNvbnN0IENPTVBPTkVOVFMgPSBbRzJSYWRhckNvbXBvbmVudF07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIERlbG9uVXRpbE1vZHVsZSwgTmdab3Jyb0FudGRNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRTXSxcbiAgZXhwb3J0czogWy4uLkNPTVBPTkVOVFNdLFxufSlcbmV4cG9ydCBjbGFzcyBHMlJhZGFyTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHsgbmdNb2R1bGU6IEcyUmFkYXJNb2R1bGUsIHByb3ZpZGVyczogW10gfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtJQTRGRSwwQkFBb0IsRUFBcUIsRUFBVSxJQUFZO1FBQTNDLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBUTs7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