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
LayoutDefaultModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: LayoutDefaultModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
LayoutDefaultModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: LayoutDefaultModule, declarations: [LayoutDefaultComponent,
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
LayoutDefaultModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: LayoutDefaultModule, imports: [[
            CommonModule,
            RouterModule,
            NzToolTipModule,
            NzIconModule,
            NzAvatarModule,
            NzDropDownModule,
            NzMessageModule,
            NzBadgeModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.1", ngImport: i0, type: LayoutDefaultModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lL2xheW91dC1kZWZhdWx0L2xheW91dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFeEQsT0FBTyxFQUFFLHVDQUF1QyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDakcsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbEYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDbkUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBRTVELE1BQU0sVUFBVSxHQUFHO0lBQ2pCLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsNEJBQTRCO0lBQzVCLGdDQUFnQztJQUNoQyx1Q0FBdUM7Q0FDeEMsQ0FBQztBQWdCRixNQUFNLE9BQU8sbUJBQW1COztnSEFBbkIsbUJBQW1CO2lIQUFuQixtQkFBbUIsaUJBckI5QixzQkFBc0I7UUFDdEIseUJBQXlCO1FBQ3pCLDRCQUE0QjtRQUM1QixnQ0FBZ0M7UUFDaEMsdUNBQXVDLGFBS3JDLFlBQVk7UUFDWixZQUFZO1FBQ1osZUFBZTtRQUNmLFlBQVk7UUFDWixjQUFjO1FBQ2QsZ0JBQWdCO1FBQ2hCLGVBQWU7UUFDZixhQUFhLGFBaEJmLHNCQUFzQjtRQUN0Qix5QkFBeUI7UUFDekIsNEJBQTRCO1FBQzVCLGdDQUFnQztRQUNoQyx1Q0FBdUM7aUhBaUI1QixtQkFBbUIsWUFickI7WUFDUCxZQUFZO1lBQ1osWUFBWTtZQUNaLGVBQWU7WUFDZixZQUFZO1lBQ1osY0FBYztZQUNkLGdCQUFnQjtZQUNoQixlQUFlO1lBQ2YsYUFBYTtTQUNkOzJGQUlVLG1CQUFtQjtrQkFkL0IsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixZQUFZO3dCQUNaLGVBQWU7d0JBQ2YsWUFBWTt3QkFDWixjQUFjO3dCQUNkLGdCQUFnQjt3QkFDaEIsZUFBZTt3QkFDZixhQUFhO3FCQUNkO29CQUNELFlBQVksRUFBRSxVQUFVO29CQUN4QixPQUFPLEVBQUUsVUFBVTtpQkFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IE56QXZhdGFyTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9hdmF0YXInO1xuaW1wb3J0IHsgTnpCYWRnZU1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvYmFkZ2UnO1xuaW1wb3J0IHsgTnpEcm9wRG93bk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvZHJvcGRvd24nO1xuaW1wb3J0IHsgTnpJY29uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcbmltcG9ydCB7IE56TWVzc2FnZU1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvbWVzc2FnZSc7XG5pbXBvcnQgeyBOelRvb2xUaXBNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3Rvb2x0aXAnO1xuXG5pbXBvcnQgeyBMYXlvdXREZWZhdWx0SGVhZGVySXRlbVRyaWdnZXJEaXJlY3RpdmUgfSBmcm9tICcuL2xheW91dC1oZWFkZXItaXRlbS10cmlnZ2VyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBMYXlvdXREZWZhdWx0SGVhZGVySXRlbUNvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0LWhlYWRlci1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYXlvdXREZWZhdWx0SGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQtaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYXlvdXREZWZhdWx0TmF2Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQtbmF2LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYXlvdXREZWZhdWx0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQuY29tcG9uZW50JztcblxuY29uc3QgQ09NUE9ORU5UUyA9IFtcbiAgTGF5b3V0RGVmYXVsdENvbXBvbmVudCxcbiAgTGF5b3V0RGVmYXVsdE5hdkNvbXBvbmVudCxcbiAgTGF5b3V0RGVmYXVsdEhlYWRlckNvbXBvbmVudCxcbiAgTGF5b3V0RGVmYXVsdEhlYWRlckl0ZW1Db21wb25lbnQsXG4gIExheW91dERlZmF1bHRIZWFkZXJJdGVtVHJpZ2dlckRpcmVjdGl2ZVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgTnpUb29sVGlwTW9kdWxlLFxuICAgIE56SWNvbk1vZHVsZSxcbiAgICBOekF2YXRhck1vZHVsZSxcbiAgICBOekRyb3BEb3duTW9kdWxlLFxuICAgIE56TWVzc2FnZU1vZHVsZSxcbiAgICBOekJhZGdlTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogQ09NUE9ORU5UUyxcbiAgZXhwb3J0czogQ09NUE9ORU5UU1xufSlcbmV4cG9ydCBjbGFzcyBMYXlvdXREZWZhdWx0TW9kdWxlIHt9XG4iXX0=