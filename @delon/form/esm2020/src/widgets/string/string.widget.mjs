import { Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { debounceTime, switchMap, takeUntil } from 'rxjs/operators';
import { ControlUIWidget } from '../../widget';
import * as i0 from "@angular/core";
import * as i1 from "../../sf-item-wrap.component";
import * as i2 from "ng-zorro-antd/input";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/common";
import * as i5 from "ng-zorro-antd/core/transition-patch";
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
}
StringWidget.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: StringWidget, deps: null, target: i0.ɵɵFactoryTarget.Component });
StringWidget.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.0", type: StringWidget, selector: "sf-string", usesInheritance: true, ngImport: i0, template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <ng-template #ipt>\n    <input\n      nz-input\n      [attr.id]=\"id\"\n      [disabled]=\"disabled\"\n      [attr.disabled]=\"disabled\"\n      [nzSize]=\"ui.size!\"\n      [nzBorderless]=\"ui.borderless\"\n      [ngModel]=\"value\"\n      (ngModelChange)=\"change($event)\"\n      [attr.maxLength]=\"schema.maxLength || null\"\n      [attr.type]=\"ui.type || 'text'\"\n      [attr.placeholder]=\"ui.placeholder\"\n      [attr.autocomplete]=\"ui.autocomplete\"\n      [attr.autoFocus]=\"ui.autofocus\"\n      (keyup.enter)=\"enter($event)\"\n      (focus)=\"focus($event)\"\n      (blur)=\"blur($event)\"\n    />\n  </ng-template>\n\n  <ng-container *ngIf=\"type === 'addon'; else ipt\">\n    <nz-input-group\n      [nzAddOnBefore]=\"ui.addOnBefore\"\n      [nzAddOnAfter]=\"ui.addOnAfter\"\n      [nzAddOnBeforeIcon]=\"ui.addOnBeforeIcon\"\n      [nzAddOnAfterIcon]=\"ui.addOnAfterIcon\"\n      [nzPrefix]=\"ui.prefix\"\n      [nzPrefixIcon]=\"ui.prefixIcon\"\n      [nzSuffix]=\"ui.suffix\"\n      [nzSuffixIcon]=\"ui.suffixIcon\"\n    >\n      <ng-template [ngTemplateOutlet]=\"ipt\"></ng-template>\n    </nz-input-group>\n  </ng-container>\n</sf-item-wrap>\n", components: [{ type: i1.SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }, { type: i2.NzInputGroupComponent, selector: "nz-input-group", inputs: ["nzAddOnBeforeIcon", "nzAddOnAfterIcon", "nzPrefixIcon", "nzSuffixIcon", "nzAddOnBefore", "nzAddOnAfter", "nzPrefix", "nzSuffix", "nzSize", "nzSearch", "nzCompact"], exportAs: ["nzInputGroup"] }], directives: [{ type: i2.NzInputDirective, selector: "input[nz-input],textarea[nz-input]", inputs: ["nzBorderless", "nzSize", "disabled"], exportAs: ["nzInput"] }, { type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i3.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i5.ɵNzTransitionPatchDirective, selector: "[nz-button], nz-button-group, [nz-icon], [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group", inputs: ["hidden"] }, { type: i2.NzInputGroupWhitSuffixOrPrefixDirective, selector: "nz-input-group[nzSuffix], nz-input-group[nzPrefix]" }, { type: i4.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: StringWidget, decorators: [{
            type: Component,
            args: [{ selector: 'sf-string', preserveWhitespaces: false, encapsulation: ViewEncapsulation.None, template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <ng-template #ipt>\n    <input\n      nz-input\n      [attr.id]=\"id\"\n      [disabled]=\"disabled\"\n      [attr.disabled]=\"disabled\"\n      [nzSize]=\"ui.size!\"\n      [nzBorderless]=\"ui.borderless\"\n      [ngModel]=\"value\"\n      (ngModelChange)=\"change($event)\"\n      [attr.maxLength]=\"schema.maxLength || null\"\n      [attr.type]=\"ui.type || 'text'\"\n      [attr.placeholder]=\"ui.placeholder\"\n      [attr.autocomplete]=\"ui.autocomplete\"\n      [attr.autoFocus]=\"ui.autofocus\"\n      (keyup.enter)=\"enter($event)\"\n      (focus)=\"focus($event)\"\n      (blur)=\"blur($event)\"\n    />\n  </ng-template>\n\n  <ng-container *ngIf=\"type === 'addon'; else ipt\">\n    <nz-input-group\n      [nzAddOnBefore]=\"ui.addOnBefore\"\n      [nzAddOnAfter]=\"ui.addOnAfter\"\n      [nzAddOnBeforeIcon]=\"ui.addOnBeforeIcon\"\n      [nzAddOnAfterIcon]=\"ui.addOnAfterIcon\"\n      [nzPrefix]=\"ui.prefix\"\n      [nzPrefixIcon]=\"ui.prefixIcon\"\n      [nzSuffix]=\"ui.suffix\"\n      [nzSuffixIcon]=\"ui.suffixIcon\"\n    >\n      <ng-template [ngTemplateOutlet]=\"ipt\"></ng-template>\n    </nz-input-group>\n  </ng-container>\n</sf-item-wrap>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm0vc3JjL3dpZGdldHMvc3RyaW5nL3N0cmluZy53aWRnZXQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3NyYy93aWRnZXRzL3N0cmluZy9zdHJpbmcud2lkZ2V0Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2QyxPQUFPLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUdwRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7Ozs7O0FBUy9DLE1BQU0sT0FBTyxZQUFhLFNBQVEsZUFBcUM7SUFOdkU7O1FBUVUsWUFBTyxHQUFtQyxJQUFJLENBQUM7S0EyRXhEO0lBekVDLFFBQVE7UUFDTixNQUFNLEVBQ0osVUFBVSxFQUNWLGNBQWMsRUFDZCxXQUFXLEVBQ1gsZUFBZSxFQUNmLE1BQU0sRUFDTixVQUFVLEVBQ1YsTUFBTSxFQUNOLFVBQVUsRUFDVixTQUFTLEVBQ1YsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ1osSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FDWixVQUFVO1lBQ1YsV0FBVztZQUNYLGNBQWM7WUFDZCxlQUFlO1lBQ2YsTUFBTTtZQUNOLFVBQVU7WUFDVixNQUFNO1lBQ04sVUFBVSxDQUNYO1lBQ0MsQ0FBQyxDQUFDLE9BQU87WUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ1AsSUFBSSxTQUFTLEtBQUssSUFBSSxFQUFFO1lBQ3RCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBRVgsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsYUFBNkIsQ0FBQyxhQUFhLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRSxFQUFFLENBQ3pGLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDWixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDUjtRQUNELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQsS0FBSyxDQUFDLEtBQWM7UUFDbEIsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxPQUFPLEVBQUU7WUFDNUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUMxQjtJQUNILENBQUM7SUFFTyxVQUFVO1FBQ2hCLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsa0JBQWtCLENBQUM7UUFDM0MsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFDaEMsSUFBSSxPQUFPLElBQUksSUFBSSxJQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksUUFBUSxJQUFJLElBQUk7WUFBRSxPQUFPO1FBRWhFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxlQUFlLENBQVMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3hHLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLElBQUksSUFBSSxFQUFFO1lBQzdCLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7U0FDOUM7UUFDRCxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELE1BQU0sQ0FBQyxHQUFXO1FBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkIsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksRUFBRTtZQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN2QixPQUFPO1NBQ1I7UUFDRCxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTTtZQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxLQUFLLENBQUMsQ0FBYTtRQUNqQixJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSztZQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxJQUFJLENBQUMsQ0FBYTtRQUNoQixJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSTtZQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxLQUFLLENBQUMsQ0FBUTtRQUNaLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLO1lBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7eUdBNUVVLFlBQVk7NkZBQVosWUFBWSx3RUNkekIsb3hDQXFDQTsyRkR2QmEsWUFBWTtrQkFOeEIsU0FBUzsrQkFDRSxXQUFXLHVCQUVBLEtBQUssaUJBQ1gsaUJBQWlCLENBQUMsSUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIHN3aXRjaE1hcCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBTRlZhbHVlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlJztcbmltcG9ydCB7IENvbnRyb2xVSVdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5pbXBvcnQgeyBTRlN0cmluZ1dpZGdldFNjaGVtYSB9IGZyb20gJy4vc2NoZW1hJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2Ytc3RyaW5nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0cmluZy53aWRnZXQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cmluZ1dpZGdldCBleHRlbmRzIENvbnRyb2xVSVdpZGdldDxTRlN0cmluZ1dpZGdldFNjaGVtYT4gaW1wbGVtZW50cyBPbkluaXQge1xuICB0eXBlITogc3RyaW5nO1xuICBwcml2YXRlIGNoYW5nZSQ6IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+IHwgbnVsbCA9IG51bGw7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3Qge1xuICAgICAgYWRkT25BZnRlcixcbiAgICAgIGFkZE9uQWZ0ZXJJY29uLFxuICAgICAgYWRkT25CZWZvcmUsXG4gICAgICBhZGRPbkJlZm9yZUljb24sXG4gICAgICBwcmVmaXgsXG4gICAgICBwcmVmaXhJY29uLFxuICAgICAgc3VmZml4LFxuICAgICAgc3VmZml4SWNvbixcbiAgICAgIGF1dG9mb2N1c1xuICAgIH0gPSB0aGlzLnVpO1xuICAgIHRoaXMudHlwZSA9ICEhKFxuICAgICAgYWRkT25BZnRlciB8fFxuICAgICAgYWRkT25CZWZvcmUgfHxcbiAgICAgIGFkZE9uQWZ0ZXJJY29uIHx8XG4gICAgICBhZGRPbkJlZm9yZUljb24gfHxcbiAgICAgIHByZWZpeCB8fFxuICAgICAgcHJlZml4SWNvbiB8fFxuICAgICAgc3VmZml4IHx8XG4gICAgICBzdWZmaXhJY29uXG4gICAgKVxuICAgICAgPyAnYWRkb24nXG4gICAgICA6ICcnO1xuICAgIGlmIChhdXRvZm9jdXMgPT09IHRydWUpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAoXG4gICAgICAgICAgKHRoaXMuaW5qZWN0b3IuZ2V0KEVsZW1lbnRSZWYpLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLnF1ZXJ5U2VsZWN0b3IoYCMke3RoaXMuaWR9YCkgYXMgSFRNTEVsZW1lbnRcbiAgICAgICAgKS5mb2N1cygpO1xuICAgICAgfSwgMjApO1xuICAgIH1cbiAgICB0aGlzLmluaXRDaGFuZ2UoKTtcbiAgfVxuXG4gIHJlc2V0KHZhbHVlOiBTRlZhbHVlKTogdm9pZCB7XG4gICAgaWYgKCF2YWx1ZSAmJiB0aGlzLnNjaGVtYS5mb3JtYXQgPT09ICdjb2xvcicpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUoJyMwMDAwMDAnKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGluaXRDaGFuZ2UoKTogdm9pZCB7XG4gICAgY29uc3QgZHVlVGltZSA9IHRoaXMudWkuY2hhbmdlRGVib3VuY2VUaW1lO1xuICAgIGNvbnN0IGNoYW5nZUZuID0gdGhpcy51aS5jaGFuZ2U7XG4gICAgaWYgKGR1ZVRpbWUgPT0gbnVsbCB8fCBkdWVUaW1lIDw9IDAgfHwgY2hhbmdlRm4gPT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgdGhpcy5jaGFuZ2UkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KHRoaXMudmFsdWUpO1xuICAgIGxldCBvYnMgPSB0aGlzLmNoYW5nZSQuYXNPYnNlcnZhYmxlKCkucGlwZShkZWJvdW5jZVRpbWUoZHVlVGltZSksIHRha2VVbnRpbCh0aGlzLnNmSXRlbUNvbXAhLmRlc3Ryb3kkKSk7XG4gICAgaWYgKHRoaXMudWkuY2hhbmdlTWFwICE9IG51bGwpIHtcbiAgICAgIG9icyA9IG9icy5waXBlKHN3aXRjaE1hcCh0aGlzLnVpLmNoYW5nZU1hcCkpO1xuICAgIH1cbiAgICBvYnMuc3Vic2NyaWJlKHZhbCA9PiBjaGFuZ2VGbih2YWwpKTtcbiAgfVxuXG4gIGNoYW5nZSh2YWw6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc2V0VmFsdWUodmFsKTtcbiAgICBpZiAodGhpcy5jaGFuZ2UkICE9IG51bGwpIHtcbiAgICAgIHRoaXMuY2hhbmdlJC5uZXh0KHZhbCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLnVpLmNoYW5nZSkgdGhpcy51aS5jaGFuZ2UodmFsKTtcbiAgfVxuXG4gIGZvY3VzKGU6IEZvY3VzRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy51aS5mb2N1cykgdGhpcy51aS5mb2N1cyhlKTtcbiAgfVxuXG4gIGJsdXIoZTogRm9jdXNFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnVpLmJsdXIpIHRoaXMudWkuYmx1cihlKTtcbiAgfVxuXG4gIGVudGVyKGU6IEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMudWkuZW50ZXIpIHRoaXMudWkuZW50ZXIoZSk7XG4gIH1cbn1cbiIsIjxzZi1pdGVtLXdyYXAgW2lkXT1cImlkXCIgW3NjaGVtYV09XCJzY2hlbWFcIiBbdWldPVwidWlcIiBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiIFtlcnJvcl09XCJlcnJvclwiIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCI+XG4gIDxuZy10ZW1wbGF0ZSAjaXB0PlxuICAgIDxpbnB1dFxuICAgICAgbnotaW5wdXRcbiAgICAgIFthdHRyLmlkXT1cImlkXCJcbiAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICBbYXR0ci5kaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICBbbnpTaXplXT1cInVpLnNpemUhXCJcbiAgICAgIFtuekJvcmRlcmxlc3NdPVwidWkuYm9yZGVybGVzc1wiXG4gICAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXG4gICAgICAobmdNb2RlbENoYW5nZSk9XCJjaGFuZ2UoJGV2ZW50KVwiXG4gICAgICBbYXR0ci5tYXhMZW5ndGhdPVwic2NoZW1hLm1heExlbmd0aCB8fCBudWxsXCJcbiAgICAgIFthdHRyLnR5cGVdPVwidWkudHlwZSB8fCAndGV4dCdcIlxuICAgICAgW2F0dHIucGxhY2Vob2xkZXJdPVwidWkucGxhY2Vob2xkZXJcIlxuICAgICAgW2F0dHIuYXV0b2NvbXBsZXRlXT1cInVpLmF1dG9jb21wbGV0ZVwiXG4gICAgICBbYXR0ci5hdXRvRm9jdXNdPVwidWkuYXV0b2ZvY3VzXCJcbiAgICAgIChrZXl1cC5lbnRlcik9XCJlbnRlcigkZXZlbnQpXCJcbiAgICAgIChmb2N1cyk9XCJmb2N1cygkZXZlbnQpXCJcbiAgICAgIChibHVyKT1cImJsdXIoJGV2ZW50KVwiXG4gICAgLz5cbiAgPC9uZy10ZW1wbGF0ZT5cblxuICA8bmctY29udGFpbmVyICpuZ0lmPVwidHlwZSA9PT0gJ2FkZG9uJzsgZWxzZSBpcHRcIj5cbiAgICA8bnotaW5wdXQtZ3JvdXBcbiAgICAgIFtuekFkZE9uQmVmb3JlXT1cInVpLmFkZE9uQmVmb3JlXCJcbiAgICAgIFtuekFkZE9uQWZ0ZXJdPVwidWkuYWRkT25BZnRlclwiXG4gICAgICBbbnpBZGRPbkJlZm9yZUljb25dPVwidWkuYWRkT25CZWZvcmVJY29uXCJcbiAgICAgIFtuekFkZE9uQWZ0ZXJJY29uXT1cInVpLmFkZE9uQWZ0ZXJJY29uXCJcbiAgICAgIFtuelByZWZpeF09XCJ1aS5wcmVmaXhcIlxuICAgICAgW256UHJlZml4SWNvbl09XCJ1aS5wcmVmaXhJY29uXCJcbiAgICAgIFtuelN1ZmZpeF09XCJ1aS5zdWZmaXhcIlxuICAgICAgW256U3VmZml4SWNvbl09XCJ1aS5zdWZmaXhJY29uXCJcbiAgICA+XG4gICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiaXB0XCI+PC9uZy10ZW1wbGF0ZT5cbiAgICA8L256LWlucHV0LWdyb3VwPlxuICA8L25nLWNvbnRhaW5lcj5cbjwvc2YtaXRlbS13cmFwPlxuIl19