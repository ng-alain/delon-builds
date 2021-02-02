import { Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { ControlUIWidget } from '../../widget';
import * as i0 from "@angular/core";
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
/** @nocollapse */ StringWidget.ɵfac = function StringWidget_Factory(t) { return ɵStringWidget_BaseFactory(t || StringWidget); };
/** @nocollapse */ StringWidget.ɵcmp = i0.ɵɵngDeclareComponent({ version: "11.1.1", type: StringWidget, selector: "sf-string", usesInheritance: true, ngImport: i0, template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <ng-template #ipt>\n    <input\n      nz-input\n      [attr.id]=\"id\"\n      [disabled]=\"disabled\"\n      [attr.disabled]=\"disabled\"\n      [nzSize]=\"ui.size\"\n      [nzBorderless]=\"ui.borderless\"\n      [ngModel]=\"value\"\n      (ngModelChange)=\"change($event)\"\n      [attr.maxLength]=\"schema.maxLength || null\"\n      [attr.type]=\"ui.type || 'text'\"\n      [attr.placeholder]=\"ui.placeholder\"\n      [attr.autocomplete]=\"ui.autocomplete\"\n      [attr.autoFocus]=\"ui.autofocus\"\n      (keyup.enter)=\"enter($event)\"\n      (focus)=\"focus($event)\"\n      (blur)=\"blur($event)\"\n    />\n  </ng-template>\n\n  <ng-container *ngIf=\"type === 'addon'; else ipt\">\n    <nz-input-group\n      [nzAddOnBefore]=\"ui.addOnBefore\"\n      [nzAddOnAfter]=\"ui.addOnAfter\"\n      [nzAddOnBeforeIcon]=\"ui.addOnBeforeIcon\"\n      [nzAddOnAfterIcon]=\"ui.addOnAfterIcon\"\n      [nzPrefix]=\"ui.prefix\"\n      [nzPrefixIcon]=\"ui.prefixIcon\"\n      [nzSuffix]=\"ui.suffix\"\n      [nzSuffixIcon]=\"ui.suffixIcon\"\n    >\n      <ng-template [ngTemplateOutlet]=\"ipt\"></ng-template>\n    </nz-input-group>\n  </ng-container>\n</sf-item-wrap>\n", encapsulation: i0.ViewEncapsulation.None });
const ɵStringWidget_BaseFactory = /*@__PURE__*/ i0.ɵɵgetInheritedFactory(StringWidget);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StringWidget, [{
        type: Component,
        args: [{
                selector: 'sf-string',
                templateUrl: './string.widget.html',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm0vc3JjL3dpZGdldHMvc3RyaW5nL3N0cmluZy53aWRnZXQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9mb3JtL3NyYy93aWRnZXRzL3N0cmluZy9zdHJpbmcud2lkZ2V0Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7QUFTL0MsTUFBTSxPQUFPLFlBQWEsU0FBUSxlQUFxQztJQUdyRSxRQUFRO1FBQ04sTUFBTSxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsV0FBVyxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNoSSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLFVBQVUsSUFBSSxXQUFXLElBQUksY0FBYyxJQUFJLGVBQWUsSUFBSSxNQUFNLElBQUksVUFBVSxJQUFJLE1BQU0sSUFBSSxVQUFVLENBQUM7WUFDNUgsQ0FBQyxDQUFDLE9BQU87WUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ1AsSUFBSSxTQUFTLEtBQUssSUFBSSxFQUFFO1lBQ3RCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ1osSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsYUFBNkIsQ0FBQyxhQUFhLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRSxFQUFFLENBQWlCLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDckgsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ1I7SUFDSCxDQUFDO0lBRUQsS0FBSyxDQUFDLEtBQWM7UUFDbEIsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxPQUFPLEVBQUU7WUFDNUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUMxQjtJQUNILENBQUM7SUFFRCxNQUFNLENBQUMsR0FBVztRQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNO1lBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELEtBQUssQ0FBQyxDQUFhO1FBQ2pCLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLO1lBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELElBQUksQ0FBQyxDQUFhO1FBQ2hCLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJO1lBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELEtBQUssQ0FBQyxDQUFnQjtRQUNwQixJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSztZQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7O2dIQXBDVSxZQUFZOzBGQUFaLFlBQVksd0VDWHpCLG14Q0FxQ0E7eUVEMUJhLFlBQVk7dUZBQVosWUFBWTtjQU54QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFdBQVcsRUFBRSxzQkFBc0I7Z0JBQ25DLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTRlZhbHVlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlJztcbmltcG9ydCB7IENvbnRyb2xVSVdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5pbXBvcnQgeyBTRlN0cmluZ1dpZGdldFNjaGVtYSB9IGZyb20gJy4vc2NoZW1hJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2Ytc3RyaW5nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0cmluZy53aWRnZXQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBTdHJpbmdXaWRnZXQgZXh0ZW5kcyBDb250cm9sVUlXaWRnZXQ8U0ZTdHJpbmdXaWRnZXRTY2hlbWE+IGltcGxlbWVudHMgT25Jbml0IHtcbiAgdHlwZTogc3RyaW5nO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgYWRkT25BZnRlciwgYWRkT25BZnRlckljb24sIGFkZE9uQmVmb3JlLCBhZGRPbkJlZm9yZUljb24sIHByZWZpeCwgcHJlZml4SWNvbiwgc3VmZml4LCBzdWZmaXhJY29uLCBhdXRvZm9jdXMgfSA9IHRoaXMudWk7XG4gICAgdGhpcy50eXBlID0gISEoYWRkT25BZnRlciB8fCBhZGRPbkJlZm9yZSB8fCBhZGRPbkFmdGVySWNvbiB8fCBhZGRPbkJlZm9yZUljb24gfHwgcHJlZml4IHx8IHByZWZpeEljb24gfHwgc3VmZml4IHx8IHN1ZmZpeEljb24pXG4gICAgICA/ICdhZGRvbidcbiAgICAgIDogJyc7XG4gICAgaWYgKGF1dG9mb2N1cyA9PT0gdHJ1ZSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICgodGhpcy5pbmplY3Rvci5nZXQoRWxlbWVudFJlZikubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkucXVlcnlTZWxlY3RvcihgIyR7dGhpcy5pZH1gKSBhcyBIVE1MRWxlbWVudCkuZm9jdXMoKTtcbiAgICAgIH0sIDIwKTtcbiAgICB9XG4gIH1cblxuICByZXNldCh2YWx1ZTogU0ZWYWx1ZSk6IHZvaWQge1xuICAgIGlmICghdmFsdWUgJiYgdGhpcy5zY2hlbWEuZm9ybWF0ID09PSAnY29sb3InKSB7XG4gICAgICB0aGlzLnNldFZhbHVlKCcjMDAwMDAwJyk7XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlKHZhbDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zZXRWYWx1ZSh2YWwpO1xuICAgIGlmICh0aGlzLnVpLmNoYW5nZSkgdGhpcy51aS5jaGFuZ2UodmFsKTtcbiAgfVxuXG4gIGZvY3VzKGU6IEZvY3VzRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy51aS5mb2N1cykgdGhpcy51aS5mb2N1cyhlKTtcbiAgfVxuXG4gIGJsdXIoZTogRm9jdXNFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnVpLmJsdXIpIHRoaXMudWkuYmx1cihlKTtcbiAgfVxuXG4gIGVudGVyKGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy51aS5lbnRlcikgdGhpcy51aS5lbnRlcihlKTtcbiAgfVxufVxuIiwiPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cbiAgPG5nLXRlbXBsYXRlICNpcHQ+XG4gICAgPGlucHV0XG4gICAgICBuei1pbnB1dFxuICAgICAgW2F0dHIuaWRdPVwiaWRcIlxuICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgIFthdHRyLmRpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgIFtuelNpemVdPVwidWkuc2l6ZVwiXG4gICAgICBbbnpCb3JkZXJsZXNzXT1cInVpLmJvcmRlcmxlc3NcIlxuICAgICAgW25nTW9kZWxdPVwidmFsdWVcIlxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiY2hhbmdlKCRldmVudClcIlxuICAgICAgW2F0dHIubWF4TGVuZ3RoXT1cInNjaGVtYS5tYXhMZW5ndGggfHwgbnVsbFwiXG4gICAgICBbYXR0ci50eXBlXT1cInVpLnR5cGUgfHwgJ3RleHQnXCJcbiAgICAgIFthdHRyLnBsYWNlaG9sZGVyXT1cInVpLnBsYWNlaG9sZGVyXCJcbiAgICAgIFthdHRyLmF1dG9jb21wbGV0ZV09XCJ1aS5hdXRvY29tcGxldGVcIlxuICAgICAgW2F0dHIuYXV0b0ZvY3VzXT1cInVpLmF1dG9mb2N1c1wiXG4gICAgICAoa2V5dXAuZW50ZXIpPVwiZW50ZXIoJGV2ZW50KVwiXG4gICAgICAoZm9jdXMpPVwiZm9jdXMoJGV2ZW50KVwiXG4gICAgICAoYmx1cik9XCJibHVyKCRldmVudClcIlxuICAgIC8+XG4gIDwvbmctdGVtcGxhdGU+XG5cbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInR5cGUgPT09ICdhZGRvbic7IGVsc2UgaXB0XCI+XG4gICAgPG56LWlucHV0LWdyb3VwXG4gICAgICBbbnpBZGRPbkJlZm9yZV09XCJ1aS5hZGRPbkJlZm9yZVwiXG4gICAgICBbbnpBZGRPbkFmdGVyXT1cInVpLmFkZE9uQWZ0ZXJcIlxuICAgICAgW256QWRkT25CZWZvcmVJY29uXT1cInVpLmFkZE9uQmVmb3JlSWNvblwiXG4gICAgICBbbnpBZGRPbkFmdGVySWNvbl09XCJ1aS5hZGRPbkFmdGVySWNvblwiXG4gICAgICBbbnpQcmVmaXhdPVwidWkucHJlZml4XCJcbiAgICAgIFtuelByZWZpeEljb25dPVwidWkucHJlZml4SWNvblwiXG4gICAgICBbbnpTdWZmaXhdPVwidWkuc3VmZml4XCJcbiAgICAgIFtuelN1ZmZpeEljb25dPVwidWkuc3VmZml4SWNvblwiXG4gICAgPlxuICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImlwdFwiPjwvbmctdGVtcGxhdGU+XG4gICAgPC9uei1pbnB1dC1ncm91cD5cbiAgPC9uZy1jb250YWluZXI+XG48L3NmLWl0ZW0td3JhcD5cbiJdfQ==