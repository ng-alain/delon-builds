/**
 * @fileoverview added by tsickle
 * Generated from: layout-header.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { SettingsService } from '@delon/theme';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LayoutDefaultComponent } from './layout.component';
/**
 * @record
 */
function LayoutDefaultHeaderItem() { }
if (false) {
    /** @type {?} */
    LayoutDefaultHeaderItem.prototype.host;
    /** @type {?|undefined} */
    LayoutDefaultHeaderItem.prototype.hidden;
    /** @type {?|undefined} */
    LayoutDefaultHeaderItem.prototype.direction;
}
export class LayoutDefaultHeaderComponent {
    /**
     * @param {?} settings
     * @param {?} parent
     * @param {?} cdr
     */
    constructor(settings, parent, cdr) {
        this.settings = settings;
        this.parent = parent;
        this.cdr = cdr;
        this.unsubscribe$ = new Subject();
        this.left = [];
        this.middle = [];
        this.right = [];
    }
    /**
     * @return {?}
     */
    get options() {
        return this.parent.options;
    }
    /**
     * @return {?}
     */
    get app() {
        return this.settings.app;
    }
    /**
     * @return {?}
     */
    get collapsed() {
        return this.settings.layout.collapsed;
    }
    /**
     * @private
     * @return {?}
     */
    refresh() {
        /** @type {?} */
        const arr = this.parent.headerItems.toArray();
        this.left = arr.filter((/**
         * @param {?} i
         * @return {?}
         */
        i => i.direction === 'left'));
        this.middle = arr.filter((/**
         * @param {?} i
         * @return {?}
         */
        i => i.direction === 'middle'));
        this.right = arr.filter((/**
         * @param {?} i
         * @return {?}
         */
        i => i.direction === 'right'));
        this.cdr.detectChanges();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.parent.headerItems.changes.pipe(takeUntil(this.unsubscribe$)).subscribe((/**
         * @return {?}
         */
        () => this.refresh()));
        this.refresh();
    }
    /**
     * @return {?}
     */
    toggleCollapsed() {
        this.settings.setLayout('collapsed', !this.settings.layout.collapsed);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        const { unsubscribe$ } = this;
        unsubscribe$.next();
        unsubscribe$.complete();
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
            <i nz-icon nzType="menu-{{ collapsed ? 'unfold' : 'fold' }}"></i>
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
            }] }
];
/** @nocollapse */
LayoutDefaultHeaderComponent.ctorParameters = () => [
    { type: SettingsService },
    { type: LayoutDefaultComponent },
    { type: ChangeDetectorRef }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    LayoutDefaultHeaderComponent.prototype.unsubscribe$;
    /** @type {?} */
    LayoutDefaultHeaderComponent.prototype.left;
    /** @type {?} */
    LayoutDefaultHeaderComponent.prototype.middle;
    /** @type {?} */
    LayoutDefaultHeaderComponent.prototype.right;
    /**
     * @type {?}
     * @private
     */
    LayoutDefaultHeaderComponent.prototype.settings;
    /**
     * @type {?}
     * @private
     */
    LayoutDefaultHeaderComponent.prototype.parent;
    /**
     * @type {?}
     * @private
     */
    LayoutDefaultHeaderComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdGhlbWUvbGF5b3V0LWRlZmF1bHQvIiwic291cmNlcyI6WyJsYXlvdXQtaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBaUIsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUF5QixNQUFNLGVBQWUsQ0FBQztBQUM1SCxPQUFPLEVBQU8sZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3BELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7O0FBRzVELHNDQUlDOzs7SUFIQyx1Q0FBaUI7O0lBQ2pCLHlDQUF1Qzs7SUFDdkMsNENBQTZDOztBQTRDL0MsTUFBTSxPQUFPLDRCQUE0Qjs7Ozs7O0lBbUJ2QyxZQUFvQixRQUF5QixFQUFVLE1BQThCLEVBQVUsR0FBc0I7UUFBakcsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUF3QjtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBbEI3RyxpQkFBWSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFFM0MsU0FBSSxHQUE4QixFQUFFLENBQUM7UUFDckMsV0FBTSxHQUE4QixFQUFFLENBQUM7UUFDdkMsVUFBSyxHQUE4QixFQUFFLENBQUM7SUFja0YsQ0FBQzs7OztJQVp6SCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFRCxJQUFJLEdBQUc7UUFDTCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztJQUN4QyxDQUFDOzs7OztJQUlPLE9BQU87O2NBQ1AsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRTtRQUM3QyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxNQUFNOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxLQUFLLE1BQU0sRUFBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU07Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLEtBQUssUUFBUSxFQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsTUFBTTs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsS0FBSyxPQUFPLEVBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsU0FBUzs7O1FBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFDLENBQUM7UUFDbkcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDeEUsQ0FBQzs7OztJQUVELFdBQVc7Y0FDSCxFQUFFLFlBQVksRUFBRSxHQUFHLElBQUk7UUFDN0IsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3BCLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7WUFuRkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBaUNUO2dCQUNELElBQUksRUFBRTtvQkFDSiwrQkFBK0IsRUFBRSxNQUFNO2lCQUN4QztnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OztZQXBEYSxlQUFlO1lBR3BCLHNCQUFzQjtZQUprQixpQkFBaUI7Ozs7Ozs7SUF1RGhFLG9EQUEyQzs7SUFFM0MsNENBQXFDOztJQUNyQyw4Q0FBdUM7O0lBQ3ZDLDZDQUFzQzs7Ozs7SUFjMUIsZ0RBQWlDOzs7OztJQUFFLDhDQUFzQzs7Ozs7SUFBRSwyQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBcHAsIFNldHRpbmdzU2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBMYXlvdXREZWZhdWx0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQuY29tcG9uZW50JztcbmltcG9ydCB7IExheW91dERlZmF1bHRIZWFkZXJJdGVtRGlyZWN0aW9uLCBMYXlvdXREZWZhdWx0SGVhZGVySXRlbUhpZGRlbiwgTGF5b3V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tICcuL3R5cGVzJztcblxuaW50ZXJmYWNlIExheW91dERlZmF1bHRIZWFkZXJJdGVtIHtcbiAgaG9zdDogRWxlbWVudFJlZjtcbiAgaGlkZGVuPzogTGF5b3V0RGVmYXVsdEhlYWRlckl0ZW1IaWRkZW47XG4gIGRpcmVjdGlvbj86IExheW91dERlZmF1bHRIZWFkZXJJdGVtRGlyZWN0aW9uO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsYXlvdXQtZGVmYXVsdC1oZWFkZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy10ZW1wbGF0ZSAjcmVuZGVyIGxldC1scz5cbiAgICAgIDxsaSAqbmdGb3I9XCJsZXQgaSBvZiBsc1wiIFtjbGFzcy5oaWRkZW4tbW9iaWxlXT1cImkuaGlkZGVuID09PSAnbW9iaWxlJ1wiIFtjbGFzcy5oaWRkZW4tcGNdPVwiaS5oaWRkZW4gPT09ICdwYydcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImkuaG9zdFwiPjwvbmctY29udGFpbmVyPlxuICAgICAgPC9saT5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJhbGFpbi1kZWZhdWx0X19oZWFkZXItbG9nb1wiPlxuICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWycvJ11cIiBjbGFzcz1cImFsYWluLWRlZmF1bHRfX2hlYWRlci1sb2dvLWxpbmtcIj5cbiAgICAgICAgPGltZyBjbGFzcz1cImFsYWluLWRlZmF1bHRfX2hlYWRlci1sb2dvLWV4cGFuZGVkXCIgW2F0dHIuc3JjXT1cIm9wdGlvbnMubG9nb0V4cGFuZGVkXCIgW2F0dHIuYWx0XT1cImFwcC5uYW1lXCIgc3R5bGU9XCJtYXgtaGVpZ2h0OiA0MHB4XCIgLz5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIGNsYXNzPVwiYWxhaW4tZGVmYXVsdF9faGVhZGVyLWxvZ28tY29sbGFwc2VkXCJcbiAgICAgICAgICBbYXR0ci5zcmNdPVwib3B0aW9ucy5sb2dvQ29sbGFwc2VkXCJcbiAgICAgICAgICBbYXR0ci5hbHRdPVwiYXBwLm5hbWVcIlxuICAgICAgICAgIHN0eWxlPVwibWF4LWhlaWdodDogMzBweFwiXG4gICAgICAgIC8+XG4gICAgICA8L2E+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImFsYWluLWRlZmF1bHRfX25hdi13cmFwXCI+XG4gICAgICA8dWwgY2xhc3M9XCJhbGFpbi1kZWZhdWx0X19uYXZcIj5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbGFpbi1kZWZhdWx0X19uYXYtaXRlbVwiIChjbGljayk9XCJ0b2dnbGVDb2xsYXBzZWQoKVwiPlxuICAgICAgICAgICAgPGkgbnotaWNvbiBuelR5cGU9XCJtZW51LXt7IGNvbGxhcHNlZCA/ICd1bmZvbGQnIDogJ2ZvbGQnIH19XCI+PC9pPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwicmVuZGVyXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBsZWZ0IH1cIj48L25nLXRlbXBsYXRlPlxuICAgICAgPC91bD5cbiAgICAgIDxkaXYgKm5nSWY9XCJtaWRkbGUubGVuZ3RoID4gMFwiIGNsYXNzPVwiYWxhaW4tZGVmYXVsdF9fbmF2IGFsYWluLWRlZmF1bHRfX25hdi1taWRkbGVcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cIm1pZGRsZVswXS5ob3N0XCI+PC9uZy1jb250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDx1bCBjbGFzcz1cImFsYWluLWRlZmF1bHRfX25hdlwiPlxuICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwicmVuZGVyXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiByaWdodCB9XCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFsYWluLWRlZmF1bHRfX2hlYWRlcl0nOiBgdHJ1ZWAsXG4gIH0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBMYXlvdXREZWZhdWx0SGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIGxlZnQ6IExheW91dERlZmF1bHRIZWFkZXJJdGVtW10gPSBbXTtcbiAgbWlkZGxlOiBMYXlvdXREZWZhdWx0SGVhZGVySXRlbVtdID0gW107XG4gIHJpZ2h0OiBMYXlvdXREZWZhdWx0SGVhZGVySXRlbVtdID0gW107XG5cbiAgZ2V0IG9wdGlvbnMoKTogTGF5b3V0RGVmYXVsdE9wdGlvbnMge1xuICAgIHJldHVybiB0aGlzLnBhcmVudC5vcHRpb25zO1xuICB9XG5cbiAgZ2V0IGFwcCgpOiBBcHAge1xuICAgIHJldHVybiB0aGlzLnNldHRpbmdzLmFwcDtcbiAgfVxuXG4gIGdldCBjb2xsYXBzZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2V0dGluZ3MubGF5b3V0LmNvbGxhcHNlZDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2V0dGluZ3M6IFNldHRpbmdzU2VydmljZSwgcHJpdmF0ZSBwYXJlbnQ6IExheW91dERlZmF1bHRDb21wb25lbnQsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBwcml2YXRlIHJlZnJlc2goKTogdm9pZCB7XG4gICAgY29uc3QgYXJyID0gdGhpcy5wYXJlbnQuaGVhZGVySXRlbXMudG9BcnJheSgpO1xuICAgIHRoaXMubGVmdCA9IGFyci5maWx0ZXIoaSA9PiBpLmRpcmVjdGlvbiA9PT0gJ2xlZnQnKTtcbiAgICB0aGlzLm1pZGRsZSA9IGFyci5maWx0ZXIoaSA9PiBpLmRpcmVjdGlvbiA9PT0gJ21pZGRsZScpO1xuICAgIHRoaXMucmlnaHQgPSBhcnIuZmlsdGVyKGkgPT4gaS5kaXJlY3Rpb24gPT09ICdyaWdodCcpO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnBhcmVudC5oZWFkZXJJdGVtcy5jaGFuZ2VzLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMucmVmcmVzaCgpKTtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIHRvZ2dsZUNvbGxhcHNlZCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldHRpbmdzLnNldExheW91dCgnY29sbGFwc2VkJywgIXRoaXMuc2V0dGluZ3MubGF5b3V0LmNvbGxhcHNlZCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBjb25zdCB7IHVuc3Vic2NyaWJlJCB9ID0gdGhpcztcbiAgICB1bnN1YnNjcmliZSQubmV4dCgpO1xuICAgIHVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=