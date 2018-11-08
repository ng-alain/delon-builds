import { __decorate, __metadata, __spread } from 'tslib';
import { Component, Input, HostBinding, Renderer2, ElementRef, NgModule } from '@angular/core';
import { InputNumber, DelonUtilModule } from '@delon/util';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
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
    __decorate([
        InputNumber(),
        __metadata("design:type", Object)
    ], EllipsisComponent.prototype, "lines", void 0);
    return EllipsisComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var COMPONENTS = [EllipsisComponent];
var EllipsisModule = /** @class */ (function () {
    function EllipsisModule() {
    }
    /**
     * @return {?}
     */
    EllipsisModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: EllipsisModule, providers: [] };
    };
    EllipsisModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, DelonUtilModule],
                    declarations: __spread(COMPONENTS),
                    exports: __spread(COMPONENTS),
                },] }
    ];
    return EllipsisModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { EllipsisComponent, EllipsisModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxsaXBzaXMuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BkZWxvbi9hYmMvZWxsaXBzaXMvZWxsaXBzaXMuY29tcG9uZW50LnRzIiwibmc6Ly9AZGVsb24vYWJjL2VsbGlwc2lzL2VsbGlwc2lzLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBIb3N0QmluZGluZyxcbiAgUmVuZGVyZXIyLFxuICBFbGVtZW50UmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlbGxpcHNpcycsXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXG4gIGhvc3Q6IHsgJ1tjbGFzcy5lbGxpcHNpc10nOiAndHJ1ZScgfSxcbn0pXG5leHBvcnQgY2xhc3MgRWxsaXBzaXNDb21wb25lbnQge1xuICAvKiogw6XCnMKow6bCjMKJw6fChcKnw6jCocKMw6bClcKww6bCiMKqw6XCj8KWw6TCuMKLw6bCnMKAw6XCpMKnw6fCmsKEw6jCocKMw6bClcKww6/CvMKMw6jCtsKFw6jCv8KHw6XCiMKZw6bCiMKqw6XCj8KWw6fCnMKBw6fClcKlICovXG4gIEBJbnB1dCgpXG4gIEBJbnB1dE51bWJlcigpXG4gIEBIb3N0QmluZGluZygnc3R5bGUuLXdlYmtpdC1saW5lLWNsYW1wJylcbiAgbGluZXMgPSAzO1xuXG4gIGNvbnN0cnVjdG9yKGVsOiBFbGVtZW50UmVmLCByZW5kZXI6IFJlbmRlcmVyMikge1xuICAgIHJlbmRlci5zZXRTdHlsZShlbC5uYXRpdmVFbGVtZW50LCAnLXdlYmtpdC1ib3gtb3JpZW50JywgJ3ZlcnRpY2FsJyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRGVsb25VdGlsTW9kdWxlIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5pbXBvcnQgeyBFbGxpcHNpc0NvbXBvbmVudCB9IGZyb20gJy4vZWxsaXBzaXMuY29tcG9uZW50JztcblxuY29uc3QgQ09NUE9ORU5UUyA9IFtFbGxpcHNpc0NvbXBvbmVudF07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIERlbG9uVXRpbE1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogWy4uLkNPTVBPTkVOVFNdLFxuICBleHBvcnRzOiBbLi4uQ09NUE9ORU5UU10sXG59KVxuZXhwb3J0IGNsYXNzIEVsbGlwc2lzTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHsgbmdNb2R1bGU6IEVsbGlwc2lzTW9kdWxlLCBwcm92aWRlcnM6IFtdIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJ0c2xpYl8xLl9fZGVjb3JhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFxQkUsMkJBQVksRUFBYyxFQUFFLE1BQWlCOzs7O1FBRjdDLFVBQUssR0FBRyxDQUFDLENBQUM7UUFHUixNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsb0JBQW9CLEVBQUUsVUFBVSxDQUFDLENBQUM7S0FDckU7O2dCQWRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsSUFBSSxFQUFFLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxFQUFFO2lCQUNyQzs7OztnQkFSQyxVQUFVO2dCQURWLFNBQVM7Ozt3QkFZUixLQUFLLFlBRUwsV0FBVyxTQUFDLDBCQUEwQjs7SUFDdkNBO1FBRkMsV0FBVyxFQUFFOztvREFFSjtJQUtaLHdCQUFDO0NBZkQ7Ozs7Ozs7SUNITSxVQUFVLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQztBQUV0QztJQUFBO0tBU0M7Ozs7SUFIUSxzQkFBTzs7O0lBQWQ7UUFDRSxPQUFPLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUM7S0FDcEQ7O2dCQVJGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZUFBZSxDQUFDO29CQUN4QyxZQUFZLFdBQU0sVUFBVSxDQUFDO29CQUM3QixPQUFPLFdBQU0sVUFBVSxDQUFDO2lCQUN6Qjs7SUFLRCxxQkFBQztDQVREOzs7Ozs7Ozs7Ozs7OzsifQ==