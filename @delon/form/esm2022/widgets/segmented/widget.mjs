import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ControlUIWidget, DelonFormModule, getData } from '@delon/form';
import { NzSegmentedModule } from 'ng-zorro-antd/segmented';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@delon/form";
import * as i3 from "ng-zorro-antd/segmented";
export class SegmentedWidget extends ControlUIWidget {
    static { this.KEY = 'segmented'; }
    get list() {
        return this._list ?? [];
    }
    reset(value) {
        getData(this.schema, this.ui, value).subscribe(list => {
            this._list = list;
            this.detectChanges();
        });
    }
    valueChange(index) {
        if (this.ui.valueChange) {
            this.ui.valueChange({ index, item: this.list[index] });
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: SegmentedWidget, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.2", type: SegmentedWidget, isStandalone: true, selector: "sf-segmented", usesInheritance: true, ngImport: i0, template: `<sf-item-wrap
    [id]="id"
    [schema]="schema"
    [ui]="ui"
    [showError]="showError"
    [error]="error"
    [showTitle]="schema.title"
  >
    <nz-segmented
      [ngModel]="value"
      (ngModelChange)="setValue($event)"
      [nzDisabled]="disabled"
      [nzSize]="$any(ui.size)"
      [nzBlock]="ui.block ?? false"
      [nzOptions]="list"
      [nzLabelTemplate]="ui.labelTemplate ?? null"
      (nzValueChange)="valueChange($event)"
    />
  </sf-item-wrap>`, isInline: true, dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: DelonFormModule }, { kind: "component", type: i2.SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }, { kind: "ngmodule", type: NzSegmentedModule }, { kind: "component", type: i3.NzSegmentedComponent, selector: "nz-segmented", inputs: ["nzBlock", "nzDisabled", "nzOptions", "nzSize", "nzLabelTemplate"], outputs: ["nzValueChange"], exportAs: ["nzSegmented"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: SegmentedWidget, decorators: [{
            type: Component,
            args: [{
                    selector: 'sf-segmented',
                    template: `<sf-item-wrap
    [id]="id"
    [schema]="schema"
    [ui]="ui"
    [showError]="showError"
    [error]="error"
    [showTitle]="schema.title"
  >
    <nz-segmented
      [ngModel]="value"
      (ngModelChange)="setValue($event)"
      [nzDisabled]="disabled"
      [nzSize]="$any(ui.size)"
      [nzBlock]="ui.block ?? false"
      [nzOptions]="list"
      [nzLabelTemplate]="ui.labelTemplate ?? null"
      (nzValueChange)="valueChange($event)"
    />
  </sf-item-wrap>`,
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    standalone: true,
                    imports: [FormsModule, DelonFormModule, NzSegmentedModule]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS93aWRnZXRzL3NlZ21lbnRlZC93aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQVcsT0FBTyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxpQkFBaUIsRUFBc0IsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7QUE4QmhGLE1BQU0sT0FBTyxlQUFnQixTQUFRLGVBQXdDO2FBQzNELFFBQUcsR0FBRyxXQUFXLEFBQWQsQ0FBZTtJQUVsQyxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxLQUFLLENBQUMsS0FBYztRQUNsQixPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNwRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQTBCLENBQUM7WUFDeEMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVcsQ0FBQyxLQUFhO1FBQ3ZCLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUU7WUFDdkIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFZLEVBQUUsQ0FBQyxDQUFDO1NBQ25FO0lBQ0gsQ0FBQzs4R0FsQlUsZUFBZTtrR0FBZixlQUFlLCtGQXhCaEI7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkFrQk0sMkRBSU4sV0FBVyw4VkFBRSxlQUFlLHlMQUFFLGlCQUFpQjs7MkZBRTlDLGVBQWU7a0JBMUIzQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkFrQk07b0JBQ2hCLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxVQUFVLEVBQUUsSUFBSTtvQkFDaEIsT0FBTyxFQUFFLENBQUMsV0FBVyxFQUFFLGVBQWUsRUFBRSxpQkFBaUIsQ0FBQztpQkFDM0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgQ29udHJvbFVJV2lkZ2V0LCBEZWxvbkZvcm1Nb2R1bGUsIFNGVmFsdWUsIGdldERhdGEgfSBmcm9tICdAZGVsb24vZm9ybSc7XG5pbXBvcnQgeyBOelNlZ21lbnRlZE1vZHVsZSwgTnpTZWdtZW50ZWRPcHRpb25zIH0gZnJvbSAnbmctem9ycm8tYW50ZC9zZWdtZW50ZWQnO1xuXG5pbXBvcnQgdHlwZSB7IFNGU2VnbWVudGVkV2lkZ2V0U2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1zZWdtZW50ZWQnLFxuICB0ZW1wbGF0ZTogYDxzZi1pdGVtLXdyYXBcbiAgICBbaWRdPVwiaWRcIlxuICAgIFtzY2hlbWFdPVwic2NoZW1hXCJcbiAgICBbdWldPVwidWlcIlxuICAgIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCJcbiAgICBbZXJyb3JdPVwiZXJyb3JcIlxuICAgIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCJcbiAgPlxuICAgIDxuei1zZWdtZW50ZWRcbiAgICAgIFtuZ01vZGVsXT1cInZhbHVlXCJcbiAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInNldFZhbHVlKCRldmVudClcIlxuICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgW256U2l6ZV09XCIkYW55KHVpLnNpemUpXCJcbiAgICAgIFtuekJsb2NrXT1cInVpLmJsb2NrID8/IGZhbHNlXCJcbiAgICAgIFtuek9wdGlvbnNdPVwibGlzdFwiXG4gICAgICBbbnpMYWJlbFRlbXBsYXRlXT1cInVpLmxhYmVsVGVtcGxhdGUgPz8gbnVsbFwiXG4gICAgICAobnpWYWx1ZUNoYW5nZSk9XCJ2YWx1ZUNoYW5nZSgkZXZlbnQpXCJcbiAgICAvPlxuICA8L3NmLWl0ZW0td3JhcD5gLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0Zvcm1zTW9kdWxlLCBEZWxvbkZvcm1Nb2R1bGUsIE56U2VnbWVudGVkTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBTZWdtZW50ZWRXaWRnZXQgZXh0ZW5kcyBDb250cm9sVUlXaWRnZXQ8U0ZTZWdtZW50ZWRXaWRnZXRTY2hlbWE+IHtcbiAgc3RhdGljIHJlYWRvbmx5IEtFWSA9ICdzZWdtZW50ZWQnO1xuICBwcml2YXRlIF9saXN0PzogTnpTZWdtZW50ZWRPcHRpb25zO1xuICBnZXQgbGlzdCgpOiBOelNlZ21lbnRlZE9wdGlvbnMge1xuICAgIHJldHVybiB0aGlzLl9saXN0ID8/IFtdO1xuICB9XG5cbiAgcmVzZXQodmFsdWU6IFNGVmFsdWUpOiB2b2lkIHtcbiAgICBnZXREYXRhKHRoaXMuc2NoZW1hLCB0aGlzLnVpLCB2YWx1ZSkuc3Vic2NyaWJlKGxpc3QgPT4ge1xuICAgICAgdGhpcy5fbGlzdCA9IGxpc3QgYXMgTnpTZWdtZW50ZWRPcHRpb25zO1xuICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gIH1cblxuICB2YWx1ZUNoYW5nZShpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudWkudmFsdWVDaGFuZ2UpIHtcbiAgICAgIHRoaXMudWkudmFsdWVDaGFuZ2UoeyBpbmRleCwgaXRlbTogdGhpcy5saXN0W2luZGV4XSBhcyBTRlZhbHVlIH0pO1xuICAgIH1cbiAgfVxufVxuIl19