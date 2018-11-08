/**
 * @license ng-alain(cipchk@qq.com) v2.0.0-rc.2
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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
    // #endregion
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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AZGVsb24vY2hhcnQvY2hhcnQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vICNyZWdpb24gYWxsIG1vZHVsZXNcblxuaW1wb3J0IHsgRzJCYXJNb2R1bGUgfSBmcm9tICdAZGVsb24vY2hhcnQvYmFyJztcbmltcG9ydCB7IEcyQ2FyZE1vZHVsZSB9IGZyb20gJ0BkZWxvbi9jaGFydC9jYXJkJztcbmltcG9ydCB7IEcyQ3VzdG9tTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2NoYXJ0L2N1c3RvbSc7XG5pbXBvcnQgeyBHMkdhdWdlTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2NoYXJ0L2dhdWdlJztcbmltcG9ydCB7IEcyTWluaUFyZWFNb2R1bGUgfSBmcm9tICdAZGVsb24vY2hhcnQvbWluaS1hcmVhJztcbmltcG9ydCB7IEcyTWluaUJhck1vZHVsZSB9IGZyb20gJ0BkZWxvbi9jaGFydC9taW5pLWJhcic7XG5pbXBvcnQgeyBHMk1pbmlQcm9ncmVzc01vZHVsZSB9IGZyb20gJ0BkZWxvbi9jaGFydC9taW5pLXByb2dyZXNzJztcbmltcG9ydCB7IEcyUGllTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2NoYXJ0L3BpZSc7XG5pbXBvcnQgeyBHMlJhZGFyTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2NoYXJ0L3JhZGFyJztcbmltcG9ydCB7IEcyVGFnQ2xvdWRNb2R1bGUgfSBmcm9tICdAZGVsb24vY2hhcnQvdGFnLWNsb3VkJztcbmltcG9ydCB7IEcyVGltZWxpbmVNb2R1bGUgfSBmcm9tICdAZGVsb24vY2hhcnQvdGltZWxpbmUnO1xuaW1wb3J0IHsgRzJXYXRlcldhdmVNb2R1bGUgfSBmcm9tICdAZGVsb24vY2hhcnQvd2F0ZXItd2F2ZSc7XG5pbXBvcnQgeyBOdW1iZXJJbmZvTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2NoYXJ0L251bWJlci1pbmZvJztcbmltcG9ydCB7IFRyZW5kTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2NoYXJ0L3RyZW5kJztcblxuY29uc3QgTU9EVUxFUyA9IFtcbiAgRzJCYXJNb2R1bGUsXG4gIEcyQ2FyZE1vZHVsZSxcbiAgRzJDdXN0b21Nb2R1bGUsXG4gIEcyR2F1Z2VNb2R1bGUsXG4gIEcyTWluaUFyZWFNb2R1bGUsXG4gIEcyTWluaUJhck1vZHVsZSxcbiAgRzJNaW5pUHJvZ3Jlc3NNb2R1bGUsXG4gIEcyUGllTW9kdWxlLFxuICBHMlJhZGFyTW9kdWxlLFxuICBHMlRhZ0Nsb3VkTW9kdWxlLFxuICBHMlRpbWVsaW5lTW9kdWxlLFxuICBHMldhdGVyV2F2ZU1vZHVsZSxcbiAgTnVtYmVySW5mb01vZHVsZSxcbiAgVHJlbmRNb2R1bGUsXG5dO1xuXG4vLyAjZW5kcmVnaW9uXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBHMkJhck1vZHVsZS5mb3JSb290KCksXG4gICAgRzJDYXJkTW9kdWxlLmZvclJvb3QoKSxcbiAgICBHMkN1c3RvbU1vZHVsZS5mb3JSb290KCksXG4gICAgRzJHYXVnZU1vZHVsZS5mb3JSb290KCksXG4gICAgRzJNaW5pQXJlYU1vZHVsZS5mb3JSb290KCksXG4gICAgRzJNaW5pQmFyTW9kdWxlLmZvclJvb3QoKSxcbiAgICBHMk1pbmlQcm9ncmVzc01vZHVsZS5mb3JSb290KCksXG4gICAgRzJQaWVNb2R1bGUuZm9yUm9vdCgpLFxuICAgIEcyUmFkYXJNb2R1bGUuZm9yUm9vdCgpLFxuICAgIEcyVGFnQ2xvdWRNb2R1bGUuZm9yUm9vdCgpLFxuICAgIEcyVGltZWxpbmVNb2R1bGUuZm9yUm9vdCgpLFxuICAgIEcyV2F0ZXJXYXZlTW9kdWxlLmZvclJvb3QoKSxcbiAgICBOdW1iZXJJbmZvTW9kdWxlLmZvclJvb3QoKSxcbiAgICBUcmVuZE1vZHVsZS5mb3JSb290KCksXG4gIF0sXG4gIGV4cG9ydHM6IE1PRFVMRVMsXG59KVxuZXhwb3J0IGNsYXNzIERlbG9uQ2hhcnRSb290TW9kdWxlIHt9XG5cbkBOZ01vZHVsZSh7IGV4cG9ydHM6IE1PRFVMRVMgfSlcbmV4cG9ydCBjbGFzcyBEZWxvbkNoYXJ0TW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHsgbmdNb2R1bGU6IERlbG9uQ2hhcnRSb290TW9kdWxlIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJHMkJhck1vZHVsZSIsIkcyQ2FyZE1vZHVsZSIsIkcyQ3VzdG9tTW9kdWxlIiwiRzJHYXVnZU1vZHVsZSIsIkcyTWluaUFyZWFNb2R1bGUiLCJHMk1pbmlCYXJNb2R1bGUiLCJHMk1pbmlQcm9ncmVzc01vZHVsZSIsIkcyUGllTW9kdWxlIiwiRzJSYWRhck1vZHVsZSIsIkcyVGFnQ2xvdWRNb2R1bGUiLCJHMlRpbWVsaW5lTW9kdWxlIiwiRzJXYXRlcldhdmVNb2R1bGUiLCJOdW1iZXJJbmZvTW9kdWxlIiwiVHJlbmRNb2R1bGUiLCJOZ01vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBbUJNLE9BQU8sR0FBRztRQUNkQSxlQUFXO1FBQ1hDLGlCQUFZO1FBQ1pDLHFCQUFjO1FBQ2RDLG1CQUFhO1FBQ2JDLHlCQUFnQjtRQUNoQkMsdUJBQWU7UUFDZkMsaUNBQW9CO1FBQ3BCQyxlQUFXO1FBQ1hDLG1CQUFhO1FBQ2JDLHlCQUFnQjtRQUNoQkMseUJBQWdCO1FBQ2hCQywyQkFBaUI7UUFDakJDLDJCQUFnQjtRQUNoQkMsaUJBQVc7S0FDWjs7QUFJRDtRQUFBO1NBbUJvQzs7b0JBbkJuQ0MsYUFBUSxTQUFDO3dCQUNSLE9BQU8sRUFBRTs0QkFDUGQsZUFBVyxDQUFDLE9BQU8sRUFBRTs0QkFDckJDLGlCQUFZLENBQUMsT0FBTyxFQUFFOzRCQUN0QkMscUJBQWMsQ0FBQyxPQUFPLEVBQUU7NEJBQ3hCQyxtQkFBYSxDQUFDLE9BQU8sRUFBRTs0QkFDdkJDLHlCQUFnQixDQUFDLE9BQU8sRUFBRTs0QkFDMUJDLHVCQUFlLENBQUMsT0FBTyxFQUFFOzRCQUN6QkMsaUNBQW9CLENBQUMsT0FBTyxFQUFFOzRCQUM5QkMsZUFBVyxDQUFDLE9BQU8sRUFBRTs0QkFDckJDLG1CQUFhLENBQUMsT0FBTyxFQUFFOzRCQUN2QkMseUJBQWdCLENBQUMsT0FBTyxFQUFFOzRCQUMxQkMseUJBQWdCLENBQUMsT0FBTyxFQUFFOzRCQUMxQkMsMkJBQWlCLENBQUMsT0FBTyxFQUFFOzRCQUMzQkMsMkJBQWdCLENBQUMsT0FBTyxFQUFFOzRCQUMxQkMsaUJBQVcsQ0FBQyxPQUFPLEVBQUU7eUJBQ3RCO3dCQUNELE9BQU8sRUFBRSxPQUFPO3FCQUNqQjs7UUFDa0MsMkJBQUM7S0FuQnBDLElBbUJvQzs7UUFFcEM7U0FLQzs7OztRQUhRLHdCQUFPOzs7WUFBZDtnQkFDRSxPQUFPLEVBQUUsUUFBUSxFQUFFLG9CQUFvQixFQUFFLENBQUM7YUFDM0M7O29CQUpGQyxhQUFRLFNBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFOztRQUs5Qix1QkFBQztLQUxEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=