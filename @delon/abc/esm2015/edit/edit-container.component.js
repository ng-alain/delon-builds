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
        Object.assign(this, Object.assign({}, new SEConfig(), cog));
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
                changeDetection: ChangeDetectionStrategy.OnPush,
                exportAs: 'seContainer'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9lZGl0LyIsInNvdXJjZXMiOlsiZWRpdC1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsS0FBSyxHQUVOLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNsRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUXpDLE1BQU0sT0FBTyxvQkFBb0I7Ozs7O0lBbUMvQixZQUFZLEdBQWE7UUFKQSxTQUFJLEdBQUcsS0FBSyxDQUFDO1FBS3BDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxvQkFBTyxJQUFJLFFBQVEsRUFBRSxFQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ3BELENBQUM7Ozs7SUE3QkQsSUFDSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsUUFBUSxLQUFLLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7Ozs7O0lBQ0QsSUFBSSxNQUFNLENBQUMsS0FBYTtRQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7O0lBR0QsSUFDSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBQ0QsSUFBSSxRQUFRLENBQUMsS0FBYTtRQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDdEIsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7U0FDdkI7SUFDSCxDQUFDOzs7WUFoQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw4QkFBOEI7Z0JBQ3hDLGlVQUE4QztnQkFDOUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFFBQVEsRUFBRSxhQUFhO2FBQ3hCOzs7O1lBUFEsUUFBUTs7O3VCQVdkLEtBQUssU0FBQyxjQUFjO2tCQUNwQixLQUFLO3lCQUNMLEtBQUs7b0JBQ0wsS0FBSztxQkFFTCxLQUFLO3VCQVNMLEtBQUs7bUJBWUwsS0FBSzswQkFDTCxLQUFLO21CQUNMLEtBQUs7O0FBNUJvQztJQUFsQixXQUFXLENBQUMsSUFBSSxDQUFDOztzREFBb0I7QUFDakM7SUFBbEIsV0FBVyxDQUFDLElBQUksQ0FBQzs7aURBQWU7QUFDZDtJQUFsQixXQUFXLENBQUMsSUFBSSxDQUFDOzt3REFBb0I7QUF5QnRCO0lBQWYsWUFBWSxFQUFFOzt5REFBc0I7QUFDckI7SUFBZixZQUFZLEVBQUU7O2tEQUFjOzs7SUE1QnRDLHdDQUE2RDs7SUFDN0QsbUNBQTBDOztJQUMxQywwQ0FBK0M7O0lBQy9DLHFDQUEyQzs7SUFTM0MsdUNBQXdCOztJQVl4Qix5Q0FBMEI7O0lBRTFCLG9DQUFxQzs7SUFDckMsMkNBQThDOztJQUM5QyxvQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgVGVtcGxhdGVSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUkVQX1RZUEUgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgdG9OdW1iZXIsIElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBTRUNvbmZpZyB9IGZyb20gJy4vZWRpdC5jb25maWcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZS1jb250YWluZXIsIFtzZS1jb250YWluZXJdJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2VkaXQtY29udGFpbmVyLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGV4cG9ydEFzOiAnc2VDb250YWluZXInLFxufSlcbmV4cG9ydCBjbGFzcyBTRUNvbnRhaW5lckNvbXBvbmVudCB7XG4gIC8vI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoJ3NlLWNvbnRhaW5lcicpIEBJbnB1dE51bWJlcihudWxsKSBjb2xJbkNvbjogUkVQX1RZUEU7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcihudWxsKSBjb2w6IFJFUF9UWVBFO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIobnVsbCkgbGFiZWxXaWR0aDogbnVtYmVyO1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgQElucHV0KClcbiAgZ2V0IGd1dHRlcigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm56TGF5b3V0ID09PSAnaG9yaXpvbnRhbCcgPyB0aGlzLl9ndXR0ZXIgOiAwO1xuICB9XG4gIHNldCBndXR0ZXIodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2d1dHRlciA9IHRvTnVtYmVyKHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9ndXR0ZXI6IG51bWJlcjtcblxuICBASW5wdXQoKVxuICBnZXQgbnpMYXlvdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX256TGF5b3V0O1xuICB9XG4gIHNldCBuekxheW91dCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbnpMYXlvdXQgPSB2YWx1ZTtcbiAgICBpZiAodmFsdWUgPT09ICdpbmxpbmUnKSB7XG4gICAgICB0aGlzLnNpemUgPSAnY29tcGFjdCc7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgX256TGF5b3V0OiBzdHJpbmc7XG5cbiAgQElucHV0KCkgc2l6ZTogJ2RlZmF1bHQnIHwgJ2NvbXBhY3QnO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZmlyc3RWaXN1YWw6IGJvb2xlYW47XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBsaW5lID0gZmFsc2U7XG5cbiAgLy8jZW5kcmVnaW9uXG5cbiAgY29uc3RydWN0b3IoY29nOiBTRUNvbmZpZykge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgeyAuLi5uZXcgU0VDb25maWcoKSwgLi4uY29nfSk7XG4gIH1cbn1cbiJdfQ==