/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, TemplateRef, Inject, Optional, ViewChild, ElementRef, Renderer2, } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NzAffixComponent } from 'ng-zorro-antd';
import { filter } from 'rxjs/operators';
import { isEmpty, InputBoolean, InputNumber } from '@delon/util';
import { MenuService, ALAIN_I18N_TOKEN, TitleService, SettingsService, } from '@delon/theme';
import { ReuseTabService } from '@delon/abc/reuse-tab';
import { PageHeaderConfig } from './page-header.config';
var PageHeaderComponent = /** @class */ (function () {
    // #endregion
    function PageHeaderComponent(cog, settings, renderer, router, menuSrv, i18nSrv, titleSrv, reuseSrv) {
        var _this = this;
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
        if (this.i18nSrv) {
            this.i18n$ = this.i18nSrv.change.subscribe(function () { return _this.refresh(); });
        }
        this.set$ = settings.notify
            .pipe(filter(function (w) { return _this.affix && w.type === 'layout' && w.name === 'collapsed'; }))
            .subscribe(function () { return _this.affix.updatePosition({}); });
        this.routerEvent$ = this.router.events
            .pipe(filter(function (event) { return event instanceof NavigationEnd; }))
            .subscribe(function (event) {
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
    };
    /**
     * @return {?}
     */
    PageHeaderComponent.prototype.genBreadcrumb = /**
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
        this.menus.forEach(function (item) {
            if (typeof item.hideInBreadcrumb !== 'undefined' && item.hideInBreadcrumb)
                return;
            /** @type {?} */
            var title = item.text;
            if (item.i18n && _this.i18nSrv)
                title = _this.i18nSrv.fanyi(item.i18n);
            paths.push({ title: title, link: item.link && [item.link] });
        });
        // add home
        if (this.home) {
            paths.splice(0, 0, {
                title: (this.homeI18n &&
                    this.i18nSrv &&
                    this.i18nSrv.fanyi(this.homeI18n)) ||
                    this.home,
                link: [this.homeLink],
            });
        }
        this.paths = paths;
        return this;
    };
    /**
     * @return {?}
     */
    PageHeaderComponent.prototype.setTitle = /**
     * @return {?}
     */
    function () {
        if (typeof this._title === 'undefined' &&
            typeof this._titleTpl === 'undefined' &&
            this.autoTitle &&
            this.menus.length > 0) {
            /** @type {?} */
            var item = this.menus[this.menus.length - 1];
            /** @type {?} */
            var title = item.text;
            if (item.i18n && this.i18nSrv)
                title = this.i18nSrv.fanyi(item.i18n);
            this._title = title;
        }
        if (this._title && this.syncTitle) {
            if (this.titleSrv) {
                this.titleSrv.setTitle(this._title);
            }
            if (this.reuseSrv) {
                this.reuseSrv.title = this._title;
            }
        }
        return this;
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
        if (this.i18n$)
            this.i18n$.unsubscribe();
        this.set$.unsubscribe();
        this.routerEvent$.unsubscribe();
    };
    PageHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'page-header',
                    template: "<nz-affix #affix *ngIf=\"fixed;else phTpl\" [nzOffsetTop]=\"fixedOffsetTop\">\n  <ng-template [ngTemplateOutlet]=\"phTpl\"></ng-template>\n</nz-affix>\n<ng-template #phTpl>\n  <div class=\"page-header\">\n    <div [ngClass]=\"{'page-header__wide': wide}\">\n      <nz-skeleton [nzLoading]=\"loading\" [nzTitle]=\"false\" [nzActive]=\"true\"\n        [nzParagraph]=\"{rows: 3}\" [nzAvatar]=\"{ size: 'large', shape: 'circle' }\">\n        <ng-container *ngIf=\"!breadcrumb; else breadcrumb\">\n          <nz-breadcrumb *ngIf=\"paths && paths.length > 0\">\n            <nz-breadcrumb-item *ngFor=\"let i of paths\">\n              <ng-container *ngIf=\"i.link\">\n                <a [routerLink]=\"i.link\">{{i.title}}</a>\n              </ng-container>\n              <ng-container *ngIf=\"!i.link\">{{i.title}}</ng-container>\n            </nz-breadcrumb-item>\n          </nz-breadcrumb>\n        </ng-container>\n        <div class=\"page-header__detail\">\n          <div *ngIf=\"logo\" class=\"page-header__logo\">\n            <ng-template [ngTemplateOutlet]=\"logo\"></ng-template>\n          </div>\n          <div class=\"page-header__main\">\n            <div class=\"page-header__row\">\n              <h1 *ngIf=\"_title || _titleTpl\" class=\"page-header__title\">\n                <ng-container *ngIf=\"_title; else _titleTpl\">{{_title}}</ng-container>\n              </h1>\n              <div *ngIf=\"action\" class=\"page-header__action\">\n                <ng-template [ngTemplateOutlet]=\"action\"></ng-template>\n              </div>\n            </div>\n            <div class=\"page-header__row\">\n              <div class=\"page-header__desc\" (cdkObserveContent)=\"checkContent()\" #conTpl>\n                <ng-content></ng-content>\n                <ng-template [ngTemplateOutlet]=\"content\"></ng-template>\n              </div>\n              <div *ngIf=\"extra\" class=\"page-header__extra\">\n                <ng-template [ngTemplateOutlet]=\"extra\"></ng-template>\n              </div>\n            </div>\n          </div>\n        </div>\n        <ng-template [ngTemplateOutlet]=\"tab\"></ng-template>\n      </nz-skeleton>\n    </div>\n  </div>\n</ng-template>\n",
                    preserveWhitespaces: false
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
        { type: ReuseTabService, decorators: [{ type: Optional }, { type: Inject, args: [ReuseTabService,] }] }
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
    PageHeaderComponent.prototype.i18n$;
    /** @type {?} */
    PageHeaderComponent.prototype.set$;
    /** @type {?} */
    PageHeaderComponent.prototype.routerEvent$;
    /** @type {?} */
    PageHeaderComponent.prototype.conTpl;
    /** @type {?} */
    PageHeaderComponent.prototype.affix;
    /** @type {?} */
    PageHeaderComponent.prototype._menus;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9wYWdlLWhlYWRlci8iLCJzb3VyY2VzIjpbInBhZ2UtaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFdBQVcsRUFJWCxNQUFNLEVBQ04sUUFBUSxFQUNSLFNBQVMsRUFDVCxVQUFVLEVBRVYsU0FBUyxHQUVWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxNQUFNLEVBQWUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDckUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QyxPQUFPLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDakUsT0FBTyxFQUNMLFdBQVcsRUFDWCxnQkFBZ0IsRUFHaEIsWUFBWSxFQUNaLGVBQWUsR0FDaEIsTUFBTSxjQUFjLENBQUM7QUFDdEIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXZELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztJQWdIdEQsYUFBYTtJQUViLDZCQUNFLEdBQXFCLEVBQ3JCLFFBQXlCLEVBQ2pCLFVBQ0EsUUFDQSxTQUdBLE9BQXlCLEVBR3pCLFFBQXNCLEVBR3RCLFFBQXlCO1FBZG5DLGlCQXFDQztRQWxDUyxhQUFRLEdBQVIsUUFBUTtRQUNSLFdBQU0sR0FBTixNQUFNO1FBQ04sWUFBTyxHQUFQLE9BQU87UUFHUCxZQUFPLEdBQVAsT0FBTyxDQUFrQjtRQUd6QixhQUFRLEdBQVIsUUFBUSxDQUFjO1FBR3RCLGFBQVEsR0FBUixRQUFRLENBQWlCO3NCQXZIbEIsS0FBSzt1QkFtQ1osS0FB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SSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUNqQzs7Z0JBek9GLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsaXFFQUEyQztvQkFDM0MsbUJBQW1CLEVBQUUsS0FBSztpQkFDM0I7Ozs7Z0JBTlEsZ0JBQWdCO2dCQUp2QixlQUFlO2dCQWZmLFNBQVM7Z0JBR0YsTUFBTTtnQkFPYixXQUFXO2dEQWlJUixRQUFRLFlBQ1IsTUFBTSxTQUFDLGdCQUFnQjtnQkE5SDFCLFlBQVksdUJBZ0lULFFBQVEsWUFDUixNQUFNLFNBQUMsWUFBWTtnQkE5SGYsZUFBZSx1QkFnSW5CLFFBQVEsWUFDUixNQUFNLFNBQUMsZUFBZTs7O3lCQWxIeEIsU0FBUyxTQUFDLFFBQVE7d0JBRWxCLFNBQVMsU0FBQyxPQUFPO3dCQWlCakIsS0FBSzswQkFVTCxLQUFLO3VCQUlMLEtBQUs7dUJBSUwsS0FBSzsyQkFHTCxLQUFLOzJCQUdMLEtBQUs7aUNBTUwsS0FBSzs0QkFPTCxLQUFLOzRCQU9MLEtBQUs7d0JBSUwsS0FBSztpQ0FJTCxLQUFLOzZCQU1MLEtBQUs7c0NBR0wsS0FBSzt1QkFJTCxLQUFLO3lCQUdMLEtBQUs7MEJBR0wsS0FBSzt3QkFHTCxLQUFLO3NCQUdMLEtBQUs7OztRQWxFTCxZQUFZLEVBQUU7Ozs7UUFJZCxZQUFZLEVBQUU7Ozs7UUFnQmQsWUFBWSxFQUFFOzs7O1FBT2QsWUFBWSxFQUFFOzs7O1FBT2QsWUFBWSxFQUFFOzs7O1FBSWQsWUFBWSxFQUFFOzs7O1FBSWQsV0FBVyxFQUFFOzs7O1FBU2IsWUFBWSxFQUFFOzs7OEJBN0hqQjs7U0FzQ2EsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIENvbnRlbnRDaGlsZCxcbiAgT25Jbml0LFxuICBPbkNoYW5nZXMsXG4gIEluamVjdCxcbiAgT3B0aW9uYWwsXG4gIFZpZXdDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgUmVuZGVyZXIyLFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZXJFdmVudCwgTmF2aWdhdGlvbkVuZCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBOekFmZml4Q29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgaXNFbXB0eSwgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7XG4gIE1lbnVTZXJ2aWNlLFxuICBBTEFJTl9JMThOX1RPS0VOLFxuICBBbGFpbkkxOE5TZXJ2aWNlLFxuICBNZW51LFxuICBUaXRsZVNlcnZpY2UsXG4gIFNldHRpbmdzU2VydmljZSxcbn0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IFJldXNlVGFiU2VydmljZSB9IGZyb20gJ0BkZWxvbi9hYmMvcmV1c2UtdGFiJztcblxuaW1wb3J0IHsgUGFnZUhlYWRlckNvbmZpZyB9IGZyb20gJy4vcGFnZS1oZWFkZXIuY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFnZS1oZWFkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vcGFnZS1oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgUGFnZUhlYWRlckNvbXBvbmVudFxuICBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGluaXRlZCA9IGZhbHNlO1xuICBwcml2YXRlIGkxOG4kOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgc2V0JDogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIHJvdXRlckV2ZW50JDogU3Vic2NyaXB0aW9uO1xuICBAVmlld0NoaWxkKCdjb25UcGwnKVxuICBwcml2YXRlIGNvblRwbDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnYWZmaXgnKVxuICBwcml2YXRlIGFmZml4OiBOekFmZml4Q29tcG9uZW50O1xuICBwcml2YXRlIF9tZW51czogTWVudVtdO1xuXG4gIHByaXZhdGUgZ2V0IG1lbnVzKCkge1xuICAgIGlmICh0aGlzLl9tZW51cykge1xuICAgICAgcmV0dXJuIHRoaXMuX21lbnVzO1xuICAgIH1cbiAgICB0aGlzLl9tZW51cyA9IHRoaXMubWVudVNydi5nZXRQYXRoQnlVcmwodGhpcy5yb3V0ZXIudXJsLnNwbGl0KCc/JylbMF0sIHRoaXMucmVjdXJzaXZlQnJlYWRjcnVtYik7XG5cbiAgICByZXR1cm4gdGhpcy5fbWVudXM7XG4gIH1cblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIF90aXRsZTogc3RyaW5nO1xuICBfdGl0bGVUcGw6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBJbnB1dCgpXG4gIHNldCB0aXRsZSh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLl90aXRsZSA9IG51bGw7XG4gICAgICB0aGlzLl90aXRsZVRwbCA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl90aXRsZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIEBJbnB1dEJvb2xlYW4oKVxuICBsb2FkaW5nID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgQElucHV0Qm9vbGVhbigpXG4gIHdpZGUgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBob21lOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgaG9tZUxpbms6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBob21lSTE4bjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiDoh6rliqjnlJ/miJDlr7zoiKrvvIzku6XlvZPliY3ot6/nlLHku47kuLvoj5zljZXkuK3lrprkvY1cbiAgICovXG4gIEBJbnB1dCgpXG4gIEBJbnB1dEJvb2xlYW4oKVxuICBhdXRvQnJlYWRjcnVtYjogYm9vbGVhbjtcblxuICAvKipcbiAgICog6Ieq5Yqo55Sf5oiQ5qCH6aKY77yM5Lul5b2T5YmN6Lev55Sx5LuO5Li76I+c5Y2V5Lit5a6a5L2NXG4gICAqL1xuICBASW5wdXQoKVxuICBASW5wdXRCb29sZWFuKClcbiAgYXV0b1RpdGxlOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiDmmK/lkKboh6rliqjlsIbmoIfpopjlkIzmraXoh7MgYFRpdGxlU2VydmljZWDjgIFgUmV1c2VTZXJ2aWNlYCDkuIvvvIzku4UgYHRpdGxlYCDkuLogYHN0cmluZ2Ag57G75Z6L5pe25pyJ5pWIXG4gICAqL1xuICBASW5wdXQoKVxuICBASW5wdXRCb29sZWFuKClcbiAgc3luY1RpdGxlOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIEBJbnB1dEJvb2xlYW4oKVxuICBmaXhlZDogYm9vbGVhbjtcblxuICBASW5wdXQoKVxuICBASW5wdXROdW1iZXIoKVxuICBmaXhlZE9mZnNldFRvcDogbnVtYmVyO1xuXG4gIHBhdGhzOiBhbnlbXSA9IFtdO1xuXG4gIEBJbnB1dCgpXG4gIGJyZWFkY3J1bWI6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQElucHV0KClcbiAgQElucHV0Qm9vbGVhbigpXG4gIHJlY3Vyc2l2ZUJyZWFkY3J1bWI6IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgbG9nbzogVGVtcGxhdGVSZWY8YW55PjtcblxuICBASW5wdXQoKVxuICBhY3Rpb246IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQElucHV0KClcbiAgY29udGVudDogVGVtcGxhdGVSZWY8YW55PjtcblxuICBASW5wdXQoKVxuICBleHRyYTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBASW5wdXQoKVxuICB0YWI6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGNvZzogUGFnZUhlYWRlckNvbmZpZyxcbiAgICBzZXR0aW5nczogU2V0dGluZ3NTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgbWVudVNydjogTWVudVNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KEFMQUlOX0kxOE5fVE9LRU4pXG4gICAgcHJpdmF0ZSBpMThuU3J2OiBBbGFpbkkxOE5TZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChUaXRsZVNlcnZpY2UpXG4gICAgcHJpdmF0ZSB0aXRsZVNydjogVGl0bGVTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChSZXVzZVRhYlNlcnZpY2UpXG4gICAgcHJpdmF0ZSByZXVzZVNydjogUmV1c2VUYWJTZXJ2aWNlLFxuICApIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvZyk7XG4gICAgaWYgKHRoaXMuaTE4blNydikge1xuICAgICAgdGhpcy5pMThuJCA9IHRoaXMuaTE4blNydi5jaGFuZ2Uuc3Vic2NyaWJlKCgpID0+IHRoaXMucmVmcmVzaCgpKTtcbiAgICB9XG4gICAgdGhpcy5zZXQkID0gc2V0dGluZ3Mubm90aWZ5XG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKFxuICAgICAgICAgIHcgPT4gdGhpcy5hZmZpeCAmJiB3LnR5cGUgPT09ICdsYXlvdXQnICYmIHcubmFtZSA9PT0gJ2NvbGxhcHNlZCcsXG4gICAgICAgICksXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuYWZmaXgudXBkYXRlUG9zaXRpb24oe30pKTtcbiAgICB0aGlzLnJvdXRlckV2ZW50JCA9IHRoaXMucm91dGVyLmV2ZW50c1xuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcigoZXZlbnQ6IFJvdXRlckV2ZW50KSA9PiBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAoZXZlbnQ6IFJvdXRlckV2ZW50KSA9PiB7XG4gICAgICAgICAgdGhpcy5fbWVudXMgPSBudWxsO1xuICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgICAgICB9XG4gICAgICApO1xuICB9XG5cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLnNldFRpdGxlKCkuZ2VuQnJlYWRjcnVtYigpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5CcmVhZGNydW1iKCkge1xuICAgIGlmICh0aGlzLmJyZWFkY3J1bWIgfHwgIXRoaXMuYXV0b0JyZWFkY3J1bWIgfHwgdGhpcy5tZW51cy5sZW5ndGggPD0gMCkge1xuICAgICAgdGhpcy5wYXRocyA9IFtdO1xuICAgICAgcmV0dXJuIDtcbiAgICB9XG4gICAgY29uc3QgcGF0aHM6IGFueVtdID0gW107XG4gICAgdGhpcy5tZW51cy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaWYgKHR5cGVvZiBpdGVtLmhpZGVJbkJyZWFkY3J1bWIgIT09ICd1bmRlZmluZWQnICYmIGl0ZW0uaGlkZUluQnJlYWRjcnVtYilcbiAgICAgICAgcmV0dXJuO1xuICAgICAgbGV0IHRpdGxlID0gaXRlbS50ZXh0O1xuICAgICAgaWYgKGl0ZW0uaTE4biAmJiB0aGlzLmkxOG5TcnYpIHRpdGxlID0gdGhpcy5pMThuU3J2LmZhbnlpKGl0ZW0uaTE4bik7XG4gICAgICBwYXRocy5wdXNoKHsgdGl0bGUsIGxpbms6IGl0ZW0ubGluayAmJiBbaXRlbS5saW5rXSB9KTtcbiAgICB9KTtcbiAgICAvLyBhZGQgaG9tZVxuICAgIGlmICh0aGlzLmhvbWUpIHtcbiAgICAgIHBhdGhzLnNwbGljZSgwLCAwLCB7XG4gICAgICAgIHRpdGxlOlxuICAgICAgICAgICh0aGlzLmhvbWVJMThuICYmXG4gICAgICAgICAgICB0aGlzLmkxOG5TcnYgJiZcbiAgICAgICAgICAgIHRoaXMuaTE4blNydi5mYW55aSh0aGlzLmhvbWVJMThuKSkgfHxcbiAgICAgICAgICB0aGlzLmhvbWUsXG4gICAgICAgIGxpbms6IFt0aGlzLmhvbWVMaW5rXSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnBhdGhzID0gcGF0aHM7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcml2YXRlIHNldFRpdGxlKCkge1xuICAgIGlmIChcbiAgICAgIHR5cGVvZiB0aGlzLl90aXRsZSA9PT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgIHR5cGVvZiB0aGlzLl90aXRsZVRwbCA9PT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgIHRoaXMuYXV0b1RpdGxlICYmXG4gICAgICB0aGlzLm1lbnVzLmxlbmd0aCA+IDBcbiAgICApIHtcbiAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLm1lbnVzW3RoaXMubWVudXMubGVuZ3RoIC0gMV07XG4gICAgICBsZXQgdGl0bGUgPSBpdGVtLnRleHQ7XG4gICAgICBpZiAoaXRlbS5pMThuICYmIHRoaXMuaTE4blNydikgdGl0bGUgPSB0aGlzLmkxOG5TcnYuZmFueWkoaXRlbS5pMThuKTtcbiAgICAgIHRoaXMuX3RpdGxlID0gdGl0bGU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3RpdGxlICYmIHRoaXMuc3luY1RpdGxlKSB7XG4gICAgICBpZiAodGhpcy50aXRsZVNydikge1xuICAgICAgICB0aGlzLnRpdGxlU3J2LnNldFRpdGxlKHRoaXMuX3RpdGxlKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnJldXNlU3J2KSB7XG4gICAgICAgIHRoaXMucmV1c2VTcnYudGl0bGUgPSB0aGlzLl90aXRsZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNoZWNrQ29udGVudCgpIHtcbiAgICBpZiAoaXNFbXB0eSh0aGlzLmNvblRwbC5uYXRpdmVFbGVtZW50KSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5jb25UcGwubmF0aXZlRWxlbWVudCwgJ2hpZGRlbicsICcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUodGhpcy5jb25UcGwubmF0aXZlRWxlbWVudCwgJ2hpZGRlbicpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrQ29udGVudCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW5pdGVkKSB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmkxOG4kKSB0aGlzLmkxOG4kLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5zZXQkLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5yb3V0ZXJFdmVudCQudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19