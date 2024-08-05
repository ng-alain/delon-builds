import { DOCUMENT, CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { inject, ElementRef, Renderer2, booleanAttribute, Component, ChangeDetectionStrategy, ViewEncapsulation, Input, NgModule } from '@angular/core';
import { ErrorCollectComponent, ErrorCollectModule } from '@delon/abc/error-collect';
import { NzStringTemplateOutletDirective, NzOutletModule } from 'ng-zorro-antd/core/outlet';

const CLSBODY = 'footer-toolbar__body';
class FooterToolbarComponent {
    constructor() {
        this.el = inject(ElementRef).nativeElement;
        this.renderer = inject(Renderer2);
        this.bodyCls = inject(DOCUMENT).querySelector('body')?.classList;
        this.errorCollect = false;
    }
    ngOnInit() {
        this.renderer.addClass(this.el, 'footer-toolbar');
        this.bodyCls?.add(CLSBODY);
    }
    ngOnDestroy() {
        this.bodyCls?.remove(CLSBODY);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.3", ngImport: i0, type: FooterToolbarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.1.3", type: FooterToolbarComponent, isStandalone: true, selector: "footer-toolbar", inputs: { errorCollect: ["errorCollect", "errorCollect", booleanAttribute], extra: "extra" }, exportAs: ["footerToolbar"], ngImport: i0, template: "<div class=\"footer-toolbar__left\">\n  <ng-container *nzStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\n</div>\n<div class=\"footer-toolbar__right\">\n  @if (errorCollect) {\n    <error-collect />\n  }\n  <ng-content />\n</div>\n", dependencies: [{ kind: "directive", type: NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { kind: "component", type: ErrorCollectComponent, selector: "error-collect, [error-collect]", inputs: ["freq", "offsetTop"], exportAs: ["errorCollect"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.3", ngImport: i0, type: FooterToolbarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'footer-toolbar', exportAs: 'footerToolbar', preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, standalone: true, imports: [NzStringTemplateOutletDirective, ErrorCollectComponent], template: "<div class=\"footer-toolbar__left\">\n  <ng-container *nzStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\n</div>\n<div class=\"footer-toolbar__right\">\n  @if (errorCollect) {\n    <error-collect />\n  }\n  <ng-content />\n</div>\n" }]
        }], propDecorators: { errorCollect: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], extra: [{
                type: Input
            }] } });

const COMPONENTS = [FooterToolbarComponent];
class FooterToolbarModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.3", ngImport: i0, type: FooterToolbarModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.1.3", ngImport: i0, type: FooterToolbarModule, imports: [CommonModule, ErrorCollectModule, NzOutletModule, FooterToolbarComponent], exports: [FooterToolbarComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.1.3", ngImport: i0, type: FooterToolbarModule, imports: [CommonModule, ErrorCollectModule, NzOutletModule, COMPONENTS] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.3", ngImport: i0, type: FooterToolbarModule, decorators: [{
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
