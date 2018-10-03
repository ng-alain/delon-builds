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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL21vY2svIiwic291cmNlcyI6WyJzcmMvbW9jay5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJaEQsTUFBTTs7OztJQUdKLFlBQW9CLE1BQXVCO1FBQXZCLFdBQU0sR0FBTixNQUFNLENBQWlCO3NCQUZSLEVBQUU7UUFHbkMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7S0FDekI7Ozs7SUFJTyxTQUFTO1FBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSTtZQUNGLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN0QjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNyQjs7Ozs7SUFHSyxhQUFhOztRQUNuQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUM5QixJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFXLEVBQUUsRUFBRTs7WUFDeEMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxLQUFLO2dCQUFFLE9BQU87WUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFlLEVBQUUsRUFBRTs7Z0JBQzdDLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDN0IsSUFDRSxD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LFVBQVU7UUFDUixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztLQUNsQjs7OztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztLQUNwQjs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7S0FDbkI7OztZQXpKRixVQUFVOzs7O1lBSEYsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGVsb25Nb2NrQ29uZmlnIH0gZnJvbSAnLi9tb2NrLmNvbmZpZyc7XG5pbXBvcnQgeyBNb2NrQ2FjaGVkUnVsZSwgTW9ja1J1bGUgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNb2NrU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgY2FjaGVkOiBNb2NrQ2FjaGVkUnVsZVtdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb25maWc6IERlbG9uTW9ja0NvbmZpZykge1xuICAgIHRoaXMuYXBwbHlNb2NrKCk7XG4gICAgZGVsZXRlIHRoaXMuY29uZmlnLmRhdGE7XG4gIH1cblxuICAvLyByZWdpb246IHBhcnNlIHJ1bGVcblxuICBwcml2YXRlIGFwcGx5TW9jaygpIHtcbiAgICB0aGlzLmNhY2hlZCA9IFtdO1xuICAgIHRyeSB7XG4gICAgICB0aGlzLnJlYWxBcHBseU1vY2soKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aGlzLm91dHB1dEVycm9yKGUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVhbEFwcGx5TW9jaygpIHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5jb25maWcuZGF0YTtcbiAgICBpZiAoIWRhdGEpIHJldHVybjtcbiAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKChrZXk6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgcnVsZXMgPSBkYXRhW2tleV07XG4gICAgICBpZiAoIXJ1bGVzKSByZXR1cm47XG4gICAgICBPYmplY3Qua2V5cyhydWxlcykuZm9yRWFjaCgocnVsZUtleTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcnVsZXNbcnVsZUtleV07XG4gICAgICAgIGlmIChcbiAgICAgICAgICAhKFxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nIHx8XG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnIHx8XG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnXG4gICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBFcnJvcihcbiAgICAgICAgICAgIGBtb2NrIHZhbHVlIG9mIFske2tleX0tJHtydWxlS2V5fV0gc2hvdWxkIGJlIGZ1bmN0aW9uIG9yIG9iamVjdCBvciBzdHJpbmcsIGJ1dCBnb3QgJHt0eXBlb2YgdmFsdWV9YCxcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJ1bGUgPSB0aGlzLmdlblJ1bGUocnVsZUtleSwgdmFsdWUpO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgWydHRVQnLCAnUE9TVCcsICdQVVQnLCAnSEVBRCcsICdERUxFVEUnLCAnUEFUQ0gnLCAnT1BUSU9OUyddLmluZGV4T2YoXG4gICAgICAgICAgICBydWxlLm1ldGhvZCxcbiAgICAgICAgICApID09PSAtMVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBFcnJvcihgbWV0aG9kIG9mICR7a2V5fS0ke3J1bGVLZXl9IGlzIG5vdCB2YWxpZGApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmNhY2hlZC5maW5kKFxuICAgICAgICAgIHcgPT4gdy51cmwgPT09IHJ1bGUudXJsICYmIHcubWV0aG9kID09PSBydWxlLm1ldGhvZCxcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICBpdGVtLmNhbGxiYWNrID0gcnVsZS5jYWxsYmFjaztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmNhY2hlZC5wdXNoKHJ1bGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyByZWd1bGFyIG9yZGVyaW5nXG4gICAgdGhpcy5jYWNoZWQuc29ydChcbiAgICAgIChhLCBiKSA9PlxuICAgICAgICAoYi5tYXJ0Y2hlciB8fCAnJykudG9TdHJpbmcoKS5sZW5ndGggLVxuICAgICAgICAoYS5tYXJ0Y2hlciB8fCAnJykudG9TdHJpbmcoKS5sZW5ndGgsXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuUnVsZShrZXk6IHN0cmluZywgY2FsbGJhY2s6IGFueSk6IE1vY2tDYWNoZWRSdWxlIHtcbiAgICBsZXQgbWV0aG9kID0gJ0dFVCc7XG4gICAgbGV0IHVybCA9IGtleTtcblxuICAgIGlmIChrZXkuaW5kZXhPZignICcpID4gLTEpIHtcbiAgICAgIGNvbnN0IHNwbGl0ZWQgPSBrZXkuc3BsaXQoJyAnKTtcbiAgICAgIG1ldGhvZCA9IHNwbGl0ZWRbMF0udG9Mb3dlckNhc2UoKTtcbiAgICAgIHVybCA9IHNwbGl0ZWRbMV07XG4gICAgfVxuXG4gICAgbGV0IG1hcnRjaGVyOiBSZWdFeHAgPSBudWxsO1xuICAgIGxldCBzZWdtZW50czogc3RyaW5nW10gPSBbXTtcbiAgICBpZiAofnVybC5pbmRleE9mKCc6JykpIHtcbiAgICAgIHNlZ21lbnRzID0gdXJsIVxuICAgICAgICAuc3BsaXQoJy8nKVxuICAgICAgICAuZmlsdGVyKHNlZ21lbnQgPT4gc2VnbWVudC5zdGFydHNXaXRoKCc6JykpXG4gICAgICAgIC5tYXAodiA9PiB2LnN1YnN0cmluZygxKSk7XG4gICAgICBjb25zdCByZVN0ciA9IHVybCFcbiAgICAgICAgLnNwbGl0KCcvJylcbiAgICAgICAgLm1hcChzZWdtZW50ID0+IChzZWdtZW50LnN0YXJ0c1dpdGgoJzonKSA/IGAoW14vXSspYCA6IHNlZ21lbnQpKVxuICAgICAgICAuam9pbignLycpO1xuICAgICAgbWFydGNoZXIgPSBuZXcgUmVnRXhwKHJlU3RyLCAnaScpO1xuICAgIH0gZWxzZSBpZiAoLyhcXChbXildK1xcKSkvaS50ZXN0KHVybCkpIHtcbiAgICAgIG1hcnRjaGVyID0gbmV3IFJlZ0V4cCh1cmwsICdpJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHVybCxcbiAgICAgIG1hcnRjaGVyLFxuICAgICAgc2VnbWVudHMsXG4gICAgICBjYWxsYmFjayxcbiAgICAgIG1ldGhvZDogbWV0aG9kLnRvVXBwZXJDYXNlKCksXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgb3V0cHV0RXJyb3IoZXJyb3I6IGFueSkge1xuICAgIGNvbnN0IGZpbGVQYXRoID0gZXJyb3IubWVzc2FnZS5zcGxpdCgnOiAnKVswXTtcbiAgICBjb25zdCBlcnJvcnMgPSBlcnJvci5zdGFja1xuICAgICAgLnNwbGl0KCdcXG4nKVxuICAgICAgLmZpbHRlcihsaW5lID0+IGxpbmUudHJpbSgpLmluZGV4T2YoJ2F0ICcpICE9PSAwKVxuICAgICAgLm1hcChsaW5lID0+IGxpbmUucmVwbGFjZShgJHtmaWxlUGF0aH06IGAsICcnKSk7XG4gICAgZXJyb3JzLnNwbGljZSgxLCAwLCBbJyddKTtcblxuICAgIGNvbnNvbGUuZ3JvdXAoKTtcbiAgICBjb25zb2xlLndhcm4oYD09PT09PT09PT1GYWlsZWQgdG8gcGFyc2UgbW9jayBjb25maWcuPT09PT09PT09PWApO1xuICAgIGNvbnNvbGUubG9nKGVycm9ycy5qb2luKCdcXG4nKSk7XG4gICAgY29uc29sZS5ncm91cEVuZCgpO1xuXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cblxuICAvLyBlbmRyZWdpb25cblxuICBnZXRSdWxlKG1ldGhvZDogc3RyaW5nLCB1cmw6IHN0cmluZyk6IE1vY2tSdWxlIHtcbiAgICBtZXRob2QgPSAobWV0aG9kIHx8ICdHRVQnKS50b1VwcGVyQ2FzZSgpO1xuICAgIGNvbnN0IHBhcmFtczogYW55ID0ge307XG4gICAgY29uc3QgbGlzdCA9XG4gICAgICB0aGlzLmNhY2hlZC5maWx0ZXIoXG4gICAgICAgIHcgPT5cbiAgICAgICAgICB3Lm1ldGhvZCA9PT0gbWV0aG9kICYmXG4gICAgICAgICAgKHcubWFydGNoZXIgPyB3Lm1hcnRjaGVyLnRlc3QodXJsKSA6IHcudXJsID09PSB1cmwpLFxuICAgICAgKTtcbiAgICBpZiAobGlzdC5sZW5ndGggPT09IDApIHJldHVybiBudWxsO1xuICAgIGNvbnN0IHJldCA9IGxpc3QuZmluZCh3ID0+IHcudXJsID09PSB1cmwpIHx8IGxpc3RbMF07XG4gICAgaWYgKHJldC5tYXJ0Y2hlcikge1xuICAgICAgY29uc3QgZXhlY0FyciA9IHJldC5tYXJ0Y2hlci5leGVjKHVybCk7XG4gICAgICBleGVjQXJyLnNsaWNlKDEpLm1hcCgodmFsdWU6IHN0cmluZywgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICBwYXJhbXNbcmV0LnNlZ21lbnRzW2luZGV4XV0gPSB2YWx1ZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgdXJsLFxuICAgICAgbWV0aG9kOiByZXQubWV0aG9kLFxuICAgICAgcGFyYW1zLFxuICAgICAgY2FsbGJhY2s6IHJldC5jYWxsYmFjayxcbiAgICB9O1xuICB9XG5cbiAgY2xlYXJDYWNoZSgpIHtcbiAgICB0aGlzLmNhY2hlZCA9IFtdO1xuICB9XG5cbiAgZ2V0IHJ1bGVzKCkge1xuICAgIHJldHVybiB0aGlzLmNhY2hlZDtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYXJDYWNoZSgpO1xuICB9XG59XG4iXX0=