/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { QRConfig } from './qr.config';
var QRService = /** @class */ (function () {
    function QRService(cog) {
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
     * @param [value] 重新指定值
     */
    /**
     * 生成二维码，并返回Base64编码
     *
     * @param {?=} value
     * @return {?}
     */
    QRService.prototype.refresh = /**
     * 生成二维码，并返回Base64编码
     *
     * @param {?=} value
     * @return {?}
     */
    function (value) {
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
    };
    Object.defineProperty(QRService.prototype, "dataURL", {
        /**
         * 返回当前二维码Base64编码
         */
        get: /**
         * 返回当前二维码Base64编码
         * @return {?}
         */
        function () {
            return this.qr.toDataURL();
        },
        enumerable: true,
        configurable: true
    });
    QRService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    QRService.ctorParameters = function () { return [
        { type: QRConfig }
    ]; };
    return QRService;
}());
export { QRService };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvcXIvIiwic291cmNlcyI6WyJxci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7O0lBMkJyQyxtQkFBWSxHQUFhOzs7OytCQWhCUCxHQUFHO1FBaUJuQixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7S0FDeEI7SUFFRDs7OztPQUlHOzs7Ozs7O0lBQ0gsMkJBQU87Ozs7OztJQUFQLFVBQVEsS0FBdUI7UUFDN0IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzlDLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7WUFDckMsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtZQUNyQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLEtBQUssRUFBRSxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUs7U0FDM0IsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0tBQ3JCO0lBS0Qsc0JBQUksOEJBQU87UUFIWDs7V0FFRzs7Ozs7UUFDSDtZQUNFLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUM1Qjs7O09BQUE7O2dCQXBERixVQUFVOzs7O2dCQUpGLFFBQVE7O29CQURqQjs7U0FNYSxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBRUkNvbmZpZyB9IGZyb20gJy4vcXIuY29uZmlnJztcclxuXHJcbmRlY2xhcmUgdmFyIFFSaW91czogYW55O1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUVJTZXJ2aWNlIHtcclxuICAvKiog5b2T5YmNcXLlrp7kvosgKi9cclxuICByZWFkb25seSBxcjogYW55O1xyXG4gIC8qKiDog4zmma8gKi9cclxuICBiYWNrZ3JvdW5kOiBzdHJpbmc7XHJcbiAgLyoqIOiDjOaZr+mAj+aYjue6p+WIq++8jOiMg+WbtO+8mmAwLTFgIOS5i+mXtCAqL1xyXG4gIGJhY2tncm91bmRBbHBoYSA9IDEuMDtcclxuICAvKiog5YmN5pmvICovXHJcbiAgZm9yZWdyb3VuZDogc3RyaW5nO1xyXG4gIC8qKiDliY3mma/pgI/mmI7nuqfliKvvvIzojIPlm7TvvJpgMC0xYCDkuYvpl7QgKi9cclxuICBmb3JlZ3JvdW5kQWxwaGE6IG51bWJlcjtcclxuICAvKiog6K+v5beu5qCh5q2j57qn5YirICovXHJcbiAgbGV2ZWw6IHN0cmluZztcclxuICAvKiog5LqM57u056CB6L6T5Ye65Zu+54mHTUlNReexu+WeiyAqL1xyXG4gIG1pbWU6IHN0cmluZztcclxuICAvKiog5YaF6L656Led77yI5Y2V5L2N77yacHjvvIkgKi9cclxuICBwYWRkaW5nOiBudW1iZXI7XHJcbiAgLyoqIOWkp+Wwj++8iOWNleS9je+8mnB477yJICovXHJcbiAgc2l6ZTogbnVtYmVyO1xyXG4gIC8qKiDlgLwgKi9cclxuICB2YWx1ZTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihjb2c6IFFSQ29uZmlnKSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvZyk7XHJcbiAgICB0aGlzLnFyID0gbmV3IFFSaW91cygpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5oiQ5LqM57u056CB77yM5bm26L+U5ZueQmFzZTY057yW56CBXHJcbiAgICpcclxuICAgKiBAcGFyYW0gW3ZhbHVlXSDph43mlrDmjIflrprlgLxcclxuICAgKi9cclxuICByZWZyZXNoKHZhbHVlPzogc3RyaW5nIHwgT2JqZWN0KTogc3RyaW5nIHtcclxuICAgIHRoaXMucXIuc2V0KHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgPyB2YWx1ZSA6IHtcclxuICAgICAgYmFja2dyb3VuZDogdGhpcy5iYWNrZ3JvdW5kLFxyXG4gICAgICBiYWNrZ3JvdW5kQWxwaGE6IHRoaXMuYmFja2dyb3VuZEFscGhhLFxyXG4gICAgICBmb3JlZ3JvdW5kOiB0aGlzLmZvcmVncm91bmQsXHJcbiAgICAgIGZvcmVncm91bmRBbHBoYTogdGhpcy5mb3JlZ3JvdW5kQWxwaGEsXHJcbiAgICAgIGxldmVsOiB0aGlzLmxldmVsLFxyXG4gICAgICBwYWRkaW5nOiB0aGlzLnBhZGRpbmcsXHJcbiAgICAgIHNpemU6IHRoaXMuc2l6ZSxcclxuICAgICAgdmFsdWU6IHZhbHVlIHx8IHRoaXMudmFsdWUsXHJcbiAgICB9KTtcclxuICAgIHJldHVybiB0aGlzLmRhdGFVUkw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDov5Tlm57lvZPliY3kuoznu7TnoIFCYXNlNjTnvJbnoIFcclxuICAgKi9cclxuICBnZXQgZGF0YVVSTCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMucXIudG9EYXRhVVJMKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==