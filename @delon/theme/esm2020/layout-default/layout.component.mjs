import { DOCUMENT } from '@angular/common';
import { Component, ContentChildren, Inject, Input } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, RouteConfigLoadEnd, RouteConfigLoadStart } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { updateHostClass } from '@delon/util/browser';
import { LayoutDefaultHeaderItemComponent } from './layout-header-item.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "ng-zorro-antd/message";
import * as i3 from "@delon/theme";
import * as i4 from "./layout-header.component";
import * as i5 from "./layout-nav.component";
import * as i6 from "@angular/common";
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
LayoutDefaultComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: LayoutDefaultComponent, deps: [{ token: i1.Router }, { token: i2.NzMessageService }, { token: i3.SettingsService }, { token: i0.ElementRef }, { token: i0.Renderer2 }, { token: DOCUMENT }], target: i0.ɵɵFactoryTarget.Component });
LayoutDefaultComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.8", type: LayoutDefaultComponent, selector: "layout-default", inputs: { options: "options", asideUser: "asideUser", nav: "nav", content: "content", customError: "customError" }, queries: [{ propertyName: "headerItems", predicate: LayoutDefaultHeaderItemComponent }], exportAs: ["layoutDefault"], ngImport: i0, template: `
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
  `, isInline: true, components: [{ type: i4.LayoutDefaultHeaderComponent, selector: "layout-default-header", inputs: ["items", "options"] }, { type: i5.LayoutDefaultNavComponent, selector: "layout-default-nav", inputs: ["disabledAcl", "autoCloseUnderPad", "recursivePath", "openStrictly", "maxLevelIcon"], outputs: ["select"] }], directives: [{ type: i6.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i6.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.8", ngImport: i0, type: LayoutDefaultComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lL2xheW91dC1kZWZhdWx0L2xheW91dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFDTCxTQUFTLEVBQ1QsZUFBZSxFQUVmLE1BQU0sRUFDTixLQUFLLEVBTU4sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixhQUFhLEVBQ2IsZUFBZSxFQUNmLGtCQUFrQixFQUNsQixvQkFBb0IsRUFHckIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUczQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFJdEQsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7Ozs7Ozs7O0FBc0JsRixNQUFNLE9BQU8sc0JBQXNCO0lBYWpDLFlBQ0UsTUFBYyxFQUNOLE1BQXdCLEVBQ3hCLFFBQXlCLEVBQ3pCLEVBQWMsRUFDZCxRQUFtQixFQUNELEdBQWM7UUFKaEMsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDeEIsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7UUFDekIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDRCxRQUFHLEdBQUgsR0FBRyxDQUFXO1FBZGpDLGNBQVMsR0FBNkIsSUFBSSxDQUFDO1FBQzNDLFFBQUcsR0FBNkIsSUFBSSxDQUFDO1FBQ3JDLFlBQU8sR0FBNkIsSUFBSSxDQUFDO1FBRzFDLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBQ3ZDLGVBQVUsR0FB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LFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDOzttSEEzRVUsc0JBQXNCLDBKQW1CdkIsUUFBUTt1R0FuQlAsc0JBQXNCLHNNQUNoQixnQ0FBZ0MsMERBakJ2Qzs7Ozs7Ozs7Ozs7Ozs7R0FjVDsyRkFFVSxzQkFBc0I7a0JBbkJsQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFFBQVEsRUFBRSxlQUFlO29CQUN6QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7O0dBY1Q7aUJBQ0Y7OzBCQW9CSSxNQUFNOzJCQUFDLFFBQVE7NENBakJsQixXQUFXO3NCQURWLGVBQWU7dUJBQUMsZ0NBQWdDLEVBQUUsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFO2dCQUdoRSxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxHQUFHO3NCQUFYLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRWxlbWVudFJlZixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFF1ZXJ5TGlzdCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIE5hdmlnYXRpb25DYW5jZWwsXG4gIE5hdmlnYXRpb25FbmQsXG4gIE5hdmlnYXRpb25FcnJvcixcbiAgUm91dGVDb25maWdMb2FkRW5kLFxuICBSb3V0ZUNvbmZpZ0xvYWRTdGFydCxcbiAgUm91dGVyLFxuICBFdmVudFxufSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBTZXR0aW5nc1NlcnZpY2UgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgdXBkYXRlSG9zdENsYXNzIH0gZnJvbSAnQGRlbG9uL3V0aWwvYnJvd3Nlcic7XG5pbXBvcnQgdHlwZSB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBOek1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9tZXNzYWdlJztcblxuaW1wb3J0IHsgTGF5b3V0RGVmYXVsdEhlYWRlckl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2xheW91dC1oZWFkZXItaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGF5b3V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tICcuL3R5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGF5b3V0LWRlZmF1bHQnLFxuICBleHBvcnRBczogJ2xheW91dERlZmF1bHQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJhbGFpbi1kZWZhdWx0X19wcm9ncmVzcy1iYXJcIiAqbmdJZj1cImlzRmV0Y2hpbmdcIj48L2Rpdj5cbiAgICA8bGF5b3V0LWRlZmF1bHQtaGVhZGVyIFtvcHRpb25zXT1cIm9wdGlvbnNcIiBbaXRlbXNdPVwiaGVhZGVySXRlbXNcIj48L2xheW91dC1kZWZhdWx0LWhlYWRlcj5cbiAgICA8ZGl2ICpuZ0lmPVwiIW9wdGlvbnMuaGlkZUFzaWRlXCIgY2xhc3M9XCJhbGFpbi1kZWZhdWx0X19hc2lkZVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImFsYWluLWRlZmF1bHRfX2FzaWRlLWlubmVyXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJhc2lkZVVzZXJcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cIm5hdlwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICA8bGF5b3V0LWRlZmF1bHQtbmF2ICpuZ0lmPVwiIW5hdlwiIGNsYXNzPVwiZC1ibG9jayBweS1sZ1wiPjwvbGF5b3V0LWRlZmF1bHQtbmF2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHNlY3Rpb24gY2xhc3M9XCJhbGFpbi1kZWZhdWx0X19jb250ZW50XCI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiY29udGVudFwiPjwvbmctY29udGFpbmVyPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvc2VjdGlvbj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBMYXlvdXREZWZhdWx0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBAQ29udGVudENoaWxkcmVuKExheW91dERlZmF1bHRIZWFkZXJJdGVtQ29tcG9uZW50LCB7IGRlc2NlbmRhbnRzOiBmYWxzZSB9KVxuICBoZWFkZXJJdGVtcyE6IFF1ZXJ5TGlzdDxMYXlvdXREZWZhdWx0SGVhZGVySXRlbUNvbXBvbmVudD47XG5cbiAgQElucHV0KCkgb3B0aW9ucyE6IExheW91dERlZmF1bHRPcHRpb25zO1xuICBASW5wdXQoKSBhc2lkZVVzZXI6IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG5hdjogVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgY29udGVudDogVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgY3VzdG9tRXJyb3I/OiBzdHJpbmcgfCBudWxsO1xuXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBpc0ZldGNoaW5nID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBtc2dTcnY6IE56TWVzc2FnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBzZXR0aW5nczogU2V0dGluZ3NTZXJ2aWNlLFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBOelNhZmVBbnlcbiAgKSB7XG4gICAgcm91dGVyLmV2ZW50cy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKGV2ID0+IHRoaXMucHJvY2Vzc0V2KGV2KSk7XG4gIH1cblxuICBwcm9jZXNzRXYoZXY6IEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlzRmV0Y2hpbmcgJiYgZXYgaW5zdGFuY2VvZiBSb3V0ZUNvbmZpZ0xvYWRTdGFydCkge1xuICAgICAgdGhpcy5pc0ZldGNoaW5nID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGV2IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVycm9yIHx8IGV2IGluc3RhbmNlb2YgTmF2aWdhdGlvbkNhbmNlbCkge1xuICAgICAgdGhpcy5pc0ZldGNoaW5nID0gZmFsc2U7XG4gICAgICBjb25zdCBlcnIgPSB0aGlzLmN1c3RvbUVycm9yID09PSBudWxsID8gbnVsbCA6IHRoaXMuY3VzdG9tRXJyb3IgPz8gYENvdWxkIG5vdCBsb2FkICR7ZXYudXJsfSByb3V0ZWA7XG4gICAgICBpZiAoZXJyICYmIGV2IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVycm9yKSB7XG4gICAgICAgIHRoaXMubXNnU3J2LmVycm9yKGVyciwgeyBuekR1cmF0aW9uOiAxMDAwICogMyB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCEoZXYgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kIHx8IGV2IGluc3RhbmNlb2YgUm91dGVDb25maWdMb2FkRW5kKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5pc0ZldGNoaW5nKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5pc0ZldGNoaW5nID0gZmFsc2U7XG4gICAgICB9LCAxMDApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0Q2xhc3MoKTogdm9pZCB7XG4gICAgY29uc3QgeyBlbCwgZG9jLCByZW5kZXJlciwgc2V0dGluZ3MgfSA9IHRoaXM7XG4gICAgY29uc3QgbGF5b3V0ID0gc2V0dGluZ3MubGF5b3V0O1xuICAgIHVwZGF0ZUhvc3RDbGFzcyhlbC5uYXRpdmVFbGVtZW50LCByZW5kZXJlciwge1xuICAgICAgWydhbGFpbi1kZWZhdWx0J106IHRydWUsXG4gICAgICBbYGFsYWluLWRlZmF1bHRfX2ZpeGVkYF06IGxheW91dC5maXhlZCxcbiAgICAgIFtgYWxhaW4tZGVmYXVsdF9fY29sbGFwc2VkYF06IGxheW91dC5jb2xsYXBzZWQsXG4gICAgICBbYGFsYWluLWRlZmF1bHRfX2hpZGUtYXNpZGVgXTogdGhpcy5vcHRpb25zIS5oaWRlQXNpZGVcbiAgICB9KTtcblxuICAgIGRvYy5ib2R5LmNsYXNzTGlzdFtsYXlvdXQuY29sb3JXZWFrID8gJ2FkZCcgOiAncmVtb3ZlJ10oJ2NvbG9yLXdlYWsnKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIGxvZ29FeHBhbmRlZDogYC4vYXNzZXRzL2xvZ28tZnVsbC5zdmdgLFxuICAgICAgbG9nb0NvbGxhcHNlZDogYC4vYXNzZXRzL2xvZ28uc3ZnYCxcbiAgICAgIGxvZ29MaW5rOiBgL2AsXG4gICAgICBoaWRlQXNpZGU6IGZhbHNlLFxuICAgICAgLi4udGhpcy5vcHRpb25zXG4gICAgfTtcbiAgICBjb25zdCB7IHNldHRpbmdzLCBkZXN0cm95JCB9ID0gdGhpcztcbiAgICBzZXR0aW5ncy5ub3RpZnkucGlwZSh0YWtlVW50aWwoZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5zZXRDbGFzcygpKTtcbiAgICB0aGlzLnNldENsYXNzKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==