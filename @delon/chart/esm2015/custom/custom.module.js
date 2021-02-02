import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { G2CustomComponent } from './custom.component';
import * as i0 from "@angular/core";
const COMPONENTS = [G2CustomComponent];
export class G2CustomModule {
}
/** @nocollapse */ G2CustomModule.ɵmod = i0.ɵɵdefineNgModule({ type: G2CustomModule });
/** @nocollapse */ G2CustomModule.ɵinj = i0.ɵɵdefineInjector({ factory: function G2CustomModule_Factory(t) { return new (t || G2CustomModule)(); }, imports: [[CommonModule, NzSkeletonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(G2CustomModule, { declarations: [G2CustomComponent], imports: [CommonModule, NzSkeletonModule], exports: [G2CustomComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(G2CustomModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, NzSkeletonModule],
                declarations: COMPONENTS,
                exports: COMPONENTS,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NoYXJ0L2N1c3RvbS9jdXN0b20ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTFELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztBQUV2RCxNQUFNLFVBQVUsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFPdkMsTUFBTSxPQUFPLGNBQWM7O3FFQUFkLGNBQWM7OEhBQWQsY0FBYyxrQkFKaEIsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLENBQUM7d0ZBSTlCLGNBQWMsbUJBUFAsaUJBQWlCLGFBR3pCLFlBQVksRUFBRSxnQkFBZ0IsYUFIdEIsaUJBQWlCO3VGQU94QixjQUFjO2NBTDFCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLENBQUM7Z0JBQ3pDLFlBQVksRUFBRSxVQUFVO2dCQUN4QixPQUFPLEVBQUUsVUFBVTthQUNwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpTa2VsZXRvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvc2tlbGV0b24nO1xuXG5pbXBvcnQgeyBHMkN1c3RvbUNvbXBvbmVudCB9IGZyb20gJy4vY3VzdG9tLmNvbXBvbmVudCc7XG5cbmNvbnN0IENPTVBPTkVOVFMgPSBbRzJDdXN0b21Db21wb25lbnRdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBOelNrZWxldG9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBDT01QT05FTlRTLFxuICBleHBvcnRzOiBDT01QT05FTlRTLFxufSlcbmV4cG9ydCBjbGFzcyBHMkN1c3RvbU1vZHVsZSB7fVxuIl19