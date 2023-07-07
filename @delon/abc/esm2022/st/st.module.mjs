import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LetModule } from '@delon/abc/let';
import { DelonACLModule } from '@delon/acl';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzResizableModule } from 'ng-zorro-antd/resizable';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { STFilterComponent } from './st-filter.component';
import { STRowDirective } from './st-row.directive';
import { STWidgetHostDirective } from './st-widget-host.directive';
import { STComponent, STTdComponent } from './st.component';
import * as i0 from "@angular/core";
const COMPONENTS = [STComponent, STRowDirective, STWidgetHostDirective];
class STModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.4", ngImport: i0, type: STModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.1.4", ngImport: i0, type: STModule, declarations: [STComponent, STRowDirective, STWidgetHostDirective, STFilterComponent, STTdComponent], imports: [CommonModule,
            FormsModule,
            DelonACLModule,
            LetModule,
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
            NzInputNumberModule,
            NzDatePickerModule], exports: [STComponent, STRowDirective, STWidgetHostDirective] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.1.4", ngImport: i0, type: STModule, imports: [CommonModule,
            FormsModule,
            DelonACLModule,
            LetModule,
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
            NzInputNumberModule,
            NzDatePickerModule] }); }
}
export { STModule };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.4", ngImport: i0, type: STModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        DelonACLModule,
                        LetModule,
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
                        NzInputNumberModule,
                        NzDatePickerModule
                    ],
                    declarations: [...COMPONENTS, STFilterComponent, STTdComponent],
                    exports: COMPONENTS
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3N0L3N0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDNUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBRTVELE1BQU0sVUFBVSxHQUFHLENBQUMsV0FBVyxFQUFFLGNBQWMsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO0FBRXhFLE1BeUJhLFFBQVE7OEdBQVIsUUFBUTsrR0FBUixRQUFRLGlCQTNCRCxXQUFXLEVBQUUsY0FBYyxFQUFFLHFCQUFxQixFQXdCdEMsaUJBQWlCLEVBQUUsYUFBYSxhQXBCNUQsWUFBWTtZQUNaLFdBQVc7WUFDWCxjQUFjO1lBQ2QsU0FBUztZQUNULGtCQUFrQjtZQUNsQixhQUFhO1lBQ2IsWUFBWTtZQUNaLGFBQWE7WUFDYixnQkFBZ0I7WUFDaEIsZUFBZTtZQUNmLGdCQUFnQjtZQUNoQixZQUFZO1lBQ1osYUFBYTtZQUNiLFdBQVc7WUFDWCxhQUFhO1lBQ2IsZUFBZTtZQUNmLGlCQUFpQjtZQUNqQixtQkFBbUI7WUFDbkIsa0JBQWtCLGFBdEJGLFdBQVcsRUFBRSxjQUFjLEVBQUUscUJBQXFCOytHQTJCekQsUUFBUSxZQXZCakIsWUFBWTtZQUNaLFdBQVc7WUFDWCxjQUFjO1lBQ2QsU0FBUztZQUNULGtCQUFrQjtZQUNsQixhQUFhO1lBQ2IsWUFBWTtZQUNaLGFBQWE7WUFDYixnQkFBZ0I7WUFDaEIsZUFBZTtZQUNmLGdCQUFnQjtZQUNoQixZQUFZO1lBQ1osYUFBYTtZQUNiLFdBQVc7WUFDWCxhQUFhO1lBQ2IsZUFBZTtZQUNmLGlCQUFpQjtZQUNqQixtQkFBbUI7WUFDbkIsa0JBQWtCOztTQUtULFFBQVE7MkZBQVIsUUFBUTtrQkF6QnBCLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxjQUFjO3dCQUNkLFNBQVM7d0JBQ1Qsa0JBQWtCO3dCQUNsQixhQUFhO3dCQUNiLFlBQVk7d0JBQ1osYUFBYTt3QkFDYixnQkFBZ0I7d0JBQ2hCLGVBQWU7d0JBQ2YsZ0JBQWdCO3dCQUNoQixZQUFZO3dCQUNaLGFBQWE7d0JBQ2IsV0FBVzt3QkFDWCxhQUFhO3dCQUNiLGVBQWU7d0JBQ2YsaUJBQWlCO3dCQUNqQixtQkFBbUI7d0JBQ25CLGtCQUFrQjtxQkFDbkI7b0JBQ0QsWUFBWSxFQUFFLENBQUMsR0FBRyxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsYUFBYSxDQUFDO29CQUMvRCxPQUFPLEVBQUUsVUFBVTtpQkFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBMZXRNb2R1bGUgfSBmcm9tICdAZGVsb24vYWJjL2xldCc7XG5pbXBvcnQgeyBEZWxvbkFDTE1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hY2wnO1xuaW1wb3J0IHsgTnpCYWRnZU1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvYmFkZ2UnO1xuaW1wb3J0IHsgTnpDaGVja2JveE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY2hlY2tib3gnO1xuaW1wb3J0IHsgTnpEYXRlUGlja2VyTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9kYXRlLXBpY2tlcic7XG5pbXBvcnQgeyBOekRpdmlkZXJNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2RpdmlkZXInO1xuaW1wb3J0IHsgTnpEcm9wRG93bk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvZHJvcGRvd24nO1xuaW1wb3J0IHsgTnpJY29uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcbmltcG9ydCB7IE56SW5wdXRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2lucHV0JztcbmltcG9ydCB7IE56SW5wdXROdW1iZXJNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2lucHV0LW51bWJlcic7XG5pbXBvcnQgeyBOek1lbnVNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL21lbnUnO1xuaW1wb3J0IHsgTnpQb3Bjb25maXJtTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9wb3Bjb25maXJtJztcbmltcG9ydCB7IE56UmFkaW9Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3JhZGlvJztcbmltcG9ydCB7IE56UmVzaXphYmxlTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9yZXNpemFibGUnO1xuaW1wb3J0IHsgTnpUYWJsZU1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvdGFibGUnO1xuaW1wb3J0IHsgTnpUYWdNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3RhZyc7XG5pbXBvcnQgeyBOelRvb2xUaXBNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3Rvb2x0aXAnO1xuXG5pbXBvcnQgeyBTVEZpbHRlckNvbXBvbmVudCB9IGZyb20gJy4vc3QtZmlsdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTVFJvd0RpcmVjdGl2ZSB9IGZyb20gJy4vc3Qtcm93LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBTVFdpZGdldEhvc3REaXJlY3RpdmUgfSBmcm9tICcuL3N0LXdpZGdldC1ob3N0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBTVENvbXBvbmVudCwgU1RUZENvbXBvbmVudCB9IGZyb20gJy4vc3QuY29tcG9uZW50JztcblxuY29uc3QgQ09NUE9ORU5UUyA9IFtTVENvbXBvbmVudCwgU1RSb3dEaXJlY3RpdmUsIFNUV2lkZ2V0SG9zdERpcmVjdGl2ZV07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgRGVsb25BQ0xNb2R1bGUsXG4gICAgTGV0TW9kdWxlLFxuICAgIE56UG9wY29uZmlybU1vZHVsZSxcbiAgICBOelRhYmxlTW9kdWxlLFxuICAgIE56SWNvbk1vZHVsZSxcbiAgICBOekJhZGdlTW9kdWxlLFxuICAgIE56Q2hlY2tib3hNb2R1bGUsXG4gICAgTnpEaXZpZGVyTW9kdWxlLFxuICAgIE56RHJvcERvd25Nb2R1bGUsXG4gICAgTnpNZW51TW9kdWxlLFxuICAgIE56UmFkaW9Nb2R1bGUsXG4gICAgTnpUYWdNb2R1bGUsXG4gICAgTnpJbnB1dE1vZHVsZSxcbiAgICBOelRvb2xUaXBNb2R1bGUsXG4gICAgTnpSZXNpemFibGVNb2R1bGUsXG4gICAgTnpJbnB1dE51bWJlck1vZHVsZSxcbiAgICBOekRhdGVQaWNrZXJNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbLi4uQ09NUE9ORU5UUywgU1RGaWx0ZXJDb21wb25lbnQsIFNUVGRDb21wb25lbnRdLFxuICBleHBvcnRzOiBDT01QT05FTlRTXG59KVxuZXhwb3J0IGNsYXNzIFNUTW9kdWxlIHt9XG4iXX0=