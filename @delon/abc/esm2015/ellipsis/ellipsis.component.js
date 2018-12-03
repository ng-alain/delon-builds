/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input, Renderer2, } from '@angular/core';
import { InputNumber } from '@delon/util';
export class EllipsisComponent {
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
                template: `
    <ng-content></ng-content>
  `,
                host: { '[class.ellipsis]': 'true' },
                changeDetection: ChangeDetectionStrategy.OnPush
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
tslib_1.__decorate([
    InputNumber(),
    tslib_1.__metadata("design:type", Object)
], EllipsisComponent.prototype, "lines", void 0);
if (false) {
    /**
     * 在按照行数截取下最大的行数，超过则截取省略
     * @type {?}
     */
    EllipsisComponent.prototype.lines;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxsaXBzaXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9lbGxpcHNpcy8iLCJzb3VyY2VzIjpbImVsbGlwc2lzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsS0FBSyxFQUNMLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBVTFDLE1BQU0sT0FBTyxpQkFBaUI7Ozs7O0lBTzVCLFlBQVksRUFBYyxFQUFFLE1BQWlCOzs7O1FBRjdDLFVBQUssR0FBRyxDQUFDLENBQUM7UUFHUixNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsb0JBQW9CLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDdEUsQ0FBQzs7O1lBakJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsUUFBUSxFQUFFOztHQUVUO2dCQUNELElBQUksRUFBRSxFQUFFLGtCQUFrQixFQUFFLE1BQU0sRUFBRTtnQkFDcEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUFkQyxVQUFVO1lBR1YsU0FBUzs7O29CQWNSLEtBQUssWUFFTCxXQUFXLFNBQUMsMEJBQTBCOztBQUN2QztJQUZDLFdBQVcsRUFBRTs7Z0RBRUo7Ozs7OztJQUhWLGtDQUdVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBSZW5kZXJlcjIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2VsbGlwc2lzJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIGAsXG4gIGhvc3Q6IHsgJ1tjbGFzcy5lbGxpcHNpc10nOiAndHJ1ZScgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEVsbGlwc2lzQ29tcG9uZW50IHtcbiAgLyoqIOWcqOaMieeFp+ihjOaVsOaIquWPluS4i+acgOWkp+eahOihjOaVsO+8jOi2hei/h+WImeaIquWPluecgeeVpSAqL1xuICBASW5wdXQoKVxuICBASW5wdXROdW1iZXIoKVxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLi13ZWJraXQtbGluZS1jbGFtcCcpXG4gIGxpbmVzID0gMztcblxuICBjb25zdHJ1Y3RvcihlbDogRWxlbWVudFJlZiwgcmVuZGVyOiBSZW5kZXJlcjIpIHtcbiAgICByZW5kZXIuc2V0U3R5bGUoZWwubmF0aXZlRWxlbWVudCwgJy13ZWJraXQtYm94LW9yaWVudCcsICd2ZXJ0aWNhbCcpO1xuICB9XG59XG4iXX0=