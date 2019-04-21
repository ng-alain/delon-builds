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
            .pipe(takeUntil((/** @type {?} */ (this.sfItemComp)).unsubscribe$))
            .subscribe((/**
         * @return {?}
         */
        () => this.cd.detectChanges()));
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
            .pipe(takeUntil((/** @type {?} */ (this.sfItemComp)).unsubscribe$))
            .subscribe((/**
         * @return {?}
         */
        () => this.cd.detectChanges()));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWlCLGlCQUFpQixFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hHLE9BQU8sRUFBVSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQVFuRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxTQUFTLENBQUM7Ozs7O0FBRTdCLE1BQU0sT0FBZ0IsTUFBTTs7Ozs7OztJQW9CMUIsWUFDNkMsRUFBcUIsRUFDOUIsUUFBa0IsRUFDWCxVQUE0QixFQUNoQyxNQUFvQjtRQUhkLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBQzlCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDWCxlQUFVLEdBQVYsVUFBVSxDQUFrQjtRQUNoQyxXQUFNLEdBQU4sTUFBTSxDQUFjO1FBckIzRCxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLE9BQUUsR0FBRyxFQUFFLENBQUM7UUFHUixnQkFBVyxHQUFHLEtBQUssQ0FBQztJQWtCakIsQ0FBQzs7OztJQWhCSixJQUNJLEdBQUc7UUFDTCxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQsSUFBSSxRQUFRO1FBQ1YsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsS0FBSyxJQUFJO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFFL0MsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7O0lBU0QsZUFBZTtRQUNiLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYTthQUM1QixJQUFJLENBQUMsU0FB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QUksQ0FBQyxZQUFZLENBQUMsYUFBYTthQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFBLElBQUksQ0FBQyxVQUFVLEVBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUM5QyxTQUFTOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxFQUFDLENBQUM7SUFDOUMsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIEhvc3RCaW5kaW5nLCBJbmplY3QsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmaWx0ZXIsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEVycm9yRGF0YSB9IGZyb20gJy4vZXJyb3JzJztcbmltcG9ydCB7IFNGVmFsdWUgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBBcnJheVByb3BlcnR5IH0gZnJvbSAnLi9tb2RlbC9hcnJheS5wcm9wZXJ0eSc7XG5pbXBvcnQgeyBGb3JtUHJvcGVydHkgfSBmcm9tICcuL21vZGVsL2Zvcm0ucHJvcGVydHknO1xuaW1wb3J0IHsgT2JqZWN0UHJvcGVydHkgfSBmcm9tICcuL21vZGVsL29iamVjdC5wcm9wZXJ0eSc7XG5pbXBvcnQgeyBTRlNjaGVtYSB9IGZyb20gJy4vc2NoZW1hJztcbmltcG9ydCB7IFNGVUlTY2hlbWFJdGVtIH0gZnJvbSAnLi9zY2hlbWEvdWknO1xuaW1wb3J0IHsgU0ZJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9zZi1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTRkNvbXBvbmVudCB9IGZyb20gJy4vc2YuY29tcG9uZW50JztcbmltcG9ydCB7IGRpIH0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBXaWRnZXQ8VCBleHRlbmRzIEZvcm1Qcm9wZXJ0eT4gaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgZm9ybVByb3BlcnR5OiBUO1xuICBlcnJvcjogc3RyaW5nO1xuICBzaG93RXJyb3IgPSBmYWxzZTtcbiAgaWQgPSAnJztcbiAgc2NoZW1hOiBTRlNjaGVtYTtcbiAgdWk6IFNGVUlTY2hlbWFJdGVtO1xuICBmaXJzdFZpc3VhbCA9IGZhbHNlO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKVxuICBnZXQgY2xzKCkge1xuICAgIHJldHVybiB0aGlzLnVpLmNsYXNzIHx8ICcnO1xuICB9XG5cbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4gfCBudWxsIHtcbiAgICBpZiAodGhpcy5zY2hlbWEucmVhZE9ubHkgPT09IHRydWUpIHJldHVybiB0cnVlO1xuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KENoYW5nZURldGVjdG9yUmVmKSBwdWJsaWMgcmVhZG9ubHkgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIEBJbmplY3QoSW5qZWN0b3IpIHB1YmxpYyByZWFkb25seSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgQEluamVjdChTRkl0ZW1Db21wb25lbnQpIHB1YmxpYyByZWFkb25seSBzZkl0ZW1Db21wPzogU0ZJdGVtQ29tcG9uZW50LFxuICAgIEBJbmplY3QoU0ZDb21wb25lbnQpIHB1YmxpYyByZWFkb25seSBzZkNvbXA/OiBTRkNvbXBvbmVudCxcbiAgKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5lcnJvcnNDaGFuZ2VzXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5zZkl0ZW1Db21wIS51bnN1YnNjcmliZSQpKVxuICAgICAgLnN1YnNjcmliZSgoZXJyb3JzOiBFcnJvckRhdGFbXSB8IG51bGwpID0+IHtcbiAgICAgICAgaWYgKGVycm9ycyA9PSBudWxsKSByZXR1cm47XG4gICAgICAgIGRpKHRoaXMudWksICdlcnJvcnNDaGFuZ2VzJywgdGhpcy5mb3JtUHJvcGVydHkucGF0aCwgZXJyb3JzKTtcblxuICAgICAgICAvLyDkuI3mmL7npLrpppbmrKHmoKHpqozop4bop4lcbiAgICAgICAgaWYgKHRoaXMuZmlyc3RWaXN1YWwpIHtcbiAgICAgICAgICB0aGlzLnNob3dFcnJvciA9IGVycm9ycy5sZW5ndGggPiAwO1xuICAgICAgICAgIHRoaXMuZXJyb3IgPSB0aGlzLnNob3dFcnJvciA/IChlcnJvcnNbMF0ubWVzc2FnZSBhcyBzdHJpbmcpIDogJyc7XG5cbiAgICAgICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZpcnN0VmlzdWFsID0gdHJ1ZTtcbiAgICAgIH0pO1xuICB9XG5cbiAgc2V0VmFsdWUodmFsdWU6IFNGVmFsdWUpIHtcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5zZXRWYWx1ZSh2YWx1ZSwgZmFsc2UpO1xuICAgIGRpKHRoaXMudWksICd2YWx1ZUNoYW5nZXMnLCB0aGlzLmZvcm1Qcm9wZXJ0eS5wYXRoLCB0aGlzLmZvcm1Qcm9wZXJ0eSk7XG4gIH1cblxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybVByb3BlcnR5LnZhbHVlO1xuICB9XG5cbiAgZGV0ZWN0Q2hhbmdlcyhvbmx5U2VsZiA9IGZhbHNlKSB7XG4gICAgaWYgKG9ubHlTZWxmKSB7XG4gICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5yb290LndpZGdldC5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICBhYnN0cmFjdCByZXNldCh2YWx1ZTogU0ZWYWx1ZSk7XG59XG5cbmV4cG9ydCBjbGFzcyBDb250cm9sV2lkZ2V0IGV4dGVuZHMgV2lkZ2V0PEZvcm1Qcm9wZXJ0eT4ge1xuICByZXNldCh2YWx1ZTogU0ZWYWx1ZSkge31cbn1cblxuZXhwb3J0IGNsYXNzIEFycmF5TGF5b3V0V2lkZ2V0IGV4dGVuZHMgV2lkZ2V0PEFycmF5UHJvcGVydHk+IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIHJlc2V0KHZhbHVlOiBTRlZhbHVlKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5lcnJvcnNDaGFuZ2VzXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5zZkl0ZW1Db21wIS51bnN1YnNjcmliZSQpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNkLmRldGVjdENoYW5nZXMoKSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE9iamVjdExheW91dFdpZGdldCBleHRlbmRzIFdpZGdldDxPYmplY3RQcm9wZXJ0eT4gaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgcmVzZXQodmFsdWU6IFNGVmFsdWUpIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuZm9ybVByb3BlcnR5LmVycm9yc0NoYW5nZXNcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLnNmSXRlbUNvbXAhLnVuc3Vic2NyaWJlJCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpKTtcbiAgfVxufVxuIl19