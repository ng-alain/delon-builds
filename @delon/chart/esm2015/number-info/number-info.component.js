import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { InputNumber } from '@delon/util/decorator';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/core/outlet";
import * as i3 from "ng-zorro-antd/icon";
export class NumberInfoComponent {
    constructor() {
        /** 状态样式 */
        this.theme = 'light';
        /** 设置数字和描述直接的间距（像素） */
        this.gap = 8;
    }
}
/** @nocollapse */ NumberInfoComponent.ɵfac = function NumberInfoComponent_Factory(t) { return new (t || NumberInfoComponent)(); };
/** @nocollapse */ NumberInfoComponent.ɵcmp = i0.ɵɵngDeclareComponent({ version: "11.1.1", type: NumberInfoComponent, selector: "number-info", inputs: { title: "title", subTitle: "subTitle", total: "total", subTotal: "subTotal", suffix: "suffix", status: "status", theme: "theme", gap: "gap" }, host: { properties: { "class.number-info": "true", "class.number-info__light": "theme === 'light'", "class.number-info__default": "theme === 'default'" } }, exportAs: ["numberInfo"], ngImport: i0, template: "<div *ngIf=\"title\" class=\"number-info__title\">\n  <ng-container *nzStringTemplateOutlet=\"title\">{{ title }}</ng-container>\n</div>\n<div *ngIf=\"subTitle\" class=\"number-info__title-sub\">\n  <ng-container *nzStringTemplateOutlet=\"subTitle\">{{ subTitle }}</ng-container>\n</div>\n<div class=\"number-info__value\" [ngStyle]=\"{ 'margin-top.px': gap }\">\n  <span class=\"number-info__value-text\">\n    <ng-container *nzStringTemplateOutlet=\"total\">{{ total }}</ng-container>\n    <em class=\"number-info__value-suffix\" *ngIf=\"suffix\">{{ suffix }}</em>\n  </span>\n  <span *ngIf=\"status || subTotal\" class=\"number-info__value-text number-info__value-sub\">\n    <ng-container *nzStringTemplateOutlet=\"subTotal\">{{ subTotal }}</ng-container>\n    <i *ngIf=\"status\" nz-icon nzType=\"caret-{{ status }}\"></i>\n  </span>\n</div>\n", directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { type: i3.NzIconDirective, selector: "[nz-icon]", inputs: ["nzRotate", "nzSpin", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], NumberInfoComponent.prototype, "gap", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NumberInfoComponent, [{
        type: Component,
        args: [{
                selector: 'number-info',
                exportAs: 'numberInfo',
                templateUrl: './number-info.component.html',
                host: {
                    '[class.number-info]': `true`,
                    '[class.number-info__light]': `theme === 'light'`,
                    '[class.number-info__default]': `theme === 'default'`,
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], null, { title: [{
            type: Input
        }], subTitle: [{
            type: Input
        }], total: [{
            type: Input
        }], subTotal: [{
            type: Input
        }], suffix: [{
            type: Input
        }], status: [{
            type: Input
        }], theme: [{
            type: Input
        }], gap: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWluZm8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY2hhcnQvbnVtYmVyLWluZm8vbnVtYmVyLWluZm8uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY2hhcnQvbnVtYmVyLWluZm8vbnVtYmVyLWluZm8uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFlLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFHLE9BQU8sRUFBRSxXQUFXLEVBQWUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7QUFlakUsTUFBTSxPQUFPLG1CQUFtQjtJQWJoQztRQTRCRSxXQUFXO1FBQ0YsVUFBSyxHQUF3QixPQUFPLENBQUM7UUFDOUMsdUJBQXVCO1FBQ0MsUUFBRyxHQUFHLENBQUMsQ0FBQztLQUNqQzs7eUdBbkJZLG1CQUFtQjtpR0FBbkIsbUJBQW1CLGtZQ2hCaEMsazFCQWdCQTtBRGtCMEI7SUFBZCxXQUFXLEVBQUU7O2dEQUFTO3VGQWxCckIsbUJBQW1CO2NBYi9CLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFdBQVcsRUFBRSw4QkFBOEI7Z0JBQzNDLElBQUksRUFBRTtvQkFDSixxQkFBcUIsRUFBRSxNQUFNO29CQUM3Qiw0QkFBNEIsRUFBRSxtQkFBbUI7b0JBQ2pELDhCQUE4QixFQUFFLHFCQUFxQjtpQkFDdEQ7Z0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDO2dCQUtVLEtBQUs7a0JBQWIsS0FBSztZQUVHLFFBQVE7a0JBQWhCLEtBQUs7WUFFRyxLQUFLO2tCQUFiLEtBQUs7WUFFRyxRQUFRO2tCQUFoQixLQUFLO1lBRUcsTUFBTTtrQkFBZCxLQUFLO1lBRUcsTUFBTTtrQkFBZCxLQUFLO1lBRUcsS0FBSztrQkFBYixLQUFLO1lBRWtCLEdBQUc7a0JBQTFCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbnB1dE51bWJlciwgTnVtYmVySW5wdXQgfSBmcm9tICdAZGVsb24vdXRpbC9kZWNvcmF0b3InO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdudW1iZXItaW5mbycsXG4gIGV4cG9ydEFzOiAnbnVtYmVySW5mbycsXG4gIHRlbXBsYXRlVXJsOiAnLi9udW1iZXItaW5mby5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLm51bWJlci1pbmZvXSc6IGB0cnVlYCxcbiAgICAnW2NsYXNzLm51bWJlci1pbmZvX19saWdodF0nOiBgdGhlbWUgPT09ICdsaWdodCdgLFxuICAgICdbY2xhc3MubnVtYmVyLWluZm9fX2RlZmF1bHRdJzogYHRoZW1lID09PSAnZGVmYXVsdCdgLFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIE51bWJlckluZm9Db21wb25lbnQge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZ2FwOiBOdW1iZXJJbnB1dDtcblxuICAvKiog5qCH6aKYICovXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgLyoqIOWtkOagh+mimCAqL1xuICBASW5wdXQoKSBzdWJUaXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIC8qKiDmgLvph48gKi9cbiAgQElucHV0KCkgdG90YWw6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICAvKiog5oC76YeP5ZCO57yAICovXG4gIEBJbnB1dCgpIHN1YlRvdGFsOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgLyoqIOWtkOaAu+mHjyAqL1xuICBASW5wdXQoKSBzdWZmaXg6IHN0cmluZztcbiAgLyoqIOWinuWKoOeKtuaAgSAqL1xuICBASW5wdXQoKSBzdGF0dXM6ICd1cCcgfCAnZG93bic7XG4gIC8qKiDnirbmgIHmoLflvI8gKi9cbiAgQElucHV0KCkgdGhlbWU6ICdsaWdodCcgfCAnZGVmYXVsdCcgPSAnbGlnaHQnO1xuICAvKiog6K6+572u5pWw5a2X5ZKM5o+P6L+w55u05o6l55qE6Ze06Led77yI5YOP57Sg77yJICovXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGdhcCA9IDg7XG59XG4iLCI8ZGl2ICpuZ0lmPVwidGl0bGVcIiBjbGFzcz1cIm51bWJlci1pbmZvX190aXRsZVwiPlxuICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwidGl0bGVcIj57eyB0aXRsZSB9fTwvbmctY29udGFpbmVyPlxuPC9kaXY+XG48ZGl2ICpuZ0lmPVwic3ViVGl0bGVcIiBjbGFzcz1cIm51bWJlci1pbmZvX190aXRsZS1zdWJcIj5cbiAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cInN1YlRpdGxlXCI+e3sgc3ViVGl0bGUgfX08L25nLWNvbnRhaW5lcj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cIm51bWJlci1pbmZvX192YWx1ZVwiIFtuZ1N0eWxlXT1cInsgJ21hcmdpbi10b3AucHgnOiBnYXAgfVwiPlxuICA8c3BhbiBjbGFzcz1cIm51bWJlci1pbmZvX192YWx1ZS10ZXh0XCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cInRvdGFsXCI+e3sgdG90YWwgfX08L25nLWNvbnRhaW5lcj5cbiAgICA8ZW0gY2xhc3M9XCJudW1iZXItaW5mb19fdmFsdWUtc3VmZml4XCIgKm5nSWY9XCJzdWZmaXhcIj57eyBzdWZmaXggfX08L2VtPlxuICA8L3NwYW4+XG4gIDxzcGFuICpuZ0lmPVwic3RhdHVzIHx8IHN1YlRvdGFsXCIgY2xhc3M9XCJudW1iZXItaW5mb19fdmFsdWUtdGV4dCBudW1iZXItaW5mb19fdmFsdWUtc3ViXCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cInN1YlRvdGFsXCI+e3sgc3ViVG90YWwgfX08L25nLWNvbnRhaW5lcj5cbiAgICA8aSAqbmdJZj1cInN0YXR1c1wiIG56LWljb24gbnpUeXBlPVwiY2FyZXQte3sgc3RhdHVzIH19XCI+PC9pPlxuICA8L3NwYW4+XG48L2Rpdj5cbiJdfQ==