import { NgModule } from '@angular/core';
import { warnDeprecation } from '@delon/util/other';
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
import { G2SingleBarModule } from '@delon/chart/single-bar';
import { G2TagCloudModule } from '@delon/chart/tag-cloud';
import { G2TimelineModule } from '@delon/chart/timeline';
import { TrendModule } from '@delon/chart/trend';
import { G2WaterWaveModule } from '@delon/chart/water-wave';
import * as i0 from "@angular/core";
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
    G2SingleBarModule,
    NumberInfoModule,
    TrendModule,
];
// #endregion
/**
 * @deprecated Use secondary entry eg: `import { G2BarModule } from '@delon/chart/bar';`.
 */
export class DelonChartModule {
    constructor() {
        warnDeprecation("The `DelonChartModule` has been deprecated and will be removed in 12.0.0. Please use secondary entry instead.\ne.g. `import { G2BarModule } from '@delon/chart/bar';`");
    }
}
/** @nocollapse */ DelonChartModule.ɵmod = i0.ɵɵdefineNgModule({ type: DelonChartModule });
/** @nocollapse */ DelonChartModule.ɵinj = i0.ɵɵdefineInjector({ factory: function DelonChartModule_Factory(t) { return new (t || DelonChartModule)(); }, imports: [G2BarModule,
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
        G2SingleBarModule,
        NumberInfoModule,
        TrendModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DelonChartModule, { exports: [G2BarModule,
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
        G2SingleBarModule,
        NumberInfoModule,
        TrendModule] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DelonChartModule, [{
        type: NgModule,
        args: [{ exports: MODULES }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcGFja2FnZXMvY2hhcnQvY2hhcnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXBELHNCQUFzQjtBQUV0QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDOztBQUU1RCxNQUFNLE9BQU8sR0FBRztJQUNkLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztJQUNkLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsV0FBVztDQUNaLENBQUM7QUFFRixhQUFhO0FBRWI7O0dBRUc7QUFFSCxNQUFNLE9BQU8sZ0JBQWdCO0lBQzNCO1FBQ0UsZUFBZSxDQUNiLHVLQUF1SyxDQUN4SyxDQUFDO0lBQ0osQ0FBQzs7dUVBTFUsZ0JBQWdCO2tJQUFoQixnQkFBZ0Isa0JBdkIzQixXQUFXO1FBQ1gsWUFBWTtRQUNaLGNBQWM7UUFDZCxhQUFhO1FBQ2IsZ0JBQWdCO1FBQ2hCLGVBQWU7UUFDZixvQkFBb0I7UUFDcEIsV0FBVztRQUNYLGFBQWE7UUFDYixnQkFBZ0I7UUFDaEIsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLFdBQVc7d0ZBU0EsZ0JBQWdCLGNBdkIzQixXQUFXO1FBQ1gsWUFBWTtRQUNaLGNBQWM7UUFDZCxhQUFhO1FBQ2IsZ0JBQWdCO1FBQ2hCLGVBQWU7UUFDZixvQkFBb0I7UUFDcEIsV0FBVztRQUNYLGFBQWE7UUFDYixnQkFBZ0I7UUFDaEIsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLFdBQVc7dUZBU0EsZ0JBQWdCO2NBRDVCLFFBQVE7ZUFBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgd2FybkRlcHJlY2F0aW9uIH0gZnJvbSAnQGRlbG9uL3V0aWwvb3RoZXInO1xuXG4vLyAjcmVnaW9uIGFsbCBtb2R1bGVzXG5cbmltcG9ydCB7IEcyQmFyTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2NoYXJ0L2Jhcic7XG5pbXBvcnQgeyBHMkNhcmRNb2R1bGUgfSBmcm9tICdAZGVsb24vY2hhcnQvY2FyZCc7XG5pbXBvcnQgeyBHMkN1c3RvbU1vZHVsZSB9IGZyb20gJ0BkZWxvbi9jaGFydC9jdXN0b20nO1xuaW1wb3J0IHsgRzJHYXVnZU1vZHVsZSB9IGZyb20gJ0BkZWxvbi9jaGFydC9nYXVnZSc7XG5pbXBvcnQgeyBHMk1pbmlBcmVhTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2NoYXJ0L21pbmktYXJlYSc7XG5pbXBvcnQgeyBHMk1pbmlCYXJNb2R1bGUgfSBmcm9tICdAZGVsb24vY2hhcnQvbWluaS1iYXInO1xuaW1wb3J0IHsgRzJNaW5pUHJvZ3Jlc3NNb2R1bGUgfSBmcm9tICdAZGVsb24vY2hhcnQvbWluaS1wcm9ncmVzcyc7XG5pbXBvcnQgeyBOdW1iZXJJbmZvTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2NoYXJ0L251bWJlci1pbmZvJztcbmltcG9ydCB7IEcyUGllTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2NoYXJ0L3BpZSc7XG5pbXBvcnQgeyBHMlJhZGFyTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2NoYXJ0L3JhZGFyJztcbmltcG9ydCB7IEcyU2luZ2xlQmFyTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2NoYXJ0L3NpbmdsZS1iYXInO1xuaW1wb3J0IHsgRzJUYWdDbG91ZE1vZHVsZSB9IGZyb20gJ0BkZWxvbi9jaGFydC90YWctY2xvdWQnO1xuaW1wb3J0IHsgRzJUaW1lbGluZU1vZHVsZSB9IGZyb20gJ0BkZWxvbi9jaGFydC90aW1lbGluZSc7XG5pbXBvcnQgeyBUcmVuZE1vZHVsZSB9IGZyb20gJ0BkZWxvbi9jaGFydC90cmVuZCc7XG5pbXBvcnQgeyBHMldhdGVyV2F2ZU1vZHVsZSB9IGZyb20gJ0BkZWxvbi9jaGFydC93YXRlci13YXZlJztcblxuY29uc3QgTU9EVUxFUyA9IFtcbiAgRzJCYXJNb2R1bGUsXG4gIEcyQ2FyZE1vZHVsZSxcbiAgRzJDdXN0b21Nb2R1bGUsXG4gIEcyR2F1Z2VNb2R1bGUsXG4gIEcyTWluaUFyZWFNb2R1bGUsXG4gIEcyTWluaUJhck1vZHVsZSxcbiAgRzJNaW5pUHJvZ3Jlc3NNb2R1bGUsXG4gIEcyUGllTW9kdWxlLFxuICBHMlJhZGFyTW9kdWxlLFxuICBHMlRhZ0Nsb3VkTW9kdWxlLFxuICBHMlRpbWVsaW5lTW9kdWxlLFxuICBHMldhdGVyV2F2ZU1vZHVsZSxcbiAgRzJTaW5nbGVCYXJNb2R1bGUsXG4gIE51bWJlckluZm9Nb2R1bGUsXG4gIFRyZW5kTW9kdWxlLFxuXTtcblxuLy8gI2VuZHJlZ2lvblxuXG4vKipcbiAqIEBkZXByZWNhdGVkIFVzZSBzZWNvbmRhcnkgZW50cnkgZWc6IGBpbXBvcnQgeyBHMkJhck1vZHVsZSB9IGZyb20gJ0BkZWxvbi9jaGFydC9iYXInO2AuXG4gKi9cbkBOZ01vZHVsZSh7IGV4cG9ydHM6IE1PRFVMRVMgfSlcbmV4cG9ydCBjbGFzcyBEZWxvbkNoYXJ0TW9kdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgd2FybkRlcHJlY2F0aW9uKFxuICAgICAgXCJUaGUgYERlbG9uQ2hhcnRNb2R1bGVgIGhhcyBiZWVuIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAxMi4wLjAuIFBsZWFzZSB1c2Ugc2Vjb25kYXJ5IGVudHJ5IGluc3RlYWQuXFxuZS5nLiBgaW1wb3J0IHsgRzJCYXJNb2R1bGUgfSBmcm9tICdAZGVsb24vY2hhcnQvYmFyJztgXCIsXG4gICAgKTtcbiAgfVxufVxuIl19