import { Directionality } from '@angular/cdk/bidi';
import { CdkObserveContent, ObserversModule } from '@angular/cdk/observers';
import { Platform } from '@angular/cdk/platform';
import { NgTemplateOutlet, CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { inject, Renderer2, ChangeDetectorRef, TemplateRef, booleanAttribute, numberAttribute, Input, ViewChild, ViewEncapsulation, ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router, NavigationEnd, RouterLink, RouterModule } from '@angular/router';
import { filter, merge } from 'rxjs';
import { ReuseTabService } from '@delon/abc/reuse-tab';
import { MenuService, ALAIN_I18N_TOKEN, TitleService, SettingsService } from '@delon/theme';
import { isEmpty } from '@delon/util/browser';
import { AlainConfigService } from '@delon/util/config';
import { NzAffixComponent, NzAffixModule } from 'ng-zorro-antd/affix';
import { NzBreadCrumbComponent, NzBreadCrumbItemComponent, NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzStringTemplateOutletDirective, NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzSkeletonComponent, NzSkeletonModule } from 'ng-zorro-antd/skeleton';

class PageHeaderComponent {
    renderer = inject(Renderer2);
    router = inject(Router);
    cdr = inject(ChangeDetectorRef);
    menuSrv = inject(MenuService);
    i18nSrv = inject(ALAIN_I18N_TOKEN);
    titleSrv = inject(TitleService);
    reuseSrv = inject(ReuseTabService, { optional: true });
    settings = inject(SettingsService);
    platform = inject(Platform);
    cogSrv = inject(AlainConfigService);
    conTpl;
    affix;
    inited = false;
    isBrowser = true;
    dir = inject(Directionality).valueSignal;
    get menus() {
        return this.menuSrv.getPathByUrl(this.router.url, this.recursiveBreadcrumb);
    }
    _titleVal = '';
    paths = [];
    // #region fields
    _title = null;
    _titleTpl = null;
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
    titleSub;
    loading = false;
    wide = false;
    home;
    homeLink;
    homeI18n;
    autoBreadcrumb;
    autoTitle;
    syncTitle;
    fixed;
    fixedOffsetTop;
    breadcrumb = null;
    recursiveBreadcrumb;
    logo = null;
    action = null;
    content = null;
    extra = null;
    tab = null;
    // #endregion
    constructor() {
        this.isBrowser = this.platform.isBrowser;
        this.cogSrv.attach(this, 'pageHeader', {
            home: '首页',
            homeLink: '/',
            autoBreadcrumb: true,
            recursiveBreadcrumb: false,
            autoTitle: true,
            syncTitle: true,
            fixed: false,
            fixedOffsetTop: 64
        });
        this.settings.notify
            .pipe(takeUntilDestroyed(), filter(w => this.affix && w.type === 'layout' && w.name === 'collapsed'))
            .subscribe(() => this.affix.updatePosition({}));
        const obsList = [this.router.events.pipe(filter(ev => ev instanceof NavigationEnd))];
        if (this.menuSrv != null)
            obsList.push(this.menuSrv.change);
        obsList.push(this.i18nSrv.change);
        merge(...obsList)
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
            if (item.i18n)
                title = this.i18nSrv.fanyi(item.i18n);
            paths.push({ title, link: (item.link && [item.link]) });
        });
        // add home
        if (this.home) {
            paths.splice(0, 0, {
                title: (this.homeI18n && this.i18nSrv.fanyi(this.homeI18n)) || this.home,
                link: [this.homeLink]
            });
        }
        this.paths = paths;
    }
    setTitle() {
        if (this._title == null && this._titleTpl == null && this.autoTitle && this.menus.length > 0) {
            const item = this.menus[this.menus.length - 1];
            let title = item.text;
            if (item.i18n) {
                title = this.i18nSrv.fanyi(item.i18n);
            }
            this._titleVal = title;
        }
        if (this._titleVal && this.syncTitle) {
            this.titleSrv.setTitle(this._titleVal);
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.2", ngImport: i0, type: PageHeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.1.2", type: PageHeaderComponent, isStandalone: true, selector: "page-header", inputs: { title: "title", titleSub: "titleSub", loading: ["loading", "loading", booleanAttribute], wide: ["wide", "wide", booleanAttribute], home: "home", homeLink: "homeLink", homeI18n: "homeI18n", autoBreadcrumb: ["autoBreadcrumb", "autoBreadcrumb", booleanAttribute], autoTitle: ["autoTitle", "autoTitle", booleanAttribute], syncTitle: ["syncTitle", "syncTitle", booleanAttribute], fixed: ["fixed", "fixed", booleanAttribute], fixedOffsetTop: ["fixedOffsetTop", "fixedOffsetTop", numberAttribute], breadcrumb: "breadcrumb", recursiveBreadcrumb: ["recursiveBreadcrumb", "recursiveBreadcrumb", booleanAttribute], logo: "logo", action: "action", content: "content", extra: "extra", tab: "tab" }, viewQueries: [{ propertyName: "conTpl", first: true, predicate: ["conTpl"], descendants: true }, { propertyName: "affix", first: true, predicate: ["affix"], descendants: true }], exportAs: ["pageHeader"], usesOnChanges: true, ngImport: i0, template: "@if (isBrowser && fixed) {\n  <nz-affix #affix [nzOffsetTop]=\"fixedOffsetTop\">\n    <ng-template [ngTemplateOutlet]=\"phTpl\" />\n  </nz-affix>\n} @else {\n  <ng-template [ngTemplateOutlet]=\"phTpl\" />\n}\n<ng-template #phTpl>\n  <div class=\"page-header\" [class.page-header-rtl]=\"dir() === 'rtl'\">\n    <div [class.page-header__wide]=\"wide\">\n      <nz-skeleton\n        [nzLoading]=\"loading\"\n        [nzTitle]=\"false\"\n        [nzActive]=\"true\"\n        [nzParagraph]=\"{ rows: 3 }\"\n        [nzAvatar]=\"{ size: 'large', shape: 'circle' }\"\n        class=\"d-block\"\n      >\n        @if (breadcrumb) {\n          <ng-template [ngTemplateOutlet]=\"breadcrumb\" />\n        } @else {\n          @if (paths && paths.length > 0) {\n            <nz-breadcrumb>\n              @for (i of paths; track $index) {\n                <nz-breadcrumb-item>\n                  @if (i.link) {\n                    <a [routerLink]=\"i.link\">{{ i.title }}</a>\n                  } @else {\n                    {{ i.title }}\n                  }\n                </nz-breadcrumb-item>\n              }\n            </nz-breadcrumb>\n          }\n        }\n        <div class=\"page-header__detail\">\n          @if (logo) {\n            <div class=\"page-header__logo\">\n              <ng-template [ngTemplateOutlet]=\"logo\" />\n            </div>\n          }\n          <div class=\"page-header__main\">\n            <div class=\"page-header__row\">\n              @if (_titleVal || _titleTpl) {\n                <h1 class=\"page-header__title\">\n                  @if (_titleTpl) {\n                    <ng-template [ngTemplateOutlet]=\"_titleTpl\" />\n                  } @else {\n                    {{ _titleVal }}\n                    @if (titleSub) {\n                      <small>\n                        <ng-container *nzStringTemplateOutlet=\"titleSub\">{{ titleSub }}</ng-container>\n                      </small>\n                    }\n                  }\n                </h1>\n              }\n              @if (action) {\n                <div class=\"page-header__action\">\n                  <ng-template [ngTemplateOutlet]=\"action\" />\n                </div>\n              }\n            </div>\n            <div class=\"page-header__row\">\n              <div class=\"page-header__desc\" (cdkObserveContent)=\"checkContent()\" #conTpl>\n                <ng-content />\n                <ng-template [ngTemplateOutlet]=\"content!\" />\n              </div>\n              @if (extra) {\n                <div class=\"page-header__extra\">\n                  <ng-template [ngTemplateOutlet]=\"extra\" />\n                </div>\n              }\n            </div>\n          </div>\n        </div>\n        <ng-template [ngTemplateOutlet]=\"tab!\" />\n      </nz-skeleton>\n    </div>\n  </div>\n</ng-template>\n", dependencies: [{ kind: "component", type: NzAffixComponent, selector: "nz-affix", inputs: ["nzTarget", "nzOffsetTop", "nzOffsetBottom"], outputs: ["nzChange"], exportAs: ["nzAffix"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: NzSkeletonComponent, selector: "nz-skeleton", inputs: ["nzActive", "nzLoading", "nzRound", "nzTitle", "nzAvatar", "nzParagraph"], exportAs: ["nzSkeleton"] }, { kind: "component", type: NzBreadCrumbComponent, selector: "nz-breadcrumb", inputs: ["nzAutoGenerate", "nzSeparator", "nzRouteLabel", "nzRouteLabelFn", "nzRouteFn"], exportAs: ["nzBreadcrumb"] }, { kind: "component", type: NzBreadCrumbItemComponent, selector: "nz-breadcrumb-item", inputs: ["nzOverlay"], exportAs: ["nzBreadcrumbItem"] }, { kind: "directive", type: RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "info", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "directive", type: NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { kind: "directive", type: CdkObserveContent, selector: "[cdkObserveContent]", inputs: ["cdkObserveContentDisabled", "debounce"], outputs: ["cdkObserveContent"], exportAs: ["cdkObserveContent"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.2", ngImport: i0, type: PageHeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'page-header', exportAs: 'pageHeader', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, imports: [
                        NzAffixComponent,
                        NgTemplateOutlet,
                        NzSkeletonComponent,
                        NzBreadCrumbComponent,
                        NzBreadCrumbItemComponent,
                        RouterLink,
                        NzStringTemplateOutletDirective,
                        CdkObserveContent
                    ], template: "@if (isBrowser && fixed) {\n  <nz-affix #affix [nzOffsetTop]=\"fixedOffsetTop\">\n    <ng-template [ngTemplateOutlet]=\"phTpl\" />\n  </nz-affix>\n} @else {\n  <ng-template [ngTemplateOutlet]=\"phTpl\" />\n}\n<ng-template #phTpl>\n  <div class=\"page-header\" [class.page-header-rtl]=\"dir() === 'rtl'\">\n    <div [class.page-header__wide]=\"wide\">\n      <nz-skeleton\n        [nzLoading]=\"loading\"\n        [nzTitle]=\"false\"\n        [nzActive]=\"true\"\n        [nzParagraph]=\"{ rows: 3 }\"\n        [nzAvatar]=\"{ size: 'large', shape: 'circle' }\"\n        class=\"d-block\"\n      >\n        @if (breadcrumb) {\n          <ng-template [ngTemplateOutlet]=\"breadcrumb\" />\n        } @else {\n          @if (paths && paths.length > 0) {\n            <nz-breadcrumb>\n              @for (i of paths; track $index) {\n                <nz-breadcrumb-item>\n                  @if (i.link) {\n                    <a [routerLink]=\"i.link\">{{ i.title }}</a>\n                  } @else {\n                    {{ i.title }}\n                  }\n                </nz-breadcrumb-item>\n              }\n            </nz-breadcrumb>\n          }\n        }\n        <div class=\"page-header__detail\">\n          @if (logo) {\n            <div class=\"page-header__logo\">\n              <ng-template [ngTemplateOutlet]=\"logo\" />\n            </div>\n          }\n          <div class=\"page-header__main\">\n            <div class=\"page-header__row\">\n              @if (_titleVal || _titleTpl) {\n                <h1 class=\"page-header__title\">\n                  @if (_titleTpl) {\n                    <ng-template [ngTemplateOutlet]=\"_titleTpl\" />\n                  } @else {\n                    {{ _titleVal }}\n                    @if (titleSub) {\n                      <small>\n                        <ng-container *nzStringTemplateOutlet=\"titleSub\">{{ titleSub }}</ng-container>\n                      </small>\n                    }\n                  }\n                </h1>\n              }\n              @if (action) {\n                <div class=\"page-header__action\">\n                  <ng-template [ngTemplateOutlet]=\"action\" />\n                </div>\n              }\n            </div>\n            <div class=\"page-header__row\">\n              <div class=\"page-header__desc\" (cdkObserveContent)=\"checkContent()\" #conTpl>\n                <ng-content />\n                <ng-template [ngTemplateOutlet]=\"content!\" />\n              </div>\n              @if (extra) {\n                <div class=\"page-header__extra\">\n                  <ng-template [ngTemplateOutlet]=\"extra\" />\n                </div>\n              }\n            </div>\n          </div>\n        </div>\n        <ng-template [ngTemplateOutlet]=\"tab!\" />\n      </nz-skeleton>\n    </div>\n  </div>\n</ng-template>\n" }]
        }], ctorParameters: () => [], propDecorators: { conTpl: [{
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
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], wide: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], home: [{
                type: Input
            }], homeLink: [{
                type: Input
            }], homeI18n: [{
                type: Input
            }], autoBreadcrumb: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], autoTitle: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], syncTitle: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], fixed: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], fixedOffsetTop: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], breadcrumb: [{
                type: Input
            }], recursiveBreadcrumb: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
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

const COMPONENTS = [PageHeaderComponent];
class PageHeaderModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.1.2", ngImport: i0, type: PageHeaderModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "20.1.2", ngImport: i0, type: PageHeaderModule, imports: [CommonModule,
            RouterModule,
            ObserversModule,
            NzAffixModule,
            NzSkeletonModule,
            NzBreadCrumbModule,
            NzOutletModule, PageHeaderComponent], exports: [PageHeaderComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "20.1.2", ngImport: i0, type: PageHeaderModule, imports: [CommonModule,
            RouterModule,
            ObserversModule,
            NzAffixModule,
            NzSkeletonModule,
            NzBreadCrumbModule,
            NzOutletModule, COMPONENTS] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.2", ngImport: i0, type: PageHeaderModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        RouterModule,
                        ObserversModule,
                        NzAffixModule,
                        NzSkeletonModule,
                        NzBreadCrumbModule,
                        NzOutletModule,
                        ...COMPONENTS
                    ],
                    exports: COMPONENTS
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { PageHeaderComponent, PageHeaderModule };
//# sourceMappingURL=page-header.mjs.map
