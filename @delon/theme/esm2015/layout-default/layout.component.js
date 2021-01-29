/**
 * @fileoverview added by tsickle
 * Generated from: layout.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DOCUMENT } from '@angular/common';
import { Component, ContentChildren, ElementRef, Inject, Input, QueryList, Renderer2, TemplateRef } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';
import { SettingsService } from '@delon/theme';
import { updateHostClass } from '@delon/util/browser';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LayoutDefaultHeaderItemComponent } from './layout-header-item.component';
export class LayoutDefaultComponent {
    /**
     * @param {?} router
     * @param {?} msgSrv
     * @param {?} settings
     * @param {?} el
     * @param {?} renderer
     * @param {?} doc
     */
    constructor(router, msgSrv, settings, el, renderer, doc) {
        this.settings = settings;
        this.el = el;
        this.renderer = renderer;
        this.doc = doc;
        this.destroy$ = new Subject();
        this.isFetching = false;
        // scroll to top in change page
        router.events.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} evt
         * @return {?}
         */
        evt => {
            if (!this.isFetching && evt instanceof RouteConfigLoadStart) {
                this.isFetching = true;
            }
            if (evt instanceof NavigationError || evt instanceof NavigationCancel) {
                this.isFetching = false;
                if (evt instanceof NavigationError) {
                    msgSrv.error(`Could not load ${evt.url} route`, { nzDuration: 1000 * 3 });
                }
                return;
            }
            if (!(evt instanceof NavigationEnd || evt instanceof RouteConfigLoadEnd)) {
                return;
            }
            if (this.isFetching) {
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    this.isFetching = false;
                }), 100);
            }
        }));
    }
    /**
     * @private
     * @return {?}
     */
    setClass() {
        const { el, doc, renderer, settings } = this;
        /** @type {?} */
        const layout = settings.layout;
        updateHostClass(el.nativeElement, renderer, {
            ['alain-default']: true,
            [`alain-default__fixed`]: layout.fixed,
            [`alain-default__collapsed`]: layout.collapsed,
        });
        doc.body.classList[layout.colorWeak ? 'add' : 'remove']('color-weak');
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.options == null) {
            throw new Error(`Please specify the [options] parameter, otherwise the layout display cannot be completed`);
        }
        const { settings, destroy$ } = this;
        settings.notify.pipe(takeUntil(destroy$)).subscribe((/**
         * @return {?}
         */
        () => this.setClass()));
        this.setClass();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
LayoutDefaultComponent.decorators = [
    { type: Component, args: [{
                selector: 'layout-default',
                template: `
    <div class="alain-default__progress-bar" *ngIf="isFetching"></div>
    <layout-default-header></layout-default-header>
    <div class="alain-default__aside">
      <div class="alain-default__aside-inner">
        <ng-container *ngTemplateOutlet="asideUser"></ng-container>
        <ng-container *ngTemplateOutlet="nav"></ng-container>
        <layout-default-nav class="d-block py-lg"></layout-default-nav>
      </div>
    </div>
    <section class="alain-default__content">
      <ng-container *ngTemplateOutlet="content"></ng-container>
      <ng-content></ng-content>
    </section>
  `
            }] }
];
/** @nocollapse */
LayoutDefaultComponent.ctorParameters = () => [
    { type: Router },
    { type: NzMessageService },
    { type: SettingsService },
    { type: ElementRef },
    { type: Renderer2 },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
LayoutDefaultComponent.propDecorators = {
    headerItems: [{ type: ContentChildren, args: [LayoutDefaultHeaderItemComponent, { descendants: false },] }],
    options: [{ type: Input }],
    asideUser: [{ type: Input }],
    nav: [{ type: Input }],
    content: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    LayoutDefaultComponent.prototype.headerItems;
    /** @type {?} */
    LayoutDefaultComponent.prototype.options;
    /** @type {?} */
    LayoutDefaultComponent.prototype.asideUser;
    /** @type {?} */
    LayoutDefaultComponent.prototype.nav;
    /** @type {?} */
    LayoutDefaultComponent.prototype.content;
    /**
     * @type {?}
     * @private
     */
    LayoutDefaultComponent.prototype.destroy$;
    /** @type {?} */
    LayoutDefaultComponent.prototype.isFetching;
    /**
     * @type {?}
     * @private
     */
    LayoutDefaultComponent.prototype.settings;
    /**
     * @type {?}
     * @private
     */
    LayoutDefaultComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    LayoutDefaultComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    LayoutDefaultComponent.prototype.doc;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lL2xheW91dC1kZWZhdWx0L2xheW91dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQXFCLFNBQVMsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVJLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLGtCQUFrQixFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3JJLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBcUJsRixNQUFNLE9BQU8sc0JBQXNCOzs7Ozs7Ozs7SUFZakMsWUFDRSxNQUFjLEVBQ2QsTUFBd0IsRUFDaEIsUUFBeUIsRUFDekIsRUFBYyxFQUNkLFFBQW1CLEVBQ0QsR0FBUTtRQUgxQixhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQUN6QixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNELFFBQUcsR0FBSCxHQUFHLENBQUs7UUFUNUIsYUFBUSxHQUFHLElB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O3NCQUd4RSxLQUFLO3dCQUNMLEtBQUs7a0JBQ0wsS0FBSztzQkFDTCxLQUFLOzs7O0lBTk4sNkNBQzBEOztJQUUxRCx5Q0FBdUM7O0lBQ3ZDLDJDQUFzQzs7SUFDdEMscUNBQWdDOztJQUNoQyx5Q0FBb0M7Ozs7O0lBRXBDLDBDQUF1Qzs7SUFDdkMsNENBQW1COzs7OztJQUtqQiwwQ0FBaUM7Ozs7O0lBQ2pDLG9DQUFzQjs7Ozs7SUFDdEIsMENBQTJCOzs7OztJQUMzQixxQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb21wb25lbnQsIENvbnRlbnRDaGlsZHJlbiwgRWxlbWVudFJlZiwgSW5qZWN0LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIFF1ZXJ5TGlzdCwgUmVuZGVyZXIyLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkNhbmNlbCwgTmF2aWdhdGlvbkVuZCwgTmF2aWdhdGlvbkVycm9yLCBSb3V0ZUNvbmZpZ0xvYWRFbmQsIFJvdXRlQ29uZmlnTG9hZFN0YXJ0LCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU2V0dGluZ3NTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IHVwZGF0ZUhvc3RDbGFzcyB9IGZyb20gJ0BkZWxvbi91dGlsL2Jyb3dzZXInO1xuaW1wb3J0IHsgTnpNZXNzYWdlU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvbWVzc2FnZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBMYXlvdXREZWZhdWx0SGVhZGVySXRlbUNvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0LWhlYWRlci1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYXlvdXREZWZhdWx0T3B0aW9ucyB9IGZyb20gJy4vdHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsYXlvdXQtZGVmYXVsdCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImFsYWluLWRlZmF1bHRfX3Byb2dyZXNzLWJhclwiICpuZ0lmPVwiaXNGZXRjaGluZ1wiPjwvZGl2PlxuICAgIDxsYXlvdXQtZGVmYXVsdC1oZWFkZXI+PC9sYXlvdXQtZGVmYXVsdC1oZWFkZXI+XG4gICAgPGRpdiBjbGFzcz1cImFsYWluLWRlZmF1bHRfX2FzaWRlXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiYWxhaW4tZGVmYXVsdF9fYXNpZGUtaW5uZXJcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImFzaWRlVXNlclwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwibmF2XCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgIDxsYXlvdXQtZGVmYXVsdC1uYXYgY2xhc3M9XCJkLWJsb2NrIHB5LWxnXCI+PC9sYXlvdXQtZGVmYXVsdC1uYXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8c2VjdGlvbiBjbGFzcz1cImFsYWluLWRlZmF1bHRfX2NvbnRlbnRcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjb250ZW50XCI+PC9uZy1jb250YWluZXI+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9zZWN0aW9uPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBMYXlvdXREZWZhdWx0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBAQ29udGVudENoaWxkcmVuKExheW91dERlZmF1bHRIZWFkZXJJdGVtQ29tcG9uZW50LCB7IGRlc2NlbmRhbnRzOiBmYWxzZSB9KVxuICBoZWFkZXJJdGVtcyE6IFF1ZXJ5TGlzdDxMYXlvdXREZWZhdWx0SGVhZGVySXRlbUNvbXBvbmVudD47XG5cbiAgQElucHV0KCkgb3B0aW9uczogTGF5b3V0RGVmYXVsdE9wdGlvbnM7XG4gIEBJbnB1dCgpIGFzaWRlVXNlcjogVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIG5hdjogVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIGNvbnRlbnQ6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBpc0ZldGNoaW5nID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcm91dGVyOiBSb3V0ZXIsXG4gICAgbXNnU3J2OiBOek1lc3NhZ2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgc2V0dGluZ3M6IFNldHRpbmdzU2VydmljZSxcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogYW55LFxuICApIHtcbiAgICAvLyBzY3JvbGwgdG8gdG9wIGluIGNoYW5nZSBwYWdlXG4gICAgcm91dGVyLmV2ZW50cy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKGV2dCA9PiB7XG4gICAgICBpZiAoIXRoaXMuaXNGZXRjaGluZyAmJiBldnQgaW5zdGFuY2VvZiBSb3V0ZUNvbmZpZ0xvYWRTdGFydCkge1xuICAgICAgICB0aGlzLmlzRmV0Y2hpbmcgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKGV2dCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FcnJvciB8fCBldnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uQ2FuY2VsKSB7XG4gICAgICAgIHRoaXMuaXNGZXRjaGluZyA9IGZhbHNlO1xuICAgICAgICBpZiAoZXZ0IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVycm9yKSB7XG4gICAgICAgICAgbXNnU3J2LmVycm9yKGBDb3VsZCBub3QgbG9hZCAke2V2dC51cmx9IHJvdXRlYCwgeyBuekR1cmF0aW9uOiAxMDAwICogMyB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoIShldnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kIHx8IGV2dCBpbnN0YW5jZW9mIFJvdXRlQ29uZmlnTG9hZEVuZCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuaXNGZXRjaGluZykge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmlzRmV0Y2hpbmcgPSBmYWxzZTtcbiAgICAgICAgfSwgMTAwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0Q2xhc3MoKTogdm9pZCB7XG4gICAgY29uc3QgeyBlbCwgZG9jLCByZW5kZXJlciwgc2V0dGluZ3MgfSA9IHRoaXM7XG4gICAgY29uc3QgbGF5b3V0ID0gc2V0dGluZ3MubGF5b3V0O1xuICAgIHVwZGF0ZUhvc3RDbGFzcyhlbC5uYXRpdmVFbGVtZW50LCByZW5kZXJlciwge1xuICAgICAgWydhbGFpbi1kZWZhdWx0J106IHRydWUsXG4gICAgICBbYGFsYWluLWRlZmF1bHRfX2ZpeGVkYF06IGxheW91dC5maXhlZCxcbiAgICAgIFtgYWxhaW4tZGVmYXVsdF9fY29sbGFwc2VkYF06IGxheW91dC5jb2xsYXBzZWQsXG4gICAgfSk7XG5cbiAgICBkb2MuYm9keS5jbGFzc0xpc3RbbGF5b3V0LmNvbG9yV2VhayA/ICdhZGQnIDogJ3JlbW92ZSddKCdjb2xvci13ZWFrJyk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vcHRpb25zID09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgUGxlYXNlIHNwZWNpZnkgdGhlIFtvcHRpb25zXSBwYXJhbWV0ZXIsIG90aGVyd2lzZSB0aGUgbGF5b3V0IGRpc3BsYXkgY2Fubm90IGJlIGNvbXBsZXRlZGApO1xuICAgIH1cbiAgICBjb25zdCB7IHNldHRpbmdzLCBkZXN0cm95JCB9ID0gdGhpcztcbiAgICBzZXR0aW5ncy5ub3RpZnkucGlwZSh0YWtlVW50aWwoZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5zZXRDbGFzcygpKTtcbiAgICB0aGlzLnNldENsYXNzKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==