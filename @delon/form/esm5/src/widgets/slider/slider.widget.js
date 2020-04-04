/**
 * @fileoverview added by tsickle
 * Generated from: src/widgets/slider/slider.widget.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __extends } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ControlUIWidget } from '../../widget';
var SliderWidget = /** @class */ (function (_super) {
    __extends(SliderWidget, _super);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9mb3JtLyIsInNvdXJjZXMiOlsic3JjL3dpZGdldHMvc2xpZGVyL3NsaWRlci53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVyRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRy9DO0lBTWtDLGdDQUFxQztJQU52RTtRQUFBLHFFQWtDQztRQVZDLGdCQUFVOzs7O1FBQUcsVUFBQyxLQUFhO1lBQ2pCLElBQUEsOEJBQVM7WUFDakIsSUFBSSxTQUFTO2dCQUFFLE9BQU8sU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZDLE9BQU8sS0FBSyxDQUFDO1FBQ2YsQ0FBQyxFQUFDOztJQU1KLENBQUM7Ozs7SUFyQkMsK0JBQVE7OztJQUFSO1FBQ1EsSUFBQSxnQkFBOEMsRUFBNUMsb0JBQU8sRUFBRSxvQkFBTyxFQUFFLDBCQUEwQjtRQUNwRCxJQUFJLENBQUMsR0FBRyxHQUFHLE9BQU8sSUFBSSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxPQUFPLElBQUksR0FBRyxDQUFDO1FBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsVUFBVSxJQUFJLENBQUMsQ0FBQztRQUV0QixJQUFBLFlBQTZCLEVBQTNCLGdCQUFLLEVBQUUsc0JBQW9CO1FBQ25DLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxJQUFJLElBQUksQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sUUFBUSxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7SUFDcEUsQ0FBQzs7Ozs7SUFRRCxtQ0FBWTs7OztJQUFaLFVBQWEsS0FBb0I7UUFDdkIsSUFBQSxpQ0FBVztRQUNuQixJQUFJLFdBQVc7WUFBRSxPQUFPLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QyxDQUFDOztnQkFqQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQiwrdkJBQW1DO29CQUNuQyxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDdEM7O0lBNkJELG1CQUFDO0NBQUEsQUFsQ0QsQ0FNa0MsZUFBZSxHQTRCaEQ7U0E1QlksWUFBWTs7O0lBQ3ZCLDJCQUFZOztJQUNaLDJCQUFZOztJQUNaLDRCQUFhOztJQUNiLDZCQUFzQjs7SUFDdEIsZ0NBQWtCOztJQWFsQixrQ0FJRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpNYXJrcywgTnpTbGlkZXJWYWx1ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvc2xpZGVyJztcbmltcG9ydCB7IENvbnRyb2xVSVdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5pbXBvcnQgeyBTRlNsaWRlcldpZGdldFNjaGVtYSB9IGZyb20gJy4vc2NoZW1hJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2Ytc2xpZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NsaWRlci53aWRnZXQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBTbGlkZXJXaWRnZXQgZXh0ZW5kcyBDb250cm9sVUlXaWRnZXQ8U0ZTbGlkZXJXaWRnZXRTY2hlbWE+IGltcGxlbWVudHMgT25Jbml0IHtcbiAgbWluOiBudW1iZXI7XG4gIG1heDogbnVtYmVyO1xuICBzdGVwOiBudW1iZXI7XG4gIG1hcmtzOiBOek1hcmtzIHwgbnVsbDtcbiAgaW5jbHVkZWQ6IGJvb2xlYW47XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgeyBtaW5pbXVtLCBtYXhpbXVtLCBtdWx0aXBsZU9mIH0gPSB0aGlzLnNjaGVtYTtcbiAgICB0aGlzLm1pbiA9IG1pbmltdW0gfHwgMDtcbiAgICB0aGlzLm1heCA9IG1heGltdW0gfHwgMTAwO1xuICAgIHRoaXMuc3RlcCA9IG11bHRpcGxlT2YgfHwgMTtcblxuICAgIGNvbnN0IHsgbWFya3MsIGluY2x1ZGVkIH0gPSB0aGlzLnVpO1xuICAgIHRoaXMubWFya3MgPSBtYXJrcyB8fCBudWxsO1xuICAgIHRoaXMuaW5jbHVkZWQgPSB0eXBlb2YgaW5jbHVkZWQgPT09ICd1bmRlZmluZWQnID8gdHJ1ZSA6IGluY2x1ZGVkO1xuICB9XG5cbiAgX2Zvcm1hdHRlciA9ICh2YWx1ZTogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgeyBmb3JtYXR0ZXIgfSA9IHRoaXMudWk7XG4gICAgaWYgKGZvcm1hdHRlcikgcmV0dXJuIGZvcm1hdHRlcih2YWx1ZSk7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xuXG4gIF9hZnRlckNoYW5nZSh2YWx1ZTogTnpTbGlkZXJWYWx1ZSkge1xuICAgIGNvbnN0IHsgYWZ0ZXJDaGFuZ2UgfSA9IHRoaXMudWk7XG4gICAgaWYgKGFmdGVyQ2hhbmdlKSByZXR1cm4gYWZ0ZXJDaGFuZ2UodmFsdWUpO1xuICB9XG59XG4iXX0=