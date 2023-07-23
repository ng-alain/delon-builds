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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.6", ngImport: i0, type: STModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.1.6", ngImport: i0, type: STModule, declarations: [STComponent, STRowDirective, STWidgetHostDirective, STFilterComponent, STTdComponent], imports: [CommonModule,
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
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.1.6", ngImport: i0, type: STModule, imports: [CommonModule,
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.6", ngImport: i0, type: STModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3N0L3N0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDNUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBRTVELE1BQU0sVUFBVSxHQUFHLENBQUMsV0FBVyxFQUFFLGNBQWMsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO0FBMkJ4RSxNQUFNLE9BQU8sUUFBUTs4R0FBUixRQUFROytHQUFSLFFBQVEsaUJBM0JELFdBQVcsRUFBRSxjQUFjLEVBQUUscUJBQXFCLEVBd0J0QyxpQkFBaUIsRUFBRSxhQUFhLGFBcEI1RCxZQUFZO1lBQ1osV0FBVztZQUNYLGNBQWM7WUFDZCxTQUFTO1lBQ1Qsa0JBQWtCO1lBQ2xCLGFBQWE7WUFDYixZQUFZO1lBQ1osYUFBYTtZQUNiLGdCQUFnQjtZQUNoQixlQUFlO1lBQ2YsZ0JBQWdCO1lBQ2hCLFlBQVk7WUFDWixhQUFhO1lBQ2IsV0FBVztZQUNYLGFBQWE7WUFDYixlQUFlO1lBQ2YsaUJBQWlCO1lBQ2pCLG1CQUFtQjtZQUNuQixrQkFBa0IsYUF0QkYsV0FBVyxFQUFFLGNBQWMsRUFBRSxxQkFBcUI7K0dBMkJ6RCxRQUFRLFlBdkJqQixZQUFZO1lBQ1osV0FBVztZQUNYLGNBQWM7WUFDZCxTQUFTO1lBQ1Qsa0JBQWtCO1lBQ2xCLGFBQWE7WUFDYixZQUFZO1lBQ1osYUFBYTtZQUNiLGdCQUFnQjtZQUNoQixlQUFlO1lBQ2YsZ0JBQWdCO1lBQ2hCLFlBQVk7WUFDWixhQUFhO1lBQ2IsV0FBVztZQUNYLGFBQWE7WUFDYixlQUFlO1lBQ2YsaUJBQWlCO1lBQ2pCLG1CQUFtQjtZQUNuQixrQkFBa0I7OzJGQUtULFFBQVE7a0JBekJwQixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsY0FBYzt3QkFDZCxTQUFTO3dCQUNULGtCQUFrQjt3QkFDbEIsYUFBYTt3QkFDYixZQUFZO3dCQUNaLGFBQWE7d0JBQ2IsZ0JBQWdCO3dCQUNoQixlQUFlO3dCQUNmLGdCQUFnQjt3QkFDaEIsWUFBWTt3QkFDWixhQUFhO3dCQUNiLFdBQVc7d0JBQ1gsYUFBYTt3QkFDYixlQUFlO3dCQUNmLGlCQUFpQjt3QkFDakIsbUJBQW1CO3dCQUNuQixrQkFBa0I7cUJBQ25CO29CQUNELFlBQVksRUFBRSxDQUFDLEdBQUcsVUFBVSxFQUFFLGlCQUFpQixFQUFFLGFBQWEsQ0FBQztvQkFDL0QsT0FBTyxFQUFFLFVBQVU7aUJBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgTGV0TW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FiYy9sZXQnO1xuaW1wb3J0IHsgRGVsb25BQ0xNb2R1bGUgfSBmcm9tICdAZGVsb24vYWNsJztcbmltcG9ydCB7IE56QmFkZ2VNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2JhZGdlJztcbmltcG9ydCB7IE56Q2hlY2tib3hNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NoZWNrYm94JztcbmltcG9ydCB7IE56RGF0ZVBpY2tlck1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvZGF0ZS1waWNrZXInO1xuaW1wb3J0IHsgTnpEaXZpZGVyTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9kaXZpZGVyJztcbmltcG9ydCB7IE56RHJvcERvd25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2Ryb3Bkb3duJztcbmltcG9ydCB7IE56SWNvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaWNvbic7XG5pbXBvcnQgeyBOeklucHV0TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pbnB1dCc7XG5pbXBvcnQgeyBOeklucHV0TnVtYmVyTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pbnB1dC1udW1iZXInO1xuaW1wb3J0IHsgTnpNZW51TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9tZW51JztcbmltcG9ydCB7IE56UG9wY29uZmlybU1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvcG9wY29uZmlybSc7XG5pbXBvcnQgeyBOelJhZGlvTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9yYWRpbyc7XG5pbXBvcnQgeyBOelJlc2l6YWJsZU1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvcmVzaXphYmxlJztcbmltcG9ydCB7IE56VGFibGVNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3RhYmxlJztcbmltcG9ydCB7IE56VGFnTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC90YWcnO1xuaW1wb3J0IHsgTnpUb29sVGlwTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC90b29sdGlwJztcblxuaW1wb3J0IHsgU1RGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuL3N0LWZpbHRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU1RSb3dEaXJlY3RpdmUgfSBmcm9tICcuL3N0LXJvdy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU1RXaWRnZXRIb3N0RGlyZWN0aXZlIH0gZnJvbSAnLi9zdC13aWRnZXQtaG9zdC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU1RDb21wb25lbnQsIFNUVGRDb21wb25lbnQgfSBmcm9tICcuL3N0LmNvbXBvbmVudCc7XG5cbmNvbnN0IENPTVBPTkVOVFMgPSBbU1RDb21wb25lbnQsIFNUUm93RGlyZWN0aXZlLCBTVFdpZGdldEhvc3REaXJlY3RpdmVdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIERlbG9uQUNMTW9kdWxlLFxuICAgIExldE1vZHVsZSxcbiAgICBOelBvcGNvbmZpcm1Nb2R1bGUsXG4gICAgTnpUYWJsZU1vZHVsZSxcbiAgICBOekljb25Nb2R1bGUsXG4gICAgTnpCYWRnZU1vZHVsZSxcbiAgICBOekNoZWNrYm94TW9kdWxlLFxuICAgIE56RGl2aWRlck1vZHVsZSxcbiAgICBOekRyb3BEb3duTW9kdWxlLFxuICAgIE56TWVudU1vZHVsZSxcbiAgICBOelJhZGlvTW9kdWxlLFxuICAgIE56VGFnTW9kdWxlLFxuICAgIE56SW5wdXRNb2R1bGUsXG4gICAgTnpUb29sVGlwTW9kdWxlLFxuICAgIE56UmVzaXphYmxlTW9kdWxlLFxuICAgIE56SW5wdXROdW1iZXJNb2R1bGUsXG4gICAgTnpEYXRlUGlja2VyTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogWy4uLkNPTVBPTkVOVFMsIFNURmlsdGVyQ29tcG9uZW50LCBTVFRkQ29tcG9uZW50XSxcbiAgZXhwb3J0czogQ09NUE9ORU5UU1xufSlcbmV4cG9ydCBjbGFzcyBTVE1vZHVsZSB7fVxuIl19