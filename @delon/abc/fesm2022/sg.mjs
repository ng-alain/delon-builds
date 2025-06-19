import * as i0 from '@angular/core';
import { inject, numberAttribute, Input, ViewEncapsulation, ChangeDetectionStrategy, Component, ElementRef, Renderer2, NgModule } from '@angular/core';
import { AlainConfigService } from '@delon/util/config';
import { ResponsiveService } from '@delon/theme';
import { CommonModule } from '@angular/common';

class SGContainerComponent {
    cogSrv = inject(AlainConfigService);
    gutter;
    colInCon;
    col;
    get marginValue() {
        return -(this.gutter / 2);
    }
    constructor() {
        this.cogSrv.attach(this, 'sg', {
            gutter: 32,
            col: 2
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.4", ngImport: i0, type: SGContainerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "20.0.4", type: SGContainerComponent, isStandalone: true, selector: "sg-container, [sg-container]", inputs: { gutter: ["gutter", "gutter", numberAttribute], colInCon: ["sg-container", "colInCon", (v) => (v == null ? null : numberAttribute(v))], col: ["col", "col", (v) => (v == null ? null : numberAttribute(v))] }, host: { properties: { "style.margin-left.px": "marginValue", "style.margin-right.px": "marginValue", "class.ant-row": "true", "class.sg__wrap": "true" } }, exportAs: ["sgContainer"], ngImport: i0, template: ` <ng-content /> `, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.4", ngImport: i0, type: SGContainerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'sg-container, [sg-container]',
                    exportAs: 'sgContainer',
                    template: ` <ng-content /> `,
                    host: {
                        '[style.margin-left.px]': 'marginValue',
                        '[style.margin-right.px]': 'marginValue',
                        '[class.ant-row]': 'true',
                        '[class.sg__wrap]': 'true'
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: () => [], propDecorators: { gutter: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], colInCon: [{
                type: Input,
                args: [{ alias: 'sg-container', transform: (v) => (v == null ? null : numberAttribute(v)) }]
            }], col: [{
                type: Input,
                args: [{ transform: (v) => (v == null ? null : numberAttribute(v)) }]
            }] } });

const prefixCls = `sg`;
class SGComponent {
    el = inject(ElementRef).nativeElement;
    ren = inject(Renderer2);
    rep = inject(ResponsiveService);
    parentComp = inject(SGContainerComponent, { host: true, optional: true });
    clsMap = [];
    inited = false;
    col = null;
    get paddingValue() {
        return this.parentComp.gutter / 2;
    }
    constructor() {
        if (this.parentComp == null) {
            throw new Error(`[sg] must include 'sg-container' component`);
        }
    }
    setClass() {
        const { el, ren, clsMap, col } = this;
        const parent = this.parentComp;
        clsMap.forEach(cls => ren.removeClass(el, cls));
        clsMap.length = 0;
        const parentCol = parent.colInCon || parent.col;
        clsMap.push(...this.rep.genCls(col != null ? col : parentCol, parentCol), `${prefixCls}__item`);
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.4", ngImport: i0, type: SGComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "20.0.4", type: SGComponent, isStandalone: true, selector: "sg", inputs: { col: ["col", "col", (v) => (v == null ? null : numberAttribute(v))] }, host: { properties: { "style.padding-left.px": "paddingValue", "style.padding-right.px": "paddingValue" } }, exportAs: ["sg"], usesOnChanges: true, ngImport: i0, template: `<ng-content />`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.4", ngImport: i0, type: SGComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'sg',
                    exportAs: 'sg',
                    template: `<ng-content />`,
                    host: {
                        '[style.padding-left.px]': 'paddingValue',
                        '[style.padding-right.px]': 'paddingValue'
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: () => [], propDecorators: { col: [{
                type: Input,
                args: [{ transform: (v) => (v == null ? null : numberAttribute(v)) }]
            }] } });

const COMPONENTS = [SGContainerComponent, SGComponent];
class SGModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.4", ngImport: i0, type: SGModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.4", ngImport: i0, type: SGModule, imports: [CommonModule, SGContainerComponent, SGComponent], exports: [SGContainerComponent, SGComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "20.0.4", ngImport: i0, type: SGModule, imports: [CommonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.4", ngImport: i0, type: SGModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, ...COMPONENTS],
                    exports: COMPONENTS
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { SGComponent, SGContainerComponent, SGModule };
//# sourceMappingURL=sg.mjs.map
