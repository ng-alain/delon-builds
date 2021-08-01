import { Component, Input } from '@angular/core';
export class SettingDrawerItemComponent {
    constructor() {
        this.i = {};
        this.pxVal = 0;
        this.format = (value) => `${value} px`;
    }
    set data(val) {
        this.i = val;
        if (val.type === 'px') {
            this.pxVal = +val.value.replace('px', '');
        }
    }
    pxChange(val) {
        this.i.value = `${val}px`;
    }
}
SettingDrawerItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'setting-drawer-item',
                template: "<span>\n  {{ i.label }}\n  <span class=\"pl-sm text-grey\">{{ i.tip }}</span>\n</span>\n<div [ngSwitch]=\"i.type\">\n  <ng-container *ngSwitchCase=\"'color'\">\n    <input\n      nz-input\n      type=\"color\"\n      style=\"min-width: 88px\"\n      [(ngModel)]=\"i.value\"\n      [ngModelOptions]=\"{ standalone: true }\"\n    />\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'input'\">\n    <input nz-input style=\"min-width: 88px\" [(ngModel)]=\"i.value\" [ngModelOptions]=\"{ standalone: true }\" />\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'px'\">\n    <nz-input-number\n      [(ngModel)]=\"pxVal\"\n      (ngModelChange)=\"pxChange($event)\"\n      [nzMin]=\"i.min\"\n      [nzMax]=\"i.max\"\n      [nzStep]=\"i.step || 2\"\n      [nzFormatter]=\"format\"\n    ></nz-input-number>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'switch'\">\n    <nz-switch nzSize=\"small\" [(ngModel)]=\"i.value\" [ngModelOptions]=\"{ standalone: true }\"></nz-switch>\n  </ng-container>\n  <ng-container *ngSwitchDefault>\n    <ng-template nzDrawerContent></ng-template>\n  </ng-container>\n</div>\n",
                host: {
                    '[class.setting-drawer__body-item]': 'true'
                }
            },] }
];
SettingDrawerItemComponent.propDecorators = {
    data: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZy1kcmF3ZXItaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS9zZXR0aW5nLWRyYXdlci9zZXR0aW5nLWRyYXdlci1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVdqRCxNQUFNLE9BQU8sMEJBQTBCO0lBUHZDO1FBUUUsTUFBQyxHQUFjLEVBQUUsQ0FBQztRQVVsQixVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBTVYsV0FBTSxHQUFHLENBQUMsS0FBYSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEtBQUssS0FBSyxDQUFDO0lBQzVDLENBQUM7SUFmQyxJQUNJLElBQUksQ0FBQyxHQUFjO1FBQ3JCLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ2IsSUFBSSxHQUFHLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRTtZQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQzNDO0lBQ0gsQ0FBQztJQUlELFFBQVEsQ0FBQyxHQUFXO1FBQ2xCLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUM7SUFDNUIsQ0FBQzs7O1lBdEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixtbUNBQW1EO2dCQUNuRCxJQUFJLEVBQUU7b0JBQ0osbUNBQW1DLEVBQUUsTUFBTTtpQkFDNUM7YUFDRjs7O21CQUlFLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NldHRpbmctZHJhd2VyLWl0ZW0nLFxuICB0ZW1wbGF0ZVVybDogJy4vc2V0dGluZy1kcmF3ZXItaXRlbS5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLnNldHRpbmctZHJhd2VyX19ib2R5LWl0ZW1dJzogJ3RydWUnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgU2V0dGluZ0RyYXdlckl0ZW1Db21wb25lbnQge1xuICBpOiBOelNhZmVBbnkgPSB7fTtcblxuICBASW5wdXQoKVxuICBzZXQgZGF0YSh2YWw6IE56U2FmZUFueSkge1xuICAgIHRoaXMuaSA9IHZhbDtcbiAgICBpZiAodmFsLnR5cGUgPT09ICdweCcpIHtcbiAgICAgIHRoaXMucHhWYWwgPSArdmFsLnZhbHVlLnJlcGxhY2UoJ3B4JywgJycpO1xuICAgIH1cbiAgfVxuXG4gIHB4VmFsID0gMDtcblxuICBweENoYW5nZSh2YWw6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuaS52YWx1ZSA9IGAke3ZhbH1weGA7XG4gIH1cblxuICBmb3JtYXQgPSAodmFsdWU6IG51bWJlcikgPT4gYCR7dmFsdWV9IHB4YDtcbn1cbiJdfQ==