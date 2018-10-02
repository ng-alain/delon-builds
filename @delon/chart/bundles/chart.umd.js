/**
 * @license ng-alain(cipchk@qq.com) v2.0.0-beta.3-ed90aa6
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AZGVsb24vY2hhcnQvY2hhcnQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vLyByZWdpb246IGFsbCBtb2R1bGVzXHJcblxyXG5pbXBvcnQgeyBHMkJhck1vZHVsZSB9IGZyb20gJ0BkZWxvbi9jaGFydC9iYXInO1xyXG5pbXBvcnQgeyBHMkNhcmRNb2R1bGUgfSBmcm9tICdAZGVsb24vY2hhcnQvY2FyZCc7XHJcbmltcG9ydCB7IEcyQ3VzdG9tTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2NoYXJ0L2N1c3RvbSc7XHJcbmltcG9ydCB7IEcyR2F1Z2VNb2R1bGUgfSBmcm9tICdAZGVsb24vY2hhcnQvZ2F1Z2UnO1xyXG5pbXBvcnQgeyBHMk1pbmlBcmVhTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2NoYXJ0L21pbmktYXJlYSc7XHJcbmltcG9ydCB7IEcyTWluaUJhck1vZHVsZSB9IGZyb20gJ0BkZWxvbi9jaGFydC9taW5pLWJhcic7XHJcbmltcG9ydCB7IEcyTWluaVByb2dyZXNzTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2NoYXJ0L21pbmktcHJvZ3Jlc3MnO1xyXG5pbXBvcnQgeyBHMlBpZU1vZHVsZSB9IGZyb20gJ0BkZWxvbi9jaGFydC9waWUnO1xyXG5pbXBvcnQgeyBHMlJhZGFyTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2NoYXJ0L3JhZGFyJztcclxuaW1wb3J0IHsgRzJUYWdDbG91ZE1vZHVsZSB9IGZyb20gJ0BkZWxvbi9jaGFydC90YWctY2xvdWQnO1xyXG5pbXBvcnQgeyBHMlRpbWVsaW5lTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2NoYXJ0L3RpbWVsaW5lJztcclxuaW1wb3J0IHsgRzJXYXRlcldhdmVNb2R1bGUgfSBmcm9tICdAZGVsb24vY2hhcnQvd2F0ZXItd2F2ZSc7XHJcbmltcG9ydCB7IE51bWJlckluZm9Nb2R1bGUgfSBmcm9tICdAZGVsb24vY2hhcnQvbnVtYmVyLWluZm8nO1xyXG5pbXBvcnQgeyBUcmVuZE1vZHVsZSB9IGZyb20gJ0BkZWxvbi9jaGFydC90cmVuZCc7XHJcblxyXG5jb25zdCBNT0RVTEVTID0gW1xyXG4gIEcyQmFyTW9kdWxlLFxyXG4gIEcyQ2FyZE1vZHVsZSxcclxuICBHMkN1c3RvbU1vZHVsZSxcclxuICBHMkdhdWdlTW9kdWxlLFxyXG4gIEcyTWluaUFyZWFNb2R1bGUsXHJcbiAgRzJNaW5pQmFyTW9kdWxlLFxyXG4gIEcyTWluaVByb2dyZXNzTW9kdWxlLFxyXG4gIEcyUGllTW9kdWxlLFxyXG4gIEcyUmFkYXJNb2R1bGUsXHJcbiAgRzJUYWdDbG91ZE1vZHVsZSxcclxuICBHMlRpbWVsaW5lTW9kdWxlLFxyXG4gIEcyV2F0ZXJXYXZlTW9kdWxlLFxyXG4gIE51bWJlckluZm9Nb2R1bGUsXHJcbiAgVHJlbmRNb2R1bGUsXHJcbl07XHJcblxyXG4vLyBlbmRyZWdpb25cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgRzJCYXJNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgRzJDYXJkTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIEcyQ3VzdG9tTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIEcyR2F1Z2VNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgRzJNaW5pQXJlYU1vZHVsZS5mb3JSb290KCksXHJcbiAgICBHMk1pbmlCYXJNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgRzJNaW5pUHJvZ3Jlc3NNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgRzJQaWVNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgRzJSYWRhck1vZHVsZS5mb3JSb290KCksXHJcbiAgICBHMlRhZ0Nsb3VkTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIEcyVGltZWxpbmVNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgRzJXYXRlcldhdmVNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgTnVtYmVySW5mb01vZHVsZS5mb3JSb290KCksXHJcbiAgICBUcmVuZE1vZHVsZS5mb3JSb290KCksXHJcbiAgXSxcclxuICBleHBvcnRzOiBNT0RVTEVTLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGVsb25DaGFydFJvb3RNb2R1bGUge31cclxuXHJcbkBOZ01vZHVsZSh7IGV4cG9ydHM6IE1PRFVMRVMgfSlcclxuZXhwb3J0IGNsYXNzIERlbG9uQ2hhcnRNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHsgbmdNb2R1bGU6IERlbG9uQ2hhcnRSb290TW9kdWxlIH07XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJHMkJhck1vZHVsZSIsIkcyQ2FyZE1vZHVsZSIsIkcyQ3VzdG9tTW9kdWxlIiwiRzJHYXVnZU1vZHVsZSIsIkcyTWluaUFyZWFNb2R1bGUiLCJHMk1pbmlCYXJNb2R1bGUiLCJHMk1pbmlQcm9ncmVzc01vZHVsZSIsIkcyUGllTW9kdWxlIiwiRzJSYWRhck1vZHVsZSIsIkcyVGFnQ2xvdWRNb2R1bGUiLCJHMlRpbWVsaW5lTW9kdWxlIiwiRzJXYXRlcldhdmVNb2R1bGUiLCJOdW1iZXJJbmZvTW9kdWxlIiwiVHJlbmRNb2R1bGUiLCJOZ01vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0lBbUJBLElBQU0sT0FBTyxHQUFHO1FBQ2RBLGVBQVc7UUFDWEMsaUJBQVk7UUFDWkMscUJBQWM7UUFDZEMsbUJBQWE7UUFDYkMseUJBQWdCO1FBQ2hCQyx1QkFBZTtRQUNmQyxpQ0FBb0I7UUFDcEJDLGVBQVc7UUFDWEMsbUJBQWE7UUFDYkMseUJBQWdCO1FBQ2hCQyx5QkFBZ0I7UUFDaEJDLDJCQUFpQjtRQUNqQkMsMkJBQWdCO1FBQ2hCQyxpQkFBVztLQUNaLENBQUM7Ozs7O29CQUlEQyxhQUFRLFNBQUM7d0JBQ1IsT0FBTyxFQUFFOzRCQUNQZCxlQUFXLENBQUMsT0FBTyxFQUFFOzRCQUNyQkMsaUJBQVksQ0FBQyxPQUFPLEVBQUU7NEJBQ3RCQyxxQkFBYyxDQUFDLE9BQU8sRUFBRTs0QkFDeEJDLG1CQUFhLENBQUMsT0FBTyxFQUFFOzRCQUN2QkMseUJBQWdCLENBQUMsT0FBTyxFQUFFOzRCQUMxQkMsdUJBQWUsQ0FBQyxPQUFPLEVBQUU7NEJBQ3pCQyxpQ0FBb0IsQ0FBQyxPQUFPLEVBQUU7NEJBQzlCQyxlQUFXLENBQUMsT0FBTyxFQUFFOzRCQUNyQkMsbUJBQWEsQ0FBQyxPQUFPLEVBQUU7NEJBQ3ZCQyx5QkFBZ0IsQ0FBQyxPQUFPLEVBQUU7NEJBQzFCQyx5QkFBZ0IsQ0FBQyxPQUFPLEVBQUU7NEJBQzFCQywyQkFBaUIsQ0FBQyxPQUFPLEVBQUU7NEJBQzNCQywyQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7NEJBQzFCQyxpQkFBVyxDQUFDLE9BQU8sRUFBRTt5QkFDdEI7d0JBQ0QsT0FBTyxFQUFFLE9BQU87cUJBQ2pCOzttQ0F4REQ7Ozs7Ozs7O1FBNkRTLHdCQUFPOzs7WUFBZDtnQkFDRSxPQUFPLEVBQUUsUUFBUSxFQUFFLG9CQUFvQixFQUFFLENBQUM7YUFDM0M7O29CQUpGQyxhQUFRLFNBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFOzsrQkEzRDlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9