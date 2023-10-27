import { Component, ViewEncapsulation } from '@angular/core';
import { ControlUIWidget } from '@delon/form';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
import * as i3 from "@delon/form";
import * as i4 from "ng-zorro-antd/color-picker";
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: ColorWidget, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.11", type: ColorWidget, selector: "sf-color", usesInheritance: true, ngImport: i0, template: `<sf-item-wrap
    [id]="id"
    [schema]="schema"
    [ui]="ui"
    [showError]="showError"
    [error]="error"
    [showTitle]="schema.title"
  >
    <nz-color-block *ngIf="ui.block" [nzColor]="value" [nzSize]="$any(ui.size)" />
    <nz-color-picker
      *ngIf="!ui.block"
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
  </sf-item-wrap>`, isInline: true, dependencies: [{ kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i3.SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }, { kind: "component", type: i4.NzColorPickerComponent, selector: "nz-color-picker", inputs: ["nzFormat", "nzValue", "nzSize", "nzDefaultValue", "nzTrigger", "nzTitle", "nzFlipFlop", "nzShowText", "nzOpen", "nzAllowClear", "nzDisabled"], outputs: ["nzOnChange", "nzOnFormatChange", "nzOnClear", "nzOnOpenChange"], exportAs: ["NzColorPicker"] }, { kind: "component", type: i4.NzColorBlockComponent, selector: "nz-color-block", inputs: ["nzColor", "nzSize"], outputs: ["nzOnClick"], exportAs: ["NzColorBlock"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: ColorWidget, decorators: [{
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
    <nz-color-block *ngIf="ui.block" [nzColor]="value" [nzSize]="$any(ui.size)" />
    <nz-color-picker
      *ngIf="!ui.block"
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
  </sf-item-wrap>`,
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS93aWRnZXRzL2NvbG9yL3dpZGdldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7OztBQW9DOUMsTUFBTSxPQUFPLFdBQVksU0FBUSxlQUFvQzthQUNuRCxRQUFHLEdBQUcsT0FBTyxBQUFWLENBQVc7SUFFOUIsT0FBTyxDQUFDLEVBQXNDO1FBQzVDLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNO1lBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELGFBQWEsQ0FBQyxFQUEyQjtRQUN2QyxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWTtZQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3JELENBQUM7K0dBVFUsV0FBVzttR0FBWCxXQUFXLHVFQTdCWjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkF5Qk07OzRGQUlMLFdBQVc7a0JBL0J2QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBeUJNO29CQUNoQixtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDdEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbnRyb2xVSVdpZGdldCB9IGZyb20gJ0BkZWxvbi9mb3JtJztcbmltcG9ydCB0eXBlIHsgTnpDb2xvciwgTnpDb2xvclBpY2tlckZvcm1hdFR5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvbG9yLXBpY2tlcic7XG5cbmltcG9ydCB0eXBlIHsgU0ZDb2xvcldpZGdldFNjaGVtYSB9IGZyb20gJy4vc2NoZW1hJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtY29sb3InLFxuICB0ZW1wbGF0ZTogYDxzZi1pdGVtLXdyYXBcbiAgICBbaWRdPVwiaWRcIlxuICAgIFtzY2hlbWFdPVwic2NoZW1hXCJcbiAgICBbdWldPVwidWlcIlxuICAgIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCJcbiAgICBbZXJyb3JdPVwiZXJyb3JcIlxuICAgIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCJcbiAgPlxuICAgIDxuei1jb2xvci1ibG9jayAqbmdJZj1cInVpLmJsb2NrXCIgW256Q29sb3JdPVwidmFsdWVcIiBbbnpTaXplXT1cIiRhbnkodWkuc2l6ZSlcIiAvPlxuICAgIDxuei1jb2xvci1waWNrZXJcbiAgICAgICpuZ0lmPVwiIXVpLmJsb2NrXCJcbiAgICAgIFtuZ01vZGVsXT1cInZhbHVlXCJcbiAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInNldFZhbHVlKCRldmVudClcIlxuICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgW256U2l6ZV09XCIkYW55KHVpLnNpemUpXCJcbiAgICAgIFtuekRlZmF1bHRWYWx1ZV09XCJ1aS5kZWZhdWx0VmFsdWUgPz8gJydcIlxuICAgICAgW256Rm9ybWF0XT1cInVpLmZvcm1hdCA/PyBudWxsXCJcbiAgICAgIFtuelRyaWdnZXJdPVwidWkudHJpZ2dlciA/PyAnY2xpY2snXCJcbiAgICAgIFtuelRpdGxlXT1cInVpLnRpdGxlID8/ICcnXCJcbiAgICAgIFtuekZsaXBGbG9wXT1cIiRhbnkodWkuZmxpcEZsb3ApXCJcbiAgICAgIFtuelNob3dUZXh0XT1cInVpLnNob3dUZXh0XCJcbiAgICAgIFtuekFsbG93Q2xlYXJdPVwidWkuYWxsb3dDbGVhclwiXG4gICAgICAobnpPbkNoYW5nZSk9XCJfY2hhbmdlKCRldmVudClcIlxuICAgICAgKG56T25Gb3JtYXRDaGFuZ2UpPVwiX2Zvcm1hdENoYW5nZSgkZXZlbnQpXCJcbiAgICAvPlxuICA8L3NmLWl0ZW0td3JhcD5gLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBDb2xvcldpZGdldCBleHRlbmRzIENvbnRyb2xVSVdpZGdldDxTRkNvbG9yV2lkZ2V0U2NoZW1hPiB7XG4gIHN0YXRpYyByZWFkb25seSBLRVkgPSAnY29sb3InO1xuXG4gIF9jaGFuZ2UoZXY6IHsgY29sb3I6IE56Q29sb3I7IGZvcm1hdDogc3RyaW5nIH0pOiB2b2lkIHtcbiAgICBpZiAodGhpcy51aS5jaGFuZ2UpIHRoaXMudWkuY2hhbmdlKGV2KTtcbiAgfVxuXG4gIF9mb3JtYXRDaGFuZ2UoZXY6IE56Q29sb3JQaWNrZXJGb3JtYXRUeXBlKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudWkuZm9ybWF0Q2hhbmdlKSB0aGlzLnVpLmZvcm1hdENoYW5nZShldik7XG4gIH1cbn1cbiJdfQ==