/**
 * @license ng-alain(cipchk@qq.com) v2.0.1
 * (c) 2018 Cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@delon/util')) :
    typeof define === 'function' && define.amd ? define('@delon/abc/qr', ['exports', '@angular/core', '@angular/common', '@delon/util'], factory) :
    (factory((global.delon = global.delon || {}, global.delon.abc = global.delon.abc || {}, global.delon.abc.qr = {}),global.ng.core,global.ng.common,global.delon.util));
}(this, (function (exports,core,common,util) { 'use strict';

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

//# sourceMappingURL=qr.umd.js.map