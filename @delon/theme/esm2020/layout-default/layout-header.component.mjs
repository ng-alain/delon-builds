import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "./layout.service";
import * as i2 from "@delon/theme";
import * as i3 from "@angular/common";
import * as i4 from "@angular/router";
import * as i5 from "ng-zorro-antd/icon";
export class LayoutDefaultHeaderComponent {
    constructor(srv, settings, cdr) {
        this.srv = srv;
        this.settings = settings;
        this.cdr = cdr;
        this.destroy$ = new Subject();
        this.left = [];
        this.middle = [];
        this.right = [];
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
        this.items.changes.pipe(takeUntil(this.destroy$)).subscribe(() => this.refresh());
        this.refresh();
    }
    toggleCollapsed() {
        this.srv.toggleCollapsed();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
LayoutDefaultHeaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: LayoutDefaultHeaderComponent, deps: [{ token: i1.LayoutDefaultService }, { token: i2.SettingsService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
LayoutDefaultHeaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: LayoutDefaultHeaderComponent, selector: "layout-default-header", inputs: { items: "items", options: "options" }, host: { properties: { "class.alain-default__header": "true" } }, ngImport: i0, template: `
    <ng-template #render let-ls>
      <li *ngFor="let i of ls" [class.hidden-mobile]="i.hidden === 'mobile'" [class.hidden-pc]="i.hidden === 'pc'">
        <ng-container *ngTemplateOutlet="i.host"></ng-container>
      </li>
    </ng-template>
    <div class="alain-default__header-logo" [style.width.px]="options.logoFixWidth">
      <ng-container *ngIf="!options.logo; else options.logo!">
        <a [routerLink]="options.logoLink" class="alain-default__header-logo-link">
          <img class="alain-default__header-logo-expanded" [attr.src]="options.logoExpanded" [attr.alt]="app.name" />
          <img class="alain-default__header-logo-collapsed" [attr.src]="options.logoCollapsed" [attr.alt]="app.name" />
        </a>
      </ng-container>
    </div>
    <div class="alain-default__nav-wrap">
      <ul class="alain-default__nav">
        <li *ngIf="!options.hideAside && options.showHeaderCollapse">
          <div class="alain-default__nav-item alain-default__nav-item--collapse" (click)="toggleCollapsed()">
            <span nz-icon [nzType]="collapsedIcon"></span>
          </div>
        </li>
        <ng-template [ngTemplateOutlet]="render" [ngTemplateOutletContext]="{ $implicit: left }"></ng-template>
      </ul>
      <div *ngIf="middle.length > 0" class="alain-default__nav alain-default__nav-middle">
        <ng-container *ngTemplateOutlet="middle[0].host"></ng-container>
      </div>
      <ul class="alain-default__nav">
        <ng-template [ngTemplateOutlet]="render" [ngTemplateOutletContext]="{ $implicit: right }"></ng-template>
      </ul>
    </div>
  `, isInline: true, dependencies: [{ kind: "directive", type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i3.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i4.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "directive", type: i5.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: LayoutDefaultHeaderComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'layout-default-header',
                    template: `
    <ng-template #render let-ls>
      <li *ngFor="let i of ls" [class.hidden-mobile]="i.hidden === 'mobile'" [class.hidden-pc]="i.hidden === 'pc'">
        <ng-container *ngTemplateOutlet="i.host"></ng-container>
      </li>
    </ng-template>
    <div class="alain-default__header-logo" [style.width.px]="options.logoFixWidth">
      <ng-container *ngIf="!options.logo; else options.logo!">
        <a [routerLink]="options.logoLink" class="alain-default__header-logo-link">
          <img class="alain-default__header-logo-expanded" [attr.src]="options.logoExpanded" [attr.alt]="app.name" />
          <img class="alain-default__header-logo-collapsed" [attr.src]="options.logoCollapsed" [attr.alt]="app.name" />
        </a>
      </ng-container>
    </div>
    <div class="alain-default__nav-wrap">
      <ul class="alain-default__nav">
        <li *ngIf="!options.hideAside && options.showHeaderCollapse">
          <div class="alain-default__nav-item alain-default__nav-item--collapse" (click)="toggleCollapsed()">
            <span nz-icon [nzType]="collapsedIcon"></span>
          </div>
        </li>
        <ng-template [ngTemplateOutlet]="render" [ngTemplateOutletContext]="{ $implicit: left }"></ng-template>
      </ul>
      <div *ngIf="middle.length > 0" class="alain-default__nav alain-default__nav-middle">
        <ng-container *ngTemplateOutlet="middle[0].host"></ng-container>
      </div>
      <ul class="alain-default__nav">
        <ng-template [ngTemplateOutlet]="render" [ngTemplateOutletContext]="{ $implicit: right }"></ng-template>
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
            }], options: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS9sYXlvdXQtZGVmYXVsdC9sYXlvdXQtaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBRXZCLFNBQVMsRUFDVCxLQUFLLEVBSU4sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7Ozs7QUFxRDFDLE1BQU0sT0FBTyw0QkFBNEI7SUFzQnZDLFlBQW9CLEdBQXlCLEVBQVUsUUFBeUIsRUFBVSxHQUFzQjtRQUE1RixRQUFHLEdBQUgsR0FBRyxDQUFzQjtRQUFVLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFyQnhHLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBS3ZDLFNBQUksR0FBOEIsRUFBRSxDQUFDO1FBQ3JDLFdBQU0sR0FBOEIsRUFBRSxDQUFDO1FBQ3ZDLFVBQUssR0FBOEIsRUFBRSxDQUFDO0lBYzZFLENBQUM7SUFacEgsSUFBSSxHQUFHO1FBQ0wsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQztJQUMzQixDQUFDO0lBRUQsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDeEMsQ0FBQztJQUVELElBQUksYUFBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUM7SUFDaEMsQ0FBQztJQUlPLE9BQU87UUFDYixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLEtBQUssTUFBTSxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsS0FBSyxRQUFRLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxLQUFLLE9BQU8sQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUNsRixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7OzBIQTVDVSw0QkFBNEI7OEdBQTVCLDRCQUE0Qiw4S0FwQzdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E4QlQ7NEZBTVUsNEJBQTRCO2tCQXRDeEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQThCVDtvQkFDRCxJQUFJLEVBQUU7d0JBQ0osK0JBQStCLEVBQUUsTUFBTTtxQkFDeEM7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEO3lLQUlVLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgUXVlcnlMaXN0LFxuICBUZW1wbGF0ZVJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBBcHAsIFNldHRpbmdzU2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgdHlwZSB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5cbmltcG9ydCB7IExheW91dERlZmF1bHRIZWFkZXJJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQtaGVhZGVyLWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IExheW91dERlZmF1bHRTZXJ2aWNlIH0gZnJvbSAnLi9sYXlvdXQuc2VydmljZSc7XG5pbXBvcnQgeyBMYXlvdXREZWZhdWx0SGVhZGVySXRlbURpcmVjdGlvbiwgTGF5b3V0RGVmYXVsdEhlYWRlckl0ZW1IaWRkZW4sIExheW91dERlZmF1bHRPcHRpb25zIH0gZnJvbSAnLi90eXBlcyc7XG5cbmludGVyZmFjZSBMYXlvdXREZWZhdWx0SGVhZGVySXRlbSB7XG4gIGhvc3Q6IFRlbXBsYXRlUmVmPE56U2FmZUFueT47XG4gIGhpZGRlbj86IExheW91dERlZmF1bHRIZWFkZXJJdGVtSGlkZGVuO1xuICBkaXJlY3Rpb24/OiBMYXlvdXREZWZhdWx0SGVhZGVySXRlbURpcmVjdGlvbjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGF5b3V0LWRlZmF1bHQtaGVhZGVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctdGVtcGxhdGUgI3JlbmRlciBsZXQtbHM+XG4gICAgICA8bGkgKm5nRm9yPVwibGV0IGkgb2YgbHNcIiBbY2xhc3MuaGlkZGVuLW1vYmlsZV09XCJpLmhpZGRlbiA9PT0gJ21vYmlsZSdcIiBbY2xhc3MuaGlkZGVuLXBjXT1cImkuaGlkZGVuID09PSAncGMnXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJpLmhvc3RcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvbGk+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiYWxhaW4tZGVmYXVsdF9faGVhZGVyLWxvZ29cIiBbc3R5bGUud2lkdGgucHhdPVwib3B0aW9ucy5sb2dvRml4V2lkdGhcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhb3B0aW9ucy5sb2dvOyBlbHNlIG9wdGlvbnMubG9nbyFcIj5cbiAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwib3B0aW9ucy5sb2dvTGlua1wiIGNsYXNzPVwiYWxhaW4tZGVmYXVsdF9faGVhZGVyLWxvZ28tbGlua1wiPlxuICAgICAgICAgIDxpbWcgY2xhc3M9XCJhbGFpbi1kZWZhdWx0X19oZWFkZXItbG9nby1leHBhbmRlZFwiIFthdHRyLnNyY109XCJvcHRpb25zLmxvZ29FeHBhbmRlZFwiIFthdHRyLmFsdF09XCJhcHAubmFtZVwiIC8+XG4gICAgICAgICAgPGltZyBjbGFzcz1cImFsYWluLWRlZmF1bHRfX2hlYWRlci1sb2dvLWNvbGxhcHNlZFwiIFthdHRyLnNyY109XCJvcHRpb25zLmxvZ29Db2xsYXBzZWRcIiBbYXR0ci5hbHRdPVwiYXBwLm5hbWVcIiAvPlxuICAgICAgICA8L2E+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiYWxhaW4tZGVmYXVsdF9fbmF2LXdyYXBcIj5cbiAgICAgIDx1bCBjbGFzcz1cImFsYWluLWRlZmF1bHRfX25hdlwiPlxuICAgICAgICA8bGkgKm5nSWY9XCIhb3B0aW9ucy5oaWRlQXNpZGUgJiYgb3B0aW9ucy5zaG93SGVhZGVyQ29sbGFwc2VcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWxhaW4tZGVmYXVsdF9fbmF2LWl0ZW0gYWxhaW4tZGVmYXVsdF9fbmF2LWl0ZW0tLWNvbGxhcHNlXCIgKGNsaWNrKT1cInRvZ2dsZUNvbGxhcHNlZCgpXCI+XG4gICAgICAgICAgICA8c3BhbiBuei1pY29uIFtuelR5cGVdPVwiY29sbGFwc2VkSWNvblwiPjwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInJlbmRlclwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogbGVmdCB9XCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgIDwvdWw+XG4gICAgICA8ZGl2ICpuZ0lmPVwibWlkZGxlLmxlbmd0aCA+IDBcIiBjbGFzcz1cImFsYWluLWRlZmF1bHRfX25hdiBhbGFpbi1kZWZhdWx0X19uYXYtbWlkZGxlXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJtaWRkbGVbMF0uaG9zdFwiPjwvbmctY29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgICA8dWwgY2xhc3M9XCJhbGFpbi1kZWZhdWx0X19uYXZcIj5cbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInJlbmRlclwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogcmlnaHQgfVwiPjwvbmctdGVtcGxhdGU+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbGFpbi1kZWZhdWx0X19oZWFkZXJdJzogYHRydWVgXG4gIH0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIExheW91dERlZmF1bHRIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBASW5wdXQoKSBpdGVtcyE6IFF1ZXJ5TGlzdDxMYXlvdXREZWZhdWx0SGVhZGVySXRlbUNvbXBvbmVudD47XG4gIEBJbnB1dCgpIG9wdGlvbnMhOiBMYXlvdXREZWZhdWx0T3B0aW9ucztcblxuICBsZWZ0OiBMYXlvdXREZWZhdWx0SGVhZGVySXRlbVtdID0gW107XG4gIG1pZGRsZTogTGF5b3V0RGVmYXVsdEhlYWRlckl0ZW1bXSA9IFtdO1xuICByaWdodDogTGF5b3V0RGVmYXVsdEhlYWRlckl0ZW1bXSA9IFtdO1xuXG4gIGdldCBhcHAoKTogQXBwIHtcbiAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy5hcHA7XG4gIH1cblxuICBnZXQgY29sbGFwc2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNldHRpbmdzLmxheW91dC5jb2xsYXBzZWQ7XG4gIH1cblxuICBnZXQgY29sbGFwc2VkSWNvbigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnNydi5jb2xsYXBzZWRJY29uO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzcnY6IExheW91dERlZmF1bHRTZXJ2aWNlLCBwcml2YXRlIHNldHRpbmdzOiBTZXR0aW5nc1NlcnZpY2UsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBwcml2YXRlIHJlZnJlc2goKTogdm9pZCB7XG4gICAgY29uc3QgYXJyID0gdGhpcy5pdGVtcy50b0FycmF5KCk7XG4gICAgdGhpcy5sZWZ0ID0gYXJyLmZpbHRlcihpID0+IGkuZGlyZWN0aW9uID09PSAnbGVmdCcpO1xuICAgIHRoaXMubWlkZGxlID0gYXJyLmZpbHRlcihpID0+IGkuZGlyZWN0aW9uID09PSAnbWlkZGxlJyk7XG4gICAgdGhpcy5yaWdodCA9IGFyci5maWx0ZXIoaSA9PiBpLmRpcmVjdGlvbiA9PT0gJ3JpZ2h0Jyk7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaXRlbXMuY2hhbmdlcy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMucmVmcmVzaCgpKTtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIHRvZ2dsZUNvbGxhcHNlZCgpOiB2b2lkIHtcbiAgICB0aGlzLnNydi50b2dnbGVDb2xsYXBzZWQoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19