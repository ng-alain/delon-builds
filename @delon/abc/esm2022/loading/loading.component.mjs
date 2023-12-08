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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.2", type: LoadingDefaultComponent, selector: "loading-default", host: { properties: { "class.loading-default": "true", "class.loading-default-rtl": "dir === 'rtl'" } }, ngImport: i0, template: "@if (options.type! !== 'text') {\n  <div class=\"loading-default__icon\">\n    @switch (options.type) {\n      @case ('spin') {\n        <nz-spin nzSimple />\n      }\n      @case ('icon') {\n        <i nz-icon [nzType]=\"icon.type!\" [nzTheme]=\"icon.theme!\" [nzSpin]=\"icon.spin\"></i>\n      }\n      @default {\n        <div class=\"loading-default__custom\" [ngStyle]=\"custom.style!\" [innerHTML]=\"custom.html\"></div>\n      }\n    }\n  </div>\n}\n@if (options.text) {\n  <div class=\"loading-default__text\">{{ options.text }}</div>\n}\n", dependencies: [{ kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i2.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "component", type: i3.NzSpinComponent, selector: "nz-spin", inputs: ["nzIndicator", "nzSize", "nzTip", "nzDelay", "nzSimple", "nzSpinning"], exportAs: ["nzSpin"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: LoadingDefaultComponent, decorators: [{
            type: Component,
            args: [{ selector: 'loading-default', host: {
                        '[class.loading-default]': 'true',
                        '[class.loading-default-rtl]': `dir === 'rtl'`
                    }, preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "@if (options.type! !== 'text') {\n  <div class=\"loading-default__icon\">\n    @switch (options.type) {\n      @case ('spin') {\n        <nz-spin nzSimple />\n      }\n      @case ('icon') {\n        <i nz-icon [nzType]=\"icon.type!\" [nzTheme]=\"icon.theme!\" [nzSpin]=\"icon.spin\"></i>\n      }\n      @default {\n        <div class=\"loading-default__custom\" [ngStyle]=\"custom.style!\" [innerHTML]=\"custom.html\"></div>\n      }\n    }\n  </div>\n}\n@if (options.text) {\n  <div class=\"loading-default__text\">{{ options.text }}</div>\n}\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFldEYsTUFBTSxPQUFPLHVCQUF1QjtJQVhwQztRQWFFLFFBQUcsR0FBYyxLQUFLLENBQUM7S0FTeEI7SUFQQyxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSyxDQUFDO0lBQzVCLENBQUM7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTyxDQUFDO0lBQzlCLENBQUM7OEdBVlUsdUJBQXVCO2tHQUF2Qix1QkFBdUIsZ0tDaEJwQyxxaUJBa0JBOzsyRkRGYSx1QkFBdUI7a0JBWG5DLFNBQVM7K0JBQ0UsaUJBQWlCLFFBRXJCO3dCQUNKLHlCQUF5QixFQUFFLE1BQU07d0JBQ2pDLDZCQUE2QixFQUFFLGVBQWU7cUJBQy9DLHVCQUNvQixLQUFLLG1CQUNULHVCQUF1QixDQUFDLE1BQU0saUJBQ2hDLGlCQUFpQixDQUFDLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3Rpb24gfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBMb2FkaW5nQ3VzdG9tLCBMb2FkaW5nSWNvbiwgTG9hZGluZ1Nob3dPcHRpb25zIH0gZnJvbSAnLi9sb2FkaW5nLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbG9hZGluZy1kZWZhdWx0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvYWRpbmcuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5sb2FkaW5nLWRlZmF1bHRdJzogJ3RydWUnLFxuICAgICdbY2xhc3MubG9hZGluZy1kZWZhdWx0LXJ0bF0nOiBgZGlyID09PSAncnRsJ2BcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIExvYWRpbmdEZWZhdWx0Q29tcG9uZW50IHtcbiAgb3B0aW9ucyE6IExvYWRpbmdTaG93T3B0aW9ucztcbiAgZGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcblxuICBnZXQgaWNvbigpOiBMb2FkaW5nSWNvbiB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5pY29uITtcbiAgfVxuXG4gIGdldCBjdXN0b20oKTogTG9hZGluZ0N1c3RvbSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5jdXN0b20hO1xuICB9XG59XG4iLCJAaWYgKG9wdGlvbnMudHlwZSEgIT09ICd0ZXh0Jykge1xuICA8ZGl2IGNsYXNzPVwibG9hZGluZy1kZWZhdWx0X19pY29uXCI+XG4gICAgQHN3aXRjaCAob3B0aW9ucy50eXBlKSB7XG4gICAgICBAY2FzZSAoJ3NwaW4nKSB7XG4gICAgICAgIDxuei1zcGluIG56U2ltcGxlIC8+XG4gICAgICB9XG4gICAgICBAY2FzZSAoJ2ljb24nKSB7XG4gICAgICAgIDxpIG56LWljb24gW256VHlwZV09XCJpY29uLnR5cGUhXCIgW256VGhlbWVdPVwiaWNvbi50aGVtZSFcIiBbbnpTcGluXT1cImljb24uc3BpblwiPjwvaT5cbiAgICAgIH1cbiAgICAgIEBkZWZhdWx0IHtcbiAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRpbmctZGVmYXVsdF9fY3VzdG9tXCIgW25nU3R5bGVdPVwiY3VzdG9tLnN0eWxlIVwiIFtpbm5lckhUTUxdPVwiY3VzdG9tLmh0bWxcIj48L2Rpdj5cbiAgICAgIH1cbiAgICB9XG4gIDwvZGl2PlxufVxuQGlmIChvcHRpb25zLnRleHQpIHtcbiAgPGRpdiBjbGFzcz1cImxvYWRpbmctZGVmYXVsdF9fdGV4dFwiPnt7IG9wdGlvbnMudGV4dCB9fTwvZGl2PlxufVxuIl19