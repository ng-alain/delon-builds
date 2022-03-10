import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/spin";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/icon";
export class LoadingDefaultComponent {
    constructor() {
        this.dir = 'ltr';
    }
    get icon() {
        return this.options.icon;
    }
    get custom() {
        return this.options.custom;
    }
}
LoadingDefaultComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.6", ngImport: i0, type: LoadingDefaultComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
LoadingDefaultComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.6", type: LoadingDefaultComponent, selector: "loading-default", host: { properties: { "class.loading-default": "true", "class.loading-default-rtl": "dir === 'rtl'" } }, ngImport: i0, template: "<div class=\"loading-default__icon\" *ngIf=\"options.type! !== 'text'\">\n  <ng-container [ngSwitch]=\"options.type!\">\n    <nz-spin *ngSwitchCase=\"'spin'\" nzSimple></nz-spin>\n    <i *ngSwitchCase=\"'icon'\" nz-icon [nzType]=\"icon.type!\" [nzTheme]=\"icon.theme!\" [nzSpin]=\"icon.spin\"></i>\n    <div *ngSwitchDefault class=\"loading-default__custom\" [ngStyle]=\"custom.style!\" [innerHTML]=\"custom.html\"></div>\n  </ng-container>\n</div>\n<div *ngIf=\"options.text\" class=\"loading-default__text\">{{ options.text }}</div>\n", components: [{ type: i1.NzSpinComponent, selector: "nz-spin", inputs: ["nzIndicator", "nzSize", "nzTip", "nzDelay", "nzSimple", "nzSpinning"], exportAs: ["nzSpin"] }], directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { type: i2.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { type: i3.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { type: i2.NgSwitchDefault, selector: "[ngSwitchDefault]" }, { type: i2.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.6", ngImport: i0, type: LoadingDefaultComponent, decorators: [{
            type: Component,
            args: [{ selector: 'loading-default', host: {
                        '[class.loading-default]': 'true',
                        '[class.loading-default-rtl]': `dir === 'rtl'`
                    }, preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div class=\"loading-default__icon\" *ngIf=\"options.type! !== 'text'\">\n  <ng-container [ngSwitch]=\"options.type!\">\n    <nz-spin *ngSwitchCase=\"'spin'\" nzSimple></nz-spin>\n    <i *ngSwitchCase=\"'icon'\" nz-icon [nzType]=\"icon.type!\" [nzTheme]=\"icon.theme!\" [nzSpin]=\"icon.spin\"></i>\n    <div *ngSwitchDefault class=\"loading-default__custom\" [ngStyle]=\"custom.style!\" [innerHTML]=\"custom.html\"></div>\n  </ng-container>\n</div>\n<div *ngIf=\"options.text\" class=\"loading-default__text\">{{ options.text }}</div>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFldEYsTUFBTSxPQUFPLHVCQUF1QjtJQVhwQztRQWFFLFFBQUcsR0FBYyxLQUFLLENBQUM7S0FTeEI7SUFQQyxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSyxDQUFDO0lBQzVCLENBQUM7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTyxDQUFDO0lBQzlCLENBQUM7O29IQVZVLHVCQUF1Qjt3R0FBdkIsdUJBQXVCLGdLQ2hCcEMsMGhCQVFBOzJGRFFhLHVCQUF1QjtrQkFYbkMsU0FBUzsrQkFDRSxpQkFBaUIsUUFFckI7d0JBQ0oseUJBQXlCLEVBQUUsTUFBTTt3QkFDakMsNkJBQTZCLEVBQUUsZUFBZTtxQkFDL0MsdUJBQ29CLEtBQUssbUJBQ1QsdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IExvYWRpbmdDdXN0b20sIExvYWRpbmdJY29uLCBMb2FkaW5nU2hvd09wdGlvbnMgfSBmcm9tICcuL2xvYWRpbmcudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsb2FkaW5nLWRlZmF1bHQnLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9hZGluZy5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmxvYWRpbmctZGVmYXVsdF0nOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5sb2FkaW5nLWRlZmF1bHQtcnRsXSc6IGBkaXIgPT09ICdydGwnYFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgTG9hZGluZ0RlZmF1bHRDb21wb25lbnQge1xuICBvcHRpb25zITogTG9hZGluZ1Nob3dPcHRpb25zO1xuICBkaXI6IERpcmVjdGlvbiA9ICdsdHInO1xuXG4gIGdldCBpY29uKCk6IExvYWRpbmdJY29uIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmljb24hO1xuICB9XG5cbiAgZ2V0IGN1c3RvbSgpOiBMb2FkaW5nQ3VzdG9tIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmN1c3RvbSE7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJsb2FkaW5nLWRlZmF1bHRfX2ljb25cIiAqbmdJZj1cIm9wdGlvbnMudHlwZSEgIT09ICd0ZXh0J1wiPlxuICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJvcHRpb25zLnR5cGUhXCI+XG4gICAgPG56LXNwaW4gKm5nU3dpdGNoQ2FzZT1cIidzcGluJ1wiIG56U2ltcGxlPjwvbnotc3Bpbj5cbiAgICA8aSAqbmdTd2l0Y2hDYXNlPVwiJ2ljb24nXCIgbnotaWNvbiBbbnpUeXBlXT1cImljb24udHlwZSFcIiBbbnpUaGVtZV09XCJpY29uLnRoZW1lIVwiIFtuelNwaW5dPVwiaWNvbi5zcGluXCI+PC9pPlxuICAgIDxkaXYgKm5nU3dpdGNoRGVmYXVsdCBjbGFzcz1cImxvYWRpbmctZGVmYXVsdF9fY3VzdG9tXCIgW25nU3R5bGVdPVwiY3VzdG9tLnN0eWxlIVwiIFtpbm5lckhUTUxdPVwiY3VzdG9tLmh0bWxcIj48L2Rpdj5cbiAgPC9uZy1jb250YWluZXI+XG48L2Rpdj5cbjxkaXYgKm5nSWY9XCJvcHRpb25zLnRleHRcIiBjbGFzcz1cImxvYWRpbmctZGVmYXVsdF9fdGV4dFwiPnt7IG9wdGlvbnMudGV4dCB9fTwvZGl2PlxuIl19