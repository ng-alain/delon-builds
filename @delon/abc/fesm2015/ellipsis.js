import { __decorate, __metadata } from 'tslib';
import { Component, Input, HostBinding, Renderer2, ElementRef, NgModule } from '@angular/core';
import { InputNumber, DelonUtilModule } from '@delon/util';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class EllipsisComponent {
    /**
     * @param {?} el
     * @param {?} render
     */
    constructor(el, render) {
        /**
         * 在按照行数截取下最大的行数，超过则截取省略
         */
        this.lines = 3;
        render.setStyle(el.nativeElement, '-webkit-box-orient', 'vertical');
    }
}
EllipsisComponent.decorators = [
    { type: Component, args: [{
                selector: 'ellipsis',
                template: `<ng-content></ng-content>`,
                host: { '[class.ellipsis]': 'true' }
            }] }
];
/** @nocollapse */
EllipsisComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
EllipsisComponent.propDecorators = {
    lines: [{ type: Input }, { type: HostBinding, args: ['style.-webkit-line-clamp',] }]
};
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], EllipsisComponent.prototype, "lines", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [EllipsisComponent];
class EllipsisModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: EllipsisModule, providers: [] };
    }
}
EllipsisModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, DelonUtilModule],
                declarations: [...COMPONENTS],
                exports: [...COMPONENTS],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { EllipsisComponent, EllipsisModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxsaXBzaXMuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BkZWxvbi9hYmMvZWxsaXBzaXMvZWxsaXBzaXMuY29tcG9uZW50LnRzIiwibmc6Ly9AZGVsb24vYWJjL2VsbGlwc2lzL2VsbGlwc2lzLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBIb3N0QmluZGluZyxcclxuICBSZW5kZXJlcjIsXHJcbiAgRWxlbWVudFJlZixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2VsbGlwc2lzJyxcclxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxyXG4gIGhvc3Q6IHsgJ1tjbGFzcy5lbGxpcHNpc10nOiAndHJ1ZScgfSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEVsbGlwc2lzQ29tcG9uZW50IHtcclxuICAvKiogw6XCnMKow6bCjMKJw6fChcKnw6jCocKMw6bClcKww6bCiMKqw6XCj8KWw6TCuMKLw6bCnMKAw6XCpMKnw6fCmsKEw6jCocKMw6bClcKww6/CvMKMw6jCtsKFw6jCv8KHw6XCiMKZw6bCiMKqw6XCj8KWw6fCnMKBw6fClcKlICovXHJcbiAgQElucHV0KClcclxuICBASW5wdXROdW1iZXIoKVxyXG4gIEBIb3N0QmluZGluZygnc3R5bGUuLXdlYmtpdC1saW5lLWNsYW1wJylcclxuICBsaW5lcyA9IDM7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVsOiBFbGVtZW50UmVmLCByZW5kZXI6IFJlbmRlcmVyMikge1xyXG4gICAgcmVuZGVyLnNldFN0eWxlKGVsLm5hdGl2ZUVsZW1lbnQsICctd2Via2l0LWJveC1vcmllbnQnLCAndmVydGljYWwnKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRGVsb25VdGlsTW9kdWxlIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xyXG5cclxuaW1wb3J0IHsgRWxsaXBzaXNDb21wb25lbnQgfSBmcm9tICcuL2VsbGlwc2lzLmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCBDT01QT05FTlRTID0gW0VsbGlwc2lzQ29tcG9uZW50XTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRGVsb25VdGlsTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRTXSxcclxuICBleHBvcnRzOiBbLi4uQ09NUE9ORU5UU10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFbGxpcHNpc01vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4geyBuZ01vZHVsZTogRWxsaXBzaXNNb2R1bGUsIHByb3ZpZGVyczogW10gfTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0lBcUJFLFlBQVksRUFBYyxFQUFFLE1BQWlCOzs7O3FCQUZyQyxDQUFDO1FBR1AsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLG9CQUFvQixFQUFFLFVBQVUsQ0FBQyxDQUFDO0tBQ3JFOzs7WUFkRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLElBQUksRUFBRSxFQUFFLGtCQUFrQixFQUFFLE1BQU0sRUFBRTthQUNyQzs7OztZQVJDLFVBQVU7WUFEVixTQUFTOzs7b0JBWVIsS0FBSyxZQUVMLFdBQVcsU0FBQywwQkFBMEI7OztJQUR0QyxXQUFXLEVBQUU7Ozs7Ozs7O0FDakJoQjtBQU1BLE1BQU0sVUFBVSxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQU92Qzs7OztJQUNFLE9BQU8sT0FBTztRQUNaLE9BQU8sRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsQ0FBQztLQUNwRDs7O1lBUkYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxlQUFlLENBQUM7Z0JBQ3hDLFlBQVksRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDO2dCQUM3QixPQUFPLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQzthQUN6Qjs7Ozs7Ozs7Ozs7Ozs7OyJ9