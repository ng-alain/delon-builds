import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DelonLocaleModule } from '@delon/theme';
import { DelonUtilModule } from '@delon/util';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { G2MiniProgressComponent } from './mini-progress.component';
import * as i0 from "@angular/core";
const COMPONENTS = [G2MiniProgressComponent];
export class G2MiniProgressModule {
}
/** @nocollapse */ G2MiniProgressModule.ɵmod = i0.ɵɵdefineNgModule({ type: G2MiniProgressModule });
/** @nocollapse */ G2MiniProgressModule.ɵinj = i0.ɵɵdefineInjector({ factory: function G2MiniProgressModule_Factory(t) { return new (t || G2MiniProgressModule)(); }, imports: [[CommonModule, DelonUtilModule, DelonLocaleModule, NzToolTipModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(G2MiniProgressModule, { declarations: [G2MiniProgressComponent], imports: [CommonModule, DelonUtilModule, DelonLocaleModule, NzToolTipModule], exports: [G2MiniProgressComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(G2MiniProgressModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, DelonUtilModule, DelonLocaleModule, NzToolTipModule],
                declarations: [...COMPONENTS],
                exports: [...COMPONENTS],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluaS1wcm9ncmVzcy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jaGFydC9taW5pLXByb2dyZXNzL21pbmktcHJvZ3Jlc3MubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUV4RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7QUFFcEUsTUFBTSxVQUFVLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0FBTzdDLE1BQU0sT0FBTyxvQkFBb0I7OzJFQUFwQixvQkFBb0I7MElBQXBCLG9CQUFvQixrQkFKdEIsQ0FBQyxZQUFZLEVBQUUsZUFBZSxFQUFFLGlCQUFpQixFQUFFLGVBQWUsQ0FBQzt3RkFJakUsb0JBQW9CLG1CQVBiLHVCQUF1QixhQUcvQixZQUFZLEVBQUUsZUFBZSxFQUFFLGlCQUFpQixFQUFFLGVBQWUsYUFIekQsdUJBQXVCO3VGQU85QixvQkFBb0I7Y0FMaEMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxlQUFlLEVBQUUsaUJBQWlCLEVBQUUsZUFBZSxDQUFDO2dCQUM1RSxZQUFZLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQztnQkFDN0IsT0FBTyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUM7YUFDekIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERlbG9uTG9jYWxlTW9kdWxlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IERlbG9uVXRpbE1vZHVsZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IE56VG9vbFRpcE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvdG9vbHRpcCc7XG5cbmltcG9ydCB7IEcyTWluaVByb2dyZXNzQ29tcG9uZW50IH0gZnJvbSAnLi9taW5pLXByb2dyZXNzLmNvbXBvbmVudCc7XG5cbmNvbnN0IENPTVBPTkVOVFMgPSBbRzJNaW5pUHJvZ3Jlc3NDb21wb25lbnRdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBEZWxvblV0aWxNb2R1bGUsIERlbG9uTG9jYWxlTW9kdWxlLCBOelRvb2xUaXBNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRTXSxcbiAgZXhwb3J0czogWy4uLkNPTVBPTkVOVFNdLFxufSlcbmV4cG9ydCBjbGFzcyBHMk1pbmlQcm9ncmVzc01vZHVsZSB7fVxuIl19