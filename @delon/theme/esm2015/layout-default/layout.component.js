import { DOCUMENT } from '@angular/common';
import { Component, ContentChildren, ElementRef, Inject, Input, QueryList, Renderer2, TemplateRef } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';
import { SettingsService } from '@delon/theme';
import { updateHostClass } from '@delon/util/browser';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LayoutDefaultHeaderItemComponent } from './layout-header-item.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "ng-zorro-antd/message";
import * as i3 from "@delon/theme";
export class LayoutDefaultComponent {
    constructor(router, msgSrv, settings, el, renderer, doc) {
        this.settings = settings;
        this.el = el;
        this.renderer = renderer;
        this.doc = doc;
        this.destroy$ = new Subject();
        this.isFetching = false;
        // scroll to top in change page
        router.events.pipe(takeUntil(this.destroy$)).subscribe(evt => {
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
                setTimeout(() => {
                    this.isFetching = false;
                }, 100);
            }
        });
    }
    setClass() {
        const { el, doc, renderer, settings } = this;
        const layout = settings.layout;
        updateHostClass(el.nativeElement, renderer, {
            ['alain-default']: true,
            [`alain-default__fixed`]: layout.fixed,
            [`alain-default__collapsed`]: layout.collapsed,
        });
        doc.body.classList[layout.colorWeak ? 'add' : 'remove']('color-weak');
    }
    ngOnInit() {
        if (this.options == null) {
            throw new Error(`Please specify the [options] parameter, otherwise the layout display cannot be completed`);
        }
        const { settings, destroy$ } = this;
        settings.notify.pipe(takeUntil(destroy$)).subscribe(() => this.setClass());
        this.setClass();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
/** @nocollapse */ LayoutDefaultComponent.ɵfac = function LayoutDefaultComponent_Factory(t) { return new (t || LayoutDefaultComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.NzMessageService), i0.ɵɵdirectiveInject(i3.SettingsService), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(DOCUMENT)); };
/** @nocollapse */ LayoutDefaultComponent.ɵcmp = i0.ɵɵngDeclareComponent({ version: "11.1.1", type: LayoutDefaultComponent, selector: "layout-default", inputs: { options: "options", asideUser: "asideUser", nav: "nav", content: "content" }, queries: [{ propertyName: "headerItems", predicate: LayoutDefaultHeaderItemComponent, emitDistinctChangesOnly: false }], ngImport: i0, template: `
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
  `, isInline: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LayoutDefaultComponent, [{
        type: Component,
        args: [{
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
  `,
            }]
    }], function () { return [{ type: i1.Router }, { type: i2.NzMessageService }, { type: i3.SettingsService }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, { headerItems: [{
            type: ContentChildren,
            args: [LayoutDefaultHeaderItemComponent, { descendants: false }]
        }], options: [{
            type: Input
        }], asideUser: [{
            type: Input
        }], nav: [{
            type: Input
        }], content: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lL2xheW91dC1kZWZhdWx0L2xheW91dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFxQixTQUFTLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1SSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxrQkFBa0IsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNySSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQy9DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7QUFxQmxGLE1BQU0sT0FBTyxzQkFBc0I7SUFZakMsWUFDRSxNQUFjLEVBQ2QsTUFBd0IsRUFDaEIsUUFBeUIsRUFDekIsRUFBYyxFQUNkLFFBQW1CLEVBQ0QsR0FBUTtRQUgxQixhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQUN6QixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNELFFBQUcsR0FBSCxHQUFHLENBQUs7UUFUNUIsYUFBUSxHQUFHLElBQUksT0FBTyxF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ZUFBZTttQkFBQyxnQ0FBZ0MsRUFBRSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUU7WUFHaEUsT0FBTztrQkFBZixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLEdBQUc7a0JBQVgsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLCBFbGVtZW50UmVmLCBJbmplY3QsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgUXVlcnlMaXN0LCBSZW5kZXJlcjIsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uQ2FuY2VsLCBOYXZpZ2F0aW9uRW5kLCBOYXZpZ2F0aW9uRXJyb3IsIFJvdXRlQ29uZmlnTG9hZEVuZCwgUm91dGVDb25maWdMb2FkU3RhcnQsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTZXR0aW5nc1NlcnZpY2UgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgdXBkYXRlSG9zdENsYXNzIH0gZnJvbSAnQGRlbG9uL3V0aWwvYnJvd3Nlcic7XG5pbXBvcnQgeyBOek1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9tZXNzYWdlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IExheW91dERlZmF1bHRIZWFkZXJJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQtaGVhZGVyLWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IExheW91dERlZmF1bHRPcHRpb25zIH0gZnJvbSAnLi90eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xheW91dC1kZWZhdWx0JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiYWxhaW4tZGVmYXVsdF9fcHJvZ3Jlc3MtYmFyXCIgKm5nSWY9XCJpc0ZldGNoaW5nXCI+PC9kaXY+XG4gICAgPGxheW91dC1kZWZhdWx0LWhlYWRlcj48L2xheW91dC1kZWZhdWx0LWhlYWRlcj5cbiAgICA8ZGl2IGNsYXNzPVwiYWxhaW4tZGVmYXVsdF9fYXNpZGVcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJhbGFpbi1kZWZhdWx0X19hc2lkZS1pbm5lclwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiYXNpZGVVc2VyXCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJuYXZcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPGxheW91dC1kZWZhdWx0LW5hdiBjbGFzcz1cImQtYmxvY2sgcHktbGdcIj48L2xheW91dC1kZWZhdWx0LW5hdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxzZWN0aW9uIGNsYXNzPVwiYWxhaW4tZGVmYXVsdF9fY29udGVudFwiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImNvbnRlbnRcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L3NlY3Rpb24+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIExheW91dERlZmF1bHRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBDb250ZW50Q2hpbGRyZW4oTGF5b3V0RGVmYXVsdEhlYWRlckl0ZW1Db21wb25lbnQsIHsgZGVzY2VuZGFudHM6IGZhbHNlIH0pXG4gIGhlYWRlckl0ZW1zITogUXVlcnlMaXN0PExheW91dERlZmF1bHRIZWFkZXJJdGVtQ29tcG9uZW50PjtcblxuICBASW5wdXQoKSBvcHRpb25zOiBMYXlvdXREZWZhdWx0T3B0aW9ucztcbiAgQElucHV0KCkgYXNpZGVVc2VyOiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgbmF2OiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgY29udGVudDogVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIGlzRmV0Y2hpbmcgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICByb3V0ZXI6IFJvdXRlcixcbiAgICBtc2dTcnY6IE56TWVzc2FnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBzZXR0aW5nczogU2V0dGluZ3NTZXJ2aWNlLFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnksXG4gICkge1xuICAgIC8vIHNjcm9sbCB0byB0b3AgaW4gY2hhbmdlIHBhZ2VcbiAgICByb3V0ZXIuZXZlbnRzLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoZXZ0ID0+IHtcbiAgICAgIGlmICghdGhpcy5pc0ZldGNoaW5nICYmIGV2dCBpbnN0YW5jZW9mIFJvdXRlQ29uZmlnTG9hZFN0YXJ0KSB7XG4gICAgICAgIHRoaXMuaXNGZXRjaGluZyA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoZXZ0IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVycm9yIHx8IGV2dCBpbnN0YW5jZW9mIE5hdmlnYXRpb25DYW5jZWwpIHtcbiAgICAgICAgdGhpcy5pc0ZldGNoaW5nID0gZmFsc2U7XG4gICAgICAgIGlmIChldnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRXJyb3IpIHtcbiAgICAgICAgICBtc2dTcnYuZXJyb3IoYENvdWxkIG5vdCBsb2FkICR7ZXZ0LnVybH0gcm91dGVgLCB7IG56RHVyYXRpb246IDEwMDAgKiAzIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICghKGV2dCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQgfHwgZXZ0IGluc3RhbmNlb2YgUm91dGVDb25maWdMb2FkRW5kKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5pc0ZldGNoaW5nKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaXNGZXRjaGluZyA9IGZhbHNlO1xuICAgICAgICB9LCAxMDApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDbGFzcygpOiB2b2lkIHtcbiAgICBjb25zdCB7IGVsLCBkb2MsIHJlbmRlcmVyLCBzZXR0aW5ncyB9ID0gdGhpcztcbiAgICBjb25zdCBsYXlvdXQgPSBzZXR0aW5ncy5sYXlvdXQ7XG4gICAgdXBkYXRlSG9zdENsYXNzKGVsLm5hdGl2ZUVsZW1lbnQsIHJlbmRlcmVyLCB7XG4gICAgICBbJ2FsYWluLWRlZmF1bHQnXTogdHJ1ZSxcbiAgICAgIFtgYWxhaW4tZGVmYXVsdF9fZml4ZWRgXTogbGF5b3V0LmZpeGVkLFxuICAgICAgW2BhbGFpbi1kZWZhdWx0X19jb2xsYXBzZWRgXTogbGF5b3V0LmNvbGxhcHNlZCxcbiAgICB9KTtcblxuICAgIGRvYy5ib2R5LmNsYXNzTGlzdFtsYXlvdXQuY29sb3JXZWFrID8gJ2FkZCcgOiAncmVtb3ZlJ10oJ2NvbG9yLXdlYWsnKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm9wdGlvbnMgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBQbGVhc2Ugc3BlY2lmeSB0aGUgW29wdGlvbnNdIHBhcmFtZXRlciwgb3RoZXJ3aXNlIHRoZSBsYXlvdXQgZGlzcGxheSBjYW5ub3QgYmUgY29tcGxldGVkYCk7XG4gICAgfVxuICAgIGNvbnN0IHsgc2V0dGluZ3MsIGRlc3Ryb3kkIH0gPSB0aGlzO1xuICAgIHNldHRpbmdzLm5vdGlmeS5waXBlKHRha2VVbnRpbChkZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB0aGlzLnNldENsYXNzKCkpO1xuICAgIHRoaXMuc2V0Q2xhc3MoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19