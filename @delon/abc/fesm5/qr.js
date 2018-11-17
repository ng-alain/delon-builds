import { Injectable, Component, Input, ChangeDetectionStrategy, ChangeDetectorRef, HostBinding, Output, EventEmitter, NgModule } from '@angular/core';
import { __decorate, __metadata, __spread } from 'tslib';
import { InputNumber, DelonUtilModule } from '@delon/util';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var QRConfig = /** @class */ (function () {
    function QRConfig() {
        /**
         * 背景，默认：`white`
         */
        this.background = 'white';
        /**
         * 背景透明级别，范围：`0-1` 之间，默认：`1.0`
         */
        this.backgroundAlpha = 1.0;
        /**
         * 前景，默认：`black`
         */
        this.foreground = 'black';
        /**
         * 前景透明级别，范围：`0-1` 之间，默认：`1.0`
         */
        this.foregroundAlpha = 1.0;
        /**
         * 误差校正级别，默认：`L`
         */
        this.level = 'L';
        /**
         * 二维码输出图片MIME类型，默认：`image/png`
         */
        this.mime = 'image/png';
        /**
         * 内边距（单位：px），默认：`10`
         */
        this.padding = 10;
        /**
         * 大小（单位：px），默认：`220`
         */
        this.size = 220;
    }
    return QRConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var QRComponent = /** @class */ (function () {
    // #endregion
    function QRComponent(cog, srv, cd) {
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
    QRComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
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
    };
    QRComponent.decorators = [
        { type: Component, args: [{
                    selector: 'qr',
                    template: "\n  <img class=\"qr__img\" src=\"{{dataURL}}\">\n  ",
                    preserveWhitespaces: false,
                    host: { '[class.qr]': 'true' },
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    QRComponent.ctorParameters = function () { return [
        { type: QRConfig },
        { type: QRService },
        { type: ChangeDetectorRef }
    ]; };
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
    __decorate([
        InputNumber(),
        __metadata("design:type", Number)
    ], QRComponent.prototype, "padding", void 0);
    __decorate([
        InputNumber(),
        __metadata("design:type", Number)
    ], QRComponent.prototype, "size", void 0);
    return QRComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var COMPONENTS = [QRComponent];
var QRModule = /** @class */ (function () {
    function QRModule() {
    }
    /**
     * @return {?}
     */
    QRModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: QRModule, providers: [QRConfig, QRService] };
    };
    QRModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, DelonUtilModule],
                    declarations: __spread(COMPONENTS),
                    exports: __spread(COMPONENTS),
                },] }
    ];
    return QRModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { QRService, QRComponent, QRConfig, QRModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXIuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BkZWxvbi9hYmMvcXIvcXIuY29uZmlnLnRzIiwibmc6Ly9AZGVsb24vYWJjL3FyL3FyLnNlcnZpY2UudHMiLCJuZzovL0BkZWxvbi9hYmMvcXIvcXIuY29tcG9uZW50LnRzIiwibmc6Ly9AZGVsb24vYWJjL3FyL3FyLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgUVJDb25maWcge1xuICAvKiogw6jCg8KMw6bCmcKvw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYHdoaXRlYCAqL1xuICBiYWNrZ3JvdW5kID0gJ3doaXRlJztcbiAgLyoqIMOowoPCjMOmwpnCr8OpwoDCj8OmwpjCjsOnwrrCp8OlwojCq8OvwrzCjMOowozCg8OlwpvCtMOvwrzCmmAwLTFgIMOkwrnCi8OpwpfCtMOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmAxLjBgICovXG4gIGJhY2tncm91bmRBbHBoYSA9IDEuMDtcbiAgLyoqIMOlwonCjcOmwpnCr8OvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmBibGFja2AgKi9cbiAgZm9yZWdyb3VuZCA9ICdibGFjayc7XG4gIC8qKiDDpcKJwo3DpsKZwq/DqcKAwo/DpsKYwo7Dp8K6wqfDpcKIwqvDr8K8wozDqMKMwoPDpcKbwrTDr8K8wppgMC0xYCDDpMK5wovDqcKXwrTDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgMS4wYCAqL1xuICBmb3JlZ3JvdW5kQWxwaGEgPSAxLjA7XG4gIC8qKiDDqMKvwq/DpcK3wq7DpsKgwqHDpsKtwqPDp8K6wqfDpcKIwqvDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgTGAgKi9cbiAgbGV2ZWw6ICdMJyB8ICdNJyB8ICdRJyB8ICdIJyA9ICdMJztcbiAgLyoqIMOkwrrCjMOnwrvCtMOnwqDCgcOowr7Ck8OlwofCusOlwpvCvsOnwonCh01JTUXDp8KxwrvDpcKewovDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgaW1hZ2UvcG5nYCAqL1xuICBtaW1lID0gJ2ltYWdlL3BuZyc7XG4gIC8qKiDDpcKGwoXDqMK+wrnDqMK3wp3Dr8K8wojDpcKNwpXDpMK9wo3Dr8K8wppweMOvwrzCicOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmAxMGAgKi9cbiAgcGFkZGluZyA9IDEwO1xuICAvKiogw6XCpMKnw6XCsMKPw6/CvMKIw6XCjcKVw6TCvcKNw6/CvMKacHjDr8K8wonDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgMjIwYCAqL1xuICBzaXplID0gMjIwO1xufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUVJDb25maWcgfSBmcm9tICcuL3FyLmNvbmZpZyc7XG5cbmRlY2xhcmUgdmFyIFFSaW91czogYW55O1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUVJTZXJ2aWNlIHtcbiAgLyoqIMOlwr3Ck8OlwonCjXFyw6XCrsKew6TCvsKLICovXG4gIHJlYWRvbmx5IHFyOiBhbnk7XG4gIC8qKiDDqMKDwozDpsKZwq8gKi9cbiAgYmFja2dyb3VuZDogc3RyaW5nO1xuICAvKiogw6jCg8KMw6bCmcKvw6nCgMKPw6bCmMKOw6fCusKnw6XCiMKrw6/CvMKMw6jCjMKDw6XCm8K0w6/CvMKaYDAtMWAgw6TCucKLw6nCl8K0ICovXG4gIGJhY2tncm91bmRBbHBoYSA9IDEuMDtcbiAgLyoqIMOlwonCjcOmwpnCryAqL1xuICBmb3JlZ3JvdW5kOiBzdHJpbmc7XG4gIC8qKiDDpcKJwo3DpsKZwq/DqcKAwo/DpsKYwo7Dp8K6wqfDpcKIwqvDr8K8wozDqMKMwoPDpcKbwrTDr8K8wppgMC0xYCDDpMK5wovDqcKXwrQgKi9cbiAgZm9yZWdyb3VuZEFscGhhOiBudW1iZXI7XG4gIC8qKiDDqMKvwq/DpcK3wq7DpsKgwqHDpsKtwqPDp8K6wqfDpcKIwqsgKi9cbiAgbGV2ZWw6IHN0cmluZztcbiAgLyoqIMOkwrrCjMOnwrvCtMOnwqDCgcOowr7Ck8OlwofCusOlwpvCvsOnwonCh01JTUXDp8KxwrvDpcKewosgKi9cbiAgbWltZTogc3RyaW5nO1xuICAvKiogw6XChsKFw6jCvsK5w6jCt8Kdw6/CvMKIw6XCjcKVw6TCvcKNw6/CvMKacHjDr8K8wokgKi9cbiAgcGFkZGluZzogbnVtYmVyO1xuICAvKiogw6XCpMKnw6XCsMKPw6/CvMKIw6XCjcKVw6TCvcKNw6/CvMKacHjDr8K8wokgKi9cbiAgc2l6ZTogbnVtYmVyO1xuICAvKiogw6XCgMK8ICovXG4gIHZhbHVlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoY29nOiBRUkNvbmZpZykge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29nKTtcbiAgICB0aGlzLnFyID0gbmV3IFFSaW91cygpO1xuICB9XG5cbiAgLyoqXG4gICAqIMOnwpTCn8OmwojCkMOkwrrCjMOnwrvCtMOnwqDCgcOvwrzCjMOlwrnCtsOowr/ClMOlwpvCnkJhc2U2NMOnwrzClsOnwqDCgVxuICAgKlxuICAgKiBAcGFyYW0gW3ZhbHVlXSDDqcKHwo3DpsKWwrDDpsKMwofDpcKuwprDpcKAwrxcbiAgICovXG4gIHJlZnJlc2godmFsdWU/OiBzdHJpbmcgfCBPYmplY3QpOiBzdHJpbmcge1xuICAgIHRoaXMucXIuc2V0KHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgPyB2YWx1ZSA6IHtcbiAgICAgIGJhY2tncm91bmQ6IHRoaXMuYmFja2dyb3VuZCxcbiAgICAgIGJhY2tncm91bmRBbHBoYTogdGhpcy5iYWNrZ3JvdW5kQWxwaGEsXG4gICAgICBmb3JlZ3JvdW5kOiB0aGlzLmZvcmVncm91bmQsXG4gICAgICBmb3JlZ3JvdW5kQWxwaGE6IHRoaXMuZm9yZWdyb3VuZEFscGhhLFxuICAgICAgbGV2ZWw6IHRoaXMubGV2ZWwsXG4gICAgICBwYWRkaW5nOiB0aGlzLnBhZGRpbmcsXG4gICAgICBzaXplOiB0aGlzLnNpemUsXG4gICAgICB2YWx1ZTogdmFsdWUgfHwgdGhpcy52YWx1ZSxcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5kYXRhVVJMO1xuICB9XG5cbiAgLyoqXG4gICAqIMOowr/ClMOlwpvCnsOlwr3Ck8OlwonCjcOkwrrCjMOnwrvCtMOnwqDCgUJhc2U2NMOnwrzClsOnwqDCgVxuICAgKi9cbiAgZ2V0IGRhdGFVUkwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5xci50b0RhdGFVUkwoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIE9uQ2hhbmdlcyxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbnB1dE51bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuaW1wb3J0IHsgUVJTZXJ2aWNlIH0gZnJvbSAnLi9xci5zZXJ2aWNlJztcbmltcG9ydCB7IFFSQ29uZmlnIH0gZnJvbSAnLi9xci5jb25maWcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdxcicsXG4gIHRlbXBsYXRlOiBgXG4gIDxpbWcgY2xhc3M9XCJxcl9faW1nXCIgc3JjPVwie3tkYXRhVVJMfX1cIj5cbiAgYCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGhvc3Q6IHsgJ1tjbGFzcy5xcl0nOiAndHJ1ZScgfSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFFSQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgZGF0YVVSTDogc3RyaW5nO1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgLyoqIMOowoPCjMOmwpnCryAqL1xuICBASW5wdXQoKVxuICBiYWNrZ3JvdW5kOiBzdHJpbmc7XG4gIC8qKiDDqMKDwozDpsKZwq/DqcKAwo/DpsKYwo7Dp8K6wqfDpcKIwqvDr8K8wozDqMKMwoPDpcKbwrTDr8K8wppgMC0xYCDDpMK5wovDqcKXwrQgKi9cbiAgQElucHV0KClcbiAgYmFja2dyb3VuZEFscGhhOiBudW1iZXI7XG4gIC8qKiDDpcKJwo3DpsKZwq8gKi9cbiAgQElucHV0KClcbiAgZm9yZWdyb3VuZDogc3RyaW5nO1xuICAvKiogw6XCicKNw6bCmcKvw6nCgMKPw6bCmMKOw6fCusKnw6XCiMKrw6/CvMKMw6jCjMKDw6XCm8K0w6/CvMKaYDAtMWAgw6TCucKLw6nCl8K0ICovXG4gIEBJbnB1dCgpXG4gIGZvcmVncm91bmRBbHBoYTogbnVtYmVyO1xuICAvKiogw6jCr8Kvw6XCt8Kuw6bCoMKhw6bCrcKjw6fCusKnw6XCiMKrICovXG4gIEBJbnB1dCgpXG4gIGxldmVsOiBzdHJpbmc7XG4gIC8qKiDDpMK6wozDp8K7wrTDp8KgwoHDqMK+wpPDpcKHwrrDpcKbwr7Dp8KJwodNSU1Fw6fCscK7w6XCnsKLICovXG4gIEBJbnB1dCgpXG4gIG1pbWU6IHN0cmluZztcbiAgLyoqIMOlwobChcOowr7CucOowrfCncOvwrzCiMOlwo3ClcOkwr3CjcOvwrzCmnB4w6/CvMKJICovXG4gIEBJbnB1dCgpXG4gIEBJbnB1dE51bWJlcigpXG4gIHBhZGRpbmc6IG51bWJlcjtcbiAgLyoqIMOlwqTCp8OlwrDCj8OvwrzCiMOlwo3ClcOkwr3CjcOvwrzCmnB4w6/CvMKJICovXG4gIEBIb3N0QmluZGluZygnc3R5bGUuaGVpZ2h0LnB4JylcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS53aWR0aC5weCcpXG4gIEBJbnB1dCgpXG4gIEBJbnB1dE51bWJlcigpXG4gIHNpemU6IG51bWJlcjtcbiAgLyoqIMOlwoDCvCAqL1xuICBASW5wdXQoKVxuICB2YWx1ZTogc3RyaW5nO1xuICAvKiogw6XCj8KYw6bCm8K0w6bCl8K2w6XCm8Kew6jCsMKDICovXG4gIEBPdXRwdXQoKVxuICByZWFkb25seSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgY29uc3RydWN0b3IoXG4gICAgY29nOiBRUkNvbmZpZyxcbiAgICBwcml2YXRlIHNydjogUVJTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICApIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvZyk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLmRhdGFVUkwgPSB0aGlzLnNydi5yZWZyZXNoKHtcbiAgICAgIGJhY2tncm91bmQ6IHRoaXMuYmFja2dyb3VuZCxcbiAgICAgIGJhY2tncm91bmRBbHBoYTogdGhpcy5iYWNrZ3JvdW5kQWxwaGEsXG4gICAgICBmb3JlZ3JvdW5kOiB0aGlzLmZvcmVncm91bmQsXG4gICAgICBmb3JlZ3JvdW5kQWxwaGE6IHRoaXMuZm9yZWdyb3VuZEFscGhhLFxuICAgICAgbGV2ZWw6IHRoaXMubGV2ZWwsXG4gICAgICBtaW1lOiB0aGlzLm1pbWUsXG4gICAgICBwYWRkaW5nOiB0aGlzLnBhZGRpbmcsXG4gICAgICBzaXplOiB0aGlzLnNpemUsXG4gICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICB9KTtcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICB0aGlzLmNoYW5nZS5lbWl0KHRoaXMuZGF0YVVSTCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRGVsb25VdGlsTW9kdWxlIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5pbXBvcnQgeyBRUkNvbmZpZyB9IGZyb20gJy4vcXIuY29uZmlnJztcbmltcG9ydCB7IFFSQ29tcG9uZW50IH0gZnJvbSAnLi9xci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUVJTZXJ2aWNlIH0gZnJvbSAnLi9xci5zZXJ2aWNlJztcblxuY29uc3QgQ09NUE9ORU5UUyA9IFtRUkNvbXBvbmVudF07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIERlbG9uVXRpbE1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogWy4uLkNPTVBPTkVOVFNdLFxuICBleHBvcnRzOiBbLi4uQ09NUE9ORU5UU10sXG59KVxuZXhwb3J0IGNsYXNzIFFSTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHsgbmdNb2R1bGU6IFFSTW9kdWxlLCBwcm92aWRlcnM6IFtRUkNvbmZpZywgUVJTZXJ2aWNlXSB9O1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsSUFBQTs7Ozs7MEJBRWUsT0FBTzs7OzsrQkFFRixHQUFHOzs7OzBCQUVSLE9BQU87Ozs7K0JBRUYsR0FBRzs7OztxQkFFVSxHQUFHOzs7O29CQUUzQixXQUFXOzs7O3VCQUVSLEVBQUU7Ozs7b0JBRUwsR0FBRzs7bUJBaEJaO0lBaUJDOzs7Ozs7QUNqQkQ7SUE0QkUsbUJBQVksR0FBYTs7OzsrQkFoQlAsR0FBRztRQWlCbkIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDO0tBQ3hCOzs7Ozs7Ozs7Ozs7SUFPRCwyQkFBTzs7Ozs7O0lBQVAsVUFBUSxLQUF1QjtRQUM3QixJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEtBQUssS0FBSyxRQUFRLEdBQUcsS0FBSyxHQUFHO1lBQzlDLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7WUFDckMsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtZQUNyQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLEtB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