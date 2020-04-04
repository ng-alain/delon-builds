/**
 * @fileoverview added by tsickle
 * Generated from: src/widgets/custom/sf-template.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, TemplateRef } from '@angular/core';
import { SF_SEQ } from '../../const';
import { SFComponent } from '../../sf.component';
var SFTemplateDirective = /** @class */ (function () {
    function SFTemplateDirective(templateRef, table) {
        this.templateRef = templateRef;
        this.table = table;
    }
    /**
     * @return {?}
     */
    SFTemplateDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.table._addTpl(this.path.startsWith(SF_SEQ) ? this.path : SF_SEQ + this.path, this.templateRef);
    };
    SFTemplateDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[sf-template]',
                },] }
    ];
    /** @nocollapse */
    SFTemplateDirective.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: SFComponent }
    ]; };
    SFTemplateDirective.propDecorators = {
        path: [{ type: Input, args: ['sf-template',] }]
    };
    return SFTemplateDirective;
}());
export { SFTemplateDirective };
if (false) {
    /** @type {?} */
    SFTemplateDirective.prototype.path;
    /**
     * @type {?}
     * @private
     */
    SFTemplateDirective.prototype.templateRef;
    /**
     * @type {?}
     * @private
     */
    SFTemplateDirective.prototype.table;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2YtdGVtcGxhdGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy9jdXN0b20vc2YtdGVtcGxhdGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDckMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWpEO0lBTUUsNkJBQW9CLFdBQThCLEVBQVUsS0FBa0I7UUFBMUQsZ0JBQVcsR0FBWCxXQUFXLENBQW1CO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBYTtJQUFHLENBQUM7Ozs7SUFFbEYsc0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN0RyxDQUFDOztnQkFWRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7aUJBQzFCOzs7O2dCQU5rQyxXQUFXO2dCQUVyQyxXQUFXOzs7dUJBTWpCLEtBQUssU0FBQyxhQUFhOztJQU90QiwwQkFBQztDQUFBLEFBWEQsSUFXQztTQVJZLG1CQUFtQjs7O0lBQzlCLG1DQUFtQzs7Ozs7SUFFdkIsMENBQXNDOzs7OztJQUFFLG9DQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uSW5pdCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNGX1NFUSB9IGZyb20gJy4uLy4uL2NvbnN0JztcbmltcG9ydCB7IFNGQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vc2YuY29tcG9uZW50JztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3NmLXRlbXBsYXRlXScsXG59KVxuZXhwb3J0IGNsYXNzIFNGVGVtcGxhdGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoJ3NmLXRlbXBsYXRlJykgcGF0aDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPHZvaWQ+LCBwcml2YXRlIHRhYmxlOiBTRkNvbXBvbmVudCkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnRhYmxlLl9hZGRUcGwodGhpcy5wYXRoLnN0YXJ0c1dpdGgoU0ZfU0VRKSA/IHRoaXMucGF0aCA6IFNGX1NFUSArIHRoaXMucGF0aCwgdGhpcy50ZW1wbGF0ZVJlZik7XG4gIH1cbn1cbiJdfQ==