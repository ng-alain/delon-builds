/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, ViewEncapsulation, } from '@angular/core';
import { updateHostClass, InputNumber } from '@delon/util';
import { SVConfig } from './view.config';
/** @type {?} */
var prefixCls = "sv";
var SVContainerComponent = /** @class */ (function () {
    // #endregion
    function SVContainerComponent(el, ren, cog) {
        this.ren = ren;
        this.size = 'large';
        this.layout = 'horizontal';
        this.el = el.nativeElement;
        Object.assign(this, tslib_1.__assign({}, new SVConfig(), cog));
    }
    /**
     * @private
     * @return {?}
     */
    SVContainerComponent.prototype.setClass = /**
     * @private
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
                    exportAs: 'svContainer',
                    template: "<div class=\"ant-row\"\n     [ngStyle]=\"{'margin-left.px': -(gutter / 2), 'margin-right.px': -(gutter / 2)}\">\n  <sv-title *ngIf=\"title\">\n    <ng-container *stringTemplateOutlet=\"title\">{{title}}</ng-container>\n  </sv-title>\n  <ng-content></ng-content>\n</div>\n",
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
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
    /**
     * @type {?}
     * @private
     */
    SVContainerComponent.prototype.el;
    /** @type {?} */
    SVContainerComponent.prototype.title;
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
    /**
     * @type {?}
     * @private
     */
    SVContainerComponent.prototype.ren;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy92aWV3LyIsInNvdXJjZXMiOlsidmlldy1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFHTCxTQUFTLEVBRVQsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzNELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7O0lBRW5DLFNBQVMsR0FBRyxJQUFJO0FBRXRCO0lBc0JFLGFBQWE7SUFFYiw4QkFBWSxFQUFjLEVBQVUsR0FBYyxFQUFFLEdBQWE7UUFBN0IsUUFBRyxHQUFILEdBQUcsQ0FBVztRQVh6QyxTQUFJLEdBQXNCLE9BQU8sQ0FBQztRQUdsQyxXQUFNLEdBQThCLFlBQVksQ0FBQztRQVN4RCxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUM7UUFDM0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLHVCQUFPLElBQUksUUFBUSxFQUFFLEVBQUssR0FBRyxFQUFHLENBQUM7SUFDckQsQ0FBQzs7Ozs7SUFFTyx1Q0FBUTs7OztJQUFoQjs7UUFDUSxJQUFBLFNBQWdDLEVBQTlCLFVBQUUsRUFBRSxZQUFHLEVBQUUsY0FBSSxFQUFFLGtCQUFlO1FBQ3RDLGVBQWUsQ0FBQyxFQUFFLEVBQUUsR0FBRztZQUNyQixHQUFJLFNBQVMsZ0JBQWEsSUFBRyxJQUFJO1lBQ2pDLEdBQUksU0FBUyxVQUFLLElBQU0sSUFBRyxJQUFJO1lBQy9CLEdBQUksU0FBUyxVQUFLLE1BQVEsSUFBRyxJQUFJO1lBQ2pDLEdBQUMsVUFBVSxJQUFHLElBQUk7Z0JBQ2xCLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsdUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFFRCwwQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7Z0JBN0NGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsOEJBQThCO29CQUN4QyxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsMlJBQThDO29CQUM5QyxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3RDOzs7O2dCQXBCQyxVQUFVO2dCQUlWLFNBQVM7Z0JBS0YsUUFBUTs7O3dCQWdCZCxLQUFLO3VCQUNMLEtBQUs7eUJBRUwsS0FBSzt5QkFDTCxLQUFLOzZCQUNMLEtBQUs7c0JBRUwsS0FBSzswQkFDTCxLQUFLOztJQUxrQjtRQUFkLFdBQVcsRUFBRTs7d0RBQWdCO0lBRVg7UUFBbEIsV0FBVyxDQUFDLElBQUksQ0FBQzs7NERBQW9CO0lBRXZCO1FBQWQsV0FBVyxFQUFFOztxREFBYTtJQTJCdEMsMkJBQUM7Q0FBQSxBQTlDRCxJQThDQztTQXRDWSxvQkFBb0I7Ozs7OztJQUMvQixrQ0FBd0I7O0lBR3hCLHFDQUEyQzs7SUFDM0Msb0NBQTJDOzs7OztJQUUzQyxzQ0FBdUM7O0lBQ3ZDLHNDQUEwRDs7SUFDMUQsMENBQStDOzs7OztJQUUvQyxtQ0FBb0M7O0lBQ3BDLHVDQUEwQjs7Ozs7SUFJRSxtQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHVwZGF0ZUhvc3RDbGFzcywgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBTVkNvbmZpZyB9IGZyb20gJy4vdmlldy5jb25maWcnO1xuXG5jb25zdCBwcmVmaXhDbHMgPSBgc3ZgO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdi1jb250YWluZXIsIFtzdi1jb250YWluZXJdJyxcbiAgZXhwb3J0QXM6ICdzdkNvbnRhaW5lcicsXG4gIHRlbXBsYXRlVXJsOiAnLi92aWV3LWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgU1ZDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIHByaXZhdGUgZWw6IEhUTUxFbGVtZW50O1xuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgc2l6ZTogJ3NtYWxsJyB8ICdsYXJnZScgPSAnbGFyZ2UnO1xuICAvKiog5YiX6KGo6aG56Ze06Led77yM5Y2V5L2N5Li6IGBweGAgKi9cbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgZ3V0dGVyOiBudW1iZXI7XG4gIEBJbnB1dCgpIGxheW91dDogJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJyA9ICdob3Jpem9udGFsJztcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKG51bGwpIGxhYmVsV2lkdGg6IG51bWJlcjtcbiAgLyoqIOaMh+WumuS/oeaBr+acgOWkmuWIhuWHoOWIl+Wxleekuu+8jOacgOe7iOS4gOihjOWHoOWIl+eUsSBjb2wg6YWN572u57uT5ZCI5ZON5bqU5byP6KeE5YiZ5Yaz5a6aICovXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGNvbDogbnVtYmVyO1xuICBASW5wdXQoKSBkZWZhdWx0OiBib29sZWFuO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3RvcihlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW46IFJlbmRlcmVyMiwgY29nOiBTVkNvbmZpZykge1xuICAgIHRoaXMuZWwgPSBlbC5uYXRpdmVFbGVtZW50O1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgeyAuLi5uZXcgU1ZDb25maWcoKSwgLi4uY29nIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDbGFzcygpIHtcbiAgICBjb25zdCB7IGVsLCByZW4sIHNpemUsIGxheW91dCB9ID0gdGhpcztcbiAgICB1cGRhdGVIb3N0Q2xhc3MoZWwsIHJlbiwge1xuICAgICAgW2Ake3ByZWZpeENsc31fX2NvbnRhaW5lcmBdOiB0cnVlLFxuICAgICAgW2Ake3ByZWZpeENsc31fXyR7c2l6ZX1gXTogdHJ1ZSxcbiAgICAgIFtgJHtwcmVmaXhDbHN9X18ke2xheW91dH1gXTogdHJ1ZSxcbiAgICAgIFtgY2xlYXJmaXhgXTogdHJ1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc2V0Q2xhc3MoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMuc2V0Q2xhc3MoKTtcbiAgfVxufVxuIl19