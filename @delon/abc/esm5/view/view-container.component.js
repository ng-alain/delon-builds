/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, ElementRef, Renderer2, TemplateRef, } from '@angular/core';
import { updateHostClass, InputNumber } from '@delon/util';
import { SVConfig } from './view.config';
/** @type {?} */
var prefixCls = "sv";
var SVContainerComponent = /** @class */ (function () {
    //#endregion
    function SVContainerComponent(el, ren, cog) {
        this.ren = ren;
        //#region fields
        this._title = '';
        this.el = el.nativeElement;
        Object.assign(this, cog);
    }
    Object.defineProperty(SVContainerComponent.prototype, "title", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value instanceof TemplateRef) {
                this._title = null;
                this._titleTpl = value;
            }
            else {
                this._title = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SVContainerComponent.prototype.setClass = /**
     * @return {?}
     */
    function () {
        var _a;
        var _b = this, el = _b.el, ren = _b.ren, size = _b.size, layout = _b.layout;
        updateHostClass(el, ren, (_a = {},
            _a[prefixCls + "__container"] = true,
            _a[prefixCls + "__" + size] = true,
            _a[prefixCls + "__" + layout] = true,
            _a["clearfix"] = true,
            _a));
    };
    /**
     * @return {?}
     */
    SVContainerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setClass();
    };
    /**
     * @return {?}
     */
    SVContainerComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.setClass();
    };
    SVContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'sv-container, [sv-container]',
                    template: "<div class=\"ant-row\" [ngStyle]=\"{'margin-left.px': -(gutter / 2), 'margin-right.px': -(gutter / 2)}\">\n  <sv-title *ngIf=\"_title || _titleTpl\">\n    <ng-container *ngIf=\"_title; else _titleTpl\">{{_title}}</ng-container>\n  </sv-title>\n  <ng-content></ng-content>\n</div>\n",
                    preserveWhitespaces: false
                }] }
    ];
    /** @nocollapse */
    SVContainerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: SVConfig }
    ]; };
    SVContainerComponent.propDecorators = {
        title: [{ type: Input }],
        size: [{ type: Input }],
        gutter: [{ type: Input }],
        layout: [{ type: Input }],
        labelWidth: [{ type: Input }],
        col: [{ type: Input }],
        default: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Number)
    ], SVContainerComponent.prototype, "gutter", void 0);
    tslib_1.__decorate([
        InputNumber(null),
        tslib_1.__metadata("design:type", Number)
    ], SVContainerComponent.prototype, "labelWidth", void 0);
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Number)
    ], SVContainerComponent.prototype, "col", void 0);
    return SVContainerComponent;
}());
export { SVContainerComponent };
if (false) {
    /** @type {?} */
    SVContainerComponent.prototype.el;
    /** @type {?} */
    SVContainerComponent.prototype._title;
    /** @type {?} */
    SVContainerComponent.prototype._titleTpl;
    /** @type {?} */
    SVContainerComponent.prototype.size;
    /**
     * 列表项间距，单位为 `px`
     * @type {?}
     */
    SVContainerComponent.prototype.gutter;
    /** @type {?} */
    SVContainerComponent.prototype.layout;
    /** @type {?} */
    SVContainerComponent.prototype.labelWidth;
    /**
     * 指定信息最多分几列展示，最终一行几列由 col 配置结合响应式规则决定
     * @type {?}
     */
    SVContainerComponent.prototype.col;
    /** @type {?} */
    SVContainerComponent.prototype.default;
    /** @type {?} */
    SVContainerComponent.prototype.ren;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy92aWV3LyIsInNvdXJjZXMiOlsidmlldy1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsVUFBVSxFQUNWLFNBQVMsRUFHVCxXQUFXLEdBQ1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDM0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFekMsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDOztJQThDckIsWUFBWTtJQUVaLDhCQUFZLEVBQWMsRUFBVSxHQUFjLEVBQUUsR0FBYTtRQUE3QixRQUFHLEdBQUgsR0FBRyxDQUFXOztzQkFyQ3pDLEVBQUU7UUFzQ1QsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQzFCO0lBdENELHNCQUNJLHVDQUFLOzs7OztRQURULFVBQ1UsS0FBZ0M7WUFDeEMsSUFBSSxLQUFLLFlBQVksV0FBVyxFQUFFO2dCQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7YUFDeEI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7YUFDckI7U0FDRjs7O09BQUE7Ozs7SUFnQ08sdUNBQVE7Ozs7O1FBQ2QsZUFBUSxVQUFFLEVBQUUsWUFBRyxFQUFFLGNBQUksRUFBRSxrQkFBTSxDQUFVO1FBQ3ZDLGVBQWUsQ0FBQyxFQUFFLEVBQUUsR0FBRztZQUNyQixHQUFJLFNBQVMsZ0JBQWEsSUFBRyxJQUFJO1lBQ2pDLEdBQUksU0FBUyxVQUFLLElBQU0sSUFBRyxJQUFJO1lBQy9CLEdBQUksU0FBUyxVQUFLLE1BQVEsSUFBRyxJQUFJO1lBQ2pDLEdBQUMsVUFBVSxJQUFHLElBQUk7Z0JBQ2xCLENBQUM7Ozs7O0lBR0wsdUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQ2pCOzs7O0lBRUQsMENBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQ2pCOztnQkFuRUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw4QkFBOEI7b0JBQ3hDLHFTQUE4QztvQkFDOUMsbUJBQW1CLEVBQUUsS0FBSztpQkFDM0I7Ozs7Z0JBZkMsVUFBVTtnQkFDVixTQUFTO2dCQU1GLFFBQVE7Ozt3QkFlZCxLQUFLO3VCQVVMLEtBQUs7eUJBSUwsS0FBSzt5QkFJTCxLQUFLOzZCQUdMLEtBQUs7c0JBS0wsS0FBSzswQkFJTCxLQUFLOzs7UUFmTCxXQUFXLEVBQUU7Ozs7UUFPYixXQUFXLENBQUMsSUFBSSxDQUFDOzs7O1FBS2pCLFdBQVcsRUFBRTs7OytCQXBEaEI7O1NBbUJhLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIEVsZW1lbnRSZWYsXG4gIFJlbmRlcmVyMixcbiAgT25Jbml0LFxuICBPbkNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHVwZGF0ZUhvc3RDbGFzcywgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBTVkNvbmZpZyB9IGZyb20gJy4vdmlldy5jb25maWcnO1xuXG5jb25zdCBwcmVmaXhDbHMgPSBgc3ZgO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdi1jb250YWluZXIsIFtzdi1jb250YWluZXJdJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3ZpZXctY29udGFpbmVyLmNvbXBvbmVudC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIFNWQ29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBwcml2YXRlIGVsOiBIVE1MRWxlbWVudDtcbiAgLy8jcmVnaW9uIGZpZWxkc1xuXG4gIF90aXRsZSA9ICcnO1xuICBfdGl0bGVUcGw6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBJbnB1dCgpXG4gIHNldCB0aXRsZSh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLl90aXRsZSA9IG51bGw7XG4gICAgICB0aGlzLl90aXRsZVRwbCA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl90aXRsZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNpemU6ICdzbWFsbCcgfCAnbGFyZ2UnO1xuXG4gIC8qKiDliJfooajpobnpl7Tot53vvIzljZXkvY3kuLogYHB4YCAqL1xuICBASW5wdXQoKVxuICBASW5wdXROdW1iZXIoKVxuICBndXR0ZXI6IG51bWJlcjtcblxuICBASW5wdXQoKVxuICBsYXlvdXQ6ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCc7XG5cbiAgQElucHV0KClcbiAgQElucHV0TnVtYmVyKG51bGwpXG4gIGxhYmVsV2lkdGg6IG51bWJlcjtcblxuICAvKiog5oyH5a6a5L+h5oGv5pyA5aSa5YiG5Yeg5YiX5bGV56S677yM5pyA57uI5LiA6KGM5Yeg5YiX55SxIGNvbCDphY3nva7nu5PlkIjlk43lupTlvI/op4TliJnlhrPlrpogKi9cbiAgQElucHV0KClcbiAgQElucHV0TnVtYmVyKClcbiAgY29sOiBudW1iZXI7XG5cbiAgQElucHV0KClcbiAgZGVmYXVsdDogYm9vbGVhbjtcblxuICAvLyNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3RvcihlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW46IFJlbmRlcmVyMiwgY29nOiBTVkNvbmZpZykge1xuICAgIHRoaXMuZWwgPSBlbC5uYXRpdmVFbGVtZW50O1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29nKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0Q2xhc3MoKSB7XG4gICAgY29uc3QgeyBlbCwgcmVuLCBzaXplLCBsYXlvdXQgfSA9IHRoaXM7XG4gICAgdXBkYXRlSG9zdENsYXNzKGVsLCByZW4sIHtcbiAgICAgIFtgJHtwcmVmaXhDbHN9X19jb250YWluZXJgXTogdHJ1ZSxcbiAgICAgIFtgJHtwcmVmaXhDbHN9X18ke3NpemV9YF06IHRydWUsXG4gICAgICBbYCR7cHJlZml4Q2xzfV9fJHtsYXlvdXR9YF06IHRydWUsXG4gICAgICBbYGNsZWFyZml4YF06IHRydWUsXG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNldENsYXNzKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLnNldENsYXNzKCk7XG4gIH1cbn1cbiJdfQ==