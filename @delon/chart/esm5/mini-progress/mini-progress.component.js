/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluaS1wcm9ncmVzcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vY2hhcnQvbWluaS1wcm9ncmVzcy8iLCJzb3VyY2VzIjpbIm1pbmktcHJvZ3Jlc3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUVsRDtJQStDRSw2QkFBbUIsSUFBd0I7UUFBeEIsU0FBSSxHQUFKLElBQUksQ0FBb0I7UUE3QjNDLFVBQUssR0FBRyxTQUFTLENBQUM7SUE2QjRCLENBQUM7SUEzQi9DLHNCQUNJLHVDQUFNOzs7O1FBRFY7WUFFRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDdEIsQ0FBQzs7Ozs7UUFDRCxVQUFXLEtBQVU7WUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzdELENBQUM7OztPQUhBO0lBTUQsc0JBQ0ksNENBQVc7Ozs7UUFEZjtZQUVFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztRQUMzQixDQUFDOzs7OztRQUNELFVBQWdCLEtBQVU7WUFDeEIsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEMsQ0FBQzs7O09BSEE7SUFNRCxzQkFDSSx3Q0FBTzs7OztRQURYO1lBRUUsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3ZCLENBQUM7Ozs7O1FBQ0QsVUFBWSxLQUFVO1lBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM5RCxDQUFDOzs7T0FIQTs7Z0JBekNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixRQUFRLEVBQUUsMGxCQVVUO29CQUNELElBQUksRUFBRSxFQUFFLDBCQUEwQixFQUFFLE1BQU0sRUFBRTtvQkFDNUMsbUJBQW1CLEVBQUUsS0FBSztpQkFDM0I7Ozs7Z0JBakJRLGtCQUFrQjs7O3dCQW1CeEIsS0FBSzt5QkFHTCxLQUFLOzhCQVNMLEtBQUs7MEJBU0wsS0FBSzs7SUFVUiwwQkFBQztDQUFBLEFBaERELElBZ0RDO1NBaENZLG1CQUFtQjs7O0lBQzlCLG9DQUNrQjs7SUFTbEIsc0NBQXdCOztJQVN4QiwyQ0FBNkI7O0lBUzdCLHVDQUF5Qjs7SUFFYixtQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0b051bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IERlbG9uTG9jYWxlU2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2cyLW1pbmktcHJvZ3Jlc3MnLFxuICB0ZW1wbGF0ZTogYFxuICA8bnotdG9vbHRpcCBbbnpUaXRsZV09XCJpMThuLmdldERhdGEoJ21pbmlQcm9ncmVzcycpLnRhcmdldCArIHRhcmdldCArICclJ1wiPlxuICAgIDxkaXYgbnotdG9vbHRpcCBjbGFzcz1cImcyLW1pbmktcHJvZ3Jlc3NfX3RhcmdldFwiIFtuZ1N0eWxlXT1cInsnbGVmdC4lJzogdGFyZ2V0fVwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJnMi1taW5pLXByb2dyZXNzX190YXJnZXQtaXRlbVwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbG9yfVwiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZzItbWluaS1wcm9ncmVzc19fdGFyZ2V0LWl0ZW1cIiBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmQtY29sb3InOiBjb2xvcn1cIj48L3NwYW4+XG4gICAgPC9kaXY+XG4gIDwvbnotdG9vbHRpcD5cbiAgPGRpdiBjbGFzcz1cImcyLW1pbmktcHJvZ3Jlc3NfX3dyYXBcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZzItbWluaS1wcm9ncmVzc19fdmFsdWVcIiBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmQtY29sb3InOiBjb2xvciwgJ3dpZHRoLiUnOiBwZXJjZW50LCAnaGVpZ2h0LnB4JzpzdHJva2VXaWR0aH1cIj48L2Rpdj5cbiAgPC9kaXY+XG4gIGAsXG4gIGhvc3Q6IHsgJ1tjbGFzcy5nMi1taW5pLXByb2dyZXNzXSc6ICd0cnVlJyB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgRzJQcm9ncmVzc0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIGNvbG9yID0gJyMxODkwRkYnO1xuXG4gIEBJbnB1dCgpXG4gIGdldCB0YXJnZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhcmdldDtcbiAgfVxuICBzZXQgdGFyZ2V0KHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl90YXJnZXQgPSBNYXRoLm1pbihNYXRoLm1heCh0b051bWJlcih2YWx1ZSksIDApLCAxMDApO1xuICB9XG4gIHByaXZhdGUgX3RhcmdldDogbnVtYmVyO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBzdHJva2VXaWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3Ryb2tlV2lkdGg7XG4gIH1cbiAgc2V0IHN0cm9rZVdpZHRoKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl9zdHJva2VXaWR0aCA9IHRvTnVtYmVyKHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9zdHJva2VXaWR0aDogbnVtYmVyO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBwZXJjZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9wZXJjZW50O1xuICB9XG4gIHNldCBwZXJjZW50KHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl9wZXJjZW50ID0gTWF0aC5taW4oTWF0aC5tYXgodG9OdW1iZXIodmFsdWUpLCAwKSwgMTAwKTtcbiAgfVxuICBwcml2YXRlIF9wZXJjZW50OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGkxOG46IERlbG9uTG9jYWxlU2VydmljZSkge31cbn1cbiJdfQ==