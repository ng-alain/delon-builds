/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Directive, Input, TemplateRef } from '@angular/core';
import { SFComponent } from '../../sf.component';
export class SFTemplateDirective {
    /**
     * @param {?} templateRef
     * @param {?} table
     */
    constructor(templateRef, table) {
        this.templateRef = templateRef;
        this.table = table;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.table._addTpl(this.path.startsWith('/') ? this.path : `/` + this.path, this.templateRef);
    }
}
SFTemplateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[sf-template]',
            },] }
];
/** @nocollapse */
SFTemplateDirective.ctorParameters = () => [
    { type: TemplateRef },
    { type: SFComponent }
];
SFTemplateDirective.propDecorators = {
    path: [{ type: Input, args: ['sf-template',] }]
};
if (false) {
    /** @type {?} */
    SFTemplateDirective.prototype.path;
    /** @type {?} */
    SFTemplateDirective.prototype.templateRef;
    /** @type {?} */
    SFTemplateDirective.prototype.table;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2YtdGVtcGxhdGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy9jdXN0b20vc2YtdGVtcGxhdGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBS2pELE1BQU0sT0FBTyxtQkFBbUI7Ozs7O0lBSTlCLFlBQ1UsV0FBNkIsRUFDN0IsS0FBa0I7UUFEbEIsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO1FBQzdCLFVBQUssR0FBTCxLQUFLLENBQWE7SUFDekIsQ0FBQzs7OztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUN2RCxJQUFJLENBQUMsV0FBVyxDQUNqQixDQUFDO0lBQ0osQ0FBQzs7O1lBakJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTthQUMxQjs7OztZQUwwQixXQUFXO1lBQzdCLFdBQVc7OzttQkFPakIsS0FBSyxTQUFDLGFBQWE7Ozs7SUFBcEIsbUNBQW1DOztJQUdqQywwQ0FBcUM7O0lBQ3JDLG9DQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIFRlbXBsYXRlUmVmLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNGQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vc2YuY29tcG9uZW50JztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3NmLXRlbXBsYXRlXScsXG59KVxuZXhwb3J0IGNsYXNzIFNGVGVtcGxhdGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taW5wdXQtcmVuYW1lXG4gIEBJbnB1dCgnc2YtdGVtcGxhdGUnKSBwYXRoOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PixcbiAgICBwcml2YXRlIHRhYmxlOiBTRkNvbXBvbmVudCxcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudGFibGUuX2FkZFRwbChcbiAgICAgIHRoaXMucGF0aC5zdGFydHNXaXRoKCcvJykgPyB0aGlzLnBhdGggOiBgL2AgKyB0aGlzLnBhdGgsXG4gICAgICB0aGlzLnRlbXBsYXRlUmVmLFxuICAgICk7XG4gIH1cbn1cbiJdfQ==