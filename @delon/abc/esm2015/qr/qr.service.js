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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi9hYmMvcXIvIiwic291cmNlcyI6WyJxci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFLdkMsTUFBTTs7OztJQXNCSixZQUFZLEdBQWE7Ozs7K0JBaEJQLEdBQUc7UUFpQm5CLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztLQUN4Qjs7Ozs7OztJQU9ELE9BQU8sQ0FBQyxLQUF1QjtRQUM3QixJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDOUMsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtZQUNyQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1lBQ3JDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsS0FBSyxFQUFFLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSztTQUMzQixDQUFDLENBQUM7UUFDSCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7S0FDckI7Ozs7O0lBS0QsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO0tBQzVCOzs7WUFwREYsVUFBVTs7OztZQUpGLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBRUkNvbmZpZyB9IGZyb20gJy4vcXIuY29uZmlnJztcblxuZGVjbGFyZSB2YXIgUVJpb3VzOiBhbnk7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBRUlNlcnZpY2Uge1xuICAvKiog5b2T5YmNcXLlrp7kvosgKi9cbiAgcmVhZG9ubHkgcXI6IGFueTtcbiAgLyoqIOiDjOaZryAqL1xuICBiYWNrZ3JvdW5kOiBzdHJpbmc7XG4gIC8qKiDog4zmma/pgI/mmI7nuqfliKvvvIzojIPlm7TvvJpgMC0xYCDkuYvpl7QgKi9cbiAgYmFja2dyb3VuZEFscGhhID0gMS4wO1xuICAvKiog5YmN5pmvICovXG4gIGZvcmVncm91bmQ6IHN0cmluZztcbiAgLyoqIOWJjeaZr+mAj+aYjue6p+WIq++8jOiMg+WbtO+8mmAwLTFgIOS5i+mXtCAqL1xuICBmb3JlZ3JvdW5kQWxwaGE6IG51bWJlcjtcbiAgLyoqIOivr+W3ruagoeato+e6p+WIqyAqL1xuICBsZXZlbDogc3RyaW5nO1xuICAvKiog5LqM57u056CB6L6T5Ye65Zu+54mHTUlNReexu+WeiyAqL1xuICBtaW1lOiBzdHJpbmc7XG4gIC8qKiDlhoXovrnot53vvIjljZXkvY3vvJpweO+8iSAqL1xuICBwYWRkaW5nOiBudW1iZXI7XG4gIC8qKiDlpKflsI/vvIjljZXkvY3vvJpweO+8iSAqL1xuICBzaXplOiBudW1iZXI7XG4gIC8qKiDlgLwgKi9cbiAgdmFsdWU6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihjb2c6IFFSQ29uZmlnKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb2cpO1xuICAgIHRoaXMucXIgPSBuZXcgUVJpb3VzKCk7XG4gIH1cblxuICAvKipcbiAgICog55Sf5oiQ5LqM57u056CB77yM5bm26L+U5ZueQmFzZTY057yW56CBXG4gICAqXG4gICAqIEBwYXJhbSBbdmFsdWVdIOmHjeaWsOaMh+WumuWAvFxuICAgKi9cbiAgcmVmcmVzaCh2YWx1ZT86IHN0cmluZyB8IE9iamVjdCk6IHN0cmluZyB7XG4gICAgdGhpcy5xci5zZXQodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyA/IHZhbHVlIDoge1xuICAgICAgYmFja2dyb3VuZDogdGhpcy5iYWNrZ3JvdW5kLFxuICAgICAgYmFja2dyb3VuZEFscGhhOiB0aGlzLmJhY2tncm91bmRBbHBoYSxcbiAgICAgIGZvcmVncm91bmQ6IHRoaXMuZm9yZWdyb3VuZCxcbiAgICAgIGZvcmVncm91bmRBbHBoYTogdGhpcy5mb3JlZ3JvdW5kQWxwaGEsXG4gICAgICBsZXZlbDogdGhpcy5sZXZlbCxcbiAgICAgIHBhZGRpbmc6IHRoaXMucGFkZGluZyxcbiAgICAgIHNpemU6IHRoaXMuc2l6ZSxcbiAgICAgIHZhbHVlOiB2YWx1ZSB8fCB0aGlzLnZhbHVlLFxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLmRhdGFVUkw7XG4gIH1cblxuICAvKipcbiAgICog6L+U5Zue5b2T5YmN5LqM57u056CBQmFzZTY057yW56CBXG4gICAqL1xuICBnZXQgZGF0YVVSTCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnFyLnRvRGF0YVVSTCgpO1xuICB9XG59XG4iXX0=