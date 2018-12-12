/**
 * @license ng-alain(cipchk@qq.com) v2.0.1
 * (c) 2018 Cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common/http'), require('file-saver'), require('@angular/common'), require('@angular/core'), require('@delon/theme')) :
    typeof define === 'function' && define.amd ? define('@delon/abc/down-file', ['exports', '@angular/common/http', 'file-saver', '@angular/common', '@angular/core', '@delon/theme'], factory) :
    (factory((global.delon = global.delon || {}, global.delon.abc = global.delon.abc || {}, global.delon.abc['down-file'] = {}),global.ng.common.http,global.saveAs,global.ng.common,global.ng.core,global.delon.theme));
}(this, (function (exports,http,fileSaver,common,core,theme) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var DownFileDirective = /** @class */ (function () {
        function DownFileDirective(el, http$$1, _http) {
            this.el = el;
            this.http = http$$1;
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
         * @param {?} data
         * @return {?}
         */
        DownFileDirective.prototype.getDisposition = /**
         * @param {?} data
         * @return {?}
         */
            function (data) {
                // tslint:disable-next-line:no-any
                /** @type {?} */
                var arr = (data || '')
                    .split(';')
                    .filter(function (i) { return i.includes('='); })
                    .map(function (v) {
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
                });
                return arr.reduce(function (o, item) { return item; }, {});
            };
        /**
         * @return {?}
         */
        DownFileDirective.prototype._click = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.el.nativeElement.disabled = true;
                // tslint:disable-next-line:no-any
                (( /** @type {?} */((this._http || this.http))))
                    .request(this.httpMethod, this.httpUrl, {
                    params: this.httpData || {},
                    responseType: 'blob',
                    observe: 'response',
                })
                    .subscribe(function (res) {
                    if (res.status !== 200 || res.body.size <= 0) {
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
                    _this.el.nativeElement.disabled = false;
                }, function (err) {
                    _this.error.emit(err);
                    _this.el.nativeElement.disabled = false;
                });
            };
        DownFileDirective.decorators = [
            { type: core.Directive, args: [{ selector: '[down-file]' },] }
        ];
        /** @nocollapse */
        DownFileDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: http.HttpClient },
                { type: theme._HttpClient, decorators: [{ type: core.Optional }] }
            ];
        };
        DownFileDirective.propDecorators = {
            httpData: [{ type: core.Input, args: ['http-data',] }],
            httpMethod: [{ type: core.Input, args: ['http-method',] }],
            httpUrl: [{ type: core.Input, args: ['http-url',] }],
            fileName: [{ type: core.Input, args: ['file-name',] }],
            success: [{ type: core.Output }],
            error: [{ type: core.Output }],
            _click: [{ type: core.HostListener, args: ['click',] }]
        };
        return DownFileDirective;
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    exports.DownFileDirective = DownFileDirective;
    exports.DownFileModule = DownFileModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=downFile.umd.js.map