import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { LoadingDefaultComponent } from './loading.component';
import * as i0 from "@angular/core";
const COMPONENTS = [LoadingDefaultComponent];
export class LoadingModule {
}
/** @nocollapse */ LoadingModule.ɵmod = i0.ɵɵdefineNgModule({ type: LoadingModule });
/** @nocollapse */ LoadingModule.ɵinj = i0.ɵɵdefineInjector({ factory: function LoadingModule_Factory(t) { return new (t || LoadingModule)(); }, imports: [[CommonModule, OverlayModule, PortalModule, NzIconModule, NzSpinModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(LoadingModule, { declarations: [LoadingDefaultComponent], imports: [CommonModule, OverlayModule, PortalModule, NzIconModule, NzSpinModule], exports: [LoadingDefaultComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoadingModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, OverlayModule, PortalModule, NzIconModule, NzSpinModule],
                declarations: COMPONENTS,
                entryComponents: COMPONENTS,
                exports: COMPONENTS,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvbG9hZGluZy9sb2FkaW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBRTlELE1BQU0sVUFBVSxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQVE3QyxNQUFNLE9BQU8sYUFBYTs7b0VBQWIsYUFBYTs0SEFBYixhQUFhLGtCQUxmLENBQUMsWUFBWSxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFlBQVksQ0FBQzt3RkFLckUsYUFBYSxtQkFSTix1QkFBdUIsYUFHL0IsWUFBWSxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFlBQVksYUFIN0QsdUJBQXVCO3VGQVE5QixhQUFhO2NBTnpCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsWUFBWSxDQUFDO2dCQUNoRixZQUFZLEVBQUUsVUFBVTtnQkFDeEIsZUFBZSxFQUFFLFVBQVU7Z0JBQzNCLE9BQU8sRUFBRSxVQUFVO2FBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IFBvcnRhbE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOekljb25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2ljb24nO1xuaW1wb3J0IHsgTnpTcGluTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9zcGluJztcbmltcG9ydCB7IExvYWRpbmdEZWZhdWx0Q29tcG9uZW50IH0gZnJvbSAnLi9sb2FkaW5nLmNvbXBvbmVudCc7XG5cbmNvbnN0IENPTVBPTkVOVFMgPSBbTG9hZGluZ0RlZmF1bHRDb21wb25lbnRdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBPdmVybGF5TW9kdWxlLCBQb3J0YWxNb2R1bGUsIE56SWNvbk1vZHVsZSwgTnpTcGluTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBDT01QT05FTlRTLFxuICBlbnRyeUNvbXBvbmVudHM6IENPTVBPTkVOVFMsXG4gIGV4cG9ydHM6IENPTVBPTkVOVFMsXG59KVxuZXhwb3J0IGNsYXNzIExvYWRpbmdNb2R1bGUge31cbiJdfQ==