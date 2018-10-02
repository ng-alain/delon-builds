/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef, HostBinding, Output, EventEmitter, } from '@angular/core';
import { InputNumber } from '@delon/util';
import { QRService } from './qr.service';
import { QRConfig } from './qr.config';
var QRComponent = /** @class */ (function () {
    // endregion
    function QRComponent(cog, srv, cd) {
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
    QRComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
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
    };
    QRComponent.decorators = [
        { type: Component, args: [{
                    selector: 'qr',
                    template: "\n  <img class=\"qr__img\" src=\"{{dataURL}}\">\n  ",
                    preserveWhitespaces: false,
                    host: { '[class.qr]': 'true' },
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    QRComponent.ctorParameters = function () { return [
        { type: QRConfig },
        { type: QRService },
        { type: ChangeDetectorRef }
    ]; };
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
    return QRComponent;
}());
export { QRComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9xci8iLCJzb3VyY2VzIjpbInFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLHVCQUF1QixFQUV2QixpQkFBaUIsRUFDakIsV0FBVyxFQUNYLE1BQU0sRUFDTixZQUFZLEdBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUUxQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7O0lBa0RyQyxZQUFZO0lBRVoscUJBQ0UsR0FBYSxFQUNMLEtBQ0E7UUFEQSxRQUFHLEdBQUgsR0FBRztRQUNILE9BQUUsR0FBRixFQUFFOzs7O3NCQVBILElBQUksWUFBWSxFQUFVO1FBU2pDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQzFCOzs7O0lBRUQsaUNBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztZQUM5QixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1lBQ3JDLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7WUFDckMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7U0FDbEIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDaEM7O2dCQXhFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLElBQUk7b0JBQ2QsUUFBUSxFQUFFLHFEQUVUO29CQUNELG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLElBQUksRUFBRSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUU7b0JBQzlCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkFWUSxRQUFRO2dCQURSLFNBQVM7Z0JBUGhCLGlCQUFpQjs7OzZCQXdCaEIsS0FBSztrQ0FHTCxLQUFLOzZCQUdMLEtBQUs7a0NBR0wsS0FBSzt3QkFHTCxLQUFLO3VCQUdMLEtBQUs7MEJBR0wsS0FBSzt1QkFJTCxXQUFXLFNBQUMsaUJBQWlCLGNBQzdCLFdBQVcsU0FBQyxnQkFBZ0IsY0FDNUIsS0FBSzt3QkFJTCxLQUFLO3lCQUdMLE1BQU07OztRQVpOLFdBQVcsRUFBRTs7OztRQU1iLFdBQVcsRUFBRTs7O3NCQXREaEI7O1NBd0JhLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBPbkNoYW5nZXMsXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XHJcblxyXG5pbXBvcnQgeyBRUlNlcnZpY2UgfSBmcm9tICcuL3FyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBRUkNvbmZpZyB9IGZyb20gJy4vcXIuY29uZmlnJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncXInLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPGltZyBjbGFzcz1cInFyX19pbWdcIiBzcmM9XCJ7e2RhdGFVUkx9fVwiPlxyXG4gIGAsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgaG9zdDogeyAnW2NsYXNzLnFyXSc6ICd0cnVlJyB9LFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUVJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIGRhdGFVUkw6IHN0cmluZztcclxuICAvLyByZWdpb246IGZpZWxkc1xyXG5cclxuICAvKiog6IOM5pmvICovXHJcbiAgQElucHV0KClcclxuICBiYWNrZ3JvdW5kOiBzdHJpbmc7XHJcbiAgLyoqIOiDjOaZr+mAj+aYjue6p+WIq++8jOiMg+WbtO+8mmAwLTFgIOS5i+mXtCAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgYmFja2dyb3VuZEFscGhhOiBudW1iZXI7XHJcbiAgLyoqIOWJjeaZryAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZm9yZWdyb3VuZDogc3RyaW5nO1xyXG4gIC8qKiDliY3mma/pgI/mmI7nuqfliKvvvIzojIPlm7TvvJpgMC0xYCDkuYvpl7QgKi9cclxuICBASW5wdXQoKVxyXG4gIGZvcmVncm91bmRBbHBoYTogbnVtYmVyO1xyXG4gIC8qKiDor6/lt67moKHmraPnuqfliKsgKi9cclxuICBASW5wdXQoKVxyXG4gIGxldmVsOiBzdHJpbmc7XHJcbiAgLyoqIOS6jOe7tOeggei+k+WHuuWbvueJh01JTUXnsbvlnosgKi9cclxuICBASW5wdXQoKVxyXG4gIG1pbWU6IHN0cmluZztcclxuICAvKiog5YaF6L656Led77yI5Y2V5L2N77yacHjvvIkgKi9cclxuICBASW5wdXQoKVxyXG4gIEBJbnB1dE51bWJlcigpXHJcbiAgcGFkZGluZzogbnVtYmVyO1xyXG4gIC8qKiDlpKflsI/vvIjljZXkvY3vvJpweO+8iSAqL1xyXG4gIEBIb3N0QmluZGluZygnc3R5bGUuaGVpZ2h0LnB4JylcclxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLndpZHRoLnB4JylcclxuICBASW5wdXQoKVxyXG4gIEBJbnB1dE51bWJlcigpXHJcbiAgc2l6ZTogbnVtYmVyO1xyXG4gIC8qKiDlgLwgKi9cclxuICBASW5wdXQoKVxyXG4gIHZhbHVlOiBzdHJpbmc7XHJcbiAgLyoqIOWPmOabtOaXtuWbnuiwgyAqL1xyXG4gIEBPdXRwdXQoKVxyXG4gIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG5cclxuICAvLyBlbmRyZWdpb25cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBjb2c6IFFSQ29uZmlnLFxyXG4gICAgcHJpdmF0ZSBzcnY6IFFSU2VydmljZSxcclxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICkge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb2cpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLmRhdGFVUkwgPSB0aGlzLnNydi5yZWZyZXNoKHtcclxuICAgICAgYmFja2dyb3VuZDogdGhpcy5iYWNrZ3JvdW5kLFxyXG4gICAgICBiYWNrZ3JvdW5kQWxwaGE6IHRoaXMuYmFja2dyb3VuZEFscGhhLFxyXG4gICAgICBmb3JlZ3JvdW5kOiB0aGlzLmZvcmVncm91bmQsXHJcbiAgICAgIGZvcmVncm91bmRBbHBoYTogdGhpcy5mb3JlZ3JvdW5kQWxwaGEsXHJcbiAgICAgIGxldmVsOiB0aGlzLmxldmVsLFxyXG4gICAgICBtaW1lOiB0aGlzLm1pbWUsXHJcbiAgICAgIHBhZGRpbmc6IHRoaXMucGFkZGluZyxcclxuICAgICAgc2l6ZTogdGhpcy5zaXplLFxyXG4gICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB0aGlzLmNoYW5nZS5lbWl0KHRoaXMuZGF0YVVSTCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==