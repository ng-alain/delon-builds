/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, TemplateRef, Inject, Optional, ViewChild, ElementRef, Renderer2, ChangeDetectionStrategy, ChangeDetectorRef, } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NzAffixComponent } from 'ng-zorro-antd';
import { merge } from 'rxjs';
import { filter } from 'rxjs/operators';
import { isEmpty, InputBoolean, InputNumber } from '@delon/util';
import { MenuService, ALAIN_I18N_TOKEN, TitleService, SettingsService, } from '@delon/theme';
import { ReuseTabService } from '@delon/abc/reuse-tab';
import { PageHeaderConfig } from './page-header.config';
var PageHeaderComponent = /** @class */ (function () {
    // #endregion
    function PageHeaderComponent(cog, settings, renderer, router, menuSrv, i18nSrv, titleSrv, reuseSrv, cdr) {
        var _this = this;
        this.renderer = renderer;
        this.router = router;
        this.menuSrv = menuSrv;
        this.i18nSrv = i18nSrv;
        this.titleSrv = titleSrv;
        this.reuseSrv = reuseSrv;
        this.cdr = cdr;
        this.inited = false;
        this.loading = false;
        this.wide = false;
        this.paths = [];
        Object.assign(this, cog);
        this.set$ = settings.notify
            .pipe(filter(function (w) { return _this.affix && w.type === 'layout' && w.name === 'collapsed'; }))
            .subscribe(function () { return _this.affix.updatePosition({}); });
        /** @type {?} */
        var data$ = [
            this.router.events.pipe(filter(function (event) { return event instanceof NavigationEnd; })),
        ];
        if (this.i18nSrv) {
            data$.push(this.i18nSrv.change);
        }
        this.ref$ = merge.apply(void 0, tslib_1.__spread(data$)).subscribe(function () {
            _this._menus = null;
            _this.refresh();
        });
    }
    Object.defineProperty(PageHeaderComponent.prototype, "menus", {
        get: /**
         * @return {?}
         */
        function () {
            if (this._menus) {
                return this._menus;
            }
            this._menus = this.menuSrv.getPathByUrl(this.router.url.split('?')[0], this.recursiveBreadcrumb);
            return this._menus;
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
            }
            else {
                this._title = value;
            }
            this._titleVal = this._title;
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
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    PageHeaderComponent.prototype.genBreadcrumb = /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    function () {
        var _this = this;
        if ((/** @type {?} */ (this)).breadcrumb || !(/** @type {?} */ (this)).autoBreadcrumb || (/** @type {?} */ (this)).menus.length <= 0) {
            (/** @type {?} */ (this)).paths = [];
            return;
        }
        /** @type {?} */
        var paths = [];
        (/** @type {?} */ (this)).menus.forEach(function (item) {
            if (typeof item.hideInBreadcrumb !== 'undefined' && item.hideInBreadcrumb)
                return;
            /** @type {?} */
            var title = item.text;
            if (item.i18n && (/** @type {?} */ (_this)).i18nSrv)
                title = (/** @type {?} */ (_this)).i18nSrv.fanyi(item.i18n);
            paths.push({ title: title, link: item.link && [item.link] });
        });
        // add home
        if ((/** @type {?} */ (this)).home) {
            paths.splice(0, 0, {
                title: ((/** @type {?} */ (this)).homeI18n &&
                    (/** @type {?} */ (this)).i18nSrv &&
                    (/** @type {?} */ (this)).i18nSrv.fanyi((/** @type {?} */ (this)).homeI18n)) ||
                    (/** @type {?} */ (this)).home,
                link: [(/** @type {?} */ (this)).homeLink],
            });
        }
        (/** @type {?} */ (this)).paths = paths;
        return (/** @type {?} */ (this));
    };
    /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    PageHeaderComponent.prototype.setTitle = /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    function () {
        if (typeof (/** @type {?} */ (this))._title === 'undefined' &&
            typeof (/** @type {?} */ (this))._titleTpl === 'undefined' &&
            (/** @type {?} */ (this)).autoTitle &&
            (/** @type {?} */ (this)).menus.length > 0) {
            /** @type {?} */
            var item = (/** @type {?} */ (this)).menus[(/** @type {?} */ (this)).menus.length - 1];
            /** @type {?} */
            var title = item.text;
            if (item.i18n && (/** @type {?} */ (this)).i18nSrv)
                title = (/** @type {?} */ (this)).i18nSrv.fanyi(item.i18n);
            (/** @type {?} */ (this))._titleVal = title;
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
        this.set$.unsubscribe();
        this.ref$.unsubscribe();
    };
    PageHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'page-header',
                    template: "<nz-affix #affix *ngIf=\"fixed;else phTpl\" [nzOffsetTop]=\"fixedOffsetTop\">\n  <ng-template [ngTemplateOutlet]=\"phTpl\"></ng-template>\n</nz-affix>\n<ng-template #phTpl>\n  <div class=\"page-header\">\n    <div [ngClass]=\"{'page-header__wide': wide}\">\n      <nz-skeleton [nzLoading]=\"loading\" [nzTitle]=\"false\" [nzActive]=\"true\"\n        [nzParagraph]=\"{rows: 3}\" [nzAvatar]=\"{ size: 'large', shape: 'circle' }\">\n        <ng-container *ngIf=\"!breadcrumb; else breadcrumb\">\n          <nz-breadcrumb *ngIf=\"paths && paths.length > 0\">\n            <nz-breadcrumb-item *ngFor=\"let i of paths\">\n              <ng-container *ngIf=\"i.link\">\n                <a [routerLink]=\"i.link\">{{i.title}}</a>\n              </ng-container>\n              <ng-container *ngIf=\"!i.link\">{{i.title}}</ng-container>\n            </nz-breadcrumb-item>\n          </nz-breadcrumb>\n        </ng-container>\n        <div class=\"page-header__detail\">\n          <div *ngIf=\"logo\" class=\"page-header__logo\">\n            <ng-template [ngTemplateOutlet]=\"logo\"></ng-template>\n          </div>\n          <div class=\"page-header__main\">\n            <div class=\"page-header__row\">\n              <h1 *ngIf=\"_titleVal || _titleTpl\" class=\"page-header__title\">\n                <ng-container *ngIf=\"_titleVal; else _titleTpl\">{{_titleVal}}</ng-container>\n              </h1>\n              <div *ngIf=\"action\" class=\"page-header__action\">\n                <ng-template [ngTemplateOutlet]=\"action\"></ng-template>\n              </div>\n            </div>\n            <div class=\"page-header__row\">\n              <div class=\"page-header__desc\" (cdkObserveContent)=\"checkContent()\" #conTpl>\n                <ng-content></ng-content>\n                <ng-template [ngTemplateOutlet]=\"content\"></ng-template>\n              </div>\n              <div *ngIf=\"extra\" class=\"page-header__extra\">\n                <ng-template [ngTemplateOutlet]=\"extra\"></ng-template>\n              </div>\n            </div>\n          </div>\n        </div>\n        <ng-template [ngTemplateOutlet]=\"tab\"></ng-template>\n      </nz-skeleton>\n    </div>\n  </div>\n</ng-template>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    PageHeaderComponent.ctorParameters = function () { return [
        { type: PageHeaderConfig },
        { type: SettingsService },
        { type: Renderer2 },
        { type: Router },
        { type: MenuService },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [ALAIN_I18N_TOKEN,] }] },
        { type: TitleService, decorators: [{ type: Optional }, { type: Inject, args: [TitleService,] }] },
        { type: ReuseTabService, decorators: [{ type: Optional }, { type: Inject, args: [ReuseTabService,] }] },
        { type: ChangeDetectorRef }
    ]; };
    PageHeaderComponent.propDecorators = {
        conTpl: [{ type: ViewChild, args: ['conTpl',] }],
        affix: [{ type: ViewChild, args: ['affix',] }],
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
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], PageHeaderComponent.prototype, "loading", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], PageHeaderComponent.prototype, "wide", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], PageHeaderComponent.prototype, "autoBreadcrumb", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], PageHeaderComponent.prototype, "autoTitle", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], PageHeaderComponent.prototype, "syncTitle", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], PageHeaderComponent.prototype, "fixed", void 0);
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Number)
    ], PageHeaderComponent.prototype, "fixedOffsetTop", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], PageHeaderComponent.prototype, "recursiveBreadcrumb", void 0);
    return PageHeaderComponent;
}());
export { PageHeaderComponent };
if (false) {
    /** @type {?} */
    PageHeaderComponent.prototype.inited;
    /** @type {?} */
    PageHeaderComponent.prototype.ref$;
    /** @type {?} */
    PageHeaderComponent.prototype.set$;
    /** @type {?} */
    PageHeaderComponent.prototype.conTpl;
    /** @type {?} */
    PageHeaderComponent.prototype.affix;
    /** @type {?} */
    PageHeaderComponent.prototype._menus;
    /** @type {?} */
    PageHeaderComponent.prototype._titleVal;
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
    /**
     * 自动生成导航，以当前路由从主菜单中定位
     * @type {?}
     */
    PageHeaderComponent.prototype.autoBreadcrumb;
    /**
     * 自动生成标题，以当前路由从主菜单中定位
     * @type {?}
     */
    PageHeaderComponent.prototype.autoTitle;
    /**
     * 是否自动将标题同步至 `TitleService`、`ReuseService` 下，仅 `title` 为 `string` 类型时有效
     * @type {?}
     */
    PageHeaderComponent.prototype.syncTitle;
    /** @type {?} */
    PageHeaderComponent.prototype.fixed;
    /** @type {?} */
    PageHeaderComponent.prototype.fixedOffsetTop;
    /** @type {?} */
    PageHeaderComponent.prototype.paths;
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
    /** @type {?} */
    PageHeaderComponent.prototype.renderer;
    /** @type {?} */
    PageHeaderComponent.prototype.router;
    /** @type {?} */
    PageHeaderComponent.prototype.menuSrv;
    /** @type {?} */
    PageHeaderComponent.prototype.i18nSrv;
    /** @type {?} */
    PageHeaderComponent.prototype.titleSrv;
    /** @type {?} */
    PageHeaderComponent.prototype.reuseSrv;
    /** @type {?} */
    PageHeaderComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9wYWdlLWhlYWRlci8iLCJzb3VyY2VzIjpbInBhZ2UtaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFdBQVcsRUFHWCxNQUFNLEVBQ04sUUFBUSxFQUNSLFNBQVMsRUFDVCxVQUFVLEVBRVYsU0FBUyxFQUVULHVCQUF1QixFQUN2QixpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE1BQU0sRUFBZSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUE0QixLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXhDLE9BQU8sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNqRSxPQUFPLEVBQ0wsV0FBVyxFQUNYLGdCQUFnQixFQUdoQixZQUFZLEVBQ1osZUFBZSxHQUNoQixNQUFNLGNBQWMsQ0FBQztBQUN0QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFdkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFeEQ7SUFtSEUsYUFBYTtJQUViLDZCQUNFLEdBQXFCLEVBQ3JCLFFBQXlCLEVBQ2pCLFFBQW1CLEVBQ25CLE1BQWMsRUFDZCxPQUFvQixFQUdwQixPQUF5QixFQUd6QixRQUFzQixFQUd0QixRQUF5QixFQUN6QixHQUFzQjtRQWZoQyxpQkFzQ0M7UUFuQ1MsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsWUFB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a0I7O0lBRWxCLHlDQUM2Qjs7SUFFN0Isa0RBRTZCOztJQUU3QixtQ0FDdUI7O0lBRXZCLHFDQUN5Qjs7SUFFekIsc0NBQzBCOztJQUUxQixvQ0FDd0I7O0lBRXhCLGtDQUNzQjs7SUFPcEIsdUNBQTJCOztJQUMzQixxQ0FBc0I7O0lBQ3RCLHNDQUE0Qjs7SUFDNUIsc0NBRWlDOztJQUNqQyx1Q0FFOEI7O0lBQzlCLHVDQUVpQzs7SUFDakMsa0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIE9uSW5pdCxcbiAgT25DaGFuZ2VzLFxuICBJbmplY3QsXG4gIE9wdGlvbmFsLFxuICBWaWV3Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIEFmdGVyVmlld0luaXQsXG4gIFJlbmRlcmVyMixcbiAgT25EZXN0cm95LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZXJFdmVudCwgTmF2aWdhdGlvbkVuZCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBOekFmZml4Q29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24sIE9ic2VydmFibGUsIG1lcmdlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IGlzRW1wdHksIElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQge1xuICBNZW51U2VydmljZSxcbiAgQUxBSU5fSTE4Tl9UT0tFTixcbiAgQWxhaW5JMThOU2VydmljZSxcbiAgTWVudSxcbiAgVGl0bGVTZXJ2aWNlLFxuICBTZXR0aW5nc1NlcnZpY2UsXG59IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBSZXVzZVRhYlNlcnZpY2UgfSBmcm9tICdAZGVsb24vYWJjL3JldXNlLXRhYic7XG5cbmltcG9ydCB7IFBhZ2VIZWFkZXJDb25maWcgfSBmcm9tICcuL3BhZ2UtaGVhZGVyLmNvbmZpZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhZ2UtaGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BhZ2UtaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2VIZWFkZXJDb21wb25lbnRcbiAgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBpbml0ZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSByZWYkOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgc2V0JDogU3Vic2NyaXB0aW9uO1xuICBAVmlld0NoaWxkKCdjb25UcGwnKVxuICBwcml2YXRlIGNvblRwbDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnYWZmaXgnKVxuICBwcml2YXRlIGFmZml4OiBOekFmZml4Q29tcG9uZW50O1xuICBwcml2YXRlIF9tZW51czogTWVudVtdO1xuXG4gIHByaXZhdGUgZ2V0IG1lbnVzKCkge1xuICAgIGlmICh0aGlzLl9tZW51cykge1xuICAgICAgcmV0dXJuIHRoaXMuX21lbnVzO1xuICAgIH1cbiAgICB0aGlzLl9tZW51cyA9IHRoaXMubWVudVNydi5nZXRQYXRoQnlVcmwoXG4gICAgICB0aGlzLnJvdXRlci51cmwuc3BsaXQoJz8nKVswXSxcbiAgICAgIHRoaXMucmVjdXJzaXZlQnJlYWRjcnVtYixcbiAgICApO1xuXG4gICAgcmV0dXJuIHRoaXMuX21lbnVzO1xuICB9XG5cbiAgX3RpdGxlVmFsOiBzdHJpbmc7XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBfdGl0bGU6IHN0cmluZztcbiAgX3RpdGxlVHBsOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBASW5wdXQoKVxuICBzZXQgdGl0bGUodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgdGhpcy5fdGl0bGUgPSBudWxsO1xuICAgICAgdGhpcy5fdGl0bGVUcGwgPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdGl0bGUgPSB2YWx1ZTtcbiAgICB9XG4gICAgdGhpcy5fdGl0bGVWYWwgPSB0aGlzLl90aXRsZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIEBJbnB1dEJvb2xlYW4oKVxuICBsb2FkaW5nID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgQElucHV0Qm9vbGVhbigpXG4gIHdpZGUgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBob21lOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgaG9tZUxpbms6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBob21lSTE4bjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiDoh6rliqjnlJ/miJDlr7zoiKrvvIzku6XlvZPliY3ot6/nlLHku47kuLvoj5zljZXkuK3lrprkvY1cbiAgICovXG4gIEBJbnB1dCgpXG4gIEBJbnB1dEJvb2xlYW4oKVxuICBhdXRvQnJlYWRjcnVtYjogYm9vbGVhbjtcblxuICAvKipcbiAgICog6Ieq5Yqo55Sf5oiQ5qCH6aKY77yM5Lul5b2T5YmN6Lev55Sx5LuO5Li76I+c5Y2V5Lit5a6a5L2NXG4gICAqL1xuICBASW5wdXQoKVxuICBASW5wdXRCb29sZWFuKClcbiAgYXV0b1RpdGxlOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDmmK/lkKboh6rliqjlsIbmoIfpopjlkIzmraXoh7MgYFRpdGxlU2VydmljZWDjgIFgUmV1c2VTZXJ2aWNlYCDkuIvvvIzku4UgYHRpdGxlYCDkuLogYHN0cmluZ2Ag57G75Z6L5pe25pyJ5pWIXG4gICAqL1xuICBASW5wdXQoKVxuICBASW5wdXRCb29sZWFuKClcbiAgc3luY1RpdGxlOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIEBJbnB1dEJvb2xlYW4oKVxuICBmaXhlZDogYm9vbGVhbjtcblxuICBASW5wdXQoKVxuICBASW5wdXROdW1iZXIoKVxuICBmaXhlZE9mZnNldFRvcDogbnVtYmVyO1xuXG4gIHBhdGhzOiBhbnlbXSA9IFtdO1xuXG4gIEBJbnB1dCgpXG4gIGJyZWFkY3J1bWI6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQElucHV0KClcbiAgQElucHV0Qm9vbGVhbigpXG4gIHJlY3Vyc2l2ZUJyZWFkY3J1bWI6IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgbG9nbzogVGVtcGxhdGVSZWY8YW55PjtcblxuICBASW5wdXQoKVxuICBhY3Rpb246IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQElucHV0KClcbiAgY29udGVudDogVGVtcGxhdGVSZWY8YW55PjtcblxuICBASW5wdXQoKVxuICBleHRyYTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBASW5wdXQoKVxuICB0YWI6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGNvZzogUGFnZUhlYWRlckNvbmZpZyxcbiAgICBzZXR0aW5nczogU2V0dGluZ3NTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgbWVudVNydjogTWVudVNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KEFMQUlOX0kxOE5fVE9LRU4pXG4gICAgcHJpdmF0ZSBpMThuU3J2OiBBbGFpbkkxOE5TZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChUaXRsZVNlcnZpY2UpXG4gICAgcHJpdmF0ZSB0aXRsZVNydjogVGl0bGVTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChSZXVzZVRhYlNlcnZpY2UpXG4gICAgcHJpdmF0ZSByZXVzZVNydjogUmV1c2VUYWJTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb2cpO1xuICAgIHRoaXMuc2V0JCA9IHNldHRpbmdzLm5vdGlmeVxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcihcbiAgICAgICAgICB3ID0+IHRoaXMuYWZmaXggJiYgdy50eXBlID09PSAnbGF5b3V0JyAmJiB3Lm5hbWUgPT09ICdjb2xsYXBzZWQnLFxuICAgICAgICApLFxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmFmZml4LnVwZGF0ZVBvc2l0aW9uKHt9KSk7XG5cbiAgICBjb25zdCBkYXRhJDogT2JzZXJ2YWJsZTxhbnk+W10gPSBbXG4gICAgICB0aGlzLnJvdXRlci5ldmVudHMucGlwZShcbiAgICAgICAgZmlsdGVyKChldmVudDogUm91dGVyRXZlbnQpID0+IGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCksXG4gICAgICApLFxuICAgIF07XG4gICAgaWYgKHRoaXMuaTE4blNydikge1xuICAgICAgZGF0YSQucHVzaCh0aGlzLmkxOG5TcnYuY2hhbmdlKTtcbiAgICB9XG4gICAgdGhpcy5yZWYkID0gbWVyZ2UoLi4uZGF0YSQpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLl9tZW51cyA9IG51bGw7XG4gICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5zZXRUaXRsZSgpLmdlbkJyZWFkY3J1bWIoKTtcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBwcml2YXRlIGdlbkJyZWFkY3J1bWIoKSB7XG4gICAgaWYgKHRoaXMuYnJlYWRjcnVtYiB8fCAhdGhpcy5hdXRvQnJlYWRjcnVtYiB8fCB0aGlzLm1lbnVzLmxlbmd0aCA8PSAwKSB7XG4gICAgICB0aGlzLnBhdGhzID0gW107XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHBhdGhzOiBhbnlbXSA9IFtdO1xuICAgIHRoaXMubWVudXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGlmICh0eXBlb2YgaXRlbS5oaWRlSW5CcmVhZGNydW1iICE9PSAndW5kZWZpbmVkJyAmJiBpdGVtLmhpZGVJbkJyZWFkY3J1bWIpXG4gICAgICAgIHJldHVybjtcbiAgICAgIGxldCB0aXRsZSA9IGl0ZW0udGV4dDtcbiAgICAgIGlmIChpdGVtLmkxOG4gJiYgdGhpcy5pMThuU3J2KSB0aXRsZSA9IHRoaXMuaTE4blNydi5mYW55aShpdGVtLmkxOG4pO1xuICAgICAgcGF0aHMucHVzaCh7IHRpdGxlLCBsaW5rOiBpdGVtLmxpbmsgJiYgW2l0ZW0ubGlua10gfSk7XG4gICAgfSk7XG4gICAgLy8gYWRkIGhvbWVcbiAgICBpZiAodGhpcy5ob21lKSB7XG4gICAgICBwYXRocy5zcGxpY2UoMCwgMCwge1xuICAgICAgICB0aXRsZTpcbiAgICAgICAgICAodGhpcy5ob21lSTE4biAmJlxuICAgICAgICAgICAgdGhpcy5pMThuU3J2ICYmXG4gICAgICAgICAgICB0aGlzLmkxOG5TcnYuZmFueWkodGhpcy5ob21lSTE4bikpIHx8XG4gICAgICAgICAgdGhpcy5ob21lLFxuICAgICAgICBsaW5rOiBbdGhpcy5ob21lTGlua10sXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5wYXRocyA9IHBhdGhzO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRUaXRsZSgpIHtcbiAgICBpZiAoXG4gICAgICB0eXBlb2YgdGhpcy5fdGl0bGUgPT09ICd1bmRlZmluZWQnICYmXG4gICAgICB0eXBlb2YgdGhpcy5fdGl0bGVUcGwgPT09ICd1bmRlZmluZWQnICYmXG4gICAgICB0aGlzLmF1dG9UaXRsZSAmJlxuICAgICAgdGhpcy5tZW51cy5sZW5ndGggPiAwXG4gICAgKSB7XG4gICAgICBjb25zdCBpdGVtID0gdGhpcy5tZW51c1t0aGlzLm1lbnVzLmxlbmd0aCAtIDFdO1xuICAgICAgbGV0IHRpdGxlID0gaXRlbS50ZXh0O1xuICAgICAgaWYgKGl0ZW0uaTE4biAmJiB0aGlzLmkxOG5TcnYpIHRpdGxlID0gdGhpcy5pMThuU3J2LmZhbnlpKGl0ZW0uaTE4bik7XG4gICAgICB0aGlzLl90aXRsZVZhbCA9IHRpdGxlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl90aXRsZVZhbCAmJiB0aGlzLnN5bmNUaXRsZSkge1xuICAgICAgaWYgKHRoaXMudGl0bGVTcnYpIHtcbiAgICAgICAgdGhpcy50aXRsZVNydi5zZXRUaXRsZSh0aGlzLl90aXRsZVZhbCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5yZXVzZVNydikge1xuICAgICAgICB0aGlzLnJldXNlU3J2LnRpdGxlID0gdGhpcy5fdGl0bGVWYWw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjaGVja0NvbnRlbnQoKSB7XG4gICAgaWYgKGlzRW1wdHkodGhpcy5jb25UcGwubmF0aXZlRWxlbWVudCkpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuY29uVHBsLm5hdGl2ZUVsZW1lbnQsICdoaWRkZW4nLCAnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKHRoaXMuY29uVHBsLm5hdGl2ZUVsZW1lbnQsICdoaWRkZW4nKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgICB0aGlzLmluaXRlZCA9IHRydWU7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja0NvbnRlbnQoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmluaXRlZCkgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnNldCQudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLnJlZiQudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19