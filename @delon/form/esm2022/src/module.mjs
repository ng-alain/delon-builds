/* eslint-disable import/order */
import { CommonModule } from '@angular/common';
import { NgModule, NgZone } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { DelonLocaleModule } from '@delon/theme';
import { AlainConfigService } from '@delon/util/config';
import { SFFixedDirective } from './sf-fixed.directive';
import { SFItemWrapComponent } from './sf-item-wrap.component';
import { SFItemComponent } from './sf-item.component';
import { SFComponent } from './sf.component';
import { AjvSchemaValidatorFactory, SchemaValidatorFactory } from './validator.factory';
import { SFTemplateDirective } from './widgets/custom/sf-template.directive';
// #region widgets
import { WidgetRegistry } from './widget.factory';
import { ArrayWidget } from './widgets/array/array.widget';
import { BooleanWidget } from './widgets/boolean/boolean.widget';
import { CheckboxWidget } from './widgets/checkbox/checkbox.widget';
import { CustomWidget } from './widgets/custom/custom.widget';
import { DateWidget } from './widgets/date/date.widget';
import { NumberWidget } from './widgets/number/number.widget';
import { NzWidgetRegistry } from './widgets/nz-widget.registry';
import { ObjectWidget } from './widgets/object/object.widget';
import { RadioWidget } from './widgets/radio/radio.widget';
import { SelectWidget } from './widgets/select/select.widget';
import { StringWidget } from './widgets/string/string.widget';
import { TextWidget } from './widgets/text/text.widget';
import { TextareaWidget } from './widgets/textarea/textarea.widget';
import * as i0 from "@angular/core";
const ZORROS = [
    NzButtonModule,
    NzCardModule,
    NzCheckboxModule,
    NzDatePickerModule,
    NzFormModule,
    NzGridModule,
    NzIconModule,
    NzInputModule,
    NzInputNumberModule,
    NzModalModule,
    NzRadioModule,
    NzSelectModule,
    NzSwitchModule,
    NzToolTipModule
];
const COMPONENTS = [SFComponent, SFItemComponent, SFItemWrapComponent, SFTemplateDirective, SFFixedDirective];
const WIDGETS = [
    ObjectWidget,
    ArrayWidget,
    StringWidget,
    NumberWidget,
    DateWidget,
    RadioWidget,
    CheckboxWidget,
    BooleanWidget,
    TextareaWidget,
    SelectWidget,
    CustomWidget,
    TextWidget
];
// #endregion
export class DelonFormModule {
    static forRoot() {
        return {
            ngModule: DelonFormModule,
            providers: [
                {
                    provide: SchemaValidatorFactory,
                    useClass: AjvSchemaValidatorFactory,
                    deps: [AlainConfigService, NgZone]
                },
                { provide: WidgetRegistry, useClass: NzWidgetRegistry }
            ]
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.7", ngImport: i0, type: DelonFormModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.7", ngImport: i0, type: DelonFormModule, declarations: [SFComponent, SFItemComponent, SFItemWrapComponent, SFTemplateDirective, SFFixedDirective, ObjectWidget,
            ArrayWidget,
            StringWidget,
            NumberWidget,
            DateWidget,
            RadioWidget,
            CheckboxWidget,
            BooleanWidget,
            TextareaWidget,
            SelectWidget,
            CustomWidget,
            TextWidget], imports: [CommonModule, FormsModule, DelonLocaleModule, NzButtonModule,
            NzCardModule,
            NzCheckboxModule,
            NzDatePickerModule,
            NzFormModule,
            NzGridModule,
            NzIconModule,
            NzInputModule,
            NzInputNumberModule,
            NzModalModule,
            NzRadioModule,
            NzSelectModule,
            NzSwitchModule,
            NzToolTipModule], exports: [SFComponent, SFItemComponent, SFItemWrapComponent, SFTemplateDirective, SFFixedDirective] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.7", ngImport: i0, type: DelonFormModule, imports: [CommonModule, FormsModule, DelonLocaleModule, ZORROS] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.7", ngImport: i0, type: DelonFormModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, FormsModule, DelonLocaleModule, ...ZORROS],
                    declarations: [...COMPONENTS, ...WIDGETS],
                    exports: COMPONENTS
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS9zcmMvbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlDQUFpQztBQUNqQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXhELE9BQU8sRUFB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QVU7WUFDVixXQUFXO1lBQ1gsY0FBYztZQUNkLGFBQWE7WUFDYixjQUFjO1lBQ2QsWUFBWTtZQUNaLFlBQVk7WUFDWixVQUFVLGFBTUEsWUFBWSxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsRUE1RHRELGNBQWM7WUFDZCxZQUFZO1lBQ1osZ0JBQWdCO1lBQ2hCLGtCQUFrQjtZQUNsQixZQUFZO1lBQ1osWUFBWTtZQUNaLFlBQVk7WUFDWixhQUFhO1lBQ2IsbUJBQW1CO1lBQ25CLGFBQWE7WUFDYixhQUFhO1lBQ2IsY0FBYztZQUNkLGNBQWM7WUFDZCxlQUFlLGFBVUcsV0FBVyxFQUFFLGVBQWUsRUFBRSxtQkFBbUIsRUFBRSxtQkFBbUIsRUFBRSxnQkFBZ0I7K0dBeUMvRixlQUFlLFlBSmhCLFlBQVksRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUssTUFBTTs7MkZBSXRELGVBQWU7a0JBTDNCLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxHQUFHLE1BQU0sQ0FBQztvQkFDbEUsWUFBWSxFQUFFLENBQUMsR0FBRyxVQUFVLEVBQUUsR0FBRyxPQUFPLENBQUM7b0JBQ3pDLE9BQU8sRUFBRSxVQUFVO2lCQUNwQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9vcmRlciAqL1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBOekJ1dHRvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvYnV0dG9uJztcbmltcG9ydCB7IE56Q2FyZE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY2FyZCc7XG5pbXBvcnQgeyBOekNoZWNrYm94TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jaGVja2JveCc7XG5pbXBvcnQgeyBOekRhdGVQaWNrZXJNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2RhdGUtcGlja2VyJztcbmltcG9ydCB7IE56Rm9ybU1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvZm9ybSc7XG5pbXBvcnQgeyBOekdyaWRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2dyaWQnO1xuaW1wb3J0IHsgTnpJY29uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcbmltcG9ydCB7IE56SW5wdXRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2lucHV0JztcbmltcG9ydCB7IE56SW5wdXROdW1iZXJNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2lucHV0LW51bWJlcic7XG5pbXBvcnQgeyBOek1vZGFsTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9tb2RhbCc7XG5pbXBvcnQgeyBOelJhZGlvTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9yYWRpbyc7XG5pbXBvcnQgeyBOelNlbGVjdE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvc2VsZWN0JztcbmltcG9ydCB7IE56U3dpdGNoTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9zd2l0Y2gnO1xuaW1wb3J0IHsgTnpUb29sVGlwTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC90b29sdGlwJztcblxuaW1wb3J0IHsgRGVsb25Mb2NhbGVNb2R1bGUgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwvY29uZmlnJztcblxuY29uc3QgWk9SUk9TID0gW1xuICBOekJ1dHRvbk1vZHVsZSxcbiAgTnpDYXJkTW9kdWxlLFxuICBOekNoZWNrYm94TW9kdWxlLFxuICBOekRhdGVQaWNrZXJNb2R1bGUsXG4gIE56Rm9ybU1vZHVsZSxcbiAgTnpHcmlkTW9kdWxlLFxuICBOekljb25Nb2R1bGUsXG4gIE56SW5wdXRNb2R1bGUsXG4gIE56SW5wdXROdW1iZXJNb2R1bGUsXG4gIE56TW9kYWxNb2R1bGUsXG4gIE56UmFkaW9Nb2R1bGUsXG4gIE56U2VsZWN0TW9kdWxlLFxuICBOelN3aXRjaE1vZHVsZSxcbiAgTnpUb29sVGlwTW9kdWxlXG5dO1xuXG5pbXBvcnQgeyBTRkZpeGVkRGlyZWN0aXZlIH0gZnJvbSAnLi9zZi1maXhlZC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU0ZJdGVtV3JhcENvbXBvbmVudCB9IGZyb20gJy4vc2YtaXRlbS13cmFwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTRkl0ZW1Db21wb25lbnQgfSBmcm9tICcuL3NmLWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IFNGQ29tcG9uZW50IH0gZnJvbSAnLi9zZi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWp2U2NoZW1hVmFsaWRhdG9yRmFjdG9yeSwgU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSB9IGZyb20gJy4vdmFsaWRhdG9yLmZhY3RvcnknO1xuaW1wb3J0IHsgU0ZUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vd2lkZ2V0cy9jdXN0b20vc2YtdGVtcGxhdGUuZGlyZWN0aXZlJztcblxuY29uc3QgQ09NUE9ORU5UUyA9IFtTRkNvbXBvbmVudCwgU0ZJdGVtQ29tcG9uZW50LCBTRkl0ZW1XcmFwQ29tcG9uZW50LCBTRlRlbXBsYXRlRGlyZWN0aXZlLCBTRkZpeGVkRGlyZWN0aXZlXTtcblxuLy8gI3JlZ2lvbiB3aWRnZXRzXG5cbmltcG9ydCB7IFdpZGdldFJlZ2lzdHJ5IH0gZnJvbSAnLi93aWRnZXQuZmFjdG9yeSc7XG5pbXBvcnQgeyBBcnJheVdpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy9hcnJheS9hcnJheS53aWRnZXQnO1xuaW1wb3J0IHsgQm9vbGVhbldpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy9ib29sZWFuL2Jvb2xlYW4ud2lkZ2V0JztcbmltcG9ydCB7IENoZWNrYm94V2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL2NoZWNrYm94L2NoZWNrYm94LndpZGdldCc7XG5pbXBvcnQgeyBDdXN0b21XaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvY3VzdG9tL2N1c3RvbS53aWRnZXQnO1xuaW1wb3J0IHsgRGF0ZVdpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy9kYXRlL2RhdGUud2lkZ2V0JztcbmltcG9ydCB7IE51bWJlcldpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy9udW1iZXIvbnVtYmVyLndpZGdldCc7XG5pbXBvcnQgeyBOeldpZGdldFJlZ2lzdHJ5IH0gZnJvbSAnLi93aWRnZXRzL256LXdpZGdldC5yZWdpc3RyeSc7XG5pbXBvcnQgeyBPYmplY3RXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvb2JqZWN0L29iamVjdC53aWRnZXQnO1xuaW1wb3J0IHsgUmFkaW9XaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvcmFkaW8vcmFkaW8ud2lkZ2V0JztcbmltcG9ydCB7IFNlbGVjdFdpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy9zZWxlY3Qvc2VsZWN0LndpZGdldCc7XG5pbXBvcnQgeyBTdHJpbmdXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvc3RyaW5nL3N0cmluZy53aWRnZXQnO1xuaW1wb3J0IHsgVGV4dFdpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy90ZXh0L3RleHQud2lkZ2V0JztcbmltcG9ydCB7IFRleHRhcmVhV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL3RleHRhcmVhL3RleHRhcmVhLndpZGdldCc7XG5cbmNvbnN0IFdJREdFVFMgPSBbXG4gIE9iamVjdFdpZGdldCxcbiAgQXJyYXlXaWRnZXQsXG4gIFN0cmluZ1dpZGdldCxcbiAgTnVtYmVyV2lkZ2V0LFxuICBEYXRlV2lkZ2V0LFxuICBSYWRpb1dpZGdldCxcbiAgQ2hlY2tib3hXaWRnZXQsXG4gIEJvb2xlYW5XaWRnZXQsXG4gIFRleHRhcmVhV2lkZ2V0LFxuICBTZWxlY3RXaWRnZXQsXG4gIEN1c3RvbVdpZGdldCxcbiAgVGV4dFdpZGdldFxuXTtcblxuLy8gI2VuZHJlZ2lvblxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgRGVsb25Mb2NhbGVNb2R1bGUsIC4uLlpPUlJPU10sXG4gIGRlY2xhcmF0aW9uczogWy4uLkNPTVBPTkVOVFMsIC4uLldJREdFVFNdLFxuICBleHBvcnRzOiBDT01QT05FTlRTXG59KVxuZXhwb3J0IGNsYXNzIERlbG9uRm9ybU1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8RGVsb25Gb3JtTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBEZWxvbkZvcm1Nb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IFNjaGVtYVZhbGlkYXRvckZhY3RvcnksXG4gICAgICAgICAgdXNlQ2xhc3M6IEFqdlNjaGVtYVZhbGlkYXRvckZhY3RvcnksXG4gICAgICAgICAgZGVwczogW0FsYWluQ29uZmlnU2VydmljZSwgTmdab25lXVxuICAgICAgICB9LFxuICAgICAgICB7IHByb3ZpZGU6IFdpZGdldFJlZ2lzdHJ5LCB1c2VDbGFzczogTnpXaWRnZXRSZWdpc3RyeSB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19