/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ControlWidget } from '../../widget';
var NumberWidget = /** @class */ (function (_super) {
    tslib_1.__extends(NumberWidget, _super);
    function NumberWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.formatter = (/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return value; });
        _this.parser = (/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return value; });
        return _this;
    }
    /**
     * @return {?}
     */
    NumberWidget.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _a = this, schema = _a.schema, ui = _a.ui;
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
            function (value) { return (value == null ? '' : ui.prefix + " " + value); });
            ui.parser = (/**
             * @param {?} value
             * @return {?}
             */
            function (value) { return value.replace(ui.prefix + " ", ''); });
        }
        if (ui.unit != null) {
            ui.formatter = (/**
             * @param {?} value
             * @return {?}
             */
            function (value) { return (value == null ? '' : value + " " + ui.unit); });
            ui.parser = (/**
             * @param {?} value
             * @return {?}
             */
            function (value) { return value.replace(" " + ui.unit, ''); });
        }
        if (ui.formatter)
            this.formatter = ui.formatter;
        if (ui.parser)
            this.parser = ui.parser;
    };
    /**
     * @param {?} val
     * @return {?}
     */
    NumberWidget.prototype._setValue = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.setValue(this.schema.type === 'integer' ? Math.floor(val) : val);
    };
    NumberWidget.decorators = [
        { type: Component, args: [{
                    selector: 'sf-number',
                    template: "<sf-item-wrap [id]=\"id\"\n              [schema]=\"schema\"\n              [ui]=\"ui\"\n              [showError]=\"showError\"\n              [error]=\"error\"\n              [showTitle]=\"schema.title\">\n  <nz-input-number [ngModel]=\"value\"\n                   (ngModelChange)=\"_setValue($event)\"\n                   [nzDisabled]=\"disabled\"\n                   [nzSize]=\"ui.size\"\n                   [nzMin]=\"min\"\n                   [nzMax]=\"max\"\n                   [nzStep]=\"step\"\n                   [nzFormatter]=\"formatter\"\n                   [nzParser]=\"parser\"\n                   [nzPrecision]=\"ui.precision\"\n                   [nzPlaceHolder]=\"ui.placeholder || ''\">\n  </nz-input-number>\n</sf-item-wrap>\n"
                }] }
    ];
    return NumberWidget;
}(ControlWidget));
export { NumberWidget };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9mb3JtLyIsInNvdXJjZXMiOlsic3JjL3dpZGdldHMvbnVtYmVyL251bWJlci53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFN0M7SUFJa0Msd0NBQWE7SUFKL0M7UUFBQSxxRUF3Q0M7UUFoQ0MsZUFBUzs7OztRQUFHLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxFQUFMLENBQUssRUFBQztRQUMzQixZQUFNOzs7O1FBQUcsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLEVBQUwsQ0FBSyxFQUFDOztJQStCMUIsQ0FBQzs7OztJQTdCQywrQkFBUTs7O0lBQVI7UUFDUSxJQUFBLFNBQXFCLEVBQW5CLGtCQUFNLEVBQUUsVUFBVztRQUMzQixJQUFJLE9BQU8sTUFBTSxDQUFDLE9BQU8sS0FBSyxXQUFXLEVBQUU7WUFDekMsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO1NBQzFFO1FBQ0QsSUFBSSxPQUFPLE1BQU0sQ0FBQyxPQUFPLEtBQUssV0FBVyxFQUFFO1lBQ3pDLElBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztTQUMxRTtRQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUM7UUFDbkMsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUM3QixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNuQztRQUNELElBQUksRUFBRSxDQUFDLE1BQU0sSUFBSSxJQUFJLEVBQUU7WUFDckIsRUFBRSxDQUFDLFNBQVM7Ozs7WUFBRyxVQUFBLEtBQUssSUFBSSxPQUFBLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBSSxFQUFFLENBQUMsTUFBTSxTQUFJLEtBQU8sQ0FBQyxFQUE5QyxDQUE4QyxDQUFBLENBQUM7WUFDdkUsRUFBRSxDQUFDLE1BQU07Ozs7WUFBRyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxPQUFPLENBQUksRUFBRSxDQUFDLE1BQU0sTUFBRyxFQUFFLEVBQUUsQ0FBQyxFQUFsQyxDQUFrQyxDQUFBLENBQUM7U0FDekQ7UUFDRCxJQUFJLEVBQUUsQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFFO1lBQ25CLEVBQUUsQ0FBQyxTQUFTOzs7O1lBQUcsVUFBQSxLQUFLLElBQUksT0FBQSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUksS0FBSyxTQUFJLEVBQUUsQ0FBQyxJQUFNLENBQUMsRUFBNUMsQ0FBNEMsQ0FBQSxDQUFDO1lBQ3JFLEVBQUUsQ0FBQyxNQUFNOzs7O1lBQUcsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQUksRUFBRSxDQUFDLElBQU0sRUFBRSxFQUFFLENBQUMsRUFBaEMsQ0FBZ0MsQ0FBQSxDQUFDO1NBQ3ZEO1FBQ0QsSUFBSSxFQUFFLENBQUMsU0FBUztZQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQztRQUNoRCxJQUFJLEVBQUUsQ0FBQyxNQUFNO1lBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDO0lBQ3pDLENBQUM7Ozs7O0lBRUQsZ0NBQVM7Ozs7SUFBVCxVQUFVLEdBQVc7UUFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7O2dCQXZDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLHF2QkFBbUM7aUJBQ3BDOztJQXFDRCxtQkFBQztDQUFBLEFBeENELENBSWtDLGFBQWEsR0FvQzlDO1NBcENZLFlBQVk7OztJQUN2QiwyQkFBWTs7SUFDWiwyQkFBWTs7SUFDWiw0QkFBYTs7SUFDYixpQ0FBMkI7O0lBQzNCLDhCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sV2lkZ2V0IH0gZnJvbSAnLi4vLi4vd2lkZ2V0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2YtbnVtYmVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL251bWJlci53aWRnZXQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIE51bWJlcldpZGdldCBleHRlbmRzIENvbnRyb2xXaWRnZXQgaW1wbGVtZW50cyBPbkluaXQge1xuICBtaW46IG51bWJlcjtcbiAgbWF4OiBudW1iZXI7XG4gIHN0ZXA6IG51bWJlcjtcbiAgZm9ybWF0dGVyID0gdmFsdWUgPT4gdmFsdWU7XG4gIHBhcnNlciA9IHZhbHVlID0+IHZhbHVlO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgc2NoZW1hLCB1aSB9ID0gdGhpcztcbiAgICBpZiAodHlwZW9mIHNjaGVtYS5taW5pbXVtICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5taW4gPSBzY2hlbWEuZXhjbHVzaXZlTWluaW11bSA/IHNjaGVtYS5taW5pbXVtICsgMSA6IHNjaGVtYS5taW5pbXVtO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHNjaGVtYS5tYXhpbXVtICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5tYXggPSBzY2hlbWEuZXhjbHVzaXZlTWF4aW11bSA/IHNjaGVtYS5tYXhpbXVtIC0gMSA6IHNjaGVtYS5tYXhpbXVtO1xuICAgIH1cbiAgICB0aGlzLnN0ZXAgPSBzY2hlbWEubXVsdGlwbGVPZiB8fCAxO1xuICAgIGlmIChzY2hlbWEudHlwZSA9PT0gJ2ludGVnZXInKSB7XG4gICAgICB0aGlzLm1pbiA9IE1hdGgudHJ1bmModGhpcy5taW4pO1xuICAgICAgdGhpcy5tYXggPSBNYXRoLnRydW5jKHRoaXMubWF4KTtcbiAgICAgIHRoaXMuc3RlcCA9IE1hdGgudHJ1bmModGhpcy5zdGVwKTtcbiAgICB9XG4gICAgaWYgKHVpLnByZWZpeCAhPSBudWxsKSB7XG4gICAgICB1aS5mb3JtYXR0ZXIgPSB2YWx1ZSA9PiAodmFsdWUgPT0gbnVsbCA/ICcnIDogYCR7dWkucHJlZml4fSAke3ZhbHVlfWApO1xuICAgICAgdWkucGFyc2VyID0gdmFsdWUgPT4gdmFsdWUucmVwbGFjZShgJHt1aS5wcmVmaXh9IGAsICcnKTtcbiAgICB9XG4gICAgaWYgKHVpLnVuaXQgIT0gbnVsbCkge1xuICAgICAgdWkuZm9ybWF0dGVyID0gdmFsdWUgPT4gKHZhbHVlID09IG51bGwgPyAnJyA6IGAke3ZhbHVlfSAke3VpLnVuaXR9YCk7XG4gICAgICB1aS5wYXJzZXIgPSB2YWx1ZSA9PiB2YWx1ZS5yZXBsYWNlKGAgJHt1aS51bml0fWAsICcnKTtcbiAgICB9XG4gICAgaWYgKHVpLmZvcm1hdHRlcikgdGhpcy5mb3JtYXR0ZXIgPSB1aS5mb3JtYXR0ZXI7XG4gICAgaWYgKHVpLnBhcnNlcikgdGhpcy5wYXJzZXIgPSB1aS5wYXJzZXI7XG4gIH1cblxuICBfc2V0VmFsdWUodmFsOiBudW1iZXIpIHtcbiAgICB0aGlzLnNldFZhbHVlKHRoaXMuc2NoZW1hLnR5cGUgPT09ICdpbnRlZ2VyJyA/IE1hdGguZmxvb3IodmFsKSA6IHZhbCk7XG4gIH1cbn1cbiJdfQ==