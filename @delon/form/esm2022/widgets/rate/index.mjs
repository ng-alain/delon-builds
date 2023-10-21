import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DelonFormModule } from '@delon/form';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { RateWidget } from './widget';
import * as i0 from "@angular/core";
import * as i1 from "@delon/form";
export * from './widget';
export * from './schema';
export class RateWidgetModule {
    constructor(widgetRegistry) {
        widgetRegistry.register(RateWidget.KEY, RateWidget);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: RateWidgetModule, deps: [{ token: i1.WidgetRegistry }], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.10", ngImport: i0, type: RateWidgetModule, declarations: [RateWidget], imports: [FormsModule, DelonFormModule, NzRateModule, CommonModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: RateWidgetModule, imports: [FormsModule, DelonFormModule, NzRateModule, CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: RateWidgetModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [FormsModule, DelonFormModule, NzRateModule, CommonModule],
                    declarations: [RateWidget]
                }]
        }], ctorParameters: function () { return [{ type: i1.WidgetRegistry }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3dpZGdldHMvcmF0ZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLGVBQWUsRUFBa0IsTUFBTSxhQUFhLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxVQUFVLENBQUM7OztBQUV0QyxjQUFjLFVBQVUsQ0FBQztBQUN6QixjQUFjLFVBQVUsQ0FBQztBQU16QixNQUFNLE9BQU8sZ0JBQWdCO0lBQzNCLFlBQVksY0FBOEI7UUFDeEMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ3RELENBQUM7K0dBSFUsZ0JBQWdCO2dIQUFoQixnQkFBZ0IsaUJBRlosVUFBVSxhQURmLFdBQVcsRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLFlBQVk7Z0hBR3ZELGdCQUFnQixZQUhqQixXQUFXLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxZQUFZOzs0RkFHdkQsZ0JBQWdCO2tCQUo1QixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFdBQVcsRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLFlBQVksQ0FBQztvQkFDbkUsWUFBWSxFQUFFLENBQUMsVUFBVSxDQUFDO2lCQUMzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IERlbG9uRm9ybU1vZHVsZSwgV2lkZ2V0UmVnaXN0cnkgfSBmcm9tICdAZGVsb24vZm9ybSc7XG5pbXBvcnQgeyBOelJhdGVNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3JhdGUnO1xuXG5pbXBvcnQgeyBSYXRlV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXQnO1xuXG5leHBvcnQgKiBmcm9tICcuL3dpZGdldCc7XG5leHBvcnQgKiBmcm9tICcuL3NjaGVtYSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtGb3Jtc01vZHVsZSwgRGVsb25Gb3JtTW9kdWxlLCBOelJhdGVNb2R1bGUsIENvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1JhdGVXaWRnZXRdXG59KVxuZXhwb3J0IGNsYXNzIFJhdGVXaWRnZXRNb2R1bGUge1xuICBjb25zdHJ1Y3Rvcih3aWRnZXRSZWdpc3RyeTogV2lkZ2V0UmVnaXN0cnkpIHtcbiAgICB3aWRnZXRSZWdpc3RyeS5yZWdpc3RlcihSYXRlV2lkZ2V0LktFWSwgUmF0ZVdpZGdldCk7XG4gIH1cbn1cbiJdfQ==