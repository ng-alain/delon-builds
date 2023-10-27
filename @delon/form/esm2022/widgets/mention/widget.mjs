import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { map, tap } from 'rxjs';
import { ControlUIWidget, getData, getEnum } from '@delon/form';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@delon/form";
import * as i3 from "ng-zorro-antd/mention";
import * as i4 from "ng-zorro-antd/input";
import * as i5 from "@angular/common";
export class MentionWidget extends ControlUIWidget {
    constructor() {
        super(...arguments);
        this.data = [];
        this.loading = false;
    }
    static { this.KEY = 'mention'; }
    ngOnInit() {
        const { valueWith, notFoundContent, placement, prefix, autosize } = this.ui;
        this.i = {
            valueWith: valueWith || (item => item.label),
            notFoundContent: notFoundContent || '无匹配结果，轻敲空格完成输入',
            placement: placement || 'bottom',
            prefix: prefix || '@',
            autosize: typeof autosize === 'undefined' ? true : this.ui.autosize
        };
        const { minimum, maximum } = this.schema;
        const min = typeof minimum !== 'undefined' ? minimum : -1;
        const max = typeof maximum !== 'undefined' ? maximum : -1;
        if (!this.ui.validator && (min !== -1 || max !== -1)) {
            this.ui.validator = (() => {
                const count = this.mentionChild.getMentions().length;
                if (min !== -1 && count < min) {
                    return [{ keyword: 'mention', message: `最少提及 ${min} 次` }];
                }
                if (max !== -1 && count > max) {
                    return [{ keyword: 'mention', message: `最多提及 ${max} 次` }];
                }
                return null;
            });
        }
    }
    reset(_value) {
        getData(this.schema, this.ui, null).subscribe(list => {
            this.data = list;
            this.detectChanges();
        });
    }
    _select(options) {
        if (this.ui.select)
            this.ui.select(options);
    }
    _search(option) {
        if (typeof this.ui.loadData !== 'function')
            return;
        this.loading = true;
        this.ui
            .loadData(option)
            .pipe(tap(() => (this.loading = false)), map(res => getEnum(res, null, this.schema.readOnly)))
            .subscribe(res => {
            this.data = res;
            this.detectChanges(true);
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: MentionWidget, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.11", type: MentionWidget, selector: "sf-mention", viewQueries: [{ propertyName: "mentionChild", first: true, predicate: ["mentions"], descendants: true, static: true }], usesInheritance: true, ngImport: i0, template: `<sf-item-wrap
    [id]="id"
    [schema]="schema"
    [ui]="ui"
    [showError]="showError"
    [error]="error"
    [showTitle]="schema.title"
  >
    <nz-mention
      #mentions
      [nzSuggestions]="data"
      [nzValueWith]="i.valueWith"
      [nzLoading]="loading"
      [nzNotFoundContent]="i.notFoundContent"
      [nzPlacement]="i.placement"
      [nzPrefix]="i.prefix"
      (nzOnSelect)="_select($event)"
      (nzOnSearchChange)="_search($event)"
    >
      <input
        *ngIf="ui.inputStyle !== 'textarea'"
        nzMentionTrigger
        nz-input
        [attr.id]="id"
        [disabled]="disabled"
        [attr.disabled]="disabled"
        [nzSize]="ui.size!"
        [ngModel]="value"
        (ngModelChange)="setValue($event)"
        [attr.maxLength]="schema.maxLength || null"
        [attr.placeholder]="ui.placeholder"
        autocomplete="off"
      />
      <textarea
        *ngIf="ui.inputStyle === 'textarea'"
        nzMentionTrigger
        nz-input
        [attr.id]="id"
        [disabled]="disabled"
        [attr.disabled]="disabled"
        [nzSize]="ui.size!"
        [ngModel]="value"
        (ngModelChange)="setValue($event)"
        [attr.maxLength]="schema.maxLength || null"
        [attr.placeholder]="ui.placeholder"
        [nzAutosize]="i.autosize"
      >
      </textarea>
    </nz-mention>
  </sf-item-wrap>`, isInline: true, dependencies: [{ kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: i2.SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }, { kind: "component", type: i3.NzMentionComponent, selector: "nz-mention", inputs: ["nzValueWith", "nzPrefix", "nzLoading", "nzNotFoundContent", "nzPlacement", "nzSuggestions", "nzStatus"], outputs: ["nzOnSelect", "nzOnSearchChange"], exportAs: ["nzMention"] }, { kind: "directive", type: i3.NzMentionTriggerDirective, selector: "input[nzMentionTrigger], textarea[nzMentionTrigger]", outputs: ["onFocusin", "onBlur", "onInput", "onKeydown", "onClick"], exportAs: ["nzMentionTrigger"] }, { kind: "directive", type: i4.NzInputDirective, selector: "input[nz-input],textarea[nz-input]", inputs: ["nzBorderless", "nzSize", "nzStepperless", "nzStatus", "disabled"], exportAs: ["nzInput"] }, { kind: "directive", type: i4.NzAutosizeDirective, selector: "textarea[nzAutosize]", inputs: ["nzAutosize"], exportAs: ["nzAutosize"] }, { kind: "directive", type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: MentionWidget, decorators: [{
            type: Component,
            args: [{
                    selector: 'sf-mention',
                    template: `<sf-item-wrap
    [id]="id"
    [schema]="schema"
    [ui]="ui"
    [showError]="showError"
    [error]="error"
    [showTitle]="schema.title"
  >
    <nz-mention
      #mentions
      [nzSuggestions]="data"
      [nzValueWith]="i.valueWith"
      [nzLoading]="loading"
      [nzNotFoundContent]="i.notFoundContent"
      [nzPlacement]="i.placement"
      [nzPrefix]="i.prefix"
      (nzOnSelect)="_select($event)"
      (nzOnSearchChange)="_search($event)"
    >
      <input
        *ngIf="ui.inputStyle !== 'textarea'"
        nzMentionTrigger
        nz-input
        [attr.id]="id"
        [disabled]="disabled"
        [attr.disabled]="disabled"
        [nzSize]="ui.size!"
        [ngModel]="value"
        (ngModelChange)="setValue($event)"
        [attr.maxLength]="schema.maxLength || null"
        [attr.placeholder]="ui.placeholder"
        autocomplete="off"
      />
      <textarea
        *ngIf="ui.inputStyle === 'textarea'"
        nzMentionTrigger
        nz-input
        [attr.id]="id"
        [disabled]="disabled"
        [attr.disabled]="disabled"
        [nzSize]="ui.size!"
        [ngModel]="value"
        (ngModelChange)="setValue($event)"
        [attr.maxLength]="schema.maxLength || null"
        [attr.placeholder]="ui.placeholder"
        [nzAutosize]="i.autosize"
      >
      </textarea>
    </nz-mention>
  </sf-item-wrap>`,
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None
                }]
        }], propDecorators: { mentionChild: [{
                type: ViewChild,
                args: ['mentions', { static: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS93aWRnZXRzL21lbnRpb24vd2lkZ2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWhDLE9BQU8sRUFBRSxlQUFlLEVBQXlCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7Ozs7QUE2RHZGLE1BQU0sT0FBTyxhQUFjLFNBQVEsZUFBc0M7SUF2RHpFOztRQTJERSxTQUFJLEdBQW1CLEVBQUUsQ0FBQztRQUUxQixZQUFPLEdBQUcsS0FBSyxDQUFDO0tBd0RqQjthQTdEaUIsUUFBRyxHQUFHLFNBQVMsQUFBWixDQUFhO0lBT2hDLFFBQVE7UUFDTixNQUFNLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDNUUsSUFBSSxDQUFDLENBQUMsR0FBRztZQUNQLFNBQVMsRUFBRSxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDNUMsZUFBZSxFQUFFLGVBQWUsSUFBSSxnQkFBZ0I7WUFDcEQsU0FBUyxFQUFFLFNBQVMsSUFBSSxRQUFRO1lBQ2hDLE1BQU0sRUFBRSxNQUFNLElBQUksR0FBRztZQUNyQixRQUFRLEVBQUUsT0FBTyxRQUFRLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUTtTQUNwRSxDQUFDO1FBRUYsTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsR0FBRyxJQUFJ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b0JBQ2hCLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUN0Qzs4QkFJa0QsWUFBWTtzQkFBNUQsU0FBUzt1QkFBQyxVQUFVLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IG1hcCwgdGFwIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IENvbnRyb2xVSVdpZGdldCwgU0ZTY2hlbWFFbnVtLCBTRlZhbHVlLCBnZXREYXRhLCBnZXRFbnVtIH0gZnJvbSAnQGRlbG9uL2Zvcm0nO1xuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgTWVudGlvbk9uU2VhcmNoVHlwZXMsIE56TWVudGlvbkNvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvbWVudGlvbic7XG5cbmltcG9ydCB0eXBlIHsgU0ZNZW50aW9uV2lkZ2V0U2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1tZW50aW9uJyxcbiAgdGVtcGxhdGU6IGA8c2YtaXRlbS13cmFwXG4gICAgW2lkXT1cImlkXCJcbiAgICBbc2NoZW1hXT1cInNjaGVtYVwiXG4gICAgW3VpXT1cInVpXCJcbiAgICBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiXG4gICAgW2Vycm9yXT1cImVycm9yXCJcbiAgICBbc2hvd1RpdGxlXT1cInNjaGVtYS50aXRsZVwiXG4gID5cbiAgICA8bnotbWVudGlvblxuICAgICAgI21lbnRpb25zXG4gICAgICBbbnpTdWdnZXN0aW9uc109XCJkYXRhXCJcbiAgICAgIFtuelZhbHVlV2l0aF09XCJpLnZhbHVlV2l0aFwiXG4gICAgICBbbnpMb2FkaW5nXT1cImxvYWRpbmdcIlxuICAgICAgW256Tm90Rm91bmRDb250ZW50XT1cImkubm90Rm91bmRDb250ZW50XCJcbiAgICAgIFtuelBsYWNlbWVudF09XCJpLnBsYWNlbWVudFwiXG4gICAgICBbbnpQcmVmaXhdPVwiaS5wcmVmaXhcIlxuICAgICAgKG56T25TZWxlY3QpPVwiX3NlbGVjdCgkZXZlbnQpXCJcbiAgICAgIChuek9uU2VhcmNoQ2hhbmdlKT1cIl9zZWFyY2goJGV2ZW50KVwiXG4gICAgPlxuICAgICAgPGlucHV0XG4gICAgICAgICpuZ0lmPVwidWkuaW5wdXRTdHlsZSAhPT0gJ3RleHRhcmVhJ1wiXG4gICAgICAgIG56TWVudGlvblRyaWdnZXJcbiAgICAgICAgbnotaW5wdXRcbiAgICAgICAgW2F0dHIuaWRdPVwiaWRcIlxuICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICBbYXR0ci5kaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgIFtuelNpemVdPVwidWkuc2l6ZSFcIlxuICAgICAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXG4gICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInNldFZhbHVlKCRldmVudClcIlxuICAgICAgICBbYXR0ci5tYXhMZW5ndGhdPVwic2NoZW1hLm1heExlbmd0aCB8fCBudWxsXCJcbiAgICAgICAgW2F0dHIucGxhY2Vob2xkZXJdPVwidWkucGxhY2Vob2xkZXJcIlxuICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgLz5cbiAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAqbmdJZj1cInVpLmlucHV0U3R5bGUgPT09ICd0ZXh0YXJlYSdcIlxuICAgICAgICBuek1lbnRpb25UcmlnZ2VyXG4gICAgICAgIG56LWlucHV0XG4gICAgICAgIFthdHRyLmlkXT1cImlkXCJcbiAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgW2F0dHIuZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICBbbnpTaXplXT1cInVpLnNpemUhXCJcbiAgICAgICAgW25nTW9kZWxdPVwidmFsdWVcIlxuICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJzZXRWYWx1ZSgkZXZlbnQpXCJcbiAgICAgICAgW2F0dHIubWF4TGVuZ3RoXT1cInNjaGVtYS5tYXhMZW5ndGggfHwgbnVsbFwiXG4gICAgICAgIFthdHRyLnBsYWNlaG9sZGVyXT1cInVpLnBsYWNlaG9sZGVyXCJcbiAgICAgICAgW256QXV0b3NpemVdPVwiaS5hdXRvc2l6ZVwiXG4gICAgICA+XG4gICAgICA8L3RleHRhcmVhPlxuICAgIDwvbnotbWVudGlvbj5cbiAgPC9zZi1pdGVtLXdyYXA+YCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgTWVudGlvbldpZGdldCBleHRlbmRzIENvbnRyb2xVSVdpZGdldDxTRk1lbnRpb25XaWRnZXRTY2hlbWE+IGltcGxlbWVudHMgT25Jbml0IHtcbiAgc3RhdGljIHJlYWRvbmx5IEtFWSA9ICdtZW50aW9uJztcblxuICBAVmlld0NoaWxkKCdtZW50aW9ucycsIHsgc3RhdGljOiB0cnVlIH0pIHByaXZhdGUgbWVudGlvbkNoaWxkITogTnpNZW50aW9uQ29tcG9uZW50O1xuICBkYXRhOiBTRlNjaGVtYUVudW1bXSA9IFtdO1xuICBpOiBOelNhZmVBbnk7XG4gIGxvYWRpbmcgPSBmYWxzZTtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IHZhbHVlV2l0aCwgbm90Rm91bmRDb250ZW50LCBwbGFjZW1lbnQsIHByZWZpeCwgYXV0b3NpemUgfSA9IHRoaXMudWk7XG4gICAgdGhpcy5pID0ge1xuICAgICAgdmFsdWVXaXRoOiB2YWx1ZVdpdGggfHwgKGl0ZW0gPT4gaXRlbS5sYWJlbCksXG4gICAgICBub3RGb3VuZENvbnRlbnQ6IG5vdEZvdW5kQ29udGVudCB8fCAn5peg5Yy56YWN57uT5p6c77yM6L275pWy56m65qC85a6M5oiQ6L6T5YWlJyxcbiAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50IHx8ICdib3R0b20nLFxuICAgICAgcHJlZml4OiBwcmVmaXggfHwgJ0AnLFxuICAgICAgYXV0b3NpemU6IHR5cGVvZiBhdXRvc2l6ZSA9PT0gJ3VuZGVmaW5lZCcgPyB0cnVlIDogdGhpcy51aS5hdXRvc2l6ZVxuICAgIH07XG5cbiAgICBjb25zdCB7IG1pbmltdW0sIG1heGltdW0gfSA9IHRoaXMuc2NoZW1hO1xuICAgIGNvbnN0IG1pbiA9IHR5cGVvZiBtaW5pbXVtICE9PSAndW5kZWZpbmVkJyA/IG1pbmltdW0gOiAtMTtcbiAgICBjb25zdCBtYXggPSB0eXBlb2YgbWF4aW11bSAhPT0gJ3VuZGVmaW5lZCcgPyBtYXhpbXVtIDogLTE7XG5cbiAgICBpZiAoIXRoaXMudWkudmFsaWRhdG9yICYmIChtaW4gIT09IC0xIHx8IG1heCAhPT0gLTEpKSB7XG4gICAgICB0aGlzLnVpLnZhbGlkYXRvciA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvdW50ID0gdGhpcy5tZW50aW9uQ2hpbGQuZ2V0TWVudGlvbnMoKS5sZW5ndGg7XG4gICAgICAgIGlmIChtaW4gIT09IC0xICYmIGNvdW50IDwgbWluKSB7XG4gICAgICAgICAgcmV0dXJuIFt7IGtleXdvcmQ6ICdtZW50aW9uJywgbWVzc2FnZTogYOacgOWwkeaPkOWPiiAke21pbn0g5qyhYCB9XTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWF4ICE9PSAtMSAmJiBjb3VudCA+IG1heCkge1xuICAgICAgICAgIHJldHVybiBbeyBrZXl3b3JkOiAnbWVudGlvbicsIG1lc3NhZ2U6IGDmnIDlpJrmj5Dlj4ogJHttYXh9IOasoWAgfV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9KSBhcyBOelNhZmVBbnk7XG4gICAgfVxuICB9XG5cbiAgcmVzZXQoX3ZhbHVlOiBTRlZhbHVlKTogdm9pZCB7XG4gICAgZ2V0RGF0YSh0aGlzLnNjaGVtYSwgdGhpcy51aSwgbnVsbCkuc3Vic2NyaWJlKGxpc3QgPT4ge1xuICAgICAgdGhpcy5kYXRhID0gbGlzdDtcbiAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuICB9XG5cbiAgX3NlbGVjdChvcHRpb25zOiBOelNhZmVBbnkpOiB2b2lkIHtcbiAgICBpZiAodGhpcy51aS5zZWxlY3QpIHRoaXMudWkuc2VsZWN0KG9wdGlvbnMpO1xuICB9XG5cbiAgX3NlYXJjaChvcHRpb246IE1lbnRpb25PblNlYXJjaFR5cGVzKTogdm9pZCB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLnVpLmxvYWREYXRhICE9PSAnZnVuY3Rpb24nKSByZXR1cm47XG5cbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMudWlcbiAgICAgIC5sb2FkRGF0YShvcHRpb24pXG4gICAgICAucGlwZShcbiAgICAgICAgdGFwKCgpID0+ICh0aGlzLmxvYWRpbmcgPSBmYWxzZSkpLFxuICAgICAgICBtYXAocmVzID0+IGdldEVudW0ocmVzLCBudWxsLCB0aGlzLnNjaGVtYS5yZWFkT25seSEpKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICB0aGlzLmRhdGEgPSByZXM7XG4gICAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcyh0cnVlKTtcbiAgICAgIH0pO1xuICB9XG59XG4iXX0=