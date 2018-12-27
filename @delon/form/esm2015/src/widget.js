/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, HostBinding, Inject, Injector, } from '@angular/core';
import { filter, takeUntil } from 'rxjs/operators';
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
            .pipe(takeUntil(this.sfItemComp.unsubscribe$), filter(w => w != null))
            .subscribe((errors) => {
            if (this.ui.debug)
                di('errorsChanges', this.formProperty.path, errors);
            // 不显示首次校验视觉
            if (this.firstVisual) {
                this.showError = errors.length > 0;
                this.error = this.showError ? errors[0].message : '';
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
            .pipe(takeUntil(this.sfItemComp.unsubscribe$))
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
            .pipe(takeUntil(this.sfItemComp.unsubscribe$))
            .subscribe(() => this.cd.detectChanges());
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsaUJBQWlCLEVBQ2pCLFdBQVcsRUFDWCxNQUFNLEVBQ04sUUFBUSxHQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFRbkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sU0FBUyxDQUFDOzs7OztBQUU3QixNQUFNLE9BQWdCLE1BQU07Ozs7Ozs7SUFvQjFCLFlBQzZDLEVBQXFCLEVBQzlCLFFBQWtCLEVBQ1gsVUFBNEIsRUFDaEMsTUFBb0I7UUFIZCxPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUM5QixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ1gsZUFBVSxHQUFWLFVBQVUsQ0FBa0I7UUFDaEMsV0FBTSxHQUFOLE1BQU0sQ0FBYztRQXJCM0QsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixPQUFFLEdBQUcsRUFBRSxDQUFDO1FBR1IsZ0JBQVcsR0FBRyxLQUFLLENBQUM7SUFrQmhCLENBQUM7Ozs7SUFoQkwsSUFDSSxHQUFHO1FBQ0wsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVELElBQUksUUFBUTtRQUNWLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEtBQUssSUFBSTtZQUFFLE9BQU8sSUFBSSxDQUFDO1FBRS9DLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7OztJQVNELGVBQWU7UUFDYixJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWE7YUFDNUIsSUFB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O0lBRXpCLGVBQWU7UUFDYixJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWE7YUFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQzdDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDOUMsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBJbmplY3QsXG4gIEluamVjdG9yLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRXJyb3JEYXRhIH0gZnJvbSAnLi9lcnJvcnMnO1xuaW1wb3J0IHsgU0ZWYWx1ZSB9IGZyb20gJy4vaW50ZXJmYWNlJztcbmltcG9ydCB7IEFycmF5UHJvcGVydHkgfSBmcm9tICcuL21vZGVsL2FycmF5LnByb3BlcnR5JztcbmltcG9ydCB7IEZvcm1Qcm9wZXJ0eSB9IGZyb20gJy4vbW9kZWwvZm9ybS5wcm9wZXJ0eSc7XG5pbXBvcnQgeyBPYmplY3RQcm9wZXJ0eSB9IGZyb20gJy4vbW9kZWwvb2JqZWN0LnByb3BlcnR5JztcbmltcG9ydCB7IFNGU2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEnO1xuaW1wb3J0IHsgU0ZVSVNjaGVtYUl0ZW0gfSBmcm9tICcuL3NjaGVtYS91aSc7XG5pbXBvcnQgeyBTRkl0ZW1Db21wb25lbnQgfSBmcm9tICcuL3NmLWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IFNGQ29tcG9uZW50IH0gZnJvbSAnLi9zZi5jb21wb25lbnQnO1xuaW1wb3J0IHsgZGkgfSBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFdpZGdldDxUIGV4dGVuZHMgRm9ybVByb3BlcnR5PiBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBmb3JtUHJvcGVydHk6IFQ7XG4gIGVycm9yOiBzdHJpbmc7XG4gIHNob3dFcnJvciA9IGZhbHNlO1xuICBpZCA9ICcnO1xuICBzY2hlbWE6IFNGU2NoZW1hO1xuICB1aTogU0ZVSVNjaGVtYUl0ZW07XG4gIGZpcnN0VmlzdWFsID0gZmFsc2U7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIGdldCBjbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMudWkuY2xhc3MgfHwgJyc7XG4gIH1cblxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuc2NoZW1hLnJlYWRPbmx5ID09PSB0cnVlKSByZXR1cm4gdHJ1ZTtcblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChDaGFuZ2VEZXRlY3RvclJlZikgcHVibGljIHJlYWRvbmx5IGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBASW5qZWN0KEluamVjdG9yKSBwdWJsaWMgcmVhZG9ubHkgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIEBJbmplY3QoU0ZJdGVtQ29tcG9uZW50KSBwdWJsaWMgcmVhZG9ubHkgc2ZJdGVtQ29tcD86IFNGSXRlbUNvbXBvbmVudCxcbiAgICBASW5qZWN0KFNGQ29tcG9uZW50KSBwdWJsaWMgcmVhZG9ubHkgc2ZDb21wPzogU0ZDb21wb25lbnQsXG4gICkgeyB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZm9ybVByb3BlcnR5LmVycm9yc0NoYW5nZXNcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLnNmSXRlbUNvbXAudW5zdWJzY3JpYmUkKSwgZmlsdGVyKHcgPT4gdyAhPSBudWxsKSlcbiAgICAgIC5zdWJzY3JpYmUoKGVycm9yczogRXJyb3JEYXRhW10pID0+IHtcbiAgICAgICAgaWYgKHRoaXMudWkuZGVidWcpIGRpKCdlcnJvcnNDaGFuZ2VzJywgdGhpcy5mb3JtUHJvcGVydHkucGF0aCwgZXJyb3JzKTtcblxuICAgICAgICAvLyDkuI3mmL7npLrpppbmrKHmoKHpqozop4bop4lcbiAgICAgICAgaWYgKHRoaXMuZmlyc3RWaXN1YWwpIHtcbiAgICAgICAgICB0aGlzLnNob3dFcnJvciA9IGVycm9ycy5sZW5ndGggPiAwO1xuICAgICAgICAgIHRoaXMuZXJyb3IgPSB0aGlzLnNob3dFcnJvciA/IGVycm9yc1swXS5tZXNzYWdlIDogJyc7XG5cbiAgICAgICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZpcnN0VmlzdWFsID0gdHJ1ZTtcbiAgICAgIH0pO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWU6IFNGVmFsdWUpIHtcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5zZXRWYWx1ZSh2YWx1ZSwgZmFsc2UpO1xuICAgIGlmICh0aGlzLnVpLmRlYnVnKSB7XG4gICAgICBkaSgndmFsdWVDaGFuZ2VzJywgdGhpcy5mb3JtUHJvcGVydHkucGF0aCwgdGhpcy5mb3JtUHJvcGVydHkpO1xuICAgIH1cbiAgfVxuXG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtUHJvcGVydHkudmFsdWU7XG4gIH1cblxuICBkZXRlY3RDaGFuZ2VzKG9ubHlTZWxmID0gZmFsc2UpIHtcbiAgICBpZiAob25seVNlbGYpIHtcbiAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZm9ybVByb3BlcnR5LnJvb3Qud2lkZ2V0LmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIGFic3RyYWN0IHJlc2V0KHZhbHVlOiBTRlZhbHVlKTtcbn1cblxuZXhwb3J0IGNsYXNzIENvbnRyb2xXaWRnZXQgZXh0ZW5kcyBXaWRnZXQ8Rm9ybVByb3BlcnR5PiB7XG4gIHJlc2V0KHZhbHVlOiBTRlZhbHVlKSB7IH1cbn1cblxuZXhwb3J0IGNsYXNzIEFycmF5TGF5b3V0V2lkZ2V0IGV4dGVuZHMgV2lkZ2V0PEFycmF5UHJvcGVydHk+XG4gIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIHJlc2V0KHZhbHVlOiBTRlZhbHVlKSB7IH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5mb3JtUHJvcGVydHkuZXJyb3JzQ2hhbmdlc1xuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuc2ZJdGVtQ29tcC51bnN1YnNjcmliZSQpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNkLmRldGVjdENoYW5nZXMoKSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE9iamVjdExheW91dFdpZGdldCBleHRlbmRzIFdpZGdldDxPYmplY3RQcm9wZXJ0eT5cbiAgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgcmVzZXQodmFsdWU6IFNGVmFsdWUpIHsgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5lcnJvcnNDaGFuZ2VzXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5zZkl0ZW1Db21wLnVuc3Vic2NyaWJlJCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpKTtcbiAgfVxufVxuIl19