/**
 * @license ng-alain(cipchk@qq.com) v8.0.0-rc.0
 * (c) 2019 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@delon/util'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@delon/abc/qr', ['exports', '@angular/core', '@delon/util', '@angular/common'], factory) :
    (global = global || self, factory((global.delon = global.delon || {}, global.delon.abc = global.delon.abc || {}, global.delon.abc.qr = {}), global.ng.core, global.delon.util, global.ng.common));
}(this, function (exports, core, util, common) { 'use strict';

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

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            this.backgroundAlpha = 1;
            /**
             * 前景，默认：`black`
             */
            this.foreground = 'black';
            /**
             * 前景透明级别，范围：`0-1` 之间，默认：`1.0`
             */
            this.foregroundAlpha = 1;
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
        QRConfig.decorators = [
            { type: core.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ QRConfig.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function QRConfig_Factory() { return new QRConfig(); }, token: QRConfig, providedIn: "root" });
        return QRConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            { type: core.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */
        QRService.ctorParameters = function () { return [
            { type: QRConfig }
        ]; };
        /** @nocollapse */ QRService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function QRService_Factory() { return new QRService(core.ɵɵinject(QRConfig)); }, token: QRService, providedIn: "root" });
        return QRService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var QRComponent = /** @class */ (function () {
        // #endregion
        function QRComponent(cog, srv, cdr) {
            this.srv = srv;
            this.cdr = cdr;
            this.change = new core.EventEmitter();
            Object.assign(this, __assign({}, new QRConfig(), cog));
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
            this.cdr.detectChanges();
            this.change.emit(this.dataURL);
        };
        QRComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'qr',
                        exportAs: 'qr',
                        template: "\n    <img class=\"qr__img\" src=\"{{ dataURL }}\" />\n  ",
                        host: {
                            '[class.qr]': 'true',
                            '[style.height.px]': 'size',
                            '[style.width.px]': 'size',
                        },
                        preserveWhitespaces: false,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None
                    }] }
        ];
        /** @nocollapse */
        QRComponent.ctorParameters = function () { return [
            { type: QRConfig },
            { type: QRService },
            { type: core.ChangeDetectorRef }
        ]; };
        QRComponent.propDecorators = {
            background: [{ type: core.Input }],
            backgroundAlpha: [{ type: core.Input }],
            foreground: [{ type: core.Input }],
            foregroundAlpha: [{ type: core.Input }],
            level: [{ type: core.Input }],
            mime: [{ type: core.Input }],
            padding: [{ type: core.Input }],
            size: [{ type: core.Input }],
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var COMPONENTS = [QRComponent];
    var QRModule = /** @class */ (function () {
        function QRModule() {
        }
        QRModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, util.DelonUtilModule],
                        declarations: __spread(COMPONENTS),
                        exports: __spread(COMPONENTS),
                    },] }
        ];
        return QRModule;
    }());

    exports.QRComponent = QRComponent;
    exports.QRConfig = QRConfig;
    exports.QRModule = QRModule;
    exports.QRService = QRService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=qr.umd.js.map
