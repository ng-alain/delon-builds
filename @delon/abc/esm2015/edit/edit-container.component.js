/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, Input, } from '@angular/core';
import { toNumber, InputBoolean, InputNumber } from '@delon/util';
import { SEConfig } from './edit.config';
export class SEContainerComponent {
    //#endregion
    /**
     * @param {?} cog
     */
    constructor(cog) {
        this.line = false;
        Object.assign(this, cog);
    }
    /**
     * @return {?}
     */
    get gutter() {
        return this.nzLayout === 'horizontal' ? this._gutter : 0;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set gutter(value) {
        this._gutter = toNumber(value);
    }
    /**
     * @return {?}
     */
    get nzLayout() {
        return this._nzLayout;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzLayout(value) {
        this._nzLayout = value;
        if (value === 'inline') {
            this.size = 'compact';
        }
    }
}
SEContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'se-container, [se-container]',
                template: "<div class=\"ant-row se__container se__{{nzLayout}} se__{{size}}\" [ngStyle]=\"{'margin-left.px': -(gutter / 2), 'margin-right.px': -(gutter / 2)}\">\n  <se-title *ngIf=\"title\">\n    <ng-container *stringTemplateOutlet=\"title\">{{ title }}</ng-container>\n  </se-title>\n  <ng-content></ng-content>\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
SEContainerComponent.ctorParameters = () => [
    { type: SEConfig }
];
SEContainerComponent.propDecorators = {
    colInCon: [{ type: Input, args: ['se-container',] }],
    col: [{ type: Input }],
    labelWidth: [{ type: Input }],
    title: [{ type: Input }],
    gutter: [{ type: Input }],
    nzLayout: [{ type: Input }],
    size: [{ type: Input }],
    firstVisual: [{ type: Input }],
    line: [{ type: Input }]
};
tslib_1.__decorate([
    InputNumber(null),
    tslib_1.__metadata("design:type", Number)
], SEContainerComponent.prototype, "colInCon", void 0);
tslib_1.__decorate([
    InputNumber(null),
    tslib_1.__metadata("design:type", Number)
], SEContainerComponent.prototype, "col", void 0);
tslib_1.__decorate([
    InputNumber(null),
    tslib_1.__metadata("design:type", Number)
], SEContainerComponent.prototype, "labelWidth", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], SEContainerComponent.prototype, "firstVisual", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], SEContainerComponent.prototype, "line", void 0);
if (false) {
    /** @type {?} */
    SEContainerComponent.prototype.colInCon;
    /** @type {?} */
    SEContainerComponent.prototype.col;
    /** @type {?} */
    SEContainerComponent.prototype.labelWidth;
    /** @type {?} */
    SEContainerComponent.prototype.title;
    /** @type {?} */
    SEContainerComponent.prototype._gutter;
    /** @type {?} */
    SEContainerComponent.prototype._nzLayout;
    /** @type {?} */
    SEContainerComponent.prototype.size;
    /** @type {?} */
    SEContainerComponent.prototype.firstVisual;
    /** @type {?} */
    SEContainerComponent.prototype.line;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9lZGl0LyIsInNvdXJjZXMiOlsiZWRpdC1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsS0FBSyxHQUVOLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNsRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT3pDLE1BQU0sT0FBTyxvQkFBb0I7Ozs7O0lBbUMvQixZQUFZLEdBQWE7UUFKQSxTQUFJLEdBQUcsS0FBSyxDQUFDO1FBS3BDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzNCLENBQUM7Ozs7SUE3QkQsSUFDSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsUUFBUSxLQUFLLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7Ozs7O0lBQ0QsSUFBSSxNQUFNLENBQUMsS0FBYTtRQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7O0lBR0QsSUFDSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBQ0QsSUFBSSxRQUFRLENBQUMsS0FBYTtRQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDdEIsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7U0FDdkI7SUFDSCxDQUFDOzs7WUEvQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw4QkFBOEI7Z0JBQ3hDLGlVQUE4QztnQkFDOUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUFOUSxRQUFROzs7dUJBVWQsS0FBSyxTQUFDLGNBQWM7a0JBQ3BCLEtBQUs7eUJBQ0wsS0FBSztvQkFDTCxLQUFLO3FCQUVMLEtBQUs7dUJBU0wsS0FBSzttQkFZTCxLQUFLOzBCQUNMLEtBQUs7bUJBQ0wsS0FBSzs7QUE1Qm9DO0lBQWxCLFdBQVcsQ0FBQyxJQUFJLENBQUM7O3NEQUFvQjtBQUNqQztJQUFsQixXQUFXLENBQUMsSUFBSSxDQUFDOztpREFBZTtBQUNkO0lBQWxCLFdBQVcsQ0FBQyxJQUFJLENBQUM7O3dEQUFvQjtBQXlCdEI7SUFBZixZQUFZLEVBQUU7O3lEQUFzQjtBQUNyQjtJQUFmLFlBQVksRUFBRTs7a0RBQWM7OztJQTVCdEMsd0NBQTZEOztJQUM3RCxtQ0FBMEM7O0lBQzFDLDBDQUErQzs7SUFDL0MscUNBQTJDOztJQVMzQyx1Q0FBd0I7O0lBWXhCLHlDQUEwQjs7SUFFMUIsb0NBQXFDOztJQUNyQywyQ0FBOEM7O0lBQzlDLG9DQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBUZW1wbGF0ZVJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSRVBfVFlQRSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyB0b051bWJlciwgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IFNFQ29uZmlnIH0gZnJvbSAnLi9lZGl0LmNvbmZpZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NlLWNvbnRhaW5lciwgW3NlLWNvbnRhaW5lcl0nLFxuICB0ZW1wbGF0ZVVybDogJy4vZWRpdC1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgU0VDb250YWluZXJDb21wb25lbnQge1xuICAvLyNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KCdzZS1jb250YWluZXInKSBASW5wdXROdW1iZXIobnVsbCkgY29sSW5Db246IFJFUF9UWVBFO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIobnVsbCkgY29sOiBSRVBfVFlQRTtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKG51bGwpIGxhYmVsV2lkdGg6IG51bWJlcjtcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIEBJbnB1dCgpXG4gIGdldCBndXR0ZXIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5uekxheW91dCA9PT0gJ2hvcml6b250YWwnID8gdGhpcy5fZ3V0dGVyIDogMDtcbiAgfVxuICBzZXQgZ3V0dGVyKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9ndXR0ZXIgPSB0b051bWJlcih2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfZ3V0dGVyOiBudW1iZXI7XG5cbiAgQElucHV0KClcbiAgZ2V0IG56TGF5b3V0KCkge1xuICAgIHJldHVybiB0aGlzLl9uekxheW91dDtcbiAgfVxuICBzZXQgbnpMYXlvdXQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX256TGF5b3V0ID0gdmFsdWU7XG4gICAgaWYgKHZhbHVlID09PSAnaW5saW5lJykge1xuICAgICAgdGhpcy5zaXplID0gJ2NvbXBhY3QnO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIF9uekxheW91dDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIHNpemU6ICdkZWZhdWx0JyB8ICdjb21wYWN0JztcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGZpcnN0VmlzdWFsOiBib29sZWFuO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbGluZSA9IGZhbHNlO1xuXG4gIC8vI2VuZHJlZ2lvblxuXG4gIGNvbnN0cnVjdG9yKGNvZzogU0VDb25maWcpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvZyk7XG4gIH1cbn1cbiJdfQ==