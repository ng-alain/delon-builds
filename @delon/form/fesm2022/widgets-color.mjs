import * as i0 from '@angular/core';
import { ViewEncapsulation, Component, NgModule } from '@angular/core';
import * as i1 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import * as i1$1 from '@delon/form';
import { ControlUIWidget, DelonFormModule } from '@delon/form';
import * as i3 from 'ng-zorro-antd/color-picker';
import { NzColorPickerModule } from 'ng-zorro-antd/color-picker';
import { CommonModule } from '@angular/common';

class ColorWidget extends ControlUIWidget {
    static KEY = 'color';
    _change(ev) {
        if (this.ui.change)
            this.ui.change(ev);
    }
    _formatChange(ev) {
        if (this.ui.formatChange)
            this.ui.formatChange(ev);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.2", ngImport: i0, type: ColorWidget, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.1.2", type: ColorWidget, isStandalone: true, selector: "sf-color", usesInheritance: true, ngImport: i0, template: `<sf-item-wrap
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
  </sf-item-wrap>`, isInline: true, dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: DelonFormModule }, { kind: "component", type: i1$1.SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }, { kind: "ngmodule", type: NzColorPickerModule }, { kind: "component", type: i3.NzColorPickerComponent, selector: "nz-color-picker", inputs: ["nzFormat", "nzValue", "nzSize", "nzDefaultValue", "nzTrigger", "nzTitle", "nzFlipFlop", "nzShowText", "nzOpen", "nzAllowClear", "nzDisabled", "nzDisabledAlpha"], outputs: ["nzOnChange", "nzOnFormatChange", "nzOnClear", "nzOnOpenChange"], exportAs: ["nzColorPicker"] }, { kind: "component", type: i3.NzColorBlockComponent, selector: "nz-color-block", inputs: ["nzColor", "nzSize"], outputs: ["nzOnClick"], exportAs: ["nzColorBlock"] }], encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.2", ngImport: i0, type: ColorWidget, decorators: [{
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
                    encapsulation: ViewEncapsulation.None,
                    imports: [FormsModule, DelonFormModule, NzColorPickerModule]
                }]
        }] });

class ColorWidgetModule {
    constructor(widgetRegistry) {
        widgetRegistry.register(ColorWidget.KEY, ColorWidget);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.2", ngImport: i0, type: ColorWidgetModule, deps: [{ token: i1$1.WidgetRegistry }], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "20.1.2", ngImport: i0, type: ColorWidgetModule, imports: [FormsModule, CommonModule, DelonFormModule, NzColorPickerModule, ColorWidget] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "20.1.2", ngImport: i0, type: ColorWidgetModule, imports: [FormsModule, CommonModule, DelonFormModule, NzColorPickerModule, ColorWidget] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.2", ngImport: i0, type: ColorWidgetModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [FormsModule, CommonModule, DelonFormModule, NzColorPickerModule, ColorWidget]
                }]
        }], ctorParameters: () => [{ type: i1$1.WidgetRegistry }] });

function withColorWidget() {
    return { KEY: ColorWidget.KEY, type: ColorWidget };
}

/**
 * Generated bundle index. Do not edit.
 */

export { ColorWidget, ColorWidgetModule, withColorWidget };
//# sourceMappingURL=widgets-color.mjs.map
