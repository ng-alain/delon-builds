/**
 * @fileoverview added by tsickle
 * Generated from: page-header.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Inject, Input, Optional, Renderer2, TemplateRef, ViewChild, ViewEncapsulation, } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ReuseTabService } from '@delon/abc/reuse-tab';
import { AlainConfigService, ALAIN_I18N_TOKEN, MenuService, SettingsService, TitleService, } from '@delon/theme';
import { InputBoolean, InputNumber, isEmpty } from '@delon/util';
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
     */
    constructor(settings, renderer, router, menuSrv, i18nSrv, titleSrv, reuseSrv, cdr, configSrv) {
        this.renderer = renderer;
        this.router = router;
        this.menuSrv = menuSrv;
        this.i18nSrv = i18nSrv;
        this.titleSrv = titleSrv;
        this.reuseSrv = reuseSrv;
        this.cdr = cdr;
        this.inited = false;
        this.unsubscribe$ = new Subject();
        this._titleVal = '';
        this.paths = [];
        this.loading = false;
        this.wide = false;
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
         * @param {?} e
         * @return {?}
         */
        e => e instanceof NavigationEnd))), i18nSrv.change)
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this._menus = null;
            this.refresh();
        }));
    }
    /**
     * @private
     * @return {?}
     */
    get menus() {
        if (this._menus) {
            return this._menus;
        }
        this._menus = this.menuSrv.getPathByUrl(this.router.url.split('?')[0], this.recursiveBreadcrumb);
        return this._menus;
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
        return this;
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
            if (item.i18n && (/** @type {?} */ (this)).i18nSrv)
                title = (/** @type {?} */ (this)).i18nSrv.fanyi(item.i18n);
            (/** @type {?} */ (this))._titleVal = (/** @type {?} */ (title));
        }
        if ((/** @type {?} */ (this))._titleVal && (/** @type {?} */ (this)).syncTitle) {
            if ((/** @type {?} */ (this)).titleSrv) {
                (/** @type {?} */ (this)).titleSrv.setTitle((/** @type {?} */ (this))._titleVal);
            }
            if ((/** @type {?} */ (this)).reuseSrv) {
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
        if (this.inited)
            this.refresh();
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
                template: "<nz-affix #affix *ngIf=\"fixed;else phTpl\" [nzOffsetTop]=\"fixedOffsetTop\">\n  <ng-template [ngTemplateOutlet]=\"phTpl\"></ng-template>\n</nz-affix>\n<ng-template #phTpl>\n  <div class=\"page-header\">\n    <div [ngClass]=\"{'page-header__wide': wide}\">\n      <nz-skeleton [nzLoading]=\"loading\"\n                   [nzTitle]=\"false\"\n                   [nzActive]=\"true\"\n                   [nzParagraph]=\"{rows: 3}\"\n                   [nzAvatar]=\"{ size: 'large', shape: 'circle' }\">\n        <ng-container *ngIf=\"!breadcrumb; else breadcrumb\">\n          <nz-breadcrumb *ngIf=\"paths && paths.length > 0\">\n            <nz-breadcrumb-item *ngFor=\"let i of paths\">\n              <ng-container *ngIf=\"i.link\">\n                <a [routerLink]=\"i.link\">{{i.title}}</a>\n              </ng-container>\n              <ng-container *ngIf=\"!i.link\">{{i.title}}</ng-container>\n            </nz-breadcrumb-item>\n          </nz-breadcrumb>\n        </ng-container>\n        <div class=\"page-header__detail\">\n          <div *ngIf=\"logo\" class=\"page-header__logo\">\n            <ng-template [ngTemplateOutlet]=\"logo\"></ng-template>\n          </div>\n          <div class=\"page-header__main\">\n            <div class=\"page-header__row\">\n              <h1 *ngIf=\"_titleVal || _titleTpl\" class=\"page-header__title\">\n                <ng-container *ngIf=\"_titleVal; else _titleTpl\">{{_titleVal}}</ng-container>\n              </h1>\n              <div *ngIf=\"action\" class=\"page-header__action\">\n                <ng-template [ngTemplateOutlet]=\"action\"></ng-template>\n              </div>\n            </div>\n            <div class=\"page-header__row\">\n              <div class=\"page-header__desc\" (cdkObserveContent)=\"checkContent()\" #conTpl>\n                <ng-content></ng-content>\n                <ng-template [ngTemplateOutlet]=\"content\"></ng-template>\n              </div>\n              <div *ngIf=\"extra\" class=\"page-header__extra\">\n                <ng-template [ngTemplateOutlet]=\"extra\"></ng-template>\n              </div>\n            </div>\n          </div>\n        </div>\n        <ng-template [ngTemplateOutlet]=\"tab\"></ng-template>\n      </nz-skeleton>\n    </div>\n  </div>\n</ng-template>\n",
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
    { type: AlainConfigService }
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
    /**
     * @type {?}
     * @private
     */
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
    /**
     * @type {?}
     * @private
     */
    PageHeaderComponent.prototype._menus;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9wYWdlLWhlYWRlci8iLCJzb3VyY2VzIjpbInBhZ2UtaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLE1BQU0sRUFDTixLQUFLLEVBSUwsUUFBUSxFQUNSLFNBQVMsRUFDVCxXQUFXLEVBQ1gsU0FBUyxFQUNULGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN2RCxPQUFPLEVBQ0wsa0JBQWtCLEVBR2xCLGdCQUFnQixFQUVoQixXQUFXLEVBQ1gsZUFBZSxFQUNmLFlBQVksR0FDYixNQUFNLGNBQWMsQ0FBQztBQUN0QixPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDakUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUVuRCw2QkFHQzs7O0lBRkMsK0JBQWU7O0lBQ2YsOEJBQWdCOztBQVdsQixNQUFNLE9BQU8sbUJBQW1COzs7Ozs7Ozs7Ozs7O0lBdUQ5QixZQUNFLFFBQXlCLEVBQ2pCLFFBQW1CLEVBQ25CLE1BQWMsRUFDZCxPQUFvQixFQUNrQixPQUF5QixFQUM3QixRQUFzQixFQUNuQixRQUF5QixFQUM5RCxHQUFzQixFQUM5QixTQUE2QjtRQVByQixhQUFR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QUN2QixvQ0FBNkI7O0lBSTdCLHFDQUFzQjs7SUFDdEIsd0NBQTZCOztJQWE3QixzQ0FBeUM7O0lBQ3pDLG1DQUFzQzs7SUFDdEMsbUNBQXNCOztJQUN0Qix1Q0FBMEI7O0lBQzFCLHVDQUEwQjs7SUFDMUIsNkNBQWlEOztJQUNqRCx3Q0FBNEM7O0lBQzVDLHdDQUE0Qzs7SUFDNUMsb0NBQXdDOztJQUN4Qyw2Q0FBK0M7O0lBQy9DLHlDQUF1Qzs7SUFDdkMsa0RBQXNEOztJQUN0RCxtQ0FBaUM7O0lBQ2pDLHFDQUFtQzs7SUFDbkMsc0NBQW9DOztJQUNwQyxvQ0FBa0M7O0lBQ2xDLGtDQUFnQzs7Ozs7SUFNOUIsdUNBQTJCOzs7OztJQUMzQixxQ0FBc0I7Ozs7O0lBQ3RCLHNDQUE0Qjs7Ozs7SUFDNUIsc0NBQXVFOzs7OztJQUN2RSx1Q0FBZ0U7Ozs7O0lBQ2hFLHVDQUFzRTs7Ozs7SUFDdEUsa0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdmlnYXRpb25FbmQsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBSZXVzZVRhYlNlcnZpY2UgfSBmcm9tICdAZGVsb24vYWJjL3JldXNlLXRhYic7XG5pbXBvcnQge1xuICBBbGFpbkNvbmZpZ1NlcnZpY2UsXG4gIEFsYWluSTE4TlNlcnZpY2UsXG4gIEFsYWluUGFnZUhlYWRlckNvbmZpZyxcbiAgQUxBSU5fSTE4Tl9UT0tFTixcbiAgTWVudSxcbiAgTWVudVNlcnZpY2UsXG4gIFNldHRpbmdzU2VydmljZSxcbiAgVGl0bGVTZXJ2aWNlLFxufSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciwgaXNFbXB0eSB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IE56QWZmaXhDb21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL2FmZml4JztcbmltcG9ydCB7IG1lcmdlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW50ZXJmYWNlIFBhZ2VIZWFkZXJQYXRoIHtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIGxpbms/OiBzdHJpbmdbXTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFnZS1oZWFkZXInLFxuICBleHBvcnRBczogJ3BhZ2VIZWFkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vcGFnZS1oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2VIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBpbml0ZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBAVmlld0NoaWxkKCdjb25UcGwnLCB7IHN0YXRpYzogZmFsc2UgfSkgcHJpdmF0ZSBjb25UcGw6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2FmZml4JywgeyBzdGF0aWM6IGZhbHNlIH0pIHByaXZhdGUgYWZmaXg6IE56QWZmaXhDb21wb25lbnQ7XG4gIHByaXZhdGUgX21lbnVzOiBNZW51W10gfCBudWxsO1xuXG4gIHByaXZhdGUgZ2V0IG1lbnVzKCkge1xuICAgIGlmICh0aGlzLl9tZW51cykge1xuICAgICAgcmV0dXJuIHRoaXMuX21lbnVzO1xuICAgIH1cbiAgICB0aGlzLl9tZW51cyA9IHRoaXMubWVudVNydi5nZXRQYXRoQnlVcmwodGhpcy5yb3V0ZXIudXJsLnNwbGl0KCc/JylbMF0sIHRoaXMucmVjdXJzaXZlQnJlYWRjcnVtYik7XG5cbiAgICByZXR1cm4gdGhpcy5fbWVudXM7XG4gIH1cblxuICBfdGl0bGVWYWw6IHN0cmluZyA9ICcnO1xuICBwYXRoczogUGFnZUhlYWRlclBhdGhbXSA9IFtdO1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgX3RpdGxlOiBzdHJpbmcgfCBudWxsO1xuICBfdGl0bGVUcGw6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKVxuICBzZXQgdGl0bGUodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+KSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIHRoaXMuX3RpdGxlID0gbnVsbDtcbiAgICAgIHRoaXMuX3RpdGxlVHBsID0gdmFsdWU7XG4gICAgICB0aGlzLl90aXRsZVZhbCA9ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl90aXRsZSA9IHZhbHVlO1xuICAgICAgdGhpcy5fdGl0bGVWYWwgPSB0aGlzLl90aXRsZTtcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbG9hZGluZyA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgd2lkZSA9IGZhbHNlO1xuICBASW5wdXQoKSBob21lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGhvbWVMaW5rOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGhvbWVJMThuOiBzdHJpbmc7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBhdXRvQnJlYWRjcnVtYjogYm9vbGVhbjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGF1dG9UaXRsZTogYm9vbGVhbjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHN5bmNUaXRsZTogYm9vbGVhbjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGZpeGVkOiBib29sZWFuO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBmaXhlZE9mZnNldFRvcDogbnVtYmVyO1xuICBASW5wdXQoKSBicmVhZGNydW1iOiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHJlY3Vyc2l2ZUJyZWFkY3J1bWI6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGxvZ286IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBhY3Rpb246IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBjb250ZW50OiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgZXh0cmE6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSB0YWI6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3RvcihcbiAgICBzZXR0aW5nczogU2V0dGluZ3NTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgbWVudVNydjogTWVudVNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChBTEFJTl9JMThOX1RPS0VOKSBwcml2YXRlIGkxOG5TcnY6IEFsYWluSTE4TlNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChUaXRsZVNlcnZpY2UpIHByaXZhdGUgdGl0bGVTcnY6IFRpdGxlU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KFJldXNlVGFiU2VydmljZSkgcHJpdmF0ZSByZXVzZVNydjogUmV1c2VUYWJTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBjb25maWdTcnY6IEFsYWluQ29uZmlnU2VydmljZSxcbiAgKSB7XG4gICAgY29uZmlnU3J2LmF0dGFjaDxBbGFpblBhZ2VIZWFkZXJDb25maWcsICdwYWdlSGVhZGVyJz4odGhpcywgJ3BhZ2VIZWFkZXInLCB7XG4gICAgICBob21lOiAn6aaW6aG1JyxcbiAgICAgIGhvbWVMaW5rOiAnLycsXG4gICAgICBhdXRvQnJlYWRjcnVtYjogdHJ1ZSxcbiAgICAgIHJlY3Vyc2l2ZUJyZWFkY3J1bWI6IGZhbHNlLFxuICAgICAgYXV0b1RpdGxlOiB0cnVlLFxuICAgICAgc3luY1RpdGxlOiB0cnVlLFxuICAgICAgZml4ZWQ6IGZhbHNlLFxuICAgICAgZml4ZWRPZmZzZXRUb3A6IDY0LFxuICAgIH0pO1xuICAgIHNldHRpbmdzLm5vdGlmeVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCksXG4gICAgICAgIGZpbHRlcih3ID0+IHRoaXMuYWZmaXggJiYgdy50eXBlID09PSAnbGF5b3V0JyAmJiB3Lm5hbWUgPT09ICdjb2xsYXBzZWQnKSxcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5hZmZpeC51cGRhdGVQb3NpdGlvbih7fSBhcyBhbnkpKTtcblxuICAgIG1lcmdlKG1lbnVTcnYuY2hhbmdlLnBpcGUoZmlsdGVyKCgpID0+IHRoaXMuaW5pdGVkKSksIHJvdXRlci5ldmVudHMucGlwZShmaWx0ZXIoZSA9PiBlIGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCkpLCBpMThuU3J2LmNoYW5nZSlcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5fbWVudXMgPSBudWxsO1xuICAgICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLnNldFRpdGxlKCkuZ2VuQnJlYWRjcnVtYigpO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuQnJlYWRjcnVtYigpIHtcbiAgICBpZiAodGhpcy5icmVhZGNydW1iIHx8ICF0aGlzLmF1dG9CcmVhZGNydW1iIHx8IHRoaXMubWVudXMubGVuZ3RoIDw9IDApIHtcbiAgICAgIHRoaXMucGF0aHMgPSBbXTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcGF0aHM6IFBhZ2VIZWFkZXJQYXRoW10gPSBbXTtcbiAgICB0aGlzLm1lbnVzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpZiAodHlwZW9mIGl0ZW0uaGlkZUluQnJlYWRjcnVtYiAhPT0gJ3VuZGVmaW5lZCcgJiYgaXRlbS5oaWRlSW5CcmVhZGNydW1iKSByZXR1cm47XG4gICAgICBsZXQgdGl0bGUgPSBpdGVtLnRleHQ7XG4gICAgICBpZiAoaXRlbS5pMThuICYmIHRoaXMuaTE4blNydikgdGl0bGUgPSB0aGlzLmkxOG5TcnYuZmFueWkoaXRlbS5pMThuKTtcbiAgICAgIHBhdGhzLnB1c2goeyB0aXRsZSwgbGluazogKGl0ZW0ubGluayAmJiBbaXRlbS5saW5rXSkgYXMgc3RyaW5nW10gfSk7XG4gICAgfSk7XG4gICAgLy8gYWRkIGhvbWVcbiAgICBpZiAodGhpcy5ob21lKSB7XG4gICAgICBwYXRocy5zcGxpY2UoMCwgMCwge1xuICAgICAgICB0aXRsZTogKHRoaXMuaG9tZUkxOG4gJiYgdGhpcy5pMThuU3J2ICYmIHRoaXMuaTE4blNydi5mYW55aSh0aGlzLmhvbWVJMThuKSkgfHwgdGhpcy5ob21lLFxuICAgICAgICBsaW5rOiBbdGhpcy5ob21lTGlua10sXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5wYXRocyA9IHBhdGhzO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRUaXRsZSgpIHtcbiAgICBpZiAodGhpcy5fdGl0bGUgPT0gbnVsbCAmJiB0aGlzLl90aXRsZVRwbCA9PSBudWxsICYmIHRoaXMuYXV0b1RpdGxlICYmIHRoaXMubWVudXMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgaXRlbSA9IHRoaXMubWVudXNbdGhpcy5tZW51cy5sZW5ndGggLSAxXTtcbiAgICAgIGxldCB0aXRsZSA9IGl0ZW0udGV4dDtcbiAgICAgIGlmIChpdGVtLmkxOG4gJiYgdGhpcy5pMThuU3J2KSB0aXRsZSA9IHRoaXMuaTE4blNydi5mYW55aShpdGVtLmkxOG4pO1xuICAgICAgdGhpcy5fdGl0bGVWYWwgPSB0aXRsZSE7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3RpdGxlVmFsICYmIHRoaXMuc3luY1RpdGxlKSB7XG4gICAgICBpZiAodGhpcy50aXRsZVNydikge1xuICAgICAgICB0aGlzLnRpdGxlU3J2LnNldFRpdGxlKHRoaXMuX3RpdGxlVmFsKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnJldXNlU3J2KSB7XG4gICAgICAgIHRoaXMucmV1c2VTcnYudGl0bGUgPSB0aGlzLl90aXRsZVZhbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNoZWNrQ29udGVudCgpIHtcbiAgICBpZiAoaXNFbXB0eSh0aGlzLmNvblRwbC5uYXRpdmVFbGVtZW50KSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5jb25UcGwubmF0aXZlRWxlbWVudCwgJ2hpZGRlbicsICcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUodGhpcy5jb25UcGwubmF0aXZlRWxlbWVudCwgJ2hpZGRlbicpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrQ29udGVudCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW5pdGVkKSB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgdW5zdWJzY3JpYmUkIH0gPSB0aGlzO1xuICAgIHVuc3Vic2NyaWJlJC5uZXh0KCk7XG4gICAgdW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==