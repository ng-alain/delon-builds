import { __decorate } from "tslib";
import { Directionality } from '@angular/cdk/bidi';
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Input, Optional, Renderer2, TemplateRef, ViewChild, ViewEncapsulation, } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ReuseTabService } from '@delon/abc/reuse-tab';
import { ALAIN_I18N_TOKEN, MenuService, SettingsService, TitleService } from '@delon/theme';
import { isEmpty } from '@delon/util/browser';
import { AlainConfigService } from '@delon/util/config';
import { InputBoolean, InputNumber } from '@delon/util/decorator';
import { merge, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
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
PageHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'page-header',
                exportAs: 'pageHeader',
                template: "<nz-affix #affix *ngIf=\"isBrowser && fixed; else phTpl\" [nzOffsetTop]=\"fixedOffsetTop\">\n  <ng-template [ngTemplateOutlet]=\"phTpl\"></ng-template>\n</nz-affix>\n<ng-template #phTpl>\n  <div class=\"page-header\" [class.page-header-rtl]=\"dir === 'rtl'\">\n    <div [ngClass]=\"{ 'page-header__wide': wide }\">\n      <nz-skeleton [nzLoading]=\"loading\" [nzTitle]=\"false\" [nzActive]=\"true\" [nzParagraph]=\"{ rows: 3 }\" [nzAvatar]=\"{ size: 'large', shape: 'circle' }\">\n        <ng-container *ngIf=\"!breadcrumb; else breadcrumb!\">\n          <nz-breadcrumb *ngIf=\"paths && paths.length > 0\">\n            <nz-breadcrumb-item *ngFor=\"let i of paths\">\n              <ng-container *ngIf=\"i.link\">\n                <a [routerLink]=\"i.link\">{{ i.title }}</a>\n              </ng-container>\n              <ng-container *ngIf=\"!i.link\">{{ i.title }}</ng-container>\n            </nz-breadcrumb-item>\n          </nz-breadcrumb>\n        </ng-container>\n        <div class=\"page-header__detail\">\n          <div *ngIf=\"logo\" class=\"page-header__logo\">\n            <ng-template [ngTemplateOutlet]=\"logo\"></ng-template>\n          </div>\n          <div class=\"page-header__main\">\n            <div class=\"page-header__row\">\n              <h1 *ngIf=\"_titleVal || _titleTpl\" class=\"page-header__title\">\n                <ng-container *ngIf=\"_titleVal; else _titleTpl\">{{ _titleVal }}</ng-container>\n              </h1>\n              <div *ngIf=\"action\" class=\"page-header__action\">\n                <ng-template [ngTemplateOutlet]=\"action\"></ng-template>\n              </div>\n            </div>\n            <div class=\"page-header__row\">\n              <div class=\"page-header__desc\" (cdkObserveContent)=\"checkContent()\" #conTpl>\n                <ng-content></ng-content>\n                <ng-template [ngTemplateOutlet]=\"content!\"></ng-template>\n              </div>\n              <div *ngIf=\"extra\" class=\"page-header__extra\">\n                <ng-template [ngTemplateOutlet]=\"extra\"></ng-template>\n              </div>\n            </div>\n          </div>\n        </div>\n        <ng-template [ngTemplateOutlet]=\"tab!\"></ng-template>\n      </nz-skeleton>\n    </div>\n  </div>\n</ng-template>\n",
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            },] }
];
PageHeaderComponent.ctorParameters = () => [
    { type: SettingsService },
    { type: Renderer2 },
    { type: Router },
    { type: MenuService },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [ALAIN_I18N_TOKEN,] }] },
    { type: TitleService, decorators: [{ type: Optional }, { type: Inject, args: [TitleService,] }] },
    { type: ReuseTabService, decorators: [{ type: Optional }, { type: Inject, args: [ReuseTabService,] }] },
    { type: ChangeDetectorRef },
    { type: AlainConfigService },
    { type: Platform },
    { type: Directionality, decorators: [{ type: Optional }] }
];
PageHeaderComponent.propDecorators = {
    conTpl: [{ type: ViewChild, args: ['conTpl', { static: false },] }],
    affix: [{ type: ViewChild, args: ['affix', { static: false },] }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3BhZ2UtaGVhZGVyL3BhZ2UtaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFhLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzlELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBRVQsTUFBTSxFQUNOLEtBQUssRUFJTCxRQUFRLEVBQ1IsU0FBUyxFQUNULFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3ZELE9BQU8sRUFBb0IsZ0JBQWdCLEVBQVEsV0FBVyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDcEgsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3hELE9BQU8sRUFBZ0IsWUFBWSxFQUFFLFdBQVcsRUFBZSxNQUFNLHVCQUF1QixDQUFDO0FBRTdGLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFlbkQsTUFBTSxPQUFPLG1CQUFtQjtJQTBEOUIsYUFBYTtJQUViLFlBQ0UsUUFBeUIsRUFDakIsUUFBbUIsRUFDbkIsTUFBYyxFQUNkLE9BQW9CLEVBQ2tCLE9B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ZixZQUFZLEVBQUU7c0RBQW9CO0FBQ25CO0lBQWYsWUFBWSxFQUFFO3NEQUFvQjtBQUNuQjtJQUFmLFlBQVksRUFBRTtrREFBZ0I7QUFDaEI7SUFBZCxXQUFXLEVBQUU7MkRBQXdCO0FBRXRCO0lBQWYsWUFBWSxFQUFFO2dFQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkVuZCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJldXNlVGFiU2VydmljZSB9IGZyb20gJ0BkZWxvbi9hYmMvcmV1c2UtdGFiJztcbmltcG9ydCB7IEFsYWluSTE4TlNlcnZpY2UsIEFMQUlOX0kxOE5fVE9LRU4sIE1lbnUsIE1lbnVTZXJ2aWNlLCBTZXR0aW5nc1NlcnZpY2UsIFRpdGxlU2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSAnQGRlbG9uL3V0aWwvYnJvd3Nlcic7XG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UgfSBmcm9tICdAZGVsb24vdXRpbC9jb25maWcnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyLCBOdW1iZXJJbnB1dCB9IGZyb20gJ0BkZWxvbi91dGlsL2RlY29yYXRvcic7XG5pbXBvcnQgeyBOekFmZml4Q29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC9hZmZpeCc7XG5pbXBvcnQgeyBtZXJnZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmludGVyZmFjZSBQYWdlSGVhZGVyUGF0aCB7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBsaW5rPzogc3RyaW5nW107XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhZ2UtaGVhZGVyJyxcbiAgZXhwb3J0QXM6ICdwYWdlSGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BhZ2UtaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBQYWdlSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9sb2FkaW5nOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV93aWRlOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9hdXRvQnJlYWRjcnVtYjogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYXV0b1RpdGxlOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9zeW5jVGl0bGU6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2ZpeGVkOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9maXhlZE9mZnNldFRvcDogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9yZWN1cnNpdmVCcmVhZGNydW1iOiBCb29sZWFuSW5wdXQ7XG5cbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIEBWaWV3Q2hpbGQoJ2NvblRwbCcsIHsgc3RhdGljOiBmYWxzZSB9KSBwcml2YXRlIGNvblRwbDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnYWZmaXgnLCB7IHN0YXRpYzogZmFsc2UgfSkgcHJpdmF0ZSBhZmZpeDogTnpBZmZpeENvbXBvbmVudDtcbiAgaW5pdGVkID0gZmFsc2U7XG4gIGlzQnJvd3NlciA9IHRydWU7XG4gIGRpcjogRGlyZWN0aW9uID0gJ2x0cic7XG5cbiAgcHJpdmF0ZSBnZXQgbWVudXMoKTogTWVudVtdIHtcbiAgICByZXR1cm4gdGhpcy5tZW51U3J2LmdldFBhdGhCeVVybCh0aGlzLnJvdXRlci51cmwsIHRoaXMucmVjdXJzaXZlQnJlYWRjcnVtYik7XG4gIH1cblxuICBfdGl0bGVWYWw6IHN0cmluZyB8IG51bGwgPSAnJztcbiAgcGF0aHM6IFBhZ2VIZWFkZXJQYXRoW10gPSBbXTtcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIF90aXRsZTogc3RyaW5nIHwgbnVsbDtcbiAgX3RpdGxlVHBsOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBASW5wdXQoKVxuICBzZXQgdGl0bGUodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbCkge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLl90aXRsZSA9IG51bGw7XG4gICAgICB0aGlzLl90aXRsZVRwbCA9IHZhbHVlO1xuICAgICAgdGhpcy5fdGl0bGVWYWwgPSAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdGl0bGUgPSB2YWx1ZTtcbiAgICAgIHRoaXMuX3RpdGxlVmFsID0gdGhpcy5fdGl0bGU7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGxvYWRpbmcgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHdpZGUgPSBmYWxzZTtcbiAgQElucHV0KCkgaG9tZT86IHN0cmluZztcbiAgQElucHV0KCkgaG9tZUxpbms/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGhvbWVJMThuPzogc3RyaW5nO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYXV0b0JyZWFkY3J1bWI6IGJvb2xlYW47XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBhdXRvVGl0bGU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzeW5jVGl0bGU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBmaXhlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgZml4ZWRPZmZzZXRUb3A6IG51bWJlcjtcbiAgQElucHV0KCkgYnJlYWRjcnVtYj86IFRlbXBsYXRlUmVmPGFueT4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHJlY3Vyc2l2ZUJyZWFkY3J1bWI6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGxvZ28/OiBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBhY3Rpb24/OiBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBjb250ZW50PzogVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgZXh0cmE/OiBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSB0YWI/OiBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGwgPSBudWxsO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3RvcihcbiAgICBzZXR0aW5nczogU2V0dGluZ3NTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgbWVudVNydjogTWVudVNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChBTEFJTl9JMThOX1RPS0VOKSBwcml2YXRlIGkxOG5TcnY6IEFsYWluSTE4TlNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChUaXRsZVNlcnZpY2UpIHByaXZhdGUgdGl0bGVTcnY6IFRpdGxlU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KFJldXNlVGFiU2VydmljZSkgcHJpdmF0ZSByZXVzZVNydjogUmV1c2VUYWJTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBjb25maWdTcnY6IEFsYWluQ29uZmlnU2VydmljZSxcbiAgICBwbGF0Zm9ybTogUGxhdGZvcm0sXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBkaXJlY3Rpb25hbGl0eTogRGlyZWN0aW9uYWxpdHksXG4gICkge1xuICAgIHRoaXMuaXNCcm93c2VyID0gcGxhdGZvcm0uaXNCcm93c2VyO1xuICAgIGNvbmZpZ1Nydi5hdHRhY2godGhpcywgJ3BhZ2VIZWFkZXInLCB7XG4gICAgICBob21lOiAn6aaW6aG1JyxcbiAgICAgIGhvbWVMaW5rOiAnLycsXG4gICAgICBhdXRvQnJlYWRjcnVtYjogdHJ1ZSxcbiAgICAgIHJlY3Vyc2l2ZUJyZWFkY3J1bWI6IGZhbHNlLFxuICAgICAgYXV0b1RpdGxlOiB0cnVlLFxuICAgICAgc3luY1RpdGxlOiB0cnVlLFxuICAgICAgZml4ZWQ6IGZhbHNlLFxuICAgICAgZml4ZWRPZmZzZXRUb3A6IDY0LFxuICAgIH0pO1xuICAgIHNldHRpbmdzLm5vdGlmeVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcbiAgICAgICAgZmlsdGVyKHcgPT4gdGhpcy5hZmZpeCAmJiB3LnR5cGUgPT09ICdsYXlvdXQnICYmIHcubmFtZSA9PT0gJ2NvbGxhcHNlZCcpLFxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmFmZml4LnVwZGF0ZVBvc2l0aW9uKHt9IGFzIGFueSkpO1xuXG4gICAgbWVyZ2UobWVudVNydi5jaGFuZ2UucGlwZShmaWx0ZXIoKCkgPT4gdGhpcy5pbml0ZWQpKSwgcm91dGVyLmV2ZW50cy5waXBlKGZpbHRlcihldiA9PiBldiBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpKSwgaTE4blNydi5jaGFuZ2UpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMucmVmcmVzaCgpKTtcbiAgfVxuXG4gIHJlZnJlc2goKTogdm9pZCB7XG4gICAgdGhpcy5zZXRUaXRsZSgpLmdlbkJyZWFkY3J1bWIoKTtcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBwcml2YXRlIGdlbkJyZWFkY3J1bWIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYnJlYWRjcnVtYiB8fCAhdGhpcy5hdXRvQnJlYWRjcnVtYiB8fCB0aGlzLm1lbnVzLmxlbmd0aCA8PSAwKSB7XG4gICAgICB0aGlzLnBhdGhzID0gW107XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHBhdGhzOiBQYWdlSGVhZGVyUGF0aFtdID0gW107XG4gICAgdGhpcy5tZW51cy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaWYgKHR5cGVvZiBpdGVtLmhpZGVJbkJyZWFkY3J1bWIgIT09ICd1bmRlZmluZWQnICYmIGl0ZW0uaGlkZUluQnJlYWRjcnVtYikgcmV0dXJuO1xuICAgICAgbGV0IHRpdGxlID0gaXRlbS50ZXh0O1xuICAgICAgaWYgKGl0ZW0uaTE4biAmJiB0aGlzLmkxOG5TcnYpIHRpdGxlID0gdGhpcy5pMThuU3J2LmZhbnlpKGl0ZW0uaTE4bik7XG4gICAgICBwYXRocy5wdXNoKHsgdGl0bGUsIGxpbms6IChpdGVtLmxpbmsgJiYgW2l0ZW0ubGlua10pIGFzIHN0cmluZ1tdIH0pO1xuICAgIH0pO1xuICAgIC8vIGFkZCBob21lXG4gICAgaWYgKHRoaXMuaG9tZSkge1xuICAgICAgcGF0aHMuc3BsaWNlKDAsIDAsIHtcbiAgICAgICAgdGl0bGU6ICh0aGlzLmhvbWVJMThuICYmIHRoaXMuaTE4blNydiAmJiB0aGlzLmkxOG5TcnYuZmFueWkodGhpcy5ob21lSTE4bikpIHx8IHRoaXMuaG9tZSxcbiAgICAgICAgbGluazogW3RoaXMuaG9tZUxpbmshXSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnBhdGhzID0gcGF0aHM7XG4gIH1cblxuICBwcml2YXRlIHNldFRpdGxlKCk6IHRoaXMge1xuICAgIGlmICh0aGlzLl90aXRsZSA9PSBudWxsICYmIHRoaXMuX3RpdGxlVHBsID09IG51bGwgJiYgdGhpcy5hdXRvVGl0bGUgJiYgdGhpcy5tZW51cy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBpdGVtID0gdGhpcy5tZW51c1t0aGlzLm1lbnVzLmxlbmd0aCAtIDFdO1xuICAgICAgbGV0IHRpdGxlID0gaXRlbS50ZXh0O1xuICAgICAgaWYgKGl0ZW0uaTE4biAmJiB0aGlzLmkxOG5TcnYpIHtcbiAgICAgICAgdGl0bGUgPSB0aGlzLmkxOG5TcnYuZmFueWkoaXRlbS5pMThuKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3RpdGxlVmFsID0gdGl0bGUhO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl90aXRsZVZhbCAmJiB0aGlzLnN5bmNUaXRsZSkge1xuICAgICAgaWYgKHRoaXMudGl0bGVTcnYpIHtcbiAgICAgICAgdGhpcy50aXRsZVNydi5zZXRUaXRsZSh0aGlzLl90aXRsZVZhbCk7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuaW5pdGVkICYmIHRoaXMucmV1c2VTcnYpIHtcbiAgICAgICAgdGhpcy5yZXVzZVNydi50aXRsZSA9IHRoaXMuX3RpdGxlVmFsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY2hlY2tDb250ZW50KCk6IHZvaWQge1xuICAgIGlmIChpc0VtcHR5KHRoaXMuY29uVHBsLm5hdGl2ZUVsZW1lbnQpKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmNvblRwbC5uYXRpdmVFbGVtZW50LCAnaGlkZGVuJywgJycpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLmNvblRwbC5uYXRpdmVFbGVtZW50LCAnaGlkZGVuJyk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5kaXIgPSB0aGlzLmRpcmVjdGlvbmFsaXR5LnZhbHVlO1xuICAgIHRoaXMuZGlyZWN0aW9uYWxpdHkuY2hhbmdlPy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKChkaXJlY3Rpb246IERpcmVjdGlvbikgPT4ge1xuICAgICAgdGhpcy5kaXIgPSBkaXJlY3Rpb247XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tDb250ZW50KCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pbml0ZWQpIHtcbiAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19