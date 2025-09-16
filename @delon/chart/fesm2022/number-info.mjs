import * as i0 from '@angular/core';
import { numberAttribute, Input, ViewEncapsulation, ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { NzStringTemplateOutletDirective, NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';
import { CommonModule } from '@angular/common';

class NumberInfoComponent {
    /** 标题 */
    title;
    /** 子标题 */
    subTitle;
    /** 总量 */
    total;
    /** 总量后缀 */
    subTotal;
    /** 子总量 */
    suffix;
    /** 增加状态 */
    status;
    /** 状态样式 */
    theme = 'light';
    /** 设置数字和描述直接的间距（像素） */
    gap = 8;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.2", ngImport: i0, type: NumberInfoComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.1.2", type: NumberInfoComponent, isStandalone: true, selector: "number-info", inputs: { title: "title", subTitle: "subTitle", total: "total", subTotal: "subTotal", suffix: "suffix", status: "status", theme: "theme", gap: ["gap", "gap", numberAttribute] }, host: { properties: { "class.number-info": "true", "class.number-info__light": "theme === 'light'", "class.number-info__default": "theme === 'default'" } }, exportAs: ["numberInfo"], ngImport: i0, template: "@if (title) {\n  <div class=\"number-info__title\">\n    <ng-container *nzStringTemplateOutlet=\"title\">{{ title }}</ng-container>\n  </div>\n}\n@if (subTitle) {\n  <div class=\"number-info__title-sub\">\n    <ng-container *nzStringTemplateOutlet=\"subTitle\">{{ subTitle }}</ng-container>\n  </div>\n}\n<div class=\"number-info__value\" [style.margin-top.px]=\"gap\">\n  <span class=\"number-info__value-text\">\n    <ng-container *nzStringTemplateOutlet=\"total\">{{ total }}</ng-container>\n    @if (suffix) {\n      <em class=\"number-info__value-suffix\">{{ suffix }}</em>\n    }\n  </span>\n  @if (status || subTotal) {\n    <span class=\"number-info__value-text number-info__value-sub\">\n      <ng-container *nzStringTemplateOutlet=\"subTotal\">{{ subTotal }}</ng-container>\n      @if (status) {\n        <nz-icon nzType=\"caret-{{ status }}\" />\n      }\n    </span>\n  }\n</div>\n", dependencies: [{ kind: "directive", type: NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { kind: "directive", type: NzIconDirective, selector: "nz-icon,[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.2", ngImport: i0, type: NumberInfoComponent, decorators: [{
            type: Component,
            args: [{ selector: 'number-info', exportAs: 'numberInfo', host: {
                        '[class.number-info]': `true`,
                        '[class.number-info__light]': `theme === 'light'`,
                        '[class.number-info__default]': `theme === 'default'`
                    }, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, imports: [NzStringTemplateOutletDirective, NzIconDirective], template: "@if (title) {\n  <div class=\"number-info__title\">\n    <ng-container *nzStringTemplateOutlet=\"title\">{{ title }}</ng-container>\n  </div>\n}\n@if (subTitle) {\n  <div class=\"number-info__title-sub\">\n    <ng-container *nzStringTemplateOutlet=\"subTitle\">{{ subTitle }}</ng-container>\n  </div>\n}\n<div class=\"number-info__value\" [style.margin-top.px]=\"gap\">\n  <span class=\"number-info__value-text\">\n    <ng-container *nzStringTemplateOutlet=\"total\">{{ total }}</ng-container>\n    @if (suffix) {\n      <em class=\"number-info__value-suffix\">{{ suffix }}</em>\n    }\n  </span>\n  @if (status || subTotal) {\n    <span class=\"number-info__value-text number-info__value-sub\">\n      <ng-container *nzStringTemplateOutlet=\"subTotal\">{{ subTotal }}</ng-container>\n      @if (status) {\n        <nz-icon nzType=\"caret-{{ status }}\" />\n      }\n    </span>\n  }\n</div>\n" }]
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
                type: Input,
                args: [{ transform: numberAttribute }]
            }] } });

const COMPONENTS = [NumberInfoComponent];
class NumberInfoModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.2", ngImport: i0, type: NumberInfoModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "20.1.2", ngImport: i0, type: NumberInfoModule, imports: [CommonModule, NzIconModule, NzOutletModule, NumberInfoComponent], exports: [NumberInfoComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "20.1.2", ngImport: i0, type: NumberInfoModule, imports: [CommonModule, NzIconModule, NzOutletModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.2", ngImport: i0, type: NumberInfoModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, NzIconModule, NzOutletModule, ...COMPONENTS],
                    exports: COMPONENTS
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { NumberInfoComponent, NumberInfoModule };
//# sourceMappingURL=number-info.mjs.map
