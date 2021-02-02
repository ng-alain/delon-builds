import { __decorate, __metadata } from "tslib";
import { Directionality } from '@angular/cdk/bidi';
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Inject, Input, Optional, Renderer2, TemplateRef, ViewChild, ViewEncapsulation, } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ReuseTabService } from '@delon/abc/reuse-tab';
import { ALAIN_I18N_TOKEN, MenuService, SettingsService, TitleService } from '@delon/theme';
import { isEmpty } from '@delon/util/browser';
import { AlainConfigService } from '@delon/util/config';
import { InputBoolean, InputNumber } from '@delon/util/decorator';
import { NzAffixComponent } from 'ng-zorro-antd/affix';
import { merge, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@delon/theme";
import * as i2 from "@angular/router";
import * as i3 from "@delon/util/config";
import * as i4 from "@angular/cdk/platform";
import * as i5 from "@angular/cdk/bidi";
import * as i6 from "@delon/abc/reuse-tab";
import * as i7 from "@angular/common";
import * as i8 from "ng-zorro-antd/affix";
import * as i9 from "ng-zorro-antd/skeleton";
import * as i10 from "ng-zorro-antd/breadcrumb";
import * as i11 from "@angular/cdk/observers";
export class PageHeaderComponent {
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
/** @nocollapse */ PageHeaderComponent.ɵfac = function PageHeaderComponent_Factory(t) { return new (t || PageHeaderComponent)(i0.ɵɵdirectiveInject(i1.SettingsService), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i1.MenuService), i0.ɵɵdirectiveInject(ALAIN_I18N_TOKEN, 8), i0.ɵɵdirectiveInject(TitleService, 8), i0.ɵɵdirectiveInject(ReuseTabService, 8), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i3.AlainConfigService), i0.ɵɵdirectiveInject(i4.Platform), i0.ɵɵdirectiveInject(i5.Directionality, 8)); };
/** @nocollapse */ PageHeaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ version: "11.1.1", type: PageHeaderComponent, selector: "page-header", inputs: { title: "title", loading: "loading", wide: "wide", home: "home", homeLink: "homeLink", homeI18n: "homeI18n", autoBreadcrumb: "autoBreadcrumb", autoTitle: "autoTitle", syncTitle: "syncTitle", fixed: "fixed", fixedOffsetTop: "fixedOffsetTop", breadcrumb: "breadcrumb", recursiveBreadcrumb: "recursiveBreadcrumb", logo: "logo", action: "action", content: "content", extra: "extra", tab: "tab" }, viewQueries: [{ propertyName: "conTpl", first: true, predicate: ["conTpl"], emitDistinctChangesOnly: false, descendants: true }, { propertyName: "affix", first: true, predicate: ["affix"], emitDistinctChangesOnly: false, descendants: true }], exportAs: ["pageHeader"], usesOnChanges: true, ngImport: i0, template: "<nz-affix #affix *ngIf=\"isBrowser && fixed; else phTpl\" [nzOffsetTop]=\"fixedOffsetTop\">\n  <ng-template [ngTemplateOutlet]=\"phTpl\"></ng-template>\n</nz-affix>\n<ng-template #phTpl>\n  <div class=\"page-header\" [class.page-header-rtl]=\"dir === 'rtl'\">\n    <div [ngClass]=\"{ 'page-header__wide': wide }\">\n      <nz-skeleton [nzLoading]=\"loading\" [nzTitle]=\"false\" [nzActive]=\"true\" [nzParagraph]=\"{ rows: 3 }\" [nzAvatar]=\"{ size: 'large', shape: 'circle' }\">\n        <ng-container *ngIf=\"!breadcrumb; else breadcrumb\">\n          <nz-breadcrumb *ngIf=\"paths && paths.length > 0\">\n            <nz-breadcrumb-item *ngFor=\"let i of paths\">\n              <ng-container *ngIf=\"i.link\">\n                <a [routerLink]=\"i.link\">{{ i.title }}</a>\n              </ng-container>\n              <ng-container *ngIf=\"!i.link\">{{ i.title }}</ng-container>\n            </nz-breadcrumb-item>\n          </nz-breadcrumb>\n        </ng-container>\n        <div class=\"page-header__detail\">\n          <div *ngIf=\"logo\" class=\"page-header__logo\">\n            <ng-template [ngTemplateOutlet]=\"logo\"></ng-template>\n          </div>\n          <div class=\"page-header__main\">\n            <div class=\"page-header__row\">\n              <h1 *ngIf=\"_titleVal || _titleTpl\" class=\"page-header__title\">\n                <ng-container *ngIf=\"_titleVal; else _titleTpl\">{{ _titleVal }}</ng-container>\n              </h1>\n              <div *ngIf=\"action\" class=\"page-header__action\">\n                <ng-template [ngTemplateOutlet]=\"action\"></ng-template>\n              </div>\n            </div>\n            <div class=\"page-header__row\">\n              <div class=\"page-header__desc\" (cdkObserveContent)=\"checkContent()\" #conTpl>\n                <ng-content></ng-content>\n                <ng-template [ngTemplateOutlet]=\"content\"></ng-template>\n              </div>\n              <div *ngIf=\"extra\" class=\"page-header__extra\">\n                <ng-template [ngTemplateOutlet]=\"extra\"></ng-template>\n              </div>\n            </div>\n          </div>\n        </div>\n        <ng-template [ngTemplateOutlet]=\"tab\"></ng-template>\n      </nz-skeleton>\n    </div>\n  </div>\n</ng-template>\n", directives: [{ type: i7.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i8.NzAffixComponent, selector: "nz-affix", inputs: ["nzTarget", "nzOffsetTop", "nzOffsetBottom"], outputs: ["nzChange"], exportAs: ["nzAffix"] }, { type: i7.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: i7.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i9.NzSkeletonComponent, selector: "nz-skeleton", inputs: ["nzActive", "nzLoading", "nzRound", "nzTitle", "nzAvatar", "nzParagraph"], exportAs: ["nzSkeleton"] }, { type: i10.NzBreadCrumbComponent, selector: "nz-breadcrumb", inputs: ["nzAutoGenerate", "nzSeparator", "nzRouteLabel", "nzRouteLabelFn"], exportAs: ["nzBreadcrumb"] }, { type: i7.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i10.NzBreadCrumbItemComponent, selector: "nz-breadcrumb-item", inputs: ["nzOverlay"], exportAs: ["nzBreadcrumbItem"] }, { type: i2.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["routerLink", "target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo"] }, { type: i11.CdkObserveContent, selector: "[cdkObserveContent]", inputs: ["cdkObserveContentDisabled", "debounce"], outputs: ["cdkObserveContent"], exportAs: ["cdkObserveContent"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PageHeaderComponent, [{
        type: Component,
        args: [{
                selector: 'page-header',
                exportAs: 'pageHeader',
                templateUrl: './page-header.component.html',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: i1.SettingsService }, { type: i0.Renderer2 }, { type: i2.Router }, { type: i1.MenuService }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [ALAIN_I18N_TOKEN]
            }] }, { type: i1.TitleService, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [TitleService]
            }] }, { type: i6.ReuseTabService, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [ReuseTabService]
            }] }, { type: i0.ChangeDetectorRef }, { type: i3.AlainConfigService }, { type: i4.Platform }, { type: i5.Directionality, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3BhZ2UtaGVhZGVyL3BhZ2UtaGVhZGVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9wYWdlLWhlYWRlci9wYWdlLWhlYWRlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFhLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzlELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLE1BQU0sRUFDTixLQUFLLEVBSUwsUUFBUSxFQUNSLFNBQVMsRUFDVCxXQUFXLEVBQ1gsU0FBUyxFQUNULGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN2RCxPQUFPLEVBQW9CLGdCQUFnQixFQUFRLFdBQVcsRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3BILE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RCxPQUFPLEVBQWdCLFlBQVksRUFBRSxXQUFXLEVBQWUsTUFBTSx1QkFBdUIsQ0FBQztBQUM3RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsTUFBTSxF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QUFJO2tCQUFaLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNtQixjQUFjO2tCQUF0QyxLQUFLO1lBQ21CLFNBQVM7a0JBQWpDLEtBQUs7WUFDbUIsU0FBUztrQkFBakMsS0FBSztZQUNtQixLQUFLO2tCQUE3QixLQUFLO1lBQ2tCLGNBQWM7a0JBQXJDLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ21CLG1CQUFtQjtrQkFBM0MsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLEdBQUc7a0JBQVgsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkVuZCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJldXNlVGFiU2VydmljZSB9IGZyb20gJ0BkZWxvbi9hYmMvcmV1c2UtdGFiJztcbmltcG9ydCB7IEFsYWluSTE4TlNlcnZpY2UsIEFMQUlOX0kxOE5fVE9LRU4sIE1lbnUsIE1lbnVTZXJ2aWNlLCBTZXR0aW5nc1NlcnZpY2UsIFRpdGxlU2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSAnQGRlbG9uL3V0aWwvYnJvd3Nlcic7XG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbC9jb25maWcnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyLCBOdW1iZXJJbnB1dCB9IGZyb20gJ0BkZWxvbi91dGlsL2RlY29yYXRvcic7XG5pbXBvcnQgeyBOekFmZml4Q29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC9hZmZpeCc7XG5pbXBvcnQgeyBtZXJnZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmludGVyZmFjZSBQYWdlSGVhZGVyUGF0aCB7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBsaW5rPzogc3RyaW5nW107XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhZ2UtaGVhZGVyJyxcbiAgZXhwb3J0QXM6ICdwYWdlSGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BhZ2UtaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBQYWdlSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9sb2FkaW5nOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV93aWRlOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9hdXRvQnJlYWRjcnVtYjogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYXV0b1RpdGxlOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zeW5jVGl0bGU6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2ZpeGVkOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9maXhlZE9mZnNldFRvcDogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9yZWN1cnNpdmVCcmVhZGNydW1iOiBCb29sZWFuSW5wdXQ7XG5cbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIEBWaWV3Q2hpbGQoJ2NvblRwbCcsIHsgc3RhdGljOiBmYWxzZSB9KSBwcml2YXRlIGNvblRwbDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnYWZmaXgnLCB7IHN0YXRpYzogZmFsc2UgfSkgcHJpdmF0ZSBhZmZpeDogTnpBZmZpeENvbXBvbmVudDtcbiAgaW5pdGVkID0gZmFsc2U7XG4gIGlzQnJvd3NlciA9IHRydWU7XG4gIGRpcjogRGlyZWN0aW9uID0gJ2x0cic7XG5cbiAgcHJpdmF0ZSBnZXQgbWVudXMoKTogTWVudVtdIHtcbiAgICByZXR1cm4gdGhpcy5tZW51U3J2LmdldFBhdGhCeVVybCh0aGlzLnJvdXRlci51cmwsIHRoaXMucmVjdXJzaXZlQnJlYWRjcnVtYik7XG4gIH1cblxuICBfdGl0bGVWYWw6IHN0cmluZyA9ICcnO1xuICBwYXRoczogUGFnZUhlYWRlclBhdGhbXSA9IFtdO1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgX3RpdGxlOiBzdHJpbmcgfCBudWxsO1xuICBfdGl0bGVUcGw6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKVxuICBzZXQgdGl0bGUodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+KSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIHRoaXMuX3RpdGxlID0gbnVsbDtcbiAgICAgIHRoaXMuX3RpdGxlVHBsID0gdmFsdWU7XG4gICAgICB0aGlzLl90aXRsZVZhbCA9ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl90aXRsZSA9IHZhbHVlO1xuICAgICAgdGhpcy5fdGl0bGVWYWwgPSB0aGlzLl90aXRsZTtcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbG9hZGluZyA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgd2lkZSA9IGZhbHNlO1xuICBASW5wdXQoKSBob21lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGhvbWVMaW5rOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGhvbWVJMThuOiBzdHJpbmc7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBhdXRvQnJlYWRjcnVtYjogYm9vbGVhbjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGF1dG9UaXRsZTogYm9vbGVhbjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHN5bmNUaXRsZTogYm9vbGVhbjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGZpeGVkOiBib29sZWFuO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBmaXhlZE9mZnNldFRvcDogbnVtYmVyO1xuICBASW5wdXQoKSBicmVhZGNydW1iOiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHJlY3Vyc2l2ZUJyZWFkY3J1bWI6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGxvZ286IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBhY3Rpb246IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBjb250ZW50OiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgZXh0cmE6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSB0YWI6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3RvcihcbiAgICBzZXR0aW5nczogU2V0dGluZ3NTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgbWVudVNydjogTWVudVNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChBTEFJTl9JMThOX1RPS0VOKSBwcml2YXRlIGkxOG5TcnY6IEFsYWluSTE4TlNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChUaXRsZVNlcnZpY2UpIHByaXZhdGUgdGl0bGVTcnY6IFRpdGxlU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KFJldXNlVGFiU2VydmljZSkgcHJpdmF0ZSByZXVzZVNydjogUmV1c2VUYWJTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBjb25maWdTcnY6IEFsYWluQ29uZmlnU2VydmljZSxcbiAgICBwbGF0Zm9ybTogUGxhdGZvcm0sXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBkaXJlY3Rpb25hbGl0eTogRGlyZWN0aW9uYWxpdHksXG4gICkge1xuICAgIHRoaXMuaXNCcm93c2VyID0gcGxhdGZvcm0uaXNCcm93c2VyO1xuICAgIGNvbmZpZ1Nydi5hdHRhY2godGhpcywgJ3BhZ2VIZWFkZXInLCB7XG4gICAgICBob21lOiAn6aaW6aG1JyxcbiAgICAgIGhvbWVMaW5rOiAnLycsXG4gICAgICBhdXRvQnJlYWRjcnVtYjogdHJ1ZSxcbiAgICAgIHJlY3Vyc2l2ZUJyZWFkY3J1bWI6IGZhbHNlLFxuICAgICAgYXV0b1RpdGxlOiB0cnVlLFxuICAgICAgc3luY1RpdGxlOiB0cnVlLFxuICAgICAgZml4ZWQ6IGZhbHNlLFxuICAgICAgZml4ZWRPZmZzZXRUb3A6IDY0LFxuICAgIH0pO1xuICAgIHNldHRpbmdzLm5vdGlmeVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcbiAgICAgICAgZmlsdGVyKHcgPT4gdGhpcy5hZmZpeCAmJiB3LnR5cGUgPT09ICdsYXlvdXQnICYmIHcubmFtZSA9PT0gJ2NvbGxhcHNlZCcpLFxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmFmZml4LnVwZGF0ZVBvc2l0aW9uKHt9IGFzIGFueSkpO1xuXG4gICAgbWVyZ2UobWVudVNydi5jaGFuZ2UucGlwZShmaWx0ZXIoKCkgPT4gdGhpcy5pbml0ZWQpKSwgcm91dGVyLmV2ZW50cy5waXBlKGZpbHRlcihldiA9PiBldiBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpKSwgaTE4blNydi5jaGFuZ2UpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMucmVmcmVzaCgpKTtcbiAgfVxuXG4gIHJlZnJlc2goKTogdm9pZCB7XG4gICAgdGhpcy5zZXRUaXRsZSgpLmdlbkJyZWFkY3J1bWIoKTtcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBwcml2YXRlIGdlbkJyZWFkY3J1bWIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYnJlYWRjcnVtYiB8fCAhdGhpcy5hdXRvQnJlYWRjcnVtYiB8fCB0aGlzLm1lbnVzLmxlbmd0aCA8PSAwKSB7XG4gICAgICB0aGlzLnBhdGhzID0gW107XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHBhdGhzOiBQYWdlSGVhZGVyUGF0aFtdID0gW107XG4gICAgdGhpcy5tZW51cy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaWYgKHR5cGVvZiBpdGVtLmhpZGVJbkJyZWFkY3J1bWIgIT09ICd1bmRlZmluZWQnICYmIGl0ZW0uaGlkZUluQnJlYWRjcnVtYikgcmV0dXJuO1xuICAgICAgbGV0IHRpdGxlID0gaXRlbS50ZXh0O1xuICAgICAgaWYgKGl0ZW0uaTE4biAmJiB0aGlzLmkxOG5TcnYpIHRpdGxlID0gdGhpcy5pMThuU3J2LmZhbnlpKGl0ZW0uaTE4bik7XG4gICAgICBwYXRocy5wdXNoKHsgdGl0bGUsIGxpbms6IChpdGVtLmxpbmsgJiYgW2l0ZW0ubGlua10pIGFzIHN0cmluZ1tdIH0pO1xuICAgIH0pO1xuICAgIC8vIGFkZCBob21lXG4gICAgaWYgKHRoaXMuaG9tZSkge1xuICAgICAgcGF0aHMuc3BsaWNlKDAsIDAsIHtcbiAgICAgICAgdGl0bGU6ICh0aGlzLmhvbWVJMThuICYmIHRoaXMuaTE4blNydiAmJiB0aGlzLmkxOG5TcnYuZmFueWkodGhpcy5ob21lSTE4bikpIHx8IHRoaXMuaG9tZSxcbiAgICAgICAgbGluazogW3RoaXMuaG9tZUxpbmtdLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMucGF0aHMgPSBwYXRocztcbiAgfVxuXG4gIHByaXZhdGUgc2V0VGl0bGUoKTogdGhpcyB7XG4gICAgaWYgKHRoaXMuX3RpdGxlID09IG51bGwgJiYgdGhpcy5fdGl0bGVUcGwgPT0gbnVsbCAmJiB0aGlzLmF1dG9UaXRsZSAmJiB0aGlzLm1lbnVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLm1lbnVzW3RoaXMubWVudXMubGVuZ3RoIC0gMV07XG4gICAgICBsZXQgdGl0bGUgPSBpdGVtLnRleHQ7XG4gICAgICBpZiAoaXRlbS5pMThuICYmIHRoaXMuaTE4blNydikge1xuICAgICAgICB0aXRsZSA9IHRoaXMuaTE4blNydi5mYW55aShpdGVtLmkxOG4pO1xuICAgICAgfVxuICAgICAgdGhpcy5fdGl0bGVWYWwgPSB0aXRsZSE7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3RpdGxlVmFsICYmIHRoaXMuc3luY1RpdGxlKSB7XG4gICAgICBpZiAodGhpcy50aXRsZVNydikge1xuICAgICAgICB0aGlzLnRpdGxlU3J2LnNldFRpdGxlKHRoaXMuX3RpdGxlVmFsKTtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5pbml0ZWQgJiYgdGhpcy5yZXVzZVNydikge1xuICAgICAgICB0aGlzLnJldXNlU3J2LnRpdGxlID0gdGhpcy5fdGl0bGVWYWw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjaGVja0NvbnRlbnQoKTogdm9pZCB7XG4gICAgaWYgKGlzRW1wdHkodGhpcy5jb25UcGwubmF0aXZlRWxlbWVudCkpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuY29uVHBsLm5hdGl2ZUVsZW1lbnQsICdoaWRkZW4nLCAnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKHRoaXMuY29uVHBsLm5hdGl2ZUVsZW1lbnQsICdoaWRkZW4nKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmRpciA9IHRoaXMuZGlyZWN0aW9uYWxpdHkudmFsdWU7XG4gICAgdGhpcy5kaXJlY3Rpb25hbGl0eS5jaGFuZ2U/LnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGRpcmVjdGlvbjogRGlyZWN0aW9uKSA9PiB7XG4gICAgICB0aGlzLmRpciA9IGRpcmVjdGlvbjtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgICB0aGlzLmluaXRlZCA9IHRydWU7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja0NvbnRlbnQoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmluaXRlZCkge1xuICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG59XG4iLCI8bnotYWZmaXggI2FmZml4ICpuZ0lmPVwiaXNCcm93c2VyICYmIGZpeGVkOyBlbHNlIHBoVHBsXCIgW256T2Zmc2V0VG9wXT1cImZpeGVkT2Zmc2V0VG9wXCI+XG4gIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJwaFRwbFwiPjwvbmctdGVtcGxhdGU+XG48L256LWFmZml4PlxuPG5nLXRlbXBsYXRlICNwaFRwbD5cbiAgPGRpdiBjbGFzcz1cInBhZ2UtaGVhZGVyXCIgW2NsYXNzLnBhZ2UtaGVhZGVyLXJ0bF09XCJkaXIgPT09ICdydGwnXCI+XG4gICAgPGRpdiBbbmdDbGFzc109XCJ7ICdwYWdlLWhlYWRlcl9fd2lkZSc6IHdpZGUgfVwiPlxuICAgICAgPG56LXNrZWxldG9uIFtuekxvYWRpbmddPVwibG9hZGluZ1wiIFtuelRpdGxlXT1cImZhbHNlXCIgW256QWN0aXZlXT1cInRydWVcIiBbbnpQYXJhZ3JhcGhdPVwieyByb3dzOiAzIH1cIiBbbnpBdmF0YXJdPVwieyBzaXplOiAnbGFyZ2UnLCBzaGFwZTogJ2NpcmNsZScgfVwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWJyZWFkY3J1bWI7IGVsc2UgYnJlYWRjcnVtYlwiPlxuICAgICAgICAgIDxuei1icmVhZGNydW1iICpuZ0lmPVwicGF0aHMgJiYgcGF0aHMubGVuZ3RoID4gMFwiPlxuICAgICAgICAgICAgPG56LWJyZWFkY3J1bWItaXRlbSAqbmdGb3I9XCJsZXQgaSBvZiBwYXRoc1wiPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaS5saW5rXCI+XG4gICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiaS5saW5rXCI+e3sgaS50aXRsZSB9fTwvYT5cbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaS5saW5rXCI+e3sgaS50aXRsZSB9fTwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9uei1icmVhZGNydW1iLWl0ZW0+XG4gICAgICAgICAgPC9uei1icmVhZGNydW1iPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2UtaGVhZGVyX19kZXRhaWxcIj5cbiAgICAgICAgICA8ZGl2ICpuZ0lmPVwibG9nb1wiIGNsYXNzPVwicGFnZS1oZWFkZXJfX2xvZ29cIj5cbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJsb2dvXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFnZS1oZWFkZXJfX21haW5cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlLWhlYWRlcl9fcm93XCI+XG4gICAgICAgICAgICAgIDxoMSAqbmdJZj1cIl90aXRsZVZhbCB8fCBfdGl0bGVUcGxcIiBjbGFzcz1cInBhZ2UtaGVhZGVyX190aXRsZVwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJfdGl0bGVWYWw7IGVsc2UgX3RpdGxlVHBsXCI+e3sgX3RpdGxlVmFsIH19PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJhY3Rpb25cIiBjbGFzcz1cInBhZ2UtaGVhZGVyX19hY3Rpb25cIj5cbiAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYWN0aW9uXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlLWhlYWRlcl9fcm93XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlLWhlYWRlcl9fZGVzY1wiIChjZGtPYnNlcnZlQ29udGVudCk9XCJjaGVja0NvbnRlbnQoKVwiICNjb25UcGw+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJjb250ZW50XCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJleHRyYVwiIGNsYXNzPVwicGFnZS1oZWFkZXJfX2V4dHJhXCI+XG4gICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImV4dHJhXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJ0YWJcIj48L25nLXRlbXBsYXRlPlxuICAgICAgPC9uei1za2VsZXRvbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L25nLXRlbXBsYXRlPlxuIl19