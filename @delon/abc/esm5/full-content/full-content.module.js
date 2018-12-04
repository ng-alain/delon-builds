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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbC1jb250ZW50Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvZnVsbC1jb250ZW50LyIsInNvdXJjZXMiOlsiZnVsbC1jb250ZW50Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTlDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQUU1RCxJQUFNLFVBQVUsR0FBRyxDQUFDLG9CQUFvQixFQUFFLDBCQUEwQixDQUFDLENBQUM7Ozs7Ozs7SUFRN0QseUJBQU87OztJQUFkO1FBQ0UsT0FBTztZQUNMLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsU0FBUyxFQUFFLENBQUMsa0JBQWtCLENBQUM7U0FDaEMsQ0FBQztLQUNIOztnQkFYRixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGVBQWUsQ0FBQztvQkFDeEMsWUFBWSxtQkFBTSxVQUFVLENBQUM7b0JBQzdCLE9BQU8sbUJBQU0sVUFBVSxDQUFDO2lCQUN6Qjs7NEJBZEQ7O1NBZWEsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEZWxvblV0aWxNb2R1bGUgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbmltcG9ydCB7IEZ1bGxDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi9mdWxsLWNvbnRlbnQuY29tcG9uZW50JztcbmltcG9ydCB7IEZ1bGxDb250ZW50VG9nZ2xlRGlyZWN0aXZlIH0gZnJvbSAnLi9mdWxsLWNvbnRlbnQtdG9nZ2xlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBGdWxsQ29udGVudFNlcnZpY2UgfSBmcm9tICcuL2Z1bGwtY29udGVudC5zZXJ2aWNlJztcblxuY29uc3QgQ09NUE9ORU5UUyA9IFtGdWxsQ29udGVudENvbXBvbmVudCwgRnVsbENvbnRlbnRUb2dnbGVEaXJlY3RpdmVdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBEZWxvblV0aWxNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRTXSxcbiAgZXhwb3J0czogWy4uLkNPTVBPTkVOVFNdLFxufSlcbmV4cG9ydCBjbGFzcyBGdWxsQ29udGVudE1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRnVsbENvbnRlbnRNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtGdWxsQ29udGVudFNlcnZpY2VdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==