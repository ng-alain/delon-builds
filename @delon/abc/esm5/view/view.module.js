/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL3ZpZXcvIiwic291cmNlcyI6WyJ2aWV3Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFekQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7O0lBRXpDLFVBQVUsR0FBRyxDQUFDLG9CQUFvQixFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsQ0FBQztBQUV4RTtJQUFBO0lBU0EsQ0FBQzs7OztJQUhRLGdCQUFPOzs7SUFBZDtRQUNFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7SUFDdkQsQ0FBQzs7Z0JBUkYsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxlQUFlLENBQUM7b0JBQ3hDLFlBQVksbUJBQU0sVUFBVSxDQUFDO29CQUM3QixPQUFPLG1CQUFNLFVBQVUsQ0FBQztpQkFDekI7O0lBS0QsZUFBQztDQUFBLEFBVEQsSUFTQztTQUpZLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE9ic2VydmVyc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vYnNlcnZlcnMnO1xuXG5pbXBvcnQgeyBTVkNvbmZpZyB9IGZyb20gJy4vdmlldy5jb25maWcnO1xuaW1wb3J0IHsgU1ZDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL3ZpZXctY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTVlRpdGxlQ29tcG9uZW50IH0gZnJvbSAnLi92aWV3LXRpdGxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTVkNvbXBvbmVudCB9IGZyb20gJy4vdmlldy5jb21wb25lbnQnO1xuXG5jb25zdCBDT01QT05FTlRTID0gW1NWQ29udGFpbmVyQ29tcG9uZW50LCBTVkNvbXBvbmVudCwgU1ZUaXRsZUNvbXBvbmVudF07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE9ic2VydmVyc01vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogWy4uLkNPTVBPTkVOVFNdLFxuICBleHBvcnRzOiBbLi4uQ09NUE9ORU5UU10sXG59KVxuZXhwb3J0IGNsYXNzIFNWTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHsgbmdNb2R1bGU6IFNWTW9kdWxlLCBwcm92aWRlcnM6IFtTVkNvbmZpZ10gfTtcbiAgfVxufVxuIl19