/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, TemplateRef } from '@angular/core';
import { SFComponent } from '../../sf.component';
import { SF_SEQ } from '../../const';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2YtdGVtcGxhdGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2Zvcm0vIiwic291cmNlcyI6WyJzcmMvd2lkZ2V0cy9jdXN0b20vc2YtdGVtcGxhdGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFckM7SUFNRSw2QkFBb0IsV0FBOEIsRUFBVSxLQUFrQjtRQUExRCxnQkFBVyxHQUFYLFdBQVcsQ0FBbUI7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFhO0lBQUcsQ0FBQzs7OztJQUVsRixzQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3RHLENBQUM7O2dCQVZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtpQkFDMUI7Ozs7Z0JBTmtDLFdBQVc7Z0JBQ3JDLFdBQVc7Ozt1QkFPakIsS0FBSyxTQUFDLGFBQWE7O0lBT3RCLDBCQUFDO0NBQUEsQUFYRCxJQVdDO1NBUlksbUJBQW1COzs7SUFDOUIsbUNBQW1DOzs7OztJQUV2QiwwQ0FBc0M7Ozs7O0lBQUUsb0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25Jbml0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU0ZDb21wb25lbnQgfSBmcm9tICcuLi8uLi9zZi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU0ZfU0VRIH0gZnJvbSAnLi4vLi4vY29uc3QnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbc2YtdGVtcGxhdGVdJyxcbn0pXG5leHBvcnQgY2xhc3MgU0ZUZW1wbGF0ZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgnc2YtdGVtcGxhdGUnKSBwYXRoOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8dm9pZD4sIHByaXZhdGUgdGFibGU6IFNGQ29tcG9uZW50KSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudGFibGUuX2FkZFRwbCh0aGlzLnBhdGguc3RhcnRzV2l0aChTRl9TRVEpID8gdGhpcy5wYXRoIDogU0ZfU0VRICsgdGhpcy5wYXRoLCB0aGlzLnRlbXBsYXRlUmVmKTtcbiAgfVxufVxuIl19