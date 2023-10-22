import { ArrayWidget } from './array/array.widget';
import { AutoCompleteWidget } from './autocomplete/autocomplete.widget';
import { BooleanWidget } from './boolean/boolean.widget';
import { CascaderWidget } from './cascader/cascader.widget';
import { CheckboxWidget } from './checkbox/checkbox.widget';
import { CustomWidget } from './custom/custom.widget';
import { DateWidget } from './date/date.widget';
import { MentionWidget } from './mention/mention.widget';
import { NumberWidget } from './number/number.widget';
import { ObjectWidget } from './object/object.widget';
import { RadioWidget } from './radio/radio.widget';
import { RateWidget } from './rate/rate.widget';
import { SelectWidget } from './select/select.widget';
import { SliderWidget } from './slider/slider.widget';
import { StringWidget } from './string/string.widget';
import { TagWidget } from './tag/tag.widget';
import { TextWidget } from './text/text.widget';
import { TextareaWidget } from './textarea/textarea.widget';
import { TimeWidget } from './time/time.widget';
import { TransferWidget } from './transfer/transfer.widget';
import { TreeSelectWidget } from './tree-select/tree-select.widget';
import { UploadWidget } from './upload/upload.widget';
import { WidgetRegistry } from '../widget.factory';
export class NzWidgetRegistry extends WidgetRegistry {
    constructor() {
        super();
        this.register('object', ObjectWidget);
        this.register('array', ArrayWidget);
        this.register('text', TextWidget);
        this.register('string', StringWidget);
        this.register('number', NumberWidget);
        this.register('integer', NumberWidget);
        this.register('date', DateWidget);
        this.register('time', TimeWidget);
        this.register('radio', RadioWidget);
        this.register('checkbox', CheckboxWidget);
        this.register('boolean', BooleanWidget);
        this.register('textarea', TextareaWidget);
        this.register('select', SelectWidget);
        this.register('tree-select', TreeSelectWidget);
        this.register('tag', TagWidget);
        this.register('upload', UploadWidget);
        this.register('transfer', TransferWidget);
        this.register('slider', SliderWidget);
        this.register('rate', RateWidget);
        this.register('autocomplete', AutoCompleteWidget);
        this.register('cascader', CascaderWidget);
        this.register('mention', MentionWidget);
        this.register('custom', CustomWidget);
        this.setDefault(StringWidget);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotd2lkZ2V0LnJlZ2lzdHJ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS9zcmMvd2lkZ2V0cy9uei13aWRnZXQucmVnaXN0cnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzVELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDaEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDaEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzVELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFbkQsTUFBTSxPQUFPLGdCQUFpQixTQUFRLGNBQWM7SUFDbEQ7UUFDRSxLQUFLLEVBQUUsQ0FBQztRQUVSLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBRXBDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUV0QyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFycmF5V2lkZ2V0IH0gZnJvbSAnLi9hcnJheS9hcnJheS53aWRnZXQnO1xuaW1wb3J0IHsgQXV0b0NvbXBsZXRlV2lkZ2V0IH0gZnJvbSAnLi9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLndpZGdldCc7XG5pbXBvcnQgeyBCb29sZWFuV2lkZ2V0IH0gZnJvbSAnLi9ib29sZWFuL2Jvb2xlYW4ud2lkZ2V0JztcbmltcG9ydCB7IENhc2NhZGVyV2lkZ2V0IH0gZnJvbSAnLi9jYXNjYWRlci9jYXNjYWRlci53aWRnZXQnO1xuaW1wb3J0IHsgQ2hlY2tib3hXaWRnZXQgfSBmcm9tICcuL2NoZWNrYm94L2NoZWNrYm94LndpZGdldCc7XG5pbXBvcnQgeyBDdXN0b21XaWRnZXQgfSBmcm9tICcuL2N1c3RvbS9jdXN0b20ud2lkZ2V0JztcbmltcG9ydCB7IERhdGVXaWRnZXQgfSBmcm9tICcuL2RhdGUvZGF0ZS53aWRnZXQnO1xuaW1wb3J0IHsgTWVudGlvbldpZGdldCB9IGZyb20gJy4vbWVudGlvbi9tZW50aW9uLndpZGdldCc7XG5pbXBvcnQgeyBOdW1iZXJXaWRnZXQgfSBmcm9tICcuL251bWJlci9udW1iZXIud2lkZ2V0JztcbmltcG9ydCB7IE9iamVjdFdpZGdldCB9IGZyb20gJy4vb2JqZWN0L29iamVjdC53aWRnZXQnO1xuaW1wb3J0IHsgUmFkaW9XaWRnZXQgfSBmcm9tICcuL3JhZGlvL3JhZGlvLndpZGdldCc7XG5pbXBvcnQgeyBSYXRlV2lkZ2V0IH0gZnJvbSAnLi9yYXRlL3JhdGUud2lkZ2V0JztcbmltcG9ydCB7IFNlbGVjdFdpZGdldCB9IGZyb20gJy4vc2VsZWN0L3NlbGVjdC53aWRnZXQnO1xuaW1wb3J0IHsgU2xpZGVyV2lkZ2V0IH0gZnJvbSAnLi9zbGlkZXIvc2xpZGVyLndpZGdldCc7XG5pbXBvcnQgeyBTdHJpbmdXaWRnZXQgfSBmcm9tICcuL3N0cmluZy9zdHJpbmcud2lkZ2V0JztcbmltcG9ydCB7IFRhZ1dpZGdldCB9IGZyb20gJy4vdGFnL3RhZy53aWRnZXQnO1xuaW1wb3J0IHsgVGV4dFdpZGdldCB9IGZyb20gJy4vdGV4dC90ZXh0LndpZGdldCc7XG5pbXBvcnQgeyBUZXh0YXJlYVdpZGdldCB9IGZyb20gJy4vdGV4dGFyZWEvdGV4dGFyZWEud2lkZ2V0JztcbmltcG9ydCB7IFRpbWVXaWRnZXQgfSBmcm9tICcuL3RpbWUvdGltZS53aWRnZXQnO1xuaW1wb3J0IHsgVHJhbnNmZXJXaWRnZXQgfSBmcm9tICcuL3RyYW5zZmVyL3RyYW5zZmVyLndpZGdldCc7XG5pbXBvcnQgeyBUcmVlU2VsZWN0V2lkZ2V0IH0gZnJvbSAnLi90cmVlLXNlbGVjdC90cmVlLXNlbGVjdC53aWRnZXQnO1xuaW1wb3J0IHsgVXBsb2FkV2lkZ2V0IH0gZnJvbSAnLi91cGxvYWQvdXBsb2FkLndpZGdldCc7XG5pbXBvcnQgeyBXaWRnZXRSZWdpc3RyeSB9IGZyb20gJy4uL3dpZGdldC5mYWN0b3J5JztcblxuZXhwb3J0IGNsYXNzIE56V2lkZ2V0UmVnaXN0cnkgZXh0ZW5kcyBXaWRnZXRSZWdpc3RyeSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnJlZ2lzdGVyKCdvYmplY3QnLCBPYmplY3RXaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ2FycmF5JywgQXJyYXlXaWRnZXQpO1xuXG4gICAgdGhpcy5yZWdpc3RlcigndGV4dCcsIFRleHRXaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ3N0cmluZycsIFN0cmluZ1dpZGdldCk7XG4gICAgdGhpcy5yZWdpc3RlcignbnVtYmVyJywgTnVtYmVyV2lkZ2V0KTtcbiAgICB0aGlzLnJlZ2lzdGVyKCdpbnRlZ2VyJywgTnVtYmVyV2lkZ2V0KTtcbiAgICB0aGlzLnJlZ2lzdGVyKCdkYXRlJywgRGF0ZVdpZGdldCk7XG4gICAgdGhpcy5yZWdpc3RlcigndGltZScsIFRpbWVXaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ3JhZGlvJywgUmFkaW9XaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ2NoZWNrYm94JywgQ2hlY2tib3hXaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ2Jvb2xlYW4nLCBCb29sZWFuV2lkZ2V0KTtcbiAgICB0aGlzLnJlZ2lzdGVyKCd0ZXh0YXJlYScsIFRleHRhcmVhV2lkZ2V0KTtcbiAgICB0aGlzLnJlZ2lzdGVyKCdzZWxlY3QnLCBTZWxlY3RXaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ3RyZWUtc2VsZWN0JywgVHJlZVNlbGVjdFdpZGdldCk7XG4gICAgdGhpcy5yZWdpc3RlcigndGFnJywgVGFnV2lkZ2V0KTtcbiAgICB0aGlzLnJlZ2lzdGVyKCd1cGxvYWQnLCBVcGxvYWRXaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ3RyYW5zZmVyJywgVHJhbnNmZXJXaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ3NsaWRlcicsIFNsaWRlcldpZGdldCk7XG4gICAgdGhpcy5yZWdpc3RlcigncmF0ZScsIFJhdGVXaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ2F1dG9jb21wbGV0ZScsIEF1dG9Db21wbGV0ZVdpZGdldCk7XG4gICAgdGhpcy5yZWdpc3RlcignY2FzY2FkZXInLCBDYXNjYWRlcldpZGdldCk7XG4gICAgdGhpcy5yZWdpc3RlcignbWVudGlvbicsIE1lbnRpb25XaWRnZXQpO1xuICAgIHRoaXMucmVnaXN0ZXIoJ2N1c3RvbScsIEN1c3RvbVdpZGdldCk7XG5cbiAgICB0aGlzLnNldERlZmF1bHQoU3RyaW5nV2lkZ2V0KTtcbiAgfVxufVxuIl19