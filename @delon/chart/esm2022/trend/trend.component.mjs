import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from '@delon/util/decorator';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/icon";
export class TrendComponent {
    constructor() {
        /** 是否彩色标记 */
        this.colorful = true;
        /** 颜色反转 */
        this.reverseColor = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TrendComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: TrendComponent, selector: "trend", inputs: { flag: "flag", colorful: "colorful", reverseColor: "reverseColor" }, host: { properties: { "class.trend": "true", "class.trend__grey": "!colorful", "class.trend__reverse": "colorful && reverseColor", "attr.data-flag": "flag" } }, exportAs: ["trend"], ngImport: i0, template: `
    <ng-content />
    @if (flag) {
      <span class="trend__{{ flag }}"><i nz-icon nzType="caret-{{ flag }}"></i></span>
    }
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
__decorate([
    InputBoolean()
], TrendComponent.prototype, "colorful", void 0);
__decorate([
    InputBoolean()
], TrendComponent.prototype, "reverseColor", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TrendComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'trend',
                    exportAs: 'trend',
                    template: `
    <ng-content />
    @if (flag) {
      <span class="trend__{{ flag }}"><i nz-icon nzType="caret-{{ flag }}"></i></span>
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlbmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY2hhcnQvdHJlbmQvdHJlbmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3RixPQUFPLEVBQWdCLFlBQVksRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7QUFxQm5FLE1BQU0sT0FBTyxjQUFjO0lBbkIzQjtRQXlCRSxhQUFhO1FBQ1ksYUFBUSxHQUFHLElBQUksQ0FBQztRQUN6QyxXQUFXO1FBQ2MsaUJBQVksR0FBRyxLQUFLLENBQUM7S0FDL0M7OEdBVlksY0FBYztrR0FBZCxjQUFjLGlUQWhCZjs7Ozs7R0FLVDs7QUFrQndCO0lBQWYsWUFBWSxFQUFFO2dEQUFpQjtBQUVoQjtJQUFmLFlBQVksRUFBRTtvREFBc0I7MkZBVG5DLGNBQWM7a0JBbkIxQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxPQUFPO29CQUNqQixRQUFRLEVBQUUsT0FBTztvQkFDakIsUUFBUSxFQUFFOzs7OztHQUtUO29CQUNELElBQUksRUFBRTt3QkFDSixlQUFlLEVBQUUsTUFBTTt3QkFDdkIscUJBQXFCLEVBQUUsV0FBVzt3QkFDbEMsd0JBQXdCLEVBQUUsMEJBQTBCO3dCQUNwRCxrQkFBa0IsRUFBRSxNQUFNO3FCQUMzQjtvQkFDRCxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3RDOzhCQU1VLElBQUk7c0JBQVosS0FBSztnQkFFbUIsUUFBUTtzQkFBaEMsS0FBSztnQkFFbUIsWUFBWTtzQkFBcEMsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIElucHV0Qm9vbGVhbiB9IGZyb20gJ0BkZWxvbi91dGlsL2RlY29yYXRvcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RyZW5kJyxcbiAgZXhwb3J0QXM6ICd0cmVuZCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRlbnQgLz5cbiAgICBAaWYgKGZsYWcpIHtcbiAgICAgIDxzcGFuIGNsYXNzPVwidHJlbmRfX3t7IGZsYWcgfX1cIj48aSBuei1pY29uIG56VHlwZT1cImNhcmV0LXt7IGZsYWcgfX1cIj48L2k+PC9zcGFuPlxuICAgIH1cbiAgYCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MudHJlbmRdJzogJ3RydWUnLFxuICAgICdbY2xhc3MudHJlbmRfX2dyZXldJzogJyFjb2xvcmZ1bCcsXG4gICAgJ1tjbGFzcy50cmVuZF9fcmV2ZXJzZV0nOiAnY29sb3JmdWwgJiYgcmV2ZXJzZUNvbG9yJyxcbiAgICAnW2F0dHIuZGF0YS1mbGFnXSc6IGBmbGFnYFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgVHJlbmRDb21wb25lbnQge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfY29sb3JmdWw6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3JldmVyc2VDb2xvcjogQm9vbGVhbklucHV0O1xuXG4gIC8qKiDkuIrljYfkuIvpmY3moIfor4YgKi9cbiAgQElucHV0KCkgZmxhZz86ICd1cCcgfCAnZG93bic7XG4gIC8qKiDmmK/lkKblvanoibLmoIforrAgKi9cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGNvbG9yZnVsID0gdHJ1ZTtcbiAgLyoqIOminOiJsuWPjei9rCAqL1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgcmV2ZXJzZUNvbG9yID0gZmFsc2U7XG59XG4iXX0=