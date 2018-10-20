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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2NoYXJ0LyIsInNvdXJjZXMiOlsiY2hhcnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUk5RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDekQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztBQUVqRCxJQUFNLE9BQU8sR0FBRztJQUNkLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztJQUNkLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixXQUFXO0NBQ1osQ0FBQzs7Ozs7Z0JBSUQsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxXQUFXLENBQUMsT0FBTyxFQUFFO3dCQUNyQixZQUFZLENBQUMsT0FBTyxFQUFFO3dCQUN0QixjQUFjLENBQUMsT0FBTyxFQUFFO3dCQUN4QixhQUFhLENBQUMsT0FBTyxFQUFFO3dCQUN2QixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7d0JBQzFCLGVBQWUsQ0FBQyxPQUFPLEVBQUU7d0JBQ3pCLG9CQUFvQixDQUFDLE9BQU8sRUFBRTt3QkFDOUIsV0FBVyxDQUFDLE9BQU8sRUFBRTt3QkFDckIsYUFBYSxDQUFDLE9BQU8sRUFBRTt3QkFDdkIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO3dCQUMxQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7d0JBQzFCLGlCQUFpQixDQUFDLE9BQU8sRUFBRTt3QkFDM0IsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO3dCQUMxQixXQUFXLENBQUMsT0FBTyxFQUFFO3FCQUN0QjtvQkFDRCxPQUFPLEVBQUUsT0FBTztpQkFDakI7OytCQXhERDs7U0F5RGEsb0JBQW9COzs7Ozs7O0lBSXhCLHdCQUFPOzs7SUFBZDtRQUNFLE9BQU8sRUFBRSxRQUFRLEVBQUUsb0JBQW9CLEVBQUUsQ0FBQztLQUMzQzs7Z0JBSkYsUUFBUSxTQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRTs7MkJBM0Q5Qjs7U0E0RGEsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gI3JlZ2lvbiBhbGwgbW9kdWxlc1xuXG5pbXBvcnQgeyBHMkJhck1vZHVsZSB9IGZyb20gJ0BkZWxvbi9jaGFydC9iYXInO1xuaW1wb3J0IHsgRzJDYXJkTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2NoYXJ0L2NhcmQnO1xuaW1wb3J0IHsgRzJDdXN0b21Nb2R1bGUgfSBmcm9tICdAZGVsb24vY2hhcnQvY3VzdG9tJztcbmltcG9ydCB7IEcyR2F1Z2VNb2R1bGUgfSBmcm9tICdAZGVsb24vY2hhcnQvZ2F1Z2UnO1xuaW1wb3J0IHsgRzJNaW5pQXJlYU1vZHVsZSB9IGZyb20gJ0BkZWxvbi9jaGFydC9taW5pLWFyZWEnO1xuaW1wb3J0IHsgRzJNaW5pQmFyTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2NoYXJ0L21pbmktYmFyJztcbmltcG9ydCB7IEcyTWluaVByb2dyZXNzTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2NoYXJ0L21pbmktcHJvZ3Jlc3MnO1xuaW1wb3J0IHsgRzJQaWVNb2R1bGUgfSBmcm9tICdAZGVsb24vY2hhcnQvcGllJztcbmltcG9ydCB7IEcyUmFkYXJNb2R1bGUgfSBmcm9tICdAZGVsb24vY2hhcnQvcmFkYXInO1xuaW1wb3J0IHsgRzJUYWdDbG91ZE1vZHVsZSB9IGZyb20gJ0BkZWxvbi9jaGFydC90YWctY2xvdWQnO1xuaW1wb3J0IHsgRzJUaW1lbGluZU1vZHVsZSB9IGZyb20gJ0BkZWxvbi9jaGFydC90aW1lbGluZSc7XG5pbXBvcnQgeyBHMldhdGVyV2F2ZU1vZHVsZSB9IGZyb20gJ0BkZWxvbi9jaGFydC93YXRlci13YXZlJztcbmltcG9ydCB7IE51bWJlckluZm9Nb2R1bGUgfSBmcm9tICdAZGVsb24vY2hhcnQvbnVtYmVyLWluZm8nO1xuaW1wb3J0IHsgVHJlbmRNb2R1bGUgfSBmcm9tICdAZGVsb24vY2hhcnQvdHJlbmQnO1xuXG5jb25zdCBNT0RVTEVTID0gW1xuICBHMkJhck1vZHVsZSxcbiAgRzJDYXJkTW9kdWxlLFxuICBHMkN1c3RvbU1vZHVsZSxcbiAgRzJHYXVnZU1vZHVsZSxcbiAgRzJNaW5pQXJlYU1vZHVsZSxcbiAgRzJNaW5pQmFyTW9kdWxlLFxuICBHMk1pbmlQcm9ncmVzc01vZHVsZSxcbiAgRzJQaWVNb2R1bGUsXG4gIEcyUmFkYXJNb2R1bGUsXG4gIEcyVGFnQ2xvdWRNb2R1bGUsXG4gIEcyVGltZWxpbmVNb2R1bGUsXG4gIEcyV2F0ZXJXYXZlTW9kdWxlLFxuICBOdW1iZXJJbmZvTW9kdWxlLFxuICBUcmVuZE1vZHVsZSxcbl07XG5cbi8vICNlbmRyZWdpb25cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEcyQmFyTW9kdWxlLmZvclJvb3QoKSxcbiAgICBHMkNhcmRNb2R1bGUuZm9yUm9vdCgpLFxuICAgIEcyQ3VzdG9tTW9kdWxlLmZvclJvb3QoKSxcbiAgICBHMkdhdWdlTW9kdWxlLmZvclJvb3QoKSxcbiAgICBHMk1pbmlBcmVhTW9kdWxlLmZvclJvb3QoKSxcbiAgICBHMk1pbmlCYXJNb2R1bGUuZm9yUm9vdCgpLFxuICAgIEcyTWluaVByb2dyZXNzTW9kdWxlLmZvclJvb3QoKSxcbiAgICBHMlBpZU1vZHVsZS5mb3JSb290KCksXG4gICAgRzJSYWRhck1vZHVsZS5mb3JSb290KCksXG4gICAgRzJUYWdDbG91ZE1vZHVsZS5mb3JSb290KCksXG4gICAgRzJUaW1lbGluZU1vZHVsZS5mb3JSb290KCksXG4gICAgRzJXYXRlcldhdmVNb2R1bGUuZm9yUm9vdCgpLFxuICAgIE51bWJlckluZm9Nb2R1bGUuZm9yUm9vdCgpLFxuICAgIFRyZW5kTW9kdWxlLmZvclJvb3QoKSxcbiAgXSxcbiAgZXhwb3J0czogTU9EVUxFUyxcbn0pXG5leHBvcnQgY2xhc3MgRGVsb25DaGFydFJvb3RNb2R1bGUge31cblxuQE5nTW9kdWxlKHsgZXhwb3J0czogTU9EVUxFUyB9KVxuZXhwb3J0IGNsYXNzIERlbG9uQ2hhcnRNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4geyBuZ01vZHVsZTogRGVsb25DaGFydFJvb3RNb2R1bGUgfTtcbiAgfVxufVxuIl19