/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, TemplateRef } from '@angular/core';
import { toNumber, InputNumber, InputBoolean } from '@delon/util';
import { SEConfig } from './edit.config';
export class SEContainerComponent {
    //#endregion
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
                template: "<div class=\"ant-row se__container se__{{nzLayout}} se__{{size}}\" [ngStyle]=\"{'margin-left.px': -(gutter / 2), 'margin-right.px': -(gutter / 2)}\">\n  <se-title *ngIf=\"_title || _titleTpl\">\n    <ng-container *ngIf=\"_title; else _titleTpl\">{{_title}}</ng-container>\n  </se-title>\n  <ng-content></ng-content>\n</div>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9lZGl0LyIsInNvdXJjZXMiOlsiZWRpdC1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNsRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT3pDLE1BQU0sT0FBTyxvQkFBb0I7Ozs7O0lBZ0UvQixZQUFZLEdBQWE7O1FBN0R6QixXQUFNLEdBQUcsRUFBRSxDQUFDO1FBeURaLFNBQUksR0FBRyxLQUFLLENBQUM7UUFLWCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7OztJQTdERCxJQUNJLEtBQUssQ0FBQyxLQUFnQztRQUN4QyxJQUFJLEtBQUssWUFBWSxXQUFXLEVBQUU7WUFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7U0FDeEI7YUFBTTtZQUNMLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQzs7OztJQUVELElBQ0ksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLFFBQVEsS0FBSyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7OztJQUNELElBQUksTUFBTSxDQUFDLEtBQVU7UUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQzs7Ozs7SUFHRCxJQUNJLEdBQUcsQ0FBQyxLQUFVOztjQUNWLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDO1lBQUUsT0FBTztRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDakMsQ0FBQzs7OztJQUNELElBQUksR0FBRztRQUNMLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDOzs7O0lBT0QsSUFDSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBQ0QsSUFBSSxRQUFRLENBQUMsS0FBYTtRQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDdEIsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7U0FDdkI7SUFDSCxDQUFDOzs7WUFyREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw4QkFBOEI7Z0JBQ3hDLGlWQUE4QztnQkFDOUMsbUJBQW1CLEVBQUUsS0FBSzthQUMzQjs7OztZQU5RLFFBQVE7OztvQkFZZCxLQUFLO3FCQVVMLEtBQUs7a0JBU0wsS0FBSyxTQUFDLGNBQWM7eUJBV3BCLEtBQUs7dUJBSUwsS0FBSzttQkFZTCxLQUFLOzBCQUdMLEtBQUs7bUJBSUwsS0FBSzs7QUFyQk47SUFEQyxXQUFXLENBQUMsSUFBSSxDQUFDOzt3REFDQztBQW1CbkI7SUFEQyxZQUFZLEVBQUU7O3lEQUNNO0FBSXJCO0lBREMsWUFBWSxFQUFFOztrREFDRjs7O0lBekRiLHNDQUFZOztJQUNaLHlDQUE0Qjs7SUFrQjVCLHVDQUF3Qjs7SUFXeEIsb0NBQXFCOztJQUVyQiwwQ0FFbUI7O0lBWW5CLHlDQUEwQjs7SUFFMUIsb0NBQzRCOztJQUU1QiwyQ0FFcUI7O0lBRXJCLG9DQUVhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRvTnVtYmVyLCBJbnB1dE51bWJlciwgSW5wdXRCb29sZWFuIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgU0VDb25maWcgfSBmcm9tICcuL2VkaXQuY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2UtY29udGFpbmVyLCBbc2UtY29udGFpbmVyXScsXG4gIHRlbXBsYXRlVXJsOiAnLi9lZGl0LWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBTRUNvbnRhaW5lckNvbXBvbmVudCB7XG4gIC8vI3JlZ2lvbiBmaWVsZHNcblxuICBfdGl0bGUgPSAnJztcbiAgX3RpdGxlVHBsOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBASW5wdXQoKVxuICBzZXQgdGl0bGUodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgdGhpcy5fdGl0bGUgPSBudWxsO1xuICAgICAgdGhpcy5fdGl0bGVUcGwgPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdGl0bGUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgZ3V0dGVyKCkge1xuICAgIHJldHVybiB0aGlzLm56TGF5b3V0ID09PSAnaG9yaXpvbnRhbCcgPyB0aGlzLl9ndXR0ZXIgOiAwO1xuICB9XG4gIHNldCBndXR0ZXIodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX2d1dHRlciA9IHRvTnVtYmVyKHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9ndXR0ZXI6IG51bWJlcjtcblxuICBASW5wdXQoJ3NlLWNvbnRhaW5lcicpXG4gIHNldCBjb2wodmFsdWU6IGFueSkge1xuICAgIGNvbnN0IGEgPSB0b051bWJlcih2YWx1ZSwgMCk7XG4gICAgaWYgKGEgPD0gMCkgcmV0dXJuO1xuICAgIHRoaXMuX2NvbCA9IHRvTnVtYmVyKHZhbHVlLCAwKTtcbiAgfVxuICBnZXQgY29sKCkge1xuICAgIHJldHVybiB0aGlzLl9jb2w7XG4gIH1cbiAgcHJpdmF0ZSBfY29sOiBudW1iZXI7XG5cbiAgQElucHV0KClcbiAgQElucHV0TnVtYmVyKG51bGwpXG4gIGxhYmVsV2lkdGg6IG51bWJlcjtcblxuICBASW5wdXQoKVxuICBnZXQgbnpMYXlvdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX256TGF5b3V0O1xuICB9XG4gIHNldCBuekxheW91dCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbnpMYXlvdXQgPSB2YWx1ZTtcbiAgICBpZiAodmFsdWUgPT09ICdpbmxpbmUnKSB7XG4gICAgICB0aGlzLnNpemUgPSAnY29tcGFjdCc7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgX256TGF5b3V0OiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgc2l6ZTogJ2RlZmF1bHQnIHwgJ2NvbXBhY3QnO1xuXG4gIEBJbnB1dCgpXG4gIEBJbnB1dEJvb2xlYW4oKVxuICBmaXJzdFZpc3VhbDogYm9vbGVhbjtcblxuICBASW5wdXQoKVxuICBASW5wdXRCb29sZWFuKClcbiAgbGluZSA9IGZhbHNlO1xuXG4gIC8vI2VuZHJlZ2lvblxuXG4gIGNvbnN0cnVjdG9yKGNvZzogU0VDb25maWcpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvZyk7XG4gIH1cbn1cbiJdfQ==