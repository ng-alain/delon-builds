/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DelonUtilModule } from '@delon/util';
import { SGContainerComponent } from './grid-container.component';
import { SGComponent } from './grid.component';
import { SGConfig } from './grid.config';
/** @type {?} */
var COMPONENTS = [SGContainerComponent, SGComponent];
var SGModule = /** @class */ (function () {
    function SGModule() {
    }
    /**
     * @return {?}
     */
    SGModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: SGModule, providers: [SGConfig] };
    };
    SGModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, DelonUtilModule],
                    declarations: tslib_1.__spread(COMPONENTS),
                    exports: tslib_1.__spread(COMPONENTS),
                },] }
    ];
    return SGModule;
}());
export { SGModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL2dyaWQvIiwic291cmNlcyI6WyJncmlkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTlDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDOztJQUVuQyxVQUFVLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxXQUFXLENBQUM7QUFFdEQ7SUFBQTtJQVNBLENBQUM7Ozs7SUFIUSxnQkFBTzs7O0lBQWQ7UUFDRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO0lBQ3ZELENBQUM7O2dCQVJGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZUFBZSxDQUFDO29CQUN4QyxZQUFZLG1CQUFNLFVBQVUsQ0FBQztvQkFDN0IsT0FBTyxtQkFBTSxVQUFVLENBQUM7aUJBQ3pCOztJQUtELGVBQUM7Q0FBQSxBQVRELElBU0M7U0FKWSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEZWxvblV0aWxNb2R1bGUgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbmltcG9ydCB7IFNHQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9ncmlkLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU0dDb21wb25lbnQgfSBmcm9tICcuL2dyaWQuY29tcG9uZW50JztcbmltcG9ydCB7IFNHQ29uZmlnIH0gZnJvbSAnLi9ncmlkLmNvbmZpZyc7XG5cbmNvbnN0IENPTVBPTkVOVFMgPSBbU0dDb250YWluZXJDb21wb25lbnQsIFNHQ29tcG9uZW50XTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRGVsb25VdGlsTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbLi4uQ09NUE9ORU5UU10sXG4gIGV4cG9ydHM6IFsuLi5DT01QT05FTlRTXSxcbn0pXG5leHBvcnQgY2xhc3MgU0dNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4geyBuZ01vZHVsZTogU0dNb2R1bGUsIHByb3ZpZGVyczogW1NHQ29uZmlnXSB9O1xuICB9XG59XG4iXX0=