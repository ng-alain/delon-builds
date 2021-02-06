import { Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { ControlUIWidget } from '../../widget';
export class StringWidget extends ControlUIWidget {
    ngOnInit() {
        const { addOnAfter, addOnAfterIcon, addOnBefore, addOnBeforeIcon, prefix, prefixIcon, suffix, suffixIcon, autofocus } = this.ui;
        this.type = !!(addOnAfter || addOnBefore || addOnAfterIcon || addOnBeforeIcon || prefix || prefixIcon || suffix || suffixIcon)
            ? 'addon'
            : '';
        if (autofocus === true) {
            setTimeout(() => {
                this.injector.get(ElementRef).nativeElement.querySelector(`#${this.id}`).focus();
            }, 20);
        }
    }
    reset(value) {
        if (!value && this.schema.format === 'color') {
            this.setValue('#000000');
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
    enter(e) {
        if (this.ui.enter)
            this.ui.enter(e);
    }
}
StringWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-string',
                template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <ng-template #ipt>\n    <input\n      nz-input\n      [attr.id]=\"id\"\n      [disabled]=\"disabled\"\n      [attr.disabled]=\"disabled\"\n      [nzSize]=\"ui.size\"\n      [nzBorderless]=\"ui.borderless\"\n      [ngModel]=\"value\"\n      (ngModelChange)=\"change($event)\"\n      [attr.maxLength]=\"schema.maxLength || null\"\n      [attr.type]=\"ui.type || 'text'\"\n      [attr.placeholder]=\"ui.placeholder\"\n      [attr.autocomplete]=\"ui.autocomplete\"\n      [attr.autoFocus]=\"ui.autofocus\"\n      (keyup.enter)=\"enter($event)\"\n      (focus)=\"focus($event)\"\n      (blur)=\"blur($event)\"\n    />\n  </ng-template>\n\n  <ng-container *ngIf=\"type === 'addon'; else ipt\">\n    <nz-input-group\n      [nzAddOnBefore]=\"ui.addOnBefore\"\n      [nzAddOnAfter]=\"ui.addOnAfter\"\n      [nzAddOnBeforeIcon]=\"ui.addOnBeforeIcon\"\n      [nzAddOnAfterIcon]=\"ui.addOnAfterIcon\"\n      [nzPrefix]=\"ui.prefix\"\n      [nzPrefixIcon]=\"ui.prefixIcon\"\n      [nzSuffix]=\"ui.suffix\"\n      [nzSuffixIcon]=\"ui.suffixIcon\"\n    >\n      <ng-template [ngTemplateOutlet]=\"ipt\"></ng-template>\n    </nz-input-group>\n  </ng-container>\n</sf-item-wrap>\n",
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm0vc3JjL3dpZGdldHMvc3RyaW5nL3N0cmluZy53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQVMvQyxNQUFNLE9BQU8sWUFBYSxTQUFRLGVBQXFDO0lBR3JFLFFBQVE7UUFDTixNQUFNLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ2hJLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsVUFBVSxJQUFJLFdBQVcsSUFBSSxjQUFjLElBQUksZUFBZSxJQUFJLE1BQU0sSUFBSSxVQUFVLElBQUksTUFBTSxJQUFJLFVBQVUsQ0FBQztZQUM1SCxDQUFDLENBQUMsT0FBTztZQUNULENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDUCxJQUFJLFNBQVMsS0FBSyxJQUFJLEVBQUU7WUFDdEIsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDWixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxhQUE2QixDQUFDLGFBQWEsQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBaUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNySCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDUjtJQUNILENBQUM7SUFFRCxLQUFLLENBQUMsS0FBYztRQUNsQixJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLE9BQU8sRUFBRTtZQUM1QyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzFCO0lBQ0gsQ0FBQztJQUVELE1BQU0sQ0FBQyxHQUFXO1FBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkIsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU07WUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsS0FBSyxDQUFDLENBQWE7UUFDakIsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUs7WUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsSUFBSSxDQUFDLENBQWE7UUFDaEIsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUk7WUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsS0FBSyxDQUFDLENBQWdCO1FBQ3BCLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLO1lBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7O1lBMUNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsNnhDQUFtQztnQkFDbkMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNGVmFsdWUgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQ29udHJvbFVJV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcbmltcG9ydCB7IFNGU3RyaW5nV2lkZ2V0U2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1zdHJpbmcnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3RyaW5nLndpZGdldC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIFN0cmluZ1dpZGdldCBleHRlbmRzIENvbnRyb2xVSVdpZGdldDxTRlN0cmluZ1dpZGdldFNjaGVtYT4gaW1wbGVtZW50cyBPbkluaXQge1xuICB0eXBlOiBzdHJpbmc7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgeyBhZGRPbkFmdGVyLCBhZGRPbkFmdGVySWNvbiwgYWRkT25CZWZvcmUsIGFkZE9uQmVmb3JlSWNvbiwgcHJlZml4LCBwcmVmaXhJY29uLCBzdWZmaXgsIHN1ZmZpeEljb24sIGF1dG9mb2N1cyB9ID0gdGhpcy51aTtcbiAgICB0aGlzLnR5cGUgPSAhIShhZGRPbkFmdGVyIHx8IGFkZE9uQmVmb3JlIHx8IGFkZE9uQWZ0ZXJJY29uIHx8IGFkZE9uQmVmb3JlSWNvbiB8fCBwcmVmaXggfHwgcHJlZml4SWNvbiB8fCBzdWZmaXggfHwgc3VmZml4SWNvbilcbiAgICAgID8gJ2FkZG9uJ1xuICAgICAgOiAnJztcbiAgICBpZiAoYXV0b2ZvY3VzID09PSB0cnVlKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgKCh0aGlzLmluamVjdG9yLmdldChFbGVtZW50UmVmKS5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLmlkfWApIGFzIEhUTUxFbGVtZW50KS5mb2N1cygpO1xuICAgICAgfSwgMjApO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0KHZhbHVlOiBTRlZhbHVlKTogdm9pZCB7XG4gICAgaWYgKCF2YWx1ZSAmJiB0aGlzLnNjaGVtYS5mb3JtYXQgPT09ICdjb2xvcicpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUoJyMwMDAwMDAnKTtcbiAgICB9XG4gIH1cblxuICBjaGFuZ2UodmFsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnNldFZhbHVlKHZhbCk7XG4gICAgaWYgKHRoaXMudWkuY2hhbmdlKSB0aGlzLnVpLmNoYW5nZSh2YWwpO1xuICB9XG5cbiAgZm9jdXMoZTogRm9jdXNFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnVpLmZvY3VzKSB0aGlzLnVpLmZvY3VzKGUpO1xuICB9XG5cbiAgYmx1cihlOiBGb2N1c0V2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMudWkuYmx1cikgdGhpcy51aS5ibHVyKGUpO1xuICB9XG5cbiAgZW50ZXIoZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnVpLmVudGVyKSB0aGlzLnVpLmVudGVyKGUpO1xuICB9XG59XG4iXX0=