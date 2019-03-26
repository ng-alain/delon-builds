/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { QRConfig } from './qr.config';
import * as i0 from "@angular/core";
import * as i1 from "./qr.config";
export class QRService {
    /**
     * @param {?} cog
     */
    constructor(cog) {
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
     * @param {?=} value
     * @return {?}
     */
    refresh(value) {
        /** @type {?} */
        const option = typeof value === 'object'
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
    }
    /**
     * @private
     * @param {?} str
     * @return {?}
     */
    toUtf8ByteArray(str) {
        str = encodeURI(str);
        /** @type {?} */
        const result = [];
        for (let i = 0; i < str.length; i++) {
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
        v => String.fromCharCode(v))).join('');
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
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
QRService.ctorParameters = () => [
    { type: QRConfig }
];
/** @nocollapse */ QRService.ngInjectableDef = i0.defineInjectable({ factory: function QRService_Factory() { return new QRService(i0.inject(i1.QRConfig)); }, token: QRService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvcXIvIiwic291cmNlcyI6WyJxci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7OztBQUt2QyxNQUFNLE9BQU8sU0FBUzs7OztJQXNCcEIsWUFBWSxHQUFhOzs7O1FBaEJ6QixvQkFBZSxHQUFHLENBQUMsQ0FBQztRQWlCbEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDO0lBQ3pCLENBQUM7Ozs7Ozs7SUFPRCxPQUFPLENBQUMsS0FBbUI7O2NBQ25CLE1BQU0sR0FDVixPQUFPLEtBQUssS0FBSyxRQUFRO1lBQ3ZCLENBQUMsQ0FBQyxLQUFLO1lBQ1AsQ0FBQyxDQUFDO2dCQUNFLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtnQkFDM0IsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO2dCQUNyQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7Z0JBQzNCLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtnQkFDckMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO2dCQUNqQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87Z0JBQ3JCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtnQkFDZixLQUFLLEVBQUUsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLO2FBQzNCO1FBQ1AsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQzs7Ozs7O0lBRU8sZUFBZSxDQUFDLEdBQVc7UUFDakMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7Y0FDZixNQUFNLEdBQWEsRUFBRTtRQUMzQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNuQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFO2dCQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNoQztpQkFBTTtnQkFDTCxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDaEQsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNSO1NBQ0Y7UUFDRCxPQUFPLE1BQU0sQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUM7Ozs7O0lBS0QsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQzdCLENBQUM7OztZQXZFRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O1lBSnpCLFFBQVE7Ozs7Ozs7O0lBT2YsdUJBQWlCOzs7OztJQUVqQiwrQkFBbUI7Ozs7O0lBRW5CLG9DQUFvQjs7Ozs7SUFFcEIsK0JBQW1COzs7OztJQUVuQixvQ0FBd0I7Ozs7O0lBRXhCLDBCQUFjOzs7OztJQUVkLHlCQUFhOzs7OztJQUViLDRCQUFnQjs7Ozs7SUFFaEIseUJBQWE7Ozs7O0lBRWIsMEJBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBRUkNvbmZpZyB9IGZyb20gJy4vcXIuY29uZmlnJztcblxuZGVjbGFyZSB2YXIgUVJpb3VzOiBhbnk7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgUVJTZXJ2aWNlIHtcbiAgLyoqIOW9k+WJjXFy5a6e5L6LICovXG4gIHJlYWRvbmx5IHFyOiBhbnk7XG4gIC8qKiDog4zmma8gKi9cbiAgYmFja2dyb3VuZDogc3RyaW5nO1xuICAvKiog6IOM5pmv6YCP5piO57qn5Yir77yM6IyD5Zu077yaYDAtMWAg5LmL6Ze0ICovXG4gIGJhY2tncm91bmRBbHBoYSA9IDE7XG4gIC8qKiDliY3mma8gKi9cbiAgZm9yZWdyb3VuZDogc3RyaW5nO1xuICAvKiog5YmN5pmv6YCP5piO57qn5Yir77yM6IyD5Zu077yaYDAtMWAg5LmL6Ze0ICovXG4gIGZvcmVncm91bmRBbHBoYTogbnVtYmVyO1xuICAvKiog6K+v5beu5qCh5q2j57qn5YirICovXG4gIGxldmVsOiBzdHJpbmc7XG4gIC8qKiDkuoznu7TnoIHovpPlh7rlm77niYdNSU1F57G75Z6LICovXG4gIG1pbWU6IHN0cmluZztcbiAgLyoqIOWGhei+uei3ne+8iOWNleS9je+8mnB477yJICovXG4gIHBhZGRpbmc6IG51bWJlcjtcbiAgLyoqIOWkp+Wwj++8iOWNleS9je+8mnB477yJICovXG4gIHNpemU6IG51bWJlcjtcbiAgLyoqIOWAvCAqL1xuICB2YWx1ZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGNvZzogUVJDb25maWcpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvZyk7XG4gICAgdGhpcy5xciA9IG5ldyBRUmlvdXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDnlJ/miJDkuoznu7TnoIHvvIzlubbov5Tlm55CYXNlNjTnvJbnoIFcbiAgICpcbiAgICogQHBhcmFtIFt2YWx1ZV0g6YeN5paw5oyH5a6a5YC8XG4gICAqL1xuICByZWZyZXNoKHZhbHVlPzogc3RyaW5nIHwge30pOiBzdHJpbmcge1xuICAgIGNvbnN0IG9wdGlvbjogYW55ID1cbiAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCdcbiAgICAgICAgPyB2YWx1ZVxuICAgICAgICA6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRoaXMuYmFja2dyb3VuZCxcbiAgICAgICAgICAgIGJhY2tncm91bmRBbHBoYTogdGhpcy5iYWNrZ3JvdW5kQWxwaGEsXG4gICAgICAgICAgICBmb3JlZ3JvdW5kOiB0aGlzLmZvcmVncm91bmQsXG4gICAgICAgICAgICBmb3JlZ3JvdW5kQWxwaGE6IHRoaXMuZm9yZWdyb3VuZEFscGhhLFxuICAgICAgICAgICAgbGV2ZWw6IHRoaXMubGV2ZWwsXG4gICAgICAgICAgICBwYWRkaW5nOiB0aGlzLnBhZGRpbmcsXG4gICAgICAgICAgICBzaXplOiB0aGlzLnNpemUsXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUgfHwgdGhpcy52YWx1ZSxcbiAgICAgICAgICB9O1xuICAgIG9wdGlvbi52YWx1ZSA9IHRoaXMudG9VdGY4Qnl0ZUFycmF5KG9wdGlvbi52YWx1ZSk7XG4gICAgdGhpcy5xci5zZXQob3B0aW9uKTtcbiAgICByZXR1cm4gdGhpcy5kYXRhVVJMO1xuICB9XG5cbiAgcHJpdmF0ZSB0b1V0ZjhCeXRlQXJyYXkoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHN0ciA9IGVuY29kZVVSSShzdHIpO1xuICAgIGNvbnN0IHJlc3VsdDogbnVtYmVyW10gPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHN0ci5jaGFyQXQoaSkgIT09ICclJykge1xuICAgICAgICByZXN1bHQucHVzaChzdHIuY2hhckNvZGVBdChpKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQucHVzaChwYXJzZUludChzdHIuc3Vic3RyKGkgKyAxLCAyKSwgMTYpKTtcbiAgICAgICAgaSArPSAyO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0Lm1hcCh2ID0+IFN0cmluZy5mcm9tQ2hhckNvZGUodikpLmpvaW4oJycpO1xuICB9XG5cbiAgLyoqXG4gICAqIOi/lOWbnuW9k+WJjeS6jOe7tOeggUJhc2U2NOe8lueggVxuICAgKi9cbiAgZ2V0IGRhdGFVUkwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5xci50b0RhdGFVUkwoKTtcbiAgfVxufVxuIl19