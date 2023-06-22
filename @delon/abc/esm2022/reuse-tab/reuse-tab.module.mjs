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
import { ReuseTabLocalStorageState, REUSE_TAB_STORAGE_KEY, REUSE_TAB_STORAGE_STATE } from './reuse-tab.state';
import * as i0 from "@angular/core";
const COMPONENTS = [ReuseTabComponent];
const NOEXPORTS = [ReuseTabContextMenuComponent, ReuseTabContextComponent, ReuseTabContextDirective];
class ReuseTabModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.2", ngImport: i0, type: ReuseTabModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.1.2", ngImport: i0, type: ReuseTabModule, declarations: [ReuseTabComponent, ReuseTabContextMenuComponent, ReuseTabContextComponent, ReuseTabContextDirective], imports: [CommonModule, RouterModule, DelonLocaleModule, NzMenuModule, NzTabsModule, NzIconModule, OverlayModule], exports: [ReuseTabComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.1.2", ngImport: i0, type: ReuseTabModule, providers: [
            {
                provide: REUSE_TAB_STORAGE_KEY,
                useValue: '_reuse-tab-state'
            },
            {
                provide: REUSE_TAB_STORAGE_STATE,
                useFactory: () => new ReuseTabLocalStorageState()
            }
        ], imports: [CommonModule, RouterModule, DelonLocaleModule, NzMenuModule, NzTabsModule, NzIconModule, OverlayModule] }); }
}
export { ReuseTabModule };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.2", ngImport: i0, type: ReuseTabModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, RouterModule, DelonLocaleModule, NzMenuModule, NzTabsModule, NzIconModule, OverlayModule],
                    declarations: [...COMPONENTS, ...NOEXPORTS],
                    providers: [
                        {
                            provide: REUSE_TAB_STORAGE_KEY,
                            useValue: '_reuse-tab-state'
                        },
                        {
                            provide: REUSE_TAB_STORAGE_STATE,
                            useFactory: () => new ReuseTabLocalStorageState()
                        }
                    ],
                    exports: COMPONENTS
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9yZXVzZS10YWIvcmV1c2UtdGFiLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNqRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUscUJBQXFCLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7QUFFOUcsTUFBTSxVQUFVLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ3ZDLE1BQU0sU0FBUyxHQUFHLENBQUMsNEJBQTRCLEVBQUUsd0JBQXdCLEVBQUUsd0JBQXdCLENBQUMsQ0FBQztBQUVyRyxNQWVhLGNBQWM7OEdBQWQsY0FBYzsrR0FBZCxjQUFjLGlCQWxCUCxpQkFBaUIsRUFDbEIsNEJBQTRCLEVBQUUsd0JBQXdCLEVBQUUsd0JBQXdCLGFBR3ZGLFlBQVksRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsYUFBYSxhQUo5RixpQkFBaUI7K0dBa0J4QixjQUFjLGFBWmQ7WUFDVDtnQkFDRSxPQUFPLEVBQUUscUJBQXFCO2dCQUM5QixRQUFRLEVBQUUsa0JBQWtCO2FBQzdCO1lBQ0Q7Z0JBQ0UsT0FBTyxFQUFFLHVCQUF1QjtnQkFDaEMsVUFBVSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUkseUJBQXlCLEVBQUU7YUFDbEQ7U0FDRixZQVhTLFlBQVksRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsYUFBYTs7U0FjckcsY0FBYzsyRkFBZCxjQUFjO2tCQWYxQixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsYUFBYSxDQUFDO29CQUNqSCxZQUFZLEVBQUUsQ0FBQyxHQUFHLFVBQVUsRUFBRSxHQUFHLFNBQVMsQ0FBQztvQkFDM0MsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxxQkFBcUI7NEJBQzlCLFFBQVEsRUFBRSxrQkFBa0I7eUJBQzdCO3dCQUNEOzRCQUNFLE9BQU8sRUFBRSx1QkFBdUI7NEJBQ2hDLFVBQVUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLHlCQUF5QixFQUFFO3lCQUNsRDtxQkFDRjtvQkFDRCxPQUFPLEVBQUUsVUFBVTtpQkFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPdmVybGF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBEZWxvbkxvY2FsZU1vZHVsZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBOekljb25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2ljb24nO1xuaW1wb3J0IHsgTnpNZW51TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9tZW51JztcbmltcG9ydCB7IE56VGFic01vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvdGFicyc7XG5cbmltcG9ydCB7IFJldXNlVGFiQ29udGV4dE1lbnVDb21wb25lbnQgfSBmcm9tICcuL3JldXNlLXRhYi1jb250ZXh0LW1lbnUuY29tcG9uZW50JztcbmltcG9ydCB7IFJldXNlVGFiQ29udGV4dENvbXBvbmVudCB9IGZyb20gJy4vcmV1c2UtdGFiLWNvbnRleHQuY29tcG9uZW50JztcbmltcG9ydCB7IFJldXNlVGFiQ29udGV4dERpcmVjdGl2ZSB9IGZyb20gJy4vcmV1c2UtdGFiLWNvbnRleHQuZGlyZWN0aXZlJztcbmltcG9ydCB7IFJldXNlVGFiQ29tcG9uZW50IH0gZnJvbSAnLi9yZXVzZS10YWIuY29tcG9uZW50JztcbmltcG9ydCB7IFJldXNlVGFiTG9jYWxTdG9yYWdlU3RhdGUsIFJFVVNFX1RBQl9TVE9SQUdFX0tFWSwgUkVVU0VfVEFCX1NUT1JBR0VfU1RBVEUgfSBmcm9tICcuL3JldXNlLXRhYi5zdGF0ZSc7XG5cbmNvbnN0IENPTVBPTkVOVFMgPSBbUmV1c2VUYWJDb21wb25lbnRdO1xuY29uc3QgTk9FWFBPUlRTID0gW1JldXNlVGFiQ29udGV4dE1lbnVDb21wb25lbnQsIFJldXNlVGFiQ29udGV4dENvbXBvbmVudCwgUmV1c2VUYWJDb250ZXh0RGlyZWN0aXZlXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgUm91dGVyTW9kdWxlLCBEZWxvbkxvY2FsZU1vZHVsZSwgTnpNZW51TW9kdWxlLCBOelRhYnNNb2R1bGUsIE56SWNvbk1vZHVsZSwgT3ZlcmxheU1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogWy4uLkNPTVBPTkVOVFMsIC4uLk5PRVhQT1JUU10sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IFJFVVNFX1RBQl9TVE9SQUdFX0tFWSxcbiAgICAgIHVzZVZhbHVlOiAnX3JldXNlLXRhYi1zdGF0ZSdcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IFJFVVNFX1RBQl9TVE9SQUdFX1NUQVRFLFxuICAgICAgdXNlRmFjdG9yeTogKCkgPT4gbmV3IFJldXNlVGFiTG9jYWxTdG9yYWdlU3RhdGUoKVxuICAgIH1cbiAgXSxcbiAgZXhwb3J0czogQ09NUE9ORU5UU1xufSlcbmV4cG9ydCBjbGFzcyBSZXVzZVRhYk1vZHVsZSB7fVxuIl19