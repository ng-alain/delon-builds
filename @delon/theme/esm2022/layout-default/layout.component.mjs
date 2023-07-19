import { __decorate } from "tslib";
import { DOCUMENT } from '@angular/common';
import { Component, ContentChildren, Inject, Input } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, RouteConfigLoadEnd, RouteConfigLoadStart } from '@angular/router';
import { Subject, filter, takeUntil } from 'rxjs';
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
class LayoutDefaultComponent {
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
        this.destroy$ = new Subject();
        this.isFetching = false;
        const { destroy$ } = this;
        router.events
            .pipe(takeUntil(destroy$), filter(() => !this.fetchingStrictly))
            .subscribe(ev => this.processEv(ev));
        this.srv.options$.pipe(takeUntil(destroy$)).subscribe(() => this.setClass());
        this.settings.notify.pipe(takeUntil(destroy$)).subscribe(() => this.setClass());
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
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: LayoutDefaultComponent, deps: [{ token: i1.Router }, { token: i2.NzMessageService }, { token: i3.SettingsService }, { token: i0.ElementRef }, { token: i0.Renderer2 }, { token: DOCUMENT }, { token: i4.LayoutDefaultService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.5", type: LayoutDefaultComponent, selector: "layout-default", inputs: { options: "options", asideUser: "asideUser", asideBottom: "asideBottom", nav: "nav", content: "content", customError: "customError", fetchingStrictly: "fetchingStrictly", fetching: "fetching" }, queries: [{ propertyName: "headerItems", predicate: LayoutDefaultHeaderItemComponent }], exportAs: ["layoutDefault"], ngImport: i0, template: `
    <div class="alain-default__progress-bar" *ngIf="showFetching"></div>
    <layout-default-header *ngIf="!opt.hideHeader" [items]="headerItems"></layout-default-header>
    <div *ngIf="!opt.hideAside" class="alain-default__aside">
      <div class="alain-default__aside-wrap">
        <div class="alain-default__aside-inner">
          <ng-container *ngTemplateOutlet="asideUser"></ng-container>
          <ng-container *ngTemplateOutlet="nav"></ng-container>
          <layout-default-nav *ngIf="!nav"></layout-default-nav>
        </div>
        <div *ngIf="opt.showSiderCollapse" class="alain-default__aside-link">
          <ng-container *ngIf="asideBottom === null; else asideBottom">
            <div class="alain-default__aside-link-collapsed" (click)="toggleCollapsed()">
              <span nz-icon [nzType]="collapsedIcon"></span>
            </div>
          </ng-container>
        </div>
      </div>
    </div>
    <section class="alain-default__content">
      <ng-container *ngTemplateOutlet="content"></ng-container>
      <ng-content></ng-content>
    </section>
  `, isInline: true, dependencies: [{ kind: "directive", type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i5.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i6.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "component", type: i7.LayoutDefaultNavComponent, selector: "layout-default-nav", inputs: ["disabledAcl", "autoCloseUnderPad", "recursivePath", "openStrictly", "maxLevelIcon"], outputs: ["select"] }, { kind: "component", type: i8.LayoutDefaultHeaderComponent, selector: "layout-default-header", inputs: ["items"] }] }); }
}
__decorate([
    InputBoolean()
], LayoutDefaultComponent.prototype, "fetchingStrictly", void 0);
__decorate([
    InputBoolean()
], LayoutDefaultComponent.prototype, "fetching", void 0);
export { LayoutDefaultComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: LayoutDefaultComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'layout-default',
                    exportAs: 'layoutDefault',
                    template: `
    <div class="alain-default__progress-bar" *ngIf="showFetching"></div>
    <layout-default-header *ngIf="!opt.hideHeader" [items]="headerItems"></layout-default-header>
    <div *ngIf="!opt.hideAside" class="alain-default__aside">
      <div class="alain-default__aside-wrap">
        <div class="alain-default__aside-inner">
          <ng-container *ngTemplateOutlet="asideUser"></ng-container>
          <ng-container *ngTemplateOutlet="nav"></ng-container>
          <layout-default-nav *ngIf="!nav"></layout-default-nav>
        </div>
        <div *ngIf="opt.showSiderCollapse" class="alain-default__aside-link">
          <ng-container *ngIf="asideBottom === null; else asideBottom">
            <div class="alain-default__aside-link-collapsed" (click)="toggleCollapsed()">
              <span nz-icon [nzType]="collapsedIcon"></span>
            </div>
          </ng-container>
        </div>
      </div>
    </div>
    <section class="alain-default__content">
      <ng-container *ngTemplateOutlet="content"></ng-container>
      <ng-content></ng-content>
    </section>
  `
                }]
        }], ctorParameters: function () { return [{ type: i1.Router }, { type: i2.NzMessageService }, { type: i3.SettingsService }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: i4.LayoutDefaultService }]; }, propDecorators: { headerItems: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lL2xheW91dC1kZWZhdWx0L2xheW91dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsU0FBUyxFQUNULGVBQWUsRUFFZixNQUFNLEVBQ04sS0FBSyxFQUtOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsYUFBYSxFQUNiLGVBQWUsRUFDZixrQkFBa0IsRUFDbEIsb0JBQW9CLEVBR3JCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBR2xELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQWdCLFlBQVksRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBSW5FLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7Ozs7Ozs7O0FBSWxGLE1BNEJhLHNCQUFzQjtJQU9qQyxJQUFJLEdBQUc7UUFDTCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO0lBQzFCLENBQUM7SUFFRCxJQUNJLE9BQU8sQ0FBQyxLQUE4QztRQUN4RCxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBWUQsSUFBSSxZQUFZO1FBQ2QsSUFBSSxJQUFJLENBQUMsZ0JBQWdCO1lBQUUsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ2hELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBRUQsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFD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Z0I7b0JBQzFCLFFBQVEsRUFBRSxlQUFlO29CQUN6QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBdUJUO2lCQUNGOzswQkFrREksTUFBTTsyQkFBQyxRQUFROytFQTVDbEIsV0FBVztzQkFEVixlQUFlO3VCQUFDLGdDQUFnQyxFQUFFLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRTtnQkFRckUsT0FBTztzQkFEVixLQUFLO2dCQUlHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFDRyxHQUFHO3NCQUFYLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ21CLGdCQUFnQjtzQkFBeEMsS0FBSztnQkFDbUIsUUFBUTtzQkFBaEMsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBFbGVtZW50UmVmLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIFF1ZXJ5TGlzdCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIE5hdmlnYXRpb25DYW5jZWwsXG4gIE5hdmlnYXRpb25FbmQsXG4gIE5hdmlnYXRpb25FcnJvcixcbiAgUm91dGVDb25maWdMb2FkRW5kLFxuICBSb3V0ZUNvbmZpZ0xvYWRTdGFydCxcbiAgUm91dGVyLFxuICBFdmVudFxufSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3ViamVjdCwgZmlsdGVyLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgU2V0dGluZ3NTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IHVwZGF0ZUhvc3RDbGFzcyB9IGZyb20gJ0BkZWxvbi91dGlsL2Jyb3dzZXInO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBJbnB1dEJvb2xlYW4gfSBmcm9tICdAZGVsb24vdXRpbC9kZWNvcmF0b3InO1xuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgTnpNZXNzYWdlU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvbWVzc2FnZSc7XG5cbmltcG9ydCB7IExheW91dERlZmF1bHRIZWFkZXJJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQtaGVhZGVyLWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IExheW91dERlZmF1bHRTZXJ2aWNlIH0gZnJvbSAnLi9sYXlvdXQuc2VydmljZSc7XG5pbXBvcnQgeyBMYXlvdXREZWZhdWx0T3B0aW9ucyB9IGZyb20gJy4vdHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsYXlvdXQtZGVmYXVsdCcsXG4gIGV4cG9ydEFzOiAnbGF5b3V0RGVmYXVsdCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImFsYWluLWRlZmF1bHRfX3Byb2dyZXNzLWJhclwiICpuZ0lmPVwic2hvd0ZldGNoaW5nXCI+PC9kaXY+XG4gICAgPGxheW91dC1kZWZhdWx0LWhlYWRlciAqbmdJZj1cIiFvcHQuaGlkZUhlYWRlclwiIFtpdGVtc109XCJoZWFkZXJJdGVtc1wiPjwvbGF5b3V0LWRlZmF1bHQtaGVhZGVyPlxuICAgIDxkaXYgKm5nSWY9XCIhb3B0LmhpZGVBc2lkZVwiIGNsYXNzPVwiYWxhaW4tZGVmYXVsdF9fYXNpZGVcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJhbGFpbi1kZWZhdWx0X19hc2lkZS13cmFwXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbGFpbi1kZWZhdWx0X19hc2lkZS1pbm5lclwiPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJhc2lkZVVzZXJcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwibmF2XCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPGxheW91dC1kZWZhdWx0LW5hdiAqbmdJZj1cIiFuYXZcIj48L2xheW91dC1kZWZhdWx0LW5hdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgKm5nSWY9XCJvcHQuc2hvd1NpZGVyQ29sbGFwc2VcIiBjbGFzcz1cImFsYWluLWRlZmF1bHRfX2FzaWRlLWxpbmtcIj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiYXNpZGVCb3R0b20gPT09IG51bGw7IGVsc2UgYXNpZGVCb3R0b21cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbGFpbi1kZWZhdWx0X19hc2lkZS1saW5rLWNvbGxhcHNlZFwiIChjbGljayk9XCJ0b2dnbGVDb2xsYXBzZWQoKVwiPlxuICAgICAgICAgICAgICA8c3BhbiBuei1pY29uIFtuelR5cGVdPVwiY29sbGFwc2VkSWNvblwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxzZWN0aW9uIGNsYXNzPVwiYWxhaW4tZGVmYXVsdF9fY29udGVudFwiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImNvbnRlbnRcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L3NlY3Rpb24+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgTGF5b3V0RGVmYXVsdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9mZXRjaGluZ1N0cmljdGx5OiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9mZXRjaGluZzogQm9vbGVhbklucHV0O1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oTGF5b3V0RGVmYXVsdEhlYWRlckl0ZW1Db21wb25lbnQsIHsgZGVzY2VuZGFudHM6IGZhbHNlIH0pXG4gIGhlYWRlckl0ZW1zITogUXVlcnlMaXN0PExheW91dERlZmF1bHRIZWFkZXJJdGVtQ29tcG9uZW50PjtcblxuICBnZXQgb3B0KCk6IExheW91dERlZmF1bHRPcHRpb25zIHtcbiAgICByZXR1cm4gdGhpcy5zcnYub3B0aW9ucztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBvcHRpb25zKHZhbHVlOiBMYXlvdXREZWZhdWx0T3B0aW9ucyB8IG51bGwgfCB1bmRlZmluZWQpIHtcbiAgICB0aGlzLnNydi5zZXRPcHRpb25zKHZhbHVlKTtcbiAgfVxuICBASW5wdXQoKSBhc2lkZVVzZXI6IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIGFzaWRlQm90dG9tOiBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG5hdjogVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgY29udGVudDogVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgY3VzdG9tRXJyb3I/OiBzdHJpbmcgfCBudWxsO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZmV0Y2hpbmdTdHJpY3RseSA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZmV0Y2hpbmcgPSBmYWxzZTtcblxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSBpc0ZldGNoaW5nID0gZmFsc2U7XG5cbiAgZ2V0IHNob3dGZXRjaGluZygpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5mZXRjaGluZ1N0cmljdGx5KSByZXR1cm4gdGhpcy5mZXRjaGluZztcbiAgICByZXR1cm4gdGhpcy5pc0ZldGNoaW5nO1xuICB9XG5cbiAgZ2V0IGNvbGxhcHNlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy5sYXlvdXQuY29sbGFwc2VkO1xuICB9XG5cbiAgZ2V0IGNvbGxhcHNlZEljb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5zcnYuY29sbGFwc2VkSWNvbjtcbiAgfVxuXG4gIHRvZ2dsZUNvbGxhcHNlZCgpOiB2b2lkIHtcbiAgICB0aGlzLnNydi50b2dnbGVDb2xsYXBzZWQoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgbXNnU3J2OiBOek1lc3NhZ2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgc2V0dGluZ3M6IFNldHRpbmdzU2VydmljZSxcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogTnpTYWZlQW55LFxuICAgIHByaXZhdGUgc3J2OiBMYXlvdXREZWZhdWx0U2VydmljZVxuICApIHtcbiAgICBjb25zdCB7IGRlc3Ryb3kkIH0gPSB0aGlzO1xuICAgIHJvdXRlci5ldmVudHNcbiAgICAgIC5waXBlKFxuICAgICAgICB0YWtlVW50aWwoZGVzdHJveSQpLFxuICAgICAgICBmaWx0ZXIoKCkgPT4gIXRoaXMuZmV0Y2hpbmdTdHJpY3RseSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoZXYgPT4gdGhpcy5wcm9jZXNzRXYoZXYpKTtcbiAgICB0aGlzLnNydi5vcHRpb25zJC5waXBlKHRha2VVbnRpbChkZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB0aGlzLnNldENsYXNzKCkpO1xuICAgIHRoaXMuc2V0dGluZ3Mubm90aWZ5LnBpcGUodGFrZVVudGlsKGRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMuc2V0Q2xhc3MoKSk7XG4gIH1cblxuICBwcm9jZXNzRXYoZXY6IEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlzRmV0Y2hpbmcgJiYgZXYgaW5zdGFuY2VvZiBSb3V0ZUNvbmZpZ0xvYWRTdGFydCkge1xuICAgICAgdGhpcy5pc0ZldGNoaW5nID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGV2IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVycm9yIHx8IGV2IGluc3RhbmNlb2YgTmF2aWdhdGlvbkNhbmNlbCkge1xuICAgICAgdGhpcy5pc0ZldGNoaW5nID0gZmFsc2U7XG4gICAgICBjb25zdCBlcnIgPSB0aGlzLmN1c3RvbUVycm9yID09PSBudWxsID8gbnVsbCA6IHRoaXMuY3VzdG9tRXJyb3IgPz8gYENvdWxkIG5vdCBsb2FkICR7ZXYudXJsfSByb3V0ZWA7XG4gICAgICBpZiAoZXJyICYmIGV2IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVycm9yKSB7XG4gICAgICAgIHRoaXMubXNnU3J2LmVycm9yKGVyciwgeyBuekR1cmF0aW9uOiAxMDAwICogMyB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCEoZXYgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kIHx8IGV2IGluc3RhbmNlb2YgUm91dGVDb25maWdMb2FkRW5kKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5pc0ZldGNoaW5nKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5pc0ZldGNoaW5nID0gZmFsc2U7XG4gICAgICB9LCAxMDApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0Q2xhc3MoKTogdm9pZCB7XG4gICAgY29uc3QgeyBlbCwgZG9jLCByZW5kZXJlciwgc2V0dGluZ3MgfSA9IHRoaXM7XG4gICAgY29uc3QgbGF5b3V0ID0gc2V0dGluZ3MubGF5b3V0O1xuICAgIHVwZGF0ZUhvc3RDbGFzcyhlbC5uYXRpdmVFbGVtZW50LCByZW5kZXJlciwge1xuICAgICAgWydhbGFpbi1kZWZhdWx0J106IHRydWUsXG4gICAgICBbYGFsYWluLWRlZmF1bHRfX2ZpeGVkYF06IGxheW91dC5maXhlZCxcbiAgICAgIFtgYWxhaW4tZGVmYXVsdF9fY29sbGFwc2VkYF06IGxheW91dC5jb2xsYXBzZWQsXG4gICAgICBbYGFsYWluLWRlZmF1bHRfX2hpZGUtYXNpZGVgXTogdGhpcy5vcHQuaGlkZUFzaWRlLFxuICAgICAgW2BhbGFpbi1kZWZhdWx0X19oaWRlLWhlYWRlcmBdOiB0aGlzLm9wdC5oaWRlSGVhZGVyXG4gICAgfSk7XG5cbiAgICBkb2MuYm9keS5jbGFzc0xpc3RbbGF5b3V0LmNvbG9yV2VhayA/ICdhZGQnIDogJ3JlbW92ZSddKCdjb2xvci13ZWFrJyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==