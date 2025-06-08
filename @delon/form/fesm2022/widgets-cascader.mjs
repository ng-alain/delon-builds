import * as i0 from '@angular/core';
import { Component, ViewEncapsulation, NgModule } from '@angular/core';
import * as i1 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import * as i1$1 from '@delon/form';
import { ControlUIWidget, toBool, getData, DelonFormModule } from '@delon/form';
import * as i3 from 'ng-zorro-antd/cascader';
import { NzCascaderModule } from 'ng-zorro-antd/cascader';

class CascaderWidget extends ControlUIWidget {
    static KEY = 'cascader';
    clearText;
    showArrow;
    showInput;
    triggerAction;
    data = [];
    loadData;
    ngOnInit() {
        const { clearText, showArrow, showInput, triggerAction, asyncData } = this.ui;
        this.clearText = clearText || '清除';
        this.showArrow = toBool(showArrow, true);
        this.showInput = toBool(showInput, true);
        this.triggerAction = triggerAction || ['click'];
        if (asyncData) {
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
        this.setValue(value == null ? this.ui.clearValue : value);
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.6", ngImport: i0, type: CascaderWidget, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.6", type: CascaderWidget, isStandalone: true, selector: "sf-cascader", usesInheritance: true, ngImport: i0, template: `<sf-item-wrap
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
      [nzPlacement]="ui.placement ?? 'bottomLeft'"
      [nzShowArrow]="showArrow"
      [nzShowInput]="showInput"
      [nzShowSearch]="ui.showSearch!"
      [nzMultiple]="ui.multiple"
      (nzClear)="_clear()"
      (nzVisibleChange)="_visibleChange($event)"
      (nzSelectionChange)="_selectionChange($event)"
    />
  </sf-item-wrap>`, isInline: true, dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: DelonFormModule }, { kind: "component", type: i1$1.SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }, { kind: "ngmodule", type: NzCascaderModule }, { kind: "component", type: i3.NzCascaderComponent, selector: "nz-cascader, [nz-cascader]", inputs: ["nzOptionRender", "nzShowInput", "nzShowArrow", "nzAllowClear", "nzAutoFocus", "nzChangeOnSelect", "nzDisabled", "nzColumnClassName", "nzExpandTrigger", "nzValueProperty", "nzLabelProperty", "nzLabelRender", "nzNotFoundContent", "nzSize", "nzBackdrop", "nzShowSearch", "nzPlaceHolder", "nzMenuClassName", "nzMenuStyle", "nzMouseLeaveDelay", "nzMouseEnterDelay", "nzStatus", "nzMultiple", "nzMaxTagCount", "nzPlacement", "nzTriggerAction", "nzChangeOn", "nzLoadData", "nzDisplayWith", "nzSuffixIcon", "nzExpandIcon", "nzOptions"], outputs: ["nzVisibleChange", "nzSelectionChange", "nzRemoved", "nzClear"], exportAs: ["nzCascader"] }], encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.6", ngImport: i0, type: CascaderWidget, decorators: [{
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
      [nzPlacement]="ui.placement ?? 'bottomLeft'"
      [nzShowArrow]="showArrow"
      [nzShowInput]="showInput"
      [nzShowSearch]="ui.showSearch!"
      [nzMultiple]="ui.multiple"
      (nzClear)="_clear()"
      (nzVisibleChange)="_visibleChange($event)"
      (nzSelectionChange)="_selectionChange($event)"
    />
  </sf-item-wrap>`,
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    imports: [FormsModule, DelonFormModule, NzCascaderModule]
                }]
        }] });

class CascaderWidgetModule {
    constructor(widgetRegistry) {
        widgetRegistry.register(CascaderWidget.KEY, CascaderWidget);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.6", ngImport: i0, type: CascaderWidgetModule, deps: [{ token: i1$1.WidgetRegistry }], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "19.2.6", ngImport: i0, type: CascaderWidgetModule, imports: [FormsModule, DelonFormModule, NzCascaderModule, CascaderWidget] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "19.2.6", ngImport: i0, type: CascaderWidgetModule, imports: [FormsModule, DelonFormModule, NzCascaderModule, CascaderWidget] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.6", ngImport: i0, type: CascaderWidgetModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [FormsModule, DelonFormModule, NzCascaderModule, CascaderWidget]
                }]
        }], ctorParameters: () => [{ type: i1$1.WidgetRegistry }] });

function withCascaderWidget() {
    return { KEY: CascaderWidget.KEY, type: CascaderWidget };
}

/**
 * Generated bundle index. Do not edit.
 */

export { CascaderWidget, CascaderWidgetModule, withCascaderWidget };
//# sourceMappingURL=widgets-cascader.mjs.map
