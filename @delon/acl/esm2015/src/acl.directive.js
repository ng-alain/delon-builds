/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { filter } from 'rxjs/operators';
import { ACLService } from './acl.service';
export class ACLDirective {
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} srv
     */
    constructor(el, renderer, srv) {
        this.el = el;
        this.renderer = renderer;
        this.srv = srv;
        this.change$ = this.srv.change.pipe(filter((/**
         * @param {?} r
         * @return {?}
         */
        r => r != null))).subscribe((/**
         * @return {?}
         */
        () => this.set(this._value)));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set acl(value) {
        this.set(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set ability(value) {
        this.set(this.srv.parseAbility(value));
    }
    /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    set(value) {
        this._value = value;
        this._updateView();
    }
    /**
     * @protected
     * @return {?}
     */
    _updateView() {
        /** @type {?} */
        const CLS = 'acl__hide';
        /** @type {?} */
        const el = this.el.nativeElement;
        if (this.srv.can(this._value)) {
            this.renderer.removeClass(el, CLS);
        }
        else {
            this.renderer.addClass(el, CLS);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.change$.unsubscribe();
    }
}
ACLDirective.decorators = [
    { type: Directive, args: [{
                selector: '[acl]',
                exportAs: 'acl',
            },] }
];
/** @nocollapse */
ACLDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ACLService }
];
ACLDirective.propDecorators = {
    acl: [{ type: Input, args: ['acl',] }],
    ability: [{ type: Input, args: ['acl-ability',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNsLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hY2wvIiwic291cmNlcyI6WyJzcmMvYWNsLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFhLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUduRixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8zQyxNQUFNLE9BQU8sWUFBWTs7Ozs7O0lBNkJ2QixZQUFvQixFQUFjLEVBQVUsUUFBbUIsRUFBWSxHQUFlO1FBQXRFLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVksUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUN4RixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFDLENBQUMsQ0FBQyxTQUFTOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBQyxDQUFDO0lBQ3JHLENBQUM7Ozs7O0lBM0JELElBQ0ksR0FBRyxDQUFDLEtBQWlCO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEIsQ0FBQzs7Ozs7SUFFRCxJQUNJLE9BQU8sQ0FBQyxLQUFpQjtRQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDekMsQ0FBQzs7Ozs7O0lBRVMsR0FBRyxDQUFDLEtBQWlCO1FBQzdCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7OztJQUVTLFdBQVc7O2NBQ2IsR0FBRyxHQUFHLFdBQVc7O2NBQ2pCLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWE7UUFDaEMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ3BDO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDakM7SUFDSCxDQUFDOzs7O0lBTUQsV0FBVztRQUNULElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7O1lBdkNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsT0FBTztnQkFDakIsUUFBUSxFQUFFLEtBQUs7YUFDaEI7Ozs7WUFWbUIsVUFBVTtZQUFvQixTQUFTO1lBSWxELFVBQVU7OztrQkFXaEIsS0FBSyxTQUFDLEtBQUs7c0JBS1gsS0FBSyxTQUFDLGFBQWE7Ozs7Ozs7SUFScEIsOEJBQTZCOzs7OztJQUM3QiwrQkFBZ0M7Ozs7O0lBMkJwQiwwQkFBc0I7Ozs7O0lBQUUsZ0NBQTJCOzs7OztJQUFFLDJCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25EZXN0cm95LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBQ0xTZXJ2aWNlIH0gZnJvbSAnLi9hY2wuc2VydmljZSc7XG5pbXBvcnQgeyBBQ0xDYW5UeXBlIH0gZnJvbSAnLi9hY2wudHlwZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thY2xdJyxcbiAgZXhwb3J0QXM6ICdhY2wnLFxufSlcbmV4cG9ydCBjbGFzcyBBQ0xEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcm90ZWN0ZWQgX3ZhbHVlOiBBQ0xDYW5UeXBlO1xuICBwcm90ZWN0ZWQgY2hhbmdlJDogU3Vic2NyaXB0aW9uO1xuXG4gIEBJbnB1dCgnYWNsJylcbiAgc2V0IGFjbCh2YWx1ZTogQUNMQ2FuVHlwZSkge1xuICAgIHRoaXMuc2V0KHZhbHVlKTtcbiAgfVxuXG4gIEBJbnB1dCgnYWNsLWFiaWxpdHknKVxuICBzZXQgYWJpbGl0eSh2YWx1ZTogQUNMQ2FuVHlwZSkge1xuICAgIHRoaXMuc2V0KHRoaXMuc3J2LnBhcnNlQWJpbGl0eSh2YWx1ZSkpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHNldCh2YWx1ZTogQUNMQ2FuVHlwZSkge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5fdXBkYXRlVmlldygpO1xuICB9XG5cbiAgcHJvdGVjdGVkIF91cGRhdGVWaWV3KCk6IHZvaWQge1xuICAgIGNvbnN0IENMUyA9ICdhY2xfX2hpZGUnO1xuICAgIGNvbnN0IGVsID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuICAgIGlmICh0aGlzLnNydi5jYW4odGhpcy5fdmFsdWUpKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKGVsLCBDTFMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGVsLCBDTFMpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJvdGVjdGVkIHNydjogQUNMU2VydmljZSkge1xuICAgIHRoaXMuY2hhbmdlJCA9IHRoaXMuc3J2LmNoYW5nZS5waXBlKGZpbHRlcihyID0+IHIgIT0gbnVsbCkpLnN1YnNjcmliZSgoKSA9PiB0aGlzLnNldCh0aGlzLl92YWx1ZSkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5jaGFuZ2UkLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==