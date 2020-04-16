/**
 * @fileoverview added by tsickle
 * Generated from: quick-menu.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, Renderer2, ViewEncapsulation, } from '@angular/core';
import { InputNumber } from '@delon/util';
var QuickMenuComponent = /** @class */ (function () {
    // #endregion
    function QuickMenuComponent(cdr, el, render) {
        this.cdr = cdr;
        this.el = el;
        this.render = render;
        this.ctrlStyle = {};
        // #region fields
        this.icon = 'question-circle';
        this.top = 120;
        this.width = 200;
        this.bgColor = '#fff';
        this.borderColor = '#ddd';
        this.show = false;
        this.initFlag = false;
    }
    /**
     * @return {?}
     */
    QuickMenuComponent.prototype._click = /**
     * @return {?}
     */
    function () {
        this.show = !this.show;
        this.setStyle();
    };
    /**
     * @private
     * @return {?}
     */
    QuickMenuComponent.prototype.setStyle = /**
     * @private
     * @return {?}
     */
    function () {
        this.ctrlStyle = {
            'background-color': this.bgColor,
            'border-color': this.borderColor,
        };
        /** @type {?} */
        var res = [
            "top:" + this.top + "px",
            "width:" + this.width + "px",
            "background-color:" + this.bgColor,
            "border-color:" + this.borderColor,
            "margin-right:-" + (this.show ? 0 : this.width) + "px",
        ];
        this.render.setAttribute(this.el.nativeElement, 'style', res.join(';'));
        this.cdr.detectChanges();
    };
    /**
     * @return {?}
     */
    QuickMenuComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.initFlag = true;
        this.setStyle();
    };
    /**
     * @return {?}
     */
    QuickMenuComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (this.initFlag)
            this.setStyle();
    };
    QuickMenuComponent.decorators = [
        { type: Component, args: [{
                    selector: 'quick-menu',
                    exportAs: 'quickMenu',
                    template: "<div class=\"quick-menu__inner\">\n  <div class=\"quick-menu__ctrl\" [ngStyle]=\"ctrlStyle\">\n    <div class=\"quick-menu__ctrl-icon\">\n      <ng-container *nzStringTemplateOutlet=\"icon\">\n        <i nz-icon [nzType]=\"icon\"></i>\n      </ng-container>\n    </div>\n  </div>\n  <ng-content></ng-content>\n</div>\n",
                    host: {
                        '[class.quick-menu]': 'true',
                        '(click)': '_click()',
                    },
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    QuickMenuComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    QuickMenuComponent.propDecorators = {
        icon: [{ type: Input }],
        top: [{ type: Input }],
        width: [{ type: Input }],
        bgColor: [{ type: Input }],
        borderColor: [{ type: Input }]
    };
    __decorate([
        InputNumber(),
        __metadata("design:type", Object)
    ], QuickMenuComponent.prototype, "top", void 0);
    __decorate([
        InputNumber(),
        __metadata("design:type", Object)
    ], QuickMenuComponent.prototype, "width", void 0);
    return QuickMenuComponent;
}());
export { QuickMenuComponent };
if (false) {
    /** @type {?} */
    QuickMenuComponent.prototype.ctrlStyle;
    /** @type {?} */
    QuickMenuComponent.prototype.icon;
    /** @type {?} */
    QuickMenuComponent.prototype.top;
    /** @type {?} */
    QuickMenuComponent.prototype.width;
    /** @type {?} */
    QuickMenuComponent.prototype.bgColor;
    /** @type {?} */
    QuickMenuComponent.prototype.borderColor;
    /**
     * @type {?}
     * @private
     */
    QuickMenuComponent.prototype.show;
    /**
     * @type {?}
     * @private
     */
    QuickMenuComponent.prototype.initFlag;
    /**
     * @type {?}
     * @private
     */
    QuickMenuComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    QuickMenuComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    QuickMenuComponent.prototype.render;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpY2stbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL3F1aWNrLW1lbnUvIiwic291cmNlcyI6WyJxdWljay1tZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFHTCxTQUFTLEVBRVQsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFMUM7SUFhRSxhQUFhO0lBRWIsNEJBQW9CLEdBQXNCLEVBQVUsRUFBYyxFQUFVLE1BQWlCO1FBQXpFLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDN0YsY0FBUyxHQUE4QixFQUFFLENBQUM7O1FBSWpDLFNBQUksR0FBK0IsaUJBQWlCLENBQUM7UUFDdEMsUUFBRyxHQUFHLEdBQUcsQ0FBQztRQUNWLFVBQUssR0FBRyxHQUFHLENBQUM7UUFDM0IsWUFBTyxHQUFHLE1BQU0sQ0FBQztRQUNqQixnQkFBVyxHQUFHLE1BQU0sQ0FBQztRQUV0QixTQUFJLEdBQUcsS0FBSyxDQUFDO1FBRWIsYUFBUSxHQUFHLEtBQUssQ0FBQztJQWJ1RSxDQUFDOzs7O0lBZWpHLG1DQUFNOzs7SUFBTjtRQUNFLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDOzs7OztJQUVPLHFDQUFROzs7O0lBQWhCO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRztZQUNmLGtCQUFrQixFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ2hDLGNBQWMsRUFBRSxJQUFJLENBQUMsV0FBVztTQUNqQyxDQUFDOztZQUVJLEdBQUcsR0FBYTtZQUNwQixTQUFPLElBQUksQ0FBQyxHQUFHLE9BQUk7WUFDbkIsV0FBUyxJQUFJLENBQUMsS0FBSyxPQUFJO1lBQ3ZCLHNCQUFvQixJQUFJLENBQUMsT0FBUztZQUNsQyxrQkFBZ0IsSUFBSSxDQUFDLFdBQWE7WUFDbEMsb0JBQWlCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssUUFBSTtTQUNoRDtRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7O0lBQ0QscUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFDRCx3Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxRQUFRO1lBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3JDLENBQUM7O2dCQXpERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFFBQVEsRUFBRSxXQUFXO29CQUNyQiwwVUFBMEM7b0JBQzFDLElBQUksRUFBRTt3QkFDSixvQkFBb0IsRUFBRSxNQUFNO3dCQUM1QixTQUFTLEVBQUUsVUFBVTtxQkFDdEI7b0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUN0Qzs7OztnQkF4QkMsaUJBQWlCO2dCQUVqQixVQUFVO2dCQUlWLFNBQVM7Ozt1QkEyQlIsS0FBSztzQkFDTCxLQUFLO3dCQUNMLEtBQUs7MEJBQ0wsS0FBSzs4QkFDTCxLQUFLOztJQUhrQjtRQUFkLFdBQVcsRUFBRTs7bURBQVc7SUFDVjtRQUFkLFdBQVcsRUFBRTs7cURBQWE7SUFvQ3RDLHlCQUFDO0NBQUEsQUExREQsSUEwREM7U0E5Q1ksa0JBQWtCOzs7SUFJN0IsdUNBQTBDOztJQUkxQyxrQ0FBOEQ7O0lBQzlELGlDQUFrQzs7SUFDbEMsbUNBQW9DOztJQUNwQyxxQ0FBMEI7O0lBQzFCLHlDQUE4Qjs7Ozs7SUFFOUIsa0NBQXFCOzs7OztJQUVyQixzQ0FBeUI7Ozs7O0lBYmIsaUNBQThCOzs7OztJQUFFLGdDQUFzQjs7Ozs7SUFBRSxvQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdxdWljay1tZW51JyxcbiAgZXhwb3J0QXM6ICdxdWlja01lbnUnLFxuICB0ZW1wbGF0ZVVybDogJy4vcXVpY2stbWVudS5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLnF1aWNrLW1lbnVdJzogJ3RydWUnLFxuICAgICcoY2xpY2spJzogJ19jbGljaygpJyxcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBRdWlja01lbnVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyOiBSZW5kZXJlcjIpIHt9XG4gIGN0cmxTdHlsZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KCkgaWNvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gPSAncXVlc3Rpb24tY2lyY2xlJztcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgdG9wID0gMTIwO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSB3aWR0aCA9IDIwMDtcbiAgQElucHV0KCkgYmdDb2xvciA9ICcjZmZmJztcbiAgQElucHV0KCkgYm9yZGVyQ29sb3IgPSAnI2RkZCc7XG5cbiAgcHJpdmF0ZSBzaG93ID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBpbml0RmxhZyA9IGZhbHNlO1xuXG4gIF9jbGljaygpIHtcbiAgICB0aGlzLnNob3cgPSAhdGhpcy5zaG93O1xuICAgIHRoaXMuc2V0U3R5bGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0U3R5bGUoKSB7XG4gICAgdGhpcy5jdHJsU3R5bGUgPSB7XG4gICAgICAnYmFja2dyb3VuZC1jb2xvcic6IHRoaXMuYmdDb2xvcixcbiAgICAgICdib3JkZXItY29sb3InOiB0aGlzLmJvcmRlckNvbG9yLFxuICAgIH07XG5cbiAgICBjb25zdCByZXM6IHN0cmluZ1tdID0gW1xuICAgICAgYHRvcDoke3RoaXMudG9wfXB4YCxcbiAgICAgIGB3aWR0aDoke3RoaXMud2lkdGh9cHhgLFxuICAgICAgYGJhY2tncm91bmQtY29sb3I6JHt0aGlzLmJnQ29sb3J9YCxcbiAgICAgIGBib3JkZXItY29sb3I6JHt0aGlzLmJvcmRlckNvbG9yfWAsXG4gICAgICBgbWFyZ2luLXJpZ2h0Oi0ke3RoaXMuc2hvdyA/IDAgOiB0aGlzLndpZHRofXB4YCxcbiAgICBdO1xuICAgIHRoaXMucmVuZGVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdzdHlsZScsIHJlcy5qb2luKCc7JykpO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmluaXRGbGFnID0gdHJ1ZTtcbiAgICB0aGlzLnNldFN0eWxlKCk7XG4gIH1cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW5pdEZsYWcpIHRoaXMuc2V0U3R5bGUoKTtcbiAgfVxufVxuIl19