/**
 * @license ng-alain(cipchk@qq.com) v2.0.0-rc.2-b78f38a
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
                        template: "<nz-table [nzData]=\"_data\"\n  [(nzPageIndex)]=\"pi\" (nzPageIndexChange)=\"_change('pi')\"\n  [(nzPageSize)]=\"ps\" (nzPageSizeChange)=\"_change('ps')\"\n  [nzTotal]=\"total\"\n  [nzShowPagination]=\"_isPagination\"\n  [nzFrontPagination]=\"false\"\n  [nzBordered]=\"bordered\"\n  [nzSize]=\"size\"\n  [nzLoading]=\"loading\"\n  [nzLoadingDelay]=\"loadingDelay\"\n  [nzScroll]=\"scroll\"\n  [nzTitle]=\"header\" [nzFooter]=\"footer\" [nzNoResult]=\"noResult\"\n  [nzPageSizeOptions]=\"page.pageSizes\"\n  [nzShowQuickJumper]=\"page.showQuickJumper\"\n  [nzShowSizeChanger]=\"page.showSize\"\n  [nzShowTotal]=\"totalTpl\">\n  <thead class=\"st__head\">\n    <tr>\n      <th *ngIf=\"expand\" [nzShowExpand]=\"expand\"></th>\n      <th *ngFor=\"let c of _columns; let index=index\" [nzWidth]=\"c.width\" [nzLeft]=\"c._left\" [nzRight]=\"c._right\" [ngClass]=\"c.className\"\n        [attr.colspan]=\"c.colSpan\" [attr.data-col]=\"c.indexKey\"\n        [nzShowSort]=\"c._sort.enabled\" [nzSort]=\"c._sort.default\" (nzSortChange)=\"sort(c, index, $event)\"\n        nzCustomFilter>\n        <ng-template #renderTitle [ngTemplateOutlet]=\"c.__renderTitle\" [ngTemplateOutletContext]=\"{$implicit: c, index: index }\"></ng-template>\n        <ng-container *ngIf=\"!c.__renderTitle; else renderTitle\">\n          <ng-container [ngSwitch]=\"c.type\">\n            <ng-container *ngSwitchCase=\"'checkbox'\">\n              <label nz-checkbox class=\"st__checkall\" [(ngModel)]=\"_allChecked\" [nzIndeterminate]=\"_indeterminate\" (ngModelChange)=\"_checkAll()\"></label>\n              <nz-dropdown *ngIf=\"c.selections.length\" class=\"st__selection\">\n                <span nz-dropdown>\n                  <i nz-icon type=\"down\"></i>\n                </span>\n                <ul nz-menu>\n                  <li nz-menu-item *ngFor=\"let rw of c.selections\" (click)=\"_rowSelection(rw)\" [innerHTML]=\"rw.text\">\n                  </li>\n                </ul>\n              </nz-dropdown>\n            </ng-container>\n            <ng-container *ngSwitchDefault>\n              <span [innerHTML]=\"c.title\"></span>\n            </ng-container>\n          </ng-container>\n          <nz-dropdown *ngIf=\"c.filter\"\n            class=\"st__filter\" nzTrigger=\"click\" [hasFilterButton]=\"true\" [nzClickHide]=\"false\"\n            [(nzVisible)]=\"c.filter.visible\">\n            <i nz-icon [type]=\"c.filter.icon\" theme=\"fill\"\n              [class.ant-table-filter-selected]=\"c.filter.default\"\n              [class.ant-table-filter-open]=\"c.filter.visible\" nz-dropdown></i>\n            <ul nz-menu>\n              <ng-container *ngIf=\"c.filter.multiple\">\n                <li nz-menu-item *ngFor=\"let filter of c.filter.menus\">\n                  <label nz-checkbox [(ngModel)]=\"filter.checked\">{{filter.text}}</label>\n                </li>\n              </ng-container>\n              <ng-container *ngIf=\"!c.filter.multiple\">\n                <li nz-menu-item *ngFor=\"let filter of c.filter.menus\">\n                  <label nz-radio [ngModel]=\"filter.checked\" (ngModelChange)=\"_filterRadio(c, filter, $event)\">{{filter.text}}</label>\n                </li>\n              </ng-container>\n            </ul>\n            <div class=\"ant-table-filter-dropdown-btns\">\n              <a class=\"ant-table-filter-dropdown-link confirm\" (click)=\"c.filter.visible = false\">\n                <span (click)=\"_filterConfirm(c)\">{{c.filter.confirmText}}</span>\n              </a>\n              <a class=\"ant-table-filter-dropdown-link clear\" (click)=\"c.filter.visible = false\">\n                <span (click)=\"_filterClear(c)\">{{c.filter.clearText}}</span>\n              </a>\n            </div>\n          </nz-dropdown>\n        </ng-container>\n      </th>\n    </tr>\n  </thead>\n  <tbody class=\"st__body\">\n    <ng-container *ngFor=\"let i of _data; let index=index\">\n      <tr [attr.data-index]=\"index\" (click)=\"_rowClick($event, i, index)\">\n        <td *ngIf=\"expand\" [nzShowExpand]=\"expand\" [(nzExpand)]=\"i.expand\"></td>\n        <td *ngFor=\"let c of _columns; let cIdx=index\" [nzLeft]=\"c._left\" [nzRight]=\"c._right\" [nzCheckbox]=\"c.type === 'checkbox'\" [ngClass]=\"c.className\"\n          [attr.colspan]=\"c.colSpan\">\n          <span class=\"ant-table-rep__title\" [innerHTML]=\"c.title\"></span>\n          <ng-template #render [ngTemplateOutlet]=\"c.__render\" [ngTemplateOutletContext]=\"{$implicit: i, index: index, column: c }\"></ng-template>\n          <ng-container *ngIf=\"!c.__render; else render\">\n            <ng-container *ngIf=\"c.index\" [ngSwitch]=\"c.type\">\n              <ng-container *ngSwitchCase=\"'checkbox'\">\n                <label nz-checkbox [nzDisabled]=\"i.disabled\" [ngModel]=\"i.checked\" (ngModelChange)=\"_checkSelection(i, $event)\"></label>\n              </ng-container>\n              <ng-container *ngSwitchCase=\"'radio'\">\n                <label nz-radio [nzDisabled]=\"i.disabled\" [ngModel]=\"i.checked\" (ngModelChange)=\"_refRadio($event, i)\"></label>\n              </ng-container>\n              <ng-container *ngSwitchCase=\"'link'\">\n                <a (click)=\"_click($event, i, c)\" [innerHTML]=\"i._values[cIdx]\"></a>\n              </ng-container>\n              <ng-container *ngSwitchCase=\"'tag'\">\n                <nz-tag [nzColor]=\"c.tag[i._values[cIdx]].color\">{{c.tag[i._values[cIdx]].text || i._values[cIdx]}}</nz-tag>\n              </ng-container>\n              <ng-container *ngSwitchCase=\"'badge'\">\n                <nz-badge [nzStatus]=\"c.badge[i._values[cIdx]].color\" [nzText]=\"c.badge[i._values[cIdx]].text || i._values[cIdx]\"></nz-badge>\n              </ng-container>\n              <span *ngSwitchDefault [innerHTML]=\"i._values[cIdx]\"></span>\n            </ng-container>\n            <ng-container *ngFor=\"let btn of c.buttons; let last=last\">\n              <ng-container *ngIf=\"btn.iif(i, btn, c)\" [ngSwitch]=\"btn._type\">\n                <ng-container *ngSwitchCase=\"'pop'\">\n                  <nz-popconfirm [nzTitle]=\"btn.popTitle\" (nzOnConfirm)=\"_btnClick($event, i, btn)\">\n                    <a nz-popconfirm *ngIf=\"btn._type !== 'icon'\" [innerHTML]=\"_btnText(i, btn)\"></a>\n                    <a nz-popconfirm *ngIf=\"btn._type === 'icon'\">\n                      <i nz-icon [type]=\"btn.icon.type\" [theme]=\"btn.icon.theme\" [spin]=\"btn.icon.spin\" [twoToneColor]=\"btn.icon.twoToneColor\"\n                        [iconfont]=\"btn.icon.iconfont\"></i>\n                    </a>\n                  </nz-popconfirm>\n                </ng-container>\n                <ng-container *ngSwitchCase=\"'sub'\">\n                  <nz-dropdown>\n                    <a class=\"ant-dropdown-link\" nz-dropdown>\n                      <span [innerHTML]=\"_btnText(i, btn)\"></span>\n                      <i nz-icon type=\"down\"></i>\n                    </a>\n                    <ul nz-menu>\n                      <ng-container *ngFor=\"let subBtn of btn.children\">\n                        <li nz-menu-item *ngIf=\"subBtn.iif(i, subBtn, c)\">\n                          <ng-container [ngSwitch]=\"subBtn._type\">\n                            <ng-container *ngSwitchCase=\"'pop'\">\n                              <nz-popconfirm [nzTitle]=\"subBtn.popTitle\" (nzOnConfirm)=\"_btnClick($event, i, subBtn)\">\n                                <span nz-popconfirm [innerHTML]=\"_btnText(i, subBtn)\"></span>\n                              </nz-popconfirm>\n                            </ng-container>\n                            <span *ngSwitchDefault (click)=\"_btnClick($event, i, subBtn)\" [innerHTML]=\"_btnText(i, subBtn)\"></span>\n                          </ng-container>\n                        </li>\n                      </ng-container>\n                    </ul>\n                  </nz-dropdown>\n                </ng-container>\n                <ng-container *ngSwitchDefault>\n                  <a *ngIf=\"btn._type !== 'icon'\" (click)=\"_btnClick($event, i, btn)\" [innerHTML]=\"_btnText(i, btn)\"></a>\n                  <a *ngIf=\"btn._type === 'icon'\" (click)=\"_btnClick($event, i, btn)\">\n                    <i nz-icon [type]=\"btn.icon.type\" [theme]=\"btn.icon.theme\" [spin]=\"btn.icon.spin\" [twoToneColor]=\"btn.icon.twoToneColor\"\n                      [iconfont]=\"btn.icon.iconfont\"></i>\n                  </a>\n                </ng-container>\n                <nz-divider *ngIf=\"!last\" nzType=\"vertical\"></nz-divider>\n              </ng-container>\n            </ng-container>\n            <ng-template [ngIf]=\"!c.__renderExpanded\" [ngTemplateOutlet]=\"c.__renderExpanded\" [ngTemplateOutletContext]=\"{$implicit: i, index: index, column: c }\"></ng-template>\n          </ng-container>\n        </td>\n      </tr>\n      <tr [nzExpand]=\"i.expand\">\n        <td></td>\n        <td [attr.colspan]=\"_columns.length\">\n          <ng-template [ngTemplateOutlet]=\"expand\" [ngTemplateOutletContext]=\"{$implicit: i, index: index }\"></ng-template>\n        </td>\n      </tr>\n    </ng-container>\n    <ng-template [ngIf]=\"!loading\" [ngTemplateOutlet]=\"body\"></ng-template>\n  </tbody>\n  <ng-template #totalTpl let-range=\"range\" let-total>{{ renderTotal(total, range) }}</ng-template>\n</nz-table>\n",
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm5nOi8vQGRlbG9uL2FiYy90YWJsZS90YWJsZS1yb3cuZGlyZWN0aXZlLnRzIiwibmc6Ly9AZGVsb24vYWJjL3RhYmxlL3RhYmxlLmNvbmZpZy50cyIsIm5nOi8vQGRlbG9uL2FiYy90YWJsZS90YWJsZS1jb2x1bW4tc291cmNlLnRzIiwibmc6Ly9AZGVsb24vYWJjL3RhYmxlL3RhYmxlLWRhdGEtc291cmNlLnRzIiwibmc6Ly9AZGVsb24vYWJjL3RhYmxlL3RhYmxlLWV4cG9ydC50cyIsIm5nOi8vQGRlbG9uL2FiYy90YWJsZS90YWJsZS5jb21wb25lbnQudHMiLCJuZzovL0BkZWxvbi9hYmMvdGFibGUvdGFibGUubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBJbnB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIE9uSW5pdCxcbiAgSW5qZWN0YWJsZSxcbiAgSG9zdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTVFJvd1NvdXJjZSB7XG4gIHByaXZhdGUgdGl0bGVzOiB7IFtrZXk6IHN0cmluZ106IFRlbXBsYXRlUmVmPGFueT4gfSA9IHt9O1xuICBwcml2YXRlIHJvd3M6IHsgW2tleTogc3RyaW5nXTogVGVtcGxhdGVSZWY8YW55PiB9ID0ge307XG5cbiAgYWRkKHR5cGU6IHN0cmluZywgcGF0aDogc3RyaW5nLCByZWY6IFRlbXBsYXRlUmVmPGFueT4pIHtcbiAgICB0aGlzW3R5cGUgPT09ICd0aXRsZScgPyAndGl0bGVzJyA6ICdyb3dzJ11bcGF0aF0gPSByZWY7XG4gIH1cblxuICBnZXRUaXRsZShwYXRoOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy50aXRsZXNbcGF0aF07XG4gIH1cblxuICBnZXRSb3cocGF0aDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMucm93c1twYXRoXTtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbc3Qtcm93XScgfSlcbmV4cG9ydCBjbGFzcyBTVFJvd0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgnc3Qtcm93JylcbiAgaWQ6IHN0cmluZztcblxuICBASW5wdXQoKVxuICB0eXBlOiAndGl0bGUnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVmOiBUZW1wbGF0ZVJlZjxhbnk+LFxuICAgIEBIb3N0KCkgcHJpdmF0ZSBzb3VyY2U6IFNUUm93U291cmNlLFxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zb3VyY2UuYWRkKHRoaXMudHlwZSwgdGhpcy5pZCwgdGhpcy5yZWYpO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBTVE11bHRpU29ydCxcbiAgU1RSZXEsXG4gIFNUUmVzLFxuICBTVFBhZ2UsXG4gIFNUQ29sdW1uQnV0dG9uTW9kYWxDb25maWcsXG4gIFNUQ29sdW1uQnV0dG9uRHJhd2VyQ29uZmlnLFxuICBTVEljb24sXG59IGZyb20gJy4vdGFibGUuaW50ZXJmYWNlcyc7XG5cbmV4cG9ydCBjbGFzcyBTVENvbmZpZyB7XG4gIC8qKlxuICAgKiDDqMK1wrfDpcKnwovDqcKhwrXDp8KgwoHDr8K8wozDqcK7wpjDqMKuwqTDpMK4wrrDr8K8wppgMWBcbiAgICovXG4gIHBpPzogbnVtYmVyO1xuICAvKipcbiAgICogw6bCr8KPw6nCocK1w6bClcKww6nCh8KPw6/CvMKMw6XCvcKTw6jCrsK+w6fCvcKuw6TCuMK6IGAwYCDDqMKhwqjDp8KkwrrDpMK4wo3DpcKIwobDqcKhwrXDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgMTBgXG4gICAqL1xuICBwcz86IG51bWJlcjtcbiAgLyoqXG4gICAqIMOmwpjCr8OlwpDCpsOmwpjCvsOnwqTCusOowr7CucOmwqHChlxuICAgKi9cbiAgYm9yZGVyZWQ/OiBib29sZWFuO1xuICAvKipcbiAgICogdGFibGXDpcKkwqfDpcKwwo9cbiAgICovXG4gIHNpemU/OiAnc21hbGwnIHwgJ21pZGRsZScgfCAnZGVmYXVsdCcgPSAnZGVmYXVsdCc7XG4gIC8qKlxuICAgKiDDpsKYwq/DpcKQwqbDqcKawpDDqMKXwo/DpcKkwrTDpcKSwozDpcKwwr7Dr8K8wozDpcK9wpPDpcKwwo/DpcKxwo/DpcK5wpXDpMK4wovDpsKJwo3DpsKYwr7Dp8KkwrrDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgZmFsc2VgXG4gICAqL1xuICByZXNwb25zaXZlSGlkZUhlYWRlckZvb3Rlcj8gPSBmYWxzZTtcbiAgLyoqIMOowq/Ct8OmwrHCgsOkwr3Ck8OpwoXCjcOnwr3CriAqL1xuICByZXE/OiBTVFJlcSA9IHtcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIGFsbEluQm9keTogZmFsc2UsXG4gICAgcmVOYW1lOiB7IHBpOiAncGknLCBwczogJ3BzJyB9LFxuICB9O1xuICAvKiogw6jCv8KUw6XCm8Kew6TCvcKTw6nChcKNw6fCvcKuICovXG4gIHJlcz86IFNUUmVzID0ge1xuICAgIHJlTmFtZTogeyBsaXN0OiBbJ2xpc3QnXSwgdG90YWw6IFsndG90YWwnXSB9LFxuICB9O1xuICAvKiogw6jCv8KUw6XCm8Kew6TCvcKTw6nChcKNw6fCvcKuICovXG4gIHBhZ2U/OiBTVFBhZ2UgPSB7XG4gICAgZnJvbnQ6IHRydWUsXG4gICAgemVyb0luZGV4ZWQ6IGZhbHNlLFxuICAgIHBsYWNlbWVudDogJ3JpZ2h0JyxcbiAgICBzaG93OiB0cnVlLFxuICAgIHNob3dTaXplOiBmYWxzZSxcbiAgICBwYWdlU2l6ZXM6IFsxMCwgMjAsIDMwLCA0MCwgNTBdLFxuICAgIHNob3dRdWlja0p1bXBlcjogZmFsc2UsXG4gICAgdG90YWw6IHRydWUsXG4gICAgaW5kZXhSZXNldDogdHJ1ZSxcbiAgICB0b1RvcDogdHJ1ZSxcbiAgICB0b1RvcE9mZnNldDogMTAwLFxuICB9O1xuICAvKipcbiAgICogw6nCh8KNw6XCkcK9w6XCkMKNw6bCjsKSw6XCusKPw6XCgMK8w6/CvMKMYGNvbHVtbnNgIMOnwprChMOpwofCjcOlwpHCvcOlwpDCjcOpwqvCmMOkwrrCjsOlwrHCnsOmwoDCp1xuICAgKi9cbiAgc29ydFJlTmFtZT86IHsgYXNjZW5kPzogc3RyaW5nOyBkZXNjZW5kPzogc3RyaW5nIH07XG4gIC8qKlxuICAgKiDDpsKYwq/DpcKQwqbDpcKkwprDpsKOwpLDpcK6wo/Dr8K8wozDpcK9wpMgYHNvcnRgIMOlwqTCmsOkwrjCqsOnwpvCuMOlwpDCjMOlwoDCvMOmwpfCtsOowofCqsOlworCqMOlwpDCiMOlwrnCtsOvwrzCjMOlwrvCusOowq7CrsOlwpDCjsOnwqvCr8OmwpTCr8OmwozCgcOmwpfCtsOkwr3Cv8OnwpTCqFxuICAgKi9cbiAgbXVsdGlTb3J0PzogYm9vbGVhbiB8IFNUTXVsdGlTb3J0ID0gZmFsc2U7XG4gIC8qKlxuICAgKiDDpsKMwonDqcKSwq7DpsKowqHDpsKAwoHDpsKhwobDqcKFwo3Dp8K9wq5cbiAgICovXG4gIG1vZGFsPzogU1RDb2x1bW5CdXR0b25Nb2RhbENvbmZpZyA9IHtcbiAgICBwYXJhbXNOYW1lOiAncmVjb3JkJyxcbiAgICBzaXplOiAnbGcnLFxuICAgIGV4YWN0OiB0cnVlLFxuICB9O1xuICAvKipcbiAgICogw6bCjMKJw6nCksKuw6bCisK9w6XCscKJw6nChcKNw6fCvcKuXG4gICAqL1xuICBkcmF3ZXI/OiBTVENvbHVtbkJ1dHRvbkRyYXdlckNvbmZpZyA9IHtcbiAgICBwYXJhbXNOYW1lOiAncmVjb3JkJyxcbiAgICBzaXplOiAnbWQnLFxuICAgIGZvb3RlcjogdHJ1ZSxcbiAgICBmb290ZXJIZWlnaHQ6IDU1LFxuICB9O1xuICAvKipcbiAgICogw6bCsMKUw6bCs8Khw6fCocKuw6jCrsKkw6bCocKGw6XChsKFw6XCrsK5XG4gICAqL1xuICBwb3BUaXRsZT8gPSAnw6fCocKuw6jCrsKkw6XCiMKgw6nCmcKkw6XCkMKXw6/CvMKfJztcbiAgLyoqXG4gICAqIMOowqHCjMOlwo3ClcOlwofCu8OlwqTCmsOlwrDCkcOmwpfCtsOpwpXCv8OkwrnCi8OnwrHCu8OkwrjCusOlwo/CjMOlwofCu8OvwrzCiMOlwo3ClcOkwr3CjcOvwrzCmsOmwq/Cq8OnwqfCksOvwrzCicOvwrzCjMOpwrvCmMOowq7CpMOvwrzCmmAyMDBgXG4gICAqL1xuICByb3dDbGlja1RpbWU/ID0gMjAwO1xuICAvKipcbiAgICogw6jCv8KHw6bCu8Kkw6bCjMKJw6nCksKuw6fCocKuw6jCrsKkw6bClsKHw6bCnMKsw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYMOnwqHCrsOowq7CpGBcbiAgICovXG4gIGZpbHRlckNvbmZpcm1UZXh0PyA9ICfDp8Khwq7DqMKuwqQnO1xuICAvKipcbiAgICogw6jCv8KHw6bCu8Kkw6bCjMKJw6nCksKuw6nCh8KNw6fCvcKuw6bClsKHw6bCnMKsw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYMOpwofCjcOnwr3CrmBcbiAgICovXG4gIGZpbHRlckNsZWFyVGV4dD8gPSAnw6nCh8KNw6fCvcKuJztcbiAgLyoqXG4gICAqIMOmwozCicOpwpLCrsOlwpvCvsOmwqDCh1xuICAgKi9cbiAgYnRuSWNvbj86IFNUSWNvbiA9IHtcbiAgICB0eXBlOiAnJyxcbiAgICB0aGVtZTogJ291dGxpbmUnLFxuICAgIHNwaW46IGZhbHNlLFxuICB9O1xufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIEluamVjdCwgSG9zdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQUNMU2VydmljZSB9IGZyb20gJ0BkZWxvbi9hY2wnO1xuaW1wb3J0IHsgQUxBSU5fSTE4Tl9UT0tFTiwgQWxhaW5JMThOU2VydmljZSB9IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBkZWVwQ29weSB9IGZyb20gJ0BkZWxvbi91dGlsJztcblxuaW1wb3J0IHtcbiAgU1RDb2x1bW4sXG4gIFNUQ29sdW1uQnV0dG9uLFxuICBTVENvbHVtblNvcnQsXG4gIFNUQ29sdW1uRmlsdGVyLFxufSBmcm9tICcuL3RhYmxlLmludGVyZmFjZXMnO1xuaW1wb3J0IHsgU1RSb3dTb3VyY2UgfSBmcm9tICcuL3RhYmxlLXJvdy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU1RDb25maWcgfSBmcm9tICcuL3RhYmxlLmNvbmZpZyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU1RTb3J0TWFwIGV4dGVuZHMgU1RDb2x1bW5Tb3J0IHtcbiAgLyoqIMOmwpjCr8OlwpDCpsOlwpDCr8OnwpTCqMOmwo7CksOlwrrCjyAqL1xuICBlbmFibGVkPzogYm9vbGVhbjtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNUQ29sdW1uU291cmNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgQEhvc3QoKSBwcml2YXRlIHJvd1NvdXJjZTogU1RSb3dTb3VyY2UsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBhY2w6IEFDTFNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KEFMQUlOX0kxOE5fVE9LRU4pXG4gICAgcHJpdmF0ZSBpMThuU3J2OiBBbGFpbkkxOE5TZXJ2aWNlLFxuICAgIHByaXZhdGUgY29nOiBTVENvbmZpZyxcbiAgKSB7fVxuXG4gIHByaXZhdGUgYnRuQ29lcmNlKGxpc3Q6IFNUQ29sdW1uQnV0dG9uW10pOiBTVENvbHVtbkJ1dHRvbltdIHtcbiAgICBpZiAoIWxpc3QpIHJldHVybiBbXTtcbiAgICBjb25zdCByZXQ6IFNUQ29sdW1uQnV0dG9uW10gPSBbXTtcbiAgICBjb25zdCB7IG1vZGFsLCBkcmF3ZXIsIHBvcFRpdGxlLCBidG5JY29uIH0gPSB0aGlzLmNvZztcblxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBsaXN0KSB7XG4gICAgICBpZiAodGhpcy5hY2wgJiYgaXRlbS5hY2wgJiYgIXRoaXMuYWNsLmNhbihpdGVtLmFjbCkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdtb2RhbCcgfHwgaXRlbS50eXBlID09PSAnc3RhdGljJykge1xuICAgICAgICAvLyBjb21wYXRpYmxlXG4gICAgICAgIGlmIChpdGVtLmNvbXBvbmVudCAhPSBudWxsKSB7XG4gICAgICAgICAgaXRlbS5tb2RhbCA9IHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogaXRlbS5jb21wb25lbnQsXG4gICAgICAgICAgICBwYXJhbXM6IGl0ZW0ucGFyYW1zLFxuICAgICAgICAgICAgcGFyYW1zTmFtZTogaXRlbS5wYXJhbU5hbWUgfHwgbW9kYWwucGFyYW1zTmFtZSxcbiAgICAgICAgICAgIHNpemU6IGl0ZW0uc2l6ZSB8fCBtb2RhbC5zaXplLFxuICAgICAgICAgICAgbW9kYWxPcHRpb25zOiBpdGVtLm1vZGFsT3B0aW9ucyB8fCBtb2RhbC5tb2RhbE9wdGlvbnMsXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXRlbS5tb2RhbCA9PSBudWxsIHx8IGl0ZW0ubW9kYWwuY29tcG9uZW50ID09IG51bGwpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oYFtzdF0gU2hvdWxkIHNwZWNpZnkgbW9kYWwgcGFyYW1ldGVyYCk7XG4gICAgICAgICAgaXRlbS50eXBlID0gJ25vbmUnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW0ubW9kYWwgPSBPYmplY3QuYXNzaWduKHt9LCBtb2RhbCwgaXRlbS5tb2RhbCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ2RyYXdlcicpIHtcbiAgICAgICAgaWYgKGl0ZW0uZHJhd2VyID09IG51bGwgfHwgaXRlbS5kcmF3ZXIuY29tcG9uZW50ID09IG51bGwpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oYFtzdF0gU2hvdWxkIHNwZWNpZnkgZHJhd2VyIHBhcmFtZXRlcmApO1xuICAgICAgICAgIGl0ZW0udHlwZSA9ICdub25lJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtLmRyYXdlciA9IE9iamVjdC5hc3NpZ24oe30sIGRyYXdlciwgaXRlbS5kcmF3ZXIpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdkZWwnICYmIHR5cGVvZiBpdGVtLnBvcCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgaXRlbS5wb3AgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbS5wb3AgPT09IHRydWUpIHtcbiAgICAgICAgaXRlbS5fdHlwZSA9ICdwb3AnO1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW0ucG9wVGl0bGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgaXRlbS5wb3BUaXRsZSA9IHBvcFRpdGxlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoaXRlbS5pY29uKSB7XG4gICAgICAgIGl0ZW0uX3R5cGUgPSAnaWNvbic7XG4gICAgICAgIGl0ZW0uaWNvbiA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAge30sXG4gICAgICAgICAgYnRuSWNvbixcbiAgICAgICAgICB0eXBlb2YgaXRlbS5pY29uID09PSAnc3RyaW5nJyA/IHsgdHlwZTogaXRlbS5pY29uIH0gOiBpdGVtLmljb24sXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbS5jaGlsZHJlbiAmJiBpdGVtLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgaXRlbS5fdHlwZSA9ICdzdWInO1xuICAgICAgICBpdGVtLmNoaWxkcmVuID0gdGhpcy5idG5Db2VyY2UoaXRlbS5jaGlsZHJlbik7XG4gICAgICB9XG4gICAgICBpZiAoIWl0ZW0uX3R5cGUpIHtcbiAgICAgICAgaXRlbS5fdHlwZSA9ICcnO1xuICAgICAgfVxuXG4gICAgICAvLyBpMThuXG4gICAgICBpZiAoaXRlbS5pMThuICYmIHRoaXMuaTE4blNydikge1xuICAgICAgICBpdGVtLnRleHQgPSB0aGlzLmkxOG5TcnYuZmFueWkoaXRlbS5pMThuKTtcbiAgICAgIH1cblxuICAgICAgcmV0LnB1c2goaXRlbSk7XG4gICAgfVxuICAgIHRoaXMuYnRuQ29lcmNlSWYocmV0KTtcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgcHJpdmF0ZSBidG5Db2VyY2VJZihsaXN0OiBTVENvbHVtbkJ1dHRvbltdKSB7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGxpc3QpIHtcbiAgICAgIGlmICghaXRlbS5paWYpIGl0ZW0uaWlmID0gKCkgPT4gdHJ1ZTtcbiAgICAgIGlmICghaXRlbS5jaGlsZHJlbikge1xuICAgICAgICBpdGVtLmNoaWxkcmVuID0gW107XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmJ0bkNvZXJjZUlmKGl0ZW0uY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZml4ZWRDb2VyY2UobGlzdDogU1RDb2x1bW5bXSkge1xuICAgIGNvbnN0IGNvdW50UmVkdWNlID0gKGE6IG51bWJlciwgYjogU1RDb2x1bW4pID0+XG4gICAgICBhICsgK2Iud2lkdGgudG9TdHJpbmcoKS5yZXBsYWNlKCdweCcsICcnKTtcbiAgICAvLyBsZWZ0IHdpZHRoXG4gICAgbGlzdFxuICAgICAgLmZpbHRlcih3ID0+IHcuZml4ZWQgJiYgdy5maXhlZCA9PT0gJ2xlZnQnICYmIHcud2lkdGgpXG4gICAgICAuZm9yRWFjaChcbiAgICAgICAgKGl0ZW0sIGlkeCkgPT5cbiAgICAgICAgICAoaXRlbS5fbGVmdCA9IGxpc3Quc2xpY2UoMCwgaWR4KS5yZWR1Y2UoY291bnRSZWR1Y2UsIDApICsgJ3B4JyksXG4gICAgICApO1xuICAgIC8vIHJpZ2h0IHdpZHRoXG4gICAgbGlzdFxuICAgICAgLmZpbHRlcih3ID0+IHcuZml4ZWQgJiYgdy5maXhlZCA9PT0gJ3JpZ2h0JyAmJiB3LndpZHRoKVxuICAgICAgLnJldmVyc2UoKVxuICAgICAgLmZvckVhY2goXG4gICAgICAgIChpdGVtLCBpZHgpID0+XG4gICAgICAgICAgKGl0ZW0uX3JpZ2h0ID1cbiAgICAgICAgICAgIChpZHggPiAwID8gbGlzdC5zbGljZSgtaWR4KS5yZWR1Y2UoY291bnRSZWR1Y2UsIDApIDogMCkgKyAncHgnKSxcbiAgICAgICk7XG4gIH1cblxuICBwcml2YXRlIHNvcnRDb2VyY2UoaXRlbTogU1RDb2x1bW4pOiBTVFNvcnRNYXAge1xuICAgIC8vIGNvbXBhdGlibGVcbiAgICBpZiAoaXRlbS5zb3J0ZXIgJiYgdHlwZW9mIGl0ZW0uc29ydGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICBkZWZhdWx0OiBpdGVtLnNvcnQgYXMgYW55LFxuICAgICAgICBjb21wYXJlOiBpdGVtLnNvcnRlcixcbiAgICAgICAga2V5OiBpdGVtLnNvcnRLZXkgfHwgaXRlbS5pbmRleEtleSxcbiAgICAgICAgcmVOYW1lOiBpdGVtLnNvcnRSZU5hbWUsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgaXRlbS5zb3J0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIHsgZW5hYmxlZDogZmFsc2UgfTtcbiAgICB9XG5cbiAgICBsZXQgcmVzOiBTVFNvcnRNYXAgPSB7fTtcblxuICAgIGlmICh0eXBlb2YgaXRlbS5zb3J0ID09PSAnc3RyaW5nJykge1xuICAgICAgcmVzLmtleSA9IGl0ZW0uc29ydDtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBpdGVtLnNvcnQgIT09ICdib29sZWFuJykge1xuICAgICAgcmVzID0gaXRlbS5zb3J0O1xuICAgIH1cblxuICAgIGlmICghcmVzLmtleSkge1xuICAgICAgcmVzLmtleSA9IGl0ZW0uaW5kZXhLZXk7XG4gICAgfVxuXG4gICAgcmVzLmVuYWJsZWQgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIHByaXZhdGUgZmlsdGVyQ29lcmNlKGl0ZW06IFNUQ29sdW1uKTogU1RDb2x1bW5GaWx0ZXIge1xuICAgIGxldCByZXM6IFNUQ29sdW1uRmlsdGVyID0gbnVsbDtcbiAgICAvLyBjb21wYXRpYmxlXG4gICAgaWYgKGl0ZW0uZmlsdGVycyAmJiBpdGVtLmZpbHRlcnMubGVuZ3RoID4gMCkge1xuICAgICAgcmVzID0ge1xuICAgICAgICBjb25maXJtVGV4dDogaXRlbS5maWx0ZXJDb25maXJtVGV4dCxcbiAgICAgICAgY2xlYXJUZXh0OiBpdGVtLmZpbHRlckNsZWFyVGV4dCxcbiAgICAgICAgZGVmYXVsdDogaXRlbS5maWx0ZXJlZCxcbiAgICAgICAgZm46IGl0ZW0uZmlsdGVyIGFzIGFueSxcbiAgICAgICAgaWNvbjogaXRlbS5maWx0ZXJJY29uLFxuICAgICAgICBrZXk6IGl0ZW0uZmlsdGVyS2V5IHx8IGl0ZW0uaW5kZXhLZXksXG4gICAgICAgIG1lbnVzOiBpdGVtLmZpbHRlcnMsXG4gICAgICAgIG11bHRpcGxlOiBpdGVtLmZpbHRlck11bHRpcGxlLFxuICAgICAgICByZU5hbWU6IGl0ZW0uZmlsdGVyUmVOYW1lLFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzID0gaXRlbS5maWx0ZXI7XG4gICAgfVxuXG4gICAgaWYgKHJlcyA9PSBudWxsIHx8IHJlcy5tZW51cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcmVzLm11bHRpcGxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmVzLm11bHRpcGxlID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCFyZXMuY29uZmlybVRleHQpIHtcbiAgICAgIHJlcy5jb25maXJtVGV4dCA9IHRoaXMuY29nLmZpbHRlckNvbmZpcm1UZXh0O1xuICAgIH1cbiAgICBpZiAoIXJlcy5jbGVhclRleHQpIHtcbiAgICAgIHJlcy5jbGVhclRleHQgPSB0aGlzLmNvZy5maWx0ZXJDbGVhclRleHQ7XG4gICAgfVxuICAgIGlmICghcmVzLmljb24pIHtcbiAgICAgIHJlcy5pY29uID0gYGZpbHRlcmA7XG4gICAgfVxuICAgIGlmICghcmVzLmtleSkge1xuICAgICAgcmVzLmtleSA9IGl0ZW0uaW5kZXhLZXk7XG4gICAgfVxuXG4gICAgcmVzLmRlZmF1bHQgPSByZXMubWVudXMuZmluZEluZGV4KHcgPT4gdy5jaGVja2VkKSAhPT0gLTE7XG5cbiAgICBpZiAodGhpcy5hY2wpIHtcbiAgICAgIHJlcy5tZW51cyA9IHJlcy5tZW51cy5maWx0ZXIodyA9PiB0aGlzLmFjbC5jYW4ody5hY2wpKTtcbiAgICB9XG5cbiAgICBpZiAocmVzLm1lbnVzLmxlbmd0aCA8PSAwKSB7XG4gICAgICByZXMgPSBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICBwcml2YXRlIHJlc3RvcmVSZW5kZXIoaXRlbTogU1RDb2x1bW4pIHtcbiAgICBpZiAoaXRlbS5yZW5kZXJUaXRsZSkge1xuICAgICAgaXRlbS5fX3JlbmRlclRpdGxlID0gdGhpcy5yb3dTb3VyY2UuZ2V0VGl0bGUoaXRlbS5yZW5kZXJUaXRsZSk7XG4gICAgfVxuICAgIGlmIChpdGVtLnJlbmRlcikge1xuICAgICAgaXRlbS5fX3JlbmRlciA9IHRoaXMucm93U291cmNlLmdldFJvdyhpdGVtLnJlbmRlcik7XG4gICAgfVxuICB9XG5cbiAgcHJvY2VzcyhsaXN0OiBTVENvbHVtbltdKTogU1RDb2x1bW5bXSB7XG4gICAgaWYgKCFsaXN0IHx8IGxpc3QubGVuZ3RoID09PSAwKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBbc3RdOiB0aGUgY29sdW1ucyBwcm9wZXJ0eSBtdXNlIGJlIGRlZmluZSFgKTtcblxuICAgIGxldCBjaGVja2JveENvdW50ID0gMDtcbiAgICBsZXQgcmFkaW9Db3VudCA9IDA7XG4gICAgY29uc3QgY29sdW1uczogU1RDb2x1bW5bXSA9IFtdO1xuICAgIGNvbnN0IGNvcHlDb2x1bWVucyA9IGRlZXBDb3B5KGxpc3QpIGFzIFNUQ29sdW1uW107XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGNvcHlDb2x1bWVucykge1xuICAgICAgaWYgKHRoaXMuYWNsICYmIGl0ZW0uYWNsICYmICF0aGlzLmFjbC5jYW4oaXRlbS5hY2wpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgLy8gaW5kZXhcbiAgICAgIGlmIChpdGVtLmluZGV4KSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShpdGVtLmluZGV4KSkge1xuICAgICAgICAgIGl0ZW0uaW5kZXggPSBpdGVtLmluZGV4LnNwbGl0KCcuJyk7XG4gICAgICAgIH1cbiAgICAgICAgaXRlbS5pbmRleEtleSA9IGl0ZW0uaW5kZXguam9pbignLicpO1xuICAgICAgfVxuICAgICAgLy8gdGl0bGVcbiAgICAgIGlmIChpdGVtLmkxOG4gJiYgdGhpcy5pMThuU3J2KSB7XG4gICAgICAgIGl0ZW0udGl0bGUgPSB0aGlzLmkxOG5TcnYuZmFueWkoaXRlbS5pMThuKTtcbiAgICAgIH1cbiAgICAgIC8vIGNoZWNrYm94XG4gICAgICBpZiAoaXRlbS5zZWxlY3Rpb25zID09IG51bGwpIHtcbiAgICAgICAgaXRlbS5zZWxlY3Rpb25zID0gW107XG4gICAgICB9XG4gICAgICBpZiAoaXRlbS50eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgICsrY2hlY2tib3hDb3VudDtcbiAgICAgICAgaWYgKCFpdGVtLndpZHRoKSB7XG4gICAgICAgICAgaXRlbS53aWR0aCA9IGAke2l0ZW0uc2VsZWN0aW9ucy5sZW5ndGggPiAwID8gNjIgOiA1MH1weGA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmFjbCkge1xuICAgICAgICBpdGVtLnNlbGVjdGlvbnMgPSBpdGVtLnNlbGVjdGlvbnMuZmlsdGVyKHcgPT4gdGhpcy5hY2wuY2FuKHcuYWNsKSk7XG4gICAgICB9XG4gICAgICAvLyByYWRpb1xuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgICArK3JhZGlvQ291bnQ7XG4gICAgICAgIGl0ZW0uc2VsZWN0aW9ucyA9IFtdO1xuICAgICAgICBpZiAoIWl0ZW0ud2lkdGgpIHtcbiAgICAgICAgICBpdGVtLndpZHRoID0gJzUwcHgnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyB0eXBlc1xuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ3luJykge1xuICAgICAgICBpdGVtLnluID0gT2JqZWN0LmFzc2lnbih7IHRydXRoOiB0cnVlIH0sIGl0ZW0ueW4pO1xuICAgICAgICAvLyBjb21wYXRpYmxlXG4gICAgICAgIGlmIChpdGVtLnluVHJ1dGggIT0gbnVsbCkgaXRlbS55bi50cnV0aCA9IGl0ZW0ueW5UcnV0aDtcbiAgICAgICAgaWYgKGl0ZW0ueW5ZZXMgIT0gbnVsbCkgaXRlbS55bi55ZXMgPSBpdGVtLnluWWVzO1xuICAgICAgICBpZiAoaXRlbS55bk5vICE9IG51bGwpIGl0ZW0ueW4ubm8gPSBpdGVtLnluTm87XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIChpdGVtLnR5cGUgPT09ICdsaW5rJyAmJiB0eXBlb2YgaXRlbS5jbGljayAhPT0gJ2Z1bmN0aW9uJykgfHxcbiAgICAgICAgKGl0ZW0udHlwZSA9PT0gJ2JhZGdlJyAmJiBpdGVtLmJhZGdlID09IG51bGwpIHx8XG4gICAgICAgIChpdGVtLnR5cGUgPT09ICd0YWcnICYmIGl0ZW0udGFnID09IG51bGwpXG4gICAgICApIHtcbiAgICAgICAgKGl0ZW0gYXMgYW55KS50eXBlID0gJyc7XG4gICAgICB9XG4gICAgICAvLyBjbGFzc05hbWVcbiAgICAgIGlmICghaXRlbS5jbGFzc05hbWUpIHtcbiAgICAgICAgaXRlbS5jbGFzc05hbWUgPSB7XG4gICAgICAgICAgbnVtYmVyOiAndGV4dC1yaWdodCcsXG4gICAgICAgICAgY3VycmVuY3k6ICd0ZXh0LXJpZ2h0JyxcbiAgICAgICAgICBkYXRlOiAndGV4dC1jZW50ZXInLFxuICAgICAgICB9W2l0ZW0udHlwZV07XG4gICAgICB9XG5cbiAgICAgIC8vIHNvcnRlclxuICAgICAgaXRlbS5fc29ydCA9IHRoaXMuc29ydENvZXJjZShpdGVtKTtcbiAgICAgIC8vIGZpbHRlclxuICAgICAgaXRlbS5maWx0ZXIgPSB0aGlzLmZpbHRlckNvZXJjZShpdGVtKTtcbiAgICAgIC8vIGJ1dHRvbnNcbiAgICAgIGl0ZW0uYnV0dG9ucyA9IHRoaXMuYnRuQ29lcmNlKGl0ZW0uYnV0dG9ucyk7XG4gICAgICAvLyByZXN0b3JlIGN1c3RvbSByb3dcbiAgICAgIHRoaXMucmVzdG9yZVJlbmRlcihpdGVtKTtcblxuICAgICAgY29sdW1ucy5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgICBpZiAoY2hlY2tib3hDb3VudCA+IDEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgW3N0XToganVzdCBvbmx5IG9uZSBjb2x1bW4gY2hlY2tib3hgKTtcbiAgICB9XG4gICAgaWYgKHJhZGlvQ291bnQgPiAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFtzdF06IGp1c3Qgb25seSBvbmUgY29sdW1uIHJhZGlvYCk7XG4gICAgfVxuXG4gICAgdGhpcy5maXhlZENvZXJjZShjb2x1bW5zKTtcblxuICAgIHJldHVybiBjb2x1bW5zO1xuICB9XG5cbiAgcmVzdG9yZUFsbFJlbmRlcihjb2x1bW5zOiBTVENvbHVtbltdKSB7XG4gICAgY29sdW1ucy5mb3JFYWNoKGkgPT4gdGhpcy5yZXN0b3JlUmVuZGVyKGkpKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSG9zdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGVjaW1hbFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBkZWVwR2V0IH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgQ05DdXJyZW5jeVBpcGUsIERhdGVQaXBlLCBZTlBpcGUsIF9IdHRwQ2xpZW50IH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcblxuaW1wb3J0IHtcbiAgU1REYXRhLFxuICBTVFBhZ2UsXG4gIFNUUmVxLFxuICBTVFJlcyxcbiAgU1RDb2x1bW4sXG4gIFNUTXVsdGlTb3J0LFxufSBmcm9tICcuL3RhYmxlLmludGVyZmFjZXMnO1xuaW1wb3J0IHsgU1RTb3J0TWFwIH0gZnJvbSAnLi90YWJsZS1jb2x1bW4tc291cmNlJztcblxuZXhwb3J0IGludGVyZmFjZSBTVERhdGFTb3VyY2VPcHRpb25zIHtcbiAgcGk/OiBudW1iZXI7XG4gIHBzPzogbnVtYmVyO1xuICBkYXRhPzogc3RyaW5nIHwgU1REYXRhW10gfCBPYnNlcnZhYmxlPFNURGF0YVtdPjtcbiAgdG90YWw/OiBudW1iZXI7XG4gIHJlcT86IFNUUmVxO1xuICByZXM/OiBTVFJlcztcbiAgcGFnZT86IFNUUGFnZTtcbiAgY29sdW1ucz86IFNUQ29sdW1uW107XG4gIG11bHRpU29ydD86IFNUTXVsdGlTb3J0O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNURGF0YVNvdXJjZVJlc3VsdCB7XG4gIC8qKiDDpsKYwq/DpcKQwqbDqcKcwoDDqMKmwoHDpsKYwr7Dp8KkwrrDpcKIwobDqcKhwrXDpcKZwqggKi9cbiAgcGFnZVNob3c/OiBib29sZWFuO1xuICAvKiogw6bClsKwIGBwaWDDr8K8wozDqMKLwqXDqMK/wpTDpcKbwp4gYHVuZGVmaW5lZGAgw6jCocKow6fCpMK6w6fClMKow6bCiMK3w6XCj8KXw6bCjsKnICovXG4gIHBpPzogbnVtYmVyO1xuICAvKiogw6bClsKwIGB0b3RhbGDDr8K8wozDqMKLwqXDqMK/wpTDpcKbwp4gYHVuZGVmaW5lZGAgw6jCocKow6fCpMK6w6fClMKow6bCiMK3w6XCj8KXw6bCjsKnICovXG4gIHRvdGFsPzogbnVtYmVyO1xuICAvKiogw6bClcKww6bCjcKuICovXG4gIGxpc3Q/OiBTVERhdGFbXTtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNURGF0YVNvdXJjZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogX0h0dHBDbGllbnQsXG4gICAgQEhvc3QoKSBwcml2YXRlIGN1cnJlbnR5OiBDTkN1cnJlbmN5UGlwZSxcbiAgICBASG9zdCgpIHByaXZhdGUgZGF0ZTogRGF0ZVBpcGUsXG4gICAgQEhvc3QoKSBwcml2YXRlIHluOiBZTlBpcGUsXG4gICAgQEhvc3QoKSBwcml2YXRlIG51bWJlcjogRGVjaW1hbFBpcGUsXG4gICAgcHJpdmF0ZSBkb206IERvbVNhbml0aXplclxuICApIHt9XG5cbiAgcHJvY2VzcyhvcHRpb25zOiBTVERhdGFTb3VyY2VPcHRpb25zKTogUHJvbWlzZTxTVERhdGFTb3VyY2VSZXN1bHQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmVQcm9taXNlLCByZWplY3RQcm9taXNlKSA9PiB7XG4gICAgICBsZXQgZGF0YSQ6IE9ic2VydmFibGU8U1REYXRhW10+O1xuICAgICAgbGV0IGlzUmVtb3RlID0gZmFsc2U7XG4gICAgICBjb25zdCB7IGRhdGEsIHJlcywgdG90YWwsIHBhZ2UsIHBpLCBwcywgY29sdW1ucyB9ID0gb3B0aW9ucztcbiAgICAgIGxldCByZXRUb3RhbDogbnVtYmVyO1xuICAgICAgbGV0IHJldExpc3Q6IFNURGF0YVtdO1xuICAgICAgbGV0IHJldFBpOiBudW1iZXI7XG5cbiAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaXNSZW1vdGUgPSB0cnVlO1xuICAgICAgICBkYXRhJCA9IHRoaXMuZ2V0QnlIdHRwKGRhdGEsIG9wdGlvbnMpLnBpcGUoXG4gICAgICAgICAgbWFwKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgLy8gbGlzdFxuICAgICAgICAgICAgbGV0IHJldCA9IGRlZXBHZXQocmVzdWx0LCByZXMucmVOYW1lLmxpc3QgYXMgc3RyaW5nW10sIFtdKTtcbiAgICAgICAgICAgIGlmIChyZXQgPT0gbnVsbCB8fCAhQXJyYXkuaXNBcnJheShyZXQpKSB7XG4gICAgICAgICAgICAgIHJldCA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdG90YWxcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdFRvdGFsID1cbiAgICAgICAgICAgICAgcmVzLnJlTmFtZS50b3RhbCAmJlxuICAgICAgICAgICAgICBkZWVwR2V0KHJlc3VsdCwgcmVzLnJlTmFtZS50b3RhbCBhcyBzdHJpbmdbXSwgbnVsbCk7XG4gICAgICAgICAgICByZXRUb3RhbCA9IHJlc3VsdFRvdGFsID09IG51bGwgPyB0b3RhbCB8fCAwIDogK3Jlc3VsdFRvdGFsO1xuICAgICAgICAgICAgcmV0dXJuIDxTVERhdGFbXT5yZXQ7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnIgPT4ge1xuICAgICAgICAgICAgcmVqZWN0UHJvbWlzZShlcnIpO1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICAgIH0pLFxuICAgICAgICApO1xuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgIGRhdGEkID0gb2YoZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBhIGNvbGQgb2JzZXJ2YWJsZVxuICAgICAgICBkYXRhJCA9IGRhdGE7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNSZW1vdGUpIHtcbiAgICAgICAgZGF0YSQgPSBkYXRhJC5waXBlKFxuICAgICAgICAgIC8vIHNvcnRcbiAgICAgICAgICBtYXAoKHJlc3VsdDogU1REYXRhW10pID0+IHtcbiAgICAgICAgICAgIGxldCBjb3B5UmVzdWx0ID0gcmVzdWx0LnNsaWNlKDApO1xuICAgICAgICAgICAgY29uc3Qgc29ydGVyRm4gPSB0aGlzLmdldFNvcnRlckZuKGNvbHVtbnMpO1xuICAgICAgICAgICAgaWYgKHNvcnRlckZuKSB7XG4gICAgICAgICAgICAgIGNvcHlSZXN1bHQgPSBjb3B5UmVzdWx0LnNvcnQoc29ydGVyRm4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNvcHlSZXN1bHQ7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgLy8gZmlsdGVyXG4gICAgICAgICAgbWFwKChyZXN1bHQ6IFNURGF0YVtdKSA9PiB7XG4gICAgICAgICAgICBjb2x1bW5zLmZpbHRlcih3ID0+IHcuZmlsdGVyKS5mb3JFYWNoKGMgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSBjLmZpbHRlci5tZW51cy5maWx0ZXIodyA9PiB3LmNoZWNrZWQpO1xuICAgICAgICAgICAgICBpZiAodmFsdWVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgICAgICAgICAgICBjb25zdCBvbkZpbHRlciA9IGMuZmlsdGVyLmZuO1xuICAgICAgICAgICAgICBpZiAodHlwZW9mIG9uRmlsdGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBbc3RdIE11c2UgcHJvdmlkZSB0aGUgZm4gZnVuY3Rpb24gaW4gZmlsdGVyYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQuZmlsdGVyKHJlY29yZCA9PlxuICAgICAgICAgICAgICAgIHZhbHVlcy5zb21lKHYgPT4gb25GaWx0ZXIodiwgcmVjb3JkKSksXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgLy8gcGFnaW5nXG4gICAgICAgICAgbWFwKChyZXN1bHQ6IFNURGF0YVtdKSA9PiB7XG4gICAgICAgICAgICBpZiAocGFnZS5mcm9udCkge1xuICAgICAgICAgICAgICBjb25zdCBtYXhQYWdlSW5kZXggPSBNYXRoLmNlaWwocmVzdWx0Lmxlbmd0aCAvIHBzKTtcbiAgICAgICAgICAgICAgcmV0UGkgPSBNYXRoLm1heCgxLCBwaSA+IG1heFBhZ2VJbmRleCA/IG1heFBhZ2VJbmRleCA6IHBpKTtcbiAgICAgICAgICAgICAgcmV0VG90YWwgPSByZXN1bHQubGVuZ3RoO1xuICAgICAgICAgICAgICBpZiAocGFnZS5zaG93ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC5zbGljZSgocmV0UGkgLSAxKSAqIHBzLCByZXRQaSAqIHBzKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgLy8gcHJlLXByb2Nlc3NcbiAgICAgIGlmICh0eXBlb2YgcmVzLnByb2Nlc3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZGF0YSQgPSBkYXRhJC5waXBlKG1hcChyZXN1bHQgPT4gcmVzLnByb2Nlc3MocmVzdWx0KSkpO1xuICAgICAgfVxuICAgICAgLy8gZGF0YSBhY2NlbGVyYXRvclxuICAgICAgZGF0YSQgPSBkYXRhJC5waXBlKFxuICAgICAgICBtYXAocmVzdWx0ID0+IHtcbiAgICAgICAgICBmb3IgKGNvbnN0IGkgb2YgcmVzdWx0KSB7XG4gICAgICAgICAgICBpLl92YWx1ZXMgPSBjb2x1bW5zLm1hcChjID0+IHRoaXMuZ2V0KGksIGMpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSksXG4gICAgICApO1xuXG4gICAgICBkYXRhJC5mb3JFYWNoKChyZXN1bHQ6IFNURGF0YVtdKSA9PiAocmV0TGlzdCA9IHJlc3VsdCkpLnRoZW4oKCkgPT4ge1xuICAgICAgICByZXNvbHZlUHJvbWlzZSh7XG4gICAgICAgICAgcGk6IHJldFBpLFxuICAgICAgICAgIHRvdGFsOiByZXRUb3RhbCxcbiAgICAgICAgICBsaXN0OiByZXRMaXN0LFxuICAgICAgICAgIHBhZ2VTaG93OlxuICAgICAgICAgICAgdHlwZW9mIHBhZ2Uuc2hvdyA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgPyAocmV0VG90YWwgfHwgdG90YWwpID4gcHNcbiAgICAgICAgICAgICAgOiBwYWdlLnNob3csXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldChpdGVtOiBhbnksIGNvbDogU1RDb2x1bW4pIHtcbiAgICBpZiAoY29sLmZvcm1hdCkge1xuICAgICAgY29uc3QgZm9ybWF0UmVzID0gY29sLmZvcm1hdChpdGVtLCBjb2wpIGFzIHN0cmluZztcbiAgICAgIGlmICh+Zm9ybWF0UmVzLmluZGV4T2YoJzwnKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5kb20uYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoZm9ybWF0UmVzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmb3JtYXRSZXM7XG4gICAgfVxuXG4gICAgY29uc3QgdmFsdWUgPSBkZWVwR2V0KGl0ZW0sIGNvbC5pbmRleCBhcyBzdHJpbmdbXSwgY29sLmRlZmF1bHQpO1xuXG4gICAgbGV0IHJldCA9IHZhbHVlO1xuICAgIHN3aXRjaCAoY29sLnR5cGUpIHtcbiAgICAgIGNhc2UgJ2ltZyc6XG4gICAgICAgIHJldCA9IHZhbHVlID8gYDxpbWcgc3JjPVwiJHt2YWx1ZX1cIiBjbGFzcz1cImltZ1wiPmAgOiAnJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICByZXQgPSB0aGlzLm51bWJlci50cmFuc2Zvcm0odmFsdWUsIGNvbC5udW1iZXJEaWdpdHMpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2N1cnJlbmN5JzpcbiAgICAgICAgcmV0ID0gdGhpcy5jdXJyZW50eS50cmFuc2Zvcm0odmFsdWUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgICByZXQgPSB0aGlzLmRhdGUudHJhbnNmb3JtKHZhbHVlLCBjb2wuZGF0ZUZvcm1hdCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAneW4nOlxuICAgICAgICByZXQgPSB0aGlzLnluLnRyYW5zZm9ybSh2YWx1ZSA9PT0gY29sLnluLnRydXRoLCBjb2wueW4ueWVzLCBjb2wueW4ubm8pO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0QnlIdHRwKFxuICAgIHVybDogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFNURGF0YVNvdXJjZU9wdGlvbnMsXG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgeyByZXEsIHBhZ2UsIHBpLCBwcywgbXVsdGlTb3J0LCBjb2x1bW5zIH0gPSBvcHRpb25zO1xuICAgIGNvbnN0IG1ldGhvZCA9IChyZXEubWV0aG9kIHx8ICdHRVQnKS50b1VwcGVyQ2FzZSgpO1xuICAgIGNvbnN0IHBhcmFtczogYW55ID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHtcbiAgICAgICAgW3JlcS5yZU5hbWUucGldOiBwYWdlLnplcm9JbmRleGVkID8gcGkgLSAxIDogcGksXG4gICAgICAgIFtyZXEucmVOYW1lLnBzXTogcHMsXG4gICAgICB9LFxuICAgICAgcmVxLnBhcmFtcyxcbiAgICAgIHRoaXMuZ2V0UmVxU29ydE1hcChtdWx0aVNvcnQsIGNvbHVtbnMpLFxuICAgICAgdGhpcy5nZXRSZXFGaWx0ZXJNYXAoY29sdW1ucyksXG4gICAgKTtcbiAgICBsZXQgcmVxT3B0aW9uczogYW55ID0ge1xuICAgICAgcGFyYW1zLFxuICAgICAgYm9keTogcmVxLmJvZHksXG4gICAgICBoZWFkZXJzOiByZXEuaGVhZGVycyxcbiAgICB9O1xuICAgIGlmIChtZXRob2QgPT09ICdQT1NUJyAmJiByZXEuYWxsSW5Cb2R5ID09PSB0cnVlKSB7XG4gICAgICByZXFPcHRpb25zID0ge1xuICAgICAgICBib2R5OiBPYmplY3QuYXNzaWduKHt9LCByZXEuYm9keSwgcGFyYW1zKSxcbiAgICAgICAgaGVhZGVyczogcmVxLmhlYWRlcnMsXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5odHRwLnJlcXVlc3QobWV0aG9kLCB1cmwsIHJlcU9wdGlvbnMpO1xuICB9XG5cbiAgLy8jcmVnaW9uIHNvcnRcblxuICBwcml2YXRlIGdldFZhbGlkU29ydChjb2x1bW5zOiBTVENvbHVtbltdKTogU1RTb3J0TWFwW10ge1xuICAgIHJldHVybiBjb2x1bW5zXG4gICAgICAuZmlsdGVyKGl0ZW0gPT4gaXRlbS5fc29ydCAmJiBpdGVtLl9zb3J0LmVuYWJsZWQgJiYgaXRlbS5fc29ydC5kZWZhdWx0KVxuICAgICAgLm1hcChpdGVtID0+IGl0ZW0uX3NvcnQpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTb3J0ZXJGbihjb2x1bW5zOiBTVENvbHVtbltdKSB7XG4gICAgY29uc3Qgc29ydExpc3QgPSB0aGlzLmdldFZhbGlkU29ydChjb2x1bW5zKTtcbiAgICBpZiAoc29ydExpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygc29ydExpc3RbMF0uY29tcGFyZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc29sZS53YXJuKGBbc3RdIE11c2UgcHJvdmlkZSB0aGUgY29tcGFyZSBmdW5jdGlvbiBpbiBzb3J0YCk7XG4gICAgICByZXR1cm4gO1xuICAgIH1cblxuICAgIHJldHVybiAoYTogYW55LCBiOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHNvcnRMaXN0WzBdLmNvbXBhcmUoYSwgYik7XG4gICAgICBpZiAocmVzdWx0ICE9PSAwKSB7XG4gICAgICAgIHJldHVybiBzb3J0TGlzdFswXS5kZWZhdWx0ID09PSAnZGVzY2VuZCcgPyAtcmVzdWx0IDogcmVzdWx0O1xuICAgICAgfVxuICAgICAgcmV0dXJuIDA7XG4gICAgfTtcbiAgfVxuXG4gIGdldFJlcVNvcnRNYXAoXG4gICAgbXVsdGlTb3J0OiBTVE11bHRpU29ydCxcbiAgICBjb2x1bW5zOiBTVENvbHVtbltdLFxuICApOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHtcbiAgICBsZXQgcmV0OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XG4gICAgY29uc3Qgc29ydExpc3QgPSB0aGlzLmdldFZhbGlkU29ydChjb2x1bW5zKTtcbiAgICBpZiAoIW11bHRpU29ydCAmJiBzb3J0TGlzdC5sZW5ndGggPT09IDApIHJldHVybiByZXQ7XG5cbiAgICBpZiAobXVsdGlTb3J0KSB7XG4gICAgICBzb3J0TGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICByZXRbaXRlbS5rZXldID0gKGl0ZW0ucmVOYW1lIHx8IHt9KVtpdGVtLmRlZmF1bHRdIHx8IGl0ZW0uZGVmYXVsdDtcbiAgICAgIH0pO1xuICAgICAgLy8gw6XCkMKIw6XCucK2w6XCpMKEw6fCkMKGXG4gICAgICByZXQgPSB7XG4gICAgICAgIFttdWx0aVNvcnQua2V5XTogT2JqZWN0LmtleXMocmV0KVxuICAgICAgICAgIC5tYXAoa2V5ID0+IGtleSArIG11bHRpU29ydC5uYW1lU2VwYXJhdG9yICsgcmV0W2tleV0pXG4gICAgICAgICAgLmpvaW4obXVsdGlTb3J0LnNlcGFyYXRvciksXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtYXBEYXRhID0gc29ydExpc3RbMF07XG4gICAgICByZXRbbWFwRGF0YS5rZXldID1cbiAgICAgICAgKHNvcnRMaXN0WzBdLnJlTmFtZSB8fCB7fSlbbWFwRGF0YS5kZWZhdWx0XSB8fCBtYXBEYXRhLmRlZmF1bHQ7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvLyNlbmRyZWdpb25cblxuICAvLyNyZWdpb24gZmlsdGVyXG5cbiAgcHJpdmF0ZSBnZXRSZXFGaWx0ZXJNYXAoY29sdW1uczogU1RDb2x1bW5bXSk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0ge1xuICAgIGxldCByZXQgPSB7fTtcbiAgICBjb2x1bW5zLmZpbHRlcih3ID0+IHcuZmlsdGVyICYmIHcuZmlsdGVyLmRlZmF1bHQgPT09IHRydWUpLmZvckVhY2goY29sID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlcyA9IGNvbC5maWx0ZXIubWVudXMuZmlsdGVyKGYgPT4gZi5jaGVja2VkID09PSB0cnVlKTtcbiAgICAgIGxldCBvYmo6IE9iamVjdCA9IHt9O1xuICAgICAgaWYgKGNvbC5maWx0ZXIucmVOYW1lKSB7XG4gICAgICAgIG9iaiA9IGNvbC5maWx0ZXIucmVOYW1lKGNvbC5maWx0ZXIubWVudXMsIGNvbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvYmpbY29sLmZpbHRlci5rZXldID0gdmFsdWVzLm1hcChpID0+IGkudmFsdWUpLmpvaW4oJywnKTtcbiAgICAgIH1cbiAgICAgIHJldCA9IE9iamVjdC5hc3NpZ24ocmV0LCBvYmopO1xuICAgIH0pO1xuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvLyNlbmRyZWdpb25cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBkZWVwR2V0IH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgWGxzeFNlcnZpY2UgfSBmcm9tICdAZGVsb24vYWJjL3hsc3gnO1xuXG5pbXBvcnQgeyBTVENvbHVtbiwgU1RFeHBvcnRPcHRpb25zIH0gZnJvbSAnLi90YWJsZS5pbnRlcmZhY2VzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNURXhwb3J0IHtcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgcHJpdmF0ZSB4bHN4U3J2OiBYbHN4U2VydmljZSkge31cblxuICBwcml2YXRlIF9zdEdldChpdGVtOiBhbnksIGNvbDogU1RDb2x1bW4pOiBhbnkge1xuICAgIGNvbnN0IHJldDogYW55ID0geyB0OiAncycsIHY6ICcnIH07XG5cbiAgICBpZiAoY29sLmZvcm1hdCkge1xuICAgICAgcmV0LnYgPSBjb2wuZm9ybWF0KGl0ZW0sIGNvbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHZhbCA9IGRlZXBHZXQoaXRlbSwgY29sLmluZGV4IGFzIHN0cmluZ1tdLCAnJyk7XG4gICAgICByZXQudiA9IHZhbDtcbiAgICAgIHN3aXRjaCAoY29sLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnY3VycmVuY3knOlxuICAgICAgICAgIHJldC50ID0gJ24nO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdkYXRlJzpcbiAgICAgICAgICByZXQudCA9ICdkJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAneW4nOlxuICAgICAgICAgIHJldC52ID0gcmV0LnYgPT09IGNvbC55blRydXRoID8gY29sLnluWWVzIHx8ICfDpsKYwq8nIDogY29sLnluTm8gfHwgJ8OlwpDCpic7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuU2hlZXQob3B0OiBTVEV4cG9ydE9wdGlvbnMpOiB7IFtzaGVldDogc3RyaW5nXTogYW55IH0ge1xuICAgIGNvbnN0IHNoZWV0czogeyBbc2hlZXQ6IHN0cmluZ106IGFueSB9ID0ge307XG4gICAgY29uc3Qgc2hlZXQgPSAoc2hlZXRzW29wdC5zaGVldG5hbWUgfHwgJ1NoZWV0MSddID0ge30pO1xuICAgIGNvbnN0IGNvbERhdGEgPSBvcHQuX2MuZmlsdGVyKFxuICAgICAgdyA9PlxuICAgICAgICB3LmV4cG9ydGVkICE9PSBmYWxzZSAmJlxuICAgICAgICB3LmluZGV4ICYmXG4gICAgICAgICghdy5idXR0b25zIHx8IHcuYnV0dG9ucy5sZW5ndGggPT09IDApLFxuICAgICk7XG4gICAgY29uc3QgY2MgPSBjb2xEYXRhLmxlbmd0aCxcbiAgICAgIGRjID0gb3B0Ll9kLmxlbmd0aDtcblxuICAgIC8vIGNvbHVtblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2M7IGkrKykge1xuICAgICAgc2hlZXRbYCR7U3RyaW5nLmZyb21DaGFyQ29kZSg2NSArIGkpfTFgXSA9IHtcbiAgICAgICAgdDogJ3MnLFxuICAgICAgICB2OiBjb2xEYXRhW2ldLnRpdGxlLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBjb250ZW50XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYzsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNjOyBqKyspIHtcbiAgICAgICAgc2hlZXRbYCR7U3RyaW5nLmZyb21DaGFyQ29kZSg2NSArIGopfSR7aSArIDJ9YF0gPSB0aGlzLl9zdEdldChcbiAgICAgICAgICBvcHQuX2RbaV0sXG4gICAgICAgICAgY29sRGF0YVtqXSxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY2MgPiAwICYmIGRjID4gMCkge1xuICAgICAgc2hlZXRbJyFyZWYnXSA9IGBBMToke1N0cmluZy5mcm9tQ2hhckNvZGUoNjUgKyBjYyAtIDEpfSR7ZGMgKyAxfWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNoZWV0cztcbiAgfVxuXG4gIGV4cG9ydChvcHQ6IFNURXhwb3J0T3B0aW9ucykge1xuICAgIGlmICghdGhpcy54bHN4U3J2KVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBtdXNlIGJlIGltcG9ydCAnWGxzeE1vZHVsZScgbW9kdWxlLCBidXQgZ290IG51bGxgKTtcbiAgICBjb25zdCBzaGVldHMgPSB0aGlzLmdlblNoZWV0KG9wdCk7XG4gICAgcmV0dXJuIHRoaXMueGxzeFNydi5leHBvcnQoe1xuICAgICAgc2hlZXRzLFxuICAgICAgZmlsZW5hbWU6IG9wdC5maWxlbmFtZSxcbiAgICAgIGNhbGxiYWNrOiBvcHQuY2FsbGJhY2ssXG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgRXZlbnRFbWl0dGVyLFxuICBSZW5kZXJlcjIsXG4gIEVsZW1lbnRSZWYsXG4gIFRlbXBsYXRlUmVmLFxuICBTaW1wbGVDaGFuZ2UsXG4gIE9wdGlvbmFsLFxuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGVjaW1hbFBpcGUsIERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24sIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1xuICBDTkN1cnJlbmN5UGlwZSxcbiAgRGF0ZVBpcGUsXG4gIFlOUGlwZSxcbiAgTW9kYWxIZWxwZXIsXG4gIE1vZGFsSGVscGVyT3B0aW9ucyxcbiAgQUxBSU5fSTE4Tl9UT0tFTixcbiAgQWxhaW5JMThOU2VydmljZSxcbiAgRHJhd2VySGVscGVyLFxuICBEcmF3ZXJIZWxwZXJPcHRpb25zLFxuICBEZWxvbkxvY2FsZVNlcnZpY2UsXG59IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQge1xuICBkZWVwQ29weSxcbiAgdG9Cb29sZWFuLFxuICB1cGRhdGVIb3N0Q2xhc3MsXG4gIElucHV0Qm9vbGVhbixcbiAgSW5wdXROdW1iZXIsXG59IGZyb20gJ0BkZWxvbi91dGlsJztcblxuaW1wb3J0IHtcbiAgU1RDb2x1bW4sXG4gIFNUQ2hhbmdlLFxuICBTVENvbHVtblNlbGVjdGlvbixcbiAgU1RDb2x1bW5GaWx0ZXJNZW51LFxuICBTVERhdGEsXG4gIFNUQ29sdW1uQnV0dG9uLFxuICBTVEV4cG9ydE9wdGlvbnMsXG4gIFNUTXVsdGlTb3J0LFxuICBTVFJlcSxcbiAgU1RFcnJvcixcbiAgU1RDaGFuZ2VUeXBlLFxuICBTVENoYW5nZVJvd0NsaWNrLFxuICBTVFJlcyxcbiAgU1RQYWdlLFxuICBTVExvYWRPcHRpb25zLFxufSBmcm9tICcuL3RhYmxlLmludGVyZmFjZXMnO1xuaW1wb3J0IHsgU1RDb25maWcgfSBmcm9tICcuL3RhYmxlLmNvbmZpZyc7XG5pbXBvcnQgeyBTVEV4cG9ydCB9IGZyb20gJy4vdGFibGUtZXhwb3J0JztcbmltcG9ydCB7IFNUQ29sdW1uU291cmNlIH0gZnJvbSAnLi90YWJsZS1jb2x1bW4tc291cmNlJztcbmltcG9ydCB7IFNUUm93U291cmNlIH0gZnJvbSAnLi90YWJsZS1yb3cuZGlyZWN0aXZlJztcbmltcG9ydCB7IFNURGF0YVNvdXJjZSB9IGZyb20gJy4vdGFibGUtZGF0YS1zb3VyY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWJsZS5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW1xuICAgIFNURGF0YVNvdXJjZSxcbiAgICBTVFJvd1NvdXJjZSxcbiAgICBTVENvbHVtblNvdXJjZSxcbiAgICBTVEV4cG9ydCxcbiAgICBDTkN1cnJlbmN5UGlwZSxcbiAgICBEYXRlUGlwZSxcbiAgICBZTlBpcGUsXG4gICAgRGVjaW1hbFBpcGUsXG4gIF0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgU1RDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgaTE4biQ6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBkZWxvbkkxOG4kOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgdG90YWxUcGwgPSBgYDtcbiAgcHJpdmF0ZSBsb2NhbGU6IGFueSA9IHt9O1xuICBwcml2YXRlIGNsb25lUGFnZTogU1RQYWdlO1xuICBfZGF0YTogU1REYXRhW10gPSBbXTtcbiAgX2lzUGFnaW5hdGlvbiA9IHRydWU7XG4gIF9hbGxDaGVja2VkID0gZmFsc2U7XG4gIF9pbmRldGVybWluYXRlID0gZmFsc2U7XG4gIF9jb2x1bW5zOiBTVENvbHVtbltdID0gW107XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICAvKiogw6bClcKww6bCjcKuw6bCusKQICovXG4gIEBJbnB1dCgpXG4gIGRhdGE6IHN0cmluZyB8IFNURGF0YVtdIHwgT2JzZXJ2YWJsZTxTVERhdGFbXT47XG4gIC8qKiDDqMKvwrfDpsKxwoLDpMK9wpPDqcKFwo3Dp8K9wq4gKi9cbiAgQElucHV0KClcbiAgZ2V0IHJlcSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVxO1xuICB9XG4gIHNldCByZXEodmFsdWU6IFNUUmVxKSB7XG4gICAgY29uc3QgeyByZXEgfSA9IHRoaXMuY29nO1xuICAgIGNvbnN0IGl0ZW0gPSBPYmplY3QuYXNzaWduKHt9LCByZXEsIHZhbHVlKTtcbiAgICBpZiAoaXRlbS5yZU5hbWUgPT0gbnVsbCkge1xuICAgICAgaXRlbS5yZU5hbWUgPSBkZWVwQ29weShyZXEucmVOYW1lKTtcbiAgICB9XG4gICAgdGhpcy5fcmVxID0gaXRlbTtcbiAgfVxuICBwcml2YXRlIF9yZXE6IFNUUmVxO1xuICAvKiogw6jCv8KUw6XCm8Kew6TCvcKTw6nChcKNw6fCvcKuICovXG4gIEBJbnB1dCgpXG4gIGdldCByZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcztcbiAgfVxuICBzZXQgcmVzKHZhbHVlOiBTVFJlcykge1xuICAgIGNvbnN0IHsgcmVzIH0gPSB0aGlzLmNvZztcbiAgICBjb25zdCBpdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgcmVzLCB2YWx1ZSk7XG4gICAgaXRlbS5yZU5hbWUgPSBPYmplY3QuYXNzaWduKHt9LCByZXMucmVOYW1lLCBpdGVtLnJlTmFtZSk7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGl0ZW0ucmVOYW1lLmxpc3QpKVxuICAgICAgaXRlbS5yZU5hbWUubGlzdCA9IGl0ZW0ucmVOYW1lLmxpc3Quc3BsaXQoJy4nKTtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoaXRlbS5yZU5hbWUudG90YWwpKVxuICAgICAgaXRlbS5yZU5hbWUudG90YWwgPSBpdGVtLnJlTmFtZS50b3RhbC5zcGxpdCgnLicpO1xuICAgIHRoaXMuX3JlcyA9IGl0ZW07XG4gIH1cbiAgcHJpdmF0ZSBfcmVzOiBTVFJlcztcbiAgLyoqIMOlwojCl8Omwo/Cj8Oowr/CsCAgKi9cbiAgQElucHV0KClcbiAgY29sdW1uczogU1RDb2x1bW5bXSA9IFtdO1xuICAvKiogw6bCr8KPw6nCocK1w6bClcKww6nCh8KPw6/CvMKMw6XCvcKTw6jCrsK+w6fCvcKuw6TCuMK6IGAwYCDDqMKhwqjDp8KkwrrDpMK4wo3DpcKIwobDqcKhwrXDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgMTBgICovXG4gIEBJbnB1dCgpXG4gIEBJbnB1dE51bWJlcigpXG4gIHBzID0gMTA7XG4gIC8qKiDDpcK9wpPDpcKJwo3DqcKhwrXDp8KgwoEgKi9cbiAgQElucHV0KClcbiAgQElucHV0TnVtYmVyKClcbiAgcGkgPSAxO1xuICAvKiogw6bClcKww6bCjcKuw6bCgMK7w6nCh8KPICovXG4gIEBJbnB1dCgpXG4gIEBJbnB1dE51bWJlcigpXG4gIHRvdGFsID0gMDtcbiAgLyoqIMOlwojChsOpwqHCtcOlwpnCqMOpwoXCjcOnwr3CriAqL1xuICBASW5wdXQoKVxuICBnZXQgcGFnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGFnZTtcbiAgfVxuICBzZXQgcGFnZSh2YWx1ZTogU1RQYWdlKSB7XG4gICAgdGhpcy5jbG9uZVBhZ2UgPSB2YWx1ZTtcbiAgICBjb25zdCB7IHBhZ2UgfSA9IHRoaXMuY29nO1xuICAgIGNvbnN0IGl0ZW0gPSBPYmplY3QuYXNzaWduKHt9LCBkZWVwQ29weShwYWdlKSwgdmFsdWUpO1xuICAgIGNvbnN0IHsgdG90YWwgfSA9IGl0ZW07XG4gICAgaWYgKHR5cGVvZiB0b3RhbCA9PT0gJ3N0cmluZycgJiYgdG90YWwubGVuZ3RoKSB7XG4gICAgICB0aGlzLnRvdGFsVHBsID0gdG90YWw7XG4gICAgfSBlbHNlIGlmICh0b0Jvb2xlYW4odG90YWwpKSB7XG4gICAgICB0aGlzLnRvdGFsVHBsID0gdGhpcy5sb2NhbGUudG90YWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudG90YWxUcGwgPSAnJztcbiAgICB9XG4gICAgdGhpcy5fcGFnZSA9IGl0ZW07XG4gIH1cbiAgcHJpdmF0ZSBfcGFnZTogU1RQYWdlO1xuICAvKiogw6bCmMKvw6XCkMKmw6bCmMK+w6fCpMK6TG9hZGluZyAqL1xuICBASW5wdXQoKVxuICBASW5wdXRCb29sZWFuKClcbiAgbG9hZGluZyA9IGZhbHNlO1xuICAvKiogw6XCu8K2w6jCv8Kfw6bCmMK+w6fCpMK6w6XCisKgw6jCvcK9w6bClcKIw6bCnsKcw6fCmsKEw6bCl8K2w6nCl8K0w6/CvMKIw6nCmMKyw6bCrcKiw6nCl8Kqw6fCg8KBw6/CvMKJICovXG4gIEBJbnB1dCgpXG4gIEBJbnB1dE51bWJlcigpXG4gIGxvYWRpbmdEZWxheSA9IDA7XG4gIC8qKiDDpsKYwq/DpcKQwqbDpsKYwr7Dp8KkwrrDqMK+wrnDpsKhwoYgKi9cbiAgQElucHV0KClcbiAgQElucHV0Qm9vbGVhbigpXG4gIGJvcmRlcmVkID0gZmFsc2U7XG4gIC8qKiB0YWJsZcOlwqTCp8OlwrDCjyAqL1xuICBASW5wdXQoKVxuICBzaXplOiAnc21hbGwnIHwgJ21pZGRsZScgfCAnZGVmYXVsdCc7XG4gIC8qKiDDp8K6wrXDpcKQwpHDpsKUwq/DpsKMwoHDpsK7wprDpcKKwqjDr8K8wozDpMK5wp/DpcKPwq/Dp8KUwqjDpMK6wo7DpsKMwofDpcKuwprDpsK7wprDpcKKwqjDpcKMwrrDpcKfwp/Dp8KawoTDqcKrwpjDpcK6wqbDr8K8wppgeyB5OiAnMzAwcHgnLCB4OiAnMzAwcHgnIH1gICovXG4gIEBJbnB1dCgpXG4gIHNjcm9sbDogeyB5Pzogc3RyaW5nOyB4Pzogc3RyaW5nIH07XG4gIC8qKiDDpsKYwq/DpcKQwqbDpcKkwprDpsKOwpLDpcK6wo/Dr8K8wozDpcK9wpMgYHNvcnRgIMOlwqTCmsOkwrjCqsOnwpvCuMOlwpDCjMOlwoDCvMOmwpfCtsOowofCqsOlworCqMOlwpDCiMOlwrnCtsOvwrzCjMOlwrvCusOowq7CrsOlwpDCjsOnwqvCr8OmwpTCr8OmwozCgcOmwpfCtsOkwr3Cv8OnwpTCqCAqL1xuICBASW5wdXQoKVxuICBnZXQgbXVsdGlTb3J0KCkge1xuICAgIHJldHVybiB0aGlzLl9tdWx0aVNvcnQ7XG4gIH1cbiAgc2V0IG11bHRpU29ydCh2YWx1ZTogYW55KSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nICYmICF0b0Jvb2xlYW4odmFsdWUpKSB7XG4gICAgICB0aGlzLl9tdWx0aVNvcnQgPSBudWxsO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9tdWx0aVNvcnQgPSBPYmplY3QuYXNzaWduKFxuICAgICAgPFNUTXVsdGlTb3J0PntcbiAgICAgICAga2V5OiAnc29ydCcsXG4gICAgICAgIHNlcGFyYXRvcjogJy0nLFxuICAgICAgICBuYW1lU2VwYXJhdG9yOiAnLicsXG4gICAgICB9LFxuICAgICAgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyA/IHZhbHVlIDoge30sXG4gICAgKTtcbiAgfVxuICBwcml2YXRlIF9tdWx0aVNvcnQ6IFNUTXVsdGlTb3J0O1xuICAvKiogYGhlYWRlcmAgw6bCoMKHw6nCosKYICovXG4gIEBJbnB1dCgpXG4gIGhlYWRlcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIC8qKiBgZm9vdGVyYCDDpcK6wpXDqcKDwqggKi9cbiAgQElucHV0KClcbiAgZm9vdGVyOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgLyoqIMOpwqLCncOlwqTCliBgYm9keWAgw6XChsKFw6XCrsK5ICovXG4gIEBJbnB1dCgpXG4gIGJvZHk6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICAvKiogYGV4cGFuZGAgw6XCj8Kvw6XCscKVw6XCvMKAw6/CvMKMw6XCvcKTw6bClcKww6bCjcKuw6bCusKQw6TCuMKtw6XCjMKFw6bCi8KsIGBleHBhbmRgIMOowqHCqMOnwqTCusOlwrHClcOlwrzCgMOnworCtsOmwoDCgSAqL1xuICBASW5wdXQoKVxuICBleHBhbmQ6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBhbnk7IGNvbHVtbjogU1RDb2x1bW4gfT47XG4gIEBJbnB1dCgpXG4gIG5vUmVzdWx0OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KClcbiAgd2lkdGhDb25maWc6IHN0cmluZ1tdO1xuICAvKiogw6jCr8K3w6bCscKCw6XCvMKCw6XCuMK4w6bCl8K2w6XCm8Kew6jCsMKDICovXG4gIEBPdXRwdXQoKVxuICByZWFkb25seSBlcnJvciA9IG5ldyBFdmVudEVtaXR0ZXI8U1RFcnJvcj4oKTtcbiAgLyoqXG4gICAqIMOlwo/CmMOlwozClsOmwpfCtsOlwpvCnsOowrDCg8OvwrzCjMOlwozChcOmwovCrMOvwrzCmmBwaWDDo8KAwoFgcHNgw6PCgMKBYGNoZWNrYm94YMOjwoDCgWByYWRpb2DDo8KAwoFgc29ydGDDo8KAwoFgZmlsdGVyYMOjwoDCgWBjbGlja2DDo8KAwoFgZGJsQ2xpY2tgIMOlwo/CmMOlworCqFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8U1RDaGFuZ2U+KCk7XG4gIC8qKiDDqMKhwozDpcKNwpXDpcKHwrvDpcKkwprDpcKwwpHDpsKXwrbDqcKVwr/DpMK5wovDp8KxwrvDpMK4wrrDpcKPwozDpcKHwrvDr8K8wojDpcKNwpXDpMK9wo3Dr8K8wprDpsKvwqvDp8KnwpLDr8K8wonDr8K8wozDqcK7wpjDqMKuwqTDr8K8wppgMjAwYCAqL1xuICBASW5wdXQoKVxuICBASW5wdXROdW1iZXIoKVxuICByb3dDbGlja1RpbWUgPSAyMDA7XG5cbiAgQElucHV0KClcbiAgQElucHV0Qm9vbGVhbigpXG4gIHJlc3BvbnNpdmVIaWRlSGVhZGVyRm9vdGVyOiBib29sZWFuO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIGNvbXBhdGlibGVcblxuICAvKipcbiAgICogY2hlY2tib3jDpcKPwpjDpcKMwpbDpsKXwrbDpcKbwp7DqMKwwoPDr8K8wozDpcKPwoLDpsKVwrDDpMK4wrrDpcK9wpPDpcKJwo3DpsKJwoDDqcKAwonDpsK4woXDpcKNwpVcbiAgICogQGRlcHJlY2F0ZWQgw6TCvcK/w6fClMKoIGBjaGFuZ2VgIMOmwpvCv8OkwrvCo1xuICAgKiBAZGVwcmVjYXRlZCBhcyBvZiB2M1xuICAgKi9cbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IGNoZWNrYm94Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxTVERhdGFbXT4oKTtcbiAgLyoqXG4gICAqIHJhZGlvw6XCj8KYw6XCjMKWw6bCl8K2w6XCm8Kew6jCsMKDw6/CvMKMw6XCj8KCw6bClcKww6TCuMK6w6XCvcKTw6XCicKNw6bCicKAw6nCgMKJXG4gICAqIEBkZXByZWNhdGVkIMOkwr3Cv8OnwpTCqCBgY2hhbmdlYCDDpsKbwr/DpMK7wqNcbiAgICogQGRlcHJlY2F0ZWQgYXMgb2YgdjNcbiAgICovXG4gIEBPdXRwdXQoKVxuICByZWFkb25seSByYWRpb0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8U1REYXRhPigpO1xuICAvKipcbiAgICogw6bCjsKSw6XCusKPw6XCm8Kew6jCsMKDXG4gICAqIEBkZXByZWNhdGVkIMOkwr3Cv8OnwpTCqCBgY2hhbmdlYCDDpsKbwr/DpMK7wqNcbiAgICogQGRlcHJlY2F0ZWQgYXMgb2YgdjNcbiAgICovXG4gIEBPdXRwdXQoKVxuICByZWFkb25seSBzb3J0Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIC8qKlxuICAgKiDDqMK/wofDpsK7wqTDpcKPwpjDpcKMwpbDpsKXwrbDpcKbwp7DqMKwwoNcbiAgICogQGRlcHJlY2F0ZWQgw6TCvcK/w6fClMKoIGBjaGFuZ2VgIMOmwpvCv8OkwrvCo1xuICAgKiBAZGVwcmVjYXRlZCBhcyBvZiB2M1xuICAgKi9cbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IGZpbHRlckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8U1RDb2x1bW4+KCk7XG4gIC8qKlxuICAgKiDDqMKhwozDpcKNwpXDpcKHwrvDpcKbwp7DqMKwwoNcbiAgICogQGRlcHJlY2F0ZWQgw6TCvcK/w6fClMKoIGBjaGFuZ2VgIMOmwpvCv8OkwrvCo1xuICAgKiBAZGVwcmVjYXRlZCBhcyBvZiB2M1xuICAgKi9cbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IHJvd0NsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxTVENoYW5nZVJvd0NsaWNrPigpO1xuICAvKipcbiAgICogw6jCocKMw6XCj8KMw6XCh8K7w6XCm8Kew6jCsMKDXG4gICAqIEBkZXByZWNhdGVkIMOkwr3Cv8OnwpTCqCBgY2hhbmdlYCDDpsKbwr/DpMK7wqNcbiAgICogQGRlcHJlY2F0ZWQgYXMgb2YgdjNcbiAgICovXG4gIEBPdXRwdXQoKVxuICByZWFkb25seSByb3dEYmxDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8U1RDaGFuZ2VSb3dDbGljaz4oKTtcbiAgLy8jZW5kcmVnaW9uXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBjb2c6IFNUQ29uZmlnLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBleHBvcnRTcnY6IFNURXhwb3J0LFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChBTEFJTl9JMThOX1RPS0VOKVxuICAgIGkxOG5TcnY6IEFsYWluSTE4TlNlcnZpY2UsXG4gICAgcHJpdmF0ZSBtb2RhbEhlbHBlcjogTW9kYWxIZWxwZXIsXG4gICAgcHJpdmF0ZSBkcmF3ZXJIZWxwZXI6IERyYXdlckhlbHBlcixcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogYW55LFxuICAgIHByaXZhdGUgY29sdW1uU291cmNlOiBTVENvbHVtblNvdXJjZSxcbiAgICBwcml2YXRlIGRhdGFTb3VyY2U6IFNURGF0YVNvdXJjZSxcbiAgICBwcml2YXRlIGRlbG9uSTE4bjogRGVsb25Mb2NhbGVTZXJ2aWNlLFxuICApIHtcbiAgICB0aGlzLmRlbG9uSTE4biQgPSB0aGlzLmRlbG9uSTE4bi5jaGFuZ2Uuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMubG9jYWxlID0gdGhpcy5kZWxvbkkxOG4uZ2V0RGF0YSgnc3QnKTtcbiAgICAgIGlmICh0aGlzLl9jb2x1bW5zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5wYWdlID0gdGhpcy5jbG9uZVBhZ2U7XG4gICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGVlcENvcHkoY29nKSk7XG4gICAgaWYgKGkxOG5TcnYpIHtcbiAgICAgIHRoaXMuaTE4biQgPSBpMThuU3J2LmNoYW5nZVxuICAgICAgICAucGlwZShmaWx0ZXIoKCkgPT4gdGhpcy5fY29sdW1ucy5sZW5ndGggPiAwKSlcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLnVwZGF0ZUNvbHVtbnMoKSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyVG90YWwodG90YWw6IHN0cmluZywgcmFuZ2U6IHN0cmluZ1tdKSB7XG4gICAgcmV0dXJuIHRoaXMudG90YWxUcGxcbiAgICAgID8gdGhpcy50b3RhbFRwbFxuICAgICAgICAgIC5yZXBsYWNlKCd7e3RvdGFsfX0nLCB0b3RhbClcbiAgICAgICAgICAucmVwbGFjZSgne3tyYW5nZVswXX19JywgcmFuZ2VbMF0pXG4gICAgICAgICAgLnJlcGxhY2UoJ3t7cmFuZ2VbMV19fScsIHJhbmdlWzFdKVxuICAgICAgOiAnJztcbiAgfVxuXG4gIHByaXZhdGUgY2hhbmdlRW1pdCh0eXBlOiBTVENoYW5nZVR5cGUsIGRhdGE/OiBhbnkpIHtcbiAgICBjb25zdCByZXM6IFNUQ2hhbmdlID0ge1xuICAgICAgdHlwZSxcbiAgICAgIHBpOiB0aGlzLnBpLFxuICAgICAgcHM6IHRoaXMucHMsXG4gICAgICB0b3RhbDogdGhpcy50b3RhbCxcbiAgICB9O1xuICAgIGlmIChkYXRhICE9IG51bGwpIHtcbiAgICAgIHJlc1t0eXBlXSA9IGRhdGE7XG4gICAgfVxuICAgIHRoaXMuY2hhbmdlLmVtaXQocmVzKTtcbiAgfVxuXG4gIC8vI3JlZ2lvbiBkYXRhXG5cbiAgcHJpdmF0ZSBfbG9hZCgpIHtcbiAgICBjb25zdCB7IHBpLCBwcywgZGF0YSwgcmVxLCByZXMsIHBhZ2UsIHRvdGFsLCBtdWx0aVNvcnQgfSA9IHRoaXM7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICByZXR1cm4gdGhpcy5kYXRhU291cmNlXG4gICAgICAucHJvY2Vzcyh7XG4gICAgICAgIHBpLFxuICAgICAgICBwcyxcbiAgICAgICAgdG90YWwsXG4gICAgICAgIGRhdGEsXG4gICAgICAgIHJlcSxcbiAgICAgICAgcmVzLFxuICAgICAgICBwYWdlLFxuICAgICAgICBjb2x1bW5zOiB0aGlzLl9jb2x1bW5zLFxuICAgICAgICBtdWx0aVNvcnQsXG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0LnBpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRoaXMucGkgPSByZXN1bHQucGk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQudG90YWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhpcy50b3RhbCA9IHJlc3VsdC50b3RhbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdC5wYWdlU2hvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aGlzLl9pc1BhZ2luYXRpb24gPSByZXN1bHQucGFnZVNob3c7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZGF0YSA9IHJlc3VsdC5saXN0O1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgICAgIH0pXG4gICAgICAudGhlbigoKSA9PiB0aGlzLl9yZWZDaGVjaygpKVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZXJyb3IuZW1pdCh7IHR5cGU6ICdyZXEnLCBlcnJvciB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIMOmwqDCucOmwo3CrsOpwqHCtcOnwqDCgcOpwofCjcOmwpbCsMOlworCoMOowr3CvcOmwpXCsMOmwo3CrlxuICAgKlxuICAgKiBAcGFyYW0gcGkgw6bCjMKHw6XCrsKaw6XCvcKTw6XCicKNw6nCocK1w6fCoMKBw6/CvMKMw6nCu8KYw6jCrsKkw6/CvMKaYDFgXG4gICAqIEBwYXJhbSBleHRyYVBhcmFtcyDDqcKHwo3DpsKWwrDDpsKMwofDpcKuwpogYGV4dHJhUGFyYW1zYCDDpcKAwrxcbiAgICogQHBhcmFtIG9wdGlvbnMgw6nCgMKJw6nCocK5XG4gICAqL1xuICBsb2FkKHBpID0gMSwgZXh0cmFQYXJhbXM/OiBhbnksIG9wdGlvbnM/OiBTVExvYWRPcHRpb25zKSB7XG4gICAgaWYgKHBpICE9PSAtMSkgdGhpcy5waSA9IHBpO1xuICAgIGlmICh0eXBlb2YgZXh0cmFQYXJhbXMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLl9yZXEucGFyYW1zID1cbiAgICAgICAgb3B0aW9ucyAmJiBvcHRpb25zLm1lcmdlXG4gICAgICAgICAgPyBPYmplY3QuYXNzaWduKHRoaXMuX3JlcS5wYXJhbXMsIGV4dHJhUGFyYW1zKVxuICAgICAgICAgIDogZXh0cmFQYXJhbXM7XG4gICAgfVxuICAgIHRoaXMuX2NoYW5nZSgncGknKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDDqcKHwo3DpsKWwrDDpcKIwrfDpsKWwrDDpcK9wpPDpcKJwo3DqcKhwrVcbiAgICogQHBhcmFtIGV4dHJhUGFyYW1zIMOpwofCjcOmwpbCsMOmwozCh8Olwq7CmiBgZXh0cmFQYXJhbXNgIMOlwoDCvFxuICAgKi9cbiAgcmVsb2FkKGV4dHJhUGFyYW1zPzogYW55LCBvcHRpb25zPzogU1RMb2FkT3B0aW9ucykge1xuICAgIHRoaXMubG9hZCgtMSwgZXh0cmFQYXJhbXMsIG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIMOpwofCjcOnwr3CrsOkwrjClMOpwofCjcOmwpbCsMOowq7CvsOnwr3CriBgcGlgIMOkwrjCuiBgMWDDr8K8wozDpcKMwoXDpcKQwqvDpMK7wqXDpMK4wovDpcKAwrzDr8K8wppcbiAgICogLSBgY2hlY2tgIMOmwpXCsMOmwo3CrlxuICAgKiAtIGByYWRpb2Agw6bClcKww6bCjcKuXG4gICAqIC0gYHNvcnRgIMOmwpXCsMOmwo3CrlxuICAgKiAtIGBmaWxldGVyYCDDpsKVwrDDpsKNwq5cbiAgICpcbiAgICogQHBhcmFtIGV4dHJhUGFyYW1zIMOpwofCjcOmwpbCsMOmwozCh8Olwq7CmiBgZXh0cmFQYXJhbXNgIMOlwoDCvFxuICAgKi9cbiAgcmVzZXQoZXh0cmFQYXJhbXM/OiBhbnksIG9wdGlvbnM/OiBTVExvYWRPcHRpb25zKSB7XG4gICAgdGhpcy5jbGVhckNoZWNrKClcbiAgICAgIC5jbGVhclJhZGlvKClcbiAgICAgIC5jbGVhckZpbHRlcigpXG4gICAgICAuY2xlYXJTb3J0KCk7XG4gICAgdGhpcy5sb2FkKDEsIGV4dHJhUGFyYW1zLCBvcHRpb25zKTtcbiAgfVxuXG4gIHByaXZhdGUgX3RvVG9wKCkge1xuICAgIGlmICghdGhpcy5wYWdlLnRvVG9wKSByZXR1cm47XG4gICAgY29uc3QgZWwgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgaWYgKHRoaXMuc2Nyb2xsKSB7XG4gICAgICBlbC5xdWVyeVNlbGVjdG9yKCcuYW50LXRhYmxlLWJvZHknKS5zY3JvbGxUbygwLCAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAvLyBmaXggaGVhZGVyIGhlaWdodFxuICAgIHRoaXMuZG9jLmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgLT0gdGhpcy5wYWdlLnRvVG9wT2Zmc2V0O1xuICB9XG5cbiAgX2NoYW5nZSh0eXBlOiAncGknIHwgJ3BzJykge1xuICAgIHRoaXMuX2xvYWQoKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuX3RvVG9wKCk7XG4gICAgfSk7XG4gICAgdGhpcy5jaGFuZ2VFbWl0KHR5cGUpO1xuICB9XG5cbiAgX2NsaWNrKGU6IEV2ZW50LCBpdGVtOiBhbnksIGNvbDogU1RDb2x1bW4pIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCByZXMgPSBjb2wuY2xpY2soaXRlbSwgdGhpcyk7XG4gICAgaWYgKHR5cGVvZiByZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHJlcyk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgcm93Q2xpY2tDb3VudCA9IDA7XG4gIF9yb3dDbGljayhlOiBFdmVudCwgaXRlbTogYW55LCBpbmRleDogbnVtYmVyKSB7XG4gICAgaWYgKChlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkubm9kZU5hbWUgPT09ICdJTlBVVCcpIHJldHVybjtcbiAgICArK3RoaXMucm93Q2xpY2tDb3VudDtcbiAgICBpZiAodGhpcy5yb3dDbGlja0NvdW50ICE9PSAxKSByZXR1cm47XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBkYXRhID0geyBlLCBpdGVtLCBpbmRleCB9O1xuICAgICAgaWYgKHRoaXMucm93Q2xpY2tDb3VudCA9PT0gMSkge1xuICAgICAgICB0aGlzLmNoYW5nZUVtaXQoJ2NsaWNrJywgZGF0YSk7XG4gICAgICAgIC8vIEBkZXByZWNhdGVkIGFzIG9mIHYzXG4gICAgICAgIHRoaXMucm93Q2xpY2suZW1pdChkYXRhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2hhbmdlRW1pdCgnZGJsQ2xpY2snLCBkYXRhKTtcbiAgICAgICAgLy8gQGRlcHJlY2F0ZWQgYXMgb2YgdjNcbiAgICAgICAgdGhpcy5yb3dEYmxDbGljay5lbWl0KGRhdGEpO1xuICAgICAgfVxuICAgICAgdGhpcy5yb3dDbGlja0NvdW50ID0gMDtcbiAgICB9LCB0aGlzLnJvd0NsaWNrVGltZSk7XG4gIH1cblxuICAvKiogw6fCp8K7w6nCmcKkw6bCn8KQw6jCocKMw6bClcKww6bCjcKuICovXG4gIHJlbW92ZVJvdyhkYXRhOiBTVERhdGEgfCBTVERhdGFbXSkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgZGF0YSA9IFsgZGF0YSBdO1xuICAgIH1cblxuICAgIChkYXRhIGFzIFNURGF0YVtdKS5tYXAoaXRlbSA9PiB0aGlzLl9kYXRhLmluZGV4T2YoaXRlbSkpXG4gICAgICAgIC5maWx0ZXIocG9zID0+IHBvcyAhPT0gLTEpXG4gICAgICAgIC5mb3JFYWNoKHBvcyA9PiB0aGlzLl9kYXRhLnNwbGljZShwb3MsIDEpKTtcblxuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgLy8jZW5kcmVnaW9uXG5cbiAgLy8jcmVnaW9uIHNvcnRcblxuICBzb3J0KGNvbDogU1RDb2x1bW4sIGlkeDogbnVtYmVyLCB2YWx1ZTogYW55KSB7XG4gICAgaWYgKHRoaXMubXVsdGlTb3J0KSB7XG4gICAgICBjb2wuX3NvcnQuZGVmYXVsdCA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9jb2x1bW5zLmZvckVhY2goXG4gICAgICAgIChpdGVtLCBpbmRleCkgPT4gKGl0ZW0uX3NvcnQuZGVmYXVsdCA9IGluZGV4ID09PSBpZHggPyB2YWx1ZSA6IG51bGwpLFxuICAgICAgKTtcbiAgICB9XG4gICAgdGhpcy5fbG9hZCgpO1xuICAgIGNvbnN0IHJlcyA9IHtcbiAgICAgIHZhbHVlLFxuICAgICAgbWFwOiB0aGlzLmRhdGFTb3VyY2UuZ2V0UmVxU29ydE1hcCh0aGlzLm11bHRpU29ydCwgdGhpcy5fY29sdW1ucyksXG4gICAgICBjb2x1bW46IGNvbCxcbiAgICB9O1xuICAgIHRoaXMuY2hhbmdlRW1pdCgnc29ydCcsIHJlcyk7XG4gICAgLy8gQGRlcHJlY2F0ZWQgYXMgb2YgdjNcbiAgICB0aGlzLnNvcnRDaGFuZ2UuZW1pdChyZXMpO1xuICB9XG5cbiAgY2xlYXJTb3J0KCkge1xuICAgIHRoaXMuX2NvbHVtbnMuZm9yRWFjaChpdGVtID0+IChpdGVtLl9zb3J0LmRlZmF1bHQgPSBudWxsKSk7XG4gIH1cblxuICAvLyNlbmRyZWdpb25cblxuICAvLyNyZWdpb24gZmlsdGVyXG5cbiAgcHJpdmF0ZSBoYW5kbGVGaWx0ZXIoY29sOiBTVENvbHVtbikge1xuICAgIGNvbC5maWx0ZXIuZGVmYXVsdCA9IGNvbC5maWx0ZXIubWVudXMuZmluZEluZGV4KHcgPT4gdy5jaGVja2VkKSAhPT0gLTE7XG4gICAgdGhpcy5fbG9hZCgpO1xuICAgIHRoaXMuY2hhbmdlRW1pdCgnZmlsdGVyJywgY29sKTtcbiAgICAvLyBAZGVwcmVjYXRlZCBhcyBvZiB2M1xuICAgIHRoaXMuZmlsdGVyQ2hhbmdlLmVtaXQoY29sKTtcbiAgfVxuXG4gIF9maWx0ZXJDb25maXJtKGNvbDogU1RDb2x1bW4pIHtcbiAgICB0aGlzLmhhbmRsZUZpbHRlcihjb2wpO1xuICB9XG5cbiAgX2ZpbHRlckNsZWFyKGNvbDogU1RDb2x1bW4pIHtcbiAgICBjb2wuZmlsdGVyLm1lbnVzLmZvckVhY2goaSA9PiAoaS5jaGVja2VkID0gZmFsc2UpKTtcbiAgICB0aGlzLmhhbmRsZUZpbHRlcihjb2wpO1xuICB9XG5cbiAgX2ZpbHRlclJhZGlvKGNvbDogU1RDb2x1bW4sIGl0ZW06IFNUQ29sdW1uRmlsdGVyTWVudSwgY2hlY2tlZDogYm9vbGVhbikge1xuICAgIGNvbC5maWx0ZXIubWVudXMuZm9yRWFjaChpID0+IChpLmNoZWNrZWQgPSBmYWxzZSkpO1xuICAgIGl0ZW0uY2hlY2tlZCA9IGNoZWNrZWQ7XG4gIH1cblxuICBjbGVhckZpbHRlcigpIHtcbiAgICB0aGlzLl9jb2x1bW5zXG4gICAgICAuZmlsdGVyKHcgPT4gdy5maWx0ZXIgJiYgdy5maWx0ZXIuZGVmYXVsdCA9PT0gdHJ1ZSlcbiAgICAgIC5mb3JFYWNoKGNvbCA9PiB7XG4gICAgICAgIGNvbC5maWx0ZXIuZGVmYXVsdCA9IGZhbHNlO1xuICAgICAgICBjb2wuZmlsdGVyLm1lbnVzLmZvckVhY2goZiA9PiAoZi5jaGVja2VkID0gZmFsc2UpKTtcbiAgICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8jZW5kcmVnaW9uXG5cbiAgLy8jcmVnaW9uIGNoZWNrYm94XG5cbiAgLyoqIMOmwrjChcOpwpnCpMOmwonCgMOmwpzCiSBgY2hlY2tib3hgICovXG4gIGNsZWFyQ2hlY2soKTogdGhpcyB7XG4gICAgcmV0dXJuIHRoaXMuX2NoZWNrQWxsKGZhbHNlKTtcbiAgfVxuXG4gIHByaXZhdGUgX3JlZkNoZWNrKCk6IHRoaXMge1xuICAgIGNvbnN0IHZhbGlkRGF0YSA9IHRoaXMuX2RhdGEuZmlsdGVyKHcgPT4gIXcuZGlzYWJsZWQpO1xuICAgIGNvbnN0IGNoZWNrZWRMaXN0ID0gdmFsaWREYXRhLmZpbHRlcih3ID0+IHcuY2hlY2tlZCA9PT0gdHJ1ZSk7XG4gICAgdGhpcy5fYWxsQ2hlY2tlZCA9XG4gICAgICBjaGVja2VkTGlzdC5sZW5ndGggPiAwICYmIGNoZWNrZWRMaXN0Lmxlbmd0aCA9PT0gdmFsaWREYXRhLmxlbmd0aDtcbiAgICBjb25zdCBhbGxVbkNoZWNrZWQgPSB2YWxpZERhdGEuZXZlcnkodmFsdWUgPT4gIXZhbHVlLmNoZWNrZWQpO1xuICAgIHRoaXMuX2luZGV0ZXJtaW5hdGUgPSAhdGhpcy5fYWxsQ2hlY2tlZCAmJiAhYWxsVW5DaGVja2VkO1xuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgX2NoZWNrQWxsKGNoZWNrZWQ/OiBib29sZWFuKTogdGhpcyB7XG4gICAgY2hlY2tlZCA9IHR5cGVvZiBjaGVja2VkID09PSAndW5kZWZpbmVkJyA/IHRoaXMuX2FsbENoZWNrZWQgOiBjaGVja2VkO1xuICAgIHRoaXMuX2RhdGEuZmlsdGVyKHcgPT4gIXcuZGlzYWJsZWQpLmZvckVhY2goaSA9PiAoaS5jaGVja2VkID0gY2hlY2tlZCkpO1xuICAgIHJldHVybiB0aGlzLl9yZWZDaGVjaygpLl9jaGVja05vdGlmeSgpO1xuICB9XG5cbiAgX2NoZWNrU2VsZWN0aW9uKGk6IFNURGF0YSwgdmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpLmNoZWNrZWQgPSB2YWx1ZTtcbiAgICByZXR1cm4gdGhpcy5fcmVmQ2hlY2soKS5fY2hlY2tOb3RpZnkoKTtcbiAgfVxuXG4gIF9yb3dTZWxlY3Rpb24ocm93OiBTVENvbHVtblNlbGVjdGlvbik6IHRoaXMge1xuICAgIHJvdy5zZWxlY3QodGhpcy5fZGF0YSk7XG4gICAgcmV0dXJuIHRoaXMuX3JlZkNoZWNrKCkuX2NoZWNrTm90aWZ5KCk7XG4gIH1cblxuICBfY2hlY2tOb3RpZnkoKTogdGhpcyB7XG4gICAgY29uc3QgcmVzID0gdGhpcy5fZGF0YS5maWx0ZXIodyA9PiAhdy5kaXNhYmxlZCAmJiB3LmNoZWNrZWQgPT09IHRydWUpO1xuICAgIHRoaXMuY2hhbmdlRW1pdCgnY2hlY2tib3gnLCByZXMpO1xuICAgIC8vIEBkZXByZWNhdGVkIGFzIG9mIHYzXG4gICAgdGhpcy5jaGVja2JveENoYW5nZS5lbWl0KHJlcyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyNlbmRyZWdpb25cblxuICAvLyNyZWdpb24gcmFkaW9cblxuICAvKiogw6bCuMKFw6nCmcKkw6bCicKAw6bCnMKJIGByYWRpb2AgKi9cbiAgY2xlYXJSYWRpbygpOiB0aGlzIHtcbiAgICB0aGlzLl9kYXRhLmZpbHRlcih3ID0+IHcuY2hlY2tlZCkuZm9yRWFjaChpdGVtID0+IChpdGVtLmNoZWNrZWQgPSBmYWxzZSkpO1xuICAgIHRoaXMuY2hhbmdlRW1pdCgncmFkaW8nLCBudWxsKTtcbiAgICAvLyBAZGVwcmVjYXRlZCBhcyBvZiB2M1xuICAgIHRoaXMucmFkaW9DaGFuZ2UuZW1pdChudWxsKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIF9yZWZSYWRpbyhjaGVja2VkOiBib29sZWFuLCBpdGVtOiBTVERhdGEpOiB0aGlzIHtcbiAgICAvLyBpZiAoaXRlbS5kaXNhYmxlZCA9PT0gdHJ1ZSkgcmV0dXJuO1xuICAgIHRoaXMuX2RhdGEuZmlsdGVyKHcgPT4gIXcuZGlzYWJsZWQpLmZvckVhY2goaSA9PiAoaS5jaGVja2VkID0gZmFsc2UpKTtcbiAgICBpdGVtLmNoZWNrZWQgPSBjaGVja2VkO1xuICAgIHRoaXMuY2hhbmdlRW1pdCgncmFkaW8nLCBpdGVtKTtcbiAgICAvLyBAZGVwcmVjYXRlZCBhcyBvZiB2M1xuICAgIHRoaXMucmFkaW9DaGFuZ2UuZW1pdChpdGVtKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vI2VuZHJlZ2lvblxuXG4gIC8vI3JlZ2lvbiBidXR0b25zXG5cbiAgX2J0bkNsaWNrKGU6IEV2ZW50LCByZWNvcmQ6IGFueSwgYnRuOiBTVENvbHVtbkJ1dHRvbikge1xuICAgIGlmIChlKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICBpZiAoYnRuLnR5cGUgPT09ICdtb2RhbCcgfHwgYnRuLnR5cGUgPT09ICdzdGF0aWMnKSB7XG4gICAgICBjb25zdCBvYmogPSB7fTtcbiAgICAgIGNvbnN0IHsgbW9kYWwgfSA9IGJ0bjtcbiAgICAgIG9ialttb2RhbC5wYXJhbXNOYW1lXSA9IHJlY29yZDtcbiAgICAgIGNvbnN0IG9wdGlvbnM6IE1vZGFsSGVscGVyT3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIG1vZGFsKTtcbiAgICAgICh0aGlzLm1vZGFsSGVscGVyW1xuICAgICAgICBidG4udHlwZSA9PT0gJ21vZGFsJyA/ICdjcmVhdGUnIDogJ2NyZWF0ZVN0YXRpYydcbiAgICAgIF0gYXMgYW55KShcbiAgICAgICAgbW9kYWwuY29tcG9uZW50LFxuICAgICAgICBPYmplY3QuYXNzaWduKG9iaiwgbW9kYWwucGFyYW1zICYmIG1vZGFsLnBhcmFtcyhyZWNvcmQpKSxcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgIClcbiAgICAgICAgLnBpcGUoZmlsdGVyKHcgPT4gdHlwZW9mIHcgIT09ICd1bmRlZmluZWQnKSlcbiAgICAgICAgLnN1YnNjcmliZShyZXMgPT4gdGhpcy5idG5DYWxsYmFjayhyZWNvcmQsIGJ0biwgcmVzKSk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChidG4udHlwZSA9PT0gJ2RyYXdlcicpIHtcbiAgICAgIGNvbnN0IG9iaiA9IHt9O1xuICAgICAgY29uc3QgeyBkcmF3ZXIgfSA9IGJ0bjtcbiAgICAgIG9ialtkcmF3ZXIucGFyYW1zTmFtZV0gPSByZWNvcmQ7XG4gICAgICB0aGlzLmRyYXdlckhlbHBlclxuICAgICAgICAuY3JlYXRlKFxuICAgICAgICAgIGRyYXdlci50aXRsZSxcbiAgICAgICAgICBkcmF3ZXIuY29tcG9uZW50LFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24ob2JqLCBkcmF3ZXIucGFyYW1zICYmIGRyYXdlci5wYXJhbXMocmVjb3JkKSksXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgZHJhd2VyKSxcbiAgICAgICAgKVxuICAgICAgICAucGlwZShmaWx0ZXIodyA9PiB0eXBlb2YgdyAhPT0gJ3VuZGVmaW5lZCcpKVxuICAgICAgICAuc3Vic2NyaWJlKHJlcyA9PiB0aGlzLmJ0bkNhbGxiYWNrKHJlY29yZCwgYnRuLCByZXMpKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKGJ0bi50eXBlID09PSAnbGluaycpIHtcbiAgICAgIGNvbnN0IGNsaWNrUmVzID0gdGhpcy5idG5DYWxsYmFjayhyZWNvcmQsIGJ0bik7XG4gICAgICBpZiAodHlwZW9mIGNsaWNrUmVzID09PSAnc3RyaW5nJykge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKGNsaWNrUmVzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5idG5DYWxsYmFjayhyZWNvcmQsIGJ0bik7XG4gIH1cblxuICBwcml2YXRlIGJ0bkNhbGxiYWNrKHJlY29yZDogYW55LCBidG46IFNUQ29sdW1uQnV0dG9uLCBtb2RhbD86IGFueSkge1xuICAgIGlmICghYnRuLmNsaWNrKSByZXR1cm47XG4gICAgaWYgKHR5cGVvZiBidG4uY2xpY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICBzd2l0Y2ggKGJ0bi5jbGljaykge1xuICAgICAgICBjYXNlICdsb2FkJzpcbiAgICAgICAgICB0aGlzLmxvYWQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncmVsb2FkJzpcbiAgICAgICAgICB0aGlzLnJlbG9hZCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYnRuLmNsaWNrKHJlY29yZCwgbW9kYWwsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIF9idG5UZXh0KHJlY29yZDogYW55LCBidG46IFNUQ29sdW1uQnV0dG9uKSB7XG4gICAgaWYgKGJ0bi5mb3JtYXQpIHJldHVybiBidG4uZm9ybWF0KHJlY29yZCwgYnRuKTtcbiAgICByZXR1cm4gYnRuLnRleHQ7XG4gIH1cblxuICAvLyNlbmRyZWdpb25cblxuICAvLyNyZWdpb24gZXhwb3J0XG5cbiAgLyoqXG4gICAqIMOlwq/CvMOlwofCusOlwr3Ck8OlwonCjcOpwqHCtcOvwrzCjMOnwqHCrsOkwr/CncOlwrfCssOnwrvCj8OmwrPCqMOlwobCjCBgWGxzeE1vZHVsZWBcbiAgICogQHBhcmFtIG5ld0RhdGEgw6nCh8KNw6bClsKww6bCjMKHw6XCrsKaw6bClcKww6bCjcKuw6/CvMKMw6TCvsKLw6XCpsKCw6XCuMKMw6bCnMKbw6XCr8K8w6XCh8K6w6bCicKAw6bCnMKJw6bClcKww6bCjcKuw6nCncKew6XCuMK4w6bCnMKJw6fClMKoXG4gICAqIEBwYXJhbSBvcHQgw6nCosKdw6XCpMKWw6XCj8KCw6bClcKwXG4gICAqL1xuICBleHBvcnQobmV3RGF0YT86IGFueVtdLCBvcHQ/OiBTVEV4cG9ydE9wdGlvbnMpIHtcbiAgICAobmV3RGF0YSA/IG9mKG5ld0RhdGEpIDogb2YodGhpcy5fZGF0YSkpLnN1YnNjcmliZSgocmVzOiBhbnlbXSkgPT5cbiAgICAgIHRoaXMuZXhwb3J0U3J2LmV4cG9ydChcbiAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0LCA8U1RFeHBvcnRPcHRpb25zPntcbiAgICAgICAgICBfZDogcmVzLFxuICAgICAgICAgIF9jOiB0aGlzLl9jb2x1bW5zLFxuICAgICAgICB9KSxcbiAgICAgICksXG4gICAgKTtcbiAgfVxuXG4gIC8vI2VuZHJlZ2lvblxuXG4gIHByaXZhdGUgdXBkYXRlQ29sdW1ucygpIHtcbiAgICB0aGlzLl9jb2x1bW5zID0gdGhpcy5jb2x1bW5Tb3VyY2UucHJvY2Vzcyh0aGlzLmNvbHVtbnMpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDbGFzcygpIHtcbiAgICB1cGRhdGVIb3N0Q2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLnJlbmRlcmVyLCB7XG4gICAgICBbYHN0YF06IHRydWUsXG4gICAgICBbYHN0X19wLSR7dGhpcy5wYWdlLnBsYWNlbWVudH1gXTogdGhpcy5wYWdlLnBsYWNlbWVudCxcbiAgICAgIFtgYW50LXRhYmxlLXJlcF9faGlkZS1oZWFkZXItZm9vdGVyYF06IHRoaXMucmVzcG9uc2l2ZUhpZGVIZWFkZXJGb290ZXIsXG4gICAgfSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5jb2x1bW5Tb3VyY2UucmVzdG9yZUFsbFJlbmRlcih0aGlzLl9jb2x1bW5zKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKFxuICAgIGNoYW5nZXM6IHsgW1AgaW4ga2V5b2YgdGhpc10/OiBTaW1wbGVDaGFuZ2UgfSAmIFNpbXBsZUNoYW5nZXMsXG4gICk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLmNvbHVtbnMpIHtcbiAgICAgIHRoaXMudXBkYXRlQ29sdW1ucygpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5kYXRhICYmIGNoYW5nZXMuZGF0YS5jdXJyZW50VmFsdWUpIHtcbiAgICAgIHRoaXMuX2xvYWQoKTtcbiAgICB9XG4gICAgdGhpcy5zZXRDbGFzcygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZWxvbkkxOG4kLnVuc3Vic2NyaWJlKCk7XG4gICAgaWYgKHRoaXMuaTE4biQpIHRoaXMuaTE4biQudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5nWm9ycm9BbnRkTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XG5cbmltcG9ydCB7IERlbG9uVXRpbE1vZHVsZSB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IERlbG9uQUNMTW9kdWxlIH0gZnJvbSAnQGRlbG9uL2FjbCc7XG5cbmltcG9ydCB7IFNUQ29tcG9uZW50IH0gZnJvbSAnLi90YWJsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU1RSb3dEaXJlY3RpdmUgfSBmcm9tICcuL3RhYmxlLXJvdy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU1RDb25maWcgfSBmcm9tICcuL3RhYmxlLmNvbmZpZyc7XG5cbmNvbnN0IENPTVBPTkVOVFMgPSBbU1RDb21wb25lbnQsIFNUUm93RGlyZWN0aXZlXTtcblxuQE5nTW9kdWxlKHtcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIERlbG9uVXRpbE1vZHVsZSxcbiAgICBEZWxvbkFDTE1vZHVsZSxcbiAgICBOZ1pvcnJvQW50ZE1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbLi4uQ09NUE9ORU5UU10sXG4gIGV4cG9ydHM6IFsuLi5DT01QT05FTlRTXSxcbn0pXG5leHBvcnQgY2xhc3MgU1RNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4geyBuZ01vZHVsZTogU1RNb2R1bGUsIHByb3ZpZGVyczogW1NUQ29uZmlnXSB9O1xuICB9XG59XG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIkRpcmVjdGl2ZSIsIlRlbXBsYXRlUmVmIiwiSG9zdCIsIklucHV0IiwiYWNsIiwidHNsaWJfMS5fX3ZhbHVlcyIsImRlZXBDb3B5IiwiQUNMU2VydmljZSIsIk9wdGlvbmFsIiwiSW5qZWN0IiwiQUxBSU5fSTE4Tl9UT0tFTiIsIm1hcCIsImRlZXBHZXQiLCJjYXRjaEVycm9yIiwib2YiLCJfSHR0cENsaWVudCIsIkNOQ3VycmVuY3lQaXBlIiwiRGF0ZVBpcGUiLCJZTlBpcGUiLCJEZWNpbWFsUGlwZSIsIkRvbVNhbml0aXplciIsIlhsc3hTZXJ2aWNlIiwicm91dGVyIiwiRXZlbnRFbWl0dGVyIiwiZmlsdGVyIiwidG9Cb29sZWFuIiwidXBkYXRlSG9zdENsYXNzIiwiQ29tcG9uZW50IiwiQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kiLCJDaGFuZ2VEZXRlY3RvclJlZiIsIlJvdXRlciIsIkVsZW1lbnRSZWYiLCJSZW5kZXJlcjIiLCJNb2RhbEhlbHBlciIsIkRyYXdlckhlbHBlciIsIkRPQ1VNRU5UIiwiRGVsb25Mb2NhbGVTZXJ2aWNlIiwiT3V0cHV0IiwiSW5wdXROdW1iZXIiLCJJbnB1dEJvb2xlYW4iLCJOZ01vZHVsZSIsIk5PX0VSUk9SU19TQ0hFTUEiLCJDb21tb25Nb2R1bGUiLCJGb3Jtc01vZHVsZSIsIkRlbG9uVXRpbE1vZHVsZSIsIkRlbG9uQUNMTW9kdWxlIiwiTmdab3Jyb0FudGRNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFBOzs7Ozs7Ozs7Ozs7OztBQWNBLHdCQW9DMkIsVUFBVSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSTtRQUNwRCxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sR0FBRyxJQUFJLEtBQUssSUFBSSxHQUFHLElBQUksR0FBRyxNQUFNLENBQUMsd0JBQXdCLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUM7UUFDN0gsSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLElBQUksT0FBTyxPQUFPLENBQUMsUUFBUSxLQUFLLFVBQVU7WUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FB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