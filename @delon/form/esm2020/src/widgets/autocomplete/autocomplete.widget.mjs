import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgModel } from '@angular/forms';
import { of } from 'rxjs';
import { debounceTime, map, mergeMap, startWith, takeUntil } from 'rxjs/operators';
import { getCopyEnum, getEnum, toBool } from '../../utils';
import { ControlUIWidget } from '../../widget';
import * as i0 from "@angular/core";
import * as i1 from "../../sf-item-wrap.component";
import * as i2 from "ng-zorro-antd/auto-complete";
import * as i3 from "ng-zorro-antd/input";
import * as i4 from "@angular/forms";
import * as i5 from "@angular/common";
export class AutoCompleteWidget extends ControlUIWidget {
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
        const { backfill, defaultActiveFirstOption, nzWidth, filterOption, asyncData } = this.ui;
        this.i = {
            backfill: toBool(backfill, false),
            defaultActiveFirstOption: toBool(defaultActiveFirstOption, true),
            width: nzWidth || undefined
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
                .pipe(takeUntil(this.sfItemComp.unsubscribe$), map(res => getEnum(res, null, this.schema.readOnly)))
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
}
AutoCompleteWidget.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.1", ngImport: i0, type: AutoCompleteWidget, deps: null, target: i0.ɵɵFactoryTarget.Component });
AutoCompleteWidget.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.1", type: AutoCompleteWidget, selector: "sf-autocomplete", viewQueries: [{ propertyName: "ngModel", first: true, predicate: NgModel, descendants: true }], usesInheritance: true, ngImport: i0, template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <input\n    nz-input\n    [nzAutocomplete]=\"auto\"\n    [attr.id]=\"id\"\n    [disabled]=\"disabled\"\n    [attr.disabled]=\"disabled\"\n    [nzSize]=\"ui.size!\"\n    [(ngModel)]=\"typing\"\n    (ngModelChange)=\"_setValue($event)\"\n    [attr.maxLength]=\"schema.maxLength || null\"\n    [attr.placeholder]=\"ui.placeholder\"\n    autocomplete=\"off\"\n  />\n  <nz-autocomplete\n    #auto\n    [nzBackfill]=\"i.backfill\"\n    [nzDefaultActiveFirstOption]=\"i.defaultActiveFirstOption\"\n    [nzWidth]=\"i.width\"\n    (selectionChange)=\"updateValue($event)\"\n  >\n    <nz-auto-option *ngFor=\"let i of list | async\" [nzValue]=\"i\" [nzLabel]=\"i.label\"> {{ i.label }} </nz-auto-option>\n  </nz-autocomplete>\n</sf-item-wrap>\n", components: [{ type: i1.SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }, { type: i2.NzAutocompleteComponent, selector: "nz-autocomplete", inputs: ["nzWidth", "nzOverlayClassName", "nzOverlayStyle", "nzDefaultActiveFirstOption", "nzBackfill", "compareWith", "nzDataSource"], outputs: ["selectionChange"], exportAs: ["nzAutocomplete"] }, { type: i2.NzAutocompleteOptionComponent, selector: "nz-auto-option", inputs: ["nzValue", "nzLabel", "nzDisabled"], outputs: ["selectionChange", "mouseEntered"], exportAs: ["nzAutoOption"] }], directives: [{ type: i3.NzInputDirective, selector: "input[nz-input],textarea[nz-input]", inputs: ["nzBorderless", "nzSize", "disabled"], exportAs: ["nzInput"] }, { type: i2.NzAutocompleteTriggerDirective, selector: "input[nzAutocomplete], textarea[nzAutocomplete]", inputs: ["nzAutocomplete"], exportAs: ["nzAutocompleteTrigger"] }, { type: i4.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i4.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { type: i5.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], pipes: { "async": i5.AsyncPipe }, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.1", ngImport: i0, type: AutoCompleteWidget, decorators: [{
            type: Component,
            args: [{ selector: 'sf-autocomplete', preserveWhitespaces: false, encapsulation: ViewEncapsulation.None, template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <input\n    nz-input\n    [nzAutocomplete]=\"auto\"\n    [attr.id]=\"id\"\n    [disabled]=\"disabled\"\n    [attr.disabled]=\"disabled\"\n    [nzSize]=\"ui.size!\"\n    [(ngModel)]=\"typing\"\n    (ngModelChange)=\"_setValue($event)\"\n    [attr.maxLength]=\"schema.maxLength || null\"\n    [attr.placeholder]=\"ui.placeholder\"\n    autocomplete=\"off\"\n  />\n  <nz-autocomplete\n    #auto\n    [nzBackfill]=\"i.backfill\"\n    [nzDefaultActiveFirstOption]=\"i.defaultActiveFirstOption\"\n    [nzWidth]=\"i.width\"\n    (selectionChange)=\"updateValue($event)\"\n  >\n    <nz-auto-option *ngFor=\"let i of list | async\" [nzValue]=\"i\" [nzLabel]=\"i.label\"> {{ i.label }} </nz-auto-option>\n  </nz-autocomplete>\n</sf-item-wrap>\n" }]
        }], propDecorators: { ngModel: [{
                type: ViewChild,
                args: [NgModel, { static: false }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm0vc3JjL3dpZGdldHMvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS53aWRnZXQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3NyYy93aWRnZXRzL2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUud2lkZ2V0Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pDLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU9uRixPQUFPLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDM0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7Ozs7OztBQVMvQyxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsZUFBMkM7SUFObkY7O1FBT0UsTUFBQyxHQUFjLEVBQUUsQ0FBQztRQUVsQixXQUFNLEdBQVcsRUFBRSxDQUFDO1FBR1osWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixZQUFPLEdBQW1CLEVBQUUsQ0FBQztLQXNGdEM7SUFwRkMsV0FBVyxDQUFDLElBQW1DO1FBQzdDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQVEsQ0FBQztRQUM1QixNQUFNLElBQUksR0FBaUIsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN4QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztTQUM1QjtJQUNILENBQUM7SUFFRCxTQUFTLENBQUMsSUFBa0I7UUFDMUIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzFCLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQzVCLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ2xCO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBRUQsYUFBYTtRQUNYLE1BQU0sRUFBRSxRQUFRLEVBQUUsd0JBQXdCLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ3pGLElBQUksQ0FBQyxDQUFDLEdBQUc7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUM7WUFDakMsd0JBQXdCLEVBQUUsTUFBTSxDQUFDLHdCQUF3QixFQUFFLElBQUksQ0FBQztZQUNoRSxLQUFLLEVBQUUsT0FBTyxJQUFJLFNBQVM7U0FDNUIsQ0FBQztRQUVGLElBQUksaUJBQWlCLEdBQUcsWUFBWSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7UUFDbkUsSUFBSSxPQUFPLGlCQUFpQixLQUFLLFNBQVMsRUFBRTtZQUMxQyxpQkFBaUIsR0FBRyxDQUFDLEtBQWEsRUFBRSxNQUFvQixFQUFFLEVBQUUsQ0FDMUQsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUN4RTtRQUNELElBQUksQ0FBQyxZQUFZLEdBQUcsaUJBQWlCLENBQUM7UUFFdEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQzNCLE1BQU0sT0FBTyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksSUFBSSxDQUFDLENBQUMsQ0FBQztRQUM3QyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFekUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQWEsQ0FBQyxJQUFJLENBQ3pDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFDbEIsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUNiLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsU0FBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFDOUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFTLENBQUMsQ0FBQyxDQUN0RCxDQUFDO0lBQ0osQ0FBQztJQUVELEtBQUssQ0FBQyxLQUFjO1FBQ2xCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVUsQ0FBQyxLQUFLLENBQUM7aUJBQ3RCLElBQUksQ0FDSCxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVcsQ0FBQyxZQUFZLENBQUMsRUFDeEMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFTLENBQUMsQ0FBQyxDQUN0RDtpQkFDQSxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssSUFBSSxFQUFFLENBQUM7WUFDcEUsQ0FBQyxDQUFDLENBQUM7WUFDTCxPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixRQUFRLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFO1lBQ3BCLEtBQUssT0FBTztnQkFDVixJQUFJLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFLLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUM5RCxJQUFJLEVBQ0osSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFTLENBQ3RCLENBQUM7Z0JBQ0YsTUFBTTtZQUNSO2dCQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVMsQ0FBQyxDQUFDO2dCQUM1RSxNQUFNO1NBQ1Q7SUFDSCxDQUFDO0lBRU8sVUFBVSxDQUFDLEtBQWE7UUFDOUIsUUFBUSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRTtZQUNwQixLQUFLLE9BQU87Z0JBQ1YsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3BDO2dCQUNFLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzlFO0lBQ0gsQ0FBQztJQUVPLGNBQWMsQ0FBQyxLQUFhO1FBQ2xDLE9BQU8sRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxJQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDekcsQ0FBQzs7K0dBNUZVLGtCQUFrQjttR0FBbEIsa0JBQWtCLGdHQUlsQixPQUFPLHVFQ3hCcEIsdTJCQXdCQTsyRkRKYSxrQkFBa0I7a0JBTjlCLFNBQVM7K0JBQ0UsaUJBQWlCLHVCQUVOLEtBQUssaUJBQ1gsaUJBQWlCLENBQUMsSUFBSTs4QkFNVSxPQUFPO3NCQUFyRCxTQUFTO3VCQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nTW9kZWwgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBtYXAsIG1lcmdlTWFwLCBzdGFydFdpdGgsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgTnpBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL2F1dG8tY29tcGxldGUnO1xuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5pbXBvcnQgeyBTRlZhbHVlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlJztcbmltcG9ydCB7IFNGU2NoZW1hRW51bSB9IGZyb20gJy4uLy4uL3NjaGVtYSc7XG5pbXBvcnQgeyBnZXRDb3B5RW51bSwgZ2V0RW51bSwgdG9Cb29sIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgQ29udHJvbFVJV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcbmltcG9ydCB7IFNGQXV0b0NvbXBsZXRlV2lkZ2V0U2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1hdXRvY29tcGxldGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vYXV0b2NvbXBsZXRlLndpZGdldC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgQXV0b0NvbXBsZXRlV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFVJV2lkZ2V0PFNGQXV0b0NvbXBsZXRlV2lkZ2V0U2NoZW1hPiB7XG4gIGk6IE56U2FmZUFueSA9IHt9O1xuICBsaXN0ITogT2JzZXJ2YWJsZTxTRlNjaGVtYUVudW1bXT47XG4gIHR5cGluZzogc3RyaW5nID0gJyc7XG4gIEBWaWV3Q2hpbGQoTmdNb2RlbCwgeyBzdGF0aWM6IGZhbHNlIH0pIHByaXZhdGUgbmdNb2RlbCE6IE5nTW9kZWw7XG4gIHByaXZhdGUgZmlsdGVyT3B0aW9uITogKGlucHV0OiBzdHJpbmcsIG9wdGlvbjogU0ZTY2hlbWFFbnVtKSA9PiBib29sZWFuO1xuICBwcml2YXRlIGlzQXN5bmMgPSBmYWxzZTtcbiAgcHJpdmF0ZSBmaXhEYXRhOiBTRlNjaGVtYUVudW1bXSA9IFtdO1xuXG4gIHVwZGF0ZVZhbHVlKGl0ZW06IE56QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50KTogdm9pZCB7XG4gICAgdGhpcy50eXBpbmcgPSBpdGVtLm56TGFiZWwhO1xuICAgIGNvbnN0IGRhdGE6IFNGU2NoZW1hRW51bSA9IGl0ZW0ubnpWYWx1ZTtcbiAgICB0aGlzLnNldFZhbHVlKGRhdGEudmFsdWUpO1xuICAgIGlmICh0aGlzLnVpLmNoYW5nZSkge1xuICAgICAgdGhpcy51aS5jaGFuZ2UoaXRlbSwgZGF0YSk7XG4gICAgfVxuICB9XG5cbiAgX3NldFZhbHVlKGl0ZW06IFNGU2NoZW1hRW51bSk6IHZvaWQge1xuICAgIGxldCB2YWwgPSBpdGVtLnRvU3RyaW5nKCk7XG4gICAgaWYgKHR5cGVvZiBpdGVtICE9PSAnc3RyaW5nJykge1xuICAgICAgdmFsID0gaXRlbS52YWx1ZTtcbiAgICB9XG4gICAgdGhpcy5zZXRWYWx1ZSh2YWwpO1xuICB9XG5cbiAgYWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IGJhY2tmaWxsLCBkZWZhdWx0QWN0aXZlRmlyc3RPcHRpb24sIG56V2lkdGgsIGZpbHRlck9wdGlvbiwgYXN5bmNEYXRhIH0gPSB0aGlzLnVpO1xuICAgIHRoaXMuaSA9IHtcbiAgICAgIGJhY2tmaWxsOiB0b0Jvb2woYmFja2ZpbGwsIGZhbHNlKSxcbiAgICAgIGRlZmF1bHRBY3RpdmVGaXJzdE9wdGlvbjogdG9Cb29sKGRlZmF1bHRBY3RpdmVGaXJzdE9wdGlvbiwgdHJ1ZSksXG4gICAgICB3aWR0aDogbnpXaWR0aCB8fCB1bmRlZmluZWRcbiAgICB9O1xuXG4gICAgbGV0IGZpbHRlck9wdGlvblZhbHVlID0gZmlsdGVyT3B0aW9uID09IG51bGwgPyB0cnVlIDogZmlsdGVyT3B0aW9uO1xuICAgIGlmICh0eXBlb2YgZmlsdGVyT3B0aW9uVmFsdWUgPT09ICdib29sZWFuJykge1xuICAgICAgZmlsdGVyT3B0aW9uVmFsdWUgPSAoaW5wdXQ6IHN0cmluZywgb3B0aW9uOiBTRlNjaGVtYUVudW0pID0+XG4gICAgICAgIG9wdGlvbi5sYWJlbC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoKGlucHV0IHx8ICcnKS50b0xvd2VyQ2FzZSgpKSA+IC0xO1xuICAgIH1cbiAgICB0aGlzLmZpbHRlck9wdGlvbiA9IGZpbHRlck9wdGlvblZhbHVlO1xuXG4gICAgdGhpcy5pc0FzeW5jID0gISFhc3luY0RhdGE7XG4gICAgY29uc3Qgb3JnVGltZSA9ICsodGhpcy51aS5kZWJvdW5jZVRpbWUgfHwgMCk7XG4gICAgY29uc3QgdGltZSA9IE1hdGgubWF4KDAsIHRoaXMuaXNBc3luYyA/IE1hdGgubWF4KDUwLCBvcmdUaW1lKSA6IG9yZ1RpbWUpO1xuXG4gICAgdGhpcy5saXN0ID0gdGhpcy5uZ01vZGVsLnZhbHVlQ2hhbmdlcyEucGlwZShcbiAgICAgIGRlYm91bmNlVGltZSh0aW1lKSxcbiAgICAgIHN0YXJ0V2l0aCgnJyksXG4gICAgICBtZXJnZU1hcChpbnB1dCA9PiAodGhpcy5pc0FzeW5jID8gYXN5bmNEYXRhIShpbnB1dCkgOiB0aGlzLmZpbHRlckRhdGEoaW5wdXQpKSksXG4gICAgICBtYXAocmVzID0+IGdldEVudW0ocmVzLCBudWxsLCB0aGlzLnNjaGVtYS5yZWFkT25seSEpKVxuICAgICk7XG4gIH1cblxuICByZXNldCh2YWx1ZTogU0ZWYWx1ZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzQXN5bmMpIHtcbiAgICAgIHRoaXMudWkuYXN5bmNEYXRhISh2YWx1ZSlcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgdGFrZVVudGlsKHRoaXMuc2ZJdGVtQ29tcCEudW5zdWJzY3JpYmUkKSxcbiAgICAgICAgICBtYXAocmVzID0+IGdldEVudW0ocmVzLCBudWxsLCB0aGlzLnNjaGVtYS5yZWFkT25seSEpKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgICAgdGhpcy50eXBpbmcgPSBkYXRhLmZpbmQodyA9PiB3LnZhbHVlID09PSB0aGlzLnZhbHVlKT8ubGFiZWwgPz8gJyc7XG4gICAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudHlwaW5nID0gdmFsdWU7XG4gICAgc3dpdGNoICh0aGlzLnVpLnR5cGUpIHtcbiAgICAgIGNhc2UgJ2VtYWlsJzpcbiAgICAgICAgdGhpcy5maXhEYXRhID0gZ2V0Q29weUVudW0oXG4gICAgICAgICAgdGhpcy5zY2hlbWEuZW51bSEgfHwgdGhpcy5mb3JtUHJvcGVydHkub3B0aW9ucy51aUVtYWlsU3VmZml4ZXMsXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgICB0aGlzLnNjaGVtYS5yZWFkT25seSFcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLmZpeERhdGEgPSBnZXRDb3B5RW51bSh0aGlzLnNjaGVtYS5lbnVtISwgdmFsdWUsIHRoaXMuc2NoZW1hLnJlYWRPbmx5ISk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZmlsdGVyRGF0YShpbnB1dDogc3RyaW5nKTogT2JzZXJ2YWJsZTxTRlNjaGVtYUVudW1bXT4gfCBPYnNlcnZhYmxlPHN0cmluZ1tdPiB7XG4gICAgc3dpdGNoICh0aGlzLnVpLnR5cGUpIHtcbiAgICAgIGNhc2UgJ2VtYWlsJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkRW1haWxTdWZmaXgoaW5wdXQpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG9mKHRoaXMuZml4RGF0YS5maWx0ZXIob3B0aW9uID0+IHRoaXMuZmlsdGVyT3B0aW9uKGlucHV0LCBvcHRpb24pKSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhZGRFbWFpbFN1ZmZpeCh2YWx1ZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxzdHJpbmdbXT4ge1xuICAgIHJldHVybiBvZighdmFsdWUgfHwgfnZhbHVlLmluZGV4T2YoJ0AnKSA/IFtdIDogdGhpcy5maXhEYXRhLm1hcChkb21haW4gPT4gYCR7dmFsdWV9QCR7ZG9tYWluLmxhYmVsfWApKTtcbiAgfVxufVxuIiwiPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cbiAgPGlucHV0XG4gICAgbnotaW5wdXRcbiAgICBbbnpBdXRvY29tcGxldGVdPVwiYXV0b1wiXG4gICAgW2F0dHIuaWRdPVwiaWRcIlxuICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgW2F0dHIuZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgIFtuelNpemVdPVwidWkuc2l6ZSFcIlxuICAgIFsobmdNb2RlbCldPVwidHlwaW5nXCJcbiAgICAobmdNb2RlbENoYW5nZSk9XCJfc2V0VmFsdWUoJGV2ZW50KVwiXG4gICAgW2F0dHIubWF4TGVuZ3RoXT1cInNjaGVtYS5tYXhMZW5ndGggfHwgbnVsbFwiXG4gICAgW2F0dHIucGxhY2Vob2xkZXJdPVwidWkucGxhY2Vob2xkZXJcIlxuICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gIC8+XG4gIDxuei1hdXRvY29tcGxldGVcbiAgICAjYXV0b1xuICAgIFtuekJhY2tmaWxsXT1cImkuYmFja2ZpbGxcIlxuICAgIFtuekRlZmF1bHRBY3RpdmVGaXJzdE9wdGlvbl09XCJpLmRlZmF1bHRBY3RpdmVGaXJzdE9wdGlvblwiXG4gICAgW256V2lkdGhdPVwiaS53aWR0aFwiXG4gICAgKHNlbGVjdGlvbkNoYW5nZSk9XCJ1cGRhdGVWYWx1ZSgkZXZlbnQpXCJcbiAgPlxuICAgIDxuei1hdXRvLW9wdGlvbiAqbmdGb3I9XCJsZXQgaSBvZiBsaXN0IHwgYXN5bmNcIiBbbnpWYWx1ZV09XCJpXCIgW256TGFiZWxdPVwiaS5sYWJlbFwiPiB7eyBpLmxhYmVsIH19IDwvbnotYXV0by1vcHRpb24+XG4gIDwvbnotYXV0b2NvbXBsZXRlPlxuPC9zZi1pdGVtLXdyYXA+XG4iXX0=