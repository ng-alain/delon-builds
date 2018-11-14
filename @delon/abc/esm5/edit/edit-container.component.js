/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, TemplateRef } from '@angular/core';
import { toNumber, InputNumber, InputBoolean } from '@delon/util';
import { SEConfig } from './edit.config';
var SEContainerComponent = /** @class */ (function () {
    //#endregion
    function SEContainerComponent(cog) {
        //#region fields
        this._title = '';
        this.line = false;
        Object.assign(this, cog);
    }
    Object.defineProperty(SEContainerComponent.prototype, "title", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value instanceof TemplateRef) {
                this._title = null;
                this._titleTpl = value;
            }
            else {
                this._title = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SEContainerComponent.prototype, "gutter", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzLayout === 'horizontal' ? this._gutter : 0;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._gutter = toNumber(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SEContainerComponent.prototype, "col", {
        get: /**
         * @return {?}
         */
        function () {
            return this._col;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var a = toNumber(value, 0);
            if (a <= 0)
                return;
            this._col = toNumber(value, 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SEContainerComponent.prototype, "nzLayout", {
        get: /**
         * @return {?}
         */
        function () {
            return this._nzLayout;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._nzLayout = value;
            if (value === 'inline') {
                this.size = 'compact';
            }
        },
        enumerable: true,
        configurable: true
    });
    SEContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'se-container, [se-container]',
                    template: "<div class=\"ant-row se__container se__{{nzLayout}} se__{{size}}\" [ngStyle]=\"{'margin-left.px': -(gutter / 2), 'margin-right.px': -(gutter / 2)}\">\n  <se-title *ngIf=\"_title || _titleTpl\">\n    <ng-container *ngIf=\"_title; else _titleTpl\">{{_title}}</ng-container>\n  </se-title>\n  <ng-content></ng-content>\n</div>\n",
                    preserveWhitespaces: false
                }] }
    ];
    /** @nocollapse */
    SEContainerComponent.ctorParameters = function () { return [
        { type: SEConfig }
    ]; };
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
    return SEContainerComponent;
}());
export { SEContainerComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9lZGl0LyIsInNvdXJjZXMiOlsiZWRpdC1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNsRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDO0lBbUVFLFlBQVk7SUFFWiw4QkFBWSxHQUFhOztRQTdEekIsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQXlEWixTQUFJLEdBQUcsS0FBSyxDQUFDO1FBS1gsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQTdERCxzQkFDSSx1Q0FBSzs7Ozs7UUFEVCxVQUNVLEtBQWdDO1lBQ3hDLElBQUksS0FBSyxZQUFZLFdBQVcsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2FBQ3hCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2FBQ3JCO1FBQ0gsQ0FBQzs7O09BQUE7SUFFRCxzQkFDSSx3Q0FBTTs7OztRQURWO1lBRUUsT0FBTyxJQUFJLENBQUMsUUFBUSxLQUFLLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNELENBQUM7Ozs7O1FBQ0QsVUFBVyxLQUFVO1lBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLENBQUM7OztPQUhBO0lBTUQsc0JBQ0kscUNBQUc7Ozs7UUFLUDtZQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztRQUNuQixDQUFDOzs7OztRQVJELFVBQ1EsS0FBVTs7Z0JBQ1YsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQUUsT0FBTztZQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDakMsQ0FBQzs7O09BQUE7SUFVRCxzQkFDSSwwQ0FBUTs7OztRQURaO1lBRUUsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3hCLENBQUM7Ozs7O1FBQ0QsVUFBYSxLQUFhO1lBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLElBQUksS0FBSyxLQUFLLFFBQVEsRUFBRTtnQkFDdEIsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7YUFDdkI7UUFDSCxDQUFDOzs7T0FOQTs7Z0JBL0NGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsOEJBQThCO29CQUN4QyxpVkFBOEM7b0JBQzlDLG1CQUFtQixFQUFFLEtBQUs7aUJBQzNCOzs7O2dCQU5RLFFBQVE7Ozt3QkFZZCxLQUFLO3lCQVVMLEtBQUs7c0JBU0wsS0FBSyxTQUFDLGNBQWM7NkJBV3BCLEtBQUs7MkJBSUwsS0FBSzt1QkFZTCxLQUFLOzhCQUdMLEtBQUs7dUJBSUwsS0FBSzs7SUFyQk47UUFEQyxXQUFXLENBQUMsSUFBSSxDQUFDOzs0REFDQztJQW1CbkI7UUFEQyxZQUFZLEVBQUU7OzZEQUNNO0lBSXJCO1FBREMsWUFBWSxFQUFFOztzREFDRjtJQU9mLDJCQUFDO0NBQUEsQUF4RUQsSUF3RUM7U0FuRVksb0JBQW9COzs7SUFHL0Isc0NBQVk7O0lBQ1oseUNBQTRCOztJQWtCNUIsdUNBQXdCOztJQVd4QixvQ0FBcUI7O0lBRXJCLDBDQUVtQjs7SUFZbkIseUNBQTBCOztJQUUxQixvQ0FDNEI7O0lBRTVCLDJDQUVxQjs7SUFFckIsb0NBRWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdG9OdW1iZXIsIElucHV0TnVtYmVyLCBJbnB1dEJvb2xlYW4gfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBTRUNvbmZpZyB9IGZyb20gJy4vZWRpdC5jb25maWcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZS1jb250YWluZXIsIFtzZS1jb250YWluZXJdJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2VkaXQtY29udGFpbmVyLmNvbXBvbmVudC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIFNFQ29udGFpbmVyQ29tcG9uZW50IHtcbiAgLy8jcmVnaW9uIGZpZWxkc1xuXG4gIF90aXRsZSA9ICcnO1xuICBfdGl0bGVUcGw6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBJbnB1dCgpXG4gIHNldCB0aXRsZSh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLl90aXRsZSA9IG51bGw7XG4gICAgICB0aGlzLl90aXRsZVRwbCA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl90aXRsZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCBndXR0ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubnpMYXlvdXQgPT09ICdob3Jpem9udGFsJyA/IHRoaXMuX2d1dHRlciA6IDA7XG4gIH1cbiAgc2V0IGd1dHRlcih2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5fZ3V0dGVyID0gdG9OdW1iZXIodmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX2d1dHRlcjogbnVtYmVyO1xuXG4gIEBJbnB1dCgnc2UtY29udGFpbmVyJylcbiAgc2V0IGNvbCh2YWx1ZTogYW55KSB7XG4gICAgY29uc3QgYSA9IHRvTnVtYmVyKHZhbHVlLCAwKTtcbiAgICBpZiAoYSA8PSAwKSByZXR1cm47XG4gICAgdGhpcy5fY29sID0gdG9OdW1iZXIodmFsdWUsIDApO1xuICB9XG4gIGdldCBjb2woKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbDtcbiAgfVxuICBwcml2YXRlIF9jb2w6IG51bWJlcjtcblxuICBASW5wdXQoKVxuICBASW5wdXROdW1iZXIobnVsbClcbiAgbGFiZWxXaWR0aDogbnVtYmVyO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBuekxheW91dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbnpMYXlvdXQ7XG4gIH1cbiAgc2V0IG56TGF5b3V0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uekxheW91dCA9IHZhbHVlO1xuICAgIGlmICh2YWx1ZSA9PT0gJ2lubGluZScpIHtcbiAgICAgIHRoaXMuc2l6ZSA9ICdjb21wYWN0JztcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBfbnpMYXlvdXQ6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBzaXplOiAnZGVmYXVsdCcgfCAnY29tcGFjdCc7XG5cbiAgQElucHV0KClcbiAgQElucHV0Qm9vbGVhbigpXG4gIGZpcnN0VmlzdWFsOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIEBJbnB1dEJvb2xlYW4oKVxuICBsaW5lID0gZmFsc2U7XG5cbiAgLy8jZW5kcmVnaW9uXG5cbiAgY29uc3RydWN0b3IoY29nOiBTRUNvbmZpZykge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29nKTtcbiAgfVxufVxuIl19