import { Component, ViewEncapsulation } from '@angular/core';
import { getData, toBool } from '../../utils';
import { ControlUIWidget } from '../../widget';
export class CascaderWidget extends ControlUIWidget {
    constructor() {
        super(...arguments);
        this.data = [];
    }
    ngOnInit() {
        const { clearText, showArrow, showInput, triggerAction, asyncData } = this.ui;
        this.clearText = clearText || '清除';
        this.showArrow = toBool(showArrow, true);
        this.showInput = toBool(showInput, true);
        this.triggerAction = triggerAction || ['click'];
        if (!!asyncData) {
            this.loadData = (node, index) => asyncData(node, index, this).then(() => this.detectChanges());
        }
    }
    reset(value) {
        getData(this.schema, {}, value).subscribe(list => {
            this.data = list;
            this.detectChanges();
        });
    }
    _visibleChange(status) {
        if (this.ui.visibleChange)
            this.ui.visibleChange(status);
    }
    _change(value) {
        this.setValue(value);
        if (this.ui.change) {
            this.ui.change(value);
        }
    }
    _selectionChange(options) {
        if (this.ui.selectionChange) {
            this.ui.selectionChange(options);
        }
    }
    _clear() {
        if (this.ui.clear)
            this.ui.clear();
    }
}
CascaderWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-cascader',
                template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-cascader\n    [nzDisabled]=\"disabled\"\n    [nzSize]=\"ui.size\"\n    [ngModel]=\"value\"\n    (ngModelChange)=\"_change($event)\"\n    [nzOptions]=\"data\"\n    [nzAllowClear]=\"ui.allowClear\"\n    [nzAutoFocus]=\"ui.autoFocus\"\n    [nzChangeOn]=\"ui.changeOn\"\n    [nzChangeOnSelect]=\"ui.changeOnSelect\"\n    [nzColumnClassName]=\"ui.columnClassName\"\n    [nzExpandTrigger]=\"ui.expandTrigger\"\n    [nzMenuClassName]=\"ui.menuClassName\"\n    [nzMenuStyle]=\"ui.menuStyle\"\n    [nzNotFoundContent]=\"ui.notFoundContent\"\n    [nzLabelProperty]=\"ui.labelProperty || 'label'\"\n    [nzValueProperty]=\"ui.valueProperty || 'value'\"\n    [nzLoadData]=\"loadData\"\n    [nzPlaceHolder]=\"ui.placeholder\"\n    [nzShowArrow]=\"showArrow\"\n    [nzShowInput]=\"showInput\"\n    [nzShowSearch]=\"ui.showSearch\"\n    (nzClear)=\"_clear()\"\n    (nzVisibleChange)=\"_visibleChange($event)\"\n    (nzSelectionChange)=\"_selectionChange($event)\"\n  >\n  </nz-cascader>\n</sf-item-wrap>\n",
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FzY2FkZXIud2lkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS9zcmMvd2lkZ2V0cy9jYXNjYWRlci9jYXNjYWRlci53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUlyRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM5QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBUy9DLE1BQU0sT0FBTyxjQUFlLFNBQVEsZUFBdUM7SUFOM0U7O1FBV0UsU0FBSSxHQUFtQixFQUFFLENBQUM7SUF5QzVCLENBQUM7SUF0Q0MsUUFBUTtRQUNOLE1BQU0sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUM5RSxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsSUFBSSxJQUFJLENBQUM7UUFDbkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxDQUFDLFNBQVMsRUFBRTtZQUNmLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFzQixFQUFFLEtBQWEsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1NBQzFIO0lBQ0gsQ0FBQztJQUVELEtBQUssQ0FBQyxLQUFjO1FBQ2xCLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDL0MsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGNBQWMsQ0FBQyxNQUFlO1FBQzVCLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhO1lBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVELE9BQU8sQ0FBQyxLQUFtQjtRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUU7WUFDbEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdkI7SUFDSCxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsT0FBMkI7UUFDMUMsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLGVBQWUsRUFBRTtZQUMzQixJQUFJLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNsQztJQUNILENBQUM7SUFFRCxNQUFNO1FBQ0osSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUs7WUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3JDLENBQUM7OztZQW5ERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLHFuQ0FBcUM7Z0JBQ3JDLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOekNhc2NhZGVyT3B0aW9uIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jYXNjYWRlcic7XG5pbXBvcnQgeyBTRlZhbHVlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlJztcbmltcG9ydCB7IFNGU2NoZW1hRW51bSB9IGZyb20gJy4uLy4uL3NjaGVtYSc7XG5pbXBvcnQgeyBnZXREYXRhLCB0b0Jvb2wgfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgeyBDb250cm9sVUlXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuaW1wb3J0IHsgU0ZDYXNjYWRlcldpZGdldFNjaGVtYSB9IGZyb20gJy4vc2NoZW1hJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtY2FzY2FkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FzY2FkZXIud2lkZ2V0Lmh0bWwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgQ2FzY2FkZXJXaWRnZXQgZXh0ZW5kcyBDb250cm9sVUlXaWRnZXQ8U0ZDYXNjYWRlcldpZGdldFNjaGVtYT4gaW1wbGVtZW50cyBPbkluaXQge1xuICBjbGVhclRleHQ6IHN0cmluZztcbiAgc2hvd0Fycm93OiBib29sZWFuO1xuICBzaG93SW5wdXQ6IGJvb2xlYW47XG4gIHRyaWdnZXJBY3Rpb246IHN0cmluZ1tdO1xuICBkYXRhOiBTRlNjaGVtYUVudW1bXSA9IFtdO1xuICBsb2FkRGF0YTogKG5vZGU6IE56Q2FzY2FkZXJPcHRpb24sIGluZGV4OiBudW1iZXIpID0+IFByb21pc2VMaWtlPGFueT47XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgeyBjbGVhclRleHQsIHNob3dBcnJvdywgc2hvd0lucHV0LCB0cmlnZ2VyQWN0aW9uLCBhc3luY0RhdGEgfSA9IHRoaXMudWk7XG4gICAgdGhpcy5jbGVhclRleHQgPSBjbGVhclRleHQgfHwgJ+a4hemZpCc7XG4gICAgdGhpcy5zaG93QXJyb3cgPSB0b0Jvb2woc2hvd0Fycm93LCB0cnVlKTtcbiAgICB0aGlzLnNob3dJbnB1dCA9IHRvQm9vbChzaG93SW5wdXQsIHRydWUpO1xuICAgIHRoaXMudHJpZ2dlckFjdGlvbiA9IHRyaWdnZXJBY3Rpb24gfHwgWydjbGljayddO1xuICAgIGlmICghIWFzeW5jRGF0YSkge1xuICAgICAgdGhpcy5sb2FkRGF0YSA9IChub2RlOiBOekNhc2NhZGVyT3B0aW9uLCBpbmRleDogbnVtYmVyKSA9PiBhc3luY0RhdGEobm9kZSwgaW5kZXgsIHRoaXMpLnRoZW4oKCkgPT4gdGhpcy5kZXRlY3RDaGFuZ2VzKCkpO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0KHZhbHVlOiBTRlZhbHVlKTogdm9pZCB7XG4gICAgZ2V0RGF0YSh0aGlzLnNjaGVtYSwge30sIHZhbHVlKS5zdWJzY3JpYmUobGlzdCA9PiB7XG4gICAgICB0aGlzLmRhdGEgPSBsaXN0O1xuICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gIH1cblxuICBfdmlzaWJsZUNoYW5nZShzdGF0dXM6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy51aS52aXNpYmxlQ2hhbmdlKSB0aGlzLnVpLnZpc2libGVDaGFuZ2Uoc3RhdHVzKTtcbiAgfVxuXG4gIF9jaGFuZ2UodmFsdWU6IGFueVtdIHwgbnVsbCk6IHZvaWQge1xuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICAgIGlmICh0aGlzLnVpLmNoYW5nZSkge1xuICAgICAgdGhpcy51aS5jaGFuZ2UodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIF9zZWxlY3Rpb25DaGFuZ2Uob3B0aW9uczogTnpDYXNjYWRlck9wdGlvbltdKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudWkuc2VsZWN0aW9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLnVpLnNlbGVjdGlvbkNoYW5nZShvcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBfY2xlYXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudWkuY2xlYXIpIHRoaXMudWkuY2xlYXIoKTtcbiAgfVxufVxuIl19