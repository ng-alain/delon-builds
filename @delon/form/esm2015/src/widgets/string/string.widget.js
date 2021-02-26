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
                template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <ng-template #ipt>\n    <input\n      nz-input\n      [attr.id]=\"id\"\n      [disabled]=\"disabled\"\n      [attr.disabled]=\"disabled\"\n      [nzSize]=\"ui.size!\"\n      [nzBorderless]=\"ui.borderless\"\n      [ngModel]=\"value\"\n      (ngModelChange)=\"change($event)\"\n      [attr.maxLength]=\"schema.maxLength || null\"\n      [attr.type]=\"ui.type || 'text'\"\n      [attr.placeholder]=\"ui.placeholder\"\n      [attr.autocomplete]=\"ui.autocomplete\"\n      [attr.autoFocus]=\"ui.autofocus\"\n      (keyup.enter)=\"enter($event)\"\n      (focus)=\"focus($event)\"\n      (blur)=\"blur($event)\"\n    />\n  </ng-template>\n\n  <ng-container *ngIf=\"type === 'addon'; else ipt\">\n    <nz-input-group\n      [nzAddOnBefore]=\"ui.addOnBefore\"\n      [nzAddOnAfter]=\"ui.addOnAfter\"\n      [nzAddOnBeforeIcon]=\"ui.addOnBeforeIcon\"\n      [nzAddOnAfterIcon]=\"ui.addOnAfterIcon\"\n      [nzPrefix]=\"ui.prefix\"\n      [nzPrefixIcon]=\"ui.prefixIcon\"\n      [nzSuffix]=\"ui.suffix\"\n      [nzSuffixIcon]=\"ui.suffixIcon\"\n    >\n      <ng-template [ngTemplateOutlet]=\"ipt\"></ng-template>\n    </nz-input-group>\n  </ng-container>\n</sf-item-wrap>\n",
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm0vc3JjL3dpZGdldHMvc3RyaW5nL3N0cmluZy53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQVMvQyxNQUFNLE9BQU8sWUFBYSxTQUFRLGVBQXFDO0lBR3JFLFFBQVE7UUFDTixNQUFNLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ2hJLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsVUFBVSxJQUFJLFdBQVcsSUFBSSxjQUFjLElBQUksZUFBZSxJQUFJLE1BQU0sSUFBSSxVQUFVLElBQUksTUFBTSxJQUFJLFVBQVUsQ0FBQztZQUM1SCxDQUFDLENBQUMsT0FBTztZQUNULENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDUCxJQUFJLFNBQVMsS0FBSyxJQUFJLEVBQUU7WUFDdEIsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDWixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxhQUE2QixDQUFDLGFBQWEsQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBaUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNySCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDUjtJQUNILENBQUM7SUFFRCxLQUFLLENBQUMsS0FBYztRQUNsQixJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLE9BQU8sRUFBRTtZQUM1QyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzFCO0lBQ0gsQ0FBQztJQUVELE1BQU0sQ0FBQyxHQUFXO1FBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkIsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU07WUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsS0FBSyxDQUFDLENBQWE7UUFDakIsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUs7WUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsSUFBSSxDQUFDLENBQWE7UUFDaEIsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUk7WUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsS0FBSyxDQUFDLENBQVE7UUFDWixJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSztZQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7OztZQTFDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLDh4Q0FBbUM7Z0JBQ25DLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTRlZhbHVlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlJztcbmltcG9ydCB7IENvbnRyb2xVSVdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5pbXBvcnQgeyBTRlN0cmluZ1dpZGdldFNjaGVtYSB9IGZyb20gJy4vc2NoZW1hJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2Ytc3RyaW5nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0cmluZy53aWRnZXQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBTdHJpbmdXaWRnZXQgZXh0ZW5kcyBDb250cm9sVUlXaWRnZXQ8U0ZTdHJpbmdXaWRnZXRTY2hlbWE+IGltcGxlbWVudHMgT25Jbml0IHtcbiAgdHlwZTogc3RyaW5nO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgYWRkT25BZnRlciwgYWRkT25BZnRlckljb24sIGFkZE9uQmVmb3JlLCBhZGRPbkJlZm9yZUljb24sIHByZWZpeCwgcHJlZml4SWNvbiwgc3VmZml4LCBzdWZmaXhJY29uLCBhdXRvZm9jdXMgfSA9IHRoaXMudWk7XG4gICAgdGhpcy50eXBlID0gISEoYWRkT25BZnRlciB8fCBhZGRPbkJlZm9yZSB8fCBhZGRPbkFmdGVySWNvbiB8fCBhZGRPbkJlZm9yZUljb24gfHwgcHJlZml4IHx8IHByZWZpeEljb24gfHwgc3VmZml4IHx8IHN1ZmZpeEljb24pXG4gICAgICA/ICdhZGRvbidcbiAgICAgIDogJyc7XG4gICAgaWYgKGF1dG9mb2N1cyA9PT0gdHJ1ZSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICgodGhpcy5pbmplY3Rvci5nZXQoRWxlbWVudFJlZikubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkucXVlcnlTZWxlY3RvcihgIyR7dGhpcy5pZH1gKSBhcyBIVE1MRWxlbWVudCkuZm9jdXMoKTtcbiAgICAgIH0sIDIwKTtcbiAgICB9XG4gIH1cblxuICByZXNldCh2YWx1ZTogU0ZWYWx1ZSk6IHZvaWQge1xuICAgIGlmICghdmFsdWUgJiYgdGhpcy5zY2hlbWEuZm9ybWF0ID09PSAnY29sb3InKSB7XG4gICAgICB0aGlzLnNldFZhbHVlKCcjMDAwMDAwJyk7XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlKHZhbDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zZXRWYWx1ZSh2YWwpO1xuICAgIGlmICh0aGlzLnVpLmNoYW5nZSkgdGhpcy51aS5jaGFuZ2UodmFsKTtcbiAgfVxuXG4gIGZvY3VzKGU6IEZvY3VzRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy51aS5mb2N1cykgdGhpcy51aS5mb2N1cyhlKTtcbiAgfVxuXG4gIGJsdXIoZTogRm9jdXNFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnVpLmJsdXIpIHRoaXMudWkuYmx1cihlKTtcbiAgfVxuXG4gIGVudGVyKGU6IEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMudWkuZW50ZXIpIHRoaXMudWkuZW50ZXIoZSk7XG4gIH1cbn1cbiJdfQ==