import { Directive, Input, TemplateRef, Injectable, Host, Optional, Inject, Component, Output, EventEmitter, Renderer2, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { __values, __decorate, __metadata, __spread } from 'tslib';
import { ACLService, DelonACLModule } from '@delon/acl';
import { ALAIN_I18N_TOKEN, CNCurrencyPipe, DatePipe, YNPipe, _HttpClient, ModalHelper, DrawerHelper, DelonLocaleService } from '@delon/theme';
import { deepCopy, deepGet, toBoolean, updateHostClass, InputBoolean, InputNumber, DelonUtilModule } from '@delon/util';
import { DecimalPipe, DOCUMENT, CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { of } from 'rxjs';
import { map, catchError, filter } from 'rxjs/operators';
import { XlsxService } from '@delon/abc/xlsx';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var STRowSource = /** @class */ (function () {
    function STRowSource() {
        this.titles = {};
        this.rows = {};
    }
    /**
     * @param {?} type
     * @param {?} path
     * @param {?} ref
     * @return {?}
     */
    STRowSource.prototype.add = /**
     * @param {?} type
     * @param {?} path
     * @param {?} ref
     * @return {?}
     */
    function (type, path, ref) {
        this[type === 'title' ? 'titles' : 'rows'][path] = ref;
    };
    /**
     * @param {?} path
     * @return {?}
     */
    STRowSource.prototype.getTitle = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        return this.titles[path];
    };
    /**
     * @param {?} path
     * @return {?}
     */
    STRowSource.prototype.getRow = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        return this.rows[path];
    };
    STRowSource.decorators = [
        { type: Injectable }
    ];
    return STRowSource;
}());
var STRowDirective = /** @class */ (function () {
    function STRowDirective(ref, source) {
        this.ref = ref;
        this.source = source;
    }
    /**
     * @return {?}
     */
    STRowDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.source.add(this.type, this.id, this.ref);
    };
    STRowDirective.decorators = [
        { type: Directive, args: [{ selector: '[st-row]' },] }
    ];
    /** @nocollapse */
    STRowDirective.ctorParameters = function () { return [
        { type: TemplateRef },
        { type: STRowSource, decorators: [{ type: Host }] }
    ]; };
    STRowDirective.propDecorators = {
        id: [{ type: Input, args: ['st-row',] }],
        type: [{ type: Input }]
    };
    return STRowDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var STConfig = /** @class */ (function () {
    function STConfig() {
        /**
         * table大小
         */
        this.size = 'default';
        /**
         * 是否隐藏头和尾，当小屏幕下才显示，默认：`false`
         */
        this.responsiveHideHeaderFooter = false;
        /**
         * 请求体配置
         */
        this.req = {
            method: 'GET',
            allInBody: false,
            reName: { pi: 'pi', ps: 'ps' },
        };
        /**
         * 返回体配置
         */
        this.res = {
            reName: { list: ['list'], total: ['total'] },
        };
        /**
         * 返回体配置
         */
        this.page = {
            front: true,
            zeroIndexed: false,
            placement: 'right',
            show: true,
            showSize: false,
            pageSizes: [10, 20, 30, 40, 50],
            showQuickJumper: false,
            total: true,
            indexReset: true,
            toTop: true,
            toTopOffset: 100,
        };
        /**
         * 是否多排序，当 `sort` 多个相同值时自动合并，建议后端支持时使用
         */
        this.multiSort = false;
        /**
         * 按钮模态框配置
         */
        this.modal = {
            paramsName: 'record',
            size: 'lg',
            exact: true,
        };
        /**
         * 按钮抽屉配置
         */
        this.drawer = {
            paramsName: 'record',
            size: 'md',
            footer: true,
            footerHeight: 55,
        };
        /**
         * 气泡确认框内容
         */
        this.popTitle = '确认删除吗？';
        /**
         * 行单击多少时长之类为双击（单位：毫秒），默认：`200`
         */
        this.rowClickTime = 200;
        /**
         * 过滤按钮确认文本，默认：`确认`
         */
        this.filterConfirmText = '确认';
        /**
         * 过滤按钮重置文本，默认：`重置`
         */
        this.filterClearText = '重置';
        /**
         * 按钮图标
         */
        this.btnIcon = {
            type: '',
            theme: 'outline',
            spin: false,
        };
    }
    return STConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var STColumnSource = /** @class */ (function () {
    function STColumnSource(rowSource, acl, i18nSrv, cog) {
        this.rowSource = rowSource;
        this.acl = acl;
        this.i18nSrv = i18nSrv;
        this.cog = cog;
    }
    /**
     * @param {?} list
     * @return {?}
     */
    STColumnSource.prototype.btnCoerce = /**
     * @param {?} list
     * @return {?}
     */
    function (list) {
        var e_1, _a;
        if (!list)
            return [];
        /** @type {?} */
        var ret = [];
        var _b = this.cog, modal = _b.modal, drawer = _b.drawer, popTitle = _b.popTitle, btnIcon = _b.btnIcon;
        try {
            for (var list_1 = __values(list), list_1_1 = list_1.next(); !list_1_1.done; list_1_1 = list_1.next()) {
                var item = list_1_1.value;
                if (this.acl && item.acl && !this.acl.can(item.acl)) {
                    continue;
                }
                if (item.type === 'modal' || item.type === 'static') {
                    // compatible
                    if (item["component"] != null) {
                        item.modal = {
                            component: item["component"],
                            params: item["params"],
                            paramsName: item["paramName"] || modal.paramsName,
                            size: item["size"] || modal.size,
                            modalOptions: item["modalOptions"] || modal.modalOptions,
                        };
                    }
                    if (item.modal == null || item.modal.component == null) {
                        console.warn("[st] Should specify modal parameter");
                        item.type = 'none';
                    }
                    else {
                        item.modal = Object.assign({}, modal, item.modal);
                    }
                }
                if (item.type === 'drawer') {
                    if (item.drawer == null || item.drawer.component == null) {
                        console.warn("[st] Should specify drawer parameter");
                        item.type = 'none';
                    }
                    else {
                        item.drawer = Object.assign({}, drawer, item.drawer);
                    }
                }
                if (item.type === 'del' && typeof item.pop === 'undefined') {
                    item.pop = true;
                }
                if (item.pop === true) {
                    item["_type"] = 'pop';
                    if (typeof item.popTitle === 'undefined') {
                        item.popTitle = popTitle;
                    }
                }
                if (item.icon) {
                    item["_type"] = 'icon';
                    item.icon = Object.assign({}, btnIcon, typeof item.icon === 'string' ? { type: item.icon } : item.icon);
                }
                if (item.children && item.children.length > 0) {
                    item["_type"] = 'sub';
                    item.children = this.btnCoerce(item.children);
                }
                if (!item["_type"]) {
                    item["_type"] = '';
                }
                // i18n
                if (item.i18n && this.i18nSrv) {
                    item.text = this.i18nSrv.fanyi(item.i18n);
                }
                ret.push(item);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (list_1_1 && !list_1_1.done && (_a = list_1.return)) _a.call(list_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.btnCoerceIf(ret);
        return ret;
    };
    /**
     * @param {?} list
     * @return {?}
     */
    STColumnSource.prototype.btnCoerceIf = /**
     * @param {?} list
     * @return {?}
     */
    function (list) {
        var e_2, _a;
        try {
            for (var list_2 = __values(list), list_2_1 = list_2.next(); !list_2_1.done; list_2_1 = list_2.next()) {
                var item = list_2_1.value;
                if (!item.iif)
                    item.iif = function () { return true; };
                if (!item.children) {
                    item.children = [];
                }
                else {
                    this.btnCoerceIf(item.children);
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (list_2_1 && !list_2_1.done && (_a = list_2.return)) _a.call(list_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    /**
     * @param {?} list
     * @return {?}
     */
    STColumnSource.prototype.fixedCoerce = /**
     * @param {?} list
     * @return {?}
     */
    function (list) {
        /** @type {?} */
        var countReduce = function (a, b) {
            return a + +b.width.toString().replace('px', '');
        };
        // left width
        list
            .filter(function (w) { return w.fixed && w.fixed === 'left' && w.width; })
            .forEach(function (item, idx) {
            return (item["_left"] = list.slice(0, idx).reduce(countReduce, 0) + 'px');
        });
        // right width
        list
            .filter(function (w) { return w.fixed && w.fixed === 'right' && w.width; })
            .reverse()
            .forEach(function (item, idx) {
            return (item["_right"] =
                (idx > 0 ? list.slice(-idx).reduce(countReduce, 0) : 0) + 'px');
        });
    };
    /**
     * @param {?} item
     * @return {?}
     */
    STColumnSource.prototype.sortCoerce = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        // compatible
        if (item["sorter"] && typeof item["sorter"] === 'function') {
            return {
                enabled: true,
                default: /** @type {?} */ (item.sort),
                compare: item["sorter"],
                key: item["sortKey"] || item["indexKey"],
                reName: item["sortReName"],
            };
        }
        if (typeof item.sort === 'undefined') {
            return { enabled: false };
        }
        /** @type {?} */
        var res = {};
        if (typeof item.sort === 'string') {
            res.key = item.sort;
        }
        else if (typeof item.sort !== 'boolean') {
            res = item.sort;
        }
        if (!res.key) {
            res.key = item["indexKey"];
        }
        res.enabled = true;
        return res;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    STColumnSource.prototype.filterCoerce = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var _this = this;
        /** @type {?} */
        var res = null;
        // compatible
        if (item["filters"] && item["filters"].length > 0) {
            res = {
                confirmText: item["filterConfirmText"],
                clearText: item["filterClearText"],
                default: item["filtered"],
                fn: /** @type {?} */ (item.filter),
                icon: item["filterIcon"],
                key: item["filterKey"] || item["indexKey"],
                menus: item["filters"],
                multiple: item["filterMultiple"],
                reName: item["filterReName"],
            };
        }
        else {
            res = item.filter;
        }
        if (res == null || res.menus.length === 0) {
            return null;
        }
        if (typeof res.multiple === 'undefined') {
            res.multiple = true;
        }
        if (!res.confirmText) {
            res.confirmText = this.cog.filterConfirmText;
        }
        if (!res.clearText) {
            res.clearText = this.cog.filterClearText;
        }
        if (!res.icon) {
            res.icon = "filter";
        }
        if (!res.key) {
            res.key = item["indexKey"];
        }
        res.default = res.menus.findIndex(function (w) { return w.checked; }) !== -1;
        if (this.acl) {
            res.menus = res.menus.filter(function (w) { return _this.acl.can(w.acl); });
        }
        if (res.menus.length <= 0) {
            res = null;
        }
        return res;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    STColumnSource.prototype.restoreRender = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (item.renderTitle) {
            item["__renderTitle"] = this.rowSource.getTitle(item.renderTitle);
        }
        if (item.render) {
            item["__render"] = this.rowSource.getRow(item.render);
        }
    };
    /**
     * @param {?} list
     * @return {?}
     */
    STColumnSource.prototype.process = /**
     * @param {?} list
     * @return {?}
     */
    function (list) {
        var _this = this;
        var e_3, _a;
        if (!list || list.length === 0)
            throw new Error("[st]: the columns property muse be define!");
        /** @type {?} */
        var checkboxCount = 0;
        /** @type {?} */
        var radioCount = 0;
        /** @type {?} */
        var columns = [];
        /** @type {?} */
        var copyColumens = /** @type {?} */ (deepCopy(list));
        try {
            for (var copyColumens_1 = __values(copyColumens), copyColumens_1_1 = copyColumens_1.next(); !copyColumens_1_1.done; copyColumens_1_1 = copyColumens_1.next()) {
                var item = copyColumens_1_1.value;
                if (this.acl && item.acl && !this.acl.can(item.acl)) {
                    continue;
                }
                // index
                if (item.index) {
                    if (!Array.isArray(item.index)) {
                        item.index = item.index.split('.');
                    }
                    item["indexKey"] = item.index.join('.');
                }
                // title
                if (item.i18n && this.i18nSrv) {
                    item.title = this.i18nSrv.fanyi(item.i18n);
                }
                // checkbox
                if (item.selections == null) {
                    item.selections = [];
                }
                if (item.type === 'checkbox') {
                    ++checkboxCount;
                    if (!item.width) {
                        item.width = (item.selections.length > 0 ? 62 : 50) + "px";
                    }
                }
                if (this.acl) {
                    item.selections = item.selections.filter(function (w) { return _this.acl.can(w.acl); });
                }
                // radio
                if (item.type === 'radio') {
                    ++radioCount;
                    item.selections = [];
                    if (!item.width) {
                        item.width = '50px';
                    }
                }
                // types
                if (item.type === 'yn') {
                    item.yn = Object.assign({ truth: true }, item.yn);
                    // compatible
                    if (item["ynTruth"] != null)
                        item.yn.truth = item["ynTruth"];
                    if (item["ynYes"] != null)
                        item.yn.yes = item["ynYes"];
                    if (item["ynNo"] != null)
                        item.yn.no = item["ynNo"];
                }
                if ((item.type === 'link' && typeof item.click !== 'function') ||
                    (item.type === 'badge' && item.badge == null) ||
                    (item.type === 'tag' && item.tag == null)) {
                    (/** @type {?} */ (item)).type = '';
                }
                // className
                if (!item.className) {
                    item.className = {
                        number: 'text-right',
                        currency: 'text-right',
                        date: 'text-center',
                    }[item.type];
                }
                // sorter
                item["_sort"] = this.sortCoerce(item);
                // filter
                item.filter = this.filterCoerce(item);
                // buttons
                item.buttons = this.btnCoerce(item.buttons);
                // restore custom row
                this.restoreRender(item);
                columns.push(item);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (copyColumens_1_1 && !copyColumens_1_1.done && (_a = copyColumens_1.return)) _a.call(copyColumens_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
        if (checkboxCount > 1) {
            throw new Error("[st]: just only one column checkbox");
        }
        if (radioCount > 1) {
            throw new Error("[st]: just only one column radio");
        }
        this.fixedCoerce(columns);
        return columns;
    };
    /**
     * @param {?} columns
     * @return {?}
     */
    STColumnSource.prototype.restoreAllRender = /**
     * @param {?} columns
     * @return {?}
     */
    function (columns) {
        var _this = this;
        columns.forEach(function (i) { return _this.restoreRender(i); });
    };
    STColumnSource.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    STColumnSource.ctorParameters = function () { return [
        { type: STRowSource, decorators: [{ type: Host }] },
        { type: ACLService, decorators: [{ type: Optional }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [ALAIN_I18N_TOKEN,] }] },
        { type: STConfig }
    ]; };
    return STColumnSource;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var STDataSource = /** @class */ (function () {
    function STDataSource(http, currenty, date, yn, number, dom) {
        this.http = http;
        this.currenty = currenty;
        this.date = date;
        this.yn = yn;
        this.number = number;
        this.dom = dom;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    STDataSource.prototype.process = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        var _this = this;
        return new Promise(function (resolvePromise, rejectPromise) {
            /** @type {?} */
            var data$;
            /** @type {?} */
            var isRemote = false;
            var data = options.data, res = options.res, total = options.total, page = options.page, pi = options.pi, ps = options.ps, columns = options.columns;
            /** @type {?} */
            var retTotal;
            /** @type {?} */
            var retList;
            /** @type {?} */
            var retPi;
            if (typeof data === 'string') {
                isRemote = true;
                data$ = _this.getByHttp(data, options).pipe(map(function (result) {
                    /** @type {?} */
                    var ret = deepGet(result, /** @type {?} */ (res.reName.list), []);
                    if (ret == null || !Array.isArray(ret)) {
                        ret = [];
                    }
                    /** @type {?} */
                    var resultTotal = res.reName.total &&
                        deepGet(result, /** @type {?} */ (res.reName.total), null);
                    retTotal = resultTotal == null ? total || 0 : +resultTotal;
                    return /** @type {?} */ (ret);
                }), catchError(function (err) {
                    rejectPromise(err);
                    return [];
                }));
            }
            else if (Array.isArray(data)) {
                data$ = of(data);
            }
            else {
                // a cold observable
                data$ = data;
            }
            if (!isRemote) {
                data$ = data$.pipe(
                // sort
                map(function (result) {
                    /** @type {?} */
                    var copyResult = result.slice(0);
                    /** @type {?} */
                    var sorterFn = _this.getSorterFn(columns);
                    if (sorterFn) {
                        copyResult = copyResult.sort(sorterFn);
                    }
                    return copyResult;
                }), 
                // filter
                map(function (result) {
                    columns.filter(function (w) { return w.filter; }).forEach(function (c) {
                        /** @type {?} */
                        var values = c.filter.menus.filter(function (w) { return w.checked; });
                        if (values.length === 0)
                            return;
                        /** @type {?} */
                        var onFilter = c.filter.fn;
                        if (typeof onFilter !== 'function') {
                            console.warn("[st] Muse provide the fn function in filter");
                            return;
                        }
                        result = result.filter(function (record) {
                            return values.some(function (v) { return onFilter(v, record); });
                        });
                    });
                    return result;
                }), 
                // paging
                map(function (result) {
                    if (page.front) {
                        /** @type {?} */
                        var maxPageIndex = Math.ceil(result.length / ps);
                        retPi = Math.max(1, pi > maxPageIndex ? maxPageIndex : pi);
                        retTotal = result.length;
                        if (page.show === true) {
                            return result.slice((retPi - 1) * ps, retPi * ps);
                        }
                    }
                    return result;
                }));
            }
            // pre-process
            if (typeof res.process === 'function') {
                data$ = data$.pipe(map(function (result) { return res.process(result); }));
            }
            // data accelerator
            data$ = data$.pipe(map(function (result) {
                var e_1, _a;
                var _loop_1 = function (i) {
                    i["_values"] = columns.map(function (c) { return _this.get(i, c); });
                };
                try {
                    for (var result_1 = __values(result), result_1_1 = result_1.next(); !result_1_1.done; result_1_1 = result_1.next()) {
                        var i = result_1_1.value;
                        _loop_1(i);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (result_1_1 && !result_1_1.done && (_a = result_1.return)) _a.call(result_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                return result;
            }));
            data$.forEach(function (result) { return (retList = result); }).then(function () {
                resolvePromise({
                    pi: retPi,
                    total: retTotal,
                    list: retList,
                    pageShow: typeof page.show === 'undefined'
                        ? (retTotal || total) > ps
                        : page.show,
                });
            });
        });
    };
    /**
     * @param {?} item
     * @param {?} col
     * @return {?}
     */
    STDataSource.prototype.get = /**
     * @param {?} item
     * @param {?} col
     * @return {?}
     */
    function (item, col) {
        if (col.format) {
            /** @type {?} */
            var formatRes = /** @type {?} */ (col.format(item, col));
            if (~formatRes.indexOf('<')) {
                return this.dom.bypassSecurityTrustHtml(formatRes);
            }
            return formatRes;
        }
        /** @type {?} */
        var value = deepGet(item, /** @type {?} */ (col.index), col.default);
        /** @type {?} */
        var ret = value;
        switch (col.type) {
            case 'img':
                ret = value ? "<img src=\"" + value + "\" class=\"img\">" : '';
                break;
            case 'number':
                ret = this.number.transform(value, col.numberDigits);
                break;
            case 'currency':
                ret = this.currenty.transform(value);
                break;
            case 'date':
                ret = this.date.transform(value, col.dateFormat);
                break;
            case 'yn':
                ret = this.yn.transform(value === col.yn.truth, col.yn.yes, col.yn.no);
                break;
        }
        return ret;
    };
    /**
     * @param {?} url
     * @param {?} options
     * @return {?}
     */
    STDataSource.prototype.getByHttp = /**
     * @param {?} url
     * @param {?} options
     * @return {?}
     */
    function (url, options) {
        var _a;
        var req = options.req, page = options.page, pi = options.pi, ps = options.ps, multiSort = options.multiSort, columns = options.columns;
        /** @type {?} */
        var method = (req.method || 'GET').toUpperCase();
        /** @type {?} */
        var params = Object.assign((_a = {},
            _a[req.reName.pi] = page.zeroIndexed ? pi - 1 : pi,
            _a[req.reName.ps] = ps,
            _a), req.params, this.getReqSortMap(multiSort, columns), this.getReqFilterMap(columns));
        /** @type {?} */
        var reqOptions = {
            params: params,
            body: req.body,
            headers: req.headers,
        };
        if (method === 'POST' && req.allInBody === true) {
            reqOptions = {
                body: Object.assign({}, req.body, params),
                headers: req.headers,
            };
        }
        return this.http.request(method, url, reqOptions);
    };
    /**
     * @param {?} columns
     * @return {?}
     */
    STDataSource.prototype.getValidSort = /**
     * @param {?} columns
     * @return {?}
     */
    function (columns) {
        return columns
            .filter(function (item) { return item["_sort"] && item["_sort"].enabled && item["_sort"].default; })
            .map(function (item) { return item["_sort"]; });
    };
    /**
     * @param {?} columns
     * @return {?}
     */
    STDataSource.prototype.getSorterFn = /**
     * @param {?} columns
     * @return {?}
     */
    function (columns) {
        /** @type {?} */
        var sortList = this.getValidSort(columns);
        if (sortList.length === 0) {
            return;
        }
        if (typeof sortList[0].compare !== 'function') {
            console.warn("[st] Muse provide the compare function in sort");
            return;
        }
        return function (a, b) {
            /** @type {?} */
            var result = sortList[0].compare(a, b);
            if (result !== 0) {
                return sortList[0].default === 'descend' ? -result : result;
            }
            return 0;
        };
    };
    /**
     * @param {?} multiSort
     * @param {?} columns
     * @return {?}
     */
    STDataSource.prototype.getReqSortMap = /**
     * @param {?} multiSort
     * @param {?} columns
     * @return {?}
     */
    function (multiSort, columns) {
        var _a;
        /** @type {?} */
        var ret = {};
        /** @type {?} */
        var sortList = this.getValidSort(columns);
        if (!multiSort && sortList.length === 0)
            return ret;
        if (multiSort) {
            sortList.forEach(function (item) {
                ret[item.key] = (item.reName || {})[item.default] || item.default;
            });
            // 合并处理
            ret = (_a = {},
                _a[multiSort.key] = Object.keys(ret)
                    .map(function (key) { return key + multiSort.nameSeparator + ret[key]; })
                    .join(multiSort.separator),
                _a);
        }
        else {
            /** @type {?} */
            var mapData = sortList[0];
            ret[mapData.key] =
                (sortList[0].reName || {})[mapData.default] || mapData.default;
        }
        return ret;
    };
    /**
     * @param {?} columns
     * @return {?}
     */
    STDataSource.prototype.getReqFilterMap = /**
     * @param {?} columns
     * @return {?}
     */
    function (columns) {
        /** @type {?} */
        var ret = {};
        columns.filter(function (w) { return w.filter && w.filter.default === true; }).forEach(function (col) {
            /** @type {?} */
            var values = col.filter.menus.filter(function (f) { return f.checked === true; });
            /** @type {?} */
            var obj = {};
            if (col.filter.reName) {
                obj = col.filter.reName(col.filter.menus, col);
            }
            else {
                obj[col.filter.key] = values.map(function (i) { return i.value; }).join(',');
            }
            ret = Object.assign(ret, obj);
        });
        return ret;
    };
    STDataSource.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    STDataSource.ctorParameters = function () { return [
        { type: _HttpClient },
        { type: CNCurrencyPipe, decorators: [{ type: Host }] },
        { type: DatePipe, decorators: [{ type: Host }] },
        { type: YNPipe, decorators: [{ type: Host }] },
        { type: DecimalPipe, decorators: [{ type: Host }] },
        { type: DomSanitizer }
    ]; };
    return STDataSource;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var STExport = /** @class */ (function () {
    function STExport(xlsxSrv) {
        this.xlsxSrv = xlsxSrv;
    }
    /**
     * @param {?} item
     * @param {?} col
     * @return {?}
     */
    STExport.prototype._stGet = /**
     * @param {?} item
     * @param {?} col
     * @return {?}
     */
    function (item, col) {
        /** @type {?} */
        var ret = { t: 's', v: '' };
        if (col.format) {
            ret.v = col.format(item, col);
        }
        else {
            /** @type {?} */
            var val = deepGet(item, /** @type {?} */ (col.index), '');
            ret.v = val;
            switch (col.type) {
                case 'currency':
                    ret.t = 'n';
                    break;
                case 'date':
                    ret.t = 'd';
                    break;
                case 'yn':
                    ret.v = ret.v === col["ynTruth"] ? col["ynYes"] || '是' : col["ynNo"] || '否';
                    break;
            }
        }
        return ret;
    };
    /**
     * @param {?} opt
     * @return {?}
     */
    STExport.prototype.genSheet = /**
     * @param {?} opt
     * @return {?}
     */
    function (opt) {
        /** @type {?} */
        var sheets = {};
        /** @type {?} */
        var sheet = (sheets[opt.sheetname || 'Sheet1'] = {});
        /** @type {?} */
        var colData = opt._c.filter(function (w) {
            return w.exported !== false &&
                w.index &&
                (!w.buttons || w.buttons.length === 0);
        });
        /** @type {?} */
        var cc = colData.length;
        /** @type {?} */
        var dc = opt._d.length;
        // column
        for (var i = 0; i < cc; i++) {
            sheet[String.fromCharCode(65 + i) + "1"] = {
                t: 's',
                v: colData[i].title,
            };
        }
        // content
        for (var i = 0; i < dc; i++) {
            for (var j = 0; j < cc; j++) {
                sheet["" + String.fromCharCode(65 + j) + (i + 2)] = this._stGet(opt._d[i], colData[j]);
            }
        }
        if (cc > 0 && dc > 0) {
            sheet['!ref'] = "A1:" + String.fromCharCode(65 + cc - 1) + (dc + 1);
        }
        return sheets;
    };
    /**
     * @param {?} opt
     * @return {?}
     */
    STExport.prototype.export = /**
     * @param {?} opt
     * @return {?}
     */
    function (opt) {
        if (!this.xlsxSrv)
            throw new Error("muse be import 'XlsxModule' module, but got null");
        /** @type {?} */
        var sheets = this.genSheet(opt);
        return this.xlsxSrv.export({
            sheets: sheets,
            filename: opt.filename,
            callback: opt.callback,
        });
    };
    STExport.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    STExport.ctorParameters = function () { return [
        { type: XlsxService, decorators: [{ type: Optional }] }
    ]; };
    return STExport;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var STComponent = /** @class */ (function () {
    //#endregion
    function STComponent(cd, cog, router, el, renderer, exportSrv, i18nSrv, modalHelper, drawerHelper, doc, columnSource, dataSource, delonI18n) {
        var _this = this;
        this.cd = cd;
        this.cog = cog;
        this.router = router;
        this.el = el;
        this.renderer = renderer;
        this.exportSrv = exportSrv;
        this.modalHelper = modalHelper;
        this.drawerHelper = drawerHelper;
        this.doc = doc;
        this.columnSource = columnSource;
        this.dataSource = dataSource;
        this.delonI18n = delonI18n;
        this.totalTpl = "";
        this.locale = {};
        this._data = [];
        this._isPagination = true;
        this._allChecked = false;
        this._indeterminate = false;
        this._columns = [];
        /**
         * 列描述
         */
        this.columns = [];
        /**
         * 每页数量，当设置为 `0` 表示不分页，默认：`10`
         */
        this.ps = 10;
        /**
         * 当前页码
         */
        this.pi = 1;
        /**
         * 数据总量
         */
        this.total = 0;
        /**
         * 是否显示Loading
         */
        this.loading = false;
        /**
         * 延迟显示加载效果的时间（防止闪烁）
         */
        this.loadingDelay = 0;
        /**
         * 是否显示边框
         */
        this.bordered = false;
        /**
         * 请求异常时回调
         */
        this.error = new EventEmitter();
        /**
         * 变化时回调，包括：`pi`、`ps`、`checkbox`、`radio`、`sort`、`filter`、`click`、`dblClick` 变动
         */
        this.change = new EventEmitter();
        /**
         * 行单击多少时长之类为双击（单位：毫秒），默认：`200`
         */
        this.rowClickTime = 200;
        /**
         * checkbox变化时回调，参数为当前所选清单
         * @deprecated 使用 `change` 替代
         */
        this.checkboxChange = new EventEmitter();
        /**
         * radio变化时回调，参数为当前所选
         * @deprecated 使用 `change` 替代
         */
        this.radioChange = new EventEmitter();
        /**
         * 排序回调
         * @deprecated 使用 `change` 替代
         */
        this.sortChange = new EventEmitter();
        /**
         * 过滤变化时回调
         * @deprecated 使用 `change` 替代
         */
        this.filterChange = new EventEmitter();
        /**
         * 行单击回调
         * @deprecated 使用 `change` 替代
         */
        this.rowClick = new EventEmitter();
        /**
         * 行双击回调
         * @deprecated 使用 `change` 替代
         */
        this.rowDblClick = new EventEmitter();
        this.rowClickCount = 0;
        this.delonI18n$ = this.delonI18n.change.subscribe(function () {
            _this.locale = _this.delonI18n.getData('st');
            if (_this._columns.length > 0) {
                _this.page = _this.clonePage;
                _this.cd.detectChanges();
            }
        });
        Object.assign(this, deepCopy(cog));
        if (i18nSrv) {
            this.i18n$ = i18nSrv.change
                .pipe(filter(function () { return _this._columns.length > 0; }))
                .subscribe(function () { return _this.updateColumns(); });
        }
    }
    Object.defineProperty(STComponent.prototype, "req", {
        /** 请求体配置 */
        get: /**
         * 请求体配置
         * @return {?}
         */
        function () {
            return this._req;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var req = this.cog.req;
            /** @type {?} */
            var item = Object.assign({}, req, value);
            if (item.reName == null) {
                item.reName = deepCopy(req.reName);
            }
            this._req = item;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(STComponent.prototype, "res", {
        /** 返回体配置 */
        get: /**
         * 返回体配置
         * @return {?}
         */
        function () {
            return this._res;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var res = this.cog.res;
            /** @type {?} */
            var item = Object.assign({}, res, value);
            item.reName = Object.assign({}, res.reName, item.reName);
            if (!Array.isArray(item.reName.list))
                item.reName.list = item.reName.list.split('.');
            if (!Array.isArray(item.reName.total))
                item.reName.total = item.reName.total.split('.');
            this._res = item;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(STComponent.prototype, "page", {
        /** 分页器配置 */
        get: /**
         * 分页器配置
         * @return {?}
         */
        function () {
            return this._page;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.clonePage = value;
            var page = this.cog.page;
            /** @type {?} */
            var item = Object.assign({}, deepCopy(page), value);
            var total = item.total;
            if (typeof total === 'string' && total.length) {
                this.totalTpl = total;
            }
            else if (toBoolean(total)) {
                this.totalTpl = this.locale.total;
            }
            else {
                this.totalTpl = '';
            }
            this._page = item;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(STComponent.prototype, "multiSort", {
        /** 是否多排序，当 `sort` 多个相同值时自动合并，建议后端支持时使用 */
        get: /**
         * 是否多排序，当 `sort` 多个相同值时自动合并，建议后端支持时使用
         * @return {?}
         */
        function () {
            return this._multiSort;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (typeof value === 'boolean' && !toBoolean(value)) {
                this._multiSort = null;
                return;
            }
            this._multiSort = Object.assign(/** @type {?} */ ({
                key: 'sort',
                separator: '-',
                nameSeparator: '.',
            }), typeof value === 'object' ? value : {});
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} total
     * @param {?} range
     * @return {?}
     */
    STComponent.prototype.renderTotal = /**
     * @param {?} total
     * @param {?} range
     * @return {?}
     */
    function (total, range) {
        return this.totalTpl
            ? this.totalTpl
                .replace('{{total}}', total)
                .replace('{{range[0]}}', range[0])
                .replace('{{range[1]}}', range[1])
            : '';
    };
    /**
     * @param {?} type
     * @param {?=} data
     * @return {?}
     */
    STComponent.prototype.changeEmit = /**
     * @param {?} type
     * @param {?=} data
     * @return {?}
     */
    function (type, data) {
        /** @type {?} */
        var res = {
            type: type,
            pi: this.pi,
            ps: this.ps,
            total: this.total,
        };
        if (data != null) {
            res[type] = data;
        }
        this.change.emit(res);
    };
    /**
     * @return {?}
     */
    STComponent.prototype._load = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var _a = this, pi = _a.pi, ps = _a.ps, data = _a.data, req = _a.req, res = _a.res, page = _a.page, total = _a.total, multiSort = _a.multiSort;
        this.loading = true;
        return this.dataSource
            .process({
            pi: pi,
            ps: ps,
            total: total,
            data: data,
            req: req,
            res: res,
            page: page,
            columns: this._columns,
            multiSort: multiSort,
        })
            .then(function (result) {
            _this.loading = false;
            if (typeof result.pi !== 'undefined') {
                _this.pi = result.pi;
            }
            if (typeof result.total !== 'undefined') {
                _this.total = result.total;
            }
            if (typeof result.pageShow !== 'undefined') {
                _this._isPagination = result.pageShow;
            }
            _this._data = result.list;
            return _this._data;
        })
            .then(function () { return _this._refCheck(); })
            .catch(function (error) {
            _this.loading = false;
            _this.error.emit({ type: 'req', error: error });
        });
    };
    /**
     * 根据页码重新加载数据
     *
     * @param pi 指定当前页码，默认：`1`
     * @param extraParams 重新指定 `extraParams` 值
     * @param options 选项
     */
    /**
     * 根据页码重新加载数据
     *
     * @param {?=} pi 指定当前页码，默认：`1`
     * @param {?=} extraParams 重新指定 `extraParams` 值
     * @param {?=} options 选项
     * @return {?}
     */
    STComponent.prototype.load = /**
     * 根据页码重新加载数据
     *
     * @param {?=} pi 指定当前页码，默认：`1`
     * @param {?=} extraParams 重新指定 `extraParams` 值
     * @param {?=} options 选项
     * @return {?}
     */
    function (pi, extraParams, options) {
        if (pi === void 0) { pi = 1; }
        if (pi !== -1)
            this.pi = pi;
        if (typeof extraParams !== 'undefined') {
            this._req.params =
                options && options.merge
                    ? Object.assign(this._req.params, extraParams)
                    : extraParams;
        }
        this._change('pi');
    };
    /**
     * 重新刷新当前页
     * @param extraParams 重新指定 `extraParams` 值
     */
    /**
     * 重新刷新当前页
     * @param {?=} extraParams 重新指定 `extraParams` 值
     * @param {?=} options
     * @return {?}
     */
    STComponent.prototype.reload = /**
     * 重新刷新当前页
     * @param {?=} extraParams 重新指定 `extraParams` 值
     * @param {?=} options
     * @return {?}
     */
    function (extraParams, options) {
        this.load(-1, extraParams, options);
    };
    /**
     * 重置且重新设置 `pi` 为 `1`，包含以下值：
     * - `check` 数据
     * - `radio` 数据
     * - `sort` 数据
     * - `fileter` 数据
     *
     * @param extraParams 重新指定 `extraParams` 值
     */
    /**
     * 重置且重新设置 `pi` 为 `1`，包含以下值：
     * - `check` 数据
     * - `radio` 数据
     * - `sort` 数据
     * - `fileter` 数据
     *
     * @param {?=} extraParams 重新指定 `extraParams` 值
     * @param {?=} options
     * @return {?}
     */
    STComponent.prototype.reset = /**
     * 重置且重新设置 `pi` 为 `1`，包含以下值：
     * - `check` 数据
     * - `radio` 数据
     * - `sort` 数据
     * - `fileter` 数据
     *
     * @param {?=} extraParams 重新指定 `extraParams` 值
     * @param {?=} options
     * @return {?}
     */
    function (extraParams, options) {
        this.clearCheck()
            .clearRadio()
            .clearFilter()
            .clearSort();
        this.load(1, extraParams, options);
    };
    /**
     * @return {?}
     */
    STComponent.prototype._toTop = /**
     * @return {?}
     */
    function () {
        if (!this.page.toTop)
            return;
        /** @type {?} */
        var el = /** @type {?} */ (this.el.nativeElement);
        if (this.scroll) {
            el.querySelector('.ant-table-body').scrollTo(0, 0);
            return;
        }
        el.scrollIntoView();
        // fix header height
        this.doc.documentElement.scrollTop -= this.page.toTopOffset;
    };
    /**
     * @param {?} type
     * @return {?}
     */
    STComponent.prototype._change = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        var _this = this;
        this._load().then(function () {
            _this._toTop();
        });
        this.changeEmit(type);
    };
    /**
     * @param {?} e
     * @param {?} item
     * @param {?} col
     * @return {?}
     */
    STComponent.prototype._click = /**
     * @param {?} e
     * @param {?} item
     * @param {?} col
     * @return {?}
     */
    function (e, item, col) {
        e.preventDefault();
        e.stopPropagation();
        /** @type {?} */
        var res = col.click(item, this);
        if (typeof res === 'string') {
            this.router.navigateByUrl(res);
        }
        return false;
    };
    /**
     * @param {?} e
     * @param {?} item
     * @param {?} index
     * @return {?}
     */
    STComponent.prototype._rowClick = /**
     * @param {?} e
     * @param {?} item
     * @param {?} index
     * @return {?}
     */
    function (e, item, index) {
        var _this = this;
        if ((/** @type {?} */ (e.target)).nodeName === 'INPUT')
            return;
        ++this.rowClickCount;
        if (this.rowClickCount !== 1)
            return;
        setTimeout(function () {
            /** @type {?} */
            var data = { e: e, item: item, index: index };
            if (_this.rowClickCount === 1) {
                _this.changeEmit('click', data);
                // @deprecated as of v3
                // @deprecated as of v3
                _this.rowClick.emit(data);
            }
            else {
                _this.changeEmit('dblClick', data);
                // @deprecated as of v3
                // @deprecated as of v3
                _this.rowDblClick.emit(data);
            }
            _this.rowClickCount = 0;
        }, this.rowClickTime);
    };
    //#endregion
    //#region sort
    /**
     * @param {?} col
     * @param {?} idx
     * @param {?} value
     * @return {?}
     */
    STComponent.prototype.sort = /**
     * @param {?} col
     * @param {?} idx
     * @param {?} value
     * @return {?}
     */
    function (col, idx, value) {
        if (this.multiSort) {
            col["_sort"].default = value;
        }
        else {
            this._columns.forEach(function (item, index) { return (item["_sort"].default = index === idx ? value : null); });
        }
        this._load();
        /** @type {?} */
        var res = {
            value: value,
            map: this.dataSource.getReqSortMap(this.multiSort, this._columns),
            column: col,
        };
        this.changeEmit('sort', res);
        // @deprecated as of v3
        this.sortChange.emit(res);
    };
    /**
     * @return {?}
     */
    STComponent.prototype.clearSort = /**
     * @return {?}
     */
    function () {
        this._columns.forEach(function (item) { return (item["_sort"].default = null); });
    };
    /**
     * @param {?} col
     * @return {?}
     */
    STComponent.prototype.handleFilter = /**
     * @param {?} col
     * @return {?}
     */
    function (col) {
        col.filter.default = col.filter.menus.findIndex(function (w) { return w.checked; }) !== -1;
        this._load();
        this.changeEmit('filter', col);
        // @deprecated as of v3
        this.filterChange.emit(col);
    };
    /**
     * @param {?} col
     * @return {?}
     */
    STComponent.prototype._filterConfirm = /**
     * @param {?} col
     * @return {?}
     */
    function (col) {
        this.handleFilter(col);
    };
    /**
     * @param {?} col
     * @return {?}
     */
    STComponent.prototype._filterClear = /**
     * @param {?} col
     * @return {?}
     */
    function (col) {
        col.filter.menus.forEach(function (i) { return (i.checked = false); });
        this.handleFilter(col);
    };
    /**
     * @param {?} col
     * @param {?} item
     * @param {?} checked
     * @return {?}
     */
    STComponent.prototype._filterRadio = /**
     * @param {?} col
     * @param {?} item
     * @param {?} checked
     * @return {?}
     */
    function (col, item, checked) {
        col.filter.menus.forEach(function (i) { return (i.checked = false); });
        item.checked = checked;
    };
    /**
     * @return {?}
     */
    STComponent.prototype.clearFilter = /**
     * @return {?}
     */
    function () {
        this._columns
            .filter(function (w) { return w.filter && w.filter.default === true; })
            .forEach(function (col) {
            col.filter.default = false;
            col.filter.menus.forEach(function (f) { return (f.checked = false); });
        });
        return this;
    };
    //#endregion
    //#region checkbox
    /** 清除所有 `checkbox` */
    /**
     * 清除所有 `checkbox`
     * @return {?}
     */
    STComponent.prototype.clearCheck = /**
     * 清除所有 `checkbox`
     * @return {?}
     */
    function () {
        return this._checkAll(false);
    };
    /**
     * @return {?}
     */
    STComponent.prototype._refCheck = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var validData = this._data.filter(function (w) { return !w.disabled; });
        /** @type {?} */
        var checkedList = validData.filter(function (w) { return w.checked === true; });
        this._allChecked =
            checkedList.length > 0 && checkedList.length === validData.length;
        /** @type {?} */
        var allUnChecked = validData.every(function (value) { return !value.checked; });
        this._indeterminate = !this._allChecked && !allUnChecked;
        this.cd.detectChanges();
        return this;
    };
    /**
     * @param {?=} checked
     * @return {?}
     */
    STComponent.prototype._checkAll = /**
     * @param {?=} checked
     * @return {?}
     */
    function (checked) {
        checked = typeof checked === 'undefined' ? this._allChecked : checked;
        this._data.filter(function (w) { return !w.disabled; }).forEach(function (i) { return (i.checked = checked); });
        return this._refCheck()._checkNotify();
    };
    /**
     * @param {?} i
     * @param {?} value
     * @return {?}
     */
    STComponent.prototype._checkSelection = /**
     * @param {?} i
     * @param {?} value
     * @return {?}
     */
    function (i, value) {
        i.checked = value;
        return this._refCheck()._checkNotify();
    };
    /**
     * @param {?} row
     * @return {?}
     */
    STComponent.prototype._rowSelection = /**
     * @param {?} row
     * @return {?}
     */
    function (row) {
        row.select(this._data);
        return this._refCheck()._checkNotify();
    };
    /**
     * @return {?}
     */
    STComponent.prototype._checkNotify = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var res = this._data.filter(function (w) { return !w.disabled && w.checked === true; });
        this.changeEmit('checkbox', res);
        // @deprecated as of v3
        this.checkboxChange.emit(res);
        return this;
    };
    //#endregion
    //#region radio
    /** 清除所有 `radio` */
    /**
     * 清除所有 `radio`
     * @return {?}
     */
    STComponent.prototype.clearRadio = /**
     * 清除所有 `radio`
     * @return {?}
     */
    function () {
        this._data.filter(function (w) { return w.checked; }).forEach(function (item) { return (item.checked = false); });
        this.changeEmit('radio', null);
        // @deprecated as of v3
        this.radioChange.emit(null);
        return this;
    };
    /**
     * @param {?} checked
     * @param {?} item
     * @return {?}
     */
    STComponent.prototype._refRadio = /**
     * @param {?} checked
     * @param {?} item
     * @return {?}
     */
    function (checked, item) {
        // if (item.disabled === true) return;
        this._data.filter(function (w) { return !w.disabled; }).forEach(function (i) { return (i.checked = false); });
        item.checked = checked;
        this.changeEmit('radio', item);
        // @deprecated as of v3
        this.radioChange.emit(item);
        return this;
    };
    //#endregion
    //#region buttons
    /**
     * @param {?} e
     * @param {?} record
     * @param {?} btn
     * @return {?}
     */
    STComponent.prototype._btnClick = /**
     * @param {?} e
     * @param {?} record
     * @param {?} btn
     * @return {?}
     */
    function (e, record, btn) {
        var _this = this;
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        if (btn.type === 'modal' || btn.type === 'static') {
            /** @type {?} */
            var obj = {};
            var modal = btn.modal;
            obj[modal.paramsName] = record;
            /** @type {?} */
            var options = Object.assign({}, modal);
            (/** @type {?} */ (this.modalHelper[btn.type === 'modal' ? 'create' : 'createStatic']))(modal.component, Object.assign(obj, modal.params && modal.params(record)), options)
                .pipe(filter(function (w) { return typeof w !== 'undefined'; }))
                .subscribe(function (res) { return _this.btnCallback(record, btn, res); });
            return;
        }
        else if (btn.type === 'drawer') {
            /** @type {?} */
            var obj = {};
            var drawer = btn.drawer;
            obj[drawer.paramsName] = record;
            this.drawerHelper
                .create(drawer.title, drawer.component, Object.assign(obj, drawer.params && drawer.params(record)), Object.assign({}, drawer))
                .pipe(filter(function (w) { return typeof w !== 'undefined'; }))
                .subscribe(function (res) { return _this.btnCallback(record, btn, res); });
            return;
        }
        else if (btn.type === 'link') {
            /** @type {?} */
            var clickRes = this.btnCallback(record, btn);
            if (typeof clickRes === 'string') {
                this.router.navigateByUrl(clickRes);
            }
            return;
        }
        this.btnCallback(record, btn);
    };
    /**
     * @param {?} record
     * @param {?} btn
     * @param {?=} modal
     * @return {?}
     */
    STComponent.prototype.btnCallback = /**
     * @param {?} record
     * @param {?} btn
     * @param {?=} modal
     * @return {?}
     */
    function (record, btn, modal) {
        if (!btn.click)
            return;
        if (typeof btn.click === 'string') {
            switch (btn.click) {
                case 'load':
                    this.load();
                    break;
                case 'reload':
                    this.reload();
                    break;
            }
        }
        else {
            return btn.click(record, modal, this);
        }
    };
    /**
     * @param {?} record
     * @param {?} btn
     * @return {?}
     */
    STComponent.prototype._btnText = /**
     * @param {?} record
     * @param {?} btn
     * @return {?}
     */
    function (record, btn) {
        if (btn.format)
            return btn.format(record, btn);
        return btn.text;
    };
    //#endregion
    //#region export
    /**
     * 导出当前页，确保已经注册 `XlsxModule`
     * @param newData 重新指定数据，例如希望导出所有数据非常有用
     * @param opt 额外参数
     */
    /**
     * 导出当前页，确保已经注册 `XlsxModule`
     * @param {?=} newData 重新指定数据，例如希望导出所有数据非常有用
     * @param {?=} opt 额外参数
     * @return {?}
     */
    STComponent.prototype.export = /**
     * 导出当前页，确保已经注册 `XlsxModule`
     * @param {?=} newData 重新指定数据，例如希望导出所有数据非常有用
     * @param {?=} opt 额外参数
     * @return {?}
     */
    function (newData, opt) {
        var _this = this;
        (newData ? of(newData) : of(this._data)).subscribe(function (res) {
            return _this.exportSrv.export(Object.assign({}, opt, /** @type {?} */ ({
                _d: res,
                _c: _this._columns,
            })));
        });
    };
    /**
     * @return {?}
     */
    STComponent.prototype.updateColumns = /**
     * @return {?}
     */
    function () {
        this._columns = this.columnSource.process(this.columns);
    };
    /**
     * @return {?}
     */
    STComponent.prototype.setClass = /**
     * @return {?}
     */
    function () {
        var _a;
        updateHostClass(this.el.nativeElement, this.renderer, (_a = {},
            _a["st"] = true,
            _a["st__p-" + this.page.placement] = this.page.placement,
            _a["ant-table-rep__hide-header-footer"] = this.responsiveHideHeaderFooter,
            _a));
    };
    /**
     * @return {?}
     */
    STComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.columnSource.restoreAllRender(this._columns);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    STComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.columns) {
            this.updateColumns();
        }
        if (changes.data && changes.data.currentValue) {
            this._load();
        }
        this.setClass();
    };
    /**
     * @return {?}
     */
    STComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.delonI18n$.unsubscribe();
        if (this.i18n$)
            this.i18n$.unsubscribe();
    };
    STComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st',
                    template: "<nz-table [nzData]=\"_data\"\n  [(nzPageIndex)]=\"pi\" (nzPageIndexChange)=\"_change('pi')\"\n  [(nzPageSize)]=\"ps\" (nzPageSizeChange)=\"_change('ps')\"\n  [nzTotal]=\"total\"\n  [nzShowPagination]=\"_isPagination\"\n  [nzFrontPagination]=\"false\"\n  [nzBordered]=\"bordered\"\n  [nzSize]=\"size\"\n  [nzLoading]=\"loading\"\n  [nzLoadingDelay]=\"loadingDelay\"\n  [nzScroll]=\"scroll\"\n  [nzTitle]=\"header\" [nzFooter]=\"footer\" [nzNoResult]=\"noResult\"\n  [nzPageSizeOptions]=\"page.pageSizes\"\n  [nzShowQuickJumper]=\"page.showQuickJumper\"\n  [nzShowSizeChanger]=\"page.showSize\"\n  [nzShowTotal]=\"totalTpl\">\n  <thead class=\"st__head\">\n    <tr>\n      <th *ngIf=\"expand\" [nzShowExpand]=\"expand\"></th>\n      <th *ngFor=\"let c of _columns; let index=index\" [nzWidth]=\"c.width\" [nzLeft]=\"c._left\" [nzRight]=\"c._right\" [ngClass]=\"c.className\"\n        [attr.colspan]=\"c.colSpan\" [attr.data-col]=\"c.indexKey\"\n        [nzShowSort]=\"c._sort.enabled\" [nzSort]=\"c._sort.default\" (nzSortChange)=\"sort(c, index, $event)\"\n        nzCustomFilter>\n        <ng-template #renderTitle [ngTemplateOutlet]=\"c.__renderTitle\" [ngTemplateOutletContext]=\"{$implicit: c, index: index }\"></ng-template>\n        <ng-container *ngIf=\"!c.__renderTitle; else renderTitle\">\n          <ng-container [ngSwitch]=\"c.type\">\n            <ng-container *ngSwitchCase=\"'checkbox'\">\n              <label nz-checkbox class=\"st__checkall\" [(ngModel)]=\"_allChecked\" [nzIndeterminate]=\"_indeterminate\" (ngModelChange)=\"_checkAll()\"></label>\n              <nz-dropdown *ngIf=\"c.selections.length\" class=\"st__selection\">\n                <span nz-dropdown>\n                  <i nz-icon type=\"down\"></i>\n                </span>\n                <ul nz-menu>\n                  <li nz-menu-item *ngFor=\"let rw of c.selections\" (click)=\"_rowSelection(rw)\" [innerHTML]=\"rw.text\">\n                  </li>\n                </ul>\n              </nz-dropdown>\n            </ng-container>\n            <ng-container *ngSwitchDefault>\n              <span [innerHTML]=\"c.title\"></span>\n            </ng-container>\n          </ng-container>\n          <nz-dropdown *ngIf=\"c.filter\"\n            class=\"st__filter\" nzTrigger=\"click\" [hasFilterButton]=\"true\" [nzClickHide]=\"false\"\n            [(nzVisible)]=\"c.filter.visible\">\n            <i nz-icon [type]=\"c.filter.icon\" theme=\"fill\"\n              [class.ant-table-filter-selected]=\"c.filter.default\"\n              [class.ant-table-filter-open]=\"c.filter.visible\" nz-dropdown></i>\n            <ul nz-menu>\n              <ng-container *ngIf=\"c.filter.multiple\">\n                <li nz-menu-item *ngFor=\"let filter of c.filter.menus\">\n                  <label nz-checkbox [(ngModel)]=\"filter.checked\">{{filter.text}}</label>\n                </li>\n              </ng-container>\n              <ng-container *ngIf=\"!c.filter.multiple\">\n                <li nz-menu-item *ngFor=\"let filter of c.filter.menus\">\n                  <label nz-radio [ngModel]=\"filter.checked\" (ngModelChange)=\"_filterRadio(c, filter, $event)\">{{filter.text}}</label>\n                </li>\n              </ng-container>\n            </ul>\n            <div class=\"ant-table-filter-dropdown-btns\">\n              <a class=\"ant-table-filter-dropdown-link confirm\" (click)=\"c.filter.visible = false\">\n                <span (click)=\"_filterConfirm(c)\">{{c.filter.confirmText}}</span>\n              </a>\n              <a class=\"ant-table-filter-dropdown-link clear\" (click)=\"c.filter.visible = false\">\n                <span (click)=\"_filterClear(c)\">{{c.filter.clearText}}</span>\n              </a>\n            </div>\n          </nz-dropdown>\n        </ng-container>\n      </th>\n    </tr>\n  </thead>\n  <tbody class=\"st__body\">\n    <ng-container *ngFor=\"let i of _data; let index=index\">\n      <tr [attr.data-index]=\"index\" (click)=\"_rowClick($event, i, index)\">\n        <td *ngIf=\"expand\" [nzShowExpand]=\"expand\" [(nzExpand)]=\"i.expand\"></td>\n        <td *ngFor=\"let c of _columns; let cIdx=index\" [nzLeft]=\"c._left\" [nzRight]=\"c._right\" [nzCheckbox]=\"c.type === 'checkbox'\" [ngClass]=\"c.className\"\n          [attr.colspan]=\"c.colSpan\">\n          <span class=\"ant-table-rep__title\" [innerHTML]=\"c.title\"></span>\n          <ng-template #render [ngTemplateOutlet]=\"c.__render\" [ngTemplateOutletContext]=\"{$implicit: i, index: index, column: c }\"></ng-template>\n          <ng-container *ngIf=\"!c.__render; else render\">\n            <ng-container *ngIf=\"c.index\" [ngSwitch]=\"c.type\">\n              <ng-container *ngSwitchCase=\"'checkbox'\">\n                <label nz-checkbox [nzDisabled]=\"i.disabled\" [ngModel]=\"i.checked\" (ngModelChange)=\"_checkSelection(i, $event)\"></label>\n              </ng-container>\n              <ng-container *ngSwitchCase=\"'radio'\">\n                <label nz-radio [nzDisabled]=\"i.disabled\" [ngModel]=\"i.checked\" (ngModelChange)=\"_refRadio($event, i)\"></label>\n              </ng-container>\n              <ng-container *ngSwitchCase=\"'link'\">\n                <a (click)=\"_click($event, i, c)\" [innerHTML]=\"i._values[cIdx]\"></a>\n              </ng-container>\n              <ng-container *ngSwitchCase=\"'tag'\">\n                <nz-tag [nzColor]=\"c.tag[i._values[cIdx]].color\">{{c.tag[i._values[cIdx]].text || i._values[cIdx]}}</nz-tag>\n              </ng-container>\n              <ng-container *ngSwitchCase=\"'badge'\">\n                <nz-badge [nzStatus]=\"c.badge[i._values[cIdx]].color\" [nzText]=\"c.badge[i._values[cIdx]].text || i._values[cIdx]\"></nz-badge>\n              </ng-container>\n              <span *ngSwitchDefault [innerHTML]=\"i._values[cIdx]\"></span>\n            </ng-container>\n            <ng-container *ngFor=\"let btn of c.buttons; let last=last\">\n              <ng-container *ngIf=\"btn.iif(i, btn, c)\" [ngSwitch]=\"btn._type\">\n                <ng-container *ngSwitchCase=\"'pop'\">\n                  <nz-popconfirm [nzTitle]=\"btn.popTitle\" (nzOnConfirm)=\"_btnClick($event, i, btn)\">\n                    <a nz-popconfirm *ngIf=\"btn._type !== 'icon'\" [innerHTML]=\"_btnText(i, btn)\"></a>\n                    <a nz-popconfirm *ngIf=\"btn._type === 'icon'\">\n                      <i nz-icon [type]=\"btn.icon.type\" [theme]=\"btn.icon.theme\" [spin]=\"btn.icon.spin\" [twoToneColor]=\"btn.icon.twoToneColor\"\n                        [iconfont]=\"btn.icon.iconfont\"></i>\n                    </a>\n                  </nz-popconfirm>\n                </ng-container>\n                <ng-container *ngSwitchCase=\"'sub'\">\n                  <nz-dropdown>\n                    <a class=\"ant-dropdown-link\" nz-dropdown>\n                      <span [innerHTML]=\"_btnText(i, btn)\"></span>\n                      <i nz-icon type=\"down\"></i>\n                    </a>\n                    <ul nz-menu>\n                      <ng-container *ngFor=\"let subBtn of btn.children\">\n                        <li nz-menu-item *ngIf=\"subBtn.iif(i, subBtn, c)\">\n                          <ng-container [ngSwitch]=\"subBtn._type\">\n                            <ng-container *ngSwitchCase=\"'pop'\">\n                              <nz-popconfirm [nzTitle]=\"subBtn.popTitle\" (nzOnConfirm)=\"_btnClick($event, i, subBtn)\">\n                                <span nz-popconfirm [innerHTML]=\"_btnText(i, subBtn)\"></span>\n                              </nz-popconfirm>\n                            </ng-container>\n                            <span *ngSwitchDefault (click)=\"_btnClick($event, i, subBtn)\" [innerHTML]=\"_btnText(i, subBtn)\"></span>\n                          </ng-container>\n                        </li>\n                      </ng-container>\n                    </ul>\n                  </nz-dropdown>\n                </ng-container>\n                <ng-container *ngSwitchDefault>\n                  <a *ngIf=\"btn._type !== 'icon'\" (click)=\"_btnClick($event, i, btn)\" [innerHTML]=\"_btnText(i, btn)\"></a>\n                  <a *ngIf=\"btn._type === 'icon'\" (click)=\"_btnClick($event, i, btn)\">\n                    <i nz-icon [type]=\"btn.icon.type\" [theme]=\"btn.icon.theme\" [spin]=\"btn.icon.spin\" [twoToneColor]=\"btn.icon.twoToneColor\"\n                      [iconfont]=\"btn.icon.iconfont\"></i>\n                  </a>\n                </ng-container>\n                <nz-divider *ngIf=\"!last\" nzType=\"vertical\"></nz-divider>\n              </ng-container>\n            </ng-container>\n            <ng-template [ngIf]=\"!c.__renderExpanded\" [ngTemplateOutlet]=\"c.__renderExpanded\" [ngTemplateOutletContext]=\"{$implicit: i, index: index, column: c }\"></ng-template>\n          </ng-container>\n        </td>\n      </tr>\n      <tr [nzExpand]=\"i.expand\">\n        <td></td>\n        <td [attr.colspan]=\"_columns.length\">\n          <ng-template [ngTemplateOutlet]=\"expand\" [ngTemplateOutletContext]=\"{$implicit: i, index: index }\"></ng-template>\n        </td>\n      </tr>\n    </ng-container>\n    <ng-template [ngIf]=\"!loading\" [ngTemplateOutlet]=\"body\"></ng-template>\n  </tbody>\n  <ng-template #totalTpl let-range=\"range\" let-total>{{ renderTotal(total, range) }}</ng-template>\n</nz-table>\n",
                    providers: [
                        STDataSource,
                        STRowSource,
                        STColumnSource,
                        STExport,
                        CNCurrencyPipe,
                        DatePipe,
                        YNPipe,
                        DecimalPipe,
                    ],
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    STComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: STConfig },
        { type: Router },
        { type: ElementRef },
        { type: Renderer2 },
        { type: STExport },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [ALAIN_I18N_TOKEN,] }] },
        { type: ModalHelper },
        { type: DrawerHelper },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: STColumnSource },
        { type: STDataSource },
        { type: DelonLocaleService }
    ]; };
    STComponent.propDecorators = {
        data: [{ type: Input }],
        req: [{ type: Input }],
        res: [{ type: Input }],
        columns: [{ type: Input }],
        ps: [{ type: Input }],
        pi: [{ type: Input }],
        total: [{ type: Input }],
        page: [{ type: Input }],
        loading: [{ type: Input }],
        loadingDelay: [{ type: Input }],
        bordered: [{ type: Input }],
        size: [{ type: Input }],
        scroll: [{ type: Input }],
        multiSort: [{ type: Input }],
        header: [{ type: Input }],
        footer: [{ type: Input }],
        body: [{ type: Input }],
        expand: [{ type: Input }],
        noResult: [{ type: Input }],
        widthConfig: [{ type: Input }],
        error: [{ type: Output }],
        change: [{ type: Output }],
        rowClickTime: [{ type: Input }],
        responsiveHideHeaderFooter: [{ type: Input }],
        checkboxChange: [{ type: Output }],
        radioChange: [{ type: Output }],
        sortChange: [{ type: Output }],
        filterChange: [{ type: Output }],
        rowClick: [{ type: Output }],
        rowDblClick: [{ type: Output }]
    };
    __decorate([
        InputNumber(),
        __metadata("design:type", Object)
    ], STComponent.prototype, "ps", void 0);
    __decorate([
        InputNumber(),
        __metadata("design:type", Object)
    ], STComponent.prototype, "pi", void 0);
    __decorate([
        InputNumber(),
        __metadata("design:type", Object)
    ], STComponent.prototype, "total", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], STComponent.prototype, "loading", void 0);
    __decorate([
        InputNumber(),
        __metadata("design:type", Object)
    ], STComponent.prototype, "loadingDelay", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], STComponent.prototype, "bordered", void 0);
    __decorate([
        InputNumber(),
        __metadata("design:type", Object)
    ], STComponent.prototype, "rowClickTime", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Boolean)
    ], STComponent.prototype, "responsiveHideHeaderFooter", void 0);
    return STComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var COMPONENTS = [STComponent, STRowDirective];
var STModule = /** @class */ (function () {
    function STModule() {
    }
    /**
     * @return {?}
     */
    STModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: STModule, providers: [STConfig] };
    };
    STModule.decorators = [
        { type: NgModule, args: [{
                    schemas: [NO_ERRORS_SCHEMA],
                    imports: [
                        CommonModule,
                        FormsModule,
                        DelonUtilModule,
                        DelonACLModule,
                        NgZorroAntdModule,
                    ],
                    declarations: __spread(COMPONENTS),
                    exports: __spread(COMPONENTS),
                },] }
    ];
    return STModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { STComponent, STRowDirective, STConfig, STModule, STColumnSource, STDataSource, STExport, STRowSource as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BkZWxvbi9hYmMvdGFibGUvdGFibGUtcm93LmRpcmVjdGl2ZS50cyIsIm5nOi8vQGRlbG9uL2FiYy90YWJsZS90YWJsZS5jb25maWcudHMiLCJuZzovL0BkZWxvbi9hYmMvdGFibGUvdGFibGUtY29sdW1uLXNvdXJjZS50cyIsIm5nOi8vQGRlbG9uL2FiYy90YWJsZS90YWJsZS1kYXRhLXNvdXJjZS50cyIsIm5nOi8vQGRlbG9uL2FiYy90YWJsZS90YWJsZS1leHBvcnQudHMiLCJuZzovL0BkZWxvbi9hYmMvdGFibGUvdGFibGUuY29tcG9uZW50LnRzIiwibmc6Ly9AZGVsb24vYWJjL3RhYmxlL3RhYmxlLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBUZW1wbGF0ZVJlZixcbiAgT25Jbml0LFxuICBJbmplY3RhYmxlLFxuICBIb3N0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNUUm93U291cmNlIHtcbiAgcHJpdmF0ZSB0aXRsZXM6IHsgW2tleTogc3RyaW5nXTogVGVtcGxhdGVSZWY8YW55PiB9ID0ge307XG4gIHByaXZhdGUgcm93czogeyBba2V5OiBzdHJpbmddOiBUZW1wbGF0ZVJlZjxhbnk+IH0gPSB7fTtcblxuICBhZGQodHlwZTogc3RyaW5nLCBwYXRoOiBzdHJpbmcsIHJlZjogVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIHRoaXNbdHlwZSA9PT0gJ3RpdGxlJyA/ICd0aXRsZXMnIDogJ3Jvd3MnXVtwYXRoXSA9IHJlZjtcbiAgfVxuXG4gIGdldFRpdGxlKHBhdGg6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnRpdGxlc1twYXRoXTtcbiAgfVxuXG4gIGdldFJvdyhwYXRoOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5yb3dzW3BhdGhdO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tzdC1yb3ddJyB9KVxuZXhwb3J0IGNsYXNzIFNUUm93RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCdzdC1yb3cnKVxuICBpZDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHR5cGU6ICd0aXRsZSc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWY6IFRlbXBsYXRlUmVmPGFueT4sXG4gICAgQEhvc3QoKSBwcml2YXRlIHNvdXJjZTogU1RSb3dTb3VyY2UsXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNvdXJjZS5hZGQodGhpcy50eXBlLCB0aGlzLmlkLCB0aGlzLnJlZik7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIFNUTXVsdGlTb3J0LFxuICBTVFJlcSxcbiAgU1RSZXMsXG4gIFNUUGFnZSxcbiAgU1RDb2x1bW5CdXR0b25Nb2RhbENvbmZpZyxcbiAgU1RDb2x1bW5CdXR0b25EcmF3ZXJDb25maWcsXG4gIFNUSWNvbixcbn0gZnJvbSAnLi90YWJsZS5pbnRlcmZhY2VzJztcblxuZXhwb3J0IGNsYXNzIFNUQ29uZmlnIHtcbiAgLyoqXG4gICAqIMOowrXCt8OlwqfCi8OpwqHCtcOnwqDCgcOvwrzCjMOpwrvCmMOowq7CpMOkwrjCusOvwrzCmmAxYFxuICAgKi9cbiAgcGk/OiBudW1iZXI7XG4gIC8qKlxuICAgKiDDpsKvwo/DqcKhwrXDpsKVwrDDqcKHwo/Dr8K8wozDpcK9wpPDqMKuwr7Dp8K9wq7DpMK4wrogYDBgIMOowqHCqMOnwqTCusOkwrjCjcOlwojChsOpwqHCtcOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmAxMGBcbiAgICovXG4gIHBzPzogbnVtYmVyO1xuICAvKipcbiAgICogw6bCmMKvw6XCkMKmw6bCmMK+w6fCpMK6w6jCvsK5w6bCocKGXG4gICAqL1xuICBib3JkZXJlZD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiB0YWJsZcOlwqTCp8OlwrDCj1xuICAgKi9cbiAgc2l6ZT86ICdzbWFsbCcgfCAnbWlkZGxlJyB8ICdkZWZhdWx0JyA9ICdkZWZhdWx0JztcbiAgLyoqXG4gICAqIMOmwpjCr8OlwpDCpsOpwprCkMOowpfCj8OlwqTCtMOlwpLCjMOlwrDCvsOvwrzCjMOlwr3Ck8OlwrDCj8OlwrHCj8OlwrnClcOkwrjCi8OmwonCjcOmwpjCvsOnwqTCusOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmBmYWxzZWBcbiAgICovXG4gIHJlc3BvbnNpdmVIaWRlSGVhZGVyRm9vdGVyPyA9IGZhbHNlO1xuICAvKiogw6jCr8K3w6bCscKCw6TCvcKTw6nChcKNw6fCvcKuICovXG4gIHJlcT86IFNUUmVxID0ge1xuICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgYWxsSW5Cb2R5OiBmYWxzZSxcbiAgICByZU5hbWU6IHsgcGk6ICdwaScsIHBzOiAncHMnIH0sXG4gIH07XG4gIC8qKiDDqMK/wpTDpcKbwp7DpMK9wpPDqcKFwo3Dp8K9wq4gKi9cbiAgcmVzPzogU1RSZXMgPSB7XG4gICAgcmVOYW1lOiB7IGxpc3Q6IFsnbGlzdCddLCB0b3RhbDogWyd0b3RhbCddIH0sXG4gIH07XG4gIC8qKiDDqMK/wpTDpcKbwp7DpMK9wpPDqcKFwo3Dp8K9wq4gKi9cbiAgcGFnZT86IFNUUGFnZSA9IHtcbiAgICBmcm9udDogdHJ1ZSxcbiAgICB6ZXJvSW5kZXhlZDogZmFsc2UsXG4gICAgcGxhY2VtZW50OiAncmlnaHQnLFxuICAgIHNob3c6IHRydWUsXG4gICAgc2hvd1NpemU6IGZhbHNlLFxuICAgIHBhZ2VTaXplczogWzEwLCAyMCwgMzAsIDQwLCA1MF0sXG4gICAgc2hvd1F1aWNrSnVtcGVyOiBmYWxzZSxcbiAgICB0b3RhbDogdHJ1ZSxcbiAgICBpbmRleFJlc2V0OiB0cnVlLFxuICAgIHRvVG9wOiB0cnVlLFxuICAgIHRvVG9wT2Zmc2V0OiAxMDAsXG4gIH07XG4gIC8qKlxuICAgKiDDqcKHwo3DpcKRwr3DpcKQwo3DpsKOwpLDpcK6wo/DpcKAwrzDr8K8woxgY29sdW1uc2Agw6fCmsKEw6nCh8KNw6XCkcK9w6XCkMKNw6nCq8KYw6TCusKOw6XCscKew6bCgMKnXG4gICAqL1xuICBzb3J0UmVOYW1lPzogeyBhc2NlbmQ/OiBzdHJpbmc7IGRlc2NlbmQ/OiBzdHJpbmcgfTtcbiAgLyoqXG4gICAqIMOmwpjCr8OlwpDCpsOlwqTCmsOmwo7CksOlwrrCj8OvwrzCjMOlwr3CkyBgc29ydGAgw6XCpMKaw6TCuMKqw6fCm8K4w6XCkMKMw6XCgMK8w6bCl8K2w6jCh8Kqw6XCisKow6XCkMKIw6XCucK2w6/CvMKMw6XCu8K6w6jCrsKuw6XCkMKOw6fCq8Kvw6bClMKvw6bCjMKBw6bCl8K2w6TCvcK/w6fClMKoXG4gICAqL1xuICBtdWx0aVNvcnQ/OiBib29sZWFuIHwgU1RNdWx0aVNvcnQgPSBmYWxzZTtcbiAgLyoqXG4gICAqIMOmwozCicOpwpLCrsOmwqjCocOmwoDCgcOmwqHChsOpwoXCjcOnwr3CrlxuICAgKi9cbiAgbW9kYWw/OiBTVENvbHVtbkJ1dHRvbk1vZGFsQ29uZmlnID0ge1xuICAgIHBhcmFtc05hbWU6ICdyZWNvcmQnLFxuICAgIHNpemU6ICdsZycsXG4gICAgZXhhY3Q6IHRydWUsXG4gIH07XG4gIC8qKlxuICAgKiDDpsKMwonDqcKSwq7DpsKKwr3DpcKxwonDqcKFwo3Dp8K9wq5cbiAgICovXG4gIGRyYXdlcj86IFNUQ29sdW1uQnV0dG9uRHJhd2VyQ29uZmlnID0ge1xuICAgIHBhcmFtc05hbWU6ICdyZWNvcmQnLFxuICAgIHNpemU6ICdtZCcsXG4gICAgZm9vdGVyOiB0cnVlLFxuICAgIGZvb3RlckhlaWdodDogNTUsXG4gIH07XG4gIC8qKlxuICAgKiDDpsKwwpTDpsKzwqHDp8Khwq7DqMKuwqTDpsKhwobDpcKGwoXDpcKuwrlcbiAgICovXG4gIHBvcFRpdGxlPyA9ICfDp8Khwq7DqMKuwqTDpcKIwqDDqcKZwqTDpcKQwpfDr8K8wp8nO1xuICAvKipcbiAgICogw6jCocKMw6XCjcKVw6XCh8K7w6XCpMKaw6XCsMKRw6bCl8K2w6nClcK/w6TCucKLw6fCscK7w6TCuMK6w6XCj8KMw6XCh8K7w6/CvMKIw6XCjcKVw6TCvcKNw6/CvMKaw6bCr8Krw6fCp8KSw6/CvMKJw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYDIwMGBcbiAgICovXG4gIHJvd0NsaWNrVGltZT8gPSAyMDA7XG4gIC8qKlxuICAgKiDDqMK/wofDpsK7wqTDpsKMwonDqcKSwq7Dp8Khwq7DqMKuwqTDpsKWwofDpsKcwqzDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgw6fCocKuw6jCrsKkYFxuICAgKi9cbiAgZmlsdGVyQ29uZmlybVRleHQ/ID0gJ8OnwqHCrsOowq7CpCc7XG4gIC8qKlxuICAgKiDDqMK/wofDpsK7wqTDpsKMwonDqcKSwq7DqcKHwo3Dp8K9wq7DpsKWwofDpsKcwqzDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgw6nCh8KNw6fCvcKuYFxuICAgKi9cbiAgZmlsdGVyQ2xlYXJUZXh0PyA9ICfDqcKHwo3Dp8K9wq4nO1xuICAvKipcbiAgICogw6bCjMKJw6nCksKuw6XCm8K+w6bCoMKHXG4gICAqL1xuICBidG5JY29uPzogU1RJY29uID0ge1xuICAgIHR5cGU6ICcnLFxuICAgIHRoZW1lOiAnb3V0bGluZScsXG4gICAgc3BpbjogZmFsc2UsXG4gIH07XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgSW5qZWN0LCBIb3N0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBQ0xTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL2FjbCc7XG5pbXBvcnQgeyBBTEFJTl9JMThOX1RPS0VOLCBBbGFpbkkxOE5TZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IGRlZXBDb3B5IH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5pbXBvcnQge1xuICBTVENvbHVtbixcbiAgU1RDb2x1bW5CdXR0b24sXG4gIFNUQ29sdW1uU29ydCxcbiAgU1RDb2x1bW5GaWx0ZXIsXG59IGZyb20gJy4vdGFibGUuaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBTVFJvd1NvdXJjZSB9IGZyb20gJy4vdGFibGUtcm93LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBTVENvbmZpZyB9IGZyb20gJy4vdGFibGUuY29uZmlnJztcblxuZXhwb3J0IGludGVyZmFjZSBTVFNvcnRNYXAgZXh0ZW5kcyBTVENvbHVtblNvcnQge1xuICAvKiogw6bCmMKvw6XCkMKmw6XCkMKvw6fClMKow6bCjsKSw6XCusKPICovXG4gIGVuYWJsZWQ/OiBib29sZWFuO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU1RDb2x1bW5Tb3VyY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBASG9zdCgpIHByaXZhdGUgcm93U291cmNlOiBTVFJvd1NvdXJjZSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGFjbDogQUNMU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoQUxBSU5fSTE4Tl9UT0tFTilcbiAgICBwcml2YXRlIGkxOG5TcnY6IEFsYWluSTE4TlNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjb2c6IFNUQ29uZmlnLFxuICApIHt9XG5cbiAgcHJpdmF0ZSBidG5Db2VyY2UobGlzdDogU1RDb2x1bW5CdXR0b25bXSk6IFNUQ29sdW1uQnV0dG9uW10ge1xuICAgIGlmICghbGlzdCkgcmV0dXJuIFtdO1xuICAgIGNvbnN0IHJldDogU1RDb2x1bW5CdXR0b25bXSA9IFtdO1xuICAgIGNvbnN0IHsgbW9kYWwsIGRyYXdlciwgcG9wVGl0bGUsIGJ0bkljb24gfSA9IHRoaXMuY29nO1xuXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGxpc3QpIHtcbiAgICAgIGlmICh0aGlzLmFjbCAmJiBpdGVtLmFjbCAmJiAhdGhpcy5hY2wuY2FuKGl0ZW0uYWNsKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ21vZGFsJyB8fCBpdGVtLnR5cGUgPT09ICdzdGF0aWMnKSB7XG4gICAgICAgIC8vIGNvbXBhdGlibGVcbiAgICAgICAgaWYgKGl0ZW0uY29tcG9uZW50ICE9IG51bGwpIHtcbiAgICAgICAgICBpdGVtLm1vZGFsID0ge1xuICAgICAgICAgICAgY29tcG9uZW50OiBpdGVtLmNvbXBvbmVudCxcbiAgICAgICAgICAgIHBhcmFtczogaXRlbS5wYXJhbXMsXG4gICAgICAgICAgICBwYXJhbXNOYW1lOiBpdGVtLnBhcmFtTmFtZSB8fCBtb2RhbC5wYXJhbXNOYW1lLFxuICAgICAgICAgICAgc2l6ZTogaXRlbS5zaXplIHx8IG1vZGFsLnNpemUsXG4gICAgICAgICAgICBtb2RhbE9wdGlvbnM6IGl0ZW0ubW9kYWxPcHRpb25zIHx8IG1vZGFsLm1vZGFsT3B0aW9ucyxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChpdGVtLm1vZGFsID09IG51bGwgfHwgaXRlbS5tb2RhbC5jb21wb25lbnQgPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihgW3N0XSBTaG91bGQgc3BlY2lmeSBtb2RhbCBwYXJhbWV0ZXJgKTtcbiAgICAgICAgICBpdGVtLnR5cGUgPSAnbm9uZSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbS5tb2RhbCA9IE9iamVjdC5hc3NpZ24oe30sIG1vZGFsLCBpdGVtLm1vZGFsKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbS50eXBlID09PSAnZHJhd2VyJykge1xuICAgICAgICBpZiAoaXRlbS5kcmF3ZXIgPT0gbnVsbCB8fCBpdGVtLmRyYXdlci5jb21wb25lbnQgPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihgW3N0XSBTaG91bGQgc3BlY2lmeSBkcmF3ZXIgcGFyYW1ldGVyYCk7XG4gICAgICAgICAgaXRlbS50eXBlID0gJ25vbmUnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW0uZHJhd2VyID0gT2JqZWN0LmFzc2lnbih7fSwgZHJhd2VyLCBpdGVtLmRyYXdlcik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ2RlbCcgJiYgdHlwZW9mIGl0ZW0ucG9wID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBpdGVtLnBvcCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtLnBvcCA9PT0gdHJ1ZSkge1xuICAgICAgICBpdGVtLl90eXBlID0gJ3BvcCc7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbS5wb3BUaXRsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBpdGVtLnBvcFRpdGxlID0gcG9wVGl0bGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChpdGVtLmljb24pIHtcbiAgICAgICAgaXRlbS5fdHlwZSA9ICdpY29uJztcbiAgICAgICAgaXRlbS5pY29uID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICB7fSxcbiAgICAgICAgICBidG5JY29uLFxuICAgICAgICAgIHR5cGVvZiBpdGVtLmljb24gPT09ICdzdHJpbmcnID8geyB0eXBlOiBpdGVtLmljb24gfSA6IGl0ZW0uaWNvbixcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtLmNoaWxkcmVuICYmIGl0ZW0uY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICBpdGVtLl90eXBlID0gJ3N1Yic7XG4gICAgICAgIGl0ZW0uY2hpbGRyZW4gPSB0aGlzLmJ0bkNvZXJjZShpdGVtLmNoaWxkcmVuKTtcbiAgICAgIH1cbiAgICAgIGlmICghaXRlbS5fdHlwZSkge1xuICAgICAgICBpdGVtLl90eXBlID0gJyc7XG4gICAgICB9XG5cbiAgICAgIC8vIGkxOG5cbiAgICAgIGlmIChpdGVtLmkxOG4gJiYgdGhpcy5pMThuU3J2KSB7XG4gICAgICAgIGl0ZW0udGV4dCA9IHRoaXMuaTE4blNydi5mYW55aShpdGVtLmkxOG4pO1xuICAgICAgfVxuXG4gICAgICByZXQucHVzaChpdGVtKTtcbiAgICB9XG4gICAgdGhpcy5idG5Db2VyY2VJZihyZXQpO1xuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBwcml2YXRlIGJ0bkNvZXJjZUlmKGxpc3Q6IFNUQ29sdW1uQnV0dG9uW10pIHtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgbGlzdCkge1xuICAgICAgaWYgKCFpdGVtLmlpZikgaXRlbS5paWYgPSAoKSA9PiB0cnVlO1xuICAgICAgaWYgKCFpdGVtLmNoaWxkcmVuKSB7XG4gICAgICAgIGl0ZW0uY2hpbGRyZW4gPSBbXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYnRuQ29lcmNlSWYoaXRlbS5jaGlsZHJlbik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBmaXhlZENvZXJjZShsaXN0OiBTVENvbHVtbltdKSB7XG4gICAgY29uc3QgY291bnRSZWR1Y2UgPSAoYTogbnVtYmVyLCBiOiBTVENvbHVtbikgPT5cbiAgICAgIGEgKyArYi53aWR0aC50b1N0cmluZygpLnJlcGxhY2UoJ3B4JywgJycpO1xuICAgIC8vIGxlZnQgd2lkdGhcbiAgICBsaXN0XG4gICAgICAuZmlsdGVyKHcgPT4gdy5maXhlZCAmJiB3LmZpeGVkID09PSAnbGVmdCcgJiYgdy53aWR0aClcbiAgICAgIC5mb3JFYWNoKFxuICAgICAgICAoaXRlbSwgaWR4KSA9PlxuICAgICAgICAgIChpdGVtLl9sZWZ0ID0gbGlzdC5zbGljZSgwLCBpZHgpLnJlZHVjZShjb3VudFJlZHVjZSwgMCkgKyAncHgnKSxcbiAgICAgICk7XG4gICAgLy8gcmlnaHQgd2lkdGhcbiAgICBsaXN0XG4gICAgICAuZmlsdGVyKHcgPT4gdy5maXhlZCAmJiB3LmZpeGVkID09PSAncmlnaHQnICYmIHcud2lkdGgpXG4gICAgICAucmV2ZXJzZSgpXG4gICAgICAuZm9yRWFjaChcbiAgICAgICAgKGl0ZW0sIGlkeCkgPT5cbiAgICAgICAgICAoaXRlbS5fcmlnaHQgPVxuICAgICAgICAgICAgKGlkeCA+IDAgPyBsaXN0LnNsaWNlKC1pZHgpLnJlZHVjZShjb3VudFJlZHVjZSwgMCkgOiAwKSArICdweCcpLFxuICAgICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgc29ydENvZXJjZShpdGVtOiBTVENvbHVtbik6IFNUU29ydE1hcCB7XG4gICAgLy8gY29tcGF0aWJsZVxuICAgIGlmIChpdGVtLnNvcnRlciAmJiB0eXBlb2YgaXRlbS5zb3J0ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgIGRlZmF1bHQ6IGl0ZW0uc29ydCBhcyBhbnksXG4gICAgICAgIGNvbXBhcmU6IGl0ZW0uc29ydGVyLFxuICAgICAgICBrZXk6IGl0ZW0uc29ydEtleSB8fCBpdGVtLmluZGV4S2V5LFxuICAgICAgICByZU5hbWU6IGl0ZW0uc29ydFJlTmFtZSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBpdGVtLnNvcnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4geyBlbmFibGVkOiBmYWxzZSB9O1xuICAgIH1cblxuICAgIGxldCByZXM6IFNUU29ydE1hcCA9IHt9O1xuXG4gICAgaWYgKHR5cGVvZiBpdGVtLnNvcnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXMua2V5ID0gaXRlbS5zb3J0O1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGl0ZW0uc29ydCAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICByZXMgPSBpdGVtLnNvcnQ7XG4gICAgfVxuXG4gICAgaWYgKCFyZXMua2V5KSB7XG4gICAgICByZXMua2V5ID0gaXRlbS5pbmRleEtleTtcbiAgICB9XG5cbiAgICByZXMuZW5hYmxlZCA9IHRydWU7XG5cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgcHJpdmF0ZSBmaWx0ZXJDb2VyY2UoaXRlbTogU1RDb2x1bW4pOiBTVENvbHVtbkZpbHRlciB7XG4gICAgbGV0IHJlczogU1RDb2x1bW5GaWx0ZXIgPSBudWxsO1xuICAgIC8vIGNvbXBhdGlibGVcbiAgICBpZiAoaXRlbS5maWx0ZXJzICYmIGl0ZW0uZmlsdGVycy5sZW5ndGggPiAwKSB7XG4gICAgICByZXMgPSB7XG4gICAgICAgIGNvbmZpcm1UZXh0OiBpdGVtLmZpbHRlckNvbmZpcm1UZXh0LFxuICAgICAgICBjbGVhclRleHQ6IGl0ZW0uZmlsdGVyQ2xlYXJUZXh0LFxuICAgICAgICBkZWZhdWx0OiBpdGVtLmZpbHRlcmVkLFxuICAgICAgICBmbjogaXRlbS5maWx0ZXIgYXMgYW55LFxuICAgICAgICBpY29uOiBpdGVtLmZpbHRlckljb24sXG4gICAgICAgIGtleTogaXRlbS5maWx0ZXJLZXkgfHwgaXRlbS5pbmRleEtleSxcbiAgICAgICAgbWVudXM6IGl0ZW0uZmlsdGVycyxcbiAgICAgICAgbXVsdGlwbGU6IGl0ZW0uZmlsdGVyTXVsdGlwbGUsXG4gICAgICAgIHJlTmFtZTogaXRlbS5maWx0ZXJSZU5hbWUsXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXMgPSBpdGVtLmZpbHRlcjtcbiAgICB9XG5cbiAgICBpZiAocmVzID09IG51bGwgfHwgcmVzLm1lbnVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiByZXMubXVsdGlwbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXMubXVsdGlwbGUgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoIXJlcy5jb25maXJtVGV4dCkge1xuICAgICAgcmVzLmNvbmZpcm1UZXh0ID0gdGhpcy5jb2cuZmlsdGVyQ29uZmlybVRleHQ7XG4gICAgfVxuICAgIGlmICghcmVzLmNsZWFyVGV4dCkge1xuICAgICAgcmVzLmNsZWFyVGV4dCA9IHRoaXMuY29nLmZpbHRlckNsZWFyVGV4dDtcbiAgICB9XG4gICAgaWYgKCFyZXMuaWNvbikge1xuICAgICAgcmVzLmljb24gPSBgZmlsdGVyYDtcbiAgICB9XG4gICAgaWYgKCFyZXMua2V5KSB7XG4gICAgICByZXMua2V5ID0gaXRlbS5pbmRleEtleTtcbiAgICB9XG5cbiAgICByZXMuZGVmYXVsdCA9IHJlcy5tZW51cy5maW5kSW5kZXgodyA9PiB3LmNoZWNrZWQpICE9PSAtMTtcblxuICAgIGlmICh0aGlzLmFjbCkge1xuICAgICAgcmVzLm1lbnVzID0gcmVzLm1lbnVzLmZpbHRlcih3ID0+IHRoaXMuYWNsLmNhbih3LmFjbCkpO1xuICAgIH1cblxuICAgIGlmIChyZXMubWVudXMubGVuZ3RoIDw9IDApIHtcbiAgICAgIHJlcyA9IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIHByaXZhdGUgcmVzdG9yZVJlbmRlcihpdGVtOiBTVENvbHVtbikge1xuICAgIGlmIChpdGVtLnJlbmRlclRpdGxlKSB7XG4gICAgICBpdGVtLl9fcmVuZGVyVGl0bGUgPSB0aGlzLnJvd1NvdXJjZS5nZXRUaXRsZShpdGVtLnJlbmRlclRpdGxlKTtcbiAgICB9XG4gICAgaWYgKGl0ZW0ucmVuZGVyKSB7XG4gICAgICBpdGVtLl9fcmVuZGVyID0gdGhpcy5yb3dTb3VyY2UuZ2V0Um93KGl0ZW0ucmVuZGVyKTtcbiAgICB9XG4gIH1cblxuICBwcm9jZXNzKGxpc3Q6IFNUQ29sdW1uW10pOiBTVENvbHVtbltdIHtcbiAgICBpZiAoIWxpc3QgfHwgbGlzdC5sZW5ndGggPT09IDApXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFtzdF06IHRoZSBjb2x1bW5zIHByb3BlcnR5IG11c2UgYmUgZGVmaW5lIWApO1xuXG4gICAgbGV0IGNoZWNrYm94Q291bnQgPSAwO1xuICAgIGxldCByYWRpb0NvdW50ID0gMDtcbiAgICBjb25zdCBjb2x1bW5zOiBTVENvbHVtbltdID0gW107XG4gICAgY29uc3QgY29weUNvbHVtZW5zID0gZGVlcENvcHkobGlzdCkgYXMgU1RDb2x1bW5bXTtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgY29weUNvbHVtZW5zKSB7XG4gICAgICBpZiAodGhpcy5hY2wgJiYgaXRlbS5hY2wgJiYgIXRoaXMuYWNsLmNhbihpdGVtLmFjbCkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICAvLyBpbmRleFxuICAgICAgaWYgKGl0ZW0uaW5kZXgpIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGl0ZW0uaW5kZXgpKSB7XG4gICAgICAgICAgaXRlbS5pbmRleCA9IGl0ZW0uaW5kZXguc3BsaXQoJy4nKTtcbiAgICAgICAgfVxuICAgICAgICBpdGVtLmluZGV4S2V5ID0gaXRlbS5pbmRleC5qb2luKCcuJyk7XG4gICAgICB9XG4gICAgICAvLyB0aXRsZVxuICAgICAgaWYgKGl0ZW0uaTE4biAmJiB0aGlzLmkxOG5TcnYpIHtcbiAgICAgICAgaXRlbS50aXRsZSA9IHRoaXMuaTE4blNydi5mYW55aShpdGVtLmkxOG4pO1xuICAgICAgfVxuICAgICAgLy8gY2hlY2tib3hcbiAgICAgIGlmIChpdGVtLnNlbGVjdGlvbnMgPT0gbnVsbCkge1xuICAgICAgICBpdGVtLnNlbGVjdGlvbnMgPSBbXTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgKytjaGVja2JveENvdW50O1xuICAgICAgICBpZiAoIWl0ZW0ud2lkdGgpIHtcbiAgICAgICAgICBpdGVtLndpZHRoID0gYCR7aXRlbS5zZWxlY3Rpb25zLmxlbmd0aCA+IDAgPyA2MiA6IDUwfXB4YDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuYWNsKSB7XG4gICAgICAgIGl0ZW0uc2VsZWN0aW9ucyA9IGl0ZW0uc2VsZWN0aW9ucy5maWx0ZXIodyA9PiB0aGlzLmFjbC5jYW4ody5hY2wpKTtcbiAgICAgIH1cbiAgICAgIC8vIHJhZGlvXG4gICAgICBpZiAoaXRlbS50eXBlID09PSAncmFkaW8nKSB7XG4gICAgICAgICsrcmFkaW9Db3VudDtcbiAgICAgICAgaXRlbS5zZWxlY3Rpb25zID0gW107XG4gICAgICAgIGlmICghaXRlbS53aWR0aCkge1xuICAgICAgICAgIGl0ZW0ud2lkdGggPSAnNTBweCc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIHR5cGVzXG4gICAgICBpZiAoaXRlbS50eXBlID09PSAneW4nKSB7XG4gICAgICAgIGl0ZW0ueW4gPSBPYmplY3QuYXNzaWduKHsgdHJ1dGg6IHRydWUgfSwgaXRlbS55bik7XG4gICAgICAgIC8vIGNvbXBhdGlibGVcbiAgICAgICAgaWYgKGl0ZW0ueW5UcnV0aCAhPSBudWxsKSBpdGVtLnluLnRydXRoID0gaXRlbS55blRydXRoO1xuICAgICAgICBpZiAoaXRlbS55blllcyAhPSBudWxsKSBpdGVtLnluLnllcyA9IGl0ZW0ueW5ZZXM7XG4gICAgICAgIGlmIChpdGVtLnluTm8gIT0gbnVsbCkgaXRlbS55bi5ubyA9IGl0ZW0ueW5ObztcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgKGl0ZW0udHlwZSA9PT0gJ2xpbmsnICYmIHR5cGVvZiBpdGVtLmNsaWNrICE9PSAnZnVuY3Rpb24nKSB8fFxuICAgICAgICAoaXRlbS50eXBlID09PSAnYmFkZ2UnICYmIGl0ZW0uYmFkZ2UgPT0gbnVsbCkgfHxcbiAgICAgICAgKGl0ZW0udHlwZSA9PT0gJ3RhZycgJiYgaXRlbS50YWcgPT0gbnVsbClcbiAgICAgICkge1xuICAgICAgICAoaXRlbSBhcyBhbnkpLnR5cGUgPSAnJztcbiAgICAgIH1cbiAgICAgIC8vIGNsYXNzTmFtZVxuICAgICAgaWYgKCFpdGVtLmNsYXNzTmFtZSkge1xuICAgICAgICBpdGVtLmNsYXNzTmFtZSA9IHtcbiAgICAgICAgICBudW1iZXI6ICd0ZXh0LXJpZ2h0JyxcbiAgICAgICAgICBjdXJyZW5jeTogJ3RleHQtcmlnaHQnLFxuICAgICAgICAgIGRhdGU6ICd0ZXh0LWNlbnRlcicsXG4gICAgICAgIH1baXRlbS50eXBlXTtcbiAgICAgIH1cblxuICAgICAgLy8gc29ydGVyXG4gICAgICBpdGVtLl9zb3J0ID0gdGhpcy5zb3J0Q29lcmNlKGl0ZW0pO1xuICAgICAgLy8gZmlsdGVyXG4gICAgICBpdGVtLmZpbHRlciA9IHRoaXMuZmlsdGVyQ29lcmNlKGl0ZW0pO1xuICAgICAgLy8gYnV0dG9uc1xuICAgICAgaXRlbS5idXR0b25zID0gdGhpcy5idG5Db2VyY2UoaXRlbS5idXR0b25zKTtcbiAgICAgIC8vIHJlc3RvcmUgY3VzdG9tIHJvd1xuICAgICAgdGhpcy5yZXN0b3JlUmVuZGVyKGl0ZW0pO1xuXG4gICAgICBjb2x1bW5zLnB1c2goaXRlbSk7XG4gICAgfVxuICAgIGlmIChjaGVja2JveENvdW50ID4gMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBbc3RdOiBqdXN0IG9ubHkgb25lIGNvbHVtbiBjaGVja2JveGApO1xuICAgIH1cbiAgICBpZiAocmFkaW9Db3VudCA+IDEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgW3N0XToganVzdCBvbmx5IG9uZSBjb2x1bW4gcmFkaW9gKTtcbiAgICB9XG5cbiAgICB0aGlzLmZpeGVkQ29lcmNlKGNvbHVtbnMpO1xuXG4gICAgcmV0dXJuIGNvbHVtbnM7XG4gIH1cblxuICByZXN0b3JlQWxsUmVuZGVyKGNvbHVtbnM6IFNUQ29sdW1uW10pIHtcbiAgICBjb2x1bW5zLmZvckVhY2goaSA9PiB0aGlzLnJlc3RvcmVSZW5kZXIoaSkpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBIb3N0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEZWNpbWFsUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IGRlZXBHZXQgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBDTkN1cnJlbmN5UGlwZSwgRGF0ZVBpcGUsIFlOUGlwZSwgX0h0dHBDbGllbnQgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuXG5pbXBvcnQge1xuICBTVERhdGEsXG4gIFNUUGFnZSxcbiAgU1RSZXEsXG4gIFNUUmVzLFxuICBTVENvbHVtbixcbiAgU1RNdWx0aVNvcnQsXG59IGZyb20gJy4vdGFibGUuaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBTVFNvcnRNYXAgfSBmcm9tICcuL3RhYmxlLWNvbHVtbi1zb3VyY2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNURGF0YVNvdXJjZU9wdGlvbnMge1xuICBwaT86IG51bWJlcjtcbiAgcHM/OiBudW1iZXI7XG4gIGRhdGE/OiBzdHJpbmcgfCBTVERhdGFbXSB8IE9ic2VydmFibGU8U1REYXRhW10+O1xuICB0b3RhbD86IG51bWJlcjtcbiAgcmVxPzogU1RSZXE7XG4gIHJlcz86IFNUUmVzO1xuICBwYWdlPzogU1RQYWdlO1xuICBjb2x1bW5zPzogU1RDb2x1bW5bXTtcbiAgbXVsdGlTb3J0PzogU1RNdWx0aVNvcnQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1REYXRhU291cmNlUmVzdWx0IHtcbiAgLyoqIMOmwpjCr8OlwpDCpsOpwpzCgMOowqbCgcOmwpjCvsOnwqTCusOlwojChsOpwqHCtcOlwpnCqCAqL1xuICBwYWdlU2hvdz86IGJvb2xlYW47XG4gIC8qKiDDpsKWwrAgYHBpYMOvwrzCjMOowovCpcOowr/ClMOlwpvCniBgdW5kZWZpbmVkYCDDqMKhwqjDp8KkwrrDp8KUwqjDpsKIwrfDpcKPwpfDpsKOwqcgKi9cbiAgcGk/OiBudW1iZXI7XG4gIC8qKiDDpsKWwrAgYHRvdGFsYMOvwrzCjMOowovCpcOowr/ClMOlwpvCniBgdW5kZWZpbmVkYCDDqMKhwqjDp8KkwrrDp8KUwqjDpsKIwrfDpcKPwpfDpsKOwqcgKi9cbiAgdG90YWw/OiBudW1iZXI7XG4gIC8qKiDDpsKVwrDDpsKNwq4gKi9cbiAgbGlzdD86IFNURGF0YVtdO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU1REYXRhU291cmNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwOiBfSHR0cENsaWVudCxcbiAgICBASG9zdCgpIHByaXZhdGUgY3VycmVudHk6IENOQ3VycmVuY3lQaXBlLFxuICAgIEBIb3N0KCkgcHJpdmF0ZSBkYXRlOiBEYXRlUGlwZSxcbiAgICBASG9zdCgpIHByaXZhdGUgeW46IFlOUGlwZSxcbiAgICBASG9zdCgpIHByaXZhdGUgbnVtYmVyOiBEZWNpbWFsUGlwZSxcbiAgICBwcml2YXRlIGRvbTogRG9tU2FuaXRpemVyXG4gICkge31cblxuICBwcm9jZXNzKG9wdGlvbnM6IFNURGF0YVNvdXJjZU9wdGlvbnMpOiBQcm9taXNlPFNURGF0YVNvdXJjZVJlc3VsdD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZVByb21pc2UsIHJlamVjdFByb21pc2UpID0+IHtcbiAgICAgIGxldCBkYXRhJDogT2JzZXJ2YWJsZTxTVERhdGFbXT47XG4gICAgICBsZXQgaXNSZW1vdGUgPSBmYWxzZTtcbiAgICAgIGNvbnN0IHsgZGF0YSwgcmVzLCB0b3RhbCwgcGFnZSwgcGksIHBzLCBjb2x1bW5zIH0gPSBvcHRpb25zO1xuICAgICAgbGV0IHJldFRvdGFsOiBudW1iZXI7XG4gICAgICBsZXQgcmV0TGlzdDogU1REYXRhW107XG4gICAgICBsZXQgcmV0UGk6IG51bWJlcjtcblxuICAgICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgICBpc1JlbW90ZSA9IHRydWU7XG4gICAgICAgIGRhdGEkID0gdGhpcy5nZXRCeUh0dHAoZGF0YSwgb3B0aW9ucykucGlwZShcbiAgICAgICAgICBtYXAoKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICAgICAgICAvLyBsaXN0XG4gICAgICAgICAgICBsZXQgcmV0ID0gZGVlcEdldChyZXN1bHQsIHJlcy5yZU5hbWUubGlzdCBhcyBzdHJpbmdbXSwgW10pO1xuICAgICAgICAgICAgaWYgKHJldCA9PSBudWxsIHx8ICFBcnJheS5pc0FycmF5KHJldCkpIHtcbiAgICAgICAgICAgICAgcmV0ID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB0b3RhbFxuICAgICAgICAgICAgY29uc3QgcmVzdWx0VG90YWwgPVxuICAgICAgICAgICAgICByZXMucmVOYW1lLnRvdGFsICYmXG4gICAgICAgICAgICAgIGRlZXBHZXQocmVzdWx0LCByZXMucmVOYW1lLnRvdGFsIGFzIHN0cmluZ1tdLCBudWxsKTtcbiAgICAgICAgICAgIHJldFRvdGFsID0gcmVzdWx0VG90YWwgPT0gbnVsbCA/IHRvdGFsIHx8IDAgOiArcmVzdWx0VG90YWw7XG4gICAgICAgICAgICByZXR1cm4gPFNURGF0YVtdPnJldDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVyciA9PiB7XG4gICAgICAgICAgICByZWplY3RQcm9taXNlKGVycik7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgICAgfSksXG4gICAgICAgICk7XG4gICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgZGF0YSQgPSBvZihkYXRhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGEgY29sZCBvYnNlcnZhYmxlXG4gICAgICAgIGRhdGEkID0gZGF0YTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc1JlbW90ZSkge1xuICAgICAgICBkYXRhJCA9IGRhdGEkLnBpcGUoXG4gICAgICAgICAgLy8gc29ydFxuICAgICAgICAgIG1hcCgocmVzdWx0OiBTVERhdGFbXSkgPT4ge1xuICAgICAgICAgICAgbGV0IGNvcHlSZXN1bHQgPSByZXN1bHQuc2xpY2UoMCk7XG4gICAgICAgICAgICBjb25zdCBzb3J0ZXJGbiA9IHRoaXMuZ2V0U29ydGVyRm4oY29sdW1ucyk7XG4gICAgICAgICAgICBpZiAoc29ydGVyRm4pIHtcbiAgICAgICAgICAgICAgY29weVJlc3VsdCA9IGNvcHlSZXN1bHQuc29ydChzb3J0ZXJGbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29weVJlc3VsdDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAvLyBmaWx0ZXJcbiAgICAgICAgICBtYXAoKHJlc3VsdDogU1REYXRhW10pID0+IHtcbiAgICAgICAgICAgIGNvbHVtbnMuZmlsdGVyKHcgPT4gdy5maWx0ZXIpLmZvckVhY2goYyA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IGMuZmlsdGVyLm1lbnVzLmZpbHRlcih3ID0+IHcuY2hlY2tlZCk7XG4gICAgICAgICAgICAgIGlmICh2YWx1ZXMubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgICAgICAgICAgIGNvbnN0IG9uRmlsdGVyID0gYy5maWx0ZXIuZm47XG4gICAgICAgICAgICAgIGlmICh0eXBlb2Ygb25GaWx0ZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFtzdF0gTXVzZSBwcm92aWRlIHRoZSBmbiBmdW5jdGlvbiBpbiBmaWx0ZXJgKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5maWx0ZXIocmVjb3JkID0+XG4gICAgICAgICAgICAgICAgdmFsdWVzLnNvbWUodiA9PiBvbkZpbHRlcih2LCByZWNvcmQpKSxcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAvLyBwYWdpbmdcbiAgICAgICAgICBtYXAoKHJlc3VsdDogU1REYXRhW10pID0+IHtcbiAgICAgICAgICAgIGlmIChwYWdlLmZyb250KSB7XG4gICAgICAgICAgICAgIGNvbnN0IG1heFBhZ2VJbmRleCA9IE1hdGguY2VpbChyZXN1bHQubGVuZ3RoIC8gcHMpO1xuICAgICAgICAgICAgICByZXRQaSA9IE1hdGgubWF4KDEsIHBpID4gbWF4UGFnZUluZGV4ID8gbWF4UGFnZUluZGV4IDogcGkpO1xuICAgICAgICAgICAgICByZXRUb3RhbCA9IHJlc3VsdC5sZW5ndGg7XG4gICAgICAgICAgICAgIGlmIChwYWdlLnNob3cgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LnNsaWNlKChyZXRQaSAtIDEpICogcHMsIHJldFBpICogcHMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgIH0pLFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICAvLyBwcmUtcHJvY2Vzc1xuICAgICAgaWYgKHR5cGVvZiByZXMucHJvY2VzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBkYXRhJCA9IGRhdGEkLnBpcGUobWFwKHJlc3VsdCA9PiByZXMucHJvY2VzcyhyZXN1bHQpKSk7XG4gICAgICB9XG4gICAgICAvLyBkYXRhIGFjY2VsZXJhdG9yXG4gICAgICBkYXRhJCA9IGRhdGEkLnBpcGUoXG4gICAgICAgIG1hcChyZXN1bHQgPT4ge1xuICAgICAgICAgIGZvciAoY29uc3QgaSBvZiByZXN1bHQpIHtcbiAgICAgICAgICAgIGkuX3ZhbHVlcyA9IGNvbHVtbnMubWFwKGMgPT4gdGhpcy5nZXQoaSwgYykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9KSxcbiAgICAgICk7XG5cbiAgICAgIGRhdGEkLmZvckVhY2goKHJlc3VsdDogU1REYXRhW10pID0+IChyZXRMaXN0ID0gcmVzdWx0KSkudGhlbigoKSA9PiB7XG4gICAgICAgIHJlc29sdmVQcm9taXNlKHtcbiAgICAgICAgICBwaTogcmV0UGksXG4gICAgICAgICAgdG90YWw6IHJldFRvdGFsLFxuICAgICAgICAgIGxpc3Q6IHJldExpc3QsXG4gICAgICAgICAgcGFnZVNob3c6XG4gICAgICAgICAgICB0eXBlb2YgcGFnZS5zaG93ID09PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICA/IChyZXRUb3RhbCB8fCB0b3RhbCkgPiBwc1xuICAgICAgICAgICAgICA6IHBhZ2Uuc2hvdyxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0KGl0ZW06IGFueSwgY29sOiBTVENvbHVtbikge1xuICAgIGlmIChjb2wuZm9ybWF0KSB7XG4gICAgICBjb25zdCBmb3JtYXRSZXMgPSBjb2wuZm9ybWF0KGl0ZW0sIGNvbCkgYXMgc3RyaW5nO1xuICAgICAgaWYgKH5mb3JtYXRSZXMuaW5kZXhPZignPCcpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRvbS5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChmb3JtYXRSZXMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZvcm1hdFJlcztcbiAgICB9XG5cbiAgICBjb25zdCB2YWx1ZSA9IGRlZXBHZXQoaXRlbSwgY29sLmluZGV4IGFzIHN0cmluZ1tdLCBjb2wuZGVmYXVsdCk7XG5cbiAgICBsZXQgcmV0ID0gdmFsdWU7XG4gICAgc3dpdGNoIChjb2wudHlwZSkge1xuICAgICAgY2FzZSAnaW1nJzpcbiAgICAgICAgcmV0ID0gdmFsdWUgPyBgPGltZyBzcmM9XCIke3ZhbHVlfVwiIGNsYXNzPVwiaW1nXCI+YCA6ICcnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgIHJldCA9IHRoaXMubnVtYmVyLnRyYW5zZm9ybSh2YWx1ZSwgY29sLm51bWJlckRpZ2l0cyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY3VycmVuY3knOlxuICAgICAgICByZXQgPSB0aGlzLmN1cnJlbnR5LnRyYW5zZm9ybSh2YWx1ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICAgIHJldCA9IHRoaXMuZGF0ZS50cmFuc2Zvcm0odmFsdWUsIGNvbC5kYXRlRm9ybWF0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd5bic6XG4gICAgICAgIHJldCA9IHRoaXMueW4udHJhbnNmb3JtKHZhbHVlID09PSBjb2wueW4udHJ1dGgsIGNvbC55bi55ZXMsIGNvbC55bi5ubyk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRCeUh0dHAoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgb3B0aW9uczogU1REYXRhU291cmNlT3B0aW9ucyxcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCB7IHJlcSwgcGFnZSwgcGksIHBzLCBtdWx0aVNvcnQsIGNvbHVtbnMgfSA9IG9wdGlvbnM7XG4gICAgY29uc3QgbWV0aG9kID0gKHJlcS5tZXRob2QgfHwgJ0dFVCcpLnRvVXBwZXJDYXNlKCk7XG4gICAgY29uc3QgcGFyYW1zOiBhbnkgPSBPYmplY3QuYXNzaWduKFxuICAgICAge1xuICAgICAgICBbcmVxLnJlTmFtZS5waV06IHBhZ2UuemVyb0luZGV4ZWQgPyBwaSAtIDEgOiBwaSxcbiAgICAgICAgW3JlcS5yZU5hbWUucHNdOiBwcyxcbiAgICAgIH0sXG4gICAgICByZXEucGFyYW1zLFxuICAgICAgdGhpcy5nZXRSZXFTb3J0TWFwKG11bHRpU29ydCwgY29sdW1ucyksXG4gICAgICB0aGlzLmdldFJlcUZpbHRlck1hcChjb2x1bW5zKSxcbiAgICApO1xuICAgIGxldCByZXFPcHRpb25zOiBhbnkgPSB7XG4gICAgICBwYXJhbXMsXG4gICAgICBib2R5OiByZXEuYm9keSxcbiAgICAgIGhlYWRlcnM6IHJlcS5oZWFkZXJzLFxuICAgIH07XG4gICAgaWYgKG1ldGhvZCA9PT0gJ1BPU1QnICYmIHJlcS5hbGxJbkJvZHkgPT09IHRydWUpIHtcbiAgICAgIHJlcU9wdGlvbnMgPSB7XG4gICAgICAgIGJvZHk6IE9iamVjdC5hc3NpZ24oe30sIHJlcS5ib2R5LCBwYXJhbXMpLFxuICAgICAgICBoZWFkZXJzOiByZXEuaGVhZGVycyxcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdChtZXRob2QsIHVybCwgcmVxT3B0aW9ucyk7XG4gIH1cblxuICAvLyNyZWdpb24gc29ydFxuXG4gIHByaXZhdGUgZ2V0VmFsaWRTb3J0KGNvbHVtbnM6IFNUQ29sdW1uW10pOiBTVFNvcnRNYXBbXSB7XG4gICAgcmV0dXJuIGNvbHVtbnNcbiAgICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtLl9zb3J0ICYmIGl0ZW0uX3NvcnQuZW5hYmxlZCAmJiBpdGVtLl9zb3J0LmRlZmF1bHQpXG4gICAgICAubWFwKGl0ZW0gPT4gaXRlbS5fc29ydCk7XG4gIH1cblxuICBwcml2YXRlIGdldFNvcnRlckZuKGNvbHVtbnM6IFNUQ29sdW1uW10pIHtcbiAgICBjb25zdCBzb3J0TGlzdCA9IHRoaXMuZ2V0VmFsaWRTb3J0KGNvbHVtbnMpO1xuICAgIGlmIChzb3J0TGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBzb3J0TGlzdFswXS5jb21wYXJlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLndhcm4oYFtzdF0gTXVzZSBwcm92aWRlIHRoZSBjb21wYXJlIGZ1bmN0aW9uIGluIHNvcnRgKTtcbiAgICAgIHJldHVybiA7XG4gICAgfVxuXG4gICAgcmV0dXJuIChhOiBhbnksIGI6IGFueSkgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0ID0gc29ydExpc3RbMF0uY29tcGFyZShhLCBiKTtcbiAgICAgIGlmIChyZXN1bHQgIT09IDApIHtcbiAgICAgICAgcmV0dXJuIHNvcnRMaXN0WzBdLmRlZmF1bHQgPT09ICdkZXNjZW5kJyA/IC1yZXN1bHQgOiByZXN1bHQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gMDtcbiAgICB9O1xuICB9XG5cbiAgZ2V0UmVxU29ydE1hcChcbiAgICBtdWx0aVNvcnQ6IFNUTXVsdGlTb3J0LFxuICAgIGNvbHVtbnM6IFNUQ29sdW1uW10sXG4gICk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0ge1xuICAgIGxldCByZXQ6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcbiAgICBjb25zdCBzb3J0TGlzdCA9IHRoaXMuZ2V0VmFsaWRTb3J0KGNvbHVtbnMpO1xuICAgIGlmICghbXVsdGlTb3J0ICYmIHNvcnRMaXN0Lmxlbmd0aCA9PT0gMCkgcmV0dXJuIHJldDtcblxuICAgIGlmIChtdWx0aVNvcnQpIHtcbiAgICAgIHNvcnRMaXN0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIHJldFtpdGVtLmtleV0gPSAoaXRlbS5yZU5hbWUgfHwge30pW2l0ZW0uZGVmYXVsdF0gfHwgaXRlbS5kZWZhdWx0O1xuICAgICAgfSk7XG4gICAgICAvLyDDpcKQwojDpcK5wrbDpcKkwoTDp8KQwoZcbiAgICAgIHJldCA9IHtcbiAgICAgICAgW211bHRpU29ydC5rZXldOiBPYmplY3Qua2V5cyhyZXQpXG4gICAgICAgICAgLm1hcChrZXkgPT4ga2V5ICsgbXVsdGlTb3J0Lm5hbWVTZXBhcmF0b3IgKyByZXRba2V5XSlcbiAgICAgICAgICAuam9pbihtdWx0aVNvcnQuc2VwYXJhdG9yKSxcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1hcERhdGEgPSBzb3J0TGlzdFswXTtcbiAgICAgIHJldFttYXBEYXRhLmtleV0gPVxuICAgICAgICAoc29ydExpc3RbMF0ucmVOYW1lIHx8IHt9KVttYXBEYXRhLmRlZmF1bHRdIHx8IG1hcERhdGEuZGVmYXVsdDtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8vI2VuZHJlZ2lvblxuXG4gIC8vI3JlZ2lvbiBmaWx0ZXJcblxuICBwcml2YXRlIGdldFJlcUZpbHRlck1hcChjb2x1bW5zOiBTVENvbHVtbltdKTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB7XG4gICAgbGV0IHJldCA9IHt9O1xuICAgIGNvbHVtbnMuZmlsdGVyKHcgPT4gdy5maWx0ZXIgJiYgdy5maWx0ZXIuZGVmYXVsdCA9PT0gdHJ1ZSkuZm9yRWFjaChjb2wgPT4ge1xuICAgICAgY29uc3QgdmFsdWVzID0gY29sLmZpbHRlci5tZW51cy5maWx0ZXIoZiA9PiBmLmNoZWNrZWQgPT09IHRydWUpO1xuICAgICAgbGV0IG9iajogT2JqZWN0ID0ge307XG4gICAgICBpZiAoY29sLmZpbHRlci5yZU5hbWUpIHtcbiAgICAgICAgb2JqID0gY29sLmZpbHRlci5yZU5hbWUoY29sLmZpbHRlci5tZW51cywgY29sKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9ialtjb2wuZmlsdGVyLmtleV0gPSB2YWx1ZXMubWFwKGkgPT4gaS52YWx1ZSkuam9pbignLCcpO1xuICAgICAgfVxuICAgICAgcmV0ID0gT2JqZWN0LmFzc2lnbihyZXQsIG9iaik7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8vI2VuZHJlZ2lvblxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGRlZXBHZXQgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBYbHN4U2VydmljZSB9IGZyb20gJ0BkZWxvbi9hYmMveGxzeCc7XG5cbmltcG9ydCB7IFNUQ29sdW1uLCBTVEV4cG9ydE9wdGlvbnMgfSBmcm9tICcuL3RhYmxlLmludGVyZmFjZXMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU1RFeHBvcnQge1xuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBwcml2YXRlIHhsc3hTcnY6IFhsc3hTZXJ2aWNlKSB7fVxuXG4gIHByaXZhdGUgX3N0R2V0KGl0ZW06IGFueSwgY29sOiBTVENvbHVtbik6IGFueSB7XG4gICAgY29uc3QgcmV0OiBhbnkgPSB7IHQ6ICdzJywgdjogJycgfTtcblxuICAgIGlmIChjb2wuZm9ybWF0KSB7XG4gICAgICByZXQudiA9IGNvbC5mb3JtYXQoaXRlbSwgY29sKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdmFsID0gZGVlcEdldChpdGVtLCBjb2wuaW5kZXggYXMgc3RyaW5nW10sICcnKTtcbiAgICAgIHJldC52ID0gdmFsO1xuICAgICAgc3dpdGNoIChjb2wudHlwZSkge1xuICAgICAgICBjYXNlICdjdXJyZW5jeSc6XG4gICAgICAgICAgcmV0LnQgPSAnbic7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgICAgIHJldC50ID0gJ2QnO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd5bic6XG4gICAgICAgICAgcmV0LnYgPSByZXQudiA9PT0gY29sLnluVHJ1dGggPyBjb2wueW5ZZXMgfHwgJ8OmwpjCrycgOiBjb2wueW5ObyB8fCAnw6XCkMKmJztcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5TaGVldChvcHQ6IFNURXhwb3J0T3B0aW9ucyk6IHsgW3NoZWV0OiBzdHJpbmddOiBhbnkgfSB7XG4gICAgY29uc3Qgc2hlZXRzOiB7IFtzaGVldDogc3RyaW5nXTogYW55IH0gPSB7fTtcbiAgICBjb25zdCBzaGVldCA9IChzaGVldHNbb3B0LnNoZWV0bmFtZSB8fCAnU2hlZXQxJ10gPSB7fSk7XG4gICAgY29uc3QgY29sRGF0YSA9IG9wdC5fYy5maWx0ZXIoXG4gICAgICB3ID0+XG4gICAgICAgIHcuZXhwb3J0ZWQgIT09IGZhbHNlICYmXG4gICAgICAgIHcuaW5kZXggJiZcbiAgICAgICAgKCF3LmJ1dHRvbnMgfHwgdy5idXR0b25zLmxlbmd0aCA9PT0gMCksXG4gICAgKTtcbiAgICBjb25zdCBjYyA9IGNvbERhdGEubGVuZ3RoLFxuICAgICAgZGMgPSBvcHQuX2QubGVuZ3RoO1xuXG4gICAgLy8gY29sdW1uXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYzsgaSsrKSB7XG4gICAgICBzaGVldFtgJHtTdHJpbmcuZnJvbUNoYXJDb2RlKDY1ICsgaSl9MWBdID0ge1xuICAgICAgICB0OiAncycsXG4gICAgICAgIHY6IGNvbERhdGFbaV0udGl0bGUsXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIGNvbnRlbnRcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRjOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY2M7IGorKykge1xuICAgICAgICBzaGVldFtgJHtTdHJpbmcuZnJvbUNoYXJDb2RlKDY1ICsgail9JHtpICsgMn1gXSA9IHRoaXMuX3N0R2V0KFxuICAgICAgICAgIG9wdC5fZFtpXSxcbiAgICAgICAgICBjb2xEYXRhW2pdLFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjYyA+IDAgJiYgZGMgPiAwKSB7XG4gICAgICBzaGVldFsnIXJlZiddID0gYEExOiR7U3RyaW5nLmZyb21DaGFyQ29kZSg2NSArIGNjIC0gMSl9JHtkYyArIDF9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gc2hlZXRzO1xuICB9XG5cbiAgZXhwb3J0KG9wdDogU1RFeHBvcnRPcHRpb25zKSB7XG4gICAgaWYgKCF0aGlzLnhsc3hTcnYpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYG11c2UgYmUgaW1wb3J0ICdYbHN4TW9kdWxlJyBtb2R1bGUsIGJ1dCBnb3QgbnVsbGApO1xuICAgIGNvbnN0IHNoZWV0cyA9IHRoaXMuZ2VuU2hlZXQob3B0KTtcbiAgICByZXR1cm4gdGhpcy54bHN4U3J2LmV4cG9ydCh7XG4gICAgICBzaGVldHMsXG4gICAgICBmaWxlbmFtZTogb3B0LmZpbGVuYW1lLFxuICAgICAgY2FsbGJhY2s6IG9wdC5jYWxsYmFjayxcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIE9uRGVzdHJveSxcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBFdmVudEVtaXR0ZXIsXG4gIFJlbmRlcmVyMixcbiAgRWxlbWVudFJlZixcbiAgVGVtcGxhdGVSZWYsXG4gIFNpbXBsZUNoYW5nZSxcbiAgT3B0aW9uYWwsXG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEZWNpbWFsUGlwZSwgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7XG4gIENOQ3VycmVuY3lQaXBlLFxuICBEYXRlUGlwZSxcbiAgWU5QaXBlLFxuICBNb2RhbEhlbHBlcixcbiAgTW9kYWxIZWxwZXJPcHRpb25zLFxuICBBTEFJTl9JMThOX1RPS0VOLFxuICBBbGFpbkkxOE5TZXJ2aWNlLFxuICBEcmF3ZXJIZWxwZXIsXG4gIERyYXdlckhlbHBlck9wdGlvbnMsXG4gIERlbG9uTG9jYWxlU2VydmljZSxcbn0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7XG4gIGRlZXBDb3B5LFxuICB0b0Jvb2xlYW4sXG4gIHVwZGF0ZUhvc3RDbGFzcyxcbiAgSW5wdXRCb29sZWFuLFxuICBJbnB1dE51bWJlcixcbn0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5pbXBvcnQge1xuICBTVENvbHVtbixcbiAgU1RDaGFuZ2UsXG4gIFNUQ29sdW1uU2VsZWN0aW9uLFxuICBTVENvbHVtbkZpbHRlck1lbnUsXG4gIFNURGF0YSxcbiAgU1RDb2x1bW5CdXR0b24sXG4gIFNURXhwb3J0T3B0aW9ucyxcbiAgU1RNdWx0aVNvcnQsXG4gIFNUUmVxLFxuICBTVEVycm9yLFxuICBTVENoYW5nZVR5cGUsXG4gIFNUQ2hhbmdlUm93Q2xpY2ssXG4gIFNUUmVzLFxuICBTVFBhZ2UsXG4gIFNUTG9hZE9wdGlvbnMsXG59IGZyb20gJy4vdGFibGUuaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBTVENvbmZpZyB9IGZyb20gJy4vdGFibGUuY29uZmlnJztcbmltcG9ydCB7IFNURXhwb3J0IH0gZnJvbSAnLi90YWJsZS1leHBvcnQnO1xuaW1wb3J0IHsgU1RDb2x1bW5Tb3VyY2UgfSBmcm9tICcuL3RhYmxlLWNvbHVtbi1zb3VyY2UnO1xuaW1wb3J0IHsgU1RSb3dTb3VyY2UgfSBmcm9tICcuL3RhYmxlLXJvdy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU1REYXRhU291cmNlIH0gZnJvbSAnLi90YWJsZS1kYXRhLXNvdXJjZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAgU1REYXRhU291cmNlLFxuICAgIFNUUm93U291cmNlLFxuICAgIFNUQ29sdW1uU291cmNlLFxuICAgIFNURXhwb3J0LFxuICAgIENOQ3VycmVuY3lQaXBlLFxuICAgIERhdGVQaXBlLFxuICAgIFlOUGlwZSxcbiAgICBEZWNpbWFsUGlwZSxcbiAgXSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBTVENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBpMThuJDogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIGRlbG9uSTE4biQ6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSB0b3RhbFRwbCA9IGBgO1xuICBwcml2YXRlIGxvY2FsZTogYW55ID0ge307XG4gIHByaXZhdGUgY2xvbmVQYWdlOiBTVFBhZ2U7XG4gIF9kYXRhOiBTVERhdGFbXSA9IFtdO1xuICBfaXNQYWdpbmF0aW9uID0gdHJ1ZTtcbiAgX2FsbENoZWNrZWQgPSBmYWxzZTtcbiAgX2luZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgX2NvbHVtbnM6IFNUQ29sdW1uW10gPSBbXTtcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIC8qKiDDpsKVwrDDpsKNwq7DpsK6wpAgKi9cbiAgQElucHV0KClcbiAgZGF0YTogc3RyaW5nIHwgU1REYXRhW10gfCBPYnNlcnZhYmxlPFNURGF0YVtdPjtcbiAgLyoqIMOowq/Ct8OmwrHCgsOkwr3Ck8OpwoXCjcOnwr3CriAqL1xuICBASW5wdXQoKVxuICBnZXQgcmVxKCkge1xuICAgIHJldHVybiB0aGlzLl9yZXE7XG4gIH1cbiAgc2V0IHJlcSh2YWx1ZTogU1RSZXEpIHtcbiAgICBjb25zdCB7IHJlcSB9ID0gdGhpcy5jb2c7XG4gICAgY29uc3QgaXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIHJlcSwgdmFsdWUpO1xuICAgIGlmIChpdGVtLnJlTmFtZSA9PSBudWxsKSB7XG4gICAgICBpdGVtLnJlTmFtZSA9IGRlZXBDb3B5KHJlcS5yZU5hbWUpO1xuICAgIH1cbiAgICB0aGlzLl9yZXEgPSBpdGVtO1xuICB9XG4gIHByaXZhdGUgX3JlcTogU1RSZXE7XG4gIC8qKiDDqMK/wpTDpcKbwp7DpMK9wpPDqcKFwo3Dp8K9wq4gKi9cbiAgQElucHV0KClcbiAgZ2V0IHJlcygpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzO1xuICB9XG4gIHNldCByZXModmFsdWU6IFNUUmVzKSB7XG4gICAgY29uc3QgeyByZXMgfSA9IHRoaXMuY29nO1xuICAgIGNvbnN0IGl0ZW0gPSBPYmplY3QuYXNzaWduKHt9LCByZXMsIHZhbHVlKTtcbiAgICBpdGVtLnJlTmFtZSA9IE9iamVjdC5hc3NpZ24oe30sIHJlcy5yZU5hbWUsIGl0ZW0ucmVOYW1lKTtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoaXRlbS5yZU5hbWUubGlzdCkpXG4gICAgICBpdGVtLnJlTmFtZS5saXN0ID0gaXRlbS5yZU5hbWUubGlzdC5zcGxpdCgnLicpO1xuICAgIGlmICghQXJyYXkuaXNBcnJheShpdGVtLnJlTmFtZS50b3RhbCkpXG4gICAgICBpdGVtLnJlTmFtZS50b3RhbCA9IGl0ZW0ucmVOYW1lLnRvdGFsLnNwbGl0KCcuJyk7XG4gICAgdGhpcy5fcmVzID0gaXRlbTtcbiAgfVxuICBwcml2YXRlIF9yZXM6IFNUUmVzO1xuICAvKiogw6XCiMKXw6bCj8KPw6jCv8KwICAqL1xuICBASW5wdXQoKVxuICBjb2x1bW5zOiBTVENvbHVtbltdID0gW107XG4gIC8qKiDDpsKvwo/DqcKhwrXDpsKVwrDDqcKHwo/Dr8K8wozDpcK9wpPDqMKuwr7Dp8K9wq7DpMK4wrogYDBgIMOowqHCqMOnwqTCusOkwrjCjcOlwojChsOpwqHCtcOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmAxMGAgKi9cbiAgQElucHV0KClcbiAgQElucHV0TnVtYmVyKClcbiAgcHMgPSAxMDtcbiAgLyoqIMOlwr3Ck8OlwonCjcOpwqHCtcOnwqDCgSAqL1xuICBASW5wdXQoKVxuICBASW5wdXROdW1iZXIoKVxuICBwaSA9IDE7XG4gIC8qKiDDpsKVwrDDpsKNwq7DpsKAwrvDqcKHwo8gKi9cbiAgQElucHV0KClcbiAgQElucHV0TnVtYmVyKClcbiAgdG90YWwgPSAwO1xuICAvKiogw6XCiMKGw6nCocK1w6XCmcKow6nChcKNw6fCvcKuICovXG4gIEBJbnB1dCgpXG4gIGdldCBwYWdlKCkge1xuICAgIHJldHVybiB0aGlzLl9wYWdlO1xuICB9XG4gIHNldCBwYWdlKHZhbHVlOiBTVFBhZ2UpIHtcbiAgICB0aGlzLmNsb25lUGFnZSA9IHZhbHVlO1xuICAgIGNvbnN0IHsgcGFnZSB9ID0gdGhpcy5jb2c7XG4gICAgY29uc3QgaXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIGRlZXBDb3B5KHBhZ2UpLCB2YWx1ZSk7XG4gICAgY29uc3QgeyB0b3RhbCB9ID0gaXRlbTtcbiAgICBpZiAodHlwZW9mIHRvdGFsID09PSAnc3RyaW5nJyAmJiB0b3RhbC5sZW5ndGgpIHtcbiAgICAgIHRoaXMudG90YWxUcGwgPSB0b3RhbDtcbiAgICB9IGVsc2UgaWYgKHRvQm9vbGVhbih0b3RhbCkpIHtcbiAgICAgIHRoaXMudG90YWxUcGwgPSB0aGlzLmxvY2FsZS50b3RhbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50b3RhbFRwbCA9ICcnO1xuICAgIH1cbiAgICB0aGlzLl9wYWdlID0gaXRlbTtcbiAgfVxuICBwcml2YXRlIF9wYWdlOiBTVFBhZ2U7XG4gIC8qKiDDpsKYwq/DpcKQwqbDpsKYwr7Dp8KkwrpMb2FkaW5nICovXG4gIEBJbnB1dCgpXG4gIEBJbnB1dEJvb2xlYW4oKVxuICBsb2FkaW5nID0gZmFsc2U7XG4gIC8qKiDDpcK7wrbDqMK/wp/DpsKYwr7Dp8KkwrrDpcKKwqDDqMK9wr3DpsKVwojDpsKewpzDp8KawoTDpsKXwrbDqcKXwrTDr8K8wojDqcKYwrLDpsKtwqLDqcKXwqrDp8KDwoHDr8K8wokgKi9cbiAgQElucHV0KClcbiAgQElucHV0TnVtYmVyKClcbiAgbG9hZGluZ0RlbGF5ID0gMDtcbiAgLyoqIMOmwpjCr8OlwpDCpsOmwpjCvsOnwqTCusOowr7CucOmwqHChiAqL1xuICBASW5wdXQoKVxuICBASW5wdXRCb29sZWFuKClcbiAgYm9yZGVyZWQgPSBmYWxzZTtcbiAgLyoqIHRhYmxlw6XCpMKnw6XCsMKPICovXG4gIEBJbnB1dCgpXG4gIHNpemU6ICdzbWFsbCcgfCAnbWlkZGxlJyB8ICdkZWZhdWx0JztcbiAgLyoqIMOnwrrCtcOlwpDCkcOmwpTCr8OmwozCgcOmwrvCmsOlworCqMOvwrzCjMOkwrnCn8Olwo/Cr8OnwpTCqMOkwrrCjsOmwozCh8Olwq7CmsOmwrvCmsOlworCqMOlwozCusOlwp/Cn8OnwprChMOpwqvCmMOlwrrCpsOvwrzCmmB7IHk6ICczMDBweCcsIHg6ICczMDBweCcgfWAgKi9cbiAgQElucHV0KClcbiAgc2Nyb2xsOiB7IHk/OiBzdHJpbmc7IHg/OiBzdHJpbmcgfTtcbiAgLyoqIMOmwpjCr8OlwpDCpsOlwqTCmsOmwo7CksOlwrrCj8OvwrzCjMOlwr3CkyBgc29ydGAgw6XCpMKaw6TCuMKqw6fCm8K4w6XCkMKMw6XCgMK8w6bCl8K2w6jCh8Kqw6XCisKow6XCkMKIw6XCucK2w6/CvMKMw6XCu8K6w6jCrsKuw6XCkMKOw6fCq8Kvw6bClMKvw6bCjMKBw6bCl8K2w6TCvcK/w6fClMKoICovXG4gIEBJbnB1dCgpXG4gIGdldCBtdWx0aVNvcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX211bHRpU29ydDtcbiAgfVxuICBzZXQgbXVsdGlTb3J0KHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicgJiYgIXRvQm9vbGVhbih2YWx1ZSkpIHtcbiAgICAgIHRoaXMuX211bHRpU29ydCA9IG51bGw7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX211bHRpU29ydCA9IE9iamVjdC5hc3NpZ24oXG4gICAgICA8U1RNdWx0aVNvcnQ+e1xuICAgICAgICBrZXk6ICdzb3J0JyxcbiAgICAgICAgc2VwYXJhdG9yOiAnLScsXG4gICAgICAgIG5hbWVTZXBhcmF0b3I6ICcuJyxcbiAgICAgIH0sXG4gICAgICB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnID8gdmFsdWUgOiB7fSxcbiAgICApO1xuICB9XG4gIHByaXZhdGUgX211bHRpU29ydDogU1RNdWx0aVNvcnQ7XG4gIC8qKiBgaGVhZGVyYCDDpsKgwofDqcKiwpggKi9cbiAgQElucHV0KClcbiAgaGVhZGVyOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgLyoqIGBmb290ZXJgIMOlwrrClcOpwoPCqCAqL1xuICBASW5wdXQoKVxuICBmb290ZXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICAvKiogw6nCosKdw6XCpMKWIGBib2R5YCDDpcKGwoXDpcKuwrkgKi9cbiAgQElucHV0KClcbiAgYm9keTogVGVtcGxhdGVSZWY8dm9pZD47XG4gIC8qKiBgZXhwYW5kYCDDpcKPwq/DpcKxwpXDpcK8woDDr8K8wozDpcK9wpPDpsKVwrDDpsKNwq7DpsK6wpDDpMK4wq3DpcKMwoXDpsKLwqwgYGV4cGFuZGAgw6jCocKow6fCpMK6w6XCscKVw6XCvMKAw6fCisK2w6bCgMKBICovXG4gIEBJbnB1dCgpXG4gIGV4cGFuZDogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IGFueTsgY29sdW1uOiBTVENvbHVtbiB9PjtcbiAgQElucHV0KClcbiAgbm9SZXN1bHQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKVxuICB3aWR0aENvbmZpZzogc3RyaW5nW107XG4gIC8qKiDDqMKvwrfDpsKxwoLDpcK8woLDpcK4wrjDpsKXwrbDpcKbwp7DqMKwwoMgKi9cbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IGVycm9yOiBFdmVudEVtaXR0ZXI8U1RFcnJvcj4gPSBuZXcgRXZlbnRFbWl0dGVyPFNURXJyb3I+KCk7XG4gIC8qKlxuICAgKiDDpcKPwpjDpcKMwpbDpsKXwrbDpcKbwp7DqMKwwoPDr8K8wozDpcKMwoXDpsKLwqzDr8K8wppgcGlgw6PCgMKBYHBzYMOjwoDCgWBjaGVja2JveGDDo8KAwoFgcmFkaW9gw6PCgMKBYHNvcnRgw6PCgMKBYGZpbHRlcmDDo8KAwoFgY2xpY2tgw6PCgMKBYGRibENsaWNrYCDDpcKPwpjDpcKKwqhcbiAgICovXG4gIEBPdXRwdXQoKVxuICByZWFkb25seSBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxTVENoYW5nZT4gPSBuZXcgRXZlbnRFbWl0dGVyPFNUQ2hhbmdlPigpO1xuICAvKiogw6jCocKMw6XCjcKVw6XCh8K7w6XCpMKaw6XCsMKRw6bCl8K2w6nClcK/w6TCucKLw6fCscK7w6TCuMK6w6XCj8KMw6XCh8K7w6/CvMKIw6XCjcKVw6TCvcKNw6/CvMKaw6bCr8Krw6fCp8KSw6/CvMKJw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYDIwMGAgKi9cbiAgQElucHV0KClcbiAgQElucHV0TnVtYmVyKClcbiAgcm93Q2xpY2tUaW1lID0gMjAwO1xuXG4gIEBJbnB1dCgpXG4gIEBJbnB1dEJvb2xlYW4oKVxuICByZXNwb25zaXZlSGlkZUhlYWRlckZvb3RlcjogYm9vbGVhbjtcblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiBjb21wYXRpYmxlXG5cbiAgLyoqXG4gICAqIGNoZWNrYm94w6XCj8KYw6XCjMKWw6bCl8K2w6XCm8Kew6jCsMKDw6/CvMKMw6XCj8KCw6bClcKww6TCuMK6w6XCvcKTw6XCicKNw6bCicKAw6nCgMKJw6bCuMKFw6XCjcKVXG4gICAqIEBkZXByZWNhdGVkIMOkwr3Cv8OnwpTCqCBgY2hhbmdlYCDDpsKbwr/DpMK7wqNcbiAgICogQGRlcHJlY2F0ZWQgYXMgb2YgdjNcbiAgICovXG4gIEBPdXRwdXQoKVxuICByZWFkb25seSBjaGVja2JveENoYW5nZTogRXZlbnRFbWl0dGVyPFNURGF0YVtdPiA9IG5ldyBFdmVudEVtaXR0ZXI8XG4gICAgU1REYXRhW11cbiAgPigpO1xuICAvKipcbiAgICogcmFkaW/DpcKPwpjDpcKMwpbDpsKXwrbDpcKbwp7DqMKwwoPDr8K8wozDpcKPwoLDpsKVwrDDpMK4wrrDpcK9wpPDpcKJwo3DpsKJwoDDqcKAwolcbiAgICogQGRlcHJlY2F0ZWQgw6TCvcK/w6fClMKoIGBjaGFuZ2VgIMOmwpvCv8OkwrvCo1xuICAgKiBAZGVwcmVjYXRlZCBhcyBvZiB2M1xuICAgKi9cbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IHJhZGlvQ2hhbmdlOiBFdmVudEVtaXR0ZXI8U1REYXRhPiA9IG5ldyBFdmVudEVtaXR0ZXI8U1REYXRhPigpO1xuICAvKipcbiAgICogw6bCjsKSw6XCusKPw6XCm8Kew6jCsMKDXG4gICAqIEBkZXByZWNhdGVkIMOkwr3Cv8OnwpTCqCBgY2hhbmdlYCDDpsKbwr/DpMK7wqNcbiAgICogQGRlcHJlY2F0ZWQgYXMgb2YgdjNcbiAgICovXG4gIEBPdXRwdXQoKVxuICByZWFkb25seSBzb3J0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAvKipcbiAgICogw6jCv8KHw6bCu8Kkw6XCj8KYw6XCjMKWw6bCl8K2w6XCm8Kew6jCsMKDXG4gICAqIEBkZXByZWNhdGVkIMOkwr3Cv8OnwpTCqCBgY2hhbmdlYCDDpsKbwr/DpMK7wqNcbiAgICogQGRlcHJlY2F0ZWQgYXMgb2YgdjNcbiAgICovXG4gIEBPdXRwdXQoKVxuICByZWFkb25seSBmaWx0ZXJDaGFuZ2U6IEV2ZW50RW1pdHRlcjxTVENvbHVtbj4gPSBuZXcgRXZlbnRFbWl0dGVyPFNUQ29sdW1uPigpO1xuICAvKipcbiAgICogw6jCocKMw6XCjcKVw6XCh8K7w6XCm8Kew6jCsMKDXG4gICAqIEBkZXByZWNhdGVkIMOkwr3Cv8OnwpTCqCBgY2hhbmdlYCDDpsKbwr/DpMK7wqNcbiAgICogQGRlcHJlY2F0ZWQgYXMgb2YgdjNcbiAgICovXG4gIEBPdXRwdXQoKVxuICByZWFkb25seSByb3dDbGljazogRXZlbnRFbWl0dGVyPFNUQ2hhbmdlUm93Q2xpY2s+ID0gbmV3IEV2ZW50RW1pdHRlcjxcbiAgICBTVENoYW5nZVJvd0NsaWNrXG4gID4oKTtcbiAgLyoqXG4gICAqIMOowqHCjMOlwo/CjMOlwofCu8OlwpvCnsOowrDCg1xuICAgKiBAZGVwcmVjYXRlZCDDpMK9wr/Dp8KUwqggYGNoYW5nZWAgw6bCm8K/w6TCu8KjXG4gICAqIEBkZXByZWNhdGVkIGFzIG9mIHYzXG4gICAqL1xuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgcm93RGJsQ2xpY2s6IEV2ZW50RW1pdHRlcjxTVENoYW5nZVJvd0NsaWNrPiA9IG5ldyBFdmVudEVtaXR0ZXI8XG4gICAgU1RDaGFuZ2VSb3dDbGlja1xuICA+KCk7XG4gIC8vI2VuZHJlZ2lvblxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgY29nOiBTVENvbmZpZyxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgZXhwb3J0U3J2OiBTVEV4cG9ydCxcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoQUxBSU5fSTE4Tl9UT0tFTilcbiAgICBpMThuU3J2OiBBbGFpbkkxOE5TZXJ2aWNlLFxuICAgIHByaXZhdGUgbW9kYWxIZWxwZXI6IE1vZGFsSGVscGVyLFxuICAgIHByaXZhdGUgZHJhd2VySGVscGVyOiBEcmF3ZXJIZWxwZXIsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IGFueSxcbiAgICBwcml2YXRlIGNvbHVtblNvdXJjZTogU1RDb2x1bW5Tb3VyY2UsXG4gICAgcHJpdmF0ZSBkYXRhU291cmNlOiBTVERhdGFTb3VyY2UsXG4gICAgcHJpdmF0ZSBkZWxvbkkxOG46IERlbG9uTG9jYWxlU2VydmljZSxcbiAgKSB7XG4gICAgdGhpcy5kZWxvbkkxOG4kID0gdGhpcy5kZWxvbkkxOG4uY2hhbmdlLnN1YnNjcmliZShcbiAgICAgICgpID0+IHtcbiAgICAgICAgdGhpcy5sb2NhbGUgPSB0aGlzLmRlbG9uSTE4bi5nZXREYXRhKCdzdCcpO1xuICAgICAgICBpZiAodGhpcy5fY29sdW1ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdGhpcy5wYWdlID0gdGhpcy5jbG9uZVBhZ2U7XG4gICAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgKTtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRlZXBDb3B5KGNvZykpO1xuICAgIGlmIChpMThuU3J2KSB7XG4gICAgICB0aGlzLmkxOG4kID0gaTE4blNydi5jaGFuZ2VcbiAgICAgICAgLnBpcGUoZmlsdGVyKCgpID0+IHRoaXMuX2NvbHVtbnMubGVuZ3RoID4gMCkpXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy51cGRhdGVDb2x1bW5zKCkpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlclRvdGFsKHRvdGFsOiBzdHJpbmcsIHJhbmdlOiBzdHJpbmdbXSkge1xuICAgIHJldHVybiB0aGlzLnRvdGFsVHBsXG4gICAgICA/IHRoaXMudG90YWxUcGxcbiAgICAgICAgICAucmVwbGFjZSgne3t0b3RhbH19JywgdG90YWwpXG4gICAgICAgICAgLnJlcGxhY2UoJ3t7cmFuZ2VbMF19fScsIHJhbmdlWzBdKVxuICAgICAgICAgIC5yZXBsYWNlKCd7e3JhbmdlWzFdfX0nLCByYW5nZVsxXSlcbiAgICAgIDogJyc7XG4gIH1cblxuICBwcml2YXRlIGNoYW5nZUVtaXQodHlwZTogU1RDaGFuZ2VUeXBlLCBkYXRhPzogYW55KSB7XG4gICAgY29uc3QgcmVzOiBTVENoYW5nZSA9IHtcbiAgICAgIHR5cGUsXG4gICAgICBwaTogdGhpcy5waSxcbiAgICAgIHBzOiB0aGlzLnBzLFxuICAgICAgdG90YWw6IHRoaXMudG90YWwsXG4gICAgfTtcbiAgICBpZiAoZGF0YSAhPSBudWxsKSB7XG4gICAgICByZXNbdHlwZV0gPSBkYXRhO1xuICAgIH1cbiAgICB0aGlzLmNoYW5nZS5lbWl0KHJlcyk7XG4gIH1cblxuICAvLyNyZWdpb24gZGF0YVxuXG4gIHByaXZhdGUgX2xvYWQoKSB7XG4gICAgY29uc3QgeyBwaSwgcHMsIGRhdGEsIHJlcSwgcmVzLCBwYWdlLCB0b3RhbCwgbXVsdGlTb3J0IH0gPSB0aGlzO1xuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgcmV0dXJuIHRoaXMuZGF0YVNvdXJjZVxuICAgICAgLnByb2Nlc3Moe1xuICAgICAgICBwaSxcbiAgICAgICAgcHMsXG4gICAgICAgIHRvdGFsLFxuICAgICAgICBkYXRhLFxuICAgICAgICByZXEsXG4gICAgICAgIHJlcyxcbiAgICAgICAgcGFnZSxcbiAgICAgICAgY29sdW1uczogdGhpcy5fY29sdW1ucyxcbiAgICAgICAgbXVsdGlTb3J0LFxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdC5waSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aGlzLnBpID0gcmVzdWx0LnBpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0LnRvdGFsICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRoaXMudG90YWwgPSByZXN1bHQudG90YWw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQucGFnZVNob3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhpcy5faXNQYWdpbmF0aW9uID0gcmVzdWx0LnBhZ2VTaG93O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2RhdGEgPSByZXN1bHQubGlzdDtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5fcmVmQ2hlY2soKSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmVycm9yLmVtaXQoeyB0eXBlOiAncmVxJywgZXJyb3IgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDDpsKgwrnDpsKNwq7DqcKhwrXDp8KgwoHDqcKHwo3DpsKWwrDDpcKKwqDDqMK9wr3DpsKVwrDDpsKNwq5cbiAgICpcbiAgICogQHBhcmFtIHBpIMOmwozCh8Olwq7CmsOlwr3Ck8OlwonCjcOpwqHCtcOnwqDCgcOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmAxYFxuICAgKiBAcGFyYW0gZXh0cmFQYXJhbXMgw6nCh8KNw6bClsKww6bCjMKHw6XCrsKaIGBleHRyYVBhcmFtc2Agw6XCgMK8XG4gICAqIEBwYXJhbSBvcHRpb25zIMOpwoDCicOpwqHCuVxuICAgKi9cbiAgbG9hZChwaSA9IDEsIGV4dHJhUGFyYW1zPzogYW55LCBvcHRpb25zPzogU1RMb2FkT3B0aW9ucykge1xuICAgIGlmIChwaSAhPT0gLTEpIHRoaXMucGkgPSBwaTtcbiAgICBpZiAodHlwZW9mIGV4dHJhUGFyYW1zICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5fcmVxLnBhcmFtcyA9XG4gICAgICAgIG9wdGlvbnMgJiYgb3B0aW9ucy5tZXJnZVxuICAgICAgICAgID8gT2JqZWN0LmFzc2lnbih0aGlzLl9yZXEucGFyYW1zLCBleHRyYVBhcmFtcylcbiAgICAgICAgICA6IGV4dHJhUGFyYW1zO1xuICAgIH1cbiAgICB0aGlzLl9jaGFuZ2UoJ3BpJyk7XG4gIH1cblxuICAvKipcbiAgICogw6nCh8KNw6bClsKww6XCiMK3w6bClsKww6XCvcKTw6XCicKNw6nCocK1XG4gICAqIEBwYXJhbSBleHRyYVBhcmFtcyDDqcKHwo3DpsKWwrDDpsKMwofDpcKuwpogYGV4dHJhUGFyYW1zYCDDpcKAwrxcbiAgICovXG4gIHJlbG9hZChleHRyYVBhcmFtcz86IGFueSwgb3B0aW9ucz86IFNUTG9hZE9wdGlvbnMpIHtcbiAgICB0aGlzLmxvYWQoLTEsIGV4dHJhUGFyYW1zLCBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDDqcKHwo3Dp8K9wq7DpMK4wpTDqcKHwo3DpsKWwrDDqMKuwr7Dp8K9wq4gYHBpYCDDpMK4wrogYDFgw6/CvMKMw6XCjMKFw6XCkMKrw6TCu8Klw6TCuMKLw6XCgMK8w6/CvMKaXG4gICAqIC0gYGNoZWNrYCDDpsKVwrDDpsKNwq5cbiAgICogLSBgcmFkaW9gIMOmwpXCsMOmwo3CrlxuICAgKiAtIGBzb3J0YCDDpsKVwrDDpsKNwq5cbiAgICogLSBgZmlsZXRlcmAgw6bClcKww6bCjcKuXG4gICAqXG4gICAqIEBwYXJhbSBleHRyYVBhcmFtcyDDqcKHwo3DpsKWwrDDpsKMwofDpcKuwpogYGV4dHJhUGFyYW1zYCDDpcKAwrxcbiAgICovXG4gIHJlc2V0KGV4dHJhUGFyYW1zPzogYW55LCBvcHRpb25zPzogU1RMb2FkT3B0aW9ucykge1xuICAgIHRoaXMuY2xlYXJDaGVjaygpXG4gICAgICAuY2xlYXJSYWRpbygpXG4gICAgICAuY2xlYXJGaWx0ZXIoKVxuICAgICAgLmNsZWFyU29ydCgpO1xuICAgIHRoaXMubG9hZCgxLCBleHRyYVBhcmFtcywgb3B0aW9ucyk7XG4gIH1cblxuICBwcml2YXRlIF90b1RvcCgpIHtcbiAgICBpZiAoIXRoaXMucGFnZS50b1RvcCkgcmV0dXJuO1xuICAgIGNvbnN0IGVsID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgIGlmICh0aGlzLnNjcm9sbCkge1xuICAgICAgZWwucXVlcnlTZWxlY3RvcignLmFudC10YWJsZS1ib2R5Jykuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgLy8gZml4IGhlYWRlciBoZWlnaHRcbiAgICB0aGlzLmRvYy5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIC09IHRoaXMucGFnZS50b1RvcE9mZnNldDtcbiAgfVxuXG4gIF9jaGFuZ2UodHlwZTogJ3BpJyB8ICdwcycpIHtcbiAgICB0aGlzLl9sb2FkKCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLl90b1RvcCgpO1xuICAgIH0pO1xuICAgIHRoaXMuY2hhbmdlRW1pdCh0eXBlKTtcbiAgfVxuXG4gIF9jbGljayhlOiBFdmVudCwgaXRlbTogYW55LCBjb2w6IFNUQ29sdW1uKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3QgcmVzID0gY29sLmNsaWNrKGl0ZW0sIHRoaXMpO1xuICAgIGlmICh0eXBlb2YgcmVzID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChyZXMpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIHJvd0NsaWNrQ291bnQgPSAwO1xuICBfcm93Q2xpY2soZTogRXZlbnQsIGl0ZW06IGFueSwgaW5kZXg6IG51bWJlcikge1xuICAgIGlmICgoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLm5vZGVOYW1lID09PSAnSU5QVVQnKSByZXR1cm47XG4gICAgKyt0aGlzLnJvd0NsaWNrQ291bnQ7XG4gICAgaWYgKHRoaXMucm93Q2xpY2tDb3VudCAhPT0gMSkgcmV0dXJuO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgZGF0YSA9IHsgZSwgaXRlbSwgaW5kZXggfTtcbiAgICAgIGlmICh0aGlzLnJvd0NsaWNrQ291bnQgPT09IDEpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VFbWl0KCdjbGljaycsIGRhdGEpO1xuICAgICAgICAvLyBAZGVwcmVjYXRlZCBhcyBvZiB2M1xuICAgICAgICB0aGlzLnJvd0NsaWNrLmVtaXQoZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNoYW5nZUVtaXQoJ2RibENsaWNrJywgZGF0YSk7XG4gICAgICAgIC8vIEBkZXByZWNhdGVkIGFzIG9mIHYzXG4gICAgICAgIHRoaXMucm93RGJsQ2xpY2suZW1pdChkYXRhKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucm93Q2xpY2tDb3VudCA9IDA7XG4gICAgfSwgdGhpcy5yb3dDbGlja1RpbWUpO1xuICB9XG5cbiAgLy8jZW5kcmVnaW9uXG5cbiAgLy8jcmVnaW9uIHNvcnRcblxuICBzb3J0KGNvbDogU1RDb2x1bW4sIGlkeDogbnVtYmVyLCB2YWx1ZTogYW55KSB7XG4gICAgaWYgKHRoaXMubXVsdGlTb3J0KSB7XG4gICAgICBjb2wuX3NvcnQuZGVmYXVsdCA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9jb2x1bW5zLmZvckVhY2goXG4gICAgICAgIChpdGVtLCBpbmRleCkgPT4gKGl0ZW0uX3NvcnQuZGVmYXVsdCA9IGluZGV4ID09PSBpZHggPyB2YWx1ZSA6IG51bGwpLFxuICAgICAgKTtcbiAgICB9XG4gICAgdGhpcy5fbG9hZCgpO1xuICAgIGNvbnN0IHJlcyA9IHtcbiAgICAgIHZhbHVlLFxuICAgICAgbWFwOiB0aGlzLmRhdGFTb3VyY2UuZ2V0UmVxU29ydE1hcCh0aGlzLm11bHRpU29ydCwgdGhpcy5fY29sdW1ucyksXG4gICAgICBjb2x1bW46IGNvbCxcbiAgICB9O1xuICAgIHRoaXMuY2hhbmdlRW1pdCgnc29ydCcsIHJlcyk7XG4gICAgLy8gQGRlcHJlY2F0ZWQgYXMgb2YgdjNcbiAgICB0aGlzLnNvcnRDaGFuZ2UuZW1pdChyZXMpO1xuICB9XG5cbiAgY2xlYXJTb3J0KCkge1xuICAgIHRoaXMuX2NvbHVtbnMuZm9yRWFjaChpdGVtID0+IChpdGVtLl9zb3J0LmRlZmF1bHQgPSBudWxsKSk7XG4gIH1cblxuICAvLyNlbmRyZWdpb25cblxuICAvLyNyZWdpb24gZmlsdGVyXG5cbiAgcHJpdmF0ZSBoYW5kbGVGaWx0ZXIoY29sOiBTVENvbHVtbikge1xuICAgIGNvbC5maWx0ZXIuZGVmYXVsdCA9IGNvbC5maWx0ZXIubWVudXMuZmluZEluZGV4KHcgPT4gdy5jaGVja2VkKSAhPT0gLTE7XG4gICAgdGhpcy5fbG9hZCgpO1xuICAgIHRoaXMuY2hhbmdlRW1pdCgnZmlsdGVyJywgY29sKTtcbiAgICAvLyBAZGVwcmVjYXRlZCBhcyBvZiB2M1xuICAgIHRoaXMuZmlsdGVyQ2hhbmdlLmVtaXQoY29sKTtcbiAgfVxuXG4gIF9maWx0ZXJDb25maXJtKGNvbDogU1RDb2x1bW4pIHtcbiAgICB0aGlzLmhhbmRsZUZpbHRlcihjb2wpO1xuICB9XG5cbiAgX2ZpbHRlckNsZWFyKGNvbDogU1RDb2x1bW4pIHtcbiAgICBjb2wuZmlsdGVyLm1lbnVzLmZvckVhY2goaSA9PiAoaS5jaGVja2VkID0gZmFsc2UpKTtcbiAgICB0aGlzLmhhbmRsZUZpbHRlcihjb2wpO1xuICB9XG5cbiAgX2ZpbHRlclJhZGlvKGNvbDogU1RDb2x1bW4sIGl0ZW06IFNUQ29sdW1uRmlsdGVyTWVudSwgY2hlY2tlZDogYm9vbGVhbikge1xuICAgIGNvbC5maWx0ZXIubWVudXMuZm9yRWFjaChpID0+IChpLmNoZWNrZWQgPSBmYWxzZSkpO1xuICAgIGl0ZW0uY2hlY2tlZCA9IGNoZWNrZWQ7XG4gIH1cblxuICBjbGVhckZpbHRlcigpIHtcbiAgICB0aGlzLl9jb2x1bW5zXG4gICAgICAuZmlsdGVyKHcgPT4gdy5maWx0ZXIgJiYgdy5maWx0ZXIuZGVmYXVsdCA9PT0gdHJ1ZSlcbiAgICAgIC5mb3JFYWNoKGNvbCA9PiB7XG4gICAgICAgIGNvbC5maWx0ZXIuZGVmYXVsdCA9IGZhbHNlO1xuICAgICAgICBjb2wuZmlsdGVyLm1lbnVzLmZvckVhY2goZiA9PiAoZi5jaGVja2VkID0gZmFsc2UpKTtcbiAgICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8jZW5kcmVnaW9uXG5cbiAgLy8jcmVnaW9uIGNoZWNrYm94XG5cbiAgLyoqIMOmwrjChcOpwpnCpMOmwonCgMOmwpzCiSBgY2hlY2tib3hgICovXG4gIGNsZWFyQ2hlY2soKTogdGhpcyB7XG4gICAgcmV0dXJuIHRoaXMuX2NoZWNrQWxsKGZhbHNlKTtcbiAgfVxuXG4gIHByaXZhdGUgX3JlZkNoZWNrKCk6IHRoaXMge1xuICAgIGNvbnN0IHZhbGlkRGF0YSA9IHRoaXMuX2RhdGEuZmlsdGVyKHcgPT4gIXcuZGlzYWJsZWQpO1xuICAgIGNvbnN0IGNoZWNrZWRMaXN0ID0gdmFsaWREYXRhLmZpbHRlcih3ID0+IHcuY2hlY2tlZCA9PT0gdHJ1ZSk7XG4gICAgdGhpcy5fYWxsQ2hlY2tlZCA9XG4gICAgICBjaGVja2VkTGlzdC5sZW5ndGggPiAwICYmIGNoZWNrZWRMaXN0Lmxlbmd0aCA9PT0gdmFsaWREYXRhLmxlbmd0aDtcbiAgICBjb25zdCBhbGxVbkNoZWNrZWQgPSB2YWxpZERhdGEuZXZlcnkodmFsdWUgPT4gIXZhbHVlLmNoZWNrZWQpO1xuICAgIHRoaXMuX2luZGV0ZXJtaW5hdGUgPSAhdGhpcy5fYWxsQ2hlY2tlZCAmJiAhYWxsVW5DaGVja2VkO1xuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgX2NoZWNrQWxsKGNoZWNrZWQ/OiBib29sZWFuKTogdGhpcyB7XG4gICAgY2hlY2tlZCA9IHR5cGVvZiBjaGVja2VkID09PSAndW5kZWZpbmVkJyA/IHRoaXMuX2FsbENoZWNrZWQgOiBjaGVja2VkO1xuICAgIHRoaXMuX2RhdGEuZmlsdGVyKHcgPT4gIXcuZGlzYWJsZWQpLmZvckVhY2goaSA9PiAoaS5jaGVja2VkID0gY2hlY2tlZCkpO1xuICAgIHJldHVybiB0aGlzLl9yZWZDaGVjaygpLl9jaGVja05vdGlmeSgpO1xuICB9XG5cbiAgX2NoZWNrU2VsZWN0aW9uKGk6IFNURGF0YSwgdmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpLmNoZWNrZWQgPSB2YWx1ZTtcbiAgICByZXR1cm4gdGhpcy5fcmVmQ2hlY2soKS5fY2hlY2tOb3RpZnkoKTtcbiAgfVxuXG4gIF9yb3dTZWxlY3Rpb24ocm93OiBTVENvbHVtblNlbGVjdGlvbik6IHRoaXMge1xuICAgIHJvdy5zZWxlY3QodGhpcy5fZGF0YSk7XG4gICAgcmV0dXJuIHRoaXMuX3JlZkNoZWNrKCkuX2NoZWNrTm90aWZ5KCk7XG4gIH1cblxuICBfY2hlY2tOb3RpZnkoKTogdGhpcyB7XG4gICAgY29uc3QgcmVzID0gdGhpcy5fZGF0YS5maWx0ZXIodyA9PiAhdy5kaXNhYmxlZCAmJiB3LmNoZWNrZWQgPT09IHRydWUpO1xuICAgIHRoaXMuY2hhbmdlRW1pdCgnY2hlY2tib3gnLCByZXMpO1xuICAgIC8vIEBkZXByZWNhdGVkIGFzIG9mIHYzXG4gICAgdGhpcy5jaGVja2JveENoYW5nZS5lbWl0KHJlcyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyNlbmRyZWdpb25cblxuICAvLyNyZWdpb24gcmFkaW9cblxuICAvKiogw6bCuMKFw6nCmcKkw6bCicKAw6bCnMKJIGByYWRpb2AgKi9cbiAgY2xlYXJSYWRpbygpOiB0aGlzIHtcbiAgICB0aGlzLl9kYXRhLmZpbHRlcih3ID0+IHcuY2hlY2tlZCkuZm9yRWFjaChpdGVtID0+IChpdGVtLmNoZWNrZWQgPSBmYWxzZSkpO1xuICAgIHRoaXMuY2hhbmdlRW1pdCgncmFkaW8nLCBudWxsKTtcbiAgICAvLyBAZGVwcmVjYXRlZCBhcyBvZiB2M1xuICAgIHRoaXMucmFkaW9DaGFuZ2UuZW1pdChudWxsKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIF9yZWZSYWRpbyhjaGVja2VkOiBib29sZWFuLCBpdGVtOiBTVERhdGEpOiB0aGlzIHtcbiAgICAvLyBpZiAoaXRlbS5kaXNhYmxlZCA9PT0gdHJ1ZSkgcmV0dXJuO1xuICAgIHRoaXMuX2RhdGEuZmlsdGVyKHcgPT4gIXcuZGlzYWJsZWQpLmZvckVhY2goaSA9PiAoaS5jaGVja2VkID0gZmFsc2UpKTtcbiAgICBpdGVtLmNoZWNrZWQgPSBjaGVja2VkO1xuICAgIHRoaXMuY2hhbmdlRW1pdCgncmFkaW8nLCBpdGVtKTtcbiAgICAvLyBAZGVwcmVjYXRlZCBhcyBvZiB2M1xuICAgIHRoaXMucmFkaW9DaGFuZ2UuZW1pdChpdGVtKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vI2VuZHJlZ2lvblxuXG4gIC8vI3JlZ2lvbiBidXR0b25zXG5cbiAgX2J0bkNsaWNrKGU6IEV2ZW50LCByZWNvcmQ6IGFueSwgYnRuOiBTVENvbHVtbkJ1dHRvbikge1xuICAgIGlmIChlKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICBpZiAoYnRuLnR5cGUgPT09ICdtb2RhbCcgfHwgYnRuLnR5cGUgPT09ICdzdGF0aWMnKSB7XG4gICAgICBjb25zdCBvYmogPSB7fTtcbiAgICAgIGNvbnN0IHsgbW9kYWwgfSA9IGJ0bjtcbiAgICAgIG9ialttb2RhbC5wYXJhbXNOYW1lXSA9IHJlY29yZDtcbiAgICAgIGNvbnN0IG9wdGlvbnM6IE1vZGFsSGVscGVyT3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIG1vZGFsKTtcbiAgICAgICh0aGlzLm1vZGFsSGVscGVyW1xuICAgICAgICBidG4udHlwZSA9PT0gJ21vZGFsJyA/ICdjcmVhdGUnIDogJ2NyZWF0ZVN0YXRpYydcbiAgICAgIF0gYXMgYW55KShcbiAgICAgICAgbW9kYWwuY29tcG9uZW50LFxuICAgICAgICBPYmplY3QuYXNzaWduKG9iaiwgbW9kYWwucGFyYW1zICYmIG1vZGFsLnBhcmFtcyhyZWNvcmQpKSxcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgIClcbiAgICAgICAgLnBpcGUoZmlsdGVyKHcgPT4gdHlwZW9mIHcgIT09ICd1bmRlZmluZWQnKSlcbiAgICAgICAgLnN1YnNjcmliZShyZXMgPT4gdGhpcy5idG5DYWxsYmFjayhyZWNvcmQsIGJ0biwgcmVzKSk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChidG4udHlwZSA9PT0gJ2RyYXdlcicpIHtcbiAgICAgIGNvbnN0IG9iaiA9IHt9O1xuICAgICAgY29uc3QgeyBkcmF3ZXIgfSA9IGJ0bjtcbiAgICAgIG9ialtkcmF3ZXIucGFyYW1zTmFtZV0gPSByZWNvcmQ7XG4gICAgICB0aGlzLmRyYXdlckhlbHBlclxuICAgICAgICAuY3JlYXRlKFxuICAgICAgICAgIGRyYXdlci50aXRsZSxcbiAgICAgICAgICBkcmF3ZXIuY29tcG9uZW50LFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24ob2JqLCBkcmF3ZXIucGFyYW1zICYmIGRyYXdlci5wYXJhbXMocmVjb3JkKSksXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgZHJhd2VyKSxcbiAgICAgICAgKVxuICAgICAgICAucGlwZShmaWx0ZXIodyA9PiB0eXBlb2YgdyAhPT0gJ3VuZGVmaW5lZCcpKVxuICAgICAgICAuc3Vic2NyaWJlKHJlcyA9PiB0aGlzLmJ0bkNhbGxiYWNrKHJlY29yZCwgYnRuLCByZXMpKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKGJ0bi50eXBlID09PSAnbGluaycpIHtcbiAgICAgIGNvbnN0IGNsaWNrUmVzID0gdGhpcy5idG5DYWxsYmFjayhyZWNvcmQsIGJ0bik7XG4gICAgICBpZiAodHlwZW9mIGNsaWNrUmVzID09PSAnc3RyaW5nJykge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKGNsaWNrUmVzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5idG5DYWxsYmFjayhyZWNvcmQsIGJ0bik7XG4gIH1cblxuICBwcml2YXRlIGJ0bkNhbGxiYWNrKHJlY29yZDogYW55LCBidG46IFNUQ29sdW1uQnV0dG9uLCBtb2RhbD86IGFueSkge1xuICAgIGlmICghYnRuLmNsaWNrKSByZXR1cm47XG4gICAgaWYgKHR5cGVvZiBidG4uY2xpY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICBzd2l0Y2ggKGJ0bi5jbGljaykge1xuICAgICAgICBjYXNlICdsb2FkJzpcbiAgICAgICAgICB0aGlzLmxvYWQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncmVsb2FkJzpcbiAgICAgICAgICB0aGlzLnJlbG9hZCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYnRuLmNsaWNrKHJlY29yZCwgbW9kYWwsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIF9idG5UZXh0KHJlY29yZDogYW55LCBidG46IFNUQ29sdW1uQnV0dG9uKSB7XG4gICAgaWYgKGJ0bi5mb3JtYXQpIHJldHVybiBidG4uZm9ybWF0KHJlY29yZCwgYnRuKTtcbiAgICByZXR1cm4gYnRuLnRleHQ7XG4gIH1cblxuICAvLyNlbmRyZWdpb25cblxuICAvLyNyZWdpb24gZXhwb3J0XG5cbiAgLyoqXG4gICAqIMOlwq/CvMOlwofCusOlwr3Ck8OlwonCjcOpwqHCtcOvwrzCjMOnwqHCrsOkwr/CncOlwrfCssOnwrvCj8OmwrPCqMOlwobCjCBgWGxzeE1vZHVsZWBcbiAgICogQHBhcmFtIG5ld0RhdGEgw6nCh8KNw6bClsKww6bCjMKHw6XCrsKaw6bClcKww6bCjcKuw6/CvMKMw6TCvsKLw6XCpsKCw6XCuMKMw6bCnMKbw6XCr8K8w6XCh8K6w6bCicKAw6bCnMKJw6bClcKww6bCjcKuw6nCncKew6XCuMK4w6bCnMKJw6fClMKoXG4gICAqIEBwYXJhbSBvcHQgw6nCosKdw6XCpMKWw6XCj8KCw6bClcKwXG4gICAqL1xuICBleHBvcnQobmV3RGF0YT86IGFueVtdLCBvcHQ/OiBTVEV4cG9ydE9wdGlvbnMpIHtcbiAgICAobmV3RGF0YSA/IG9mKG5ld0RhdGEpIDogb2YodGhpcy5fZGF0YSkpLnN1YnNjcmliZSgocmVzOiBhbnlbXSkgPT5cbiAgICAgIHRoaXMuZXhwb3J0U3J2LmV4cG9ydChcbiAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0LCA8U1RFeHBvcnRPcHRpb25zPntcbiAgICAgICAgICBfZDogcmVzLFxuICAgICAgICAgIF9jOiB0aGlzLl9jb2x1bW5zLFxuICAgICAgICB9KSxcbiAgICAgICksXG4gICAgKTtcbiAgfVxuXG4gIC8vI2VuZHJlZ2lvblxuXG4gIHByaXZhdGUgdXBkYXRlQ29sdW1ucygpIHtcbiAgICB0aGlzLl9jb2x1bW5zID0gdGhpcy5jb2x1bW5Tb3VyY2UucHJvY2Vzcyh0aGlzLmNvbHVtbnMpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDbGFzcygpIHtcbiAgICB1cGRhdGVIb3N0Q2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLnJlbmRlcmVyLCB7XG4gICAgICBbYHN0YF06IHRydWUsXG4gICAgICBbYHN0X19wLSR7dGhpcy5wYWdlLnBsYWNlbWVudH1gXTogdGhpcy5wYWdlLnBsYWNlbWVudCxcbiAgICAgIFtgYW50LXRhYmxlLXJlcF9faGlkZS1oZWFkZXItZm9vdGVyYF06IHRoaXMucmVzcG9uc2l2ZUhpZGVIZWFkZXJGb290ZXIsXG4gICAgfSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5jb2x1bW5Tb3VyY2UucmVzdG9yZUFsbFJlbmRlcih0aGlzLl9jb2x1bW5zKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKFxuICAgIGNoYW5nZXM6IHsgW1AgaW4ga2V5b2YgdGhpc10/OiBTaW1wbGVDaGFuZ2UgfSAmIFNpbXBsZUNoYW5nZXMsXG4gICk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLmNvbHVtbnMpIHtcbiAgICAgIHRoaXMudXBkYXRlQ29sdW1ucygpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5kYXRhICYmIGNoYW5nZXMuZGF0YS5jdXJyZW50VmFsdWUpIHtcbiAgICAgIHRoaXMuX2xvYWQoKTtcbiAgICB9XG4gICAgdGhpcy5zZXRDbGFzcygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZWxvbkkxOG4kLnVuc3Vic2NyaWJlKCk7XG4gICAgaWYgKHRoaXMuaTE4biQpIHRoaXMuaTE4biQudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5nWm9ycm9BbnRkTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XG5cbmltcG9ydCB7IERlbG9uVXRpbE1vZHVsZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IERlbG9uQUNMTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FjbCc7XG5cbmltcG9ydCB7IFNUQ29tcG9uZW50IH0gZnJvbSAnLi90YWJsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU1RSb3dEaXJlY3RpdmUgfSBmcm9tICcuL3RhYmxlLXJvdy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU1RDb25maWcgfSBmcm9tICcuL3RhYmxlLmNvbmZpZyc7XG5cbmNvbnN0IENPTVBPTkVOVFMgPSBbU1RDb21wb25lbnQsIFNUUm93RGlyZWN0aXZlXTtcblxuQE5nTW9kdWxlKHtcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIERlbG9uVXRpbE1vZHVsZSxcbiAgICBEZWxvbkFDTE1vZHVsZSxcbiAgICBOZ1pvcnJvQW50ZE1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbLi4uQ09NUE9ORU5UU10sXG4gIGV4cG9ydHM6IFsuLi5DT01QT05FTlRTXSxcbn0pXG5leHBvcnQgY2xhc3MgU1RNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4geyBuZ01vZHVsZTogU1RNb2R1bGUsIHByb3ZpZGVyczogW1NUQ29uZmlnXSB9O1xuICB9XG59XG4iXSwibmFtZXMiOlsidHNsaWJfMS5fX3ZhbHVlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O3NCQVd3RCxFQUFFO29CQUNKLEVBQUU7Ozs7Ozs7O0lBRXRELHlCQUFHOzs7Ozs7SUFBSCxVQUFJLElBQVksRUFBRSxJQUFZLEVBQUUsR0FBcUI7UUFDbkQsSUFBSSxDQUFDLElBQUksS0FBSyxPQUFPLEdBQUcsUUFBUSxHQUFHLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQztLQUN4RDs7Ozs7SUFFRCw4QkFBUTs7OztJQUFSLFVBQVMsSUFBWTtRQUNuQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDMUI7Ozs7O0lBRUQsNEJBQU07Ozs7SUFBTixVQUFPLElBQVk7UUFDakIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3hCOztnQkFmRixVQUFVOztzQkFUWDs7O0lBbUNFLHdCQUNVLEtBQ1EsTUFBbUI7UUFEM0IsUUFBRyxHQUFILEdBQUc7UUFDSyxXQUFNLEdBQU4sTUFBTSxDQUFhO0tBQ2pDOzs7O0lBRUosaUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUMvQzs7Z0JBZkYsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRTs7OztnQkF4QmpDLFdBQVc7Z0JBa0NlLFdBQVcsdUJBQWxDLElBQUk7OztxQkFS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