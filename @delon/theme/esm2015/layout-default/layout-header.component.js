import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { SettingsService } from '@delon/theme';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LayoutDefaultComponent } from './layout.component';
export class LayoutDefaultHeaderComponent {
    constructor(settings, parent, cdr) {
        this.settings = settings;
        this.parent = parent;
        this.cdr = cdr;
        this.destroy$ = new Subject();
        this.left = [];
        this.middle = [];
        this.right = [];
    }
    get options() {
        return this.parent.options;
    }
    get app() {
        return this.settings.app;
    }
    get collapsed() {
        return this.settings.layout.collapsed;
    }
    get collapsedIcon() {
        let type = this.collapsed ? 'unfold' : 'fold';
        if (this.settings.layout.direction === 'rtl') {
            type = this.collapsed ? 'fold' : 'unfold';
        }
        return `menu-${type}`;
    }
    refresh() {
        const arr = this.parent.headerItems.toArray();
        this.left = arr.filter(i => i.direction === 'left');
        this.middle = arr.filter(i => i.direction === 'middle');
        this.right = arr.filter(i => i.direction === 'right');
        this.cdr.detectChanges();
    }
    ngAfterViewInit() {
        this.parent.headerItems.changes.pipe(takeUntil(this.destroy$)).subscribe(() => this.refresh());
        this.refresh();
    }
    toggleCollapsed() {
        this.settings.setLayout('collapsed', !this.settings.layout.collapsed);
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
LayoutDefaultHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'layout-default-header',
                template: `
    <ng-template #render let-ls>
      <li *ngFor="let i of ls" [class.hidden-mobile]="i.hidden === 'mobile'" [class.hidden-pc]="i.hidden === 'pc'">
        <ng-container *ngTemplateOutlet="i.host"></ng-container>
      </li>
    </ng-template>
    <div class="alain-default__header-logo" [style.width.px]="options.logoFixWidth">
      <a [routerLink]="options.logoLink" class="alain-default__header-logo-link">
        <img class="alain-default__header-logo-expanded" [attr.src]="options.logoExpanded" [attr.alt]="app.name" />
        <img class="alain-default__header-logo-collapsed" [attr.src]="options.logoCollapsed" [attr.alt]="app.name" />
      </a>
    </div>
    <div class="alain-default__nav-wrap">
      <ul class="alain-default__nav">
        <li *ngIf="!options.hideAside">
          <div class="alain-default__nav-item alain-default__nav-item--collapse" (click)="toggleCollapsed()">
            <i nz-icon [nzType]="collapsedIcon"></i>
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
                    '[class.alain-default__header]': `true`,
                },
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
LayoutDefaultHeaderComponent.ctorParameters = () => [
    { type: SettingsService },
    { type: LayoutDefaultComponent },
    { type: ChangeDetectorRef }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS9sYXlvdXQtZGVmYXVsdC9sYXlvdXQtaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBMEIsTUFBTSxlQUFlLENBQUM7QUFDN0gsT0FBTyxFQUFPLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNwRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQTZDNUQsTUFBTSxPQUFPLDRCQUE0QjtJQTJCdkMsWUFBb0IsUUFBeUIsRUFBVSxNQUE4QixFQUFVLEdBQXNCO1FBQWpHLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBd0I7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQTFCN0csYUFBUSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFFdkMsU0FBSSxHQUE4QixFQUFFLENBQUM7UUFDckMsV0FBTSxHQUE4QixFQUFFLENBQUM7UUFDdkMsVUFBSyxHQUE4QixFQUFFLENBQUM7SUFzQmtGLENBQUM7SUFwQnpILElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDN0IsQ0FBQztJQUVELElBQUksR0FBRztRQUNMLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7SUFDM0IsQ0FBQztJQUVELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxJQUFJLGFBQWE7UUFDZixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUM5QyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFNBQVMsS0FBSyxLQUFLLEVBQUU7WUFDNUMsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1NBQzNDO1FBQ0QsT0FBTyxRQUFRLElBQUksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFJTyxPQUFPO1FBQ2IsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDOUMsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsS0FBSyxNQUFNLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxLQUFLLFFBQVEsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLEtBQUssT0FBTyxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUMvRixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7WUFyRkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTRCVDtnQkFDRCxJQUFJLEVBQUU7b0JBQ0osK0JBQStCLEVBQUUsTUFBTTtpQkFDeEM7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7OztZQS9DYSxlQUFlO1lBR3BCLHNCQUFzQjtZQUprQixpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgT25EZXN0cm95LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXBwLCBTZXR0aW5nc1NlcnZpY2UgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTGF5b3V0RGVmYXVsdENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYXlvdXREZWZhdWx0SGVhZGVySXRlbURpcmVjdGlvbiwgTGF5b3V0RGVmYXVsdEhlYWRlckl0ZW1IaWRkZW4sIExheW91dERlZmF1bHRPcHRpb25zIH0gZnJvbSAnLi90eXBlcyc7XG5cbmludGVyZmFjZSBMYXlvdXREZWZhdWx0SGVhZGVySXRlbSB7XG4gIGhvc3Q6IFRlbXBsYXRlUmVmPGFueT47XG4gIGhpZGRlbj86IExheW91dERlZmF1bHRIZWFkZXJJdGVtSGlkZGVuO1xuICBkaXJlY3Rpb24/OiBMYXlvdXREZWZhdWx0SGVhZGVySXRlbURpcmVjdGlvbjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGF5b3V0LWRlZmF1bHQtaGVhZGVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctdGVtcGxhdGUgI3JlbmRlciBsZXQtbHM+XG4gICAgICA8bGkgKm5nRm9yPVwibGV0IGkgb2YgbHNcIiBbY2xhc3MuaGlkZGVuLW1vYmlsZV09XCJpLmhpZGRlbiA9PT0gJ21vYmlsZSdcIiBbY2xhc3MuaGlkZGVuLXBjXT1cImkuaGlkZGVuID09PSAncGMnXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJpLmhvc3RcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvbGk+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiYWxhaW4tZGVmYXVsdF9faGVhZGVyLWxvZ29cIiBbc3R5bGUud2lkdGgucHhdPVwib3B0aW9ucy5sb2dvRml4V2lkdGhcIj5cbiAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIm9wdGlvbnMubG9nb0xpbmtcIiBjbGFzcz1cImFsYWluLWRlZmF1bHRfX2hlYWRlci1sb2dvLWxpbmtcIj5cbiAgICAgICAgPGltZyBjbGFzcz1cImFsYWluLWRlZmF1bHRfX2hlYWRlci1sb2dvLWV4cGFuZGVkXCIgW2F0dHIuc3JjXT1cIm9wdGlvbnMubG9nb0V4cGFuZGVkXCIgW2F0dHIuYWx0XT1cImFwcC5uYW1lXCIgLz5cbiAgICAgICAgPGltZyBjbGFzcz1cImFsYWluLWRlZmF1bHRfX2hlYWRlci1sb2dvLWNvbGxhcHNlZFwiIFthdHRyLnNyY109XCJvcHRpb25zLmxvZ29Db2xsYXBzZWRcIiBbYXR0ci5hbHRdPVwiYXBwLm5hbWVcIiAvPlxuICAgICAgPC9hPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJhbGFpbi1kZWZhdWx0X19uYXYtd3JhcFwiPlxuICAgICAgPHVsIGNsYXNzPVwiYWxhaW4tZGVmYXVsdF9fbmF2XCI+XG4gICAgICAgIDxsaSAqbmdJZj1cIiFvcHRpb25zLmhpZGVBc2lkZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbGFpbi1kZWZhdWx0X19uYXYtaXRlbSBhbGFpbi1kZWZhdWx0X19uYXYtaXRlbS0tY29sbGFwc2VcIiAoY2xpY2spPVwidG9nZ2xlQ29sbGFwc2VkKClcIj5cbiAgICAgICAgICAgIDxpIG56LWljb24gW256VHlwZV09XCJjb2xsYXBzZWRJY29uXCI+PC9pPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwicmVuZGVyXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBsZWZ0IH1cIj48L25nLXRlbXBsYXRlPlxuICAgICAgPC91bD5cbiAgICAgIDxkaXYgKm5nSWY9XCJtaWRkbGUubGVuZ3RoID4gMFwiIGNsYXNzPVwiYWxhaW4tZGVmYXVsdF9fbmF2IGFsYWluLWRlZmF1bHRfX25hdi1taWRkbGVcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cIm1pZGRsZVswXS5ob3N0XCI+PC9uZy1jb250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDx1bCBjbGFzcz1cImFsYWluLWRlZmF1bHRfX25hdlwiPlxuICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwicmVuZGVyXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiByaWdodCB9XCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFsYWluLWRlZmF1bHRfX2hlYWRlcl0nOiBgdHJ1ZWAsXG4gIH0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBMYXlvdXREZWZhdWx0SGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgbGVmdDogTGF5b3V0RGVmYXVsdEhlYWRlckl0ZW1bXSA9IFtdO1xuICBtaWRkbGU6IExheW91dERlZmF1bHRIZWFkZXJJdGVtW10gPSBbXTtcbiAgcmlnaHQ6IExheW91dERlZmF1bHRIZWFkZXJJdGVtW10gPSBbXTtcblxuICBnZXQgb3B0aW9ucygpOiBMYXlvdXREZWZhdWx0T3B0aW9ucyB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50Lm9wdGlvbnM7XG4gIH1cblxuICBnZXQgYXBwKCk6IEFwcCB7XG4gICAgcmV0dXJuIHRoaXMuc2V0dGluZ3MuYXBwO1xuICB9XG5cbiAgZ2V0IGNvbGxhcHNlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy5sYXlvdXQuY29sbGFwc2VkO1xuICB9XG5cbiAgZ2V0IGNvbGxhcHNlZEljb24oKTogc3RyaW5nIHtcbiAgICBsZXQgdHlwZSA9IHRoaXMuY29sbGFwc2VkID8gJ3VuZm9sZCcgOiAnZm9sZCc7XG4gICAgaWYgKHRoaXMuc2V0dGluZ3MubGF5b3V0LmRpcmVjdGlvbiA9PT0gJ3J0bCcpIHtcbiAgICAgIHR5cGUgPSB0aGlzLmNvbGxhcHNlZCA/ICdmb2xkJyA6ICd1bmZvbGQnO1xuICAgIH1cbiAgICByZXR1cm4gYG1lbnUtJHt0eXBlfWA7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNldHRpbmdzOiBTZXR0aW5nc1NlcnZpY2UsIHByaXZhdGUgcGFyZW50OiBMYXlvdXREZWZhdWx0Q29tcG9uZW50LCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgcHJpdmF0ZSByZWZyZXNoKCk6IHZvaWQge1xuICAgIGNvbnN0IGFyciA9IHRoaXMucGFyZW50LmhlYWRlckl0ZW1zLnRvQXJyYXkoKTtcbiAgICB0aGlzLmxlZnQgPSBhcnIuZmlsdGVyKGkgPT4gaS5kaXJlY3Rpb24gPT09ICdsZWZ0Jyk7XG4gICAgdGhpcy5taWRkbGUgPSBhcnIuZmlsdGVyKGkgPT4gaS5kaXJlY3Rpb24gPT09ICdtaWRkbGUnKTtcbiAgICB0aGlzLnJpZ2h0ID0gYXJyLmZpbHRlcihpID0+IGkuZGlyZWN0aW9uID09PSAncmlnaHQnKTtcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5wYXJlbnQuaGVhZGVySXRlbXMuY2hhbmdlcy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMucmVmcmVzaCgpKTtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIHRvZ2dsZUNvbGxhcHNlZCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldHRpbmdzLnNldExheW91dCgnY29sbGFwc2VkJywgIXRoaXMuc2V0dGluZ3MubGF5b3V0LmNvbGxhcHNlZCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==