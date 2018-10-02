import { Component, Input, NgModule } from '@angular/core';
import { toBoolean, DelonUtilModule } from '@delon/util';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class TrendComponent {
    constructor() {
        this._colorful = true;
        this._reverseColor = false;
    }
    /**
     * 是否彩色标记
     * @return {?}
     */
    get colorful() {
        return this._colorful;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set colorful(value) {
        this._colorful = toBoolean(value);
    }
    /**
     * 颜色反转
     * @return {?}
     */
    get reverseColor() {
        return this._reverseColor;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set reverseColor(value) {
        this._reverseColor = toBoolean(value);
    }
}
TrendComponent.decorators = [
    { type: Component, args: [{
                selector: 'trend',
                template: `
  <ng-content></ng-content>
  <span *ngIf="flag" class="trend__{{flag}}"><i class="anticon anticon-caret-{{flag}}"></i></span>
  `,
                host: {
                    '[class.trend]': 'true',
                    '[class.trend__grey]': '!colorful',
                    '[class.trend__reverse]': 'colorful && reverseColor',
                },
                preserveWhitespaces: false
            }] }
];
TrendComponent.propDecorators = {
    flag: [{ type: Input }],
    colorful: [{ type: Input }],
    reverseColor: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [TrendComponent];
class TrendModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: TrendModule, providers: [] };
    }
}
TrendModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, DelonUtilModule],
                declarations: [...COMPONENTS],
                exports: [...COMPONENTS],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { TrendComponent, TrendModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlbmQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BkZWxvbi9jaGFydC90cmVuZC90cmVuZC5jb21wb25lbnQudHMiLCJuZzovL0BkZWxvbi9jaGFydC90cmVuZC90cmVuZC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICdAZGVsb24vdXRpbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3RyZW5kJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICA8c3BhbiAqbmdJZj1cImZsYWdcIiBjbGFzcz1cInRyZW5kX197e2ZsYWd9fVwiPjxpIGNsYXNzPVwiYW50aWNvbiBhbnRpY29uLWNhcmV0LXt7ZmxhZ319XCI+PC9pPjwvc3Bhbj5cclxuICBgLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MudHJlbmRdJzogJ3RydWUnLFxyXG4gICAgJ1tjbGFzcy50cmVuZF9fZ3JleV0nOiAnIWNvbG9yZnVsJyxcclxuICAgICdbY2xhc3MudHJlbmRfX3JldmVyc2VdJzogJ2NvbG9yZnVsICYmIHJldmVyc2VDb2xvcicsXHJcbiAgfSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRyZW5kQ29tcG9uZW50IHtcclxuICAvKiogw6TCuMKKw6XCjcKHw6TCuMKLw6nCmcKNw6bCoMKHw6jCr8KGICovXHJcbiAgQElucHV0KCkgZmxhZzogJ3VwJyB8ICdkb3duJztcclxuXHJcbiAgLyoqIMOmwpjCr8OlwpDCpsOlwr3CqcOowonCssOmwqDCh8Oowq7CsCAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IGNvbG9yZnVsKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbG9yZnVsO1xyXG4gIH1cclxuICBzZXQgY29sb3JmdWwodmFsdWU6IGFueSkge1xyXG4gICAgdGhpcy5fY29sb3JmdWwgPSB0b0Jvb2xlYW4odmFsdWUpO1xyXG4gIH1cclxuICBwcml2YXRlIF9jb2xvcmZ1bCA9IHRydWU7XHJcblxyXG4gIC8qKiDDqcKiwpzDqMKJwrLDpcKPwo3DqMK9wqwgKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCByZXZlcnNlQ29sb3IoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcmV2ZXJzZUNvbG9yO1xyXG4gIH1cclxuICBzZXQgcmV2ZXJzZUNvbG9yKHZhbHVlOiBhbnkpIHtcclxuICAgIHRoaXMuX3JldmVyc2VDb2xvciA9IHRvQm9vbGVhbih2YWx1ZSk7XHJcbiAgfVxyXG4gIHByaXZhdGUgX3JldmVyc2VDb2xvciA9IGZhbHNlO1xyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IERlbG9uVXRpbE1vZHVsZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcclxuXHJcbmltcG9ydCB7IFRyZW5kQ29tcG9uZW50IH0gZnJvbSAnLi90cmVuZC5jb21wb25lbnQnO1xyXG5cclxuY29uc3QgQ09NUE9ORU5UUyA9IFtUcmVuZENvbXBvbmVudF07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIERlbG9uVXRpbE1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbLi4uQ09NUE9ORU5UU10sXHJcbiAgZXhwb3J0czogWy4uLkNPTVBPTkVOVFNdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVHJlbmRNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHsgbmdNb2R1bGU6IFRyZW5kTW9kdWxlLCBwcm92aWRlcnM6IFtdIH07XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzt5QkE0QnNCLElBQUk7NkJBVUEsS0FBSzs7Ozs7O0lBakI3QixJQUNJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7S0FDdkI7Ozs7O0lBQ0QsSUFBSSxRQUFRLENBQUMsS0FBVTtRQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNuQzs7Ozs7SUFJRCxJQUNJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7S0FDM0I7Ozs7O0lBQ0QsSUFBSSxZQUFZLENBQUMsS0FBVTtRQUN6QixJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN2Qzs7O1lBbENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsT0FBTztnQkFDakIsUUFBUSxFQUFFOzs7R0FHVDtnQkFDRCxJQUFJLEVBQUU7b0JBQ0osZUFBZSxFQUFFLE1BQU07b0JBQ3ZCLHFCQUFxQixFQUFFLFdBQVc7b0JBQ2xDLHdCQUF3QixFQUFFLDBCQUEwQjtpQkFDckQ7Z0JBQ0QsbUJBQW1CLEVBQUUsS0FBSzthQUMzQjs7O21CQUdFLEtBQUs7dUJBR0wsS0FBSzsyQkFVTCxLQUFLOzs7Ozs7O0FDL0JSO0FBTUEsTUFBTSxVQUFVLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQU9wQzs7OztJQUNFLE9BQU8sT0FBTztRQUNaLE9BQU8sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsQ0FBQztLQUNqRDs7O1lBUkYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxlQUFlLENBQUM7Z0JBQ3hDLFlBQVksRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDO2dCQUM3QixPQUFPLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQzthQUN6Qjs7Ozs7Ozs7Ozs7Ozs7OyJ9