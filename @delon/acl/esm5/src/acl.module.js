/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DelonACLConfig } from './acl.config';
import { ACLGuard } from './acl-guard';
import { ACLService } from './acl.service';
import { ACLDirective } from './acl.directive';
/** @type {?} */
var SERVICES = [ACLService, ACLGuard];
/** @type {?} */
var COMPONENTS = [ACLDirective];
var DelonACLModule = /** @class */ (function () {
    function DelonACLModule() {
    }
    /**
     * @return {?}
     */
    DelonACLModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: DelonACLModule,
            providers: tslib_1.__spread([DelonACLConfig], SERVICES),
        };
    };
    DelonACLModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: tslib_1.__spread(COMPONENTS),
                    exports: tslib_1.__spread(COMPONENTS),
                },] }
    ];
    return DelonACLModule;
}());
export { DelonACLModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hY2wvIiwic291cmNlcyI6WyJzcmMvYWNsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzlDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDdkMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBRS9DLElBQU0sUUFBUSxHQUFHLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDOztBQUN4QyxJQUFNLFVBQVUsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDOzs7Ozs7O0lBUXpCLHNCQUFPOzs7SUFBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsY0FBYztZQUN4QixTQUFTLG9CQUFHLGNBQWMsR0FBSyxRQUFRLENBQUM7U0FDekMsQ0FBQztLQUNIOztnQkFYRixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUN2QixZQUFZLG1CQUFNLFVBQVUsQ0FBQztvQkFDN0IsT0FBTyxtQkFBTSxVQUFVLENBQUM7aUJBQ3pCOzt5QkFmRDs7U0FnQmEsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBEZWxvbkFDTENvbmZpZyB9IGZyb20gJy4vYWNsLmNvbmZpZyc7XG5pbXBvcnQgeyBBQ0xHdWFyZCB9IGZyb20gJy4vYWNsLWd1YXJkJztcbmltcG9ydCB7IEFDTFNlcnZpY2UgfSBmcm9tICcuL2FjbC5zZXJ2aWNlJztcbmltcG9ydCB7IEFDTERpcmVjdGl2ZSB9IGZyb20gJy4vYWNsLmRpcmVjdGl2ZSc7XG5cbmNvbnN0IFNFUlZJQ0VTID0gW0FDTFNlcnZpY2UsIEFDTEd1YXJkXTtcbmNvbnN0IENPTVBPTkVOVFMgPSBbQUNMRGlyZWN0aXZlXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogWy4uLkNPTVBPTkVOVFNdLFxuICBleHBvcnRzOiBbLi4uQ09NUE9ORU5UU10sXG59KVxuZXhwb3J0IGNsYXNzIERlbG9uQUNMTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBEZWxvbkFDTE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW0RlbG9uQUNMQ29uZmlnLCAuLi5TRVJWSUNFU10sXG4gICAgfTtcbiAgfVxufVxuIl19