/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
    /**
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
     * @return {?}
     */
    realApplyMock() {
        /** @type {?} */
        const data = this.config.data;
        if (!data)
            return;
        Object.keys(data).forEach((key) => {
            /** @type {?} */
            const rules = data[key];
            if (!rules)
                return;
            Object.keys(rules).forEach((ruleKey) => {
                /** @type {?} */
                const value = rules[ruleKey];
                if (!(typeof value === 'function' ||
                    typeof value === 'object' ||
                    typeof value === 'string')) {
                    throw Error(`mock value of [${key}-${ruleKey}] should be function or object or string, but got ${typeof value}`);
                }
                /** @type {?} */
                const rule = this.genRule(ruleKey, value);
                if (['GET', 'POST', 'PUT', 'HEAD', 'DELETE', 'PATCH', 'OPTIONS'].indexOf(rule.method) === -1) {
                    throw Error(`method of ${key}-${ruleKey} is not valid`);
                }
                /** @type {?} */
                const item = this.cached.find(w => w.url === rule.url && w.method === rule.method);
                if (item) {
                    item.callback = rule.callback;
                }
                else {
                    this.cached.push(rule);
                }
            });
        });
        // regular ordering
        this.cached.sort((a, b) => (b.martcher || '').toString().length -
            (a.martcher || '').toString().length);
    }
    /**
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
            segments = /** @type {?} */ ((url)).split('/').filter(segment => segment.startsWith(':')).map(v => v.substring(1));
            /** @type {?} */
            const reStr = /** @type {?} */ ((url)).split('/').map(segment => (segment.startsWith(':') ? `([^/]+)` : segment)).join('/');
            martcher = new RegExp(reStr, 'i');
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
     * @param {?} error
     * @return {?}
     */
    outputError(error) {
        /** @type {?} */
        const filePath = error.message.split(': ')[0];
        /** @type {?} */
        const errors = error.stack
            .split('\n')
            .filter(line => line.trim().indexOf('at ') !== 0)
            .map(line => line.replace(`${filePath}: `, ''));
        errors.splice(1, 0, ['']);
        console.group();
        console.warn(`==========Failed to parse mock config.==========`);
        console.log(errors.join('\n'));
        console.groupEnd();
        throw error;
    }
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
        const list = this.cached.filter(w => w.method === method &&
            (w.martcher ? w.martcher.test(url) : w.url === url));
        if (list.length === 0)
            return null;
        /** @type {?} */
        const ret = list.find(w => w.url === url) || list[0];
        if (ret.martcher) {
            /** @type {?} */
            const execArr = ret.martcher.exec(url);
            execArr.slice(1).map((value, index) => {
                params[ret.segments[index]] = value;
            });
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
    /** @type {?} */
    MockService.prototype.cached;
    /** @type {?} */
    MockService.prototype.config;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL21vY2svIiwic291cmNlcyI6WyJzcmMvbW9jay5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJaEQsTUFBTTs7OztJQUdKLFlBQW9CLE1BQXVCO1FBQXZCLFdBQU0sR0FBTixNQUFNLENBQWlCO3NCQUZSLEVBQUU7UUFHbkMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7S0FDekI7Ozs7SUFJTyxTQUFTO1FBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSTtZQUNGLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN0QjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNyQjs7Ozs7SUFHSyxhQUFhOztRQUNuQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUM5QixJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFXLEVBQUUsRUFBRTs7WUFDeEMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxLQUFLO2dCQUFFLE9BQU87WUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFlLEVBQUUsRUFBRTs7Z0JBQzdDLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDN0IsSUFDRSxD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LFVBQVU7UUFDUixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztLQUNsQjs7OztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztLQUNwQjs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7S0FDbkI7OztZQXpKRixVQUFVOzs7O1lBSEYsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEZWxvbk1vY2tDb25maWcgfSBmcm9tICcuL21vY2suY29uZmlnJztcclxuaW1wb3J0IHsgTW9ja0NhY2hlZFJ1bGUsIE1vY2tSdWxlIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTW9ja1NlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgY2FjaGVkOiBNb2NrQ2FjaGVkUnVsZVtdID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29uZmlnOiBEZWxvbk1vY2tDb25maWcpIHtcclxuICAgIHRoaXMuYXBwbHlNb2NrKCk7XHJcbiAgICBkZWxldGUgdGhpcy5jb25maWcuZGF0YTtcclxuICB9XHJcblxyXG4gIC8vIHJlZ2lvbjogcGFyc2UgcnVsZVxyXG5cclxuICBwcml2YXRlIGFwcGx5TW9jaygpIHtcclxuICAgIHRoaXMuY2FjaGVkID0gW107XHJcbiAgICB0cnkge1xyXG4gICAgICB0aGlzLnJlYWxBcHBseU1vY2soKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgdGhpcy5vdXRwdXRFcnJvcihlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVhbEFwcGx5TW9jaygpIHtcclxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNvbmZpZy5kYXRhO1xyXG4gICAgaWYgKCFkYXRhKSByZXR1cm47XHJcbiAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKChrZXk6IHN0cmluZykgPT4ge1xyXG4gICAgICBjb25zdCBydWxlcyA9IGRhdGFba2V5XTtcclxuICAgICAgaWYgKCFydWxlcykgcmV0dXJuO1xyXG4gICAgICBPYmplY3Qua2V5cyhydWxlcykuZm9yRWFjaCgocnVsZUtleTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBydWxlc1tydWxlS2V5XTtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAhKFxyXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgfHxcclxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyB8fFxyXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICB0aHJvdyBFcnJvcihcclxuICAgICAgICAgICAgYG1vY2sgdmFsdWUgb2YgWyR7a2V5fS0ke3J1bGVLZXl9XSBzaG91bGQgYmUgZnVuY3Rpb24gb3Igb2JqZWN0IG9yIHN0cmluZywgYnV0IGdvdCAke3R5cGVvZiB2YWx1ZX1gLFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcnVsZSA9IHRoaXMuZ2VuUnVsZShydWxlS2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgWydHRVQnLCAnUE9TVCcsICdQVVQnLCAnSEVBRCcsICdERUxFVEUnLCAnUEFUQ0gnLCAnT1BUSU9OUyddLmluZGV4T2YoXHJcbiAgICAgICAgICAgIHJ1bGUubWV0aG9kLFxyXG4gICAgICAgICAgKSA9PT0gLTFcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHRocm93IEVycm9yKGBtZXRob2Qgb2YgJHtrZXl9LSR7cnVsZUtleX0gaXMgbm90IHZhbGlkYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmNhY2hlZC5maW5kKFxyXG4gICAgICAgICAgdyA9PiB3LnVybCA9PT0gcnVsZS51cmwgJiYgdy5tZXRob2QgPT09IHJ1bGUubWV0aG9kLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWYgKGl0ZW0pIHtcclxuICAgICAgICAgIGl0ZW0uY2FsbGJhY2sgPSBydWxlLmNhbGxiYWNrO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmNhY2hlZC5wdXNoKHJ1bGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIC8vIHJlZ3VsYXIgb3JkZXJpbmdcclxuICAgIHRoaXMuY2FjaGVkLnNvcnQoXHJcbiAgICAgIChhLCBiKSA9PlxyXG4gICAgICAgIChiLm1hcnRjaGVyIHx8ICcnKS50b1N0cmluZygpLmxlbmd0aCAtXHJcbiAgICAgICAgKGEubWFydGNoZXIgfHwgJycpLnRvU3RyaW5nKCkubGVuZ3RoLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2VuUnVsZShrZXk6IHN0cmluZywgY2FsbGJhY2s6IGFueSk6IE1vY2tDYWNoZWRSdWxlIHtcclxuICAgIGxldCBtZXRob2QgPSAnR0VUJztcclxuICAgIGxldCB1cmwgPSBrZXk7XHJcblxyXG4gICAgaWYgKGtleS5pbmRleE9mKCcgJykgPiAtMSkge1xyXG4gICAgICBjb25zdCBzcGxpdGVkID0ga2V5LnNwbGl0KCcgJyk7XHJcbiAgICAgIG1ldGhvZCA9IHNwbGl0ZWRbMF0udG9Mb3dlckNhc2UoKTtcclxuICAgICAgdXJsID0gc3BsaXRlZFsxXTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgbWFydGNoZXI6IFJlZ0V4cCA9IG51bGw7XHJcbiAgICBsZXQgc2VnbWVudHM6IHN0cmluZ1tdID0gW107XHJcbiAgICBpZiAofnVybC5pbmRleE9mKCc6JykpIHtcclxuICAgICAgc2VnbWVudHMgPSB1cmwhXHJcbiAgICAgICAgLnNwbGl0KCcvJylcclxuICAgICAgICAuZmlsdGVyKHNlZ21lbnQgPT4gc2VnbWVudC5zdGFydHNXaXRoKCc6JykpXHJcbiAgICAgICAgLm1hcCh2ID0+IHYuc3Vic3RyaW5nKDEpKTtcclxuICAgICAgY29uc3QgcmVTdHIgPSB1cmwhXHJcbiAgICAgICAgLnNwbGl0KCcvJylcclxuICAgICAgICAubWFwKHNlZ21lbnQgPT4gKHNlZ21lbnQuc3RhcnRzV2l0aCgnOicpID8gYChbXi9dKylgIDogc2VnbWVudCkpXHJcbiAgICAgICAgLmpvaW4oJy8nKTtcclxuICAgICAgbWFydGNoZXIgPSBuZXcgUmVnRXhwKHJlU3RyLCAnaScpO1xyXG4gICAgfSBlbHNlIGlmICgvKFxcKFteKV0rXFwpKS9pLnRlc3QodXJsKSkge1xyXG4gICAgICBtYXJ0Y2hlciA9IG5ldyBSZWdFeHAodXJsLCAnaScpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHVybCxcclxuICAgICAgbWFydGNoZXIsXHJcbiAgICAgIHNlZ21lbnRzLFxyXG4gICAgICBjYWxsYmFjayxcclxuICAgICAgbWV0aG9kOiBtZXRob2QudG9VcHBlckNhc2UoKSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG91dHB1dEVycm9yKGVycm9yOiBhbnkpIHtcclxuICAgIGNvbnN0IGZpbGVQYXRoID0gZXJyb3IubWVzc2FnZS5zcGxpdCgnOiAnKVswXTtcclxuICAgIGNvbnN0IGVycm9ycyA9IGVycm9yLnN0YWNrXHJcbiAgICAgIC5zcGxpdCgnXFxuJylcclxuICAgICAgLmZpbHRlcihsaW5lID0+IGxpbmUudHJpbSgpLmluZGV4T2YoJ2F0ICcpICE9PSAwKVxyXG4gICAgICAubWFwKGxpbmUgPT4gbGluZS5yZXBsYWNlKGAke2ZpbGVQYXRofTogYCwgJycpKTtcclxuICAgIGVycm9ycy5zcGxpY2UoMSwgMCwgWycnXSk7XHJcblxyXG4gICAgY29uc29sZS5ncm91cCgpO1xyXG4gICAgY29uc29sZS53YXJuKGA9PT09PT09PT09RmFpbGVkIHRvIHBhcnNlIG1vY2sgY29uZmlnLj09PT09PT09PT1gKTtcclxuICAgIGNvbnNvbGUubG9nKGVycm9ycy5qb2luKCdcXG4nKSk7XHJcbiAgICBjb25zb2xlLmdyb3VwRW5kKCk7XHJcblxyXG4gICAgdGhyb3cgZXJyb3I7XHJcbiAgfVxyXG5cclxuICAvLyBlbmRyZWdpb25cclxuXHJcbiAgZ2V0UnVsZShtZXRob2Q6IHN0cmluZywgdXJsOiBzdHJpbmcpOiBNb2NrUnVsZSB7XHJcbiAgICBtZXRob2QgPSAobWV0aG9kIHx8ICdHRVQnKS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgY29uc3QgcGFyYW1zOiBhbnkgPSB7fTtcclxuICAgIGNvbnN0IGxpc3QgPVxyXG4gICAgICB0aGlzLmNhY2hlZC5maWx0ZXIoXHJcbiAgICAgICAgdyA9PlxyXG4gICAgICAgICAgdy5tZXRob2QgPT09IG1ldGhvZCAmJlxyXG4gICAgICAgICAgKHcubWFydGNoZXIgPyB3Lm1hcnRjaGVyLnRlc3QodXJsKSA6IHcudXJsID09PSB1cmwpLFxyXG4gICAgICApO1xyXG4gICAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcclxuICAgIGNvbnN0IHJldCA9IGxpc3QuZmluZCh3ID0+IHcudXJsID09PSB1cmwpIHx8IGxpc3RbMF07XHJcbiAgICBpZiAocmV0Lm1hcnRjaGVyKSB7XHJcbiAgICAgIGNvbnN0IGV4ZWNBcnIgPSByZXQubWFydGNoZXIuZXhlYyh1cmwpO1xyXG4gICAgICBleGVjQXJyLnNsaWNlKDEpLm1hcCgodmFsdWU6IHN0cmluZywgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIHBhcmFtc1tyZXQuc2VnbWVudHNbaW5kZXhdXSA9IHZhbHVlO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHVybCxcclxuICAgICAgbWV0aG9kOiByZXQubWV0aG9kLFxyXG4gICAgICBwYXJhbXMsXHJcbiAgICAgIGNhbGxiYWNrOiByZXQuY2FsbGJhY2ssXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY2xlYXJDYWNoZSgpIHtcclxuICAgIHRoaXMuY2FjaGVkID0gW107XHJcbiAgfVxyXG5cclxuICBnZXQgcnVsZXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jYWNoZWQ7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2xlYXJDYWNoZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=