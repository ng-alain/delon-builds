import { Component, ViewEncapsulation } from '@angular/core';
import { getData } from '../../utils';
import { ControlUIWidget } from '../../widget';
export class RadioWidget extends ControlUIWidget {
    constructor() {
        super(...arguments);
        this.data = [];
    }
    reset(value) {
        this.styleType = (this.ui.styleType || 'default') === 'default';
        getData(this.schema, this.ui, value).subscribe(list => {
            this.data = list.map(i => {
                i.label = this.dom.bypassSecurityTrustHtml(i.label);
                return i;
            });
            this.detectChanges();
        });
    }
    _setValue(value) {
        this.setValue(value);
        if (this.ui.change)
            this.ui.change(value);
    }
}
RadioWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-radio',
                template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-radio-group [nzSize]=\"ui.size!\" [nzName]=\"id\" [ngModel]=\"value\" (ngModelChange)=\"_setValue($event)\" [nzButtonStyle]=\"ui.buttonStyle || 'outline'\">\n    <ng-container *ngIf=\"styleType\">\n      <label *ngFor=\"let option of data\" nz-radio [nzValue]=\"option.value\" [nzDisabled]=\"disabled || option.disabled\">\n        <span [innerHTML]=\"option.label\"></span>\n      </label>\n    </ng-container>\n    <ng-container *ngIf=\"!styleType\">\n      <label *ngFor=\"let option of data\" nz-radio-button [nzValue]=\"option.value\" [nzDisabled]=\"disabled || option.disabled\">\n        <span [innerHTML]=\"option.label\"></span>\n      </label>\n    </ng-container>\n  </nz-radio-group>\n</sf-item-wrap>\n",
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8ud2lkZ2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvZm9ybS9zcmMvd2lkZ2V0cy9yYWRpby9yYWRpby53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUc3RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFTL0MsTUFBTSxPQUFPLFdBQVksU0FBUSxlQUFvQztJQU5yRTs7UUFPRSxTQUFJLEdBQW1CLEVBQUUsQ0FBQztJQWtCNUIsQ0FBQztJQWZDLEtBQUssQ0FBQyxLQUFjO1FBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsSUFBSSxTQUFTLENBQUMsS0FBSyxTQUFTLENBQUM7UUFDaEUsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDcEQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUN2QixDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNwRCxPQUFPLENBQUMsQ0FBQztZQUNYLENBQUMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFNBQVMsQ0FBQyxLQUFjO1FBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckIsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU07WUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7WUF4QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQixpMkJBQWtDO2dCQUNsQyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNGVmFsdWUgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgU0ZTY2hlbWFFbnVtIH0gZnJvbSAnLi4vLi4vc2NoZW1hL2luZGV4JztcbmltcG9ydCB7IGdldERhdGEgfSBmcm9tICcuLi8uLi91dGlscyc7XG5pbXBvcnQgeyBDb250cm9sVUlXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuaW1wb3J0IHsgU0ZSYWRpb1dpZGdldFNjaGVtYSB9IGZyb20gJy4vc2NoZW1hJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtcmFkaW8nLFxuICB0ZW1wbGF0ZVVybDogJy4vcmFkaW8ud2lkZ2V0Lmh0bWwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgUmFkaW9XaWRnZXQgZXh0ZW5kcyBDb250cm9sVUlXaWRnZXQ8U0ZSYWRpb1dpZGdldFNjaGVtYT4ge1xuICBkYXRhOiBTRlNjaGVtYUVudW1bXSA9IFtdO1xuICBzdHlsZVR5cGU6IGJvb2xlYW47XG5cbiAgcmVzZXQodmFsdWU6IFNGVmFsdWUpOiB2b2lkIHtcbiAgICB0aGlzLnN0eWxlVHlwZSA9ICh0aGlzLnVpLnN0eWxlVHlwZSB8fCAnZGVmYXVsdCcpID09PSAnZGVmYXVsdCc7XG4gICAgZ2V0RGF0YSh0aGlzLnNjaGVtYSwgdGhpcy51aSwgdmFsdWUpLnN1YnNjcmliZShsaXN0ID0+IHtcbiAgICAgIHRoaXMuZGF0YSA9IGxpc3QubWFwKGkgPT4ge1xuICAgICAgICBpLmxhYmVsID0gdGhpcy5kb20uYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoaS5sYWJlbCk7XG4gICAgICAgIHJldHVybiBpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIF9zZXRWYWx1ZSh2YWx1ZTogU0ZWYWx1ZSk6IHZvaWQge1xuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICAgIGlmICh0aGlzLnVpLmNoYW5nZSkgdGhpcy51aS5jaGFuZ2UodmFsdWUpO1xuICB9XG59XG4iXX0=