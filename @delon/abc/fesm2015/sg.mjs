import { __decorate } from 'tslib';
import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input, Optional, Host, NgModule } from '@angular/core';
import { InputNumber } from '@delon/util/decorator';
import * as i1 from '@delon/util/config';
import * as i2 from '@delon/theme';
import { CommonModule } from '@angular/common';

class SGContainerComponent {
    constructor(configSrv) {
        configSrv.attach(this, 'sg', {
            gutter: 32,
            col: 2
        });
    }
    get marginValue() {
        return -(this.gutter / 2);
    }
}
SGContainerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.1", ngImport: i0, type: SGContainerComponent, deps: [{ token: i1.AlainConfigService }], target: i0.ɵɵFactoryTarget.Component });
SGContainerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.1", type: SGContainerComponent, selector: "sg-container, [sg-container]", inputs: { gutter: "gutter", colInCon: ["sg-container", "colInCon"], col: "col" }, host: { properties: { "style.margin-left.px": "marginValue", "style.margin-right.px": "marginValue", "class.ant-row": "true", "class.sg__wrap": "true" } }, exportAs: ["sgContainer"], ngImport: i0, template: ` <ng-content></ng-content> `, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    InputNumber()
], SGContainerComponent.prototype, "gutter", void 0);
__decorate([
    InputNumber(null)
], SGContainerComponent.prototype, "colInCon", void 0);
__decorate([
    InputNumber(null)
], SGContainerComponent.prototype, "col", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.1", ngImport: i0, type: SGContainerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'sg-container, [sg-container]',
                    exportAs: 'sgContainer',
                    template: ` <ng-content></ng-content> `,
                    host: {
                        '[style.margin-left.px]': 'marginValue',
                        '[style.margin-right.px]': 'marginValue',
                        '[class.ant-row]': 'true',
                        '[class.sg__wrap]': 'true'
                    },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: function () { return [{ type: i1.AlainConfigService }]; }, propDecorators: { gutter: [{
                type: Input
            }], colInCon: [{
                type: Input,
                args: ['sg-container']
            }], col: [{
                type: Input
            }] } });

const prefixCls = `sg`;
class SGComponent {
    constructor(el, ren, parent, rep) {
        this.ren = ren;
        this.parent = parent;
        this.rep = rep;
        this.clsMap = [];
        this.inited = false;
        this.col = null;
        if (parent == null) {
            throw new Error(`[sg] must include 'sg-container' component`);
        }
        this.el = el.nativeElement;
    }
    get paddingValue() {
        return this.parent.gutter / 2;
    }
    setClass() {
        const { el, ren, clsMap, col, parent } = this;
        clsMap.forEach(cls => ren.removeClass(el, cls));
        clsMap.length = 0;
        clsMap.push(...this.rep.genCls(col != null ? col : parent.colInCon || parent.col), `${prefixCls}__item`);
        clsMap.forEach(cls => ren.addClass(el, cls));
        return this;
    }
    ngOnChanges() {
        if (this.inited)
            this.setClass();
    }
    ngAfterViewInit() {
        this.setClass();
        this.inited = true;
    }
}
SGComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.1", ngImport: i0, type: SGComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: SGContainerComponent, host: true, optional: true }, { token: i2.ResponsiveService }], target: i0.ɵɵFactoryTarget.Component });
SGComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.1", type: SGComponent, selector: "sg", inputs: { col: "col" }, host: { properties: { "style.padding-left.px": "paddingValue", "style.padding-right.px": "paddingValue" } }, exportAs: ["sg"], usesOnChanges: true, ngImport: i0, template: ` <ng-content></ng-content> `, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    InputNumber(null)
], SGComponent.prototype, "col", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.1", ngImport: i0, type: SGComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'sg',
                    exportAs: 'sg',
                    template: ` <ng-content></ng-content> `,
                    host: {
                        '[style.padding-left.px]': 'paddingValue',
                        '[style.padding-right.px]': 'paddingValue'
                    },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: function () {
        return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: SGContainerComponent, decorators: [{
                        type: Optional
                    }, {
                        type: Host
                    }] }, { type: i2.ResponsiveService }];
    }, propDecorators: { col: [{
                type: Input
            }] } });

const COMPONENTS = [SGContainerComponent, SGComponent];
class SGModule {
}
SGModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.1", ngImport: i0, type: SGModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SGModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.1", ngImport: i0, type: SGModule, declarations: [SGContainerComponent, SGComponent], imports: [CommonModule], exports: [SGContainerComponent, SGComponent] });
SGModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.1", ngImport: i0, type: SGModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.1", ngImport: i0, type: SGModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: COMPONENTS,
                    exports: COMPONENTS
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { SGComponent, SGContainerComponent, SGModule };
//# sourceMappingURL=sg.mjs.map
