/**
 * @fileoverview added by tsickle
 * Generated from: reuse-tab-context.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { ReuseTabContextService } from './reuse-tab-context.service';
var ReuseTabContextComponent = /** @class */ (function () {
    function ReuseTabContextComponent(srv) {
        var _this = this;
        this.srv = srv;
        this.sub$ = new Subscription();
        this.change = new EventEmitter();
        this.sub$.add(srv.show.subscribe((/**
         * @param {?} context
         * @return {?}
         */
        function (context) { return _this.srv.open(context); })));
        this.sub$.add(srv.close.subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return _this.change.emit(res); })));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV1c2UtdGFiLWNvbnRleHQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9yZXVzZS10YWIvIiwic291cmNlcyI6WyJyZXVzZS10YWItY29udGV4dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWEsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFcEMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFHckU7SUFjRSxrQ0FBb0IsR0FBMkI7UUFBL0MsaUJBR0M7UUFIbUIsUUFBRyxHQUFILEdBQUcsQ0FBd0I7UUFUdkMsU0FBSSxHQUFpQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBTzdCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBMEIsQ0FBQztRQUdyRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUF0QixDQUFzQixFQUFDLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFyQixDQUFxQixFQUFDLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBVkQsc0JBQ0ksMENBQUk7Ozs7O1FBRFIsVUFDUyxLQUF1QjtZQUM5QixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7Ozs7SUFTRCw4Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzFCLENBQUM7O2dCQXJCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsUUFBUSxFQUFFLEVBQUU7aUJBQ2I7Ozs7Z0JBTlEsc0JBQXNCOzs7dUJBVTVCLEtBQUs7eUJBS0wsTUFBTTs7SUFVVCwrQkFBQztDQUFBLEFBdEJELElBc0JDO1NBbEJZLHdCQUF3Qjs7Ozs7O0lBQ25DLHdDQUFnRDs7SUFPaEQsMENBQXVFOzs7OztJQUUzRCx1Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uRGVzdHJveSwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgUmV1c2VUYWJDb250ZXh0U2VydmljZSB9IGZyb20gJy4vcmV1c2UtdGFiLWNvbnRleHQuc2VydmljZSc7XG5pbXBvcnQgeyBSZXVzZUNvbnRleHRDbG9zZUV2ZW50LCBSZXVzZUNvbnRleHRJMThuIH0gZnJvbSAnLi9yZXVzZS10YWIuaW50ZXJmYWNlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3JldXNlLXRhYi1jb250ZXh0JyxcbiAgdGVtcGxhdGU6IGBgLFxufSlcbmV4cG9ydCBjbGFzcyBSZXVzZVRhYkNvbnRleHRDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIHN1YiQ6IFN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICBASW5wdXQoKVxuICBzZXQgaTE4bih2YWx1ZTogUmV1c2VDb250ZXh0STE4bikge1xuICAgIHRoaXMuc3J2LmkxOG4gPSB2YWx1ZTtcbiAgfVxuXG4gIEBPdXRwdXQoKSByZWFkb25seSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFJldXNlQ29udGV4dENsb3NlRXZlbnQ+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzcnY6IFJldXNlVGFiQ29udGV4dFNlcnZpY2UpIHtcbiAgICB0aGlzLnN1YiQuYWRkKHNydi5zaG93LnN1YnNjcmliZShjb250ZXh0ID0+IHRoaXMuc3J2Lm9wZW4oY29udGV4dCkpKTtcbiAgICB0aGlzLnN1YiQuYWRkKHNydi5jbG9zZS5zdWJzY3JpYmUocmVzID0+IHRoaXMuY2hhbmdlLmVtaXQocmVzKSkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zdWIkLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==