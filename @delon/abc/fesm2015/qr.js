import { Injectable, Component, Input, ChangeDetectionStrategy, ChangeDetectorRef, HostBinding, Output, EventEmitter, NgModule } from '@angular/core';
import { __decorate, __metadata } from 'tslib';
import { InputNumber, DelonUtilModule } from '@delon/util';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class QRComponent {
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
                template: `
  <img class="qr__img" src="{{dataURL}}">
  `,
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { QRService, QRComponent, QRConfig, QRModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXIuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BkZWxvbi9hYmMvcXIvcXIuY29uZmlnLnRzIiwibmc6Ly9AZGVsb24vYWJjL3FyL3FyLnNlcnZpY2UudHMiLCJuZzovL0BkZWxvbi9hYmMvcXIvcXIuY29tcG9uZW50LnRzIiwibmc6Ly9AZGVsb24vYWJjL3FyL3FyLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgUVJDb25maWcge1xyXG4gIC8qKiDDqMKDwozDpsKZwq/Dr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgd2hpdGVgICovXHJcbiAgYmFja2dyb3VuZCA9ICd3aGl0ZSc7XHJcbiAgLyoqIMOowoPCjMOmwpnCr8OpwoDCj8OmwpjCjsOnwrrCp8OlwojCq8OvwrzCjMOowozCg8OlwpvCtMOvwrzCmmAwLTFgIMOkwrnCi8OpwpfCtMOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmAxLjBgICovXHJcbiAgYmFja2dyb3VuZEFscGhhID0gMS4wO1xyXG4gIC8qKiDDpcKJwo3DpsKZwq/Dr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgYmxhY2tgICovXHJcbiAgZm9yZWdyb3VuZCA9ICdibGFjayc7XHJcbiAgLyoqIMOlwonCjcOmwpnCr8OpwoDCj8OmwpjCjsOnwrrCp8OlwojCq8OvwrzCjMOowozCg8OlwpvCtMOvwrzCmmAwLTFgIMOkwrnCi8OpwpfCtMOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmAxLjBgICovXHJcbiAgZm9yZWdyb3VuZEFscGhhID0gMS4wO1xyXG4gIC8qKiDDqMKvwq/DpcK3wq7DpsKgwqHDpsKtwqPDp8K6wqfDpcKIwqvDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgTGAgKi9cclxuICBsZXZlbDogJ0wnIHwgJ00nIHwgJ1EnIHwgJ0gnID0gJ0wnO1xyXG4gIC8qKiDDpMK6wozDp8K7wrTDp8KgwoHDqMK+wpPDpcKHwrrDpcKbwr7Dp8KJwodNSU1Fw6fCscK7w6XCnsKLw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYGltYWdlL3BuZ2AgKi9cclxuICBtaW1lID0gJ2ltYWdlL3BuZyc7XHJcbiAgLyoqIMOlwobChcOowr7CucOowrfCncOvwrzCiMOlwo3ClcOkwr3CjcOvwrzCmnB4w6/CvMKJw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYDEwYCAqL1xyXG4gIHBhZGRpbmcgPSAxMDtcclxuICAvKiogw6XCpMKnw6XCsMKPw6/CvMKIw6XCjcKVw6TCvcKNw6/CvMKacHjDr8K8wonDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgMjIwYCAqL1xyXG4gIHNpemUgPSAyMjA7XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBRUkNvbmZpZyB9IGZyb20gJy4vcXIuY29uZmlnJztcclxuXHJcbmRlY2xhcmUgdmFyIFFSaW91czogYW55O1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUVJTZXJ2aWNlIHtcclxuICAvKiogw6XCvcKTw6XCicKNcXLDpcKuwp7DpMK+wosgKi9cclxuICByZWFkb25seSBxcjogYW55O1xyXG4gIC8qKiDDqMKDwozDpsKZwq8gKi9cclxuICBiYWNrZ3JvdW5kOiBzdHJpbmc7XHJcbiAgLyoqIMOowoPCjMOmwpnCr8OpwoDCj8OmwpjCjsOnwrrCp8OlwojCq8OvwrzCjMOowozCg8OlwpvCtMOvwrzCmmAwLTFgIMOkwrnCi8OpwpfCtCAqL1xyXG4gIGJhY2tncm91bmRBbHBoYSA9IDEuMDtcclxuICAvKiogw6XCicKNw6bCmcKvICovXHJcbiAgZm9yZWdyb3VuZDogc3RyaW5nO1xyXG4gIC8qKiDDpcKJwo3DpsKZwq/DqcKAwo/DpsKYwo7Dp8K6wqfDpcKIwqvDr8K8wozDqMKMwoPDpcKbwrTDr8K8wppgMC0xYCDDpMK5wovDqcKXwrQgKi9cclxuICBmb3JlZ3JvdW5kQWxwaGE6IG51bWJlcjtcclxuICAvKiogw6jCr8Kvw6XCt8Kuw6bCoMKhw6bCrcKjw6fCusKnw6XCiMKrICovXHJcbiAgbGV2ZWw6IHN0cmluZztcclxuICAvKiogw6TCusKMw6fCu8K0w6fCoMKBw6jCvsKTw6XCh8K6w6XCm8K+w6fCicKHTUlNRcOnwrHCu8Olwp7CiyAqL1xyXG4gIG1pbWU6IHN0cmluZztcclxuICAvKiogw6XChsKFw6jCvsK5w6jCt8Kdw6/CvMKIw6XCjcKVw6TCvcKNw6/CvMKacHjDr8K8wokgKi9cclxuICBwYWRkaW5nOiBudW1iZXI7XHJcbiAgLyoqIMOlwqTCp8OlwrDCj8OvwrzCiMOlwo3ClcOkwr3CjcOvwrzCmnB4w6/CvMKJICovXHJcbiAgc2l6ZTogbnVtYmVyO1xyXG4gIC8qKiDDpcKAwrwgKi9cclxuICB2YWx1ZTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihjb2c6IFFSQ29uZmlnKSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvZyk7XHJcbiAgICB0aGlzLnFyID0gbmV3IFFSaW91cygpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogw6fClMKfw6bCiMKQw6TCusKMw6fCu8K0w6fCoMKBw6/CvMKMw6XCucK2w6jCv8KUw6XCm8KeQmFzZTY0w6fCvMKWw6fCoMKBXHJcbiAgICpcclxuICAgKiBAcGFyYW0gW3ZhbHVlXSDDqcKHwo3DpsKWwrDDpsKMwofDpcKuwprDpcKAwrxcclxuICAgKi9cclxuICByZWZyZXNoKHZhbHVlPzogc3RyaW5nIHwgT2JqZWN0KTogc3RyaW5nIHtcclxuICAgIHRoaXMucXIuc2V0KHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgPyB2YWx1ZSA6IHtcclxuICAgICAgYmFja2dyb3VuZDogdGhpcy5iYWNrZ3JvdW5kLFxyXG4gICAgICBiYWNrZ3JvdW5kQWxwaGE6IHRoaXMuYmFja2dyb3VuZEFscGhhLFxyXG4gICAgICBmb3JlZ3JvdW5kOiB0aGlzLmZvcmVncm91bmQsXHJcbiAgICAgIGZvcmVncm91bmRBbHBoYTogdGhpcy5mb3JlZ3JvdW5kQWxwaGEsXHJcbiAgICAgIGxldmVsOiB0aGlzLmxldmVsLFxyXG4gICAgICBwYWRkaW5nOiB0aGlzLnBhZGRpbmcsXHJcbiAgICAgIHNpemU6IHRoaXMuc2l6ZSxcclxuICAgICAgdmFsdWU6IHZhbHVlIHx8IHRoaXMudmFsdWUsXHJcbiAgICB9KTtcclxuICAgIHJldHVybiB0aGlzLmRhdGFVUkw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDDqMK/wpTDpcKbwp7DpcK9wpPDpcKJwo3DpMK6wozDp8K7wrTDp8KgwoFCYXNlNjTDp8K8wpbDp8KgwoFcclxuICAgKi9cclxuICBnZXQgZGF0YVVSTCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMucXIudG9EYXRhVVJMKCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBIb3N0QmluZGluZyxcclxuICBPdXRwdXQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJbnB1dE51bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcclxuXHJcbmltcG9ydCB7IFFSU2VydmljZSB9IGZyb20gJy4vcXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFFSQ29uZmlnIH0gZnJvbSAnLi9xci5jb25maWcnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdxcicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8aW1nIGNsYXNzPVwicXJfX2ltZ1wiIHNyYz1cInt7ZGF0YVVSTH19XCI+XHJcbiAgYCxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBob3N0OiB7ICdbY2xhc3MucXJdJzogJ3RydWUnIH0sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBRUkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgZGF0YVVSTDogc3RyaW5nO1xyXG4gIC8vIHJlZ2lvbjogZmllbGRzXHJcblxyXG4gIC8qKiDDqMKDwozDpsKZwq8gKi9cclxuICBASW5wdXQoKVxyXG4gIGJhY2tncm91bmQ6IHN0cmluZztcclxuICAvKiogw6jCg8KMw6bCmcKvw6nCgMKPw6bCmMKOw6fCusKnw6XCiMKrw6/CvMKMw6jCjMKDw6XCm8K0w6/CvMKaYDAtMWAgw6TCucKLw6nCl8K0ICovXHJcbiAgQElucHV0KClcclxuICBiYWNrZ3JvdW5kQWxwaGE6IG51bWJlcjtcclxuICAvKiogw6XCicKNw6bCmcKvICovXHJcbiAgQElucHV0KClcclxuICBmb3JlZ3JvdW5kOiBzdHJpbmc7XHJcbiAgLyoqIMOlwonCjcOmwpnCr8OpwoDCj8OmwpjCjsOnwrrCp8OlwojCq8OvwrzCjMOowozCg8OlwpvCtMOvwrzCmmAwLTFgIMOkwrnCi8OpwpfCtCAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZm9yZWdyb3VuZEFscGhhOiBudW1iZXI7XHJcbiAgLyoqIMOowq/Cr8OlwrfCrsOmwqDCocOmwq3Co8OnwrrCp8OlwojCqyAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgbGV2ZWw6IHN0cmluZztcclxuICAvKiogw6TCusKMw6fCu8K0w6fCoMKBw6jCvsKTw6XCh8K6w6XCm8K+w6fCicKHTUlNRcOnwrHCu8Olwp7CiyAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgbWltZTogc3RyaW5nO1xyXG4gIC8qKiDDpcKGwoXDqMK+wrnDqMK3wp3Dr8K8wojDpcKNwpXDpMK9wo3Dr8K8wppweMOvwrzCiSAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgQElucHV0TnVtYmVyKClcclxuICBwYWRkaW5nOiBudW1iZXI7XHJcbiAgLyoqIMOlwqTCp8OlwrDCj8OvwrzCiMOlwo3ClcOkwr3CjcOvwrzCmnB4w6/CvMKJICovXHJcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5oZWlnaHQucHgnKVxyXG4gIEBIb3N0QmluZGluZygnc3R5bGUud2lkdGgucHgnKVxyXG4gIEBJbnB1dCgpXHJcbiAgQElucHV0TnVtYmVyKClcclxuICBzaXplOiBudW1iZXI7XHJcbiAgLyoqIMOlwoDCvCAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgdmFsdWU6IHN0cmluZztcclxuICAvKiogw6XCj8KYw6bCm8K0w6bCl8K2w6XCm8Kew6jCsMKDICovXHJcbiAgQE91dHB1dCgpXHJcbiAgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG4gIC8vIGVuZHJlZ2lvblxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGNvZzogUVJDb25maWcsXHJcbiAgICBwcml2YXRlIHNydjogUVJTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgKSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvZyk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcclxuICAgIHRoaXMuZGF0YVVSTCA9IHRoaXMuc3J2LnJlZnJlc2goe1xyXG4gICAgICBiYWNrZ3JvdW5kOiB0aGlzLmJhY2tncm91bmQsXHJcbiAgICAgIGJhY2tncm91bmRBbHBoYTogdGhpcy5iYWNrZ3JvdW5kQWxwaGEsXHJcbiAgICAgIGZvcmVncm91bmQ6IHRoaXMuZm9yZWdyb3VuZCxcclxuICAgICAgZm9yZWdyb3VuZEFscGhhOiB0aGlzLmZvcmVncm91bmRBbHBoYSxcclxuICAgICAgbGV2ZWw6IHRoaXMubGV2ZWwsXHJcbiAgICAgIG1pbWU6IHRoaXMubWltZSxcclxuICAgICAgcGFkZGluZzogdGhpcy5wYWRkaW5nLFxyXG4gICAgICBzaXplOiB0aGlzLnNpemUsXHJcbiAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcclxuICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcy5kYXRhVVJMKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRGVsb25VdGlsTW9kdWxlIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xyXG5cclxuaW1wb3J0IHsgUVJDb25maWcgfSBmcm9tICcuL3FyLmNvbmZpZyc7XHJcbmltcG9ydCB7IFFSQ29tcG9uZW50IH0gZnJvbSAnLi9xci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBRUlNlcnZpY2UgfSBmcm9tICcuL3FyLnNlcnZpY2UnO1xyXG5cclxuY29uc3QgQ09NUE9ORU5UUyA9IFtRUkNvbXBvbmVudF07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIERlbG9uVXRpbE1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbLi4uQ09NUE9ORU5UU10sXHJcbiAgZXhwb3J0czogWy4uLkNPTVBPTkVOVFNdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUVJNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHsgbmdNb2R1bGU6IFFSTW9kdWxlLCBwcm92aWRlcnM6IFtRUkNvbmZpZywgUVJTZXJ2aWNlXSB9O1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7OzBCQUVlLE9BQU87Ozs7K0JBRUYsR0FBRzs7OzswQkFFUixPQUFPOzs7OytCQUVGLEdBQUc7Ozs7cUJBRVUsR0FBRzs7OztvQkFFM0IsV0FBVzs7Ozt1QkFFUixFQUFFOzs7O29CQUVMLEdBQUc7O0NBQ1g7Ozs7OztBQ2pCRDs7OztJQTRCRSxZQUFZLEdBQWE7Ozs7K0JBaEJQLEdBQUc7UUFpQm5CLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxNQUFNLEVBQUUs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