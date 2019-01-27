/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
     * @return {?}
     */
    MockService.prototype.applyMock = 
    // #region parse rule
    /**
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
     * @return {?}
     */
    MockService.prototype.realApplyMock = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var data = this.config.data;
        if (!data)
            return;
        Object.keys(data).forEach(function (key) {
            /** @type {?} */
            var rules = data[key];
            if (!rules)
                return;
            Object.keys(rules).forEach(function (ruleKey) {
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
                var item = _this.cached.find(function (w) { return w.url === rule.url && w.method === rule.method; });
                if (item) {
                    item.callback = rule.callback;
                }
                else {
                    _this.cached.push(rule);
                }
            });
        });
        // regular ordering
        this.cached.sort(function (a, b) { return (b.martcher || '').toString().length - (a.martcher || '').toString().length; });
    };
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {?} key
     * @param {?} callback
     * @return {?}
     */
    MockService.prototype.genRule = 
    // tslint:disable-next-line:no-any
    /**
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
                .filter(function (segment) { return segment.startsWith(':'); })
                .map(function (v) { return v.substring(1); });
            /** @type {?} */
            var reStr = (/** @type {?} */ (url)).split('/')
                .map(function (segment) { return (segment.startsWith(':') ? "([^/]+)" : segment); })
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
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {?} error
     * @return {?}
     */
    MockService.prototype.outputError = 
    // tslint:disable-next-line:no-any
    /**
     * @param {?} error
     * @return {?}
     */
    function (error) {
        /** @type {?} */
        var filePath = error.message.split(': ')[0];
        /** @type {?} */
        var errors = error.stack
            .split('\n')
            .filter(function (line) { return line.trim().indexOf('at ') !== 0; })
            .map(function (line) { return line.replace(filePath + ": ", ''); });
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
        var list = this.cached.filter(function (w) { return w.method === method && (w.martcher ? w.martcher.test(url) : w.url === url); });
        if (list.length === 0)
            return null;
        /** @type {?} */
        var ret = list.find(function (w) { return w.url === url; }) || list[0];
        if (ret.martcher) {
            /** @type {?} */
            var execArr = ret.martcher.exec(url);
            execArr.slice(1).map(function (value, index) {
                params[ret.segments[index]] = value;
            });
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
    /** @type {?} */
    MockService.prototype.cached;
    /** @type {?} */
    MockService.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL21vY2svIiwic291cmNlcyI6WyJzcmMvbW9jay5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBRXRELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFaEQ7SUFJRSxxQkFBb0IsTUFBdUI7UUFBdkIsV0FBTSxHQUFOLE1BQU0sQ0FBaUI7UUFGbkMsV0FBTSxHQUFxQixFQUFFLENBQUM7UUFHcEMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDMUIsQ0FBQztJQUVELHFCQUFxQjs7Ozs7SUFFYiwrQkFBUzs7Ozs7SUFBakI7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNqQixJQUFJO1lBQ0YsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3RCO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQzs7OztJQUVPLG1DQUFhOzs7SUFBckI7UUFBQSxpQkFpQ0M7O1lBaENPLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUk7UUFDN0IsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBVzs7Z0JBQzlCLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxLQUFLO2dCQUFFLE9BQU87WUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxPQUFlOztvQkFDbkMsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFP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QyxHQUFHLEtBQUssQ0FBQztZQUN0QyxDQUFDLENBQUMsQ0FBQztTQUNKO1FBQ0QsT0FBTztZQUNMLEdBQUcsS0FBQTtZQUNILE1BQU0sRUFBRSxHQUFHLENBQUMsTUFBTTtZQUNsQixNQUFNLFFBQUE7WUFDTixRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVE7U0FDdkIsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxnQ0FBVTs7O0lBQVY7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsc0JBQUksOEJBQUs7Ozs7UUFBVDtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQixDQUFDOzs7T0FBQTs7OztJQUVELGlDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDOztnQkE5SUYsVUFBVTs7OztnQkFGRixlQUFlOztJQWlKeEIsa0JBQUM7Q0FBQSxBQS9JRCxJQStJQztTQTlJWSxXQUFXOzs7SUFDdEIsNkJBQXNDOztJQUUxQiw2QkFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1vY2tDYWNoZWRSdWxlLCBNb2NrUnVsZSB9IGZyb20gJy4vaW50ZXJmYWNlJztcbmltcG9ydCB7IERlbG9uTW9ja0NvbmZpZyB9IGZyb20gJy4vbW9jay5jb25maWcnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTW9ja1NlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGNhY2hlZDogTW9ja0NhY2hlZFJ1bGVbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29uZmlnOiBEZWxvbk1vY2tDb25maWcpIHtcbiAgICB0aGlzLmFwcGx5TW9jaygpO1xuICAgIGRlbGV0ZSB0aGlzLmNvbmZpZy5kYXRhO1xuICB9XG5cbiAgLy8gI3JlZ2lvbiBwYXJzZSBydWxlXG5cbiAgcHJpdmF0ZSBhcHBseU1vY2soKSB7XG4gICAgdGhpcy5jYWNoZWQgPSBbXTtcbiAgICB0cnkge1xuICAgICAgdGhpcy5yZWFsQXBwbHlNb2NrKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhpcy5vdXRwdXRFcnJvcihlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlYWxBcHBseU1vY2soKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuY29uZmlnLmRhdGE7XG4gICAgaWYgKCFkYXRhKSByZXR1cm47XG4gICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaCgoa2V5OiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IHJ1bGVzID0gZGF0YVtrZXldO1xuICAgICAgaWYgKCFydWxlcykgcmV0dXJuO1xuICAgICAgT2JqZWN0LmtleXMocnVsZXMpLmZvckVhY2goKHJ1bGVLZXk6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHJ1bGVzW3J1bGVLZXldO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgISh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBFcnJvcihcbiAgICAgICAgICAgIGBtb2NrIHZhbHVlIG9mIFske2tleX0tJHtydWxlS2V5fV0gc2hvdWxkIGJlIGZ1bmN0aW9uIG9yIG9iamVjdCBvciBzdHJpbmcsIGJ1dCBnb3QgJHt0eXBlb2YgdmFsdWV9YCxcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJ1bGUgPSB0aGlzLmdlblJ1bGUocnVsZUtleSwgdmFsdWUpO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgWydHRVQnLCAnUE9TVCcsICdQVVQnLCAnSEVBRCcsICdERUxFVEUnLCAnUEFUQ0gnLCAnT1BUSU9OUyddLmluZGV4T2YocnVsZS5tZXRob2QpID09PSAtMVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBFcnJvcihgbWV0aG9kIG9mICR7a2V5fS0ke3J1bGVLZXl9IGlzIG5vdCB2YWxpZGApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmNhY2hlZC5maW5kKHcgPT4gdy51cmwgPT09IHJ1bGUudXJsICYmIHcubWV0aG9kID09PSBydWxlLm1ldGhvZCk7XG4gICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgaXRlbS5jYWxsYmFjayA9IHJ1bGUuY2FsbGJhY2s7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jYWNoZWQucHVzaChydWxlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gcmVndWxhciBvcmRlcmluZ1xuICAgIHRoaXMuY2FjaGVkLnNvcnQoXG4gICAgICAoYSwgYikgPT4gKGIubWFydGNoZXIgfHwgJycpLnRvU3RyaW5nKCkubGVuZ3RoIC0gKGEubWFydGNoZXIgfHwgJycpLnRvU3RyaW5nKCkubGVuZ3RoLFxuICAgICk7XG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHByaXZhdGUgZ2VuUnVsZShrZXk6IHN0cmluZywgY2FsbGJhY2s6IGFueSk6IE1vY2tDYWNoZWRSdWxlIHtcbiAgICBsZXQgbWV0aG9kID0gJ0dFVCc7XG4gICAgbGV0IHVybCA9IGtleTtcblxuICAgIGlmIChrZXkuaW5kZXhPZignICcpID4gLTEpIHtcbiAgICAgIGNvbnN0IHNwbGl0ZWQgPSBrZXkuc3BsaXQoJyAnKTtcbiAgICAgIG1ldGhvZCA9IHNwbGl0ZWRbMF0udG9Mb3dlckNhc2UoKTtcbiAgICAgIHVybCA9IHNwbGl0ZWRbMV07XG4gICAgfVxuXG4gICAgbGV0IG1hcnRjaGVyOiBSZWdFeHAgPSBudWxsO1xuICAgIGxldCBzZWdtZW50czogc3RyaW5nW10gPSBbXTtcbiAgICBpZiAofnVybC5pbmRleE9mKCc6JykpIHtcbiAgICAgIHNlZ21lbnRzID0gdXJsIVxuICAgICAgICAuc3BsaXQoJy8nKVxuICAgICAgICAuZmlsdGVyKHNlZ21lbnQgPT4gc2VnbWVudC5zdGFydHNXaXRoKCc6JykpXG4gICAgICAgIC5tYXAodiA9PiB2LnN1YnN0cmluZygxKSk7XG4gICAgICBjb25zdCByZVN0ciA9IHVybCFcbiAgICAgICAgLnNwbGl0KCcvJylcbiAgICAgICAgLm1hcChzZWdtZW50ID0+IChzZWdtZW50LnN0YXJ0c1dpdGgoJzonKSA/IGAoW14vXSspYCA6IHNlZ21lbnQpKVxuICAgICAgICAuam9pbignLycpO1xuICAgICAgbWFydGNoZXIgPSBuZXcgUmVnRXhwKGBeJHtyZVN0cn1gLCAnaScpO1xuICAgIH0gZWxzZSBpZiAoLyhcXChbXildK1xcKSkvaS50ZXN0KHVybCkpIHtcbiAgICAgIG1hcnRjaGVyID0gbmV3IFJlZ0V4cCh1cmwsICdpJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHVybCxcbiAgICAgIG1hcnRjaGVyLFxuICAgICAgc2VnbWVudHMsXG4gICAgICBjYWxsYmFjayxcbiAgICAgIG1ldGhvZDogbWV0aG9kLnRvVXBwZXJDYXNlKCksXG4gICAgfTtcbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgcHJpdmF0ZSBvdXRwdXRFcnJvcihlcnJvcjogYW55KSB7XG4gICAgY29uc3QgZmlsZVBhdGggPSBlcnJvci5tZXNzYWdlLnNwbGl0KCc6ICcpWzBdO1xuICAgIGNvbnN0IGVycm9ycyA9IGVycm9yLnN0YWNrXG4gICAgICAuc3BsaXQoJ1xcbicpXG4gICAgICAuZmlsdGVyKGxpbmUgPT4gbGluZS50cmltKCkuaW5kZXhPZignYXQgJykgIT09IDApXG4gICAgICAubWFwKGxpbmUgPT4gbGluZS5yZXBsYWNlKGAke2ZpbGVQYXRofTogYCwgJycpKTtcbiAgICBlcnJvcnMuc3BsaWNlKDEsIDAsIFsnJ10pO1xuXG4gICAgY29uc29sZS5ncm91cCgpO1xuICAgIGNvbnNvbGUud2FybihgPT09PT09PT09PUZhaWxlZCB0byBwYXJzZSBtb2NrIGNvbmZpZy49PT09PT09PT09YCk7XG4gICAgY29uc29sZS5sb2coZXJyb3JzLmpvaW4oJ1xcbicpKTtcbiAgICBjb25zb2xlLmdyb3VwRW5kKCk7XG5cbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICBnZXRSdWxlKG1ldGhvZDogc3RyaW5nLCB1cmw6IHN0cmluZyk6IE1vY2tSdWxlIHtcbiAgICBtZXRob2QgPSAobWV0aG9kIHx8ICdHRVQnKS50b1VwcGVyQ2FzZSgpO1xuICAgIGNvbnN0IHBhcmFtcyA9IHt9O1xuICAgIGNvbnN0IGxpc3QgPSB0aGlzLmNhY2hlZC5maWx0ZXIoXG4gICAgICB3ID0+IHcubWV0aG9kID09PSBtZXRob2QgJiYgKHcubWFydGNoZXIgPyB3Lm1hcnRjaGVyLnRlc3QodXJsKSA6IHcudXJsID09PSB1cmwpLFxuICAgICk7XG4gICAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCByZXQgPSBsaXN0LmZpbmQodyA9PiB3LnVybCA9PT0gdXJsKSB8fCBsaXN0WzBdO1xuICAgIGlmIChyZXQubWFydGNoZXIpIHtcbiAgICAgIGNvbnN0IGV4ZWNBcnIgPSByZXQubWFydGNoZXIuZXhlYyh1cmwpO1xuICAgICAgZXhlY0Fyci5zbGljZSgxKS5tYXAoKHZhbHVlOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgcGFyYW1zW3JldC5zZWdtZW50c1tpbmRleF1dID0gdmFsdWU7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHVybCxcbiAgICAgIG1ldGhvZDogcmV0Lm1ldGhvZCxcbiAgICAgIHBhcmFtcyxcbiAgICAgIGNhbGxiYWNrOiByZXQuY2FsbGJhY2ssXG4gICAgfTtcbiAgfVxuXG4gIGNsZWFyQ2FjaGUoKSB7XG4gICAgdGhpcy5jYWNoZWQgPSBbXTtcbiAgfVxuXG4gIGdldCBydWxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5jYWNoZWQ7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFyQ2FjaGUoKTtcbiAgfVxufVxuIl19