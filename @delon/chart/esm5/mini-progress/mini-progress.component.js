/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { DelonLocaleService } from '@delon/theme';
import { toNumber, InputNumber } from '@delon/util';
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
        // tslint:disable-next-line:no-any
        set: 
        // tslint:disable-next-line:no-any
        /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._target = Math.min(Math.max(toNumber(value), 0), 100);
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
        // tslint:disable-next-line:no-any
        set: 
        // tslint:disable-next-line:no-any
        /**
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
                    template: "<nz-tooltip [nzTitle]=\"i18n.getData('miniProgress').target + target + '%'\">\n  <div nz-tooltip class=\"g2-mini-progress__target\" [ngStyle]=\"{'left.%': target}\">\n    <span class=\"g2-mini-progress__target-item\" [ngStyle]=\"{'background-color': color}\"></span>\n    <span class=\"g2-mini-progress__target-item\" [ngStyle]=\"{'background-color': color}\"></span>\n  </div>\n</nz-tooltip>\n<div class=\"g2-mini-progress__wrap\">\n  <div class=\"g2-mini-progress__value\" [ngStyle]=\"{'background-color': color, 'width.%': percent, 'height.px':strokeWidth}\"></div>\n</div>\n",
                    host: { '[class.g2-mini-progress]': 'true' }
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
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Number)
    ], G2ProgressComponent.prototype, "strokeWidth", void 0);
    return G2ProgressComponent;
}());
export { G2ProgressComponent };
if (false) {
    /** @type {?} */
    G2ProgressComponent.prototype.color;
    /** @type {?} */
    G2ProgressComponent.prototype._target;
    /** @type {?} */
    G2ProgressComponent.prototype.strokeWidth;
    /** @type {?} */
    G2ProgressComponent.prototype._percent;
    /** @type {?} */
    G2ProgressComponent.prototype.i18n;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluaS1wcm9ncmVzcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vY2hhcnQvbWluaS1wcm9ncmVzcy8iLCJzb3VyY2VzIjpbIm1pbmktcHJvZ3Jlc3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ2xELE9BQU8sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXBEO0lBK0JFLDZCQUFtQixJQUF3QjtRQUF4QixTQUFJLEdBQUosSUFBSSxDQUFvQjtRQXhCM0MsVUFBSyxHQUFHLFNBQVMsQ0FBQztJQXdCNkIsQ0FBQztJQXRCaEQsc0JBQ0ksdUNBQU07Ozs7UUFEVjtZQUVFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN0QixDQUFDO1FBQ0Qsa0NBQWtDOzs7Ozs7O1FBQ2xDLFVBQVcsS0FBVTtZQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDN0QsQ0FBQzs7O09BSkE7SUFTRCxzQkFDSSx3Q0FBTzs7OztRQURYO1lBRUUsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3ZCLENBQUM7UUFDRCxrQ0FBa0M7Ozs7Ozs7UUFDbEMsVUFBWSxLQUFVO1lBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM5RCxDQUFDOzs7T0FKQTs7Z0JBeEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1Qiw4a0JBQTZDO29CQUM3QyxJQUFJLEVBQUUsRUFBRSwwQkFBMEIsRUFBRSxNQUFNLEVBQUU7aUJBQzdDOzs7O2dCQVBRLGtCQUFrQjs7O3dCQVN4QixLQUFLO3lCQUdMLEtBQUs7OEJBVUwsS0FBSzswQkFFTCxLQUFLOztJQUZrQjtRQUFkLFdBQVcsRUFBRTs7NERBQXFCO0lBYTlDLDBCQUFDO0NBQUEsQUFoQ0QsSUFnQ0M7U0EzQlksbUJBQW1COzs7SUFDOUIsb0NBQ2tCOztJQVVsQixzQ0FBd0I7O0lBRXhCLDBDQUE0Qzs7SUFVNUMsdUNBQXlCOztJQUViLG1DQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERlbG9uTG9jYWxlU2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyB0b051bWJlciwgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2cyLW1pbmktcHJvZ3Jlc3MnLFxuICB0ZW1wbGF0ZVVybDogJy4vbWluaS1wcm9ncmVzcy5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHsgJ1tjbGFzcy5nMi1taW5pLXByb2dyZXNzXSc6ICd0cnVlJyB9LFxufSlcbmV4cG9ydCBjbGFzcyBHMlByb2dyZXNzQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgY29sb3IgPSAnIzE4OTBGRic7XG5cbiAgQElucHV0KClcbiAgZ2V0IHRhcmdldCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFyZ2V0O1xuICB9XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgc2V0IHRhcmdldCh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5fdGFyZ2V0ID0gTWF0aC5taW4oTWF0aC5tYXgodG9OdW1iZXIodmFsdWUpLCAwKSwgMTAwKTtcbiAgfVxuICBwcml2YXRlIF90YXJnZXQ6IG51bWJlcjtcblxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBzdHJva2VXaWR0aDogbnVtYmVyO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBwZXJjZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9wZXJjZW50O1xuICB9XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgc2V0IHBlcmNlbnQodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX3BlcmNlbnQgPSBNYXRoLm1pbihNYXRoLm1heCh0b051bWJlcih2YWx1ZSksIDApLCAxMDApO1xuICB9XG4gIHByaXZhdGUgX3BlcmNlbnQ6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaTE4bjogRGVsb25Mb2NhbGVTZXJ2aWNlKSB7IH1cbn1cbiJdfQ==