/**
 * @fileoverview added by tsickle
 * Generated from: src/mock.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.config = (/** @type {?} */ (cogSrv.merge('mock', MOCK_DEFULAT_CONFIG)));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvbW9jay9zcmMvbW9jay5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsa0JBQWtCLEVBQW1CLE1BQU0sYUFBYSxDQUFDO0FBR2xFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBR3BELE1BQU0sT0FBTyxXQUFXOzs7O0lBSXRCLFlBQVksTUFBMEI7UUFIOUIsV0FBTSxHQUFxQixFQUFFLENBQUM7UUFJcEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxtQkFBQSxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxtQkFBbUIsQ0FBQyxFQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDMUIsQ0FBQzs7Ozs7O0lBSU8sU0FBUztRQUNmLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLElBQUk7WUFDRixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDdEI7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDckI7SUFDSCxDQUFDOzs7OztJQUVPLGFBQWE7O2NBQ2IsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSTtRQUM3QixJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxHQUFXLEVBQUUsRUFBRTs7a0JBQ2xDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxLQUFL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QUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUN0QyxDQUFDLEVBQUMsQ0FBQztTQUNKO1FBQ0QsT0FBTztZQUNMLEdBQUc7WUFDSCxNQUFNLEVBQUUsR0FBRyxDQUFDLE1BQU07WUFDbEIsTUFBTTtZQUNOLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUTtTQUN2QixDQUFDO0lBQ0osQ0FBQzs7OztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNuQixDQUFDOzs7O0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7OztZQXBJRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O1lBTHpCLGtCQUFrQjs7Ozs7Ozs7SUFPekIsNkJBQXNDOztJQUN0Qyw2QkFBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFsYWluQ29uZmlnU2VydmljZSwgQWxhaW5Nb2NrQ29uZmlnIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IE1vY2tDYWNoZWRSdWxlLCBNb2NrUnVsZSB9IGZyb20gJy4vaW50ZXJmYWNlJztcbmltcG9ydCB7IE1PQ0tfREVGVUxBVF9DT05GSUcgfSBmcm9tICcuL21vY2suY29uZmlnJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBNb2NrU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgY2FjaGVkOiBNb2NrQ2FjaGVkUnVsZVtdID0gW107XG4gIHJlYWRvbmx5IGNvbmZpZzogQWxhaW5Nb2NrQ29uZmlnO1xuXG4gIGNvbnN0cnVjdG9yKGNvZ1NydjogQWxhaW5Db25maWdTZXJ2aWNlKSB7XG4gICAgdGhpcy5jb25maWcgPSBjb2dTcnYubWVyZ2UoJ21vY2snLCBNT0NLX0RFRlVMQVRfQ09ORklHKSE7XG4gICAgdGhpcy5hcHBseU1vY2soKTtcbiAgICBkZWxldGUgdGhpcy5jb25maWcuZGF0YTtcbiAgfVxuXG4gIC8vICNyZWdpb24gcGFyc2UgcnVsZVxuXG4gIHByaXZhdGUgYXBwbHlNb2NrKCkge1xuICAgIHRoaXMuY2FjaGVkID0gW107XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMucmVhbEFwcGx5TW9jaygpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRoaXMub3V0cHV0RXJyb3IoZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZWFsQXBwbHlNb2NrKCkge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNvbmZpZy5kYXRhO1xuICAgIGlmICghZGF0YSkgcmV0dXJuO1xuICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goKGtleTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBydWxlcyA9IGRhdGFba2V5XTtcbiAgICAgIGlmICghcnVsZXMpIHJldHVybjtcbiAgICAgIE9iamVjdC5rZXlzKHJ1bGVzKS5mb3JFYWNoKChydWxlS2V5OiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBydWxlc1tydWxlS2V5XTtcbiAgICAgICAgaWYgKCEodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgICB0aHJvdyBFcnJvcihgbW9jayB2YWx1ZSBvZiBbJHtrZXl9LSR7cnVsZUtleX1dIHNob3VsZCBiZSBmdW5jdGlvbiBvciBvYmplY3Qgb3Igc3RyaW5nLCBidXQgZ290ICR7dHlwZW9mIHZhbHVlfWApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJ1bGUgPSB0aGlzLmdlblJ1bGUocnVsZUtleSwgdmFsdWUpO1xuICAgICAgICBpZiAoWydHRVQnLCAnUE9TVCcsICdQVVQnLCAnSEVBRCcsICdERUxFVEUnLCAnUEFUQ0gnLCAnT1BUSU9OUyddLmluZGV4T2YocnVsZS5tZXRob2QpID09PSAtMSkge1xuICAgICAgICAgIHRocm93IEVycm9yKGBtZXRob2Qgb2YgJHtrZXl9LSR7cnVsZUtleX0gaXMgbm90IHZhbGlkYCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuY2FjaGVkLmZpbmQodyA9PiB3LnVybCA9PT0gcnVsZS51cmwgJiYgdy5tZXRob2QgPT09IHJ1bGUubWV0aG9kKTtcbiAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICBpdGVtLmNhbGxiYWNrID0gcnVsZS5jYWxsYmFjaztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmNhY2hlZC5wdXNoKHJ1bGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyByZWd1bGFyIG9yZGVyaW5nXG4gICAgdGhpcy5jYWNoZWQuc29ydCgoYSwgYikgPT4gKGIubWFydGNoZXIgfHwgJycpLnRvU3RyaW5nKCkubGVuZ3RoIC0gKGEubWFydGNoZXIgfHwgJycpLnRvU3RyaW5nKCkubGVuZ3RoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuUnVsZShrZXk6IHN0cmluZywgY2FsbGJhY2s6IGFueSk6IE1vY2tDYWNoZWRSdWxlIHtcbiAgICBsZXQgbWV0aG9kID0gJ0dFVCc7XG4gICAgbGV0IHVybCA9IGtleTtcblxuICAgIGlmIChrZXkuaW5kZXhPZignICcpID4gLTEpIHtcbiAgICAgIGNvbnN0IHNwbGl0ZWQgPSBrZXkuc3BsaXQoJyAnKTtcbiAgICAgIG1ldGhvZCA9IHNwbGl0ZWRbMF0udG9Mb3dlckNhc2UoKTtcbiAgICAgIHVybCA9IHNwbGl0ZWRbMV07XG4gICAgfVxuXG4gICAgbGV0IG1hcnRjaGVyOiBSZWdFeHAgfCBudWxsID0gbnVsbDtcbiAgICBsZXQgc2VnbWVudHM6IHN0cmluZ1tdID0gW107XG4gICAgaWYgKH51cmwuaW5kZXhPZignOicpKSB7XG4gICAgICBzZWdtZW50cyA9IHVybCFcbiAgICAgICAgLnNwbGl0KCcvJylcbiAgICAgICAgLmZpbHRlcihzZWdtZW50ID0+IHNlZ21lbnQuc3RhcnRzV2l0aCgnOicpKVxuICAgICAgICAubWFwKHYgPT4gdi5zdWJzdHJpbmcoMSkpO1xuICAgICAgY29uc3QgcmVTdHIgPSB1cmwhXG4gICAgICAgIC5zcGxpdCgnLycpXG4gICAgICAgIC5tYXAoc2VnbWVudCA9PiAoc2VnbWVudC5zdGFydHNXaXRoKCc6JykgPyBgKFteL10rKWAgOiBzZWdtZW50KSlcbiAgICAgICAgLmpvaW4oJy8nKTtcbiAgICAgIG1hcnRjaGVyID0gbmV3IFJlZ0V4cChgXiR7cmVTdHJ9YCwgJ2knKTtcbiAgICB9IGVsc2UgaWYgKC8oXFwoW14pXStcXCkpL2kudGVzdCh1cmwpKSB7XG4gICAgICBtYXJ0Y2hlciA9IG5ldyBSZWdFeHAodXJsLCAnaScpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB1cmwsXG4gICAgICBtYXJ0Y2hlcixcbiAgICAgIHNlZ21lbnRzLFxuICAgICAgY2FsbGJhY2ssXG4gICAgICBtZXRob2Q6IG1ldGhvZC50b1VwcGVyQ2FzZSgpLFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIG91dHB1dEVycm9yKGVycm9yOiBOelNhZmVBbnkpIHtcbiAgICBjb25zdCBmaWxlUGF0aCA9IGVycm9yLm1lc3NhZ2Uuc3BsaXQoJzogJylbMF07XG4gICAgY29uc3QgZXJyb3JzID0gKGVycm9yLnN0YWNrIGFzIHN0cmluZylcbiAgICAgIC5zcGxpdCgnXFxuJylcbiAgICAgIC5maWx0ZXIobGluZSA9PiBsaW5lLnRyaW0oKS5pbmRleE9mKCdhdCAnKSAhPT0gMClcbiAgICAgIC5tYXAobGluZSA9PiBsaW5lLnJlcGxhY2UoYCR7ZmlsZVBhdGh9OiBgLCAnJykpO1xuICAgIGVycm9ycy5zcGxpY2UoMSwgMCwgJycpO1xuXG4gICAgY29uc29sZS5ncm91cCgpO1xuICAgIGNvbnNvbGUud2FybihgPT09PT09PT09PUZhaWxlZCB0byBwYXJzZSBtb2NrIGNvbmZpZy49PT09PT09PT09YCk7XG4gICAgY29uc29sZS5sb2coZXJyb3JzLmpvaW4oJ1xcbicpKTtcbiAgICBjb25zb2xlLmdyb3VwRW5kKCk7XG5cbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICBnZXRSdWxlKG1ldGhvZDogc3RyaW5nLCB1cmw6IHN0cmluZyk6IE1vY2tSdWxlIHwgbnVsbCB7XG4gICAgbWV0aG9kID0gKG1ldGhvZCB8fCAnR0VUJykudG9VcHBlckNhc2UoKTtcbiAgICBjb25zdCBwYXJhbXM6IE56U2FmZUFueSA9IHt9O1xuICAgIGNvbnN0IGxpc3QgPSB0aGlzLmNhY2hlZC5maWx0ZXIodyA9PiB3Lm1ldGhvZCA9PT0gbWV0aG9kICYmICh3Lm1hcnRjaGVyID8gdy5tYXJ0Y2hlci50ZXN0KHVybCkgOiB3LnVybCA9PT0gdXJsKSk7XG4gICAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCByZXQgPSBsaXN0LmZpbmQodyA9PiB3LnVybCA9PT0gdXJsKSB8fCBsaXN0WzBdO1xuICAgIGlmIChyZXQubWFydGNoZXIpIHtcbiAgICAgIGNvbnN0IGV4ZWNBcnIgPSByZXQubWFydGNoZXIuZXhlYyh1cmwpO1xuICAgICAgZXhlY0FyciEuc2xpY2UoMSkubWFwKCh2YWx1ZTogc3RyaW5nLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgIHBhcmFtc1tyZXQuc2VnbWVudHNbaW5kZXhdXSA9IHZhbHVlO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICB1cmwsXG4gICAgICBtZXRob2Q6IHJldC5tZXRob2QsXG4gICAgICBwYXJhbXMsXG4gICAgICBjYWxsYmFjazogcmV0LmNhbGxiYWNrLFxuICAgIH07XG4gIH1cblxuICBjbGVhckNhY2hlKCkge1xuICAgIHRoaXMuY2FjaGVkID0gW107XG4gIH1cblxuICBnZXQgcnVsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FjaGVkO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhckNhY2hlKCk7XG4gIH1cbn1cbiJdfQ==