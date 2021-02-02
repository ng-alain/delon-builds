import { ObserversModule } from '@angular/cdk/observers';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { SVContainerComponent } from './sv-container.component';
import { SVTitleComponent } from './sv-title.component';
import { SVValueComponent } from './sv-value.component';
import { SVComponent } from './sv.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/core/outlet";
const COMPONENTS = [SVContainerComponent, SVComponent, SVTitleComponent, SVValueComponent];
export class SVModule {
}
/** @nocollapse */ SVModule.ɵmod = i0.ɵɵdefineNgModule({ type: SVModule });
/** @nocollapse */ SVModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SVModule_Factory(t) { return new (t || SVModule)(); }, imports: [[CommonModule, ObserversModule, NzToolTipModule, NzIconModule, NzOutletModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SVModule, { declarations: [SVContainerComponent, SVComponent, SVTitleComponent, SVValueComponent], imports: [CommonModule, ObserversModule, NzToolTipModule, NzIconModule, NzOutletModule], exports: [SVContainerComponent, SVComponent, SVTitleComponent, SVValueComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SVModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, ObserversModule, NzToolTipModule, NzIconModule, NzOutletModule],
                declarations: COMPONENTS,
                exports: COMPONENTS,
            }]
    }], null, null); })();
i0.ɵɵsetComponentScope(SVContainerComponent, [i1.NgStyle, i1.NgIf, SVTitleComponent, i2.NzStringTemplateOutletDirective], []);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3YubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3N2L3N2Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDekQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDeEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBRTdDLE1BQU0sVUFBVSxHQUFHLENBQUMsb0JBQW9CLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixDQUFDLENBQUM7QUFPM0YsTUFBTSxPQUFPLFFBQVE7OytEQUFSLFFBQVE7a0hBQVIsUUFBUSxrQkFKVixDQUFDLFlBQVksRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxjQUFjLENBQUM7d0ZBSTVFLFFBQVEsbUJBUEQsb0JBQW9CLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixhQUc3RSxZQUFZLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsY0FBYyxhQUhwRSxvQkFBb0IsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsZ0JBQWdCO3VGQU81RSxRQUFRO2NBTHBCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsY0FBYyxDQUFDO2dCQUN2RixZQUFZLEVBQUUsVUFBVTtnQkFDeEIsT0FBTyxFQUFFLFVBQVU7YUFDcEI7O3VCQU5tQixvQkFBb0Isd0JBQWUsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2ZXJzTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL29ic2VydmVycyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56T3V0bGV0TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL291dGxldCc7XG5pbXBvcnQgeyBOekljb25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2ljb24nO1xuaW1wb3J0IHsgTnpUb29sVGlwTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC90b29sdGlwJztcbmltcG9ydCB7IFNWQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9zdi1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFNWVGl0bGVDb21wb25lbnQgfSBmcm9tICcuL3N2LXRpdGxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTVlZhbHVlQ29tcG9uZW50IH0gZnJvbSAnLi9zdi12YWx1ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU1ZDb21wb25lbnQgfSBmcm9tICcuL3N2LmNvbXBvbmVudCc7XG5cbmNvbnN0IENPTVBPTkVOVFMgPSBbU1ZDb250YWluZXJDb21wb25lbnQsIFNWQ29tcG9uZW50LCBTVlRpdGxlQ29tcG9uZW50LCBTVlZhbHVlQ29tcG9uZW50XTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgT2JzZXJ2ZXJzTW9kdWxlLCBOelRvb2xUaXBNb2R1bGUsIE56SWNvbk1vZHVsZSwgTnpPdXRsZXRNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IENPTVBPTkVOVFMsXG4gIGV4cG9ydHM6IENPTVBPTkVOVFMsXG59KVxuZXhwb3J0IGNsYXNzIFNWTW9kdWxlIHt9XG4iXX0=