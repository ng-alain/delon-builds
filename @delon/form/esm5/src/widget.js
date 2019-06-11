/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectorRef, HostBinding, Inject, Injector } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { SFItemComponent } from './sf-item.component';
import { SFComponent } from './sf.component';
import { di } from './utils';
/**
 * @abstract
 * @template T
 */
var Widget = /** @class */ (function () {
    function Widget(cd, injector, sfItemComp, sfComp) {
        this.cd = cd;
        this.injector = injector;
        this.sfItemComp = sfItemComp;
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
            if (this.schema.readOnly === true || (/** @type {?} */ (this.sfComp)).disabled) {
                return true;
            }
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
        this.formProperty.errorsChanges.pipe(takeUntil((/** @type {?} */ (this.sfItemComp)).unsubscribe$)).subscribe((/**
         * @param {?} errors
         * @return {?}
         */
        function (errors) {
            if (errors == null)
                return;
            di(_this.ui, 'errorsChanges', _this.formProperty.path, errors);
            // 不显示首次校验视觉
            if (_this.firstVisual) {
                _this.showError = errors.length > 0;
                _this.error = _this.showError ? ((/** @type {?} */ (errors[0].message))) : '';
                _this.cd.detectChanges();
            }
            _this.firstVisual = true;
        }));
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
        di(this.ui, 'valueChanges', this.formProperty.path, this.formProperty);
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
     * @param {?=} onlySelf
     * @return {?}
     */
    Widget.prototype.detectChanges = /**
     * @param {?=} onlySelf
     * @return {?}
     */
    function (onlySelf) {
        if (onlySelf === void 0) { onlySelf = false; }
        if (onlySelf) {
            this.cd.markForCheck();
        }
        else {
            this.formProperty.root.widget.cd.markForCheck();
        }
    };
    /** @nocollapse */
    Widget.ctorParameters = function () { return [
        { type: ChangeDetectorRef, decorators: [{ type: Inject, args: [ChangeDetectorRef,] }] },
        { type: Injector, decorators: [{ type: Inject, args: [Injector,] }] },
        { type: SFItemComponent, decorators: [{ type: Inject, args: [SFItemComponent,] }] },
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
    Widget.prototype.injector;
    /** @type {?} */
    Widget.prototype.sfItemComp;
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
     * @param {?} _value
     * @return {?}
     */
    ControlWidget.prototype.reset = /**
     * @param {?} _value
     * @return {?}
     */
    function (_value) { };
    return ControlWidget;
}(Widget));
export { ControlWidget };
var ArrayLayoutWidget = /** @class */ (function (_super) {
    tslib_1.__extends(ArrayLayoutWidget, _super);
    function ArrayLayoutWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} _value
     * @return {?}
     */
    ArrayLayoutWidget.prototype.reset = /**
     * @param {?} _value
     * @return {?}
     */
    function (_value) { };
    /**
     * @return {?}
     */
    ArrayLayoutWidget.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.formProperty.errorsChanges.pipe(takeUntil((/** @type {?} */ (this.sfItemComp)).unsubscribe$)).subscribe((/**
         * @return {?}
         */
        function () { return _this.cd.detectChanges(); }));
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
     * @param {?} _value
     * @return {?}
     */
    ObjectLayoutWidget.prototype.reset = /**
     * @param {?} _value
     * @return {?}
     */
    function (_value) { };
    /**
     * @return {?}
     */
    ObjectLayoutWidget.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.formProperty.errorsChanges.pipe(takeUntil((/** @type {?} */ (this.sfItemComp)).unsubscribe$)).subscribe((/**
         * @return {?}
         */
        function () { return _this.cd.detectChanges(); }));
    };
    return ObjectLayoutWidget;
}(Widget));
export { ObjectLayoutWidget };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFpQixpQkFBaUIsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFRM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sU0FBUyxDQUFDOzs7OztBQUU3QjtJQXNCRSxnQkFDNkMsRUFBcUIsRUFDOUIsUUFBa0IsRUFDWCxVQUE0QixFQUNoQyxNQUFvQjtRQUhkLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBQzlCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDWCxlQUFVLEdBQVYsVUFBVSxDQUFrQjtRQUNoQyxXQUFNLEdBQU4sTUFBTSxDQUFjO1FBdkIzRCxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLE9BQUUsR0FBRyxFQUFFLENBQUM7UUFHUixnQkFBVyxHQUFHLEtBQUssQ0FBQztJQW9CakIsQ0FBQztJQWxCSixzQkFDSSx1QkFBRzs7OztRQURQO1lBRUUsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSw0QkFBUTs7OztRQUFaO1lBQ0UsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsS0FBSyxJQUFJLElBQUksbUJBQUEsSUFBSSxDQUFDLE1BQU0sRUFBQyxDQUFDLFFBQVEsRUFBRTtnQkFDMUQsT0FBTyxJQUFJLENBQUM7YUFDYjtZQUVELE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQzs7O09BQUE7Ozs7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QUFDLFNBQVMsQ0FBQyxtQkFBQSxJQUFJLENBQUMsVUFBVSxFQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxTQUFTOzs7UUFBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsRUFBdkIsQ0FBdUIsRUFBQyxDQUFDO0lBQzFILENBQUM7SUFDSCx3QkFBQztBQUFELENBQUMsQUFORCxDQUF1QyxNQUFNLEdBTTVDOztBQUVEO0lBQXdDLDhDQUFzQjtJQUE5RDs7SUFNQSxDQUFDOzs7OztJQUxDLGtDQUFLOzs7O0lBQUwsVUFBTSxNQUFlLElBQUcsQ0FBQzs7OztJQUV6Qiw0Q0FBZTs7O0lBQWY7UUFBQSxpQkFFQztRQURDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQUEsSUFBSSxDQUFDLFVBQVUsRUFBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsU0FBUzs7O1FBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLEVBQXZCLENBQXVCLEVBQUMsQ0FBQztJQUMxSCxDQUFDO0lBQ0gseUJBQUM7QUFBRCxDQUFDLEFBTkQsQ0FBd0MsTUFBTSxHQU03QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdG9yUmVmLCBIb3N0QmluZGluZywgSW5qZWN0LCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRXJyb3JEYXRhIH0gZnJvbSAnLi9lcnJvcnMnO1xuaW1wb3J0IHsgU0ZWYWx1ZSB9IGZyb20gJy4vaW50ZXJmYWNlJztcbmltcG9ydCB7IEFycmF5UHJvcGVydHkgfSBmcm9tICcuL21vZGVsL2FycmF5LnByb3BlcnR5JztcbmltcG9ydCB7IEZvcm1Qcm9wZXJ0eSB9IGZyb20gJy4vbW9kZWwvZm9ybS5wcm9wZXJ0eSc7XG5pbXBvcnQgeyBPYmplY3RQcm9wZXJ0eSB9IGZyb20gJy4vbW9kZWwvb2JqZWN0LnByb3BlcnR5JztcbmltcG9ydCB7IFNGU2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEnO1xuaW1wb3J0IHsgU0ZVSVNjaGVtYUl0ZW0gfSBmcm9tICcuL3NjaGVtYS91aSc7XG5pbXBvcnQgeyBTRkl0ZW1Db21wb25lbnQgfSBmcm9tICcuL3NmLWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IFNGQ29tcG9uZW50IH0gZnJvbSAnLi9zZi5jb21wb25lbnQnO1xuaW1wb3J0IHsgZGkgfSBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFdpZGdldDxUIGV4dGVuZHMgRm9ybVByb3BlcnR5PiBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBmb3JtUHJvcGVydHk6IFQ7XG4gIGVycm9yOiBzdHJpbmc7XG4gIHNob3dFcnJvciA9IGZhbHNlO1xuICBpZCA9ICcnO1xuICBzY2hlbWE6IFNGU2NoZW1hO1xuICB1aTogU0ZVSVNjaGVtYUl0ZW07XG4gIGZpcnN0VmlzdWFsID0gZmFsc2U7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBjbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMudWkuY2xhc3MgfHwgJyc7XG4gIH1cblxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB8IG51bGwge1xuICAgIGlmICh0aGlzLnNjaGVtYS5yZWFkT25seSA9PT0gdHJ1ZSB8fCB0aGlzLnNmQ29tcCEuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChDaGFuZ2VEZXRlY3RvclJlZikgcHVibGljIHJlYWRvbmx5IGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBASW5qZWN0KEluamVjdG9yKSBwdWJsaWMgcmVhZG9ubHkgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIEBJbmplY3QoU0ZJdGVtQ29tcG9uZW50KSBwdWJsaWMgcmVhZG9ubHkgc2ZJdGVtQ29tcD86IFNGSXRlbUNvbXBvbmVudCxcbiAgICBASW5qZWN0KFNGQ29tcG9uZW50KSBwdWJsaWMgcmVhZG9ubHkgc2ZDb21wPzogU0ZDb21wb25lbnQsXG4gICkge31cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5mb3JtUHJvcGVydHkuZXJyb3JzQ2hhbmdlcy5waXBlKHRha2VVbnRpbCh0aGlzLnNmSXRlbUNvbXAhLnVuc3Vic2NyaWJlJCkpLnN1YnNjcmliZSgoZXJyb3JzOiBFcnJvckRhdGFbXSB8IG51bGwpID0+IHtcbiAgICAgIGlmIChlcnJvcnMgPT0gbnVsbCkgcmV0dXJuO1xuICAgICAgZGkodGhpcy51aSwgJ2Vycm9yc0NoYW5nZXMnLCB0aGlzLmZvcm1Qcm9wZXJ0eS5wYXRoLCBlcnJvcnMpO1xuXG4gICAgICAvLyDkuI3mmL7npLrpppbmrKHmoKHpqozop4bop4lcbiAgICAgIGlmICh0aGlzLmZpcnN0VmlzdWFsKSB7XG4gICAgICAgIHRoaXMuc2hvd0Vycm9yID0gZXJyb3JzLmxlbmd0aCA+IDA7XG4gICAgICAgIHRoaXMuZXJyb3IgPSB0aGlzLnNob3dFcnJvciA/IChlcnJvcnNbMF0ubWVzc2FnZSBhcyBzdHJpbmcpIDogJyc7XG5cbiAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmZpcnN0VmlzdWFsID0gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlOiBTRlZhbHVlKSB7XG4gICAgdGhpcy5mb3JtUHJvcGVydHkuc2V0VmFsdWUodmFsdWUsIGZhbHNlKTtcbiAgICBkaSh0aGlzLnVpLCAndmFsdWVDaGFuZ2VzJywgdGhpcy5mb3JtUHJvcGVydHkucGF0aCwgdGhpcy5mb3JtUHJvcGVydHkpO1xuICB9XG5cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmZvcm1Qcm9wZXJ0eS52YWx1ZTtcbiAgfVxuXG4gIGRldGVjdENoYW5nZXMob25seVNlbGYgPSBmYWxzZSkge1xuICAgIGlmIChvbmx5U2VsZikge1xuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5mb3JtUHJvcGVydHkucm9vdC53aWRnZXQuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgYWJzdHJhY3QgcmVzZXQodmFsdWU6IFNGVmFsdWUpO1xufVxuXG5leHBvcnQgY2xhc3MgQ29udHJvbFdpZGdldCBleHRlbmRzIFdpZGdldDxGb3JtUHJvcGVydHk+IHtcbiAgcmVzZXQoX3ZhbHVlOiBTRlZhbHVlKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgQXJyYXlMYXlvdXRXaWRnZXQgZXh0ZW5kcyBXaWRnZXQ8QXJyYXlQcm9wZXJ0eT4gaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgcmVzZXQoX3ZhbHVlOiBTRlZhbHVlKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5lcnJvcnNDaGFuZ2VzLnBpcGUodGFrZVVudGlsKHRoaXMuc2ZJdGVtQ29tcCEudW5zdWJzY3JpYmUkKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgT2JqZWN0TGF5b3V0V2lkZ2V0IGV4dGVuZHMgV2lkZ2V0PE9iamVjdFByb3BlcnR5PiBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICByZXNldChfdmFsdWU6IFNGVmFsdWUpIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuZm9ybVByb3BlcnR5LmVycm9yc0NoYW5nZXMucGlwZSh0YWtlVW50aWwodGhpcy5zZkl0ZW1Db21wIS51bnN1YnNjcmliZSQpKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCkpO1xuICB9XG59XG4iXX0=