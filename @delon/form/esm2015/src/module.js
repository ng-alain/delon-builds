/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DelonLocaleModule } from '@delon/theme';
import { DelonUtilModule } from '@delon/util';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { DelonFormConfig } from './config';
import { SFFixedDirective } from './sf-fixed.directive';
import { SFItemWrapComponent } from './sf-item-wrap.component';
import { SFItemComponent } from './sf-item.component';
import { SFComponent } from './sf.component';
import { AjvSchemaValidatorFactory, SchemaValidatorFactory, } from './validator.factory';
import { SFTemplateDirective } from './widgets/custom/sf-template.directive';
/** @type {?} */
const COMPONENTS = [
    SFComponent,
    SFItemComponent,
    SFItemWrapComponent,
    SFTemplateDirective,
    SFFixedDirective,
];
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
/** @type {?} */
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
    /**
     * @return {?}
     */
    static forRoot() {
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
    }
}
DelonFormModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule, DelonUtilModule, DelonLocaleModule, NgZorroAntdModule],
                declarations: [...COMPONENTS, ...WIDGETS],
                entryComponents: [...WIDGETS],
                exports: [...COMPONENTS],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVsRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUNMLHlCQUF5QixFQUN6QixzQkFBc0IsR0FDdkIsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQzs7TUFFdkUsVUFBVSxHQUFHO0lBQ2pCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixnQkFBZ0I7Q0FDakI7O0FBSUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNoRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDakUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDOUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDaEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzlELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDOUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDcEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7O01BRXhELE9BQU8sR0FBRztJQUNkLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWixVQUFVO0lBQ1YsVUFBVTtJQUNWLFdBQVc7SUFDWCxjQUFjO0lBQ2QsYUFBYTtJQUNiLGNBQWM7SUFDZCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxZQUFZO0lBQ1osY0FBYztJQUNkLFlBQVk7SUFDWixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxhQUFhO0lBQ2IsWUFBWTtJQUNaLFVBQVU7Q0FDWDs7QUFVRCxNQUFNLE9BQU8sZUFBZTs7OztJQUMxQixNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsZUFBZTtZQUN6QixTQUFTLEVBQUU7Z0JBQ1QsZUFBZTtnQkFDZjtvQkFDRSxPQUFPLEVBQUUsc0JBQXNCO29CQUMvQixRQUFRLEVBQUUseUJBQXlCO2lCQUNwQztnQkFDRCxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFO2FBQ3hEO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQW5CRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLENBQUM7Z0JBQzNGLFlBQVksRUFBRSxDQUFDLEdBQUcsVUFBVSxFQUFFLEdBQUcsT0FBTyxDQUFDO2dCQUN6QyxlQUFlLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQztnQkFDN0IsT0FBTyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUM7YUFDekIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRGVsb25Mb2NhbGVNb2R1bGUgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgRGVsb25VdGlsTW9kdWxlIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgTmdab3Jyb0FudGRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkJztcblxuaW1wb3J0IHsgRGVsb25Gb3JtQ29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHsgU0ZGaXhlZERpcmVjdGl2ZSB9IGZyb20gJy4vc2YtZml4ZWQuZGlyZWN0aXZlJztcbmltcG9ydCB7IFNGSXRlbVdyYXBDb21wb25lbnQgfSBmcm9tICcuL3NmLWl0ZW0td3JhcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU0ZJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9zZi1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTRkNvbXBvbmVudCB9IGZyb20gJy4vc2YuY29tcG9uZW50JztcbmltcG9ydCB7XG4gIEFqdlNjaGVtYVZhbGlkYXRvckZhY3RvcnksXG4gIFNjaGVtYVZhbGlkYXRvckZhY3RvcnksXG59IGZyb20gJy4vdmFsaWRhdG9yLmZhY3RvcnknO1xuaW1wb3J0IHsgU0ZUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vd2lkZ2V0cy9jdXN0b20vc2YtdGVtcGxhdGUuZGlyZWN0aXZlJztcblxuY29uc3QgQ09NUE9ORU5UUyA9IFtcbiAgU0ZDb21wb25lbnQsXG4gIFNGSXRlbUNvbXBvbmVudCxcbiAgU0ZJdGVtV3JhcENvbXBvbmVudCxcbiAgU0ZUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgU0ZGaXhlZERpcmVjdGl2ZSxcbl07XG5cbi8vICNyZWdpb24gd2lkZ2V0c1xuXG5pbXBvcnQgeyBXaWRnZXRSZWdpc3RyeSB9IGZyb20gJy4vd2lkZ2V0LmZhY3RvcnknO1xuaW1wb3J0IHsgQXJyYXlXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvYXJyYXkvYXJyYXkud2lkZ2V0JztcbmltcG9ydCB7IEF1dG9Db21wbGV0ZVdpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLndpZGdldCc7XG5pbXBvcnQgeyBCb29sZWFuV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL2Jvb2xlYW4vYm9vbGVhbi53aWRnZXQnO1xuaW1wb3J0IHsgQ2FzY2FkZXJXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvY2FzY2FkZXIvY2FzY2FkZXIud2lkZ2V0JztcbmltcG9ydCB7IENoZWNrYm94V2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL2NoZWNrYm94L2NoZWNrYm94LndpZGdldCc7XG5pbXBvcnQgeyBDdXN0b21XaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvY3VzdG9tL2N1c3RvbS53aWRnZXQnO1xuaW1wb3J0IHsgRGF0ZVdpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy9kYXRlL2RhdGUud2lkZ2V0JztcbmltcG9ydCB7IE1lbnRpb25XaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvbWVudGlvbi9tZW50aW9uLndpZGdldCc7XG5pbXBvcnQgeyBOdW1iZXJXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvbnVtYmVyL251bWJlci53aWRnZXQnO1xuaW1wb3J0IHsgTnpXaWRnZXRSZWdpc3RyeSB9IGZyb20gJy4vd2lkZ2V0cy9uei13aWRnZXQucmVnaXN0cnknO1xuaW1wb3J0IHsgT2JqZWN0V2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL29iamVjdC9vYmplY3Qud2lkZ2V0JztcbmltcG9ydCB7IFJhZGlvV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL3JhZGlvL3JhZGlvLndpZGdldCc7XG5pbXBvcnQgeyBSYXRlV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL3JhdGUvcmF0ZS53aWRnZXQnO1xuaW1wb3J0IHsgU2VsZWN0V2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL3NlbGVjdC9zZWxlY3Qud2lkZ2V0JztcbmltcG9ydCB7IFNsaWRlcldpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy9zbGlkZXIvc2xpZGVyLndpZGdldCc7XG5pbXBvcnQgeyBTdHJpbmdXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvc3RyaW5nL3N0cmluZy53aWRnZXQnO1xuaW1wb3J0IHsgVGFnV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL3RhZy90YWcud2lkZ2V0JztcbmltcG9ydCB7IFRleHRXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvdGV4dC90ZXh0LndpZGdldCc7XG5pbXBvcnQgeyBUZXh0YXJlYVdpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy90ZXh0YXJlYS90ZXh0YXJlYS53aWRnZXQnO1xuaW1wb3J0IHsgVGltZVdpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy90aW1lL3RpbWUud2lkZ2V0JztcbmltcG9ydCB7IFRyYW5zZmVyV2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL3RyYW5zZmVyL3RyYW5zZmVyLndpZGdldCc7XG5pbXBvcnQgeyBUcmVlU2VsZWN0V2lkZ2V0IH0gZnJvbSAnLi93aWRnZXRzL3RyZWUtc2VsZWN0L3RyZWUtc2VsZWN0LndpZGdldCc7XG5pbXBvcnQgeyBVcGxvYWRXaWRnZXQgfSBmcm9tICcuL3dpZGdldHMvdXBsb2FkL3VwbG9hZC53aWRnZXQnO1xuXG5jb25zdCBXSURHRVRTID0gW1xuICBPYmplY3RXaWRnZXQsXG4gIEFycmF5V2lkZ2V0LFxuICBTdHJpbmdXaWRnZXQsXG4gIE51bWJlcldpZGdldCxcbiAgRGF0ZVdpZGdldCxcbiAgVGltZVdpZGdldCxcbiAgUmFkaW9XaWRnZXQsXG4gIENoZWNrYm94V2lkZ2V0LFxuICBCb29sZWFuV2lkZ2V0LFxuICBUZXh0YXJlYVdpZGdldCxcbiAgU2VsZWN0V2lkZ2V0LFxuICBUcmVlU2VsZWN0V2lkZ2V0LFxuICBUYWdXaWRnZXQsXG4gIFVwbG9hZFdpZGdldCxcbiAgVHJhbnNmZXJXaWRnZXQsXG4gIFNsaWRlcldpZGdldCxcbiAgUmF0ZVdpZGdldCxcbiAgQXV0b0NvbXBsZXRlV2lkZ2V0LFxuICBDYXNjYWRlcldpZGdldCxcbiAgTWVudGlvbldpZGdldCxcbiAgQ3VzdG9tV2lkZ2V0LFxuICBUZXh0V2lkZ2V0LFxuXTtcblxuLy8gI2VuZHJlZ2lvblxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgRGVsb25VdGlsTW9kdWxlLCBEZWxvbkxvY2FsZU1vZHVsZSwgTmdab3Jyb0FudGRNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRTLCAuLi5XSURHRVRTXSxcbiAgZW50cnlDb21wb25lbnRzOiBbLi4uV0lER0VUU10sXG4gIGV4cG9ydHM6IFsuLi5DT01QT05FTlRTXSxcbn0pXG5leHBvcnQgY2xhc3MgRGVsb25Gb3JtTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBEZWxvbkZvcm1Nb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgRGVsb25Gb3JtQ29uZmlnLFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogU2NoZW1hVmFsaWRhdG9yRmFjdG9yeSxcbiAgICAgICAgICB1c2VDbGFzczogQWp2U2NoZW1hVmFsaWRhdG9yRmFjdG9yeSxcbiAgICAgICAgfSxcbiAgICAgICAgeyBwcm92aWRlOiBXaWRnZXRSZWdpc3RyeSwgdXNlQ2xhc3M6IE56V2lkZ2V0UmVnaXN0cnkgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19