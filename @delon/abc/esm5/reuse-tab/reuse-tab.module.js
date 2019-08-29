/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
/** @type {?} */
var COMPONENTS = [ReuseTabComponent];
/** @type {?} */
var NOEXPORTS = [ReuseTabContextMenuComponent, ReuseTabContextComponent, ReuseTabContextDirective];
var ReuseTabModule = /** @class */ (function () {
    function ReuseTabModule() {
    }
    ReuseTabModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, RouterModule, DelonLocaleModule, NzMenuModule, NzTabsModule, NzIconModule, OverlayModule],
                    declarations: tslib_1.__spread(COMPONENTS, NOEXPORTS),
                    entryComponents: [ReuseTabContextMenuComponent],
                    exports: tslib_1.__spread(COMPONENTS),
                },] }
    ];
    return ReuseTabModule;
}());
export { ReuseTabModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvcmV1c2UtdGFiLyIsInNvdXJjZXMiOlsicmV1c2UtdGFiLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ2pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztJQUVwRCxVQUFVLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQzs7SUFDaEMsU0FBUyxHQUFHLENBQUMsNEJBQTRCLEVBQUUsd0JBQXdCLEVBQUUsd0JBQXdCLENBQUM7QUFFcEc7SUFBQTtJQU02QixDQUFDOztnQkFON0IsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsYUFBYSxDQUFDO29CQUNqSCxZQUFZLG1CQUFNLFVBQVUsRUFBSyxTQUFTLENBQUM7b0JBQzNDLGVBQWUsRUFBRSxDQUFDLDRCQUE0QixDQUFDO29CQUMvQyxPQUFPLG1CQUFNLFVBQVUsQ0FBQztpQkFDekI7O0lBQzRCLHFCQUFDO0NBQUEsQUFOOUIsSUFNOEI7U0FBakIsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBEZWxvbkxvY2FsZU1vZHVsZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBOekljb25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2ljb24nO1xuaW1wb3J0IHsgTnpNZW51TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9tZW51JztcbmltcG9ydCB7IE56VGFic01vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvdGFicyc7XG5cbmltcG9ydCB7IFJldXNlVGFiQ29udGV4dE1lbnVDb21wb25lbnQgfSBmcm9tICcuL3JldXNlLXRhYi1jb250ZXh0LW1lbnUuY29tcG9uZW50JztcbmltcG9ydCB7IFJldXNlVGFiQ29udGV4dENvbXBvbmVudCB9IGZyb20gJy4vcmV1c2UtdGFiLWNvbnRleHQuY29tcG9uZW50JztcbmltcG9ydCB7IFJldXNlVGFiQ29udGV4dERpcmVjdGl2ZSB9IGZyb20gJy4vcmV1c2UtdGFiLWNvbnRleHQuZGlyZWN0aXZlJztcbmltcG9ydCB7IFJldXNlVGFiQ29tcG9uZW50IH0gZnJvbSAnLi9yZXVzZS10YWIuY29tcG9uZW50JztcblxuY29uc3QgQ09NUE9ORU5UUyA9IFtSZXVzZVRhYkNvbXBvbmVudF07XG5jb25zdCBOT0VYUE9SVFMgPSBbUmV1c2VUYWJDb250ZXh0TWVudUNvbXBvbmVudCwgUmV1c2VUYWJDb250ZXh0Q29tcG9uZW50LCBSZXVzZVRhYkNvbnRleHREaXJlY3RpdmVdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBSb3V0ZXJNb2R1bGUsIERlbG9uTG9jYWxlTW9kdWxlLCBOek1lbnVNb2R1bGUsIE56VGFic01vZHVsZSwgTnpJY29uTW9kdWxlLCBPdmVybGF5TW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbLi4uQ09NUE9ORU5UUywgLi4uTk9FWFBPUlRTXSxcbiAgZW50cnlDb21wb25lbnRzOiBbUmV1c2VUYWJDb250ZXh0TWVudUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFsuLi5DT01QT05FTlRTXSxcbn0pXG5leHBvcnQgY2xhc3MgUmV1c2VUYWJNb2R1bGUge31cbiJdfQ==