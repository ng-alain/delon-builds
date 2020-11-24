/**
 * @fileoverview added by tsickle
 * Generated from: st.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DelonACLModule } from '@delon/acl';
import { DelonUtilModule } from '@delon/util';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzResizableModule } from 'ng-zorro-antd/resizable';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { STRowDirective } from './st-row.directive';
import { STWidgetHostDirective } from './st-widget-host.directive';
import { STComponent } from './st.component';
/** @type {?} */
const COMPONENTS = [STComponent];
/** @type {?} */
const DIRECTIVES = [STRowDirective, STWidgetHostDirective];
export class STModule {
}
STModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    DelonUtilModule,
                    DelonACLModule,
                    NzPopconfirmModule,
                    NzTableModule,
                    NzIconModule,
                    NzBadgeModule,
                    NzCheckboxModule,
                    NzDividerModule,
                    NzDropDownModule,
                    NzMenuModule,
                    NzRadioModule,
                    NzTagModule,
                    NzInputModule,
                    NzToolTipModule,
                    NzResizableModule,
                ],
                declarations: [...COMPONENTS, ...DIRECTIVES],
                exports: [...COMPONENTS, ...DIRECTIVES],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9zdC8iLCJzb3VyY2VzIjpbInN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDOUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7TUFFdkMsVUFBVSxHQUFHLENBQUMsV0FBVyxDQUFDOztNQUMxQixVQUFVLEdBQUcsQ0FBQyxjQUFjLEVBQUUscUJBQXFCLENBQUM7QUF5QjFELE1BQU0sT0FBTyxRQUFROzs7WUF2QnBCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixXQUFXO29CQUNYLGVBQWU7b0JBQ2YsY0FBYztvQkFDZCxrQkFBa0I7b0JBQ2xCLGFBQWE7b0JBQ2IsWUFBWTtvQkFDWixhQUFhO29CQUNiLGdCQUFnQjtvQkFDaEIsZUFBZTtvQkFDZixnQkFBZ0I7b0JBQ2hCLFlBQVk7b0JBQ1osYUFBYTtvQkFDYixXQUFXO29CQUNYLGFBQWE7b0JBQ2IsZUFBZTtvQkFDZixpQkFBaUI7aUJBQ2xCO2dCQUNELFlBQVksRUFBRSxDQUFDLEdBQUcsVUFBVSxFQUFFLEdBQUcsVUFBVSxDQUFDO2dCQUM1QyxPQUFPLEVBQUUsQ0FBQyxHQUFHLFVBQVUsRUFBRSxHQUFHLFVBQVUsQ0FBQzthQUN4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBEZWxvbkFDTE1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hY2wnO1xuaW1wb3J0IHsgRGVsb25VdGlsTW9kdWxlIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgTnpCYWRnZU1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvYmFkZ2UnO1xuaW1wb3J0IHsgTnpDaGVja2JveE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY2hlY2tib3gnO1xuaW1wb3J0IHsgTnpEaXZpZGVyTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9kaXZpZGVyJztcbmltcG9ydCB7IE56RHJvcERvd25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2Ryb3Bkb3duJztcbmltcG9ydCB7IE56SWNvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaWNvbic7XG5pbXBvcnQgeyBOeklucHV0TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pbnB1dCc7XG5pbXBvcnQgeyBOek1lbnVNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL21lbnUnO1xuaW1wb3J0IHsgTnpQb3Bjb25maXJtTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9wb3Bjb25maXJtJztcbmltcG9ydCB7IE56UmFkaW9Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3JhZGlvJztcbmltcG9ydCB7IE56UmVzaXphYmxlTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9yZXNpemFibGUnO1xuaW1wb3J0IHsgTnpUYWJsZU1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvdGFibGUnO1xuaW1wb3J0IHsgTnpUYWdNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3RhZyc7XG5pbXBvcnQgeyBOelRvb2xUaXBNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3Rvb2x0aXAnO1xuaW1wb3J0IHsgU1RSb3dEaXJlY3RpdmUgfSBmcm9tICcuL3N0LXJvdy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU1RXaWRnZXRIb3N0RGlyZWN0aXZlIH0gZnJvbSAnLi9zdC13aWRnZXQtaG9zdC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU1RDb21wb25lbnQgfSBmcm9tICcuL3N0LmNvbXBvbmVudCc7XG5cbmNvbnN0IENPTVBPTkVOVFMgPSBbU1RDb21wb25lbnRdO1xuY29uc3QgRElSRUNUSVZFUyA9IFtTVFJvd0RpcmVjdGl2ZSwgU1RXaWRnZXRIb3N0RGlyZWN0aXZlXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBEZWxvblV0aWxNb2R1bGUsXG4gICAgRGVsb25BQ0xNb2R1bGUsXG4gICAgTnpQb3Bjb25maXJtTW9kdWxlLFxuICAgIE56VGFibGVNb2R1bGUsXG4gICAgTnpJY29uTW9kdWxlLFxuICAgIE56QmFkZ2VNb2R1bGUsXG4gICAgTnpDaGVja2JveE1vZHVsZSxcbiAgICBOekRpdmlkZXJNb2R1bGUsXG4gICAgTnpEcm9wRG93bk1vZHVsZSxcbiAgICBOek1lbnVNb2R1bGUsXG4gICAgTnpSYWRpb01vZHVsZSxcbiAgICBOelRhZ01vZHVsZSxcbiAgICBOeklucHV0TW9kdWxlLFxuICAgIE56VG9vbFRpcE1vZHVsZSxcbiAgICBOelJlc2l6YWJsZU1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbLi4uQ09NUE9ORU5UUywgLi4uRElSRUNUSVZFU10sXG4gIGV4cG9ydHM6IFsuLi5DT01QT05FTlRTLCAuLi5ESVJFQ1RJVkVTXSxcbn0pXG5leHBvcnQgY2xhc3MgU1RNb2R1bGUge31cbiJdfQ==