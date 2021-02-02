import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { AvatarListItemComponent } from './avatar-list-item.component';
import { AvatarListComponent } from './avatar-list.component';
import * as i0 from "@angular/core";
const COMPONENTS = [AvatarListComponent, AvatarListItemComponent];
export class AvatarListModule {
}
/** @nocollapse */ AvatarListModule.ɵmod = i0.ɵɵdefineNgModule({ type: AvatarListModule });
/** @nocollapse */ AvatarListModule.ɵinj = i0.ɵɵdefineInjector({ factory: function AvatarListModule_Factory(t) { return new (t || AvatarListModule)(); }, imports: [[CommonModule, NzAvatarModule, NzToolTipModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AvatarListModule, { declarations: [AvatarListComponent, AvatarListItemComponent], imports: [CommonModule, NzAvatarModule, NzToolTipModule], exports: [AvatarListComponent, AvatarListItemComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AvatarListModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, NzAvatarModule, NzToolTipModule],
                declarations: COMPONENTS,
                exports: COMPONENTS,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLWxpc3QubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL2F2YXRhci1saXN0L2F2YXRhci1saXN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXhELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDOztBQUU5RCxNQUFNLFVBQVUsR0FBRyxDQUFDLG1CQUFtQixFQUFFLHVCQUF1QixDQUFDLENBQUM7QUFPbEUsTUFBTSxPQUFPLGdCQUFnQjs7dUVBQWhCLGdCQUFnQjtrSUFBaEIsZ0JBQWdCLGtCQUpsQixDQUFDLFlBQVksRUFBRSxjQUFjLEVBQUUsZUFBZSxDQUFDO3dGQUk3QyxnQkFBZ0IsbUJBUFQsbUJBQW1CLEVBQUUsdUJBQXVCLGFBR3BELFlBQVksRUFBRSxjQUFjLEVBQUUsZUFBZSxhQUhyQyxtQkFBbUIsRUFBRSx1QkFBdUI7dUZBT25ELGdCQUFnQjtjQUw1QixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGNBQWMsRUFBRSxlQUFlLENBQUM7Z0JBQ3hELFlBQVksRUFBRSxVQUFVO2dCQUN4QixPQUFPLEVBQUUsVUFBVTthQUNwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpBdmF0YXJNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2F2YXRhcic7XG5pbXBvcnQgeyBOelRvb2xUaXBNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3Rvb2x0aXAnO1xuXG5pbXBvcnQgeyBBdmF0YXJMaXN0SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vYXZhdGFyLWxpc3QtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXZhdGFyTGlzdENvbXBvbmVudCB9IGZyb20gJy4vYXZhdGFyLWxpc3QuY29tcG9uZW50JztcblxuY29uc3QgQ09NUE9ORU5UUyA9IFtBdmF0YXJMaXN0Q29tcG9uZW50LCBBdmF0YXJMaXN0SXRlbUNvbXBvbmVudF07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE56QXZhdGFyTW9kdWxlLCBOelRvb2xUaXBNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IENPTVBPTkVOVFMsXG4gIGV4cG9ydHM6IENPTVBPTkVOVFMsXG59KVxuZXhwb3J0IGNsYXNzIEF2YXRhckxpc3RNb2R1bGUge31cbiJdfQ==