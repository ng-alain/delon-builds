/**
 * @fileoverview added by tsickle
 * Generated from: layout-side.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SettingsService } from '@delon/theme';
export class LayoutDefaultSideComponent {
    /**
     * @param {?} settings
     */
    constructor(settings) {
        this.settings = settings;
    }
    /**
     * @return {?}
     */
    get user() {
        return this.settings.user;
    }
}
LayoutDefaultSideComponent.decorators = [
    { type: Component, args: [{
                selector: 'layout-default-side',
                // templateUrl: './sidebar.component.html',
                template: `
    <div class="alain-default__aside-inner">
      <div nz-dropdown nzTrigger="click" [nzDropdownMenu]="userMenu" class="alain-default__aside-user">
        <nz-avatar class="alain-default__aside-user-avatar" [nzSrc]="user.avatar"></nz-avatar>
        <div class="alain-default__aside-user-info">
          <strong>{{ user.name }}</strong>
          <p class="mb0">{{ user.email }}</p>
        </div>
      </div>
      <nz-dropdown-menu #userMenu="nzDropdownMenu">
        <ul nz-menu>
          <li nz-menu-item routerLink="/pro/account/center">{{ 'menu.account.center' }}</li>
          <li nz-menu-item routerLink="/pro/account/settings">{{ 'menu.account.settings' }}</li>
        </ul>
      </nz-dropdown-menu>
      <layout-default-nav class="d-block py-lg"></layout-default-nav>
    </div>
  `,
                host: {
                    '[class.alain-default__aside]': `true`,
                },
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
LayoutDefaultSideComponent.ctorParameters = () => [
    { type: SettingsService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    LayoutDefaultSideComponent.prototype.settings;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LXNpZGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3RoZW1lL2xheW91dC1kZWZhdWx0LyIsInNvdXJjZXMiOlsibGF5b3V0LXNpZGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRSxPQUFPLEVBQUUsZUFBZSxFQUFRLE1BQU0sY0FBYyxDQUFDO0FBNEJyRCxNQUFNLE9BQU8sMEJBQTBCOzs7O0lBS3JDLFlBQW9CLFFBQXlCO1FBQXpCLGFBQVEsR0FBUixRQUFRLENBQWlCO0lBQUcsQ0FBQzs7OztJQUpqRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO0lBQzVCLENBQUM7OztZQTdCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjs7Z0JBRS9CLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQlQ7Z0JBQ0QsSUFBSSxFQUFFO29CQUNKLDhCQUE4QixFQUFFLE1BQU07aUJBQ3ZDO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O1lBM0JRLGVBQWU7Ozs7Ozs7SUFpQ1YsOENBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2V0dGluZ3NTZXJ2aWNlLCBVc2VyIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGF5b3V0LWRlZmF1bHQtc2lkZScsXG4gIC8vIHRlbXBsYXRlVXJsOiAnLi9zaWRlYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiYWxhaW4tZGVmYXVsdF9fYXNpZGUtaW5uZXJcIj5cbiAgICAgIDxkaXYgbnotZHJvcGRvd24gbnpUcmlnZ2VyPVwiY2xpY2tcIiBbbnpEcm9wZG93bk1lbnVdPVwidXNlck1lbnVcIiBjbGFzcz1cImFsYWluLWRlZmF1bHRfX2FzaWRlLXVzZXJcIj5cbiAgICAgICAgPG56LWF2YXRhciBjbGFzcz1cImFsYWluLWRlZmF1bHRfX2FzaWRlLXVzZXItYXZhdGFyXCIgW256U3JjXT1cInVzZXIuYXZhdGFyXCI+PC9uei1hdmF0YXI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbGFpbi1kZWZhdWx0X19hc2lkZS11c2VyLWluZm9cIj5cbiAgICAgICAgICA8c3Ryb25nPnt7IHVzZXIubmFtZSB9fTwvc3Ryb25nPlxuICAgICAgICAgIDxwIGNsYXNzPVwibWIwXCI+e3sgdXNlci5lbWFpbCB9fTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxuei1kcm9wZG93bi1tZW51ICN1c2VyTWVudT1cIm56RHJvcGRvd25NZW51XCI+XG4gICAgICAgIDx1bCBuei1tZW51PlxuICAgICAgICAgIDxsaSBuei1tZW51LWl0ZW0gcm91dGVyTGluaz1cIi9wcm8vYWNjb3VudC9jZW50ZXJcIj57eyAnbWVudS5hY2NvdW50LmNlbnRlcicgfX08L2xpPlxuICAgICAgICAgIDxsaSBuei1tZW51LWl0ZW0gcm91dGVyTGluaz1cIi9wcm8vYWNjb3VudC9zZXR0aW5nc1wiPnt7ICdtZW51LmFjY291bnQuc2V0dGluZ3MnIH19PC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbnotZHJvcGRvd24tbWVudT5cbiAgICAgIDxsYXlvdXQtZGVmYXVsdC1uYXYgY2xhc3M9XCJkLWJsb2NrIHB5LWxnXCI+PC9sYXlvdXQtZGVmYXVsdC1uYXY+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFsYWluLWRlZmF1bHRfX2FzaWRlXSc6IGB0cnVlYCxcbiAgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIExheW91dERlZmF1bHRTaWRlQ29tcG9uZW50IHtcbiAgZ2V0IHVzZXIoKTogVXNlciB7XG4gICAgcmV0dXJuIHRoaXMuc2V0dGluZ3MudXNlcjtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2V0dGluZ3M6IFNldHRpbmdzU2VydmljZSkge31cbn1cbiJdfQ==