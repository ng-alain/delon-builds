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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZy1kcmF3ZXItaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS9zZXR0aW5nLWRyYXdlci9zZXR0aW5nLWRyYXdlci1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVNqRCxNQUFNLE9BQU8sMEJBQTBCO0lBUHZDO1FBUUUsTUFBQyxHQUFRLEVBQUUsQ0FBQztRQVVaLFVBQUssR0FBRyxDQUFDLENBQUM7UUFNVixXQUFNLEdBQUcsQ0FBQyxLQUFhLEVBQUUsRUFBRSxDQUFDLEdBQUcsS0FBSyxLQUFLLENBQUM7SUFDNUMsQ0FBQztJQWZDLElBQ0ksSUFBSSxDQUFDLEdBQVE7UUFDZixJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUNiLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUU7WUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztTQUMzQztJQUNILENBQUM7SUFJRCxRQUFRLENBQUMsR0FBVztRQUNsQixJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDO0lBQzVCLENBQUM7OztZQXRCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsbW1DQUFtRDtnQkFDbkQsSUFBSSxFQUFFO29CQUNKLG1DQUFtQyxFQUFFLE1BQU07aUJBQzVDO2FBQ0Y7OzttQkFJRSxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZXR0aW5nLWRyYXdlci1pdGVtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NldHRpbmctZHJhd2VyLWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5zZXR0aW5nLWRyYXdlcl9fYm9keS1pdGVtXSc6ICd0cnVlJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIFNldHRpbmdEcmF3ZXJJdGVtQ29tcG9uZW50IHtcbiAgaTogYW55ID0ge307XG5cbiAgQElucHV0KClcbiAgc2V0IGRhdGEodmFsOiBhbnkpIHtcbiAgICB0aGlzLmkgPSB2YWw7XG4gICAgaWYgKHZhbC50eXBlID09PSAncHgnKSB7XG4gICAgICB0aGlzLnB4VmFsID0gK3ZhbC52YWx1ZS5yZXBsYWNlKCdweCcsICcnKTtcbiAgICB9XG4gIH1cblxuICBweFZhbCA9IDA7XG5cbiAgcHhDaGFuZ2UodmFsOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmkudmFsdWUgPSBgJHt2YWx9cHhgO1xuICB9XG5cbiAgZm9ybWF0ID0gKHZhbHVlOiBudW1iZXIpID0+IGAke3ZhbHVlfSBweGA7XG59XG4iXX0=