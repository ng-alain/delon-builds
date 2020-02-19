/**
 * @license ng-alain(cipchk@qq.com) v8.9.0
 * (c) 2019 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@delon/chart/bar'), require('@delon/chart/card'), require('@delon/chart/custom'), require('@delon/chart/gauge'), require('@delon/chart/mini-area'), require('@delon/chart/mini-bar'), require('@delon/chart/mini-progress'), require('@delon/chart/pie'), require('@delon/chart/radar'), require('@delon/chart/tag-cloud'), require('@delon/chart/timeline'), require('@delon/chart/water-wave'), require('@delon/chart/number-info'), require('@delon/chart/trend'), require('@delon/chart/single-bar'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@delon/chart', ['exports', '@delon/chart/bar', '@delon/chart/card', '@delon/chart/custom', '@delon/chart/gauge', '@delon/chart/mini-area', '@delon/chart/mini-bar', '@delon/chart/mini-progress', '@delon/chart/pie', '@delon/chart/radar', '@delon/chart/tag-cloud', '@delon/chart/timeline', '@delon/chart/water-wave', '@delon/chart/number-info', '@delon/chart/trend', '@delon/chart/single-bar', '@angular/core'], factory) :
    (global = global || self, factory((global.delon = global.delon || {}, global.delon.chart = {}), global.delon.chart.bar, global.delon.chart.card, global.delon.chart.custom, global.delon.chart.gauge, global.delon.chart['mini-area'], global.delon.chart['mini-bar'], global.delon.chart['mini-progress'], global.delon.chart.pie, global.delon.chart.radar, global.delon.chart['tag-cloud'], global.delon.chart.timeline, global.delon.chart['water-wave'], global.delon.chart['number-info'], global.delon.chart.trend, global.delon.chart['single-bar'], global.ng.core));
}(this, (function (exports, bar, card, custom, gauge, miniArea, miniBar, miniProgress, pie, radar, tagCloud, timeline, waterWave, numberInfo, trend, singleBar, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: chart.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
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
        trend.TrendModule,
    ];
    // #endregion
    var DelonChartModule = /** @class */ (function () {
        function DelonChartModule() {
        }
        DelonChartModule.decorators = [
            { type: core.NgModule, args: [{ exports: MODULES },] }
        ];
        return DelonChartModule;
    }());

    Object.defineProperty(exports, 'G2BarComponent', {
        enumerable: true,
        get: function () {
            return bar.G2BarComponent;
        }
    });
    Object.defineProperty(exports, 'G2BarModule', {
        enumerable: true,
        get: function () {
            return bar.G2BarModule;
        }
    });
    Object.defineProperty(exports, 'G2CardComponent', {
        enumerable: true,
        get: function () {
            return card.G2CardComponent;
        }
    });
    Object.defineProperty(exports, 'G2CardModule', {
        enumerable: true,
        get: function () {
            return card.G2CardModule;
        }
    });
    Object.defineProperty(exports, 'G2CustomComponent', {
        enumerable: true,
        get: function () {
            return custom.G2CustomComponent;
        }
    });
    Object.defineProperty(exports, 'G2CustomModule', {
        enumerable: true,
        get: function () {
            return custom.G2CustomModule;
        }
    });
    Object.defineProperty(exports, 'G2GaugeComponent', {
        enumerable: true,
        get: function () {
            return gauge.G2GaugeComponent;
        }
    });
    Object.defineProperty(exports, 'G2GaugeModule', {
        enumerable: true,
        get: function () {
            return gauge.G2GaugeModule;
        }
    });
    Object.defineProperty(exports, 'G2MiniAreaComponent', {
        enumerable: true,
        get: function () {
            return miniArea.G2MiniAreaComponent;
        }
    });
    Object.defineProperty(exports, 'G2MiniAreaModule', {
        enumerable: true,
        get: function () {
            return miniArea.G2MiniAreaModule;
        }
    });
    Object.defineProperty(exports, 'G2MiniBarComponent', {
        enumerable: true,
        get: function () {
            return miniBar.G2MiniBarComponent;
        }
    });
    Object.defineProperty(exports, 'G2MiniBarModule', {
        enumerable: true,
        get: function () {
            return miniBar.G2MiniBarModule;
        }
    });
    Object.defineProperty(exports, 'G2MiniProgressComponent', {
        enumerable: true,
        get: function () {
            return miniProgress.G2MiniProgressComponent;
        }
    });
    Object.defineProperty(exports, 'G2MiniProgressModule', {
        enumerable: true,
        get: function () {
            return miniProgress.G2MiniProgressModule;
        }
    });
    Object.defineProperty(exports, 'G2PieComponent', {
        enumerable: true,
        get: function () {
            return pie.G2PieComponent;
        }
    });
    Object.defineProperty(exports, 'G2PieModule', {
        enumerable: true,
        get: function () {
            return pie.G2PieModule;
        }
    });
    Object.defineProperty(exports, 'G2RadarComponent', {
        enumerable: true,
        get: function () {
            return radar.G2RadarComponent;
        }
    });
    Object.defineProperty(exports, 'G2RadarModule', {
        enumerable: true,
        get: function () {
            return radar.G2RadarModule;
        }
    });
    Object.defineProperty(exports, 'G2TagCloudComponent', {
        enumerable: true,
        get: function () {
            return tagCloud.G2TagCloudComponent;
        }
    });
    Object.defineProperty(exports, 'G2TagCloudModule', {
        enumerable: true,
        get: function () {
            return tagCloud.G2TagCloudModule;
        }
    });
    Object.defineProperty(exports, 'G2TimelineComponent', {
        enumerable: true,
        get: function () {
            return timeline.G2TimelineComponent;
        }
    });
    Object.defineProperty(exports, 'G2TimelineData', {
        enumerable: true,
        get: function () {
            return timeline.G2TimelineData;
        }
    });
    Object.defineProperty(exports, 'G2TimelineModule', {
        enumerable: true,
        get: function () {
            return timeline.G2TimelineModule;
        }
    });
    Object.defineProperty(exports, 'G2WaterWaveComponent', {
        enumerable: true,
        get: function () {
            return waterWave.G2WaterWaveComponent;
        }
    });
    Object.defineProperty(exports, 'G2WaterWaveModule', {
        enumerable: true,
        get: function () {
            return waterWave.G2WaterWaveModule;
        }
    });
    Object.defineProperty(exports, 'NumberInfoComponent', {
        enumerable: true,
        get: function () {
            return numberInfo.NumberInfoComponent;
        }
    });
    Object.defineProperty(exports, 'NumberInfoModule', {
        enumerable: true,
        get: function () {
            return numberInfo.NumberInfoModule;
        }
    });
    Object.defineProperty(exports, 'TrendComponent', {
        enumerable: true,
        get: function () {
            return trend.TrendComponent;
        }
    });
    Object.defineProperty(exports, 'TrendModule', {
        enumerable: true,
        get: function () {
            return trend.TrendModule;
        }
    });
    Object.defineProperty(exports, 'G2SingleBarComponent', {
        enumerable: true,
        get: function () {
            return singleBar.G2SingleBarComponent;
        }
    });
    Object.defineProperty(exports, 'G2SingleBarModule', {
        enumerable: true,
        get: function () {
            return singleBar.G2SingleBarModule;
        }
    });
    exports.DelonChartModule = DelonChartModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=chart.umd.js.map
