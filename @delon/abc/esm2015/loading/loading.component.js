import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
export class LoadingDefaultComponent {
    constructor() {
        this.dir = 'ltr';
    }
    get icon() {
        return this.options.icon;
    }
    get custom() {
        return this.options.custom;
    }
}
LoadingDefaultComponent.decorators = [
    { type: Component, args: [{
                selector: 'loading-default',
                template: "<div class=\"loading-default__icon\" *ngIf=\"options.type !== 'text'\">\n  <ng-container [ngSwitch]=\"options.type\">\n    <nz-spin *ngSwitchCase=\"'spin'\" nzSimple></nz-spin>\n    <i *ngSwitchCase=\"'icon'\" nz-icon [nzType]=\"icon.type\" [nzTheme]=\"icon.theme\" [nzSpin]=\"icon.spin\"></i>\n    <div *ngSwitchDefault class=\"loading-default__custom\" [ngStyle]=\"custom.style\" [innerHTML]=\"custom.html\"></div>\n  </ng-container>\n</div>\n<div *ngIf=\"options.text\" class=\"loading-default__text\">{{ options.text }}</div>\n",
                host: {
                    '[class.loading-default]': 'true',
                    '[class.loading-default-rtl]': `dir === 'rtl'`,
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9hYmMvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBY3RGLE1BQU0sT0FBTyx1QkFBdUI7SUFYcEM7UUFhRSxRQUFHLEdBQWMsS0FBSyxDQUFDO0lBU3pCLENBQUM7SUFQQyxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSyxDQUFDO0lBQzVCLENBQUM7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTyxDQUFDO0lBQzlCLENBQUM7OztZQXJCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsK2hCQUF1QztnQkFDdkMsSUFBSSxFQUFFO29CQUNKLHlCQUF5QixFQUFFLE1BQU07b0JBQ2pDLDZCQUE2QixFQUFFLGVBQWU7aUJBQy9DO2dCQUNELG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2FkaW5nQ3VzdG9tLCBMb2FkaW5nSWNvbiwgTG9hZGluZ1Nob3dPcHRpb25zIH0gZnJvbSAnLi9sb2FkaW5nLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbG9hZGluZy1kZWZhdWx0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvYWRpbmcuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5sb2FkaW5nLWRlZmF1bHRdJzogJ3RydWUnLFxuICAgICdbY2xhc3MubG9hZGluZy1kZWZhdWx0LXJ0bF0nOiBgZGlyID09PSAncnRsJ2AsXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgTG9hZGluZ0RlZmF1bHRDb21wb25lbnQge1xuICBvcHRpb25zOiBMb2FkaW5nU2hvd09wdGlvbnM7XG4gIGRpcjogRGlyZWN0aW9uID0gJ2x0cic7XG5cbiAgZ2V0IGljb24oKTogTG9hZGluZ0ljb24ge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuaWNvbiE7XG4gIH1cblxuICBnZXQgY3VzdG9tKCk6IExvYWRpbmdDdXN0b20ge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY3VzdG9tITtcbiAgfVxufVxuIl19