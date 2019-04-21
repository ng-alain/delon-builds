/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input, Renderer2, TemplateRef, ViewContainerRef, } from '@angular/core';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNsLWlmLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hY2wvIiwic291cmNlcyI6WyJzcmMvYWNsLWlmLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLFNBQVMsRUFDVCxXQUFXLEVBQ1gsZ0JBQWdCLEdBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTNDLE1BQU0sT0FBTyxjQUFlLFNBQVEsWUFBWTs7Ozs7Ozs7SUFDOUMsWUFDVSxjQUFnQyxFQUNoQyxXQUFvQyxFQUM1QyxFQUFjLEVBQ2QsUUFBbUIsRUFDbkIsR0FBZTtRQUVmLEtBQUssQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBTmpCLG1CQUFjLEdBQWQsY0FBYyxDQUFrQjtRQUNoQyxnQkFBVyxHQUFYLFdBQVcsQ0FBeUI7SUFNOUMsQ0FBQzs7Ozs7SUFFRCxJQUNJLEdBQUcsQ0FBQyxLQUFpQjtRQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xCLENBQUM7Ozs7O0lBRVMsV0FBVztRQUNuQixJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzVCLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzdCLElBQUksQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzFEO0lBQ0gsQ0FBQzs7O1lBdEJGLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUU7Ozs7WUFOaEMsZ0JBQWdCO1lBRGhCLFdBQVc7WUFIWCxVQUFVO1lBRVYsU0FBUztZQUtGLFVBQVU7OztrQkFlaEIsS0FBSyxTQUFDLE9BQU87Ozs7Ozs7SUFUWix3Q0FBd0M7Ozs7O0lBQ3hDLHFDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDb250YWluZXJSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQUNMRGlyZWN0aXZlIH0gZnJvbSAnLi9hY2wuZGlyZWN0aXZlJztcbmltcG9ydCB7IEFDTFNlcnZpY2UgfSBmcm9tICcuL2FjbC5zZXJ2aWNlJztcbmltcG9ydCB7IEFDTENhblR5cGUgfSBmcm9tICcuL2FjbC50eXBlJztcblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW2FjbElmXScgfSlcbmV4cG9ydCBjbGFzcyBBQ0xJZkRpcmVjdGl2ZSBleHRlbmRzIEFDTERpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3ZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8QUNMQ2FuVHlwZT4sXG4gICAgZWw6IEVsZW1lbnRSZWYsXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBzcnY6IEFDTFNlcnZpY2UsXG4gICkge1xuICAgIHN1cGVyKGVsLCByZW5kZXJlciwgc3J2KTtcbiAgfVxuXG4gIEBJbnB1dCgnYWNsSWYnKVxuICBzZXQgYWNsKHZhbHVlOiBBQ0xDYW5UeXBlKSB7XG4gICAgdGhpcy5zZXQodmFsdWUpO1xuICB9XG5cbiAgcHJvdGVjdGVkIF91cGRhdGVWaWV3KCk6IHZvaWQge1xuICAgIHRoaXMuX3ZpZXdDb250YWluZXIuY2xlYXIoKTtcbiAgICBpZiAodGhpcy5zcnYuY2FuKHRoaXMuX3ZhbHVlKSkge1xuICAgICAgdGhpcy5fdmlld0NvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy50ZW1wbGF0ZVJlZik7XG4gICAgfVxuICB9XG59XG4iXX0=