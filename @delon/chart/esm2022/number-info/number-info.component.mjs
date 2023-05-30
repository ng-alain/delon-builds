import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { InputNumber } from '@delon/util/decorator';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/icon";
import * as i3 from "ng-zorro-antd/core/outlet";
class NumberInfoComponent {
    constructor() {
        /** 状态样式 */
        this.theme = 'light';
        /** 设置数字和描述直接的间距（像素） */
        this.gap = 8;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.3", ngImport: i0, type: NumberInfoComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.3", type: NumberInfoComponent, selector: "number-info", inputs: { title: "title", subTitle: "subTitle", total: "total", subTotal: "subTotal", suffix: "suffix", status: "status", theme: "theme", gap: "gap" }, host: { properties: { "class.number-info": "true", "class.number-info__light": "theme === 'light'", "class.number-info__default": "theme === 'default'" } }, exportAs: ["numberInfo"], ngImport: i0, template: "<div *ngIf=\"title\" class=\"number-info__title\">\n  <ng-container *nzStringTemplateOutlet=\"title\">{{ title }}</ng-container>\n</div>\n<div *ngIf=\"subTitle\" class=\"number-info__title-sub\">\n  <ng-container *nzStringTemplateOutlet=\"subTitle\">{{ subTitle }}</ng-container>\n</div>\n<div class=\"number-info__value\" [ngStyle]=\"{ 'margin-top.px': gap }\">\n  <span class=\"number-info__value-text\">\n    <ng-container *nzStringTemplateOutlet=\"total\">{{ total }}</ng-container>\n    <em class=\"number-info__value-suffix\" *ngIf=\"suffix\">{{ suffix }}</em>\n  </span>\n  <span *ngIf=\"status || subTotal\" class=\"number-info__value-text number-info__value-sub\">\n    <ng-container *nzStringTemplateOutlet=\"subTotal\">{{ subTotal }}</ng-container>\n    <i *ngIf=\"status\" nz-icon nzType=\"caret-{{ status }}\"></i>\n  </span>\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i2.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "directive", type: i3.NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
__decorate([
    InputNumber()
], NumberInfoComponent.prototype, "gap", void 0);
export { NumberInfoComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.3", ngImport: i0, type: NumberInfoComponent, decorators: [{
            type: Component,
            args: [{ selector: 'number-info', exportAs: 'numberInfo', host: {
                        '[class.number-info]': `true`,
                        '[class.number-info__light]': `theme === 'light'`,
                        '[class.number-info__default]': `theme === 'default'`
                    }, preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div *ngIf=\"title\" class=\"number-info__title\">\n  <ng-container *nzStringTemplateOutlet=\"title\">{{ title }}</ng-container>\n</div>\n<div *ngIf=\"subTitle\" class=\"number-info__title-sub\">\n  <ng-container *nzStringTemplateOutlet=\"subTitle\">{{ subTitle }}</ng-container>\n</div>\n<div class=\"number-info__value\" [ngStyle]=\"{ 'margin-top.px': gap }\">\n  <span class=\"number-info__value-text\">\n    <ng-container *nzStringTemplateOutlet=\"total\">{{ total }}</ng-container>\n    <em class=\"number-info__value-suffix\" *ngIf=\"suffix\">{{ suffix }}</em>\n  </span>\n  <span *ngIf=\"status || subTotal\" class=\"number-info__value-text number-info__value-sub\">\n    <ng-container *nzStringTemplateOutlet=\"subTotal\">{{ subTotal }}</ng-container>\n    <i *ngIf=\"status\" nz-icon nzType=\"caret-{{ status }}\"></i>\n  </span>\n</div>\n" }]
        }], propDecorators: { title: [{
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
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWluZm8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY2hhcnQvbnVtYmVyLWluZm8vbnVtYmVyLWluZm8uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY2hhcnQvbnVtYmVyLWluZm8vbnVtYmVyLWluZm8uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFlLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFHLE9BQU8sRUFBRSxXQUFXLEVBQWUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7QUFFakUsTUFhYSxtQkFBbUI7SUFiaEM7UUE0QkUsV0FBVztRQUNGLFVBQUssR0FBd0IsT0FBTyxDQUFDO1FBQzlDLHVCQUF1QjtRQUNDLFFBQUcsR0FBRyxDQUFDLENBQUM7S0FDakM7OEdBbkJZLG1CQUFtQjtrR0FBbkIsbUJBQW1CLGtZQ2pCaEMsazFCQWdCQTs7QURtQjBCO0lBQWQsV0FBVyxFQUFFO2dEQUFTO1NBbEJyQixtQkFBbUI7MkZBQW5CLG1CQUFtQjtrQkFiL0IsU0FBUzsrQkFDRSxhQUFhLFlBQ2IsWUFBWSxRQUVoQjt3QkFDSixxQkFBcUIsRUFBRSxNQUFNO3dCQUM3Qiw0QkFBNEIsRUFBRSxtQkFBbUI7d0JBQ2pELDhCQUE4QixFQUFFLHFCQUFxQjtxQkFDdEQsdUJBQ29CLEtBQUssbUJBQ1QsdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSTs4QkFNNUIsS0FBSztzQkFBYixLQUFLO2dCQUVHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBRUcsS0FBSztzQkFBYixLQUFLO2dCQUVHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBRUcsTUFBTTtzQkFBZCxLQUFLO2dCQUVHLE1BQU07c0JBQWQsS0FBSztnQkFFRyxLQUFLO3NCQUFiLEtBQUs7Z0JBRWtCLEdBQUc7c0JBQTFCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IElucHV0TnVtYmVyLCBOdW1iZXJJbnB1dCB9IGZyb20gJ0BkZWxvbi91dGlsL2RlY29yYXRvcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ251bWJlci1pbmZvJyxcbiAgZXhwb3J0QXM6ICdudW1iZXJJbmZvJyxcbiAgdGVtcGxhdGVVcmw6ICcuL251bWJlci1pbmZvLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MubnVtYmVyLWluZm9dJzogYHRydWVgLFxuICAgICdbY2xhc3MubnVtYmVyLWluZm9fX2xpZ2h0XSc6IGB0aGVtZSA9PT0gJ2xpZ2h0J2AsXG4gICAgJ1tjbGFzcy5udW1iZXItaW5mb19fZGVmYXVsdF0nOiBgdGhlbWUgPT09ICdkZWZhdWx0J2BcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIE51bWJlckluZm9Db21wb25lbnQge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZ2FwOiBOdW1iZXJJbnB1dDtcblxuICAvKiog5qCH6aKYICovXG4gIEBJbnB1dCgpIHRpdGxlPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsO1xuICAvKiog5a2Q5qCH6aKYICovXG4gIEBJbnB1dCgpIHN1YlRpdGxlPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsO1xuICAvKiog5oC76YePICovXG4gIEBJbnB1dCgpIHRvdGFsPzogc3RyaW5nIHwgbnVtYmVyIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsO1xuICAvKiog5oC76YeP5ZCO57yAICovXG4gIEBJbnB1dCgpIHN1YlRvdGFsPzogc3RyaW5nIHwgbnVtYmVyIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsO1xuICAvKiog5a2Q5oC76YePICovXG4gIEBJbnB1dCgpIHN1ZmZpeD86IHN0cmluZyB8IG51bGw7XG4gIC8qKiDlop7liqDnirbmgIEgKi9cbiAgQElucHV0KCkgc3RhdHVzPzogJ3VwJyB8ICdkb3duJztcbiAgLyoqIOeKtuaAgeagt+W8jyAqL1xuICBASW5wdXQoKSB0aGVtZTogJ2xpZ2h0JyB8ICdkZWZhdWx0JyA9ICdsaWdodCc7XG4gIC8qKiDorr7nva7mlbDlrZflkozmj4/ov7Dnm7TmjqXnmoTpl7Tot53vvIjlg4/ntKDvvIkgKi9cbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgZ2FwID0gODtcbn1cbiIsIjxkaXYgKm5nSWY9XCJ0aXRsZVwiIGNsYXNzPVwibnVtYmVyLWluZm9fX3RpdGxlXCI+XG4gIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJ0aXRsZVwiPnt7IHRpdGxlIH19PC9uZy1jb250YWluZXI+XG48L2Rpdj5cbjxkaXYgKm5nSWY9XCJzdWJUaXRsZVwiIGNsYXNzPVwibnVtYmVyLWluZm9fX3RpdGxlLXN1YlwiPlxuICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwic3ViVGl0bGVcIj57eyBzdWJUaXRsZSB9fTwvbmctY29udGFpbmVyPlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwibnVtYmVyLWluZm9fX3ZhbHVlXCIgW25nU3R5bGVdPVwieyAnbWFyZ2luLXRvcC5weCc6IGdhcCB9XCI+XG4gIDxzcGFuIGNsYXNzPVwibnVtYmVyLWluZm9fX3ZhbHVlLXRleHRcIj5cbiAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwidG90YWxcIj57eyB0b3RhbCB9fTwvbmctY29udGFpbmVyPlxuICAgIDxlbSBjbGFzcz1cIm51bWJlci1pbmZvX192YWx1ZS1zdWZmaXhcIiAqbmdJZj1cInN1ZmZpeFwiPnt7IHN1ZmZpeCB9fTwvZW0+XG4gIDwvc3Bhbj5cbiAgPHNwYW4gKm5nSWY9XCJzdGF0dXMgfHwgc3ViVG90YWxcIiBjbGFzcz1cIm51bWJlci1pbmZvX192YWx1ZS10ZXh0IG51bWJlci1pbmZvX192YWx1ZS1zdWJcIj5cbiAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwic3ViVG90YWxcIj57eyBzdWJUb3RhbCB9fTwvbmctY29udGFpbmVyPlxuICAgIDxpICpuZ0lmPVwic3RhdHVzXCIgbnotaWNvbiBuelR5cGU9XCJjYXJldC17eyBzdGF0dXMgfX1cIj48L2k+XG4gIDwvc3Bhbj5cbjwvZGl2PlxuIl19