import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { G2PieComponent } from './pie.component';
import * as i0 from "@angular/core";
const COMPONENTS = [G2PieComponent];
export class G2PieModule {
}
/** @nocollapse */ G2PieModule.ɵmod = i0.ɵɵdefineNgModule({ type: G2PieModule });
/** @nocollapse */ G2PieModule.ɵinj = i0.ɵɵdefineInjector({ factory: function G2PieModule_Factory(t) { return new (t || G2PieModule)(); }, imports: [[CommonModule, NzDividerModule, NzOutletModule, NzSkeletonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(G2PieModule, { declarations: [G2PieComponent], imports: [CommonModule, NzDividerModule, NzOutletModule, NzSkeletonModule], exports: [G2PieComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(G2PieModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, NzDividerModule, NzOutletModule, NzSkeletonModule],
                declarations: COMPONENTS,
                exports: COMPONENTS,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NoYXJ0L3BpZS9waWUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFMUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUVqRCxNQUFNLFVBQVUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBT3BDLE1BQU0sT0FBTyxXQUFXOztrRUFBWCxXQUFXO3dIQUFYLFdBQVcsa0JBSmIsQ0FBQyxZQUFZLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxnQkFBZ0IsQ0FBQzt3RkFJL0QsV0FBVyxtQkFQSixjQUFjLGFBR3RCLFlBQVksRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLGdCQUFnQixhQUh2RCxjQUFjO3VGQU9yQixXQUFXO2NBTHZCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxnQkFBZ0IsQ0FBQztnQkFDMUUsWUFBWSxFQUFFLFVBQVU7Z0JBQ3hCLE9BQU8sRUFBRSxVQUFVO2FBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOek91dGxldE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9vdXRsZXQnO1xuaW1wb3J0IHsgTnpEaXZpZGVyTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9kaXZpZGVyJztcbmltcG9ydCB7IE56U2tlbGV0b25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3NrZWxldG9uJztcblxuaW1wb3J0IHsgRzJQaWVDb21wb25lbnQgfSBmcm9tICcuL3BpZS5jb21wb25lbnQnO1xuXG5jb25zdCBDT01QT05FTlRTID0gW0cyUGllQ29tcG9uZW50XTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTnpEaXZpZGVyTW9kdWxlLCBOek91dGxldE1vZHVsZSwgTnpTa2VsZXRvbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogQ09NUE9ORU5UUyxcbiAgZXhwb3J0czogQ09NUE9ORU5UUyxcbn0pXG5leHBvcnQgY2xhc3MgRzJQaWVNb2R1bGUge31cbiJdfQ==