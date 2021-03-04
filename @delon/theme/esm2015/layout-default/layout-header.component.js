import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { SettingsService } from '@delon/theme';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { LayoutDefaultComponent } from './layout.component';
let LayoutDefaultHeaderComponent = class LayoutDefaultHeaderComponent {
    constructor(settings, parent, cdr) {
        this.settings = settings;
        this.parent = parent;
        this.cdr = cdr;
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
        this.parent.headerItems.changes.pipe(untilDestroyed(this)).subscribe(() => this.refresh());
        this.refresh();
    }
    toggleCollapsed() {
        this.settings.setLayout('collapsed', !this.settings.layout.collapsed);
    }
};
LayoutDefaultHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'layout-default-header',
                template: `
    <ng-template #render let-ls>
      <li *ngFor="let i of ls" [class.hidden-mobile]="i.hidden === 'mobile'" [class.hidden-pc]="i.hidden === 'pc'">
        <ng-container *ngTemplateOutlet="i.host"></ng-container>
      </li>
    </ng-template>
    <div class="alain-default__header-logo">
      <a [routerLink]="['/']" class="alain-default__header-logo-link">
        <img class="alain-default__header-logo-expanded" [attr.src]="options.logoExpanded" [attr.alt]="app.name" style="max-height: 40px" />
        <img
          class="alain-default__header-logo-collapsed"
          [attr.src]="options.logoCollapsed"
          [attr.alt]="app.name"
          style="max-height: 30px"
        />
      </a>
    </div>
    <div class="alain-default__nav-wrap">
      <ul class="alain-default__nav">
        <li>
          <div class="alain-default__nav-item" (click)="toggleCollapsed()">
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
/** @nocollapse */
LayoutDefaultHeaderComponent.ctorParameters = () => [
    { type: SettingsService },
    { type: LayoutDefaultComponent },
    { type: ChangeDetectorRef }
];
LayoutDefaultHeaderComponent = __decorate([
    UntilDestroy(),
    __metadata("design:paramtypes", [SettingsService, LayoutDefaultComponent, ChangeDetectorRef])
], LayoutDefaultHeaderComponent);
export { LayoutDefaultHeaderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS9sYXlvdXQtZGVmYXVsdC9sYXlvdXQtaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFpQix1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQWUsTUFBTSxlQUFlLENBQUM7QUFDbEgsT0FBTyxFQUFPLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNwRCxPQUFPLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0lBbUQvQyw0QkFBNEIsU0FBNUIsNEJBQTRCO0lBeUJ2QyxZQUFvQixRQUF5QixFQUFVLE1BQThCLEVBQVUsR0FBc0I7UUFBakcsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUF3QjtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBeEJySCxTQUFJLEdBQThCLEVBQUUsQ0FBQztRQUNyQyxXQUFNLEdBQThCLEVBQUUsQ0FBQztRQUN2QyxVQUFLLEdBQThCLEVBQUUsQ0FBQztJQXNCa0YsQ0FBQztJQXBCekgsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUM3QixDQUFDO0lBRUQsSUFBSSxHQUFHO1FBQ0wsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQztJQUMzQixDQUFDO0lBRUQsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDeEMsQ0FBQztJQUVELElBQUksYUFBYTtRQUNmLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQzlDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FBUyxLQUFLLEtBQUssRUFBRTtZQUM1QyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7U0FDM0M7UUFDRCxPQUFPLFFBQVEsSUFBSSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUlPLE9BQU87UUFDYixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM5QyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxLQUFLLE1BQU0sQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLEtBQUssUUFBUSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsS0FBSyxPQUFPLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDM0YsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDeEUsQ0FBQztDQUNGLENBQUE7O1lBcEZBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWlDVDtnQkFDRCxJQUFJLEVBQUU7b0JBQ0osK0JBQStCLEVBQUUsTUFBTTtpQkFDeEM7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUFwRGEsZUFBZTtZQUVwQixzQkFBc0I7WUFIa0IsaUJBQWlCOztBQXNEckQsNEJBQTRCO0lBMUN4QyxZQUFZLEVBQUU7cUNBbUVpQixlQUFlLEVBQWtCLHNCQUFzQixFQUFlLGlCQUFpQjtHQXpCMUcsNEJBQTRCLENBMkN4QztTQTNDWSw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFwcCwgU2V0dGluZ3NTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IFVudGlsRGVzdHJveSwgdW50aWxEZXN0cm95ZWQgfSBmcm9tICdAbmduZWF0L3VudGlsLWRlc3Ryb3knO1xuaW1wb3J0IHsgTGF5b3V0RGVmYXVsdENvbXBvbmVudCB9IGZyb20gJy4vbGF5b3V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYXlvdXREZWZhdWx0SGVhZGVySXRlbURpcmVjdGlvbiwgTGF5b3V0RGVmYXVsdEhlYWRlckl0ZW1IaWRkZW4sIExheW91dERlZmF1bHRPcHRpb25zIH0gZnJvbSAnLi90eXBlcyc7XG5cbmludGVyZmFjZSBMYXlvdXREZWZhdWx0SGVhZGVySXRlbSB7XG4gIGhvc3Q6IFRlbXBsYXRlUmVmPGFueT47XG4gIGhpZGRlbj86IExheW91dERlZmF1bHRIZWFkZXJJdGVtSGlkZGVuO1xuICBkaXJlY3Rpb24/OiBMYXlvdXREZWZhdWx0SGVhZGVySXRlbURpcmVjdGlvbjtcbn1cblxuQFVudGlsRGVzdHJveSgpXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsYXlvdXQtZGVmYXVsdC1oZWFkZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy10ZW1wbGF0ZSAjcmVuZGVyIGxldC1scz5cbiAgICAgIDxsaSAqbmdGb3I9XCJsZXQgaSBvZiBsc1wiIFtjbGFzcy5oaWRkZW4tbW9iaWxlXT1cImkuaGlkZGVuID09PSAnbW9iaWxlJ1wiIFtjbGFzcy5oaWRkZW4tcGNdPVwiaS5oaWRkZW4gPT09ICdwYydcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImkuaG9zdFwiPjwvbmctY29udGFpbmVyPlxuICAgICAgPC9saT5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJhbGFpbi1kZWZhdWx0X19oZWFkZXItbG9nb1wiPlxuICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWycvJ11cIiBjbGFzcz1cImFsYWluLWRlZmF1bHRfX2hlYWRlci1sb2dvLWxpbmtcIj5cbiAgICAgICAgPGltZyBjbGFzcz1cImFsYWluLWRlZmF1bHRfX2hlYWRlci1sb2dvLWV4cGFuZGVkXCIgW2F0dHIuc3JjXT1cIm9wdGlvbnMubG9nb0V4cGFuZGVkXCIgW2F0dHIuYWx0XT1cImFwcC5uYW1lXCIgc3R5bGU9XCJtYXgtaGVpZ2h0OiA0MHB4XCIgLz5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIGNsYXNzPVwiYWxhaW4tZGVmYXVsdF9faGVhZGVyLWxvZ28tY29sbGFwc2VkXCJcbiAgICAgICAgICBbYXR0ci5zcmNdPVwib3B0aW9ucy5sb2dvQ29sbGFwc2VkXCJcbiAgICAgICAgICBbYXR0ci5hbHRdPVwiYXBwLm5hbWVcIlxuICAgICAgICAgIHN0eWxlPVwibWF4LWhlaWdodDogMzBweFwiXG4gICAgICAgIC8+XG4gICAgICA8L2E+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImFsYWluLWRlZmF1bHRfX25hdi13cmFwXCI+XG4gICAgICA8dWwgY2xhc3M9XCJhbGFpbi1kZWZhdWx0X19uYXZcIj5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbGFpbi1kZWZhdWx0X19uYXYtaXRlbVwiIChjbGljayk9XCJ0b2dnbGVDb2xsYXBzZWQoKVwiPlxuICAgICAgICAgICAgPGkgbnotaWNvbiBbbnpUeXBlXT1cImNvbGxhcHNlZEljb25cIj48L2k+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJyZW5kZXJcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IGxlZnQgfVwiPjwvbmctdGVtcGxhdGU+XG4gICAgICA8L3VsPlxuICAgICAgPGRpdiAqbmdJZj1cIm1pZGRsZS5sZW5ndGggPiAwXCIgY2xhc3M9XCJhbGFpbi1kZWZhdWx0X19uYXYgYWxhaW4tZGVmYXVsdF9fbmF2LW1pZGRsZVwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwibWlkZGxlWzBdLmhvc3RcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHVsIGNsYXNzPVwiYWxhaW4tZGVmYXVsdF9fbmF2XCI+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJyZW5kZXJcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IHJpZ2h0IH1cIj48L25nLXRlbXBsYXRlPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYWxhaW4tZGVmYXVsdF9faGVhZGVyXSc6IGB0cnVlYCxcbiAgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIExheW91dERlZmF1bHRIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgbGVmdDogTGF5b3V0RGVmYXVsdEhlYWRlckl0ZW1bXSA9IFtdO1xuICBtaWRkbGU6IExheW91dERlZmF1bHRIZWFkZXJJdGVtW10gPSBbXTtcbiAgcmlnaHQ6IExheW91dERlZmF1bHRIZWFkZXJJdGVtW10gPSBbXTtcblxuICBnZXQgb3B0aW9ucygpOiBMYXlvdXREZWZhdWx0T3B0aW9ucyB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50Lm9wdGlvbnM7XG4gIH1cblxuICBnZXQgYXBwKCk6IEFwcCB7XG4gICAgcmV0dXJuIHRoaXMuc2V0dGluZ3MuYXBwO1xuICB9XG5cbiAgZ2V0IGNvbGxhcHNlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy5sYXlvdXQuY29sbGFwc2VkO1xuICB9XG5cbiAgZ2V0IGNvbGxhcHNlZEljb24oKTogc3RyaW5nIHtcbiAgICBsZXQgdHlwZSA9IHRoaXMuY29sbGFwc2VkID8gJ3VuZm9sZCcgOiAnZm9sZCc7XG4gICAgaWYgKHRoaXMuc2V0dGluZ3MubGF5b3V0LmRpcmVjdGlvbiA9PT0gJ3J0bCcpIHtcbiAgICAgIHR5cGUgPSB0aGlzLmNvbGxhcHNlZCA/ICdmb2xkJyA6ICd1bmZvbGQnO1xuICAgIH1cbiAgICByZXR1cm4gYG1lbnUtJHt0eXBlfWA7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNldHRpbmdzOiBTZXR0aW5nc1NlcnZpY2UsIHByaXZhdGUgcGFyZW50OiBMYXlvdXREZWZhdWx0Q29tcG9uZW50LCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgcHJpdmF0ZSByZWZyZXNoKCk6IHZvaWQge1xuICAgIGNvbnN0IGFyciA9IHRoaXMucGFyZW50LmhlYWRlckl0ZW1zLnRvQXJyYXkoKTtcbiAgICB0aGlzLmxlZnQgPSBhcnIuZmlsdGVyKGkgPT4gaS5kaXJlY3Rpb24gPT09ICdsZWZ0Jyk7XG4gICAgdGhpcy5taWRkbGUgPSBhcnIuZmlsdGVyKGkgPT4gaS5kaXJlY3Rpb24gPT09ICdtaWRkbGUnKTtcbiAgICB0aGlzLnJpZ2h0ID0gYXJyLmZpbHRlcihpID0+IGkuZGlyZWN0aW9uID09PSAncmlnaHQnKTtcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5wYXJlbnQuaGVhZGVySXRlbXMuY2hhbmdlcy5waXBlKHVudGlsRGVzdHJveWVkKHRoaXMpKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5yZWZyZXNoKCkpO1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgdG9nZ2xlQ29sbGFwc2VkKCk6IHZvaWQge1xuICAgIHRoaXMuc2V0dGluZ3Muc2V0TGF5b3V0KCdjb2xsYXBzZWQnLCAhdGhpcy5zZXR0aW5ncy5sYXlvdXQuY29sbGFwc2VkKTtcbiAgfVxufVxuIl19