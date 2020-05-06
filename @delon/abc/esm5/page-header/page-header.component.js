/**
 * @fileoverview added by tsickle
 * Generated from: page-header.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
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
var PageHeaderComponent = /** @class */ (function () {
    // #endregion
    function PageHeaderComponent(settings, renderer, router, menuSrv, i18nSrv, titleSrv, reuseSrv, cdr, configSrv) {
        var _this = this;
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
        function (w) { return _this.affix && w.type === 'layout' && w.name === 'collapsed'; })))
            .subscribe((/**
         * @return {?}
         */
        function () { return _this.affix.updatePosition((/** @type {?} */ ({}))); }));
        merge(menuSrv.change.pipe(filter((/**
         * @return {?}
         */
        function () { return _this.inited; }))), router.events.pipe(filter((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return e instanceof NavigationEnd; }))), i18nSrv.change)
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((/**
         * @return {?}
         */
        function () { return _this.refresh(); }));
    }
    Object.defineProperty(PageHeaderComponent.prototype, "menus", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this.menuSrv.getPathByUrl(this.router.url, this.recursiveBreadcrumb);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageHeaderComponent.prototype, "title", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value instanceof TemplateRef) {
                this._title = null;
                this._titleTpl = value;
                this._titleVal = '';
            }
            else {
                this._title = value;
                this._titleVal = this._title;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    PageHeaderComponent.prototype.refresh = /**
     * @return {?}
     */
    function () {
        this.setTitle().genBreadcrumb();
        this.cdr.detectChanges();
    };
    /**
     * @private
     * @return {?}
     */
    PageHeaderComponent.prototype.genBreadcrumb = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.breadcrumb || !this.autoBreadcrumb || this.menus.length <= 0) {
            this.paths = [];
            return;
        }
        /** @type {?} */
        var paths = [];
        this.menus.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            if (typeof item.hideInBreadcrumb !== 'undefined' && item.hideInBreadcrumb)
                return;
            /** @type {?} */
            var title = item.text;
            if (item.i18n && _this.i18nSrv)
                title = _this.i18nSrv.fanyi(item.i18n);
            paths.push({ title: title, link: (/** @type {?} */ ((item.link && [item.link]))) });
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
    };
    /**
     * @private
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    PageHeaderComponent.prototype.setTitle = /**
     * @private
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    function () {
        if ((/** @type {?} */ (this))._title == null && (/** @type {?} */ (this))._titleTpl == null && (/** @type {?} */ (this)).autoTitle && (/** @type {?} */ (this)).menus.length > 0) {
            /** @type {?} */
            var item = (/** @type {?} */ (this)).menus[(/** @type {?} */ (this)).menus.length - 1];
            /** @type {?} */
            var title = item.text;
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
    };
    /**
     * @return {?}
     */
    PageHeaderComponent.prototype.checkContent = /**
     * @return {?}
     */
    function () {
        if (isEmpty(this.conTpl.nativeElement)) {
            this.renderer.setAttribute(this.conTpl.nativeElement, 'hidden', '');
        }
        else {
            this.renderer.removeAttribute(this.conTpl.nativeElement, 'hidden');
        }
    };
    /**
     * @return {?}
     */
    PageHeaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.refresh();
        this.inited = true;
    };
    /**
     * @return {?}
     */
    PageHeaderComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.checkContent();
    };
    /**
     * @return {?}
     */
    PageHeaderComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (this.inited)
            this.refresh();
    };
    /**
     * @return {?}
     */
    PageHeaderComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var unsubscribe$ = this.unsubscribe$;
        unsubscribe$.next();
        unsubscribe$.complete();
    };
    PageHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'page-header',
                    exportAs: 'pageHeader',
                    template: "<nz-affix #affix *ngIf=\"fixed; else phTpl\" [nzOffsetTop]=\"fixedOffsetTop\">\n  <ng-template [ngTemplateOutlet]=\"phTpl\"></ng-template>\n</nz-affix>\n<ng-template #phTpl>\n  <div class=\"page-header\">\n    <div [ngClass]=\"{ 'page-header__wide': wide }\">\n      <nz-skeleton [nzLoading]=\"loading\" [nzTitle]=\"false\" [nzActive]=\"true\" [nzParagraph]=\"{ rows: 3 }\" [nzAvatar]=\"{ size: 'large', shape: 'circle' }\">\n        <ng-container *ngIf=\"!breadcrumb; else breadcrumb\">\n          <nz-breadcrumb *ngIf=\"paths && paths.length > 0\">\n            <nz-breadcrumb-item *ngFor=\"let i of paths\">\n              <ng-container *ngIf=\"i.link\">\n                <a [routerLink]=\"i.link\">{{ i.title }}</a>\n              </ng-container>\n              <ng-container *ngIf=\"!i.link\">{{ i.title }}</ng-container>\n            </nz-breadcrumb-item>\n          </nz-breadcrumb>\n        </ng-container>\n        <div class=\"page-header__detail\">\n          <div *ngIf=\"logo\" class=\"page-header__logo\">\n            <ng-template [ngTemplateOutlet]=\"logo\"></ng-template>\n          </div>\n          <div class=\"page-header__main\">\n            <div class=\"page-header__row\">\n              <h1 *ngIf=\"_titleVal || _titleTpl\" class=\"page-header__title\">\n                <ng-container *ngIf=\"_titleVal; else _titleTpl\">{{ _titleVal }}</ng-container>\n              </h1>\n              <div *ngIf=\"action\" class=\"page-header__action\">\n                <ng-template [ngTemplateOutlet]=\"action\"></ng-template>\n              </div>\n            </div>\n            <div class=\"page-header__row\">\n              <div class=\"page-header__desc\" (cdkObserveContent)=\"checkContent()\" #conTpl>\n                <ng-content></ng-content>\n                <ng-template [ngTemplateOutlet]=\"content\"></ng-template>\n              </div>\n              <div *ngIf=\"extra\" class=\"page-header__extra\">\n                <ng-template [ngTemplateOutlet]=\"extra\"></ng-template>\n              </div>\n            </div>\n          </div>\n        </div>\n        <ng-template [ngTemplateOutlet]=\"tab\"></ng-template>\n      </nz-skeleton>\n    </div>\n  </div>\n</ng-template>\n",
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    PageHeaderComponent.ctorParameters = function () { return [
        { type: SettingsService },
        { type: Renderer2 },
        { type: Router },
        { type: MenuService },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [ALAIN_I18N_TOKEN,] }] },
        { type: TitleService, decorators: [{ type: Optional }, { type: Inject, args: [TitleService,] }] },
        { type: ReuseTabService, decorators: [{ type: Optional }, { type: Inject, args: [ReuseTabService,] }] },
        { type: ChangeDetectorRef },
        { type: AlainConfigService }
    ]; };
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
    return PageHeaderComponent;
}());
export { PageHeaderComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9wYWdlLWhlYWRlci8iLCJzb3VyY2VzIjpbInBhZ2UtaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLE1BQU0sRUFDTixLQUFLLEVBSUwsUUFBUSxFQUNSLFNBQVMsRUFDVCxXQUFXLEVBQ1gsU0FBUyxFQUNULGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN2RCxPQUFPLEVBQW9CLGdCQUFnQixFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzlHLE9BQU8sRUFBRSxrQkFBa0IsRUFBeUIsWUFBWSxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUVuRCw2QkFHQzs7O0lBRkMsK0JBQWU7O0lBQ2YsOEJBQWdCOztBQUdsQjtJQXVERSxhQUFhO0lBRWIsNkJBQ0UsUUFBeUIsRUFDakIsUUFBbUIsRUFDbkIsTUFBYyxFQUNkLE9BQW9CLEVBQ2tCLE9BQXlCLEVBQzdCLFFBQXNCLEVBQ25CLFFBQXlCLEVBQzlELEdBQXNCLEVBQzlCLFNBQTZCO1FBVC9CLGlCQStCQztRQTdCUyxhQUFRLEdBQVIs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dEIsd0NBQTZCOztJQWE3QixzQ0FBeUM7O0lBQ3pDLG1DQUFzQzs7SUFDdEMsbUNBQXNCOztJQUN0Qix1Q0FBMEI7O0lBQzFCLHVDQUEwQjs7SUFDMUIsNkNBQWlEOztJQUNqRCx3Q0FBNEM7O0lBQzVDLHdDQUE0Qzs7SUFDNUMsb0NBQXdDOztJQUN4Qyw2Q0FBK0M7O0lBQy9DLHlDQUF1Qzs7SUFDdkMsa0RBQXNEOztJQUN0RCxtQ0FBaUM7O0lBQ2pDLHFDQUFtQzs7SUFDbkMsc0NBQW9DOztJQUNwQyxvQ0FBa0M7O0lBQ2xDLGtDQUFnQzs7Ozs7SUFNOUIsdUNBQTJCOzs7OztJQUMzQixxQ0FBc0I7Ozs7O0lBQ3RCLHNDQUE0Qjs7Ozs7SUFDNUIsc0NBQXVFOzs7OztJQUN2RSx1Q0FBZ0U7Ozs7O0lBQ2hFLHVDQUFzRTs7Ozs7SUFDdEUsa0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdmlnYXRpb25FbmQsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBSZXVzZVRhYlNlcnZpY2UgfSBmcm9tICdAZGVsb24vYWJjL3JldXNlLXRhYic7XG5pbXBvcnQgeyBBbGFpbkkxOE5TZXJ2aWNlLCBBTEFJTl9JMThOX1RPS0VOLCBNZW51U2VydmljZSwgU2V0dGluZ3NTZXJ2aWNlLCBUaXRsZVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlLCBBbGFpblBhZ2VIZWFkZXJDb25maWcsIElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIsIGlzRW1wdHkgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBOekFmZml4Q29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC9hZmZpeCc7XG5pbXBvcnQgeyBtZXJnZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmludGVyZmFjZSBQYWdlSGVhZGVyUGF0aCB7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBsaW5rPzogc3RyaW5nW107XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhZ2UtaGVhZGVyJyxcbiAgZXhwb3J0QXM6ICdwYWdlSGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BhZ2UtaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBQYWdlSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgaW5pdGVkID0gZmFsc2U7XG4gIHByaXZhdGUgdW5zdWJzY3JpYmUkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgQFZpZXdDaGlsZCgnY29uVHBsJywgeyBzdGF0aWM6IGZhbHNlIH0pIHByaXZhdGUgY29uVHBsOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdhZmZpeCcsIHsgc3RhdGljOiBmYWxzZSB9KSBwcml2YXRlIGFmZml4OiBOekFmZml4Q29tcG9uZW50O1xuXG4gIHByaXZhdGUgZ2V0IG1lbnVzKCkge1xuICAgIHJldHVybiB0aGlzLm1lbnVTcnYuZ2V0UGF0aEJ5VXJsKHRoaXMucm91dGVyLnVybCwgdGhpcy5yZWN1cnNpdmVCcmVhZGNydW1iKTtcbiAgfVxuXG4gIF90aXRsZVZhbDogc3RyaW5nID0gJyc7XG4gIHBhdGhzOiBQYWdlSGVhZGVyUGF0aFtdID0gW107XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBfdGl0bGU6IHN0cmluZyB8IG51bGw7XG4gIF90aXRsZVRwbDogVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpXG4gIHNldCB0aXRsZSh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4pIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgdGhpcy5fdGl0bGUgPSBudWxsO1xuICAgICAgdGhpcy5fdGl0bGVUcGwgPSB2YWx1ZTtcbiAgICAgIHRoaXMuX3RpdGxlVmFsID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3RpdGxlID0gdmFsdWU7XG4gICAgICB0aGlzLl90aXRsZVZhbCA9IHRoaXMuX3RpdGxlO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBsb2FkaW5nID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSB3aWRlID0gZmFsc2U7XG4gIEBJbnB1dCgpIGhvbWU6IHN0cmluZztcbiAgQElucHV0KCkgaG9tZUxpbms6IHN0cmluZztcbiAgQElucHV0KCkgaG9tZUkxOG46IHN0cmluZztcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGF1dG9CcmVhZGNydW1iOiBib29sZWFuO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYXV0b1RpdGxlOiBib29sZWFuO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc3luY1RpdGxlOiBib29sZWFuO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZml4ZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGZpeGVkT2Zmc2V0VG9wOiBudW1iZXI7XG4gIEBJbnB1dCgpIGJyZWFkY3J1bWI6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgcmVjdXJzaXZlQnJlYWRjcnVtYjogYm9vbGVhbjtcbiAgQElucHV0KCkgbG9nbzogVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIGFjdGlvbjogVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIGNvbnRlbnQ6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBleHRyYTogVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIHRhYjogVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHNldHRpbmdzOiBTZXR0aW5nc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBtZW51U3J2OiBNZW51U2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KEFMQUlOX0kxOE5fVE9LRU4pIHByaXZhdGUgaTE4blNydjogQWxhaW5JMThOU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KFRpdGxlU2VydmljZSkgcHJpdmF0ZSB0aXRsZVNydjogVGl0bGVTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoUmV1c2VUYWJTZXJ2aWNlKSBwcml2YXRlIHJldXNlU3J2OiBSZXVzZVRhYlNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIGNvbmZpZ1NydjogQWxhaW5Db25maWdTZXJ2aWNlLFxuICApIHtcbiAgICBjb25maWdTcnYuYXR0YWNoPEFsYWluUGFnZUhlYWRlckNvbmZpZywgJ3BhZ2VIZWFkZXInPih0aGlzLCAncGFnZUhlYWRlcicsIHtcbiAgICAgIGhvbWU6ICfpppbpobUnLFxuICAgICAgaG9tZUxpbms6ICcvJyxcbiAgICAgIGF1dG9CcmVhZGNydW1iOiB0cnVlLFxuICAgICAgcmVjdXJzaXZlQnJlYWRjcnVtYjogZmFsc2UsXG4gICAgICBhdXRvVGl0bGU6IHRydWUsXG4gICAgICBzeW5jVGl0bGU6IHRydWUsXG4gICAgICBmaXhlZDogZmFsc2UsXG4gICAgICBmaXhlZE9mZnNldFRvcDogNjQsXG4gICAgfSk7XG4gICAgc2V0dGluZ3Mubm90aWZ5XG4gICAgICAucGlwZShcbiAgICAgICAgdGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSxcbiAgICAgICAgZmlsdGVyKHcgPT4gdGhpcy5hZmZpeCAmJiB3LnR5cGUgPT09ICdsYXlvdXQnICYmIHcubmFtZSA9PT0gJ2NvbGxhcHNlZCcpLFxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmFmZml4LnVwZGF0ZVBvc2l0aW9uKHt9IGFzIGFueSkpO1xuXG4gICAgbWVyZ2UobWVudVNydi5jaGFuZ2UucGlwZShmaWx0ZXIoKCkgPT4gdGhpcy5pbml0ZWQpKSwgcm91dGVyLmV2ZW50cy5waXBlKGZpbHRlcihlID0+IGUgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSksIGkxOG5TcnYuY2hhbmdlKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5yZWZyZXNoKCkpO1xuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLnNldFRpdGxlKCkuZ2VuQnJlYWRjcnVtYigpO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuQnJlYWRjcnVtYigpIHtcbiAgICBpZiAodGhpcy5icmVhZGNydW1iIHx8ICF0aGlzLmF1dG9CcmVhZGNydW1iIHx8IHRoaXMubWVudXMubGVuZ3RoIDw9IDApIHtcbiAgICAgIHRoaXMucGF0aHMgPSBbXTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcGF0aHM6IFBhZ2VIZWFkZXJQYXRoW10gPSBbXTtcbiAgICB0aGlzLm1lbnVzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpZiAodHlwZW9mIGl0ZW0uaGlkZUluQnJlYWRjcnVtYiAhPT0gJ3VuZGVmaW5lZCcgJiYgaXRlbS5oaWRlSW5CcmVhZGNydW1iKSByZXR1cm47XG4gICAgICBsZXQgdGl0bGUgPSBpdGVtLnRleHQ7XG4gICAgICBpZiAoaXRlbS5pMThuICYmIHRoaXMuaTE4blNydikgdGl0bGUgPSB0aGlzLmkxOG5TcnYuZmFueWkoaXRlbS5pMThuKTtcbiAgICAgIHBhdGhzLnB1c2goeyB0aXRsZSwgbGluazogKGl0ZW0ubGluayAmJiBbaXRlbS5saW5rXSkgYXMgc3RyaW5nW10gfSk7XG4gICAgfSk7XG4gICAgLy8gYWRkIGhvbWVcbiAgICBpZiAodGhpcy5ob21lKSB7XG4gICAgICBwYXRocy5zcGxpY2UoMCwgMCwge1xuICAgICAgICB0aXRsZTogKHRoaXMuaG9tZUkxOG4gJiYgdGhpcy5pMThuU3J2ICYmIHRoaXMuaTE4blNydi5mYW55aSh0aGlzLmhvbWVJMThuKSkgfHwgdGhpcy5ob21lLFxuICAgICAgICBsaW5rOiBbdGhpcy5ob21lTGlua10sXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5wYXRocyA9IHBhdGhzO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRUaXRsZSgpIHtcbiAgICBpZiAodGhpcy5fdGl0bGUgPT0gbnVsbCAmJiB0aGlzLl90aXRsZVRwbCA9PSBudWxsICYmIHRoaXMuYXV0b1RpdGxlICYmIHRoaXMubWVudXMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgaXRlbSA9IHRoaXMubWVudXNbdGhpcy5tZW51cy5sZW5ndGggLSAxXTtcbiAgICAgIGxldCB0aXRsZSA9IGl0ZW0udGV4dDtcbiAgICAgIGlmIChpdGVtLmkxOG4gJiYgdGhpcy5pMThuU3J2KSB0aXRsZSA9IHRoaXMuaTE4blNydi5mYW55aShpdGVtLmkxOG4pO1xuICAgICAgdGhpcy5fdGl0bGVWYWwgPSB0aXRsZSE7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3RpdGxlVmFsICYmIHRoaXMuc3luY1RpdGxlKSB7XG4gICAgICBpZiAodGhpcy50aXRsZVNydikge1xuICAgICAgICB0aGlzLnRpdGxlU3J2LnNldFRpdGxlKHRoaXMuX3RpdGxlVmFsKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnJldXNlU3J2KSB7XG4gICAgICAgIHRoaXMucmV1c2VTcnYudGl0bGUgPSB0aGlzLl90aXRsZVZhbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNoZWNrQ29udGVudCgpIHtcbiAgICBpZiAoaXNFbXB0eSh0aGlzLmNvblRwbC5uYXRpdmVFbGVtZW50KSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5jb25UcGwubmF0aXZlRWxlbWVudCwgJ2hpZGRlbicsICcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUodGhpcy5jb25UcGwubmF0aXZlRWxlbWVudCwgJ2hpZGRlbicpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrQ29udGVudCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW5pdGVkKSB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgdW5zdWJzY3JpYmUkIH0gPSB0aGlzO1xuICAgIHVuc3Vic2NyaWJlJC5uZXh0KCk7XG4gICAgdW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==