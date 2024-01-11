import { NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { NzSpinComponent } from 'ng-zorro-antd/spin';
import * as i0 from "@angular/core";
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: LoadingDefaultComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.9", type: LoadingDefaultComponent, isStandalone: true, selector: "loading-default", host: { properties: { "class.loading-default": "true", "class.loading-default-rtl": "dir === 'rtl'" } }, ngImport: i0, template: "@if (options.type! !== 'text') {\n  <div class=\"loading-default__icon\">\n    @switch (options.type) {\n      @case ('spin') {\n        <nz-spin nzSimple />\n      }\n      @case ('icon') {\n        <i nz-icon [nzType]=\"icon.type!\" [nzTheme]=\"icon.theme!\" [nzSpin]=\"icon.spin\"></i>\n      }\n      @default {\n        <div class=\"loading-default__custom\" [ngStyle]=\"custom.style!\" [innerHTML]=\"custom.html\"></div>\n      }\n    }\n  </div>\n}\n@if (options.text) {\n  <div class=\"loading-default__text\">{{ options.text }}</div>\n}\n", dependencies: [{ kind: "component", type: NzSpinComponent, selector: "nz-spin", inputs: ["nzIndicator", "nzSize", "nzTip", "nzDelay", "nzSimple", "nzSpinning"], exportAs: ["nzSpin"] }, { kind: "directive", type: NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "directive", type: NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.9", ngImport: i0, type: LoadingDefaultComponent, decorators: [{
            type: Component,
            args: [{ selector: 'loading-default', host: {
                        '[class.loading-default]': 'true',
                        '[class.loading-default-rtl]': `dir === 'rtl'`
                    }, preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, standalone: true, imports: [NzSpinComponent, NzIconDirective, NgStyle], template: "@if (options.type! !== 'text') {\n  <div class=\"loading-default__icon\">\n    @switch (options.type) {\n      @case ('spin') {\n        <nz-spin nzSimple />\n      }\n      @case ('icon') {\n        <i nz-icon [nzType]=\"icon.type!\" [nzTheme]=\"icon.theme!\" [nzSpin]=\"icon.spin\"></i>\n      }\n      @default {\n        <div class=\"loading-default__custom\" [ngStyle]=\"custom.style!\" [innerHTML]=\"custom.html\"></div>\n      }\n    }\n  </div>\n}\n@if (options.text) {\n  <div class=\"loading-default__text\">{{ options.text }}</div>\n}\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzFDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7QUFpQnJELE1BQU0sT0FBTyx1QkFBdUI7SUFicEM7UUFlRSxRQUFHLEdBQWMsS0FBSyxDQUFDO0tBU3hCO0lBUEMsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUssQ0FBQztJQUM1QixDQUFDO0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU8sQ0FBQztJQUM5QixDQUFDOzhHQVZVLHVCQUF1QjtrR0FBdkIsdUJBQXVCLG9MQ3RCcEMscWlCQWtCQSw0Q0RFWSxlQUFlLDJKQUFFLGVBQWUsaUtBQUUsT0FBTzs7MkZBRXhDLHVCQUF1QjtrQkFibkMsU0FBUzsrQkFDRSxpQkFBaUIsUUFFckI7d0JBQ0oseUJBQXlCLEVBQUUsTUFBTTt3QkFDakMsNkJBQTZCLEVBQUUsZUFBZTtxQkFDL0MsdUJBQ29CLEtBQUssbUJBQ1QsdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSSxjQUN6QixJQUFJLFdBQ1AsQ0FBQyxlQUFlLEVBQUUsZUFBZSxFQUFFLE9BQU8sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IE5nU3R5bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTnpJY29uRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcbmltcG9ydCB7IE56U3BpbkNvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvc3Bpbic7XG5cbmltcG9ydCB7IExvYWRpbmdDdXN0b20sIExvYWRpbmdJY29uLCBMb2FkaW5nU2hvd09wdGlvbnMgfSBmcm9tICcuL2xvYWRpbmcudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsb2FkaW5nLWRlZmF1bHQnLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9hZGluZy5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmxvYWRpbmctZGVmYXVsdF0nOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5sb2FkaW5nLWRlZmF1bHQtcnRsXSc6IGBkaXIgPT09ICdydGwnYFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtOelNwaW5Db21wb25lbnQsIE56SWNvbkRpcmVjdGl2ZSwgTmdTdHlsZV1cbn0pXG5leHBvcnQgY2xhc3MgTG9hZGluZ0RlZmF1bHRDb21wb25lbnQge1xuICBvcHRpb25zITogTG9hZGluZ1Nob3dPcHRpb25zO1xuICBkaXI6IERpcmVjdGlvbiA9ICdsdHInO1xuXG4gIGdldCBpY29uKCk6IExvYWRpbmdJY29uIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmljb24hO1xuICB9XG5cbiAgZ2V0IGN1c3RvbSgpOiBMb2FkaW5nQ3VzdG9tIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmN1c3RvbSE7XG4gIH1cbn1cbiIsIkBpZiAob3B0aW9ucy50eXBlISAhPT0gJ3RleHQnKSB7XG4gIDxkaXYgY2xhc3M9XCJsb2FkaW5nLWRlZmF1bHRfX2ljb25cIj5cbiAgICBAc3dpdGNoIChvcHRpb25zLnR5cGUpIHtcbiAgICAgIEBjYXNlICgnc3BpbicpIHtcbiAgICAgICAgPG56LXNwaW4gbnpTaW1wbGUgLz5cbiAgICAgIH1cbiAgICAgIEBjYXNlICgnaWNvbicpIHtcbiAgICAgICAgPGkgbnotaWNvbiBbbnpUeXBlXT1cImljb24udHlwZSFcIiBbbnpUaGVtZV09XCJpY29uLnRoZW1lIVwiIFtuelNwaW5dPVwiaWNvbi5zcGluXCI+PC9pPlxuICAgICAgfVxuICAgICAgQGRlZmF1bHQge1xuICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZy1kZWZhdWx0X19jdXN0b21cIiBbbmdTdHlsZV09XCJjdXN0b20uc3R5bGUhXCIgW2lubmVySFRNTF09XCJjdXN0b20uaHRtbFwiPjwvZGl2PlxuICAgICAgfVxuICAgIH1cbiAgPC9kaXY+XG59XG5AaWYgKG9wdGlvbnMudGV4dCkge1xuICA8ZGl2IGNsYXNzPVwibG9hZGluZy1kZWZhdWx0X190ZXh0XCI+e3sgb3B0aW9ucy50ZXh0IH19PC9kaXY+XG59XG4iXX0=