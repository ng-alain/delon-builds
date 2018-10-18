/**
 * @license ng-alain(cipchk@qq.com) v2.0.0-beta.5-7f41db4
 * (c) 2018 Cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('@delon/util'), require('@angular/common'), require('ng-zorro-antd')) :
    typeof define === 'function' && define.amd ? define('@delon/chart/pie', ['exports', '@angular/core', 'rxjs', 'rxjs/operators', '@delon/util', '@angular/common', 'ng-zorro-antd'], factory) :
    (factory((global.delon = global.delon || {}, global.delon.chart = global.delon.chart || {}, global.delon.chart.pie = {}),global.ng.core,global.rxjs,global.rxjs.operators,global.delon.util,global.ng.common,global.ngZorro.antd));
}(this, (function (exports,core,rxjs,operators,util,common,ngZorroAntd) { 'use strict';

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
             */ function (value) {
                this._animate = util.toBoolean(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(G2PieComponent.prototype, "height", {
            get: /**
             * @return {?}
             */ function () {
                return this._height;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._height = util.toNumber(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(G2PieComponent.prototype, "hasLegend", {
            get: /**
             * @return {?}
             */ function () {
                return this._hasLegend;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._hasLegend = util.toBoolean(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(G2PieComponent.prototype, "legendBlock", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._legendBlock = util.toBoolean(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(G2PieComponent.prototype, "percent", {
            get: /**
             * @return {?}
             */ function () {
                return this._percent;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._percent = util.toNumber(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(G2PieComponent.prototype, "tooltip", {
            get: /**
             * @return {?}
             */ function () {
                return this._tooltip;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._tooltip = util.toBoolean(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(G2PieComponent.prototype, "lineWidth", {
            get: /**
             * @return {?}
             */ function () {
                return this._lineWidth;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._lineWidth = util.toNumber(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(G2PieComponent.prototype, "select", {
            get: /**
             * @return {?}
             */ function () {
                return this._select;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._select = util.toBoolean(value);
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
                util.updateHostClass(this.el.nativeElement, this.rend, {
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
                this.scroll$ = rxjs.fromEvent(window, 'resize')
                    .pipe(operators.debounceTime(200))
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
            { type: core.Component, args: [{
                        selector: 'g2-pie',
                        template: "<div class=\"g2-pie__chart\">\n  <div #container></div>\n  <div *ngIf=\"subTitle || total\" class=\"g2-pie__total\">\n    <h4 *ngIf=\"subTitle\" class=\"g2-pie__total-title\" [innerHTML]=\"subTitle\"></h4>\n    <div *ngIf=\"total\" class=\"g2-pie__total-stat\" [innerHTML]=\"total\"></div>\n  </div>\n</div>\n<ul *ngIf=\"hasLegend && legendData?.length\" class=\"g2-pie__legend\">\n  <li *ngFor=\"let item of legendData; let index = index\" (click)=\"_click(index)\" class=\"g2-pie__legend-item\">\n    <span class=\"g2-pie__legend-dot\" [ngStyle]=\"{'background-color': !item.checked ? '#aaa' : item.color}\"></span>\n    <span class=\"g2-pie__legend-title\">{{item.x}}</span>\n    <nz-divider nzType=\"vertical\"></nz-divider>\n    <span class=\"g2-pie__legend-percent\">{{item.percent}}%</span>\n    <span class=\"g2-pie__legend-value\" [innerHTML]=\"valueFormat ? valueFormat(item.y) : item.y\"></span>\n  </li>\n</ul>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        preserveWhitespaces: false
                    }] }
        ];
        /** @nocollapse */
        G2PieComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Renderer2 },
                { type: core.ChangeDetectorRef },
                { type: core.NgZone }
            ];
        };
        G2PieComponent.propDecorators = {
            node: [{ type: core.ViewChild, args: ['container',] }],
            animate: [{ type: core.Input }],
            color: [{ type: core.Input }],
            subTitle: [{ type: core.Input }],
            total: [{ type: core.Input }],
            height: [{ type: core.Input }],
            hasLegend: [{ type: core.Input }],
            legendBlock: [{ type: core.Input }],
            inner: [{ type: core.Input }],
            padding: [{ type: core.Input }],
            percent: [{ type: core.Input }],
            tooltip: [{ type: core.Input }],
            lineWidth: [{ type: core.Input }],
            select: [{ type: core.Input }],
            data: [{ type: core.Input }],
            valueFormat: [{ type: core.Input }],
            colors: [{ type: core.Input }]
        };
        return G2PieComponent;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

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
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, util.DelonUtilModule, ngZorroAntd.NgZorroAntdModule],
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

    exports.G2PieComponent = G2PieComponent;
    exports.G2PieModule = G2PieModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGRlbG9uL2NoYXJ0L3BpZS9waWUuY29tcG9uZW50LnRzIiwibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm5nOi8vQGRlbG9uL2NoYXJ0L3BpZS9waWUubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIFZpZXdDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgT25EZXN0cm95LFxuICBPbkNoYW5nZXMsXG4gIE5nWm9uZSxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBBZnRlclZpZXdJbml0LFxuICBSZW5kZXJlcjIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IHRvTnVtYmVyLCB0b0Jvb2xlYW4sIHVwZGF0ZUhvc3RDbGFzcyB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuZGVjbGFyZSB2YXIgRzI6IGFueTtcbmRlY2xhcmUgdmFyIERhdGFTZXQ6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZzItcGllJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BpZS5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgRzJQaWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCB7XG4gIHByaXZhdGUgc2Nyb2xsJDogU3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJylcbiAgcHJpdmF0ZSBub2RlOiBFbGVtZW50UmVmO1xuXG4gIHByaXZhdGUgY2hhcnQ6IGFueTtcbiAgcHJpdmF0ZSBpbml0RmxhZyA9IGZhbHNlO1xuICBsZWdlbmREYXRhOiBhbnlbXSA9IFtdO1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KClcbiAgc2V0IGFuaW1hdGUodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX2FuaW1hdGUgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX2FuaW1hdGUgPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIGNvbG9yID0gJ3JnYmEoMjQsIDE0NCwgMjU1LCAwLjg1KSc7XG4gIEBJbnB1dCgpXG4gIHN1YlRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHRvdGFsOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgZ2V0IGhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5faGVpZ2h0O1xuICB9XG4gIHNldCBoZWlnaHQodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX2hlaWdodCA9IHRvTnVtYmVyKHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9oZWlnaHQgPSAwO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBoYXNMZWdlbmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hhc0xlZ2VuZDtcbiAgfVxuICBzZXQgaGFzTGVnZW5kKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl9oYXNMZWdlbmQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX2hhc0xlZ2VuZCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBsZWdlbmRCbG9jayh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5fbGVnZW5kQmxvY2sgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX2xlZ2VuZEJsb2NrID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgaW5uZXIgPSAwLjc1O1xuICBASW5wdXQoKVxuICBwYWRkaW5nOiBudW1iZXJbXSA9IFsxMiwgMCwgMTIsIDBdO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBwZXJjZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9wZXJjZW50O1xuICB9XG4gIHNldCBwZXJjZW50KHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl9wZXJjZW50ID0gdG9OdW1iZXIodmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX3BlcmNlbnQ6IG51bWJlcjtcblxuICBASW5wdXQoKVxuICBnZXQgdG9vbHRpcCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdG9vbHRpcDtcbiAgfVxuICBzZXQgdG9vbHRpcCh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5fdG9vbHRpcCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfdG9vbHRpcCA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgZ2V0IGxpbmVXaWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGluZVdpZHRoO1xuICB9XG4gIHNldCBsaW5lV2lkdGgodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX2xpbmVXaWR0aCA9IHRvTnVtYmVyKHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9saW5lV2lkdGggPSAwO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBzZWxlY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdDtcbiAgfVxuICBzZXQgc2VsZWN0KHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl9zZWxlY3QgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX3NlbGVjdCA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgZGF0YTogQXJyYXk8eyB4OiBudW1iZXIgfCBzdHJpbmc7IHk6IG51bWJlcjsgW2tleTogc3RyaW5nXTogYW55IH0+O1xuICBASW5wdXQoKVxuICB2YWx1ZUZvcm1hdDogRnVuY3Rpb247XG4gIEBJbnB1dCgpXG4gIGNvbG9yczogYW55W107XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsXG4gICkge31cblxuICBwcml2YXRlIHNldENscygpIHtcbiAgICB1cGRhdGVIb3N0Q2xhc3MoXG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICB0aGlzLnJlbmQsXG4gICAgICB7XG4gICAgICAgICdnMi1waWUnOiB0cnVlLFxuICAgICAgICAnZzItcGllX19sZWdlbmQtaGFzJzogdGhpcy5oYXNMZWdlbmQsXG4gICAgICAgICdnMi1waWVfX2xlZ2VuZC1ibG9jayc6IHRoaXMuX2xlZ2VuZEJsb2NrLFxuICAgICAgICAnZzItcGllX19taW5pJzogdHlwZW9mIHRoaXMucGVyY2VudCAhPT0gJ3VuZGVmaW5lZCcsXG4gICAgICB9LFxuICAgICAgdHJ1ZSxcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBydW5JbnN0YWxsKCkge1xuICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5zdGFsbCgpKSk7XG4gIH1cblxuICBwcml2YXRlIGluc3RhbGwoKSB7XG4gICAgdGhpcy5sZWdlbmRCbG9jayA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aCA8PSAzODA7XG4gICAgdGhpcy5zZXRDbHMoKTtcblxuICAgIGxldCBmb3JtYXRDb2xvcjtcbiAgICBjb25zdCBpc1BlcmNlbnQgPSB0eXBlb2YgdGhpcy5wZXJjZW50ICE9PSAndW5kZWZpbmVkJztcbiAgICBpZiAoaXNQZXJjZW50KSB7XG4gICAgICB0aGlzLnNlbGVjdCA9IGZhbHNlO1xuICAgICAgdGhpcy50b29sdGlwID0gZmFsc2U7XG4gICAgICBmb3JtYXRDb2xvciA9IHZhbHVlID0+XG4gICAgICAgIHZhbHVlID09PSAnw6XCjcKgw6bCr8KUJyA/IHRoaXMuY29sb3IgfHwgJ3JnYmEoMjQsIDE0NCwgMjU1LCAwLjg1KScgOiAnI0YwRjJGNSc7XG5cbiAgICAgIHRoaXMuZGF0YSA9IFtcbiAgICAgICAge1xuICAgICAgICAgIHg6ICfDpcKNwqDDpsKvwpQnLFxuICAgICAgICAgIHk6IHRoaXMucGVyY2VudCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHg6ICfDpcKPwo3DpsKvwpQnLFxuICAgICAgICAgIHk6IDEwMCAtIHRoaXMucGVyY2VudCxcbiAgICAgICAgfSxcbiAgICAgIF07XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmRhdGEgfHwgKHRoaXMuZGF0YSAmJiB0aGlzLmRhdGEubGVuZ3RoIDwgMSkpIHJldHVybjtcblxuICAgIGlmICh0aGlzLmNoYXJ0KSB0aGlzLmNoYXJ0LmRlc3Ryb3koKTtcbiAgICB0aGlzLm5vZGUubmF0aXZlRWxlbWVudC5pbm5lckhUTUwgPSAnJztcblxuICAgIGNvbnN0IGNoYXJ0ID0gbmV3IEcyLkNoYXJ0KHtcbiAgICAgIGNvbnRhaW5lcjogdGhpcy5ub2RlLm5hdGl2ZUVsZW1lbnQsXG4gICAgICBmb3JjZUZpdDogdHJ1ZSxcbiAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXG4gICAgICBwYWRkaW5nOiB0aGlzLnBhZGRpbmcsXG4gICAgICBhbmltYXRlOiB0aGlzLl9hbmltYXRlLFxuICAgIH0pO1xuXG4gICAgaWYgKCF0aGlzLnRvb2x0aXApIHtcbiAgICAgIGNoYXJ0LnRvb2x0aXAoZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGFydC50b29sdGlwKHtcbiAgICAgICAgc2hvd1RpdGxlOiBmYWxzZSxcbiAgICAgICAgaXRlbVRwbDpcbiAgICAgICAgICAnPGxpPjxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjp7Y29sb3J9O1wiIGNsYXNzPVwiZzItdG9vbHRpcC1tYXJrZXJcIj48L3NwYW4+e25hbWV9OiB7dmFsdWV9ICU8L2xpPicsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjaGFydC5heGlzKGZhbHNlKTtcbiAgICBjaGFydC5sZWdlbmQoZmFsc2UpO1xuXG4gICAgY29uc3QgZHYgPSBuZXcgRGF0YVNldC5EYXRhVmlldygpO1xuICAgIGR2LnNvdXJjZSh0aGlzLmRhdGEpLnRyYW5zZm9ybSh7XG4gICAgICB0eXBlOiAncGVyY2VudCcsXG4gICAgICBmaWVsZDogJ3knLFxuICAgICAgZGltZW5zaW9uOiAneCcsXG4gICAgICBhczogJ3BlcmNlbnQnLFxuICAgIH0pO1xuICAgIGNoYXJ0LnNvdXJjZShkdiwge1xuICAgICAgeDoge1xuICAgICAgICB0eXBlOiAnY2F0JyxcbiAgICAgICAgcmFuZ2U6IFswLCAxXSxcbiAgICAgIH0sXG4gICAgICB5OiB7XG4gICAgICAgIG1pbjogMCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBjaGFydC5jb29yZCgndGhldGEnLCB7IGlubmVyUmFkaXVzOiB0aGlzLmlubmVyIH0pO1xuXG4gICAgY2hhcnRcbiAgICAgIC5pbnRlcnZhbFN0YWNrKClcbiAgICAgIC5wb3NpdGlvbigneScpXG4gICAgICAuc3R5bGUoeyBsaW5lV2lkdGg6IHRoaXMubGluZVdpZHRoLCBzdHJva2U6ICcjZmZmJyB9KVxuICAgICAgLnRvb2x0aXAoJ3gqcGVyY2VudCcsIChpdGVtLCBwZXJjZW50KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbmFtZTogaXRlbSxcbiAgICAgICAgICB2YWx1ZTogdGhpcy5oYXNMZWdlbmQgPyBwZXJjZW50IDogKHBlcmNlbnQgKiAxMDApLnRvRml4ZWQoMiksXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICAgLmNvbG9yKCd4JywgaXNQZXJjZW50ID8gZm9ybWF0Q29sb3IgOiB0aGlzLmNvbG9ycylcbiAgICAgIC5zZWxlY3QodGhpcy5zZWxlY3QpO1xuXG4gICAgY2hhcnQucmVuZGVyKCk7XG5cbiAgICB0aGlzLmNoYXJ0ID0gY2hhcnQ7XG4gICAgaWYgKHRoaXMuaGFzTGVnZW5kKSB7XG4gICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5sZWdlbmREYXRhID0gY2hhcnRcbiAgICAgICAgICAuZ2V0QWxsR2VvbXMoKVswXVxuICAgICAgICAgIC5fYXR0cnMuZGF0YUFycmF5Lm1hcCgoaXRlbTogYW55KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcmlnaW4gPSBpdGVtWzBdLl9vcmlnaW47XG4gICAgICAgICAgICBvcmlnaW4uY29sb3IgPSBpdGVtWzBdLmNvbG9yO1xuICAgICAgICAgICAgb3JpZ2luLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgb3JpZ2luLnBlcmNlbnQgPSAob3JpZ2luLnBlcmNlbnQgKiAxMDApLnRvRml4ZWQoMik7XG4gICAgICAgICAgICByZXR1cm4gb3JpZ2luO1xuICAgICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaW5zdGFsbFJlc2l6ZUV2ZW50KCkge1xuICAgIGlmICh0aGlzLnNjcm9sbCQgfHwgIXRoaXMuaGFzTGVnZW5kKSByZXR1cm47XG5cbiAgICB0aGlzLnNjcm9sbCQgPSBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJylcbiAgICAgIC5waXBlKGRlYm91bmNlVGltZSgyMDApKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLnJ1bkluc3RhbGwoKSk7XG4gIH1cblxuICBfY2xpY2soaTogbnVtYmVyKSB7XG4gICAgdGhpcy5sZWdlbmREYXRhW2ldLmNoZWNrZWQgPSAhdGhpcy5sZWdlbmREYXRhW2ldLmNoZWNrZWQ7XG5cbiAgICBpZiAodGhpcy5jaGFydCkge1xuICAgICAgdGhpcy5jaGFydC5maWx0ZXIoJ3gnLCAodmFsOiBhbnksIGl0ZW06IGFueSkgPT4gaXRlbS5jaGVja2VkKTtcbiAgICAgIHRoaXMuY2hhcnQucmVwYWludCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmluaXRGbGFnID0gdHJ1ZTtcbiAgICB0aGlzLnJ1bkluc3RhbGwoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuaW5zdGFsbFJlc2l6ZUV2ZW50KCk7XG4gICAgaWYgKHRoaXMuaW5pdEZsYWcpIHRoaXMucnVuSW5zdGFsbCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2Nyb2xsJCkgdGhpcy5zY3JvbGwkLnVuc3Vic2NyaWJlKCk7XG4gICAgaWYgKHRoaXMuY2hhcnQpIHtcbiAgICAgIHRoaXMuY2hhcnQuZGVzdHJveSgpO1xuICAgICAgdGhpcy5jaGFydCA9IG51bGw7XG4gICAgfVxuICB9XG59XG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdab3Jyb0FudGRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkJztcbmltcG9ydCB7IERlbG9uVXRpbE1vZHVsZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuaW1wb3J0IHsgRzJQaWVDb21wb25lbnQgfSBmcm9tICcuL3BpZS5jb21wb25lbnQnO1xuXG5jb25zdCBDT01QT05FTlRTID0gW0cyUGllQ29tcG9uZW50XTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRGVsb25VdGlsTW9kdWxlLCBOZ1pvcnJvQW50ZE1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogWy4uLkNPTVBPTkVOVFNdLFxuICBleHBvcnRzOiBbLi4uQ09NUE9ORU5UU10sXG59KVxuZXhwb3J0IGNsYXNzIEcyUGllTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHsgbmdNb2R1bGU6IEcyUGllTW9kdWxlLCBwcm92aWRlcnM6IFtdIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJ0b0Jvb2xlYW4iLCJ0b051bWJlciIsInVwZGF0ZUhvc3RDbGFzcyIsImZyb21FdmVudCIsImRlYm91bmNlVGltZSIsIkNvbXBvbmVudCIsIkNoYW5nZURldGVjdGlvblN0cmF0ZWd5IiwiRWxlbWVudFJlZiIsIlJlbmRlcmVyMiIsIkNoYW5nZURldGVjdG9yUmVmIiwiTmdab25lIiwiVmlld0NoaWxkIiwiSW5wdXQiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSIsIkRlbG9uVXRpbE1vZHVsZSIsIk5nWm9ycm9BbnRkTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O1FBNEhFLHdCQUNVLElBQ0EsTUFDQSxJQUNBO1lBSEEsT0FBRSxHQUFGLEVBQUU7WUFDRixTQUFJLEdBQUosSUFBSTtZQUNKLE9BQUUsR0FBRixFQUFFO1lBQ0YsU0FBSSxHQUFKLElBQUk7MkJBckdrQixJQUFJOzRCQUtq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