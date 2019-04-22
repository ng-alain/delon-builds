/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, Inject, Input, Renderer2, } from '@angular/core';
import { InputBoolean } from '@delon/util';
/** @type {?} */
var CLSBODY = 'footer-toolbar__body';
var FooterToolbarComponent = /** @class */ (function () {
    function FooterToolbarComponent(el, renderer, doc) {
        this.el = el;
        this.renderer = renderer;
        this.doc = doc;
        this.errorCollect = false;
    }
    Object.defineProperty(FooterToolbarComponent.prototype, "bodyCls", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this.doc.querySelector('body').classList;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FooterToolbarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.renderer.addClass(this.el.nativeElement, 'footer-toolbar');
        this.bodyCls.add(CLSBODY);
    };
    /**
     * @return {?}
     */
    FooterToolbarComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.bodyCls.remove(CLSBODY);
    };
    FooterToolbarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'footer-toolbar',
                    exportAs: 'footerToolbar',
                    template: "<div class=\"footer-toolbar__left\">\n  <ng-container *stringTemplateOutlet=\"extra\">{{ extra }}</ng-container>\n</div>\n<div class=\"footer-toolbar__right\">\n  <error-collect *ngIf=\"errorCollect\"></error-collect>\n  <ng-content></ng-content>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    FooterToolbarComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    FooterToolbarComponent.propDecorators = {
        errorCollect: [{ type: Input }],
        extra: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], FooterToolbarComponent.prototype, "errorCollect", void 0);
    return FooterToolbarComponent;
}());
export { FooterToolbarComponent };
if (false) {
    /** @type {?} */
    FooterToolbarComponent.prototype.errorCollect;
    /** @type {?} */
    FooterToolbarComponent.prototype.extra;
    /**
     * @type {?}
     * @private
     */
    FooterToolbarComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    FooterToolbarComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    FooterToolbarComponent.prototype.doc;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLXRvb2xiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9mb290ZXItdG9vbGJhci8iLCJzb3VyY2VzIjpbImZvb3Rlci10b29sYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsTUFBTSxFQUNOLEtBQUssRUFHTCxTQUFTLEdBRVYsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGFBQWEsQ0FBQzs7SUFFckMsT0FBTyxHQUFHLHNCQUFzQjtBQUV0QztJQVVFLGdDQUFvQixFQUFjLEVBQVUsUUFBbUIsRUFBNEIsR0FBUTtRQUEvRSxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUE0QixRQUFHLEdBQUgsR0FBRyxDQUFLO1FBSDFFLGlCQUFZLEdBQUcsS0FBSyxDQUFDO0lBR3dELENBQUM7SUFFdkcsc0JBQVksMkNBQU87Ozs7O1FBQW5CO1lBQ0UsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDbEQsQ0FBQzs7O09BQUE7Ozs7SUFFRCx5Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCw0Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvQixDQUFDOztnQkF2QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFFBQVEsRUFBRSxlQUFlO29CQUN6Qiw0UUFBOEM7b0JBQzlDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkFqQkMsVUFBVTtnQkFLVixTQUFTO2dEQWlCeUQsTUFBTSxTQUFDLFFBQVE7OzsrQkFIaEYsS0FBSzt3QkFDTCxLQUFLOztJQURtQjtRQUFmLFlBQVksRUFBRTs7Z0VBQXNCO0lBaUJoRCw2QkFBQztDQUFBLEFBeEJELElBd0JDO1NBbEJZLHNCQUFzQjs7O0lBQ2pDLDhDQUE4Qzs7SUFDOUMsdUNBQTJDOzs7OztJQUUvQixvQ0FBc0I7Ozs7O0lBQUUsMENBQTJCOzs7OztJQUFFLHFDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuY29uc3QgQ0xTQk9EWSA9ICdmb290ZXItdG9vbGJhcl9fYm9keSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zvb3Rlci10b29sYmFyJyxcbiAgZXhwb3J0QXM6ICdmb290ZXJUb29sYmFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Zvb3Rlci10b29sYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEZvb3RlclRvb2xiYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBlcnJvckNvbGxlY3QgPSBmYWxzZTtcbiAgQElucHV0KCkgZXh0cmE6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IGFueSkge31cblxuICBwcml2YXRlIGdldCBib2R5Q2xzKCkge1xuICAgIHJldHVybiB0aGlzLmRvYy5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0O1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdmb290ZXItdG9vbGJhcicpO1xuICAgIHRoaXMuYm9keUNscy5hZGQoQ0xTQk9EWSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmJvZHlDbHMucmVtb3ZlKENMU0JPRFkpO1xuICB9XG59XG4iXX0=