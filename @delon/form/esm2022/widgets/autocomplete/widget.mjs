import { AsyncPipe } from '@angular/common';
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { of, debounceTime, map, mergeMap, startWith, takeUntil } from 'rxjs';
import { ControlUIWidget, DelonFormModule, getCopyEnum, getEnum, toBool } from '@delon/form';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzInputModule } from 'ng-zorro-antd/input';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@delon/form";
import * as i3 from "ng-zorro-antd/input";
import * as i4 from "ng-zorro-antd/auto-complete";
export class AutoCompleteWidget extends ControlUIWidget {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS93aWRnZXRzL2F1dG9jb21wbGV0ZS93aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEQsT0FBTyxFQUFjLEVBQUUsRUFBRSxZQUFZLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXpGLE9BQU8sRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUF5QixXQUFXLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwSCxPQUFPLEVBQUUsb0JBQW9CLEVBQWlDLE1BQU0sNkJBQTZCLENBQUM7QUFFbEcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7Ozs7QUErQ3BELE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxlQUEyQztJQTNDbkY7O1FBOENFLE1BQUMsR0FBYyxFQUFFLENBQUM7UUFFbEIsV0FBTSxHQUFXLEVBQUUsQ0FBQztRQUdaLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsWUFBTyxHQUFtQixFQUFFLENBQUM7S0EyRnRDO2FBbkdpQixRQUFHLEdBQUcsY0FBYyxBQUFqQixDQUFrQjtJQVVyQyxXQUFXLENBQUMsSUFBbUM7UUFDN0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBUSxDQUFDO1FBQzVCLE1BQU0sSUFBSSxHQUFpQixJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFB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LCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBc3luY1BpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgTmdNb2RlbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCBkZWJvdW5jZVRpbWUsIG1hcCwgbWVyZ2VNYXAsIHN0YXJ0V2l0aCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IENvbnRyb2xVSVdpZGdldCwgRGVsb25Gb3JtTW9kdWxlLCBTRlNjaGVtYUVudW0sIFNGVmFsdWUsIGdldENvcHlFbnVtLCBnZXRFbnVtLCB0b0Jvb2wgfSBmcm9tICdAZGVsb24vZm9ybSc7XG5pbXBvcnQgeyBOekF1dG9jb21wbGV0ZU1vZHVsZSwgTnpBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL2F1dG8tY29tcGxldGUnO1xuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgTnpJbnB1dE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaW5wdXQnO1xuXG5pbXBvcnQgdHlwZSB7IFNGQXV0b0NvbXBsZXRlV2lkZ2V0U2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1hdXRvY29tcGxldGUnLFxuICB0ZW1wbGF0ZTogYDxzZi1pdGVtLXdyYXBcbiAgICBbaWRdPVwiaWRcIlxuICAgIFtzY2hlbWFdPVwic2NoZW1hXCJcbiAgICBbdWldPVwidWlcIlxuICAgIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCJcbiAgICBbZXJyb3JdPVwiZXJyb3JcIlxuICAgIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCJcbiAgPlxuICAgIDxpbnB1dFxuICAgICAgbnotaW5wdXRcbiAgICAgIFtuekF1dG9jb21wbGV0ZV09XCJhdXRvXCJcbiAgICAgIFthdHRyLmlkXT1cImlkXCJcbiAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICBbYXR0ci5kaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICBbbnpTaXplXT1cInVpLnNpemUhXCJcbiAgICAgIFtuZ01vZGVsXT1cInR5cGluZ1wiXG4gICAgICAobmdNb2RlbENoYW5nZSk9XCJfc2V0VmFsdWUoJGV2ZW50KVwiXG4gICAgICBbYXR0ci5tYXhMZW5ndGhdPVwic2NoZW1hLm1heExlbmd0aCB8fCBudWxsXCJcbiAgICAgIFthdHRyLnBsYWNlaG9sZGVyXT1cInVpLnBsYWNlaG9sZGVyXCJcbiAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgLz5cbiAgICA8bnotYXV0b2NvbXBsZXRlXG4gICAgICAjYXV0b1xuICAgICAgW256QmFja2ZpbGxdPVwiaS5iYWNrZmlsbFwiXG4gICAgICBbbnpEZWZhdWx0QWN0aXZlRmlyc3RPcHRpb25dPVwiaS5kZWZhdWx0QWN0aXZlRmlyc3RPcHRpb25cIlxuICAgICAgW256V2lkdGhdPVwiaS53aWR0aFwiXG4gICAgICBbbnpPdmVybGF5U3R5bGVdPVwidWkub3ZlcmxheVN0eWxlIHx8IHt9XCJcbiAgICAgIFtuek92ZXJsYXlDbGFzc05hbWVdPVwidWkub3ZlcmxheUNsYXNzTmFtZSB8fCAnJ1wiXG4gICAgICBbY29tcGFyZVdpdGhdPVwiaS5jb21wYXJlV2l0aFwiXG4gICAgICAoc2VsZWN0aW9uQ2hhbmdlKT1cInVwZGF0ZVZhbHVlKCRldmVudClcIlxuICAgID5cbiAgICAgIEBmb3IgKGkgb2YgbGlzdCB8IGFzeW5jOyB0cmFjayBpKSB7XG4gICAgICA8bnotYXV0by1vcHRpb24gW256VmFsdWVdPVwiaVwiIFtuekxhYmVsXT1cImkubGFiZWxcIj4ge3sgaS5sYWJlbCB9fSA8L256LWF1dG8tb3B0aW9uPlxuICAgICAgfVxuICAgIDwvbnotYXV0b2NvbXBsZXRlPlxuICA8L3NmLWl0ZW0td3JhcD5gLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0FzeW5jUGlwZSwgRm9ybXNNb2R1bGUsIERlbG9uRm9ybU1vZHVsZSwgTnpJbnB1dE1vZHVsZSwgTnpBdXRvY29tcGxldGVNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEF1dG9Db21wbGV0ZVdpZGdldCBleHRlbmRzIENvbnRyb2xVSVdpZGdldDxTRkF1dG9Db21wbGV0ZVdpZGdldFNjaGVtYT4ge1xuICBzdGF0aWMgcmVhZG9ubHkgS0VZID0gJ2F1dG9jb21wbGV0ZSc7XG5cbiAgaTogTnpTYWZlQW55ID0ge307XG4gIGxpc3QhOiBPYnNlcnZhYmxlPFNGU2NoZW1hRW51bVtdPjtcbiAgdHlwaW5nOiBzdHJpbmcgPSAnJztcbiAgQFZpZXdDaGlsZChOZ01vZGVsLCB7IHN0YXRpYzogZmFsc2UgfSkgcHJpdmF0ZSBuZ01vZGVsITogTmdNb2RlbDtcbiAgcHJpdmF0ZSBmaWx0ZXJPcHRpb24hOiAoaW5wdXQ6IHN0cmluZywgb3B0aW9uOiBTRlNjaGVtYUVudW0pID0+IGJvb2xlYW47XG4gIHByaXZhdGUgaXNBc3luYyA9IGZhbHNlO1xuICBwcml2YXRlIGZpeERhdGE6IFNGU2NoZW1hRW51bVtdID0gW107XG5cbiAgdXBkYXRlVmFsdWUoaXRlbTogTnpBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQpOiB2b2lkIHtcbiAgICB0aGlzLnR5cGluZyA9IGl0ZW0ubnpMYWJlbCE7XG4gICAgY29uc3QgZGF0YTogU0ZTY2hlbWFFbnVtID0gaXRlbS5uelZhbHVlO1xuICAgIHRoaXMuc2V0VmFsdWUoZGF0YS52YWx1ZSk7XG4gICAgaWYgKHRoaXMudWkuY2hhbmdlKSB7XG4gICAgICB0aGlzLnVpLmNoYW5nZShpdGVtLCBkYXRhKTtcbiAgICB9XG4gIH1cblxuICBfc2V0VmFsdWUoaXRlbTogU0ZTY2hlbWFFbnVtKTogdm9pZCB7XG4gICAgbGV0IHZhbCA9IGl0ZW0udG9TdHJpbmcoKTtcbiAgICBpZiAodHlwZW9mIGl0ZW0gIT09ICdzdHJpbmcnKSB7XG4gICAgICB2YWwgPSBpdGVtLnZhbHVlO1xuICAgIH1cbiAgICB0aGlzLnNldFZhbHVlKHZhbCk7XG4gIH1cblxuICBhZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgYmFja2ZpbGwsIGRlZmF1bHRBY3RpdmVGaXJzdE9wdGlvbiwgbnpXaWR0aCwgZmlsdGVyT3B0aW9uLCBhc3luY0RhdGEsIGNvbXBhcmVXaXRoIH0gPSB0aGlzLnVpO1xuICAgIHRoaXMuaSA9IHtcbiAgICAgIGJhY2tmaWxsOiB0b0Jvb2woYmFja2ZpbGwsIGZhbHNlKSxcbiAgICAgIGRlZmF1bHRBY3RpdmVGaXJzdE9wdGlvbjogdG9Cb29sKGRlZmF1bHRBY3RpdmVGaXJzdE9wdGlvbiwgdHJ1ZSksXG4gICAgICB3aWR0aDogbnpXaWR0aCB8fCB1bmRlZmluZWQsXG4gICAgICBjb21wYXJlV2l0aDogY29tcGFyZVdpdGggfHwgKChvMSwgbzIpID0+IG8xID09PSBvMilcbiAgICB9O1xuXG4gICAgbGV0IGZpbHRlck9wdGlvblZhbHVlID0gZmlsdGVyT3B0aW9uID09IG51bGwgPyB0cnVlIDogZmlsdGVyT3B0aW9uO1xuICAgIGlmICh0eXBlb2YgZmlsdGVyT3B0aW9uVmFsdWUgPT09ICdib29sZWFuJykge1xuICAgICAgZmlsdGVyT3B0aW9uVmFsdWUgPSAoaW5wdXQ6IHN0cmluZywgb3B0aW9uOiBTRlNjaGVtYUVudW0pID0+XG4gICAgICAgIG9wdGlvbi5sYWJlbC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoKGlucHV0IHx8ICcnKS50b0xvd2VyQ2FzZSgpKSA+IC0xO1xuICAgIH1cbiAgICB0aGlzLmZpbHRlck9wdGlvbiA9IGZpbHRlck9wdGlvblZhbHVlO1xuXG4gICAgdGhpcy5pc0FzeW5jID0gISFhc3luY0RhdGE7XG4gICAgY29uc3Qgb3JnVGltZSA9ICsodGhpcy51aS5kZWJvdW5jZVRpbWUgfHwgMCk7XG4gICAgY29uc3QgdGltZSA9IE1hdGgubWF4KDAsIHRoaXMuaXNBc3luYyA/IE1hdGgubWF4KDUwLCBvcmdUaW1lKSA6IG9yZ1RpbWUpO1xuXG4gICAgdGhpcy5saXN0ID0gdGhpcy5uZ01vZGVsLnZhbHVlQ2hhbmdlcyEucGlwZShcbiAgICAgIGRlYm91bmNlVGltZSh0aW1lKSxcbiAgICAgIHN0YXJ0V2l0aCgnJyksXG4gICAgICBtZXJnZU1hcChpbnB1dCA9PiAodGhpcy5pc0FzeW5jID8gYXN5bmNEYXRhIShpbnB1dCkgOiB0aGlzLmZpbHRlckRhdGEoaW5wdXQpKSksXG4gICAgICBtYXAocmVzID0+IGdldEVudW0ocmVzLCBudWxsLCB0aGlzLnNjaGVtYS5yZWFkT25seSEpKVxuICAgICk7XG4gIH1cblxuICByZXNldCh2YWx1ZTogU0ZWYWx1ZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzQXN5bmMpIHtcbiAgICAgIHRoaXMudWkuYXN5bmNEYXRhISh2YWx1ZSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgdGFrZVVudGlsKHRoaXMuc2ZJdGVtQ29tcCEuZGVzdHJveSQpLFxuICAgICAgICAgIG1hcChyZXMgPT4gZ2V0RW51bShyZXMsIG51bGwsIHRoaXMuc2NoZW1hLnJlYWRPbmx5ISkpXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgICB0aGlzLnR5cGluZyA9IGRhdGEuZmluZCh3ID0+IHcudmFsdWUgPT09IHRoaXMudmFsdWUpPy5sYWJlbCA/PyAnJztcbiAgICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy50eXBpbmcgPSB2YWx1ZTtcbiAgICBzd2l0Y2ggKHRoaXMudWkudHlwZSkge1xuICAgICAgY2FzZSAnZW1haWwnOlxuICAgICAgICB0aGlzLmZpeERhdGEgPSBnZXRDb3B5RW51bShcbiAgICAgICAgICB0aGlzLnNjaGVtYS5lbnVtISB8fCB0aGlzLmZvcm1Qcm9wZXJ0eS5vcHRpb25zLnVpRW1haWxTdWZmaXhlcyxcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIHRoaXMuc2NoZW1hLnJlYWRPbmx5IVxuICAgICAgICApO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMuZml4RGF0YSA9IGdldENvcHlFbnVtKHRoaXMuc2NoZW1hLmVudW0hLCB2YWx1ZSwgdGhpcy5zY2hlbWEucmVhZE9ubHkhKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBmaWx0ZXJEYXRhKGlucHV0OiBzdHJpbmcpOiBPYnNlcnZhYmxlPFNGU2NoZW1hRW51bVtdPiB8IE9ic2VydmFibGU8c3RyaW5nW10+IHtcbiAgICBzd2l0Y2ggKHRoaXMudWkudHlwZSkge1xuICAgICAgY2FzZSAnZW1haWwnOlxuICAgICAgICByZXR1cm4gdGhpcy5hZGRFbWFpbFN1ZmZpeChpbnB1dCk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gb2YodGhpcy5maXhEYXRhLmZpbHRlcihvcHRpb24gPT4gdGhpcy5maWx0ZXJPcHRpb24oaW5wdXQsIG9wdGlvbikpKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFkZEVtYWlsU3VmZml4KHZhbHVlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHN0cmluZ1tdPiB7XG4gICAgY29uc3QgcmVzID1cbiAgICAgICF2YWx1ZSB8fCB0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnIHx8IHZhbHVlPy5pbmRleE9mKCdAJykgIT09IC0xXG4gICAgICAgID8gW11cbiAgICAgICAgOiB0aGlzLmZpeERhdGEubWFwKGRvbWFpbiA9PiBgJHt2YWx1ZX1AJHtkb21haW4ubGFiZWx9YCk7XG4gICAgcmV0dXJuIG9mKHJlcyk7XG4gIH1cbn1cbiJdfQ==