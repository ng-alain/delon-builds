/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input, Renderer2, } from '@angular/core';
import { ACLService } from './acl.service';
var ACLDirective = /** @class */ (function () {
    function ACLDirective(el, renderer, srv) {
        var _this = this;
        this.el = el;
        this.renderer = renderer;
        this.srv = srv;
        this.change$ = this.srv.change.subscribe(function () { return _this.set(_this._value); });
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
     * @param {?} value
     * @return {?}
     */
    ACLDirective.prototype.set = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var CLS = 'acl__hide';
        /** @type {?} */
        var el = this.el.nativeElement;
        if (this.srv.can(value)) {
            this.renderer.removeClass(el, CLS);
        }
        else {
            this.renderer.addClass(el, CLS);
        }
        this._value = value;
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
    /** @type {?} */
    ACLDirective.prototype._value;
    /** @type {?} */
    ACLDirective.prototype.change$;
    /** @type {?} */
    ACLDirective.prototype.el;
    /** @type {?} */
    ACLDirective.prototype.renderer;
    /** @type {?} */
    ACLDirective.prototype.srv;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNsLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hY2wvIiwic291cmNlcyI6WyJzcmMvYWNsLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUVMLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDO0lBNEJFLHNCQUNVLEVBQWMsRUFDZCxRQUFtQixFQUNuQixHQUFlO1FBSHpCLGlCQU1DO1FBTFMsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUV2QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLEVBQXJCLENBQXFCLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBM0JELHNCQUNJLDZCQUFHOzs7OztRQURQLFVBQ1EsS0FBaUI7WUFDdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsQixDQUFDOzs7T0FBQTtJQUVELHNCQUNJLGlDQUFPOzs7OztRQURYLFVBQ1ksS0FBaUI7WUFDM0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLENBQUM7OztPQUFBOzs7OztJQUVPLDBCQUFHOzs7O0lBQVgsVUFBWSxLQUFpQjs7WUFDckIsR0FBRyxHQUFHLFdBQVc7O1lBQ2pCLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWE7UUFDaEMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDcEM7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNqQztRQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFVRCxrQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzdCLENBQUM7O2dCQXRDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLE9BQU87aUJBQ2xCOzs7O2dCQVpDLFVBQVU7Z0JBR1YsU0FBUztnQkFJRixVQUFVOzs7c0JBVWhCLEtBQUssU0FBQyxLQUFLOzBCQUtYLEtBQUssU0FBQyxhQUFhOztJQTJCdEIsbUJBQUM7Q0FBQSxBQXZDRCxJQXVDQztTQXBDWSxZQUFZOzs7SUFDdkIsOEJBQTJCOztJQUMzQiwrQkFBOEI7O0lBd0I1QiwwQkFBc0I7O0lBQ3RCLGdDQUEyQjs7SUFDM0IsMkJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBSZW5kZXJlcjIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEFDTFNlcnZpY2UgfSBmcm9tICcuL2FjbC5zZXJ2aWNlJztcbmltcG9ydCB7IEFDTENhblR5cGUgfSBmcm9tICcuL2FjbC50eXBlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2FjbF0nLFxufSlcbmV4cG9ydCBjbGFzcyBBQ0xEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF92YWx1ZTogQUNMQ2FuVHlwZTtcbiAgcHJpdmF0ZSBjaGFuZ2UkOiBTdWJzY3JpcHRpb247XG5cbiAgQElucHV0KCdhY2wnKVxuICBzZXQgYWNsKHZhbHVlOiBBQ0xDYW5UeXBlKSB7XG4gICAgdGhpcy5zZXQodmFsdWUpO1xuICB9XG5cbiAgQElucHV0KCdhY2wtYWJpbGl0eScpXG4gIHNldCBhYmlsaXR5KHZhbHVlOiBBQ0xDYW5UeXBlKSB7XG4gICAgdGhpcy5zZXQodGhpcy5zcnYucGFyc2VBYmlsaXR5KHZhbHVlKSk7XG4gIH1cblxuICBwcml2YXRlIHNldCh2YWx1ZTogQUNMQ2FuVHlwZSkge1xuICAgIGNvbnN0IENMUyA9ICdhY2xfX2hpZGUnO1xuICAgIGNvbnN0IGVsID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuICAgIGlmICh0aGlzLnNydi5jYW4odmFsdWUpKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKGVsLCBDTFMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGVsLCBDTFMpO1xuICAgIH1cbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBzcnY6IEFDTFNlcnZpY2UsXG4gICkge1xuICAgIHRoaXMuY2hhbmdlJCA9IHRoaXMuc3J2LmNoYW5nZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5zZXQodGhpcy5fdmFsdWUpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuY2hhbmdlJC51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=