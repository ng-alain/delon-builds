import { NgTemplateOutlet } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ControlUIWidget, DelonFormModule, getData } from '@delon/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTagModule } from 'ng-zorro-antd/tag';
import * as i0 from "@angular/core";
import * as i1 from "@delon/form";
import * as i2 from "ng-zorro-antd/tag";
import * as i3 from "ng-zorro-antd/icon";
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.7", ngImport: i0, type: TagWidget, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.7", type: TagWidget, isStandalone: true, selector: "sf-tag", usesInheritance: true, ngImport: i0, template: `<sf-item-wrap
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
    @for (i of data; track $index) {
      <nz-tag
        [nzMode]="ui.mode || 'checkable'"
        [nzChecked]="i.checked"
        (nzOnClose)="_close($event)"
        (nzCheckedChange)="onChange(i)"
      >
        @if (i.prefixIcon) {
          <ng-template [ngTemplateOutlet]="icon" [ngTemplateOutletContext]="{ $implicit: i.prefixIcon }" />
        }
        <span>{{ i.label }}</span>
        @if (i.suffixIcon) {
          <ng-template [ngTemplateOutlet]="icon" [ngTemplateOutletContext]="{ $implicit: i.suffixIcon }" />
        }
      </nz-tag>
    }
  </sf-item-wrap>`, isInline: true, dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "ngmodule", type: DelonFormModule }, { kind: "component", type: i1.SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }, { kind: "ngmodule", type: NzTagModule }, { kind: "component", type: i2.NzTagComponent, selector: "nz-tag", inputs: ["nzMode", "nzColor", "nzChecked", "nzBordered"], outputs: ["nzOnClose", "nzCheckedChange"], exportAs: ["nzTag"] }, { kind: "ngmodule", type: NzIconModule }, { kind: "directive", type: i3.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.7", ngImport: i0, type: TagWidget, decorators: [{
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
    @for (i of data; track $index) {
      <nz-tag
        [nzMode]="ui.mode || 'checkable'"
        [nzChecked]="i.checked"
        (nzOnClose)="_close($event)"
        (nzCheckedChange)="onChange(i)"
      >
        @if (i.prefixIcon) {
          <ng-template [ngTemplateOutlet]="icon" [ngTemplateOutletContext]="{ $implicit: i.prefixIcon }" />
        }
        <span>{{ i.label }}</span>
        @if (i.suffixIcon) {
          <ng-template [ngTemplateOutlet]="icon" [ngTemplateOutletContext]="{ $implicit: i.suffixIcon }" />
        }
      </nz-tag>
    }
  </sf-item-wrap>`,
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    standalone: true,
                    imports: [FormsModule, NgTemplateOutlet, DelonFormModule, NzTagModule, NzIconModule]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS93aWRnZXRzL3RhZy93aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQXlCLE9BQU8sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMvRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7OztBQStDaEQsTUFBTSxPQUFPLFNBQVUsU0FBUSxlQUFrQztJQTNDakU7O1FBOENFLFNBQUksR0FBbUIsRUFBRSxDQUFDO0tBMkIzQjthQTdCaUIsUUFBRyxHQUFHLEtBQUssQUFBUixDQUFTO0lBSTVCLEtBQUssQ0FBQyxLQUFjO1FBQ2xCLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3BELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxRQUFRLENBQUMsSUFBa0I7UUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDN0IsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdEMsQ0FBQztJQUNILENBQUM7SUFFRCxNQUFNLENBQUMsQ0FBYTtRQUNsQixJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTztZQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFTyxXQUFXO1FBQ2pCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQ2xELEtBQUssQ0FDTixDQUFDO0lBQ0osQ0FBQzs4R0E3QlUsU0FBUztrR0FBVCxTQUFTLHlGQXpDVjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBbUNNLDJEQUlOLFdBQVcsK0JBQUUsZ0JBQWdCLG1KQUFFLGVBQWUseUxBQUUsV0FBVyw0TkFBRSxZQUFZOzsyRkFFeEUsU0FBUztrQkEzQ3JCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFFBQVE7b0JBQ2xCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBbUNNO29CQUNoQixtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLE9BQU8sRUFBRSxDQUFDLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLFlBQVksQ0FBQztpQkFDckYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ1RlbXBsYXRlT3V0bGV0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBDb250cm9sVUlXaWRnZXQsIERlbG9uRm9ybU1vZHVsZSwgU0ZTY2hlbWFFbnVtLCBTRlZhbHVlLCBnZXREYXRhIH0gZnJvbSAnQGRlbG9uL2Zvcm0nO1xuaW1wb3J0IHsgTnpJY29uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcbmltcG9ydCB7IE56VGFnTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC90YWcnO1xuXG5pbXBvcnQgdHlwZSB7IFNGVGFnV2lkZ2V0U2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi10YWcnLFxuICB0ZW1wbGF0ZTogYDxzZi1pdGVtLXdyYXBcbiAgICBbaWRdPVwiaWRcIlxuICAgIFtzY2hlbWFdPVwic2NoZW1hXCJcbiAgICBbdWldPVwidWlcIlxuICAgIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCJcbiAgICBbZXJyb3JdPVwiZXJyb3JcIlxuICAgIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCJcbiAgPlxuICAgIDxuZy10ZW1wbGF0ZSAjaWNvbiBsZXQtaT5cbiAgICAgIDxpXG4gICAgICAgIG56LWljb25cbiAgICAgICAgW256VHlwZV09XCJpLnR5cGVcIlxuICAgICAgICBbbnpUaGVtZV09XCJpLnRoZW1lXCJcbiAgICAgICAgW256VHdvdG9uZUNvbG9yXT1cImkudHdvdG9uZUNvbG9yXCJcbiAgICAgICAgW256Um90YXRlXT1cImkucm90YXRlXCJcbiAgICAgICAgW256SWNvbmZvbnRdPVwiaS5pY29uZm9udFwiXG4gICAgICAgIFtuelNwaW5dPVwiaS5zcGluXCJcbiAgICAgID48L2k+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICBAZm9yIChpIG9mIGRhdGE7IHRyYWNrICRpbmRleCkge1xuICAgICAgPG56LXRhZ1xuICAgICAgICBbbnpNb2RlXT1cInVpLm1vZGUgfHwgJ2NoZWNrYWJsZSdcIlxuICAgICAgICBbbnpDaGVja2VkXT1cImkuY2hlY2tlZFwiXG4gICAgICAgIChuek9uQ2xvc2UpPVwiX2Nsb3NlKCRldmVudClcIlxuICAgICAgICAobnpDaGVja2VkQ2hhbmdlKT1cIm9uQ2hhbmdlKGkpXCJcbiAgICAgID5cbiAgICAgICAgQGlmIChpLnByZWZpeEljb24pIHtcbiAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiaWNvblwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogaS5wcmVmaXhJY29uIH1cIiAvPlxuICAgICAgICB9XG4gICAgICAgIDxzcGFuPnt7IGkubGFiZWwgfX08L3NwYW4+XG4gICAgICAgIEBpZiAoaS5zdWZmaXhJY29uKSB7XG4gICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImljb25cIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IGkuc3VmZml4SWNvbiB9XCIgLz5cbiAgICAgICAgfVxuICAgICAgPC9uei10YWc+XG4gICAgfVxuICA8L3NmLWl0ZW0td3JhcD5gLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0Zvcm1zTW9kdWxlLCBOZ1RlbXBsYXRlT3V0bGV0LCBEZWxvbkZvcm1Nb2R1bGUsIE56VGFnTW9kdWxlLCBOekljb25Nb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIFRhZ1dpZGdldCBleHRlbmRzIENvbnRyb2xVSVdpZGdldDxTRlRhZ1dpZGdldFNjaGVtYT4ge1xuICBzdGF0aWMgcmVhZG9ubHkgS0VZID0gJ3RhZyc7XG5cbiAgZGF0YTogU0ZTY2hlbWFFbnVtW10gPSBbXTtcblxuICByZXNldCh2YWx1ZTogU0ZWYWx1ZSk6IHZvaWQge1xuICAgIGdldERhdGEodGhpcy5zY2hlbWEsIHRoaXMudWksIHZhbHVlKS5zdWJzY3JpYmUobGlzdCA9PiB7XG4gICAgICB0aGlzLmRhdGEgPSBsaXN0O1xuICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gIH1cblxuICBvbkNoYW5nZShpdGVtOiBTRlNjaGVtYUVudW0pOiB2b2lkIHtcbiAgICBpdGVtLmNoZWNrZWQgPSAhaXRlbS5jaGVja2VkO1xuICAgIHRoaXMudXBkYXRlVmFsdWUoKTtcbiAgICBpZiAodGhpcy51aS5jaGVja2VkQ2hhbmdlKSB7XG4gICAgICB0aGlzLnVpLmNoZWNrZWRDaGFuZ2UoaXRlbS5jaGVja2VkKTtcbiAgICB9XG4gIH1cblxuICBfY2xvc2UoZTogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnVpLm9uQ2xvc2UpIHRoaXMudWkub25DbG9zZShlKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlVmFsdWUoKTogdm9pZCB7XG4gICAgdGhpcy5mb3JtUHJvcGVydHkuc2V0VmFsdWUoXG4gICAgICB0aGlzLmRhdGEuZmlsdGVyKHcgPT4gdy5jaGVja2VkKS5tYXAoaSA9PiBpLnZhbHVlKSxcbiAgICAgIGZhbHNlXG4gICAgKTtcbiAgfVxufVxuIl19