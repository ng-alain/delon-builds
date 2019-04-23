/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { ACLService } from './acl.service';
import { filter } from 'rxjs/operators';
var ACLIfDirective = /** @class */ (function () {
    function ACLIfDirective(templateRef, srv, _viewContainer) {
        var _this = this;
        this.srv = srv;
        this._viewContainer = _viewContainer;
        this._thenTemplateRef = null;
        this._elseTemplateRef = null;
        this._thenViewRef = null;
        this._elseViewRef = null;
        this._change$ = this.srv.change.pipe(filter((/**
         * @param {?} r
         * @return {?}
         */
        function (r) { return r != null; }))).subscribe((/**
         * @return {?}
         */
        function () { return _this._updateView(); }));
        this._thenTemplateRef = templateRef;
    }
    Object.defineProperty(ACLIfDirective.prototype, "aclIf", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._value = value;
            this._updateView();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ACLIfDirective.prototype, "aclIfThen", {
        set: /**
         * @param {?} templateRef
         * @return {?}
         */
        function (templateRef) {
            this._thenTemplateRef = templateRef;
            this._thenViewRef = null;
            this._updateView();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ACLIfDirective.prototype, "aclIfElse", {
        set: /**
         * @param {?} templateRef
         * @return {?}
         */
        function (templateRef) {
            this._elseTemplateRef = templateRef;
            this._elseViewRef = null;
            this._updateView();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @protected
     * @return {?}
     */
    ACLIfDirective.prototype._updateView = /**
     * @protected
     * @return {?}
     */
    function () {
        if (this.srv.can(this._value)) {
            if (!this._thenViewRef) {
                this._viewContainer.clear();
                this._elseViewRef = null;
                if (this._thenTemplateRef) {
                    this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef);
                }
            }
        }
        else {
            if (!this._elseViewRef) {
                this._viewContainer.clear();
                this._thenViewRef = null;
                if (this._elseTemplateRef) {
                    this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef);
                }
            }
        }
    };
    /**
     * @return {?}
     */
    ACLIfDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._change$.unsubscribe();
    };
    ACLIfDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[aclIf]',
                    exportAs: 'aclIf',
                },] }
    ];
    /** @nocollapse */
    ACLIfDirective.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: ACLService },
        { type: ViewContainerRef }
    ]; };
    ACLIfDirective.propDecorators = {
        aclIf: [{ type: Input }],
        aclIfThen: [{ type: Input }],
        aclIfElse: [{ type: Input }]
    };
    return ACLIfDirective;
}());
export { ACLIfDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ACLIfDirective.prototype._value;
    /**
     * @type {?}
     * @private
     */
    ACLIfDirective.prototype._change$;
    /**
     * @type {?}
     * @private
     */
    ACLIfDirective.prototype._thenTemplateRef;
    /**
     * @type {?}
     * @private
     */
    ACLIfDirective.prototype._elseTemplateRef;
    /**
     * @type {?}
     * @private
     */
    ACLIfDirective.prototype._thenViewRef;
    /**
     * @type {?}
     * @private
     */
    ACLIfDirective.prototype._elseViewRef;
    /**
     * @type {?}
     * @private
     */
    ACLIfDirective.prototype.srv;
    /**
     * @type {?}
     * @private
     */
    ACLIfDirective.prototype._viewContainer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNsLWlmLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hY2wvIiwic291cmNlcyI6WyJzcmMvYWNsLWlmLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUE4QixNQUFNLGVBQWUsQ0FBQztBQUM1RyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUd4QztJQVlFLHdCQUFZLFdBQThCLEVBQVUsR0FBZSxFQUFVLGNBQWdDO1FBQTdHLGlCQUdDO1FBSG1ELFFBQUcsR0FBSCxHQUFHLENBQVk7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBa0I7UUFMckcscUJBQWdCLEdBQTZCLElBQUksQ0FBQztRQUNsRCxxQkFBZ0IsR0FBNkIsSUFBSSxDQUFDO1FBQ2xELGlCQUFZLEdBQWlDLElBQUksQ0FBQztRQUNsRCxpQkFBWSxHQUFpQyxJQUFJLENBQUM7UUFHeEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTTs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxJQUFJLElBQUksRUFBVCxDQUFTLEVBQUMsQ0FBQyxDQUFDLFNBQVM7OztRQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsV0FBVyxFQUFFLEVBQWxCLENBQWtCLEVBQUMsQ0FBQztRQUNqRyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsV0FBVyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxzQkFDSSxpQ0FBSzs7Ozs7UUFEVCxVQUNVLEtBQWlCO1lBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyQixDQUFDOzs7T0FBQTtJQUVELHNCQUNJLHFDQUFTOzs7OztRQURiLFVBQ2MsV0FBcUM7WUFDakQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFdBQVcsQ0FBQztZQUNwQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUN6QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDckIsQ0FBQzs7O09BQUE7SUFFRCxzQkFDSSxxQ0FBUzs7Ozs7UUFEYixVQUNjLFdBQXFDO1lBQ2pELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxXQUFXLENBQUM7WUFDcEMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDekIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3JCLENBQUM7OztPQUFBOzs7OztJQUVTLG9DQUFXOzs7O0lBQXJCO1FBQ0UsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2dCQUN6QixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtvQkFDekIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2lCQUNuRjthQUNGO1NBQ0Y7YUFBTTtZQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUN0QixJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUM1QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztnQkFDekIsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7b0JBQ3pCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztpQkFDbkY7YUFDRjtTQUNGO0lBQ0gsQ0FBQzs7OztJQUVELG9DQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDOUIsQ0FBQzs7Z0JBM0RGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsU0FBUztvQkFDbkIsUUFBUSxFQUFFLE9BQU87aUJBQ2xCOzs7O2dCQVQwQixXQUFXO2dCQUM3QixVQUFVO2dCQURxQixnQkFBZ0I7Ozt3QkF1QnJELEtBQUs7NEJBTUwsS0FBSzs0QkFPTCxLQUFLOztJQThCUixxQkFBQztDQUFBLEFBNURELElBNERDO1NBeERZLGNBQWM7Ozs7OztJQUN6QixnQ0FBMkI7Ozs7O0lBQzNCLGtDQUErQjs7Ozs7SUFDL0IsMENBQTBEOzs7OztJQUMxRCwwQ0FBMEQ7Ozs7O0lBQzFELHNDQUEwRDs7Ozs7SUFDMUQsc0NBQTBEOzs7OztJQUVkLDZCQUF1Qjs7Ozs7SUFBRSx3Q0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiwgRW1iZWRkZWRWaWV3UmVmLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFDTFNlcnZpY2UgfSBmcm9tICcuL2FjbC5zZXJ2aWNlJztcbmltcG9ydCB7IEFDTENhblR5cGUgfSBmcm9tICcuL2FjbC50eXBlJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYWNsSWZdJyxcbiAgZXhwb3J0QXM6ICdhY2xJZicsXG59KVxuZXhwb3J0IGNsYXNzIEFDTElmRGlyZWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfdmFsdWU6IEFDTENhblR5cGU7XG4gIHByaXZhdGUgX2NoYW5nZSQ6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBfdGhlblRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIF9lbHNlVGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgX3RoZW5WaWV3UmVmOiBFbWJlZGRlZFZpZXdSZWY8dm9pZD4gfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBfZWxzZVZpZXdSZWY6IEVtYmVkZGVkVmlld1JlZjx2b2lkPiB8IG51bGwgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjx2b2lkPiwgcHJpdmF0ZSBzcnY6IEFDTFNlcnZpY2UsIHByaXZhdGUgX3ZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYpIHtcbiAgICB0aGlzLl9jaGFuZ2UkID0gdGhpcy5zcnYuY2hhbmdlLnBpcGUoZmlsdGVyKHIgPT4gciAhPSBudWxsKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMuX3VwZGF0ZVZpZXcoKSk7XG4gICAgdGhpcy5fdGhlblRlbXBsYXRlUmVmID0gdGVtcGxhdGVSZWY7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgYWNsSWYodmFsdWU6IEFDTENhblR5cGUpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuX3VwZGF0ZVZpZXcoKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBhY2xJZlRoZW4odGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbCkge1xuICAgIHRoaXMuX3RoZW5UZW1wbGF0ZVJlZiA9IHRlbXBsYXRlUmVmO1xuICAgIHRoaXMuX3RoZW5WaWV3UmVmID0gbnVsbDtcbiAgICB0aGlzLl91cGRhdGVWaWV3KCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgYWNsSWZFbHNlKHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGwpIHtcbiAgICB0aGlzLl9lbHNlVGVtcGxhdGVSZWYgPSB0ZW1wbGF0ZVJlZjtcbiAgICB0aGlzLl9lbHNlVmlld1JlZiA9IG51bGw7XG4gICAgdGhpcy5fdXBkYXRlVmlldygpO1xuICB9XG5cbiAgcHJvdGVjdGVkIF91cGRhdGVWaWV3KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNydi5jYW4odGhpcy5fdmFsdWUpKSB7XG4gICAgICBpZiAoIXRoaXMuX3RoZW5WaWV3UmVmKSB7XG4gICAgICAgIHRoaXMuX3ZpZXdDb250YWluZXIuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5fZWxzZVZpZXdSZWYgPSBudWxsO1xuICAgICAgICBpZiAodGhpcy5fdGhlblRlbXBsYXRlUmVmKSB7XG4gICAgICAgICAgdGhpcy5fdGhlblZpZXdSZWYgPSB0aGlzLl92aWV3Q29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLl90aGVuVGVtcGxhdGVSZWYpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghdGhpcy5fZWxzZVZpZXdSZWYpIHtcbiAgICAgICAgdGhpcy5fdmlld0NvbnRhaW5lci5jbGVhcigpO1xuICAgICAgICB0aGlzLl90aGVuVmlld1JlZiA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLl9lbHNlVGVtcGxhdGVSZWYpIHtcbiAgICAgICAgICB0aGlzLl9lbHNlVmlld1JlZiA9IHRoaXMuX3ZpZXdDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMuX2Vsc2VUZW1wbGF0ZVJlZik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9jaGFuZ2UkLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==