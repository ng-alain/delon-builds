import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ResultComponent } from './result.component';
import * as i0 from "@angular/core";
const COMPONENTS = [ResultComponent];
export class ResultModule {
}
/** @nocollapse */ ResultModule.ɵmod = i0.ɵɵdefineNgModule({ type: ResultModule });
/** @nocollapse */ ResultModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ResultModule_Factory(t) { return new (t || ResultModule)(); }, imports: [[CommonModule, NzIconModule, NzOutletModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ResultModule, { declarations: [ResultComponent], imports: [CommonModule, NzIconModule, NzOutletModule], exports: [ResultComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ResultModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, NzIconModule, NzOutletModule],
                declarations: COMPONENTS,
                exports: COMPONENTS,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdWx0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9yZXN1bHQvcmVzdWx0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7QUFFckQsTUFBTSxVQUFVLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQU9yQyxNQUFNLE9BQU8sWUFBWTs7bUVBQVosWUFBWTswSEFBWixZQUFZLGtCQUpkLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxjQUFjLENBQUM7d0ZBSTFDLFlBQVksbUJBUEwsZUFBZSxhQUd2QixZQUFZLEVBQUUsWUFBWSxFQUFFLGNBQWMsYUFIbEMsZUFBZTt1RkFPdEIsWUFBWTtjQUx4QixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxjQUFjLENBQUM7Z0JBQ3JELFlBQVksRUFBRSxVQUFVO2dCQUN4QixPQUFPLEVBQUUsVUFBVTthQUNwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpPdXRsZXRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvb3V0bGV0JztcbmltcG9ydCB7IE56SWNvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaWNvbic7XG5pbXBvcnQgeyBSZXN1bHRDb21wb25lbnQgfSBmcm9tICcuL3Jlc3VsdC5jb21wb25lbnQnO1xuXG5jb25zdCBDT01QT05FTlRTID0gW1Jlc3VsdENvbXBvbmVudF07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE56SWNvbk1vZHVsZSwgTnpPdXRsZXRNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IENPTVBPTkVOVFMsXG4gIGV4cG9ydHM6IENPTVBPTkVOVFMsXG59KVxuZXhwb3J0IGNsYXNzIFJlc3VsdE1vZHVsZSB7fVxuIl19