/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, TemplateRef, Inject, Optional, ViewChild, ElementRef, Renderer2, } from '@angular/core';
import { Router } from '@angular/router';
import { NzAffixComponent } from 'ng-zorro-antd';
import { filter } from 'rxjs/operators';
import { isEmpty, InputBoolean, InputNumber } from '@delon/util';
import { MenuService, ALAIN_I18N_TOKEN, TitleService, SettingsService, } from '@delon/theme';
import { ReuseTabService } from '@delon/abc/reuse-tab';
import { PageHeaderConfig } from './page-header.config';
var PageHeaderComponent = /** @class */ (function () {
    // endregion
    function PageHeaderComponent(cog, settings, renderer, route, menuSrv, i18nSrv, titleSrv, reuseSrv) {
        var _this = this;
        this.renderer = renderer;
        this.route = route;
        this.menuSrv = menuSrv;
        this.i18nSrv = i18nSrv;
        this.titleSrv = titleSrv;
        this.reuseSrv = reuseSrv;
        this.inited = false;
        this.paths = [];
        Object.assign(this, cog);
        if (this.i18nSrv) {
            this.i18n$ = this.i18nSrv.change.subscribe(function () { return _this.refresh(); });
        }
        this.set$ = settings.notify
            .pipe(filter(function (w) { return _this.affix && w.type === 'layout' && w.name === 'collapsed'; }))
            .subscribe(function () { return _this.affix.updatePosition({}); });
    }
    Object.defineProperty(PageHeaderComponent.prototype, "menus", {
        get: /**
         * @return {?}
         */
        function () {
            if (this._menus) {
                return this._menus;
            }
            this._menus = this.menuSrv.getPathByUrl(this.route.url.split('?')[0]);
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
        if (this.breadcrumb || !this.autoBreadcrumb || this.menus.length <= 0)
            return;
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
    };
    PageHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'page-header',
                    template: "<nz-affix #affix *ngIf=\"fixed;else phTpl\" [nzOffsetTop]=\"fixedOffsetTop\">\r\n  <ng-template [ngTemplateOutlet]=\"phTpl\"></ng-template>\r\n</nz-affix>\r\n<ng-template #phTpl>\r\n  <div class=\"page-header\">\r\n    <ng-container *ngIf=\"!breadcrumb; else breadcrumb\">\r\n      <nz-breadcrumb *ngIf=\"paths && paths.length > 0\">\r\n        <nz-breadcrumb-item *ngFor=\"let i of paths\">\r\n          <ng-container *ngIf=\"i.link\">\r\n            <a [routerLink]=\"i.link\">{{i.title}}</a>\r\n          </ng-container>\r\n          <ng-container *ngIf=\"!i.link\">{{i.title}}</ng-container>\r\n        </nz-breadcrumb-item>\r\n      </nz-breadcrumb>\r\n    </ng-container>\r\n    <div class=\"page-header__detail\">\r\n      <div *ngIf=\"logo\" class=\"page-header__logo\">\r\n        <ng-template [ngTemplateOutlet]=\"logo\"></ng-template>\r\n      </div>\r\n      <div class=\"page-header__main\">\r\n        <div class=\"page-header__row\">\r\n          <h1 *ngIf=\"_title || _titleTpl\" class=\"page-header__title\">\r\n            <ng-container *ngIf=\"_title; else _titleTpl\">{{_title}}</ng-container>\r\n          </h1>\r\n          <div *ngIf=\"action\" class=\"page-header__action\">\r\n            <ng-template [ngTemplateOutlet]=\"action\"></ng-template>\r\n          </div>\r\n        </div>\r\n        <div class=\"page-header__row\">\r\n          <div class=\"page-header__desc\" (cdkObserveContent)=\"checkContent()\" #conTpl>\r\n            <ng-content></ng-content>\r\n            <ng-template [ngTemplateOutlet]=\"content\"></ng-template>\r\n          </div>\r\n          <div *ngIf=\"extra\" class=\"page-header__extra\">\r\n            <ng-template [ngTemplateOutlet]=\"extra\"></ng-template>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <ng-template [ngTemplateOutlet]=\"tab\"></ng-template>\r\n  </div>\r\n</ng-template>\r\n",
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
        home: [{ type: Input }],
        homeLink: [{ type: Input }],
        homeI18n: [{ type: Input }],
        autoBreadcrumb: [{ type: Input }],
        autoTitle: [{ type: Input }],
        syncTitle: [{ type: Input }],
        fixed: [{ type: Input }],
        fixedOffsetTop: [{ type: Input }],
        breadcrumb: [{ type: Input }],
        logo: [{ type: Input }],
        action: [{ type: Input }],
        content: [{ type: Input }],
        extra: [{ type: Input }],
        tab: [{ type: Input }]
    };
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
    PageHeaderComponent.prototype.route;
    /** @type {?} */
    PageHeaderComponent.prototype.menuSrv;
    /** @type {?} */
    PageHeaderComponent.prototype.i18nSrv;
    /** @type {?} */
    PageHeaderComponent.prototype.titleSrv;
    /** @type {?} */
    PageHeaderComponent.prototype.reuseSrv;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9wYWdlLWhlYWRlci8iLCJzb3VyY2VzIjpbInBhZ2UtaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFdBQVcsRUFJWCxNQUFNLEVBQ04sUUFBUSxFQUNSLFNBQVMsRUFDVCxVQUFVLEVBRVYsU0FBUyxHQUVWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXhDLE9BQU8sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNqRSxPQUFPLEVBQ0wsV0FBVyxFQUNYLGdCQUFnQixFQUdoQixZQUFZLEVBQ1osZUFBZSxHQUNoQixNQUFNLGNBQWMsQ0FBQztBQUN0QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFdkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0lBbUd0RCxZQUFZO0lBRVosNkJBQ0UsR0FBcUIsRUFDckIsUUFBeUIsRUFDakIsVUFDQSxPQUNBLFNBR0EsT0FBeUIsRUFHekIsUUFBc0IsRUFHdEIsUUFBeUI7UUFkbkMsaUJBMkJDO1FBeEJTLGFBQVEsR0FBUixRQUFRO1FBQ1IsVUFBSyxHQUFMLEtBQUs7UUFDTCxZQUFPLEdBQVAsT0FBTztRQUdQLFlBQU8sR0FBUCxPQUFPLENBQWtCO1FBR3pCLGFBQVEsR0FBUixRQUFRLENBQWM7UUFHdEIsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7c0JBMUdsQixLQUFLO3FCQXNFUCxFQUFFO1FBc0NmLE1B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QUFLOzJCQUdMLEtBQUs7aUNBTUwsS0FBSzs0QkFPTCxLQUFLOzRCQU9MLEtBQUs7d0JBSUwsS0FBSztpQ0FJTCxLQUFLOzZCQU1MLEtBQUs7dUJBR0wsS0FBSzt5QkFHTCxLQUFLOzBCQUdMLEtBQUs7d0JBR0wsS0FBSztzQkFHTCxLQUFLOzs7UUExQ0wsWUFBWSxFQUFFOzs7O1FBT2QsWUFBWSxFQUFFOzs7O1FBT2QsWUFBWSxFQUFFOzs7O1FBSWQsWUFBWSxFQUFFOzs7O1FBSWQsV0FBVyxFQUFFOzs7OEJBM0doQjs7U0FzQ2EsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIE9uSW5pdCxcclxuICBPbkNoYW5nZXMsXHJcbiAgSW5qZWN0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIFZpZXdDaGlsZCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIE9uRGVzdHJveSxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTnpBZmZpeENvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgaXNFbXB0eSwgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcclxuaW1wb3J0IHtcclxuICBNZW51U2VydmljZSxcclxuICBBTEFJTl9JMThOX1RPS0VOLFxyXG4gIEFsYWluSTE4TlNlcnZpY2UsXHJcbiAgTWVudSxcclxuICBUaXRsZVNlcnZpY2UsXHJcbiAgU2V0dGluZ3NTZXJ2aWNlLFxyXG59IGZyb20gJ0BkZWxvbi90aGVtZSc7XHJcbmltcG9ydCB7IFJldXNlVGFiU2VydmljZSB9IGZyb20gJ0BkZWxvbi9hYmMvcmV1c2UtdGFiJztcclxuXHJcbmltcG9ydCB7IFBhZ2VIZWFkZXJDb25maWcgfSBmcm9tICcuL3BhZ2UtaGVhZGVyLmNvbmZpZyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BhZ2UtaGVhZGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcGFnZS1oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGFnZUhlYWRlckNvbXBvbmVudFxyXG4gIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSBpbml0ZWQgPSBmYWxzZTtcclxuICBwcml2YXRlIGkxOG4kOiBTdWJzY3JpcHRpb247XHJcbiAgcHJpdmF0ZSBzZXQkOiBTdWJzY3JpcHRpb247XHJcbiAgQFZpZXdDaGlsZCgnY29uVHBsJylcclxuICBwcml2YXRlIGNvblRwbDogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdhZmZpeCcpXHJcbiAgcHJpdmF0ZSBhZmZpeDogTnpBZmZpeENvbXBvbmVudDtcclxuICBwcml2YXRlIF9tZW51czogTWVudVtdO1xyXG5cclxuICBwcml2YXRlIGdldCBtZW51cygpIHtcclxuICAgIGlmICh0aGlzLl9tZW51cykge1xyXG4gICAgICByZXR1cm4gdGhpcy5fbWVudXM7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9tZW51cyA9IHRoaXMubWVudVNydi5nZXRQYXRoQnlVcmwodGhpcy5yb3V0ZS51cmwuc3BsaXQoJz8nKVswXSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX21lbnVzO1xyXG4gIH1cclxuXHJcbiAgLy8gcmVnaW9uIGZpZWxkc1xyXG5cclxuICBfdGl0bGU6IHN0cmluZztcclxuICBfdGl0bGVUcGw6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgQElucHV0KClcclxuICBzZXQgdGl0bGUodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pIHtcclxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XHJcbiAgICAgIHRoaXMuX3RpdGxlID0gbnVsbDtcclxuICAgICAgdGhpcy5fdGl0bGVUcGwgPSB2YWx1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX3RpdGxlID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIGhvbWU6IHN0cmluZztcclxuXHJcbiAgQElucHV0KClcclxuICBob21lTGluazogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGhvbWVJMThuOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIOiHquWKqOeUn+aIkOWvvOiIqu+8jOS7peW9k+WJjei3r+eUseS7juS4u+iPnOWNleS4reWumuS9jVxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgQElucHV0Qm9vbGVhbigpXHJcbiAgYXV0b0JyZWFkY3J1bWI6IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIOiHquWKqOeUn+aIkOagh+mimO+8jOS7peW9k+WJjei3r+eUseS7juS4u+iPnOWNleS4reWumuS9jVxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgQElucHV0Qm9vbGVhbigpXHJcbiAgYXV0b1RpdGxlOiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiDmmK/lkKboh6rliqjlsIbmoIfpopjlkIzmraXoh7MgYFRpdGxlU2VydmljZWDjgIFgUmV1c2VTZXJ2aWNlYCDkuIvvvIzku4UgYHRpdGxlYCDkuLogYHN0cmluZ2Ag57G75Z6L5pe25pyJ5pWIXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBASW5wdXRCb29sZWFuKClcclxuICBzeW5jVGl0bGU6IGJvb2xlYW47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgQElucHV0Qm9vbGVhbigpXHJcbiAgZml4ZWQ6IGJvb2xlYW47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgQElucHV0TnVtYmVyKClcclxuICBmaXhlZE9mZnNldFRvcDogbnVtYmVyO1xyXG5cclxuICBwYXRoczogYW55W10gPSBbXTtcclxuXHJcbiAgQElucHV0KClcclxuICBicmVhZGNydW1iOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGxvZ286IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgYWN0aW9uOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGNvbnRlbnQ6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZXh0cmE6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgdGFiOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICAvLyBlbmRyZWdpb25cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBjb2c6IFBhZ2VIZWFkZXJDb25maWcsXHJcbiAgICBzZXR0aW5nczogU2V0dGluZ3NTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSByb3V0ZTogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSBtZW51U3J2OiBNZW51U2VydmljZSxcclxuICAgIEBPcHRpb25hbCgpXHJcbiAgICBASW5qZWN0KEFMQUlOX0kxOE5fVE9LRU4pXHJcbiAgICBwcml2YXRlIGkxOG5TcnY6IEFsYWluSTE4TlNlcnZpY2UsXHJcbiAgICBAT3B0aW9uYWwoKVxyXG4gICAgQEluamVjdChUaXRsZVNlcnZpY2UpXHJcbiAgICBwcml2YXRlIHRpdGxlU3J2OiBUaXRsZVNlcnZpY2UsXHJcbiAgICBAT3B0aW9uYWwoKVxyXG4gICAgQEluamVjdChSZXVzZVRhYlNlcnZpY2UpXHJcbiAgICBwcml2YXRlIHJldXNlU3J2OiBSZXVzZVRhYlNlcnZpY2UsXHJcbiAgKSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvZyk7XHJcbiAgICBpZiAodGhpcy5pMThuU3J2KSB7XHJcbiAgICAgIHRoaXMuaTE4biQgPSB0aGlzLmkxOG5TcnYuY2hhbmdlLnN1YnNjcmliZSgoKSA9PiB0aGlzLnJlZnJlc2goKSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldCQgPSBzZXR0aW5ncy5ub3RpZnlcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgZmlsdGVyKFxyXG4gICAgICAgICAgdyA9PiB0aGlzLmFmZml4ICYmIHcudHlwZSA9PT0gJ2xheW91dCcgJiYgdy5uYW1lID09PSAnY29sbGFwc2VkJyxcclxuICAgICAgICApLFxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5hZmZpeC51cGRhdGVQb3NpdGlvbih7fSkpO1xyXG4gIH1cclxuXHJcbiAgcmVmcmVzaCgpIHtcclxuICAgIHRoaXMuc2V0VGl0bGUoKS5nZW5CcmVhZGNydW1iKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdlbkJyZWFkY3J1bWIoKSB7XHJcbiAgICBpZiAodGhpcy5icmVhZGNydW1iIHx8ICF0aGlzLmF1dG9CcmVhZGNydW1iIHx8IHRoaXMubWVudXMubGVuZ3RoIDw9IDApXHJcbiAgICAgIHJldHVybjtcclxuICAgIGNvbnN0IHBhdGhzOiBhbnlbXSA9IFtdO1xyXG4gICAgdGhpcy5tZW51cy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICBpZiAodHlwZW9mIGl0ZW0uaGlkZUluQnJlYWRjcnVtYiAhPT0gJ3VuZGVmaW5lZCcgJiYgaXRlbS5oaWRlSW5CcmVhZGNydW1iKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgbGV0IHRpdGxlID0gaXRlbS50ZXh0O1xyXG4gICAgICBpZiAoaXRlbS5pMThuICYmIHRoaXMuaTE4blNydikgdGl0bGUgPSB0aGlzLmkxOG5TcnYuZmFueWkoaXRlbS5pMThuKTtcclxuICAgICAgcGF0aHMucHVzaCh7IHRpdGxlLCBsaW5rOiBpdGVtLmxpbmsgJiYgW2l0ZW0ubGlua10gfSk7XHJcbiAgICB9KTtcclxuICAgIC8vIGFkZCBob21lXHJcbiAgICBpZiAodGhpcy5ob21lKSB7XHJcbiAgICAgIHBhdGhzLnNwbGljZSgwLCAwLCB7XHJcbiAgICAgICAgdGl0bGU6XHJcbiAgICAgICAgICAodGhpcy5ob21lSTE4biAmJlxyXG4gICAgICAgICAgICB0aGlzLmkxOG5TcnYgJiZcclxuICAgICAgICAgICAgdGhpcy5pMThuU3J2LmZhbnlpKHRoaXMuaG9tZUkxOG4pKSB8fFxyXG4gICAgICAgICAgdGhpcy5ob21lLFxyXG4gICAgICAgIGxpbms6IFt0aGlzLmhvbWVMaW5rXSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnBhdGhzID0gcGF0aHM7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0VGl0bGUoKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIHR5cGVvZiB0aGlzLl90aXRsZSA9PT0gJ3VuZGVmaW5lZCcgJiZcclxuICAgICAgdHlwZW9mIHRoaXMuX3RpdGxlVHBsID09PSAndW5kZWZpbmVkJyAmJlxyXG4gICAgICB0aGlzLmF1dG9UaXRsZSAmJlxyXG4gICAgICB0aGlzLm1lbnVzLmxlbmd0aCA+IDBcclxuICAgICkge1xyXG4gICAgICBjb25zdCBpdGVtID0gdGhpcy5tZW51c1t0aGlzLm1lbnVzLmxlbmd0aCAtIDFdO1xyXG4gICAgICBsZXQgdGl0bGUgPSBpdGVtLnRleHQ7XHJcbiAgICAgIGlmIChpdGVtLmkxOG4gJiYgdGhpcy5pMThuU3J2KSB0aXRsZSA9IHRoaXMuaTE4blNydi5mYW55aShpdGVtLmkxOG4pO1xyXG4gICAgICB0aGlzLl90aXRsZSA9IHRpdGxlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLl90aXRsZSAmJiB0aGlzLnN5bmNUaXRsZSkge1xyXG4gICAgICBpZiAodGhpcy50aXRsZVNydikge1xyXG4gICAgICAgIHRoaXMudGl0bGVTcnYuc2V0VGl0bGUodGhpcy5fdGl0bGUpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLnJldXNlU3J2KSB7XHJcbiAgICAgICAgdGhpcy5yZXVzZVNydi50aXRsZSA9IHRoaXMuX3RpdGxlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBjaGVja0NvbnRlbnQoKSB7XHJcbiAgICBpZiAoaXNFbXB0eSh0aGlzLmNvblRwbC5uYXRpdmVFbGVtZW50KSkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmNvblRwbC5uYXRpdmVFbGVtZW50LCAnaGlkZGVuJywgJycpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUodGhpcy5jb25UcGwubmF0aXZlRWxlbWVudCwgJ2hpZGRlbicpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnJlZnJlc2goKTtcclxuICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2hlY2tDb250ZW50KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmluaXRlZCkgdGhpcy5yZWZyZXNoKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmkxOG4kKSB0aGlzLmkxOG4kLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLnNldCQudW5zdWJzY3JpYmUoKTtcclxuICB9XHJcbn1cclxuIl19