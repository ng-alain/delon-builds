/**
 * @fileoverview added by tsickle
 * Generated from: g2.base.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectorRef, Directive, ElementRef, Input, NgZone, ViewChild } from '@angular/core';
import { InputNumber } from '@delon/util/other';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { G2Service } from './g2.servicce';
/**
 * @abstract
 */
export class G2BaseComponent {
    /**
     * @param {?} srv
     * @param {?} el
     * @param {?} ngZone
     * @param {?} platform
     * @param {?} cdr
     */
    constructor(srv, el, ngZone, platform, cdr) {
        this.srv = srv;
        this.el = el;
        this.ngZone = ngZone;
        this.platform = platform;
        this.cdr = cdr;
        this.destroy$ = new Subject();
        this.loaded = false;
        this.delay = 0;
        this.theme = (/** @type {?} */ (srv.cog.theme));
        this.srv.notify
            .pipe(takeUntil(this.destroy$), filter((/**
         * @return {?}
         */
        () => !this.loaded)))
            .subscribe((/**
         * @return {?}
         */
        () => this.load()));
    }
    /**
     * @return {?}
     */
    get chart() {
        return this._chart;
    }
    /**
     * @return {?}
     */
    onInit() { }
    /**
     * @return {?}
     */
    onChanges() { }
    /**
     * @private
     * @return {?}
     */
    load() {
        this.ngZone.run((/**
         * @return {?}
         */
        () => {
            this.loaded = true;
            this.cdr.detectChanges();
        }));
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => setTimeout((/**
         * @return {?}
         */
        () => this.install()), this.delay)));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.platform.isBrowser) {
            return;
        }
        this.onInit();
        if (((/** @type {?} */ (window))).G2) {
            this.load();
        }
        else {
            this.srv.libLoad();
        }
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.onChanges();
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => this.attachChart()));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.resize$) {
            this.resize$.unsubscribe();
        }
        this.destroy$.next();
        this.destroy$.complete();
        if (this._chart) {
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => this._chart.destroy()));
        }
    }
}
G2BaseComponent.decorators = [
    { type: Directive }
];
/** @nocollapse */
G2BaseComponent.ctorParameters = () => [
    { type: G2Service },
    { type: ElementRef },
    { type: NgZone },
    { type: Platform },
    { type: ChangeDetectorRef }
];
G2BaseComponent.propDecorators = {
    node: [{ type: ViewChild, args: ['container', { static: true },] }],
    delay: [{ type: Input }],
    theme: [{ type: Input }]
};
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], G2BaseComponent.prototype, "delay", void 0);
if (false) {
    /** @type {?} */
    G2BaseComponent.ngAcceptInputType_delay;
    /**
     * @type {?}
     * @protected
     */
    G2BaseComponent.prototype.node;
    /**
     * @type {?}
     * @protected
     */
    G2BaseComponent.prototype.resize$;
    /**
     * @type {?}
     * @protected
     */
    G2BaseComponent.prototype.destroy$;
    /**
     * @type {?}
     * @protected
     */
    G2BaseComponent.prototype._chart;
    /** @type {?} */
    G2BaseComponent.prototype.loaded;
    /** @type {?} */
    G2BaseComponent.prototype.delay;
    /** @type {?} */
    G2BaseComponent.prototype.theme;
    /**
     * @type {?}
     * @protected
     */
    G2BaseComponent.prototype.srv;
    /**
     * @type {?}
     * @protected
     */
    G2BaseComponent.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    G2BaseComponent.prototype.ngZone;
    /**
     * @type {?}
     * @protected
     */
    G2BaseComponent.prototype.platform;
    /**
     * @type {?}
     * @protected
     */
    G2BaseComponent.prototype.cdr;
    /**
     * @abstract
     * @return {?}
     */
    G2BaseComponent.prototype.install = function () { };
    /**
     * @abstract
     * @return {?}
     */
    G2BaseComponent.prototype.attachChart = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZzIuYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jaGFydC9jb3JlL2cyLmJhc2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFnQyxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakksT0FBTyxFQUFFLFdBQVcsRUFBZSxNQUFNLG1CQUFtQixDQUFDO0FBQzdELE9BQU8sRUFBRSxPQUFPLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUcxQyxNQUFNLE9BQWdCLGVBQWU7Ozs7Ozs7O0lBd0JuQyxZQUNZLEdBQWMsRUFDZCxFQUEyQixFQUMzQixNQUFjLEVBQ2QsUUFBa0IsRUFDbEIsR0FBc0I7UUFKdEIsUUFBRyxHQUFILEdBQUcsQ0FBVztRQUNkLE9BQUUsR0FBRixFQUFFLENBQXlCO1FBQzNCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBeEJ4QixhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUV6QyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBRVMsVUFBSyxHQUFHLENBQUMsQ0FBQztRQXNCaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxtQkFBQSxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTTthQUNaLElBQUksQ0FDSCxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUN4QixNQUFNOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUMsQ0FDM0I7YUFDQSxTQUFTOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUMsQ0FBQztJQUNsQyxDQUFDOzs7O0lBMUJELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDOzs7O0lBTUQsTUFBTSxLQUFVLENBQUM7Ozs7SUFFakIsU0FBUyxLQUFVLENBQUM7Ozs7O0lBa0JaLElBQUk7UUFDVixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUc7OztRQUFDLEdBQUcsRUFBRTtZQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzNCLENBQUMsRUFBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUI7OztRQUFDLEdBQUcsRUFBRSxDQUFDLFVBQVU7OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQztJQUNwRixDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUM1QixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZCxJQUFJLENBQUMsbUJBQUEsTUFBTSxFQUFPLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDdEIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2I7YUFBTTtZQUNMLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDcEI7SUFDSCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQjs7O1FBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFDLENBQUM7SUFDMUQsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUM1QjtRQUNELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN6QixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQjs7O1lBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsRUFBQyxDQUFDO1NBQzVEO0lBQ0gsQ0FBQzs7O1lBM0VGLFNBQVM7Ozs7WUFGRCxTQUFTO1lBTHFCLFVBQVU7WUFBUyxNQUFNO1lBRHZELFFBQVE7WUFDUixpQkFBaUI7OzttQkFXdkIsU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7b0JBTXZDLEtBQUs7b0JBQ0wsS0FBSzs7QUFEa0I7SUFBZCxXQUFXLEVBQUU7OzhDQUFXOzs7SUFSbEMsd0NBQTRDOzs7OztJQUU1QywrQkFBcUU7Ozs7O0lBQ3JFLGtDQUFnQzs7Ozs7SUFDaEMsbUNBQXlDOzs7OztJQUN6QyxpQ0FBd0I7O0lBQ3hCLGlDQUFlOztJQUVmLGdDQUFrQzs7SUFDbEMsZ0NBQTJDOzs7OztJQWV6Qyw4QkFBd0I7Ozs7O0lBQ3hCLDZCQUFxQzs7Ozs7SUFDckMsaUNBQXdCOzs7OztJQUN4QixtQ0FBNEI7Ozs7O0lBQzVCLDhCQUFnQzs7Ozs7SUFibEMsb0RBQXlCOzs7OztJQUV6Qix3REFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgTmdab25lLCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENoYXJ0LCBUeXBlcyB9IGZyb20gJ0BhbnR2L2cyJztcbmltcG9ydCB7IElucHV0TnVtYmVyLCBOdW1iZXJJbnB1dCB9IGZyb20gJ0BkZWxvbi91dGlsL290aGVyJztcbmltcG9ydCB7IFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBHMlNlcnZpY2UgfSBmcm9tICcuL2cyLnNlcnZpY2NlJztcblxuQERpcmVjdGl2ZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRzJCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9kZWxheTogTnVtYmVySW5wdXQ7XG5cbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJywgeyBzdGF0aWM6IHRydWUgfSkgcHJvdGVjdGVkIG5vZGU6IEVsZW1lbnRSZWY7XG4gIHByb3RlY3RlZCByZXNpemUkOiBTdWJzY3JpcHRpb247XG4gIHByb3RlY3RlZCBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHByb3RlY3RlZCBfY2hhcnQ6IENoYXJ0O1xuICBsb2FkZWQgPSBmYWxzZTtcblxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBkZWxheSA9IDA7XG4gIEBJbnB1dCgpIHRoZW1lOiBzdHJpbmcgfCBUeXBlcy5Mb29zZU9iamVjdDtcblxuICBnZXQgY2hhcnQoKTogQ2hhcnQge1xuICAgIHJldHVybiB0aGlzLl9jaGFydDtcbiAgfVxuXG4gIGFic3RyYWN0IGluc3RhbGwoKTogdm9pZDtcblxuICBhYnN0cmFjdCBhdHRhY2hDaGFydCgpOiB2b2lkO1xuXG4gIG9uSW5pdCgpOiB2b2lkIHt9XG5cbiAgb25DaGFuZ2VzKCk6IHZvaWQge31cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgc3J2OiBHMlNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGVsOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBwcm90ZWN0ZWQgbmdab25lOiBOZ1pvbmUsXG4gICAgcHJvdGVjdGVkIHBsYXRmb3JtOiBQbGF0Zm9ybSxcbiAgICBwcm90ZWN0ZWQgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgKSB7XG4gICAgdGhpcy50aGVtZSA9IHNydi5jb2cudGhlbWUhO1xuICAgIHRoaXMuc3J2Lm5vdGlmeVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcbiAgICAgICAgZmlsdGVyKCgpID0+ICF0aGlzLmxvYWRlZCksXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMubG9hZCgpKTtcbiAgfVxuXG4gIHByaXZhdGUgbG9hZCgpOiB2b2lkIHtcbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5pbnN0YWxsKCksIHRoaXMuZGVsYXkpKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5vbkluaXQoKTtcbiAgICBpZiAoKHdpbmRvdyBhcyBhbnkpLkcyKSB7XG4gICAgICB0aGlzLmxvYWQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zcnYubGliTG9hZCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2VzKCk7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5hdHRhY2hDaGFydCgpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnJlc2l6ZSQpIHtcbiAgICAgIHRoaXMucmVzaXplJC51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gICAgaWYgKHRoaXMuX2NoYXJ0KSB7XG4gICAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLl9jaGFydC5kZXN0cm95KCkpO1xuICAgIH1cbiAgfVxufVxuIl19