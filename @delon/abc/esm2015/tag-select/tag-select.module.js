import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DelonLocaleModule } from '@delon/theme';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { TagSelectComponent } from './tag-select.component';
import * as i0 from "@angular/core";
const COMPONENTS = [TagSelectComponent];
export class TagSelectModule {
}
/** @nocollapse */ TagSelectModule.ɵmod = i0.ɵɵdefineNgModule({ type: TagSelectModule });
/** @nocollapse */ TagSelectModule.ɵinj = i0.ɵɵdefineInjector({ factory: function TagSelectModule_Factory(t) { return new (t || TagSelectModule)(); }, imports: [[CommonModule, NzIconModule, DelonLocaleModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TagSelectModule, { declarations: [TagSelectComponent], imports: [CommonModule, NzIconModule, DelonLocaleModule], exports: [TagSelectComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TagSelectModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, NzIconModule, DelonLocaleModule],
                declarations: COMPONENTS,
                exports: COMPONENTS,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLXNlbGVjdC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvdGFnLXNlbGVjdC90YWctc2VsZWN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDakQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQUU1RCxNQUFNLFVBQVUsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFPeEMsTUFBTSxPQUFPLGVBQWU7O3NFQUFmLGVBQWU7Z0lBQWYsZUFBZSxrQkFKakIsQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixDQUFDO3dGQUk3QyxlQUFlLG1CQVBSLGtCQUFrQixhQUcxQixZQUFZLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixhQUhyQyxrQkFBa0I7dUZBT3pCLGVBQWU7Y0FMM0IsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsaUJBQWlCLENBQUM7Z0JBQ3hELFlBQVksRUFBRSxVQUFVO2dCQUN4QixPQUFPLEVBQUUsVUFBVTthQUNwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGVsb25Mb2NhbGVNb2R1bGUgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgTnpJY29uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcbmltcG9ydCB7IFRhZ1NlbGVjdENvbXBvbmVudCB9IGZyb20gJy4vdGFnLXNlbGVjdC5jb21wb25lbnQnO1xuXG5jb25zdCBDT01QT05FTlRTID0gW1RhZ1NlbGVjdENvbXBvbmVudF07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE56SWNvbk1vZHVsZSwgRGVsb25Mb2NhbGVNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IENPTVBPTkVOVFMsXG4gIGV4cG9ydHM6IENPTVBPTkVOVFMsXG59KVxuZXhwb3J0IGNsYXNzIFRhZ1NlbGVjdE1vZHVsZSB7fVxuIl19