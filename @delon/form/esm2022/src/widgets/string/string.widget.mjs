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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: StringWidget, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.9", type: StringWidget, selector: "sf-string", usesInheritance: true, ngImport: i0, template: `<sf-item-wrap
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: StringWidget, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm0vc3JjL3dpZGdldHMvc3RyaW5nL3N0cmluZy53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakYsT0FBTyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUkzRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7Ozs7O0FBcUQvQyxNQUFNLE9BQU8sWUFBYSxTQUFRLGVBQXFDO0lBbkR2RTs7UUFxRFUsWUFBTyxHQUFtQyxJQUFJLENBQUM7S0EyRXhEO0lBekVDLFFBQVE7UUFDTixNQUFNLEVBQ0osVUFBVSxFQUNWLGNBQWMsRUFDZCxXQUFXLEVBQ1gsZUFBZSxFQUNmLE1BQU0sRUFDTixVQUFVLEVBQ1YsTUFBTSxFQUNOLFVBQVUsRUFDVixTQUFTLEVBQ1YsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ1osSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FDWixVQUFVO1lBQ1YsV0FBVztZQUNYLGNBQWM7WUFDZCxlQUFlO1lBQ2YsTUFBTTtZQUNOLFVBQVU7WUFDVixNQUFNO1lBQ04sVUFBVSxDQUNYO1lBQ0MsQ0FBQyxDQUFDLE9BQU87WUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ1AsSUFBSSxTQUFTLEtBQUssSUFBSSxFQUFFO1lBQ3RCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBRVgsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsYUFBNkIsQ0FBQyxhQUFhLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRSxFQUFFLENBQ3pGLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDWixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDUjtRQUNELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsS0FBSyxDQUFDLEtBQWM7UUFDbEIsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxPQUFPLEVBQUU7WUFDNUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUMxQjtJQUNILENBQUM7SUFFTyxVQUFVO1FBQ2hCLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsa0JBQWtCLENBQUM7UUFDM0MsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFDaEMsSUFBSSxPQUFPLElBQUksSUFBSSxJQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksUUFBUSxJQUFJLElBQUk7WUFBRSxPQUFPO1FBRWhFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxlQUFlLENBQVMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3hHLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLElBQUksSUFBSSxFQUFFO1lBQzdCLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7U0FDOUM7UUFDRCxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELE1BQU0sQ0FBQyxHQUFXO1FBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkIsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksRUFBRTtZQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN2QixPQUFPO1NBQ1I7UUFDRCxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTTtZQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxLQUFLLENBQUMsQ0FBYTtRQUNqQixJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSztZQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxJQUFJLENBQUMsQ0FBYTtRQUNoQixJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSTtZQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxLQUFLLENBQUMsQ0FBUTtRQUNaLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLO1lBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQzs4R0E1RVUsWUFBWTtrR0FBWixZQUFZLHdFQWpEYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQTZDTTs7MkZBSUwsWUFBWTtrQkFuRHhCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQTZDTTtvQkFDaEIsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIGRlYm91bmNlVGltZSwgc3dpdGNoTWFwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgU0ZTdHJpbmdXaWRnZXRTY2hlbWEgfSBmcm9tICcuL3NjaGVtYSc7XG5pbXBvcnQgeyBTRlZhbHVlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlJztcbmltcG9ydCB7IENvbnRyb2xVSVdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLXN0cmluZycsXG4gIHRlbXBsYXRlOiBgPHNmLWl0ZW0td3JhcFxuICAgIFtpZF09XCJpZFwiXG4gICAgW3NjaGVtYV09XCJzY2hlbWFcIlxuICAgIFt1aV09XCJ1aVwiXG4gICAgW3Nob3dFcnJvcl09XCJzaG93RXJyb3JcIlxuICAgIFtlcnJvcl09XCJlcnJvclwiXG4gICAgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIlxuICA+XG4gICAgPG5nLXRlbXBsYXRlICNpcHQ+XG4gICAgICA8aW5wdXRcbiAgICAgICAgbnotaW5wdXRcbiAgICAgICAgW2F0dHIuaWRdPVwiaWRcIlxuICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICBbYXR0ci5kaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgIFtuelNpemVdPVwidWkuc2l6ZSFcIlxuICAgICAgICBbbnpCb3JkZXJsZXNzXT1cInVpLmJvcmRlcmxlc3NcIlxuICAgICAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXG4gICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cImNoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgW2F0dHIubWF4TGVuZ3RoXT1cInNjaGVtYS5tYXhMZW5ndGggfHwgbnVsbFwiXG4gICAgICAgIFthdHRyLnR5cGVdPVwidWkudHlwZSB8fCAndGV4dCdcIlxuICAgICAgICBbYXR0ci5wbGFjZWhvbGRlcl09XCJ1aS5wbGFjZWhvbGRlclwiXG4gICAgICAgIFthdHRyLmF1dG9jb21wbGV0ZV09XCJ1aS5hdXRvY29tcGxldGVcIlxuICAgICAgICBbYXR0ci5hdXRvRm9jdXNdPVwidWkuYXV0b2ZvY3VzXCJcbiAgICAgICAgKGtleXVwLmVudGVyKT1cImVudGVyKCRldmVudClcIlxuICAgICAgICAoZm9jdXMpPVwiZm9jdXMoJGV2ZW50KVwiXG4gICAgICAgIChibHVyKT1cImJsdXIoJGV2ZW50KVwiXG4gICAgICAvPlxuICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICBAaWYgKHR5cGUgPT09ICdhZGRvbicpIHtcbiAgICAgIDxuei1pbnB1dC1ncm91cFxuICAgICAgICBbbnpBZGRPbkJlZm9yZV09XCJ1aS5hZGRPbkJlZm9yZVwiXG4gICAgICAgIFtuekFkZE9uQWZ0ZXJdPVwidWkuYWRkT25BZnRlclwiXG4gICAgICAgIFtuekFkZE9uQmVmb3JlSWNvbl09XCJ1aS5hZGRPbkJlZm9yZUljb25cIlxuICAgICAgICBbbnpBZGRPbkFmdGVySWNvbl09XCJ1aS5hZGRPbkFmdGVySWNvblwiXG4gICAgICAgIFtuelByZWZpeF09XCJ1aS5wcmVmaXhcIlxuICAgICAgICBbbnpQcmVmaXhJY29uXT1cInVpLnByZWZpeEljb25cIlxuICAgICAgICBbbnpTdWZmaXhdPVwidWkuc3VmZml4XCJcbiAgICAgICAgW256U3VmZml4SWNvbl09XCJ1aS5zdWZmaXhJY29uXCJcbiAgICAgID5cbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImlwdFwiIC8+XG4gICAgICA8L256LWlucHV0LWdyb3VwPlxuICAgIH0gQGVsc2Uge1xuICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImlwdFwiIC8+XG4gICAgfVxuICA8L3NmLWl0ZW0td3JhcD5gLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJpbmdXaWRnZXQgZXh0ZW5kcyBDb250cm9sVUlXaWRnZXQ8U0ZTdHJpbmdXaWRnZXRTY2hlbWE+IGltcGxlbWVudHMgT25Jbml0IHtcbiAgdHlwZSE6IHN0cmluZztcbiAgcHJpdmF0ZSBjaGFuZ2UkOiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPiB8IG51bGwgPSBudWxsO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHtcbiAgICAgIGFkZE9uQWZ0ZXIsXG4gICAgICBhZGRPbkFmdGVySWNvbixcbiAgICAgIGFkZE9uQmVmb3JlLFxuICAgICAgYWRkT25CZWZvcmVJY29uLFxuICAgICAgcHJlZml4LFxuICAgICAgcHJlZml4SWNvbixcbiAgICAgIHN1ZmZpeCxcbiAgICAgIHN1ZmZpeEljb24sXG4gICAgICBhdXRvZm9jdXNcbiAgICB9ID0gdGhpcy51aTtcbiAgICB0aGlzLnR5cGUgPSAhIShcbiAgICAgIGFkZE9uQWZ0ZXIgfHxcbiAgICAgIGFkZE9uQmVmb3JlIHx8XG4gICAgICBhZGRPbkFmdGVySWNvbiB8fFxuICAgICAgYWRkT25CZWZvcmVJY29uIHx8XG4gICAgICBwcmVmaXggfHxcbiAgICAgIHByZWZpeEljb24gfHxcbiAgICAgIHN1ZmZpeCB8fFxuICAgICAgc3VmZml4SWNvblxuICAgIClcbiAgICAgID8gJ2FkZG9uJ1xuICAgICAgOiAnJztcbiAgICBpZiAoYXV0b2ZvY3VzID09PSB0cnVlKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgKFxuICAgICAgICAgICh0aGlzLmluamVjdG9yLmdldChFbGVtZW50UmVmKS5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLmlkfWApIGFzIEhUTUxFbGVtZW50XG4gICAgICAgICkuZm9jdXMoKTtcbiAgICAgIH0sIDIwKTtcbiAgICB9XG4gICAgdGhpcy5pbml0Q2hhbmdlKCk7XG4gIH1cblxuICByZXNldCh2YWx1ZTogU0ZWYWx1ZSk6IHZvaWQge1xuICAgIGlmICghdmFsdWUgJiYgdGhpcy5zY2hlbWEuZm9ybWF0ID09PSAnY29sb3InKSB7XG4gICAgICB0aGlzLnNldFZhbHVlKCcjMDAwMDAwJyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpbml0Q2hhbmdlKCk6IHZvaWQge1xuICAgIGNvbnN0IGR1ZVRpbWUgPSB0aGlzLnVpLmNoYW5nZURlYm91bmNlVGltZTtcbiAgICBjb25zdCBjaGFuZ2VGbiA9IHRoaXMudWkuY2hhbmdlO1xuICAgIGlmIChkdWVUaW1lID09IG51bGwgfHwgZHVlVGltZSA8PSAwIHx8IGNoYW5nZUZuID09IG51bGwpIHJldHVybjtcblxuICAgIHRoaXMuY2hhbmdlJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPih0aGlzLnZhbHVlKTtcbiAgICBsZXQgb2JzID0gdGhpcy5jaGFuZ2UkLmFzT2JzZXJ2YWJsZSgpLnBpcGUoZGVib3VuY2VUaW1lKGR1ZVRpbWUpLCB0YWtlVW50aWwodGhpcy5zZkl0ZW1Db21wIS5kZXN0cm95JCkpO1xuICAgIGlmICh0aGlzLnVpLmNoYW5nZU1hcCAhPSBudWxsKSB7XG4gICAgICBvYnMgPSBvYnMucGlwZShzd2l0Y2hNYXAodGhpcy51aS5jaGFuZ2VNYXApKTtcbiAgICB9XG4gICAgb2JzLnN1YnNjcmliZSh2YWwgPT4gY2hhbmdlRm4odmFsKSk7XG4gIH1cblxuICBjaGFuZ2UodmFsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnNldFZhbHVlKHZhbCk7XG4gICAgaWYgKHRoaXMuY2hhbmdlJCAhPSBudWxsKSB7XG4gICAgICB0aGlzLmNoYW5nZSQubmV4dCh2YWwpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy51aS5jaGFuZ2UpIHRoaXMudWkuY2hhbmdlKHZhbCk7XG4gIH1cblxuICBmb2N1cyhlOiBGb2N1c0V2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMudWkuZm9jdXMpIHRoaXMudWkuZm9jdXMoZSk7XG4gIH1cblxuICBibHVyKGU6IEZvY3VzRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy51aS5ibHVyKSB0aGlzLnVpLmJsdXIoZSk7XG4gIH1cblxuICBlbnRlcihlOiBFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnVpLmVudGVyKSB0aGlzLnVpLmVudGVyKGUpO1xuICB9XG59XG4iXX0=