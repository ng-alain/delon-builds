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
ReuseTabModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.3", ngImport: i0, type: ReuseTabModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ReuseTabModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.3", ngImport: i0, type: ReuseTabModule, declarations: [ReuseTabComponent, ReuseTabContextMenuComponent, ReuseTabContextComponent, ReuseTabContextDirective], imports: [CommonModule, RouterModule, DelonLocaleModule, NzMenuModule, NzTabsModule, NzIconModule, OverlayModule], exports: [ReuseTabComponent] });
ReuseTabModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.3", ngImport: i0, type: ReuseTabModule, imports: [[CommonModule, RouterModule, DelonLocaleModule, NzMenuModule, NzTabsModule, NzIconModule, OverlayModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.3", ngImport: i0, type: ReuseTabModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, RouterModule, DelonLocaleModule, NzMenuModule, NzTabsModule, NzIconModule, OverlayModule],
                    declarations: [...COMPONENTS, ...NOEXPORTS],
                    exports: COMPONENTS
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9yZXVzZS10YWIvcmV1c2UtdGFiLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNqRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7QUFFMUQsTUFBTSxVQUFVLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ3ZDLE1BQU0sU0FBUyxHQUFHLENBQUMsNEJBQTRCLEVBQUUsd0JBQXdCLEVBQUUsd0JBQXdCLENBQUMsQ0FBQztBQU9yRyxNQUFNLE9BQU8sY0FBYzs7MkdBQWQsY0FBYzs0R0FBZCxjQUFjLGlCQVJQLGlCQUFpQixFQUNsQiw0QkFBNEIsRUFBRSx3QkFBd0IsRUFBRSx3QkFBd0IsYUFHdkYsWUFBWSxFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxhQUFhLGFBSjlGLGlCQUFpQjs0R0FReEIsY0FBYyxZQUpoQixDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsYUFBYSxDQUFDOzJGQUl0RyxjQUFjO2tCQUwxQixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsYUFBYSxDQUFDO29CQUNqSCxZQUFZLEVBQUUsQ0FBQyxHQUFHLFVBQVUsRUFBRSxHQUFHLFNBQVMsQ0FBQztvQkFDM0MsT0FBTyxFQUFFLFVBQVU7aUJBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgRGVsb25Mb2NhbGVNb2R1bGUgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgTnpJY29uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcbmltcG9ydCB7IE56TWVudU1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvbWVudSc7XG5pbXBvcnQgeyBOelRhYnNNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3RhYnMnO1xuXG5pbXBvcnQgeyBSZXVzZVRhYkNvbnRleHRNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9yZXVzZS10YWItY29udGV4dC1tZW51LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXVzZVRhYkNvbnRleHRDb21wb25lbnQgfSBmcm9tICcuL3JldXNlLXRhYi1jb250ZXh0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXVzZVRhYkNvbnRleHREaXJlY3RpdmUgfSBmcm9tICcuL3JldXNlLXRhYi1jb250ZXh0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBSZXVzZVRhYkNvbXBvbmVudCB9IGZyb20gJy4vcmV1c2UtdGFiLmNvbXBvbmVudCc7XG5cbmNvbnN0IENPTVBPTkVOVFMgPSBbUmV1c2VUYWJDb21wb25lbnRdO1xuY29uc3QgTk9FWFBPUlRTID0gW1JldXNlVGFiQ29udGV4dE1lbnVDb21wb25lbnQsIFJldXNlVGFiQ29udGV4dENvbXBvbmVudCwgUmV1c2VUYWJDb250ZXh0RGlyZWN0aXZlXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgUm91dGVyTW9kdWxlLCBEZWxvbkxvY2FsZU1vZHVsZSwgTnpNZW51TW9kdWxlLCBOelRhYnNNb2R1bGUsIE56SWNvbk1vZHVsZSwgT3ZlcmxheU1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogWy4uLkNPTVBPTkVOVFMsIC4uLk5PRVhQT1JUU10sXG4gIGV4cG9ydHM6IENPTVBPTkVOVFNcbn0pXG5leHBvcnQgY2xhc3MgUmV1c2VUYWJNb2R1bGUge31cbiJdfQ==