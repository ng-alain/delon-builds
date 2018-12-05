/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// tslint:disable:no-any
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostBinding, Input, NgZone, TemplateRef, ViewChild, } from '@angular/core';
import { InputBoolean, InputNumber } from '@delon/util';
var G2RadarComponent = /** @class */ (function () {
    function G2RadarComponent(cdr, zone) {
        this.cdr = cdr;
        this.zone = zone;
        // #region fields
        this._title = '';
        this.height = 0;
        this.padding = [44, 30, 16, 30];
        this.hasLegend = true;
        this.tickCount = 4;
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
                tickCount: this.tickCount,
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
                _this.cdr.detectChanges();
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
                    changeDetection: ChangeDetectionStrategy.OnPush
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
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Object)
    ], G2RadarComponent.prototype, "height", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], G2RadarComponent.prototype, "hasLegend", void 0);
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Object)
    ], G2RadarComponent.prototype, "tickCount", void 0);
    return G2RadarComponent;
}());
export { G2RadarComponent };
if (false) {
    /** @type {?} */
    G2RadarComponent.prototype._title;
    /** @type {?} */
    G2RadarComponent.prototype._titleTpl;
    /** @type {?} */
    G2RadarComponent.prototype.height;
    /** @type {?} */
    G2RadarComponent.prototype.padding;
    /** @type {?} */
    G2RadarComponent.prototype.hasLegend;
    /** @type {?} */
    G2RadarComponent.prototype.tickCount;
    /** @type {?} */
    G2RadarComponent.prototype.data;
    /** @type {?} */
    G2RadarComponent.prototype.colors;
    /** @type {?} */
    G2RadarComponent.prototype.node;
    /** @type {?} */
    G2RadarComponent.prototype.chart;
    /** @type {?} */
    G2RadarComponent.prototype.legendData;
    /** @type {?} */
    G2RadarComponent.prototype.cdr;
    /** @type {?} */
    G2RadarComponent.prototype.zone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NoYXJ0L3JhZGFyLyIsInNvdXJjZXMiOlsicmFkYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsV0FBVyxFQUNYLEtBQUssRUFDTCxNQUFNLEVBR04sV0FBVyxFQUNYLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQVksWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUlsRTtJQXdERSwwQkFBb0IsR0FBc0IsRUFBVSxJQUFZO1FBQTVDLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBUTs7UUEvQ2hFLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFXWSxXQUFNLEdBQUcsQ0FBQyxDQUFDO1FBR25DLFlBQU8sR0FBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRVosY0FBUyxHQUFHLElBQUksQ0FBQztRQUVsQixjQUFTLEdBQUcsQ0FBQyxDQUFDO1FBR3RDLFNBQUksR0FLQyxFQUFFLENBQUM7UUFFQyxXQUFNLEdBQUc7WUFDaEIsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7U0FDVixDQUFDO1FBUUYsZUFBVSxHQUFVLEVBQUUsQ0FBQztJQUU2QyxDQUFDO0lBN0NyRSxzQkFDSSxtQ0FBSzs7Ozs7UUFEVCxVQUNVLEtBQWlDO1lBQ3pDLElBQUksS0FBSyxZQUFZLFdBQVcsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2FBQ3hCOztnQkFB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O0lBRVIsa0NBU0U7O0lBSUYsZ0NBQ3lCOztJQUV6QixpQ0FBbUI7O0lBQ25CLHNDQUF1Qjs7SUFFWCwrQkFBOEI7O0lBQUUsZ0NBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6bm8tYW55XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRvTnVtYmVyLCBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5kZWNsYXJlIHZhciBHMjogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnMi1yYWRhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9yYWRhci5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHsgJ1tjbGFzcy5nMi1yYWRhcl0nOiAndHJ1ZScgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEcyUmFkYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgX3RpdGxlID0gJyc7XG4gIF90aXRsZVRwbDogVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpXG4gIHNldCB0aXRsZSh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4pIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgdGhpcy5fdGl0bGUgPSBudWxsO1xuICAgICAgdGhpcy5fdGl0bGVUcGwgPSB2YWx1ZTtcbiAgICB9IGVsc2UgdGhpcy5fdGl0bGUgPSB2YWx1ZTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnc3R5bGUuaGVpZ2h0LnB4JylcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgaGVpZ2h0ID0gMDtcblxuICBASW5wdXQoKVxuICBwYWRkaW5nOiBudW1iZXJbXSA9IFs0NCwgMzAsIDE2LCAzMF07XG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGhhc0xlZ2VuZCA9IHRydWU7XG5cbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgdGlja0NvdW50ID0gNDtcblxuICBASW5wdXQoKVxuICBkYXRhOiBBcnJheTx7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgdmFsdWU6IG51bWJlcjtcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XG4gIH0+ID0gW107XG5cbiAgQElucHV0KCkgY29sb3JzID0gW1xuICAgICcjMTg5MEZGJyxcbiAgICAnI0ZBQ0MxNCcsXG4gICAgJyMyRkMyNUInLFxuICAgICcjODU0M0UwJyxcbiAgICAnI0YwNDg2NCcsXG4gICAgJyMxM0MyQzInLFxuICAgICcjZmE4YzE2JyxcbiAgICAnI2EwZDkxMScsXG4gIF07XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicpXG4gIHByaXZhdGUgbm9kZTogRWxlbWVudFJlZjtcblxuICBwcml2YXRlIGNoYXJ0OiBhbnk7XG4gIGxlZ2VuZERhdGE6IGFueVtdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIHpvbmU6IE5nWm9uZSkgeyB9XG5cbiAgX2NsaWNrKGk6IG51bWJlcikge1xuICAgIHRoaXMubGVnZW5kRGF0YVtpXS5jaGVja2VkID0gIXRoaXMubGVnZW5kRGF0YVtpXS5jaGVja2VkO1xuXG4gICAgaWYgKHRoaXMuY2hhcnQpIHtcbiAgICAgIC8vIGNvbnN0IGZpbHRlckl0ZW0gPSB0aGlzLmxlZ2VuZERhdGEuZmlsdGVyKGwgPT4gbC5jaGVja2VkKS5tYXAobCA9PiBsLm5hbWUpO1xuICAgICAgdGhpcy5jaGFydC5maWx0ZXIoXG4gICAgICAgICduYW1lJyxcbiAgICAgICAgKHZhbDogYW55KSA9PiB0aGlzLmxlZ2VuZERhdGEuZmluZCh3ID0+IHcubmFtZSA9PT0gdmFsKS5jaGVja2VkLFxuICAgICAgKTtcbiAgICAgIHRoaXMuY2hhcnQucmVwYWludCgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcnVuSW5zdGFsbCgpIHtcbiAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmluc3RhbGwoKSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbnN0YWxsKCkge1xuICAgIGlmICghdGhpcy5kYXRhIHx8ICh0aGlzLmRhdGEgJiYgdGhpcy5kYXRhLmxlbmd0aCA8IDEpKSByZXR1cm47XG5cbiAgICB0aGlzLnVuaW5zdGFsbCgpO1xuICAgIHRoaXMubm9kZS5uYXRpdmVFbGVtZW50LmlubmVySFRNTCA9ICcnO1xuXG4gICAgY29uc3QgY2hhcnQgPSBuZXcgRzIuQ2hhcnQoe1xuICAgICAgY29udGFpbmVyOiB0aGlzLm5vZGUubmF0aXZlRWxlbWVudCxcbiAgICAgIGZvcmNlRml0OiB0cnVlLFxuICAgICAgaGVpZ2h0OiArdGhpcy5oZWlnaHQgLSAodGhpcy5oYXNMZWdlbmQgPyA4MCA6IDIyKSxcbiAgICAgIHBhZGRpbmc6IHRoaXMucGFkZGluZyxcbiAgICB9KTtcbiAgICBjaGFydC5zb3VyY2UodGhpcy5kYXRhLCB7XG4gICAgICB2YWx1ZToge1xuICAgICAgICBtaW46IDAsXG4gICAgICAgIHRpY2tDb3VudDogdGhpcy50aWNrQ291bnQsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgY2hhcnQuY29vcmQoJ3BvbGFyJyk7XG4gICAgY2hhcnQubGVnZW5kKGZhbHNlKTtcblxuICAgIGNoYXJ0LmF4aXMoJ2xhYmVsJywge1xuICAgICAgbGluZTogbnVsbCxcbiAgICAgIGxhYmVsT2Zmc2V0OiA4LFxuICAgICAgbGFiZWxzOiB7XG4gICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgZmlsbDogJ3JnYmEoMCwgMCwgMCwgLjY1KScsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgZ3JpZDoge1xuICAgICAgICBsaW5lOiB7XG4gICAgICAgICAgc3Ryb2tlOiAnI2U5ZTllOScsXG4gICAgICAgICAgbGluZVdpZHRoOiAxLFxuICAgICAgICAgIGxpbmVEYXNoOiBbMCwgMF0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgY2hhcnQuYXhpcygndmFsdWUnLCB7XG4gICAgICBncmlkOiB7XG4gICAgICAgIHR5cGU6ICdwb2x5Z29uJyxcbiAgICAgICAgbGluZToge1xuICAgICAgICAgIHN0cm9rZTogJyNlOWU5ZTknLFxuICAgICAgICAgIGxpbmVXaWR0aDogMSxcbiAgICAgICAgICBsaW5lRGFzaDogWzAsIDBdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGxhYmVsczoge1xuICAgICAgICBsYWJlbDoge1xuICAgICAgICAgIGZpbGw6ICdyZ2JhKDAsIDAsIDAsIC42NSknLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNoYXJ0XG4gICAgICAubGluZSgpXG4gICAgICAucG9zaXRpb24oJ2xhYmVsKnZhbHVlJylcbiAgICAgIC5jb2xvcignbmFtZScsIHRoaXMuY29sb3JzKTtcbiAgICBjaGFydFxuICAgICAgLnBvaW50KClcbiAgICAgIC5wb3NpdGlvbignbGFiZWwqdmFsdWUnKVxuICAgICAgLmNvbG9yKCduYW1lJywgdGhpcy5jb2xvcnMpXG4gICAgICAuc2hhcGUoJ2NpcmNsZScpXG4gICAgICAuc2l6ZSgzKTtcblxuICAgIGNoYXJ0LnJlbmRlcigpO1xuXG4gICAgdGhpcy5jaGFydCA9IGNoYXJ0O1xuXG4gICAgaWYgKHRoaXMuaGFzTGVnZW5kKSB7XG4gICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5sZWdlbmREYXRhID0gY2hhcnRcbiAgICAgICAgICAuZ2V0QWxsR2VvbXMoKVswXVxuICAgICAgICAgIC5fYXR0cnMuZGF0YUFycmF5Lm1hcCgoaXRlbTogYW55KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcmlnaW4gPSBpdGVtWzBdLl9vcmlnaW47XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAgICAgICAgIG5hbWU6IG9yaWdpbi5uYW1lLFxuICAgICAgICAgICAgICBjb2xvcjogaXRlbVswXS5jb2xvcixcbiAgICAgICAgICAgICAgY2hlY2tlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgdmFsdWU6IGl0ZW0ucmVkdWNlKChwLCBuKSA9PiBwICsgbi5fb3JpZ2luLnZhbHVlLCAwKSxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdW5pbnN0YWxsKCkge1xuICAgIGlmICh0aGlzLmNoYXJ0KSB7XG4gICAgICB0aGlzLmNoYXJ0LmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuY2hhcnQgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMucnVuSW5zdGFsbCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy51bmluc3RhbGwoKTtcbiAgfVxufVxuIl19