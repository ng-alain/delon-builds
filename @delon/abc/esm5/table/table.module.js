/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { DelonACLModule } from '@delon/acl';
import { DelonUtilModule } from '@delon/util';
import { STRowDirective } from './table-row.directive';
import { STComponent } from './table.component';
import { STConfig } from './table.config';
/** @type {?} */
var COMPONENTS = [STComponent, STRowDirective];
var STModule = /** @class */ (function () {
    function STModule() {
    }
    /**
     * @return {?}
     */
    STModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: STModule, providers: [STConfig] };
    };
    STModule.decorators = [
        { type: NgModule, args: [{
                    schemas: [NO_ERRORS_SCHEMA],
                    imports: [
                        CommonModule,
                        FormsModule,
                        DelonUtilModule,
                        DelonACLModule,
                        NgZorroAntdModule,
                    ],
                    declarations: tslib_1.__spread(COMPONENTS),
                    exports: tslib_1.__spread(COMPONENTS),
                },] }
    ];
    return STModule;
}());
export { STModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy90YWJsZS8iLCJzb3VyY2VzIjpbInRhYmxlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQXVCLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWxELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDNUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU5QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7SUFFcEMsVUFBVSxHQUFHLENBQUMsV0FBVyxFQUFFLGNBQWMsQ0FBQztBQUVoRDtJQUFBO0lBZ0JBLENBQUM7Ozs7SUFIUSxnQkFBTzs7O0lBQWQ7UUFDRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO0lBQ3ZELENBQUM7O2dCQWZGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztvQkFDM0IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxlQUFlO3dCQUNmLGNBQWM7d0JBQ2QsaUJBQWlCO3FCQUNsQjtvQkFDRCxZQUFZLG1CQUFNLFVBQVUsQ0FBQztvQkFDN0IsT0FBTyxtQkFBTSxVQUFVLENBQUM7aUJBQ3pCOztJQUtELGVBQUM7Q0FBQSxBQWhCRCxJQWdCQztTQUpZLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmdab3Jyb0FudGRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkJztcblxuaW1wb3J0IHsgRGVsb25BQ0xNb2R1bGUgfSBmcm9tICdAZGVsb24vYWNsJztcbmltcG9ydCB7IERlbG9uVXRpbE1vZHVsZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuaW1wb3J0IHsgU1RSb3dEaXJlY3RpdmUgfSBmcm9tICcuL3RhYmxlLXJvdy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU1RDb21wb25lbnQgfSBmcm9tICcuL3RhYmxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTVENvbmZpZyB9IGZyb20gJy4vdGFibGUuY29uZmlnJztcblxuY29uc3QgQ09NUE9ORU5UUyA9IFtTVENvbXBvbmVudCwgU1RSb3dEaXJlY3RpdmVdO1xuXG5ATmdNb2R1bGUoe1xuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgRGVsb25VdGlsTW9kdWxlLFxuICAgIERlbG9uQUNMTW9kdWxlLFxuICAgIE5nWm9ycm9BbnRkTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRTXSxcbiAgZXhwb3J0czogWy4uLkNPTVBPTkVOVFNdLFxufSlcbmV4cG9ydCBjbGFzcyBTVE1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7IG5nTW9kdWxlOiBTVE1vZHVsZSwgcHJvdmlkZXJzOiBbU1RDb25maWddIH07XG4gIH1cbn1cbiJdfQ==