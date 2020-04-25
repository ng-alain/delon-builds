/**
 * @fileoverview added by tsickle
 * Generated from: qr.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { AlainConfigService } from '@delon/util';
import { QR_DEFULAT_CONFIG } from './qr.config';
import * as i0 from "@angular/core";
import * as i1 from "@delon/util";
var QRService = /** @class */ (function () {
    function QRService(configSrv) {
        /**
         * 背景透明级别，范围：`0-1` 之间
         */
        this.backgroundAlpha = 1;
        configSrv.attach(this, 'qr', QR_DEFULAT_CONFIG);
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
        /** @type {?} */
        var option = typeof value === 'object'
            ? value
            : {
                background: this.background,
                backgroundAlpha: this.backgroundAlpha,
                foreground: this.foreground,
                foregroundAlpha: this.foregroundAlpha,
                level: this.level,
                padding: this.padding,
                size: this.size,
                value: value || this.value,
            };
        option.value = this.toUtf8ByteArray(option.value);
        this.qr.set(option);
        return this.dataURL;
    };
    /**
     * @private
     * @param {?} str
     * @return {?}
     */
    QRService.prototype.toUtf8ByteArray = /**
     * @private
     * @param {?} str
     * @return {?}
     */
    function (str) {
        str = encodeURI(str);
        /** @type {?} */
        var result = [];
        for (var i = 0; i < str.length; i++) {
            if (str.charAt(i) !== '%') {
                result.push(str.charCodeAt(i));
            }
            else {
                result.push(parseInt(str.substr(i + 1, 2), 16));
                i += 2;
            }
        }
        return result.map((/**
         * @param {?} v
         * @return {?}
         */
        function (v) { return String.fromCharCode(v); })).join('');
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
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    QRService.ctorParameters = function () { return [
        { type: AlainConfigService }
    ]; };
    /** @nocollapse */ QRService.ɵprov = i0.ɵɵdefineInjectable({ factory: function QRService_Factory() { return new QRService(i0.ɵɵinject(i1.AlainConfigService)); }, token: QRService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvcXIvIiwic291cmNlcyI6WyJxci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQWlCLE1BQU0sYUFBYSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7O0FBSWhEO0lBdUJFLG1CQUFZLFNBQTZCOzs7O1FBaEJ6QyxvQkFBZSxHQUFHLENBQUMsQ0FBQztRQWlCbEIsU0FBUyxDQUFDLE1BQU0sQ0FBc0IsSUFBSSxFQUFFLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQ7Ozs7T0FJRzs7Ozs7OztJQUNILDJCQUFPOzs7Ozs7SUFBUCxVQUFRLEtBQW1COztZQUNuQixNQUFNLEdBQ1YsT0FBTyxLQUFLLEtBQUssUUFBUTtZQUN2QixDQUFDLENBQUMsS0FBSztZQUNQLENBQUMsQ0FBQztnQkFDRSxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7Z0JBQzNCLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtnQkFDckMsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO2dCQUMzQixlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7Z0JBQ3JDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztnQkFDakIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO2dCQUNyQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7Z0JBQ2YsS0FBSyxFQUFFLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSzthQUMzQjtRQUNQLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7Ozs7OztJQUVPLG1DQUFlOzs7OztJQUF2QixVQUF3QixHQUFXO1FBQ2pDLEdBQUcsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7O1lBQ2YsTUFBTSxHQUFhLEVBQUU7UUFDM0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbkMsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTtnQkFDekIsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDaEM7aUJBQU07Z0JBQ0wsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hELENBQUMsSUFBSSxDQUFDLENBQUM7YUFDUjtTQUNGO1FBQ0QsT0FBTyxNQUFNLENBQUMsR0FBRzs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBdEIsQ0FBc0IsRUFBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBS0Qsc0JBQUksOEJBQU87UUFIWDs7V0FFRzs7Ozs7UUFDSDtZQUNFLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM3QixDQUFDOzs7T0FBQTs7Z0JBdkVGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7Z0JBTHpCLGtCQUFrQjs7O29CQUQzQjtDQThFQyxBQXhFRCxJQXdFQztTQXZFWSxTQUFTOzs7Ozs7SUFFcEIsdUJBQWlCOzs7OztJQUVqQiwrQkFBbUI7Ozs7O0lBRW5CLG9DQUFvQjs7Ozs7SUFFcEIsK0JBQW1COzs7OztJQUVuQixvQ0FBd0I7Ozs7O0lBRXhCLDBCQUFjOzs7OztJQUVkLHlCQUFhOzs7OztJQUViLDRCQUFnQjs7Ozs7SUFFaEIseUJBQWE7Ozs7O0lBRWIsMEJBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UsIEFsYWluUVJDb25maWcgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBRUl9ERUZVTEFUX0NPTkZJRyB9IGZyb20gJy4vcXIuY29uZmlnJztcblxuZGVjbGFyZSB2YXIgUVJpb3VzOiBhbnk7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgUVJTZXJ2aWNlIHtcbiAgLyoqIOW9k+WJjXFy5a6e5L6LICovXG4gIHJlYWRvbmx5IHFyOiBhbnk7XG4gIC8qKiDog4zmma8gKi9cbiAgYmFja2dyb3VuZDogc3RyaW5nO1xuICAvKiog6IOM5pmv6YCP5piO57qn5Yir77yM6IyD5Zu077yaYDAtMWAg5LmL6Ze0ICovXG4gIGJhY2tncm91bmRBbHBoYSA9IDE7XG4gIC8qKiDliY3mma8gKi9cbiAgZm9yZWdyb3VuZDogc3RyaW5nO1xuICAvKiog5YmN5pmv6YCP5piO57qn5Yir77yM6IyD5Zu077yaYDAtMWAg5LmL6Ze0ICovXG4gIGZvcmVncm91bmRBbHBoYTogbnVtYmVyO1xuICAvKiog6K+v5beu5qCh5q2j57qn5YirICovXG4gIGxldmVsOiBzdHJpbmc7XG4gIC8qKiDkuoznu7TnoIHovpPlh7rlm77niYdNSU1F57G75Z6LICovXG4gIG1pbWU6IHN0cmluZztcbiAgLyoqIOWGhei+uei3ne+8iOWNleS9je+8mnB477yJICovXG4gIHBhZGRpbmc6IG51bWJlcjtcbiAgLyoqIOWkp+Wwj++8iOWNleS9je+8mnB477yJICovXG4gIHNpemU6IG51bWJlcjtcbiAgLyoqIOWAvCAqL1xuICB2YWx1ZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZ1NydjogQWxhaW5Db25maWdTZXJ2aWNlKSB7XG4gICAgY29uZmlnU3J2LmF0dGFjaDxBbGFpblFSQ29uZmlnLCAncXInPih0aGlzLCAncXInLCBRUl9ERUZVTEFUX0NPTkZJRyk7XG4gICAgdGhpcy5xciA9IG5ldyBRUmlvdXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDnlJ/miJDkuoznu7TnoIHvvIzlubbov5Tlm55CYXNlNjTnvJbnoIFcbiAgICpcbiAgICogQHBhcmFtIFt2YWx1ZV0g6YeN5paw5oyH5a6a5YC8XG4gICAqL1xuICByZWZyZXNoKHZhbHVlPzogc3RyaW5nIHwge30pOiBzdHJpbmcge1xuICAgIGNvbnN0IG9wdGlvbjogYW55ID1cbiAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCdcbiAgICAgICAgPyB2YWx1ZVxuICAgICAgICA6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRoaXMuYmFja2dyb3VuZCxcbiAgICAgICAgICAgIGJhY2tncm91bmRBbHBoYTogdGhpcy5iYWNrZ3JvdW5kQWxwaGEsXG4gICAgICAgICAgICBmb3JlZ3JvdW5kOiB0aGlzLmZvcmVncm91bmQsXG4gICAgICAgICAgICBmb3JlZ3JvdW5kQWxwaGE6IHRoaXMuZm9yZWdyb3VuZEFscGhhLFxuICAgICAgICAgICAgbGV2ZWw6IHRoaXMubGV2ZWwsXG4gICAgICAgICAgICBwYWRkaW5nOiB0aGlzLnBhZGRpbmcsXG4gICAgICAgICAgICBzaXplOiB0aGlzLnNpemUsXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUgfHwgdGhpcy52YWx1ZSxcbiAgICAgICAgICB9O1xuICAgIG9wdGlvbi52YWx1ZSA9IHRoaXMudG9VdGY4Qnl0ZUFycmF5KG9wdGlvbi52YWx1ZSk7XG4gICAgdGhpcy5xci5zZXQob3B0aW9uKTtcbiAgICByZXR1cm4gdGhpcy5kYXRhVVJMO1xuICB9XG5cbiAgcHJpdmF0ZSB0b1V0ZjhCeXRlQXJyYXkoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHN0ciA9IGVuY29kZVVSSShzdHIpO1xuICAgIGNvbnN0IHJlc3VsdDogbnVtYmVyW10gPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHN0ci5jaGFyQXQoaSkgIT09ICclJykge1xuICAgICAgICByZXN1bHQucHVzaChzdHIuY2hhckNvZGVBdChpKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQucHVzaChwYXJzZUludChzdHIuc3Vic3RyKGkgKyAxLCAyKSwgMTYpKTtcbiAgICAgICAgaSArPSAyO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0Lm1hcCh2ID0+IFN0cmluZy5mcm9tQ2hhckNvZGUodikpLmpvaW4oJycpO1xuICB9XG5cbiAgLyoqXG4gICAqIOi/lOWbnuW9k+WJjeS6jOe7tOeggUJhc2U2NOe8lueggVxuICAgKi9cbiAgZ2V0IGRhdGFVUkwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5xci50b0RhdGFVUkwoKTtcbiAgfVxufVxuIl19