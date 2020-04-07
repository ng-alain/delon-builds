/**
 * @fileoverview added by tsickle
 * Generated from: qr.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { QRConfig } from './qr.config';
import * as i0 from "@angular/core";
import * as i1 from "./qr.config";
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
        { type: QRConfig }
    ]; };
    /** @nocollapse */ QRService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function QRService_Factory() { return new QRService(i0.ɵɵinject(i1.QRConfig)); }, token: QRService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvcXIvIiwic291cmNlcyI6WyJxci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7QUFJdkM7SUF1QkUsbUJBQVksR0FBYTs7OztRQWhCekIsb0JBQWUsR0FBRyxDQUFDLENBQUM7UUFpQmxCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQ7Ozs7T0FJRzs7Ozs7OztJQUNILDJCQUFPOzs7Ozs7SUFBUCxVQUFRLEtBQW1COztZQUNuQixNQUFNLEdBQ1YsT0FBTyxLQUFLLEtBQUssUUFBUTtZQUN2QixDQUFDLENBQUMsS0FBSztZQUNQLENBQUMsQ0FBQztnQkFDRSxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7Z0JBQzNCLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtnQkFDckMsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO2dCQUMzQixlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7Z0JBQ3JDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztnQkFDakIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO2dCQUNyQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7Z0JBQ2YsS0FBSyxFQUFFLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSzthQUMzQjtRQUNQLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7Ozs7OztJQUVPLG1DQUFlOzs7OztJQUF2QixVQUF3QixHQUFXO1FBQ2pDLEdBQUcsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7O1lBQ2YsTUFBTSxHQUFhLEVBQUU7UUFDM0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbkMsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTtnQkFDekIsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDaEM7aUJBQU07Z0JBQ0wsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hELENBQUMsSUFBSSxDQUFDLENBQUM7YUFDUjtTQUNGO1FBQ0QsT0FBTyxNQUFNLENBQUMsR0FBRzs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBdEIsQ0FBc0IsRUFBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBS0Qsc0JBQUksOEJBQU87UUFIWDs7V0FFRzs7Ozs7UUFDSDtZQUNFLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM3QixDQUFDOzs7T0FBQTs7Z0JBdkVGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7Z0JBSnpCLFFBQVE7OztvQkFEakI7Q0E2RUMsQUF4RUQsSUF3RUM7U0F2RVksU0FBUzs7Ozs7O0lBRXBCLHVCQUFpQjs7Ozs7SUFFakIsK0JBQW1COzs7OztJQUVuQixvQ0FBb0I7Ozs7O0lBRXBCLCtCQUFtQjs7Ozs7SUFFbkIsb0NBQXdCOzs7OztJQUV4QiwwQkFBYzs7Ozs7SUFFZCx5QkFBYTs7Ozs7SUFFYiw0QkFBZ0I7Ozs7O0lBRWhCLHlCQUFhOzs7OztJQUViLDBCQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUVJDb25maWcgfSBmcm9tICcuL3FyLmNvbmZpZyc7XG5cbmRlY2xhcmUgdmFyIFFSaW91czogYW55O1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFFSU2VydmljZSB7XG4gIC8qKiDlvZPliY1xcuWunuS+iyAqL1xuICByZWFkb25seSBxcjogYW55O1xuICAvKiog6IOM5pmvICovXG4gIGJhY2tncm91bmQ6IHN0cmluZztcbiAgLyoqIOiDjOaZr+mAj+aYjue6p+WIq++8jOiMg+WbtO+8mmAwLTFgIOS5i+mXtCAqL1xuICBiYWNrZ3JvdW5kQWxwaGEgPSAxO1xuICAvKiog5YmN5pmvICovXG4gIGZvcmVncm91bmQ6IHN0cmluZztcbiAgLyoqIOWJjeaZr+mAj+aYjue6p+WIq++8jOiMg+WbtO+8mmAwLTFgIOS5i+mXtCAqL1xuICBmb3JlZ3JvdW5kQWxwaGE6IG51bWJlcjtcbiAgLyoqIOivr+W3ruagoeato+e6p+WIqyAqL1xuICBsZXZlbDogc3RyaW5nO1xuICAvKiog5LqM57u056CB6L6T5Ye65Zu+54mHTUlNReexu+WeiyAqL1xuICBtaW1lOiBzdHJpbmc7XG4gIC8qKiDlhoXovrnot53vvIjljZXkvY3vvJpweO+8iSAqL1xuICBwYWRkaW5nOiBudW1iZXI7XG4gIC8qKiDlpKflsI/vvIjljZXkvY3vvJpweO+8iSAqL1xuICBzaXplOiBudW1iZXI7XG4gIC8qKiDlgLwgKi9cbiAgdmFsdWU6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihjb2c6IFFSQ29uZmlnKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb2cpO1xuICAgIHRoaXMucXIgPSBuZXcgUVJpb3VzKCk7XG4gIH1cblxuICAvKipcbiAgICog55Sf5oiQ5LqM57u056CB77yM5bm26L+U5ZueQmFzZTY057yW56CBXG4gICAqXG4gICAqIEBwYXJhbSBbdmFsdWVdIOmHjeaWsOaMh+WumuWAvFxuICAgKi9cbiAgcmVmcmVzaCh2YWx1ZT86IHN0cmluZyB8IHt9KTogc3RyaW5nIHtcbiAgICBjb25zdCBvcHRpb246IGFueSA9XG4gICAgICB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnXG4gICAgICAgID8gdmFsdWVcbiAgICAgICAgOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0aGlzLmJhY2tncm91bmQsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQWxwaGE6IHRoaXMuYmFja2dyb3VuZEFscGhhLFxuICAgICAgICAgICAgZm9yZWdyb3VuZDogdGhpcy5mb3JlZ3JvdW5kLFxuICAgICAgICAgICAgZm9yZWdyb3VuZEFscGhhOiB0aGlzLmZvcmVncm91bmRBbHBoYSxcbiAgICAgICAgICAgIGxldmVsOiB0aGlzLmxldmVsLFxuICAgICAgICAgICAgcGFkZGluZzogdGhpcy5wYWRkaW5nLFxuICAgICAgICAgICAgc2l6ZTogdGhpcy5zaXplLFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlIHx8IHRoaXMudmFsdWUsXG4gICAgICAgICAgfTtcbiAgICBvcHRpb24udmFsdWUgPSB0aGlzLnRvVXRmOEJ5dGVBcnJheShvcHRpb24udmFsdWUpO1xuICAgIHRoaXMucXIuc2V0KG9wdGlvbik7XG4gICAgcmV0dXJuIHRoaXMuZGF0YVVSTDtcbiAgfVxuXG4gIHByaXZhdGUgdG9VdGY4Qnl0ZUFycmF5KHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBzdHIgPSBlbmNvZGVVUkkoc3RyKTtcbiAgICBjb25zdCByZXN1bHQ6IG51bWJlcltdID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChzdHIuY2hhckF0KGkpICE9PSAnJScpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goc3RyLmNoYXJDb2RlQXQoaSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0LnB1c2gocGFyc2VJbnQoc3RyLnN1YnN0cihpICsgMSwgMiksIDE2KSk7XG4gICAgICAgIGkgKz0gMjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdC5tYXAodiA9PiBTdHJpbmcuZnJvbUNoYXJDb2RlKHYpKS5qb2luKCcnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDov5Tlm57lvZPliY3kuoznu7TnoIFCYXNlNjTnvJbnoIFcbiAgICovXG4gIGdldCBkYXRhVVJMKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMucXIudG9EYXRhVVJMKCk7XG4gIH1cbn1cbiJdfQ==