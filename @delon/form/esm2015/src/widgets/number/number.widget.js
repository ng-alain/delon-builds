/**
 * @fileoverview added by tsickle
 * Generated from: src/widgets/number/number.widget.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { ControlUIWidget } from '../../widget';
export class NumberWidget extends ControlUIWidget {
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
        const { minimum, exclusiveMinimum, maximum, exclusiveMaximum, multipleOf, type } = this.schema;
        if (typeof minimum !== 'undefined') {
            this.min = exclusiveMinimum ? minimum + 1 : minimum;
        }
        if (typeof maximum !== 'undefined') {
            this.max = exclusiveMaximum ? maximum - 1 : maximum;
        }
        this.step = multipleOf || 1;
        if (type === 'integer') {
            this.min = Math.trunc(this.min);
            this.max = Math.trunc(this.max);
            this.step = Math.trunc(this.step);
        }
        /** @type {?} */
        const ui = this.ui;
        if (ui.prefix != null) {
            ui.formatter = (/**
             * @param {?} value
             * @return {?}
             */
            value => (value == null ? '' : `${ui.prefix} ${value}`));
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
            value => (value == null ? '' : `${value} ${ui.unit}`));
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
                template: "<sf-item-wrap [id]=\"id\" [schema]=\"schema\" [ui]=\"ui\" [showError]=\"showError\" [error]=\"error\" [showTitle]=\"schema.title\">\n  <nz-input-number\n    [nzId]=\"id\"\n    [ngModel]=\"value\"\n    (ngModelChange)=\"_setValue($event)\"\n    [nzDisabled]=\"disabled\"\n    [nzSize]=\"ui.size\"\n    [nzMin]=\"min\"\n    [nzMax]=\"max\"\n    [nzStep]=\"step\"\n    [nzFormatter]=\"formatter\"\n    [nzParser]=\"parser\"\n    [nzPrecision]=\"ui.precision\"\n    [nzPlaceHolder]=\"ui.placeholder || ''\"\n    [style.width.px]=\"ui.widgetWidth || 90\"\n  >\n  </nz-input-number>\n</sf-item-wrap>\n",
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm0vc3JjL3dpZGdldHMvbnVtYmVyL251bWJlci53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFTL0MsTUFBTSxPQUFPLFlBQWEsU0FBUSxlQUFxQztJQU52RTs7UUFVRSxjQUFTOzs7O1FBQXVDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFDO1FBQy9ELFdBQU07Ozs7UUFBdUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUM7SUFpQzlELENBQUM7Ozs7SUEvQkMsUUFBUTtjQUNBLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU07UUFDOUYsSUFBSSxPQUFPLE9BQU8sS0FBSyxXQUFXLEVBQUU7WUFDbEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1NBQ3JEO1FBQ0QsSUFBSSxPQUFPLE9BQU8sS0FBSyxXQUFXLEVBQUU7WUFDbEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1NBQ3JEO1FBQ0QsSUFBSSxDQUFDLElBQUksR0FBRyxVQUFVLElBQUksQ0FBQyxDQUFDO1FBQzVCLElBQUksSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUN0QixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNuQzs7Y0FFSyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUU7UUFDbEIsSUFBSSxFQUFFLENBQUMsTUFBTSxJQUFJLElBQUksRUFBRTtZQUNyQixFQUFFLENBQUMsU0FBUzs7OztZQUFHLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sSUFBSSxLQUFLLEVBQUUsQ0FBQyxDQUFBLENBQUM7WUFDdkUsRUFBRSxDQUFDLE1BQU07Ozs7WUFBRyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUEsQ0FBQztTQUN6RDtRQUNELElBQUksRUFBRSxDQUFDLElBQUksSUFBSSxJQUFJLEVBQUU7WUFDbkIsRUFBRSxDQUFDLFNBQVM7Ozs7WUFBRyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQSxDQUFDO1lBQ3JFLEVBQUUsQ0FBQyxNQUFNOzs7O1lBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFBLENBQUM7U0FDdkQ7UUFDRCxJQUFJLEVBQUUsQ0FBQyxTQUFTO1lBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDO1FBQ2hELElBQUksRUFBRSxDQUFDLE1BQU07WUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUM7SUFDekMsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsR0FBVztRQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDeEUsQ0FBQzs7O1lBM0NGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsK2xCQUFtQztnQkFDbkMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7Ozs7SUFFQywyQkFBWTs7SUFDWiwyQkFBWTs7SUFDWiw0QkFBYTs7SUFDYixpQ0FBK0Q7O0lBQy9ELDhCQUE0RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFVJV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcbmltcG9ydCB7IFNGTnVtYmVyV2lkZ2V0U2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZi1udW1iZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vbnVtYmVyLndpZGdldC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIE51bWJlcldpZGdldCBleHRlbmRzIENvbnRyb2xVSVdpZGdldDxTRk51bWJlcldpZGdldFNjaGVtYT4gaW1wbGVtZW50cyBPbkluaXQge1xuICBtaW46IG51bWJlcjtcbiAgbWF4OiBudW1iZXI7XG4gIHN0ZXA6IG51bWJlcjtcbiAgZm9ybWF0dGVyOiAodmFsdWU6IG51bWJlcikgPT4gc3RyaW5nIHwgbnVtYmVyID0gdmFsdWUgPT4gdmFsdWU7XG4gIHBhcnNlcjogKHZhbHVlOiBzdHJpbmcpID0+IHN0cmluZyB8IG51bWJlciA9IHZhbHVlID0+IHZhbHVlO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgbWluaW11bSwgZXhjbHVzaXZlTWluaW11bSwgbWF4aW11bSwgZXhjbHVzaXZlTWF4aW11bSwgbXVsdGlwbGVPZiwgdHlwZSB9ID0gdGhpcy5zY2hlbWE7XG4gICAgaWYgKHR5cGVvZiBtaW5pbXVtICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5taW4gPSBleGNsdXNpdmVNaW5pbXVtID8gbWluaW11bSArIDEgOiBtaW5pbXVtO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG1heGltdW0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLm1heCA9IGV4Y2x1c2l2ZU1heGltdW0gPyBtYXhpbXVtIC0gMSA6IG1heGltdW07XG4gICAgfVxuICAgIHRoaXMuc3RlcCA9IG11bHRpcGxlT2YgfHwgMTtcbiAgICBpZiAodHlwZSA9PT0gJ2ludGVnZXInKSB7XG4gICAgICB0aGlzLm1pbiA9IE1hdGgudHJ1bmModGhpcy5taW4pO1xuICAgICAgdGhpcy5tYXggPSBNYXRoLnRydW5jKHRoaXMubWF4KTtcbiAgICAgIHRoaXMuc3RlcCA9IE1hdGgudHJ1bmModGhpcy5zdGVwKTtcbiAgICB9XG5cbiAgICBjb25zdCB1aSA9IHRoaXMudWk7XG4gICAgaWYgKHVpLnByZWZpeCAhPSBudWxsKSB7XG4gICAgICB1aS5mb3JtYXR0ZXIgPSB2YWx1ZSA9PiAodmFsdWUgPT0gbnVsbCA/ICcnIDogYCR7dWkucHJlZml4fSAke3ZhbHVlfWApO1xuICAgICAgdWkucGFyc2VyID0gdmFsdWUgPT4gdmFsdWUucmVwbGFjZShgJHt1aS5wcmVmaXh9IGAsICcnKTtcbiAgICB9XG4gICAgaWYgKHVpLnVuaXQgIT0gbnVsbCkge1xuICAgICAgdWkuZm9ybWF0dGVyID0gdmFsdWUgPT4gKHZhbHVlID09IG51bGwgPyAnJyA6IGAke3ZhbHVlfSAke3VpLnVuaXR9YCk7XG4gICAgICB1aS5wYXJzZXIgPSB2YWx1ZSA9PiB2YWx1ZS5yZXBsYWNlKGAgJHt1aS51bml0fWAsICcnKTtcbiAgICB9XG4gICAgaWYgKHVpLmZvcm1hdHRlcikgdGhpcy5mb3JtYXR0ZXIgPSB1aS5mb3JtYXR0ZXI7XG4gICAgaWYgKHVpLnBhcnNlcikgdGhpcy5wYXJzZXIgPSB1aS5wYXJzZXI7XG4gIH1cblxuICBfc2V0VmFsdWUodmFsOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnNldFZhbHVlKHRoaXMuc2NoZW1hLnR5cGUgPT09ICdpbnRlZ2VyJyA/IE1hdGguZmxvb3IodmFsKSA6IHZhbCk7XG4gIH1cbn1cbiJdfQ==