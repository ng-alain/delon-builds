import { Component, Input, NgModule } from '@angular/core';
import { toNumber, DelonUtilModule } from '@delon/util';
import { DelonLocaleService, DelonLocaleModule } from '@delon/theme';
import { __spread } from 'tslib';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
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
                    template: "<nz-tooltip [nzTitle]=\"i18n.getData('miniProgress').target + target + '%'\">\n  <div nz-tooltip class=\"g2-mini-progress__target\" [ngStyle]=\"{'left.%': target}\">\n    <span class=\"g2-mini-progress__target-item\" [ngStyle]=\"{'background-color': color}\"></span>\n    <span class=\"g2-mini-progress__target-item\" [ngStyle]=\"{'background-color': color}\"></span>\n  </div>\n</nz-tooltip>\n<div class=\"g2-mini-progress__wrap\">\n  <div class=\"g2-mini-progress__value\" [ngStyle]=\"{'background-color': color, 'width.%': percent, 'height.px':strokeWidth}\"></div>\n</div>\n",
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var COMPONENTS = [G2ProgressComponent];
var G2MiniProgressModule = /** @class */ (function () {
    function G2MiniProgressModule() {
    }
    /**
     * @return {?}
     */
    G2MiniProgressModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: G2MiniProgressModule, providers: [] };
    };
    G2MiniProgressModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, DelonUtilModule, DelonLocaleModule, NgZorroAntdModule],
                    declarations: __spread(COMPONENTS),
                    exports: __spread(COMPONENTS),
                },] }
    ];
    return G2MiniProgressModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { G2ProgressComponent, G2MiniProgressModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluaS1wcm9ncmVzcy5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGRlbG9uL2NoYXJ0L21pbmktcHJvZ3Jlc3MvbWluaS1wcm9ncmVzcy5jb21wb25lbnQudHMiLCJuZzovL0BkZWxvbi9jaGFydC9taW5pLXByb2dyZXNzL21pbmktcHJvZ3Jlc3MubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRvTnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgRGVsb25Mb2NhbGVTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZzItbWluaS1wcm9ncmVzcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9taW5pLXByb2dyZXNzLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDogeyAnW2NsYXNzLmcyLW1pbmktcHJvZ3Jlc3NdJzogJ3RydWUnIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBHMlByb2dyZXNzQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgY29sb3IgPSAnIzE4OTBGRic7XG5cbiAgQElucHV0KClcbiAgZ2V0IHRhcmdldCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFyZ2V0O1xuICB9XG4gIHNldCB0YXJnZXQodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX3RhcmdldCA9IE1hdGgubWluKE1hdGgubWF4KHRvTnVtYmVyKHZhbHVlKSwgMCksIDEwMCk7XG4gIH1cbiAgcHJpdmF0ZSBfdGFyZ2V0OiBudW1iZXI7XG5cbiAgQElucHV0KClcbiAgZ2V0IHN0cm9rZVdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLl9zdHJva2VXaWR0aDtcbiAgfVxuICBzZXQgc3Ryb2tlV2lkdGgodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX3N0cm9rZVdpZHRoID0gdG9OdW1iZXIodmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX3N0cm9rZVdpZHRoOiBudW1iZXI7XG5cbiAgQElucHV0KClcbiAgZ2V0IHBlcmNlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BlcmNlbnQ7XG4gIH1cbiAgc2V0IHBlcmNlbnQodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX3BlcmNlbnQgPSBNYXRoLm1pbihNYXRoLm1heCh0b051bWJlcih2YWx1ZSksIDApLCAxMDApO1xuICB9XG4gIHByaXZhdGUgX3BlcmNlbnQ6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaTE4bjogRGVsb25Mb2NhbGVTZXJ2aWNlKSB7fVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ1pvcnJvQW50ZE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xuaW1wb3J0IHsgRGVsb25VdGlsTW9kdWxlIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgRGVsb25Mb2NhbGVNb2R1bGUgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuXG5pbXBvcnQgeyBHMlByb2dyZXNzQ29tcG9uZW50IH0gZnJvbSAnLi9taW5pLXByb2dyZXNzLmNvbXBvbmVudCc7XG5cbmNvbnN0IENPTVBPTkVOVFMgPSBbRzJQcm9ncmVzc0NvbXBvbmVudF07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIERlbG9uVXRpbE1vZHVsZSwgRGVsb25Mb2NhbGVNb2R1bGUsIE5nWm9ycm9BbnRkTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbLi4uQ09NUE9ORU5UU10sXG4gIGV4cG9ydHM6IFsuLi5DT01QT05FTlRTXSxcbn0pXG5leHBvcnQgY2xhc3MgRzJNaW5pUHJvZ3Jlc3NNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4geyBuZ01vZHVsZTogRzJNaW5pUHJvZ3Jlc3NNb2R1bGUsIHByb3ZpZGVyczogW10gfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7SUF5Q0UsNkJBQW1CLElBQXdCO1FBQXhCLFNBQUksR0FBSixJQUFJLENBQW9CO1FBN0IzQyxVQUFLLEdBQUcsU0FBUyxDQUFDO0tBNkI2QjtJQTNCL0Msc0JBQ0ksdUNBQU07Ozs7UUFEVjtZQUVFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUNyQjs7Ozs7UUFDRCxVQUFXLEtBQVU7WUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQzVEOzs7T0FIQTtJQU1ELHNCQUNJLDRDQUFXOzs7O1FBRGY7WUFFRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7U0FDMUI7Ozs7O1FBQ0QsVUFBZ0IsS0FBVTtZQUN4QixJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNyQzs7O09BSEE7SUFNRCxzQkFDSSx3Q0FBTzs7OztRQURYO1lBRUUsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQ3RCOzs7OztRQUNELFVBQVksS0FBVTtZQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDN0Q7OztPQUhBOztnQkEvQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLDhrQkFBNkM7b0JBQzdDLElBQUksRUFBRSxFQUFFLDBCQUEwQixFQUFFLE1BQU0sRUFBRTtvQkFDNUMsbUJBQW1CLEVBQUUsS0FBSztpQkFDM0I7Ozs7Z0JBUFEsa0JBQWtCOzs7d0JBU3hCLEtBQUs7eUJBR0wsS0FBSzs4QkFTTCxLQUFLOzBCQVNMLEtBQUs7O0lBVVIsMEJBQUM7Q0F0Q0Q7Ozs7Ozs7SUNJTSxVQUFVLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztBQUV4QztJQUFBO0tBU0M7Ozs7SUFIUSw0QkFBTzs7O0lBQWQ7UUFDRSxPQUFPLEVBQUUsUUFBUSxFQUFFLG9CQUFvQixFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsQ0FBQztLQUMxRDs7Z0JBUkYsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxlQUFlLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLENBQUM7b0JBQzlFLFlBQVksV0FBTSxVQUFVLENBQUM7b0JBQzdCLE9BQU8sV0FBTSxVQUFVLENBQUM7aUJBQ3pCOztJQUtELDJCQUFDO0NBVEQ7Ozs7Ozs7Ozs7Ozs7OyJ9