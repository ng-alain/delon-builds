/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { HostBinding, Inject, ChangeDetectorRef, } from '@angular/core';
import { filter } from 'rxjs/operators';
import { di } from './utils';
import { SFComponent } from './sf.component';
// unsupported: template constraints.
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
        if (typeof this.schema.readOnly !== 'undefined')
            return this.schema.readOnly;
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
                if (this.ui["__destroy"] !== true)
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
        this.cd.detectChanges();
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
        this.formProperty.errorsChanges.subscribe(() => this.cd.detectChanges());
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
        this.formProperty.errorsChanges.subscribe(() => this.cd.detectChanges());
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsV0FBVyxFQUdYLE1BQU0sRUFDTixpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hDLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFPN0IsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7QUFFN0MsTUFBTTs7Ozs7SUFxQkosWUFDNkMsRUFBcUIsRUFDM0IsTUFBb0I7UUFEZCxPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUMzQixXQUFNLEdBQU4sTUFBTSxDQUFjO3lCQXBCL0MsS0FBSztrQkFDWixFQUFFOzJCQUdPLEtBQUs7S0FpQmY7Ozs7SUFmSixJQUNJLEdBQUc7UUFDTCxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztLQUM1Qjs7OztJQUVELElBQUksUUFBUTtRQUNWLElBQUksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsS0FBSyxXQUFXO1lBQzdDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFFOUIsT0FBTyxJQUFJLENBQUM7S0FDYjs7OztJQU9ELGVBQWU7UUFDYixJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWE7YUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQzthQUM1QixTQUFTLENBQUMsQ0FBQyxNQUFtQixFQUFFLEVBQUU7WUFDakMsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUs7Z0JBQUUsRUFBRSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQzs7WUFHdkUsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2dCQUNuQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQkFFckQsSUFBSSxJQUFJLENBQUMsRUFBRSxrQkFBZSxJQUFJO29CQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7YUFDekQ7WUFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztTQUN6QixDQUFDLENBQUM7S0FDTjs7Ozs7SUFFRCxRQUFRLENBQUMsS0FBVTtRQUNqQixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDekMsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRTtZQUNqQixFQUFFLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUMvRDtLQUNGOzs7O0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztLQUNoQzs7OztJQUVELGFBQWE7UUFDWCxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7S0FDakQ7Ozs7WUFyRUQsaUJBQWlCLHVCQWtDZCxNQUFNLFNBQUMsaUJBQWlCO1lBeEJwQixXQUFXLHVCQXlCZixNQUFNLFNBQUMsV0FBVzs7O2tCQWRwQixXQUFXLFNBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFEdEIsTUFBTSxvQkFBcUIsU0FBUSxNQUFvQjs7Ozs7SUFDckQsS0FBSyxDQUFDLEtBQVUsS0FBSTtDQUNyQjtBQUVELE1BQU0sd0JBQXlCLFNBQVEsTUFBcUI7Ozs7O0lBRTFELEtBQUssQ0FBQyxLQUFVLEtBQUk7Ozs7SUFFcEIsZUFBZTtRQUNiLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7S0FDMUU7Q0FDRjtBQUVELE1BQU0seUJBQTBCLFNBQVEsTUFBc0I7Ozs7O0lBRTVELEtBQUssQ0FBQyxLQUFVLEtBQUk7Ozs7SUFFcEIsZUFBZTtRQUNiLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7S0FDMUU7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgT3B0aW9uYWwsXHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBJbmplY3QsXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgZGkgfSBmcm9tICcuL3V0aWxzJztcclxuaW1wb3J0IHsgRm9ybVByb3BlcnR5IH0gZnJvbSAnLi9tb2RlbC9mb3JtLnByb3BlcnR5JztcclxuaW1wb3J0IHsgQXJyYXlQcm9wZXJ0eSB9IGZyb20gJy4vbW9kZWwvYXJyYXkucHJvcGVydHknO1xyXG5pbXBvcnQgeyBPYmplY3RQcm9wZXJ0eSB9IGZyb20gJy4vbW9kZWwvb2JqZWN0LnByb3BlcnR5JztcclxuaW1wb3J0IHsgU0ZTY2hlbWEgfSBmcm9tICcuL3NjaGVtYSc7XHJcbmltcG9ydCB7IFNGVUlTY2hlbWFJdGVtIH0gZnJvbSAnLi9zY2hlbWEvdWknO1xyXG5pbXBvcnQgeyBFcnJvckRhdGEgfSBmcm9tICcuL2Vycm9ycyc7XHJcbmltcG9ydCB7IFNGQ29tcG9uZW50IH0gZnJvbSAnLi9zZi5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFdpZGdldDxUIGV4dGVuZHMgRm9ybVByb3BlcnR5PiBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG4gIGZvcm1Qcm9wZXJ0eTogVDtcclxuICBlcnJvcjogc3RyaW5nO1xyXG4gIHNob3dFcnJvciA9IGZhbHNlO1xyXG4gIGlkID0gJyc7XHJcbiAgc2NoZW1hOiBTRlNjaGVtYTtcclxuICB1aTogU0ZVSVNjaGVtYUl0ZW07XHJcbiAgZmlyc3RWaXN1YWwgPSBmYWxzZTtcclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXHJcbiAgZ2V0IGNscygpIHtcclxuICAgIHJldHVybiB0aGlzLnVpLmNsYXNzIHx8ICcnO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLnNjaGVtYS5yZWFkT25seSAhPT0gJ3VuZGVmaW5lZCcpXHJcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5yZWFkT25seTtcclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQEluamVjdChDaGFuZ2VEZXRlY3RvclJlZikgcHVibGljIHJlYWRvbmx5IGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIEBJbmplY3QoU0ZDb21wb25lbnQpIHB1YmxpYyByZWFkb25seSBzZkNvbXA/OiBTRkNvbXBvbmVudCxcclxuICApIHt9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZm9ybVByb3BlcnR5LmVycm9yc0NoYW5nZXNcclxuICAgICAgLnBpcGUoZmlsdGVyKHcgPT4gdyAhPSBudWxsKSlcclxuICAgICAgLnN1YnNjcmliZSgoZXJyb3JzOiBFcnJvckRhdGFbXSkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnVpLmRlYnVnKSBkaSgnZXJyb3JzQ2hhbmdlcycsIHRoaXMuZm9ybVByb3BlcnR5LnBhdGgsIGVycm9ycyk7XHJcblxyXG4gICAgICAgIC8vIOS4jeaYvuekuummluasoeagoemqjOinhuiniVxyXG4gICAgICAgIGlmICh0aGlzLmZpcnN0VmlzdWFsKSB7XHJcbiAgICAgICAgICB0aGlzLnNob3dFcnJvciA9IGVycm9ycy5sZW5ndGggPiAwO1xyXG4gICAgICAgICAgdGhpcy5lcnJvciA9IHRoaXMuc2hvd0Vycm9yID8gZXJyb3JzWzBdLm1lc3NhZ2UgOiAnJztcclxuXHJcbiAgICAgICAgICBpZiAodGhpcy51aS5fX2Rlc3Ryb3kgIT09IHRydWUpIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmZpcnN0VmlzdWFsID0gdHJ1ZTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRWYWx1ZSh2YWx1ZTogYW55KSB7XHJcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5zZXRWYWx1ZSh2YWx1ZSwgZmFsc2UpO1xyXG4gICAgaWYgKHRoaXMudWkuZGVidWcpIHtcclxuICAgICAgZGkoJ3ZhbHVlQ2hhbmdlcycsIHRoaXMuZm9ybVByb3BlcnR5LnBhdGgsIHRoaXMuZm9ybVByb3BlcnR5KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCB2YWx1ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmZvcm1Qcm9wZXJ0eS52YWx1ZTtcclxuICB9XHJcblxyXG4gIGRldGVjdENoYW5nZXMoKSB7XHJcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcclxuICAgIHRoaXMuZm9ybVByb3BlcnR5LnJvb3Qud2lkZ2V0LmNkLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgYWJzdHJhY3QgcmVzZXQodmFsdWU6IGFueSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb250cm9sV2lkZ2V0IGV4dGVuZHMgV2lkZ2V0PEZvcm1Qcm9wZXJ0eT4ge1xyXG4gIHJlc2V0KHZhbHVlOiBhbnkpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBcnJheUxheW91dFdpZGdldCBleHRlbmRzIFdpZGdldDxBcnJheVByb3BlcnR5PlxyXG4gIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgcmVzZXQodmFsdWU6IGFueSkge31cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5mb3JtUHJvcGVydHkuZXJyb3JzQ2hhbmdlcy5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCkpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE9iamVjdExheW91dFdpZGdldCBleHRlbmRzIFdpZGdldDxPYmplY3RQcm9wZXJ0eT5cclxuICBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG4gIHJlc2V0KHZhbHVlOiBhbnkpIHt9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMuZm9ybVByb3BlcnR5LmVycm9yc0NoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpKTtcclxuICB9XHJcbn1cclxuIl19