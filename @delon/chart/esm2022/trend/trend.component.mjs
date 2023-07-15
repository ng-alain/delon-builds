import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from '@delon/util/decorator';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/icon";
class TrendComponent {
    constructor() {
        /** 是否彩色标记 */
        this.colorful = true;
        /** 颜色反转 */
        this.reverseColor = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: TrendComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.5", type: TrendComponent, selector: "trend", inputs: { flag: "flag", colorful: "colorful", reverseColor: "reverseColor" }, host: { properties: { "class.trend": "true", "class.trend__grey": "!colorful", "class.trend__reverse": "colorful && reverseColor", "attr.data-flag": "flag" } }, exportAs: ["trend"], ngImport: i0, template: `
    <ng-content></ng-content>
    <span *ngIf="flag" class="trend__{{ flag }}"><i nz-icon nzType="caret-{{ flag }}"></i></span>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
__decorate([
    InputBoolean()
], TrendComponent.prototype, "colorful", void 0);
__decorate([
    InputBoolean()
], TrendComponent.prototype, "reverseColor", void 0);
export { TrendComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: TrendComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlbmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY2hhcnQvdHJlbmQvdHJlbmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3RixPQUFPLEVBQWdCLFlBQVksRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7O0FBRW5FLE1BaUJhLGNBQWM7SUFqQjNCO1FBdUJFLGFBQWE7UUFDWSxhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3pDLFdBQVc7UUFDYyxpQkFBWSxHQUFHLEtBQUssQ0FBQztLQUMvQzs4R0FWWSxjQUFjO2tHQUFkLGNBQWMsaVRBZGY7OztHQUdUOztBQWtCd0I7SUFBZixZQUFZLEVBQUU7Z0RBQWlCO0FBRWhCO0lBQWYsWUFBWSxFQUFFO29EQUFzQjtTQVRuQyxjQUFjOzJGQUFkLGNBQWM7a0JBakIxQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxPQUFPO29CQUNqQixRQUFRLEVBQUUsT0FBTztvQkFDakIsUUFBUSxFQUFFOzs7R0FHVDtvQkFDRCxJQUFJLEVBQUU7d0JBQ0osZUFBZSxFQUFFLE1BQU07d0JBQ3ZCLHFCQUFxQixFQUFFLFdBQVc7d0JBQ2xDLHdCQUF3QixFQUFFLDBCQUEwQjt3QkFDcEQsa0JBQWtCLEVBQUUsTUFBTTtxQkFDM0I7b0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUN0Qzs4QkFNVSxJQUFJO3NCQUFaLEtBQUs7Z0JBRW1CLFFBQVE7c0JBQWhDLEtBQUs7Z0JBRW1CLFlBQVk7c0JBQXBDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBJbnB1dEJvb2xlYW4gfSBmcm9tICdAZGVsb24vdXRpbC9kZWNvcmF0b3InO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0cmVuZCcsXG4gIGV4cG9ydEFzOiAndHJlbmQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8c3BhbiAqbmdJZj1cImZsYWdcIiBjbGFzcz1cInRyZW5kX197eyBmbGFnIH19XCI+PGkgbnotaWNvbiBuelR5cGU9XCJjYXJldC17eyBmbGFnIH19XCI+PC9pPjwvc3Bhbj5cbiAgYCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MudHJlbmRdJzogJ3RydWUnLFxuICAgICdbY2xhc3MudHJlbmRfX2dyZXldJzogJyFjb2xvcmZ1bCcsXG4gICAgJ1tjbGFzcy50cmVuZF9fcmV2ZXJzZV0nOiAnY29sb3JmdWwgJiYgcmV2ZXJzZUNvbG9yJyxcbiAgICAnW2F0dHIuZGF0YS1mbGFnXSc6IGBmbGFnYFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgVHJlbmRDb21wb25lbnQge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfY29sb3JmdWw6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3JldmVyc2VDb2xvcjogQm9vbGVhbklucHV0O1xuXG4gIC8qKiDkuIrljYfkuIvpmY3moIfor4YgKi9cbiAgQElucHV0KCkgZmxhZz86ICd1cCcgfCAnZG93bic7XG4gIC8qKiDmmK/lkKblvanoibLmoIforrAgKi9cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGNvbG9yZnVsID0gdHJ1ZTtcbiAgLyoqIOminOiJsuWPjei9rCAqL1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgcmV2ZXJzZUNvbG9yID0gZmFsc2U7XG59XG4iXX0=