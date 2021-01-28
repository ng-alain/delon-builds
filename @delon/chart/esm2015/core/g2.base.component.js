/**
 * @fileoverview added by tsickle
 * Generated from: g2.base.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectorRef, Directive, ElementRef, Input, NgZone, ViewChild } from '@angular/core';
import { InputNumber } from '@delon/util';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZzIuYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jaGFydC9jb3JlL2cyLmJhc2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFnQyxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakksT0FBTyxFQUFFLFdBQVcsRUFBZSxNQUFNLGFBQWEsQ0FBQztBQUN2RCxPQUFPLEVBQUUsT0FBTyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUM3QyxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFHMUMsTUFBTSxPQUFnQixlQUFlOzs7Ozs7OztJQXdCbkMsWUFDWSxHQUFjLEVBQ2QsRUFBMkIsRUFDM0IsTUFBYyxFQUNkLFFBQWtCLEVBQ2xCLEdBQXNCO1FBSnRCLFFBQUcsR0FBSCxHQUFHLENBQVc7UUFDZCxPQUFFLEdBQUYsRUFBRSxDQUF5QjtRQUMzQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQXhCeEIsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFFekMsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUVTLFVBQUssR0FBRyxDQUFDLENBQUM7UUFzQmhDLElBQUksQ0FBQyxLQUFLLEdBQUcsbUJBQUEsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU07YUFDWixJQUFJLENBQ0gsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFDeEIsTUFBTTs7O1FBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDLENBQzNCO2FBQ0EsU0FBUzs7O1FBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFDLENBQUM7SUFDbEMsQ0FBQzs7OztJQTFCRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQzs7OztJQU1ELE1BQU0sS0FBVSxDQUFDOzs7O0lBRWpCLFNBQVMsS0FBVSxDQUFDOzs7OztJQWtCWixJQUFJO1FBQ1YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHOzs7UUFBQyxHQUFHLEVBQUU7WUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUMzQixDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxVQUFVOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQUM7SUFDcEYsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDNUIsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2QsSUFBSSxDQUFDLG1CQUFBLE1BQU0sRUFBTyxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNiO2FBQU07WUFDTCxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUI7OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBQyxDQUFDO0lBQzFELENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDNUI7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDekIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUI7OztZQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEVBQUMsQ0FBQztTQUM1RDtJQUNILENBQUM7OztZQTNFRixTQUFTOzs7O1lBRkQsU0FBUztZQUxxQixVQUFVO1lBQVMsTUFBTTtZQUR2RCxRQUFRO1lBQ1IsaUJBQWlCOzs7bUJBV3ZCLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO29CQU12QyxLQUFLO29CQUNMLEtBQUs7O0FBRGtCO0lBQWQsV0FBVyxFQUFFOzs4Q0FBVzs7O0lBUmxDLHdDQUE0Qzs7Ozs7SUFFNUMsK0JBQXFFOzs7OztJQUNyRSxrQ0FBZ0M7Ozs7O0lBQ2hDLG1DQUF5Qzs7Ozs7SUFDekMsaUNBQXdCOztJQUN4QixpQ0FBZTs7SUFFZixnQ0FBa0M7O0lBQ2xDLGdDQUEyQzs7Ozs7SUFlekMsOEJBQXdCOzs7OztJQUN4Qiw2QkFBcUM7Ozs7O0lBQ3JDLGlDQUF3Qjs7Ozs7SUFDeEIsbUNBQTRCOzs7OztJQUM1Qiw4QkFBZ0M7Ozs7O0lBYmxDLG9EQUF5Qjs7Ozs7SUFFekIsd0RBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE5nWm9uZSwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDaGFydCwgVHlwZXMgfSBmcm9tICdAYW50di9nMic7XG5pbXBvcnQgeyBJbnB1dE51bWJlciwgTnVtYmVySW5wdXQgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRzJTZXJ2aWNlIH0gZnJvbSAnLi9nMi5zZXJ2aWNjZSc7XG5cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEcyQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZGVsYXk6IE51bWJlcklucHV0O1xuXG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicsIHsgc3RhdGljOiB0cnVlIH0pIHByb3RlY3RlZCBub2RlOiBFbGVtZW50UmVmO1xuICBwcm90ZWN0ZWQgcmVzaXplJDogU3Vic2NyaXB0aW9uO1xuICBwcm90ZWN0ZWQgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcm90ZWN0ZWQgX2NoYXJ0OiBDaGFydDtcbiAgbG9hZGVkID0gZmFsc2U7XG5cbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgZGVsYXkgPSAwO1xuICBASW5wdXQoKSB0aGVtZTogc3RyaW5nIHwgVHlwZXMuTG9vc2VPYmplY3Q7XG5cbiAgZ2V0IGNoYXJ0KCk6IENoYXJ0IHtcbiAgICByZXR1cm4gdGhpcy5fY2hhcnQ7XG4gIH1cblxuICBhYnN0cmFjdCBpbnN0YWxsKCk6IHZvaWQ7XG5cbiAgYWJzdHJhY3QgYXR0YWNoQ2hhcnQoKTogdm9pZDtcblxuICBvbkluaXQoKTogdm9pZCB7fVxuXG4gIG9uQ2hhbmdlcygpOiB2b2lkIHt9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHNydjogRzJTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBlbDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJvdGVjdGVkIG5nWm9uZTogTmdab25lLFxuICAgIHByb3RlY3RlZCBwbGF0Zm9ybTogUGxhdGZvcm0sXG4gICAgcHJvdGVjdGVkIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICkge1xuICAgIHRoaXMudGhlbWUgPSBzcnYuY29nLnRoZW1lITtcbiAgICB0aGlzLnNydi5ub3RpZnlcbiAgICAgIC5waXBlKFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXG4gICAgICAgIGZpbHRlcigoKSA9PiAhdGhpcy5sb2FkZWQpLFxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmxvYWQoKSk7XG4gIH1cblxuICBwcml2YXRlIGxvYWQoKTogdm9pZCB7XG4gICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHRoaXMuaW5zdGFsbCgpLCB0aGlzLmRlbGF5KSk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMub25Jbml0KCk7XG4gICAgaWYgKCh3aW5kb3cgYXMgYW55KS5HMikge1xuICAgICAgdGhpcy5sb2FkKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3J2LmxpYkxvYWQoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlcygpO1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuYXR0YWNoQ2hhcnQoKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5yZXNpemUkKSB7XG4gICAgICB0aGlzLnJlc2l6ZSQudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICAgIGlmICh0aGlzLl9jaGFydCkge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5fY2hhcnQuZGVzdHJveSgpKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==