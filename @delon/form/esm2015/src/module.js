import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DelonLocaleModule } from '@delon/theme';
import { AlainConfigService } from '@delon/util/config';
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
/** @nocollapse */ DelonFormModule.ɵinj = i0.ɵɵdefineInjector({ factory: function DelonFormModule_Factory(t) { return new (t || DelonFormModule)(); }, imports: [[CommonModule, FormsModule, DelonLocaleModule, ...ZORROS]] });
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
        NzUploadModule], exports: [SFComponent, SFItemComponent, SFItemWrapComponent, SFTemplateDirective, SFFixedDirective] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DelonFormModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, FormsModule, DelonLocaleModule, ...ZORROS],
                declarations: [...COMPONENTS, ...WIDGETS],
                exports: COMPONENTS,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS9zcmMvbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ2pELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0s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WSxFQUFFLENBQUMsR0FBRyxVQUFVLEVBQUUsR0FBRyxPQUFPLENBQUM7Z0JBQ3pDLE9BQU8sRUFBRSxVQUFVO2FBQ3BCOzt1QkE1RG1CLFdBQVcsd0dBQUUsZUFBZSx5REFBNEMsZ0JBQWdCO3VCQThCMUcsWUFBWSw4REE5Qm1CLGVBQWUsRUFBNEMsZ0JBQWdCO3VCQStCMUcsV0FBVyxnT0EvQm9CLGVBQWU7dUJBZ0M5QyxZQUFZLEdBaENvQyxtQkFBbUI7dUJBaUNuRSxZQUFZLEdBakNvQyxtQkFBbUI7dUJBa0NuRSxVQUFVLEdBbENzQyxtQkFBbUI7dUJBbUNuRSxVQUFVLEdBbkNzQyxtQkFBbUI7dUJBb0NuRSxXQUFXLEdBcENxQyxtQkFBbUI7dUJBcUNuRSxjQUFjLHFFQXJDa0MsbUJBQW1CO3VCQXNDbkUsYUFBYSxHQXRDbUMsbUJBQW1CO3VCQXVDbkUsY0FBYyxHQXZDa0MsbUJBQW1CO3VCQXdDbkUsWUFBWSxHQXhDb0MsbUJBQW1CO3VCQXlDbkUsZ0JBQWdCLEdBekNnQyxtQkFBbUI7dUJBMENuRSxTQUFTLEdBMUN1QyxtQkFBbUI7dUJBMkNuRSxZQUFZLEdBM0NvQyxtQkFBbUI7dUJBNENuRSxjQUFjLEdBNUNrQyxtQkFBbUI7dUJBNkNuRSxZQUFZLEdBN0NvQyxtQkFBbUI7dUJBOENuRSxVQUFVLEdBOUNzQyxtQkFBbUI7dUJBK0NuRSxrQkFBa0IsR0EvQzhCLG1CQUFtQjt1QkFnRG5FLGNBQWMsR0FoRGtDLG1CQUFtQjt1QkFpRG5FLGFBQWEsR0FqRG1DLG1CQUFtQjt1QkFrRG5FLFlBQVksR0FsRG9DLG1CQUFtQjt1QkFtRG5FLFVBQVUsR0FuRHNDLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBEZWxvbkxvY2FsZU1vZHVsZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbC9jb25maWcnO1xuaW1wb3J0IHsgTnpBdXRvY29tcGxldGVNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2F1dG8tY29tcGxldGUnO1xuaW1wb3J0IHsgTnpCdXR0b25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2J1dHRvbic7XG5pbXBvcnQgeyBOekNhcmRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NhcmQnO1xuaW1wb3J0IHsgTnpDYXNjYWRlck1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY2FzY2FkZXInO1xuaW1wb3J0IHsgTnpDaGVja2JveE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY2hlY2tib3gnO1xuaW1wb3J0IHsgTnpEYXRlUGlja2VyTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9kYXRlLXBpY2tlcic7XG5pbXBvcnQgeyBOekZvcm1Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2Zvcm0nO1xuaW1wb3J0IHsgTnpHcmlkTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9ncmlkJztcbmltcG9ydCB7IE56SWNvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaWNvbic7XG5pbXBvcnQgeyBOeklucHV0TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pbnB1dCc7XG5pbXBvcnQgeyBOeklucHV0TnVtYmVyTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pbnB1dC1udW1iZXInO1xuaW1wb3J0IHsgTnpNZW50aW9uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9tZW50aW9uJztcbmltcG9ydCB7IE56TW9kYWxNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL21vZGFsJztcbmltcG9ydCB7IE56UmFkaW9Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3JhZGlvJztcbmltcG9ydCB7IE56UmF0ZU1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvcmF0ZSc7XG5pbXBvcnQgeyBOelNlbGVjdE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvc2VsZWN0JztcbmltcG9ydCB7IE56U2xpZGVyTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9zbGlkZXInO1xuaW1wb3J0IHsgTnpTd2l0Y2hNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3N3aXRjaCc7XG5pbXBvcnQgeyBOelRhZ01vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvdGFnJztcbmltcG9ydCB7IE56VGltZVBpY2tlck1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvdGltZS1waWNrZXInO1xuaW1wb3J0IHsgTnpUb29sVGlwTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC90b29sdGlwJztcbmltcG9ydCB7IE56VHJhbnNmZXJNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3RyYW5zZmVyJztcbmltcG9ydCB7IE56VHJlZVNlbGVjdE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvdHJlZS1zZWxlY3QnO1xuaW1wb3J0IHsgTnpVcGxvYWRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3VwbG9hZCc7XG5cbmNvbnN0IFpPUlJPUyA9IFtcbiAgTnpBdXRvY29tcGxldGVNb2R1bGUsXG4gIE56QnV0dG9uTW9kdWxlLFxuICBOekNhcmRNb2R1bGUsXG4gIE56Q2FzY2FkZXJNb2R1bGUsXG4gIE56Q2hlY2tib3hNb2R1bGUsXG4gIE56RGF0ZVBpY2tlck1vZHVsZSxcbiAgTnpGb3JtTW9kdWxlLFxuICBOekdyaWRNb2R1bGUsXG4gIE56SWNvbk1vZHVsZSxcbiAgTnpJbnB1dE1vZHVsZSxcbiAgTnpJbnB1dE51bWJlck1vZHVsZSxcbiAgTnpNZW50aW9uTW9kdWxlLFxuICBOek1vZGFsTW9kdWxlLFxuICBOelJhZGlvTW9kdWxlLFxuICBOelJhdGVNb2R1bGUsXG4gIE56U2VsZWN0TW9kdWxlLFxuICBOelNsaWRlck1vZHVsZSxcbiAgTnpTd2l0Y2hNb2R1bGUsXG4gIE56VGFnTW9kdWxlLFxuICBOelRpbWVQaWNrZXJNb2R1bGUsXG4gIE56VG9vbFRpcE1vZHVsZSxcbiAgTnpUcmFuc2Zlck1vZHVsZSxcbiAgTnpUcmVlU2VsZWN0TW9kdWxlLFxuICBOelVwbG9hZE1vZHVsZSxcbl07XG5cbmltcG9ydCB7IFNGRml4ZWREaXJlY3RpdmUgfSBmcm9tICcuL3NmLWZpeGVkLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBTRkl0ZW1XcmFwQ29tcG9uZW50IH0gZnJvbSAnLi9zZi1pdGVtLXdyYXAuY29tcG9uZW50JztcbmltcG9ydCB7IFNGSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vc2YtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU0ZDb21wb25lbnQgfSBmcm9tICcuL3NmLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBanZTY2hlbWFWYWxpZGF0b3JGYWN0b3J5LCBTY2hlbWFWYWxpZGF0b3JGYWN0b3J5IH0gZnJvbSAnLi92YWxpZGF0b3IuZmFjdG9yeSc7XG5pbXBvcnQgeyBTRlRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi93aWRnZXRzL2N1c3RvbS9zZi10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuXG5jb25zdCBDT01QT05FTlRTID0gW1NGQ29tcG9uZW50LCBTRkl0ZW1Db21wb25lbnQsIFNGSXRlbVdyYXBDb21wb25lbnQsIFNGVGVtcGxhdGVEaXJlY3RpdmUsIFNGRml4ZWREaXJlY3RpdmVdO1xuXG4vLyAjcmVnaW9uIHdpZGdldHNcblxuaW1wb3J0IHsgV2lkZ2V0UmVnaXN0cnkgfSBmcm9tICcuL3dpZGdldC5mYWN0b3J5JztcbmltcG9ydCB7IEFycmF5V2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL2FycmF5L2FycmF5LndpZGdldCc7XG5pbXBvcnQgeyBBdXRvQ29tcGxldGVXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS53aWRnZXQnO1xuaW1wb3J0IHsgQm9vbGVhbldpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy9ib29sZWFuL2Jvb2xlYW4ud2lkZ2V0JztcbmltcG9ydCB7IENhc2NhZGVyV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL2Nhc2NhZGVyL2Nhc2NhZGVyLndpZGdldCc7XG5pbXBvcnQgeyBDaGVja2JveFdpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy9jaGVja2JveC9jaGVja2JveC53aWRnZXQnO1xuaW1wb3J0IHsgQ3VzdG9tV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL2N1c3RvbS9jdXN0b20ud2lkZ2V0JztcbmltcG9ydCB7IERhdGVXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvZGF0ZS9kYXRlLndpZGdldCc7XG5pbXBvcnQgeyBNZW50aW9uV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL21lbnRpb24vbWVudGlvbi53aWRnZXQnO1xuaW1wb3J0IHsgTnVtYmVyV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL251bWJlci9udW1iZXIud2lkZ2V0JztcbmltcG9ydCB7IE56V2lkZ2V0UmVnaXN0cnkgfSBmcm9tICcuL3dpZGdldHMvbnotd2lkZ2V0LnJlZ2lzdHJ5JztcbmltcG9ydCB7IE9iamVjdFdpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy9vYmplY3Qvb2JqZWN0LndpZGdldCc7XG5pbXBvcnQgeyBSYWRpb1dpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy9yYWRpby9yYWRpby53aWRnZXQnO1xuaW1wb3J0IHsgUmF0ZVdpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy9yYXRlL3JhdGUud2lkZ2V0JztcbmltcG9ydCB7IFNlbGVjdFdpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy9zZWxlY3Qvc2VsZWN0LndpZGdldCc7XG5pbXBvcnQgeyBTbGlkZXJXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvc2xpZGVyL3NsaWRlci53aWRnZXQnO1xuaW1wb3J0IHsgU3RyaW5nV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL3N0cmluZy9zdHJpbmcud2lkZ2V0JztcbmltcG9ydCB7IFRhZ1dpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy90YWcvdGFnLndpZGdldCc7XG5pbXBvcnQgeyBUZXh0V2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL3RleHQvdGV4dC53aWRnZXQnO1xuaW1wb3J0IHsgVGV4dGFyZWFXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvdGV4dGFyZWEvdGV4dGFyZWEud2lkZ2V0JztcbmltcG9ydCB7IFRpbWVXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvdGltZS90aW1lLndpZGdldCc7XG5pbXBvcnQgeyBUcmFuc2ZlcldpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy90cmFuc2Zlci90cmFuc2Zlci53aWRnZXQnO1xuaW1wb3J0IHsgVHJlZVNlbGVjdFdpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy90cmVlLXNlbGVjdC90cmVlLXNlbGVjdC53aWRnZXQnO1xuaW1wb3J0IHsgVXBsb2FkV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL3VwbG9hZC91cGxvYWQud2lkZ2V0JztcblxuY29uc3QgV0lER0VUUyA9IFtcbiAgT2JqZWN0V2lkZ2V0LFxuICBBcnJheVdpZGdldCxcbiAgU3RyaW5nV2lkZ2V0LFxuICBOdW1iZXJXaWRnZXQsXG4gIERhdGVXaWRnZXQsXG4gIFRpbWVXaWRnZXQsXG4gIFJhZGlvV2lkZ2V0LFxuICBDaGVja2JveFdpZGdldCxcbiAgQm9vbGVhbldpZGdldCxcbiAgVGV4dGFyZWFXaWRnZXQsXG4gIFNlbGVjdFdpZGdldCxcbiAgVHJlZVNlbGVjdFdpZGdldCxcbiAgVGFnV2lkZ2V0LFxuICBVcGxvYWRXaWRnZXQsXG4gIFRyYW5zZmVyV2lkZ2V0LFxuICBTbGlkZXJXaWRnZXQsXG4gIFJhdGVXaWRnZXQsXG4gIEF1dG9Db21wbGV0ZVdpZGdldCxcbiAgQ2FzY2FkZXJXaWRnZXQsXG4gIE1lbnRpb25XaWRnZXQsXG4gIEN1c3RvbVdpZGdldCxcbiAgVGV4dFdpZGdldCxcbl07XG5cbi8vICNlbmRyZWdpb25cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIERlbG9uTG9jYWxlTW9kdWxlLCAuLi5aT1JST1NdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRTLCAuLi5XSURHRVRTXSxcbiAgZXhwb3J0czogQ09NUE9ORU5UUyxcbn0pXG5leHBvcnQgY2xhc3MgRGVsb25Gb3JtTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxEZWxvbkZvcm1Nb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IERlbG9uRm9ybU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSxcbiAgICAgICAgICB1c2VDbGFzczogQWp2U2NoZW1hVmFsaWRhdG9yRmFjdG9yeSxcbiAgICAgICAgICBkZXBzOiBbQWxhaW5Db25maWdTZXJ2aWNlXSxcbiAgICAgICAgfSxcbiAgICAgICAgeyBwcm92aWRlOiBXaWRnZXRSZWdpc3RyeSwgdXNlQ2xhc3M6IE56V2lkZ2V0UmVnaXN0cnkgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19