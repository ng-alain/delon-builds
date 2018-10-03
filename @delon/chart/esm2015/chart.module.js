/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { G2BarModule } from '@delon/chart/bar';
import { G2CardModule } from '@delon/chart/card';
import { G2CustomModule } from '@delon/chart/custom';
import { G2GaugeModule } from '@delon/chart/gauge';
import { G2MiniAreaModule } from '@delon/chart/mini-area';
import { G2MiniBarModule } from '@delon/chart/mini-bar';
import { G2MiniProgressModule } from '@delon/chart/mini-progress';
import { G2PieModule } from '@delon/chart/pie';
import { G2RadarModule } from '@delon/chart/radar';
import { G2TagCloudModule } from '@delon/chart/tag-cloud';
import { G2TimelineModule } from '@delon/chart/timeline';
import { G2WaterWaveModule } from '@delon/chart/water-wave';
import { NumberInfoModule } from '@delon/chart/number-info';
import { TrendModule } from '@delon/chart/trend';
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NoYXJ0LyIsInNvdXJjZXMiOlsiY2hhcnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUk5RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDekQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztBQUVqRCxNQUFNLE9BQU8sR0FBRztJQUNkLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztJQUNkLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixXQUFXO0NBQ1osQ0FBQztBQXVCRixNQUFNOzs7WUFuQkwsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxXQUFXLENBQUMsT0FBTyxFQUFFO29CQUNyQixZQUFZLENBQUMsT0FBTyxFQUFFO29CQUN0QixjQUFjLENBQUMsT0FBTyxFQUFFO29CQUN4QixhQUFhLENBQUMsT0FBTyxFQUFFO29CQUN2QixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7b0JBQzFCLGVBQWUsQ0FBQyxPQUFPLEVBQUU7b0JBQ3pCLG9CQUFvQixDQUFDLE9BQU8sRUFBRTtvQkFDOUIsV0FBVyxDQUFDLE9BQU8sRUFBRTtvQkFDckIsYUFBYSxDQUFDLE9BQU8sRUFBRTtvQkFDdkIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO29CQUMxQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7b0JBQzFCLGlCQUFpQixDQUFDLE9BQU8sRUFBRTtvQkFDM0IsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO29CQUMxQixXQUFXLENBQUMsT0FBTyxFQUFFO2lCQUN0QjtnQkFDRCxPQUFPLEVBQUUsT0FBTzthQUNqQjs7QUFJRCxNQUFNOzs7O0lBQ0osTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPLEVBQUUsUUFBUSxFQUFFLG9CQUFvQixFQUFFLENBQUM7S0FDM0M7OztZQUpGLFFBQVEsU0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyByZWdpb246IGFsbCBtb2R1bGVzXG5cbmltcG9ydCB7IEcyQmFyTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2NoYXJ0L2Jhcic7XG5pbXBvcnQgeyBHMkNhcmRNb2R1bGUgfSBmcm9tICdAZGVsb24vY2hhcnQvY2FyZCc7XG5pbXBvcnQgeyBHMkN1c3RvbU1vZHVsZSB9IGZyb20gJ0BkZWxvbi9jaGFydC9jdXN0b20nO1xuaW1wb3J0IHsgRzJHYXVnZU1vZHVsZSB9IGZyb20gJ0BkZWxvbi9jaGFydC9nYXVnZSc7XG5pbXBvcnQgeyBHMk1pbmlBcmVhTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2NoYXJ0L21pbmktYXJlYSc7XG5pbXBvcnQgeyBHMk1pbmlCYXJNb2R1bGUgfSBmcm9tICdAZGVsb24vY2hhcnQvbWluaS1iYXInO1xuaW1wb3J0IHsgRzJNaW5pUHJvZ3Jlc3NNb2R1bGUgfSBmcm9tICdAZGVsb24vY2hhcnQvbWluaS1wcm9ncmVzcyc7XG5pbXBvcnQgeyBHMlBpZU1vZHVsZSB9IGZyb20gJ0BkZWxvbi9jaGFydC9waWUnO1xuaW1wb3J0IHsgRzJSYWRhck1vZHVsZSB9IGZyb20gJ0BkZWxvbi9jaGFydC9yYWRhcic7XG5pbXBvcnQgeyBHMlRhZ0Nsb3VkTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2NoYXJ0L3RhZy1jbG91ZCc7XG5pbXBvcnQgeyBHMlRpbWVsaW5lTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2NoYXJ0L3RpbWVsaW5lJztcbmltcG9ydCB7IEcyV2F0ZXJXYXZlTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2NoYXJ0L3dhdGVyLXdhdmUnO1xuaW1wb3J0IHsgTnVtYmVySW5mb01vZHVsZSB9IGZyb20gJ0BkZWxvbi9jaGFydC9udW1iZXItaW5mbyc7XG5pbXBvcnQgeyBUcmVuZE1vZHVsZSB9IGZyb20gJ0BkZWxvbi9jaGFydC90cmVuZCc7XG5cbmNvbnN0IE1PRFVMRVMgPSBbXG4gIEcyQmFyTW9kdWxlLFxuICBHMkNhcmRNb2R1bGUsXG4gIEcyQ3VzdG9tTW9kdWxlLFxuICBHMkdhdWdlTW9kdWxlLFxuICBHMk1pbmlBcmVhTW9kdWxlLFxuICBHMk1pbmlCYXJNb2R1bGUsXG4gIEcyTWluaVByb2dyZXNzTW9kdWxlLFxuICBHMlBpZU1vZHVsZSxcbiAgRzJSYWRhck1vZHVsZSxcbiAgRzJUYWdDbG91ZE1vZHVsZSxcbiAgRzJUaW1lbGluZU1vZHVsZSxcbiAgRzJXYXRlcldhdmVNb2R1bGUsXG4gIE51bWJlckluZm9Nb2R1bGUsXG4gIFRyZW5kTW9kdWxlLFxuXTtcblxuLy8gZW5kcmVnaW9uXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBHMkJhck1vZHVsZS5mb3JSb290KCksXG4gICAgRzJDYXJkTW9kdWxlLmZvclJvb3QoKSxcbiAgICBHMkN1c3RvbU1vZHVsZS5mb3JSb290KCksXG4gICAgRzJHYXVnZU1vZHVsZS5mb3JSb290KCksXG4gICAgRzJNaW5pQXJlYU1vZHVsZS5mb3JSb290KCksXG4gICAgRzJNaW5pQmFyTW9kdWxlLmZvclJvb3QoKSxcbiAgICBHMk1pbmlQcm9ncmVzc01vZHVsZS5mb3JSb290KCksXG4gICAgRzJQaWVNb2R1bGUuZm9yUm9vdCgpLFxuICAgIEcyUmFkYXJNb2R1bGUuZm9yUm9vdCgpLFxuICAgIEcyVGFnQ2xvdWRNb2R1bGUuZm9yUm9vdCgpLFxuICAgIEcyVGltZWxpbmVNb2R1bGUuZm9yUm9vdCgpLFxuICAgIEcyV2F0ZXJXYXZlTW9kdWxlLmZvclJvb3QoKSxcbiAgICBOdW1iZXJJbmZvTW9kdWxlLmZvclJvb3QoKSxcbiAgICBUcmVuZE1vZHVsZS5mb3JSb290KCksXG4gIF0sXG4gIGV4cG9ydHM6IE1PRFVMRVMsXG59KVxuZXhwb3J0IGNsYXNzIERlbG9uQ2hhcnRSb290TW9kdWxlIHt9XG5cbkBOZ01vZHVsZSh7IGV4cG9ydHM6IE1PRFVMRVMgfSlcbmV4cG9ydCBjbGFzcyBEZWxvbkNoYXJ0TW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHsgbmdNb2R1bGU6IERlbG9uQ2hhcnRSb290TW9kdWxlIH07XG4gIH1cbn1cbiJdfQ==