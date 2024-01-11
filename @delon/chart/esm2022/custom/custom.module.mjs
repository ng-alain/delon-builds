import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { G2CustomComponent } from './custom.component';
import * as i0 from "@angular/core";
const COMPONENTS = [G2CustomComponent];
export class G2CustomModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: G2CustomModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.0.9", ngImport: i0, type: G2CustomModule, imports: [CommonModule, NzSkeletonModule, G2CustomComponent], exports: [G2CustomComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: G2CustomModule, imports: [CommonModule, NzSkeletonModule, COMPONENTS] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: G2CustomModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, NzSkeletonModule, ...COMPONENTS],
                    exports: COMPONENTS
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NoYXJ0L2N1c3RvbS9jdXN0b20ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTFELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztBQUV2RCxNQUFNLFVBQVUsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFNdkMsTUFBTSxPQUFPLGNBQWM7OEdBQWQsY0FBYzsrR0FBZCxjQUFjLFlBSGYsWUFBWSxFQUFFLGdCQUFnQixFQUh0QixpQkFBaUIsYUFBakIsaUJBQWlCOytHQU14QixjQUFjLFlBSGYsWUFBWSxFQUFFLGdCQUFnQixFQUFLLFVBQVU7OzJGQUc1QyxjQUFjO2tCQUoxQixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxHQUFHLFVBQVUsQ0FBQztvQkFDeEQsT0FBTyxFQUFFLFVBQVU7aUJBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE56U2tlbGV0b25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3NrZWxldG9uJztcblxuaW1wb3J0IHsgRzJDdXN0b21Db21wb25lbnQgfSBmcm9tICcuL2N1c3RvbS5jb21wb25lbnQnO1xuXG5jb25zdCBDT01QT05FTlRTID0gW0cyQ3VzdG9tQ29tcG9uZW50XTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTnpTa2VsZXRvbk1vZHVsZSwgLi4uQ09NUE9ORU5UU10sXG4gIGV4cG9ydHM6IENPTVBPTkVOVFNcbn0pXG5leHBvcnQgY2xhc3MgRzJDdXN0b21Nb2R1bGUge31cbiJdfQ==