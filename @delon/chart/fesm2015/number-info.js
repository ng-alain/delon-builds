import { __decorate, __metadata } from 'tslib';
import * as i0 from '@angular/core';
import { ɵɵngDeclareComponent, ChangeDetectionStrategy, ViewEncapsulation, ɵsetClassMetadata, Component, Input, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { InputNumber } from '@delon/util/decorator';
import { NgIf, NgStyle, CommonModule } from '@angular/common';
import { NzStringTemplateOutletDirective, NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';

class NumberInfoComponent {
    constructor() {
        /** 状态样式 */
        this.theme = 'light';
        /** 设置数字和描述直接的间距（像素） */
        this.gap = 8;
    }
}
/** @nocollapse */ NumberInfoComponent.ɵfac = function NumberInfoComponent_Factory(t) { return new (t || NumberInfoComponent)(); };
/** @nocollapse */ NumberInfoComponent.ɵcmp = ɵɵngDeclareComponent({ version: "11.1.1", type: NumberInfoComponent, selector: "number-info", inputs: { title: "title", subTitle: "subTitle", total: "total", subTotal: "subTotal", suffix: "suffix", status: "status", theme: "theme", gap: "gap" }, host: { properties: { "class.number-info": "true", "class.number-info__light": "theme === 'light'", "class.number-info__default": "theme === 'default'" } }, exportAs: ["numberInfo"], ngImport: i0, template: "<div *ngIf=\"title\" class=\"number-info__title\">\n  <ng-container *nzStringTemplateOutlet=\"title\">{{ title }}</ng-container>\n</div>\n<div *ngIf=\"subTitle\" class=\"number-info__title-sub\">\n  <ng-container *nzStringTemplateOutlet=\"subTitle\">{{ subTitle }}</ng-container>\n</div>\n<div class=\"number-info__value\" [ngStyle]=\"{ 'margin-top.px': gap }\">\n  <span class=\"number-info__value-text\">\n    <ng-container *nzStringTemplateOutlet=\"total\">{{ total }}</ng-container>\n    <em class=\"number-info__value-suffix\" *ngIf=\"suffix\">{{ suffix }}</em>\n  </span>\n  <span *ngIf=\"status || subTotal\" class=\"number-info__value-text number-info__value-sub\">\n    <ng-container *nzStringTemplateOutlet=\"subTotal\">{{ subTotal }}</ng-container>\n    <i *ngIf=\"status\" nz-icon nzType=\"caret-{{ status }}\"></i>\n  </span>\n</div>\n", directives: [{ type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { type: NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { type: NzIconDirective, selector: "[nz-icon]", inputs: ["nzRotate", "nzSpin", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], NumberInfoComponent.prototype, "gap", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(NumberInfoComponent, [{
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

const COMPONENTS = [NumberInfoComponent];
class NumberInfoModule {
}
/** @nocollapse */ NumberInfoModule.ɵmod = ɵɵdefineNgModule({ type: NumberInfoModule });
/** @nocollapse */ NumberInfoModule.ɵinj = ɵɵdefineInjector({ factory: function NumberInfoModule_Factory(t) { return new (t || NumberInfoModule)(); }, imports: [[CommonModule, NzIconModule, NzOutletModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NumberInfoModule, { declarations: [NumberInfoComponent], imports: [CommonModule, NzIconModule, NzOutletModule], exports: [NumberInfoComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(NumberInfoModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, NzIconModule, NzOutletModule],
                declarations: COMPONENTS,
                exports: COMPONENTS,
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { NumberInfoComponent, NumberInfoModule };
//# sourceMappingURL=number-info.js.map
