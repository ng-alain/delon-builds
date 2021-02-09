import { __decorate, __metadata } from "tslib";
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
                template: "<ng-content></ng-content>\n<span *ngIf=\"flag\" class=\"trend__{{ flag }}\"><i nz-icon nzType=\"caret-{{ flag }}\"></i></span>\n",
                host: {
                    '[class.trend]': 'true',
                    '[class.trend__grey]': '!colorful',
                    '[class.trend__reverse]': 'colorful && reverseColor',
                    '[attr.data-flag]': `flag`,
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
    InputBoolean(),
    __metadata("design:type", Object)
], TrendComponent.prototype, "colorful", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], TrendComponent.prototype, "reverseColor", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlbmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY2hhcnQvdHJlbmQvdHJlbmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RixPQUFPLEVBQWdCLFlBQVksRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBZ0JuRSxNQUFNLE9BQU8sY0FBYztJQWQzQjtRQW9CRSxhQUFhO1FBQ1ksYUFBUSxHQUFHLElBQUksQ0FBQztRQUN6QyxXQUFXO1FBQ2MsaUJBQVksR0FBRyxLQUFLLENBQUM7SUFDaEQsQ0FBQzs7O1lBeEJBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsT0FBTztnQkFDakIsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLDRJQUFxQztnQkFDckMsSUFBSSxFQUFFO29CQUNKLGVBQWUsRUFBRSxNQUFNO29CQUN2QixxQkFBcUIsRUFBRSxXQUFXO29CQUNsQyx3QkFBd0IsRUFBRSwwQkFBMEI7b0JBQ3BELGtCQUFrQixFQUFFLE1BQU07aUJBQzNCO2dCQUNELG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0Qzs7O21CQU1FLEtBQUs7dUJBRUwsS0FBSzsyQkFFTCxLQUFLOztBQUZtQjtJQUFmLFlBQVksRUFBRTs7Z0RBQWlCO0FBRWhCO0lBQWYsWUFBWSxFQUFFOztvREFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgSW5wdXRCb29sZWFuIH0gZnJvbSAnQGRlbG9uL3V0aWwvZGVjb3JhdG9yJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndHJlbmQnLFxuICBleHBvcnRBczogJ3RyZW5kJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RyZW5kLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MudHJlbmRdJzogJ3RydWUnLFxuICAgICdbY2xhc3MudHJlbmRfX2dyZXldJzogJyFjb2xvcmZ1bCcsXG4gICAgJ1tjbGFzcy50cmVuZF9fcmV2ZXJzZV0nOiAnY29sb3JmdWwgJiYgcmV2ZXJzZUNvbG9yJyxcbiAgICAnW2F0dHIuZGF0YS1mbGFnXSc6IGBmbGFnYCxcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBUcmVuZENvbXBvbmVudCB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9jb2xvcmZ1bDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfcmV2ZXJzZUNvbG9yOiBCb29sZWFuSW5wdXQ7XG5cbiAgLyoqIOS4iuWNh+S4i+mZjeagh+ivhiAqL1xuICBASW5wdXQoKSBmbGFnOiAndXAnIHwgJ2MnO1xuICAvKiog5piv5ZCm5b2p6Imy5qCH6K6wICovXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBjb2xvcmZ1bCA9IHRydWU7XG4gIC8qKiDpopzoibLlj43ovawgKi9cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHJldmVyc2VDb2xvciA9IGZhbHNlO1xufVxuIl19