/**
 * @fileoverview added by tsickle
 * Generated from: src/mock.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DelonMockConfig } from './mock.config';
export class MockService {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.config = config;
        this.cached = [];
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
        const errors = error.stack
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
        errors.splice(1, 0, ['']);
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
    { type: Injectable }
];
/** @nocollapse */
MockService.ctorParameters = () => [
    { type: DelonMockConfig }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    MockService.prototype.cached;
    /**
     * @type {?}
     * @private
     */
    MockService.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL21vY2svIiwic291cmNlcyI6WyJzcmMvbW9jay5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUV0RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR2hELE1BQU0sT0FBTyxXQUFXOzs7O0lBR3RCLFlBQW9CLE1BQXVCO1FBQXZCLFdBQU0sR0FBTixNQUFNLENBQWlCO1FBRm5DLFdBQU0sR0FBcUIsRUFBRSxDQUFDO1FBR3BDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQzFCLENBQUM7Ozs7OztJQUlPLFNBQVM7UUFDZixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNqQixJQUFJO1lBQ0YsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3RCO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQzs7Ozs7SUFFTyxhQUFhOztjQUNiLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUk7UUFDN0IsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTzs7OztRQUFDLENBQUMsR0FBVyxFQUFFLEVBQUU7O2tCQUNsQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUN2QixJQUFJLENBQUMsS0FBSztnQkFBRSxPQUFPO1lBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTzs7OztZQUFDLENBQUMsT0FBZSxFQUFFLEVBQUU7O3NCQUN2QyxLQUFLLEdBQUcsS0FBSyxDQUFDLE9B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LENBQUMsUUFBUTtTQUN2QixDQUFDO0lBQ0osQ0FBQzs7OztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNuQixDQUFDOzs7O0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7OztZQXBJRixVQUFVOzs7O1lBRkYsZUFBZTs7Ozs7OztJQUl0Qiw2QkFBc0M7Ozs7O0lBRTFCLDZCQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTW9ja0NhY2hlZFJ1bGUsIE1vY2tSdWxlIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRGVsb25Nb2NrQ29uZmlnIH0gZnJvbSAnLi9tb2NrLmNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNb2NrU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgY2FjaGVkOiBNb2NrQ2FjaGVkUnVsZVtdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb25maWc6IERlbG9uTW9ja0NvbmZpZykge1xuICAgIHRoaXMuYXBwbHlNb2NrKCk7XG4gICAgZGVsZXRlIHRoaXMuY29uZmlnLmRhdGE7XG4gIH1cblxuICAvLyAjcmVnaW9uIHBhcnNlIHJ1bGVcblxuICBwcml2YXRlIGFwcGx5TW9jaygpIHtcbiAgICB0aGlzLmNhY2hlZCA9IFtdO1xuICAgIHRyeSB7XG4gICAgICB0aGlzLnJlYWxBcHBseU1vY2soKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aGlzLm91dHB1dEVycm9yKGUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVhbEFwcGx5TW9jaygpIHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5jb25maWcuZGF0YTtcbiAgICBpZiAoIWRhdGEpIHJldHVybjtcbiAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKChrZXk6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgcnVsZXMgPSBkYXRhW2tleV07XG4gICAgICBpZiAoIXJ1bGVzKSByZXR1cm47XG4gICAgICBPYmplY3Qua2V5cyhydWxlcykuZm9yRWFjaCgocnVsZUtleTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcnVsZXNbcnVsZUtleV07XG4gICAgICAgIGlmICghKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgICAgdGhyb3cgRXJyb3IoXG4gICAgICAgICAgICBgbW9jayB2YWx1ZSBvZiBbJHtrZXl9LSR7cnVsZUtleX1dIHNob3VsZCBiZSBmdW5jdGlvbiBvciBvYmplY3Qgb3Igc3RyaW5nLCBidXQgZ290ICR7dHlwZW9mIHZhbHVlfWAsXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBydWxlID0gdGhpcy5nZW5SdWxlKHJ1bGVLZXksIHZhbHVlKTtcbiAgICAgICAgaWYgKFsnR0VUJywgJ1BPU1QnLCAnUFVUJywgJ0hFQUQnLCAnREVMRVRFJywgJ1BBVENIJywgJ09QVElPTlMnXS5pbmRleE9mKHJ1bGUubWV0aG9kKSA9PT0gLTEpIHtcbiAgICAgICAgICB0aHJvdyBFcnJvcihgbWV0aG9kIG9mICR7a2V5fS0ke3J1bGVLZXl9IGlzIG5vdCB2YWxpZGApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmNhY2hlZC5maW5kKHcgPT4gdy51cmwgPT09IHJ1bGUudXJsICYmIHcubWV0aG9kID09PSBydWxlLm1ldGhvZCk7XG4gICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgaXRlbS5jYWxsYmFjayA9IHJ1bGUuY2FsbGJhY2s7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jYWNoZWQucHVzaChydWxlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gcmVndWxhciBvcmRlcmluZ1xuICAgIHRoaXMuY2FjaGVkLnNvcnQoKGEsIGIpID0+IChiLm1hcnRjaGVyIHx8ICcnKS50b1N0cmluZygpLmxlbmd0aCAtIChhLm1hcnRjaGVyIHx8ICcnKS50b1N0cmluZygpLmxlbmd0aCk7XG4gIH1cblxuICBwcml2YXRlIGdlblJ1bGUoa2V5OiBzdHJpbmcsIGNhbGxiYWNrOiBhbnkpOiBNb2NrQ2FjaGVkUnVsZSB7XG4gICAgbGV0IG1ldGhvZCA9ICdHRVQnO1xuICAgIGxldCB1cmwgPSBrZXk7XG5cbiAgICBpZiAoa2V5LmluZGV4T2YoJyAnKSA+IC0xKSB7XG4gICAgICBjb25zdCBzcGxpdGVkID0ga2V5LnNwbGl0KCcgJyk7XG4gICAgICBtZXRob2QgPSBzcGxpdGVkWzBdLnRvTG93ZXJDYXNlKCk7XG4gICAgICB1cmwgPSBzcGxpdGVkWzFdO1xuICAgIH1cblxuICAgIGxldCBtYXJ0Y2hlcjogUmVnRXhwIHwgbnVsbCA9IG51bGw7XG4gICAgbGV0IHNlZ21lbnRzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGlmICh+dXJsLmluZGV4T2YoJzonKSkge1xuICAgICAgc2VnbWVudHMgPSB1cmwhXG4gICAgICAgIC5zcGxpdCgnLycpXG4gICAgICAgIC5maWx0ZXIoc2VnbWVudCA9PiBzZWdtZW50LnN0YXJ0c1dpdGgoJzonKSlcbiAgICAgICAgLm1hcCh2ID0+IHYuc3Vic3RyaW5nKDEpKTtcbiAgICAgIGNvbnN0IHJlU3RyID0gdXJsIVxuICAgICAgICAuc3BsaXQoJy8nKVxuICAgICAgICAubWFwKHNlZ21lbnQgPT4gKHNlZ21lbnQuc3RhcnRzV2l0aCgnOicpID8gYChbXi9dKylgIDogc2VnbWVudCkpXG4gICAgICAgIC5qb2luKCcvJyk7XG4gICAgICBtYXJ0Y2hlciA9IG5ldyBSZWdFeHAoYF4ke3JlU3RyfWAsICdpJyk7XG4gICAgfSBlbHNlIGlmICgvKFxcKFteKV0rXFwpKS9pLnRlc3QodXJsKSkge1xuICAgICAgbWFydGNoZXIgPSBuZXcgUmVnRXhwKHVybCwgJ2knKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgdXJsLFxuICAgICAgbWFydGNoZXIsXG4gICAgICBzZWdtZW50cyxcbiAgICAgIGNhbGxiYWNrLFxuICAgICAgbWV0aG9kOiBtZXRob2QudG9VcHBlckNhc2UoKSxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBvdXRwdXRFcnJvcihlcnJvcjogYW55KSB7XG4gICAgY29uc3QgZmlsZVBhdGggPSBlcnJvci5tZXNzYWdlLnNwbGl0KCc6ICcpWzBdO1xuICAgIGNvbnN0IGVycm9ycyA9IGVycm9yLnN0YWNrXG4gICAgICAuc3BsaXQoJ1xcbicpXG4gICAgICAuZmlsdGVyKGxpbmUgPT4gbGluZS50cmltKCkuaW5kZXhPZignYXQgJykgIT09IDApXG4gICAgICAubWFwKGxpbmUgPT4gbGluZS5yZXBsYWNlKGAke2ZpbGVQYXRofTogYCwgJycpKTtcbiAgICBlcnJvcnMuc3BsaWNlKDEsIDAsIFsnJ10pO1xuXG4gICAgY29uc29sZS5ncm91cCgpO1xuICAgIGNvbnNvbGUud2FybihgPT09PT09PT09PUZhaWxlZCB0byBwYXJzZSBtb2NrIGNvbmZpZy49PT09PT09PT09YCk7XG4gICAgY29uc29sZS5sb2coZXJyb3JzLmpvaW4oJ1xcbicpKTtcbiAgICBjb25zb2xlLmdyb3VwRW5kKCk7XG5cbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICBnZXRSdWxlKG1ldGhvZDogc3RyaW5nLCB1cmw6IHN0cmluZyk6IE1vY2tSdWxlIHwgbnVsbCB7XG4gICAgbWV0aG9kID0gKG1ldGhvZCB8fCAnR0VUJykudG9VcHBlckNhc2UoKTtcbiAgICBjb25zdCBwYXJhbXMgPSB7fTtcbiAgICBjb25zdCBsaXN0ID0gdGhpcy5jYWNoZWQuZmlsdGVyKHcgPT4gdy5tZXRob2QgPT09IG1ldGhvZCAmJiAody5tYXJ0Y2hlciA/IHcubWFydGNoZXIudGVzdCh1cmwpIDogdy51cmwgPT09IHVybCkpO1xuICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgcmV0ID0gbGlzdC5maW5kKHcgPT4gdy51cmwgPT09IHVybCkgfHwgbGlzdFswXTtcbiAgICBpZiAocmV0Lm1hcnRjaGVyKSB7XG4gICAgICBjb25zdCBleGVjQXJyID0gcmV0Lm1hcnRjaGVyLmV4ZWModXJsKTtcbiAgICAgIGV4ZWNBcnIhLnNsaWNlKDEpLm1hcCgodmFsdWU6IHN0cmluZywgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICBwYXJhbXNbcmV0LnNlZ21lbnRzW2luZGV4XV0gPSB2YWx1ZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgdXJsLFxuICAgICAgbWV0aG9kOiByZXQubWV0aG9kLFxuICAgICAgcGFyYW1zLFxuICAgICAgY2FsbGJhY2s6IHJldC5jYWxsYmFjayxcbiAgICB9O1xuICB9XG5cbiAgY2xlYXJDYWNoZSgpIHtcbiAgICB0aGlzLmNhY2hlZCA9IFtdO1xuICB9XG5cbiAgZ2V0IHJ1bGVzKCkge1xuICAgIHJldHVybiB0aGlzLmNhY2hlZDtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYXJDYWNoZSgpO1xuICB9XG59XG4iXX0=