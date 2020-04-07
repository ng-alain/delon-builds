/**
 * @fileoverview added by tsickle
 * Generated from: page-header.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DelonUtilModule } from '@delon/util';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { PageHeaderComponent } from './page-header.component';
/** @type {?} */
var COMPONENTS = [PageHeaderComponent];
var PageHeaderModule = /** @class */ (function () {
    function PageHeaderModule() {
    }
    PageHeaderModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, RouterModule, DelonUtilModule, NzAffixModule, NzSkeletonModule, NzBreadCrumbModule],
                    declarations: tslib_1.__spread(COMPONENTS),
                    exports: tslib_1.__spread(COMPONENTS),
                },] }
    ];
    return PageHeaderModule;
}());
export { PageHeaderModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1oZWFkZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9wYWdlLWhlYWRlci8iLCJzb3VyY2VzIjpbInBhZ2UtaGVhZGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM5QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFMUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7O0lBRXhELFVBQVUsR0FBRyxDQUFDLG1CQUFtQixDQUFDO0FBRXhDO0lBQUE7SUFLK0IsQ0FBQzs7Z0JBTC9CLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsa0JBQWtCLENBQUM7b0JBQzNHLFlBQVksbUJBQU0sVUFBVSxDQUFDO29CQUM3QixPQUFPLG1CQUFNLFVBQVUsQ0FBQztpQkFDekI7O0lBQzhCLHVCQUFDO0NBQUEsQUFMaEMsSUFLZ0M7U0FBbkIsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRGVsb25VdGlsTW9kdWxlIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgTnpBZmZpeE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvYWZmaXgnO1xuaW1wb3J0IHsgTnpCcmVhZENydW1iTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9icmVhZGNydW1iJztcbmltcG9ydCB7IE56U2tlbGV0b25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3NrZWxldG9uJztcblxuaW1wb3J0IHsgUGFnZUhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vcGFnZS1oZWFkZXIuY29tcG9uZW50JztcblxuY29uc3QgQ09NUE9ORU5UUyA9IFtQYWdlSGVhZGVyQ29tcG9uZW50XTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgUm91dGVyTW9kdWxlLCBEZWxvblV0aWxNb2R1bGUsIE56QWZmaXhNb2R1bGUsIE56U2tlbGV0b25Nb2R1bGUsIE56QnJlYWRDcnVtYk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogWy4uLkNPTVBPTkVOVFNdLFxuICBleHBvcnRzOiBbLi4uQ09NUE9ORU5UU10sXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2VIZWFkZXJNb2R1bGUge31cbiJdfQ==