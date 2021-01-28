import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DelonUtilModule } from '@delon/util';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { SidebarNavComponent } from './sidebar-nav.component';
import * as i0 from "@angular/core";
export class SidebarNavModule {
}
/** @nocollapse */ SidebarNavModule.ɵmod = i0.ɵɵdefineNgModule({ type: SidebarNavModule });
/** @nocollapse */ SidebarNavModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SidebarNavModule_Factory(t) { return new (t || SidebarNavModule)(); }, imports: [[CommonModule, RouterModule, NzIconModule, NzToolTipModule, DelonUtilModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SidebarNavModule, { declarations: [SidebarNavComponent], imports: [CommonModule, RouterModule, NzIconModule, NzToolTipModule, DelonUtilModule], exports: [SidebarNavComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SidebarNavModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, RouterModule, NzIconModule, NzToolTipModule, DelonUtilModule],
                declarations: [SidebarNavComponent],
                exports: [SidebarNavComponent],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci1uYXYubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3NpZGViYXItbmF2L3NpZGViYXItbmF2Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM5QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDOztBQU85RCxNQUFNLE9BQU8sZ0JBQWdCOzt1RUFBaEIsZ0JBQWdCO2tJQUFoQixnQkFBZ0Isa0JBSmxCLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLGVBQWUsQ0FBQzt3RkFJMUUsZ0JBQWdCLG1CQUhaLG1CQUFtQixhQUR4QixZQUFZLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsZUFBZSxhQUUxRSxtQkFBbUI7dUZBRWxCLGdCQUFnQjtjQUw1QixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLGVBQWUsQ0FBQztnQkFDckYsWUFBWSxFQUFFLENBQUMsbUJBQW1CLENBQUM7Z0JBQ25DLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO2FBQy9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRGVsb25VdGlsTW9kdWxlIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgTnpJY29uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcbmltcG9ydCB7IE56VG9vbFRpcE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvdG9vbHRpcCc7XG5pbXBvcnQgeyBTaWRlYmFyTmF2Q29tcG9uZW50IH0gZnJvbSAnLi9zaWRlYmFyLW5hdi5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBSb3V0ZXJNb2R1bGUsIE56SWNvbk1vZHVsZSwgTnpUb29sVGlwTW9kdWxlLCBEZWxvblV0aWxNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtTaWRlYmFyTmF2Q29tcG9uZW50XSxcbiAgZXhwb3J0czogW1NpZGViYXJOYXZDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBTaWRlYmFyTmF2TW9kdWxlIHt9XG4iXX0=