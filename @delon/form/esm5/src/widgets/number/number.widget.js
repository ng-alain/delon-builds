/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { ControlUIWidget } from '../../widget';
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
        var _a = this.schema, minimum = _a.minimum, exclusiveMinimum = _a.exclusiveMinimum, maximum = _a.maximum, exclusiveMaximum = _a.exclusiveMaximum, multipleOf = _a.multipleOf, type = _a.type;
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
        var ui = this.ui;
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
                    template: "<sf-item-wrap [id]=\"id\"\n              [schema]=\"schema\"\n              [ui]=\"ui\"\n              [showError]=\"showError\"\n              [error]=\"error\"\n              [showTitle]=\"schema.title\">\n  <nz-input-number [ngModel]=\"value\"\n                   (ngModelChange)=\"_setValue($event)\"\n                   [nzDisabled]=\"disabled\"\n                   [nzSize]=\"ui.size\"\n                   [nzMin]=\"min\"\n                   [nzMax]=\"max\"\n                   [nzStep]=\"step\"\n                   [nzFormatter]=\"formatter\"\n                   [nzParser]=\"parser\"\n                   [nzPrecision]=\"ui.precision\"\n                   [nzPlaceHolder]=\"ui.placeholder || ''\">\n  </nz-input-number>\n</sf-item-wrap>\n",
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    return NumberWidget;
}(ControlUIWidget));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLndpZGdldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9mb3JtLyIsInNvdXJjZXMiOlsic3JjL3dpZGdldHMvbnVtYmVyL251bWJlci53aWRnZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFHL0M7SUFNa0Msd0NBQXFDO0lBTnZFO1FBQUEscUVBNENDO1FBbENDLGVBQVM7Ozs7UUFBdUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLEVBQUwsQ0FBSyxFQUFDO1FBQy9ELFlBQU07Ozs7UUFBdUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLEVBQUwsQ0FBSyxFQUFDOztJQWlDOUQsQ0FBQzs7OztJQS9CQywrQkFBUTs7O0lBQVI7UUFDUSxJQUFBLGdCQUF3RixFQUF0RixvQkFBTyxFQUFFLHNDQUFnQixFQUFFLG9CQUFPLEVBQUUsc0NBQWdCLEVBQUUsMEJBQVUsRUFBRSxjQUFvQjtRQUM5RixJQUFJLE9BQU8sT0FBTyxLQUFLLFdBQVcsRUFBRTtZQUNsQyxJQUFJLENBQUMsR0FBRyxHQUFHLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7U0FDckQ7UUFDRCxJQUFJLE9BQU8sT0FBTyxLQUFLLFdBQVcsRUFBRTtZQUNsQyxJQUFJLENBQUMsR0FBRyxHQUFHLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7U0FDckQ7UUFDRCxJQUFJLENBQUMsSUFBSSxHQUFHLFVBQVUsSUFBSSxDQUFDLENBQUM7UUFDNUIsSUFBSSxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ25DOztZQUVLLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRTtRQUNsQixJQUFJLEVBQUUsQ0FBQyxNQUFNLElBQUksSUFBSSxFQUFFO1lBQ3JCLEVBQUUsQ0FBQyxTQUFTOzs7O1lBQUcsVUFBQSxLQUFLLElBQUksT0FBQSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUksRUFBRSxDQUFDLE1BQU0sU0FBSSxLQUFPLENBQUMsRUFBOUMsQ0FBOEMsQ0FBQSxDQUFDO1lBQ3ZFLEVBQUUsQ0FBQyxNQUFNOzs7O1lBQUcsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsT0FBTyxDQUFJLEVBQUUsQ0FBQyxNQUFNLE1BQUcsRUFBRSxFQUFFLENBQUMsRUFBbEMsQ0FBa0MsQ0FBQSxDQUFDO1NBQ3pEO1FBQ0QsSUFBSSxFQUFFLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRTtZQUNuQixFQUFFLENBQUMsU0FBUzs7OztZQUFHLFVBQUEsS0FBSyxJQUFJLE9BQUEsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFJLEtBQUssU0FBSSxFQUFFLENBQUMsSUFBTSxDQUFDLEVBQTVDLENBQTRDLENBQUEsQ0FBQztZQUNyRSxFQUFFLENBQUMsTUFBTTs7OztZQUFHLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFJLEVBQUUsQ0FBQyxJQUFNLEVBQUUsRUFBRSxDQUFDLEVBQWhDLENBQWdDLENBQUEsQ0FBQztTQUN2RDtRQUNELElBQUksRUFBRSxDQUFDLFNBQVM7WUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUM7UUFDaEQsSUFBSSxFQUFFLENBQUMsTUFBTTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQztJQUN6QyxDQUFDOzs7OztJQUVELGdDQUFTOzs7O0lBQVQsVUFBVSxHQUFXO1FBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4RSxDQUFDOztnQkEzQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixxdkJBQW1DO29CQUNuQyxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDdEM7O0lBdUNELG1CQUFDO0NBQUEsQUE1Q0QsQ0FNa0MsZUFBZSxHQXNDaEQ7U0F0Q1ksWUFBWTs7O0lBQ3ZCLDJCQUFZOztJQUNaLDJCQUFZOztJQUNaLDRCQUFhOztJQUNiLGlDQUErRDs7SUFDL0QsOEJBQTREIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVUlXaWRnZXQgfSBmcm9tICcuLi8uLi93aWRnZXQnO1xuaW1wb3J0IHsgU0ZOdW1iZXJXaWRnZXRTY2hlbWEgfSBmcm9tICcuL3NjaGVtYSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NmLW51bWJlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9udW1iZXIud2lkZ2V0Lmh0bWwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgTnVtYmVyV2lkZ2V0IGV4dGVuZHMgQ29udHJvbFVJV2lkZ2V0PFNGTnVtYmVyV2lkZ2V0U2NoZW1hPiBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIG1pbjogbnVtYmVyO1xuICBtYXg6IG51bWJlcjtcbiAgc3RlcDogbnVtYmVyO1xuICBmb3JtYXR0ZXI6ICh2YWx1ZTogbnVtYmVyKSA9PiBzdHJpbmcgfCBudW1iZXIgPSB2YWx1ZSA9PiB2YWx1ZTtcbiAgcGFyc2VyOiAodmFsdWU6IHN0cmluZykgPT4gc3RyaW5nIHwgbnVtYmVyID0gdmFsdWUgPT4gdmFsdWU7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgeyBtaW5pbXVtLCBleGNsdXNpdmVNaW5pbXVtLCBtYXhpbXVtLCBleGNsdXNpdmVNYXhpbXVtLCBtdWx0aXBsZU9mLCB0eXBlIH0gPSB0aGlzLnNjaGVtYTtcbiAgICBpZiAodHlwZW9mIG1pbmltdW0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLm1pbiA9IGV4Y2x1c2l2ZU1pbmltdW0gPyBtaW5pbXVtICsgMSA6IG1pbmltdW07XG4gICAgfVxuICAgIGlmICh0eXBlb2YgbWF4aW11bSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMubWF4ID0gZXhjbHVzaXZlTWF4aW11bSA/IG1heGltdW0gLSAxIDogbWF4aW11bTtcbiAgICB9XG4gICAgdGhpcy5zdGVwID0gbXVsdGlwbGVPZiB8fCAxO1xuICAgIGlmICh0eXBlID09PSAnaW50ZWdlcicpIHtcbiAgICAgIHRoaXMubWluID0gTWF0aC50cnVuYyh0aGlzLm1pbik7XG4gICAgICB0aGlzLm1heCA9IE1hdGgudHJ1bmModGhpcy5tYXgpO1xuICAgICAgdGhpcy5zdGVwID0gTWF0aC50cnVuYyh0aGlzLnN0ZXApO1xuICAgIH1cblxuICAgIGNvbnN0IHVpID0gdGhpcy51aTtcbiAgICBpZiAodWkucHJlZml4ICE9IG51bGwpIHtcbiAgICAgIHVpLmZvcm1hdHRlciA9IHZhbHVlID0+ICh2YWx1ZSA9PSBudWxsID8gJycgOiBgJHt1aS5wcmVmaXh9ICR7dmFsdWV9YCk7XG4gICAgICB1aS5wYXJzZXIgPSB2YWx1ZSA9PiB2YWx1ZS5yZXBsYWNlKGAke3VpLnByZWZpeH0gYCwgJycpO1xuICAgIH1cbiAgICBpZiAodWkudW5pdCAhPSBudWxsKSB7XG4gICAgICB1aS5mb3JtYXR0ZXIgPSB2YWx1ZSA9PiAodmFsdWUgPT0gbnVsbCA/ICcnIDogYCR7dmFsdWV9ICR7dWkudW5pdH1gKTtcbiAgICAgIHVpLnBhcnNlciA9IHZhbHVlID0+IHZhbHVlLnJlcGxhY2UoYCAke3VpLnVuaXR9YCwgJycpO1xuICAgIH1cbiAgICBpZiAodWkuZm9ybWF0dGVyKSB0aGlzLmZvcm1hdHRlciA9IHVpLmZvcm1hdHRlcjtcbiAgICBpZiAodWkucGFyc2VyKSB0aGlzLnBhcnNlciA9IHVpLnBhcnNlcjtcbiAgfVxuXG4gIF9zZXRWYWx1ZSh2YWw6IG51bWJlcikge1xuICAgIHRoaXMuc2V0VmFsdWUodGhpcy5zY2hlbWEudHlwZSA9PT0gJ2ludGVnZXInID8gTWF0aC5mbG9vcih2YWwpIDogdmFsKTtcbiAgfVxufVxuIl19