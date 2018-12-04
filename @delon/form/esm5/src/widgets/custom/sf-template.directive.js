/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Directive, Input, TemplateRef } from '@angular/core';
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
        this.table._addTpl(this.path.startsWith('/') ? this.path : "/" + this.path, this.templateRef);
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
    /** @type {?} */
    SFTemplateDirective.prototype.templateRef;
    /** @type {?} */
    SFTemplateDirective.prototype.table;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2YtdGVtcGxhdGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy9jdXN0b20vc2YtdGVtcGxhdGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWpEO0lBTUUsNkJBQ1UsV0FBOEIsRUFDOUIsS0FBa0I7UUFEbEIsZ0JBQVcsR0FBWCxXQUFXLENBQW1CO1FBQzlCLFVBQUssR0FBTCxLQUFLLENBQWE7SUFDeEIsQ0FBQzs7OztJQUVMLHNDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQ3ZELElBQUksQ0FBQyxXQUFXLENBQ2pCLENBQUM7SUFDSixDQUFDOztnQkFoQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO2lCQUMxQjs7OztnQkFMa0MsV0FBVztnQkFDckMsV0FBVzs7O3VCQU1qQixLQUFLLFNBQUMsYUFBYTs7SUFhdEIsMEJBQUM7Q0FBQSxBQWpCRCxJQWlCQztTQWRZLG1CQUFtQjs7O0lBQzlCLG1DQUFtQzs7SUFHakMsMENBQXNDOztJQUN0QyxvQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkluaXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTRkNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3NmLmNvbXBvbmVudCc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tzZi10ZW1wbGF0ZV0nLFxufSlcbmV4cG9ydCBjbGFzcyBTRlRlbXBsYXRlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCdzZi10ZW1wbGF0ZScpIHBhdGg6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjx2b2lkPixcbiAgICBwcml2YXRlIHRhYmxlOiBTRkNvbXBvbmVudCxcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnRhYmxlLl9hZGRUcGwoXG4gICAgICB0aGlzLnBhdGguc3RhcnRzV2l0aCgnLycpID8gdGhpcy5wYXRoIDogYC9gICsgdGhpcy5wYXRoLFxuICAgICAgdGhpcy50ZW1wbGF0ZVJlZixcbiAgICApO1xuICB9XG59XG4iXX0=