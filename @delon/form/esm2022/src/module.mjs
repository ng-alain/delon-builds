/* eslint-disable import/order */
import { CommonModule } from '@angular/common';
import { NgModule, NgZone } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCascaderModule } from 'ng-zorro-antd/cascader';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzMentionModule } from 'ng-zorro-antd/mention';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTransferModule } from 'ng-zorro-antd/transfer';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzUploadModule } from 'ng-zorro-antd/upload';
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
import { AutoCompleteWidget } from './widgets/autocomplete/autocomplete.widget';
import { BooleanWidget } from './widgets/boolean/boolean.widget';
import { CascaderWidget } from './widgets/cascader/cascader.widget';
import { CheckboxWidget } from './widgets/checkbox/checkbox.widget';
import { CustomWidget } from './widgets/custom/custom.widget';
import { DateWidget } from './widgets/date/date.widget';
import { MentionWidget } from './widgets/mention/mention.widget';
import { NumberWidget } from './widgets/number/number.widget';
import { NzWidgetRegistry } from './widgets/nz-widget.registry';
import { ObjectWidget } from './widgets/object/object.widget';
import { RadioWidget } from './widgets/radio/radio.widget';
import { RateWidget } from './widgets/rate/rate.widget';
import { SelectWidget } from './widgets/select/select.widget';
import { SliderWidget } from './widgets/slider/slider.widget';
import { StringWidget } from './widgets/string/string.widget';
import { TagWidget } from './widgets/tag/tag.widget';
import { TextWidget } from './widgets/text/text.widget';
import { TextareaWidget } from './widgets/textarea/textarea.widget';
import { TimeWidget } from './widgets/time/time.widget';
import { TransferWidget } from './widgets/transfer/transfer.widget';
import { TreeSelectWidget } from './widgets/tree-select/tree-select.widget';
import { UploadWidget } from './widgets/upload/upload.widget';
import * as i0 from "@angular/core";
const ZORROS = [
    NzAutocompleteModule,
    NzButtonModule,
    NzCardModule,
    NzCascaderModule,
    NzCheckboxModule,
    NzDatePickerModule,
    NzFormModule,
    NzGridModule,
    NzIconModule,
    NzInputModule,
    NzInputNumberModule,
    NzMentionModule,
    NzModalModule,
    NzRadioModule,
    NzRateModule,
    NzSelectModule,
    NzSliderModule,
    NzSwitchModule,
    NzTagModule,
    NzTimePickerModule,
    NzToolTipModule,
    NzTransferModule,
    NzTreeSelectModule,
    NzUploadModule
];
const COMPONENTS = [SFComponent, SFItemComponent, SFItemWrapComponent, SFTemplateDirective, SFFixedDirective];
const WIDGETS = [
    ObjectWidget,
    ArrayWidget,
    StringWidget,
    NumberWidget,
    DateWidget,
    TimeWidget,
    RadioWidget,
    CheckboxWidget,
    BooleanWidget,
    TextareaWidget,
    SelectWidget,
    TreeSelectWidget,
    TagWidget,
    UploadWidget,
    TransferWidget,
    SliderWidget,
    RateWidget,
    AutoCompleteWidget,
    CascaderWidget,
    MentionWidget,
    CustomWidget,
    TextWidget
];
// #endregion
class DelonFormModule {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.3", ngImport: i0, type: DelonFormModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.3", ngImport: i0, type: DelonFormModule, declarations: [SFComponent, SFItemComponent, SFItemWrapComponent, SFTemplateDirective, SFFixedDirective, ObjectWidget,
            ArrayWidget,
            StringWidget,
            NumberWidget,
            DateWidget,
            TimeWidget,
            RadioWidget,
            CheckboxWidget,
            BooleanWidget,
            TextareaWidget,
            SelectWidget,
            TreeSelectWidget,
            TagWidget,
            UploadWidget,
            TransferWidget,
            SliderWidget,
            RateWidget,
            AutoCompleteWidget,
            CascaderWidget,
            MentionWidget,
            CustomWidget,
            TextWidget], imports: [CommonModule, FormsModule, DelonLocaleModule, NzAutocompleteModule,
            NzButtonModule,
            NzCardModule,
            NzCascaderModule,
            NzCheckboxModule,
            NzDatePickerModule,
            NzFormModule,
            NzGridModule,
            NzIconModule,
            NzInputModule,
            NzInputNumberModule,
            NzMentionModule,
            NzModalModule,
            NzRadioModule,
            NzRateModule,
            NzSelectModule,
            NzSliderModule,
            NzSwitchModule,
            NzTagModule,
            NzTimePickerModule,
            NzToolTipModule,
            NzTransferModule,
            NzTreeSelectModule,
            NzUploadModule], exports: [SFComponent, SFItemComponent, SFItemWrapComponent, SFTemplateDirective, SFFixedDirective] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.3", ngImport: i0, type: DelonFormModule, imports: [CommonModule, FormsModule, DelonLocaleModule, ZORROS] }); }
}
export { DelonFormModule };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.3", ngImport: i0, type: DelonFormModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, FormsModule, DelonLocaleModule, ...ZORROS],
                    declarations: [...COMPONENTS, ...WIDGETS],
                    exports: COMPONENTS
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS9zcmMvbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlDQUFpQztBQUNqQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzFELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNwRCxPQUFP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QUFFLENBQUMsR0FBRyxVQUFVLEVBQUUsR0FBRyxPQUFPLENBQUM7b0JBQ3pDLE9BQU8sRUFBRSxVQUFVO2lCQUNwQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9vcmRlciAqL1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBOekF1dG9jb21wbGV0ZU1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvYXV0by1jb21wbGV0ZSc7XG5pbXBvcnQgeyBOekJ1dHRvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvYnV0dG9uJztcbmltcG9ydCB7IE56Q2FyZE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY2FyZCc7XG5pbXBvcnQgeyBOekNhc2NhZGVyTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jYXNjYWRlcic7XG5pbXBvcnQgeyBOekNoZWNrYm94TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jaGVja2JveCc7XG5pbXBvcnQgeyBOekRhdGVQaWNrZXJNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2RhdGUtcGlja2VyJztcbmltcG9ydCB7IE56Rm9ybU1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvZm9ybSc7XG5pbXBvcnQgeyBOekdyaWRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2dyaWQnO1xuaW1wb3J0IHsgTnpJY29uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcbmltcG9ydCB7IE56SW5wdXRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2lucHV0JztcbmltcG9ydCB7IE56SW5wdXROdW1iZXJNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2lucHV0LW51bWJlcic7XG5pbXBvcnQgeyBOek1lbnRpb25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL21lbnRpb24nO1xuaW1wb3J0IHsgTnpNb2RhbE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvbW9kYWwnO1xuaW1wb3J0IHsgTnpSYWRpb01vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvcmFkaW8nO1xuaW1wb3J0IHsgTnpSYXRlTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9yYXRlJztcbmltcG9ydCB7IE56U2VsZWN0TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9zZWxlY3QnO1xuaW1wb3J0IHsgTnpTbGlkZXJNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3NsaWRlcic7XG5pbXBvcnQgeyBOelN3aXRjaE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvc3dpdGNoJztcbmltcG9ydCB7IE56VGFnTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC90YWcnO1xuaW1wb3J0IHsgTnpUaW1lUGlja2VyTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC90aW1lLXBpY2tlcic7XG5pbXBvcnQgeyBOelRvb2xUaXBNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3Rvb2x0aXAnO1xuaW1wb3J0IHsgTnpUcmFuc2Zlck1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvdHJhbnNmZXInO1xuaW1wb3J0IHsgTnpUcmVlU2VsZWN0TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC90cmVlLXNlbGVjdCc7XG5pbXBvcnQgeyBOelVwbG9hZE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvdXBsb2FkJztcblxuaW1wb3J0IHsgRGVsb25Mb2NhbGVNb2R1bGUgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwvY29uZmlnJztcblxuY29uc3QgWk9SUk9TID0gW1xuICBOekF1dG9jb21wbGV0ZU1vZHVsZSxcbiAgTnpCdXR0b25Nb2R1bGUsXG4gIE56Q2FyZE1vZHVsZSxcbiAgTnpDYXNjYWRlck1vZHVsZSxcbiAgTnpDaGVja2JveE1vZHVsZSxcbiAgTnpEYXRlUGlja2VyTW9kdWxlLFxuICBOekZvcm1Nb2R1bGUsXG4gIE56R3JpZE1vZHVsZSxcbiAgTnpJY29uTW9kdWxlLFxuICBOeklucHV0TW9kdWxlLFxuICBOeklucHV0TnVtYmVyTW9kdWxlLFxuICBOek1lbnRpb25Nb2R1bGUsXG4gIE56TW9kYWxNb2R1bGUsXG4gIE56UmFkaW9Nb2R1bGUsXG4gIE56UmF0ZU1vZHVsZSxcbiAgTnpTZWxlY3RNb2R1bGUsXG4gIE56U2xpZGVyTW9kdWxlLFxuICBOelN3aXRjaE1vZHVsZSxcbiAgTnpUYWdNb2R1bGUsXG4gIE56VGltZVBpY2tlck1vZHVsZSxcbiAgTnpUb29sVGlwTW9kdWxlLFxuICBOelRyYW5zZmVyTW9kdWxlLFxuICBOelRyZWVTZWxlY3RNb2R1bGUsXG4gIE56VXBsb2FkTW9kdWxlXG5dO1xuXG5pbXBvcnQgeyBTRkZpeGVkRGlyZWN0aXZlIH0gZnJvbSAnLi9zZi1maXhlZC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU0ZJdGVtV3JhcENvbXBvbmVudCB9IGZyb20gJy4vc2YtaXRlbS13cmFwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTRkl0ZW1Db21wb25lbnQgfSBmcm9tICcuL3NmLWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IFNGQ29tcG9uZW50IH0gZnJvbSAnLi9zZi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWp2U2NoZW1hVmFsaWRhdG9yRmFjdG9yeSwgU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSB9IGZyb20gJy4vdmFsaWRhdG9yLmZhY3RvcnknO1xuaW1wb3J0IHsgU0ZUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vd2lkZ2V0cy9jdXN0b20vc2YtdGVtcGxhdGUuZGlyZWN0aXZlJztcblxuY29uc3QgQ09NUE9ORU5UUyA9IFtTRkNvbXBvbmVudCwgU0ZJdGVtQ29tcG9uZW50LCBTRkl0ZW1XcmFwQ29tcG9uZW50LCBTRlRlbXBsYXRlRGlyZWN0aXZlLCBTRkZpeGVkRGlyZWN0aXZlXTtcblxuLy8gI3JlZ2lvbiB3aWRnZXRzXG5cbmltcG9ydCB7IFdpZGdldFJlZ2lzdHJ5IH0gZnJvbSAnLi93aWRnZXQuZmFjdG9yeSc7XG5pbXBvcnQgeyBBcnJheVdpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy9hcnJheS9hcnJheS53aWRnZXQnO1xuaW1wb3J0IHsgQXV0b0NvbXBsZXRlV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUud2lkZ2V0JztcbmltcG9ydCB7IEJvb2xlYW5XaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvYm9vbGVhbi9ib29sZWFuLndpZGdldCc7XG5pbXBvcnQgeyBDYXNjYWRlcldpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy9jYXNjYWRlci9jYXNjYWRlci53aWRnZXQnO1xuaW1wb3J0IHsgQ2hlY2tib3hXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvY2hlY2tib3gvY2hlY2tib3gud2lkZ2V0JztcbmltcG9ydCB7IEN1c3RvbVdpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy9jdXN0b20vY3VzdG9tLndpZGdldCc7XG5pbXBvcnQgeyBEYXRlV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL2RhdGUvZGF0ZS53aWRnZXQnO1xuaW1wb3J0IHsgTWVudGlvbldpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy9tZW50aW9uL21lbnRpb24ud2lkZ2V0JztcbmltcG9ydCB7IE51bWJlcldpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy9udW1iZXIvbnVtYmVyLndpZGdldCc7XG5pbXBvcnQgeyBOeldpZGdldFJlZ2lzdHJ5IH0gZnJvbSAnLi93aWRnZXRzL256LXdpZGdldC5yZWdpc3RyeSc7XG5pbXBvcnQgeyBPYmplY3RXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvb2JqZWN0L29iamVjdC53aWRnZXQnO1xuaW1wb3J0IHsgUmFkaW9XaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvcmFkaW8vcmFkaW8ud2lkZ2V0JztcbmltcG9ydCB7IFJhdGVXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvcmF0ZS9yYXRlLndpZGdldCc7XG5pbXBvcnQgeyBTZWxlY3RXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvc2VsZWN0L3NlbGVjdC53aWRnZXQnO1xuaW1wb3J0IHsgU2xpZGVyV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL3NsaWRlci9zbGlkZXIud2lkZ2V0JztcbmltcG9ydCB7IFN0cmluZ1dpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy9zdHJpbmcvc3RyaW5nLndpZGdldCc7XG5pbXBvcnQgeyBUYWdXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvdGFnL3RhZy53aWRnZXQnO1xuaW1wb3J0IHsgVGV4dFdpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy90ZXh0L3RleHQud2lkZ2V0JztcbmltcG9ydCB7IFRleHRhcmVhV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL3RleHRhcmVhL3RleHRhcmVhLndpZGdldCc7XG5pbXBvcnQgeyBUaW1lV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL3RpbWUvdGltZS53aWRnZXQnO1xuaW1wb3J0IHsgVHJhbnNmZXJXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvdHJhbnNmZXIvdHJhbnNmZXIud2lkZ2V0JztcbmltcG9ydCB7IFRyZWVTZWxlY3RXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvdHJlZS1zZWxlY3QvdHJlZS1zZWxlY3Qud2lkZ2V0JztcbmltcG9ydCB7IFVwbG9hZFdpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy91cGxvYWQvdXBsb2FkLndpZGdldCc7XG5cbmNvbnN0IFdJREdFVFMgPSBbXG4gIE9iamVjdFdpZGdldCxcbiAgQXJyYXlXaWRnZXQsXG4gIFN0cmluZ1dpZGdldCxcbiAgTnVtYmVyV2lkZ2V0LFxuICBEYXRlV2lkZ2V0LFxuICBUaW1lV2lkZ2V0LFxuICBSYWRpb1dpZGdldCxcbiAgQ2hlY2tib3hXaWRnZXQsXG4gIEJvb2xlYW5XaWRnZXQsXG4gIFRleHRhcmVhV2lkZ2V0LFxuICBTZWxlY3RXaWRnZXQsXG4gIFRyZWVTZWxlY3RXaWRnZXQsXG4gIFRhZ1dpZGdldCxcbiAgVXBsb2FkV2lkZ2V0LFxuICBUcmFuc2ZlcldpZGdldCxcbiAgU2xpZGVyV2lkZ2V0LFxuICBSYXRlV2lkZ2V0LFxuICBBdXRvQ29tcGxldGVXaWRnZXQsXG4gIENhc2NhZGVyV2lkZ2V0LFxuICBNZW50aW9uV2lkZ2V0LFxuICBDdXN0b21XaWRnZXQsXG4gIFRleHRXaWRnZXRcbl07XG5cbi8vICNlbmRyZWdpb25cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIERlbG9uTG9jYWxlTW9kdWxlLCAuLi5aT1JST1NdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRTLCAuLi5XSURHRVRTXSxcbiAgZXhwb3J0czogQ09NUE9ORU5UU1xufSlcbmV4cG9ydCBjbGFzcyBEZWxvbkZvcm1Nb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPERlbG9uRm9ybU1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRGVsb25Gb3JtTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBTY2hlbWFWYWxpZGF0b3JGYWN0b3J5LFxuICAgICAgICAgIHVzZUNsYXNzOiBBanZTY2hlbWFWYWxpZGF0b3JGYWN0b3J5LFxuICAgICAgICAgIGRlcHM6IFtBbGFpbkNvbmZpZ1NlcnZpY2UsIE5nWm9uZV1cbiAgICAgICAgfSxcbiAgICAgICAgeyBwcm92aWRlOiBXaWRnZXRSZWdpc3RyeSwgdXNlQ2xhc3M6IE56V2lkZ2V0UmVnaXN0cnkgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==