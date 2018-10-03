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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsV0FBVyxFQUdYLE1BQU0sRUFDTixpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hDLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFPN0IsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7QUFFN0MsTUFBTTs7Ozs7SUFxQkosWUFDNkMsRUFBcUIsRUFDM0IsTUFBb0I7UUFEZCxPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUMzQixXQUFNLEdBQU4sTUFBTSxDQUFjO3lCQXBCL0MsS0FBSztrQkFDWixFQUFFOzJCQUdPLEtBQUs7S0FpQmY7Ozs7SUFmSixJQUNJLEdBQUc7UUFDTCxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztLQUM1Qjs7OztJQUVELElBQUksUUFBUTtRQUNWLElBQUksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsS0FBSyxXQUFXO1lBQzdDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFFOUIsT0FBTyxJQUFJLENBQUM7S0FDYjs7OztJQU9ELGVBQWU7UUFDYixJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWE7YUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQzthQUM1QixTQUFTLENBQUMsQ0FBQyxNQUFtQixFQUFFLEVBQUU7WUFDakMsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUs7Z0JBQUUsRUFBRSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQzs7WUFHdkUsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2dCQUNuQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQkFFckQsSUFBSSxJQUFJLENBQUMsRUFBRSxrQkFBZSxJQUFJO29CQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7YUFDekQ7WUFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztTQUN6QixDQUFDLENBQUM7S0FDTjs7Ozs7SUFFRCxRQUFRLENBQUMsS0FBVTtRQUNqQixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDekMsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRTtZQUNqQixFQUFFLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUMvRDtLQUNGOzs7O0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztLQUNoQzs7OztJQUVELGFBQWE7UUFDWCxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7S0FDakQ7Ozs7WUFyRUQsaUJBQWlCLHVCQWtDZCxNQUFNLFNBQUMsaUJBQWlCO1lBeEJwQixXQUFXLHVCQXlCZixNQUFNLFNBQUMsV0FBVzs7O2tCQWRwQixXQUFXLFNBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFEdEIsTUFBTSxvQkFBcUIsU0FBUSxNQUFvQjs7Ozs7SUFDckQsS0FBSyxDQUFDLEtBQVUsS0FBSTtDQUNyQjtBQUVELE1BQU0sd0JBQXlCLFNBQVEsTUFBcUI7Ozs7O0lBRTFELEtBQUssQ0FBQyxLQUFVLEtBQUk7Ozs7SUFFcEIsZUFBZTtRQUNiLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7S0FDMUU7Q0FDRjtBQUVELE1BQU0seUJBQTBCLFNBQVEsTUFBc0I7Ozs7O0lBRTVELEtBQUssQ0FBQyxLQUFVLEtBQUk7Ozs7SUFFcEIsZUFBZTtRQUNiLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7S0FDMUU7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEhvc3RCaW5kaW5nLFxuICBPcHRpb25hbCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgSW5qZWN0LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBkaSB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgRm9ybVByb3BlcnR5IH0gZnJvbSAnLi9tb2RlbC9mb3JtLnByb3BlcnR5JztcbmltcG9ydCB7IEFycmF5UHJvcGVydHkgfSBmcm9tICcuL21vZGVsL2FycmF5LnByb3BlcnR5JztcbmltcG9ydCB7IE9iamVjdFByb3BlcnR5IH0gZnJvbSAnLi9tb2RlbC9vYmplY3QucHJvcGVydHknO1xuaW1wb3J0IHsgU0ZTY2hlbWEgfSBmcm9tICcuL3NjaGVtYSc7XG5pbXBvcnQgeyBTRlVJU2NoZW1hSXRlbSB9IGZyb20gJy4vc2NoZW1hL3VpJztcbmltcG9ydCB7IEVycm9yRGF0YSB9IGZyb20gJy4vZXJyb3JzJztcbmltcG9ydCB7IFNGQ29tcG9uZW50IH0gZnJvbSAnLi9zZi5jb21wb25lbnQnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgV2lkZ2V0PFQgZXh0ZW5kcyBGb3JtUHJvcGVydHk+IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIGZvcm1Qcm9wZXJ0eTogVDtcbiAgZXJyb3I6IHN0cmluZztcbiAgc2hvd0Vycm9yID0gZmFsc2U7XG4gIGlkID0gJyc7XG4gIHNjaGVtYTogU0ZTY2hlbWE7XG4gIHVpOiBTRlVJU2NoZW1hSXRlbTtcbiAgZmlyc3RWaXN1YWwgPSBmYWxzZTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGNscygpIHtcbiAgICByZXR1cm4gdGhpcy51aS5jbGFzcyB8fCAnJztcbiAgfVxuXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICBpZiAodHlwZW9mIHRoaXMuc2NoZW1hLnJlYWRPbmx5ICE9PSAndW5kZWZpbmVkJylcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5yZWFkT25seTtcblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChDaGFuZ2VEZXRlY3RvclJlZikgcHVibGljIHJlYWRvbmx5IGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBASW5qZWN0KFNGQ29tcG9uZW50KSBwdWJsaWMgcmVhZG9ubHkgc2ZDb21wPzogU0ZDb21wb25lbnQsXG4gICkge31cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5mb3JtUHJvcGVydHkuZXJyb3JzQ2hhbmdlc1xuICAgICAgLnBpcGUoZmlsdGVyKHcgPT4gdyAhPSBudWxsKSlcbiAgICAgIC5zdWJzY3JpYmUoKGVycm9yczogRXJyb3JEYXRhW10pID0+IHtcbiAgICAgICAgaWYgKHRoaXMudWkuZGVidWcpIGRpKCdlcnJvcnNDaGFuZ2VzJywgdGhpcy5mb3JtUHJvcGVydHkucGF0aCwgZXJyb3JzKTtcblxuICAgICAgICAvLyDkuI3mmL7npLrpppbmrKHmoKHpqozop4bop4lcbiAgICAgICAgaWYgKHRoaXMuZmlyc3RWaXN1YWwpIHtcbiAgICAgICAgICB0aGlzLnNob3dFcnJvciA9IGVycm9ycy5sZW5ndGggPiAwO1xuICAgICAgICAgIHRoaXMuZXJyb3IgPSB0aGlzLnNob3dFcnJvciA/IGVycm9yc1swXS5tZXNzYWdlIDogJyc7XG5cbiAgICAgICAgICBpZiAodGhpcy51aS5fX2Rlc3Ryb3kgIT09IHRydWUpIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmlyc3RWaXN1YWwgPSB0cnVlO1xuICAgICAgfSk7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5mb3JtUHJvcGVydHkuc2V0VmFsdWUodmFsdWUsIGZhbHNlKTtcbiAgICBpZiAodGhpcy51aS5kZWJ1Zykge1xuICAgICAgZGkoJ3ZhbHVlQ2hhbmdlcycsIHRoaXMuZm9ybVByb3BlcnR5LnBhdGgsIHRoaXMuZm9ybVByb3BlcnR5KTtcbiAgICB9XG4gIH1cblxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybVByb3BlcnR5LnZhbHVlO1xuICB9XG5cbiAgZGV0ZWN0Q2hhbmdlcygpIHtcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5yb290LndpZGdldC5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGFic3RyYWN0IHJlc2V0KHZhbHVlOiBhbnkpO1xufVxuXG5leHBvcnQgY2xhc3MgQ29udHJvbFdpZGdldCBleHRlbmRzIFdpZGdldDxGb3JtUHJvcGVydHk+IHtcbiAgcmVzZXQodmFsdWU6IGFueSkge31cbn1cblxuZXhwb3J0IGNsYXNzIEFycmF5TGF5b3V0V2lkZ2V0IGV4dGVuZHMgV2lkZ2V0PEFycmF5UHJvcGVydHk+XG4gIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIHJlc2V0KHZhbHVlOiBhbnkpIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuZm9ybVByb3BlcnR5LmVycm9yc0NoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgT2JqZWN0TGF5b3V0V2lkZ2V0IGV4dGVuZHMgV2lkZ2V0PE9iamVjdFByb3BlcnR5PlxuICBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICByZXNldCh2YWx1ZTogYW55KSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5lcnJvcnNDaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNkLmRldGVjdENoYW5nZXMoKSk7XG4gIH1cbn1cbiJdfQ==