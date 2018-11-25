/**
 * @license ng-alain(cipchk@qq.com) v2.0.1
 * (c) 2018 Cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@delon/acl'), require('@delon/theme'), require('@delon/util'), require('@angular/common'), require('@angular/platform-browser'), require('rxjs'), require('rxjs/operators'), require('@delon/abc/xlsx'), require('@angular/router'), require('@angular/forms'), require('ng-zorro-antd')) :
    typeof define === 'function' && define.amd ? define('@delon/abc/table', ['exports', '@angular/core', '@delon/acl', '@delon/theme', '@delon/util', '@angular/common', '@angular/platform-browser', 'rxjs', 'rxjs/operators', '@delon/abc/xlsx', '@angular/router', '@angular/forms', 'ng-zorro-antd'], factory) :
    (factory((global.delon = global.delon || {}, global.delon.abc = global.delon.abc || {}, global.delon.abc.table = {}),global.ng.core,global.delon.acl,global.delon.theme,global.delon.util,global.ng.common,global.ng.platformBrowser,global.rxjs,global.rxjs.operators,global.delon.abc.xlsx,global.ng.router,global.ng.forms,global.ngZorro.antd));
}(this, (function (exports,core,acl,theme,util,common,platformBrowser,rxjs,operators,xlsx,router,forms,ngZorroAntd) { 'use strict';

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
             * 单排序规则
             * - 若不指定，则返回：`columnName=ascend|descend`
             * - 若指定，则返回：`sort=columnName.(ascend|descend)`
             */
            this.singleSort = null;
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
            /**
             * 行号索引，默认：`1`
             * - 计算规则为：`index + noIndex`
             */
            this.noIndex = 1;
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
                            item.popTitle = item.popTitle || popTitle;
                        }
                        else {
                            item.pop = false;
                        }
                        if (item.icon) {
                            item.icon = Object.assign({}, btnIcon, typeof item.icon === 'string' ? { type: item.icon } : item.icon);
                        }
                        item.children = item.children && item.children.length > 0 ? this.btnCoerce(item.children) : [];
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
                var noIndex = this.cog.noIndex;
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
                        // no
                        if (item.type === 'no') {
                            item.noIndex = item.noIndex == null ? noIndex : item.noIndex;
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
                        var _loop_1 = function (i, len) {
                            result[i]["_values"] = columns.map(function (c) { return _this.get(result[i], c, i); });
                            if (options.rowClassName) {
                                result[i]["_rowClassName"] = options.rowClassName(result[i], i);
                            }
                        };
                        for (var i = 0, len = result.length; i < len; i++) {
                            _loop_1(i, len);
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
         * @param {?} idx
         * @return {?}
         */
        STDataSource.prototype.get = /**
         * @param {?} item
         * @param {?} col
         * @param {?} idx
         * @return {?}
         */
            function (item, col, idx) {
                if (col.format) {
                    /** @type {?} */
                    var formatRes = /** @type {?} */ (col.format(item, col));
                    if (~formatRes.indexOf('<')) {
                        return this.dom.bypassSecurityTrustHtml(formatRes);
                    }
                    return formatRes;
                }
                /** @type {?} */
                var value = util.deepGet(item, /** @type {?} */ (col.index), col.default);
                /** @type {?} */
                var ret = value;
                switch (col.type) {
                    case 'no':
                        ret = col.noIndex + idx;
                        break;
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
                return ret == null ? '' : ret;
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
                var req = options.req, page = options.page, pi = options.pi, ps = options.ps, singleSort = options.singleSort, multiSort = options.multiSort, columns = options.columns;
                /** @type {?} */
                var method = (req.method || 'GET').toUpperCase();
                /** @type {?} */
                var params = Object.assign((_a = {},
                    _a[req.reName.pi] = page.zeroIndexed ? pi - 1 : pi,
                    _a[req.reName.ps] = ps,
                    _a), req.params, this.getReqSortMap(singleSort, multiSort, columns), this.getReqFilterMap(columns));
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
         * @param {?} singleSort
         * @param {?} multiSort
         * @param {?} columns
         * @return {?}
         */
        STDataSource.prototype.getReqSortMap = /**
         * @param {?} singleSort
         * @param {?} multiSort
         * @param {?} columns
         * @return {?}
         */
            function (singleSort, multiSort, columns) {
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
                    /** @type {?} */
                    var sortFiled = mapData.key;
                    /** @type {?} */
                    var sortValue = (sortList[0].reName || {})[mapData.default] || mapData.default;
                    if (singleSort) {
                        sortValue = sortFiled + (singleSort.nameSeparator || '.') + sortValue;
                        sortFiled = singleSort.key || 'sort';
                    }
                    ret[sortFiled] = sortValue;
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
                { type: common.DecimalPipe, decorators: [{ type: core.Host }] },
                { type: platformBrowser.DomSanitizer }
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
        // #endregion
        function STComponent(cdRef, cog, router$$1, el, renderer, exportSrv, i18nSrv, modalHelper, drawerHelper, doc, columnSource, dataSource, delonI18n) {
            var _this = this;
            this.cdRef = cdRef;
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
             * 单排序规则
             * - 若不指定，则返回：`columnName=ascend|descend`
             * - 若指定，则返回：`sort=columnName.(ascend|descend)`
             */
            this.singleSort = null;
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
            this.rowClickCount = 0;
            this.delonI18n$ = this.delonI18n.change.subscribe(function () {
                _this.locale = _this.delonI18n.getData('st');
                if (_this._columns.length > 0) {
                    _this.page = _this.clonePage;
                    _this.cd();
                }
            });
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
                this.clonePage = value;
                var page = this.cog.page;
                /** @type {?} */
                var item = Object.assign({}, util.deepCopy(page), value);
                var total = item.total;
                if (typeof total === 'string' && total.length) {
                    this.totalTpl = total;
                }
                else if (util.toBoolean(total)) {
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
         * @return {?}
         */
        STComponent.prototype.cd = /**
         * @return {?}
         */
            function () {
                this.cdRef.detectChanges();
            };
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
                var _a = this, pi = _a.pi, ps = _a.ps, data = _a.data, req = _a.req, res = _a.res, page = _a.page, total = _a.total, singleSort = _a.singleSort, multiSort = _a.multiSort, rowClassName = _a.rowClassName;
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
                    singleSort: singleSort,
                    multiSort: multiSort,
                    rowClassName: rowClassName
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
        /** 清空所有数据 */
        /**
         * 清空所有数据
         * @param {?=} cleanStatus
         * @return {?}
         */
        STComponent.prototype.clear = /**
         * 清空所有数据
         * @param {?=} cleanStatus
         * @return {?}
         */
            function (cleanStatus) {
                if (cleanStatus === void 0) {
                    cleanStatus = true;
                }
                if (cleanStatus) {
                    this.clearStatus();
                }
                this._data.length = 0;
                this.cd();
            };
        /** 清空所有状态 */
        /**
         * 清空所有状态
         * @return {?}
         */
        STComponent.prototype.clearStatus = /**
         * 清空所有状态
         * @return {?}
         */
            function () {
                return this.clearCheck()
                    .clearRadio()
                    .clearFilter()
                    .clearSort();
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
                this.clearStatus().load(1, extraParams, options);
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
                    }
                    else {
                        _this.changeEmit('dblClick', data);
                    }
                    _this.rowClickCount = 0;
                }, this.rowClickTime);
            };
        /** 移除某行数据 */
        /**
         * 移除某行数据
         * @param {?} data
         * @return {?}
         */
        STComponent.prototype.removeRow = /**
         * 移除某行数据
         * @param {?} data
         * @return {?}
         */
            function (data) {
                var _this = this;
                if (!Array.isArray(data)) {
                    data = [data];
                }
                ( /** @type {?} */(data)).map(function (item) { return _this._data.indexOf(item); })
                    .filter(function (pos) { return pos !== -1; })
                    .forEach(function (pos) { return _this._data.splice(pos, 1); });
                this.cd();
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
                    map: this.dataSource.getReqSortMap(this.singleSort, this.multiSort, this._columns),
                    column: col,
                };
                this.changeEmit('sort', res);
            };
        /**
         * @return {?}
         */
        STComponent.prototype.clearSort = /**
         * @return {?}
         */
            function () {
                this._columns.forEach(function (item) { return (item["_sort"].default = null); });
                return this;
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
                this.cd();
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
                    this.drawerHelper
                        .create(drawer.title, drawer.component, Object.assign(obj, drawer.params && drawer.params(record)), Object.assign({}, drawer))
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
                return btn.text || '';
            };
        /**
         * @param {?} item
         * @param {?} col
         * @return {?}
         */
        STComponent.prototype._validBtns = /**
         * @param {?} item
         * @param {?} col
         * @return {?}
         */
            function (item, col) {
                return col.buttons.filter(function (btn) { return btn.iif(item, btn, col); });
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
                this.delonI18n$.unsubscribe();
                if (this.i18n$)
                    this.i18n$.unsubscribe();
            };
        STComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'st',
                        template: "<ng-template #btnTpl let-i let-btn=\"btn\" let-sub=\"sub\">\n  <nz-popconfirm *ngIf=\"btn.pop === true\" [nzTitle]=\"btn.popTitle\" (nzOnConfirm)=\"_btnClick($event, i, btn)\">\n    <a *ngIf=\"!sub\" nz-popconfirm>\n      <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n    </a>\n    <span *ngIf=\"sub\" nz-popconfirm>\n      <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n    </span>\n  </nz-popconfirm>\n  <ng-container *ngIf=\"btn.pop !== true\">\n    <a *ngIf=\"!sub\" (click)=\"_btnClick($event, i, btn)\">\n      <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n    </a>\n    <span *ngIf=\"sub\" (click)=\"_btnClick($event, i, btn)\">\n      <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n    </span>\n  </ng-container>\n</ng-template>\n<ng-template #btnTextTpl let-i let-btn=\"btn\">\n  <i *ngIf=\"btn.icon\" nz-icon [type]=\"btn.icon.type\" [theme]=\"btn.icon.theme\" [spin]=\"btn.icon.spin\" [twoToneColor]=\"btn.icon.twoToneColor\" [iconfont]=\"btn.icon.iconfont\"></i>\n  <span [innerHTML]=\"_btnText(i, btn)\" [ngClass]=\"{'pl-xs': btn.icon}\"></span>\n</ng-template>\n<nz-table [nzData]=\"_data\"\n  [(nzPageIndex)]=\"pi\" (nzPageIndexChange)=\"_change('pi')\"\n  [(nzPageSize)]=\"ps\" (nzPageSizeChange)=\"_change('ps')\"\n  [nzTotal]=\"total\"\n  [nzShowPagination]=\"_isPagination\"\n  [nzFrontPagination]=\"false\"\n  [nzBordered]=\"bordered\"\n  [nzSize]=\"size\"\n  [nzLoading]=\"loading\"\n  [nzLoadingDelay]=\"loadingDelay\"\n  [nzScroll]=\"scroll\"\n  [nzTitle]=\"header\" [nzFooter]=\"footer\" [nzNoResult]=\"noResult\"\n  [nzPageSizeOptions]=\"page.pageSizes\"\n  [nzShowQuickJumper]=\"page.showQuickJumper\"\n  [nzShowSizeChanger]=\"page.showSize\"\n  [nzShowTotal]=\"totalTpl\">\n  <thead class=\"st__head\">\n    <tr>\n      <th *ngIf=\"expand\" [nzShowExpand]=\"expand\"></th>\n      <th *ngFor=\"let c of _columns; let index=index\" [nzWidth]=\"c.width\" [nzLeft]=\"c._left\" [nzRight]=\"c._right\" [ngClass]=\"c.className\"\n        [attr.colspan]=\"c.colSpan\" [attr.data-col]=\"c.indexKey\"\n        [nzShowSort]=\"c._sort.enabled\" [nzSort]=\"c._sort.default\" (nzSortChange)=\"sort(c, index, $event)\"\n        nzCustomFilter>\n        <ng-template #renderTitle [ngTemplateOutlet]=\"c.__renderTitle\" [ngTemplateOutletContext]=\"{$implicit: c, index: index }\"></ng-template>\n        <ng-container *ngIf=\"!c.__renderTitle; else renderTitle\">\n          <ng-container [ngSwitch]=\"c.type\">\n            <ng-container *ngSwitchCase=\"'checkbox'\">\n              <label nz-checkbox class=\"st__checkall\" [(ngModel)]=\"_allChecked\" [nzIndeterminate]=\"_indeterminate\" (ngModelChange)=\"_checkAll()\"></label>\n              <nz-dropdown *ngIf=\"c.selections.length\" class=\"st__selection\">\n                <span nz-dropdown>\n                  <i nz-icon type=\"down\"></i>\n                </span>\n                <ul nz-menu>\n                  <li nz-menu-item *ngFor=\"let rw of c.selections\" (click)=\"_rowSelection(rw)\" [innerHTML]=\"rw.text\">\n                  </li>\n                </ul>\n              </nz-dropdown>\n            </ng-container>\n            <ng-container *ngSwitchDefault>\n              <span [innerHTML]=\"c.title\"></span>\n            </ng-container>\n          </ng-container>\n          <nz-dropdown *ngIf=\"c.filter\"\n            class=\"st__filter\" nzTrigger=\"click\" [hasFilterButton]=\"true\" [nzClickHide]=\"false\"\n            [(nzVisible)]=\"c.filter.visible\">\n            <i nz-icon [type]=\"c.filter.icon\" theme=\"fill\"\n              [class.ant-table-filter-selected]=\"c.filter.default\"\n              [class.ant-table-filter-open]=\"c.filter.visible\" nz-dropdown></i>\n            <ul nz-menu>\n              <ng-container *ngIf=\"c.filter.multiple\">\n                <li nz-menu-item *ngFor=\"let filter of c.filter.menus\">\n                  <label nz-checkbox [(ngModel)]=\"filter.checked\">{{filter.text}}</label>\n                </li>\n              </ng-container>\n              <ng-container *ngIf=\"!c.filter.multiple\">\n                <li nz-menu-item *ngFor=\"let filter of c.filter.menus\">\n                  <label nz-radio [ngModel]=\"filter.checked\" (ngModelChange)=\"_filterRadio(c, filter, $event)\">{{filter.text}}</label>\n                </li>\n              </ng-container>\n            </ul>\n            <div class=\"ant-table-filter-dropdown-btns\">\n              <a class=\"ant-table-filter-dropdown-link confirm\" (click)=\"c.filter.visible = false\">\n                <span (click)=\"_filterConfirm(c)\">{{c.filter.confirmText}}</span>\n              </a>\n              <a class=\"ant-table-filter-dropdown-link clear\" (click)=\"c.filter.visible = false\">\n                <span (click)=\"_filterClear(c)\">{{c.filter.clearText}}</span>\n              </a>\n            </div>\n          </nz-dropdown>\n        </ng-container>\n      </th>\n    </tr>\n  </thead>\n  <tbody class=\"st__body\">\n    <ng-container *ngFor=\"let i of _data; let index=index\">\n      <tr [attr.data-index]=\"index\" (click)=\"_rowClick($event, i, index)\" [class]=\"i._rowClassName\">\n        <td *ngIf=\"expand\" [nzShowExpand]=\"expand\" [(nzExpand)]=\"i.expand\"></td>\n        <td *ngFor=\"let c of _columns; let cIdx=index\" [nzLeft]=\"c._left\" [nzRight]=\"c._right\" [nzCheckbox]=\"c.type === 'checkbox'\" [ngClass]=\"c.className\"\n          [attr.colspan]=\"c.colSpan\">\n          <span class=\"ant-table-rep__title\" [innerHTML]=\"c.title\"></span>\n          <span>\n            <ng-template #render [ngTemplateOutlet]=\"c.__render\" [ngTemplateOutletContext]=\"{$implicit: i, index: index, column: c }\"></ng-template>\n            <ng-container *ngIf=\"!c.__render; else render\">\n              <ng-container [ngSwitch]=\"c.type\">\n                <label *ngSwitchCase=\"'checkbox'\" nz-checkbox [nzDisabled]=\"i.disabled\" [ngModel]=\"i.checked\" (ngModelChange)=\"_checkSelection(i, $event)\"></label>\n                <label *ngSwitchCase=\"'radio'\" nz-radio [nzDisabled]=\"i.disabled\" [ngModel]=\"i.checked\" (ngModelChange)=\"_refRadio($event, i)\"></label>\n                <a *ngSwitchCase=\"'link'\" (click)=\"_click($event, i, c)\" [innerHTML]=\"i._values[cIdx]\"></a>\n                <nz-tag *ngSwitchCase=\"'tag'\" [nzColor]=\"c.tag[i._values[cIdx]].color\">{{c.tag[i._values[cIdx]].text || i._values[cIdx]}}</nz-tag>\n                <nz-badge *ngSwitchCase=\"'badge'\" [nzStatus]=\"c.badge[i._values[cIdx]].color\" [nzText]=\"c.badge[i._values[cIdx]].text || i._values[cIdx]\"></nz-badge>\n                <span *ngSwitchDefault [innerHTML]=\"i._values[cIdx]\"></span>\n              </ng-container>\n              <ng-container *ngFor=\"let btn of _validBtns(i, c); let last=last\">\n                <nz-dropdown *ngIf=\"btn.children.length > 0\">\n                  <a class=\"ant-dropdown-link\" nz-dropdown>\n                    <span [innerHTML]=\"_btnText(i, btn)\"></span>\n                    <i nz-icon type=\"down\"></i>\n                  </a>\n                  <ul nz-menu>\n                    <ng-container *ngFor=\"let subBtn of btn.children\">\n                      <li nz-menu-item *ngIf=\"subBtn.iif(i, subBtn, c)\">\n                        <ng-template [ngTemplateOutlet]=\"btnTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: subBtn, sub: true }\"></ng-template>\n                      </li>\n                    </ng-container>\n                  </ul>\n                </nz-dropdown>\n                <ng-container *ngIf=\"btn.children.length == 0\">\n                  <ng-template [ngTemplateOutlet]=\"btnTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn, sub: false }\"></ng-template>\n                </ng-container>\n                <nz-divider *ngIf=\"!last\" nzType=\"vertical\"></nz-divider>\n              </ng-container>\n              <ng-template [ngIf]=\"!c.__renderExpanded\" [ngTemplateOutlet]=\"c.__renderExpanded\" [ngTemplateOutletContext]=\"{$implicit: i, index: index, column: c }\"></ng-template>\n            </ng-container>\n          </span>\n        </td>\n      </tr>\n      <tr [nzExpand]=\"i.expand\">\n        <td></td>\n        <td [attr.colspan]=\"_columns.length\">\n          <ng-template [ngTemplateOutlet]=\"expand\" [ngTemplateOutletContext]=\"{$implicit: i, index: index }\"></ng-template>\n        </td>\n      </tr>\n    </ng-container>\n    <ng-template [ngIf]=\"!loading\" [ngTemplateOutlet]=\"body\"></ng-template>\n  </tbody>\n  <ng-template #totalTpl let-range=\"range\" let-total>{{ renderTotal(total, range) }}</ng-template>\n</nz-table>\n",
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
                { type: STDataSource },
                { type: theme.DelonLocaleService }
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
            singleSort: [{ type: core.Input }],
            multiSort: [{ type: core.Input }],
            rowClassName: [{ type: core.Input }],
            header: [{ type: core.Input }],
            footer: [{ type: core.Input }],
            body: [{ type: core.Input }],
            expand: [{ type: core.Input }],
            noResult: [{ type: core.Input }],
            widthConfig: [{ type: core.Input }],
            error: [{ type: core.Output }],
            change: [{ type: core.Output }],
            rowClickTime: [{ type: core.Input }],
            responsiveHideHeaderFooter: [{ type: core.Input }]
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm5nOi8vQGRlbG9uL2FiYy90YWJsZS90YWJsZS1yb3cuZGlyZWN0aXZlLnRzIiwibmc6Ly9AZGVsb24vYWJjL3RhYmxlL3RhYmxlLmNvbmZpZy50cyIsIm5nOi8vQGRlbG9uL2FiYy90YWJsZS90YWJsZS1jb2x1bW4tc291cmNlLnRzIiwibmc6Ly9AZGVsb24vYWJjL3RhYmxlL3RhYmxlLWRhdGEtc291cmNlLnRzIiwibmc6Ly9AZGVsb24vYWJjL3RhYmxlL3RhYmxlLWV4cG9ydC50cyIsIm5nOi8vQGRlbG9uL2FiYy90YWJsZS90YWJsZS5jb21wb25lbnQudHMiLCJuZzovL0BkZWxvbi9hYmMvdGFibGUvdGFibGUubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBJbnB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIE9uSW5pdCxcbiAgSW5qZWN0YWJsZSxcbiAgSG9zdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTVFJvd1NvdXJjZSB7XG4gIHByaXZhdGUgdGl0bGVzOiB7IFtrZXk6IHN0cmluZ106IFRlbXBsYXRlUmVmPGFueT4gfSA9IHt9O1xuICBwcml2YXRlIHJvd3M6IHsgW2tleTogc3RyaW5nXTogVGVtcGxhdGVSZWY8YW55PiB9ID0ge307XG5cbiAgYWRkKHR5cGU6IHN0cmluZywgcGF0aDogc3RyaW5nLCByZWY6IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgICB0aGlzW3R5cGUgPT09ICd0aXRsZScgPyAndGl0bGVzJyA6ICdyb3dzJ11bcGF0aF0gPSByZWY7XG4gIH1cblxuICBnZXRUaXRsZShwYXRoOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy50aXRsZXNbcGF0aF07XG4gIH1cblxuICBnZXRSb3cocGF0aDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucm93c1twYXRoXTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbc3Qtcm93XScgfSlcbmV4cG9ydCBjbGFzcyBTVFJvd0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgnc3Qtcm93JylcbiAgaWQ6IHN0cmluZztcblxuICBASW5wdXQoKVxuICB0eXBlOiAndGl0bGUnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVmOiBUZW1wbGF0ZVJlZjxhbnk+LFxuICAgIEBIb3N0KCkgcHJpdmF0ZSBzb3VyY2U6IFNUUm93U291cmNlLFxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zb3VyY2UuYWRkKHRoaXMudHlwZSwgdGhpcy5pZCwgdGhpcy5yZWYpO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBTVE11bHRpU29ydCxcbiAgU1RSZXEsXG4gIFNUUmVzLFxuICBTVFBhZ2UsXG4gIFNUQ29sdW1uQnV0dG9uTW9kYWxDb25maWcsXG4gIFNUQ29sdW1uQnV0dG9uRHJhd2VyQ29uZmlnLFxuICBTVEljb24sXG4gIFNUUm93Q2xhc3NOYW1lLFxuICBTVFNpbmdsZVNvcnQsXG59IGZyb20gJy4vdGFibGUuaW50ZXJmYWNlcyc7XG5cbmV4cG9ydCBjbGFzcyBTVENvbmZpZyB7XG4gIC8qKlxuICAgKiDDqMK1wrfDpcKnwovDqcKhwrXDp8KgwoHDr8K8wozDqcK7wpjDqMKuwqTDpMK4wrrDr8K8wppgMWBcbiAgICovXG4gIHBpPzogbnVtYmVyO1xuICAvKipcbiAgICogw6bCr8KPw6nCocK1w6bClcKww6nCh8KPw6/CvMKMw6XCvcKTw6jCrsK+w6fCvcKuw6TCuMK6IGAwYCDDqMKhwqjDp8KkwrrDpMK4wo3DpcKIwobDqcKhwrXDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgMTBgXG4gICAqL1xuICBwcz86IG51bWJlcjtcbiAgLyoqXG4gICAqIMOmwpjCr8OlwpDCpsOmwpjCvsOnwqTCusOowr7CucOmwqHChlxuICAgKi9cbiAgYm9yZGVyZWQ/OiBib29sZWFuO1xuICAvKipcbiAgICogdGFibGXDpcKkwqfDpcKwwo9cbiAgICovXG4gIHNpemU/OiAnc21hbGwnIHwgJ21pZGRsZScgfCAnZGVmYXVsdCcgPSAnZGVmYXVsdCc7XG4gIC8qKlxuICAgKiDDpsKYwq/DpcKQwqbDqcKawpDDqMKXwo/DpcKkwrTDpcKSwozDpcKwwr7Dr8K8wozDpcK9wpPDpcKwwo/DpcKxwo/DpcK5wpXDpMK4wovDpsKJwo3DpsKYwr7Dp8KkwrrDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgZmFsc2VgXG4gICAqL1xuICByZXNwb25zaXZlSGlkZUhlYWRlckZvb3Rlcj8gPSBmYWxzZTtcbiAgLyoqIMOowq/Ct8OmwrHCgsOkwr3Ck8OpwoXCjcOnwr3CriAqL1xuICByZXE/OiBTVFJlcSA9IHtcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIGFsbEluQm9keTogZmFsc2UsXG4gICAgcmVOYW1lOiB7IHBpOiAncGknLCBwczogJ3BzJyB9LFxuICB9O1xuICAvKiogw6jCv8KUw6XCm8Kew6TCvcKTw6nChcKNw6fCvcKuICovXG4gIHJlcz86IFNUUmVzID0ge1xuICAgIHJlTmFtZTogeyBsaXN0OiBbJ2xpc3QnXSwgdG90YWw6IFsndG90YWwnXSB9LFxuICB9O1xuICAvKiogw6jCv8KUw6XCm8Kew6TCvcKTw6nChcKNw6fCvcKuICovXG4gIHBhZ2U/OiBTVFBhZ2UgPSB7XG4gICAgZnJvbnQ6IHRydWUsXG4gICAgemVyb0luZGV4ZWQ6IGZhbHNlLFxuICAgIHBsYWNlbWVudDogJ3JpZ2h0JyxcbiAgICBzaG93OiB0cnVlLFxuICAgIHNob3dTaXplOiBmYWxzZSxcbiAgICBwYWdlU2l6ZXM6IFsxMCwgMjAsIDMwLCA0MCwgNTBdLFxuICAgIHNob3dRdWlja0p1bXBlcjogZmFsc2UsXG4gICAgdG90YWw6IHRydWUsXG4gICAgaW5kZXhSZXNldDogdHJ1ZSxcbiAgICB0b1RvcDogdHJ1ZSxcbiAgICB0b1RvcE9mZnNldDogMTAwLFxuICB9O1xuICAvKipcbiAgICogw6nCh8KNw6XCkcK9w6XCkMKNw6bCjsKSw6XCusKPw6XCgMK8w6/CvMKMYGNvbHVtbnNgIMOnwprChMOpwofCjcOlwpHCvcOlwpDCjcOpwqvCmMOkwrrCjsOlwrHCnsOmwoDCp1xuICAgKi9cbiAgc29ydFJlTmFtZT86IHsgYXNjZW5kPzogc3RyaW5nOyBkZXNjZW5kPzogc3RyaW5nIH07XG4gIC8qKlxuICAgKiDDpcKNwpXDpsKOwpLDpcK6wo/DqMKnwoTDpcKIwplcbiAgICogLSDDqMKLwqXDpMK4wo3DpsKMwofDpcKuwprDr8K8wozDpcKIwpnDqMK/wpTDpcKbwp7Dr8K8wppgY29sdW1uTmFtZT1hc2NlbmR8ZGVzY2VuZGBcbiAgICogLSDDqMKLwqXDpsKMwofDpcKuwprDr8K8wozDpcKIwpnDqMK/wpTDpcKbwp7Dr8K8wppgc29ydD1jb2x1bW5OYW1lLihhc2NlbmR8ZGVzY2VuZClgXG4gICAqL1xuICBzaW5nbGVTb3J0PzogU1RTaW5nbGVTb3J0ID0gbnVsbDtcbiAgLyoqXG4gICAqIMOmwpjCr8OlwpDCpsOlwqTCmsOmwo7CksOlwrrCj8OvwrzCjMOlwr3CkyBgc29ydGAgw6XCpMKaw6TCuMKqw6fCm8K4w6XCkMKMw6XCgMK8w6bCl8K2w6jCh8Kqw6XCisKow6XCkMKIw6XCucK2w6/CvMKMw6XCu8K6w6jCrsKuw6XCkMKOw6fCq8Kvw6bClMKvw6bCjMKBw6bCl8K2w6TCvcK/w6fClMKoXG4gICAqL1xuICBtdWx0aVNvcnQ/OiBib29sZWFuIHwgU1RNdWx0aVNvcnQgPSBmYWxzZTtcbiAgLyoqXG4gICAqIMOmwozCicOpwpLCrsOmwqjCocOmwoDCgcOmwqHChsOpwoXCjcOnwr3CrlxuICAgKi9cbiAgbW9kYWw/OiBTVENvbHVtbkJ1dHRvbk1vZGFsQ29uZmlnID0ge1xuICAgIHBhcmFtc05hbWU6ICdyZWNvcmQnLFxuICAgIHNpemU6ICdsZycsXG4gICAgZXhhY3Q6IHRydWUsXG4gIH07XG4gIC8qKlxuICAgKiDDpsKMwonDqcKSwq7DpsKKwr3DpcKxwonDqcKFwo3Dp8K9wq5cbiAgICovXG4gIGRyYXdlcj86IFNUQ29sdW1uQnV0dG9uRHJhd2VyQ29uZmlnID0ge1xuICAgIHBhcmFtc05hbWU6ICdyZWNvcmQnLFxuICAgIHNpemU6ICdtZCcsXG4gICAgZm9vdGVyOiB0cnVlLFxuICAgIGZvb3RlckhlaWdodDogNTUsXG4gIH07XG4gIC8qKlxuICAgKiDDpsKwwpTDpsKzwqHDp8Khwq7DqMKuwqTDpsKhwobDpcKGwoXDpcKuwrlcbiAgICovXG4gIHBvcFRpdGxlPyA9ICfDp8Khwq7DqMKuwqTDpcKIwqDDqcKZwqTDpcKQwpfDr8K8wp8nO1xuICAvKipcbiAgICogw6jCocKMw6XCjcKVw6XCh8K7w6XCpMKaw6XCsMKRw6bCl8K2w6nClcK/w6TCucKLw6fCscK7w6TCuMK6w6XCj8KMw6XCh8K7w6/CvMKIw6XCjcKVw6TCvcKNw6/CvMKaw6bCr8Krw6fCp8KSw6/CvMKJw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYDIwMGBcbiAgICovXG4gIHJvd0NsaWNrVGltZT8gPSAyMDA7XG4gIC8qKlxuICAgKiDDqMK/wofDpsK7wqTDpsKMwonDqcKSwq7Dp8Khwq7DqMKuwqTDpsKWwofDpsKcwqzDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgw6fCocKuw6jCrsKkYFxuICAgKi9cbiAgZmlsdGVyQ29uZmlybVRleHQ/ID0gJ8OnwqHCrsOowq7CpCc7XG4gIC8qKlxuICAgKiDDqMK/wofDpsK7wqTDpsKMwonDqcKSwq7DqcKHwo3Dp8K9wq7DpsKWwofDpsKcwqzDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgw6nCh8KNw6fCvcKuYFxuICAgKi9cbiAgZmlsdGVyQ2xlYXJUZXh0PyA9ICfDqcKHwo3Dp8K9wq4nO1xuICAvKipcbiAgICogw6bCjMKJw6nCksKuw6XCm8K+w6bCoMKHXG4gICAqL1xuICBidG5JY29uPzogU1RJY29uID0ge1xuICAgIHR5cGU6ICcnLFxuICAgIHRoZW1lOiAnb3V0bGluZScsXG4gICAgc3BpbjogZmFsc2UsXG4gIH07XG4gIC8qKlxuICAgKiDDqMKhwozDpcKPwrfDp8K0wqLDpcK8wpXDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgMWBcbiAgICogLSDDqMKuwqHDp8KuwpfDqMKnwoTDpcKIwpnDpMK4wrrDr8K8wppgaW5kZXggKyBub0luZGV4YFxuICAgKi9cbiAgbm9JbmRleD8gPSAxO1xuICAvKipcbiAgICogw6jCocKow6bCoMK8w6jCocKMw6fCmsKEw6fCscK7w6XCkMKNXG4gICAqL1xuICByb3dDbGFzc05hbWU/OiBTVFJvd0NsYXNzTmFtZTtcbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsLCBJbmplY3QsIEhvc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFDTFNlcnZpY2UgfSBmcm9tICdAZGVsb24vYWNsJztcbmltcG9ydCB7IEFMQUlOX0kxOE5fVE9LRU4sIEFsYWluSTE4TlNlcnZpY2UgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgZGVlcENvcHkgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbmltcG9ydCB7XG4gIFNUQ29sdW1uLFxuICBTVENvbHVtbkJ1dHRvbixcbiAgU1RDb2x1bW5Tb3J0LFxuICBTVENvbHVtbkZpbHRlcixcbn0gZnJvbSAnLi90YWJsZS5pbnRlcmZhY2VzJztcbmltcG9ydCB7IFNUUm93U291cmNlIH0gZnJvbSAnLi90YWJsZS1yb3cuZGlyZWN0aXZlJztcbmltcG9ydCB7IFNUQ29uZmlnIH0gZnJvbSAnLi90YWJsZS5jb25maWcnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNUU29ydE1hcCBleHRlbmRzIFNUQ29sdW1uU29ydCB7XG4gIC8qKiDDpsKYwq/DpcKQwqbDpcKQwq/Dp8KUwqjDpsKOwpLDpcK6wo8gKi9cbiAgZW5hYmxlZD86IGJvb2xlYW47XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTVENvbHVtblNvdXJjZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBIb3N0KCkgcHJpdmF0ZSByb3dTb3VyY2U6IFNUUm93U291cmNlLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgYWNsOiBBQ0xTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChBTEFJTl9JMThOX1RPS0VOKVxuICAgIHByaXZhdGUgaTE4blNydjogQWxhaW5JMThOU2VydmljZSxcbiAgICBwcml2YXRlIGNvZzogU1RDb25maWcsXG4gICkge31cblxuICBwcml2YXRlIGJ0bkNvZXJjZShsaXN0OiBTVENvbHVtbkJ1dHRvbltdKTogU1RDb2x1bW5CdXR0b25bXSB7XG4gICAgaWYgKCFsaXN0KSByZXR1cm4gW107XG4gICAgY29uc3QgcmV0OiBTVENvbHVtbkJ1dHRvbltdID0gW107XG4gICAgY29uc3QgeyBtb2RhbCwgZHJhd2VyLCBwb3BUaXRsZSwgYnRuSWNvbiB9ID0gdGhpcy5jb2c7XG5cbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgbGlzdCkge1xuICAgICAgaWYgKHRoaXMuYWNsICYmIGl0ZW0uYWNsICYmICF0aGlzLmFjbC5jYW4oaXRlbS5hY2wpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbS50eXBlID09PSAnbW9kYWwnIHx8IGl0ZW0udHlwZSA9PT0gJ3N0YXRpYycpIHtcbiAgICAgICAgLy8gY29tcGF0aWJsZVxuICAgICAgICBpZiAoaXRlbS5jb21wb25lbnQgIT0gbnVsbCkge1xuICAgICAgICAgIGl0ZW0ubW9kYWwgPSB7XG4gICAgICAgICAgICBjb21wb25lbnQ6IGl0ZW0uY29tcG9uZW50LFxuICAgICAgICAgICAgcGFyYW1zOiBpdGVtLnBhcmFtcyxcbiAgICAgICAgICAgIHBhcmFtc05hbWU6IGl0ZW0ucGFyYW1OYW1lIHx8IG1vZGFsLnBhcmFtc05hbWUsXG4gICAgICAgICAgICBzaXplOiBpdGVtLnNpemUgfHwgbW9kYWwuc2l6ZSxcbiAgICAgICAgICAgIG1vZGFsT3B0aW9uczogaXRlbS5tb2RhbE9wdGlvbnMgfHwgbW9kYWwubW9kYWxPcHRpb25zLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGl0ZW0ubW9kYWwgPT0gbnVsbCB8fCBpdGVtLm1vZGFsLmNvbXBvbmVudCA9PSBudWxsKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGBbc3RdIFNob3VsZCBzcGVjaWZ5IG1vZGFsIHBhcmFtZXRlcmApO1xuICAgICAgICAgIGl0ZW0udHlwZSA9ICdub25lJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtLm1vZGFsID0gT2JqZWN0LmFzc2lnbih7fSwgbW9kYWwsIGl0ZW0ubW9kYWwpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdkcmF3ZXInKSB7XG4gICAgICAgIGlmIChpdGVtLmRyYXdlciA9PSBudWxsIHx8IGl0ZW0uZHJhd2VyLmNvbXBvbmVudCA9PSBudWxsKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGBbc3RdIFNob3VsZCBzcGVjaWZ5IGRyYXdlciBwYXJhbWV0ZXJgKTtcbiAgICAgICAgICBpdGVtLnR5cGUgPSAnbm9uZSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbS5kcmF3ZXIgPSBPYmplY3QuYXNzaWduKHt9LCBkcmF3ZXIsIGl0ZW0uZHJhd2VyKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbS50eXBlID09PSAnZGVsJyAmJiB0eXBlb2YgaXRlbS5wb3AgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGl0ZW0ucG9wID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW0ucG9wID09PSB0cnVlKSB7XG4gICAgICAgIGl0ZW0ucG9wVGl0bGUgPSBpdGVtLnBvcFRpdGxlIHx8IHBvcFRpdGxlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXRlbS5wb3AgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW0uaWNvbikge1xuICAgICAgICBpdGVtLmljb24gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICAgIHt9LFxuICAgICAgICAgIGJ0bkljb24sXG4gICAgICAgICAgdHlwZW9mIGl0ZW0uaWNvbiA9PT0gJ3N0cmluZycgPyB7IHR5cGU6IGl0ZW0uaWNvbiB9IDogaXRlbS5pY29uLFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpdGVtLmNoaWxkcmVuID0gaXRlbS5jaGlsZHJlbiAmJiBpdGVtLmNoaWxkcmVuLmxlbmd0aCA+IDAgPyB0aGlzLmJ0bkNvZXJjZShpdGVtLmNoaWxkcmVuKSA6IFtdO1xuXG4gICAgICAvLyBpMThuXG4gICAgICBpZiAoaXRlbS5pMThuICYmIHRoaXMuaTE4blNydikge1xuICAgICAgICBpdGVtLnRleHQgPSB0aGlzLmkxOG5TcnYuZmFueWkoaXRlbS5pMThuKTtcbiAgICAgIH1cblxuICAgICAgcmV0LnB1c2goaXRlbSk7XG4gICAgfVxuICAgIHRoaXMuYnRuQ29lcmNlSWYocmV0KTtcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgcHJpdmF0ZSBidG5Db2VyY2VJZihsaXN0OiBTVENvbHVtbkJ1dHRvbltdKSB7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGxpc3QpIHtcbiAgICAgIGlmICghaXRlbS5paWYpIGl0ZW0uaWlmID0gKCkgPT4gdHJ1ZTtcbiAgICAgIGlmICghaXRlbS5jaGlsZHJlbikge1xuICAgICAgICBpdGVtLmNoaWxkcmVuID0gW107XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmJ0bkNvZXJjZUlmKGl0ZW0uY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZml4ZWRDb2VyY2UobGlzdDogU1RDb2x1bW5bXSkge1xuICAgIGNvbnN0IGNvdW50UmVkdWNlID0gKGE6IG51bWJlciwgYjogU1RDb2x1bW4pID0+XG4gICAgICBhICsgK2Iud2lkdGgudG9TdHJpbmcoKS5yZXBsYWNlKCdweCcsICcnKTtcbiAgICAvLyBsZWZ0IHdpZHRoXG4gICAgbGlzdFxuICAgICAgLmZpbHRlcih3ID0+IHcuZml4ZWQgJiYgdy5maXhlZCA9PT0gJ2xlZnQnICYmIHcud2lkdGgpXG4gICAgICAuZm9yRWFjaChcbiAgICAgICAgKGl0ZW0sIGlkeCkgPT5cbiAgICAgICAgICAoaXRlbS5fbGVmdCA9IGxpc3Quc2xpY2UoMCwgaWR4KS5yZWR1Y2UoY291bnRSZWR1Y2UsIDApICsgJ3B4JyksXG4gICAgICApO1xuICAgIC8vIHJpZ2h0IHdpZHRoXG4gICAgbGlzdFxuICAgICAgLmZpbHRlcih3ID0+IHcuZml4ZWQgJiYgdy5maXhlZCA9PT0gJ3JpZ2h0JyAmJiB3LndpZHRoKVxuICAgICAgLnJldmVyc2UoKVxuICAgICAgLmZvckVhY2goXG4gICAgICAgIChpdGVtLCBpZHgpID0+XG4gICAgICAgICAgKGl0ZW0uX3JpZ2h0ID1cbiAgICAgICAgICAgIChpZHggPiAwID8gbGlzdC5zbGljZSgtaWR4KS5yZWR1Y2UoY291bnRSZWR1Y2UsIDApIDogMCkgKyAncHgnKSxcbiAgICAgICk7XG4gIH1cblxuICBwcml2YXRlIHNvcnRDb2VyY2UoaXRlbTogU1RDb2x1bW4pOiBTVFNvcnRNYXAge1xuICAgIC8vIGNvbXBhdGlibGVcbiAgICBpZiAoaXRlbS5zb3J0ZXIgJiYgdHlwZW9mIGl0ZW0uc29ydGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICBkZWZhdWx0OiBpdGVtLnNvcnQgYXMgYW55LFxuICAgICAgICBjb21wYXJlOiBpdGVtLnNvcnRlcixcbiAgICAgICAga2V5OiBpdGVtLnNvcnRLZXkgfHwgaXRlbS5pbmRleEtleSxcbiAgICAgICAgcmVOYW1lOiBpdGVtLnNvcnRSZU5hbWUsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgaXRlbS5zb3J0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIHsgZW5hYmxlZDogZmFsc2UgfTtcbiAgICB9XG5cbiAgICBsZXQgcmVzOiBTVFNvcnRNYXAgPSB7fTtcblxuICAgIGlmICh0eXBlb2YgaXRlbS5zb3J0ID09PSAnc3RyaW5nJykge1xuICAgICAgcmVzLmtleSA9IGl0ZW0uc29ydDtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBpdGVtLnNvcnQgIT09ICdib29sZWFuJykge1xuICAgICAgcmVzID0gaXRlbS5zb3J0O1xuICAgIH1cblxuICAgIGlmICghcmVzLmtleSkge1xuICAgICAgcmVzLmtleSA9IGl0ZW0uaW5kZXhLZXk7XG4gICAgfVxuXG4gICAgcmVzLmVuYWJsZWQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIHByaXZhdGUgZmlsdGVyQ29lcmNlKGl0ZW06IFNUQ29sdW1uKTogU1RDb2x1bW5GaWx0ZXIge1xuICAgIGxldCByZXM6IFNUQ29sdW1uRmlsdGVyID0gbnVsbDtcbiAgICAvLyBjb21wYXRpYmxlXG4gICAgaWYgKGl0ZW0uZmlsdGVycyAmJiBpdGVtLmZpbHRlcnMubGVuZ3RoID4gMCkge1xuICAgICAgcmVzID0ge1xuICAgICAgICBjb25maXJtVGV4dDogaXRlbS5maWx0ZXJDb25maXJtVGV4dCxcbiAgICAgICAgY2xlYXJUZXh0OiBpdGVtLmZpbHRlckNsZWFyVGV4dCxcbiAgICAgICAgZGVmYXVsdDogaXRlbS5maWx0ZXJlZCxcbiAgICAgICAgZm46IGl0ZW0uZmlsdGVyIGFzIGFueSxcbiAgICAgICAgaWNvbjogaXRlbS5maWx0ZXJJY29uLFxuICAgICAgICBrZXk6IGl0ZW0uZmlsdGVyS2V5IHx8IGl0ZW0uaW5kZXhLZXksXG4gICAgICAgIG1lbnVzOiBpdGVtLmZpbHRlcnMsXG4gICAgICAgIG11bHRpcGxlOiBpdGVtLmZpbHRlck11bHRpcGxlLFxuICAgICAgICByZU5hbWU6IGl0ZW0uZmlsdGVyUmVOYW1lLFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzID0gaXRlbS5maWx0ZXI7XG4gICAgfVxuXG4gICAgaWYgKHJlcyA9PSBudWxsIHx8IHJlcy5tZW51cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcmVzLm11bHRpcGxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmVzLm11bHRpcGxlID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCFyZXMuY29uZmlybVRleHQpIHtcbiAgICAgIHJlcy5jb25maXJtVGV4dCA9IHRoaXMuY29nLmZpbHRlckNvbmZpcm1UZXh0O1xuICAgIH1cbiAgICBpZiAoIXJlcy5jbGVhclRleHQpIHtcbiAgICAgIHJlcy5jbGVhclRleHQgPSB0aGlzLmNvZy5maWx0ZXJDbGVhclRleHQ7XG4gICAgfVxuICAgIGlmICghcmVzLmljb24pIHtcbiAgICAgIHJlcy5pY29uID0gYGZpbHRlcmA7XG4gICAgfVxuICAgIGlmICghcmVzLmtleSkge1xuICAgICAgcmVzLmtleSA9IGl0ZW0uaW5kZXhLZXk7XG4gICAgfVxuXG4gICAgcmVzLmRlZmF1bHQgPSByZXMubWVudXMuZmluZEluZGV4KHcgPT4gdy5jaGVja2VkKSAhPT0gLTE7XG5cbiAgICBpZiAodGhpcy5hY2wpIHtcbiAgICAgIHJlcy5tZW51cyA9IHJlcy5tZW51cy5maWx0ZXIodyA9PiB0aGlzLmFjbC5jYW4ody5hY2wpKTtcbiAgICB9XG5cbiAgICBpZiAocmVzLm1lbnVzLmxlbmd0aCA8PSAwKSB7XG4gICAgICByZXMgPSBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBwcml2YXRlIHJlc3RvcmVSZW5kZXIoaXRlbTogU1RDb2x1bW4pIHtcbiAgICBpZiAoaXRlbS5yZW5kZXJUaXRsZSkge1xuICAgICAgaXRlbS5fX3JlbmRlclRpdGxlID0gdGhpcy5yb3dTb3VyY2UuZ2V0VGl0bGUoaXRlbS5yZW5kZXJUaXRsZSk7XG4gICAgfVxuICAgIGlmIChpdGVtLnJlbmRlcikge1xuICAgICAgaXRlbS5fX3JlbmRlciA9IHRoaXMucm93U291cmNlLmdldFJvdyhpdGVtLnJlbmRlcik7XG4gICAgfVxuICB9XG5cbiAgcHJvY2VzcyhsaXN0OiBTVENvbHVtbltdKTogU1RDb2x1bW5bXSB7XG4gICAgaWYgKCFsaXN0IHx8IGxpc3QubGVuZ3RoID09PSAwKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBbc3RdOiB0aGUgY29sdW1ucyBwcm9wZXJ0eSBtdXNlIGJlIGRlZmluZSFgKTtcblxuICAgIGNvbnN0IHsgbm9JbmRleCB9ID0gdGhpcy5jb2c7XG4gICAgbGV0IGNoZWNrYm94Q291bnQgPSAwO1xuICAgIGxldCByYWRpb0NvdW50ID0gMDtcbiAgICBjb25zdCBjb2x1bW5zOiBTVENvbHVtbltdID0gW107XG4gICAgY29uc3QgY29weUNvbHVtZW5zID0gZGVlcENvcHkobGlzdCkgYXMgU1RDb2x1bW5bXTtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgY29weUNvbHVtZW5zKSB7XG4gICAgICBpZiAodGhpcy5hY2wgJiYgaXRlbS5hY2wgJiYgIXRoaXMuYWNsLmNhbihpdGVtLmFjbCkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICAvLyBpbmRleFxuICAgICAgaWYgKGl0ZW0uaW5kZXgpIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGl0ZW0uaW5kZXgpKSB7XG4gICAgICAgICAgaXRlbS5pbmRleCA9IGl0ZW0uaW5kZXguc3BsaXQoJy4nKTtcbiAgICAgICAgfVxuICAgICAgICBpdGVtLmluZGV4S2V5ID0gaXRlbS5pbmRleC5qb2luKCcuJyk7XG4gICAgICB9XG4gICAgICAvLyB0aXRsZVxuICAgICAgaWYgKGl0ZW0uaTE4biAmJiB0aGlzLmkxOG5TcnYpIHtcbiAgICAgICAgaXRlbS50aXRsZSA9IHRoaXMuaTE4blNydi5mYW55aShpdGVtLmkxOG4pO1xuICAgICAgfVxuICAgICAgLy8gbm9cbiAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdubycpIHtcbiAgICAgICAgaXRlbS5ub0luZGV4ID0gaXRlbS5ub0luZGV4ID09IG51bGwgPyBub0luZGV4IDogaXRlbS5ub0luZGV4O1xuICAgICAgfVxuICAgICAgLy8gY2hlY2tib3hcbiAgICAgIGlmIChpdGVtLnNlbGVjdGlvbnMgPT0gbnVsbCkge1xuICAgICAgICBpdGVtLnNlbGVjdGlvbnMgPSBbXTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgKytjaGVja2JveENvdW50O1xuICAgICAgICBpZiAoIWl0ZW0ud2lkdGgpIHtcbiAgICAgICAgICBpdGVtLndpZHRoID0gYCR7aXRlbS5zZWxlY3Rpb25zLmxlbmd0aCA+IDAgPyA2MiA6IDUwfXB4YDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuYWNsKSB7XG4gICAgICAgIGl0ZW0uc2VsZWN0aW9ucyA9IGl0ZW0uc2VsZWN0aW9ucy5maWx0ZXIodyA9PiB0aGlzLmFjbC5jYW4ody5hY2wpKTtcbiAgICAgIH1cbiAgICAgIC8vIHJhZGlvXG4gICAgICBpZiAoaXRlbS50eXBlID09PSAncmFkaW8nKSB7XG4gICAgICAgICsrcmFkaW9Db3VudDtcbiAgICAgICAgaXRlbS5zZWxlY3Rpb25zID0gW107XG4gICAgICAgIGlmICghaXRlbS53aWR0aCkge1xuICAgICAgICAgIGl0ZW0ud2lkdGggPSAnNTBweCc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIHR5cGVzXG4gICAgICBpZiAoaXRlbS50eXBlID09PSAneW4nKSB7XG4gICAgICAgIGl0ZW0ueW4gPSBPYmplY3QuYXNzaWduKHsgdHJ1dGg6IHRydWUgfSwgaXRlbS55bik7XG4gICAgICAgIC8vIGNvbXBhdGlibGVcbiAgICAgICAgaWYgKGl0ZW0ueW5UcnV0aCAhPSBudWxsKSBpdGVtLnluLnRydXRoID0gaXRlbS55blRydXRoO1xuICAgICAgICBpZiAoaXRlbS55blllcyAhPSBudWxsKSBpdGVtLnluLnllcyA9IGl0ZW0ueW5ZZXM7XG4gICAgICAgIGlmIChpdGVtLnluTm8gIT0gbnVsbCkgaXRlbS55bi5ubyA9IGl0ZW0ueW5ObztcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgKGl0ZW0udHlwZSA9PT0gJ2xpbmsnICYmIHR5cGVvZiBpdGVtLmNsaWNrICE9PSAnZnVuY3Rpb24nKSB8fFxuICAgICAgICAoaXRlbS50eXBlID09PSAnYmFkZ2UnICYmIGl0ZW0uYmFkZ2UgPT0gbnVsbCkgfHxcbiAgICAgICAgKGl0ZW0udHlwZSA9PT0gJ3RhZycgJiYgaXRlbS50YWcgPT0gbnVsbClcbiAgICAgICkge1xuICAgICAgICAoaXRlbSBhcyBhbnkpLnR5cGUgPSAnJztcbiAgICAgIH1cbiAgICAgIC8vIGNsYXNzTmFtZVxuICAgICAgaWYgKCFpdGVtLmNsYXNzTmFtZSkge1xuICAgICAgICBpdGVtLmNsYXNzTmFtZSA9IHtcbiAgICAgICAgICBudW1iZXI6ICd0ZXh0LXJpZ2h0JyxcbiAgICAgICAgICBjdXJyZW5jeTogJ3RleHQtcmlnaHQnLFxuICAgICAgICAgIGRhdGU6ICd0ZXh0LWNlbnRlcicsXG4gICAgICAgIH1baXRlbS50eXBlXTtcbiAgICAgIH1cblxuICAgICAgLy8gc29ydGVyXG4gICAgICBpdGVtLl9zb3J0ID0gdGhpcy5zb3J0Q29lcmNlKGl0ZW0pO1xuICAgICAgLy8gZmlsdGVyXG4gICAgICBpdGVtLmZpbHRlciA9IHRoaXMuZmlsdGVyQ29lcmNlKGl0ZW0pO1xuICAgICAgLy8gYnV0dG9uc1xuICAgICAgaXRlbS5idXR0b25zID0gdGhpcy5idG5Db2VyY2UoaXRlbS5idXR0b25zKTtcbiAgICAgIC8vIHJlc3RvcmUgY3VzdG9tIHJvd1xuICAgICAgdGhpcy5yZXN0b3JlUmVuZGVyKGl0ZW0pO1xuXG4gICAgICBjb2x1bW5zLnB1c2goaXRlbSk7XG4gICAgfVxuICAgIGlmIChjaGVja2JveENvdW50ID4gMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBbc3RdOiBqdXN0IG9ubHkgb25lIGNvbHVtbiBjaGVja2JveGApO1xuICAgIH1cbiAgICBpZiAocmFkaW9Db3VudCA+IDEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgW3N0XToganVzdCBvbmx5IG9uZSBjb2x1bW4gcmFkaW9gKTtcbiAgICB9XG5cbiAgICB0aGlzLmZpeGVkQ29lcmNlKGNvbHVtbnMpO1xuXG4gICAgcmV0dXJuIGNvbHVtbnM7XG4gIH1cblxuICByZXN0b3JlQWxsUmVuZGVyKGNvbHVtbnM6IFNUQ29sdW1uW10pIHtcbiAgICBjb2x1bW5zLmZvckVhY2goaSA9PiB0aGlzLnJlc3RvcmVSZW5kZXIoaSkpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBIb3N0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEZWNpbWFsUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IGRlZXBHZXQgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBDTkN1cnJlbmN5UGlwZSwgRGF0ZVBpcGUsIFlOUGlwZSwgX0h0dHBDbGllbnQgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuXG5pbXBvcnQge1xuICBTVERhdGEsXG4gIFNUUGFnZSxcbiAgU1RSZXEsXG4gIFNUUmVzLFxuICBTVENvbHVtbixcbiAgU1RNdWx0aVNvcnQsXG4gIFNUUm93Q2xhc3NOYW1lLFxuICBTVFNpbmdsZVNvcnQsXG59IGZyb20gJy4vdGFibGUuaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBTVFNvcnRNYXAgfSBmcm9tICcuL3RhYmxlLWNvbHVtbi1zb3VyY2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNURGF0YVNvdXJjZU9wdGlvbnMge1xuICBwaT86IG51bWJlcjtcbiAgcHM/OiBudW1iZXI7XG4gIGRhdGE/OiBzdHJpbmcgfCBTVERhdGFbXSB8IE9ic2VydmFibGU8U1REYXRhW10+O1xuICB0b3RhbD86IG51bWJlcjtcbiAgcmVxPzogU1RSZXE7XG4gIHJlcz86IFNUUmVzO1xuICBwYWdlPzogU1RQYWdlO1xuICBjb2x1bW5zPzogU1RDb2x1bW5bXTtcbiAgc2luZ2xlU29ydD86IFNUU2luZ2xlU29ydDtcbiAgbXVsdGlTb3J0PzogU1RNdWx0aVNvcnQ7XG4gIHJvd0NsYXNzTmFtZT86IFNUUm93Q2xhc3NOYW1lO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNURGF0YVNvdXJjZVJlc3VsdCB7XG4gIC8qKiDDpsKYwq/DpcKQwqbDqcKcwoDDqMKmwoHDpsKYwr7Dp8KkwrrDpcKIwobDqcKhwrXDpcKZwqggKi9cbiAgcGFnZVNob3c/OiBib29sZWFuO1xuICAvKiogw6bClsKwIGBwaWDDr8K8wozDqMKLwqXDqMK/wpTDpcKbwp4gYHVuZGVmaW5lZGAgw6jCocKow6fCpMK6w6fClMKow6bCiMK3w6XCj8KXw6bCjsKnICovXG4gIHBpPzogbnVtYmVyO1xuICAvKiogw6bClsKwIGB0b3RhbGDDr8K8wozDqMKLwqXDqMK/wpTDpcKbwp4gYHVuZGVmaW5lZGAgw6jCocKow6fCpMK6w6fClMKow6bCiMK3w6XCj8KXw6bCjsKnICovXG4gIHRvdGFsPzogbnVtYmVyO1xuICAvKiogw6bClcKww6bCjcKuICovXG4gIGxpc3Q/OiBTVERhdGFbXTtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNURGF0YVNvdXJjZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogX0h0dHBDbGllbnQsXG4gICAgQEhvc3QoKSBwcml2YXRlIGN1cnJlbnR5OiBDTkN1cnJlbmN5UGlwZSxcbiAgICBASG9zdCgpIHByaXZhdGUgZGF0ZTogRGF0ZVBpcGUsXG4gICAgQEhvc3QoKSBwcml2YXRlIHluOiBZTlBpcGUsXG4gICAgQEhvc3QoKSBwcml2YXRlIG51bWJlcjogRGVjaW1hbFBpcGUsXG4gICAgcHJpdmF0ZSBkb206IERvbVNhbml0aXplcixcbiAgKSB7fVxuXG4gIHByb2Nlc3Mob3B0aW9uczogU1REYXRhU291cmNlT3B0aW9ucyk6IFByb21pc2U8U1REYXRhU291cmNlUmVzdWx0PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlUHJvbWlzZSwgcmVqZWN0UHJvbWlzZSkgPT4ge1xuICAgICAgbGV0IGRhdGEkOiBPYnNlcnZhYmxlPFNURGF0YVtdPjtcbiAgICAgIGxldCBpc1JlbW90ZSA9IGZhbHNlO1xuICAgICAgY29uc3QgeyBkYXRhLCByZXMsIHRvdGFsLCBwYWdlLCBwaSwgcHMsIGNvbHVtbnMgfSA9IG9wdGlvbnM7XG4gICAgICBsZXQgcmV0VG90YWw6IG51bWJlcjtcbiAgICAgIGxldCByZXRMaXN0OiBTVERhdGFbXTtcbiAgICAgIGxldCByZXRQaTogbnVtYmVyO1xuXG4gICAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlzUmVtb3RlID0gdHJ1ZTtcbiAgICAgICAgZGF0YSQgPSB0aGlzLmdldEJ5SHR0cChkYXRhLCBvcHRpb25zKS5waXBlKFxuICAgICAgICAgIG1hcCgocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgICAgICAgIC8vIGxpc3RcbiAgICAgICAgICAgIGxldCByZXQgPSBkZWVwR2V0KHJlc3VsdCwgcmVzLnJlTmFtZS5saXN0IGFzIHN0cmluZ1tdLCBbXSk7XG4gICAgICAgICAgICBpZiAocmV0ID09IG51bGwgfHwgIUFycmF5LmlzQXJyYXkocmV0KSkge1xuICAgICAgICAgICAgICByZXQgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHRvdGFsXG4gICAgICAgICAgICBjb25zdCByZXN1bHRUb3RhbCA9XG4gICAgICAgICAgICAgIHJlcy5yZU5hbWUudG90YWwgJiZcbiAgICAgICAgICAgICAgZGVlcEdldChyZXN1bHQsIHJlcy5yZU5hbWUudG90YWwgYXMgc3RyaW5nW10sIG51bGwpO1xuICAgICAgICAgICAgcmV0VG90YWwgPSByZXN1bHRUb3RhbCA9PSBudWxsID8gdG90YWwgfHwgMCA6ICtyZXN1bHRUb3RhbDtcbiAgICAgICAgICAgIHJldHVybiA8U1REYXRhW10+cmV0O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyID0+IHtcbiAgICAgICAgICAgIHJlamVjdFByb21pc2UoZXJyKTtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICBkYXRhJCA9IG9mKGRhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gYSBjb2xkIG9ic2VydmFibGVcbiAgICAgICAgZGF0YSQgPSBkYXRhO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzUmVtb3RlKSB7XG4gICAgICAgIGRhdGEkID0gZGF0YSQucGlwZShcbiAgICAgICAgICAvLyBzb3J0XG4gICAgICAgICAgbWFwKChyZXN1bHQ6IFNURGF0YVtdKSA9PiB7XG4gICAgICAgICAgICBsZXQgY29weVJlc3VsdCA9IHJlc3VsdC5zbGljZSgwKTtcbiAgICAgICAgICAgIGNvbnN0IHNvcnRlckZuID0gdGhpcy5nZXRTb3J0ZXJGbihjb2x1bW5zKTtcbiAgICAgICAgICAgIGlmIChzb3J0ZXJGbikge1xuICAgICAgICAgICAgICBjb3B5UmVzdWx0ID0gY29weVJlc3VsdC5zb3J0KHNvcnRlckZuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjb3B5UmVzdWx0O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIC8vIGZpbHRlclxuICAgICAgICAgIG1hcCgocmVzdWx0OiBTVERhdGFbXSkgPT4ge1xuICAgICAgICAgICAgY29sdW1ucy5maWx0ZXIodyA9PiB3LmZpbHRlcikuZm9yRWFjaChjID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gYy5maWx0ZXIubWVudXMuZmlsdGVyKHcgPT4gdy5jaGVja2VkKTtcbiAgICAgICAgICAgICAgaWYgKHZhbHVlcy5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICAgICAgICAgICAgY29uc3Qgb25GaWx0ZXIgPSBjLmZpbHRlci5mbjtcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvbkZpbHRlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgW3N0XSBNdXNlIHByb3ZpZGUgdGhlIGZuIGZ1bmN0aW9uIGluIGZpbHRlcmApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQuZmlsdGVyKHJlY29yZCA9PlxuICAgICAgICAgICAgICAgIHZhbHVlcy5zb21lKHYgPT4gb25GaWx0ZXIodiwgcmVjb3JkKSksXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgLy8gcGFnaW5nXG4gICAgICAgICAgbWFwKChyZXN1bHQ6IFNURGF0YVtdKSA9PiB7XG4gICAgICAgICAgICBpZiAocGFnZS5mcm9udCkge1xuICAgICAgICAgICAgICBjb25zdCBtYXhQYWdlSW5kZXggPSBNYXRoLmNlaWwocmVzdWx0Lmxlbmd0aCAvIHBzKTtcbiAgICAgICAgICAgICAgcmV0UGkgPSBNYXRoLm1heCgxLCBwaSA+IG1heFBhZ2VJbmRleCA/IG1heFBhZ2VJbmRleCA6IHBpKTtcbiAgICAgICAgICAgICAgcmV0VG90YWwgPSByZXN1bHQubGVuZ3RoO1xuICAgICAgICAgICAgICBpZiAocGFnZS5zaG93ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5zbGljZSgocmV0UGkgLSAxKSAqIHBzLCByZXRQaSAqIHBzKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgLy8gcHJlLXByb2Nlc3NcbiAgICAgIGlmICh0eXBlb2YgcmVzLnByb2Nlc3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZGF0YSQgPSBkYXRhJC5waXBlKG1hcChyZXN1bHQgPT4gcmVzLnByb2Nlc3MocmVzdWx0KSkpO1xuICAgICAgfVxuICAgICAgLy8gZGF0YSBhY2NlbGVyYXRvclxuICAgICAgZGF0YSQgPSBkYXRhJC5waXBlKFxuICAgICAgICBtYXAocmVzdWx0ID0+IHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gcmVzdWx0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICByZXN1bHRbaV0uX3ZhbHVlcyA9IGNvbHVtbnMubWFwKGMgPT4gdGhpcy5nZXQocmVzdWx0W2ldLCBjLCBpKSk7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5yb3dDbGFzc05hbWUpIHtcbiAgICAgICAgICAgICAgcmVzdWx0W2ldLl9yb3dDbGFzc05hbWUgPSBvcHRpb25zLnJvd0NsYXNzTmFtZShyZXN1bHRbaV0sIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9KSxcbiAgICAgICk7XG5cbiAgICAgIGRhdGEkLmZvckVhY2goKHJlc3VsdDogU1REYXRhW10pID0+IChyZXRMaXN0ID0gcmVzdWx0KSkudGhlbigoKSA9PiB7XG4gICAgICAgIHJlc29sdmVQcm9taXNlKHtcbiAgICAgICAgICBwaTogcmV0UGksXG4gICAgICAgICAgdG90YWw6IHJldFRvdGFsLFxuICAgICAgICAgIGxpc3Q6IHJldExpc3QsXG4gICAgICAgICAgcGFnZVNob3c6XG4gICAgICAgICAgICB0eXBlb2YgcGFnZS5zaG93ID09PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICA/IChyZXRUb3RhbCB8fCB0b3RhbCkgPiBwc1xuICAgICAgICAgICAgICA6IHBhZ2Uuc2hvdyxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0KGl0ZW06IGFueSwgY29sOiBTVENvbHVtbiwgaWR4OiBudW1iZXIpIHtcbiAgICBpZiAoY29sLmZvcm1hdCkge1xuICAgICAgY29uc3QgZm9ybWF0UmVzID0gY29sLmZvcm1hdChpdGVtLCBjb2wpIGFzIHN0cmluZztcbiAgICAgIGlmICh+Zm9ybWF0UmVzLmluZGV4T2YoJzwnKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5kb20uYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoZm9ybWF0UmVzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmb3JtYXRSZXM7XG4gICAgfVxuXG4gICAgY29uc3QgdmFsdWUgPSBkZWVwR2V0KGl0ZW0sIGNvbC5pbmRleCBhcyBzdHJpbmdbXSwgY29sLmRlZmF1bHQpO1xuXG4gICAgbGV0IHJldCA9IHZhbHVlO1xuICAgIHN3aXRjaCAoY29sLnR5cGUpIHtcbiAgICAgIGNhc2UgJ25vJzpcbiAgICAgICAgcmV0ID0gY29sLm5vSW5kZXggKyBpZHg7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnaW1nJzpcbiAgICAgICAgcmV0ID0gdmFsdWUgPyBgPGltZyBzcmM9XCIke3ZhbHVlfVwiIGNsYXNzPVwiaW1nXCI+YCA6ICcnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgIHJldCA9IHRoaXMubnVtYmVyLnRyYW5zZm9ybSh2YWx1ZSwgY29sLm51bWJlckRpZ2l0cyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY3VycmVuY3knOlxuICAgICAgICByZXQgPSB0aGlzLmN1cnJlbnR5LnRyYW5zZm9ybSh2YWx1ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICAgIHJldCA9IHRoaXMuZGF0ZS50cmFuc2Zvcm0odmFsdWUsIGNvbC5kYXRlRm9ybWF0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd5bic6XG4gICAgICAgIHJldCA9IHRoaXMueW4udHJhbnNmb3JtKHZhbHVlID09PSBjb2wueW4udHJ1dGgsIGNvbC55bi55ZXMsIGNvbC55bi5ubyk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gcmV0ID09IG51bGwgPyAnJyA6IHJldDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0QnlIdHRwKFxuICAgIHVybDogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFNURGF0YVNvdXJjZU9wdGlvbnMsXG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgeyByZXEsIHBhZ2UsIHBpLCBwcywgc2luZ2xlU29ydCwgbXVsdGlTb3J0LCBjb2x1bW5zIH0gPSBvcHRpb25zO1xuICAgIGNvbnN0IG1ldGhvZCA9IChyZXEubWV0aG9kIHx8ICdHRVQnKS50b1VwcGVyQ2FzZSgpO1xuICAgIGNvbnN0IHBhcmFtczogYW55ID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHtcbiAgICAgICAgW3JlcS5yZU5hbWUucGldOiBwYWdlLnplcm9JbmRleGVkID8gcGkgLSAxIDogcGksXG4gICAgICAgIFtyZXEucmVOYW1lLnBzXTogcHMsXG4gICAgICB9LFxuICAgICAgcmVxLnBhcmFtcyxcbiAgICAgIHRoaXMuZ2V0UmVxU29ydE1hcChzaW5nbGVTb3J0LCBtdWx0aVNvcnQsIGNvbHVtbnMpLFxuICAgICAgdGhpcy5nZXRSZXFGaWx0ZXJNYXAoY29sdW1ucyksXG4gICAgKTtcbiAgICBsZXQgcmVxT3B0aW9uczogYW55ID0ge1xuICAgICAgcGFyYW1zLFxuICAgICAgYm9keTogcmVxLmJvZHksXG4gICAgICBoZWFkZXJzOiByZXEuaGVhZGVycyxcbiAgICB9O1xuICAgIGlmIChtZXRob2QgPT09ICdQT1NUJyAmJiByZXEuYWxsSW5Cb2R5ID09PSB0cnVlKSB7XG4gICAgICByZXFPcHRpb25zID0ge1xuICAgICAgICBib2R5OiBPYmplY3QuYXNzaWduKHt9LCByZXEuYm9keSwgcGFyYW1zKSxcbiAgICAgICAgaGVhZGVyczogcmVxLmhlYWRlcnMsXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5odHRwLnJlcXVlc3QobWV0aG9kLCB1cmwsIHJlcU9wdGlvbnMpO1xuICB9XG5cbiAgLy8jcmVnaW9uIHNvcnRcblxuICBwcml2YXRlIGdldFZhbGlkU29ydChjb2x1bW5zOiBTVENvbHVtbltdKTogU1RTb3J0TWFwW10ge1xuICAgIHJldHVybiBjb2x1bW5zXG4gICAgICAuZmlsdGVyKGl0ZW0gPT4gaXRlbS5fc29ydCAmJiBpdGVtLl9zb3J0LmVuYWJsZWQgJiYgaXRlbS5fc29ydC5kZWZhdWx0KVxuICAgICAgLm1hcChpdGVtID0+IGl0ZW0uX3NvcnQpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTb3J0ZXJGbihjb2x1bW5zOiBTVENvbHVtbltdKSB7XG4gICAgY29uc3Qgc29ydExpc3QgPSB0aGlzLmdldFZhbGlkU29ydChjb2x1bW5zKTtcbiAgICBpZiAoc29ydExpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygc29ydExpc3RbMF0uY29tcGFyZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc29sZS53YXJuKGBbc3RdIE11c2UgcHJvdmlkZSB0aGUgY29tcGFyZSBmdW5jdGlvbiBpbiBzb3J0YCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmV0dXJuIChhOiBTVERhdGEsIGI6IFNURGF0YSkgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0ID0gc29ydExpc3RbMF0uY29tcGFyZShhLCBiKTtcbiAgICAgIGlmIChyZXN1bHQgIT09IDApIHtcbiAgICAgICAgcmV0dXJuIHNvcnRMaXN0WzBdLmRlZmF1bHQgPT09ICdkZXNjZW5kJyA/IC1yZXN1bHQgOiByZXN1bHQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gMDtcbiAgICB9O1xuICB9XG5cbiAgZ2V0UmVxU29ydE1hcChcbiAgICBzaW5nbGVTb3J0OiBTVFNpbmdsZVNvcnQsXG4gICAgbXVsdGlTb3J0OiBTVE11bHRpU29ydCxcbiAgICBjb2x1bW5zOiBTVENvbHVtbltdLFxuICApOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHtcbiAgICBsZXQgcmV0OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XG4gICAgY29uc3Qgc29ydExpc3QgPSB0aGlzLmdldFZhbGlkU29ydChjb2x1bW5zKTtcbiAgICBpZiAoIW11bHRpU29ydCAmJiBzb3J0TGlzdC5sZW5ndGggPT09IDApIHJldHVybiByZXQ7XG5cbiAgICBpZiAobXVsdGlTb3J0KSB7XG4gICAgICBzb3J0TGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICByZXRbaXRlbS5rZXldID0gKGl0ZW0ucmVOYW1lIHx8IHt9KVtpdGVtLmRlZmF1bHRdIHx8IGl0ZW0uZGVmYXVsdDtcbiAgICAgIH0pO1xuICAgICAgLy8gw6XCkMKIw6XCucK2w6XCpMKEw6fCkMKGXG4gICAgICByZXQgPSB7XG4gICAgICAgIFttdWx0aVNvcnQua2V5XTogT2JqZWN0LmtleXMocmV0KVxuICAgICAgICAgIC5tYXAoa2V5ID0+IGtleSArIG11bHRpU29ydC5uYW1lU2VwYXJhdG9yICsgcmV0W2tleV0pXG4gICAgICAgICAgLmpvaW4obXVsdGlTb3J0LnNlcGFyYXRvciksXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtYXBEYXRhID0gc29ydExpc3RbMF07XG4gICAgICBsZXQgc29ydEZpbGVkID0gbWFwRGF0YS5rZXk7XG4gICAgICBsZXQgc29ydFZhbHVlID0gKHNvcnRMaXN0WzBdLnJlTmFtZSB8fCB7fSlbbWFwRGF0YS5kZWZhdWx0XSB8fCBtYXBEYXRhLmRlZmF1bHQ7XG4gICAgICBpZiAoc2luZ2xlU29ydCkge1xuICAgICAgICBzb3J0VmFsdWUgPSBzb3J0RmlsZWQgKyAoc2luZ2xlU29ydC5uYW1lU2VwYXJhdG9yIHx8ICcuJykgKyBzb3J0VmFsdWU7XG4gICAgICAgIHNvcnRGaWxlZCA9IHNpbmdsZVNvcnQua2V5IHx8ICdzb3J0JztcbiAgICAgIH1cbiAgICAgIHJldFtzb3J0RmlsZWRdID0gc29ydFZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLy8jZW5kcmVnaW9uXG5cbiAgLy8jcmVnaW9uIGZpbHRlclxuXG4gIHByaXZhdGUgZ2V0UmVxRmlsdGVyTWFwKGNvbHVtbnM6IFNUQ29sdW1uW10pOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHtcbiAgICBsZXQgcmV0ID0ge307XG4gICAgY29sdW1ucy5maWx0ZXIodyA9PiB3LmZpbHRlciAmJiB3LmZpbHRlci5kZWZhdWx0ID09PSB0cnVlKS5mb3JFYWNoKGNvbCA9PiB7XG4gICAgICBjb25zdCB2YWx1ZXMgPSBjb2wuZmlsdGVyLm1lbnVzLmZpbHRlcihmID0+IGYuY2hlY2tlZCA9PT0gdHJ1ZSk7XG4gICAgICBsZXQgb2JqOiBPYmplY3QgPSB7fTtcbiAgICAgIGlmIChjb2wuZmlsdGVyLnJlTmFtZSkge1xuICAgICAgICBvYmogPSBjb2wuZmlsdGVyLnJlTmFtZShjb2wuZmlsdGVyLm1lbnVzLCBjb2wpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2JqW2NvbC5maWx0ZXIua2V5XSA9IHZhbHVlcy5tYXAoaSA9PiBpLnZhbHVlKS5qb2luKCcsJyk7XG4gICAgICB9XG4gICAgICByZXQgPSBPYmplY3QuYXNzaWduKHJldCwgb2JqKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLy8jZW5kcmVnaW9uXG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZGVlcEdldCB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IFhsc3hTZXJ2aWNlIH0gZnJvbSAnQGRlbG9uL2FiYy94bHN4JztcblxuaW1wb3J0IHsgU1RDb2x1bW4sIFNURXhwb3J0T3B0aW9ucyB9IGZyb20gJy4vdGFibGUuaW50ZXJmYWNlcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTVEV4cG9ydCB7XG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHByaXZhdGUgeGxzeFNydjogWGxzeFNlcnZpY2UpIHt9XG5cbiAgcHJpdmF0ZSBfc3RHZXQoaXRlbTogYW55LCBjb2w6IFNUQ29sdW1uKTogYW55IHtcbiAgICBjb25zdCByZXQ6IGFueSA9IHsgdDogJ3MnLCB2OiAnJyB9O1xuXG4gICAgaWYgKGNvbC5mb3JtYXQpIHtcbiAgICAgIHJldC52ID0gY29sLmZvcm1hdChpdGVtLCBjb2wpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB2YWwgPSBkZWVwR2V0KGl0ZW0sIGNvbC5pbmRleCBhcyBzdHJpbmdbXSwgJycpO1xuICAgICAgcmV0LnYgPSB2YWw7XG4gICAgICBzd2l0Y2ggKGNvbC50eXBlKSB7XG4gICAgICAgIGNhc2UgJ2N1cnJlbmN5JzpcbiAgICAgICAgICByZXQudCA9ICduJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICAgICAgcmV0LnQgPSAnZCc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3luJzpcbiAgICAgICAgICByZXQudiA9IHJldC52ID09PSBjb2wueW5UcnV0aCA/IGNvbC55blllcyB8fCAnw6bCmMKvJyA6IGNvbC55bk5vIHx8ICfDpcKQwqYnO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBwcml2YXRlIGdlblNoZWV0KG9wdDogU1RFeHBvcnRPcHRpb25zKTogeyBbc2hlZXQ6IHN0cmluZ106IGFueSB9IHtcbiAgICBjb25zdCBzaGVldHM6IHsgW3NoZWV0OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuICAgIGNvbnN0IHNoZWV0ID0gKHNoZWV0c1tvcHQuc2hlZXRuYW1lIHx8ICdTaGVldDEnXSA9IHt9KTtcbiAgICBjb25zdCBjb2xEYXRhID0gb3B0Ll9jLmZpbHRlcihcbiAgICAgIHcgPT5cbiAgICAgICAgdy5leHBvcnRlZCAhPT0gZmFsc2UgJiZcbiAgICAgICAgdy5pbmRleCAmJlxuICAgICAgICAoIXcuYnV0dG9ucyB8fCB3LmJ1dHRvbnMubGVuZ3RoID09PSAwKSxcbiAgICApO1xuICAgIGNvbnN0IGNjID0gY29sRGF0YS5sZW5ndGgsXG4gICAgICBkYyA9IG9wdC5fZC5sZW5ndGg7XG5cbiAgICAvLyBjb2x1bW5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNjOyBpKyspIHtcbiAgICAgIHNoZWV0W2Ake1N0cmluZy5mcm9tQ2hhckNvZGUoNjUgKyBpKX0xYF0gPSB7XG4gICAgICAgIHQ6ICdzJyxcbiAgICAgICAgdjogY29sRGF0YVtpXS50aXRsZSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gY29udGVudFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGM7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjYzsgaisrKSB7XG4gICAgICAgIHNoZWV0W2Ake1N0cmluZy5mcm9tQ2hhckNvZGUoNjUgKyBqKX0ke2kgKyAyfWBdID0gdGhpcy5fc3RHZXQoXG4gICAgICAgICAgb3B0Ll9kW2ldLFxuICAgICAgICAgIGNvbERhdGFbal0sXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNjID4gMCAmJiBkYyA+IDApIHtcbiAgICAgIHNoZWV0WychcmVmJ10gPSBgQTE6JHtTdHJpbmcuZnJvbUNoYXJDb2RlKDY1ICsgY2MgLSAxKX0ke2RjICsgMX1gO1xuICAgIH1cblxuICAgIHJldHVybiBzaGVldHM7XG4gIH1cblxuICBleHBvcnQob3B0OiBTVEV4cG9ydE9wdGlvbnMpIHtcbiAgICBpZiAoIXRoaXMueGxzeFNydilcbiAgICAgIHRocm93IG5ldyBFcnJvcihgbXVzZSBiZSBpbXBvcnQgJ1hsc3hNb2R1bGUnIG1vZHVsZSwgYnV0IGdvdCBudWxsYCk7XG4gICAgY29uc3Qgc2hlZXRzID0gdGhpcy5nZW5TaGVldChvcHQpO1xuICAgIHJldHVybiB0aGlzLnhsc3hTcnYuZXhwb3J0KHtcbiAgICAgIHNoZWV0cyxcbiAgICAgIGZpbGVuYW1lOiBvcHQuZmlsZW5hbWUsXG4gICAgICBjYWxsYmFjazogb3B0LmNhbGxiYWNrLFxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgT25EZXN0cm95LFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIEV2ZW50RW1pdHRlcixcbiAgUmVuZGVyZXIyLFxuICBFbGVtZW50UmVmLFxuICBUZW1wbGF0ZVJlZixcbiAgU2ltcGxlQ2hhbmdlLFxuICBPcHRpb25hbCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERlY2ltYWxQaXBlLCBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtcbiAgQ05DdXJyZW5jeVBpcGUsXG4gIERhdGVQaXBlLFxuICBZTlBpcGUsXG4gIE1vZGFsSGVscGVyLFxuICBNb2RhbEhlbHBlck9wdGlvbnMsXG4gIEFMQUlOX0kxOE5fVE9LRU4sXG4gIEFsYWluSTE4TlNlcnZpY2UsXG4gIERyYXdlckhlbHBlcixcbiAgRGVsb25Mb2NhbGVTZXJ2aWNlLFxufSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHtcbiAgZGVlcENvcHksXG4gIHRvQm9vbGVhbixcbiAgdXBkYXRlSG9zdENsYXNzLFxuICBJbnB1dEJvb2xlYW4sXG4gIElucHV0TnVtYmVyLFxufSBmcm9tICdAZGVsb24vdXRpbCc7XG5cbmltcG9ydCB7XG4gIFNUQ29sdW1uLFxuICBTVENoYW5nZSxcbiAgU1RDb2x1bW5TZWxlY3Rpb24sXG4gIFNUQ29sdW1uRmlsdGVyTWVudSxcbiAgU1REYXRhLFxuICBTVENvbHVtbkJ1dHRvbixcbiAgU1RFeHBvcnRPcHRpb25zLFxuICBTVE11bHRpU29ydCxcbiAgU1RSZXEsXG4gIFNURXJyb3IsXG4gIFNUQ2hhbmdlVHlwZSxcbiAgU1RSZXMsXG4gIFNUUGFnZSxcbiAgU1RMb2FkT3B0aW9ucyxcbiAgU1RSb3dDbGFzc05hbWUsXG4gIFNUU2luZ2xlU29ydCxcbn0gZnJvbSAnLi90YWJsZS5pbnRlcmZhY2VzJztcbmltcG9ydCB7IFNUQ29uZmlnIH0gZnJvbSAnLi90YWJsZS5jb25maWcnO1xuaW1wb3J0IHsgU1RFeHBvcnQgfSBmcm9tICcuL3RhYmxlLWV4cG9ydCc7XG5pbXBvcnQgeyBTVENvbHVtblNvdXJjZSB9IGZyb20gJy4vdGFibGUtY29sdW1uLXNvdXJjZSc7XG5pbXBvcnQgeyBTVFJvd1NvdXJjZSB9IGZyb20gJy4vdGFibGUtcm93LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBTVERhdGFTb3VyY2UgfSBmcm9tICcuL3RhYmxlLWRhdGEtc291cmNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFibGUuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFtcbiAgICBTVERhdGFTb3VyY2UsXG4gICAgU1RSb3dTb3VyY2UsXG4gICAgU1RDb2x1bW5Tb3VyY2UsXG4gICAgU1RFeHBvcnQsXG4gICAgQ05DdXJyZW5jeVBpcGUsXG4gICAgRGF0ZVBpcGUsXG4gICAgWU5QaXBlLFxuICAgIERlY2ltYWxQaXBlLFxuICBdLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFNUQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGkxOG4kOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgZGVsb25JMThuJDogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIHRvdGFsVHBsID0gYGA7XG4gIHByaXZhdGUgbG9jYWxlOiBhbnkgPSB7fTtcbiAgcHJpdmF0ZSBjbG9uZVBhZ2U6IFNUUGFnZTtcbiAgX2RhdGE6IFNURGF0YVtdID0gW107XG4gIF9pc1BhZ2luYXRpb24gPSB0cnVlO1xuICBfYWxsQ2hlY2tlZCA9IGZhbHNlO1xuICBfaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICBfY29sdW1uczogU1RDb2x1bW5bXSA9IFtdO1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgLyoqIMOmwpXCsMOmwo3CrsOmwrrCkCAqL1xuICBASW5wdXQoKVxuICBkYXRhOiBzdHJpbmcgfCBTVERhdGFbXSB8IE9ic2VydmFibGU8U1REYXRhW10+O1xuICAvKiogw6jCr8K3w6bCscKCw6TCvcKTw6nChcKNw6fCvcKuICovXG4gIEBJbnB1dCgpXG4gIGdldCByZXEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcTtcbiAgfVxuICBzZXQgcmVxKHZhbHVlOiBTVFJlcSkge1xuICAgIGNvbnN0IHsgcmVxIH0gPSB0aGlzLmNvZztcbiAgICBjb25zdCBpdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgcmVxLCB2YWx1ZSk7XG4gICAgaWYgKGl0ZW0ucmVOYW1lID09IG51bGwpIHtcbiAgICAgIGl0ZW0ucmVOYW1lID0gZGVlcENvcHkocmVxLnJlTmFtZSk7XG4gICAgfVxuICAgIHRoaXMuX3JlcSA9IGl0ZW07XG4gIH1cbiAgcHJpdmF0ZSBfcmVxOiBTVFJlcTtcbiAgLyoqIMOowr/ClMOlwpvCnsOkwr3Ck8OpwoXCjcOnwr3CriAqL1xuICBASW5wdXQoKVxuICBnZXQgcmVzKCkge1xuICAgIHJldHVybiB0aGlzLl9yZXM7XG4gIH1cbiAgc2V0IHJlcyh2YWx1ZTogU1RSZXMpIHtcbiAgICBjb25zdCB7IHJlcyB9ID0gdGhpcy5jb2c7XG4gICAgY29uc3QgaXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIHJlcywgdmFsdWUpO1xuICAgIGl0ZW0ucmVOYW1lID0gT2JqZWN0LmFzc2lnbih7fSwgcmVzLnJlTmFtZSwgaXRlbS5yZU5hbWUpO1xuICAgIGlmICghQXJyYXkuaXNBcnJheShpdGVtLnJlTmFtZS5saXN0KSlcbiAgICAgIGl0ZW0ucmVOYW1lLmxpc3QgPSBpdGVtLnJlTmFtZS5saXN0LnNwbGl0KCcuJyk7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGl0ZW0ucmVOYW1lLnRvdGFsKSlcbiAgICAgIGl0ZW0ucmVOYW1lLnRvdGFsID0gaXRlbS5yZU5hbWUudG90YWwuc3BsaXQoJy4nKTtcbiAgICB0aGlzLl9yZXMgPSBpdGVtO1xuICB9XG4gIHByaXZhdGUgX3JlczogU1RSZXM7XG4gIC8qKiDDpcKIwpfDpsKPwo/DqMK/wrAgICovXG4gIEBJbnB1dCgpXG4gIGNvbHVtbnM6IFNUQ29sdW1uW10gPSBbXTtcbiAgLyoqIMOmwq/Cj8OpwqHCtcOmwpXCsMOpwofCj8OvwrzCjMOlwr3Ck8Oowq7CvsOnwr3CrsOkwrjCuiBgMGAgw6jCocKow6fCpMK6w6TCuMKNw6XCiMKGw6nCocK1w6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYDEwYCAqL1xuICBASW5wdXQoKVxuICBASW5wdXROdW1iZXIoKVxuICBwcyA9IDEwO1xuICAvKiogw6XCvcKTw6XCicKNw6nCocK1w6fCoMKBICovXG4gIEBJbnB1dCgpXG4gIEBJbnB1dE51bWJlcigpXG4gIHBpID0gMTtcbiAgLyoqIMOmwpXCsMOmwo3CrsOmwoDCu8OpwofCjyAqL1xuICBASW5wdXQoKVxuICBASW5wdXROdW1iZXIoKVxuICB0b3RhbCA9IDA7XG4gIC8qKiDDpcKIwobDqcKhwrXDpcKZwqjDqcKFwo3Dp8K9wq4gKi9cbiAgQElucHV0KClcbiAgZ2V0IHBhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhZ2U7XG4gIH1cbiAgc2V0IHBhZ2UodmFsdWU6IFNUUGFnZSkge1xuICAgIHRoaXMuY2xvbmVQYWdlID0gdmFsdWU7XG4gICAgY29uc3QgeyBwYWdlIH0gPSB0aGlzLmNvZztcbiAgICBjb25zdCBpdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgZGVlcENvcHkocGFnZSksIHZhbHVlKTtcbiAgICBjb25zdCB7IHRvdGFsIH0gPSBpdGVtO1xuICAgIGlmICh0eXBlb2YgdG90YWwgPT09ICdzdHJpbmcnICYmIHRvdGFsLmxlbmd0aCkge1xuICAgICAgdGhpcy50b3RhbFRwbCA9IHRvdGFsO1xuICAgIH0gZWxzZSBpZiAodG9Cb29sZWFuKHRvdGFsKSkge1xuICAgICAgdGhpcy50b3RhbFRwbCA9IHRoaXMubG9jYWxlLnRvdGFsO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRvdGFsVHBsID0gJyc7XG4gICAgfVxuICAgIHRoaXMuX3BhZ2UgPSBpdGVtO1xuICB9XG4gIHByaXZhdGUgX3BhZ2U6IFNUUGFnZTtcbiAgLyoqIMOmwpjCr8OlwpDCpsOmwpjCvsOnwqTCukxvYWRpbmcgKi9cbiAgQElucHV0KClcbiAgQElucHV0Qm9vbGVhbigpXG4gIGxvYWRpbmcgPSBmYWxzZTtcbiAgLyoqIMOlwrvCtsOowr/Cn8OmwpjCvsOnwqTCusOlworCoMOowr3CvcOmwpXCiMOmwp7CnMOnwprChMOmwpfCtsOpwpfCtMOvwrzCiMOpwpjCssOmwq3CosOpwpfCqsOnwoPCgcOvwrzCiSAqL1xuICBASW5wdXQoKVxuICBASW5wdXROdW1iZXIoKVxuICBsb2FkaW5nRGVsYXkgPSAwO1xuICAvKiogw6bCmMKvw6XCkMKmw6bCmMK+w6fCpMK6w6jCvsK5w6bCocKGICovXG4gIEBJbnB1dCgpXG4gIEBJbnB1dEJvb2xlYW4oKVxuICBib3JkZXJlZCA9IGZhbHNlO1xuICAvKiogdGFibGXDpcKkwqfDpcKwwo8gKi9cbiAgQElucHV0KClcbiAgc2l6ZTogJ3NtYWxsJyB8ICdtaWRkbGUnIHwgJ2RlZmF1bHQnO1xuICAvKiogw6fCusK1w6XCkMKRw6bClMKvw6bCjMKBw6bCu8Kaw6XCisKow6/CvMKMw6TCucKfw6XCj8Kvw6fClMKow6TCusKOw6bCjMKHw6XCrsKaw6bCu8Kaw6XCisKow6XCjMK6w6XCn8Kfw6fCmsKEw6nCq8KYw6XCusKmw6/CvMKaYHsgeTogJzMwMHB4JywgeDogJzMwMHB4JyB9YCAqL1xuICBASW5wdXQoKVxuICBzY3JvbGw6IHsgeT86IHN0cmluZzsgeD86IHN0cmluZyB9O1xuICAvKipcbiAgICogw6XCjcKVw6bCjsKSw6XCusKPw6jCp8KEw6XCiMKZXG4gICAqIC0gw6jCi8Klw6TCuMKNw6bCjMKHw6XCrsKaw6/CvMKMw6XCiMKZw6jCv8KUw6XCm8Kew6/CvMKaYGNvbHVtbk5hbWU9YXNjZW5kfGRlc2NlbmRgXG4gICAqIC0gw6jCi8Klw6bCjMKHw6XCrsKaw6/CvMKMw6XCiMKZw6jCv8KUw6XCm8Kew6/CvMKaYHNvcnQ9Y29sdW1uTmFtZS4oYXNjZW5kfGRlc2NlbmQpYFxuICAgKi9cbiAgQElucHV0KClcbiAgc2luZ2xlU29ydDogU1RTaW5nbGVTb3J0ID0gbnVsbDtcbiAgcHJpdmF0ZSBfbXVsdGlTb3J0OiBTVE11bHRpU29ydDtcbiAgLyoqIMOmwpjCr8OlwpDCpsOlwqTCmsOmwo7CksOlwrrCj8OvwrzCjMOlwr3CkyBgc29ydGAgw6XCpMKaw6TCuMKqw6fCm8K4w6XCkMKMw6XCgMK8w6bCl8K2w6jCh8Kqw6XCisKow6XCkMKIw6XCucK2w6/CvMKMw6XCu8K6w6jCrsKuw6XCkMKOw6fCq8Kvw6bClMKvw6bCjMKBw6bCl8K2w6TCvcK/w6fClMKoICovXG4gIEBJbnB1dCgpXG4gIGdldCBtdWx0aVNvcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX211bHRpU29ydDtcbiAgfVxuICBzZXQgbXVsdGlTb3J0KHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicgJiYgIXRvQm9vbGVhbih2YWx1ZSkpIHtcbiAgICAgIHRoaXMuX211bHRpU29ydCA9IG51bGw7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX211bHRpU29ydCA9IE9iamVjdC5hc3NpZ24oXG4gICAgICA8U1RNdWx0aVNvcnQ+e1xuICAgICAgICBrZXk6ICdzb3J0JyxcbiAgICAgICAgc2VwYXJhdG9yOiAnLScsXG4gICAgICAgIG5hbWVTZXBhcmF0b3I6ICcuJyxcbiAgICAgIH0sXG4gICAgICB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnID8gdmFsdWUgOiB7fSxcbiAgICApO1xuICB9XG4gIEBJbnB1dCgpXG4gIHJvd0NsYXNzTmFtZTogU1RSb3dDbGFzc05hbWU7XG4gIC8qKiBgaGVhZGVyYCDDpsKgwofDqcKiwpggKi9cbiAgQElucHV0KClcbiAgaGVhZGVyOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgLyoqIGBmb290ZXJgIMOlwrrClcOpwoPCqCAqL1xuICBASW5wdXQoKVxuICBmb290ZXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICAvKiogw6nCosKdw6XCpMKWIGBib2R5YCDDpcKGwoXDpcKuwrkgKi9cbiAgQElucHV0KClcbiAgYm9keTogVGVtcGxhdGVSZWY8dm9pZD47XG4gIC8qKiBgZXhwYW5kYCDDpcKPwq/DpcKxwpXDpcK8woDDr8K8wozDpcK9wpPDpsKVwrDDpsKNwq7DpsK6wpDDpMK4wq3DpcKMwoXDpsKLwqwgYGV4cGFuZGAgw6jCocKow6fCpMK6w6XCscKVw6XCvMKAw6fCisK2w6bCgMKBICovXG4gIEBJbnB1dCgpXG4gIGV4cGFuZDogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IGFueTsgY29sdW1uOiBTVENvbHVtbiB9PjtcbiAgQElucHV0KClcbiAgbm9SZXN1bHQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKVxuICB3aWR0aENvbmZpZzogc3RyaW5nW107XG4gIC8qKiDDqMKvwrfDpsKxwoLDpcK8woLDpcK4wrjDpsKXwrbDpcKbwp7DqMKwwoMgKi9cbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IGVycm9yID0gbmV3IEV2ZW50RW1pdHRlcjxTVEVycm9yPigpO1xuICAvKipcbiAgICogw6XCj8KYw6XCjMKWw6bCl8K2w6XCm8Kew6jCsMKDw6/CvMKMw6XCjMKFw6bCi8Ksw6/CvMKaYHBpYMOjwoDCgWBwc2DDo8KAwoFgY2hlY2tib3hgw6PCgMKBYHJhZGlvYMOjwoDCgWBzb3J0YMOjwoDCgWBmaWx0ZXJgw6PCgMKBYGNsaWNrYMOjwoDCgWBkYmxDbGlja2Agw6XCj8KYw6XCisKoXG4gICAqL1xuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxTVENoYW5nZT4oKTtcbiAgLyoqIMOowqHCjMOlwo3ClcOlwofCu8OlwqTCmsOlwrDCkcOmwpfCtsOpwpXCv8OkwrnCi8OnwrHCu8OkwrjCusOlwo/CjMOlwofCu8OvwrzCiMOlwo3ClcOkwr3CjcOvwrzCmsOmwq/Cq8OnwqfCksOvwrzCicOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmAyMDBgICovXG4gIEBJbnB1dCgpXG4gIEBJbnB1dE51bWJlcigpXG4gIHJvd0NsaWNrVGltZSA9IDIwMDtcblxuICBASW5wdXQoKVxuICBASW5wdXRCb29sZWFuKClcbiAgcmVzcG9uc2l2ZUhpZGVIZWFkZXJGb290ZXI6IGJvb2xlYW47XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgY29nOiBTVENvbmZpZyxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgZXhwb3J0U3J2OiBTVEV4cG9ydCxcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoQUxBSU5fSTE4Tl9UT0tFTilcbiAgICBpMThuU3J2OiBBbGFpbkkxOE5TZXJ2aWNlLFxuICAgIHByaXZhdGUgbW9kYWxIZWxwZXI6IE1vZGFsSGVscGVyLFxuICAgIHByaXZhdGUgZHJhd2VySGVscGVyOiBEcmF3ZXJIZWxwZXIsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IGFueSxcbiAgICBwcml2YXRlIGNvbHVtblNvdXJjZTogU1RDb2x1bW5Tb3VyY2UsXG4gICAgcHJpdmF0ZSBkYXRhU291cmNlOiBTVERhdGFTb3VyY2UsXG4gICAgcHJpdmF0ZSBkZWxvbkkxOG46IERlbG9uTG9jYWxlU2VydmljZSxcbiAgKSB7XG4gICAgdGhpcy5kZWxvbkkxOG4kID0gdGhpcy5kZWxvbkkxOG4uY2hhbmdlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmxvY2FsZSA9IHRoaXMuZGVsb25JMThuLmdldERhdGEoJ3N0Jyk7XG4gICAgICBpZiAodGhpcy5fY29sdW1ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMucGFnZSA9IHRoaXMuY2xvbmVQYWdlO1xuICAgICAgICB0aGlzLmNkKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkZWVwQ29weShjb2cpKTtcbiAgICBpZiAoaTE4blNydikge1xuICAgICAgdGhpcy5pMThuJCA9IGkxOG5TcnYuY2hhbmdlXG4gICAgICAgIC5waXBlKGZpbHRlcigoKSA9PiB0aGlzLl9jb2x1bW5zLmxlbmd0aCA+IDApKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMudXBkYXRlQ29sdW1ucygpKTtcbiAgICB9XG4gIH1cblxuICBjZCgpIHtcbiAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHJlbmRlclRvdGFsKHRvdGFsOiBzdHJpbmcsIHJhbmdlOiBzdHJpbmdbXSkge1xuICAgIHJldHVybiB0aGlzLnRvdGFsVHBsXG4gICAgICA/IHRoaXMudG90YWxUcGxcbiAgICAgICAgICAucmVwbGFjZSgne3t0b3RhbH19JywgdG90YWwpXG4gICAgICAgICAgLnJlcGxhY2UoJ3t7cmFuZ2VbMF19fScsIHJhbmdlWzBdKVxuICAgICAgICAgIC5yZXBsYWNlKCd7e3JhbmdlWzFdfX0nLCByYW5nZVsxXSlcbiAgICAgIDogJyc7XG4gIH1cblxuICBwcml2YXRlIGNoYW5nZUVtaXQodHlwZTogU1RDaGFuZ2VUeXBlLCBkYXRhPzogYW55KSB7XG4gICAgY29uc3QgcmVzOiBTVENoYW5nZSA9IHtcbiAgICAgIHR5cGUsXG4gICAgICBwaTogdGhpcy5waSxcbiAgICAgIHBzOiB0aGlzLnBzLFxuICAgICAgdG90YWw6IHRoaXMudG90YWwsXG4gICAgfTtcbiAgICBpZiAoZGF0YSAhPSBudWxsKSB7XG4gICAgICByZXNbdHlwZV0gPSBkYXRhO1xuICAgIH1cbiAgICB0aGlzLmNoYW5nZS5lbWl0KHJlcyk7XG4gIH1cblxuICAvLyNyZWdpb24gZGF0YVxuXG4gIHByaXZhdGUgX2xvYWQoKSB7XG4gICAgY29uc3QgeyBwaSwgcHMsIGRhdGEsIHJlcSwgcmVzLCBwYWdlLCB0b3RhbCwgc2luZ2xlU29ydCwgbXVsdGlTb3J0LCByb3dDbGFzc05hbWUgfSA9IHRoaXM7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICByZXR1cm4gdGhpcy5kYXRhU291cmNlXG4gICAgICAucHJvY2Vzcyh7XG4gICAgICAgIHBpLFxuICAgICAgICBwcyxcbiAgICAgICAgdG90YWwsXG4gICAgICAgIGRhdGEsXG4gICAgICAgIHJlcSxcbiAgICAgICAgcmVzLFxuICAgICAgICBwYWdlLFxuICAgICAgICBjb2x1bW5zOiB0aGlzLl9jb2x1bW5zLFxuICAgICAgICBzaW5nbGVTb3J0LFxuICAgICAgICBtdWx0aVNvcnQsXG4gICAgICAgIHJvd0NsYXNzTmFtZVxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdC5waSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aGlzLnBpID0gcmVzdWx0LnBpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0LnRvdGFsICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRoaXMudG90YWwgPSByZXN1bHQudG90YWw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQucGFnZVNob3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhpcy5faXNQYWdpbmF0aW9uID0gcmVzdWx0LnBhZ2VTaG93O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2RhdGEgPSByZXN1bHQubGlzdDtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5fcmVmQ2hlY2soKSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmVycm9yLmVtaXQoeyB0eXBlOiAncmVxJywgZXJyb3IgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKiDDpsK4woXDp8KpwrrDpsKJwoDDpsKcwonDpsKVwrDDpsKNwq4gKi9cbiAgY2xlYXIoY2xlYW5TdGF0dXMgPSB0cnVlKSB7XG4gICAgaWYgKGNsZWFuU3RhdHVzKSB7XG4gICAgICB0aGlzLmNsZWFyU3RhdHVzKCk7XG4gICAgfVxuICAgIHRoaXMuX2RhdGEubGVuZ3RoID0gMDtcbiAgICB0aGlzLmNkKCk7XG4gIH1cblxuICAvKiogw6bCuMKFw6fCqcK6w6bCicKAw6bCnMKJw6fCisK2w6bCgMKBICovXG4gIGNsZWFyU3RhdHVzKCkge1xuICAgIHJldHVybiB0aGlzLmNsZWFyQ2hlY2soKVxuICAgICAgLmNsZWFyUmFkaW8oKVxuICAgICAgLmNsZWFyRmlsdGVyKClcbiAgICAgIC5jbGVhclNvcnQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDDpsKgwrnDpsKNwq7DqcKhwrXDp8KgwoHDqcKHwo3DpsKWwrDDpcKKwqDDqMK9wr3DpsKVwrDDpsKNwq5cbiAgICpcbiAgICogQHBhcmFtIHBpIMOmwozCh8Olwq7CmsOlwr3Ck8OlwonCjcOpwqHCtcOnwqDCgcOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmAxYFxuICAgKiBAcGFyYW0gZXh0cmFQYXJhbXMgw6nCh8KNw6bClsKww6bCjMKHw6XCrsKaIGBleHRyYVBhcmFtc2Agw6XCgMK8XG4gICAqIEBwYXJhbSBvcHRpb25zIMOpwoDCicOpwqHCuVxuICAgKi9cbiAgbG9hZChwaSA9IDEsIGV4dHJhUGFyYW1zPzogYW55LCBvcHRpb25zPzogU1RMb2FkT3B0aW9ucykge1xuICAgIGlmIChwaSAhPT0gLTEpIHRoaXMucGkgPSBwaTtcbiAgICBpZiAodHlwZW9mIGV4dHJhUGFyYW1zICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5fcmVxLnBhcmFtcyA9XG4gICAgICAgIG9wdGlvbnMgJiYgb3B0aW9ucy5tZXJnZVxuICAgICAgICAgID8gT2JqZWN0LmFzc2lnbih0aGlzLl9yZXEucGFyYW1zLCBleHRyYVBhcmFtcylcbiAgICAgICAgICA6IGV4dHJhUGFyYW1zO1xuICAgIH1cbiAgICB0aGlzLl9jaGFuZ2UoJ3BpJyk7XG4gIH1cblxuICAvKipcbiAgICogw6nCh8KNw6bClsKww6XCiMK3w6bClsKww6XCvcKTw6XCicKNw6nCocK1XG4gICAqIEBwYXJhbSBleHRyYVBhcmFtcyDDqcKHwo3DpsKWwrDDpsKMwofDpcKuwpogYGV4dHJhUGFyYW1zYCDDpcKAwrxcbiAgICovXG4gIHJlbG9hZChleHRyYVBhcmFtcz86IGFueSwgb3B0aW9ucz86IFNUTG9hZE9wdGlvbnMpIHtcbiAgICB0aGlzLmxvYWQoLTEsIGV4dHJhUGFyYW1zLCBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDDqcKHwo3Dp8K9wq7DpMK4wpTDqcKHwo3DpsKWwrDDqMKuwr7Dp8K9wq4gYHBpYCDDpMK4wrogYDFgw6/CvMKMw6XCjMKFw6XCkMKrw6TCu8Klw6TCuMKLw6XCgMK8w6/CvMKaXG4gICAqIC0gYGNoZWNrYCDDpsKVwrDDpsKNwq5cbiAgICogLSBgcmFkaW9gIMOmwpXCsMOmwo3CrlxuICAgKiAtIGBzb3J0YCDDpsKVwrDDpsKNwq5cbiAgICogLSBgZmlsZXRlcmAgw6bClcKww6bCjcKuXG4gICAqXG4gICAqIEBwYXJhbSBleHRyYVBhcmFtcyDDqcKHwo3DpsKWwrDDpsKMwofDpcKuwpogYGV4dHJhUGFyYW1zYCDDpcKAwrxcbiAgICovXG4gIHJlc2V0KGV4dHJhUGFyYW1zPzogYW55LCBvcHRpb25zPzogU1RMb2FkT3B0aW9ucykge1xuICAgIHRoaXMuY2xlYXJTdGF0dXMoKS5sb2FkKDEsIGV4dHJhUGFyYW1zLCBvcHRpb25zKTtcbiAgfVxuXG4gIHByaXZhdGUgX3RvVG9wKCkge1xuICAgIGlmICghdGhpcy5wYWdlLnRvVG9wKSByZXR1cm47XG4gICAgY29uc3QgZWwgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgaWYgKHRoaXMuc2Nyb2xsKSB7XG4gICAgICBlbC5xdWVyeVNlbGVjdG9yKCcuYW50LXRhYmxlLWJvZHknKS5zY3JvbGxUbygwLCAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAvLyBmaXggaGVhZGVyIGhlaWdodFxuICAgIHRoaXMuZG9jLmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgLT0gdGhpcy5wYWdlLnRvVG9wT2Zmc2V0O1xuICB9XG5cbiAgX2NoYW5nZSh0eXBlOiAncGknIHwgJ3BzJykge1xuICAgIHRoaXMuX2xvYWQoKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuX3RvVG9wKCk7XG4gICAgfSk7XG4gICAgdGhpcy5jaGFuZ2VFbWl0KHR5cGUpO1xuICB9XG5cbiAgX2NsaWNrKGU6IEV2ZW50LCBpdGVtOiBTVERhdGEsIGNvbDogU1RDb2x1bW4pIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCByZXMgPSBjb2wuY2xpY2soaXRlbSwgdGhpcyk7XG4gICAgaWYgKHR5cGVvZiByZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHJlcyk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgcm93Q2xpY2tDb3VudCA9IDA7XG4gIF9yb3dDbGljayhlOiBFdmVudCwgaXRlbTogU1REYXRhLCBpbmRleDogbnVtYmVyKSB7XG4gICAgaWYgKChlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkubm9kZU5hbWUgPT09ICdJTlBVVCcpIHJldHVybjtcbiAgICArK3RoaXMucm93Q2xpY2tDb3VudDtcbiAgICBpZiAodGhpcy5yb3dDbGlja0NvdW50ICE9PSAxKSByZXR1cm47XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBkYXRhID0geyBlLCBpdGVtLCBpbmRleCB9O1xuICAgICAgaWYgKHRoaXMucm93Q2xpY2tDb3VudCA9PT0gMSkge1xuICAgICAgICB0aGlzLmNoYW5nZUVtaXQoJ2NsaWNrJywgZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNoYW5nZUVtaXQoJ2RibENsaWNrJywgZGF0YSk7XG4gICAgICB9XG4gICAgICB0aGlzLnJvd0NsaWNrQ291bnQgPSAwO1xuICAgIH0sIHRoaXMucm93Q2xpY2tUaW1lKTtcbiAgfVxuXG4gIC8qKiDDp8KnwrvDqcKZwqTDpsKfwpDDqMKhwozDpsKVwrDDpsKNwq4gKi9cbiAgcmVtb3ZlUm93KGRhdGE6IFNURGF0YSB8IFNURGF0YVtdKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICBkYXRhID0gWyBkYXRhIF07XG4gICAgfVxuXG4gICAgKGRhdGEgYXMgU1REYXRhW10pLm1hcChpdGVtID0+IHRoaXMuX2RhdGEuaW5kZXhPZihpdGVtKSlcbiAgICAgICAgLmZpbHRlcihwb3MgPT4gcG9zICE9PSAtMSlcbiAgICAgICAgLmZvckVhY2gocG9zID0+IHRoaXMuX2RhdGEuc3BsaWNlKHBvcywgMSkpO1xuXG4gICAgdGhpcy5jZCgpO1xuICB9XG5cbiAgLy8jZW5kcmVnaW9uXG5cbiAgLy8jcmVnaW9uIHNvcnRcblxuICBzb3J0KGNvbDogU1RDb2x1bW4sIGlkeDogbnVtYmVyLCB2YWx1ZTogYW55KSB7XG4gICAgaWYgKHRoaXMubXVsdGlTb3J0KSB7XG4gICAgICBjb2wuX3NvcnQuZGVmYXVsdCA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9jb2x1bW5zLmZvckVhY2goXG4gICAgICAgIChpdGVtLCBpbmRleCkgPT4gKGl0ZW0uX3NvcnQuZGVmYXVsdCA9IGluZGV4ID09PSBpZHggPyB2YWx1ZSA6IG51bGwpLFxuICAgICAgKTtcbiAgICB9XG4gICAgdGhpcy5fbG9hZCgpO1xuICAgIGNvbnN0IHJlcyA9IHtcbiAgICAgIHZhbHVlLFxuICAgICAgbWFwOiB0aGlzLmRhdGFTb3VyY2UuZ2V0UmVxU29ydE1hcCh0aGlzLnNpbmdsZVNvcnQsIHRoaXMubXVsdGlTb3J0LCB0aGlzLl9jb2x1bW5zKSxcbiAgICAgIGNvbHVtbjogY29sLFxuICAgIH07XG4gICAgdGhpcy5jaGFuZ2VFbWl0KCdzb3J0JywgcmVzKTtcbiAgfVxuXG4gIGNsZWFyU29ydCgpIHtcbiAgICB0aGlzLl9jb2x1bW5zLmZvckVhY2goaXRlbSA9PiAoaXRlbS5fc29ydC5kZWZhdWx0ID0gbnVsbCkpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8jZW5kcmVnaW9uXG5cbiAgLy8jcmVnaW9uIGZpbHRlclxuXG4gIHByaXZhdGUgaGFuZGxlRmlsdGVyKGNvbDogU1RDb2x1bW4pIHtcbiAgICBjb2wuZmlsdGVyLmRlZmF1bHQgPSBjb2wuZmlsdGVyLm1lbnVzLmZpbmRJbmRleCh3ID0+IHcuY2hlY2tlZCkgIT09IC0xO1xuICAgIHRoaXMuX2xvYWQoKTtcbiAgICB0aGlzLmNoYW5nZUVtaXQoJ2ZpbHRlcicsIGNvbCk7XG4gIH1cblxuICBfZmlsdGVyQ29uZmlybShjb2w6IFNUQ29sdW1uKSB7XG4gICAgdGhpcy5oYW5kbGVGaWx0ZXIoY29sKTtcbiAgfVxuXG4gIF9maWx0ZXJDbGVhcihjb2w6IFNUQ29sdW1uKSB7XG4gICAgY29sLmZpbHRlci5tZW51cy5mb3JFYWNoKGkgPT4gKGkuY2hlY2tlZCA9IGZhbHNlKSk7XG4gICAgdGhpcy5oYW5kbGVGaWx0ZXIoY29sKTtcbiAgfVxuXG4gIF9maWx0ZXJSYWRpbyhjb2w6IFNUQ29sdW1uLCBpdGVtOiBTVENvbHVtbkZpbHRlck1lbnUsIGNoZWNrZWQ6IGJvb2xlYW4pIHtcbiAgICBjb2wuZmlsdGVyLm1lbnVzLmZvckVhY2goaSA9PiAoaS5jaGVja2VkID0gZmFsc2UpKTtcbiAgICBpdGVtLmNoZWNrZWQgPSBjaGVja2VkO1xuICB9XG5cbiAgY2xlYXJGaWx0ZXIoKSB7XG4gICAgdGhpcy5fY29sdW1uc1xuICAgICAgLmZpbHRlcih3ID0+IHcuZmlsdGVyICYmIHcuZmlsdGVyLmRlZmF1bHQgPT09IHRydWUpXG4gICAgICAuZm9yRWFjaChjb2wgPT4ge1xuICAgICAgICBjb2wuZmlsdGVyLmRlZmF1bHQgPSBmYWxzZTtcbiAgICAgICAgY29sLmZpbHRlci5tZW51cy5mb3JFYWNoKGYgPT4gKGYuY2hlY2tlZCA9IGZhbHNlKSk7XG4gICAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vI2VuZHJlZ2lvblxuXG4gIC8vI3JlZ2lvbiBjaGVja2JveFxuXG4gIC8qKiDDpsK4woXDqcKZwqTDpsKJwoDDpsKcwokgYGNoZWNrYm94YCAqL1xuICBjbGVhckNoZWNrKCk6IHRoaXMge1xuICAgIHJldHVybiB0aGlzLl9jaGVja0FsbChmYWxzZSk7XG4gIH1cblxuICBwcml2YXRlIF9yZWZDaGVjaygpOiB0aGlzIHtcbiAgICBjb25zdCB2YWxpZERhdGEgPSB0aGlzLl9kYXRhLmZpbHRlcih3ID0+ICF3LmRpc2FibGVkKTtcbiAgICBjb25zdCBjaGVja2VkTGlzdCA9IHZhbGlkRGF0YS5maWx0ZXIodyA9PiB3LmNoZWNrZWQgPT09IHRydWUpO1xuICAgIHRoaXMuX2FsbENoZWNrZWQgPVxuICAgICAgY2hlY2tlZExpc3QubGVuZ3RoID4gMCAmJiBjaGVja2VkTGlzdC5sZW5ndGggPT09IHZhbGlkRGF0YS5sZW5ndGg7XG4gICAgY29uc3QgYWxsVW5DaGVja2VkID0gdmFsaWREYXRhLmV2ZXJ5KHZhbHVlID0+ICF2YWx1ZS5jaGVja2VkKTtcbiAgICB0aGlzLl9pbmRldGVybWluYXRlID0gIXRoaXMuX2FsbENoZWNrZWQgJiYgIWFsbFVuQ2hlY2tlZDtcbiAgICB0aGlzLmNkKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBfY2hlY2tBbGwoY2hlY2tlZD86IGJvb2xlYW4pOiB0aGlzIHtcbiAgICBjaGVja2VkID0gdHlwZW9mIGNoZWNrZWQgPT09ICd1bmRlZmluZWQnID8gdGhpcy5fYWxsQ2hlY2tlZCA6IGNoZWNrZWQ7XG4gICAgdGhpcy5fZGF0YS5maWx0ZXIodyA9PiAhdy5kaXNhYmxlZCkuZm9yRWFjaChpID0+IChpLmNoZWNrZWQgPSBjaGVja2VkKSk7XG4gICAgcmV0dXJuIHRoaXMuX3JlZkNoZWNrKCkuX2NoZWNrTm90aWZ5KCk7XG4gIH1cblxuICBfY2hlY2tTZWxlY3Rpb24oaTogU1REYXRhLCB2YWx1ZTogYm9vbGVhbikge1xuICAgIGkuY2hlY2tlZCA9IHZhbHVlO1xuICAgIHJldHVybiB0aGlzLl9yZWZDaGVjaygpLl9jaGVja05vdGlmeSgpO1xuICB9XG5cbiAgX3Jvd1NlbGVjdGlvbihyb3c6IFNUQ29sdW1uU2VsZWN0aW9uKTogdGhpcyB7XG4gICAgcm93LnNlbGVjdCh0aGlzLl9kYXRhKTtcbiAgICByZXR1cm4gdGhpcy5fcmVmQ2hlY2soKS5fY2hlY2tOb3RpZnkoKTtcbiAgfVxuXG4gIF9jaGVja05vdGlmeSgpOiB0aGlzIHtcbiAgICBjb25zdCByZXMgPSB0aGlzLl9kYXRhLmZpbHRlcih3ID0+ICF3LmRpc2FibGVkICYmIHcuY2hlY2tlZCA9PT0gdHJ1ZSk7XG4gICAgdGhpcy5jaGFuZ2VFbWl0KCdjaGVja2JveCcsIHJlcyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyNlbmRyZWdpb25cblxuICAvLyNyZWdpb24gcmFkaW9cblxuICAvKiogw6bCuMKFw6nCmcKkw6bCicKAw6bCnMKJIGByYWRpb2AgKi9cbiAgY2xlYXJSYWRpbygpOiB0aGlzIHtcbiAgICB0aGlzLl9kYXRhLmZpbHRlcih3ID0+IHcuY2hlY2tlZCkuZm9yRWFjaChpdGVtID0+IChpdGVtLmNoZWNrZWQgPSBmYWxzZSkpO1xuICAgIHRoaXMuY2hhbmdlRW1pdCgncmFkaW8nLCBudWxsKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIF9yZWZSYWRpbyhjaGVja2VkOiBib29sZWFuLCBpdGVtOiBTVERhdGEpOiB0aGlzIHtcbiAgICAvLyBpZiAoaXRlbS5kaXNhYmxlZCA9PT0gdHJ1ZSkgcmV0dXJuO1xuICAgIHRoaXMuX2RhdGEuZmlsdGVyKHcgPT4gIXcuZGlzYWJsZWQpLmZvckVhY2goaSA9PiAoaS5jaGVja2VkID0gZmFsc2UpKTtcbiAgICBpdGVtLmNoZWNrZWQgPSBjaGVja2VkO1xuICAgIHRoaXMuY2hhbmdlRW1pdCgncmFkaW8nLCBpdGVtKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vI2VuZHJlZ2lvblxuXG4gIC8vI3JlZ2lvbiBidXR0b25zXG5cbiAgX2J0bkNsaWNrKGU6IEV2ZW50LCByZWNvcmQ6IFNURGF0YSwgYnRuOiBTVENvbHVtbkJ1dHRvbikge1xuICAgIGlmIChlKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICBpZiAoYnRuLnR5cGUgPT09ICdtb2RhbCcgfHwgYnRuLnR5cGUgPT09ICdzdGF0aWMnKSB7XG4gICAgICBjb25zdCBvYmogPSB7fTtcbiAgICAgIGNvbnN0IHsgbW9kYWwgfSA9IGJ0bjtcbiAgICAgIG9ialttb2RhbC5wYXJhbXNOYW1lXSA9IHJlY29yZDtcbiAgICAgIGNvbnN0IG9wdGlvbnM6IE1vZGFsSGVscGVyT3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIG1vZGFsKTtcbiAgICAgICh0aGlzLm1vZGFsSGVscGVyW1xuICAgICAgICBidG4udHlwZSA9PT0gJ21vZGFsJyA/ICdjcmVhdGUnIDogJ2NyZWF0ZVN0YXRpYydcbiAgICAgIF0gYXMgYW55KShcbiAgICAgICAgbW9kYWwuY29tcG9uZW50LFxuICAgICAgICBPYmplY3QuYXNzaWduKG9iaiwgbW9kYWwucGFyYW1zICYmIG1vZGFsLnBhcmFtcyhyZWNvcmQpKSxcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgIClcbiAgICAgICAgLnBpcGUoZmlsdGVyKHcgPT4gdHlwZW9mIHcgIT09ICd1bmRlZmluZWQnKSlcbiAgICAgICAgLnN1YnNjcmliZShyZXMgPT4gdGhpcy5idG5DYWxsYmFjayhyZWNvcmQsIGJ0biwgcmVzKSk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChidG4udHlwZSA9PT0gJ2RyYXdlcicpIHtcbiAgICAgIGNvbnN0IG9iaiA9IHt9O1xuICAgICAgY29uc3QgeyBkcmF3ZXIgfSA9IGJ0bjtcbiAgICAgIG9ialtkcmF3ZXIucGFyYW1zTmFtZV0gPSByZWNvcmQ7XG4gICAgICB0aGlzLmRyYXdlckhlbHBlclxuICAgICAgICAuY3JlYXRlKFxuICAgICAgICAgIGRyYXdlci50aXRsZSxcbiAgICAgICAgICBkcmF3ZXIuY29tcG9uZW50LFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24ob2JqLCBkcmF3ZXIucGFyYW1zICYmIGRyYXdlci5wYXJhbXMocmVjb3JkKSksXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgZHJhd2VyKSxcbiAgICAgICAgKVxuICAgICAgICAucGlwZShmaWx0ZXIodyA9PiB0eXBlb2YgdyAhPT0gJ3VuZGVmaW5lZCcpKVxuICAgICAgICAuc3Vic2NyaWJlKHJlcyA9PiB0aGlzLmJ0bkNhbGxiYWNrKHJlY29yZCwgYnRuLCByZXMpKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKGJ0bi50eXBlID09PSAnbGluaycpIHtcbiAgICAgIGNvbnN0IGNsaWNrUmVzID0gdGhpcy5idG5DYWxsYmFjayhyZWNvcmQsIGJ0bik7XG4gICAgICBpZiAodHlwZW9mIGNsaWNrUmVzID09PSAnc3RyaW5nJykge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKGNsaWNrUmVzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5idG5DYWxsYmFjayhyZWNvcmQsIGJ0bik7XG4gIH1cblxuICBwcml2YXRlIGJ0bkNhbGxiYWNrKHJlY29yZDogU1REYXRhLCBidG46IFNUQ29sdW1uQnV0dG9uLCBtb2RhbD86IGFueSkge1xuICAgIGlmICghYnRuLmNsaWNrKSByZXR1cm47XG4gICAgaWYgKHR5cGVvZiBidG4uY2xpY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICBzd2l0Y2ggKGJ0bi5jbGljaykge1xuICAgICAgICBjYXNlICdsb2FkJzpcbiAgICAgICAgICB0aGlzLmxvYWQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncmVsb2FkJzpcbiAgICAgICAgICB0aGlzLnJlbG9hZCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYnRuLmNsaWNrKHJlY29yZCwgbW9kYWwsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIF9idG5UZXh0KHJlY29yZDogYW55LCBidG46IFNUQ29sdW1uQnV0dG9uKSB7XG4gICAgaWYgKGJ0bi5mb3JtYXQpIHJldHVybiBidG4uZm9ybWF0KHJlY29yZCwgYnRuKTtcbiAgICByZXR1cm4gYnRuLnRleHQgfHwgJyc7XG4gIH1cblxuICBfdmFsaWRCdG5zKGl0ZW06IFNURGF0YSwgY29sOiBTVENvbHVtbik6IFNUQ29sdW1uQnV0dG9uW10ge1xuICAgIHJldHVybiBjb2wuYnV0dG9ucy5maWx0ZXIoYnRuID0+IGJ0bi5paWYoaXRlbSwgYnRuLCBjb2wpKTtcbiAgfVxuXG4gIC8vI2VuZHJlZ2lvblxuXG4gIC8vI3JlZ2lvbiBleHBvcnRcblxuICAvKipcbiAgICogw6XCr8K8w6XCh8K6w6XCvcKTw6XCicKNw6nCocK1w6/CvMKMw6fCocKuw6TCv8Kdw6XCt8Kyw6fCu8KPw6bCs8Kow6XChsKMIGBYbHN4TW9kdWxlYFxuICAgKiBAcGFyYW0gbmV3RGF0YSDDqcKHwo3DpsKWwrDDpsKMwofDpcKuwprDpsKVwrDDpsKNwq7Dr8K8wozDpMK+wovDpcKmwoLDpcK4wozDpsKcwpvDpcKvwrzDpcKHwrrDpsKJwoDDpsKcwonDpsKVwrDDpsKNwq7DqcKdwp7DpcK4wrjDpsKcwonDp8KUwqhcbiAgICogQHBhcmFtIG9wdCDDqcKiwp3DpcKkwpbDpcKPwoLDpsKVwrBcbiAgICovXG4gIGV4cG9ydChuZXdEYXRhPzogYW55W10sIG9wdD86IFNURXhwb3J0T3B0aW9ucykge1xuICAgIChuZXdEYXRhID8gb2YobmV3RGF0YSkgOiBvZih0aGlzLl9kYXRhKSkuc3Vic2NyaWJlKChyZXM6IGFueVtdKSA9PlxuICAgICAgdGhpcy5leHBvcnRTcnYuZXhwb3J0KFxuICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHQsIDxTVEV4cG9ydE9wdGlvbnM+e1xuICAgICAgICAgIF9kOiByZXMsXG4gICAgICAgICAgX2M6IHRoaXMuX2NvbHVtbnMsXG4gICAgICAgIH0pLFxuICAgICAgKSxcbiAgICApO1xuICB9XG5cbiAgLy8jZW5kcmVnaW9uXG5cbiAgcHJpdmF0ZSB1cGRhdGVDb2x1bW5zKCkge1xuICAgIHRoaXMuX2NvbHVtbnMgPSB0aGlzLmNvbHVtblNvdXJjZS5wcm9jZXNzKHRoaXMuY29sdW1ucyk7XG4gIH1cblxuICBwcml2YXRlIHNldENsYXNzKCkge1xuICAgIHVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMucmVuZGVyZXIsIHtcbiAgICAgIFtgc3RgXTogdHJ1ZSxcbiAgICAgIFtgc3RfX3AtJHt0aGlzLnBhZ2UucGxhY2VtZW50fWBdOiB0aGlzLnBhZ2UucGxhY2VtZW50LFxuICAgICAgW2BhbnQtdGFibGUtcmVwX19oaWRlLWhlYWRlci1mb290ZXJgXTogdGhpcy5yZXNwb25zaXZlSGlkZUhlYWRlckZvb3RlcixcbiAgICB9KTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmNvbHVtblNvdXJjZS5yZXN0b3JlQWxsUmVuZGVyKHRoaXMuX2NvbHVtbnMpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoXG4gICAgY2hhbmdlczogeyBbUCBpbiBrZXlvZiB0aGlzXT86IFNpbXBsZUNoYW5nZSB9ICYgU2ltcGxlQ2hhbmdlcyxcbiAgKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMuY29sdW1ucykge1xuICAgICAgdGhpcy51cGRhdGVDb2x1bW5zKCk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLmRhdGEgJiYgY2hhbmdlcy5kYXRhLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgdGhpcy5fbG9hZCgpO1xuICAgIH1cbiAgICB0aGlzLnNldENsYXNzKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlbG9uSTE4biQudW5zdWJzY3JpYmUoKTtcbiAgICBpZiAodGhpcy5pMThuJCkgdGhpcy5pMThuJC51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmdab3Jyb0FudGRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkJztcblxuaW1wb3J0IHsgRGVsb25VdGlsTW9kdWxlIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgRGVsb25BQ0xNb2R1bGUgfSBmcm9tICdAZGVsb24vYWNsJztcblxuaW1wb3J0IHsgU1RDb21wb25lbnQgfSBmcm9tICcuL3RhYmxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTVFJvd0RpcmVjdGl2ZSB9IGZyb20gJy4vdGFibGUtcm93LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBTVENvbmZpZyB9IGZyb20gJy4vdGFibGUuY29uZmlnJztcblxuY29uc3QgQ09NUE9ORU5UUyA9IFtTVENvbXBvbmVudCwgU1RSb3dEaXJlY3RpdmVdO1xuXG5ATmdNb2R1bGUoe1xuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgRGVsb25VdGlsTW9kdWxlLFxuICAgIERlbG9uQUNMTW9kdWxlLFxuICAgIE5nWm9ycm9BbnRkTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRTXSxcbiAgZXhwb3J0czogWy4uLkNPTVBPTkVOVFNdLFxufSlcbmV4cG9ydCBjbGFzcyBTVE1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7IG5nTW9kdWxlOiBTVE1vZHVsZSwgcHJvdmlkZXJzOiBbU1RDb25maWddIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwiRGlyZWN0aXZlIiwiVGVtcGxhdGVSZWYiLCJIb3N0IiwiSW5wdXQiLCJhY2wiLCJ0c2xpYl8xLl9fdmFsdWVzIiwiZGVlcENvcHkiLCJBQ0xTZXJ2aWNlIiwiT3B0aW9uYWwiLCJJbmplY3QiLCJBTEFJTl9JMThOX1RPS0VOIiwibWFwIiwiZGVlcEdldCIsImNhdGNoRXJyb3IiLCJvZiIsIl9IdHRwQ2xpZW50IiwiQ05DdXJyZW5jeVBpcGUiLCJEYXRlUGlwZSIsIllOUGlwZSIsIkRlY2ltYWxQaXBlIiwiRG9tU2FuaXRpemVyIiwiWGxzeFNlcnZpY2UiLCJyb3V0ZXIiLCJFdmVudEVtaXR0ZXIiLCJmaWx0ZXIiLCJ0b0Jvb2xlYW4iLCJ1cGRhdGVIb3N0Q2xhc3MiLCJDb21wb25lbnQiLCJDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSIsIkNoYW5nZURldGVjdG9yUmVmIiwiUm91dGVyIiwiRWxlbWVudFJlZiIsIlJlbmRlcmVyMiIsIk1vZGFsSGVscGVyIiwiRHJhd2VySGVscGVyIiwiRE9DVU1FTlQiLCJEZWxvbkxvY2FsZVNlcnZpY2UiLCJPdXRwdXQiLCJJbnB1dE51bWJlciIsIklucHV0Qm9vbGVhbiIsIk5nTW9kdWxlIiwiTk9fRVJST1JTX1NDSEVNQSIsIkNvbW1vbk1vZHVsZSIsIkZvcm1zTW9kdWxlIiwiRGVsb25VdGlsTW9kdWxlIiwiRGVsb25BQ0xNb2R1bGUiLCJOZ1pvcnJvQW50ZE1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQUE7Ozs7Ozs7Ozs7Ozs7O0FBY0Esd0JBb0MyQixVQUFVLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJO1FBQ3BELElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxHQUFHLElBQUksS0FBSyxJQUFJLEdBQUcsSUFBSSxHQUFHLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUM3SCxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsSUFBSSxPQUFPLE9BQU8sQ0FBQyxRQUFRLEtBQUssVUFBVTtZQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDOztZQUMxSCxLQUFLLElBQUksQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFO2dCQUFFLElBQUksQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUM7b0JBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsSixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbEUsQ0FBQztBQUVELHdCQUkyQixXQUFXLEVBQUUsYUFBYTtRQUNqRCxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsSUFBSSxPQUFPLE9BQU8sQ0FBQyxRQUFRLEtBQUssVUFBVTtZQUFFLE9BQU8sT0FBTyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDbkksQ0FBQztBQUVELHNCQXlDeUIsQ0FBQztRQUN0QixJQUFJLENBQUMsR0FBRyxPQUFPLE1BQU0sS0FBSyxVQUFVLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQztZQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QixPQUFPO1lBQ0gsSUFBSSxFQUFFO2dCQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTTtvQkFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUM7Z0JBQ25DLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDO2FBQzNDO1NBQ0osQ0FBQztJQUNOLENBQUM7QUFFRCxvQkFBdUIsQ0FBQyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsT0FBTyxNQUFNLEtBQUssVUFBVSxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQyxJQUFJO1lBQ0EsT0FBTyxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSTtnQkFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM5RTtRQUNELE9BQU8sS0FBSyxFQUFFO1lBQUUsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDO1NBQUU7Z0JBQy9CO1lBQ0osSUFBSTtnQkFDQSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3BEO29CQUNPO2dCQUFFLElBQUksQ0FBQztvQkFBRSxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUM7YUFBRTtTQUNwQztRQUNELE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQztBQUVEO1FBQ0ksS0FBSyxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUU7WUFDOUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekMsT0FBTyxFQUFFLENBQUM7SUFDZCxDQUFDOzs7Ozs7QUMxSUQ7OzBCQVd3RCxFQUFFO3dCQUNKLEVBQUU7Ozs7Ozs7O1FBRXRELHlCQUFHOzs7Ozs7WUFBSCxVQUFJLElBQVksRUFBRSxJQUFZLEVBQUUsR0FBcUI7Z0JBQ25ELElBQUksQ0FBQyxJQUFJLEtBQUssT0FBTyxHQUFHLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUM7YUFDeEQ7Ozs7O1FBRUQsOEJBQVE7Ozs7WUFBUixVQUFTLElBQVk7Z0JBQ25CLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUMxQjs7Ozs7UUFFRCw0QkFBTTs7OztZQUFOLFVBQU8sSUFBWTtnQkFDakIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3hCOztvQkFmRkEsZUFBVTs7MEJBVFg7OztRQW1DRSx3QkFDVSxLQUNRLE1BQW1CO1lBRDNCLFFBQUcsR0FBSCxHQUFHO1lBQ0ssV0FBTSxHQUFOLE1BQU0sQ0FBYTtTQUNqQzs7OztRQUVKLGlDQUFROzs7WUFBUjtnQkFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQy9DOztvQkFmRkMsY0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRTs7Ozs7d0JBeEJqQ0MsZ0JBQVc7d0JBa0NlLFdBQVcsdUJBQWxDQyxTQUFJOzs7O3lCQVJOQyxVQUFLLFNBQUMsUUFBUTsyQkFHZEEsVUFBSzs7NkJBaENSOzs7Ozs7O0FDWUEsUUFBQTs7Ozs7d0JBZ0IwQyxTQUFTOzs7OzhDQUluQixLQUFLOzs7O3VCQUVyQjtnQkFDWixNQUFNLEVBQUUsS0FBSztnQkFDYixTQUFTLEVBQUUsS0FBSztnQkFDaEIsTUFBTSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFO2FBQy9COzs7O3VCQUVhO2dCQUNaLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFO2FBQzdDOzs7O3dCQUVlO2dCQUNkLEtBQUssRUFBRSxJQUFJO2dCQUNYLFdBQVcsRUFBRSxLQUFLO2dCQUNsQixTQUFTLEVBQUUsT0FBTztnQkFDbEIsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsUUFBUSxFQUFFLEtBQUs7Z0JBQ2YsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztnQkFDL0IsZUFBZSxFQUFFLEtBQUs7Z0JBQ3RCLEtBQUssRUFBRSxJQUFJO2dCQUNYLFVBQVUsRUFBRSxJQUFJO2dCQUNoQixLQUFLLEVBQUUsSUFBSTtnQkFDWCxXQUFXLEVBQUUsR0FBRzthQUNqQjs7Ozs7OzhCQVUyQixJQUFJOzs7OzZCQUlJLEtBQUs7Ozs7eUJBSUw7Z0JBQ2xDLFVBQVUsRUFBRSxRQUFRO2dCQUNwQixJQUFJLEVBQUUsSUFBSTtnQkFDVixLQUFLLEVBQUUsSUFBSTthQUNaOzs7OzBCQUlxQztnQkFDcEMsVUFBVSxFQUFFLFFBQVE7Z0JBQ3BCLElBQUksRUFBRSxJQUFJO2dCQUNWLE1BQU0sRUFBRSxJQUFJO2dCQUNaLFlBQVksRUFBRSxFQUFFO2FBQ2pCOzs7OzRCQUlXLFFBQVE7Ozs7Z0NBSUosR0FBRzs7OztxQ0FJRSxJQUFJOzs7O21DQUlOLElBQUk7Ozs7MkJBSUo7Z0JBQ2pCLElBQUksRUFBRSxFQUFFO2dCQUNSLEtBQUssRUFBRSxTQUFTO2dCQUNoQixJQUFJLEVBQUUsS0FBSzthQUNaOzs7OzsyQkFLVSxDQUFDOzt1QkFwSGQ7UUF5SEM7Ozs7Ozs7UUNwR0Msd0JBQ2tCLFNBQXNCLEVBQ2xCQyxNQUFlLEVBRzNCLE9BQXlCLEVBQ3pCO1lBTFEsY0FBUyxHQUFULFNBQVMsQ0FBYTtZQUNsQixRQUFHLEdBQUhBLE1BQUcsQ0FBWTtZQUczQixZQUFPLEdBQVAsT0FBTyxDQUFrQjtZQUN6QixRQUFHLEdBQUgsR0FBRztTQUNUOzs7OztRQUVJLGtDQUFTOzs7O3NCQUFDLElBQXNCOztnQkFDdEMsSUFBSSxDQUFDLElBQUk7b0JBQUUsT0FBTyxFQUFFLENBQUM7O2dCQUNyQixJQUFNLEdBQUcsR0FBcUIsRUFBRSxDQUFDO2dCQUNqQyxtQkFBUSxnQkFBSyxFQUFFLGtCQUFNLEVBQUUsc0JBQVEsRUFBRSxvQkFBTyxDQUFjOztvQkFFdEQsS0FBbUIsSUFBQSxTQUFBQyxTQUFBLElBQUksQ0FBQSwwQkFBQSw0Q0FBRTt3QkFBcEIsSUFBTSxJQUFJLGlCQUFBO3dCQUNiLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFOzRCQUNuRCxTQUFTO3lCQUNWO3dCQUVELElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxPQUFPLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7OzRCQUVuRCxJQUFJLElBQUksaUJBQWMsSUFBSSxFQUFFO2dDQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHO29DQUNYLFNBQVMsRUFBRSxJQUFJLGFBQVU7b0NBQ3pCLE1BQU0sRUFBRSxJQUFJLFVBQU87b0NBQ25CLFVBQVUsRUFBRSxJQUFJLGlCQUFjLEtBQUssQ0FBQyxVQUFVO29DQUM5QyxJQUFJLEVBQUUsSUFBSSxZQUFTLEtBQUssQ0FBQyxJQUFJO29DQUM3QixZQUFZLEVBQUUsSUFBSSxvQkFBaUIsS0FBSyxDQUFDLFlBQVk7aUNBQ3RELENBQUM7NkJBQ0g7NEJBQ0QsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsSUFBSSxJQUFJLEVBQUU7Z0NBQ3RELE9BQU8sQ0FBQyxJQUFJLENBQUMscUNBQXFDLENBQUMsQ0FBQztnQ0FDcEQsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7NkJBQ3BCO2lDQUFNO2dDQUNMLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs2QkFDbkQ7eUJBQ0Y7d0JBRUQsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTs0QkFDMUIsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsSUFBSSxJQUFJLEVBQUU7Z0NBQ3hELE9BQU8sQ0FBQyxJQUFJLENBQUMsc0NBQXNDLENBQUMsQ0FBQztnQ0FDckQsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7NkJBQ3BCO2lDQUFNO2dDQUNMLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzs2QkFDdEQ7eUJBQ0Y7d0JBRUQsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLEtBQUssSUFBSSxPQUFPLElBQUksQ0FBQyxHQUFHLEtBQUssV0FBVyxFQUFFOzRCQUMxRCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQzt5QkFDakI7d0JBRUQsSUFBSSxJQUFJLENBQUMsR0FBRyxLQUFLLElBQUksRUFBRTs0QkFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLFFBQVEsQ0FBQzt5QkFDM0M7NkJBQU07NEJBQ0wsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7eUJBQ2xCO3dCQUVELElBQUksSUFBSSxDQUFDLElBQUksRUFBRTs0QkFDYixJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQ3ZCLEVBQUUsRUFDRixPQUFPLEVBQ1AsT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVEsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FDaEUsQ0FBQzt5QkFDSDt3QkFFRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQzs7d0JBRy9GLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFOzRCQUM3QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzt5QkFDM0M7d0JBRUQsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztxQkFDaEI7Ozs7Ozs7Ozs7Ozs7OztnQkFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN0QixPQUFPLEdBQUcsQ0FBQzs7Ozs7O1FBR0wsb0NBQVc7Ozs7c0JBQUMsSUFBc0I7OztvQkFDeEMsS0FBbUIsSUFBQSxTQUFBQSxTQUFBLElBQUksQ0FBQSwwQkFBQSw0Q0FBRTt3QkFBcEIsSUFBTSxJQUFJLGlCQUFBO3dCQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRzs0QkFBRSxJQUFJLENBQUMsR0FBRyxHQUFHLGNBQU0sT0FBQSxJQUFJLEdBQUEsQ0FBQzt3QkFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7NEJBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO3lCQUNwQjs2QkFBTTs0QkFDTCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzt5QkFDakM7cUJBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBR0ssb0NBQVc7Ozs7c0JBQUMsSUFBZ0I7O2dCQUNsQyxJQUFNLFdBQVcsR0FBRyxVQUFDLENBQVMsRUFBRSxDQUFXO29CQUN6QyxPQUFBLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUM7aUJBQUEsQ0FBQzs7Z0JBRTVDLElBQUk7cUJBQ0QsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFLLE1BQU0sSUFBSSxDQUFDLENBQUMsS0FBSyxHQUFBLENBQUM7cUJBQ3JELE9BQU8sQ0FDTixVQUFDLElBQUksRUFBRSxHQUFHO29CQUNSLFFBQUMsSUFBSSxZQUFTLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSTtpQkFBQyxDQUNsRSxDQUFDOztnQkFFSixJQUFJO3FCQUNELE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLEtBQUssS0FBSyxPQUFPLElBQUksQ0FBQyxDQUFDLEtBQUssR0FBQSxDQUFDO3FCQUN0RCxPQUFPLEVBQUU7cUJBQ1QsT0FBTyxDQUNOLFVBQUMsSUFBSSxFQUFFLEdBQUc7b0JBQ1IsUUFBQyxJQUFJO3dCQUNILENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSTtpQkFBQyxDQUNwRSxDQUFDOzs7Ozs7UUFHRSxtQ0FBVTs7OztzQkFBQyxJQUFjOztnQkFFL0IsSUFBSSxJQUFJLGNBQVcsT0FBTyxJQUFJLFVBQU8sS0FBSyxVQUFVLEVBQUU7b0JBQ3BELE9BQU87d0JBQ0wsT0FBTyxFQUFFLElBQUk7d0JBQ2IsT0FBTyxvQkFBRSxJQUFJLENBQUMsSUFBVyxDQUFBO3dCQUN6QixPQUFPLEVBQUUsSUFBSSxVQUFPO3dCQUNwQixHQUFHLEVBQUUsSUFBSSxlQUFZLElBQUksWUFBUzt3QkFDbEMsTUFBTSxFQUFFLElBQUksY0FBVztxQkFDeEIsQ0FBQztpQkFDSDtnQkFFRCxJQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxXQUFXLEVBQUU7b0JBQ3BDLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUM7aUJBQzNCOztnQkFFRCxJQUFJLEdBQUcsR0FBYyxFQUFFLENBQUM7Z0JBRXhCLElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtvQkFDakMsR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO2lCQUNyQjtxQkFBTSxJQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7b0JBQ3pDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO2lCQUNqQjtnQkFFRCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRTtvQkFDWixHQUFHLENBQUMsR0FBRyxHQUFHLElBQUksWUFBUyxDQUFDO2lCQUN6QjtnQkFFRCxHQUFHLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFFbkIsT0FBTyxHQUFHLENBQUM7Ozs7OztRQUdMLHFDQUFZOzs7O3NCQUFDLElBQWM7OztnQkFDakMsSUFBSSxHQUFHLEdBQW1CLElBQUksQ0FBQzs7Z0JBRS9CLElBQUksSUFBSSxlQUFZLElBQUksWUFBUyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUMzQyxHQUFHLEdBQUc7d0JBQ0osV0FBVyxFQUFFLElBQUkscUJBQWtCO3dCQUNuQyxTQUFTLEVBQUUsSUFBSSxtQkFBZ0I7d0JBQy9CLE9BQU8sRUFBRSxJQUFJLFlBQVM7d0JBQ3RCLEVBQUUsb0JBQUUsSUFBSSxDQUFDLE1BQWEsQ0FBQTt3QkFDdEIsSUFBSSxFQUFFLElBQUksY0FBVzt3QkFDckIsR0FBRyxFQUFFLElBQUksaUJBQWMsSUFBSSxZQUFTO3dCQUNwQyxLQUFLLEVBQUUsSUFBSSxXQUFRO3dCQUNuQixRQUFRLEVBQUUsSUFBSSxrQkFBZTt3QkFDN0IsTUFBTSxFQUFFLElBQUksZ0JBQWE7cUJBQzFCLENBQUM7aUJBQ0g7cUJBQU07b0JBQ0wsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7aUJBQ25CO2dCQUVELElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7b0JBQ3pDLE9BQU8sSUFBSSxDQUFDO2lCQUNiO2dCQUVELElBQUksT0FBTyxHQUFHLENBQUMsUUFBUSxLQUFLLFdBQVcsRUFBRTtvQkFDdkMsR0FBRyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7aUJBQ3JCO2dCQUNELElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFO29CQUNwQixHQUFHLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUM7aUJBQzlDO2dCQUNELElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFO29CQUNsQixHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDO2lCQUMxQztnQkFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRTtvQkFDYixHQUFHLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztpQkFDckI7Z0JBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7b0JBQ1osR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLFlBQVMsQ0FBQztpQkFDekI7Z0JBRUQsR0FBRyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxPQUFPLEdBQUEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUV6RCxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7b0JBQ1osR0FBRyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBQSxDQUFDLENBQUM7aUJBQ3hEO2dCQUVELElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO29CQUN6QixHQUFHLEdBQUcsSUFBSSxDQUFDO2lCQUNaO2dCQUVELE9BQU8sR0FBRyxDQUFDOzs7Ozs7UUFHTCxzQ0FBYTs7OztzQkFBQyxJQUFjO2dCQUNsQyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7b0JBQ3BCLElBQUksb0JBQWlCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztpQkFDaEU7Z0JBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO29CQUNmLElBQUksZUFBWSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQ3BEOzs7Ozs7UUFHSCxnQ0FBTzs7OztZQUFQLFVBQVEsSUFBZ0I7Z0JBQXhCLGlCQThGQzs7Z0JBN0ZDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDO29CQUM1QixNQUFNLElBQUksS0FBSyxDQUFDLDRDQUE0QyxDQUFDLENBQUM7Z0JBRXhELElBQUEsMEJBQU8sQ0FBYzs7Z0JBQzdCLElBQUksYUFBYSxHQUFHLENBQUMsQ0FBQzs7Z0JBQ3RCLElBQUksVUFBVSxHQUFHLENBQUMsQ0FBQzs7Z0JBQ25CLElBQU0sT0FBTyxHQUFlLEVBQUUsQ0FBQzs7Z0JBQy9CLElBQU0sWUFBWSxxQkFBR0MsYUFBUSxDQUFDLElBQUksQ0FBZSxFQUFDOztvQkFDbEQsS0FBbUIsSUFBQSxpQkFBQUQsU0FBQSxZQUFZLENBQUEsMENBQUEsb0VBQUU7d0JBQTVCLElBQU0sSUFBSSx5QkFBQTt3QkFDYixJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTs0QkFDbkQsU0FBUzt5QkFDVjs7d0JBRUQsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFOzRCQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtnQ0FDOUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzs2QkFDcEM7NEJBQ0QsSUFBSSxlQUFZLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3lCQUN0Qzs7d0JBRUQsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7NEJBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO3lCQUM1Qzs7d0JBRUQsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRTs0QkFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksR0FBRyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQzt5QkFDOUQ7O3dCQUVELElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLEVBQUU7NEJBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO3lCQUN0Qjt3QkFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssVUFBVSxFQUFFOzRCQUM1QixFQUFFLGFBQWEsQ0FBQzs0QkFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0NBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFJLENBQUM7NkJBQzFEO3lCQUNGO3dCQUNELElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRTs0QkFDWixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFBLENBQUMsQ0FBQzt5QkFDcEU7O3dCQUVELElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxPQUFPLEVBQUU7NEJBQ3pCLEVBQUUsVUFBVSxDQUFDOzRCQUNiLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDOzRCQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtnQ0FDZixJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQzs2QkFDckI7eUJBQ0Y7O3dCQUVELElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUU7NEJBQ3RCLElBQUksQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7OzRCQUVsRCxJQUFJLElBQUksZUFBWSxJQUFJO2dDQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxHQUFHLElBQUksV0FBUSxDQUFDOzRCQUN2RCxJQUFJLElBQUksYUFBVSxJQUFJO2dDQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLElBQUksU0FBTSxDQUFDOzRCQUNqRCxJQUFJLElBQUksWUFBUyxJQUFJO2dDQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLElBQUksUUFBSyxDQUFDO3lCQUMvQzt3QkFDRCxJQUNFLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLElBQUksT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLFVBQVU7NkJBQ3hELElBQUksQ0FBQyxJQUFJLEtBQUssT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDOzZCQUM1QyxJQUFJLENBQUMsSUFBSSxLQUFLLEtBQUssSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxFQUN6Qzs0QkFDQSxtQkFBQyxJQUFXLEdBQUUsSUFBSSxHQUFHLEVBQUUsQ0FBQzt5QkFDekI7O3dCQUVELElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFOzRCQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHO2dDQUNmLE1BQU0sRUFBRSxZQUFZO2dDQUNwQixRQUFRLEVBQUUsWUFBWTtnQ0FDdEIsSUFBSSxFQUFFLGFBQWE7NkJBQ3BCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO3lCQUNkOzt3QkFHRCxJQUFJLFlBQVMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7d0JBRW5DLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQzs7d0JBRXRDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7O3dCQUU1QyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUV6QixPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO3FCQUNwQjs7Ozs7Ozs7Ozs7Ozs7O2dCQUNELElBQUksYUFBYSxHQUFHLENBQUMsRUFBRTtvQkFDckIsTUFBTSxJQUFJLEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO2lCQUN4RDtnQkFDRCxJQUFJLFVBQVUsR0FBRyxDQUFDLEVBQUU7b0JBQ2xCLE1BQU0sSUFBSSxLQUFLLENBQUMsa0NBQWtDLENBQUMsQ0FBQztpQkFDckQ7Z0JBRUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFFMUIsT0FBTyxPQUFPLENBQUM7YUFDaEI7Ozs7O1FBRUQseUNBQWdCOzs7O1lBQWhCLFVBQWlCLE9BQW1CO2dCQUFwQyxpQkFFQztnQkFEQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBQSxDQUFDLENBQUM7YUFDN0M7O29CQWhURk4sZUFBVTs7Ozs7d0JBUkYsV0FBVyx1QkFXZkcsU0FBSTt3QkFyQkFLLGNBQVUsdUJBc0JkQyxhQUFRO3dEQUNSQSxhQUFRLFlBQ1JDLFdBQU0sU0FBQ0Msc0JBQWdCO3dCQWJuQixRQUFROzs7NkJBWmpCOzs7Ozs7O0FDQUE7UUFnREUsc0JBQ1UsTUFDUSxRQUF3QixFQUN4QixJQUFjLEVBQ2QsRUFBVSxFQUNWLE1BQW1CLEVBQzNCO1lBTEEsU0FBSSxHQUFKLElBQUk7WUFDSSxhQUFRLEdBQVIsUUFBUSxDQUFnQjtZQUN4QixTQUFJLEdBQUosSUFBSSxDQUFVO1lBQ2QsT0FBRSxHQUFGLEVBQUUsQ0FBUTtZQUNWLFdBQU0sR0FBTixNQUFNLENBQWE7WUFDM0IsUUFBRyxHQUFILEdBQUc7U0FDVDs7Ozs7UUFFSiw4QkFBTzs7OztZQUFQLFVBQVEsT0FBNEI7Z0JBQXBDLGlCQTRHQztnQkEzR0MsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLGNBQWMsRUFBRSxhQUFhOztvQkFDL0MsSUFBSSxLQUFLLENBQXVCOztvQkFDaEMsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDO29CQUNiLElBQUEsbUJBQUksRUFBRSxpQkFBRyxFQUFFLHFCQUFLLEVBQUUsbUJBQUksRUFBRSxlQUFFLEVBQUUsZUFBRSxFQUFFLHlCQUFPLENBQWE7O29CQUM1RCxJQUFJLFFBQVEsQ0FBUzs7b0JBQ3JCLElBQUksT0FBTyxDQUFXOztvQkFDdEIsSUFBSSxLQUFLLENBQVM7b0JBRWxCLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO3dCQUM1QixRQUFRLEdBQUcsSUFBSSxDQUFDO3dCQUNoQixLQUFLLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUN4Q0MsYUFBRyxDQUFDLFVBQUMsTUFBVzs7NEJBRWQsSUFBSSxHQUFHLEdBQUdDLFlBQU8sQ0FBQyxNQUFNLG9CQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBZ0IsR0FBRSxFQUFFLENBQUMsQ0FBQzs0QkFDM0QsSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtnQ0FDdEMsR0FBRyxHQUFHLEVBQUUsQ0FBQzs2QkFDVjs7NEJBRUQsSUFBTSxXQUFXLEdBQ2YsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLO2dDQUNoQkEsWUFBTyxDQUFDLE1BQU0sb0JBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFpQixHQUFFLElBQUksQ0FBQyxDQUFDOzRCQUN0RCxRQUFRLEdBQUcsV0FBVyxJQUFJLElBQUksR0FBRyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDOzRCQUMzRCx5QkFBaUIsR0FBRyxFQUFDO3lCQUN0QixDQUFDLEVBQ0ZDLG9CQUFVLENBQUMsVUFBQSxHQUFHOzRCQUNaLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQzs0QkFDbkIsT0FBTyxFQUFFLENBQUM7eUJBQ1gsQ0FBQyxDQUNILENBQUM7cUJBQ0g7eUJBQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO3dCQUM5QixLQUFLLEdBQUdDLE9BQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztxQkFDbEI7eUJBQU07O3dCQUVMLEtBQUssR0FBRyxJQUFJLENBQUM7cUJBQ2Q7b0JBRUQsSUFBSSxDQUFDLFFBQVEsRUFBRTt3QkFDYixLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUk7O3dCQUVoQkgsYUFBRyxDQUFDLFVBQUMsTUFBZ0I7OzRCQUNuQixJQUFJLFVBQVUsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs0QkFDakMsSUFBTSxRQUFRLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQzs0QkFDM0MsSUFBSSxRQUFRLEVBQUU7Z0NBQ1osVUFBVSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7NkJBQ3hDOzRCQUNELE9BQU8sVUFBVSxDQUFDO3lCQUNuQixDQUFDOzt3QkFFRkEsYUFBRyxDQUFDLFVBQUMsTUFBZ0I7NEJBQ25CLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsTUFBTSxHQUFBLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDOztnQ0FDckMsSUFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLE9BQU8sR0FBQSxDQUFDLENBQUM7Z0NBQ3JELElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDO29DQUFFLE9BQU87O2dDQUNoQyxJQUFNLFFBQVEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztnQ0FDN0IsSUFBSSxPQUFPLFFBQVEsS0FBSyxVQUFVLEVBQUU7b0NBQ2xDLE9BQU8sQ0FBQyxJQUFJLENBQUMsNkNBQTZDLENBQUMsQ0FBQztvQ0FDNUQsT0FBTztpQ0FDUjtnQ0FDRCxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFBLE1BQU07b0NBQzNCLE9BQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLFFBQVEsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLEdBQUEsQ0FBQztpQ0FBQSxDQUN0QyxDQUFDOzZCQUNILENBQUMsQ0FBQzs0QkFDSCxPQUFPLE1BQU0sQ0FBQzt5QkFDZixDQUFDOzt3QkFFRkEsYUFBRyxDQUFDLFVBQUMsTUFBZ0I7NEJBQ25CLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTs7Z0NBQ2QsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dDQUNuRCxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLFlBQVksR0FBRyxZQUFZLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0NBQzNELFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO2dDQUN6QixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFO29DQUN0QixPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUM7aUNBQ25EOzZCQUNGOzRCQUNELE9BQU8sTUFBTSxDQUFDO3lCQUNmLENBQUMsQ0FDSCxDQUFDO3FCQUNIOztvQkFHRCxJQUFJLE9BQU8sR0FBRyxDQUFDLE9BQU8sS0FBSyxVQUFVLEVBQUU7d0JBQ3JDLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDQSxhQUFHLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFBLENBQUMsQ0FBQyxDQUFDO3FCQUN4RDs7b0JBRUQsS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQ2hCQSxhQUFHLENBQUMsVUFBQSxNQUFNO2dEQUNDLENBQUMsRUFBTSxHQUFHOzRCQUNqQixNQUFNLENBQUMsQ0FBQyxDQUFDLGNBQVcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBQSxDQUFDLENBQUM7NEJBQ2hFLElBQUksT0FBTyxDQUFDLFlBQVksRUFBRTtnQ0FDeEIsTUFBTSxDQUFDLENBQUMsQ0FBQyxvQkFBaUIsT0FBTyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7NkJBQzlEOzt3QkFKSCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRTtvQ0FBeEMsQ0FBQyxFQUFNLEdBQUc7eUJBS2xCO3dCQUNELE9BQU8sTUFBTSxDQUFDO3FCQUNmLENBQUMsQ0FDSCxDQUFDO29CQUVGLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxNQUFnQixJQUFLLFFBQUMsT0FBTyxHQUFHLE1BQU0sSUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDO3dCQUMzRCxjQUFjLENBQUM7NEJBQ2IsRUFBRSxFQUFFLEtBQUs7NEJBQ1QsS0FBSyxFQUFFLFFBQVE7NEJBQ2YsSUFBSSxFQUFFLE9BQU87NEJBQ2IsUUFBUSxFQUNOLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxXQUFXO2tDQUM1QixDQUFDLFFBQVEsSUFBSSxLQUFLLElBQUksRUFBRTtrQ0FDeEIsSUFBSSxDQUFDLElBQUk7eUJBQ2hCLENBQUMsQ0FBQztxQkFDSixDQUFDLENBQUM7aUJBQ0osQ0FBQyxDQUFDO2FBQ0o7Ozs7Ozs7UUFFTywwQkFBRzs7Ozs7O3NCQUFDLElBQVMsRUFBRSxHQUFhLEVBQUUsR0FBVztnQkFDL0MsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFOztvQkFDZCxJQUFNLFNBQVMscUJBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFXLEVBQUM7b0JBQ2xELElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO3dCQUMzQixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsU0FBUyxDQUFDLENBQUM7cUJBQ3BEO29CQUNELE9BQU8sU0FBUyxDQUFDO2lCQUNsQjs7Z0JBRUQsSUFBTSxLQUFLLEdBQUdDLFlBQU8sQ0FBQyxJQUFJLG9CQUFFLEdBQUcsQ0FBQyxLQUFpQixHQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7Z0JBRWhFLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQztnQkFDaEIsUUFBUSxHQUFHLENBQUMsSUFBSTtvQkFDZCxLQUFLLElBQUk7d0JBQ1AsR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO3dCQUN4QixNQUFNO29CQUNSLEtBQUssS0FBSzt3QkFDUixHQUFHLEdBQUcsS0FBSyxHQUFHLGdCQUFhLEtBQUssc0JBQWdCLEdBQUcsRUFBRSxDQUFDO3dCQUN0RCxNQUFNO29CQUNSLEtBQUssUUFBUTt3QkFDWCxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQzt3QkFDckQsTUFBTTtvQkFDUixLQUFLLFVBQVU7d0JBQ2IsR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUNyQyxNQUFNO29CQUNSLEtBQUssTUFBTTt3QkFDVCxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQzt3QkFDakQsTUFBTTtvQkFDUixLQUFLLElBQUk7d0JBQ1AsR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEtBQUssS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUN2RSxNQUFNO2lCQUNUO2dCQUNELE9BQU8sR0FBRyxJQUFJLElBQUksR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDOzs7Ozs7O1FBR3hCLGdDQUFTOzs7OztzQkFDZixHQUFXLEVBQ1gsT0FBNEI7O2dCQUVwQixJQUFBLGlCQUFHLEVBQUUsbUJBQUksRUFBRSxlQUFFLEVBQUUsZUFBRSxFQUFFLCtCQUFVLEVBQUUsNkJBQVMsRUFBRSx5QkFBTyxDQUFhOztnQkFDdEUsSUFBTSxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxJQUFJLEtBQUssRUFBRSxXQUFXLEVBQUUsQ0FBQzs7Z0JBQ25ELElBQU0sTUFBTSxHQUFRLE1BQU0sQ0FBQyxNQUFNO29CQUU3QixHQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFO29CQUMvQyxHQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFHLEVBQUU7eUJBRXJCLEdBQUcsQ0FBQyxNQUFNLEVBQ1YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxFQUNsRCxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUM5QixDQUFDOztnQkFDRixJQUFJLFVBQVUsR0FBUTtvQkFDcEIsTUFBTSxRQUFBO29CQUNOLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSTtvQkFDZCxPQUFPLEVBQUUsR0FBRyxDQUFDLE9BQU87aUJBQ3JCLENBQUM7Z0JBQ0YsSUFBSSxNQUFNLEtBQUssTUFBTSxJQUFJLEdBQUcsQ0FBQyxTQUFTLEtBQUssSUFBSSxFQUFFO29CQUMvQyxVQUFVLEdBQUc7d0JBQ1gsSUFBSSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDO3dCQUN6QyxPQUFPLEVBQUUsR0FBRyxDQUFDLE9BQU87cUJBQ3JCLENBQUM7aUJBQ0g7Z0JBQ0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLFVBQVUsQ0FBQyxDQUFDOzs7Ozs7UUFLNUMsbUNBQVk7Ozs7c0JBQUMsT0FBbUI7Z0JBQ3RDLE9BQU8sT0FBTztxQkFDWCxNQUFNLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLGFBQVUsSUFBSSxVQUFPLE9BQU8sSUFBSSxJQUFJLFVBQU8sT0FBTyxHQUFBLENBQUM7cUJBQ3RFLEdBQUcsQ0FBQyxVQUFBLElBQUksV0FBSSxJQUFJLFlBQU0sQ0FBQyxDQUFDOzs7Ozs7UUFHckIsa0NBQVc7Ozs7c0JBQUMsT0FBbUI7O2dCQUNyQyxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM1QyxJQUFJLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO29CQUN6QixPQUFPO2lCQUNSO2dCQUNELElBQUksT0FBTyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxLQUFLLFVBQVUsRUFBRTtvQkFDN0MsT0FBTyxDQUFDLElBQUksQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDO29CQUMvRCxPQUFPO2lCQUNSO2dCQUVELE9BQU8sVUFBQyxDQUFTLEVBQUUsQ0FBUzs7b0JBQzFCLElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUN6QyxJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7d0JBQ2hCLE9BQU8sUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sS0FBSyxTQUFTLEdBQUcsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO3FCQUM3RDtvQkFDRCxPQUFPLENBQUMsQ0FBQztpQkFDVixDQUFDOzs7Ozs7OztRQUdKLG9DQUFhOzs7Ozs7WUFBYixVQUNFLFVBQXdCLEVBQ3hCLFNBQXNCLEVBQ3RCLE9BQW1COzs7Z0JBRW5CLElBQUksR0FBRyxHQUE4QixFQUFFLENBQUM7O2dCQUN4QyxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM1QyxJQUFJLENBQUMsU0FBUyxJQUFJLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQztvQkFBRSxPQUFPLEdBQUcsQ0FBQztnQkFFcEQsSUFBSSxTQUFTLEVBQUU7b0JBQ2IsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUk7d0JBQ25CLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLEVBQUUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQztxQkFDbkUsQ0FBQyxDQUFDOztvQkFFSCxHQUFHO3dCQUNELEdBQUMsU0FBUyxDQUFDLEdBQUcsSUFBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQzs2QkFDOUIsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxHQUFHLFNBQVMsQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFBLENBQUM7NkJBQ3BELElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDOzJCQUM3QixDQUFDO2lCQUNIO3FCQUFNOztvQkFDTCxJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7O29CQUM1QixJQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDOztvQkFDNUIsSUFBSSxTQUFTLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLEVBQUUsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQztvQkFDL0UsSUFBSSxVQUFVLEVBQUU7d0JBQ2QsU0FBUyxHQUFHLFNBQVMsSUFBSSxVQUFVLENBQUMsYUFBYSxJQUFJLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQzt3QkFDdEUsU0FBUyxHQUFHLFVBQVUsQ0FBQyxHQUFHLElBQUksTUFBTSxDQUFDO3FCQUN0QztvQkFDRCxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsU0FBUyxDQUFDO2lCQUM1QjtnQkFDRCxPQUFPLEdBQUcsQ0FBQzthQUNaOzs7OztRQU1PLHNDQUFlOzs7O3NCQUFDLE9BQW1COztnQkFDekMsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO2dCQUNiLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxLQUFLLElBQUksR0FBQSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRzs7b0JBQ3BFLElBQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxPQUFPLEtBQUssSUFBSSxHQUFBLENBQUMsQ0FBQzs7b0JBQ2hFLElBQUksR0FBRyxHQUFXLEVBQUUsQ0FBQztvQkFDckIsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTt3QkFDckIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO3FCQUNoRDt5QkFBTTt3QkFDTCxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEtBQUssR0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3FCQUMxRDtvQkFDRCxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7aUJBQy9CLENBQUMsQ0FBQztnQkFDSCxPQUFPLEdBQUcsQ0FBQzs7O29CQXBRZGIsZUFBVTs7Ozs7d0JBdkNnQ2dCLGlCQUFXO3dCQUE3Q0Msb0JBQWMsdUJBMkNsQmQsU0FBSTt3QkEzQ2dCZSxjQUFRLHVCQTRDNUJmLFNBQUk7d0JBNUMwQmdCLFlBQU0sdUJBNkNwQ2hCLFNBQUk7d0JBbkRBaUIsa0JBQVcsdUJBb0RmakIsU0FBSTt3QkFuREFrQiw0QkFBWTs7OzJCQUZyQjs7Ozs7OztBQ0FBO1FBUUUsa0JBQWdDLE9BQW9CO1lBQXBCLFlBQU8sR0FBUCxPQUFPLENBQWE7U0FBSTs7Ozs7O1FBRWhELHlCQUFNOzs7OztzQkFBQyxJQUFTLEVBQUUsR0FBYTs7Z0JBQ3JDLElBQU0sR0FBRyxHQUFRLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUM7Z0JBRW5DLElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRTtvQkFDZCxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2lCQUMvQjtxQkFBTTs7b0JBQ0wsSUFBTSxHQUFHLEdBQUdSLFlBQU8sQ0FBQyxJQUFJLG9CQUFFLEdBQUcsQ0FBQyxLQUFpQixHQUFFLEVBQUUsQ0FBQyxDQUFDO29CQUNyRCxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztvQkFDWixRQUFRLEdBQUcsQ0FBQyxJQUFJO3dCQUNkLEtBQUssVUFBVTs0QkFDYixHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQzs0QkFDWixNQUFNO3dCQUNSLEtBQUssTUFBTTs0QkFDVCxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQzs0QkFDWixNQUFNO3dCQUNSLEtBQUssSUFBSTs0QkFDUCxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxXQUFRLEdBQUcsR0FBRyxhQUFVLEdBQUcsR0FBRyxHQUFHLFlBQVMsR0FBRyxDQUFDOzRCQUNuRSxNQUFNO3FCQUNUO2lCQUNGO2dCQUVELE9BQU8sR0FBRyxDQUFDOzs7Ozs7UUFHTCwyQkFBUTs7OztzQkFBQyxHQUFvQjs7Z0JBQ25DLElBQU0sTUFBTSxHQUE2QixFQUFFLENBQUM7O2dCQUM1QyxJQUFNLEtBQUssSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLFNBQVMsSUFBSSxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQzs7Z0JBQ3ZELElBQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUMzQixVQUFBLENBQUM7b0JBQ0MsT0FBQSxDQUFDLENBQUMsUUFBUSxLQUFLLEtBQUs7d0JBQ3BCLENBQUMsQ0FBQyxLQUFLO3lCQUNOLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7aUJBQUEsQ0FDekMsQ0FBQzs7Z0JBQ0YsSUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FDSjs7Z0JBRHJCLElBQ0UsRUFBRSxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOztnQkFHckIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDM0IsS0FBSyxDQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxNQUFHLENBQUMsR0FBRzt3QkFDekMsQ0FBQyxFQUFFLEdBQUc7d0JBQ04sQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLO3FCQUNwQixDQUFDO2lCQUNIOztnQkFHRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUMzQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFO3dCQUMzQixLQUFLLENBQUMsS0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBRyxDQUFDLEdBQUcsQ0FBQyxDQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUMzRCxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUNULE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FDWCxDQUFDO3FCQUNIO2lCQUNGO2dCQUVELElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFO29CQUNwQixLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsUUFBTSxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUcsRUFBRSxHQUFHLENBQUMsQ0FBRSxDQUFDO2lCQUNuRTtnQkFFRCxPQUFPLE1BQU0sQ0FBQzs7Ozs7O1FBR2hCLHlCQUFNOzs7O1lBQU4sVUFBTyxHQUFvQjtnQkFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPO29CQUNmLE1BQU0sSUFBSSxLQUFLLENBQUMsa0RBQWtELENBQUMsQ0FBQzs7Z0JBQ3RFLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2xDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7b0JBQ3pCLE1BQU0sUUFBQTtvQkFDTixRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVE7b0JBQ3RCLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUTtpQkFDdkIsQ0FBQyxDQUFDO2FBQ0o7O29CQTFFRmIsZUFBVTs7Ozs7d0JBSkZzQixnQkFBVyx1QkFNTGIsYUFBUTs7O3VCQVJ2Qjs7Ozs7Ozs7O1FDcVBFLHFCQUNVLE9BQ0EsS0FDQWMsV0FDQSxJQUNBLFVBQ0EsV0FHUixPQUF5QixFQUNqQixhQUNBLGNBQ2tCLEdBQVEsRUFDMUIsY0FDQSxZQUNBO1lBZlYsaUJBOEJDO1lBN0JTLFVBQUssR0FBTCxLQUFLO1lBQ0wsUUFBRyxHQUFILEdBQUc7WUFDSCxXQUFNLEdBQU5BLFNBQU07WUFDTixPQUFFLEdBQUYsRUFBRTtZQUNGLGFBQVEsR0FBUixRQUFRO1lBQ1IsY0FBUyxHQUFULFNBQVM7WUFJVCxnQkFBVyxHQUFYLFdBQVc7WUFDWCxpQkFBWSxHQUFaLFlBQVk7WUFDTSxRQUFHLEdBQUgsR0FBRyxDQUFLO1lBQzFCLGlCQUFZLEdBQVosWUFBWTtZQUNaLGVBQVUsR0FBVixVQUFVO1lBQ1YsY0FBUyxHQUFULFNBQVM7NEJBaExBLEVBQUU7MEJBQ0MsRUFBRTt5QkFFTixFQUFFO2lDQUNKLElBQUk7K0JBQ04sS0FBSztrQ0FDRixLQUFLOzRCQUNDLEVBQUU7Ozs7MkJBdUNILEVBQUU7Ozs7c0JBSW5CLEVBQUU7Ozs7c0JBSUYsQ0FBQzs7Ozt5QkFJRSxDQUFDOzs7OzJCQXdCQyxLQUFLOzs7O2dDQUlBLENBQUM7Ozs7NEJBSUwsS0FBSzs7Ozs7OzhCQWFXLElBQUk7Ozs7eUJBeUNkLElBQUlDLGlCQUFZLEVBQVc7Ozs7MEJBSzFCLElBQUlBLGlCQUFZLEVBQVk7Ozs7Z0NBSS9CLEdBQUc7aUNBK0xNLENBQUM7WUF0S3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO2dCQUNoRCxLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMzQyxJQUFJLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDNUIsS0FBSSxDQUFDLElBQUksR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDO29CQUMzQixLQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7aUJBQ1g7YUFDRixDQUFDLENBQUM7WUFDSCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRWpCLGFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ25DLElBQUksT0FBTyxFQUFFO2dCQUNYLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLE1BQU07cUJBQ3hCLElBQUksQ0FBQ2tCLGdCQUFNLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBQSxDQUFDLENBQUM7cUJBQzVDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGFBQWEsRUFBRSxHQUFBLENBQUMsQ0FBQzthQUMxQztTQUNGO1FBaExELHNCQUNJLDRCQUFHOzs7OztnQkFEUDtnQkFFRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDbEI7Ozs7Z0JBQ0QsVUFBUSxLQUFZO2dCQUNWLElBQUEsa0JBQUcsQ0FBYzs7Z0JBQ3pCLElBQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDM0MsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksRUFBRTtvQkFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBR2xCLGFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQ3BDO2dCQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2FBQ2xCOzs7V0FSQTtRQVdELHNCQUNJLDRCQUFHOzs7OztnQkFEUDtnQkFFRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDbEI7Ozs7Z0JBQ0QsVUFBUSxLQUFZO2dCQUNWLElBQUEsa0JBQUcsQ0FBYzs7Z0JBQ3pCLElBQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDM0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDekQsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7b0JBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDakQsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7b0JBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDbkQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7YUFDbEI7OztXQVZBO1FBNEJELHNCQUNJLDZCQUFJOzs7OztnQkFEUjtnQkFFRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7YUFDbkI7Ozs7Z0JBQ0QsVUFBUyxLQUFhO2dCQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztnQkFDZixJQUFBLG9CQUFJLENBQWM7O2dCQUMxQixJQUFNLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRUEsYUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUM5QyxJQUFBLGtCQUFLLENBQVU7Z0JBQ3ZCLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUU7b0JBQzdDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2lCQUN2QjtxQkFBTSxJQUFJbUIsY0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO2lCQUNuQztxQkFBTTtvQkFDTCxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztpQkFDcEI7Z0JBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7YUFDbkI7OztXQWRBO1FBMkNELHNCQUNJLGtDQUFTOzs7OztnQkFEYjtnQkFFRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7YUFDeEI7Ozs7Z0JBQ0QsVUFBYyxLQUFVO2dCQUN0QixJQUFJLE9BQU8sS0FBSyxLQUFLLFNBQVMsSUFBSSxDQUFDQSxjQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQ25ELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO29CQUN2QixPQUFPO2lCQUNSO2dCQUNELElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLE1BQU0sbUJBQ2hCO29CQUNYLEdBQUcsRUFBRSxNQUFNO29CQUNYLFNBQVMsRUFBRSxHQUFHO29CQUNkLGFBQWEsRUFBRSxHQUFHO2lCQUNuQixHQUNELE9BQU8sS0FBSyxLQUFLLFFBQVEsR0FBRyxLQUFLLEdBQUcsRUFBRSxDQUN2QyxDQUFDO2FBQ0g7OztXQWRBOzs7O1FBb0ZELHdCQUFFOzs7WUFBRjtnQkFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxDQUFDO2FBQzVCOzs7Ozs7UUFFRCxpQ0FBVzs7Ozs7WUFBWCxVQUFZLEtBQWEsRUFBRSxLQUFlO2dCQUN4QyxPQUFPLElBQUksQ0FBQyxRQUFRO3NCQUNoQixJQUFJLENBQUMsUUFBUTt5QkFDVixPQUFPLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQzt5QkFDM0IsT0FBTyxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7eUJBQ2pDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO3NCQUNwQyxFQUFFLENBQUM7YUFDUjs7Ozs7O1FBRU8sZ0NBQVU7Ozs7O3NCQUFDLElBQWtCLEVBQUUsSUFBVTs7Z0JBQy9DLElBQU0sR0FBRyxHQUFhO29CQUNwQixJQUFJLE1BQUE7b0JBQ0osRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFO29CQUNYLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtvQkFDWCxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7aUJBQ2xCLENBQUM7Z0JBQ0YsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO29CQUNoQixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO2lCQUNsQjtnQkFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzs7Ozs7UUFLaEIsMkJBQUs7Ozs7O2dCQUNYLGVBQVEsVUFBRSxFQUFFLFVBQUUsRUFBRSxjQUFJLEVBQUUsWUFBRyxFQUFFLFlBQUcsRUFBRSxjQUFJLEVBQUUsZ0JBQUssRUFBRSwwQkFBVSxFQUFFLHdCQUFTLEVBQUUsOEJBQVksQ0FBVTtnQkFDMUYsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ3BCLE9BQU8sSUFBSSxDQUFDLFVBQVU7cUJBQ25CLE9BQU8sQ0FBQztvQkFDUCxFQUFFLElBQUE7b0JBQ0YsRUFBRSxJQUFBO29CQUNGLEtBQUssT0FBQTtvQkFDTCxJQUFJLE1BQUE7b0JBQ0osR0FBRyxLQUFBO29CQUNILEdBQUcsS0FBQTtvQkFDSCxJQUFJLE1BQUE7b0JBQ0osT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRO29CQUN0QixVQUFVLFlBQUE7b0JBQ1YsU0FBUyxXQUFBO29CQUNULFlBQVksY0FBQTtpQkFDYixDQUFDO3FCQUNELElBQUksQ0FBQyxVQUFBLE1BQU07b0JBQ1YsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7b0JBQ3JCLElBQUksT0FBTyxNQUFNLENBQUMsRUFBRSxLQUFLLFdBQVcsRUFBRTt3QkFDcEMsS0FBSSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDO3FCQUNyQjtvQkFDRCxJQUFJLE9BQU8sTUFBTSxDQUFDLEtBQUssS0FBSyxXQUFXLEVBQUU7d0JBQ3ZDLEtBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztxQkFDM0I7b0JBQ0QsSUFBSSxPQUFPLE1BQU0sQ0FBQyxRQUFRLEtBQUssV0FBVyxFQUFFO3dCQUMxQyxLQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7cUJBQ3RDO29CQUNELEtBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztvQkFDekIsT0FBTyxLQUFJLENBQUMsS0FBSyxDQUFDO2lCQUNuQixDQUFDO3FCQUNELElBQUksQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFNBQVMsRUFBRSxHQUFBLENBQUM7cUJBQzVCLEtBQUssQ0FBQyxVQUFBLEtBQUs7b0JBQ1YsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7b0JBQ3JCLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLENBQUM7aUJBQ3pDLENBQUMsQ0FBQzs7Ozs7Ozs7UUFJUCwyQkFBSzs7Ozs7WUFBTCxVQUFNLFdBQWtCO2dCQUFsQiw0QkFBQTtvQkFBQSxrQkFBa0I7O2dCQUN0QixJQUFJLFdBQVcsRUFBRTtvQkFDZixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7aUJBQ3BCO2dCQUNELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztnQkFDdEIsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO2FBQ1g7Ozs7OztRQUdELGlDQUFXOzs7O1lBQVg7Z0JBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxFQUFFO3FCQUNyQixVQUFVLEVBQUU7cUJBQ1osV0FBVyxFQUFFO3FCQUNiLFNBQVMsRUFBRSxDQUFDO2FBQ2hCOzs7Ozs7Ozs7Ozs7Ozs7O1FBU0QsMEJBQUk7Ozs7Ozs7O1lBQUosVUFBSyxFQUFNLEVBQUUsV0FBaUIsRUFBRSxPQUF1QjtnQkFBbEQsbUJBQUE7b0JBQUEsTUFBTTs7Z0JBQ1QsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUFFLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO2dCQUM1QixJQUFJLE9BQU8sV0FBVyxLQUFLLFdBQVcsRUFBRTtvQkFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNO3dCQUNkLE9BQU8sSUFBSSxPQUFPLENBQUMsS0FBSzs4QkFDcEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUM7OEJBQzVDLFdBQVcsQ0FBQztpQkFDbkI7Z0JBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNwQjs7Ozs7Ozs7Ozs7UUFNRCw0QkFBTTs7Ozs7O1lBQU4sVUFBTyxXQUFpQixFQUFFLE9BQXVCO2dCQUMvQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQzthQUNyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBV0QsMkJBQUs7Ozs7Ozs7Ozs7O1lBQUwsVUFBTSxXQUFpQixFQUFFLE9BQXVCO2dCQUM5QyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUM7YUFDbEQ7Ozs7UUFFTyw0QkFBTTs7OztnQkFDWixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLO29CQUFFLE9BQU87O2dCQUM3QixJQUFNLEVBQUUscUJBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUE0QixFQUFDO2dCQUNoRCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7b0JBQ2YsRUFBRSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ25ELE9BQU87aUJBQ1I7Z0JBQ0QsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDOztnQkFFcEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDOzs7Ozs7UUFHOUQsNkJBQU87Ozs7WUFBUCxVQUFRLElBQWlCO2dCQUF6QixpQkFLQztnQkFKQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDO29CQUNoQixLQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7aUJBQ2YsQ0FBQyxDQUFDO2dCQUNILElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDdkI7Ozs7Ozs7UUFFRCw0QkFBTTs7Ozs7O1lBQU4sVUFBTyxDQUFRLEVBQUUsSUFBWSxFQUFFLEdBQWE7Z0JBQzFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDbkIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDOztnQkFDcEIsSUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ2xDLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxFQUFFO29CQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDaEM7Z0JBQ0QsT0FBTyxLQUFLLENBQUM7YUFDZDs7Ozs7OztRQUdELCtCQUFTOzs7Ozs7WUFBVCxVQUFVLENBQVEsRUFBRSxJQUFZLEVBQUUsS0FBYTtnQkFBL0MsaUJBYUM7Z0JBWkMsSUFBSSxtQkFBQyxDQUFDLENBQUMsTUFBcUIsR0FBRSxRQUFRLEtBQUssT0FBTztvQkFBRSxPQUFPO2dCQUMzRCxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUM7Z0JBQ3JCLElBQUksSUFBSSxDQUFDLGFBQWEsS0FBSyxDQUFDO29CQUFFLE9BQU87Z0JBQ3JDLFVBQVUsQ0FBQzs7b0JBQ1QsSUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDLEdBQUEsRUFBRSxJQUFJLE1BQUEsRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDO29CQUNoQyxJQUFJLEtBQUksQ0FBQyxhQUFhLEtBQUssQ0FBQyxFQUFFO3dCQUM1QixLQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztxQkFDaEM7eUJBQU07d0JBQ0wsS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7cUJBQ25DO29CQUNELEtBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO2lCQUN4QixFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUN2Qjs7Ozs7OztRQUdELCtCQUFTOzs7OztZQUFULFVBQVUsSUFBdUI7Z0JBQWpDLGlCQVVDO2dCQVRDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUN4QixJQUFJLEdBQUcsQ0FBRSxJQUFJLENBQUUsQ0FBQztpQkFDakI7Z0JBRUQsbUJBQUMsSUFBZ0IsR0FBRSxHQUFHLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBQSxDQUFDO3FCQUNuRCxNQUFNLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUEsQ0FBQztxQkFDekIsT0FBTyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFBLENBQUMsQ0FBQztnQkFFL0MsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO2FBQ1g7Ozs7Ozs7OztRQU1ELDBCQUFJOzs7Ozs7WUFBSixVQUFLLEdBQWEsRUFBRSxHQUFXLEVBQUUsS0FBVTtnQkFDekMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO29CQUNsQixHQUFHLFVBQU8sT0FBTyxHQUFHLEtBQUssQ0FBQztpQkFDM0I7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQ25CLFVBQUMsSUFBSSxFQUFFLEtBQUssSUFBSyxRQUFDLElBQUksVUFBTyxPQUFPLEdBQUcsS0FBSyxLQUFLLEdBQUcsR0FBRyxLQUFLLEdBQUcsSUFBSSxJQUFDLENBQ3JFLENBQUM7aUJBQ0g7Z0JBQ0QsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDOztnQkFDYixJQUFNLEdBQUcsR0FBRztvQkFDVixLQUFLLE9BQUE7b0JBQ0wsR0FBRyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDO29CQUNsRixNQUFNLEVBQUUsR0FBRztpQkFDWixDQUFDO2dCQUNGLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQzlCOzs7O1FBRUQsK0JBQVM7OztZQUFUO2dCQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSSxJQUFJLFFBQUMsSUFBSSxVQUFPLE9BQU8sR0FBRyxJQUFJLElBQUMsQ0FBQyxDQUFDO2dCQUMzRCxPQUFPLElBQUksQ0FBQzthQUNiOzs7OztRQU1PLGtDQUFZOzs7O3NCQUFDLEdBQWE7Z0JBQ2hDLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxPQUFPLEdBQUEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUN2RSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ2IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7Ozs7OztRQUdqQyxvQ0FBYzs7OztZQUFkLFVBQWUsR0FBYTtnQkFDMUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUN4Qjs7Ozs7UUFFRCxrQ0FBWTs7OztZQUFaLFVBQWEsR0FBYTtnQkFDeEIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLFFBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLElBQUMsQ0FBQyxDQUFDO2dCQUNuRCxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3hCOzs7Ozs7O1FBRUQsa0NBQVk7Ozs7OztZQUFaLFVBQWEsR0FBYSxFQUFFLElBQXdCLEVBQUUsT0FBZ0I7Z0JBQ3BFLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBSSxRQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxJQUFDLENBQUMsQ0FBQztnQkFDbkQsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7YUFDeEI7Ozs7UUFFRCxpQ0FBVzs7O1lBQVg7Z0JBQ0UsSUFBSSxDQUFDLFFBQVE7cUJBQ1YsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sS0FBSyxJQUFJLEdBQUEsQ0FBQztxQkFDbEQsT0FBTyxDQUFDLFVBQUEsR0FBRztvQkFDVixHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7b0JBQzNCLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBSSxRQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxJQUFDLENBQUMsQ0FBQztpQkFDcEQsQ0FBQyxDQUFDO2dCQUNMLE9BQU8sSUFBSSxDQUFDO2FBQ2I7Ozs7Ozs7O1FBT0QsZ0NBQVU7Ozs7WUFBVjtnQkFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDOUI7Ozs7UUFFTywrQkFBUzs7Ozs7Z0JBQ2YsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUEsQ0FBQyxDQUFDOztnQkFDdEQsSUFBTSxXQUFXLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxPQUFPLEtBQUssSUFBSSxHQUFBLENBQUMsQ0FBQztnQkFDOUQsSUFBSSxDQUFDLFdBQVc7b0JBQ2QsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksV0FBVyxDQUFDLE1BQU0sS0FBSyxTQUFTLENBQUMsTUFBTSxDQUFDOztnQkFDcEUsSUFBTSxZQUFZLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBQSxDQUFDLENBQUM7Z0JBQzlELElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUN6RCxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ1YsT0FBTyxJQUFJLENBQUM7Ozs7OztRQUdkLCtCQUFTOzs7O1lBQVQsVUFBVSxPQUFpQjtnQkFDekIsT0FBTyxHQUFHLE9BQU8sT0FBTyxLQUFLLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQztnQkFDdEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBSSxRQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsT0FBTyxJQUFDLENBQUMsQ0FBQztnQkFDeEUsT0FBTyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDeEM7Ozs7OztRQUVELHFDQUFlOzs7OztZQUFmLFVBQWdCLENBQVMsRUFBRSxLQUFjO2dCQUN2QyxDQUFDLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztnQkFDbEIsT0FBTyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDeEM7Ozs7O1FBRUQsbUNBQWE7Ozs7WUFBYixVQUFjLEdBQXNCO2dCQUNsQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDdkIsT0FBTyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDeEM7Ozs7UUFFRCxrQ0FBWTs7O1lBQVo7O2dCQUNFLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQyxPQUFPLEtBQUssSUFBSSxHQUFBLENBQUMsQ0FBQztnQkFDdEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ2pDLE9BQU8sSUFBSSxDQUFDO2FBQ2I7Ozs7Ozs7O1FBT0QsZ0NBQVU7Ozs7WUFBVjtnQkFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxPQUFPLEdBQUEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUksSUFBSSxRQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxJQUFDLENBQUMsQ0FBQztnQkFDMUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQy9CLE9BQU8sSUFBSSxDQUFDO2FBQ2I7Ozs7OztRQUVELCtCQUFTOzs7OztZQUFULFVBQVUsT0FBZ0IsRUFBRSxJQUFZOztnQkFFdEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBSSxRQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsS0FBSyxJQUFDLENBQUMsQ0FBQztnQkFDdEUsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUMvQixPQUFPLElBQUksQ0FBQzthQUNiOzs7Ozs7Ozs7UUFNRCwrQkFBUzs7Ozs7O1lBQVQsVUFBVSxDQUFRLEVBQUUsTUFBYyxFQUFFLEdBQW1CO2dCQUF2RCxpQkEwQ0M7Z0JBekNDLElBQUksQ0FBQyxFQUFFO29CQUNMLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztvQkFDcEIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO2lCQUNwQjtnQkFDRCxJQUFJLEdBQUcsQ0FBQyxJQUFJLEtBQUssT0FBTyxJQUFJLEdBQUcsQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFOztvQkFDakQsSUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDO29CQUNQLElBQUEsaUJBQUssQ0FBUztvQkFDdEIsR0FBRyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsR0FBRyxNQUFNLENBQUM7O29CQUMvQixJQUFNLE9BQU8sR0FBdUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7b0JBQzdELG1CQUFDLElBQUksQ0FBQyxXQUFXLENBQ2YsR0FBRyxDQUFDLElBQUksS0FBSyxPQUFPLEdBQUcsUUFBUSxHQUFHLGNBQWMsQ0FDMUMsR0FDTixLQUFLLENBQUMsU0FBUyxFQUNmLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUN4RCxPQUFPLENBQ1I7eUJBQ0UsSUFBSSxDQUFDRCxnQkFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsT0FBTyxDQUFDLEtBQUssV0FBVyxHQUFBLENBQUMsQ0FBQzt5QkFDM0MsU0FBUyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFBLENBQUMsQ0FBQztvQkFDeEQsT0FBTztpQkFDUjtxQkFBTSxJQUFJLEdBQUcsQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFOztvQkFDaEMsSUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDO29CQUNQLElBQUEsbUJBQU0sQ0FBUztvQkFDdkIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxNQUFNLENBQUM7b0JBQ2hDLElBQUksQ0FBQyxZQUFZO3lCQUNkLE1BQU0sQ0FDTCxNQUFNLENBQUMsS0FBSyxFQUNaLE1BQU0sQ0FBQyxTQUFTLEVBQ2hCLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUMxRCxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FDMUI7eUJBQ0EsSUFBSSxDQUFDQSxnQkFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsT0FBTyxDQUFDLEtBQUssV0FBVyxHQUFBLENBQUMsQ0FBQzt5QkFDM0MsU0FBUyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFBLENBQUMsQ0FBQztvQkFDeEQsT0FBTztpQkFDUjtxQkFBTSxJQUFJLEdBQUcsQ0FBQyxJQUFJLEtBQUssTUFBTSxFQUFFOztvQkFDOUIsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBQy9DLElBQUksT0FBTyxRQUFRLEtBQUssUUFBUSxFQUFFO3dCQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztxQkFDckM7b0JBQ0QsT0FBTztpQkFDUjtnQkFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQzthQUMvQjs7Ozs7OztRQUVPLGlDQUFXOzs7Ozs7c0JBQUMsTUFBYyxFQUFFLEdBQW1CLEVBQUUsS0FBVztnQkFDbEUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLO29CQUFFLE9BQU87Z0JBQ3ZCLElBQUksT0FBTyxHQUFHLENBQUMsS0FBSyxLQUFLLFFBQVEsRUFBRTtvQkFDakMsUUFBUSxHQUFHLENBQUMsS0FBSzt3QkFDZixLQUFLLE1BQU07NEJBQ1QsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDOzRCQUNaLE1BQU07d0JBQ1IsS0FBSyxRQUFROzRCQUNYLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzs0QkFDZCxNQUFNO3FCQUNUO2lCQUNGO3FCQUFNO29CQUNMLE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO2lCQUN2Qzs7Ozs7OztRQUdILDhCQUFROzs7OztZQUFSLFVBQVMsTUFBVyxFQUFFLEdBQW1CO2dCQUN2QyxJQUFJLEdBQUcsQ0FBQyxNQUFNO29CQUFFLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQy9DLE9BQU8sR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7YUFDdkI7Ozs7OztRQUVELGdDQUFVOzs7OztZQUFWLFVBQVcsSUFBWSxFQUFFLEdBQWE7Z0JBQ3BDLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUEsQ0FBQyxDQUFDO2FBQzNEOzs7Ozs7Ozs7Ozs7OztRQVdELDRCQUFNOzs7Ozs7WUFBTixVQUFPLE9BQWUsRUFBRSxHQUFxQjtnQkFBN0MsaUJBU0M7Z0JBUkMsQ0FBQyxPQUFPLEdBQUdWLE9BQUUsQ0FBQyxPQUFPLENBQUMsR0FBR0EsT0FBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxTQUFTLENBQUMsVUFBQyxHQUFVO29CQUM1RCxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUNuQixNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxHQUFHLG9CQUFtQjt3QkFDdEMsRUFBRSxFQUFFLEdBQUc7d0JBQ1AsRUFBRSxFQUFFLEtBQUksQ0FBQyxRQUFRO3FCQUNsQixFQUFDLENBQ0g7aUJBQUEsQ0FDRixDQUFDO2FBQ0g7Ozs7UUFJTyxtQ0FBYTs7OztnQkFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Ozs7O1FBR2xELDhCQUFROzs7OztnQkFDZFksb0JBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsUUFBUTtvQkFDbEQsR0FBQyxJQUFJLElBQUcsSUFBSTtvQkFDWixHQUFDLFdBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFXLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTO29CQUNyRCxHQUFDLG1DQUFtQyxJQUFHLElBQUksQ0FBQywwQkFBMEI7d0JBQ3RFLENBQUM7Ozs7O1FBR0wscUNBQWU7OztZQUFmO2dCQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ25EOzs7OztRQUVELGlDQUFXOzs7O1lBQVgsVUFDRSxPQUE2RDtnQkFFN0QsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFO29CQUNuQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7aUJBQ3RCO2dCQUNELElBQUksT0FBTyxDQUFDLElBQUksSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtvQkFDN0MsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2lCQUNkO2dCQUNELElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUNqQjs7OztRQUVELGlDQUFXOzs7WUFBWDtnQkFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUM5QixJQUFJLElBQUksQ0FBQyxLQUFLO29CQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDMUM7O29CQS9uQkZDLGNBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsSUFBSTt3QkFDZCw4cVJBQXFDO3dCQUNyQyxTQUFTLEVBQUU7NEJBQ1QsWUFBWTs0QkFDWixXQUFXOzRCQUNYLGNBQWM7NEJBQ2QsUUFBUTs0QkFDUlgsb0JBQWM7NEJBQ2RDLGNBQVE7NEJBQ1JDLFlBQU07NEJBQ05DLGtCQUFXO3lCQUNaO3dCQUNELG1CQUFtQixFQUFFLEtBQUs7d0JBQzFCLGVBQWUsRUFBRVMsNEJBQXVCLENBQUMsTUFBTTtxQkFDaEQ7Ozs7O3dCQWhFQ0Msc0JBQWlCO3dCQTJDVixRQUFRO3dCQXhDUkMsYUFBTTt3QkFUYkMsZUFBVTt3QkFEVkMsY0FBUzt3QkFtREYsUUFBUTt3REFnTVp4QixhQUFRLFlBQ1JDLFdBQU0sU0FBQ0Msc0JBQWdCO3dCQW5PMUJ1QixpQkFBVzt3QkFJWEMsa0JBQVk7d0RBbU9UekIsV0FBTSxTQUFDMEIsZUFBUTt3QkFwTVgsY0FBYzt3QkFFZCxZQUFZO3dCQWhDbkJDLHdCQUFrQjs7OzsyQkFpRWpCakMsVUFBSzswQkFHTEEsVUFBSzswQkFjTEEsVUFBSzs4QkFnQkxBLFVBQUs7eUJBR0xBLFVBQUs7eUJBSUxBLFVBQUs7NEJBSUxBLFVBQUs7MkJBSUxBLFVBQUs7OEJBb0JMQSxVQUFLO21DQUlMQSxVQUFLOytCQUlMQSxVQUFLOzJCQUlMQSxVQUFLOzZCQUdMQSxVQUFLO2lDQU9MQSxVQUFLO2dDQUlMQSxVQUFLO21DQWtCTEEsVUFBSzs2QkFHTEEsVUFBSzs2QkFHTEEsVUFBSzsyQkFHTEEsVUFBSzs2QkFHTEEsVUFBSzsrQkFFTEEsVUFBSztrQ0FFTEEsVUFBSzs0QkFHTGtDLFdBQU07NkJBS05BLFdBQU07bUNBR05sQyxVQUFLO2lEQUlMQSxVQUFLOzs7WUExR0xtQyxnQkFBVyxFQUFFOzs7O1lBSWJBLGdCQUFXLEVBQUU7Ozs7WUFJYkEsZ0JBQVcsRUFBRTs7OztZQXdCYkMsaUJBQVksRUFBRTs7OztZQUlkRCxnQkFBVyxFQUFFOzs7O1lBSWJDLGlCQUFZLEVBQUU7Ozs7WUErRGRELGdCQUFXLEVBQUU7Ozs7WUFJYkMsaUJBQVksRUFBRTs7OzBCQWhQakI7Ozs7Ozs7O0lDWUEsSUFBTSxVQUFVLEdBQUcsQ0FBQyxXQUFXLEVBQUUsY0FBYyxDQUFDLENBQUM7Ozs7Ozs7UUFleEMsZ0JBQU87OztZQUFkO2dCQUNFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7YUFDdEQ7O29CQWZGQyxhQUFRLFNBQUM7d0JBQ1IsT0FBTyxFQUFFLENBQUNDLHFCQUFnQixDQUFDO3dCQUMzQixPQUFPLEVBQUU7NEJBQ1BDLG1CQUFZOzRCQUNaQyxpQkFBVzs0QkFDWEMsb0JBQWU7NEJBQ2ZDLGtCQUFjOzRCQUNkQyw2QkFBaUI7eUJBQ2xCO3dCQUNELFlBQVksV0FBTSxVQUFVLENBQUM7d0JBQzdCLE9BQU8sV0FBTSxVQUFVLENBQUM7cUJBQ3pCOzt1QkF6QkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==