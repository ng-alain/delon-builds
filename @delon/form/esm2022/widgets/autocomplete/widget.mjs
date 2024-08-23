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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.1", ngImport: i0, type: AutoCompleteWidget, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.1", type: AutoCompleteWidget, isStandalone: true, selector: "sf-autocomplete", viewQueries: [{ propertyName: "ngModel", first: true, predicate: NgModel, descendants: true }], usesInheritance: true, ngImport: i0, template: `<sf-item-wrap
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.1", ngImport: i0, type: AutoCompleteWidget, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS93aWRnZXRzL2F1dG9jb21wbGV0ZS93aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEQsT0FBTyxFQUFjLEVBQUUsRUFBRSxZQUFZLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXpGLE9BQU8sRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUF5QixXQUFXLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwSCxPQUFPLEVBQUUsb0JBQW9CLEVBQWlDLE1BQU0sNkJBQTZCLENBQUM7QUFFbEcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7Ozs7QUErQ3BELE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxlQUEyQztJQTNDbkY7O1FBOENFLE1BQUMsR0FBYyxFQUFFLENBQUM7UUFFbEIsV0FBTSxHQUFXLEVBQUUsQ0FBQztRQUdaLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsWUFBTyxHQUFtQixFQUFFLENBQUM7S0EyRnRDO2FBbkdpQixRQUFHLEdBQUcsY0FBYyxBQUFqQixDQUFrQjtJQVVyQyxXQUFXLENBQUMsSUFBbUM7UUFDN0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBUSxDQUFDO1FBQzVCLE1BQU0sSUFBSSxHQUFpQixJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFB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RCxPQUFPO3NCQUFyRCxTQUFTO3VCQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBc3luY1BpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgTmdNb2RlbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCBkZWJvdW5jZVRpbWUsIG1hcCwgbWVyZ2VNYXAsIHN0YXJ0V2l0aCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IENvbnRyb2xVSVdpZGdldCwgRGVsb25Gb3JtTW9kdWxlLCBTRlNjaGVtYUVudW0sIFNGVmFsdWUsIGdldENvcHlFbnVtLCBnZXRFbnVtLCB0b0Jvb2wgfSBmcm9tICdAZGVsb24vZm9ybSc7XG5pbXBvcnQgeyBOekF1dG9jb21wbGV0ZU1vZHVsZSwgTnpBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL2F1dG8tY29tcGxldGUnO1xuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgTnpJbnB1dE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaW5wdXQnO1xuXG5pbXBvcnQgdHlwZSB7IFNGQXV0b0NvbXBsZXRlV2lkZ2V0U2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1hdXRvY29tcGxldGUnLFxuICB0ZW1wbGF0ZTogYDxzZi1pdGVtLXdyYXBcbiAgICBbaWRdPVwiaWRcIlxuICAgIFtzY2hlbWFdPVwic2NoZW1hXCJcbiAgICBbdWldPVwidWlcIlxuICAgIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCJcbiAgICBbZXJyb3JdPVwiZXJyb3JcIlxuICAgIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCJcbiAgPlxuICAgIDxpbnB1dFxuICAgICAgbnotaW5wdXRcbiAgICAgIFtuekF1dG9jb21wbGV0ZV09XCJhdXRvXCJcbiAgICAgIFthdHRyLmlkXT1cImlkXCJcbiAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICBbYXR0ci5kaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICBbbnpTaXplXT1cInVpLnNpemUhXCJcbiAgICAgIFtuZ01vZGVsXT1cInR5cGluZ1wiXG4gICAgICAobmdNb2RlbENoYW5nZSk9XCJfc2V0VmFsdWUoJGV2ZW50KVwiXG4gICAgICBbYXR0ci5tYXhMZW5ndGhdPVwic2NoZW1hLm1heExlbmd0aCB8fCBudWxsXCJcbiAgICAgIFthdHRyLnBsYWNlaG9sZGVyXT1cInVpLnBsYWNlaG9sZGVyXCJcbiAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgLz5cbiAgICA8bnotYXV0b2NvbXBsZXRlXG4gICAgICAjYXV0b1xuICAgICAgW256QmFja2ZpbGxdPVwiaS5iYWNrZmlsbFwiXG4gICAgICBbbnpEZWZhdWx0QWN0aXZlRmlyc3RPcHRpb25dPVwiaS5kZWZhdWx0QWN0aXZlRmlyc3RPcHRpb25cIlxuICAgICAgW256V2lkdGhdPVwiaS53aWR0aFwiXG4gICAgICBbbnpPdmVybGF5U3R5bGVdPVwidWkub3ZlcmxheVN0eWxlIHx8IHt9XCJcbiAgICAgIFtuek92ZXJsYXlDbGFzc05hbWVdPVwidWkub3ZlcmxheUNsYXNzTmFtZSB8fCAnJ1wiXG4gICAgICBbY29tcGFyZVdpdGhdPVwiaS5jb21wYXJlV2l0aFwiXG4gICAgICAoc2VsZWN0aW9uQ2hhbmdlKT1cInVwZGF0ZVZhbHVlKCRldmVudClcIlxuICAgID5cbiAgICAgIEBmb3IgKGkgb2YgbGlzdCB8IGFzeW5jOyB0cmFjayBpKSB7XG4gICAgICAgIDxuei1hdXRvLW9wdGlvbiBbbnpWYWx1ZV09XCJpXCIgW256TGFiZWxdPVwiaS5sYWJlbFwiPiB7eyBpLmxhYmVsIH19IDwvbnotYXV0by1vcHRpb24+XG4gICAgICB9XG4gICAgPC9uei1hdXRvY29tcGxldGU+XG4gIDwvc2YtaXRlbS13cmFwPmAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbQXN5bmNQaXBlLCBGb3Jtc01vZHVsZSwgRGVsb25Gb3JtTW9kdWxlLCBOeklucHV0TW9kdWxlLCBOekF1dG9jb21wbGV0ZU1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQXV0b0NvbXBsZXRlV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFVJV2lkZ2V0PFNGQXV0b0NvbXBsZXRlV2lkZ2V0U2NoZW1hPiB7XG4gIHN0YXRpYyByZWFkb25seSBLRVkgPSAnYXV0b2NvbXBsZXRlJztcblxuICBpOiBOelNhZmVBbnkgPSB7fTtcbiAgbGlzdCE6IE9ic2VydmFibGU8U0ZTY2hlbWFFbnVtW10+O1xuICB0eXBpbmc6IHN0cmluZyA9ICcnO1xuICBAVmlld0NoaWxkKE5nTW9kZWwsIHsgc3RhdGljOiBmYWxzZSB9KSBwcml2YXRlIG5nTW9kZWwhOiBOZ01vZGVsO1xuICBwcml2YXRlIGZpbHRlck9wdGlvbiE6IChpbnB1dDogc3RyaW5nLCBvcHRpb246IFNGU2NoZW1hRW51bSkgPT4gYm9vbGVhbjtcbiAgcHJpdmF0ZSBpc0FzeW5jID0gZmFsc2U7XG4gIHByaXZhdGUgZml4RGF0YTogU0ZTY2hlbWFFbnVtW10gPSBbXTtcblxuICB1cGRhdGVWYWx1ZShpdGVtOiBOekF1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudCk6IHZvaWQge1xuICAgIHRoaXMudHlwaW5nID0gaXRlbS5uekxhYmVsITtcbiAgICBjb25zdCBkYXRhOiBTRlNjaGVtYUVudW0gPSBpdGVtLm56VmFsdWU7XG4gICAgdGhpcy5zZXRWYWx1ZShkYXRhLnZhbHVlKTtcbiAgICBpZiAodGhpcy51aS5jaGFuZ2UpIHtcbiAgICAgIHRoaXMudWkuY2hhbmdlKGl0ZW0sIGRhdGEpO1xuICAgIH1cbiAgfVxuXG4gIF9zZXRWYWx1ZShpdGVtOiBTRlNjaGVtYUVudW0pOiB2b2lkIHtcbiAgICBsZXQgdmFsID0gaXRlbS50b1N0cmluZygpO1xuICAgIGlmICh0eXBlb2YgaXRlbSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHZhbCA9IGl0ZW0udmFsdWU7XG4gICAgfVxuICAgIHRoaXMuc2V0VmFsdWUodmFsKTtcbiAgfVxuXG4gIGFmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgY29uc3QgeyBiYWNrZmlsbCwgZGVmYXVsdEFjdGl2ZUZpcnN0T3B0aW9uLCBueldpZHRoLCBmaWx0ZXJPcHRpb24sIGFzeW5jRGF0YSwgY29tcGFyZVdpdGggfSA9IHRoaXMudWk7XG4gICAgdGhpcy5pID0ge1xuICAgICAgYmFja2ZpbGw6IHRvQm9vbChiYWNrZmlsbCwgZmFsc2UpLFxuICAgICAgZGVmYXVsdEFjdGl2ZUZpcnN0T3B0aW9uOiB0b0Jvb2woZGVmYXVsdEFjdGl2ZUZpcnN0T3B0aW9uLCB0cnVlKSxcbiAgICAgIHdpZHRoOiBueldpZHRoIHx8IHVuZGVmaW5lZCxcbiAgICAgIGNvbXBhcmVXaXRoOiBjb21wYXJlV2l0aCB8fCAoKG8xLCBvMikgPT4gbzEgPT09IG8yKVxuICAgIH07XG5cbiAgICBsZXQgZmlsdGVyT3B0aW9uVmFsdWUgPSBmaWx0ZXJPcHRpb24gPT0gbnVsbCA/IHRydWUgOiBmaWx0ZXJPcHRpb247XG4gICAgaWYgKHR5cGVvZiBmaWx0ZXJPcHRpb25WYWx1ZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICBmaWx0ZXJPcHRpb25WYWx1ZSA9IChpbnB1dDogc3RyaW5nLCBvcHRpb246IFNGU2NoZW1hRW51bSkgPT5cbiAgICAgICAgb3B0aW9uLmxhYmVsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZigoaW5wdXQgfHwgJycpLnRvTG93ZXJDYXNlKCkpID4gLTE7XG4gICAgfVxuICAgIHRoaXMuZmlsdGVyT3B0aW9uID0gZmlsdGVyT3B0aW9uVmFsdWU7XG5cbiAgICB0aGlzLmlzQXN5bmMgPSAhIWFzeW5jRGF0YTtcbiAgICBjb25zdCBvcmdUaW1lID0gKyh0aGlzLnVpLmRlYm91bmNlVGltZSB8fCAwKTtcbiAgICBjb25zdCB0aW1lID0gTWF0aC5tYXgoMCwgdGhpcy5pc0FzeW5jID8gTWF0aC5tYXgoNTAsIG9yZ1RpbWUpIDogb3JnVGltZSk7XG5cbiAgICB0aGlzLmxpc3QgPSB0aGlzLm5nTW9kZWwudmFsdWVDaGFuZ2VzIS5waXBlKFxuICAgICAgZGVib3VuY2VUaW1lKHRpbWUpLFxuICAgICAgc3RhcnRXaXRoKCcnKSxcbiAgICAgIG1lcmdlTWFwKGlucHV0ID0+ICh0aGlzLmlzQXN5bmMgPyBhc3luY0RhdGEhKGlucHV0KSA6IHRoaXMuZmlsdGVyRGF0YShpbnB1dCkpKSxcbiAgICAgIG1hcChyZXMgPT4gZ2V0RW51bShyZXMsIG51bGwsIHRoaXMuc2NoZW1hLnJlYWRPbmx5ISkpXG4gICAgKTtcbiAgfVxuXG4gIHJlc2V0KHZhbHVlOiBTRlZhbHVlKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNBc3luYykge1xuICAgICAgdGhpcy51aS5hc3luY0RhdGEhKHZhbHVlKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICB0YWtlVW50aWwodGhpcy5zZkl0ZW1Db21wIS5kZXN0cm95JCksXG4gICAgICAgICAgbWFwKHJlcyA9PiBnZXRFbnVtKHJlcywgbnVsbCwgdGhpcy5zY2hlbWEucmVhZE9ubHkhKSlcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICAgIHRoaXMudHlwaW5nID0gZGF0YS5maW5kKHcgPT4gdy52YWx1ZSA9PT0gdGhpcy52YWx1ZSk/LmxhYmVsID8/ICcnO1xuICAgICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnR5cGluZyA9IHZhbHVlO1xuICAgIHN3aXRjaCAodGhpcy51aS50eXBlKSB7XG4gICAgICBjYXNlICdlbWFpbCc6XG4gICAgICAgIHRoaXMuZml4RGF0YSA9IGdldENvcHlFbnVtKFxuICAgICAgICAgIHRoaXMuc2NoZW1hLmVudW0hIHx8IHRoaXMuZm9ybVByb3BlcnR5Lm9wdGlvbnMudWlFbWFpbFN1ZmZpeGVzLFxuICAgICAgICAgIG51bGwsXG4gICAgICAgICAgdGhpcy5zY2hlbWEucmVhZE9ubHkhXG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5maXhEYXRhID0gZ2V0Q29weUVudW0odGhpcy5zY2hlbWEuZW51bSEsIHZhbHVlLCB0aGlzLnNjaGVtYS5yZWFkT25seSEpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGZpbHRlckRhdGEoaW5wdXQ6IHN0cmluZyk6IE9ic2VydmFibGU8U0ZTY2hlbWFFbnVtW10+IHwgT2JzZXJ2YWJsZTxzdHJpbmdbXT4ge1xuICAgIHN3aXRjaCAodGhpcy51aS50eXBlKSB7XG4gICAgICBjYXNlICdlbWFpbCc6XG4gICAgICAgIHJldHVybiB0aGlzLmFkZEVtYWlsU3VmZml4KGlucHV0KTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBvZih0aGlzLmZpeERhdGEuZmlsdGVyKG9wdGlvbiA9PiB0aGlzLmZpbHRlck9wdGlvbihpbnB1dCwgb3B0aW9uKSkpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYWRkRW1haWxTdWZmaXgodmFsdWU6IHN0cmluZyk6IE9ic2VydmFibGU8c3RyaW5nW10+IHtcbiAgICBjb25zdCByZXMgPVxuICAgICAgIXZhbHVlIHx8IHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycgfHwgdmFsdWU/LmluZGV4T2YoJ0AnKSAhPT0gLTFcbiAgICAgICAgPyBbXVxuICAgICAgICA6IHRoaXMuZml4RGF0YS5tYXAoZG9tYWluID0+IGAke3ZhbHVlfUAke2RvbWFpbi5sYWJlbH1gKTtcbiAgICByZXR1cm4gb2YocmVzKTtcbiAgfVxufVxuIl19