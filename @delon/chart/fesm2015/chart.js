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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BkZWxvbi9jaGFydC9jaGFydC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gcmVnaW9uOiBhbGwgbW9kdWxlc1xuXG5pbXBvcnQgeyBHMkJhck1vZHVsZSB9IGZyb20gJ0BkZWxvbi9jaGFydC9iYXInO1xuaW1wb3J0IHsgRzJDYXJkTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2NoYXJ0L2NhcmQnO1xuaW1wb3J0IHsgRzJDdXN0b21Nb2R1bGUgfSBmcm9tICdAZGVsb24vY2hhcnQvY3VzdG9tJztcbmltcG9ydCB7IEcyR2F1Z2VNb2R1bGUgfSBmcm9tICdAZGVsb24vY2hhcnQvZ2F1Z2UnO1xuaW1wb3J0IHsgRzJNaW5pQXJlYU1vZHVsZSB9IGZyb20gJ0BkZWxvbi9jaGFydC9taW5pLWFyZWEnO1xuaW1wb3J0IHsgRzJNaW5pQmFyTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2NoYXJ0L21pbmktYmFyJztcbmltcG9ydCB7IEcyTWluaVByb2dyZXNzTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2NoYXJ0L21pbmktcHJvZ3Jlc3MnO1xuaW1wb3J0IHsgRzJQaWVNb2R1bGUgfSBmcm9tICdAZGVsb24vY2hhcnQvcGllJztcbmltcG9ydCB7IEcyUmFkYXJNb2R1bGUgfSBmcm9tICdAZGVsb24vY2hhcnQvcmFkYXInO1xuaW1wb3J0IHsgRzJUYWdDbG91ZE1vZHVsZSB9IGZyb20gJ0BkZWxvbi9jaGFydC90YWctY2xvdWQnO1xuaW1wb3J0IHsgRzJUaW1lbGluZU1vZHVsZSB9IGZyb20gJ0BkZWxvbi9jaGFydC90aW1lbGluZSc7XG5pbXBvcnQgeyBHMldhdGVyV2F2ZU1vZHVsZSB9IGZyb20gJ0BkZWxvbi9jaGFydC93YXRlci13YXZlJztcbmltcG9ydCB7IE51bWJlckluZm9Nb2R1bGUgfSBmcm9tICdAZGVsb24vY2hhcnQvbnVtYmVyLWluZm8nO1xuaW1wb3J0IHsgVHJlbmRNb2R1bGUgfSBmcm9tICdAZGVsb24vY2hhcnQvdHJlbmQnO1xuXG5jb25zdCBNT0RVTEVTID0gW1xuICBHMkJhck1vZHVsZSxcbiAgRzJDYXJkTW9kdWxlLFxuICBHMkN1c3RvbU1vZHVsZSxcbiAgRzJHYXVnZU1vZHVsZSxcbiAgRzJNaW5pQXJlYU1vZHVsZSxcbiAgRzJNaW5pQmFyTW9kdWxlLFxuICBHMk1pbmlQcm9ncmVzc01vZHVsZSxcbiAgRzJQaWVNb2R1bGUsXG4gIEcyUmFkYXJNb2R1bGUsXG4gIEcyVGFnQ2xvdWRNb2R1bGUsXG4gIEcyVGltZWxpbmVNb2R1bGUsXG4gIEcyV2F0ZXJXYXZlTW9kdWxlLFxuICBOdW1iZXJJbmZvTW9kdWxlLFxuICBUcmVuZE1vZHVsZSxcbl07XG5cbi8vIGVuZHJlZ2lvblxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgRzJCYXJNb2R1bGUuZm9yUm9vdCgpLFxuICAgIEcyQ2FyZE1vZHVsZS5mb3JSb290KCksXG4gICAgRzJDdXN0b21Nb2R1bGUuZm9yUm9vdCgpLFxuICAgIEcyR2F1Z2VNb2R1bGUuZm9yUm9vdCgpLFxuICAgIEcyTWluaUFyZWFNb2R1bGUuZm9yUm9vdCgpLFxuICAgIEcyTWluaUJhck1vZHVsZS5mb3JSb290KCksXG4gICAgRzJNaW5pUHJvZ3Jlc3NNb2R1bGUuZm9yUm9vdCgpLFxuICAgIEcyUGllTW9kdWxlLmZvclJvb3QoKSxcbiAgICBHMlJhZGFyTW9kdWxlLmZvclJvb3QoKSxcbiAgICBHMlRhZ0Nsb3VkTW9kdWxlLmZvclJvb3QoKSxcbiAgICBHMlRpbWVsaW5lTW9kdWxlLmZvclJvb3QoKSxcbiAgICBHMldhdGVyV2F2ZU1vZHVsZS5mb3JSb290KCksXG4gICAgTnVtYmVySW5mb01vZHVsZS5mb3JSb290KCksXG4gICAgVHJlbmRNb2R1bGUuZm9yUm9vdCgpLFxuICBdLFxuICBleHBvcnRzOiBNT0RVTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBEZWxvbkNoYXJ0Um9vdE1vZHVsZSB7fVxuXG5ATmdNb2R1bGUoeyBleHBvcnRzOiBNT0RVTEVTIH0pXG5leHBvcnQgY2xhc3MgRGVsb25DaGFydE1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7IG5nTW9kdWxlOiBEZWxvbkNoYXJ0Um9vdE1vZHVsZSB9O1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBbUJBLE1BQU0sT0FBTyxHQUFHO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0lBQ2QsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFdBQVc7Q0FDWixDQUFDO0FBdUJGOzs7WUFuQkMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxXQUFXLENBQUMsT0FBTyxFQUFFO29CQUNyQixZQUFZLENBQUMsT0FBTyxFQUFFO29CQUN0QixjQUFjLENBQUMsT0FBTyxFQUFFO29CQUN4QixhQUFhLENBQUMsT0FBTyxFQUFFO29CQUN2QixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7b0JBQzFCLGVBQWUsQ0FBQyxPQUFPLEVBQUU7b0JBQ3pCLG9CQUFvQixDQUFDLE9BQU8sRUFBRTtvQkFDOUIsV0FBVyxDQUFDLE9BQU8sRUFBRTtvQkFDckIsYUFBYSxDQUFDLE9BQU8sRUFBRTtvQkFDdkIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO29CQUMxQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7b0JBQzFCLGlCQUFpQixDQUFDLE9BQU8sRUFBRTtvQkFDM0IsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO29CQUMxQixXQUFXLENBQUMsT0FBTyxFQUFFO2lCQUN0QjtnQkFDRCxPQUFPLEVBQUUsT0FBTzthQUNqQjs7QUFJRDs7OztJQUNFLE9BQU8sT0FBTztRQUNaLE9BQU8sRUFBRSxRQUFRLEVBQUUsb0JBQW9CLEVBQUUsQ0FBQztLQUMzQzs7O1lBSkYsUUFBUSxTQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRTs7Ozs7Ozs7Ozs7Ozs7OyJ9