import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DelonFormModule } from '@delon/form';
import { NzSegmentedModule } from 'ng-zorro-antd/segmented';
import { SegmentedWidget } from './widget';
import * as i0 from "@angular/core";
import * as i1 from "@delon/form";
export class SegmentedWidgetModule {
    constructor(widgetRegistry) {
        widgetRegistry.register(SegmentedWidget.KEY, SegmentedWidget);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SegmentedWidgetModule, deps: [{ token: i1.WidgetRegistry }], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.0.4", ngImport: i0, type: SegmentedWidgetModule, imports: [FormsModule, DelonFormModule, NzSegmentedModule, SegmentedWidget] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SegmentedWidgetModule, imports: [FormsModule, DelonFormModule, NzSegmentedModule, SegmentedWidget] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SegmentedWidgetModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [FormsModule, DelonFormModule, NzSegmentedModule, SegmentedWidget]
                }]
        }], ctorParameters: () => [{ type: i1.WidgetRegistry }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS93aWRnZXRzL3NlZ21lbnRlZC9tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLGVBQWUsRUFBa0IsTUFBTSxhQUFhLENBQUM7QUFDOUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFNUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFVBQVUsQ0FBQzs7O0FBSzNDLE1BQU0sT0FBTyxxQkFBcUI7SUFDaEMsWUFBWSxjQUE4QjtRQUN4QyxjQUFjLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxHQUFHLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDaEUsQ0FBQzs4R0FIVSxxQkFBcUI7K0dBQXJCLHFCQUFxQixZQUZ0QixXQUFXLEVBQUUsZUFBZSxFQUFFLGlCQUFpQixFQUFFLGVBQWU7K0dBRS9ELHFCQUFxQixZQUZ0QixXQUFXLEVBQUUsZUFBZSxFQUFFLGlCQUFpQixFQUFFLGVBQWU7OzJGQUUvRCxxQkFBcUI7a0JBSGpDLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsV0FBVyxFQUFFLGVBQWUsRUFBRSxpQkFBaUIsRUFBRSxlQUFlLENBQUM7aUJBQzVFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBEZWxvbkZvcm1Nb2R1bGUsIFdpZGdldFJlZ2lzdHJ5IH0gZnJvbSAnQGRlbG9uL2Zvcm0nO1xuaW1wb3J0IHsgTnpTZWdtZW50ZWRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3NlZ21lbnRlZCc7XG5cbmltcG9ydCB7IFNlZ21lbnRlZFdpZGdldCB9IGZyb20gJy4vd2lkZ2V0JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0Zvcm1zTW9kdWxlLCBEZWxvbkZvcm1Nb2R1bGUsIE56U2VnbWVudGVkTW9kdWxlLCBTZWdtZW50ZWRXaWRnZXRdXG59KVxuZXhwb3J0IGNsYXNzIFNlZ21lbnRlZFdpZGdldE1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKHdpZGdldFJlZ2lzdHJ5OiBXaWRnZXRSZWdpc3RyeSkge1xuICAgIHdpZGdldFJlZ2lzdHJ5LnJlZ2lzdGVyKFNlZ21lbnRlZFdpZGdldC5LRVksIFNlZ21lbnRlZFdpZGdldCk7XG4gIH1cbn1cbiJdfQ==