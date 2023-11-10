import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DelonFormModule } from '@delon/form';
import { NzSegmentedModule } from 'ng-zorro-antd/segmented';
import { SegmentedWidget } from './widget';
import * as i0 from "@angular/core";
import * as i1 from "@delon/form";
export * from './widget';
export * from './schema';
export class SegmentedWidgetModule {
    constructor(widgetRegistry) {
        widgetRegistry.register(SegmentedWidget.KEY, SegmentedWidget);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: SegmentedWidgetModule, deps: [{ token: i1.WidgetRegistry }], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.0.2", ngImport: i0, type: SegmentedWidgetModule, declarations: [SegmentedWidget], imports: [FormsModule, DelonFormModule, NzSegmentedModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: SegmentedWidgetModule, imports: [FormsModule, DelonFormModule, NzSegmentedModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: SegmentedWidgetModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [FormsModule, DelonFormModule, NzSegmentedModule],
                    declarations: [SegmentedWidget]
                }]
        }], ctorParameters: () => [{ type: i1.WidgetRegistry }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3dpZGdldHMvc2VnbWVudGVkL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxlQUFlLEVBQWtCLE1BQU0sYUFBYSxDQUFDO0FBQzlELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRTVELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxVQUFVLENBQUM7OztBQUUzQyxjQUFjLFVBQVUsQ0FBQztBQUN6QixjQUFjLFVBQVUsQ0FBQztBQU16QixNQUFNLE9BQU8scUJBQXFCO0lBQ2hDLFlBQVksY0FBOEI7UUFDeEMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsR0FBRyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7OEdBSFUscUJBQXFCOytHQUFyQixxQkFBcUIsaUJBRmpCLGVBQWUsYUFEcEIsV0FBVyxFQUFFLGVBQWUsRUFBRSxpQkFBaUI7K0dBRzlDLHFCQUFxQixZQUh0QixXQUFXLEVBQUUsZUFBZSxFQUFFLGlCQUFpQjs7MkZBRzlDLHFCQUFxQjtrQkFKakMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUUsZUFBZSxFQUFFLGlCQUFpQixDQUFDO29CQUMxRCxZQUFZLEVBQUUsQ0FBQyxlQUFlLENBQUM7aUJBQ2hDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBEZWxvbkZvcm1Nb2R1bGUsIFdpZGdldFJlZ2lzdHJ5IH0gZnJvbSAnQGRlbG9uL2Zvcm0nO1xuaW1wb3J0IHsgTnpTZWdtZW50ZWRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3NlZ21lbnRlZCc7XG5cbmltcG9ydCB7IFNlZ21lbnRlZFdpZGdldCB9IGZyb20gJy4vd2lkZ2V0JztcblxuZXhwb3J0ICogZnJvbSAnLi93aWRnZXQnO1xuZXhwb3J0ICogZnJvbSAnLi9zY2hlbWEnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbRm9ybXNNb2R1bGUsIERlbG9uRm9ybU1vZHVsZSwgTnpTZWdtZW50ZWRNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtTZWdtZW50ZWRXaWRnZXRdXG59KVxuZXhwb3J0IGNsYXNzIFNlZ21lbnRlZFdpZGdldE1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKHdpZGdldFJlZ2lzdHJ5OiBXaWRnZXRSZWdpc3RyeSkge1xuICAgIHdpZGdldFJlZ2lzdHJ5LnJlZ2lzdGVyKFNlZ21lbnRlZFdpZGdldC5LRVksIFNlZ21lbnRlZFdpZGdldCk7XG4gIH1cbn1cbiJdfQ==