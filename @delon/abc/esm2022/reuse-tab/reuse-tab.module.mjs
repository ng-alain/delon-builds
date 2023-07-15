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
class ReuseTabModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: ReuseTabModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.1.5", ngImport: i0, type: ReuseTabModule, declarations: [ReuseTabComponent, ReuseTabContextMenuComponent, ReuseTabContextComponent, ReuseTabContextDirective], imports: [CommonModule, RouterModule, DelonLocaleModule, NzMenuModule, NzTabsModule, NzIconModule, OverlayModule], exports: [ReuseTabComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: ReuseTabModule, providers: [
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
        ], imports: [CommonModule, RouterModule, DelonLocaleModule, NzMenuModule, NzTabsModule, NzIconModule, OverlayModule] }); }
}
export { ReuseTabModule };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: ReuseTabModule, decorators: [{
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
                        },
                        {
                            provide: REUSE_TAB_CACHED_MANAGER,
                            useFactory: () => new ReuseTabCachedManagerFactory()
                        }
                    ],
                    exports: COMPONENTS
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9yZXVzZS10YWIvcmV1c2UtdGFiLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNqRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMzRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUscUJBQXFCLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7QUFFOUcsTUFBTSxVQUFVLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ3ZDLE1BQU0sU0FBUyxHQUFHLENBQUMsNEJBQTRCLEVBQUUsd0JBQXdCLEVBQUUsd0JBQXdCLENBQUMsQ0FBQztBQUVyRyxNQW1CYSxjQUFjOzhHQUFkLGNBQWM7K0dBQWQsY0FBYyxpQkF0QlAsaUJBQWlCLEVBQ2xCLDRCQUE0QixFQUFFLHdCQUF3QixFQUFFLHdCQUF3QixhQUd2RixZQUFZLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLGFBQWEsYUFKOUYsaUJBQWlCOytHQXNCeEIsY0FBYyxhQWhCZDtZQUNUO2dCQUNFLE9BQU8sRUFBRSxxQkFBcUI7Z0JBQzlCLFFBQVEsRUFBRSxrQkFBa0I7YUFDN0I7WUFDRDtnQkFDRSxPQUFPLEVBQUUsdUJBQXVCO2dCQUNoQyxVQUFVLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSx5QkFBeUIsRUFBRTthQUNsRDtZQUNEO2dCQUNFLE9BQU8sRUFBRSx3QkFBd0I7Z0JBQ2pDLFVBQVUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLDRCQUE0QixFQUFFO2FBQ3JEO1NBQ0YsWUFmUyxZQUFZLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLGFBQWE7O1NBa0JyRyxjQUFjOzJGQUFkLGNBQWM7a0JBbkIxQixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsYUFBYSxDQUFDO29CQUNqSCxZQUFZLEVBQUUsQ0FBQyxHQUFHLFVBQVUsRUFBRSxHQUFHLFNBQVMsQ0FBQztvQkFDM0MsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxxQkFBcUI7NEJBQzlCLFFBQVEsRUFBRSxrQkFBa0I7eUJBQzdCO3dCQUNEOzRCQUNFLE9BQU8sRUFBRSx1QkFBdUI7NEJBQ2hDLFVBQVUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLHlCQUF5QixFQUFFO3lCQUNsRDt3QkFDRDs0QkFDRSxPQUFPLEVBQUUsd0JBQXdCOzRCQUNqQyxVQUFVLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSw0QkFBNEIsRUFBRTt5QkFDckQ7cUJBQ0Y7b0JBQ0QsT0FBTyxFQUFFLFVBQVU7aUJBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgRGVsb25Mb2NhbGVNb2R1bGUgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgTnpJY29uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcbmltcG9ydCB7IE56TWVudU1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvbWVudSc7XG5pbXBvcnQgeyBOelRhYnNNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3RhYnMnO1xuXG5pbXBvcnQgeyBSZXVzZVRhYkNvbnRleHRNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9yZXVzZS10YWItY29udGV4dC1tZW51LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXVzZVRhYkNvbnRleHRDb21wb25lbnQgfSBmcm9tICcuL3JldXNlLXRhYi1jb250ZXh0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXVzZVRhYkNvbnRleHREaXJlY3RpdmUgfSBmcm9tICcuL3JldXNlLXRhYi1jb250ZXh0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBSRVVTRV9UQUJfQ0FDSEVEX01BTkFHRVIsIFJldXNlVGFiQ2FjaGVkTWFuYWdlckZhY3RvcnkgfSBmcm9tICcuL3JldXNlLXRhYi5jYWNoZSc7XG5pbXBvcnQgeyBSZXVzZVRhYkNvbXBvbmVudCB9IGZyb20gJy4vcmV1c2UtdGFiLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXVzZVRhYkxvY2FsU3RvcmFnZVN0YXRlLCBSRVVTRV9UQUJfU1RPUkFHRV9LRVksIFJFVVNFX1RBQl9TVE9SQUdFX1NUQVRFIH0gZnJvbSAnLi9yZXVzZS10YWIuc3RhdGUnO1xuXG5jb25zdCBDT01QT05FTlRTID0gW1JldXNlVGFiQ29tcG9uZW50XTtcbmNvbnN0IE5PRVhQT1JUUyA9IFtSZXVzZVRhYkNvbnRleHRNZW51Q29tcG9uZW50LCBSZXVzZVRhYkNvbnRleHRDb21wb25lbnQsIFJldXNlVGFiQ29udGV4dERpcmVjdGl2ZV07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFJvdXRlck1vZHVsZSwgRGVsb25Mb2NhbGVNb2R1bGUsIE56TWVudU1vZHVsZSwgTnpUYWJzTW9kdWxlLCBOekljb25Nb2R1bGUsIE92ZXJsYXlNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRTLCAuLi5OT0VYUE9SVFNdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBSRVVTRV9UQUJfU1RPUkFHRV9LRVksXG4gICAgICB1c2VWYWx1ZTogJ19yZXVzZS10YWItc3RhdGUnXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBSRVVTRV9UQUJfU1RPUkFHRV9TVEFURSxcbiAgICAgIHVzZUZhY3Rvcnk6ICgpID0+IG5ldyBSZXVzZVRhYkxvY2FsU3RvcmFnZVN0YXRlKClcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IFJFVVNFX1RBQl9DQUNIRURfTUFOQUdFUixcbiAgICAgIHVzZUZhY3Rvcnk6ICgpID0+IG5ldyBSZXVzZVRhYkNhY2hlZE1hbmFnZXJGYWN0b3J5KClcbiAgICB9XG4gIF0sXG4gIGV4cG9ydHM6IENPTVBPTkVOVFNcbn0pXG5leHBvcnQgY2xhc3MgUmV1c2VUYWJNb2R1bGUge31cbiJdfQ==