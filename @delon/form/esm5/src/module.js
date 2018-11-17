/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { DelonUtilModule } from '@delon/util';
import { DelonLocaleModule } from '@delon/theme';
import { DelonFormConfig } from './config';
import { SchemaValidatorFactory, AjvSchemaValidatorFactory, } from './validator.factory';
import { SFComponent } from './sf.component';
import { SFItemComponent } from './sf-item.component';
import { SFItemWrapComponent } from './sf-item-wrap.component';
import { SFTemplateDirective } from './widgets/custom/sf-template.directive';
import { SFFixedDirective } from './sf-fixed.directive';
/** @type {?} */
var COMPONENTS = [
    SFComponent,
    SFItemComponent,
    SFItemWrapComponent,
    SFTemplateDirective,
    SFFixedDirective,
];
import { WidgetRegistry } from './widget.factory';
import { NzWidgetRegistry } from './widgets/nz-widget.registry';
import { ObjectWidget } from './widgets/object/object.widget';
import { ArrayWidget } from './widgets/array/array.widget';
import { StringWidget } from './widgets/string/string.widget';
import { NumberWidget } from './widgets/number/number.widget';
import { DateWidget } from './widgets/date/date.widget';
import { TimeWidget } from './widgets/time/time.widget';
import { RadioWidget } from './widgets/radio/radio.widget';
import { CheckboxWidget } from './widgets/checkbox/checkbox.widget';
import { BooleanWidget } from './widgets/boolean/boolean.widget';
import { TextareaWidget } from './widgets/textarea/textarea.widget';
import { SelectWidget } from './widgets/select/select.widget';
import { TreeSelectWidget } from './widgets/tree-select/tree-select.widget';
import { TagWidget } from './widgets/tag/tag.widget';
import { UploadWidget } from './widgets/upload/upload.widget';
import { TransferWidget } from './widgets/transfer/transfer.widget';
import { SliderWidget } from './widgets/slider/slider.widget';
import { CustomWidget } from './widgets/custom/custom.widget';
import { RateWidget } from './widgets/rate/rate.widget';
import { AutoCompleteWidget } from './widgets/autocomplete/autocomplete.widget';
import { CascaderWidget } from './widgets/cascader/cascader.widget';
import { MentionWidget } from './widgets/mention/mention.widget';
import { TextWidget } from './widgets/text/text.widget';
/** @type {?} */
var WIDGETS = [
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
var DelonFormModule = /** @class */ (function () {
    function DelonFormModule() {
    }
    /**
     * @return {?}
     */
    DelonFormModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: DelonFormModule,
            providers: [
                DelonFormConfig,
                {
                    provide: SchemaValidatorFactory,
                    useClass: AjvSchemaValidatorFactory,
                },
                { provide: WidgetRegistry, useClass: NzWidgetRegistry },
            ],
        };
    };
    DelonFormModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FormsModule, DelonUtilModule, DelonLocaleModule, NgZorroAntdModule],
                    declarations: tslib_1.__spread(COMPONENTS, WIDGETS),
                    entryComponents: tslib_1.__spread(WIDGETS),
                    exports: tslib_1.__spread(COMPONENTS),
                },] }
    ];
    return DelonFormModule;
}());
export { DelonFormModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM5QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFakQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsc0JBQXNCLEVBQ3RCLHlCQUF5QixHQUMxQixNQUFNLHFCQUFxQixDQUFDO0FBQzdCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDL0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBRXhELElBQU0sVUFBVSxHQUFHO0lBQ2pCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixnQkFBZ0I7Q0FDakIsQ0FBQztBQUlGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzNELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDOUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDcEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzlELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDOUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDOUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDakUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDRCQUE0QixDQUFDOztBQUV4RCxJQUFNLE9BQU8sR0FBRztJQUNkLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWixVQUFVO0lBQ1YsVUFBVTtJQUNWLFdBQVc7SUFDWCxjQUFjO0lBQ2QsYUFBYTtJQUNiLGNBQWM7SUFDZCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxZQUFZO0lBQ1osY0FBYztJQUNkLFlBQVk7SUFDWixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxhQUFhO0lBQ2IsWUFBWTtJQUNaLFVBQVU7Q0FDWCxDQUFDOzs7Ozs7O0lBV08sdUJBQU87OztJQUFkO1FBQ0UsT0FBTztZQUNMLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFNBQVMsRUFBRTtnQkFDVCxlQUFlO2dCQUNmO29CQUNFLE9BQU8sRUFBRSxzQkFBc0I7b0JBQy9CLFFBQVEsRUFBRSx5QkFBeUI7aUJBQ3BDO2dCQUNELEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUU7YUFDeEQ7U0FDRixDQUFDO0tBQ0g7O2dCQW5CRixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLENBQUM7b0JBQzNGLFlBQVksbUJBQU0sVUFBVSxFQUFLLE9BQU8sQ0FBQztvQkFDekMsZUFBZSxtQkFBTSxPQUFPLENBQUM7b0JBQzdCLE9BQU8sbUJBQU0sVUFBVSxDQUFDO2lCQUN6Qjs7MEJBckZEOztTQXNGYSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5nWm9ycm9BbnRkTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XG5pbXBvcnQgeyBEZWxvblV0aWxNb2R1bGUgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBEZWxvbkxvY2FsZU1vZHVsZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5cbmltcG9ydCB7IERlbG9uRm9ybUNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7XG4gIFNjaGVtYVZhbGlkYXRvckZhY3RvcnksXG4gIEFqdlNjaGVtYVZhbGlkYXRvckZhY3RvcnksXG59IGZyb20gJy4vdmFsaWRhdG9yLmZhY3RvcnknO1xuaW1wb3J0IHsgU0ZDb21wb25lbnQgfSBmcm9tICcuL3NmLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTRkl0ZW1Db21wb25lbnQgfSBmcm9tICcuL3NmLWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IFNGSXRlbVdyYXBDb21wb25lbnQgfSBmcm9tICcuL3NmLWl0ZW0td3JhcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU0ZUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vd2lkZ2V0cy9jdXN0b20vc2YtdGVtcGxhdGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IFNGRml4ZWREaXJlY3RpdmUgfSBmcm9tICcuL3NmLWZpeGVkLmRpcmVjdGl2ZSc7XG5cbmNvbnN0IENPTVBPTkVOVFMgPSBbXG4gIFNGQ29tcG9uZW50LFxuICBTRkl0ZW1Db21wb25lbnQsXG4gIFNGSXRlbVdyYXBDb21wb25lbnQsXG4gIFNGVGVtcGxhdGVEaXJlY3RpdmUsXG4gIFNGRml4ZWREaXJlY3RpdmUsXG5dO1xuXG4vLyAjcmVnaW9uIHdpZGdldHNcblxuaW1wb3J0IHsgV2lkZ2V0UmVnaXN0cnkgfSBmcm9tICcuL3dpZGdldC5mYWN0b3J5JztcbmltcG9ydCB7IE56V2lkZ2V0UmVnaXN0cnkgfSBmcm9tICcuL3dpZGdldHMvbnotd2lkZ2V0LnJlZ2lzdHJ5JztcbmltcG9ydCB7IE9iamVjdFdpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy9vYmplY3Qvb2JqZWN0LndpZGdldCc7XG5pbXBvcnQgeyBBcnJheVdpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy9hcnJheS9hcnJheS53aWRnZXQnO1xuaW1wb3J0IHsgU3RyaW5nV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL3N0cmluZy9zdHJpbmcud2lkZ2V0JztcbmltcG9ydCB7IE51bWJlcldpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy9udW1iZXIvbnVtYmVyLndpZGdldCc7XG5pbXBvcnQgeyBEYXRlV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL2RhdGUvZGF0ZS53aWRnZXQnO1xuaW1wb3J0IHsgVGltZVdpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy90aW1lL3RpbWUud2lkZ2V0JztcbmltcG9ydCB7IFJhZGlvV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL3JhZGlvL3JhZGlvLndpZGdldCc7XG5pbXBvcnQgeyBDaGVja2JveFdpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy9jaGVja2JveC9jaGVja2JveC53aWRnZXQnO1xuaW1wb3J0IHsgQm9vbGVhbldpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy9ib29sZWFuL2Jvb2xlYW4ud2lkZ2V0JztcbmltcG9ydCB7IFRleHRhcmVhV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL3RleHRhcmVhL3RleHRhcmVhLndpZGdldCc7XG5pbXBvcnQgeyBTZWxlY3RXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvc2VsZWN0L3NlbGVjdC53aWRnZXQnO1xuaW1wb3J0IHsgVHJlZVNlbGVjdFdpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy90cmVlLXNlbGVjdC90cmVlLXNlbGVjdC53aWRnZXQnO1xuaW1wb3J0IHsgVGFnV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL3RhZy90YWcud2lkZ2V0JztcbmltcG9ydCB7IFVwbG9hZFdpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy91cGxvYWQvdXBsb2FkLndpZGdldCc7XG5pbXBvcnQgeyBUcmFuc2ZlcldpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy90cmFuc2Zlci90cmFuc2Zlci53aWRnZXQnO1xuaW1wb3J0IHsgU2xpZGVyV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL3NsaWRlci9zbGlkZXIud2lkZ2V0JztcbmltcG9ydCB7IEN1c3RvbVdpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy9jdXN0b20vY3VzdG9tLndpZGdldCc7XG5pbXBvcnQgeyBSYXRlV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL3JhdGUvcmF0ZS53aWRnZXQnO1xuaW1wb3J0IHsgQXV0b0NvbXBsZXRlV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUud2lkZ2V0JztcbmltcG9ydCB7IENhc2NhZGVyV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL2Nhc2NhZGVyL2Nhc2NhZGVyLndpZGdldCc7XG5pbXBvcnQgeyBNZW50aW9uV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL21lbnRpb24vbWVudGlvbi53aWRnZXQnO1xuaW1wb3J0IHsgVGV4dFdpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy90ZXh0L3RleHQud2lkZ2V0JztcblxuY29uc3QgV0lER0VUUyA9IFtcbiAgT2JqZWN0V2lkZ2V0LFxuICBBcnJheVdpZGdldCxcbiAgU3RyaW5nV2lkZ2V0LFxuICBOdW1iZXJXaWRnZXQsXG4gIERhdGVXaWRnZXQsXG4gIFRpbWVXaWRnZXQsXG4gIFJhZGlvV2lkZ2V0LFxuICBDaGVja2JveFdpZGdldCxcbiAgQm9vbGVhbldpZGdldCxcbiAgVGV4dGFyZWFXaWRnZXQsXG4gIFNlbGVjdFdpZGdldCxcbiAgVHJlZVNlbGVjdFdpZGdldCxcbiAgVGFnV2lkZ2V0LFxuICBVcGxvYWRXaWRnZXQsXG4gIFRyYW5zZmVyV2lkZ2V0LFxuICBTbGlkZXJXaWRnZXQsXG4gIFJhdGVXaWRnZXQsXG4gIEF1dG9Db21wbGV0ZVdpZGdldCxcbiAgQ2FzY2FkZXJXaWRnZXQsXG4gIE1lbnRpb25XaWRnZXQsXG4gIEN1c3RvbVdpZGdldCxcbiAgVGV4dFdpZGdldCxcbl07XG5cbi8vICNlbmRyZWdpb25cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIERlbG9uVXRpbE1vZHVsZSwgRGVsb25Mb2NhbGVNb2R1bGUsIE5nWm9ycm9BbnRkTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbLi4uQ09NUE9ORU5UUywgLi4uV0lER0VUU10sXG4gIGVudHJ5Q29tcG9uZW50czogWy4uLldJREdFVFNdLFxuICBleHBvcnRzOiBbLi4uQ09NUE9ORU5UU10sXG59KVxuZXhwb3J0IGNsYXNzIERlbG9uRm9ybU1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRGVsb25Gb3JtTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIERlbG9uRm9ybUNvbmZpZyxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IFNjaGVtYVZhbGlkYXRvckZhY3RvcnksXG4gICAgICAgICAgdXNlQ2xhc3M6IEFqdlNjaGVtYVZhbGlkYXRvckZhY3RvcnksXG4gICAgICAgIH0sXG4gICAgICAgIHsgcHJvdmlkZTogV2lkZ2V0UmVnaXN0cnksIHVzZUNsYXNzOiBOeldpZGdldFJlZ2lzdHJ5IH0sXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==