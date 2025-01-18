import { NgTemplateOutlet, CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Component, ViewEncapsulation, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as i1 from '@delon/form';
import { ControlUIWidget, getData, DelonFormModule } from '@delon/form';
import * as i3 from 'ng-zorro-antd/icon';
import { NzIconModule } from 'ng-zorro-antd/icon';
import * as i2 from 'ng-zorro-antd/tag';
import { NzTagModule } from 'ng-zorro-antd/tag';

class TagWidget extends ControlUIWidget {
    static KEY = 'tag';
    data = [];
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.1", ngImport: i0, type: TagWidget, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.1.1", type: TagWidget, isStandalone: true, selector: "sf-tag", usesInheritance: true, ngImport: i0, template: `<sf-item-wrap
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
  </sf-item-wrap>`, isInline: true, dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "ngmodule", type: DelonFormModule }, { kind: "component", type: i1.SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }, { kind: "ngmodule", type: NzTagModule }, { kind: "component", type: i2.NzTagComponent, selector: "nz-tag", inputs: ["nzMode", "nzColor", "nzChecked", "nzBordered"], outputs: ["nzOnClose", "nzCheckedChange"], exportAs: ["nzTag"] }, { kind: "ngmodule", type: NzIconModule }, { kind: "directive", type: i3.NzIconDirective, selector: "nz-icon,[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }], encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.1", ngImport: i0, type: TagWidget, decorators: [{
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
                    imports: [FormsModule, NgTemplateOutlet, DelonFormModule, NzTagModule, NzIconModule]
                }]
        }] });

class TagWidgetModule {
    constructor(widgetRegistry) {
        widgetRegistry.register(TagWidget.KEY, TagWidget);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.1", ngImport: i0, type: TagWidgetModule, deps: [{ token: i1.WidgetRegistry }], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "19.1.1", ngImport: i0, type: TagWidgetModule, imports: [FormsModule, DelonFormModule, NzTagModule, NzIconModule, CommonModule, TagWidget] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "19.1.1", ngImport: i0, type: TagWidgetModule, imports: [FormsModule, DelonFormModule, NzTagModule, NzIconModule, CommonModule, TagWidget] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.1", ngImport: i0, type: TagWidgetModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [FormsModule, DelonFormModule, NzTagModule, NzIconModule, CommonModule, TagWidget]
                }]
        }], ctorParameters: () => [{ type: i1.WidgetRegistry }] });

function withTagWidget() {
    return { KEY: TagWidget.KEY, type: TagWidget };
}

/**
 * Generated bundle index. Do not edit.
 */

export { TagWidget, TagWidgetModule, withTagWidget };
//# sourceMappingURL=widgets-tag.mjs.map
