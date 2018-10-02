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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NoYXJ0LyIsInNvdXJjZXMiOlsiY2hhcnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUk5RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDekQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztBQUVqRCxNQUFNLE9BQU8sR0FBRztJQUNkLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztJQUNkLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixXQUFXO0NBQ1osQ0FBQztBQXVCRixNQUFNOzs7WUFuQkwsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxXQUFXLENBQUMsT0FBTyxFQUFFO29CQUNyQixZQUFZLENBQUMsT0FBTyxFQUFFO29CQUN0QixjQUFjLENBQUMsT0FBTyxFQUFFO29CQUN4QixhQUFhLENBQUMsT0FBTyxFQUFFO29CQUN2QixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7b0JBQzFCLGVBQWUsQ0FBQyxPQUFPLEVBQUU7b0JBQ3pCLG9CQUFvQixDQUFDLE9BQU8sRUFBRTtvQkFDOUIsV0FBVyxDQUFDLE9BQU8sRUFBRTtvQkFDckIsYUFBYSxDQUFDLE9BQU8sRUFBRTtvQkFDdkIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO29CQUMxQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7b0JBQzFCLGlCQUFpQixDQUFDLE9BQU8sRUFBRTtvQkFDM0IsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO29CQUMxQixXQUFXLENBQUMsT0FBTyxFQUFFO2lCQUN0QjtnQkFDRCxPQUFPLEVBQUUsT0FBTzthQUNqQjs7QUFJRCxNQUFNOzs7O0lBQ0osTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPLEVBQUUsUUFBUSxFQUFFLG9CQUFvQixFQUFFLENBQUM7S0FDM0M7OztZQUpGLFFBQVEsU0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLy8gcmVnaW9uOiBhbGwgbW9kdWxlc1xyXG5cclxuaW1wb3J0IHsgRzJCYXJNb2R1bGUgfSBmcm9tICdAZGVsb24vY2hhcnQvYmFyJztcclxuaW1wb3J0IHsgRzJDYXJkTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2NoYXJ0L2NhcmQnO1xyXG5pbXBvcnQgeyBHMkN1c3RvbU1vZHVsZSB9IGZyb20gJ0BkZWxvbi9jaGFydC9jdXN0b20nO1xyXG5pbXBvcnQgeyBHMkdhdWdlTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2NoYXJ0L2dhdWdlJztcclxuaW1wb3J0IHsgRzJNaW5pQXJlYU1vZHVsZSB9IGZyb20gJ0BkZWxvbi9jaGFydC9taW5pLWFyZWEnO1xyXG5pbXBvcnQgeyBHMk1pbmlCYXJNb2R1bGUgfSBmcm9tICdAZGVsb24vY2hhcnQvbWluaS1iYXInO1xyXG5pbXBvcnQgeyBHMk1pbmlQcm9ncmVzc01vZHVsZSB9IGZyb20gJ0BkZWxvbi9jaGFydC9taW5pLXByb2dyZXNzJztcclxuaW1wb3J0IHsgRzJQaWVNb2R1bGUgfSBmcm9tICdAZGVsb24vY2hhcnQvcGllJztcclxuaW1wb3J0IHsgRzJSYWRhck1vZHVsZSB9IGZyb20gJ0BkZWxvbi9jaGFydC9yYWRhcic7XHJcbmltcG9ydCB7IEcyVGFnQ2xvdWRNb2R1bGUgfSBmcm9tICdAZGVsb24vY2hhcnQvdGFnLWNsb3VkJztcclxuaW1wb3J0IHsgRzJUaW1lbGluZU1vZHVsZSB9IGZyb20gJ0BkZWxvbi9jaGFydC90aW1lbGluZSc7XHJcbmltcG9ydCB7IEcyV2F0ZXJXYXZlTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2NoYXJ0L3dhdGVyLXdhdmUnO1xyXG5pbXBvcnQgeyBOdW1iZXJJbmZvTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2NoYXJ0L251bWJlci1pbmZvJztcclxuaW1wb3J0IHsgVHJlbmRNb2R1bGUgfSBmcm9tICdAZGVsb24vY2hhcnQvdHJlbmQnO1xyXG5cclxuY29uc3QgTU9EVUxFUyA9IFtcclxuICBHMkJhck1vZHVsZSxcclxuICBHMkNhcmRNb2R1bGUsXHJcbiAgRzJDdXN0b21Nb2R1bGUsXHJcbiAgRzJHYXVnZU1vZHVsZSxcclxuICBHMk1pbmlBcmVhTW9kdWxlLFxyXG4gIEcyTWluaUJhck1vZHVsZSxcclxuICBHMk1pbmlQcm9ncmVzc01vZHVsZSxcclxuICBHMlBpZU1vZHVsZSxcclxuICBHMlJhZGFyTW9kdWxlLFxyXG4gIEcyVGFnQ2xvdWRNb2R1bGUsXHJcbiAgRzJUaW1lbGluZU1vZHVsZSxcclxuICBHMldhdGVyV2F2ZU1vZHVsZSxcclxuICBOdW1iZXJJbmZvTW9kdWxlLFxyXG4gIFRyZW5kTW9kdWxlLFxyXG5dO1xyXG5cclxuLy8gZW5kcmVnaW9uXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIEcyQmFyTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIEcyQ2FyZE1vZHVsZS5mb3JSb290KCksXHJcbiAgICBHMkN1c3RvbU1vZHVsZS5mb3JSb290KCksXHJcbiAgICBHMkdhdWdlTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIEcyTWluaUFyZWFNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgRzJNaW5pQmFyTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIEcyTWluaVByb2dyZXNzTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIEcyUGllTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIEcyUmFkYXJNb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgRzJUYWdDbG91ZE1vZHVsZS5mb3JSb290KCksXHJcbiAgICBHMlRpbWVsaW5lTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIEcyV2F0ZXJXYXZlTW9kdWxlLmZvclJvb3QoKSxcclxuICAgIE51bWJlckluZm9Nb2R1bGUuZm9yUm9vdCgpLFxyXG4gICAgVHJlbmRNb2R1bGUuZm9yUm9vdCgpLFxyXG4gIF0sXHJcbiAgZXhwb3J0czogTU9EVUxFUyxcclxufSlcclxuZXhwb3J0IGNsYXNzIERlbG9uQ2hhcnRSb290TW9kdWxlIHt9XHJcblxyXG5ATmdNb2R1bGUoeyBleHBvcnRzOiBNT0RVTEVTIH0pXHJcbmV4cG9ydCBjbGFzcyBEZWxvbkNoYXJ0TW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7IG5nTW9kdWxlOiBEZWxvbkNoYXJ0Um9vdE1vZHVsZSB9O1xyXG4gIH1cclxufVxyXG4iXX0=