import * as i5 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Component, ViewEncapsulation, ViewChild, NgModule } from '@angular/core';
import * as i1 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import * as i1$1 from '@delon/form';
import { ControlUIWidget, getData, getEnum, DelonFormModule } from '@delon/form';
import * as i4 from 'ng-zorro-antd/input';
import { NzInputModule } from 'ng-zorro-antd/input';
import * as i3 from 'ng-zorro-antd/mention';
import { NzMentionModule } from 'ng-zorro-antd/mention';
import { tap, map } from 'rxjs';

class MentionWidget extends ControlUIWidget {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MentionWidget, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: MentionWidget, selector: "sf-mention", viewQueries: [{ propertyName: "mentionChild", first: true, predicate: ["mentions"], descendants: true, static: true }], usesInheritance: true, ngImport: i0, template: `<sf-item-wrap
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
  </sf-item-wrap>`, isInline: true, dependencies: [{ kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: i1$1.SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }, { kind: "component", type: i3.NzMentionComponent, selector: "nz-mention", inputs: ["nzValueWith", "nzPrefix", "nzLoading", "nzNotFoundContent", "nzPlacement", "nzSuggestions", "nzStatus"], outputs: ["nzOnSelect", "nzOnSearchChange"], exportAs: ["nzMention"] }, { kind: "directive", type: i3.NzMentionTriggerDirective, selector: "input[nzMentionTrigger], textarea[nzMentionTrigger]", outputs: ["onFocusin", "onBlur", "onInput", "onKeydown", "onClick"], exportAs: ["nzMentionTrigger"] }, { kind: "directive", type: i4.NzInputDirective, selector: "input[nz-input],textarea[nz-input]", inputs: ["nzBorderless", "nzSize", "nzStepperless", "nzStatus", "disabled"], exportAs: ["nzInput"] }, { kind: "directive", type: i4.NzAutosizeDirective, selector: "textarea[nzAutosize]", inputs: ["nzAutosize"], exportAs: ["nzAutosize"] }, { kind: "directive", type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MentionWidget, decorators: [{
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

class MentionWidgetModule {
    constructor(widgetRegistry) {
        widgetRegistry.register(MentionWidget.KEY, MentionWidget);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MentionWidgetModule, deps: [{ token: i1$1.WidgetRegistry }], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: MentionWidgetModule, declarations: [MentionWidget], imports: [FormsModule, DelonFormModule, NzMentionModule, NzInputModule, CommonModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MentionWidgetModule, imports: [FormsModule, DelonFormModule, NzMentionModule, NzInputModule, CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: MentionWidgetModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [FormsModule, DelonFormModule, NzMentionModule, NzInputModule, CommonModule],
                    declarations: [MentionWidget]
                }]
        }], ctorParameters: function () { return [{ type: i1$1.WidgetRegistry }]; } });

/**
 * Generated bundle index. Do not edit.
 */

export { MentionWidget, MentionWidgetModule };
//# sourceMappingURL=widgets-mention.mjs.map
