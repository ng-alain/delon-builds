/**
 * @fileoverview added by tsickle
 * Generated from: se-container.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { AlainConfigService, InputBoolean, InputNumber, toNumber } from '@delon/util';
var SEContainerComponent = /** @class */ (function () {
    // #endregion
    function SEContainerComponent(configSrv) {
        this.line = false;
        configSrv.attach(this, 'se', {
            size: 'default',
            nzLayout: 'horizontal',
            gutter: 32,
            col: 2,
            labelWidth: 150,
            firstVisual: false,
        });
    }
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
                    exportAs: 'seContainer',
                    template: "<div class=\"ant-row se__container se__{{nzLayout}} se__{{size}}\"\n     [ngStyle]=\"{'margin-left.px': -(gutter / 2), 'margin-right.px': -(gutter / 2)}\">\n  <se-title *ngIf=\"title\">\n    <ng-container *nzStringTemplateOutlet=\"title\">{{ title }}</ng-container>\n  </se-title>\n  <ng-content></ng-content>\n</div>\n",
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    SEContainerComponent.ctorParameters = function () { return [
        { type: AlainConfigService }
    ]; };
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
    __decorate([
        InputNumber(null),
        __metadata("design:type", Number)
    ], SEContainerComponent.prototype, "colInCon", void 0);
    __decorate([
        InputNumber(null),
        __metadata("design:type", Number)
    ], SEContainerComponent.prototype, "col", void 0);
    __decorate([
        InputNumber(null),
        __metadata("design:type", Number)
    ], SEContainerComponent.prototype, "labelWidth", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], SEContainerComponent.prototype, "firstVisual", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], SEContainerComponent.prototype, "line", void 0);
    return SEContainerComponent;
}());
export { SEContainerComponent };
if (false) {
    /** @type {?} */
    SEContainerComponent.prototype.colInCon;
    /** @type {?} */
    SEContainerComponent.prototype.col;
    /** @type {?} */
    SEContainerComponent.prototype.labelWidth;
    /** @type {?} */
    SEContainerComponent.prototype.title;
    /**
     * @type {?}
     * @private
     */
    SEContainerComponent.prototype._gutter;
    /**
     * @type {?}
     * @private
     */
    SEContainerComponent.prototype._nzLayout;
    /** @type {?} */
    SEContainerComponent.prototype.size;
    /** @type {?} */
    SEContainerComponent.prototype.firstVisual;
    /** @type {?} */
    SEContainerComponent.prototype.line;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2UtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvc2UvIiwic291cmNlcyI6WyJzZS1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFlLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFHLE9BQU8sRUFBRSxrQkFBa0IsRUFBaUIsWUFBWSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFckc7SUF5Q0UsYUFBYTtJQUViLDhCQUFZLFNBQTZCO1FBSmhCLFNBQUksR0FBRyxLQUFLLENBQUM7UUFLcEMsU0FBUyxDQUFDLE1BQU0sQ0FBc0IsSUFBSSxFQUFFLElBQUksRUFBRTtZQUNoRCxJQUFJLEVBQUUsU0FBUztZQUNmLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLE1BQU0sRUFBRSxFQUFFO1lBQ1YsR0FBRyxFQUFFLENBQUM7WUFDTixVQUFVLEVBQUUsR0FBRztZQUNmLFdBQVcsRUFBRSxLQUFLO1NBQ25CLENBQUMsQ0FBQztJQUNMLENBQUM7SUFwQ0Qsc0JBQ0ksd0NBQU07Ozs7UUFEVjtZQUVFLE9BQU8sSUFBSSxDQUFDLFFBQVEsS0FBSyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzRCxDQUFDOzs7OztRQUNELFVBQVcsS0FBYTtZQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQyxDQUFDOzs7T0FIQTtJQU1ELHNCQUNJLDBDQUFROzs7O1FBRFo7WUFFRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDeEIsQ0FBQzs7Ozs7UUFDRCxVQUFhLEtBQWE7WUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsSUFBSSxLQUFLLEtBQUssUUFBUSxFQUFFO2dCQUN0QixJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQzthQUN2QjtRQUNILENBQUM7OztPQU5BOztnQkE1QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw4QkFBOEI7b0JBQ3hDLFFBQVEsRUFBRSxhQUFhO29CQUN2QiwyVUFBNEM7b0JBQzVDLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDdEM7Ozs7Z0JBVFEsa0JBQWtCOzs7MkJBYXhCLEtBQUssU0FBQyxjQUFjO3NCQUNwQixLQUFLOzZCQUNMLEtBQUs7d0JBQ0wsS0FBSzt5QkFFTCxLQUFLOzJCQVNMLEtBQUs7dUJBWUwsS0FBSzs4QkFDTCxLQUFLO3VCQUNMLEtBQUs7O0lBNUJvQztRQUFsQixXQUFXLENBQUMsSUFBSSxDQUFDOzswREFBb0I7SUFDakM7UUFBbEIsV0FBVyxDQUFDLElBQUksQ0FBQzs7cURBQWU7SUFDZDtRQUFsQixXQUFXLENBQUMsSUFBSSxDQUFDOzs0REFBb0I7SUF5QnRCO1FBQWYsWUFBWSxFQUFFOzs2REFBc0I7SUFDckI7UUFBZixZQUFZLEVBQUU7O3NEQUFjO0lBY3hDLDJCQUFDO0NBQUEsQUFyREQsSUFxREM7U0E3Q1ksb0JBQW9COzs7SUFHL0Isd0NBQTZEOztJQUM3RCxtQ0FBMEM7O0lBQzFDLDBDQUErQzs7SUFDL0MscUNBQTJDOzs7OztJQVMzQyx1Q0FBd0I7Ozs7O0lBWXhCLHlDQUEwQjs7SUFFMUIsb0NBQXFDOztJQUNyQywyQ0FBOEM7O0lBQzlDLG9DQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBUZW1wbGF0ZVJlZiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJFUF9UWVBFIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IEFsYWluQ29uZmlnU2VydmljZSwgQWxhaW5TRUNvbmZpZywgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciwgdG9OdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NlLWNvbnRhaW5lciwgW3NlLWNvbnRhaW5lcl0nLFxuICBleHBvcnRBczogJ3NlQ29udGFpbmVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgU0VDb250YWluZXJDb21wb25lbnQge1xuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCgnc2UtY29udGFpbmVyJykgQElucHV0TnVtYmVyKG51bGwpIGNvbEluQ29uOiBSRVBfVFlQRTtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKG51bGwpIGNvbDogUkVQX1RZUEU7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcihudWxsKSBsYWJlbFdpZHRoOiBudW1iZXI7XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICBASW5wdXQoKVxuICBnZXQgZ3V0dGVyKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMubnpMYXlvdXQgPT09ICdob3Jpem9udGFsJyA/IHRoaXMuX2d1dHRlciA6IDA7XG4gIH1cbiAgc2V0IGd1dHRlcih2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fZ3V0dGVyID0gdG9OdW1iZXIodmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX2d1dHRlcjogbnVtYmVyO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBuekxheW91dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbnpMYXlvdXQ7XG4gIH1cbiAgc2V0IG56TGF5b3V0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uekxheW91dCA9IHZhbHVlO1xuICAgIGlmICh2YWx1ZSA9PT0gJ2lubGluZScpIHtcbiAgICAgIHRoaXMuc2l6ZSA9ICdjb21wYWN0JztcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBfbnpMYXlvdXQ6IHN0cmluZztcblxuICBASW5wdXQoKSBzaXplOiAnZGVmYXVsdCcgfCAnY29tcGFjdCc7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBmaXJzdFZpc3VhbDogYm9vbGVhbjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGxpbmUgPSBmYWxzZTtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgY29uc3RydWN0b3IoY29uZmlnU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UpIHtcbiAgICBjb25maWdTcnYuYXR0YWNoPEFsYWluU0VDb25maWcsICdzZSc+KHRoaXMsICdzZScsIHtcbiAgICAgIHNpemU6ICdkZWZhdWx0JyxcbiAgICAgIG56TGF5b3V0OiAnaG9yaXpvbnRhbCcsXG4gICAgICBndXR0ZXI6IDMyLFxuICAgICAgY29sOiAyLFxuICAgICAgbGFiZWxXaWR0aDogMTUwLFxuICAgICAgZmlyc3RWaXN1YWw6IGZhbHNlLFxuICAgIH0pO1xuICB9XG59XG4iXX0=