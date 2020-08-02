/**
 * @fileoverview added by tsickle
 * Generated from: page-header.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Inject, Input, Optional, Renderer2, TemplateRef, ViewChild, ViewEncapsulation, } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ReuseTabService } from '@delon/abc/reuse-tab';
import { ALAIN_I18N_TOKEN, MenuService, SettingsService, TitleService } from '@delon/theme';
import { AlainConfigService, InputBoolean, InputNumber, isEmpty } from '@delon/util';
import { NzAffixComponent } from 'ng-zorro-antd/affix';
import { merge, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
/**
 * @record
 */
function PageHeaderPath() { }
if (false) {
    /** @type {?|undefined} */
    PageHeaderPath.prototype.title;
    /** @type {?|undefined} */
    PageHeaderPath.prototype.link;
}
export class PageHeaderComponent {
    // #endregion
    /**
     * @param {?} settings
     * @param {?} renderer
     * @param {?} router
     * @param {?} menuSrv
     * @param {?} i18nSrv
     * @param {?} titleSrv
     * @param {?} reuseSrv
     * @param {?} cdr
     * @param {?} configSrv
     * @param {?} platform
     */
    constructor(settings, renderer, router, menuSrv, i18nSrv, titleSrv, reuseSrv, cdr, configSrv, platform) {
        this.renderer = renderer;
        this.router = router;
        this.menuSrv = menuSrv;
        this.i18nSrv = i18nSrv;
        this.titleSrv = titleSrv;
        this.reuseSrv = reuseSrv;
        this.cdr = cdr;
        this.inited = false;
        this.unsubscribe$ = new Subject();
        this.isBrowser = true;
        this._titleVal = '';
        this.paths = [];
        this.loading = false;
        this.wide = false;
        this.isBrowser = platform.isBrowser;
        configSrv.attach(this, 'pageHeader', {
            home: '首页',
            homeLink: '/',
            autoBreadcrumb: true,
            recursiveBreadcrumb: false,
            autoTitle: true,
            syncTitle: true,
            fixed: false,
            fixedOffsetTop: 64,
        });
        settings.notify
            .pipe(takeUntil(this.unsubscribe$), filter((/**
         * @param {?} w
         * @return {?}
         */
        w => this.affix && w.type === 'layout' && w.name === 'collapsed')))
            .subscribe((/**
         * @return {?}
         */
        () => this.affix.updatePosition((/** @type {?} */ ({})))));
        merge(menuSrv.change.pipe(filter((/**
         * @return {?}
         */
        () => this.inited))), router.events.pipe(filter((/**
         * @param {?} ev
         * @return {?}
         */
        ev => ev instanceof NavigationEnd))), i18nSrv.change)
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((/**
         * @return {?}
         */
        () => this.refresh()));
    }
    /**
     * @private
     * @return {?}
     */
    get menus() {
        return this.menuSrv.getPathByUrl(this.router.url, this.recursiveBreadcrumb);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set title(value) {
        if (value instanceof TemplateRef) {
            this._title = null;
            this._titleTpl = value;
            this._titleVal = '';
        }
        else {
            this._title = value;
            this._titleVal = this._title;
        }
    }
    /**
     * @return {?}
     */
    refresh() {
        this.setTitle().genBreadcrumb();
        this.cdr.detectChanges();
    }
    /**
     * @private
     * @return {?}
     */
    genBreadcrumb() {
        if (this.breadcrumb || !this.autoBreadcrumb || this.menus.length <= 0) {
            this.paths = [];
            return;
        }
        /** @type {?} */
        const paths = [];
        this.menus.forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            if (typeof item.hideInBreadcrumb !== 'undefined' && item.hideInBreadcrumb)
                return;
            /** @type {?} */
            let title = item.text;
            if (item.i18n && this.i18nSrv)
                title = this.i18nSrv.fanyi(item.i18n);
            paths.push({ title, link: (/** @type {?} */ ((item.link && [item.link]))) });
        }));
        // add home
        if (this.home) {
            paths.splice(0, 0, {
                title: (this.homeI18n && this.i18nSrv && this.i18nSrv.fanyi(this.homeI18n)) || this.home,
                link: [this.homeLink],
            });
        }
        this.paths = paths;
    }
    /**
     * @private
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    setTitle() {
        if ((/** @type {?} */ (this))._title == null && (/** @type {?} */ (this))._titleTpl == null && (/** @type {?} */ (this)).autoTitle && (/** @type {?} */ (this)).menus.length > 0) {
            /** @type {?} */
            const item = (/** @type {?} */ (this)).menus[(/** @type {?} */ (this)).menus.length - 1];
            /** @type {?} */
            let title = item.text;
            if (item.i18n && (/** @type {?} */ (this)).i18nSrv) {
                title = (/** @type {?} */ (this)).i18nSrv.fanyi(item.i18n);
            }
            (/** @type {?} */ (this))._titleVal = (/** @type {?} */ (title));
        }
        if ((/** @type {?} */ (this))._titleVal && (/** @type {?} */ (this)).syncTitle) {
            if ((/** @type {?} */ (this)).titleSrv) {
                (/** @type {?} */ (this)).titleSrv.setTitle((/** @type {?} */ (this))._titleVal);
            }
            if (!(/** @type {?} */ (this)).inited && (/** @type {?} */ (this)).reuseSrv) {
                (/** @type {?} */ (this)).reuseSrv.title = (/** @type {?} */ (this))._titleVal;
            }
        }
        return (/** @type {?} */ (this));
    }
    /**
     * @return {?}
     */
    checkContent() {
        if (isEmpty(this.conTpl.nativeElement)) {
            this.renderer.setAttribute(this.conTpl.nativeElement, 'hidden', '');
        }
        else {
            this.renderer.removeAttribute(this.conTpl.nativeElement, 'hidden');
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.refresh();
        this.inited = true;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.checkContent();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.inited) {
            this.refresh();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        const { unsubscribe$ } = this;
        unsubscribe$.next();
        unsubscribe$.complete();
    }
}
PageHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'page-header',
                exportAs: 'pageHeader',
                template: "<nz-affix #affix *ngIf=\"isBrowser && fixed; else phTpl\" [nzOffsetTop]=\"fixedOffsetTop\">\n  <ng-template [ngTemplateOutlet]=\"phTpl\"></ng-template>\n</nz-affix>\n<ng-template #phTpl>\n  <div class=\"page-header\">\n    <div [ngClass]=\"{ 'page-header__wide': wide }\">\n      <nz-skeleton [nzLoading]=\"loading\" [nzTitle]=\"false\" [nzActive]=\"true\" [nzParagraph]=\"{ rows: 3 }\" [nzAvatar]=\"{ size: 'large', shape: 'circle' }\">\n        <ng-container *ngIf=\"!breadcrumb; else breadcrumb\">\n          <nz-breadcrumb *ngIf=\"paths && paths.length > 0\">\n            <nz-breadcrumb-item *ngFor=\"let i of paths\">\n              <ng-container *ngIf=\"i.link\">\n                <a [routerLink]=\"i.link\">{{ i.title }}</a>\n              </ng-container>\n              <ng-container *ngIf=\"!i.link\">{{ i.title }}</ng-container>\n            </nz-breadcrumb-item>\n          </nz-breadcrumb>\n        </ng-container>\n        <div class=\"page-header__detail\">\n          <div *ngIf=\"logo\" class=\"page-header__logo\">\n            <ng-template [ngTemplateOutlet]=\"logo\"></ng-template>\n          </div>\n          <div class=\"page-header__main\">\n            <div class=\"page-header__row\">\n              <h1 *ngIf=\"_titleVal || _titleTpl\" class=\"page-header__title\">\n                <ng-container *ngIf=\"_titleVal; else _titleTpl\">{{ _titleVal }}</ng-container>\n              </h1>\n              <div *ngIf=\"action\" class=\"page-header__action\">\n                <ng-template [ngTemplateOutlet]=\"action\"></ng-template>\n              </div>\n            </div>\n            <div class=\"page-header__row\">\n              <div class=\"page-header__desc\" (cdkObserveContent)=\"checkContent()\" #conTpl>\n                <ng-content></ng-content>\n                <ng-template [ngTemplateOutlet]=\"content\"></ng-template>\n              </div>\n              <div *ngIf=\"extra\" class=\"page-header__extra\">\n                <ng-template [ngTemplateOutlet]=\"extra\"></ng-template>\n              </div>\n            </div>\n          </div>\n        </div>\n        <ng-template [ngTemplateOutlet]=\"tab\"></ng-template>\n      </nz-skeleton>\n    </div>\n  </div>\n</ng-template>\n",
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
PageHeaderComponent.ctorParameters = () => [
    { type: SettingsService },
    { type: Renderer2 },
    { type: Router },
    { type: MenuService },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [ALAIN_I18N_TOKEN,] }] },
    { type: TitleService, decorators: [{ type: Optional }, { type: Inject, args: [TitleService,] }] },
    { type: ReuseTabService, decorators: [{ type: Optional }, { type: Inject, args: [ReuseTabService,] }] },
    { type: ChangeDetectorRef },
    { type: AlainConfigService },
    { type: Platform }
];
PageHeaderComponent.propDecorators = {
    conTpl: [{ type: ViewChild, args: ['conTpl', { static: false },] }],
    affix: [{ type: ViewChild, args: ['affix', { static: false },] }],
    title: [{ type: Input }],
    loading: [{ type: Input }],
    wide: [{ type: Input }],
    home: [{ type: Input }],
    homeLink: [{ type: Input }],
    homeI18n: [{ type: Input }],
    autoBreadcrumb: [{ type: Input }],
    autoTitle: [{ type: Input }],
    syncTitle: [{ type: Input }],
    fixed: [{ type: Input }],
    fixedOffsetTop: [{ type: Input }],
    breadcrumb: [{ type: Input }],
    recursiveBreadcrumb: [{ type: Input }],
    logo: [{ type: Input }],
    action: [{ type: Input }],
    content: [{ type: Input }],
    extra: [{ type: Input }],
    tab: [{ type: Input }]
};
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], PageHeaderComponent.prototype, "loading", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], PageHeaderComponent.prototype, "wide", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], PageHeaderComponent.prototype, "autoBreadcrumb", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], PageHeaderComponent.prototype, "autoTitle", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], PageHeaderComponent.prototype, "syncTitle", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], PageHeaderComponent.prototype, "fixed", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Number)
], PageHeaderComponent.prototype, "fixedOffsetTop", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], PageHeaderComponent.prototype, "recursiveBreadcrumb", void 0);
if (false) {
    /** @type {?} */
    PageHeaderComponent.prototype.inited;
    /**
     * @type {?}
     * @private
     */
    PageHeaderComponent.prototype.unsubscribe$;
    /**
     * @type {?}
     * @private
     */
    PageHeaderComponent.prototype.conTpl;
    /**
     * @type {?}
     * @private
     */
    PageHeaderComponent.prototype.affix;
    /** @type {?} */
    PageHeaderComponent.prototype.isBrowser;
    /** @type {?} */
    PageHeaderComponent.prototype._titleVal;
    /** @type {?} */
    PageHeaderComponent.prototype.paths;
    /** @type {?} */
    PageHeaderComponent.prototype._title;
    /** @type {?} */
    PageHeaderComponent.prototype._titleTpl;
    /** @type {?} */
    PageHeaderComponent.prototype.loading;
    /** @type {?} */
    PageHeaderComponent.prototype.wide;
    /** @type {?} */
    PageHeaderComponent.prototype.home;
    /** @type {?} */
    PageHeaderComponent.prototype.homeLink;
    /** @type {?} */
    PageHeaderComponent.prototype.homeI18n;
    /** @type {?} */
    PageHeaderComponent.prototype.autoBreadcrumb;
    /** @type {?} */
    PageHeaderComponent.prototype.autoTitle;
    /** @type {?} */
    PageHeaderComponent.prototype.syncTitle;
    /** @type {?} */
    PageHeaderComponent.prototype.fixed;
    /** @type {?} */
    PageHeaderComponent.prototype.fixedOffsetTop;
    /** @type {?} */
    PageHeaderComponent.prototype.breadcrumb;
    /** @type {?} */
    PageHeaderComponent.prototype.recursiveBreadcrumb;
    /** @type {?} */
    PageHeaderComponent.prototype.logo;
    /** @type {?} */
    PageHeaderComponent.prototype.action;
    /** @type {?} */
    PageHeaderComponent.prototype.content;
    /** @type {?} */
    PageHeaderComponent.prototype.extra;
    /** @type {?} */
    PageHeaderComponent.prototype.tab;
    /**
     * @type {?}
     * @private
     */
    PageHeaderComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    PageHeaderComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    PageHeaderComponent.prototype.menuSrv;
    /**
     * @type {?}
     * @private
     */
    PageHeaderComponent.prototype.i18nSrv;
    /**
     * @type {?}
     * @private
     */
    PageHeaderComponent.prototype.titleSrv;
    /**
     * @type {?}
     * @private
     */
    PageHeaderComponent.prototype.reuseSrv;
    /**
     * @type {?}
     * @private
     */
    PageHeaderComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3BhZ2UtaGVhZGVyL3BhZ2UtaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixNQUFNLEVBQ04sS0FBSyxFQUlMLFFBQVEsRUFDUixTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdkQsT0FBTyxFQUFvQixnQkFBZ0IsRUFBUSxXQUFXLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNwSCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDckYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUVuRCw2QkFHQzs7O0lBRkMsK0JBQWU7O0lBQ2YsOEJBQWdCOztBQVdsQixNQUFNLE9BQU8sbUJBQW1COzs7Ozs7Ozs7Ozs7OztJQWtEOUIsWUFDRSxRQUF5QixFQUNqQixRQUFtQixFQUNuQixNQUFjLEVBQ2QsT0FBb0IsRUFDa0IsT0FBeUIsRUFD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Qjs7SUFDdEIsd0NBQTZCOztJQWE3QixzQ0FBeUM7O0lBQ3pDLG1DQUFzQzs7SUFDdEMsbUNBQXNCOztJQUN0Qix1Q0FBMEI7O0lBQzFCLHVDQUEwQjs7SUFDMUIsNkNBQWlEOztJQUNqRCx3Q0FBNEM7O0lBQzVDLHdDQUE0Qzs7SUFDNUMsb0NBQXdDOztJQUN4Qyw2Q0FBK0M7O0lBQy9DLHlDQUF1Qzs7SUFDdkMsa0RBQXNEOztJQUN0RCxtQ0FBaUM7O0lBQ2pDLHFDQUFtQzs7SUFDbkMsc0NBQW9DOztJQUNwQyxvQ0FBa0M7O0lBQ2xDLGtDQUFnQzs7Ozs7SUFNOUIsdUNBQTJCOzs7OztJQUMzQixxQ0FBc0I7Ozs7O0lBQ3RCLHNDQUE0Qjs7Ozs7SUFDNUIsc0NBQXVFOzs7OztJQUN2RSx1Q0FBZ0U7Ozs7O0lBQ2hFLHVDQUFzRTs7Ozs7SUFDdEUsa0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdmlnYXRpb25FbmQsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBSZXVzZVRhYlNlcnZpY2UgfSBmcm9tICdAZGVsb24vYWJjL3JldXNlLXRhYic7XG5pbXBvcnQgeyBBbGFpbkkxOE5TZXJ2aWNlLCBBTEFJTl9JMThOX1RPS0VOLCBNZW51LCBNZW51U2VydmljZSwgU2V0dGluZ3NTZXJ2aWNlLCBUaXRsZVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlLCBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyLCBpc0VtcHR5IH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgTnpBZmZpeENvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvYWZmaXgnO1xuaW1wb3J0IHsgbWVyZ2UsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbnRlcmZhY2UgUGFnZUhlYWRlclBhdGgge1xuICB0aXRsZT86IHN0cmluZztcbiAgbGluaz86IHN0cmluZ1tdO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwYWdlLWhlYWRlcicsXG4gIGV4cG9ydEFzOiAncGFnZUhlYWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYWdlLWhlYWRlci5jb21wb25lbnQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgUGFnZUhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBpbml0ZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBAVmlld0NoaWxkKCdjb25UcGwnLCB7IHN0YXRpYzogZmFsc2UgfSkgcHJpdmF0ZSBjb25UcGw6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2FmZml4JywgeyBzdGF0aWM6IGZhbHNlIH0pIHByaXZhdGUgYWZmaXg6IE56QWZmaXhDb21wb25lbnQ7XG4gIGlzQnJvd3NlciA9IHRydWU7XG5cbiAgcHJpdmF0ZSBnZXQgbWVudXMoKTogTWVudVtdIHtcbiAgICByZXR1cm4gdGhpcy5tZW51U3J2LmdldFBhdGhCeVVybCh0aGlzLnJvdXRlci51cmwsIHRoaXMucmVjdXJzaXZlQnJlYWRjcnVtYik7XG4gIH1cblxuICBfdGl0bGVWYWw6IHN0cmluZyA9ICcnO1xuICBwYXRoczogUGFnZUhlYWRlclBhdGhbXSA9IFtdO1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgX3RpdGxlOiBzdHJpbmcgfCBudWxsO1xuICBfdGl0bGVUcGw6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKVxuICBzZXQgdGl0bGUodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+KSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIHRoaXMuX3RpdGxlID0gbnVsbDtcbiAgICAgIHRoaXMuX3RpdGxlVHBsID0gdmFsdWU7XG4gICAgICB0aGlzLl90aXRsZVZhbCA9ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl90aXRsZSA9IHZhbHVlO1xuICAgICAgdGhpcy5fdGl0bGVWYWwgPSB0aGlzLl90aXRsZTtcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbG9hZGluZyA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgd2lkZSA9IGZhbHNlO1xuICBASW5wdXQoKSBob21lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGhvbWVMaW5rOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGhvbWVJMThuOiBzdHJpbmc7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBhdXRvQnJlYWRjcnVtYjogYm9vbGVhbjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGF1dG9UaXRsZTogYm9vbGVhbjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHN5bmNUaXRsZTogYm9vbGVhbjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGZpeGVkOiBib29sZWFuO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBmaXhlZE9mZnNldFRvcDogbnVtYmVyO1xuICBASW5wdXQoKSBicmVhZGNydW1iOiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHJlY3Vyc2l2ZUJyZWFkY3J1bWI6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGxvZ286IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBhY3Rpb246IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBjb250ZW50OiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgZXh0cmE6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSB0YWI6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3RvcihcbiAgICBzZXR0aW5nczogU2V0dGluZ3NTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgbWVudVNydjogTWVudVNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChBTEFJTl9JMThOX1RPS0VOKSBwcml2YXRlIGkxOG5TcnY6IEFsYWluSTE4TlNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChUaXRsZVNlcnZpY2UpIHByaXZhdGUgdGl0bGVTcnY6IFRpdGxlU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KFJldXNlVGFiU2VydmljZSkgcHJpdmF0ZSByZXVzZVNydjogUmV1c2VUYWJTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBjb25maWdTcnY6IEFsYWluQ29uZmlnU2VydmljZSxcbiAgICBwbGF0Zm9ybTogUGxhdGZvcm0sXG4gICkge1xuICAgIHRoaXMuaXNCcm93c2VyID0gcGxhdGZvcm0uaXNCcm93c2VyO1xuICAgIGNvbmZpZ1Nydi5hdHRhY2godGhpcywgJ3BhZ2VIZWFkZXInLCB7XG4gICAgICBob21lOiAn6aaW6aG1JyxcbiAgICAgIGhvbWVMaW5rOiAnLycsXG4gICAgICBhdXRvQnJlYWRjcnVtYjogdHJ1ZSxcbiAgICAgIHJlY3Vyc2l2ZUJyZWFkY3J1bWI6IGZhbHNlLFxuICAgICAgYXV0b1RpdGxlOiB0cnVlLFxuICAgICAgc3luY1RpdGxlOiB0cnVlLFxuICAgICAgZml4ZWQ6IGZhbHNlLFxuICAgICAgZml4ZWRPZmZzZXRUb3A6IDY0LFxuICAgIH0pO1xuICAgIHNldHRpbmdzLm5vdGlmeVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCksXG4gICAgICAgIGZpbHRlcih3ID0+IHRoaXMuYWZmaXggJiYgdy50eXBlID09PSAnbGF5b3V0JyAmJiB3Lm5hbWUgPT09ICdjb2xsYXBzZWQnKSxcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5hZmZpeC51cGRhdGVQb3NpdGlvbih7fSBhcyBhbnkpKTtcblxuICAgIG1lcmdlKG1lbnVTcnYuY2hhbmdlLnBpcGUoZmlsdGVyKCgpID0+IHRoaXMuaW5pdGVkKSksIHJvdXRlci5ldmVudHMucGlwZShmaWx0ZXIoZXYgPT4gZXYgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSksIGkxOG5TcnYuY2hhbmdlKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5yZWZyZXNoKCkpO1xuICB9XG5cbiAgcmVmcmVzaCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldFRpdGxlKCkuZ2VuQnJlYWRjcnVtYigpO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuQnJlYWRjcnVtYigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5icmVhZGNydW1iIHx8ICF0aGlzLmF1dG9CcmVhZGNydW1iIHx8IHRoaXMubWVudXMubGVuZ3RoIDw9IDApIHtcbiAgICAgIHRoaXMucGF0aHMgPSBbXTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcGF0aHM6IFBhZ2VIZWFkZXJQYXRoW10gPSBbXTtcbiAgICB0aGlzLm1lbnVzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpZiAodHlwZW9mIGl0ZW0uaGlkZUluQnJlYWRjcnVtYiAhPT0gJ3VuZGVmaW5lZCcgJiYgaXRlbS5oaWRlSW5CcmVhZGNydW1iKSByZXR1cm47XG4gICAgICBsZXQgdGl0bGUgPSBpdGVtLnRleHQ7XG4gICAgICBpZiAoaXRlbS5pMThuICYmIHRoaXMuaTE4blNydikgdGl0bGUgPSB0aGlzLmkxOG5TcnYuZmFueWkoaXRlbS5pMThuKTtcbiAgICAgIHBhdGhzLnB1c2goeyB0aXRsZSwgbGluazogKGl0ZW0ubGluayAmJiBbaXRlbS5saW5rXSkgYXMgc3RyaW5nW10gfSk7XG4gICAgfSk7XG4gICAgLy8gYWRkIGhvbWVcbiAgICBpZiAodGhpcy5ob21lKSB7XG4gICAgICBwYXRocy5zcGxpY2UoMCwgMCwge1xuICAgICAgICB0aXRsZTogKHRoaXMuaG9tZUkxOG4gJiYgdGhpcy5pMThuU3J2ICYmIHRoaXMuaTE4blNydi5mYW55aSh0aGlzLmhvbWVJMThuKSkgfHwgdGhpcy5ob21lLFxuICAgICAgICBsaW5rOiBbdGhpcy5ob21lTGlua10sXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5wYXRocyA9IHBhdGhzO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRUaXRsZSgpOiB0aGlzIHtcbiAgICBpZiAodGhpcy5fdGl0bGUgPT0gbnVsbCAmJiB0aGlzLl90aXRsZVRwbCA9PSBudWxsICYmIHRoaXMuYXV0b1RpdGxlICYmIHRoaXMubWVudXMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgaXRlbSA9IHRoaXMubWVudXNbdGhpcy5tZW51cy5sZW5ndGggLSAxXTtcbiAgICAgIGxldCB0aXRsZSA9IGl0ZW0udGV4dDtcbiAgICAgIGlmIChpdGVtLmkxOG4gJiYgdGhpcy5pMThuU3J2KSB7XG4gICAgICAgIHRpdGxlID0gdGhpcy5pMThuU3J2LmZhbnlpKGl0ZW0uaTE4bik7XG4gICAgICB9XG4gICAgICB0aGlzLl90aXRsZVZhbCA9IHRpdGxlITtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fdGl0bGVWYWwgJiYgdGhpcy5zeW5jVGl0bGUpIHtcbiAgICAgIGlmICh0aGlzLnRpdGxlU3J2KSB7XG4gICAgICAgIHRoaXMudGl0bGVTcnYuc2V0VGl0bGUodGhpcy5fdGl0bGVWYWwpO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLmluaXRlZCAmJiB0aGlzLnJldXNlU3J2KSB7XG4gICAgICAgIHRoaXMucmV1c2VTcnYudGl0bGUgPSB0aGlzLl90aXRsZVZhbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNoZWNrQ29udGVudCgpOiB2b2lkIHtcbiAgICBpZiAoaXNFbXB0eSh0aGlzLmNvblRwbC5uYXRpdmVFbGVtZW50KSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5jb25UcGwubmF0aXZlRWxlbWVudCwgJ2hpZGRlbicsICcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUodGhpcy5jb25UcGwubmF0aXZlRWxlbWVudCwgJ2hpZGRlbicpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrQ29udGVudCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW5pdGVkKSB7XG4gICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBjb25zdCB7IHVuc3Vic2NyaWJlJCB9ID0gdGhpcztcbiAgICB1bnN1YnNjcmliZSQubmV4dCgpO1xuICAgIHVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=