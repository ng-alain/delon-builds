/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ControlWidget } from '../../widget';
var SliderWidget = /** @class */ (function (_super) {
    tslib_1.__extends(SliderWidget, _super);
    function SliderWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._formatter = function (value) {
            if (_this.ui.formatter)
                return _this.ui.formatter(value);
            return value;
        };
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
                    template: "\n  <sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n\n    <nz-slider\n      [ngModel]=\"value\"\n      (ngModelChange)=\"setValue($event)\"\n      [nzDisabled]=\"disabled\"\n      [nzRange]=\"ui.range\"\n      [nzMin]=\"min\"\n      [nzMax]=\"max\"\n      [nzStep]=\"step\"\n      [nzMarks]=\"marks\"\n      [nzDots]=\"ui.dots\"\n      [nzIncluded]=\"included\"\n      [nzVertical]=\"ui.vertical\"\n      [nzTipFormatter]=\"_formatter\"\n      (nzOnAfterChange)=\"_afterChange($event)\">\n    </nz-slider>\n\n  </sf-item-wrap>\n  ",
                    preserveWhitespaces: false
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9mb3JtLyIsInNvdXJjZXMiOlsic3JjL3dpZGdldHMvc2xpZGVyL3NsaWRlci53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFN0M7SUF5QmtDLHdDQUFhO0lBekIvQztRQUFBLHFFQWtEQztRQVJDLGdCQUFVLEdBQUcsVUFBQyxLQUFVO1lBQ3RCLElBQUksS0FBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTO2dCQUFFLE9BQU8sS0FBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkQsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDLENBQUE7O0lBS0gsQ0FBQzs7OztJQWxCQywrQkFBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLEdBQUcsQ0FBQztRQUN0QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQztRQUV4QyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQzs7WUFDN0IsUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUTtRQUNqQyxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sUUFBUSxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7SUFDcEUsQ0FBQzs7Ozs7SUFPRCxtQ0FBWTs7OztJQUFaLFVBQWEsS0FBVTtRQUNyQixJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVztZQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RELENBQUM7O2dCQWpERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLFFBQVEsRUFBRSx5bUJBb0JUO29CQUNELG1CQUFtQixFQUFFLEtBQUs7aUJBQzNCOztJQTBCRCxtQkFBQztDQUFBLEFBbERELENBeUJrQyxhQUFhLEdBeUI5QztTQXpCWSxZQUFZOzs7SUFDdkIsMkJBQVk7O0lBQ1osMkJBQVk7O0lBQ1osNEJBQWE7O0lBQ2IsNkJBQVc7O0lBQ1gsZ0NBQWtCOztJQVlsQixrQ0FHQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2Ytc2xpZGVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgPHNmLWl0ZW0td3JhcCBbaWRdPVwiaWRcIiBbc2NoZW1hXT1cInNjaGVtYVwiIFt1aV09XCJ1aVwiIFtzaG93RXJyb3JdPVwic2hvd0Vycm9yXCIgW2Vycm9yXT1cImVycm9yXCIgW3Nob3dUaXRsZV09XCJzY2hlbWEudGl0bGVcIj5cblxuICAgIDxuei1zbGlkZXJcbiAgICAgIFtuZ01vZGVsXT1cInZhbHVlXCJcbiAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInNldFZhbHVlKCRldmVudClcIlxuICAgICAgW256RGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgW256UmFuZ2VdPVwidWkucmFuZ2VcIlxuICAgICAgW256TWluXT1cIm1pblwiXG4gICAgICBbbnpNYXhdPVwibWF4XCJcbiAgICAgIFtuelN0ZXBdPVwic3RlcFwiXG4gICAgICBbbnpNYXJrc109XCJtYXJrc1wiXG4gICAgICBbbnpEb3RzXT1cInVpLmRvdHNcIlxuICAgICAgW256SW5jbHVkZWRdPVwiaW5jbHVkZWRcIlxuICAgICAgW256VmVydGljYWxdPVwidWkudmVydGljYWxcIlxuICAgICAgW256VGlwRm9ybWF0dGVyXT1cIl9mb3JtYXR0ZXJcIlxuICAgICAgKG56T25BZnRlckNoYW5nZSk9XCJfYWZ0ZXJDaGFuZ2UoJGV2ZW50KVwiPlxuICAgIDwvbnotc2xpZGVyPlxuXG4gIDwvc2YtaXRlbS13cmFwPlxuICBgLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgU2xpZGVyV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFdpZGdldCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIG1pbjogbnVtYmVyO1xuICBtYXg6IG51bWJlcjtcbiAgc3RlcDogbnVtYmVyO1xuICBtYXJrczogYW55O1xuICBpbmNsdWRlZDogYm9vbGVhbjtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm1pbiA9IHRoaXMuc2NoZW1hLm1pbmltdW0gfHwgMDtcbiAgICB0aGlzLm1heCA9IHRoaXMuc2NoZW1hLm1heGltdW0gfHwgMTAwO1xuICAgIHRoaXMuc3RlcCA9IHRoaXMuc2NoZW1hLm11bHRpcGxlT2YgfHwgMTtcblxuICAgIHRoaXMubWFya3MgPSB0aGlzLnVpLm1hcmtzIHx8IG51bGw7XG4gICAgY29uc3QgaW5jbHVkZWQgPSB0aGlzLnVpLmluY2x1ZGVkO1xuICAgIHRoaXMuaW5jbHVkZWQgPSB0eXBlb2YgaW5jbHVkZWQgPT09ICd1bmRlZmluZWQnID8gdHJ1ZSA6IGluY2x1ZGVkO1xuICB9XG5cbiAgX2Zvcm1hdHRlciA9ICh2YWx1ZTogYW55KSA9PiB7XG4gICAgaWYgKHRoaXMudWkuZm9ybWF0dGVyKSByZXR1cm4gdGhpcy51aS5mb3JtYXR0ZXIodmFsdWUpO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIF9hZnRlckNoYW5nZSh2YWx1ZTogYW55KSB7XG4gICAgaWYgKHRoaXMudWkuYWZ0ZXJDaGFuZ2UpIHRoaXMudWkuYWZ0ZXJDaGFuZ2UodmFsdWUpO1xuICB9XG59XG4iXX0=