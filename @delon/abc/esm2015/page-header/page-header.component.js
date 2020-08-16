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
    PageHeaderComponent.ngAcceptInputType_loading;
    /** @type {?} */
    PageHeaderComponent.ngAcceptInputType_wide;
    /** @type {?} */
    PageHeaderComponent.ngAcceptInputType_autoBreadcrumb;
    /** @type {?} */
    PageHeaderComponent.ngAcceptInputType_autoTitle;
    /** @type {?} */
    PageHeaderComponent.ngAcceptInputType_syncTitle;
    /** @type {?} */
    PageHeaderComponent.ngAcceptInputType_fixed;
    /** @type {?} */
    PageHeaderComponent.ngAcceptInputType_fixedOffsetTop;
    /** @type {?} */
    PageHeaderComponent.ngAcceptInputType_recursiveBreadcrumb;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3BhZ2UtaGVhZGVyL3BhZ2UtaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixNQUFNLEVBQ04sS0FBSyxFQUlMLFFBQVEsRUFDUixTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdkQsT0FBTyxFQUFvQixnQkFBZ0IsRUFBUSxXQUFXLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNwSCxPQUFPLEVBQUUsa0JBQWtCLEVBQWdCLFlBQVksRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFlLE1BQU0sYUFBYSxDQUFDO0FBQ2hILE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFFbkQsNkJBR0M7OztJQUZDLCtCQUFlOztJQUNmLDhCQUFnQjs7QUFXbEIsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7Ozs7Ozs7Ozs7SUEyRDlCLFlBQ0UsUUFBeUIsRUFDakIsUUFBbUIsRUFDbkIsTUFBYyxFQUNkLE9BQW9CLEVBQ2tCLE9BQXlCLEVB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M0QscUNBQWU7Ozs7O0lBQ2YsMkNBQTJDOzs7OztJQUMzQyxxQ0FBbUU7Ozs7O0lBQ25FLG9DQUF1RTs7SUFDdkUsd0NBQWlCOztJQU1qQix3Q0FBdUI7O0lBQ3ZCLG9DQUE2Qjs7SUFJN0IscUNBQXNCOztJQUN0Qix3Q0FBNkI7O0lBYTdCLHNDQUF5Qzs7SUFDekMsbUNBQXNDOztJQUN0QyxtQ0FBc0I7O0lBQ3RCLHVDQUEwQjs7SUFDMUIsdUNBQTBCOztJQUMxQiw2Q0FBaUQ7O0lBQ2pELHdDQUE0Qzs7SUFDNUMsd0NBQTRDOztJQUM1QyxvQ0FBd0M7O0lBQ3hDLDZDQUErQzs7SUFDL0MseUNBQXVDOztJQUN2QyxrREFBc0Q7O0lBQ3RELG1DQUFpQzs7SUFDakMscUNBQW1DOztJQUNuQyxzQ0FBb0M7O0lBQ3BDLG9DQUFrQzs7SUFDbEMsa0NBQWdDOzs7OztJQU05Qix1Q0FBMkI7Ozs7O0lBQzNCLHFDQUFzQjs7Ozs7SUFDdEIsc0NBQTRCOzs7OztJQUM1QixzQ0FBdUU7Ozs7O0lBQ3ZFLHVDQUFnRTs7Ozs7SUFDaEUsdUNBQXNFOzs7OztJQUN0RSxrQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkVuZCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJldXNlVGFiU2VydmljZSB9IGZyb20gJ0BkZWxvbi9hYmMvcmV1c2UtdGFiJztcbmltcG9ydCB7IEFsYWluSTE4TlNlcnZpY2UsIEFMQUlOX0kxOE5fVE9LRU4sIE1lbnUsIE1lbnVTZXJ2aWNlLCBTZXR0aW5nc1NlcnZpY2UsIFRpdGxlU2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UsIEJvb2xlYW5JbnB1dCwgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciwgaXNFbXB0eSwgTnVtYmVySW5wdXQgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBOekFmZml4Q29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC9hZmZpeCc7XG5pbXBvcnQgeyBtZXJnZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmludGVyZmFjZSBQYWdlSGVhZGVyUGF0aCB7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBsaW5rPzogc3RyaW5nW107XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhZ2UtaGVhZGVyJyxcbiAgZXhwb3J0QXM6ICdwYWdlSGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BhZ2UtaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBQYWdlSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9sb2FkaW5nOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV93aWRlOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9hdXRvQnJlYWRjcnVtYjogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYXV0b1RpdGxlOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zeW5jVGl0bGU6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2ZpeGVkOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9maXhlZE9mZnNldFRvcDogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9yZWN1cnNpdmVCcmVhZGNydW1iOiBCb29sZWFuSW5wdXQ7XG5cbiAgaW5pdGVkID0gZmFsc2U7XG4gIHByaXZhdGUgdW5zdWJzY3JpYmUkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgQFZpZXdDaGlsZCgnY29uVHBsJywgeyBzdGF0aWM6IGZhbHNlIH0pIHByaXZhdGUgY29uVHBsOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdhZmZpeCcsIHsgc3RhdGljOiBmYWxzZSB9KSBwcml2YXRlIGFmZml4OiBOekFmZml4Q29tcG9uZW50O1xuICBpc0Jyb3dzZXIgPSB0cnVlO1xuXG4gIHByaXZhdGUgZ2V0IG1lbnVzKCk6IE1lbnVbXSB7XG4gICAgcmV0dXJuIHRoaXMubWVudVNydi5nZXRQYXRoQnlVcmwodGhpcy5yb3V0ZXIudXJsLCB0aGlzLnJlY3Vyc2l2ZUJyZWFkY3J1bWIpO1xuICB9XG5cbiAgX3RpdGxlVmFsOiBzdHJpbmcgPSAnJztcbiAgcGF0aHM6IFBhZ2VIZWFkZXJQYXRoW10gPSBbXTtcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIF90aXRsZTogc3RyaW5nIHwgbnVsbDtcbiAgX3RpdGxlVHBsOiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KClcbiAgc2V0IHRpdGxlKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPikge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLl90aXRsZSA9IG51bGw7XG4gICAgICB0aGlzLl90aXRsZVRwbCA9IHZhbHVlO1xuICAgICAgdGhpcy5fdGl0bGVWYWwgPSAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdGl0bGUgPSB2YWx1ZTtcbiAgICAgIHRoaXMuX3RpdGxlVmFsID0gdGhpcy5fdGl0bGU7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGxvYWRpbmcgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHdpZGUgPSBmYWxzZTtcbiAgQElucHV0KCkgaG9tZTogc3RyaW5nO1xuICBASW5wdXQoKSBob21lTGluazogc3RyaW5nO1xuICBASW5wdXQoKSBob21lSTE4bjogc3RyaW5nO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYXV0b0JyZWFkY3J1bWI6IGJvb2xlYW47XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBhdXRvVGl0bGU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzeW5jVGl0bGU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBmaXhlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgZml4ZWRPZmZzZXRUb3A6IG51bWJlcjtcbiAgQElucHV0KCkgYnJlYWRjcnVtYjogVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSByZWN1cnNpdmVCcmVhZGNydW1iOiBib29sZWFuO1xuICBASW5wdXQoKSBsb2dvOiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgYWN0aW9uOiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgY29udGVudDogVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIGV4dHJhOiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgdGFiOiBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgY29uc3RydWN0b3IoXG4gICAgc2V0dGluZ3M6IFNldHRpbmdzU2VydmljZSxcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIG1lbnVTcnY6IE1lbnVTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoQUxBSU5fSTE4Tl9UT0tFTikgcHJpdmF0ZSBpMThuU3J2OiBBbGFpbkkxOE5TZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoVGl0bGVTZXJ2aWNlKSBwcml2YXRlIHRpdGxlU3J2OiBUaXRsZVNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChSZXVzZVRhYlNlcnZpY2UpIHByaXZhdGUgcmV1c2VTcnY6IFJldXNlVGFiU2VydmljZSxcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgY29uZmlnU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UsXG4gICAgcGxhdGZvcm06IFBsYXRmb3JtLFxuICApIHtcbiAgICB0aGlzLmlzQnJvd3NlciA9IHBsYXRmb3JtLmlzQnJvd3NlcjtcbiAgICBjb25maWdTcnYuYXR0YWNoKHRoaXMsICdwYWdlSGVhZGVyJywge1xuICAgICAgaG9tZTogJ+mmlumhtScsXG4gICAgICBob21lTGluazogJy8nLFxuICAgICAgYXV0b0JyZWFkY3J1bWI6IHRydWUsXG4gICAgICByZWN1cnNpdmVCcmVhZGNydW1iOiBmYWxzZSxcbiAgICAgIGF1dG9UaXRsZTogdHJ1ZSxcbiAgICAgIHN5bmNUaXRsZTogdHJ1ZSxcbiAgICAgIGZpeGVkOiBmYWxzZSxcbiAgICAgIGZpeGVkT2Zmc2V0VG9wOiA2NCxcbiAgICB9KTtcbiAgICBzZXR0aW5ncy5ub3RpZnlcbiAgICAgIC5waXBlKFxuICAgICAgICB0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpLFxuICAgICAgICBmaWx0ZXIodyA9PiB0aGlzLmFmZml4ICYmIHcudHlwZSA9PT0gJ2xheW91dCcgJiYgdy5uYW1lID09PSAnY29sbGFwc2VkJyksXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuYWZmaXgudXBkYXRlUG9zaXRpb24oe30gYXMgYW55KSk7XG5cbiAgICBtZXJnZShtZW51U3J2LmNoYW5nZS5waXBlKGZpbHRlcigoKSA9PiB0aGlzLmluaXRlZCkpLCByb3V0ZXIuZXZlbnRzLnBpcGUoZmlsdGVyKGV2ID0+IGV2IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCkpLCBpMThuU3J2LmNoYW5nZSlcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMucmVmcmVzaCgpKTtcbiAgfVxuXG4gIHJlZnJlc2goKTogdm9pZCB7XG4gICAgdGhpcy5zZXRUaXRsZSgpLmdlbkJyZWFkY3J1bWIoKTtcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBwcml2YXRlIGdlbkJyZWFkY3J1bWIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYnJlYWRjcnVtYiB8fCAhdGhpcy5hdXRvQnJlYWRjcnVtYiB8fCB0aGlzLm1lbnVzLmxlbmd0aCA8PSAwKSB7XG4gICAgICB0aGlzLnBhdGhzID0gW107XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHBhdGhzOiBQYWdlSGVhZGVyUGF0aFtdID0gW107XG4gICAgdGhpcy5tZW51cy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaWYgKHR5cGVvZiBpdGVtLmhpZGVJbkJyZWFkY3J1bWIgIT09ICd1bmRlZmluZWQnICYmIGl0ZW0uaGlkZUluQnJlYWRjcnVtYikgcmV0dXJuO1xuICAgICAgbGV0IHRpdGxlID0gaXRlbS50ZXh0O1xuICAgICAgaWYgKGl0ZW0uaTE4biAmJiB0aGlzLmkxOG5TcnYpIHRpdGxlID0gdGhpcy5pMThuU3J2LmZhbnlpKGl0ZW0uaTE4bik7XG4gICAgICBwYXRocy5wdXNoKHsgdGl0bGUsIGxpbms6IChpdGVtLmxpbmsgJiYgW2l0ZW0ubGlua10pIGFzIHN0cmluZ1tdIH0pO1xuICAgIH0pO1xuICAgIC8vIGFkZCBob21lXG4gICAgaWYgKHRoaXMuaG9tZSkge1xuICAgICAgcGF0aHMuc3BsaWNlKDAsIDAsIHtcbiAgICAgICAgdGl0bGU6ICh0aGlzLmhvbWVJMThuICYmIHRoaXMuaTE4blNydiAmJiB0aGlzLmkxOG5TcnYuZmFueWkodGhpcy5ob21lSTE4bikpIHx8IHRoaXMuaG9tZSxcbiAgICAgICAgbGluazogW3RoaXMuaG9tZUxpbmtdLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMucGF0aHMgPSBwYXRocztcbiAgfVxuXG4gIHByaXZhdGUgc2V0VGl0bGUoKTogdGhpcyB7XG4gICAgaWYgKHRoaXMuX3RpdGxlID09IG51bGwgJiYgdGhpcy5fdGl0bGVUcGwgPT0gbnVsbCAmJiB0aGlzLmF1dG9UaXRsZSAmJiB0aGlzLm1lbnVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLm1lbnVzW3RoaXMubWVudXMubGVuZ3RoIC0gMV07XG4gICAgICBsZXQgdGl0bGUgPSBpdGVtLnRleHQ7XG4gICAgICBpZiAoaXRlbS5pMThuICYmIHRoaXMuaTE4blNydikge1xuICAgICAgICB0aXRsZSA9IHRoaXMuaTE4blNydi5mYW55aShpdGVtLmkxOG4pO1xuICAgICAgfVxuICAgICAgdGhpcy5fdGl0bGVWYWwgPSB0aXRsZSE7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3RpdGxlVmFsICYmIHRoaXMuc3luY1RpdGxlKSB7XG4gICAgICBpZiAodGhpcy50aXRsZVNydikge1xuICAgICAgICB0aGlzLnRpdGxlU3J2LnNldFRpdGxlKHRoaXMuX3RpdGxlVmFsKTtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5pbml0ZWQgJiYgdGhpcy5yZXVzZVNydikge1xuICAgICAgICB0aGlzLnJldXNlU3J2LnRpdGxlID0gdGhpcy5fdGl0bGVWYWw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjaGVja0NvbnRlbnQoKTogdm9pZCB7XG4gICAgaWYgKGlzRW1wdHkodGhpcy5jb25UcGwubmF0aXZlRWxlbWVudCkpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuY29uVHBsLm5hdGl2ZUVsZW1lbnQsICdoaWRkZW4nLCAnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKHRoaXMuY29uVHBsLm5hdGl2ZUVsZW1lbnQsICdoaWRkZW4nKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgICB0aGlzLmluaXRlZCA9IHRydWU7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja0NvbnRlbnQoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmluaXRlZCkge1xuICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgY29uc3QgeyB1bnN1YnNjcmliZSQgfSA9IHRoaXM7XG4gICAgdW5zdWJzY3JpYmUkLm5leHQoKTtcbiAgICB1bnN1YnNjcmliZSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19