import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DelonFormModule } from '@delon/form';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { SliderWidget } from './widget';
import * as i0 from "@angular/core";
import * as i1 from "@delon/form";
export class SliderWidgetModule {
    constructor(widgetRegistry) {
        widgetRegistry.register(SliderWidget.KEY, SliderWidget);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.1", ngImport: i0, type: SliderWidgetModule, deps: [{ token: i1.WidgetRegistry }], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.1", ngImport: i0, type: SliderWidgetModule, imports: [FormsModule, DelonFormModule, NzSliderModule, SliderWidget] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.1", ngImport: i0, type: SliderWidgetModule, imports: [FormsModule, DelonFormModule, NzSliderModule, SliderWidget] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.1", ngImport: i0, type: SliderWidgetModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [FormsModule, DelonFormModule, NzSliderModule, SliderWidget]
                }]
        }], ctorParameters: () => [{ type: i1.WidgetRegistry }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS93aWRnZXRzL3NsaWRlci9tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLGVBQWUsRUFBa0IsTUFBTSxhQUFhLENBQUM7QUFDOUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXRELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxVQUFVLENBQUM7OztBQUt4QyxNQUFNLE9BQU8sa0JBQWtCO0lBQzdCLFlBQVksY0FBOEI7UUFDeEMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQzFELENBQUM7OEdBSFUsa0JBQWtCOytHQUFsQixrQkFBa0IsWUFGbkIsV0FBVyxFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsWUFBWTsrR0FFekQsa0JBQWtCLFlBRm5CLFdBQVcsRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLFlBQVk7OzJGQUV6RCxrQkFBa0I7a0JBSDlCLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsV0FBVyxFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsWUFBWSxDQUFDO2lCQUN0RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgRGVsb25Gb3JtTW9kdWxlLCBXaWRnZXRSZWdpc3RyeSB9IGZyb20gJ0BkZWxvbi9mb3JtJztcbmltcG9ydCB7IE56U2xpZGVyTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9zbGlkZXInO1xuXG5pbXBvcnQgeyBTbGlkZXJXaWRnZXQgfSBmcm9tICcuL3dpZGdldCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtGb3Jtc01vZHVsZSwgRGVsb25Gb3JtTW9kdWxlLCBOelNsaWRlck1vZHVsZSwgU2xpZGVyV2lkZ2V0XVxufSlcbmV4cG9ydCBjbGFzcyBTbGlkZXJXaWRnZXRNb2R1bGUge1xuICBjb25zdHJ1Y3Rvcih3aWRnZXRSZWdpc3RyeTogV2lkZ2V0UmVnaXN0cnkpIHtcbiAgICB3aWRnZXRSZWdpc3RyeS5yZWdpc3RlcihTbGlkZXJXaWRnZXQuS0VZLCBTbGlkZXJXaWRnZXQpO1xuICB9XG59XG4iXX0=