/**
 * @fileoverview added by tsickle
 * Generated from: quick-menu.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, Renderer2, ViewEncapsulation, } from '@angular/core';
import { InputNumber } from '@delon/util';
export class QuickMenuComponent {
    /**
     * @param {?} cdr
     * @param {?} el
     * @param {?} render
     */
    constructor(cdr, el, render) {
        this.cdr = cdr;
        this.el = el;
        this.render = render;
        this.ctrlStyle = {};
        this.icon = 'question-circle';
        this.top = 120;
        this.width = 200;
        this.show = false;
        this.initFlag = false;
    }
    /**
     * @return {?}
     */
    _click() {
        this.show = !this.show;
        this.setStyle();
    }
    /**
     * @private
     * @return {?}
     */
    setStyle() {
        this.ctrlStyle = {
            'background-color': this.bgColor,
            'border-color': this.borderColor,
        };
        /** @type {?} */
        const res = [`top:${this.top}px`, `width:${this.width}px`, `margin-right:-${this.show ? 0 : this.width}px`];
        if (this.bgColor) {
            res.push(`background-color:${this.bgColor}`);
        }
        if (this.borderColor) {
            res.push(`border-color:${this.borderColor}`);
        }
        this.render.setAttribute(this.el.nativeElement, 'style', res.join(';'));
        this.cdr.detectChanges();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initFlag = true;
        this.setStyle();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.initFlag)
            this.setStyle();
    }
}
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
QuickMenuComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: Renderer2 }
];
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
if (false) {
    /** @type {?} */
    QuickMenuComponent.ngAcceptInputType_top;
    /** @type {?} */
    QuickMenuComponent.ngAcceptInputType_width;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpY2stbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3F1aWNrLW1lbnUvIiwic291cmNlcyI6WyJxdWljay1tZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFHTCxTQUFTLEVBRVQsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxXQUFXLEVBQWUsTUFBTSxhQUFhLENBQUM7QUFjdkQsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7O0lBSTdCLFlBQW9CLEdBQXNCLEVBQVUsRUFBYyxFQUFVLE1BQWlCO1FBQXpFLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDN0YsY0FBUyxHQUE4QixFQUFFLENBQUM7UUFFakMsU0FBSSxHQUErQixpQkFBaUIsQ0FBQztRQUN0QyxRQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ1YsVUFBSyxHQUFHLEdBQUcsQ0FBQztRQUk1QixTQUFJLEdBQUcsS0FBSyxDQUFDO1FBRWIsYUFBUSxHQUFHLEtBQUssQ0FBQztJQVh1RSxDQUFDOzs7O0lBYWpHLE1BQU07UUFDSixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7Ozs7SUFFTyxRQUFRO1FBQ2QsSUFBSSxDQUFDLFNBQVMsR0FBRztZQUNmLGtCQUFrQixFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ2hDLGNBQWMsRUFBRSxJQUFJLENBQUMsV0FBVztTQUNqQyxDQUFDOztjQUVJLEdBQUcsR0FBYSxDQUFDLE9BQU8sSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUFFLFNBQVMsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLGlCQUFpQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQztRQUNySCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsR0FBRyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7U0FDOUM7UUFDRCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7U0FDOUM7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7OztJQUNELFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7OztJQUNELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxRQUFRO1lBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3JDLENBQUM7OztZQXhERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFFBQVEsRUFBRSxXQUFXO2dCQUNyQiwwVUFBMEM7Z0JBQzFDLElBQUksRUFBRTtvQkFDSixvQkFBb0IsRUFBRSxNQUFNO29CQUM1QixTQUFTLEVBQUUsVUFBVTtpQkFDdEI7Z0JBQ0QsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDOzs7O1lBeEJDLGlCQUFpQjtZQUVqQixVQUFVO1lBSVYsU0FBUzs7O21CQTBCUixLQUFLO2tCQUNMLEtBQUs7b0JBQ0wsS0FBSztzQkFDTCxLQUFLOzBCQUNMLEtBQUs7O0FBSGtCO0lBQWQsV0FBVyxFQUFFOzsrQ0FBVztBQUNWO0lBQWQsV0FBVyxFQUFFOztpREFBYTs7O0lBUnBDLHlDQUEwQzs7SUFDMUMsMkNBQTRDOztJQUc1Qyx1Q0FBMEM7O0lBRTFDLGtDQUE4RDs7SUFDOUQsaUNBQWtDOztJQUNsQyxtQ0FBb0M7O0lBQ3BDLHFDQUF5Qjs7SUFDekIseUNBQTZCOzs7OztJQUU3QixrQ0FBcUI7Ozs7O0lBRXJCLHNDQUF5Qjs7Ozs7SUFYYixpQ0FBOEI7Ozs7O0lBQUUsZ0NBQXNCOzs7OztJQUFFLG9DQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSW5wdXROdW1iZXIsIE51bWJlcklucHV0IH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdxdWljay1tZW51JyxcbiAgZXhwb3J0QXM6ICdxdWlja01lbnUnLFxuICB0ZW1wbGF0ZVVybDogJy4vcXVpY2stbWVudS5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLnF1aWNrLW1lbnVdJzogJ3RydWUnLFxuICAgICcoY2xpY2spJzogJ19jbGljaygpJyxcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBRdWlja01lbnVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV90b3A6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfd2lkdGg6IE51bWJlcklucHV0O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXI6IFJlbmRlcmVyMikge31cbiAgY3RybFN0eWxlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XG5cbiAgQElucHV0KCkgaWNvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gPSAncXVlc3Rpb24tY2lyY2xlJztcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgdG9wID0gMTIwO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSB3aWR0aCA9IDIwMDtcbiAgQElucHV0KCkgYmdDb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSBib3JkZXJDb2xvcjogc3RyaW5nO1xuXG4gIHByaXZhdGUgc2hvdyA9IGZhbHNlO1xuXG4gIHByaXZhdGUgaW5pdEZsYWcgPSBmYWxzZTtcblxuICBfY2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5zaG93ID0gIXRoaXMuc2hvdztcbiAgICB0aGlzLnNldFN0eWxlKCk7XG4gIH1cblxuICBwcml2YXRlIHNldFN0eWxlKCk6IHZvaWQge1xuICAgIHRoaXMuY3RybFN0eWxlID0ge1xuICAgICAgJ2JhY2tncm91bmQtY29sb3InOiB0aGlzLmJnQ29sb3IsXG4gICAgICAnYm9yZGVyLWNvbG9yJzogdGhpcy5ib3JkZXJDb2xvcixcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzOiBzdHJpbmdbXSA9IFtgdG9wOiR7dGhpcy50b3B9cHhgLCBgd2lkdGg6JHt0aGlzLndpZHRofXB4YCwgYG1hcmdpbi1yaWdodDotJHt0aGlzLnNob3cgPyAwIDogdGhpcy53aWR0aH1weGBdO1xuICAgIGlmICh0aGlzLmJnQ29sb3IpIHtcbiAgICAgIHJlcy5wdXNoKGBiYWNrZ3JvdW5kLWNvbG9yOiR7dGhpcy5iZ0NvbG9yfWApO1xuICAgIH1cbiAgICBpZiAodGhpcy5ib3JkZXJDb2xvcikge1xuICAgICAgcmVzLnB1c2goYGJvcmRlci1jb2xvcjoke3RoaXMuYm9yZGVyQ29sb3J9YCk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdzdHlsZScsIHJlcy5qb2luKCc7JykpO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmluaXRGbGFnID0gdHJ1ZTtcbiAgICB0aGlzLnNldFN0eWxlKCk7XG4gIH1cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW5pdEZsYWcpIHRoaXMuc2V0U3R5bGUoKTtcbiAgfVxufVxuIl19