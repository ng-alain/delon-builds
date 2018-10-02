/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef, HostBinding, Output, EventEmitter, } from '@angular/core';
import { InputNumber } from '@delon/util';
import { QRService } from './qr.service';
import { QRConfig } from './qr.config';
export class QRComponent {
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
                template: `
  <img class="qr__img" src="{{dataURL}}">
  `,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9xci8iLCJzb3VyY2VzIjpbInFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLHVCQUF1QixFQUV2QixpQkFBaUIsRUFDakIsV0FBVyxFQUNYLE1BQU0sRUFDTixZQUFZLEdBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUUxQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFXdkMsTUFBTTs7Ozs7O0lBeUNKLFlBQ0UsR0FBYSxFQUNMLEtBQ0E7UUFEQSxRQUFHLEdBQUgsR0FBRztRQUNILE9BQUUsR0FBRixFQUFFOzs7O3NCQVBILElBQUksWUFBWSxFQUFVO1FBU2pDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQzFCOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7WUFDOUIsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtZQUNyQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1lBQ3JDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1NBQ2xCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ2hDOzs7WUF4RUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxJQUFJO2dCQUNkLFFBQVEsRUFBRTs7R0FFVDtnQkFDRCxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixJQUFJLEVBQUUsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFO2dCQUM5QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OztZQVZRLFFBQVE7WUFEUixTQUFTO1lBUGhCLGlCQUFpQjs7O3lCQXdCaEIsS0FBSzs4QkFHTCxLQUFLO3lCQUdMLEtBQUs7OEJBR0wsS0FBSztvQkFHTCxLQUFLO21CQUdMLEtBQUs7c0JBR0wsS0FBSzttQkFJTCxXQUFXLFNBQUMsaUJBQWlCLGNBQzdCLFdBQVcsU0FBQyxnQkFBZ0IsY0FDNUIsS0FBSztvQkFJTCxLQUFLO3FCQUdMLE1BQU07OztJQVpOLFdBQVcsRUFBRTs7OztJQU1iLFdBQVcsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBIb3N0QmluZGluZyxcclxuICBPdXRwdXQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJbnB1dE51bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcclxuXHJcbmltcG9ydCB7IFFSU2VydmljZSB9IGZyb20gJy4vcXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFFSQ29uZmlnIH0gZnJvbSAnLi9xci5jb25maWcnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdxcicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8aW1nIGNsYXNzPVwicXJfX2ltZ1wiIHNyYz1cInt7ZGF0YVVSTH19XCI+XHJcbiAgYCxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBob3N0OiB7ICdbY2xhc3MucXJdJzogJ3RydWUnIH0sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBRUkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgZGF0YVVSTDogc3RyaW5nO1xyXG4gIC8vIHJlZ2lvbjogZmllbGRzXHJcblxyXG4gIC8qKiDog4zmma8gKi9cclxuICBASW5wdXQoKVxyXG4gIGJhY2tncm91bmQ6IHN0cmluZztcclxuICAvKiog6IOM5pmv6YCP5piO57qn5Yir77yM6IyD5Zu077yaYDAtMWAg5LmL6Ze0ICovXHJcbiAgQElucHV0KClcclxuICBiYWNrZ3JvdW5kQWxwaGE6IG51bWJlcjtcclxuICAvKiog5YmN5pmvICovXHJcbiAgQElucHV0KClcclxuICBmb3JlZ3JvdW5kOiBzdHJpbmc7XHJcbiAgLyoqIOWJjeaZr+mAj+aYjue6p+WIq++8jOiMg+WbtO+8mmAwLTFgIOS5i+mXtCAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZm9yZWdyb3VuZEFscGhhOiBudW1iZXI7XHJcbiAgLyoqIOivr+W3ruagoeato+e6p+WIqyAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgbGV2ZWw6IHN0cmluZztcclxuICAvKiog5LqM57u056CB6L6T5Ye65Zu+54mHTUlNReexu+WeiyAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgbWltZTogc3RyaW5nO1xyXG4gIC8qKiDlhoXovrnot53vvIjljZXkvY3vvJpweO+8iSAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgQElucHV0TnVtYmVyKClcclxuICBwYWRkaW5nOiBudW1iZXI7XHJcbiAgLyoqIOWkp+Wwj++8iOWNleS9je+8mnB477yJICovXHJcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5oZWlnaHQucHgnKVxyXG4gIEBIb3N0QmluZGluZygnc3R5bGUud2lkdGgucHgnKVxyXG4gIEBJbnB1dCgpXHJcbiAgQElucHV0TnVtYmVyKClcclxuICBzaXplOiBudW1iZXI7XHJcbiAgLyoqIOWAvCAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgdmFsdWU6IHN0cmluZztcclxuICAvKiog5Y+Y5pu05pe25Zue6LCDICovXHJcbiAgQE91dHB1dCgpXHJcbiAgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG4gIC8vIGVuZHJlZ2lvblxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGNvZzogUVJDb25maWcsXHJcbiAgICBwcml2YXRlIHNydjogUVJTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgKSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvZyk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcclxuICAgIHRoaXMuZGF0YVVSTCA9IHRoaXMuc3J2LnJlZnJlc2goe1xyXG4gICAgICBiYWNrZ3JvdW5kOiB0aGlzLmJhY2tncm91bmQsXHJcbiAgICAgIGJhY2tncm91bmRBbHBoYTogdGhpcy5iYWNrZ3JvdW5kQWxwaGEsXHJcbiAgICAgIGZvcmVncm91bmQ6IHRoaXMuZm9yZWdyb3VuZCxcclxuICAgICAgZm9yZWdyb3VuZEFscGhhOiB0aGlzLmZvcmVncm91bmRBbHBoYSxcclxuICAgICAgbGV2ZWw6IHRoaXMubGV2ZWwsXHJcbiAgICAgIG1pbWU6IHRoaXMubWltZSxcclxuICAgICAgcGFkZGluZzogdGhpcy5wYWRkaW5nLFxyXG4gICAgICBzaXplOiB0aGlzLnNpemUsXHJcbiAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcclxuICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcy5kYXRhVVJMKTtcclxuICB9XHJcbn1cclxuIl19