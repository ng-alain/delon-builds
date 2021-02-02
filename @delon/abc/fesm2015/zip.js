import { HttpClient } from '@angular/common/http';
import { ɵɵinject, NgZone, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { AlainConfigService } from '@delon/util/config';
import { LazyService } from '@delon/util/other';
import { saveAs } from 'file-saver';
import { CommonModule } from '@angular/common';

class ZipService {
    constructor(http, lazy, configSrv, ngZone) {
        this.http = http;
        this.lazy = lazy;
        this.ngZone = ngZone;
        this.cog = configSrv.merge('zip', {
            url: '//cdn.bootcss.com/jszip/3.3.0/jszip.min.js',
            utils: [],
        });
    }
    init() {
        return this.lazy.load([this.cog.url].concat(this.cog.utils));
    }
    check(zip) {
        if (!zip)
            throw new Error('get instance via `ZipService.create()`');
    }
    /** 解压 */
    read(fileOrUrl, options) {
        return new Promise((resolve, reject) => {
            const resolveCallback = (data) => {
                this.ngZone.run(() => resolve(data));
            };
            this.init().then(() => {
                this.ngZone.runOutsideAngular(() => {
                    // from url
                    if (typeof fileOrUrl === 'string') {
                        this.http.request('GET', fileOrUrl, { responseType: 'arraybuffer' }).subscribe((res) => {
                            JSZip.loadAsync(res, options).then((ret) => resolveCallback(ret));
                        }, (err) => {
                            reject(err);
                        });
                        return;
                    }
                    // from file
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        JSZip.loadAsync(e.target.result, options).then((ret) => resolveCallback(ret));
                    };
                    reader.readAsBinaryString(fileOrUrl);
                });
            });
        });
    }
    /** 创建 Zip 实例，用于创建压缩文件 */
    create() {
        return new Promise(resolve => {
            this.init().then(() => {
                const zipFile = new JSZip();
                resolve(zipFile);
            });
        });
    }
    /**
     * 下载URL资源并写入 zip
     * @param zip Zip 实例
     * @param path Zip 路径，例如： `text.txt`、`txt/hi.txt`
     * @param url URL 地址
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
     * @param zip zip 对象，务必通过 `create()` 构建
     * @param options 额外参数，
     */
    save(zip, options) {
        this.check(zip);
        const opt = Object.assign({}, options);
        return new Promise((resolve, reject) => {
            zip.generateAsync(Object.assign({ type: 'blob' }, opt.options), opt.update).then((data) => {
                if (opt.callback)
                    opt.callback(data);
                saveAs(data, opt.filename || 'download.zip');
                resolve();
            }, (err) => {
                reject(err);
            });
        });
    }
}
/** @nocollapse */ ZipService.ɵfac = function ZipService_Factory(t) { return new (t || ZipService)(ɵɵinject(HttpClient), ɵɵinject(LazyService), ɵɵinject(AlainConfigService), ɵɵinject(NgZone)); };
/** @nocollapse */ ZipService.ɵprov = ɵɵdefineInjectable({ token: ZipService, factory: ZipService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ZipService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: HttpClient }, { type: LazyService }, { type: AlainConfigService }, { type: NgZone }]; }, null); })();

class ZipModule {
}
/** @nocollapse */ ZipModule.ɵmod = ɵɵdefineNgModule({ type: ZipModule });
/** @nocollapse */ ZipModule.ɵinj = ɵɵdefineInjector({ factory: function ZipModule_Factory(t) { return new (t || ZipModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(ZipModule, { imports: [CommonModule] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ZipModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { ZipModule, ZipService };
//# sourceMappingURL=zip.js.map
