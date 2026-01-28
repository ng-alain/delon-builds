import { DOCUMENT, CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { inject, input, booleanAttribute, afterNextRender, ViewEncapsulation, ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { ErrorCollectComponent, ErrorCollectModule } from '@delon/abc/error-collect';
import { NzStringTemplateOutletDirective, NzOutletModule } from 'ng-zorro-antd/core/outlet';

const CLSBODY = 'footer-toolbar__body';
class FooterToolbarComponent {
    bodyCls = inject(DOCUMENT).querySelector('body')?.classList;
    errorCollect = input(false, { ...(ngDevMode ? { debugName: "errorCollect" } : {}), transform: booleanAttribute });
    extra = input(...(ngDevMode ? [undefined, { debugName: "extra" }] : []));
    constructor() {
        afterNextRender(() => this.bodyCls?.add(CLSBODY));
    }
    ngOnDestroy() {
        this.bodyCls?.remove(CLSBODY);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.1", ngImport: i0, type: FooterToolbarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.1.1", type: FooterToolbarComponent, isStandalone: true, selector: "footer-toolbar", inputs: { errorCollect: { classPropertyName: "errorCollect", publicName: "errorCollect", isSignal: true, isRequired: false, transformFunction: null }, extra: { classPropertyName: "extra", publicName: "extra", isSignal: true, isRequired: false, transformFunction: null } }, host: { classAttribute: "footer-toolbar" }, exportAs: ["footerToolbar"], ngImport: i0, template: `
    <div class="footer-toolbar__left">
      <ng-container *nzStringTemplateOutlet="extra()">{{ extra() }}</ng-container>
    </div>
    <div class="footer-toolbar__right">
      @if (errorCollect()) {
        <error-collect />
      }
      <ng-content />
    </div>
  `, isInline: true, dependencies: [{ kind: "directive", type: NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { kind: "component", type: ErrorCollectComponent, selector: "error-collect, [error-collect]", inputs: ["freq", "offsetTop"], exportAs: ["errorCollect"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.1", ngImport: i0, type: FooterToolbarComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'footer-toolbar',
                    exportAs: 'footerToolbar',
                    template: `
    <div class="footer-toolbar__left">
      <ng-container *nzStringTemplateOutlet="extra()">{{ extra() }}</ng-container>
    </div>
    <div class="footer-toolbar__right">
      @if (errorCollect()) {
        <error-collect />
      }
      <ng-content />
    </div>
  `,
                    host: {
                        class: 'footer-toolbar'
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    imports: [NzStringTemplateOutletDirective, ErrorCollectComponent]
                }]
        }], ctorParameters: () => [], propDecorators: { errorCollect: [{ type: i0.Input, args: [{ isSignal: true, alias: "errorCollect", required: false }] }], extra: [{ type: i0.Input, args: [{ isSignal: true, alias: "extra", required: false }] }] } });

const COMPONENTS = [FooterToolbarComponent];
class FooterToolbarModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.1", ngImport: i0, type: FooterToolbarModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "21.1.1", ngImport: i0, type: FooterToolbarModule, imports: [CommonModule, ErrorCollectModule, NzOutletModule, FooterToolbarComponent], exports: [FooterToolbarComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "21.1.1", ngImport: i0, type: FooterToolbarModule, imports: [CommonModule, ErrorCollectModule, NzOutletModule, COMPONENTS] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.1", ngImport: i0, type: FooterToolbarModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, ErrorCollectModule, NzOutletModule, ...COMPONENTS],
                    exports: COMPONENTS
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { FooterToolbarComponent, FooterToolbarModule };
//# sourceMappingURL=footer-toolbar.mjs.map
