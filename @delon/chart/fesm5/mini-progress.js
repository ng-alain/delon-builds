import { Component, Input, NgModule } from '@angular/core';
import { toNumber, DelonUtilModule } from '@delon/util';
import { DelonLocaleService, DelonLocaleModule } from '@delon/theme';
import { __spread } from 'tslib';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { G2ProgressComponent, G2MiniProgressModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluaS1wcm9ncmVzcy5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGRlbG9uL2NoYXJ0L21pbmktcHJvZ3Jlc3MvbWluaS1wcm9ncmVzcy5jb21wb25lbnQudHMiLCJuZzovL0BkZWxvbi9jaGFydC9taW5pLXByb2dyZXNzL21pbmktcHJvZ3Jlc3MubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRvTnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgRGVsb25Mb2NhbGVTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZzItbWluaS1wcm9ncmVzcycsXG4gIHRlbXBsYXRlOiBgXG4gIDxuei10b29sdGlwIFtuelRpdGxlXT1cImkxOG4uZ2V0RGF0YSgnbWluaVByb2dyZXNzJykudGFyZ2V0ICsgdGFyZ2V0ICsgJyUnXCI+XG4gICAgPGRpdiBuei10b29sdGlwIGNsYXNzPVwiZzItbWluaS1wcm9ncmVzc19fdGFyZ2V0XCIgW25nU3R5bGVdPVwieydsZWZ0LiUnOiB0YXJnZXR9XCI+XG4gICAgICA8c3BhbiBjbGFzcz1cImcyLW1pbmktcHJvZ3Jlc3NfX3RhcmdldC1pdGVtXCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29sb3J9XCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJnMi1taW5pLXByb2dyZXNzX190YXJnZXQtaXRlbVwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbG9yfVwiPjwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgPC9uei10b29sdGlwPlxuICA8ZGl2IGNsYXNzPVwiZzItbWluaS1wcm9ncmVzc19fd3JhcFwiPlxuICAgIDxkaXYgY2xhc3M9XCJnMi1taW5pLXByb2dyZXNzX192YWx1ZVwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbG9yLCAnd2lkdGguJSc6IHBlcmNlbnQsICdoZWlnaHQucHgnOnN0cm9rZVdpZHRofVwiPjwvZGl2PlxuICA8L2Rpdj5cbiAgYCxcbiAgaG9zdDogeyAnW2NsYXNzLmcyLW1pbmktcHJvZ3Jlc3NdJzogJ3RydWUnIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBHMlByb2dyZXNzQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgY29sb3IgPSAnIzE4OTBGRic7XG5cbiAgQElucHV0KClcbiAgZ2V0IHRhcmdldCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFyZ2V0O1xuICB9XG4gIHNldCB0YXJnZXQodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX3RhcmdldCA9IE1hdGgubWluKE1hdGgubWF4KHRvTnVtYmVyKHZhbHVlKSwgMCksIDEwMCk7XG4gIH1cbiAgcHJpdmF0ZSBfdGFyZ2V0OiBudW1iZXI7XG5cbiAgQElucHV0KClcbiAgZ2V0IHN0cm9rZVdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLl9zdHJva2VXaWR0aDtcbiAgfVxuICBzZXQgc3Ryb2tlV2lkdGgodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX3N0cm9rZVdpZHRoID0gdG9OdW1iZXIodmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX3N0cm9rZVdpZHRoOiBudW1iZXI7XG5cbiAgQElucHV0KClcbiAgZ2V0IHBlcmNlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BlcmNlbnQ7XG4gIH1cbiAgc2V0IHBlcmNlbnQodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX3BlcmNlbnQgPSBNYXRoLm1pbihNYXRoLm1heCh0b051bWJlcih2YWx1ZSksIDApLCAxMDApO1xuICB9XG4gIHByaXZhdGUgX3BlcmNlbnQ6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaTE4bjogRGVsb25Mb2NhbGVTZXJ2aWNlKSB7fVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ1pvcnJvQW50ZE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xuaW1wb3J0IHsgRGVsb25VdGlsTW9kdWxlIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgRGVsb25Mb2NhbGVNb2R1bGUgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuXG5pbXBvcnQgeyBHMlByb2dyZXNzQ29tcG9uZW50IH0gZnJvbSAnLi9taW5pLXByb2dyZXNzLmNvbXBvbmVudCc7XG5cbmNvbnN0IENPTVBPTkVOVFMgPSBbRzJQcm9ncmVzc0NvbXBvbmVudF07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIERlbG9uVXRpbE1vZHVsZSwgRGVsb25Mb2NhbGVNb2R1bGUsIE5nWm9ycm9BbnRkTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbLi4uQ09NUE9ORU5UU10sXG4gIGV4cG9ydHM6IFsuLi5DT01QT05FTlRTXSxcbn0pXG5leHBvcnQgY2xhc3MgRzJNaW5pUHJvZ3Jlc3NNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4geyBuZ01vZHVsZTogRzJNaW5pUHJvZ3Jlc3NNb2R1bGUsIHByb3ZpZGVyczogW10gfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7SUFtREUsNkJBQW1CLElBQXdCO1FBQXhCLFNBQUksR0FBSixJQUFJLENBQW9CO3FCQTdCbkMsU0FBUztLQTZCOEI7SUEzQi9DLHNCQUNJLHVDQUFNOzs7O1FBRFY7WUFFRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDckI7Ozs7O1FBQ0QsVUFBVyxLQUFVO1lBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUM1RDs7O09BSEE7SUFNRCxzQkFDSSw0Q0FBVzs7OztRQURmO1lBRUUsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQzFCOzs7OztRQUNELFVBQWdCLEtBQVU7WUFDeEIsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDckM7OztPQUhBO0lBTUQsc0JBQ0ksd0NBQU87Ozs7UUFEWDtZQUVFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUN0Qjs7Ozs7UUFDRCxVQUFZLEtBQVU7WUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQzdEOzs7T0FIQTs7Z0JBekNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixRQUFRLEVBQUUsMGxCQVVUO29CQUNELElBQUksRUFBRSxFQUFFLDBCQUEwQixFQUFFLE1BQU0sRUFBRTtvQkFDNUMsbUJBQW1CLEVBQUUsS0FBSztpQkFDM0I7Ozs7Z0JBakJRLGtCQUFrQjs7O3dCQW1CeEIsS0FBSzt5QkFHTCxLQUFLOzhCQVNMLEtBQUs7MEJBU0wsS0FBSzs7OEJBMUNSOzs7Ozs7OztBQ1FBLElBQU0sVUFBVSxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQzs7Ozs7OztJQVFoQyw0QkFBTzs7O0lBQWQ7UUFDRSxPQUFPLEVBQUUsUUFBUSxFQUFFLG9CQUFvQixFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsQ0FBQztLQUMxRDs7Z0JBUkYsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxlQUFlLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLENBQUM7b0JBQzlFLFlBQVksV0FBTSxVQUFVLENBQUM7b0JBQzdCLE9BQU8sV0FBTSxVQUFVLENBQUM7aUJBQ3pCOzsrQkFkRDs7Ozs7Ozs7Ozs7Ozs7OyJ9