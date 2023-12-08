import { Component, ViewEncapsulation } from '@angular/core';
import { ControlUIWidget } from '../../widget';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "ng-zorro-antd/input";
import * as i4 from "../../sf-item-wrap.component";
export class TextareaWidget extends ControlUIWidget {
    constructor() {
        super(...arguments);
        this.autosize = true;
    }
    ngOnInit() {
        if (this.ui.autosize != null) {
            this.autosize = this.ui.autosize;
        }
        if (this.ui.computeCharacterCount == null) {
            this.ui.computeCharacterCount = v => v.length;
        }
    }
    change(val) {
        this.setValue(val);
        if (this.ui.change)
            this.ui.change(val);
    }
    focus(e) {
        if (this.ui.focus)
            this.ui.focus(e);
    }
    blur(e) {
        if (this.ui.blur)
            this.ui.blur(e);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: TextareaWidget, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.6", type: TextareaWidget, selector: "sf-textarea", usesInheritance: true, ngImport: i0, template: `<sf-item-wrap
    [id]="id"
    [schema]="schema"
    [ui]="ui"
    [showError]="showError"
    [error]="error"
    [showTitle]="schema.title"
  >
    <ng-template #ipt>
      <textarea
        nz-input
        [attr.id]="id"
        [disabled]="disabled"
        [attr.disabled]="disabled"
        [nzSize]="ui.size!"
        [ngModel]="value"
        (ngModelChange)="change($event)"
        [attr.maxLength]="schema.maxLength || null"
        [attr.placeholder]="ui.placeholder"
        [nzAutosize]="autosize"
        [nzBorderless]="ui.borderless"
        (focus)="focus($event)"
        (blur)="blur($event)"
      >
      </textarea>
    </ng-template>

    @if (ui.maxCharacterCount) {
      <nz-textarea-count
        [nzMaxCharacterCount]="ui.maxCharacterCount"
        [nzComputeCharacterCount]="ui.computeCharacterCount!"
      >
        <textarea
          nz-input
          [attr.id]="id"
          [disabled]="disabled"
          [attr.disabled]="disabled"
          [nzSize]="ui.size!"
          [ngModel]="value"
          (ngModelChange)="change($event)"
          [attr.maxLength]="schema.maxLength || null"
          [attr.placeholder]="ui.placeholder"
          [nzAutosize]="autosize"
          [nzBorderless]="ui.borderless"
          (focus)="focus($event)"
          (blur)="blur($event)"
        >
        </textarea>
      </nz-textarea-count>
    } @else {
      <ng-template [ngTemplateOutlet]="ipt" />
    }
  </sf-item-wrap>`, isInline: true, dependencies: [{ kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: i3.NzTextareaCountComponent, selector: "nz-textarea-count", inputs: ["nzMaxCharacterCount", "nzComputeCharacterCount", "nzFormatter"] }, { kind: "directive", type: i3.NzInputDirective, selector: "input[nz-input],textarea[nz-input]", inputs: ["nzBorderless", "nzSize", "nzStepperless", "nzStatus", "disabled"], exportAs: ["nzInput"] }, { kind: "directive", type: i3.NzAutosizeDirective, selector: "textarea[nzAutosize]", inputs: ["nzAutosize"], exportAs: ["nzAutosize"] }, { kind: "component", type: i4.SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: TextareaWidget, decorators: [{
            type: Component,
            args: [{
                    selector: 'sf-textarea',
                    template: `<sf-item-wrap
    [id]="id"
    [schema]="schema"
    [ui]="ui"
    [showError]="showError"
    [error]="error"
    [showTitle]="schema.title"
  >
    <ng-template #ipt>
      <textarea
        nz-input
        [attr.id]="id"
        [disabled]="disabled"
        [attr.disabled]="disabled"
        [nzSize]="ui.size!"
        [ngModel]="value"
        (ngModelChange)="change($event)"
        [attr.maxLength]="schema.maxLength || null"
        [attr.placeholder]="ui.placeholder"
        [nzAutosize]="autosize"
        [nzBorderless]="ui.borderless"
        (focus)="focus($event)"
        (blur)="blur($event)"
      >
      </textarea>
    </ng-template>

    @if (ui.maxCharacterCount) {
      <nz-textarea-count
        [nzMaxCharacterCount]="ui.maxCharacterCount"
        [nzComputeCharacterCount]="ui.computeCharacterCount!"
      >
        <textarea
          nz-input
          [attr.id]="id"
          [disabled]="disabled"
          [attr.disabled]="disabled"
          [nzSize]="ui.size!"
          [ngModel]="value"
          (ngModelChange)="change($event)"
          [attr.maxLength]="schema.maxLength || null"
          [attr.placeholder]="ui.placeholder"
          [nzAutosize]="autosize"
          [nzBorderless]="ui.borderless"
          (focus)="focus($event)"
          (blur)="blur($event)"
        >
        </textarea>
      </nz-textarea-count>
    } @else {
      <ng-template [ngTemplateOutlet]="ipt" />
    }
  </sf-item-wrap>`,
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWEud2lkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS9zcmMvd2lkZ2V0cy90ZXh0YXJlYS90ZXh0YXJlYS53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUtyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7Ozs7QUE0RC9DLE1BQU0sT0FBTyxjQUFlLFNBQVEsZUFBdUM7SUExRDNFOztRQTJERSxhQUFRLEdBQW9DLElBQUksQ0FBQztLQXVCbEQ7SUFyQkMsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFFO1lBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7U0FDbEM7UUFDRCxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMscUJBQXFCLElBQUksSUFBSSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxFQUFFLENBQUMscUJBQXFCLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1NBQy9DO0lBQ0gsQ0FBQztJQUVELE1BQU0sQ0FBQyxHQUFXO1FBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkIsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU07WUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsS0FBSyxDQUFDLENBQWE7UUFDakIsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUs7WUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsSUFBSSxDQUFDLENBQWE7UUFDaEIsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUk7WUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDOzhHQXZCVSxjQUFjO2tHQUFkLGNBQWMsMEVBeERmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQW9ETTs7MkZBSUwsY0FBYztrQkExRDFCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkFvRE07b0JBQ2hCLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUN0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgdHlwZSB7IEF1dG9TaXplVHlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaW5wdXQnO1xuXG5pbXBvcnQgeyBTRlRleHRhcmVhV2lkZ2V0U2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEnO1xuaW1wb3J0IHsgQ29udHJvbFVJV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtdGV4dGFyZWEnLFxuICB0ZW1wbGF0ZTogYDxzZi1pdGVtLXdyYXBcbiAgICBbaWRdPVwiaWRcIlxuICAgIFtzY2hlbWFdPVwic2NoZW1hXCJcbiAgICBbdWldPVwidWlcIlxuICAgIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCJcbiAgICBbZXJyb3JdPVwiZXJyb3JcIlxuICAgIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCJcbiAgPlxuICAgIDxuZy10ZW1wbGF0ZSAjaXB0PlxuICAgICAgPHRleHRhcmVhXG4gICAgICAgIG56LWlucHV0XG4gICAgICAgIFthdHRyLmlkXT1cImlkXCJcbiAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgW2F0dHIuZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICBbbnpTaXplXT1cInVpLnNpemUhXCJcbiAgICAgICAgW25nTW9kZWxdPVwidmFsdWVcIlxuICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJjaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgIFthdHRyLm1heExlbmd0aF09XCJzY2hlbWEubWF4TGVuZ3RoIHx8IG51bGxcIlxuICAgICAgICBbYXR0ci5wbGFjZWhvbGRlcl09XCJ1aS5wbGFjZWhvbGRlclwiXG4gICAgICAgIFtuekF1dG9zaXplXT1cImF1dG9zaXplXCJcbiAgICAgICAgW256Qm9yZGVybGVzc109XCJ1aS5ib3JkZXJsZXNzXCJcbiAgICAgICAgKGZvY3VzKT1cImZvY3VzKCRldmVudClcIlxuICAgICAgICAoYmx1cik9XCJibHVyKCRldmVudClcIlxuICAgICAgPlxuICAgICAgPC90ZXh0YXJlYT5cbiAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgQGlmICh1aS5tYXhDaGFyYWN0ZXJDb3VudCkge1xuICAgICAgPG56LXRleHRhcmVhLWNvdW50XG4gICAgICAgIFtuek1heENoYXJhY3RlckNvdW50XT1cInVpLm1heENoYXJhY3RlckNvdW50XCJcbiAgICAgICAgW256Q29tcHV0ZUNoYXJhY3RlckNvdW50XT1cInVpLmNvbXB1dGVDaGFyYWN0ZXJDb3VudCFcIlxuICAgICAgPlxuICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICBuei1pbnB1dFxuICAgICAgICAgIFthdHRyLmlkXT1cImlkXCJcbiAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICAgIFthdHRyLmRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgICBbbnpTaXplXT1cInVpLnNpemUhXCJcbiAgICAgICAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXG4gICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiY2hhbmdlKCRldmVudClcIlxuICAgICAgICAgIFthdHRyLm1heExlbmd0aF09XCJzY2hlbWEubWF4TGVuZ3RoIHx8IG51bGxcIlxuICAgICAgICAgIFthdHRyLnBsYWNlaG9sZGVyXT1cInVpLnBsYWNlaG9sZGVyXCJcbiAgICAgICAgICBbbnpBdXRvc2l6ZV09XCJhdXRvc2l6ZVwiXG4gICAgICAgICAgW256Qm9yZGVybGVzc109XCJ1aS5ib3JkZXJsZXNzXCJcbiAgICAgICAgICAoZm9jdXMpPVwiZm9jdXMoJGV2ZW50KVwiXG4gICAgICAgICAgKGJsdXIpPVwiYmx1cigkZXZlbnQpXCJcbiAgICAgICAgPlxuICAgICAgICA8L3RleHRhcmVhPlxuICAgICAgPC9uei10ZXh0YXJlYS1jb3VudD5cbiAgICB9IEBlbHNlIHtcbiAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJpcHRcIiAvPlxuICAgIH1cbiAgPC9zZi1pdGVtLXdyYXA+YCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgVGV4dGFyZWFXaWRnZXQgZXh0ZW5kcyBDb250cm9sVUlXaWRnZXQ8U0ZUZXh0YXJlYVdpZGdldFNjaGVtYT4gaW1wbGVtZW50cyBPbkluaXQge1xuICBhdXRvc2l6ZTogc3RyaW5nIHwgYm9vbGVhbiB8IEF1dG9TaXplVHlwZSA9IHRydWU7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudWkuYXV0b3NpemUgIT0gbnVsbCkge1xuICAgICAgdGhpcy5hdXRvc2l6ZSA9IHRoaXMudWkuYXV0b3NpemU7XG4gICAgfVxuICAgIGlmICh0aGlzLnVpLmNvbXB1dGVDaGFyYWN0ZXJDb3VudCA9PSBudWxsKSB7XG4gICAgICB0aGlzLnVpLmNvbXB1dGVDaGFyYWN0ZXJDb3VudCA9IHYgPT4gdi5sZW5ndGg7XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlKHZhbDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zZXRWYWx1ZSh2YWwpO1xuICAgIGlmICh0aGlzLnVpLmNoYW5nZSkgdGhpcy51aS5jaGFuZ2UodmFsKTtcbiAgfVxuXG4gIGZvY3VzKGU6IEZvY3VzRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy51aS5mb2N1cykgdGhpcy51aS5mb2N1cyhlKTtcbiAgfVxuXG4gIGJsdXIoZTogRm9jdXNFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnVpLmJsdXIpIHRoaXMudWkuYmx1cihlKTtcbiAgfVxufVxuIl19