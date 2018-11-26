/**
 * @license ng-alain(cipchk@qq.com) v2.0.1
 * (c) 2018 Cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@delon/util'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@delon/abc/qr', ['exports', '@angular/core', '@delon/util', '@angular/common'], factory) :
    (factory((global.delon = global.delon || {}, global.delon.abc = global.delon.abc || {}, global.delon.abc.qr = {}),global.ng.core,global.delon.util,global.ng.common));
}(this, (function (exports,core,util,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
             */ function () {
                return this.qr.toDataURL();
            },
            enumerable: true,
            configurable: true
        });
        QRService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        QRService.ctorParameters = function () {
            return [
                { type: QRConfig }
            ];
        };
        return QRService;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var QRComponent = /** @class */ (function () {
        // #endregion
        function QRComponent(cog, srv, cd) {
            this.srv = srv;
            this.cd = cd;
            /**
             * 变更时回调
             */
            this.change = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'qr',
                        template: "<img class=\"qr__img\" src=\"{{dataURL}}\">",
                        preserveWhitespaces: false,
                        host: { '[class.qr]': 'true' },
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        QRComponent.ctorParameters = function () {
            return [
                { type: QRConfig },
                { type: QRService },
                { type: core.ChangeDetectorRef }
            ];
        };
        QRComponent.propDecorators = {
            background: [{ type: core.Input }],
            backgroundAlpha: [{ type: core.Input }],
            foreground: [{ type: core.Input }],
            foregroundAlpha: [{ type: core.Input }],
            level: [{ type: core.Input }],
            mime: [{ type: core.Input }],
            padding: [{ type: core.Input }],
            size: [{ type: core.HostBinding, args: ['style.height.px',] }, { type: core.HostBinding, args: ['style.width.px',] }, { type: core.Input }],
            value: [{ type: core.Input }],
            change: [{ type: core.Output }]
        };
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Number)
        ], QRComponent.prototype, "padding", void 0);
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Number)
        ], QRComponent.prototype, "size", void 0);
        return QRComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, util.DelonUtilModule],
                        declarations: __spread(COMPONENTS),
                        exports: __spread(COMPONENTS),
                    },] }
        ];
        return QRModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    exports.QRService = QRService;
    exports.QRComponent = QRComponent;
    exports.QRConfig = QRConfig;
    exports.QRModule = QRModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXIudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AZGVsb24vYWJjL3FyL3FyLmNvbmZpZy50cyIsIm5nOi8vQGRlbG9uL2FiYy9xci9xci5zZXJ2aWNlLnRzIiwibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm5nOi8vQGRlbG9uL2FiYy9xci9xci5jb21wb25lbnQudHMiLCJuZzovL0BkZWxvbi9hYmMvcXIvcXIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBRUkNvbmZpZyB7XG4gIC8qKiDDqMKDwozDpsKZwq/Dr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgd2hpdGVgICovXG4gIGJhY2tncm91bmQgPSAnd2hpdGUnO1xuICAvKiogw6jCg8KMw6bCmcKvw6nCgMKPw6bCmMKOw6fCusKnw6XCiMKrw6/CvMKMw6jCjMKDw6XCm8K0w6/CvMKaYDAtMWAgw6TCucKLw6nCl8K0w6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYDEuMGAgKi9cbiAgYmFja2dyb3VuZEFscGhhID0gMS4wO1xuICAvKiogw6XCicKNw6bCmcKvw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYGJsYWNrYCAqL1xuICBmb3JlZ3JvdW5kID0gJ2JsYWNrJztcbiAgLyoqIMOlwonCjcOmwpnCr8OpwoDCj8OmwpjCjsOnwrrCp8OlwojCq8OvwrzCjMOowozCg8OlwpvCtMOvwrzCmmAwLTFgIMOkwrnCi8OpwpfCtMOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmAxLjBgICovXG4gIGZvcmVncm91bmRBbHBoYSA9IDEuMDtcbiAgLyoqIMOowq/Cr8OlwrfCrsOmwqDCocOmwq3Co8OnwrrCp8OlwojCq8OvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmBMYCAqL1xuICBsZXZlbDogJ0wnIHwgJ00nIHwgJ1EnIHwgJ0gnID0gJ0wnO1xuICAvKiogw6TCusKMw6fCu8K0w6fCoMKBw6jCvsKTw6XCh8K6w6XCm8K+w6fCicKHTUlNRcOnwrHCu8Olwp7Ci8OvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmBpbWFnZS9wbmdgICovXG4gIG1pbWUgPSAnaW1hZ2UvcG5nJztcbiAgLyoqIMOlwobChcOowr7CucOowrfCncOvwrzCiMOlwo3ClcOkwr3CjcOvwrzCmnB4w6/CvMKJw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYDEwYCAqL1xuICBwYWRkaW5nID0gMTA7XG4gIC8qKiDDpcKkwqfDpcKwwo/Dr8K8wojDpcKNwpXDpMK9wo3Dr8K8wppweMOvwrzCicOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmAyMjBgICovXG4gIHNpemUgPSAyMjA7XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBRUkNvbmZpZyB9IGZyb20gJy4vcXIuY29uZmlnJztcblxuZGVjbGFyZSB2YXIgUVJpb3VzOiBhbnk7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBRUlNlcnZpY2Uge1xuICAvKiogw6XCvcKTw6XCicKNcXLDpcKuwp7DpMK+wosgKi9cbiAgcmVhZG9ubHkgcXI6IGFueTtcbiAgLyoqIMOowoPCjMOmwpnCryAqL1xuICBiYWNrZ3JvdW5kOiBzdHJpbmc7XG4gIC8qKiDDqMKDwozDpsKZwq/DqcKAwo/DpsKYwo7Dp8K6wqfDpcKIwqvDr8K8wozDqMKMwoPDpcKbwrTDr8K8wppgMC0xYCDDpMK5wovDqcKXwrQgKi9cbiAgYmFja2dyb3VuZEFscGhhID0gMS4wO1xuICAvKiogw6XCicKNw6bCmcKvICovXG4gIGZvcmVncm91bmQ6IHN0cmluZztcbiAgLyoqIMOlwonCjcOmwpnCr8OpwoDCj8OmwpjCjsOnwrrCp8OlwojCq8OvwrzCjMOowozCg8OlwpvCtMOvwrzCmmAwLTFgIMOkwrnCi8OpwpfCtCAqL1xuICBmb3JlZ3JvdW5kQWxwaGE6IG51bWJlcjtcbiAgLyoqIMOowq/Cr8OlwrfCrsOmwqDCocOmwq3Co8OnwrrCp8OlwojCqyAqL1xuICBsZXZlbDogc3RyaW5nO1xuICAvKiogw6TCusKMw6fCu8K0w6fCoMKBw6jCvsKTw6XCh8K6w6XCm8K+w6fCicKHTUlNRcOnwrHCu8Olwp7CiyAqL1xuICBtaW1lOiBzdHJpbmc7XG4gIC8qKiDDpcKGwoXDqMK+wrnDqMK3wp3Dr8K8wojDpcKNwpXDpMK9wo3Dr8K8wppweMOvwrzCiSAqL1xuICBwYWRkaW5nOiBudW1iZXI7XG4gIC8qKiDDpcKkwqfDpcKwwo/Dr8K8wojDpcKNwpXDpMK9wo3Dr8K8wppweMOvwrzCiSAqL1xuICBzaXplOiBudW1iZXI7XG4gIC8qKiDDpcKAwrwgKi9cbiAgdmFsdWU6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihjb2c6IFFSQ29uZmlnKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb2cpO1xuICAgIHRoaXMucXIgPSBuZXcgUVJpb3VzKCk7XG4gIH1cblxuICAvKipcbiAgICogw6fClMKfw6bCiMKQw6TCusKMw6fCu8K0w6fCoMKBw6/CvMKMw6XCucK2w6jCv8KUw6XCm8KeQmFzZTY0w6fCvMKWw6fCoMKBXG4gICAqXG4gICAqIEBwYXJhbSBbdmFsdWVdIMOpwofCjcOmwpbCsMOmwozCh8Olwq7CmsOlwoDCvFxuICAgKi9cbiAgcmVmcmVzaCh2YWx1ZT86IHN0cmluZyB8IE9iamVjdCk6IHN0cmluZyB7XG4gICAgdGhpcy5xci5zZXQodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyA/IHZhbHVlIDoge1xuICAgICAgYmFja2dyb3VuZDogdGhpcy5iYWNrZ3JvdW5kLFxuICAgICAgYmFja2dyb3VuZEFscGhhOiB0aGlzLmJhY2tncm91bmRBbHBoYSxcbiAgICAgIGZvcmVncm91bmQ6IHRoaXMuZm9yZWdyb3VuZCxcbiAgICAgIGZvcmVncm91bmRBbHBoYTogdGhpcy5mb3JlZ3JvdW5kQWxwaGEsXG4gICAgICBsZXZlbDogdGhpcy5sZXZlbCxcbiAgICAgIHBhZGRpbmc6IHRoaXMucGFkZGluZyxcbiAgICAgIHNpemU6IHRoaXMuc2l6ZSxcbiAgICAgIHZhbHVlOiB2YWx1ZSB8fCB0aGlzLnZhbHVlLFxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLmRhdGFVUkw7XG4gIH1cblxuICAvKipcbiAgICogw6jCv8KUw6XCm8Kew6XCvcKTw6XCicKNw6TCusKMw6fCu8K0w6fCoMKBQmFzZTY0w6fCvMKWw6fCoMKBXG4gICAqL1xuICBnZXQgZGF0YVVSTCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnFyLnRvRGF0YVVSTCgpO1xuICB9XG59XG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBPbkNoYW5nZXMsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBIb3N0QmluZGluZyxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbmltcG9ydCB7IFFSU2VydmljZSB9IGZyb20gJy4vcXIuc2VydmljZSc7XG5pbXBvcnQgeyBRUkNvbmZpZyB9IGZyb20gJy4vcXIuY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncXInLFxuICB0ZW1wbGF0ZTogYDxpbWcgY2xhc3M9XCJxcl9faW1nXCIgc3JjPVwie3tkYXRhVVJMfX1cIj5gLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgaG9zdDogeyAnW2NsYXNzLnFyXSc6ICd0cnVlJyB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUVJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBkYXRhVVJMOiBzdHJpbmc7XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICAvKiogw6jCg8KMw6bCmcKvICovXG4gIEBJbnB1dCgpXG4gIGJhY2tncm91bmQ6IHN0cmluZztcbiAgLyoqIMOowoPCjMOmwpnCr8OpwoDCj8OmwpjCjsOnwrrCp8OlwojCq8OvwrzCjMOowozCg8OlwpvCtMOvwrzCmmAwLTFgIMOkwrnCi8OpwpfCtCAqL1xuICBASW5wdXQoKVxuICBiYWNrZ3JvdW5kQWxwaGE6IG51bWJlcjtcbiAgLyoqIMOlwonCjcOmwpnCryAqL1xuICBASW5wdXQoKVxuICBmb3JlZ3JvdW5kOiBzdHJpbmc7XG4gIC8qKiDDpcKJwo3DpsKZwq/DqcKAwo/DpsKYwo7Dp8K6wqfDpcKIwqvDr8K8wozDqMKMwoPDpcKbwrTDr8K8wppgMC0xYCDDpMK5wovDqcKXwrQgKi9cbiAgQElucHV0KClcbiAgZm9yZWdyb3VuZEFscGhhOiBudW1iZXI7XG4gIC8qKiDDqMKvwq/DpcK3wq7DpsKgwqHDpsKtwqPDp8K6wqfDpcKIwqsgKi9cbiAgQElucHV0KClcbiAgbGV2ZWw6IHN0cmluZztcbiAgLyoqIMOkwrrCjMOnwrvCtMOnwqDCgcOowr7Ck8OlwofCusOlwpvCvsOnwonCh01JTUXDp8KxwrvDpcKewosgKi9cbiAgQElucHV0KClcbiAgbWltZTogc3RyaW5nO1xuICAvKiogw6XChsKFw6jCvsK5w6jCt8Kdw6/CvMKIw6XCjcKVw6TCvcKNw6/CvMKacHjDr8K8wokgKi9cbiAgQElucHV0KClcbiAgQElucHV0TnVtYmVyKClcbiAgcGFkZGluZzogbnVtYmVyO1xuICAvKiogw6XCpMKnw6XCsMKPw6/CvMKIw6XCjcKVw6TCvcKNw6/CvMKacHjDr8K8wokgKi9cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5oZWlnaHQucHgnKVxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLndpZHRoLnB4JylcbiAgQElucHV0KClcbiAgQElucHV0TnVtYmVyKClcbiAgc2l6ZTogbnVtYmVyO1xuICAvKiogw6XCgMK8ICovXG4gIEBJbnB1dCgpXG4gIHZhbHVlOiBzdHJpbmc7XG4gIC8qKiDDpcKPwpjDpsKbwrTDpsKXwrbDpcKbwp7DqMKwwoMgKi9cbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3RvcihcbiAgICBjb2c6IFFSQ29uZmlnLFxuICAgIHByaXZhdGUgc3J2OiBRUlNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29nKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuZGF0YVVSTCA9IHRoaXMuc3J2LnJlZnJlc2goe1xuICAgICAgYmFja2dyb3VuZDogdGhpcy5iYWNrZ3JvdW5kLFxuICAgICAgYmFja2dyb3VuZEFscGhhOiB0aGlzLmJhY2tncm91bmRBbHBoYSxcbiAgICAgIGZvcmVncm91bmQ6IHRoaXMuZm9yZWdyb3VuZCxcbiAgICAgIGZvcmVncm91bmRBbHBoYTogdGhpcy5mb3JlZ3JvdW5kQWxwaGEsXG4gICAgICBsZXZlbDogdGhpcy5sZXZlbCxcbiAgICAgIG1pbWU6IHRoaXMubWltZSxcbiAgICAgIHBhZGRpbmc6IHRoaXMucGFkZGluZyxcbiAgICAgIHNpemU6IHRoaXMuc2l6ZSxcbiAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgIH0pO1xuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcy5kYXRhVVJMKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEZWxvblV0aWxNb2R1bGUgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbmltcG9ydCB7IFFSQ29uZmlnIH0gZnJvbSAnLi9xci5jb25maWcnO1xuaW1wb3J0IHsgUVJDb21wb25lbnQgfSBmcm9tICcuL3FyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBRUlNlcnZpY2UgfSBmcm9tICcuL3FyLnNlcnZpY2UnO1xuXG5jb25zdCBDT01QT05FTlRTID0gW1FSQ29tcG9uZW50XTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRGVsb25VdGlsTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbLi4uQ09NUE9ORU5UU10sXG4gIGV4cG9ydHM6IFsuLi5DT01QT05FTlRTXSxcbn0pXG5leHBvcnQgY2xhc3MgUVJNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4geyBuZ01vZHVsZTogUVJNb2R1bGUsIHByb3ZpZGVyczogW1FSQ29uZmlnLCBRUlNlcnZpY2VdIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwiRXZlbnRFbWl0dGVyIiwiQ29tcG9uZW50IiwiQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kiLCJDaGFuZ2VEZXRlY3RvclJlZiIsIklucHV0IiwiSG9zdEJpbmRpbmciLCJPdXRwdXQiLCJ0c2xpYl8xLl9fZGVjb3JhdGUiLCJJbnB1dE51bWJlciIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiRGVsb25VdGlsTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFBQTs7OztZQUVFLGVBQVUsR0FBRyxPQUFPLENBQUM7Ozs7WUFFckIsb0JBQWUsR0FBRyxHQUFHLENBQUM7Ozs7WUFFdEIsZUFBVSxHQUFHLE9BQU8sQ0FBQzs7OztZQUVyQixvQkFBZSxHQUFHLEdBQUcsQ0FBQzs7OztZQUV0QixVQUFLLEdBQTBCLEdBQUcsQ0FBQzs7OztZQUVuQyxTQUFJLEdBQUcsV0FBVyxDQUFDOzs7O1lBRW5CLFlBQU8sR0FBRyxFQUFFLENBQUM7Ozs7WUFFYixTQUFJLEdBQUcsR0FBRyxDQUFDO1NBQ1o7UUFBRCxlQUFDO0lBQUQsQ0FBQzs7Ozs7O0FDakJEO1FBNEJFLG1CQUFZLEdBQWE7Ozs7WUFoQnpCLG9CQUFlLEdBQUcsR0FBRyxDQUFDO1lBaUJwQixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7U0FDeEI7Ozs7Ozs7Ozs7OztRQU9ELDJCQUFPOzs7Ozs7WUFBUCxVQUFRLEtBQXVCO2dCQUM3QixJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEtBQUssS0FBSyxRQUFRLEdBQUcsS0FBSyxHQUFHO29CQUM5QyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7b0JBQzNCLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtvQkFDckMsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO29CQUMzQixlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7b0JBQ3JDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztvQkFDakIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO29CQUNyQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7b0JBQ2YsS0FBSyxFQUFFLEtBQUssSUFBSSxJQUFJLENBQUMsS0FB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