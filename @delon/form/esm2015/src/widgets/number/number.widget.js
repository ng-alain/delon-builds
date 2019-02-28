/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { ControlWidget } from '../../widget';
export class NumberWidget extends ControlWidget {
    constructor() {
        super(...arguments);
        this.formatter = (/**
         * @param {?} value
         * @return {?}
         */
        value => value);
        this.parser = (/**
         * @param {?} value
         * @return {?}
         */
        value => value);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        const { schema, ui } = this;
        if (typeof schema.minimum !== 'undefined') {
            this.min = schema.exclusiveMinimum ? schema.minimum + 1 : schema.minimum;
        }
        if (typeof schema.maximum !== 'undefined') {
            this.max = schema.exclusiveMaximum ? schema.maximum - 1 : schema.maximum;
        }
        this.step = schema.multipleOf || 1;
        if (schema.type === 'integer') {
            this.min = Math.trunc(this.min);
            this.max = Math.trunc(this.max);
            this.step = Math.trunc(this.step);
        }
        if (ui.prefix != null) {
            ui.formatter = (/**
             * @param {?} value
             * @return {?}
             */
            value => `${ui.prefix} ${value}`);
            ui.parser = (/**
             * @param {?} value
             * @return {?}
             */
            value => value.replace(`${ui.prefix} `, ''));
        }
        if (ui.unit != null) {
            ui.formatter = (/**
             * @param {?} value
             * @return {?}
             */
            value => `${value} ${ui.unit}`);
            ui.parser = (/**
             * @param {?} value
             * @return {?}
             */
            value => value.replace(` ${ui.unit}`, ''));
        }
        if (ui.formatter)
            this.formatter = ui.formatter;
        if (ui.parser)
            this.parser = ui.parser;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    _setValue(val) {
        this.setValue(this.schema.type === 'integer' ? Math.floor(val) : val);
    }
}
NumberWidget.decorators = [
    { type: Component, args: [{
                selector: 'sf-number',
                template: "<sf-item-wrap [id]=\"id\"\n              [schema]=\"schema\"\n              [ui]=\"ui\"\n              [showError]=\"showError\"\n              [error]=\"error\"\n              [showTitle]=\"schema.title\">\n  <nz-input-number [ngModel]=\"value\"\n                   (ngModelChange)=\"_setValue($event)\"\n                   [nzDisabled]=\"disabled\"\n                   [nzSize]=\"ui.size\"\n                   [nzMin]=\"min\"\n                   [nzMax]=\"max\"\n                   [nzStep]=\"step\"\n                   [nzFormatter]=\"formatter\"\n                   [nzParser]=\"parser\"\n                   [nzPrecision]=\"ui.precision\"\n                   [nzPlaceHolder]=\"ui.placeholder || ''\">\n  </nz-input-number>\n</sf-item-wrap>\n"
            }] }
];
if (false) {
    /** @type {?} */
    NumberWidget.prototype.min;
    /** @type {?} */
    NumberWidget.prototype.max;
    /** @type {?} */
    NumberWidget.prototype.step;
    /** @type {?} */
    NumberWidget.prototype.formatter;
    /** @type {?} */
    NumberWidget.prototype.parser;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9mb3JtLyIsInNvdXJjZXMiOlsic3JjL3dpZGdldHMvbnVtYmVyL251bWJlci53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQU03QyxNQUFNLE9BQU8sWUFBYSxTQUFRLGFBQWE7SUFKL0M7O1FBUUUsY0FBUzs7OztRQUFHLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFDO1FBQzNCLFdBQU07Ozs7UUFBRyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBQztJQStCMUIsQ0FBQzs7OztJQTdCQyxRQUFRO2NBQ0EsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLEdBQUcsSUFBSTtRQUMzQixJQUFJLE9BQU8sTUFBTSxDQUFDLE9BQU8sS0FBSyxXQUFXLEVBQUU7WUFDekMsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO1NBQzFFO1FBQ0QsSUFBSSxPQUFPLE1BQU0sQ0FBQyxPQUFPLEtBQUssV0FBVyxFQUFFO1lBQ3pDLElBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztTQUMxRTtRQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUM7UUFDbkMsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUM3QixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNuQztRQUNELElBQUksRUFBRSxDQUFDLE1BQU0sSUFBSSxJQUFJLEVBQUU7WUFDckIsRUFBRSxDQUFDLFNBQVM7Ozs7WUFBRyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sSUFBSSxLQUFLLEVBQUUsQ0FBQSxDQUFDO1lBQ2hELEVBQUUsQ0FBQyxNQUFNOzs7O1lBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFBLENBQUM7U0FDekQ7UUFDRCxJQUFJLEVBQUUsQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFFO1lBQ25CLEVBQUUsQ0FBQyxTQUFTOzs7O1lBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUEsQ0FBQztZQUM5QyxFQUFFLENBQUMsTUFBTTs7OztZQUFHLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQSxDQUFDO1NBQ3ZEO1FBQ0QsSUFBSSxFQUFFLENBQUMsU0FBUztZQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQztRQUNoRCxJQUFJLEVBQUUsQ0FBQyxNQUFNO1lBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDO0lBQ3pDLENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLEdBQVc7UUFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7OztZQXZDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLHF2QkFBbUM7YUFDcEM7Ozs7SUFFQywyQkFBWTs7SUFDWiwyQkFBWTs7SUFDWiw0QkFBYTs7SUFDYixpQ0FBMkI7O0lBQzNCLDhCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtbnVtYmVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL251bWJlci53aWRnZXQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIE51bWJlcldpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xuICBtaW46IG51bWJlcjtcbiAgbWF4OiBudW1iZXI7XG4gIHN0ZXA6IG51bWJlcjtcbiAgZm9ybWF0dGVyID0gdmFsdWUgPT4gdmFsdWU7XG4gIHBhcnNlciA9IHZhbHVlID0+IHZhbHVlO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgc2NoZW1hLCB1aSB9ID0gdGhpcztcbiAgICBpZiAodHlwZW9mIHNjaGVtYS5taW5pbXVtICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5taW4gPSBzY2hlbWEuZXhjbHVzaXZlTWluaW11bSA/IHNjaGVtYS5taW5pbXVtICsgMSA6IHNjaGVtYS5taW5pbXVtO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHNjaGVtYS5tYXhpbXVtICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5tYXggPSBzY2hlbWEuZXhjbHVzaXZlTWF4aW11bSA/IHNjaGVtYS5tYXhpbXVtIC0gMSA6IHNjaGVtYS5tYXhpbXVtO1xuICAgIH1cbiAgICB0aGlzLnN0ZXAgPSBzY2hlbWEubXVsdGlwbGVPZiB8fCAxO1xuICAgIGlmIChzY2hlbWEudHlwZSA9PT0gJ2ludGVnZXInKSB7XG4gICAgICB0aGlzLm1pbiA9IE1hdGgudHJ1bmModGhpcy5taW4pO1xuICAgICAgdGhpcy5tYXggPSBNYXRoLnRydW5jKHRoaXMubWF4KTtcbiAgICAgIHRoaXMuc3RlcCA9IE1hdGgudHJ1bmModGhpcy5zdGVwKTtcbiAgICB9XG4gICAgaWYgKHVpLnByZWZpeCAhPSBudWxsKSB7XG4gICAgICB1aS5mb3JtYXR0ZXIgPSB2YWx1ZSA9PiBgJHt1aS5wcmVmaXh9ICR7dmFsdWV9YDtcbiAgICAgIHVpLnBhcnNlciA9IHZhbHVlID0+IHZhbHVlLnJlcGxhY2UoYCR7dWkucHJlZml4fSBgLCAnJyk7XG4gICAgfVxuICAgIGlmICh1aS51bml0ICE9IG51bGwpIHtcbiAgICAgIHVpLmZvcm1hdHRlciA9IHZhbHVlID0+IGAke3ZhbHVlfSAke3VpLnVuaXR9YDtcbiAgICAgIHVpLnBhcnNlciA9IHZhbHVlID0+IHZhbHVlLnJlcGxhY2UoYCAke3VpLnVuaXR9YCwgJycpO1xuICAgIH1cbiAgICBpZiAodWkuZm9ybWF0dGVyKSB0aGlzLmZvcm1hdHRlciA9IHVpLmZvcm1hdHRlcjtcbiAgICBpZiAodWkucGFyc2VyKSB0aGlzLnBhcnNlciA9IHVpLnBhcnNlcjtcbiAgfVxuXG4gIF9zZXRWYWx1ZSh2YWw6IG51bWJlcikge1xuICAgIHRoaXMuc2V0VmFsdWUodGhpcy5zY2hlbWEudHlwZSA9PT0gJ2ludGVnZXInID8gTWF0aC5mbG9vcih2YWwpIDogdmFsKTtcbiAgfVxufVxuIl19