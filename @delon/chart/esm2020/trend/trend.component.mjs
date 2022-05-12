import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from '@delon/util/decorator';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/icon";
export class TrendComponent {
    constructor() {
        /** 是否彩色标记 */
        this.colorful = true;
        /** 颜色反转 */
        this.reverseColor = false;
    }
}
TrendComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.7", ngImport: i0, type: TrendComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
TrendComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.7", type: TrendComponent, selector: "trend", inputs: { flag: "flag", colorful: "colorful", reverseColor: "reverseColor" }, host: { properties: { "class.trend": "true", "class.trend__grey": "!colorful", "class.trend__reverse": "colorful && reverseColor", "attr.data-flag": "flag" } }, exportAs: ["trend"], ngImport: i0, template: `
    <ng-content></ng-content>
    <span *ngIf="flag" class="trend__{{ flag }}"><i nz-icon nzType="caret-{{ flag }}"></i></span>
  `, isInline: true, directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    InputBoolean()
], TrendComponent.prototype, "colorful", void 0);
__decorate([
    InputBoolean()
], TrendComponent.prototype, "reverseColor", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.7", ngImport: i0, type: TrendComponent, decorators: [{
            type: Component,
            args: [{
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
                }]
        }], propDecorators: { flag: [{
                type: Input
            }], colorful: [{
                type: Input
            }], reverseColor: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlbmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY2hhcnQvdHJlbmQvdHJlbmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3RixPQUFPLEVBQWdCLFlBQVksRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7O0FBbUJuRSxNQUFNLE9BQU8sY0FBYztJQWpCM0I7UUF1QkUsYUFBYTtRQUNZLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFDekMsV0FBVztRQUNjLGlCQUFZLEdBQUcsS0FBSyxDQUFDO0tBQy9DOzsyR0FWWSxjQUFjOytGQUFkLGNBQWMsaVRBZGY7OztHQUdUO0FBa0J3QjtJQUFmLFlBQVksRUFBRTtnREFBaUI7QUFFaEI7SUFBZixZQUFZLEVBQUU7b0RBQXNCOzJGQVRuQyxjQUFjO2tCQWpCMUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsT0FBTztvQkFDakIsUUFBUSxFQUFFLE9BQU87b0JBQ2pCLFFBQVEsRUFBRTs7O0dBR1Q7b0JBQ0QsSUFBSSxFQUFFO3dCQUNKLGVBQWUsRUFBRSxNQUFNO3dCQUN2QixxQkFBcUIsRUFBRSxXQUFXO3dCQUNsQyx3QkFBd0IsRUFBRSwwQkFBMEI7d0JBQ3BELGtCQUFrQixFQUFFLE1BQU07cUJBQzNCO29CQUNELG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDdEM7OEJBTVUsSUFBSTtzQkFBWixLQUFLO2dCQUVtQixRQUFRO3NCQUFoQyxLQUFLO2dCQUVtQixZQUFZO3NCQUFwQyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgSW5wdXRCb29sZWFuIH0gZnJvbSAnQGRlbG9uL3V0aWwvZGVjb3JhdG9yJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndHJlbmQnLFxuICBleHBvcnRBczogJ3RyZW5kJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPHNwYW4gKm5nSWY9XCJmbGFnXCIgY2xhc3M9XCJ0cmVuZF9fe3sgZmxhZyB9fVwiPjxpIG56LWljb24gbnpUeXBlPVwiY2FyZXQte3sgZmxhZyB9fVwiPjwvaT48L3NwYW4+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLnRyZW5kXSc6ICd0cnVlJyxcbiAgICAnW2NsYXNzLnRyZW5kX19ncmV5XSc6ICchY29sb3JmdWwnLFxuICAgICdbY2xhc3MudHJlbmRfX3JldmVyc2VdJzogJ2NvbG9yZnVsICYmIHJldmVyc2VDb2xvcicsXG4gICAgJ1thdHRyLmRhdGEtZmxhZ10nOiBgZmxhZ2BcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFRyZW5kQ29tcG9uZW50IHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2NvbG9yZnVsOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9yZXZlcnNlQ29sb3I6IEJvb2xlYW5JbnB1dDtcblxuICAvKiog5LiK5Y2H5LiL6ZmN5qCH6K+GICovXG4gIEBJbnB1dCgpIGZsYWc/OiAndXAnIHwgJ2Rvd24nO1xuICAvKiog5piv5ZCm5b2p6Imy5qCH6K6wICovXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBjb2xvcmZ1bCA9IHRydWU7XG4gIC8qKiDpopzoibLlj43ovawgKi9cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHJldmVyc2VDb2xvciA9IGZhbHNlO1xufVxuIl19