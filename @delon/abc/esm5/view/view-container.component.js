/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, } from '@angular/core';
import { updateHostClass, InputNumber } from '@delon/util';
import { SVConfig } from './view.config';
/** @type {?} */
var prefixCls = "sv";
var SVContainerComponent = /** @class */ (function () {
    //#endregion
    function SVContainerComponent(el, ren, cog) {
        this.ren = ren;
        this.el = el.nativeElement;
        Object.assign(this, tslib_1.__assign({}, new SVConfig(), cog));
    }
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
                    template: "<div class=\"ant-row\" [ngStyle]=\"{'margin-left.px': -(gutter / 2), 'margin-right.px': -(gutter / 2)}\">\n  <sv-title *ngIf=\"title\">\n    <ng-container *stringTemplateOutlet=\"title\">{{title}}</ng-container>\n  </sv-title>\n  <ng-content></ng-content>\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    exportAs: 'svContainer'
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
    /** @type {?} */
    SVContainerComponent.prototype.ren;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy92aWV3LyIsInNvdXJjZXMiOlsidmlldy1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFHTCxTQUFTLEdBRVYsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDM0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7SUFFbkMsU0FBUyxHQUFHLElBQUk7QUFFdEI7SUFvQkUsWUFBWTtJQUVaLDhCQUFZLEVBQWMsRUFBVSxHQUFjLEVBQUUsR0FBYTtRQUE3QixRQUFHLEdBQUgsR0FBRyxDQUFXO1FBQ2hELElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQztRQUMzQixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksdUJBQU8sSUFBSSxRQUFRLEVBQUUsRUFBSyxHQUFHLEVBQUUsQ0FBQztJQUNwRCxDQUFDOzs7O0lBRU8sdUNBQVE7OztJQUFoQjs7UUFDUSxJQUFBLFNBQWdDLEVBQTlCLFVBQUUsRUFBRSxZQUFHLEVBQUUsY0FBSSxFQUFFLGtCQUFlO1FBQ3RDLGVBQWUsQ0FBQyxFQUFFLEVBQUUsR0FBRztZQUNyQixHQUFJLFNBQVMsZ0JBQWEsSUFBRyxJQUFJO1lBQ2pDLEdBQUksU0FBUyxVQUFLLElBQU0sSUFBRyxJQUFJO1lBQy9CLEdBQUksU0FBUyxVQUFLLE1BQVEsSUFBRyxJQUFJO1lBQ2pDLEdBQUMsVUFBVSxJQUFHLElBQUk7Z0JBQ2xCLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsdUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFFRCwwQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7Z0JBM0NGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsOEJBQThCO29CQUN4QyxtUkFBOEM7b0JBQzlDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxRQUFRLEVBQUUsYUFBYTtpQkFDeEI7Ozs7Z0JBakJDLFVBQVU7Z0JBSVYsU0FBUztnQkFJRixRQUFROzs7d0JBY2QsS0FBSzt1QkFDTCxLQUFLO3lCQUVMLEtBQUs7eUJBQ0wsS0FBSzs2QkFDTCxLQUFLO3NCQUVMLEtBQUs7MEJBQ0wsS0FBSzs7SUFMa0I7UUFBZCxXQUFXLEVBQUU7O3dEQUFnQjtJQUVYO1FBQWxCLFdBQVcsQ0FBQyxJQUFJLENBQUM7OzREQUFvQjtJQUV2QjtRQUFkLFdBQVcsRUFBRTs7cURBQWE7SUEyQnRDLDJCQUFDO0NBQUEsQUE1Q0QsSUE0Q0M7U0F0Q1ksb0JBQW9COzs7SUFDL0Isa0NBQXdCOztJQUd4QixxQ0FBMkM7O0lBQzNDLG9DQUFpQzs7Ozs7SUFFakMsc0NBQXVDOztJQUN2QyxzQ0FBMkM7O0lBQzNDLDBDQUErQzs7Ozs7SUFFL0MsbUNBQW9DOztJQUNwQyx1Q0FBMEI7O0lBSUUsbUNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHVwZGF0ZUhvc3RDbGFzcywgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBTVkNvbmZpZyB9IGZyb20gJy4vdmlldy5jb25maWcnO1xuXG5jb25zdCBwcmVmaXhDbHMgPSBgc3ZgO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdi1jb250YWluZXIsIFtzdi1jb250YWluZXJdJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3ZpZXctY29udGFpbmVyLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGV4cG9ydEFzOiAnc3ZDb250YWluZXInLFxufSlcbmV4cG9ydCBjbGFzcyBTVkNvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgcHJpdmF0ZSBlbDogSFRNTEVsZW1lbnQ7XG4gIC8vI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIHNpemU6ICdzbWFsbCcgfCAnbGFyZ2UnO1xuICAvKiog5YiX6KGo6aG56Ze06Led77yM5Y2V5L2N5Li6IGBweGAgKi9cbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgZ3V0dGVyOiBudW1iZXI7XG4gIEBJbnB1dCgpIGxheW91dDogJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJztcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKG51bGwpIGxhYmVsV2lkdGg6IG51bWJlcjtcbiAgLyoqIOaMh+WumuS/oeaBr+acgOWkmuWIhuWHoOWIl+Wxleekuu+8jOacgOe7iOS4gOihjOWHoOWIl+eUsSBjb2wg6YWN572u57uT5ZCI5ZON5bqU5byP6KeE5YiZ5Yaz5a6aICovXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGNvbDogbnVtYmVyO1xuICBASW5wdXQoKSBkZWZhdWx0OiBib29sZWFuO1xuXG4gIC8vI2VuZHJlZ2lvblxuXG4gIGNvbnN0cnVjdG9yKGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbjogUmVuZGVyZXIyLCBjb2c6IFNWQ29uZmlnKSB7XG4gICAgdGhpcy5lbCA9IGVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7IC4uLm5ldyBTVkNvbmZpZygpLCAuLi5jb2d9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0Q2xhc3MoKSB7XG4gICAgY29uc3QgeyBlbCwgcmVuLCBzaXplLCBsYXlvdXQgfSA9IHRoaXM7XG4gICAgdXBkYXRlSG9zdENsYXNzKGVsLCByZW4sIHtcbiAgICAgIFtgJHtwcmVmaXhDbHN9X19jb250YWluZXJgXTogdHJ1ZSxcbiAgICAgIFtgJHtwcmVmaXhDbHN9X18ke3NpemV9YF06IHRydWUsXG4gICAgICBbYCR7cHJlZml4Q2xzfV9fJHtsYXlvdXR9YF06IHRydWUsXG4gICAgICBbYGNsZWFyZml4YF06IHRydWUsXG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNldENsYXNzKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLnNldENsYXNzKCk7XG4gIH1cbn1cbiJdfQ==