import { Directionality } from '@angular/cdk/bidi';
import { NgTemplateOutlet, CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { viewChild, input, booleanAttribute, ViewEncapsulation, ChangeDetectionStrategy, Component, inject, contentChildren, computed, NgModule } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { WINDOW } from '@delon/util/token';

class GlobalFooterItemComponent {
    host = viewChild.required('host');
    href = input(...(ngDevMode ? [undefined, { debugName: "href" }] : []));
    blankTarget = input(false, { ...(ngDevMode ? { debugName: "blankTarget" } : {}), transform: booleanAttribute });
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.2", ngImport: i0, type: GlobalFooterItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.2.0", version: "21.1.2", type: GlobalFooterItemComponent, isStandalone: true, selector: "global-footer-item", inputs: { href: { classPropertyName: "href", publicName: "href", isSignal: true, isRequired: false, transformFunction: null }, blankTarget: { classPropertyName: "blankTarget", publicName: "blankTarget", isSignal: true, isRequired: false, transformFunction: null } }, viewQueries: [{ propertyName: "host", first: true, predicate: ["host"], descendants: true, isSignal: true }], exportAs: ["globalFooterItem"], ngImport: i0, template: `<ng-template #host><ng-content /></ng-template>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.2", ngImport: i0, type: GlobalFooterItemComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'global-footer-item',
                    exportAs: 'globalFooterItem',
                    template: `<ng-template #host><ng-content /></ng-template>`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], propDecorators: { host: [{ type: i0.ViewChild, args: ['host', { isSignal: true }] }], href: [{ type: i0.Input, args: [{ isSignal: true, alias: "href", required: false }] }], blankTarget: [{ type: i0.Input, args: [{ isSignal: true, alias: "blankTarget", required: false }] }] } });

class GlobalFooterComponent {
    router = inject(Router);
    win = inject(WINDOW);
    dom = inject(DomSanitizer);
    dir = inject(Directionality).valueSignal;
    links = input([], ...(ngDevMode ? [{ debugName: "links" }] : []));
    items = contentChildren(GlobalFooterItemComponent, ...(ngDevMode ? [{ debugName: "items" }] : []));
    linkHtmls = computed(() => {
        return this.links().map(item => {
            if (typeof item.title === 'string') {
                item.title = this.dom.bypassSecurityTrustHtml(item.title);
            }
            return item;
        });
    }, ...(ngDevMode ? [{ debugName: "linkHtmls" }] : []));
    to(item) {
        const href = typeof item.href === 'string' ? item.href : item.href();
        if (!href) {
            return;
        }
        const blankTarget = typeof item.blankTarget === 'boolean' ? item.blankTarget : item.blankTarget?.();
        if (blankTarget) {
            this.win.open(href);
            return;
        }
        if (/^https?:\/\//.test(href)) {
            this.win.location.href = href;
        }
        else {
            this.router.navigateByUrl(href);
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.2", ngImport: i0, type: GlobalFooterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.1.2", type: GlobalFooterComponent, isStandalone: true, selector: "global-footer", inputs: { links: { classPropertyName: "links", publicName: "links", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "class.global-footer-rtl": "dir() === 'rtl'" }, classAttribute: "global-footer" }, queries: [{ propertyName: "items", predicate: GlobalFooterItemComponent, isSignal: true }], exportAs: ["globalFooter"], ngImport: i0, template: `
    @if (linkHtmls().length > 0 || items().length > 0) {
      <div class="global-footer__links">
        @for (i of linkHtmls(); track $index) {
          <a class="global-footer__links-item" (click)="to(i)" [innerHTML]="i.title"></a>
        }
        @for (i of items(); track $index) {
          <a class="global-footer__links-item" (click)="to(i)">
            <ng-container *ngTemplateOutlet="i.host()" />
          </a>
        }
      </div>
    }
    <div class="global-footer__copyright">
      <ng-content />
    </div>
  `, isInline: true, dependencies: [{ kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.2", ngImport: i0, type: GlobalFooterComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'global-footer',
                    exportAs: 'globalFooter',
                    template: `
    @if (linkHtmls().length > 0 || items().length > 0) {
      <div class="global-footer__links">
        @for (i of linkHtmls(); track $index) {
          <a class="global-footer__links-item" (click)="to(i)" [innerHTML]="i.title"></a>
        }
        @for (i of items(); track $index) {
          <a class="global-footer__links-item" (click)="to(i)">
            <ng-container *ngTemplateOutlet="i.host()" />
          </a>
        }
      </div>
    }
    <div class="global-footer__copyright">
      <ng-content />
    </div>
  `,
                    host: {
                        class: 'global-footer',
                        '[class.global-footer-rtl]': `dir() === 'rtl'`
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    imports: [NgTemplateOutlet]
                }]
        }], propDecorators: { links: [{ type: i0.Input, args: [{ isSignal: true, alias: "links", required: false }] }], items: [{ type: i0.ContentChildren, args: [i0.forwardRef(() => GlobalFooterItemComponent), { isSignal: true }] }] } });

const COMPONENTS = [GlobalFooterComponent, GlobalFooterItemComponent];
class GlobalFooterModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.2", ngImport: i0, type: GlobalFooterModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "21.1.2", ngImport: i0, type: GlobalFooterModule, imports: [CommonModule, RouterModule, GlobalFooterComponent, GlobalFooterItemComponent], exports: [GlobalFooterComponent, GlobalFooterItemComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "21.1.2", ngImport: i0, type: GlobalFooterModule, imports: [CommonModule, RouterModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.2", ngImport: i0, type: GlobalFooterModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, RouterModule, ...COMPONENTS],
                    exports: COMPONENTS
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { GlobalFooterComponent, GlobalFooterItemComponent, GlobalFooterModule };
//# sourceMappingURL=global-footer.mjs.map
