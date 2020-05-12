/**
 * @fileoverview added by tsickle
 * Generated from: src/widget.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DomSanitizer } from '@angular/platform-browser';
import { ChangeDetectorRef, HostBinding, Inject, Injector } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { SFItemComponent } from './sf-item.component';
import { SFComponent } from './sf.component';
import { di } from './utils';
/**
 * @abstract
 * @template T, UIT
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
        if (this.schema.readOnly === true || (/** @type {?} */ (this.sfComp)).disabled) {
            return true;
        }
        return null;
    }
    /**
     * @return {?}
     */
    get l() {
        return (/** @type {?} */ (this.formProperty.root.widget.sfComp)).locale;
    }
    /**
     * @return {?}
     */
    get oh() {
        return (/** @type {?} */ (this.ui.optionalHelp));
    }
    /**
     * @return {?}
     */
    get dom() {
        return this.injector.get(DomSanitizer);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.formProperty.errorsChanges.pipe(takeUntil((/** @type {?} */ (this.sfItemComp)).unsubscribe$)).subscribe((/**
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
/**
 * @template UIT
 */
export class ControlUIWidget extends Widget {
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
        this.formProperty.errorsChanges.pipe(takeUntil((/** @type {?} */ (this.sfItemComp)).unsubscribe$)).subscribe((/**
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
        this.formProperty.errorsChanges.pipe(takeUntil((/** @type {?} */ (this.sfItemComp)).unsubscribe$)).subscribe((/**
         * @return {?}
         */
        () => this.cd.detectChanges()));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELE9BQU8sRUFBaUIsaUJBQWlCLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEcsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBUzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7Ozs7QUFHN0IsTUFBTSxPQUFnQixNQUFNOzs7Ozs7O0lBa0MxQixZQUM2QyxFQUFxQixFQUM5QixRQUFrQixFQUNYLFVBQTRCLEVBQ2hDLE1BQW9CO1FBSGQsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFDOUIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNYLGVBQVUsR0FBVixVQUFVLENBQWtCO1FBQ2hDLFdBQU0sR0FBTixNQUFNLENBQWM7UUFuQzNELGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsT0FBRSxHQUFHLEVBQUUsQ0FBQztRQUdSLGdCQUFXLEdBQUcsS0FBSyxDQUFDO0lBZ0NoQixDQUFDOzs7O0lBOUJMLElBQ0ksR0FBRztRQUNMLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFRCxJQUFJLFFBQVE7UUFDVixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxLQUFLLElBQUksSUFBSSxtQkFBQSxJQUFJLENBQUMsTUFBTSxFQUFDLENBQUMsUUFBUSxFQUFFO1lBQzFELE9BQU8sSUFBSSxDQUFDO1NB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Q0FDM0I7Ozs7QUFFRCxNQUFNLE9BQU8sZUFBNEMsU0FBUSxNQUF5Qjs7Ozs7SUFDeEYsS0FBSyxDQUFDLE1BQWUsSUFBSSxDQUFDO0NBQzNCO0FBRUQsTUFBTSxPQUFPLGlCQUFrQixTQUFRLE1BQTBDOzs7OztJQUMvRSxLQUFLLENBQUMsTUFBZSxJQUFJLENBQUM7Ozs7SUFFMUIsZUFBZTtRQUNiLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQUEsSUFBSSxDQUFDLFVBQVUsRUFBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsU0FBUzs7O1FBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsRUFBQyxDQUFDO0lBQzFILENBQUM7Q0FDRjtBQUVELE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxNQUE0Qzs7Ozs7SUFDbEYsS0FBSyxDQUFDLE1BQWUsSUFBSSxDQUFDOzs7O0lBRTFCLGVBQWU7UUFDYixJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFBLElBQUksQ0FBQyxVQUFVLEVBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFNBQVM7OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLEVBQUMsQ0FBQztJQUMxSCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdG9yUmVmLCBIb3N0QmluZGluZywgSW5qZWN0LCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBFcnJvckRhdGEgfSBmcm9tICcuL2Vycm9ycyc7XG5pbXBvcnQgeyBTRlZhbHVlIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQXJyYXlQcm9wZXJ0eSB9IGZyb20gJy4vbW9kZWwvYXJyYXkucHJvcGVydHknO1xuaW1wb3J0IHsgRm9ybVByb3BlcnR5IH0gZnJvbSAnLi9tb2RlbC9mb3JtLnByb3BlcnR5JztcbmltcG9ydCB7IE9iamVjdFByb3BlcnR5IH0gZnJvbSAnLi9tb2RlbC9vYmplY3QucHJvcGVydHknO1xuaW1wb3J0IHsgU0ZTY2hlbWEgfSBmcm9tICcuL3NjaGVtYSc7XG5pbXBvcnQgeyBTRlVJU2NoZW1hSXRlbSwgU0ZPcHRpb25hbEhlbHAgfSBmcm9tICcuL3NjaGVtYS91aSc7XG5pbXBvcnQgeyBTRkl0ZW1Db21wb25lbnQgfSBmcm9tICcuL3NmLWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IFNGQ29tcG9uZW50IH0gZnJvbSAnLi9zZi5jb21wb25lbnQnO1xuaW1wb3J0IHsgZGkgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IFNGQXJyYXlXaWRnZXRTY2hlbWEsIFNGT2JqZWN0V2lkZ2V0U2NoZW1hIH0gZnJvbSAnLi93aWRnZXRzJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFdpZGdldDxUIGV4dGVuZHMgRm9ybVByb3BlcnR5LCBVSVQgZXh0ZW5kcyBTRlVJU2NoZW1hSXRlbT4gaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgZm9ybVByb3BlcnR5OiBUO1xuICBlcnJvcjogc3RyaW5nO1xuICBzaG93RXJyb3IgPSBmYWxzZTtcbiAgaWQgPSAnJztcbiAgc2NoZW1hOiBTRlNjaGVtYTtcbiAgdWk6IFVJVDtcbiAgZmlyc3RWaXN1YWwgPSBmYWxzZTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGNscygpIHtcbiAgICByZXR1cm4gdGhpcy51aS5jbGFzcyB8fCAnJztcbiAgfVxuXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHwgbnVsbCB7XG4gICAgaWYgKHRoaXMuc2NoZW1hLnJlYWRPbmx5ID09PSB0cnVlIHx8IHRoaXMuc2ZDb21wIS5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBnZXQgbCgpOiBMb2NhbGVEYXRhIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtUHJvcGVydHkucm9vdC53aWRnZXQuc2ZDb21wIS5sb2NhbGU7XG4gIH1cblxuICBnZXQgb2goKSB7XG4gICAgcmV0dXJuIHRoaXMudWkub3B0aW9uYWxIZWxwIGFzIFNGT3B0aW9uYWxIZWxwO1xuICB9XG5cbiAgZ2V0IGRvbSgpOiBEb21TYW5pdGl6ZXIge1xuICAgIHJldHVybiB0aGlzLmluamVjdG9yLmdldChEb21TYW5pdGl6ZXIpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChDaGFuZ2VEZXRlY3RvclJlZikgcHVibGljIHJlYWRvbmx5IGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBASW5qZWN0KEluamVjdG9yKSBwdWJsaWMgcmVhZG9ubHkgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIEBJbmplY3QoU0ZJdGVtQ29tcG9uZW50KSBwdWJsaWMgcmVhZG9ubHkgc2ZJdGVtQ29tcD86IFNGSXRlbUNvbXBvbmVudCxcbiAgICBASW5qZWN0KFNGQ29tcG9uZW50KSBwdWJsaWMgcmVhZG9ubHkgc2ZDb21wPzogU0ZDb21wb25lbnQsXG4gICkgeyB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZm9ybVByb3BlcnR5LmVycm9yc0NoYW5nZXMucGlwZSh0YWtlVW50aWwodGhpcy5zZkl0ZW1Db21wIS51bnN1YnNjcmliZSQpKS5zdWJzY3JpYmUoKGVycm9yczogRXJyb3JEYXRhW10gfCBudWxsKSA9PiB7XG4gICAgICBpZiAoZXJyb3JzID09IG51bGwpIHJldHVybjtcbiAgICAgIGRpKHRoaXMudWksICdlcnJvcnNDaGFuZ2VzJywgdGhpcy5mb3JtUHJvcGVydHkucGF0aCwgZXJyb3JzKTtcblxuICAgICAgLy8g5LiN5pi+56S66aaW5qyh5qCh6aqM6KeG6KeJXG4gICAgICBpZiAodGhpcy5maXJzdFZpc3VhbCkge1xuICAgICAgICB0aGlzLnNob3dFcnJvciA9IGVycm9ycy5sZW5ndGggPiAwO1xuICAgICAgICB0aGlzLmVycm9yID0gdGhpcy5zaG93RXJyb3IgPyAoZXJyb3JzWzBdLm1lc3NhZ2UgYXMgc3RyaW5nKSA6ICcnO1xuXG4gICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfVxuICAgICAgdGhpcy5maXJzdFZpc3VhbCA9IHRydWU7XG4gICAgfSk7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZTogU0ZWYWx1ZSkge1xuICAgIHRoaXMuZm9ybVByb3BlcnR5LnNldFZhbHVlKHZhbHVlLCBmYWxzZSk7XG4gICAgZGkodGhpcy51aSwgJ3ZhbHVlQ2hhbmdlcycsIHRoaXMuZm9ybVByb3BlcnR5LnBhdGgsIHRoaXMuZm9ybVByb3BlcnR5KTtcbiAgfVxuXG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtUHJvcGVydHkudmFsdWU7XG4gIH1cblxuICBkZXRlY3RDaGFuZ2VzKG9ubHlTZWxmID0gZmFsc2UpIHtcbiAgICBpZiAob25seVNlbGYpIHtcbiAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZm9ybVByb3BlcnR5LnJvb3Qud2lkZ2V0LmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIGFic3RyYWN0IHJlc2V0KHZhbHVlOiBTRlZhbHVlKTogdm9pZDtcbn1cblxuZXhwb3J0IGNsYXNzIENvbnRyb2xXaWRnZXQgZXh0ZW5kcyBXaWRnZXQ8Rm9ybVByb3BlcnR5LCBTRlVJU2NoZW1hSXRlbT4ge1xuICByZXNldChfdmFsdWU6IFNGVmFsdWUpIHsgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29udHJvbFVJV2lkZ2V0PFVJVCBleHRlbmRzIFNGVUlTY2hlbWFJdGVtPiBleHRlbmRzIFdpZGdldDxGb3JtUHJvcGVydHksIFVJVD4ge1xuICByZXNldChfdmFsdWU6IFNGVmFsdWUpIHsgfVxufVxuXG5leHBvcnQgY2xhc3MgQXJyYXlMYXlvdXRXaWRnZXQgZXh0ZW5kcyBXaWRnZXQ8QXJyYXlQcm9wZXJ0eSwgU0ZBcnJheVdpZGdldFNjaGVtYT4gaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgcmVzZXQoX3ZhbHVlOiBTRlZhbHVlKSB7IH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5mb3JtUHJvcGVydHkuZXJyb3JzQ2hhbmdlcy5waXBlKHRha2VVbnRpbCh0aGlzLnNmSXRlbUNvbXAhLnVuc3Vic2NyaWJlJCkpLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNkLmRldGVjdENoYW5nZXMoKSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE9iamVjdExheW91dFdpZGdldCBleHRlbmRzIFdpZGdldDxPYmplY3RQcm9wZXJ0eSwgU0ZPYmplY3RXaWRnZXRTY2hlbWE+IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIHJlc2V0KF92YWx1ZTogU0ZWYWx1ZSkgeyB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuZm9ybVByb3BlcnR5LmVycm9yc0NoYW5nZXMucGlwZSh0YWtlVW50aWwodGhpcy5zZkl0ZW1Db21wIS51bnN1YnNjcmliZSQpKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCkpO1xuICB9XG59XG4iXX0=