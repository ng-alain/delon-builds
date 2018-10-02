/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DelonUtilModule } from '@delon/util';
import { FullContentComponent } from './full-content.component';
import { FullContentToggleDirective } from './full-content-toggle.directive';
import { FullContentService } from './full-content.service';
/** @type {?} */
var COMPONENTS = [FullContentComponent, FullContentToggleDirective];
var FullContentModule = /** @class */ (function () {
    function FullContentModule() {
    }
    /**
     * @return {?}
     */
    FullContentModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: FullContentModule,
            providers: [FullContentService],
        };
    };
    FullContentModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, DelonUtilModule],
                    declarations: tslib_1.__spread(COMPONENTS),
                    exports: tslib_1.__spread(COMPONENTS),
                },] }
    ];
    return FullContentModule;
}());
export { FullContentModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbC1jb250ZW50Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvZnVsbC1jb250ZW50LyIsInNvdXJjZXMiOlsiZnVsbC1jb250ZW50Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTlDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQUU1RCxJQUFNLFVBQVUsR0FBRyxDQUFDLG9CQUFvQixFQUFFLDBCQUEwQixDQUFDLENBQUM7Ozs7Ozs7SUFRN0QseUJBQU87OztJQUFkO1FBQ0UsT0FBTztZQUNMLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsU0FBUyxFQUFFLENBQUMsa0JBQWtCLENBQUM7U0FDaEMsQ0FBQztLQUNIOztnQkFYRixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGVBQWUsQ0FBQztvQkFDeEMsWUFBWSxtQkFBTSxVQUFVLENBQUM7b0JBQzdCLE9BQU8sbUJBQU0sVUFBVSxDQUFDO2lCQUN6Qjs7NEJBZEQ7O1NBZWEsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRGVsb25VdGlsTW9kdWxlIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xyXG5cclxuaW1wb3J0IHsgRnVsbENvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuL2Z1bGwtY29udGVudC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGdWxsQ29udGVudFRvZ2dsZURpcmVjdGl2ZSB9IGZyb20gJy4vZnVsbC1jb250ZW50LXRvZ2dsZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBGdWxsQ29udGVudFNlcnZpY2UgfSBmcm9tICcuL2Z1bGwtY29udGVudC5zZXJ2aWNlJztcclxuXHJcbmNvbnN0IENPTVBPTkVOVFMgPSBbRnVsbENvbnRlbnRDb21wb25lbnQsIEZ1bGxDb250ZW50VG9nZ2xlRGlyZWN0aXZlXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRGVsb25VdGlsTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRTXSxcclxuICBleHBvcnRzOiBbLi4uQ09NUE9ORU5UU10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGdWxsQ29udGVudE1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogRnVsbENvbnRlbnRNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW0Z1bGxDb250ZW50U2VydmljZV0sXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=