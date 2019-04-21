/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @protected
     * @param {?} value
     * @return {?}
     */
    ACLDirective.prototype.set = /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._value = value;
        this._updateView();
    };
    /**
     * @protected
     * @return {?}
     */
    ACLDirective.prototype._updateView = /**
     * @protected
     * @return {?}
     */
    function () {
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
     * @protected
     */
    ACLDirective.prototype._value;
    /**
     * @type {?}
     * @protected
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNsLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hY2wvIiwic291cmNlcyI6WyJzcmMvYWNsLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFhLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUduRixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQztJQWlDRSxzQkFBb0IsRUFBYyxFQUFVLFFBQW1CLEVBQVksR0FBZTtRQUExRixpQkFFQztRQUZtQixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFZLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDeEYsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTTs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxJQUFJLElBQUksRUFBVCxDQUFTLEVBQUMsQ0FBQyxDQUFDLFNBQVM7OztRQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsRUFBckIsQ0FBcUIsRUFBQyxDQUFDO0lBQ3JHLENBQUM7SUEzQkQsc0JBQ0ksNkJBQUc7Ozs7O1FBRFAsVUFDUSxLQUFpQjtZQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xCLENBQUM7OztPQUFBO0lBRUQsc0JBQ0ksaUNBQU87Ozs7O1FBRFgsVUFDWSxLQUFpQjtZQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDekMsQ0FBQzs7O09BQUE7Ozs7OztJQUVTLDBCQUFHOzs7OztJQUFiLFVBQWMsS0FBaUI7UUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRVMsa0NBQVc7Ozs7SUFBckI7O1lBQ1EsR0FBRyxHQUFHLFdBQVc7O1lBQ2pCLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWE7UUFDaEMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ3BDO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDakM7SUFDSCxDQUFDOzs7O0lBTUQsa0NBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM3QixDQUFDOztnQkF2Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxPQUFPO29CQUNqQixRQUFRLEVBQUUsS0FBSztpQkFDaEI7Ozs7Z0JBVm1CLFVBQVU7Z0JBQW9CLFNBQVM7Z0JBSWxELFVBQVU7OztzQkFXaEIsS0FBSyxTQUFDLEtBQUs7MEJBS1gsS0FBSyxTQUFDLGFBQWE7O0lBMkJ0QixtQkFBQztDQUFBLEFBeENELElBd0NDO1NBcENZLFlBQVk7Ozs7OztJQUN2Qiw4QkFBNkI7Ozs7O0lBQzdCLCtCQUFnQzs7Ozs7SUEyQnBCLDBCQUFzQjs7Ozs7SUFBRSxnQ0FBMkI7Ozs7O0lBQUUsMkJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25EZXN0cm95LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBQ0xTZXJ2aWNlIH0gZnJvbSAnLi9hY2wuc2VydmljZSc7XG5pbXBvcnQgeyBBQ0xDYW5UeXBlIH0gZnJvbSAnLi9hY2wudHlwZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thY2xdJyxcbiAgZXhwb3J0QXM6ICdhY2wnLFxufSlcbmV4cG9ydCBjbGFzcyBBQ0xEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcm90ZWN0ZWQgX3ZhbHVlOiBBQ0xDYW5UeXBlO1xuICBwcm90ZWN0ZWQgY2hhbmdlJDogU3Vic2NyaXB0aW9uO1xuXG4gIEBJbnB1dCgnYWNsJylcbiAgc2V0IGFjbCh2YWx1ZTogQUNMQ2FuVHlwZSkge1xuICAgIHRoaXMuc2V0KHZhbHVlKTtcbiAgfVxuXG4gIEBJbnB1dCgnYWNsLWFiaWxpdHknKVxuICBzZXQgYWJpbGl0eSh2YWx1ZTogQUNMQ2FuVHlwZSkge1xuICAgIHRoaXMuc2V0KHRoaXMuc3J2LnBhcnNlQWJpbGl0eSh2YWx1ZSkpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNldCh2YWx1ZTogQUNMQ2FuVHlwZSkge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5fdXBkYXRlVmlldygpO1xuICB9XG5cbiAgcHJvdGVjdGVkIF91cGRhdGVWaWV3KCk6IHZvaWQge1xuICAgIGNvbnN0IENMUyA9ICdhY2xfX2hpZGUnO1xuICAgIGNvbnN0IGVsID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuICAgIGlmICh0aGlzLnNydi5jYW4odGhpcy5fdmFsdWUpKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKGVsLCBDTFMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGVsLCBDTFMpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJvdGVjdGVkIHNydjogQUNMU2VydmljZSkge1xuICAgIHRoaXMuY2hhbmdlJCA9IHRoaXMuc3J2LmNoYW5nZS5waXBlKGZpbHRlcihyID0+IHIgIT0gbnVsbCkpLnN1YnNjcmliZSgoKSA9PiB0aGlzLnNldCh0aGlzLl92YWx1ZSkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5jaGFuZ2UkLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==