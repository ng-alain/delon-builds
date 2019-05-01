/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { ControlWidget } from '../../widget';
export class SliderWidget extends ControlWidget {
    constructor() {
        super(...arguments);
        this._formatter = (/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            if (this.ui.formatter)
                return this.ui.formatter(value);
            return value;
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.min = this.schema.minimum || 0;
        this.max = this.schema.maximum || 100;
        this.step = this.schema.multipleOf || 1;
        this.marks = this.ui.marks || null;
        /** @type {?} */
        const included = this.ui.included;
        this.included = typeof included === 'undefined' ? true : included;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    _afterChange(value) {
        if (this.ui.afterChange)
            this.ui.afterChange(value);
    }
}
SliderWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-slider',
                template: "<sf-item-wrap [id]=\"id\"\n              [schema]=\"schema\"\n              [ui]=\"ui\"\n              [showError]=\"showError\"\n              [error]=\"error\"\n              [showTitle]=\"schema.title\">\n\n  <nz-slider [ngModel]=\"value\"\n             (ngModelChange)=\"setValue($event)\"\n             [nzDisabled]=\"disabled\"\n             [nzRange]=\"ui.range\"\n             [nzMin]=\"min\"\n             [nzMax]=\"max\"\n             [nzStep]=\"step\"\n             [nzMarks]=\"marks\"\n             [nzDots]=\"ui.dots\"\n             [nzIncluded]=\"included\"\n             [nzVertical]=\"ui.vertical\"\n             [nzTipFormatter]=\"_formatter\"\n             (nzOnAfterChange)=\"_afterChange($event)\">\n  </nz-slider>\n\n</sf-item-wrap>\n"
            }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9mb3JtLyIsInNvdXJjZXMiOlsic3JjL3dpZGdldHMvc2xpZGVyL3NsaWRlci53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQU03QyxNQUFNLE9BQU8sWUFBYSxTQUFRLGFBQWE7SUFKL0M7O1FBcUJFLGVBQVU7Ozs7UUFBRyxDQUFDLEtBQWEsRUFBRSxFQUFFO1lBQzdCLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTO2dCQUFFLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkQsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDLEVBQUM7SUFLSixDQUFDOzs7O0lBbEJDLFFBQVE7UUFDTixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLEdBQUcsQ0FBQztRQUN0QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQztRQUV4QyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQzs7Y0FDN0IsUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUTtRQUNqQyxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sUUFBUSxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7SUFDcEUsQ0FBQzs7Ozs7SUFPRCxZQUFZLENBQUMsS0FBa0I7UUFDN0IsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVc7WUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0RCxDQUFDOzs7WUE1QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQiwrdkJBQW1DO2FBQ3BDOzs7O0lBRUMsMkJBQVk7O0lBQ1osMkJBQVk7O0lBQ1osNEJBQWE7O0lBQ2IsNkJBQWE7O0lBQ2IsZ0NBQWtCOztJQVlsQixrQ0FHRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXJrcywgU2xpZGVyVmFsdWUgfSBmcm9tICduZy16b3Jyby1hbnRkL3NsaWRlcic7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2Ytc2xpZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NsaWRlci53aWRnZXQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFNsaWRlcldpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xuICBtaW46IG51bWJlcjtcbiAgbWF4OiBudW1iZXI7XG4gIHN0ZXA6IG51bWJlcjtcbiAgbWFya3M6IE1hcmtzO1xuICBpbmNsdWRlZDogYm9vbGVhbjtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm1pbiA9IHRoaXMuc2NoZW1hLm1pbmltdW0gfHwgMDtcbiAgICB0aGlzLm1heCA9IHRoaXMuc2NoZW1hLm1heGltdW0gfHwgMTAwO1xuICAgIHRoaXMuc3RlcCA9IHRoaXMuc2NoZW1hLm11bHRpcGxlT2YgfHwgMTtcblxuICAgIHRoaXMubWFya3MgPSB0aGlzLnVpLm1hcmtzIHx8IG51bGw7XG4gICAgY29uc3QgaW5jbHVkZWQgPSB0aGlzLnVpLmluY2x1ZGVkO1xuICAgIHRoaXMuaW5jbHVkZWQgPSB0eXBlb2YgaW5jbHVkZWQgPT09ICd1bmRlZmluZWQnID8gdHJ1ZSA6IGluY2x1ZGVkO1xuICB9XG5cbiAgX2Zvcm1hdHRlciA9ICh2YWx1ZTogbnVtYmVyKSA9PiB7XG4gICAgaWYgKHRoaXMudWkuZm9ybWF0dGVyKSByZXR1cm4gdGhpcy51aS5mb3JtYXR0ZXIodmFsdWUpO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcblxuICBfYWZ0ZXJDaGFuZ2UodmFsdWU6IFNsaWRlclZhbHVlKSB7XG4gICAgaWYgKHRoaXMudWkuYWZ0ZXJDaGFuZ2UpIHRoaXMudWkuYWZ0ZXJDaGFuZ2UodmFsdWUpO1xuICB9XG59XG4iXX0=