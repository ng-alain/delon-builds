import { AsyncPipe } from '@angular/common';
import * as i0 from '@angular/core';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import * as i1 from '@angular/forms';
import { NgModel, FormsModule } from '@angular/forms';
import { debounceTime, startWith, mergeMap, map, takeUntil, of } from 'rxjs';
import * as i2 from '@delon/form';
import { ControlUIWidget, toBool, getEnum, getCopyEnum, DelonFormModule } from '@delon/form';
import * as i4 from 'ng-zorro-antd/auto-complete';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import * as i3 from 'ng-zorro-antd/input';
import { NzInputModule } from 'ng-zorro-antd/input';

class AutoCompleteWidget extends ControlUIWidget {
    constructor() {
        super(...arguments);
        this.i = {};
        this.typing = '';
        this.isAsync = false;
        this.fixData = [];
    }
    static { this.KEY = 'autocomplete'; }
    updateValue(item) {
        this.typing = item.nzLabel;
        const data = item.nzValue;
        this.setValue(data.value);
        if (this.ui.change) {
            this.ui.change(item, data);
        }
    }
    _setValue(item) {
        let val = item.toString();
        if (typeof item !== 'string') {
            val = item.value;
        }
        this.setValue(val);
    }
    afterViewInit() {
        const { backfill, defaultActiveFirstOption, nzWidth, filterOption, asyncData, compareWith } = this.ui;
        this.i = {
            backfill: toBool(backfill, false),
            defaultActiveFirstOption: toBool(defaultActiveFirstOption, true),
            width: nzWidth || undefined,
            compareWith: compareWith || ((o1, o2) => o1 === o2)
        };
        let filterOptionValue = filterOption == null ? true : filterOption;
        if (typeof filterOptionValue === 'boolean') {
            filterOptionValue = (input, option) => option.label.toLowerCase().indexOf((input || '').toLowerCase()) > -1;
        }
        this.filterOption = filterOptionValue;
        this.isAsync = !!asyncData;
        const orgTime = +(this.ui.debounceTime || 0);
        const time = Math.max(0, this.isAsync ? Math.max(50, orgTime) : orgTime);
        this.list = this.ngModel.valueChanges.pipe(debounceTime(time), startWith(''), mergeMap(input => (this.isAsync ? asyncData(input) : this.filterData(input))), map(res => getEnum(res, null, this.schema.readOnly)));
    }
    reset(value) {
        if (this.isAsync) {
            this.ui.asyncData(value)
                .pipe(takeUntil(this.sfItemComp.destroy$), map(res => getEnum(res, null, this.schema.readOnly)))
                .subscribe(data => {
                this.typing = data.find(w => w.value === this.value)?.label ?? '';
            });
            return;
        }
        this.typing = value;
        switch (this.ui.type) {
            case 'email':
                this.fixData = getCopyEnum(this.schema.enum || this.formProperty.options.uiEmailSuffixes, null, this.schema.readOnly);
                break;
            default:
                this.fixData = getCopyEnum(this.schema.enum, value, this.schema.readOnly);
                break;
        }
    }
    filterData(input) {
        switch (this.ui.type) {
            case 'email':
                return this.addEmailSuffix(input);
            default:
                return of(this.fixData.filter(option => this.filterOption(input, option)));
        }
    }
    addEmailSuffix(value) {
        const res = !value || typeof value !== 'string' || value?.indexOf('@') !== -1
            ? []
            : this.fixData.map(domain => `${value}@${domain.label}`);
        return of(res);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: AutoCompleteWidget, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.2", type: AutoCompleteWidget, isStandalone: true, selector: "sf-autocomplete", viewQueries: [{ propertyName: "ngModel", first: true, predicate: NgModel, descendants: true }], usesInheritance: true, ngImport: i0, template: `<sf-item-wrap
    [id]="id"
    [schema]="schema"
    [ui]="ui"
    [showError]="showError"
    [error]="error"
    [showTitle]="schema.title"
  >
    <input
      nz-input
      [nzAutocomplete]="auto"
      [attr.id]="id"
      [disabled]="disabled"
      [attr.disabled]="disabled"
      [nzSize]="ui.size!"
      [ngModel]="typing"
      (ngModelChange)="_setValue($event)"
      [attr.maxLength]="schema.maxLength || null"
      [attr.placeholder]="ui.placeholder"
      autocomplete="off"
    />
    <nz-autocomplete
      #auto
      [nzBackfill]="i.backfill"
      [nzDefaultActiveFirstOption]="i.defaultActiveFirstOption"
      [nzWidth]="i.width"
      [nzOverlayStyle]="ui.overlayStyle || {}"
      [nzOverlayClassName]="ui.overlayClassName || ''"
      [compareWith]="i.compareWith"
      (selectionChange)="updateValue($event)"
    >
      @for (i of list | async; track i) {
      <nz-auto-option [nzValue]="i" [nzLabel]="i.label"> {{ i.label }} </nz-auto-option>
      }
    </nz-autocomplete>
  </sf-item-wrap>`, isInline: true, dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: DelonFormModule }, { kind: "component", type: i2.SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }, { kind: "ngmodule", type: NzInputModule }, { kind: "directive", type: i3.NzInputDirective, selector: "input[nz-input],textarea[nz-input]", inputs: ["nzBorderless", "nzSize", "nzStepperless", "nzStatus", "disabled"], exportAs: ["nzInput"] }, { kind: "ngmodule", type: NzAutocompleteModule }, { kind: "component", type: i4.NzAutocompleteComponent, selector: "nz-autocomplete", inputs: ["nzWidth", "nzOverlayClassName", "nzOverlayStyle", "nzDefaultActiveFirstOption", "nzBackfill", "compareWith", "nzDataSource"], outputs: ["selectionChange"], exportAs: ["nzAutocomplete"] }, { kind: "component", type: i4.NzAutocompleteOptionComponent, selector: "nz-auto-option", inputs: ["nzValue", "nzLabel", "nzDisabled"], outputs: ["selectionChange", "mouseEntered"], exportAs: ["nzAutoOption"] }, { kind: "directive", type: i4.NzAutocompleteTriggerDirective, selector: "input[nzAutocomplete], textarea[nzAutocomplete]", inputs: ["nzAutocomplete"], exportAs: ["nzAutocompleteTrigger"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: AutoCompleteWidget, decorators: [{
            type: Component,
            args: [{
                    selector: 'sf-autocomplete',
                    template: `<sf-item-wrap
    [id]="id"
    [schema]="schema"
    [ui]="ui"
    [showError]="showError"
    [error]="error"
    [showTitle]="schema.title"
  >
    <input
      nz-input
      [nzAutocomplete]="auto"
      [attr.id]="id"
      [disabled]="disabled"
      [attr.disabled]="disabled"
      [nzSize]="ui.size!"
      [ngModel]="typing"
      (ngModelChange)="_setValue($event)"
      [attr.maxLength]="schema.maxLength || null"
      [attr.placeholder]="ui.placeholder"
      autocomplete="off"
    />
    <nz-autocomplete
      #auto
      [nzBackfill]="i.backfill"
      [nzDefaultActiveFirstOption]="i.defaultActiveFirstOption"
      [nzWidth]="i.width"
      [nzOverlayStyle]="ui.overlayStyle || {}"
      [nzOverlayClassName]="ui.overlayClassName || ''"
      [compareWith]="i.compareWith"
      (selectionChange)="updateValue($event)"
    >
      @for (i of list | async; track i) {
      <nz-auto-option [nzValue]="i" [nzLabel]="i.label"> {{ i.label }} </nz-auto-option>
      }
    </nz-autocomplete>
  </sf-item-wrap>`,
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    standalone: true,
                    imports: [AsyncPipe, FormsModule, DelonFormModule, NzInputModule, NzAutocompleteModule]
                }]
        }], propDecorators: { ngModel: [{
                type: ViewChild,
                args: [NgModel, { static: false }]
            }] } });

function withAutoCompleteWidget() {
    return { KEY: AutoCompleteWidget.KEY, type: AutoCompleteWidget };
}

/**
 * Generated bundle index. Do not edit.
 */

export { AutoCompleteWidget, withAutoCompleteWidget };
//# sourceMappingURL=widgets-auto-complete.mjs.map
