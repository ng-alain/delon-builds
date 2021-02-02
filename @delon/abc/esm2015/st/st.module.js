import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DelonACLModule } from '@delon/acl';
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
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/tooltip";
import * as i3 from "ng-zorro-antd/popconfirm";
import * as i4 from "ng-zorro-antd/icon";
import * as i5 from "ng-zorro-antd/checkbox";
import * as i6 from "@angular/forms";
import * as i7 from "ng-zorro-antd/table";
import * as i8 from "ng-zorro-antd/resizable";
import * as i9 from "ng-zorro-antd/dropdown";
import * as i10 from "ng-zorro-antd/menu";
import * as i11 from "ng-zorro-antd/input";
import * as i12 from "ng-zorro-antd/radio";
import * as i13 from "ng-zorro-antd/tag";
import * as i14 from "ng-zorro-antd/badge";
import * as i15 from "ng-zorro-antd/divider";
const COMPONENTS = [STComponent];
const DIRECTIVES = [STRowDirective, STWidgetHostDirective];
export class STModule {
}
/** @nocollapse */ STModule.ɵmod = i0.ɵɵdefineNgModule({ type: STModule });
/** @nocollapse */ STModule.ɵinj = i0.ɵɵdefineInjector({ factory: function STModule_Factory(t) { return new (t || STModule)(); }, imports: [[
            CommonModule,
            FormsModule,
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
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(STModule, { declarations: [STComponent, STRowDirective, STWidgetHostDirective], imports: [CommonModule,
        FormsModule,
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
        NzResizableModule], exports: [STComponent, STRowDirective, STWidgetHostDirective] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(STModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule,
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
            }]
    }], null, null); })();
i0.ɵɵsetComponentScope(STComponent, [i1.NgIf, i1.NgTemplateOutlet, i2.NzTooltipDirective, i3.NzPopconfirmDirective, i1.NgClass, i4.NzIconDirective, i5.NzCheckboxComponent, i6.NgControlStatus, i6.NgModel, i7.NzTableComponent, i7.NzTheadComponent, i1.NgForOf, i7.NzTrDirective, i7.NzTableCellDirective, i7.NzThMeasureDirective, i7.NzCellFixedDirective, i7.NzThAddOnComponent, i8.NzResizableDirective, i8.NzResizeHandleComponent, i1.NgSwitch, i1.NgSwitchCase, i9.NzDropDownDirective, i9.NzDropdownMenuComponent, i10.NzMenuDirective, i10.NzMenuItemDirective, i1.NgSwitchDefault, i11.NzInputDirective, i6.DefaultValueAccessor, i12.NzRadioComponent, i7.NzTbodyComponent, i7.NzTdAddOnComponent, i13.NzTagComponent, i14.NzBadgeComponent, STWidgetHostDirective, i9.NzDropDownADirective, i10.NzMenuDividerDirective, i15.NzDividerComponent, i7.NzTrExpandDirective, i7.NzTableFixedRowComponent, i7.NzTableVirtualScrollDirective], []);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3N0L3N0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUM1QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzlELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDbkUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QyxNQUFNLFVBQVUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ2pDLE1BQU0sVUFBVSxHQUFHLENBQUMsY0FBYyxFQUFFLHFCQUFxQixDQUFDLENBQUM7QUF3QjNELE1BQU0sT0FBTyxRQUFROzsrREFBUixRQUFRO2tIQUFSLFFBQVEsa0JBckJWO1lBQ1AsWUFBWTtZQUNaLFdBQVc7WUFDWCxjQUFjO1lBQ2Qsa0JBQWtCO1lBQ2xCLGFBQWE7WUFDYixZQUFZO1lBQ1osYUFBYTtZQUNiLGdCQUFnQjtZQUNoQixlQUFlO1lBQ2YsZ0JBQWdCO1lBQ2hCLFlBQVk7WUFDWixhQUFhO1lBQ2IsV0FBVztZQUNYLGFBQWE7WUFDYixlQUFlO1lBQ2YsaUJBQWlCO1NBQ2xCO3dGQUlVLFFBQVEsbUJBekJELFdBQVcsRUFDWCxjQUFjLEVBQUUscUJBQXFCLGFBSXJELFlBQVk7UUFDWixXQUFXO1FBQ1gsY0FBYztRQUNkLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsWUFBWTtRQUNaLGFBQWE7UUFDYixnQkFBZ0I7UUFDaEIsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixZQUFZO1FBQ1osYUFBYTtRQUNiLFdBQVc7UUFDWCxhQUFhO1FBQ2IsZUFBZTtRQUNmLGlCQUFpQixhQXBCRCxXQUFXLEVBQ1gsY0FBYyxFQUFFLHFCQUFxQjt1RkF3QjVDLFFBQVE7Y0F0QnBCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixXQUFXO29CQUNYLGNBQWM7b0JBQ2Qsa0JBQWtCO29CQUNsQixhQUFhO29CQUNiLFlBQVk7b0JBQ1osYUFBYTtvQkFDYixnQkFBZ0I7b0JBQ2hCLGVBQWU7b0JBQ2YsZ0JBQWdCO29CQUNoQixZQUFZO29CQUNaLGFBQWE7b0JBQ2IsV0FBVztvQkFDWCxhQUFhO29CQUNiLGVBQWU7b0JBQ2YsaUJBQWlCO2lCQUNsQjtnQkFDRCxZQUFZLEVBQUUsQ0FBQyxHQUFHLFVBQVUsRUFBRSxHQUFHLFVBQVUsQ0FBQztnQkFDNUMsT0FBTyxFQUFFLENBQUMsR0FBRyxVQUFVLEVBQUUsR0FBRyxVQUFVLENBQUM7YUFDeEM7O3VCQXhCbUIsV0FBVyx3ckJBQ0sscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IERlbG9uQUNMTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FjbCc7XG5pbXBvcnQgeyBOekJhZGdlTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9iYWRnZSc7XG5pbXBvcnQgeyBOekNoZWNrYm94TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jaGVja2JveCc7XG5pbXBvcnQgeyBOekRpdmlkZXJNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2RpdmlkZXInO1xuaW1wb3J0IHsgTnpEcm9wRG93bk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvZHJvcGRvd24nO1xuaW1wb3J0IHsgTnpJY29uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcbmltcG9ydCB7IE56SW5wdXRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2lucHV0JztcbmltcG9ydCB7IE56TWVudU1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvbWVudSc7XG5pbXBvcnQgeyBOelBvcGNvbmZpcm1Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3BvcGNvbmZpcm0nO1xuaW1wb3J0IHsgTnpSYWRpb01vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvcmFkaW8nO1xuaW1wb3J0IHsgTnpSZXNpemFibGVNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3Jlc2l6YWJsZSc7XG5pbXBvcnQgeyBOelRhYmxlTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC90YWJsZSc7XG5pbXBvcnQgeyBOelRhZ01vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvdGFnJztcbmltcG9ydCB7IE56VG9vbFRpcE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvdG9vbHRpcCc7XG5pbXBvcnQgeyBTVFJvd0RpcmVjdGl2ZSB9IGZyb20gJy4vc3Qtcm93LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBTVFdpZGdldEhvc3REaXJlY3RpdmUgfSBmcm9tICcuL3N0LXdpZGdldC1ob3N0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBTVENvbXBvbmVudCB9IGZyb20gJy4vc3QuY29tcG9uZW50JztcblxuY29uc3QgQ09NUE9ORU5UUyA9IFtTVENvbXBvbmVudF07XG5jb25zdCBESVJFQ1RJVkVTID0gW1NUUm93RGlyZWN0aXZlLCBTVFdpZGdldEhvc3REaXJlY3RpdmVdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIERlbG9uQUNMTW9kdWxlLFxuICAgIE56UG9wY29uZmlybU1vZHVsZSxcbiAgICBOelRhYmxlTW9kdWxlLFxuICAgIE56SWNvbk1vZHVsZSxcbiAgICBOekJhZGdlTW9kdWxlLFxuICAgIE56Q2hlY2tib3hNb2R1bGUsXG4gICAgTnpEaXZpZGVyTW9kdWxlLFxuICAgIE56RHJvcERvd25Nb2R1bGUsXG4gICAgTnpNZW51TW9kdWxlLFxuICAgIE56UmFkaW9Nb2R1bGUsXG4gICAgTnpUYWdNb2R1bGUsXG4gICAgTnpJbnB1dE1vZHVsZSxcbiAgICBOelRvb2xUaXBNb2R1bGUsXG4gICAgTnpSZXNpemFibGVNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogWy4uLkNPTVBPTkVOVFMsIC4uLkRJUkVDVElWRVNdLFxuICBleHBvcnRzOiBbLi4uQ09NUE9ORU5UUywgLi4uRElSRUNUSVZFU10sXG59KVxuZXhwb3J0IGNsYXNzIFNUTW9kdWxlIHt9XG4iXX0=