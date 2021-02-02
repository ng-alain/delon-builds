import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { G2TagCloudComponent } from './tag-cloud.component';
import * as i0 from "@angular/core";
const COMPONENTS = [G2TagCloudComponent];
export class G2TagCloudModule {
}
/** @nocollapse */ G2TagCloudModule.ɵmod = i0.ɵɵdefineNgModule({ type: G2TagCloudModule });
/** @nocollapse */ G2TagCloudModule.ɵinj = i0.ɵɵdefineInjector({ factory: function G2TagCloudModule_Factory(t) { return new (t || G2TagCloudModule)(); }, imports: [[CommonModule, NzSkeletonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(G2TagCloudModule, { declarations: [G2TagCloudComponent], imports: [CommonModule, NzSkeletonModule], exports: [G2TagCloudComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(G2TagCloudModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, NzSkeletonModule],
                declarations: COMPONENTS,
                exports: COMPONENTS,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLWNsb3VkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NoYXJ0L3RhZy1jbG91ZC90YWctY2xvdWQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTFELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQUU1RCxNQUFNLFVBQVUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFPekMsTUFBTSxPQUFPLGdCQUFnQjs7dUVBQWhCLGdCQUFnQjtrSUFBaEIsZ0JBQWdCLGtCQUpsQixDQUFDLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQzt3RkFJOUIsZ0JBQWdCLG1CQVBULG1CQUFtQixhQUczQixZQUFZLEVBQUUsZ0JBQWdCLGFBSHRCLG1CQUFtQjt1RkFPMUIsZ0JBQWdCO2NBTDVCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLENBQUM7Z0JBQ3pDLFlBQVksRUFBRSxVQUFVO2dCQUN4QixPQUFPLEVBQUUsVUFBVTthQUNwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpTa2VsZXRvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvc2tlbGV0b24nO1xuXG5pbXBvcnQgeyBHMlRhZ0Nsb3VkQ29tcG9uZW50IH0gZnJvbSAnLi90YWctY2xvdWQuY29tcG9uZW50JztcblxuY29uc3QgQ09NUE9ORU5UUyA9IFtHMlRhZ0Nsb3VkQ29tcG9uZW50XTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTnpTa2VsZXRvbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogQ09NUE9ORU5UUyxcbiAgZXhwb3J0czogQ09NUE9ORU5UUyxcbn0pXG5leHBvcnQgY2xhc3MgRzJUYWdDbG91ZE1vZHVsZSB7fVxuIl19