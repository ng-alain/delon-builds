/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, Input, HostBinding, ViewChild, ElementRef, NgZone, TemplateRef, ChangeDetectionStrategy, ChangeDetectorRef, } from '@angular/core';
import { toNumber, toBoolean } from '@delon/util';
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
    return G2RadarComponent;
}());
export { G2RadarComponent };
if (false) {
    /** @type {?} */
    G2RadarComponent.prototype._title;
    /** @type {?} */
    G2RadarComponent.prototype._titleTpl;
    /** @type {?} */
    G2RadarComponent.prototype._height;
    /** @type {?} */
    G2RadarComponent.prototype.padding;
    /** @type {?} */
    G2RadarComponent.prototype._hasLegend;
    /** @type {?} */
    G2RadarComponent.prototype._tickCount;
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
    G2RadarComponent.prototype.cd;
    /** @type {?} */
    G2RadarComponent.prototype.zone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NoYXJ0L3JhZGFyLyIsInNvdXJjZXMiOlsicmFkYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxXQUFXLEVBQ1gsU0FBUyxFQUNULFVBQVUsRUFHVixNQUFNLEVBQ04sV0FBVyxFQUNYLHVCQUF1QixFQUN2QixpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFJbEQ7SUEwRUUsMEJBQW9CLEVBQXFCLEVBQVUsSUFBWTtRQUEzQyxPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUFVLFNBQUksR0FBSixJQUFJLENBQVE7O1FBakUvRCxXQUFNLEdBQUcsRUFBRSxDQUFDO1FBa0JKLFlBQU8sR0FBRyxDQUFDLENBQUM7UUFHcEIsWUFBTyxHQUFhLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFTN0IsZUFBVSxHQUFHLElBQUksQ0FBQztRQU1sQixlQUFVLEdBQUcsQ0FBQyxDQUFDO1FBR3ZCLFNBQUksR0FLQyxFQUFFLENBQUM7UUFFQyxXQUFNLEdBQUc7WUFDaEIsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7U0FDVixDQUFDO1FBUUYsZUFBVSxHQUFVLEVBQUUsQ0FBQztJQUUyQyxDQUFDO0lBL0RuRSxzQkFDSSxtQ0FBSzs7Ozs7UUFEVCxVQUNVLEtBQWdDO1lBQ3hDLElBQUksS0FBSyxZQUFZLFdBQVcsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2FBQ3hCOztnQkFB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QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7Ozs7Z0JBWEMsaUJBQWlCO2dCQUhqQixNQUFNOzs7d0JBb0JMLEtBQUs7eUJBUUwsV0FBVyxTQUFDLGlCQUFpQixjQUM3QixLQUFLOzBCQVNMLEtBQUs7NEJBR0wsS0FBSzs0QkFTTCxLQUFLO3VCQU1MLEtBQUs7eUJBUUwsS0FBSzt1QkFhTCxTQUFTLFNBQUMsV0FBVzs7SUFpSXhCLHVCQUFDO0NBQUEsQUFyTUQsSUFxTUM7U0EvTFksZ0JBQWdCOzs7SUFHM0Isa0NBQVk7O0lBQ1oscUNBQTRCOztJQWlCNUIsbUNBQW9COztJQUVwQixtQ0FDcUM7O0lBU3JDLHNDQUEwQjs7SUFNMUIsc0NBQXVCOztJQUV2QixnQ0FNUTs7SUFFUixrQ0FTRTs7SUFJRixnQ0FDeUI7O0lBRXpCLGlDQUFtQjs7SUFDbkIsc0NBQXVCOztJQUVYLDhCQUE2Qjs7SUFBRSxnQ0FBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBIb3N0QmluZGluZyxcbiAgVmlld0NoaWxkLFxuICBFbGVtZW50UmVmLFxuICBPbkRlc3Ryb3ksXG4gIE9uQ2hhbmdlcyxcbiAgTmdab25lLFxuICBUZW1wbGF0ZVJlZixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRvTnVtYmVyLCB0b0Jvb2xlYW4gfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbmRlY2xhcmUgdmFyIEcyOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2cyLXJhZGFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JhZGFyLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDogeyAnW2NsYXNzLmcyLXJhZGFyXSc6ICd0cnVlJyB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgRzJSYWRhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBfdGl0bGUgPSAnJztcbiAgX3RpdGxlVHBsOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBASW5wdXQoKVxuICBzZXQgdGl0bGUodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgdGhpcy5fdGl0bGUgPSBudWxsO1xuICAgICAgdGhpcy5fdGl0bGVUcGwgPSB2YWx1ZTtcbiAgICB9IGVsc2UgdGhpcy5fdGl0bGUgPSB2YWx1ZTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnc3R5bGUuaGVpZ2h0LnB4JylcbiAgQElucHV0KClcbiAgZ2V0IGhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5faGVpZ2h0O1xuICB9XG4gIHNldCBoZWlnaHQodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX2hlaWdodCA9IHRvTnVtYmVyKHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9oZWlnaHQgPSAwO1xuXG4gIEBJbnB1dCgpXG4gIHBhZGRpbmc6IG51bWJlcltdID0gWzQ0LCAzMCwgMTYsIDMwXTtcblxuICBASW5wdXQoKVxuICBnZXQgaGFzTGVnZW5kKCkge1xuICAgIHJldHVybiB0aGlzLl9oYXNMZWdlbmQ7XG4gIH1cbiAgc2V0IGhhc0xlZ2VuZCh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5faGFzTGVnZW5kID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9oYXNMZWdlbmQgPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHNldCB0aWNrQ291bnQodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX3RpY2tDb3VudCA9IHRvTnVtYmVyKHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF90aWNrQ291bnQgPSA0O1xuXG4gIEBJbnB1dCgpXG4gIGRhdGE6IEFycmF5PHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICB2YWx1ZTogbnVtYmVyO1xuICAgIFtrZXk6IHN0cmluZ106IGFueTtcbiAgfT4gPSBbXTtcblxuICBASW5wdXQoKSBjb2xvcnMgPSBbXG4gICAgJyMxODkwRkYnLFxuICAgICcjRkFDQzE0JyxcbiAgICAnIzJGQzI1QicsXG4gICAgJyM4NTQzRTAnLFxuICAgICcjRjA0ODY0JyxcbiAgICAnIzEzQzJDMicsXG4gICAgJyNmYThjMTYnLFxuICAgICcjYTBkOTExJyxcbiAgXTtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJylcbiAgcHJpdmF0ZSBub2RlOiBFbGVtZW50UmVmO1xuXG4gIHByaXZhdGUgY2hhcnQ6IGFueTtcbiAgbGVnZW5kRGF0YTogYW55W10gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSB6b25lOiBOZ1pvbmUpIHt9XG5cbiAgX2NsaWNrKGk6IG51bWJlcikge1xuICAgIHRoaXMubGVnZW5kRGF0YVtpXS5jaGVja2VkID0gIXRoaXMubGVnZW5kRGF0YVtpXS5jaGVja2VkO1xuXG4gICAgaWYgKHRoaXMuY2hhcnQpIHtcbiAgICAgIC8vIGNvbnN0IGZpbHRlckl0ZW0gPSB0aGlzLmxlZ2VuZERhdGEuZmlsdGVyKGwgPT4gbC5jaGVja2VkKS5tYXAobCA9PiBsLm5hbWUpO1xuICAgICAgdGhpcy5jaGFydC5maWx0ZXIoXG4gICAgICAgICduYW1lJyxcbiAgICAgICAgKHZhbDogYW55KSA9PiB0aGlzLmxlZ2VuZERhdGEuZmluZCh3ID0+IHcubmFtZSA9PT0gdmFsKS5jaGVja2VkLFxuICAgICAgKTtcbiAgICAgIHRoaXMuY2hhcnQucmVwYWludCgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcnVuSW5zdGFsbCgpIHtcbiAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmluc3RhbGwoKSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbnN0YWxsKCkge1xuICAgIGlmICghdGhpcy5kYXRhIHx8ICh0aGlzLmRhdGEgJiYgdGhpcy5kYXRhLmxlbmd0aCA8IDEpKSByZXR1cm47XG5cbiAgICB0aGlzLnVuaW5zdGFsbCgpO1xuICAgIHRoaXMubm9kZS5uYXRpdmVFbGVtZW50LmlubmVySFRNTCA9ICcnO1xuXG4gICAgY29uc3QgY2hhcnQgPSBuZXcgRzIuQ2hhcnQoe1xuICAgICAgY29udGFpbmVyOiB0aGlzLm5vZGUubmF0aXZlRWxlbWVudCxcbiAgICAgIGZvcmNlRml0OiB0cnVlLFxuICAgICAgaGVpZ2h0OiArdGhpcy5oZWlnaHQgLSAodGhpcy5oYXNMZWdlbmQgPyA4MCA6IDIyKSxcbiAgICAgIHBhZGRpbmc6IHRoaXMucGFkZGluZyxcbiAgICB9KTtcbiAgICBjaGFydC5zb3VyY2UodGhpcy5kYXRhLCB7XG4gICAgICB2YWx1ZToge1xuICAgICAgICBtaW46IDAsXG4gICAgICAgIHRpY2tDb3VudDogdGhpcy5fdGlja0NvdW50LFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNoYXJ0LmNvb3JkKCdwb2xhcicpO1xuICAgIGNoYXJ0LmxlZ2VuZChmYWxzZSk7XG5cbiAgICBjaGFydC5heGlzKCdsYWJlbCcsIHtcbiAgICAgIGxpbmU6IG51bGwsXG4gICAgICBsYWJlbE9mZnNldDogOCxcbiAgICAgIGxhYmVsczoge1xuICAgICAgICBsYWJlbDoge1xuICAgICAgICAgIGZpbGw6ICdyZ2JhKDAsIDAsIDAsIC42NSknLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGdyaWQ6IHtcbiAgICAgICAgbGluZToge1xuICAgICAgICAgIHN0cm9rZTogJyNlOWU5ZTknLFxuICAgICAgICAgIGxpbmVXaWR0aDogMSxcbiAgICAgICAgICBsaW5lRGFzaDogWzAsIDBdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNoYXJ0LmF4aXMoJ3ZhbHVlJywge1xuICAgICAgZ3JpZDoge1xuICAgICAgICB0eXBlOiAncG9seWdvbicsXG4gICAgICAgIGxpbmU6IHtcbiAgICAgICAgICBzdHJva2U6ICcjZTllOWU5JyxcbiAgICAgICAgICBsaW5lV2lkdGg6IDEsXG4gICAgICAgICAgbGluZURhc2g6IFswLCAwXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBsYWJlbHM6IHtcbiAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICBmaWxsOiAncmdiYSgwLCAwLCAwLCAuNjUpJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBjaGFydFxuICAgICAgLmxpbmUoKVxuICAgICAgLnBvc2l0aW9uKCdsYWJlbCp2YWx1ZScpXG4gICAgICAuY29sb3IoJ25hbWUnLCB0aGlzLmNvbG9ycyk7XG4gICAgY2hhcnRcbiAgICAgIC5wb2ludCgpXG4gICAgICAucG9zaXRpb24oJ2xhYmVsKnZhbHVlJylcbiAgICAgIC5jb2xvcignbmFtZScsIHRoaXMuY29sb3JzKVxuICAgICAgLnNoYXBlKCdjaXJjbGUnKVxuICAgICAgLnNpemUoMyk7XG5cbiAgICBjaGFydC5yZW5kZXIoKTtcblxuICAgIHRoaXMuY2hhcnQgPSBjaGFydDtcblxuICAgIGlmICh0aGlzLmhhc0xlZ2VuZCkge1xuICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHRoaXMubGVnZW5kRGF0YSA9IGNoYXJ0XG4gICAgICAgICAgLmdldEFsbEdlb21zKClbMF1cbiAgICAgICAgICAuX2F0dHJzLmRhdGFBcnJheS5tYXAoKGl0ZW06IGFueSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3JpZ2luID0gaXRlbVswXS5fb3JpZ2luO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgICAgICAgICBuYW1lOiBvcmlnaW4ubmFtZSxcbiAgICAgICAgICAgICAgY29sb3I6IGl0ZW1bMF0uY29sb3IsXG4gICAgICAgICAgICAgIGNoZWNrZWQ6IHRydWUsXG4gICAgICAgICAgICAgIHZhbHVlOiBpdGVtLnJlZHVjZSgocCwgbikgPT4gcCArIG4uX29yaWdpbi52YWx1ZSwgMCksXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdW5pbnN0YWxsKCkge1xuICAgIGlmICh0aGlzLmNoYXJ0KSB7XG4gICAgICB0aGlzLmNoYXJ0LmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuY2hhcnQgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMucnVuSW5zdGFsbCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy51bmluc3RhbGwoKTtcbiAgfVxufVxuIl19