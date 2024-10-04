import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { map, tap } from 'rxjs';
import { ControlUIWidget, DelonFormModule, getData, getEnum } from '@delon/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMentionModule } from 'ng-zorro-antd/mention';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@delon/form";
import * as i3 from "ng-zorro-antd/input";
import * as i4 from "ng-zorro-antd/mention";
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.7", ngImport: i0, type: MentionWidget, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.7", type: MentionWidget, isStandalone: true, selector: "sf-mention", viewQueries: [{ propertyName: "mentionChild", first: true, predicate: ["mentions"], descendants: true, static: true }], usesInheritance: true, ngImport: i0, template: `<sf-item-wrap
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
      @if (ui.inputStyle === 'textarea') {
        <textarea
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
      } @else {
        <input
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
      }
    </nz-mention>
  </sf-item-wrap>`, isInline: true, dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: DelonFormModule }, { kind: "component", type: i2.SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }, { kind: "ngmodule", type: NzInputModule }, { kind: "directive", type: i3.NzInputDirective, selector: "input[nz-input],textarea[nz-input]", inputs: ["nzBorderless", "nzSize", "nzStepperless", "nzStatus", "disabled"], exportAs: ["nzInput"] }, { kind: "directive", type: i3.NzAutosizeDirective, selector: "textarea[nzAutosize]", inputs: ["nzAutosize"], exportAs: ["nzAutosize"] }, { kind: "ngmodule", type: NzMentionModule }, { kind: "component", type: i4.NzMentionComponent, selector: "nz-mention", inputs: ["nzValueWith", "nzPrefix", "nzLoading", "nzNotFoundContent", "nzPlacement", "nzSuggestions", "nzStatus"], outputs: ["nzOnSelect", "nzOnSearchChange"], exportAs: ["nzMention"] }, { kind: "directive", type: i4.NzMentionTriggerDirective, selector: "input[nzMentionTrigger], textarea[nzMentionTrigger]", outputs: ["onFocusin", "onBlur", "onInput", "onKeydown", "onClick"], exportAs: ["nzMentionTrigger"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.7", ngImport: i0, type: MentionWidget, decorators: [{
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
      @if (ui.inputStyle === 'textarea') {
        <textarea
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
      } @else {
        <input
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
      }
    </nz-mention>
  </sf-item-wrap>`,
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    standalone: true,
                    imports: [FormsModule, DelonFormModule, NzInputModule, NzMentionModule]
                }]
        }], propDecorators: { mentionChild: [{
                type: ViewChild,
                args: ['mentions', { static: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS93aWRnZXRzL21lbnRpb24vd2lkZ2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVoQyxPQUFPLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBeUIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUV4RyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDcEQsT0FBTyxFQUE0QyxlQUFlLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7O0FBOERsRyxNQUFNLE9BQU8sYUFBYyxTQUFRLGVBQXNDO0lBMUR6RTs7UUE4REUsU0FBSSxHQUFtQixFQUFFLENBQUM7UUFFMUIsWUFBTyxHQUFHLEtBQUssQ0FBQztLQXdEakI7YUE3RGlCLFFBQUcsR0FBRyxTQUFTLEFBQVosQ0FBYTtJQU9oQyxRQUFRO1FBQ04sTUFBTSxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQzVFLElBQUksQ0FBQyxDQUFDLEdBQUc7WUFDUCxTQUFTLEVBQUUsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQzVDLGVBQWUsRUFBRSxlQUFlLElBQUksZ0JBQWdCO1lBQ3BELFNBQVMsRUFBRSxTQUFTLElBQUksUUFBUTtZQUNoQyxNQUFNLEVBQUUsTUFBTSxJQUFJLEdBQUc7WUFDckIsUUFBUSxF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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBa0RNLDJEQUlOLFdBQVcsOG1CQUFFLGVBQWUseUxBQUUsYUFBYSw2V0FBRSxlQUFlOzsyRkFFM0QsYUFBYTtrQkExRHpCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBa0RNO29CQUNoQixtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLE9BQU8sRUFBRSxDQUFDLFdBQVcsRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLGVBQWUsQ0FBQztpQkFDeEU7OEJBSWtELFlBQVk7c0JBQTVELFNBQVM7dUJBQUMsVUFBVSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IG1hcCwgdGFwIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IENvbnRyb2xVSVdpZGdldCwgRGVsb25Gb3JtTW9kdWxlLCBTRlNjaGVtYUVudW0sIFNGVmFsdWUsIGdldERhdGEsIGdldEVudW0gfSBmcm9tICdAZGVsb24vZm9ybSc7XG5pbXBvcnQgdHlwZSB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBOeklucHV0TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pbnB1dCc7XG5pbXBvcnQgeyBNZW50aW9uT25TZWFyY2hUeXBlcywgTnpNZW50aW9uQ29tcG9uZW50LCBOek1lbnRpb25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL21lbnRpb24nO1xuXG5pbXBvcnQgdHlwZSB7IFNGTWVudGlvbldpZGdldFNjaGVtYSB9IGZyb20gJy4vc2NoZW1hJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtbWVudGlvbicsXG4gIHRlbXBsYXRlOiBgPHNmLWl0ZW0td3JhcFxuICAgIFtpZF09XCJpZFwiXG4gICAgW3NjaGVtYV09XCJzY2hlbWFcIlxuICAgIFt1aV09XCJ1aVwiXG4gICAgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIlxuICAgIFtlcnJvcl09XCJlcnJvclwiXG4gICAgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIlxuICA+XG4gICAgPG56LW1lbnRpb25cbiAgICAgICNtZW50aW9uc1xuICAgICAgW256U3VnZ2VzdGlvbnNdPVwiZGF0YVwiXG4gICAgICBbbnpWYWx1ZVdpdGhdPVwiaS52YWx1ZVdpdGhcIlxuICAgICAgW256TG9hZGluZ109XCJsb2FkaW5nXCJcbiAgICAgIFtuek5vdEZvdW5kQ29udGVudF09XCJpLm5vdEZvdW5kQ29udGVudFwiXG4gICAgICBbbnpQbGFjZW1lbnRdPVwiaS5wbGFjZW1lbnRcIlxuICAgICAgW256UHJlZml4XT1cImkucHJlZml4XCJcbiAgICAgIChuek9uU2VsZWN0KT1cIl9zZWxlY3QoJGV2ZW50KVwiXG4gICAgICAobnpPblNlYXJjaENoYW5nZSk9XCJfc2VhcmNoKCRldmVudClcIlxuICAgID5cbiAgICAgIEBpZiAodWkuaW5wdXRTdHlsZSA9PT0gJ3RleHRhcmVhJykge1xuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICBuek1lbnRpb25UcmlnZ2VyXG4gICAgICAgICAgbnotaW5wdXRcbiAgICAgICAgICBbYXR0ci5pZF09XCJpZFwiXG4gICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgICBbYXR0ci5kaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgICAgW256U2l6ZV09XCJ1aS5zaXplIVwiXG4gICAgICAgICAgW25nTW9kZWxdPVwidmFsdWVcIlxuICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInNldFZhbHVlKCRldmVudClcIlxuICAgICAgICAgIFthdHRyLm1heExlbmd0aF09XCJzY2hlbWEubWF4TGVuZ3RoIHx8IG51bGxcIlxuICAgICAgICAgIFthdHRyLnBsYWNlaG9sZGVyXT1cInVpLnBsYWNlaG9sZGVyXCJcbiAgICAgICAgICBbbnpBdXRvc2l6ZV09XCJpLmF1dG9zaXplXCJcbiAgICAgICAgPlxuICAgICAgICA8L3RleHRhcmVhPlxuICAgICAgfSBAZWxzZSB7XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIG56TWVudGlvblRyaWdnZXJcbiAgICAgICAgICBuei1pbnB1dFxuICAgICAgICAgIFthdHRyLmlkXT1cImlkXCJcbiAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICAgIFthdHRyLmRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgICBbbnpTaXplXT1cInVpLnNpemUhXCJcbiAgICAgICAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXG4gICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwic2V0VmFsdWUoJGV2ZW50KVwiXG4gICAgICAgICAgW2F0dHIubWF4TGVuZ3RoXT1cInNjaGVtYS5tYXhMZW5ndGggfHwgbnVsbFwiXG4gICAgICAgICAgW2F0dHIucGxhY2Vob2xkZXJdPVwidWkucGxhY2Vob2xkZXJcIlxuICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgICAgIC8+XG4gICAgICB9XG4gICAgPC9uei1tZW50aW9uPlxuICA8L3NmLWl0ZW0td3JhcD5gLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0Zvcm1zTW9kdWxlLCBEZWxvbkZvcm1Nb2R1bGUsIE56SW5wdXRNb2R1bGUsIE56TWVudGlvbk1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgTWVudGlvbldpZGdldCBleHRlbmRzIENvbnRyb2xVSVdpZGdldDxTRk1lbnRpb25XaWRnZXRTY2hlbWE+IGltcGxlbWVudHMgT25Jbml0IHtcbiAgc3RhdGljIHJlYWRvbmx5IEtFWSA9ICdtZW50aW9uJztcblxuICBAVmlld0NoaWxkKCdtZW50aW9ucycsIHsgc3RhdGljOiB0cnVlIH0pIHByaXZhdGUgbWVudGlvbkNoaWxkITogTnpNZW50aW9uQ29tcG9uZW50O1xuICBkYXRhOiBTRlNjaGVtYUVudW1bXSA9IFtdO1xuICBpOiBOelNhZmVBbnk7XG4gIGxvYWRpbmcgPSBmYWxzZTtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IHZhbHVlV2l0aCwgbm90Rm91bmRDb250ZW50LCBwbGFjZW1lbnQsIHByZWZpeCwgYXV0b3NpemUgfSA9IHRoaXMudWk7XG4gICAgdGhpcy5pID0ge1xuICAgICAgdmFsdWVXaXRoOiB2YWx1ZVdpdGggfHwgKGl0ZW0gPT4gaXRlbS5sYWJlbCksXG4gICAgICBub3RGb3VuZENvbnRlbnQ6IG5vdEZvdW5kQ29udGVudCB8fCAn5peg5Yy56YWN57uT5p6c77yM6L275pWy56m65qC85a6M5oiQ6L6T5YWlJyxcbiAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50IHx8ICdib3R0b20nLFxuICAgICAgcHJlZml4OiBwcmVmaXggfHwgJ0AnLFxuICAgICAgYXV0b3NpemU6IHR5cGVvZiBhdXRvc2l6ZSA9PT0gJ3VuZGVmaW5lZCcgPyB0cnVlIDogdGhpcy51aS5hdXRvc2l6ZVxuICAgIH07XG5cbiAgICBjb25zdCB7IG1pbmltdW0sIG1heGltdW0gfSA9IHRoaXMuc2NoZW1hO1xuICAgIGNvbnN0IG1pbiA9IHR5cGVvZiBtaW5pbXVtICE9PSAndW5kZWZpbmVkJyA/IG1pbmltdW0gOiAtMTtcbiAgICBjb25zdCBtYXggPSB0eXBlb2YgbWF4aW11bSAhPT0gJ3VuZGVmaW5lZCcgPyBtYXhpbXVtIDogLTE7XG5cbiAgICBpZiAoIXRoaXMudWkudmFsaWRhdG9yICYmIChtaW4gIT09IC0xIHx8IG1heCAhPT0gLTEpKSB7XG4gICAgICB0aGlzLnVpLnZhbGlkYXRvciA9ICgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvdW50ID0gdGhpcy5tZW50aW9uQ2hpbGQuZ2V0TWVudGlvbnMoKS5sZW5ndGg7XG4gICAgICAgIGlmIChtaW4gIT09IC0xICYmIGNvdW50IDwgbWluKSB7XG4gICAgICAgICAgcmV0dXJuIFt7IGtleXdvcmQ6ICdtZW50aW9uJywgbWVzc2FnZTogYOacgOWwkeaPkOWPiiAke21pbn0g5qyhYCB9XTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWF4ICE9PSAtMSAmJiBjb3VudCA+IG1heCkge1xuICAgICAgICAgIHJldHVybiBbeyBrZXl3b3JkOiAnbWVudGlvbicsIG1lc3NhZ2U6IGDmnIDlpJrmj5Dlj4ogJHttYXh9IOasoWAgfV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9KSBhcyBOelNhZmVBbnk7XG4gICAgfVxuICB9XG5cbiAgcmVzZXQoX3ZhbHVlOiBTRlZhbHVlKTogdm9pZCB7XG4gICAgZ2V0RGF0YSh0aGlzLnNjaGVtYSwgdGhpcy51aSwgbnVsbCkuc3Vic2NyaWJlKGxpc3QgPT4ge1xuICAgICAgdGhpcy5kYXRhID0gbGlzdDtcbiAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuICB9XG5cbiAgX3NlbGVjdChvcHRpb25zOiBOelNhZmVBbnkpOiB2b2lkIHtcbiAgICBpZiAodGhpcy51aS5zZWxlY3QpIHRoaXMudWkuc2VsZWN0KG9wdGlvbnMpO1xuICB9XG5cbiAgX3NlYXJjaChvcHRpb246IE1lbnRpb25PblNlYXJjaFR5cGVzKTogdm9pZCB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLnVpLmxvYWREYXRhICE9PSAnZnVuY3Rpb24nKSByZXR1cm47XG5cbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMudWlcbiAgICAgIC5sb2FkRGF0YShvcHRpb24pXG4gICAgICAucGlwZShcbiAgICAgICAgdGFwKCgpID0+ICh0aGlzLmxvYWRpbmcgPSBmYWxzZSkpLFxuICAgICAgICBtYXAocmVzID0+IGdldEVudW0ocmVzLCBudWxsLCB0aGlzLnNjaGVtYS5yZWFkT25seSEpKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICB0aGlzLmRhdGEgPSByZXM7XG4gICAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcyh0cnVlKTtcbiAgICAgIH0pO1xuICB9XG59XG4iXX0=