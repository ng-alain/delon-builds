import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ControlUIWidget, DelonFormModule } from '@delon/form';
import { NzColorPickerModule } from 'ng-zorro-antd/color-picker';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@delon/form";
import * as i3 from "ng-zorro-antd/color-picker";
export class ColorWidget extends ControlUIWidget {
    static { this.KEY = 'color'; }
    _change(ev) {
        if (this.ui.change)
            this.ui.change(ev);
    }
    _formatChange(ev) {
        if (this.ui.formatChange)
            this.ui.formatChange(ev);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: ColorWidget, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.2", type: ColorWidget, isStandalone: true, selector: "sf-color", usesInheritance: true, ngImport: i0, template: `<sf-item-wrap
    [id]="id"
    [schema]="schema"
    [ui]="ui"
    [showError]="showError"
    [error]="error"
    [showTitle]="schema.title"
  >
    @if (ui.block) {
    <nz-color-block [nzColor]="value" [nzSize]="$any(ui.size)" />
    } @else {
    <nz-color-picker
      [ngModel]="value"
      (ngModelChange)="setValue($event)"
      [nzDisabled]="disabled"
      [nzSize]="$any(ui.size)"
      [nzDefaultValue]="ui.defaultValue ?? ''"
      [nzFormat]="ui.format ?? null"
      [nzTrigger]="ui.trigger ?? 'click'"
      [nzTitle]="ui.title ?? ''"
      [nzFlipFlop]="$any(ui.flipFlop)"
      [nzShowText]="ui.showText"
      [nzAllowClear]="ui.allowClear"
      (nzOnChange)="_change($event)"
      (nzOnFormatChange)="_formatChange($event)"
    />
    }
  </sf-item-wrap>`, isInline: true, dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: DelonFormModule }, { kind: "component", type: i2.SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }, { kind: "ngmodule", type: NzColorPickerModule }, { kind: "component", type: i3.NzColorPickerComponent, selector: "nz-color-picker", inputs: ["nzFormat", "nzValue", "nzSize", "nzDefaultValue", "nzTrigger", "nzTitle", "nzFlipFlop", "nzShowText", "nzOpen", "nzAllowClear", "nzDisabled"], outputs: ["nzOnChange", "nzOnFormatChange", "nzOnClear", "nzOnOpenChange"], exportAs: ["NzColorPicker"] }, { kind: "component", type: i3.NzColorBlockComponent, selector: "nz-color-block", inputs: ["nzColor", "nzSize"], outputs: ["nzOnClick"], exportAs: ["NzColorBlock"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: ColorWidget, decorators: [{
            type: Component,
            args: [{
                    selector: 'sf-color',
                    template: `<sf-item-wrap
    [id]="id"
    [schema]="schema"
    [ui]="ui"
    [showError]="showError"
    [error]="error"
    [showTitle]="schema.title"
  >
    @if (ui.block) {
    <nz-color-block [nzColor]="value" [nzSize]="$any(ui.size)" />
    } @else {
    <nz-color-picker
      [ngModel]="value"
      (ngModelChange)="setValue($event)"
      [nzDisabled]="disabled"
      [nzSize]="$any(ui.size)"
      [nzDefaultValue]="ui.defaultValue ?? ''"
      [nzFormat]="ui.format ?? null"
      [nzTrigger]="ui.trigger ?? 'click'"
      [nzTitle]="ui.title ?? ''"
      [nzFlipFlop]="$any(ui.flipFlop)"
      [nzShowText]="ui.showText"
      [nzAllowClear]="ui.allowClear"
      (nzOnChange)="_change($event)"
      (nzOnFormatChange)="_formatChange($event)"
    />
    }
  </sf-item-wrap>`,
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    standalone: true,
                    imports: [FormsModule, DelonFormModule, NzColorPickerModule]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS93aWRnZXRzL2NvbG9yL3dpZGdldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMvRCxPQUFPLEVBQUUsbUJBQW1CLEVBQThDLE1BQU0sNEJBQTRCLENBQUM7Ozs7O0FBdUM3RyxNQUFNLE9BQU8sV0FBWSxTQUFRLGVBQW9DO2FBQ25ELFFBQUcsR0FBRyxPQUFPLEFBQVYsQ0FBVztJQUU5QixPQUFPLENBQUMsRUFBc0M7UUFDNUMsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU07WUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsYUFBYSxDQUFDLEVBQTJCO1FBQ3ZDLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZO1lBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDckQsQ0FBQzs4R0FUVSxXQUFXO2tHQUFYLFdBQVcsMkZBakNaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBMkJNLDJEQUlOLFdBQVcsOFZBQUUsZUFBZSx5TEFBRSxtQkFBbUI7OzJGQUVoRCxXQUFXO2tCQW5DdkIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBMkJNO29CQUNoQixtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLE9BQU8sRUFBRSxDQUFDLFdBQVcsRUFBRSxlQUFlLEVBQUUsbUJBQW1CLENBQUM7aUJBQzdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IENvbnRyb2xVSVdpZGdldCwgRGVsb25Gb3JtTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2Zvcm0nO1xuaW1wb3J0IHsgTnpDb2xvclBpY2tlck1vZHVsZSwgdHlwZSBOekNvbG9yLCB0eXBlIE56Q29sb3JQaWNrZXJGb3JtYXRUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb2xvci1waWNrZXInO1xuXG5pbXBvcnQgdHlwZSB7IFNGQ29sb3JXaWRnZXRTY2hlbWEgfSBmcm9tICcuL3NjaGVtYSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLWNvbG9yJyxcbiAgdGVtcGxhdGU6IGA8c2YtaXRlbS13cmFwXG4gICAgW2lkXT1cImlkXCJcbiAgICBbc2NoZW1hXT1cInNjaGVtYVwiXG4gICAgW3VpXT1cInVpXCJcbiAgICBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiXG4gICAgW2Vycm9yXT1cImVycm9yXCJcbiAgICBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiXG4gID5cbiAgICBAaWYgKHVpLmJsb2NrKSB7XG4gICAgPG56LWNvbG9yLWJsb2NrIFtuekNvbG9yXT1cInZhbHVlXCIgW256U2l6ZV09XCIkYW55KHVpLnNpemUpXCIgLz5cbiAgICB9IEBlbHNlIHtcbiAgICA8bnotY29sb3ItcGlja2VyXG4gICAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXG4gICAgICAobmdNb2RlbENoYW5nZSk9XCJzZXRWYWx1ZSgkZXZlbnQpXCJcbiAgICAgIFtuekRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgIFtuelNpemVdPVwiJGFueSh1aS5zaXplKVwiXG4gICAgICBbbnpEZWZhdWx0VmFsdWVdPVwidWkuZGVmYXVsdFZhbHVlID8/ICcnXCJcbiAgICAgIFtuekZvcm1hdF09XCJ1aS5mb3JtYXQgPz8gbnVsbFwiXG4gICAgICBbbnpUcmlnZ2VyXT1cInVpLnRyaWdnZXIgPz8gJ2NsaWNrJ1wiXG4gICAgICBbbnpUaXRsZV09XCJ1aS50aXRsZSA/PyAnJ1wiXG4gICAgICBbbnpGbGlwRmxvcF09XCIkYW55KHVpLmZsaXBGbG9wKVwiXG4gICAgICBbbnpTaG93VGV4dF09XCJ1aS5zaG93VGV4dFwiXG4gICAgICBbbnpBbGxvd0NsZWFyXT1cInVpLmFsbG93Q2xlYXJcIlxuICAgICAgKG56T25DaGFuZ2UpPVwiX2NoYW5nZSgkZXZlbnQpXCJcbiAgICAgIChuek9uRm9ybWF0Q2hhbmdlKT1cIl9mb3JtYXRDaGFuZ2UoJGV2ZW50KVwiXG4gICAgLz5cbiAgICB9XG4gIDwvc2YtaXRlbS13cmFwPmAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbRm9ybXNNb2R1bGUsIERlbG9uRm9ybU1vZHVsZSwgTnpDb2xvclBpY2tlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQ29sb3JXaWRnZXQgZXh0ZW5kcyBDb250cm9sVUlXaWRnZXQ8U0ZDb2xvcldpZGdldFNjaGVtYT4ge1xuICBzdGF0aWMgcmVhZG9ubHkgS0VZID0gJ2NvbG9yJztcblxuICBfY2hhbmdlKGV2OiB7IGNvbG9yOiBOekNvbG9yOyBmb3JtYXQ6IHN0cmluZyB9KTogdm9pZCB7XG4gICAgaWYgKHRoaXMudWkuY2hhbmdlKSB0aGlzLnVpLmNoYW5nZShldik7XG4gIH1cblxuICBfZm9ybWF0Q2hhbmdlKGV2OiBOekNvbG9yUGlja2VyRm9ybWF0VHlwZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLnVpLmZvcm1hdENoYW5nZSkgdGhpcy51aS5mb3JtYXRDaGFuZ2UoZXYpO1xuICB9XG59XG4iXX0=