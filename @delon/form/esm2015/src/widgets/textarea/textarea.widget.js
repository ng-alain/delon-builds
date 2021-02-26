import { Component, ViewEncapsulation } from '@angular/core';
import { ControlUIWidget } from '../../widget';
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
TextareaWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-textarea',
                template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <textarea\n    nz-input\n    [attr.id]=\"id\"\n    [disabled]=\"disabled\"\n    [attr.disabled]=\"disabled\"\n    [nzSize]=\"ui.size!\"\n    [ngModel]=\"value\"\n    (ngModelChange)=\"change($event)\"\n    [attr.maxLength]=\"schema.maxLength || null\"\n    [attr.placeholder]=\"ui.placeholder\"\n    [nzAutosize]=\"autosize\"\n    [nzBorderless]=\"ui.borderless\"\n    (focus)=\"focus($event)\"\n    (blur)=\"blur($event)\"\n  >\n  </textarea>\n</sf-item-wrap>\n",
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWEud2lkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS9zcmMvd2lkZ2V0cy90ZXh0YXJlYS90ZXh0YXJlYS53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBUy9DLE1BQU0sT0FBTyxjQUFlLFNBQVEsZUFBdUM7SUFOM0U7O1FBT0UsYUFBUSxHQUEyQixJQUFJLENBQUM7SUFxQjFDLENBQUM7SUFuQkMsUUFBUTtRQUNOLE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQzdCLElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtZQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztTQUMxQjtJQUNILENBQUM7SUFFRCxNQUFNLENBQUMsR0FBVztRQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNO1lBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELEtBQUssQ0FBQyxDQUFhO1FBQ2pCLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLO1lBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELElBQUksQ0FBQyxDQUFhO1FBQ2hCLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJO1lBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7O1lBM0JGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsaW1CQUFxQztnQkFDckMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEF1dG9TaXplVHlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaW5wdXQnO1xuaW1wb3J0IHsgQ29udHJvbFVJV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcbmltcG9ydCB7IFNGVGV4dGFyZWFXaWRnZXRTY2hlbWEgfSBmcm9tICcuL3NjaGVtYSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLXRleHRhcmVhJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RleHRhcmVhLndpZGdldC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIFRleHRhcmVhV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFVJV2lkZ2V0PFNGVGV4dGFyZWFXaWRnZXRTY2hlbWE+IGltcGxlbWVudHMgT25Jbml0IHtcbiAgYXV0b3NpemU6IGJvb2xlYW4gfCBBdXRvU2l6ZVR5cGUgPSB0cnVlO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgYXV0b3NpemUgfSA9IHRoaXMudWk7XG4gICAgaWYgKGF1dG9zaXplICE9IG51bGwpIHtcbiAgICAgIHRoaXMuYXV0b3NpemUgPSBhdXRvc2l6ZTtcbiAgICB9XG4gIH1cblxuICBjaGFuZ2UodmFsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnNldFZhbHVlKHZhbCk7XG4gICAgaWYgKHRoaXMudWkuY2hhbmdlKSB0aGlzLnVpLmNoYW5nZSh2YWwpO1xuICB9XG5cbiAgZm9jdXMoZTogRm9jdXNFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnVpLmZvY3VzKSB0aGlzLnVpLmZvY3VzKGUpO1xuICB9XG5cbiAgYmx1cihlOiBGb2N1c0V2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMudWkuYmx1cikgdGhpcy51aS5ibHVyKGUpO1xuICB9XG59XG4iXX0=