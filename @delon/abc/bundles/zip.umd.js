/**
 * @license ng-alain(cipchk@qq.com) v2.0.1
 * (c) 2018 Cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common/http'), require('file-saver'), require('@angular/core'), require('@angular/common'), require('@delon/util')) :
    typeof define === 'function' && define.amd ? define('@delon/abc/zip', ['exports', '@angular/common/http', 'file-saver', '@angular/core', '@angular/common', '@delon/util'], factory) :
    (factory((global.delon = global.delon || {}, global.delon.abc = global.delon.abc || {}, global.delon.abc.zip = {}),global.ng.common.http,global.saveAs,global.ng.core,global.ng.common,global.delon.util));
}(this, (function (exports,http,fileSaver,core,common,util) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ZipConfig = /** @class */ (function () {
        function ZipConfig() {
            /**
             * Zip library path
             */
            this.url = '//cdn.bootcss.com/jszip/3.1.5/jszip.min.js';
            /**
             * Defines which zip optional utils should get loaded
             */
            this.utils = [];
        }
        return ZipConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ZipService = /** @class */ (function () {
        function ZipService(cog, http$$1, lazy) {
            this.cog = cog;
            this.http = http$$1;
            this.lazy = lazy;
        }
        /**
         * @return {?}
         */
        ZipService.prototype.init = /**
         * @return {?}
         */
            function () {
                return this.lazy.load([this.cog.url].concat(this.cog.utils));
            };
        /**
         * @param {?} zip
         * @return {?}
         */
        ZipService.prototype.check = /**
         * @param {?} zip
         * @return {?}
         */
            function (zip) {
                if (!zip)
                    throw new Error('get instance via `ZipService.create()`');
            };
        /** 解压 */
        /**
         * 解压
         * @param {?} fileOrUrl
         * @param {?=} options
         * @return {?}
         */
        ZipService.prototype.read = /**
         * 解压
         * @param {?} fileOrUrl
         * @param {?=} options
         * @return {?}
         */
            function (fileOrUrl, options) {
                var _this = this;
                return new Promise(function (resolve, reject) {
                    _this.init().then(function () {
                        // from url
                        if (typeof fileOrUrl === 'string') {
                            _this.http
                                .request('GET', fileOrUrl, { responseType: 'arraybuffer' })
                                .subscribe(function (res) {
                                JSZip.loadAsync(res, options).then(function (ret) { return resolve(ret); });
                            }, function (err) {
                                reject(err);
                            });
                            return;
                        }
                        /** @type {?} */
                        var reader = new FileReader();
                        reader.onload = function (e) {
                            JSZip.loadAsync(e.target.result, options).then(function (ret) { return resolve(ret); });
                        };
                        reader.readAsBinaryString(/** @type {?} */ (fileOrUrl));
                    });
                });
            };
        /** 创建 Zip 实例，用于创建压缩文件 */
        /**
         * 创建 Zip 实例，用于创建压缩文件
         * @return {?}
         */
        ZipService.prototype.create = /**
         * 创建 Zip 实例，用于创建压缩文件
         * @return {?}
         */
            function () {
                var _this = this;
                return new Promise(function (resolve) {
                    _this.init().then(function () {
                        /** @type {?} */
                        var zipFile = new JSZip();
                        resolve(zipFile);
                    });
                });
            };
        /**
         * 下载URL资源并写入 zip
         * @param zip Zip 实例
         * @param path Zip 路径，例如： `text.txt`、`txt/hi.txt`
         * @param url URL 地址
         */
        /**
         * 下载URL资源并写入 zip
         * @param {?} zip Zip 实例
         * @param {?} path Zip 路径，例如： `text.txt`、`txt/hi.txt`
         * @param {?} url URL 地址
         * @return {?}
         */
        ZipService.prototype.pushUrl = /**
         * 下载URL资源并写入 zip
         * @param {?} zip Zip 实例
         * @param {?} path Zip 路径，例如： `text.txt`、`txt/hi.txt`
         * @param {?} url URL 地址
         * @return {?}
         */
            function (zip, path, url) {
                var _this = this;
                this.check(zip);
                return new Promise(function (resolve, reject) {
                    _this.http.request('GET', url, { responseType: 'arraybuffer' }).subscribe(function (res) {
                        zip.file(path, res);
                        resolve();
                    }, function (error) {
                        reject({ url: url, error: error });
                    });
                });
            };
        /**
         * 保存Zip并执行打开保存对话框
         *
         * @param zip zip 对象，务必通过 `create()` 构建
         * @param options 额外参数，
         */
        /**
         * 保存Zip并执行打开保存对话框
         *
         * @param {?} zip zip 对象，务必通过 `create()` 构建
         * @param {?=} options 额外参数，
         * @return {?}
         */
        ZipService.prototype.save = /**
         * 保存Zip并执行打开保存对话框
         *
         * @param {?} zip zip 对象，务必通过 `create()` 构建
         * @param {?=} options 额外参数，
         * @return {?}
         */
            function (zip, options) {
                this.check(zip);
                /** @type {?} */
                var opt = Object.assign({}, options);
                return new Promise(function (resolve, reject) {
                    zip
                        .generateAsync(Object.assign({ type: 'blob' }, opt.options), opt.update)
                        .then(function (data) {
                        if (opt.callback)
                            opt.callback(data);
                        fileSaver.saveAs(data, opt.filename || 'download.zip');
                        resolve();
                    }, function (err) {
                        reject(err);
                    });
                });
            };
        ZipService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        ZipService.ctorParameters = function () {
            return [
                { type: ZipConfig },
                { type: http.HttpClient },
                { type: util.LazyService }
            ];
        };
        return ZipService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ZipModule = /** @class */ (function () {
        function ZipModule() {
        }
        /**
         * @return {?}
         */
        ZipModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: ZipModule,
                    providers: [ZipConfig, ZipService],
                };
            };
        ZipModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, util.DelonUtilModule],
                    },] }
        ];
        return ZipModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.ZipService = ZipService;
    exports.ZipModule = ZipModule;
    exports.ZipConfig = ZipConfig;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=zip.umd.js.map