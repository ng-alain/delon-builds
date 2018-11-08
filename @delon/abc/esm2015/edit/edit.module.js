/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { DelonUtilModule } from '@delon/util';
import { SEConfig } from './edit.config';
import { SEContainerComponent } from './edit-container.component';
import { SEComponent } from './edit.component';
import { SEErrorComponent } from './edit-error.component';
import { SETitleComponent } from './edit-title.component';
/** @type {?} */
const COMPONENTS = [
    SEContainerComponent,
    SEComponent,
    SEErrorComponent,
    SETitleComponent,
];
export class SEModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: SEModule, providers: [SEConfig] };
    }
}
SEModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, DelonUtilModule, NgZorroAntdModule],
                declarations: [...COMPONENTS],
                exports: [...COMPONENTS],
            },] }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL2VkaXQvIiwic291cmNlcyI6WyJlZGl0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTlDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQUUxRCxNQUFNLFVBQVUsR0FBRztJQUNqQixvQkFBb0I7SUFDcEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixnQkFBZ0I7Q0FDakIsQ0FBQztBQU9GLE1BQU07Ozs7SUFDSixNQUFNLENBQUMsT0FBTztRQUNaLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7S0FDdEQ7OztZQVJGLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZUFBZSxFQUFFLGlCQUFpQixDQUFDO2dCQUMzRCxZQUFZLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQztnQkFDN0IsT0FBTyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUM7YUFDekIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nWm9ycm9BbnRkTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XG5pbXBvcnQgeyBEZWxvblV0aWxNb2R1bGUgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbmltcG9ydCB7IFNFQ29uZmlnIH0gZnJvbSAnLi9lZGl0LmNvbmZpZyc7XG5pbXBvcnQgeyBTRUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vZWRpdC1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFNFQ29tcG9uZW50IH0gZnJvbSAnLi9lZGl0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTRUVycm9yQ29tcG9uZW50IH0gZnJvbSAnLi9lZGl0LWVycm9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTRVRpdGxlQ29tcG9uZW50IH0gZnJvbSAnLi9lZGl0LXRpdGxlLmNvbXBvbmVudCc7XG5cbmNvbnN0IENPTVBPTkVOVFMgPSBbXG4gIFNFQ29udGFpbmVyQ29tcG9uZW50LFxuICBTRUNvbXBvbmVudCxcbiAgU0VFcnJvckNvbXBvbmVudCxcbiAgU0VUaXRsZUNvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIERlbG9uVXRpbE1vZHVsZSwgTmdab3Jyb0FudGRNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRTXSxcbiAgZXhwb3J0czogWy4uLkNPTVBPTkVOVFNdLFxufSlcbmV4cG9ydCBjbGFzcyBTRU1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7IG5nTW9kdWxlOiBTRU1vZHVsZSwgcHJvdmlkZXJzOiBbU0VDb25maWddIH07XG4gIH1cbn1cbiJdfQ==