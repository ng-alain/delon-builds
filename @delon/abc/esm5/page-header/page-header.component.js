/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
    // #endregion
    function PageHeaderComponent(cog, settings, renderer, route, menuSrv, i18nSrv, titleSrv, reuseSrv) {
        var _this = this;
        this.renderer = renderer;
        this.route = route;
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
    }
    Object.defineProperty(PageHeaderComponent.prototype, "menus", {
        get: /**
         * @return {?}
         */
        function () {
            if (this._menus) {
                return this._menus;
            }
            this._menus = this.menuSrv.getPathByUrl(this.route.url.split('?')[0], this.recursiveBreadcrumb);
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
        if ((/** @type {?} */ (this)).breadcrumb || !(/** @type {?} */ (this)).autoBreadcrumb || (/** @type {?} */ (this)).menus.length <= 0)
            return;
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
            (/** @type {?} */ (this))._title = title;
        }
        if ((/** @type {?} */ (this))._title && (/** @type {?} */ (this)).syncTitle) {
            if ((/** @type {?} */ (this)).titleSrv) {
                (/** @type {?} */ (this)).titleSrv.setTitle((/** @type {?} */ (this))._title);
            }
            if ((/** @type {?} */ (this)).reuseSrv) {
                (/** @type {?} */ (this)).reuseSrv.title = (/** @type {?} */ (this))._title;
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
        if (this.i18n$)
            this.i18n$.unsubscribe();
        this.set$.unsubscribe();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9wYWdlLWhlYWRlci8iLCJzb3VyY2VzIjpbInBhZ2UtaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFdBQVcsRUFJWCxNQUFNLEVBQ04sUUFBUSxFQUNSLFNBQVMsRUFDVCxVQUFVLEVBRVYsU0FBUyxHQUVWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXhDLE9BQU8sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNqRSxPQUFPLEVBQ0wsV0FBVyxFQUNYLGdCQUFnQixFQUdoQixZQUFZLEVBQ1osZUFBZSxHQUNoQixNQUFNLGNBQWMsQ0FBQztBQUN0QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFdkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFeEQ7SUE2R0UsYUFBYTtJQUViLDZCQUNFLEdBQXFCLEVBQ3JCLFFBQXlCLEVBQ2pCLFFBQW1CLEVBQ25CLEtBQWEsRUFDYixPQUFvQixFQUdwQixPQUF5QixFQUd6QixRQUFzQixFQUd0QixRQUF5QjtRQWRuQyxpQkEyQkM7UUF4QlMsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ2IsWUFBTyxHQUFQLE9BQU8sQ0FBYTtRQUdwQixZQUFPLEdBQVAsT0FBTyxDQUFrQjtRQUd6QixhQUFRLEdBQVIsUUFBUSxDQUFjO1FBR3RCLGFBQVEsR0FBUixRQUFR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QUNJO0lBSW5CO1FBREMsWUFBWSxFQUFFOztzREFDQTtJQUlmO1FBREMsV0FBVyxFQUFFOzsrREFDUztJQVN2QjtRQURDLFlBQVksRUFBRTs7b0VBQ2M7SUFnSS9CLDBCQUFDO0NBQUEsQUE1TkQsSUE0TkM7U0F2TlksbUJBQW1COzs7SUFFOUIscUNBQXVCOztJQUN2QixvQ0FBNEI7O0lBQzVCLG1DQUEyQjs7SUFDM0IscUNBQzJCOztJQUMzQixvQ0FDZ0M7O0lBQ2hDLHFDQUF1Qjs7SUFhdkIscUNBQWU7O0lBQ2Ysd0NBQTRCOztJQVc1QixzQ0FFZ0I7O0lBRWhCLG1DQUVhOztJQUViLG1DQUNhOztJQUViLHVDQUNpQjs7SUFFakIsdUNBQ2lCOzs7OztJQUtqQiw2Q0FFd0I7Ozs7O0lBS3hCLHdDQUVtQjs7Ozs7SUFLbkIsd0NBRW1COztJQUVuQixvQ0FFZTs7SUFFZiw2Q0FFdUI7O0lBRXZCLG9DQUFrQjs7SUFFbEIseUNBQzZCOztJQUU3QixrREFFNkI7O0lBRTdCLG1DQUN1Qjs7SUFFdkIscUNBQ3lCOztJQUV6QixzQ0FDMEI7O0lBRTFCLG9DQUN3Qjs7SUFFeEIsa0NBQ3NCOztJQU9wQix1Q0FBMkI7O0lBQzNCLG9DQUFxQjs7SUFDckIsc0NBQTRCOztJQUM1QixzQ0FFaUM7O0lBQ2pDLHVDQUU4Qjs7SUFDOUIsdUNBRWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIENvbnRlbnRDaGlsZCxcbiAgT25Jbml0LFxuICBPbkNoYW5nZXMsXG4gIEluamVjdCxcbiAgT3B0aW9uYWwsXG4gIFZpZXdDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgUmVuZGVyZXIyLFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE56QWZmaXhDb21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBpc0VtcHR5LCBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHtcbiAgTWVudVNlcnZpY2UsXG4gIEFMQUlOX0kxOE5fVE9LRU4sXG4gIEFsYWluSTE4TlNlcnZpY2UsXG4gIE1lbnUsXG4gIFRpdGxlU2VydmljZSxcbiAgU2V0dGluZ3NTZXJ2aWNlLFxufSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgUmV1c2VUYWJTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL2FiYy9yZXVzZS10YWInO1xuXG5pbXBvcnQgeyBQYWdlSGVhZGVyQ29uZmlnIH0gZnJvbSAnLi9wYWdlLWhlYWRlci5jb25maWcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwYWdlLWhlYWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYWdlLWhlYWRlci5jb21wb25lbnQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBQYWdlSGVhZGVyQ29tcG9uZW50XG4gIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgaW5pdGVkID0gZmFsc2U7XG4gIHByaXZhdGUgaTE4biQ6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBzZXQkOiBTdWJzY3JpcHRpb247XG4gIEBWaWV3Q2hpbGQoJ2NvblRwbCcpXG4gIHByaXZhdGUgY29uVHBsOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdhZmZpeCcpXG4gIHByaXZhdGUgYWZmaXg6IE56QWZmaXhDb21wb25lbnQ7XG4gIHByaXZhdGUgX21lbnVzOiBNZW51W107XG5cbiAgcHJpdmF0ZSBnZXQgbWVudXMoKSB7XG4gICAgaWYgKHRoaXMuX21lbnVzKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbWVudXM7XG4gICAgfVxuICAgIHRoaXMuX21lbnVzID0gdGhpcy5tZW51U3J2LmdldFBhdGhCeVVybCh0aGlzLnJvdXRlLnVybC5zcGxpdCgnPycpWzBdLCB0aGlzLnJlY3Vyc2l2ZUJyZWFkY3J1bWIpO1xuXG4gICAgcmV0dXJuIHRoaXMuX21lbnVzO1xuICB9XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBfdGl0bGU6IHN0cmluZztcbiAgX3RpdGxlVHBsOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBASW5wdXQoKVxuICBzZXQgdGl0bGUodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgdGhpcy5fdGl0bGUgPSBudWxsO1xuICAgICAgdGhpcy5fdGl0bGVUcGwgPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdGl0bGUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKVxuICBASW5wdXRCb29sZWFuKClcbiAgbG9hZGluZyA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIEBJbnB1dEJvb2xlYW4oKVxuICB3aWRlID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgaG9tZTogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIGhvbWVMaW5rOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgaG9tZUkxOG46IHN0cmluZztcblxuICAvKipcbiAgICog6Ieq5Yqo55Sf5oiQ5a+86Iiq77yM5Lul5b2T5YmN6Lev55Sx5LuO5Li76I+c5Y2V5Lit5a6a5L2NXG4gICAqL1xuICBASW5wdXQoKVxuICBASW5wdXRCb29sZWFuKClcbiAgYXV0b0JyZWFkY3J1bWI6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIOiHquWKqOeUn+aIkOagh+mimO+8jOS7peW9k+WJjei3r+eUseS7juS4u+iPnOWNleS4reWumuS9jVxuICAgKi9cbiAgQElucHV0KClcbiAgQElucHV0Qm9vbGVhbigpXG4gIGF1dG9UaXRsZTogYm9vbGVhbjtcblxuICAvKipcbiAgICog5piv5ZCm6Ieq5Yqo5bCG5qCH6aKY5ZCM5q2l6IezIGBUaXRsZVNlcnZpY2Vg44CBYFJldXNlU2VydmljZWAg5LiL77yM5LuFIGB0aXRsZWAg5Li6IGBzdHJpbmdgIOexu+Wei+aXtuacieaViFxuICAgKi9cbiAgQElucHV0KClcbiAgQElucHV0Qm9vbGVhbigpXG4gIHN5bmNUaXRsZTogYm9vbGVhbjtcblxuICBASW5wdXQoKVxuICBASW5wdXRCb29sZWFuKClcbiAgZml4ZWQ6IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgQElucHV0TnVtYmVyKClcbiAgZml4ZWRPZmZzZXRUb3A6IG51bWJlcjtcblxuICBwYXRoczogYW55W10gPSBbXTtcblxuICBASW5wdXQoKVxuICBicmVhZGNydW1iOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBJbnB1dCgpXG4gIEBJbnB1dEJvb2xlYW4oKVxuICByZWN1cnNpdmVCcmVhZGNydW1iOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIGxvZ286IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQElucHV0KClcbiAgYWN0aW9uOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBJbnB1dCgpXG4gIGNvbnRlbnQ6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQElucHV0KClcbiAgZXh0cmE6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQElucHV0KClcbiAgdGFiOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3RvcihcbiAgICBjb2c6IFBhZ2VIZWFkZXJDb25maWcsXG4gICAgc2V0dGluZ3M6IFNldHRpbmdzU2VydmljZSxcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSByb3V0ZTogUm91dGVyLFxuICAgIHByaXZhdGUgbWVudVNydjogTWVudVNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KEFMQUlOX0kxOE5fVE9LRU4pXG4gICAgcHJpdmF0ZSBpMThuU3J2OiBBbGFpbkkxOE5TZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChUaXRsZVNlcnZpY2UpXG4gICAgcHJpdmF0ZSB0aXRsZVNydjogVGl0bGVTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChSZXVzZVRhYlNlcnZpY2UpXG4gICAgcHJpdmF0ZSByZXVzZVNydjogUmV1c2VUYWJTZXJ2aWNlLFxuICApIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvZyk7XG4gICAgaWYgKHRoaXMuaTE4blNydikge1xuICAgICAgdGhpcy5pMThuJCA9IHRoaXMuaTE4blNydi5jaGFuZ2Uuc3Vic2NyaWJlKCgpID0+IHRoaXMucmVmcmVzaCgpKTtcbiAgICB9XG4gICAgdGhpcy5zZXQkID0gc2V0dGluZ3Mubm90aWZ5XG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKFxuICAgICAgICAgIHcgPT4gdGhpcy5hZmZpeCAmJiB3LnR5cGUgPT09ICdsYXlvdXQnICYmIHcubmFtZSA9PT0gJ2NvbGxhcHNlZCcsXG4gICAgICAgICksXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuYWZmaXgudXBkYXRlUG9zaXRpb24oe30pKTtcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5zZXRUaXRsZSgpLmdlbkJyZWFkY3J1bWIoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuQnJlYWRjcnVtYigpIHtcbiAgICBpZiAodGhpcy5icmVhZGNydW1iIHx8ICF0aGlzLmF1dG9CcmVhZGNydW1iIHx8IHRoaXMubWVudXMubGVuZ3RoIDw9IDApXG4gICAgICByZXR1cm47XG4gICAgY29uc3QgcGF0aHM6IGFueVtdID0gW107XG4gICAgdGhpcy5tZW51cy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaWYgKHR5cGVvZiBpdGVtLmhpZGVJbkJyZWFkY3J1bWIgIT09ICd1bmRlZmluZWQnICYmIGl0ZW0uaGlkZUluQnJlYWRjcnVtYilcbiAgICAgICAgcmV0dXJuO1xuICAgICAgbGV0IHRpdGxlID0gaXRlbS50ZXh0O1xuICAgICAgaWYgKGl0ZW0uaTE4biAmJiB0aGlzLmkxOG5TcnYpIHRpdGxlID0gdGhpcy5pMThuU3J2LmZhbnlpKGl0ZW0uaTE4bik7XG4gICAgICBwYXRocy5wdXNoKHsgdGl0bGUsIGxpbms6IGl0ZW0ubGluayAmJiBbaXRlbS5saW5rXSB9KTtcbiAgICB9KTtcbiAgICAvLyBhZGQgaG9tZVxuICAgIGlmICh0aGlzLmhvbWUpIHtcbiAgICAgIHBhdGhzLnNwbGljZSgwLCAwLCB7XG4gICAgICAgIHRpdGxlOlxuICAgICAgICAgICh0aGlzLmhvbWVJMThuICYmXG4gICAgICAgICAgICB0aGlzLmkxOG5TcnYgJiZcbiAgICAgICAgICAgIHRoaXMuaTE4blNydi5mYW55aSh0aGlzLmhvbWVJMThuKSkgfHxcbiAgICAgICAgICB0aGlzLmhvbWUsXG4gICAgICAgIGxpbms6IFt0aGlzLmhvbWVMaW5rXSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnBhdGhzID0gcGF0aHM7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcml2YXRlIHNldFRpdGxlKCkge1xuICAgIGlmIChcbiAgICAgIHR5cGVvZiB0aGlzLl90aXRsZSA9PT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgIHR5cGVvZiB0aGlzLl90aXRsZVRwbCA9PT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgIHRoaXMuYXV0b1RpdGxlICYmXG4gICAgICB0aGlzLm1lbnVzLmxlbmd0aCA+IDBcbiAgICApIHtcbiAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLm1lbnVzW3RoaXMubWVudXMubGVuZ3RoIC0gMV07XG4gICAgICBsZXQgdGl0bGUgPSBpdGVtLnRleHQ7XG4gICAgICBpZiAoaXRlbS5pMThuICYmIHRoaXMuaTE4blNydikgdGl0bGUgPSB0aGlzLmkxOG5TcnYuZmFueWkoaXRlbS5pMThuKTtcbiAgICAgIHRoaXMuX3RpdGxlID0gdGl0bGU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3RpdGxlICYmIHRoaXMuc3luY1RpdGxlKSB7XG4gICAgICBpZiAodGhpcy50aXRsZVNydikge1xuICAgICAgICB0aGlzLnRpdGxlU3J2LnNldFRpdGxlKHRoaXMuX3RpdGxlKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnJldXNlU3J2KSB7XG4gICAgICAgIHRoaXMucmV1c2VTcnYudGl0bGUgPSB0aGlzLl90aXRsZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNoZWNrQ29udGVudCgpIHtcbiAgICBpZiAoaXNFbXB0eSh0aGlzLmNvblRwbC5uYXRpdmVFbGVtZW50KSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5jb25UcGwubmF0aXZlRWxlbWVudCwgJ2hpZGRlbicsICcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUodGhpcy5jb25UcGwubmF0aXZlRWxlbWVudCwgJ2hpZGRlbicpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrQ29udGVudCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW5pdGVkKSB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmkxOG4kKSB0aGlzLmkxOG4kLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5zZXQkLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==