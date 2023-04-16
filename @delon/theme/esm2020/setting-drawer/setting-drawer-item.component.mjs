import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "ng-zorro-antd/drawer";
import * as i4 from "ng-zorro-antd/switch";
import * as i5 from "ng-zorro-antd/input";
import * as i6 from "ng-zorro-antd/input-number";
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
SettingDrawerItemComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.7", ngImport: i0, type: SettingDrawerItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SettingDrawerItemComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.7", type: SettingDrawerItemComponent, selector: "setting-drawer-item", inputs: { data: "data" }, host: { properties: { "class.setting-drawer__body-item": "true" } }, ngImport: i0, template: "<span>\n  {{ i.label }}\n  <span class=\"pl-sm text-grey\">{{ i.tip }}</span>\n</span>\n<div [ngSwitch]=\"i.type\">\n  <ng-container *ngSwitchCase=\"'color'\">\n    <input\n      nz-input\n      type=\"color\"\n      style=\"min-width: 88px\"\n      [(ngModel)]=\"i.value\"\n      [ngModelOptions]=\"{ standalone: true }\"\n    />\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'input'\">\n    <input nz-input style=\"min-width: 88px\" [(ngModel)]=\"i.value\" [ngModelOptions]=\"{ standalone: true }\" />\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'px'\">\n    <nz-input-number\n      [(ngModel)]=\"pxVal\"\n      (ngModelChange)=\"pxChange($event)\"\n      [nzMin]=\"i.min\"\n      [nzMax]=\"i.max\"\n      [nzStep]=\"i.step || 2\"\n      [nzFormatter]=\"format\"\n    ></nz-input-number>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'switch'\">\n    <nz-switch nzSize=\"small\" [(ngModel)]=\"i.value\" [ngModelOptions]=\"{ standalone: true }\"></nz-switch>\n  </ng-container>\n  <ng-container *ngSwitchDefault>\n    <ng-template nzDrawerContent></ng-template>\n  </ng-container>\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: i1.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "directive", type: i1.NgSwitchDefault, selector: "[ngSwitchDefault]" }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i3.NzDrawerContentDirective, selector: "[nzDrawerContent]", exportAs: ["nzDrawerContent"] }, { kind: "component", type: i4.NzSwitchComponent, selector: "nz-switch", inputs: ["nzLoading", "nzDisabled", "nzControl", "nzCheckedChildren", "nzUnCheckedChildren", "nzSize", "nzId"], exportAs: ["nzSwitch"] }, { kind: "directive", type: i5.NzInputDirective, selector: "input[nz-input],textarea[nz-input]", inputs: ["nzBorderless", "nzSize", "nzStatus", "disabled"], exportAs: ["nzInput"] }, { kind: "component", type: i6.NzInputNumberComponent, selector: "nz-input-number", inputs: ["nzSize", "nzMin", "nzMax", "nzParser", "nzPrecision", "nzPrecisionMode", "nzPlaceHolder", "nzStatus", "nzStep", "nzInputMode", "nzId", "nzDisabled", "nzReadOnly", "nzAutoFocus", "nzBorderless", "nzFormatter"], outputs: ["nzBlur", "nzFocus"], exportAs: ["nzInputNumber"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.7", ngImport: i0, type: SettingDrawerItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'setting-drawer-item', host: {
                        '[class.setting-drawer__body-item]': 'true'
                    }, template: "<span>\n  {{ i.label }}\n  <span class=\"pl-sm text-grey\">{{ i.tip }}</span>\n</span>\n<div [ngSwitch]=\"i.type\">\n  <ng-container *ngSwitchCase=\"'color'\">\n    <input\n      nz-input\n      type=\"color\"\n      style=\"min-width: 88px\"\n      [(ngModel)]=\"i.value\"\n      [ngModelOptions]=\"{ standalone: true }\"\n    />\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'input'\">\n    <input nz-input style=\"min-width: 88px\" [(ngModel)]=\"i.value\" [ngModelOptions]=\"{ standalone: true }\" />\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'px'\">\n    <nz-input-number\n      [(ngModel)]=\"pxVal\"\n      (ngModelChange)=\"pxChange($event)\"\n      [nzMin]=\"i.min\"\n      [nzMax]=\"i.max\"\n      [nzStep]=\"i.step || 2\"\n      [nzFormatter]=\"format\"\n    ></nz-input-number>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'switch'\">\n    <nz-switch nzSize=\"small\" [(ngModel)]=\"i.value\" [ngModelOptions]=\"{ standalone: true }\"></nz-switch>\n  </ng-container>\n  <ng-container *ngSwitchDefault>\n    <ng-template nzDrawerContent></ng-template>\n  </ng-container>\n</div>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZy1kcmF3ZXItaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS9zZXR0aW5nLWRyYXdlci9zZXR0aW5nLWRyYXdlci1pdGVtLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lL3NldHRpbmctZHJhd2VyL3NldHRpbmctZHJhd2VyLWl0ZW0uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0FBV2pELE1BQU0sT0FBTywwQkFBMEI7SUFQdkM7UUFRRSxNQUFDLEdBQWMsRUFBRSxDQUFDO1FBVWxCLFVBQUssR0FBRyxDQUFDLENBQUM7UUFNVixXQUFNLEdBQUcsQ0FBQyxLQUFhLEVBQVUsRUFBRSxDQUFDLEdBQUcsS0FBSyxLQUFLLENBQUM7S0FDbkQ7SUFmQyxJQUNJLElBQUksQ0FBQyxHQUFjO1FBQ3JCLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ2IsSUFBSSxHQUFHLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRTtZQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQzNDO0lBQ0gsQ0FBQztJQUlELFFBQVEsQ0FBQyxHQUFXO1FBQ2xCLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUM7SUFDNUIsQ0FBQzs7dUhBZlUsMEJBQTBCOzJHQUExQiwwQkFBMEIsMEpDWHZDLHlsQ0FrQ0E7MkZEdkJhLDBCQUEwQjtrQkFQdEMsU0FBUzsrQkFDRSxxQkFBcUIsUUFFekI7d0JBQ0osbUNBQW1DLEVBQUUsTUFBTTtxQkFDNUM7OEJBTUcsSUFBSTtzQkFEUCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgdHlwZSB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NldHRpbmctZHJhd2VyLWl0ZW0nLFxuICB0ZW1wbGF0ZVVybDogJy4vc2V0dGluZy1kcmF3ZXItaXRlbS5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLnNldHRpbmctZHJhd2VyX19ib2R5LWl0ZW1dJzogJ3RydWUnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgU2V0dGluZ0RyYXdlckl0ZW1Db21wb25lbnQge1xuICBpOiBOelNhZmVBbnkgPSB7fTtcblxuICBASW5wdXQoKVxuICBzZXQgZGF0YSh2YWw6IE56U2FmZUFueSkge1xuICAgIHRoaXMuaSA9IHZhbDtcbiAgICBpZiAodmFsLnR5cGUgPT09ICdweCcpIHtcbiAgICAgIHRoaXMucHhWYWwgPSArdmFsLnZhbHVlLnJlcGxhY2UoJ3B4JywgJycpO1xuICAgIH1cbiAgfVxuXG4gIHB4VmFsID0gMDtcblxuICBweENoYW5nZSh2YWw6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuaS52YWx1ZSA9IGAke3ZhbH1weGA7XG4gIH1cblxuICBmb3JtYXQgPSAodmFsdWU6IG51bWJlcik6IHN0cmluZyA9PiBgJHt2YWx1ZX0gcHhgO1xufVxuIiwiPHNwYW4+XG4gIHt7IGkubGFiZWwgfX1cbiAgPHNwYW4gY2xhc3M9XCJwbC1zbSB0ZXh0LWdyZXlcIj57eyBpLnRpcCB9fTwvc3Bhbj5cbjwvc3Bhbj5cbjxkaXYgW25nU3dpdGNoXT1cImkudHlwZVwiPlxuICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInY29sb3InXCI+XG4gICAgPGlucHV0XG4gICAgICBuei1pbnB1dFxuICAgICAgdHlwZT1cImNvbG9yXCJcbiAgICAgIHN0eWxlPVwibWluLXdpZHRoOiA4OHB4XCJcbiAgICAgIFsobmdNb2RlbCldPVwiaS52YWx1ZVwiXG4gICAgICBbbmdNb2RlbE9wdGlvbnNdPVwieyBzdGFuZGFsb25lOiB0cnVlIH1cIlxuICAgIC8+XG4gIDwvbmctY29udGFpbmVyPlxuICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInaW5wdXQnXCI+XG4gICAgPGlucHV0IG56LWlucHV0IHN0eWxlPVwibWluLXdpZHRoOiA4OHB4XCIgWyhuZ01vZGVsKV09XCJpLnZhbHVlXCIgW25nTW9kZWxPcHRpb25zXT1cInsgc3RhbmRhbG9uZTogdHJ1ZSB9XCIgLz5cbiAgPC9uZy1jb250YWluZXI+XG4gIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidweCdcIj5cbiAgICA8bnotaW5wdXQtbnVtYmVyXG4gICAgICBbKG5nTW9kZWwpXT1cInB4VmFsXCJcbiAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInB4Q2hhbmdlKCRldmVudClcIlxuICAgICAgW256TWluXT1cImkubWluXCJcbiAgICAgIFtuek1heF09XCJpLm1heFwiXG4gICAgICBbbnpTdGVwXT1cImkuc3RlcCB8fCAyXCJcbiAgICAgIFtuekZvcm1hdHRlcl09XCJmb3JtYXRcIlxuICAgID48L256LWlucHV0LW51bWJlcj5cbiAgPC9uZy1jb250YWluZXI+XG4gIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidzd2l0Y2gnXCI+XG4gICAgPG56LXN3aXRjaCBuelNpemU9XCJzbWFsbFwiIFsobmdNb2RlbCldPVwiaS52YWx1ZVwiIFtuZ01vZGVsT3B0aW9uc109XCJ7IHN0YW5kYWxvbmU6IHRydWUgfVwiPjwvbnotc3dpdGNoPlxuICA8L25nLWNvbnRhaW5lcj5cbiAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hEZWZhdWx0PlxuICAgIDxuZy10ZW1wbGF0ZSBuekRyYXdlckNvbnRlbnQ+PC9uZy10ZW1wbGF0ZT5cbiAgPC9uZy1jb250YWluZXI+XG48L2Rpdj5cbiJdfQ==