/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, Input, Renderer2, TemplateRef, ViewContainerRef, } from '@angular/core';
import { ACLDirective } from './acl.directive';
import { ACLService } from './acl.service';
var ACLIfDirective = /** @class */ (function (_super) {
    tslib_1.__extends(ACLIfDirective, _super);
    function ACLIfDirective(_viewContainer, templateRef, el, renderer, srv) {
        var _this = _super.call(this, el, renderer, srv) || this;
        _this._viewContainer = _viewContainer;
        _this.templateRef = templateRef;
        return _this;
    }
    Object.defineProperty(ACLIfDirective.prototype, "acl", {
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
    /**
     * @protected
     * @return {?}
     */
    ACLIfDirective.prototype._updateView = /**
     * @protected
     * @return {?}
     */
    function () {
        this._viewContainer.clear();
        if (this.srv.can(this._value)) {
            this._viewContainer.createEmbeddedView(this.templateRef);
        }
    };
    ACLIfDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[aclIf]',
                    exportAs: 'aclIf',
                },] }
    ];
    /** @nocollapse */
    ACLIfDirective.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: TemplateRef },
        { type: ElementRef },
        { type: Renderer2 },
        { type: ACLService }
    ]; };
    ACLIfDirective.propDecorators = {
        acl: [{ type: Input, args: ['aclIf',] }]
    };
    return ACLIfDirective;
}(ACLDirective));
export { ACLIfDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ACLIfDirective.prototype._viewContainer;
    /**
     * @type {?}
     * @private
     */
    ACLIfDirective.prototype.templateRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNsLWlmLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hY2wvIiwic291cmNlcyI6WyJzcmMvYWNsLWlmLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxTQUFTLEVBQ1QsV0FBVyxFQUNYLGdCQUFnQixHQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQztJQUlvQywwQ0FBWTtJQUM5Qyx3QkFDVSxjQUFnQyxFQUNoQyxXQUFvQyxFQUM1QyxFQUFjLEVBQ2QsUUFBbUIsRUFDbkIsR0FBZTtRQUxqQixZQU9FLGtCQUFNLEVBQUUsRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDLFNBQ3pCO1FBUFMsb0JBQWMsR0FBZCxjQUFjLENBQWtCO1FBQ2hDLGlCQUFXLEdBQVgsV0FBVyxDQUF5Qjs7SUFNOUMsQ0FBQztJQUVELHNCQUNJLCtCQUFHOzs7OztRQURQLFVBQ1EsS0FBaUI7WUFDdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsQixDQUFDOzs7T0FBQTs7Ozs7SUFFUyxvQ0FBVzs7OztJQUFyQjtRQUNFLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDNUIsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDN0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDMUQ7SUFDSCxDQUFDOztnQkF6QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxTQUFTO29CQUNuQixRQUFRLEVBQUUsT0FBTztpQkFDbEI7Ozs7Z0JBVEMsZ0JBQWdCO2dCQURoQixXQUFXO2dCQUhYLFVBQVU7Z0JBRVYsU0FBUztnQkFLRixVQUFVOzs7c0JBa0JoQixLQUFLLFNBQUMsT0FBTzs7SUFXaEIscUJBQUM7Q0FBQSxBQTFCRCxDQUlvQyxZQUFZLEdBc0IvQztTQXRCWSxjQUFjOzs7Ozs7SUFFdkIsd0NBQXdDOzs7OztJQUN4QyxxQ0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q29udGFpbmVyUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFDTERpcmVjdGl2ZSB9IGZyb20gJy4vYWNsLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBBQ0xTZXJ2aWNlIH0gZnJvbSAnLi9hY2wuc2VydmljZSc7XG5pbXBvcnQgeyBBQ0xDYW5UeXBlIH0gZnJvbSAnLi9hY2wudHlwZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thY2xJZl0nLFxuICBleHBvcnRBczogJ2FjbElmJyxcbn0pXG5leHBvcnQgY2xhc3MgQUNMSWZEaXJlY3RpdmUgZXh0ZW5kcyBBQ0xEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF92aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPEFDTENhblR5cGU+LFxuICAgIGVsOiBFbGVtZW50UmVmLFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgc3J2OiBBQ0xTZXJ2aWNlLFxuICApIHtcbiAgICBzdXBlcihlbCwgcmVuZGVyZXIsIHNydik7XG4gIH1cblxuICBASW5wdXQoJ2FjbElmJylcbiAgc2V0IGFjbCh2YWx1ZTogQUNMQ2FuVHlwZSkge1xuICAgIHRoaXMuc2V0KHZhbHVlKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfdXBkYXRlVmlldygpOiB2b2lkIHtcbiAgICB0aGlzLl92aWV3Q29udGFpbmVyLmNsZWFyKCk7XG4gICAgaWYgKHRoaXMuc3J2LmNhbih0aGlzLl92YWx1ZSkpIHtcbiAgICAgIHRoaXMuX3ZpZXdDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMudGVtcGxhdGVSZWYpO1xuICAgIH1cbiAgfVxufVxuIl19