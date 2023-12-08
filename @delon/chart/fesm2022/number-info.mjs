import { __decorate } from 'tslib';
import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input, NgModule } from '@angular/core';
import { InputNumber } from '@delon/util/decorator';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i2 from 'ng-zorro-antd/icon';
import { NzIconModule } from 'ng-zorro-antd/icon';
import * as i3 from 'ng-zorro-antd/core/outlet';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';

class NumberInfoComponent {
    constructor() {
        /** 状态样式 */
        this.theme = 'light';
        /** 设置数字和描述直接的间距（像素） */
        this.gap = 8;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: NumberInfoComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.2", type: NumberInfoComponent, selector: "number-info", inputs: { title: "title", subTitle: "subTitle", total: "total", subTotal: "subTotal", suffix: "suffix", status: "status", theme: "theme", gap: "gap" }, host: { properties: { "class.number-info": "true", "class.number-info__light": "theme === 'light'", "class.number-info__default": "theme === 'default'" } }, exportAs: ["numberInfo"], ngImport: i0, template: "@if (title) {\n  <div class=\"number-info__title\">\n    <ng-container *nzStringTemplateOutlet=\"title\">{{ title }}</ng-container>\n  </div>\n}\n@if (subTitle) {\n  <div class=\"number-info__title-sub\">\n    <ng-container *nzStringTemplateOutlet=\"subTitle\">{{ subTitle }}</ng-container>\n  </div>\n}\n<div class=\"number-info__value\" [ngStyle]=\"{ 'margin-top.px': gap }\">\n  <span class=\"number-info__value-text\">\n    <ng-container *nzStringTemplateOutlet=\"total\">{{ total }}</ng-container>\n    @if (suffix) {\n      <em class=\"number-info__value-suffix\">{{ suffix }}</em>\n    }\n  </span>\n  @if (status || subTotal) {\n    <span class=\"number-info__value-text number-info__value-sub\">\n      <ng-container *nzStringTemplateOutlet=\"subTotal\">{{ subTotal }}</ng-container>\n      @if (status) {\n        <i nz-icon nzType=\"caret-{{ status }}\"></i>\n      }\n    </span>\n  }\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i2.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "directive", type: i3.NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
__decorate([
    InputNumber()
], NumberInfoComponent.prototype, "gap", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: NumberInfoComponent, decorators: [{
            type: Component,
            args: [{ selector: 'number-info', exportAs: 'numberInfo', host: {
                        '[class.number-info]': `true`,
                        '[class.number-info__light]': `theme === 'light'`,
                        '[class.number-info__default]': `theme === 'default'`
                    }, preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "@if (title) {\n  <div class=\"number-info__title\">\n    <ng-container *nzStringTemplateOutlet=\"title\">{{ title }}</ng-container>\n  </div>\n}\n@if (subTitle) {\n  <div class=\"number-info__title-sub\">\n    <ng-container *nzStringTemplateOutlet=\"subTitle\">{{ subTitle }}</ng-container>\n  </div>\n}\n<div class=\"number-info__value\" [ngStyle]=\"{ 'margin-top.px': gap }\">\n  <span class=\"number-info__value-text\">\n    <ng-container *nzStringTemplateOutlet=\"total\">{{ total }}</ng-container>\n    @if (suffix) {\n      <em class=\"number-info__value-suffix\">{{ suffix }}</em>\n    }\n  </span>\n  @if (status || subTotal) {\n    <span class=\"number-info__value-text number-info__value-sub\">\n      <ng-container *nzStringTemplateOutlet=\"subTotal\">{{ subTotal }}</ng-container>\n      @if (status) {\n        <i nz-icon nzType=\"caret-{{ status }}\"></i>\n      }\n    </span>\n  }\n</div>\n" }]
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

const COMPONENTS = [NumberInfoComponent];
class NumberInfoModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: NumberInfoModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.0.2", ngImport: i0, type: NumberInfoModule, declarations: [NumberInfoComponent], imports: [CommonModule, NzIconModule, NzOutletModule], exports: [NumberInfoComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: NumberInfoModule, imports: [CommonModule, NzIconModule, NzOutletModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: NumberInfoModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, NzIconModule, NzOutletModule],
                    declarations: COMPONENTS,
                    exports: COMPONENTS
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { NumberInfoComponent, NumberInfoModule };
//# sourceMappingURL=number-info.mjs.map
