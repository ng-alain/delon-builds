import * as i0 from '@angular/core';
import { Component, ViewEncapsulation, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as i1 from '@delon/form';
import { ControlUIWidget, getData, DelonFormModule } from '@delon/form';
import * as i2 from 'ng-zorro-antd/transfer';
import { NzTransferModule } from 'ng-zorro-antd/transfer';
import { of } from 'rxjs';

class TransferWidget extends ControlUIWidget {
    constructor() {
        super(...arguments);
        this.list = [];
        this._data = [];
        this._canMove = (arg) => {
            return this.ui.canMove ? this.ui.canMove(arg) : of(arg.list);
        };
    }
    static { this.KEY = 'transfer'; }
    ngOnInit() {
        const { titles, operations, itemUnit, itemsUnit } = this.ui;
        this.i = {
            titles: titles || ['', ''],
            operations: operations || ['', ''],
            itemUnit: itemUnit || '项',
            itemsUnit: itemsUnit || '项'
        };
    }
    reset(value) {
        getData(this.schema, this.ui, null).subscribe(list => {
            let formData = value;
            if (!Array.isArray(formData)) {
                formData = [formData];
            }
            list.forEach((item) => {
                if (~formData.indexOf(item.value)) {
                    item.direction = 'right';
                }
            });
            this.list = list;
            this._data = list.filter(w => w.direction === 'right');
            this.notify();
            this.detectChanges();
        });
    }
    notify() {
        this.formProperty.setValue(this._data.map(i => i.value), false);
    }
    _change(options) {
        if (options.to === 'right') {
            this._data = this._data.concat(...options.list);
        }
        else {
            this._data = this._data.filter((w) => options.list.indexOf(w) === -1);
        }
        if (this.ui.change)
            this.ui.change(options);
        this.notify();
    }
    _searchChange(options) {
        if (this.ui.searchChange)
            this.ui.searchChange(options);
        this.detectChanges();
    }
    _selectChange(options) {
        if (this.ui.selectChange)
            this.ui.selectChange(options);
        this.detectChanges();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TransferWidget, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: TransferWidget, selector: "sf-transfer", usesInheritance: true, ngImport: i0, template: `<sf-item-wrap
    [id]="id"
    [schema]="schema"
    [ui]="ui"
    [showError]="showError"
    [error]="error"
    [showTitle]="schema.title"
  >
    <nz-transfer
      [nzDataSource]="$any(list)"
      [nzTitles]="i.titles"
      [nzOperations]="i.operations"
      [nzListStyle]="ui.listStyle!"
      [nzItemUnit]="i.itemUnit"
      [nzItemsUnit]="i.itemsUnit"
      [nzShowSearch]="ui.showSearch"
      [nzFilterOption]="ui.filterOption"
      [nzSearchPlaceholder]="ui.searchPlaceholder"
      [nzNotFoundContent]="ui.notFoundContent"
      [nzCanMove]="_canMove"
      (nzChange)="_change($event)"
      (nzSearchChange)="_searchChange($event)"
      (nzSelectChange)="_selectChange($event)"
    />
  </sf-item-wrap> `, isInline: true, dependencies: [{ kind: "component", type: i1.SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }, { kind: "component", type: i2.NzTransferComponent, selector: "nz-transfer", inputs: ["nzDisabled", "nzDataSource", "nzTitles", "nzOperations", "nzListStyle", "nzShowSelectAll", "nzItemUnit", "nzItemsUnit", "nzCanMove", "nzRenderList", "nzRender", "nzFooter", "nzShowSearch", "nzFilterOption", "nzSearchPlaceholder", "nzNotFoundContent", "nzTargetKeys", "nzSelectedKeys", "nzStatus"], outputs: ["nzChange", "nzSearchChange", "nzSelectChange"], exportAs: ["nzTransfer"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TransferWidget, decorators: [{
            type: Component,
            args: [{
                    selector: 'sf-transfer',
                    template: `<sf-item-wrap
    [id]="id"
    [schema]="schema"
    [ui]="ui"
    [showError]="showError"
    [error]="error"
    [showTitle]="schema.title"
  >
    <nz-transfer
      [nzDataSource]="$any(list)"
      [nzTitles]="i.titles"
      [nzOperations]="i.operations"
      [nzListStyle]="ui.listStyle!"
      [nzItemUnit]="i.itemUnit"
      [nzItemsUnit]="i.itemsUnit"
      [nzShowSearch]="ui.showSearch"
      [nzFilterOption]="ui.filterOption"
      [nzSearchPlaceholder]="ui.searchPlaceholder"
      [nzNotFoundContent]="ui.notFoundContent"
      [nzCanMove]="_canMove"
      (nzChange)="_change($event)"
      (nzSearchChange)="_searchChange($event)"
      (nzSelectChange)="_selectChange($event)"
    />
  </sf-item-wrap> `,
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None
                }]
        }] });

class TransferWidgetModule {
    constructor(widgetRegistry) {
        widgetRegistry.register(TransferWidget.KEY, TransferWidget);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TransferWidgetModule, deps: [{ token: i1.WidgetRegistry }], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: TransferWidgetModule, declarations: [TransferWidget], imports: [FormsModule, DelonFormModule, NzTransferModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TransferWidgetModule, imports: [FormsModule, DelonFormModule, NzTransferModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: TransferWidgetModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [FormsModule, DelonFormModule, NzTransferModule],
                    declarations: [TransferWidget]
                }]
        }], ctorParameters: function () { return [{ type: i1.WidgetRegistry }]; } });

/**
 * Generated bundle index. Do not edit.
 */

export { TransferWidget, TransferWidgetModule };
//# sourceMappingURL=widgets-transfer.mjs.map
