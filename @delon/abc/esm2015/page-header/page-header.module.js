import { ObserversModule } from '@angular/cdk/observers';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { PageHeaderComponent } from './page-header.component';
import * as i0 from "@angular/core";
const COMPONENTS = [PageHeaderComponent];
export class PageHeaderModule {
}
/** @nocollapse */ PageHeaderModule.ɵmod = i0.ɵɵdefineNgModule({ type: PageHeaderModule });
/** @nocollapse */ PageHeaderModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PageHeaderModule_Factory(t) { return new (t || PageHeaderModule)(); }, imports: [[CommonModule, RouterModule, ObserversModule, NzAffixModule, NzSkeletonModule, NzBreadCrumbModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PageHeaderModule, { declarations: [PageHeaderComponent], imports: [CommonModule, RouterModule, ObserversModule, NzAffixModule, NzSkeletonModule, NzBreadCrumbModule], exports: [PageHeaderComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PageHeaderModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, RouterModule, ObserversModule, NzAffixModule, NzSkeletonModule, NzBreadCrumbModule],
                declarations: COMPONENTS,
                exports: COMPONENTS,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1oZWFkZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3BhZ2UtaGVhZGVyL3BhZ2UtaGVhZGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDekQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7QUFFOUQsTUFBTSxVQUFVLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBT3pDLE1BQU0sT0FBTyxnQkFBZ0I7O3VFQUFoQixnQkFBZ0I7a0lBQWhCLGdCQUFnQixrQkFKbEIsQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsa0JBQWtCLENBQUM7d0ZBSWhHLGdCQUFnQixtQkFQVCxtQkFBbUIsYUFHM0IsWUFBWSxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLGtCQUFrQixhQUh4RixtQkFBbUI7dUZBTzFCLGdCQUFnQjtjQUw1QixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLGtCQUFrQixDQUFDO2dCQUMzRyxZQUFZLEVBQUUsVUFBVTtnQkFDeEIsT0FBTyxFQUFFLFVBQVU7YUFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZlcnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb2JzZXJ2ZXJzJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE56QWZmaXhNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2FmZml4JztcbmltcG9ydCB7IE56QnJlYWRDcnVtYk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvYnJlYWRjcnVtYic7XG5pbXBvcnQgeyBOelNrZWxldG9uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9za2VsZXRvbic7XG5pbXBvcnQgeyBQYWdlSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlLWhlYWRlci5jb21wb25lbnQnO1xuXG5jb25zdCBDT01QT05FTlRTID0gW1BhZ2VIZWFkZXJDb21wb25lbnRdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBSb3V0ZXJNb2R1bGUsIE9ic2VydmVyc01vZHVsZSwgTnpBZmZpeE1vZHVsZSwgTnpTa2VsZXRvbk1vZHVsZSwgTnpCcmVhZENydW1iTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBDT01QT05FTlRTLFxuICBleHBvcnRzOiBDT01QT05FTlRTLFxufSlcbmV4cG9ydCBjbGFzcyBQYWdlSGVhZGVyTW9kdWxlIHt9XG4iXX0=