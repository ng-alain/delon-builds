/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
    /**
     * @return {?}
     */
    MockService.prototype.applyMock = /**
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
                if (!(typeof value === 'function' ||
                    typeof value === 'object' ||
                    typeof value === 'string')) {
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
        this.cached.sort(function (a, b) {
            return (b.martcher || '').toString().length -
                (a.martcher || '').toString().length;
        });
    };
    /**
     * @param {?} key
     * @param {?} callback
     * @return {?}
     */
    MockService.prototype.genRule = /**
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
            segments = /** @type {?} */ ((url)).split('/').filter(function (segment) { return segment.startsWith(':'); }).map(function (v) { return v.substring(1); });
            /** @type {?} */
            var reStr = /** @type {?} */ ((url)).split('/').map(function (segment) { return (segment.startsWith(':') ? "([^/]+)" : segment); }).join('/');
            martcher = new RegExp(reStr, 'i');
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
     * @param {?} error
     * @return {?}
     */
    MockService.prototype.outputError = /**
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
    // endregion
    /**
     * @param {?} method
     * @param {?} url
     * @return {?}
     */
    MockService.prototype.getRule = /**
     * @param {?} method
     * @param {?} url
     * @return {?}
     */
    function (method, url) {
        method = (method || 'GET').toUpperCase();
        /** @type {?} */
        var params = {};
        /** @type {?} */
        var list = this.cached.filter(function (w) {
            return w.method === method &&
                (w.martcher ? w.martcher.test(url) : w.url === url);
        });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL21vY2svIiwic291cmNlcyI6WyJzcmMvbW9jay5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7O0lBTzlDLHFCQUFvQixNQUF1QjtRQUF2QixXQUFNLEdBQU4sTUFBTSxDQUFpQjtzQkFGUixFQUFFO1FBR25DLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0tBQ3pCOzs7O0lBSU8sK0JBQVM7Ozs7UUFDZixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNqQixJQUFJO1lBQ0YsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3RCO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3JCOzs7OztJQUdLLG1DQUFhOzs7Ozs7UUFDbkIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDOUIsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBVzs7WUFDcEMsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxLQUFLO2dCQUFFLE9BQU87WUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxPQUFlOztnQkFDekMsSUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM3QixJQUNFLENBQUMsQ0FDQyxPQUFPLEtBQUssS0FB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T0FBTztZQUNMLEdBQUcsS0FBQTtZQUNILE1BQU0sRUFBRSxHQUFHLENBQUMsTUFBTTtZQUNsQixNQUFNLFFBQUE7WUFDTixRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVE7U0FDdkIsQ0FBQztLQUNIOzs7O0lBRUQsZ0NBQVU7OztJQUFWO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7S0FDbEI7SUFFRCxzQkFBSSw4QkFBSzs7OztRQUFUO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ3BCOzs7T0FBQTs7OztJQUVELGlDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztLQUNuQjs7Z0JBekpGLFVBQVU7Ozs7Z0JBSEYsZUFBZTs7c0JBRHhCOztTQUthLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGVsb25Nb2NrQ29uZmlnIH0gZnJvbSAnLi9tb2NrLmNvbmZpZyc7XHJcbmltcG9ydCB7IE1vY2tDYWNoZWRSdWxlLCBNb2NrUnVsZSB9IGZyb20gJy4vaW50ZXJmYWNlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE1vY2tTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuICBwcml2YXRlIGNhY2hlZDogTW9ja0NhY2hlZFJ1bGVbXSA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZzogRGVsb25Nb2NrQ29uZmlnKSB7XHJcbiAgICB0aGlzLmFwcGx5TW9jaygpO1xyXG4gICAgZGVsZXRlIHRoaXMuY29uZmlnLmRhdGE7XHJcbiAgfVxyXG5cclxuICAvLyByZWdpb246IHBhcnNlIHJ1bGVcclxuXHJcbiAgcHJpdmF0ZSBhcHBseU1vY2soKSB7XHJcbiAgICB0aGlzLmNhY2hlZCA9IFtdO1xyXG4gICAgdHJ5IHtcclxuICAgICAgdGhpcy5yZWFsQXBwbHlNb2NrKCk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHRoaXMub3V0cHV0RXJyb3IoZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlYWxBcHBseU1vY2soKSB7XHJcbiAgICBjb25zdCBkYXRhID0gdGhpcy5jb25maWcuZGF0YTtcclxuICAgIGlmICghZGF0YSkgcmV0dXJuO1xyXG4gICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaCgoa2V5OiBzdHJpbmcpID0+IHtcclxuICAgICAgY29uc3QgcnVsZXMgPSBkYXRhW2tleV07XHJcbiAgICAgIGlmICghcnVsZXMpIHJldHVybjtcclxuICAgICAgT2JqZWN0LmtleXMocnVsZXMpLmZvckVhY2goKHJ1bGVLZXk6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gcnVsZXNbcnVsZUtleV07XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgIShcclxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nIHx8XHJcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgfHxcclxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJ1xyXG4gICAgICAgICAgKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgdGhyb3cgRXJyb3IoXHJcbiAgICAgICAgICAgIGBtb2NrIHZhbHVlIG9mIFske2tleX0tJHtydWxlS2V5fV0gc2hvdWxkIGJlIGZ1bmN0aW9uIG9yIG9iamVjdCBvciBzdHJpbmcsIGJ1dCBnb3QgJHt0eXBlb2YgdmFsdWV9YCxcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJ1bGUgPSB0aGlzLmdlblJ1bGUocnVsZUtleSwgdmFsdWUpO1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIFsnR0VUJywgJ1BPU1QnLCAnUFVUJywgJ0hFQUQnLCAnREVMRVRFJywgJ1BBVENIJywgJ09QVElPTlMnXS5pbmRleE9mKFxyXG4gICAgICAgICAgICBydWxlLm1ldGhvZCxcclxuICAgICAgICAgICkgPT09IC0xXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICB0aHJvdyBFcnJvcihgbWV0aG9kIG9mICR7a2V5fS0ke3J1bGVLZXl9IGlzIG5vdCB2YWxpZGApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5jYWNoZWQuZmluZChcclxuICAgICAgICAgIHcgPT4gdy51cmwgPT09IHJ1bGUudXJsICYmIHcubWV0aG9kID09PSBydWxlLm1ldGhvZCxcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmIChpdGVtKSB7XHJcbiAgICAgICAgICBpdGVtLmNhbGxiYWNrID0gcnVsZS5jYWxsYmFjaztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5jYWNoZWQucHVzaChydWxlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICAvLyByZWd1bGFyIG9yZGVyaW5nXHJcbiAgICB0aGlzLmNhY2hlZC5zb3J0KFxyXG4gICAgICAoYSwgYikgPT5cclxuICAgICAgICAoYi5tYXJ0Y2hlciB8fCAnJykudG9TdHJpbmcoKS5sZW5ndGggLVxyXG4gICAgICAgIChhLm1hcnRjaGVyIHx8ICcnKS50b1N0cmluZygpLmxlbmd0aCxcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdlblJ1bGUoa2V5OiBzdHJpbmcsIGNhbGxiYWNrOiBhbnkpOiBNb2NrQ2FjaGVkUnVsZSB7XHJcbiAgICBsZXQgbWV0aG9kID0gJ0dFVCc7XHJcbiAgICBsZXQgdXJsID0ga2V5O1xyXG5cclxuICAgIGlmIChrZXkuaW5kZXhPZignICcpID4gLTEpIHtcclxuICAgICAgY29uc3Qgc3BsaXRlZCA9IGtleS5zcGxpdCgnICcpO1xyXG4gICAgICBtZXRob2QgPSBzcGxpdGVkWzBdLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIHVybCA9IHNwbGl0ZWRbMV07XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG1hcnRjaGVyOiBSZWdFeHAgPSBudWxsO1xyXG4gICAgbGV0IHNlZ21lbnRzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgaWYgKH51cmwuaW5kZXhPZignOicpKSB7XHJcbiAgICAgIHNlZ21lbnRzID0gdXJsIVxyXG4gICAgICAgIC5zcGxpdCgnLycpXHJcbiAgICAgICAgLmZpbHRlcihzZWdtZW50ID0+IHNlZ21lbnQuc3RhcnRzV2l0aCgnOicpKVxyXG4gICAgICAgIC5tYXAodiA9PiB2LnN1YnN0cmluZygxKSk7XHJcbiAgICAgIGNvbnN0IHJlU3RyID0gdXJsIVxyXG4gICAgICAgIC5zcGxpdCgnLycpXHJcbiAgICAgICAgLm1hcChzZWdtZW50ID0+IChzZWdtZW50LnN0YXJ0c1dpdGgoJzonKSA/IGAoW14vXSspYCA6IHNlZ21lbnQpKVxyXG4gICAgICAgIC5qb2luKCcvJyk7XHJcbiAgICAgIG1hcnRjaGVyID0gbmV3IFJlZ0V4cChyZVN0ciwgJ2knKTtcclxuICAgIH0gZWxzZSBpZiAoLyhcXChbXildK1xcKSkvaS50ZXN0KHVybCkpIHtcclxuICAgICAgbWFydGNoZXIgPSBuZXcgUmVnRXhwKHVybCwgJ2knKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB1cmwsXHJcbiAgICAgIG1hcnRjaGVyLFxyXG4gICAgICBzZWdtZW50cyxcclxuICAgICAgY2FsbGJhY2ssXHJcbiAgICAgIG1ldGhvZDogbWV0aG9kLnRvVXBwZXJDYXNlKCksXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvdXRwdXRFcnJvcihlcnJvcjogYW55KSB7XHJcbiAgICBjb25zdCBmaWxlUGF0aCA9IGVycm9yLm1lc3NhZ2Uuc3BsaXQoJzogJylbMF07XHJcbiAgICBjb25zdCBlcnJvcnMgPSBlcnJvci5zdGFja1xyXG4gICAgICAuc3BsaXQoJ1xcbicpXHJcbiAgICAgIC5maWx0ZXIobGluZSA9PiBsaW5lLnRyaW0oKS5pbmRleE9mKCdhdCAnKSAhPT0gMClcclxuICAgICAgLm1hcChsaW5lID0+IGxpbmUucmVwbGFjZShgJHtmaWxlUGF0aH06IGAsICcnKSk7XHJcbiAgICBlcnJvcnMuc3BsaWNlKDEsIDAsIFsnJ10pO1xyXG5cclxuICAgIGNvbnNvbGUuZ3JvdXAoKTtcclxuICAgIGNvbnNvbGUud2FybihgPT09PT09PT09PUZhaWxlZCB0byBwYXJzZSBtb2NrIGNvbmZpZy49PT09PT09PT09YCk7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcnMuam9pbignXFxuJykpO1xyXG4gICAgY29uc29sZS5ncm91cEVuZCgpO1xyXG5cclxuICAgIHRocm93IGVycm9yO1xyXG4gIH1cclxuXHJcbiAgLy8gZW5kcmVnaW9uXHJcblxyXG4gIGdldFJ1bGUobWV0aG9kOiBzdHJpbmcsIHVybDogc3RyaW5nKTogTW9ja1J1bGUge1xyXG4gICAgbWV0aG9kID0gKG1ldGhvZCB8fCAnR0VUJykudG9VcHBlckNhc2UoKTtcclxuICAgIGNvbnN0IHBhcmFtczogYW55ID0ge307XHJcbiAgICBjb25zdCBsaXN0ID1cclxuICAgICAgdGhpcy5jYWNoZWQuZmlsdGVyKFxyXG4gICAgICAgIHcgPT5cclxuICAgICAgICAgIHcubWV0aG9kID09PSBtZXRob2QgJiZcclxuICAgICAgICAgICh3Lm1hcnRjaGVyID8gdy5tYXJ0Y2hlci50ZXN0KHVybCkgOiB3LnVybCA9PT0gdXJsKSxcclxuICAgICAgKTtcclxuICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XHJcbiAgICBjb25zdCByZXQgPSBsaXN0LmZpbmQodyA9PiB3LnVybCA9PT0gdXJsKSB8fCBsaXN0WzBdO1xyXG4gICAgaWYgKHJldC5tYXJ0Y2hlcikge1xyXG4gICAgICBjb25zdCBleGVjQXJyID0gcmV0Lm1hcnRjaGVyLmV4ZWModXJsKTtcclxuICAgICAgZXhlY0Fyci5zbGljZSgxKS5tYXAoKHZhbHVlOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICBwYXJhbXNbcmV0LnNlZ21lbnRzW2luZGV4XV0gPSB2YWx1ZTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB1cmwsXHJcbiAgICAgIG1ldGhvZDogcmV0Lm1ldGhvZCxcclxuICAgICAgcGFyYW1zLFxyXG4gICAgICBjYWxsYmFjazogcmV0LmNhbGxiYWNrLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNsZWFyQ2FjaGUoKSB7XHJcbiAgICB0aGlzLmNhY2hlZCA9IFtdO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHJ1bGVzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY2FjaGVkO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmNsZWFyQ2FjaGUoKTtcclxuICB9XHJcbn1cclxuIl19