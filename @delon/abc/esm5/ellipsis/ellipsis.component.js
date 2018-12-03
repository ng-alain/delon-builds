/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, HostBinding, Renderer2, ElementRef, } from '@angular/core';
import { InputNumber } from '@delon/util';
var EllipsisComponent = /** @class */ (function () {
    function EllipsisComponent(el, render) {
        /**
         * 在按照行数截取下最大的行数，超过则截取省略
         */
        this.lines = 3;
        render.setStyle(el.nativeElement, '-webkit-box-orient', 'vertical');
    }
    EllipsisComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ellipsis',
                    template: "<ng-content></ng-content>",
                    host: { '[class.ellipsis]': 'true' }
                }] }
    ];
    /** @nocollapse */
    EllipsisComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    EllipsisComponent.propDecorators = {
        lines: [{ type: Input }, { type: HostBinding, args: ['style.-webkit-line-clamp',] }]
    };
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Object)
    ], EllipsisComponent.prototype, "lines", void 0);
    return EllipsisComponent;
}());
export { EllipsisComponent };
if (false) {
    /**
     * 在按照行数截取下最大的行数，超过则截取省略
     * @type {?}
     */
    EllipsisComponent.prototype.lines;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxsaXBzaXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9lbGxpcHNpcy8iLCJzb3VyY2VzIjpbImVsbGlwc2lzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFdBQVcsRUFDWCxTQUFTLEVBQ1QsVUFBVSxHQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFMUM7SUFZRSwyQkFBWSxFQUFjLEVBQUUsTUFBaUI7Ozs7UUFGN0MsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUdSLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxvQkFBb0IsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUN0RSxDQUFDOztnQkFkRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLElBQUksRUFBRSxFQUFFLGtCQUFrQixFQUFFLE1BQU0sRUFBRTtpQkFDckM7Ozs7Z0JBUkMsVUFBVTtnQkFEVixTQUFTOzs7d0JBWVIsS0FBSyxZQUVMLFdBQVcsU0FBQywwQkFBMEI7O0lBQ3ZDO1FBRkMsV0FBVyxFQUFFOztvREFFSjtJQUtaLHdCQUFDO0NBQUEsQUFmRCxJQWVDO1NBVlksaUJBQWlCOzs7Ozs7SUFFNUIsa0NBR1UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBIb3N0QmluZGluZyxcbiAgUmVuZGVyZXIyLFxuICBFbGVtZW50UmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlbGxpcHNpcycsXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXG4gIGhvc3Q6IHsgJ1tjbGFzcy5lbGxpcHNpc10nOiAndHJ1ZScgfSxcbn0pXG5leHBvcnQgY2xhc3MgRWxsaXBzaXNDb21wb25lbnQge1xuICAvKiog5Zyo5oyJ54Wn6KGM5pWw5oiq5Y+W5LiL5pyA5aSn55qE6KGM5pWw77yM6LaF6L+H5YiZ5oiq5Y+W55yB55WlICovXG4gIEBJbnB1dCgpXG4gIEBJbnB1dE51bWJlcigpXG4gIEBIb3N0QmluZGluZygnc3R5bGUuLXdlYmtpdC1saW5lLWNsYW1wJylcbiAgbGluZXMgPSAzO1xuXG4gIGNvbnN0cnVjdG9yKGVsOiBFbGVtZW50UmVmLCByZW5kZXI6IFJlbmRlcmVyMikge1xuICAgIHJlbmRlci5zZXRTdHlsZShlbC5uYXRpdmVFbGVtZW50LCAnLXdlYmtpdC1ib3gtb3JpZW50JywgJ3ZlcnRpY2FsJyk7XG4gIH1cbn1cbiJdfQ==