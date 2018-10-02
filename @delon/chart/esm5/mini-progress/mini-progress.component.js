/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { toNumber } from '@delon/util';
import { DelonLocaleService } from '@delon/theme';
var G2ProgressComponent = /** @class */ (function () {
    function G2ProgressComponent(i18n) {
        this.i18n = i18n;
        this.color = '#1890FF';
    }
    Object.defineProperty(G2ProgressComponent.prototype, "target", {
        get: /**
         * @return {?}
         */
        function () {
            return this._target;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._target = Math.min(Math.max(toNumber(value), 0), 100);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G2ProgressComponent.prototype, "strokeWidth", {
        get: /**
         * @return {?}
         */
        function () {
            return this._strokeWidth;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._strokeWidth = toNumber(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G2ProgressComponent.prototype, "percent", {
        get: /**
         * @return {?}
         */
        function () {
            return this._percent;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._percent = Math.min(Math.max(toNumber(value), 0), 100);
        },
        enumerable: true,
        configurable: true
    });
    G2ProgressComponent.decorators = [
        { type: Component, args: [{
                    selector: 'g2-mini-progress',
                    template: "\n  <nz-tooltip [nzTitle]=\"i18n.getData('miniProgress').target + target + '%'\">\n    <div nz-tooltip class=\"g2-mini-progress__target\" [ngStyle]=\"{'left.%': target}\">\n      <span class=\"g2-mini-progress__target-item\" [ngStyle]=\"{'background-color': color}\"></span>\n      <span class=\"g2-mini-progress__target-item\" [ngStyle]=\"{'background-color': color}\"></span>\n    </div>\n  </nz-tooltip>\n  <div class=\"g2-mini-progress__wrap\">\n    <div class=\"g2-mini-progress__value\" [ngStyle]=\"{'background-color': color, 'width.%': percent, 'height.px':strokeWidth}\"></div>\n  </div>\n  ",
                    host: { '[class.g2-mini-progress]': 'true' },
                    preserveWhitespaces: false
                }] }
    ];
    /** @nocollapse */
    G2ProgressComponent.ctorParameters = function () { return [
        { type: DelonLocaleService }
    ]; };
    G2ProgressComponent.propDecorators = {
        color: [{ type: Input }],
        target: [{ type: Input }],
        strokeWidth: [{ type: Input }],
        percent: [{ type: Input }]
    };
    return G2ProgressComponent;
}());
export { G2ProgressComponent };
if (false) {
    /** @type {?} */
    G2ProgressComponent.prototype.color;
    /** @type {?} */
    G2ProgressComponent.prototype._target;
    /** @type {?} */
    G2ProgressComponent.prototype._strokeWidth;
    /** @type {?} */
    G2ProgressComponent.prototype._percent;
    /** @type {?} */
    G2ProgressComponent.prototype.i18n;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluaS1wcm9ncmVzcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vY2hhcnQvbWluaS1wcm9ncmVzcy8iLCJzb3VyY2VzIjpbIm1pbmktcHJvZ3Jlc3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7SUFpRGhELDZCQUFtQixJQUF3QjtRQUF4QixTQUFJLEdBQUosSUFBSSxDQUFvQjtxQkE3Qm5DLFNBQVM7S0E2QjhCO0lBM0IvQyxzQkFDSSx1Q0FBTTs7OztRQURWO1lBRUUsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3JCOzs7OztRQUNELFVBQVcsS0FBVTtZQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDNUQ7OztPQUhBO0lBTUQsc0JBQ0ksNENBQVc7Ozs7UUFEZjtZQUVFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztTQUMxQjs7Ozs7UUFDRCxVQUFnQixLQUFVO1lBQ3hCLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3JDOzs7T0FIQTtJQU1ELHNCQUNJLHdDQUFPOzs7O1FBRFg7WUFFRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDdEI7Ozs7O1FBQ0QsVUFBWSxLQUFVO1lBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUM3RDs7O09BSEE7O2dCQXpDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsUUFBUSxFQUFFLDBsQkFVVDtvQkFDRCxJQUFJLEVBQUUsRUFBRSwwQkFBMEIsRUFBRSxNQUFNLEVBQUU7b0JBQzVDLG1CQUFtQixFQUFFLEtBQUs7aUJBQzNCOzs7O2dCQWpCUSxrQkFBa0I7Ozt3QkFtQnhCLEtBQUs7eUJBR0wsS0FBSzs4QkFTTCxLQUFLOzBCQVNMLEtBQUs7OzhCQTFDUjs7U0FvQmEsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyB0b051bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcclxuaW1wb3J0IHsgRGVsb25Mb2NhbGVTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZzItbWluaS1wcm9ncmVzcycsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8bnotdG9vbHRpcCBbbnpUaXRsZV09XCJpMThuLmdldERhdGEoJ21pbmlQcm9ncmVzcycpLnRhcmdldCArIHRhcmdldCArICclJ1wiPlxyXG4gICAgPGRpdiBuei10b29sdGlwIGNsYXNzPVwiZzItbWluaS1wcm9ncmVzc19fdGFyZ2V0XCIgW25nU3R5bGVdPVwieydsZWZ0LiUnOiB0YXJnZXR9XCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiZzItbWluaS1wcm9ncmVzc19fdGFyZ2V0LWl0ZW1cIiBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmQtY29sb3InOiBjb2xvcn1cIj48L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiZzItbWluaS1wcm9ncmVzc19fdGFyZ2V0LWl0ZW1cIiBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmQtY29sb3InOiBjb2xvcn1cIj48L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICA8L256LXRvb2x0aXA+XHJcbiAgPGRpdiBjbGFzcz1cImcyLW1pbmktcHJvZ3Jlc3NfX3dyYXBcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJnMi1taW5pLXByb2dyZXNzX192YWx1ZVwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbG9yLCAnd2lkdGguJSc6IHBlcmNlbnQsICdoZWlnaHQucHgnOnN0cm9rZVdpZHRofVwiPjwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIGAsXHJcbiAgaG9zdDogeyAnW2NsYXNzLmcyLW1pbmktcHJvZ3Jlc3NdJzogJ3RydWUnIH0sXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHMlByb2dyZXNzQ29tcG9uZW50IHtcclxuICBASW5wdXQoKVxyXG4gIGNvbG9yID0gJyMxODkwRkYnO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGdldCB0YXJnZXQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdGFyZ2V0O1xyXG4gIH1cclxuICBzZXQgdGFyZ2V0KHZhbHVlOiBhbnkpIHtcclxuICAgIHRoaXMuX3RhcmdldCA9IE1hdGgubWluKE1hdGgubWF4KHRvTnVtYmVyKHZhbHVlKSwgMCksIDEwMCk7XHJcbiAgfVxyXG4gIHByaXZhdGUgX3RhcmdldDogbnVtYmVyO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGdldCBzdHJva2VXaWR0aCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9zdHJva2VXaWR0aDtcclxuICB9XHJcbiAgc2V0IHN0cm9rZVdpZHRoKHZhbHVlOiBhbnkpIHtcclxuICAgIHRoaXMuX3N0cm9rZVdpZHRoID0gdG9OdW1iZXIodmFsdWUpO1xyXG4gIH1cclxuICBwcml2YXRlIF9zdHJva2VXaWR0aDogbnVtYmVyO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGdldCBwZXJjZW50KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3BlcmNlbnQ7XHJcbiAgfVxyXG4gIHNldCBwZXJjZW50KHZhbHVlOiBhbnkpIHtcclxuICAgIHRoaXMuX3BlcmNlbnQgPSBNYXRoLm1pbihNYXRoLm1heCh0b051bWJlcih2YWx1ZSksIDApLCAxMDApO1xyXG4gIH1cclxuICBwcml2YXRlIF9wZXJjZW50OiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBpMThuOiBEZWxvbkxvY2FsZVNlcnZpY2UpIHt9XHJcbn1cclxuIl19