import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "./layout.service";
import * as i2 from "@delon/theme";
import * as i3 from "@angular/common";
import * as i4 from "@angular/router";
import * as i5 from "ng-zorro-antd/icon";
class LayoutDefaultHeaderComponent {
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
        this.destroy$ = new Subject();
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
        this.items.changes.pipe(takeUntil(this.destroy$)).subscribe(() => this.refresh());
        this.srv.options$.pipe(takeUntil(this.destroy$)).subscribe(() => this.cdr.detectChanges());
        this.refresh();
    }
    toggleCollapsed() {
        this.srv.toggleCollapsed();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.2", ngImport: i0, type: LayoutDefaultHeaderComponent, deps: [{ token: i1.LayoutDefaultService }, { token: i2.SettingsService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.2", type: LayoutDefaultHeaderComponent, selector: "layout-default-header", inputs: { items: "items" }, host: { properties: { "class.alain-default__header": "true" } }, ngImport: i0, template: `
    <ng-template #render let-ls>
      <li *ngFor="let i of ls" [class.hidden-mobile]="i.hidden === 'mobile'" [class.hidden-pc]="i.hidden === 'pc'">
        <ng-container *ngTemplateOutlet="i.host"></ng-container>
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
        <ng-template [ngTemplateOutlet]="render" [ngTemplateOutletContext]="{ $implicit: left }"></ng-template>
      </ul>
      <div *ngIf="middle.length > 0" class="alain-default__nav alain-default__nav-middle">
        <ng-container *ngTemplateOutlet="middle[0].host"></ng-container>
      </div>
      <ul class="alain-default__nav">
        <ng-template [ngTemplateOutlet]="render" [ngTemplateOutletContext]="{ $implicit: right }"></ng-template>
      </ul>
    </div>
  `, isInline: true, dependencies: [{ kind: "directive", type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i3.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i4.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "directive", type: i5.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
export { LayoutDefaultHeaderComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.2", ngImport: i0, type: LayoutDefaultHeaderComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'layout-default-header',
                    template: `
    <ng-template #render let-ls>
      <li *ngFor="let i of ls" [class.hidden-mobile]="i.hidden === 'mobile'" [class.hidden-pc]="i.hidden === 'pc'">
        <ng-container *ngTemplateOutlet="i.host"></ng-container>
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
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS9sYXlvdXQtZGVmYXVsdC9sYXlvdXQtaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBRXZCLFNBQVMsRUFDVCxLQUFLLEVBSU4sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7Ozs7QUFlMUMsTUFzQ2EsNEJBQTRCO0lBU3ZDLElBQUksR0FBRztRQUNMLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7SUFDMUIsQ0FBQztJQUVELElBQUksR0FBRztRQUNMLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7SUFDM0IsQ0FBQztJQUVELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxJQUFJLGFBQWE7UUFDZixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxZQUFvQixHQUF5QixFQUFVLFFBQXlCLEVBQVUsR0FBc0I7UUFBNUYsUUFBRyxHQUFILEdBQUcsQ0FBc0I7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBeEJ4RyxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUl2QyxTQUFJLEdBQThCLEVBQUUsQ0FBQztRQUNyQyxXQUFNLEdBQThCLEVBQUUsQ0FBQztRQUN2QyxVQUFLLEdBQThCLEVBQUUsQ0FBQztJQWtCNkUsQ0FBQztJQUU1RyxPQUFPO1FBQ2IsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxLQUFLLE1BQU0sQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLEtBQUssUUFBUSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsS0FBSyxPQUFPLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDbEYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1FBQzNGLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs4R0FoRFUsNEJBQTRCO2tHQUE1Qiw0QkFBNEIsMEpBcEM3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBOEJUOztTQU1VLDRCQUE0QjsyRkFBNUIsNEJBQTRCO2tCQXRDeEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQThCVDtvQkFDRCxJQUFJLEVBQUU7d0JBQ0osK0JBQStCLEVBQUUsTUFBTTtxQkFDeEM7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEO3lLQUlVLEtBQUs7c0JBQWIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBRdWVyeUxpc3QsXG4gIFRlbXBsYXRlUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEFwcCwgU2V0dGluZ3NTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcblxuaW1wb3J0IHsgTGF5b3V0RGVmYXVsdEhlYWRlckl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2xheW91dC1oZWFkZXItaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGF5b3V0RGVmYXVsdFNlcnZpY2UgfSBmcm9tICcuL2xheW91dC5zZXJ2aWNlJztcbmltcG9ydCB7IExheW91dERlZmF1bHRIZWFkZXJJdGVtRGlyZWN0aW9uLCBMYXlvdXREZWZhdWx0SGVhZGVySXRlbUhpZGRlbiwgTGF5b3V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tICcuL3R5cGVzJztcblxuaW50ZXJmYWNlIExheW91dERlZmF1bHRIZWFkZXJJdGVtIHtcbiAgaG9zdDogVGVtcGxhdGVSZWY8TnpTYWZlQW55PjtcbiAgaGlkZGVuPzogTGF5b3V0RGVmYXVsdEhlYWRlckl0ZW1IaWRkZW47XG4gIGRpcmVjdGlvbj86IExheW91dERlZmF1bHRIZWFkZXJJdGVtRGlyZWN0aW9uO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsYXlvdXQtZGVmYXVsdC1oZWFkZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy10ZW1wbGF0ZSAjcmVuZGVyIGxldC1scz5cbiAgICAgIDxsaSAqbmdGb3I9XCJsZXQgaSBvZiBsc1wiIFtjbGFzcy5oaWRkZW4tbW9iaWxlXT1cImkuaGlkZGVuID09PSAnbW9iaWxlJ1wiIFtjbGFzcy5oaWRkZW4tcGNdPVwiaS5oaWRkZW4gPT09ICdwYydcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImkuaG9zdFwiPjwvbmctY29udGFpbmVyPlxuICAgICAgPC9saT5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJhbGFpbi1kZWZhdWx0X19oZWFkZXItbG9nb1wiIFtzdHlsZS53aWR0aC5weF09XCJvcHQubG9nb0ZpeFdpZHRoXCI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIW9wdC5sb2dvOyBlbHNlIG9wdC5sb2dvIVwiPlxuICAgICAgICA8YSBbcm91dGVyTGlua109XCJvcHQubG9nb0xpbmtcIiBjbGFzcz1cImFsYWluLWRlZmF1bHRfX2hlYWRlci1sb2dvLWxpbmtcIj5cbiAgICAgICAgICA8aW1nIGNsYXNzPVwiYWxhaW4tZGVmYXVsdF9faGVhZGVyLWxvZ28tZXhwYW5kZWRcIiBbYXR0ci5zcmNdPVwib3B0LmxvZ29FeHBhbmRlZFwiIFthdHRyLmFsdF09XCJhcHAubmFtZVwiIC8+XG4gICAgICAgICAgPGltZyBjbGFzcz1cImFsYWluLWRlZmF1bHRfX2hlYWRlci1sb2dvLWNvbGxhcHNlZFwiIFthdHRyLnNyY109XCJvcHQubG9nb0NvbGxhcHNlZFwiIFthdHRyLmFsdF09XCJhcHAubmFtZVwiIC8+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJhbGFpbi1kZWZhdWx0X19uYXYtd3JhcFwiPlxuICAgICAgPHVsIGNsYXNzPVwiYWxhaW4tZGVmYXVsdF9fbmF2XCI+XG4gICAgICAgIDxsaSAqbmdJZj1cIiFvcHQuaGlkZUFzaWRlICYmIG9wdC5zaG93SGVhZGVyQ29sbGFwc2VcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWxhaW4tZGVmYXVsdF9fbmF2LWl0ZW0gYWxhaW4tZGVmYXVsdF9fbmF2LWl0ZW0tLWNvbGxhcHNlXCIgKGNsaWNrKT1cInRvZ2dsZUNvbGxhcHNlZCgpXCI+XG4gICAgICAgICAgICA8c3BhbiBuei1pY29uIFtuelR5cGVdPVwiY29sbGFwc2VkSWNvblwiPjwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInJlbmRlclwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogbGVmdCB9XCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgIDwvdWw+XG4gICAgICA8ZGl2ICpuZ0lmPVwibWlkZGxlLmxlbmd0aCA+IDBcIiBjbGFzcz1cImFsYWluLWRlZmF1bHRfX25hdiBhbGFpbi1kZWZhdWx0X19uYXYtbWlkZGxlXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJtaWRkbGVbMF0uaG9zdFwiPjwvbmctY29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgICA8dWwgY2xhc3M9XCJhbGFpbi1kZWZhdWx0X19uYXZcIj5cbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInJlbmRlclwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogcmlnaHQgfVwiPjwvbmctdGVtcGxhdGU+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbGFpbi1kZWZhdWx0X19oZWFkZXJdJzogYHRydWVgXG4gIH0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIExheW91dERlZmF1bHRIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBASW5wdXQoKSBpdGVtcyE6IFF1ZXJ5TGlzdDxMYXlvdXREZWZhdWx0SGVhZGVySXRlbUNvbXBvbmVudD47XG5cbiAgbGVmdDogTGF5b3V0RGVmYXVsdEhlYWRlckl0ZW1bXSA9IFtdO1xuICBtaWRkbGU6IExheW91dERlZmF1bHRIZWFkZXJJdGVtW10gPSBbXTtcbiAgcmlnaHQ6IExheW91dERlZmF1bHRIZWFkZXJJdGVtW10gPSBbXTtcblxuICBnZXQgb3B0KCk6IExheW91dERlZmF1bHRPcHRpb25zIHtcbiAgICByZXR1cm4gdGhpcy5zcnYub3B0aW9ucztcbiAgfVxuXG4gIGdldCBhcHAoKTogQXBwIHtcbiAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy5hcHA7XG4gIH1cblxuICBnZXQgY29sbGFwc2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNldHRpbmdzLmxheW91dC5jb2xsYXBzZWQ7XG4gIH1cblxuICBnZXQgY29sbGFwc2VkSWNvbigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnNydi5jb2xsYXBzZWRJY29uO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzcnY6IExheW91dERlZmF1bHRTZXJ2aWNlLCBwcml2YXRlIHNldHRpbmdzOiBTZXR0aW5nc1NlcnZpY2UsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBwcml2YXRlIHJlZnJlc2goKTogdm9pZCB7XG4gICAgY29uc3QgYXJyID0gdGhpcy5pdGVtcy50b0FycmF5KCk7XG4gICAgdGhpcy5sZWZ0ID0gYXJyLmZpbHRlcihpID0+IGkuZGlyZWN0aW9uID09PSAnbGVmdCcpO1xuICAgIHRoaXMubWlkZGxlID0gYXJyLmZpbHRlcihpID0+IGkuZGlyZWN0aW9uID09PSAnbWlkZGxlJyk7XG4gICAgdGhpcy5yaWdodCA9IGFyci5maWx0ZXIoaSA9PiBpLmRpcmVjdGlvbiA9PT0gJ3JpZ2h0Jyk7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaXRlbXMuY2hhbmdlcy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMucmVmcmVzaCgpKTtcbiAgICB0aGlzLnNydi5vcHRpb25zJC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKSk7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICB0b2dnbGVDb2xsYXBzZWQoKTogdm9pZCB7XG4gICAgdGhpcy5zcnYudG9nZ2xlQ29sbGFwc2VkKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==