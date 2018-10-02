/**
 * @license ng-alain(cipchk@qq.com) v2.0.0-beta.3-ed90aa6
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
                        template: "<div class=\"g2-pie__chart\">\r\n  <div #container></div>\r\n  <div *ngIf=\"subTitle || total\" class=\"g2-pie__total\">\r\n    <h4 *ngIf=\"subTitle\" class=\"g2-pie__total-title\" [innerHTML]=\"subTitle\"></h4>\r\n    <div *ngIf=\"total\" class=\"g2-pie__total-stat\" [innerHTML]=\"total\"></div>\r\n  </div>\r\n</div>\r\n<ul *ngIf=\"hasLegend && legendData?.length\" class=\"g2-pie__legend\">\r\n  <li *ngFor=\"let item of legendData; let index = index\" (click)=\"_click(index)\" class=\"g2-pie__legend-item\">\r\n    <span class=\"g2-pie__legend-dot\" [ngStyle]=\"{'background-color': !item.checked ? '#aaa' : item.color}\"></span>\r\n    <span class=\"g2-pie__legend-title\">{{item.x}}</span>\r\n    <nz-divider nzType=\"vertical\"></nz-divider>\r\n    <span class=\"g2-pie__legend-percent\">{{item.percent}}%</span>\r\n    <span class=\"g2-pie__legend-value\" [innerHTML]=\"valueFormat ? valueFormat(item.y) : item.y\"></span>\r\n  </li>\r\n</ul>\r\n",
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGRlbG9uL2NoYXJ0L3BpZS9waWUuY29tcG9uZW50LnRzIiwibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm5nOi8vQGRlbG9uL2NoYXJ0L3BpZS9waWUubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIFZpZXdDaGlsZCxcclxuICBFbGVtZW50UmVmLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkNoYW5nZXMsXHJcbiAgTmdab25lLFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgUmVuZGVyZXIyLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24sIGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IHRvTnVtYmVyLCB0b0Jvb2xlYW4sIHVwZGF0ZUhvc3RDbGFzcyB9IGZyb20gJ0BkZWxvbi91dGlsJztcclxuXHJcbmRlY2xhcmUgdmFyIEcyOiBhbnk7XHJcbmRlY2xhcmUgdmFyIERhdGFTZXQ6IGFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZzItcGllJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcGllLmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEcyUGllQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQge1xyXG4gIHByaXZhdGUgc2Nyb2xsJDogU3Vic2NyaXB0aW9uID0gbnVsbDtcclxuICBAVmlld0NoaWxkKCdjb250YWluZXInKVxyXG4gIHByaXZhdGUgbm9kZTogRWxlbWVudFJlZjtcclxuXHJcbiAgcHJpdmF0ZSBjaGFydDogYW55O1xyXG4gIHByaXZhdGUgaW5pdEZsYWcgPSBmYWxzZTtcclxuICBsZWdlbmREYXRhOiBhbnlbXSA9IFtdO1xyXG5cclxuICAvLyAjcmVnaW9uIGZpZWxkc1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBhbmltYXRlKHZhbHVlOiBhbnkpIHtcclxuICAgIHRoaXMuX2FuaW1hdGUgPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gIH1cclxuICBwcml2YXRlIF9hbmltYXRlID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBjb2xvciA9ICdyZ2JhKDI0LCAxNDQsIDI1NSwgMC44NSknO1xyXG4gIEBJbnB1dCgpXHJcbiAgc3ViVGl0bGU6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIHRvdGFsOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IGhlaWdodCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9oZWlnaHQ7XHJcbiAgfVxyXG4gIHNldCBoZWlnaHQodmFsdWU6IGFueSkge1xyXG4gICAgdGhpcy5faGVpZ2h0ID0gdG9OdW1iZXIodmFsdWUpO1xyXG4gIH1cclxuICBwcml2YXRlIF9oZWlnaHQgPSAwO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGdldCBoYXNMZWdlbmQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faGFzTGVnZW5kO1xyXG4gIH1cclxuICBzZXQgaGFzTGVnZW5kKHZhbHVlOiBhbnkpIHtcclxuICAgIHRoaXMuX2hhc0xlZ2VuZCA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG4gIHByaXZhdGUgX2hhc0xlZ2VuZCA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBsZWdlbmRCbG9jayh2YWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLl9sZWdlbmRCbG9jayA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG4gIHByaXZhdGUgX2xlZ2VuZEJsb2NrID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgaW5uZXIgPSAwLjc1O1xyXG4gIEBJbnB1dCgpXHJcbiAgcGFkZGluZzogbnVtYmVyW10gPSBbMTIsIDAsIDEyLCAwXTtcclxuXHJcbiAgQElucHV0KClcclxuICBnZXQgcGVyY2VudCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9wZXJjZW50O1xyXG4gIH1cclxuICBzZXQgcGVyY2VudCh2YWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLl9wZXJjZW50ID0gdG9OdW1iZXIodmFsdWUpO1xyXG4gIH1cclxuICBwcml2YXRlIF9wZXJjZW50OiBudW1iZXI7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IHRvb2x0aXAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdG9vbHRpcDtcclxuICB9XHJcbiAgc2V0IHRvb2x0aXAodmFsdWU6IGFueSkge1xyXG4gICAgdGhpcy5fdG9vbHRpcCA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG4gIHByaXZhdGUgX3Rvb2x0aXAgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGdldCBsaW5lV2lkdGgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fbGluZVdpZHRoO1xyXG4gIH1cclxuICBzZXQgbGluZVdpZHRoKHZhbHVlOiBhbnkpIHtcclxuICAgIHRoaXMuX2xpbmVXaWR0aCA9IHRvTnVtYmVyKHZhbHVlKTtcclxuICB9XHJcbiAgcHJpdmF0ZSBfbGluZVdpZHRoID0gMDtcclxuXHJcbiAgQElucHV0KClcclxuICBnZXQgc2VsZWN0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdDtcclxuICB9XHJcbiAgc2V0IHNlbGVjdCh2YWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLl9zZWxlY3QgPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gIH1cclxuICBwcml2YXRlIF9zZWxlY3QgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGRhdGE6IEFycmF5PHsgeDogbnVtYmVyIHwgc3RyaW5nOyB5OiBudW1iZXI7IFtrZXk6IHN0cmluZ106IGFueSB9PjtcclxuICBASW5wdXQoKVxyXG4gIHZhbHVlRm9ybWF0OiBGdW5jdGlvbjtcclxuICBASW5wdXQoKVxyXG4gIGNvbG9yczogYW55W107XHJcblxyXG4gIC8vICNlbmRyZWdpb25cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSByZW5kOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgem9uZTogTmdab25lLFxyXG4gICkge31cclxuXHJcbiAgcHJpdmF0ZSBzZXRDbHMoKSB7XHJcbiAgICB1cGRhdGVIb3N0Q2xhc3MoXHJcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudCxcclxuICAgICAgdGhpcy5yZW5kLFxyXG4gICAgICB7XHJcbiAgICAgICAgJ2cyLXBpZSc6IHRydWUsXHJcbiAgICAgICAgJ2cyLXBpZV9fbGVnZW5kLWhhcyc6IHRoaXMuaGFzTGVnZW5kLFxyXG4gICAgICAgICdnMi1waWVfX2xlZ2VuZC1ibG9jayc6IHRoaXMuX2xlZ2VuZEJsb2NrLFxyXG4gICAgICAgICdnMi1waWVfX21pbmknOiB0eXBlb2YgdGhpcy5wZXJjZW50ICE9PSAndW5kZWZpbmVkJyxcclxuICAgICAgfSxcclxuICAgICAgdHJ1ZSxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJ1bkluc3RhbGwoKSB7XHJcbiAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gc2V0VGltZW91dCgoKSA9PiB0aGlzLmluc3RhbGwoKSkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbnN0YWxsKCkge1xyXG4gICAgdGhpcy5sZWdlbmRCbG9jayA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aCA8PSAzODA7XHJcbiAgICB0aGlzLnNldENscygpO1xyXG5cclxuICAgIGxldCBmb3JtYXRDb2xvcjtcclxuICAgIGNvbnN0IGlzUGVyY2VudCA9IHR5cGVvZiB0aGlzLnBlcmNlbnQgIT09ICd1bmRlZmluZWQnO1xyXG4gICAgaWYgKGlzUGVyY2VudCkge1xyXG4gICAgICB0aGlzLnNlbGVjdCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnRvb2x0aXAgPSBmYWxzZTtcclxuICAgICAgZm9ybWF0Q29sb3IgPSB2YWx1ZSA9PlxyXG4gICAgICAgIHZhbHVlID09PSAnw6XCjcKgw6bCr8KUJyA/IHRoaXMuY29sb3IgfHwgJ3JnYmEoMjQsIDE0NCwgMjU1LCAwLjg1KScgOiAnI0YwRjJGNSc7XHJcblxyXG4gICAgICB0aGlzLmRhdGEgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgeDogJ8Olwo3CoMOmwq/ClCcsXHJcbiAgICAgICAgICB5OiB0aGlzLnBlcmNlbnQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB4OiAnw6XCj8KNw6bCr8KUJyxcclxuICAgICAgICAgIHk6IDEwMCAtIHRoaXMucGVyY2VudCxcclxuICAgICAgICB9LFxyXG4gICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5kYXRhIHx8ICh0aGlzLmRhdGEgJiYgdGhpcy5kYXRhLmxlbmd0aCA8IDEpKSByZXR1cm47XHJcblxyXG4gICAgaWYgKHRoaXMuY2hhcnQpIHRoaXMuY2hhcnQuZGVzdHJveSgpO1xyXG4gICAgdGhpcy5ub2RlLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gICAgY29uc3QgY2hhcnQgPSBuZXcgRzIuQ2hhcnQoe1xyXG4gICAgICBjb250YWluZXI6IHRoaXMubm9kZS5uYXRpdmVFbGVtZW50LFxyXG4gICAgICBmb3JjZUZpdDogdHJ1ZSxcclxuICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcclxuICAgICAgcGFkZGluZzogdGhpcy5wYWRkaW5nLFxyXG4gICAgICBhbmltYXRlOiB0aGlzLl9hbmltYXRlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCF0aGlzLnRvb2x0aXApIHtcclxuICAgICAgY2hhcnQudG9vbHRpcChmYWxzZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjaGFydC50b29sdGlwKHtcclxuICAgICAgICBzaG93VGl0bGU6IGZhbHNlLFxyXG4gICAgICAgIGl0ZW1UcGw6XHJcbiAgICAgICAgICAnPGxpPjxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjp7Y29sb3J9O1wiIGNsYXNzPVwiZzItdG9vbHRpcC1tYXJrZXJcIj48L3NwYW4+e25hbWV9OiB7dmFsdWV9ICU8L2xpPicsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYXJ0LmF4aXMoZmFsc2UpO1xyXG4gICAgY2hhcnQubGVnZW5kKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBkdiA9IG5ldyBEYXRhU2V0LkRhdGFWaWV3KCk7XHJcbiAgICBkdi5zb3VyY2UodGhpcy5kYXRhKS50cmFuc2Zvcm0oe1xyXG4gICAgICB0eXBlOiAncGVyY2VudCcsXHJcbiAgICAgIGZpZWxkOiAneScsXHJcbiAgICAgIGRpbWVuc2lvbjogJ3gnLFxyXG4gICAgICBhczogJ3BlcmNlbnQnLFxyXG4gICAgfSk7XHJcbiAgICBjaGFydC5zb3VyY2UoZHYsIHtcclxuICAgICAgeDoge1xyXG4gICAgICAgIHR5cGU6ICdjYXQnLFxyXG4gICAgICAgIHJhbmdlOiBbMCwgMV0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHk6IHtcclxuICAgICAgICBtaW46IDAsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBjaGFydC5jb29yZCgndGhldGEnLCB7IGlubmVyUmFkaXVzOiB0aGlzLmlubmVyIH0pO1xyXG5cclxuICAgIGNoYXJ0XHJcbiAgICAgIC5pbnRlcnZhbFN0YWNrKClcclxuICAgICAgLnBvc2l0aW9uKCd5JylcclxuICAgICAgLnN0eWxlKHsgbGluZVdpZHRoOiB0aGlzLmxpbmVXaWR0aCwgc3Ryb2tlOiAnI2ZmZicgfSlcclxuICAgICAgLnRvb2x0aXAoJ3gqcGVyY2VudCcsIChpdGVtLCBwZXJjZW50KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIG5hbWU6IGl0ZW0sXHJcbiAgICAgICAgICB2YWx1ZTogdGhpcy5oYXNMZWdlbmQgPyBwZXJjZW50IDogKHBlcmNlbnQgKiAxMDApLnRvRml4ZWQoMiksXHJcbiAgICAgICAgfTtcclxuICAgICAgfSlcclxuICAgICAgLmNvbG9yKCd4JywgaXNQZXJjZW50ID8gZm9ybWF0Q29sb3IgOiB0aGlzLmNvbG9ycylcclxuICAgICAgLnNlbGVjdCh0aGlzLnNlbGVjdCk7XHJcblxyXG4gICAgY2hhcnQucmVuZGVyKCk7XHJcblxyXG4gICAgdGhpcy5jaGFydCA9IGNoYXJ0O1xyXG4gICAgaWYgKHRoaXMuaGFzTGVnZW5kKSB7XHJcbiAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMubGVnZW5kRGF0YSA9IGNoYXJ0XHJcbiAgICAgICAgICAuZ2V0QWxsR2VvbXMoKVswXVxyXG4gICAgICAgICAgLl9hdHRycy5kYXRhQXJyYXkubWFwKChpdGVtOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgb3JpZ2luID0gaXRlbVswXS5fb3JpZ2luO1xyXG4gICAgICAgICAgICBvcmlnaW4uY29sb3IgPSBpdGVtWzBdLmNvbG9yO1xyXG4gICAgICAgICAgICBvcmlnaW4uY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIG9yaWdpbi5wZXJjZW50ID0gKG9yaWdpbi5wZXJjZW50ICogMTAwKS50b0ZpeGVkKDIpO1xyXG4gICAgICAgICAgICByZXR1cm4gb3JpZ2luO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbnN0YWxsUmVzaXplRXZlbnQoKSB7XHJcbiAgICBpZiAodGhpcy5zY3JvbGwkIHx8ICF0aGlzLmhhc0xlZ2VuZCkgcmV0dXJuO1xyXG5cclxuICAgIHRoaXMuc2Nyb2xsJCA9IGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKVxyXG4gICAgICAucGlwZShkZWJvdW5jZVRpbWUoMjAwKSlcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLnJ1bkluc3RhbGwoKSk7XHJcbiAgfVxyXG5cclxuICBfY2xpY2soaTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmxlZ2VuZERhdGFbaV0uY2hlY2tlZCA9ICF0aGlzLmxlZ2VuZERhdGFbaV0uY2hlY2tlZDtcclxuXHJcbiAgICBpZiAodGhpcy5jaGFydCkge1xyXG4gICAgICB0aGlzLmNoYXJ0LmZpbHRlcigneCcsICh2YWw6IGFueSwgaXRlbTogYW55KSA9PiBpdGVtLmNoZWNrZWQpO1xyXG4gICAgICB0aGlzLmNoYXJ0LnJlcGFpbnQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaW5pdEZsYWcgPSB0cnVlO1xyXG4gICAgdGhpcy5ydW5JbnN0YWxsKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcclxuICAgIHRoaXMuaW5zdGFsbFJlc2l6ZUV2ZW50KCk7XHJcbiAgICBpZiAodGhpcy5pbml0RmxhZykgdGhpcy5ydW5JbnN0YWxsKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnNjcm9sbCQpIHRoaXMuc2Nyb2xsJC51bnN1YnNjcmliZSgpO1xyXG4gICAgaWYgKHRoaXMuY2hhcnQpIHtcclxuICAgICAgdGhpcy5jaGFydC5kZXN0cm95KCk7XHJcbiAgICAgIHRoaXMuY2hhcnQgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nWm9ycm9BbnRkTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XHJcbmltcG9ydCB7IERlbG9uVXRpbE1vZHVsZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcclxuXHJcbmltcG9ydCB7IEcyUGllQ29tcG9uZW50IH0gZnJvbSAnLi9waWUuY29tcG9uZW50JztcclxuXHJcbmNvbnN0IENPTVBPTkVOVFMgPSBbRzJQaWVDb21wb25lbnRdO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBEZWxvblV0aWxNb2R1bGUsIE5nWm9ycm9BbnRkTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRTXSxcclxuICBleHBvcnRzOiBbLi4uQ09NUE9ORU5UU10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHMlBpZU1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4geyBuZ01vZHVsZTogRzJQaWVNb2R1bGUsIHByb3ZpZGVyczogW10gfTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbInRvQm9vbGVhbiIsInRvTnVtYmVyIiwidXBkYXRlSG9zdENsYXNzIiwiZnJvbUV2ZW50IiwiZGVib3VuY2VUaW1lIiwiQ29tcG9uZW50IiwiQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kiLCJFbGVtZW50UmVmIiwiUmVuZGVyZXIyIiwiQ2hhbmdlRGV0ZWN0b3JSZWYiLCJOZ1pvbmUiLCJWaWV3Q2hpbGQiLCJJbnB1dCIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiRGVsb25VdGlsTW9kdWxlIiwiTmdab3Jyb0FudGRNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7UUE0SEUsd0JBQ1UsSUFDQSxNQUNBLElBQ0E7WUFIQSxPQUFFLEdBQUYsRUFBRTtZQUNGLFNBQUksR0FBSixJQUFJO1lBQ0osT0FBRSxHQUFGLEVBQUU7WUFDRixTQUFJLEdBQUosSUFBSTsyQkFyR2tCLElBQUk7NEJBS2pCLEtBQUs7OEJBQ0osRUFBRTs0QkFRSCxJQUFJO3lCQUdmLDBCQUEwQjsyQkFhaEIsQ0FBQzs4QkFTRSxLQUFLO2dDQU1ILEtBQUs7eUJBR3BCLElBQUk7MkJBRVEsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7NEJBa0JmLElBQUk7OEJBU0YsQ0FBQzsyQkFTSixJQUFJO1NBZ0JsQjtRQTVGSixzQkFDSSxtQ0FBTzs7Ozs7Z0JBRFgsVUFDWSxLQUFVO2dCQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHQSxjQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDbEM7OztXQUFBO1FBVUQsc0JB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