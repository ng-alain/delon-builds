import { __decorate } from 'tslib';
import { DOCUMENT, CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, ViewEncapsulation, ElementRef, Renderer2, Inject, Input, NgModule } from '@angular/core';
import { InputBoolean } from '@delon/util/decorator';
import { ErrorCollectModule } from '@delon/abc/error-collect';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';

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
FooterToolbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'footer-toolbar',
                exportAs: 'footerToolbar',
                template: "<div class=\"footer-toolbar__left\">\n  <ng-container *nzStringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\n</div>\n<div class=\"footer-toolbar__right\">\n  <error-collect *ngIf=\"errorCollect\"></error-collect>\n  <ng-content></ng-content>\n</div>\n",
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            },] }
];
FooterToolbarComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
FooterToolbarComponent.propDecorators = {
    errorCollect: [{ type: Input }],
    extra: [{ type: Input }]
};
__decorate([
    InputBoolean()
], FooterToolbarComponent.prototype, "errorCollect", void 0);

const COMPONENTS = [FooterToolbarComponent];
class FooterToolbarModule {
}
FooterToolbarModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, ErrorCollectModule, NzOutletModule],
                declarations: COMPONENTS,
                exports: COMPONENTS
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { FooterToolbarComponent, FooterToolbarModule };
//# sourceMappingURL=footerToolbar.js.map
