/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ControlUIWidget } from '../../widget';
var SliderWidget = /** @class */ (function (_super) {
    tslib_1.__extends(SliderWidget, _super);
    function SliderWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._formatter = (/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var formatter = _this.ui.formatter;
            if (formatter)
                return formatter(value);
            return value;
        });
        return _this;
    }
    /**
     * @return {?}
     */
    SliderWidget.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _a = this.schema, minimum = _a.minimum, maximum = _a.maximum, multipleOf = _a.multipleOf;
        this.min = minimum || 0;
        this.max = maximum || 100;
        this.step = multipleOf || 1;
        var _b = this.ui, marks = _b.marks, included = _b.included;
        this.marks = marks || null;
        this.included = typeof included === 'undefined' ? true : included;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    SliderWidget.prototype._afterChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var afterChange = this.ui.afterChange;
        if (afterChange)
            return afterChange(value);
    };
    SliderWidget.decorators = [
        { type: Component, args: [{
                    selector: 'sf-slider',
                    template: "<sf-item-wrap [id]=\"id\"\n              [schema]=\"schema\"\n              [ui]=\"ui\"\n              [showError]=\"showError\"\n              [error]=\"error\"\n              [showTitle]=\"schema.title\">\n\n  <nz-slider [ngModel]=\"value\"\n             (ngModelChange)=\"setValue($event)\"\n             [nzDisabled]=\"disabled\"\n             [nzRange]=\"ui.range\"\n             [nzMin]=\"min\"\n             [nzMax]=\"max\"\n             [nzStep]=\"step\"\n             [nzMarks]=\"marks\"\n             [nzDots]=\"ui.dots\"\n             [nzIncluded]=\"included\"\n             [nzVertical]=\"ui.vertical\"\n             [nzTipFormatter]=\"_formatter\"\n             (nzOnAfterChange)=\"_afterChange($event)\">\n  </nz-slider>\n\n</sf-item-wrap>\n",
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    return SliderWidget;
}(ControlUIWidget));
export { SliderWidget };
if (false) {
    /** @type {?} */
    SliderWidget.prototype.min;
    /** @type {?} */
    SliderWidget.prototype.max;
    /** @type {?} */
    SliderWidget.prototype.step;
    /** @type {?} */
    SliderWidget.prototype.marks;
    /** @type {?} */
    SliderWidget.prototype.included;
    /** @type {?} */
    SliderWidget.prototype._formatter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9mb3JtLyIsInNvdXJjZXMiOlsic3JjL3dpZGdldHMvc2xpZGVyL3NsaWRlci53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFHL0M7SUFNa0Msd0NBQXFDO0lBTnZFO1FBQUEscUVBa0NDO1FBVkMsZ0JBQVU7Ozs7UUFBRyxVQUFDLEtBQWE7WUFDakIsSUFBQSw4QkFBUztZQUNqQixJQUFJLFNBQVM7Z0JBQUUsT0FBTyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkMsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDLEVBQUM7O0lBTUosQ0FBQzs7OztJQXJCQywrQkFBUTs7O0lBQVI7UUFDUSxJQUFBLGdCQUE4QyxFQUE1QyxvQkFBTyxFQUFFLG9CQUFPLEVBQUUsMEJBQTBCO1FBQ3BELElBQUksQ0FBQyxHQUFHLEdBQUcsT0FBTyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsR0FBRyxHQUFHLE9BQU8sSUFBSSxHQUFHLENBQUM7UUFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxVQUFVLElBQUksQ0FBQyxDQUFDO1FBRXRCLElBQUEsWUFBNkIsRUFBM0IsZ0JBQUssRUFBRSxzQkFBb0I7UUFDbkMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLElBQUksSUFBSSxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxRQUFRLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztJQUNwRSxDQUFDOzs7OztJQVFELG1DQUFZOzs7O0lBQVosVUFBYSxLQUFrQjtRQUNyQixJQUFBLGlDQUFXO1FBQ25CLElBQUksV0FBVztZQUFFLE9BQU8sV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdDLENBQUM7O2dCQWpDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLCt2QkFBbUM7b0JBQ25DLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUN0Qzs7SUE2QkQsbUJBQUM7Q0FBQSxBQWxDRCxDQU1rQyxlQUFlLEdBNEJoRDtTQTVCWSxZQUFZOzs7SUFDdkIsMkJBQVk7O0lBQ1osMkJBQVk7O0lBQ1osNEJBQWE7O0lBQ2IsNkJBQW9COztJQUNwQixnQ0FBa0I7O0lBYWxCLGtDQUlFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXJrcywgU2xpZGVyVmFsdWUgfSBmcm9tICduZy16b3Jyby1hbnRkL3NsaWRlcic7XG5pbXBvcnQgeyBDb250cm9sVUlXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuaW1wb3J0IHsgU0ZTbGlkZXJXaWRnZXRTY2hlbWEgfSBmcm9tICcuL3NjaGVtYSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLXNsaWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zbGlkZXIud2lkZ2V0Lmh0bWwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgU2xpZGVyV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFVJV2lkZ2V0PFNGU2xpZGVyV2lkZ2V0U2NoZW1hPiBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIG1pbjogbnVtYmVyO1xuICBtYXg6IG51bWJlcjtcbiAgc3RlcDogbnVtYmVyO1xuICBtYXJrczogTWFya3MgfCBudWxsO1xuICBpbmNsdWRlZDogYm9vbGVhbjtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IG1pbmltdW0sIG1heGltdW0sIG11bHRpcGxlT2YgfSA9IHRoaXMuc2NoZW1hO1xuICAgIHRoaXMubWluID0gbWluaW11bSB8fCAwO1xuICAgIHRoaXMubWF4ID0gbWF4aW11bSB8fCAxMDA7XG4gICAgdGhpcy5zdGVwID0gbXVsdGlwbGVPZiB8fCAxO1xuXG4gICAgY29uc3QgeyBtYXJrcywgaW5jbHVkZWQgfSA9IHRoaXMudWk7XG4gICAgdGhpcy5tYXJrcyA9IG1hcmtzIHx8IG51bGw7XG4gICAgdGhpcy5pbmNsdWRlZCA9IHR5cGVvZiBpbmNsdWRlZCA9PT0gJ3VuZGVmaW5lZCcgPyB0cnVlIDogaW5jbHVkZWQ7XG4gIH1cblxuICBfZm9ybWF0dGVyID0gKHZhbHVlOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCB7IGZvcm1hdHRlciB9ID0gdGhpcy51aTtcbiAgICBpZiAoZm9ybWF0dGVyKSByZXR1cm4gZm9ybWF0dGVyKHZhbHVlKTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG5cbiAgX2FmdGVyQ2hhbmdlKHZhbHVlOiBTbGlkZXJWYWx1ZSkge1xuICAgIGNvbnN0IHsgYWZ0ZXJDaGFuZ2UgfSA9IHRoaXMudWk7XG4gICAgaWYgKGFmdGVyQ2hhbmdlKSByZXR1cm4gYWZ0ZXJDaGFuZ2UodmFsdWUpO1xuICB9XG59XG4iXX0=