/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
        set: 
        // #region fields
        /**
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
                    changeDetection: ChangeDetectionStrategy.OnPush
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9jaGFydC9waWUvIiwic291cmNlcyI6WyJwaWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUdWLE1BQU0sRUFDTix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBRWpCLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQWdCLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBS25FO0lBcUdFLGFBQWE7SUFFYix3QkFDVSxFQUFjLEVBQ2QsSUFBZSxFQUNmLEVBQXFCLEVBQ3JCLElBQVk7UUFIWixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2QsU0FBSSxHQUFKLElBQUksQ0FBVztRQUNmLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBQ3JCLFNBQUksR0FBSixJQUFJLENBQVE7UUFyR2QsWUFBTyxHQUFpQixJQUFJLENBQUM7UUFLN0IsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUN6QixlQUFVLEdBQVUsRUFBRSxDQUFDO1FBUWYsYUFBUSxHQUFHLElBQUksQ0FBQztRQUd4QixVQUFLLEdBQUcsMEJBQTBCLENBQUM7UUFhM0IsWUFBTyxHQUFHLENBQUMsQ0FBQztRQVNaLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFNbkIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFHN0IsVUFBSyxHQUFHLElBQUksQ0FBQztRQUViLFlBQU8sR0FBYSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBa0IzQixhQUFRLEdBQUcsSUFBSSxDQUFDO1FBU2hCLGVB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LENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1NBQ25CO0lBQ0gsQ0FBQzs7Z0JBdFFGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsUUFBUTtvQkFDbEIsdzZCQUFtQztvQkFDbkMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQXBCQyxVQUFVO2dCQU9WLFNBQVM7Z0JBRlQsaUJBQWlCO2dCQUZqQixNQUFNOzs7dUJBb0JMLFNBQVMsU0FBQyxXQUFXOzBCQVNyQixLQUFLO3dCQU1MLEtBQUs7MkJBRUwsS0FBSzt3QkFFTCxLQUFLO3lCQUdMLEtBQUs7NEJBU0wsS0FBSzs4QkFTTCxLQUFLO3dCQU1MLEtBQUs7MEJBRUwsS0FBSzswQkFHTCxLQUFLOzBCQVNMLEtBQUs7NEJBU0wsS0FBSzt5QkFTTCxLQUFLO3VCQVNMLEtBQUs7OEJBRUwsS0FBSzt5QkFFTCxLQUFLOztJQXFLUixxQkFBQztDQUFBLEFBdlFELElBdVFDO1NBbFFZLGNBQWM7OztJQUN6QixpQ0FBcUM7O0lBQ3JDLDhCQUN5Qjs7SUFFekIsK0JBQW1COztJQUNuQixrQ0FBeUI7O0lBQ3pCLG9DQUF1Qjs7SUFRdkIsa0NBQXdCOztJQUV4QiwrQkFDbUM7O0lBQ25DLGtDQUNpQjs7SUFDakIsK0JBQ2M7O0lBU2QsaUNBQW9COztJQVNwQixvQ0FBMkI7O0lBTTNCLHNDQUE2Qjs7SUFFN0IsK0JBQ2E7O0lBQ2IsaUNBQ21DOztJQVNuQyxrQ0FBeUI7O0lBU3pCLGtDQUF3Qjs7SUFTeEIsb0NBQXVCOztJQVN2QixpQ0FBdUI7O0lBRXZCLDhCQUNtRTs7SUFDbkUscUNBQ3NCOztJQUN0QixnQ0FDYzs7SUFLWiw0QkFBc0I7O0lBQ3RCLDhCQUF1Qjs7SUFDdkIsNEJBQTZCOztJQUM3Qiw4QkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBWaWV3Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIE9uRGVzdHJveSxcbiAgT25DaGFuZ2VzLFxuICBOZ1pvbmUsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgUmVuZGVyZXIyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyB0b051bWJlciwgdG9Cb29sZWFuLCB1cGRhdGVIb3N0Q2xhc3MgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbmRlY2xhcmUgdmFyIEcyOiBhbnk7XG5kZWNsYXJlIHZhciBEYXRhU2V0OiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2cyLXBpZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9waWUuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgRzJQaWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCB7XG4gIHByaXZhdGUgc2Nyb2xsJDogU3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJylcbiAgcHJpdmF0ZSBub2RlOiBFbGVtZW50UmVmO1xuXG4gIHByaXZhdGUgY2hhcnQ6IGFueTtcbiAgcHJpdmF0ZSBpbml0RmxhZyA9IGZhbHNlO1xuICBsZWdlbmREYXRhOiBhbnlbXSA9IFtdO1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KClcbiAgc2V0IGFuaW1hdGUodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX2FuaW1hdGUgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX2FuaW1hdGUgPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIGNvbG9yID0gJ3JnYmEoMjQsIDE0NCwgMjU1LCAwLjg1KSc7XG4gIEBJbnB1dCgpXG4gIHN1YlRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHRvdGFsOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgZ2V0IGhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5faGVpZ2h0O1xuICB9XG4gIHNldCBoZWlnaHQodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX2hlaWdodCA9IHRvTnVtYmVyKHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9oZWlnaHQgPSAwO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBoYXNMZWdlbmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hhc0xlZ2VuZDtcbiAgfVxuICBzZXQgaGFzTGVnZW5kKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl9oYXNMZWdlbmQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX2hhc0xlZ2VuZCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBsZWdlbmRCbG9jayh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5fbGVnZW5kQmxvY2sgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX2xlZ2VuZEJsb2NrID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgaW5uZXIgPSAwLjc1O1xuICBASW5wdXQoKVxuICBwYWRkaW5nOiBudW1iZXJbXSA9IFsxMiwgMCwgMTIsIDBdO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBwZXJjZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9wZXJjZW50O1xuICB9XG4gIHNldCBwZXJjZW50KHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl9wZXJjZW50ID0gdG9OdW1iZXIodmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX3BlcmNlbnQ6IG51bWJlcjtcblxuICBASW5wdXQoKVxuICBnZXQgdG9vbHRpcCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdG9vbHRpcDtcbiAgfVxuICBzZXQgdG9vbHRpcCh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5fdG9vbHRpcCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfdG9vbHRpcCA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgZ2V0IGxpbmVXaWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGluZVdpZHRoO1xuICB9XG4gIHNldCBsaW5lV2lkdGgodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX2xpbmVXaWR0aCA9IHRvTnVtYmVyKHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9saW5lV2lkdGggPSAwO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBzZWxlY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdDtcbiAgfVxuICBzZXQgc2VsZWN0KHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl9zZWxlY3QgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX3NlbGVjdCA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgZGF0YTogQXJyYXk8eyB4OiBudW1iZXIgfCBzdHJpbmc7IHk6IG51bWJlcjsgW2tleTogc3RyaW5nXTogYW55IH0+O1xuICBASW5wdXQoKVxuICB2YWx1ZUZvcm1hdDogRnVuY3Rpb247XG4gIEBJbnB1dCgpXG4gIGNvbG9yczogYW55W107XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsXG4gICkge31cblxuICBwcml2YXRlIHNldENscygpIHtcbiAgICB1cGRhdGVIb3N0Q2xhc3MoXG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICB0aGlzLnJlbmQsXG4gICAgICB7XG4gICAgICAgICdnMi1waWUnOiB0cnVlLFxuICAgICAgICAnZzItcGllX19sZWdlbmQtaGFzJzogdGhpcy5oYXNMZWdlbmQsXG4gICAgICAgICdnMi1waWVfX2xlZ2VuZC1ibG9jayc6IHRoaXMuX2xlZ2VuZEJsb2NrLFxuICAgICAgICAnZzItcGllX19taW5pJzogdHlwZW9mIHRoaXMucGVyY2VudCAhPT0gJ3VuZGVmaW5lZCcsXG4gICAgICB9LFxuICAgICAgdHJ1ZSxcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBydW5JbnN0YWxsKCkge1xuICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5zdGFsbCgpKSk7XG4gIH1cblxuICBwcml2YXRlIGluc3RhbGwoKSB7XG4gICAgdGhpcy5sZWdlbmRCbG9jayA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aCA8PSAzODA7XG4gICAgdGhpcy5zZXRDbHMoKTtcblxuICAgIGxldCBmb3JtYXRDb2xvcjtcbiAgICBjb25zdCBpc1BlcmNlbnQgPSB0eXBlb2YgdGhpcy5wZXJjZW50ICE9PSAndW5kZWZpbmVkJztcbiAgICBpZiAoaXNQZXJjZW50KSB7XG4gICAgICB0aGlzLnNlbGVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy50b29sdGlwID0gZmFsc2U7XG4gICAgICBmb3JtYXRDb2xvciA9IHZhbHVlID0+XG4gICAgICAgIHZhbHVlID09PSAn5Y2g5q+UJyA/IHRoaXMuY29sb3IgfHwgJ3JnYmEoMjQsIDE0NCwgMjU1LCAwLjg1KScgOiAnI0YwRjJGNSc7XG5cbiAgICAgIHRoaXMuZGF0YSA9IFtcbiAgICAgICAge1xuICAgICAgICAgIHg6ICfljaDmr5QnLFxuICAgICAgICAgIHk6IHRoaXMucGVyY2VudCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHg6ICflj43mr5QnLFxuICAgICAgICAgIHk6IDEwMCAtIHRoaXMucGVyY2VudCxcbiAgICAgICAgfSxcbiAgICAgIF07XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmRhdGEgfHwgKHRoaXMuZGF0YSAmJiB0aGlzLmRhdGEubGVuZ3RoIDwgMSkpIHJldHVybjtcblxuICAgIGlmICh0aGlzLmNoYXJ0KSB0aGlzLmNoYXJ0LmRlc3Ryb3koKTtcbiAgICB0aGlzLm5vZGUubmF0aXZlRWxlbWVudC5pbm5lckhUTUwgPSAnJztcblxuICAgIGNvbnN0IGNoYXJ0ID0gbmV3IEcyLkNoYXJ0KHtcbiAgICAgIGNvbnRhaW5lcjogdGhpcy5ub2RlLm5hdGl2ZUVsZW1lbnQsXG4gICAgICBmb3JjZUZpdDogdHJ1ZSxcbiAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXG4gICAgICBwYWRkaW5nOiB0aGlzLnBhZGRpbmcsXG4gICAgICBhbmltYXRlOiB0aGlzLl9hbmltYXRlLFxuICAgIH0pO1xuXG4gICAgaWYgKCF0aGlzLnRvb2x0aXApIHtcbiAgICAgIGNoYXJ0LnRvb2x0aXAoZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGFydC50b29sdGlwKHtcbiAgICAgICAgc2hvd1RpdGxlOiBmYWxzZSxcbiAgICAgICAgaXRlbVRwbDpcbiAgICAgICAgICAnPGxpPjxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjp7Y29sb3J9O1wiIGNsYXNzPVwiZzItdG9vbHRpcC1tYXJrZXJcIj48L3NwYW4+e25hbWV9OiB7dmFsdWV9ICU8L2xpPicsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjaGFydC5heGlzKGZhbHNlKTtcbiAgICBjaGFydC5sZWdlbmQoZmFsc2UpO1xuXG4gICAgY29uc3QgZHYgPSBuZXcgRGF0YVNldC5EYXRhVmlldygpO1xuICAgIGR2LnNvdXJjZSh0aGlzLmRhdGEpLnRyYW5zZm9ybSh7XG4gICAgICB0eXBlOiAncGVyY2VudCcsXG4gICAgICBmaWVsZDogJ3knLFxuICAgICAgZGltZW5zaW9uOiAneCcsXG4gICAgICBhczogJ3BlcmNlbnQnLFxuICAgIH0pO1xuICAgIGNoYXJ0LnNvdXJjZShkdiwge1xuICAgICAgeDoge1xuICAgICAgICB0eXBlOiAnY2F0JyxcbiAgICAgICAgcmFuZ2U6IFswLCAxXSxcbiAgICAgIH0sXG4gICAgICB5OiB7XG4gICAgICAgIG1pbjogMCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBjaGFydC5jb29yZCgndGhldGEnLCB7IGlubmVyUmFkaXVzOiB0aGlzLmlubmVyIH0pO1xuXG4gICAgY2hhcnRcbiAgICAgIC5pbnRlcnZhbFN0YWNrKClcbiAgICAgIC5wb3NpdGlvbigneScpXG4gICAgICAuc3R5bGUoeyBsaW5lV2lkdGg6IHRoaXMubGluZVdpZHRoLCBzdHJva2U6ICcjZmZmJyB9KVxuICAgICAgLnRvb2x0aXAoJ3gqcGVyY2VudCcsIChpdGVtLCBwZXJjZW50KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbmFtZTogaXRlbSxcbiAgICAgICAgICB2YWx1ZTogdGhpcy5oYXNMZWdlbmQgPyBwZXJjZW50IDogKHBlcmNlbnQgKiAxMDApLnRvRml4ZWQoMiksXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICAgLmNvbG9yKCd4JywgaXNQZXJjZW50ID8gZm9ybWF0Q29sb3IgOiB0aGlzLmNvbG9ycylcbiAgICAgIC5zZWxlY3QodGhpcy5zZWxlY3QpO1xuXG4gICAgY2hhcnQucmVuZGVyKCk7XG5cbiAgICB0aGlzLmNoYXJ0ID0gY2hhcnQ7XG4gICAgaWYgKHRoaXMuaGFzTGVnZW5kKSB7XG4gICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5sZWdlbmREYXRhID0gY2hhcnRcbiAgICAgICAgICAuZ2V0QWxsR2VvbXMoKVswXVxuICAgICAgICAgIC5fYXR0cnMuZGF0YUFycmF5Lm1hcCgoaXRlbTogYW55KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcmlnaW4gPSBpdGVtWzBdLl9vcmlnaW47XG4gICAgICAgICAgICBvcmlnaW4uY29sb3IgPSBpdGVtWzBdLmNvbG9yO1xuICAgICAgICAgICAgb3JpZ2luLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgb3JpZ2luLnBlcmNlbnQgPSAob3JpZ2luLnBlcmNlbnQgKiAxMDApLnRvRml4ZWQoMik7XG4gICAgICAgICAgICByZXR1cm4gb3JpZ2luO1xuICAgICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaW5zdGFsbFJlc2l6ZUV2ZW50KCkge1xuICAgIGlmICh0aGlzLnNjcm9sbCQgfHwgIXRoaXMuaGFzTGVnZW5kKSByZXR1cm47XG5cbiAgICB0aGlzLnNjcm9sbCQgPSBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJylcbiAgICAgIC5waXBlKGRlYm91bmNlVGltZSgyMDApKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLnJ1bkluc3RhbGwoKSk7XG4gIH1cblxuICBfY2xpY2soaTogbnVtYmVyKSB7XG4gICAgdGhpcy5sZWdlbmREYXRhW2ldLmNoZWNrZWQgPSAhdGhpcy5sZWdlbmREYXRhW2ldLmNoZWNrZWQ7XG5cbiAgICBpZiAodGhpcy5jaGFydCkge1xuICAgICAgdGhpcy5jaGFydC5maWx0ZXIoJ3gnLCAodmFsOiBhbnksIGl0ZW06IGFueSkgPT4gaXRlbS5jaGVja2VkKTtcbiAgICAgIHRoaXMuY2hhcnQucmVwYWludCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmluaXRGbGFnID0gdHJ1ZTtcbiAgICB0aGlzLnJ1bkluc3RhbGwoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuaW5zdGFsbFJlc2l6ZUV2ZW50KCk7XG4gICAgaWYgKHRoaXMuaW5pdEZsYWcpIHRoaXMucnVuSW5zdGFsbCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2Nyb2xsJCkgdGhpcy5zY3JvbGwkLnVuc3Vic2NyaWJlKCk7XG4gICAgaWYgKHRoaXMuY2hhcnQpIHtcbiAgICAgIHRoaXMuY2hhcnQuZGVzdHJveSgpO1xuICAgICAgdGhpcy5jaGFydCA9IG51bGw7XG4gICAgfVxuICB9XG59XG4iXX0=