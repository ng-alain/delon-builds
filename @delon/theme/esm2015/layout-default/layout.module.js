import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { LayoutDefaultHeaderItemTriggerDirective } from './layout-header-item-trigger.directive';
import { LayoutDefaultHeaderItemComponent } from './layout-header-item.component';
import { LayoutDefaultHeaderComponent } from './layout-header.component';
import { LayoutDefaultNavComponent } from './layout-nav.component';
import { LayoutDefaultComponent } from './layout.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const COMPONENTS = [
    LayoutDefaultComponent,
    LayoutDefaultNavComponent,
    LayoutDefaultHeaderComponent,
    LayoutDefaultHeaderItemComponent,
    LayoutDefaultHeaderItemTriggerDirective,
];
export class LayoutDefaultModule {
}
/** @nocollapse */ LayoutDefaultModule.ɵmod = i0.ɵɵdefineNgModule({ type: LayoutDefaultModule });
/** @nocollapse */ LayoutDefaultModule.ɵinj = i0.ɵɵdefineInjector({ factory: function LayoutDefaultModule_Factory(t) { return new (t || LayoutDefaultModule)(); }, imports: [[CommonModule, RouterModule, NzToolTipModule, NzIconModule, NzAvatarModule, NzDropDownModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(LayoutDefaultModule, { declarations: [LayoutDefaultComponent,
        LayoutDefaultNavComponent,
        LayoutDefaultHeaderComponent,
        LayoutDefaultHeaderItemComponent,
        LayoutDefaultHeaderItemTriggerDirective], imports: [CommonModule, RouterModule, NzToolTipModule, NzIconModule, NzAvatarModule, NzDropDownModule], exports: [LayoutDefaultComponent,
        LayoutDefaultNavComponent,
        LayoutDefaultHeaderComponent,
        LayoutDefaultHeaderItemComponent,
        LayoutDefaultHeaderItemTriggerDirective] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LayoutDefaultModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, RouterModule, NzToolTipModule, NzIconModule, NzAvatarModule, NzDropDownModule],
                declarations: COMPONENTS,
                exports: COMPONENTS,
            }]
    }], null, null); })();
i0.ɵɵsetComponentScope(LayoutDefaultComponent, [i1.NgIf, LayoutDefaultHeaderComponent, i1.NgTemplateOutlet, LayoutDefaultNavComponent], []);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lL2xheW91dC1kZWZhdWx0L2xheW91dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3hELE9BQU8sRUFBRSx1Q0FBdUMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXpFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7QUFFNUQsTUFBTSxVQUFVLEdBQUc7SUFDakIsc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6Qiw0QkFBNEI7SUFDNUIsZ0NBQWdDO0lBQ2hDLHVDQUF1QztDQUN4QyxDQUFDO0FBT0YsTUFBTSxPQUFPLG1CQUFtQjs7MEVBQW5CLG1CQUFtQjt3SUFBbkIsbUJBQW1CLGtCQUpyQixDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsZ0JBQWdCLENBQUM7d0ZBSTNGLG1CQUFtQixtQkFaOUIsc0JBQXNCO1FBQ3RCLHlCQUF5QjtRQUN6Qiw0QkFBNEI7UUFDNUIsZ0NBQWdDO1FBQ2hDLHVDQUF1QyxhQUk3QixZQUFZLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLGdCQUFnQixhQVJyRyxzQkFBc0I7UUFDdEIseUJBQXlCO1FBQ3pCLDRCQUE0QjtRQUM1QixnQ0FBZ0M7UUFDaEMsdUNBQXVDO3VGQVE1QixtQkFBbUI7Y0FML0IsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsZ0JBQWdCLENBQUM7Z0JBQ3RHLFlBQVksRUFBRSxVQUFVO2dCQUN4QixPQUFPLEVBQUUsVUFBVTthQUNwQjs7dUJBWEMsc0JBQXNCLFlBRXRCLDRCQUE0Qix1QkFENUIseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTnpBdmF0YXJNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2F2YXRhcic7XG5pbXBvcnQgeyBOekRyb3BEb3duTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9kcm9wZG93bic7XG5pbXBvcnQgeyBOekljb25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2ljb24nO1xuaW1wb3J0IHsgTnpUb29sVGlwTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC90b29sdGlwJztcbmltcG9ydCB7IExheW91dERlZmF1bHRIZWFkZXJJdGVtVHJpZ2dlckRpcmVjdGl2ZSB9IGZyb20gJy4vbGF5b3V0LWhlYWRlci1pdGVtLXRyaWdnZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IExheW91dERlZmF1bHRIZWFkZXJJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQtaGVhZGVyLWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IExheW91dERlZmF1bHRIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2xheW91dC1oZWFkZXIuY29tcG9uZW50JztcblxuaW1wb3J0IHsgTGF5b3V0RGVmYXVsdE5hdkNvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0LW5hdi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGF5b3V0RGVmYXVsdENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0LmNvbXBvbmVudCc7XG5cbmNvbnN0IENPTVBPTkVOVFMgPSBbXG4gIExheW91dERlZmF1bHRDb21wb25lbnQsXG4gIExheW91dERlZmF1bHROYXZDb21wb25lbnQsXG4gIExheW91dERlZmF1bHRIZWFkZXJDb21wb25lbnQsXG4gIExheW91dERlZmF1bHRIZWFkZXJJdGVtQ29tcG9uZW50LFxuICBMYXlvdXREZWZhdWx0SGVhZGVySXRlbVRyaWdnZXJEaXJlY3RpdmUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBSb3V0ZXJNb2R1bGUsIE56VG9vbFRpcE1vZHVsZSwgTnpJY29uTW9kdWxlLCBOekF2YXRhck1vZHVsZSwgTnpEcm9wRG93bk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogQ09NUE9ORU5UUyxcbiAgZXhwb3J0czogQ09NUE9ORU5UUyxcbn0pXG5leHBvcnQgY2xhc3MgTGF5b3V0RGVmYXVsdE1vZHVsZSB7fVxuIl19