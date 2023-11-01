import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DelonFormModule } from '@delon/form';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { TimeWidget } from './widget';
import * as i0 from "@angular/core";
import * as i1 from "@delon/form";
export * from './widget';
export * from './schema';
export class TimeWidgetModule {
    constructor(widgetRegistry) {
        widgetRegistry.register(TimeWidget.KEY, TimeWidget);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: TimeWidgetModule, deps: [{ token: i1.WidgetRegistry }], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.11", ngImport: i0, type: TimeWidgetModule, declarations: [TimeWidget], imports: [FormsModule, DelonFormModule, NzTimePickerModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: TimeWidgetModule, imports: [FormsModule, DelonFormModule, NzTimePickerModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: TimeWidgetModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [FormsModule, DelonFormModule, NzTimePickerModule],
                    declarations: [TimeWidget]
                }]
        }], ctorParameters: function () { return [{ type: i1.WidgetRegistry }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3dpZGdldHMvdGltZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsZUFBZSxFQUFrQixNQUFNLGFBQWEsQ0FBQztBQUM5RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUUvRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sVUFBVSxDQUFDOzs7QUFFdEMsY0FBYyxVQUFVLENBQUM7QUFDekIsY0FBYyxVQUFVLENBQUM7QUFNekIsTUFBTSxPQUFPLGdCQUFnQjtJQUMzQixZQUFZLGNBQThCO1FBQ3hDLGNBQWMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUN0RCxDQUFDOytHQUhVLGdCQUFnQjtnSEFBaEIsZ0JBQWdCLGlCQUZaLFVBQVUsYUFEZixXQUFXLEVBQUUsZUFBZSxFQUFFLGtCQUFrQjtnSEFHL0MsZ0JBQWdCLFlBSGpCLFdBQVcsRUFBRSxlQUFlLEVBQUUsa0JBQWtCOzs0RkFHL0MsZ0JBQWdCO2tCQUo1QixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFdBQVcsRUFBRSxlQUFlLEVBQUUsa0JBQWtCLENBQUM7b0JBQzNELFlBQVksRUFBRSxDQUFDLFVBQVUsQ0FBQztpQkFDM0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IERlbG9uRm9ybU1vZHVsZSwgV2lkZ2V0UmVnaXN0cnkgfSBmcm9tICdAZGVsb24vZm9ybSc7XG5pbXBvcnQgeyBOelRpbWVQaWNrZXJNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3RpbWUtcGlja2VyJztcblxuaW1wb3J0IHsgVGltZVdpZGdldCB9IGZyb20gJy4vd2lkZ2V0JztcblxuZXhwb3J0ICogZnJvbSAnLi93aWRnZXQnO1xuZXhwb3J0ICogZnJvbSAnLi9zY2hlbWEnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbRm9ybXNNb2R1bGUsIERlbG9uRm9ybU1vZHVsZSwgTnpUaW1lUGlja2VyTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbVGltZVdpZGdldF1cbn0pXG5leHBvcnQgY2xhc3MgVGltZVdpZGdldE1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKHdpZGdldFJlZ2lzdHJ5OiBXaWRnZXRSZWdpc3RyeSkge1xuICAgIHdpZGdldFJlZ2lzdHJ5LnJlZ2lzdGVyKFRpbWVXaWRnZXQuS0VZLCBUaW1lV2lkZ2V0KTtcbiAgfVxufVxuIl19