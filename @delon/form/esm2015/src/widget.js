/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, HostBinding, Inject, Injector } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { SFItemComponent } from './sf-item.component';
import { SFComponent } from './sf.component';
import { di } from './utils';
/**
 * @abstract
 * @template T
 */
export class Widget {
    /**
     * @param {?} cd
     * @param {?} injector
     * @param {?=} sfItemComp
     * @param {?=} sfComp
     */
    constructor(cd, injector, sfItemComp, sfComp) {
        this.cd = cd;
        this.injector = injector;
        this.sfItemComp = sfItemComp;
        this.sfComp = sfComp;
        this.showError = false;
        this.id = '';
        this.firstVisual = false;
    }
    /**
     * @return {?}
     */
    get cls() {
        return this.ui.class || '';
    }
    /**
     * @return {?}
     */
    get disabled() {
        if (this.schema.readOnly === true)
            return true;
        return null;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.formProperty.errorsChanges
            .pipe(takeUntil((/** @type {?} */ (this.sfItemComp)).unsubscribe$))
            .subscribe((/**
         * @param {?} errors
         * @return {?}
         */
        (errors) => {
            if (errors == null)
                return;
            di(this.ui, 'errorsChanges', this.formProperty.path, errors);
            // 不显示首次校验视觉
            if (this.firstVisual) {
                this.showError = errors.length > 0;
                this.error = this.showError ? ((/** @type {?} */ (errors[0].message))) : '';
                this.cd.detectChanges();
            }
            this.firstVisual = true;
        }));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setValue(value) {
        this.formProperty.setValue(value, false);
        di(this.ui, 'valueChanges', this.formProperty.path, this.formProperty);
    }
    /**
     * @return {?}
     */
    get value() {
        return this.formProperty.value;
    }
    /**
     * @param {?=} onlySelf
     * @return {?}
     */
    detectChanges(onlySelf = false) {
        if (onlySelf) {
            this.cd.markForCheck();
        }
        else {
            this.formProperty.root.widget.cd.markForCheck();
        }
    }
}
/** @nocollapse */
Widget.ctorParameters = () => [
    { type: ChangeDetectorRef, decorators: [{ type: Inject, args: [ChangeDetectorRef,] }] },
    { type: Injector, decorators: [{ type: Inject, args: [Injector,] }] },
    { type: SFItemComponent, decorators: [{ type: Inject, args: [SFItemComponent,] }] },
    { type: SFComponent, decorators: [{ type: Inject, args: [SFComponent,] }] }
];
Widget.propDecorators = {
    cls: [{ type: HostBinding, args: ['class',] }]
};
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
export class ControlWidget extends Widget {
    /**
     * @param {?} _value
     * @return {?}
     */
    reset(_value) { }
}
export class ArrayLayoutWidget extends Widget {
    /**
     * @param {?} _value
     * @return {?}
     */
    reset(_value) { }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.formProperty.errorsChanges
            .pipe(takeUntil((/** @type {?} */ (this.sfItemComp)).unsubscribe$))
            .subscribe((/**
         * @return {?}
         */
        () => this.cd.detectChanges()));
    }
}
export class ObjectLayoutWidget extends Widget {
    /**
     * @param {?} _value
     * @return {?}
     */
    reset(_value) { }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.formProperty.errorsChanges
            .pipe(takeUntil((/** @type {?} */ (this.sfItemComp)).unsubscribe$))
            .subscribe((/**
         * @return {?}
         */
        () => this.cd.detectChanges()));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWlCLGlCQUFpQixFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQVEzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxTQUFTLENBQUM7Ozs7O0FBRTdCLE1BQU0sT0FBZ0IsTUFBTTs7Ozs7OztJQW9CMUIsWUFDNkMsRUFBcUIsRUFDOUIsUUFBa0IsRUFDWCxVQUE0QixFQUNoQyxNQUFvQjtRQUhkLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBQzlCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDWCxlQUFVLEdBQVYsVUFBVSxDQUFrQjtRQUNoQyxXQUFNLEdBQU4sTUFBTSxDQUFjO1FBckIzRCxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLE9BQUUsR0FBRyxFQUFFLENBQUM7UUFHUixnQkFBVyxHQUFHLEtBQUssQ0FBQztJQWtCakIsQ0FBQzs7OztJQWhCSixJQUNJLEdBQUc7UUFDTCxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQsSUFBSSxRQUFRO1FBQ1YsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsS0FBSyxJQUFJO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFFL0MsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7O0lBU0QsZUFBZTtRQUNiLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYTthQUM1QixJQUFJLENBQUMsU0FB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QUksQ0FBQyxZQUFZLENBQUMsYUFBYTthQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFBLElBQUksQ0FBQyxVQUFVLEVBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUM5QyxTQUFTOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxFQUFDLENBQUM7SUFDOUMsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIEhvc3RCaW5kaW5nLCBJbmplY3QsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBFcnJvckRhdGEgfSBmcm9tICcuL2Vycm9ycyc7XG5pbXBvcnQgeyBTRlZhbHVlIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQXJyYXlQcm9wZXJ0eSB9IGZyb20gJy4vbW9kZWwvYXJyYXkucHJvcGVydHknO1xuaW1wb3J0IHsgRm9ybVByb3BlcnR5IH0gZnJvbSAnLi9tb2RlbC9mb3JtLnByb3BlcnR5JztcbmltcG9ydCB7IE9iamVjdFByb3BlcnR5IH0gZnJvbSAnLi9tb2RlbC9vYmplY3QucHJvcGVydHknO1xuaW1wb3J0IHsgU0ZTY2hlbWEgfSBmcm9tICcuL3NjaGVtYSc7XG5pbXBvcnQgeyBTRlVJU2NoZW1hSXRlbSB9IGZyb20gJy4vc2NoZW1hL3VpJztcbmltcG9ydCB7IFNGSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vc2YtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU0ZDb21wb25lbnQgfSBmcm9tICcuL3NmLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBkaSB9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgV2lkZ2V0PFQgZXh0ZW5kcyBGb3JtUHJvcGVydHk+IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIGZvcm1Qcm9wZXJ0eTogVDtcbiAgZXJyb3I6IHN0cmluZztcbiAgc2hvd0Vycm9yID0gZmFsc2U7XG4gIGlkID0gJyc7XG4gIHNjaGVtYTogU0ZTY2hlbWE7XG4gIHVpOiBTRlVJU2NoZW1hSXRlbTtcbiAgZmlyc3RWaXN1YWwgPSBmYWxzZTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGNscygpIHtcbiAgICByZXR1cm4gdGhpcy51aS5jbGFzcyB8fCAnJztcbiAgfVxuXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHwgbnVsbCB7XG4gICAgaWYgKHRoaXMuc2NoZW1hLnJlYWRPbmx5ID09PSB0cnVlKSByZXR1cm4gdHJ1ZTtcblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChDaGFuZ2VEZXRlY3RvclJlZikgcHVibGljIHJlYWRvbmx5IGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBASW5qZWN0KEluamVjdG9yKSBwdWJsaWMgcmVhZG9ubHkgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIEBJbmplY3QoU0ZJdGVtQ29tcG9uZW50KSBwdWJsaWMgcmVhZG9ubHkgc2ZJdGVtQ29tcD86IFNGSXRlbUNvbXBvbmVudCxcbiAgICBASW5qZWN0KFNGQ29tcG9uZW50KSBwdWJsaWMgcmVhZG9ubHkgc2ZDb21wPzogU0ZDb21wb25lbnQsXG4gICkge31cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5mb3JtUHJvcGVydHkuZXJyb3JzQ2hhbmdlc1xuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuc2ZJdGVtQ29tcCEudW5zdWJzY3JpYmUkKSlcbiAgICAgIC5zdWJzY3JpYmUoKGVycm9yczogRXJyb3JEYXRhW10gfCBudWxsKSA9PiB7XG4gICAgICAgIGlmIChlcnJvcnMgPT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICBkaSh0aGlzLnVpLCAnZXJyb3JzQ2hhbmdlcycsIHRoaXMuZm9ybVByb3BlcnR5LnBhdGgsIGVycm9ycyk7XG5cbiAgICAgICAgLy8g5LiN5pi+56S66aaW5qyh5qCh6aqM6KeG6KeJXG4gICAgICAgIGlmICh0aGlzLmZpcnN0VmlzdWFsKSB7XG4gICAgICAgICAgdGhpcy5zaG93RXJyb3IgPSBlcnJvcnMubGVuZ3RoID4gMDtcbiAgICAgICAgICB0aGlzLmVycm9yID0gdGhpcy5zaG93RXJyb3IgPyAoZXJyb3JzWzBdLm1lc3NhZ2UgYXMgc3RyaW5nKSA6ICcnO1xuXG4gICAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5maXJzdFZpc3VhbCA9IHRydWU7XG4gICAgICB9KTtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlOiBTRlZhbHVlKSB7XG4gICAgdGhpcy5mb3JtUHJvcGVydHkuc2V0VmFsdWUodmFsdWUsIGZhbHNlKTtcbiAgICBkaSh0aGlzLnVpLCAndmFsdWVDaGFuZ2VzJywgdGhpcy5mb3JtUHJvcGVydHkucGF0aCwgdGhpcy5mb3JtUHJvcGVydHkpO1xuICB9XG5cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmZvcm1Qcm9wZXJ0eS52YWx1ZTtcbiAgfVxuXG4gIGRldGVjdENoYW5nZXMob25seVNlbGYgPSBmYWxzZSkge1xuICAgIGlmIChvbmx5U2VsZikge1xuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5mb3JtUHJvcGVydHkucm9vdC53aWRnZXQuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgYWJzdHJhY3QgcmVzZXQodmFsdWU6IFNGVmFsdWUpO1xufVxuXG5leHBvcnQgY2xhc3MgQ29udHJvbFdpZGdldCBleHRlbmRzIFdpZGdldDxGb3JtUHJvcGVydHk+IHtcbiAgcmVzZXQoX3ZhbHVlOiBTRlZhbHVlKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgQXJyYXlMYXlvdXRXaWRnZXQgZXh0ZW5kcyBXaWRnZXQ8QXJyYXlQcm9wZXJ0eT4gaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgcmVzZXQoX3ZhbHVlOiBTRlZhbHVlKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5lcnJvcnNDaGFuZ2VzXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5zZkl0ZW1Db21wIS51bnN1YnNjcmliZSQpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNkLmRldGVjdENoYW5nZXMoKSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE9iamVjdExheW91dFdpZGdldCBleHRlbmRzIFdpZGdldDxPYmplY3RQcm9wZXJ0eT4gaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgcmVzZXQoX3ZhbHVlOiBTRlZhbHVlKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5lcnJvcnNDaGFuZ2VzXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5zZkl0ZW1Db21wIS51bnN1YnNjcmliZSQpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNkLmRldGVjdENoYW5nZXMoKSk7XG4gIH1cbn1cbiJdfQ==