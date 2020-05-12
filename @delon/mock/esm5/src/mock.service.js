/**
 * @fileoverview added by tsickle
 * Generated from: src/mock.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DelonMockConfig } from './mock.config';
var MockService = /** @class */ (function () {
    function MockService(config) {
        this.config = config;
        this.cached = [];
        this.applyMock();
        delete this.config.data;
    }
    // #region parse rule
    // #region parse rule
    /**
     * @private
     * @return {?}
     */
    MockService.prototype.applyMock = 
    // #region parse rule
    /**
     * @private
     * @return {?}
     */
    function () {
        this.cached = [];
        try {
            this.realApplyMock();
        }
        catch (e) {
            this.outputError(e);
        }
    };
    /**
     * @private
     * @return {?}
     */
    MockService.prototype.realApplyMock = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var data = this.config.data;
        if (!data)
            return;
        Object.keys(data).forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            /** @type {?} */
            var rules = data[key];
            if (!rules)
                return;
            Object.keys(rules).forEach((/**
             * @param {?} ruleKey
             * @return {?}
             */
            function (ruleKey) {
                /** @type {?} */
                var value = rules[ruleKey];
                if (!(typeof value === 'function' || typeof value === 'object' || typeof value === 'string')) {
                    throw Error("mock value of [" + key + "-" + ruleKey + "] should be function or object or string, but got " + typeof value);
                }
                /** @type {?} */
                var rule = _this.genRule(ruleKey, value);
                if (['GET', 'POST', 'PUT', 'HEAD', 'DELETE', 'PATCH', 'OPTIONS'].indexOf(rule.method) === -1) {
                    throw Error("method of " + key + "-" + ruleKey + " is not valid");
                }
                /** @type {?} */
                var item = _this.cached.find((/**
                 * @param {?} w
                 * @return {?}
                 */
                function (w) { return w.url === rule.url && w.method === rule.method; }));
                if (item) {
                    item.callback = rule.callback;
                }
                else {
                    _this.cached.push(rule);
                }
            }));
        }));
        // regular ordering
        this.cached.sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) { return (b.martcher || '').toString().length - (a.martcher || '').toString().length; }));
    };
    /**
     * @private
     * @param {?} key
     * @param {?} callback
     * @return {?}
     */
    MockService.prototype.genRule = /**
     * @private
     * @param {?} key
     * @param {?} callback
     * @return {?}
     */
    function (key, callback) {
        /** @type {?} */
        var method = 'GET';
        /** @type {?} */
        var url = key;
        if (key.indexOf(' ') > -1) {
            /** @type {?} */
            var splited = key.split(' ');
            method = splited[0].toLowerCase();
            url = splited[1];
        }
        /** @type {?} */
        var martcher = null;
        /** @type {?} */
        var segments = [];
        if (~url.indexOf(':')) {
            segments = (/** @type {?} */ (url)).split('/')
                .filter((/**
             * @param {?} segment
             * @return {?}
             */
            function (segment) { return segment.startsWith(':'); }))
                .map((/**
             * @param {?} v
             * @return {?}
             */
            function (v) { return v.substring(1); }));
            /** @type {?} */
            var reStr = (/** @type {?} */ (url)).split('/')
                .map((/**
             * @param {?} segment
             * @return {?}
             */
            function (segment) { return (segment.startsWith(':') ? "([^/]+)" : segment); }))
                .join('/');
            martcher = new RegExp("^" + reStr, 'i');
        }
        else if (/(\([^)]+\))/i.test(url)) {
            martcher = new RegExp(url, 'i');
        }
        return {
            url: url,
            martcher: martcher,
            segments: segments,
            callback: callback,
            method: method.toUpperCase(),
        };
    };
    /**
     * @private
     * @param {?} error
     * @return {?}
     */
    MockService.prototype.outputError = /**
     * @private
     * @param {?} error
     * @return {?}
     */
    function (error) {
        /** @type {?} */
        var filePath = error.message.split(': ')[0];
        /** @type {?} */
        var errors = error.stack
            .split('\n')
            .filter((/**
         * @param {?} line
         * @return {?}
         */
        function (line) { return line.trim().indexOf('at ') !== 0; }))
            .map((/**
         * @param {?} line
         * @return {?}
         */
        function (line) { return line.replace(filePath + ": ", ''); }));
        errors.splice(1, 0, ['']);
        console.group();
        console.warn("==========Failed to parse mock config.==========");
        console.log(errors.join('\n'));
        console.groupEnd();
        throw error;
    };
    // #endregion
    // #endregion
    /**
     * @param {?} method
     * @param {?} url
     * @return {?}
     */
    MockService.prototype.getRule = 
    // #endregion
    /**
     * @param {?} method
     * @param {?} url
     * @return {?}
     */
    function (method, url) {
        method = (method || 'GET').toUpperCase();
        /** @type {?} */
        var params = {};
        /** @type {?} */
        var list = this.cached.filter((/**
         * @param {?} w
         * @return {?}
         */
        function (w) { return w.method === method && (w.martcher ? w.martcher.test(url) : w.url === url); }));
        if (list.length === 0)
            return null;
        /** @type {?} */
        var ret = list.find((/**
         * @param {?} w
         * @return {?}
         */
        function (w) { return w.url === url; })) || list[0];
        if (ret.martcher) {
            /** @type {?} */
            var execArr = ret.martcher.exec(url);
            (/** @type {?} */ (execArr)).slice(1).map((/**
             * @param {?} value
             * @param {?} index
             * @return {?}
             */
            function (value, index) {
                params[ret.segments[index]] = value;
            }));
        }
        return {
            url: url,
            method: ret.method,
            params: params,
            callback: ret.callback,
        };
    };
    /**
     * @return {?}
     */
    MockService.prototype.clearCache = /**
     * @return {?}
     */
    function () {
        this.cached = [];
    };
    Object.defineProperty(MockService.prototype, "rules", {
        get: /**
         * @return {?}
         */
        function () {
            return this.cached;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MockService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.clearCache();
    };
    MockService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    MockService.ctorParameters = function () { return [
        { type: DelonMockConfig }
    ]; };
    return MockService;
}());
export { MockService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL21vY2svIiwic291cmNlcyI6WyJzcmMvbW9jay5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUV0RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWhEO0lBSUUscUJBQW9CLE1BQXVCO1FBQXZCLFdBQU0sR0FBTixNQUFNLENBQWlCO1FBRm5DLFdBQU0sR0FBcUIsRUFBRSxDQUFDO1FBR3BDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQzFCLENBQUM7SUFFRCxxQkFBcUI7Ozs7OztJQUViLCtCQUFTOzs7Ozs7SUFBakI7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNqQixJQUFJO1lBQ0YsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3RCO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQzs7Ozs7SUFFTyxtQ0FBYTs7OztJQUFyQjtRQUFBLGlCQTJCQzs7WUExQk8sSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSTtRQUM3QixJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxHQUFXOztnQkFDOUIsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDdkIsSUFBSSxDQUFDLEtBQUs7Z0JBQUUsT0FBTztZQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU87Ozs7WUFBQyxVQUFDLE9BQWU7O29CQUNuQyxLQUFLLEdBQUcsS0FB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QUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUN0QyxDQUFDLEVBQUMsQ0FBQztTQUNKO1FBQ0QsT0FBTztZQUNMLEdBQUcsS0FBQTtZQUNILE1BQU0sRUFBRSxHQUFHLENBQUMsTUFBTTtZQUNsQixNQUFNLFFBQUE7WUFDTixRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVE7U0FDdkIsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxnQ0FBVTs7O0lBQVY7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsc0JBQUksOEJBQUs7Ozs7UUFBVDtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQixDQUFDOzs7T0FBQTs7OztJQUVELGlDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDOztnQkFwSUYsVUFBVTs7OztnQkFGRixlQUFlOztJQXVJeEIsa0JBQUM7Q0FBQSxBQXJJRCxJQXFJQztTQXBJWSxXQUFXOzs7Ozs7SUFDdEIsNkJBQXNDOzs7OztJQUUxQiw2QkFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1vY2tDYWNoZWRSdWxlLCBNb2NrUnVsZSB9IGZyb20gJy4vaW50ZXJmYWNlJztcbmltcG9ydCB7IERlbG9uTW9ja0NvbmZpZyB9IGZyb20gJy4vbW9jay5jb25maWcnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTW9ja1NlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGNhY2hlZDogTW9ja0NhY2hlZFJ1bGVbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29uZmlnOiBEZWxvbk1vY2tDb25maWcpIHtcbiAgICB0aGlzLmFwcGx5TW9jaygpO1xuICAgIGRlbGV0ZSB0aGlzLmNvbmZpZy5kYXRhO1xuICB9XG5cbiAgLy8gI3JlZ2lvbiBwYXJzZSBydWxlXG5cbiAgcHJpdmF0ZSBhcHBseU1vY2soKSB7XG4gICAgdGhpcy5jYWNoZWQgPSBbXTtcbiAgICB0cnkge1xuICAgICAgdGhpcy5yZWFsQXBwbHlNb2NrKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhpcy5vdXRwdXRFcnJvcihlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlYWxBcHBseU1vY2soKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuY29uZmlnLmRhdGE7XG4gICAgaWYgKCFkYXRhKSByZXR1cm47XG4gICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaCgoa2V5OiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IHJ1bGVzID0gZGF0YVtrZXldO1xuICAgICAgaWYgKCFydWxlcykgcmV0dXJuO1xuICAgICAgT2JqZWN0LmtleXMocnVsZXMpLmZvckVhY2goKHJ1bGVLZXk6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHJ1bGVzW3J1bGVLZXldO1xuICAgICAgICBpZiAoISh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICAgIHRocm93IEVycm9yKFxuICAgICAgICAgICAgYG1vY2sgdmFsdWUgb2YgWyR7a2V5fS0ke3J1bGVLZXl9XSBzaG91bGQgYmUgZnVuY3Rpb24gb3Igb2JqZWN0IG9yIHN0cmluZywgYnV0IGdvdCAke3R5cGVvZiB2YWx1ZX1gLFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcnVsZSA9IHRoaXMuZ2VuUnVsZShydWxlS2V5LCB2YWx1ZSk7XG4gICAgICAgIGlmIChbJ0dFVCcsICdQT1NUJywgJ1BVVCcsICdIRUFEJywgJ0RFTEVURScsICdQQVRDSCcsICdPUFRJT05TJ10uaW5kZXhPZihydWxlLm1ldGhvZCkgPT09IC0xKSB7XG4gICAgICAgICAgdGhyb3cgRXJyb3IoYG1ldGhvZCBvZiAke2tleX0tJHtydWxlS2V5fSBpcyBub3QgdmFsaWRgKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5jYWNoZWQuZmluZCh3ID0+IHcudXJsID09PSBydWxlLnVybCAmJiB3Lm1ldGhvZCA9PT0gcnVsZS5tZXRob2QpO1xuICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgIGl0ZW0uY2FsbGJhY2sgPSBydWxlLmNhbGxiYWNrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY2FjaGVkLnB1c2gocnVsZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIHJlZ3VsYXIgb3JkZXJpbmdcbiAgICB0aGlzLmNhY2hlZC5zb3J0KChhLCBiKSA9PiAoYi5tYXJ0Y2hlciB8fCAnJykudG9TdHJpbmcoKS5sZW5ndGggLSAoYS5tYXJ0Y2hlciB8fCAnJykudG9TdHJpbmcoKS5sZW5ndGgpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5SdWxlKGtleTogc3RyaW5nLCBjYWxsYmFjazogYW55KTogTW9ja0NhY2hlZFJ1bGUge1xuICAgIGxldCBtZXRob2QgPSAnR0VUJztcbiAgICBsZXQgdXJsID0ga2V5O1xuXG4gICAgaWYgKGtleS5pbmRleE9mKCcgJykgPiAtMSkge1xuICAgICAgY29uc3Qgc3BsaXRlZCA9IGtleS5zcGxpdCgnICcpO1xuICAgICAgbWV0aG9kID0gc3BsaXRlZFswXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgdXJsID0gc3BsaXRlZFsxXTtcbiAgICB9XG5cbiAgICBsZXQgbWFydGNoZXI6IFJlZ0V4cCB8IG51bGwgPSBudWxsO1xuICAgIGxldCBzZWdtZW50czogc3RyaW5nW10gPSBbXTtcbiAgICBpZiAofnVybC5pbmRleE9mKCc6JykpIHtcbiAgICAgIHNlZ21lbnRzID0gdXJsIVxuICAgICAgICAuc3BsaXQoJy8nKVxuICAgICAgICAuZmlsdGVyKHNlZ21lbnQgPT4gc2VnbWVudC5zdGFydHNXaXRoKCc6JykpXG4gICAgICAgIC5tYXAodiA9PiB2LnN1YnN0cmluZygxKSk7XG4gICAgICBjb25zdCByZVN0ciA9IHVybCFcbiAgICAgICAgLnNwbGl0KCcvJylcbiAgICAgICAgLm1hcChzZWdtZW50ID0+IChzZWdtZW50LnN0YXJ0c1dpdGgoJzonKSA/IGAoW14vXSspYCA6IHNlZ21lbnQpKVxuICAgICAgICAuam9pbignLycpO1xuICAgICAgbWFydGNoZXIgPSBuZXcgUmVnRXhwKGBeJHtyZVN0cn1gLCAnaScpO1xuICAgIH0gZWxzZSBpZiAoLyhcXChbXildK1xcKSkvaS50ZXN0KHVybCkpIHtcbiAgICAgIG1hcnRjaGVyID0gbmV3IFJlZ0V4cCh1cmwsICdpJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHVybCxcbiAgICAgIG1hcnRjaGVyLFxuICAgICAgc2VnbWVudHMsXG4gICAgICBjYWxsYmFjayxcbiAgICAgIG1ldGhvZDogbWV0aG9kLnRvVXBwZXJDYXNlKCksXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgb3V0cHV0RXJyb3IoZXJyb3I6IGFueSkge1xuICAgIGNvbnN0IGZpbGVQYXRoID0gZXJyb3IubWVzc2FnZS5zcGxpdCgnOiAnKVswXTtcbiAgICBjb25zdCBlcnJvcnMgPSBlcnJvci5zdGFja1xuICAgICAgLnNwbGl0KCdcXG4nKVxuICAgICAgLmZpbHRlcihsaW5lID0+IGxpbmUudHJpbSgpLmluZGV4T2YoJ2F0ICcpICE9PSAwKVxuICAgICAgLm1hcChsaW5lID0+IGxpbmUucmVwbGFjZShgJHtmaWxlUGF0aH06IGAsICcnKSk7XG4gICAgZXJyb3JzLnNwbGljZSgxLCAwLCBbJyddKTtcblxuICAgIGNvbnNvbGUuZ3JvdXAoKTtcbiAgICBjb25zb2xlLndhcm4oYD09PT09PT09PT1GYWlsZWQgdG8gcGFyc2UgbW9jayBjb25maWcuPT09PT09PT09PWApO1xuICAgIGNvbnNvbGUubG9nKGVycm9ycy5qb2luKCdcXG4nKSk7XG4gICAgY29uc29sZS5ncm91cEVuZCgpO1xuXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgZ2V0UnVsZShtZXRob2Q6IHN0cmluZywgdXJsOiBzdHJpbmcpOiBNb2NrUnVsZSB8IG51bGwge1xuICAgIG1ldGhvZCA9IChtZXRob2QgfHwgJ0dFVCcpLnRvVXBwZXJDYXNlKCk7XG4gICAgY29uc3QgcGFyYW1zID0ge307XG4gICAgY29uc3QgbGlzdCA9IHRoaXMuY2FjaGVkLmZpbHRlcih3ID0+IHcubWV0aG9kID09PSBtZXRob2QgJiYgKHcubWFydGNoZXIgPyB3Lm1hcnRjaGVyLnRlc3QodXJsKSA6IHcudXJsID09PSB1cmwpKTtcbiAgICBpZiAobGlzdC5sZW5ndGggPT09IDApIHJldHVybiBudWxsO1xuICAgIGNvbnN0IHJldCA9IGxpc3QuZmluZCh3ID0+IHcudXJsID09PSB1cmwpIHx8IGxpc3RbMF07XG4gICAgaWYgKHJldC5tYXJ0Y2hlcikge1xuICAgICAgY29uc3QgZXhlY0FyciA9IHJldC5tYXJ0Y2hlci5leGVjKHVybCk7XG4gICAgICBleGVjQXJyIS5zbGljZSgxKS5tYXAoKHZhbHVlOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgcGFyYW1zW3JldC5zZWdtZW50c1tpbmRleF1dID0gdmFsdWU7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHVybCxcbiAgICAgIG1ldGhvZDogcmV0Lm1ldGhvZCxcbiAgICAgIHBhcmFtcyxcbiAgICAgIGNhbGxiYWNrOiByZXQuY2FsbGJhY2ssXG4gICAgfTtcbiAgfVxuXG4gIGNsZWFyQ2FjaGUoKSB7XG4gICAgdGhpcy5jYWNoZWQgPSBbXTtcbiAgfVxuXG4gIGdldCBydWxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5jYWNoZWQ7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFyQ2FjaGUoKTtcbiAgfVxufVxuIl19