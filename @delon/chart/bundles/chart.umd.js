/**
 * @license ng-alain(cipchk@qq.com) v11.10.4
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@delon/chart/bar'), require('@delon/chart/card'), require('@delon/chart/custom'), require('@delon/chart/gauge'), require('@delon/chart/mini-area'), require('@delon/chart/mini-bar'), require('@delon/chart/mini-progress'), require('@delon/chart/pie'), require('@delon/chart/radar'), require('@delon/chart/tag-cloud'), require('@delon/chart/timeline'), require('@delon/chart/water-wave'), require('@delon/chart/number-info'), require('@delon/chart/trend'), require('@delon/chart/single-bar'), require('@delon/chart/chart-echarts'), require('@angular/core'), require('@delon/util/other')) :
    typeof define === 'function' && define.amd ? define('@delon/chart', ['exports', '@delon/chart/bar', '@delon/chart/card', '@delon/chart/custom', '@delon/chart/gauge', '@delon/chart/mini-area', '@delon/chart/mini-bar', '@delon/chart/mini-progress', '@delon/chart/pie', '@delon/chart/radar', '@delon/chart/tag-cloud', '@delon/chart/timeline', '@delon/chart/water-wave', '@delon/chart/number-info', '@delon/chart/trend', '@delon/chart/single-bar', '@delon/chart/chart-echarts', '@angular/core', '@delon/util/other'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.delon = global.delon || {}, global.delon.chart = {}), global.delon.chart.bar, global.delon.chart.card, global.delon.chart.custom, global.delon.chart.gauge, global.delon.chart['mini-area'], global.delon.chart['mini-bar'], global.delon.chart['mini-progress'], global.delon.chart.pie, global.delon.chart.radar, global.delon.chart['tag-cloud'], global.delon.chart.timeline, global.delon.chart['water-wave'], global.delon.chart['number-info'], global.delon.chart.trend, global.delon.chart['single-bar'], global.delon.chart['chart-echarts'], global.ng.core, global.other));
}(this, (function (exports, bar, card, custom, gauge, miniArea, miniBar, miniProgress, pie, radar, tagCloud, timeline, waterWave, numberInfo, trend, singleBar, chartEcharts, core, other) { 'use strict';

    var MODULES = [
        bar.G2BarModule,
        card.G2CardModule,
        custom.G2CustomModule,
        gauge.G2GaugeModule,
        miniArea.G2MiniAreaModule,
        miniBar.G2MiniBarModule,
        miniProgress.G2MiniProgressModule,
        pie.G2PieModule,
        radar.G2RadarModule,
        tagCloud.G2TagCloudModule,
        timeline.G2TimelineModule,
        waterWave.G2WaterWaveModule,
        singleBar.G2SingleBarModule,
        numberInfo.NumberInfoModule,
        trend.TrendModule
    ];
    // #endregion
    /**
     * @deprecated Use secondary entry eg: `import { G2BarModule } from '@delon/chart/bar';`.
     */
    var DelonChartModule = /** @class */ (function () {
        function DelonChartModule() {
            other.warnDeprecation("The `DelonChartModule` has been deprecated and will be removed in 12.0.0. Please use secondary entry instead.\ne.g. `import { G2BarModule } from '@delon/chart/bar';`");
        }
        return DelonChartModule;
    }());
    DelonChartModule.decorators = [
        { type: core.NgModule, args: [{ exports: MODULES },] }
    ];
    DelonChartModule.ctorParameters = function () { return []; };

    /**
     * Generated bundle index. Do not edit.
     */

    exports.DelonChartModule = DelonChartModule;
    Object.keys(bar).forEach(function (k) {
        if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return bar[k];
            }
        });
    });
    Object.keys(card).forEach(function (k) {
        if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return card[k];
            }
        });
    });
    Object.keys(custom).forEach(function (k) {
        if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return custom[k];
            }
        });
    });
    Object.keys(gauge).forEach(function (k) {
        if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return gauge[k];
            }
        });
    });
    Object.keys(miniArea).forEach(function (k) {
        if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return miniArea[k];
            }
        });
    });
    Object.keys(miniBar).forEach(function (k) {
        if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return miniBar[k];
            }
        });
    });
    Object.keys(miniProgress).forEach(function (k) {
        if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return miniProgress[k];
            }
        });
    });
    Object.keys(pie).forEach(function (k) {
        if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return pie[k];
            }
        });
    });
    Object.keys(radar).forEach(function (k) {
        if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return radar[k];
            }
        });
    });
    Object.keys(tagCloud).forEach(function (k) {
        if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return tagCloud[k];
            }
        });
    });
    Object.keys(timeline).forEach(function (k) {
        if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return timeline[k];
            }
        });
    });
    Object.keys(waterWave).forEach(function (k) {
        if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return waterWave[k];
            }
        });
    });
    Object.keys(numberInfo).forEach(function (k) {
        if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return numberInfo[k];
            }
        });
    });
    Object.keys(trend).forEach(function (k) {
        if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return trend[k];
            }
        });
    });
    Object.keys(singleBar).forEach(function (k) {
        if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return singleBar[k];
            }
        });
    });
    Object.keys(chartEcharts).forEach(function (k) {
        if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
            enumerable: true,
            get: function () {
                return chartEcharts[k];
            }
        });
    });

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=chart.umd.js.map
