/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostListener, Input, Renderer2, } from '@angular/core';
import { InputNumber } from '@delon/util';
var QuickMenuComponent = /** @class */ (function () {
    // #endregion
    function QuickMenuComponent(cd, el, render) {
        this.cd = cd;
        this.el = el;
        this.render = render;
        // #region fields
        this.icon = 'question-circle';
        this.top = 120;
        this.width = 200;
        this.bgColor = '#fff';
        this.borderColor = '#ddd';
        this.show = false;
        this.ctrlStyle = {};
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
     * @return {?}
     */
    QuickMenuComponent.prototype.setStyle = /**
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
        this.cd.detectChanges();
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
                    template: "<div class=\"quick-menu__inner\">\n  <div class=\"quick-menu__ctrl\" [ngStyle]=\"ctrlStyle\">\n    <div class=\"quick-menu__ctrl-icon\">\n      <ng-container *stringTemplateOutlet=\"icon\"><i nz-icon [type]=\"icon\"></i></ng-container>\n    </div>\n  </div>\n  <ng-content></ng-content>\n</div>",
                    host: { '[class.quick-menu]': 'true' },
                    changeDetection: ChangeDetectionStrategy.OnPush
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
        borderColor: [{ type: Input }],
        _click: [{ type: HostListener, args: ['click',] }]
    };
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Object)
    ], QuickMenuComponent.prototype, "top", void 0);
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Object)
    ], QuickMenuComponent.prototype, "width", void 0);
    return QuickMenuComponent;
}());
export { QuickMenuComponent };
if (false) {
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
    /** @type {?} */
    QuickMenuComponent.prototype.show;
    /** @type {?} */
    QuickMenuComponent.prototype.ctrlStyle;
    /** @type {?} */
    QuickMenuComponent.prototype.initFlag;
    /** @type {?} */
    QuickMenuComponent.prototype.cd;
    /** @type {?} */
    QuickMenuComponent.prototype.el;
    /** @type {?} */
    QuickMenuComponent.prototype.render;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpY2stbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVsb24vYWJjL3F1aWNrLW1lbnUvIiwic291cmNlcyI6WyJxdWljay1tZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFHTCxTQUFTLEdBRVYsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUUxQztJQWVFLGFBQWE7SUFFYiw0QkFDVSxFQUFxQixFQUNyQixFQUFjLEVBQ2QsTUFBaUI7UUFGakIsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFDckIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNkLFdBQU0sR0FBTixNQUFNLENBQVc7O1FBWGxCLFNBQUksR0FBK0IsaUJBQWlCLENBQUM7UUFDdEMsUUFBRyxHQUFHLEdBQUcsQ0FBQztRQUNWLFVBQUssR0FBRyxHQUFHLENBQUM7UUFDM0IsWUFBTyxHQUFHLE1BQU0sQ0FBQztRQUNqQixnQkFBVyxHQUFHLE1BQU0sQ0FBQztRQVV0QixTQUFJLEdBQUcsS0FBSyxDQUFDO1FBUXJCLGNBQVMsR0FBOEIsRUFBRSxDQUFDO1FBa0JsQyxhQUFRLEdBQUcsS0FBSyxDQUFDO0lBNUJyQixDQUFDOzs7O0lBS0wsbUNBQU07OztJQUROO1FBRUUsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFHTyxxQ0FBUTs7O0lBQWhCO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRztZQUNmLGtCQUFrQixFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ2hDLGNBQWMsRUFBRSxJQUFJLENBQUMsV0FBVztTQUNqQyxDQUFDOztZQUVJLEdBQUcsR0FBYTtZQUNwQixTQUFPLElBQUksQ0FBQyxHQUFHLE9BQUk7WUFDbkIsV0FBUyxJQUFJLENBQUMsS0FBSyxPQUFJO1lBQ3ZCLHNCQUFvQixJQUFJLENBQUMsT0FBUztZQUNsQyxrQkFBZ0IsSUFBSSxDQUFDLFdBQWE7WUFDbEMsb0JBQWlCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssUUFBSTtTQUNoRDtRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7O0lBR0QscUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFDRCx3Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxRQUFRO1lBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3JDLENBQUM7O2dCQXhERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLGtUQUEwQztvQkFDMUMsSUFBSSxFQUFFLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFO29CQUN0QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7Ozs7Z0JBbEJDLGlCQUFpQjtnQkFFakIsVUFBVTtnQkFLVixTQUFTOzs7dUJBZVIsS0FBSztzQkFDTCxLQUFLO3dCQUNMLEtBQUs7MEJBQ0wsS0FBSzs4QkFDTCxLQUFLO3lCQVlMLFlBQVksU0FBQyxPQUFPOztJQWZHO1FBQWQsV0FBVyxFQUFFOzttREFBVztJQUNWO1FBQWQsV0FBVyxFQUFFOztxREFBYTtJQThDdEMseUJBQUM7Q0FBQSxBQXpERCxJQXlEQztTQW5EWSxrQkFBa0I7OztJQUc3QixrQ0FBOEQ7O0lBQzlELGlDQUFrQzs7SUFDbEMsbUNBQW9DOztJQUNwQyxxQ0FBMEI7O0lBQzFCLHlDQUE4Qjs7SUFVOUIsa0NBQXFCOztJQVFyQix1Q0FBMEM7O0lBa0IxQyxzQ0FBeUI7O0lBL0J2QixnQ0FBNkI7O0lBQzdCLGdDQUFzQjs7SUFDdEIsb0NBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3F1aWNrLW1lbnUnLFxuICB0ZW1wbGF0ZVVybDogJy4vcXVpY2stbWVudS5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHsgJ1tjbGFzcy5xdWljay1tZW51XSc6ICd0cnVlJyB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUXVpY2tNZW51Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCgpIGljb246IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+ID0gJ3F1ZXN0aW9uLWNpcmNsZSc7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHRvcCA9IDEyMDtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgd2lkdGggPSAyMDA7XG4gIEBJbnB1dCgpIGJnQ29sb3IgPSAnI2ZmZic7XG4gIEBJbnB1dCgpIGJvcmRlckNvbG9yID0gJyNkZGQnO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyOiBSZW5kZXJlcjIsXG4gICkgeyB9XG5cbiAgcHJpdmF0ZSBzaG93ID0gZmFsc2U7XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBfY2xpY2soKSB7XG4gICAgdGhpcy5zaG93ID0gIXRoaXMuc2hvdztcbiAgICB0aGlzLnNldFN0eWxlKCk7XG4gIH1cblxuICBjdHJsU3R5bGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcbiAgcHJpdmF0ZSBzZXRTdHlsZSgpIHtcbiAgICB0aGlzLmN0cmxTdHlsZSA9IHtcbiAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogdGhpcy5iZ0NvbG9yLFxuICAgICAgJ2JvcmRlci1jb2xvcic6IHRoaXMuYm9yZGVyQ29sb3IsXG4gICAgfTtcblxuICAgIGNvbnN0IHJlczogc3RyaW5nW10gPSBbXG4gICAgICBgdG9wOiR7dGhpcy50b3B9cHhgLFxuICAgICAgYHdpZHRoOiR7dGhpcy53aWR0aH1weGAsXG4gICAgICBgYmFja2dyb3VuZC1jb2xvcjoke3RoaXMuYmdDb2xvcn1gLFxuICAgICAgYGJvcmRlci1jb2xvcjoke3RoaXMuYm9yZGVyQ29sb3J9YCxcbiAgICAgIGBtYXJnaW4tcmlnaHQ6LSR7dGhpcy5zaG93ID8gMCA6IHRoaXMud2lkdGh9cHhgLFxuICAgIF07XG4gICAgdGhpcy5yZW5kZXIuc2V0QXR0cmlidXRlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3N0eWxlJywgcmVzLmpvaW4oJzsnKSk7XG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBwcml2YXRlIGluaXRGbGFnID0gZmFsc2U7XG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaW5pdEZsYWcgPSB0cnVlO1xuICAgIHRoaXMuc2V0U3R5bGUoKTtcbiAgfVxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pbml0RmxhZykgdGhpcy5zZXRTdHlsZSgpO1xuICB9XG59XG4iXX0=