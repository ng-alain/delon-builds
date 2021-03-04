import { __decorate, __metadata } from "tslib";
import { DOCUMENT } from '@angular/common';
import { Component, ContentChildren, ElementRef, Inject, Input, QueryList, Renderer2, TemplateRef } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';
import { SettingsService } from '@delon/theme';
import { updateHostClass } from '@delon/util/browser';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NzMessageService } from 'ng-zorro-antd/message';
import { LayoutDefaultHeaderItemComponent } from './layout-header-item.component';
let LayoutDefaultComponent = class LayoutDefaultComponent {
    constructor(router, msgSrv, settings, el, renderer, doc) {
        this.settings = settings;
        this.el = el;
        this.renderer = renderer;
        this.doc = doc;
        this.isFetching = false;
        // scroll to top in change page
        router.events.pipe(untilDestroyed(this)).subscribe(evt => {
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
        this.settings.notify.pipe(untilDestroyed(this)).subscribe(() => this.setClass());
        this.setClass();
    }
};
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
        <layout-default-nav *ngIf="!nav" class="d-block py-lg"></layout-default-nav>
      </div>
    </div>
    <section class="alain-default__content">
      <ng-container *ngTemplateOutlet="content"></ng-container>
      <ng-content></ng-content>
    </section>
  `
            },] }
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
LayoutDefaultComponent = __decorate([
    UntilDestroy(),
    __metadata("design:paramtypes", [Router,
        NzMessageService,
        SettingsService,
        ElementRef,
        Renderer2, Object])
], LayoutDefaultComponent);
export { LayoutDefaultComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lL2xheW91dC1kZWZhdWx0L2xheW91dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBVSxTQUFTLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqSSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxrQkFBa0IsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNySSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQy9DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0lBc0JyRSxzQkFBc0IsU0FBdEIsc0JBQXNCO0lBV2pDLFlBQ0UsTUFBYyxFQUNkLE1BQXdCLEVBQ2hCLFFBQXlCLEVBQ3pCLEVBQWMsRUFDZCxRQUFtQixFQUNELEdBQVE7UUFIMUIsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7UUFDekIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDRCxRQUFHLEdBQUgsR0FBRyxDQUFLO1FBUnBDLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFVakIsK0JBQStCO1FBQy9CLE1BQU0sQ0FBQyxNQUFN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J0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb21wb25lbnQsIENvbnRlbnRDaGlsZHJlbiwgRWxlbWVudFJlZiwgSW5qZWN0LCBJbnB1dCwgT25Jbml0LCBRdWVyeUxpc3QsIFJlbmRlcmVyMiwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdmlnYXRpb25DYW5jZWwsIE5hdmlnYXRpb25FbmQsIE5hdmlnYXRpb25FcnJvciwgUm91dGVDb25maWdMb2FkRW5kLCBSb3V0ZUNvbmZpZ0xvYWRTdGFydCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFNldHRpbmdzU2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyB1cGRhdGVIb3N0Q2xhc3MgfSBmcm9tICdAZGVsb24vdXRpbC9icm93c2VyJztcbmltcG9ydCB7IFVudGlsRGVzdHJveSwgdW50aWxEZXN0cm95ZWQgfSBmcm9tICdAbmduZWF0L3VudGlsLWRlc3Ryb3knO1xuaW1wb3J0IHsgTnpNZXNzYWdlU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvbWVzc2FnZSc7XG5pbXBvcnQgeyBMYXlvdXREZWZhdWx0SGVhZGVySXRlbUNvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0LWhlYWRlci1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYXlvdXREZWZhdWx0T3B0aW9ucyB9IGZyb20gJy4vdHlwZXMnO1xuXG5AVW50aWxEZXN0cm95KClcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xheW91dC1kZWZhdWx0JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiYWxhaW4tZGVmYXVsdF9fcHJvZ3Jlc3MtYmFyXCIgKm5nSWY9XCJpc0ZldGNoaW5nXCI+PC9kaXY+XG4gICAgPGxheW91dC1kZWZhdWx0LWhlYWRlcj48L2xheW91dC1kZWZhdWx0LWhlYWRlcj5cbiAgICA8ZGl2IGNsYXNzPVwiYWxhaW4tZGVmYXVsdF9fYXNpZGVcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJhbGFpbi1kZWZhdWx0X19hc2lkZS1pbm5lclwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiYXNpZGVVc2VyXCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJuYXZcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPGxheW91dC1kZWZhdWx0LW5hdiAqbmdJZj1cIiFuYXZcIiBjbGFzcz1cImQtYmxvY2sgcHktbGdcIj48L2xheW91dC1kZWZhdWx0LW5hdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxzZWN0aW9uIGNsYXNzPVwiYWxhaW4tZGVmYXVsdF9fY29udGVudFwiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImNvbnRlbnRcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L3NlY3Rpb24+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIExheW91dERlZmF1bHRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBAQ29udGVudENoaWxkcmVuKExheW91dERlZmF1bHRIZWFkZXJJdGVtQ29tcG9uZW50LCB7IGRlc2NlbmRhbnRzOiBmYWxzZSB9KVxuICBoZWFkZXJJdGVtcyE6IFF1ZXJ5TGlzdDxMYXlvdXREZWZhdWx0SGVhZGVySXRlbUNvbXBvbmVudD47XG5cbiAgQElucHV0KCkgb3B0aW9uczogTGF5b3V0RGVmYXVsdE9wdGlvbnM7XG4gIEBJbnB1dCgpIGFzaWRlVXNlcjogVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIG5hdjogVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIGNvbnRlbnQ6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIGlzRmV0Y2hpbmcgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICByb3V0ZXI6IFJvdXRlcixcbiAgICBtc2dTcnY6IE56TWVzc2FnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBzZXR0aW5nczogU2V0dGluZ3NTZXJ2aWNlLFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnksXG4gICkge1xuICAgIC8vIHNjcm9sbCB0byB0b3AgaW4gY2hhbmdlIHBhZ2VcbiAgICByb3V0ZXIuZXZlbnRzLnBpcGUodW50aWxEZXN0cm95ZWQodGhpcykpLnN1YnNjcmliZShldnQgPT4ge1xuICAgICAgaWYgKCF0aGlzLmlzRmV0Y2hpbmcgJiYgZXZ0IGluc3RhbmNlb2YgUm91dGVDb25maWdMb2FkU3RhcnQpIHtcbiAgICAgICAgdGhpcy5pc0ZldGNoaW5nID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChldnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRXJyb3IgfHwgZXZ0IGluc3RhbmNlb2YgTmF2aWdhdGlvbkNhbmNlbCkge1xuICAgICAgICB0aGlzLmlzRmV0Y2hpbmcgPSBmYWxzZTtcbiAgICAgICAgaWYgKGV2dCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FcnJvcikge1xuICAgICAgICAgIG1zZ1Nydi5lcnJvcihgQ291bGQgbm90IGxvYWQgJHtldnQudXJsfSByb3V0ZWAsIHsgbnpEdXJhdGlvbjogMTAwMCAqIDMgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKCEoZXZ0IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCB8fCBldnQgaW5zdGFuY2VvZiBSb3V0ZUNvbmZpZ0xvYWRFbmQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmlzRmV0Y2hpbmcpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5pc0ZldGNoaW5nID0gZmFsc2U7XG4gICAgICAgIH0sIDEwMCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHNldENsYXNzKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgZWwsIGRvYywgcmVuZGVyZXIsIHNldHRpbmdzIH0gPSB0aGlzO1xuICAgIGNvbnN0IGxheW91dCA9IHNldHRpbmdzLmxheW91dDtcbiAgICB1cGRhdGVIb3N0Q2xhc3MoZWwubmF0aXZlRWxlbWVudCwgcmVuZGVyZXIsIHtcbiAgICAgIFsnYWxhaW4tZGVmYXVsdCddOiB0cnVlLFxuICAgICAgW2BhbGFpbi1kZWZhdWx0X19maXhlZGBdOiBsYXlvdXQuZml4ZWQsXG4gICAgICBbYGFsYWluLWRlZmF1bHRfX2NvbGxhcHNlZGBdOiBsYXlvdXQuY29sbGFwc2VkLFxuICAgIH0pO1xuXG4gICAgZG9jLmJvZHkuY2xhc3NMaXN0W2xheW91dC5jb2xvcldlYWsgPyAnYWRkJyA6ICdyZW1vdmUnXSgnY29sb3Itd2VhaycpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMub3B0aW9ucyA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFBsZWFzZSBzcGVjaWZ5IHRoZSBbb3B0aW9uc10gcGFyYW1ldGVyLCBvdGhlcndpc2UgdGhlIGxheW91dCBkaXNwbGF5IGNhbm5vdCBiZSBjb21wbGV0ZWRgKTtcbiAgICB9XG4gICAgdGhpcy5zZXR0aW5ncy5ub3RpZnkucGlwZSh1bnRpbERlc3Ryb3llZCh0aGlzKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMuc2V0Q2xhc3MoKSk7XG4gICAgdGhpcy5zZXRDbGFzcygpO1xuICB9XG59XG4iXX0=