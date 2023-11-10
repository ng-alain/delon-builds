import { Component, ViewEncapsulation } from '@angular/core';
import { ControlUIWidget, getData } from '@delon/form';
import * as i0 from "@angular/core";
import * as i1 from "@delon/form";
import * as i2 from "ng-zorro-antd/tag";
import * as i3 from "ng-zorro-antd/icon";
import * as i4 from "@angular/common";
export class TagWidget extends ControlUIWidget {
    constructor() {
        super(...arguments);
        this.data = [];
    }
    static { this.KEY = 'tag'; }
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: TagWidget, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.2", type: TagWidget, selector: "sf-tag", usesInheritance: true, ngImport: i0, template: `<sf-item-wrap
    [id]="id"
    [schema]="schema"
    [ui]="ui"
    [showError]="showError"
    [error]="error"
    [showTitle]="schema.title"
  >
    <ng-template #icon let-i>
      <i
        nz-icon
        [nzType]="i.type"
        [nzTheme]="i.theme"
        [nzTwotoneColor]="i.twotoneColor"
        [nzRotate]="i.rotate"
        [nzIconfont]="i.iconfont"
        [nzSpin]="i.spin"
      ></i>
    </ng-template>
    <nz-tag
      *ngFor="let i of data"
      [nzMode]="ui.mode || 'checkable'"
      [nzChecked]="i.checked"
      (nzOnClose)="_close($event)"
      (nzCheckedChange)="onChange(i)"
    >
      <ng-container *ngIf="i.prefixIcon">
        <ng-template [ngTemplateOutlet]="icon" [ngTemplateOutletContext]="{ $implicit: i.prefixIcon }" />
      </ng-container>
      <span>{{ i.label }}</span>
      <ng-container *ngIf="i.suffixIcon">
        <ng-template [ngTemplateOutlet]="icon" [ngTemplateOutletContext]="{ $implicit: i.suffixIcon }" />
      </ng-container>
    </nz-tag>
  </sf-item-wrap>`, isInline: true, dependencies: [{ kind: "component", type: i1.SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }, { kind: "component", type: i2.NzTagComponent, selector: "nz-tag", inputs: ["nzMode", "nzColor", "nzChecked"], outputs: ["nzOnClose", "nzCheckedChange"], exportAs: ["nzTag"] }, { kind: "directive", type: i3.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "directive", type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i4.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: TagWidget, decorators: [{
            type: Component,
            args: [{
                    selector: 'sf-tag',
                    template: `<sf-item-wrap
    [id]="id"
    [schema]="schema"
    [ui]="ui"
    [showError]="showError"
    [error]="error"
    [showTitle]="schema.title"
  >
    <ng-template #icon let-i>
      <i
        nz-icon
        [nzType]="i.type"
        [nzTheme]="i.theme"
        [nzTwotoneColor]="i.twotoneColor"
        [nzRotate]="i.rotate"
        [nzIconfont]="i.iconfont"
        [nzSpin]="i.spin"
      ></i>
    </ng-template>
    <nz-tag
      *ngFor="let i of data"
      [nzMode]="ui.mode || 'checkable'"
      [nzChecked]="i.checked"
      (nzOnClose)="_close($event)"
      (nzCheckedChange)="onChange(i)"
    >
      <ng-container *ngIf="i.prefixIcon">
        <ng-template [ngTemplateOutlet]="icon" [ngTemplateOutletContext]="{ $implicit: i.prefixIcon }" />
      </ng-container>
      <span>{{ i.label }}</span>
      <ng-container *ngIf="i.suffixIcon">
        <ng-template [ngTemplateOutlet]="icon" [ngTemplateOutletContext]="{ $implicit: i.suffixIcon }" />
      </ng-container>
    </nz-tag>
  </sf-item-wrap>`,
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS93aWRnZXRzL3RhZy93aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3RCxPQUFPLEVBQUUsZUFBZSxFQUF5QixPQUFPLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7OztBQTRDOUUsTUFBTSxPQUFPLFNBQVUsU0FBUSxlQUFrQztJQXhDakU7O1FBMkNFLFNBQUksR0FBbUIsRUFBRSxDQUFDO0tBMkIzQjthQTdCaUIsUUFBRyxHQUFHLEtBQUssQUFBUixDQUFTO0lBSTVCLEtBQUssQ0FBQyxLQUFjO1FBQ2xCLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3BELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxRQUFRLENBQUMsSUFBa0I7UUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDN0IsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUU7WUFDekIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQztJQUVELE1BQU0sQ0FBQyxDQUFhO1FBQ2xCLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPO1lBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVPLFdBQVc7UUFDakIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFDbEQsS0FBSyxDQUNOLENBQUM7SUFDSixDQUFDOzhHQTdCVSxTQUFTO2tHQUFULFNBQVMscUVBdENWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQWtDTTs7MkZBSUwsU0FBUztrQkF4Q3JCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFFBQVE7b0JBQ2xCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkFrQ007b0JBQ2hCLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUN0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29udHJvbFVJV2lkZ2V0LCBTRlNjaGVtYUVudW0sIFNGVmFsdWUsIGdldERhdGEgfSBmcm9tICdAZGVsb24vZm9ybSc7XG5cbmltcG9ydCB0eXBlIHsgU0ZUYWdXaWRnZXRTY2hlbWEgfSBmcm9tICcuL3NjaGVtYSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLXRhZycsXG4gIHRlbXBsYXRlOiBgPHNmLWl0ZW0td3JhcFxuICAgIFtpZF09XCJpZFwiXG4gICAgW3NjaGVtYV09XCJzY2hlbWFcIlxuICAgIFt1aV09XCJ1aVwiXG4gICAgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIlxuICAgIFtlcnJvcl09XCJlcnJvclwiXG4gICAgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIlxuICA+XG4gICAgPG5nLXRlbXBsYXRlICNpY29uIGxldC1pPlxuICAgICAgPGlcbiAgICAgICAgbnotaWNvblxuICAgICAgICBbbnpUeXBlXT1cImkudHlwZVwiXG4gICAgICAgIFtuelRoZW1lXT1cImkudGhlbWVcIlxuICAgICAgICBbbnpUd290b25lQ29sb3JdPVwiaS50d290b25lQ29sb3JcIlxuICAgICAgICBbbnpSb3RhdGVdPVwiaS5yb3RhdGVcIlxuICAgICAgICBbbnpJY29uZm9udF09XCJpLmljb25mb250XCJcbiAgICAgICAgW256U3Bpbl09XCJpLnNwaW5cIlxuICAgICAgPjwvaT5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuei10YWdcbiAgICAgICpuZ0Zvcj1cImxldCBpIG9mIGRhdGFcIlxuICAgICAgW256TW9kZV09XCJ1aS5tb2RlIHx8ICdjaGVja2FibGUnXCJcbiAgICAgIFtuekNoZWNrZWRdPVwiaS5jaGVja2VkXCJcbiAgICAgIChuek9uQ2xvc2UpPVwiX2Nsb3NlKCRldmVudClcIlxuICAgICAgKG56Q2hlY2tlZENoYW5nZSk9XCJvbkNoYW5nZShpKVwiXG4gICAgPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImkucHJlZml4SWNvblwiPlxuICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiaWNvblwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogaS5wcmVmaXhJY29uIH1cIiAvPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8c3Bhbj57eyBpLmxhYmVsIH19PC9zcGFuPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImkuc3VmZml4SWNvblwiPlxuICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiaWNvblwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogaS5zdWZmaXhJY29uIH1cIiAvPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9uei10YWc+XG4gIDwvc2YtaXRlbS13cmFwPmAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFRhZ1dpZGdldCBleHRlbmRzIENvbnRyb2xVSVdpZGdldDxTRlRhZ1dpZGdldFNjaGVtYT4ge1xuICBzdGF0aWMgcmVhZG9ubHkgS0VZID0gJ3RhZyc7XG5cbiAgZGF0YTogU0ZTY2hlbWFFbnVtW10gPSBbXTtcblxuICByZXNldCh2YWx1ZTogU0ZWYWx1ZSk6IHZvaWQge1xuICAgIGdldERhdGEodGhpcy5zY2hlbWEsIHRoaXMudWksIHZhbHVlKS5zdWJzY3JpYmUobGlzdCA9PiB7XG4gICAgICB0aGlzLmRhdGEgPSBsaXN0O1xuICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gIH1cblxuICBvbkNoYW5nZShpdGVtOiBTRlNjaGVtYUVudW0pOiB2b2lkIHtcbiAgICBpdGVtLmNoZWNrZWQgPSAhaXRlbS5jaGVja2VkO1xuICAgIHRoaXMudXBkYXRlVmFsdWUoKTtcbiAgICBpZiAodGhpcy51aS5jaGVja2VkQ2hhbmdlKSB7XG4gICAgICB0aGlzLnVpLmNoZWNrZWRDaGFuZ2UoaXRlbS5jaGVja2VkKTtcbiAgICB9XG4gIH1cblxuICBfY2xvc2UoZTogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnVpLm9uQ2xvc2UpIHRoaXMudWkub25DbG9zZShlKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlVmFsdWUoKTogdm9pZCB7XG4gICAgdGhpcy5mb3JtUHJvcGVydHkuc2V0VmFsdWUoXG4gICAgICB0aGlzLmRhdGEuZmlsdGVyKHcgPT4gdy5jaGVja2VkKS5tYXAoaSA9PiBpLnZhbHVlKSxcbiAgICAgIGZhbHNlXG4gICAgKTtcbiAgfVxufVxuIl19