import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgModel } from '@angular/forms';
import { of, debounceTime, map, mergeMap, startWith, takeUntil } from 'rxjs';
import { getCopyEnum, getEnum, toBool } from '../../utils';
import { ControlUIWidget } from '../../widget';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "ng-zorro-antd/auto-complete";
import * as i4 from "ng-zorro-antd/input";
import * as i5 from "../../sf-item-wrap.component";
class AutoCompleteWidget extends ControlUIWidget {
    constructor() {
        super(...arguments);
        this.i = {};
        this.typing = '';
        this.isAsync = false;
        this.fixData = [];
    }
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
        return of(!value || ~value.indexOf('@') ? [] : this.fixData.map(domain => `${value}@${domain.label}`));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.3", ngImport: i0, type: AutoCompleteWidget, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.3", type: AutoCompleteWidget, selector: "sf-autocomplete", viewQueries: [{ propertyName: "ngModel", first: true, predicate: NgModel, descendants: true }], usesInheritance: true, ngImport: i0, template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <input\n    nz-input\n    [nzAutocomplete]=\"auto\"\n    [attr.id]=\"id\"\n    [disabled]=\"disabled\"\n    [attr.disabled]=\"disabled\"\n    [nzSize]=\"ui.size!\"\n    [(ngModel)]=\"typing\"\n    (ngModelChange)=\"_setValue($event)\"\n    [attr.maxLength]=\"schema.maxLength || null\"\n    [attr.placeholder]=\"ui.placeholder\"\n    autocomplete=\"off\"\n  />\n  <nz-autocomplete\n    #auto\n    [nzBackfill]=\"i.backfill\"\n    [nzDefaultActiveFirstOption]=\"i.defaultActiveFirstOption\"\n    [nzWidth]=\"i.width\"\n    [nzOverlayStyle]=\"ui.overlayStyle || {}\"\n    [nzOverlayClassName]=\"ui.overlayClassName || ''\"\n    [compareWith]=\"i.compareWith\"\n    (selectionChange)=\"updateValue($event)\"\n  >\n    <nz-auto-option *ngFor=\"let i of list | async\" [nzValue]=\"i\" [nzLabel]=\"i.label\"> {{ i.label }} </nz-auto-option>\n  </nz-autocomplete>\n</sf-item-wrap>\n", dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: i3.NzAutocompleteComponent, selector: "nz-autocomplete", inputs: ["nzWidth", "nzOverlayClassName", "nzOverlayStyle", "nzDefaultActiveFirstOption", "nzBackfill", "compareWith", "nzDataSource"], outputs: ["selectionChange"], exportAs: ["nzAutocomplete"] }, { kind: "component", type: i3.NzAutocompleteOptionComponent, selector: "nz-auto-option", inputs: ["nzValue", "nzLabel", "nzDisabled"], outputs: ["selectionChange", "mouseEntered"], exportAs: ["nzAutoOption"] }, { kind: "directive", type: i3.NzAutocompleteTriggerDirective, selector: "input[nzAutocomplete], textarea[nzAutocomplete]", inputs: ["nzAutocomplete"], exportAs: ["nzAutocompleteTrigger"] }, { kind: "directive", type: i4.NzInputDirective, selector: "input[nz-input],textarea[nz-input]", inputs: ["nzBorderless", "nzSize", "nzStatus", "disabled"], exportAs: ["nzInput"] }, { kind: "component", type: i5.SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }, { kind: "pipe", type: i1.AsyncPipe, name: "async" }], encapsulation: i0.ViewEncapsulation.None }); }
}
export { AutoCompleteWidget };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.3", ngImport: i0, type: AutoCompleteWidget, decorators: [{
            type: Component,
            args: [{ selector: 'sf-autocomplete', preserveWhitespaces: false, encapsulation: ViewEncapsulation.None, template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <input\n    nz-input\n    [nzAutocomplete]=\"auto\"\n    [attr.id]=\"id\"\n    [disabled]=\"disabled\"\n    [attr.disabled]=\"disabled\"\n    [nzSize]=\"ui.size!\"\n    [(ngModel)]=\"typing\"\n    (ngModelChange)=\"_setValue($event)\"\n    [attr.maxLength]=\"schema.maxLength || null\"\n    [attr.placeholder]=\"ui.placeholder\"\n    autocomplete=\"off\"\n  />\n  <nz-autocomplete\n    #auto\n    [nzBackfill]=\"i.backfill\"\n    [nzDefaultActiveFirstOption]=\"i.defaultActiveFirstOption\"\n    [nzWidth]=\"i.width\"\n    [nzOverlayStyle]=\"ui.overlayStyle || {}\"\n    [nzOverlayClassName]=\"ui.overlayClassName || ''\"\n    [compareWith]=\"i.compareWith\"\n    (selectionChange)=\"updateValue($event)\"\n  >\n    <nz-auto-option *ngFor=\"let i of list | async\" [nzValue]=\"i\" [nzLabel]=\"i.label\"> {{ i.label }} </nz-auto-option>\n  </nz-autocomplete>\n</sf-item-wrap>\n" }]
        }], propDecorators: { ngModel: [{
                type: ViewChild,
                args: [NgModel, { static: false }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm0vc3JjL3dpZGdldHMvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS53aWRnZXQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3NyYy93aWRnZXRzL2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUud2lkZ2V0Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pDLE9BQU8sRUFBYyxFQUFFLEVBQUUsWUFBWSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQU96RixPQUFPLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDM0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7Ozs7OztBQUcvQyxNQU1hLGtCQUFtQixTQUFRLGVBQTJDO0lBTm5GOztRQU9FLE1BQUMsR0FBYyxFQUFFLENBQUM7UUFFbEIsV0FBTSxHQUFXLEVBQUUsQ0FBQztRQUdaLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsWUFBTyxHQUFtQixFQUFFLENBQUM7S0F1RnRDO0lBckZDLFdBQVcsQ0FBQyxJQUFtQztRQUM3QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFRLENBQUM7UUFDNUIsTUFBTSxJQUFJLEdBQWlCLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDeEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUIsSUFBSSxJQUFJLENBQUMs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Q0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM5RTtJQUNILENBQUM7SUFFTyxjQUFjLENBQUMsS0FBYTtRQUNsQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3pHLENBQUM7OEdBN0ZVLGtCQUFrQjtrR0FBbEIsa0JBQWtCLGdHQUlsQixPQUFPLHVFQ3ZCcEIsby9CQTJCQTs7U0RSYSxrQkFBa0I7MkZBQWxCLGtCQUFrQjtrQkFOOUIsU0FBUzsrQkFDRSxpQkFBaUIsdUJBRU4sS0FBSyxpQkFDWCxpQkFBaUIsQ0FBQyxJQUFJOzhCQU1VLE9BQU87c0JBQXJELFNBQVM7dUJBQUMsT0FBTyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdNb2RlbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mLCBkZWJvdW5jZVRpbWUsIG1hcCwgbWVyZ2VNYXAsIHN0YXJ0V2l0aCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IE56QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC9hdXRvLWNvbXBsZXRlJztcbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuaW1wb3J0IHsgU0ZWYWx1ZSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBTRlNjaGVtYUVudW0gfSBmcm9tICcuLi8uLi9zY2hlbWEnO1xuaW1wb3J0IHsgZ2V0Q29weUVudW0sIGdldEVudW0sIHRvQm9vbCB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IENvbnRyb2xVSVdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5pbXBvcnQgeyBTRkF1dG9Db21wbGV0ZVdpZGdldFNjaGVtYSB9IGZyb20gJy4vc2NoZW1hJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtYXV0b2NvbXBsZXRlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2F1dG9jb21wbGV0ZS53aWRnZXQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEF1dG9Db21wbGV0ZVdpZGdldCBleHRlbmRzIENvbnRyb2xVSVdpZGdldDxTRkF1dG9Db21wbGV0ZVdpZGdldFNjaGVtYT4ge1xuICBpOiBOelNhZmVBbnkgPSB7fTtcbiAgbGlzdCE6IE9ic2VydmFibGU8U0ZTY2hlbWFFbnVtW10+O1xuICB0eXBpbmc6IHN0cmluZyA9ICcnO1xuICBAVmlld0NoaWxkKE5nTW9kZWwsIHsgc3RhdGljOiBmYWxzZSB9KSBwcml2YXRlIG5nTW9kZWwhOiBOZ01vZGVsO1xuICBwcml2YXRlIGZpbHRlck9wdGlvbiE6IChpbnB1dDogc3RyaW5nLCBvcHRpb246IFNGU2NoZW1hRW51bSkgPT4gYm9vbGVhbjtcbiAgcHJpdmF0ZSBpc0FzeW5jID0gZmFsc2U7XG4gIHByaXZhdGUgZml4RGF0YTogU0ZTY2hlbWFFbnVtW10gPSBbXTtcblxuICB1cGRhdGVWYWx1ZShpdGVtOiBOekF1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudCk6IHZvaWQge1xuICAgIHRoaXMudHlwaW5nID0gaXRlbS5uekxhYmVsITtcbiAgICBjb25zdCBkYXRhOiBTRlNjaGVtYUVudW0gPSBpdGVtLm56VmFsdWU7XG4gICAgdGhpcy5zZXRWYWx1ZShkYXRhLnZhbHVlKTtcbiAgICBpZiAodGhpcy51aS5jaGFuZ2UpIHtcbiAgICAgIHRoaXMudWkuY2hhbmdlKGl0ZW0sIGRhdGEpO1xuICAgIH1cbiAgfVxuXG4gIF9zZXRWYWx1ZShpdGVtOiBTRlNjaGVtYUVudW0pOiB2b2lkIHtcbiAgICBsZXQgdmFsID0gaXRlbS50b1N0cmluZygpO1xuICAgIGlmICh0eXBlb2YgaXRlbSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHZhbCA9IGl0ZW0udmFsdWU7XG4gICAgfVxuICAgIHRoaXMuc2V0VmFsdWUodmFsKTtcbiAgfVxuXG4gIGFmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgY29uc3QgeyBiYWNrZmlsbCwgZGVmYXVsdEFjdGl2ZUZpcnN0T3B0aW9uLCBueldpZHRoLCBmaWx0ZXJPcHRpb24sIGFzeW5jRGF0YSwgY29tcGFyZVdpdGggfSA9IHRoaXMudWk7XG4gICAgdGhpcy5pID0ge1xuICAgICAgYmFja2ZpbGw6IHRvQm9vbChiYWNrZmlsbCwgZmFsc2UpLFxuICAgICAgZGVmYXVsdEFjdGl2ZUZpcnN0T3B0aW9uOiB0b0Jvb2woZGVmYXVsdEFjdGl2ZUZpcnN0T3B0aW9uLCB0cnVlKSxcbiAgICAgIHdpZHRoOiBueldpZHRoIHx8IHVuZGVmaW5lZCxcbiAgICAgIGNvbXBhcmVXaXRoOiBjb21wYXJlV2l0aCB8fCAoKG8xLCBvMikgPT4gbzEgPT09IG8yKVxuICAgIH07XG5cbiAgICBsZXQgZmlsdGVyT3B0aW9uVmFsdWUgPSBmaWx0ZXJPcHRpb24gPT0gbnVsbCA/IHRydWUgOiBmaWx0ZXJPcHRpb247XG4gICAgaWYgKHR5cGVvZiBmaWx0ZXJPcHRpb25WYWx1ZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICBmaWx0ZXJPcHRpb25WYWx1ZSA9IChpbnB1dDogc3RyaW5nLCBvcHRpb246IFNGU2NoZW1hRW51bSkgPT5cbiAgICAgICAgb3B0aW9uLmxhYmVsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZigoaW5wdXQgfHwgJycpLnRvTG93ZXJDYXNlKCkpID4gLTE7XG4gICAgfVxuICAgIHRoaXMuZmlsdGVyT3B0aW9uID0gZmlsdGVyT3B0aW9uVmFsdWU7XG5cbiAgICB0aGlzLmlzQXN5bmMgPSAhIWFzeW5jRGF0YTtcbiAgICBjb25zdCBvcmdUaW1lID0gKyh0aGlzLnVpLmRlYm91bmNlVGltZSB8fCAwKTtcbiAgICBjb25zdCB0aW1lID0gTWF0aC5tYXgoMCwgdGhpcy5pc0FzeW5jID8gTWF0aC5tYXgoNTAsIG9yZ1RpbWUpIDogb3JnVGltZSk7XG5cbiAgICB0aGlzLmxpc3QgPSB0aGlzLm5nTW9kZWwudmFsdWVDaGFuZ2VzIS5waXBlKFxuICAgICAgZGVib3VuY2VUaW1lKHRpbWUpLFxuICAgICAgc3RhcnRXaXRoKCcnKSxcbiAgICAgIG1lcmdlTWFwKGlucHV0ID0+ICh0aGlzLmlzQXN5bmMgPyBhc3luY0RhdGEhKGlucHV0KSA6IHRoaXMuZmlsdGVyRGF0YShpbnB1dCkpKSxcbiAgICAgIG1hcChyZXMgPT4gZ2V0RW51bShyZXMsIG51bGwsIHRoaXMuc2NoZW1hLnJlYWRPbmx5ISkpXG4gICAgKTtcbiAgfVxuXG4gIHJlc2V0KHZhbHVlOiBTRlZhbHVlKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNBc3luYykge1xuICAgICAgdGhpcy51aS5hc3luY0RhdGEhKHZhbHVlKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICB0YWtlVW50aWwodGhpcy5zZkl0ZW1Db21wIS5kZXN0cm95JCksXG4gICAgICAgICAgbWFwKHJlcyA9PiBnZXRFbnVtKHJlcywgbnVsbCwgdGhpcy5zY2hlbWEucmVhZE9ubHkhKSlcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICAgIHRoaXMudHlwaW5nID0gZGF0YS5maW5kKHcgPT4gdy52YWx1ZSA9PT0gdGhpcy52YWx1ZSk/LmxhYmVsID8/ICcnO1xuICAgICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnR5cGluZyA9IHZhbHVlO1xuICAgIHN3aXRjaCAodGhpcy51aS50eXBlKSB7XG4gICAgICBjYXNlICdlbWFpbCc6XG4gICAgICAgIHRoaXMuZml4RGF0YSA9IGdldENvcHlFbnVtKFxuICAgICAgICAgIHRoaXMuc2NoZW1hLmVudW0hIHx8IHRoaXMuZm9ybVByb3BlcnR5Lm9wdGlvbnMudWlFbWFpbFN1ZmZpeGVzLFxuICAgICAgICAgIG51bGwsXG4gICAgICAgICAgdGhpcy5zY2hlbWEucmVhZE9ubHkhXG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5maXhEYXRhID0gZ2V0Q29weUVudW0odGhpcy5zY2hlbWEuZW51bSEsIHZhbHVlLCB0aGlzLnNjaGVtYS5yZWFkT25seSEpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGZpbHRlckRhdGEoaW5wdXQ6IHN0cmluZyk6IE9ic2VydmFibGU8U0ZTY2hlbWFFbnVtW10+IHwgT2JzZXJ2YWJsZTxzdHJpbmdbXT4ge1xuICAgIHN3aXRjaCAodGhpcy51aS50eXBlKSB7XG4gICAgICBjYXNlICdlbWFpbCc6XG4gICAgICAgIHJldHVybiB0aGlzLmFkZEVtYWlsU3VmZml4KGlucHV0KTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBvZih0aGlzLmZpeERhdGEuZmlsdGVyKG9wdGlvbiA9PiB0aGlzLmZpbHRlck9wdGlvbihpbnB1dCwgb3B0aW9uKSkpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYWRkRW1haWxTdWZmaXgodmFsdWU6IHN0cmluZyk6IE9ic2VydmFibGU8c3RyaW5nW10+IHtcbiAgICByZXR1cm4gb2YoIXZhbHVlIHx8IH52YWx1ZS5pbmRleE9mKCdAJykgPyBbXSA6IHRoaXMuZml4RGF0YS5tYXAoZG9tYWluID0+IGAke3ZhbHVlfUAke2RvbWFpbi5sYWJlbH1gKSk7XG4gIH1cbn1cbiIsIjxzZi1pdGVtLXdyYXAgW2lkXT1cImlkXCIgW3NjaGVtYV09XCJzY2hlbWFcIiBbdWldPVwidWlcIiBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiIFtlcnJvcl09XCJlcnJvclwiIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCI+XG4gIDxpbnB1dFxuICAgIG56LWlucHV0XG4gICAgW256QXV0b2NvbXBsZXRlXT1cImF1dG9cIlxuICAgIFthdHRyLmlkXT1cImlkXCJcbiAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgIFthdHRyLmRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICBbbnpTaXplXT1cInVpLnNpemUhXCJcbiAgICBbKG5nTW9kZWwpXT1cInR5cGluZ1wiXG4gICAgKG5nTW9kZWxDaGFuZ2UpPVwiX3NldFZhbHVlKCRldmVudClcIlxuICAgIFthdHRyLm1heExlbmd0aF09XCJzY2hlbWEubWF4TGVuZ3RoIHx8IG51bGxcIlxuICAgIFthdHRyLnBsYWNlaG9sZGVyXT1cInVpLnBsYWNlaG9sZGVyXCJcbiAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAvPlxuICA8bnotYXV0b2NvbXBsZXRlXG4gICAgI2F1dG9cbiAgICBbbnpCYWNrZmlsbF09XCJpLmJhY2tmaWxsXCJcbiAgICBbbnpEZWZhdWx0QWN0aXZlRmlyc3RPcHRpb25dPVwiaS5kZWZhdWx0QWN0aXZlRmlyc3RPcHRpb25cIlxuICAgIFtueldpZHRoXT1cImkud2lkdGhcIlxuICAgIFtuek92ZXJsYXlTdHlsZV09XCJ1aS5vdmVybGF5U3R5bGUgfHwge31cIlxuICAgIFtuek92ZXJsYXlDbGFzc05hbWVdPVwidWkub3ZlcmxheUNsYXNzTmFtZSB8fCAnJ1wiXG4gICAgW2NvbXBhcmVXaXRoXT1cImkuY29tcGFyZVdpdGhcIlxuICAgIChzZWxlY3Rpb25DaGFuZ2UpPVwidXBkYXRlVmFsdWUoJGV2ZW50KVwiXG4gID5cbiAgICA8bnotYXV0by1vcHRpb24gKm5nRm9yPVwibGV0IGkgb2YgbGlzdCB8IGFzeW5jXCIgW256VmFsdWVdPVwiaVwiIFtuekxhYmVsXT1cImkubGFiZWxcIj4ge3sgaS5sYWJlbCB9fSA8L256LWF1dG8tb3B0aW9uPlxuICA8L256LWF1dG9jb21wbGV0ZT5cbjwvc2YtaXRlbS13cmFwPlxuIl19