/**
 * @fileoverview added by tsickle
 * Generated from: se-container.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata, __values } from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { AlainConfigService, InputBoolean, InputNumber, toNumber } from '@delon/util';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
var SEContainerComponent = /** @class */ (function () {
    function SEContainerComponent(configSrv) {
        this.errorNotify$ = new BehaviorSubject((/** @type {?} */ (null)));
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
    Object.defineProperty(SEContainerComponent.prototype, "errors", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this.setErrors(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SEContainerComponent.prototype, "errorNotify", {
        get: /**
         * @return {?}
         */
        function () {
            return this.errorNotify$.pipe(filter((/**
             * @param {?} v
             * @return {?}
             */
            function (v) { return v != null; })));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} errors
     * @return {?}
     */
    SEContainerComponent.prototype.setErrors = /**
     * @param {?} errors
     * @return {?}
     */
    function (errors) {
        var e_1, _a;
        try {
            for (var errors_1 = __values(errors), errors_1_1 = errors_1.next(); !errors_1_1.done; errors_1_1 = errors_1.next()) {
                var error = errors_1_1.value;
                this.errorNotify$.next(error);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (errors_1_1 && !errors_1_1.done && (_a = errors_1.return)) _a.call(errors_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
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
        line: [{ type: Input }],
        errors: [{ type: Input }]
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
    /**
     * @type {?}
     * @private
     */
    SEContainerComponent.prototype.errorNotify$;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2UtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvc2UvIiwic291cmNlcyI6WyJzZS1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFlLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFHLE9BQU8sRUFBRSxrQkFBa0IsRUFBaUIsWUFBWSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFckcsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHeEM7SUErREUsOEJBQVksU0FBNkI7UUF2Q2pDLGlCQUFZLEdBQUcsSUFBSSxlQUFlLENBQWlCLG1CQUFBLElBQUksRUFBYSxDQUFDLENBQUM7UUE2QnJELFNBQUksR0FBRyxLQUFLLENBQUM7UUFXcEMsU0FBUyxDQUFDLE1BQU0sQ0FBc0IsSUFBSSxFQUFFLElBQUksRUFBRTtZQUNoRCxJQUFJLEVBQUUsU0FBUztZQUNmLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLE1BQU0sRUFBRSxFQUFFO1lBQ1YsR0FBRyxFQUFFLENBQUM7WUFDTixVQUFVLEVBQUUsR0FBRztZQUNmLFdBQVcsRUFBRSxLQUFLO1NBQ25CLENBQUMsQ0FBQztJQUNMLENBQUM7SUExQ0Qsc0JBQ0ksd0NBQU07Ozs7UUFEVjtZQUVFLE9BQU8sSUFBSSxDQUFDLFFBQVEsS0FBSyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzRCxDQUFDOzs7OztRQUNELFVBQVcsS0FBYTtZQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQyxDQUFDOzs7T0FIQTtJQU1ELHNCQUNJLDBDQUFROzs7O1FBRFo7WUFFRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDeEIsQ0FBQzs7Ozs7UUFDRCxVQUFhLEtBQWU7WUFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsSUFBSSxLQUFLLEtBQUssUUFBUSxFQUFFO2dCQUN0QixJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQzthQUN2QjtRQUNILENBQUM7OztPQU5BO0lBWUQsc0JBQ0ksd0NBQU07Ozs7O1FBRFYsVUFDVyxHQUFxQjtZQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksNkNBQVc7Ozs7UUFBZjtZQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTTs7OztZQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxJQUFJLElBQUksRUFBVCxDQUFTLEVBQUMsQ0FBQyxDQUFDO1FBQ3hELENBQUM7OztPQUFBOzs7OztJQWFELHdDQUFTOzs7O0lBQVQsVUFBVSxNQUF3Qjs7O1lBQ2hDLEtBQW9CLElBQUEsV0FBQSxTQUFBLE1BQU0sQ0FBQSw4QkFBQSxrREFBRTtnQkFBdkIsSUFBTSxLQUFLLG1CQUFBO2dCQUNkLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQy9COzs7Ozs7Ozs7SUFDSCxDQUFDOztnQkE5RUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw4QkFBOEI7b0JBQ3hDLFFBQVEsRUFBRSxhQUFhO29CQUN2QixRQUFRLEVBQUUsd0tBS1Q7b0JBQ0QsSUFBSSxFQUFFO3dCQUNKLGlCQUFpQixFQUFFLE1BQU07d0JBQ3pCLHVCQUF1QixFQUFFLE1BQU07d0JBQy9CLHdCQUF3QixFQUFFLDJCQUEyQjt3QkFDckQsc0JBQXNCLEVBQUUseUJBQXlCO3dCQUNqRCxvQkFBb0IsRUFBRSx1QkFBdUI7d0JBQzdDLHFCQUFxQixFQUFFLG9CQUFvQjt3QkFDM0Msd0JBQXdCLEVBQUUsZUFBZTt3QkFDekMseUJBQXlCLEVBQUUsZUFBZTtxQkFDM0M7b0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUN0Qzs7OztnQkE1QlEsa0JBQWtCOzs7MkJBK0J4QixLQUFLLFNBQUMsY0FBYztzQkFDcEIsS0FBSzs2QkFDTCxLQUFLO3dCQUNMLEtBQUs7eUJBRUwsS0FBSzsyQkFTTCxLQUFLO3VCQVlMLEtBQUs7OEJBQ0wsS0FBSzt1QkFDTCxLQUFLO3lCQUNMLEtBQUs7O0lBN0JvQztRQUFsQixXQUFXLENBQUMsSUFBSSxDQUFDOzswREFBb0I7SUFDakM7UUFBbEIsV0FBVyxDQUFDLElBQUksQ0FBQzs7cURBQWU7SUFDZDtRQUFsQixXQUFXLENBQUMsSUFBSSxDQUFDOzs0REFBb0I7SUF5QnRCO1FBQWYsWUFBWSxFQUFFOzs2REFBc0I7SUFDckI7UUFBZixZQUFZLEVBQUU7O3NEQUFjO0lBMEJ4QywyQkFBQztDQUFBLEFBL0VELElBK0VDO1NBeERZLG9CQUFvQjs7Ozs7O0lBQy9CLDRDQUE4RTs7SUFDOUUsd0NBQTZEOztJQUM3RCxtQ0FBMEM7O0lBQzFDLDBDQUErQzs7SUFDL0MscUNBQTJDOzs7OztJQVMzQyx1Q0FBd0I7Ozs7O0lBWXhCLHlDQUE0Qjs7SUFFNUIsb0NBQXFDOztJQUNyQywyQ0FBOEM7O0lBQzlDLG9DQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBUZW1wbGF0ZVJlZiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJFUF9UWVBFIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IEFsYWluQ29uZmlnU2VydmljZSwgQWxhaW5TRUNvbmZpZywgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciwgdG9OdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMvYW55JztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU0VFcnJvclJlZnJlc2gsIFNFTGF5b3V0IH0gZnJvbSAnLi9zZS50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NlLWNvbnRhaW5lciwgW3NlLWNvbnRhaW5lcl0nLFxuICBleHBvcnRBczogJ3NlQ29udGFpbmVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c2UtdGl0bGUgKm5nSWY9XCJ0aXRsZVwiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cInRpdGxlXCI+e3sgdGl0bGUgfX08L25nLWNvbnRhaW5lcj5cbiAgICA8L3NlLXRpdGxlPlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgYCxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LXJvd10nOiBgdHJ1ZWAsXG4gICAgJ1tjbGFzcy5zZV9fY29udGFpbmVyXSc6IGB0cnVlYCxcbiAgICAnW2NsYXNzLnNlX19ob3Jpem9udGFsXSc6IGBuekxheW91dCA9PT0gJ2hvcml6b250YWwnYCxcbiAgICAnW2NsYXNzLnNlX192ZXJ0aWNhbF0nOiBgbnpMYXlvdXQgPT09ICd2ZXJ0aWNhbCdgLFxuICAgICdbY2xhc3Muc2VfX2lubGluZV0nOiBgbnpMYXlvdXQgPT09ICdpbmxpbmUnYCxcbiAgICAnW2NsYXNzLnNlX19jb21wYWN0XSc6IGBzaXplID09PSAnY29tcGFjdCdgLFxuICAgICdbc3R5bGUubWFyZ2luLWxlZnQucHhdJzogYC0oZ3V0dGVyIC8gMilgLFxuICAgICdbc3R5bGUubWFyZ2luLXJpZ2h0LnB4XSc6IGAtKGd1dHRlciAvIDIpYCxcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBTRUNvbnRhaW5lckNvbXBvbmVudCB7XG4gIHByaXZhdGUgZXJyb3JOb3RpZnkkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxTRUVycm9yUmVmcmVzaD4obnVsbCBhcyBOelNhZmVBbnkpO1xuICBASW5wdXQoJ3NlLWNvbnRhaW5lcicpIEBJbnB1dE51bWJlcihudWxsKSBjb2xJbkNvbjogUkVQX1RZUEU7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcihudWxsKSBjb2w6IFJFUF9UWVBFO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIobnVsbCkgbGFiZWxXaWR0aDogbnVtYmVyO1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgQElucHV0KClcbiAgZ2V0IGd1dHRlcigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm56TGF5b3V0ID09PSAnaG9yaXpvbnRhbCcgPyB0aGlzLl9ndXR0ZXIgOiAwO1xuICB9XG4gIHNldCBndXR0ZXIodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX2d1dHRlciA9IHRvTnVtYmVyKHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIF9ndXR0ZXI6IG51bWJlcjtcblxuICBASW5wdXQoKVxuICBnZXQgbnpMYXlvdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX256TGF5b3V0O1xuICB9XG4gIHNldCBuekxheW91dCh2YWx1ZTogU0VMYXlvdXQpIHtcbiAgICB0aGlzLl9uekxheW91dCA9IHZhbHVlO1xuICAgIGlmICh2YWx1ZSA9PT0gJ2lubGluZScpIHtcbiAgICAgIHRoaXMuc2l6ZSA9ICdjb21wYWN0JztcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBfbnpMYXlvdXQ6IFNFTGF5b3V0O1xuXG4gIEBJbnB1dCgpIHNpemU6ICdkZWZhdWx0JyB8ICdjb21wYWN0JztcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGZpcnN0VmlzdWFsOiBib29sZWFuO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbGluZSA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBzZXQgZXJyb3JzKHZhbDogU0VFcnJvclJlZnJlc2hbXSkge1xuICAgIHRoaXMuc2V0RXJyb3JzKHZhbCk7XG4gIH1cblxuICBnZXQgZXJyb3JOb3RpZnkoKTogT2JzZXJ2YWJsZTxTRUVycm9yUmVmcmVzaD4ge1xuICAgIHJldHVybiB0aGlzLmVycm9yTm90aWZ5JC5waXBlKGZpbHRlcih2ID0+IHYgIT0gbnVsbCkpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoY29uZmlnU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UpIHtcbiAgICBjb25maWdTcnYuYXR0YWNoPEFsYWluU0VDb25maWcsICdzZSc+KHRoaXMsICdzZScsIHtcbiAgICAgIHNpemU6ICdkZWZhdWx0JyxcbiAgICAgIG56TGF5b3V0OiAnaG9yaXpvbnRhbCcsXG4gICAgICBndXR0ZXI6IDMyLFxuICAgICAgY29sOiAyLFxuICAgICAgbGFiZWxXaWR0aDogMTUwLFxuICAgICAgZmlyc3RWaXN1YWw6IGZhbHNlLFxuICAgIH0pO1xuICB9XG5cbiAgc2V0RXJyb3JzKGVycm9yczogU0VFcnJvclJlZnJlc2hbXSk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgZXJyb3Igb2YgZXJyb3JzKSB7XG4gICAgICB0aGlzLmVycm9yTm90aWZ5JC5uZXh0KGVycm9yKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==