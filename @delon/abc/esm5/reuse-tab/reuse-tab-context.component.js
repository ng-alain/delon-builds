/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { Subscription } from 'rxjs';
import { ReuseTabContextService } from './reuse-tab-context.service';
var ReuseTabContextComponent = /** @class */ (function () {
    function ReuseTabContextComponent(srv) {
        var _this = this;
        this.srv = srv;
        this.sub$ = new Subscription();
        this.change = new EventEmitter();
        this.sub$.add(srv.show.subscribe(function (context) { return _this.srv.open(context); }));
        this.sub$.add(srv.close.subscribe(function (res) { return _this.change.emit(res); }));
    }
    Object.defineProperty(ReuseTabContextComponent.prototype, "i18n", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.srv.i18n = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ReuseTabContextComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.sub$.unsubscribe();
    };
    ReuseTabContextComponent.decorators = [
        { type: Component, args: [{
                    selector: 'reuse-tab-context',
                    template: ""
                }] }
    ];
    /** @nocollapse */
    ReuseTabContextComponent.ctorParameters = function () { return [
        { type: ReuseTabContextService }
    ]; };
    ReuseTabContextComponent.propDecorators = {
        i18n: [{ type: Input }],
        change: [{ type: Output }]
    };
    return ReuseTabContextComponent;
}());
export { ReuseTabContextComponent };
if (false) {
    /** @type {?} */
    ReuseTabContextComponent.prototype.sub$;
    /** @type {?} */
    ReuseTabContextComponent.prototype.change;
    /** @type {?} */
    ReuseTabContextComponent.prototype.srv;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLWNvbnRleHQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9yZXVzZS10YWIvIiwic291cmNlcyI6WyJyZXVzZS10YWItY29udGV4dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVwQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUdyRTtJQWNFLGtDQUFvQixHQUEyQjtRQUEvQyxpQkFHQztRQUhtQixRQUFHLEdBQUgsR0FBRyxDQUF3QjtRQVR2QyxTQUFJLEdBQWlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFPN0IsV0FBTSxHQUFHLElBQUksWUFBWSxFQUEwQixDQUFDO1FBR3JFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQXRCLENBQXNCLENBQUMsQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQXJCLENBQXFCLENBQUMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFWRCxzQkFDSSwwQ0FBSTs7Ozs7UUFEUixVQUNTLEtBQXVCO1lBQzlCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUN4QixDQUFDOzs7T0FBQTs7OztJQVNELDhDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7Z0JBckJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixRQUFRLEVBQUUsRUFBRTtpQkFDYjs7OztnQkFOUSxzQkFBc0I7Ozt1QkFVNUIsS0FBSzt5QkFLTCxNQUFNOztJQVVULCtCQUFDO0NBQUEsQUF0QkQsSUFzQkM7U0FsQlksd0JBQXdCOzs7SUFDbkMsd0NBQWdEOztJQU9oRCwwQ0FBdUU7O0lBRTNELHVDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFJldXNlVGFiQ29udGV4dFNlcnZpY2UgfSBmcm9tICcuL3JldXNlLXRhYi1jb250ZXh0LnNlcnZpY2UnO1xuaW1wb3J0IHsgUmV1c2VDb250ZXh0Q2xvc2VFdmVudCwgUmV1c2VDb250ZXh0STE4biB9IGZyb20gJy4vcmV1c2UtdGFiLmludGVyZmFjZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdyZXVzZS10YWItY29udGV4dCcsXG4gIHRlbXBsYXRlOiBgYCxcbn0pXG5leHBvcnQgY2xhc3MgUmV1c2VUYWJDb250ZXh0Q29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBzdWIkOiBTdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgQElucHV0KClcbiAgc2V0IGkxOG4odmFsdWU6IFJldXNlQ29udGV4dEkxOG4pIHtcbiAgICB0aGlzLnNydi5pMThuID0gdmFsdWU7XG4gIH1cblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxSZXVzZUNvbnRleHRDbG9zZUV2ZW50PigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3J2OiBSZXVzZVRhYkNvbnRleHRTZXJ2aWNlKSB7XG4gICAgdGhpcy5zdWIkLmFkZChzcnYuc2hvdy5zdWJzY3JpYmUoY29udGV4dCA9PiB0aGlzLnNydi5vcGVuKGNvbnRleHQpKSk7XG4gICAgdGhpcy5zdWIkLmFkZChzcnYuY2xvc2Uuc3Vic2NyaWJlKHJlcyA9PiB0aGlzLmNoYW5nZS5lbWl0KHJlcykpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3ViJC51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=