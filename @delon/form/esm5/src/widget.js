/**
 * @fileoverview added by tsickle
 * Generated from: src/widget.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __extends } from "tslib";
import { ChangeDetectorRef, HostBinding, Inject, Injector } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { takeUntil } from 'rxjs/operators';
import { SFItemComponent } from './sf-item.component';
import { SFComponent } from './sf.component';
import { di } from './utils';
/**
 * @abstract
 * @template T, UIT
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
    Object.defineProperty(Widget.prototype, "l", {
        get: /**
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (this.formProperty.root.widget.sfComp)).locale;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "oh", {
        get: /**
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (this.ui.optionalHelp));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "dom", {
        get: /**
         * @return {?}
         */
        function () {
            return this.injector.get(DomSanitizer);
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
        console.log('this.sfItemComp', typeof this.sfItemComp, 'this.sfItemComp!.unsubscribe$', typeof (/** @type {?} */ (this.sfItemComp)).unsubscribe$);
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
    __extends(ControlWidget, _super);
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
/**
 * @template UIT
 */
var /**
 * @template UIT
 */
ControlUIWidget = /** @class */ (function (_super) {
    __extends(ControlUIWidget, _super);
    function ControlUIWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} _value
     * @return {?}
     */
    ControlUIWidget.prototype.reset = /**
     * @param {?} _value
     * @return {?}
     */
    function (_value) { };
    return ControlUIWidget;
}(Widget));
/**
 * @template UIT
 */
export { ControlUIWidget };
var ArrayLayoutWidget = /** @class */ (function (_super) {
    __extends(ArrayLayoutWidget, _super);
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
    __extends(ObjectLayoutWidget, _super);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBaUIsaUJBQWlCLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXpELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQVEzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxTQUFTLENBQUM7Ozs7O0FBRzdCO0lBa0NFLGdCQUM2QyxFQUFxQixFQUM5QixRQUFrQixFQUNYLFVBQTRCLEVBQ2hDLE1BQW9CO1FBSGQsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFDOUIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNYLGVBQVUsR0FBVixVQUFVLENBQWtCO1FBQ2hDLFdBQU0sR0FBTixNQUFNLENBQWM7UUFuQzNELGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsT0FBRSxHQUFHLEVBQUUsQ0FBQztRQUdSLGdCQUFXLEdBQUcsS0FBSyxDQUFDO0lBZ0NqQixDQUFDO0lBOUJKLHNCQUNJLHVCQUFHOzs7O1FBRFA7WUFFRSxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztRQUM3QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDRCQUFROzs7O1FBQVo7WUFDRSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxLQUFLLElBQUksSUFBSSxtQkFBQSxJQUFJLENBQUMsTUFBTSxFQUFDLENBQUMsUUFBUSxFQUFFO2dCQUMxRCxPQUFPLElBQUksQ0FBQzth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QUFlOzs7SUFBZjtRQUFBLGlCQUVDO1FBREMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBQSxJQUFJLENBQUMsVUFBVSxFQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxTQUFTOzs7UUFBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsRUFBdkIsQ0FBdUIsRUFBQyxDQUFDO0lBQzFILENBQUM7SUFDSCx5QkFBQztBQUFELENBQUMsQUFORCxDQUF3QyxNQUFNLEdBTTdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIEhvc3RCaW5kaW5nLCBJbmplY3QsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRXJyb3JEYXRhIH0gZnJvbSAnLi9lcnJvcnMnO1xuaW1wb3J0IHsgU0ZWYWx1ZSB9IGZyb20gJy4vaW50ZXJmYWNlJztcbmltcG9ydCB7IEFycmF5UHJvcGVydHkgfSBmcm9tICcuL21vZGVsL2FycmF5LnByb3BlcnR5JztcbmltcG9ydCB7IEZvcm1Qcm9wZXJ0eSB9IGZyb20gJy4vbW9kZWwvZm9ybS5wcm9wZXJ0eSc7XG5pbXBvcnQgeyBPYmplY3RQcm9wZXJ0eSB9IGZyb20gJy4vbW9kZWwvb2JqZWN0LnByb3BlcnR5JztcbmltcG9ydCB7IFNGU2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEnO1xuaW1wb3J0IHsgU0ZPcHRpb25hbEhlbHAsIFNGVUlTY2hlbWFJdGVtIH0gZnJvbSAnLi9zY2hlbWEvdWknO1xuaW1wb3J0IHsgU0ZJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9zZi1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTRkNvbXBvbmVudCB9IGZyb20gJy4vc2YuY29tcG9uZW50JztcbmltcG9ydCB7IGRpIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBTRkFycmF5V2lkZ2V0U2NoZW1hLCBTRk9iamVjdFdpZGdldFNjaGVtYSB9IGZyb20gJy4vd2lkZ2V0cyc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBXaWRnZXQ8VCBleHRlbmRzIEZvcm1Qcm9wZXJ0eSwgVUlUIGV4dGVuZHMgU0ZVSVNjaGVtYUl0ZW0+IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIGZvcm1Qcm9wZXJ0eTogVDtcbiAgZXJyb3I6IHN0cmluZztcbiAgc2hvd0Vycm9yID0gZmFsc2U7XG4gIGlkID0gJyc7XG4gIHNjaGVtYTogU0ZTY2hlbWE7XG4gIHVpOiBVSVQ7XG4gIGZpcnN0VmlzdWFsID0gZmFsc2U7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBjbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMudWkuY2xhc3MgfHwgJyc7XG4gIH1cblxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB8IG51bGwge1xuICAgIGlmICh0aGlzLnNjaGVtYS5yZWFkT25seSA9PT0gdHJ1ZSB8fCB0aGlzLnNmQ29tcCEuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZ2V0IGwoKTogTG9jYWxlRGF0YSB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybVByb3BlcnR5LnJvb3Qud2lkZ2V0LnNmQ29tcCEubG9jYWxlO1xuICB9XG5cbiAgZ2V0IG9oKCkge1xuICAgIHJldHVybiB0aGlzLnVpLm9wdGlvbmFsSGVscCBhcyBTRk9wdGlvbmFsSGVscDtcbiAgfVxuXG4gIGdldCBkb20oKTogRG9tU2FuaXRpemVyIHtcbiAgICByZXR1cm4gdGhpcy5pbmplY3Rvci5nZXQoRG9tU2FuaXRpemVyKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoQ2hhbmdlRGV0ZWN0b3JSZWYpIHB1YmxpYyByZWFkb25seSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQEluamVjdChJbmplY3RvcikgcHVibGljIHJlYWRvbmx5IGluamVjdG9yOiBJbmplY3RvcixcbiAgICBASW5qZWN0KFNGSXRlbUNvbXBvbmVudCkgcHVibGljIHJlYWRvbmx5IHNmSXRlbUNvbXA/OiBTRkl0ZW1Db21wb25lbnQsXG4gICAgQEluamVjdChTRkNvbXBvbmVudCkgcHVibGljIHJlYWRvbmx5IHNmQ29tcD86IFNGQ29tcG9uZW50LFxuICApIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKCd0aGlzLnNmSXRlbUNvbXAnLCB0eXBlb2YgdGhpcy5zZkl0ZW1Db21wLCAndGhpcy5zZkl0ZW1Db21wIS51bnN1YnNjcmliZSQnLCB0eXBlb2YgdGhpcy5zZkl0ZW1Db21wIS51bnN1YnNjcmliZSQpO1xuICAgIHRoaXMuZm9ybVByb3BlcnR5LmVycm9yc0NoYW5nZXMucGlwZSh0YWtlVW50aWwodGhpcy5zZkl0ZW1Db21wIS51bnN1YnNjcmliZSQpKS5zdWJzY3JpYmUoKGVycm9yczogRXJyb3JEYXRhW10gfCBudWxsKSA9PiB7XG4gICAgICBpZiAoZXJyb3JzID09IG51bGwpIHJldHVybjtcbiAgICAgIGRpKHRoaXMudWksICdlcnJvcnNDaGFuZ2VzJywgdGhpcy5mb3JtUHJvcGVydHkucGF0aCwgZXJyb3JzKTtcblxuICAgICAgLy8g5LiN5pi+56S66aaW5qyh5qCh6aqM6KeG6KeJXG4gICAgICBpZiAodGhpcy5maXJzdFZpc3VhbCkge1xuICAgICAgICB0aGlzLnNob3dFcnJvciA9IGVycm9ycy5sZW5ndGggPiAwO1xuICAgICAgICB0aGlzLmVycm9yID0gdGhpcy5zaG93RXJyb3IgPyAoZXJyb3JzWzBdLm1lc3NhZ2UgYXMgc3RyaW5nKSA6ICcnO1xuXG4gICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfVxuICAgICAgdGhpcy5maXJzdFZpc3VhbCA9IHRydWU7XG4gICAgfSk7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZTogU0ZWYWx1ZSkge1xuICAgIHRoaXMuZm9ybVByb3BlcnR5LnNldFZhbHVlKHZhbHVlLCBmYWxzZSk7XG4gICAgZGkodGhpcy51aSwgJ3ZhbHVlQ2hhbmdlcycsIHRoaXMuZm9ybVByb3BlcnR5LnBhdGgsIHRoaXMuZm9ybVByb3BlcnR5KTtcbiAgfVxuXG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtUHJvcGVydHkudmFsdWU7XG4gIH1cblxuICBkZXRlY3RDaGFuZ2VzKG9ubHlTZWxmID0gZmFsc2UpIHtcbiAgICBpZiAob25seVNlbGYpIHtcbiAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZm9ybVByb3BlcnR5LnJvb3Qud2lkZ2V0LmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIGFic3RyYWN0IHJlc2V0KHZhbHVlOiBTRlZhbHVlKTogdm9pZDtcbn1cblxuZXhwb3J0IGNsYXNzIENvbnRyb2xXaWRnZXQgZXh0ZW5kcyBXaWRnZXQ8Rm9ybVByb3BlcnR5LCBTRlVJU2NoZW1hSXRlbT4ge1xuICByZXNldChfdmFsdWU6IFNGVmFsdWUpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBDb250cm9sVUlXaWRnZXQ8VUlUIGV4dGVuZHMgU0ZVSVNjaGVtYUl0ZW0+IGV4dGVuZHMgV2lkZ2V0PEZvcm1Qcm9wZXJ0eSwgVUlUPiB7XG4gIHJlc2V0KF92YWx1ZTogU0ZWYWx1ZSkge31cbn1cblxuZXhwb3J0IGNsYXNzIEFycmF5TGF5b3V0V2lkZ2V0IGV4dGVuZHMgV2lkZ2V0PEFycmF5UHJvcGVydHksIFNGQXJyYXlXaWRnZXRTY2hlbWE+IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIHJlc2V0KF92YWx1ZTogU0ZWYWx1ZSkge31cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5mb3JtUHJvcGVydHkuZXJyb3JzQ2hhbmdlcy5waXBlKHRha2VVbnRpbCh0aGlzLnNmSXRlbUNvbXAhLnVuc3Vic2NyaWJlJCkpLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNkLmRldGVjdENoYW5nZXMoKSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE9iamVjdExheW91dFdpZGdldCBleHRlbmRzIFdpZGdldDxPYmplY3RQcm9wZXJ0eSwgU0ZPYmplY3RXaWRnZXRTY2hlbWE+IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIHJlc2V0KF92YWx1ZTogU0ZWYWx1ZSkge31cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5mb3JtUHJvcGVydHkuZXJyb3JzQ2hhbmdlcy5waXBlKHRha2VVbnRpbCh0aGlzLnNmSXRlbUNvbXAhLnVuc3Vic2NyaWJlJCkpLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNkLmRldGVjdENoYW5nZXMoKSk7XG4gIH1cbn1cbiJdfQ==