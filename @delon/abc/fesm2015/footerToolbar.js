import { __decorate, __metadata } from 'tslib';
import { DOCUMENT, NgIf, CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { ɵɵdirectiveInject, ElementRef, Renderer2, ɵɵngDeclareComponent, ChangeDetectionStrategy, ViewEncapsulation, ɵsetClassMetadata, Component, Inject, Input, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { InputBoolean, DelonUtilModule } from '@delon/util';
import { NzStringTemplateOutletDirective, NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { ErrorCollectComponent, ErrorCollectModule } from '@delon/abc/error-collect';

const CLSBODY = 'footer-toolbar__body';
class FooterToolbarComponent {
    constructor(el, renderer, doc) {
        this.el = el;
        this.renderer = renderer;
        this.doc = doc;
        this.errorCollect = false;
    }
    get bodyCls() {
        return this.doc.querySelector('body').classList;
    }
    ngOnInit() {
        this.renderer.addClass(this.el.nativeElement, 'footer-toolbar');
        this.bodyCls.add(CLSBODY);
    }
    ngOnDestroy() {
        this.bodyCls.remove(CLSBODY);
    }
}
/** @nocollapse */ FooterToolbarComponent.ɵfac = function FooterToolbarComponent_Factory(t) { return new (t || FooterToolbarComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(DOCUMENT)); };
/** @nocollapse */ FooterToolbarComponent.ɵcmp = ɵɵngDeclareComponent({ version: "11.1.1", type: FooterToolbarComponent, selector: "footer-toolbar", inputs: { errorCollect: "errorCollect", extra: "extra" }, exportAs: ["footerToolbar"], ngImport: i0, template: "<div class=\"footer-toolbar__left\">\n  <ng-container *nzStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\n</div>\n<div class=\"footer-toolbar__right\">\n  <error-collect *ngIf=\"errorCollect\"></error-collect>\n  <ng-content></ng-content>\n</div>\n", directives: [{ type: NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: ErrorCollectComponent, selector: "error-collect, [error-collect]", inputs: ["freq", "offsetTop"], exportAs: ["errorCollect"] }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], FooterToolbarComponent.prototype, "errorCollect", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(FooterToolbarComponent, [{
        type: Component,
        args: [{
                selector: 'footer-toolbar',
                exportAs: 'footerToolbar',
                templateUrl: './footer-toolbar.component.html',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: ElementRef }, { type: Renderer2 }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, { errorCollect: [{
            type: Input
        }], extra: [{
            type: Input
        }] }); })();

const COMPONENTS = [FooterToolbarComponent];
class FooterToolbarModule {
}
/** @nocollapse */ FooterToolbarModule.ɵmod = ɵɵdefineNgModule({ type: FooterToolbarModule });
/** @nocollapse */ FooterToolbarModule.ɵinj = ɵɵdefineInjector({ factory: function FooterToolbarModule_Factory(t) { return new (t || FooterToolbarModule)(); }, imports: [[CommonModule, ErrorCollectModule, DelonUtilModule, NzOutletModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(FooterToolbarModule, { declarations: [FooterToolbarComponent], imports: [CommonModule, ErrorCollectModule, DelonUtilModule, NzOutletModule], exports: [FooterToolbarComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(FooterToolbarModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, ErrorCollectModule, DelonUtilModule, NzOutletModule],
                declarations: [...COMPONENTS],
                exports: [...COMPONENTS],
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { FooterToolbarComponent, FooterToolbarModule };
//# sourceMappingURL=footerToolbar.js.map
