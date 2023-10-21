import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Component, ViewEncapsulation, NgModule } from '@angular/core';
import * as i1 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import * as i1$1 from '@delon/form';
import { ControlUIWidget, DelonFormModule } from '@delon/form';
import * as i4 from 'ng-zorro-antd/color-picker';
import { NzColorPickerModule } from 'ng-zorro-antd/color-picker';

class ColorWidget extends ControlUIWidget {
    static { this.KEY = 'color'; }
    _change(ev) {
        if (this.ui.change)
            this.ui.change(ev);
    }
    _formatChange(ev) {
        if (this.ui.formatChange)
            this.ui.formatChange(ev);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ColorWidget, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.10", type: ColorWidget, selector: "sf-color", usesInheritance: true, ngImport: i0, template: `<sf-item-wrap
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
  </sf-item-wrap>`, isInline: true, dependencies: [{ kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i1$1.SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }, { kind: "component", type: i4.NzColorPickerComponent, selector: "nz-color-picker", inputs: ["nzFormat", "nzValue", "nzSize", "nzDefaultValue", "nzTrigger", "nzTitle", "nzFlipFlop", "nzShowText", "nzOpen", "nzAllowClear", "nzDisabled"], outputs: ["nzOnChange", "nzOnFormatChange", "nzOnClear", "nzOnOpenChange"], exportAs: ["NzColorPicker"] }, { kind: "component", type: i4.NzColorBlockComponent, selector: "nz-color-block", inputs: ["nzColor", "nzSize"], outputs: ["nzOnClick"], exportAs: ["NzColorBlock"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ColorWidget, decorators: [{
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

class ColorWidgetModule {
    constructor(widgetRegistry) {
        widgetRegistry.register(ColorWidget.KEY, ColorWidget);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ColorWidgetModule, deps: [{ token: i1$1.WidgetRegistry }], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.10", ngImport: i0, type: ColorWidgetModule, declarations: [ColorWidget], imports: [FormsModule, CommonModule, DelonFormModule, NzColorPickerModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ColorWidgetModule, imports: [FormsModule, CommonModule, DelonFormModule, NzColorPickerModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.10", ngImport: i0, type: ColorWidgetModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [FormsModule, CommonModule, DelonFormModule, NzColorPickerModule],
                    declarations: [ColorWidget]
                }]
        }], ctorParameters: function () { return [{ type: i1$1.WidgetRegistry }]; } });

/**
 * Generated bundle index. Do not edit.
 */

export { ColorWidget, ColorWidgetModule };
//# sourceMappingURL=widgets-color.mjs.map
