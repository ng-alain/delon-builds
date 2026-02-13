import { Directionality } from '@angular/cdk/bidi';
import { CdkObserveContent, ObserversModule } from '@angular/cdk/observers';
import { Platform } from '@angular/cdk/platform';
import { NgTemplateOutlet, CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { inject, Renderer2, viewChild, signal, computed, TemplateRef, input, booleanAttribute, numberAttribute, effect, afterNextRender, ViewEncapsulation, ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router, NavigationEnd, RouterLink, RouterModule } from '@angular/router';
import { filter, merge } from 'rxjs';
import { ReuseTabService } from '@delon/abc/reuse-tab';
import { MenuService, ALAIN_I18N_TOKEN, TitleService, SettingsService, DelonLocaleService } from '@delon/theme';
import { isEmpty } from '@delon/util/browser';
import { AlainConfigService } from '@delon/util/config';
import { NzAffixComponent, NzAffixModule } from 'ng-zorro-antd/affix';
import { NzBreadCrumbComponent, NzBreadCrumbItemComponent, NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzStringTemplateOutletDirective, NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzSkeletonComponent, NzSkeletonModule } from 'ng-zorro-antd/skeleton';

class PageHeaderComponent {
    renderer = inject(Renderer2);
    router = inject(Router);
    menuSrv = inject(MenuService);
    i18nSrv = inject(ALAIN_I18N_TOKEN);
    titleSrv = inject(TitleService);
    reuseSrv = inject(ReuseTabService, { optional: true });
    settings = inject(SettingsService);
    cogSrv = inject(AlainConfigService);
    conTpl = viewChild.required('conTpl');
    affix = viewChild(NzAffixComponent, ...(ngDevMode ? [{ debugName: "affix" }] : []));
    isBrowser = inject(Platform).isBrowser;
    dir = inject(Directionality).valueSignal;
    get menus() {
        return this.menuSrv.getPathByUrl(this.router.url, this.recursiveBreadcrumb());
    }
    paths = signal([], ...(ngDevMode ? [{ debugName: "paths" }] : []));
    titleIsTpl = computed(() => this.title() instanceof TemplateRef, ...(ngDevMode ? [{ debugName: "titleIsTpl" }] : []));
    titleText = signal(null, ...(ngDevMode ? [{ debugName: "titleText" }] : []));
    titleSub = input(...(ngDevMode ? [undefined, { debugName: "titleSub" }] : []));
    // #region fields
    title = input(...(ngDevMode ? [undefined, { debugName: "title" }] : []));
    loading = input(false, { ...(ngDevMode ? { debugName: "loading" } : {}), transform: booleanAttribute });
    wide = input(false, { ...(ngDevMode ? { debugName: "wide" } : {}), transform: booleanAttribute });
    home = input(...(ngDevMode ? [undefined, { debugName: "home" }] : []));
    homeLink = input('/', ...(ngDevMode ? [{ debugName: "homeLink" }] : []));
    homeI18n = input(...(ngDevMode ? [undefined, { debugName: "homeI18n" }] : []));
    autoBreadcrumb = input(true, { ...(ngDevMode ? { debugName: "autoBreadcrumb" } : {}), transform: booleanAttribute });
    autoTitle = input(true, { ...(ngDevMode ? { debugName: "autoTitle" } : {}), transform: booleanAttribute });
    syncTitle = input(true, { ...(ngDevMode ? { debugName: "syncTitle" } : {}), transform: booleanAttribute });
    fixed = input(false, { ...(ngDevMode ? { debugName: "fixed" } : {}), transform: booleanAttribute });
    fixedOffsetTop = input(64, { ...(ngDevMode ? { debugName: "fixedOffsetTop" } : {}), transform: numberAttribute });
    breadcrumb = input(null, ...(ngDevMode ? [{ debugName: "breadcrumb" }] : []));
    recursiveBreadcrumb = input(false, { ...(ngDevMode ? { debugName: "recursiveBreadcrumb" } : {}), transform: booleanAttribute });
    logo = input(null, ...(ngDevMode ? [{ debugName: "logo" }] : []));
    action = input(null, ...(ngDevMode ? [{ debugName: "action" }] : []));
    content = input(null, ...(ngDevMode ? [{ debugName: "content" }] : []));
    extra = input(null, ...(ngDevMode ? [{ debugName: "extra" }] : []));
    tab = input(null, ...(ngDevMode ? [{ debugName: "tab" }] : []));
    // #endregion
    locale = inject(DelonLocaleService).getData('pageHeader');
    constructor() {
        this.cogSrv.attach(this, 'pageHeader', {
            home: this.locale.home
        });
        this.settings.notify
            .pipe(takeUntilDestroyed(), filter(w => this.affix() != null && w.type === 'layout' && w.name === 'collapsed'))
            .subscribe(() => this.affix()?.updatePosition({}));
        const obsList = [this.router.events.pipe(filter(ev => ev instanceof NavigationEnd))];
        if (this.menuSrv != null)
            obsList.push(this.menuSrv.change);
        obsList.push(this.i18nSrv.change);
        merge(...obsList)
            .pipe(takeUntilDestroyed())
            .subscribe(() => this.refresh());
        effect(() => this.refresh());
        afterNextRender(() => this.checkContent());
    }
    refresh() {
        let title;
        if (this.title() == null && this.autoTitle() && this.menus.length > 0) {
            const item = this.menus[this.menus.length - 1];
            title = item.text;
            if (item.i18n) {
                title = this.i18nSrv.fanyi(item.i18n);
            }
        }
        else {
            title = this.titleIsTpl() ? '' : this.title();
        }
        this.titleText.set(title);
        // sync title to title & reuse service
        if (title && this.syncTitle()) {
            this.titleSrv.setTitle(title);
            if (this.reuseSrv) {
                this.reuseSrv.title = title;
            }
        }
        // build breadcrumb
        this.genBreadcrumb();
    }
    genBreadcrumb() {
        if (this.breadcrumb() || !this.autoBreadcrumb() || this.menus.length <= 0) {
            this.paths.set([]);
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
        const home = this.home();
        if (home) {
            const homeI18n = this.homeI18n();
            paths.splice(0, 0, {
                title: (homeI18n && this.i18nSrv.fanyi(homeI18n)) ?? home,
                link: [this.homeLink()]
            });
        }
        this.paths.set(paths);
    }
    checkContent() {
        const el = this.conTpl().nativeElement;
        if (isEmpty(el)) {
            this.renderer.setAttribute(el, 'hidden', '');
        }
        else {
            this.renderer.removeAttribute(el, 'hidden');
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.4", ngImport: i0, type: PageHeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "21.1.4", type: PageHeaderComponent, isStandalone: true, selector: "page-header", inputs: { titleSub: { classPropertyName: "titleSub", publicName: "titleSub", isSignal: true, isRequired: false, transformFunction: null }, title: { classPropertyName: "title", publicName: "title", isSignal: true, isRequired: false, transformFunction: null }, loading: { classPropertyName: "loading", publicName: "loading", isSignal: true, isRequired: false, transformFunction: null }, wide: { classPropertyName: "wide", publicName: "wide", isSignal: true, isRequired: false, transformFunction: null }, home: { classPropertyName: "home", publicName: "home", isSignal: true, isRequired: false, transformFunction: null }, homeLink: { classPropertyName: "homeLink", publicName: "homeLink", isSignal: true, isRequired: false, transformFunction: null }, homeI18n: { classPropertyName: "homeI18n", publicName: "homeI18n", isSignal: true, isRequired: false, transformFunction: null }, autoBreadcrumb: { classPropertyName: "autoBreadcrumb", publicName: "autoBreadcrumb", isSignal: true, isRequired: false, transformFunction: null }, autoTitle: { classPropertyName: "autoTitle", publicName: "autoTitle", isSignal: true, isRequired: false, transformFunction: null }, syncTitle: { classPropertyName: "syncTitle", publicName: "syncTitle", isSignal: true, isRequired: false, transformFunction: null }, fixed: { classPropertyName: "fixed", publicName: "fixed", isSignal: true, isRequired: false, transformFunction: null }, fixedOffsetTop: { classPropertyName: "fixedOffsetTop", publicName: "fixedOffsetTop", isSignal: true, isRequired: false, transformFunction: null }, breadcrumb: { classPropertyName: "breadcrumb", publicName: "breadcrumb", isSignal: true, isRequired: false, transformFunction: null }, recursiveBreadcrumb: { classPropertyName: "recursiveBreadcrumb", publicName: "recursiveBreadcrumb", isSignal: true, isRequired: false, transformFunction: null }, logo: { classPropertyName: "logo", publicName: "logo", isSignal: true, isRequired: false, transformFunction: null }, action: { classPropertyName: "action", publicName: "action", isSignal: true, isRequired: false, transformFunction: null }, content: { classPropertyName: "content", publicName: "content", isSignal: true, isRequired: false, transformFunction: null }, extra: { classPropertyName: "extra", publicName: "extra", isSignal: true, isRequired: false, transformFunction: null }, tab: { classPropertyName: "tab", publicName: "tab", isSignal: true, isRequired: false, transformFunction: null } }, viewQueries: [{ propertyName: "conTpl", first: true, predicate: ["conTpl"], descendants: true, isSignal: true }, { propertyName: "affix", first: true, predicate: NzAffixComponent, descendants: true, isSignal: true }], exportAs: ["pageHeader"], ngImport: i0, template: `
    @if (isBrowser && fixed()) {
      <nz-affix #affix [nzOffsetTop]="fixedOffsetTop()">
        <ng-template [ngTemplateOutlet]="phTpl" />
      </nz-affix>
    } @else {
      <ng-template [ngTemplateOutlet]="phTpl" />
    }
    <ng-template #phTpl>
      <div class="page-header" [class.page-header-rtl]="dir() === 'rtl'">
        <div [class.page-header__wide]="wide()">
          <nz-skeleton
            [nzLoading]="loading()"
            [nzTitle]="false"
            [nzActive]="true"
            [nzParagraph]="{ rows: 3 }"
            [nzAvatar]="{ size: 'large', shape: 'circle' }"
            class="d-block"
          >
            @if (breadcrumb()) {
              <ng-template [ngTemplateOutlet]="breadcrumb()" />
            } @else {
              @let list = paths();
              @if (list && list.length > 0) {
                <nz-breadcrumb>
                  @for (i of list; track $index) {
                    <nz-breadcrumb-item>
                      @if (i.link) {
                        <a [routerLink]="i.link">{{ i.title }}</a>
                      } @else {
                        {{ i.title }}
                      }
                    </nz-breadcrumb-item>
                  }
                </nz-breadcrumb>
              }
            }
            <div class="page-header__detail">
              @if (logo()) {
                <div class="page-header__logo">
                  <ng-template [ngTemplateOutlet]="logo()" />
                </div>
              }
              <div class="page-header__main">
                <div class="page-header__row">
                  @if (title() || titleText()) {
                    <h1 class="page-header__title">
                      @if (titleIsTpl()) {
                        <ng-template [ngTemplateOutlet]="$any(title())" />
                      } @else {
                        {{ titleText() }}
                        @let sub = titleSub();
                        @if (sub) {
                          <small>
                            <ng-container *nzStringTemplateOutlet="sub">{{ sub }}</ng-container>
                          </small>
                        }
                      }
                    </h1>
                  }
                  @if (action()) {
                    <div class="page-header__action">
                      <ng-template [ngTemplateOutlet]="action()" />
                    </div>
                  }
                </div>
                <div class="page-header__row">
                  <div class="page-header__desc" (cdkObserveContent)="checkContent()" #conTpl>
                    <ng-content />
                    <ng-template [ngTemplateOutlet]="content()" />
                  </div>
                  @if (extra()) {
                    <div class="page-header__extra">
                      <ng-template [ngTemplateOutlet]="extra()" />
                    </div>
                  }
                </div>
              </div>
            </div>
            <ng-template [ngTemplateOutlet]="tab()" />
          </nz-skeleton>
        </div>
      </div>
    </ng-template>
  `, isInline: true, dependencies: [{ kind: "component", type: NzAffixComponent, selector: "nz-affix", inputs: ["nzTarget", "nzOffsetTop", "nzOffsetBottom"], outputs: ["nzChange"], exportAs: ["nzAffix"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: NzSkeletonComponent, selector: "nz-skeleton", inputs: ["nzActive", "nzLoading", "nzRound", "nzTitle", "nzAvatar", "nzParagraph"], exportAs: ["nzSkeleton"] }, { kind: "component", type: NzBreadCrumbComponent, selector: "nz-breadcrumb", inputs: ["nzAutoGenerate", "nzSeparator", "nzRouteLabel", "nzRouteLabelFn", "nzRouteFn"], exportAs: ["nzBreadcrumb"] }, { kind: "component", type: NzBreadCrumbItemComponent, selector: "nz-breadcrumb-item", inputs: ["nzOverlay"], exportAs: ["nzBreadcrumbItem"] }, { kind: "directive", type: RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "info", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "directive", type: NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { kind: "directive", type: CdkObserveContent, selector: "[cdkObserveContent]", inputs: ["cdkObserveContentDisabled", "debounce"], outputs: ["cdkObserveContent"], exportAs: ["cdkObserveContent"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.4", ngImport: i0, type: PageHeaderComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'page-header',
                    exportAs: 'pageHeader',
                    template: `
    @if (isBrowser && fixed()) {
      <nz-affix #affix [nzOffsetTop]="fixedOffsetTop()">
        <ng-template [ngTemplateOutlet]="phTpl" />
      </nz-affix>
    } @else {
      <ng-template [ngTemplateOutlet]="phTpl" />
    }
    <ng-template #phTpl>
      <div class="page-header" [class.page-header-rtl]="dir() === 'rtl'">
        <div [class.page-header__wide]="wide()">
          <nz-skeleton
            [nzLoading]="loading()"
            [nzTitle]="false"
            [nzActive]="true"
            [nzParagraph]="{ rows: 3 }"
            [nzAvatar]="{ size: 'large', shape: 'circle' }"
            class="d-block"
          >
            @if (breadcrumb()) {
              <ng-template [ngTemplateOutlet]="breadcrumb()" />
            } @else {
              @let list = paths();
              @if (list && list.length > 0) {
                <nz-breadcrumb>
                  @for (i of list; track $index) {
                    <nz-breadcrumb-item>
                      @if (i.link) {
                        <a [routerLink]="i.link">{{ i.title }}</a>
                      } @else {
                        {{ i.title }}
                      }
                    </nz-breadcrumb-item>
                  }
                </nz-breadcrumb>
              }
            }
            <div class="page-header__detail">
              @if (logo()) {
                <div class="page-header__logo">
                  <ng-template [ngTemplateOutlet]="logo()" />
                </div>
              }
              <div class="page-header__main">
                <div class="page-header__row">
                  @if (title() || titleText()) {
                    <h1 class="page-header__title">
                      @if (titleIsTpl()) {
                        <ng-template [ngTemplateOutlet]="$any(title())" />
                      } @else {
                        {{ titleText() }}
                        @let sub = titleSub();
                        @if (sub) {
                          <small>
                            <ng-container *nzStringTemplateOutlet="sub">{{ sub }}</ng-container>
                          </small>
                        }
                      }
                    </h1>
                  }
                  @if (action()) {
                    <div class="page-header__action">
                      <ng-template [ngTemplateOutlet]="action()" />
                    </div>
                  }
                </div>
                <div class="page-header__row">
                  <div class="page-header__desc" (cdkObserveContent)="checkContent()" #conTpl>
                    <ng-content />
                    <ng-template [ngTemplateOutlet]="content()" />
                  </div>
                  @if (extra()) {
                    <div class="page-header__extra">
                      <ng-template [ngTemplateOutlet]="extra()" />
                    </div>
                  }
                </div>
              </div>
            </div>
            <ng-template [ngTemplateOutlet]="tab()" />
          </nz-skeleton>
        </div>
      </div>
    </ng-template>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    imports: [
                        NzAffixComponent,
                        NgTemplateOutlet,
                        NzSkeletonComponent,
                        NzBreadCrumbComponent,
                        NzBreadCrumbItemComponent,
                        RouterLink,
                        NzStringTemplateOutletDirective,
                        CdkObserveContent
                    ]
                }]
        }], ctorParameters: () => [], propDecorators: { conTpl: [{ type: i0.ViewChild, args: ['conTpl', { isSignal: true }] }], affix: [{ type: i0.ViewChild, args: [i0.forwardRef(() => NzAffixComponent), { isSignal: true }] }], titleSub: [{ type: i0.Input, args: [{ isSignal: true, alias: "titleSub", required: false }] }], title: [{ type: i0.Input, args: [{ isSignal: true, alias: "title", required: false }] }], loading: [{ type: i0.Input, args: [{ isSignal: true, alias: "loading", required: false }] }], wide: [{ type: i0.Input, args: [{ isSignal: true, alias: "wide", required: false }] }], home: [{ type: i0.Input, args: [{ isSignal: true, alias: "home", required: false }] }], homeLink: [{ type: i0.Input, args: [{ isSignal: true, alias: "homeLink", required: false }] }], homeI18n: [{ type: i0.Input, args: [{ isSignal: true, alias: "homeI18n", required: false }] }], autoBreadcrumb: [{ type: i0.Input, args: [{ isSignal: true, alias: "autoBreadcrumb", required: false }] }], autoTitle: [{ type: i0.Input, args: [{ isSignal: true, alias: "autoTitle", required: false }] }], syncTitle: [{ type: i0.Input, args: [{ isSignal: true, alias: "syncTitle", required: false }] }], fixed: [{ type: i0.Input, args: [{ isSignal: true, alias: "fixed", required: false }] }], fixedOffsetTop: [{ type: i0.Input, args: [{ isSignal: true, alias: "fixedOffsetTop", required: false }] }], breadcrumb: [{ type: i0.Input, args: [{ isSignal: true, alias: "breadcrumb", required: false }] }], recursiveBreadcrumb: [{ type: i0.Input, args: [{ isSignal: true, alias: "recursiveBreadcrumb", required: false }] }], logo: [{ type: i0.Input, args: [{ isSignal: true, alias: "logo", required: false }] }], action: [{ type: i0.Input, args: [{ isSignal: true, alias: "action", required: false }] }], content: [{ type: i0.Input, args: [{ isSignal: true, alias: "content", required: false }] }], extra: [{ type: i0.Input, args: [{ isSignal: true, alias: "extra", required: false }] }], tab: [{ type: i0.Input, args: [{ isSignal: true, alias: "tab", required: false }] }] } });

const COMPONENTS = [PageHeaderComponent];
class PageHeaderModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "21.1.4", ngImport: i0, type: PageHeaderModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "21.1.4", ngImport: i0, type: PageHeaderModule, imports: [CommonModule,
            RouterModule,
            ObserversModule,
            NzAffixModule,
            NzSkeletonModule,
            NzBreadCrumbModule,
            NzOutletModule, PageHeaderComponent], exports: [PageHeaderComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "21.1.4", ngImport: i0, type: PageHeaderModule, imports: [CommonModule,
            RouterModule,
            ObserversModule,
            NzAffixModule,
            NzSkeletonModule,
            NzBreadCrumbModule,
            NzOutletModule, COMPONENTS] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "21.1.4", ngImport: i0, type: PageHeaderModule, decorators: [{
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
