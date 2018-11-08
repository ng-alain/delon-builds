/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef, HostBinding, Output, EventEmitter, } from '@angular/core';
import { InputNumber } from '@delon/util';
import { QRService } from './qr.service';
import { QRConfig } from './qr.config';
export class QRComponent {
    // #endregion
    /**
     * @param {?} cog
     * @param {?} srv
     * @param {?} cd
     */
    constructor(cog, srv, cd) {
        this.srv = srv;
        this.cd = cd;
        /**
         * 变更时回调
         */
        this.change = new EventEmitter();
        Object.assign(this, cog);
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.dataURL = this.srv.refresh({
            background: this.background,
            backgroundAlpha: this.backgroundAlpha,
            foreground: this.foreground,
            foregroundAlpha: this.foregroundAlpha,
            level: this.level,
            mime: this.mime,
            padding: this.padding,
            size: this.size,
            value: this.value,
        });
        this.cd.detectChanges();
        this.change.emit(this.dataURL);
    }
}
QRComponent.decorators = [
    { type: Component, args: [{
                selector: 'qr',
                template: `<img class="qr__img" src="{{dataURL}}">`,
                preserveWhitespaces: false,
                host: { '[class.qr]': 'true' },
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
QRComponent.ctorParameters = () => [
    { type: QRConfig },
    { type: QRService },
    { type: ChangeDetectorRef }
];
QRComponent.propDecorators = {
    background: [{ type: Input }],
    backgroundAlpha: [{ type: Input }],
    foreground: [{ type: Input }],
    foregroundAlpha: [{ type: Input }],
    level: [{ type: Input }],
    mime: [{ type: Input }],
    padding: [{ type: Input }],
    size: [{ type: HostBinding, args: ['style.height.px',] }, { type: HostBinding, args: ['style.width.px',] }, { type: Input }],
    value: [{ type: Input }],
    change: [{ type: Output }]
};
tslib_1.__decorate([
    InputNumber(),
    tslib_1.__metadata("design:type", Number)
], QRComponent.prototype, "padding", void 0);
tslib_1.__decorate([
    InputNumber(),
    tslib_1.__metadata("design:type", Number)
], QRComponent.prototype, "size", void 0);
if (false) {
    /** @type {?} */
    QRComponent.prototype.dataURL;
    /**
     * 背景
     * @type {?}
     */
    QRComponent.prototype.background;
    /**
     * 背景透明级别，范围：`0-1` 之间
     * @type {?}
     */
    QRComponent.prototype.backgroundAlpha;
    /**
     * 前景
     * @type {?}
     */
    QRComponent.prototype.foreground;
    /**
     * 前景透明级别，范围：`0-1` 之间
     * @type {?}
     */
    QRComponent.prototype.foregroundAlpha;
    /**
     * 误差校正级别
     * @type {?}
     */
    QRComponent.prototype.level;
    /**
     * 二维码输出图片MIME类型
     * @type {?}
     */
    QRComponent.prototype.mime;
    /**
     * 内边距（单位：px）
     * @type {?}
     */
    QRComponent.prototype.padding;
    /**
     * 大小（单位：px）
     * @type {?}
     */
    QRComponent.prototype.size;
    /**
     * 值
     * @type {?}
     */
    QRComponent.prototype.value;
    /**
     * 变更时回调
     * @type {?}
     */
    QRComponent.prototype.change;
    /** @type {?} */
    QRComponent.prototype.srv;
    /** @type {?} */
    QRComponent.prototype.cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9xci8iLCJzb3VyY2VzIjpbInFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLHVCQUF1QixFQUV2QixpQkFBaUIsRUFDakIsV0FBVyxFQUNYLE1BQU0sRUFDTixZQUFZLEdBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUUxQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFTdkMsTUFBTSxPQUFPLFdBQVc7Ozs7Ozs7SUEwQ3RCLFlBQ0UsR0FBYSxFQUNMLEdBQWMsRUFDZCxFQUFxQjtRQURyQixRQUFHLEdBQUgsR0FBRyxDQUFXO1FBQ2QsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7Ozs7UUFQdEIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFTM0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO1lBQzlCLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7WUFDckMsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtZQUNyQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztTQUNsQixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7WUF2RUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxJQUFJO2dCQUNkLFFBQVEsRUFBRSx5Q0FBeUM7Z0JBQ25ELG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLElBQUksRUFBRSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUU7Z0JBQzlCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O1lBUlEsUUFBUTtZQURSLFNBQVM7WUFQaEIsaUJBQWlCOzs7eUJBdUJoQixLQUFLOzhCQUdMLEtBQUs7eUJBR0wsS0FBSzs4QkFHTCxLQUFLO29CQUdMLEtBQUs7bUJBR0wsS0FBSztzQkFHTCxLQUFLO21CQUlMLFdBQVcsU0FBQyxpQkFBaUIsY0FDN0IsV0FBVyxTQUFDLGdCQUFnQixjQUM1QixLQUFLO29CQUlMLEtBQUs7cUJBR0wsTUFBTTs7QUFYUDtJQURDLFdBQVcsRUFBRTs7NENBQ0U7QUFNaEI7SUFEQyxXQUFXLEVBQUU7O3lDQUNEOzs7SUEvQmIsOEJBQWdCOzs7OztJQUtoQixpQ0FDbUI7Ozs7O0lBRW5CLHNDQUN3Qjs7Ozs7SUFFeEIsaUNBQ21COzs7OztJQUVuQixzQ0FDd0I7Ozs7O0lBRXhCLDRCQUNjOzs7OztJQUVkLDJCQUNhOzs7OztJQUViLDhCQUVnQjs7Ozs7SUFFaEIsMkJBSWE7Ozs7O0lBRWIsNEJBQ2M7Ozs7O0lBRWQsNkJBQzZDOztJQU0zQywwQkFBc0I7O0lBQ3RCLHlCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBPbkNoYW5nZXMsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBIb3N0QmluZGluZyxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbmltcG9ydCB7IFFSU2VydmljZSB9IGZyb20gJy4vcXIuc2VydmljZSc7XG5pbXBvcnQgeyBRUkNvbmZpZyB9IGZyb20gJy4vcXIuY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncXInLFxuICB0ZW1wbGF0ZTogYDxpbWcgY2xhc3M9XCJxcl9faW1nXCIgc3JjPVwie3tkYXRhVVJMfX1cIj5gLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgaG9zdDogeyAnW2NsYXNzLnFyXSc6ICd0cnVlJyB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUVJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBkYXRhVVJMOiBzdHJpbmc7XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICAvKiog6IOM5pmvICovXG4gIEBJbnB1dCgpXG4gIGJhY2tncm91bmQ6IHN0cmluZztcbiAgLyoqIOiDjOaZr+mAj+aYjue6p+WIq++8jOiMg+WbtO+8mmAwLTFgIOS5i+mXtCAqL1xuICBASW5wdXQoKVxuICBiYWNrZ3JvdW5kQWxwaGE6IG51bWJlcjtcbiAgLyoqIOWJjeaZryAqL1xuICBASW5wdXQoKVxuICBmb3JlZ3JvdW5kOiBzdHJpbmc7XG4gIC8qKiDliY3mma/pgI/mmI7nuqfliKvvvIzojIPlm7TvvJpgMC0xYCDkuYvpl7QgKi9cbiAgQElucHV0KClcbiAgZm9yZWdyb3VuZEFscGhhOiBudW1iZXI7XG4gIC8qKiDor6/lt67moKHmraPnuqfliKsgKi9cbiAgQElucHV0KClcbiAgbGV2ZWw6IHN0cmluZztcbiAgLyoqIOS6jOe7tOeggei+k+WHuuWbvueJh01JTUXnsbvlnosgKi9cbiAgQElucHV0KClcbiAgbWltZTogc3RyaW5nO1xuICAvKiog5YaF6L656Led77yI5Y2V5L2N77yacHjvvIkgKi9cbiAgQElucHV0KClcbiAgQElucHV0TnVtYmVyKClcbiAgcGFkZGluZzogbnVtYmVyO1xuICAvKiog5aSn5bCP77yI5Y2V5L2N77yacHjvvIkgKi9cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5oZWlnaHQucHgnKVxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLndpZHRoLnB4JylcbiAgQElucHV0KClcbiAgQElucHV0TnVtYmVyKClcbiAgc2l6ZTogbnVtYmVyO1xuICAvKiog5YC8ICovXG4gIEBJbnB1dCgpXG4gIHZhbHVlOiBzdHJpbmc7XG4gIC8qKiDlj5jmm7Tml7blm57osIMgKi9cbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3RvcihcbiAgICBjb2c6IFFSQ29uZmlnLFxuICAgIHByaXZhdGUgc3J2OiBRUlNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29nKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuZGF0YVVSTCA9IHRoaXMuc3J2LnJlZnJlc2goe1xuICAgICAgYmFja2dyb3VuZDogdGhpcy5iYWNrZ3JvdW5kLFxuICAgICAgYmFja2dyb3VuZEFscGhhOiB0aGlzLmJhY2tncm91bmRBbHBoYSxcbiAgICAgIGZvcmVncm91bmQ6IHRoaXMuZm9yZWdyb3VuZCxcbiAgICAgIGZvcmVncm91bmRBbHBoYTogdGhpcy5mb3JlZ3JvdW5kQWxwaGEsXG4gICAgICBsZXZlbDogdGhpcy5sZXZlbCxcbiAgICAgIG1pbWU6IHRoaXMubWltZSxcbiAgICAgIHBhZGRpbmc6IHRoaXMucGFkZGluZyxcbiAgICAgIHNpemU6IHRoaXMuc2l6ZSxcbiAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgIH0pO1xuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcy5kYXRhVVJMKTtcbiAgfVxufVxuIl19