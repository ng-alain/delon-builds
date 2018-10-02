/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, TemplateRef } from '@angular/core';
import { toNumber, InputNumber, InputBoolean } from '@delon/util';
import { SEConfig } from './edit.config';
export class SEContainerComponent {
    /**
     * @param {?} cog
     */
    constructor(cog) {
        //#region fields
        this._title = '';
        this.line = false;
        Object.assign(this, cog);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set title(value) {
        if (value instanceof TemplateRef) {
            this._title = null;
            this._titleTpl = value;
        }
        else {
            this._title = value;
        }
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
     * @param {?} value
     * @return {?}
     */
    set col(value) {
        /** @type {?} */
        const a = toNumber(value, 0);
        if (a <= 0)
            return;
        this._col = toNumber(value, 0);
    }
    /**
     * @return {?}
     */
    get col() {
        return this._col;
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
                template: "<div class=\"ant-row se__container se__{{nzLayout}} se__{{size}}\" [ngStyle]=\"{'margin-left.px': -(gutter / 2), 'margin-right.px': -(gutter / 2)}\">\r\n  <se-title *ngIf=\"_title || _titleTpl\">\r\n    <ng-container *ngIf=\"_title; else _titleTpl\">{{_title}}</ng-container>\r\n  </se-title>\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                preserveWhitespaces: false
            }] }
];
/** @nocollapse */
SEContainerComponent.ctorParameters = () => [
    { type: SEConfig }
];
SEContainerComponent.propDecorators = {
    title: [{ type: Input }],
    gutter: [{ type: Input }],
    col: [{ type: Input, args: ['se-container',] }],
    labelWidth: [{ type: Input }],
    nzLayout: [{ type: Input }],
    size: [{ type: Input }],
    firstVisual: [{ type: Input }],
    line: [{ type: Input }]
};
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
    SEContainerComponent.prototype._title;
    /** @type {?} */
    SEContainerComponent.prototype._titleTpl;
    /** @type {?} */
    SEContainerComponent.prototype._gutter;
    /** @type {?} */
    SEContainerComponent.prototype._col;
    /** @type {?} */
    SEContainerComponent.prototype.labelWidth;
    /** @type {?} */
    SEContainerComponent.prototype._nzLayout;
    /** @type {?} */
    SEContainerComponent.prototype.size;
    /** @type {?} */
    SEContainerComponent.prototype.firstVisual;
    /** @type {?} */
    SEContainerComponent.prototype.line;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9lZGl0LyIsInNvdXJjZXMiOlsiZWRpdC1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNsRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT3pDLE1BQU07Ozs7SUFnRUosWUFBWSxHQUFhOztzQkE3RGhCLEVBQUU7b0JBeURKLEtBQUs7UUFLVixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztLQUMxQjs7Ozs7SUE3REQsSUFDSSxLQUFLLENBQUMsS0FBZ0M7UUFDeEMsSUFBSSxLQUFLLFlBQVksV0FBVyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1NBQ3hCO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUNyQjtLQUNGOzs7O0lBRUQsSUFDSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsUUFBUSxLQUFLLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzFEOzs7OztJQUNELElBQUksTUFBTSxDQUFDLEtBQVU7UUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDaEM7Ozs7O0lBR0QsSUFDSSxHQUFHLENBQUMsS0FBVTs7UUFDaEIsTUFBTSxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDO1lBQUUsT0FBTztRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDaEM7Ozs7SUFDRCxJQUFJLEdBQUc7UUFDTCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7S0FDbEI7Ozs7SUFPRCxJQUNJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7S0FDdkI7Ozs7O0lBQ0QsSUFBSSxRQUFRLENBQUMsS0FBYTtRQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDdEIsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7U0FDdkI7S0FDRjs7O1lBckRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsOEJBQThCO2dCQUN4Qyw2VkFBOEM7Z0JBQzlDLG1CQUFtQixFQUFFLEtBQUs7YUFDM0I7Ozs7WUFOUSxRQUFROzs7b0JBWWQsS0FBSztxQkFVTCxLQUFLO2tCQVNMLEtBQUssU0FBQyxjQUFjO3lCQVdwQixLQUFLO3VCQUlMLEtBQUs7bUJBWUwsS0FBSzswQkFHTCxLQUFLO21CQUlMLEtBQUs7OztJQXRCTCxXQUFXLENBQUMsSUFBSSxDQUFDOzs7O0lBbUJqQixZQUFZLEVBQUU7Ozs7SUFJZCxZQUFZLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyB0b051bWJlciwgSW5wdXROdW1iZXIsIElucHV0Qm9vbGVhbiB9IGZyb20gJ0BkZWxvbi91dGlsJztcclxuaW1wb3J0IHsgU0VDb25maWcgfSBmcm9tICcuL2VkaXQuY29uZmlnJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc2UtY29udGFpbmVyLCBbc2UtY29udGFpbmVyXScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2VkaXQtY29udGFpbmVyLmNvbXBvbmVudC5odG1sJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNFQ29udGFpbmVyQ29tcG9uZW50IHtcclxuICAvLyNyZWdpb24gZmllbGRzXHJcblxyXG4gIF90aXRsZSA9ICcnO1xyXG4gIF90aXRsZVRwbDogVGVtcGxhdGVSZWY8YW55PjtcclxuICBASW5wdXQoKVxyXG4gIHNldCB0aXRsZSh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pikge1xyXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcclxuICAgICAgdGhpcy5fdGl0bGUgPSBudWxsO1xyXG4gICAgICB0aGlzLl90aXRsZVRwbCA9IHZhbHVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fdGl0bGUgPSB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IGd1dHRlcigpIHtcclxuICAgIHJldHVybiB0aGlzLm56TGF5b3V0ID09PSAnaG9yaXpvbnRhbCcgPyB0aGlzLl9ndXR0ZXIgOiAwO1xyXG4gIH1cclxuICBzZXQgZ3V0dGVyKHZhbHVlOiBhbnkpIHtcclxuICAgIHRoaXMuX2d1dHRlciA9IHRvTnVtYmVyKHZhbHVlKTtcclxuICB9XHJcbiAgcHJpdmF0ZSBfZ3V0dGVyOiBudW1iZXI7XHJcblxyXG4gIEBJbnB1dCgnc2UtY29udGFpbmVyJylcclxuICBzZXQgY29sKHZhbHVlOiBhbnkpIHtcclxuICAgIGNvbnN0IGEgPSB0b051bWJlcih2YWx1ZSwgMCk7XHJcbiAgICBpZiAoYSA8PSAwKSByZXR1cm47XHJcbiAgICB0aGlzLl9jb2wgPSB0b051bWJlcih2YWx1ZSwgMCk7XHJcbiAgfVxyXG4gIGdldCBjb2woKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29sO1xyXG4gIH1cclxuICBwcml2YXRlIF9jb2w6IG51bWJlcjtcclxuXHJcbiAgQElucHV0KClcclxuICBASW5wdXROdW1iZXIobnVsbClcclxuICBsYWJlbFdpZHRoOiBudW1iZXI7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IG56TGF5b3V0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX256TGF5b3V0O1xyXG4gIH1cclxuICBzZXQgbnpMYXlvdXQodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fbnpMYXlvdXQgPSB2YWx1ZTtcclxuICAgIGlmICh2YWx1ZSA9PT0gJ2lubGluZScpIHtcclxuICAgICAgdGhpcy5zaXplID0gJ2NvbXBhY3QnO1xyXG4gICAgfVxyXG4gIH1cclxuICBwcml2YXRlIF9uekxheW91dDogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNpemU6ICdkZWZhdWx0JyB8ICdjb21wYWN0JztcclxuXHJcbiAgQElucHV0KClcclxuICBASW5wdXRCb29sZWFuKClcclxuICBmaXJzdFZpc3VhbDogYm9vbGVhbjtcclxuXHJcbiAgQElucHV0KClcclxuICBASW5wdXRCb29sZWFuKClcclxuICBsaW5lID0gZmFsc2U7XHJcblxyXG4gIC8vI2VuZHJlZ2lvblxyXG5cclxuICBjb25zdHJ1Y3Rvcihjb2c6IFNFQ29uZmlnKSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvZyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==