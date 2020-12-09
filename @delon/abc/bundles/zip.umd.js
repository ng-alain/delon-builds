/**
 * @license ng-alain(cipchk@qq.com) v10.1.3
 * (c) 2020 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common/http'), require('@angular/core'), require('@delon/util'), require('file-saver'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@delon/abc/zip', ['exports', '@angular/common/http', '@angular/core', '@delon/util', 'file-saver', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.delon = global.delon || {}, global.delon.abc = global.delon.abc || {}, global.delon.abc.zip = {}), global.ng.common.http, global.ng.core, global.delon.util, global.saveAs, global.ng.common));
}(this, (function (exports, i1, i0, i2, fileSaver, common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: zip.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ZipService = /** @class */ (function () {
        /**
         * @param {?} http
         * @param {?} lazy
         * @param {?} configSrv
         * @param {?} ngZone
         */
        function ZipService(http, lazy, configSrv, ngZone) {
            this.http = http;
            this.lazy = lazy;
            this.ngZone = ngZone;
            this.cog = ( /** @type {?} */(configSrv.merge('zip', {
                url: '//cdn.bootcss.com/jszip/3.3.0/jszip.min.js',
                utils: [],
            })));
        }
        /**
         * @private
         * @return {?}
         */
        ZipService.prototype.init = function () {
            return this.lazy.load([( /** @type {?} */(this.cog.url))].concat(( /** @type {?} */(this.cog.utils))));
        };
        /**
         * @private
         * @param {?} zip
         * @return {?}
         */
        ZipService.prototype.check = function (zip) {
            if (!zip)
                throw new Error('get instance via `ZipService.create()`');
        };
        /**
         * 解压
         * @param {?} fileOrUrl
         * @param {?=} options
         * @return {?}
         */
        ZipService.prototype.read = function (fileOrUrl, options) {
            var _this = this;
            return new Promise(( /**
             * @param {?} resolve
             * @param {?} reject
             * @return {?}
             */function (resolve, reject) {
                /** @type {?} */
                var resolveCallback = ( /**
                 * @param {?} data
                 * @return {?}
                 */function (data) {
                    _this.ngZone.run(( /**
                     * @return {?}
                     */function () { return resolve(data); }));
                });
                _this.init().then(( /**
                 * @return {?}
                 */function () {
                    _this.ngZone.runOutsideAngular(( /**
                     * @return {?}
                     */function () {
                        // from url
                        if (typeof fileOrUrl === 'string') {
                            _this.http.request('GET', fileOrUrl, { responseType: 'arraybuffer' }).subscribe(( /**
                             * @param {?} res
                             * @return {?}
                             */function (res) {
                                JSZip.loadAsync(res, options).then(( /**
                                 * @param {?} ret
                                 * @return {?}
                                 */function (ret) { return resolveCallback(ret); }));
                            }), ( /**
                             * @param {?} err
                             * @return {?}
                             */function (err) {
                                reject(err);
                            }));
                            return;
                        }
                        // from file
                        /** @type {?} */
                        var reader = new FileReader();
                        reader.onload = ( /**
                         * @param {?} e
                         * @return {?}
                         */function (e) {
                            JSZip.loadAsync(e.target.result, options).then(( /**
                             * @param {?} ret
                             * @return {?}
                             */function (ret) { return resolveCallback(ret); }));
                        });
                        reader.readAsBinaryString(( /** @type {?} */(fileOrUrl)));
                    }));
                }));
            }));
        };
        /**
         * 创建 Zip 实例，用于创建压缩文件
         * @return {?}
         */
        ZipService.prototype.create = function () {
            var _this = this;
            return new Promise(( /**
             * @param {?} resolve
             * @return {?}
             */function (/**
             * @param {?} resolve
             * @return {?}
             */ resolve) {
                _this.init().then(( /**
                 * @return {?}
                 */function () {
                    /** @type {?} */
                    var zipFile = new JSZip();
                    resolve(zipFile);
                }));
            }));
        };
        /**
         * 下载URL资源并写入 zip
         * @param {?} zip Zip 实例
         * @param {?} path Zip 路径，例如： `text.txt`、`txt/hi.txt`
         * @param {?} url URL 地址
         * @return {?}
         */
        ZipService.prototype.pushUrl = function (zip, path, url) {
            var _this = this;
            this.check(zip);
            return new Promise(( /**
             * @param {?} resolve
             * @param {?} reject
             * @return {?}
             */function (resolve, reject) {
                _this.http.request('GET', url, { responseType: 'arraybuffer' }).subscribe(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) {
                    zip.file(path, res);
                    resolve();
                }), ( /**
                 * @param {?} error
                 * @return {?}
                 */function (error) {
                    reject({ url: url, error: error });
                }));
            }));
        };
        /**
         * 保存Zip并执行打开保存对话框
         *
         * @param {?} zip zip 对象，务必通过 `create()` 构建
         * @param {?=} options 额外参数，
         * @return {?}
         */
        ZipService.prototype.save = function (zip, options) {
            this.check(zip);
            /** @type {?} */
            var opt = ( /** @type {?} */(Object.assign({}, options)));
            return new Promise(( /**
             * @param {?} resolve
             * @param {?} reject
             * @return {?}
             */function (resolve, reject) {
                zip.generateAsync(Object.assign({ type: 'blob' }, opt.options), opt.update).then(( /**
                 * @param {?} data
                 * @return {?}
                 */function (data) {
                    if (opt.callback)
                        opt.callback(data);
                    fileSaver.saveAs(data, opt.filename || 'download.zip');
                    resolve();
                }), ( /**
                 * @param {?} err
                 * @return {?}
                 */function (err) {
                    reject(err);
                }));
            }));
        };
        return ZipService;
    }());
    ZipService.decorators = [
        { type: i0.Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ZipService.ctorParameters = function () { return [
        { type: i1.HttpClient },
        { type: i2.LazyService },
        { type: i2.AlainConfigService },
        { type: i0.NgZone }
    ]; };
    /** @nocollapse */ ZipService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ZipService_Factory() { return new ZipService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.LazyService), i0.ɵɵinject(i2.AlainConfigService), i0.ɵɵinject(i0.NgZone)); }, token: ZipService, providedIn: "root" });
    if (false) {
        /**
         * @type {?}
         * @private
         */
        ZipService.prototype.cog;
        /**
         * @type {?}
         * @private
         */
        ZipService.prototype.http;
        /**
         * @type {?}
         * @private
         */
        ZipService.prototype.lazy;
        /**
         * @type {?}
         * @private
         */
        ZipService.prototype.ngZone;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: zip.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ZipModule = /** @class */ (function () {
        function ZipModule() {
        }
        return ZipModule;
    }());
    ZipModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [common.CommonModule, i2.DelonUtilModule],
                },] }
    ];

    /**
     * @fileoverview added by tsickle
     * Generated from: zip.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.ZipModule = ZipModule;
    exports.ZipService = ZipService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=zip.umd.js.map
