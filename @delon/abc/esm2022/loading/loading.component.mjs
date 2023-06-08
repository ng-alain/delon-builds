import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/icon";
import * as i3 from "ng-zorro-antd/spin";
class LoadingDefaultComponent {
    constructor() {
        this.dir = 'ltr';
    }
    get icon() {
        return this.options.icon;
    }
    get custom() {
        return this.options.custom;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: LoadingDefaultComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.4", type: LoadingDefaultComponent, selector: "loading-default", host: { properties: { "class.loading-default": "true", "class.loading-default-rtl": "dir === 'rtl'" } }, ngImport: i0, template: "<div class=\"loading-default__icon\" *ngIf=\"options.type! !== 'text'\">\n  <ng-container [ngSwitch]=\"options.type!\">\n    <nz-spin *ngSwitchCase=\"'spin'\" nzSimple></nz-spin>\n    <i *ngSwitchCase=\"'icon'\" nz-icon [nzType]=\"icon.type!\" [nzTheme]=\"icon.theme!\" [nzSpin]=\"icon.spin\"></i>\n    <div *ngSwitchDefault class=\"loading-default__custom\" [ngStyle]=\"custom.style!\" [innerHTML]=\"custom.html\"></div>\n  </ng-container>\n</div>\n<div *ngIf=\"options.text\" class=\"loading-default__text\">{{ options.text }}</div>\n", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i1.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: i1.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "directive", type: i1.NgSwitchDefault, selector: "[ngSwitchDefault]" }, { kind: "directive", type: i2.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "component", type: i3.NzSpinComponent, selector: "nz-spin", inputs: ["nzIndicator", "nzSize", "nzTip", "nzDelay", "nzSimple", "nzSpinning"], exportAs: ["nzSpin"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
export { LoadingDefaultComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: LoadingDefaultComponent, decorators: [{
            type: Component,
            args: [{ selector: 'loading-default', host: {
                        '[class.loading-default]': 'true',
                        '[class.loading-default-rtl]': `dir === 'rtl'`
                    }, preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div class=\"loading-default__icon\" *ngIf=\"options.type! !== 'text'\">\n  <ng-container [ngSwitch]=\"options.type!\">\n    <nz-spin *ngSwitchCase=\"'spin'\" nzSimple></nz-spin>\n    <i *ngSwitchCase=\"'icon'\" nz-icon [nzType]=\"icon.type!\" [nzTheme]=\"icon.theme!\" [nzSpin]=\"icon.spin\"></i>\n    <div *ngSwitchDefault class=\"loading-default__custom\" [ngStyle]=\"custom.style!\" [innerHTML]=\"custom.html\"></div>\n  </ng-container>\n</div>\n<div *ngIf=\"options.text\" class=\"loading-default__text\">{{ options.text }}</div>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFJdEYsTUFXYSx1QkFBdUI7SUFYcEM7UUFhRSxRQUFHLEdBQWMsS0FBSyxDQUFDO0tBU3hCO0lBUEMsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUssQ0FBQztJQUM1QixDQUFDO0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU8sQ0FBQztJQUM5QixDQUFDOzhHQVZVLHVCQUF1QjtrR0FBdkIsdUJBQXVCLGdLQ2hCcEMsMGhCQVFBOztTRFFhLHVCQUF1QjsyRkFBdkIsdUJBQXVCO2tCQVhuQyxTQUFTOytCQUNFLGlCQUFpQixRQUVyQjt3QkFDSix5QkFBeUIsRUFBRSxNQUFNO3dCQUNqQyw2QkFBNkIsRUFBRSxlQUFlO3FCQUMvQyx1QkFDb0IsS0FBSyxtQkFDVCx1QkFBdUIsQ0FBQyxNQUFNLGlCQUNoQyxpQkFBaUIsQ0FBQyxJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTG9hZGluZ0N1c3RvbSwgTG9hZGluZ0ljb24sIExvYWRpbmdTaG93T3B0aW9ucyB9IGZyb20gJy4vbG9hZGluZy50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xvYWRpbmctZGVmYXVsdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9sb2FkaW5nLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MubG9hZGluZy1kZWZhdWx0XSc6ICd0cnVlJyxcbiAgICAnW2NsYXNzLmxvYWRpbmctZGVmYXVsdC1ydGxdJzogYGRpciA9PT0gJ3J0bCdgXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBMb2FkaW5nRGVmYXVsdENvbXBvbmVudCB7XG4gIG9wdGlvbnMhOiBMb2FkaW5nU2hvd09wdGlvbnM7XG4gIGRpcjogRGlyZWN0aW9uID0gJ2x0cic7XG5cbiAgZ2V0IGljb24oKTogTG9hZGluZ0ljb24ge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuaWNvbiE7XG4gIH1cblxuICBnZXQgY3VzdG9tKCk6IExvYWRpbmdDdXN0b20ge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY3VzdG9tITtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImxvYWRpbmctZGVmYXVsdF9faWNvblwiICpuZ0lmPVwib3B0aW9ucy50eXBlISAhPT0gJ3RleHQnXCI+XG4gIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cIm9wdGlvbnMudHlwZSFcIj5cbiAgICA8bnotc3BpbiAqbmdTd2l0Y2hDYXNlPVwiJ3NwaW4nXCIgbnpTaW1wbGU+PC9uei1zcGluPlxuICAgIDxpICpuZ1N3aXRjaENhc2U9XCInaWNvbidcIiBuei1pY29uIFtuelR5cGVdPVwiaWNvbi50eXBlIVwiIFtuelRoZW1lXT1cImljb24udGhlbWUhXCIgW256U3Bpbl09XCJpY29uLnNwaW5cIj48L2k+XG4gICAgPGRpdiAqbmdTd2l0Y2hEZWZhdWx0IGNsYXNzPVwibG9hZGluZy1kZWZhdWx0X19jdXN0b21cIiBbbmdTdHlsZV09XCJjdXN0b20uc3R5bGUhXCIgW2lubmVySFRNTF09XCJjdXN0b20uaHRtbFwiPjwvZGl2PlxuICA8L25nLWNvbnRhaW5lcj5cbjwvZGl2PlxuPGRpdiAqbmdJZj1cIm9wdGlvbnMudGV4dFwiIGNsYXNzPVwibG9hZGluZy1kZWZhdWx0X190ZXh0XCI+e3sgb3B0aW9ucy50ZXh0IH19PC9kaXY+XG4iXX0=