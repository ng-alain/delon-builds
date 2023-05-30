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
class LayoutDefaultModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.3", ngImport: i0, type: LayoutDefaultModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.3", ngImport: i0, type: LayoutDefaultModule, declarations: [LayoutDefaultComponent,
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
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.3", ngImport: i0, type: LayoutDefaultModule, imports: [CommonModule,
            RouterModule,
            NzToolTipModule,
            NzIconModule,
            NzAvatarModule,
            NzDropDownModule,
            NzMessageModule,
            NzBadgeModule] }); }
}
export { LayoutDefaultModule };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.3", ngImport: i0, type: LayoutDefaultModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lL2xheW91dC1kZWZhdWx0L2xheW91dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFeEQsT0FBTyxFQUFFLHVDQUF1QyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDakcsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbEYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDM0UsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBRTVELE1BQU0sVUFBVSxHQUFHO0lBQ2pCLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsNEJBQTRCO0lBQzVCLGdDQUFnQztJQUNoQyx1Q0FBdUM7SUFDdkMsaUNBQWlDO0NBQ2xDLENBQUM7QUFFRixNQWNhLG1CQUFtQjs4R0FBbkIsbUJBQW1COytHQUFuQixtQkFBbUIsaUJBdEI5QixzQkFBc0I7WUFDdEIseUJBQXlCO1lBQ3pCLDRCQUE0QjtZQUM1QixnQ0FBZ0M7WUFDaEMsdUNBQXVDO1lBQ3ZDLGlDQUFpQyxhQUsvQixZQUFZO1lBQ1osWUFBWTtZQUNaLGVBQWU7WUFDZixZQUFZO1lBQ1osY0FBYztZQUNkLGdCQUFnQjtZQUNoQixlQUFlO1lBQ2YsYUFBYSxhQWpCZixzQkFBc0I7WUFDdEIseUJBQXlCO1lBQ3pCLDRCQUE0QjtZQUM1QixnQ0FBZ0M7WUFDaEMsdUNBQXVDO1lBQ3ZDLGlDQUFpQzsrR0FpQnRCLG1CQUFtQixZQVo1QixZQUFZO1lBQ1osWUFBWTtZQUNaLGVBQWU7WUFDZixZQUFZO1lBQ1osY0FBYztZQUNkLGdCQUFnQjtZQUNoQixlQUFlO1lBQ2YsYUFBYTs7U0FLSixtQkFBbUI7MkZBQW5CLG1CQUFtQjtrQkFkL0IsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixZQUFZO3dCQUNaLGVBQWU7d0JBQ2YsWUFBWTt3QkFDWixjQUFjO3dCQUNkLGdCQUFnQjt3QkFDaEIsZUFBZTt3QkFDZixhQUFhO3FCQUNkO29CQUNELFlBQVksRUFBRSxVQUFVO29CQUN4QixPQUFPLEVBQUUsVUFBVTtpQkFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IE56QXZhdGFyTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9hdmF0YXInO1xuaW1wb3J0IHsgTnpCYWRnZU1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvYmFkZ2UnO1xuaW1wb3J0IHsgTnpEcm9wRG93bk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvZHJvcGRvd24nO1xuaW1wb3J0IHsgTnpJY29uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcbmltcG9ydCB7IE56TWVzc2FnZU1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvbWVzc2FnZSc7XG5pbXBvcnQgeyBOelRvb2xUaXBNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3Rvb2x0aXAnO1xuXG5pbXBvcnQgeyBMYXlvdXREZWZhdWx0SGVhZGVySXRlbVRyaWdnZXJEaXJlY3RpdmUgfSBmcm9tICcuL2xheW91dC1oZWFkZXItaXRlbS10cmlnZ2VyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBMYXlvdXREZWZhdWx0SGVhZGVySXRlbUNvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0LWhlYWRlci1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYXlvdXREZWZhdWx0SGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQtaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYXlvdXREZWZhdWx0TmF2Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQtbmF2LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYXlvdXREZWZhdWx0VG9wTWVudUl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2xheW91dC10b3AtbWVudS1pdGVtJztcbmltcG9ydCB7IExheW91dERlZmF1bHRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dC5jb21wb25lbnQnO1xuXG5jb25zdCBDT01QT05FTlRTID0gW1xuICBMYXlvdXREZWZhdWx0Q29tcG9uZW50LFxuICBMYXlvdXREZWZhdWx0TmF2Q29tcG9uZW50LFxuICBMYXlvdXREZWZhdWx0SGVhZGVyQ29tcG9uZW50LFxuICBMYXlvdXREZWZhdWx0SGVhZGVySXRlbUNvbXBvbmVudCxcbiAgTGF5b3V0RGVmYXVsdEhlYWRlckl0ZW1UcmlnZ2VyRGlyZWN0aXZlLFxuICBMYXlvdXREZWZhdWx0VG9wTWVudUl0ZW1Db21wb25lbnRcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIE56VG9vbFRpcE1vZHVsZSxcbiAgICBOekljb25Nb2R1bGUsXG4gICAgTnpBdmF0YXJNb2R1bGUsXG4gICAgTnpEcm9wRG93bk1vZHVsZSxcbiAgICBOek1lc3NhZ2VNb2R1bGUsXG4gICAgTnpCYWRnZU1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IENPTVBPTkVOVFMsXG4gIGV4cG9ydHM6IENPTVBPTkVOVFNcbn0pXG5leHBvcnQgY2xhc3MgTGF5b3V0RGVmYXVsdE1vZHVsZSB7fVxuIl19