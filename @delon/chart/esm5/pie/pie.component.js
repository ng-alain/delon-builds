/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ElementRef, NgZone, ChangeDetectionStrategy, ChangeDetectorRef, Renderer2, } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { toNumber, toBoolean, updateHostClass } from '@delon/util';
var G2PieComponent = /** @class */ (function () {
    // #endregion
    function G2PieComponent(el, rend, cd, zone) {
        this.el = el;
        this.rend = rend;
        this.cd = cd;
        this.zone = zone;
        this.scroll$ = null;
        this.initFlag = false;
        this.legendData = [];
        this._animate = true;
        this.color = 'rgba(24, 144, 255, 0.85)';
        this._height = 0;
        this._hasLegend = false;
        this._legendBlock = false;
        this.inner = 0.75;
        this.padding = [12, 0, 12, 0];
        this._tooltip = true;
        this._lineWidth = 0;
        this._select = true;
    }
    Object.defineProperty(G2PieComponent.prototype, "animate", {
        // #region fields
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._animate = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G2PieComponent.prototype, "height", {
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
    Object.defineProperty(G2PieComponent.prototype, "hasLegend", {
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
    Object.defineProperty(G2PieComponent.prototype, "legendBlock", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._legendBlock = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G2PieComponent.prototype, "percent", {
        get: /**
         * @return {?}
         */
        function () {
            return this._percent;
        },
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
    Object.defineProperty(G2PieComponent.prototype, "tooltip", {
        get: /**
         * @return {?}
         */
        function () {
            return this._tooltip;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._tooltip = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G2PieComponent.prototype, "lineWidth", {
        get: /**
         * @return {?}
         */
        function () {
            return this._lineWidth;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._lineWidth = toNumber(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G2PieComponent.prototype, "select", {
        get: /**
         * @return {?}
         */
        function () {
            return this._select;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._select = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    G2PieComponent.prototype.setCls = /**
     * @return {?}
     */
    function () {
        updateHostClass(this.el.nativeElement, this.rend, {
            'g2-pie': true,
            'g2-pie__legend-has': this.hasLegend,
            'g2-pie__legend-block': this._legendBlock,
            'g2-pie__mini': typeof this.percent !== 'undefined',
        }, true);
    };
    /**
     * @return {?}
     */
    G2PieComponent.prototype.runInstall = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.zone.runOutsideAngular(function () { return setTimeout(function () { return _this.install(); }); });
    };
    /**
     * @return {?}
     */
    G2PieComponent.prototype.install = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.legendBlock = this.el.nativeElement.clientWidth <= 380;
        this.setCls();
        /** @type {?} */
        var formatColor;
        /** @type {?} */
        var isPercent = typeof this.percent !== 'undefined';
        if (isPercent) {
            this.select = false;
            this.tooltip = false;
            formatColor = function (value) {
                return value === '占比' ? _this.color || 'rgba(24, 144, 255, 0.85)' : '#F0F2F5';
            };
            this.data = [
                {
                    x: '占比',
                    y: this.percent,
                },
                {
                    x: '反比',
                    y: 100 - this.percent,
                },
            ];
        }
        if (!this.data || (this.data && this.data.length < 1))
            return;
        if (this.chart)
            this.chart.destroy();
        this.node.nativeElement.innerHTML = '';
        /** @type {?} */
        var chart = new G2.Chart({
            container: this.node.nativeElement,
            forceFit: true,
            height: this.height,
            padding: this.padding,
            animate: this._animate,
        });
        if (!this.tooltip) {
            chart.tooltip(false);
        }
        else {
            chart.tooltip({
                showTitle: false,
                itemTpl: '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value} %</li>',
            });
        }
        chart.axis(false);
        chart.legend(false);
        /** @type {?} */
        var dv = new DataSet.DataView();
        dv.source(this.data).transform({
            type: 'percent',
            field: 'y',
            dimension: 'x',
            as: 'percent',
        });
        chart.source(dv, {
            x: {
                type: 'cat',
                range: [0, 1],
            },
            y: {
                min: 0,
            },
        });
        chart.coord('theta', { innerRadius: this.inner });
        chart
            .intervalStack()
            .position('y')
            .style({ lineWidth: this.lineWidth, stroke: '#fff' })
            .tooltip('x*percent', function (item, percent) {
            return {
                name: item,
                value: _this.hasLegend ? percent : (percent * 100).toFixed(2),
            };
        })
            .color('x', isPercent ? formatColor : this.colors)
            .select(this.select);
        chart.render();
        this.chart = chart;
        if (this.hasLegend) {
            this.zone.run(function () {
                _this.legendData = chart
                    .getAllGeoms()[0]
                    ._attrs.dataArray.map(function (item) {
                    /** @type {?} */
                    var origin = item[0]._origin;
                    origin.color = item[0].color;
                    origin.checked = true;
                    origin.percent = (origin.percent * 100).toFixed(2);
                    return origin;
                });
                _this.cd.detectChanges();
            });
        }
    };
    /**
     * @return {?}
     */
    G2PieComponent.prototype.installResizeEvent = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.scroll$ || !this.hasLegend)
            return;
        this.scroll$ = fromEvent(window, 'resize')
            .pipe(debounceTime(200))
            .subscribe(function () { return _this.runInstall(); });
    };
    /**
     * @param {?} i
     * @return {?}
     */
    G2PieComponent.prototype._click = /**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        this.legendData[i].checked = !this.legendData[i].checked;
        if (this.chart) {
            this.chart.filter('x', function (val, item) { return item.checked; });
            this.chart.repaint();
        }
    };
    /**
     * @return {?}
     */
    G2PieComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.initFlag = true;
        this.runInstall();
    };
    /**
     * @return {?}
     */
    G2PieComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.installResizeEvent();
        if (this.initFlag)
            this.runInstall();
    };
    /**
     * @return {?}
     */
    G2PieComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.scroll$)
            this.scroll$.unsubscribe();
        if (this.chart) {
            this.chart.destroy();
            this.chart = null;
        }
    };
    G2PieComponent.decorators = [
        { type: Component, args: [{
                    selector: 'g2-pie',
                    template: "<div class=\"g2-pie__chart\">\n  <div #container></div>\n  <div *ngIf=\"subTitle || total\" class=\"g2-pie__total\">\n    <h4 *ngIf=\"subTitle\" class=\"g2-pie__total-title\" [innerHTML]=\"subTitle\"></h4>\n    <div *ngIf=\"total\" class=\"g2-pie__total-stat\" [innerHTML]=\"total\"></div>\n  </div>\n</div>\n<ul *ngIf=\"hasLegend && legendData?.length\" class=\"g2-pie__legend\">\n  <li *ngFor=\"let item of legendData; let index = index\" (click)=\"_click(index)\" class=\"g2-pie__legend-item\">\n    <span class=\"g2-pie__legend-dot\" [ngStyle]=\"{'background-color': !item.checked ? '#aaa' : item.color}\"></span>\n    <span class=\"g2-pie__legend-title\">{{item.x}}</span>\n    <nz-divider nzType=\"vertical\"></nz-divider>\n    <span class=\"g2-pie__legend-percent\">{{item.percent}}%</span>\n    <span class=\"g2-pie__legend-value\" [innerHTML]=\"valueFormat ? valueFormat(item.y) : item.y\"></span>\n  </li>\n</ul>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false
                }] }
    ];
    /** @nocollapse */
    G2PieComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: ChangeDetectorRef },
        { type: NgZone }
    ]; };
    G2PieComponent.propDecorators = {
        node: [{ type: ViewChild, args: ['container',] }],
        animate: [{ type: Input }],
        color: [{ type: Input }],
        subTitle: [{ type: Input }],
        total: [{ type: Input }],
        height: [{ type: Input }],
        hasLegend: [{ type: Input }],
        legendBlock: [{ type: Input }],
        inner: [{ type: Input }],
        padding: [{ type: Input }],
        percent: [{ type: Input }],
        tooltip: [{ type: Input }],
        lineWidth: [{ type: Input }],
        select: [{ type: Input }],
        data: [{ type: Input }],
        valueFormat: [{ type: Input }],
        colors: [{ type: Input }]
    };
    return G2PieComponent;
}());
export { G2PieComponent };
if (false) {
    /** @type {?} */
    G2PieComponent.prototype.scroll$;
    /** @type {?} */
    G2PieComponent.prototype.node;
    /** @type {?} */
    G2PieComponent.prototype.chart;
    /** @type {?} */
    G2PieComponent.prototype.initFlag;
    /** @type {?} */
    G2PieComponent.prototype.legendData;
    /** @type {?} */
    G2PieComponent.prototype._animate;
    /** @type {?} */
    G2PieComponent.prototype.color;
    /** @type {?} */
    G2PieComponent.prototype.subTitle;
    /** @type {?} */
    G2PieComponent.prototype.total;
    /** @type {?} */
    G2PieComponent.prototype._height;
    /** @type {?} */
    G2PieComponent.prototype._hasLegend;
    /** @type {?} */
    G2PieComponent.prototype._legendBlock;
    /** @type {?} */
    G2PieComponent.prototype.inner;
    /** @type {?} */
    G2PieComponent.prototype.padding;
    /** @type {?} */
    G2PieComponent.prototype._percent;
    /** @type {?} */
    G2PieComponent.prototype._tooltip;
    /** @type {?} */
    G2PieComponent.prototype._lineWidth;
    /** @type {?} */
    G2PieComponent.prototype._select;
    /** @type {?} */
    G2PieComponent.prototype.data;
    /** @type {?} */
    G2PieComponent.prototype.valueFormat;
    /** @type {?} */
    G2PieComponent.prototype.colors;
    /** @type {?} */
    G2PieComponent.prototype.el;
    /** @type {?} */
    G2PieComponent.prototype.rend;
    /** @type {?} */
    G2PieComponent.prototype.cd;
    /** @type {?} */
    G2PieComponent.prototype.zone;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9jaGFydC9waWUvIiwic291cmNlcyI6WyJwaWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUdWLE1BQU0sRUFDTix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBRWpCLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQWdCLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLE1BQU0sYUFBYSxDQUFDOztJQTJHakUsYUFBYTtJQUViLHdCQUNVLElBQ0EsTUFDQSxJQUNBO1FBSEEsT0FBRSxHQUFGLEVBQUU7UUFDRixTQUFJLEdBQUosSUFBSTtRQUNKLE9BQUUsR0FBRixFQUFFO1FBQ0YsU0FBSSxHQUFKLElBQUk7dUJBckdrQixJQUFJO3dCQUtqQixLQUFLOzBCQUNKLEVBQUU7d0JBUUgsSUFBSTtxQkFHZiwwQkFBMEI7dUJBYWhCLENBQUM7MEJBU0UsS0FBSzs0QkFNSCxLQUFLO3FCQUdwQixJQUFJO3VCQUVRLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO3dCQWtCZixJQUFJOzBCQVNGLENBQUM7dUJBU0osSUFBSTtLQWdCbEI7SUE1Rkosc0JBQ0ksbUNBQU87UUFIWCxpQkFBaUI7Ozs7O1FBRWpCLFVBQ1ksS0FBVTtZQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNsQzs7O09BQUE7SUFVRCxzQkFDSSxrQ0FBTTs7OztRQURWO1lBRUUsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3JCOzs7OztRQUNELFVB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TCxLQUFLOzBCQVNMLEtBQUs7NEJBU0wsS0FBSzt5QkFTTCxLQUFLO3VCQVNMLEtBQUs7OEJBRUwsS0FBSzt5QkFFTCxLQUFLOzt5QkF2SFI7O1NBMEJhLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBWaWV3Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIE9uRGVzdHJveSxcbiAgT25DaGFuZ2VzLFxuICBOZ1pvbmUsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgUmVuZGVyZXIyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyB0b051bWJlciwgdG9Cb29sZWFuLCB1cGRhdGVIb3N0Q2xhc3MgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbmRlY2xhcmUgdmFyIEcyOiBhbnk7XG5kZWNsYXJlIHZhciBEYXRhU2V0OiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2cyLXBpZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9waWUuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIEcyUGllQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQge1xuICBwcml2YXRlIHNjcm9sbCQ6IFN1YnNjcmlwdGlvbiA9IG51bGw7XG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicpXG4gIHByaXZhdGUgbm9kZTogRWxlbWVudFJlZjtcblxuICBwcml2YXRlIGNoYXJ0OiBhbnk7XG4gIHByaXZhdGUgaW5pdEZsYWcgPSBmYWxzZTtcbiAgbGVnZW5kRGF0YTogYW55W10gPSBbXTtcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCgpXG4gIHNldCBhbmltYXRlKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl9hbmltYXRlID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9hbmltYXRlID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBjb2xvciA9ICdyZ2JhKDI0LCAxNDQsIDI1NSwgMC44NSknO1xuICBASW5wdXQoKVxuICBzdWJUaXRsZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICB0b3RhbDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBoZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcbiAgfVxuICBzZXQgaGVpZ2h0KHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl9oZWlnaHQgPSB0b051bWJlcih2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfaGVpZ2h0ID0gMDtcblxuICBASW5wdXQoKVxuICBnZXQgaGFzTGVnZW5kKCkge1xuICAgIHJldHVybiB0aGlzLl9oYXNMZWdlbmQ7XG4gIH1cbiAgc2V0IGhhc0xlZ2VuZCh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5faGFzTGVnZW5kID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9oYXNMZWdlbmQgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBzZXQgbGVnZW5kQmxvY2sodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX2xlZ2VuZEJsb2NrID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9sZWdlbmRCbG9jayA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIGlubmVyID0gMC43NTtcbiAgQElucHV0KClcbiAgcGFkZGluZzogbnVtYmVyW10gPSBbMTIsIDAsIDEyLCAwXTtcblxuICBASW5wdXQoKVxuICBnZXQgcGVyY2VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGVyY2VudDtcbiAgfVxuICBzZXQgcGVyY2VudCh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5fcGVyY2VudCA9IHRvTnVtYmVyKHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9wZXJjZW50OiBudW1iZXI7XG5cbiAgQElucHV0KClcbiAgZ2V0IHRvb2x0aXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Rvb2x0aXA7XG4gIH1cbiAgc2V0IHRvb2x0aXAodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX3Rvb2x0aXAgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX3Rvb2x0aXAgPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBsaW5lV2lkdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xpbmVXaWR0aDtcbiAgfVxuICBzZXQgbGluZVdpZHRoKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl9saW5lV2lkdGggPSB0b051bWJlcih2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfbGluZVdpZHRoID0gMDtcblxuICBASW5wdXQoKVxuICBnZXQgc2VsZWN0KCkge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3Q7XG4gIH1cbiAgc2V0IHNlbGVjdCh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5fc2VsZWN0ID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9zZWxlY3QgPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIGRhdGE6IEFycmF5PHsgeDogbnVtYmVyIHwgc3RyaW5nOyB5OiBudW1iZXI7IFtrZXk6IHN0cmluZ106IGFueSB9PjtcbiAgQElucHV0KClcbiAgdmFsdWVGb3JtYXQ6IEZ1bmN0aW9uO1xuICBASW5wdXQoKVxuICBjb2xvcnM6IGFueVtdO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZDogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgem9uZTogTmdab25lLFxuICApIHt9XG5cbiAgcHJpdmF0ZSBzZXRDbHMoKSB7XG4gICAgdXBkYXRlSG9zdENsYXNzKFxuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LFxuICAgICAgdGhpcy5yZW5kLFxuICAgICAge1xuICAgICAgICAnZzItcGllJzogdHJ1ZSxcbiAgICAgICAgJ2cyLXBpZV9fbGVnZW5kLWhhcyc6IHRoaXMuaGFzTGVnZW5kLFxuICAgICAgICAnZzItcGllX19sZWdlbmQtYmxvY2snOiB0aGlzLl9sZWdlbmRCbG9jayxcbiAgICAgICAgJ2cyLXBpZV9fbWluaSc6IHR5cGVvZiB0aGlzLnBlcmNlbnQgIT09ICd1bmRlZmluZWQnLFxuICAgICAgfSxcbiAgICAgIHRydWUsXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgcnVuSW5zdGFsbCgpIHtcbiAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmluc3RhbGwoKSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbnN0YWxsKCkge1xuICAgIHRoaXMubGVnZW5kQmxvY2sgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGggPD0gMzgwO1xuICAgIHRoaXMuc2V0Q2xzKCk7XG5cbiAgICBsZXQgZm9ybWF0Q29sb3I7XG4gICAgY29uc3QgaXNQZXJjZW50ID0gdHlwZW9mIHRoaXMucGVyY2VudCAhPT0gJ3VuZGVmaW5lZCc7XG4gICAgaWYgKGlzUGVyY2VudCkge1xuICAgICAgdGhpcy5zZWxlY3QgPSBmYWxzZTtcbiAgICAgIHRoaXMudG9vbHRpcCA9IGZhbHNlO1xuICAgICAgZm9ybWF0Q29sb3IgPSB2YWx1ZSA9PlxuICAgICAgICB2YWx1ZSA9PT0gJ+WNoOavlCcgPyB0aGlzLmNvbG9yIHx8ICdyZ2JhKDI0LCAxNDQsIDI1NSwgMC44NSknIDogJyNGMEYyRjUnO1xuXG4gICAgICB0aGlzLmRhdGEgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICB4OiAn5Y2g5q+UJyxcbiAgICAgICAgICB5OiB0aGlzLnBlcmNlbnQsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB4OiAn5Y+N5q+UJyxcbiAgICAgICAgICB5OiAxMDAgLSB0aGlzLnBlcmNlbnQsXG4gICAgICAgIH0sXG4gICAgICBdO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5kYXRhIHx8ICh0aGlzLmRhdGEgJiYgdGhpcy5kYXRhLmxlbmd0aCA8IDEpKSByZXR1cm47XG5cbiAgICBpZiAodGhpcy5jaGFydCkgdGhpcy5jaGFydC5kZXN0cm95KCk7XG4gICAgdGhpcy5ub2RlLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBjb25zdCBjaGFydCA9IG5ldyBHMi5DaGFydCh7XG4gICAgICBjb250YWluZXI6IHRoaXMubm9kZS5uYXRpdmVFbGVtZW50LFxuICAgICAgZm9yY2VGaXQ6IHRydWUsXG4gICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxuICAgICAgcGFkZGluZzogdGhpcy5wYWRkaW5nLFxuICAgICAgYW5pbWF0ZTogdGhpcy5fYW5pbWF0ZSxcbiAgICB9KTtcblxuICAgIGlmICghdGhpcy50b29sdGlwKSB7XG4gICAgICBjaGFydC50b29sdGlwKGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2hhcnQudG9vbHRpcCh7XG4gICAgICAgIHNob3dUaXRsZTogZmFsc2UsXG4gICAgICAgIGl0ZW1UcGw6XG4gICAgICAgICAgJzxsaT48c3BhbiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6e2NvbG9yfTtcIiBjbGFzcz1cImcyLXRvb2x0aXAtbWFya2VyXCI+PC9zcGFuPntuYW1lfToge3ZhbHVlfSAlPC9saT4nLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2hhcnQuYXhpcyhmYWxzZSk7XG4gICAgY2hhcnQubGVnZW5kKGZhbHNlKTtcblxuICAgIGNvbnN0IGR2ID0gbmV3IERhdGFTZXQuRGF0YVZpZXcoKTtcbiAgICBkdi5zb3VyY2UodGhpcy5kYXRhKS50cmFuc2Zvcm0oe1xuICAgICAgdHlwZTogJ3BlcmNlbnQnLFxuICAgICAgZmllbGQ6ICd5JyxcbiAgICAgIGRpbWVuc2lvbjogJ3gnLFxuICAgICAgYXM6ICdwZXJjZW50JyxcbiAgICB9KTtcbiAgICBjaGFydC5zb3VyY2UoZHYsIHtcbiAgICAgIHg6IHtcbiAgICAgICAgdHlwZTogJ2NhdCcsXG4gICAgICAgIHJhbmdlOiBbMCwgMV0sXG4gICAgICB9LFxuICAgICAgeToge1xuICAgICAgICBtaW46IDAsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgY2hhcnQuY29vcmQoJ3RoZXRhJywgeyBpbm5lclJhZGl1czogdGhpcy5pbm5lciB9KTtcblxuICAgIGNoYXJ0XG4gICAgICAuaW50ZXJ2YWxTdGFjaygpXG4gICAgICAucG9zaXRpb24oJ3knKVxuICAgICAgLnN0eWxlKHsgbGluZVdpZHRoOiB0aGlzLmxpbmVXaWR0aCwgc3Ryb2tlOiAnI2ZmZicgfSlcbiAgICAgIC50b29sdGlwKCd4KnBlcmNlbnQnLCAoaXRlbSwgcGVyY2VudCkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG5hbWU6IGl0ZW0sXG4gICAgICAgICAgdmFsdWU6IHRoaXMuaGFzTGVnZW5kID8gcGVyY2VudCA6IChwZXJjZW50ICogMTAwKS50b0ZpeGVkKDIpLFxuICAgICAgICB9O1xuICAgICAgfSlcbiAgICAgIC5jb2xvcigneCcsIGlzUGVyY2VudCA/IGZvcm1hdENvbG9yIDogdGhpcy5jb2xvcnMpXG4gICAgICAuc2VsZWN0KHRoaXMuc2VsZWN0KTtcblxuICAgIGNoYXJ0LnJlbmRlcigpO1xuXG4gICAgdGhpcy5jaGFydCA9IGNoYXJ0O1xuICAgIGlmICh0aGlzLmhhc0xlZ2VuZCkge1xuICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHRoaXMubGVnZW5kRGF0YSA9IGNoYXJ0XG4gICAgICAgICAgLmdldEFsbEdlb21zKClbMF1cbiAgICAgICAgICAuX2F0dHJzLmRhdGFBcnJheS5tYXAoKGl0ZW06IGFueSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3JpZ2luID0gaXRlbVswXS5fb3JpZ2luO1xuICAgICAgICAgICAgb3JpZ2luLmNvbG9yID0gaXRlbVswXS5jb2xvcjtcbiAgICAgICAgICAgIG9yaWdpbi5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIG9yaWdpbi5wZXJjZW50ID0gKG9yaWdpbi5wZXJjZW50ICogMTAwKS50b0ZpeGVkKDIpO1xuICAgICAgICAgICAgcmV0dXJuIG9yaWdpbjtcbiAgICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGluc3RhbGxSZXNpemVFdmVudCgpIHtcbiAgICBpZiAodGhpcy5zY3JvbGwkIHx8ICF0aGlzLmhhc0xlZ2VuZCkgcmV0dXJuO1xuXG4gICAgdGhpcy5zY3JvbGwkID0gZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpXG4gICAgICAucGlwZShkZWJvdW5jZVRpbWUoMjAwKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5ydW5JbnN0YWxsKCkpO1xuICB9XG5cbiAgX2NsaWNrKGk6IG51bWJlcikge1xuICAgIHRoaXMubGVnZW5kRGF0YVtpXS5jaGVja2VkID0gIXRoaXMubGVnZW5kRGF0YVtpXS5jaGVja2VkO1xuXG4gICAgaWYgKHRoaXMuY2hhcnQpIHtcbiAgICAgIHRoaXMuY2hhcnQuZmlsdGVyKCd4JywgKHZhbDogYW55LCBpdGVtOiBhbnkpID0+IGl0ZW0uY2hlY2tlZCk7XG4gICAgICB0aGlzLmNoYXJ0LnJlcGFpbnQoKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbml0RmxhZyA9IHRydWU7XG4gICAgdGhpcy5ydW5JbnN0YWxsKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLmluc3RhbGxSZXNpemVFdmVudCgpO1xuICAgIGlmICh0aGlzLmluaXRGbGFnKSB0aGlzLnJ1bkluc3RhbGwoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNjcm9sbCQpIHRoaXMuc2Nyb2xsJC51bnN1YnNjcmliZSgpO1xuICAgIGlmICh0aGlzLmNoYXJ0KSB7XG4gICAgICB0aGlzLmNoYXJ0LmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuY2hhcnQgPSBudWxsO1xuICAgIH1cbiAgfVxufVxuIl19