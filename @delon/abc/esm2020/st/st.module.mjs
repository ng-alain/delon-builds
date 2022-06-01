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
export class STModule {
}
STModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: STModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
STModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: STModule, declarations: [STComponent, STRowDirective, STWidgetHostDirective, STFilterComponent, STTdComponent], imports: [CommonModule,
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
        NzDatePickerModule], exports: [STComponent, STRowDirective, STWidgetHostDirective] });
STModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: STModule, imports: [[
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
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: STModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3N0L3N0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDNUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBRTVELE1BQU0sVUFBVSxHQUFHLENBQUMsV0FBVyxFQUFFLGNBQWMsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO0FBMkJ4RSxNQUFNLE9BQU8sUUFBUTs7c0dBQVIsUUFBUTt1R0FBUixRQUFRLGlCQTNCRCxXQUFXLEVBQUUsY0FBYyxFQUFFLHFCQUFxQixFQXdCdEMsaUJBQWlCLEVBQUUsYUFBYSxhQXBCNUQsWUFBWTtRQUNaLFdBQVc7UUFDWCxjQUFjO1FBQ2QsU0FBUztRQUNULGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsWUFBWTtRQUNaLGFBQWE7UUFDYixnQkFBZ0I7UUFDaEIsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixZQUFZO1FBQ1osYUFBYTtRQUNiLFdBQVc7UUFDWCxhQUFhO1FBQ2IsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixtQkFBbUI7UUFDbkIsa0JBQWtCLGFBdEJGLFdBQVcsRUFBRSxjQUFjLEVBQUUscUJBQXFCO3VHQTJCekQsUUFBUSxZQXhCVjtZQUNQLFlBQVk7WUFDWixXQUFXO1lBQ1gsY0FBYztZQUNkLFNBQVM7WUFDVCxrQkFBa0I7WUFDbEIsYUFBYTtZQUNiLFlBQVk7WUFDWixhQUFhO1lBQ2IsZ0JBQWdCO1lBQ2hCLGVBQWU7WUFDZixnQkFBZ0I7WUFDaEIsWUFBWTtZQUNaLGFBQWE7WUFDYixXQUFXO1lBQ1gsYUFBYTtZQUNiLGVBQWU7WUFDZixpQkFBaUI7WUFDakIsbUJBQW1CO1lBQ25CLGtCQUFrQjtTQUNuQjs0RkFJVSxRQUFRO2tCQXpCcEIsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixXQUFXO3dCQUNYLGNBQWM7d0JBQ2QsU0FBUzt3QkFDVCxrQkFBa0I7d0JBQ2xCLGFBQWE7d0JBQ2IsWUFBWTt3QkFDWixhQUFhO3dCQUNiLGdCQUFnQjt3QkFDaEIsZUFBZTt3QkFDZixnQkFBZ0I7d0JBQ2hCLFlBQVk7d0JBQ1osYUFBYTt3QkFDYixXQUFXO3dCQUNYLGFBQWE7d0JBQ2IsZUFBZTt3QkFDZixpQkFBaUI7d0JBQ2pCLG1CQUFtQjt3QkFDbkIsa0JBQWtCO3FCQUNuQjtvQkFDRCxZQUFZLEVBQUUsQ0FBQyxHQUFHLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxhQUFhLENBQUM7b0JBQy9ELE9BQU8sRUFBRSxVQUFVO2lCQUNwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IExldE1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hYmMvbGV0JztcbmltcG9ydCB7IERlbG9uQUNMTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FjbCc7XG5pbXBvcnQgeyBOekJhZGdlTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9iYWRnZSc7XG5pbXBvcnQgeyBOekNoZWNrYm94TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jaGVja2JveCc7XG5pbXBvcnQgeyBOekRhdGVQaWNrZXJNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2RhdGUtcGlja2VyJztcbmltcG9ydCB7IE56RGl2aWRlck1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvZGl2aWRlcic7XG5pbXBvcnQgeyBOekRyb3BEb3duTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9kcm9wZG93bic7XG5pbXBvcnQgeyBOekljb25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2ljb24nO1xuaW1wb3J0IHsgTnpJbnB1dE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaW5wdXQnO1xuaW1wb3J0IHsgTnpJbnB1dE51bWJlck1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaW5wdXQtbnVtYmVyJztcbmltcG9ydCB7IE56TWVudU1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvbWVudSc7XG5pbXBvcnQgeyBOelBvcGNvbmZpcm1Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3BvcGNvbmZpcm0nO1xuaW1wb3J0IHsgTnpSYWRpb01vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvcmFkaW8nO1xuaW1wb3J0IHsgTnpSZXNpemFibGVNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3Jlc2l6YWJsZSc7XG5pbXBvcnQgeyBOelRhYmxlTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC90YWJsZSc7XG5pbXBvcnQgeyBOelRhZ01vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvdGFnJztcbmltcG9ydCB7IE56VG9vbFRpcE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvdG9vbHRpcCc7XG5cbmltcG9ydCB7IFNURmlsdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9zdC1maWx0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFNUUm93RGlyZWN0aXZlIH0gZnJvbSAnLi9zdC1yb3cuZGlyZWN0aXZlJztcbmltcG9ydCB7IFNUV2lkZ2V0SG9zdERpcmVjdGl2ZSB9IGZyb20gJy4vc3Qtd2lkZ2V0LWhvc3QuZGlyZWN0aXZlJztcbmltcG9ydCB7IFNUQ29tcG9uZW50LCBTVFRkQ29tcG9uZW50IH0gZnJvbSAnLi9zdC5jb21wb25lbnQnO1xuXG5jb25zdCBDT01QT05FTlRTID0gW1NUQ29tcG9uZW50LCBTVFJvd0RpcmVjdGl2ZSwgU1RXaWRnZXRIb3N0RGlyZWN0aXZlXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBEZWxvbkFDTE1vZHVsZSxcbiAgICBMZXRNb2R1bGUsXG4gICAgTnpQb3Bjb25maXJtTW9kdWxlLFxuICAgIE56VGFibGVNb2R1bGUsXG4gICAgTnpJY29uTW9kdWxlLFxuICAgIE56QmFkZ2VNb2R1bGUsXG4gICAgTnpDaGVja2JveE1vZHVsZSxcbiAgICBOekRpdmlkZXJNb2R1bGUsXG4gICAgTnpEcm9wRG93bk1vZHVsZSxcbiAgICBOek1lbnVNb2R1bGUsXG4gICAgTnpSYWRpb01vZHVsZSxcbiAgICBOelRhZ01vZHVsZSxcbiAgICBOeklucHV0TW9kdWxlLFxuICAgIE56VG9vbFRpcE1vZHVsZSxcbiAgICBOelJlc2l6YWJsZU1vZHVsZSxcbiAgICBOeklucHV0TnVtYmVyTW9kdWxlLFxuICAgIE56RGF0ZVBpY2tlck1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRTLCBTVEZpbHRlckNvbXBvbmVudCwgU1RUZENvbXBvbmVudF0sXG4gIGV4cG9ydHM6IENPTVBPTkVOVFNcbn0pXG5leHBvcnQgY2xhc3MgU1RNb2R1bGUge31cbiJdfQ==