import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DelonFormModule } from '@delon/form';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { SliderWidget } from './widget';
import * as i0 from "@angular/core";
import * as i1 from "@delon/form";
export * from './widget';
export * from './schema';
export class SliderWidgetModule {
    constructor(widgetRegistry) {
        widgetRegistry.register(SliderWidget.KEY, SliderWidget);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.1", ngImport: i0, type: SliderWidgetModule, deps: [{ token: i1.WidgetRegistry }], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.0.1", ngImport: i0, type: SliderWidgetModule, declarations: [SliderWidget], imports: [FormsModule, DelonFormModule, NzSliderModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.0.1", ngImport: i0, type: SliderWidgetModule, imports: [FormsModule, DelonFormModule, NzSliderModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.1", ngImport: i0, type: SliderWidgetModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [FormsModule, DelonFormModule, NzSliderModule],
                    declarations: [SliderWidget]
                }]
        }], ctorParameters: () => [{ type: i1.WidgetRegistry }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3dpZGdldHMvc2xpZGVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxlQUFlLEVBQWtCLE1BQU0sYUFBYSxDQUFDO0FBQzlELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sVUFBVSxDQUFDOzs7QUFFeEMsY0FBYyxVQUFVLENBQUM7QUFDekIsY0FBYyxVQUFVLENBQUM7QUFNekIsTUFBTSxPQUFPLGtCQUFrQjtJQUM3QixZQUFZLGNBQThCO1FBQ3hDLGNBQWMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUMxRCxDQUFDOzhHQUhVLGtCQUFrQjsrR0FBbEIsa0JBQWtCLGlCQUZkLFlBQVksYUFEakIsV0FBVyxFQUFFLGVBQWUsRUFBRSxjQUFjOytHQUczQyxrQkFBa0IsWUFIbkIsV0FBVyxFQUFFLGVBQWUsRUFBRSxjQUFjOzsyRkFHM0Msa0JBQWtCO2tCQUo5QixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFdBQVcsRUFBRSxlQUFlLEVBQUUsY0FBYyxDQUFDO29CQUN2RCxZQUFZLEVBQUUsQ0FBQyxZQUFZLENBQUM7aUJBQzdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBEZWxvbkZvcm1Nb2R1bGUsIFdpZGdldFJlZ2lzdHJ5IH0gZnJvbSAnQGRlbG9uL2Zvcm0nO1xuaW1wb3J0IHsgTnpTbGlkZXJNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3NsaWRlcic7XG5cbmltcG9ydCB7IFNsaWRlcldpZGdldCB9IGZyb20gJy4vd2lkZ2V0JztcblxuZXhwb3J0ICogZnJvbSAnLi93aWRnZXQnO1xuZXhwb3J0ICogZnJvbSAnLi9zY2hlbWEnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbRm9ybXNNb2R1bGUsIERlbG9uRm9ybU1vZHVsZSwgTnpTbGlkZXJNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtTbGlkZXJXaWRnZXRdXG59KVxuZXhwb3J0IGNsYXNzIFNsaWRlcldpZGdldE1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKHdpZGdldFJlZ2lzdHJ5OiBXaWRnZXRSZWdpc3RyeSkge1xuICAgIHdpZGdldFJlZ2lzdHJ5LnJlZ2lzdGVyKFNsaWRlcldpZGdldC5LRVksIFNsaWRlcldpZGdldCk7XG4gIH1cbn1cbiJdfQ==