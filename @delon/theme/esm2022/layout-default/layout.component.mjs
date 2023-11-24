import { __decorate } from "tslib";
import { DOCUMENT } from '@angular/common';
import { Component, ContentChildren, Inject, Input } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationCancel, NavigationEnd, NavigationError, RouteConfigLoadEnd, RouteConfigLoadStart } from '@angular/router';
import { filter } from 'rxjs';
import { updateHostClass } from '@delon/util/browser';
import { InputBoolean } from '@delon/util/decorator';
import { LayoutDefaultHeaderItemComponent } from './layout-header-item.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "ng-zorro-antd/message";
import * as i3 from "@delon/theme";
import * as i4 from "./layout.service";
import * as i5 from "@angular/common";
import * as i6 from "ng-zorro-antd/icon";
import * as i7 from "./layout-nav.component";
import * as i8 from "./layout-header.component";
export class LayoutDefaultComponent {
    get opt() {
        return this.srv.options;
    }
    set options(value) {
        this.srv.setOptions(value);
    }
    get showFetching() {
        if (this.fetchingStrictly)
            return this.fetching;
        return this.isFetching;
    }
    get collapsed() {
        return this.settings.layout.collapsed;
    }
    get collapsedIcon() {
        return this.srv.collapsedIcon;
    }
    toggleCollapsed() {
        this.srv.toggleCollapsed();
    }
    constructor(router, msgSrv, settings, el, renderer, doc, srv) {
        this.msgSrv = msgSrv;
        this.settings = settings;
        this.el = el;
        this.renderer = renderer;
        this.doc = doc;
        this.srv = srv;
        this.asideUser = null;
        this.asideBottom = null;
        this.nav = null;
        this.content = null;
        this.fetchingStrictly = false;
        this.fetching = false;
        this.isFetching = false;
        router.events
            .pipe(takeUntilDestroyed(), filter(() => !this.fetchingStrictly))
            .subscribe(ev => this.processEv(ev));
        this.srv.options$.pipe(takeUntilDestroyed()).subscribe(() => this.setClass());
        this.settings.notify.pipe(takeUntilDestroyed()).subscribe(() => this.setClass());
    }
    processEv(ev) {
        if (!this.isFetching && ev instanceof RouteConfigLoadStart) {
            this.isFetching = true;
        }
        if (ev instanceof NavigationError || ev instanceof NavigationCancel) {
            this.isFetching = false;
            const err = this.customError === null ? null : this.customError ?? `Could not load ${ev.url} route`;
            if (err && ev instanceof NavigationError) {
                this.msgSrv.error(err, { nzDuration: 1000 * 3 });
            }
            return;
        }
        if (!(ev instanceof NavigationEnd || ev instanceof RouteConfigLoadEnd)) {
            return;
        }
        if (this.isFetching) {
            setTimeout(() => {
                this.isFetching = false;
            }, 100);
        }
    }
    setClass() {
        const { el, doc, renderer, settings } = this;
        const layout = settings.layout;
        updateHostClass(el.nativeElement, renderer, {
            ['alain-default']: true,
            [`alain-default__fixed`]: layout.fixed,
            [`alain-default__collapsed`]: layout.collapsed,
            [`alain-default__hide-aside`]: this.opt.hideAside,
            [`alain-default__hide-header`]: this.opt.hideHeader
        });
        doc.body.classList[layout.colorWeak ? 'add' : 'remove']('color-weak');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: LayoutDefaultComponent, deps: [{ token: i1.Router }, { token: i2.NzMessageService }, { token: i3.SettingsService }, { token: i0.ElementRef }, { token: i0.Renderer2 }, { token: DOCUMENT }, { token: i4.LayoutDefaultService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: LayoutDefaultComponent, selector: "layout-default", inputs: { options: "options", asideUser: "asideUser", asideBottom: "asideBottom", nav: "nav", content: "content", customError: "customError", fetchingStrictly: "fetchingStrictly", fetching: "fetching" }, queries: [{ propertyName: "headerItems", predicate: LayoutDefaultHeaderItemComponent }], exportAs: ["layoutDefault"], ngImport: i0, template: `
    @if (showFetching) {
      <div class="alain-default__progress-bar"></div>
    }
    @if (!opt.hideHeader) {
      <layout-default-header [items]="headerItems" />
    }
    @if (!opt.hideAside) {
      <div class="alain-default__aside">
        <div class="alain-default__aside-wrap">
          <div class="alain-default__aside-inner">
            <ng-container *ngTemplateOutlet="asideUser" />
            <ng-container *ngTemplateOutlet="nav" />
            @if (!nav) {
              <layout-default-nav />
            }
          </div>
          @if (opt.showSiderCollapse) {
            <div class="alain-default__aside-link">
              @if (asideBottom) {
                <ng-container *ngTemplateOutlet="asideBottom" />
              } @else {
                <div class="alain-default__aside-link-collapsed" (click)="toggleCollapsed()">
                  <span nz-icon [nzType]="collapsedIcon"></span>
                </div>
              }
            </div>
          }
        </div>
      </div>
    }
    <section class="alain-default__content">
      <ng-container *ngTemplateOutlet="content" />
      <ng-content />
    </section>
  `, isInline: true, dependencies: [{ kind: "directive", type: i5.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i6.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "component", type: i7.LayoutDefaultNavComponent, selector: "layout-default-nav", inputs: ["disabledAcl", "autoCloseUnderPad", "recursivePath", "openStrictly", "maxLevelIcon"], outputs: ["select"] }, { kind: "component", type: i8.LayoutDefaultHeaderComponent, selector: "layout-default-header", inputs: ["items"] }] }); }
}
__decorate([
    InputBoolean()
], LayoutDefaultComponent.prototype, "fetchingStrictly", void 0);
__decorate([
    InputBoolean()
], LayoutDefaultComponent.prototype, "fetching", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: LayoutDefaultComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'layout-default',
                    exportAs: 'layoutDefault',
                    template: `
    @if (showFetching) {
      <div class="alain-default__progress-bar"></div>
    }
    @if (!opt.hideHeader) {
      <layout-default-header [items]="headerItems" />
    }
    @if (!opt.hideAside) {
      <div class="alain-default__aside">
        <div class="alain-default__aside-wrap">
          <div class="alain-default__aside-inner">
            <ng-container *ngTemplateOutlet="asideUser" />
            <ng-container *ngTemplateOutlet="nav" />
            @if (!nav) {
              <layout-default-nav />
            }
          </div>
          @if (opt.showSiderCollapse) {
            <div class="alain-default__aside-link">
              @if (asideBottom) {
                <ng-container *ngTemplateOutlet="asideBottom" />
              } @else {
                <div class="alain-default__aside-link-collapsed" (click)="toggleCollapsed()">
                  <span nz-icon [nzType]="collapsedIcon"></span>
                </div>
              }
            </div>
          }
        </div>
      </div>
    }
    <section class="alain-default__content">
      <ng-container *ngTemplateOutlet="content" />
      <ng-content />
    </section>
  `
                }]
        }], ctorParameters: () => [{ type: i1.Router }, { type: i2.NzMessageService }, { type: i3.SettingsService }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: i4.LayoutDefaultService }], propDecorators: { headerItems: [{
                type: ContentChildren,
                args: [LayoutDefaultHeaderItemComponent, { descendants: false }]
            }], options: [{
                type: Input
            }], asideUser: [{
                type: Input
            }], asideBottom: [{
                type: Input
            }], nav: [{
                type: Input
            }], content: [{
                type: Input
            }], customError: [{
                type: Input
            }], fetchingStrictly: [{
                type: Input
            }], fetching: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lL2xheW91dC1kZWZhdWx0L2xheW91dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsU0FBUyxFQUNULGVBQWUsRUFFZixNQUFNLEVBQ04sS0FBSyxFQUlOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ2hFLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsYUFBYSxFQUNiLGVBQWUsRUFDZixrQkFBa0IsRUFDbEIsb0JBQW9CLEVBR3JCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUc5QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFnQixZQUFZLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUluRSxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7Ozs7OztBQTRDbEYsTUFBTSxPQUFPLHNCQUFzQjtJQU9qQyxJQUFJLEdBQUc7UUFDTCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO0lBQzFCLENBQUM7SUFFRCxJQUNJLE9BQU8sQ0FBQyxLQUE4QztRQUN4RCxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBV0QsSUFBSSxZQUFZO1FBQ2QsSUFBSSxJQUFJLENBQUMsZ0JBQWdCO1lBQUUsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ2hELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBRUQsSUFBSSxTQUFT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RUFBRTtnQkFRckUsT0FBTztzQkFEVixLQUFLO2dCQUlHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFDRyxHQUFHO3NCQUFYLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ21CLGdCQUFnQjtzQkFBeEMsS0FBSztnQkFDbUIsUUFBUTtzQkFBaEMsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBFbGVtZW50UmVmLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBRdWVyeUxpc3QsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0YWtlVW50aWxEZXN0cm95ZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlL3J4anMtaW50ZXJvcCc7XG5pbXBvcnQge1xuICBOYXZpZ2F0aW9uQ2FuY2VsLFxuICBOYXZpZ2F0aW9uRW5kLFxuICBOYXZpZ2F0aW9uRXJyb3IsXG4gIFJvdXRlQ29uZmlnTG9hZEVuZCxcbiAgUm91dGVDb25maWdMb2FkU3RhcnQsXG4gIFJvdXRlcixcbiAgRXZlbnRcbn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBTZXR0aW5nc1NlcnZpY2UgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgdXBkYXRlSG9zdENsYXNzIH0gZnJvbSAnQGRlbG9uL3V0aWwvYnJvd3Nlcic7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIElucHV0Qm9vbGVhbiB9IGZyb20gJ0BkZWxvbi91dGlsL2RlY29yYXRvcic7XG5pbXBvcnQgdHlwZSB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBOek1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9tZXNzYWdlJztcblxuaW1wb3J0IHsgTGF5b3V0RGVmYXVsdEhlYWRlckl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2xheW91dC1oZWFkZXItaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGF5b3V0RGVmYXVsdFNlcnZpY2UgfSBmcm9tICcuL2xheW91dC5zZXJ2aWNlJztcbmltcG9ydCB7IExheW91dERlZmF1bHRPcHRpb25zIH0gZnJvbSAnLi90eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xheW91dC1kZWZhdWx0JyxcbiAgZXhwb3J0QXM6ICdsYXlvdXREZWZhdWx0JyxcbiAgdGVtcGxhdGU6IGBcbiAgICBAaWYgKHNob3dGZXRjaGluZykge1xuICAgICAgPGRpdiBjbGFzcz1cImFsYWluLWRlZmF1bHRfX3Byb2dyZXNzLWJhclwiPjwvZGl2PlxuICAgIH1cbiAgICBAaWYgKCFvcHQuaGlkZUhlYWRlcikge1xuICAgICAgPGxheW91dC1kZWZhdWx0LWhlYWRlciBbaXRlbXNdPVwiaGVhZGVySXRlbXNcIiAvPlxuICAgIH1cbiAgICBAaWYgKCFvcHQuaGlkZUFzaWRlKSB7XG4gICAgICA8ZGl2IGNsYXNzPVwiYWxhaW4tZGVmYXVsdF9fYXNpZGVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImFsYWluLWRlZmF1bHRfX2FzaWRlLXdyYXBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWxhaW4tZGVmYXVsdF9fYXNpZGUtaW5uZXJcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJhc2lkZVVzZXJcIiAvPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cIm5hdlwiIC8+XG4gICAgICAgICAgICBAaWYgKCFuYXYpIHtcbiAgICAgICAgICAgICAgPGxheW91dC1kZWZhdWx0LW5hdiAvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIEBpZiAob3B0LnNob3dTaWRlckNvbGxhcHNlKSB7XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWxhaW4tZGVmYXVsdF9fYXNpZGUtbGlua1wiPlxuICAgICAgICAgICAgICBAaWYgKGFzaWRlQm90dG9tKSB7XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImFzaWRlQm90dG9tXCIgLz5cbiAgICAgICAgICAgICAgfSBAZWxzZSB7XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFsYWluLWRlZmF1bHRfX2FzaWRlLWxpbmstY29sbGFwc2VkXCIgKGNsaWNrKT1cInRvZ2dsZUNvbGxhcHNlZCgpXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBuei1pY29uIFtuelR5cGVdPVwiY29sbGFwc2VkSWNvblwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIH1cbiAgICA8c2VjdGlvbiBjbGFzcz1cImFsYWluLWRlZmF1bHRfX2NvbnRlbnRcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjb250ZW50XCIgLz5cbiAgICAgIDxuZy1jb250ZW50IC8+XG4gICAgPC9zZWN0aW9uPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIExheW91dERlZmF1bHRDb21wb25lbnQge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZmV0Y2hpbmdTdHJpY3RseTogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZmV0Y2hpbmc6IEJvb2xlYW5JbnB1dDtcblxuICBAQ29udGVudENoaWxkcmVuKExheW91dERlZmF1bHRIZWFkZXJJdGVtQ29tcG9uZW50LCB7IGRlc2NlbmRhbnRzOiBmYWxzZSB9KVxuICBoZWFkZXJJdGVtcyE6IFF1ZXJ5TGlzdDxMYXlvdXREZWZhdWx0SGVhZGVySXRlbUNvbXBvbmVudD47XG5cbiAgZ2V0IG9wdCgpOiBMYXlvdXREZWZhdWx0T3B0aW9ucyB7XG4gICAgcmV0dXJuIHRoaXMuc3J2Lm9wdGlvbnM7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgb3B0aW9ucyh2YWx1ZTogTGF5b3V0RGVmYXVsdE9wdGlvbnMgfCBudWxsIHwgdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5zcnYuc2V0T3B0aW9ucyh2YWx1ZSk7XG4gIH1cbiAgQElucHV0KCkgYXNpZGVVc2VyOiBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBhc2lkZUJvdHRvbTogVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBuYXY6IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIGNvbnRlbnQ6IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIGN1c3RvbUVycm9yPzogc3RyaW5nIHwgbnVsbDtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGZldGNoaW5nU3RyaWN0bHkgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGZldGNoaW5nID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBpc0ZldGNoaW5nID0gZmFsc2U7XG5cbiAgZ2V0IHNob3dGZXRjaGluZygpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5mZXRjaGluZ1N0cmljdGx5KSByZXR1cm4gdGhpcy5mZXRjaGluZztcbiAgICByZXR1cm4gdGhpcy5pc0ZldGNoaW5nO1xuICB9XG5cbiAgZ2V0IGNvbGxhcHNlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy5sYXlvdXQuY29sbGFwc2VkO1xuICB9XG5cbiAgZ2V0IGNvbGxhcHNlZEljb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5zcnYuY29sbGFwc2VkSWNvbjtcbiAgfVxuXG4gIHRvZ2dsZUNvbGxhcHNlZCgpOiB2b2lkIHtcbiAgICB0aGlzLnNydi50b2dnbGVDb2xsYXBzZWQoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgbXNnU3J2OiBOek1lc3NhZ2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgc2V0dGluZ3M6IFNldHRpbmdzU2VydmljZSxcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogTnpTYWZlQW55LFxuICAgIHByaXZhdGUgc3J2OiBMYXlvdXREZWZhdWx0U2VydmljZVxuICApIHtcbiAgICByb3V0ZXIuZXZlbnRzXG4gICAgICAucGlwZShcbiAgICAgICAgdGFrZVVudGlsRGVzdHJveWVkKCksXG4gICAgICAgIGZpbHRlcigoKSA9PiAhdGhpcy5mZXRjaGluZ1N0cmljdGx5KVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZShldiA9PiB0aGlzLnByb2Nlc3NFdihldikpO1xuICAgIHRoaXMuc3J2Lm9wdGlvbnMkLnBpcGUodGFrZVVudGlsRGVzdHJveWVkKCkpLnN1YnNjcmliZSgoKSA9PiB0aGlzLnNldENsYXNzKCkpO1xuICAgIHRoaXMuc2V0dGluZ3Mubm90aWZ5LnBpcGUodGFrZVVudGlsRGVzdHJveWVkKCkpLnN1YnNjcmliZSgoKSA9PiB0aGlzLnNldENsYXNzKCkpO1xuICB9XG5cbiAgcHJvY2Vzc0V2KGV2OiBFdmVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5pc0ZldGNoaW5nICYmIGV2IGluc3RhbmNlb2YgUm91dGVDb25maWdMb2FkU3RhcnQpIHtcbiAgICAgIHRoaXMuaXNGZXRjaGluZyA9IHRydWU7XG4gICAgfVxuICAgIGlmIChldiBpbnN0YW5jZW9mIE5hdmlnYXRpb25FcnJvciB8fCBldiBpbnN0YW5jZW9mIE5hdmlnYXRpb25DYW5jZWwpIHtcbiAgICAgIHRoaXMuaXNGZXRjaGluZyA9IGZhbHNlO1xuICAgICAgY29uc3QgZXJyID0gdGhpcy5jdXN0b21FcnJvciA9PT0gbnVsbCA/IG51bGwgOiB0aGlzLmN1c3RvbUVycm9yID8/IGBDb3VsZCBub3QgbG9hZCAke2V2LnVybH0gcm91dGVgO1xuICAgICAgaWYgKGVyciAmJiBldiBpbnN0YW5jZW9mIE5hdmlnYXRpb25FcnJvcikge1xuICAgICAgICB0aGlzLm1zZ1Nydi5lcnJvcihlcnIsIHsgbnpEdXJhdGlvbjogMTAwMCAqIDMgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghKGV2IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCB8fCBldiBpbnN0YW5jZW9mIFJvdXRlQ29uZmlnTG9hZEVuZCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNGZXRjaGluZykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuaXNGZXRjaGluZyA9IGZhbHNlO1xuICAgICAgfSwgMTAwKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldENsYXNzKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgZWwsIGRvYywgcmVuZGVyZXIsIHNldHRpbmdzIH0gPSB0aGlzO1xuICAgIGNvbnN0IGxheW91dCA9IHNldHRpbmdzLmxheW91dDtcbiAgICB1cGRhdGVIb3N0Q2xhc3MoZWwubmF0aXZlRWxlbWVudCwgcmVuZGVyZXIsIHtcbiAgICAgIFsnYWxhaW4tZGVmYXVsdCddOiB0cnVlLFxuICAgICAgW2BhbGFpbi1kZWZhdWx0X19maXhlZGBdOiBsYXlvdXQuZml4ZWQsXG4gICAgICBbYGFsYWluLWRlZmF1bHRfX2NvbGxhcHNlZGBdOiBsYXlvdXQuY29sbGFwc2VkLFxuICAgICAgW2BhbGFpbi1kZWZhdWx0X19oaWRlLWFzaWRlYF06IHRoaXMub3B0LmhpZGVBc2lkZSxcbiAgICAgIFtgYWxhaW4tZGVmYXVsdF9faGlkZS1oZWFkZXJgXTogdGhpcy5vcHQuaGlkZUhlYWRlclxuICAgIH0pO1xuXG4gICAgZG9jLmJvZHkuY2xhc3NMaXN0W2xheW91dC5jb2xvcldlYWsgPyAnYWRkJyA6ICdyZW1vdmUnXSgnY29sb3Itd2VhaycpO1xuICB9XG59XG4iXX0=