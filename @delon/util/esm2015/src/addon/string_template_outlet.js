/**
 * @fileoverview added by tsickle
 * Generated from: src/addon/string_template_outlet.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
export class StringTemplateOutletDirective {
    /**
     * @param {?} viewContainer
     * @param {?} defaultTemplate
     */
    constructor(viewContainer, defaultTemplate) {
        this.viewContainer = viewContainer;
        this.defaultTemplate = defaultTemplate;
        this.inputTemplate = null;
        this.inputViewRef = null;
        this.defaultViewRef = null;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set stringTemplateOutlet(value) {
        if (value instanceof TemplateRef) {
            this.isTemplate = true;
            this.inputTemplate = value;
        }
        else {
            this.isTemplate = false;
        }
        this.updateView();
    }
    /**
     * @return {?}
     */
    updateView() {
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
    }
}
StringTemplateOutletDirective.decorators = [
    { type: Directive, args: [{
                selector: '[stringTemplateOutlet]',
            },] }
];
/** @nocollapse */
StringTemplateOutletDirective.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: TemplateRef }
];
StringTemplateOutletDirective.propDecorators = {
    stringTemplateOutlet: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nX3RlbXBsYXRlX291dGxldC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi91dGlsLyIsInNvdXJjZXMiOlsic3JjL2FkZG9uL3N0cmluZ190ZW1wbGF0ZV9vdXRsZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFtQixLQUFLLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBS2pHLE1BQU0sT0FBTyw2QkFBNkI7Ozs7O0lBTXhDLFlBQW9CLGFBQStCLEVBQVUsZUFBa0M7UUFBM0Usa0JBQWEsR0FBYixhQUFhLENBQWtCO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQW1CO1FBSnZGLGtCQUFhLEdBQTZCLElBQUksQ0FBQztRQUMvQyxpQkFBWSxHQUFpQyxJQUFJLENBQUM7UUFDbEQsbUJBQWMsR0FBaUMsSUFBSSxDQUFDO0lBRXVDLENBQUM7Ozs7O0lBRXBHLElBQ0ksb0JBQW9CLENBQUMsS0FBaUM7UUFDeEQsSUFBSSxLQUFLLFlBQVksV0FBVyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1NBQzVCO2FBQU07WUFDTCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztTQUN6QjtRQUNELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsVUFBVTtRQUNSLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3BCLDRDQUE0QztZQUM1QyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtnQkFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7YUFDbkY7U0FDRjthQUFNO1lBQ0wsOEJBQThCO1lBQzlCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDckIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7YUFDMUI7WUFDRCwrQ0FBK0M7WUFDL0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUMzQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztZQUMzQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsbUJBQUEsSUFBSSxDQUFDLGFBQWEsRUFBQyxDQUFDLENBQUM7U0FDaEY7SUFDSCxDQUFDOzs7WUF4Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7YUFDbkM7Ozs7WUFKd0QsZ0JBQWdCO1lBQTdCLFdBQVc7OzttQ0FhcEQsS0FBSzs7Ozs7OztJQVBOLG1EQUE0Qjs7Ozs7SUFDNUIsc0RBQXVEOzs7OztJQUN2RCxxREFBMEQ7Ozs7O0lBQzFELHVEQUE0RDs7Ozs7SUFFaEQsc0RBQXVDOzs7OztJQUFFLHdEQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRW1iZWRkZWRWaWV3UmVmLCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3N0cmluZ1RlbXBsYXRlT3V0bGV0XScsXG59KVxuZXhwb3J0IGNsYXNzIFN0cmluZ1RlbXBsYXRlT3V0bGV0RGlyZWN0aXZlIHtcbiAgcHJpdmF0ZSBpc1RlbXBsYXRlOiBib29sZWFuO1xuICBwcml2YXRlIGlucHV0VGVtcGxhdGU6IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgaW5wdXRWaWV3UmVmOiBFbWJlZGRlZFZpZXdSZWY8dm9pZD4gfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBkZWZhdWx0Vmlld1JlZjogRW1iZWRkZWRWaWV3UmVmPHZvaWQ+IHwgbnVsbCA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLCBwcml2YXRlIGRlZmF1bHRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8dm9pZD4pIHsgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBzdHJpbmdUZW1wbGF0ZU91dGxldCh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4pIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgdGhpcy5pc1RlbXBsYXRlID0gdHJ1ZTtcbiAgICAgIHRoaXMuaW5wdXRUZW1wbGF0ZSA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzVGVtcGxhdGUgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVWaWV3KCk7XG4gIH1cblxuICB1cGRhdGVWaWV3KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5pc1RlbXBsYXRlKSB7XG4gICAgICAvLyB1c2UgZGVmYXVsdCB0ZW1wbGF0ZSB3aGVuIGlucHV0IGlzIHN0cmluZ1xuICAgICAgaWYgKCF0aGlzLmRlZmF1bHRWaWV3UmVmKSB7XG4gICAgICAgIHRoaXMudmlld0NvbnRhaW5lci5jbGVhcigpO1xuICAgICAgICB0aGlzLmlucHV0Vmlld1JlZiA9IG51bGw7XG4gICAgICAgIHRoaXMuZGVmYXVsdFZpZXdSZWYgPSB0aGlzLnZpZXdDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMuZGVmYXVsdFRlbXBsYXRlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gY2xlYXIgcHJldmlvdXMgdmlldyBpZiBhbnkuXG4gICAgICBpZiAodGhpcy5pbnB1dFZpZXdSZWYpIHtcbiAgICAgICAgdGhpcy5pbnB1dFZpZXdSZWYgPSBudWxsO1xuICAgICAgfVxuICAgICAgLy8gdXNlIGlucHV0IHRlbXBsYXRlIHdoZW4gaW5wdXQgaXMgdGVtcGxhdGVSZWZcbiAgICAgIHRoaXMudmlld0NvbnRhaW5lci5jbGVhcigpO1xuICAgICAgdGhpcy5kZWZhdWx0Vmlld1JlZiA9IG51bGw7XG4gICAgICB0aGlzLmlucHV0Vmlld1JlZiA9IHRoaXMudmlld0NvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy5pbnB1dFRlbXBsYXRlISk7XG4gICAgfVxuICB9XG59XG4iXX0=