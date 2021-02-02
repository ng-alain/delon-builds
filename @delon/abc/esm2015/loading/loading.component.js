import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/spin";
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
/** @nocollapse */ LoadingDefaultComponent.ɵfac = function LoadingDefaultComponent_Factory(t) { return new (t || LoadingDefaultComponent)(); };
/** @nocollapse */ LoadingDefaultComponent.ɵcmp = i0.ɵɵngDeclareComponent({ version: "11.1.1", type: LoadingDefaultComponent, selector: "loading-default", host: { properties: { "class.loading-default": "true", "class.loading-default-rtl": "dir === 'rtl'" } }, ngImport: i0, template: "<div class=\"loading-default__icon\" *ngIf=\"options.type !== 'text'\">\n  <ng-container [ngSwitch]=\"options.type\">\n    <nz-spin *ngSwitchCase=\"'spin'\" nzSimple></nz-spin>\n    <i *ngSwitchCase=\"'icon'\" nz-icon [nzType]=\"icon.type\" [nzTheme]=\"icon.theme\" [nzSpin]=\"icon.spin\"></i>\n    <div *ngSwitchDefault class=\"loading-default__custom\" [ngStyle]=\"custom.style\" [innerHTML]=\"custom.html\"></div>\n  </ng-container>\n</div>\n<div *ngIf=\"options.text\" class=\"loading-default__text\">{{ options.text }}</div>\n", directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { type: i1.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { type: i2.NzSpinComponent, selector: "nz-spin", inputs: ["nzIndicator", "nzSize", "nzTip", "nzDelay", "nzSimple", "nzSpinning"], exportAs: ["nzSpin"] }, { type: i3.NzIconDirective, selector: "[nz-icon]", inputs: ["nzRotate", "nzSpin", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { type: i1.NgSwitchDefault, selector: "[ngSwitchDefault]" }, { type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoadingDefaultComponent, [{
        type: Component,
        args: [{
                selector: 'loading-default',
                templateUrl: './loading.component.html',
                host: {
                    '[class.loading-default]': 'true',
                    '[class.loading-default-rtl]': `dir === 'rtl'`,
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFjdEYsTUFBTSxPQUFPLHVCQUF1QjtJQVhwQztRQWFFLFFBQUcsR0FBYyxLQUFLLENBQUM7S0FTeEI7SUFQQyxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSyxDQUFDO0lBQzVCLENBQUM7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTyxDQUFDO0lBQzlCLENBQUM7O2lIQVZVLHVCQUF1QjtxR0FBdkIsdUJBQXVCLGdLQ2ZwQyxxaEJBUUE7dUZET2EsdUJBQXVCO2NBWG5DLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixXQUFXLEVBQUUsMEJBQTBCO2dCQUN2QyxJQUFJLEVBQUU7b0JBQ0oseUJBQXlCLEVBQUUsTUFBTTtvQkFDakMsNkJBQTZCLEVBQUUsZUFBZTtpQkFDL0M7Z0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExvYWRpbmdDdXN0b20sIExvYWRpbmdJY29uLCBMb2FkaW5nU2hvd09wdGlvbnMgfSBmcm9tICcuL2xvYWRpbmcudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsb2FkaW5nLWRlZmF1bHQnLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9hZGluZy5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmxvYWRpbmctZGVmYXVsdF0nOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5sb2FkaW5nLWRlZmF1bHQtcnRsXSc6IGBkaXIgPT09ICdydGwnYCxcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBMb2FkaW5nRGVmYXVsdENvbXBvbmVudCB7XG4gIG9wdGlvbnM6IExvYWRpbmdTaG93T3B0aW9ucztcbiAgZGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcblxuICBnZXQgaWNvbigpOiBMb2FkaW5nSWNvbiB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5pY29uITtcbiAgfVxuXG4gIGdldCBjdXN0b20oKTogTG9hZGluZ0N1c3RvbSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5jdXN0b20hO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwibG9hZGluZy1kZWZhdWx0X19pY29uXCIgKm5nSWY9XCJvcHRpb25zLnR5cGUgIT09ICd0ZXh0J1wiPlxuICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJvcHRpb25zLnR5cGVcIj5cbiAgICA8bnotc3BpbiAqbmdTd2l0Y2hDYXNlPVwiJ3NwaW4nXCIgbnpTaW1wbGU+PC9uei1zcGluPlxuICAgIDxpICpuZ1N3aXRjaENhc2U9XCInaWNvbidcIiBuei1pY29uIFtuelR5cGVdPVwiaWNvbi50eXBlXCIgW256VGhlbWVdPVwiaWNvbi50aGVtZVwiIFtuelNwaW5dPVwiaWNvbi5zcGluXCI+PC9pPlxuICAgIDxkaXYgKm5nU3dpdGNoRGVmYXVsdCBjbGFzcz1cImxvYWRpbmctZGVmYXVsdF9fY3VzdG9tXCIgW25nU3R5bGVdPVwiY3VzdG9tLnN0eWxlXCIgW2lubmVySFRNTF09XCJjdXN0b20uaHRtbFwiPjwvZGl2PlxuICA8L25nLWNvbnRhaW5lcj5cbjwvZGl2PlxuPGRpdiAqbmdJZj1cIm9wdGlvbnMudGV4dFwiIGNsYXNzPVwibG9hZGluZy1kZWZhdWx0X190ZXh0XCI+e3sgb3B0aW9ucy50ZXh0IH19PC9kaXY+XG4iXX0=