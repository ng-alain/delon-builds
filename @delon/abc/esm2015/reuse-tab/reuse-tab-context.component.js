/**
 * @fileoverview added by tsickle
 * Generated from: reuse-tab-context.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { ReuseTabContextService } from './reuse-tab-context.service';
export class ReuseTabContextComponent {
    /**
     * @param {?} srv
     */
    constructor(srv) {
        this.srv = srv;
        this.sub$ = new Subscription();
        // tslint:disable-next-line:no-output-native
        this.change = new EventEmitter();
        this.sub$.add(srv.show.subscribe((/**
         * @param {?} context
         * @return {?}
         */
        context => this.srv.open(context))));
        this.sub$.add(srv.close.subscribe((/**
         * @param {?} res
         * @return {?}
         */
        res => this.change.emit(res))));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set i18n(value) {
        this.srv.i18n = value;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.sub$.unsubscribe();
    }
}
ReuseTabContextComponent.decorators = [
    { type: Component, args: [{
                selector: 'reuse-tab-context',
                template: ``
            }] }
];
/** @nocollapse */
ReuseTabContextComponent.ctorParameters = () => [
    { type: ReuseTabContextService }
];
ReuseTabContextComponent.propDecorators = {
    i18n: [{ type: Input }],
    change: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    ReuseTabContextComponent.prototype.sub$;
    /** @type {?} */
    ReuseTabContextComponent.prototype.change;
    /**
     * @type {?}
     * @private
     */
    ReuseTabContextComponent.prototype.srv;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLWNvbnRleHQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9yZXVzZS10YWIvIiwic291cmNlcyI6WyJyZXVzZS10YWItY29udGV4dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWEsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDcEMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFPckUsTUFBTSxPQUFPLHdCQUF3Qjs7OztJQVduQyxZQUFvQixHQUEyQjtRQUEzQixRQUFHLEdBQUgsR0FBRyxDQUF3QjtRQVZ2QyxTQUFJLEdBQWlCLElBQUksWUFBWSxFQUFFLENBQUM7O1FBUTdCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBMEIsQ0FBQztRQUdyRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVM7Ozs7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFDLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFNBQVM7Ozs7UUFBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUNuRSxDQUFDOzs7OztJQVhELElBQ0ksSUFBSSxDQUFDLEtBQXVCO1FBQzlCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDOzs7O0lBVUQsV0FBVztRQUNULElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7O1lBdEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixRQUFRLEVBQUUsRUFBRTthQUNiOzs7O1lBTlEsc0JBQXNCOzs7bUJBVTVCLEtBQUs7cUJBTUwsTUFBTTs7Ozs7OztJQVJQLHdDQUFnRDs7SUFRaEQsMENBQXVFOzs7OztJQUUzRCx1Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uRGVzdHJveSwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFJldXNlVGFiQ29udGV4dFNlcnZpY2UgfSBmcm9tICcuL3JldXNlLXRhYi1jb250ZXh0LnNlcnZpY2UnO1xuaW1wb3J0IHsgUmV1c2VDb250ZXh0Q2xvc2VFdmVudCwgUmV1c2VDb250ZXh0STE4biB9IGZyb20gJy4vcmV1c2UtdGFiLmludGVyZmFjZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdyZXVzZS10YWItY29udGV4dCcsXG4gIHRlbXBsYXRlOiBgYCxcbn0pXG5leHBvcnQgY2xhc3MgUmV1c2VUYWJDb250ZXh0Q29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBzdWIkOiBTdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgQElucHV0KClcbiAgc2V0IGkxOG4odmFsdWU6IFJldXNlQ29udGV4dEkxOG4pIHtcbiAgICB0aGlzLnNydi5pMThuID0gdmFsdWU7XG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tb3V0cHV0LW5hdGl2ZVxuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxSZXVzZUNvbnRleHRDbG9zZUV2ZW50PigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3J2OiBSZXVzZVRhYkNvbnRleHRTZXJ2aWNlKSB7XG4gICAgdGhpcy5zdWIkLmFkZChzcnYuc2hvdy5zdWJzY3JpYmUoY29udGV4dCA9PiB0aGlzLnNydi5vcGVuKGNvbnRleHQpKSk7XG4gICAgdGhpcy5zdWIkLmFkZChzcnYuY2xvc2Uuc3Vic2NyaWJlKHJlcyA9PiB0aGlzLmNoYW5nZS5lbWl0KHJlcykpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3ViJC51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=