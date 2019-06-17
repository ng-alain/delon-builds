/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzInputModule } from 'ng-zorro-antd/input';
import { DelonACLModule } from '@delon/acl';
import { DelonUtilModule } from '@delon/util';
import { STRowDirective } from './table-row.directive';
import { STComponent } from './table.component';
/** @type {?} */
const COMPONENTS = [STComponent, STRowDirective];
export class STModule {
}
STModule.decorators = [
    { type: NgModule, args: [{
                schemas: [NO_ERRORS_SCHEMA],
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
                ],
                declarations: [...COMPONENTS],
                exports: [...COMPONENTS],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy90YWJsZS8iLCJzb3VyY2VzIjpbInRhYmxlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFcEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUM1QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTlDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7O01BRTFDLFVBQVUsR0FBRyxDQUFDLFdBQVcsRUFBRSxjQUFjLENBQUM7QUF3QmhELE1BQU0sT0FBTyxRQUFROzs7WUF0QnBCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDM0IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxlQUFlO29CQUNmLGNBQWM7b0JBQ2Qsa0JBQWtCO29CQUNsQixhQUFhO29CQUNiLFlBQVk7b0JBQ1osYUFBYTtvQkFDYixnQkFBZ0I7b0JBQ2hCLGVBQWU7b0JBQ2YsZ0JBQWdCO29CQUNoQixZQUFZO29CQUNaLGFBQWE7b0JBQ2IsV0FBVztvQkFDWCxhQUFhO2lCQUNkO2dCQUNELFlBQVksRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDO2dCQUM3QixPQUFPLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQzthQUN6QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOekJhZGdlTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9iYWRnZSc7XG5pbXBvcnQgeyBOekNoZWNrYm94TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jaGVja2JveCc7XG5pbXBvcnQgeyBOekRpdmlkZXJNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2RpdmlkZXInO1xuaW1wb3J0IHsgTnpEcm9wRG93bk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvZHJvcGRvd24nO1xuaW1wb3J0IHsgTnpJY29uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcbmltcG9ydCB7IE56TWVudU1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvbWVudSc7XG5pbXBvcnQgeyBOelBvcGNvbmZpcm1Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3BvcGNvbmZpcm0nO1xuaW1wb3J0IHsgTnpSYWRpb01vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvcmFkaW8nO1xuaW1wb3J0IHsgTnpUYWJsZU1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvdGFibGUnO1xuaW1wb3J0IHsgTnpUYWdNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3RhZyc7XG5pbXBvcnQgeyBOeklucHV0TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pbnB1dCc7XG5cbmltcG9ydCB7IERlbG9uQUNMTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FjbCc7XG5pbXBvcnQgeyBEZWxvblV0aWxNb2R1bGUgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbmltcG9ydCB7IFNUUm93RGlyZWN0aXZlIH0gZnJvbSAnLi90YWJsZS1yb3cuZGlyZWN0aXZlJztcbmltcG9ydCB7IFNUQ29tcG9uZW50IH0gZnJvbSAnLi90YWJsZS5jb21wb25lbnQnO1xuXG5jb25zdCBDT01QT05FTlRTID0gW1NUQ29tcG9uZW50LCBTVFJvd0RpcmVjdGl2ZV07XG5cbkBOZ01vZHVsZSh7XG4gIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBEZWxvblV0aWxNb2R1bGUsXG4gICAgRGVsb25BQ0xNb2R1bGUsXG4gICAgTnpQb3Bjb25maXJtTW9kdWxlLFxuICAgIE56VGFibGVNb2R1bGUsXG4gICAgTnpJY29uTW9kdWxlLFxuICAgIE56QmFkZ2VNb2R1bGUsXG4gICAgTnpDaGVja2JveE1vZHVsZSxcbiAgICBOekRpdmlkZXJNb2R1bGUsXG4gICAgTnpEcm9wRG93bk1vZHVsZSxcbiAgICBOek1lbnVNb2R1bGUsXG4gICAgTnpSYWRpb01vZHVsZSxcbiAgICBOelRhZ01vZHVsZSxcbiAgICBOeklucHV0TW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRTXSxcbiAgZXhwb3J0czogWy4uLkNPTVBPTkVOVFNdLFxufSlcbmV4cG9ydCBjbGFzcyBTVE1vZHVsZSB7fVxuIl19