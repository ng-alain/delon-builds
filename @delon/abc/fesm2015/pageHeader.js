import { __decorate, __metadata } from 'tslib';
import { Directionality } from '@angular/cdk/bidi';
import { Platform } from '@angular/cdk/platform';
import * as i0 from '@angular/core';
import { TemplateRef, ɵɵdirectiveInject, Renderer2, ChangeDetectorRef, ɵɵngDeclareComponent, ChangeDetectionStrategy, ViewEncapsulation, ɵsetClassMetadata, Component, Optional, Inject, ViewChild, Input, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NavigationEnd, Router, RouterLinkWithHref, RouterModule } from '@angular/router';
import { ReuseTabService } from '@delon/abc/reuse-tab';
import { SettingsService, MenuService, ALAIN_I18N_TOKEN, TitleService } from '@delon/theme';
import { isEmpty } from '@delon/util/browser';
import { AlainConfigService } from '@delon/util/config';
import { InputBoolean, InputNumber } from '@delon/util/decorator';
import { NzAffixComponent, NzAffixModule } from 'ng-zorro-antd/affix';
import { Subject, merge } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';
import { NgIf, NgTemplateOutlet, NgClass, NgForOf, CommonModule } from '@angular/common';
import { NzSkeletonComponent, NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzBreadCrumbComponent, NzBreadCrumbItemComponent, NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { CdkObserveContent, ObserversModule } from '@angular/cdk/observers';

class PageHeaderComponent {
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
        this.destroy$ = new Subject();
        this.inited = false;
        this.isBrowser = true;
        this.dir = 'ltr';
        this._titleVal = '';
        this.paths = [];
        this.loading = false;
        this.wide = false;
        this.isBrowser = platform.isBrowser;
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
            .pipe(takeUntil(this.destroy$), filter(w => this.affix && w.type === 'layout' && w.name === 'collapsed'))
            .subscribe(() => this.affix.updatePosition({}));
        merge(menuSrv.change.pipe(filter(() => this.inited)), router.events.pipe(filter(ev => ev instanceof NavigationEnd)), i18nSrv.change)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => this.refresh());
    }
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
                link: [this.homeLink],
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
        var _a;
        this.dir = this.directionality.value;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
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
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
/** @nocollapse */ PageHeaderComponent.ɵfac = function PageHeaderComponent_Factory(t) { return new (t || PageHeaderComponent)(ɵɵdirectiveInject(SettingsService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(Router), ɵɵdirectiveInject(MenuService), ɵɵdirectiveInject(ALAIN_I18N_TOKEN, 8), ɵɵdirectiveInject(TitleService, 8), ɵɵdirectiveInject(ReuseTabService, 8), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(AlainConfigService), ɵɵdirectiveInject(Platform), ɵɵdirectiveInject(Directionality, 8)); };
/** @nocollapse */ PageHeaderComponent.ɵcmp = ɵɵngDeclareComponent({ version: "11.1.1", type: PageHeaderComponent, selector: "page-header", inputs: { title: "title", loading: "loading", wide: "wide", home: "home", homeLink: "homeLink", homeI18n: "homeI18n", autoBreadcrumb: "autoBreadcrumb", autoTitle: "autoTitle", syncTitle: "syncTitle", fixed: "fixed", fixedOffsetTop: "fixedOffsetTop", breadcrumb: "breadcrumb", recursiveBreadcrumb: "recursiveBreadcrumb", logo: "logo", action: "action", content: "content", extra: "extra", tab: "tab" }, viewQueries: [{ propertyName: "conTpl", first: true, predicate: ["conTpl"], emitDistinctChangesOnly: false, descendants: true }, { propertyName: "affix", first: true, predicate: ["affix"], emitDistinctChangesOnly: false, descendants: true }], exportAs: ["pageHeader"], usesOnChanges: true, ngImport: i0, template: "<nz-affix #affix *ngIf=\"isBrowser && fixed; else phTpl\" [nzOffsetTop]=\"fixedOffsetTop\">\n  <ng-template [ngTemplateOutlet]=\"phTpl\"></ng-template>\n</nz-affix>\n<ng-template #phTpl>\n  <div class=\"page-header\" [class.page-header-rtl]=\"dir === 'rtl'\">\n    <div [ngClass]=\"{ 'page-header__wide': wide }\">\n      <nz-skeleton [nzLoading]=\"loading\" [nzTitle]=\"false\" [nzActive]=\"true\" [nzParagraph]=\"{ rows: 3 }\" [nzAvatar]=\"{ size: 'large', shape: 'circle' }\">\n        <ng-container *ngIf=\"!breadcrumb; else breadcrumb\">\n          <nz-breadcrumb *ngIf=\"paths && paths.length > 0\">\n            <nz-breadcrumb-item *ngFor=\"let i of paths\">\n              <ng-container *ngIf=\"i.link\">\n                <a [routerLink]=\"i.link\">{{ i.title }}</a>\n              </ng-container>\n              <ng-container *ngIf=\"!i.link\">{{ i.title }}</ng-container>\n            </nz-breadcrumb-item>\n          </nz-breadcrumb>\n        </ng-container>\n        <div class=\"page-header__detail\">\n          <div *ngIf=\"logo\" class=\"page-header__logo\">\n            <ng-template [ngTemplateOutlet]=\"logo\"></ng-template>\n          </div>\n          <div class=\"page-header__main\">\n            <div class=\"page-header__row\">\n              <h1 *ngIf=\"_titleVal || _titleTpl\" class=\"page-header__title\">\n                <ng-container *ngIf=\"_titleVal; else _titleTpl\">{{ _titleVal }}</ng-container>\n              </h1>\n              <div *ngIf=\"action\" class=\"page-header__action\">\n                <ng-template [ngTemplateOutlet]=\"action\"></ng-template>\n              </div>\n            </div>\n            <div class=\"page-header__row\">\n              <div class=\"page-header__desc\" (cdkObserveContent)=\"checkContent()\" #conTpl>\n                <ng-content></ng-content>\n                <ng-template [ngTemplateOutlet]=\"content\"></ng-template>\n              </div>\n              <div *ngIf=\"extra\" class=\"page-header__extra\">\n                <ng-template [ngTemplateOutlet]=\"extra\"></ng-template>\n              </div>\n            </div>\n          </div>\n        </div>\n        <ng-template [ngTemplateOutlet]=\"tab\"></ng-template>\n      </nz-skeleton>\n    </div>\n  </div>\n</ng-template>\n", directives: [{ type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: NzAffixComponent, selector: "nz-affix", inputs: ["nzTarget", "nzOffsetTop", "nzOffsetBottom"], outputs: ["nzChange"], exportAs: ["nzAffix"] }, { type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: NzSkeletonComponent, selector: "nz-skeleton", inputs: ["nzActive", "nzLoading", "nzRound", "nzTitle", "nzAvatar", "nzParagraph"], exportAs: ["nzSkeleton"] }, { type: NzBreadCrumbComponent, selector: "nz-breadcrumb", inputs: ["nzAutoGenerate", "nzSeparator", "nzRouteLabel", "nzRouteLabelFn"], exportAs: ["nzBreadcrumb"] }, { type: NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: NzBreadCrumbItemComponent, selector: "nz-breadcrumb-item", inputs: ["nzOverlay"], exportAs: ["nzBreadcrumbItem"] }, { type: RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["routerLink", "target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo"] }, { type: CdkObserveContent, selector: "[cdkObserveContent]", inputs: ["cdkObserveContentDisabled", "debounce"], outputs: ["cdkObserveContent"], exportAs: ["cdkObserveContent"] }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(PageHeaderComponent, [{
        type: Component,
        args: [{
                selector: 'page-header',
                exportAs: 'pageHeader',
                templateUrl: './page-header.component.html',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: SettingsService }, { type: Renderer2 }, { type: Router }, { type: MenuService }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [ALAIN_I18N_TOKEN]
            }] }, { type: TitleService, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [TitleService]
            }] }, { type: ReuseTabService, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [ReuseTabService]
            }] }, { type: ChangeDetectorRef }, { type: AlainConfigService }, { type: Platform }, { type: Directionality, decorators: [{
                type: Optional
            }] }]; }, { conTpl: [{
            type: ViewChild,
            args: ['conTpl', { static: false }]
        }], affix: [{
            type: ViewChild,
            args: ['affix', { static: false }]
        }], title: [{
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
        }] }); })();

const COMPONENTS = [PageHeaderComponent];
class PageHeaderModule {
}
/** @nocollapse */ PageHeaderModule.ɵmod = ɵɵdefineNgModule({ type: PageHeaderModule });
/** @nocollapse */ PageHeaderModule.ɵinj = ɵɵdefineInjector({ factory: function PageHeaderModule_Factory(t) { return new (t || PageHeaderModule)(); }, imports: [[CommonModule, RouterModule, ObserversModule, NzAffixModule, NzSkeletonModule, NzBreadCrumbModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PageHeaderModule, { declarations: [PageHeaderComponent], imports: [CommonModule, RouterModule, ObserversModule, NzAffixModule, NzSkeletonModule, NzBreadCrumbModule], exports: [PageHeaderComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(PageHeaderModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, RouterModule, ObserversModule, NzAffixModule, NzSkeletonModule, NzBreadCrumbModule],
                declarations: COMPONENTS,
                exports: COMPONENTS,
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { PageHeaderComponent, PageHeaderModule };
//# sourceMappingURL=pageHeader.js.map
