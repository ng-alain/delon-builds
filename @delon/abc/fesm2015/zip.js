import { HttpClient } from '@angular/common/http';
import { Injectable, ɵɵdefineInjectable, ɵɵinject, NgModule } from '@angular/core';
import { LazyService, AlainConfigService, DelonUtilModule } from '@delon/util';
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
 * Generated from: zip.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ZipService {
    /**
     * @param {?} http
     * @param {?} lazy
     * @param {?} configSrv
     */
    constructor(http, lazy, configSrv) {
        this.http = http;
        this.lazy = lazy;
        this.cog = (/** @type {?} */ (configSrv.merge('zip', {
            url: '//cdn.bootcss.com/jszip/3.3.0/jszip.min.js',
            utils: [],
        })));
    }
    /**
     * @private
     * @return {?}
     */
    init() {
        return this.lazy.load([(/** @type {?} */ (this.cog.url))].concat((/** @type {?} */ (this.cog.utils))));
    }
    /**
     * @private
     * @param {?} zip
     * @return {?}
     */
    check(zip) {
        if (!zip)
            throw new Error('get instance via `ZipService.create()`');
    }
    /**
     * 解压
     * @param {?} fileOrUrl
     * @param {?=} options
     * @return {?}
     */
    read(fileOrUrl, options) {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            this.init().then((/**
             * @return {?}
             */
            () => {
                // from url
                if (typeof fileOrUrl === 'string') {
                    this.http.request('GET', fileOrUrl, { responseType: 'arraybuffer' }).subscribe((/**
                     * @param {?} res
                     * @return {?}
                     */
                    (res) => {
                        JSZip.loadAsync(res, options).then((/**
                         * @param {?} ret
                         * @return {?}
                         */
                        (ret) => resolve(ret)));
                    }), (/**
                     * @param {?} err
                     * @return {?}
                     */
                    (err) => {
                        reject(err);
                    }));
                    return;
                }
                // from file
                /** @type {?} */
                const reader = new FileReader();
                reader.onload = (/**
                 * @param {?} e
                 * @return {?}
                 */
                (e) => {
                    JSZip.loadAsync(e.target.result, options).then((/**
                     * @param {?} ret
                     * @return {?}
                     */
                    (ret) => resolve(ret)));
                });
                reader.readAsBinaryString((/** @type {?} */ (fileOrUrl)));
            }));
        }));
    }
    /**
     * 创建 Zip 实例，用于创建压缩文件
     * @return {?}
     */
    create() {
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        resolve => {
            this.init().then((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const zipFile = new JSZip();
                resolve(zipFile);
            }));
        }));
    }
    /**
     * 下载URL资源并写入 zip
     * @param {?} zip Zip 实例
     * @param {?} path Zip 路径，例如： `text.txt`、`txt/hi.txt`
     * @param {?} url URL 地址
     * @return {?}
     */
    pushUrl(zip, path, url) {
        this.check(zip);
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            this.http.request('GET', url, { responseType: 'arraybuffer' }).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            (res) => {
                zip.file(path, res);
                resolve();
            }), (/**
             * @param {?} error
             * @return {?}
             */
            (error) => {
                reject({ url, error });
            }));
        }));
    }
    /**
     * 保存Zip并执行打开保存对话框
     *
     * @param {?} zip zip 对象，务必通过 `create()` 构建
     * @param {?=} options 额外参数，
     * @return {?}
     */
    save(zip, options) {
        this.check(zip);
        /** @type {?} */
        const opt = (/** @type {?} */ (Object.assign({}, options)));
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            zip.generateAsync(Object.assign({ type: 'blob' }, opt.options), opt.update).then((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                if (opt.callback)
                    opt.callback(data);
                saveAs(data, opt.filename || 'download.zip');
                resolve();
            }), (/**
             * @param {?} err
             * @return {?}
             */
            (err) => {
                reject(err);
            }));
        }));
    }
}
ZipService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ZipService.ctorParameters = () => [
    { type: HttpClient },
    { type: LazyService },
    { type: AlainConfigService }
];
/** @nocollapse */ ZipService.ɵprov = ɵɵdefineInjectable({ factory: function ZipService_Factory() { return new ZipService(ɵɵinject(HttpClient), ɵɵinject(LazyService), ɵɵinject(AlainConfigService)); }, token: ZipService, providedIn: "root" });
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
class ZipModule {
}
ZipModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, DelonUtilModule],
            },] }
];

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

export { ZipModule, ZipService };
//# sourceMappingURL=zip.js.map
