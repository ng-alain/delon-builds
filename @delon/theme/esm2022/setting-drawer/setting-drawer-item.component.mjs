import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "ng-zorro-antd/drawer";
import * as i4 from "ng-zorro-antd/switch";
import * as i5 from "ng-zorro-antd/input";
import * as i6 from "ng-zorro-antd/input-number";
class SettingDrawerItemComponent {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.3", ngImport: i0, type: SettingDrawerItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.3", type: SettingDrawerItemComponent, selector: "setting-drawer-item", inputs: { data: "data" }, host: { properties: { "class.setting-drawer__body-item": "true" } }, ngImport: i0, template: "<span>\n  {{ i.label }}\n  <span class=\"pl-sm text-grey\">{{ i.tip }}</span>\n</span>\n<div [ngSwitch]=\"i.type\">\n  <ng-container *ngSwitchCase=\"'color'\">\n    <input\n      nz-input\n      type=\"color\"\n      style=\"min-width: 88px\"\n      [(ngModel)]=\"i.value\"\n      [ngModelOptions]=\"{ standalone: true }\"\n    />\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'input'\">\n    <input nz-input style=\"min-width: 88px\" [(ngModel)]=\"i.value\" [ngModelOptions]=\"{ standalone: true }\" />\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'px'\">\n    <nz-input-number\n      [(ngModel)]=\"pxVal\"\n      (ngModelChange)=\"pxChange($event)\"\n      [nzMin]=\"i.min\"\n      [nzMax]=\"i.max\"\n      [nzStep]=\"i.step || 2\"\n      [nzFormatter]=\"format\"\n    ></nz-input-number>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'switch'\">\n    <nz-switch nzSize=\"small\" [(ngModel)]=\"i.value\" [ngModelOptions]=\"{ standalone: true }\"></nz-switch>\n  </ng-container>\n  <ng-container *ngSwitchDefault>\n    <ng-template nzDrawerContent></ng-template>\n  </ng-container>\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: i1.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "directive", type: i1.NgSwitchDefault, selector: "[ngSwitchDefault]" }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i3.NzDrawerContentDirective, selector: "[nzDrawerContent]", exportAs: ["nzDrawerContent"] }, { kind: "component", type: i4.NzSwitchComponent, selector: "nz-switch", inputs: ["nzLoading", "nzDisabled", "nzControl", "nzCheckedChildren", "nzUnCheckedChildren", "nzSize", "nzId"], exportAs: ["nzSwitch"] }, { kind: "directive", type: i5.NzInputDirective, selector: "input[nz-input],textarea[nz-input]", inputs: ["nzBorderless", "nzSize", "nzStatus", "disabled"], exportAs: ["nzInput"] }, { kind: "component", type: i6.NzInputNumberComponent, selector: "nz-input-number", inputs: ["nzSize", "nzMin", "nzMax", "nzParser", "nzPrecision", "nzPrecisionMode", "nzPlaceHolder", "nzStatus", "nzStep", "nzInputMode", "nzId", "nzDisabled", "nzReadOnly", "nzAutoFocus", "nzBorderless", "nzFormatter"], outputs: ["nzBlur", "nzFocus"], exportAs: ["nzInputNumber"] }] }); }
}
export { SettingDrawerItemComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.3", ngImport: i0, type: SettingDrawerItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'setting-drawer-item', host: {
                        '[class.setting-drawer__body-item]': 'true'
                    }, template: "<span>\n  {{ i.label }}\n  <span class=\"pl-sm text-grey\">{{ i.tip }}</span>\n</span>\n<div [ngSwitch]=\"i.type\">\n  <ng-container *ngSwitchCase=\"'color'\">\n    <input\n      nz-input\n      type=\"color\"\n      style=\"min-width: 88px\"\n      [(ngModel)]=\"i.value\"\n      [ngModelOptions]=\"{ standalone: true }\"\n    />\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'input'\">\n    <input nz-input style=\"min-width: 88px\" [(ngModel)]=\"i.value\" [ngModelOptions]=\"{ standalone: true }\" />\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'px'\">\n    <nz-input-number\n      [(ngModel)]=\"pxVal\"\n      (ngModelChange)=\"pxChange($event)\"\n      [nzMin]=\"i.min\"\n      [nzMax]=\"i.max\"\n      [nzStep]=\"i.step || 2\"\n      [nzFormatter]=\"format\"\n    ></nz-input-number>\n  </ng-container>\n  <ng-container *ngSwitchCase=\"'switch'\">\n    <nz-switch nzSize=\"small\" [(ngModel)]=\"i.value\" [ngModelOptions]=\"{ standalone: true }\"></nz-switch>\n  </ng-container>\n  <ng-container *ngSwitchDefault>\n    <ng-template nzDrawerContent></ng-template>\n  </ng-container>\n</div>\n" }]
        }], propDecorators: { data: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZy1kcmF3ZXItaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS9zZXR0aW5nLWRyYXdlci9zZXR0aW5nLWRyYXdlci1pdGVtLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lL3NldHRpbmctZHJhd2VyL3NldHRpbmctZHJhd2VyLWl0ZW0uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0FBSWpELE1BT2EsMEJBQTBCO0lBUHZDO1FBUUUsTUFBQyxHQUFjLEVBQUUsQ0FBQztRQVVsQixVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBTVYsV0FBTSxHQUFHLENBQUMsS0FBYSxFQUFVLEVBQUUsQ0FBQyxHQUFHLEtBQUssS0FBSyxDQUFDO0tBQ25EO0lBZkMsSUFDSSxJQUFJLENBQUMsR0FBYztRQUNyQixJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUNiLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUU7WUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztTQUMzQztJQUNILENBQUM7SUFJRCxRQUFRLENBQUMsR0FBVztRQUNsQixJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDO0lBQzVCLENBQUM7OEdBZlUsMEJBQTBCO2tHQUExQiwwQkFBMEIsMEpDWHZDLHlsQ0FrQ0E7O1NEdkJhLDBCQUEwQjsyRkFBMUIsMEJBQTBCO2tCQVB0QyxTQUFTOytCQUNFLHFCQUFxQixRQUV6Qjt3QkFDSixtQ0FBbUMsRUFBRSxNQUFNO3FCQUM1Qzs4QkFNRyxJQUFJO3NCQURQLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2V0dGluZy1kcmF3ZXItaXRlbScsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZXR0aW5nLWRyYXdlci1pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3Muc2V0dGluZy1kcmF3ZXJfX2JvZHktaXRlbV0nOiAndHJ1ZSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBTZXR0aW5nRHJhd2VySXRlbUNvbXBvbmVudCB7XG4gIGk6IE56U2FmZUFueSA9IHt9O1xuXG4gIEBJbnB1dCgpXG4gIHNldCBkYXRhKHZhbDogTnpTYWZlQW55KSB7XG4gICAgdGhpcy5pID0gdmFsO1xuICAgIGlmICh2YWwudHlwZSA9PT0gJ3B4Jykge1xuICAgICAgdGhpcy5weFZhbCA9ICt2YWwudmFsdWUucmVwbGFjZSgncHgnLCAnJyk7XG4gICAgfVxuICB9XG5cbiAgcHhWYWwgPSAwO1xuXG4gIHB4Q2hhbmdlKHZhbDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5pLnZhbHVlID0gYCR7dmFsfXB4YDtcbiAgfVxuXG4gIGZvcm1hdCA9ICh2YWx1ZTogbnVtYmVyKTogc3RyaW5nID0+IGAke3ZhbHVlfSBweGA7XG59XG4iLCI8c3Bhbj5cbiAge3sgaS5sYWJlbCB9fVxuICA8c3BhbiBjbGFzcz1cInBsLXNtIHRleHQtZ3JleVwiPnt7IGkudGlwIH19PC9zcGFuPlxuPC9zcGFuPlxuPGRpdiBbbmdTd2l0Y2hdPVwiaS50eXBlXCI+XG4gIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidjb2xvcidcIj5cbiAgICA8aW5wdXRcbiAgICAgIG56LWlucHV0XG4gICAgICB0eXBlPVwiY29sb3JcIlxuICAgICAgc3R5bGU9XCJtaW4td2lkdGg6IDg4cHhcIlxuICAgICAgWyhuZ01vZGVsKV09XCJpLnZhbHVlXCJcbiAgICAgIFtuZ01vZGVsT3B0aW9uc109XCJ7IHN0YW5kYWxvbmU6IHRydWUgfVwiXG4gICAgLz5cbiAgPC9uZy1jb250YWluZXI+XG4gIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidpbnB1dCdcIj5cbiAgICA8aW5wdXQgbnotaW5wdXQgc3R5bGU9XCJtaW4td2lkdGg6IDg4cHhcIiBbKG5nTW9kZWwpXT1cImkudmFsdWVcIiBbbmdNb2RlbE9wdGlvbnNdPVwieyBzdGFuZGFsb25lOiB0cnVlIH1cIiAvPlxuICA8L25nLWNvbnRhaW5lcj5cbiAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ3B4J1wiPlxuICAgIDxuei1pbnB1dC1udW1iZXJcbiAgICAgIFsobmdNb2RlbCldPVwicHhWYWxcIlxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwicHhDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICBbbnpNaW5dPVwiaS5taW5cIlxuICAgICAgW256TWF4XT1cImkubWF4XCJcbiAgICAgIFtuelN0ZXBdPVwiaS5zdGVwIHx8IDJcIlxuICAgICAgW256Rm9ybWF0dGVyXT1cImZvcm1hdFwiXG4gICAgPjwvbnotaW5wdXQtbnVtYmVyPlxuICA8L25nLWNvbnRhaW5lcj5cbiAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ3N3aXRjaCdcIj5cbiAgICA8bnotc3dpdGNoIG56U2l6ZT1cInNtYWxsXCIgWyhuZ01vZGVsKV09XCJpLnZhbHVlXCIgW25nTW9kZWxPcHRpb25zXT1cInsgc3RhbmRhbG9uZTogdHJ1ZSB9XCI+PC9uei1zd2l0Y2g+XG4gIDwvbmctY29udGFpbmVyPlxuICA8bmctY29udGFpbmVyICpuZ1N3aXRjaERlZmF1bHQ+XG4gICAgPG5nLXRlbXBsYXRlIG56RHJhd2VyQ29udGVudD48L25nLXRlbXBsYXRlPlxuICA8L25nLWNvbnRhaW5lcj5cbjwvZGl2PlxuIl19