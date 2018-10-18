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
            if (this.schema.readOnly === true)
                return true;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFdBQVcsRUFHWCxNQUFNLEVBQ04saUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QyxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBTzdCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7OztJQXNCM0MsZ0JBQzZDLEVBQXFCLEVBQzNCLE1BQW9CO1FBRGQsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFDM0IsV0FBTSxHQUFOLE1BQU0sQ0FBYzt5QkFuQi9DLEtBQUs7a0JBQ1osRUFBRTsyQkFHTyxLQUFLO0tBZ0JmO0lBZEosc0JBQ0ksdUJBQUc7Ozs7UUFEUDtZQUVFLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO1NBQzVCOzs7T0FBQTtJQUVELHNCQUFJLDRCQUFROzs7O1FBQVo7WUFDRSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxLQUFLLElBQUk7Z0JBQUUsT0FBTyxJQUFJLENBQUM7WUFFL0MsT0FBTyxJQUFJLENBQUM7U0FDYjs7O09BQUE7Ozs7SUFPRCxnQ0FBZTs7O0lBQWY7UUFBQSxpQkFlQztRQWRDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYTthQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxJQUFJLElBQUksRUFBVCxDQUFTLENBQUMsQ0FBQzthQUM1QixTQUFTLENBQUMsVUFBQyxNQUFtQjtZQUM3QixJQUFJLEtBQUksQ0FBQyxFQUFFLENBQUMsS0FBSztnQkFBRSxFQUFFLENBQUMsZUFBZSxFQUFFLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDOztZQUd2RSxJQUFJLEtBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ3BCLEtBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7Z0JBQ25DLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2dCQUVyRCxJQUFJLEtBQUksQ0FBQyxFQUFFLGtCQUFlLElBQUk7b0JBQUUsS0FBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQzthQUN6RDtZQUNELEtBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1NBQ3pCLENBQUMsQ0FBQztLQUNOOzs7OztJQUVELHlCQUFROzs7O0lBQVIsVUFBUyxLQUFVO1FBQ2pCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN6QyxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFO1lBQ2pCLEVBQUUsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQy9EO0tBQ0Y7SUFFRCxzQkFBSSx5QkFBSzs7OztRQUFUO1lBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztTQUNoQzs7O09BQUE7Ozs7SUFFRCw4QkFBYTs7O0lBQWI7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDO0tBQ2pEOzs7Z0JBbkVELGlCQUFpQix1QkFpQ2QsTUFBTSxTQUFDLGlCQUFpQjtnQkF2QnBCLFdBQVcsdUJBd0JmLE1BQU0sU0FBQyxXQUFXOzs7c0JBYnBCLFdBQVcsU0FBQyxPQUFPOztpQkExQnRCOztTQWlCc0IsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNEQ1QixJQUFBO0lBQW1DLHlDQUFvQjs7Ozs7Ozs7SUFDckQsNkJBQUs7Ozs7SUFBTCxVQUFNLEtBQVUsS0FBSTt3QkE5RXRCO0VBNkVtQyxNQUFNLEVBRXhDLENBQUE7QUFGRCx5QkFFQztBQUVELElBQUE7SUFBdUMsNkNBQXFCOzs7Ozs7OztJQUUxRCxpQ0FBSzs7OztJQUFMLFVBQU0sS0FBVSxLQUFJOzs7O0lBRXBCLDJDQUFlOzs7SUFBZjtRQUFBLGlCQUVDO1FBREMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxFQUF2QixDQUF1QixDQUFDLENBQUM7S0FDMUU7NEJBdkZIO0VBaUZ1QyxNQUFNLEVBTzVDLENBQUE7QUFQRCw2QkFPQztBQUVELElBQUE7SUFBd0MsOENBQXNCOzs7Ozs7OztJQUU1RCxrQ0FBSzs7OztJQUFMLFVBQU0sS0FBVSxLQUFJOzs7O0lBRXBCLDRDQUFlOzs7SUFBZjtRQUFBLGlCQUVDO1FBREMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxFQUF2QixDQUF1QixDQUFDLENBQUM7S0FDMUU7NkJBaEdIO0VBMEZ3QyxNQUFNLEVBTzdDLENBQUE7QUFQRCw4QkFPQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEhvc3RCaW5kaW5nLFxuICBPcHRpb25hbCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgSW5qZWN0LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBkaSB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgRm9ybVByb3BlcnR5IH0gZnJvbSAnLi9tb2RlbC9mb3JtLnByb3BlcnR5JztcbmltcG9ydCB7IEFycmF5UHJvcGVydHkgfSBmcm9tICcuL21vZGVsL2FycmF5LnByb3BlcnR5JztcbmltcG9ydCB7IE9iamVjdFByb3BlcnR5IH0gZnJvbSAnLi9tb2RlbC9vYmplY3QucHJvcGVydHknO1xuaW1wb3J0IHsgU0ZTY2hlbWEgfSBmcm9tICcuL3NjaGVtYSc7XG5pbXBvcnQgeyBTRlVJU2NoZW1hSXRlbSB9IGZyb20gJy4vc2NoZW1hL3VpJztcbmltcG9ydCB7IEVycm9yRGF0YSB9IGZyb20gJy4vZXJyb3JzJztcbmltcG9ydCB7IFNGQ29tcG9uZW50IH0gZnJvbSAnLi9zZi5jb21wb25lbnQnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgV2lkZ2V0PFQgZXh0ZW5kcyBGb3JtUHJvcGVydHk+IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIGZvcm1Qcm9wZXJ0eTogVDtcbiAgZXJyb3I6IHN0cmluZztcbiAgc2hvd0Vycm9yID0gZmFsc2U7XG4gIGlkID0gJyc7XG4gIHNjaGVtYTogU0ZTY2hlbWE7XG4gIHVpOiBTRlVJU2NoZW1hSXRlbTtcbiAgZmlyc3RWaXN1YWwgPSBmYWxzZTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGNscygpIHtcbiAgICByZXR1cm4gdGhpcy51aS5jbGFzcyB8fCAnJztcbiAgfVxuXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5zY2hlbWEucmVhZE9ubHkgPT09IHRydWUpIHJldHVybiB0cnVlO1xuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KENoYW5nZURldGVjdG9yUmVmKSBwdWJsaWMgcmVhZG9ubHkgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIEBJbmplY3QoU0ZDb21wb25lbnQpIHB1YmxpYyByZWFkb25seSBzZkNvbXA/OiBTRkNvbXBvbmVudCxcbiAgKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5lcnJvcnNDaGFuZ2VzXG4gICAgICAucGlwZShmaWx0ZXIodyA9PiB3ICE9IG51bGwpKVxuICAgICAgLnN1YnNjcmliZSgoZXJyb3JzOiBFcnJvckRhdGFbXSkgPT4ge1xuICAgICAgICBpZiAodGhpcy51aS5kZWJ1ZykgZGkoJ2Vycm9yc0NoYW5nZXMnLCB0aGlzLmZvcm1Qcm9wZXJ0eS5wYXRoLCBlcnJvcnMpO1xuXG4gICAgICAgIC8vIOS4jeaYvuekuummluasoeagoemqjOinhuiniVxuICAgICAgICBpZiAodGhpcy5maXJzdFZpc3VhbCkge1xuICAgICAgICAgIHRoaXMuc2hvd0Vycm9yID0gZXJyb3JzLmxlbmd0aCA+IDA7XG4gICAgICAgICAgdGhpcy5lcnJvciA9IHRoaXMuc2hvd0Vycm9yID8gZXJyb3JzWzBdLm1lc3NhZ2UgOiAnJztcblxuICAgICAgICAgIGlmICh0aGlzLnVpLl9fZGVzdHJveSAhPT0gdHJ1ZSkgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5maXJzdFZpc3VhbCA9IHRydWU7XG4gICAgICB9KTtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5zZXRWYWx1ZSh2YWx1ZSwgZmFsc2UpO1xuICAgIGlmICh0aGlzLnVpLmRlYnVnKSB7XG4gICAgICBkaSgndmFsdWVDaGFuZ2VzJywgdGhpcy5mb3JtUHJvcGVydHkucGF0aCwgdGhpcy5mb3JtUHJvcGVydHkpO1xuICAgIH1cbiAgfVxuXG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtUHJvcGVydHkudmFsdWU7XG4gIH1cblxuICBkZXRlY3RDaGFuZ2VzKCkge1xuICAgIHRoaXMuZm9ybVByb3BlcnR5LnJvb3Qud2lkZ2V0LmNkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgYWJzdHJhY3QgcmVzZXQodmFsdWU6IGFueSk7XG59XG5cbmV4cG9ydCBjbGFzcyBDb250cm9sV2lkZ2V0IGV4dGVuZHMgV2lkZ2V0PEZvcm1Qcm9wZXJ0eT4ge1xuICByZXNldCh2YWx1ZTogYW55KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgQXJyYXlMYXlvdXRXaWRnZXQgZXh0ZW5kcyBXaWRnZXQ8QXJyYXlQcm9wZXJ0eT5cbiAgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgcmVzZXQodmFsdWU6IGFueSkge31cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5mb3JtUHJvcGVydHkuZXJyb3JzQ2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCkpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBPYmplY3RMYXlvdXRXaWRnZXQgZXh0ZW5kcyBXaWRnZXQ8T2JqZWN0UHJvcGVydHk+XG4gIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIHJlc2V0KHZhbHVlOiBhbnkpIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuZm9ybVByb3BlcnR5LmVycm9yc0NoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpKTtcbiAgfVxufVxuIl19