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
        { type: Directive, args: [{ selector: '[acl]' },] }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNsLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hY2wvIiwic291cmNlcyI6WyJzcmMvYWNsLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFhLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUduRixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQztJQThCRSxzQkFBb0IsRUFBYyxFQUFVLFFBQW1CLEVBQVksR0FBZTtRQUExRixpQkFFQztRQUZtQixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFZLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDeEYsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTTs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxJQUFJLElBQUksRUFBVCxDQUFTLEVBQUMsQ0FBQyxDQUFDLFNBQVM7OztRQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsRUFBckIsQ0FBcUIsRUFBQyxDQUFDO0lBQ3JHLENBQUM7SUEzQkQsc0JBQ0ksNkJBQUc7Ozs7O1FBRFAsVUFDUSxLQUFpQjtZQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xCLENBQUM7OztPQUFBO0lBRUQsc0JBQ0ksaUNBQU87Ozs7O1FBRFgsVUFDWSxLQUFpQjtZQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDekMsQ0FBQzs7O09BQUE7Ozs7OztJQUVTLDBCQUFHOzs7OztJQUFiLFVBQWMsS0FBaUI7UUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRVMsa0NBQVc7Ozs7SUFBckI7O1lBQ1EsR0FBRyxHQUFHLFdBQVc7O1lBQ2pCLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWE7UUFDaEMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ3BDO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDakM7SUFDSCxDQUFDOzs7O0lBTUQsa0NBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM3QixDQUFDOztnQkFwQ0YsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRTs7OztnQkFQWixVQUFVO2dCQUFvQixTQUFTO2dCQUlsRCxVQUFVOzs7c0JBUWhCLEtBQUssU0FBQyxLQUFLOzBCQUtYLEtBQUssU0FBQyxhQUFhOztJQTJCdEIsbUJBQUM7Q0FBQSxBQXJDRCxJQXFDQztTQXBDWSxZQUFZOzs7Ozs7SUFDdkIsOEJBQTZCOzs7OztJQUM3QiwrQkFBZ0M7Ozs7O0lBMkJwQiwwQkFBc0I7Ozs7O0lBQUUsZ0NBQTJCOzs7OztJQUFFLDJCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25EZXN0cm95LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBQ0xTZXJ2aWNlIH0gZnJvbSAnLi9hY2wuc2VydmljZSc7XG5pbXBvcnQgeyBBQ0xDYW5UeXBlIH0gZnJvbSAnLi9hY2wudHlwZSc7XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1thY2xdJyB9KVxuZXhwb3J0IGNsYXNzIEFDTERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByb3RlY3RlZCBfdmFsdWU6IEFDTENhblR5cGU7XG4gIHByb3RlY3RlZCBjaGFuZ2UkOiBTdWJzY3JpcHRpb247XG5cbiAgQElucHV0KCdhY2wnKVxuICBzZXQgYWNsKHZhbHVlOiBBQ0xDYW5UeXBlKSB7XG4gICAgdGhpcy5zZXQodmFsdWUpO1xuICB9XG5cbiAgQElucHV0KCdhY2wtYWJpbGl0eScpXG4gIHNldCBhYmlsaXR5KHZhbHVlOiBBQ0xDYW5UeXBlKSB7XG4gICAgdGhpcy5zZXQodGhpcy5zcnYucGFyc2VBYmlsaXR5KHZhbHVlKSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgc2V0KHZhbHVlOiBBQ0xDYW5UeXBlKSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLl91cGRhdGVWaWV3KCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX3VwZGF0ZVZpZXcoKTogdm9pZCB7XG4gICAgY29uc3QgQ0xTID0gJ2FjbF9faGlkZSc7XG4gICAgY29uc3QgZWwgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgaWYgKHRoaXMuc3J2LmNhbih0aGlzLl92YWx1ZSkpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWwsIENMUyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoZWwsIENMUyk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcm90ZWN0ZWQgc3J2OiBBQ0xTZXJ2aWNlKSB7XG4gICAgdGhpcy5jaGFuZ2UkID0gdGhpcy5zcnYuY2hhbmdlLnBpcGUoZmlsdGVyKHIgPT4gciAhPSBudWxsKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMuc2V0KHRoaXMuX3ZhbHVlKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmNoYW5nZSQudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19