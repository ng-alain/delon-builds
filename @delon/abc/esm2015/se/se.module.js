import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { SEContainerComponent } from './se-container.component';
import { SETitleComponent } from './se-title.component';
import { SEComponent } from './se.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/core/outlet";
const COMPONENTS = [SEContainerComponent, SEComponent, SETitleComponent];
export class SEModule {
}
/** @nocollapse */ SEModule.ɵmod = i0.ɵɵdefineNgModule({ type: SEModule });
/** @nocollapse */ SEModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SEModule_Factory(t) { return new (t || SEModule)(); }, imports: [[CommonModule, NzToolTipModule, NzIconModule, NzOutletModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SEModule, { declarations: [SEContainerComponent, SEComponent, SETitleComponent], imports: [CommonModule, NzToolTipModule, NzIconModule, NzOutletModule], exports: [SEContainerComponent, SEComponent, SETitleComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SEModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, NzToolTipModule, NzIconModule, NzOutletModule],
                declarations: COMPONENTS,
                exports: COMPONENTS,
            }]
    }], null, null); })();
i0.ɵɵsetComponentScope(SEContainerComponent, [i1.NgIf, SETitleComponent, i2.NzStringTemplateOutletDirective], []);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2UubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3NlL3NlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFFN0MsTUFBTSxVQUFVLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztBQU96RSxNQUFNLE9BQU8sUUFBUTs7K0RBQVIsUUFBUTtrSEFBUixRQUFRLGtCQUpWLENBQUMsWUFBWSxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsY0FBYyxDQUFDO3dGQUkzRCxRQUFRLG1CQVBELG9CQUFvQixFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsYUFHM0QsWUFBWSxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsY0FBYyxhQUhuRCxvQkFBb0IsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCO3VGQU8xRCxRQUFRO2NBTHBCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxjQUFjLENBQUM7Z0JBQ3RFLFlBQVksRUFBRSxVQUFVO2dCQUN4QixPQUFPLEVBQUUsVUFBVTthQUNwQjs7dUJBTm1CLG9CQUFvQixZQUFlLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpPdXRsZXRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvb3V0bGV0JztcbmltcG9ydCB7IE56SWNvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaWNvbic7XG5pbXBvcnQgeyBOelRvb2xUaXBNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3Rvb2x0aXAnO1xuaW1wb3J0IHsgU0VDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL3NlLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU0VUaXRsZUNvbXBvbmVudCB9IGZyb20gJy4vc2UtdGl0bGUuY29tcG9uZW50JztcbmltcG9ydCB7IFNFQ29tcG9uZW50IH0gZnJvbSAnLi9zZS5jb21wb25lbnQnO1xuXG5jb25zdCBDT01QT05FTlRTID0gW1NFQ29udGFpbmVyQ29tcG9uZW50LCBTRUNvbXBvbmVudCwgU0VUaXRsZUNvbXBvbmVudF07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE56VG9vbFRpcE1vZHVsZSwgTnpJY29uTW9kdWxlLCBOek91dGxldE1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogQ09NUE9ORU5UUyxcbiAgZXhwb3J0czogQ09NUE9ORU5UUyxcbn0pXG5leHBvcnQgY2xhc3MgU0VNb2R1bGUge31cbiJdfQ==