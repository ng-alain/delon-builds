/**
 * @license ng-alain(cipchk@qq.com) v2.0.0-rc.3
 * (c) 2018 Cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@delon/util'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@delon/chart/timeline', ['exports', '@angular/core', '@delon/util', '@angular/common'], factory) :
    (factory((global.delon = global.delon || {}, global.delon.chart = global.delon.chart || {}, global.delon.chart.timeline = {}),global.ng.core,global.delon.util,global.ng.common));
}(this, (function (exports,core,util,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var G2TimelineComponent = /** @class */ (function () {
        function G2TimelineComponent(cd, zone) {
            this.cd = cd;
            this.zone = zone;
            // #region fields
            this._title = '';
            this.colorMap = { y1: '#1890FF', y2: '#2FC25B' };
            this.mask = 'HH:mm';
            this.position = 'top';
            this._height = 400;
            this.padding = [60, 20, 40, 40];
            this._borderWidth = 2;
            this.initFlag = false;
        }
        Object.defineProperty(G2TimelineComponent.prototype, "title", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                if (value instanceof core.TemplateRef) {
                    this._title = null;
                    this._titleTpl = value;
                }
                else {
                    this._title = value;
                }
                this.cd.detectChanges();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(G2TimelineComponent.prototype, "height", {
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
        Object.defineProperty(G2TimelineComponent.prototype, "borderWidth", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._borderWidth = util.toNumber(value);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        G2TimelineComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                this.initFlag = true;
                this.runInstall();
            };
        /**
         * @return {?}
         */
        G2TimelineComponent.prototype.runInstall = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.zone.runOutsideAngular(function () { return setTimeout(function () { return _this.install(); }); });
            };
        /**
         * @return {?}
         */
        G2TimelineComponent.prototype.install = /**
         * @return {?}
         */
            function () {
                if (!this.data || (this.data && this.data.length < 1))
                    return;
                // clean
                this.uninstall();
                this.sliderNode.nativeElement.innerHTML = '';
                this.node.nativeElement.innerHTML = '';
                /** @type {?} */
                var MAX = 8;
                /** @type {?} */
                var begin = this.data.length > MAX ? (this.data.length - MAX) / 2 : 0;
                /** @type {?} */
                var ds = new DataSet({
                    state: {
                        start: this.data[begin - 1].x,
                        end: this.data[begin - 1 + MAX].x,
                    },
                });
                /** @type {?} */
                var dv = ds.createView().source(this.data);
                dv.source(this.data).transform({
                    type: 'filter',
                    callback: /**
                     * @param {?} obj
                     * @return {?}
                     */ function (obj) {
                        /** @type {?} */
                        var time = new Date(obj.x).getTime();
                        return time >= ds.state.start && time <= ds.state.end;
                    },
                });
                /** @type {?} */
                var chart = new G2.Chart({
                    container: this.node.nativeElement,
                    forceFit: true,
                    height: +this.height,
                    padding: this.padding,
                });
                chart.axis('x', { title: false });
                chart.axis('y1', {
                    title: false,
                });
                chart.axis('y2', false);
                /** @type {?} */
                var max;
                if (this.data[0] && this.data[0].y1 && this.data[0].y2) {
                    max = Math.max(this.data.sort(function (a, b) { return b.y1 - a.y1; })[0].y1, this.data.sort(function (a, b) { return b.y2 - a.y2; })[0].y2);
                }
                chart.source(dv, {
                    x: {
                        type: 'timeCat',
                        tickCount: MAX,
                        mask: this.mask,
                        range: [0, 1],
                    },
                    y1: {
                        alias: this.titleMap.y1,
                        max: max,
                        min: 0,
                    },
                    y2: {
                        alias: this.titleMap.y2,
                        max: max,
                        min: 0,
                    },
                });
                chart.legend({
                    position: this.position,
                    custom: true,
                    clickable: false,
                    items: [
                        { value: this.titleMap.y1, fill: this.colorMap.y1 },
                        { value: this.titleMap.y2, fill: this.colorMap.y2 },
                    ],
                });
                chart
                    .line()
                    .position('x*y1')
                    .color(this.colorMap.y1)
                    .size(this._borderWidth);
                chart
                    .line()
                    .position('x*y2')
                    .color(this.colorMap.y2)
                    .size(this._borderWidth);
                chart.render();
                /** @type {?} */
                var sliderPadding = Object.assign([], this.padding);
                sliderPadding[0] = 0;
                /** @type {?} */
                var slider = new Slider({
                    container: this.sliderNode.nativeElement,
                    height: 26,
                    padding: sliderPadding,
                    scales: {
                        x: {
                            type: 'time',
                            tickCount: 16,
                            mask: this.mask,
                        },
                    },
                    backgroundChart: {
                        type: 'line',
                    },
                    start: ds.state.start,
                    end: ds.state.end,
                    xAxis: 'x',
                    yAxis: 'y1',
                    data: this.data,
                    onChange: /**
                     * @param {?} __0
                     * @return {?}
                     */ function (_a) {
                        var startValue = _a.startValue, endValue = _a.endValue;
                        ds.setState('start', startValue);
                        ds.setState('end', endValue);
                    },
                });
                slider.render();
                this.chart = chart;
                this.slider = slider;
            };
        /**
         * @return {?}
         */
        G2TimelineComponent.prototype.uninstall = /**
         * @return {?}
         */
            function () {
                if (this.chart)
                    this.chart.destroy();
                if (this.slider)
                    this.slider.destroy();
            };
        /**
         * @return {?}
         */
        G2TimelineComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                if (this.initFlag)
                    this.runInstall();
            };
        /**
         * @return {?}
         */
        G2TimelineComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.uninstall();
            };
        G2TimelineComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'g2-timeline',
                        template: "<ng-container *ngIf=\"_title; else _titleTpl\">\n  <h4>{{_title}}</h4>\n</ng-container>\n<div #container></div>\n<div #slider></div>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        preserveWhitespaces: false
                    }] }
        ];
        /** @nocollapse */
        G2TimelineComponent.ctorParameters = function () {
            return [
                { type: core.ChangeDetectorRef },
                { type: core.NgZone }
            ];
        };
        G2TimelineComponent.propDecorators = {
            title: [{ type: core.Input }],
            data: [{ type: core.Input }],
            titleMap: [{ type: core.Input }],
            colorMap: [{ type: core.Input }],
            mask: [{ type: core.Input }],
            position: [{ type: core.Input }],
            height: [{ type: core.Input }],
            padding: [{ type: core.Input }],
            borderWidth: [{ type: core.Input }],
            node: [{ type: core.ViewChild, args: ['container',] }],
            sliderNode: [{ type: core.ViewChild, args: ['slider',] }]
        };
        return G2TimelineComponent;
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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var COMPONENTS = [G2TimelineComponent];
    var G2TimelineModule = /** @class */ (function () {
        function G2TimelineModule() {
        }
        /**
         * @return {?}
         */
        G2TimelineModule.forRoot = /**
         * @return {?}
         */
            function () {
                return { ngModule: G2TimelineModule, providers: [] };
            };
        G2TimelineModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, util.DelonUtilModule],
                        declarations: __spread(COMPONENTS),
                        exports: __spread(COMPONENTS),
                    },] }
        ];
        return G2TimelineModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    exports.G2TimelineComponent = G2TimelineComponent;
    exports.G2TimelineModule = G2TimelineModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AZGVsb24vY2hhcnQvdGltZWxpbmUvdGltZWxpbmUuY29tcG9uZW50LnRzIiwibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm5nOi8vQGRlbG9uL2NoYXJ0L3RpbWVsaW5lL3RpbWVsaW5lLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBWaWV3Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIE9uRGVzdHJveSxcbiAgT25DaGFuZ2VzLFxuICBOZ1pvbmUsXG4gIFRlbXBsYXRlUmVmLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIEFmdGVyVmlld0luaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdG9OdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbmRlY2xhcmUgdmFyIEcyOiBhbnk7XG5kZWNsYXJlIHZhciBEYXRhU2V0OiBhbnk7XG5kZWNsYXJlIHZhciBTbGlkZXI6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZzItdGltZWxpbmUnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGltZWxpbmUuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIEcyVGltZWxpbmVDb21wb25lbnRcbiAgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCB7XG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgX3RpdGxlID0gJyc7XG4gIF90aXRsZVRwbDogVGVtcGxhdGVSZWY8YW55PjtcbiAgQElucHV0KClcbiAgc2V0IHRpdGxlKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIHRoaXMuX3RpdGxlID0gbnVsbDtcbiAgICAgIHRoaXMuX3RpdGxlVHBsID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3RpdGxlID0gdmFsdWU7XG4gICAgfVxuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgQElucHV0KClcbiAgZGF0YTogQXJyYXk8eyB4OiBEYXRlOyB5MTogbnVtYmVyOyB5MjogbnVtYmVyOyBba2V5OiBzdHJpbmddOiBhbnkgfT47XG4gIEBJbnB1dCgpXG4gIHRpdGxlTWFwOiB7IHkxOiBzdHJpbmc7IHkyOiBzdHJpbmcgfTtcbiAgQElucHV0KClcbiAgY29sb3JNYXA6IHsgeTE6IHN0cmluZzsgeTI6IHN0cmluZyB9ID0geyB5MTogJyMxODkwRkYnLCB5MjogJyMyRkMyNUInIH07XG5cbiAgQElucHV0KClcbiAgbWFzazogc3RyaW5nID0gJ0hIOm1tJztcbiAgQElucHV0KClcbiAgcG9zaXRpb246ICd0b3AnIHwgJ3JpZ2h0JyB8ICdib3R0b20nIHwgJ2xlZnQnID0gJ3RvcCc7XG5cbiAgQElucHV0KClcbiAgZ2V0IGhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5faGVpZ2h0O1xuICB9XG4gIHNldCBoZWlnaHQodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX2hlaWdodCA9IHRvTnVtYmVyKHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9oZWlnaHQgPSA0MDA7XG5cbiAgQElucHV0KClcbiAgcGFkZGluZzogbnVtYmVyW10gPSBbNjAsIDIwLCA0MCwgNDBdO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBib3JkZXJXaWR0aCh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5fYm9yZGVyV2lkdGggPSB0b051bWJlcih2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfYm9yZGVyV2lkdGggPSAyO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBAVmlld0NoaWxkKCdjb250YWluZXInKVxuICBwcml2YXRlIG5vZGU6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3NsaWRlcicpXG4gIHByaXZhdGUgc2xpZGVyTm9kZTogRWxlbWVudFJlZjtcblxuICBwcml2YXRlIGNoYXJ0OiBhbnk7XG4gIHByaXZhdGUgaW5pdEZsYWcgPSBmYWxzZTtcbiAgcHJpdmF0ZSBzbGlkZXI6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSB6b25lOiBOZ1pvbmUpIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaW5pdEZsYWcgPSB0cnVlO1xuICAgIHRoaXMucnVuSW5zdGFsbCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBydW5JbnN0YWxsKCkge1xuICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5zdGFsbCgpKSk7XG4gIH1cblxuICBwcml2YXRlIGluc3RhbGwoKSB7XG4gICAgaWYgKCF0aGlzLmRhdGEgfHwgKHRoaXMuZGF0YSAmJiB0aGlzLmRhdGEubGVuZ3RoIDwgMSkpIHJldHVybjtcblxuICAgIC8vIGNsZWFuXG4gICAgdGhpcy51bmluc3RhbGwoKTtcbiAgICB0aGlzLnNsaWRlck5vZGUubmF0aXZlRWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgICB0aGlzLm5vZGUubmF0aXZlRWxlbWVudC5pbm5lckhUTUwgPSAnJztcblxuICAgIGNvbnN0IE1BWCA9IDg7XG4gICAgY29uc3QgYmVnaW4gPSB0aGlzLmRhdGEubGVuZ3RoID4gTUFYID8gKHRoaXMuZGF0YS5sZW5ndGggLSBNQVgpIC8gMiA6IDA7XG5cbiAgICBjb25zdCBkcyA9IG5ldyBEYXRhU2V0KHtcbiAgICAgIHN0YXRlOiB7XG4gICAgICAgIHN0YXJ0OiB0aGlzLmRhdGFbYmVnaW4gLSAxXS54LFxuICAgICAgICBlbmQ6IHRoaXMuZGF0YVtiZWdpbiAtIDEgKyBNQVhdLngsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGNvbnN0IGR2ID0gZHMuY3JlYXRlVmlldygpLnNvdXJjZSh0aGlzLmRhdGEpO1xuICAgIGR2LnNvdXJjZSh0aGlzLmRhdGEpLnRyYW5zZm9ybSh7XG4gICAgICB0eXBlOiAnZmlsdGVyJyxcbiAgICAgIGNhbGxiYWNrKG9iaikge1xuICAgICAgICBjb25zdCB0aW1lID0gbmV3IERhdGUob2JqLngpLmdldFRpbWUoKTsgLy8gIcOmwrPCqMOmwoTCj8OvwrzCmsOmwpfCtsOpwpfCtMOmwqDCvMOlwrzCj8OvwrzCjMOlwrvCusOowq7CrsOowr3CrMOmwo3CosOkwrjCusOmwpfCtsOpwpfCtMOmwojCs8Oowr/Cm8OowqHCjMOmwq/ClMOowr7Cg1xuICAgICAgICByZXR1cm4gdGltZSA+PSBkcy5zdGF0ZS5zdGFydCAmJiB0aW1lIDw9IGRzLnN0YXRlLmVuZDtcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBjb25zdCBjaGFydCA9IG5ldyBHMi5DaGFydCh7XG4gICAgICBjb250YWluZXI6IHRoaXMubm9kZS5uYXRpdmVFbGVtZW50LFxuICAgICAgZm9yY2VGaXQ6IHRydWUsXG4gICAgICBoZWlnaHQ6ICt0aGlzLmhlaWdodCxcbiAgICAgIHBhZGRpbmc6IHRoaXMucGFkZGluZyxcbiAgICB9KTtcbiAgICBjaGFydC5heGlzKCd4JywgeyB0aXRsZTogZmFsc2UgfSk7XG4gICAgY2hhcnQuYXhpcygneTEnLCB7XG4gICAgICB0aXRsZTogZmFsc2UsXG4gICAgfSk7XG4gICAgY2hhcnQuYXhpcygneTInLCBmYWxzZSk7XG5cbiAgICBsZXQgbWF4O1xuICAgIGlmICh0aGlzLmRhdGFbMF0gJiYgdGhpcy5kYXRhWzBdLnkxICYmIHRoaXMuZGF0YVswXS55Mikge1xuICAgICAgbWF4ID0gTWF0aC5tYXgoXG4gICAgICAgIHRoaXMuZGF0YS5zb3J0KChhLCBiKSA9PiBiLnkxIC0gYS55MSlbMF0ueTEsXG4gICAgICAgIHRoaXMuZGF0YS5zb3J0KChhLCBiKSA9PiBiLnkyIC0gYS55MilbMF0ueTIsXG4gICAgICApO1xuICAgIH1cbiAgICBjaGFydC5zb3VyY2UoZHYsIHtcbiAgICAgIHg6IHtcbiAgICAgICAgdHlwZTogJ3RpbWVDYXQnLFxuICAgICAgICB0aWNrQ291bnQ6IE1BWCxcbiAgICAgICAgbWFzazogdGhpcy5tYXNrLFxuICAgICAgICByYW5nZTogWzAsIDFdLFxuICAgICAgfSxcbiAgICAgIHkxOiB7XG4gICAgICAgIGFsaWFzOiB0aGlzLnRpdGxlTWFwLnkxLFxuICAgICAgICBtYXgsXG4gICAgICAgIG1pbjogMCxcbiAgICAgIH0sXG4gICAgICB5Mjoge1xuICAgICAgICBhbGlhczogdGhpcy50aXRsZU1hcC55MixcbiAgICAgICAgbWF4LFxuICAgICAgICBtaW46IDAsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgY2hhcnQubGVnZW5kKHtcbiAgICAgIHBvc2l0aW9uOiB0aGlzLnBvc2l0aW9uLFxuICAgICAgY3VzdG9tOiB0cnVlLFxuICAgICAgY2xpY2thYmxlOiBmYWxzZSxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdmFsdWU6IHRoaXMudGl0bGVNYXAueTEsIGZpbGw6IHRoaXMuY29sb3JNYXAueTEgfSxcbiAgICAgICAgeyB2YWx1ZTogdGhpcy50aXRsZU1hcC55MiwgZmlsbDogdGhpcy5jb2xvck1hcC55MiB9LFxuICAgICAgXSxcbiAgICB9KTtcblxuICAgIGNoYXJ0XG4gICAgICAubGluZSgpXG4gICAgICAucG9zaXRpb24oJ3gqeTEnKVxuICAgICAgLmNvbG9yKHRoaXMuY29sb3JNYXAueTEpXG4gICAgICAuc2l6ZSh0aGlzLl9ib3JkZXJXaWR0aCk7XG4gICAgY2hhcnRcbiAgICAgIC5saW5lKClcbiAgICAgIC5wb3NpdGlvbigneCp5MicpXG4gICAgICAuY29sb3IodGhpcy5jb2xvck1hcC55MilcbiAgICAgIC5zaXplKHRoaXMuX2JvcmRlcldpZHRoKTtcbiAgICBjaGFydC5yZW5kZXIoKTtcblxuICAgIGNvbnN0IHNsaWRlclBhZGRpbmcgPSBPYmplY3QuYXNzaWduKFtdLCB0aGlzLnBhZGRpbmcpO1xuICAgIHNsaWRlclBhZGRpbmdbMF0gPSAwO1xuICAgIGNvbnN0IHNsaWRlciA9IG5ldyBTbGlkZXIoe1xuICAgICAgY29udGFpbmVyOiB0aGlzLnNsaWRlck5vZGUubmF0aXZlRWxlbWVudCxcbiAgICAgIGhlaWdodDogMjYsXG4gICAgICBwYWRkaW5nOiBzbGlkZXJQYWRkaW5nLFxuICAgICAgc2NhbGVzOiB7XG4gICAgICAgIHg6IHtcbiAgICAgICAgICB0eXBlOiAndGltZScsXG4gICAgICAgICAgdGlja0NvdW50OiAxNixcbiAgICAgICAgICBtYXNrOiB0aGlzLm1hc2ssXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgYmFja2dyb3VuZENoYXJ0OiB7XG4gICAgICAgIHR5cGU6ICdsaW5lJyxcbiAgICAgIH0sXG4gICAgICBzdGFydDogZHMuc3RhdGUuc3RhcnQsXG4gICAgICBlbmQ6IGRzLnN0YXRlLmVuZCxcbiAgICAgIHhBeGlzOiAneCcsXG4gICAgICB5QXhpczogJ3kxJyxcbiAgICAgIGRhdGE6IHRoaXMuZGF0YSxcbiAgICAgIG9uQ2hhbmdlKHsgc3RhcnRWYWx1ZSwgZW5kVmFsdWUgfSkge1xuICAgICAgICBkcy5zZXRTdGF0ZSgnc3RhcnQnLCBzdGFydFZhbHVlKTtcbiAgICAgICAgZHMuc2V0U3RhdGUoJ2VuZCcsIGVuZFZhbHVlKTtcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgc2xpZGVyLnJlbmRlcigpO1xuXG4gICAgdGhpcy5jaGFydCA9IGNoYXJ0O1xuICAgIHRoaXMuc2xpZGVyID0gc2xpZGVyO1xuICB9XG5cbiAgcHJpdmF0ZSB1bmluc3RhbGwoKSB7XG4gICAgaWYgKHRoaXMuY2hhcnQpIHRoaXMuY2hhcnQuZGVzdHJveSgpO1xuICAgIGlmICh0aGlzLnNsaWRlcikgdGhpcy5zbGlkZXIuZGVzdHJveSgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW5pdEZsYWcpIHRoaXMucnVuSW5zdGFsbCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy51bmluc3RhbGwoKTtcbiAgfVxufVxuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IERlbG9uVXRpbE1vZHVsZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuaW1wb3J0IHsgRzJUaW1lbGluZUNvbXBvbmVudCB9IGZyb20gJy4vdGltZWxpbmUuY29tcG9uZW50JztcblxuY29uc3QgQ09NUE9ORU5UUyA9IFtHMlRpbWVsaW5lQ29tcG9uZW50XTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRGVsb25VdGlsTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbLi4uQ09NUE9ORU5UU10sXG4gIGV4cG9ydHM6IFsuLi5DT01QT05FTlRTXSxcbn0pXG5leHBvcnQgY2xhc3MgRzJUaW1lbGluZU1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7IG5nTW9kdWxlOiBHMlRpbWVsaW5lTW9kdWxlLCBwcm92aWRlcnM6IFtdIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJUZW1wbGF0ZVJlZiIsInRvTnVtYmVyIiwiQ29tcG9uZW50IiwiQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kiLCJDaGFuZ2VEZXRlY3RvclJlZiIsIk5nWm9uZSIsIklucHV0IiwiVmlld0NoaWxkIiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJEZWxvblV0aWxNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQW1GRSw2QkFBb0IsRUFBcUIsRUFBVSxJQUFZO1lBQTNDLE9BQUUsR0FBRixFQUFFLENBQW1CO1lBQVUsU0FBSSxHQUFKLElBQUksQ0FBUTs7WUF0RC9ELFdBQU0sR0FBRyxFQUFFLENBQUM7WUFrQlosYUFBUSxHQUErQixFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDO1lBR3hFLFNBQUksR0FBVyxPQUFPLENBQUM7WUFFdkIsYUFBUSxHQUF3QyxLQUFLLENBQUM7WUFTOUMsWUFBTyxHQUFHLEdBQUcsQ0FBQztZQUd0QixZQUFPLEdBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztZQU03QixpQkFBWSxHQUFHLENBQUMsQ0FBQztZQVVqQixhQUFRLEdBQUcsS0FBSyxDQUFDO1NBRzBDO1FBcERuRSxzQkFDSSxzQ0FBSzs7OztnQkFEVCxVQUNVLEtBQWdDO2dCQUN4QyxJQUFJLEtBQUssWUFBWUEsZ0JBQVcsRUFBRTtvQkFD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