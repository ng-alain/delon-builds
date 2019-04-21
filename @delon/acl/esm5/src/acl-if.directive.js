/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, Input, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNsLWlmLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hY2wvIiwic291cmNlcyI6WyJzcmMvYWNsLWlmLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDO0lBSW9DLDBDQUFZO0lBQzlDLHdCQUNVLGNBQWdDLEVBQ2hDLFdBQW9DLEVBQzVDLEVBQWMsRUFDZCxRQUFtQixFQUNuQixHQUFlO1FBTGpCLFlBT0Usa0JBQU0sRUFBRSxFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUMsU0FDekI7UUFQUyxvQkFBYyxHQUFkLGNBQWMsQ0FBa0I7UUFDaEMsaUJBQVcsR0FBWCxXQUFXLENBQXlCOztJQU05QyxDQUFDO0lBRUQsc0JBQ0ksK0JBQUc7Ozs7O1FBRFAsVUFDUSxLQUFpQjtZQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xCLENBQUM7OztPQUFBOzs7OztJQUVTLG9DQUFXOzs7O0lBQXJCO1FBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM1QixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUM3QixJQUFJLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUMxRDtJQUNILENBQUM7O2dCQXpCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLFFBQVEsRUFBRSxPQUFPO2lCQUNsQjs7OztnQkFSOEQsZ0JBQWdCO2dCQUE3QixXQUFXO2dCQUF6QyxVQUFVO2dCQUFTLFNBQVM7Z0JBRXZDLFVBQVU7OztzQkFrQmhCLEtBQUssU0FBQyxPQUFPOztJQVdoQixxQkFBQztDQUFBLEFBMUJELENBSW9DLFlBQVksR0FzQi9DO1NBdEJZLGNBQWM7Ozs7OztJQUV2Qix3Q0FBd0M7Ozs7O0lBQ3hDLHFDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIFJlbmRlcmVyMiwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFDTERpcmVjdGl2ZSB9IGZyb20gJy4vYWNsLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBBQ0xTZXJ2aWNlIH0gZnJvbSAnLi9hY2wuc2VydmljZSc7XG5pbXBvcnQgeyBBQ0xDYW5UeXBlIH0gZnJvbSAnLi9hY2wudHlwZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thY2xJZl0nLFxuICBleHBvcnRBczogJ2FjbElmJyxcbn0pXG5leHBvcnQgY2xhc3MgQUNMSWZEaXJlY3RpdmUgZXh0ZW5kcyBBQ0xEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF92aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPEFDTENhblR5cGU+LFxuICAgIGVsOiBFbGVtZW50UmVmLFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgc3J2OiBBQ0xTZXJ2aWNlLFxuICApIHtcbiAgICBzdXBlcihlbCwgcmVuZGVyZXIsIHNydik7XG4gIH1cblxuICBASW5wdXQoJ2FjbElmJylcbiAgc2V0IGFjbCh2YWx1ZTogQUNMQ2FuVHlwZSkge1xuICAgIHRoaXMuc2V0KHZhbHVlKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfdXBkYXRlVmlldygpOiB2b2lkIHtcbiAgICB0aGlzLl92aWV3Q29udGFpbmVyLmNsZWFyKCk7XG4gICAgaWYgKHRoaXMuc3J2LmNhbih0aGlzLl92YWx1ZSkpIHtcbiAgICAgIHRoaXMuX3ZpZXdDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMudGVtcGxhdGVSZWYpO1xuICAgIH1cbiAgfVxufVxuIl19