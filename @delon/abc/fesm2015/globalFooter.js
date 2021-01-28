import { Directionality } from '@angular/cdk/bidi';
import * as i0 from '@angular/core';
import { ɵɵngDeclareComponent, ChangeDetectionStrategy, ViewEncapsulation, ɵsetClassMetadata, Component, ViewChild, Input, ɵɵdirectiveInject, Inject, Optional, ContentChildren, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { WINDOW } from '@delon/theme';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { __decorate, __metadata } from 'tslib';
import { InputBoolean, DelonUtilModule } from '@delon/util';
import { NgIf, NgForOf, NgTemplateOutlet, CommonModule } from '@angular/common';

class GlobalFooterItemComponent {
}
/** @nocollapse */ GlobalFooterItemComponent.ɵfac = function GlobalFooterItemComponent_Factory(t) { return new (t || GlobalFooterItemComponent)(); };
/** @nocollapse */ GlobalFooterItemComponent.ɵcmp = ɵɵngDeclareComponent({ version: "11.1.1", type: GlobalFooterItemComponent, selector: "global-footer-item", inputs: { href: "href", blankTarget: "blankTarget" }, viewQueries: [{ propertyName: "host", first: true, predicate: ["host"], emitDistinctChangesOnly: false, descendants: true, static: true }], exportAs: ["globalFooterItem"], ngImport: i0, template: ` <ng-template #host><ng-content></ng-content></ng-template> `, isInline: true, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], GlobalFooterItemComponent.prototype, "blankTarget", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GlobalFooterItemComponent, [{
        type: Component,
        args: [{
                selector: 'global-footer-item',
                exportAs: 'globalFooterItem',
                template: ` <ng-template #host><ng-content></ng-content></ng-template> `,
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], null, { host: [{
            type: ViewChild,
            args: ['host', { static: true }]
        }], href: [{
            type: Input
        }], blankTarget: [{
            type: Input
        }] }); })();

class GlobalFooterComponent {
    constructor(router, win, dom, directionality) {
        this.router = router;
        this.win = win;
        this.dom = dom;
        this.directionality = directionality;
        this.destroy$ = new Subject();
        this._links = [];
        this.dir = 'ltr';
    }
    set links(val) {
        val.forEach(i => (i._title = this.dom.bypassSecurityTrustHtml(i.title)));
        this._links = val;
    }
    get links() {
        return this._links;
    }
    to(item) {
        if (!item.href) {
            return;
        }
        if (item.blankTarget) {
            this.win.open(item.href);
            return;
        }
        if (/^https?:\/\//.test(item.href)) {
            this.win.location.href = item.href;
        }
        else {
            this.router.navigateByUrl(item.href);
        }
    }
    ngOnInit() {
        var _a;
        this.dir = this.directionality.value;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
/** @nocollapse */ GlobalFooterComponent.ɵfac = function GlobalFooterComponent_Factory(t) { return new (t || GlobalFooterComponent)(ɵɵdirectiveInject(Router), ɵɵdirectiveInject(WINDOW), ɵɵdirectiveInject(DomSanitizer), ɵɵdirectiveInject(Directionality, 8)); };
/** @nocollapse */ GlobalFooterComponent.ɵcmp = ɵɵngDeclareComponent({ version: "11.1.1", type: GlobalFooterComponent, selector: "global-footer", inputs: { links: "links" }, host: { properties: { "class.global-footer": "true", "class.global-footer-rtl": "dir === 'rtl'" } }, queries: [{ propertyName: "items", predicate: GlobalFooterItemComponent, emitDistinctChangesOnly: false }], exportAs: ["globalFooter"], ngImport: i0, template: "<div *ngIf=\"links.length > 0 || items.length > 0\" class=\"global-footer__links\">\n  <a *ngFor=\"let i of links\" class=\"global-footer__links-item\" (click)=\"to(i)\" [innerHTML]=\"i._title\"></a>\n  <a *ngFor=\"let i of items\" class=\"global-footer__links-item\" (click)=\"to(i)\">\n    <ng-container *ngTemplateOutlet=\"i.host\"></ng-container>\n  </a>\n</div>\n<div class=\"global-footer__copyright\">\n  <ng-content></ng-content>\n</div>\n", directives: [{ type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GlobalFooterComponent, [{
        type: Component,
        args: [{
                selector: 'global-footer',
                exportAs: 'globalFooter',
                templateUrl: './global-footer.component.html',
                host: {
                    '[class.global-footer]': 'true',
                    '[class.global-footer-rtl]': `dir === 'rtl'`,
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: Router }, { type: Window, decorators: [{
                type: Inject,
                args: [WINDOW]
            }] }, { type: DomSanitizer }, { type: Directionality, decorators: [{
                type: Optional
            }] }]; }, { links: [{
            type: Input
        }], items: [{
            type: ContentChildren,
            args: [GlobalFooterItemComponent]
        }] }); })();

const COMPONENTS = [GlobalFooterComponent, GlobalFooterItemComponent];
class GlobalFooterModule {
}
/** @nocollapse */ GlobalFooterModule.ɵmod = ɵɵdefineNgModule({ type: GlobalFooterModule });
/** @nocollapse */ GlobalFooterModule.ɵinj = ɵɵdefineInjector({ factory: function GlobalFooterModule_Factory(t) { return new (t || GlobalFooterModule)(); }, imports: [[CommonModule, RouterModule, DelonUtilModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(GlobalFooterModule, { declarations: [GlobalFooterComponent, GlobalFooterItemComponent], imports: [CommonModule, RouterModule, DelonUtilModule], exports: [GlobalFooterComponent, GlobalFooterItemComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(GlobalFooterModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, RouterModule, DelonUtilModule],
                declarations: [...COMPONENTS],
                exports: [...COMPONENTS],
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { GlobalFooterComponent, GlobalFooterItemComponent, GlobalFooterModule };
//# sourceMappingURL=globalFooter.js.map
