import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, Input, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SettingsService } from '@delon/theme';
import { LayoutDefaultService } from './layout.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/router";
import * as i3 from "ng-zorro-antd/icon";
export class LayoutDefaultHeaderComponent {
    constructor() {
        this.settings = inject(SettingsService);
        this.srv = inject(LayoutDefaultService);
        this.cdr = inject(ChangeDetectorRef);
        this.destroy$ = inject(DestroyRef);
        this.left = [];
        this.middle = [];
        this.right = [];
    }
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.11", ngImport: i0, type: LayoutDefaultHeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.11", type: LayoutDefaultHeaderComponent, selector: "layout-default-header", inputs: { items: "items" }, host: { properties: { "class.alain-default__header": "true" } }, ngImport: i0, template: `
    <ng-template #render let-ls>
      @for (i of ls; track $index) {
        <li [class.hidden-mobile]="i.hidden === 'mobile'" [class.hidden-pc]="i.hidden === 'pc'">
          <ng-container *ngTemplateOutlet="i.host" />
        </li>
      }
    </ng-template>
    <div class="alain-default__header-logo" [style.width.px]="opt.logoFixWidth">
      @if (opt.logo) {
        <ng-container *ngTemplateOutlet="opt.logo" />
      } @else {
        <a [routerLink]="opt.logoLink" class="alain-default__header-logo-link">
          <img class="alain-default__header-logo-expanded" [attr.src]="opt.logoExpanded" [attr.alt]="app.name" />
          <img class="alain-default__header-logo-collapsed" [attr.src]="opt.logoCollapsed" [attr.alt]="app.name" />
        </a>
      }
    </div>
    <div class="alain-default__nav-wrap">
      <ul class="alain-default__nav">
        @if (!opt.hideAside && opt.showHeaderCollapse) {
          <li>
            <div class="alain-default__nav-item alain-default__nav-item--collapse" (click)="toggleCollapsed()">
              <span nz-icon [nzType]="collapsedIcon"></span>
            </div>
          </li>
        }
        <ng-template [ngTemplateOutlet]="render" [ngTemplateOutletContext]="{ $implicit: left }" />
      </ul>
      @if (middle.length > 0) {
        <div class="alain-default__nav alain-default__nav-middle">
          <ng-container *ngTemplateOutlet="middle[0].host" />
        </div>
      }
      <ul class="alain-default__nav">
        <ng-template [ngTemplateOutlet]="render" [ngTemplateOutletContext]="{ $implicit: right }" />
      </ul>
    </div>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i2.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "info", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "directive", type: i3.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.11", ngImport: i0, type: LayoutDefaultHeaderComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'layout-default-header',
                    template: `
    <ng-template #render let-ls>
      @for (i of ls; track $index) {
        <li [class.hidden-mobile]="i.hidden === 'mobile'" [class.hidden-pc]="i.hidden === 'pc'">
          <ng-container *ngTemplateOutlet="i.host" />
        </li>
      }
    </ng-template>
    <div class="alain-default__header-logo" [style.width.px]="opt.logoFixWidth">
      @if (opt.logo) {
        <ng-container *ngTemplateOutlet="opt.logo" />
      } @else {
        <a [routerLink]="opt.logoLink" class="alain-default__header-logo-link">
          <img class="alain-default__header-logo-expanded" [attr.src]="opt.logoExpanded" [attr.alt]="app.name" />
          <img class="alain-default__header-logo-collapsed" [attr.src]="opt.logoCollapsed" [attr.alt]="app.name" />
        </a>
      }
    </div>
    <div class="alain-default__nav-wrap">
      <ul class="alain-default__nav">
        @if (!opt.hideAside && opt.showHeaderCollapse) {
          <li>
            <div class="alain-default__nav-item alain-default__nav-item--collapse" (click)="toggleCollapsed()">
              <span nz-icon [nzType]="collapsedIcon"></span>
            </div>
          </li>
        }
        <ng-template [ngTemplateOutlet]="render" [ngTemplateOutletContext]="{ $implicit: left }" />
      </ul>
      @if (middle.length > 0) {
        <div class="alain-default__nav alain-default__nav-middle">
          <ng-container *ngTemplateOutlet="middle[0].host" />
        </div>
      }
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
        }], propDecorators: { items: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS9sYXlvdXQtZGVmYXVsdC9sYXlvdXQtaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFHTCxNQUFNLEVBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFaEUsT0FBTyxFQUFPLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUlwRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7QUF1RHhELE1BQU0sT0FBTyw0QkFBNEI7SUE5Q3pDO1FBK0NtQixhQUFRLEdBQUcsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ25DLFFBQUcsR0FBRyxNQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUNuQyxRQUFHLEdBQUcsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDaEMsYUFBUSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUkvQyxTQUFJLEdBQThCLEVBQUUsQ0FBQztRQUNyQyxXQUFNLEdBQThCLEVBQUUsQ0FBQztRQUN2QyxVQUFLLEdBQThCLEVBQUUsQ0FBQztLQW1DdkM7SUFqQ0MsSUFBSSxHQUFHO1FBQ0wsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztJQUMxQixDQUFDO0lBRUQsSUFBSSxHQUFHO1FBQ0wsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQztJQUMzQixDQUFDO0lBRUQsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDeEMsQ0FBQztJQUVELElBQUksYUFBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUM7SUFDaEMsQ0FBQztJQUVPLE9BQU87UUFDYixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLEtBQUssTUFBTSxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsS0FBSyxRQUFRLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxLQUFLLE9BQU8sQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQzNGLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1FBQ3BHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDN0IsQ0FBQzsrR0E1Q1UsNEJBQTRCO21HQUE1Qiw0QkFBNEIsMEpBNUM3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FzQ1Q7OzRGQU1VLDRCQUE0QjtrQkE5Q3hDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXNDVDtvQkFDRCxJQUFJLEVBQUU7d0JBQ0osK0JBQStCLEVBQUUsTUFBTTtxQkFDeEM7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzhCQU9VLEtBQUs7c0JBQWIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBEZXN0cm95UmVmLFxuICBJbnB1dCxcbiAgUXVlcnlMaXN0LFxuICBUZW1wbGF0ZVJlZixcbiAgaW5qZWN0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdGFrZVVudGlsRGVzdHJveWVkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZS9yeGpzLWludGVyb3AnO1xuXG5pbXBvcnQgeyBBcHAsIFNldHRpbmdzU2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgdHlwZSB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbmltcG9ydCB7IExheW91dERlZmF1bHRIZWFkZXJJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQtaGVhZGVyLWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IExheW91dERlZmF1bHRTZXJ2aWNlIH0gZnJvbSAnLi9sYXlvdXQuc2VydmljZSc7XG5pbXBvcnQgeyBMYXlvdXREZWZhdWx0SGVhZGVySXRlbURpcmVjdGlvbiwgTGF5b3V0RGVmYXVsdEhlYWRlckl0ZW1IaWRkZW4sIExheW91dERlZmF1bHRPcHRpb25zIH0gZnJvbSAnLi90eXBlcyc7XG5cbmludGVyZmFjZSBMYXlvdXREZWZhdWx0SGVhZGVySXRlbSB7XG4gIGhvc3Q6IFRlbXBsYXRlUmVmPE56U2FmZUFueT47XG4gIGhpZGRlbj86IExheW91dERlZmF1bHRIZWFkZXJJdGVtSGlkZGVuO1xuICBkaXJlY3Rpb24/OiBMYXlvdXREZWZhdWx0SGVhZGVySXRlbURpcmVjdGlvbjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGF5b3V0LWRlZmF1bHQtaGVhZGVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctdGVtcGxhdGUgI3JlbmRlciBsZXQtbHM+XG4gICAgICBAZm9yIChpIG9mIGxzOyB0cmFjayAkaW5kZXgpIHtcbiAgICAgICAgPGxpIFtjbGFzcy5oaWRkZW4tbW9iaWxlXT1cImkuaGlkZGVuID09PSAnbW9iaWxlJ1wiIFtjbGFzcy5oaWRkZW4tcGNdPVwiaS5oaWRkZW4gPT09ICdwYydcIj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiaS5ob3N0XCIgLz5cbiAgICAgICAgPC9saT5cbiAgICAgIH1cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJhbGFpbi1kZWZhdWx0X19oZWFkZXItbG9nb1wiIFtzdHlsZS53aWR0aC5weF09XCJvcHQubG9nb0ZpeFdpZHRoXCI+XG4gICAgICBAaWYgKG9wdC5sb2dvKSB7XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJvcHQubG9nb1wiIC8+XG4gICAgICB9IEBlbHNlIHtcbiAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwib3B0LmxvZ29MaW5rXCIgY2xhc3M9XCJhbGFpbi1kZWZhdWx0X19oZWFkZXItbG9nby1saW5rXCI+XG4gICAgICAgICAgPGltZyBjbGFzcz1cImFsYWluLWRlZmF1bHRfX2hlYWRlci1sb2dvLWV4cGFuZGVkXCIgW2F0dHIuc3JjXT1cIm9wdC5sb2dvRXhwYW5kZWRcIiBbYXR0ci5hbHRdPVwiYXBwLm5hbWVcIiAvPlxuICAgICAgICAgIDxpbWcgY2xhc3M9XCJhbGFpbi1kZWZhdWx0X19oZWFkZXItbG9nby1jb2xsYXBzZWRcIiBbYXR0ci5zcmNdPVwib3B0LmxvZ29Db2xsYXBzZWRcIiBbYXR0ci5hbHRdPVwiYXBwLm5hbWVcIiAvPlxuICAgICAgICA8L2E+XG4gICAgICB9XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImFsYWluLWRlZmF1bHRfX25hdi13cmFwXCI+XG4gICAgICA8dWwgY2xhc3M9XCJhbGFpbi1kZWZhdWx0X19uYXZcIj5cbiAgICAgICAgQGlmICghb3B0LmhpZGVBc2lkZSAmJiBvcHQuc2hvd0hlYWRlckNvbGxhcHNlKSB7XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFsYWluLWRlZmF1bHRfX25hdi1pdGVtIGFsYWluLWRlZmF1bHRfX25hdi1pdGVtLS1jb2xsYXBzZVwiIChjbGljayk9XCJ0b2dnbGVDb2xsYXBzZWQoKVwiPlxuICAgICAgICAgICAgICA8c3BhbiBuei1pY29uIFtuelR5cGVdPVwiY29sbGFwc2VkSWNvblwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIH1cbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInJlbmRlclwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogbGVmdCB9XCIgLz5cbiAgICAgIDwvdWw+XG4gICAgICBAaWYgKG1pZGRsZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbGFpbi1kZWZhdWx0X19uYXYgYWxhaW4tZGVmYXVsdF9fbmF2LW1pZGRsZVwiPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJtaWRkbGVbMF0uaG9zdFwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgfVxuICAgICAgPHVsIGNsYXNzPVwiYWxhaW4tZGVmYXVsdF9fbmF2XCI+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJyZW5kZXJcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IHJpZ2h0IH1cIiAvPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYWxhaW4tZGVmYXVsdF9faGVhZGVyXSc6IGB0cnVlYFxuICB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBMYXlvdXREZWZhdWx0SGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIHByaXZhdGUgcmVhZG9ubHkgc2V0dGluZ3MgPSBpbmplY3QoU2V0dGluZ3NTZXJ2aWNlKTtcbiAgcHJpdmF0ZSByZWFkb25seSBzcnYgPSBpbmplY3QoTGF5b3V0RGVmYXVsdFNlcnZpY2UpO1xuICBwcml2YXRlIHJlYWRvbmx5IGNkciA9IGluamVjdChDaGFuZ2VEZXRlY3RvclJlZik7XG4gIHByaXZhdGUgcmVhZG9ubHkgZGVzdHJveSQgPSBpbmplY3QoRGVzdHJveVJlZik7XG5cbiAgQElucHV0KCkgaXRlbXMhOiBRdWVyeUxpc3Q8TGF5b3V0RGVmYXVsdEhlYWRlckl0ZW1Db21wb25lbnQ+O1xuXG4gIGxlZnQ6IExheW91dERlZmF1bHRIZWFkZXJJdGVtW10gPSBbXTtcbiAgbWlkZGxlOiBMYXlvdXREZWZhdWx0SGVhZGVySXRlbVtdID0gW107XG4gIHJpZ2h0OiBMYXlvdXREZWZhdWx0SGVhZGVySXRlbVtdID0gW107XG5cbiAgZ2V0IG9wdCgpOiBMYXlvdXREZWZhdWx0T3B0aW9ucyB7XG4gICAgcmV0dXJuIHRoaXMuc3J2Lm9wdGlvbnM7XG4gIH1cblxuICBnZXQgYXBwKCk6IEFwcCB7XG4gICAgcmV0dXJuIHRoaXMuc2V0dGluZ3MuYXBwO1xuICB9XG5cbiAgZ2V0IGNvbGxhcHNlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy5sYXlvdXQuY29sbGFwc2VkO1xuICB9XG5cbiAgZ2V0IGNvbGxhcHNlZEljb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5zcnYuY29sbGFwc2VkSWNvbjtcbiAgfVxuXG4gIHByaXZhdGUgcmVmcmVzaCgpOiB2b2lkIHtcbiAgICBjb25zdCBhcnIgPSB0aGlzLml0ZW1zLnRvQXJyYXkoKTtcbiAgICB0aGlzLmxlZnQgPSBhcnIuZmlsdGVyKGkgPT4gaS5kaXJlY3Rpb24gPT09ICdsZWZ0Jyk7XG4gICAgdGhpcy5taWRkbGUgPSBhcnIuZmlsdGVyKGkgPT4gaS5kaXJlY3Rpb24gPT09ICdtaWRkbGUnKTtcbiAgICB0aGlzLnJpZ2h0ID0gYXJyLmZpbHRlcihpID0+IGkuZGlyZWN0aW9uID09PSAncmlnaHQnKTtcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pdGVtcy5jaGFuZ2VzLnBpcGUodGFrZVVudGlsRGVzdHJveWVkKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5yZWZyZXNoKCkpO1xuICAgIHRoaXMuc3J2Lm9wdGlvbnMkLnBpcGUodGFrZVVudGlsRGVzdHJveWVkKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpKTtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIHRvZ2dsZUNvbGxhcHNlZCgpOiB2b2lkIHtcbiAgICB0aGlzLnNydi50b2dnbGVDb2xsYXBzZWQoKTtcbiAgfVxufVxuIl19