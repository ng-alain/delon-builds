import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';
import * as i1 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import * as i3 from '@ng-util/monaco-editor';
import { NuMonacoEditorModule } from '@ng-util/monaco-editor';
import * as i1$1 from '@delon/form';
import { ControlUIWidget, DelonFormModule } from '@delon/form';

class MonacoEditorWidget extends ControlUIWidget {
    static { this.KEY = 'monaco-editor'; }
    _change(value) {
        this.setValue(value);
        if (this.ui.change)
            this.ui.change(value);
    }
    _event(ev) {
        if (this.ui.event)
            this.ui.event(ev);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: MonacoEditorWidget, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.11", type: MonacoEditorWidget, selector: "sf-widget-monaco-editor", usesInheritance: true, ngImport: i0, template: `
    <sf-item-wrap
      [id]="id"
      [schema]="schema"
      [ui]="ui"
      [showError]="showError"
      [error]="error"
      [showTitle]="schema.title"
    >
      <nu-monaco-editor
        [ngModel]="value"
        (ngModelChange)="_change($event)"
        [options]="ui.options ?? {}"
        [disabled]="disabled"
        [model]="ui.model"
        [autoFormat]="ui.autoFormat ?? true"
        [height]="ui.height ?? '200px'"
        [delay]="ui.delay ?? 0"
        (event)="_event($event)"
      />
    </sf-item-wrap>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: i1$1.SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }, { kind: "component", type: i3.NuMonacoEditorComponent, selector: "nu-monaco-editor", inputs: ["model", "autoFormat"], exportAs: ["nuMonacoEditor"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: MonacoEditorWidget, decorators: [{
            type: Component,
            args: [{
                    selector: 'sf-widget-monaco-editor',
                    template: `
    <sf-item-wrap
      [id]="id"
      [schema]="schema"
      [ui]="ui"
      [showError]="showError"
      [error]="error"
      [showTitle]="schema.title"
    >
      <nu-monaco-editor
        [ngModel]="value"
        (ngModelChange)="_change($event)"
        [options]="ui.options ?? {}"
        [disabled]="disabled"
        [model]="ui.model"
        [autoFormat]="ui.autoFormat ?? true"
        [height]="ui.height ?? '200px'"
        [delay]="ui.delay ?? 0"
        (event)="_event($event)"
      />
    </sf-item-wrap>
  `
                }]
        }] });

class MonacoEditorWidgetModule {
    constructor(widgetRegistry) {
        widgetRegistry.register(MonacoEditorWidget.KEY, MonacoEditorWidget);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: MonacoEditorWidgetModule, deps: [{ token: i1$1.WidgetRegistry }], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.11", ngImport: i0, type: MonacoEditorWidgetModule, declarations: [MonacoEditorWidget], imports: [FormsModule, DelonFormModule, NuMonacoEditorModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: MonacoEditorWidgetModule, imports: [FormsModule, DelonFormModule, NuMonacoEditorModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: MonacoEditorWidgetModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [FormsModule, DelonFormModule, NuMonacoEditorModule],
                    declarations: [MonacoEditorWidget]
                }]
        }], ctorParameters: function () { return [{ type: i1$1.WidgetRegistry }]; } });

/**
 * Generated bundle index. Do not edit.
 */

export { MonacoEditorWidget, MonacoEditorWidgetModule };
//# sourceMappingURL=widgets-third-monaco-editor.mjs.map
