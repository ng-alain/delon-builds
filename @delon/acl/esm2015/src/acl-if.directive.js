/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import { ACLDirective } from './acl.directive';
import { ACLService } from './acl.service';
export class ACLIfDirective extends ACLDirective {
    /**
     * @param {?} _viewContainer
     * @param {?} templateRef
     * @param {?} el
     * @param {?} renderer
     * @param {?} srv
     */
    constructor(_viewContainer, templateRef, el, renderer, srv) {
        super(el, renderer, srv);
        this._viewContainer = _viewContainer;
        this.templateRef = templateRef;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set acl(value) {
        this.set(value);
    }
    /**
     * @protected
     * @return {?}
     */
    _updateView() {
        this._viewContainer.clear();
        if (this.srv.can(this._value)) {
            this._viewContainer.createEmbeddedView(this.templateRef);
        }
    }
}
ACLIfDirective.decorators = [
    { type: Directive, args: [{ selector: '[aclIf]' },] }
];
/** @nocollapse */
ACLIfDirective.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: TemplateRef },
    { type: ElementRef },
    { type: Renderer2 },
    { type: ACLService }
];
ACLIfDirective.propDecorators = {
    acl: [{ type: Input, args: ['aclIf',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNsLWlmLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hY2wvIiwic291cmNlcyI6WyJzcmMvYWNsLWlmLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsTUFBTSxPQUFPLGNBQWUsU0FBUSxZQUFZOzs7Ozs7OztJQUM5QyxZQUNVLGNBQWdDLEVBQ2hDLFdBQW9DLEVBQzVDLEVBQWMsRUFDZCxRQUFtQixFQUNuQixHQUFlO1FBRWYsS0FBSyxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFOakIsbUJBQWMsR0FBZCxjQUFjLENBQWtCO1FBQ2hDLGdCQUFXLEdBQVgsV0FBVyxDQUF5QjtJQU05QyxDQUFDOzs7OztJQUVELElBQ0ksR0FBRyxDQUFDLEtBQWlCO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEIsQ0FBQzs7Ozs7SUFFUyxXQUFXO1FBQ25CLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDNUIsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDN0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDMUQ7SUFDSCxDQUFDOzs7WUF0QkYsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRTs7OztZQUw2QixnQkFBZ0I7WUFBN0IsV0FBVztZQUF6QyxVQUFVO1lBQVMsU0FBUztZQUV2QyxVQUFVOzs7a0JBZWhCLEtBQUssU0FBQyxPQUFPOzs7Ozs7O0lBVFosd0NBQXdDOzs7OztJQUN4QyxxQ0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBSZW5kZXJlcjIsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBQ0xEaXJlY3RpdmUgfSBmcm9tICcuL2FjbC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQUNMU2VydmljZSB9IGZyb20gJy4vYWNsLnNlcnZpY2UnO1xuaW1wb3J0IHsgQUNMQ2FuVHlwZSB9IGZyb20gJy4vYWNsLnR5cGUnO1xuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbYWNsSWZdJyB9KVxuZXhwb3J0IGNsYXNzIEFDTElmRGlyZWN0aXZlIGV4dGVuZHMgQUNMRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxBQ0xDYW5UeXBlPixcbiAgICBlbDogRWxlbWVudFJlZixcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHNydjogQUNMU2VydmljZSxcbiAgKSB7XG4gICAgc3VwZXIoZWwsIHJlbmRlcmVyLCBzcnYpO1xuICB9XG5cbiAgQElucHV0KCdhY2xJZicpXG4gIHNldCBhY2wodmFsdWU6IEFDTENhblR5cGUpIHtcbiAgICB0aGlzLnNldCh2YWx1ZSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX3VwZGF0ZVZpZXcoKTogdm9pZCB7XG4gICAgdGhpcy5fdmlld0NvbnRhaW5lci5jbGVhcigpO1xuICAgIGlmICh0aGlzLnNydi5jYW4odGhpcy5fdmFsdWUpKSB7XG4gICAgICB0aGlzLl92aWV3Q29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLnRlbXBsYXRlUmVmKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==