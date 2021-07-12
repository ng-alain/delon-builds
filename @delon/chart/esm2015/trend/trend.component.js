import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from '@delon/util/decorator';
export class TrendComponent {
    constructor() {
        /** 是否彩色标记 */
        this.colorful = true;
        /** 颜色反转 */
        this.reverseColor = false;
    }
}
TrendComponent.decorators = [
    { type: Component, args: [{
                selector: 'trend',
                exportAs: 'trend',
                template: `
    <ng-content></ng-content>
    <span *ngIf="flag" class="trend__{{ flag }}"><i nz-icon nzType="caret-{{ flag }}"></i></span>
  `,
                host: {
                    '[class.trend]': 'true',
                    '[class.trend__grey]': '!colorful',
                    '[class.trend__reverse]': 'colorful && reverseColor',
                    '[attr.data-flag]': `flag`
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            },] }
];
TrendComponent.propDecorators = {
    flag: [{ type: Input }],
    colorful: [{ type: Input }],
    reverseColor: [{ type: Input }]
};
__decorate([
    InputBoolean()
], TrendComponent.prototype, "colorful", void 0);
__decorate([
    InputBoolean()
], TrendComponent.prototype, "reverseColor", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlbmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY2hhcnQvdHJlbmQvdHJlbmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3RixPQUFPLEVBQWdCLFlBQVksRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBbUJuRSxNQUFNLE9BQU8sY0FBYztJQWpCM0I7UUF1QkUsYUFBYTtRQUNZLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFDekMsV0FBVztRQUNjLGlCQUFZLEdBQUcsS0FBSyxDQUFDO0lBQ2hELENBQUM7OztZQTNCQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLFFBQVEsRUFBRSxPQUFPO2dCQUNqQixRQUFRLEVBQUU7OztHQUdUO2dCQUNELElBQUksRUFBRTtvQkFDSixlQUFlLEVBQUUsTUFBTTtvQkFDdkIscUJBQXFCLEVBQUUsV0FBVztvQkFDbEMsd0JBQXdCLEVBQUUsMEJBQTBCO29CQUNwRCxrQkFBa0IsRUFBRSxNQUFNO2lCQUMzQjtnQkFDRCxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7OzttQkFNRSxLQUFLO3VCQUVMLEtBQUs7MkJBRUwsS0FBSzs7QUFGbUI7SUFBZixZQUFZLEVBQUU7Z0RBQWlCO0FBRWhCO0lBQWYsWUFBWSxFQUFFO29EQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIElucHV0Qm9vbGVhbiB9IGZyb20gJ0BkZWxvbi91dGlsL2RlY29yYXRvcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RyZW5kJyxcbiAgZXhwb3J0QXM6ICd0cmVuZCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDxzcGFuICpuZ0lmPVwiZmxhZ1wiIGNsYXNzPVwidHJlbmRfX3t7IGZsYWcgfX1cIj48aSBuei1pY29uIG56VHlwZT1cImNhcmV0LXt7IGZsYWcgfX1cIj48L2k+PC9zcGFuPlxuICBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy50cmVuZF0nOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy50cmVuZF9fZ3JleV0nOiAnIWNvbG9yZnVsJyxcbiAgICAnW2NsYXNzLnRyZW5kX19yZXZlcnNlXSc6ICdjb2xvcmZ1bCAmJiByZXZlcnNlQ29sb3InLFxuICAgICdbYXR0ci5kYXRhLWZsYWddJzogYGZsYWdgXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBUcmVuZENvbXBvbmVudCB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9jb2xvcmZ1bDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfcmV2ZXJzZUNvbG9yOiBCb29sZWFuSW5wdXQ7XG5cbiAgLyoqIOS4iuWNh+S4i+mZjeagh+ivhiAqL1xuICBASW5wdXQoKSBmbGFnOiAndXAnIHwgJ2Rvd24nO1xuICAvKiog5piv5ZCm5b2p6Imy5qCH6K6wICovXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBjb2xvcmZ1bCA9IHRydWU7XG4gIC8qKiDpopzoibLlj43ovawgKi9cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHJldmVyc2VDb2xvciA9IGZhbHNlO1xufVxuIl19