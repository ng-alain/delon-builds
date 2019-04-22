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
    { type: Directive, args: [{
                selector: '[aclIf]',
                exportAs: 'aclIf',
            },] }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNsLWlmLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hY2wvIiwic291cmNlcyI6WyJzcmMvYWNsLWlmLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPM0MsTUFBTSxPQUFPLGNBQWUsU0FBUSxZQUFZOzs7Ozs7OztJQUM5QyxZQUNVLGNBQWdDLEVBQ2hDLFdBQW9DLEVBQzVDLEVBQWMsRUFDZCxRQUFtQixFQUNuQixHQUFlO1FBRWYsS0FBSyxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFOakIsbUJBQWMsR0FBZCxjQUFjLENBQWtCO1FBQ2hDLGdCQUFXLEdBQVgsV0FBVyxDQUF5QjtJQU05QyxDQUFDOzs7OztJQUVELElBQ0ksR0FBRyxDQUFDLEtBQWlCO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEIsQ0FBQzs7Ozs7SUFFUyxXQUFXO1FBQ25CLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDNUIsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDN0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDMUQ7SUFDSCxDQUFDOzs7WUF6QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2dCQUNuQixRQUFRLEVBQUUsT0FBTzthQUNsQjs7OztZQVI4RCxnQkFBZ0I7WUFBN0IsV0FBVztZQUF6QyxVQUFVO1lBQVMsU0FBUztZQUV2QyxVQUFVOzs7a0JBa0JoQixLQUFLLFNBQUMsT0FBTzs7Ozs7OztJQVRaLHdDQUF3Qzs7Ozs7SUFDeEMscUNBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgUmVuZGVyZXIyLCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQUNMRGlyZWN0aXZlIH0gZnJvbSAnLi9hY2wuZGlyZWN0aXZlJztcbmltcG9ydCB7IEFDTFNlcnZpY2UgfSBmcm9tICcuL2FjbC5zZXJ2aWNlJztcbmltcG9ydCB7IEFDTENhblR5cGUgfSBmcm9tICcuL2FjbC50eXBlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2FjbElmXScsXG4gIGV4cG9ydEFzOiAnYWNsSWYnLFxufSlcbmV4cG9ydCBjbGFzcyBBQ0xJZkRpcmVjdGl2ZSBleHRlbmRzIEFDTERpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3ZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8QUNMQ2FuVHlwZT4sXG4gICAgZWw6IEVsZW1lbnRSZWYsXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBzcnY6IEFDTFNlcnZpY2UsXG4gICkge1xuICAgIHN1cGVyKGVsLCByZW5kZXJlciwgc3J2KTtcbiAgfVxuXG4gIEBJbnB1dCgnYWNsSWYnKVxuICBzZXQgYWNsKHZhbHVlOiBBQ0xDYW5UeXBlKSB7XG4gICAgdGhpcy5zZXQodmFsdWUpO1xuICB9XG5cbiAgcHJvdGVjdGVkIF91cGRhdGVWaWV3KCk6IHZvaWQge1xuICAgIHRoaXMuX3ZpZXdDb250YWluZXIuY2xlYXIoKTtcbiAgICBpZiAodGhpcy5zcnYuY2FuKHRoaXMuX3ZhbHVlKSkge1xuICAgICAgdGhpcy5fdmlld0NvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy50ZW1wbGF0ZVJlZik7XG4gICAgfVxuICB9XG59XG4iXX0=