import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { G2TimelineComponent } from './timeline.component';
import * as i0 from "@angular/core";
const COMPONENTS = [G2TimelineComponent];
class G2TimelineModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: G2TimelineModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.1.5", ngImport: i0, type: G2TimelineModule, declarations: [G2TimelineComponent], imports: [CommonModule, NzOutletModule, NzSkeletonModule], exports: [G2TimelineComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: G2TimelineModule, imports: [CommonModule, NzOutletModule, NzSkeletonModule] }); }
}
export { G2TimelineModule };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: G2TimelineModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, NzOutletModule, NzSkeletonModule],
                    declarations: COMPONENTS,
                    exports: COMPONENTS
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZWxpbmUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY2hhcnQvdGltZWxpbmUvdGltZWxpbmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUUxRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7QUFFM0QsTUFBTSxVQUFVLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBRXpDLE1BS2EsZ0JBQWdCOzhHQUFoQixnQkFBZ0I7K0dBQWhCLGdCQUFnQixpQkFQVCxtQkFBbUIsYUFHM0IsWUFBWSxFQUFFLGNBQWMsRUFBRSxnQkFBZ0IsYUFIdEMsbUJBQW1COytHQU8xQixnQkFBZ0IsWUFKakIsWUFBWSxFQUFFLGNBQWMsRUFBRSxnQkFBZ0I7O1NBSTdDLGdCQUFnQjsyRkFBaEIsZ0JBQWdCO2tCQUw1QixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxjQUFjLEVBQUUsZ0JBQWdCLENBQUM7b0JBQ3pELFlBQVksRUFBRSxVQUFVO29CQUN4QixPQUFPLEVBQUUsVUFBVTtpQkFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTnpPdXRsZXRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvb3V0bGV0JztcbmltcG9ydCB7IE56U2tlbGV0b25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3NrZWxldG9uJztcblxuaW1wb3J0IHsgRzJUaW1lbGluZUNvbXBvbmVudCB9IGZyb20gJy4vdGltZWxpbmUuY29tcG9uZW50JztcblxuY29uc3QgQ09NUE9ORU5UUyA9IFtHMlRpbWVsaW5lQ29tcG9uZW50XTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTnpPdXRsZXRNb2R1bGUsIE56U2tlbGV0b25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IENPTVBPTkVOVFMsXG4gIGV4cG9ydHM6IENPTVBPTkVOVFNcbn0pXG5leHBvcnQgY2xhc3MgRzJUaW1lbGluZU1vZHVsZSB7fVxuIl19