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
        this.destroy$ = new Subject();
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
     * @return {?}
     */
    get collapsedIcon() {
        /** @type {?} */
        let type = this.collapsed ? 'unfold' : 'fold';
        if (this.settings.layout.direction === 'rtl') {
            type = this.collapsed ? 'fold' : 'unfold';
        }
        return `menu-${type}`;
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
        this.parent.headerItems.changes.pipe(takeUntil(this.destroy$)).subscribe((/**
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
    LayoutDefaultHeaderComponent.prototype.destroy$;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy90aGVtZS9sYXlvdXQtZGVmYXVsdC9sYXlvdXQtaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBaUIsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUF5QixNQUFNLGVBQWUsQ0FBQztBQUM1SCxPQUFPLEVBQU8sZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3BELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7O0FBRzVELHNDQUlDOzs7SUFIQyx1Q0FBaUI7O0lBQ2pCLHlDQUF1Qzs7SUFDdkMsNENBQTZDOztBQTRDL0MsTUFBTSxPQUFPLDRCQUE0Qjs7Ozs7O0lBMkJ2QyxZQUFvQixRQUF5QixFQUFVLE1BQThCLEVBQVUsR0FBc0I7UUFBakcsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUF3QjtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBMUI3RyxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUV2QyxTQUFJLEdBQThCLEVBQUUsQ0FBQztRQUNyQyxXQUFNLEdBQThCLEVBQUUsQ0FBQztRQUN2QyxVQUFLLEdBQThCLEVBQUUsQ0FBQztJQXNCa0YsQ0FBQzs7OztJQXBCekgsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQsSUFBSSxHQUFHO1FBQ0wsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDeEMsQ0FBQzs7OztJQUVELElBQUksYUFBYTs7WUFDWCxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNO1FBQzdDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FBUyxLQUFLLEtBQUssRUFBRTtZQUM1QyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7U0FDM0M7UUFDRCxPQUFPLFFBQVEsSUFBSSxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFJTyxPQUFPOztjQUNQLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUU7UUFDN0MsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsTUFBTTs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsS0FBSyxNQUFNLEVBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxLQUFLLFFBQVEsRUFBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLE1BQU07Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLEtBQUssT0FBTyxFQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVM7OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBQyxDQUFDO1FBQy9GLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDOzs7O0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7OztZQTFGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQ1Q7Z0JBQ0QsSUFBSSxFQUFFO29CQUNKLCtCQUErQixFQUFFLE1BQU07aUJBQ3hDO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O1lBcERhLGVBQWU7WUFHcEIsc0JBQXNCO1lBSmtCLGlCQUFpQjs7Ozs7OztJQXVEaEUsZ0RBQXVDOztJQUV2Qyw0Q0FBcUM7O0lBQ3JDLDhDQUF1Qzs7SUFDdkMsNkNBQXNDOzs7OztJQXNCMUIsZ0RBQWlDOzs7OztJQUFFLDhDQUFzQzs7Ozs7SUFBRSwyQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBcHAsIFNldHRpbmdzU2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBMYXlvdXREZWZhdWx0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXQuY29tcG9uZW50JztcbmltcG9ydCB7IExheW91dERlZmF1bHRIZWFkZXJJdGVtRGlyZWN0aW9uLCBMYXlvdXREZWZhdWx0SGVhZGVySXRlbUhpZGRlbiwgTGF5b3V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tICcuL3R5cGVzJztcblxuaW50ZXJmYWNlIExheW91dERlZmF1bHRIZWFkZXJJdGVtIHtcbiAgaG9zdDogRWxlbWVudFJlZjtcbiAgaGlkZGVuPzogTGF5b3V0RGVmYXVsdEhlYWRlckl0ZW1IaWRkZW47XG4gIGRpcmVjdGlvbj86IExheW91dERlZmF1bHRIZWFkZXJJdGVtRGlyZWN0aW9uO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsYXlvdXQtZGVmYXVsdC1oZWFkZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy10ZW1wbGF0ZSAjcmVuZGVyIGxldC1scz5cbiAgICAgIDxsaSAqbmdGb3I9XCJsZXQgaSBvZiBsc1wiIFtjbGFzcy5oaWRkZW4tbW9iaWxlXT1cImkuaGlkZGVuID09PSAnbW9iaWxlJ1wiIFtjbGFzcy5oaWRkZW4tcGNdPVwiaS5oaWRkZW4gPT09ICdwYydcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImkuaG9zdFwiPjwvbmctY29udGFpbmVyPlxuICAgICAgPC9saT5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJhbGFpbi1kZWZhdWx0X19oZWFkZXItbG9nb1wiPlxuICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWycvJ11cIiBjbGFzcz1cImFsYWluLWRlZmF1bHRfX2hlYWRlci1sb2dvLWxpbmtcIj5cbiAgICAgICAgPGltZyBjbGFzcz1cImFsYWluLWRlZmF1bHRfX2hlYWRlci1sb2dvLWV4cGFuZGVkXCIgW2F0dHIuc3JjXT1cIm9wdGlvbnMubG9nb0V4cGFuZGVkXCIgW2F0dHIuYWx0XT1cImFwcC5uYW1lXCIgc3R5bGU9XCJtYXgtaGVpZ2h0OiA0MHB4XCIgLz5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIGNsYXNzPVwiYWxhaW4tZGVmYXVsdF9faGVhZGVyLWxvZ28tY29sbGFwc2VkXCJcbiAgICAgICAgICBbYXR0ci5zcmNdPVwib3B0aW9ucy5sb2dvQ29sbGFwc2VkXCJcbiAgICAgICAgICBbYXR0ci5hbHRdPVwiYXBwLm5hbWVcIlxuICAgICAgICAgIHN0eWxlPVwibWF4LWhlaWdodDogMzBweFwiXG4gICAgICAgIC8+XG4gICAgICA8L2E+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImFsYWluLWRlZmF1bHRfX25hdi13cmFwXCI+XG4gICAgICA8dWwgY2xhc3M9XCJhbGFpbi1kZWZhdWx0X19uYXZcIj5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbGFpbi1kZWZhdWx0X19uYXYtaXRlbVwiIChjbGljayk9XCJ0b2dnbGVDb2xsYXBzZWQoKVwiPlxuICAgICAgICAgICAgPGkgbnotaWNvbiBbbnpUeXBlXT1cImNvbGxhcHNlZEljb25cIj48L2k+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJyZW5kZXJcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IGxlZnQgfVwiPjwvbmctdGVtcGxhdGU+XG4gICAgICA8L3VsPlxuICAgICAgPGRpdiAqbmdJZj1cIm1pZGRsZS5sZW5ndGggPiAwXCIgY2xhc3M9XCJhbGFpbi1kZWZhdWx0X19uYXYgYWxhaW4tZGVmYXVsdF9fbmF2LW1pZGRsZVwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwibWlkZGxlWzBdLmhvc3RcIj48L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHVsIGNsYXNzPVwiYWxhaW4tZGVmYXVsdF9fbmF2XCI+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJyZW5kZXJcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IHJpZ2h0IH1cIj48L25nLXRlbXBsYXRlPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYWxhaW4tZGVmYXVsdF9faGVhZGVyXSc6IGB0cnVlYCxcbiAgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIExheW91dERlZmF1bHRIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBsZWZ0OiBMYXlvdXREZWZhdWx0SGVhZGVySXRlbVtdID0gW107XG4gIG1pZGRsZTogTGF5b3V0RGVmYXVsdEhlYWRlckl0ZW1bXSA9IFtdO1xuICByaWdodDogTGF5b3V0RGVmYXVsdEhlYWRlckl0ZW1bXSA9IFtdO1xuXG4gIGdldCBvcHRpb25zKCk6IExheW91dERlZmF1bHRPcHRpb25zIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQub3B0aW9ucztcbiAgfVxuXG4gIGdldCBhcHAoKTogQXBwIHtcbiAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy5hcHA7XG4gIH1cblxuICBnZXQgY29sbGFwc2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNldHRpbmdzLmxheW91dC5jb2xsYXBzZWQ7XG4gIH1cblxuICBnZXQgY29sbGFwc2VkSWNvbigpOiBzdHJpbmcge1xuICAgIGxldCB0eXBlID0gdGhpcy5jb2xsYXBzZWQgPyAndW5mb2xkJyA6ICdmb2xkJztcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5sYXlvdXQuZGlyZWN0aW9uID09PSAncnRsJykge1xuICAgICAgdHlwZSA9IHRoaXMuY29sbGFwc2VkID8gJ2ZvbGQnIDogJ3VuZm9sZCc7XG4gICAgfVxuICAgIHJldHVybiBgbWVudS0ke3R5cGV9YDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2V0dGluZ3M6IFNldHRpbmdzU2VydmljZSwgcHJpdmF0ZSBwYXJlbnQ6IExheW91dERlZmF1bHRDb21wb25lbnQsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBwcml2YXRlIHJlZnJlc2goKTogdm9pZCB7XG4gICAgY29uc3QgYXJyID0gdGhpcy5wYXJlbnQuaGVhZGVySXRlbXMudG9BcnJheSgpO1xuICAgIHRoaXMubGVmdCA9IGFyci5maWx0ZXIoaSA9PiBpLmRpcmVjdGlvbiA9PT0gJ2xlZnQnKTtcbiAgICB0aGlzLm1pZGRsZSA9IGFyci5maWx0ZXIoaSA9PiBpLmRpcmVjdGlvbiA9PT0gJ21pZGRsZScpO1xuICAgIHRoaXMucmlnaHQgPSBhcnIuZmlsdGVyKGkgPT4gaS5kaXJlY3Rpb24gPT09ICdyaWdodCcpO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnBhcmVudC5oZWFkZXJJdGVtcy5jaGFuZ2VzLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5yZWZyZXNoKCkpO1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgdG9nZ2xlQ29sbGFwc2VkKCk6IHZvaWQge1xuICAgIHRoaXMuc2V0dGluZ3Muc2V0TGF5b3V0KCdjb2xsYXBzZWQnLCAhdGhpcy5zZXR0aW5ncy5sYXlvdXQuY29sbGFwc2VkKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19