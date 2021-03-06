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
DelonChartModule.decorators = [
    { type: NgModule, args: [{ exports: MODULES },] }
];
/** @nocollapse */
DelonChartModule.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcGFja2FnZXMvY2hhcnQvY2hhcnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXBELHNCQUFzQjtBQUV0QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzVELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRTVELE1BQU0sT0FBTyxHQUFHO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0lBQ2QsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixXQUFXO0NBQ1osQ0FBQztBQUVGLGFBQWE7QUFFYjs7R0FFRztBQUVILE1BQU0sT0FBTyxnQkFBZ0I7SUFDM0I7UUFDRSxlQUFlLENBQ2IsdUtBQXVLLENBQ3hLLENBQUM7SUFDSixDQUFDOzs7WUFORixRQUFRLFNBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHdhcm5EZXByZWNhdGlvbiB9IGZyb20gJ0BkZWxvbi91dGlsL290aGVyJztcblxuLy8gI3JlZ2lvbiBhbGwgbW9kdWxlc1xuXG5pbXBvcnQgeyBHMkJhck1vZHVsZSB9IGZyb20gJ0BkZWxvbi9jaGFydC9iYXInO1xuaW1wb3J0IHsgRzJDYXJkTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2NoYXJ0L2NhcmQnO1xuaW1wb3J0IHsgRzJDdXN0b21Nb2R1bGUgfSBmcm9tICdAZGVsb24vY2hhcnQvY3VzdG9tJztcbmltcG9ydCB7IEcyR2F1Z2VNb2R1bGUgfSBmcm9tICdAZGVsb24vY2hhcnQvZ2F1Z2UnO1xuaW1wb3J0IHsgRzJNaW5pQXJlYU1vZHVsZSB9IGZyb20gJ0BkZWxvbi9jaGFydC9taW5pLWFyZWEnO1xuaW1wb3J0IHsgRzJNaW5pQmFyTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2NoYXJ0L21pbmktYmFyJztcbmltcG9ydCB7IEcyTWluaVByb2dyZXNzTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2NoYXJ0L21pbmktcHJvZ3Jlc3MnO1xuaW1wb3J0IHsgTnVtYmVySW5mb01vZHVsZSB9IGZyb20gJ0BkZWxvbi9jaGFydC9udW1iZXItaW5mbyc7XG5pbXBvcnQgeyBHMlBpZU1vZHVsZSB9IGZyb20gJ0BkZWxvbi9jaGFydC9waWUnO1xuaW1wb3J0IHsgRzJSYWRhck1vZHVsZSB9IGZyb20gJ0BkZWxvbi9jaGFydC9yYWRhcic7XG5pbXBvcnQgeyBHMlNpbmdsZUJhck1vZHVsZSB9IGZyb20gJ0BkZWxvbi9jaGFydC9zaW5nbGUtYmFyJztcbmltcG9ydCB7IEcyVGFnQ2xvdWRNb2R1bGUgfSBmcm9tICdAZGVsb24vY2hhcnQvdGFnLWNsb3VkJztcbmltcG9ydCB7IEcyVGltZWxpbmVNb2R1bGUgfSBmcm9tICdAZGVsb24vY2hhcnQvdGltZWxpbmUnO1xuaW1wb3J0IHsgVHJlbmRNb2R1bGUgfSBmcm9tICdAZGVsb24vY2hhcnQvdHJlbmQnO1xuaW1wb3J0IHsgRzJXYXRlcldhdmVNb2R1bGUgfSBmcm9tICdAZGVsb24vY2hhcnQvd2F0ZXItd2F2ZSc7XG5cbmNvbnN0IE1PRFVMRVMgPSBbXG4gIEcyQmFyTW9kdWxlLFxuICBHMkNhcmRNb2R1bGUsXG4gIEcyQ3VzdG9tTW9kdWxlLFxuICBHMkdhdWdlTW9kdWxlLFxuICBHMk1pbmlBcmVhTW9kdWxlLFxuICBHMk1pbmlCYXJNb2R1bGUsXG4gIEcyTWluaVByb2dyZXNzTW9kdWxlLFxuICBHMlBpZU1vZHVsZSxcbiAgRzJSYWRhck1vZHVsZSxcbiAgRzJUYWdDbG91ZE1vZHVsZSxcbiAgRzJUaW1lbGluZU1vZHVsZSxcbiAgRzJXYXRlcldhdmVNb2R1bGUsXG4gIEcyU2luZ2xlQmFyTW9kdWxlLFxuICBOdW1iZXJJbmZvTW9kdWxlLFxuICBUcmVuZE1vZHVsZSxcbl07XG5cbi8vICNlbmRyZWdpb25cblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBVc2Ugc2Vjb25kYXJ5IGVudHJ5IGVnOiBgaW1wb3J0IHsgRzJCYXJNb2R1bGUgfSBmcm9tICdAZGVsb24vY2hhcnQvYmFyJztgLlxuICovXG5ATmdNb2R1bGUoeyBleHBvcnRzOiBNT0RVTEVTIH0pXG5leHBvcnQgY2xhc3MgRGVsb25DaGFydE1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHdhcm5EZXByZWNhdGlvbihcbiAgICAgIFwiVGhlIGBEZWxvbkNoYXJ0TW9kdWxlYCBoYXMgYmVlbiBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gMTIuMC4wLiBQbGVhc2UgdXNlIHNlY29uZGFyeSBlbnRyeSBpbnN0ZWFkLlxcbmUuZy4gYGltcG9ydCB7IEcyQmFyTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2NoYXJ0L2Jhcic7YFwiLFxuICAgICk7XG4gIH1cbn1cbiJdfQ==