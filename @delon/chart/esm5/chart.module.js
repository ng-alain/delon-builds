/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
// #region all modules
import { G2BarModule } from '@delon/chart/bar';
import { G2CardModule } from '@delon/chart/card';
import { G2CustomModule } from '@delon/chart/custom';
import { G2GaugeModule } from '@delon/chart/gauge';
import { G2MiniAreaModule } from '@delon/chart/mini-area';
import { G2MiniBarModule } from '@delon/chart/mini-bar';
import { G2MiniProgressModule } from '@delon/chart/mini-progress';
import { NumberInfoModule } from '@delon/chart/number-info';
import { G2PieModule } from '@delon/chart/pie';
import { G2RadarModule } from '@delon/chart/radar';
import { G2TagCloudModule } from '@delon/chart/tag-cloud';
import { G2TimelineModule } from '@delon/chart/timeline';
import { TrendModule } from '@delon/chart/trend';
import { G2WaterWaveModule } from '@delon/chart/water-wave';
/** @type {?} */
var MODULES = [
    G2BarModule,
    G2CardModule,
    G2CustomModule,
    G2GaugeModule,
    G2MiniAreaModule,
    G2MiniBarModule,
    G2MiniProgressModule,
    G2PieModule,
    G2RadarModule,
    G2TagCloudModule,
    G2TimelineModule,
    G2WaterWaveModule,
    NumberInfoModule,
    TrendModule,
];
// #endregion
var DelonChartRootModule = /** @class */ (function () {
    function DelonChartRootModule() {
    }
    DelonChartRootModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        G2BarModule.forRoot(),
                        G2CardModule.forRoot(),
                        G2CustomModule.forRoot(),
                        G2GaugeModule.forRoot(),
                        G2MiniAreaModule.forRoot(),
                        G2MiniBarModule.forRoot(),
                        G2MiniProgressModule.forRoot(),
                        G2PieModule.forRoot(),
                        G2RadarModule.forRoot(),
                        G2TagCloudModule.forRoot(),
                        G2TimelineModule.forRoot(),
                        G2WaterWaveModule.forRoot(),
                        NumberInfoModule.forRoot(),
                        TrendModule.forRoot(),
                    ],
                    exports: MODULES,
                },] }
    ];
    return DelonChartRootModule;
}());
export { DelonChartRootModule };
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
        { type: NgModule, args: [{ exports: MODULES },] }
    ];
    return DelonChartModule;
}());
export { DelonChartModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NoYXJ0LyIsInNvdXJjZXMiOlsiY2hhcnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFJOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7SUFFdEQsT0FBTyxHQUFHO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0lBQ2QsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFdBQVc7Q0FDWjs7QUFJRDtJQUFBO0lBbUJvQyxDQUFDOztnQkFuQnBDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsV0FBVyxDQUFDLE9BQU8sRUFBRTt3QkFDckIsWUFBWSxDQUFDLE9BQU8sRUFBRTt3QkFDdEIsY0FBYyxDQUFDLE9BQU8sRUFBRTt3QkFDeEIsYUFBYSxDQUFDLE9BQU8sRUFBRTt3QkFDdkIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO3dCQUMxQixlQUFlLENBQUMsT0FBTyxFQUFFO3dCQUN6QixvQkFBb0IsQ0FBQyxPQUFPLEVBQUU7d0JBQzlCLFdBQVcsQ0FBQyxPQUFPLEVBQUU7d0JBQ3JCLGFBQWEsQ0FBQyxPQUFPLEVBQUU7d0JBQ3ZCLGdCQUFnQixDQUFDLE9BQU8sRUFBRTt3QkFDMUIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO3dCQUMxQixpQkFBaUIsQ0FBQyxPQUFPLEVBQUU7d0JBQzNCLGdCQUFnQixDQUFDLE9BQU8sRUFBRTt3QkFDMUIsV0FBVyxDQUFDLE9BQU8sRUFBRTtxQkFDdEI7b0JBQ0QsT0FBTyxFQUFFLE9BQU87aUJBQ2pCOztJQUNtQywyQkFBQztDQUFBLEFBbkJyQyxJQW1CcUM7U0FBeEIsb0JBQW9CO0FBRWpDO0lBQUE7SUFLQSxDQUFDOzs7O0lBSFEsd0JBQU87OztJQUFkO1FBQ0UsT0FBTyxFQUFFLFFBQVEsRUFBRSxvQkFBb0IsRUFBRSxDQUFDO0lBQzVDLENBQUM7O2dCQUpGLFFBQVEsU0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUU7O0lBSzlCLHVCQUFDO0NBQUEsQUFMRCxJQUtDO1NBSlksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gI3JlZ2lvbiBhbGwgbW9kdWxlc1xuXG5pbXBvcnQgeyBHMkJhck1vZHVsZSB9IGZyb20gJ0BkZWxvbi9jaGFydC9iYXInO1xuaW1wb3J0IHsgRzJDYXJkTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2NoYXJ0L2NhcmQnO1xuaW1wb3J0IHsgRzJDdXN0b21Nb2R1bGUgfSBmcm9tICdAZGVsb24vY2hhcnQvY3VzdG9tJztcbmltcG9ydCB7IEcyR2F1Z2VNb2R1bGUgfSBmcm9tICdAZGVsb24vY2hhcnQvZ2F1Z2UnO1xuaW1wb3J0IHsgRzJNaW5pQXJlYU1vZHVsZSB9IGZyb20gJ0BkZWxvbi9jaGFydC9taW5pLWFyZWEnO1xuaW1wb3J0IHsgRzJNaW5pQmFyTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2NoYXJ0L21pbmktYmFyJztcbmltcG9ydCB7IEcyTWluaVByb2dyZXNzTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2NoYXJ0L21pbmktcHJvZ3Jlc3MnO1xuaW1wb3J0IHsgTnVtYmVySW5mb01vZHVsZSB9IGZyb20gJ0BkZWxvbi9jaGFydC9udW1iZXItaW5mbyc7XG5pbXBvcnQgeyBHMlBpZU1vZHVsZSB9IGZyb20gJ0BkZWxvbi9jaGFydC9waWUnO1xuaW1wb3J0IHsgRzJSYWRhck1vZHVsZSB9IGZyb20gJ0BkZWxvbi9jaGFydC9yYWRhcic7XG5pbXBvcnQgeyBHMlRhZ0Nsb3VkTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2NoYXJ0L3RhZy1jbG91ZCc7XG5pbXBvcnQgeyBHMlRpbWVsaW5lTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2NoYXJ0L3RpbWVsaW5lJztcbmltcG9ydCB7IFRyZW5kTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2NoYXJ0L3RyZW5kJztcbmltcG9ydCB7IEcyV2F0ZXJXYXZlTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2NoYXJ0L3dhdGVyLXdhdmUnO1xuXG5jb25zdCBNT0RVTEVTID0gW1xuICBHMkJhck1vZHVsZSxcbiAgRzJDYXJkTW9kdWxlLFxuICBHMkN1c3RvbU1vZHVsZSxcbiAgRzJHYXVnZU1vZHVsZSxcbiAgRzJNaW5pQXJlYU1vZHVsZSxcbiAgRzJNaW5pQmFyTW9kdWxlLFxuICBHMk1pbmlQcm9ncmVzc01vZHVsZSxcbiAgRzJQaWVNb2R1bGUsXG4gIEcyUmFkYXJNb2R1bGUsXG4gIEcyVGFnQ2xvdWRNb2R1bGUsXG4gIEcyVGltZWxpbmVNb2R1bGUsXG4gIEcyV2F0ZXJXYXZlTW9kdWxlLFxuICBOdW1iZXJJbmZvTW9kdWxlLFxuICBUcmVuZE1vZHVsZSxcbl07XG5cbi8vICNlbmRyZWdpb25cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEcyQmFyTW9kdWxlLmZvclJvb3QoKSxcbiAgICBHMkNhcmRNb2R1bGUuZm9yUm9vdCgpLFxuICAgIEcyQ3VzdG9tTW9kdWxlLmZvclJvb3QoKSxcbiAgICBHMkdhdWdlTW9kdWxlLmZvclJvb3QoKSxcbiAgICBHMk1pbmlBcmVhTW9kdWxlLmZvclJvb3QoKSxcbiAgICBHMk1pbmlCYXJNb2R1bGUuZm9yUm9vdCgpLFxuICAgIEcyTWluaVByb2dyZXNzTW9kdWxlLmZvclJvb3QoKSxcbiAgICBHMlBpZU1vZHVsZS5mb3JSb290KCksXG4gICAgRzJSYWRhck1vZHVsZS5mb3JSb290KCksXG4gICAgRzJUYWdDbG91ZE1vZHVsZS5mb3JSb290KCksXG4gICAgRzJUaW1lbGluZU1vZHVsZS5mb3JSb290KCksXG4gICAgRzJXYXRlcldhdmVNb2R1bGUuZm9yUm9vdCgpLFxuICAgIE51bWJlckluZm9Nb2R1bGUuZm9yUm9vdCgpLFxuICAgIFRyZW5kTW9kdWxlLmZvclJvb3QoKSxcbiAgXSxcbiAgZXhwb3J0czogTU9EVUxFUyxcbn0pXG5leHBvcnQgY2xhc3MgRGVsb25DaGFydFJvb3RNb2R1bGUgeyB9XG5cbkBOZ01vZHVsZSh7IGV4cG9ydHM6IE1PRFVMRVMgfSlcbmV4cG9ydCBjbGFzcyBEZWxvbkNoYXJ0TW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHsgbmdNb2R1bGU6IERlbG9uQ2hhcnRSb290TW9kdWxlIH07XG4gIH1cbn1cbiJdfQ==