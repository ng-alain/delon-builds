import { Component, ViewEncapsulation } from '@angular/core';
import { ControlUIWidget } from '../../widget';
import * as i0 from "@angular/core";
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
/** @nocollapse */ TextareaWidget.ɵfac = function TextareaWidget_Factory(t) { return ɵTextareaWidget_BaseFactory(t || TextareaWidget); };
/** @nocollapse */ TextareaWidget.ɵcmp = i0.ɵɵngDeclareComponent({ version: "11.1.1", type: TextareaWidget, selector: "sf-textarea", usesInheritance: true, ngImport: i0, template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <textarea\n    nz-input\n    [attr.id]=\"id\"\n    [disabled]=\"disabled\"\n    [attr.disabled]=\"disabled\"\n    [nzSize]=\"ui.size\"\n    [ngModel]=\"value\"\n    (ngModelChange)=\"change($event)\"\n    [attr.maxLength]=\"schema.maxLength || null\"\n    [attr.placeholder]=\"ui.placeholder\"\n    [nzAutosize]=\"autosize\"\n    [nzBorderless]=\"ui.borderless\"\n    (focus)=\"focus($event)\"\n    (blur)=\"blur($event)\"\n  >\n  </textarea>\n</sf-item-wrap>\n", encapsulation: i0.ViewEncapsulation.None });
const ɵTextareaWidget_BaseFactory = /*@__PURE__*/ i0.ɵɵgetInheritedFactory(TextareaWidget);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TextareaWidget, [{
        type: Component,
        args: [{
                selector: 'sf-textarea',
                templateUrl: './textarea.widget.html',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWEud2lkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS9zcmMvd2lkZ2V0cy90ZXh0YXJlYS90ZXh0YXJlYS53aWRnZXQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3NyYy93aWRnZXRzL3RleHRhcmVhL3RleHRhcmVhLndpZGdldC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFckUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7QUFTL0MsTUFBTSxPQUFPLGNBQWUsU0FBUSxlQUF1QztJQU4zRTs7UUFPRSxhQUFRLEdBQTJCLElBQUksQ0FBQztLQXFCekM7SUFuQkMsUUFBUTtRQUNOLE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQzdCLElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtZQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztTQUMxQjtJQUNILENBQUM7SUFFRCxNQUFNLENBQUMsR0FBVztRQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNO1lBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELEtBQUssQ0FBQyxDQUFhO1FBQ2pCLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLO1lBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELElBQUksQ0FBQyxDQUFhO1FBQ2hCLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJO1lBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7c0hBckJVLGNBQWM7NEZBQWQsY0FBYywwRUNYM0Isc2xCQWtCQTsyRURQYSxjQUFjO3VGQUFkLGNBQWM7Y0FOMUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixXQUFXLEVBQUUsd0JBQXdCO2dCQUNyQyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXV0b1NpemVUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pbnB1dCc7XG5pbXBvcnQgeyBDb250cm9sVUlXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuaW1wb3J0IHsgU0ZUZXh0YXJlYVdpZGdldFNjaGVtYSB9IGZyb20gJy4vc2NoZW1hJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtdGV4dGFyZWEnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGV4dGFyZWEud2lkZ2V0Lmh0bWwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgVGV4dGFyZWFXaWRnZXQgZXh0ZW5kcyBDb250cm9sVUlXaWRnZXQ8U0ZUZXh0YXJlYVdpZGdldFNjaGVtYT4gaW1wbGVtZW50cyBPbkluaXQge1xuICBhdXRvc2l6ZTogYm9vbGVhbiB8IEF1dG9TaXplVHlwZSA9IHRydWU7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgeyBhdXRvc2l6ZSB9ID0gdGhpcy51aTtcbiAgICBpZiAoYXV0b3NpemUgIT0gbnVsbCkge1xuICAgICAgdGhpcy5hdXRvc2l6ZSA9IGF1dG9zaXplO1xuICAgIH1cbiAgfVxuXG4gIGNoYW5nZSh2YWw6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc2V0VmFsdWUodmFsKTtcbiAgICBpZiAodGhpcy51aS5jaGFuZ2UpIHRoaXMudWkuY2hhbmdlKHZhbCk7XG4gIH1cblxuICBmb2N1cyhlOiBGb2N1c0V2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMudWkuZm9jdXMpIHRoaXMudWkuZm9jdXMoZSk7XG4gIH1cblxuICBibHVyKGU6IEZvY3VzRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy51aS5ibHVyKSB0aGlzLnVpLmJsdXIoZSk7XG4gIH1cbn1cbiIsIjxzZi1pdGVtLXdyYXAgW2lkXT1cImlkXCIgW3NjaGVtYV09XCJzY2hlbWFcIiBbdWldPVwidWlcIiBbc2hvd0Vycm9yXT1cInNob3dFcnJvclwiIFtlcnJvcl09XCJlcnJvclwiIFtzaG93VGl0bGVdPVwic2NoZW1hLnRpdGxlXCI+XG4gIDx0ZXh0YXJlYVxuICAgIG56LWlucHV0XG4gICAgW2F0dHIuaWRdPVwiaWRcIlxuICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgW2F0dHIuZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgIFtuelNpemVdPVwidWkuc2l6ZVwiXG4gICAgW25nTW9kZWxdPVwidmFsdWVcIlxuICAgIChuZ01vZGVsQ2hhbmdlKT1cImNoYW5nZSgkZXZlbnQpXCJcbiAgICBbYXR0ci5tYXhMZW5ndGhdPVwic2NoZW1hLm1heExlbmd0aCB8fCBudWxsXCJcbiAgICBbYXR0ci5wbGFjZWhvbGRlcl09XCJ1aS5wbGFjZWhvbGRlclwiXG4gICAgW256QXV0b3NpemVdPVwiYXV0b3NpemVcIlxuICAgIFtuekJvcmRlcmxlc3NdPVwidWkuYm9yZGVybGVzc1wiXG4gICAgKGZvY3VzKT1cImZvY3VzKCRldmVudClcIlxuICAgIChibHVyKT1cImJsdXIoJGV2ZW50KVwiXG4gID5cbiAgPC90ZXh0YXJlYT5cbjwvc2YtaXRlbS13cmFwPlxuIl19