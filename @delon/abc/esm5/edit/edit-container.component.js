/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9lZGl0LyIsInNvdXJjZXMiOlsiZWRpdC1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNsRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDOztJQXFFdkMsWUFBWTtJQUVaLDhCQUFZLEdBQWE7O3NCQTdEaEIsRUFBRTtvQkF5REosS0FBSztRQUtWLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQzFCO0lBN0RELHNCQUNJLHVDQUFLOzs7OztRQURULFVBQ1UsS0FBZ0M7WUFDeEMsSUFBSSxLQUFLLFlBQVksV0FBVyxFQUFFO2dCQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7YUFDeEI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7YUFDckI7U0FDRjs7O09BQUE7SUFFRCxzQkFDSSx3Q0FBTTs7OztRQURWO1lBRUUsT0FBTyxJQUFJLENBQUMsUUFBUSxLQUFLLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzFEOzs7OztRQUNELFVBQVcsS0FBVTtZQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNoQzs7O09BSEE7SUFNRCxzQkFDSSxxQ0FBRzs7OztRQUtQO1lBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ2xCOzs7OztRQVJELFVBQ1EsS0FBVTs7WUFDaEIsSUFBTSxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUFFLE9BQU87WUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ2hDOzs7T0FBQTtJQVVELHNCQUNJLDBDQUFROzs7O1FBRFo7WUFFRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDdkI7Ozs7O1FBQ0QsVUFBYSxLQUFhO1lBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLElBQUksS0FBSyxLQUFLLFFBQVEsRUFBRTtnQkFDdEIsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7YUFDdkI7U0FDRjs7O09BTkE7O2dCQS9DRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDhCQUE4QjtvQkFDeEMsaVZBQThDO29CQUM5QyxtQkFBbUIsRUFBRSxLQUFLO2lCQUMzQjs7OztnQkFOUSxRQUFROzs7d0JBWWQsS0FBSzt5QkFVTCxLQUFLO3NCQVNMLEtBQUssU0FBQyxjQUFjOzZCQVdwQixLQUFLOzJCQUlMLEtBQUs7dUJBWUwsS0FBSzs4QkFHTCxLQUFLO3VCQUlMLEtBQUs7OztRQXRCTCxXQUFXLENBQUMsSUFBSSxDQUFDOzs7O1FBbUJqQixZQUFZLEVBQUU7Ozs7UUFJZCxZQUFZLEVBQUU7OzsrQkFwRWpCOztTQVNhLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0b051bWJlciwgSW5wdXROdW1iZXIsIElucHV0Qm9vbGVhbiB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IFNFQ29uZmlnIH0gZnJvbSAnLi9lZGl0LmNvbmZpZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NlLWNvbnRhaW5lciwgW3NlLWNvbnRhaW5lcl0nLFxuICB0ZW1wbGF0ZVVybDogJy4vZWRpdC1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgU0VDb250YWluZXJDb21wb25lbnQge1xuICAvLyNyZWdpb24gZmllbGRzXG5cbiAgX3RpdGxlID0gJyc7XG4gIF90aXRsZVRwbDogVGVtcGxhdGVSZWY8YW55PjtcbiAgQElucHV0KClcbiAgc2V0IHRpdGxlKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgIHRoaXMuX3RpdGxlID0gbnVsbDtcbiAgICAgIHRoaXMuX3RpdGxlVHBsID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3RpdGxlID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IGd1dHRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5uekxheW91dCA9PT0gJ2hvcml6b250YWwnID8gdGhpcy5fZ3V0dGVyIDogMDtcbiAgfVxuICBzZXQgZ3V0dGVyKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLl9ndXR0ZXIgPSB0b051bWJlcih2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfZ3V0dGVyOiBudW1iZXI7XG5cbiAgQElucHV0KCdzZS1jb250YWluZXInKVxuICBzZXQgY29sKHZhbHVlOiBhbnkpIHtcbiAgICBjb25zdCBhID0gdG9OdW1iZXIodmFsdWUsIDApO1xuICAgIGlmIChhIDw9IDApIHJldHVybjtcbiAgICB0aGlzLl9jb2wgPSB0b051bWJlcih2YWx1ZSwgMCk7XG4gIH1cbiAgZ2V0IGNvbCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29sO1xuICB9XG4gIHByaXZhdGUgX2NvbDogbnVtYmVyO1xuXG4gIEBJbnB1dCgpXG4gIEBJbnB1dE51bWJlcihudWxsKVxuICBsYWJlbFdpZHRoOiBudW1iZXI7XG5cbiAgQElucHV0KClcbiAgZ2V0IG56TGF5b3V0KCkge1xuICAgIHJldHVybiB0aGlzLl9uekxheW91dDtcbiAgfVxuICBzZXQgbnpMYXlvdXQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX256TGF5b3V0ID0gdmFsdWU7XG4gICAgaWYgKHZhbHVlID09PSAnaW5saW5lJykge1xuICAgICAgdGhpcy5zaXplID0gJ2NvbXBhY3QnO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIF9uekxheW91dDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHNpemU6ICdkZWZhdWx0JyB8ICdjb21wYWN0JztcblxuICBASW5wdXQoKVxuICBASW5wdXRCb29sZWFuKClcbiAgZmlyc3RWaXN1YWw6IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgQElucHV0Qm9vbGVhbigpXG4gIGxpbmUgPSBmYWxzZTtcblxuICAvLyNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3Rvcihjb2c6IFNFQ29uZmlnKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb2cpO1xuICB9XG59XG4iXX0=