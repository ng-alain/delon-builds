/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { RangePickerComponent } from './range.component';
import { DatePickerConfig } from './date-picker.config';
/** @type {?} */
var COMPONENTS = [RangePickerComponent];
var DatePickerModule = /** @class */ (function () {
    function DatePickerModule() {
    }
    /**
     * @return {?}
     */
    DatePickerModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: DatePickerModule,
            providers: [DatePickerConfig],
        };
    };
    DatePickerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FormsModule, NgZorroAntdModule],
                    declarations: tslib_1.__spread(COMPONENTS),
                    exports: tslib_1.__spread(COMPONENTS),
                },] }
    ];
    return DatePickerModule;
}());
export { DatePickerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9kYXRlLXBpY2tlci8iLCJzb3VyY2VzIjpbImRhdGUtcGlja2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWxELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztJQUVsRCxVQUFVLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQztBQUV6QztJQUFBO0lBWUEsQ0FBQzs7OztJQU5RLHdCQUFPOzs7SUFBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDO1NBQzlCLENBQUM7SUFDSixDQUFDOztnQkFYRixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsQ0FBQztvQkFDdkQsWUFBWSxtQkFBTSxVQUFVLENBQUM7b0JBQzdCLE9BQU8sbUJBQU0sVUFBVSxDQUFDO2lCQUN6Qjs7SUFRRCx1QkFBQztDQUFBLEFBWkQsSUFZQztTQVBZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOZ1pvcnJvQW50ZE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xuXG5pbXBvcnQgeyBSYW5nZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vcmFuZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGVQaWNrZXJDb25maWcgfSBmcm9tICcuL2RhdGUtcGlja2VyLmNvbmZpZyc7XG5cbmNvbnN0IENPTVBPTkVOVFMgPSBbUmFuZ2VQaWNrZXJDb21wb25lbnRdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgTmdab3Jyb0FudGRNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRTXSxcbiAgZXhwb3J0czogWy4uLkNPTVBPTkVOVFNdLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlUGlja2VyTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBEYXRlUGlja2VyTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbRGF0ZVBpY2tlckNvbmZpZ10sXG4gICAgfTtcbiAgfVxufVxuIl19