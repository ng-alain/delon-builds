import * as i0 from '@angular/core';
import { Component, ViewEncapsulation, NgModule } from '@angular/core';
import * as i1 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import * as i1$1 from '@delon/form';
import { ControlUIWidget, getData, DelonFormModule } from '@delon/form';
import * as i3 from 'ng-zorro-antd/segmented';
import { NzSegmentedModule } from 'ng-zorro-antd/segmented';

class SegmentedWidget extends ControlUIWidget {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.1", ngImport: i0, type: SegmentedWidget, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.1", type: SegmentedWidget, isStandalone: true, selector: "sf-segmented", usesInheritance: true, ngImport: i0, template: `<sf-item-wrap
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
  </sf-item-wrap>`, isInline: true, dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: DelonFormModule }, { kind: "component", type: i1$1.SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }, { kind: "ngmodule", type: NzSegmentedModule }, { kind: "component", type: i3.NzSegmentedComponent, selector: "nz-segmented", inputs: ["nzBlock", "nzDisabled", "nzOptions", "nzSize", "nzLabelTemplate"], outputs: ["nzValueChange"], exportAs: ["nzSegmented"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.1", ngImport: i0, type: SegmentedWidget, decorators: [{
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

class SegmentedWidgetModule {
    constructor(widgetRegistry) {
        widgetRegistry.register(SegmentedWidget.KEY, SegmentedWidget);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.1", ngImport: i0, type: SegmentedWidgetModule, deps: [{ token: i1$1.WidgetRegistry }], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.1", ngImport: i0, type: SegmentedWidgetModule, imports: [FormsModule, DelonFormModule, NzSegmentedModule, SegmentedWidget] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.1", ngImport: i0, type: SegmentedWidgetModule, imports: [FormsModule, DelonFormModule, NzSegmentedModule, SegmentedWidget] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.1", ngImport: i0, type: SegmentedWidgetModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [FormsModule, DelonFormModule, NzSegmentedModule, SegmentedWidget]
                }]
        }], ctorParameters: () => [{ type: i1$1.WidgetRegistry }] });

function withSegmentedWidget() {
    return { KEY: SegmentedWidget.KEY, type: SegmentedWidget };
}

/**
 * Generated bundle index. Do not edit.
 */

export { SegmentedWidget, SegmentedWidgetModule, withSegmentedWidget };
//# sourceMappingURL=widgets-color.mjs.map
