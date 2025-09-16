import * as i0 from '@angular/core';
import { ViewEncapsulation, Component, NgModule } from '@angular/core';
import * as i1 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import * as i1$1 from '@delon/form';
import { ControlUIWidget, toBool, getData, DelonFormModule } from '@delon/form';
import * as i3 from 'ng-zorro-antd/tree-select';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';

class TreeSelectWidget extends ControlUIWidget {
    static KEY = 'tree-select';
    i;
    data = [];
    asyncData = false;
    ngOnInit() {
        const { ui } = this;
        this.i = {
            allowClear: ui.allowClear,
            showSearch: toBool(ui.showSearch, false),
            dropdownMatchSelectWidth: toBool(ui.dropdownMatchSelectWidth, true),
            multiple: toBool(ui.multiple, false),
            checkable: toBool(ui.checkable, false),
            showIcon: toBool(ui.showIcon, false),
            showExpand: toBool(ui.showExpand, true),
            showLine: toBool(ui.showLine, false),
            checkStrictly: toBool(ui.checkStrictly, false),
            hideUnMatched: toBool(ui.hideUnMatched, false),
            defaultExpandAll: toBool(ui.defaultExpandAll, false),
            displayWith: ui.displayWith || ((node) => node.title)
        };
        this.asyncData = typeof ui.expandChange === 'function';
    }
    reset(value) {
        getData(this.schema, this.ui, value).subscribe(list => {
            this.data = list;
            this.detectChanges();
        });
    }
    change(value) {
        if (this.ui.change)
            this.ui.change(value);
        this.setValue(value == null ? this.ui.clearValue : value);
    }
    expandChange(e) {
        const { ui } = this;
        if (typeof ui.expandChange !== 'function')
            return;
        ui.expandChange(e).subscribe(res => {
            e.node.clearChildren();
            e.node.addChildren(res);
            this.detectChanges();
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.2", ngImport: i0, type: TreeSelectWidget, deps: null, target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.1.2", type: TreeSelectWidget, isStandalone: true, selector: "sf-tree-select", usesInheritance: true, ngImport: i0, template: `<sf-item-wrap
    [id]="id"
    [schema]="schema"
    [ui]="ui"
    [showError]="showError"
    [error]="error"
    [showTitle]="schema.title"
  >
    <nz-tree-select
      [nzId]="id"
      [nzAllowClear]="i.allowClear"
      [nzPlaceHolder]="ui.placeholder!"
      [nzDropdownStyle]="ui.dropdownStyle!"
      [nzDropdownClassName]="ui.dropdownClassName"
      [nzSize]="ui.size!"
      [nzExpandedKeys]="ui.expandedKeys!"
      [nzNotFoundContent]="ui.notFoundContent"
      [nzMaxTagCount]="ui.maxTagCount!"
      [nzMaxTagPlaceholder]="ui.maxTagPlaceholder || null"
      [nzTreeTemplate]="ui.treeTemplate!"
      [nzDisabled]="disabled"
      [nzShowSearch]="i.showSearch"
      [nzShowIcon]="i.showIcon"
      [nzDropdownMatchSelectWidth]="i.dropdownMatchSelectWidth"
      [nzMultiple]="i.multiple"
      [nzHideUnMatched]="i.hideUnMatched"
      [nzCheckable]="i.checkable"
      [nzShowExpand]="i.showExpand"
      [nzShowLine]="i.showLine"
      [nzCheckStrictly]="i.checkStrictly"
      [nzAsyncData]="asyncData"
      [nzNodes]="$any(data)"
      [nzDefaultExpandAll]="i.defaultExpandAll"
      [nzDisplayWith]="i.displayWith!"
      [ngModel]="value"
      [nzVirtualHeight]="ui.virtualHeight!"
      [nzVirtualItemSize]="ui.virtualItemSize || 28"
      [nzVirtualMaxBufferPx]="ui.virtualMaxBufferPx || 500"
      [nzVirtualMinBufferPx]="ui.virtualMinBufferPx || 28"
      (ngModelChange)="change($event)"
      (nzExpandChange)="expandChange($event)"
    />
  </sf-item-wrap>`, isInline: true, dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: DelonFormModule }, { kind: "component", type: i1$1.SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }, { kind: "ngmodule", type: NzTreeSelectModule }, { kind: "component", type: i3.NzTreeSelectComponent, selector: "nz-tree-select", inputs: ["nzId", "nzAllowClear", "nzShowExpand", "nzShowLine", "nzDropdownMatchSelectWidth", "nzCheckable", "nzHideUnMatched", "nzShowIcon", "nzShowSearch", "nzDisabled", "nzAsyncData", "nzMultiple", "nzDefaultExpandAll", "nzCheckStrictly", "nzVirtualItemSize", "nzVirtualMaxBufferPx", "nzVirtualMinBufferPx", "nzVirtualHeight", "nzExpandedIcon", "nzNotFoundContent", "nzNodes", "nzOpen", "nzSize", "nzVariant", "nzPlaceHolder", "nzDropdownStyle", "nzDropdownClassName", "nzBackdrop", "nzStatus", "nzPlacement", "nzExpandedKeys", "nzDisplayWith", "nzMaxTagCount", "nzMaxTagPlaceholder", "nzTreeTemplate"], outputs: ["nzOpenChange", "nzCleared", "nzRemoved", "nzExpandChange", "nzTreeClick", "nzTreeCheckboxChange"], exportAs: ["nzTreeSelect"] }], encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.2", ngImport: i0, type: TreeSelectWidget, decorators: [{
            type: Component,
            args: [{
                    selector: 'sf-tree-select',
                    template: `<sf-item-wrap
    [id]="id"
    [schema]="schema"
    [ui]="ui"
    [showError]="showError"
    [error]="error"
    [showTitle]="schema.title"
  >
    <nz-tree-select
      [nzId]="id"
      [nzAllowClear]="i.allowClear"
      [nzPlaceHolder]="ui.placeholder!"
      [nzDropdownStyle]="ui.dropdownStyle!"
      [nzDropdownClassName]="ui.dropdownClassName"
      [nzSize]="ui.size!"
      [nzExpandedKeys]="ui.expandedKeys!"
      [nzNotFoundContent]="ui.notFoundContent"
      [nzMaxTagCount]="ui.maxTagCount!"
      [nzMaxTagPlaceholder]="ui.maxTagPlaceholder || null"
      [nzTreeTemplate]="ui.treeTemplate!"
      [nzDisabled]="disabled"
      [nzShowSearch]="i.showSearch"
      [nzShowIcon]="i.showIcon"
      [nzDropdownMatchSelectWidth]="i.dropdownMatchSelectWidth"
      [nzMultiple]="i.multiple"
      [nzHideUnMatched]="i.hideUnMatched"
      [nzCheckable]="i.checkable"
      [nzShowExpand]="i.showExpand"
      [nzShowLine]="i.showLine"
      [nzCheckStrictly]="i.checkStrictly"
      [nzAsyncData]="asyncData"
      [nzNodes]="$any(data)"
      [nzDefaultExpandAll]="i.defaultExpandAll"
      [nzDisplayWith]="i.displayWith!"
      [ngModel]="value"
      [nzVirtualHeight]="ui.virtualHeight!"
      [nzVirtualItemSize]="ui.virtualItemSize || 28"
      [nzVirtualMaxBufferPx]="ui.virtualMaxBufferPx || 500"
      [nzVirtualMinBufferPx]="ui.virtualMinBufferPx || 28"
      (ngModelChange)="change($event)"
      (nzExpandChange)="expandChange($event)"
    />
  </sf-item-wrap>`,
                    encapsulation: ViewEncapsulation.None,
                    imports: [FormsModule, DelonFormModule, NzTreeSelectModule]
                }]
        }] });

class TreeSelectWidgetModule {
    constructor(widgetRegistry) {
        widgetRegistry.register(TreeSelectWidget.KEY, TreeSelectWidget);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.2", ngImport: i0, type: TreeSelectWidgetModule, deps: [{ token: i1$1.WidgetRegistry }], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "20.1.2", ngImport: i0, type: TreeSelectWidgetModule, imports: [FormsModule, DelonFormModule, NzTreeSelectModule, TreeSelectWidget] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "20.1.2", ngImport: i0, type: TreeSelectWidgetModule, imports: [FormsModule, DelonFormModule, NzTreeSelectModule, TreeSelectWidget] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.2", ngImport: i0, type: TreeSelectWidgetModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [FormsModule, DelonFormModule, NzTreeSelectModule, TreeSelectWidget]
                }]
        }], ctorParameters: () => [{ type: i1$1.WidgetRegistry }] });

function withTreeSelectWidget() {
    return { KEY: TreeSelectWidget.KEY, type: TreeSelectWidget };
}

/**
 * Generated bundle index. Do not edit.
 */

export { TreeSelectWidget, TreeSelectWidgetModule, withTreeSelectWidget };
//# sourceMappingURL=widgets-tree-select.mjs.map
