import { Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, debounceTime, switchMap, takeUntil } from 'rxjs';
import { ControlUIWidget } from '../../widget';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "ng-zorro-antd/core/transition-patch";
import * as i4 from "ng-zorro-antd/input";
import * as i5 from "../../sf-item-wrap.component";
export class StringWidget extends ControlUIWidget {
    constructor() {
        super(...arguments);
        this.change$ = null;
    }
    ngOnInit() {
        const { addOnAfter, addOnAfterIcon, addOnBefore, addOnBeforeIcon, prefix, prefixIcon, suffix, suffixIcon, autofocus } = this.ui;
        this.type = !!(addOnAfter ||
            addOnBefore ||
            addOnAfterIcon ||
            addOnBeforeIcon ||
            prefix ||
            prefixIcon ||
            suffix ||
            suffixIcon)
            ? 'addon'
            : '';
        if (autofocus === true) {
            setTimeout(() => {
                this.injector.get(ElementRef).nativeElement.querySelector(`#${this.id}`).focus();
            }, 20);
        }
        this.initChange();
    }
    reset(value) {
        if (!value && this.schema.format === 'color') {
            this.setValue('#000000');
        }
    }
    initChange() {
        const dueTime = this.ui.changeDebounceTime;
        const changeFn = this.ui.change;
        if (dueTime == null || dueTime <= 0 || changeFn == null)
            return;
        this.change$ = new BehaviorSubject(this.value);
        let obs = this.change$.asObservable().pipe(debounceTime(dueTime), takeUntil(this.sfItemComp.destroy$));
        if (this.ui.changeMap != null) {
            obs = obs.pipe(switchMap(this.ui.changeMap));
        }
        obs.subscribe(val => changeFn(val));
    }
    change(val) {
        this.setValue(val);
        if (this.change$ != null) {
            this.change$.next(val);
            return;
        }
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
    enter(e) {
        if (this.ui.enter)
            this.ui.enter(e);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.7", ngImport: i0, type: StringWidget, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.7", type: StringWidget, selector: "sf-string", usesInheritance: true, ngImport: i0, template: `<sf-item-wrap
    [id]="id"
    [schema]="schema"
    [ui]="ui"
    [showError]="showError"
    [error]="error"
    [showTitle]="schema.title"
  >
    <ng-template #ipt>
      <input
        nz-input
        [attr.id]="id"
        [disabled]="disabled"
        [attr.disabled]="disabled"
        [nzSize]="ui.size!"
        [nzBorderless]="ui.borderless"
        [ngModel]="value"
        (ngModelChange)="change($event)"
        [attr.maxLength]="schema.maxLength || null"
        [attr.type]="ui.type || 'text'"
        [attr.placeholder]="ui.placeholder"
        [attr.autocomplete]="ui.autocomplete"
        [attr.autoFocus]="ui.autofocus"
        (keyup.enter)="enter($event)"
        (focus)="focus($event)"
        (blur)="blur($event)"
      />
    </ng-template>

    @if (type === 'addon') {
      <nz-input-group
        [nzAddOnBefore]="ui.addOnBefore"
        [nzAddOnAfter]="ui.addOnAfter"
        [nzAddOnBeforeIcon]="ui.addOnBeforeIcon"
        [nzAddOnAfterIcon]="ui.addOnAfterIcon"
        [nzPrefix]="ui.prefix"
        [nzPrefixIcon]="ui.prefixIcon"
        [nzSuffix]="ui.suffix"
        [nzSuffixIcon]="ui.suffixIcon"
      >
        <ng-template [ngTemplateOutlet]="ipt" />
      </nz-input-group>
    } @else {
      <ng-template [ngTemplateOutlet]="ipt" />
    }
  </sf-item-wrap>`, isInline: true, dependencies: [{ kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i3.ɵNzTransitionPatchDirective, selector: "[nz-button], nz-button-group, [nz-icon], [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group", inputs: ["hidden"] }, { kind: "directive", type: i4.NzInputDirective, selector: "input[nz-input],textarea[nz-input]", inputs: ["nzBorderless", "nzSize", "nzStepperless", "nzStatus", "disabled"], exportAs: ["nzInput"] }, { kind: "component", type: i4.NzInputGroupComponent, selector: "nz-input-group", inputs: ["nzAddOnBeforeIcon", "nzAddOnAfterIcon", "nzPrefixIcon", "nzSuffixIcon", "nzAddOnBefore", "nzAddOnAfter", "nzPrefix", "nzStatus", "nzSuffix", "nzSize", "nzSearch", "nzCompact"], exportAs: ["nzInputGroup"] }, { kind: "directive", type: i4.NzInputGroupWhitSuffixOrPrefixDirective, selector: "nz-input-group[nzSuffix], nz-input-group[nzPrefix]" }, { kind: "component", type: i5.SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.7", ngImport: i0, type: StringWidget, decorators: [{
            type: Component,
            args: [{
                    selector: 'sf-string',
                    template: `<sf-item-wrap
    [id]="id"
    [schema]="schema"
    [ui]="ui"
    [showError]="showError"
    [error]="error"
    [showTitle]="schema.title"
  >
    <ng-template #ipt>
      <input
        nz-input
        [attr.id]="id"
        [disabled]="disabled"
        [attr.disabled]="disabled"
        [nzSize]="ui.size!"
        [nzBorderless]="ui.borderless"
        [ngModel]="value"
        (ngModelChange)="change($event)"
        [attr.maxLength]="schema.maxLength || null"
        [attr.type]="ui.type || 'text'"
        [attr.placeholder]="ui.placeholder"
        [attr.autocomplete]="ui.autocomplete"
        [attr.autoFocus]="ui.autofocus"
        (keyup.enter)="enter($event)"
        (focus)="focus($event)"
        (blur)="blur($event)"
      />
    </ng-template>

    @if (type === 'addon') {
      <nz-input-group
        [nzAddOnBefore]="ui.addOnBefore"
        [nzAddOnAfter]="ui.addOnAfter"
        [nzAddOnBeforeIcon]="ui.addOnBeforeIcon"
        [nzAddOnAfterIcon]="ui.addOnAfterIcon"
        [nzPrefix]="ui.prefix"
        [nzPrefixIcon]="ui.prefixIcon"
        [nzSuffix]="ui.suffix"
        [nzSuffixIcon]="ui.suffixIcon"
      >
        <ng-template [ngTemplateOutlet]="ipt" />
      </nz-input-group>
    } @else {
      <ng-template [ngTemplateOutlet]="ipt" />
    }
  </sf-item-wrap>`,
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm0vc3JjL3dpZGdldHMvc3RyaW5nL3N0cmluZy53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakYsT0FBTyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUczRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7Ozs7O0FBc0QvQyxNQUFNLE9BQU8sWUFBYSxTQUFRLGVBQXFDO0lBbkR2RTs7UUFxRFUsWUFBTyxHQUFtQyxJQUFJLENBQUM7S0EyRXhEO0lBekVDLFFBQVE7UUFDTixNQUFNLEVBQ0osVUFBVSxFQUNWLGNBQWMsRUFDZCxXQUFXLEVBQ1gsZUFBZSxFQUNmLE1BQU0sRUFDTixVQUFVLEVBQ1YsTUFBTSxFQUNOLFVBQVUsRUFDVixTQUFTLEVBQ1YsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ1osSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FDWixVQUFVO1lBQ1YsV0FBVztZQUNYLGNBQWM7WUFDZCxlQUFlO1lBQ2YsTUFBTTtZQUNOLFVBQVU7WUFDVixNQUFNO1lBQ04sVUFBVSxDQUNYO1lBQ0MsQ0FBQyxDQUFDLE9BQU87WUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ1AsSUFBSSxTQUFTLEtBQUssSUFBSSxFQUFFLENBQUM7WUFDdkIsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFFWCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxhQUE2QixDQUFDLGFBQWEsQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FDekYsQ0FBQyxLQUFLLEVB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bXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBkZWJvdW5jZVRpbWUsIHN3aXRjaE1hcCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFNGVmFsdWUgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQ29udHJvbFVJV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcbmltcG9ydCB7IFNGU3RyaW5nV2lkZ2V0U2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1zdHJpbmcnLFxuICB0ZW1wbGF0ZTogYDxzZi1pdGVtLXdyYXBcbiAgICBbaWRdPVwiaWRcIlxuICAgIFtzY2hlbWFdPVwic2NoZW1hXCJcbiAgICBbdWldPVwidWlcIlxuICAgIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCJcbiAgICBbZXJyb3JdPVwiZXJyb3JcIlxuICAgIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCJcbiAgPlxuICAgIDxuZy10ZW1wbGF0ZSAjaXB0PlxuICAgICAgPGlucHV0XG4gICAgICAgIG56LWlucHV0XG4gICAgICAgIFthdHRyLmlkXT1cImlkXCJcbiAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgW2F0dHIuZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICBbbnpTaXplXT1cInVpLnNpemUhXCJcbiAgICAgICAgW256Qm9yZGVybGVzc109XCJ1aS5ib3JkZXJsZXNzXCJcbiAgICAgICAgW25nTW9kZWxdPVwidmFsdWVcIlxuICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJjaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgIFthdHRyLm1heExlbmd0aF09XCJzY2hlbWEubWF4TGVuZ3RoIHx8IG51bGxcIlxuICAgICAgICBbYXR0ci50eXBlXT1cInVpLnR5cGUgfHwgJ3RleHQnXCJcbiAgICAgICAgW2F0dHIucGxhY2Vob2xkZXJdPVwidWkucGxhY2Vob2xkZXJcIlxuICAgICAgICBbYXR0ci5hdXRvY29tcGxldGVdPVwidWkuYXV0b2NvbXBsZXRlXCJcbiAgICAgICAgW2F0dHIuYXV0b0ZvY3VzXT1cInVpLmF1dG9mb2N1c1wiXG4gICAgICAgIChrZXl1cC5lbnRlcik9XCJlbnRlcigkZXZlbnQpXCJcbiAgICAgICAgKGZvY3VzKT1cImZvY3VzKCRldmVudClcIlxuICAgICAgICAoYmx1cik9XCJibHVyKCRldmVudClcIlxuICAgICAgLz5cbiAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgQGlmICh0eXBlID09PSAnYWRkb24nKSB7XG4gICAgICA8bnotaW5wdXQtZ3JvdXBcbiAgICAgICAgW256QWRkT25CZWZvcmVdPVwidWkuYWRkT25CZWZvcmVcIlxuICAgICAgICBbbnpBZGRPbkFmdGVyXT1cInVpLmFkZE9uQWZ0ZXJcIlxuICAgICAgICBbbnpBZGRPbkJlZm9yZUljb25dPVwidWkuYWRkT25CZWZvcmVJY29uXCJcbiAgICAgICAgW256QWRkT25BZnRlckljb25dPVwidWkuYWRkT25BZnRlckljb25cIlxuICAgICAgICBbbnpQcmVmaXhdPVwidWkucHJlZml4XCJcbiAgICAgICAgW256UHJlZml4SWNvbl09XCJ1aS5wcmVmaXhJY29uXCJcbiAgICAgICAgW256U3VmZml4XT1cInVpLnN1ZmZpeFwiXG4gICAgICAgIFtuelN1ZmZpeEljb25dPVwidWkuc3VmZml4SWNvblwiXG4gICAgICA+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJpcHRcIiAvPlxuICAgICAgPC9uei1pbnB1dC1ncm91cD5cbiAgICB9IEBlbHNlIHtcbiAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJpcHRcIiAvPlxuICAgIH1cbiAgPC9zZi1pdGVtLXdyYXA+YCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RyaW5nV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFVJV2lkZ2V0PFNGU3RyaW5nV2lkZ2V0U2NoZW1hPiBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHR5cGUhOiBzdHJpbmc7XG4gIHByaXZhdGUgY2hhbmdlJDogQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4gfCBudWxsID0gbnVsbDtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCB7XG4gICAgICBhZGRPbkFmdGVyLFxuICAgICAgYWRkT25BZnRlckljb24sXG4gICAgICBhZGRPbkJlZm9yZSxcbiAgICAgIGFkZE9uQmVmb3JlSWNvbixcbiAgICAgIHByZWZpeCxcbiAgICAgIHByZWZpeEljb24sXG4gICAgICBzdWZmaXgsXG4gICAgICBzdWZmaXhJY29uLFxuICAgICAgYXV0b2ZvY3VzXG4gICAgfSA9IHRoaXMudWk7XG4gICAgdGhpcy50eXBlID0gISEoXG4gICAgICBhZGRPbkFmdGVyIHx8XG4gICAgICBhZGRPbkJlZm9yZSB8fFxuICAgICAgYWRkT25BZnRlckljb24gfHxcbiAgICAgIGFkZE9uQmVmb3JlSWNvbiB8fFxuICAgICAgcHJlZml4IHx8XG4gICAgICBwcmVmaXhJY29uIHx8XG4gICAgICBzdWZmaXggfHxcbiAgICAgIHN1ZmZpeEljb25cbiAgICApXG4gICAgICA/ICdhZGRvbidcbiAgICAgIDogJyc7XG4gICAgaWYgKGF1dG9mb2N1cyA9PT0gdHJ1ZSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIChcbiAgICAgICAgICAodGhpcy5pbmplY3Rvci5nZXQoRWxlbWVudFJlZikubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkucXVlcnlTZWxlY3RvcihgIyR7dGhpcy5pZH1gKSBhcyBIVE1MRWxlbWVudFxuICAgICAgICApLmZvY3VzKCk7XG4gICAgICB9LCAyMCk7XG4gICAgfVxuICAgIHRoaXMuaW5pdENoYW5nZSgpO1xuICB9XG5cbiAgcmVzZXQodmFsdWU6IFNGVmFsdWUpOiB2b2lkIHtcbiAgICBpZiAoIXZhbHVlICYmIHRoaXMuc2NoZW1hLmZvcm1hdCA9PT0gJ2NvbG9yJykge1xuICAgICAgdGhpcy5zZXRWYWx1ZSgnIzAwMDAwMCcpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaW5pdENoYW5nZSgpOiB2b2lkIHtcbiAgICBjb25zdCBkdWVUaW1lID0gdGhpcy51aS5jaGFuZ2VEZWJvdW5jZVRpbWU7XG4gICAgY29uc3QgY2hhbmdlRm4gPSB0aGlzLnVpLmNoYW5nZTtcbiAgICBpZiAoZHVlVGltZSA9PSBudWxsIHx8IGR1ZVRpbWUgPD0gMCB8fCBjaGFuZ2VGbiA9PSBudWxsKSByZXR1cm47XG5cbiAgICB0aGlzLmNoYW5nZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4odGhpcy52YWx1ZSk7XG4gICAgbGV0IG9icyA9IHRoaXMuY2hhbmdlJC5hc09ic2VydmFibGUoKS5waXBlKGRlYm91bmNlVGltZShkdWVUaW1lKSwgdGFrZVVudGlsKHRoaXMuc2ZJdGVtQ29tcCEuZGVzdHJveSQpKTtcbiAgICBpZiAodGhpcy51aS5jaGFuZ2VNYXAgIT0gbnVsbCkge1xuICAgICAgb2JzID0gb2JzLnBpcGUoc3dpdGNoTWFwKHRoaXMudWkuY2hhbmdlTWFwKSk7XG4gICAgfVxuICAgIG9icy5zdWJzY3JpYmUodmFsID0+IGNoYW5nZUZuKHZhbCkpO1xuICB9XG5cbiAgY2hhbmdlKHZhbDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zZXRWYWx1ZSh2YWwpO1xuICAgIGlmICh0aGlzLmNoYW5nZSQgIT0gbnVsbCkge1xuICAgICAgdGhpcy5jaGFuZ2UkLm5leHQodmFsKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMudWkuY2hhbmdlKSB0aGlzLnVpLmNoYW5nZSh2YWwpO1xuICB9XG5cbiAgZm9jdXMoZTogRm9jdXNFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnVpLmZvY3VzKSB0aGlzLnVpLmZvY3VzKGUpO1xuICB9XG5cbiAgYmx1cihlOiBGb2N1c0V2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMudWkuYmx1cikgdGhpcy51aS5ibHVyKGUpO1xuICB9XG5cbiAgZW50ZXIoZTogRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy51aS5lbnRlcikgdGhpcy51aS5lbnRlcihlKTtcbiAgfVxufVxuIl19