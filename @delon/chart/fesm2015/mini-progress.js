import { Component, Input, NgModule } from '@angular/core';
import { toNumber, DelonUtilModule } from '@delon/util';
import { DelonLocaleService, DelonLocaleModule } from '@delon/theme';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class G2ProgressComponent {
    /**
     * @param {?} i18n
     */
    constructor(i18n) {
        this.i18n = i18n;
        this.color = '#1890FF';
    }
    /**
     * @return {?}
     */
    get target() {
        return this._target;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set target(value) {
        this._target = Math.min(Math.max(toNumber(value), 0), 100);
    }
    /**
     * @return {?}
     */
    get strokeWidth() {
        return this._strokeWidth;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set strokeWidth(value) {
        this._strokeWidth = toNumber(value);
    }
    /**
     * @return {?}
     */
    get percent() {
        return this._percent;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set percent(value) {
        this._percent = Math.min(Math.max(toNumber(value), 0), 100);
    }
}
G2ProgressComponent.decorators = [
    { type: Component, args: [{
                selector: 'g2-mini-progress',
                template: `
  <nz-tooltip [nzTitle]="i18n.getData('miniProgress').target + target + '%'">
    <div nz-tooltip class="g2-mini-progress__target" [ngStyle]="{'left.%': target}">
      <span class="g2-mini-progress__target-item" [ngStyle]="{'background-color': color}"></span>
      <span class="g2-mini-progress__target-item" [ngStyle]="{'background-color': color}"></span>
    </div>
  </nz-tooltip>
  <div class="g2-mini-progress__wrap">
    <div class="g2-mini-progress__value" [ngStyle]="{'background-color': color, 'width.%': percent, 'height.px':strokeWidth}"></div>
  </div>
  `,
                host: { '[class.g2-mini-progress]': 'true' },
                preserveWhitespaces: false
            }] }
];
/** @nocollapse */
G2ProgressComponent.ctorParameters = () => [
    { type: DelonLocaleService }
];
G2ProgressComponent.propDecorators = {
    color: [{ type: Input }],
    target: [{ type: Input }],
    strokeWidth: [{ type: Input }],
    percent: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [G2ProgressComponent];
class G2MiniProgressModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: G2MiniProgressModule, providers: [] };
    }
}
G2MiniProgressModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, DelonUtilModule, DelonLocaleModule, NgZorroAntdModule],
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

export { G2ProgressComponent, G2MiniProgressModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluaS1wcm9ncmVzcy5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGRlbG9uL2NoYXJ0L21pbmktcHJvZ3Jlc3MvbWluaS1wcm9ncmVzcy5jb21wb25lbnQudHMiLCJuZzovL0BkZWxvbi9jaGFydC9taW5pLXByb2dyZXNzL21pbmktcHJvZ3Jlc3MubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgdG9OdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XHJcbmltcG9ydCB7IERlbG9uTG9jYWxlU2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2cyLW1pbmktcHJvZ3Jlc3MnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPG56LXRvb2x0aXAgW256VGl0bGVdPVwiaTE4bi5nZXREYXRhKCdtaW5pUHJvZ3Jlc3MnKS50YXJnZXQgKyB0YXJnZXQgKyAnJSdcIj5cclxuICAgIDxkaXYgbnotdG9vbHRpcCBjbGFzcz1cImcyLW1pbmktcHJvZ3Jlc3NfX3RhcmdldFwiIFtuZ1N0eWxlXT1cInsnbGVmdC4lJzogdGFyZ2V0fVwiPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImcyLW1pbmktcHJvZ3Jlc3NfX3RhcmdldC1pdGVtXCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29sb3J9XCI+PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImcyLW1pbmktcHJvZ3Jlc3NfX3RhcmdldC1pdGVtXCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29sb3J9XCI+PC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9uei10b29sdGlwPlxyXG4gIDxkaXYgY2xhc3M9XCJnMi1taW5pLXByb2dyZXNzX193cmFwXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZzItbWluaS1wcm9ncmVzc19fdmFsdWVcIiBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmQtY29sb3InOiBjb2xvciwgJ3dpZHRoLiUnOiBwZXJjZW50LCAnaGVpZ2h0LnB4JzpzdHJva2VXaWR0aH1cIj48L2Rpdj5cclxuICA8L2Rpdj5cclxuICBgLFxyXG4gIGhvc3Q6IHsgJ1tjbGFzcy5nMi1taW5pLXByb2dyZXNzXSc6ICd0cnVlJyB9LFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRzJQcm9ncmVzc0NvbXBvbmVudCB7XHJcbiAgQElucHV0KClcclxuICBjb2xvciA9ICcjMTg5MEZGJztcclxuXHJcbiAgQElucHV0KClcclxuICBnZXQgdGFyZ2V0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3RhcmdldDtcclxuICB9XHJcbiAgc2V0IHRhcmdldCh2YWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLl90YXJnZXQgPSBNYXRoLm1pbihNYXRoLm1heCh0b051bWJlcih2YWx1ZSksIDApLCAxMDApO1xyXG4gIH1cclxuICBwcml2YXRlIF90YXJnZXQ6IG51bWJlcjtcclxuXHJcbiAgQElucHV0KClcclxuICBnZXQgc3Ryb2tlV2lkdGgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc3Ryb2tlV2lkdGg7XHJcbiAgfVxyXG4gIHNldCBzdHJva2VXaWR0aCh2YWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLl9zdHJva2VXaWR0aCA9IHRvTnVtYmVyKHZhbHVlKTtcclxuICB9XHJcbiAgcHJpdmF0ZSBfc3Ryb2tlV2lkdGg6IG51bWJlcjtcclxuXHJcbiAgQElucHV0KClcclxuICBnZXQgcGVyY2VudCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9wZXJjZW50O1xyXG4gIH1cclxuICBzZXQgcGVyY2VudCh2YWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLl9wZXJjZW50ID0gTWF0aC5taW4oTWF0aC5tYXgodG9OdW1iZXIodmFsdWUpLCAwKSwgMTAwKTtcclxuICB9XHJcbiAgcHJpdmF0ZSBfcGVyY2VudDogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaTE4bjogRGVsb25Mb2NhbGVTZXJ2aWNlKSB7fVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nWm9ycm9BbnRkTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XHJcbmltcG9ydCB7IERlbG9uVXRpbE1vZHVsZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcclxuaW1wb3J0IHsgRGVsb25Mb2NhbGVNb2R1bGUgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xyXG5cclxuaW1wb3J0IHsgRzJQcm9ncmVzc0NvbXBvbmVudCB9IGZyb20gJy4vbWluaS1wcm9ncmVzcy5jb21wb25lbnQnO1xyXG5cclxuY29uc3QgQ09NUE9ORU5UUyA9IFtHMlByb2dyZXNzQ29tcG9uZW50XTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRGVsb25VdGlsTW9kdWxlLCBEZWxvbkxvY2FsZU1vZHVsZSwgTmdab3Jyb0FudGRNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogWy4uLkNPTVBPTkVOVFNdLFxyXG4gIGV4cG9ydHM6IFsuLi5DT01QT05FTlRTXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEcyTWluaVByb2dyZXNzTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7IG5nTW9kdWxlOiBHMk1pbmlQcm9ncmVzc01vZHVsZSwgcHJvdmlkZXJzOiBbXSB9O1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0lBbURFLFlBQW1CLElBQXdCO1FBQXhCLFNBQUksR0FBSixJQUFJLENBQW9CO3FCQTdCbkMsU0FBUztLQTZCOEI7Ozs7SUEzQi9DLElBQ0ksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztLQUNyQjs7Ozs7SUFDRCxJQUFJLE1BQU0sQ0FBQyxLQUFVO1FBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztLQUM1RDs7OztJQUdELElBQ0ksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztLQUMxQjs7Ozs7SUFDRCxJQUFJLFdBQVcsQ0FBQyxLQUFVO1FBQ3hCLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3JDOzs7O0lBR0QsSUFDSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0tBQ3RCOzs7OztJQUNELElBQUksT0FBTyxDQUFDLEtBQVU7UUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQzdEOzs7WUE1Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRTs7Ozs7Ozs7OztHQVVUO2dCQUNELElBQUksRUFBRSxFQUFFLDBCQUEwQixFQUFFLE1BQU0sRUFBRTtnQkFDNUMsbUJBQW1CLEVBQUUsS0FBSzthQUMzQjs7OztZQWpCUSxrQkFBa0I7OztvQkFtQnhCLEtBQUs7cUJBR0wsS0FBSzswQkFTTCxLQUFLO3NCQVNMLEtBQUs7Ozs7Ozs7QUMxQ1I7QUFRQSxNQUFNLFVBQVUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFPekM7Ozs7SUFDRSxPQUFPLE9BQU87UUFDWixPQUFPLEVBQUUsUUFBUSxFQUFFLG9CQUFvQixFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsQ0FBQztLQUMxRDs7O1lBUkYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxlQUFlLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLENBQUM7Z0JBQzlFLFlBQVksRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDO2dCQUM3QixPQUFPLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQzthQUN6Qjs7Ozs7Ozs7Ozs7Ozs7OyJ9