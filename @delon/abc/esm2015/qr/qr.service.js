/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvcXIvIiwic291cmNlcyI6WyJxci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFLdkMsTUFBTSxPQUFPLFNBQVM7Ozs7SUFzQnBCLFlBQVksR0FBYTs7OztRQWhCekIsb0JBQWUsR0FBRyxHQUFHLENBQUM7UUFpQnBCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7Ozs7O0lBT0QsT0FBTyxDQUFDLEtBQXVCO1FBQzdCLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUM5QyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1lBQ3JDLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7WUFDckMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixLQUFLLEVBQUUsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLO1NBQzNCLENBQUMsQ0FBQztRQUNILE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDOzs7OztJQUtELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7WUFwREYsVUFBVTs7OztZQUpGLFFBQVE7Ozs7Ozs7SUFPZix1QkFBaUI7Ozs7O0lBRWpCLCtCQUFtQjs7Ozs7SUFFbkIsb0NBQXNCOzs7OztJQUV0QiwrQkFBbUI7Ozs7O0lBRW5CLG9DQUF3Qjs7Ozs7SUFFeEIsMEJBQWM7Ozs7O0lBRWQseUJBQWE7Ozs7O0lBRWIsNEJBQWdCOzs7OztJQUVoQix5QkFBYTs7Ozs7SUFFYiwwQkFBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFFSQ29uZmlnIH0gZnJvbSAnLi9xci5jb25maWcnO1xuXG5kZWNsYXJlIHZhciBRUmlvdXM6IGFueTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFFSU2VydmljZSB7XG4gIC8qKiDlvZPliY1xcuWunuS+iyAqL1xuICByZWFkb25seSBxcjogYW55O1xuICAvKiog6IOM5pmvICovXG4gIGJhY2tncm91bmQ6IHN0cmluZztcbiAgLyoqIOiDjOaZr+mAj+aYjue6p+WIq++8jOiMg+WbtO+8mmAwLTFgIOS5i+mXtCAqL1xuICBiYWNrZ3JvdW5kQWxwaGEgPSAxLjA7XG4gIC8qKiDliY3mma8gKi9cbiAgZm9yZWdyb3VuZDogc3RyaW5nO1xuICAvKiog5YmN5pmv6YCP5piO57qn5Yir77yM6IyD5Zu077yaYDAtMWAg5LmL6Ze0ICovXG4gIGZvcmVncm91bmRBbHBoYTogbnVtYmVyO1xuICAvKiog6K+v5beu5qCh5q2j57qn5YirICovXG4gIGxldmVsOiBzdHJpbmc7XG4gIC8qKiDkuoznu7TnoIHovpPlh7rlm77niYdNSU1F57G75Z6LICovXG4gIG1pbWU6IHN0cmluZztcbiAgLyoqIOWGhei+uei3ne+8iOWNleS9je+8mnB477yJICovXG4gIHBhZGRpbmc6IG51bWJlcjtcbiAgLyoqIOWkp+Wwj++8iOWNleS9je+8mnB477yJICovXG4gIHNpemU6IG51bWJlcjtcbiAgLyoqIOWAvCAqL1xuICB2YWx1ZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGNvZzogUVJDb25maWcpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvZyk7XG4gICAgdGhpcy5xciA9IG5ldyBRUmlvdXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDnlJ/miJDkuoznu7TnoIHvvIzlubbov5Tlm55CYXNlNjTnvJbnoIFcbiAgICpcbiAgICogQHBhcmFtIFt2YWx1ZV0g6YeN5paw5oyH5a6a5YC8XG4gICAqL1xuICByZWZyZXNoKHZhbHVlPzogc3RyaW5nIHwgT2JqZWN0KTogc3RyaW5nIHtcbiAgICB0aGlzLnFyLnNldCh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnID8gdmFsdWUgOiB7XG4gICAgICBiYWNrZ3JvdW5kOiB0aGlzLmJhY2tncm91bmQsXG4gICAgICBiYWNrZ3JvdW5kQWxwaGE6IHRoaXMuYmFja2dyb3VuZEFscGhhLFxuICAgICAgZm9yZWdyb3VuZDogdGhpcy5mb3JlZ3JvdW5kLFxuICAgICAgZm9yZWdyb3VuZEFscGhhOiB0aGlzLmZvcmVncm91bmRBbHBoYSxcbiAgICAgIGxldmVsOiB0aGlzLmxldmVsLFxuICAgICAgcGFkZGluZzogdGhpcy5wYWRkaW5nLFxuICAgICAgc2l6ZTogdGhpcy5zaXplLFxuICAgICAgdmFsdWU6IHZhbHVlIHx8IHRoaXMudmFsdWUsXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuZGF0YVVSTDtcbiAgfVxuXG4gIC8qKlxuICAgKiDov5Tlm57lvZPliY3kuoznu7TnoIFCYXNlNjTnvJbnoIFcbiAgICovXG4gIGdldCBkYXRhVVJMKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMucXIudG9EYXRhVVJMKCk7XG4gIH1cbn1cbiJdfQ==