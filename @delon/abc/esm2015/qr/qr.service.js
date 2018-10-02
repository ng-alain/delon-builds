/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { QRConfig } from './qr.config';
export class QRService {
    /**
     * @param {?} cog
     */
    constructor(cog) {
        /**
         * 背景透明级别，范围：`0-1` 之间
         */
        this.backgroundAlpha = 1.0;
        Object.assign(this, cog);
        this.qr = new QRious();
    }
    /**
     * 生成二维码，并返回Base64编码
     *
     * @param {?=} value
     * @return {?}
     */
    refresh(value) {
        this.qr.set(typeof value === 'object' ? value : {
            background: this.background,
            backgroundAlpha: this.backgroundAlpha,
            foreground: this.foreground,
            foregroundAlpha: this.foregroundAlpha,
            level: this.level,
            padding: this.padding,
            size: this.size,
            value: value || this.value,
        });
        return this.dataURL;
    }
    /**
     * 返回当前二维码Base64编码
     * @return {?}
     */
    get dataURL() {
        return this.qr.toDataURL();
    }
}
QRService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
QRService.ctorParameters = () => [
    { type: QRConfig }
];
if (false) {
    /**
     * 当前qr实例
     * @type {?}
     */
    QRService.prototype.qr;
    /**
     * 背景
     * @type {?}
     */
    QRService.prototype.background;
    /**
     * 背景透明级别，范围：`0-1` 之间
     * @type {?}
     */
    QRService.prototype.backgroundAlpha;
    /**
     * 前景
     * @type {?}
     */
    QRService.prototype.foreground;
    /**
     * 前景透明级别，范围：`0-1` 之间
     * @type {?}
     */
    QRService.prototype.foregroundAlpha;
    /**
     * 误差校正级别
     * @type {?}
     */
    QRService.prototype.level;
    /**
     * 二维码输出图片MIME类型
     * @type {?}
     */
    QRService.prototype.mime;
    /**
     * 内边距（单位：px）
     * @type {?}
     */
    QRService.prototype.padding;
    /**
     * 大小（单位：px）
     * @type {?}
     */
    QRService.prototype.size;
    /**
     * 值
     * @type {?}
     */
    QRService.prototype.value;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvcXIvIiwic291cmNlcyI6WyJxci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFLdkMsTUFBTTs7OztJQXNCSixZQUFZLEdBQWE7Ozs7K0JBaEJQLEdBQUc7UUFpQm5CLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztLQUN4Qjs7Ozs7OztJQU9ELE9BQU8sQ0FBQyxLQUF1QjtRQUM3QixJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDOUMsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtZQUNyQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1lBQ3JDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsS0FBSyxFQUFFLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSztTQUMzQixDQUFDLENBQUM7UUFDSCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7S0FDckI7Ozs7O0lBS0QsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO0tBQzVCOzs7WUFwREYsVUFBVTs7OztZQUpGLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFFSQ29uZmlnIH0gZnJvbSAnLi9xci5jb25maWcnO1xyXG5cclxuZGVjbGFyZSB2YXIgUVJpb3VzOiBhbnk7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBRUlNlcnZpY2Uge1xyXG4gIC8qKiDlvZPliY1xcuWunuS+iyAqL1xyXG4gIHJlYWRvbmx5IHFyOiBhbnk7XHJcbiAgLyoqIOiDjOaZryAqL1xyXG4gIGJhY2tncm91bmQ6IHN0cmluZztcclxuICAvKiog6IOM5pmv6YCP5piO57qn5Yir77yM6IyD5Zu077yaYDAtMWAg5LmL6Ze0ICovXHJcbiAgYmFja2dyb3VuZEFscGhhID0gMS4wO1xyXG4gIC8qKiDliY3mma8gKi9cclxuICBmb3JlZ3JvdW5kOiBzdHJpbmc7XHJcbiAgLyoqIOWJjeaZr+mAj+aYjue6p+WIq++8jOiMg+WbtO+8mmAwLTFgIOS5i+mXtCAqL1xyXG4gIGZvcmVncm91bmRBbHBoYTogbnVtYmVyO1xyXG4gIC8qKiDor6/lt67moKHmraPnuqfliKsgKi9cclxuICBsZXZlbDogc3RyaW5nO1xyXG4gIC8qKiDkuoznu7TnoIHovpPlh7rlm77niYdNSU1F57G75Z6LICovXHJcbiAgbWltZTogc3RyaW5nO1xyXG4gIC8qKiDlhoXovrnot53vvIjljZXkvY3vvJpweO+8iSAqL1xyXG4gIHBhZGRpbmc6IG51bWJlcjtcclxuICAvKiog5aSn5bCP77yI5Y2V5L2N77yacHjvvIkgKi9cclxuICBzaXplOiBudW1iZXI7XHJcbiAgLyoqIOWAvCAqL1xyXG4gIHZhbHVlOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNvZzogUVJDb25maWcpIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29nKTtcclxuICAgIHRoaXMucXIgPSBuZXcgUVJpb3VzKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDnlJ/miJDkuoznu7TnoIHvvIzlubbov5Tlm55CYXNlNjTnvJbnoIFcclxuICAgKlxyXG4gICAqIEBwYXJhbSBbdmFsdWVdIOmHjeaWsOaMh+WumuWAvFxyXG4gICAqL1xyXG4gIHJlZnJlc2godmFsdWU/OiBzdHJpbmcgfCBPYmplY3QpOiBzdHJpbmcge1xyXG4gICAgdGhpcy5xci5zZXQodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyA/IHZhbHVlIDoge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB0aGlzLmJhY2tncm91bmQsXHJcbiAgICAgIGJhY2tncm91bmRBbHBoYTogdGhpcy5iYWNrZ3JvdW5kQWxwaGEsXHJcbiAgICAgIGZvcmVncm91bmQ6IHRoaXMuZm9yZWdyb3VuZCxcclxuICAgICAgZm9yZWdyb3VuZEFscGhhOiB0aGlzLmZvcmVncm91bmRBbHBoYSxcclxuICAgICAgbGV2ZWw6IHRoaXMubGV2ZWwsXHJcbiAgICAgIHBhZGRpbmc6IHRoaXMucGFkZGluZyxcclxuICAgICAgc2l6ZTogdGhpcy5zaXplLFxyXG4gICAgICB2YWx1ZTogdmFsdWUgfHwgdGhpcy52YWx1ZSxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRoaXMuZGF0YVVSTDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOi/lOWbnuW9k+WJjeS6jOe7tOeggUJhc2U2NOe8lueggVxyXG4gICAqL1xyXG4gIGdldCBkYXRhVVJMKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5xci50b0RhdGFVUkwoKTtcclxuICB9XHJcbn1cclxuIl19