import { Directionality } from '@angular/cdk/bidi';
import { CdkObserveContent } from '@angular/cdk/observers';
import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, Input, Renderer2, TemplateRef, ViewChild, ViewEncapsulation, booleanAttribute, inject, numberAttribute } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { merge, filter } from 'rxjs';
import { ReuseTabService } from '@delon/abc/reuse-tab';
import { ALAIN_I18N_TOKEN, MenuService, TitleService } from '@delon/theme';
import { isEmpty } from '@delon/util/browser';
import { NzAffixComponent } from 'ng-zorro-antd/affix';
import { NzBreadCrumbComponent, NzBreadCrumbItemComponent } from 'ng-zorro-antd/breadcrumb';
import { NzStringTemplateOutletDirective } from 'ng-zorro-antd/core/outlet';
import { NzSkeletonComponent } from 'ng-zorro-antd/skeleton';
import * as i0 from "@angular/core";
import * as i1 from "@delon/theme";
import * as i2 from "@delon/util/config";
import * as i3 from "@angular/cdk/platform";
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
    constructor(settings, configSrv, platform) {
        this.renderer = inject(Renderer2);
        this.router = inject(Router);
        this.cdr = inject(ChangeDetectorRef);
        this.menuSrv = inject(MenuService);
        this.i18nSrv = inject(ALAIN_I18N_TOKEN, { optional: true });
        this.titleSrv = inject(TitleService, { optional: true });
        this.reuseSrv = inject(ReuseTabService, { optional: true });
        this.directionality = inject(Directionality, { optional: true });
        this.destroy$ = inject(DestroyRef);
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
        const obsList = [this.router.events.pipe(filter(ev => ev instanceof NavigationEnd))];
        if (this.menuSrv != null)
            obsList.push(this.menuSrv.change);
        if (this.i18nSrv != null)
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
        this.dir = this.directionality?.value;
        this.directionality?.change.pipe(takeUntilDestroyed(this.destroy$)).subscribe(direction => {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.5", ngImport: i0, type: PageHeaderComponent, deps: [{ token: i1.SettingsService }, { token: i2.AlainConfigService }, { token: i3.Platform }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.0.5", type: PageHeaderComponent, isStandalone: true, selector: "page-header", inputs: { title: "title", titleSub: "titleSub", loading: ["loading", "loading", booleanAttribute], wide: ["wide", "wide", booleanAttribute], home: "home", homeLink: "homeLink", homeI18n: "homeI18n", autoBreadcrumb: ["autoBreadcrumb", "autoBreadcrumb", booleanAttribute], autoTitle: ["autoTitle", "autoTitle", booleanAttribute], syncTitle: ["syncTitle", "syncTitle", booleanAttribute], fixed: ["fixed", "fixed", booleanAttribute], fixedOffsetTop: ["fixedOffsetTop", "fixedOffsetTop", numberAttribute], breadcrumb: "breadcrumb", recursiveBreadcrumb: ["recursiveBreadcrumb", "recursiveBreadcrumb", booleanAttribute], logo: "logo", action: "action", content: "content", extra: "extra", tab: "tab" }, viewQueries: [{ propertyName: "conTpl", first: true, predicate: ["conTpl"], descendants: true }, { propertyName: "affix", first: true, predicate: ["affix"], descendants: true }], exportAs: ["pageHeader"], usesOnChanges: true, ngImport: i0, template: "@if (isBrowser && fixed) {\n  <nz-affix #affix [nzOffsetTop]=\"fixedOffsetTop\">\n    <ng-template [ngTemplateOutlet]=\"phTpl\" />\n  </nz-affix>\n} @else {\n  <ng-template [ngTemplateOutlet]=\"phTpl\" />\n}\n<ng-template #phTpl>\n  <div class=\"page-header\" [class.page-header-rtl]=\"dir === 'rtl'\">\n    <div [class.page-header__wide]=\"wide\">\n      <nz-skeleton\n        [nzLoading]=\"loading\"\n        [nzTitle]=\"false\"\n        [nzActive]=\"true\"\n        [nzParagraph]=\"{ rows: 3 }\"\n        [nzAvatar]=\"{ size: 'large', shape: 'circle' }\"\n        class=\"d-block\"\n      >\n        @if (breadcrumb) {\n          <ng-template [ngTemplateOutlet]=\"breadcrumb\" />\n        } @else {\n          @if (paths && paths.length > 0) {\n            <nz-breadcrumb>\n              @for (i of paths; track $index) {\n                <nz-breadcrumb-item>\n                  @if (i.link) {\n                    <a [routerLink]=\"i.link\">{{ i.title }}</a>\n                  } @else {\n                    {{ i.title }}\n                  }\n                </nz-breadcrumb-item>\n              }\n            </nz-breadcrumb>\n          }\n        }\n        <div class=\"page-header__detail\">\n          @if (logo) {\n            <div class=\"page-header__logo\">\n              <ng-template [ngTemplateOutlet]=\"logo\" />\n            </div>\n          }\n          <div class=\"page-header__main\">\n            <div class=\"page-header__row\">\n              @if (_titleVal || _titleTpl) {\n                <h1 class=\"page-header__title\">\n                  @if (_titleTpl) {\n                    <ng-template [ngTemplateOutlet]=\"_titleTpl\" />\n                  } @else {\n                    {{ _titleVal }}\n                    @if (titleSub) {\n                      <small>\n                        <ng-container *nzStringTemplateOutlet=\"titleSub\">{{ titleSub }}</ng-container>\n                      </small>\n                    }\n                  }\n                </h1>\n              }\n              @if (action) {\n                <div class=\"page-header__action\">\n                  <ng-template [ngTemplateOutlet]=\"action\" />\n                </div>\n              }\n            </div>\n            <div class=\"page-header__row\">\n              <div class=\"page-header__desc\" (cdkObserveContent)=\"checkContent()\" #conTpl>\n                <ng-content />\n                <ng-template [ngTemplateOutlet]=\"content!\" />\n              </div>\n              @if (extra) {\n                <div class=\"page-header__extra\">\n                  <ng-template [ngTemplateOutlet]=\"extra\" />\n                </div>\n              }\n            </div>\n          </div>\n        </div>\n        <ng-template [ngTemplateOutlet]=\"tab!\" />\n      </nz-skeleton>\n    </div>\n  </div>\n</ng-template>\n", dependencies: [{ kind: "component", type: NzAffixComponent, selector: "nz-affix", inputs: ["nzTarget", "nzOffsetTop", "nzOffsetBottom"], outputs: ["nzChange"], exportAs: ["nzAffix"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: NzSkeletonComponent, selector: "nz-skeleton", inputs: ["nzActive", "nzLoading", "nzRound", "nzTitle", "nzAvatar", "nzParagraph"], exportAs: ["nzSkeleton"] }, { kind: "component", type: NzBreadCrumbComponent, selector: "nz-breadcrumb", inputs: ["nzAutoGenerate", "nzSeparator", "nzRouteLabel", "nzRouteLabelFn"], exportAs: ["nzBreadcrumb"] }, { kind: "component", type: NzBreadCrumbItemComponent, selector: "nz-breadcrumb-item", inputs: ["nzOverlay"], exportAs: ["nzBreadcrumbItem"] }, { kind: "directive", type: RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "info", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "directive", type: NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { kind: "directive", type: CdkObserveContent, selector: "[cdkObserveContent]", inputs: ["cdkObserveContentDisabled", "debounce"], outputs: ["cdkObserveContent"], exportAs: ["cdkObserveContent"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.5", ngImport: i0, type: PageHeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'page-header', exportAs: 'pageHeader', preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, standalone: true, imports: [
                        NzAffixComponent,
                        NgTemplateOutlet,
                        NzSkeletonComponent,
                        NzBreadCrumbComponent,
                        NzBreadCrumbItemComponent,
                        RouterLink,
                        NzStringTemplateOutletDirective,
                        CdkObserveContent
                    ], template: "@if (isBrowser && fixed) {\n  <nz-affix #affix [nzOffsetTop]=\"fixedOffsetTop\">\n    <ng-template [ngTemplateOutlet]=\"phTpl\" />\n  </nz-affix>\n} @else {\n  <ng-template [ngTemplateOutlet]=\"phTpl\" />\n}\n<ng-template #phTpl>\n  <div class=\"page-header\" [class.page-header-rtl]=\"dir === 'rtl'\">\n    <div [class.page-header__wide]=\"wide\">\n      <nz-skeleton\n        [nzLoading]=\"loading\"\n        [nzTitle]=\"false\"\n        [nzActive]=\"true\"\n        [nzParagraph]=\"{ rows: 3 }\"\n        [nzAvatar]=\"{ size: 'large', shape: 'circle' }\"\n        class=\"d-block\"\n      >\n        @if (breadcrumb) {\n          <ng-template [ngTemplateOutlet]=\"breadcrumb\" />\n        } @else {\n          @if (paths && paths.length > 0) {\n            <nz-breadcrumb>\n              @for (i of paths; track $index) {\n                <nz-breadcrumb-item>\n                  @if (i.link) {\n                    <a [routerLink]=\"i.link\">{{ i.title }}</a>\n                  } @else {\n                    {{ i.title }}\n                  }\n                </nz-breadcrumb-item>\n              }\n            </nz-breadcrumb>\n          }\n        }\n        <div class=\"page-header__detail\">\n          @if (logo) {\n            <div class=\"page-header__logo\">\n              <ng-template [ngTemplateOutlet]=\"logo\" />\n            </div>\n          }\n          <div class=\"page-header__main\">\n            <div class=\"page-header__row\">\n              @if (_titleVal || _titleTpl) {\n                <h1 class=\"page-header__title\">\n                  @if (_titleTpl) {\n                    <ng-template [ngTemplateOutlet]=\"_titleTpl\" />\n                  } @else {\n                    {{ _titleVal }}\n                    @if (titleSub) {\n                      <small>\n                        <ng-container *nzStringTemplateOutlet=\"titleSub\">{{ titleSub }}</ng-container>\n                      </small>\n                    }\n                  }\n                </h1>\n              }\n              @if (action) {\n                <div class=\"page-header__action\">\n                  <ng-template [ngTemplateOutlet]=\"action\" />\n                </div>\n              }\n            </div>\n            <div class=\"page-header__row\">\n              <div class=\"page-header__desc\" (cdkObserveContent)=\"checkContent()\" #conTpl>\n                <ng-content />\n                <ng-template [ngTemplateOutlet]=\"content!\" />\n              </div>\n              @if (extra) {\n                <div class=\"page-header__extra\">\n                  <ng-template [ngTemplateOutlet]=\"extra\" />\n                </div>\n              }\n            </div>\n          </div>\n        </div>\n        <ng-template [ngTemplateOutlet]=\"tab!\" />\n      </nz-skeleton>\n    </div>\n  </div>\n</ng-template>\n" }]
        }], ctorParameters: () => [{ type: i1.SettingsService }, { type: i2.AlainConfigService }, { type: i3.Platform }], propDecorators: { conTpl: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3BhZ2UtaGVhZGVyL3BhZ2UtaGVhZGVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9wYWdlLWhlYWRlci9wYWdlLWhlYWRlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWEsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFM0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbkQsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFFVixLQUFLLEVBR0wsU0FBUyxFQUNULFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLGdCQUFnQixFQUNoQixNQUFNLEVBQ04sZUFBZSxFQUNoQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUVqRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGdCQUFnQixFQUFRLFdBQVcsRUFBbUIsWUFBWSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUU5QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RixPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUU1RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7QUEwQjdELE1BQU0sT0FBTyxtQkFBbUI7SUFpQjlCLElBQVksS0FBSztRQUNmLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDOUUsQ0FBQztJQVNELElBQ0ksS0FBSyxDQUFDLEtBQXdDO1FBQ2hELElBQUksS0FBSyxZQUFZLFdBQVcsRUFBRSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLENBQUM7YUFBTSxDQUFDO1lBQ04sSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQy9CLENBQUM7SUFDSCxDQUFDO0lBcUJELGFBQWE7SUFFYixZQUFZLFFBQXlCLEVBQUUsU0FBNkIsRUFBRSxRQUFrQjtRQTVEdkUsYUFBUSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM3QixXQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hCLFFBQUcsR0FBRyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNoQyxZQUFPLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzlCLFlBQU8sR0FBRyxNQUFNLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUN2RCxhQUFRLEdBQUcsTUFBTSxDQUFDLFlBQVksRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3BELGFBQVEsR0FBRyxNQUFNLENBQUMsZUFBZSxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDdkQsbUJBQWMsR0FBRyxNQUFNLENBQUMsY0FBYyxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDNUQsYUFBUSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUkvQyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQixRQUFHLEdBQWUsS0FBSyxDQUFDO1FBTXhCLGNBQVMsR0FBa0IsRUFBRSxDQUFDO1FBQzlCLFVBQUssR0FBcUIsRUFBRSxDQUFDO1FBRTdCLGlCQUFpQjtRQUVqQixXQUFNLEdBQWtCLElBQUksQ0FBQztRQUM3QixjQUFTLEdBQWtDLElBQUksQ0FBQztRQWNSLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsU0FBSSxHQUFHLEtBQUssQ0FBQztRQVM1QyxlQUFVLEdBQW1DLElBQUksQ0FBQztRQUVsRCxTQUFJLEdBQThCLElBQUksQ0FBQztRQUN2QyxXQUFNLEdBQThCLElBQUksQ0FBQztRQUN6QyxZQUFPLEdBQThCLElBQUksQ0FBQztRQUMxQyxVQUFLLEdBQThCLElBQUksQ0FBQztRQUN4QyxRQUFHLEdBQThCLElBQUksQ0FBQztRQUs3QyxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUM7UUFDcEMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFO1lBQ25DLElBQUksRUFBRSxJQUFJO1lBQ1YsUUFBUSxFQUFFLEdBQUc7WUFDYixjQUFjLEVBQUUsSUFBSTtZQUNwQixtQkFBbUIsRUFBRSxLQUFLO1lBQzFCLFNBQVMsRUFBRSxJQUFJO1lBQ2YsU0FBUyxFQUFFLElBQUk7WUFDZixLQUFLLEVBQUUsS0FBSztZQUNaLGNBQWMsRUFBRSxFQUFFO1NBQ25CLENBQUMsQ0FBQztRQUNILFFBQVEsQ0FBQyxNQUFNO2FBQ1osSUFBSSxDQUNILGtCQUFrQixFQUFFLEVBQ3BCLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxRQUFRLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxXQUFXLENBQUMsQ0FDekU7YUFDQSxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsRUFBZSxDQUFDLENBQUMsQ0FBQztRQUUvRCxNQUFNLE9BQU8sR0FBaUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxZQUFZLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuSCxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSTtZQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1RCxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSTtZQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1RCxLQUFLLENBQUMsR0FBRyxPQUFPLENBQUM7YUFDZCxJQUFJLENBQ0gsa0JBQWtCLEVBQUUsRUFDcEIsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FDMUI7YUFDQSxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELE9BQU87UUFDTCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRU8sYUFBYTtRQUNuQixJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQ3RFLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1lBQ2hCLE9BQU87UUFDVCxDQUFDO1FBQ0QsTUFBTSxLQUFLLEdBQXFCLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN4QixJQUFJLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixLQUFLLFdBQVcsSUFBSSxJQUFJLENBQUMsZ0JBQWdCO2dCQUFFLE9BQU87WUFDbEYsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUN0QixJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU87Z0JBQUUsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNyRSxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQWEsRUFBRSxDQUFDLENBQUM7UUFDdEUsQ0FBQyxDQUFDLENBQUM7UUFDSCxXQUFXO1FBQ1gsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDZCxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQ2pCLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSTtnQkFDeEYsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVMsQ0FBQzthQUN2QixDQUFDLENBQUM7UUFDTCxDQUFDO1FBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUVPLFFBQVE7UUFDZCxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDN0YsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztZQUMvQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3RCLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQzlCLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEMsQ0FBQztZQUNELElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBTSxDQUFDO1FBQzFCLENBQUM7UUFFRCxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ3JDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDekMsQ0FBQztZQUNELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDbEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUN2QyxDQUFDO1FBQ0gsQ0FBQztRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELFlBQVk7UUFDVixJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUM7WUFDdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3RFLENBQUM7YUFBTSxDQUFDO1lBQ04sSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDckUsQ0FBQztJQUNILENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQztRQUN0QyxJQUFJLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3hGLElBQUksQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2hCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNqQixDQUFDO0lBQ0gsQ0FBQzs4R0F0S1UsbUJBQW1CO2tHQUFuQixtQkFBbUIsK0hBeUNWLGdCQUFnQiwwQkFDaEIsZ0JBQWdCLGtIQUloQixnQkFBZ0IseUNBQ2hCLGdCQUFnQix5Q0FDaEIsZ0JBQWdCLDZCQUNoQixnQkFBZ0Isd0RBQ2hCLGVBQWUsaUdBRWYsZ0JBQWdCLCtVQ2hIdEMsNHhGQWlGQSw0Q0QvQkksZ0JBQWdCLDBKQUNoQixnQkFBZ0Isb0pBQ2hCLG1CQUFtQixzS0FDbkIscUJBQXFCLG1LQUNyQix5QkFBeUIsc0hBQ3pCLFVBQVUsb09BQ1YsK0JBQStCLGdMQUMvQixpQkFBaUI7OzJGQUdSLG1CQUFtQjtrQkFuQi9CLFNBQVM7K0JBQ0UsYUFBYSxZQUNiLFlBQVksdUJBRUQsS0FBSyxtQkFDVCx1QkFBdUIsQ0FBQyxNQUFNLGlCQUNoQyxpQkFBaUIsQ0FBQyxJQUFJLGNBQ3pCLElBQUksV0FDUDt3QkFDUCxnQkFBZ0I7d0JBQ2hCLGdCQUFnQjt3QkFDaEIsbUJBQW1CO3dCQUNuQixxQkFBcUI7d0JBQ3JCLHlCQUF5Qjt3QkFDekIsVUFBVTt3QkFDViwrQkFBK0I7d0JBQy9CLGlCQUFpQjtxQkFDbEI7NElBYStDLE1BQU07c0JBQXJELFNBQVM7dUJBQUMsUUFBUSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtnQkFDUyxLQUFLO3NCQUFuRCxTQUFTO3VCQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7Z0JBaUJqQyxLQUFLO3NCQURSLEtBQUs7Z0JBV0csUUFBUTtzQkFBaEIsS0FBSztnQkFFa0MsT0FBTztzQkFBOUMsS0FBSzt1QkFBQyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRTtnQkFDRSxJQUFJO3NCQUEzQyxLQUFLO3VCQUFDLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFO2dCQUM3QixJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNrQyxjQUFjO3NCQUFyRCxLQUFLO3VCQUFDLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFO2dCQUNFLFNBQVM7c0JBQWhELEtBQUs7dUJBQUMsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUU7Z0JBQ0UsU0FBUztzQkFBaEQsS0FBSzt1QkFBQyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRTtnQkFDRSxLQUFLO3NCQUE1QyxLQUFLO3VCQUFDLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixFQUFFO2dCQUNDLGNBQWM7c0JBQXBELEtBQUs7dUJBQUMsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFO2dCQUM1QixVQUFVO3NCQUFsQixLQUFLO2dCQUNrQyxtQkFBbUI7c0JBQTFELEtBQUs7dUJBQUMsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUU7Z0JBQzdCLElBQUk7c0JBQVosS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxHQUFHO3NCQUFYLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3Rpb24sIERpcmVjdGlvbmFsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHsgQ2RrT2JzZXJ2ZUNvbnRlbnQgfSBmcm9tICdAYW5ndWxhci9jZGsvb2JzZXJ2ZXJzJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7IE5nVGVtcGxhdGVPdXRsZXQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIERlc3Ryb3lSZWYsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgYm9vbGVhbkF0dHJpYnV0ZSxcbiAgaW5qZWN0LFxuICBudW1iZXJBdHRyaWJ1dGVcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0YWtlVW50aWxEZXN0cm95ZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlL3J4anMtaW50ZXJvcCc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uRW5kLCBSb3V0ZXIsIFJvdXRlckxpbmsgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgbWVyZ2UsIGZpbHRlciwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBSZXVzZVRhYlNlcnZpY2UgfSBmcm9tICdAZGVsb24vYWJjL3JldXNlLXRhYic7XG5pbXBvcnQgeyBBTEFJTl9JMThOX1RPS0VOLCBNZW51LCBNZW51U2VydmljZSwgU2V0dGluZ3NTZXJ2aWNlLCBUaXRsZVNlcnZpY2UgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gJ0BkZWxvbi91dGlsL2Jyb3dzZXInO1xuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3V0aWwvY29uZmlnJztcbmltcG9ydCB7IE56QWZmaXhDb21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL2FmZml4JztcbmltcG9ydCB7IE56QnJlYWRDcnVtYkNvbXBvbmVudCwgTnpCcmVhZENydW1iSXRlbUNvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvYnJlYWRjcnVtYic7XG5pbXBvcnQgeyBOelN0cmluZ1RlbXBsYXRlT3V0bGV0RGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL291dGxldCc7XG5pbXBvcnQgdHlwZSB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBOelNrZWxldG9uQ29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC9za2VsZXRvbic7XG5cbmludGVyZmFjZSBQYWdlSGVhZGVyUGF0aCB7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBsaW5rPzogc3RyaW5nW107XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhZ2UtaGVhZGVyJyxcbiAgZXhwb3J0QXM6ICdwYWdlSGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BhZ2UtaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXG4gICAgTnpBZmZpeENvbXBvbmVudCxcbiAgICBOZ1RlbXBsYXRlT3V0bGV0LFxuICAgIE56U2tlbGV0b25Db21wb25lbnQsXG4gICAgTnpCcmVhZENydW1iQ29tcG9uZW50LFxuICAgIE56QnJlYWRDcnVtYkl0ZW1Db21wb25lbnQsXG4gICAgUm91dGVyTGluayxcbiAgICBOelN0cmluZ1RlbXBsYXRlT3V0bGV0RGlyZWN0aXZlLFxuICAgIENka09ic2VydmVDb250ZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgUGFnZUhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0IHtcbiAgcHJpdmF0ZSByZWFkb25seSByZW5kZXJlciA9IGluamVjdChSZW5kZXJlcjIpO1xuICBwcml2YXRlIHJlYWRvbmx5IHJvdXRlciA9IGluamVjdChSb3V0ZXIpO1xuICBwcml2YXRlIHJlYWRvbmx5IGNkciA9IGluamVjdChDaGFuZ2VEZXRlY3RvclJlZik7XG4gIHByaXZhdGUgcmVhZG9ubHkgbWVudVNydiA9IGluamVjdChNZW51U2VydmljZSk7XG4gIHByaXZhdGUgcmVhZG9ubHkgaTE4blNydiA9IGluamVjdChBTEFJTl9JMThOX1RPS0VOLCB7IG9wdGlvbmFsOiB0cnVlIH0pO1xuICBwcml2YXRlIHJlYWRvbmx5IHRpdGxlU3J2ID0gaW5qZWN0KFRpdGxlU2VydmljZSwgeyBvcHRpb25hbDogdHJ1ZSB9KTtcbiAgcHJpdmF0ZSByZWFkb25seSByZXVzZVNydiA9IGluamVjdChSZXVzZVRhYlNlcnZpY2UsIHsgb3B0aW9uYWw6IHRydWUgfSk7XG4gIHByaXZhdGUgcmVhZG9ubHkgZGlyZWN0aW9uYWxpdHkgPSBpbmplY3QoRGlyZWN0aW9uYWxpdHksIHsgb3B0aW9uYWw6IHRydWUgfSk7XG4gIHByaXZhdGUgcmVhZG9ubHkgZGVzdHJveSQgPSBpbmplY3QoRGVzdHJveVJlZik7XG5cbiAgQFZpZXdDaGlsZCgnY29uVHBsJywgeyBzdGF0aWM6IGZhbHNlIH0pIHByaXZhdGUgY29uVHBsITogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnYWZmaXgnLCB7IHN0YXRpYzogZmFsc2UgfSkgcHJpdmF0ZSBhZmZpeCE6IE56QWZmaXhDb21wb25lbnQ7XG4gIGluaXRlZCA9IGZhbHNlO1xuICBpc0Jyb3dzZXIgPSB0cnVlO1xuICBkaXI/OiBEaXJlY3Rpb24gPSAnbHRyJztcblxuICBwcml2YXRlIGdldCBtZW51cygpOiBNZW51W10ge1xuICAgIHJldHVybiB0aGlzLm1lbnVTcnYuZ2V0UGF0aEJ5VXJsKHRoaXMucm91dGVyLnVybCwgdGhpcy5yZWN1cnNpdmVCcmVhZGNydW1iKTtcbiAgfVxuXG4gIF90aXRsZVZhbDogc3RyaW5nIHwgbnVsbCA9ICcnO1xuICBwYXRoczogUGFnZUhlYWRlclBhdGhbXSA9IFtdO1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgX3RpdGxlOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgX3RpdGxlVHBsOiBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpXG4gIHNldCB0aXRsZSh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsKSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIHRoaXMuX3RpdGxlID0gbnVsbDtcbiAgICAgIHRoaXMuX3RpdGxlVHBsID0gdmFsdWU7XG4gICAgICB0aGlzLl90aXRsZVZhbCA9ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl90aXRsZSA9IHZhbHVlO1xuICAgICAgdGhpcy5fdGl0bGVWYWwgPSB0aGlzLl90aXRsZTtcbiAgICB9XG4gIH1cbiAgQElucHV0KCkgdGl0bGVTdWI/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGw7XG5cbiAgQElucHV0KHsgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pIGxvYWRpbmcgPSBmYWxzZTtcbiAgQElucHV0KHsgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pIHdpZGUgPSBmYWxzZTtcbiAgQElucHV0KCkgaG9tZT86IHN0cmluZztcbiAgQElucHV0KCkgaG9tZUxpbms/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGhvbWVJMThuPzogc3RyaW5nO1xuICBASW5wdXQoeyB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGUgfSkgYXV0b0JyZWFkY3J1bWIhOiBib29sZWFuO1xuICBASW5wdXQoeyB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGUgfSkgYXV0b1RpdGxlITogYm9vbGVhbjtcbiAgQElucHV0KHsgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pIHN5bmNUaXRsZSE6IGJvb2xlYW47XG4gIEBJbnB1dCh7IHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZSB9KSBmaXhlZCE6IGJvb2xlYW47XG4gIEBJbnB1dCh7IHRyYW5zZm9ybTogbnVtYmVyQXR0cmlidXRlIH0pIGZpeGVkT2Zmc2V0VG9wITogbnVtYmVyO1xuICBASW5wdXQoKSBicmVhZGNydW1iPzogVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoeyB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGUgfSkgcmVjdXJzaXZlQnJlYWRjcnVtYiE6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGxvZ28/OiBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBhY3Rpb24/OiBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBjb250ZW50PzogVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgZXh0cmE/OiBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSB0YWI/OiBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGwgPSBudWxsO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3RvcihzZXR0aW5nczogU2V0dGluZ3NTZXJ2aWNlLCBjb25maWdTcnY6IEFsYWluQ29uZmlnU2VydmljZSwgcGxhdGZvcm06IFBsYXRmb3JtKSB7XG4gICAgdGhpcy5pc0Jyb3dzZXIgPSBwbGF0Zm9ybS5pc0Jyb3dzZXI7XG4gICAgY29uZmlnU3J2LmF0dGFjaCh0aGlzLCAncGFnZUhlYWRlcicsIHtcbiAgICAgIGhvbWU6ICfpppbpobUnLFxuICAgICAgaG9tZUxpbms6ICcvJyxcbiAgICAgIGF1dG9CcmVhZGNydW1iOiB0cnVlLFxuICAgICAgcmVjdXJzaXZlQnJlYWRjcnVtYjogZmFsc2UsXG4gICAgICBhdXRvVGl0bGU6IHRydWUsXG4gICAgICBzeW5jVGl0bGU6IHRydWUsXG4gICAgICBmaXhlZDogZmFsc2UsXG4gICAgICBmaXhlZE9mZnNldFRvcDogNjRcbiAgICB9KTtcbiAgICBzZXR0aW5ncy5ub3RpZnlcbiAgICAgIC5waXBlKFxuICAgICAgICB0YWtlVW50aWxEZXN0cm95ZWQoKSxcbiAgICAgICAgZmlsdGVyKHcgPT4gdGhpcy5hZmZpeCAmJiB3LnR5cGUgPT09ICdsYXlvdXQnICYmIHcubmFtZSA9PT0gJ2NvbGxhcHNlZCcpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuYWZmaXgudXBkYXRlUG9zaXRpb24oe30gYXMgTnpTYWZlQW55KSk7XG5cbiAgICBjb25zdCBvYnNMaXN0OiBBcnJheTxPYnNlcnZhYmxlPE56U2FmZUFueT4+ID0gW3RoaXMucm91dGVyLmV2ZW50cy5waXBlKGZpbHRlcihldiA9PiBldiBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpKV07XG4gICAgaWYgKHRoaXMubWVudVNydiAhPSBudWxsKSBvYnNMaXN0LnB1c2godGhpcy5tZW51U3J2LmNoYW5nZSk7XG4gICAgaWYgKHRoaXMuaTE4blNydiAhPSBudWxsKSBvYnNMaXN0LnB1c2godGhpcy5pMThuU3J2LmNoYW5nZSk7XG4gICAgbWVyZ2UoLi4ub2JzTGlzdClcbiAgICAgIC5waXBlKFxuICAgICAgICB0YWtlVW50aWxEZXN0cm95ZWQoKSxcbiAgICAgICAgZmlsdGVyKCgpID0+IHRoaXMuaW5pdGVkKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLnJlZnJlc2goKSk7XG4gIH1cblxuICByZWZyZXNoKCk6IHZvaWQge1xuICAgIHRoaXMuc2V0VGl0bGUoKS5nZW5CcmVhZGNydW1iKCk7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5CcmVhZGNydW1iKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmJyZWFkY3J1bWIgfHwgIXRoaXMuYXV0b0JyZWFkY3J1bWIgfHwgdGhpcy5tZW51cy5sZW5ndGggPD0gMCkge1xuICAgICAgdGhpcy5wYXRocyA9IFtdO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBwYXRoczogUGFnZUhlYWRlclBhdGhbXSA9IFtdO1xuICAgIHRoaXMubWVudXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGlmICh0eXBlb2YgaXRlbS5oaWRlSW5CcmVhZGNydW1iICE9PSAndW5kZWZpbmVkJyAmJiBpdGVtLmhpZGVJbkJyZWFkY3J1bWIpIHJldHVybjtcbiAgICAgIGxldCB0aXRsZSA9IGl0ZW0udGV4dDtcbiAgICAgIGlmIChpdGVtLmkxOG4gJiYgdGhpcy5pMThuU3J2KSB0aXRsZSA9IHRoaXMuaTE4blNydi5mYW55aShpdGVtLmkxOG4pO1xuICAgICAgcGF0aHMucHVzaCh7IHRpdGxlLCBsaW5rOiAoaXRlbS5saW5rICYmIFtpdGVtLmxpbmtdKSBhcyBzdHJpbmdbXSB9KTtcbiAgICB9KTtcbiAgICAvLyBhZGQgaG9tZVxuICAgIGlmICh0aGlzLmhvbWUpIHtcbiAgICAgIHBhdGhzLnNwbGljZSgwLCAwLCB7XG4gICAgICAgIHRpdGxlOiAodGhpcy5ob21lSTE4biAmJiB0aGlzLmkxOG5TcnYgJiYgdGhpcy5pMThuU3J2LmZhbnlpKHRoaXMuaG9tZUkxOG4pKSB8fCB0aGlzLmhvbWUsXG4gICAgICAgIGxpbms6IFt0aGlzLmhvbWVMaW5rIV1cbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnBhdGhzID0gcGF0aHM7XG4gIH1cblxuICBwcml2YXRlIHNldFRpdGxlKCk6IHRoaXMge1xuICAgIGlmICh0aGlzLl90aXRsZSA9PSBudWxsICYmIHRoaXMuX3RpdGxlVHBsID09IG51bGwgJiYgdGhpcy5hdXRvVGl0bGUgJiYgdGhpcy5tZW51cy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBpdGVtID0gdGhpcy5tZW51c1t0aGlzLm1lbnVzLmxlbmd0aCAtIDFdO1xuICAgICAgbGV0IHRpdGxlID0gaXRlbS50ZXh0O1xuICAgICAgaWYgKGl0ZW0uaTE4biAmJiB0aGlzLmkxOG5TcnYpIHtcbiAgICAgICAgdGl0bGUgPSB0aGlzLmkxOG5TcnYuZmFueWkoaXRlbS5pMThuKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3RpdGxlVmFsID0gdGl0bGUhO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl90aXRsZVZhbCAmJiB0aGlzLnN5bmNUaXRsZSkge1xuICAgICAgaWYgKHRoaXMudGl0bGVTcnYpIHtcbiAgICAgICAgdGhpcy50aXRsZVNydi5zZXRUaXRsZSh0aGlzLl90aXRsZVZhbCk7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuaW5pdGVkICYmIHRoaXMucmV1c2VTcnYpIHtcbiAgICAgICAgdGhpcy5yZXVzZVNydi50aXRsZSA9IHRoaXMuX3RpdGxlVmFsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY2hlY2tDb250ZW50KCk6IHZvaWQge1xuICAgIGlmIChpc0VtcHR5KHRoaXMuY29uVHBsLm5hdGl2ZUVsZW1lbnQpKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmNvblRwbC5uYXRpdmVFbGVtZW50LCAnaGlkZGVuJywgJycpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLmNvblRwbC5uYXRpdmVFbGVtZW50LCAnaGlkZGVuJyk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5kaXIgPSB0aGlzLmRpcmVjdGlvbmFsaXR5Py52YWx1ZTtcbiAgICB0aGlzLmRpcmVjdGlvbmFsaXR5Py5jaGFuZ2UucGlwZSh0YWtlVW50aWxEZXN0cm95ZWQodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZShkaXJlY3Rpb24gPT4ge1xuICAgICAgdGhpcy5kaXIgPSBkaXJlY3Rpb247XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tDb250ZW50KCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pbml0ZWQpIHtcbiAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgIH1cbiAgfVxufVxuIiwiQGlmIChpc0Jyb3dzZXIgJiYgZml4ZWQpIHtcbiAgPG56LWFmZml4ICNhZmZpeCBbbnpPZmZzZXRUb3BdPVwiZml4ZWRPZmZzZXRUb3BcIj5cbiAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwicGhUcGxcIiAvPlxuICA8L256LWFmZml4PlxufSBAZWxzZSB7XG4gIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJwaFRwbFwiIC8+XG59XG48bmctdGVtcGxhdGUgI3BoVHBsPlxuICA8ZGl2IGNsYXNzPVwicGFnZS1oZWFkZXJcIiBbY2xhc3MucGFnZS1oZWFkZXItcnRsXT1cImRpciA9PT0gJ3J0bCdcIj5cbiAgICA8ZGl2IFtjbGFzcy5wYWdlLWhlYWRlcl9fd2lkZV09XCJ3aWRlXCI+XG4gICAgICA8bnotc2tlbGV0b25cbiAgICAgICAgW256TG9hZGluZ109XCJsb2FkaW5nXCJcbiAgICAgICAgW256VGl0bGVdPVwiZmFsc2VcIlxuICAgICAgICBbbnpBY3RpdmVdPVwidHJ1ZVwiXG4gICAgICAgIFtuelBhcmFncmFwaF09XCJ7IHJvd3M6IDMgfVwiXG4gICAgICAgIFtuekF2YXRhcl09XCJ7IHNpemU6ICdsYXJnZScsIHNoYXBlOiAnY2lyY2xlJyB9XCJcbiAgICAgICAgY2xhc3M9XCJkLWJsb2NrXCJcbiAgICAgID5cbiAgICAgICAgQGlmIChicmVhZGNydW1iKSB7XG4gICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImJyZWFkY3J1bWJcIiAvPlxuICAgICAgICB9IEBlbHNlIHtcbiAgICAgICAgICBAaWYgKHBhdGhzICYmIHBhdGhzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIDxuei1icmVhZGNydW1iPlxuICAgICAgICAgICAgICBAZm9yIChpIG9mIHBhdGhzOyB0cmFjayAkaW5kZXgpIHtcbiAgICAgICAgICAgICAgICA8bnotYnJlYWRjcnVtYi1pdGVtPlxuICAgICAgICAgICAgICAgICAgQGlmIChpLmxpbmspIHtcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiaS5saW5rXCI+e3sgaS50aXRsZSB9fTwvYT5cbiAgICAgICAgICAgICAgICAgIH0gQGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB7eyBpLnRpdGxlIH19XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9uei1icmVhZGNydW1iLWl0ZW0+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvbnotYnJlYWRjcnVtYj5cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2UtaGVhZGVyX19kZXRhaWxcIj5cbiAgICAgICAgICBAaWYgKGxvZ28pIHtcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlLWhlYWRlcl9fbG9nb1wiPlxuICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwibG9nb1wiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB9XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2UtaGVhZGVyX19tYWluXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFnZS1oZWFkZXJfX3Jvd1wiPlxuICAgICAgICAgICAgICBAaWYgKF90aXRsZVZhbCB8fCBfdGl0bGVUcGwpIHtcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJwYWdlLWhlYWRlcl9fdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgIEBpZiAoX3RpdGxlVHBsKSB7XG4gICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJfdGl0bGVUcGxcIiAvPlxuICAgICAgICAgICAgICAgICAgfSBAZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHt7IF90aXRsZVZhbCB9fVxuICAgICAgICAgICAgICAgICAgICBAaWYgKHRpdGxlU3ViKSB7XG4gICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cInRpdGxlU3ViXCI+e3sgdGl0bGVTdWIgfX08L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBAaWYgKGFjdGlvbikge1xuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlLWhlYWRlcl9fYWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYWN0aW9uXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFnZS1oZWFkZXJfX3Jvd1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFnZS1oZWFkZXJfX2Rlc2NcIiAoY2RrT2JzZXJ2ZUNvbnRlbnQpPVwiY2hlY2tDb250ZW50KClcIiAjY29uVHBsPlxuICAgICAgICAgICAgICAgIDxuZy1jb250ZW50IC8+XG4gICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNvbnRlbnQhXCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIEBpZiAoZXh0cmEpIHtcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFnZS1oZWFkZXJfX2V4dHJhXCI+XG4gICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiZXh0cmFcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJ0YWIhXCIgLz5cbiAgICAgIDwvbnotc2tlbGV0b24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==