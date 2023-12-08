import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Inject, Input, Optional, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd } from '@angular/router';
import { merge, filter } from 'rxjs';
import { ReuseTabService } from '@delon/abc/reuse-tab';
import { ALAIN_I18N_TOKEN, TitleService } from '@delon/theme';
import { isEmpty } from '@delon/util/browser';
import { InputBoolean, InputNumber } from '@delon/util/decorator';
import * as i0 from "@angular/core";
import * as i1 from "@delon/theme";
import * as i2 from "@angular/router";
import * as i3 from "@delon/util/config";
import * as i4 from "@angular/cdk/platform";
import * as i5 from "@angular/cdk/bidi";
import * as i6 from "@angular/common";
import * as i7 from "@angular/cdk/observers";
import * as i8 from "ng-zorro-antd/affix";
import * as i9 from "ng-zorro-antd/skeleton";
import * as i10 from "ng-zorro-antd/breadcrumb";
import * as i11 from "ng-zorro-antd/core/outlet";
import * as i12 from "@delon/abc/reuse-tab";
export class PageHeaderComponent {
    get menus() {
        return this.menuSrv.getPathByUrl(this.router.url, this.recursiveBreadcrumb);
    }
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
    // #endregion
    constructor(settings, renderer, router, menuSrv, i18nSrv, titleSrv, reuseSrv, cdr, configSrv, platform, directionality) {
        this.renderer = renderer;
        this.router = router;
        this.menuSrv = menuSrv;
        this.i18nSrv = i18nSrv;
        this.titleSrv = titleSrv;
        this.reuseSrv = reuseSrv;
        this.cdr = cdr;
        this.directionality = directionality;
        this.dir$ = this.directionality.change?.pipe(takeUntilDestroyed());
        this.inited = false;
        this.isBrowser = true;
        this.dir = 'ltr';
        this._titleVal = '';
        this.paths = [];
        // #region fields
        this._title = null;
        this._titleTpl = null;
        this.loading = false;
        this.wide = false;
        this.breadcrumb = null;
        this.logo = null;
        this.action = null;
        this.content = null;
        this.extra = null;
        this.tab = null;
        this.isBrowser = platform.isBrowser;
        configSrv.attach(this, 'pageHeader', {
            home: '首页',
            homeLink: '/',
            autoBreadcrumb: true,
            recursiveBreadcrumb: false,
            autoTitle: true,
            syncTitle: true,
            fixed: false,
            fixedOffsetTop: 64
        });
        settings.notify
            .pipe(takeUntilDestroyed(), filter(w => this.affix && w.type === 'layout' && w.name === 'collapsed'))
            .subscribe(() => this.affix.updatePosition({}));
        merge(menuSrv.change, router.events.pipe(filter(ev => ev instanceof NavigationEnd)), i18nSrv.change)
            .pipe(takeUntilDestroyed(), filter(() => this.inited))
            .subscribe(() => this.refresh());
    }
    refresh() {
        this.setTitle().genBreadcrumb();
        this.cdr.detectChanges();
    }
    genBreadcrumb() {
        if (this.breadcrumb || !this.autoBreadcrumb || this.menus.length <= 0) {
            this.paths = [];
            return;
        }
        const paths = [];
        this.menus.forEach(item => {
            if (typeof item.hideInBreadcrumb !== 'undefined' && item.hideInBreadcrumb)
                return;
            let title = item.text;
            if (item.i18n && this.i18nSrv)
                title = this.i18nSrv.fanyi(item.i18n);
            paths.push({ title, link: (item.link && [item.link]) });
        });
        // add home
        if (this.home) {
            paths.splice(0, 0, {
                title: (this.homeI18n && this.i18nSrv && this.i18nSrv.fanyi(this.homeI18n)) || this.home,
                link: [this.homeLink]
            });
        }
        this.paths = paths;
    }
    setTitle() {
        if (this._title == null && this._titleTpl == null && this.autoTitle && this.menus.length > 0) {
            const item = this.menus[this.menus.length - 1];
            let title = item.text;
            if (item.i18n && this.i18nSrv) {
                title = this.i18nSrv.fanyi(item.i18n);
            }
            this._titleVal = title;
        }
        if (this._titleVal && this.syncTitle) {
            if (this.titleSrv) {
                this.titleSrv.setTitle(this._titleVal);
            }
            if (!this.inited && this.reuseSrv) {
                this.reuseSrv.title = this._titleVal;
            }
        }
        return this;
    }
    checkContent() {
        if (isEmpty(this.conTpl.nativeElement)) {
            this.renderer.setAttribute(this.conTpl.nativeElement, 'hidden', '');
        }
        else {
            this.renderer.removeAttribute(this.conTpl.nativeElement, 'hidden');
        }
    }
    ngOnInit() {
        this.dir = this.directionality.value;
        this.dir$.subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.refresh();
        this.inited = true;
    }
    ngAfterViewInit() {
        this.checkContent();
    }
    ngOnChanges() {
        if (this.inited) {
            this.refresh();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: PageHeaderComponent, deps: [{ token: i1.SettingsService }, { token: i0.Renderer2 }, { token: i2.Router }, { token: i1.MenuService }, { token: ALAIN_I18N_TOKEN, optional: true }, { token: TitleService, optional: true }, { token: ReuseTabService, optional: true }, { token: i0.ChangeDetectorRef }, { token: i3.AlainConfigService }, { token: i4.Platform }, { token: i5.Directionality, optional: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.6", type: PageHeaderComponent, selector: "page-header", inputs: { title: "title", titleSub: "titleSub", loading: "loading", wide: "wide", home: "home", homeLink: "homeLink", homeI18n: "homeI18n", autoBreadcrumb: "autoBreadcrumb", autoTitle: "autoTitle", syncTitle: "syncTitle", fixed: "fixed", fixedOffsetTop: "fixedOffsetTop", breadcrumb: "breadcrumb", recursiveBreadcrumb: "recursiveBreadcrumb", logo: "logo", action: "action", content: "content", extra: "extra", tab: "tab" }, viewQueries: [{ propertyName: "conTpl", first: true, predicate: ["conTpl"], descendants: true }, { propertyName: "affix", first: true, predicate: ["affix"], descendants: true }], exportAs: ["pageHeader"], usesOnChanges: true, ngImport: i0, template: "@if (isBrowser && fixed) {\n  <nz-affix #affix [nzOffsetTop]=\"fixedOffsetTop\">\n    <ng-template [ngTemplateOutlet]=\"phTpl\" />\n  </nz-affix>\n} @else {\n  <ng-template [ngTemplateOutlet]=\"phTpl\" />\n}\n<ng-template #phTpl>\n  <div class=\"page-header\" [class.page-header-rtl]=\"dir === 'rtl'\">\n    <div [ngClass]=\"{ 'page-header__wide': wide }\">\n      <nz-skeleton\n        [nzLoading]=\"loading\"\n        [nzTitle]=\"false\"\n        [nzActive]=\"true\"\n        [nzParagraph]=\"{ rows: 3 }\"\n        [nzAvatar]=\"{ size: 'large', shape: 'circle' }\"\n        class=\"d-block\"\n      >\n        @if (breadcrumb) {\n          <ng-template [ngTemplateOutlet]=\"breadcrumb\" />\n        } @else {\n          @if (paths && paths.length > 0) {\n            <nz-breadcrumb>\n              @for (i of paths; track $index) {\n                <nz-breadcrumb-item>\n                  @if (i.link) {\n                    <a [routerLink]=\"i.link\">{{ i.title }}</a>\n                  } @else {\n                    {{ i.title }}\n                  }\n                </nz-breadcrumb-item>\n              }\n            </nz-breadcrumb>\n          }\n        }\n        <div class=\"page-header__detail\">\n          @if (logo) {\n            <div class=\"page-header__logo\">\n              <ng-template [ngTemplateOutlet]=\"logo\" />\n            </div>\n          }\n          <div class=\"page-header__main\">\n            <div class=\"page-header__row\">\n              @if (_titleVal || _titleTpl) {\n                <h1 class=\"page-header__title\">\n                  @if (_titleTpl) {\n                    <ng-template [ngTemplateOutlet]=\"_titleTpl\" />\n                  } @else {\n                    {{ _titleVal }}\n                    @if (titleSub) {\n                      <small>\n                        <ng-container *nzStringTemplateOutlet=\"titleSub\">{{ titleSub }}</ng-container>\n                      </small>\n                    }\n                  }\n                </h1>\n              }\n              @if (action) {\n                <div class=\"page-header__action\">\n                  <ng-template [ngTemplateOutlet]=\"action\" />\n                </div>\n              }\n            </div>\n            <div class=\"page-header__row\">\n              <div class=\"page-header__desc\" (cdkObserveContent)=\"checkContent()\" #conTpl>\n                <ng-content />\n                <ng-template [ngTemplateOutlet]=\"content!\" />\n              </div>\n              @if (extra) {\n                <div class=\"page-header__extra\">\n                  <ng-template [ngTemplateOutlet]=\"extra\" />\n                </div>\n              }\n            </div>\n          </div>\n        </div>\n        <ng-template [ngTemplateOutlet]=\"tab!\" />\n      </nz-skeleton>\n    </div>\n  </div>\n</ng-template>\n", dependencies: [{ kind: "directive", type: i6.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i6.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i2.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "directive", type: i7.CdkObserveContent, selector: "[cdkObserveContent]", inputs: ["cdkObserveContentDisabled", "debounce"], outputs: ["cdkObserveContent"], exportAs: ["cdkObserveContent"] }, { kind: "component", type: i8.NzAffixComponent, selector: "nz-affix", inputs: ["nzTarget", "nzOffsetTop", "nzOffsetBottom"], outputs: ["nzChange"], exportAs: ["nzAffix"] }, { kind: "component", type: i9.NzSkeletonComponent, selector: "nz-skeleton", inputs: ["nzActive", "nzLoading", "nzRound", "nzTitle", "nzAvatar", "nzParagraph"], exportAs: ["nzSkeleton"] }, { kind: "component", type: i10.NzBreadCrumbComponent, selector: "nz-breadcrumb", inputs: ["nzAutoGenerate", "nzSeparator", "nzRouteLabel", "nzRouteLabelFn"], exportAs: ["nzBreadcrumb"] }, { kind: "component", type: i10.NzBreadCrumbItemComponent, selector: "nz-breadcrumb-item", inputs: ["nzOverlay"], exportAs: ["nzBreadcrumbItem"] }, { kind: "directive", type: i11.NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
__decorate([
    InputBoolean()
], PageHeaderComponent.prototype, "loading", void 0);
__decorate([
    InputBoolean()
], PageHeaderComponent.prototype, "wide", void 0);
__decorate([
    InputBoolean()
], PageHeaderComponent.prototype, "autoBreadcrumb", void 0);
__decorate([
    InputBoolean()
], PageHeaderComponent.prototype, "autoTitle", void 0);
__decorate([
    InputBoolean()
], PageHeaderComponent.prototype, "syncTitle", void 0);
__decorate([
    InputBoolean()
], PageHeaderComponent.prototype, "fixed", void 0);
__decorate([
    InputNumber()
], PageHeaderComponent.prototype, "fixedOffsetTop", void 0);
__decorate([
    InputBoolean()
], PageHeaderComponent.prototype, "recursiveBreadcrumb", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.6", ngImport: i0, type: PageHeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'page-header', exportAs: 'pageHeader', preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "@if (isBrowser && fixed) {\n  <nz-affix #affix [nzOffsetTop]=\"fixedOffsetTop\">\n    <ng-template [ngTemplateOutlet]=\"phTpl\" />\n  </nz-affix>\n} @else {\n  <ng-template [ngTemplateOutlet]=\"phTpl\" />\n}\n<ng-template #phTpl>\n  <div class=\"page-header\" [class.page-header-rtl]=\"dir === 'rtl'\">\n    <div [ngClass]=\"{ 'page-header__wide': wide }\">\n      <nz-skeleton\n        [nzLoading]=\"loading\"\n        [nzTitle]=\"false\"\n        [nzActive]=\"true\"\n        [nzParagraph]=\"{ rows: 3 }\"\n        [nzAvatar]=\"{ size: 'large', shape: 'circle' }\"\n        class=\"d-block\"\n      >\n        @if (breadcrumb) {\n          <ng-template [ngTemplateOutlet]=\"breadcrumb\" />\n        } @else {\n          @if (paths && paths.length > 0) {\n            <nz-breadcrumb>\n              @for (i of paths; track $index) {\n                <nz-breadcrumb-item>\n                  @if (i.link) {\n                    <a [routerLink]=\"i.link\">{{ i.title }}</a>\n                  } @else {\n                    {{ i.title }}\n                  }\n                </nz-breadcrumb-item>\n              }\n            </nz-breadcrumb>\n          }\n        }\n        <div class=\"page-header__detail\">\n          @if (logo) {\n            <div class=\"page-header__logo\">\n              <ng-template [ngTemplateOutlet]=\"logo\" />\n            </div>\n          }\n          <div class=\"page-header__main\">\n            <div class=\"page-header__row\">\n              @if (_titleVal || _titleTpl) {\n                <h1 class=\"page-header__title\">\n                  @if (_titleTpl) {\n                    <ng-template [ngTemplateOutlet]=\"_titleTpl\" />\n                  } @else {\n                    {{ _titleVal }}\n                    @if (titleSub) {\n                      <small>\n                        <ng-container *nzStringTemplateOutlet=\"titleSub\">{{ titleSub }}</ng-container>\n                      </small>\n                    }\n                  }\n                </h1>\n              }\n              @if (action) {\n                <div class=\"page-header__action\">\n                  <ng-template [ngTemplateOutlet]=\"action\" />\n                </div>\n              }\n            </div>\n            <div class=\"page-header__row\">\n              <div class=\"page-header__desc\" (cdkObserveContent)=\"checkContent()\" #conTpl>\n                <ng-content />\n                <ng-template [ngTemplateOutlet]=\"content!\" />\n              </div>\n              @if (extra) {\n                <div class=\"page-header__extra\">\n                  <ng-template [ngTemplateOutlet]=\"extra\" />\n                </div>\n              }\n            </div>\n          </div>\n        </div>\n        <ng-template [ngTemplateOutlet]=\"tab!\" />\n      </nz-skeleton>\n    </div>\n  </div>\n</ng-template>\n" }]
        }], ctorParameters: () => [{ type: i1.SettingsService }, { type: i0.Renderer2 }, { type: i2.Router }, { type: i1.MenuService }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [ALAIN_I18N_TOKEN]
                }] }, { type: i1.TitleService, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [TitleService]
                }] }, { type: i12.ReuseTabService, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [ReuseTabService]
                }] }, { type: i0.ChangeDetectorRef }, { type: i3.AlainConfigService }, { type: i4.Platform }, { type: i5.Directionality, decorators: [{
                    type: Optional
                }] }], propDecorators: { conTpl: [{
                type: ViewChild,
                args: ['conTpl', { static: false }]
            }], affix: [{
                type: ViewChild,
                args: ['affix', { static: false }]
            }], title: [{
                type: Input
            }], titleSub: [{
                type: Input
            }], loading: [{
                type: Input
            }], wide: [{
                type: Input
            }], home: [{
                type: Input
            }], homeLink: [{
                type: Input
            }], homeI18n: [{
                type: Input
            }], autoBreadcrumb: [{
                type: Input
            }], autoTitle: [{
                type: Input
            }], syncTitle: [{
                type: Input
            }], fixed: [{
                type: Input
            }], fixedOffsetTop: [{
                type: Input
            }], breadcrumb: [{
                type: Input
            }], recursiveBreadcrumb: [{
                type: Input
            }], logo: [{
                type: Input
            }], action: [{
                type: Input
            }], content: [{
                type: Input
            }], extra: [{
                type: Input
            }], tab: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3BhZ2UtaGVhZGVyL3BhZ2UtaGVhZGVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9wYWdlLWhlYWRlci9wYWdlLWhlYWRlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsT0FBTyxFQUVMLHVCQUF1QixFQUV2QixTQUFTLEVBRVQsTUFBTSxFQUNOLEtBQUssRUFHTCxRQUFRLEVBRVIsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGFBQWEsRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXJDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN2RCxPQUFPLEVBQW9CLGdCQUFnQixFQUFzQyxZQUFZLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDcEgsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRTlDLE9BQU8sRUFBZ0IsWUFBWSxFQUFFLFdBQVcsRUFBZSxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7Ozs7Ozs7OztBQWlCN0YsTUFBTSxPQUFPLG1CQUFtQjtJQWlCOUIsSUFBWSxLQUFLO1FBQ2YsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBU0QsSUFDSSxLQUFLLENBQUMsS0FBd0M7UUFDaEQsSUFBSSxLQUFLLFlBQVksV0FBVyxF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Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csR0FBRztzQkFBWCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0YWtlVW50aWxEZXN0cm95ZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlL3J4anMtaW50ZXJvcCc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uRW5kLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgbWVyZ2UsIGZpbHRlciB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBSZXVzZVRhYlNlcnZpY2UgfSBmcm9tICdAZGVsb24vYWJjL3JldXNlLXRhYic7XG5pbXBvcnQgeyBBbGFpbkkxOE5TZXJ2aWNlLCBBTEFJTl9JMThOX1RPS0VOLCBNZW51LCBNZW51U2VydmljZSwgU2V0dGluZ3NTZXJ2aWNlLCBUaXRsZVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJ0BkZWxvbi91dGlsL2Jyb3dzZXInO1xuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwvY29uZmlnJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciwgTnVtYmVySW5wdXQgfSBmcm9tICdAZGVsb24vdXRpbC9kZWNvcmF0b3InO1xuaW1wb3J0IHsgTnpBZmZpeENvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvYWZmaXgnO1xuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuXG5pbnRlcmZhY2UgUGFnZUhlYWRlclBhdGgge1xuICB0aXRsZT86IHN0cmluZztcbiAgbGluaz86IHN0cmluZ1tdO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwYWdlLWhlYWRlcicsXG4gIGV4cG9ydEFzOiAncGFnZUhlYWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYWdlLWhlYWRlci5jb21wb25lbnQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBQYWdlSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbG9hZGluZzogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfd2lkZTogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYXV0b0JyZWFkY3J1bWI6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2F1dG9UaXRsZTogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc3luY1RpdGxlOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9maXhlZDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZml4ZWRPZmZzZXRUb3A6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfcmVjdXJzaXZlQnJlYWRjcnVtYjogQm9vbGVhbklucHV0O1xuXG4gIHByaXZhdGUgZGlyJCA9IHRoaXMuZGlyZWN0aW9uYWxpdHkuY2hhbmdlPy5waXBlKHRha2VVbnRpbERlc3Ryb3llZCgpKTtcbiAgQFZpZXdDaGlsZCgnY29uVHBsJywgeyBzdGF0aWM6IGZhbHNlIH0pIHByaXZhdGUgY29uVHBsITogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnYWZmaXgnLCB7IHN0YXRpYzogZmFsc2UgfSkgcHJpdmF0ZSBhZmZpeCE6IE56QWZmaXhDb21wb25lbnQ7XG4gIGluaXRlZCA9IGZhbHNlO1xuICBpc0Jyb3dzZXIgPSB0cnVlO1xuICBkaXI6IERpcmVjdGlvbiA9ICdsdHInO1xuXG4gIHByaXZhdGUgZ2V0IG1lbnVzKCk6IE1lbnVbXSB7XG4gICAgcmV0dXJuIHRoaXMubWVudVNydi5nZXRQYXRoQnlVcmwodGhpcy5yb3V0ZXIudXJsLCB0aGlzLnJlY3Vyc2l2ZUJyZWFkY3J1bWIpO1xuICB9XG5cbiAgX3RpdGxlVmFsOiBzdHJpbmcgfCBudWxsID0gJyc7XG4gIHBhdGhzOiBQYWdlSGVhZGVyUGF0aFtdID0gW107XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBfdGl0bGU6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuICBfdGl0bGVUcGw6IFRlbXBsYXRlUmVmPE56U2FmZUFueT4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KClcbiAgc2V0IHRpdGxlKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGwpIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgdGhpcy5fdGl0bGUgPSBudWxsO1xuICAgICAgdGhpcy5fdGl0bGVUcGwgPSB2YWx1ZTtcbiAgICAgIHRoaXMuX3RpdGxlVmFsID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3RpdGxlID0gdmFsdWU7XG4gICAgICB0aGlzLl90aXRsZVZhbCA9IHRoaXMuX3RpdGxlO1xuICAgIH1cbiAgfVxuICBASW5wdXQoKSB0aXRsZVN1Yj86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbDtcblxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbG9hZGluZyA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgd2lkZSA9IGZhbHNlO1xuICBASW5wdXQoKSBob21lPzogc3RyaW5nO1xuICBASW5wdXQoKSBob21lTGluaz86IHN0cmluZztcbiAgQElucHV0KCkgaG9tZUkxOG4/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBhdXRvQnJlYWRjcnVtYiE6IGJvb2xlYW47XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBhdXRvVGl0bGUhOiBib29sZWFuO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc3luY1RpdGxlITogYm9vbGVhbjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGZpeGVkITogYm9vbGVhbjtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgZml4ZWRPZmZzZXRUb3AhOiBudW1iZXI7XG4gIEBJbnB1dCgpIGJyZWFkY3J1bWI/OiBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSByZWN1cnNpdmVCcmVhZGNydW1iITogYm9vbGVhbjtcbiAgQElucHV0KCkgbG9nbz86IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIGFjdGlvbj86IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIGNvbnRlbnQ/OiBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBleHRyYT86IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIHRhYj86IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbCA9IG51bGw7XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHNldHRpbmdzOiBTZXR0aW5nc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBtZW51U3J2OiBNZW51U2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KEFMQUlOX0kxOE5fVE9LRU4pIHByaXZhdGUgaTE4blNydjogQWxhaW5JMThOU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KFRpdGxlU2VydmljZSkgcHJpdmF0ZSB0aXRsZVNydjogVGl0bGVTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoUmV1c2VUYWJTZXJ2aWNlKSBwcml2YXRlIHJldXNlU3J2OiBSZXVzZVRhYlNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIGNvbmZpZ1NydjogQWxhaW5Db25maWdTZXJ2aWNlLFxuICAgIHBsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eVxuICApIHtcbiAgICB0aGlzLmlzQnJvd3NlciA9IHBsYXRmb3JtLmlzQnJvd3NlcjtcbiAgICBjb25maWdTcnYuYXR0YWNoKHRoaXMsICdwYWdlSGVhZGVyJywge1xuICAgICAgaG9tZTogJ+mmlumhtScsXG4gICAgICBob21lTGluazogJy8nLFxuICAgICAgYXV0b0JyZWFkY3J1bWI6IHRydWUsXG4gICAgICByZWN1cnNpdmVCcmVhZGNydW1iOiBmYWxzZSxcbiAgICAgIGF1dG9UaXRsZTogdHJ1ZSxcbiAgICAgIHN5bmNUaXRsZTogdHJ1ZSxcbiAgICAgIGZpeGVkOiBmYWxzZSxcbiAgICAgIGZpeGVkT2Zmc2V0VG9wOiA2NFxuICAgIH0pO1xuICAgIHNldHRpbmdzLm5vdGlmeVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRha2VVbnRpbERlc3Ryb3llZCgpLFxuICAgICAgICBmaWx0ZXIodyA9PiB0aGlzLmFmZml4ICYmIHcudHlwZSA9PT0gJ2xheW91dCcgJiYgdy5uYW1lID09PSAnY29sbGFwc2VkJylcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5hZmZpeC51cGRhdGVQb3NpdGlvbih7fSBhcyBOelNhZmVBbnkpKTtcblxuICAgIG1lcmdlKG1lbnVTcnYuY2hhbmdlLCByb3V0ZXIuZXZlbnRzLnBpcGUoZmlsdGVyKGV2ID0+IGV2IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCkpLCBpMThuU3J2LmNoYW5nZSlcbiAgICAgIC5waXBlKFxuICAgICAgICB0YWtlVW50aWxEZXN0cm95ZWQoKSxcbiAgICAgICAgZmlsdGVyKCgpID0+IHRoaXMuaW5pdGVkKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLnJlZnJlc2goKSk7XG4gIH1cblxuICByZWZyZXNoKCk6IHZvaWQge1xuICAgIHRoaXMuc2V0VGl0bGUoKS5nZW5CcmVhZGNydW1iKCk7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5CcmVhZGNydW1iKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmJyZWFkY3J1bWIgfHwgIXRoaXMuYXV0b0JyZWFkY3J1bWIgfHwgdGhpcy5tZW51cy5sZW5ndGggPD0gMCkge1xuICAgICAgdGhpcy5wYXRocyA9IFtdO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBwYXRoczogUGFnZUhlYWRlclBhdGhbXSA9IFtdO1xuICAgIHRoaXMubWVudXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGlmICh0eXBlb2YgaXRlbS5oaWRlSW5CcmVhZGNydW1iICE9PSAndW5kZWZpbmVkJyAmJiBpdGVtLmhpZGVJbkJyZWFkY3J1bWIpIHJldHVybjtcbiAgICAgIGxldCB0aXRsZSA9IGl0ZW0udGV4dDtcbiAgICAgIGlmIChpdGVtLmkxOG4gJiYgdGhpcy5pMThuU3J2KSB0aXRsZSA9IHRoaXMuaTE4blNydi5mYW55aShpdGVtLmkxOG4pO1xuICAgICAgcGF0aHMucHVzaCh7IHRpdGxlLCBsaW5rOiAoaXRlbS5saW5rICYmIFtpdGVtLmxpbmtdKSBhcyBzdHJpbmdbXSB9KTtcbiAgICB9KTtcbiAgICAvLyBhZGQgaG9tZVxuICAgIGlmICh0aGlzLmhvbWUpIHtcbiAgICAgIHBhdGhzLnNwbGljZSgwLCAwLCB7XG4gICAgICAgIHRpdGxlOiAodGhpcy5ob21lSTE4biAmJiB0aGlzLmkxOG5TcnYgJiYgdGhpcy5pMThuU3J2LmZhbnlpKHRoaXMuaG9tZUkxOG4pKSB8fCB0aGlzLmhvbWUsXG4gICAgICAgIGxpbms6IFt0aGlzLmhvbWVMaW5rIV1cbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnBhdGhzID0gcGF0aHM7XG4gIH1cblxuICBwcml2YXRlIHNldFRpdGxlKCk6IHRoaXMge1xuICAgIGlmICh0aGlzLl90aXRsZSA9PSBudWxsICYmIHRoaXMuX3RpdGxlVHBsID09IG51bGwgJiYgdGhpcy5hdXRvVGl0bGUgJiYgdGhpcy5tZW51cy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBpdGVtID0gdGhpcy5tZW51c1t0aGlzLm1lbnVzLmxlbmd0aCAtIDFdO1xuICAgICAgbGV0IHRpdGxlID0gaXRlbS50ZXh0O1xuICAgICAgaWYgKGl0ZW0uaTE4biAmJiB0aGlzLmkxOG5TcnYpIHtcbiAgICAgICAgdGl0bGUgPSB0aGlzLmkxOG5TcnYuZmFueWkoaXRlbS5pMThuKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3RpdGxlVmFsID0gdGl0bGUhO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl90aXRsZVZhbCAmJiB0aGlzLnN5bmNUaXRsZSkge1xuICAgICAgaWYgKHRoaXMudGl0bGVTcnYpIHtcbiAgICAgICAgdGhpcy50aXRsZVNydi5zZXRUaXRsZSh0aGlzLl90aXRsZVZhbCk7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuaW5pdGVkICYmIHRoaXMucmV1c2VTcnYpIHtcbiAgICAgICAgdGhpcy5yZXVzZVNydi50aXRsZSA9IHRoaXMuX3RpdGxlVmFsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY2hlY2tDb250ZW50KCk6IHZvaWQge1xuICAgIGlmIChpc0VtcHR5KHRoaXMuY29uVHBsLm5hdGl2ZUVsZW1lbnQpKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmNvblRwbC5uYXRpdmVFbGVtZW50LCAnaGlkZGVuJywgJycpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLmNvblRwbC5uYXRpdmVFbGVtZW50LCAnaGlkZGVuJyk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5kaXIgPSB0aGlzLmRpcmVjdGlvbmFsaXR5LnZhbHVlO1xuICAgIHRoaXMuZGlyJC5zdWJzY3JpYmUoKGRpcmVjdGlvbjogRGlyZWN0aW9uKSA9PiB7XG4gICAgICB0aGlzLmRpciA9IGRpcmVjdGlvbjtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgICB0aGlzLmluaXRlZCA9IHRydWU7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja0NvbnRlbnQoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmluaXRlZCkge1xuICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgfVxuICB9XG59XG4iLCJAaWYgKGlzQnJvd3NlciAmJiBmaXhlZCkge1xuICA8bnotYWZmaXggI2FmZml4IFtuek9mZnNldFRvcF09XCJmaXhlZE9mZnNldFRvcFwiPlxuICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJwaFRwbFwiIC8+XG4gIDwvbnotYWZmaXg+XG59IEBlbHNlIHtcbiAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInBoVHBsXCIgLz5cbn1cbjxuZy10ZW1wbGF0ZSAjcGhUcGw+XG4gIDxkaXYgY2xhc3M9XCJwYWdlLWhlYWRlclwiIFtjbGFzcy5wYWdlLWhlYWRlci1ydGxdPVwiZGlyID09PSAncnRsJ1wiPlxuICAgIDxkaXYgW25nQ2xhc3NdPVwieyAncGFnZS1oZWFkZXJfX3dpZGUnOiB3aWRlIH1cIj5cbiAgICAgIDxuei1za2VsZXRvblxuICAgICAgICBbbnpMb2FkaW5nXT1cImxvYWRpbmdcIlxuICAgICAgICBbbnpUaXRsZV09XCJmYWxzZVwiXG4gICAgICAgIFtuekFjdGl2ZV09XCJ0cnVlXCJcbiAgICAgICAgW256UGFyYWdyYXBoXT1cInsgcm93czogMyB9XCJcbiAgICAgICAgW256QXZhdGFyXT1cInsgc2l6ZTogJ2xhcmdlJywgc2hhcGU6ICdjaXJjbGUnIH1cIlxuICAgICAgICBjbGFzcz1cImQtYmxvY2tcIlxuICAgICAgPlxuICAgICAgICBAaWYgKGJyZWFkY3J1bWIpIHtcbiAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYnJlYWRjcnVtYlwiIC8+XG4gICAgICAgIH0gQGVsc2Uge1xuICAgICAgICAgIEBpZiAocGF0aHMgJiYgcGF0aHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgPG56LWJyZWFkY3J1bWI+XG4gICAgICAgICAgICAgIEBmb3IgKGkgb2YgcGF0aHM7IHRyYWNrICRpbmRleCkge1xuICAgICAgICAgICAgICAgIDxuei1icmVhZGNydW1iLWl0ZW0+XG4gICAgICAgICAgICAgICAgICBAaWYgKGkubGluaykge1xuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XCJpLmxpbmtcIj57eyBpLnRpdGxlIH19PC9hPlxuICAgICAgICAgICAgICAgICAgfSBAZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHt7IGkudGl0bGUgfX1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L256LWJyZWFkY3J1bWItaXRlbT5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9uei1icmVhZGNydW1iPlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFnZS1oZWFkZXJfX2RldGFpbFwiPlxuICAgICAgICAgIEBpZiAobG9nbykge1xuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2UtaGVhZGVyX19sb2dvXCI+XG4gICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJsb2dvXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIH1cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFnZS1oZWFkZXJfX21haW5cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlLWhlYWRlcl9fcm93XCI+XG4gICAgICAgICAgICAgIEBpZiAoX3RpdGxlVmFsIHx8IF90aXRsZVRwbCkge1xuICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cInBhZ2UtaGVhZGVyX190aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgQGlmIChfdGl0bGVUcGwpIHtcbiAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIl90aXRsZVRwbFwiIC8+XG4gICAgICAgICAgICAgICAgICB9IEBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAge3sgX3RpdGxlVmFsIH19XG4gICAgICAgICAgICAgICAgICAgIEBpZiAodGl0bGVTdWIpIHtcbiAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwidGl0bGVTdWJcIj57eyB0aXRsZVN1YiB9fTwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIEBpZiAoYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2UtaGVhZGVyX19hY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJhY3Rpb25cIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlLWhlYWRlcl9fcm93XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlLWhlYWRlcl9fZGVzY1wiIChjZGtPYnNlcnZlQ29udGVudCk9XCJjaGVja0NvbnRlbnQoKVwiICNjb25UcGw+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQgLz5cbiAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiY29udGVudCFcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgQGlmIChleHRyYSkge1xuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlLWhlYWRlcl9fZXh0cmFcIj5cbiAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJleHRyYVwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRhYiFcIiAvPlxuICAgICAgPC9uei1za2VsZXRvbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L25nLXRlbXBsYXRlPlxuIl19