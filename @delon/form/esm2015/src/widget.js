/**
 * @fileoverview added by tsickle
 * Generated from: src/widget.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Directive, HostBinding, Inject, Injector } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
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
    get cleanValue() {
        var _a;
        return (/** @type {?} */ ((_a = this.sfComp) === null || _a === void 0 ? void 0 : _a.cleanValue));
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
        this.afterViewInit();
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
Widget.decorators = [
    { type: Directive }
];
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
    /**
     * @abstract
     * @return {?}
     */
    Widget.prototype.afterViewInit = function () { };
}
export class ControlWidget extends Widget {
    /**
     * @param {?} _value
     * @return {?}
     */
    reset(_value) { }
    /**
     * @return {?}
     */
    afterViewInit() { }
}
ControlWidget.decorators = [
    { type: Directive }
];
/**
 * @template UIT
 */
export class ControlUIWidget extends Widget {
    /**
     * @param {?} _value
     * @return {?}
     */
    reset(_value) { }
    /**
     * @return {?}
     */
    afterViewInit() { }
}
ControlUIWidget.decorators = [
    { type: Directive }
];
export class ArrayLayoutWidget extends Widget {
    /**
     * @param {?} _value
     * @return {?}
     */
    reset(_value) { }
    /**
     * @return {?}
     */
    afterViewInit() { }
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
ArrayLayoutWidget.decorators = [
    { type: Directive }
];
export class ObjectLayoutWidget extends Widget {
    /**
     * @param {?} _value
     * @return {?}
     */
    reset(_value) { }
    /**
     * @return {?}
     */
    afterViewInit() { }
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
ObjectLayoutWidget.decorators = [
    { type: Directive }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uL3BhY2thZ2VzL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFpQixpQkFBaUIsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0csT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXpELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQVEzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxTQUFTLENBQUM7Ozs7O0FBSTdCLE1BQU0sT0FBZ0IsTUFBTTs7Ozs7OztJQXNDMUIsWUFDNkMsRUFBcUIsRUFDOUIsUUFBa0IsRUFDWCxVQUE0QixFQUNoQyxNQUFvQjtRQUhkLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBQzlCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDWCxlQUFVLEdBQVYsVUFBVSxDQUFrQjtRQUNoQyxXQUFNLEdBQU4sTUFBTSxDQUFjO1FBdkMzRCxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLE9BQUUsR0FBRyxFQUFFLENBQUM7UUFHUixnQkFBVyxHQUFHLEtBQUssQ0FBQztJQW9DakIsQ0FBQzs7OztJQWxDSixJQUNJLEdBQUc7UUFDTCxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQsSUFBSSxRQUFRO1FBQ1YsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsS0FBSyxJQUFJLElBQUksbUJBQUEsSUFBSSxDQUFDLE1BQU0sRUFBQyxDQUFDLFFBQVEsRUFBRTtZQUMx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UEYsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdG9yUmVmLCBEaXJlY3RpdmUsIEhvc3RCaW5kaW5nLCBJbmplY3QsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRXJyb3JEYXRhIH0gZnJvbSAnLi9lcnJvcnMnO1xuaW1wb3J0IHsgU0ZWYWx1ZSB9IGZyb20gJy4vaW50ZXJmYWNlJztcbmltcG9ydCB7IEFycmF5UHJvcGVydHkgfSBmcm9tICcuL21vZGVsL2FycmF5LnByb3BlcnR5JztcbmltcG9ydCB7IEZvcm1Qcm9wZXJ0eSB9IGZyb20gJy4vbW9kZWwvZm9ybS5wcm9wZXJ0eSc7XG5pbXBvcnQgeyBPYmplY3RQcm9wZXJ0eSB9IGZyb20gJy4vbW9kZWwvb2JqZWN0LnByb3BlcnR5JztcbmltcG9ydCB7IFNGU2NoZW1hIH0gZnJvbSAnLi9zY2hlbWEnO1xuaW1wb3J0IHsgU0ZPcHRpb25hbEhlbHAsIFNGVUlTY2hlbWFJdGVtIH0gZnJvbSAnLi9zY2hlbWEvdWknO1xuaW1wb3J0IHsgU0ZJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9zZi1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTRkNvbXBvbmVudCB9IGZyb20gJy4vc2YuY29tcG9uZW50JztcbmltcG9ydCB7IGRpIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBTRkFycmF5V2lkZ2V0U2NoZW1hLCBTRk9iamVjdFdpZGdldFNjaGVtYSB9IGZyb20gJy4vd2lkZ2V0cyc7XG5cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFdpZGdldDxUIGV4dGVuZHMgRm9ybVByb3BlcnR5LCBVSVQgZXh0ZW5kcyBTRlVJU2NoZW1hSXRlbT4gaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgZm9ybVByb3BlcnR5OiBUO1xuICBlcnJvcjogc3RyaW5nO1xuICBzaG93RXJyb3IgPSBmYWxzZTtcbiAgaWQgPSAnJztcbiAgc2NoZW1hOiBTRlNjaGVtYTtcbiAgdWk6IFVJVDtcbiAgZmlyc3RWaXN1YWwgPSBmYWxzZTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGNscygpOiBzdHJpbmcgfCBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMudWkuY2xhc3MgfHwgJyc7XG4gIH1cblxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB8IG51bGwge1xuICAgIGlmICh0aGlzLnNjaGVtYS5yZWFkT25seSA9PT0gdHJ1ZSB8fCB0aGlzLnNmQ29tcCEuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZ2V0IGwoKTogTG9jYWxlRGF0YSB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybVByb3BlcnR5LnJvb3Qud2lkZ2V0LnNmQ29tcCEubG9jYWxlO1xuICB9XG5cbiAgZ2V0IG9oKCk6IFNGT3B0aW9uYWxIZWxwIHtcbiAgICByZXR1cm4gdGhpcy51aS5vcHRpb25hbEhlbHAgYXMgU0ZPcHRpb25hbEhlbHA7XG4gIH1cblxuICBnZXQgZG9tKCk6IERvbVNhbml0aXplciB7XG4gICAgcmV0dXJuIHRoaXMuaW5qZWN0b3IuZ2V0KERvbVNhbml0aXplcik7XG4gIH1cblxuICBnZXQgY2xlYW5WYWx1ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zZkNvbXA/LmNsZWFuVmFsdWUhO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChDaGFuZ2VEZXRlY3RvclJlZikgcHVibGljIHJlYWRvbmx5IGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBASW5qZWN0KEluamVjdG9yKSBwdWJsaWMgcmVhZG9ubHkgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIEBJbmplY3QoU0ZJdGVtQ29tcG9uZW50KSBwdWJsaWMgcmVhZG9ubHkgc2ZJdGVtQ29tcD86IFNGSXRlbUNvbXBvbmVudCxcbiAgICBASW5qZWN0KFNGQ29tcG9uZW50KSBwdWJsaWMgcmVhZG9ubHkgc2ZDb21wPzogU0ZDb21wb25lbnQsXG4gICkge31cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5mb3JtUHJvcGVydHkuZXJyb3JzQ2hhbmdlcy5waXBlKHRha2VVbnRpbCh0aGlzLnNmSXRlbUNvbXAhLnVuc3Vic2NyaWJlJCkpLnN1YnNjcmliZSgoZXJyb3JzOiBFcnJvckRhdGFbXSB8IG51bGwpID0+IHtcbiAgICAgIGlmIChlcnJvcnMgPT0gbnVsbCkgcmV0dXJuO1xuICAgICAgZGkodGhpcy51aSwgJ2Vycm9yc0NoYW5nZXMnLCB0aGlzLmZvcm1Qcm9wZXJ0eS5wYXRoLCBlcnJvcnMpO1xuXG4gICAgICAvLyDkuI3mmL7npLrpppbmrKHmoKHpqozop4bop4lcbiAgICAgIGlmICh0aGlzLmZpcnN0VmlzdWFsKSB7XG4gICAgICAgIHRoaXMuc2hvd0Vycm9yID0gZXJyb3JzLmxlbmd0aCA+IDA7XG4gICAgICAgIHRoaXMuZXJyb3IgPSB0aGlzLnNob3dFcnJvciA/IChlcnJvcnNbMF0ubWVzc2FnZSBhcyBzdHJpbmcpIDogJyc7XG5cbiAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmZpcnN0VmlzdWFsID0gdHJ1ZTtcbiAgICB9KTtcbiAgICB0aGlzLmFmdGVyVmlld0luaXQoKTtcbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlOiBTRlZhbHVlKTogdm9pZCB7XG4gICAgdGhpcy5mb3JtUHJvcGVydHkuc2V0VmFsdWUodmFsdWUsIGZhbHNlKTtcbiAgICBkaSh0aGlzLnVpLCAndmFsdWVDaGFuZ2VzJywgdGhpcy5mb3JtUHJvcGVydHkucGF0aCwgdGhpcy5mb3JtUHJvcGVydHkpO1xuICB9XG5cbiAgZ2V0IHZhbHVlKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybVByb3BlcnR5LnZhbHVlO1xuICB9XG5cbiAgZGV0ZWN0Q2hhbmdlcyhvbmx5U2VsZjogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgaWYgKG9ubHlTZWxmKSB7XG4gICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5yb290LndpZGdldC5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICBhYnN0cmFjdCByZXNldCh2YWx1ZTogU0ZWYWx1ZSk6IHZvaWQ7XG5cbiAgYWJzdHJhY3QgYWZ0ZXJWaWV3SW5pdCgpOiB2b2lkO1xufVxuXG5ARGlyZWN0aXZlKClcbmV4cG9ydCBjbGFzcyBDb250cm9sV2lkZ2V0IGV4dGVuZHMgV2lkZ2V0PEZvcm1Qcm9wZXJ0eSwgU0ZVSVNjaGVtYUl0ZW0+IHtcbiAgcmVzZXQoX3ZhbHVlOiBTRlZhbHVlKTogdm9pZCB7fVxuICBhZnRlclZpZXdJbml0KCk6IHZvaWQge31cbn1cblxuQERpcmVjdGl2ZSgpXG5leHBvcnQgY2xhc3MgQ29udHJvbFVJV2lkZ2V0PFVJVCBleHRlbmRzIFNGVUlTY2hlbWFJdGVtPiBleHRlbmRzIFdpZGdldDxGb3JtUHJvcGVydHksIFVJVD4ge1xuICByZXNldChfdmFsdWU6IFNGVmFsdWUpOiB2b2lkIHt9XG4gIGFmdGVyVmlld0luaXQoKTogdm9pZCB7fVxufVxuXG5ARGlyZWN0aXZlKClcbmV4cG9ydCBjbGFzcyBBcnJheUxheW91dFdpZGdldCBleHRlbmRzIFdpZGdldDxBcnJheVByb3BlcnR5LCBTRkFycmF5V2lkZ2V0U2NoZW1hPiBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICByZXNldChfdmFsdWU6IFNGVmFsdWUpOiB2b2lkIHt9XG4gIGFmdGVyVmlld0luaXQoKTogdm9pZCB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5lcnJvcnNDaGFuZ2VzLnBpcGUodGFrZVVudGlsKHRoaXMuc2ZJdGVtQ29tcCEudW5zdWJzY3JpYmUkKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpKTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKClcbmV4cG9ydCBjbGFzcyBPYmplY3RMYXlvdXRXaWRnZXQgZXh0ZW5kcyBXaWRnZXQ8T2JqZWN0UHJvcGVydHksIFNGT2JqZWN0V2lkZ2V0U2NoZW1hPiBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICByZXNldChfdmFsdWU6IFNGVmFsdWUpOiB2b2lkIHt9XG4gIGFmdGVyVmlld0luaXQoKTogdm9pZCB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm1Qcm9wZXJ0eS5lcnJvcnNDaGFuZ2VzLnBpcGUodGFrZVVudGlsKHRoaXMuc2ZJdGVtQ29tcCEudW5zdWJzY3JpYmUkKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpKTtcbiAgfVxufVxuIl19