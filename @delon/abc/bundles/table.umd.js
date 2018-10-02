/**
 * @license ng-alain(cipchk@qq.com) v2.0.0-beta.3-ed90aa6
 * (c) 2018 Cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@delon/acl'), require('@delon/theme'), require('@delon/util'), require('@angular/common'), require('rxjs'), require('rxjs/operators'), require('@delon/abc/xlsx'), require('@angular/router'), require('@angular/forms'), require('ng-zorro-antd')) :
    typeof define === 'function' && define.amd ? define('@delon/abc/table', ['exports', '@angular/core', '@delon/acl', '@delon/theme', '@delon/util', '@angular/common', 'rxjs', 'rxjs/operators', '@delon/abc/xlsx', '@angular/router', '@angular/forms', 'ng-zorro-antd'], factory) :
    (factory((global.delon = global.delon || {}, global.delon.abc = global.delon.abc || {}, global.delon.abc.table = {}),global.ng.core,global.delon.acl,global.delon.theme,global.delon.util,global.ng.common,global.rxjs,global.rxjs.operators,global.delon.abc.xlsx,global.ng.router,global.ng.forms,global.ngZorro.antd));
}(this, (function (exports,core,acl,theme,util,common,rxjs,operators,xlsx,router,forms,ngZorroAntd) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

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
            { type: core.Injectable }
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
            { type: core.Directive, args: [{ selector: '[st-row]' },] }
        ];
        /** @nocollapse */
        STRowDirective.ctorParameters = function () {
            return [
                { type: core.TemplateRef },
                { type: STRowSource, decorators: [{ type: core.Host }] }
            ];
        };
        STRowDirective.propDecorators = {
            id: [{ type: core.Input, args: ['st-row',] }],
            type: [{ type: core.Input }]
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
                footerHeight: 55
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
        }
        return STConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var STColumnSource = /** @class */ (function () {
        function STColumnSource(rowSource, acl$$1, i18nSrv, cog) {
            this.rowSource = rowSource;
            this.acl = acl$$1;
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
                var _b = this.cog, modal = _b.modal, drawer = _b.drawer, popTitle = _b.popTitle;
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
                            item["_type"] = 2;
                            if (typeof item.popTitle === 'undefined') {
                                item.popTitle = popTitle;
                            }
                        }
                        if (item.children && item.children.length > 0) {
                            item["_type"] = 3;
                            item.children = this.btnCoerce(item.children);
                        }
                        if (!item["_type"]) {
                            item["_type"] = 1;
                        }
                        // i18n
                        if (item.i18n && this.i18nSrv) {
                            item.text = this.i18nSrv.fanyi(item.i18n);
                        }
                        ret.push(item);
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (list_1_1 && !list_1_1.done && (_a = list_1.return))
                            _a.call(list_1);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
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
                catch (e_2_1) {
                    e_2 = { error: e_2_1 };
                }
                finally {
                    try {
                        if (list_2_1 && !list_2_1.done && (_a = list_2.return))
                            _a.call(list_2);
                    }
                    finally {
                        if (e_2)
                            throw e_2.error;
                    }
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
                    res.icon = "anticon anticon-filter";
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
                var copyColumens = /** @type {?} */ (util.deepCopy(list));
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
                                item.width = (item.selections.length > 0 ? 60 : 50) + "px";
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
                            ( /** @type {?} */(item)).type = '';
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
                catch (e_3_1) {
                    e_3 = { error: e_3_1 };
                }
                finally {
                    try {
                        if (copyColumens_1_1 && !copyColumens_1_1.done && (_a = copyColumens_1.return))
                            _a.call(copyColumens_1);
                    }
                    finally {
                        if (e_3)
                            throw e_3.error;
                    }
                }
                if (checkboxCount > 1)
                    throw new Error("[st]: just only one column checkbox");
                if (radioCount > 1)
                    throw new Error("[st]: just only one column radio");
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
            { type: core.Injectable }
        ];
        /** @nocollapse */
        STColumnSource.ctorParameters = function () {
            return [
                { type: STRowSource, decorators: [{ type: core.Host }] },
                { type: acl.ACLService, decorators: [{ type: core.Optional }] },
                { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [theme.ALAIN_I18N_TOKEN,] }] },
                { type: STConfig }
            ];
        };
        return STColumnSource;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var STDataSource = /** @class */ (function () {
        function STDataSource(http, currenty, date, yn, number) {
            this.http = http;
            this.currenty = currenty;
            this.date = date;
            this.yn = yn;
            this.number = number;
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
                        data$ = _this.getByHttp(data, options).pipe(operators.map(function (result) {
                            /** @type {?} */
                            var ret = util.deepGet(result, /** @type {?} */ (res.reName.list), []);
                            if (ret == null || !Array.isArray(ret)) {
                                ret = [];
                            }
                            /** @type {?} */
                            var resultTotal = res.reName.total &&
                                util.deepGet(result, /** @type {?} */ (res.reName.total), null);
                            retTotal = resultTotal == null ? total || 0 : +resultTotal;
                            return /** @type {?} */ (ret);
                        }), operators.catchError(function (err) {
                            rejectPromise(err);
                            return [];
                        }));
                    }
                    else if (Array.isArray(data)) {
                        data$ = rxjs.of(data);
                    }
                    else {
                        // a cold observable
                        data$ = data;
                    }
                    if (!isRemote) {
                        data$ = data$.pipe(
                        // sort
                        operators.map(function (result) {
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
                        operators.map(function (result) {
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
                        operators.map(function (result) {
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
                        data$ = data$.pipe(operators.map(function (result) { return res.process(result); }));
                    }
                    // data accelerator
                    data$ = data$.pipe(operators.map(function (result) {
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
                        catch (e_1_1) {
                            e_1 = { error: e_1_1 };
                        }
                        finally {
                            try {
                                if (result_1_1 && !result_1_1.done && (_a = result_1.return))
                                    _a.call(result_1);
                            }
                            finally {
                                if (e_1)
                                    throw e_1.error;
                            }
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
                if (col.format)
                    return col.format(item, col);
                /** @type {?} */
                var value = util.deepGet(item, /** @type {?} */ (col.index), col.default);
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
            { type: core.Injectable }
        ];
        /** @nocollapse */
        STDataSource.ctorParameters = function () {
            return [
                { type: theme._HttpClient },
                { type: theme.CNCurrencyPipe, decorators: [{ type: core.Host }] },
                { type: theme.DatePipe, decorators: [{ type: core.Host }] },
                { type: theme.YNPipe, decorators: [{ type: core.Host }] },
                { type: common.DecimalPipe, decorators: [{ type: core.Host }] }
            ];
        };
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
                    var val = util.deepGet(item, /** @type {?} */ (col.index), '');
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
                // region: column
                for (var i = 0; i < cc; i++) {
                    sheet[String.fromCharCode(65 + i) + "1"] = {
                        t: 's',
                        v: colData[i].title,
                    };
                }
                // endregion
                // region: content
                for (var i = 0; i < dc; i++) {
                    for (var j = 0; j < cc; j++) {
                        sheet["" + String.fromCharCode(65 + j) + (i + 2)] = this._stGet(opt._d[i], colData[j]);
                    }
                }
                // endregion
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
            { type: core.Injectable }
        ];
        /** @nocollapse */
        STExport.ctorParameters = function () {
            return [
                { type: xlsx.XlsxService, decorators: [{ type: core.Optional }] }
            ];
        };
        return STExport;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var STComponent = /** @class */ (function () {
        //#endregion
        function STComponent(cd, cog, router$$1, el, renderer, exportSrv, i18nSrv, modalHelper, drawerHelper, doc, columnSource, dataSource) {
            var _this = this;
            this.cd = cd;
            this.cog = cog;
            this.router = router$$1;
            this.el = el;
            this.renderer = renderer;
            this.exportSrv = exportSrv;
            this.modalHelper = modalHelper;
            this.drawerHelper = drawerHelper;
            this.doc = doc;
            this.columnSource = columnSource;
            this.dataSource = dataSource;
            this.totalTpl = "";
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
            this.error = new core.EventEmitter();
            /**
             * 变化时回调，包括：`pi`、`ps`、`checkbox`、`radio`、`sort`、`filter`、`click`、`dblClick` 变动
             */
            this.change = new core.EventEmitter();
            /**
             * 行单击多少时长之类为双击（单位：毫秒），默认：`200`
             */
            this.rowClickTime = 200;
            /**
             * checkbox变化时回调，参数为当前所选清单
             * @deprecated 使用 `change` 替代
             */
            this.checkboxChange = new core.EventEmitter();
            /**
             * radio变化时回调，参数为当前所选
             * @deprecated 使用 `change` 替代
             */
            this.radioChange = new core.EventEmitter();
            /**
             * 排序回调
             * @deprecated 使用 `change` 替代
             */
            this.sortChange = new core.EventEmitter();
            /**
             * 过滤变化时回调
             * @deprecated 使用 `change` 替代
             */
            this.filterChange = new core.EventEmitter();
            /**
             * 行单击回调
             * @deprecated 使用 `change` 替代
             */
            this.rowClick = new core.EventEmitter();
            /**
             * 行双击回调
             * @deprecated 使用 `change` 替代
             */
            this.rowDblClick = new core.EventEmitter();
            this.rowClickCount = 0;
            Object.assign(this, util.deepCopy(cog));
            if (i18nSrv) {
                this.i18n$ = i18nSrv.change
                    .pipe(operators.filter(function () { return _this._columns.length > 0; }))
                    .subscribe(function () { return _this.updateColumns(); });
            }
        }
        Object.defineProperty(STComponent.prototype, "req", {
            /** 请求体配置 */
            get: /**
             * 请求体配置
             * @return {?}
             */ function () {
                return this._req;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                var req = this.cog.req;
                /** @type {?} */
                var item = Object.assign({}, req, value);
                if (item.reName == null) {
                    item.reName = util.deepCopy(req.reName);
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
             */ function () {
                return this._res;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
             */ function () {
                return this._page;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                var page = this.cog.page;
                /** @type {?} */
                var item = Object.assign({}, util.deepCopy(page), value);
                var total = item.total;
                if (typeof total === 'string' && total.length) {
                    this.totalTpl = total;
                }
                else if (util.toBoolean(total)) {
                    this.totalTpl = "\u5171 {{total}} \u6761";
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
             */ function () {
                return this._multiSort;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                if (typeof value === 'boolean' && !util.toBoolean(value)) {
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
                if (pi === void 0) {
                    pi = 1;
                }
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
                if (( /** @type {?} */(e.target)).nodeName === 'INPUT')
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
                if (e)
                    e.stopPropagation();
                if (btn.type === 'modal' || btn.type === 'static') {
                    /** @type {?} */
                    var obj = {};
                    var modal = btn.modal;
                    obj[modal.paramsName] = record;
                    /** @type {?} */
                    var options = Object.assign({}, modal);
                    ( /** @type {?} */(this.modalHelper[btn.type === 'modal' ? 'create' : 'createStatic']))(modal.component, Object.assign(obj, modal.params && modal.params(record)), options)
                        .pipe(operators.filter(function (w) { return typeof w !== 'undefined'; }))
                        .subscribe(function (res) { return _this.btnCallback(record, btn, res); });
                    return;
                }
                else if (btn.type === 'drawer') {
                    /** @type {?} */
                    var obj = {};
                    var drawer = btn.drawer;
                    obj[drawer.paramsName] = record;
                    /** @type {?} */
                    var options = Object.assign({}, drawer);
                    this.drawerHelper.create(drawer.title, drawer.component, Object.assign(obj, drawer.params && drawer.params(record)), Object.assign({}, drawer))
                        .pipe(operators.filter(function (w) { return typeof w !== 'undefined'; }))
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
                (newData ? rxjs.of(newData) : rxjs.of(this._data)).subscribe(function (res) {
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
                util.updateHostClass(this.el.nativeElement, this.renderer, (_a = {},
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
                if (this.i18n$)
                    this.i18n$.unsubscribe();
            };
        STComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'st',
                        template: "<nz-table [nzData]=\"_data\"\r\n  [(nzPageIndex)]=\"pi\" (nzPageIndexChange)=\"_change('pi')\"\r\n  [(nzPageSize)]=\"ps\" (nzPageSizeChange)=\"_change('ps')\"\r\n  [nzTotal]=\"total\"\r\n  [nzShowPagination]=\"_isPagination\"\r\n  [nzFrontPagination]=\"false\"\r\n  [nzBordered]=\"bordered\"\r\n  [nzSize]=\"size\"\r\n  [nzLoading]=\"loading\"\r\n  [nzLoadingDelay]=\"loadingDelay\"\r\n  [nzScroll]=\"scroll\"\r\n  [nzTitle]=\"header\" [nzFooter]=\"footer\" [nzNoResult]=\"noResult\"\r\n  [nzPageSizeOptions]=\"page.pageSizes\"\r\n  [nzShowQuickJumper]=\"page.showQuickJumper\"\r\n  [nzShowSizeChanger]=\"page.showSize\"\r\n  [nzShowTotal]=\"totalTpl\">\r\n  <thead class=\"st__head\">\r\n    <tr>\r\n      <th *ngIf=\"expand\" [nzShowExpand]=\"expand\"></th>\r\n      <th *ngFor=\"let c of _columns; let index=index\" [nzWidth]=\"c.width\" [nzLeft]=\"c._left\" [nzRight]=\"c._right\" [ngClass]=\"c.className\"\r\n        [attr.colspan]=\"c.colSpan\" [attr.data-col]=\"c.indexKey\" [nzShowSort]=\"c._sort.enabled\" [nzSort]=\"c._sort.default\"\r\n        (nzSortChange)=\"sort(c, index, $event)\">\r\n        <ng-template #renderTitle [ngTemplateOutlet]=\"c.__renderTitle\" [ngTemplateOutletContext]=\"{$implicit: c, index: index }\"></ng-template>\r\n        <ng-container *ngIf=\"!c.__renderTitle; else renderTitle\">\r\n          <ng-container [ngSwitch]=\"c.type\">\r\n            <ng-container *ngSwitchCase=\"'checkbox'\">\r\n              <label nz-checkbox class=\"st__checkall\" [(ngModel)]=\"_allChecked\" [nzIndeterminate]=\"_indeterminate\" (ngModelChange)=\"_checkAll()\"></label>\r\n              <nz-dropdown *ngIf=\"c.selections.length\" class=\"st__checkselection\">\r\n                <span nz-dropdown>\r\n                  <i class=\"anticon anticon-down\"></i>\r\n                </span>\r\n                <ul nz-menu>\r\n                  <li nz-menu-item *ngFor=\"let rw of c.selections\" (click)=\"_rowSelection(rw)\" [innerHTML]=\"rw.text\">\r\n                  </li>\r\n                </ul>\r\n              </nz-dropdown>\r\n            </ng-container>\r\n            <ng-container *ngSwitchDefault>\r\n              <span [innerHTML]=\"c.title\"></span>\r\n            </ng-container>\r\n          </ng-container>\r\n          <nz-dropdown *ngIf=\"c.filter\"\r\n            class=\"st__filter\" nzTrigger=\"click\" [hasFilterButton]=\"true\" [nzClickHide]=\"false\"\r\n            [(nzVisible)]=\"c.filter.visible\">\r\n            <i class=\"{{c.filter.icon}}\" [ngClass]=\"{'ant-table-filter-selected': c.filter.default}\" nz-dropdown></i>\r\n            <ul nz-menu>\r\n              <ng-container *ngIf=\"c.filter.multiple\">\r\n                <li nz-menu-item *ngFor=\"let filter of c.filter.menus\">\r\n                  <label nz-checkbox [(ngModel)]=\"filter.checked\">{{filter.text}}</label>\r\n                </li>\r\n              </ng-container>\r\n              <ng-container *ngIf=\"!c.filter.multiple\">\r\n                <li nz-menu-item *ngFor=\"let filter of c.filter.menus\">\r\n                  <label nz-radio [ngModel]=\"filter.checked\" (ngModelChange)=\"_filterRadio(c, filter, $event)\">{{filter.text}}</label>\r\n                </li>\r\n              </ng-container>\r\n            </ul>\r\n            <div class=\"ant-table-filter-dropdown-btns\">\r\n              <a class=\"ant-table-filter-dropdown-link confirm\" (click)=\"c.filter.visible = false\">\r\n                <span (click)=\"_filterConfirm(c)\">{{c.filter.confirmText}}</span>\r\n              </a>\r\n              <a class=\"ant-table-filter-dropdown-link clear\" (click)=\"c.filter.visible = false\">\r\n                <span (click)=\"_filterClear(c)\">{{c.filter.clearText}}</span>\r\n              </a>\r\n            </div>\r\n          </nz-dropdown>\r\n        </ng-container>\r\n      </th>\r\n    </tr>\r\n  </thead>\r\n  <tbody class=\"st__body\">\r\n    <ng-container *ngFor=\"let i of _data; let index=index\">\r\n      <tr [attr.data-index]=\"index\" (click)=\"_rowClick($event, i, index)\">\r\n        <td *ngIf=\"expand\" [nzShowExpand]=\"expand\" [(nzExpand)]=\"i.expand\"></td>\r\n        <td *ngFor=\"let c of _columns; let cIdx=index\" [nzLeft]=\"c._left\" [nzRight]=\"c._right\" [nzCheckbox]=\"c.type === 'checkbox'\" [ngClass]=\"c.className\"\r\n          [attr.colspan]=\"c.colSpan\">\r\n          <span class=\"ant-table-rep__title\" [innerHTML]=\"c.title\"></span>\r\n          <ng-template #render [ngTemplateOutlet]=\"c.__render\" [ngTemplateOutletContext]=\"{$implicit: i, index: index, column: c }\"></ng-template>\r\n          <ng-container *ngIf=\"!c.__render; else render\">\r\n            <ng-container *ngIf=\"c.index\" [ngSwitch]=\"c.type\">\r\n              <ng-container *ngSwitchCase=\"'checkbox'\">\r\n                <label nz-checkbox [nzDisabled]=\"i.disabled\" [ngModel]=\"i.checked\" (ngModelChange)=\"_checkSelection(i, $event)\"></label>\r\n              </ng-container>\r\n              <ng-container *ngSwitchCase=\"'radio'\">\r\n                <label nz-radio [nzDisabled]=\"i.disabled\" [ngModel]=\"i.checked\" (ngModelChange)=\"_refRadio($event, i)\"></label>\r\n              </ng-container>\r\n              <ng-container *ngSwitchCase=\"'link'\">\r\n                <a (click)=\"_click($event, i, c)\" [innerHTML]=\"i._values[cIdx]\"></a>\r\n              </ng-container>\r\n              <ng-container *ngSwitchCase=\"'tag'\">\r\n                <nz-tag [nzColor]=\"c.tag[i._values[cIdx]].color\">{{c.tag[i._values[cIdx]].text || i._values[cIdx]}}</nz-tag>\r\n              </ng-container>\r\n              <ng-container *ngSwitchCase=\"'badge'\">\r\n                <nz-badge [nzStatus]=\"c.badge[i._values[cIdx]].color\" [nzText]=\"c.badge[i._values[cIdx]].text || i._values[cIdx]\"></nz-badge>\r\n              </ng-container>\r\n              <span *ngSwitchDefault [innerHTML]=\"i._values[cIdx]\"></span>\r\n            </ng-container>\r\n            <ng-container *ngFor=\"let btn of c.buttons; let last=last\">\r\n              <ng-container *ngIf=\"btn.iif(i, btn, c)\" [ngSwitch]=\"btn._type\">\r\n                <ng-container *ngSwitchCase=\"2\">\r\n                  <nz-popconfirm [nzTitle]=\"btn.popTitle\" (nzOnConfirm)=\"_btnClick($event, i, btn)\">\r\n                    <a nz-popconfirm [innerHTML]=\"_btnText(i, btn)\"></a>\r\n                  </nz-popconfirm>\r\n                </ng-container>\r\n                <ng-container *ngSwitchCase=\"3\">\r\n                  <nz-dropdown>\r\n                    <a class=\"ant-dropdown-link\" nz-dropdown>\r\n                      <span [innerHTML]=\"_btnText(i, btn)\"></span>\r\n                      <i class=\"anticon anticon-down\"></i>\r\n                    </a>\r\n                    <ul nz-menu>\r\n                      <ng-container *ngFor=\"let subBtn of btn.children\">\r\n                        <li nz-menu-item *ngIf=\"subBtn.iif(i, subBtn, c)\">\r\n                          <nz-popconfirm *ngIf=\"subBtn._type === 2\" [nzTitle]=\"subBtn.popTitle\" (nzOnConfirm)=\"_btnClick($event, i, subBtn)\">\r\n                            <span nz-popconfirm [innerHTML]=\"_btnText(i, subBtn)\"></span>\r\n                          </nz-popconfirm>\r\n                          <span *ngIf=\"subBtn._type !== 2\" (click)=\"_btnClick($event, i, subBtn)\" [innerHTML]=\"_btnText(i, subBtn)\"></span>\r\n                        </li>\r\n                      </ng-container>\r\n                    </ul>\r\n                  </nz-dropdown>\r\n                </ng-container>\r\n                <a *ngSwitchDefault (click)=\"_btnClick($event, i, btn)\" [innerHTML]=\"_btnText(i, btn)\"></a>\r\n                <nz-divider *ngIf=\"!last\" nzType=\"vertical\"></nz-divider>\r\n              </ng-container>\r\n            </ng-container>\r\n            <ng-template [ngIf]=\"!c.__renderExpanded\" [ngTemplateOutlet]=\"c.__renderExpanded\" [ngTemplateOutletContext]=\"{$implicit: i, index: index, column: c }\"></ng-template>\r\n          </ng-container>\r\n        </td>\r\n      </tr>\r\n      <tr [nzExpand]=\"i.expand\">\r\n        <td></td>\r\n        <td [attr.colspan]=\"_columns.length\">\r\n          <ng-template [ngTemplateOutlet]=\"expand\" [ngTemplateOutletContext]=\"{$implicit: i, index: index }\"></ng-template>\r\n        </td>\r\n      </tr>\r\n    </ng-container>\r\n    <ng-template [ngIf]=\"!loading\" [ngTemplateOutlet]=\"body\"></ng-template>\r\n  </tbody>\r\n  <ng-template #totalTpl let-range=\"range\" let-total>{{ renderTotal(total, range) }}</ng-template>\r\n</nz-table>\r\n",
                        providers: [
                            STDataSource,
                            STRowSource,
                            STColumnSource,
                            STExport,
                            theme.CNCurrencyPipe,
                            theme.DatePipe,
                            theme.YNPipe,
                            common.DecimalPipe,
                        ],
                        preserveWhitespaces: false,
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        STComponent.ctorParameters = function () {
            return [
                { type: core.ChangeDetectorRef },
                { type: STConfig },
                { type: router.Router },
                { type: core.ElementRef },
                { type: core.Renderer2 },
                { type: STExport },
                { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [theme.ALAIN_I18N_TOKEN,] }] },
                { type: theme.ModalHelper },
                { type: theme.DrawerHelper },
                { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
                { type: STColumnSource },
                { type: STDataSource }
            ];
        };
        STComponent.propDecorators = {
            data: [{ type: core.Input }],
            req: [{ type: core.Input }],
            res: [{ type: core.Input }],
            columns: [{ type: core.Input }],
            ps: [{ type: core.Input }],
            pi: [{ type: core.Input }],
            total: [{ type: core.Input }],
            page: [{ type: core.Input }],
            loading: [{ type: core.Input }],
            loadingDelay: [{ type: core.Input }],
            bordered: [{ type: core.Input }],
            size: [{ type: core.Input }],
            scroll: [{ type: core.Input }],
            multiSort: [{ type: core.Input }],
            header: [{ type: core.Input }],
            footer: [{ type: core.Input }],
            body: [{ type: core.Input }],
            expand: [{ type: core.Input }],
            noResult: [{ type: core.Input }],
            widthConfig: [{ type: core.Input }],
            error: [{ type: core.Output }],
            change: [{ type: core.Output }],
            rowClickTime: [{ type: core.Input }],
            responsiveHideHeaderFooter: [{ type: core.Input }],
            checkboxChange: [{ type: core.Output }],
            radioChange: [{ type: core.Output }],
            sortChange: [{ type: core.Output }],
            filterChange: [{ type: core.Output }],
            rowClick: [{ type: core.Output }],
            rowDblClick: [{ type: core.Output }]
        };
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Object)
        ], STComponent.prototype, "ps", void 0);
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Object)
        ], STComponent.prototype, "pi", void 0);
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Object)
        ], STComponent.prototype, "total", void 0);
        __decorate([
            util.InputBoolean(),
            __metadata("design:type", Object)
        ], STComponent.prototype, "loading", void 0);
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Object)
        ], STComponent.prototype, "loadingDelay", void 0);
        __decorate([
            util.InputBoolean(),
            __metadata("design:type", Object)
        ], STComponent.prototype, "bordered", void 0);
        __decorate([
            util.InputNumber(),
            __metadata("design:type", Object)
        ], STComponent.prototype, "rowClickTime", void 0);
        __decorate([
            util.InputBoolean(),
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
            { type: core.NgModule, args: [{
                        schemas: [core.NO_ERRORS_SCHEMA],
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            util.DelonUtilModule,
                            acl.DelonACLModule,
                            ngZorroAntd.NgZorroAntdModule,
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

    exports.STComponent = STComponent;
    exports.STRowDirective = STRowDirective;
    exports.STConfig = STConfig;
    exports.STModule = STModule;
    exports.STColumnSource = STColumnSource;
    exports.STDataSource = STDataSource;
    exports.STExport = STExport;
    exports.ɵa = STRowSource;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm5nOi8vQGRlbG9uL2FiYy90YWJsZS90YWJsZS1yb3cuZGlyZWN0aXZlLnRzIiwibmc6Ly9AZGVsb24vYWJjL3RhYmxlL3RhYmxlLmNvbmZpZy50cyIsIm5nOi8vQGRlbG9uL2FiYy90YWJsZS90YWJsZS1jb2x1bW4tc291cmNlLnRzIiwibmc6Ly9AZGVsb24vYWJjL3RhYmxlL3RhYmxlLWRhdGEtc291cmNlLnRzIiwibmc6Ly9AZGVsb24vYWJjL3RhYmxlL3RhYmxlLWV4cG9ydC50cyIsIm5nOi8vQGRlbG9uL2FiYy90YWJsZS90YWJsZS5jb21wb25lbnQudHMiLCJuZzovL0BkZWxvbi9hYmMvdGFibGUvdGFibGUubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBEaXJlY3RpdmUsXHJcbiAgSW5wdXQsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgT25Jbml0LFxyXG4gIEluamVjdGFibGUsXHJcbiAgSG9zdCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNUUm93U291cmNlIHtcclxuICBwcml2YXRlIHRpdGxlczogeyBba2V5OiBzdHJpbmddOiBUZW1wbGF0ZVJlZjxhbnk+IH0gPSB7fTtcclxuICBwcml2YXRlIHJvd3M6IHsgW2tleTogc3RyaW5nXTogVGVtcGxhdGVSZWY8YW55PiB9ID0ge307XHJcblxyXG4gIGFkZCh0eXBlOiBzdHJpbmcsIHBhdGg6IHN0cmluZywgcmVmOiBUZW1wbGF0ZVJlZjxhbnk+KSB7XHJcbiAgICB0aGlzW3R5cGUgPT09ICd0aXRsZScgPyAndGl0bGVzJyA6ICdyb3dzJ11bcGF0aF0gPSByZWY7XHJcbiAgfVxyXG5cclxuICBnZXRUaXRsZShwYXRoOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLnRpdGxlc1twYXRoXTtcclxuICB9XHJcblxyXG4gIGdldFJvdyhwYXRoOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLnJvd3NbcGF0aF07XHJcbiAgfVxyXG59XHJcblxyXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbc3Qtcm93XScgfSlcclxuZXhwb3J0IGNsYXNzIFNUUm93RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoJ3N0LXJvdycpXHJcbiAgaWQ6IHN0cmluZztcclxuXHJcbiAgQElucHV0KClcclxuICB0eXBlOiAndGl0bGUnO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcmVmOiBUZW1wbGF0ZVJlZjxhbnk+LFxyXG4gICAgQEhvc3QoKSBwcml2YXRlIHNvdXJjZTogU1RSb3dTb3VyY2UsXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc291cmNlLmFkZCh0aGlzLnR5cGUsIHRoaXMuaWQsIHRoaXMucmVmKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBTVE11bHRpU29ydCxcclxuICBTVFJlcSxcclxuICBTVFJlcyxcclxuICBTVFBhZ2UsXHJcbiAgU1RDb2x1bW5CdXR0b25Nb2RhbENvbmZpZyxcclxuICBTVENvbHVtbkJ1dHRvbkRyYXdlckNvbmZpZyxcclxufSBmcm9tICcuL3RhYmxlLmludGVyZmFjZXMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNUQ29uZmlnIHtcclxuICAvKipcclxuICAgKiDDqMK1wrfDpcKnwovDqcKhwrXDp8KgwoHDr8K8wozDqcK7wpjDqMKuwqTDpMK4wrrDr8K8wppgMWBcclxuICAgKi9cclxuICBwaT86IG51bWJlcjtcclxuICAvKipcclxuICAgKiDDpsKvwo/DqcKhwrXDpsKVwrDDqcKHwo/Dr8K8wozDpcK9wpPDqMKuwr7Dp8K9wq7DpMK4wrogYDBgIMOowqHCqMOnwqTCusOkwrjCjcOlwojChsOpwqHCtcOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmAxMGBcclxuICAgKi9cclxuICBwcz86IG51bWJlcjtcclxuICAvKipcclxuICAgKiDDpsKYwq/DpcKQwqbDpsKYwr7Dp8KkwrrDqMK+wrnDpsKhwoZcclxuICAgKi9cclxuICBib3JkZXJlZD86IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICogdGFibGXDpcKkwqfDpcKwwo9cclxuICAgKi9cclxuICBzaXplPzogJ3NtYWxsJyB8ICdtaWRkbGUnIHwgJ2RlZmF1bHQnID0gJ2RlZmF1bHQnO1xyXG4gIC8qKlxyXG4gICAqIMOmwpjCr8OlwpDCpsOpwprCkMOowpfCj8OlwqTCtMOlwpLCjMOlwrDCvsOvwrzCjMOlwr3Ck8OlwrDCj8OlwrHCj8OlwrnClcOkwrjCi8OmwonCjcOmwpjCvsOnwqTCusOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmBmYWxzZWBcclxuICAgKi9cclxuICByZXNwb25zaXZlSGlkZUhlYWRlckZvb3Rlcj8gPSBmYWxzZTtcclxuICAvKiogw6jCr8K3w6bCscKCw6TCvcKTw6nChcKNw6fCvcKuICovXHJcbiAgcmVxPzogU1RSZXEgPSB7XHJcbiAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgYWxsSW5Cb2R5OiBmYWxzZSxcclxuICAgIHJlTmFtZTogeyBwaTogJ3BpJywgcHM6ICdwcycgfSxcclxuICB9O1xyXG4gIC8qKiDDqMK/wpTDpcKbwp7DpMK9wpPDqcKFwo3Dp8K9wq4gKi9cclxuICByZXM/OiBTVFJlcyA9IHtcclxuICAgIHJlTmFtZTogeyBsaXN0OiBbJ2xpc3QnXSwgdG90YWw6IFsndG90YWwnXSB9LFxyXG4gIH07XHJcbiAgLyoqIMOowr/ClMOlwpvCnsOkwr3Ck8OpwoXCjcOnwr3CriAqL1xyXG4gIHBhZ2U/OiBTVFBhZ2UgPSB7XHJcbiAgICBmcm9udDogdHJ1ZSxcclxuICAgIHplcm9JbmRleGVkOiBmYWxzZSxcclxuICAgIHBsYWNlbWVudDogJ3JpZ2h0JyxcclxuICAgIHNob3c6IHRydWUsXHJcbiAgICBzaG93U2l6ZTogZmFsc2UsXHJcbiAgICBwYWdlU2l6ZXM6IFsxMCwgMjAsIDMwLCA0MCwgNTBdLFxyXG4gICAgc2hvd1F1aWNrSnVtcGVyOiBmYWxzZSxcclxuICAgIHRvdGFsOiB0cnVlLFxyXG4gICAgaW5kZXhSZXNldDogdHJ1ZSxcclxuICAgIHRvVG9wOiB0cnVlLFxyXG4gICAgdG9Ub3BPZmZzZXQ6IDEwMCxcclxuICB9O1xyXG4gIC8qKlxyXG4gICAqIMOpwofCjcOlwpHCvcOlwpDCjcOmwo7CksOlwrrCj8OlwoDCvMOvwrzCjGBjb2x1bW5zYCDDp8KawoTDqcKHwo3DpcKRwr3DpcKQwo3DqcKrwpjDpMK6wo7DpcKxwp7DpsKAwqdcclxuICAgKi9cclxuICBzb3J0UmVOYW1lPzogeyBhc2NlbmQ/OiBzdHJpbmc7IGRlc2NlbmQ/OiBzdHJpbmcgfTtcclxuICAvKipcclxuICAgKiDDpsKYwq/DpcKQwqbDpcKkwprDpsKOwpLDpcK6wo/Dr8K8wozDpcK9wpMgYHNvcnRgIMOlwqTCmsOkwrjCqsOnwpvCuMOlwpDCjMOlwoDCvMOmwpfCtsOowofCqsOlworCqMOlwpDCiMOlwrnCtsOvwrzCjMOlwrvCusOowq7CrsOlwpDCjsOnwqvCr8OmwpTCr8OmwozCgcOmwpfCtsOkwr3Cv8OnwpTCqFxyXG4gICAqL1xyXG4gIG11bHRpU29ydD86IGJvb2xlYW4gfCBTVE11bHRpU29ydCA9IGZhbHNlO1xyXG4gIC8qKlxyXG4gICAqIMOmwozCicOpwpLCrsOmwqjCocOmwoDCgcOmwqHChsOpwoXCjcOnwr3CrlxyXG4gICAqL1xyXG4gIG1vZGFsPzogU1RDb2x1bW5CdXR0b25Nb2RhbENvbmZpZyA9IHtcclxuICAgIHBhcmFtc05hbWU6ICdyZWNvcmQnLFxyXG4gICAgc2l6ZTogJ2xnJyxcclxuICAgIGV4YWN0OiB0cnVlLFxyXG4gIH07XHJcbiAgLyoqXHJcbiAgICogw6bCjMKJw6nCksKuw6bCisK9w6XCscKJw6nChcKNw6fCvcKuXHJcbiAgICovXHJcbiAgZHJhd2VyPzogU1RDb2x1bW5CdXR0b25EcmF3ZXJDb25maWcgPSB7XHJcbiAgICBwYXJhbXNOYW1lOiAncmVjb3JkJyxcclxuICAgIHNpemU6ICdtZCcsXHJcbiAgICBmb290ZXI6IHRydWUsXHJcbiAgICBmb290ZXJIZWlnaHQ6IDU1XHJcbiAgfTtcclxuICAvKipcclxuICAgKiDDpsKwwpTDpsKzwqHDp8Khwq7DqMKuwqTDpsKhwobDpcKGwoXDpcKuwrlcclxuICAgKi9cclxuICBwb3BUaXRsZT8gPSAnw6fCocKuw6jCrsKkw6XCiMKgw6nCmcKkw6XCkMKXw6/CvMKfJztcclxuICAvKipcclxuICAgKiDDqMKhwozDpcKNwpXDpcKHwrvDpcKkwprDpcKwwpHDpsKXwrbDqcKVwr/DpMK5wovDp8KxwrvDpMK4wrrDpcKPwozDpcKHwrvDr8K8wojDpcKNwpXDpMK9wo3Dr8K8wprDpsKvwqvDp8KnwpLDr8K8wonDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgMjAwYFxyXG4gICAqL1xyXG4gIHJvd0NsaWNrVGltZT8gPSAyMDA7XHJcbiAgLyoqXHJcbiAgICogw6jCv8KHw6bCu8Kkw6bCjMKJw6nCksKuw6fCocKuw6jCrsKkw6bClsKHw6bCnMKsw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYMOnwqHCrsOowq7CpGBcclxuICAgKi9cclxuICBmaWx0ZXJDb25maXJtVGV4dD8gPSAnw6fCocKuw6jCrsKkJztcclxuICAvKipcclxuICAgKiDDqMK/wofDpsK7wqTDpsKMwonDqcKSwq7DqcKHwo3Dp8K9wq7DpsKWwofDpsKcwqzDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgw6nCh8KNw6fCvcKuYFxyXG4gICAqL1xyXG4gIGZpbHRlckNsZWFyVGV4dD8gPSAnw6nCh8KNw6fCvcKuJztcclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgSW5qZWN0LCBIb3N0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFDTFNlcnZpY2UgfSBmcm9tICdAZGVsb24vYWNsJztcclxuaW1wb3J0IHsgQUxBSU5fSTE4Tl9UT0tFTiwgQWxhaW5JMThOU2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XHJcbmltcG9ydCB7IGRlZXBDb3B5IH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xyXG5cclxuaW1wb3J0IHtcclxuICBTVENvbHVtbixcclxuICBTVENvbHVtbkJ1dHRvbixcclxuICBTVENvbHVtblNvcnQsXHJcbiAgU1RDb2x1bW5GaWx0ZXIsXHJcbn0gZnJvbSAnLi90YWJsZS5pbnRlcmZhY2VzJztcclxuaW1wb3J0IHsgU1RSb3dTb3VyY2UgfSBmcm9tICcuL3RhYmxlLXJvdy5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBTVENvbmZpZyB9IGZyb20gJy4vdGFibGUuY29uZmlnJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU1RTb3J0TWFwIGV4dGVuZHMgU1RDb2x1bW5Tb3J0IHtcclxuICAvKiogw6bCmMKvw6XCkMKmw6XCkMKvw6fClMKow6bCjsKSw6XCusKPICovXHJcbiAgZW5hYmxlZD86IGJvb2xlYW47XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNUQ29sdW1uU291cmNlIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBIb3N0KCkgcHJpdmF0ZSByb3dTb3VyY2U6IFNUUm93U291cmNlLFxyXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBhY2w6IEFDTFNlcnZpY2UsXHJcbiAgICBAT3B0aW9uYWwoKVxyXG4gICAgQEluamVjdChBTEFJTl9JMThOX1RPS0VOKVxyXG4gICAgcHJpdmF0ZSBpMThuU3J2OiBBbGFpbkkxOE5TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjb2c6IFNUQ29uZmlnLFxyXG4gICkge31cclxuXHJcbiAgcHJpdmF0ZSBidG5Db2VyY2UobGlzdDogU1RDb2x1bW5CdXR0b25bXSk6IFNUQ29sdW1uQnV0dG9uW10ge1xyXG4gICAgaWYgKCFsaXN0KSByZXR1cm4gW107XHJcbiAgICBjb25zdCByZXQ6IFNUQ29sdW1uQnV0dG9uW10gPSBbXTtcclxuICAgIGNvbnN0IHsgbW9kYWwsIGRyYXdlciwgcG9wVGl0bGUgfSA9IHRoaXMuY29nO1xyXG5cclxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBsaXN0KSB7XHJcbiAgICAgIGlmICh0aGlzLmFjbCAmJiBpdGVtLmFjbCAmJiAhdGhpcy5hY2wuY2FuKGl0ZW0uYWNsKSkge1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoaXRlbS50eXBlID09PSAnbW9kYWwnIHx8IGl0ZW0udHlwZSA9PT0gJ3N0YXRpYycpIHtcclxuICAgICAgICAvLyBjb21wYXRpYmxlXHJcbiAgICAgICAgaWYgKGl0ZW0uY29tcG9uZW50ICE9IG51bGwpIHtcclxuICAgICAgICAgIGl0ZW0ubW9kYWwgPSB7XHJcbiAgICAgICAgICAgIGNvbXBvbmVudDogaXRlbS5jb21wb25lbnQsXHJcbiAgICAgICAgICAgIHBhcmFtczogaXRlbS5wYXJhbXMsXHJcbiAgICAgICAgICAgIHBhcmFtc05hbWU6IGl0ZW0ucGFyYW1OYW1lIHx8IG1vZGFsLnBhcmFtc05hbWUsXHJcbiAgICAgICAgICAgIHNpemU6IGl0ZW0uc2l6ZSB8fCBtb2RhbC5zaXplLFxyXG4gICAgICAgICAgICBtb2RhbE9wdGlvbnM6IGl0ZW0ubW9kYWxPcHRpb25zIHx8IG1vZGFsLm1vZGFsT3B0aW9ucyxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpdGVtLm1vZGFsID09IG51bGwgfHwgaXRlbS5tb2RhbC5jb21wb25lbnQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgY29uc29sZS53YXJuKGBbc3RdIFNob3VsZCBzcGVjaWZ5IG1vZGFsIHBhcmFtZXRlcmApO1xyXG4gICAgICAgICAgaXRlbS50eXBlID0gJ25vbmUnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpdGVtLm1vZGFsID0gT2JqZWN0LmFzc2lnbih7fSwgbW9kYWwsIGl0ZW0ubW9kYWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ2RyYXdlcicpIHtcclxuICAgICAgICBpZiAoaXRlbS5kcmF3ZXIgPT0gbnVsbCB8fCBpdGVtLmRyYXdlci5jb21wb25lbnQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgY29uc29sZS53YXJuKGBbc3RdIFNob3VsZCBzcGVjaWZ5IGRyYXdlciBwYXJhbWV0ZXJgKTtcclxuICAgICAgICAgIGl0ZW0udHlwZSA9ICdub25lJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaXRlbS5kcmF3ZXIgPSBPYmplY3QuYXNzaWduKHt9LCBkcmF3ZXIsIGl0ZW0uZHJhd2VyKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdkZWwnICYmIHR5cGVvZiBpdGVtLnBvcCA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICBpdGVtLnBvcCA9IHRydWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChpdGVtLnBvcCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIGl0ZW0uX3R5cGUgPSAyO1xyXG4gICAgICAgIGlmICh0eXBlb2YgaXRlbS5wb3BUaXRsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgIGl0ZW0ucG9wVGl0bGUgPSBwb3BUaXRsZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGl0ZW0uY2hpbGRyZW4gJiYgaXRlbS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgaXRlbS5fdHlwZSA9IDM7XHJcbiAgICAgICAgaXRlbS5jaGlsZHJlbiA9IHRoaXMuYnRuQ29lcmNlKGl0ZW0uY2hpbGRyZW4pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghaXRlbS5fdHlwZSkge1xyXG4gICAgICAgIGl0ZW0uX3R5cGUgPSAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBpMThuXHJcbiAgICAgIGlmIChpdGVtLmkxOG4gJiYgdGhpcy5pMThuU3J2KSB7XHJcbiAgICAgICAgaXRlbS50ZXh0ID0gdGhpcy5pMThuU3J2LmZhbnlpKGl0ZW0uaTE4bik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldC5wdXNoKGl0ZW0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5idG5Db2VyY2VJZihyZXQpO1xyXG4gICAgcmV0dXJuIHJldDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYnRuQ29lcmNlSWYobGlzdDogU1RDb2x1bW5CdXR0b25bXSkge1xyXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGxpc3QpIHtcclxuICAgICAgaWYgKCFpdGVtLmlpZikgaXRlbS5paWYgPSAoKSA9PiB0cnVlO1xyXG4gICAgICBpZiAoIWl0ZW0uY2hpbGRyZW4pIHtcclxuICAgICAgICBpdGVtLmNoaWxkcmVuID0gW107XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5idG5Db2VyY2VJZihpdGVtLmNoaWxkcmVuKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmaXhlZENvZXJjZShsaXN0OiBTVENvbHVtbltdKSB7XHJcbiAgICBjb25zdCBjb3VudFJlZHVjZSA9IChhOiBudW1iZXIsIGI6IFNUQ29sdW1uKSA9PlxyXG4gICAgICBhICsgK2Iud2lkdGgudG9TdHJpbmcoKS5yZXBsYWNlKCdweCcsICcnKTtcclxuICAgIC8vIGxlZnQgd2lkdGhcclxuICAgIGxpc3RcclxuICAgICAgLmZpbHRlcih3ID0+IHcuZml4ZWQgJiYgdy5maXhlZCA9PT0gJ2xlZnQnICYmIHcud2lkdGgpXHJcbiAgICAgIC5mb3JFYWNoKFxyXG4gICAgICAgIChpdGVtLCBpZHgpID0+XHJcbiAgICAgICAgICAoaXRlbS5fbGVmdCA9IGxpc3Quc2xpY2UoMCwgaWR4KS5yZWR1Y2UoY291bnRSZWR1Y2UsIDApICsgJ3B4JyksXHJcbiAgICAgICk7XHJcbiAgICAvLyByaWdodCB3aWR0aFxyXG4gICAgbGlzdFxyXG4gICAgICAuZmlsdGVyKHcgPT4gdy5maXhlZCAmJiB3LmZpeGVkID09PSAncmlnaHQnICYmIHcud2lkdGgpXHJcbiAgICAgIC5yZXZlcnNlKClcclxuICAgICAgLmZvckVhY2goXHJcbiAgICAgICAgKGl0ZW0sIGlkeCkgPT5cclxuICAgICAgICAgIChpdGVtLl9yaWdodCA9XHJcbiAgICAgICAgICAgIChpZHggPiAwID8gbGlzdC5zbGljZSgtaWR4KS5yZWR1Y2UoY291bnRSZWR1Y2UsIDApIDogMCkgKyAncHgnKSxcclxuICAgICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc29ydENvZXJjZShpdGVtOiBTVENvbHVtbik6IFNUU29ydE1hcCB7XHJcbiAgICAvLyBjb21wYXRpYmxlXHJcbiAgICBpZiAoaXRlbS5zb3J0ZXIgJiYgdHlwZW9mIGl0ZW0uc29ydGVyID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICBkZWZhdWx0OiBpdGVtLnNvcnQgYXMgYW55LFxyXG4gICAgICAgIGNvbXBhcmU6IGl0ZW0uc29ydGVyLFxyXG4gICAgICAgIGtleTogaXRlbS5zb3J0S2V5IHx8IGl0ZW0uaW5kZXhLZXksXHJcbiAgICAgICAgcmVOYW1lOiBpdGVtLnNvcnRSZU5hbWUsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiBpdGVtLnNvcnQgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIHJldHVybiB7IGVuYWJsZWQ6IGZhbHNlIH07XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHJlczogU1RTb3J0TWFwID0ge307XHJcblxyXG4gICAgaWYgKHR5cGVvZiBpdGVtLnNvcnQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHJlcy5rZXkgPSBpdGVtLnNvcnQ7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBpdGVtLnNvcnQgIT09ICdib29sZWFuJykge1xyXG4gICAgICByZXMgPSBpdGVtLnNvcnQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFyZXMua2V5KSB7XHJcbiAgICAgIHJlcy5rZXkgPSBpdGVtLmluZGV4S2V5O1xyXG4gICAgfVxyXG5cclxuICAgIHJlcy5lbmFibGVkID0gdHJ1ZTtcclxuXHJcbiAgICByZXR1cm4gcmVzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmaWx0ZXJDb2VyY2UoaXRlbTogU1RDb2x1bW4pOiBTVENvbHVtbkZpbHRlciB7XHJcbiAgICBsZXQgcmVzOiBTVENvbHVtbkZpbHRlciA9IG51bGw7XHJcbiAgICAvLyBjb21wYXRpYmxlXHJcbiAgICBpZiAoaXRlbS5maWx0ZXJzICYmIGl0ZW0uZmlsdGVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHJlcyA9IHtcclxuICAgICAgICBjb25maXJtVGV4dDogaXRlbS5maWx0ZXJDb25maXJtVGV4dCxcclxuICAgICAgICBjbGVhclRleHQ6IGl0ZW0uZmlsdGVyQ2xlYXJUZXh0LFxyXG4gICAgICAgIGRlZmF1bHQ6IGl0ZW0uZmlsdGVyZWQsXHJcbiAgICAgICAgZm46IGl0ZW0uZmlsdGVyIGFzIGFueSxcclxuICAgICAgICBpY29uOiBpdGVtLmZpbHRlckljb24sXHJcbiAgICAgICAga2V5OiBpdGVtLmZpbHRlcktleSB8fCBpdGVtLmluZGV4S2V5LFxyXG4gICAgICAgIG1lbnVzOiBpdGVtLmZpbHRlcnMsXHJcbiAgICAgICAgbXVsdGlwbGU6IGl0ZW0uZmlsdGVyTXVsdGlwbGUsXHJcbiAgICAgICAgcmVOYW1lOiBpdGVtLmZpbHRlclJlTmFtZSxcclxuICAgICAgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlcyA9IGl0ZW0uZmlsdGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChyZXMgPT0gbnVsbCB8fCByZXMubWVudXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2YgcmVzLm11bHRpcGxlID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICByZXMubXVsdGlwbGUgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKCFyZXMuY29uZmlybVRleHQpIHtcclxuICAgICAgcmVzLmNvbmZpcm1UZXh0ID0gdGhpcy5jb2cuZmlsdGVyQ29uZmlybVRleHQ7XHJcbiAgICB9XHJcbiAgICBpZiAoIXJlcy5jbGVhclRleHQpIHtcclxuICAgICAgcmVzLmNsZWFyVGV4dCA9IHRoaXMuY29nLmZpbHRlckNsZWFyVGV4dDtcclxuICAgIH1cclxuICAgIGlmICghcmVzLmljb24pIHtcclxuICAgICAgcmVzLmljb24gPSBgYW50aWNvbiBhbnRpY29uLWZpbHRlcmA7XHJcbiAgICB9XHJcbiAgICBpZiAoIXJlcy5rZXkpIHtcclxuICAgICAgcmVzLmtleSA9IGl0ZW0uaW5kZXhLZXk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzLmRlZmF1bHQgPSByZXMubWVudXMuZmluZEluZGV4KHcgPT4gdy5jaGVja2VkKSAhPT0gLTE7XHJcblxyXG4gICAgaWYgKHRoaXMuYWNsKSB7XHJcbiAgICAgIHJlcy5tZW51cyA9IHJlcy5tZW51cy5maWx0ZXIodyA9PiB0aGlzLmFjbC5jYW4ody5hY2wpKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocmVzLm1lbnVzLmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgIHJlcyA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlcztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVzdG9yZVJlbmRlcihpdGVtOiBTVENvbHVtbikge1xyXG4gICAgaWYgKGl0ZW0ucmVuZGVyVGl0bGUpIHtcclxuICAgICAgaXRlbS5fX3JlbmRlclRpdGxlID0gdGhpcy5yb3dTb3VyY2UuZ2V0VGl0bGUoaXRlbS5yZW5kZXJUaXRsZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoaXRlbS5yZW5kZXIpIHtcclxuICAgICAgaXRlbS5fX3JlbmRlciA9IHRoaXMucm93U291cmNlLmdldFJvdyhpdGVtLnJlbmRlcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcm9jZXNzKGxpc3Q6IFNUQ29sdW1uW10pOiBTVENvbHVtbltdIHtcclxuICAgIGlmICghbGlzdCB8fCBsaXN0Lmxlbmd0aCA9PT0gMClcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBbc3RdOiB0aGUgY29sdW1ucyBwcm9wZXJ0eSBtdXNlIGJlIGRlZmluZSFgKTtcclxuXHJcbiAgICBsZXQgY2hlY2tib3hDb3VudCA9IDA7XHJcbiAgICBsZXQgcmFkaW9Db3VudCA9IDA7XHJcbiAgICBjb25zdCBjb2x1bW5zOiBTVENvbHVtbltdID0gW107XHJcbiAgICBjb25zdCBjb3B5Q29sdW1lbnMgPSBkZWVwQ29weShsaXN0KSBhcyBTVENvbHVtbltdO1xyXG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGNvcHlDb2x1bWVucykge1xyXG4gICAgICBpZiAodGhpcy5hY2wgJiYgaXRlbS5hY2wgJiYgIXRoaXMuYWNsLmNhbihpdGVtLmFjbCkpIHtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG4gICAgICAvLyBpbmRleFxyXG4gICAgICBpZiAoaXRlbS5pbmRleCkge1xyXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShpdGVtLmluZGV4KSkge1xyXG4gICAgICAgICAgaXRlbS5pbmRleCA9IGl0ZW0uaW5kZXguc3BsaXQoJy4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaXRlbS5pbmRleEtleSA9IGl0ZW0uaW5kZXguam9pbignLicpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIHRpdGxlXHJcbiAgICAgIGlmIChpdGVtLmkxOG4gJiYgdGhpcy5pMThuU3J2KSB7XHJcbiAgICAgICAgaXRlbS50aXRsZSA9IHRoaXMuaTE4blNydi5mYW55aShpdGVtLmkxOG4pO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIGNoZWNrYm94XHJcbiAgICAgIGlmIChpdGVtLnNlbGVjdGlvbnMgPT0gbnVsbCkge1xyXG4gICAgICAgIGl0ZW0uc2VsZWN0aW9ucyA9IFtdO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdjaGVja2JveCcpIHtcclxuICAgICAgICArK2NoZWNrYm94Q291bnQ7XHJcbiAgICAgICAgaWYgKCFpdGVtLndpZHRoKSB7XHJcbiAgICAgICAgICBpdGVtLndpZHRoID0gYCR7aXRlbS5zZWxlY3Rpb25zLmxlbmd0aCA+IDAgPyA2MCA6IDUwfXB4YDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuYWNsKSB7XHJcbiAgICAgICAgaXRlbS5zZWxlY3Rpb25zID0gaXRlbS5zZWxlY3Rpb25zLmZpbHRlcih3ID0+IHRoaXMuYWNsLmNhbih3LmFjbCkpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIHJhZGlvXHJcbiAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdyYWRpbycpIHtcclxuICAgICAgICArK3JhZGlvQ291bnQ7XHJcbiAgICAgICAgaXRlbS5zZWxlY3Rpb25zID0gW107XHJcbiAgICAgICAgaWYgKCFpdGVtLndpZHRoKSB7XHJcbiAgICAgICAgICBpdGVtLndpZHRoID0gJzUwcHgnO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAvLyB0eXBlc1xyXG4gICAgICBpZiAoaXRlbS50eXBlID09PSAneW4nKSB7XHJcbiAgICAgICAgaXRlbS55biA9IE9iamVjdC5hc3NpZ24oeyB0cnV0aDogdHJ1ZSB9LCBpdGVtLnluKTtcclxuICAgICAgICAvLyBjb21wYXRpYmxlXHJcbiAgICAgICAgaWYgKGl0ZW0ueW5UcnV0aCAhPSBudWxsKSBpdGVtLnluLnRydXRoID0gaXRlbS55blRydXRoO1xyXG4gICAgICAgIGlmIChpdGVtLnluWWVzICE9IG51bGwpIGl0ZW0ueW4ueWVzID0gaXRlbS55blllcztcclxuICAgICAgICBpZiAoaXRlbS55bk5vICE9IG51bGwpIGl0ZW0ueW4ubm8gPSBpdGVtLnluTm87XHJcbiAgICAgIH1cclxuICAgICAgaWYgKFxyXG4gICAgICAgIChpdGVtLnR5cGUgPT09ICdsaW5rJyAmJiB0eXBlb2YgaXRlbS5jbGljayAhPT0gJ2Z1bmN0aW9uJykgfHxcclxuICAgICAgICAoaXRlbS50eXBlID09PSAnYmFkZ2UnICYmIGl0ZW0uYmFkZ2UgPT0gbnVsbCkgfHxcclxuICAgICAgICAoaXRlbS50eXBlID09PSAndGFnJyAmJiBpdGVtLnRhZyA9PSBudWxsKVxyXG4gICAgICApIHtcclxuICAgICAgICAoaXRlbSBhcyBhbnkpLnR5cGUgPSAnJztcclxuICAgICAgfVxyXG4gICAgICAvLyBjbGFzc05hbWVcclxuICAgICAgaWYgKCFpdGVtLmNsYXNzTmFtZSkge1xyXG4gICAgICAgIGl0ZW0uY2xhc3NOYW1lID0ge1xyXG4gICAgICAgICAgbnVtYmVyOiAndGV4dC1yaWdodCcsXHJcbiAgICAgICAgICBjdXJyZW5jeTogJ3RleHQtcmlnaHQnLFxyXG4gICAgICAgICAgZGF0ZTogJ3RleHQtY2VudGVyJyxcclxuICAgICAgICB9W2l0ZW0udHlwZV07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIHNvcnRlclxyXG4gICAgICBpdGVtLl9zb3J0ID0gdGhpcy5zb3J0Q29lcmNlKGl0ZW0pO1xyXG4gICAgICAvLyBmaWx0ZXJcclxuICAgICAgaXRlbS5maWx0ZXIgPSB0aGlzLmZpbHRlckNvZXJjZShpdGVtKTtcclxuICAgICAgLy8gYnV0dG9uc1xyXG4gICAgICBpdGVtLmJ1dHRvbnMgPSB0aGlzLmJ0bkNvZXJjZShpdGVtLmJ1dHRvbnMpO1xyXG4gICAgICAvLyByZXN0b3JlIGN1c3RvbSByb3dcclxuICAgICAgdGhpcy5yZXN0b3JlUmVuZGVyKGl0ZW0pO1xyXG5cclxuICAgICAgY29sdW1ucy5wdXNoKGl0ZW0pO1xyXG4gICAgfVxyXG4gICAgaWYgKGNoZWNrYm94Q291bnQgPiAxKVxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFtzdF06IGp1c3Qgb25seSBvbmUgY29sdW1uIGNoZWNrYm94YCk7XHJcbiAgICBpZiAocmFkaW9Db3VudCA+IDEpXHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgW3N0XToganVzdCBvbmx5IG9uZSBjb2x1bW4gcmFkaW9gKTtcclxuXHJcbiAgICB0aGlzLmZpeGVkQ29lcmNlKGNvbHVtbnMpO1xyXG5cclxuICAgIHJldHVybiBjb2x1bW5zO1xyXG4gIH1cclxuXHJcbiAgcmVzdG9yZUFsbFJlbmRlcihjb2x1bW5zOiBTVENvbHVtbltdKSB7XHJcbiAgICBjb2x1bW5zLmZvckVhY2goaSA9PiB0aGlzLnJlc3RvcmVSZW5kZXIoaSkpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBIb3N0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERlY2ltYWxQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgZGVlcEdldCB9IGZyb20gJ0BkZWxvbi91dGlsJztcclxuaW1wb3J0IHsgQ05DdXJyZW5jeVBpcGUsIERhdGVQaXBlLCBZTlBpcGUsIF9IdHRwQ2xpZW50IH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcclxuXHJcbmltcG9ydCB7XHJcbiAgU1REYXRhLFxyXG4gIFNUUGFnZSxcclxuICBTVFJlcSxcclxuICBTVFJlcyxcclxuICBTVENvbHVtbixcclxuICBTVE11bHRpU29ydCxcclxufSBmcm9tICcuL3RhYmxlLmludGVyZmFjZXMnO1xyXG5pbXBvcnQgeyBTVFNvcnRNYXAgfSBmcm9tICcuL3RhYmxlLWNvbHVtbi1zb3VyY2UnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTVERhdGFTb3VyY2VPcHRpb25zIHtcclxuICBwaT86IG51bWJlcjtcclxuICBwcz86IG51bWJlcjtcclxuICBkYXRhPzogc3RyaW5nIHwgU1REYXRhW10gfCBPYnNlcnZhYmxlPFNURGF0YVtdPjtcclxuICB0b3RhbD86IG51bWJlcjtcclxuICByZXE/OiBTVFJlcTtcclxuICByZXM/OiBTVFJlcztcclxuICBwYWdlPzogU1RQYWdlO1xyXG4gIGNvbHVtbnM/OiBTVENvbHVtbltdO1xyXG4gIG11bHRpU29ydD86IFNUTXVsdGlTb3J0O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNURGF0YVNvdXJjZVJlc3VsdCB7XHJcbiAgLyoqIMOmwpjCr8OlwpDCpsOpwpzCgMOowqbCgcOmwpjCvsOnwqTCusOlwojChsOpwqHCtcOlwpnCqCAqL1xyXG4gIHBhZ2VTaG93PzogYm9vbGVhbjtcclxuICAvKiogw6bClsKwIGBwaWDDr8K8wozDqMKLwqXDqMK/wpTDpcKbwp4gYHVuZGVmaW5lZGAgw6jCocKow6fCpMK6w6fClMKow6bCiMK3w6XCj8KXw6bCjsKnICovXHJcbiAgcGk/OiBudW1iZXI7XHJcbiAgLyoqIMOmwpbCsCBgdG90YWxgw6/CvMKMw6jCi8Klw6jCv8KUw6XCm8KeIGB1bmRlZmluZWRgIMOowqHCqMOnwqTCusOnwpTCqMOmwojCt8Olwo/Cl8Omwo7CpyAqL1xyXG4gIHRvdGFsPzogbnVtYmVyO1xyXG4gIC8qKiDDpsKVwrDDpsKNwq4gKi9cclxuICBsaXN0PzogU1REYXRhW107XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNURGF0YVNvdXJjZSB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGh0dHA6IF9IdHRwQ2xpZW50LFxyXG4gICAgQEhvc3QoKSBwcml2YXRlIGN1cnJlbnR5OiBDTkN1cnJlbmN5UGlwZSxcclxuICAgIEBIb3N0KCkgcHJpdmF0ZSBkYXRlOiBEYXRlUGlwZSxcclxuICAgIEBIb3N0KCkgcHJpdmF0ZSB5bjogWU5QaXBlLFxyXG4gICAgQEhvc3QoKSBwcml2YXRlIG51bWJlcjogRGVjaW1hbFBpcGUsXHJcbiAgKSB7fVxyXG5cclxuICBwcm9jZXNzKG9wdGlvbnM6IFNURGF0YVNvdXJjZU9wdGlvbnMpOiBQcm9taXNlPFNURGF0YVNvdXJjZVJlc3VsdD4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlUHJvbWlzZSwgcmVqZWN0UHJvbWlzZSkgPT4ge1xyXG4gICAgICBsZXQgZGF0YSQ6IE9ic2VydmFibGU8U1REYXRhW10+O1xyXG4gICAgICBsZXQgaXNSZW1vdGUgPSBmYWxzZTtcclxuICAgICAgY29uc3QgeyBkYXRhLCByZXMsIHRvdGFsLCBwYWdlLCBwaSwgcHMsIGNvbHVtbnMgfSA9IG9wdGlvbnM7XHJcbiAgICAgIGxldCByZXRUb3RhbDogbnVtYmVyO1xyXG4gICAgICBsZXQgcmV0TGlzdDogU1REYXRhW107XHJcbiAgICAgIGxldCByZXRQaTogbnVtYmVyO1xyXG5cclxuICAgICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIGlzUmVtb3RlID0gdHJ1ZTtcclxuICAgICAgICBkYXRhJCA9IHRoaXMuZ2V0QnlIdHRwKGRhdGEsIG9wdGlvbnMpLnBpcGUoXHJcbiAgICAgICAgICBtYXAoKHJlc3VsdDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGxpc3RcclxuICAgICAgICAgICAgbGV0IHJldCA9IGRlZXBHZXQocmVzdWx0LCByZXMucmVOYW1lLmxpc3QgYXMgc3RyaW5nW10sIFtdKTtcclxuICAgICAgICAgICAgaWYgKHJldCA9PSBudWxsIHx8ICFBcnJheS5pc0FycmF5KHJldCkpIHtcclxuICAgICAgICAgICAgICByZXQgPSBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyB0b3RhbFxyXG4gICAgICAgICAgICBjb25zdCByZXN1bHRUb3RhbCA9XHJcbiAgICAgICAgICAgICAgcmVzLnJlTmFtZS50b3RhbCAmJlxyXG4gICAgICAgICAgICAgIGRlZXBHZXQocmVzdWx0LCByZXMucmVOYW1lLnRvdGFsIGFzIHN0cmluZ1tdLCBudWxsKTtcclxuICAgICAgICAgICAgcmV0VG90YWwgPSByZXN1bHRUb3RhbCA9PSBudWxsID8gdG90YWwgfHwgMCA6ICtyZXN1bHRUb3RhbDtcclxuICAgICAgICAgICAgcmV0dXJuIDxTVERhdGFbXT5yZXQ7XHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyID0+IHtcclxuICAgICAgICAgICAgcmVqZWN0UHJvbWlzZShlcnIpO1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcclxuICAgICAgICBkYXRhJCA9IG9mKGRhdGEpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIGEgY29sZCBvYnNlcnZhYmxlXHJcbiAgICAgICAgZGF0YSQgPSBkYXRhO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIWlzUmVtb3RlKSB7XHJcbiAgICAgICAgZGF0YSQgPSBkYXRhJC5waXBlKFxyXG4gICAgICAgICAgLy8gc29ydFxyXG4gICAgICAgICAgbWFwKChyZXN1bHQ6IFNURGF0YVtdKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBjb3B5UmVzdWx0ID0gcmVzdWx0LnNsaWNlKDApO1xyXG4gICAgICAgICAgICBjb25zdCBzb3J0ZXJGbiA9IHRoaXMuZ2V0U29ydGVyRm4oY29sdW1ucyk7XHJcbiAgICAgICAgICAgIGlmIChzb3J0ZXJGbikge1xyXG4gICAgICAgICAgICAgIGNvcHlSZXN1bHQgPSBjb3B5UmVzdWx0LnNvcnQoc29ydGVyRm4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBjb3B5UmVzdWx0O1xyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgICAvLyBmaWx0ZXJcclxuICAgICAgICAgIG1hcCgocmVzdWx0OiBTVERhdGFbXSkgPT4ge1xyXG4gICAgICAgICAgICBjb2x1bW5zLmZpbHRlcih3ID0+IHcuZmlsdGVyKS5mb3JFYWNoKGMgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IGMuZmlsdGVyLm1lbnVzLmZpbHRlcih3ID0+IHcuY2hlY2tlZCk7XHJcbiAgICAgICAgICAgICAgaWYgKHZhbHVlcy5sZW5ndGggPT09IDApIHJldHVybjtcclxuICAgICAgICAgICAgICBjb25zdCBvbkZpbHRlciA9IGMuZmlsdGVyLmZuO1xyXG4gICAgICAgICAgICAgIGlmICh0eXBlb2Ygb25GaWx0ZXIgIT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgW3N0XSBNdXNlIHByb3ZpZGUgdGhlIGZuIGZ1bmN0aW9uIGluIGZpbHRlcmApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmZpbHRlcihyZWNvcmQgPT5cclxuICAgICAgICAgICAgICAgIHZhbHVlcy5zb21lKHYgPT4gb25GaWx0ZXIodiwgcmVjb3JkKSksXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICAgIC8vIHBhZ2luZ1xyXG4gICAgICAgICAgbWFwKChyZXN1bHQ6IFNURGF0YVtdKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwYWdlLmZyb250KSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgbWF4UGFnZUluZGV4ID0gTWF0aC5jZWlsKHJlc3VsdC5sZW5ndGggLyBwcyk7XHJcbiAgICAgICAgICAgICAgcmV0UGkgPSBNYXRoLm1heCgxLCBwaSA+IG1heFBhZ2VJbmRleCA/IG1heFBhZ2VJbmRleCA6IHBpKTtcclxuICAgICAgICAgICAgICByZXRUb3RhbCA9IHJlc3VsdC5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgaWYgKHBhZ2Uuc2hvdyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5zbGljZSgocmV0UGkgLSAxKSAqIHBzLCByZXRQaSAqIHBzKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIHByZS1wcm9jZXNzXHJcbiAgICAgIGlmICh0eXBlb2YgcmVzLnByb2Nlc3MgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICBkYXRhJCA9IGRhdGEkLnBpcGUobWFwKHJlc3VsdCA9PiByZXMucHJvY2VzcyhyZXN1bHQpKSk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gZGF0YSBhY2NlbGVyYXRvclxyXG4gICAgICBkYXRhJCA9IGRhdGEkLnBpcGUoXHJcbiAgICAgICAgbWFwKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICBmb3IgKGNvbnN0IGkgb2YgcmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGkuX3ZhbHVlcyA9IGNvbHVtbnMubWFwKGMgPT4gdGhpcy5nZXQoaSwgYykpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9KSxcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGRhdGEkLmZvckVhY2goKHJlc3VsdDogU1REYXRhW10pID0+IChyZXRMaXN0ID0gcmVzdWx0KSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgcmVzb2x2ZVByb21pc2Uoe1xyXG4gICAgICAgICAgcGk6IHJldFBpLFxyXG4gICAgICAgICAgdG90YWw6IHJldFRvdGFsLFxyXG4gICAgICAgICAgbGlzdDogcmV0TGlzdCxcclxuICAgICAgICAgIHBhZ2VTaG93OlxyXG4gICAgICAgICAgICB0eXBlb2YgcGFnZS5zaG93ID09PSAndW5kZWZpbmVkJ1xyXG4gICAgICAgICAgICAgID8gKHJldFRvdGFsIHx8IHRvdGFsKSA+IHBzXHJcbiAgICAgICAgICAgICAgOiBwYWdlLnNob3csXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldChpdGVtOiBhbnksIGNvbDogU1RDb2x1bW4pIHtcclxuICAgIGlmIChjb2wuZm9ybWF0KSByZXR1cm4gY29sLmZvcm1hdChpdGVtLCBjb2wpO1xyXG5cclxuICAgIGNvbnN0IHZhbHVlID0gZGVlcEdldChpdGVtLCBjb2wuaW5kZXggYXMgc3RyaW5nW10sIGNvbC5kZWZhdWx0KTtcclxuXHJcbiAgICBsZXQgcmV0ID0gdmFsdWU7XHJcbiAgICBzd2l0Y2ggKGNvbC50eXBlKSB7XHJcbiAgICAgIGNhc2UgJ2ltZyc6XHJcbiAgICAgICAgcmV0ID0gdmFsdWUgPyBgPGltZyBzcmM9XCIke3ZhbHVlfVwiIGNsYXNzPVwiaW1nXCI+YCA6ICcnO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdudW1iZXInOlxyXG4gICAgICAgIHJldCA9IHRoaXMubnVtYmVyLnRyYW5zZm9ybSh2YWx1ZSwgY29sLm51bWJlckRpZ2l0cyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2N1cnJlbmN5JzpcclxuICAgICAgICByZXQgPSB0aGlzLmN1cnJlbnR5LnRyYW5zZm9ybSh2YWx1ZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2RhdGUnOlxyXG4gICAgICAgIHJldCA9IHRoaXMuZGF0ZS50cmFuc2Zvcm0odmFsdWUsIGNvbC5kYXRlRm9ybWF0KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAneW4nOlxyXG4gICAgICAgIHJldCA9IHRoaXMueW4udHJhbnNmb3JtKHZhbHVlID09PSBjb2wueW4udHJ1dGgsIGNvbC55bi55ZXMsIGNvbC55bi5ubyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmV0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRCeUh0dHAoXHJcbiAgICB1cmw6IHN0cmluZyxcclxuICAgIG9wdGlvbnM6IFNURGF0YVNvdXJjZU9wdGlvbnMsXHJcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIGNvbnN0IHsgcmVxLCBwYWdlLCBwaSwgcHMsIG11bHRpU29ydCwgY29sdW1ucyB9ID0gb3B0aW9ucztcclxuICAgIGNvbnN0IG1ldGhvZCA9IChyZXEubWV0aG9kIHx8ICdHRVQnKS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgY29uc3QgcGFyYW1zOiBhbnkgPSBPYmplY3QuYXNzaWduKFxyXG4gICAgICB7XHJcbiAgICAgICAgW3JlcS5yZU5hbWUucGldOiBwYWdlLnplcm9JbmRleGVkID8gcGkgLSAxIDogcGksXHJcbiAgICAgICAgW3JlcS5yZU5hbWUucHNdOiBwcyxcclxuICAgICAgfSxcclxuICAgICAgcmVxLnBhcmFtcyxcclxuICAgICAgdGhpcy5nZXRSZXFTb3J0TWFwKG11bHRpU29ydCwgY29sdW1ucyksXHJcbiAgICAgIHRoaXMuZ2V0UmVxRmlsdGVyTWFwKGNvbHVtbnMpLFxyXG4gICAgKTtcclxuICAgIGxldCByZXFPcHRpb25zOiBhbnkgPSB7XHJcbiAgICAgIHBhcmFtcyxcclxuICAgICAgYm9keTogcmVxLmJvZHksXHJcbiAgICAgIGhlYWRlcnM6IHJlcS5oZWFkZXJzLFxyXG4gICAgfTtcclxuICAgIGlmIChtZXRob2QgPT09ICdQT1NUJyAmJiByZXEuYWxsSW5Cb2R5ID09PSB0cnVlKSB7XHJcbiAgICAgIHJlcU9wdGlvbnMgPSB7XHJcbiAgICAgICAgYm9keTogT2JqZWN0LmFzc2lnbih7fSwgcmVxLmJvZHksIHBhcmFtcyksXHJcbiAgICAgICAgaGVhZGVyczogcmVxLmhlYWRlcnMsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnJlcXVlc3QobWV0aG9kLCB1cmwsIHJlcU9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgLy8jcmVnaW9uIHNvcnRcclxuXHJcbiAgcHJpdmF0ZSBnZXRWYWxpZFNvcnQoY29sdW1uczogU1RDb2x1bW5bXSk6IFNUU29ydE1hcFtdIHtcclxuICAgIHJldHVybiBjb2x1bW5zXHJcbiAgICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtLl9zb3J0ICYmIGl0ZW0uX3NvcnQuZW5hYmxlZCAmJiBpdGVtLl9zb3J0LmRlZmF1bHQpXHJcbiAgICAgIC5tYXAoaXRlbSA9PiBpdGVtLl9zb3J0KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0U29ydGVyRm4oY29sdW1uczogU1RDb2x1bW5bXSkge1xyXG4gICAgY29uc3Qgc29ydExpc3QgPSB0aGlzLmdldFZhbGlkU29ydChjb2x1bW5zKTtcclxuICAgIGlmIChzb3J0TGlzdC5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBzb3J0TGlzdFswXS5jb21wYXJlICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihgW3N0XSBNdXNlIHByb3ZpZGUgdGhlIGNvbXBhcmUgZnVuY3Rpb24gaW4gc29ydGApO1xyXG4gICAgICByZXR1cm4gO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoYTogYW55LCBiOiBhbnkpID0+IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gc29ydExpc3RbMF0uY29tcGFyZShhLCBiKTtcclxuICAgICAgaWYgKHJlc3VsdCAhPT0gMCkge1xyXG4gICAgICAgIHJldHVybiBzb3J0TGlzdFswXS5kZWZhdWx0ID09PSAnZGVzY2VuZCcgPyAtcmVzdWx0IDogcmVzdWx0O1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiAwO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGdldFJlcVNvcnRNYXAoXHJcbiAgICBtdWx0aVNvcnQ6IFNUTXVsdGlTb3J0LFxyXG4gICAgY29sdW1uczogU1RDb2x1bW5bXSxcclxuICApOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHtcclxuICAgIGxldCByZXQ6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcclxuICAgIGNvbnN0IHNvcnRMaXN0ID0gdGhpcy5nZXRWYWxpZFNvcnQoY29sdW1ucyk7XHJcbiAgICBpZiAoIW11bHRpU29ydCAmJiBzb3J0TGlzdC5sZW5ndGggPT09IDApIHJldHVybiByZXQ7XHJcblxyXG4gICAgaWYgKG11bHRpU29ydCkge1xyXG4gICAgICBzb3J0TGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIHJldFtpdGVtLmtleV0gPSAoaXRlbS5yZU5hbWUgfHwge30pW2l0ZW0uZGVmYXVsdF0gfHwgaXRlbS5kZWZhdWx0O1xyXG4gICAgICB9KTtcclxuICAgICAgLy8gw6XCkMKIw6XCucK2w6XCpMKEw6fCkMKGXHJcbiAgICAgIHJldCA9IHtcclxuICAgICAgICBbbXVsdGlTb3J0LmtleV06IE9iamVjdC5rZXlzKHJldClcclxuICAgICAgICAgIC5tYXAoa2V5ID0+IGtleSArIG11bHRpU29ydC5uYW1lU2VwYXJhdG9yICsgcmV0W2tleV0pXHJcbiAgICAgICAgICAuam9pbihtdWx0aVNvcnQuc2VwYXJhdG9yKSxcclxuICAgICAgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IG1hcERhdGEgPSBzb3J0TGlzdFswXTtcclxuICAgICAgcmV0W21hcERhdGEua2V5XSA9XHJcbiAgICAgICAgKHNvcnRMaXN0WzBdLnJlTmFtZSB8fCB7fSlbbWFwRGF0YS5kZWZhdWx0XSB8fCBtYXBEYXRhLmRlZmF1bHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmV0O1xyXG4gIH1cclxuXHJcbiAgLy8jZW5kcmVnaW9uXHJcblxyXG4gIC8vI3JlZ2lvbiBmaWx0ZXJcclxuXHJcbiAgcHJpdmF0ZSBnZXRSZXFGaWx0ZXJNYXAoY29sdW1uczogU1RDb2x1bW5bXSk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0ge1xyXG4gICAgbGV0IHJldCA9IHt9O1xyXG4gICAgY29sdW1ucy5maWx0ZXIodyA9PiB3LmZpbHRlciAmJiB3LmZpbHRlci5kZWZhdWx0ID09PSB0cnVlKS5mb3JFYWNoKGNvbCA9PiB7XHJcbiAgICAgIGNvbnN0IHZhbHVlcyA9IGNvbC5maWx0ZXIubWVudXMuZmlsdGVyKGYgPT4gZi5jaGVja2VkID09PSB0cnVlKTtcclxuICAgICAgbGV0IG9iajogT2JqZWN0ID0ge307XHJcbiAgICAgIGlmIChjb2wuZmlsdGVyLnJlTmFtZSkge1xyXG4gICAgICAgIG9iaiA9IGNvbC5maWx0ZXIucmVOYW1lKGNvbC5maWx0ZXIubWVudXMsIGNvbCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgb2JqW2NvbC5maWx0ZXIua2V5XSA9IHZhbHVlcy5tYXAoaSA9PiBpLnZhbHVlKS5qb2luKCcsJyk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0ID0gT2JqZWN0LmFzc2lnbihyZXQsIG9iaik7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXQ7XHJcbiAgfVxyXG5cclxuICAvLyNlbmRyZWdpb25cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBkZWVwR2V0IH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xyXG5pbXBvcnQgeyBYbHN4U2VydmljZSB9IGZyb20gJ0BkZWxvbi9hYmMveGxzeCc7XHJcblxyXG5pbXBvcnQgeyBTVENvbHVtbiwgU1RFeHBvcnRPcHRpb25zIH0gZnJvbSAnLi90YWJsZS5pbnRlcmZhY2VzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNURXhwb3J0IHtcclxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBwcml2YXRlIHhsc3hTcnY6IFhsc3hTZXJ2aWNlKSB7fVxyXG5cclxuICBwcml2YXRlIF9zdEdldChpdGVtOiBhbnksIGNvbDogU1RDb2x1bW4pOiBhbnkge1xyXG4gICAgY29uc3QgcmV0OiBhbnkgPSB7IHQ6ICdzJywgdjogJycgfTtcclxuXHJcbiAgICBpZiAoY29sLmZvcm1hdCkge1xyXG4gICAgICByZXQudiA9IGNvbC5mb3JtYXQoaXRlbSwgY29sKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHZhbCA9IGRlZXBHZXQoaXRlbSwgY29sLmluZGV4IGFzIHN0cmluZ1tdLCAnJyk7XHJcbiAgICAgIHJldC52ID0gdmFsO1xyXG4gICAgICBzd2l0Y2ggKGNvbC50eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnY3VycmVuY3knOlxyXG4gICAgICAgICAgcmV0LnQgPSAnbic7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdkYXRlJzpcclxuICAgICAgICAgIHJldC50ID0gJ2QnO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAneW4nOlxyXG4gICAgICAgICAgcmV0LnYgPSByZXQudiA9PT0gY29sLnluVHJ1dGggPyBjb2wueW5ZZXMgfHwgJ8OmwpjCrycgOiBjb2wueW5ObyB8fCAnw6XCkMKmJztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJldDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2VuU2hlZXQob3B0OiBTVEV4cG9ydE9wdGlvbnMpOiB7IFtzaGVldDogc3RyaW5nXTogYW55IH0ge1xyXG4gICAgY29uc3Qgc2hlZXRzOiB7IFtzaGVldDogc3RyaW5nXTogYW55IH0gPSB7fTtcclxuICAgIGNvbnN0IHNoZWV0ID0gKHNoZWV0c1tvcHQuc2hlZXRuYW1lIHx8ICdTaGVldDEnXSA9IHt9KTtcclxuICAgIGNvbnN0IGNvbERhdGEgPSBvcHQuX2MuZmlsdGVyKFxyXG4gICAgICB3ID0+XHJcbiAgICAgICAgdy5leHBvcnRlZCAhPT0gZmFsc2UgJiZcclxuICAgICAgICB3LmluZGV4ICYmXHJcbiAgICAgICAgKCF3LmJ1dHRvbnMgfHwgdy5idXR0b25zLmxlbmd0aCA9PT0gMCksXHJcbiAgICApO1xyXG4gICAgY29uc3QgY2MgPSBjb2xEYXRhLmxlbmd0aCxcclxuICAgICAgZGMgPSBvcHQuX2QubGVuZ3RoO1xyXG4gICAgLy8gcmVnaW9uOiBjb2x1bW5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2M7IGkrKykge1xyXG4gICAgICBzaGVldFtgJHtTdHJpbmcuZnJvbUNoYXJDb2RlKDY1ICsgaSl9MWBdID0ge1xyXG4gICAgICAgIHQ6ICdzJyxcclxuICAgICAgICB2OiBjb2xEYXRhW2ldLnRpdGxlLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgLy8gZW5kcmVnaW9uXHJcblxyXG4gICAgLy8gcmVnaW9uOiBjb250ZW50XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRjOyBpKyspIHtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjYzsgaisrKSB7XHJcbiAgICAgICAgc2hlZXRbYCR7U3RyaW5nLmZyb21DaGFyQ29kZSg2NSArIGopfSR7aSArIDJ9YF0gPSB0aGlzLl9zdEdldChcclxuICAgICAgICAgIG9wdC5fZFtpXSxcclxuICAgICAgICAgIGNvbERhdGFbal0sXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gZW5kcmVnaW9uXHJcblxyXG4gICAgaWYgKGNjID4gMCAmJiBkYyA+IDApIHtcclxuICAgICAgc2hlZXRbJyFyZWYnXSA9IGBBMToke1N0cmluZy5mcm9tQ2hhckNvZGUoNjUgKyBjYyAtIDEpfSR7ZGMgKyAxfWA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHNoZWV0cztcclxuICB9XHJcblxyXG4gIGV4cG9ydChvcHQ6IFNURXhwb3J0T3B0aW9ucykge1xyXG4gICAgaWYgKCF0aGlzLnhsc3hTcnYpXHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgbXVzZSBiZSBpbXBvcnQgJ1hsc3hNb2R1bGUnIG1vZHVsZSwgYnV0IGdvdCBudWxsYCk7XHJcbiAgICBjb25zdCBzaGVldHMgPSB0aGlzLmdlblNoZWV0KG9wdCk7XHJcbiAgICByZXR1cm4gdGhpcy54bHN4U3J2LmV4cG9ydCh7XHJcbiAgICAgIHNoZWV0cyxcclxuICAgICAgZmlsZW5hbWU6IG9wdC5maWxlbmFtZSxcclxuICAgICAgY2FsbGJhY2s6IG9wdC5jYWxsYmFjayxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBJbmplY3QsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkNoYW5nZXMsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgU2ltcGxlQ2hhbmdlLFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBPcHRpb25hbCxcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEZWNpbWFsUGlwZSwgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24sIG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHtcclxuICBDTkN1cnJlbmN5UGlwZSxcclxuICBEYXRlUGlwZSxcclxuICBZTlBpcGUsXHJcbiAgTW9kYWxIZWxwZXIsXHJcbiAgTW9kYWxIZWxwZXJPcHRpb25zLFxyXG4gIEFMQUlOX0kxOE5fVE9LRU4sXHJcbiAgQWxhaW5JMThOU2VydmljZSxcclxuICBEcmF3ZXJIZWxwZXIsXHJcbiAgRHJhd2VySGVscGVyT3B0aW9uc1xyXG59IGZyb20gJ0BkZWxvbi90aGVtZSc7XHJcbmltcG9ydCB7XHJcbiAgZGVlcENvcHksXHJcbiAgdG9Cb29sZWFuLFxyXG4gIHVwZGF0ZUhvc3RDbGFzcyxcclxuICBJbnB1dEJvb2xlYW4sXHJcbiAgSW5wdXROdW1iZXIsXHJcbn0gZnJvbSAnQGRlbG9uL3V0aWwnO1xyXG5cclxuaW1wb3J0IHtcclxuICBTVENvbHVtbixcclxuICBTVENoYW5nZSxcclxuICBTVENvbHVtblNlbGVjdGlvbixcclxuICBTVENvbHVtbkZpbHRlck1lbnUsXHJcbiAgU1REYXRhLFxyXG4gIFNUQ29sdW1uQnV0dG9uLFxyXG4gIFNURXhwb3J0T3B0aW9ucyxcclxuICBTVE11bHRpU29ydCxcclxuICBTVFJlcSxcclxuICBTVEVycm9yLFxyXG4gIFNUQ2hhbmdlVHlwZSxcclxuICBTVENoYW5nZVJvd0NsaWNrLFxyXG4gIFNUUmVzLFxyXG4gIFNUUGFnZSxcclxuICBTVExvYWRPcHRpb25zLFxyXG59IGZyb20gJy4vdGFibGUuaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7IFNUQ29uZmlnIH0gZnJvbSAnLi90YWJsZS5jb25maWcnO1xyXG5pbXBvcnQgeyBTVEV4cG9ydCB9IGZyb20gJy4vdGFibGUtZXhwb3J0JztcclxuaW1wb3J0IHsgU1RDb2x1bW5Tb3VyY2UgfSBmcm9tICcuL3RhYmxlLWNvbHVtbi1zb3VyY2UnO1xyXG5pbXBvcnQgeyBTVFJvd1NvdXJjZSB9IGZyb20gJy4vdGFibGUtcm93LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFNURGF0YVNvdXJjZSB9IGZyb20gJy4vdGFibGUtZGF0YS1zb3VyY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYmxlLmNvbXBvbmVudC5odG1sJyxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIFNURGF0YVNvdXJjZSxcclxuICAgIFNUUm93U291cmNlLFxyXG4gICAgU1RDb2x1bW5Tb3VyY2UsXHJcbiAgICBTVEV4cG9ydCxcclxuICAgIENOQ3VycmVuY3lQaXBlLFxyXG4gICAgRGF0ZVBpcGUsXHJcbiAgICBZTlBpcGUsXHJcbiAgICBEZWNpbWFsUGlwZSxcclxuICBdLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU1RDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSBpMThuJDogU3Vic2NyaXB0aW9uO1xyXG4gIHByaXZhdGUgdG90YWxUcGwgPSBgYDtcclxuICBfZGF0YTogU1REYXRhW10gPSBbXTtcclxuICBfaXNQYWdpbmF0aW9uID0gdHJ1ZTtcclxuICBfYWxsQ2hlY2tlZCA9IGZhbHNlO1xyXG4gIF9pbmRldGVybWluYXRlID0gZmFsc2U7XHJcbiAgX2NvbHVtbnM6IFNUQ29sdW1uW10gPSBbXTtcclxuXHJcbiAgLy8gI3JlZ2lvbiBmaWVsZHNcclxuXHJcbiAgLyoqIMOmwpXCsMOmwo3CrsOmwrrCkCAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZGF0YTogc3RyaW5nIHwgU1REYXRhW10gfCBPYnNlcnZhYmxlPFNURGF0YVtdPjtcclxuICAvKiogw6jCr8K3w6bCscKCw6TCvcKTw6nChcKNw6fCvcKuICovXHJcbiAgQElucHV0KClcclxuICBnZXQgcmVxKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3JlcTtcclxuICB9XHJcbiAgc2V0IHJlcSh2YWx1ZTogU1RSZXEpIHtcclxuICAgIGNvbnN0IHsgcmVxIH0gPSB0aGlzLmNvZztcclxuICAgIGNvbnN0IGl0ZW0gPSBPYmplY3QuYXNzaWduKHt9LCByZXEsIHZhbHVlKTtcclxuICAgIGlmIChpdGVtLnJlTmFtZSA9PSBudWxsKSB7XHJcbiAgICAgIGl0ZW0ucmVOYW1lID0gZGVlcENvcHkocmVxLnJlTmFtZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9yZXEgPSBpdGVtO1xyXG4gIH1cclxuICBwcml2YXRlIF9yZXE6IFNUUmVxO1xyXG4gIC8qKiDDqMK/wpTDpcKbwp7DpMK9wpPDqcKFwo3Dp8K9wq4gKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCByZXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcmVzO1xyXG4gIH1cclxuICBzZXQgcmVzKHZhbHVlOiBTVFJlcykge1xyXG4gICAgY29uc3QgeyByZXMgfSA9IHRoaXMuY29nO1xyXG4gICAgY29uc3QgaXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIHJlcywgdmFsdWUpO1xyXG4gICAgaXRlbS5yZU5hbWUgPSBPYmplY3QuYXNzaWduKHt9LCByZXMucmVOYW1lLCBpdGVtLnJlTmFtZSk7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoaXRlbS5yZU5hbWUubGlzdCkpXHJcbiAgICAgIGl0ZW0ucmVOYW1lLmxpc3QgPSBpdGVtLnJlTmFtZS5saXN0LnNwbGl0KCcuJyk7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoaXRlbS5yZU5hbWUudG90YWwpKVxyXG4gICAgICBpdGVtLnJlTmFtZS50b3RhbCA9IGl0ZW0ucmVOYW1lLnRvdGFsLnNwbGl0KCcuJyk7XHJcbiAgICB0aGlzLl9yZXMgPSBpdGVtO1xyXG4gIH1cclxuICBwcml2YXRlIF9yZXM6IFNUUmVzO1xyXG4gIC8qKiDDpcKIwpfDpsKPwo/DqMK/wrAgICovXHJcbiAgQElucHV0KClcclxuICBjb2x1bW5zOiBTVENvbHVtbltdID0gW107XHJcbiAgLyoqIMOmwq/Cj8OpwqHCtcOmwpXCsMOpwofCj8OvwrzCjMOlwr3Ck8Oowq7CvsOnwr3CrsOkwrjCuiBgMGAgw6jCocKow6fCpMK6w6TCuMKNw6XCiMKGw6nCocK1w6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYDEwYCAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgQElucHV0TnVtYmVyKClcclxuICBwcyA9IDEwO1xyXG4gIC8qKiDDpcK9wpPDpcKJwo3DqcKhwrXDp8KgwoEgKi9cclxuICBASW5wdXQoKVxyXG4gIEBJbnB1dE51bWJlcigpXHJcbiAgcGkgPSAxO1xyXG4gIC8qKiDDpsKVwrDDpsKNwq7DpsKAwrvDqcKHwo8gKi9cclxuICBASW5wdXQoKVxyXG4gIEBJbnB1dE51bWJlcigpXHJcbiAgdG90YWwgPSAwO1xyXG4gIC8qKiDDpcKIwobDqcKhwrXDpcKZwqjDqcKFwo3Dp8K9wq4gKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCBwYWdlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3BhZ2U7XHJcbiAgfVxyXG4gIHNldCBwYWdlKHZhbHVlOiBTVFBhZ2UpIHtcclxuICAgIGNvbnN0IHsgcGFnZSB9ID0gdGhpcy5jb2c7XHJcbiAgICBjb25zdCBpdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgZGVlcENvcHkocGFnZSksIHZhbHVlKTtcclxuICAgIGNvbnN0IHsgdG90YWwgfSA9IGl0ZW07XHJcbiAgICBpZiAodHlwZW9mIHRvdGFsID09PSAnc3RyaW5nJyAmJiB0b3RhbC5sZW5ndGgpIHtcclxuICAgICAgdGhpcy50b3RhbFRwbCA9IHRvdGFsO1xyXG4gICAgfSBlbHNlIGlmICh0b0Jvb2xlYW4odG90YWwpKSB7XHJcbiAgICAgIHRoaXMudG90YWxUcGwgPSBgw6XChcKxIHt7dG90YWx9fSDDpsKdwqFgO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy50b3RhbFRwbCA9ICcnO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fcGFnZSA9IGl0ZW07XHJcbiAgfVxyXG4gIHByaXZhdGUgX3BhZ2U6IFNUUGFnZTtcclxuICAvKiogw6bCmMKvw6XCkMKmw6bCmMK+w6fCpMK6TG9hZGluZyAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgQElucHV0Qm9vbGVhbigpXHJcbiAgbG9hZGluZyA9IGZhbHNlO1xyXG4gIC8qKiDDpcK7wrbDqMK/wp/DpsKYwr7Dp8KkwrrDpcKKwqDDqMK9wr3DpsKVwojDpsKewpzDp8KawoTDpsKXwrbDqcKXwrTDr8K8wojDqcKYwrLDpsKtwqLDqcKXwqrDp8KDwoHDr8K8wokgKi9cclxuICBASW5wdXQoKVxyXG4gIEBJbnB1dE51bWJlcigpXHJcbiAgbG9hZGluZ0RlbGF5ID0gMDtcclxuICAvKiogw6bCmMKvw6XCkMKmw6bCmMK+w6fCpMK6w6jCvsK5w6bCocKGICovXHJcbiAgQElucHV0KClcclxuICBASW5wdXRCb29sZWFuKClcclxuICBib3JkZXJlZCA9IGZhbHNlO1xyXG4gIC8qKiB0YWJsZcOlwqTCp8OlwrDCjyAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgc2l6ZTogJ3NtYWxsJyB8ICdtaWRkbGUnIHwgJ2RlZmF1bHQnO1xyXG4gIC8qKiDDp8K6wrXDpcKQwpHDpsKUwq/DpsKMwoHDpsK7wprDpcKKwqjDr8K8wozDpMK5wp/DpcKPwq/Dp8KUwqjDpMK6wo7DpsKMwofDpcKuwprDpsK7wprDpcKKwqjDpcKMwrrDpcKfwp/Dp8KawoTDqcKrwpjDpcK6wqbDr8K8wppgeyB5OiAnMzAwcHgnLCB4OiAnMzAwcHgnIH1gICovXHJcbiAgQElucHV0KClcclxuICBzY3JvbGw6IHsgeT86IHN0cmluZzsgeD86IHN0cmluZyB9O1xyXG4gIC8qKiDDpsKYwq/DpcKQwqbDpcKkwprDpsKOwpLDpcK6wo/Dr8K8wozDpcK9wpMgYHNvcnRgIMOlwqTCmsOkwrjCqsOnwpvCuMOlwpDCjMOlwoDCvMOmwpfCtsOowofCqsOlworCqMOlwpDCiMOlwrnCtsOvwrzCjMOlwrvCusOowq7CrsOlwpDCjsOnwqvCr8OmwpTCr8OmwozCgcOmwpfCtsOkwr3Cv8OnwpTCqCAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IG11bHRpU29ydCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9tdWx0aVNvcnQ7XHJcbiAgfVxyXG4gIHNldCBtdWx0aVNvcnQodmFsdWU6IGFueSkge1xyXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nICYmICF0b0Jvb2xlYW4odmFsdWUpKSB7XHJcbiAgICAgIHRoaXMuX211bHRpU29ydCA9IG51bGw7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuX211bHRpU29ydCA9IE9iamVjdC5hc3NpZ24oXHJcbiAgICAgIDxTVE11bHRpU29ydD57XHJcbiAgICAgICAga2V5OiAnc29ydCcsXHJcbiAgICAgICAgc2VwYXJhdG9yOiAnLScsXHJcbiAgICAgICAgbmFtZVNlcGFyYXRvcjogJy4nLFxyXG4gICAgICB9LFxyXG4gICAgICB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnID8gdmFsdWUgOiB7fSxcclxuICAgICk7XHJcbiAgfVxyXG4gIHByaXZhdGUgX211bHRpU29ydDogU1RNdWx0aVNvcnQ7XHJcbiAgLyoqIGBoZWFkZXJgIMOmwqDCh8OpwqLCmCAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgaGVhZGVyOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICAvKiogYGZvb3RlcmAgw6XCusKVw6nCg8KoICovXHJcbiAgQElucHV0KClcclxuICBmb290ZXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIC8qKiDDqcKiwp3DpcKkwpYgYGJvZHlgIMOlwobChcOlwq7CuSAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgYm9keTogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgLyoqIGBleHBhbmRgIMOlwo/Cr8OlwrHClcOlwrzCgMOvwrzCjMOlwr3Ck8OmwpXCsMOmwo3CrsOmwrrCkMOkwrjCrcOlwozChcOmwovCrCBgZXhwYW5kYCDDqMKhwqjDp8KkwrrDpcKxwpXDpcK8woDDp8KKwrbDpsKAwoEgKi9cclxuICBASW5wdXQoKVxyXG4gIGV4cGFuZDogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IGFueTsgY29sdW1uOiBTVENvbHVtbiB9PjtcclxuICBASW5wdXQoKVxyXG4gIG5vUmVzdWx0OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKVxyXG4gIHdpZHRoQ29uZmlnOiBzdHJpbmdbXTtcclxuICAvKiogw6jCr8K3w6bCscKCw6XCvMKCw6XCuMK4w6bCl8K2w6XCm8Kew6jCsMKDICovXHJcbiAgQE91dHB1dCgpXHJcbiAgcmVhZG9ubHkgZXJyb3I6IEV2ZW50RW1pdHRlcjxTVEVycm9yPiA9IG5ldyBFdmVudEVtaXR0ZXI8U1RFcnJvcj4oKTtcclxuICAvKipcclxuICAgKiDDpcKPwpjDpcKMwpbDpsKXwrbDpcKbwp7DqMKwwoPDr8K8wozDpcKMwoXDpsKLwqzDr8K8wppgcGlgw6PCgMKBYHBzYMOjwoDCgWBjaGVja2JveGDDo8KAwoFgcmFkaW9gw6PCgMKBYHNvcnRgw6PCgMKBYGZpbHRlcmDDo8KAwoFgY2xpY2tgw6PCgMKBYGRibENsaWNrYCDDpcKPwpjDpcKKwqhcclxuICAgKi9cclxuICBAT3V0cHV0KClcclxuICByZWFkb25seSBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxTVENoYW5nZT4gPSBuZXcgRXZlbnRFbWl0dGVyPFNUQ2hhbmdlPigpO1xyXG4gIC8qKiDDqMKhwozDpcKNwpXDpcKHwrvDpcKkwprDpcKwwpHDpsKXwrbDqcKVwr/DpMK5wovDp8KxwrvDpMK4wrrDpcKPwozDpcKHwrvDr8K8wojDpcKNwpXDpMK9wo3Dr8K8wprDpsKvwqvDp8KnwpLDr8K8wonDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgMjAwYCAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgQElucHV0TnVtYmVyKClcclxuICByb3dDbGlja1RpbWUgPSAyMDA7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgQElucHV0Qm9vbGVhbigpXHJcbiAgcmVzcG9uc2l2ZUhpZGVIZWFkZXJGb290ZXI6IGJvb2xlYW47XHJcblxyXG4gIC8vICNlbmRyZWdpb25cclxuXHJcbiAgLy8gI3JlZ2lvbiBjb21wYXRpYmxlXHJcblxyXG4gIC8qKlxyXG4gICAqIGNoZWNrYm94w6XCj8KYw6XCjMKWw6bCl8K2w6XCm8Kew6jCsMKDw6/CvMKMw6XCj8KCw6bClcKww6TCuMK6w6XCvcKTw6XCicKNw6bCicKAw6nCgMKJw6bCuMKFw6XCjcKVXHJcbiAgICogQGRlcHJlY2F0ZWQgw6TCvcK/w6fClMKoIGBjaGFuZ2VgIMOmwpvCv8OkwrvCo1xyXG4gICAqIEBkZXByZWNhdGVkIGFzIG9mIHYzXHJcbiAgICovXHJcbiAgQE91dHB1dCgpXHJcbiAgcmVhZG9ubHkgY2hlY2tib3hDaGFuZ2U6IEV2ZW50RW1pdHRlcjxTVERhdGFbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPFxyXG4gICAgU1REYXRhW11cclxuICAgID4oKTtcclxuICAvKipcclxuICAgKiByYWRpb8Olwo/CmMOlwozClsOmwpfCtsOlwpvCnsOowrDCg8OvwrzCjMOlwo/CgsOmwpXCsMOkwrjCusOlwr3Ck8OlwonCjcOmwonCgMOpwoDCiVxyXG4gICAqIEBkZXByZWNhdGVkIMOkwr3Cv8OnwpTCqCBgY2hhbmdlYCDDpsKbwr/DpMK7wqNcclxuICAgKiBAZGVwcmVjYXRlZCBhcyBvZiB2M1xyXG4gICAqL1xyXG4gIEBPdXRwdXQoKVxyXG4gIHJlYWRvbmx5IHJhZGlvQ2hhbmdlOiBFdmVudEVtaXR0ZXI8U1REYXRhPiA9IG5ldyBFdmVudEVtaXR0ZXI8U1REYXRhPigpO1xyXG4gIC8qKlxyXG4gICAqIMOmwo7CksOlwrrCj8OlwpvCnsOowrDCg1xyXG4gICAqIEBkZXByZWNhdGVkIMOkwr3Cv8OnwpTCqCBgY2hhbmdlYCDDpsKbwr/DpMK7wqNcclxuICAgKiBAZGVwcmVjYXRlZCBhcyBvZiB2M1xyXG4gICAqL1xyXG4gIEBPdXRwdXQoKVxyXG4gIHJlYWRvbmx5IHNvcnRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgLyoqXHJcbiAgICogw6jCv8KHw6bCu8Kkw6XCj8KYw6XCjMKWw6bCl8K2w6XCm8Kew6jCsMKDXHJcbiAgICogQGRlcHJlY2F0ZWQgw6TCvcK/w6fClMKoIGBjaGFuZ2VgIMOmwpvCv8OkwrvCo1xyXG4gICAqIEBkZXByZWNhdGVkIGFzIG9mIHYzXHJcbiAgICovXHJcbiAgQE91dHB1dCgpXHJcbiAgcmVhZG9ubHkgZmlsdGVyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8U1RDb2x1bW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxTVENvbHVtbj4oKTtcclxuICAvKipcclxuICAgKiDDqMKhwozDpcKNwpXDpcKHwrvDpcKbwp7DqMKwwoNcclxuICAgKiBAZGVwcmVjYXRlZCDDpMK9wr/Dp8KUwqggYGNoYW5nZWAgw6bCm8K/w6TCu8KjXHJcbiAgICogQGRlcHJlY2F0ZWQgYXMgb2YgdjNcclxuICAgKi9cclxuICBAT3V0cHV0KClcclxuICByZWFkb25seSByb3dDbGljazogRXZlbnRFbWl0dGVyPFNUQ2hhbmdlUm93Q2xpY2s+ID0gbmV3IEV2ZW50RW1pdHRlcjxcclxuICAgIFNUQ2hhbmdlUm93Q2xpY2tcclxuICAgID4oKTtcclxuICAvKipcclxuICAgKiDDqMKhwozDpcKPwozDpcKHwrvDpcKbwp7DqMKwwoNcclxuICAgKiBAZGVwcmVjYXRlZCDDpMK9wr/Dp8KUwqggYGNoYW5nZWAgw6bCm8K/w6TCu8KjXHJcbiAgICogQGRlcHJlY2F0ZWQgYXMgb2YgdjNcclxuICAgKi9cclxuICBAT3V0cHV0KClcclxuICByZWFkb25seSByb3dEYmxDbGljazogRXZlbnRFbWl0dGVyPFNUQ2hhbmdlUm93Q2xpY2s+ID0gbmV3IEV2ZW50RW1pdHRlcjxcclxuICAgIFNUQ2hhbmdlUm93Q2xpY2tcclxuICAgID4oKTtcclxuICAvLyNlbmRyZWdpb25cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgY29nOiBTVENvbmZpZyxcclxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBleHBvcnRTcnY6IFNURXhwb3J0LFxyXG4gICAgQE9wdGlvbmFsKClcclxuICAgIEBJbmplY3QoQUxBSU5fSTE4Tl9UT0tFTilcclxuICAgIGkxOG5TcnY6IEFsYWluSTE4TlNlcnZpY2UsXHJcbiAgICBwcml2YXRlIG1vZGFsSGVscGVyOiBNb2RhbEhlbHBlcixcclxuICAgIHByaXZhdGUgZHJhd2VySGVscGVyOiBEcmF3ZXJIZWxwZXIsXHJcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogYW55LFxyXG4gICAgcHJpdmF0ZSBjb2x1bW5Tb3VyY2U6IFNUQ29sdW1uU291cmNlLFxyXG4gICAgcHJpdmF0ZSBkYXRhU291cmNlOiBTVERhdGFTb3VyY2UsXHJcbiAgKSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRlZXBDb3B5KGNvZykpO1xyXG4gICAgaWYgKGkxOG5TcnYpIHtcclxuICAgICAgdGhpcy5pMThuJCA9IGkxOG5TcnYuY2hhbmdlXHJcbiAgICAgICAgLnBpcGUoZmlsdGVyKCgpID0+IHRoaXMuX2NvbHVtbnMubGVuZ3RoID4gMCkpXHJcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLnVwZGF0ZUNvbHVtbnMoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXJUb3RhbCh0b3RhbDogc3RyaW5nLCByYW5nZTogc3RyaW5nW10pIHtcclxuICAgIHJldHVybiB0aGlzLnRvdGFsVHBsXHJcbiAgICAgID8gdGhpcy50b3RhbFRwbFxyXG4gICAgICAgIC5yZXBsYWNlKCd7e3RvdGFsfX0nLCB0b3RhbClcclxuICAgICAgICAucmVwbGFjZSgne3tyYW5nZVswXX19JywgcmFuZ2VbMF0pXHJcbiAgICAgICAgLnJlcGxhY2UoJ3t7cmFuZ2VbMV19fScsIHJhbmdlWzFdKVxyXG4gICAgICA6ICcnO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjaGFuZ2VFbWl0KHR5cGU6IFNUQ2hhbmdlVHlwZSwgZGF0YT86IGFueSkge1xyXG4gICAgY29uc3QgcmVzOiBTVENoYW5nZSA9IHtcclxuICAgICAgdHlwZSxcclxuICAgICAgcGk6IHRoaXMucGksXHJcbiAgICAgIHBzOiB0aGlzLnBzLFxyXG4gICAgICB0b3RhbDogdGhpcy50b3RhbCxcclxuICAgIH07XHJcbiAgICBpZiAoZGF0YSAhPSBudWxsKSB7XHJcbiAgICAgIHJlc1t0eXBlXSA9IGRhdGE7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNoYW5nZS5lbWl0KHJlcyk7XHJcbiAgfVxyXG5cclxuICAvLyNyZWdpb24gZGF0YVxyXG5cclxuICBwcml2YXRlIF9sb2FkKCkge1xyXG4gICAgY29uc3QgeyBwaSwgcHMsIGRhdGEsIHJlcSwgcmVzLCBwYWdlLCB0b3RhbCwgbXVsdGlTb3J0IH0gPSB0aGlzO1xyXG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgIHJldHVybiB0aGlzLmRhdGFTb3VyY2VcclxuICAgICAgLnByb2Nlc3Moe1xyXG4gICAgICAgIHBpLFxyXG4gICAgICAgIHBzLFxyXG4gICAgICAgIHRvdGFsLFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICAgICAgcmVxLFxyXG4gICAgICAgIHJlcyxcclxuICAgICAgICBwYWdlLFxyXG4gICAgICAgIGNvbHVtbnM6IHRoaXMuX2NvbHVtbnMsXHJcbiAgICAgICAgbXVsdGlTb3J0LFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0LnBpICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgdGhpcy5waSA9IHJlc3VsdC5waTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQudG90YWwgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICB0aGlzLnRvdGFsID0gcmVzdWx0LnRvdGFsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdC5wYWdlU2hvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgIHRoaXMuX2lzUGFnaW5hdGlvbiA9IHJlc3VsdC5wYWdlU2hvdztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fZGF0YSA9IHJlc3VsdC5saXN0O1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoKSA9PiB0aGlzLl9yZWZDaGVjaygpKVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZXJyb3IuZW1pdCh7IHR5cGU6ICdyZXEnLCBlcnJvciB9KTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDDpsKgwrnDpsKNwq7DqcKhwrXDp8KgwoHDqcKHwo3DpsKWwrDDpcKKwqDDqMK9wr3DpsKVwrDDpsKNwq5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBwaSDDpsKMwofDpcKuwprDpcK9wpPDpcKJwo3DqcKhwrXDp8KgwoHDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgMWBcclxuICAgKiBAcGFyYW0gZXh0cmFQYXJhbXMgw6nCh8KNw6bClsKww6bCjMKHw6XCrsKaIGBleHRyYVBhcmFtc2Agw6XCgMK8XHJcbiAgICogQHBhcmFtIG9wdGlvbnMgw6nCgMKJw6nCocK5XHJcbiAgICovXHJcbiAgbG9hZChwaSA9IDEsIGV4dHJhUGFyYW1zPzogYW55LCBvcHRpb25zPzogU1RMb2FkT3B0aW9ucykge1xyXG4gICAgaWYgKHBpICE9PSAtMSkgdGhpcy5waSA9IHBpO1xyXG4gICAgaWYgKHR5cGVvZiBleHRyYVBhcmFtcyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgdGhpcy5fcmVxLnBhcmFtcyA9XHJcbiAgICAgICAgb3B0aW9ucyAmJiBvcHRpb25zLm1lcmdlXHJcbiAgICAgICAgICA/IE9iamVjdC5hc3NpZ24odGhpcy5fcmVxLnBhcmFtcywgZXh0cmFQYXJhbXMpXHJcbiAgICAgICAgICA6IGV4dHJhUGFyYW1zO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fY2hhbmdlKCdwaScpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogw6nCh8KNw6bClsKww6XCiMK3w6bClsKww6XCvcKTw6XCicKNw6nCocK1XHJcbiAgICogQHBhcmFtIGV4dHJhUGFyYW1zIMOpwofCjcOmwpbCsMOmwozCh8Olwq7CmiBgZXh0cmFQYXJhbXNgIMOlwoDCvFxyXG4gICAqL1xyXG4gIHJlbG9hZChleHRyYVBhcmFtcz86IGFueSwgb3B0aW9ucz86IFNUTG9hZE9wdGlvbnMpIHtcclxuICAgIHRoaXMubG9hZCgtMSwgZXh0cmFQYXJhbXMsIG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogw6nCh8KNw6fCvcKuw6TCuMKUw6nCh8KNw6bClsKww6jCrsK+w6fCvcKuIGBwaWAgw6TCuMK6IGAxYMOvwrzCjMOlwozChcOlwpDCq8OkwrvCpcOkwrjCi8OlwoDCvMOvwrzCmlxyXG4gICAqIC0gYGNoZWNrYCDDpsKVwrDDpsKNwq5cclxuICAgKiAtIGByYWRpb2Agw6bClcKww6bCjcKuXHJcbiAgICogLSBgc29ydGAgw6bClcKww6bCjcKuXHJcbiAgICogLSBgZmlsZXRlcmAgw6bClcKww6bCjcKuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZXh0cmFQYXJhbXMgw6nCh8KNw6bClsKww6bCjMKHw6XCrsKaIGBleHRyYVBhcmFtc2Agw6XCgMK8XHJcbiAgICovXHJcbiAgcmVzZXQoZXh0cmFQYXJhbXM/OiBhbnksIG9wdGlvbnM/OiBTVExvYWRPcHRpb25zKSB7XHJcbiAgICB0aGlzLmNsZWFyQ2hlY2soKVxyXG4gICAgICAuY2xlYXJSYWRpbygpXHJcbiAgICAgIC5jbGVhckZpbHRlcigpXHJcbiAgICAgIC5jbGVhclNvcnQoKTtcclxuICAgIHRoaXMubG9hZCgxLCBleHRyYVBhcmFtcywgb3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF90b1RvcCgpIHtcclxuICAgIGlmICghdGhpcy5wYWdlLnRvVG9wKSByZXR1cm47XHJcbiAgICBjb25zdCBlbCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcclxuICAgIGlmICh0aGlzLnNjcm9sbCkge1xyXG4gICAgICBlbC5xdWVyeVNlbGVjdG9yKCcuYW50LXRhYmxlLWJvZHknKS5zY3JvbGxUbygwLCAwKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZWwuc2Nyb2xsSW50b1ZpZXcoKTtcclxuICAgIC8vIGZpeCBoZWFkZXIgaGVpZ2h0XHJcbiAgICB0aGlzLmRvYy5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIC09IHRoaXMucGFnZS50b1RvcE9mZnNldDtcclxuICB9XHJcblxyXG4gIF9jaGFuZ2UodHlwZTogJ3BpJyB8ICdwcycpIHtcclxuICAgIHRoaXMuX2xvYWQoKS50aGVuKCgpID0+IHtcclxuICAgICAgdGhpcy5fdG9Ub3AoKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5jaGFuZ2VFbWl0KHR5cGUpO1xyXG4gIH1cclxuXHJcbiAgX2NsaWNrKGU6IEV2ZW50LCBpdGVtOiBhbnksIGNvbDogU1RDb2x1bW4pIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBjb25zdCByZXMgPSBjb2wuY2xpY2soaXRlbSwgdGhpcyk7XHJcbiAgICBpZiAodHlwZW9mIHJlcyA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChyZXMpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByb3dDbGlja0NvdW50ID0gMDtcclxuICBfcm93Q2xpY2soZTogRXZlbnQsIGl0ZW06IGFueSwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgaWYgKChlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkubm9kZU5hbWUgPT09ICdJTlBVVCcpIHJldHVybjtcclxuICAgICsrdGhpcy5yb3dDbGlja0NvdW50O1xyXG4gICAgaWYgKHRoaXMucm93Q2xpY2tDb3VudCAhPT0gMSkgcmV0dXJuO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSB7IGUsIGl0ZW0sIGluZGV4IH07XHJcbiAgICAgIGlmICh0aGlzLnJvd0NsaWNrQ291bnQgPT09IDEpIHtcclxuICAgICAgICB0aGlzLmNoYW5nZUVtaXQoJ2NsaWNrJywgZGF0YSk7XHJcbiAgICAgICAgLy8gQGRlcHJlY2F0ZWQgYXMgb2YgdjNcclxuICAgICAgICB0aGlzLnJvd0NsaWNrLmVtaXQoZGF0YSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VFbWl0KCdkYmxDbGljaycsIGRhdGEpO1xyXG4gICAgICAgIC8vIEBkZXByZWNhdGVkIGFzIG9mIHYzXHJcbiAgICAgICAgdGhpcy5yb3dEYmxDbGljay5lbWl0KGRhdGEpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMucm93Q2xpY2tDb3VudCA9IDA7XHJcbiAgICB9LCB0aGlzLnJvd0NsaWNrVGltZSk7XHJcbiAgfVxyXG5cclxuICAvLyNlbmRyZWdpb25cclxuXHJcbiAgLy8jcmVnaW9uIHNvcnRcclxuXHJcbiAgc29ydChjb2w6IFNUQ29sdW1uLCBpZHg6IG51bWJlciwgdmFsdWU6IGFueSkge1xyXG4gICAgaWYgKHRoaXMubXVsdGlTb3J0KSB7XHJcbiAgICAgIGNvbC5fc29ydC5kZWZhdWx0ID0gdmFsdWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9jb2x1bW5zLmZvckVhY2goXHJcbiAgICAgICAgKGl0ZW0sIGluZGV4KSA9PiAoaXRlbS5fc29ydC5kZWZhdWx0ID0gaW5kZXggPT09IGlkeCA/IHZhbHVlIDogbnVsbCksXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9sb2FkKCk7XHJcbiAgICBjb25zdCByZXMgPSB7XHJcbiAgICAgIHZhbHVlLFxyXG4gICAgICBtYXA6IHRoaXMuZGF0YVNvdXJjZS5nZXRSZXFTb3J0TWFwKHRoaXMubXVsdGlTb3J0LCB0aGlzLl9jb2x1bW5zKSxcclxuICAgICAgY29sdW1uOiBjb2wsXHJcbiAgICB9O1xyXG4gICAgdGhpcy5jaGFuZ2VFbWl0KCdzb3J0JywgcmVzKTtcclxuICAgIC8vIEBkZXByZWNhdGVkIGFzIG9mIHYzXHJcbiAgICB0aGlzLnNvcnRDaGFuZ2UuZW1pdChyZXMpO1xyXG4gIH1cclxuXHJcbiAgY2xlYXJTb3J0KCkge1xyXG4gICAgdGhpcy5fY29sdW1ucy5mb3JFYWNoKGl0ZW0gPT4gKGl0ZW0uX3NvcnQuZGVmYXVsdCA9IG51bGwpKTtcclxuICB9XHJcblxyXG4gIC8vI2VuZHJlZ2lvblxyXG5cclxuICAvLyNyZWdpb24gZmlsdGVyXHJcblxyXG4gIHByaXZhdGUgaGFuZGxlRmlsdGVyKGNvbDogU1RDb2x1bW4pIHtcclxuICAgIGNvbC5maWx0ZXIuZGVmYXVsdCA9IGNvbC5maWx0ZXIubWVudXMuZmluZEluZGV4KHcgPT4gdy5jaGVja2VkKSAhPT0gLTE7XHJcbiAgICB0aGlzLl9sb2FkKCk7XHJcbiAgICB0aGlzLmNoYW5nZUVtaXQoJ2ZpbHRlcicsIGNvbCk7XHJcbiAgICAvLyBAZGVwcmVjYXRlZCBhcyBvZiB2M1xyXG4gICAgdGhpcy5maWx0ZXJDaGFuZ2UuZW1pdChjb2wpO1xyXG4gIH1cclxuXHJcbiAgX2ZpbHRlckNvbmZpcm0oY29sOiBTVENvbHVtbikge1xyXG4gICAgdGhpcy5oYW5kbGVGaWx0ZXIoY29sKTtcclxuICB9XHJcblxyXG4gIF9maWx0ZXJDbGVhcihjb2w6IFNUQ29sdW1uKSB7XHJcbiAgICBjb2wuZmlsdGVyLm1lbnVzLmZvckVhY2goaSA9PiAoaS5jaGVja2VkID0gZmFsc2UpKTtcclxuICAgIHRoaXMuaGFuZGxlRmlsdGVyKGNvbCk7XHJcbiAgfVxyXG5cclxuICBfZmlsdGVyUmFkaW8oY29sOiBTVENvbHVtbiwgaXRlbTogU1RDb2x1bW5GaWx0ZXJNZW51LCBjaGVja2VkOiBib29sZWFuKSB7XHJcbiAgICBjb2wuZmlsdGVyLm1lbnVzLmZvckVhY2goaSA9PiAoaS5jaGVja2VkID0gZmFsc2UpKTtcclxuICAgIGl0ZW0uY2hlY2tlZCA9IGNoZWNrZWQ7XHJcbiAgfVxyXG5cclxuICBjbGVhckZpbHRlcigpIHtcclxuICAgIHRoaXMuX2NvbHVtbnNcclxuICAgICAgLmZpbHRlcih3ID0+IHcuZmlsdGVyICYmIHcuZmlsdGVyLmRlZmF1bHQgPT09IHRydWUpXHJcbiAgICAgIC5mb3JFYWNoKGNvbCA9PiB7XHJcbiAgICAgICAgY29sLmZpbHRlci5kZWZhdWx0ID0gZmFsc2U7XHJcbiAgICAgICAgY29sLmZpbHRlci5tZW51cy5mb3JFYWNoKGYgPT4gKGYuY2hlY2tlZCA9IGZhbHNlKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvLyNlbmRyZWdpb25cclxuXHJcbiAgLy8jcmVnaW9uIGNoZWNrYm94XHJcblxyXG4gIC8qKiDDpsK4woXDqcKZwqTDpsKJwoDDpsKcwokgYGNoZWNrYm94YCAqL1xyXG4gIGNsZWFyQ2hlY2soKTogdGhpcyB7XHJcbiAgICByZXR1cm4gdGhpcy5fY2hlY2tBbGwoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfcmVmQ2hlY2soKTogdGhpcyB7XHJcbiAgICBjb25zdCB2YWxpZERhdGEgPSB0aGlzLl9kYXRhLmZpbHRlcih3ID0+ICF3LmRpc2FibGVkKTtcclxuICAgIGNvbnN0IGNoZWNrZWRMaXN0ID0gdmFsaWREYXRhLmZpbHRlcih3ID0+IHcuY2hlY2tlZCA9PT0gdHJ1ZSk7XHJcbiAgICB0aGlzLl9hbGxDaGVja2VkID1cclxuICAgICAgY2hlY2tlZExpc3QubGVuZ3RoID4gMCAmJiBjaGVja2VkTGlzdC5sZW5ndGggPT09IHZhbGlkRGF0YS5sZW5ndGg7XHJcbiAgICBjb25zdCBhbGxVbkNoZWNrZWQgPSB2YWxpZERhdGEuZXZlcnkodmFsdWUgPT4gIXZhbHVlLmNoZWNrZWQpO1xyXG4gICAgdGhpcy5faW5kZXRlcm1pbmF0ZSA9ICF0aGlzLl9hbGxDaGVja2VkICYmICFhbGxVbkNoZWNrZWQ7XHJcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgX2NoZWNrQWxsKGNoZWNrZWQ/OiBib29sZWFuKTogdGhpcyB7XHJcbiAgICBjaGVja2VkID0gdHlwZW9mIGNoZWNrZWQgPT09ICd1bmRlZmluZWQnID8gdGhpcy5fYWxsQ2hlY2tlZCA6IGNoZWNrZWQ7XHJcbiAgICB0aGlzLl9kYXRhLmZpbHRlcih3ID0+ICF3LmRpc2FibGVkKS5mb3JFYWNoKGkgPT4gKGkuY2hlY2tlZCA9IGNoZWNrZWQpKTtcclxuICAgIHJldHVybiB0aGlzLl9yZWZDaGVjaygpLl9jaGVja05vdGlmeSgpO1xyXG4gIH1cclxuXHJcbiAgX2NoZWNrU2VsZWN0aW9uKGk6IFNURGF0YSwgdmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIGkuY2hlY2tlZCA9IHZhbHVlO1xyXG4gICAgcmV0dXJuIHRoaXMuX3JlZkNoZWNrKCkuX2NoZWNrTm90aWZ5KCk7XHJcbiAgfVxyXG5cclxuICBfcm93U2VsZWN0aW9uKHJvdzogU1RDb2x1bW5TZWxlY3Rpb24pOiB0aGlzIHtcclxuICAgIHJvdy5zZWxlY3QodGhpcy5fZGF0YSk7XHJcbiAgICByZXR1cm4gdGhpcy5fcmVmQ2hlY2soKS5fY2hlY2tOb3RpZnkoKTtcclxuICB9XHJcblxyXG4gIF9jaGVja05vdGlmeSgpOiB0aGlzIHtcclxuICAgIGNvbnN0IHJlcyA9IHRoaXMuX2RhdGEuZmlsdGVyKHcgPT4gIXcuZGlzYWJsZWQgJiYgdy5jaGVja2VkID09PSB0cnVlKTtcclxuICAgIHRoaXMuY2hhbmdlRW1pdCgnY2hlY2tib3gnLCByZXMpO1xyXG4gICAgLy8gQGRlcHJlY2F0ZWQgYXMgb2YgdjNcclxuICAgIHRoaXMuY2hlY2tib3hDaGFuZ2UuZW1pdChyZXMpO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvLyNlbmRyZWdpb25cclxuXHJcbiAgLy8jcmVnaW9uIHJhZGlvXHJcblxyXG4gIC8qKiDDpsK4woXDqcKZwqTDpsKJwoDDpsKcwokgYHJhZGlvYCAqL1xyXG4gIGNsZWFyUmFkaW8oKTogdGhpcyB7XHJcbiAgICB0aGlzLl9kYXRhLmZpbHRlcih3ID0+IHcuY2hlY2tlZCkuZm9yRWFjaChpdGVtID0+IChpdGVtLmNoZWNrZWQgPSBmYWxzZSkpO1xyXG4gICAgdGhpcy5jaGFuZ2VFbWl0KCdyYWRpbycsIG51bGwpO1xyXG4gICAgLy8gQGRlcHJlY2F0ZWQgYXMgb2YgdjNcclxuICAgIHRoaXMucmFkaW9DaGFuZ2UuZW1pdChudWxsKTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgX3JlZlJhZGlvKGNoZWNrZWQ6IGJvb2xlYW4sIGl0ZW06IFNURGF0YSk6IHRoaXMge1xyXG4gICAgLy8gaWYgKGl0ZW0uZGlzYWJsZWQgPT09IHRydWUpIHJldHVybjtcclxuICAgIHRoaXMuX2RhdGEuZmlsdGVyKHcgPT4gIXcuZGlzYWJsZWQpLmZvckVhY2goaSA9PiAoaS5jaGVja2VkID0gZmFsc2UpKTtcclxuICAgIGl0ZW0uY2hlY2tlZCA9IGNoZWNrZWQ7XHJcbiAgICB0aGlzLmNoYW5nZUVtaXQoJ3JhZGlvJywgaXRlbSk7XHJcbiAgICAvLyBAZGVwcmVjYXRlZCBhcyBvZiB2M1xyXG4gICAgdGhpcy5yYWRpb0NoYW5nZS5lbWl0KGl0ZW0pO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvLyNlbmRyZWdpb25cclxuXHJcbiAgLy8jcmVnaW9uIGJ1dHRvbnNcclxuXHJcbiAgX2J0bkNsaWNrKGU6IEV2ZW50LCByZWNvcmQ6IGFueSwgYnRuOiBTVENvbHVtbkJ1dHRvbikge1xyXG4gICAgaWYgKGUpIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBpZiAoYnRuLnR5cGUgPT09ICdtb2RhbCcgfHwgYnRuLnR5cGUgPT09ICdzdGF0aWMnKSB7XHJcbiAgICAgIGNvbnN0IG9iaiA9IHt9O1xyXG4gICAgICBjb25zdCB7IG1vZGFsIH0gPSBidG47XHJcbiAgICAgIG9ialttb2RhbC5wYXJhbXNOYW1lXSA9IHJlY29yZDtcclxuICAgICAgY29uc3Qgb3B0aW9uczogTW9kYWxIZWxwZXJPcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgbW9kYWwpO1xyXG4gICAgICAodGhpcy5tb2RhbEhlbHBlcltcclxuICAgICAgICBidG4udHlwZSA9PT0gJ21vZGFsJyA/ICdjcmVhdGUnIDogJ2NyZWF0ZVN0YXRpYydcclxuICAgICAgXSBhcyBhbnkpKFxyXG4gICAgICAgIG1vZGFsLmNvbXBvbmVudCxcclxuICAgICAgICBPYmplY3QuYXNzaWduKG9iaiwgbW9kYWwucGFyYW1zICYmIG1vZGFsLnBhcmFtcyhyZWNvcmQpKSxcclxuICAgICAgICBvcHRpb25zLFxyXG4gICAgICApXHJcbiAgICAgICAgLnBpcGUoZmlsdGVyKHcgPT4gdHlwZW9mIHcgIT09ICd1bmRlZmluZWQnKSlcclxuICAgICAgICAuc3Vic2NyaWJlKHJlcyA9PiB0aGlzLmJ0bkNhbGxiYWNrKHJlY29yZCwgYnRuLCByZXMpKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfSBlbHNlIGlmIChidG4udHlwZSA9PT0gJ2RyYXdlcicpIHtcclxuICAgICAgY29uc3Qgb2JqID0ge307XHJcbiAgICAgIGNvbnN0IHsgZHJhd2VyIH0gPSBidG47XHJcbiAgICAgIG9ialtkcmF3ZXIucGFyYW1zTmFtZV0gPSByZWNvcmQ7XHJcbiAgICAgIGNvbnN0IG9wdGlvbnM6IERyYXdlckhlbHBlck9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBkcmF3ZXIpO1xyXG4gICAgICB0aGlzLmRyYXdlckhlbHBlci5jcmVhdGUoXHJcbiAgICAgICAgZHJhd2VyLnRpdGxlLFxyXG4gICAgICAgIGRyYXdlci5jb21wb25lbnQsXHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbihvYmosIGRyYXdlci5wYXJhbXMgJiYgZHJhd2VyLnBhcmFtcyhyZWNvcmQpKSxcclxuICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBkcmF3ZXIpXHJcbiAgICAgIClcclxuICAgICAgICAucGlwZShmaWx0ZXIodyA9PiB0eXBlb2YgdyAhPT0gJ3VuZGVmaW5lZCcpKVxyXG4gICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHRoaXMuYnRuQ2FsbGJhY2socmVjb3JkLCBidG4sIHJlcykpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9IGVsc2UgaWYgKGJ0bi50eXBlID09PSAnbGluaycpIHtcclxuICAgICAgY29uc3QgY2xpY2tSZXMgPSB0aGlzLmJ0bkNhbGxiYWNrKHJlY29yZCwgYnRuKTtcclxuICAgICAgaWYgKHR5cGVvZiBjbGlja1JlcyA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKGNsaWNrUmVzKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmJ0bkNhbGxiYWNrKHJlY29yZCwgYnRuKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYnRuQ2FsbGJhY2socmVjb3JkOiBhbnksIGJ0bjogU1RDb2x1bW5CdXR0b24sIG1vZGFsPzogYW55KSB7XHJcbiAgICBpZiAoIWJ0bi5jbGljaykgcmV0dXJuO1xyXG4gICAgaWYgKHR5cGVvZiBidG4uY2xpY2sgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHN3aXRjaCAoYnRuLmNsaWNrKSB7XHJcbiAgICAgICAgY2FzZSAnbG9hZCc6XHJcbiAgICAgICAgICB0aGlzLmxvYWQoKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3JlbG9hZCc6XHJcbiAgICAgICAgICB0aGlzLnJlbG9hZCgpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBidG4uY2xpY2socmVjb3JkLCBtb2RhbCwgdGhpcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfYnRuVGV4dChyZWNvcmQ6IGFueSwgYnRuOiBTVENvbHVtbkJ1dHRvbikge1xyXG4gICAgaWYgKGJ0bi5mb3JtYXQpIHJldHVybiBidG4uZm9ybWF0KHJlY29yZCwgYnRuKTtcclxuICAgIHJldHVybiBidG4udGV4dDtcclxuICB9XHJcblxyXG4gIC8vI2VuZHJlZ2lvblxyXG5cclxuICAvLyNyZWdpb24gZXhwb3J0XHJcblxyXG4gIC8qKlxyXG4gICAqIMOlwq/CvMOlwofCusOlwr3Ck8OlwonCjcOpwqHCtcOvwrzCjMOnwqHCrsOkwr/CncOlwrfCssOnwrvCj8OmwrPCqMOlwobCjCBgWGxzeE1vZHVsZWBcclxuICAgKiBAcGFyYW0gbmV3RGF0YSDDqcKHwo3DpsKWwrDDpsKMwofDpcKuwprDpsKVwrDDpsKNwq7Dr8K8wozDpMK+wovDpcKmwoLDpcK4wozDpsKcwpvDpcKvwrzDpcKHwrrDpsKJwoDDpsKcwonDpsKVwrDDpsKNwq7DqcKdwp7DpcK4wrjDpsKcwonDp8KUwqhcclxuICAgKiBAcGFyYW0gb3B0IMOpwqLCncOlwqTClsOlwo/CgsOmwpXCsFxyXG4gICAqL1xyXG4gIGV4cG9ydChuZXdEYXRhPzogYW55W10sIG9wdD86IFNURXhwb3J0T3B0aW9ucykge1xyXG4gICAgKG5ld0RhdGEgPyBvZihuZXdEYXRhKSA6IG9mKHRoaXMuX2RhdGEpKS5zdWJzY3JpYmUoKHJlczogYW55W10pID0+XHJcbiAgICAgIHRoaXMuZXhwb3J0U3J2LmV4cG9ydChcclxuICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHQsIDxTVEV4cG9ydE9wdGlvbnM+e1xyXG4gICAgICAgICAgX2Q6IHJlcyxcclxuICAgICAgICAgIF9jOiB0aGlzLl9jb2x1bW5zLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICApLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8vI2VuZHJlZ2lvblxyXG5cclxuICBwcml2YXRlIHVwZGF0ZUNvbHVtbnMoKSB7XHJcbiAgICB0aGlzLl9jb2x1bW5zID0gdGhpcy5jb2x1bW5Tb3VyY2UucHJvY2Vzcyh0aGlzLmNvbHVtbnMpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRDbGFzcygpIHtcclxuICAgIHVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMucmVuZGVyZXIsIHtcclxuICAgICAgW2BzdGBdOiB0cnVlLFxyXG4gICAgICBbYHN0X19wLSR7dGhpcy5wYWdlLnBsYWNlbWVudH1gXTogdGhpcy5wYWdlLnBsYWNlbWVudCxcclxuICAgICAgW2BhbnQtdGFibGUtcmVwX19oaWRlLWhlYWRlci1mb290ZXJgXTogdGhpcy5yZXNwb25zaXZlSGlkZUhlYWRlckZvb3RlcixcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5jb2x1bW5Tb3VyY2UucmVzdG9yZUFsbFJlbmRlcih0aGlzLl9jb2x1bW5zKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKFxyXG4gICAgY2hhbmdlczogeyBbUCBpbiBrZXlvZiB0aGlzXT86IFNpbXBsZUNoYW5nZSB9ICYgU2ltcGxlQ2hhbmdlcyxcclxuICApOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLmNvbHVtbnMpIHtcclxuICAgICAgdGhpcy51cGRhdGVDb2x1bW5zKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2hhbmdlcy5kYXRhICYmIGNoYW5nZXMuZGF0YS5jdXJyZW50VmFsdWUpIHtcclxuICAgICAgdGhpcy5fbG9hZCgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRDbGFzcygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pMThuJCkgdGhpcy5pMThuJC51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTmdab3Jyb0FudGRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkJztcclxuXHJcbmltcG9ydCB7IERlbG9uVXRpbE1vZHVsZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcclxuaW1wb3J0IHsgRGVsb25BQ0xNb2R1bGUgfSBmcm9tICdAZGVsb24vYWNsJztcclxuXHJcbmltcG9ydCB7IFNUQ29tcG9uZW50IH0gZnJvbSAnLi90YWJsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTVFJvd0RpcmVjdGl2ZSB9IGZyb20gJy4vdGFibGUtcm93LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFNUQ29uZmlnIH0gZnJvbSAnLi90YWJsZS5jb25maWcnO1xyXG5cclxuY29uc3QgQ09NUE9ORU5UUyA9IFtTVENvbXBvbmVudCwgU1RSb3dEaXJlY3RpdmVdO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBEZWxvblV0aWxNb2R1bGUsXHJcbiAgICBEZWxvbkFDTE1vZHVsZSxcclxuICAgIE5nWm9ycm9BbnRkTW9kdWxlLFxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbLi4uQ09NUE9ORU5UU10sXHJcbiAgZXhwb3J0czogWy4uLkNPTVBPTkVOVFNdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU1RNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHsgbmdNb2R1bGU6IFNUTW9kdWxlLCBwcm92aWRlcnM6IFtTVENvbmZpZ10gfTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJEaXJlY3RpdmUiLCJUZW1wbGF0ZVJlZiIsIkhvc3QiLCJJbnB1dCIsImFjbCIsInRzbGliXzEuX192YWx1ZXMiLCJkZWVwQ29weSIsIkFDTFNlcnZpY2UiLCJPcHRpb25hbCIsIkluamVjdCIsIkFMQUlOX0kxOE5fVE9LRU4iLCJtYXAiLCJkZWVwR2V0IiwiY2F0Y2hFcnJvciIsIm9mIiwiX0h0dHBDbGllbnQiLCJDTkN1cnJlbmN5UGlwZSIsIkRhdGVQaXBlIiwiWU5QaXBlIiwiRGVjaW1hbFBpcGUiLCJYbHN4U2VydmljZSIsInJvdXRlciIsIkV2ZW50RW1pdHRlciIsImZpbHRlciIsInRvQm9vbGVhbiIsInVwZGF0ZUhvc3RDbGFzcyIsIkNvbXBvbmVudCIsIkNoYW5nZURldGVjdGlvblN0cmF0ZWd5IiwiQ2hhbmdlRGV0ZWN0b3JSZWYiLCJSb3V0ZXIiLCJFbGVtZW50UmVmIiwiUmVuZGVyZXIyIiwiTW9kYWxIZWxwZXIiLCJEcmF3ZXJIZWxwZXIiLCJET0NVTUVOVCIsIk91dHB1dCIsIklucHV0TnVtYmVyIiwiSW5wdXRCb29sZWFuIiwiTmdNb2R1bGUiLCJOT19FUlJPUlNfU0NIRU1BIiwiQ29tbW9uTW9kdWxlIiwiRm9ybXNNb2R1bGUiLCJEZWxvblV0aWxNb2R1bGUiLCJEZWxvbkFDTE1vZHVsZSIsIk5nWm9ycm9BbnRkTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBQTs7Ozs7Ozs7Ozs7Ozs7QUFjQSx3QkFvQzJCLFVBQVUsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUk7UUFDcEQsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLEdBQUcsSUFBSSxLQUFLLElBQUksR0FBRyxJQUFJLEdBQUcsTUFBTSxDQUFDLHdCQUF3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