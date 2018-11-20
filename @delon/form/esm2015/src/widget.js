/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { HostBinding, Inject, ChangeDetectorRef, } from '@angular/core';
import { filter } from 'rxjs/operators';
import { di } from './utils';
import { SFComponent } from './sf.component';
/**
 * @abstract
 * @template T
 */
export class Widget {
    /**
     * @param {?} cd
     * @param {?=} sfComp
     */
    constructor(cd, sfComp) {
        this.cd = cd;
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
            .pipe(filter(w => w != null))
            .subscribe((errors) => {
            if (this.ui.debug)
                di('errorsChanges', this.formProperty.path, errors);
            // 不显示首次校验视觉
            if (this.firstVisual) {
                this.showError = errors.length > 0;
                this.error = this.showError ? errors[0].message : '';
                if (this.ui.__destroy !== true)
                    this.cd.detectChanges();
            }
            this.firstVisual = true;
        });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setValue(value) {
        this.formProperty.setValue(value, false);
        if (this.ui.debug) {
            di('valueChanges', this.formProperty.path, this.formProperty);
        }
    }
    /**
     * @return {?}
     */
    get value() {
        return this.formProperty.value;
    }
    /**
     * @return {?}
     */
    detectChanges() {
        this.formProperty.root.widget.cd.markForCheck();
    }
}
/** @nocollapse */
Widget.ctorParameters = () => [
    { type: ChangeDetectorRef, decorators: [{ type: Inject, args: [ChangeDetectorRef,] }] },
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
     * @param {?} value
     * @return {?}
     */
    reset(value) { }
}
export class ArrayLayoutWidget extends Widget {
    /**
     * @param {?} value
     * @return {?}
     */
    reset(value) { }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.formProperty.errorsChanges
            .pipe(filter(() => this.ui.__destroy !== true))
            .subscribe(() => this.cd.detectChanges());
    }
}
export class ObjectLayoutWidget extends Widget {
    /**
     * @param {?} value
     * @return {?}
     */
    reset(value) { }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.formProperty.errorsChanges
            .pipe(filter(() => this.ui.__destroy !== true))
            .subscribe(() => this.cd.detectChanges());
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsV0FBVyxFQUdYLE1BQU0sRUFDTixpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hDLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFPN0IsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7OztBQUU3QyxNQUFNLE9BQWdCLE1BQU07Ozs7O0lBb0IxQixZQUM2QyxFQUFxQixFQUMzQixNQUFvQjtRQURkLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBQzNCLFdBQU0sR0FBTixNQUFNLENBQWM7UUFuQjNELGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsT0FBRSxHQUFHLEVBQUUsQ0FBQztRQUdSLGdCQUFXLEdBQUcsS0FBSyxDQUFDO0lBZ0JqQixDQUFDOzs7O0lBZEosSUFDSSxHQUFHO1FBQ0wsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVELElBQUksUUFBUTtRQUNWLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEtBQUssSUFBSTtZQUFFLE9BQU8sSUFBSSxDQUFDO1FBRS9DLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7OztJQU9ELGVBQWU7UUFDYixJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWE7YUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQzthQUM1QixTQUFTLENBQUMsQ0FBQyxNQUFtQixFQUFFLEVBQUU7WUFDakMsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUs7Z0JBQUUsRUFBRSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztZQUV2RSxZQUFZO1lBQ1osSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2dCQUNuQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQkFFckQsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsS0FBSyxJQUFJO29CQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7YUFDekQ7WUFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLEtBQVU7UUFDakIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3pDLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUU7WUFDakIsRUFBRSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDL0Q7SUFDSCxDQUFDOzs7O0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztJQUNqQyxDQUFDOzs7O0lBRUQsYUFBYTtRQUNYLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDbEQsQ0FBQzs7OztZQW5FRCxpQkFBaUIsdUJBaUNkLE1BQU0sU0FBQyxpQkFBaUI7WUF2QnBCLFdBQVcsdUJBd0JmLE1BQU0sU0FBQyxXQUFXOzs7a0JBYnBCLFdBQVcsU0FBQyxPQUFPOzs7O0lBUnBCLDhCQUFnQjs7SUFDaEIsdUJBQWM7O0lBQ2QsMkJBQWtCOztJQUNsQixvQkFBUTs7SUFDUix3QkFBaUI7O0lBQ2pCLG9CQUFtQjs7SUFDbkIsNkJBQW9COztJQWNsQixvQkFBZ0U7O0lBQ2hFLHdCQUF5RDs7Ozs7O0lBbUMzRCw4Q0FBMkI7O0FBRzdCLE1BQU0sT0FBTyxhQUFjLFNBQVEsTUFBb0I7Ozs7O0lBQ3JELEtBQUssQ0FBQyxLQUFVLElBQUcsQ0FBQztDQUNyQjtBQUVELE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxNQUFxQjs7Ozs7SUFFMUQsS0FBSyxDQUFDLEtBQVUsSUFBRyxDQUFDOzs7O0lBRXBCLGVBQWU7UUFDYixJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWE7YUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsS0FBSyxJQUFJLENBQUMsQ0FBQzthQUM5QyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Q0FDRjtBQUVELE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxNQUFzQjs7Ozs7SUFFNUQsS0FBSyxDQUFDLEtBQVUsSUFBRyxDQUFDOzs7O0lBRXBCLGVBQWU7UUFDYixJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWE7YUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsS0FBSyxJQUFJLENBQUMsQ0FBQzthQUM5QyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEhvc3RCaW5kaW5nLFxuICBPcHRpb25hbCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgSW5qZWN0LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBkaSB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgRm9ybVByb3BlcnR5IH0gZnJvbSAnLi9tb2RlbC9mb3JtLnByb3BlcnR5JztcbmltcG9ydCB7IEFycmF5UHJvcGVydHkgfSBmcm9tICcuL21vZGVsL2FycmF5LnByb3BlcnR5JztcbmltcG9ydCB7IE9iamVjdFByb3BlcnR5IH0gZnJvbSAnLi9tb2RlbC9vYmplY3QucHJvcGVydHknO1xuaW1wb3J0IHsgU0ZTY2hlbWEgfSBmcm9tICcuL3NjaGVtYSc7XG5pbXBvcnQgeyBTRlVJU2NoZW1hSXRlbSB9IGZyb20gJy4vc2NoZW1hL3VpJztcbmltcG9ydCB7IEVycm9yRGF0YSB9IGZyb20gJy4vZXJyb3JzJztcbmltcG9ydCB7IFNGQ29tcG9uZW50IH0gZnJvbSAnLi9zZi5jb21wb25lbnQnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgV2lkZ2V0PFQgZXh0ZW5kcyBGb3JtUHJvcGVydHk+IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIGZvcm1Qcm9wZXJ0eTogVDtcbiAgZXJyb3I6IHN0cmluZztcbiAgc2hvd0Vycm9yID0gZmFsc2U7XG4gIGlkID0gJyc7XG4gIHNjaGVtYTogU0ZTY2hlbWE7XG4gIHVpOiBTRlVJU2NoZW1hSXRlbTtcbiAgZmlyc3RWaXN1YWwgPSBmYWxzZTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGNscygpIHtcbiAgICByZXR1cm4gdGhpcy51aS5jbGFzcyB8fCAnJztcbiAgfVxuXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5zY2hlbWEucmVhZE9ubHkgPT09IHRydWUpIHJldHVybiB0cnVlO1xuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KENoYW5nZURldGVjdG9yUmVmKSBwdWJsaWMgcmVhZG9ubHkgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIEBJbmplY3QoU0ZDb21wb25lbnQpIHB1YmxpYyByZWFkb25seSBzZkNvbXA/OiBTRkNvbXBvbmVudCxcbiAgKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5lcnJvcnNDaGFuZ2VzXG4gICAgICAucGlwZShmaWx0ZXIodyA9PiB3ICE9IG51bGwpKVxuICAgICAgLnN1YnNjcmliZSgoZXJyb3JzOiBFcnJvckRhdGFbXSkgPT4ge1xuICAgICAgICBpZiAodGhpcy51aS5kZWJ1ZykgZGkoJ2Vycm9yc0NoYW5nZXMnLCB0aGlzLmZvcm1Qcm9wZXJ0eS5wYXRoLCBlcnJvcnMpO1xuXG4gICAgICAgIC8vIOS4jeaYvuekuummluasoeagoemqjOinhuiniVxuICAgICAgICBpZiAodGhpcy5maXJzdFZpc3VhbCkge1xuICAgICAgICAgIHRoaXMuc2hvd0Vycm9yID0gZXJyb3JzLmxlbmd0aCA+IDA7XG4gICAgICAgICAgdGhpcy5lcnJvciA9IHRoaXMuc2hvd0Vycm9yID8gZXJyb3JzWzBdLm1lc3NhZ2UgOiAnJztcblxuICAgICAgICAgIGlmICh0aGlzLnVpLl9fZGVzdHJveSAhPT0gdHJ1ZSkgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5maXJzdFZpc3VhbCA9IHRydWU7XG4gICAgICB9KTtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5zZXRWYWx1ZSh2YWx1ZSwgZmFsc2UpO1xuICAgIGlmICh0aGlzLnVpLmRlYnVnKSB7XG4gICAgICBkaSgndmFsdWVDaGFuZ2VzJywgdGhpcy5mb3JtUHJvcGVydHkucGF0aCwgdGhpcy5mb3JtUHJvcGVydHkpO1xuICAgIH1cbiAgfVxuXG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtUHJvcGVydHkudmFsdWU7XG4gIH1cblxuICBkZXRlY3RDaGFuZ2VzKCkge1xuICAgIHRoaXMuZm9ybVByb3BlcnR5LnJvb3Qud2lkZ2V0LmNkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgYWJzdHJhY3QgcmVzZXQodmFsdWU6IGFueSk7XG59XG5cbmV4cG9ydCBjbGFzcyBDb250cm9sV2lkZ2V0IGV4dGVuZHMgV2lkZ2V0PEZvcm1Qcm9wZXJ0eT4ge1xuICByZXNldCh2YWx1ZTogYW55KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgQXJyYXlMYXlvdXRXaWRnZXQgZXh0ZW5kcyBXaWRnZXQ8QXJyYXlQcm9wZXJ0eT5cbiAgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgcmVzZXQodmFsdWU6IGFueSkge31cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5mb3JtUHJvcGVydHkuZXJyb3JzQ2hhbmdlc1xuICAgICAgLnBpcGUoZmlsdGVyKCgpID0+IHRoaXMudWkuX19kZXN0cm95ICE9PSB0cnVlKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCkpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBPYmplY3RMYXlvdXRXaWRnZXQgZXh0ZW5kcyBXaWRnZXQ8T2JqZWN0UHJvcGVydHk+XG4gIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIHJlc2V0KHZhbHVlOiBhbnkpIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuZm9ybVByb3BlcnR5LmVycm9yc0NoYW5nZXNcbiAgICAgIC5waXBlKGZpbHRlcigoKSA9PiB0aGlzLnVpLl9fZGVzdHJveSAhPT0gdHJ1ZSkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpKTtcbiAgfVxufVxuIl19