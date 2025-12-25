import * as i0 from '@angular/core';
import { ViewEncapsulation, Component, NgModule } from '@angular/core';
import * as i1 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { TinymceComponent } from 'ngx-tinymce';
import * as i1$1 from '@delon/form';
import { ControlUIWidget, DelonFormModule } from '@delon/form';

class TinymceWidget extends ControlUIWidget {
    static KEY = 'tinymce';
    change(value) {
        this.setValue(value);
        if (this.ui.change)
            this.ui.change(value);
    }
    _ready(instance) {
        if (this.ui.ready)
            this.ui.ready(instance);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.0.6", ngImport: i0, type: TinymceWidget, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "21.0.6", type: TinymceWidget, isStandalone: true, selector: "sf-widget-tinymce", usesInheritance: true, ngImport: i0, template: `
    <sf-item-wrap
      [id]="id"
      [schema]="schema"
      [ui]="ui"
      [showError]="showError"
      [error]="error"
      [showTitle]="schema.title"
    >
      <tinymce
        [ngModel]="value"
        (ngModelChange)="change($event)"
        [config]="ui.config"
        [inline]="ui.inline ?? false"
        [delay]="ui.delay ?? 0"
        [loading]="ui.loading ?? 'Loading...'"
        (ready)="_ready($event)"
      />
    </sf-item-wrap>
  `, isInline: true, dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: DelonFormModule }, { kind: "component", type: i1$1.SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }, { kind: "component", type: TinymceComponent, selector: "tinymce", inputs: ["config", "placeholder", "inline", "disabled", "loading", "delay"], outputs: ["ready"], exportAs: ["tinymce"] }], encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.0.6", ngImport: i0, type: TinymceWidget, decorators: [{
            type: Component,
            args: [{
                    selector: 'sf-widget-tinymce',
                    template: `
    <sf-item-wrap
      [id]="id"
      [schema]="schema"
      [ui]="ui"
      [showError]="showError"
      [error]="error"
      [showTitle]="schema.title"
    >
      <tinymce
        [ngModel]="value"
        (ngModelChange)="change($event)"
        [config]="ui.config"
        [inline]="ui.inline ?? false"
        [delay]="ui.delay ?? 0"
        [loading]="ui.loading ?? 'Loading...'"
        (ready)="_ready($event)"
      />
    </sf-item-wrap>
  `,
                    encapsulation: ViewEncapsulation.None,
                    imports: [FormsModule, DelonFormModule, TinymceComponent]
                }]
        }] });

class TinymceWidgetModule {
    constructor(widgetRegistry) {
        widgetRegistry.register(TinymceWidget.KEY, TinymceWidget);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.0.6", ngImport: i0, type: TinymceWidgetModule, deps: [{ token: i1$1.WidgetRegistry }], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "21.0.6", ngImport: i0, type: TinymceWidgetModule, imports: [FormsModule, DelonFormModule, TinymceComponent, TinymceWidget] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "21.0.6", ngImport: i0, type: TinymceWidgetModule, imports: [FormsModule, DelonFormModule, TinymceComponent, TinymceWidget] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.0.6", ngImport: i0, type: TinymceWidgetModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [FormsModule, DelonFormModule, TinymceComponent, TinymceWidget]
                }]
        }], ctorParameters: () => [{ type: i1$1.WidgetRegistry }] });

function withTinymceWidget() {
    return { KEY: TinymceWidget.KEY, type: TinymceWidget };
}

/**
 * Generated bundle index. Do not edit.
 */

export { TinymceWidget, TinymceWidgetModule, withTinymceWidget };
//# sourceMappingURL=widgets-third-tinymce.mjs.map
