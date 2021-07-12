import { Component, ViewEncapsulation } from '@angular/core';
import { format } from 'date-fns';
import { toBool } from '../../utils';
import { ControlUIWidget } from '../../widget';
export class TimeWidget extends ControlUIWidget {
    constructor() {
        super(...arguments);
        this.displayValue = null;
    }
    ngOnInit() {
        const ui = this.ui;
        this.valueFormat = ui._format;
        const opt = {
            displayFormat: ui.displayFormat || 'HH:mm:ss',
            allowEmpty: toBool(ui.allowEmpty, true),
            clearText: ui.clearText || '清除',
            defaultOpenValue: ui.defaultOpenValue || new Date(),
            hideDisabledOptions: toBool(ui.hideDisabledOptions, false),
            use12Hours: toBool(ui.use12Hours, false),
            hourStep: ui.hourStep || 1,
            minuteStep: ui.minuteStep || 1,
            secondStep: ui.secondStep || 1
        };
        if (opt.use12Hours && !ui.displayFormat) {
            opt.displayFormat = `h:mm:ss a`;
        }
        this.i = opt;
    }
    reset(value) {
        if (value instanceof Date) {
            this.displayValue = value;
            this.detectChanges();
            return;
        }
        let v = value != null && value.toString().length ? new Date(value) : null;
        // trying restore full Date format
        if (v != null && v.toString() === 'Invalid Date') {
            if (value.toString().split(':').length <= 1) {
                value += ':00';
            }
            v = new Date(`1970-1-1 ${value}`);
        }
        this.displayValue = v;
        this.detectChanges();
    }
    _change(value) {
        if (this.ui.change) {
            this.ui.change(value);
        }
        if (value == null) {
            this.setValue(null);
            return;
        }
        if (this.ui.utcEpoch === true) {
            this.setValue(Date.UTC(1970, 0, 1, value.getHours(), value.getMinutes(), value.getSeconds()));
            return;
        }
        this.setValue(format(value, this.valueFormat));
    }
    _openChange(status) {
        if (this.ui.openChange) {
            this.ui.openChange(status);
        }
    }
}
TimeWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-time',
                template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-time-picker\n    [nzId]=\"id\"\n    [(ngModel)]=\"displayValue\"\n    (ngModelChange)=\"_change($event)\"\n    [nzDisabled]=\"disabled\"\n    [nzSize]=\"$any(ui.size)\"\n    [nzFormat]=\"i.displayFormat\"\n    [nzAllowEmpty]=\"i.allowEmpty\"\n    [nzClearText]=\"i.clearText\"\n    [nzDefaultOpenValue]=\"i.defaultOpenValue\"\n    [nzDisabledHours]=\"ui.disabledHours\"\n    [nzDisabledMinutes]=\"ui.disabledMinutes\"\n    [nzDisabledSeconds]=\"ui.disabledSeconds\"\n    [nzHideDisabledOptions]=\"i.hideDisabledOptions\"\n    [nzUse12Hours]=\"i.use12Hours\"\n    [nzHourStep]=\"i.hourStep\"\n    [nzMinuteStep]=\"i.minuteStep\"\n    [nzSecondStep]=\"i.secondStep\"\n    [nzPopupClassName]=\"ui.popupClassName!\"\n    [nzPlaceHolder]=\"ui.placeholder!\"\n    [nzNowText]=\"ui.nowText!\"\n    [nzOkText]=\"ui.okText!\"\n    (nzOpenChange)=\"_openChange($event)\"\n  >\n  </nz-time-picker>\n</sf-item-wrap>\n",
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS53aWRnZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3NyYy93aWRnZXRzL3RpbWUvdGltZS53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVyRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBR2xDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDckMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQVMvQyxNQUFNLE9BQU8sVUFBVyxTQUFRLGVBQW1DO0lBTm5FOztRQVFFLGlCQUFZLEdBQWdCLElBQUksQ0FBQztJQThEbkMsQ0FBQztJQTNEQyxRQUFRO1FBQ04sTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUM7UUFDOUIsTUFBTSxHQUFHLEdBQUc7WUFDVixhQUFhLEVBQUUsRUFBRSxDQUFDLGFBQWEsSUFBSSxVQUFVO1lBQzdDLFVBQVUsRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUM7WUFDdkMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxTQUFTLElBQUksSUFBSTtZQUMvQixnQkFBZ0IsRUFBRSxFQUFFLENBQUMsZ0JBQWdCLElBQUksSUFBSSxJQUFJLEVBQUU7WUFDbkQsbUJBQW1CLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxLQUFLLENBQUM7WUFDMUQsVUFBVSxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQztZQUN4QyxRQUFRLEVBQUUsRUFBRSxDQUFDLFFBQVEsSUFBSSxDQUFDO1lBQzFCLFVBQVUsRUFBRSxFQUFFLENBQUMsVUFBVSxJQUFJLENBQUM7WUFDOUIsVUFBVSxFQUFFLEVBQUUsQ0FBQyxVQUFVLElBQUksQ0FBQztTQUMvQixDQUFDO1FBQ0YsSUFBSSxHQUFHLENBQUMsVUFBVSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRTtZQUN2QyxHQUFHLENBQUMsYUFBYSxHQUFHLFdBQVcsQ0FBQztTQUNqQztRQUNELElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQ2YsQ0FBQztJQUVELEtBQUssQ0FBQyxLQUFjO1FBQ2xCLElBQUksS0FBSyxZQUFZLElBQUksRUFBRTtZQUN6QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztZQUMxQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDckIsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLEdBQUcsS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBRTFFLGtDQUFrQztRQUNsQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxLQUFLLGNBQWMsRUFBRTtZQUNoRCxJQUFJLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtnQkFDM0MsS0FBSyxJQUFJLEtBQUssQ0FBQzthQUNoQjtZQUNELENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssRUFBRSxDQUFDLENBQUM7U0FDbkM7UUFDRCxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELE9BQU8sQ0FBQyxLQUFrQjtRQUN4QixJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3ZCO1FBQ0QsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEIsT0FBTztTQUNSO1FBQ0QsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsS0FBSyxJQUFJLEVBQUU7WUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUUsRUFBRSxLQUFLLENBQUMsVUFBVSxFQUFFLEVBQUUsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM5RixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVksQ0FBQyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELFdBQVcsQ0FBQyxNQUFlO1FBQ3pCLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUU7WUFDdEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDNUI7SUFDSCxDQUFDOzs7WUFyRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2dCQUNuQixnaUNBQWlDO2dCQUNqQyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdkYXRlLWZucyc7XG5cbmltcG9ydCB7IFNGVmFsdWUgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgdG9Cb29sIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgQ29udHJvbFVJV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcbmltcG9ydCB7IFNGVGltZVdpZGdldFNjaGVtYSB9IGZyb20gJy4vc2NoZW1hJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtdGltZScsXG4gIHRlbXBsYXRlVXJsOiAnLi90aW1lLndpZGdldC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgVGltZVdpZGdldCBleHRlbmRzIENvbnRyb2xVSVdpZGdldDxTRlRpbWVXaWRnZXRTY2hlbWE+IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSB2YWx1ZUZvcm1hdDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBkaXNwbGF5VmFsdWU6IERhdGUgfCBudWxsID0gbnVsbDtcbiAgaTogYW55O1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHVpID0gdGhpcy51aTtcbiAgICB0aGlzLnZhbHVlRm9ybWF0ID0gdWkuX2Zvcm1hdDtcbiAgICBjb25zdCBvcHQgPSB7XG4gICAgICBkaXNwbGF5Rm9ybWF0OiB1aS5kaXNwbGF5Rm9ybWF0IHx8ICdISDptbTpzcycsXG4gICAgICBhbGxvd0VtcHR5OiB0b0Jvb2wodWkuYWxsb3dFbXB0eSwgdHJ1ZSksXG4gICAgICBjbGVhclRleHQ6IHVpLmNsZWFyVGV4dCB8fCAn5riF6ZmkJyxcbiAgICAgIGRlZmF1bHRPcGVuVmFsdWU6IHVpLmRlZmF1bHRPcGVuVmFsdWUgfHwgbmV3IERhdGUoKSxcbiAgICAgIGhpZGVEaXNhYmxlZE9wdGlvbnM6IHRvQm9vbCh1aS5oaWRlRGlzYWJsZWRPcHRpb25zLCBmYWxzZSksXG4gICAgICB1c2UxMkhvdXJzOiB0b0Jvb2wodWkudXNlMTJIb3VycywgZmFsc2UpLFxuICAgICAgaG91clN0ZXA6IHVpLmhvdXJTdGVwIHx8IDEsXG4gICAgICBtaW51dGVTdGVwOiB1aS5taW51dGVTdGVwIHx8IDEsXG4gICAgICBzZWNvbmRTdGVwOiB1aS5zZWNvbmRTdGVwIHx8IDFcbiAgICB9O1xuICAgIGlmIChvcHQudXNlMTJIb3VycyAmJiAhdWkuZGlzcGxheUZvcm1hdCkge1xuICAgICAgb3B0LmRpc3BsYXlGb3JtYXQgPSBgaDptbTpzcyBhYDtcbiAgICB9XG4gICAgdGhpcy5pID0gb3B0O1xuICB9XG5cbiAgcmVzZXQodmFsdWU6IFNGVmFsdWUpOiB2b2lkIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICB0aGlzLmRpc3BsYXlWYWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCB2ID0gdmFsdWUgIT0gbnVsbCAmJiB2YWx1ZS50b1N0cmluZygpLmxlbmd0aCA/IG5ldyBEYXRlKHZhbHVlKSA6IG51bGw7XG5cbiAgICAvLyB0cnlpbmcgcmVzdG9yZSBmdWxsIERhdGUgZm9ybWF0XG4gICAgaWYgKHYgIT0gbnVsbCAmJiB2LnRvU3RyaW5nKCkgPT09ICdJbnZhbGlkIERhdGUnKSB7XG4gICAgICBpZiAodmFsdWUudG9TdHJpbmcoKS5zcGxpdCgnOicpLmxlbmd0aCA8PSAxKSB7XG4gICAgICAgIHZhbHVlICs9ICc6MDAnO1xuICAgICAgfVxuICAgICAgdiA9IG5ldyBEYXRlKGAxOTcwLTEtMSAke3ZhbHVlfWApO1xuICAgIH1cbiAgICB0aGlzLmRpc3BsYXlWYWx1ZSA9IHY7XG4gICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBfY2hhbmdlKHZhbHVlOiBEYXRlIHwgbnVsbCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnVpLmNoYW5nZSkge1xuICAgICAgdGhpcy51aS5jaGFuZ2UodmFsdWUpO1xuICAgIH1cbiAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgdGhpcy5zZXRWYWx1ZShudWxsKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMudWkudXRjRXBvY2ggPT09IHRydWUpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUoRGF0ZS5VVEMoMTk3MCwgMCwgMSwgdmFsdWUuZ2V0SG91cnMoKSwgdmFsdWUuZ2V0TWludXRlcygpLCB2YWx1ZS5nZXRTZWNvbmRzKCkpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zZXRWYWx1ZShmb3JtYXQodmFsdWUsIHRoaXMudmFsdWVGb3JtYXQhKSk7XG4gIH1cblxuICBfb3BlbkNoYW5nZShzdGF0dXM6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy51aS5vcGVuQ2hhbmdlKSB7XG4gICAgICB0aGlzLnVpLm9wZW5DaGFuZ2Uoc3RhdHVzKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==