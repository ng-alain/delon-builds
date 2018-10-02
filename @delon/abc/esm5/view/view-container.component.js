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
                    template: "<div class=\"ant-row\" [ngStyle]=\"{'margin-left.px': -(gutter / 2), 'margin-right.px': -(gutter / 2)}\">\r\n  <sv-title *ngIf=\"_title || _titleTpl\">\r\n    <ng-container *ngIf=\"_title; else _titleTpl\">{{_title}}</ng-container>\r\n  </sv-title>\r\n  <ng-content></ng-content>\r\n</div>\r\n",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy92aWV3LyIsInNvdXJjZXMiOlsidmlldy1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsVUFBVSxFQUNWLFNBQVMsRUFHVCxXQUFXLEdBQ1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDM0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFekMsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDOztJQThDckIsWUFBWTtJQUVaLDhCQUFZLEVBQWMsRUFBVSxHQUFjLEVBQUUsR0FBYTtRQUE3QixRQUFHLEdBQUgsR0FBRyxDQUFXOztzQkFyQ3pDLEVBQUU7UUFzQ1QsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQzFCO0lBdENELHNCQUNJLHVDQUFLOzs7OztRQURULFVBQ1UsS0FBZ0M7WUFDeEMsSUFBSSxLQUFLLFlBQVksV0FBVyxFQUFFO2dCQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7YUFDeEI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7YUFDckI7U0FDRjs7O09BQUE7Ozs7SUFnQ08sdUNBQVE7Ozs7O1FBQ2QsZUFBUSxVQUFFLEVBQUUsWUFBRyxFQUFFLGNBQUksRUFBRSxrQkFBTSxDQUFVO1FBQ3ZDLGVBQWUsQ0FBQyxFQUFFLEVBQUUsR0FBRztZQUNyQixHQUFJLFNBQVMsZ0JBQWEsSUFBRyxJQUFJO1lBQ2pDLEdBQUksU0FBUyxVQUFLLElBQU0sSUFBRyxJQUFJO1lBQy9CLEdBQUksU0FBUyxVQUFLLE1BQVEsSUFBRyxJQUFJO1lBQ2pDLEdBQUMsVUFBVSxJQUFHLElBQUk7Z0JBQ2xCLENBQUM7Ozs7O0lBR0wsdUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQ2pCOzs7O0lBRUQsMENBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQ2pCOztnQkFuRUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw4QkFBOEI7b0JBQ3hDLGlUQUE4QztvQkFDOUMsbUJBQW1CLEVBQUUsS0FBSztpQkFDM0I7Ozs7Z0JBZkMsVUFBVTtnQkFDVixTQUFTO2dCQU1GLFFBQVE7Ozt3QkFlZCxLQUFLO3VCQVVMLEtBQUs7eUJBSUwsS0FBSzt5QkFJTCxLQUFLOzZCQUdMLEtBQUs7c0JBS0wsS0FBSzswQkFJTCxLQUFLOzs7UUFmTCxXQUFXLEVBQUU7Ozs7UUFPYixXQUFXLENBQUMsSUFBSSxDQUFDOzs7O1FBS2pCLFdBQVcsRUFBRTs7OytCQXBEaEI7O1NBbUJhLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIE9uSW5pdCxcclxuICBPbkNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHVwZGF0ZUhvc3RDbGFzcywgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XHJcbmltcG9ydCB7IFNWQ29uZmlnIH0gZnJvbSAnLi92aWV3LmNvbmZpZyc7XHJcblxyXG5jb25zdCBwcmVmaXhDbHMgPSBgc3ZgO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzdi1jb250YWluZXIsIFtzdi1jb250YWluZXJdJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdmlldy1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU1ZDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgcHJpdmF0ZSBlbDogSFRNTEVsZW1lbnQ7XHJcbiAgLy8jcmVnaW9uIGZpZWxkc1xyXG5cclxuICBfdGl0bGUgPSAnJztcclxuICBfdGl0bGVUcGw6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgQElucHV0KClcclxuICBzZXQgdGl0bGUodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pIHtcclxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XHJcbiAgICAgIHRoaXMuX3RpdGxlID0gbnVsbDtcclxuICAgICAgdGhpcy5fdGl0bGVUcGwgPSB2YWx1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX3RpdGxlID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNpemU6ICdzbWFsbCcgfCAnbGFyZ2UnO1xyXG5cclxuICAvKiog5YiX6KGo6aG56Ze06Led77yM5Y2V5L2N5Li6IGBweGAgKi9cclxuICBASW5wdXQoKVxyXG4gIEBJbnB1dE51bWJlcigpXHJcbiAgZ3V0dGVyOiBudW1iZXI7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgbGF5b3V0OiAnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIEBJbnB1dE51bWJlcihudWxsKVxyXG4gIGxhYmVsV2lkdGg6IG51bWJlcjtcclxuXHJcbiAgLyoqIOaMh+WumuS/oeaBr+acgOWkmuWIhuWHoOWIl+Wxleekuu+8jOacgOe7iOS4gOihjOWHoOWIl+eUsSBjb2wg6YWN572u57uT5ZCI5ZON5bqU5byP6KeE5YiZ5Yaz5a6aICovXHJcbiAgQElucHV0KClcclxuICBASW5wdXROdW1iZXIoKVxyXG4gIGNvbDogbnVtYmVyO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGRlZmF1bHQ6IGJvb2xlYW47XHJcblxyXG4gIC8vI2VuZHJlZ2lvblxyXG5cclxuICBjb25zdHJ1Y3RvcihlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW46IFJlbmRlcmVyMiwgY29nOiBTVkNvbmZpZykge1xyXG4gICAgdGhpcy5lbCA9IGVsLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvZyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldENsYXNzKCkge1xyXG4gICAgY29uc3QgeyBlbCwgcmVuLCBzaXplLCBsYXlvdXQgfSA9IHRoaXM7XHJcbiAgICB1cGRhdGVIb3N0Q2xhc3MoZWwsIHJlbiwge1xyXG4gICAgICBbYCR7cHJlZml4Q2xzfV9fY29udGFpbmVyYF06IHRydWUsXHJcbiAgICAgIFtgJHtwcmVmaXhDbHN9X18ke3NpemV9YF06IHRydWUsXHJcbiAgICAgIFtgJHtwcmVmaXhDbHN9X18ke2xheW91dH1gXTogdHJ1ZSxcclxuICAgICAgW2BjbGVhcmZpeGBdOiB0cnVlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc2V0Q2xhc3MoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCkge1xyXG4gICAgdGhpcy5zZXRDbGFzcygpO1xyXG4gIH1cclxufVxyXG4iXX0=