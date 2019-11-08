/**
 * @fileoverview added by tsickle
 * Generated from: src/acl.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { filter } from 'rxjs/operators';
import { ACLService } from './acl.service';
var ACLDirective = /** @class */ (function () {
    function ACLDirective(el, renderer, srv) {
        var _this = this;
        this.el = el;
        this.renderer = renderer;
        this.srv = srv;
        this.change$ = this.srv.change.pipe(filter((/**
         * @param {?} r
         * @return {?}
         */
        function (r) { return r != null; }))).subscribe((/**
         * @return {?}
         */
        function () { return _this.set(_this._value); }));
    }
    Object.defineProperty(ACLDirective.prototype, "acl", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.set(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ACLDirective.prototype, "ability", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.set(this.srv.parseAbility(value));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    ACLDirective.prototype.set = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._value = value;
        /** @type {?} */
        var CLS = 'acl__hide';
        /** @type {?} */
        var el = this.el.nativeElement;
        if (this.srv.can(this._value)) {
            this.renderer.removeClass(el, CLS);
        }
        else {
            this.renderer.addClass(el, CLS);
        }
    };
    /**
     * @return {?}
     */
    ACLDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.change$.unsubscribe();
    };
    ACLDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[acl]',
                    exportAs: 'acl',
                },] }
    ];
    /** @nocollapse */
    ACLDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: ACLService }
    ]; };
    ACLDirective.propDecorators = {
        acl: [{ type: Input, args: ['acl',] }],
        ability: [{ type: Input, args: ['acl-ability',] }]
    };
    return ACLDirective;
}());
export { ACLDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ACLDirective.prototype._value;
    /**
     * @type {?}
     * @private
     */
    ACLDirective.prototype.change$;
    /**
     * @type {?}
     * @private
     */
    ACLDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    ACLDirective.prototype.renderer;
    /**
     * @type {?}
     * @protected
     */
    ACLDirective.prototype.srv;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNsLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hY2wvIiwic291cmNlcyI6WyJzcmMvYWNsLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBYSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkYsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0M7SUE2QkUsc0JBQW9CLEVBQWMsRUFBVSxRQUFtQixFQUFZLEdBQWU7UUFBMUYsaUJBRUM7UUFGbUIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBWSxRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQ3hGLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU07Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsSUFBSSxJQUFJLEVBQVQsQ0FBUyxFQUFDLENBQUMsQ0FBQyxTQUFTOzs7UUFBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLEVBQXJCLENBQXFCLEVBQUMsQ0FBQztJQUNyRyxDQUFDO0lBdkJELHNCQUNJLDZCQUFHOzs7OztRQURQLFVBQ1EsS0FBaUI7WUFDdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsQixDQUFDOzs7T0FBQTtJQUVELHNCQUNJLGlDQUFPOzs7OztRQURYLFVBQ1ksS0FBaUI7WUFDM0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLENBQUM7OztPQUFBOzs7Ozs7SUFFTywwQkFBRzs7Ozs7SUFBWCxVQUFZLEtBQWlCO1FBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDOztZQUNkLEdBQUcsR0FBRyxXQUFXOztZQUNqQixFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhO1FBQ2hDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNwQzthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQzs7OztJQU1ELGtDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7Z0JBbkNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsT0FBTztvQkFDakIsUUFBUSxFQUFFLEtBQUs7aUJBQ2hCOzs7O2dCQVRtQixVQUFVO2dCQUFvQixTQUFTO2dCQUdsRCxVQUFVOzs7c0JBV2hCLEtBQUssU0FBQyxLQUFLOzBCQUtYLEtBQUssU0FBQyxhQUFhOztJQXVCdEIsbUJBQUM7Q0FBQSxBQXBDRCxJQW9DQztTQWhDWSxZQUFZOzs7Ozs7SUFDdkIsOEJBQTJCOzs7OztJQUMzQiwrQkFBOEI7Ozs7O0lBdUJsQiwwQkFBc0I7Ozs7O0lBQUUsZ0NBQTJCOzs7OztJQUFFLDJCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uRGVzdHJveSwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEFDTFNlcnZpY2UgfSBmcm9tICcuL2FjbC5zZXJ2aWNlJztcbmltcG9ydCB7IEFDTENhblR5cGUgfSBmcm9tICcuL2FjbC50eXBlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2FjbF0nLFxuICBleHBvcnRBczogJ2FjbCcsXG59KVxuZXhwb3J0IGNsYXNzIEFDTERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX3ZhbHVlOiBBQ0xDYW5UeXBlO1xuICBwcml2YXRlIGNoYW5nZSQ6IFN1YnNjcmlwdGlvbjtcblxuICBASW5wdXQoJ2FjbCcpXG4gIHNldCBhY2wodmFsdWU6IEFDTENhblR5cGUpIHtcbiAgICB0aGlzLnNldCh2YWx1ZSk7XG4gIH1cblxuICBASW5wdXQoJ2FjbC1hYmlsaXR5JylcbiAgc2V0IGFiaWxpdHkodmFsdWU6IEFDTENhblR5cGUpIHtcbiAgICB0aGlzLnNldCh0aGlzLnNydi5wYXJzZUFiaWxpdHkodmFsdWUpKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0KHZhbHVlOiBBQ0xDYW5UeXBlKSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICBjb25zdCBDTFMgPSAnYWNsX19oaWRlJztcbiAgICBjb25zdCBlbCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgICBpZiAodGhpcy5zcnYuY2FuKHRoaXMuX3ZhbHVlKSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhlbCwgQ0xTKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhlbCwgQ0xTKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByb3RlY3RlZCBzcnY6IEFDTFNlcnZpY2UpIHtcbiAgICB0aGlzLmNoYW5nZSQgPSB0aGlzLnNydi5jaGFuZ2UucGlwZShmaWx0ZXIociA9PiByICE9IG51bGwpKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5zZXQodGhpcy5fdmFsdWUpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuY2hhbmdlJC51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=