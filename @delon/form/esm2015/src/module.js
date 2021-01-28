import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DelonLocaleModule } from '@delon/theme';
import { AlainConfigService, DelonUtilModule } from '@delon/util';
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
import * as i1 from "@angular/forms";
import * as i2 from "ng-zorro-antd/form";
import * as i3 from "@angular/common";
import * as i4 from "ng-zorro-antd/grid";
import * as i5 from "ng-zorro-antd/button";
import * as i6 from "ng-zorro-antd/core/wave";
import * as i7 from "ng-zorro-antd/core/transition-patch";
import * as i8 from "ng-zorro-antd/icon";
import * as i9 from "ng-zorro-antd/card";
import * as i10 from "ng-zorro-antd/tooltip";
import * as i11 from "ng-zorro-antd/input";
import * as i12 from "ng-zorro-antd/input-number";
import * as i13 from "ng-zorro-antd/date-picker";
import * as i14 from "ng-zorro-antd/time-picker";
import * as i15 from "ng-zorro-antd/radio";
import * as i16 from "ng-zorro-antd/checkbox";
import * as i17 from "ng-zorro-antd/switch";
import * as i18 from "ng-zorro-antd/select";
import * as i19 from "ng-zorro-antd/tree-select";
import * as i20 from "ng-zorro-antd/tag";
import * as i21 from "ng-zorro-antd/upload";
import * as i22 from "ng-zorro-antd/transfer";
import * as i23 from "ng-zorro-antd/slider";
import * as i24 from "ng-zorro-antd/rate";
import * as i25 from "ng-zorro-antd/auto-complete";
import * as i26 from "ng-zorro-antd/cascader";
import * as i27 from "ng-zorro-antd/mention";
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
    NzUploadModule,
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
    TextWidget,
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
                    deps: [AlainConfigService],
                },
                { provide: WidgetRegistry, useClass: NzWidgetRegistry },
            ],
        };
    }
}
/** @nocollapse */ DelonFormModule.ɵmod = i0.ɵɵdefineNgModule({ type: DelonFormModule });
/** @nocollapse */ DelonFormModule.ɵinj = i0.ɵɵdefineInjector({ factory: function DelonFormModule_Factory(t) { return new (t || DelonFormModule)(); }, imports: [[CommonModule, FormsModule, DelonUtilModule, DelonLocaleModule, ...ZORROS]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DelonFormModule, { declarations: [SFComponent, SFItemComponent, SFItemWrapComponent, SFTemplateDirective, SFFixedDirective, ObjectWidget,
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
        TextWidget], imports: [CommonModule, FormsModule, DelonUtilModule, DelonLocaleModule, NzAutocompleteModule,
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
        NzUploadModule], exports: [SFComponent, SFItemComponent, SFItemWrapComponent, SFTemplateDirective, SFFixedDirective] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DelonFormModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, FormsModule, DelonUtilModule, DelonLocaleModule, ...ZORROS],
                declarations: [...COMPONENTS, ...WIDGETS],
                entryComponents: [...WIDGETS],
                exports: [...COMPONENTS],
            }]
    }], null, null); })();
i0.ɵɵsetComponentScope(SFComponent, [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.NgForm, i2.NzFormDirective, i3.NgIf, SFItemComponent, i4.NzRowDirective, i2.NzFormItemComponent, i3.NgClass, SFFixedDirective, i4.NzColDirective, i5.NzButtonComponent, i6.NzWaveDirective, i7.ɵNzTransitionPatchDirective, i8.NzIconDirective], []);
i0.ɵɵsetComponentScope(ObjectWidget, [i3.NgIf, i4.NzRowDirective, i3.NgForOf, i4.NzColDirective, SFItemComponent, SFFixedDirective, i9.NzCardComponent, i7.ɵNzTransitionPatchDirective, i8.NzIconDirective, i3.NgTemplateOutlet], []);
i0.ɵɵsetComponentScope(ArrayWidget, [i4.NzRowDirective, i2.NzFormItemComponent, i3.NgIf, i4.NzColDirective, i10.NzTooltipDirective, i7.ɵNzTransitionPatchDirective, i8.NzIconDirective, i5.NzButtonComponent, i6.NzWaveDirective, i3.NgForOf, i9.NzCardComponent, SFItemComponent], []);
i0.ɵɵsetComponentScope(StringWidget, [SFItemWrapComponent, i11.NzInputDirective, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgModel, i3.NgIf, i7.ɵNzTransitionPatchDirective, i11.NzInputGroupComponent, i11.NzInputGroupWhitSuffixOrPrefixDirective, i3.NgTemplateOutlet], []);
i0.ɵɵsetComponentScope(NumberWidget, [SFItemWrapComponent, i12.NzInputNumberComponent, i1.NgControlStatus, i1.NgModel], []);
i0.ɵɵsetComponentScope(DateWidget, [SFItemWrapComponent, i3.NgSwitch, i3.NgSwitchCase, i13.NzDatePickerComponent, i13.NzYearPickerComponent, i1.NgControlStatus, i1.NgModel, i3.NgClass, i13.NzMonthPickerComponent, i13.NzWeekPickerComponent, i13.NzRangePickerComponent, i3.NgSwitchDefault], []);
i0.ɵɵsetComponentScope(TimeWidget, [SFItemWrapComponent, i14.NzTimePickerComponent, i1.NgControlStatus, i1.NgModel], []);
i0.ɵɵsetComponentScope(RadioWidget, [SFItemWrapComponent, i15.NzRadioGroupComponent, i1.NgControlStatus, i1.NgModel, i3.NgIf, i3.NgForOf, i15.NzRadioComponent, i15.NzRadioButtonDirective], []);
i0.ɵɵsetComponentScope(CheckboxWidget, [i3.NgIf, i16.NzCheckboxComponent, i1.NgControlStatus, i1.NgModel, SFItemWrapComponent, i10.NzTooltipDirective, i7.ɵNzTransitionPatchDirective, i8.NzIconDirective, i3.NgTemplateOutlet, i16.NzCheckboxGroupComponent, i16.NzCheckboxWrapperComponent, i4.NzRowDirective, i4.NzColDirective, i3.NgForOf], []);
i0.ɵɵsetComponentScope(BooleanWidget, [SFItemWrapComponent, i17.NzSwitchComponent, i1.NgControlStatus, i1.NgModel], []);
i0.ɵɵsetComponentScope(TextareaWidget, [SFItemWrapComponent, i11.NzInputDirective, i1.DefaultValueAccessor, i11.NzAutosizeDirective, i1.NgControlStatus, i1.NgModel], []);
i0.ɵɵsetComponentScope(SelectWidget, [SFItemWrapComponent, i18.NzSelectComponent, i1.NgControlStatus, i1.NgModel, i3.NgIf, i3.NgForOf, i18.NzOptionComponent, i18.NzOptionGroupComponent, i7.ɵNzTransitionPatchDirective, i8.NzIconDirective], []);
i0.ɵɵsetComponentScope(TreeSelectWidget, [SFItemWrapComponent, i19.NzTreeSelectComponent, i1.NgControlStatus, i1.NgModel], []);
i0.ɵɵsetComponentScope(TagWidget, [SFItemWrapComponent, i7.ɵNzTransitionPatchDirective, i8.NzIconDirective, i3.NgForOf, i20.NzTagComponent, i3.NgIf, i3.NgTemplateOutlet], []);
i0.ɵɵsetComponentScope(UploadWidget, [SFItemWrapComponent, i21.NzUploadComponent, i3.NgSwitch, i3.NgSwitchCase, i7.ɵNzTransitionPatchDirective, i8.NzIconDirective, i3.NgSwitchDefault, i5.NzButtonComponent, i6.NzWaveDirective], []);
i0.ɵɵsetComponentScope(TransferWidget, [SFItemWrapComponent, i22.NzTransferComponent], []);
i0.ɵɵsetComponentScope(SliderWidget, [SFItemWrapComponent, i23.NzSliderComponent, i1.NgControlStatus, i1.NgModel], []);
i0.ɵɵsetComponentScope(RateWidget, [SFItemWrapComponent, i24.NzRateComponent, i1.NgControlStatus, i1.NgModel, i3.NgIf], []);
i0.ɵɵsetComponentScope(AutoCompleteWidget, [SFItemWrapComponent, i11.NzInputDirective, i25.NzAutocompleteTriggerDirective, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgModel, i25.NzAutocompleteComponent, i3.NgForOf, i25.NzAutocompleteOptionComponent], [i3.AsyncPipe]);
i0.ɵɵsetComponentScope(CascaderWidget, [SFItemWrapComponent, i26.NzCascaderComponent, i1.NgControlStatus, i1.NgModel], []);
i0.ɵɵsetComponentScope(MentionWidget, [SFItemWrapComponent, i27.NzMentionComponent, i3.NgIf, i27.NzMentionTriggerDirective, i11.NzInputDirective, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgModel, i11.NzAutosizeDirective], []);
i0.ɵɵsetComponentScope(CustomWidget, [SFItemWrapComponent, i3.NgTemplateOutlet], []);
i0.ɵɵsetComponentScope(TextWidget, [SFItemWrapComponent], []);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS9zcmMvbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ2pELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxlQUFlLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDbEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDcEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDakUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxhQUFhLEVB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LGlCQUFpQixFQUFFLEdBQUcsTUFBTSxDQUFDO2dCQUNuRixZQUFZLEVBQUUsQ0FBQyxHQUFHLFVBQVUsRUFBRSxHQUFHLE9BQU8sQ0FBQztnQkFDekMsZUFBZSxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUM7Z0JBQzdCLE9BQU8sRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDO2FBQ3pCOzt1QkE3RG1CLFdBQVcsd0dBQUUsZUFBZSx5REFBNEMsZ0JBQWdCO3VCQThCMUcsWUFBWSw4REE5Qm1CLGVBQWUsRUFBNEMsZ0JBQWdCO3VCQStCMUcsV0FBVyxnT0EvQm9CLGVBQWU7dUJBZ0M5QyxZQUFZLEdBaENvQyxtQkFBbUI7dUJBaUNuRSxZQUFZLEdBakNvQyxtQkFBbUI7dUJBa0NuRSxVQUFVLEdBbENzQyxtQkFBbUI7dUJBbUNuRSxVQUFVLEdBbkNzQyxtQkFBbUI7dUJBb0NuRSxXQUFXLEdBcENxQyxtQkFBbUI7dUJBcUNuRSxjQUFjLHFFQXJDa0MsbUJBQW1CO3VCQXNDbkUsYUFBYSxHQXRDbUMsbUJBQW1CO3VCQXVDbkUsY0FBYyxHQXZDa0MsbUJBQW1CO3VCQXdDbkUsWUFBWSxHQXhDb0MsbUJBQW1CO3VCQXlDbkUsZ0JBQWdCLEdBekNnQyxtQkFBbUI7dUJBMENuRSxTQUFTLEdBMUN1QyxtQkFBbUI7dUJBMkNuRSxZQUFZLEdBM0NvQyxtQkFBbUI7dUJBNENuRSxjQUFjLEdBNUNrQyxtQkFBbUI7dUJBNkNuRSxZQUFZLEdBN0NvQyxtQkFBbUI7dUJBOENuRSxVQUFVLEdBOUNzQyxtQkFBbUI7dUJBK0NuRSxrQkFBa0IsR0EvQzhCLG1CQUFtQjt1QkFnRG5FLGNBQWMsR0FoRGtDLG1CQUFtQjt1QkFpRG5FLGFBQWEsR0FqRG1DLG1CQUFtQjt1QkFrRG5FLFlBQVksR0FsRG9DLG1CQUFtQjt1QkFtRG5FLFVBQVUsR0FuRHNDLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBEZWxvbkxvY2FsZU1vZHVsZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UsIERlbG9uVXRpbE1vZHVsZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IE56QXV0b2NvbXBsZXRlTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9hdXRvLWNvbXBsZXRlJztcbmltcG9ydCB7IE56QnV0dG9uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9idXR0b24nO1xuaW1wb3J0IHsgTnpDYXJkTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jYXJkJztcbmltcG9ydCB7IE56Q2FzY2FkZXJNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2Nhc2NhZGVyJztcbmltcG9ydCB7IE56Q2hlY2tib3hNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NoZWNrYm94JztcbmltcG9ydCB7IE56RGF0ZVBpY2tlck1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvZGF0ZS1waWNrZXInO1xuaW1wb3J0IHsgTnpGb3JtTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9mb3JtJztcbmltcG9ydCB7IE56R3JpZE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvZ3JpZCc7XG5pbXBvcnQgeyBOekljb25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2ljb24nO1xuaW1wb3J0IHsgTnpJbnB1dE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaW5wdXQnO1xuaW1wb3J0IHsgTnpJbnB1dE51bWJlck1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaW5wdXQtbnVtYmVyJztcbmltcG9ydCB7IE56TWVudGlvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvbWVudGlvbic7XG5pbXBvcnQgeyBOek1vZGFsTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9tb2RhbCc7XG5pbXBvcnQgeyBOelJhZGlvTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9yYWRpbyc7XG5pbXBvcnQgeyBOelJhdGVNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3JhdGUnO1xuaW1wb3J0IHsgTnpTZWxlY3RNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3NlbGVjdCc7XG5pbXBvcnQgeyBOelNsaWRlck1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvc2xpZGVyJztcbmltcG9ydCB7IE56U3dpdGNoTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9zd2l0Y2gnO1xuaW1wb3J0IHsgTnpUYWdNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3RhZyc7XG5pbXBvcnQgeyBOelRpbWVQaWNrZXJNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3RpbWUtcGlja2VyJztcbmltcG9ydCB7IE56VG9vbFRpcE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvdG9vbHRpcCc7XG5pbXBvcnQgeyBOelRyYW5zZmVyTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC90cmFuc2Zlcic7XG5pbXBvcnQgeyBOelRyZWVTZWxlY3RNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3RyZWUtc2VsZWN0JztcbmltcG9ydCB7IE56VXBsb2FkTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC91cGxvYWQnO1xuXG5jb25zdCBaT1JST1MgPSBbXG4gIE56QXV0b2NvbXBsZXRlTW9kdWxlLFxuICBOekJ1dHRvbk1vZHVsZSxcbiAgTnpDYXJkTW9kdWxlLFxuICBOekNhc2NhZGVyTW9kdWxlLFxuICBOekNoZWNrYm94TW9kdWxlLFxuICBOekRhdGVQaWNrZXJNb2R1bGUsXG4gIE56Rm9ybU1vZHVsZSxcbiAgTnpHcmlkTW9kdWxlLFxuICBOekljb25Nb2R1bGUsXG4gIE56SW5wdXRNb2R1bGUsXG4gIE56SW5wdXROdW1iZXJNb2R1bGUsXG4gIE56TWVudGlvbk1vZHVsZSxcbiAgTnpNb2RhbE1vZHVsZSxcbiAgTnpSYWRpb01vZHVsZSxcbiAgTnpSYXRlTW9kdWxlLFxuICBOelNlbGVjdE1vZHVsZSxcbiAgTnpTbGlkZXJNb2R1bGUsXG4gIE56U3dpdGNoTW9kdWxlLFxuICBOelRhZ01vZHVsZSxcbiAgTnpUaW1lUGlja2VyTW9kdWxlLFxuICBOelRvb2xUaXBNb2R1bGUsXG4gIE56VHJhbnNmZXJNb2R1bGUsXG4gIE56VHJlZVNlbGVjdE1vZHVsZSxcbiAgTnpVcGxvYWRNb2R1bGUsXG5dO1xuXG5pbXBvcnQgeyBTRkZpeGVkRGlyZWN0aXZlIH0gZnJvbSAnLi9zZi1maXhlZC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU0ZJdGVtV3JhcENvbXBvbmVudCB9IGZyb20gJy4vc2YtaXRlbS13cmFwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTRkl0ZW1Db21wb25lbnQgfSBmcm9tICcuL3NmLWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IFNGQ29tcG9uZW50IH0gZnJvbSAnLi9zZi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWp2U2NoZW1hVmFsaWRhdG9yRmFjdG9yeSwgU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSB9IGZyb20gJy4vdmFsaWRhdG9yLmZhY3RvcnknO1xuaW1wb3J0IHsgU0ZUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vd2lkZ2V0cy9jdXN0b20vc2YtdGVtcGxhdGUuZGlyZWN0aXZlJztcblxuY29uc3QgQ09NUE9ORU5UUyA9IFtTRkNvbXBvbmVudCwgU0ZJdGVtQ29tcG9uZW50LCBTRkl0ZW1XcmFwQ29tcG9uZW50LCBTRlRlbXBsYXRlRGlyZWN0aXZlLCBTRkZpeGVkRGlyZWN0aXZlXTtcblxuLy8gI3JlZ2lvbiB3aWRnZXRzXG5cbmltcG9ydCB7IFdpZGdldFJlZ2lzdHJ5IH0gZnJvbSAnLi93aWRnZXQuZmFjdG9yeSc7XG5pbXBvcnQgeyBBcnJheVdpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy9hcnJheS9hcnJheS53aWRnZXQnO1xuaW1wb3J0IHsgQXV0b0NvbXBsZXRlV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUud2lkZ2V0JztcbmltcG9ydCB7IEJvb2xlYW5XaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvYm9vbGVhbi9ib29sZWFuLndpZGdldCc7XG5pbXBvcnQgeyBDYXNjYWRlcldpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy9jYXNjYWRlci9jYXNjYWRlci53aWRnZXQnO1xuaW1wb3J0IHsgQ2hlY2tib3hXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvY2hlY2tib3gvY2hlY2tib3gud2lkZ2V0JztcbmltcG9ydCB7IEN1c3RvbVdpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy9jdXN0b20vY3VzdG9tLndpZGdldCc7XG5pbXBvcnQgeyBEYXRlV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL2RhdGUvZGF0ZS53aWRnZXQnO1xuaW1wb3J0IHsgTWVudGlvbldpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy9tZW50aW9uL21lbnRpb24ud2lkZ2V0JztcbmltcG9ydCB7IE51bWJlcldpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy9udW1iZXIvbnVtYmVyLndpZGdldCc7XG5pbXBvcnQgeyBOeldpZGdldFJlZ2lzdHJ5IH0gZnJvbSAnLi93aWRnZXRzL256LXdpZGdldC5yZWdpc3RyeSc7XG5pbXBvcnQgeyBPYmplY3RXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvb2JqZWN0L29iamVjdC53aWRnZXQnO1xuaW1wb3J0IHsgUmFkaW9XaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvcmFkaW8vcmFkaW8ud2lkZ2V0JztcbmltcG9ydCB7IFJhdGVXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvcmF0ZS9yYXRlLndpZGdldCc7XG5pbXBvcnQgeyBTZWxlY3RXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvc2VsZWN0L3NlbGVjdC53aWRnZXQnO1xuaW1wb3J0IHsgU2xpZGVyV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL3NsaWRlci9zbGlkZXIud2lkZ2V0JztcbmltcG9ydCB7IFN0cmluZ1dpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy9zdHJpbmcvc3RyaW5nLndpZGdldCc7XG5pbXBvcnQgeyBUYWdXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvdGFnL3RhZy53aWRnZXQnO1xuaW1wb3J0IHsgVGV4dFdpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy90ZXh0L3RleHQud2lkZ2V0JztcbmltcG9ydCB7IFRleHRhcmVhV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL3RleHRhcmVhL3RleHRhcmVhLndpZGdldCc7XG5pbXBvcnQgeyBUaW1lV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL3RpbWUvdGltZS53aWRnZXQnO1xuaW1wb3J0IHsgVHJhbnNmZXJXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvdHJhbnNmZXIvdHJhbnNmZXIud2lkZ2V0JztcbmltcG9ydCB7IFRyZWVTZWxlY3RXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvdHJlZS1zZWxlY3QvdHJlZS1zZWxlY3Qud2lkZ2V0JztcbmltcG9ydCB7IFVwbG9hZFdpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy91cGxvYWQvdXBsb2FkLndpZGdldCc7XG5cbmNvbnN0IFdJREdFVFMgPSBbXG4gIE9iamVjdFdpZGdldCxcbiAgQXJyYXlXaWRnZXQsXG4gIFN0cmluZ1dpZGdldCxcbiAgTnVtYmVyV2lkZ2V0LFxuICBEYXRlV2lkZ2V0LFxuICBUaW1lV2lkZ2V0LFxuICBSYWRpb1dpZGdldCxcbiAgQ2hlY2tib3hXaWRnZXQsXG4gIEJvb2xlYW5XaWRnZXQsXG4gIFRleHRhcmVhV2lkZ2V0LFxuICBTZWxlY3RXaWRnZXQsXG4gIFRyZWVTZWxlY3RXaWRnZXQsXG4gIFRhZ1dpZGdldCxcbiAgVXBsb2FkV2lkZ2V0LFxuICBUcmFuc2ZlcldpZGdldCxcbiAgU2xpZGVyV2lkZ2V0LFxuICBSYXRlV2lkZ2V0LFxuICBBdXRvQ29tcGxldGVXaWRnZXQsXG4gIENhc2NhZGVyV2lkZ2V0LFxuICBNZW50aW9uV2lkZ2V0LFxuICBDdXN0b21XaWRnZXQsXG4gIFRleHRXaWRnZXQsXG5dO1xuXG4vLyAjZW5kcmVnaW9uXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBEZWxvblV0aWxNb2R1bGUsIERlbG9uTG9jYWxlTW9kdWxlLCAuLi5aT1JST1NdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRTLCAuLi5XSURHRVRTXSxcbiAgZW50cnlDb21wb25lbnRzOiBbLi4uV0lER0VUU10sXG4gIGV4cG9ydHM6IFsuLi5DT01QT05FTlRTXSxcbn0pXG5leHBvcnQgY2xhc3MgRGVsb25Gb3JtTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxEZWxvbkZvcm1Nb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IERlbG9uRm9ybU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSxcbiAgICAgICAgICB1c2VDbGFzczogQWp2U2NoZW1hVmFsaWRhdG9yRmFjdG9yeSxcbiAgICAgICAgICBkZXBzOiBbQWxhaW5Db25maWdTZXJ2aWNlXSxcbiAgICAgICAgfSxcbiAgICAgICAgeyBwcm92aWRlOiBXaWRnZXRSZWdpc3RyeSwgdXNlQ2xhc3M6IE56V2lkZ2V0UmVnaXN0cnkgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19