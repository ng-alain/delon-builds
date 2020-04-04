import { Injectable, ɵɵdefineInjectable, ɵɵinject, NgModule } from '@angular/core';
import { __assign } from 'tslib';
import { HttpClient } from '@angular/common/http';
import { LazyService, DelonUtilModule } from '@delon/util';
import { saveAs } from 'file-saver';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: zip.types.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function ZipWriteOptions() { }
if (false) {
    /**
     * save file name, default: `download.zip`
     * @type {?|undefined}
     */
    ZipWriteOptions.prototype.filename;
    /** @type {?|undefined} */
    ZipWriteOptions.prototype.options;
    /**
     * The optional function called on each internal update with the metadata.
     * @type {?|undefined}
     */
    ZipWriteOptions.prototype.update;
    /**
     * triggers when saveas
     * @type {?|undefined}
     */
    ZipWriteOptions.prototype.callback;
}
/**
 * @record
 */
function ZipSaveOptions() { }
if (false) {
    /**
     * 指定保存文件名，默认 `download.zip`
     * @type {?|undefined}
     */
    ZipSaveOptions.prototype.filename;
    /**
     * JSZip `generateAsync` 方法的 `options` 选项
     * @see https://stuk.github.io/jszip/documentation/api_jszip/generate_async.html
     * @type {?|undefined}
     */
    ZipSaveOptions.prototype.options;
    /**
     * JSZip `generateAsync` 方法的 `onUpdate` 回调
     * @see https://stuk.github.io/jszip/documentation/api_jszip/generate_async.html
     * @type {?|undefined}
     */
    ZipSaveOptions.prototype.update;
    /**
     * 保存前回调方法
     * @type {?|undefined}
     */
    ZipSaveOptions.prototype.callback;
}

/**
 * @fileoverview added by tsickle
 * Generated from: zip.config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    ZipConfig.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ ZipConfig.ɵprov = ɵɵdefineInjectable({ factory: function ZipConfig_Factory() { return new ZipConfig(); }, token: ZipConfig, providedIn: "root" });
    return ZipConfig;
}());
if (false) {
    /**
     * Zip library path
     * @type {?}
     */
    ZipConfig.prototype.url;
    /**
     * Defines which zip optional utils should get loaded
     * @type {?}
     */
    ZipConfig.prototype.utils;
}

/**
 * @fileoverview added by tsickle
 * Generated from: zip.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ZipService = /** @class */ (function () {
    function ZipService(cog, http, lazy) {
        this.cog = cog;
        this.http = http;
        this.lazy = lazy;
    }
    /**
     * @private
     * @return {?}
     */
    ZipService.prototype.init = /**
     * @private
     * @return {?}
     */
    function () {
        return this.lazy.load([(/** @type {?} */ (this.cog.url))].concat((/** @type {?} */ (this.cog.utils))));
    };
    /**
     * @private
     * @param {?} zip
     * @return {?}
     */
    ZipService.prototype.check = /**
     * @private
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
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            _this.init().then((/**
             * @return {?}
             */
            function () {
                // from url
                if (typeof fileOrUrl === 'string') {
                    _this.http.request('GET', fileOrUrl, { responseType: 'arraybuffer' }).subscribe((/**
                     * @param {?} res
                     * @return {?}
                     */
                    function (res) {
                        JSZip.loadAsync(res, options).then((/**
                         * @param {?} ret
                         * @return {?}
                         */
                        function (ret) { return resolve(ret); }));
                    }), (/**
                     * @param {?} err
                     * @return {?}
                     */
                    function (err) {
                        reject(err);
                    }));
                    return;
                }
                // from file
                /** @type {?} */
                var reader = new FileReader();
                reader.onload = (/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) {
                    JSZip.loadAsync(e.target.result, options).then((/**
                     * @param {?} ret
                     * @return {?}
                     */
                    function (ret) { return resolve(ret); }));
                });
                reader.readAsBinaryString((/** @type {?} */ (fileOrUrl)));
            }));
        }));
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
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        function (resolve) {
            _this.init().then((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var zipFile = new JSZip();
                resolve(zipFile);
            }));
        }));
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
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            _this.http.request('GET', url, { responseType: 'arraybuffer' }).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                zip.file(path, res);
                resolve();
            }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                reject({ url: url, error: error });
            }));
        }));
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
        var opt = (/** @type {?} */ (__assign({}, options)));
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            zip.generateAsync(__assign({ type: 'blob' }, opt.options), opt.update).then((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                if (opt.callback)
                    opt.callback(data);
                saveAs(data, opt.filename || 'download.zip');
                resolve();
            }), (/**
             * @param {?} err
             * @return {?}
             */
            function (err) {
                reject(err);
            }));
        }));
    };
    ZipService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ZipService.ctorParameters = function () { return [
        { type: ZipConfig },
        { type: HttpClient },
        { type: LazyService }
    ]; };
    /** @nocollapse */ ZipService.ɵprov = ɵɵdefineInjectable({ factory: function ZipService_Factory() { return new ZipService(ɵɵinject(ZipConfig), ɵɵinject(HttpClient), ɵɵinject(LazyService)); }, token: ZipService, providedIn: "root" });
    return ZipService;
}());
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
}

/**
 * @fileoverview added by tsickle
 * Generated from: zip.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ZipModule = /** @class */ (function () {
    function ZipModule() {
    }
    ZipModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, DelonUtilModule],
                },] }
    ];
    return ZipModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: zip.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ZipConfig, ZipModule, ZipService };
//# sourceMappingURL=zip.js.map
