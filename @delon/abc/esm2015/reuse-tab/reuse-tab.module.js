import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DelonLocaleModule } from '@delon/theme';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { ReuseTabContextMenuComponent } from './reuse-tab-context-menu.component';
import { ReuseTabContextComponent } from './reuse-tab-context.component';
import { ReuseTabContextDirective } from './reuse-tab-context.directive';
import { ReuseTabComponent } from './reuse-tab.component';
import * as i0 from "@angular/core";
const COMPONENTS = [ReuseTabComponent];
const NOEXPORTS = [ReuseTabContextMenuComponent, ReuseTabContextComponent, ReuseTabContextDirective];
export class ReuseTabModule {
}
/** @nocollapse */ ReuseTabModule.ɵmod = i0.ɵɵdefineNgModule({ type: ReuseTabModule });
/** @nocollapse */ ReuseTabModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ReuseTabModule_Factory(t) { return new (t || ReuseTabModule)(); }, imports: [[CommonModule, RouterModule, DelonLocaleModule, NzMenuModule, NzTabsModule, NzIconModule, OverlayModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ReuseTabModule, { declarations: [ReuseTabComponent, ReuseTabContextMenuComponent, ReuseTabContextComponent, ReuseTabContextDirective], imports: [CommonModule, RouterModule, DelonLocaleModule, NzMenuModule, NzTabsModule, NzIconModule, OverlayModule], exports: [ReuseTabComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ReuseTabModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, RouterModule, DelonLocaleModule, NzMenuModule, NzTabsModule, NzIconModule, OverlayModule],
                declarations: [...COMPONENTS, ...NOEXPORTS],
                exports: COMPONENTS,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9yZXVzZS10YWIvcmV1c2UtdGFiLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNqRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFFMUQsTUFBTSxVQUFVLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ3ZDLE1BQU0sU0FBUyxHQUFHLENBQUMsNEJBQTRCLEVBQUUsd0JBQXdCLEVBQUUsd0JBQXdCLENBQUMsQ0FBQztBQU9yRyxNQUFNLE9BQU8sY0FBYzs7cUVBQWQsY0FBYzs4SEFBZCxjQUFjLGtCQUpoQixDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsYUFBYSxDQUFDO3dGQUl0RyxjQUFjLG1CQVJQLGlCQUFpQixFQUNsQiw0QkFBNEIsRUFBRSx3QkFBd0IsRUFBRSx3QkFBd0IsYUFHdkYsWUFBWSxFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxhQUFhLGFBSjlGLGlCQUFpQjt1RkFReEIsY0FBYztjQUwxQixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxhQUFhLENBQUM7Z0JBQ2pILFlBQVksRUFBRSxDQUFDLEdBQUcsVUFBVSxFQUFFLEdBQUcsU0FBUyxDQUFDO2dCQUMzQyxPQUFPLEVBQUUsVUFBVTthQUNwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBEZWxvbkxvY2FsZU1vZHVsZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBOekljb25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2ljb24nO1xuaW1wb3J0IHsgTnpNZW51TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9tZW51JztcbmltcG9ydCB7IE56VGFic01vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvdGFicyc7XG5pbXBvcnQgeyBSZXVzZVRhYkNvbnRleHRNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9yZXVzZS10YWItY29udGV4dC1tZW51LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXVzZVRhYkNvbnRleHRDb21wb25lbnQgfSBmcm9tICcuL3JldXNlLXRhYi1jb250ZXh0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXVzZVRhYkNvbnRleHREaXJlY3RpdmUgfSBmcm9tICcuL3JldXNlLXRhYi1jb250ZXh0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBSZXVzZVRhYkNvbXBvbmVudCB9IGZyb20gJy4vcmV1c2UtdGFiLmNvbXBvbmVudCc7XG5cbmNvbnN0IENPTVBPTkVOVFMgPSBbUmV1c2VUYWJDb21wb25lbnRdO1xuY29uc3QgTk9FWFBPUlRTID0gW1JldXNlVGFiQ29udGV4dE1lbnVDb21wb25lbnQsIFJldXNlVGFiQ29udGV4dENvbXBvbmVudCwgUmV1c2VUYWJDb250ZXh0RGlyZWN0aXZlXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgUm91dGVyTW9kdWxlLCBEZWxvbkxvY2FsZU1vZHVsZSwgTnpNZW51TW9kdWxlLCBOelRhYnNNb2R1bGUsIE56SWNvbk1vZHVsZSwgT3ZlcmxheU1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogWy4uLkNPTVBPTkVOVFMsIC4uLk5PRVhQT1JUU10sXG4gIGV4cG9ydHM6IENPTVBPTkVOVFMsXG59KVxuZXhwb3J0IGNsYXNzIFJldXNlVGFiTW9kdWxlIHt9XG4iXX0=