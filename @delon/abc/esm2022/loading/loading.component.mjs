import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/icon";
import * as i3 from "ng-zorro-antd/spin";
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: LoadingDefaultComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.2", type: LoadingDefaultComponent, selector: "loading-default", host: { properties: { "class.loading-default": "true", "class.loading-default-rtl": "dir === 'rtl'" } }, ngImport: i0, template: "<div class=\"loading-default__icon\" *ngIf=\"options.type! !== 'text'\">\n  <ng-container [ngSwitch]=\"options.type!\">\n    <nz-spin *ngSwitchCase=\"'spin'\" nzSimple />\n    <i *ngSwitchCase=\"'icon'\" nz-icon [nzType]=\"icon.type!\" [nzTheme]=\"icon.theme!\" [nzSpin]=\"icon.spin\"></i>\n    <div *ngSwitchDefault class=\"loading-default__custom\" [ngStyle]=\"custom.style!\" [innerHTML]=\"custom.html\"></div>\n  </ng-container>\n</div>\n<div *ngIf=\"options.text\" class=\"loading-default__text\">{{ options.text }}</div>\n", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i1.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: i1.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "directive", type: i1.NgSwitchDefault, selector: "[ngSwitchDefault]" }, { kind: "directive", type: i2.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "component", type: i3.NzSpinComponent, selector: "nz-spin", inputs: ["nzIndicator", "nzSize", "nzTip", "nzDelay", "nzSimple", "nzSpinning"], exportAs: ["nzSpin"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: LoadingDefaultComponent, decorators: [{
            type: Component,
            args: [{ selector: 'loading-default', host: {
                        '[class.loading-default]': 'true',
                        '[class.loading-default-rtl]': `dir === 'rtl'`
                    }, preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div class=\"loading-default__icon\" *ngIf=\"options.type! !== 'text'\">\n  <ng-container [ngSwitch]=\"options.type!\">\n    <nz-spin *ngSwitchCase=\"'spin'\" nzSimple />\n    <i *ngSwitchCase=\"'icon'\" nz-icon [nzType]=\"icon.type!\" [nzTheme]=\"icon.theme!\" [nzSpin]=\"icon.spin\"></i>\n    <div *ngSwitchDefault class=\"loading-default__custom\" [ngStyle]=\"custom.style!\" [innerHTML]=\"custom.html\"></div>\n  </ng-container>\n</div>\n<div *ngIf=\"options.text\" class=\"loading-default__text\">{{ options.text }}</div>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFldEYsTUFBTSxPQUFPLHVCQUF1QjtJQVhwQztRQWFFLFFBQUcsR0FBYyxLQUFLLENBQUM7S0FTeEI7SUFQQyxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSyxDQUFDO0lBQzVCLENBQUM7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTyxDQUFDO0lBQzlCLENBQUM7OEdBVlUsdUJBQXVCO2tHQUF2Qix1QkFBdUIsZ0tDaEJwQyxraEJBUUE7OzJGRFFhLHVCQUF1QjtrQkFYbkMsU0FBUzsrQkFDRSxpQkFBaUIsUUFFckI7d0JBQ0oseUJBQXlCLEVBQUUsTUFBTTt3QkFDakMsNkJBQTZCLEVBQUUsZUFBZTtxQkFDL0MsdUJBQ29CLEtBQUssbUJBQ1QsdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IExvYWRpbmdDdXN0b20sIExvYWRpbmdJY29uLCBMb2FkaW5nU2hvd09wdGlvbnMgfSBmcm9tICcuL2xvYWRpbmcudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsb2FkaW5nLWRlZmF1bHQnLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9hZGluZy5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmxvYWRpbmctZGVmYXVsdF0nOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5sb2FkaW5nLWRlZmF1bHQtcnRsXSc6IGBkaXIgPT09ICdydGwnYFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgTG9hZGluZ0RlZmF1bHRDb21wb25lbnQge1xuICBvcHRpb25zITogTG9hZGluZ1Nob3dPcHRpb25zO1xuICBkaXI6IERpcmVjdGlvbiA9ICdsdHInO1xuXG4gIGdldCBpY29uKCk6IExvYWRpbmdJY29uIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmljb24hO1xuICB9XG5cbiAgZ2V0IGN1c3RvbSgpOiBMb2FkaW5nQ3VzdG9tIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmN1c3RvbSE7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJsb2FkaW5nLWRlZmF1bHRfX2ljb25cIiAqbmdJZj1cIm9wdGlvbnMudHlwZSEgIT09ICd0ZXh0J1wiPlxuICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJvcHRpb25zLnR5cGUhXCI+XG4gICAgPG56LXNwaW4gKm5nU3dpdGNoQ2FzZT1cIidzcGluJ1wiIG56U2ltcGxlIC8+XG4gICAgPGkgKm5nU3dpdGNoQ2FzZT1cIidpY29uJ1wiIG56LWljb24gW256VHlwZV09XCJpY29uLnR5cGUhXCIgW256VGhlbWVdPVwiaWNvbi50aGVtZSFcIiBbbnpTcGluXT1cImljb24uc3BpblwiPjwvaT5cbiAgICA8ZGl2ICpuZ1N3aXRjaERlZmF1bHQgY2xhc3M9XCJsb2FkaW5nLWRlZmF1bHRfX2N1c3RvbVwiIFtuZ1N0eWxlXT1cImN1c3RvbS5zdHlsZSFcIiBbaW5uZXJIVE1MXT1cImN1c3RvbS5odG1sXCI+PC9kaXY+XG4gIDwvbmctY29udGFpbmVyPlxuPC9kaXY+XG48ZGl2ICpuZ0lmPVwib3B0aW9ucy50ZXh0XCIgY2xhc3M9XCJsb2FkaW5nLWRlZmF1bHRfX3RleHRcIj57eyBvcHRpb25zLnRleHQgfX08L2Rpdj5cbiJdfQ==