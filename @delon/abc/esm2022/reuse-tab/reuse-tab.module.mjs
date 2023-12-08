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
import { REUSE_TAB_CACHED_MANAGER, ReuseTabCachedManagerFactory } from './reuse-tab.cache';
import { ReuseTabComponent } from './reuse-tab.component';
import { ReuseTabLocalStorageState, REUSE_TAB_STORAGE_KEY, REUSE_TAB_STORAGE_STATE } from './reuse-tab.state';
import * as i0 from "@angular/core";
const COMPONENTS = [ReuseTabComponent];
const NOEXPORTS = [ReuseTabContextMenuComponent, ReuseTabContextComponent, ReuseTabContextDirective];
export class ReuseTabModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: ReuseTabModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.0.6", ngImport: i0, type: ReuseTabModule, imports: [CommonModule,
            RouterModule,
            DelonLocaleModule,
            NzMenuModule,
            NzTabsModule,
            NzIconModule,
            OverlayModule, ReuseTabComponent, ReuseTabContextMenuComponent, ReuseTabContextComponent, ReuseTabContextDirective], exports: [ReuseTabComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: ReuseTabModule, providers: [
            {
                provide: REUSE_TAB_STORAGE_KEY,
                useValue: '_reuse-tab-state'
            },
            {
                provide: REUSE_TAB_STORAGE_STATE,
                useFactory: () => new ReuseTabLocalStorageState()
            },
            {
                provide: REUSE_TAB_CACHED_MANAGER,
                useFactory: () => new ReuseTabCachedManagerFactory()
            }
        ], imports: [CommonModule,
            RouterModule,
            DelonLocaleModule,
            NzMenuModule,
            NzTabsModule,
            NzIconModule,
            OverlayModule, COMPONENTS, ReuseTabContextMenuComponent] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: ReuseTabModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        RouterModule,
                        DelonLocaleModule,
                        NzMenuModule,
                        NzTabsModule,
                        NzIconModule,
                        OverlayModule,
                        ...COMPONENTS,
                        ...NOEXPORTS
                    ],
                    providers: [
                        {
                            provide: REUSE_TAB_STORAGE_KEY,
                            useValue: '_reuse-tab-state'
                        },
                        {
                            provide: REUSE_TAB_STORAGE_STATE,
                            useFactory: () => new ReuseTabLocalStorageState()
                        },
                        {
                            provide: REUSE_TAB_CACHED_MANAGER,
                            useFactory: () => new ReuseTabCachedManagerFactory()
                        }
                    ],
                    exports: COMPONENTS
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9yZXVzZS10YWIvcmV1c2UtdGFiLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNqRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMzRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUscUJBQXFCLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7QUFFOUcsTUFBTSxVQUFVLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ3ZDLE1BQU0sU0FBUyxHQUFHLENBQUMsNEJBQTRCLEVBQUUsd0JBQXdCLEVBQUUsd0JBQXdCLENBQUMsQ0FBQztBQThCckcsTUFBTSxPQUFPLGNBQWM7OEdBQWQsY0FBYzsrR0FBZCxjQUFjLFlBMUJ2QixZQUFZO1lBQ1osWUFBWTtZQUNaLGlCQUFpQjtZQUNqQixZQUFZO1lBQ1osWUFBWTtZQUNaLFlBQVk7WUFDWixhQUFhLEVBWEcsaUJBQWlCLEVBQ2xCLDRCQUE0QixFQUFFLHdCQUF3QixFQUFFLHdCQUF3QixhQUQvRSxpQkFBaUI7K0dBK0J4QixjQUFjLGFBaEJkO1lBQ1Q7Z0JBQ0UsT0FBTyxFQUFFLHFCQUFxQjtnQkFDOUIsUUFBUSxFQUFFLGtCQUFrQjthQUM3QjtZQUNEO2dCQUNFLE9BQU8sRUFBRSx1QkFBdUI7Z0JBQ2hDLFVBQVUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLHlCQUF5QixFQUFFO2FBQ2xEO1lBQ0Q7Z0JBQ0UsT0FBTyxFQUFFLHdCQUF3QjtnQkFDakMsVUFBVSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksNEJBQTRCLEVBQUU7YUFDckQ7U0FDRixZQXZCQyxZQUFZO1lBQ1osWUFBWTtZQUNaLGlCQUFpQjtZQUNqQixZQUFZO1lBQ1osWUFBWTtZQUNaLFlBQVk7WUFDWixhQUFhLEVBQ1YsVUFBVSxFQVhFLDRCQUE0Qjs7MkZBOEJsQyxjQUFjO2tCQTVCMUIsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixZQUFZO3dCQUNaLGlCQUFpQjt3QkFDakIsWUFBWTt3QkFDWixZQUFZO3dCQUNaLFlBQVk7d0JBQ1osYUFBYTt3QkFDYixHQUFHLFVBQVU7d0JBQ2IsR0FBRyxTQUFTO3FCQUNiO29CQUNELFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUscUJBQXFCOzRCQUM5QixRQUFRLEVBQUUsa0JBQWtCO3lCQUM3Qjt3QkFDRDs0QkFDRSxPQUFPLEVBQUUsdUJBQXVCOzRCQUNoQyxVQUFVLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSx5QkFBeUIsRUFBRTt5QkFDbEQ7d0JBQ0Q7NEJBQ0UsT0FBTyxFQUFFLHdCQUF3Qjs0QkFDakMsVUFBVSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksNEJBQTRCLEVBQUU7eUJBQ3JEO3FCQUNGO29CQUNELE9BQU8sRUFBRSxVQUFVO2lCQUNwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IERlbG9uTG9jYWxlTW9kdWxlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IE56SWNvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaWNvbic7XG5pbXBvcnQgeyBOek1lbnVNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL21lbnUnO1xuaW1wb3J0IHsgTnpUYWJzTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC90YWJzJztcblxuaW1wb3J0IHsgUmV1c2VUYWJDb250ZXh0TWVudUNvbXBvbmVudCB9IGZyb20gJy4vcmV1c2UtdGFiLWNvbnRleHQtbWVudS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmV1c2VUYWJDb250ZXh0Q29tcG9uZW50IH0gZnJvbSAnLi9yZXVzZS10YWItY29udGV4dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmV1c2VUYWJDb250ZXh0RGlyZWN0aXZlIH0gZnJvbSAnLi9yZXVzZS10YWItY29udGV4dC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgUkVVU0VfVEFCX0NBQ0hFRF9NQU5BR0VSLCBSZXVzZVRhYkNhY2hlZE1hbmFnZXJGYWN0b3J5IH0gZnJvbSAnLi9yZXVzZS10YWIuY2FjaGUnO1xuaW1wb3J0IHsgUmV1c2VUYWJDb21wb25lbnQgfSBmcm9tICcuL3JldXNlLXRhYi5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmV1c2VUYWJMb2NhbFN0b3JhZ2VTdGF0ZSwgUkVVU0VfVEFCX1NUT1JBR0VfS0VZLCBSRVVTRV9UQUJfU1RPUkFHRV9TVEFURSB9IGZyb20gJy4vcmV1c2UtdGFiLnN0YXRlJztcblxuY29uc3QgQ09NUE9ORU5UUyA9IFtSZXVzZVRhYkNvbXBvbmVudF07XG5jb25zdCBOT0VYUE9SVFMgPSBbUmV1c2VUYWJDb250ZXh0TWVudUNvbXBvbmVudCwgUmV1c2VUYWJDb250ZXh0Q29tcG9uZW50LCBSZXVzZVRhYkNvbnRleHREaXJlY3RpdmVdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBEZWxvbkxvY2FsZU1vZHVsZSxcbiAgICBOek1lbnVNb2R1bGUsXG4gICAgTnpUYWJzTW9kdWxlLFxuICAgIE56SWNvbk1vZHVsZSxcbiAgICBPdmVybGF5TW9kdWxlLFxuICAgIC4uLkNPTVBPTkVOVFMsXG4gICAgLi4uTk9FWFBPUlRTXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IFJFVVNFX1RBQl9TVE9SQUdFX0tFWSxcbiAgICAgIHVzZVZhbHVlOiAnX3JldXNlLXRhYi1zdGF0ZSdcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IFJFVVNFX1RBQl9TVE9SQUdFX1NUQVRFLFxuICAgICAgdXNlRmFjdG9yeTogKCkgPT4gbmV3IFJldXNlVGFiTG9jYWxTdG9yYWdlU3RhdGUoKVxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogUkVVU0VfVEFCX0NBQ0hFRF9NQU5BR0VSLFxuICAgICAgdXNlRmFjdG9yeTogKCkgPT4gbmV3IFJldXNlVGFiQ2FjaGVkTWFuYWdlckZhY3RvcnkoKVxuICAgIH1cbiAgXSxcbiAgZXhwb3J0czogQ09NUE9ORU5UU1xufSlcbmV4cG9ydCBjbGFzcyBSZXVzZVRhYk1vZHVsZSB7fVxuIl19