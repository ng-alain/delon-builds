/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { toNumber } from '@delon/util';
import { DelonLocaleService } from '@delon/theme';
export class G2ProgressComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluaS1wcm9ncmVzcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vY2hhcnQvbWluaS1wcm9ncmVzcy8iLCJzb3VyY2VzIjpbIm1pbmktcHJvZ3Jlc3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQWtCbEQsTUFBTSxPQUFPLG1CQUFtQjs7OztJQStCOUIsWUFBbUIsSUFBd0I7UUFBeEIsU0FBSSxHQUFKLElBQUksQ0FBb0I7UUE3QjNDLFVBQUssR0FBRyxTQUFTLENBQUM7SUE2QjRCLENBQUM7Ozs7SUEzQi9DLElBQ0ksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDOzs7OztJQUNELElBQUksTUFBTSxDQUFDLEtBQVU7UUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzdELENBQUM7Ozs7SUFHRCxJQUNJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFDRCxJQUFJLFdBQVcsQ0FBQyxLQUFVO1FBQ3hCLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFHRCxJQUNJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFDRCxJQUFJLE9BQU8sQ0FBQyxLQUFVO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7WUE1Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRTs7Ozs7Ozs7OztHQVVUO2dCQUNELElBQUksRUFBRSxFQUFFLDBCQUEwQixFQUFFLE1BQU0sRUFBRTtnQkFDNUMsbUJBQW1CLEVBQUUsS0FBSzthQUMzQjs7OztZQWpCUSxrQkFBa0I7OztvQkFtQnhCLEtBQUs7cUJBR0wsS0FBSzswQkFTTCxLQUFLO3NCQVNMLEtBQUs7Ozs7SUFyQk4sb0NBQ2tCOztJQVNsQixzQ0FBd0I7O0lBU3hCLDJDQUE2Qjs7SUFTN0IsdUNBQXlCOztJQUViLG1DQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRvTnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgRGVsb25Mb2NhbGVTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZzItbWluaS1wcm9ncmVzcycsXG4gIHRlbXBsYXRlOiBgXG4gIDxuei10b29sdGlwIFtuelRpdGxlXT1cImkxOG4uZ2V0RGF0YSgnbWluaVByb2dyZXNzJykudGFyZ2V0ICsgdGFyZ2V0ICsgJyUnXCI+XG4gICAgPGRpdiBuei10b29sdGlwIGNsYXNzPVwiZzItbWluaS1wcm9ncmVzc19fdGFyZ2V0XCIgW25nU3R5bGVdPVwieydsZWZ0LiUnOiB0YXJnZXR9XCI+XG4gICAgICA8c3BhbiBjbGFzcz1cImcyLW1pbmktcHJvZ3Jlc3NfX3RhcmdldC1pdGVtXCIgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29sb3J9XCI+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJnMi1taW5pLXByb2dyZXNzX190YXJnZXQtaXRlbVwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbG9yfVwiPjwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgPC9uei10b29sdGlwPlxuICA8ZGl2IGNsYXNzPVwiZzItbWluaS1wcm9ncmVzc19fd3JhcFwiPlxuICAgIDxkaXYgY2xhc3M9XCJnMi1taW5pLXByb2dyZXNzX192YWx1ZVwiIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGNvbG9yLCAnd2lkdGguJSc6IHBlcmNlbnQsICdoZWlnaHQucHgnOnN0cm9rZVdpZHRofVwiPjwvZGl2PlxuICA8L2Rpdj5cbiAgYCxcbiAgaG9zdDogeyAnW2NsYXNzLmcyLW1pbmktcHJvZ3Jlc3NdJzogJ3RydWUnIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBHMlByb2dyZXNzQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgY29sb3IgPSAnIzE4OTBGRic7XG5cbiAgQElucHV0KClcbiAgZ2V0IHRhcmdldCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFyZ2V0O1xuICB9XG4gIHNldCB0YXJnZXQodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX3RhcmdldCA9IE1hdGgubWluKE1hdGgubWF4KHRvTnVtYmVyKHZhbHVlKSwgMCksIDEwMCk7XG4gIH1cbiAgcHJpdmF0ZSBfdGFyZ2V0OiBudW1iZXI7XG5cbiAgQElucHV0KClcbiAgZ2V0IHN0cm9rZVdpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLl9zdHJva2VXaWR0aDtcbiAgfVxuICBzZXQgc3Ryb2tlV2lkdGgodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX3N0cm9rZVdpZHRoID0gdG9OdW1iZXIodmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX3N0cm9rZVdpZHRoOiBudW1iZXI7XG5cbiAgQElucHV0KClcbiAgZ2V0IHBlcmNlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BlcmNlbnQ7XG4gIH1cbiAgc2V0IHBlcmNlbnQodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX3BlcmNlbnQgPSBNYXRoLm1pbihNYXRoLm1heCh0b051bWJlcih2YWx1ZSksIDApLCAxMDApO1xuICB9XG4gIHByaXZhdGUgX3BlcmNlbnQ6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaTE4bjogRGVsb25Mb2NhbGVTZXJ2aWNlKSB7fVxufVxuIl19