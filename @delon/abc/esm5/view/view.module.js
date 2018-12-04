/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObserversModule } from '@angular/cdk/observers';
import { SVConfig } from './view.config';
import { SVContainerComponent } from './view-container.component';
import { SVTitleComponent } from './view-title.component';
import { SVComponent } from './view.component';
/** @type {?} */
var COMPONENTS = [SVContainerComponent, SVComponent, SVTitleComponent];
var SVModule = /** @class */ (function () {
    function SVModule() {
    }
    /**
     * @return {?}
     */
    SVModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: SVModule, providers: [SVConfig] };
    };
    SVModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, ObserversModule],
                    declarations: tslib_1.__spread(COMPONENTS),
                    exports: tslib_1.__spread(COMPONENTS),
                },] }
    ];
    return SVModule;
}());
export { SVModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL3ZpZXcvIiwic291cmNlcyI6WyJ2aWV3Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFekQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7O0FBRS9DLElBQU0sVUFBVSxHQUFHLENBQUMsb0JBQW9CLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixDQUFDLENBQUM7Ozs7Ozs7SUFRaEUsZ0JBQU87OztJQUFkO1FBQ0UsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztLQUN0RDs7Z0JBUkYsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxlQUFlLENBQUM7b0JBQ3hDLFlBQVksbUJBQU0sVUFBVSxDQUFDO29CQUM3QixPQUFPLG1CQUFNLFVBQVUsQ0FBQztpQkFDekI7O21CQWZEOztTQWdCYSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBPYnNlcnZlcnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb2JzZXJ2ZXJzJztcblxuaW1wb3J0IHsgU1ZDb25maWcgfSBmcm9tICcuL3ZpZXcuY29uZmlnJztcbmltcG9ydCB7IFNWQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi92aWV3LWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU1ZUaXRsZUNvbXBvbmVudCB9IGZyb20gJy4vdmlldy10aXRsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU1ZDb21wb25lbnQgfSBmcm9tICcuL3ZpZXcuY29tcG9uZW50JztcblxuY29uc3QgQ09NUE9ORU5UUyA9IFtTVkNvbnRhaW5lckNvbXBvbmVudCwgU1ZDb21wb25lbnQsIFNWVGl0bGVDb21wb25lbnRdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBPYnNlcnZlcnNNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRTXSxcbiAgZXhwb3J0czogWy4uLkNPTVBPTkVOVFNdLFxufSlcbmV4cG9ydCBjbGFzcyBTVk1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7IG5nTW9kdWxlOiBTVk1vZHVsZSwgcHJvdmlkZXJzOiBbU1ZDb25maWddIH07XG4gIH1cbn1cbiJdfQ==