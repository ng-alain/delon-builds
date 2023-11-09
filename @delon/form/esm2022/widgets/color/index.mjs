import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DelonFormModule } from '@delon/form';
import { NzColorPickerModule } from 'ng-zorro-antd/color-picker';
import { ColorWidget } from './widget';
import * as i0 from "@angular/core";
import * as i1 from "@delon/form";
export * from './widget';
export * from './schema';
export class ColorWidgetModule {
    constructor(widgetRegistry) {
        widgetRegistry.register(ColorWidget.KEY, ColorWidget);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ColorWidgetModule, deps: [{ token: i1.WidgetRegistry }], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: ColorWidgetModule, declarations: [ColorWidget], imports: [FormsModule, CommonModule, DelonFormModule, NzColorPickerModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ColorWidgetModule, imports: [FormsModule, CommonModule, DelonFormModule, NzColorPickerModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ColorWidgetModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [FormsModule, CommonModule, DelonFormModule, NzColorPickerModule],
                    declarations: [ColorWidget]
                }]
        }], ctorParameters: function () { return [{ type: i1.WidgetRegistry }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3dpZGdldHMvY29sb3IvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxlQUFlLEVBQWtCLE1BQU0sYUFBYSxDQUFDO0FBQzlELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRWpFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxVQUFVLENBQUM7OztBQUV2QyxjQUFjLFVBQVUsQ0FBQztBQUN6QixjQUFjLFVBQVUsQ0FBQztBQU16QixNQUFNLE9BQU8saUJBQWlCO0lBQzVCLFlBQVksY0FBOEI7UUFDeEMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3hELENBQUM7K0dBSFUsaUJBQWlCO2dIQUFqQixpQkFBaUIsaUJBRmIsV0FBVyxhQURoQixXQUFXLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxtQkFBbUI7Z0hBRzlELGlCQUFpQixZQUhsQixXQUFXLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxtQkFBbUI7OzRGQUc5RCxpQkFBaUI7a0JBSjdCLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsV0FBVyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsbUJBQW1CLENBQUM7b0JBQzFFLFlBQVksRUFBRSxDQUFDLFdBQVcsQ0FBQztpQkFDNUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBEZWxvbkZvcm1Nb2R1bGUsIFdpZGdldFJlZ2lzdHJ5IH0gZnJvbSAnQGRlbG9uL2Zvcm0nO1xuaW1wb3J0IHsgTnpDb2xvclBpY2tlck1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29sb3ItcGlja2VyJztcblxuaW1wb3J0IHsgQ29sb3JXaWRnZXQgfSBmcm9tICcuL3dpZGdldCc7XG5cbmV4cG9ydCAqIGZyb20gJy4vd2lkZ2V0JztcbmV4cG9ydCAqIGZyb20gJy4vc2NoZW1hJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0Zvcm1zTW9kdWxlLCBDb21tb25Nb2R1bGUsIERlbG9uRm9ybU1vZHVsZSwgTnpDb2xvclBpY2tlck1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW0NvbG9yV2lkZ2V0XVxufSlcbmV4cG9ydCBjbGFzcyBDb2xvcldpZGdldE1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKHdpZGdldFJlZ2lzdHJ5OiBXaWRnZXRSZWdpc3RyeSkge1xuICAgIHdpZGdldFJlZ2lzdHJ5LnJlZ2lzdGVyKENvbG9yV2lkZ2V0LktFWSwgQ29sb3JXaWRnZXQpO1xuICB9XG59XG4iXX0=