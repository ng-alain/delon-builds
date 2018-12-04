/**
 * @license ng-alain(cipchk@qq.com) v2.0.1
 * (c) 2018 Cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@delon/chart/bar'), require('@delon/chart/card'), require('@delon/chart/custom'), require('@delon/chart/gauge'), require('@delon/chart/mini-area'), require('@delon/chart/mini-bar'), require('@delon/chart/mini-progress'), require('@delon/chart/pie'), require('@delon/chart/radar'), require('@delon/chart/tag-cloud'), require('@delon/chart/timeline'), require('@delon/chart/water-wave'), require('@delon/chart/number-info'), require('@delon/chart/trend')) :
    typeof define === 'function' && define.amd ? define('@delon/chart', ['exports', '@angular/core', '@delon/chart/bar', '@delon/chart/card', '@delon/chart/custom', '@delon/chart/gauge', '@delon/chart/mini-area', '@delon/chart/mini-bar', '@delon/chart/mini-progress', '@delon/chart/pie', '@delon/chart/radar', '@delon/chart/tag-cloud', '@delon/chart/timeline', '@delon/chart/water-wave', '@delon/chart/number-info', '@delon/chart/trend'], factory) :
    (factory((global.delon = global.delon || {}, global.delon.chart = {}),global.ng.core,global.delon.chart.bar,global.delon.chart.card,global.delon.chart.custom,global.delon.chart.gauge,global.delon.chart['mini-area'],global.delon.chart['mini-bar'],global.delon.chart['mini-progress'],global.delon.chart.pie,global.delon.chart.radar,global.delon.chart['tag-cloud'],global.delon.chart.timeline,global.delon.chart['water-wave'],global.delon.chart['number-info'],global.delon.chart.trend));
}(this, (function (exports,core,bar,card,custom,gauge,miniArea,miniBar,miniProgress,pie,radar,tagCloud,timeline,waterWave,numberInfo,trend) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        numberInfo.NumberInfoModule,
        trend.TrendModule,
    ];
    var DelonChartRootModule = /** @class */ (function () {
        function DelonChartRootModule() {
        }
        DelonChartRootModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            bar.G2BarModule.forRoot(),
                            card.G2CardModule.forRoot(),
                            custom.G2CustomModule.forRoot(),
                            gauge.G2GaugeModule.forRoot(),
                            miniArea.G2MiniAreaModule.forRoot(),
                            miniBar.G2MiniBarModule.forRoot(),
                            miniProgress.G2MiniProgressModule.forRoot(),
                            pie.G2PieModule.forRoot(),
                            radar.G2RadarModule.forRoot(),
                            tagCloud.G2TagCloudModule.forRoot(),
                            timeline.G2TimelineModule.forRoot(),
                            waterWave.G2WaterWaveModule.forRoot(),
                            numberInfo.NumberInfoModule.forRoot(),
                            trend.TrendModule.forRoot(),
                        ],
                        exports: MODULES,
                    },] }
        ];
        return DelonChartRootModule;
    }());
    var DelonChartModule = /** @class */ (function () {
        function DelonChartModule() {
        }
        /**
         * @return {?}
         */
        DelonChartModule.forRoot = /**
         * @return {?}
         */
            function () {
                return { ngModule: DelonChartRootModule };
            };
        DelonChartModule.decorators = [
            { type: core.NgModule, args: [{ exports: MODULES },] }
        ];
        return DelonChartModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.G2BarComponent = bar.G2BarComponent;
    exports.G2BarModule = bar.G2BarModule;
    exports.G2CardComponent = card.G2CardComponent;
    exports.G2CardModule = card.G2CardModule;
    exports.G2CustomComponent = custom.G2CustomComponent;
    exports.G2CustomModule = custom.G2CustomModule;
    exports.G2GaugeComponent = gauge.G2GaugeComponent;
    exports.G2GaugeModule = gauge.G2GaugeModule;
    exports.G2MiniAreaComponent = miniArea.G2MiniAreaComponent;
    exports.G2MiniAreaModule = miniArea.G2MiniAreaModule;
    exports.G2MiniBarComponent = miniBar.G2MiniBarComponent;
    exports.G2MiniBarModule = miniBar.G2MiniBarModule;
    exports.G2ProgressComponent = miniProgress.G2ProgressComponent;
    exports.G2MiniProgressModule = miniProgress.G2MiniProgressModule;
    exports.G2PieComponent = pie.G2PieComponent;
    exports.G2PieModule = pie.G2PieModule;
    exports.G2RadarComponent = radar.G2RadarComponent;
    exports.G2RadarModule = radar.G2RadarModule;
    exports.G2TagCloudComponent = tagCloud.G2TagCloudComponent;
    exports.G2TagCloudModule = tagCloud.G2TagCloudModule;
    exports.G2TimelineComponent = timeline.G2TimelineComponent;
    exports.G2TimelineModule = timeline.G2TimelineModule;
    exports.G2WaterWaveComponent = waterWave.G2WaterWaveComponent;
    exports.G2WaterWaveModule = waterWave.G2WaterWaveModule;
    exports.NumberInfoComponent = numberInfo.NumberInfoComponent;
    exports.NumberInfoModule = numberInfo.NumberInfoModule;
    exports.TrendComponent = trend.TrendComponent;
    exports.TrendModule = trend.TrendModule;
    exports.DelonChartRootModule = DelonChartRootModule;
    exports.DelonChartModule = DelonChartModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=chart.umd.js.map