import { ObserversModule } from '@angular/cdk/observers';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { EllipsisComponent } from './ellipsis.component';
import * as i0 from "@angular/core";
const COMPONENTS = [EllipsisComponent];
export class EllipsisModule {
}
EllipsisModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.9", ngImport: i0, type: EllipsisModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
EllipsisModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.9", ngImport: i0, type: EllipsisModule, declarations: [EllipsisComponent], imports: [CommonModule, ObserversModule, NzToolTipModule], exports: [EllipsisComponent] });
EllipsisModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.9", ngImport: i0, type: EllipsisModule, imports: [[CommonModule, ObserversModule, NzToolTipModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.9", ngImport: i0, type: EllipsisModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, ObserversModule, NzToolTipModule],
                    declarations: COMPONENTS,
                    exports: COMPONENTS
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxsaXBzaXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL2VsbGlwc2lzL2VsbGlwc2lzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDekQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXhELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQUV6RCxNQUFNLFVBQVUsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFPdkMsTUFBTSxPQUFPLGNBQWM7OzJHQUFkLGNBQWM7NEdBQWQsY0FBYyxpQkFQUCxpQkFBaUIsYUFHekIsWUFBWSxFQUFFLGVBQWUsRUFBRSxlQUFlLGFBSHRDLGlCQUFpQjs0R0FPeEIsY0FBYyxZQUpoQixDQUFDLFlBQVksRUFBRSxlQUFlLEVBQUUsZUFBZSxDQUFDOzJGQUk5QyxjQUFjO2tCQUwxQixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxlQUFlLEVBQUUsZUFBZSxDQUFDO29CQUN6RCxZQUFZLEVBQUUsVUFBVTtvQkFDeEIsT0FBTyxFQUFFLFVBQVU7aUJBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2ZXJzTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL29ic2VydmVycyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTnpUb29sVGlwTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC90b29sdGlwJztcblxuaW1wb3J0IHsgRWxsaXBzaXNDb21wb25lbnQgfSBmcm9tICcuL2VsbGlwc2lzLmNvbXBvbmVudCc7XG5cbmNvbnN0IENPTVBPTkVOVFMgPSBbRWxsaXBzaXNDb21wb25lbnRdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBPYnNlcnZlcnNNb2R1bGUsIE56VG9vbFRpcE1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogQ09NUE9ORU5UUyxcbiAgZXhwb3J0czogQ09NUE9ORU5UU1xufSlcbmV4cG9ydCBjbGFzcyBFbGxpcHNpc01vZHVsZSB7fVxuIl19