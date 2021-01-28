import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DelonUtilModule } from '@delon/util';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { G2TagCloudComponent } from './tag-cloud.component';
import * as i0 from "@angular/core";
const COMPONENTS = [G2TagCloudComponent];
export class G2TagCloudModule {
}
/** @nocollapse */ G2TagCloudModule.ɵmod = i0.ɵɵdefineNgModule({ type: G2TagCloudModule });
/** @nocollapse */ G2TagCloudModule.ɵinj = i0.ɵɵdefineInjector({ factory: function G2TagCloudModule_Factory(t) { return new (t || G2TagCloudModule)(); }, imports: [[CommonModule, DelonUtilModule, NzSkeletonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(G2TagCloudModule, { declarations: [G2TagCloudComponent], imports: [CommonModule, DelonUtilModule, NzSkeletonModule], exports: [G2TagCloudComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(G2TagCloudModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, DelonUtilModule, NzSkeletonModule],
                declarations: COMPONENTS,
                exports: COMPONENTS,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLWNsb3VkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NoYXJ0L3RhZy1jbG91ZC90YWctY2xvdWQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDOUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFMUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBRTVELE1BQU0sVUFBVSxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQU96QyxNQUFNLE9BQU8sZ0JBQWdCOzt1RUFBaEIsZ0JBQWdCO2tJQUFoQixnQkFBZ0Isa0JBSmxCLENBQUMsWUFBWSxFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsQ0FBQzt3RkFJL0MsZ0JBQWdCLG1CQVBULG1CQUFtQixhQUczQixZQUFZLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixhQUh2QyxtQkFBbUI7dUZBTzFCLGdCQUFnQjtjQUw1QixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsQ0FBQztnQkFDMUQsWUFBWSxFQUFFLFVBQVU7Z0JBQ3hCLE9BQU8sRUFBRSxVQUFVO2FBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEZWxvblV0aWxNb2R1bGUgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBOelNrZWxldG9uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9za2VsZXRvbic7XG5cbmltcG9ydCB7IEcyVGFnQ2xvdWRDb21wb25lbnQgfSBmcm9tICcuL3RhZy1jbG91ZC5jb21wb25lbnQnO1xuXG5jb25zdCBDT01QT05FTlRTID0gW0cyVGFnQ2xvdWRDb21wb25lbnRdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBEZWxvblV0aWxNb2R1bGUsIE56U2tlbGV0b25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IENPTVBPTkVOVFMsXG4gIGV4cG9ydHM6IENPTVBPTkVOVFMsXG59KVxuZXhwb3J0IGNsYXNzIEcyVGFnQ2xvdWRNb2R1bGUge31cbiJdfQ==