/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
var StringTemplateOutletDirective = /** @class */ (function () {
    function StringTemplateOutletDirective(viewContainer, defaultTemplate) {
        this.viewContainer = viewContainer;
        this.defaultTemplate = defaultTemplate;
        this.inputTemplate = null;
        this.inputViewRef = null;
        this.defaultViewRef = null;
    }
    Object.defineProperty(StringTemplateOutletDirective.prototype, "stringTemplateOutlet", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value instanceof TemplateRef) {
                this.isTemplate = true;
                this.inputTemplate = value;
            }
            else {
                this.isTemplate = false;
            }
            this.updateView();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    StringTemplateOutletDirective.prototype.updateView = /**
     * @return {?}
     */
    function () {
        if (!this.isTemplate) {
            // use default template when input is string
            if (!this.defaultViewRef) {
                this.viewContainer.clear();
                this.inputViewRef = null;
                this.defaultViewRef = this.viewContainer.createEmbeddedView(this.defaultTemplate);
            }
        }
        else {
            // clear previous view if any.
            if (this.inputViewRef) {
                this.inputViewRef = null;
            }
            // use input template when input is templateRef
            this.viewContainer.clear();
            this.defaultViewRef = null;
            this.inputViewRef = this.viewContainer.createEmbeddedView((/** @type {?} */ (this.inputTemplate)));
        }
    };
    StringTemplateOutletDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[stringTemplateOutlet]',
                },] }
    ];
    /** @nocollapse */
    StringTemplateOutletDirective.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: TemplateRef }
    ]; };
    StringTemplateOutletDirective.propDecorators = {
        stringTemplateOutlet: [{ type: Input }]
    };
    return StringTemplateOutletDirective;
}());
export { StringTemplateOutletDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StringTemplateOutletDirective.prototype.isTemplate;
    /**
     * @type {?}
     * @private
     */
    StringTemplateOutletDirective.prototype.inputTemplate;
    /**
     * @type {?}
     * @private
     */
    StringTemplateOutletDirective.prototype.inputViewRef;
    /**
     * @type {?}
     * @private
     */
    StringTemplateOutletDirective.prototype.defaultViewRef;
    /**
     * @type {?}
     * @private
     */
    StringTemplateOutletDirective.prototype.viewContainer;
    /**
     * @type {?}
     * @private
     */
    StringTemplateOutletDirective.prototype.defaultTemplate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nX3RlbXBsYXRlX291dGxldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi91dGlsLyIsInNvdXJjZXMiOlsic3JjL2FkZG9uL3N0cmluZ190ZW1wbGF0ZV9vdXRsZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQW1CLEtBQUssRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakc7SUFTRSx1Q0FBb0IsYUFBK0IsRUFBVSxlQUFrQztRQUEzRSxrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBbUI7UUFKdkYsa0JBQWEsR0FBNkIsSUFBSSxDQUFDO1FBQy9DLGlCQUFZLEdBQWlDLElBQUksQ0FBQztRQUNsRCxtQkFBYyxHQUFpQyxJQUFJLENBQUM7SUFFdUMsQ0FBQztJQUVwRyxzQkFDSSwrREFBb0I7Ozs7O1FBRHhCLFVBQ3lCLEtBQWlDO1lBQ3hELElBQUksS0FBSyxZQUFZLFdBQVcsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO2FBQzVCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO2FBQ3pCO1lBQ0QsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3BCLENBQUM7OztPQUFBOzs7O0lBRUQsa0RBQVU7OztJQUFWO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDcEIsNENBQTRDO1lBQzVDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFO2dCQUN4QixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUMzQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztnQkFDekIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQzthQUNuRjtTQUNGO2FBQU07WUFDTCw4QkFBOEI7WUFDOUIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUNyQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQzthQUMxQjtZQUNELCtDQUErQztZQUMvQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzNCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1lBQzNCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxtQkFBQSxJQUFJLENBQUMsYUFBYSxFQUFDLENBQUMsQ0FBQztTQUNoRjtJQUNILENBQUM7O2dCQXhDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtpQkFDbkM7Ozs7Z0JBSndELGdCQUFnQjtnQkFBN0IsV0FBVzs7O3VDQWFwRCxLQUFLOztJQThCUixvQ0FBQztDQUFBLEFBekNELElBeUNDO1NBdENZLDZCQUE2Qjs7Ozs7O0lBQ3hDLG1EQUE0Qjs7Ozs7SUFDNUIsc0RBQXVEOzs7OztJQUN2RCxxREFBMEQ7Ozs7O0lBQzFELHVEQUE0RDs7Ozs7SUFFaEQsc0RBQXVDOzs7OztJQUFFLHdEQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRW1iZWRkZWRWaWV3UmVmLCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3N0cmluZ1RlbXBsYXRlT3V0bGV0XScsXG59KVxuZXhwb3J0IGNsYXNzIFN0cmluZ1RlbXBsYXRlT3V0bGV0RGlyZWN0aXZlIHtcbiAgcHJpdmF0ZSBpc1RlbXBsYXRlOiBib29sZWFuO1xuICBwcml2YXRlIGlucHV0VGVtcGxhdGU6IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgaW5wdXRWaWV3UmVmOiBFbWJlZGRlZFZpZXdSZWY8dm9pZD4gfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBkZWZhdWx0Vmlld1JlZjogRW1iZWRkZWRWaWV3UmVmPHZvaWQ+IHwgbnVsbCA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLCBwcml2YXRlIGRlZmF1bHRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8dm9pZD4pIHsgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBzdHJpbmdUZW1wbGF0ZU91dGxldCh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4pIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgdGhpcy5pc1RlbXBsYXRlID0gdHJ1ZTtcbiAgICAgIHRoaXMuaW5wdXRUZW1wbGF0ZSA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzVGVtcGxhdGUgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVWaWV3KCk7XG4gIH1cblxuICB1cGRhdGVWaWV3KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5pc1RlbXBsYXRlKSB7XG4gICAgICAvLyB1c2UgZGVmYXVsdCB0ZW1wbGF0ZSB3aGVuIGlucHV0IGlzIHN0cmluZ1xuICAgICAgaWYgKCF0aGlzLmRlZmF1bHRWaWV3UmVmKSB7XG4gICAgICAgIHRoaXMudmlld0NvbnRhaW5lci5jbGVhcigpO1xuICAgICAgICB0aGlzLmlucHV0Vmlld1JlZiA9IG51bGw7XG4gICAgICAgIHRoaXMuZGVmYXVsdFZpZXdSZWYgPSB0aGlzLnZpZXdDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMuZGVmYXVsdFRlbXBsYXRlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gY2xlYXIgcHJldmlvdXMgdmlldyBpZiBhbnkuXG4gICAgICBpZiAodGhpcy5pbnB1dFZpZXdSZWYpIHtcbiAgICAgICAgdGhpcy5pbnB1dFZpZXdSZWYgPSBudWxsO1xuICAgICAgfVxuICAgICAgLy8gdXNlIGlucHV0IHRlbXBsYXRlIHdoZW4gaW5wdXQgaXMgdGVtcGxhdGVSZWZcbiAgICAgIHRoaXMudmlld0NvbnRhaW5lci5jbGVhcigpO1xuICAgICAgdGhpcy5kZWZhdWx0Vmlld1JlZiA9IG51bGw7XG4gICAgICB0aGlzLmlucHV0Vmlld1JlZiA9IHRoaXMudmlld0NvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy5pbnB1dFRlbXBsYXRlISk7XG4gICAgfVxuICB9XG59XG4iXX0=