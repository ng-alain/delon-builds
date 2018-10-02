import { Component, Input, ViewChild, ElementRef, NgZone, ChangeDetectionStrategy, ChangeDetectorRef, Renderer2, NgModule } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { toNumber, toBoolean, updateHostClass, DelonUtilModule } from '@delon/util';
import { __spread } from 'tslib';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
                    template: "<div class=\"g2-pie__chart\">\r\n  <div #container></div>\r\n  <div *ngIf=\"subTitle || total\" class=\"g2-pie__total\">\r\n    <h4 *ngIf=\"subTitle\" class=\"g2-pie__total-title\" [innerHTML]=\"subTitle\"></h4>\r\n    <div *ngIf=\"total\" class=\"g2-pie__total-stat\" [innerHTML]=\"total\"></div>\r\n  </div>\r\n</div>\r\n<ul *ngIf=\"hasLegend && legendData?.length\" class=\"g2-pie__legend\">\r\n  <li *ngFor=\"let item of legendData; let index = index\" (click)=\"_click(index)\" class=\"g2-pie__legend-item\">\r\n    <span class=\"g2-pie__legend-dot\" [ngStyle]=\"{'background-color': !item.checked ? '#aaa' : item.color}\"></span>\r\n    <span class=\"g2-pie__legend-title\">{{item.x}}</span>\r\n    <nz-divider nzType=\"vertical\"></nz-divider>\r\n    <span class=\"g2-pie__legend-percent\">{{item.percent}}%</span>\r\n    <span class=\"g2-pie__legend-value\" [innerHTML]=\"valueFormat ? valueFormat(item.y) : item.y\"></span>\r\n  </li>\r\n</ul>\r\n",
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var COMPONENTS = [G2PieComponent];
var G2PieModule = /** @class */ (function () {
    function G2PieModule() {
    }
    /**
     * @return {?}
     */
    G2PieModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: G2PieModule, providers: [] };
    };
    G2PieModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, DelonUtilModule, NgZorroAntdModule],
                    declarations: __spread(COMPONENTS),
                    exports: __spread(COMPONENTS),
                },] }
    ];
    return G2PieModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { G2PieComponent, G2PieModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AZGVsb24vY2hhcnQvcGllL3BpZS5jb21wb25lbnQudHMiLCJuZzovL0BkZWxvbi9jaGFydC9waWUvcGllLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBWaWV3Q2hpbGQsXHJcbiAgRWxlbWVudFJlZixcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE5nWm9uZSxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIFJlbmRlcmVyMixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyB0b051bWJlciwgdG9Cb29sZWFuLCB1cGRhdGVIb3N0Q2xhc3MgfSBmcm9tICdAZGVsb24vdXRpbCc7XHJcblxyXG5kZWNsYXJlIHZhciBHMjogYW55O1xyXG5kZWNsYXJlIHZhciBEYXRhU2V0OiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2cyLXBpZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BpZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHMlBpZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0IHtcclxuICBwcml2YXRlIHNjcm9sbCQ6IFN1YnNjcmlwdGlvbiA9IG51bGw7XHJcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJylcclxuICBwcml2YXRlIG5vZGU6IEVsZW1lbnRSZWY7XHJcblxyXG4gIHByaXZhdGUgY2hhcnQ6IGFueTtcclxuICBwcml2YXRlIGluaXRGbGFnID0gZmFsc2U7XHJcbiAgbGVnZW5kRGF0YTogYW55W10gPSBbXTtcclxuXHJcbiAgLy8gI3JlZ2lvbiBmaWVsZHNcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgYW5pbWF0ZSh2YWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLl9hbmltYXRlID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcbiAgcHJpdmF0ZSBfYW5pbWF0ZSA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgY29sb3IgPSAncmdiYSgyNCwgMTQ0LCAyNTUsIDAuODUpJztcclxuICBASW5wdXQoKVxyXG4gIHN1YlRpdGxlOiBzdHJpbmc7XHJcbiAgQElucHV0KClcclxuICB0b3RhbDogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGdldCBoZWlnaHQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faGVpZ2h0O1xyXG4gIH1cclxuICBzZXQgaGVpZ2h0KHZhbHVlOiBhbnkpIHtcclxuICAgIHRoaXMuX2hlaWdodCA9IHRvTnVtYmVyKHZhbHVlKTtcclxuICB9XHJcbiAgcHJpdmF0ZSBfaGVpZ2h0ID0gMDtcclxuXHJcbiAgQElucHV0KClcclxuICBnZXQgaGFzTGVnZW5kKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2hhc0xlZ2VuZDtcclxuICB9XHJcbiAgc2V0IGhhc0xlZ2VuZCh2YWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLl9oYXNMZWdlbmQgPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gIH1cclxuICBwcml2YXRlIF9oYXNMZWdlbmQgPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbGVnZW5kQmxvY2sodmFsdWU6IGFueSkge1xyXG4gICAgdGhpcy5fbGVnZW5kQmxvY2sgPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gIH1cclxuICBwcml2YXRlIF9sZWdlbmRCbG9jayA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGlubmVyID0gMC43NTtcclxuICBASW5wdXQoKVxyXG4gIHBhZGRpbmc6IG51bWJlcltdID0gWzEyLCAwLCAxMiwgMF07XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IHBlcmNlbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcGVyY2VudDtcclxuICB9XHJcbiAgc2V0IHBlcmNlbnQodmFsdWU6IGFueSkge1xyXG4gICAgdGhpcy5fcGVyY2VudCA9IHRvTnVtYmVyKHZhbHVlKTtcclxuICB9XHJcbiAgcHJpdmF0ZSBfcGVyY2VudDogbnVtYmVyO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGdldCB0b29sdGlwKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Rvb2x0aXA7XHJcbiAgfVxyXG4gIHNldCB0b29sdGlwKHZhbHVlOiBhbnkpIHtcclxuICAgIHRoaXMuX3Rvb2x0aXAgPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gIH1cclxuICBwcml2YXRlIF90b29sdGlwID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBnZXQgbGluZVdpZHRoKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2xpbmVXaWR0aDtcclxuICB9XHJcbiAgc2V0IGxpbmVXaWR0aCh2YWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLl9saW5lV2lkdGggPSB0b051bWJlcih2YWx1ZSk7XHJcbiAgfVxyXG4gIHByaXZhdGUgX2xpbmVXaWR0aCA9IDA7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IHNlbGVjdCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9zZWxlY3Q7XHJcbiAgfVxyXG4gIHNldCBzZWxlY3QodmFsdWU6IGFueSkge1xyXG4gICAgdGhpcy5fc2VsZWN0ID0gdG9Cb29sZWFuKHZhbHVlKTtcclxuICB9XHJcbiAgcHJpdmF0ZSBfc2VsZWN0ID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBkYXRhOiBBcnJheTx7IHg6IG51bWJlciB8IHN0cmluZzsgeTogbnVtYmVyOyBba2V5OiBzdHJpbmddOiBhbnkgfT47XHJcbiAgQElucHV0KClcclxuICB2YWx1ZUZvcm1hdDogRnVuY3Rpb247XHJcbiAgQElucHV0KClcclxuICBjb2xvcnM6IGFueVtdO1xyXG5cclxuICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgcmVuZDogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIHpvbmU6IE5nWm9uZSxcclxuICApIHt9XHJcblxyXG4gIHByaXZhdGUgc2V0Q2xzKCkge1xyXG4gICAgdXBkYXRlSG9zdENsYXNzKFxyXG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgIHRoaXMucmVuZCxcclxuICAgICAge1xyXG4gICAgICAgICdnMi1waWUnOiB0cnVlLFxyXG4gICAgICAgICdnMi1waWVfX2xlZ2VuZC1oYXMnOiB0aGlzLmhhc0xlZ2VuZCxcclxuICAgICAgICAnZzItcGllX19sZWdlbmQtYmxvY2snOiB0aGlzLl9sZWdlbmRCbG9jayxcclxuICAgICAgICAnZzItcGllX19taW5pJzogdHlwZW9mIHRoaXMucGVyY2VudCAhPT0gJ3VuZGVmaW5lZCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIHRydWUsXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBydW5JbnN0YWxsKCkge1xyXG4gICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbnN0YWxsKCkpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5zdGFsbCgpIHtcclxuICAgIHRoaXMubGVnZW5kQmxvY2sgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGggPD0gMzgwO1xyXG4gICAgdGhpcy5zZXRDbHMoKTtcclxuXHJcbiAgICBsZXQgZm9ybWF0Q29sb3I7XHJcbiAgICBjb25zdCBpc1BlcmNlbnQgPSB0eXBlb2YgdGhpcy5wZXJjZW50ICE9PSAndW5kZWZpbmVkJztcclxuICAgIGlmIChpc1BlcmNlbnQpIHtcclxuICAgICAgdGhpcy5zZWxlY3QgPSBmYWxzZTtcclxuICAgICAgdGhpcy50b29sdGlwID0gZmFsc2U7XHJcbiAgICAgIGZvcm1hdENvbG9yID0gdmFsdWUgPT5cclxuICAgICAgICB2YWx1ZSA9PT0gJ8Olwo3CoMOmwq/ClCcgPyB0aGlzLmNvbG9yIHx8ICdyZ2JhKDI0LCAxNDQsIDI1NSwgMC44NSknIDogJyNGMEYyRjUnO1xyXG5cclxuICAgICAgdGhpcy5kYXRhID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHg6ICfDpcKNwqDDpsKvwpQnLFxyXG4gICAgICAgICAgeTogdGhpcy5wZXJjZW50LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgeDogJ8Olwo/CjcOmwq/ClCcsXHJcbiAgICAgICAgICB5OiAxMDAgLSB0aGlzLnBlcmNlbnQsXHJcbiAgICAgICAgfSxcclxuICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuZGF0YSB8fCAodGhpcy5kYXRhICYmIHRoaXMuZGF0YS5sZW5ndGggPCAxKSkgcmV0dXJuO1xyXG5cclxuICAgIGlmICh0aGlzLmNoYXJ0KSB0aGlzLmNoYXJ0LmRlc3Ryb3koKTtcclxuICAgIHRoaXMubm9kZS5uYXRpdmVFbGVtZW50LmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgIGNvbnN0IGNoYXJ0ID0gbmV3IEcyLkNoYXJ0KHtcclxuICAgICAgY29udGFpbmVyOiB0aGlzLm5vZGUubmF0aXZlRWxlbWVudCxcclxuICAgICAgZm9yY2VGaXQ6IHRydWUsXHJcbiAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXHJcbiAgICAgIHBhZGRpbmc6IHRoaXMucGFkZGluZyxcclxuICAgICAgYW5pbWF0ZTogdGhpcy5fYW5pbWF0ZSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghdGhpcy50b29sdGlwKSB7XHJcbiAgICAgIGNoYXJ0LnRvb2x0aXAoZmFsc2UpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2hhcnQudG9vbHRpcCh7XHJcbiAgICAgICAgc2hvd1RpdGxlOiBmYWxzZSxcclxuICAgICAgICBpdGVtVHBsOlxyXG4gICAgICAgICAgJzxsaT48c3BhbiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6e2NvbG9yfTtcIiBjbGFzcz1cImcyLXRvb2x0aXAtbWFya2VyXCI+PC9zcGFuPntuYW1lfToge3ZhbHVlfSAlPC9saT4nLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFydC5heGlzKGZhbHNlKTtcclxuICAgIGNoYXJ0LmxlZ2VuZChmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgZHYgPSBuZXcgRGF0YVNldC5EYXRhVmlldygpO1xyXG4gICAgZHYuc291cmNlKHRoaXMuZGF0YSkudHJhbnNmb3JtKHtcclxuICAgICAgdHlwZTogJ3BlcmNlbnQnLFxyXG4gICAgICBmaWVsZDogJ3knLFxyXG4gICAgICBkaW1lbnNpb246ICd4JyxcclxuICAgICAgYXM6ICdwZXJjZW50JyxcclxuICAgIH0pO1xyXG4gICAgY2hhcnQuc291cmNlKGR2LCB7XHJcbiAgICAgIHg6IHtcclxuICAgICAgICB0eXBlOiAnY2F0JyxcclxuICAgICAgICByYW5nZTogWzAsIDFdLFxyXG4gICAgICB9LFxyXG4gICAgICB5OiB7XHJcbiAgICAgICAgbWluOiAwLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgY2hhcnQuY29vcmQoJ3RoZXRhJywgeyBpbm5lclJhZGl1czogdGhpcy5pbm5lciB9KTtcclxuXHJcbiAgICBjaGFydFxyXG4gICAgICAuaW50ZXJ2YWxTdGFjaygpXHJcbiAgICAgIC5wb3NpdGlvbigneScpXHJcbiAgICAgIC5zdHlsZSh7IGxpbmVXaWR0aDogdGhpcy5saW5lV2lkdGgsIHN0cm9rZTogJyNmZmYnIH0pXHJcbiAgICAgIC50b29sdGlwKCd4KnBlcmNlbnQnLCAoaXRlbSwgcGVyY2VudCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBuYW1lOiBpdGVtLFxyXG4gICAgICAgICAgdmFsdWU6IHRoaXMuaGFzTGVnZW5kID8gcGVyY2VudCA6IChwZXJjZW50ICogMTAwKS50b0ZpeGVkKDIpLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jb2xvcigneCcsIGlzUGVyY2VudCA/IGZvcm1hdENvbG9yIDogdGhpcy5jb2xvcnMpXHJcbiAgICAgIC5zZWxlY3QodGhpcy5zZWxlY3QpO1xyXG5cclxuICAgIGNoYXJ0LnJlbmRlcigpO1xyXG5cclxuICAgIHRoaXMuY2hhcnQgPSBjaGFydDtcclxuICAgIGlmICh0aGlzLmhhc0xlZ2VuZCkge1xyXG4gICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLmxlZ2VuZERhdGEgPSBjaGFydFxyXG4gICAgICAgICAgLmdldEFsbEdlb21zKClbMF1cclxuICAgICAgICAgIC5fYXR0cnMuZGF0YUFycmF5Lm1hcCgoaXRlbTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbiA9IGl0ZW1bMF0uX29yaWdpbjtcclxuICAgICAgICAgICAgb3JpZ2luLmNvbG9yID0gaXRlbVswXS5jb2xvcjtcclxuICAgICAgICAgICAgb3JpZ2luLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBvcmlnaW4ucGVyY2VudCA9IChvcmlnaW4ucGVyY2VudCAqIDEwMCkudG9GaXhlZCgyKTtcclxuICAgICAgICAgICAgcmV0dXJuIG9yaWdpbjtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5zdGFsbFJlc2l6ZUV2ZW50KCkge1xyXG4gICAgaWYgKHRoaXMuc2Nyb2xsJCB8fCAhdGhpcy5oYXNMZWdlbmQpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLnNjcm9sbCQgPSBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJylcclxuICAgICAgLnBpcGUoZGVib3VuY2VUaW1lKDIwMCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5ydW5JbnN0YWxsKCkpO1xyXG4gIH1cclxuXHJcbiAgX2NsaWNrKGk6IG51bWJlcikge1xyXG4gICAgdGhpcy5sZWdlbmREYXRhW2ldLmNoZWNrZWQgPSAhdGhpcy5sZWdlbmREYXRhW2ldLmNoZWNrZWQ7XHJcblxyXG4gICAgaWYgKHRoaXMuY2hhcnQpIHtcclxuICAgICAgdGhpcy5jaGFydC5maWx0ZXIoJ3gnLCAodmFsOiBhbnksIGl0ZW06IGFueSkgPT4gaXRlbS5jaGVja2VkKTtcclxuICAgICAgdGhpcy5jaGFydC5yZXBhaW50KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmluaXRGbGFnID0gdHJ1ZTtcclxuICAgIHRoaXMucnVuSW5zdGFsbCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLmluc3RhbGxSZXNpemVFdmVudCgpO1xyXG4gICAgaWYgKHRoaXMuaW5pdEZsYWcpIHRoaXMucnVuSW5zdGFsbCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zY3JvbGwkKSB0aGlzLnNjcm9sbCQudW5zdWJzY3JpYmUoKTtcclxuICAgIGlmICh0aGlzLmNoYXJ0KSB7XHJcbiAgICAgIHRoaXMuY2hhcnQuZGVzdHJveSgpO1xyXG4gICAgICB0aGlzLmNoYXJ0ID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdab3Jyb0FudGRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkJztcclxuaW1wb3J0IHsgRGVsb25VdGlsTW9kdWxlIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xyXG5cclxuaW1wb3J0IHsgRzJQaWVDb21wb25lbnQgfSBmcm9tICcuL3BpZS5jb21wb25lbnQnO1xyXG5cclxuY29uc3QgQ09NUE9ORU5UUyA9IFtHMlBpZUNvbXBvbmVudF07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIERlbG9uVXRpbE1vZHVsZSwgTmdab3Jyb0FudGRNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogWy4uLkNPTVBPTkVOVFNdLFxyXG4gIGV4cG9ydHM6IFsuLi5DT01QT05FTlRTXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEcyUGllTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7IG5nTW9kdWxlOiBHMlBpZU1vZHVsZSwgcHJvdmlkZXJzOiBbXSB9O1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0lBNEhFLHdCQUNVLElBQ0EsTUFDQSxJQUNBO1FBSEEsT0FBRSxHQUFGLEVBQUU7UUFDRixTQUFJLEdBQUosSUFBSTtRQUNKLE9BQUUsR0FBRixFQUFFO1FBQ0YsU0FBSSxHQUFKLElBQUk7dUJBckdrQixJQUFJO3dCQUtqQixLQUFLOzBCQUNKLEVBQUU7d0JBUUgsSUFBSTtxQkFHZiwwQkFBMEI7dUJBYWhCLENBQUM7MEJBU0UsS0FBSzs0QkFNSCxLQUFLO3FCQUdwQixJQUFJO3VCQUVRLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO3dCQWtCZixJQUFJOzBCQVNGLENB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