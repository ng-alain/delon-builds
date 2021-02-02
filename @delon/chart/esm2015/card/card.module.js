import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { G2CardComponent } from './card.component';
import * as i0 from "@angular/core";
const COMPONENTS = [G2CardComponent];
export class G2CardModule {
}
/** @nocollapse */ G2CardModule.ɵmod = i0.ɵɵdefineNgModule({ type: G2CardModule });
/** @nocollapse */ G2CardModule.ɵinj = i0.ɵɵdefineInjector({ factory: function G2CardModule_Factory(t) { return new (t || G2CardModule)(); }, imports: [[CommonModule, NzCardModule, NzSpinModule, NzOutletModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(G2CardModule, { declarations: [G2CardComponent], imports: [CommonModule, NzCardModule, NzSpinModule, NzOutletModule], exports: [G2CardComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(G2CardModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, NzCardModule, NzSpinModule, NzOutletModule],
                declarations: COMPONENTS,
                exports: COMPONENTS,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jaGFydC9jYXJkL2NhcmQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFFbkQsTUFBTSxVQUFVLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQU9yQyxNQUFNLE9BQU8sWUFBWTs7bUVBQVosWUFBWTswSEFBWixZQUFZLGtCQUpkLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsY0FBYyxDQUFDO3dGQUl4RCxZQUFZLG1CQVBMLGVBQWUsYUFHdkIsWUFBWSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsY0FBYyxhQUhoRCxlQUFlO3VGQU90QixZQUFZO2NBTHhCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxjQUFjLENBQUM7Z0JBQ25FLFlBQVksRUFBRSxVQUFVO2dCQUN4QixPQUFPLEVBQUUsVUFBVTthQUNwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpDYXJkTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jYXJkJztcbmltcG9ydCB7IE56T3V0bGV0TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL291dGxldCc7XG5pbXBvcnQgeyBOelNwaW5Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3NwaW4nO1xuXG5pbXBvcnQgeyBHMkNhcmRDb21wb25lbnQgfSBmcm9tICcuL2NhcmQuY29tcG9uZW50JztcblxuY29uc3QgQ09NUE9ORU5UUyA9IFtHMkNhcmRDb21wb25lbnRdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBOekNhcmRNb2R1bGUsIE56U3Bpbk1vZHVsZSwgTnpPdXRsZXRNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IENPTVBPTkVOVFMsXG4gIGV4cG9ydHM6IENPTVBPTkVOVFMsXG59KVxuZXhwb3J0IGNsYXNzIEcyQ2FyZE1vZHVsZSB7fVxuIl19