import * as i0 from '@angular/core';
import { numberAttribute, Component, ChangeDetectionStrategy, ViewEncapsulation, Input, inject, ElementRef, Renderer2, NgModule } from '@angular/core';
import * as i1 from '@delon/util/config';
import { ResponsiveService } from '@delon/theme';
import { CommonModule } from '@angular/common';

class SGContainerComponent {
    get marginValue() {
        return -(this.gutter / 2);
    }
    constructor(configSrv) {
        configSrv.attach(this, 'sg', {
            gutter: 32,
            col: 2
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.5", ngImport: i0, type: SGContainerComponent, deps: [{ token: i1.AlainConfigService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "18.0.5", type: SGContainerComponent, isStandalone: true, selector: "sg-container, [sg-container]", inputs: { gutter: ["gutter", "gutter", numberAttribute], colInCon: ["sg-container", "colInCon", (v) => (v == null ? null : numberAttribute(v))], col: ["col", "col", (v) => (v == null ? null : numberAttribute(v))] }, host: { properties: { "style.margin-left.px": "marginValue", "style.margin-right.px": "marginValue", "class.ant-row": "true", "class.sg__wrap": "true" } }, exportAs: ["sgContainer"], ngImport: i0, template: ` <ng-content /> `, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.5", ngImport: i0, type: SGContainerComponent, decorators: [{
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
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    standalone: true
                }]
        }], ctorParameters: () => [{ type: i1.AlainConfigService }], propDecorators: { gutter: [{
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
    get paddingValue() {
        return this.parentComp.gutter / 2;
    }
    constructor() {
        this.el = inject(ElementRef).nativeElement;
        this.ren = inject(Renderer2);
        this.rep = inject(ResponsiveService);
        this.parentComp = inject(SGContainerComponent, { host: true, optional: true });
        this.clsMap = [];
        this.inited = false;
        this.col = null;
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.5", ngImport: i0, type: SGComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "16.1.0", version: "18.0.5", type: SGComponent, isStandalone: true, selector: "sg", inputs: { col: ["col", "col", (v) => (v == null ? null : numberAttribute(v))] }, host: { properties: { "style.padding-left.px": "paddingValue", "style.padding-right.px": "paddingValue" } }, exportAs: ["sg"], usesOnChanges: true, ngImport: i0, template: ` <ng-content /> `, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.5", ngImport: i0, type: SGComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'sg',
                    exportAs: 'sg',
                    template: ` <ng-content /> `,
                    host: {
                        '[style.padding-left.px]': 'paddingValue',
                        '[style.padding-right.px]': 'paddingValue'
                    },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    standalone: true
                }]
        }], ctorParameters: () => [], propDecorators: { col: [{
                type: Input,
                args: [{ transform: (v) => (v == null ? null : numberAttribute(v)) }]
            }] } });

const COMPONENTS = [SGContainerComponent, SGComponent];
class SGModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.5", ngImport: i0, type: SGModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.0.5", ngImport: i0, type: SGModule, imports: [CommonModule, SGContainerComponent, SGComponent], exports: [SGContainerComponent, SGComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.0.5", ngImport: i0, type: SGModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.5", ngImport: i0, type: SGModule, decorators: [{
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
