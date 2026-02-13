import * as i0 from '@angular/core';
import { inject, input, numberAttribute, computed, ViewEncapsulation, ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { AlainConfigService } from '@delon/util/config';
import { ResponsiveService } from '@delon/theme';
import { CommonModule } from '@angular/common';

class SGContainerComponent {
    cogSrv = inject(AlainConfigService);
    gutter = input(32, { ...(ngDevMode ? { debugName: "gutter" } : {}), transform: numberAttribute });
    colInCon = input(null, { ...(ngDevMode ? { debugName: "colInCon" } : {}), transform: (v) => (v == null ? null : numberAttribute(v, null)),
        alias: 'sg-container' });
    col = input(2, { ...(ngDevMode ? { debugName: "col" } : {}), transform: (v) => (v == null ? null : numberAttribute(v, null)) });
    marginValue = computed(() => -(this.gutter() / 2), ...(ngDevMode ? [{ debugName: "marginValue" }] : []));
    constructor() {
        this.cogSrv.attach(this, 'sg', {
            gutter: 32,
            col: 2
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.4", ngImport: i0, type: SGContainerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "21.1.4", type: SGContainerComponent, isStandalone: true, selector: "sg-container, [sg-container]", inputs: { gutter: { classPropertyName: "gutter", publicName: "gutter", isSignal: true, isRequired: false, transformFunction: null }, colInCon: { classPropertyName: "colInCon", publicName: "sg-container", isSignal: true, isRequired: false, transformFunction: null }, col: { classPropertyName: "col", publicName: "col", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "style.margin-left.px": "marginValue()", "style.margin-right.px": "marginValue()", "class.ant-row": "true", "class.sg__wrap": "true" } }, exportAs: ["sgContainer"], ngImport: i0, template: ` <ng-content /> `, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.4", ngImport: i0, type: SGContainerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'sg-container, [sg-container]',
                    exportAs: 'sgContainer',
                    template: ` <ng-content /> `,
                    host: {
                        '[style.margin-left.px]': 'marginValue()',
                        '[style.margin-right.px]': 'marginValue()',
                        '[class.ant-row]': 'true',
                        '[class.sg__wrap]': 'true'
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: () => [], propDecorators: { gutter: [{ type: i0.Input, args: [{ isSignal: true, alias: "gutter", required: false }] }], colInCon: [{ type: i0.Input, args: [{ isSignal: true, alias: "sg-container", required: false }] }], col: [{ type: i0.Input, args: [{ isSignal: true, alias: "col", required: false }] }] } });

const prefixCls = `sg`;
class SGComponent {
    rep = inject(ResponsiveService);
    parentComp = inject(SGContainerComponent, { host: true, optional: true });
    paddingValue = computed(() => this.parentComp.gutter() / 2, ...(ngDevMode ? [{ debugName: "paddingValue" }] : []));
    col = input(null, { ...(ngDevMode ? { debugName: "col" } : {}), transform: (v) => (v == null ? null : numberAttribute(v, null)) });
    cls = computed(() => {
        const col = this.col();
        const parent = this.parentComp;
        const parentCol = parent.colInCon() ?? parent.col();
        const arr = this.rep.genCls(col != null ? col : parentCol, parentCol);
        return arr.concat(`${prefixCls}__item`);
    }, ...(ngDevMode ? [{ debugName: "cls" }] : []));
    constructor() {
        if (this.parentComp == null) {
            throw new Error(`[sg] must include 'sg-container' component`);
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.4", ngImport: i0, type: SGComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "21.1.4", type: SGComponent, isStandalone: true, selector: "sg", inputs: { col: { classPropertyName: "col", publicName: "col", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "style.padding-left.px": "paddingValue()", "style.padding-right.px": "paddingValue()", "class": "cls()" } }, exportAs: ["sg"], ngImport: i0, template: `<ng-content />`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.4", ngImport: i0, type: SGComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'sg',
                    exportAs: 'sg',
                    template: `<ng-content />`,
                    host: {
                        '[style.padding-left.px]': 'paddingValue()',
                        '[style.padding-right.px]': 'paddingValue()',
                        '[class]': 'cls()'
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: () => [], propDecorators: { col: [{ type: i0.Input, args: [{ isSignal: true, alias: "col", required: false }] }] } });

const COMPONENTS = [SGContainerComponent, SGComponent];
class SGModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.4", ngImport: i0, type: SGModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "21.1.4", ngImport: i0, type: SGModule, imports: [CommonModule, SGContainerComponent, SGComponent], exports: [SGContainerComponent, SGComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "21.1.4", ngImport: i0, type: SGModule, imports: [CommonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.4", ngImport: i0, type: SGModule, decorators: [{
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
