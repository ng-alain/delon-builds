/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NoYXJ0L3JhZGFyLyIsInNvdXJjZXMiOlsicmFkYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxXQUFXLEVBQ1gsU0FBUyxFQUNULFVBQVUsRUFHVixNQUFNLEVBQ04sV0FBVyxFQUNYLHVCQUF1QixFQUN2QixpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxhQUFhLENBQUM7O0lBK0VoRCwwQkFBb0IsRUFBcUIsRUFBVSxJQUFZO1FBQTNDLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBUTs7c0JBakV0RCxFQUFFO3VCQWtCTyxDQUFDO3VCQUdDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDOzBCQVNmLElBQUk7MEJBTUosQ0FBQztvQkFRakIsRUFBRTtzQkFFVztZQUNoQixTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztTQUNWOzBCQVFtQixFQUFFO0tBRTZDO0lBL0RuRSxzQkFDSSxtQ0FBSzs7Ozs7UUFEVCxVQUNVLEtBQWdDO1lBQ3hDLElBQUksS0FBSyxZQUFZLFdBQVcsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2FBQ3hCOztnQkFBTSxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUM1Qjs7O09BQUE7SUFFRCxzQkFFSSxvQ0FBTTs7OztRQUZWO1lBR0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3JCOzs7OztRQUNELFVBQVcsS0FB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QXdCYSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBIb3N0QmluZGluZyxcbiAgVmlld0NoaWxkLFxuICBFbGVtZW50UmVmLFxuICBPbkRlc3Ryb3ksXG4gIE9uQ2hhbmdlcyxcbiAgTmdab25lLFxuICBUZW1wbGF0ZVJlZixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRvTnVtYmVyLCB0b0Jvb2xlYW4gfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbmRlY2xhcmUgdmFyIEcyOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2cyLXJhZGFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JhZGFyLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDogeyAnW2NsYXNzLmcyLXJhZGFyXSc6ICd0cnVlJyB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIEcyUmFkYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgX3RpdGxlID0gJyc7XG4gIF90aXRsZVRwbDogVGVtcGxhdGVSZWY8YW55PjtcbiAgQElucHV0KClcbiAgc2V0IHRpdGxlKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIHRoaXMuX3RpdGxlID0gbnVsbDtcbiAgICAgIHRoaXMuX3RpdGxlVHBsID0gdmFsdWU7XG4gICAgfSBlbHNlIHRoaXMuX3RpdGxlID0gdmFsdWU7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmhlaWdodC5weCcpXG4gIEBJbnB1dCgpXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcbiAgfVxuICBzZXQgaGVpZ2h0KHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl9oZWlnaHQgPSB0b051bWJlcih2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfaGVpZ2h0ID0gMDtcblxuICBASW5wdXQoKVxuICBwYWRkaW5nOiBudW1iZXJbXSA9IFs0NCwgMzAsIDE2LCAzMF07XG5cbiAgQElucHV0KClcbiAgZ2V0IGhhc0xlZ2VuZCgpIHtcbiAgICByZXR1cm4gdGhpcy5faGFzTGVnZW5kO1xuICB9XG4gIHNldCBoYXNMZWdlbmQodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX2hhc0xlZ2VuZCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfaGFzTGVnZW5kID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBzZXQgdGlja0NvdW50KHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl90aWNrQ291bnQgPSB0b051bWJlcih2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfdGlja0NvdW50ID0gNDtcblxuICBASW5wdXQoKVxuICBkYXRhOiBBcnJheTx7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgdmFsdWU6IG51bWJlcjtcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XG4gIH0+ID0gW107XG5cbiAgQElucHV0KCkgY29sb3JzID0gW1xuICAgICcjMTg5MEZGJyxcbiAgICAnI0ZBQ0MxNCcsXG4gICAgJyMyRkMyNUInLFxuICAgICcjODU0M0UwJyxcbiAgICAnI0YwNDg2NCcsXG4gICAgJyMxM0MyQzInLFxuICAgICcjZmE4YzE2JyxcbiAgICAnI2EwZDkxMScsXG4gIF07XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicpXG4gIHByaXZhdGUgbm9kZTogRWxlbWVudFJlZjtcblxuICBwcml2YXRlIGNoYXJ0OiBhbnk7XG4gIGxlZ2VuZERhdGE6IGFueVtdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgem9uZTogTmdab25lKSB7fVxuXG4gIF9jbGljayhpOiBudW1iZXIpIHtcbiAgICB0aGlzLmxlZ2VuZERhdGFbaV0uY2hlY2tlZCA9ICF0aGlzLmxlZ2VuZERhdGFbaV0uY2hlY2tlZDtcblxuICAgIGlmICh0aGlzLmNoYXJ0KSB7XG4gICAgICAvLyBjb25zdCBmaWx0ZXJJdGVtID0gdGhpcy5sZWdlbmREYXRhLmZpbHRlcihsID0+IGwuY2hlY2tlZCkubWFwKGwgPT4gbC5uYW1lKTtcbiAgICAgIHRoaXMuY2hhcnQuZmlsdGVyKFxuICAgICAgICAnbmFtZScsXG4gICAgICAgICh2YWw6IGFueSkgPT4gdGhpcy5sZWdlbmREYXRhLmZpbmQodyA9PiB3Lm5hbWUgPT09IHZhbCkuY2hlY2tlZCxcbiAgICAgICk7XG4gICAgICB0aGlzLmNoYXJ0LnJlcGFpbnQoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJ1bkluc3RhbGwoKSB7XG4gICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbnN0YWxsKCkpKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5zdGFsbCgpIHtcbiAgICBpZiAoIXRoaXMuZGF0YSB8fCAodGhpcy5kYXRhICYmIHRoaXMuZGF0YS5sZW5ndGggPCAxKSkgcmV0dXJuO1xuXG4gICAgdGhpcy51bmluc3RhbGwoKTtcbiAgICB0aGlzLm5vZGUubmF0aXZlRWxlbWVudC5pbm5lckhUTUwgPSAnJztcblxuICAgIGNvbnN0IGNoYXJ0ID0gbmV3IEcyLkNoYXJ0KHtcbiAgICAgIGNvbnRhaW5lcjogdGhpcy5ub2RlLm5hdGl2ZUVsZW1lbnQsXG4gICAgICBmb3JjZUZpdDogdHJ1ZSxcbiAgICAgIGhlaWdodDogK3RoaXMuaGVpZ2h0IC0gKHRoaXMuaGFzTGVnZW5kID8gODAgOiAyMiksXG4gICAgICBwYWRkaW5nOiB0aGlzLnBhZGRpbmcsXG4gICAgfSk7XG4gICAgY2hhcnQuc291cmNlKHRoaXMuZGF0YSwge1xuICAgICAgdmFsdWU6IHtcbiAgICAgICAgbWluOiAwLFxuICAgICAgICB0aWNrQ291bnQ6IHRoaXMuX3RpY2tDb3VudCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBjaGFydC5jb29yZCgncG9sYXInKTtcbiAgICBjaGFydC5sZWdlbmQoZmFsc2UpO1xuXG4gICAgY2hhcnQuYXhpcygnbGFiZWwnLCB7XG4gICAgICBsaW5lOiBudWxsLFxuICAgICAgbGFiZWxPZmZzZXQ6IDgsXG4gICAgICBsYWJlbHM6IHtcbiAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICBmaWxsOiAncmdiYSgwLCAwLCAwLCAuNjUpJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBncmlkOiB7XG4gICAgICAgIGxpbmU6IHtcbiAgICAgICAgICBzdHJva2U6ICcjZTllOWU5JyxcbiAgICAgICAgICBsaW5lV2lkdGg6IDEsXG4gICAgICAgICAgbGluZURhc2g6IFswLCAwXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBjaGFydC5heGlzKCd2YWx1ZScsIHtcbiAgICAgIGdyaWQ6IHtcbiAgICAgICAgdHlwZTogJ3BvbHlnb24nLFxuICAgICAgICBsaW5lOiB7XG4gICAgICAgICAgc3Ryb2tlOiAnI2U5ZTllOScsXG4gICAgICAgICAgbGluZVdpZHRoOiAxLFxuICAgICAgICAgIGxpbmVEYXNoOiBbMCwgMF0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgbGFiZWxzOiB7XG4gICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgZmlsbDogJ3JnYmEoMCwgMCwgMCwgLjY1KScsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgY2hhcnRcbiAgICAgIC5saW5lKClcbiAgICAgIC5wb3NpdGlvbignbGFiZWwqdmFsdWUnKVxuICAgICAgLmNvbG9yKCduYW1lJywgdGhpcy5jb2xvcnMpO1xuICAgIGNoYXJ0XG4gICAgICAucG9pbnQoKVxuICAgICAgLnBvc2l0aW9uKCdsYWJlbCp2YWx1ZScpXG4gICAgICAuY29sb3IoJ25hbWUnLCB0aGlzLmNvbG9ycylcbiAgICAgIC5zaGFwZSgnY2lyY2xlJylcbiAgICAgIC5zaXplKDMpO1xuXG4gICAgY2hhcnQucmVuZGVyKCk7XG5cbiAgICB0aGlzLmNoYXJ0ID0gY2hhcnQ7XG5cbiAgICBpZiAodGhpcy5oYXNMZWdlbmQpIHtcbiAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmxlZ2VuZERhdGEgPSBjaGFydFxuICAgICAgICAgIC5nZXRBbGxHZW9tcygpWzBdXG4gICAgICAgICAgLl9hdHRycy5kYXRhQXJyYXkubWFwKChpdGVtOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbiA9IGl0ZW1bMF0uX29yaWdpbjtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHtcbiAgICAgICAgICAgICAgbmFtZTogb3JpZ2luLm5hbWUsXG4gICAgICAgICAgICAgIGNvbG9yOiBpdGVtWzBdLmNvbG9yLFxuICAgICAgICAgICAgICBjaGVja2VkOiB0cnVlLFxuICAgICAgICAgICAgICB2YWx1ZTogaXRlbS5yZWR1Y2UoKHAsIG4pID0+IHAgKyBuLl9vcmlnaW4udmFsdWUsIDApLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVuaW5zdGFsbCgpIHtcbiAgICBpZiAodGhpcy5jaGFydCkge1xuICAgICAgdGhpcy5jaGFydC5kZXN0cm95KCk7XG4gICAgICB0aGlzLmNoYXJ0ID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLnJ1bkluc3RhbGwoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMudW5pbnN0YWxsKCk7XG4gIH1cbn1cbiJdfQ==