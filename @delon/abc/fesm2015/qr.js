import { Injectable, Component, Input, ChangeDetectionStrategy, ChangeDetectorRef, HostBinding, Output, EventEmitter, NgModule } from '@angular/core';
import { __decorate, __metadata } from 'tslib';
import { InputNumber, DelonUtilModule } from '@delon/util';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class QRConfig {
    constructor() {
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
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class QRService {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class QRComponent {
    // #endregion
    /**
     * @param {?} cog
     * @param {?} srv
     * @param {?} cd
     */
    constructor(cog, srv, cd) {
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
    ngOnChanges() {
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
    }
}
QRComponent.decorators = [
    { type: Component, args: [{
                selector: 'qr',
                template: `<img class="qr__img" src="{{dataURL}}">`,
                preserveWhitespaces: false,
                host: { '[class.qr]': 'true' },
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
QRComponent.ctorParameters = () => [
    { type: QRConfig },
    { type: QRService },
    { type: ChangeDetectorRef }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const COMPONENTS = [QRComponent];
class QRModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: QRModule, providers: [QRConfig, QRService] };
    }
}
QRModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, DelonUtilModule],
                declarations: [...COMPONENTS],
                exports: [...COMPONENTS],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { QRService, QRComponent, QRConfig, QRModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXIuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BkZWxvbi9hYmMvcXIvcXIuY29uZmlnLnRzIiwibmc6Ly9AZGVsb24vYWJjL3FyL3FyLnNlcnZpY2UudHMiLCJuZzovL0BkZWxvbi9hYmMvcXIvcXIuY29tcG9uZW50LnRzIiwibmc6Ly9AZGVsb24vYWJjL3FyL3FyLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgUVJDb25maWcge1xuICAvKiogw6jCg8KMw6bCmcKvw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYHdoaXRlYCAqL1xuICBiYWNrZ3JvdW5kID0gJ3doaXRlJztcbiAgLyoqIMOowoPCjMOmwpnCr8OpwoDCj8OmwpjCjsOnwrrCp8OlwojCq8OvwrzCjMOowozCg8OlwpvCtMOvwrzCmmAwLTFgIMOkwrnCi8OpwpfCtMOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmAxLjBgICovXG4gIGJhY2tncm91bmRBbHBoYSA9IDEuMDtcbiAgLyoqIMOlwonCjcOmwpnCr8OvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmBibGFja2AgKi9cbiAgZm9yZWdyb3VuZCA9ICdibGFjayc7XG4gIC8qKiDDpcKJwo3DpsKZwq/DqcKAwo/DpsKYwo7Dp8K6wqfDpcKIwqvDr8K8wozDqMKMwoPDpcKbwrTDr8K8wppgMC0xYCDDpMK5wovDqcKXwrTDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgMS4wYCAqL1xuICBmb3JlZ3JvdW5kQWxwaGEgPSAxLjA7XG4gIC8qKiDDqMKvwq/DpcK3wq7DpsKgwqHDpsKtwqPDp8K6wqfDpcKIwqvDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgTGAgKi9cbiAgbGV2ZWw6ICdMJyB8ICdNJyB8ICdRJyB8ICdIJyA9ICdMJztcbiAgLyoqIMOkwrrCjMOnwrvCtMOnwqDCgcOowr7Ck8OlwofCusOlwpvCvsOnwonCh01JTUXDp8KxwrvDpcKewovDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgaW1hZ2UvcG5nYCAqL1xuICBtaW1lID0gJ2ltYWdlL3BuZyc7XG4gIC8qKiDDpcKGwoXDqMK+wrnDqMK3wp3Dr8K8wojDpcKNwpXDpMK9wo3Dr8K8wppweMOvwrzCicOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmAxMGAgKi9cbiAgcGFkZGluZyA9IDEwO1xuICAvKiogw6XCpMKnw6XCsMKPw6/CvMKIw6XCjcKVw6TCvcKNw6/CvMKacHjDr8K8wonDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgMjIwYCAqL1xuICBzaXplID0gMjIwO1xufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUVJDb25maWcgfSBmcm9tICcuL3FyLmNvbmZpZyc7XG5cbmRlY2xhcmUgdmFyIFFSaW91czogYW55O1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUVJTZXJ2aWNlIHtcbiAgLyoqIMOlwr3Ck8OlwonCjXFyw6XCrsKew6TCvsKLICovXG4gIHJlYWRvbmx5IHFyOiBhbnk7XG4gIC8qKiDDqMKDwozDpsKZwq8gKi9cbiAgYmFja2dyb3VuZDogc3RyaW5nO1xuICAvKiogw6jCg8KMw6bCmcKvw6nCgMKPw6bCmMKOw6fCusKnw6XCiMKrw6/CvMKMw6jCjMKDw6XCm8K0w6/CvMKaYDAtMWAgw6TCucKLw6nCl8K0ICovXG4gIGJhY2tncm91bmRBbHBoYSA9IDEuMDtcbiAgLyoqIMOlwonCjcOmwpnCryAqL1xuICBmb3JlZ3JvdW5kOiBzdHJpbmc7XG4gIC8qKiDDpcKJwo3DpsKZwq/DqcKAwo/DpsKYwo7Dp8K6wqfDpcKIwqvDr8K8wozDqMKMwoPDpcKbwrTDr8K8wppgMC0xYCDDpMK5wovDqcKXwrQgKi9cbiAgZm9yZWdyb3VuZEFscGhhOiBudW1iZXI7XG4gIC8qKiDDqMKvwq/DpcK3wq7DpsKgwqHDpsKtwqPDp8K6wqfDpcKIwqsgKi9cbiAgbGV2ZWw6IHN0cmluZztcbiAgLyoqIMOkwrrCjMOnwrvCtMOnwqDCgcOowr7Ck8OlwofCusOlwpvCvsOnwonCh01JTUXDp8KxwrvDpcKewosgKi9cbiAgbWltZTogc3RyaW5nO1xuICAvKiogw6XChsKFw6jCvsK5w6jCt8Kdw6/CvMKIw6XCjcKVw6TCvcKNw6/CvMKacHjDr8K8wokgKi9cbiAgcGFkZGluZzogbnVtYmVyO1xuICAvKiogw6XCpMKnw6XCsMKPw6/CvMKIw6XCjcKVw6TCvcKNw6/CvMKacHjDr8K8wokgKi9cbiAgc2l6ZTogbnVtYmVyO1xuICAvKiogw6XCgMK8ICovXG4gIHZhbHVlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoY29nOiBRUkNvbmZpZykge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29nKTtcbiAgICB0aGlzLnFyID0gbmV3IFFSaW91cygpO1xuICB9XG5cbiAgLyoqXG4gICAqIMOnwpTCn8OmwojCkMOkwrrCjMOnwrvCtMOnwqDCgcOvwrzCjMOlwrnCtsOowr/ClMOlwpvCnkJhc2U2NMOnwrzClsOnwqDCgVxuICAgKlxuICAgKiBAcGFyYW0gW3ZhbHVlXSDDqcKHwo3DpsKWwrDDpsKMwofDpcKuwprDpcKAwrxcbiAgICovXG4gIHJlZnJlc2godmFsdWU/OiBzdHJpbmcgfCBPYmplY3QpOiBzdHJpbmcge1xuICAgIHRoaXMucXIuc2V0KHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgPyB2YWx1ZSA6IHtcbiAgICAgIGJhY2tncm91bmQ6IHRoaXMuYmFja2dyb3VuZCxcbiAgICAgIGJhY2tncm91bmRBbHBoYTogdGhpcy5iYWNrZ3JvdW5kQWxwaGEsXG4gICAgICBmb3JlZ3JvdW5kOiB0aGlzLmZvcmVncm91bmQsXG4gICAgICBmb3JlZ3JvdW5kQWxwaGE6IHRoaXMuZm9yZWdyb3VuZEFscGhhLFxuICAgICAgbGV2ZWw6IHRoaXMubGV2ZWwsXG4gICAgICBwYWRkaW5nOiB0aGlzLnBhZGRpbmcsXG4gICAgICBzaXplOiB0aGlzLnNpemUsXG4gICAgICB2YWx1ZTogdmFsdWUgfHwgdGhpcy52YWx1ZSxcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5kYXRhVVJMO1xuICB9XG5cbiAgLyoqXG4gICAqIMOowr/ClMOlwpvCnsOlwr3Ck8OlwonCjcOkwrrCjMOnwrvCtMOnwqDCgUJhc2U2NMOnwrzClsOnwqDCgVxuICAgKi9cbiAgZ2V0IGRhdGFVUkwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5xci50b0RhdGFVUkwoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIE9uQ2hhbmdlcyxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbnB1dE51bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuaW1wb3J0IHsgUVJTZXJ2aWNlIH0gZnJvbSAnLi9xci5zZXJ2aWNlJztcbmltcG9ydCB7IFFSQ29uZmlnIH0gZnJvbSAnLi9xci5jb25maWcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdxcicsXG4gIHRlbXBsYXRlOiBgPGltZyBjbGFzcz1cInFyX19pbWdcIiBzcmM9XCJ7e2RhdGFVUkx9fVwiPmAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBob3N0OiB7ICdbY2xhc3MucXJdJzogJ3RydWUnIH0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBRUkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIGRhdGFVUkw6IHN0cmluZztcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIC8qKiDDqMKDwozDpsKZwq8gKi9cbiAgQElucHV0KClcbiAgYmFja2dyb3VuZDogc3RyaW5nO1xuICAvKiogw6jCg8KMw6bCmcKvw6nCgMKPw6bCmMKOw6fCusKnw6XCiMKrw6/CvMKMw6jCjMKDw6XCm8K0w6/CvMKaYDAtMWAgw6TCucKLw6nCl8K0ICovXG4gIEBJbnB1dCgpXG4gIGJhY2tncm91bmRBbHBoYTogbnVtYmVyO1xuICAvKiogw6XCicKNw6bCmcKvICovXG4gIEBJbnB1dCgpXG4gIGZvcmVncm91bmQ6IHN0cmluZztcbiAgLyoqIMOlwonCjcOmwpnCr8OpwoDCj8OmwpjCjsOnwrrCp8OlwojCq8OvwrzCjMOowozCg8OlwpvCtMOvwrzCmmAwLTFgIMOkwrnCi8OpwpfCtCAqL1xuICBASW5wdXQoKVxuICBmb3JlZ3JvdW5kQWxwaGE6IG51bWJlcjtcbiAgLyoqIMOowq/Cr8OlwrfCrsOmwqDCocOmwq3Co8OnwrrCp8OlwojCqyAqL1xuICBASW5wdXQoKVxuICBsZXZlbDogc3RyaW5nO1xuICAvKiogw6TCusKMw6fCu8K0w6fCoMKBw6jCvsKTw6XCh8K6w6XCm8K+w6fCicKHTUlNRcOnwrHCu8Olwp7CiyAqL1xuICBASW5wdXQoKVxuICBtaW1lOiBzdHJpbmc7XG4gIC8qKiDDpcKGwoXDqMK+wrnDqMK3wp3Dr8K8wojDpcKNwpXDpMK9wo3Dr8K8wppweMOvwrzCiSAqL1xuICBASW5wdXQoKVxuICBASW5wdXROdW1iZXIoKVxuICBwYWRkaW5nOiBudW1iZXI7XG4gIC8qKiDDpcKkwqfDpcKwwo/Dr8K8wojDpcKNwpXDpMK9wo3Dr8K8wppweMOvwrzCiSAqL1xuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmhlaWdodC5weCcpXG4gIEBIb3N0QmluZGluZygnc3R5bGUud2lkdGgucHgnKVxuICBASW5wdXQoKVxuICBASW5wdXROdW1iZXIoKVxuICBzaXplOiBudW1iZXI7XG4gIC8qKiDDpcKAwrwgKi9cbiAgQElucHV0KClcbiAgdmFsdWU6IHN0cmluZztcbiAgLyoqIMOlwo/CmMOmwpvCtMOmwpfCtsOlwpvCnsOowrDCgyAqL1xuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGNvZzogUVJDb25maWcsXG4gICAgcHJpdmF0ZSBzcnY6IFFSU2VydmljZSxcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb2cpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5kYXRhVVJMID0gdGhpcy5zcnYucmVmcmVzaCh7XG4gICAgICBiYWNrZ3JvdW5kOiB0aGlzLmJhY2tncm91bmQsXG4gICAgICBiYWNrZ3JvdW5kQWxwaGE6IHRoaXMuYmFja2dyb3VuZEFscGhhLFxuICAgICAgZm9yZWdyb3VuZDogdGhpcy5mb3JlZ3JvdW5kLFxuICAgICAgZm9yZWdyb3VuZEFscGhhOiB0aGlzLmZvcmVncm91bmRBbHBoYSxcbiAgICAgIGxldmVsOiB0aGlzLmxldmVsLFxuICAgICAgbWltZTogdGhpcy5taW1lLFxuICAgICAgcGFkZGluZzogdGhpcy5wYWRkaW5nLFxuICAgICAgc2l6ZTogdGhpcy5zaXplLFxuICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgfSk7XG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgdGhpcy5jaGFuZ2UuZW1pdCh0aGlzLmRhdGFVUkwpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IERlbG9uVXRpbE1vZHVsZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuaW1wb3J0IHsgUVJDb25maWcgfSBmcm9tICcuL3FyLmNvbmZpZyc7XG5pbXBvcnQgeyBRUkNvbXBvbmVudCB9IGZyb20gJy4vcXIuY29tcG9uZW50JztcbmltcG9ydCB7IFFSU2VydmljZSB9IGZyb20gJy4vcXIuc2VydmljZSc7XG5cbmNvbnN0IENPTVBPTkVOVFMgPSBbUVJDb21wb25lbnRdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBEZWxvblV0aWxNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRTXSxcbiAgZXhwb3J0czogWy4uLkNPTVBPTkVOVFNdLFxufSlcbmV4cG9ydCBjbGFzcyBRUk1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7IG5nTW9kdWxlOiBRUk1vZHVsZSwgcHJvdmlkZXJzOiBbUVJDb25maWcsIFFSU2VydmljZV0gfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbInRzbGliXzEuX19kZWNvcmF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsTUFBYSxRQUFRO0lBQXJCOzs7O1FBRUUsZUFBVSxHQUFHLE9BQU8sQ0FBQzs7OztRQUVyQixvQkFBZSxHQUFHLEdBQUcsQ0FBQzs7OztRQUV0QixlQUFVLEdBQUcsT0FBTyxDQUFDOzs7O1FBRXJCLG9CQUFlLEdBQUcsR0FBRyxDQUFDOzs7O1FBRXRCLFVBQUssR0FBMEIsR0FBRyxDQUFDOzs7O1FBRW5DLFNBQUksR0FBRyxXQUFXLENBQUM7Ozs7UUFFbkIsWUFBTyxHQUFHLEVBQUUsQ0FBQzs7OztRQUViLFNBQUksR0FBRyxHQUFHLENBQUM7S0FDWjtDQUFBOzs7Ozs7QUNqQkQsTUFNYSxTQUFTOzs7O0lBc0JwQixZQUFZLEdBQWE7Ozs7UUFoQnpCLG9CQUFlLEdBQUcsR0FBRyxDQUFDO1FBaUJwQixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7S0FDeEI7Ozs7Ozs7SUFPRCxPQUFPLENBQUMsS0FBdUI7UUFDN0IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxLQUFLLEtBQUssUUFBUSxHQUFHLEtBQUssR0FBRztZQUM5QyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1lBQ3JDLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7WUFDckMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixLQUFLLEVBQUUsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLO1NBQzNCLENBQUMsQ0FBQztRQUNILE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztLQUNyQjs7Ozs7SUFLRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7S0FDNUI7OztZQXBERixVQUFVOzs7O1lBSkYsUUFBUTs7Ozs7OztNQ3FCSixXQUFXOzs7Ozs7O0lBMEN0QixZQUNFLEdBQWEsRUFDTCxHQUFjLEVBQ2QsRUFBcUI7UUFEckIsUUFBRyxHQUFILEdBQUcsQ0FBVztRQUNkLE9BQUUsR0FBRixFQUFFLENBQW1COzs7O1FBUHRCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBUzNDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQzFCOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7WUFDOUIsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtZQUNyQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1lBQ3JDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1NBQ2xCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ2hDOzs7WUF2RUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxJQUFJO2dCQUNkLFFBQVEsRUFBRSx5Q0FBeUM7Z0JBQ25ELG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLElBQUksRUFBRSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUU7Z0JBQzlCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O1lBUlEsUUFBUTtZQURSLFNBQVM7WUFQaEIsaUJBQWlCOzs7eUJBdUJoQixLQUFLOzhCQUdMLEtBQUs7eUJBR0wsS0FBSzs4QkFHTCxLQUFLO29CQUdMLEtBQUs7bUJBR0wsS0FBSztzQkFHTCxLQUFLO21CQUlMLFdBQVcsU0FBQyxpQkFBaUIsY0FDN0IsV0FBVyxTQUFDLGdCQUFnQixjQUM1QixLQUFLO29CQUlMLEtBQUs7cUJBR0wsTUFBTTs7QUFYUEE7SUFEQyxXQUFXLEVBQUU7OzRDQUNFO0FBTWhCQTtJQURDLFdBQVcsRUFBRTs7eUNBQ0Q7Ozs7OztBQ3REZjtNQVFNLFVBQVUsR0FBRyxDQUFDLFdBQVcsQ0FBQztBQU9oQyxNQUFhLFFBQVE7Ozs7SUFDbkIsT0FBTyxPQUFPO1FBQ1osT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxFQUFFLENBQUM7S0FDakU7OztZQVJGLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZUFBZSxDQUFDO2dCQUN4QyxZQUFZLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQztnQkFDN0IsT0FBTyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUM7YUFDekI7Ozs7Ozs7Ozs7Ozs7OzsifQ==