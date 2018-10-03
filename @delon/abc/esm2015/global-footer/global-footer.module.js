/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DelonUtilModule } from '@delon/util';
import { GlobalFooterComponent } from './global-footer.component';
import { GlobalFooterItemComponent } from './global-footer-item.component';
/** @type {?} */
const COMPONENTS = [GlobalFooterComponent, GlobalFooterItemComponent];
export class GlobalFooterModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: GlobalFooterModule, providers: [] };
    }
}
GlobalFooterModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, RouterModule, DelonUtilModule],
                declarations: [...COMPONENTS],
                exports: [...COMPONENTS],
            },] }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLWZvb3Rlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL2dsb2JhbC1mb290ZXIvIiwic291cmNlcyI6WyJnbG9iYWwtZm9vdGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTlDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOztBQUUzRSxNQUFNLFVBQVUsR0FBRyxDQUFDLHFCQUFxQixFQUFFLHlCQUF5QixDQUFDLENBQUM7QUFPdEUsTUFBTTs7OztJQUNKLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTyxFQUFFLFFBQVEsRUFBRSxrQkFBa0IsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUM7S0FDeEQ7OztZQVJGLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLGVBQWUsQ0FBQztnQkFDdEQsWUFBWSxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUM7Z0JBQzdCLE9BQU8sRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDO2FBQ3pCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRGVsb25VdGlsTW9kdWxlIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5pbXBvcnQgeyBHbG9iYWxGb290ZXJDb21wb25lbnQgfSBmcm9tICcuL2dsb2JhbC1mb290ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEdsb2JhbEZvb3Rlckl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2dsb2JhbC1mb290ZXItaXRlbS5jb21wb25lbnQnO1xuXG5jb25zdCBDT01QT05FTlRTID0gW0dsb2JhbEZvb3RlckNvbXBvbmVudCwgR2xvYmFsRm9vdGVySXRlbUNvbXBvbmVudF07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFJvdXRlck1vZHVsZSwgRGVsb25VdGlsTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbLi4uQ09NUE9ORU5UU10sXG4gIGV4cG9ydHM6IFsuLi5DT01QT05FTlRTXSxcbn0pXG5leHBvcnQgY2xhc3MgR2xvYmFsRm9vdGVyTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHsgbmdNb2R1bGU6IEdsb2JhbEZvb3Rlck1vZHVsZSwgcHJvdmlkZXJzOiBbXSB9O1xuICB9XG59XG4iXX0=