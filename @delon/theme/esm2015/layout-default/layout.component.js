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
    constructor(router, msgSrv, settings, el, renderer, doc) {
        this.settings = settings;
        this.el = el;
        this.renderer = renderer;
        this.doc = doc;
        this.destroy$ = new Subject();
        this.isFetching = false;
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
            [`alain-default__hide-aside`]: this.options.hideAside,
        });
        doc.body.classList[layout.colorWeak ? 'add' : 'remove']('color-weak');
    }
    ngOnInit() {
        this.options = Object.assign({ logoExpanded: `./assets/logo-full.svg`, logoCollapsed: `./assets/logo.svg`, logoLink: `/`, hideAside: false }, this.options);
        const { settings, destroy$ } = this;
        settings.notify.pipe(takeUntil(destroy$)).subscribe(() => this.setClass());
        this.setClass();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
LayoutDefaultComponent.decorators = [
    { type: Component, args: [{
                selector: 'layout-default',
                exportAs: 'layoutDefault',
                template: `
    <div class="alain-default__progress-bar" *ngIf="isFetching"></div>
    <layout-default-header></layout-default-header>
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lL2xheW91dC1kZWZhdWx0L2xheW91dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFxQixTQUFTLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1SSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxrQkFBa0IsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNySSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQy9DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQXNCbEYsTUFBTSxPQUFPLHNCQUFzQjtJQVlqQyxZQUNFLE1BQWMsRUFDZCxNQUF3QixFQUNoQixRQUF5QixFQUN6QixFQUFjLEVBQ2QsUUFBbUIsRUFDRCxHQUFRO1FBSDFCLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBQ3pCLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ0QsUUFBRyxHQUFILEdBQUcsQ0FBSztRQVQ1QixhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVEs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RmhCLGVBQWU7WUFGYSxVQUFVO1lBQStDLFNBQVM7NENBK0NsRyxNQUFNLFNBQUMsUUFBUTs7OzBCQWpCakIsZUFBZSxTQUFDLGdDQUFnQyxFQUFFLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRTtzQkFHeEUsS0FBSzt3QkFDTCxLQUFLO2tCQUNMLEtBQUs7c0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLCBFbGVtZW50UmVmLCBJbmplY3QsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgUXVlcnlMaXN0LCBSZW5kZXJlcjIsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uQ2FuY2VsLCBOYXZpZ2F0aW9uRW5kLCBOYXZpZ2F0aW9uRXJyb3IsIFJvdXRlQ29uZmlnTG9hZEVuZCwgUm91dGVDb25maWdMb2FkU3RhcnQsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTZXR0aW5nc1NlcnZpY2UgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgdXBkYXRlSG9zdENsYXNzIH0gZnJvbSAnQGRlbG9uL3V0aWwvYnJvd3Nlcic7XG5pbXBvcnQgeyBOek1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9tZXNzYWdlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IExheW91dERlZmF1bHRIZWFkZXJJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQtaGVhZGVyLWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IExheW91dERlZmF1bHRPcHRpb25zIH0gZnJvbSAnLi90eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xheW91dC1kZWZhdWx0JyxcbiAgZXhwb3J0QXM6ICdsYXlvdXREZWZhdWx0JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiYWxhaW4tZGVmYXVsdF9fcHJvZ3Jlc3MtYmFyXCIgKm5nSWY9XCJpc0ZldGNoaW5nXCI+PC9kaXY+XG4gICAgPGxheW91dC1kZWZhdWx0LWhlYWRlcj48L2xheW91dC1kZWZhdWx0LWhlYWRlcj5cbiAgICA8ZGl2ICpuZ0lmPVwiIW9wdGlvbnMuaGlkZUFzaWRlXCIgY2xhc3M9XCJhbGFpbi1kZWZhdWx0X19hc2lkZVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImFsYWluLWRlZmF1bHRfX2FzaWRlLWlubmVyXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJhc2lkZVVzZXJcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cIm5hdlwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICA8bGF5b3V0LWRlZmF1bHQtbmF2ICpuZ0lmPVwiIW5hdlwiIGNsYXNzPVwiZC1ibG9jayBweS1sZ1wiPjwvbGF5b3V0LWRlZmF1bHQtbmF2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHNlY3Rpb24gY2xhc3M9XCJhbGFpbi1kZWZhdWx0X19jb250ZW50XCI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiY29udGVudFwiPjwvbmctY29udGFpbmVyPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvc2VjdGlvbj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTGF5b3V0RGVmYXVsdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQENvbnRlbnRDaGlsZHJlbihMYXlvdXREZWZhdWx0SGVhZGVySXRlbUNvbXBvbmVudCwgeyBkZXNjZW5kYW50czogZmFsc2UgfSlcbiAgaGVhZGVySXRlbXMhOiBRdWVyeUxpc3Q8TGF5b3V0RGVmYXVsdEhlYWRlckl0ZW1Db21wb25lbnQ+O1xuXG4gIEBJbnB1dCgpIG9wdGlvbnM6IExheW91dERlZmF1bHRPcHRpb25zO1xuICBASW5wdXQoKSBhc2lkZVVzZXI6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBuYXY6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBjb250ZW50OiBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgaXNGZXRjaGluZyA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHJvdXRlcjogUm91dGVyLFxuICAgIG1zZ1NydjogTnpNZXNzYWdlU2VydmljZSxcbiAgICBwcml2YXRlIHNldHRpbmdzOiBTZXR0aW5nc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IGFueSxcbiAgKSB7XG4gICAgcm91dGVyLmV2ZW50cy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKGV2dCA9PiB7XG4gICAgICBpZiAoIXRoaXMuaXNGZXRjaGluZyAmJiBldnQgaW5zdGFuY2VvZiBSb3V0ZUNvbmZpZ0xvYWRTdGFydCkge1xuICAgICAgICB0aGlzLmlzRmV0Y2hpbmcgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKGV2dCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FcnJvciB8fCBldnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uQ2FuY2VsKSB7XG4gICAgICAgIHRoaXMuaXNGZXRjaGluZyA9IGZhbHNlO1xuICAgICAgICBpZiAoZXZ0IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVycm9yKSB7XG4gICAgICAgICAgbXNnU3J2LmVycm9yKGBDb3VsZCBub3QgbG9hZCAke2V2dC51cmx9IHJvdXRlYCwgeyBuekR1cmF0aW9uOiAxMDAwICogMyB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoIShldnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kIHx8IGV2dCBpbnN0YW5jZW9mIFJvdXRlQ29uZmlnTG9hZEVuZCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuaXNGZXRjaGluZykge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmlzRmV0Y2hpbmcgPSBmYWxzZTtcbiAgICAgICAgfSwgMTAwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0Q2xhc3MoKTogdm9pZCB7XG4gICAgY29uc3QgeyBlbCwgZG9jLCByZW5kZXJlciwgc2V0dGluZ3MgfSA9IHRoaXM7XG4gICAgY29uc3QgbGF5b3V0ID0gc2V0dGluZ3MubGF5b3V0O1xuICAgIHVwZGF0ZUhvc3RDbGFzcyhlbC5uYXRpdmVFbGVtZW50LCByZW5kZXJlciwge1xuICAgICAgWydhbGFpbi1kZWZhdWx0J106IHRydWUsXG4gICAgICBbYGFsYWluLWRlZmF1bHRfX2ZpeGVkYF06IGxheW91dC5maXhlZCxcbiAgICAgIFtgYWxhaW4tZGVmYXVsdF9fY29sbGFwc2VkYF06IGxheW91dC5jb2xsYXBzZWQsXG4gICAgICBbYGFsYWluLWRlZmF1bHRfX2hpZGUtYXNpZGVgXTogdGhpcy5vcHRpb25zLmhpZGVBc2lkZSxcbiAgICB9KTtcblxuICAgIGRvYy5ib2R5LmNsYXNzTGlzdFtsYXlvdXQuY29sb3JXZWFrID8gJ2FkZCcgOiAncmVtb3ZlJ10oJ2NvbG9yLXdlYWsnKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIGxvZ29FeHBhbmRlZDogYC4vYXNzZXRzL2xvZ28tZnVsbC5zdmdgLFxuICAgICAgbG9nb0NvbGxhcHNlZDogYC4vYXNzZXRzL2xvZ28uc3ZnYCxcbiAgICAgIGxvZ29MaW5rOiBgL2AsXG4gICAgICBoaWRlQXNpZGU6IGZhbHNlLFxuICAgICAgLi4udGhpcy5vcHRpb25zLFxuICAgIH07XG4gICAgY29uc3QgeyBzZXR0aW5ncywgZGVzdHJveSQgfSA9IHRoaXM7XG4gICAgc2V0dGluZ3Mubm90aWZ5LnBpcGUodGFrZVVudGlsKGRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMuc2V0Q2xhc3MoKSk7XG4gICAgdGhpcy5zZXRDbGFzcygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=