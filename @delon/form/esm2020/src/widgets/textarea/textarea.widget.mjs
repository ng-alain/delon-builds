import { Component, ViewEncapsulation } from '@angular/core';
import { ControlUIWidget } from '../../widget';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "ng-zorro-antd/input";
import * as i3 from "../../sf-item-wrap.component";
export class TextareaWidget extends ControlUIWidget {
    constructor() {
        super(...arguments);
        this.autosize = true;
    }
    ngOnInit() {
        const { autosize } = this.ui;
        if (autosize != null) {
            this.autosize = autosize;
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
}
TextareaWidget.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: TextareaWidget, deps: null, target: i0.ɵɵFactoryTarget.Component });
TextareaWidget.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.0", type: TextareaWidget, selector: "sf-textarea", usesInheritance: true, ngImport: i0, template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <textarea\n    nz-input\n    [attr.id]=\"id\"\n    [disabled]=\"disabled\"\n    [attr.disabled]=\"disabled\"\n    [nzSize]=\"ui.size!\"\n    [ngModel]=\"value\"\n    (ngModelChange)=\"change($event)\"\n    [attr.maxLength]=\"schema.maxLength || null\"\n    [attr.placeholder]=\"ui.placeholder\"\n    [nzAutosize]=\"autosize\"\n    [nzBorderless]=\"ui.borderless\"\n    (focus)=\"focus($event)\"\n    (blur)=\"blur($event)\"\n  >\n  </textarea>\n</sf-item-wrap>\n", dependencies: [{ kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i2.NzInputDirective, selector: "input[nz-input],textarea[nz-input]", inputs: ["nzBorderless", "nzSize", "nzStatus", "disabled"], exportAs: ["nzInput"] }, { kind: "directive", type: i2.NzAutosizeDirective, selector: "textarea[nzAutosize]", inputs: ["nzAutosize"], exportAs: ["nzAutosize"] }, { kind: "component", type: i3.SFItemWrapComponent, selector: "sf-item-wrap", inputs: ["id", "schema", "ui", "showError", "error", "showTitle", "title"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: TextareaWidget, decorators: [{
            type: Component,
            args: [{ selector: 'sf-textarea', preserveWhitespaces: false, encapsulation: ViewEncapsulation.None, template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <textarea\n    nz-input\n    [attr.id]=\"id\"\n    [disabled]=\"disabled\"\n    [attr.disabled]=\"disabled\"\n    [nzSize]=\"ui.size!\"\n    [ngModel]=\"value\"\n    (ngModelChange)=\"change($event)\"\n    [attr.maxLength]=\"schema.maxLength || null\"\n    [attr.placeholder]=\"ui.placeholder\"\n    [nzAutosize]=\"autosize\"\n    [nzBorderless]=\"ui.borderless\"\n    (focus)=\"focus($event)\"\n    (blur)=\"blur($event)\"\n  >\n  </textarea>\n</sf-item-wrap>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWEud2lkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS9zcmMvd2lkZ2V0cy90ZXh0YXJlYS90ZXh0YXJlYS53aWRnZXQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3NyYy93aWRnZXRzL3RleHRhcmVhL3RleHRhcmVhLndpZGdldC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJckUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7Ozs7QUFTL0MsTUFBTSxPQUFPLGNBQWUsU0FBUSxlQUF1QztJQU4zRTs7UUFPRSxhQUFRLEdBQTJCLElBQUksQ0FBQztLQXFCekM7SUFuQkMsUUFBUTtRQUNOLE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQzdCLElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtZQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztTQUMxQjtJQUNILENBQUM7SUFFRCxNQUFNLENBQUMsR0FBVztRQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNO1lBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELEtBQUssQ0FBQyxDQUFhO1FBQ2pCLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLO1lBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELElBQUksQ0FBQyxDQUFhO1FBQ2hCLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJO1lBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7MkdBckJVLGNBQWM7K0ZBQWQsY0FBYywwRUNiM0IsdWxCQWtCQTsyRkRMYSxjQUFjO2tCQU4xQixTQUFTOytCQUNFLGFBQWEsdUJBRUYsS0FBSyxpQkFDWCxpQkFBaUIsQ0FBQyxJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEF1dG9TaXplVHlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaW5wdXQnO1xuXG5pbXBvcnQgeyBDb250cm9sVUlXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuaW1wb3J0IHsgU0ZUZXh0YXJlYVdpZGdldFNjaGVtYSB9IGZyb20gJy4vc2NoZW1hJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtdGV4dGFyZWEnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGV4dGFyZWEud2lkZ2V0Lmh0bWwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBUZXh0YXJlYVdpZGdldCBleHRlbmRzIENvbnRyb2xVSVdpZGdldDxTRlRleHRhcmVhV2lkZ2V0U2NoZW1hPiBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGF1dG9zaXplOiBib29sZWFuIHwgQXV0b1NpemVUeXBlID0gdHJ1ZTtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IGF1dG9zaXplIH0gPSB0aGlzLnVpO1xuICAgIGlmIChhdXRvc2l6ZSAhPSBudWxsKSB7XG4gICAgICB0aGlzLmF1dG9zaXplID0gYXV0b3NpemU7XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlKHZhbDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zZXRWYWx1ZSh2YWwpO1xuICAgIGlmICh0aGlzLnVpLmNoYW5nZSkgdGhpcy51aS5jaGFuZ2UodmFsKTtcbiAgfVxuXG4gIGZvY3VzKGU6IEZvY3VzRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy51aS5mb2N1cykgdGhpcy51aS5mb2N1cyhlKTtcbiAgfVxuXG4gIGJsdXIoZTogRm9jdXNFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnVpLmJsdXIpIHRoaXMudWkuYmx1cihlKTtcbiAgfVxufVxuIiwiPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cbiAgPHRleHRhcmVhXG4gICAgbnotaW5wdXRcbiAgICBbYXR0ci5pZF09XCJpZFwiXG4gICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICBbYXR0ci5kaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgW256U2l6ZV09XCJ1aS5zaXplIVwiXG4gICAgW25nTW9kZWxdPVwidmFsdWVcIlxuICAgIChuZ01vZGVsQ2hhbmdlKT1cImNoYW5nZSgkZXZlbnQpXCJcbiAgICBbYXR0ci5tYXhMZW5ndGhdPVwic2NoZW1hLm1heExlbmd0aCB8fCBudWxsXCJcbiAgICBbYXR0ci5wbGFjZWhvbGRlcl09XCJ1aS5wbGFjZWhvbGRlclwiXG4gICAgW256QXV0b3NpemVdPVwiYXV0b3NpemVcIlxuICAgIFtuekJvcmRlcmxlc3NdPVwidWkuYm9yZGVybGVzc1wiXG4gICAgKGZvY3VzKT1cImZvY3VzKCRldmVudClcIlxuICAgIChibHVyKT1cImJsdXIoJGV2ZW50KVwiXG4gID5cbiAgPC90ZXh0YXJlYT5cbjwvc2YtaXRlbS13cmFwPlxuIl19