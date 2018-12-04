import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';
import { CommonModule } from '@angular/common';
import { Injectable, defineInjectable, inject, NgModule } from '@angular/core';
import { LazyService, DelonUtilModule } from '@delon/util';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class ZipConfig {
    constructor() {
        /**
         * Zip library path
         */
        this.url = '//cdn.bootcss.com/jszip/3.1.5/jszip.min.js';
        /**
         * Defines which zip optional utils should get loaded
         */
        this.utils = [];
    }
}
ZipConfig.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ ZipConfig.ngInjectableDef = defineInjectable({ factory: function ZipConfig_Factory() { return new ZipConfig(); }, token: ZipConfig, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class ZipService {
    /**
     * @param {?} cog
     * @param {?} http
     * @param {?} lazy
     */
    constructor(cog, http, lazy) {
        this.cog = cog;
        this.http = http;
        this.lazy = lazy;
    }
    /**
     * @return {?}
     */
    init() {
        return this.lazy.load([this.cog.url].concat(this.cog.utils));
    }
    /**
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
        return new Promise((resolve, reject) => {
            this.init().then(() => {
                // from url
                if (typeof fileOrUrl === 'string') {
                    this.http
                        .request('GET', fileOrUrl, { responseType: 'arraybuffer' })
                        .subscribe((res) => {
                        JSZip.loadAsync(res, options).then(ret => resolve(ret));
                    }, (err) => {
                        reject(err);
                    });
                    return;
                }
                // from file
                /** @type {?} */
                const reader = new FileReader();
                reader.onload = (e) => {
                    JSZip.loadAsync(e.target.result, options).then(ret => resolve(ret));
                };
                reader.readAsBinaryString((/** @type {?} */ (fileOrUrl)));
            });
        });
    }
    /**
     * 创建 Zip 实例，用于创建压缩文件
     * @return {?}
     */
    create() {
        return new Promise(resolve => {
            this.init().then(() => {
                /** @type {?} */
                const zipFile = new JSZip();
                resolve(zipFile);
            });
        });
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
        return new Promise((resolve, reject) => {
            this.http.request('GET', url, { responseType: 'arraybuffer' }).subscribe((res) => {
                zip.file(path, res);
                resolve();
            }, (error) => {
                reject({ url, error });
            });
        });
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
        const opt = Object.assign({}, options);
        return new Promise((resolve, reject) => {
            zip
                .generateAsync(Object.assign({ type: 'blob' }, opt.options), opt.update)
                .then((data) => {
                if (opt.callback)
                    opt.callback(data);
                saveAs(data, opt.filename || 'download.zip');
                resolve();
            }, err => {
                reject(err);
            });
        });
    }
}
ZipService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ZipService.ctorParameters = () => [
    { type: ZipConfig },
    { type: HttpClient },
    { type: LazyService }
];
/** @nocollapse */ ZipService.ngInjectableDef = defineInjectable({ factory: function ZipService_Factory() { return new ZipService(inject(ZipConfig), inject(HttpClient), inject(LazyService)); }, token: ZipService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { ZipService, ZipModule, ZipConfig };

//# sourceMappingURL=zip.js.map