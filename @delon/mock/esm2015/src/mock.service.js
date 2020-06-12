/**
 * @fileoverview added by tsickle
 * Generated from: src/mock.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { AlainConfigService } from '@delon/util';
import { MOCK_DEFULAT_CONFIG } from './mock.config';
import * as i0 from "@angular/core";
import * as i1 from "@delon/util";
export class MockService {
    /**
     * @param {?} cogSrv
     */
    constructor(cogSrv) {
        this.cached = [];
        this.config = cogSrv.merge('mock', MOCK_DEFULAT_CONFIG);
        this.applyMock();
        delete this.config.data;
    }
    // #region parse rule
    /**
     * @private
     * @return {?}
     */
    applyMock() {
        this.cached = [];
        try {
            this.realApplyMock();
        }
        catch (e) {
            this.outputError(e);
        }
    }
    /**
     * @private
     * @return {?}
     */
    realApplyMock() {
        /** @type {?} */
        const data = this.config.data;
        if (!data)
            return;
        Object.keys(data).forEach((/**
         * @param {?} key
         * @return {?}
         */
        (key) => {
            /** @type {?} */
            const rules = data[key];
            if (!rules)
                return;
            Object.keys(rules).forEach((/**
             * @param {?} ruleKey
             * @return {?}
             */
            (ruleKey) => {
                /** @type {?} */
                const value = rules[ruleKey];
                if (!(typeof value === 'function' || typeof value === 'object' || typeof value === 'string')) {
                    throw Error(`mock value of [${key}-${ruleKey}] should be function or object or string, but got ${typeof value}`);
                }
                /** @type {?} */
                const rule = this.genRule(ruleKey, value);
                if (['GET', 'POST', 'PUT', 'HEAD', 'DELETE', 'PATCH', 'OPTIONS'].indexOf(rule.method) === -1) {
                    throw Error(`method of ${key}-${ruleKey} is not valid`);
                }
                /** @type {?} */
                const item = this.cached.find((/**
                 * @param {?} w
                 * @return {?}
                 */
                w => w.url === rule.url && w.method === rule.method));
                if (item) {
                    item.callback = rule.callback;
                }
                else {
                    this.cached.push(rule);
                }
            }));
        }));
        // regular ordering
        this.cached.sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => (b.martcher || '').toString().length - (a.martcher || '').toString().length));
    }
    /**
     * @private
     * @param {?} key
     * @param {?} callback
     * @return {?}
     */
    genRule(key, callback) {
        /** @type {?} */
        let method = 'GET';
        /** @type {?} */
        let url = key;
        if (key.indexOf(' ') > -1) {
            /** @type {?} */
            const splited = key.split(' ');
            method = splited[0].toLowerCase();
            url = splited[1];
        }
        /** @type {?} */
        let martcher = null;
        /** @type {?} */
        let segments = [];
        if (~url.indexOf(':')) {
            segments = (/** @type {?} */ (url)).split('/')
                .filter((/**
             * @param {?} segment
             * @return {?}
             */
            segment => segment.startsWith(':')))
                .map((/**
             * @param {?} v
             * @return {?}
             */
            v => v.substring(1)));
            /** @type {?} */
            const reStr = (/** @type {?} */ (url)).split('/')
                .map((/**
             * @param {?} segment
             * @return {?}
             */
            segment => (segment.startsWith(':') ? `([^/]+)` : segment)))
                .join('/');
            martcher = new RegExp(`^${reStr}`, 'i');
        }
        else if (/(\([^)]+\))/i.test(url)) {
            martcher = new RegExp(url, 'i');
        }
        return {
            url,
            martcher,
            segments,
            callback,
            method: method.toUpperCase(),
        };
    }
    /**
     * @private
     * @param {?} error
     * @return {?}
     */
    outputError(error) {
        /** @type {?} */
        const filePath = error.message.split(': ')[0];
        /** @type {?} */
        const errors = ((/** @type {?} */ (error.stack)))
            .split('\n')
            .filter((/**
         * @param {?} line
         * @return {?}
         */
        line => line.trim().indexOf('at ') !== 0))
            .map((/**
         * @param {?} line
         * @return {?}
         */
        line => line.replace(`${filePath}: `, '')));
        errors.splice(1, 0, '');
        console.group();
        console.warn(`==========Failed to parse mock config.==========`);
        console.log(errors.join('\n'));
        console.groupEnd();
        throw error;
    }
    // #endregion
    /**
     * @param {?} method
     * @param {?} url
     * @return {?}
     */
    getRule(method, url) {
        method = (method || 'GET').toUpperCase();
        /** @type {?} */
        const params = {};
        /** @type {?} */
        const list = this.cached.filter((/**
         * @param {?} w
         * @return {?}
         */
        w => w.method === method && (w.martcher ? w.martcher.test(url) : w.url === url)));
        if (list.length === 0)
            return null;
        /** @type {?} */
        const ret = list.find((/**
         * @param {?} w
         * @return {?}
         */
        w => w.url === url)) || list[0];
        if (ret.martcher) {
            /** @type {?} */
            const execArr = ret.martcher.exec(url);
            (/** @type {?} */ (execArr)).slice(1).map((/**
             * @param {?} value
             * @param {?} index
             * @return {?}
             */
            (value, index) => {
                params[ret.segments[index]] = value;
            }));
        }
        return {
            url,
            method: ret.method,
            params,
            callback: ret.callback,
        };
    }
    /**
     * @return {?}
     */
    clearCache() {
        this.cached = [];
    }
    /**
     * @return {?}
     */
    get rules() {
        return this.cached;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.clearCache();
    }
}
MockService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
MockService.ctorParameters = () => [
    { type: AlainConfigService }
];
/** @nocollapse */ MockService.ɵprov = i0.ɵɵdefineInjectable({ factory: function MockService_Factory() { return new MockService(i0.ɵɵinject(i1.AlainConfigService)); }, token: MockService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    MockService.prototype.cached;
    /** @type {?} */
    MockService.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL21vY2svIiwic291cmNlcyI6WyJzcmMvbW9jay5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsa0JBQWtCLEVBQW1CLE1BQU0sYUFBYSxDQUFDO0FBR2xFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBR3BELE1BQU0sT0FBTyxXQUFXOzs7O0lBSXRCLFlBQVksTUFBMEI7UUFIOUIsV0FBTSxHQUFxQixFQUFFLENBQUM7UUFJcEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUEwQixNQUFNLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztRQUNqRixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUMxQixDQUFDOzs7Ozs7SUFJTyxTQUFTO1FBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSTtZQUNGLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN0QjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNyQjtJQUNILENBQUM7Ozs7O0lBRU8sYUFBYTs7Y0FDYixJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJO1FBQzdCLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLEdBQVcsRUFBRSxFQUFFOztrQkFDbEMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDdkIsSUFBSSxDQUFDLEtBQUs7Z0JBQUUsT0FBTztZQUNuQixNQUFN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O1lBQ3RDLENBQUMsRUFBQyxDQUFDO1NBQ0o7UUFDRCxPQUFPO1lBQ0wsR0FBRztZQUNILE1BQU0sRUFBRSxHQUFHLENBQUMsTUFBTTtZQUNsQixNQUFNO1lBQ04sUUFBUSxFQUFFLEdBQUcsQ0FBQyxRQUFRO1NBQ3ZCLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsVUFBVTtRQUNSLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ25CLENBQUM7Ozs7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7O1lBcElGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7WUFMekIsa0JBQWtCOzs7Ozs7OztJQU96Qiw2QkFBc0M7O0lBQ3RDLDZCQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlLCBBbGFpbk1vY2tDb25maWcgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgTW9ja0NhY2hlZFJ1bGUsIE1vY2tSdWxlIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgTU9DS19ERUZVTEFUX0NPTkZJRyB9IGZyb20gJy4vbW9jay5jb25maWcnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIE1vY2tTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBjYWNoZWQ6IE1vY2tDYWNoZWRSdWxlW10gPSBbXTtcbiAgcmVhZG9ubHkgY29uZmlnOiBBbGFpbk1vY2tDb25maWc7XG5cbiAgY29uc3RydWN0b3IoY29nU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UpIHtcbiAgICB0aGlzLmNvbmZpZyA9IGNvZ1Nydi5tZXJnZTxBbGFpbk1vY2tDb25maWcsICdtb2NrJz4oJ21vY2snLCBNT0NLX0RFRlVMQVRfQ09ORklHKTtcbiAgICB0aGlzLmFwcGx5TW9jaygpO1xuICAgIGRlbGV0ZSB0aGlzLmNvbmZpZy5kYXRhO1xuICB9XG5cbiAgLy8gI3JlZ2lvbiBwYXJzZSBydWxlXG5cbiAgcHJpdmF0ZSBhcHBseU1vY2soKSB7XG4gICAgdGhpcy5jYWNoZWQgPSBbXTtcbiAgICB0cnkge1xuICAgICAgdGhpcy5yZWFsQXBwbHlNb2NrKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhpcy5vdXRwdXRFcnJvcihlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlYWxBcHBseU1vY2soKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuY29uZmlnLmRhdGE7XG4gICAgaWYgKCFkYXRhKSByZXR1cm47XG4gICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaCgoa2V5OiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IHJ1bGVzID0gZGF0YVtrZXldO1xuICAgICAgaWYgKCFydWxlcykgcmV0dXJuO1xuICAgICAgT2JqZWN0LmtleXMocnVsZXMpLmZvckVhY2goKHJ1bGVLZXk6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHJ1bGVzW3J1bGVLZXldO1xuICAgICAgICBpZiAoISh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICAgIHRocm93IEVycm9yKGBtb2NrIHZhbHVlIG9mIFske2tleX0tJHtydWxlS2V5fV0gc2hvdWxkIGJlIGZ1bmN0aW9uIG9yIG9iamVjdCBvciBzdHJpbmcsIGJ1dCBnb3QgJHt0eXBlb2YgdmFsdWV9YCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcnVsZSA9IHRoaXMuZ2VuUnVsZShydWxlS2V5LCB2YWx1ZSk7XG4gICAgICAgIGlmIChbJ0dFVCcsICdQT1NUJywgJ1BVVCcsICdIRUFEJywgJ0RFTEVURScsICdQQVRDSCcsICdPUFRJT05TJ10uaW5kZXhPZihydWxlLm1ldGhvZCkgPT09IC0xKSB7XG4gICAgICAgICAgdGhyb3cgRXJyb3IoYG1ldGhvZCBvZiAke2tleX0tJHtydWxlS2V5fSBpcyBub3QgdmFsaWRgKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5jYWNoZWQuZmluZCh3ID0+IHcudXJsID09PSBydWxlLnVybCAmJiB3Lm1ldGhvZCA9PT0gcnVsZS5tZXRob2QpO1xuICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgIGl0ZW0uY2FsbGJhY2sgPSBydWxlLmNhbGxiYWNrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY2FjaGVkLnB1c2gocnVsZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIHJlZ3VsYXIgb3JkZXJpbmdcbiAgICB0aGlzLmNhY2hlZC5zb3J0KChhLCBiKSA9PiAoYi5tYXJ0Y2hlciB8fCAnJykudG9TdHJpbmcoKS5sZW5ndGggLSAoYS5tYXJ0Y2hlciB8fCAnJykudG9TdHJpbmcoKS5sZW5ndGgpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5SdWxlKGtleTogc3RyaW5nLCBjYWxsYmFjazogYW55KTogTW9ja0NhY2hlZFJ1bGUge1xuICAgIGxldCBtZXRob2QgPSAnR0VUJztcbiAgICBsZXQgdXJsID0ga2V5O1xuXG4gICAgaWYgKGtleS5pbmRleE9mKCcgJykgPiAtMSkge1xuICAgICAgY29uc3Qgc3BsaXRlZCA9IGtleS5zcGxpdCgnICcpO1xuICAgICAgbWV0aG9kID0gc3BsaXRlZFswXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgdXJsID0gc3BsaXRlZFsxXTtcbiAgICB9XG5cbiAgICBsZXQgbWFydGNoZXI6IFJlZ0V4cCB8IG51bGwgPSBudWxsO1xuICAgIGxldCBzZWdtZW50czogc3RyaW5nW10gPSBbXTtcbiAgICBpZiAofnVybC5pbmRleE9mKCc6JykpIHtcbiAgICAgIHNlZ21lbnRzID0gdXJsIVxuICAgICAgICAuc3BsaXQoJy8nKVxuICAgICAgICAuZmlsdGVyKHNlZ21lbnQgPT4gc2VnbWVudC5zdGFydHNXaXRoKCc6JykpXG4gICAgICAgIC5tYXAodiA9PiB2LnN1YnN0cmluZygxKSk7XG4gICAgICBjb25zdCByZVN0ciA9IHVybCFcbiAgICAgICAgLnNwbGl0KCcvJylcbiAgICAgICAgLm1hcChzZWdtZW50ID0+IChzZWdtZW50LnN0YXJ0c1dpdGgoJzonKSA/IGAoW14vXSspYCA6IHNlZ21lbnQpKVxuICAgICAgICAuam9pbignLycpO1xuICAgICAgbWFydGNoZXIgPSBuZXcgUmVnRXhwKGBeJHtyZVN0cn1gLCAnaScpO1xuICAgIH0gZWxzZSBpZiAoLyhcXChbXildK1xcKSkvaS50ZXN0KHVybCkpIHtcbiAgICAgIG1hcnRjaGVyID0gbmV3IFJlZ0V4cCh1cmwsICdpJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHVybCxcbiAgICAgIG1hcnRjaGVyLFxuICAgICAgc2VnbWVudHMsXG4gICAgICBjYWxsYmFjayxcbiAgICAgIG1ldGhvZDogbWV0aG9kLnRvVXBwZXJDYXNlKCksXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgb3V0cHV0RXJyb3IoZXJyb3I6IE56U2FmZUFueSkge1xuICAgIGNvbnN0IGZpbGVQYXRoID0gZXJyb3IubWVzc2FnZS5zcGxpdCgnOiAnKVswXTtcbiAgICBjb25zdCBlcnJvcnMgPSAoZXJyb3Iuc3RhY2sgYXMgc3RyaW5nKVxuICAgICAgLnNwbGl0KCdcXG4nKVxuICAgICAgLmZpbHRlcihsaW5lID0+IGxpbmUudHJpbSgpLmluZGV4T2YoJ2F0ICcpICE9PSAwKVxuICAgICAgLm1hcChsaW5lID0+IGxpbmUucmVwbGFjZShgJHtmaWxlUGF0aH06IGAsICcnKSk7XG4gICAgZXJyb3JzLnNwbGljZSgxLCAwLCAnJyk7XG5cbiAgICBjb25zb2xlLmdyb3VwKCk7XG4gICAgY29uc29sZS53YXJuKGA9PT09PT09PT09RmFpbGVkIHRvIHBhcnNlIG1vY2sgY29uZmlnLj09PT09PT09PT1gKTtcbiAgICBjb25zb2xlLmxvZyhlcnJvcnMuam9pbignXFxuJykpO1xuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcblxuICAgIHRocm93IGVycm9yO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGdldFJ1bGUobWV0aG9kOiBzdHJpbmcsIHVybDogc3RyaW5nKTogTW9ja1J1bGUgfCBudWxsIHtcbiAgICBtZXRob2QgPSAobWV0aG9kIHx8ICdHRVQnKS50b1VwcGVyQ2FzZSgpO1xuICAgIGNvbnN0IHBhcmFtczogTnpTYWZlQW55ID0ge307XG4gICAgY29uc3QgbGlzdCA9IHRoaXMuY2FjaGVkLmZpbHRlcih3ID0+IHcubWV0aG9kID09PSBtZXRob2QgJiYgKHcubWFydGNoZXIgPyB3Lm1hcnRjaGVyLnRlc3QodXJsKSA6IHcudXJsID09PSB1cmwpKTtcbiAgICBpZiAobGlzdC5sZW5ndGggPT09IDApIHJldHVybiBudWxsO1xuICAgIGNvbnN0IHJldCA9IGxpc3QuZmluZCh3ID0+IHcudXJsID09PSB1cmwpIHx8IGxpc3RbMF07XG4gICAgaWYgKHJldC5tYXJ0Y2hlcikge1xuICAgICAgY29uc3QgZXhlY0FyciA9IHJldC5tYXJ0Y2hlci5leGVjKHVybCk7XG4gICAgICBleGVjQXJyIS5zbGljZSgxKS5tYXAoKHZhbHVlOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgcGFyYW1zW3JldC5zZWdtZW50c1tpbmRleF1dID0gdmFsdWU7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHVybCxcbiAgICAgIG1ldGhvZDogcmV0Lm1ldGhvZCxcbiAgICAgIHBhcmFtcyxcbiAgICAgIGNhbGxiYWNrOiByZXQuY2FsbGJhY2ssXG4gICAgfTtcbiAgfVxuXG4gIGNsZWFyQ2FjaGUoKSB7XG4gICAgdGhpcy5jYWNoZWQgPSBbXTtcbiAgfVxuXG4gIGdldCBydWxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5jYWNoZWQ7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFyQ2FjaGUoKTtcbiAgfVxufVxuIl19