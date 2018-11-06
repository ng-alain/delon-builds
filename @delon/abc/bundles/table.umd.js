/**
 * @license ng-alain(cipchk@qq.com) v2.0.0-rc.2-598f9ab
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
        //#endregion
        function STComponent(cd, cog, router$$1, el, renderer, exportSrv, i18nSrv, modalHelper, drawerHelper, doc, columnSource, dataSource, delonI18n) {
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
            this.delonI18n$ = this.delonI18n.change.subscribe(function () {
                _this.locale = _this.delonI18n.getData('st');
                if (_this._columns.length > 0) {
                    _this.page = _this.clonePage;
                    _this.cd.detectChanges();
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
                this.cd.detectChanges();
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
                return btn.text;
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
                        template: "<ng-template #btnTpl let-i let-btn=\"btn\" let-sub=\"sub\">\n  <nz-popconfirm *ngIf=\"btn.pop === true\" [nzTitle]=\"btn.popTitle\" (nzOnConfirm)=\"_btnClick($event, i, btn)\">\n    <a *ngIf=\"!sub\" nz-popconfirm>\n      <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n    </a>\n    <span *ngIf=\"sub\" nz-popconfirm>\n      <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n    </span>\n  </nz-popconfirm>\n  <ng-container *ngIf=\"btn.pop !== true\">\n    <a *ngIf=\"!sub\" (click)=\"_btnClick($event, i, btn)\">\n      <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n    </a>\n    <span *ngIf=\"sub\" (click)=\"_btnClick($event, i, btn)\">\n      <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n    </span>\n  </ng-container>\n</ng-template>\n<ng-template #btnTextTpl let-i let-btn=\"btn\">\n  <i *ngIf=\"btn.icon\" nz-icon [type]=\"btn.icon.type\" [theme]=\"btn.icon.theme\" [spin]=\"btn.icon.spin\" [twoToneColor]=\"btn.icon.twoToneColor\" [iconfont]=\"btn.icon.iconfont\"></i>\n  <span [innerHTML]=\"_btnText(i, btn)\" [ngClass]=\"{'pl-xs': btn.icon}\"></span>\n</ng-template>\n<nz-table [nzData]=\"_data\"\n  [(nzPageIndex)]=\"pi\" (nzPageIndexChange)=\"_change('pi')\"\n  [(nzPageSize)]=\"ps\" (nzPageSizeChange)=\"_change('ps')\"\n  [nzTotal]=\"total\"\n  [nzShowPagination]=\"_isPagination\"\n  [nzFrontPagination]=\"false\"\n  [nzBordered]=\"bordered\"\n  [nzSize]=\"size\"\n  [nzLoading]=\"loading\"\n  [nzLoadingDelay]=\"loadingDelay\"\n  [nzScroll]=\"scroll\"\n  [nzTitle]=\"header\" [nzFooter]=\"footer\" [nzNoResult]=\"noResult\"\n  [nzPageSizeOptions]=\"page.pageSizes\"\n  [nzShowQuickJumper]=\"page.showQuickJumper\"\n  [nzShowSizeChanger]=\"page.showSize\"\n  [nzShowTotal]=\"totalTpl\">\n  <thead class=\"st__head\">\n    <tr>\n      <th *ngIf=\"expand\" [nzShowExpand]=\"expand\"></th>\n      <th *ngFor=\"let c of _columns; let index=index\" [nzWidth]=\"c.width\" [nzLeft]=\"c._left\" [nzRight]=\"c._right\" [ngClass]=\"c.className\"\n        [attr.colspan]=\"c.colSpan\" [attr.data-col]=\"c.indexKey\"\n        [nzShowSort]=\"c._sort.enabled\" [nzSort]=\"c._sort.default\" (nzSortChange)=\"sort(c, index, $event)\"\n        nzCustomFilter>\n        <ng-template #renderTitle [ngTemplateOutlet]=\"c.__renderTitle\" [ngTemplateOutletContext]=\"{$implicit: c, index: index }\"></ng-template>\n        <ng-container *ngIf=\"!c.__renderTitle; else renderTitle\">\n          <ng-container [ngSwitch]=\"c.type\">\n            <ng-container *ngSwitchCase=\"'checkbox'\">\n              <label nz-checkbox class=\"st__checkall\" [(ngModel)]=\"_allChecked\" [nzIndeterminate]=\"_indeterminate\" (ngModelChange)=\"_checkAll()\"></label>\n              <nz-dropdown *ngIf=\"c.selections.length\" class=\"st__selection\">\n                <span nz-dropdown>\n                  <i nz-icon type=\"down\"></i>\n                </span>\n                <ul nz-menu>\n                  <li nz-menu-item *ngFor=\"let rw of c.selections\" (click)=\"_rowSelection(rw)\" [innerHTML]=\"rw.text\">\n                  </li>\n                </ul>\n              </nz-dropdown>\n            </ng-container>\n            <ng-container *ngSwitchDefault>\n              <span [innerHTML]=\"c.title\"></span>\n            </ng-container>\n          </ng-container>\n          <nz-dropdown *ngIf=\"c.filter\"\n            class=\"st__filter\" nzTrigger=\"click\" [hasFilterButton]=\"true\" [nzClickHide]=\"false\"\n            [(nzVisible)]=\"c.filter.visible\">\n            <i nz-icon [type]=\"c.filter.icon\" theme=\"fill\"\n              [class.ant-table-filter-selected]=\"c.filter.default\"\n              [class.ant-table-filter-open]=\"c.filter.visible\" nz-dropdown></i>\n            <ul nz-menu>\n              <ng-container *ngIf=\"c.filter.multiple\">\n                <li nz-menu-item *ngFor=\"let filter of c.filter.menus\">\n                  <label nz-checkbox [(ngModel)]=\"filter.checked\">{{filter.text}}</label>\n                </li>\n              </ng-container>\n              <ng-container *ngIf=\"!c.filter.multiple\">\n                <li nz-menu-item *ngFor=\"let filter of c.filter.menus\">\n                  <label nz-radio [ngModel]=\"filter.checked\" (ngModelChange)=\"_filterRadio(c, filter, $event)\">{{filter.text}}</label>\n                </li>\n              </ng-container>\n            </ul>\n            <div class=\"ant-table-filter-dropdown-btns\">\n              <a class=\"ant-table-filter-dropdown-link confirm\" (click)=\"c.filter.visible = false\">\n                <span (click)=\"_filterConfirm(c)\">{{c.filter.confirmText}}</span>\n              </a>\n              <a class=\"ant-table-filter-dropdown-link clear\" (click)=\"c.filter.visible = false\">\n                <span (click)=\"_filterClear(c)\">{{c.filter.clearText}}</span>\n              </a>\n            </div>\n          </nz-dropdown>\n        </ng-container>\n      </th>\n    </tr>\n  </thead>\n  <tbody class=\"st__body\">\n    <ng-container *ngFor=\"let i of _data; let index=index\">\n      <tr [attr.data-index]=\"index\" (click)=\"_rowClick($event, i, index)\">\n        <td *ngIf=\"expand\" [nzShowExpand]=\"expand\" [(nzExpand)]=\"i.expand\"></td>\n        <td *ngFor=\"let c of _columns; let cIdx=index\" [nzLeft]=\"c._left\" [nzRight]=\"c._right\" [nzCheckbox]=\"c.type === 'checkbox'\" [ngClass]=\"c.className\"\n          [attr.colspan]=\"c.colSpan\">\n          <span class=\"ant-table-rep__title\" [innerHTML]=\"c.title\"></span>\n          <ng-template #render [ngTemplateOutlet]=\"c.__render\" [ngTemplateOutletContext]=\"{$implicit: i, index: index, column: c }\"></ng-template>\n          <ng-container *ngIf=\"!c.__render; else render\">\n            <ng-container *ngIf=\"c.index\" [ngSwitch]=\"c.type\">\n              <ng-container *ngSwitchCase=\"'checkbox'\">\n                <label nz-checkbox [nzDisabled]=\"i.disabled\" [ngModel]=\"i.checked\" (ngModelChange)=\"_checkSelection(i, $event)\"></label>\n              </ng-container>\n              <ng-container *ngSwitchCase=\"'radio'\">\n                <label nz-radio [nzDisabled]=\"i.disabled\" [ngModel]=\"i.checked\" (ngModelChange)=\"_refRadio($event, i)\"></label>\n              </ng-container>\n              <ng-container *ngSwitchCase=\"'link'\">\n                <a (click)=\"_click($event, i, c)\" [innerHTML]=\"i._values[cIdx]\"></a>\n              </ng-container>\n              <ng-container *ngSwitchCase=\"'tag'\">\n                <nz-tag [nzColor]=\"c.tag[i._values[cIdx]].color\">{{c.tag[i._values[cIdx]].text || i._values[cIdx]}}</nz-tag>\n              </ng-container>\n              <ng-container *ngSwitchCase=\"'badge'\">\n                <nz-badge [nzStatus]=\"c.badge[i._values[cIdx]].color\" [nzText]=\"c.badge[i._values[cIdx]].text || i._values[cIdx]\"></nz-badge>\n              </ng-container>\n              <span *ngSwitchDefault [innerHTML]=\"i._values[cIdx]\"></span>\n            </ng-container>\n            <ng-container *ngFor=\"let btn of _validBtns(i, c); let last=last\">\n              <nz-dropdown *ngIf=\"btn.children.length > 0\">\n                <a class=\"ant-dropdown-link\" nz-dropdown>\n                  <span [innerHTML]=\"_btnText(i, btn)\"></span>\n                  <i nz-icon type=\"down\"></i>\n                </a>\n                <ul nz-menu>\n                  <ng-container *ngFor=\"let subBtn of btn.children\">\n                    <li nz-menu-item *ngIf=\"subBtn.iif(i, subBtn, c)\">\n                      <ng-template [ngTemplateOutlet]=\"btnTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: subBtn, sub: true }\"></ng-template>\n                    </li>\n                  </ng-container>\n                </ul>\n              </nz-dropdown>\n              <ng-container *ngIf=\"btn.children.length == 0\">\n                <ng-template [ngTemplateOutlet]=\"btnTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn, sub: false }\"></ng-template>\n              </ng-container>\n              <nz-divider *ngIf=\"!last\" nzType=\"vertical\"></nz-divider>\n            </ng-container>\n            <ng-template [ngIf]=\"!c.__renderExpanded\" [ngTemplateOutlet]=\"c.__renderExpanded\" [ngTemplateOutletContext]=\"{$implicit: i, index: index, column: c }\"></ng-template>\n          </ng-container>\n        </td>\n      </tr>\n      <tr [nzExpand]=\"i.expand\">\n        <td></td>\n        <td [attr.colspan]=\"_columns.length\">\n          <ng-template [ngTemplateOutlet]=\"expand\" [ngTemplateOutletContext]=\"{$implicit: i, index: index }\"></ng-template>\n        </td>\n      </tr>\n    </ng-container>\n    <ng-template [ngIf]=\"!loading\" [ngTemplateOutlet]=\"body\"></ng-template>\n  </tbody>\n  <ng-template #totalTpl let-range=\"range\" let-total>{{ renderTotal(total, range) }}</ng-template>\n</nz-table>\n",
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm5nOi8vQGRlbG9uL2FiYy90YWJsZS90YWJsZS1yb3cuZGlyZWN0aXZlLnRzIiwibmc6Ly9AZGVsb24vYWJjL3RhYmxlL3RhYmxlLmNvbmZpZy50cyIsIm5nOi8vQGRlbG9uL2FiYy90YWJsZS90YWJsZS1jb2x1bW4tc291cmNlLnRzIiwibmc6Ly9AZGVsb24vYWJjL3RhYmxlL3RhYmxlLWRhdGEtc291cmNlLnRzIiwibmc6Ly9AZGVsb24vYWJjL3RhYmxlL3RhYmxlLWV4cG9ydC50cyIsIm5nOi8vQGRlbG9uL2FiYy90YWJsZS90YWJsZS5jb21wb25lbnQudHMiLCJuZzovL0BkZWxvbi9hYmMvdGFibGUvdGFibGUubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBJbnB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIE9uSW5pdCxcbiAgSW5qZWN0YWJsZSxcbiAgSG9zdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTVFJvd1NvdXJjZSB7XG4gIHByaXZhdGUgdGl0bGVzOiB7IFtrZXk6IHN0cmluZ106IFRlbXBsYXRlUmVmPGFueT4gfSA9IHt9O1xuICBwcml2YXRlIHJvd3M6IHsgW2tleTogc3RyaW5nXTogVGVtcGxhdGVSZWY8YW55PiB9ID0ge307XG5cbiAgYWRkKHR5cGU6IHN0cmluZywgcGF0aDogc3RyaW5nLCByZWY6IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgICB0aGlzW3R5cGUgPT09ICd0aXRsZScgPyAndGl0bGVzJyA6ICdyb3dzJ11bcGF0aF0gPSByZWY7XG4gIH1cblxuICBnZXRUaXRsZShwYXRoOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy50aXRsZXNbcGF0aF07XG4gIH1cblxuICBnZXRSb3cocGF0aDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucm93c1twYXRoXTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbc3Qtcm93XScgfSlcbmV4cG9ydCBjbGFzcyBTVFJvd0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgnc3Qtcm93JylcbiAgaWQ6IHN0cmluZztcblxuICBASW5wdXQoKVxuICB0eXBlOiAndGl0bGUnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVmOiBUZW1wbGF0ZVJlZjxhbnk+LFxuICAgIEBIb3N0KCkgcHJpdmF0ZSBzb3VyY2U6IFNUUm93U291cmNlLFxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zb3VyY2UuYWRkKHRoaXMudHlwZSwgdGhpcy5pZCwgdGhpcy5yZWYpO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBTVE11bHRpU29ydCxcbiAgU1RSZXEsXG4gIFNUUmVzLFxuICBTVFBhZ2UsXG4gIFNUQ29sdW1uQnV0dG9uTW9kYWxDb25maWcsXG4gIFNUQ29sdW1uQnV0dG9uRHJhd2VyQ29uZmlnLFxuICBTVEljb24sXG59IGZyb20gJy4vdGFibGUuaW50ZXJmYWNlcyc7XG5cbmV4cG9ydCBjbGFzcyBTVENvbmZpZyB7XG4gIC8qKlxuICAgKiDDqMK1wrfDpcKnwovDqcKhwrXDp8KgwoHDr8K8wozDqcK7wpjDqMKuwqTDpMK4wrrDr8K8wppgMWBcbiAgICovXG4gIHBpPzogbnVtYmVyO1xuICAvKipcbiAgICogw6bCr8KPw6nCocK1w6bClcKww6nCh8KPw6/CvMKMw6XCvcKTw6jCrsK+w6fCvcKuw6TCuMK6IGAwYCDDqMKhwqjDp8KkwrrDpMK4wo3DpcKIwobDqcKhwrXDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgMTBgXG4gICAqL1xuICBwcz86IG51bWJlcjtcbiAgLyoqXG4gICAqIMOmwpjCr8OlwpDCpsOmwpjCvsOnwqTCusOowr7CucOmwqHChlxuICAgKi9cbiAgYm9yZGVyZWQ/OiBib29sZWFuO1xuICAvKipcbiAgICogdGFibGXDpcKkwqfDpcKwwo9cbiAgICovXG4gIHNpemU/OiAnc21hbGwnIHwgJ21pZGRsZScgfCAnZGVmYXVsdCcgPSAnZGVmYXVsdCc7XG4gIC8qKlxuICAgKiDDpsKYwq/DpcKQwqbDqcKawpDDqMKXwo/DpcKkwrTDpcKSwozDpcKwwr7Dr8K8wozDpcK9wpPDpcKwwo/DpcKxwo/DpcK5wpXDpMK4wovDpsKJwo3DpsKYwr7Dp8KkwrrDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgZmFsc2VgXG4gICAqL1xuICByZXNwb25zaXZlSGlkZUhlYWRlckZvb3Rlcj8gPSBmYWxzZTtcbiAgLyoqIMOowq/Ct8OmwrHCgsOkwr3Ck8OpwoXCjcOnwr3CriAqL1xuICByZXE/OiBTVFJlcSA9IHtcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIGFsbEluQm9keTogZmFsc2UsXG4gICAgcmVOYW1lOiB7IHBpOiAncGknLCBwczogJ3BzJyB9LFxuICB9O1xuICAvKiogw6jCv8KUw6XCm8Kew6TCvcKTw6nChcKNw6fCvcKuICovXG4gIHJlcz86IFNUUmVzID0ge1xuICAgIHJlTmFtZTogeyBsaXN0OiBbJ2xpc3QnXSwgdG90YWw6IFsndG90YWwnXSB9LFxuICB9O1xuICAvKiogw6jCv8KUw6XCm8Kew6TCvcKTw6nChcKNw6fCvcKuICovXG4gIHBhZ2U/OiBTVFBhZ2UgPSB7XG4gICAgZnJvbnQ6IHRydWUsXG4gICAgemVyb0luZGV4ZWQ6IGZhbHNlLFxuICAgIHBsYWNlbWVudDogJ3JpZ2h0JyxcbiAgICBzaG93OiB0cnVlLFxuICAgIHNob3dTaXplOiBmYWxzZSxcbiAgICBwYWdlU2l6ZXM6IFsxMCwgMjAsIDMwLCA0MCwgNTBdLFxuICAgIHNob3dRdWlja0p1bXBlcjogZmFsc2UsXG4gICAgdG90YWw6IHRydWUsXG4gICAgaW5kZXhSZXNldDogdHJ1ZSxcbiAgICB0b1RvcDogdHJ1ZSxcbiAgICB0b1RvcE9mZnNldDogMTAwLFxuICB9O1xuICAvKipcbiAgICogw6nCh8KNw6XCkcK9w6XCkMKNw6bCjsKSw6XCusKPw6XCgMK8w6/CvMKMYGNvbHVtbnNgIMOnwprChMOpwofCjcOlwpHCvcOlwpDCjcOpwqvCmMOkwrrCjsOlwrHCnsOmwoDCp1xuICAgKi9cbiAgc29ydFJlTmFtZT86IHsgYXNjZW5kPzogc3RyaW5nOyBkZXNjZW5kPzogc3RyaW5nIH07XG4gIC8qKlxuICAgKiDDpsKYwq/DpcKQwqbDpcKkwprDpsKOwpLDpcK6wo/Dr8K8wozDpcK9wpMgYHNvcnRgIMOlwqTCmsOkwrjCqsOnwpvCuMOlwpDCjMOlwoDCvMOmwpfCtsOowofCqsOlworCqMOlwpDCiMOlwrnCtsOvwrzCjMOlwrvCusOowq7CrsOlwpDCjsOnwqvCr8OmwpTCr8OmwozCgcOmwpfCtsOkwr3Cv8OnwpTCqFxuICAgKi9cbiAgbXVsdGlTb3J0PzogYm9vbGVhbiB8IFNUTXVsdGlTb3J0ID0gZmFsc2U7XG4gIC8qKlxuICAgKiDDpsKMwonDqcKSwq7DpsKowqHDpsKAwoHDpsKhwobDqcKFwo3Dp8K9wq5cbiAgICovXG4gIG1vZGFsPzogU1RDb2x1bW5CdXR0b25Nb2RhbENvbmZpZyA9IHtcbiAgICBwYXJhbXNOYW1lOiAncmVjb3JkJyxcbiAgICBzaXplOiAnbGcnLFxuICAgIGV4YWN0OiB0cnVlLFxuICB9O1xuICAvKipcbiAgICogw6bCjMKJw6nCksKuw6bCisK9w6XCscKJw6nChcKNw6fCvcKuXG4gICAqL1xuICBkcmF3ZXI/OiBTVENvbHVtbkJ1dHRvbkRyYXdlckNvbmZpZyA9IHtcbiAgICBwYXJhbXNOYW1lOiAncmVjb3JkJyxcbiAgICBzaXplOiAnbWQnLFxuICAgIGZvb3RlcjogdHJ1ZSxcbiAgICBmb290ZXJIZWlnaHQ6IDU1LFxuICB9O1xuICAvKipcbiAgICogw6bCsMKUw6bCs8Khw6fCocKuw6jCrsKkw6bCocKGw6XChsKFw6XCrsK5XG4gICAqL1xuICBwb3BUaXRsZT8gPSAnw6fCocKuw6jCrsKkw6XCiMKgw6nCmcKkw6XCkMKXw6/CvMKfJztcbiAgLyoqXG4gICAqIMOowqHCjMOlwo3ClcOlwofCu8OlwqTCmsOlwrDCkcOmwpfCtsOpwpXCv8OkwrnCi8OnwrHCu8OkwrjCusOlwo/CjMOlwofCu8OvwrzCiMOlwo3ClcOkwr3CjcOvwrzCmsOmwq/Cq8OnwqfCksOvwrzCicOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmAyMDBgXG4gICAqL1xuICByb3dDbGlja1RpbWU/ID0gMjAwO1xuICAvKipcbiAgICogw6jCv8KHw6bCu8Kkw6bCjMKJw6nCksKuw6fCocKuw6jCrsKkw6bClsKHw6bCnMKsw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYMOnwqHCrsOowq7CpGBcbiAgICovXG4gIGZpbHRlckNvbmZpcm1UZXh0PyA9ICfDp8Khwq7DqMKuwqQnO1xuICAvKipcbiAgICogw6jCv8KHw6bCu8Kkw6bCjMKJw6nCksKuw6nCh8KNw6fCvcKuw6bClsKHw6bCnMKsw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYMOpwofCjcOnwr3CrmBcbiAgICovXG4gIGZpbHRlckNsZWFyVGV4dD8gPSAnw6nCh8KNw6fCvcKuJztcbiAgLyoqXG4gICAqIMOmwozCicOpwpLCrsOlwpvCvsOmwqDCh1xuICAgKi9cbiAgYnRuSWNvbj86IFNUSWNvbiA9IHtcbiAgICB0eXBlOiAnJyxcbiAgICB0aGVtZTogJ291dGxpbmUnLFxuICAgIHNwaW46IGZhbHNlLFxuICB9O1xufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIEluamVjdCwgSG9zdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQUNMU2VydmljZSB9IGZyb20gJ0BkZWxvbi9hY2wnO1xuaW1wb3J0IHsgQUxBSU5fSTE4Tl9UT0tFTiwgQWxhaW5JMThOU2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBkZWVwQ29weSB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuaW1wb3J0IHtcbiAgU1RDb2x1bW4sXG4gIFNUQ29sdW1uQnV0dG9uLFxuICBTVENvbHVtblNvcnQsXG4gIFNUQ29sdW1uRmlsdGVyLFxufSBmcm9tICcuL3RhYmxlLmludGVyZmFjZXMnO1xuaW1wb3J0IHsgU1RSb3dTb3VyY2UgfSBmcm9tICcuL3RhYmxlLXJvdy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU1RDb25maWcgfSBmcm9tICcuL3RhYmxlLmNvbmZpZyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RTb3J0TWFwIGV4dGVuZHMgU1RDb2x1bW5Tb3J0IHtcbiAgLyoqIMOmwpjCr8OlwpDCpsOlwpDCr8OnwpTCqMOmwo7CksOlwrrCjyAqL1xuICBlbmFibGVkPzogYm9vbGVhbjtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNUQ29sdW1uU291cmNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgQEhvc3QoKSBwcml2YXRlIHJvd1NvdXJjZTogU1RSb3dTb3VyY2UsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBhY2w6IEFDTFNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KEFMQUlOX0kxOE5fVE9LRU4pXG4gICAgcHJpdmF0ZSBpMThuU3J2OiBBbGFpbkkxOE5TZXJ2aWNlLFxuICAgIHByaXZhdGUgY29nOiBTVENvbmZpZyxcbiAgKSB7fVxuXG4gIHByaXZhdGUgYnRuQ29lcmNlKGxpc3Q6IFNUQ29sdW1uQnV0dG9uW10pOiBTVENvbHVtbkJ1dHRvbltdIHtcbiAgICBpZiAoIWxpc3QpIHJldHVybiBbXTtcbiAgICBjb25zdCByZXQ6IFNUQ29sdW1uQnV0dG9uW10gPSBbXTtcbiAgICBjb25zdCB7IG1vZGFsLCBkcmF3ZXIsIHBvcFRpdGxlLCBidG5JY29uIH0gPSB0aGlzLmNvZztcblxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBsaXN0KSB7XG4gICAgICBpZiAodGhpcy5hY2wgJiYgaXRlbS5hY2wgJiYgIXRoaXMuYWNsLmNhbihpdGVtLmFjbCkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdtb2RhbCcgfHwgaXRlbS50eXBlID09PSAnc3RhdGljJykge1xuICAgICAgICAvLyBjb21wYXRpYmxlXG4gICAgICAgIGlmIChpdGVtLmNvbXBvbmVudCAhPSBudWxsKSB7XG4gICAgICAgICAgaXRlbS5tb2RhbCA9IHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogaXRlbS5jb21wb25lbnQsXG4gICAgICAgICAgICBwYXJhbXM6IGl0ZW0ucGFyYW1zLFxuICAgICAgICAgICAgcGFyYW1zTmFtZTogaXRlbS5wYXJhbU5hbWUgfHwgbW9kYWwucGFyYW1zTmFtZSxcbiAgICAgICAgICAgIHNpemU6IGl0ZW0uc2l6ZSB8fCBtb2RhbC5zaXplLFxuICAgICAgICAgICAgbW9kYWxPcHRpb25zOiBpdGVtLm1vZGFsT3B0aW9ucyB8fCBtb2RhbC5tb2RhbE9wdGlvbnMsXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXRlbS5tb2RhbCA9PSBudWxsIHx8IGl0ZW0ubW9kYWwuY29tcG9uZW50ID09IG51bGwpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oYFtzdF0gU2hvdWxkIHNwZWNpZnkgbW9kYWwgcGFyYW1ldGVyYCk7XG4gICAgICAgICAgaXRlbS50eXBlID0gJ25vbmUnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW0ubW9kYWwgPSBPYmplY3QuYXNzaWduKHt9LCBtb2RhbCwgaXRlbS5tb2RhbCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ2RyYXdlcicpIHtcbiAgICAgICAgaWYgKGl0ZW0uZHJhd2VyID09IG51bGwgfHwgaXRlbS5kcmF3ZXIuY29tcG9uZW50ID09IG51bGwpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oYFtzdF0gU2hvdWxkIHNwZWNpZnkgZHJhd2VyIHBhcmFtZXRlcmApO1xuICAgICAgICAgIGl0ZW0udHlwZSA9ICdub25lJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtLmRyYXdlciA9IE9iamVjdC5hc3NpZ24oe30sIGRyYXdlciwgaXRlbS5kcmF3ZXIpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdkZWwnICYmIHR5cGVvZiBpdGVtLnBvcCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgaXRlbS5wb3AgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbS5wb3AgPT09IHRydWUpIHtcbiAgICAgICAgaXRlbS5wb3BUaXRsZSA9IGl0ZW0ucG9wVGl0bGUgfHwgcG9wVGl0bGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpdGVtLnBvcCA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbS5pY29uKSB7XG4gICAgICAgIGl0ZW0uaWNvbiA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAge30sXG4gICAgICAgICAgYnRuSWNvbixcbiAgICAgICAgICB0eXBlb2YgaXRlbS5pY29uID09PSAnc3RyaW5nJyA/IHsgdHlwZTogaXRlbS5pY29uIH0gOiBpdGVtLmljb24sXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGl0ZW0uY2hpbGRyZW4gPSBpdGVtLmNoaWxkcmVuICYmIGl0ZW0uY2hpbGRyZW4ubGVuZ3RoID4gMCA/IHRoaXMuYnRuQ29lcmNlKGl0ZW0uY2hpbGRyZW4pIDogW107XG5cbiAgICAgIC8vIGkxOG5cbiAgICAgIGlmIChpdGVtLmkxOG4gJiYgdGhpcy5pMThuU3J2KSB7XG4gICAgICAgIGl0ZW0udGV4dCA9IHRoaXMuaTE4blNydi5mYW55aShpdGVtLmkxOG4pO1xuICAgICAgfVxuXG4gICAgICByZXQucHVzaChpdGVtKTtcbiAgICB9XG4gICAgdGhpcy5idG5Db2VyY2VJZihyZXQpO1xuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBwcml2YXRlIGJ0bkNvZXJjZUlmKGxpc3Q6IFNUQ29sdW1uQnV0dG9uW10pIHtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgbGlzdCkge1xuICAgICAgaWYgKCFpdGVtLmlpZikgaXRlbS5paWYgPSAoKSA9PiB0cnVlO1xuICAgICAgaWYgKCFpdGVtLmNoaWxkcmVuKSB7XG4gICAgICAgIGl0ZW0uY2hpbGRyZW4gPSBbXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYnRuQ29lcmNlSWYoaXRlbS5jaGlsZHJlbik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBmaXhlZENvZXJjZShsaXN0OiBTVENvbHVtbltdKSB7XG4gICAgY29uc3QgY291bnRSZWR1Y2UgPSAoYTogbnVtYmVyLCBiOiBTVENvbHVtbikgPT5cbiAgICAgIGEgKyArYi53aWR0aC50b1N0cmluZygpLnJlcGxhY2UoJ3B4JywgJycpO1xuICAgIC8vIGxlZnQgd2lkdGhcbiAgICBsaXN0XG4gICAgICAuZmlsdGVyKHcgPT4gdy5maXhlZCAmJiB3LmZpeGVkID09PSAnbGVmdCcgJiYgdy53aWR0aClcbiAgICAgIC5mb3JFYWNoKFxuICAgICAgICAoaXRlbSwgaWR4KSA9PlxuICAgICAgICAgIChpdGVtLl9sZWZ0ID0gbGlzdC5zbGljZSgwLCBpZHgpLnJlZHVjZShjb3VudFJlZHVjZSwgMCkgKyAncHgnKSxcbiAgICAgICk7XG4gICAgLy8gcmlnaHQgd2lkdGhcbiAgICBsaXN0XG4gICAgICAuZmlsdGVyKHcgPT4gdy5maXhlZCAmJiB3LmZpeGVkID09PSAncmlnaHQnICYmIHcud2lkdGgpXG4gICAgICAucmV2ZXJzZSgpXG4gICAgICAuZm9yRWFjaChcbiAgICAgICAgKGl0ZW0sIGlkeCkgPT5cbiAgICAgICAgICAoaXRlbS5fcmlnaHQgPVxuICAgICAgICAgICAgKGlkeCA+IDAgPyBsaXN0LnNsaWNlKC1pZHgpLnJlZHVjZShjb3VudFJlZHVjZSwgMCkgOiAwKSArICdweCcpLFxuICAgICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgc29ydENvZXJjZShpdGVtOiBTVENvbHVtbik6IFNUU29ydE1hcCB7XG4gICAgLy8gY29tcGF0aWJsZVxuICAgIGlmIChpdGVtLnNvcnRlciAmJiB0eXBlb2YgaXRlbS5zb3J0ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgIGRlZmF1bHQ6IGl0ZW0uc29ydCBhcyBhbnksXG4gICAgICAgIGNvbXBhcmU6IGl0ZW0uc29ydGVyLFxuICAgICAgICBrZXk6IGl0ZW0uc29ydEtleSB8fCBpdGVtLmluZGV4S2V5LFxuICAgICAgICByZU5hbWU6IGl0ZW0uc29ydFJlTmFtZSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBpdGVtLnNvcnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4geyBlbmFibGVkOiBmYWxzZSB9O1xuICAgIH1cblxuICAgIGxldCByZXM6IFNUU29ydE1hcCA9IHt9O1xuXG4gICAgaWYgKHR5cGVvZiBpdGVtLnNvcnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXMua2V5ID0gaXRlbS5zb3J0O1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGl0ZW0uc29ydCAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICByZXMgPSBpdGVtLnNvcnQ7XG4gICAgfVxuXG4gICAgaWYgKCFyZXMua2V5KSB7XG4gICAgICByZXMua2V5ID0gaXRlbS5pbmRleEtleTtcbiAgICB9XG5cbiAgICByZXMuZW5hYmxlZCA9IHRydWU7XG5cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgcHJpdmF0ZSBmaWx0ZXJDb2VyY2UoaXRlbTogU1RDb2x1bW4pOiBTVENvbHVtbkZpbHRlciB7XG4gICAgbGV0IHJlczogU1RDb2x1bW5GaWx0ZXIgPSBudWxsO1xuICAgIC8vIGNvbXBhdGlibGVcbiAgICBpZiAoaXRlbS5maWx0ZXJzICYmIGl0ZW0uZmlsdGVycy5sZW5ndGggPiAwKSB7XG4gICAgICByZXMgPSB7XG4gICAgICAgIGNvbmZpcm1UZXh0OiBpdGVtLmZpbHRlckNvbmZpcm1UZXh0LFxuICAgICAgICBjbGVhclRleHQ6IGl0ZW0uZmlsdGVyQ2xlYXJUZXh0LFxuICAgICAgICBkZWZhdWx0OiBpdGVtLmZpbHRlcmVkLFxuICAgICAgICBmbjogaXRlbS5maWx0ZXIgYXMgYW55LFxuICAgICAgICBpY29uOiBpdGVtLmZpbHRlckljb24sXG4gICAgICAgIGtleTogaXRlbS5maWx0ZXJLZXkgfHwgaXRlbS5pbmRleEtleSxcbiAgICAgICAgbWVudXM6IGl0ZW0uZmlsdGVycyxcbiAgICAgICAgbXVsdGlwbGU6IGl0ZW0uZmlsdGVyTXVsdGlwbGUsXG4gICAgICAgIHJlTmFtZTogaXRlbS5maWx0ZXJSZU5hbWUsXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXMgPSBpdGVtLmZpbHRlcjtcbiAgICB9XG5cbiAgICBpZiAocmVzID09IG51bGwgfHwgcmVzLm1lbnVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiByZXMubXVsdGlwbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXMubXVsdGlwbGUgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoIXJlcy5jb25maXJtVGV4dCkge1xuICAgICAgcmVzLmNvbmZpcm1UZXh0ID0gdGhpcy5jb2cuZmlsdGVyQ29uZmlybVRleHQ7XG4gICAgfVxuICAgIGlmICghcmVzLmNsZWFyVGV4dCkge1xuICAgICAgcmVzLmNsZWFyVGV4dCA9IHRoaXMuY29nLmZpbHRlckNsZWFyVGV4dDtcbiAgICB9XG4gICAgaWYgKCFyZXMuaWNvbikge1xuICAgICAgcmVzLmljb24gPSBgZmlsdGVyYDtcbiAgICB9XG4gICAgaWYgKCFyZXMua2V5KSB7XG4gICAgICByZXMua2V5ID0gaXRlbS5pbmRleEtleTtcbiAgICB9XG5cbiAgICByZXMuZGVmYXVsdCA9IHJlcy5tZW51cy5maW5kSW5kZXgodyA9PiB3LmNoZWNrZWQpICE9PSAtMTtcblxuICAgIGlmICh0aGlzLmFjbCkge1xuICAgICAgcmVzLm1lbnVzID0gcmVzLm1lbnVzLmZpbHRlcih3ID0+IHRoaXMuYWNsLmNhbih3LmFjbCkpO1xuICAgIH1cblxuICAgIGlmIChyZXMubWVudXMubGVuZ3RoIDw9IDApIHtcbiAgICAgIHJlcyA9IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIHByaXZhdGUgcmVzdG9yZVJlbmRlcihpdGVtOiBTVENvbHVtbikge1xuICAgIGlmIChpdGVtLnJlbmRlclRpdGxlKSB7XG4gICAgICBpdGVtLl9fcmVuZGVyVGl0bGUgPSB0aGlzLnJvd1NvdXJjZS5nZXRUaXRsZShpdGVtLnJlbmRlclRpdGxlKTtcbiAgICB9XG4gICAgaWYgKGl0ZW0ucmVuZGVyKSB7XG4gICAgICBpdGVtLl9fcmVuZGVyID0gdGhpcy5yb3dTb3VyY2UuZ2V0Um93KGl0ZW0ucmVuZGVyKTtcbiAgICB9XG4gIH1cblxuICBwcm9jZXNzKGxpc3Q6IFNUQ29sdW1uW10pOiBTVENvbHVtbltdIHtcbiAgICBpZiAoIWxpc3QgfHwgbGlzdC5sZW5ndGggPT09IDApXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFtzdF06IHRoZSBjb2x1bW5zIHByb3BlcnR5IG11c2UgYmUgZGVmaW5lIWApO1xuXG4gICAgbGV0IGNoZWNrYm94Q291bnQgPSAwO1xuICAgIGxldCByYWRpb0NvdW50ID0gMDtcbiAgICBjb25zdCBjb2x1bW5zOiBTVENvbHVtbltdID0gW107XG4gICAgY29uc3QgY29weUNvbHVtZW5zID0gZGVlcENvcHkobGlzdCkgYXMgU1RDb2x1bW5bXTtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgY29weUNvbHVtZW5zKSB7XG4gICAgICBpZiAodGhpcy5hY2wgJiYgaXRlbS5hY2wgJiYgIXRoaXMuYWNsLmNhbihpdGVtLmFjbCkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICAvLyBpbmRleFxuICAgICAgaWYgKGl0ZW0uaW5kZXgpIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGl0ZW0uaW5kZXgpKSB7XG4gICAgICAgICAgaXRlbS5pbmRleCA9IGl0ZW0uaW5kZXguc3BsaXQoJy4nKTtcbiAgICAgICAgfVxuICAgICAgICBpdGVtLmluZGV4S2V5ID0gaXRlbS5pbmRleC5qb2luKCcuJyk7XG4gICAgICB9XG4gICAgICAvLyB0aXRsZVxuICAgICAgaWYgKGl0ZW0uaTE4biAmJiB0aGlzLmkxOG5TcnYpIHtcbiAgICAgICAgaXRlbS50aXRsZSA9IHRoaXMuaTE4blNydi5mYW55aShpdGVtLmkxOG4pO1xuICAgICAgfVxuICAgICAgLy8gY2hlY2tib3hcbiAgICAgIGlmIChpdGVtLnNlbGVjdGlvbnMgPT0gbnVsbCkge1xuICAgICAgICBpdGVtLnNlbGVjdGlvbnMgPSBbXTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgKytjaGVja2JveENvdW50O1xuICAgICAgICBpZiAoIWl0ZW0ud2lkdGgpIHtcbiAgICAgICAgICBpdGVtLndpZHRoID0gYCR7aXRlbS5zZWxlY3Rpb25zLmxlbmd0aCA+IDAgPyA2MiA6IDUwfXB4YDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuYWNsKSB7XG4gICAgICAgIGl0ZW0uc2VsZWN0aW9ucyA9IGl0ZW0uc2VsZWN0aW9ucy5maWx0ZXIodyA9PiB0aGlzLmFjbC5jYW4ody5hY2wpKTtcbiAgICAgIH1cbiAgICAgIC8vIHJhZGlvXG4gICAgICBpZiAoaXRlbS50eXBlID09PSAncmFkaW8nKSB7XG4gICAgICAgICsrcmFkaW9Db3VudDtcbiAgICAgICAgaXRlbS5zZWxlY3Rpb25zID0gW107XG4gICAgICAgIGlmICghaXRlbS53aWR0aCkge1xuICAgICAgICAgIGl0ZW0ud2lkdGggPSAnNTBweCc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIHR5cGVzXG4gICAgICBpZiAoaXRlbS50eXBlID09PSAneW4nKSB7XG4gICAgICAgIGl0ZW0ueW4gPSBPYmplY3QuYXNzaWduKHsgdHJ1dGg6IHRydWUgfSwgaXRlbS55bik7XG4gICAgICAgIC8vIGNvbXBhdGlibGVcbiAgICAgICAgaWYgKGl0ZW0ueW5UcnV0aCAhPSBudWxsKSBpdGVtLnluLnRydXRoID0gaXRlbS55blRydXRoO1xuICAgICAgICBpZiAoaXRlbS55blllcyAhPSBudWxsKSBpdGVtLnluLnllcyA9IGl0ZW0ueW5ZZXM7XG4gICAgICAgIGlmIChpdGVtLnluTm8gIT0gbnVsbCkgaXRlbS55bi5ubyA9IGl0ZW0ueW5ObztcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgKGl0ZW0udHlwZSA9PT0gJ2xpbmsnICYmIHR5cGVvZiBpdGVtLmNsaWNrICE9PSAnZnVuY3Rpb24nKSB8fFxuICAgICAgICAoaXRlbS50eXBlID09PSAnYmFkZ2UnICYmIGl0ZW0uYmFkZ2UgPT0gbnVsbCkgfHxcbiAgICAgICAgKGl0ZW0udHlwZSA9PT0gJ3RhZycgJiYgaXRlbS50YWcgPT0gbnVsbClcbiAgICAgICkge1xuICAgICAgICAoaXRlbSBhcyBhbnkpLnR5cGUgPSAnJztcbiAgICAgIH1cbiAgICAgIC8vIGNsYXNzTmFtZVxuICAgICAgaWYgKCFpdGVtLmNsYXNzTmFtZSkge1xuICAgICAgICBpdGVtLmNsYXNzTmFtZSA9IHtcbiAgICAgICAgICBudW1iZXI6ICd0ZXh0LXJpZ2h0JyxcbiAgICAgICAgICBjdXJyZW5jeTogJ3RleHQtcmlnaHQnLFxuICAgICAgICAgIGRhdGU6ICd0ZXh0LWNlbnRlcicsXG4gICAgICAgIH1baXRlbS50eXBlXTtcbiAgICAgIH1cblxuICAgICAgLy8gc29ydGVyXG4gICAgICBpdGVtLl9zb3J0ID0gdGhpcy5zb3J0Q29lcmNlKGl0ZW0pO1xuICAgICAgLy8gZmlsdGVyXG4gICAgICBpdGVtLmZpbHRlciA9IHRoaXMuZmlsdGVyQ29lcmNlKGl0ZW0pO1xuICAgICAgLy8gYnV0dG9uc1xuICAgICAgaXRlbS5idXR0b25zID0gdGhpcy5idG5Db2VyY2UoaXRlbS5idXR0b25zKTtcbiAgICAgIC8vIHJlc3RvcmUgY3VzdG9tIHJvd1xuICAgICAgdGhpcy5yZXN0b3JlUmVuZGVyKGl0ZW0pO1xuXG4gICAgICBjb2x1bW5zLnB1c2goaXRlbSk7XG4gICAgfVxuICAgIGlmIChjaGVja2JveENvdW50ID4gMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBbc3RdOiBqdXN0IG9ubHkgb25lIGNvbHVtbiBjaGVja2JveGApO1xuICAgIH1cbiAgICBpZiAocmFkaW9Db3VudCA+IDEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgW3N0XToganVzdCBvbmx5IG9uZSBjb2x1bW4gcmFkaW9gKTtcbiAgICB9XG5cbiAgICB0aGlzLmZpeGVkQ29lcmNlKGNvbHVtbnMpO1xuXG4gICAgcmV0dXJuIGNvbHVtbnM7XG4gIH1cblxuICByZXN0b3JlQWxsUmVuZGVyKGNvbHVtbnM6IFNUQ29sdW1uW10pIHtcbiAgICBjb2x1bW5zLmZvckVhY2goaSA9PiB0aGlzLnJlc3RvcmVSZW5kZXIoaSkpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBIb3N0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEZWNpbWFsUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IGRlZXBHZXQgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBDTkN1cnJlbmN5UGlwZSwgRGF0ZVBpcGUsIFlOUGlwZSwgX0h0dHBDbGllbnQgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuXG5pbXBvcnQge1xuICBTVERhdGEsXG4gIFNUUGFnZSxcbiAgU1RSZXEsXG4gIFNUUmVzLFxuICBTVENvbHVtbixcbiAgU1RNdWx0aVNvcnQsXG59IGZyb20gJy4vdGFibGUuaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBTVFNvcnRNYXAgfSBmcm9tICcuL3RhYmxlLWNvbHVtbi1zb3VyY2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNURGF0YVNvdXJjZU9wdGlvbnMge1xuICBwaT86IG51bWJlcjtcbiAgcHM/OiBudW1iZXI7XG4gIGRhdGE/OiBzdHJpbmcgfCBTVERhdGFbXSB8IE9ic2VydmFibGU8U1REYXRhW10+O1xuICB0b3RhbD86IG51bWJlcjtcbiAgcmVxPzogU1RSZXE7XG4gIHJlcz86IFNUUmVzO1xuICBwYWdlPzogU1RQYWdlO1xuICBjb2x1bW5zPzogU1RDb2x1bW5bXTtcbiAgbXVsdGlTb3J0PzogU1RNdWx0aVNvcnQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1REYXRhU291cmNlUmVzdWx0IHtcbiAgLyoqIMOmwpjCr8OlwpDCpsOpwpzCgMOowqbCgcOmwpjCvsOnwqTCusOlwojChsOpwqHCtcOlwpnCqCAqL1xuICBwYWdlU2hvdz86IGJvb2xlYW47XG4gIC8qKiDDpsKWwrAgYHBpYMOvwrzCjMOowovCpcOowr/ClMOlwpvCniBgdW5kZWZpbmVkYCDDqMKhwqjDp8KkwrrDp8KUwqjDpsKIwrfDpcKPwpfDpsKOwqcgKi9cbiAgcGk/OiBudW1iZXI7XG4gIC8qKiDDpsKWwrAgYHRvdGFsYMOvwrzCjMOowovCpcOowr/ClMOlwpvCniBgdW5kZWZpbmVkYCDDqMKhwqjDp8KkwrrDp8KUwqjDpsKIwrfDpcKPwpfDpsKOwqcgKi9cbiAgdG90YWw/OiBudW1iZXI7XG4gIC8qKiDDpsKVwrDDpsKNwq4gKi9cbiAgbGlzdD86IFNURGF0YVtdO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU1REYXRhU291cmNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwOiBfSHR0cENsaWVudCxcbiAgICBASG9zdCgpIHByaXZhdGUgY3VycmVudHk6IENOQ3VycmVuY3lQaXBlLFxuICAgIEBIb3N0KCkgcHJpdmF0ZSBkYXRlOiBEYXRlUGlwZSxcbiAgICBASG9zdCgpIHByaXZhdGUgeW46IFlOUGlwZSxcbiAgICBASG9zdCgpIHByaXZhdGUgbnVtYmVyOiBEZWNpbWFsUGlwZSxcbiAgICBwcml2YXRlIGRvbTogRG9tU2FuaXRpemVyXG4gICkge31cblxuICBwcm9jZXNzKG9wdGlvbnM6IFNURGF0YVNvdXJjZU9wdGlvbnMpOiBQcm9taXNlPFNURGF0YVNvdXJjZVJlc3VsdD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZVByb21pc2UsIHJlamVjdFByb21pc2UpID0+IHtcbiAgICAgIGxldCBkYXRhJDogT2JzZXJ2YWJsZTxTVERhdGFbXT47XG4gICAgICBsZXQgaXNSZW1vdGUgPSBmYWxzZTtcbiAgICAgIGNvbnN0IHsgZGF0YSwgcmVzLCB0b3RhbCwgcGFnZSwgcGksIHBzLCBjb2x1bW5zIH0gPSBvcHRpb25zO1xuICAgICAgbGV0IHJldFRvdGFsOiBudW1iZXI7XG4gICAgICBsZXQgcmV0TGlzdDogU1REYXRhW107XG4gICAgICBsZXQgcmV0UGk6IG51bWJlcjtcblxuICAgICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgICBpc1JlbW90ZSA9IHRydWU7XG4gICAgICAgIGRhdGEkID0gdGhpcy5nZXRCeUh0dHAoZGF0YSwgb3B0aW9ucykucGlwZShcbiAgICAgICAgICBtYXAoKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICAgICAgICAvLyBsaXN0XG4gICAgICAgICAgICBsZXQgcmV0ID0gZGVlcEdldChyZXN1bHQsIHJlcy5yZU5hbWUubGlzdCBhcyBzdHJpbmdbXSwgW10pO1xuICAgICAgICAgICAgaWYgKHJldCA9PSBudWxsIHx8ICFBcnJheS5pc0FycmF5KHJldCkpIHtcbiAgICAgICAgICAgICAgcmV0ID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB0b3RhbFxuICAgICAgICAgICAgY29uc3QgcmVzdWx0VG90YWwgPVxuICAgICAgICAgICAgICByZXMucmVOYW1lLnRvdGFsICYmXG4gICAgICAgICAgICAgIGRlZXBHZXQocmVzdWx0LCByZXMucmVOYW1lLnRvdGFsIGFzIHN0cmluZ1tdLCBudWxsKTtcbiAgICAgICAgICAgIHJldFRvdGFsID0gcmVzdWx0VG90YWwgPT0gbnVsbCA/IHRvdGFsIHx8IDAgOiArcmVzdWx0VG90YWw7XG4gICAgICAgICAgICByZXR1cm4gPFNURGF0YVtdPnJldDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVyciA9PiB7XG4gICAgICAgICAgICByZWplY3RQcm9taXNlKGVycik7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgICAgfSksXG4gICAgICAgICk7XG4gICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgZGF0YSQgPSBvZihkYXRhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGEgY29sZCBvYnNlcnZhYmxlXG4gICAgICAgIGRhdGEkID0gZGF0YTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc1JlbW90ZSkge1xuICAgICAgICBkYXRhJCA9IGRhdGEkLnBpcGUoXG4gICAgICAgICAgLy8gc29ydFxuICAgICAgICAgIG1hcCgocmVzdWx0OiBTVERhdGFbXSkgPT4ge1xuICAgICAgICAgICAgbGV0IGNvcHlSZXN1bHQgPSByZXN1bHQuc2xpY2UoMCk7XG4gICAgICAgICAgICBjb25zdCBzb3J0ZXJGbiA9IHRoaXMuZ2V0U29ydGVyRm4oY29sdW1ucyk7XG4gICAgICAgICAgICBpZiAoc29ydGVyRm4pIHtcbiAgICAgICAgICAgICAgY29weVJlc3VsdCA9IGNvcHlSZXN1bHQuc29ydChzb3J0ZXJGbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29weVJlc3VsdDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAvLyBmaWx0ZXJcbiAgICAgICAgICBtYXAoKHJlc3VsdDogU1REYXRhW10pID0+IHtcbiAgICAgICAgICAgIGNvbHVtbnMuZmlsdGVyKHcgPT4gdy5maWx0ZXIpLmZvckVhY2goYyA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IGMuZmlsdGVyLm1lbnVzLmZpbHRlcih3ID0+IHcuY2hlY2tlZCk7XG4gICAgICAgICAgICAgIGlmICh2YWx1ZXMubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgICAgICAgICAgIGNvbnN0IG9uRmlsdGVyID0gYy5maWx0ZXIuZm47XG4gICAgICAgICAgICAgIGlmICh0eXBlb2Ygb25GaWx0ZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFtzdF0gTXVzZSBwcm92aWRlIHRoZSBmbiBmdW5jdGlvbiBpbiBmaWx0ZXJgKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5maWx0ZXIocmVjb3JkID0+XG4gICAgICAgICAgICAgICAgdmFsdWVzLnNvbWUodiA9PiBvbkZpbHRlcih2LCByZWNvcmQpKSxcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAvLyBwYWdpbmdcbiAgICAgICAgICBtYXAoKHJlc3VsdDogU1REYXRhW10pID0+IHtcbiAgICAgICAgICAgIGlmIChwYWdlLmZyb250KSB7XG4gICAgICAgICAgICAgIGNvbnN0IG1heFBhZ2VJbmRleCA9IE1hdGguY2VpbChyZXN1bHQubGVuZ3RoIC8gcHMpO1xuICAgICAgICAgICAgICByZXRQaSA9IE1hdGgubWF4KDEsIHBpID4gbWF4UGFnZUluZGV4ID8gbWF4UGFnZUluZGV4IDogcGkpO1xuICAgICAgICAgICAgICByZXRUb3RhbCA9IHJlc3VsdC5sZW5ndGg7XG4gICAgICAgICAgICAgIGlmIChwYWdlLnNob3cgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0LnNsaWNlKChyZXRQaSAtIDEpICogcHMsIHJldFBpICogcHMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgIH0pLFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICAvLyBwcmUtcHJvY2Vzc1xuICAgICAgaWYgKHR5cGVvZiByZXMucHJvY2VzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBkYXRhJCA9IGRhdGEkLnBpcGUobWFwKHJlc3VsdCA9PiByZXMucHJvY2VzcyhyZXN1bHQpKSk7XG4gICAgICB9XG4gICAgICAvLyBkYXRhIGFjY2VsZXJhdG9yXG4gICAgICBkYXRhJCA9IGRhdGEkLnBpcGUoXG4gICAgICAgIG1hcChyZXN1bHQgPT4ge1xuICAgICAgICAgIGZvciAoY29uc3QgaSBvZiByZXN1bHQpIHtcbiAgICAgICAgICAgIGkuX3ZhbHVlcyA9IGNvbHVtbnMubWFwKGMgPT4gdGhpcy5nZXQoaSwgYykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9KSxcbiAgICAgICk7XG5cbiAgICAgIGRhdGEkLmZvckVhY2goKHJlc3VsdDogU1REYXRhW10pID0+IChyZXRMaXN0ID0gcmVzdWx0KSkudGhlbigoKSA9PiB7XG4gICAgICAgIHJlc29sdmVQcm9taXNlKHtcbiAgICAgICAgICBwaTogcmV0UGksXG4gICAgICAgICAgdG90YWw6IHJldFRvdGFsLFxuICAgICAgICAgIGxpc3Q6IHJldExpc3QsXG4gICAgICAgICAgcGFnZVNob3c6XG4gICAgICAgICAgICB0eXBlb2YgcGFnZS5zaG93ID09PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICA/IChyZXRUb3RhbCB8fCB0b3RhbCkgPiBwc1xuICAgICAgICAgICAgICA6IHBhZ2Uuc2hvdyxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0KGl0ZW06IGFueSwgY29sOiBTVENvbHVtbikge1xuICAgIGlmIChjb2wuZm9ybWF0KSB7XG4gICAgICBjb25zdCBmb3JtYXRSZXMgPSBjb2wuZm9ybWF0KGl0ZW0sIGNvbCkgYXMgc3RyaW5nO1xuICAgICAgaWYgKH5mb3JtYXRSZXMuaW5kZXhPZignPCcpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRvbS5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChmb3JtYXRSZXMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZvcm1hdFJlcztcbiAgICB9XG5cbiAgICBjb25zdCB2YWx1ZSA9IGRlZXBHZXQoaXRlbSwgY29sLmluZGV4IGFzIHN0cmluZ1tdLCBjb2wuZGVmYXVsdCk7XG5cbiAgICBsZXQgcmV0ID0gdmFsdWU7XG4gICAgc3dpdGNoIChjb2wudHlwZSkge1xuICAgICAgY2FzZSAnaW1nJzpcbiAgICAgICAgcmV0ID0gdmFsdWUgPyBgPGltZyBzcmM9XCIke3ZhbHVlfVwiIGNsYXNzPVwiaW1nXCI+YCA6ICcnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgIHJldCA9IHRoaXMubnVtYmVyLnRyYW5zZm9ybSh2YWx1ZSwgY29sLm51bWJlckRpZ2l0cyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY3VycmVuY3knOlxuICAgICAgICByZXQgPSB0aGlzLmN1cnJlbnR5LnRyYW5zZm9ybSh2YWx1ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICAgIHJldCA9IHRoaXMuZGF0ZS50cmFuc2Zvcm0odmFsdWUsIGNvbC5kYXRlRm9ybWF0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd5bic6XG4gICAgICAgIHJldCA9IHRoaXMueW4udHJhbnNmb3JtKHZhbHVlID09PSBjb2wueW4udHJ1dGgsIGNvbC55bi55ZXMsIGNvbC55bi5ubyk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRCeUh0dHAoXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgb3B0aW9uczogU1REYXRhU291cmNlT3B0aW9ucyxcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCB7IHJlcSwgcGFnZSwgcGksIHBzLCBtdWx0aVNvcnQsIGNvbHVtbnMgfSA9IG9wdGlvbnM7XG4gICAgY29uc3QgbWV0aG9kID0gKHJlcS5tZXRob2QgfHwgJ0dFVCcpLnRvVXBwZXJDYXNlKCk7XG4gICAgY29uc3QgcGFyYW1zOiBhbnkgPSBPYmplY3QuYXNzaWduKFxuICAgICAge1xuICAgICAgICBbcmVxLnJlTmFtZS5waV06IHBhZ2UuemVyb0luZGV4ZWQgPyBwaSAtIDEgOiBwaSxcbiAgICAgICAgW3JlcS5yZU5hbWUucHNdOiBwcyxcbiAgICAgIH0sXG4gICAgICByZXEucGFyYW1zLFxuICAgICAgdGhpcy5nZXRSZXFTb3J0TWFwKG11bHRpU29ydCwgY29sdW1ucyksXG4gICAgICB0aGlzLmdldFJlcUZpbHRlck1hcChjb2x1bW5zKSxcbiAgICApO1xuICAgIGxldCByZXFPcHRpb25zOiBhbnkgPSB7XG4gICAgICBwYXJhbXMsXG4gICAgICBib2R5OiByZXEuYm9keSxcbiAgICAgIGhlYWRlcnM6IHJlcS5oZWFkZXJzLFxuICAgIH07XG4gICAgaWYgKG1ldGhvZCA9PT0gJ1BPU1QnICYmIHJlcS5hbGxJbkJvZHkgPT09IHRydWUpIHtcbiAgICAgIHJlcU9wdGlvbnMgPSB7XG4gICAgICAgIGJvZHk6IE9iamVjdC5hc3NpZ24oe30sIHJlcS5ib2R5LCBwYXJhbXMpLFxuICAgICAgICBoZWFkZXJzOiByZXEuaGVhZGVycyxcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmh0dHAucmVxdWVzdChtZXRob2QsIHVybCwgcmVxT3B0aW9ucyk7XG4gIH1cblxuICAvLyNyZWdpb24gc29ydFxuXG4gIHByaXZhdGUgZ2V0VmFsaWRTb3J0KGNvbHVtbnM6IFNUQ29sdW1uW10pOiBTVFNvcnRNYXBbXSB7XG4gICAgcmV0dXJuIGNvbHVtbnNcbiAgICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtLl9zb3J0ICYmIGl0ZW0uX3NvcnQuZW5hYmxlZCAmJiBpdGVtLl9zb3J0LmRlZmF1bHQpXG4gICAgICAubWFwKGl0ZW0gPT4gaXRlbS5fc29ydCk7XG4gIH1cblxuICBwcml2YXRlIGdldFNvcnRlckZuKGNvbHVtbnM6IFNUQ29sdW1uW10pIHtcbiAgICBjb25zdCBzb3J0TGlzdCA9IHRoaXMuZ2V0VmFsaWRTb3J0KGNvbHVtbnMpO1xuICAgIGlmIChzb3J0TGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBzb3J0TGlzdFswXS5jb21wYXJlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLndhcm4oYFtzdF0gTXVzZSBwcm92aWRlIHRoZSBjb21wYXJlIGZ1bmN0aW9uIGluIHNvcnRgKTtcbiAgICAgIHJldHVybiA7XG4gICAgfVxuXG4gICAgcmV0dXJuIChhOiBhbnksIGI6IGFueSkgPT4ge1xuICAgICAgY29uc3QgcmVzdWx0ID0gc29ydExpc3RbMF0uY29tcGFyZShhLCBiKTtcbiAgICAgIGlmIChyZXN1bHQgIT09IDApIHtcbiAgICAgICAgcmV0dXJuIHNvcnRMaXN0WzBdLmRlZmF1bHQgPT09ICdkZXNjZW5kJyA/IC1yZXN1bHQgOiByZXN1bHQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gMDtcbiAgICB9O1xuICB9XG5cbiAgZ2V0UmVxU29ydE1hcChcbiAgICBtdWx0aVNvcnQ6IFNUTXVsdGlTb3J0LFxuICAgIGNvbHVtbnM6IFNUQ29sdW1uW10sXG4gICk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0ge1xuICAgIGxldCByZXQ6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcbiAgICBjb25zdCBzb3J0TGlzdCA9IHRoaXMuZ2V0VmFsaWRTb3J0KGNvbHVtbnMpO1xuICAgIGlmICghbXVsdGlTb3J0ICYmIHNvcnRMaXN0Lmxlbmd0aCA9PT0gMCkgcmV0dXJuIHJldDtcblxuICAgIGlmIChtdWx0aVNvcnQpIHtcbiAgICAgIHNvcnRMaXN0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIHJldFtpdGVtLmtleV0gPSAoaXRlbS5yZU5hbWUgfHwge30pW2l0ZW0uZGVmYXVsdF0gfHwgaXRlbS5kZWZhdWx0O1xuICAgICAgfSk7XG4gICAgICAvLyDDpcKQwojDpcK5wrbDpcKkwoTDp8KQwoZcbiAgICAgIHJldCA9IHtcbiAgICAgICAgW211bHRpU29ydC5rZXldOiBPYmplY3Qua2V5cyhyZXQpXG4gICAgICAgICAgLm1hcChrZXkgPT4ga2V5ICsgbXVsdGlTb3J0Lm5hbWVTZXBhcmF0b3IgKyByZXRba2V5XSlcbiAgICAgICAgICAuam9pbihtdWx0aVNvcnQuc2VwYXJhdG9yKSxcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1hcERhdGEgPSBzb3J0TGlzdFswXTtcbiAgICAgIHJldFttYXBEYXRhLmtleV0gPVxuICAgICAgICAoc29ydExpc3RbMF0ucmVOYW1lIHx8IHt9KVttYXBEYXRhLmRlZmF1bHRdIHx8IG1hcERhdGEuZGVmYXVsdDtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8vI2VuZHJlZ2lvblxuXG4gIC8vI3JlZ2lvbiBmaWx0ZXJcblxuICBwcml2YXRlIGdldFJlcUZpbHRlck1hcChjb2x1bW5zOiBTVENvbHVtbltdKTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB7XG4gICAgbGV0IHJldCA9IHt9O1xuICAgIGNvbHVtbnMuZmlsdGVyKHcgPT4gdy5maWx0ZXIgJiYgdy5maWx0ZXIuZGVmYXVsdCA9PT0gdHJ1ZSkuZm9yRWFjaChjb2wgPT4ge1xuICAgICAgY29uc3QgdmFsdWVzID0gY29sLmZpbHRlci5tZW51cy5maWx0ZXIoZiA9PiBmLmNoZWNrZWQgPT09IHRydWUpO1xuICAgICAgbGV0IG9iajogT2JqZWN0ID0ge307XG4gICAgICBpZiAoY29sLmZpbHRlci5yZU5hbWUpIHtcbiAgICAgICAgb2JqID0gY29sLmZpbHRlci5yZU5hbWUoY29sLmZpbHRlci5tZW51cywgY29sKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9ialtjb2wuZmlsdGVyLmtleV0gPSB2YWx1ZXMubWFwKGkgPT4gaS52YWx1ZSkuam9pbignLCcpO1xuICAgICAgfVxuICAgICAgcmV0ID0gT2JqZWN0LmFzc2lnbihyZXQsIG9iaik7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8vI2VuZHJlZ2lvblxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGRlZXBHZXQgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBYbHN4U2VydmljZSB9IGZyb20gJ0BkZWxvbi9hYmMveGxzeCc7XG5cbmltcG9ydCB7IFNUQ29sdW1uLCBTVEV4cG9ydE9wdGlvbnMgfSBmcm9tICcuL3RhYmxlLmludGVyZmFjZXMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU1RFeHBvcnQge1xuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBwcml2YXRlIHhsc3hTcnY6IFhsc3hTZXJ2aWNlKSB7fVxuXG4gIHByaXZhdGUgX3N0R2V0KGl0ZW06IGFueSwgY29sOiBTVENvbHVtbik6IGFueSB7XG4gICAgY29uc3QgcmV0OiBhbnkgPSB7IHQ6ICdzJywgdjogJycgfTtcblxuICAgIGlmIChjb2wuZm9ybWF0KSB7XG4gICAgICByZXQudiA9IGNvbC5mb3JtYXQoaXRlbSwgY29sKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdmFsID0gZGVlcEdldChpdGVtLCBjb2wuaW5kZXggYXMgc3RyaW5nW10sICcnKTtcbiAgICAgIHJldC52ID0gdmFsO1xuICAgICAgc3dpdGNoIChjb2wudHlwZSkge1xuICAgICAgICBjYXNlICdjdXJyZW5jeSc6XG4gICAgICAgICAgcmV0LnQgPSAnbic7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgICAgIHJldC50ID0gJ2QnO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd5bic6XG4gICAgICAgICAgcmV0LnYgPSByZXQudiA9PT0gY29sLnluVHJ1dGggPyBjb2wueW5ZZXMgfHwgJ8OmwpjCrycgOiBjb2wueW5ObyB8fCAnw6XCkMKmJztcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5TaGVldChvcHQ6IFNURXhwb3J0T3B0aW9ucyk6IHsgW3NoZWV0OiBzdHJpbmddOiBhbnkgfSB7XG4gICAgY29uc3Qgc2hlZXRzOiB7IFtzaGVldDogc3RyaW5nXTogYW55IH0gPSB7fTtcbiAgICBjb25zdCBzaGVldCA9IChzaGVldHNbb3B0LnNoZWV0bmFtZSB8fCAnU2hlZXQxJ10gPSB7fSk7XG4gICAgY29uc3QgY29sRGF0YSA9IG9wdC5fYy5maWx0ZXIoXG4gICAgICB3ID0+XG4gICAgICAgIHcuZXhwb3J0ZWQgIT09IGZhbHNlICYmXG4gICAgICAgIHcuaW5kZXggJiZcbiAgICAgICAgKCF3LmJ1dHRvbnMgfHwgdy5idXR0b25zLmxlbmd0aCA9PT0gMCksXG4gICAgKTtcbiAgICBjb25zdCBjYyA9IGNvbERhdGEubGVuZ3RoLFxuICAgICAgZGMgPSBvcHQuX2QubGVuZ3RoO1xuXG4gICAgLy8gY29sdW1uXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYzsgaSsrKSB7XG4gICAgICBzaGVldFtgJHtTdHJpbmcuZnJvbUNoYXJDb2RlKDY1ICsgaSl9MWBdID0ge1xuICAgICAgICB0OiAncycsXG4gICAgICAgIHY6IGNvbERhdGFbaV0udGl0bGUsXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIGNvbnRlbnRcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRjOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY2M7IGorKykge1xuICAgICAgICBzaGVldFtgJHtTdHJpbmcuZnJvbUNoYXJDb2RlKDY1ICsgail9JHtpICsgMn1gXSA9IHRoaXMuX3N0R2V0KFxuICAgICAgICAgIG9wdC5fZFtpXSxcbiAgICAgICAgICBjb2xEYXRhW2pdLFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjYyA+IDAgJiYgZGMgPiAwKSB7XG4gICAgICBzaGVldFsnIXJlZiddID0gYEExOiR7U3RyaW5nLmZyb21DaGFyQ29kZSg2NSArIGNjIC0gMSl9JHtkYyArIDF9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gc2hlZXRzO1xuICB9XG5cbiAgZXhwb3J0KG9wdDogU1RFeHBvcnRPcHRpb25zKSB7XG4gICAgaWYgKCF0aGlzLnhsc3hTcnYpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYG11c2UgYmUgaW1wb3J0ICdYbHN4TW9kdWxlJyBtb2R1bGUsIGJ1dCBnb3QgbnVsbGApO1xuICAgIGNvbnN0IHNoZWV0cyA9IHRoaXMuZ2VuU2hlZXQob3B0KTtcbiAgICByZXR1cm4gdGhpcy54bHN4U3J2LmV4cG9ydCh7XG4gICAgICBzaGVldHMsXG4gICAgICBmaWxlbmFtZTogb3B0LmZpbGVuYW1lLFxuICAgICAgY2FsbGJhY2s6IG9wdC5jYWxsYmFjayxcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIE9uRGVzdHJveSxcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBFdmVudEVtaXR0ZXIsXG4gIFJlbmRlcmVyMixcbiAgRWxlbWVudFJlZixcbiAgVGVtcGxhdGVSZWYsXG4gIFNpbXBsZUNoYW5nZSxcbiAgT3B0aW9uYWwsXG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEZWNpbWFsUGlwZSwgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7XG4gIENOQ3VycmVuY3lQaXBlLFxuICBEYXRlUGlwZSxcbiAgWU5QaXBlLFxuICBNb2RhbEhlbHBlcixcbiAgTW9kYWxIZWxwZXJPcHRpb25zLFxuICBBTEFJTl9JMThOX1RPS0VOLFxuICBBbGFpbkkxOE5TZXJ2aWNlLFxuICBEcmF3ZXJIZWxwZXIsXG4gIERyYXdlckhlbHBlck9wdGlvbnMsXG4gIERlbG9uTG9jYWxlU2VydmljZSxcbn0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7XG4gIGRlZXBDb3B5LFxuICB0b0Jvb2xlYW4sXG4gIHVwZGF0ZUhvc3RDbGFzcyxcbiAgSW5wdXRCb29sZWFuLFxuICBJbnB1dE51bWJlcixcbn0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5pbXBvcnQge1xuICBTVENvbHVtbixcbiAgU1RDaGFuZ2UsXG4gIFNUQ29sdW1uU2VsZWN0aW9uLFxuICBTVENvbHVtbkZpbHRlck1lbnUsXG4gIFNURGF0YSxcbiAgU1RDb2x1bW5CdXR0b24sXG4gIFNURXhwb3J0T3B0aW9ucyxcbiAgU1RNdWx0aVNvcnQsXG4gIFNUUmVxLFxuICBTVEVycm9yLFxuICBTVENoYW5nZVR5cGUsXG4gIFNUQ2hhbmdlUm93Q2xpY2ssXG4gIFNUUmVzLFxuICBTVFBhZ2UsXG4gIFNUTG9hZE9wdGlvbnMsXG59IGZyb20gJy4vdGFibGUuaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBTVENvbmZpZyB9IGZyb20gJy4vdGFibGUuY29uZmlnJztcbmltcG9ydCB7IFNURXhwb3J0IH0gZnJvbSAnLi90YWJsZS1leHBvcnQnO1xuaW1wb3J0IHsgU1RDb2x1bW5Tb3VyY2UgfSBmcm9tICcuL3RhYmxlLWNvbHVtbi1zb3VyY2UnO1xuaW1wb3J0IHsgU1RSb3dTb3VyY2UgfSBmcm9tICcuL3RhYmxlLXJvdy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU1REYXRhU291cmNlIH0gZnJvbSAnLi90YWJsZS1kYXRhLXNvdXJjZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAgU1REYXRhU291cmNlLFxuICAgIFNUUm93U291cmNlLFxuICAgIFNUQ29sdW1uU291cmNlLFxuICAgIFNURXhwb3J0LFxuICAgIENOQ3VycmVuY3lQaXBlLFxuICAgIERhdGVQaXBlLFxuICAgIFlOUGlwZSxcbiAgICBEZWNpbWFsUGlwZSxcbiAgXSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBTVENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBpMThuJDogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIGRlbG9uSTE4biQ6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSB0b3RhbFRwbCA9IGBgO1xuICBwcml2YXRlIGxvY2FsZTogYW55ID0ge307XG4gIHByaXZhdGUgY2xvbmVQYWdlOiBTVFBhZ2U7XG4gIF9kYXRhOiBTVERhdGFbXSA9IFtdO1xuICBfaXNQYWdpbmF0aW9uID0gdHJ1ZTtcbiAgX2FsbENoZWNrZWQgPSBmYWxzZTtcbiAgX2luZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgX2NvbHVtbnM6IFNUQ29sdW1uW10gPSBbXTtcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIC8qKiDDpsKVwrDDpsKNwq7DpsK6wpAgKi9cbiAgQElucHV0KClcbiAgZGF0YTogc3RyaW5nIHwgU1REYXRhW10gfCBPYnNlcnZhYmxlPFNURGF0YVtdPjtcbiAgLyoqIMOowq/Ct8OmwrHCgsOkwr3Ck8OpwoXCjcOnwr3CriAqL1xuICBASW5wdXQoKVxuICBnZXQgcmVxKCkge1xuICAgIHJldHVybiB0aGlzLl9yZXE7XG4gIH1cbiAgc2V0IHJlcSh2YWx1ZTogU1RSZXEpIHtcbiAgICBjb25zdCB7IHJlcSB9ID0gdGhpcy5jb2c7XG4gICAgY29uc3QgaXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIHJlcSwgdmFsdWUpO1xuICAgIGlmIChpdGVtLnJlTmFtZSA9PSBudWxsKSB7XG4gICAgICBpdGVtLnJlTmFtZSA9IGRlZXBDb3B5KHJlcS5yZU5hbWUpO1xuICAgIH1cbiAgICB0aGlzLl9yZXEgPSBpdGVtO1xuICB9XG4gIHByaXZhdGUgX3JlcTogU1RSZXE7XG4gIC8qKiDDqMK/wpTDpcKbwp7DpMK9wpPDqcKFwo3Dp8K9wq4gKi9cbiAgQElucHV0KClcbiAgZ2V0IHJlcygpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzO1xuICB9XG4gIHNldCByZXModmFsdWU6IFNUUmVzKSB7XG4gICAgY29uc3QgeyByZXMgfSA9IHRoaXMuY29nO1xuICAgIGNvbnN0IGl0ZW0gPSBPYmplY3QuYXNzaWduKHt9LCByZXMsIHZhbHVlKTtcbiAgICBpdGVtLnJlTmFtZSA9IE9iamVjdC5hc3NpZ24oe30sIHJlcy5yZU5hbWUsIGl0ZW0ucmVOYW1lKTtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoaXRlbS5yZU5hbWUubGlzdCkpXG4gICAgICBpdGVtLnJlTmFtZS5saXN0ID0gaXRlbS5yZU5hbWUubGlzdC5zcGxpdCgnLicpO1xuICAgIGlmICghQXJyYXkuaXNBcnJheShpdGVtLnJlTmFtZS50b3RhbCkpXG4gICAgICBpdGVtLnJlTmFtZS50b3RhbCA9IGl0ZW0ucmVOYW1lLnRvdGFsLnNwbGl0KCcuJyk7XG4gICAgdGhpcy5fcmVzID0gaXRlbTtcbiAgfVxuICBwcml2YXRlIF9yZXM6IFNUUmVzO1xuICAvKiogw6XCiMKXw6bCj8KPw6jCv8KwICAqL1xuICBASW5wdXQoKVxuICBjb2x1bW5zOiBTVENvbHVtbltdID0gW107XG4gIC8qKiDDpsKvwo/DqcKhwrXDpsKVwrDDqcKHwo/Dr8K8wozDpcK9wpPDqMKuwr7Dp8K9wq7DpMK4wrogYDBgIMOowqHCqMOnwqTCusOkwrjCjcOlwojChsOpwqHCtcOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmAxMGAgKi9cbiAgQElucHV0KClcbiAgQElucHV0TnVtYmVyKClcbiAgcHMgPSAxMDtcbiAgLyoqIMOlwr3Ck8OlwonCjcOpwqHCtcOnwqDCgSAqL1xuICBASW5wdXQoKVxuICBASW5wdXROdW1iZXIoKVxuICBwaSA9IDE7XG4gIC8qKiDDpsKVwrDDpsKNwq7DpsKAwrvDqcKHwo8gKi9cbiAgQElucHV0KClcbiAgQElucHV0TnVtYmVyKClcbiAgdG90YWwgPSAwO1xuICAvKiogw6XCiMKGw6nCocK1w6XCmcKow6nChcKNw6fCvcKuICovXG4gIEBJbnB1dCgpXG4gIGdldCBwYWdlKCkge1xuICAgIHJldHVybiB0aGlzLl9wYWdlO1xuICB9XG4gIHNldCBwYWdlKHZhbHVlOiBTVFBhZ2UpIHtcbiAgICB0aGlzLmNsb25lUGFnZSA9IHZhbHVlO1xuICAgIGNvbnN0IHsgcGFnZSB9ID0gdGhpcy5jb2c7XG4gICAgY29uc3QgaXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIGRlZXBDb3B5KHBhZ2UpLCB2YWx1ZSk7XG4gICAgY29uc3QgeyB0b3RhbCB9ID0gaXRlbTtcbiAgICBpZiAodHlwZW9mIHRvdGFsID09PSAnc3RyaW5nJyAmJiB0b3RhbC5sZW5ndGgpIHtcbiAgICAgIHRoaXMudG90YWxUcGwgPSB0b3RhbDtcbiAgICB9IGVsc2UgaWYgKHRvQm9vbGVhbih0b3RhbCkpIHtcbiAgICAgIHRoaXMudG90YWxUcGwgPSB0aGlzLmxvY2FsZS50b3RhbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50b3RhbFRwbCA9ICcnO1xuICAgIH1cbiAgICB0aGlzLl9wYWdlID0gaXRlbTtcbiAgfVxuICBwcml2YXRlIF9wYWdlOiBTVFBhZ2U7XG4gIC8qKiDDpsKYwq/DpcKQwqbDpsKYwr7Dp8KkwrpMb2FkaW5nICovXG4gIEBJbnB1dCgpXG4gIEBJbnB1dEJvb2xlYW4oKVxuICBsb2FkaW5nID0gZmFsc2U7XG4gIC8qKiDDpcK7wrbDqMK/wp/DpsKYwr7Dp8KkwrrDpcKKwqDDqMK9wr3DpsKVwojDpsKewpzDp8KawoTDpsKXwrbDqcKXwrTDr8K8wojDqcKYwrLDpsKtwqLDqcKXwqrDp8KDwoHDr8K8wokgKi9cbiAgQElucHV0KClcbiAgQElucHV0TnVtYmVyKClcbiAgbG9hZGluZ0RlbGF5ID0gMDtcbiAgLyoqIMOmwpjCr8OlwpDCpsOmwpjCvsOnwqTCusOowr7CucOmwqHChiAqL1xuICBASW5wdXQoKVxuICBASW5wdXRCb29sZWFuKClcbiAgYm9yZGVyZWQgPSBmYWxzZTtcbiAgLyoqIHRhYmxlw6XCpMKnw6XCsMKPICovXG4gIEBJbnB1dCgpXG4gIHNpemU6ICdzbWFsbCcgfCAnbWlkZGxlJyB8ICdkZWZhdWx0JztcbiAgLyoqIMOnwrrCtcOlwpDCkcOmwpTCr8OmwozCgcOmwrvCmsOlworCqMOvwrzCjMOkwrnCn8Olwo/Cr8OnwpTCqMOkwrrCjsOmwozCh8Olwq7CmsOmwrvCmsOlworCqMOlwozCusOlwp/Cn8OnwprChMOpwqvCmMOlwrrCpsOvwrzCmmB7IHk6ICczMDBweCcsIHg6ICczMDBweCcgfWAgKi9cbiAgQElucHV0KClcbiAgc2Nyb2xsOiB7IHk/OiBzdHJpbmc7IHg/OiBzdHJpbmcgfTtcbiAgLyoqIMOmwpjCr8OlwpDCpsOlwqTCmsOmwo7CksOlwrrCj8OvwrzCjMOlwr3CkyBgc29ydGAgw6XCpMKaw6TCuMKqw6fCm8K4w6XCkMKMw6XCgMK8w6bCl8K2w6jCh8Kqw6XCisKow6XCkMKIw6XCucK2w6/CvMKMw6XCu8K6w6jCrsKuw6XCkMKOw6fCq8Kvw6bClMKvw6bCjMKBw6bCl8K2w6TCvcK/w6fClMKoICovXG4gIEBJbnB1dCgpXG4gIGdldCBtdWx0aVNvcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX211bHRpU29ydDtcbiAgfVxuICBzZXQgbXVsdGlTb3J0KHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicgJiYgIXRvQm9vbGVhbih2YWx1ZSkpIHtcbiAgICAgIHRoaXMuX211bHRpU29ydCA9IG51bGw7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX211bHRpU29ydCA9IE9iamVjdC5hc3NpZ24oXG4gICAgICA8U1RNdWx0aVNvcnQ+e1xuICAgICAgICBrZXk6ICdzb3J0JyxcbiAgICAgICAgc2VwYXJhdG9yOiAnLScsXG4gICAgICAgIG5hbWVTZXBhcmF0b3I6ICcuJyxcbiAgICAgIH0sXG4gICAgICB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnID8gdmFsdWUgOiB7fSxcbiAgICApO1xuICB9XG4gIHByaXZhdGUgX211bHRpU29ydDogU1RNdWx0aVNvcnQ7XG4gIC8qKiBgaGVhZGVyYCDDpsKgwofDqcKiwpggKi9cbiAgQElucHV0KClcbiAgaGVhZGVyOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgLyoqIGBmb290ZXJgIMOlwrrClcOpwoPCqCAqL1xuICBASW5wdXQoKVxuICBmb290ZXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICAvKiogw6nCosKdw6XCpMKWIGBib2R5YCDDpcKGwoXDpcKuwrkgKi9cbiAgQElucHV0KClcbiAgYm9keTogVGVtcGxhdGVSZWY8dm9pZD47XG4gIC8qKiBgZXhwYW5kYCDDpcKPwq/DpcKxwpXDpcK8woDDr8K8wozDpcK9wpPDpsKVwrDDpsKNwq7DpsK6wpDDpMK4wq3DpcKMwoXDpsKLwqwgYGV4cGFuZGAgw6jCocKow6fCpMK6w6XCscKVw6XCvMKAw6fCisK2w6bCgMKBICovXG4gIEBJbnB1dCgpXG4gIGV4cGFuZDogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IGFueTsgY29sdW1uOiBTVENvbHVtbiB9PjtcbiAgQElucHV0KClcbiAgbm9SZXN1bHQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKVxuICB3aWR0aENvbmZpZzogc3RyaW5nW107XG4gIC8qKiDDqMKvwrfDpsKxwoLDpcK8woLDpcK4wrjDpsKXwrbDpcKbwp7DqMKwwoMgKi9cbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IGVycm9yID0gbmV3IEV2ZW50RW1pdHRlcjxTVEVycm9yPigpO1xuICAvKipcbiAgICogw6XCj8KYw6XCjMKWw6bCl8K2w6XCm8Kew6jCsMKDw6/CvMKMw6XCjMKFw6bCi8Ksw6/CvMKaYHBpYMOjwoDCgWBwc2DDo8KAwoFgY2hlY2tib3hgw6PCgMKBYHJhZGlvYMOjwoDCgWBzb3J0YMOjwoDCgWBmaWx0ZXJgw6PCgMKBYGNsaWNrYMOjwoDCgWBkYmxDbGlja2Agw6XCj8KYw6XCisKoXG4gICAqL1xuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxTVENoYW5nZT4oKTtcbiAgLyoqIMOowqHCjMOlwo3ClcOlwofCu8OlwqTCmsOlwrDCkcOmwpfCtsOpwpXCv8OkwrnCi8OnwrHCu8OkwrjCusOlwo/CjMOlwofCu8OvwrzCiMOlwo3ClcOkwr3CjcOvwrzCmsOmwq/Cq8OnwqfCksOvwrzCicOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmAyMDBgICovXG4gIEBJbnB1dCgpXG4gIEBJbnB1dE51bWJlcigpXG4gIHJvd0NsaWNrVGltZSA9IDIwMDtcblxuICBASW5wdXQoKVxuICBASW5wdXRCb29sZWFuKClcbiAgcmVzcG9uc2l2ZUhpZGVIZWFkZXJGb290ZXI6IGJvb2xlYW47XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gY29tcGF0aWJsZVxuXG4gIC8qKlxuICAgKiBjaGVja2JveMOlwo/CmMOlwozClsOmwpfCtsOlwpvCnsOowrDCg8OvwrzCjMOlwo/CgsOmwpXCsMOkwrjCusOlwr3Ck8OlwonCjcOmwonCgMOpwoDCicOmwrjChcOlwo3ClVxuICAgKiBAZGVwcmVjYXRlZCDDpMK9wr/Dp8KUwqggYGNoYW5nZWAgw6bCm8K/w6TCu8KjXG4gICAqIEBkZXByZWNhdGVkIGFzIG9mIHYzXG4gICAqL1xuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgY2hlY2tib3hDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFNURGF0YVtdPigpO1xuICAvKipcbiAgICogcmFkaW/DpcKPwpjDpcKMwpbDpsKXwrbDpcKbwp7DqMKwwoPDr8K8wozDpcKPwoLDpsKVwrDDpMK4wrrDpcK9wpPDpcKJwo3DpsKJwoDDqcKAwolcbiAgICogQGRlcHJlY2F0ZWQgw6TCvcK/w6fClMKoIGBjaGFuZ2VgIMOmwpvCv8OkwrvCo1xuICAgKiBAZGVwcmVjYXRlZCBhcyBvZiB2M1xuICAgKi9cbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IHJhZGlvQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxTVERhdGE+KCk7XG4gIC8qKlxuICAgKiDDpsKOwpLDpcK6wo/DpcKbwp7DqMKwwoNcbiAgICogQGRlcHJlY2F0ZWQgw6TCvcK/w6fClMKoIGBjaGFuZ2VgIMOmwpvCv8OkwrvCo1xuICAgKiBAZGVwcmVjYXRlZCBhcyBvZiB2M1xuICAgKi9cbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IHNvcnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLyoqXG4gICAqIMOowr/Ch8OmwrvCpMOlwo/CmMOlwozClsOmwpfCtsOlwpvCnsOowrDCg1xuICAgKiBAZGVwcmVjYXRlZCDDpMK9wr/Dp8KUwqggYGNoYW5nZWAgw6bCm8K/w6TCu8KjXG4gICAqIEBkZXByZWNhdGVkIGFzIG9mIHYzXG4gICAqL1xuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgZmlsdGVyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxTVENvbHVtbj4oKTtcbiAgLyoqXG4gICAqIMOowqHCjMOlwo3ClcOlwofCu8OlwpvCnsOowrDCg1xuICAgKiBAZGVwcmVjYXRlZCDDpMK9wr/Dp8KUwqggYGNoYW5nZWAgw6bCm8K/w6TCu8KjXG4gICAqIEBkZXByZWNhdGVkIGFzIG9mIHYzXG4gICAqL1xuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgcm93Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPFNUQ2hhbmdlUm93Q2xpY2s+KCk7XG4gIC8qKlxuICAgKiDDqMKhwozDpcKPwozDpcKHwrvDpcKbwp7DqMKwwoNcbiAgICogQGRlcHJlY2F0ZWQgw6TCvcK/w6fClMKoIGBjaGFuZ2VgIMOmwpvCv8OkwrvCo1xuICAgKiBAZGVwcmVjYXRlZCBhcyBvZiB2M1xuICAgKi9cbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IHJvd0RibENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxTVENoYW5nZVJvd0NsaWNrPigpO1xuICAvLyNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIGNvZzogU1RDb25maWcsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGV4cG9ydFNydjogU1RFeHBvcnQsXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KEFMQUlOX0kxOE5fVE9LRU4pXG4gICAgaTE4blNydjogQWxhaW5JMThOU2VydmljZSxcbiAgICBwcml2YXRlIG1vZGFsSGVscGVyOiBNb2RhbEhlbHBlcixcbiAgICBwcml2YXRlIGRyYXdlckhlbHBlcjogRHJhd2VySGVscGVyLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnksXG4gICAgcHJpdmF0ZSBjb2x1bW5Tb3VyY2U6IFNUQ29sdW1uU291cmNlLFxuICAgIHByaXZhdGUgZGF0YVNvdXJjZTogU1REYXRhU291cmNlLFxuICAgIHByaXZhdGUgZGVsb25JMThuOiBEZWxvbkxvY2FsZVNlcnZpY2UsXG4gICkge1xuICAgIHRoaXMuZGVsb25JMThuJCA9IHRoaXMuZGVsb25JMThuLmNoYW5nZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5sb2NhbGUgPSB0aGlzLmRlbG9uSTE4bi5nZXREYXRhKCdzdCcpO1xuICAgICAgaWYgKHRoaXMuX2NvbHVtbnMubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLnBhZ2UgPSB0aGlzLmNsb25lUGFnZTtcbiAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkZWVwQ29weShjb2cpKTtcbiAgICBpZiAoaTE4blNydikge1xuICAgICAgdGhpcy5pMThuJCA9IGkxOG5TcnYuY2hhbmdlXG4gICAgICAgIC5waXBlKGZpbHRlcigoKSA9PiB0aGlzLl9jb2x1bW5zLmxlbmd0aCA+IDApKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMudXBkYXRlQ29sdW1ucygpKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXJUb3RhbCh0b3RhbDogc3RyaW5nLCByYW5nZTogc3RyaW5nW10pIHtcbiAgICByZXR1cm4gdGhpcy50b3RhbFRwbFxuICAgICAgPyB0aGlzLnRvdGFsVHBsXG4gICAgICAgICAgLnJlcGxhY2UoJ3t7dG90YWx9fScsIHRvdGFsKVxuICAgICAgICAgIC5yZXBsYWNlKCd7e3JhbmdlWzBdfX0nLCByYW5nZVswXSlcbiAgICAgICAgICAucmVwbGFjZSgne3tyYW5nZVsxXX19JywgcmFuZ2VbMV0pXG4gICAgICA6ICcnO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGFuZ2VFbWl0KHR5cGU6IFNUQ2hhbmdlVHlwZSwgZGF0YT86IGFueSkge1xuICAgIGNvbnN0IHJlczogU1RDaGFuZ2UgPSB7XG4gICAgICB0eXBlLFxuICAgICAgcGk6IHRoaXMucGksXG4gICAgICBwczogdGhpcy5wcyxcbiAgICAgIHRvdGFsOiB0aGlzLnRvdGFsLFxuICAgIH07XG4gICAgaWYgKGRhdGEgIT0gbnVsbCkge1xuICAgICAgcmVzW3R5cGVdID0gZGF0YTtcbiAgICB9XG4gICAgdGhpcy5jaGFuZ2UuZW1pdChyZXMpO1xuICB9XG5cbiAgLy8jcmVnaW9uIGRhdGFcblxuICBwcml2YXRlIF9sb2FkKCkge1xuICAgIGNvbnN0IHsgcGksIHBzLCBkYXRhLCByZXEsIHJlcywgcGFnZSwgdG90YWwsIG11bHRpU29ydCB9ID0gdGhpcztcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIHJldHVybiB0aGlzLmRhdGFTb3VyY2VcbiAgICAgIC5wcm9jZXNzKHtcbiAgICAgICAgcGksXG4gICAgICAgIHBzLFxuICAgICAgICB0b3RhbCxcbiAgICAgICAgZGF0YSxcbiAgICAgICAgcmVxLFxuICAgICAgICByZXMsXG4gICAgICAgIHBhZ2UsXG4gICAgICAgIGNvbHVtbnM6IHRoaXMuX2NvbHVtbnMsXG4gICAgICAgIG11bHRpU29ydCxcbiAgICAgIH0pXG4gICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQucGkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhpcy5waSA9IHJlc3VsdC5waTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdC50b3RhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aGlzLnRvdGFsID0gcmVzdWx0LnRvdGFsO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0LnBhZ2VTaG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRoaXMuX2lzUGFnaW5hdGlvbiA9IHJlc3VsdC5wYWdlU2hvdztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9kYXRhID0gcmVzdWx0Lmxpc3Q7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICAgICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHRoaXMuX3JlZkNoZWNrKCkpXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5lcnJvci5lbWl0KHsgdHlwZTogJ3JlcScsIGVycm9yIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogw6bCoMK5w6bCjcKuw6nCocK1w6fCoMKBw6nCh8KNw6bClsKww6XCisKgw6jCvcK9w6bClcKww6bCjcKuXG4gICAqXG4gICAqIEBwYXJhbSBwaSDDpsKMwofDpcKuwprDpcK9wpPDpcKJwo3DqcKhwrXDp8KgwoHDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgMWBcbiAgICogQHBhcmFtIGV4dHJhUGFyYW1zIMOpwofCjcOmwpbCsMOmwozCh8Olwq7CmiBgZXh0cmFQYXJhbXNgIMOlwoDCvFxuICAgKiBAcGFyYW0gb3B0aW9ucyDDqcKAwonDqcKhwrlcbiAgICovXG4gIGxvYWQocGkgPSAxLCBleHRyYVBhcmFtcz86IGFueSwgb3B0aW9ucz86IFNUTG9hZE9wdGlvbnMpIHtcbiAgICBpZiAocGkgIT09IC0xKSB0aGlzLnBpID0gcGk7XG4gICAgaWYgKHR5cGVvZiBleHRyYVBhcmFtcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMuX3JlcS5wYXJhbXMgPVxuICAgICAgICBvcHRpb25zICYmIG9wdGlvbnMubWVyZ2VcbiAgICAgICAgICA/IE9iamVjdC5hc3NpZ24odGhpcy5fcmVxLnBhcmFtcywgZXh0cmFQYXJhbXMpXG4gICAgICAgICAgOiBleHRyYVBhcmFtcztcbiAgICB9XG4gICAgdGhpcy5fY2hhbmdlKCdwaScpO1xuICB9XG5cbiAgLyoqXG4gICAqIMOpwofCjcOmwpbCsMOlwojCt8OmwpbCsMOlwr3Ck8OlwonCjcOpwqHCtVxuICAgKiBAcGFyYW0gZXh0cmFQYXJhbXMgw6nCh8KNw6bClsKww6bCjMKHw6XCrsKaIGBleHRyYVBhcmFtc2Agw6XCgMK8XG4gICAqL1xuICByZWxvYWQoZXh0cmFQYXJhbXM/OiBhbnksIG9wdGlvbnM/OiBTVExvYWRPcHRpb25zKSB7XG4gICAgdGhpcy5sb2FkKC0xLCBleHRyYVBhcmFtcywgb3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogw6nCh8KNw6fCvcKuw6TCuMKUw6nCh8KNw6bClsKww6jCrsK+w6fCvcKuIGBwaWAgw6TCuMK6IGAxYMOvwrzCjMOlwozChcOlwpDCq8OkwrvCpcOkwrjCi8OlwoDCvMOvwrzCmlxuICAgKiAtIGBjaGVja2Agw6bClcKww6bCjcKuXG4gICAqIC0gYHJhZGlvYCDDpsKVwrDDpsKNwq5cbiAgICogLSBgc29ydGAgw6bClcKww6bCjcKuXG4gICAqIC0gYGZpbGV0ZXJgIMOmwpXCsMOmwo3CrlxuICAgKlxuICAgKiBAcGFyYW0gZXh0cmFQYXJhbXMgw6nCh8KNw6bClsKww6bCjMKHw6XCrsKaIGBleHRyYVBhcmFtc2Agw6XCgMK8XG4gICAqL1xuICByZXNldChleHRyYVBhcmFtcz86IGFueSwgb3B0aW9ucz86IFNUTG9hZE9wdGlvbnMpIHtcbiAgICB0aGlzLmNsZWFyQ2hlY2soKVxuICAgICAgLmNsZWFyUmFkaW8oKVxuICAgICAgLmNsZWFyRmlsdGVyKClcbiAgICAgIC5jbGVhclNvcnQoKTtcbiAgICB0aGlzLmxvYWQoMSwgZXh0cmFQYXJhbXMsIG9wdGlvbnMpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdG9Ub3AoKSB7XG4gICAgaWYgKCF0aGlzLnBhZ2UudG9Ub3ApIHJldHVybjtcbiAgICBjb25zdCBlbCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICBpZiAodGhpcy5zY3JvbGwpIHtcbiAgICAgIGVsLnF1ZXJ5U2VsZWN0b3IoJy5hbnQtdGFibGUtYm9keScpLnNjcm9sbFRvKDAsIDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbC5zY3JvbGxJbnRvVmlldygpO1xuICAgIC8vIGZpeCBoZWFkZXIgaGVpZ2h0XG4gICAgdGhpcy5kb2MuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCAtPSB0aGlzLnBhZ2UudG9Ub3BPZmZzZXQ7XG4gIH1cblxuICBfY2hhbmdlKHR5cGU6ICdwaScgfCAncHMnKSB7XG4gICAgdGhpcy5fbG9hZCgpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5fdG9Ub3AoKTtcbiAgICB9KTtcbiAgICB0aGlzLmNoYW5nZUVtaXQodHlwZSk7XG4gIH1cblxuICBfY2xpY2soZTogRXZlbnQsIGl0ZW06IGFueSwgY29sOiBTVENvbHVtbikge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IHJlcyA9IGNvbC5jbGljayhpdGVtLCB0aGlzKTtcbiAgICBpZiAodHlwZW9mIHJlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwocmVzKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSByb3dDbGlja0NvdW50ID0gMDtcbiAgX3Jvd0NsaWNrKGU6IEV2ZW50LCBpdGVtOiBhbnksIGluZGV4OiBudW1iZXIpIHtcbiAgICBpZiAoKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5ub2RlTmFtZSA9PT0gJ0lOUFVUJykgcmV0dXJuO1xuICAgICsrdGhpcy5yb3dDbGlja0NvdW50O1xuICAgIGlmICh0aGlzLnJvd0NsaWNrQ291bnQgIT09IDEpIHJldHVybjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSB7IGUsIGl0ZW0sIGluZGV4IH07XG4gICAgICBpZiAodGhpcy5yb3dDbGlja0NvdW50ID09PSAxKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlRW1pdCgnY2xpY2snLCBkYXRhKTtcbiAgICAgICAgLy8gQGRlcHJlY2F0ZWQgYXMgb2YgdjNcbiAgICAgICAgdGhpcy5yb3dDbGljay5lbWl0KGRhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VFbWl0KCdkYmxDbGljaycsIGRhdGEpO1xuICAgICAgICAvLyBAZGVwcmVjYXRlZCBhcyBvZiB2M1xuICAgICAgICB0aGlzLnJvd0RibENsaWNrLmVtaXQoZGF0YSk7XG4gICAgICB9XG4gICAgICB0aGlzLnJvd0NsaWNrQ291bnQgPSAwO1xuICAgIH0sIHRoaXMucm93Q2xpY2tUaW1lKTtcbiAgfVxuXG4gIC8qKiDDp8KnwrvDqcKZwqTDpsKfwpDDqMKhwozDpsKVwrDDpsKNwq4gKi9cbiAgcmVtb3ZlUm93KGRhdGE6IFNURGF0YSB8IFNURGF0YVtdKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICBkYXRhID0gWyBkYXRhIF07XG4gICAgfVxuXG4gICAgKGRhdGEgYXMgU1REYXRhW10pLm1hcChpdGVtID0+IHRoaXMuX2RhdGEuaW5kZXhPZihpdGVtKSlcbiAgICAgICAgLmZpbHRlcihwb3MgPT4gcG9zICE9PSAtMSlcbiAgICAgICAgLmZvckVhY2gocG9zID0+IHRoaXMuX2RhdGEuc3BsaWNlKHBvcywgMSkpO1xuXG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICAvLyNlbmRyZWdpb25cblxuICAvLyNyZWdpb24gc29ydFxuXG4gIHNvcnQoY29sOiBTVENvbHVtbiwgaWR4OiBudW1iZXIsIHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodGhpcy5tdWx0aVNvcnQpIHtcbiAgICAgIGNvbC5fc29ydC5kZWZhdWx0ID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NvbHVtbnMuZm9yRWFjaChcbiAgICAgICAgKGl0ZW0sIGluZGV4KSA9PiAoaXRlbS5fc29ydC5kZWZhdWx0ID0gaW5kZXggPT09IGlkeCA/IHZhbHVlIDogbnVsbCksXG4gICAgICApO1xuICAgIH1cbiAgICB0aGlzLl9sb2FkKCk7XG4gICAgY29uc3QgcmVzID0ge1xuICAgICAgdmFsdWUsXG4gICAgICBtYXA6IHRoaXMuZGF0YVNvdXJjZS5nZXRSZXFTb3J0TWFwKHRoaXMubXVsdGlTb3J0LCB0aGlzLl9jb2x1bW5zKSxcbiAgICAgIGNvbHVtbjogY29sLFxuICAgIH07XG4gICAgdGhpcy5jaGFuZ2VFbWl0KCdzb3J0JywgcmVzKTtcbiAgICAvLyBAZGVwcmVjYXRlZCBhcyBvZiB2M1xuICAgIHRoaXMuc29ydENoYW5nZS5lbWl0KHJlcyk7XG4gIH1cblxuICBjbGVhclNvcnQoKSB7XG4gICAgdGhpcy5fY29sdW1ucy5mb3JFYWNoKGl0ZW0gPT4gKGl0ZW0uX3NvcnQuZGVmYXVsdCA9IG51bGwpKTtcbiAgfVxuXG4gIC8vI2VuZHJlZ2lvblxuXG4gIC8vI3JlZ2lvbiBmaWx0ZXJcblxuICBwcml2YXRlIGhhbmRsZUZpbHRlcihjb2w6IFNUQ29sdW1uKSB7XG4gICAgY29sLmZpbHRlci5kZWZhdWx0ID0gY29sLmZpbHRlci5tZW51cy5maW5kSW5kZXgodyA9PiB3LmNoZWNrZWQpICE9PSAtMTtcbiAgICB0aGlzLl9sb2FkKCk7XG4gICAgdGhpcy5jaGFuZ2VFbWl0KCdmaWx0ZXInLCBjb2wpO1xuICAgIC8vIEBkZXByZWNhdGVkIGFzIG9mIHYzXG4gICAgdGhpcy5maWx0ZXJDaGFuZ2UuZW1pdChjb2wpO1xuICB9XG5cbiAgX2ZpbHRlckNvbmZpcm0oY29sOiBTVENvbHVtbikge1xuICAgIHRoaXMuaGFuZGxlRmlsdGVyKGNvbCk7XG4gIH1cblxuICBfZmlsdGVyQ2xlYXIoY29sOiBTVENvbHVtbikge1xuICAgIGNvbC5maWx0ZXIubWVudXMuZm9yRWFjaChpID0+IChpLmNoZWNrZWQgPSBmYWxzZSkpO1xuICAgIHRoaXMuaGFuZGxlRmlsdGVyKGNvbCk7XG4gIH1cblxuICBfZmlsdGVyUmFkaW8oY29sOiBTVENvbHVtbiwgaXRlbTogU1RDb2x1bW5GaWx0ZXJNZW51LCBjaGVja2VkOiBib29sZWFuKSB7XG4gICAgY29sLmZpbHRlci5tZW51cy5mb3JFYWNoKGkgPT4gKGkuY2hlY2tlZCA9IGZhbHNlKSk7XG4gICAgaXRlbS5jaGVja2VkID0gY2hlY2tlZDtcbiAgfVxuXG4gIGNsZWFyRmlsdGVyKCkge1xuICAgIHRoaXMuX2NvbHVtbnNcbiAgICAgIC5maWx0ZXIodyA9PiB3LmZpbHRlciAmJiB3LmZpbHRlci5kZWZhdWx0ID09PSB0cnVlKVxuICAgICAgLmZvckVhY2goY29sID0+IHtcbiAgICAgICAgY29sLmZpbHRlci5kZWZhdWx0ID0gZmFsc2U7XG4gICAgICAgIGNvbC5maWx0ZXIubWVudXMuZm9yRWFjaChmID0+IChmLmNoZWNrZWQgPSBmYWxzZSkpO1xuICAgICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyNlbmRyZWdpb25cblxuICAvLyNyZWdpb24gY2hlY2tib3hcblxuICAvKiogw6bCuMKFw6nCmcKkw6bCicKAw6bCnMKJIGBjaGVja2JveGAgKi9cbiAgY2xlYXJDaGVjaygpOiB0aGlzIHtcbiAgICByZXR1cm4gdGhpcy5fY2hlY2tBbGwoZmFsc2UpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVmQ2hlY2soKTogdGhpcyB7XG4gICAgY29uc3QgdmFsaWREYXRhID0gdGhpcy5fZGF0YS5maWx0ZXIodyA9PiAhdy5kaXNhYmxlZCk7XG4gICAgY29uc3QgY2hlY2tlZExpc3QgPSB2YWxpZERhdGEuZmlsdGVyKHcgPT4gdy5jaGVja2VkID09PSB0cnVlKTtcbiAgICB0aGlzLl9hbGxDaGVja2VkID1cbiAgICAgIGNoZWNrZWRMaXN0Lmxlbmd0aCA+IDAgJiYgY2hlY2tlZExpc3QubGVuZ3RoID09PSB2YWxpZERhdGEubGVuZ3RoO1xuICAgIGNvbnN0IGFsbFVuQ2hlY2tlZCA9IHZhbGlkRGF0YS5ldmVyeSh2YWx1ZSA9PiAhdmFsdWUuY2hlY2tlZCk7XG4gICAgdGhpcy5faW5kZXRlcm1pbmF0ZSA9ICF0aGlzLl9hbGxDaGVja2VkICYmICFhbGxVbkNoZWNrZWQ7XG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBfY2hlY2tBbGwoY2hlY2tlZD86IGJvb2xlYW4pOiB0aGlzIHtcbiAgICBjaGVja2VkID0gdHlwZW9mIGNoZWNrZWQgPT09ICd1bmRlZmluZWQnID8gdGhpcy5fYWxsQ2hlY2tlZCA6IGNoZWNrZWQ7XG4gICAgdGhpcy5fZGF0YS5maWx0ZXIodyA9PiAhdy5kaXNhYmxlZCkuZm9yRWFjaChpID0+IChpLmNoZWNrZWQgPSBjaGVja2VkKSk7XG4gICAgcmV0dXJuIHRoaXMuX3JlZkNoZWNrKCkuX2NoZWNrTm90aWZ5KCk7XG4gIH1cblxuICBfY2hlY2tTZWxlY3Rpb24oaTogU1REYXRhLCB2YWx1ZTogYm9vbGVhbikge1xuICAgIGkuY2hlY2tlZCA9IHZhbHVlO1xuICAgIHJldHVybiB0aGlzLl9yZWZDaGVjaygpLl9jaGVja05vdGlmeSgpO1xuICB9XG5cbiAgX3Jvd1NlbGVjdGlvbihyb3c6IFNUQ29sdW1uU2VsZWN0aW9uKTogdGhpcyB7XG4gICAgcm93LnNlbGVjdCh0aGlzLl9kYXRhKTtcbiAgICByZXR1cm4gdGhpcy5fcmVmQ2hlY2soKS5fY2hlY2tOb3RpZnkoKTtcbiAgfVxuXG4gIF9jaGVja05vdGlmeSgpOiB0aGlzIHtcbiAgICBjb25zdCByZXMgPSB0aGlzLl9kYXRhLmZpbHRlcih3ID0+ICF3LmRpc2FibGVkICYmIHcuY2hlY2tlZCA9PT0gdHJ1ZSk7XG4gICAgdGhpcy5jaGFuZ2VFbWl0KCdjaGVja2JveCcsIHJlcyk7XG4gICAgLy8gQGRlcHJlY2F0ZWQgYXMgb2YgdjNcbiAgICB0aGlzLmNoZWNrYm94Q2hhbmdlLmVtaXQocmVzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vI2VuZHJlZ2lvblxuXG4gIC8vI3JlZ2lvbiByYWRpb1xuXG4gIC8qKiDDpsK4woXDqcKZwqTDpsKJwoDDpsKcwokgYHJhZGlvYCAqL1xuICBjbGVhclJhZGlvKCk6IHRoaXMge1xuICAgIHRoaXMuX2RhdGEuZmlsdGVyKHcgPT4gdy5jaGVja2VkKS5mb3JFYWNoKGl0ZW0gPT4gKGl0ZW0uY2hlY2tlZCA9IGZhbHNlKSk7XG4gICAgdGhpcy5jaGFuZ2VFbWl0KCdyYWRpbycsIG51bGwpO1xuICAgIC8vIEBkZXByZWNhdGVkIGFzIG9mIHYzXG4gICAgdGhpcy5yYWRpb0NoYW5nZS5lbWl0KG51bGwpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgX3JlZlJhZGlvKGNoZWNrZWQ6IGJvb2xlYW4sIGl0ZW06IFNURGF0YSk6IHRoaXMge1xuICAgIC8vIGlmIChpdGVtLmRpc2FibGVkID09PSB0cnVlKSByZXR1cm47XG4gICAgdGhpcy5fZGF0YS5maWx0ZXIodyA9PiAhdy5kaXNhYmxlZCkuZm9yRWFjaChpID0+IChpLmNoZWNrZWQgPSBmYWxzZSkpO1xuICAgIGl0ZW0uY2hlY2tlZCA9IGNoZWNrZWQ7XG4gICAgdGhpcy5jaGFuZ2VFbWl0KCdyYWRpbycsIGl0ZW0pO1xuICAgIC8vIEBkZXByZWNhdGVkIGFzIG9mIHYzXG4gICAgdGhpcy5yYWRpb0NoYW5nZS5lbWl0KGl0ZW0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8jZW5kcmVnaW9uXG5cbiAgLy8jcmVnaW9uIGJ1dHRvbnNcblxuICBfYnRuQ2xpY2soZTogRXZlbnQsIHJlY29yZDogYW55LCBidG46IFNUQ29sdW1uQnV0dG9uKSB7XG4gICAgaWYgKGUpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIGlmIChidG4udHlwZSA9PT0gJ21vZGFsJyB8fCBidG4udHlwZSA9PT0gJ3N0YXRpYycpIHtcbiAgICAgIGNvbnN0IG9iaiA9IHt9O1xuICAgICAgY29uc3QgeyBtb2RhbCB9ID0gYnRuO1xuICAgICAgb2JqW21vZGFsLnBhcmFtc05hbWVdID0gcmVjb3JkO1xuICAgICAgY29uc3Qgb3B0aW9uczogTW9kYWxIZWxwZXJPcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgbW9kYWwpO1xuICAgICAgKHRoaXMubW9kYWxIZWxwZXJbXG4gICAgICAgIGJ0bi50eXBlID09PSAnbW9kYWwnID8gJ2NyZWF0ZScgOiAnY3JlYXRlU3RhdGljJ1xuICAgICAgXSBhcyBhbnkpKFxuICAgICAgICBtb2RhbC5jb21wb25lbnQsXG4gICAgICAgIE9iamVjdC5hc3NpZ24ob2JqLCBtb2RhbC5wYXJhbXMgJiYgbW9kYWwucGFyYW1zKHJlY29yZCkpLFxuICAgICAgICBvcHRpb25zLFxuICAgICAgKVxuICAgICAgICAucGlwZShmaWx0ZXIodyA9PiB0eXBlb2YgdyAhPT0gJ3VuZGVmaW5lZCcpKVxuICAgICAgICAuc3Vic2NyaWJlKHJlcyA9PiB0aGlzLmJ0bkNhbGxiYWNrKHJlY29yZCwgYnRuLCByZXMpKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKGJ0bi50eXBlID09PSAnZHJhd2VyJykge1xuICAgICAgY29uc3Qgb2JqID0ge307XG4gICAgICBjb25zdCB7IGRyYXdlciB9ID0gYnRuO1xuICAgICAgb2JqW2RyYXdlci5wYXJhbXNOYW1lXSA9IHJlY29yZDtcbiAgICAgIHRoaXMuZHJhd2VySGVscGVyXG4gICAgICAgIC5jcmVhdGUoXG4gICAgICAgICAgZHJhd2VyLnRpdGxlLFxuICAgICAgICAgIGRyYXdlci5jb21wb25lbnQsXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihvYmosIGRyYXdlci5wYXJhbXMgJiYgZHJhd2VyLnBhcmFtcyhyZWNvcmQpKSxcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBkcmF3ZXIpLFxuICAgICAgICApXG4gICAgICAgIC5waXBlKGZpbHRlcih3ID0+IHR5cGVvZiB3ICE9PSAndW5kZWZpbmVkJykpXG4gICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHRoaXMuYnRuQ2FsbGJhY2socmVjb3JkLCBidG4sIHJlcykpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoYnRuLnR5cGUgPT09ICdsaW5rJykge1xuICAgICAgY29uc3QgY2xpY2tSZXMgPSB0aGlzLmJ0bkNhbGxiYWNrKHJlY29yZCwgYnRuKTtcbiAgICAgIGlmICh0eXBlb2YgY2xpY2tSZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoY2xpY2tSZXMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmJ0bkNhbGxiYWNrKHJlY29yZCwgYnRuKTtcbiAgfVxuXG4gIHByaXZhdGUgYnRuQ2FsbGJhY2socmVjb3JkOiBhbnksIGJ0bjogU1RDb2x1bW5CdXR0b24sIG1vZGFsPzogYW55KSB7XG4gICAgaWYgKCFidG4uY2xpY2spIHJldHVybjtcbiAgICBpZiAodHlwZW9mIGJ0bi5jbGljayA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHN3aXRjaCAoYnRuLmNsaWNrKSB7XG4gICAgICAgIGNhc2UgJ2xvYWQnOlxuICAgICAgICAgIHRoaXMubG9hZCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdyZWxvYWQnOlxuICAgICAgICAgIHRoaXMucmVsb2FkKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBidG4uY2xpY2socmVjb3JkLCBtb2RhbCwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgX2J0blRleHQocmVjb3JkOiBhbnksIGJ0bjogU1RDb2x1bW5CdXR0b24pIHtcbiAgICBpZiAoYnRuLmZvcm1hdCkgcmV0dXJuIGJ0bi5mb3JtYXQocmVjb3JkLCBidG4pO1xuICAgIHJldHVybiBidG4udGV4dDtcbiAgfVxuXG4gIF92YWxpZEJ0bnMoaXRlbTogU1REYXRhLCBjb2w6IFNUQ29sdW1uKTogU1RDb2x1bW5CdXR0b25bXSB7XG4gICAgcmV0dXJuIGNvbC5idXR0b25zLmZpbHRlcihidG4gPT4gYnRuLmlpZihpdGVtLCBidG4sIGNvbCkpO1xuICB9XG5cbiAgLy8jZW5kcmVnaW9uXG5cbiAgLy8jcmVnaW9uIGV4cG9ydFxuXG4gIC8qKlxuICAgKiDDpcKvwrzDpcKHwrrDpcK9wpPDpcKJwo3DqcKhwrXDr8K8wozDp8Khwq7DpMK/wp3DpcK3wrLDp8K7wo/DpsKzwqjDpcKGwowgYFhsc3hNb2R1bGVgXG4gICAqIEBwYXJhbSBuZXdEYXRhIMOpwofCjcOmwpbCsMOmwozCh8Olwq7CmsOmwpXCsMOmwo3CrsOvwrzCjMOkwr7Ci8OlwqbCgsOlwrjCjMOmwpzCm8Olwq/CvMOlwofCusOmwonCgMOmwpzCicOmwpXCsMOmwo3CrsOpwp3CnsOlwrjCuMOmwpzCicOnwpTCqFxuICAgKiBAcGFyYW0gb3B0IMOpwqLCncOlwqTClsOlwo/CgsOmwpXCsFxuICAgKi9cbiAgZXhwb3J0KG5ld0RhdGE/OiBhbnlbXSwgb3B0PzogU1RFeHBvcnRPcHRpb25zKSB7XG4gICAgKG5ld0RhdGEgPyBvZihuZXdEYXRhKSA6IG9mKHRoaXMuX2RhdGEpKS5zdWJzY3JpYmUoKHJlczogYW55W10pID0+XG4gICAgICB0aGlzLmV4cG9ydFNydi5leHBvcnQoXG4gICAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdCwgPFNURXhwb3J0T3B0aW9ucz57XG4gICAgICAgICAgX2Q6IHJlcyxcbiAgICAgICAgICBfYzogdGhpcy5fY29sdW1ucyxcbiAgICAgICAgfSksXG4gICAgICApLFxuICAgICk7XG4gIH1cblxuICAvLyNlbmRyZWdpb25cblxuICBwcml2YXRlIHVwZGF0ZUNvbHVtbnMoKSB7XG4gICAgdGhpcy5fY29sdW1ucyA9IHRoaXMuY29sdW1uU291cmNlLnByb2Nlc3ModGhpcy5jb2x1bW5zKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0Q2xhc3MoKSB7XG4gICAgdXBkYXRlSG9zdENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5yZW5kZXJlciwge1xuICAgICAgW2BzdGBdOiB0cnVlLFxuICAgICAgW2BzdF9fcC0ke3RoaXMucGFnZS5wbGFjZW1lbnR9YF06IHRoaXMucGFnZS5wbGFjZW1lbnQsXG4gICAgICBbYGFudC10YWJsZS1yZXBfX2hpZGUtaGVhZGVyLWZvb3RlcmBdOiB0aGlzLnJlc3BvbnNpdmVIaWRlSGVhZGVyRm9vdGVyLFxuICAgIH0pO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuY29sdW1uU291cmNlLnJlc3RvcmVBbGxSZW5kZXIodGhpcy5fY29sdW1ucyk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhcbiAgICBjaGFuZ2VzOiB7IFtQIGluIGtleW9mIHRoaXNdPzogU2ltcGxlQ2hhbmdlIH0gJiBTaW1wbGVDaGFuZ2VzLFxuICApOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5jb2x1bW5zKSB7XG4gICAgICB0aGlzLnVwZGF0ZUNvbHVtbnMoKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuZGF0YSAmJiBjaGFuZ2VzLmRhdGEuY3VycmVudFZhbHVlKSB7XG4gICAgICB0aGlzLl9sb2FkKCk7XG4gICAgfVxuICAgIHRoaXMuc2V0Q2xhc3MoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVsb25JMThuJC51bnN1YnNjcmliZSgpO1xuICAgIGlmICh0aGlzLmkxOG4kKSB0aGlzLmkxOG4kLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOZ1pvcnJvQW50ZE1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xuXG5pbXBvcnQgeyBEZWxvblV0aWxNb2R1bGUgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBEZWxvbkFDTE1vZHVsZSB9IGZyb20gJ0BkZWxvbi9hY2wnO1xuXG5pbXBvcnQgeyBTVENvbXBvbmVudCB9IGZyb20gJy4vdGFibGUuY29tcG9uZW50JztcbmltcG9ydCB7IFNUUm93RGlyZWN0aXZlIH0gZnJvbSAnLi90YWJsZS1yb3cuZGlyZWN0aXZlJztcbmltcG9ydCB7IFNUQ29uZmlnIH0gZnJvbSAnLi90YWJsZS5jb25maWcnO1xuXG5jb25zdCBDT01QT05FTlRTID0gW1NUQ29tcG9uZW50LCBTVFJvd0RpcmVjdGl2ZV07XG5cbkBOZ01vZHVsZSh7XG4gIHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBEZWxvblV0aWxNb2R1bGUsXG4gICAgRGVsb25BQ0xNb2R1bGUsXG4gICAgTmdab3Jyb0FudGRNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogWy4uLkNPTVBPTkVOVFNdLFxuICBleHBvcnRzOiBbLi4uQ09NUE9ORU5UU10sXG59KVxuZXhwb3J0IGNsYXNzIFNUTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHsgbmdNb2R1bGU6IFNUTW9kdWxlLCBwcm92aWRlcnM6IFtTVENvbmZpZ10gfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJEaXJlY3RpdmUiLCJUZW1wbGF0ZVJlZiIsIkhvc3QiLCJJbnB1dCIsImFjbCIsInRzbGliXzEuX192YWx1ZXMiLCJkZWVwQ29weSIsIkFDTFNlcnZpY2UiLCJPcHRpb25hbCIsIkluamVjdCIsIkFMQUlOX0kxOE5fVE9LRU4iLCJtYXAiLCJkZWVwR2V0IiwiY2F0Y2hFcnJvciIsIm9mIiwiX0h0dHBDbGllbnQiLCJDTkN1cnJlbmN5UGlwZSIsIkRhdGVQaXBlIiwiWU5QaXBlIiwiRGVjaW1hbFBpcGUiLCJEb21TYW5pdGl6ZXIiLCJYbHN4U2VydmljZSIsInJvdXRlciIsIkV2ZW50RW1pdHRlciIsImZpbHRlciIsInRvQm9vbGVhbiIsInVwZGF0ZUhvc3RDbGFzcyIsIkNvbXBvbmVudCIsIkNoYW5nZURldGVjdGlvblN0cmF0ZWd5IiwiQ2hhbmdlRGV0ZWN0b3JSZWYiLCJSb3V0ZXIiLCJFbGVtZW50UmVmIiwiUmVuZGVyZXIyIiwiTW9kYWxIZWxwZXIiLCJEcmF3ZXJIZWxwZXIiLCJET0NVTUVOVCIsIkRlbG9uTG9jYWxlU2VydmljZSIsIk91dHB1dCIsIklucHV0TnVtYmVyIiwiSW5wdXRCb29sZWFuIiwiTmdNb2R1bGUiLCJOT19FUlJPUlNfU0NIRU1BIiwiQ29tbW9uTW9kdWxlIiwiRm9ybXNNb2R1bGUiLCJEZWxvblV0aWxNb2R1bGUiLCJEZWxvbkFDTE1vZHVsZSIsIk5nWm9ycm9BbnRkTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBQTs7Ozs7Ozs7Ozs7Ozs7QUFjQSx3QkFvQzJCLFVBQVUsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUk7UUFDcEQsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLEdBQUcsSUFBSSxLQUFLLElBQUksR0FBRyxJQUFJLEdBQUcsTUFBTSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQzdILElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxJQUFJLE9BQU8sT0FBTyxDQUFDLFFBQVEsS0FBSyxVQUFVO1lBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFB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