import { Component, ViewEncapsulation } from '@angular/core';
import { ControlUIWidget } from '../../widget';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "ng-zorro-antd/input";
import * as i4 from "../../sf-item-wrap.component";
class TextareaWidget extends ControlUIWidget {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.6", ngImport: i0, type: TextareaWidget, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.6", type: TextareaWidget, selector: "sf-textarea", usesInheritance: true, ngImport: i0, template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <ng-template #ipt>\n    <textarea\n      nz-input\n      [attr.id]=\"id\"\n      [disabled]=\"disabled\"\n      [attr.disabled]=\"disabled\"\n      [nzSize]=\"ui.size!\"\n      [ngModel]=\"value\"\n      (ngModelChange)=\"change($event)\"\n      [attr.maxLength]=\"schema.maxLength || null\"\n      [attr.placeholder]=\"ui.placeholder\"\n      [nzAutosize]=\"autosize\"\n      [nzBorderless]=\"ui.borderless\"\n      (focus)=\"focus($event)\"\n      (blur)=\"blur($event)\"\n    >\n    </textarea>\n  </ng-template>\n\n  <ng-container *ngIf=\"ui.maxCharacterCount; else ipt\">\n    <nz-textarea-count\n      [nzMaxCharacterCount]=\"ui.maxCharacterCount\"\n      [nzComputeCharacterCount]=\"ui.computeCharacterCount!\"\n    >\n      <textarea\n        nz-input\n        [attr.id]=\"id\"\n        [disabled]=\"disabled\"\n        [attr.disabled]=\"disabled\"\n        [nzSize]=\"ui.size!\"\n        [ngModel]=\"value\"\n        (ngModelChange)=\"change($event)\"\n        [attr.maxLength]=\"schema.maxLength || null\"\n        [attr.placeholder]=\"ui.placeholder\"\n        [nzAutosize]=\"autosize\"\n        [nzBorderless]=\"ui.borderless\"\n        (focus)=\"focus($event)\"\n        (blur)=\"blur($event)\"\n      >\n      </textarea>\n    </nz-textarea-count>\n  </ng-container>\n</sf-item-wrap>\n", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: i3.NzTextareaCountComponent, selector: "nz-textarea-count", inputs: ["nzMaxCharacterCount", "nzComputeCharacterCount", "nzFormatter"] }, { kind: "directive", type: i3.NzInputDirective, selector: "input[nz-input],textarea[nz-input]", inputs: ["nzBorderless", "nzSize", "nzStatus", "disabled"], exportAs: ["nzInput"] }, { kind: "directive", type: i3.NzAutosizeDirective, selector: "textarea[nzAutosize]", inputs: ["nzAutosize"], exportAs: ["nzAutosize"] }, { kind: "component", type: i4.SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
export { TextareaWidget };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.6", ngImport: i0, type: TextareaWidget, decorators: [{
            type: Component,
            args: [{ selector: 'sf-textarea', preserveWhitespaces: false, encapsulation: ViewEncapsulation.None, template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <ng-template #ipt>\n    <textarea\n      nz-input\n      [attr.id]=\"id\"\n      [disabled]=\"disabled\"\n      [attr.disabled]=\"disabled\"\n      [nzSize]=\"ui.size!\"\n      [ngModel]=\"value\"\n      (ngModelChange)=\"change($event)\"\n      [attr.maxLength]=\"schema.maxLength || null\"\n      [attr.placeholder]=\"ui.placeholder\"\n      [nzAutosize]=\"autosize\"\n      [nzBorderless]=\"ui.borderless\"\n      (focus)=\"focus($event)\"\n      (blur)=\"blur($event)\"\n    >\n    </textarea>\n  </ng-template>\n\n  <ng-container *ngIf=\"ui.maxCharacterCount; else ipt\">\n    <nz-textarea-count\n      [nzMaxCharacterCount]=\"ui.maxCharacterCount\"\n      [nzComputeCharacterCount]=\"ui.computeCharacterCount!\"\n    >\n      <textarea\n        nz-input\n        [attr.id]=\"id\"\n        [disabled]=\"disabled\"\n        [attr.disabled]=\"disabled\"\n        [nzSize]=\"ui.size!\"\n        [ngModel]=\"value\"\n        (ngModelChange)=\"change($event)\"\n        [attr.maxLength]=\"schema.maxLength || null\"\n        [attr.placeholder]=\"ui.placeholder\"\n        [nzAutosize]=\"autosize\"\n        [nzBorderless]=\"ui.borderless\"\n        (focus)=\"focus($event)\"\n        (blur)=\"blur($event)\"\n      >\n      </textarea>\n    </nz-textarea-count>\n  </ng-container>\n</sf-item-wrap>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWEud2lkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS9zcmMvd2lkZ2V0cy90ZXh0YXJlYS90ZXh0YXJlYS53aWRnZXQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3NyYy93aWRnZXRzL3RleHRhcmVhL3RleHRhcmVhLndpZGdldC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJckUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7Ozs7O0FBRy9DLE1BTWEsY0FBZSxTQUFRLGVBQXVDO0lBTjNFOztRQU9FLGFBQVEsR0FBb0MsSUFBSSxDQUFDO0tBdUJsRDtJQXJCQyxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQztTQUNsQztRQUNELElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxxQkFBcUIsSUFBSSxJQUFJLEVBQUU7WUFDekMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxxQkFBcUIsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7U0FDL0M7SUFDSCxDQUFDO0lBRUQsTUFBTSxDQUFDLEdBQVc7UUFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTTtZQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxLQUFLLENBQUMsQ0FBYTtRQUNqQixJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSztZQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxJQUFJLENBQUMsQ0FBYTtRQUNoQixJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSTtZQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7OEdBdkJVLGNBQWM7a0dBQWQsY0FBYywwRUNiM0IsNDVDQTRDQTs7U0QvQmEsY0FBYzsyRkFBZCxjQUFjO2tCQU4xQixTQUFTOytCQUNFLGFBQWEsdUJBRUYsS0FBSyxpQkFDWCxpQkFBaUIsQ0FBQyxJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB0eXBlIHsgQXV0b1NpemVUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pbnB1dCc7XG5cbmltcG9ydCB7IENvbnRyb2xVSVdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5pbXBvcnQgeyBTRlRleHRhcmVhV2lkZ2V0U2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi10ZXh0YXJlYScsXG4gIHRlbXBsYXRlVXJsOiAnLi90ZXh0YXJlYS53aWRnZXQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFRleHRhcmVhV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFVJV2lkZ2V0PFNGVGV4dGFyZWFXaWRnZXRTY2hlbWE+IGltcGxlbWVudHMgT25Jbml0IHtcbiAgYXV0b3NpemU6IHN0cmluZyB8IGJvb2xlYW4gfCBBdXRvU2l6ZVR5cGUgPSB0cnVlO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnVpLmF1dG9zaXplICE9IG51bGwpIHtcbiAgICAgIHRoaXMuYXV0b3NpemUgPSB0aGlzLnVpLmF1dG9zaXplO1xuICAgIH1cbiAgICBpZiAodGhpcy51aS5jb21wdXRlQ2hhcmFjdGVyQ291bnQgPT0gbnVsbCkge1xuICAgICAgdGhpcy51aS5jb21wdXRlQ2hhcmFjdGVyQ291bnQgPSB2ID0+IHYubGVuZ3RoO1xuICAgIH1cbiAgfVxuXG4gIGNoYW5nZSh2YWw6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc2V0VmFsdWUodmFsKTtcbiAgICBpZiAodGhpcy51aS5jaGFuZ2UpIHRoaXMudWkuY2hhbmdlKHZhbCk7XG4gIH1cblxuICBmb2N1cyhlOiBGb2N1c0V2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMudWkuZm9jdXMpIHRoaXMudWkuZm9jdXMoZSk7XG4gIH1cblxuICBibHVyKGU6IEZvY3VzRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy51aS5ibHVyKSB0aGlzLnVpLmJsdXIoZSk7XG4gIH1cbn1cbiIsIjxzZi1pdGVtLXdyYXAgW2lkXT1cImlkXCIgW3NjaGVtYV09XCJzY2hlbWFcIiBbdWldPVwidWlcIiBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiIFtlcnJvcl09XCJlcnJvclwiIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCI+XG4gIDxuZy10ZW1wbGF0ZSAjaXB0PlxuICAgIDx0ZXh0YXJlYVxuICAgICAgbnotaW5wdXRcbiAgICAgIFthdHRyLmlkXT1cImlkXCJcbiAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICBbYXR0ci5kaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICBbbnpTaXplXT1cInVpLnNpemUhXCJcbiAgICAgIFtuZ01vZGVsXT1cInZhbHVlXCJcbiAgICAgIChuZ01vZGVsQ2hhbmdlKT1cImNoYW5nZSgkZXZlbnQpXCJcbiAgICAgIFthdHRyLm1heExlbmd0aF09XCJzY2hlbWEubWF4TGVuZ3RoIHx8IG51bGxcIlxuICAgICAgW2F0dHIucGxhY2Vob2xkZXJdPVwidWkucGxhY2Vob2xkZXJcIlxuICAgICAgW256QXV0b3NpemVdPVwiYXV0b3NpemVcIlxuICAgICAgW256Qm9yZGVybGVzc109XCJ1aS5ib3JkZXJsZXNzXCJcbiAgICAgIChmb2N1cyk9XCJmb2N1cygkZXZlbnQpXCJcbiAgICAgIChibHVyKT1cImJsdXIoJGV2ZW50KVwiXG4gICAgPlxuICAgIDwvdGV4dGFyZWE+XG4gIDwvbmctdGVtcGxhdGU+XG5cbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInVpLm1heENoYXJhY3RlckNvdW50OyBlbHNlIGlwdFwiPlxuICAgIDxuei10ZXh0YXJlYS1jb3VudFxuICAgICAgW256TWF4Q2hhcmFjdGVyQ291bnRdPVwidWkubWF4Q2hhcmFjdGVyQ291bnRcIlxuICAgICAgW256Q29tcHV0ZUNoYXJhY3RlckNvdW50XT1cInVpLmNvbXB1dGVDaGFyYWN0ZXJDb3VudCFcIlxuICAgID5cbiAgICAgIDx0ZXh0YXJlYVxuICAgICAgICBuei1pbnB1dFxuICAgICAgICBbYXR0ci5pZF09XCJpZFwiXG4gICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICAgIFthdHRyLmRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgICAgW256U2l6ZV09XCJ1aS5zaXplIVwiXG4gICAgICAgIFtuZ01vZGVsXT1cInZhbHVlXCJcbiAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiY2hhbmdlKCRldmVudClcIlxuICAgICAgICBbYXR0ci5tYXhMZW5ndGhdPVwic2NoZW1hLm1heExlbmd0aCB8fCBudWxsXCJcbiAgICAgICAgW2F0dHIucGxhY2Vob2xkZXJdPVwidWkucGxhY2Vob2xkZXJcIlxuICAgICAgICBbbnpBdXRvc2l6ZV09XCJhdXRvc2l6ZVwiXG4gICAgICAgIFtuekJvcmRlcmxlc3NdPVwidWkuYm9yZGVybGVzc1wiXG4gICAgICAgIChmb2N1cyk9XCJmb2N1cygkZXZlbnQpXCJcbiAgICAgICAgKGJsdXIpPVwiYmx1cigkZXZlbnQpXCJcbiAgICAgID5cbiAgICAgIDwvdGV4dGFyZWE+XG4gICAgPC9uei10ZXh0YXJlYS1jb3VudD5cbiAgPC9uZy1jb250YWluZXI+XG48L3NmLWl0ZW0td3JhcD5cbiJdfQ==