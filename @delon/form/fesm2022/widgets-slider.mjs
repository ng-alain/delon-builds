import * as i0 from '@angular/core';
import { Component, ViewEncapsulation, NgModule } from '@angular/core';
import * as i1 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import * as i1$1 from '@delon/form';
import { ControlUIWidget, DelonFormModule } from '@delon/form';
import * as i3 from 'ng-zorro-antd/slider';
import { NzSliderModule } from 'ng-zorro-antd/slider';

class SliderWidget extends ControlUIWidget {
    constructor() {
        super(...arguments);
        this.marks = null;
        this._formatter = (value) => {
            const { formatter } = this.ui;
            if (formatter)
                return formatter(value);
            return `${value}`;
        };
    }
    static { this.KEY = 'slider'; }
    ngOnInit() {
        const { minimum, maximum, multipleOf } = this.schema;
        this.min = minimum || 0;
        this.max = maximum || 100;
        this.step = multipleOf || 1;
        const { marks, included } = this.ui;
        this.marks = marks || null;
        this.included = typeof included === 'undefined' ? true : included;
    }
    _afterChange(value) {
        const { afterChange } = this.ui;
        if (afterChange)
            return afterChange(value);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.5", ngImport: i0, type: SliderWidget, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.5", type: SliderWidget, isStandalone: true, selector: "sf-slider", usesInheritance: true, ngImport: i0, template: `<sf-item-wrap
    [id]="id"
    [schema]="schema"
    [ui]="ui"
    [showError]="showError"
    [error]="error"
    [showTitle]="schema.title"
  >
    <nz-slider
      [ngModel]="value"
      (ngModelChange)="setValue($event)"
      [nzDisabled]="disabled"
      [nzRange]="ui.range"
      [nzMin]="min"
      [nzMax]="max"
      [nzStep]="step"
      [nzMarks]="marks"
      [nzDots]="ui.dots"
      [nzIncluded]="included"
      [nzVertical]="ui.vertical"
      [nzTipFormatter]="_formatter"
      (nzOnAfterChange)="_afterChange($event)"
    />
  </sf-item-wrap>`, isInline: true, dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: DelonFormModule }, { kind: "component", type: i1$1.SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }, { kind: "ngmodule", type: NzSliderModule }, { kind: "component", type: i3.NzSliderComponent, selector: "nz-slider", inputs: ["nzDisabled", "nzDots", "nzIncluded", "nzRange", "nzVertical", "nzReverse", "nzDefaultValue", "nzMarks", "nzMax", "nzMin", "nzStep", "nzTooltipVisible", "nzTooltipPlacement", "nzTipFormatter"], outputs: ["nzOnAfterChange"], exportAs: ["nzSlider"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.5", ngImport: i0, type: SliderWidget, decorators: [{
            type: Component,
            args: [{
                    selector: 'sf-slider',
                    template: `<sf-item-wrap
    [id]="id"
    [schema]="schema"
    [ui]="ui"
    [showError]="showError"
    [error]="error"
    [showTitle]="schema.title"
  >
    <nz-slider
      [ngModel]="value"
      (ngModelChange)="setValue($event)"
      [nzDisabled]="disabled"
      [nzRange]="ui.range"
      [nzMin]="min"
      [nzMax]="max"
      [nzStep]="step"
      [nzMarks]="marks"
      [nzDots]="ui.dots"
      [nzIncluded]="included"
      [nzVertical]="ui.vertical"
      [nzTipFormatter]="_formatter"
      (nzOnAfterChange)="_afterChange($event)"
    />
  </sf-item-wrap>`,
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    standalone: true,
                    imports: [FormsModule, DelonFormModule, NzSliderModule]
                }]
        }] });

class SliderWidgetModule {
    constructor(widgetRegistry) {
        widgetRegistry.register(SliderWidget.KEY, SliderWidget);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.5", ngImport: i0, type: SliderWidgetModule, deps: [{ token: i1$1.WidgetRegistry }], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.0.5", ngImport: i0, type: SliderWidgetModule, imports: [FormsModule, DelonFormModule, NzSliderModule, SliderWidget] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.0.5", ngImport: i0, type: SliderWidgetModule, imports: [FormsModule, DelonFormModule, NzSliderModule, SliderWidget] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.5", ngImport: i0, type: SliderWidgetModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [FormsModule, DelonFormModule, NzSliderModule, SliderWidget]
                }]
        }], ctorParameters: () => [{ type: i1$1.WidgetRegistry }] });

function withSliderWidget() {
    return { KEY: SliderWidget.KEY, type: SliderWidget };
}

/**
 * Generated bundle index. Do not edit.
 */

export { SliderWidget, SliderWidgetModule, withSliderWidget };
//# sourceMappingURL=widgets-slider.mjs.map
