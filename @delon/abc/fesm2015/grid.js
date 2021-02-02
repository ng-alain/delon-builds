import { __decorate, __metadata } from 'tslib';
import * as i0 from '@angular/core';
import { ɵɵdirectiveInject, ɵɵngDeclareComponent, ChangeDetectionStrategy, ViewEncapsulation, ɵsetClassMetadata, Component, Input, ElementRef, Renderer2, Optional, Host, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { AlainConfigService } from '@delon/util/config';
import { InputNumber } from '@delon/util/decorator';
import { ResponsiveService } from '@delon/theme';
import { CommonModule } from '@angular/common';

class SGContainerComponent {
    constructor(configSrv) {
        configSrv.attach(this, 'sg', {
            gutter: 32,
            col: 2,
        });
    }
    get marginValue() {
        return -(this.gutter / 2);
    }
}
/** @nocollapse */ SGContainerComponent.ɵfac = function SGContainerComponent_Factory(t) { return new (t || SGContainerComponent)(ɵɵdirectiveInject(AlainConfigService)); };
/** @nocollapse */ SGContainerComponent.ɵcmp = ɵɵngDeclareComponent({ version: "11.1.1", type: SGContainerComponent, selector: "sg-container, [sg-container]", inputs: { gutter: "gutter", colInCon: ["sg-container", "colInCon"], col: "col" }, host: { properties: { "style.margin-left.px": "marginValue", "style.margin-right.px": "marginValue", "class.ant-row": "true", "class.sg__wrap": "true" } }, exportAs: ["sgContainer"], ngImport: i0, template: ` <ng-content></ng-content> `, isInline: true, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], SGContainerComponent.prototype, "gutter", void 0);
__decorate([
    InputNumber(null),
    __metadata("design:type", Number)
], SGContainerComponent.prototype, "colInCon", void 0);
__decorate([
    InputNumber(null),
    __metadata("design:type", Number)
], SGContainerComponent.prototype, "col", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(SGContainerComponent, [{
        type: Component,
        args: [{
                selector: 'sg-container, [sg-container]',
                exportAs: 'sgContainer',
                template: ` <ng-content></ng-content> `,
                host: {
                    '[style.margin-left.px]': 'marginValue',
                    '[style.margin-right.px]': 'marginValue',
                    '[class.ant-row]': 'true',
                    '[class.sg__wrap]': 'true',
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: AlainConfigService }]; }, { gutter: [{
            type: Input
        }], colInCon: [{
            type: Input,
            args: ['sg-container']
        }], col: [{
            type: Input
        }] }); })();

const prefixCls = `sg`;
class SGComponent {
    constructor(el, ren, parent, rep) {
        this.ren = ren;
        this.parent = parent;
        this.rep = rep;
        this.clsMap = [];
        this.inited = false;
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
/** @nocollapse */ SGComponent.ɵfac = function SGComponent_Factory(t) { return new (t || SGComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(SGContainerComponent, 9), ɵɵdirectiveInject(ResponsiveService)); };
/** @nocollapse */ SGComponent.ɵcmp = ɵɵngDeclareComponent({ version: "11.1.1", type: SGComponent, selector: "sg", inputs: { col: "col" }, host: { properties: { "style.padding-left.px": "paddingValue", "style.padding-right.px": "paddingValue" } }, exportAs: ["sg"], usesOnChanges: true, ngImport: i0, template: ` <ng-content></ng-content> `, isInline: true, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
__decorate([
    InputNumber(null),
    __metadata("design:type", Number)
], SGComponent.prototype, "col", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(SGComponent, [{
        type: Component,
        args: [{
                selector: 'sg',
                exportAs: 'sg',
                template: ` <ng-content></ng-content> `,
                host: {
                    '[style.padding-left.px]': 'paddingValue',
                    '[style.padding-right.px]': 'paddingValue',
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: ElementRef }, { type: Renderer2 }, { type: SGContainerComponent, decorators: [{
                type: Optional
            }, {
                type: Host
            }] }, { type: ResponsiveService }]; }, { col: [{
            type: Input
        }] }); })();

const COMPONENTS = [SGContainerComponent, SGComponent];
class SGModule {
}
/** @nocollapse */ SGModule.ɵmod = ɵɵdefineNgModule({ type: SGModule });
/** @nocollapse */ SGModule.ɵinj = ɵɵdefineInjector({ factory: function SGModule_Factory(t) { return new (t || SGModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(SGModule, { declarations: [SGContainerComponent, SGComponent], imports: [CommonModule], exports: [SGContainerComponent, SGComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(SGModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: COMPONENTS,
                exports: COMPONENTS,
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { SGComponent, SGContainerComponent, SGModule };
//# sourceMappingURL=grid.js.map
