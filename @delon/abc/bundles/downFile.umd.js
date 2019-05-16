/**
 * @license ng-alain(cipchk@qq.com) v7.3.2
 * (c) 2019 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@delon/theme'), require('file-saver'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@delon/abc/down-file', ['exports', '@angular/core', '@delon/theme', 'file-saver', '@angular/common'], factory) :
    (global = global || self, factory((global.delon = global.delon || {}, global.delon.abc = global.delon.abc || {}, global.delon.abc['down-file'] = {}), global.ng.core, global.delon.theme, global.saveAs, global.ng.common));
}(this, function (exports, core, theme, fileSaver, common) { 'use strict';

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
    var DownFileDirective = /** @class */ (function () {
        function DownFileDirective(el, _http) {
            this.el = el;
            this._http = _http;
            /**
             * 请求类型
             */
            this.httpMethod = 'get';
            /**
             * 成功回调
             */
            this.success = new core.EventEmitter();
            /**
             * 错误回调
             */
            this.error = new core.EventEmitter();
        }
        /**
         * @private
         * @param {?} data
         * @return {?}
         */
        DownFileDirective.prototype.getDisposition = /**
         * @private
         * @param {?} data
         * @return {?}
         */
        function (data) {
            /** @type {?} */
            var arr = (data || '')
                .split(';')
                .filter((/**
             * @param {?} i
             * @return {?}
             */
            function (i) { return i.includes('='); }))
                .map((/**
             * @param {?} v
             * @return {?}
             */
            function (v) {
                var _a;
                /** @type {?} */
                var strArr = v.split('=');
                /** @type {?} */
                var utfId = "UTF-8''";
                /** @type {?} */
                var value = strArr[1];
                if (value.startsWith(utfId))
                    value = value.substr(utfId.length);
                return _a = {}, _a[strArr[0].trim()] = value, _a;
            }));
            return arr.reduce((/**
             * @param {?} _o
             * @param {?} item
             * @return {?}
             */
            function (_o, item) { return item; }), {});
        };
        /**
         * @private
         * @param {?} val
         * @return {?}
         */
        DownFileDirective.prototype.setDisabled = /**
         * @private
         * @param {?} val
         * @return {?}
         */
        function (val) {
            /** @type {?} */
            var el = (/** @type {?} */ (this.el.nativeElement));
            el.disabled = val;
        };
        /**
         * @return {?}
         */
        DownFileDirective.prototype._click = /**
         * @return {?}
         */
        function () {
            var _this = this;
            this.setDisabled(true);
            this._http
                .request(this.httpMethod, this.httpUrl, {
                params: this.httpData || {},
                responseType: 'blob',
                observe: 'response',
            })
                .subscribe((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                if (res.status !== 200 || (/** @type {?} */ (res.body)).size <= 0) {
                    _this.error.emit(res);
                    return;
                }
                /** @type {?} */
                var disposition = _this.getDisposition(res.headers.get('content-disposition'));
                /** @type {?} */
                var fileName = _this.fileName ||
                    disposition["filename*"] ||
                    disposition["filename"] ||
                    res.headers.get('filename') ||
                    res.headers.get('x-filename');
                fileSaver.saveAs(res.body, decodeURI(fileName));
                _this.success.emit(res);
                _this.setDisabled(false);
            }), (/**
             * @param {?} err
             * @return {?}
             */
            function (err) {
                _this.error.emit(err);
                _this.setDisabled(false);
            }));
        };
        DownFileDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[down-file]',
                        exportAs: 'downFile',
                        host: {
                            '(click)': '_click()',
                        },
                    },] }
        ];
        /** @nocollapse */
        DownFileDirective.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: theme._HttpClient }
        ]; };
        DownFileDirective.propDecorators = {
            httpData: [{ type: core.Input, args: ['http-data',] }],
            httpMethod: [{ type: core.Input, args: ['http-method',] }],
            httpUrl: [{ type: core.Input, args: ['http-url',] }],
            fileName: [{ type: core.Input, args: ['file-name',] }],
            success: [{ type: core.Output }],
            error: [{ type: core.Output }]
        };
        return DownFileDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DIRECTIVES = [DownFileDirective];
    var DownFileModule = /** @class */ (function () {
        function DownFileModule() {
        }
        DownFileModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, theme.AlainThemeModule],
                        declarations: __spread(DIRECTIVES),
                        exports: __spread(DIRECTIVES),
                    },] }
        ];
        return DownFileModule;
    }());

    exports.DownFileDirective = DownFileDirective;
    exports.DownFileModule = DownFileModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=downFile.umd.js.map
