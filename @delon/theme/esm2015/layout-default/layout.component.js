/**
 * @fileoverview added by tsickle
 * Generated from: layout.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DOCUMENT } from '@angular/common';
import { Component, ContentChildren, ElementRef, Inject, Input, QueryList, Renderer2, TemplateRef } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';
import { SettingsService } from '@delon/theme';
import { updateHostClass } from '@delon/util';
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
        this.unsubscribe$ = new Subject();
        this.isFetching = false;
        // scroll to top in change page
        router.events.pipe(takeUntil(this.unsubscribe$)).subscribe((/**
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
        const { settings, unsubscribe$ } = this;
        settings.notify.pipe(takeUntil(unsubscribe$)).subscribe((/**
         * @return {?}
         */
        () => this.setClass()));
        this.setClass();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        const { unsubscribe$ } = this;
        unsubscribe$.next();
        unsubscribe$.complete();
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
    LayoutDefaultComponent.prototype.unsubscribe$;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS9sYXlvdXQtZGVmYXVsdC8iLCJzb3VyY2VzIjpbImxheW91dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQXFCLFNBQVMsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVJLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLGtCQUFrQixFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3JJLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM5QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQXFCbEYsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7Ozs7O0lBWWpDLFlBQ0UsTUFBYyxFQUNkLE1BQXdCLEVBQ2hCLFFBQXlCLEVBQ3pCLEVBQWMsRUFDZCxRQUFtQixFQUNELEdBQVE7UUFIMUIsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7UUFDekIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDRCxRQUFHLEdBQUgsR0FBRyxDQUFLO1FBVDVCLGlCQUFZLEdBQUcsSUFB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LEtBQUssRUFBRTtzQkFHeEUsS0FBSzt3QkFDTCxLQUFLO2tCQUNMLEtBQUs7c0JBQ0wsS0FBSzs7OztJQU5OLDZDQUMwRDs7SUFFMUQseUNBQXVDOztJQUN2QywyQ0FBc0M7O0lBQ3RDLHFDQUFnQzs7SUFDaEMseUNBQW9DOzs7OztJQUVwQyw4Q0FBMkM7O0lBQzNDLDRDQUFtQjs7Ozs7SUFLakIsMENBQWlDOzs7OztJQUNqQyxvQ0FBc0I7Ozs7O0lBQ3RCLDBDQUEyQjs7Ozs7SUFDM0IscUNBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBDb250ZW50Q2hpbGRyZW4sIEVsZW1lbnRSZWYsIEluamVjdCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBRdWVyeUxpc3QsIFJlbmRlcmVyMiwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdmlnYXRpb25DYW5jZWwsIE5hdmlnYXRpb25FbmQsIE5hdmlnYXRpb25FcnJvciwgUm91dGVDb25maWdMb2FkRW5kLCBSb3V0ZUNvbmZpZ0xvYWRTdGFydCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFNldHRpbmdzU2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyB1cGRhdGVIb3N0Q2xhc3MgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBOek1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9tZXNzYWdlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IExheW91dERlZmF1bHRIZWFkZXJJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQtaGVhZGVyLWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IExheW91dERlZmF1bHRPcHRpb25zIH0gZnJvbSAnLi90eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xheW91dC1kZWZhdWx0JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiYWxhaW4tZGVmYXVsdF9fcHJvZ3Jlc3MtYmFyXCIgKm5nSWY9XCJpc0ZldGNoaW5nXCI+PC9kaXY+XG4gICAgPGxheW91dC1kZWZhdWx0LWhlYWRlcj48L2xheW91dC1kZWZhdWx0LWhlYWRlcj5cbiAgICA8ZGl2IGNsYXNzPVwiYWxhaW4tZGVmYXVsdF9fYXNpZGVcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJhbGFpbi1kZWZhdWx0X19hc2lkZS1pbm5lclwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiYXNpZGVVc2VyXCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJuYXZcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPGxheW91dC1kZWZhdWx0LW5hdiBjbGFzcz1cImQtYmxvY2sgcHktbGdcIj48L2xheW91dC1kZWZhdWx0LW5hdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxzZWN0aW9uIGNsYXNzPVwiYWxhaW4tZGVmYXVsdF9fY29udGVudFwiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImNvbnRlbnRcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L3NlY3Rpb24+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIExheW91dERlZmF1bHRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBDb250ZW50Q2hpbGRyZW4oTGF5b3V0RGVmYXVsdEhlYWRlckl0ZW1Db21wb25lbnQsIHsgZGVzY2VuZGFudHM6IGZhbHNlIH0pXG4gIGhlYWRlckl0ZW1zITogUXVlcnlMaXN0PExheW91dERlZmF1bHRIZWFkZXJJdGVtQ29tcG9uZW50PjtcblxuICBASW5wdXQoKSBvcHRpb25zOiBMYXlvdXREZWZhdWx0T3B0aW9ucztcbiAgQElucHV0KCkgYXNpZGVVc2VyOiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgbmF2OiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgY29udGVudDogVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgcHJpdmF0ZSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBpc0ZldGNoaW5nID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcm91dGVyOiBSb3V0ZXIsXG4gICAgbXNnU3J2OiBOek1lc3NhZ2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgc2V0dGluZ3M6IFNldHRpbmdzU2VydmljZSxcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogYW55LFxuICApIHtcbiAgICAvLyBzY3JvbGwgdG8gdG9wIGluIGNoYW5nZSBwYWdlXG4gICAgcm91dGVyLmV2ZW50cy5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpLnN1YnNjcmliZShldnQgPT4ge1xuICAgICAgaWYgKCF0aGlzLmlzRmV0Y2hpbmcgJiYgZXZ0IGluc3RhbmNlb2YgUm91dGVDb25maWdMb2FkU3RhcnQpIHtcbiAgICAgICAgdGhpcy5pc0ZldGNoaW5nID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChldnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRXJyb3IgfHwgZXZ0IGluc3RhbmNlb2YgTmF2aWdhdGlvbkNhbmNlbCkge1xuICAgICAgICB0aGlzLmlzRmV0Y2hpbmcgPSBmYWxzZTtcbiAgICAgICAgaWYgKGV2dCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FcnJvcikge1xuICAgICAgICAgIG1zZ1Nydi5lcnJvcihgQ291bGQgbm90IGxvYWQgJHtldnQudXJsfSByb3V0ZWAsIHsgbnpEdXJhdGlvbjogMTAwMCAqIDMgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKCEoZXZ0IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCB8fCBldnQgaW5zdGFuY2VvZiBSb3V0ZUNvbmZpZ0xvYWRFbmQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmlzRmV0Y2hpbmcpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5pc0ZldGNoaW5nID0gZmFsc2U7XG4gICAgICAgIH0sIDEwMCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHNldENsYXNzKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgZWwsIGRvYywgcmVuZGVyZXIsIHNldHRpbmdzIH0gPSB0aGlzO1xuICAgIGNvbnN0IGxheW91dCA9IHNldHRpbmdzLmxheW91dDtcbiAgICB1cGRhdGVIb3N0Q2xhc3MoZWwubmF0aXZlRWxlbWVudCwgcmVuZGVyZXIsIHtcbiAgICAgIFsnYWxhaW4tZGVmYXVsdCddOiB0cnVlLFxuICAgICAgW2BhbGFpbi1kZWZhdWx0X19maXhlZGBdOiBsYXlvdXQuZml4ZWQsXG4gICAgICBbYGFsYWluLWRlZmF1bHRfX2NvbGxhcHNlZGBdOiBsYXlvdXQuY29sbGFwc2VkLFxuICAgIH0pO1xuXG4gICAgZG9jLmJvZHkuY2xhc3NMaXN0W2xheW91dC5jb2xvcldlYWsgPyAnYWRkJyA6ICdyZW1vdmUnXSgnY29sb3Itd2VhaycpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMub3B0aW9ucyA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFBsZWFzZSBzcGVjaWZ5IHRoZSBbb3B0aW9uc10gcGFyYW1ldGVyLCBvdGhlcndpc2UgdGhlIGxheW91dCBkaXNwbGF5IGNhbm5vdCBiZSBjb21wbGV0ZWRgKTtcbiAgICB9XG4gICAgY29uc3QgeyBzZXR0aW5ncywgdW5zdWJzY3JpYmUkIH0gPSB0aGlzO1xuICAgIHNldHRpbmdzLm5vdGlmeS5waXBlKHRha2VVbnRpbCh1bnN1YnNjcmliZSQpKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5zZXRDbGFzcygpKTtcbiAgICB0aGlzLnNldENsYXNzKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBjb25zdCB7IHVuc3Vic2NyaWJlJCB9ID0gdGhpcztcbiAgICB1bnN1YnNjcmliZSQubmV4dCgpO1xuICAgIHVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=