import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { LayoutDefaultHeaderItemTriggerDirective } from './layout-header-item-trigger.directive';
import { LayoutDefaultHeaderItemComponent } from './layout-header-item.component';
import { LayoutDefaultHeaderComponent } from './layout-header.component';
import { LayoutDefaultNavComponent } from './layout-nav.component';
import { LayoutDefaultComponent } from './layout.component';
import * as i0 from "@angular/core";
const COMPONENTS = [
    LayoutDefaultComponent,
    LayoutDefaultNavComponent,
    LayoutDefaultHeaderComponent,
    LayoutDefaultHeaderItemComponent,
    LayoutDefaultHeaderItemTriggerDirective
];
export class LayoutDefaultModule {
}
LayoutDefaultModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: LayoutDefaultModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
LayoutDefaultModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.3", ngImport: i0, type: LayoutDefaultModule, declarations: [LayoutDefaultComponent,
        LayoutDefaultNavComponent,
        LayoutDefaultHeaderComponent,
        LayoutDefaultHeaderItemComponent,
        LayoutDefaultHeaderItemTriggerDirective], imports: [CommonModule,
        RouterModule,
        NzToolTipModule,
        NzIconModule,
        NzAvatarModule,
        NzDropDownModule,
        NzMessageModule,
        NzBadgeModule], exports: [LayoutDefaultComponent,
        LayoutDefaultNavComponent,
        LayoutDefaultHeaderComponent,
        LayoutDefaultHeaderItemComponent,
        LayoutDefaultHeaderItemTriggerDirective] });
LayoutDefaultModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: LayoutDefaultModule, imports: [CommonModule,
        RouterModule,
        NzToolTipModule,
        NzIconModule,
        NzAvatarModule,
        NzDropDownModule,
        NzMessageModule,
        NzBadgeModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.3", ngImport: i0, type: LayoutDefaultModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        RouterModule,
                        NzToolTipModule,
                        NzIconModule,
                        NzAvatarModule,
                        NzDropDownModule,
                        NzMessageModule,
                        NzBadgeModule
                    ],
                    declarations: COMPONENTS,
                    exports: COMPONENTS
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lL2xheW91dC1kZWZhdWx0L2xheW91dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFeEQsT0FBTyxFQUFFLHVDQUF1QyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDakcsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbEYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDbkUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBRTVELE1BQU0sVUFBVSxHQUFHO0lBQ2pCLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsNEJBQTRCO0lBQzVCLGdDQUFnQztJQUNoQyx1Q0FBdUM7Q0FDeEMsQ0FBQztBQWdCRixNQUFNLE9BQU8sbUJBQW1COztnSEFBbkIsbUJBQW1CO2lIQUFuQixtQkFBbUIsaUJBckI5QixzQkFBc0I7UUFDdEIseUJBQXlCO1FBQ3pCLDRCQUE0QjtRQUM1QixnQ0FBZ0M7UUFDaEMsdUNBQXVDLGFBS3JDLFlBQVk7UUFDWixZQUFZO1FBQ1osZUFBZTtRQUNmLFlBQVk7UUFDWixjQUFjO1FBQ2QsZ0JBQWdCO1FBQ2hCLGVBQWU7UUFDZixhQUFhLGFBaEJmLHNCQUFzQjtRQUN0Qix5QkFBeUI7UUFDekIsNEJBQTRCO1FBQzVCLGdDQUFnQztRQUNoQyx1Q0FBdUM7aUhBaUI1QixtQkFBbUIsWUFaNUIsWUFBWTtRQUNaLFlBQVk7UUFDWixlQUFlO1FBQ2YsWUFBWTtRQUNaLGNBQWM7UUFDZCxnQkFBZ0I7UUFDaEIsZUFBZTtRQUNmLGFBQWE7MkZBS0osbUJBQW1CO2tCQWQvQixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLFlBQVk7d0JBQ1osZUFBZTt3QkFDZixZQUFZO3dCQUNaLGNBQWM7d0JBQ2QsZ0JBQWdCO3dCQUNoQixlQUFlO3dCQUNmLGFBQWE7cUJBQ2Q7b0JBQ0QsWUFBWSxFQUFFLFVBQVU7b0JBQ3hCLE9BQU8sRUFBRSxVQUFVO2lCQUNwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgTnpBdmF0YXJNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2F2YXRhcic7XG5pbXBvcnQgeyBOekJhZGdlTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9iYWRnZSc7XG5pbXBvcnQgeyBOekRyb3BEb3duTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9kcm9wZG93bic7XG5pbXBvcnQgeyBOekljb25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2ljb24nO1xuaW1wb3J0IHsgTnpNZXNzYWdlTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9tZXNzYWdlJztcbmltcG9ydCB7IE56VG9vbFRpcE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvdG9vbHRpcCc7XG5cbmltcG9ydCB7IExheW91dERlZmF1bHRIZWFkZXJJdGVtVHJpZ2dlckRpcmVjdGl2ZSB9IGZyb20gJy4vbGF5b3V0LWhlYWRlci1pdGVtLXRyaWdnZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IExheW91dERlZmF1bHRIZWFkZXJJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQtaGVhZGVyLWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IExheW91dERlZmF1bHRIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2xheW91dC1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IExheW91dERlZmF1bHROYXZDb21wb25lbnQgfSBmcm9tICcuL2xheW91dC1uYXYuY29tcG9uZW50JztcbmltcG9ydCB7IExheW91dERlZmF1bHRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dC5jb21wb25lbnQnO1xuXG5jb25zdCBDT01QT05FTlRTID0gW1xuICBMYXlvdXREZWZhdWx0Q29tcG9uZW50LFxuICBMYXlvdXREZWZhdWx0TmF2Q29tcG9uZW50LFxuICBMYXlvdXREZWZhdWx0SGVhZGVyQ29tcG9uZW50LFxuICBMYXlvdXREZWZhdWx0SGVhZGVySXRlbUNvbXBvbmVudCxcbiAgTGF5b3V0RGVmYXVsdEhlYWRlckl0ZW1UcmlnZ2VyRGlyZWN0aXZlXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBOelRvb2xUaXBNb2R1bGUsXG4gICAgTnpJY29uTW9kdWxlLFxuICAgIE56QXZhdGFyTW9kdWxlLFxuICAgIE56RHJvcERvd25Nb2R1bGUsXG4gICAgTnpNZXNzYWdlTW9kdWxlLFxuICAgIE56QmFkZ2VNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBDT01QT05FTlRTLFxuICBleHBvcnRzOiBDT01QT05FTlRTXG59KVxuZXhwb3J0IGNsYXNzIExheW91dERlZmF1bHRNb2R1bGUge31cbiJdfQ==