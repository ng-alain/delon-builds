/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DelonLocaleModule } from '@delon/theme';
import { DelonUtilModule } from '@delon/util';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ExceptionComponent } from './exception.component';
/** @type {?} */
var COMPONENTS = [ExceptionComponent];
var ExceptionModule = /** @class */ (function () {
    function ExceptionModule() {
    }
    /**
     * @return {?}
     */
    ExceptionModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: ExceptionModule, providers: [] };
    };
    ExceptionModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        RouterModule,
                        DelonUtilModule,
                        DelonLocaleModule,
                        NgZorroAntdModule,
                    ],
                    declarations: tslib_1.__spread(COMPONENTS),
                    exports: tslib_1.__spread(COMPONENTS),
                },] }
    ];
    return ExceptionModule;
}());
export { ExceptionModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZXB0aW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvZXhjZXB0aW9uLyIsInNvdXJjZXMiOlsiZXhjZXB0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ2pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDOUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWxELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztJQUVyRCxVQUFVLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQztBQUV2QztJQUFBO0lBZUEsQ0FBQzs7OztJQUhRLHVCQUFPOzs7SUFBZDtRQUNFLE9BQU8sRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsQ0FBQztJQUN0RCxDQUFDOztnQkFkRixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osWUFBWTt3QkFDWixlQUFlO3dCQUNmLGlCQUFpQjt3QkFDakIsaUJBQWlCO3FCQUNsQjtvQkFDRCxZQUFZLG1CQUFNLFVBQVUsQ0FBQztvQkFDN0IsT0FBTyxtQkFBTSxVQUFVLENBQUM7aUJBQ3pCOztJQUtELHNCQUFDO0NBQUEsQUFmRCxJQWVDO1NBSlksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgRGVsb25Mb2NhbGVNb2R1bGUgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgRGVsb25VdGlsTW9kdWxlIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgTmdab3Jyb0FudGRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkJztcblxuaW1wb3J0IHsgRXhjZXB0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9leGNlcHRpb24uY29tcG9uZW50JztcblxuY29uc3QgQ09NUE9ORU5UUyA9IFtFeGNlcHRpb25Db21wb25lbnRdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBEZWxvblV0aWxNb2R1bGUsXG4gICAgRGVsb25Mb2NhbGVNb2R1bGUsXG4gICAgTmdab3Jyb0FudGRNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogWy4uLkNPTVBPTkVOVFNdLFxuICBleHBvcnRzOiBbLi4uQ09NUE9ORU5UU10sXG59KVxuZXhwb3J0IGNsYXNzIEV4Y2VwdGlvbk1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7IG5nTW9kdWxlOiBFeGNlcHRpb25Nb2R1bGUsIHByb3ZpZGVyczogW10gfTtcbiAgfVxufVxuIl19