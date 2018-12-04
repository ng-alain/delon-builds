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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvcXIvIiwic291cmNlcyI6WyJxci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7O0lBMkJyQyxtQkFBWSxHQUFhOzs7OytCQWhCUCxHQUFHO1FBaUJuQixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7S0FDeEI7SUFFRDs7OztPQUlHOzs7Ozs7O0lBQ0gsMkJBQU87Ozs7OztJQUFQLFVBQVEsS0FBdUI7UUFDN0IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzlDLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7WUFDckMsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtZQUNyQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLEtBQUssRUFBRSxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUs7U0FDM0IsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0tBQ3JCO0lBS0Qsc0JBQUksOEJBQU87UUFIWDs7V0FFRzs7Ozs7UUFDSDtZQUNFLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUM1Qjs7O09BQUE7O2dCQXBERixVQUFVOzs7O2dCQUpGLFFBQVE7O29CQURqQjs7U0FNYSxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUVJDb25maWcgfSBmcm9tICcuL3FyLmNvbmZpZyc7XG5cbmRlY2xhcmUgdmFyIFFSaW91czogYW55O1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUVJTZXJ2aWNlIHtcbiAgLyoqIOW9k+WJjXFy5a6e5L6LICovXG4gIHJlYWRvbmx5IHFyOiBhbnk7XG4gIC8qKiDog4zmma8gKi9cbiAgYmFja2dyb3VuZDogc3RyaW5nO1xuICAvKiog6IOM5pmv6YCP5piO57qn5Yir77yM6IyD5Zu077yaYDAtMWAg5LmL6Ze0ICovXG4gIGJhY2tncm91bmRBbHBoYSA9IDEuMDtcbiAgLyoqIOWJjeaZryAqL1xuICBmb3JlZ3JvdW5kOiBzdHJpbmc7XG4gIC8qKiDliY3mma/pgI/mmI7nuqfliKvvvIzojIPlm7TvvJpgMC0xYCDkuYvpl7QgKi9cbiAgZm9yZWdyb3VuZEFscGhhOiBudW1iZXI7XG4gIC8qKiDor6/lt67moKHmraPnuqfliKsgKi9cbiAgbGV2ZWw6IHN0cmluZztcbiAgLyoqIOS6jOe7tOeggei+k+WHuuWbvueJh01JTUXnsbvlnosgKi9cbiAgbWltZTogc3RyaW5nO1xuICAvKiog5YaF6L656Led77yI5Y2V5L2N77yacHjvvIkgKi9cbiAgcGFkZGluZzogbnVtYmVyO1xuICAvKiog5aSn5bCP77yI5Y2V5L2N77yacHjvvIkgKi9cbiAgc2l6ZTogbnVtYmVyO1xuICAvKiog5YC8ICovXG4gIHZhbHVlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoY29nOiBRUkNvbmZpZykge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29nKTtcbiAgICB0aGlzLnFyID0gbmV3IFFSaW91cygpO1xuICB9XG5cbiAgLyoqXG4gICAqIOeUn+aIkOS6jOe7tOegge+8jOW5tui/lOWbnkJhc2U2NOe8lueggVxuICAgKlxuICAgKiBAcGFyYW0gW3ZhbHVlXSDph43mlrDmjIflrprlgLxcbiAgICovXG4gIHJlZnJlc2godmFsdWU/OiBzdHJpbmcgfCBPYmplY3QpOiBzdHJpbmcge1xuICAgIHRoaXMucXIuc2V0KHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgPyB2YWx1ZSA6IHtcbiAgICAgIGJhY2tncm91bmQ6IHRoaXMuYmFja2dyb3VuZCxcbiAgICAgIGJhY2tncm91bmRBbHBoYTogdGhpcy5iYWNrZ3JvdW5kQWxwaGEsXG4gICAgICBmb3JlZ3JvdW5kOiB0aGlzLmZvcmVncm91bmQsXG4gICAgICBmb3JlZ3JvdW5kQWxwaGE6IHRoaXMuZm9yZWdyb3VuZEFscGhhLFxuICAgICAgbGV2ZWw6IHRoaXMubGV2ZWwsXG4gICAgICBwYWRkaW5nOiB0aGlzLnBhZGRpbmcsXG4gICAgICBzaXplOiB0aGlzLnNpemUsXG4gICAgICB2YWx1ZTogdmFsdWUgfHwgdGhpcy52YWx1ZSxcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5kYXRhVVJMO1xuICB9XG5cbiAgLyoqXG4gICAqIOi/lOWbnuW9k+WJjeS6jOe7tOeggUJhc2U2NOe8lueggVxuICAgKi9cbiAgZ2V0IGRhdGFVUkwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5xci50b0RhdGFVUkwoKTtcbiAgfVxufVxuIl19