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
import { LayoutDefaultTopMenuItemComponent } from './layout-top-menu-item';
import { LayoutDefaultComponent } from './layout.component';
import * as i0 from "@angular/core";
const COMPONENTS = [
    LayoutDefaultComponent,
    LayoutDefaultNavComponent,
    LayoutDefaultHeaderComponent,
    LayoutDefaultHeaderItemComponent,
    LayoutDefaultHeaderItemTriggerDirective,
    LayoutDefaultTopMenuItemComponent
];
export class LayoutDefaultModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: LayoutDefaultModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.0.4", ngImport: i0, type: LayoutDefaultModule, declarations: [LayoutDefaultComponent,
            LayoutDefaultNavComponent,
            LayoutDefaultHeaderComponent,
            LayoutDefaultHeaderItemComponent,
            LayoutDefaultHeaderItemTriggerDirective,
            LayoutDefaultTopMenuItemComponent], imports: [CommonModule,
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
            LayoutDefaultHeaderItemTriggerDirective,
            LayoutDefaultTopMenuItemComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: LayoutDefaultModule, imports: [CommonModule,
            RouterModule,
            NzToolTipModule,
            NzIconModule,
            NzAvatarModule,
            NzDropDownModule,
            NzMessageModule,
            NzBadgeModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: LayoutDefaultModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lL2xheW91dC1kZWZhdWx0L2xheW91dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFeEQsT0FBTyxFQUFFLHVDQUF1QyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDakcsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbEYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDM0UsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBRTVELE1BQU0sVUFBVSxHQUFHO0lBQ2pCLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsNEJBQTRCO0lBQzVCLGdDQUFnQztJQUNoQyx1Q0FBdUM7SUFDdkMsaUNBQWlDO0NBQ2xDLENBQUM7QUFnQkYsTUFBTSxPQUFPLG1CQUFtQjs4R0FBbkIsbUJBQW1COytHQUFuQixtQkFBbUIsaUJBdEI5QixzQkFBc0I7WUFDdEIseUJBQXlCO1lBQ3pCLDRCQUE0QjtZQUM1QixnQ0FBZ0M7WUFDaEMsdUNBQXVDO1lBQ3ZDLGlDQUFpQyxhQUsvQixZQUFZO1lBQ1osWUFBWTtZQUNaLGVBQWU7WUFDZixZQUFZO1lBQ1osY0FBYztZQUNkLGdCQUFnQjtZQUNoQixlQUFlO1lBQ2YsYUFBYSxhQWpCZixzQkFBc0I7WUFDdEIseUJBQXlCO1lBQ3pCLDRCQUE0QjtZQUM1QixnQ0FBZ0M7WUFDaEMsdUNBQXVDO1lBQ3ZDLGlDQUFpQzsrR0FpQnRCLG1CQUFtQixZQVo1QixZQUFZO1lBQ1osWUFBWTtZQUNaLGVBQWU7WUFDZixZQUFZO1lBQ1osY0FBYztZQUNkLGdCQUFnQjtZQUNoQixlQUFlO1lBQ2YsYUFBYTs7MkZBS0osbUJBQW1CO2tCQWQvQixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLFlBQVk7d0JBQ1osZUFBZTt3QkFDZixZQUFZO3dCQUNaLGNBQWM7d0JBQ2QsZ0JBQWdCO3dCQUNoQixlQUFlO3dCQUNmLGFBQWE7cUJBQ2Q7b0JBQ0QsWUFBWSxFQUFFLFVBQVU7b0JBQ3hCLE9BQU8sRUFBRSxVQUFVO2lCQUNwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgTnpBdmF0YXJNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2F2YXRhcic7XG5pbXBvcnQgeyBOekJhZGdlTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9iYWRnZSc7XG5pbXBvcnQgeyBOekRyb3BEb3duTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9kcm9wZG93bic7XG5pbXBvcnQgeyBOekljb25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2ljb24nO1xuaW1wb3J0IHsgTnpNZXNzYWdlTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9tZXNzYWdlJztcbmltcG9ydCB7IE56VG9vbFRpcE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvdG9vbHRpcCc7XG5cbmltcG9ydCB7IExheW91dERlZmF1bHRIZWFkZXJJdGVtVHJpZ2dlckRpcmVjdGl2ZSB9IGZyb20gJy4vbGF5b3V0LWhlYWRlci1pdGVtLXRyaWdnZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IExheW91dERlZmF1bHRIZWFkZXJJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQtaGVhZGVyLWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IExheW91dERlZmF1bHRIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2xheW91dC1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IExheW91dERlZmF1bHROYXZDb21wb25lbnQgfSBmcm9tICcuL2xheW91dC1uYXYuY29tcG9uZW50JztcbmltcG9ydCB7IExheW91dERlZmF1bHRUb3BNZW51SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0LXRvcC1tZW51LWl0ZW0nO1xuaW1wb3J0IHsgTGF5b3V0RGVmYXVsdENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0LmNvbXBvbmVudCc7XG5cbmNvbnN0IENPTVBPTkVOVFMgPSBbXG4gIExheW91dERlZmF1bHRDb21wb25lbnQsXG4gIExheW91dERlZmF1bHROYXZDb21wb25lbnQsXG4gIExheW91dERlZmF1bHRIZWFkZXJDb21wb25lbnQsXG4gIExheW91dERlZmF1bHRIZWFkZXJJdGVtQ29tcG9uZW50LFxuICBMYXlvdXREZWZhdWx0SGVhZGVySXRlbVRyaWdnZXJEaXJlY3RpdmUsXG4gIExheW91dERlZmF1bHRUb3BNZW51SXRlbUNvbXBvbmVudFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgTnpUb29sVGlwTW9kdWxlLFxuICAgIE56SWNvbk1vZHVsZSxcbiAgICBOekF2YXRhck1vZHVsZSxcbiAgICBOekRyb3BEb3duTW9kdWxlLFxuICAgIE56TWVzc2FnZU1vZHVsZSxcbiAgICBOekJhZGdlTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogQ09NUE9ORU5UUyxcbiAgZXhwb3J0czogQ09NUE9ORU5UU1xufSlcbmV4cG9ydCBjbGFzcyBMYXlvdXREZWZhdWx0TW9kdWxlIHt9XG4iXX0=