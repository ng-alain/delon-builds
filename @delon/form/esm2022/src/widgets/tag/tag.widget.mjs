import { Component, ViewEncapsulation } from '@angular/core';
import { getData } from '../../utils';
import { ControlUIWidget } from '../../widget';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/core/transition-patch";
import * as i3 from "ng-zorro-antd/icon";
import * as i4 from "ng-zorro-antd/tag";
import * as i5 from "../../sf-item-wrap.component";
class TagWidget extends ControlUIWidget {
    constructor() {
        super(...arguments);
        this.data = [];
    }
    reset(value) {
        getData(this.schema, this.ui, value).subscribe(list => {
            this.data = list;
            this.detectChanges();
        });
    }
    onChange(item) {
        item.checked = !item.checked;
        this.updateValue();
        if (this.ui.checkedChange) {
            this.ui.checkedChange(item.checked);
        }
    }
    _close(e) {
        if (this.ui.onClose)
            this.ui.onClose(e);
    }
    updateValue() {
        this.formProperty.setValue(this.data.filter(w => w.checked).map(i => i.value), false);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.2", ngImport: i0, type: TagWidget, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.2", type: TagWidget, selector: "sf-tag", usesInheritance: true, ngImport: i0, template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <ng-template #icon let-i>\n    <i\n      nz-icon\n      [nzType]=\"i.type\"\n      [nzTheme]=\"i.theme\"\n      [nzTwotoneColor]=\"i.twotoneColor\"\n      [nzRotate]=\"i.rotate\"\n      [nzIconfont]=\"i.iconfont\"\n      [nzSpin]=\"i.spin\"\n    ></i>\n  </ng-template>\n  <nz-tag\n    *ngFor=\"let i of data\"\n    [nzMode]=\"ui.mode || 'checkable'\"\n    [nzChecked]=\"i.checked\"\n    (nzOnClose)=\"_close($event)\"\n    (nzCheckedChange)=\"onChange(i)\"\n  >\n    <ng-container *ngIf=\"i.prefixIcon\">\n      <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{ $implicit: i.prefixIcon }\"></ng-template>\n    </ng-container>\n    <span>{{ i.label }}</span>\n    <ng-container *ngIf=\"i.suffixIcon\">\n      <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{ $implicit: i.suffixIcon }\"></ng-template>\n    </ng-container>\n  </nz-tag>\n</sf-item-wrap>\n", dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i2.ɵNzTransitionPatchDirective, selector: "[nz-button], nz-button-group, [nz-icon], [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group", inputs: ["hidden"] }, { kind: "directive", type: i3.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "component", type: i4.NzTagComponent, selector: "nz-tag", inputs: ["nzMode", "nzColor", "nzChecked"], outputs: ["nzOnClose", "nzCheckedChange"], exportAs: ["nzTag"] }, { kind: "component", type: i5.SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
export { TagWidget };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.2", ngImport: i0, type: TagWidget, decorators: [{
            type: Component,
            args: [{ selector: 'sf-tag', preserveWhitespaces: false, encapsulation: ViewEncapsulation.None, template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <ng-template #icon let-i>\n    <i\n      nz-icon\n      [nzType]=\"i.type\"\n      [nzTheme]=\"i.theme\"\n      [nzTwotoneColor]=\"i.twotoneColor\"\n      [nzRotate]=\"i.rotate\"\n      [nzIconfont]=\"i.iconfont\"\n      [nzSpin]=\"i.spin\"\n    ></i>\n  </ng-template>\n  <nz-tag\n    *ngFor=\"let i of data\"\n    [nzMode]=\"ui.mode || 'checkable'\"\n    [nzChecked]=\"i.checked\"\n    (nzOnClose)=\"_close($event)\"\n    (nzCheckedChange)=\"onChange(i)\"\n  >\n    <ng-container *ngIf=\"i.prefixIcon\">\n      <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{ $implicit: i.prefixIcon }\"></ng-template>\n    </ng-container>\n    <span>{{ i.label }}</span>\n    <ng-container *ngIf=\"i.suffixIcon\">\n      <ng-template [ngTemplateOutlet]=\"icon\" [ngTemplateOutletContext]=\"{ $implicit: i.suffixIcon }\"></ng-template>\n    </ng-container>\n  </nz-tag>\n</sf-item-wrap>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm0vc3JjL3dpZGdldHMvdGFnL3RhZy53aWRnZXQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3NyYy93aWRnZXRzL3RhZy90YWcud2lkZ2V0Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUk3RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7Ozs7QUFHL0MsTUFNYSxTQUFVLFNBQVEsZUFBa0M7SUFOakU7O1FBT0UsU0FBSSxHQUFtQixFQUFFLENBQUM7S0EyQjNCO0lBekJDLEtBQUssQ0FBQyxLQUFjO1FBQ2xCLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3BELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxRQUFRLENBQUMsSUFBa0I7UUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDN0IsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUU7WUFDekIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQztJQUVELE1BQU0sQ0FBQyxDQUFhO1FBQ2xCLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPO1lBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVPLFdBQVc7UUFDakIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFDbEQsS0FBSyxDQUNOLENBQUM7SUFDSixDQUFDOzhHQTNCVSxTQUFTO2tHQUFULFNBQVMscUVDZHRCLHlnQ0E0QkE7O1NEZGEsU0FBUzsyRkFBVCxTQUFTO2tCQU5yQixTQUFTOytCQUNFLFFBQVEsdUJBRUcsS0FBSyxpQkFDWCxpQkFBaUIsQ0FBQyxJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTRlZhbHVlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlJztcbmltcG9ydCB7IFNGU2NoZW1hRW51bSB9IGZyb20gJy4uLy4uL3NjaGVtYSc7XG5pbXBvcnQgeyBnZXREYXRhIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgQ29udHJvbFVJV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcbmltcG9ydCB7IFNGVGFnV2lkZ2V0U2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi10YWcnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFnLndpZGdldC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgVGFnV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFVJV2lkZ2V0PFNGVGFnV2lkZ2V0U2NoZW1hPiB7XG4gIGRhdGE6IFNGU2NoZW1hRW51bVtdID0gW107XG5cbiAgcmVzZXQodmFsdWU6IFNGVmFsdWUpOiB2b2lkIHtcbiAgICBnZXREYXRhKHRoaXMuc2NoZW1hLCB0aGlzLnVpLCB2YWx1ZSkuc3Vic2NyaWJlKGxpc3QgPT4ge1xuICAgICAgdGhpcy5kYXRhID0gbGlzdDtcbiAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuICB9XG5cbiAgb25DaGFuZ2UoaXRlbTogU0ZTY2hlbWFFbnVtKTogdm9pZCB7XG4gICAgaXRlbS5jaGVja2VkID0gIWl0ZW0uY2hlY2tlZDtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlKCk7XG4gICAgaWYgKHRoaXMudWkuY2hlY2tlZENoYW5nZSkge1xuICAgICAgdGhpcy51aS5jaGVja2VkQ2hhbmdlKGl0ZW0uY2hlY2tlZCk7XG4gICAgfVxuICB9XG5cbiAgX2Nsb3NlKGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy51aS5vbkNsb3NlKSB0aGlzLnVpLm9uQ2xvc2UoZSk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVZhbHVlKCk6IHZvaWQge1xuICAgIHRoaXMuZm9ybVByb3BlcnR5LnNldFZhbHVlKFxuICAgICAgdGhpcy5kYXRhLmZpbHRlcih3ID0+IHcuY2hlY2tlZCkubWFwKGkgPT4gaS52YWx1ZSksXG4gICAgICBmYWxzZVxuICAgICk7XG4gIH1cbn1cbiIsIjxzZi1pdGVtLXdyYXAgW2lkXT1cImlkXCIgW3NjaGVtYV09XCJzY2hlbWFcIiBbdWldPVwidWlcIiBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiIFtlcnJvcl09XCJlcnJvclwiIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCI+XG4gIDxuZy10ZW1wbGF0ZSAjaWNvbiBsZXQtaT5cbiAgICA8aVxuICAgICAgbnotaWNvblxuICAgICAgW256VHlwZV09XCJpLnR5cGVcIlxuICAgICAgW256VGhlbWVdPVwiaS50aGVtZVwiXG4gICAgICBbbnpUd290b25lQ29sb3JdPVwiaS50d290b25lQ29sb3JcIlxuICAgICAgW256Um90YXRlXT1cImkucm90YXRlXCJcbiAgICAgIFtuekljb25mb250XT1cImkuaWNvbmZvbnRcIlxuICAgICAgW256U3Bpbl09XCJpLnNwaW5cIlxuICAgID48L2k+XG4gIDwvbmctdGVtcGxhdGU+XG4gIDxuei10YWdcbiAgICAqbmdGb3I9XCJsZXQgaSBvZiBkYXRhXCJcbiAgICBbbnpNb2RlXT1cInVpLm1vZGUgfHwgJ2NoZWNrYWJsZSdcIlxuICAgIFtuekNoZWNrZWRdPVwiaS5jaGVja2VkXCJcbiAgICAobnpPbkNsb3NlKT1cIl9jbG9zZSgkZXZlbnQpXCJcbiAgICAobnpDaGVja2VkQ2hhbmdlKT1cIm9uQ2hhbmdlKGkpXCJcbiAgPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpLnByZWZpeEljb25cIj5cbiAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJpY29uXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBpLnByZWZpeEljb24gfVwiPjwvbmctdGVtcGxhdGU+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPHNwYW4+e3sgaS5sYWJlbCB9fTwvc3Bhbj5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaS5zdWZmaXhJY29uXCI+XG4gICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiaWNvblwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogaS5zdWZmaXhJY29uIH1cIj48L25nLXRlbXBsYXRlPlxuICAgIDwvbmctY29udGFpbmVyPlxuICA8L256LXRhZz5cbjwvc2YtaXRlbS13cmFwPlxuIl19