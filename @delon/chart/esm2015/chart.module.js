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
// #endregion
export class DelonChartRootModule {
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
export class DelonChartModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NoYXJ0LyIsInNvdXJjZXMiOlsiY2hhcnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFJOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7TUFFdEQsT0FBTyxHQUFHO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0lBQ2QsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFdBQVc7Q0FDWjs7QUF1QkQsTUFBTSxPQUFPLG9CQUFvQjs7O1lBbkJoQyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFdBQVcsQ0FBQyxPQUFPLEVBQUU7b0JBQ3JCLFlBQVksQ0FBQyxPQUFPLEVBQUU7b0JBQ3RCLGNBQWMsQ0FBQyxPQUFPLEVBQUU7b0JBQ3hCLGFBQWEsQ0FBQyxPQUFPLEVBQUU7b0JBQ3ZCLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtvQkFDMUIsZUFBZSxDQUFDLE9BQU8sRUFBRTtvQkFDekIsb0JBQW9CLENBQUMsT0FBTyxFQUFFO29CQUM5QixXQUFXLENBQUMsT0FBTyxFQUFFO29CQUNyQixhQUFhLENBQUMsT0FBTyxFQUFFO29CQUN2QixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7b0JBQzFCLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtvQkFDMUIsaUJBQWlCLENBQUMsT0FBTyxFQUFFO29CQUMzQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7b0JBQzFCLFdBQVcsQ0FBQyxPQUFPLEVBQUU7aUJBQ3RCO2dCQUNELE9BQU8sRUFBRSxPQUFPO2FBQ2pCOztBQUlELE1BQU0sT0FBTyxnQkFBZ0I7Ozs7SUFDM0IsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPLEVBQUUsUUFBUSxFQUFFLG9CQUFvQixFQUFFLENBQUM7SUFDNUMsQ0FBQzs7O1lBSkYsUUFBUSxTQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vICNyZWdpb24gYWxsIG1vZHVsZXNcblxuaW1wb3J0IHsgRzJCYXJNb2R1bGUgfSBmcm9tICdAZGVsb24vY2hhcnQvYmFyJztcbmltcG9ydCB7IEcyQ2FyZE1vZHVsZSB9IGZyb20gJ0BkZWxvbi9jaGFydC9jYXJkJztcbmltcG9ydCB7IEcyQ3VzdG9tTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2NoYXJ0L2N1c3RvbSc7XG5pbXBvcnQgeyBHMkdhdWdlTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2NoYXJ0L2dhdWdlJztcbmltcG9ydCB7IEcyTWluaUFyZWFNb2R1bGUgfSBmcm9tICdAZGVsb24vY2hhcnQvbWluaS1hcmVhJztcbmltcG9ydCB7IEcyTWluaUJhck1vZHVsZSB9IGZyb20gJ0BkZWxvbi9jaGFydC9taW5pLWJhcic7XG5pbXBvcnQgeyBHMk1pbmlQcm9ncmVzc01vZHVsZSB9IGZyb20gJ0BkZWxvbi9jaGFydC9taW5pLXByb2dyZXNzJztcbmltcG9ydCB7IE51bWJlckluZm9Nb2R1bGUgfSBmcm9tICdAZGVsb24vY2hhcnQvbnVtYmVyLWluZm8nO1xuaW1wb3J0IHsgRzJQaWVNb2R1bGUgfSBmcm9tICdAZGVsb24vY2hhcnQvcGllJztcbmltcG9ydCB7IEcyUmFkYXJNb2R1bGUgfSBmcm9tICdAZGVsb24vY2hhcnQvcmFkYXInO1xuaW1wb3J0IHsgRzJUYWdDbG91ZE1vZHVsZSB9IGZyb20gJ0BkZWxvbi9jaGFydC90YWctY2xvdWQnO1xuaW1wb3J0IHsgRzJUaW1lbGluZU1vZHVsZSB9IGZyb20gJ0BkZWxvbi9jaGFydC90aW1lbGluZSc7XG5pbXBvcnQgeyBUcmVuZE1vZHVsZSB9IGZyb20gJ0BkZWxvbi9jaGFydC90cmVuZCc7XG5pbXBvcnQgeyBHMldhdGVyV2F2ZU1vZHVsZSB9IGZyb20gJ0BkZWxvbi9jaGFydC93YXRlci13YXZlJztcblxuY29uc3QgTU9EVUxFUyA9IFtcbiAgRzJCYXJNb2R1bGUsXG4gIEcyQ2FyZE1vZHVsZSxcbiAgRzJDdXN0b21Nb2R1bGUsXG4gIEcyR2F1Z2VNb2R1bGUsXG4gIEcyTWluaUFyZWFNb2R1bGUsXG4gIEcyTWluaUJhck1vZHVsZSxcbiAgRzJNaW5pUHJvZ3Jlc3NNb2R1bGUsXG4gIEcyUGllTW9kdWxlLFxuICBHMlJhZGFyTW9kdWxlLFxuICBHMlRhZ0Nsb3VkTW9kdWxlLFxuICBHMlRpbWVsaW5lTW9kdWxlLFxuICBHMldhdGVyV2F2ZU1vZHVsZSxcbiAgTnVtYmVySW5mb01vZHVsZSxcbiAgVHJlbmRNb2R1bGUsXG5dO1xuXG4vLyAjZW5kcmVnaW9uXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBHMkJhck1vZHVsZS5mb3JSb290KCksXG4gICAgRzJDYXJkTW9kdWxlLmZvclJvb3QoKSxcbiAgICBHMkN1c3RvbU1vZHVsZS5mb3JSb290KCksXG4gICAgRzJHYXVnZU1vZHVsZS5mb3JSb290KCksXG4gICAgRzJNaW5pQXJlYU1vZHVsZS5mb3JSb290KCksXG4gICAgRzJNaW5pQmFyTW9kdWxlLmZvclJvb3QoKSxcbiAgICBHMk1pbmlQcm9ncmVzc01vZHVsZS5mb3JSb290KCksXG4gICAgRzJQaWVNb2R1bGUuZm9yUm9vdCgpLFxuICAgIEcyUmFkYXJNb2R1bGUuZm9yUm9vdCgpLFxuICAgIEcyVGFnQ2xvdWRNb2R1bGUuZm9yUm9vdCgpLFxuICAgIEcyVGltZWxpbmVNb2R1bGUuZm9yUm9vdCgpLFxuICAgIEcyV2F0ZXJXYXZlTW9kdWxlLmZvclJvb3QoKSxcbiAgICBOdW1iZXJJbmZvTW9kdWxlLmZvclJvb3QoKSxcbiAgICBUcmVuZE1vZHVsZS5mb3JSb290KCksXG4gIF0sXG4gIGV4cG9ydHM6IE1PRFVMRVMsXG59KVxuZXhwb3J0IGNsYXNzIERlbG9uQ2hhcnRSb290TW9kdWxlIHsgfVxuXG5ATmdNb2R1bGUoeyBleHBvcnRzOiBNT0RVTEVTIH0pXG5leHBvcnQgY2xhc3MgRGVsb25DaGFydE1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7IG5nTW9kdWxlOiBEZWxvbkNoYXJ0Um9vdE1vZHVsZSB9O1xuICB9XG59XG4iXX0=