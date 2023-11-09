import * as i0 from '@angular/core';
import { Component, ViewEncapsulation, NgModule } from '@angular/core';
import * as i1 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import * as i1$1 from '@delon/form';
import { ControlUIWidget, toBool, getData, DelonFormModule } from '@delon/form';
import * as i3 from 'ng-zorro-antd/cascader';
import { NzCascaderModule } from 'ng-zorro-antd/cascader';

class CascaderWidget extends ControlUIWidget {
    constructor() {
        super(...arguments);
        this.data = [];
    }
    static { this.KEY = 'cascader'; }
    ngOnInit() {
        const { clearText, showArrow, showInput, triggerAction, asyncData } = this.ui;
        this.clearText = clearText || '清除';
        this.showArrow = toBool(showArrow, true);
        this.showInput = toBool(showInput, true);
        this.triggerAction = triggerAction || ['click'];
        if (!!asyncData) {
            this.loadData = (node, index) => asyncData(node, index, this).then(() => this.detectChanges());
        }
    }
    reset(value) {
        getData(this.schema, {}, value).subscribe(list => {
            this.data = list;
            this.detectChanges();
        });
    }
    _visibleChange(status) {
        if (this.ui.visibleChange)
            this.ui.visibleChange(status);
    }
    _change(value) {
        this.setValue(value);
        if (this.ui.change) {
            this.ui.change(value);
        }
    }
    _selectionChange(options) {
        if (this.ui.selectionChange) {
            this.ui.selectionChange(options);
        }
    }
    _clear() {
        if (this.ui.clear)
            this.ui.clear();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CascaderWidget, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: CascaderWidget, selector: "sf-cascader", usesInheritance: true, ngImport: i0, template: `<sf-item-wrap
    [id]="id"
    [schema]="schema"
    [ui]="ui"
    [showError]="showError"
    [error]="error"
    [showTitle]="schema.title"
  >
    <nz-cascader
      [nzDisabled]="disabled"
      [nzSize]="ui.size!"
      [ngModel]="value"
      (ngModelChange)="_change($event)"
      [nzOptions]="data"
      [nzAllowClear]="ui.allowClear"
      [nzAutoFocus]="ui.autoFocus"
      [nzChangeOn]="ui.changeOn"
      [nzChangeOnSelect]="ui.changeOnSelect"
      [nzColumnClassName]="ui.columnClassName"
      [nzExpandTrigger]="ui.expandTrigger!"
      [nzMenuClassName]="ui.menuClassName"
      [nzMenuStyle]="ui.menuStyle!"
      [nzNotFoundContent]="ui.notFoundContent"
      [nzLabelProperty]="ui.labelProperty || 'label'"
      [nzValueProperty]="ui.valueProperty || 'value'"
      [nzLoadData]="loadData"
      [nzPlaceHolder]="ui.placeholder!"
      [nzShowArrow]="showArrow"
      [nzShowInput]="showInput"
      [nzShowSearch]="ui.showSearch!"
      (nzClear)="_clear()"
      (nzVisibleChange)="_visibleChange($event)"
      (nzSelectionChange)="_selectionChange($event)"
    />
  </sf-item-wrap>`, isInline: true, dependencies: [{ kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: i1$1.SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }, { kind: "component", type: i3.NzCascaderComponent, selector: "nz-cascader, [nz-cascader]", inputs: ["nzOptionRender", "nzShowInput", "nzShowArrow", "nzAllowClear", "nzAutoFocus", "nzChangeOnSelect", "nzDisabled", "nzColumnClassName", "nzExpandTrigger", "nzValueProperty", "nzLabelRender", "nzLabelProperty", "nzNotFoundContent", "nzSize", "nzBackdrop", "nzShowSearch", "nzPlaceHolder", "nzMenuClassName", "nzMenuStyle", "nzMouseEnterDelay", "nzMouseLeaveDelay", "nzStatus", "nzTriggerAction", "nzChangeOn", "nzLoadData", "nzSuffixIcon", "nzExpandIcon", "nzOptions"], outputs: ["nzVisibleChange", "nzSelectionChange", "nzSelect", "nzClear"], exportAs: ["nzCascader"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CascaderWidget, decorators: [{
            type: Component,
            args: [{
                    selector: 'sf-cascader',
                    template: `<sf-item-wrap
    [id]="id"
    [schema]="schema"
    [ui]="ui"
    [showError]="showError"
    [error]="error"
    [showTitle]="schema.title"
  >
    <nz-cascader
      [nzDisabled]="disabled"
      [nzSize]="ui.size!"
      [ngModel]="value"
      (ngModelChange)="_change($event)"
      [nzOptions]="data"
      [nzAllowClear]="ui.allowClear"
      [nzAutoFocus]="ui.autoFocus"
      [nzChangeOn]="ui.changeOn"
      [nzChangeOnSelect]="ui.changeOnSelect"
      [nzColumnClassName]="ui.columnClassName"
      [nzExpandTrigger]="ui.expandTrigger!"
      [nzMenuClassName]="ui.menuClassName"
      [nzMenuStyle]="ui.menuStyle!"
      [nzNotFoundContent]="ui.notFoundContent"
      [nzLabelProperty]="ui.labelProperty || 'label'"
      [nzValueProperty]="ui.valueProperty || 'value'"
      [nzLoadData]="loadData"
      [nzPlaceHolder]="ui.placeholder!"
      [nzShowArrow]="showArrow"
      [nzShowInput]="showInput"
      [nzShowSearch]="ui.showSearch!"
      (nzClear)="_clear()"
      (nzVisibleChange)="_visibleChange($event)"
      (nzSelectionChange)="_selectionChange($event)"
    />
  </sf-item-wrap>`,
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None
                }]
        }] });

class CascaderWidgetModule {
    constructor(widgetRegistry) {
        widgetRegistry.register(CascaderWidget.KEY, CascaderWidget);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CascaderWidgetModule, deps: [{ token: i1$1.WidgetRegistry }], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: CascaderWidgetModule, declarations: [CascaderWidget], imports: [FormsModule, DelonFormModule, NzCascaderModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CascaderWidgetModule, imports: [FormsModule, DelonFormModule, NzCascaderModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: CascaderWidgetModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [FormsModule, DelonFormModule, NzCascaderModule],
                    declarations: [CascaderWidget]
                }]
        }], ctorParameters: function () { return [{ type: i1$1.WidgetRegistry }]; } });

/**
 * Generated bundle index. Do not edit.
 */

export { CascaderWidget, CascaderWidgetModule };
//# sourceMappingURL=widgets-cascader.mjs.map
