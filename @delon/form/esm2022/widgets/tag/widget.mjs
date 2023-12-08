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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: TagWidget, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.6", type: TagWidget, isStandalone: true, selector: "sf-tag", usesInheritance: true, ngImport: i0, template: `<sf-item-wrap
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
  </sf-item-wrap>`, isInline: true, dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "ngmodule", type: DelonFormModule }, { kind: "component", type: i1.SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }, { kind: "ngmodule", type: NzTagModule }, { kind: "component", type: i2.NzTagComponent, selector: "nz-tag", inputs: ["nzMode", "nzColor", "nzChecked"], outputs: ["nzOnClose", "nzCheckedChange"], exportAs: ["nzTag"] }, { kind: "ngmodule", type: NzIconModule }, { kind: "directive", type: i3.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: TagWidget, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS93aWRnZXRzL3RhZy93aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQXlCLE9BQU8sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMvRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7OztBQStDaEQsTUFBTSxPQUFPLFNBQVUsU0FBUSxlQUFrQztJQTNDakU7O1FBOENFLFNBQUksR0FBbUIsRUFBRSxDQUFDO0tBMkIzQjthQTdCaUIsUUFBRyxHQUFHLEtBQUssQUFBUixDQUFTO0lBSTVCLEtBQUssQ0FBQyxLQUFjO1FBQ2xCLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3BELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxRQUFRLENBQUMsSUFBa0I7UUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDN0IsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUU7WUFDekIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQztJQUVELE1BQU0sQ0FBQyxDQUFhO1FBQ2xCLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPO1lBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVPLFdBQVc7UUFDakIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFDbEQsS0FBSyxDQUNOLENBQUM7SUFDSixDQUFDOzhHQTdCVSxTQUFTO2tHQUFULFNBQVMseUZBekNWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkFtQ00sMkRBSU4sV0FBVywrQkFBRSxnQkFBZ0IsbUpBQUUsZUFBZSx5TEFBRSxXQUFXLDhNQUFFLFlBQVk7OzJGQUV4RSxTQUFTO2tCQTNDckIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsUUFBUTtvQkFDbEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkFtQ007b0JBQ2hCLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxVQUFVLEVBQUUsSUFBSTtvQkFDaEIsT0FBTyxFQUFFLENBQUMsV0FBVyxFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsWUFBWSxDQUFDO2lCQUNyRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nVGVtcGxhdGVPdXRsZXQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IENvbnRyb2xVSVdpZGdldCwgRGVsb25Gb3JtTW9kdWxlLCBTRlNjaGVtYUVudW0sIFNGVmFsdWUsIGdldERhdGEgfSBmcm9tICdAZGVsb24vZm9ybSc7XG5pbXBvcnQgeyBOekljb25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2ljb24nO1xuaW1wb3J0IHsgTnpUYWdNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3RhZyc7XG5cbmltcG9ydCB0eXBlIHsgU0ZUYWdXaWRnZXRTY2hlbWEgfSBmcm9tICcuL3NjaGVtYSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLXRhZycsXG4gIHRlbXBsYXRlOiBgPHNmLWl0ZW0td3JhcFxuICAgIFtpZF09XCJpZFwiXG4gICAgW3NjaGVtYV09XCJzY2hlbWFcIlxuICAgIFt1aV09XCJ1aVwiXG4gICAgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIlxuICAgIFtlcnJvcl09XCJlcnJvclwiXG4gICAgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIlxuICA+XG4gICAgPG5nLXRlbXBsYXRlICNpY29uIGxldC1pPlxuICAgICAgPGlcbiAgICAgICAgbnotaWNvblxuICAgICAgICBbbnpUeXBlXT1cImkudHlwZVwiXG4gICAgICAgIFtuelRoZW1lXT1cImkudGhlbWVcIlxuICAgICAgICBbbnpUd290b25lQ29sb3JdPVwiaS50d290b25lQ29sb3JcIlxuICAgICAgICBbbnpSb3RhdGVdPVwiaS5yb3RhdGVcIlxuICAgICAgICBbbnpJY29uZm9udF09XCJpLmljb25mb250XCJcbiAgICAgICAgW256U3Bpbl09XCJpLnNwaW5cIlxuICAgICAgPjwvaT5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIEBmb3IgKGkgb2YgZGF0YTsgdHJhY2sgJGluZGV4KSB7XG4gICAgICA8bnotdGFnXG4gICAgICAgIFtuek1vZGVdPVwidWkubW9kZSB8fCAnY2hlY2thYmxlJ1wiXG4gICAgICAgIFtuekNoZWNrZWRdPVwiaS5jaGVja2VkXCJcbiAgICAgICAgKG56T25DbG9zZSk9XCJfY2xvc2UoJGV2ZW50KVwiXG4gICAgICAgIChuekNoZWNrZWRDaGFuZ2UpPVwib25DaGFuZ2UoaSlcIlxuICAgICAgPlxuICAgICAgICBAaWYgKGkucHJlZml4SWNvbikge1xuICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJpY29uXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBpLnByZWZpeEljb24gfVwiIC8+XG4gICAgICAgIH1cbiAgICAgICAgPHNwYW4+e3sgaS5sYWJlbCB9fTwvc3Bhbj5cbiAgICAgICAgQGlmIChpLnN1ZmZpeEljb24pIHtcbiAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiaWNvblwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogaS5zdWZmaXhJY29uIH1cIiAvPlxuICAgICAgICB9XG4gICAgICA8L256LXRhZz5cbiAgICB9XG4gIDwvc2YtaXRlbS13cmFwPmAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbRm9ybXNNb2R1bGUsIE5nVGVtcGxhdGVPdXRsZXQsIERlbG9uRm9ybU1vZHVsZSwgTnpUYWdNb2R1bGUsIE56SWNvbk1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgVGFnV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFVJV2lkZ2V0PFNGVGFnV2lkZ2V0U2NoZW1hPiB7XG4gIHN0YXRpYyByZWFkb25seSBLRVkgPSAndGFnJztcblxuICBkYXRhOiBTRlNjaGVtYUVudW1bXSA9IFtdO1xuXG4gIHJlc2V0KHZhbHVlOiBTRlZhbHVlKTogdm9pZCB7XG4gICAgZ2V0RGF0YSh0aGlzLnNjaGVtYSwgdGhpcy51aSwgdmFsdWUpLnN1YnNjcmliZShsaXN0ID0+IHtcbiAgICAgIHRoaXMuZGF0YSA9IGxpc3Q7XG4gICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uQ2hhbmdlKGl0ZW06IFNGU2NoZW1hRW51bSk6IHZvaWQge1xuICAgIGl0ZW0uY2hlY2tlZCA9ICFpdGVtLmNoZWNrZWQ7XG4gICAgdGhpcy51cGRhdGVWYWx1ZSgpO1xuICAgIGlmICh0aGlzLnVpLmNoZWNrZWRDaGFuZ2UpIHtcbiAgICAgIHRoaXMudWkuY2hlY2tlZENoYW5nZShpdGVtLmNoZWNrZWQpO1xuICAgIH1cbiAgfVxuXG4gIF9jbG9zZShlOiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMudWkub25DbG9zZSkgdGhpcy51aS5vbkNsb3NlKGUpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVWYWx1ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5zZXRWYWx1ZShcbiAgICAgIHRoaXMuZGF0YS5maWx0ZXIodyA9PiB3LmNoZWNrZWQpLm1hcChpID0+IGkudmFsdWUpLFxuICAgICAgZmFsc2VcbiAgICApO1xuICB9XG59XG4iXX0=