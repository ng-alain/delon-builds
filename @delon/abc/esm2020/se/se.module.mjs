import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { SEContainerComponent, SETitleComponent } from './se-container.component';
import { SEComponent } from './se.component';
import * as i0 from "@angular/core";
const COMPONENTS = [SEContainerComponent, SEComponent, SETitleComponent];
export class SEModule {
}
SEModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: SEModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SEModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.6", ngImport: i0, type: SEModule, declarations: [SEContainerComponent, SEComponent, SETitleComponent], imports: [CommonModule, NzToolTipModule, NzIconModule, NzOutletModule], exports: [SEContainerComponent, SEComponent, SETitleComponent] });
SEModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: SEModule, imports: [CommonModule, NzToolTipModule, NzIconModule, NzOutletModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.6", ngImport: i0, type: SEModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, NzToolTipModule, NzIconModule, NzOutletModule],
                    declarations: COMPONENTS,
                    exports: COMPONENTS
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2UubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3NlL3NlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUV4RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBRTdDLE1BQU0sVUFBVSxHQUFHLENBQUMsb0JBQW9CLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixDQUFDLENBQUM7QUFPekUsTUFBTSxPQUFPLFFBQVE7O3FHQUFSLFFBQVE7c0dBQVIsUUFBUSxpQkFQRCxvQkFBb0IsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLGFBRzNELFlBQVksRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLGNBQWMsYUFIbkQsb0JBQW9CLEVBQUUsV0FBVyxFQUFFLGdCQUFnQjtzR0FPMUQsUUFBUSxZQUpULFlBQVksRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLGNBQWM7MkZBSTFELFFBQVE7a0JBTHBCLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsY0FBYyxDQUFDO29CQUN0RSxZQUFZLEVBQUUsVUFBVTtvQkFDeEIsT0FBTyxFQUFFLFVBQVU7aUJBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE56T3V0bGV0TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL291dGxldCc7XG5pbXBvcnQgeyBOekljb25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2ljb24nO1xuaW1wb3J0IHsgTnpUb29sVGlwTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC90b29sdGlwJztcblxuaW1wb3J0IHsgU0VDb250YWluZXJDb21wb25lbnQsIFNFVGl0bGVDb21wb25lbnQgfSBmcm9tICcuL3NlLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU0VDb21wb25lbnQgfSBmcm9tICcuL3NlLmNvbXBvbmVudCc7XG5cbmNvbnN0IENPTVBPTkVOVFMgPSBbU0VDb250YWluZXJDb21wb25lbnQsIFNFQ29tcG9uZW50LCBTRVRpdGxlQ29tcG9uZW50XTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTnpUb29sVGlwTW9kdWxlLCBOekljb25Nb2R1bGUsIE56T3V0bGV0TW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBDT01QT05FTlRTLFxuICBleHBvcnRzOiBDT01QT05FTlRTXG59KVxuZXhwb3J0IGNsYXNzIFNFTW9kdWxlIHt9XG4iXX0=