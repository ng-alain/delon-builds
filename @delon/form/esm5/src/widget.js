/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { HostBinding, Inject, ChangeDetectorRef, } from '@angular/core';
import { filter } from 'rxjs/operators';
import { di } from './utils';
import { SFComponent } from './sf.component';
// unsupported: template constraints.
/**
 * @abstract
 * @template T
 */
var Widget = /** @class */ (function () {
    function Widget(cd, sfComp) {
        this.cd = cd;
        this.sfComp = sfComp;
        this.showError = false;
        this.id = '';
        this.firstVisual = false;
    }
    Object.defineProperty(Widget.prototype, "cls", {
        get: /**
         * @return {?}
         */
        function () {
            return this.ui.class || '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () {
            if (typeof this.schema.readOnly !== 'undefined')
                return this.schema.readOnly;
            return null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    Widget.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.formProperty.errorsChanges
            .pipe(filter(function (w) { return w != null; }))
            .subscribe(function (errors) {
            if (_this.ui.debug)
                di('errorsChanges', _this.formProperty.path, errors);
            // 不显示首次校验视觉
            if (_this.firstVisual) {
                _this.showError = errors.length > 0;
                _this.error = _this.showError ? errors[0].message : '';
                if (_this.ui["__destroy"] !== true)
                    _this.cd.detectChanges();
            }
            _this.firstVisual = true;
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    Widget.prototype.setValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.formProperty.setValue(value, false);
        if (this.ui.debug) {
            di('valueChanges', this.formProperty.path, this.formProperty);
        }
    };
    Object.defineProperty(Widget.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this.formProperty.value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    Widget.prototype.detectChanges = /**
     * @return {?}
     */
    function () {
        this.cd.detectChanges();
        this.formProperty.root.widget.cd.markForCheck();
    };
    /** @nocollapse */
    Widget.ctorParameters = function () { return [
        { type: ChangeDetectorRef, decorators: [{ type: Inject, args: [ChangeDetectorRef,] }] },
        { type: SFComponent, decorators: [{ type: Inject, args: [SFComponent,] }] }
    ]; };
    Widget.propDecorators = {
        cls: [{ type: HostBinding, args: ['class',] }]
    };
    return Widget;
}());
export { Widget };
if (false) {
    /** @type {?} */
    Widget.prototype.formProperty;
    /** @type {?} */
    Widget.prototype.error;
    /** @type {?} */
    Widget.prototype.showError;
    /** @type {?} */
    Widget.prototype.id;
    /** @type {?} */
    Widget.prototype.schema;
    /** @type {?} */
    Widget.prototype.ui;
    /** @type {?} */
    Widget.prototype.firstVisual;
    /** @type {?} */
    Widget.prototype.cd;
    /** @type {?} */
    Widget.prototype.sfComp;
    /**
     * @abstract
     * @param {?} value
     * @return {?}
     */
    Widget.prototype.reset = function (value) { };
}
var ControlWidget = /** @class */ (function (_super) {
    tslib_1.__extends(ControlWidget, _super);
    function ControlWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    ControlWidget.prototype.reset = /**
     * @param {?} value
     * @return {?}
     */
    function (value) { };
    return ControlWidget;
}(Widget));
export { ControlWidget };
var ArrayLayoutWidget = /** @class */ (function (_super) {
    tslib_1.__extends(ArrayLayoutWidget, _super);
    function ArrayLayoutWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    ArrayLayoutWidget.prototype.reset = /**
     * @param {?} value
     * @return {?}
     */
    function (value) { };
    /**
     * @return {?}
     */
    ArrayLayoutWidget.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.formProperty.errorsChanges.subscribe(function () { return _this.cd.detectChanges(); });
    };
    return ArrayLayoutWidget;
}(Widget));
export { ArrayLayoutWidget };
var ObjectLayoutWidget = /** @class */ (function (_super) {
    tslib_1.__extends(ObjectLayoutWidget, _super);
    function ObjectLayoutWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    ObjectLayoutWidget.prototype.reset = /**
     * @param {?} value
     * @return {?}
     */
    function (value) { };
    /**
     * @return {?}
     */
    ObjectLayoutWidget.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.formProperty.errorsChanges.subscribe(function () { return _this.cd.detectChanges(); });
    };
    return ObjectLayoutWidget;
}(Widget));
export { ObjectLayoutWidget };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFdBQVcsRUFHWCxNQUFNLEVBQ04saUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QyxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBTzdCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7OztJQXVCM0MsZ0JBQzZDLEVBQXFCLEVBQzNCLE1BQW9CO1FBRGQsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFDM0IsV0FBTSxHQUFOLE1BQU0sQ0FBYzt5QkFwQi9DLEtBQUs7a0JBQ1osRUFBRTsyQkFHTyxLQUFLO0tBaUJmO0lBZkosc0JBQ0ksdUJBQUc7Ozs7UUFEUDtZQUVFLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO1NBQzVCOzs7T0FBQTtJQUVELHNCQUFJLDRCQUFROzs7O1FBQVo7WUFDRSxJQUFJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEtBQUssV0FBVztnQkFDN0MsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztZQUU5QixPQUFPLElBQUksQ0FBQztTQUNiOzs7T0FBQTs7OztJQU9ELGdDQUFlOzs7SUFBZjtRQUFBLGlCQWVDO1FBZEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhO2FBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLElBQUksSUFBSSxFQUFULENBQVMsQ0FBQyxDQUFDO2FBQzVCLFNBQVMsQ0FBQyxVQUFDLE1BQW1CO1lBQzdCLElBQUksS0FBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLO2dCQUFFLEVBQUUsQ0FBQyxlQUFlLEVBQUUsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7O1lBR3ZFLElBQUksS0FBSSxDQUFDLFdBQVcsRUFBRTtnQkFDcEIsS0FBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztnQkFDbkMsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBRXJELElBQUksS0FBSSxDQUFDLEVBQUUsa0JBQWUsSUFBSTtvQkFBRSxLQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO2FBQ3pEO1lBQ0QsS0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7U0FDekIsQ0FBQyxDQUFDO0tBQ047Ozs7O0lBRUQseUJBQVE7Ozs7SUFBUixVQUFTLEtBQVU7UUFDakIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3pDLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUU7WUFDakIsRUFBRSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDL0Q7S0FDRjtJQUVELHNCQUFJLHlCQUFLOzs7O1FBQVQ7WUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO1NBQ2hDOzs7T0FBQTs7OztJQUVELDhCQUFhOzs7SUFBYjtRQUNFLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUNqRDs7O2dCQXJFRCxpQkFBaUIsdUJBa0NkLE1BQU0sU0FBQyxpQkFBaUI7Z0JBeEJwQixXQUFXLHVCQXlCZixNQUFNLFNBQUMsV0FBVzs7O3NCQWRwQixXQUFXLFNBQUMsT0FBTzs7aUJBMUJ0Qjs7U0FpQnNCLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThENUIsSUFBQTtJQUFtQyx5Q0FBb0I7Ozs7Ozs7O0lBQ3JELDZCQUFLOzs7O0lBQUwsVUFBTSxLQUFVLEtBQUk7d0JBaEZ0QjtFQStFbUMsTUFBTSxFQUV4QyxDQUFBO0FBRkQseUJBRUM7QUFFRCxJQUFBO0lBQXVDLDZDQUFxQjs7Ozs7Ozs7SUFFMUQsaUNBQUs7Ozs7SUFBTCxVQUFNLEtBQVUsS0FBSTs7OztJQUVwQiwyQ0FBZTs7O0lBQWY7UUFBQSxpQkFFQztRQURDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsRUFBdkIsQ0FBdUIsQ0FBQyxDQUFDO0tBQzFFOzRCQXpGSDtFQW1GdUMsTUFBTSxFQU81QyxDQUFBO0FBUEQsNkJBT0M7QUFFRCxJQUFBO0lBQXdDLDhDQUFzQjs7Ozs7Ozs7SUFFNUQsa0NBQUs7Ozs7SUFBTCxVQUFNLEtBQVUsS0FBSTs7OztJQUVwQiw0Q0FBZTs7O0lBQWY7UUFBQSxpQkFFQztRQURDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsRUFBdkIsQ0FBdUIsQ0FBQyxDQUFDO0tBQzFFOzZCQWxHSDtFQTRGd0MsTUFBTSxFQU83QyxDQUFBO0FBUEQsOEJBT0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEhvc3RCaW5kaW5nLFxyXG4gIE9wdGlvbmFsLFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgSW5qZWN0LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IGRpIH0gZnJvbSAnLi91dGlscyc7XHJcbmltcG9ydCB7IEZvcm1Qcm9wZXJ0eSB9IGZyb20gJy4vbW9kZWwvZm9ybS5wcm9wZXJ0eSc7XHJcbmltcG9ydCB7IEFycmF5UHJvcGVydHkgfSBmcm9tICcuL21vZGVsL2FycmF5LnByb3BlcnR5JztcclxuaW1wb3J0IHsgT2JqZWN0UHJvcGVydHkgfSBmcm9tICcuL21vZGVsL29iamVjdC5wcm9wZXJ0eSc7XHJcbmltcG9ydCB7IFNGU2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEnO1xyXG5pbXBvcnQgeyBTRlVJU2NoZW1hSXRlbSB9IGZyb20gJy4vc2NoZW1hL3VpJztcclxuaW1wb3J0IHsgRXJyb3JEYXRhIH0gZnJvbSAnLi9lcnJvcnMnO1xyXG5pbXBvcnQgeyBTRkNvbXBvbmVudCB9IGZyb20gJy4vc2YuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBXaWRnZXQ8VCBleHRlbmRzIEZvcm1Qcm9wZXJ0eT4gaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuICBmb3JtUHJvcGVydHk6IFQ7XHJcbiAgZXJyb3I6IHN0cmluZztcclxuICBzaG93RXJyb3IgPSBmYWxzZTtcclxuICBpZCA9ICcnO1xyXG4gIHNjaGVtYTogU0ZTY2hlbWE7XHJcbiAgdWk6IFNGVUlTY2hlbWFJdGVtO1xyXG4gIGZpcnN0VmlzdWFsID0gZmFsc2U7XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxyXG4gIGdldCBjbHMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy51aS5jbGFzcyB8fCAnJztcclxuICB9XHJcblxyXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcclxuICAgIGlmICh0eXBlb2YgdGhpcy5zY2hlbWEucmVhZE9ubHkgIT09ICd1bmRlZmluZWQnKVxyXG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEucmVhZE9ubHk7XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBJbmplY3QoQ2hhbmdlRGV0ZWN0b3JSZWYpIHB1YmxpYyByZWFkb25seSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBASW5qZWN0KFNGQ29tcG9uZW50KSBwdWJsaWMgcmVhZG9ubHkgc2ZDb21wPzogU0ZDb21wb25lbnQsXHJcbiAgKSB7fVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5lcnJvcnNDaGFuZ2VzXHJcbiAgICAgIC5waXBlKGZpbHRlcih3ID0+IHcgIT0gbnVsbCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKGVycm9yczogRXJyb3JEYXRhW10pID0+IHtcclxuICAgICAgICBpZiAodGhpcy51aS5kZWJ1ZykgZGkoJ2Vycm9yc0NoYW5nZXMnLCB0aGlzLmZvcm1Qcm9wZXJ0eS5wYXRoLCBlcnJvcnMpO1xyXG5cclxuICAgICAgICAvLyDkuI3mmL7npLrpppbmrKHmoKHpqozop4bop4lcclxuICAgICAgICBpZiAodGhpcy5maXJzdFZpc3VhbCkge1xyXG4gICAgICAgICAgdGhpcy5zaG93RXJyb3IgPSBlcnJvcnMubGVuZ3RoID4gMDtcclxuICAgICAgICAgIHRoaXMuZXJyb3IgPSB0aGlzLnNob3dFcnJvciA/IGVycm9yc1swXS5tZXNzYWdlIDogJyc7XHJcblxyXG4gICAgICAgICAgaWYgKHRoaXMudWkuX19kZXN0cm95ICE9PSB0cnVlKSB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5maXJzdFZpc3VhbCA9IHRydWU7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0VmFsdWUodmFsdWU6IGFueSkge1xyXG4gICAgdGhpcy5mb3JtUHJvcGVydHkuc2V0VmFsdWUodmFsdWUsIGZhbHNlKTtcclxuICAgIGlmICh0aGlzLnVpLmRlYnVnKSB7XHJcbiAgICAgIGRpKCd2YWx1ZUNoYW5nZXMnLCB0aGlzLmZvcm1Qcm9wZXJ0eS5wYXRoLCB0aGlzLmZvcm1Qcm9wZXJ0eSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgdmFsdWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5mb3JtUHJvcGVydHkudmFsdWU7XHJcbiAgfVxyXG5cclxuICBkZXRlY3RDaGFuZ2VzKCkge1xyXG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5yb290LndpZGdldC5jZC5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIGFic3RyYWN0IHJlc2V0KHZhbHVlOiBhbnkpO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29udHJvbFdpZGdldCBleHRlbmRzIFdpZGdldDxGb3JtUHJvcGVydHk+IHtcclxuICByZXNldCh2YWx1ZTogYW55KSB7fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXJyYXlMYXlvdXRXaWRnZXQgZXh0ZW5kcyBXaWRnZXQ8QXJyYXlQcm9wZXJ0eT5cclxuICBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG4gIHJlc2V0KHZhbHVlOiBhbnkpIHt9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMuZm9ybVByb3BlcnR5LmVycm9yc0NoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBPYmplY3RMYXlvdXRXaWRnZXQgZXh0ZW5kcyBXaWRnZXQ8T2JqZWN0UHJvcGVydHk+XHJcbiAgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuICByZXNldCh2YWx1ZTogYW55KSB7fVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5lcnJvcnNDaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNkLmRldGVjdENoYW5nZXMoKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==