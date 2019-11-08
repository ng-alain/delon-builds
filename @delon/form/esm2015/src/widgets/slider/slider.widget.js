/**
 * @fileoverview added by tsickle
 * Generated from: src/widgets/slider/slider.widget.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { ControlUIWidget } from '../../widget';
export class SliderWidget extends ControlUIWidget {
    constructor() {
        super(...arguments);
        this._formatter = (/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            const { formatter } = this.ui;
            if (formatter)
                return formatter(value);
            return value;
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        const { minimum, maximum, multipleOf } = this.schema;
        this.min = minimum || 0;
        this.max = maximum || 100;
        this.step = multipleOf || 1;
        const { marks, included } = this.ui;
        this.marks = marks || null;
        this.included = typeof included === 'undefined' ? true : included;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    _afterChange(value) {
        const { afterChange } = this.ui;
        if (afterChange)
            return afterChange(value);
    }
}
SliderWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-slider',
                template: "<sf-item-wrap [id]=\"id\"\n              [schema]=\"schema\"\n              [ui]=\"ui\"\n              [showError]=\"showError\"\n              [error]=\"error\"\n              [showTitle]=\"schema.title\">\n\n  <nz-slider [ngModel]=\"value\"\n             (ngModelChange)=\"setValue($event)\"\n             [nzDisabled]=\"disabled\"\n             [nzRange]=\"ui.range\"\n             [nzMin]=\"min\"\n             [nzMax]=\"max\"\n             [nzStep]=\"step\"\n             [nzMarks]=\"marks\"\n             [nzDots]=\"ui.dots\"\n             [nzIncluded]=\"included\"\n             [nzVertical]=\"ui.vertical\"\n             [nzTipFormatter]=\"_formatter\"\n             (nzOnAfterChange)=\"_afterChange($event)\">\n  </nz-slider>\n\n</sf-item-wrap>\n",
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9mb3JtLyIsInNvdXJjZXMiOlsic3JjL3dpZGdldHMvc2xpZGVyL3NsaWRlci53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFTL0MsTUFBTSxPQUFPLFlBQWEsU0FBUSxlQUFxQztJQU52RTs7UUF3QkUsZUFBVTs7OztRQUFHLENBQUMsS0FBYSxFQUFFLEVBQUU7a0JBQ3ZCLEVBQUUsU0FBUyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUU7WUFDN0IsSUFBSSxTQUFTO2dCQUFFLE9BQU8sU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZDLE9BQU8sS0FBSyxDQUFDO1FBQ2YsQ0FBQyxFQUFDO0lBTUosQ0FBQzs7OztJQXJCQyxRQUFRO2NBQ0EsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNO1FBQ3BELElBQUksQ0FBQyxHQUFHLEdBQUcsT0FBTyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsR0FBRyxHQUFHLE9BQU8sSUFBSSxHQUFHLENBQUM7UUFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxVQUFVLElBQUksQ0FBQyxDQUFDO2NBRXRCLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFO1FBQ25DLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxJQUFJLElBQUksQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sUUFBUSxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7SUFDcEUsQ0FBQzs7Ozs7SUFRRCxZQUFZLENBQUMsS0FBa0I7Y0FDdkIsRUFBRSxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRTtRQUMvQixJQUFJLFdBQVc7WUFBRSxPQUFPLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7WUFqQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQiwrdkJBQW1DO2dCQUNuQyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUN0Qzs7OztJQUVDLDJCQUFZOztJQUNaLDJCQUFZOztJQUNaLDRCQUFhOztJQUNiLDZCQUFvQjs7SUFDcEIsZ0NBQWtCOztJQWFsQixrQ0FJRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWFya3MsIFNsaWRlclZhbHVlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9zbGlkZXInO1xuaW1wb3J0IHsgQ29udHJvbFVJV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcbmltcG9ydCB7IFNGU2xpZGVyV2lkZ2V0U2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1zbGlkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vc2xpZGVyLndpZGdldC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIFNsaWRlcldpZGdldCBleHRlbmRzIENvbnRyb2xVSVdpZGdldDxTRlNsaWRlcldpZGdldFNjaGVtYT4gaW1wbGVtZW50cyBPbkluaXQge1xuICBtaW46IG51bWJlcjtcbiAgbWF4OiBudW1iZXI7XG4gIHN0ZXA6IG51bWJlcjtcbiAgbWFya3M6IE1hcmtzIHwgbnVsbDtcbiAgaW5jbHVkZWQ6IGJvb2xlYW47XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgeyBtaW5pbXVtLCBtYXhpbXVtLCBtdWx0aXBsZU9mIH0gPSB0aGlzLnNjaGVtYTtcbiAgICB0aGlzLm1pbiA9IG1pbmltdW0gfHwgMDtcbiAgICB0aGlzLm1heCA9IG1heGltdW0gfHwgMTAwO1xuICAgIHRoaXMuc3RlcCA9IG11bHRpcGxlT2YgfHwgMTtcblxuICAgIGNvbnN0IHsgbWFya3MsIGluY2x1ZGVkIH0gPSB0aGlzLnVpO1xuICAgIHRoaXMubWFya3MgPSBtYXJrcyB8fCBudWxsO1xuICAgIHRoaXMuaW5jbHVkZWQgPSB0eXBlb2YgaW5jbHVkZWQgPT09ICd1bmRlZmluZWQnID8gdHJ1ZSA6IGluY2x1ZGVkO1xuICB9XG5cbiAgX2Zvcm1hdHRlciA9ICh2YWx1ZTogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgeyBmb3JtYXR0ZXIgfSA9IHRoaXMudWk7XG4gICAgaWYgKGZvcm1hdHRlcikgcmV0dXJuIGZvcm1hdHRlcih2YWx1ZSk7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xuXG4gIF9hZnRlckNoYW5nZSh2YWx1ZTogU2xpZGVyVmFsdWUpIHtcbiAgICBjb25zdCB7IGFmdGVyQ2hhbmdlIH0gPSB0aGlzLnVpO1xuICAgIGlmIChhZnRlckNoYW5nZSkgcmV0dXJuIGFmdGVyQ2hhbmdlKHZhbHVlKTtcbiAgfVxufVxuIl19