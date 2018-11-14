/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Directive, Input, ElementRef, Renderer2, } from '@angular/core';
import { ACLService } from './acl.service';
var ACLDirective = /** @class */ (function () {
    function ACLDirective(el, renderer, srv) {
        var _this = this;
        this.el = el;
        this.renderer = renderer;
        this.srv = srv;
        this.change$ = (/** @type {?} */ (this.srv.change.subscribe(function () { return _this.set(_this._value); })));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNsLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hY2wvIiwic291cmNlcyI6WyJzcmMvYWNsLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsVUFBVSxFQUNWLFNBQVMsR0FFVixNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDO0lBNEJFLHNCQUNVLEVBQWMsRUFDZCxRQUFtQixFQUNuQixHQUFlO1FBSHpCLGlCQU1DO1FBTFMsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUV2QixJQUFJLENBQUMsT0FBTyxHQUFHLG1CQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLEVBQXJCLENBQXFCLENBQUMsRUFBQSxDQUFDO0lBQzdFLENBQUM7SUEzQkQsc0JBQ0ksNkJBQUc7Ozs7O1FBRFAsVUFDUSxLQUFpQjtZQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xCLENBQUM7OztPQUFBO0lBRUQsc0JBQ0ksaUNBQU87Ozs7O1FBRFgsVUFDWSxLQUFpQjtZQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDekMsQ0FBQzs7O09BQUE7Ozs7O0lBRU8sMEJBQUc7Ozs7SUFBWCxVQUFZLEtBQWlCOztZQUNyQixHQUFHLEdBQUcsV0FBVzs7WUFDakIsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYTtRQUNoQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNwQzthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ2pDO1FBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQzs7OztJQVVELGtDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7Z0JBdENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsT0FBTztpQkFDbEI7Ozs7Z0JBWEMsVUFBVTtnQkFDVixTQUFTO2dCQUtGLFVBQVU7OztzQkFVaEIsS0FBSyxTQUFDLEtBQUs7MEJBS1gsS0FBSyxTQUFDLGFBQWE7O0lBMkJ0QixtQkFBQztDQUFBLEFBdkNELElBdUNDO1NBcENZLFlBQVk7OztJQUN2Qiw4QkFBb0I7O0lBQ3BCLCtCQUE4Qjs7SUF3QjVCLDBCQUFzQjs7SUFDdEIsZ0NBQTJCOztJQUMzQiwyQkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBFbGVtZW50UmVmLFxuICBSZW5kZXJlcjIsXG4gIE9uRGVzdHJveSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQUNMU2VydmljZSB9IGZyb20gJy4vYWNsLnNlcnZpY2UnO1xuaW1wb3J0IHsgQUNMQ2FuVHlwZSB9IGZyb20gJy4vYWNsLnR5cGUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYWNsXScsXG59KVxuZXhwb3J0IGNsYXNzIEFDTERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX3ZhbHVlOiBhbnk7XG4gIHByaXZhdGUgY2hhbmdlJDogU3Vic2NyaXB0aW9uO1xuXG4gIEBJbnB1dCgnYWNsJylcbiAgc2V0IGFjbCh2YWx1ZTogQUNMQ2FuVHlwZSkge1xuICAgIHRoaXMuc2V0KHZhbHVlKTtcbiAgfVxuXG4gIEBJbnB1dCgnYWNsLWFiaWxpdHknKVxuICBzZXQgYWJpbGl0eSh2YWx1ZTogQUNMQ2FuVHlwZSkge1xuICAgIHRoaXMuc2V0KHRoaXMuc3J2LnBhcnNlQWJpbGl0eSh2YWx1ZSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXQodmFsdWU6IEFDTENhblR5cGUpIHtcbiAgICBjb25zdCBDTFMgPSAnYWNsX19oaWRlJztcbiAgICBjb25zdCBlbCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgICBpZiAodGhpcy5zcnYuY2FuKHZhbHVlKSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhlbCwgQ0xTKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhlbCwgQ0xTKTtcbiAgICB9XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgc3J2OiBBQ0xTZXJ2aWNlLFxuICApIHtcbiAgICB0aGlzLmNoYW5nZSQgPSA8YW55PnRoaXMuc3J2LmNoYW5nZS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5zZXQodGhpcy5fdmFsdWUpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuY2hhbmdlJC51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=