import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { G2RadarComponent } from './radar.component';
import * as i0 from "@angular/core";
const COMPONENTS = [G2RadarComponent];
export class G2RadarModule {
}
/** @nocollapse */ G2RadarModule.ɵmod = i0.ɵɵdefineNgModule({ type: G2RadarModule });
/** @nocollapse */ G2RadarModule.ɵinj = i0.ɵɵdefineInjector({ factory: function G2RadarModule_Factory(t) { return new (t || G2RadarModule)(); }, imports: [[CommonModule, NzGridModule, NzOutletModule, NzSkeletonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(G2RadarModule, { declarations: [G2RadarComponent], imports: [CommonModule, NzGridModule, NzOutletModule, NzSkeletonModule], exports: [G2RadarComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(G2RadarModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, NzGridModule, NzOutletModule, NzSkeletonModule],
                declarations: COMPONENTS,
                exports: COMPONENTS,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkYXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY2hhcnQvcmFkYXIvcmFkYXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFMUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7O0FBRXJELE1BQU0sVUFBVSxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQU90QyxNQUFNLE9BQU8sYUFBYTs7b0VBQWIsYUFBYTs0SEFBYixhQUFhLGtCQUpmLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsZ0JBQWdCLENBQUM7d0ZBSTVELGFBQWEsbUJBUE4sZ0JBQWdCLGFBR3hCLFlBQVksRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLGdCQUFnQixhQUhwRCxnQkFBZ0I7dUZBT3ZCLGFBQWE7Y0FMekIsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLGdCQUFnQixDQUFDO2dCQUN2RSxZQUFZLEVBQUUsVUFBVTtnQkFDeEIsT0FBTyxFQUFFLFVBQVU7YUFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56T3V0bGV0TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL291dGxldCc7XG5pbXBvcnQgeyBOekdyaWRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2dyaWQnO1xuaW1wb3J0IHsgTnpTa2VsZXRvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvc2tlbGV0b24nO1xuXG5pbXBvcnQgeyBHMlJhZGFyQ29tcG9uZW50IH0gZnJvbSAnLi9yYWRhci5jb21wb25lbnQnO1xuXG5jb25zdCBDT01QT05FTlRTID0gW0cyUmFkYXJDb21wb25lbnRdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBOekdyaWRNb2R1bGUsIE56T3V0bGV0TW9kdWxlLCBOelNrZWxldG9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBDT01QT05FTlRTLFxuICBleHBvcnRzOiBDT01QT05FTlRTLFxufSlcbmV4cG9ydCBjbGFzcyBHMlJhZGFyTW9kdWxlIHt9XG4iXX0=