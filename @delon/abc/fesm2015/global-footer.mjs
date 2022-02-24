import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, ViewEncapsulation, ViewChild, Input, Inject, Optional, ContentChildren, NgModule } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { WINDOW } from '@delon/util/token';
import { __decorate } from 'tslib';
import { InputBoolean } from '@delon/util/decorator';
import * as i1 from '@angular/router';
import { RouterModule } from '@angular/router';
import * as i2 from '@angular/platform-browser';
import * as i3 from '@angular/cdk/bidi';
import * as i4 from '@angular/common';
import { CommonModule } from '@angular/common';

class GlobalFooterItemComponent {
}
GlobalFooterItemComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.4", ngImport: i0, type: GlobalFooterItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
GlobalFooterItemComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.4", type: GlobalFooterItemComponent, selector: "global-footer-item", inputs: { href: "href", blankTarget: "blankTarget" }, viewQueries: [{ propertyName: "host", first: true, predicate: ["host"], descendants: true, static: true }], exportAs: ["globalFooterItem"], ngImport: i0, template: ` <ng-template #host><ng-content></ng-content></ng-template> `, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    InputBoolean()
], GlobalFooterItemComponent.prototype, "blankTarget", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.4", ngImport: i0, type: GlobalFooterItemComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'global-footer-item',
                    exportAs: 'globalFooterItem',
                    template: ` <ng-template #host><ng-content></ng-content></ng-template> `,
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }]
        }], propDecorators: { host: [{
                type: ViewChild,
                args: ['host', { static: true }]
            }], href: [{
                type: Input
            }], blankTarget: [{
                type: Input
            }] } });

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
GlobalFooterComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.4", ngImport: i0, type: GlobalFooterComponent, deps: [{ token: i1.Router }, { token: WINDOW }, { token: i2.DomSanitizer }, { token: i3.Directionality, optional: true }], target: i0.ɵɵFactoryTarget.Component });
GlobalFooterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.4", type: GlobalFooterComponent, selector: "global-footer", inputs: { links: "links" }, host: { properties: { "class.global-footer": "true", "class.global-footer-rtl": "dir === 'rtl'" } }, queries: [{ propertyName: "items", predicate: GlobalFooterItemComponent }], exportAs: ["globalFooter"], ngImport: i0, template: "<div *ngIf=\"links.length > 0 || items.length > 0\" class=\"global-footer__links\">\n  <a *ngFor=\"let i of links\" class=\"global-footer__links-item\" (click)=\"to(i)\" [innerHTML]=\"i._title\"></a>\n  <a *ngFor=\"let i of items\" class=\"global-footer__links-item\" (click)=\"to(i)\">\n    <ng-container *ngTemplateOutlet=\"i.host\"></ng-container>\n  </a>\n</div>\n<div class=\"global-footer__copyright\">\n  <ng-content></ng-content>\n</div>\n", directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i4.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.4", ngImport: i0, type: GlobalFooterComponent, decorators: [{
            type: Component,
            args: [{ selector: 'global-footer', exportAs: 'globalFooter', host: {
                        '[class.global-footer]': 'true',
                        '[class.global-footer-rtl]': `dir === 'rtl'`
                    }, preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div *ngIf=\"links.length > 0 || items.length > 0\" class=\"global-footer__links\">\n  <a *ngFor=\"let i of links\" class=\"global-footer__links-item\" (click)=\"to(i)\" [innerHTML]=\"i._title\"></a>\n  <a *ngFor=\"let i of items\" class=\"global-footer__links-item\" (click)=\"to(i)\">\n    <ng-container *ngTemplateOutlet=\"i.host\"></ng-container>\n  </a>\n</div>\n<div class=\"global-footer__copyright\">\n  <ng-content></ng-content>\n</div>\n" }]
        }], ctorParameters: function () {
        return [{ type: i1.Router }, { type: undefined, decorators: [{
                        type: Inject,
                        args: [WINDOW]
                    }] }, { type: i2.DomSanitizer }, { type: i3.Directionality, decorators: [{
                        type: Optional
                    }] }];
    }, propDecorators: { links: [{
                type: Input
            }], items: [{
                type: ContentChildren,
                args: [GlobalFooterItemComponent]
            }] } });

const COMPONENTS = [GlobalFooterComponent, GlobalFooterItemComponent];
class GlobalFooterModule {
}
GlobalFooterModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.4", ngImport: i0, type: GlobalFooterModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
GlobalFooterModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.4", ngImport: i0, type: GlobalFooterModule, declarations: [GlobalFooterComponent, GlobalFooterItemComponent], imports: [CommonModule, RouterModule], exports: [GlobalFooterComponent, GlobalFooterItemComponent] });
GlobalFooterModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.4", ngImport: i0, type: GlobalFooterModule, imports: [[CommonModule, RouterModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.4", ngImport: i0, type: GlobalFooterModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, RouterModule],
                    declarations: COMPONENTS,
                    exports: COMPONENTS
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { GlobalFooterComponent, GlobalFooterItemComponent, GlobalFooterModule };
//# sourceMappingURL=global-footer.mjs.map
