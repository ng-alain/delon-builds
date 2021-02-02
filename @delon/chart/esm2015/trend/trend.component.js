import { __decorate, __metadata } from "tslib";
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
/** @nocollapse */ TrendComponent.ɵfac = function TrendComponent_Factory(t) { return new (t || TrendComponent)(); };
/** @nocollapse */ TrendComponent.ɵcmp = i0.ɵɵngDeclareComponent({ version: "11.1.1", type: TrendComponent, selector: "trend", inputs: { flag: "flag", colorful: "colorful", reverseColor: "reverseColor" }, host: { properties: { "class.trend": "true", "class.trend__grey": "!colorful", "class.trend__reverse": "colorful && reverseColor" } }, exportAs: ["trend"], ngImport: i0, template: "<ng-content></ng-content>\n<span *ngIf=\"flag\" class=\"trend__{{ flag }}\"><i nz-icon nzType=\"caret-{{ flag }}\"></i></span>\n", directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.NzIconDirective, selector: "[nz-icon]", inputs: ["nzRotate", "nzSpin", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], TrendComponent.prototype, "colorful", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], TrendComponent.prototype, "reverseColor", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TrendComponent, [{
        type: Component,
        args: [{
                selector: 'trend',
                exportAs: 'trend',
                templateUrl: './trend.component.html',
                host: {
                    '[class.trend]': 'true',
                    '[class.trend__grey]': '!colorful',
                    '[class.trend__reverse]': 'colorful && reverseColor',
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
            }]
    }], null, { flag: [{
            type: Input
        }], colorful: [{
            type: Input
        }], reverseColor: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlbmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY2hhcnQvdHJlbmQvdHJlbmQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY2hhcnQvdHJlbmQvdHJlbmQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdGLE9BQU8sRUFBZ0IsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7QUFlbkUsTUFBTSxPQUFPLGNBQWM7SUFiM0I7UUFtQkUsYUFBYTtRQUNZLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFDekMsV0FBVztRQUNjLGlCQUFZLEdBQUcsS0FBSyxDQUFDO0tBQy9DOzsrRkFWWSxjQUFjOzRGQUFkLGNBQWMsdVJDaEIzQixrSUFFQTtBRHFCMkI7SUFBZixZQUFZLEVBQUU7O2dEQUFpQjtBQUVoQjtJQUFmLFlBQVksRUFBRTs7b0RBQXNCO3VGQVRuQyxjQUFjO2NBYjFCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsT0FBTztnQkFDakIsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLFdBQVcsRUFBRSx3QkFBd0I7Z0JBQ3JDLElBQUksRUFBRTtvQkFDSixlQUFlLEVBQUUsTUFBTTtvQkFDdkIscUJBQXFCLEVBQUUsV0FBVztvQkFDbEMsd0JBQXdCLEVBQUUsMEJBQTBCO2lCQUNyRDtnQkFDRCxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7Z0JBTVUsSUFBSTtrQkFBWixLQUFLO1lBRW1CLFFBQVE7a0JBQWhDLEtBQUs7WUFFbUIsWUFBWTtrQkFBcEMsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBJbnB1dEJvb2xlYW4gfSBmcm9tICdAZGVsb24vdXRpbC9kZWNvcmF0b3InO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0cmVuZCcsXG4gIGV4cG9ydEFzOiAndHJlbmQnLFxuICB0ZW1wbGF0ZVVybDogJy4vdHJlbmQuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy50cmVuZF0nOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy50cmVuZF9fZ3JleV0nOiAnIWNvbG9yZnVsJyxcbiAgICAnW2NsYXNzLnRyZW5kX19yZXZlcnNlXSc6ICdjb2xvcmZ1bCAmJiByZXZlcnNlQ29sb3InLFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIFRyZW5kQ29tcG9uZW50IHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2NvbG9yZnVsOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9yZXZlcnNlQ29sb3I6IEJvb2xlYW5JbnB1dDtcblxuICAvKiog5LiK5Y2H5LiL6ZmN5qCH6K+GICovXG4gIEBJbnB1dCgpIGZsYWc6ICd1cCcgfCAnZG93bic7XG4gIC8qKiDmmK/lkKblvanoibLmoIforrAgKi9cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGNvbG9yZnVsID0gdHJ1ZTtcbiAgLyoqIOminOiJsuWPjei9rCAqL1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgcmV2ZXJzZUNvbG9yID0gZmFsc2U7XG59XG4iLCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48c3BhbiAqbmdJZj1cImZsYWdcIiBjbGFzcz1cInRyZW5kX197eyBmbGFnIH19XCI+PGkgbnotaWNvbiBuelR5cGU9XCJjYXJldC17eyBmbGFnIH19XCI+PC9pPjwvc3Bhbj5cbiJdfQ==