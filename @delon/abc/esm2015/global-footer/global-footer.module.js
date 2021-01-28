import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DelonUtilModule } from '@delon/util';
import { GlobalFooterItemComponent } from './global-footer-item.component';
import { GlobalFooterComponent } from './global-footer.component';
import * as i0 from "@angular/core";
const COMPONENTS = [GlobalFooterComponent, GlobalFooterItemComponent];
export class GlobalFooterModule {
}
/** @nocollapse */ GlobalFooterModule.ɵmod = i0.ɵɵdefineNgModule({ type: GlobalFooterModule });
/** @nocollapse */ GlobalFooterModule.ɵinj = i0.ɵɵdefineInjector({ factory: function GlobalFooterModule_Factory(t) { return new (t || GlobalFooterModule)(); }, imports: [[CommonModule, RouterModule, DelonUtilModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(GlobalFooterModule, { declarations: [GlobalFooterComponent, GlobalFooterItemComponent], imports: [CommonModule, RouterModule, DelonUtilModule], exports: [GlobalFooterComponent, GlobalFooterItemComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GlobalFooterModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, RouterModule, DelonUtilModule],
                declarations: [...COMPONENTS],
                exports: [...COMPONENTS],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLWZvb3Rlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvZ2xvYmFsLWZvb3Rlci9nbG9iYWwtZm9vdGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM5QyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7QUFFbEUsTUFBTSxVQUFVLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO0FBT3RFLE1BQU0sT0FBTyxrQkFBa0I7O3lFQUFsQixrQkFBa0I7c0lBQWxCLGtCQUFrQixrQkFKcEIsQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLGVBQWUsQ0FBQzt3RkFJM0Msa0JBQWtCLG1CQVBYLHFCQUFxQixFQUFFLHlCQUF5QixhQUd4RCxZQUFZLEVBQUUsWUFBWSxFQUFFLGVBQWUsYUFIbkMscUJBQXFCLEVBQUUseUJBQXlCO3VGQU92RCxrQkFBa0I7Y0FMOUIsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsZUFBZSxDQUFDO2dCQUN0RCxZQUFZLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQztnQkFDN0IsT0FBTyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUM7YUFDekIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBEZWxvblV0aWxNb2R1bGUgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBHbG9iYWxGb290ZXJJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9nbG9iYWwtZm9vdGVyLWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IEdsb2JhbEZvb3RlckNvbXBvbmVudCB9IGZyb20gJy4vZ2xvYmFsLWZvb3Rlci5jb21wb25lbnQnO1xuXG5jb25zdCBDT01QT05FTlRTID0gW0dsb2JhbEZvb3RlckNvbXBvbmVudCwgR2xvYmFsRm9vdGVySXRlbUNvbXBvbmVudF07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFJvdXRlck1vZHVsZSwgRGVsb25VdGlsTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbLi4uQ09NUE9ORU5UU10sXG4gIGV4cG9ydHM6IFsuLi5DT01QT05FTlRTXSxcbn0pXG5leHBvcnQgY2xhc3MgR2xvYmFsRm9vdGVyTW9kdWxlIHt9XG4iXX0=