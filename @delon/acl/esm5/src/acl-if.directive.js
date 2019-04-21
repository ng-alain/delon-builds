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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNsLWlmLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hY2wvIiwic291cmNlcyI6WyJzcmMvYWNsLWlmLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDO0lBQ29DLDBDQUFZO0lBQzlDLHdCQUNVLGNBQWdDLEVBQ2hDLFdBQW9DLEVBQzVDLEVBQWMsRUFDZCxRQUFtQixFQUNuQixHQUFlO1FBTGpCLFlBT0Usa0JBQU0sRUFBRSxFQUFFLFFBQVEsRUFBRSxHQUFHLENBQUMsU0FDekI7UUFQUyxvQkFBYyxHQUFkLGNBQWMsQ0FBa0I7UUFDaEMsaUJBQVcsR0FBWCxXQUFXLENBQXlCOztJQU05QyxDQUFDO0lBRUQsc0JBQ0ksK0JBQUc7Ozs7O1FBRFAsVUFDUSxLQUFpQjtZQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xCLENBQUM7OztPQUFBOzs7OztJQUVTLG9DQUFXOzs7O0lBQXJCO1FBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM1QixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUM3QixJQUFJLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUMxRDtJQUNILENBQUM7O2dCQXRCRixTQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFOzs7O2dCQUw2QixnQkFBZ0I7Z0JBQTdCLFdBQVc7Z0JBQXpDLFVBQVU7Z0JBQVMsU0FBUztnQkFFdkMsVUFBVTs7O3NCQWVoQixLQUFLLFNBQUMsT0FBTzs7SUFXaEIscUJBQUM7Q0FBQSxBQXZCRCxDQUNvQyxZQUFZLEdBc0IvQztTQXRCWSxjQUFjOzs7Ozs7SUFFdkIsd0NBQXdDOzs7OztJQUN4QyxxQ0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBSZW5kZXJlcjIsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBQ0xEaXJlY3RpdmUgfSBmcm9tICcuL2FjbC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQUNMU2VydmljZSB9IGZyb20gJy4vYWNsLnNlcnZpY2UnO1xuaW1wb3J0IHsgQUNMQ2FuVHlwZSB9IGZyb20gJy4vYWNsLnR5cGUnO1xuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbYWNsSWZdJyB9KVxuZXhwb3J0IGNsYXNzIEFDTElmRGlyZWN0aXZlIGV4dGVuZHMgQUNMRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxBQ0xDYW5UeXBlPixcbiAgICBlbDogRWxlbWVudFJlZixcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHNydjogQUNMU2VydmljZSxcbiAgKSB7XG4gICAgc3VwZXIoZWwsIHJlbmRlcmVyLCBzcnYpO1xuICB9XG5cbiAgQElucHV0KCdhY2xJZicpXG4gIHNldCBhY2wodmFsdWU6IEFDTENhblR5cGUpIHtcbiAgICB0aGlzLnNldCh2YWx1ZSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX3VwZGF0ZVZpZXcoKTogdm9pZCB7XG4gICAgdGhpcy5fdmlld0NvbnRhaW5lci5jbGVhcigpO1xuICAgIGlmICh0aGlzLnNydi5jYW4odGhpcy5fdmFsdWUpKSB7XG4gICAgICB0aGlzLl92aWV3Q29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLnRlbXBsYXRlUmVmKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==