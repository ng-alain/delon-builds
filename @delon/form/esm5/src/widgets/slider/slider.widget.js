/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ControlWidget } from '../../widget';
var SliderWidget = /** @class */ (function (_super) {
    tslib_1.__extends(SliderWidget, _super);
    function SliderWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._formatter = (/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (_this.ui.formatter)
                return _this.ui.formatter(value);
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
        this.min = this.schema.minimum || 0;
        this.max = this.schema.maximum || 100;
        this.step = this.schema.multipleOf || 1;
        this.marks = this.ui.marks || null;
        /** @type {?} */
        var included = this.ui.included;
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
        if (this.ui.afterChange)
            this.ui.afterChange(value);
    };
    SliderWidget.decorators = [
        { type: Component, args: [{
                    selector: 'sf-slider',
                    template: "<sf-item-wrap [id]=\"id\"\n              [schema]=\"schema\"\n              [ui]=\"ui\"\n              [showError]=\"showError\"\n              [error]=\"error\"\n              [showTitle]=\"schema.title\">\n\n  <nz-slider [ngModel]=\"value\"\n             (ngModelChange)=\"setValue($event)\"\n             [nzDisabled]=\"disabled\"\n             [nzRange]=\"ui.range\"\n             [nzMin]=\"min\"\n             [nzMax]=\"max\"\n             [nzStep]=\"step\"\n             [nzMarks]=\"marks\"\n             [nzDots]=\"ui.dots\"\n             [nzIncluded]=\"included\"\n             [nzVertical]=\"ui.vertical\"\n             [nzTipFormatter]=\"_formatter\"\n             (nzOnAfterChange)=\"_afterChange($event)\">\n  </nz-slider>\n\n</sf-item-wrap>\n"
                }] }
    ];
    return SliderWidget;
}(ControlWidget));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9mb3JtLyIsInNvdXJjZXMiOlsic3JjL3dpZGdldHMvc2xpZGVyL3NsaWRlci53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRWxELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFN0M7SUFJa0Msd0NBQWE7SUFKL0M7UUFBQSxxRUE2QkM7UUFSQyxnQkFBVTs7OztRQUFHLFVBQUMsS0FBYTtZQUN6QixJQUFJLEtBQUksQ0FBQyxFQUFFLENBQUMsU0FBUztnQkFBRSxPQUFPLEtBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZELE9BQU8sS0FBSyxDQUFDO1FBQ2YsQ0FBQyxFQUFDOztJQUtKLENBQUM7Ozs7SUFsQkMsK0JBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxHQUFHLENBQUM7UUFDdEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUM7UUFFeEMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUM7O1lBQzdCLFFBQVEsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVE7UUFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLFFBQVEsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO0lBQ3BFLENBQUM7Ozs7O0lBT0QsbUNBQVk7Ozs7SUFBWixVQUFhLEtBQWtCO1FBQzdCLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXO1lBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7Z0JBNUJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsK3ZCQUFtQztpQkFDcEM7O0lBMEJELG1CQUFDO0NBQUEsQUE3QkQsQ0FJa0MsYUFBYSxHQXlCOUM7U0F6QlksWUFBWTs7O0lBQ3ZCLDJCQUFZOztJQUNaLDJCQUFZOztJQUNaLDRCQUFhOztJQUNiLDZCQUFhOztJQUNiLGdDQUFrQjs7SUFZbEIsa0NBR0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWFya3MsIFNsaWRlclZhbHVlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9zbGlkZXInO1xuaW1wb3J0IHsgQ29udHJvbFdpZGdldCB9IGZyb20gJy4uLy4uL3dpZGdldCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLXNsaWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9zbGlkZXIud2lkZ2V0Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBTbGlkZXJXaWRnZXQgZXh0ZW5kcyBDb250cm9sV2lkZ2V0IGltcGxlbWVudHMgT25Jbml0IHtcbiAgbWluOiBudW1iZXI7XG4gIG1heDogbnVtYmVyO1xuICBzdGVwOiBudW1iZXI7XG4gIG1hcmtzOiBNYXJrcztcbiAgaW5jbHVkZWQ6IGJvb2xlYW47XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5taW4gPSB0aGlzLnNjaGVtYS5taW5pbXVtIHx8IDA7XG4gICAgdGhpcy5tYXggPSB0aGlzLnNjaGVtYS5tYXhpbXVtIHx8IDEwMDtcbiAgICB0aGlzLnN0ZXAgPSB0aGlzLnNjaGVtYS5tdWx0aXBsZU9mIHx8IDE7XG5cbiAgICB0aGlzLm1hcmtzID0gdGhpcy51aS5tYXJrcyB8fCBudWxsO1xuICAgIGNvbnN0IGluY2x1ZGVkID0gdGhpcy51aS5pbmNsdWRlZDtcbiAgICB0aGlzLmluY2x1ZGVkID0gdHlwZW9mIGluY2x1ZGVkID09PSAndW5kZWZpbmVkJyA/IHRydWUgOiBpbmNsdWRlZDtcbiAgfVxuXG4gIF9mb3JtYXR0ZXIgPSAodmFsdWU6IG51bWJlcikgPT4ge1xuICAgIGlmICh0aGlzLnVpLmZvcm1hdHRlcikgcmV0dXJuIHRoaXMudWkuZm9ybWF0dGVyKHZhbHVlKTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG5cbiAgX2FmdGVyQ2hhbmdlKHZhbHVlOiBTbGlkZXJWYWx1ZSkge1xuICAgIGlmICh0aGlzLnVpLmFmdGVyQ2hhbmdlKSB0aGlzLnVpLmFmdGVyQ2hhbmdlKHZhbHVlKTtcbiAgfVxufVxuIl19