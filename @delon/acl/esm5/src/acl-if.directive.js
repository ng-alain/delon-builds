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
        { type: Directive, args: [{ selector: '[aclIf]' },] }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNsLWlmLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hY2wvIiwic291cmNlcyI6WyJzcmMvYWNsLWlmLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxTQUFTLEVBQ1QsV0FBVyxFQUNYLGdCQUFnQixHQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQztJQUNvQywwQ0FBWTtJQUM5Qyx3QkFDVSxjQUFnQyxFQUNoQyxXQUFvQyxFQUM1QyxFQUFjLEVBQ2QsUUFBbUIsRUFDbkIsR0FBZTtRQUxqQixZQU9FLGtCQUFNLEVBQUUsRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDLFNBQ3pCO1FBUFMsb0JBQWMsR0FBZCxjQUFjLENBQWtCO1FBQ2hDLGlCQUFXLEdBQVgsV0FBVyxDQUF5Qjs7SUFNOUMsQ0FBQztJQUVELHNCQUNJLCtCQUFHOzs7OztRQURQLFVBQ1EsS0FBaUI7WUFDdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsQixDQUFDOzs7T0FBQTs7Ozs7SUFFUyxvQ0FBVzs7OztJQUFyQjtRQUNFLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDNUIsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDN0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDMUQ7SUFDSCxDQUFDOztnQkF0QkYsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRTs7OztnQkFOaEMsZ0JBQWdCO2dCQURoQixXQUFXO2dCQUhYLFVBQVU7Z0JBRVYsU0FBUztnQkFLRixVQUFVOzs7c0JBZWhCLEtBQUssU0FBQyxPQUFPOztJQVdoQixxQkFBQztDQUFBLEFBdkJELENBQ29DLFlBQVksR0FzQi9DO1NBdEJZLGNBQWM7Ozs7OztJQUV2Qix3Q0FBd0M7Ozs7O0lBQ3hDLHFDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDb250YWluZXJSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQUNMRGlyZWN0aXZlIH0gZnJvbSAnLi9hY2wuZGlyZWN0aXZlJztcbmltcG9ydCB7IEFDTFNlcnZpY2UgfSBmcm9tICcuL2FjbC5zZXJ2aWNlJztcbmltcG9ydCB7IEFDTENhblR5cGUgfSBmcm9tICcuL2FjbC50eXBlJztcblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW2FjbElmXScgfSlcbmV4cG9ydCBjbGFzcyBBQ0xJZkRpcmVjdGl2ZSBleHRlbmRzIEFDTERpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3ZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8QUNMQ2FuVHlwZT4sXG4gICAgZWw6IEVsZW1lbnRSZWYsXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBzcnY6IEFDTFNlcnZpY2UsXG4gICkge1xuICAgIHN1cGVyKGVsLCByZW5kZXJlciwgc3J2KTtcbiAgfVxuXG4gIEBJbnB1dCgnYWNsSWYnKVxuICBzZXQgYWNsKHZhbHVlOiBBQ0xDYW5UeXBlKSB7XG4gICAgdGhpcy5zZXQodmFsdWUpO1xuICB9XG5cbiAgcHJvdGVjdGVkIF91cGRhdGVWaWV3KCk6IHZvaWQge1xuICAgIHRoaXMuX3ZpZXdDb250YWluZXIuY2xlYXIoKTtcbiAgICBpZiAodGhpcy5zcnYuY2FuKHRoaXMuX3ZhbHVlKSkge1xuICAgICAgdGhpcy5fdmlld0NvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy50ZW1wbGF0ZVJlZik7XG4gICAgfVxuICB9XG59XG4iXX0=