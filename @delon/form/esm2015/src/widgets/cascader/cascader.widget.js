import { Component, ViewEncapsulation } from '@angular/core';
import { getData, toBool } from '../../utils';
import { ControlUIWidget } from '../../widget';
import * as i0 from "@angular/core";
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
/** @nocollapse */ CascaderWidget.ɵfac = function CascaderWidget_Factory(t) { return ɵCascaderWidget_BaseFactory(t || CascaderWidget); };
/** @nocollapse */ CascaderWidget.ɵcmp = i0.ɵɵngDeclareComponent({ version: "11.1.1", type: CascaderWidget, selector: "sf-cascader", usesInheritance: true, ngImport: i0, template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-cascader\n    [nzDisabled]=\"disabled\"\n    [nzSize]=\"ui.size\"\n    [ngModel]=\"value\"\n    (ngModelChange)=\"_change($event)\"\n    [nzOptions]=\"data\"\n    [nzAllowClear]=\"ui.allowClear\"\n    [nzAutoFocus]=\"ui.autoFocus\"\n    [nzChangeOn]=\"ui.changeOn\"\n    [nzChangeOnSelect]=\"ui.changeOnSelect\"\n    [nzColumnClassName]=\"ui.columnClassName\"\n    [nzExpandTrigger]=\"ui.expandTrigger\"\n    [nzMenuClassName]=\"ui.menuClassName\"\n    [nzMenuStyle]=\"ui.menuStyle\"\n    [nzNotFoundContent]=\"ui.notFoundContent\"\n    [nzLabelProperty]=\"ui.labelProperty || 'label'\"\n    [nzValueProperty]=\"ui.valueProperty || 'value'\"\n    [nzLoadData]=\"loadData\"\n    [nzPlaceHolder]=\"ui.placeholder\"\n    [nzShowArrow]=\"showArrow\"\n    [nzShowInput]=\"showInput\"\n    [nzShowSearch]=\"ui.showSearch\"\n    (nzClear)=\"_clear()\"\n    (nzVisibleChange)=\"_visibleChange($event)\"\n    (nzSelectionChange)=\"_selectionChange($event)\"\n  >\n  </nz-cascader>\n</sf-item-wrap>\n", encapsulation: i0.ViewEncapsulation.None });
const ɵCascaderWidget_BaseFactory = /*@__PURE__*/ i0.ɵɵgetInheritedFactory(CascaderWidget);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CascaderWidget, [{
        type: Component,
        args: [{
                selector: 'sf-cascader',
                templateUrl: './cascader.widget.html',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FzY2FkZXIud2lkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS9zcmMvd2lkZ2V0cy9jYXNjYWRlci9jYXNjYWRlci53aWRnZXQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3NyYy93aWRnZXRzL2Nhc2NhZGVyL2Nhc2NhZGVyLndpZGdldC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJckUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDOUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7QUFTL0MsTUFBTSxPQUFPLGNBQWUsU0FBUSxlQUF1QztJQU4zRTs7UUFXRSxTQUFJLEdBQW1CLEVBQUUsQ0FBQztLQXlDM0I7SUF0Q0MsUUFBUTtRQUNOLE1BQU0sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUM5RSxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsSUFBSSxJQUFJLENBQUM7UUFDbkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxDQUFDLFNBQVMsRUFBRTtZQUNmLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFzQixFQUFFLEtBQWEsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1NBQzFIO0lBQ0gsQ0FBQztJQUVELEtBQUssQ0FBQyxLQUFjO1FBQ2xCLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDL0MsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGNBQWMsQ0FBQyxNQUFlO1FBQzVCLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhO1lBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVELE9BQU8sQ0FBQyxLQUFtQjtRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUU7WUFDbEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdkI7SUFDSCxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsT0FBMkI7UUFDMUMsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLGVBQWUsRUFBRTtZQUMzQixJQUFJLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNsQztJQUNILENBQUM7SUFFRCxNQUFNO1FBQ0osSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUs7WUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3JDLENBQUM7O3NIQTdDVSxjQUFjOzRGQUFkLGNBQWMsMEVDZDNCLDJtQ0E2QkE7MkVEZmEsY0FBYzt1RkFBZCxjQUFjO2NBTjFCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsV0FBVyxFQUFFLHdCQUF3QjtnQkFDckMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56Q2FzY2FkZXJPcHRpb24gfSBmcm9tICduZy16b3Jyby1hbnRkL2Nhc2NhZGVyJztcbmltcG9ydCB7IFNGVmFsdWUgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgU0ZTY2hlbWFFbnVtIH0gZnJvbSAnLi4vLi4vc2NoZW1hJztcbmltcG9ydCB7IGdldERhdGEsIHRvQm9vbCB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IENvbnRyb2xVSVdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5pbXBvcnQgeyBTRkNhc2NhZGVyV2lkZ2V0U2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1jYXNjYWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXNjYWRlci53aWRnZXQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBDYXNjYWRlcldpZGdldCBleHRlbmRzIENvbnRyb2xVSVdpZGdldDxTRkNhc2NhZGVyV2lkZ2V0U2NoZW1hPiBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNsZWFyVGV4dDogc3RyaW5nO1xuICBzaG93QXJyb3c6IGJvb2xlYW47XG4gIHNob3dJbnB1dDogYm9vbGVhbjtcbiAgdHJpZ2dlckFjdGlvbjogc3RyaW5nW107XG4gIGRhdGE6IFNGU2NoZW1hRW51bVtdID0gW107XG4gIGxvYWREYXRhOiAobm9kZTogTnpDYXNjYWRlck9wdGlvbiwgaW5kZXg6IG51bWJlcikgPT4gUHJvbWlzZUxpa2U8YW55PjtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IGNsZWFyVGV4dCwgc2hvd0Fycm93LCBzaG93SW5wdXQsIHRyaWdnZXJBY3Rpb24sIGFzeW5jRGF0YSB9ID0gdGhpcy51aTtcbiAgICB0aGlzLmNsZWFyVGV4dCA9IGNsZWFyVGV4dCB8fCAn5riF6ZmkJztcbiAgICB0aGlzLnNob3dBcnJvdyA9IHRvQm9vbChzaG93QXJyb3csIHRydWUpO1xuICAgIHRoaXMuc2hvd0lucHV0ID0gdG9Cb29sKHNob3dJbnB1dCwgdHJ1ZSk7XG4gICAgdGhpcy50cmlnZ2VyQWN0aW9uID0gdHJpZ2dlckFjdGlvbiB8fCBbJ2NsaWNrJ107XG4gICAgaWYgKCEhYXN5bmNEYXRhKSB7XG4gICAgICB0aGlzLmxvYWREYXRhID0gKG5vZGU6IE56Q2FzY2FkZXJPcHRpb24sIGluZGV4OiBudW1iZXIpID0+IGFzeW5jRGF0YShub2RlLCBpbmRleCwgdGhpcykudGhlbigoKSA9PiB0aGlzLmRldGVjdENoYW5nZXMoKSk7XG4gICAgfVxuICB9XG5cbiAgcmVzZXQodmFsdWU6IFNGVmFsdWUpOiB2b2lkIHtcbiAgICBnZXREYXRhKHRoaXMuc2NoZW1hLCB7fSwgdmFsdWUpLnN1YnNjcmliZShsaXN0ID0+IHtcbiAgICAgIHRoaXMuZGF0YSA9IGxpc3Q7XG4gICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIF92aXNpYmxlQ2hhbmdlKHN0YXR1czogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICh0aGlzLnVpLnZpc2libGVDaGFuZ2UpIHRoaXMudWkudmlzaWJsZUNoYW5nZShzdGF0dXMpO1xuICB9XG5cbiAgX2NoYW5nZSh2YWx1ZTogYW55W10gfCBudWxsKTogdm9pZCB7XG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgaWYgKHRoaXMudWkuY2hhbmdlKSB7XG4gICAgICB0aGlzLnVpLmNoYW5nZSh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgX3NlbGVjdGlvbkNoYW5nZShvcHRpb25zOiBOekNhc2NhZGVyT3B0aW9uW10pOiB2b2lkIHtcbiAgICBpZiAodGhpcy51aS5zZWxlY3Rpb25DaGFuZ2UpIHtcbiAgICAgIHRoaXMudWkuc2VsZWN0aW9uQ2hhbmdlKG9wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIF9jbGVhcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy51aS5jbGVhcikgdGhpcy51aS5jbGVhcigpO1xuICB9XG59XG4iLCI8c2YtaXRlbS13cmFwIFtpZF09XCJpZFwiIFtzY2hlbWFdPVwic2NoZW1hXCIgW3VpXT1cInVpXCIgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIiBbZXJyb3JdPVwiZXJyb3JcIiBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiPlxuICA8bnotY2FzY2FkZXJcbiAgICBbbnpEaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgW256U2l6ZV09XCJ1aS5zaXplXCJcbiAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXG4gICAgKG5nTW9kZWxDaGFuZ2UpPVwiX2NoYW5nZSgkZXZlbnQpXCJcbiAgICBbbnpPcHRpb25zXT1cImRhdGFcIlxuICAgIFtuekFsbG93Q2xlYXJdPVwidWkuYWxsb3dDbGVhclwiXG4gICAgW256QXV0b0ZvY3VzXT1cInVpLmF1dG9Gb2N1c1wiXG4gICAgW256Q2hhbmdlT25dPVwidWkuY2hhbmdlT25cIlxuICAgIFtuekNoYW5nZU9uU2VsZWN0XT1cInVpLmNoYW5nZU9uU2VsZWN0XCJcbiAgICBbbnpDb2x1bW5DbGFzc05hbWVdPVwidWkuY29sdW1uQ2xhc3NOYW1lXCJcbiAgICBbbnpFeHBhbmRUcmlnZ2VyXT1cInVpLmV4cGFuZFRyaWdnZXJcIlxuICAgIFtuek1lbnVDbGFzc05hbWVdPVwidWkubWVudUNsYXNzTmFtZVwiXG4gICAgW256TWVudVN0eWxlXT1cInVpLm1lbnVTdHlsZVwiXG4gICAgW256Tm90Rm91bmRDb250ZW50XT1cInVpLm5vdEZvdW5kQ29udGVudFwiXG4gICAgW256TGFiZWxQcm9wZXJ0eV09XCJ1aS5sYWJlbFByb3BlcnR5IHx8ICdsYWJlbCdcIlxuICAgIFtuelZhbHVlUHJvcGVydHldPVwidWkudmFsdWVQcm9wZXJ0eSB8fCAndmFsdWUnXCJcbiAgICBbbnpMb2FkRGF0YV09XCJsb2FkRGF0YVwiXG4gICAgW256UGxhY2VIb2xkZXJdPVwidWkucGxhY2Vob2xkZXJcIlxuICAgIFtuelNob3dBcnJvd109XCJzaG93QXJyb3dcIlxuICAgIFtuelNob3dJbnB1dF09XCJzaG93SW5wdXRcIlxuICAgIFtuelNob3dTZWFyY2hdPVwidWkuc2hvd1NlYXJjaFwiXG4gICAgKG56Q2xlYXIpPVwiX2NsZWFyKClcIlxuICAgIChuelZpc2libGVDaGFuZ2UpPVwiX3Zpc2libGVDaGFuZ2UoJGV2ZW50KVwiXG4gICAgKG56U2VsZWN0aW9uQ2hhbmdlKT1cIl9zZWxlY3Rpb25DaGFuZ2UoJGV2ZW50KVwiXG4gID5cbiAgPC9uei1jYXNjYWRlcj5cbjwvc2YtaXRlbS13cmFwPlxuIl19