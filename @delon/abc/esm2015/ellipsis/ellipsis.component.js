/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, HostBinding, Renderer2, ElementRef, } from '@angular/core';
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxsaXBzaXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9lbGxpcHNpcy8iLCJzb3VyY2VzIjpbImVsbGlwc2lzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFdBQVcsRUFDWCxTQUFTLEVBQ1QsVUFBVSxHQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFPMUMsTUFBTTs7Ozs7SUFPSixZQUFZLEVBQWMsRUFBRSxNQUFpQjs7OztxQkFGckMsQ0FBQztRQUdQLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxvQkFBb0IsRUFBRSxVQUFVLENBQUMsQ0FBQztLQUNyRTs7O1lBZEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQixRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxJQUFJLEVBQUUsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLEVBQUU7YUFDckM7Ozs7WUFSQyxVQUFVO1lBRFYsU0FBUzs7O29CQVlSLEtBQUssWUFFTCxXQUFXLFNBQUMsMEJBQTBCOzs7SUFEdEMsV0FBVyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgSG9zdEJpbmRpbmcsXG4gIFJlbmRlcmVyMixcbiAgRWxlbWVudFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbnB1dE51bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZWxsaXBzaXMnLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxuICBob3N0OiB7ICdbY2xhc3MuZWxsaXBzaXNdJzogJ3RydWUnIH0sXG59KVxuZXhwb3J0IGNsYXNzIEVsbGlwc2lzQ29tcG9uZW50IHtcbiAgLyoqIOWcqOaMieeFp+ihjOaVsOaIquWPluS4i+acgOWkp+eahOihjOaVsO+8jOi2hei/h+WImeaIquWPluecgeeVpSAqL1xuICBASW5wdXQoKVxuICBASW5wdXROdW1iZXIoKVxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLi13ZWJraXQtbGluZS1jbGFtcCcpXG4gIGxpbmVzID0gMztcblxuICBjb25zdHJ1Y3RvcihlbDogRWxlbWVudFJlZiwgcmVuZGVyOiBSZW5kZXJlcjIpIHtcbiAgICByZW5kZXIuc2V0U3R5bGUoZWwubmF0aXZlRWxlbWVudCwgJy13ZWJraXQtYm94LW9yaWVudCcsICd2ZXJ0aWNhbCcpO1xuICB9XG59XG4iXX0=