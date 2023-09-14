import { ChangeDetectionStrategy, Component, DestroyRef, Input, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import * as i0 from "@angular/core";
import * as i1 from "./layout.service";
import * as i2 from "@delon/theme";
import * as i3 from "@angular/common";
import * as i4 from "@angular/router";
import * as i5 from "ng-zorro-antd/icon";
export class LayoutDefaultHeaderComponent {
    get opt() {
        return this.srv.options;
    }
    get app() {
        return this.settings.app;
    }
    get collapsed() {
        return this.settings.layout.collapsed;
    }
    get collapsedIcon() {
        return this.srv.collapsedIcon;
    }
    constructor(srv, settings, cdr) {
        this.srv = srv;
        this.settings = settings;
        this.cdr = cdr;
        this.destroy$ = inject(DestroyRef);
        this.left = [];
        this.middle = [];
        this.right = [];
    }
    refresh() {
        const arr = this.items.toArray();
        this.left = arr.filter(i => i.direction === 'left');
        this.middle = arr.filter(i => i.direction === 'middle');
        this.right = arr.filter(i => i.direction === 'right');
        this.cdr.detectChanges();
    }
    ngAfterViewInit() {
        this.items.changes.pipe(takeUntilDestroyed(this.destroy$)).subscribe(() => this.refresh());
        this.srv.options$.pipe(takeUntilDestroyed(this.destroy$)).subscribe(() => this.cdr.detectChanges());
        this.refresh();
    }
    toggleCollapsed() {
        this.srv.toggleCollapsed();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.5", ngImport: i0, type: LayoutDefaultHeaderComponent, deps: [{ token: i1.LayoutDefaultService }, { token: i2.SettingsService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.5", type: LayoutDefaultHeaderComponent, selector: "layout-default-header", inputs: { items: "items" }, host: { properties: { "class.alain-default__header": "true" } }, ngImport: i0, template: `
    <ng-template #render let-ls>
      <li *ngFor="let i of ls" [class.hidden-mobile]="i.hidden === 'mobile'" [class.hidden-pc]="i.hidden === 'pc'">
        <ng-container *ngTemplateOutlet="i.host" />
      </li>
    </ng-template>
    <div class="alain-default__header-logo" [style.width.px]="opt.logoFixWidth">
      <ng-container *ngIf="!opt.logo; else opt.logo!">
        <a [routerLink]="opt.logoLink" class="alain-default__header-logo-link">
          <img class="alain-default__header-logo-expanded" [attr.src]="opt.logoExpanded" [attr.alt]="app.name" />
          <img class="alain-default__header-logo-collapsed" [attr.src]="opt.logoCollapsed" [attr.alt]="app.name" />
        </a>
      </ng-container>
    </div>
    <div class="alain-default__nav-wrap">
      <ul class="alain-default__nav">
        <li *ngIf="!opt.hideAside && opt.showHeaderCollapse">
          <div class="alain-default__nav-item alain-default__nav-item--collapse" (click)="toggleCollapsed()">
            <span nz-icon [nzType]="collapsedIcon"></span>
          </div>
        </li>
        <ng-template [ngTemplateOutlet]="render" [ngTemplateOutletContext]="{ $implicit: left }" />
      </ul>
      <div *ngIf="middle.length > 0" class="alain-default__nav alain-default__nav-middle">
        <ng-container *ngTemplateOutlet="middle[0].host" />
      </div>
      <ul class="alain-default__nav">
        <ng-template [ngTemplateOutlet]="render" [ngTemplateOutletContext]="{ $implicit: right }" />
      </ul>
    </div>
  `, isInline: true, dependencies: [{ kind: "directive", type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i3.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i4.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "directive", type: i5.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.5", ngImport: i0, type: LayoutDefaultHeaderComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'layout-default-header',
                    template: `
    <ng-template #render let-ls>
      <li *ngFor="let i of ls" [class.hidden-mobile]="i.hidden === 'mobile'" [class.hidden-pc]="i.hidden === 'pc'">
        <ng-container *ngTemplateOutlet="i.host" />
      </li>
    </ng-template>
    <div class="alain-default__header-logo" [style.width.px]="opt.logoFixWidth">
      <ng-container *ngIf="!opt.logo; else opt.logo!">
        <a [routerLink]="opt.logoLink" class="alain-default__header-logo-link">
          <img class="alain-default__header-logo-expanded" [attr.src]="opt.logoExpanded" [attr.alt]="app.name" />
          <img class="alain-default__header-logo-collapsed" [attr.src]="opt.logoCollapsed" [attr.alt]="app.name" />
        </a>
      </ng-container>
    </div>
    <div class="alain-default__nav-wrap">
      <ul class="alain-default__nav">
        <li *ngIf="!opt.hideAside && opt.showHeaderCollapse">
          <div class="alain-default__nav-item alain-default__nav-item--collapse" (click)="toggleCollapsed()">
            <span nz-icon [nzType]="collapsedIcon"></span>
          </div>
        </li>
        <ng-template [ngTemplateOutlet]="render" [ngTemplateOutletContext]="{ $implicit: left }" />
      </ul>
      <div *ngIf="middle.length > 0" class="alain-default__nav alain-default__nav-middle">
        <ng-container *ngTemplateOutlet="middle[0].host" />
      </div>
      <ul class="alain-default__nav">
        <ng-template [ngTemplateOutlet]="render" [ngTemplateOutletContext]="{ $implicit: right }" />
      </ul>
    </div>
  `,
                    host: {
                        '[class.alain-default__header]': `true`
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i1.LayoutDefaultService }, { type: i2.SettingsService }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { items: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS9sYXlvdXQtZGVmYXVsdC9sYXlvdXQtaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBRXZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUdMLE1BQU0sRUFDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7OztBQXFEaEUsTUFBTSxPQUFPLDRCQUE0QjtJQVN2QyxJQUFJLEdBQUc7UUFDTCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO0lBQzFCLENBQUM7SUFFRCxJQUFJLEdBQUc7UUFDTCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDO0lBQzNCLENBQUM7SUFFRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQztJQUNoQyxDQUFDO0lBRUQsWUFDVSxHQUF5QixFQUN6QixRQUF5QixFQUN6QixHQUFzQjtRQUZ0QixRQUFHLEdBQUgsR0FBRyxDQUFzQjtRQUN6QixhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQUN6QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQTNCeEIsYUFBUSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUl0QyxTQUFJLEdBQThCLEVBQUUsQ0FBQztRQUNyQyxXQUFNLEdBQThCLEVBQUUsQ0FBQztRQUN2QyxVQUFLLEdBQThCLEVBQUUsQ0FBQztJQXNCbkMsQ0FBQztJQUVJLE9BQU87UUFDYixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLEtBQUssTUFBTSxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsS0FBSyxRQUFRLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxLQUFLLE9BQU8sQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQzNGLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1FBQ3BHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDN0IsQ0FBQzs4R0EvQ1UsNEJBQTRCO2tHQUE1Qiw0QkFBNEIsMEpBcEM3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBOEJUOzsyRkFNVSw0QkFBNEI7a0JBdEN4QyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBOEJUO29CQUNELElBQUksRUFBRTt3QkFDSiwrQkFBK0IsRUFBRSxNQUFNO3FCQUN4QztvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7eUtBSVUsS0FBSztzQkFBYixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIERlc3Ryb3lSZWYsXG4gIElucHV0LFxuICBRdWVyeUxpc3QsXG4gIFRlbXBsYXRlUmVmLFxuICBpbmplY3Rcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0YWtlVW50aWxEZXN0cm95ZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlL3J4anMtaW50ZXJvcCc7XG5cbmltcG9ydCB7IEFwcCwgU2V0dGluZ3NTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuaW1wb3J0IHsgTGF5b3V0RGVmYXVsdEhlYWRlckl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2xheW91dC1oZWFkZXItaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGF5b3V0RGVmYXVsdFNlcnZpY2UgfSBmcm9tICcuL2xheW91dC5zZXJ2aWNlJztcbmltcG9ydCB7IExheW91dERlZmF1bHRIZWFkZXJJdGVtRGlyZWN0aW9uLCBMYXlvdXREZWZhdWx0SGVhZGVySXRlbUhpZGRlbiwgTGF5b3V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tICcuL3R5cGVzJztcblxuaW50ZXJmYWNlIExheW91dERlZmF1bHRIZWFkZXJJdGVtIHtcbiAgaG9zdDogVGVtcGxhdGVSZWY8TnpTYWZlQW55PjtcbiAgaGlkZGVuPzogTGF5b3V0RGVmYXVsdEhlYWRlckl0ZW1IaWRkZW47XG4gIGRpcmVjdGlvbj86IExheW91dERlZmF1bHRIZWFkZXJJdGVtRGlyZWN0aW9uO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsYXlvdXQtZGVmYXVsdC1oZWFkZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy10ZW1wbGF0ZSAjcmVuZGVyIGxldC1scz5cbiAgICAgIDxsaSAqbmdGb3I9XCJsZXQgaSBvZiBsc1wiIFtjbGFzcy5oaWRkZW4tbW9iaWxlXT1cImkuaGlkZGVuID09PSAnbW9iaWxlJ1wiIFtjbGFzcy5oaWRkZW4tcGNdPVwiaS5oaWRkZW4gPT09ICdwYydcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImkuaG9zdFwiIC8+XG4gICAgICA8L2xpPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImFsYWluLWRlZmF1bHRfX2hlYWRlci1sb2dvXCIgW3N0eWxlLndpZHRoLnB4XT1cIm9wdC5sb2dvRml4V2lkdGhcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhb3B0LmxvZ287IGVsc2Ugb3B0LmxvZ28hXCI+XG4gICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIm9wdC5sb2dvTGlua1wiIGNsYXNzPVwiYWxhaW4tZGVmYXVsdF9faGVhZGVyLWxvZ28tbGlua1wiPlxuICAgICAgICAgIDxpbWcgY2xhc3M9XCJhbGFpbi1kZWZhdWx0X19oZWFkZXItbG9nby1leHBhbmRlZFwiIFthdHRyLnNyY109XCJvcHQubG9nb0V4cGFuZGVkXCIgW2F0dHIuYWx0XT1cImFwcC5uYW1lXCIgLz5cbiAgICAgICAgICA8aW1nIGNsYXNzPVwiYWxhaW4tZGVmYXVsdF9faGVhZGVyLWxvZ28tY29sbGFwc2VkXCIgW2F0dHIuc3JjXT1cIm9wdC5sb2dvQ29sbGFwc2VkXCIgW2F0dHIuYWx0XT1cImFwcC5uYW1lXCIgLz5cbiAgICAgICAgPC9hPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImFsYWluLWRlZmF1bHRfX25hdi13cmFwXCI+XG4gICAgICA8dWwgY2xhc3M9XCJhbGFpbi1kZWZhdWx0X19uYXZcIj5cbiAgICAgICAgPGxpICpuZ0lmPVwiIW9wdC5oaWRlQXNpZGUgJiYgb3B0LnNob3dIZWFkZXJDb2xsYXBzZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbGFpbi1kZWZhdWx0X19uYXYtaXRlbSBhbGFpbi1kZWZhdWx0X19uYXYtaXRlbS0tY29sbGFwc2VcIiAoY2xpY2spPVwidG9nZ2xlQ29sbGFwc2VkKClcIj5cbiAgICAgICAgICAgIDxzcGFuIG56LWljb24gW256VHlwZV09XCJjb2xsYXBzZWRJY29uXCI+PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwicmVuZGVyXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBsZWZ0IH1cIiAvPlxuICAgICAgPC91bD5cbiAgICAgIDxkaXYgKm5nSWY9XCJtaWRkbGUubGVuZ3RoID4gMFwiIGNsYXNzPVwiYWxhaW4tZGVmYXVsdF9fbmF2IGFsYWluLWRlZmF1bHRfX25hdi1taWRkbGVcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cIm1pZGRsZVswXS5ob3N0XCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPHVsIGNsYXNzPVwiYWxhaW4tZGVmYXVsdF9fbmF2XCI+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJyZW5kZXJcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IHJpZ2h0IH1cIiAvPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYWxhaW4tZGVmYXVsdF9faGVhZGVyXSc6IGB0cnVlYFxuICB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBMYXlvdXREZWZhdWx0SGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIHByaXZhdGUgZGVzdHJveSQgPSBpbmplY3QoRGVzdHJveVJlZik7XG5cbiAgQElucHV0KCkgaXRlbXMhOiBRdWVyeUxpc3Q8TGF5b3V0RGVmYXVsdEhlYWRlckl0ZW1Db21wb25lbnQ+O1xuXG4gIGxlZnQ6IExheW91dERlZmF1bHRIZWFkZXJJdGVtW10gPSBbXTtcbiAgbWlkZGxlOiBMYXlvdXREZWZhdWx0SGVhZGVySXRlbVtdID0gW107XG4gIHJpZ2h0OiBMYXlvdXREZWZhdWx0SGVhZGVySXRlbVtdID0gW107XG5cbiAgZ2V0IG9wdCgpOiBMYXlvdXREZWZhdWx0T3B0aW9ucyB7XG4gICAgcmV0dXJuIHRoaXMuc3J2Lm9wdGlvbnM7XG4gIH1cblxuICBnZXQgYXBwKCk6IEFwcCB7XG4gICAgcmV0dXJuIHRoaXMuc2V0dGluZ3MuYXBwO1xuICB9XG5cbiAgZ2V0IGNvbGxhcHNlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy5sYXlvdXQuY29sbGFwc2VkO1xuICB9XG5cbiAgZ2V0IGNvbGxhcHNlZEljb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5zcnYuY29sbGFwc2VkSWNvbjtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc3J2OiBMYXlvdXREZWZhdWx0U2VydmljZSxcbiAgICBwcml2YXRlIHNldHRpbmdzOiBTZXR0aW5nc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmXG4gICkge31cblxuICBwcml2YXRlIHJlZnJlc2goKTogdm9pZCB7XG4gICAgY29uc3QgYXJyID0gdGhpcy5pdGVtcy50b0FycmF5KCk7XG4gICAgdGhpcy5sZWZ0ID0gYXJyLmZpbHRlcihpID0+IGkuZGlyZWN0aW9uID09PSAnbGVmdCcpO1xuICAgIHRoaXMubWlkZGxlID0gYXJyLmZpbHRlcihpID0+IGkuZGlyZWN0aW9uID09PSAnbWlkZGxlJyk7XG4gICAgdGhpcy5yaWdodCA9IGFyci5maWx0ZXIoaSA9PiBpLmRpcmVjdGlvbiA9PT0gJ3JpZ2h0Jyk7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaXRlbXMuY2hhbmdlcy5waXBlKHRha2VVbnRpbERlc3Ryb3llZCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMucmVmcmVzaCgpKTtcbiAgICB0aGlzLnNydi5vcHRpb25zJC5waXBlKHRha2VVbnRpbERlc3Ryb3llZCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKSk7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICB0b2dnbGVDb2xsYXBzZWQoKTogdm9pZCB7XG4gICAgdGhpcy5zcnYudG9nZ2xlQ29sbGFwc2VkKCk7XG4gIH1cbn1cbiJdfQ==