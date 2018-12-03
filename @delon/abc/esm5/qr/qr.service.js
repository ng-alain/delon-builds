/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { QRConfig } from './qr.config';
var QRService = /** @class */ (function () {
    function QRService(cog) {
        /**
         * 背景透明级别，范围：`0-1` 之间
         */
        this.backgroundAlpha = 1;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvcXIvIiwic291cmNlcyI6WyJxci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFLdkM7SUF3QkUsbUJBQVksR0FBYTs7OztRQWhCekIsb0JBQWUsR0FBRyxDQUFDLENBQUM7UUFpQmxCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQ7Ozs7T0FJRzs7Ozs7OztJQUNILDJCQUFPOzs7Ozs7SUFBUCxVQUFRLEtBQW1CO1FBQ3pCLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUM5QyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1lBQ3JDLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7WUFDckMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixLQUFLLEVBQUUsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLO1NBQzNCLENBQUMsQ0FBQztRQUNILE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBS0Qsc0JBQUksOEJBQU87UUFIWDs7V0FFRzs7Ozs7UUFDSDtZQUNFLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM3QixDQUFDOzs7T0FBQTs7Z0JBckRGLFVBQVU7Ozs7Z0JBTEYsUUFBUTs7SUEyRGpCLGdCQUFDO0NBQUEsQUF0REQsSUFzREM7U0FyRFksU0FBUzs7Ozs7O0lBR3BCLHVCQUFpQjs7Ozs7SUFFakIsK0JBQW1COzs7OztJQUVuQixvQ0FBb0I7Ozs7O0lBRXBCLCtCQUFtQjs7Ozs7SUFFbkIsb0NBQXdCOzs7OztJQUV4QiwwQkFBYzs7Ozs7SUFFZCx5QkFBYTs7Ozs7SUFFYiw0QkFBZ0I7Ozs7O0lBRWhCLHlCQUFhOzs7OztJQUViLDBCQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUVJDb25maWcgfSBmcm9tICcuL3FyLmNvbmZpZyc7XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbmRlY2xhcmUgdmFyIFFSaW91czogYW55O1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUVJTZXJ2aWNlIHtcbiAgLyoqIOW9k+WJjXFy5a6e5L6LICovXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgcmVhZG9ubHkgcXI6IGFueTtcbiAgLyoqIOiDjOaZryAqL1xuICBiYWNrZ3JvdW5kOiBzdHJpbmc7XG4gIC8qKiDog4zmma/pgI/mmI7nuqfliKvvvIzojIPlm7TvvJpgMC0xYCDkuYvpl7QgKi9cbiAgYmFja2dyb3VuZEFscGhhID0gMTtcbiAgLyoqIOWJjeaZryAqL1xuICBmb3JlZ3JvdW5kOiBzdHJpbmc7XG4gIC8qKiDliY3mma/pgI/mmI7nuqfliKvvvIzojIPlm7TvvJpgMC0xYCDkuYvpl7QgKi9cbiAgZm9yZWdyb3VuZEFscGhhOiBudW1iZXI7XG4gIC8qKiDor6/lt67moKHmraPnuqfliKsgKi9cbiAgbGV2ZWw6IHN0cmluZztcbiAgLyoqIOS6jOe7tOeggei+k+WHuuWbvueJh01JTUXnsbvlnosgKi9cbiAgbWltZTogc3RyaW5nO1xuICAvKiog5YaF6L656Led77yI5Y2V5L2N77yacHjvvIkgKi9cbiAgcGFkZGluZzogbnVtYmVyO1xuICAvKiog5aSn5bCP77yI5Y2V5L2N77yacHjvvIkgKi9cbiAgc2l6ZTogbnVtYmVyO1xuICAvKiog5YC8ICovXG4gIHZhbHVlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoY29nOiBRUkNvbmZpZykge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29nKTtcbiAgICB0aGlzLnFyID0gbmV3IFFSaW91cygpO1xuICB9XG5cbiAgLyoqXG4gICAqIOeUn+aIkOS6jOe7tOegge+8jOW5tui/lOWbnkJhc2U2NOe8lueggVxuICAgKlxuICAgKiBAcGFyYW0gW3ZhbHVlXSDph43mlrDmjIflrprlgLxcbiAgICovXG4gIHJlZnJlc2godmFsdWU/OiBzdHJpbmcgfCB7fSk6IHN0cmluZyB7XG4gICAgdGhpcy5xci5zZXQodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyA/IHZhbHVlIDoge1xuICAgICAgYmFja2dyb3VuZDogdGhpcy5iYWNrZ3JvdW5kLFxuICAgICAgYmFja2dyb3VuZEFscGhhOiB0aGlzLmJhY2tncm91bmRBbHBoYSxcbiAgICAgIGZvcmVncm91bmQ6IHRoaXMuZm9yZWdyb3VuZCxcbiAgICAgIGZvcmVncm91bmRBbHBoYTogdGhpcy5mb3JlZ3JvdW5kQWxwaGEsXG4gICAgICBsZXZlbDogdGhpcy5sZXZlbCxcbiAgICAgIHBhZGRpbmc6IHRoaXMucGFkZGluZyxcbiAgICAgIHNpemU6IHRoaXMuc2l6ZSxcbiAgICAgIHZhbHVlOiB2YWx1ZSB8fCB0aGlzLnZhbHVlLFxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLmRhdGFVUkw7XG4gIH1cblxuICAvKipcbiAgICog6L+U5Zue5b2T5YmN5LqM57u056CBQmFzZTY057yW56CBXG4gICAqL1xuICBnZXQgZGF0YVVSTCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnFyLnRvRGF0YVVSTCgpO1xuICB9XG59XG4iXX0=