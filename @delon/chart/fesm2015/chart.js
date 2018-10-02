import { NgModule } from '@angular/core';
import { G2BarModule } from '@delon/chart/bar';
export { G2BarComponent, G2BarModule } from '@delon/chart/bar';
import { G2CardModule } from '@delon/chart/card';
export { G2CardComponent, G2CardModule } from '@delon/chart/card';
import { G2CustomModule } from '@delon/chart/custom';
export { G2CustomComponent, G2CustomModule } from '@delon/chart/custom';
import { G2GaugeModule } from '@delon/chart/gauge';
export { G2GaugeComponent, G2GaugeModule } from '@delon/chart/gauge';
import { G2MiniAreaModule } from '@delon/chart/mini-area';
export { G2MiniAreaComponent, G2MiniAreaModule } from '@delon/chart/mini-area';
import { G2MiniBarModule } from '@delon/chart/mini-bar';
export { G2MiniBarComponent, G2MiniBarModule } from '@delon/chart/mini-bar';
import { G2MiniProgressModule } from '@delon/chart/mini-progress';
export { G2ProgressComponent, G2MiniProgressModule } from '@delon/chart/mini-progress';
import { G2PieModule } from '@delon/chart/pie';
export { G2PieComponent, G2PieModule } from '@delon/chart/pie';
import { G2RadarModule } from '@delon/chart/radar';
export { G2RadarComponent, G2RadarModule } from '@delon/chart/radar';
import { G2TagCloudModule } from '@delon/chart/tag-cloud';
export { G2TagCloudComponent, G2TagCloudModule } from '@delon/chart/tag-cloud';
import { G2TimelineModule } from '@delon/chart/timeline';
export { G2TimelineComponent, G2TimelineModule } from '@delon/chart/timeline';
import { G2WaterWaveModule } from '@delon/chart/water-wave';
export { G2WaterWaveComponent, G2WaterWaveModule } from '@delon/chart/water-wave';
import { NumberInfoModule } from '@delon/chart/number-info';
export { NumberInfoComponent, NumberInfoModule } from '@delon/chart/number-info';
import { TrendModule } from '@delon/chart/trend';
export { TrendComponent, TrendModule } from '@delon/chart/trend';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const MODULES = [
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
class DelonChartRootModule {
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
class DelonChartModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: DelonChartRootModule };
    }
}
DelonChartModule.decorators = [
    { type: NgModule, args: [{ exports: MODULES },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { DelonChartRootModule, DelonChartModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BkZWxvbi9jaGFydC9jaGFydC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8vIHJlZ2lvbjogYWxsIG1vZHVsZXNcclxuXHJcbmltcG9ydCB7IEcyQmFyTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2NoYXJ0L2Jhcic7XHJcbmltcG9ydCB7IEcyQ2FyZE1vZHVsZSB9IGZyb20gJ0BkZWxvbi9jaGFydC9jYXJkJztcclxuaW1wb3J0IHsgRzJDdXN0b21Nb2R1bGUgfSBmcm9tICdAZGVsb24vY2hhcnQvY3VzdG9tJztcclxuaW1wb3J0IHsgRzJHYXVnZU1vZHVsZSB9IGZyb20gJ0BkZWxvbi9jaGFydC9nYXVnZSc7XHJcbmltcG9ydCB7IEcyTWluaUFyZWFNb2R1bGUgfSBmcm9tICdAZGVsb24vY2hhcnQvbWluaS1hcmVhJztcclxuaW1wb3J0IHsgRzJNaW5pQmFyTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2NoYXJ0L21pbmktYmFyJztcclxuaW1wb3J0IHsgRzJNaW5pUHJvZ3Jlc3NNb2R1bGUgfSBmcm9tICdAZGVsb24vY2hhcnQvbWluaS1wcm9ncmVzcyc7XHJcbmltcG9ydCB7IEcyUGllTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2NoYXJ0L3BpZSc7XHJcbmltcG9ydCB7IEcyUmFkYXJNb2R1bGUgfSBmcm9tICdAZGVsb24vY2hhcnQvcmFkYXInO1xyXG5pbXBvcnQgeyBHMlRhZ0Nsb3VkTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2NoYXJ0L3RhZy1jbG91ZCc7XHJcbmltcG9ydCB7IEcyVGltZWxpbmVNb2R1bGUgfSBmcm9tICdAZGVsb24vY2hhcnQvdGltZWxpbmUnO1xyXG5pbXBvcnQgeyBHMldhdGVyV2F2ZU1vZHVsZSB9IGZyb20gJ0BkZWxvbi9jaGFydC93YXRlci13YXZlJztcclxuaW1wb3J0IHsgTnVtYmVySW5mb01vZHVsZSB9IGZyb20gJ0BkZWxvbi9jaGFydC9udW1iZXItaW5mbyc7XHJcbmltcG9ydCB7IFRyZW5kTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2NoYXJ0L3RyZW5kJztcclxuXHJcbmNvbnN0IE1PRFVMRVMgPSBbXHJcbiAgRzJCYXJNb2R1bGUsXHJcbiAgRzJDYXJkTW9kdWxlLFxyXG4gIEcyQ3VzdG9tTW9kdWxlLFxyXG4gIEcyR2F1Z2VNb2R1bGUsXHJcbiAgRzJNaW5pQXJlYU1vZHVsZSxcclxuICBHMk1pbmlCYXJNb2R1bGUsXHJcbiAgRzJNaW5pUHJvZ3Jlc3NNb2R1bGUsXHJcbiAgRzJQaWVNb2R1bGUsXHJcbiAgRzJSYWRhck1vZHVsZSxcclxuICBHMlRhZ0Nsb3VkTW9kdWxlLFxyXG4gIEcyVGltZWxpbmVNb2R1bGUsXHJcbiAgRzJXYXRlcldhdmVNb2R1bGUsXHJcbiAgTnVtYmVySW5mb01vZHVsZSxcclxuICBUcmVuZE1vZHVsZSxcclxuXTtcclxuXHJcbi8vIGVuZHJlZ2lvblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBHMkJhck1vZHVsZS5mb3JSb290KCksXHJcbiAgICBHMkNhcmRNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgRzJDdXN0b21Nb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgRzJHYXVnZU1vZHVsZS5mb3JSb290KCksXHJcbiAgICBHMk1pbmlBcmVhTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIEcyTWluaUJhck1vZHVsZS5mb3JSb290KCksXHJcbiAgICBHMk1pbmlQcm9ncmVzc01vZHVsZS5mb3JSb290KCksXHJcbiAgICBHMlBpZU1vZHVsZS5mb3JSb290KCksXHJcbiAgICBHMlJhZGFyTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIEcyVGFnQ2xvdWRNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgRzJUaW1lbGluZU1vZHVsZS5mb3JSb290KCksXHJcbiAgICBHMldhdGVyV2F2ZU1vZHVsZS5mb3JSb290KCksXHJcbiAgICBOdW1iZXJJbmZvTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIFRyZW5kTW9kdWxlLmZvclJvb3QoKSxcclxuICBdLFxyXG4gIGV4cG9ydHM6IE1PRFVMRVMsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEZWxvbkNoYXJ0Um9vdE1vZHVsZSB7fVxyXG5cclxuQE5nTW9kdWxlKHsgZXhwb3J0czogTU9EVUxFUyB9KVxyXG5leHBvcnQgY2xhc3MgRGVsb25DaGFydE1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4geyBuZ01vZHVsZTogRGVsb25DaGFydFJvb3RNb2R1bGUgfTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQW1CQSxNQUFNLE9BQU8sR0FBRztJQUNkLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztJQUNkLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixXQUFXO0NBQ1osQ0FBQztBQXVCRjs7O1lBbkJDLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsV0FBVyxDQUFDLE9BQU8sRUFBRTtvQkFDckIsWUFBWSxDQUFDLE9BQU8sRUFBRTtvQkFDdEIsY0FBYyxDQUFDLE9BQU8sRUFBRTtvQkFDeEIsYUFBYSxDQUFDLE9BQU8sRUFBRTtvQkFDdkIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO29CQUMxQixlQUFlLENBQUMsT0FBTyxFQUFFO29CQUN6QixvQkFBb0IsQ0FBQyxPQUFPLEVBQUU7b0JBQzlCLFdBQVcsQ0FBQyxPQUFPLEVBQUU7b0JBQ3JCLGFBQWEsQ0FBQyxPQUFPLEVBQUU7b0JBQ3ZCLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtvQkFDMUIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO29CQUMxQixpQkFBaUIsQ0FBQyxPQUFPLEVBQUU7b0JBQzNCLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtvQkFDMUIsV0FBVyxDQUFDLE9BQU8sRUFBRTtpQkFDdEI7Z0JBQ0QsT0FBTyxFQUFFLE9BQU87YUFDakI7O0FBSUQ7Ozs7SUFDRSxPQUFPLE9BQU87UUFDWixPQUFPLEVBQUUsUUFBUSxFQUFFLG9CQUFvQixFQUFFLENBQUM7S0FDM0M7OztZQUpGLFFBQVEsU0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUU7Ozs7Ozs7Ozs7Ozs7OzsifQ==