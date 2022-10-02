import { DOCUMENT } from '@angular/common';
import { Component, ContentChildren, Inject, Input } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, RouteConfigLoadEnd, RouteConfigLoadStart } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { updateHostClass } from '@delon/util/browser';
import { LayoutDefaultHeaderItemComponent } from './layout-header-item.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "ng-zorro-antd/message";
import * as i3 from "@delon/theme";
import * as i4 from "@angular/common";
import * as i5 from "./layout-nav.component";
import * as i6 from "./layout-header.component";
export class LayoutDefaultComponent {
    constructor(router, msgSrv, settings, el, renderer, doc) {
        this.msgSrv = msgSrv;
        this.settings = settings;
        this.el = el;
        this.renderer = renderer;
        this.doc = doc;
        this.asideUser = null;
        this.nav = null;
        this.content = null;
        this.destroy$ = new Subject();
        this.isFetching = false;
        router.events.pipe(takeUntil(this.destroy$)).subscribe(ev => this.processEv(ev));
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
            [`alain-default__hide-aside`]: this.options.hideAside
        });
        doc.body.classList[layout.colorWeak ? 'add' : 'remove']('color-weak');
    }
    ngOnInit() {
        this.options = {
            logoExpanded: `./assets/logo-full.svg`,
            logoCollapsed: `./assets/logo.svg`,
            logoLink: `/`,
            hideAside: false,
            ...this.options
        };
        const { settings, destroy$ } = this;
        settings.notify.pipe(takeUntil(destroy$)).subscribe(() => this.setClass());
        this.setClass();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
LayoutDefaultComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: LayoutDefaultComponent, deps: [{ token: i1.Router }, { token: i2.NzMessageService }, { token: i3.SettingsService }, { token: i0.ElementRef }, { token: i0.Renderer2 }, { token: DOCUMENT }], target: i0.ɵɵFactoryTarget.Component });
LayoutDefaultComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.4", type: LayoutDefaultComponent, selector: "layout-default", inputs: { options: "options", asideUser: "asideUser", nav: "nav", content: "content", customError: "customError" }, queries: [{ propertyName: "headerItems", predicate: LayoutDefaultHeaderItemComponent }], exportAs: ["layoutDefault"], ngImport: i0, template: `
    <div class="alain-default__progress-bar" *ngIf="isFetching"></div>
    <layout-default-header [options]="options" [items]="headerItems"></layout-default-header>
    <div *ngIf="!options.hideAside" class="alain-default__aside">
      <div class="alain-default__aside-inner">
        <ng-container *ngTemplateOutlet="asideUser"></ng-container>
        <ng-container *ngTemplateOutlet="nav"></ng-container>
        <layout-default-nav *ngIf="!nav" class="d-block py-lg"></layout-default-nav>
      </div>
    </div>
    <section class="alain-default__content">
      <ng-container *ngTemplateOutlet="content"></ng-container>
      <ng-content></ng-content>
    </section>
  `, isInline: true, dependencies: [{ kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i4.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: i5.LayoutDefaultNavComponent, selector: "layout-default-nav", inputs: ["disabledAcl", "autoCloseUnderPad", "recursivePath", "openStrictly", "maxLevelIcon"], outputs: ["select"] }, { kind: "component", type: i6.LayoutDefaultHeaderComponent, selector: "layout-default-header", inputs: ["items", "options"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: LayoutDefaultComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'layout-default',
                    exportAs: 'layoutDefault',
                    template: `
    <div class="alain-default__progress-bar" *ngIf="isFetching"></div>
    <layout-default-header [options]="options" [items]="headerItems"></layout-default-header>
    <div *ngIf="!options.hideAside" class="alain-default__aside">
      <div class="alain-default__aside-inner">
        <ng-container *ngTemplateOutlet="asideUser"></ng-container>
        <ng-container *ngTemplateOutlet="nav"></ng-container>
        <layout-default-nav *ngIf="!nav" class="d-block py-lg"></layout-default-nav>
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
                }] }]; }, propDecorators: { headerItems: [{
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
            }], customError: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lL2xheW91dC1kZWZhdWx0L2xheW91dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFDTCxTQUFTLEVBQ1QsZUFBZSxFQUVmLE1BQU0sRUFDTixLQUFLLEVBTU4sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixhQUFhLEVBQ2IsZUFBZSxFQUNmLGtCQUFrQixFQUNsQixvQkFBb0IsRUFHckIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUcxQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFJdEQsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7Ozs7Ozs7O0FBc0JsRixNQUFNLE9BQU8sc0JBQXNCO0lBYWpDLFlBQ0UsTUFBYyxFQUNOLE1BQXdCLEVBQ3hCLFFBQXlCLEVBQ3pCLEVBQWMsRUFDZCxRQUFtQixFQUNELEdBQWM7UUFKaEMsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDeEIsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7UUFDekIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDRCxRQUFHLEdBQUgsR0FBRyxDQUFXO1FBZGpDLGNBQVMsR0FBNkIsSUFBSSxDQUFDO1FBQzNDLFFBQUcsR0FBNkIsSUFBSSxDQUFDO1FBQ3JDLFlBQU8sR0FBNkIsSUFBSSxDQUFDO1FBRzFDLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBQ3ZDLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFVakIsTUFBTSxDQUFDLE1BQU0s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QUFDOzttSEEzRVUsc0JBQXNCLDBKQW1CdkIsUUFBUTt1R0FuQlAsc0JBQXNCLHNNQUNoQixnQ0FBZ0MsMERBakJ2Qzs7Ozs7Ozs7Ozs7Ozs7R0FjVDsyRkFFVSxzQkFBc0I7a0JBbkJsQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFFBQVEsRUFBRSxlQUFlO29CQUN6QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7O0dBY1Q7aUJBQ0Y7OzBCQW9CSSxNQUFNOzJCQUFDLFFBQVE7NENBakJsQixXQUFXO3NCQURWLGVBQWU7dUJBQUMsZ0NBQWdDLEVBQUUsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFO2dCQUdoRSxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxHQUFHO3NCQUFYLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRWxlbWVudFJlZixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFF1ZXJ5TGlzdCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIE5hdmlnYXRpb25DYW5jZWwsXG4gIE5hdmlnYXRpb25FbmQsXG4gIE5hdmlnYXRpb25FcnJvcixcbiAgUm91dGVDb25maWdMb2FkRW5kLFxuICBSb3V0ZUNvbmZpZ0xvYWRTdGFydCxcbiAgUm91dGVyLFxuICBFdmVudFxufSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3ViamVjdCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFNldHRpbmdzU2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyB1cGRhdGVIb3N0Q2xhc3MgfSBmcm9tICdAZGVsb24vdXRpbC9icm93c2VyJztcbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IE56TWVzc2FnZVNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL21lc3NhZ2UnO1xuXG5pbXBvcnQgeyBMYXlvdXREZWZhdWx0SGVhZGVySXRlbUNvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0LWhlYWRlci1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYXlvdXREZWZhdWx0T3B0aW9ucyB9IGZyb20gJy4vdHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsYXlvdXQtZGVmYXVsdCcsXG4gIGV4cG9ydEFzOiAnbGF5b3V0RGVmYXVsdCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImFsYWluLWRlZmF1bHRfX3Byb2dyZXNzLWJhclwiICpuZ0lmPVwiaXNGZXRjaGluZ1wiPjwvZGl2PlxuICAgIDxsYXlvdXQtZGVmYXVsdC1oZWFkZXIgW29wdGlvbnNdPVwib3B0aW9uc1wiIFtpdGVtc109XCJoZWFkZXJJdGVtc1wiPjwvbGF5b3V0LWRlZmF1bHQtaGVhZGVyPlxuICAgIDxkaXYgKm5nSWY9XCIhb3B0aW9ucy5oaWRlQXNpZGVcIiBjbGFzcz1cImFsYWluLWRlZmF1bHRfX2FzaWRlXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiYWxhaW4tZGVmYXVsdF9fYXNpZGUtaW5uZXJcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImFzaWRlVXNlclwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwibmF2XCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgIDxsYXlvdXQtZGVmYXVsdC1uYXYgKm5nSWY9XCIhbmF2XCIgY2xhc3M9XCJkLWJsb2NrIHB5LWxnXCI+PC9sYXlvdXQtZGVmYXVsdC1uYXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8c2VjdGlvbiBjbGFzcz1cImFsYWluLWRlZmF1bHRfX2NvbnRlbnRcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjb250ZW50XCI+PC9uZy1jb250YWluZXI+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9zZWN0aW9uPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIExheW91dERlZmF1bHRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBDb250ZW50Q2hpbGRyZW4oTGF5b3V0RGVmYXVsdEhlYWRlckl0ZW1Db21wb25lbnQsIHsgZGVzY2VuZGFudHM6IGZhbHNlIH0pXG4gIGhlYWRlckl0ZW1zITogUXVlcnlMaXN0PExheW91dERlZmF1bHRIZWFkZXJJdGVtQ29tcG9uZW50PjtcblxuICBASW5wdXQoKSBvcHRpb25zITogTGF5b3V0RGVmYXVsdE9wdGlvbnM7XG4gIEBJbnB1dCgpIGFzaWRlVXNlcjogVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgbmF2OiBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBjb250ZW50OiBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBjdXN0b21FcnJvcj86IHN0cmluZyB8IG51bGw7XG5cbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIGlzRmV0Y2hpbmcgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIG1zZ1NydjogTnpNZXNzYWdlU2VydmljZSxcbiAgICBwcml2YXRlIHNldHRpbmdzOiBTZXR0aW5nc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IE56U2FmZUFueVxuICApIHtcbiAgICByb3V0ZXIuZXZlbnRzLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoZXYgPT4gdGhpcy5wcm9jZXNzRXYoZXYpKTtcbiAgfVxuXG4gIHByb2Nlc3NFdihldjogRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaXNGZXRjaGluZyAmJiBldiBpbnN0YW5jZW9mIFJvdXRlQ29uZmlnTG9hZFN0YXJ0KSB7XG4gICAgICB0aGlzLmlzRmV0Y2hpbmcgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoZXYgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRXJyb3IgfHwgZXYgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uQ2FuY2VsKSB7XG4gICAgICB0aGlzLmlzRmV0Y2hpbmcgPSBmYWxzZTtcbiAgICAgIGNvbnN0IGVyciA9IHRoaXMuY3VzdG9tRXJyb3IgPT09IG51bGwgPyBudWxsIDogdGhpcy5jdXN0b21FcnJvciA/PyBgQ291bGQgbm90IGxvYWQgJHtldi51cmx9IHJvdXRlYDtcbiAgICAgIGlmIChlcnIgJiYgZXYgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRXJyb3IpIHtcbiAgICAgICAgdGhpcy5tc2dTcnYuZXJyb3IoZXJyLCB7IG56RHVyYXRpb246IDEwMDAgKiAzIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIShldiBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQgfHwgZXYgaW5zdGFuY2VvZiBSb3V0ZUNvbmZpZ0xvYWRFbmQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmlzRmV0Y2hpbmcpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmlzRmV0Y2hpbmcgPSBmYWxzZTtcbiAgICAgIH0sIDEwMCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRDbGFzcygpOiB2b2lkIHtcbiAgICBjb25zdCB7IGVsLCBkb2MsIHJlbmRlcmVyLCBzZXR0aW5ncyB9ID0gdGhpcztcbiAgICBjb25zdCBsYXlvdXQgPSBzZXR0aW5ncy5sYXlvdXQ7XG4gICAgdXBkYXRlSG9zdENsYXNzKGVsLm5hdGl2ZUVsZW1lbnQsIHJlbmRlcmVyLCB7XG4gICAgICBbJ2FsYWluLWRlZmF1bHQnXTogdHJ1ZSxcbiAgICAgIFtgYWxhaW4tZGVmYXVsdF9fZml4ZWRgXTogbGF5b3V0LmZpeGVkLFxuICAgICAgW2BhbGFpbi1kZWZhdWx0X19jb2xsYXBzZWRgXTogbGF5b3V0LmNvbGxhcHNlZCxcbiAgICAgIFtgYWxhaW4tZGVmYXVsdF9faGlkZS1hc2lkZWBdOiB0aGlzLm9wdGlvbnMhLmhpZGVBc2lkZVxuICAgIH0pO1xuXG4gICAgZG9jLmJvZHkuY2xhc3NMaXN0W2xheW91dC5jb2xvcldlYWsgPyAnYWRkJyA6ICdyZW1vdmUnXSgnY29sb3Itd2VhaycpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgbG9nb0V4cGFuZGVkOiBgLi9hc3NldHMvbG9nby1mdWxsLnN2Z2AsXG4gICAgICBsb2dvQ29sbGFwc2VkOiBgLi9hc3NldHMvbG9nby5zdmdgLFxuICAgICAgbG9nb0xpbms6IGAvYCxcbiAgICAgIGhpZGVBc2lkZTogZmFsc2UsXG4gICAgICAuLi50aGlzLm9wdGlvbnNcbiAgICB9O1xuICAgIGNvbnN0IHsgc2V0dGluZ3MsIGRlc3Ryb3kkIH0gPSB0aGlzO1xuICAgIHNldHRpbmdzLm5vdGlmeS5waXBlKHRha2VVbnRpbChkZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB0aGlzLnNldENsYXNzKCkpO1xuICAgIHRoaXMuc2V0Q2xhc3MoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19