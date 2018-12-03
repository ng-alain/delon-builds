/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, TemplateRef, Inject, Optional, ViewChild, ElementRef, Renderer2, } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NzAffixComponent } from 'ng-zorro-antd';
import { merge } from 'rxjs';
import { filter } from 'rxjs/operators';
import { isEmpty, InputBoolean, InputNumber } from '@delon/util';
import { MenuService, ALAIN_I18N_TOKEN, TitleService, SettingsService, } from '@delon/theme';
import { ReuseTabService } from '@delon/abc/reuse-tab';
import { PageHeaderConfig } from './page-header.config';
export class PageHeaderComponent {
    // #endregion
    /**
     * @param {?} cog
     * @param {?} settings
     * @param {?} renderer
     * @param {?} router
     * @param {?} menuSrv
     * @param {?} i18nSrv
     * @param {?} titleSrv
     * @param {?} reuseSrv
     */
    constructor(cog, settings, renderer, router, menuSrv, i18nSrv, titleSrv, reuseSrv) {
        this.renderer = renderer;
        this.router = router;
        this.menuSrv = menuSrv;
        this.i18nSrv = i18nSrv;
        this.titleSrv = titleSrv;
        this.reuseSrv = reuseSrv;
        this.inited = false;
        this.loading = false;
        this.wide = false;
        this.paths = [];
        Object.assign(this, cog);
        this.set$ = settings.notify
            .pipe(filter(w => this.affix && w.type === 'layout' && w.name === 'collapsed'))
            .subscribe(() => this.affix.updatePosition({}));
        /** @type {?} */
        const data$ = [
            this.router.events.pipe(filter((event) => event instanceof NavigationEnd)),
        ];
        if (this.i18nSrv) {
            data$.push(this.i18nSrv.change);
        }
        this.ref$ = merge(...data$).subscribe(() => {
            this._menus = null;
            this.refresh();
        });
    }
    /**
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
        }
        else {
            this._title = value;
        }
        this._titleVal = this._title;
    }
    /**
     * @return {?}
     */
    refresh() {
        this.setTitle().genBreadcrumb();
    }
    /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    genBreadcrumb() {
        if ((/** @type {?} */ (this)).breadcrumb || !(/** @type {?} */ (this)).autoBreadcrumb || (/** @type {?} */ (this)).menus.length <= 0) {
            (/** @type {?} */ (this)).paths = [];
            return;
        }
        /** @type {?} */
        const paths = [];
        (/** @type {?} */ (this)).menus.forEach(item => {
            if (typeof item.hideInBreadcrumb !== 'undefined' && item.hideInBreadcrumb)
                return;
            /** @type {?} */
            let title = item.text;
            if (item.i18n && (/** @type {?} */ (this)).i18nSrv)
                title = (/** @type {?} */ (this)).i18nSrv.fanyi(item.i18n);
            paths.push({ title, link: item.link && [item.link] });
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
    }
    /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    setTitle() {
        if (typeof (/** @type {?} */ (this))._title === 'undefined' &&
            typeof (/** @type {?} */ (this))._titleTpl === 'undefined' &&
            (/** @type {?} */ (this)).autoTitle &&
            (/** @type {?} */ (this)).menus.length > 0) {
            /** @type {?} */
            const item = (/** @type {?} */ (this)).menus[(/** @type {?} */ (this)).menus.length - 1];
            /** @type {?} */
            let title = item.text;
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
        this.set$.unsubscribe();
        this.ref$.unsubscribe();
    }
}
PageHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'page-header',
                template: "<nz-affix #affix *ngIf=\"fixed;else phTpl\" [nzOffsetTop]=\"fixedOffsetTop\">\n  <ng-template [ngTemplateOutlet]=\"phTpl\"></ng-template>\n</nz-affix>\n<ng-template #phTpl>\n  <div class=\"page-header\">\n    <div [ngClass]=\"{'page-header__wide': wide}\">\n      <nz-skeleton [nzLoading]=\"loading\" [nzTitle]=\"false\" [nzActive]=\"true\"\n        [nzParagraph]=\"{rows: 3}\" [nzAvatar]=\"{ size: 'large', shape: 'circle' }\">\n        <ng-container *ngIf=\"!breadcrumb; else breadcrumb\">\n          <nz-breadcrumb *ngIf=\"paths && paths.length > 0\">\n            <nz-breadcrumb-item *ngFor=\"let i of paths\">\n              <ng-container *ngIf=\"i.link\">\n                <a [routerLink]=\"i.link\">{{i.title}}</a>\n              </ng-container>\n              <ng-container *ngIf=\"!i.link\">{{i.title}}</ng-container>\n            </nz-breadcrumb-item>\n          </nz-breadcrumb>\n        </ng-container>\n        <div class=\"page-header__detail\">\n          <div *ngIf=\"logo\" class=\"page-header__logo\">\n            <ng-template [ngTemplateOutlet]=\"logo\"></ng-template>\n          </div>\n          <div class=\"page-header__main\">\n            <div class=\"page-header__row\">\n              <h1 *ngIf=\"_titleVal || _titleTpl\" class=\"page-header__title\">\n                <ng-container *ngIf=\"_titleVal; else _titleTpl\">{{_titleVal}}</ng-container>\n              </h1>\n              <div *ngIf=\"action\" class=\"page-header__action\">\n                <ng-template [ngTemplateOutlet]=\"action\"></ng-template>\n              </div>\n            </div>\n            <div class=\"page-header__row\">\n              <div class=\"page-header__desc\" (cdkObserveContent)=\"checkContent()\" #conTpl>\n                <ng-content></ng-content>\n                <ng-template [ngTemplateOutlet]=\"content\"></ng-template>\n              </div>\n              <div *ngIf=\"extra\" class=\"page-header__extra\">\n                <ng-template [ngTemplateOutlet]=\"extra\"></ng-template>\n              </div>\n            </div>\n          </div>\n        </div>\n        <ng-template [ngTemplateOutlet]=\"tab\"></ng-template>\n      </nz-skeleton>\n    </div>\n  </div>\n</ng-template>\n"
            }] }
];
/** @nocollapse */
PageHeaderComponent.ctorParameters = () => [
    { type: PageHeaderConfig },
    { type: SettingsService },
    { type: Renderer2 },
    { type: Router },
    { type: MenuService },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [ALAIN_I18N_TOKEN,] }] },
    { type: TitleService, decorators: [{ type: Optional }, { type: Inject, args: [TitleService,] }] },
    { type: ReuseTabService, decorators: [{ type: Optional }, { type: Inject, args: [ReuseTabService,] }] }
];
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9wYWdlLWhlYWRlci8iLCJzb3VyY2VzIjpbInBhZ2UtaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFdBQVcsRUFHWCxNQUFNLEVBQ04sUUFBUSxFQUNSLFNBQVMsRUFDVCxVQUFVLEVBRVYsU0FBUyxHQUVWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxNQUFNLEVBQWUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDckUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBNEIsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QyxPQUFPLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDakUsT0FBTyxFQUNMLFdBQVcsRUFDWCxnQkFBZ0IsRUFHaEIsWUFBWSxFQUNaLGVBQWUsR0FDaEIsTUFBTSxjQUFjLENBQUM7QUFDdEIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXZELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBTXhELE1BQU0sT0FBTyxtQkFBbUI7Ozs7Ozs7Ozs7OztJQWdIOUIsWUFDRSxHQUFxQixFQUNyQixRQUF5QixFQUNqQixRQUFtQixFQUNuQixNQUFjLEVBQ2QsT0FBb0IsRUFHcEIsT0FBeUIsRUFHekIsUUFBc0IsRUFHdEIsUUFBeUI7UUFYekIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsWUFBTyxHQUFQLE9BQU8sQ0FBYTtRQUdwQixZQUFPLEdBQVAs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LEtBQUs7a0NBR0wsS0FBSzttQkFJTCxLQUFLO3FCQUdMLEtBQUs7c0JBR0wsS0FBSztvQkFHTCxLQUFLO2tCQUdMLEtBQUs7O0FBakVOO0lBREMsWUFBWSxFQUFFOztvREFDQztBQUloQjtJQURDLFlBQVksRUFBRTs7aURBQ0Y7QUFnQmI7SUFEQyxZQUFZLEVBQUU7OzJEQUNTO0FBT3hCO0lBREMsWUFBWSxFQUFFOztzREFDSTtBQU9uQjtJQURDLFlBQVksRUFBRTs7c0RBQ0k7QUFJbkI7SUFEQyxZQUFZLEVBQUU7O2tEQUNBO0FBSWY7SUFEQyxXQUFXLEVBQUU7OzJEQUNTO0FBU3ZCO0lBREMsWUFBWSxFQUFFOztnRUFDYzs7O0lBM0Y3QixxQ0FBdUI7O0lBQ3ZCLG1DQUEyQjs7SUFDM0IsbUNBQTJCOztJQUMzQixxQ0FDMkI7O0lBQzNCLG9DQUNnQzs7SUFDaEMscUNBQXVCOztJQWN2Qix3Q0FBa0I7O0lBSWxCLHFDQUFlOztJQUNmLHdDQUE0Qjs7SUFZNUIsc0NBRWdCOztJQUVoQixtQ0FFYTs7SUFFYixtQ0FDYTs7SUFFYix1Q0FDaUI7O0lBRWpCLHVDQUNpQjs7Ozs7SUFLakIsNkNBRXdCOzs7OztJQUt4Qix3Q0FFbUI7Ozs7O0lBS25CLHdDQUVtQjs7SUFFbkIsb0NBRWU7O0lBRWYsNkNBRXVCOztJQUV2QixvQ0FBa0I7O0lBRWxCLHlDQUM2Qjs7SUFFN0Isa0RBRTZCOztJQUU3QixtQ0FDdUI7O0lBRXZCLHFDQUN5Qjs7SUFFekIsc0NBQzBCOztJQUUxQixvQ0FDd0I7O0lBRXhCLGtDQUNzQjs7SUFPcEIsdUNBQTJCOztJQUMzQixxQ0FBc0I7O0lBQ3RCLHNDQUE0Qjs7SUFDNUIsc0NBRWlDOztJQUNqQyx1Q0FFOEI7O0lBQzlCLHVDQUVpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIFRlbXBsYXRlUmVmLFxuICBPbkluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgSW5qZWN0LFxuICBPcHRpb25hbCxcbiAgVmlld0NoaWxkLFxuICBFbGVtZW50UmVmLFxuICBBZnRlclZpZXdJbml0LFxuICBSZW5kZXJlcjIsXG4gIE9uRGVzdHJveSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlckV2ZW50LCBOYXZpZ2F0aW9uRW5kIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE56QWZmaXhDb21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgT2JzZXJ2YWJsZSwgbWVyZ2UgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgaXNFbXB0eSwgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7XG4gIE1lbnVTZXJ2aWNlLFxuICBBTEFJTl9JMThOX1RPS0VOLFxuICBBbGFpbkkxOE5TZXJ2aWNlLFxuICBNZW51LFxuICBUaXRsZVNlcnZpY2UsXG4gIFNldHRpbmdzU2VydmljZSxcbn0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IFJldXNlVGFiU2VydmljZSB9IGZyb20gJ0BkZWxvbi9hYmMvcmV1c2UtdGFiJztcblxuaW1wb3J0IHsgUGFnZUhlYWRlckNvbmZpZyB9IGZyb20gJy4vcGFnZS1oZWFkZXIuY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFnZS1oZWFkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vcGFnZS1oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBQYWdlSGVhZGVyQ29tcG9uZW50XG4gIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgaW5pdGVkID0gZmFsc2U7XG4gIHByaXZhdGUgcmVmJDogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIHNldCQ6IFN1YnNjcmlwdGlvbjtcbiAgQFZpZXdDaGlsZCgnY29uVHBsJylcbiAgcHJpdmF0ZSBjb25UcGw6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2FmZml4JylcbiAgcHJpdmF0ZSBhZmZpeDogTnpBZmZpeENvbXBvbmVudDtcbiAgcHJpdmF0ZSBfbWVudXM6IE1lbnVbXTtcblxuICBwcml2YXRlIGdldCBtZW51cygpIHtcbiAgICBpZiAodGhpcy5fbWVudXMpIHtcbiAgICAgIHJldHVybiB0aGlzLl9tZW51cztcbiAgICB9XG4gICAgdGhpcy5fbWVudXMgPSB0aGlzLm1lbnVTcnYuZ2V0UGF0aEJ5VXJsKFxuICAgICAgdGhpcy5yb3V0ZXIudXJsLnNwbGl0KCc/JylbMF0sXG4gICAgICB0aGlzLnJlY3Vyc2l2ZUJyZWFkY3J1bWIsXG4gICAgKTtcblxuICAgIHJldHVybiB0aGlzLl9tZW51cztcbiAgfVxuXG4gIF90aXRsZVZhbDogc3RyaW5nO1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgX3RpdGxlOiBzdHJpbmc7XG4gIF90aXRsZVRwbDogVGVtcGxhdGVSZWY8YW55PjtcbiAgQElucHV0KClcbiAgc2V0IHRpdGxlKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIHRoaXMuX3RpdGxlID0gbnVsbDtcbiAgICAgIHRoaXMuX3RpdGxlVHBsID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3RpdGxlID0gdmFsdWU7XG4gICAgfVxuICAgIHRoaXMuX3RpdGxlVmFsID0gdGhpcy5fdGl0bGU7XG4gIH1cblxuICBASW5wdXQoKVxuICBASW5wdXRCb29sZWFuKClcbiAgbG9hZGluZyA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIEBJbnB1dEJvb2xlYW4oKVxuICB3aWRlID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgaG9tZTogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIGhvbWVMaW5rOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgaG9tZUkxOG46IHN0cmluZztcblxuICAvKipcbiAgICog6Ieq5Yqo55Sf5oiQ5a+86Iiq77yM5Lul5b2T5YmN6Lev55Sx5LuO5Li76I+c5Y2V5Lit5a6a5L2NXG4gICAqL1xuICBASW5wdXQoKVxuICBASW5wdXRCb29sZWFuKClcbiAgYXV0b0JyZWFkY3J1bWI6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOiHquWKqOeUn+aIkOagh+mimO+8jOS7peW9k+WJjei3r+eUseS7juS4u+iPnOWNleS4reWumuS9jVxuICAgKi9cbiAgQElucHV0KClcbiAgQElucHV0Qm9vbGVhbigpXG4gIGF1dG9UaXRsZTogYm9vbGVhbjtcblxuICAvKipcbiAgICog5piv5ZCm6Ieq5Yqo5bCG5qCH6aKY5ZCM5q2l6IezIGBUaXRsZVNlcnZpY2Vg44CBYFJldXNlU2VydmljZWAg5LiL77yM5LuFIGB0aXRsZWAg5Li6IGBzdHJpbmdgIOexu+Wei+aXtuacieaViFxuICAgKi9cbiAgQElucHV0KClcbiAgQElucHV0Qm9vbGVhbigpXG4gIHN5bmNUaXRsZTogYm9vbGVhbjtcblxuICBASW5wdXQoKVxuICBASW5wdXRCb29sZWFuKClcbiAgZml4ZWQ6IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgQElucHV0TnVtYmVyKClcbiAgZml4ZWRPZmZzZXRUb3A6IG51bWJlcjtcblxuICBwYXRoczogYW55W10gPSBbXTtcblxuICBASW5wdXQoKVxuICBicmVhZGNydW1iOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBJbnB1dCgpXG4gIEBJbnB1dEJvb2xlYW4oKVxuICByZWN1cnNpdmVCcmVhZGNydW1iOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIGxvZ286IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQElucHV0KClcbiAgYWN0aW9uOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBJbnB1dCgpXG4gIGNvbnRlbnQ6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQElucHV0KClcbiAgZXh0cmE6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQElucHV0KClcbiAgdGFiOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3RvcihcbiAgICBjb2c6IFBhZ2VIZWFkZXJDb25maWcsXG4gICAgc2V0dGluZ3M6IFNldHRpbmdzU2VydmljZSxcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIG1lbnVTcnY6IE1lbnVTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChBTEFJTl9JMThOX1RPS0VOKVxuICAgIHByaXZhdGUgaTE4blNydjogQWxhaW5JMThOU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoVGl0bGVTZXJ2aWNlKVxuICAgIHByaXZhdGUgdGl0bGVTcnY6IFRpdGxlU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoUmV1c2VUYWJTZXJ2aWNlKVxuICAgIHByaXZhdGUgcmV1c2VTcnY6IFJldXNlVGFiU2VydmljZSxcbiAgKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb2cpO1xuICAgIHRoaXMuc2V0JCA9IHNldHRpbmdzLm5vdGlmeVxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcihcbiAgICAgICAgICB3ID0+IHRoaXMuYWZmaXggJiYgdy50eXBlID09PSAnbGF5b3V0JyAmJiB3Lm5hbWUgPT09ICdjb2xsYXBzZWQnLFxuICAgICAgICApLFxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmFmZml4LnVwZGF0ZVBvc2l0aW9uKHt9KSk7XG5cbiAgICBjb25zdCBkYXRhJDogT2JzZXJ2YWJsZTxhbnk+W10gPSBbXG4gICAgICB0aGlzLnJvdXRlci5ldmVudHMucGlwZShcbiAgICAgICAgZmlsdGVyKChldmVudDogUm91dGVyRXZlbnQpID0+IGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCksXG4gICAgICApLFxuICAgIF07XG4gICAgaWYgKHRoaXMuaTE4blNydikge1xuICAgICAgZGF0YSQucHVzaCh0aGlzLmkxOG5TcnYuY2hhbmdlKTtcbiAgICB9XG4gICAgdGhpcy5yZWYkID0gbWVyZ2UoLi4uZGF0YSQpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLl9tZW51cyA9IG51bGw7XG4gICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5zZXRUaXRsZSgpLmdlbkJyZWFkY3J1bWIoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuQnJlYWRjcnVtYigpIHtcbiAgICBpZiAodGhpcy5icmVhZGNydW1iIHx8ICF0aGlzLmF1dG9CcmVhZGNydW1iIHx8IHRoaXMubWVudXMubGVuZ3RoIDw9IDApIHtcbiAgICAgIHRoaXMucGF0aHMgPSBbXTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcGF0aHM6IGFueVtdID0gW107XG4gICAgdGhpcy5tZW51cy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaWYgKHR5cGVvZiBpdGVtLmhpZGVJbkJyZWFkY3J1bWIgIT09ICd1bmRlZmluZWQnICYmIGl0ZW0uaGlkZUluQnJlYWRjcnVtYilcbiAgICAgICAgcmV0dXJuO1xuICAgICAgbGV0IHRpdGxlID0gaXRlbS50ZXh0O1xuICAgICAgaWYgKGl0ZW0uaTE4biAmJiB0aGlzLmkxOG5TcnYpIHRpdGxlID0gdGhpcy5pMThuU3J2LmZhbnlpKGl0ZW0uaTE4bik7XG4gICAgICBwYXRocy5wdXNoKHsgdGl0bGUsIGxpbms6IGl0ZW0ubGluayAmJiBbaXRlbS5saW5rXSB9KTtcbiAgICB9KTtcbiAgICAvLyBhZGQgaG9tZVxuICAgIGlmICh0aGlzLmhvbWUpIHtcbiAgICAgIHBhdGhzLnNwbGljZSgwLCAwLCB7XG4gICAgICAgIHRpdGxlOlxuICAgICAgICAgICh0aGlzLmhvbWVJMThuICYmXG4gICAgICAgICAgICB0aGlzLmkxOG5TcnYgJiZcbiAgICAgICAgICAgIHRoaXMuaTE4blNydi5mYW55aSh0aGlzLmhvbWVJMThuKSkgfHxcbiAgICAgICAgICB0aGlzLmhvbWUsXG4gICAgICAgIGxpbms6IFt0aGlzLmhvbWVMaW5rXSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnBhdGhzID0gcGF0aHM7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcml2YXRlIHNldFRpdGxlKCkge1xuICAgIGlmIChcbiAgICAgIHR5cGVvZiB0aGlzLl90aXRsZSA9PT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgIHR5cGVvZiB0aGlzLl90aXRsZVRwbCA9PT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgIHRoaXMuYXV0b1RpdGxlICYmXG4gICAgICB0aGlzLm1lbnVzLmxlbmd0aCA+IDBcbiAgICApIHtcbiAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLm1lbnVzW3RoaXMubWVudXMubGVuZ3RoIC0gMV07XG4gICAgICBsZXQgdGl0bGUgPSBpdGVtLnRleHQ7XG4gICAgICBpZiAoaXRlbS5pMThuICYmIHRoaXMuaTE4blNydikgdGl0bGUgPSB0aGlzLmkxOG5TcnYuZmFueWkoaXRlbS5pMThuKTtcbiAgICAgIHRoaXMuX3RpdGxlVmFsID0gdGl0bGU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3RpdGxlVmFsICYmIHRoaXMuc3luY1RpdGxlKSB7XG4gICAgICBpZiAodGhpcy50aXRsZVNydikge1xuICAgICAgICB0aGlzLnRpdGxlU3J2LnNldFRpdGxlKHRoaXMuX3RpdGxlVmFsKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnJldXNlU3J2KSB7XG4gICAgICAgIHRoaXMucmV1c2VTcnYudGl0bGUgPSB0aGlzLl90aXRsZVZhbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNoZWNrQ29udGVudCgpIHtcbiAgICBpZiAoaXNFbXB0eSh0aGlzLmNvblRwbC5uYXRpdmVFbGVtZW50KSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5jb25UcGwubmF0aXZlRWxlbWVudCwgJ2hpZGRlbicsICcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUodGhpcy5jb25UcGwubmF0aXZlRWxlbWVudCwgJ2hpZGRlbicpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrQ29udGVudCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW5pdGVkKSB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0JC51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMucmVmJC51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=