import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CountdownModule } from 'ngx-countdown';
import { CountDownComponent } from './count-down.component';
import * as i0 from "@angular/core";
const COMPONENTS = [CountDownComponent];
export class CountDownModule {
}
/** @nocollapse */ CountDownModule.ɵmod = i0.ɵɵdefineNgModule({ type: CountDownModule });
/** @nocollapse */ CountDownModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CountDownModule_Factory(t) { return new (t || CountDownModule)(); }, imports: [[CommonModule, CountdownModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CountDownModule, { declarations: [CountDownComponent], imports: [CommonModule, CountdownModule], exports: [CountDownComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CountDownModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, CountdownModule],
                declarations: [...COMPONENTS],
                exports: [...COMPONENTS],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnQtZG93bi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvY291bnQtZG93bi9jb3VudC1kb3duLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWhELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQUU1RCxNQUFNLFVBQVUsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFPeEMsTUFBTSxPQUFPLGVBQWU7O3NFQUFmLGVBQWU7Z0lBQWYsZUFBZSxrQkFKakIsQ0FBQyxZQUFZLEVBQUUsZUFBZSxDQUFDO3dGQUk3QixlQUFlLG1CQVBSLGtCQUFrQixhQUcxQixZQUFZLEVBQUUsZUFBZSxhQUhyQixrQkFBa0I7dUZBT3pCLGVBQWU7Y0FMM0IsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxlQUFlLENBQUM7Z0JBQ3hDLFlBQVksRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDO2dCQUM3QixPQUFPLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQzthQUN6QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ291bnRkb3duTW9kdWxlIH0gZnJvbSAnbmd4LWNvdW50ZG93bic7XG5cbmltcG9ydCB7IENvdW50RG93bkNvbXBvbmVudCB9IGZyb20gJy4vY291bnQtZG93bi5jb21wb25lbnQnO1xuXG5jb25zdCBDT01QT05FTlRTID0gW0NvdW50RG93bkNvbXBvbmVudF07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIENvdW50ZG93bk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogWy4uLkNPTVBPTkVOVFNdLFxuICBleHBvcnRzOiBbLi4uQ09NUE9ORU5UU10sXG59KVxuZXhwb3J0IGNsYXNzIENvdW50RG93bk1vZHVsZSB7fVxuIl19