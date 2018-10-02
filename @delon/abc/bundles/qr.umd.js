/**
 * @license ng-alain(cipchk@qq.com) v2.0.0-beta.3-ed90aa6
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var QRComponent = /** @class */ (function () {
        // endregion
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
                        template: "\n  <img class=\"qr__img\" src=\"{{dataURL}}\">\n  ",
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
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.QRService = QRService;
    exports.QRComponent = QRComponent;
    exports.QRConfig = QRConfig;
    exports.QRModule = QRModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXIudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AZGVsb24vYWJjL3FyL3FyLmNvbmZpZy50cyIsIm5nOi8vQGRlbG9uL2FiYy9xci9xci5zZXJ2aWNlLnRzIiwibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm5nOi8vQGRlbG9uL2FiYy9xci9xci5jb21wb25lbnQudHMiLCJuZzovL0BkZWxvbi9hYmMvcXIvcXIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBRUkNvbmZpZyB7XHJcbiAgLyoqIMOowoPCjMOmwpnCr8OvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmB3aGl0ZWAgKi9cclxuICBiYWNrZ3JvdW5kID0gJ3doaXRlJztcclxuICAvKiogw6jCg8KMw6bCmcKvw6nCgMKPw6bCmMKOw6fCusKnw6XCiMKrw6/CvMKMw6jCjMKDw6XCm8K0w6/CvMKaYDAtMWAgw6TCucKLw6nCl8K0w6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYDEuMGAgKi9cclxuICBiYWNrZ3JvdW5kQWxwaGEgPSAxLjA7XHJcbiAgLyoqIMOlwonCjcOmwpnCr8OvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmBibGFja2AgKi9cclxuICBmb3JlZ3JvdW5kID0gJ2JsYWNrJztcclxuICAvKiogw6XCicKNw6bCmcKvw6nCgMKPw6bCmMKOw6fCusKnw6XCiMKrw6/CvMKMw6jCjMKDw6XCm8K0w6/CvMKaYDAtMWAgw6TCucKLw6nCl8K0w6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYDEuMGAgKi9cclxuICBmb3JlZ3JvdW5kQWxwaGEgPSAxLjA7XHJcbiAgLyoqIMOowq/Cr8OlwrfCrsOmwqDCocOmwq3Co8OnwrrCp8OlwojCq8OvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmBMYCAqL1xyXG4gIGxldmVsOiAnTCcgfCAnTScgfCAnUScgfCAnSCcgPSAnTCc7XHJcbiAgLyoqIMOkwrrCjMOnwrvCtMOnwqDCgcOowr7Ck8OlwofCusOlwpvCvsOnwonCh01JTUXDp8KxwrvDpcKewovDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgaW1hZ2UvcG5nYCAqL1xyXG4gIG1pbWUgPSAnaW1hZ2UvcG5nJztcclxuICAvKiogw6XChsKFw6jCvsK5w6jCt8Kdw6/CvMKIw6XCjcKVw6TCvcKNw6/CvMKacHjDr8K8wonDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgMTBgICovXHJcbiAgcGFkZGluZyA9IDEwO1xyXG4gIC8qKiDDpcKkwqfDpcKwwo/Dr8K8wojDpcKNwpXDpMK9wo3Dr8K8wppweMOvwrzCicOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmAyMjBgICovXHJcbiAgc2l6ZSA9IDIyMDtcclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFFSQ29uZmlnIH0gZnJvbSAnLi9xci5jb25maWcnO1xyXG5cclxuZGVjbGFyZSB2YXIgUVJpb3VzOiBhbnk7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBRUlNlcnZpY2Uge1xyXG4gIC8qKiDDpcK9wpPDpcKJwo1xcsOlwq7CnsOkwr7CiyAqL1xyXG4gIHJlYWRvbmx5IHFyOiBhbnk7XHJcbiAgLyoqIMOowoPCjMOmwpnCryAqL1xyXG4gIGJhY2tncm91bmQ6IHN0cmluZztcclxuICAvKiogw6jCg8KMw6bCmcKvw6nCgMKPw6bCmMKOw6fCusKnw6XCiMKrw6/CvMKMw6jCjMKDw6XCm8K0w6/CvMKaYDAtMWAgw6TCucKLw6nCl8K0ICovXHJcbiAgYmFja2dyb3VuZEFscGhhID0gMS4wO1xyXG4gIC8qKiDDpcKJwo3DpsKZwq8gKi9cclxuICBmb3JlZ3JvdW5kOiBzdHJpbmc7XHJcbiAgLyoqIMOlwonCjcOmwpnCr8OpwoDCj8OmwpjCjsOnwrrCp8OlwojCq8OvwrzCjMOowozCg8OlwpvCtMOvwrzCmmAwLTFgIMOkwrnCi8OpwpfCtCAqL1xyXG4gIGZvcmVncm91bmRBbHBoYTogbnVtYmVyO1xyXG4gIC8qKiDDqMKvwq/DpcK3wq7DpsKgwqHDpsKtwqPDp8K6wqfDpcKIwqsgKi9cclxuICBsZXZlbDogc3RyaW5nO1xyXG4gIC8qKiDDpMK6wozDp8K7wrTDp8KgwoHDqMK+wpPDpcKHwrrDpcKbwr7Dp8KJwodNSU1Fw6fCscK7w6XCnsKLICovXHJcbiAgbWltZTogc3RyaW5nO1xyXG4gIC8qKiDDpcKGwoXDqMK+wrnDqMK3wp3Dr8K8wojDpcKNwpXDpMK9wo3Dr8K8wppweMOvwrzCiSAqL1xyXG4gIHBhZGRpbmc6IG51bWJlcjtcclxuICAvKiogw6XCpMKnw6XCsMKPw6/CvMKIw6XCjcKVw6TCvcKNw6/CvMKacHjDr8K8wokgKi9cclxuICBzaXplOiBudW1iZXI7XHJcbiAgLyoqIMOlwoDCvCAqL1xyXG4gIHZhbHVlOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNvZzogUVJDb25maWcpIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29nKTtcclxuICAgIHRoaXMucXIgPSBuZXcgUVJpb3VzKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDDp8KUwp/DpsKIwpDDpMK6wozDp8K7wrTDp8KgwoHDr8K8wozDpcK5wrbDqMK/wpTDpcKbwp5CYXNlNjTDp8K8wpbDp8KgwoFcclxuICAgKlxyXG4gICAqIEBwYXJhbSBbdmFsdWVdIMOpwofCjcOmwpbCsMOmwozCh8Olwq7CmsOlwoDCvFxyXG4gICAqL1xyXG4gIHJlZnJlc2godmFsdWU/OiBzdHJpbmcgfCBPYmplY3QpOiBzdHJpbmcge1xyXG4gICAgdGhpcy5xci5zZXQodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyA/IHZhbHVlIDoge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB0aGlzLmJhY2tncm91bmQsXHJcbiAgICAgIGJhY2tncm91bmRBbHBoYTogdGhpcy5iYWNrZ3JvdW5kQWxwaGEsXHJcbiAgICAgIGZvcmVncm91bmQ6IHRoaXMuZm9yZWdyb3VuZCxcclxuICAgICAgZm9yZWdyb3VuZEFscGhhOiB0aGlzLmZvcmVncm91bmRBbHBoYSxcclxuICAgICAgbGV2ZWw6IHRoaXMubGV2ZWwsXHJcbiAgICAgIHBhZGRpbmc6IHRoaXMucGFkZGluZyxcclxuICAgICAgc2l6ZTogdGhpcy5zaXplLFxyXG4gICAgICB2YWx1ZTogdmFsdWUgfHwgdGhpcy52YWx1ZSxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRoaXMuZGF0YVVSTDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIMOowr/ClMOlwpvCnsOlwr3Ck8OlwonCjcOkwrrCjMOnwrvCtMOnwqDCgUJhc2U2NMOnwrzClsOnwqDCgVxyXG4gICAqL1xyXG4gIGdldCBkYXRhVVJMKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5xci50b0RhdGFVUkwoKTtcclxuICB9XHJcbn1cclxuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBPbkNoYW5nZXMsXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XHJcblxyXG5pbXBvcnQgeyBRUlNlcnZpY2UgfSBmcm9tICcuL3FyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBRUkNvbmZpZyB9IGZyb20gJy4vcXIuY29uZmlnJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncXInLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPGltZyBjbGFzcz1cInFyX19pbWdcIiBzcmM9XCJ7e2RhdGFVUkx9fVwiPlxyXG4gIGAsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgaG9zdDogeyAnW2NsYXNzLnFyXSc6ICd0cnVlJyB9LFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUVJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIGRhdGFVUkw6IHN0cmluZztcclxuICAvLyByZWdpb246IGZpZWxkc1xyXG5cclxuICAvKiogw6jCg8KMw6bCmcKvICovXHJcbiAgQElucHV0KClcclxuICBiYWNrZ3JvdW5kOiBzdHJpbmc7XHJcbiAgLyoqIMOowoPCjMOmwpnCr8OpwoDCj8OmwpjCjsOnwrrCp8OlwojCq8OvwrzCjMOowozCg8OlwpvCtMOvwrzCmmAwLTFgIMOkwrnCi8OpwpfCtCAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgYmFja2dyb3VuZEFscGhhOiBudW1iZXI7XHJcbiAgLyoqIMOlwonCjcOmwpnCryAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZm9yZWdyb3VuZDogc3RyaW5nO1xyXG4gIC8qKiDDpcKJwo3DpsKZwq/DqcKAwo/DpsKYwo7Dp8K6wqfDpcKIwqvDr8K8wozDqMKMwoPDpcKbwrTDr8K8wppgMC0xYCDDpMK5wovDqcKXwrQgKi9cclxuICBASW5wdXQoKVxyXG4gIGZvcmVncm91bmRBbHBoYTogbnVtYmVyO1xyXG4gIC8qKiDDqMKvwq/DpcK3wq7DpsKgwqHDpsKtwqPDp8K6wqfDpcKIwqsgKi9cclxuICBASW5wdXQoKVxyXG4gIGxldmVsOiBzdHJpbmc7XHJcbiAgLyoqIMOkwrrCjMOnwrvCtMOnwqDCgcOowr7Ck8OlwofCusOlwpvCvsOnwonCh01JTUXDp8KxwrvDpcKewosgKi9cclxuICBASW5wdXQoKVxyXG4gIG1pbWU6IHN0cmluZztcclxuICAvKiogw6XChsKFw6jCvsK5w6jCt8Kdw6/CvMKIw6XCjcKVw6TCvcKNw6/CvMKacHjDr8K8wokgKi9cclxuICBASW5wdXQoKVxyXG4gIEBJbnB1dE51bWJlcigpXHJcbiAgcGFkZGluZzogbnVtYmVyO1xyXG4gIC8qKiDDpcKkwqfDpcKwwo/Dr8K8wojDpcKNwpXDpMK9wo3Dr8K8wppweMOvwrzCiSAqL1xyXG4gIEBIb3N0QmluZGluZygnc3R5bGUuaGVpZ2h0LnB4JylcclxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLndpZHRoLnB4JylcclxuICBASW5wdXQoKVxyXG4gIEBJbnB1dE51bWJlcigpXHJcbiAgc2l6ZTogbnVtYmVyO1xyXG4gIC8qKiDDpcKAwrwgKi9cclxuICBASW5wdXQoKVxyXG4gIHZhbHVlOiBzdHJpbmc7XHJcbiAgLyoqIMOlwo/CmMOmwpvCtMOmwpfCtsOlwpvCnsOowrDCgyAqL1xyXG4gIEBPdXRwdXQoKVxyXG4gIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG5cclxuICAvLyBlbmRyZWdpb25cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBjb2c6IFFSQ29uZmlnLFxyXG4gICAgcHJpdmF0ZSBzcnY6IFFSU2VydmljZSxcclxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICkge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb2cpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLmRhdGFVUkwgPSB0aGlzLnNydi5yZWZyZXNoKHtcclxuICAgICAgYmFja2dyb3VuZDogdGhpcy5iYWNrZ3JvdW5kLFxyXG4gICAgICBiYWNrZ3JvdW5kQWxwaGE6IHRoaXMuYmFja2dyb3VuZEFscGhhLFxyXG4gICAgICBmb3JlZ3JvdW5kOiB0aGlzLmZvcmVncm91bmQsXHJcbiAgICAgIGZvcmVncm91bmRBbHBoYTogdGhpcy5mb3JlZ3JvdW5kQWxwaGEsXHJcbiAgICAgIGxldmVsOiB0aGlzLmxldmVsLFxyXG4gICAgICBtaW1lOiB0aGlzLm1pbWUsXHJcbiAgICAgIHBhZGRpbmc6IHRoaXMucGFkZGluZyxcclxuICAgICAgc2l6ZTogdGhpcy5zaXplLFxyXG4gICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB0aGlzLmNoYW5nZS5lbWl0KHRoaXMuZGF0YVVSTCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IERlbG9uVXRpbE1vZHVsZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcclxuXHJcbmltcG9ydCB7IFFSQ29uZmlnIH0gZnJvbSAnLi9xci5jb25maWcnO1xyXG5pbXBvcnQgeyBRUkNvbXBvbmVudCB9IGZyb20gJy4vcXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUVJTZXJ2aWNlIH0gZnJvbSAnLi9xci5zZXJ2aWNlJztcclxuXHJcbmNvbnN0IENPTVBPTkVOVFMgPSBbUVJDb21wb25lbnRdO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBEZWxvblV0aWxNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogWy4uLkNPTVBPTkVOVFNdLFxyXG4gIGV4cG9ydHM6IFsuLi5DT01QT05FTlRTXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFFSTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7IG5nTW9kdWxlOiBRUk1vZHVsZSwgcHJvdmlkZXJzOiBbUVJDb25maWcsIFFSU2VydmljZV0gfTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJFdmVudEVtaXR0ZXIiLCJDb21wb25lbnQiLCJDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSIsIkNoYW5nZURldGVjdG9yUmVmIiwiSW5wdXQiLCJIb3N0QmluZGluZyIsIk91dHB1dCIsIklucHV0TnVtYmVyIiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJEZWxvblV0aWxNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxRQUFBOzs7Ozs4QkFFZSxPQUFPOzs7O21DQUVGLEdBQUc7Ozs7OEJBRVIsT0FBTzs7OzttQ0FFRixHQUFHOzs7O3lCQUVVLEdBQUc7Ozs7d0JBRTNCLFdBQVc7Ozs7MkJBRVIsRUFBRTs7Ozt3QkFFTCxHQUFHOzt1QkFoQlo7UUFpQkM7Ozs7OztBQ2pCRDtRQTRCRSxtQkFBWSxHQUFhOzs7O21DQWhCUCxHQUFHO1lBaUJuQixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7U0FDeEI7Ozs7Ozs7Ozs7OztRQU9ELDJCQUFPOzs7Ozs7WUFBUCxVQUFRLEtBQXVCO2dCQUM3QixJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEtBQUssS0FBSyxRQUFRLEdBQUcsS0FBSyxHQUFHO29CQUM5QyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7b0JBQzNCLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFB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