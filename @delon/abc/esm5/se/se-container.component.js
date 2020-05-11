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
                    template: "\n    <se-title *ngIf=\"title\">\n      <ng-container *nzStringTemplateOutlet=\"title\">{{ title }}</ng-container>\n    </se-title>\n    <ng-content></ng-content>\n  ",
                    host: {
                        '[class.ant-row]': "true",
                        '[class.se__container]': "true",
                        '[class.se__horizontal]': "nzLayout === 'horizontal'",
                        '[class.se__vertical]': "nzLayout === 'vertical'",
                        '[class.se__inline]': "nzLayout === 'inline'",
                        '[class.se__compact]': "size === 'compact'",
                        '[style.margin-left.px]': "-(gutter / 2)",
                        '[style.margin-right.px]': "-(gutter / 2)",
                    },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2UtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvc2UvIiwic291cmNlcyI6WyJzZS1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFlLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFHLE9BQU8sRUFBRSxrQkFBa0IsRUFBaUIsWUFBWSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFckc7SUF3REUsYUFBYTtJQUViLDhCQUFZLFNBQTZCO1FBSmhCLFNBQUksR0FBRyxLQUFLLENBQUM7UUFLcEMsU0FBUyxDQUFDLE1BQU0sQ0FBc0IsSUFBSSxFQUFFLElBQUksRUFBRTtZQUNoRCxJQUFJLEVBQUUsU0FBUztZQUNmLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLE1BQU0sRUFBRSxFQUFFO1lBQ1YsR0FBRyxFQUFFLENBQUM7WUFDTixVQUFVLEVBQUUsR0FBRztZQUNmLFdBQVcsRUFBRSxLQUFLO1NBQ25CLENBQUMsQ0FBQztJQUNMLENBQUM7SUFwQ0Qsc0JBQ0ksd0NBQU07Ozs7UUFEVjtZQUVFLE9BQU8sSUFBSSxDQUFDLFFBQVEsS0FBSyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzRCxDQUFDOzs7OztRQUNELFVBQVcsS0FBYTtZQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQyxDQUFDOzs7T0FIQTtJQU1ELHNCQUNJLDBDQUFROzs7O1FBRFo7WUFFRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDeEIsQ0FBQzs7Ozs7UUFDRCxVQUFhLEtBQWE7WUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsSUFBSSxLQUFLLEtBQUssUUFBUSxFQUFFO2dCQUN0QixJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQzthQUN2QjtRQUNILENBQUM7OztPQU5BOztnQkEzQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw4QkFBOEI7b0JBQ3hDLFFBQVEsRUFBRSxhQUFhO29CQUN2QixRQUFRLEVBQUUsd0tBS1Q7b0JBQ0QsSUFBSSxFQUFFO3dCQUNKLGlCQUFpQixFQUFFLE1BQU07d0JBQ3pCLHVCQUF1QixFQUFFLE1BQU07d0JBQy9CLHdCQUF3QixFQUFFLDJCQUEyQjt3QkFDckQsc0JBQXNCLEVBQUUseUJBQXlCO3dCQUNqRCxvQkFBb0IsRUFBRSx1QkFBdUI7d0JBQzdDLHFCQUFxQixFQUFFLG9CQUFvQjt3QkFDM0Msd0JBQXdCLEVBQUUsZUFBZTt3QkFDekMseUJBQXlCLEVBQUUsZUFBZTtxQkFDM0M7b0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUN0Qzs7OztnQkF4QlEsa0JBQWtCOzs7MkJBNEJ4QixLQUFLLFNBQUMsY0FBYztzQkFDcEIsS0FBSzs2QkFDTCxLQUFLO3dCQUNMLEtBQUs7eUJBRUwsS0FBSzsyQkFTTCxLQUFLO3VCQVlMLEtBQUs7OEJBQ0wsS0FBSzt1QkFDTCxLQUFLOztJQTVCb0M7UUFBbEIsV0FBVyxDQUFDLElBQUksQ0FBQzs7MERBQW9CO0lBQ2pDO1FBQWxCLFdBQVcsQ0FBQyxJQUFJLENBQUM7O3FEQUFlO0lBQ2Q7UUFBbEIsV0FBVyxDQUFDLElBQUksQ0FBQzs7NERBQW9CO0lBeUJ0QjtRQUFmLFlBQVksRUFBRTs7NkRBQXNCO0lBQ3JCO1FBQWYsWUFBWSxFQUFFOztzREFBYztJQWN4QywyQkFBQztDQUFBLEFBcEVELElBb0VDO1NBN0NZLG9CQUFvQjs7O0lBRy9CLHdDQUE2RDs7SUFDN0QsbUNBQTBDOztJQUMxQywwQ0FBK0M7O0lBQy9DLHFDQUEyQzs7Ozs7SUFTM0MsdUNBQXdCOzs7OztJQVl4Qix5Q0FBMEI7O0lBRTFCLG9DQUFxQzs7SUFDckMsMkNBQThDOztJQUM5QyxvQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSRVBfVFlQRSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UsIEFsYWluU0VDb25maWcsIElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIsIHRvTnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZS1jb250YWluZXIsIFtzZS1jb250YWluZXJdJyxcbiAgZXhwb3J0QXM6ICdzZUNvbnRhaW5lcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHNlLXRpdGxlICpuZ0lmPVwidGl0bGVcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJ0aXRsZVwiPnt7IHRpdGxlIH19PC9uZy1jb250YWluZXI+XG4gICAgPC9zZS10aXRsZT5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC1yb3ddJzogYHRydWVgLFxuICAgICdbY2xhc3Muc2VfX2NvbnRhaW5lcl0nOiBgdHJ1ZWAsXG4gICAgJ1tjbGFzcy5zZV9faG9yaXpvbnRhbF0nOiBgbnpMYXlvdXQgPT09ICdob3Jpem9udGFsJ2AsXG4gICAgJ1tjbGFzcy5zZV9fdmVydGljYWxdJzogYG56TGF5b3V0ID09PSAndmVydGljYWwnYCxcbiAgICAnW2NsYXNzLnNlX19pbmxpbmVdJzogYG56TGF5b3V0ID09PSAnaW5saW5lJ2AsXG4gICAgJ1tjbGFzcy5zZV9fY29tcGFjdF0nOiBgc2l6ZSA9PT0gJ2NvbXBhY3QnYCxcbiAgICAnW3N0eWxlLm1hcmdpbi1sZWZ0LnB4XSc6IGAtKGd1dHRlciAvIDIpYCxcbiAgICAnW3N0eWxlLm1hcmdpbi1yaWdodC5weF0nOiBgLShndXR0ZXIgLyAyKWAsXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgU0VDb250YWluZXJDb21wb25lbnQge1xuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCgnc2UtY29udGFpbmVyJykgQElucHV0TnVtYmVyKG51bGwpIGNvbEluQ29uOiBSRVBfVFlQRTtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKG51bGwpIGNvbDogUkVQX1RZUEU7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcihudWxsKSBsYWJlbFdpZHRoOiBudW1iZXI7XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICBASW5wdXQoKVxuICBnZXQgZ3V0dGVyKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMubnpMYXlvdXQgPT09ICdob3Jpem9udGFsJyA/IHRoaXMuX2d1dHRlciA6IDA7XG4gIH1cbiAgc2V0IGd1dHRlcih2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fZ3V0dGVyID0gdG9OdW1iZXIodmFsdWUpO1xuICB9XG4gIHByaXZhdGUgX2d1dHRlcjogbnVtYmVyO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBuekxheW91dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbnpMYXlvdXQ7XG4gIH1cbiAgc2V0IG56TGF5b3V0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uekxheW91dCA9IHZhbHVlO1xuICAgIGlmICh2YWx1ZSA9PT0gJ2lubGluZScpIHtcbiAgICAgIHRoaXMuc2l6ZSA9ICdjb21wYWN0JztcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBfbnpMYXlvdXQ6IHN0cmluZztcblxuICBASW5wdXQoKSBzaXplOiAnZGVmYXVsdCcgfCAnY29tcGFjdCc7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBmaXJzdFZpc3VhbDogYm9vbGVhbjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGxpbmUgPSBmYWxzZTtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgY29uc3RydWN0b3IoY29uZmlnU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UpIHtcbiAgICBjb25maWdTcnYuYXR0YWNoPEFsYWluU0VDb25maWcsICdzZSc+KHRoaXMsICdzZScsIHtcbiAgICAgIHNpemU6ICdkZWZhdWx0JyxcbiAgICAgIG56TGF5b3V0OiAnaG9yaXpvbnRhbCcsXG4gICAgICBndXR0ZXI6IDMyLFxuICAgICAgY29sOiAyLFxuICAgICAgbGFiZWxXaWR0aDogMTUwLFxuICAgICAgZmlyc3RWaXN1YWw6IGZhbHNlLFxuICAgIH0pO1xuICB9XG59XG4iXX0=