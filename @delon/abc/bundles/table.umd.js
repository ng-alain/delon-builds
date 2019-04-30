/**
 * @license ng-alain(cipchk@qq.com) v7.3.1
 * (c) 2019 cipchk https://ng-alain.com/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@delon/acl'), require('@delon/theme'), require('@delon/util'), require('@angular/common'), require('@angular/platform-browser'), require('rxjs'), require('rxjs/operators'), require('@delon/abc/xlsx'), require('@angular/router'), require('@angular/forms'), require('ng-zorro-antd')) :
    typeof define === 'function' && define.amd ? define('@delon/abc/table', ['exports', '@angular/core', '@delon/acl', '@delon/theme', '@delon/util', '@angular/common', '@angular/platform-browser', 'rxjs', 'rxjs/operators', '@delon/abc/xlsx', '@angular/router', '@angular/forms', 'ng-zorro-antd'], factory) :
    (global = global || self, factory((global.delon = global.delon || {}, global.delon.abc = global.delon.abc || {}, global.delon.abc.table = {}), global.ng.core, global.delon.acl, global.delon.theme, global.delon.util, global.ng.common, global.ng.platformBrowser, global.rxjs, global.rxjs.operators, global.delon.abc.xlsx, global.ng.router, global.ng.forms, global['ng-zorro-antd']));
}(this, function (exports, core, acl, theme, util, common, platformBrowser, rxjs, operators, xlsx, router, forms, ngZorroAntd) { 'use strict';

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

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        STRowDirective.ctorParameters = function () { return [
            { type: core.TemplateRef },
            { type: STRowSource, decorators: [{ type: core.Host }] }
        ]; };
        STRowDirective.propDecorators = {
            id: [{ type: core.Input, args: ['st-row',] }],
            type: [{ type: core.Input }]
        };
        return STRowDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                type: 'page',
                method: 'GET',
                allInBody: false,
                reName: { pi: 'pi', ps: 'ps', skip: 'skip', limit: 'limit' },
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
            this.multiSort = null;
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
            /**
             * 通过点击行来展开子行
             */
            this.expandRowByClick = false;
            /**
             * 指定 `width` 模式
             */
            this.widthMode = {
                type: 'default',
                strictBehavior: 'truncate',
            };
        }
        STConfig.decorators = [
            { type: core.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ STConfig.ngInjectableDef = core.defineInjectable({ factory: function STConfig_Factory() { return new STConfig(); }, token: STConfig, providedIn: "root" });
        return STConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var STColumnSource = /** @class */ (function () {
        function STColumnSource(rowSource, acl, i18nSrv, cog) {
            this.rowSource = rowSource;
            this.acl = acl;
            this.i18nSrv = i18nSrv;
            this.cog = cog;
        }
        /**
         * @private
         * @param {?} list
         * @return {?}
         */
        STColumnSource.prototype.btnCoerce = /**
         * @private
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
                        if (item.component != null) {
                            item.modal = {
                                component: item.component,
                                params: item.params,
                                paramsName: item.paramName || (/** @type {?} */ (modal)).paramsName,
                                size: item.size || (/** @type {?} */ (modal)).size,
                                modalOptions: item.modalOptions || (/** @type {?} */ (modal)).modalOptions,
                            };
                        }
                        if (item.modal == null || item.modal.component == null) {
                            console.warn("[st] Should specify modal parameter");
                            item.type = 'none';
                        }
                        else {
                            item.modal = __assign({ paramsName: 'record', size: 'lg' }, modal, item.modal);
                        }
                    }
                    if (item.type === 'drawer') {
                        if (item.drawer == null || item.drawer.component == null) {
                            console.warn("[st] Should specify drawer parameter");
                            item.type = 'none';
                        }
                        else {
                            item.drawer = __assign({ paramsName: 'record', size: 'lg' }, drawer, item.drawer);
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
                        item.icon = __assign({}, btnIcon, (typeof item.icon === 'string' ? { type: item.icon } : item.icon));
                    }
                    item.children = item.children && item.children.length > 0 ? this.btnCoerce(item.children) : [];
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
         * @private
         * @param {?} list
         * @return {?}
         */
        STColumnSource.prototype.btnCoerceIf = /**
         * @private
         * @param {?} list
         * @return {?}
         */
        function (list) {
            var e_2, _a;
            try {
                for (var list_2 = __values(list), list_2_1 = list_2.next(); !list_2_1.done; list_2_1 = list_2.next()) {
                    var item = list_2_1.value;
                    if (!item.iif)
                        item.iif = (/**
                         * @return {?}
                         */
                        function () { return true; });
                    if (item.children && item.children.length > 0) {
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
         * @private
         * @param {?} list
         * @return {?}
         */
        STColumnSource.prototype.fixedCoerce = /**
         * @private
         * @param {?} list
         * @return {?}
         */
        function (list) {
            /** @type {?} */
            var countReduce = (/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            function (a, b) { return a + +(/** @type {?} */ (b.width)).toString().replace('px', ''); });
            // left width
            list
                .filter((/**
             * @param {?} w
             * @return {?}
             */
            function (w) { return w.fixed && w.fixed === 'left' && w.width; }))
                .forEach((/**
             * @param {?} item
             * @param {?} idx
             * @return {?}
             */
            function (item, idx) { return (item._left = list.slice(0, idx).reduce(countReduce, 0) + 'px'); }));
            // right width
            list
                .filter((/**
             * @param {?} w
             * @return {?}
             */
            function (w) { return w.fixed && w.fixed === 'right' && w.width; }))
                .reverse()
                .forEach((/**
             * @param {?} item
             * @param {?} idx
             * @return {?}
             */
            function (item, idx) { return (item._right = (idx > 0 ? list.slice(-idx).reduce(countReduce, 0) : 0) + 'px'); }));
        };
        /**
         * @private
         * @param {?} item
         * @return {?}
         */
        STColumnSource.prototype.sortCoerce = /**
         * @private
         * @param {?} item
         * @return {?}
         */
        function (item) {
            // compatible
            if (item.sorter && typeof item.sorter === 'function') {
                return {
                    enabled: true,
                    default: (/** @type {?} */ (item.sort)),
                    compare: item.sorter,
                    key: item.sortKey || item.indexKey,
                    reName: item.sortReName,
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
                res.key = item.indexKey;
            }
            res.enabled = true;
            return res;
        };
        /**
         * @private
         * @param {?} item
         * @return {?}
         */
        STColumnSource.prototype.filterCoerce = /**
         * @private
         * @param {?} item
         * @return {?}
         */
        function (item) {
            var _this = this;
            /** @type {?} */
            var res = null;
            // compatible
            if (item.filters && item.filters.length > 0) {
                res = {
                    confirmText: item.filterConfirmText,
                    clearText: item.filterClearText,
                    default: item.filtered,
                    fn: (/** @type {?} */ (item.filter)),
                    icon: item.filterIcon,
                    key: item.filterKey || item.indexKey,
                    menus: item.filters,
                    multiple: item.filterMultiple,
                    reName: item.filterReName,
                };
            }
            else {
                res = (/** @type {?} */ (item.filter));
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
                res.key = item.indexKey;
            }
            res.default = res.menus.findIndex((/**
             * @param {?} w
             * @return {?}
             */
            function (w) { return (/** @type {?} */ (w.checked)); })) !== -1;
            if (this.acl) {
                res.menus = res.menus.filter((/**
                 * @param {?} w
                 * @return {?}
                 */
                function (w) { return _this.acl.can(w.acl); }));
            }
            if (res.menus.length <= 0) {
                res = null;
            }
            return res;
        };
        /**
         * @private
         * @param {?} item
         * @return {?}
         */
        STColumnSource.prototype.restoreRender = /**
         * @private
         * @param {?} item
         * @return {?}
         */
        function (item) {
            if (item.renderTitle) {
                item.__renderTitle = this.rowSource.getTitle(item.renderTitle);
            }
            if (item.render) {
                item.__render = this.rowSource.getRow(item.render);
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
            var point = 0;
            /** @type {?} */
            var columns = [];
            /** @type {?} */
            var copyColumens = (/** @type {?} */ (util.deepCopy(list)));
            try {
                for (var copyColumens_1 = __values(copyColumens), copyColumens_1_1 = copyColumens_1.next(); !copyColumens_1_1.done; copyColumens_1_1 = copyColumens_1.next()) {
                    var item = copyColumens_1_1.value;
                    if (item.iif && !item.iif(item)) {
                        continue;
                    }
                    if (this.acl && item.acl && !this.acl.can(item.acl)) {
                        continue;
                    }
                    // index
                    if (item.index) {
                        if (!Array.isArray(item.index)) {
                            item.index = item.index.split('.');
                        }
                        item.indexKey = item.index.join('.');
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
                        item.selections = item.selections.filter((/**
                         * @param {?} w
                         * @return {?}
                         */
                        function (w) { return _this.acl.can(w.acl); }));
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
                        item.yn = __assign({ truth: true }, item.yn);
                        // compatible
                        if (item.ynTruth != null)
                            item.yn.truth = item.ynTruth;
                        if (item.ynYes != null)
                            item.yn.yes = item.ynYes;
                        if (item.ynNo != null)
                            item.yn.no = item.ynNo;
                    }
                    if ((item.type === 'link' && typeof item.click !== 'function') ||
                        (item.type === 'badge' && item.badge == null) ||
                        (item.type === 'tag' && item.tag == null)) {
                        ((/** @type {?} */ (item))).type = '';
                    }
                    // className
                    if (!item.className) {
                        item.className = {
                            number: 'text-right',
                            currency: 'text-right',
                            date: 'text-center',
                        }[(/** @type {?} */ (item.type))];
                    }
                    // width
                    if (typeof item.width === 'number') {
                        item.width = item.width + "px";
                    }
                    // sorter
                    item._sort = this.sortCoerce(item);
                    // filter
                    item.filter = (/** @type {?} */ (this.filterCoerce(item)));
                    // buttons
                    item.buttons = this.btnCoerce((/** @type {?} */ (item.buttons)));
                    // restore custom row
                    this.restoreRender(item);
                    item.__point = point++;
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
            columns.forEach((/**
             * @param {?} i
             * @return {?}
             */
            function (i) { return _this.restoreRender(i); }));
        };
        STColumnSource.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        STColumnSource.ctorParameters = function () { return [
            { type: STRowSource, decorators: [{ type: core.Host }] },
            { type: acl.ACLService, decorators: [{ type: core.Optional }] },
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [theme.ALAIN_I18N_TOKEN,] }] },
            { type: STConfig }
        ]; };
        return STColumnSource;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var STDataSource = /** @class */ (function () {
        function STDataSource(http, currentyPipe, datePipe, ynPipe, numberPipe, dom) {
            this.http = http;
            this.currentyPipe = currentyPipe;
            this.datePipe = datePipe;
            this.ynPipe = ynPipe;
            this.numberPipe = numberPipe;
            this.dom = dom;
            this.sortTick = 0;
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
            return new Promise((/**
             * @param {?} resolvePromise
             * @param {?} rejectPromise
             * @return {?}
             */
            function (resolvePromise, rejectPromise) {
                /** @type {?} */
                var data$;
                /** @type {?} */
                var isRemote = false;
                var data = options.data, res = options.res, total = options.total, page = options.page, pi = options.pi, ps = options.ps, columns = options.columns;
                /** @type {?} */
                var retTotal;
                /** @type {?} */
                var retPs;
                /** @type {?} */
                var retList;
                /** @type {?} */
                var retPi;
                /** @type {?} */
                var rawData;
                /** @type {?} */
                var showPage = page.show;
                if (typeof data === 'string') {
                    isRemote = true;
                    data$ = _this.getByHttp(data, options).pipe(operators.map((/**
                     * @param {?} result
                     * @return {?}
                     */
                    function (result) {
                        rawData = result;
                        /** @type {?} */
                        var ret;
                        if (Array.isArray(result)) {
                            ret = result;
                            retTotal = ret.length;
                            retPs = retTotal;
                            showPage = false;
                        }
                        else {
                            // list
                            ret = util.deepGet(result, (/** @type {?} */ ((/** @type {?} */ (res.reName)).list)), []);
                            if (ret == null || !Array.isArray(ret)) {
                                ret = [];
                            }
                            // total
                            /** @type {?} */
                            var resultTotal = (/** @type {?} */ (res.reName)).total && util.deepGet(result, (/** @type {?} */ ((/** @type {?} */ (res.reName)).total)), null);
                            retTotal = resultTotal == null ? total || 0 : +resultTotal;
                        }
                        return util.deepCopy(ret);
                    })), operators.catchError((/**
                     * @param {?} err
                     * @return {?}
                     */
                    function (err) {
                        rejectPromise(err);
                        return [];
                    })));
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
                    operators.map((/**
                     * @param {?} result
                     * @return {?}
                     */
                    function (result) {
                        rawData = result;
                        /** @type {?} */
                        var copyResult = util.deepCopy(result);
                        /** @type {?} */
                        var sorterFn = _this.getSorterFn(columns);
                        if (sorterFn) {
                            copyResult = copyResult.sort(sorterFn);
                        }
                        return copyResult;
                    })), 
                    // filter
                    operators.map((/**
                     * @param {?} result
                     * @return {?}
                     */
                    function (result) {
                        columns
                            .filter((/**
                         * @param {?} w
                         * @return {?}
                         */
                        function (w) { return w.filter; }))
                            .forEach((/**
                         * @param {?} c
                         * @return {?}
                         */
                        function (c) {
                            /** @type {?} */
                            var values = (/** @type {?} */ (c.filter)).menus.filter((/**
                             * @param {?} w
                             * @return {?}
                             */
                            function (w) { return w.checked; }));
                            if (values.length === 0)
                                return;
                            /** @type {?} */
                            var onFilter = (/** @type {?} */ (c.filter)).fn;
                            if (typeof onFilter !== 'function') {
                                console.warn("[st] Muse provide the fn function in filter");
                                return;
                            }
                            result = result.filter((/**
                             * @param {?} record
                             * @return {?}
                             */
                            function (record) { return values.some((/**
                             * @param {?} v
                             * @return {?}
                             */
                            function (v) { return onFilter(v, record); })); }));
                        }));
                        return result;
                    })), 
                    // paging
                    operators.map((/**
                     * @param {?} result
                     * @return {?}
                     */
                    function (result) {
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
                    })));
                }
                // pre-process
                if (typeof res.process === 'function') {
                    data$ = data$.pipe(operators.map((/**
                     * @param {?} result
                     * @return {?}
                     */
                    function (result) { return (/** @type {?} */ (res.process))(result); })));
                }
                // data accelerator
                data$ = data$.pipe(operators.map((/**
                 * @param {?} result
                 * @return {?}
                 */
                function (result) {
                    var _loop_1 = function (i, len) {
                        result[i]._values = columns.map((/**
                         * @param {?} c
                         * @return {?}
                         */
                        function (c) { return _this.get(result[i], c, i); }));
                        if (options.rowClassName) {
                            result[i]._rowClassName = options.rowClassName(result[i], i);
                        }
                    };
                    for (var i = 0, len = result.length; i < len; i++) {
                        _loop_1(i, len);
                    }
                    return result;
                })));
                data$
                    .forEach((/**
                 * @param {?} result
                 * @return {?}
                 */
                function (result) { return (retList = result); }))
                    .then((/**
                 * @return {?}
                 */
                function () {
                    /** @type {?} */
                    var realTotal = retTotal || total;
                    /** @type {?} */
                    var realPs = retPs || ps;
                    resolvePromise({
                        pi: retPi,
                        ps: retPs,
                        total: retTotal,
                        list: retList,
                        statistical: _this.genStatistical(columns, retList, rawData),
                        pageShow: typeof showPage === 'undefined' ? realTotal > realPs : showPage,
                    });
                }));
            }));
        };
        /**
         * @private
         * @param {?} item
         * @param {?} col
         * @param {?} idx
         * @return {?}
         */
        STDataSource.prototype.get = /**
         * @private
         * @param {?} item
         * @param {?} col
         * @param {?} idx
         * @return {?}
         */
        function (item, col, idx) {
            if (col.format) {
                /** @type {?} */
                var formatRes = col.format(item, col);
                if (formatRes && ~formatRes.indexOf('</')) {
                    return { text: this.dom.bypassSecurityTrustHtml(formatRes), org: formatRes };
                }
                return { text: formatRes == null ? '' : formatRes, org: formatRes };
            }
            /** @type {?} */
            var value = util.deepGet(item, (/** @type {?} */ (col.index)), col.default);
            /** @type {?} */
            var ret = value;
            switch (col.type) {
                case 'no':
                    ret = this.getNoIndex(item, col, idx);
                    break;
                case 'img':
                    ret = value ? "<img src=\"" + value + "\" class=\"img\">" : '';
                    break;
                case 'number':
                    ret = this.numberPipe.transform(value, col.numberDigits);
                    break;
                case 'currency':
                    ret = this.currentyPipe.transform(value);
                    break;
                case 'date':
                    ret = this.datePipe.transform(value, col.dateFormat);
                    break;
                case 'yn':
                    ret = this.ynPipe.transform(value === (/** @type {?} */ (col.yn)).truth, (/** @type {?} */ ((/** @type {?} */ (col.yn)).yes)), (/** @type {?} */ ((/** @type {?} */ (col.yn)).no)), (/** @type {?} */ ((/** @type {?} */ (col.yn)).mode)));
                    break;
            }
            return { text: ret == null ? '' : ret, org: value };
        };
        /**
         * @private
         * @param {?} url
         * @param {?} options
         * @return {?}
         */
        STDataSource.prototype.getByHttp = /**
         * @private
         * @param {?} url
         * @param {?} options
         * @return {?}
         */
        function (url, options) {
            var _a, _b;
            var req = options.req, page = options.page, pi = options.pi, ps = options.ps, singleSort = options.singleSort, multiSort = options.multiSort, columns = options.columns;
            /** @type {?} */
            var method = (req.method || 'GET').toUpperCase();
            /** @type {?} */
            var params = {};
            /** @type {?} */
            var reName = (/** @type {?} */ (req.reName));
            if (req.type === 'page') {
                params = (_a = {},
                    _a[(/** @type {?} */ (reName.pi))] = page.zeroIndexed ? pi - 1 : pi,
                    _a[(/** @type {?} */ (reName.ps))] = ps,
                    _a);
            }
            else {
                params = (_b = {},
                    _b[(/** @type {?} */ (reName.skip))] = (pi - 1) * ps,
                    _b[(/** @type {?} */ (reName.limit))] = ps,
                    _b);
            }
            params = __assign({}, params, req.params, this.getReqSortMap(singleSort, multiSort, columns), this.getReqFilterMap(columns));
            /** @type {?} */
            var reqOptions = {
                params: params,
                body: req.body,
                headers: req.headers,
            };
            if (method === 'POST' && req.allInBody === true) {
                reqOptions = {
                    body: __assign({}, req.body, params),
                    headers: req.headers,
                };
            }
            if (typeof req.process === 'function') {
                reqOptions = req.process(reqOptions);
            }
            return this.http.request(method, url, reqOptions);
        };
        /**
         * @param {?} item
         * @param {?} col
         * @param {?} idx
         * @return {?}
         */
        STDataSource.prototype.getNoIndex = /**
         * @param {?} item
         * @param {?} col
         * @param {?} idx
         * @return {?}
         */
        function (item, col, idx) {
            return typeof col.noIndex === 'function' ? col.noIndex(item, col, idx) : (/** @type {?} */ (col.noIndex)) + idx;
        };
        // #region sort
        // #region sort
        /**
         * @private
         * @param {?} columns
         * @return {?}
         */
        STDataSource.prototype.getValidSort = 
        // #region sort
        /**
         * @private
         * @param {?} columns
         * @return {?}
         */
        function (columns) {
            return columns.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item._sort && item._sort.enabled && item._sort.default; })).map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item._sort; }));
        };
        /**
         * @private
         * @param {?} columns
         * @return {?}
         */
        STDataSource.prototype.getSorterFn = /**
         * @private
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
            return (/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            function (a, b) {
                /** @type {?} */
                var result = (/** @type {?} */ (sortList[0].compare))(a, b);
                if (result !== 0) {
                    return sortList[0].default === 'descend' ? -result : result;
                }
                return 0;
            });
        };
        Object.defineProperty(STDataSource.prototype, "nextSortTick", {
            get: /**
             * @return {?}
             */
            function () {
                return ++this.sortTick;
            },
            enumerable: true,
            configurable: true
        });
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
                /** @type {?} */
                var ms_1 = __assign({ key: 'sort', separator: '-', nameSeparator: '.' }, multiSort);
                ret = (_a = {},
                    _a[ms_1.key] = sortList
                        .sort((/**
                     * @param {?} a
                     * @param {?} b
                     * @return {?}
                     */
                    function (a, b) { return a.tick - b.tick; }))
                        .map((/**
                     * @param {?} item
                     * @return {?}
                     */
                    function (item) { return item.key + ms_1.nameSeparator + ((item.reName || {})[(/** @type {?} */ (item.default))] || item.default); }))
                        .join(ms_1.separator),
                    _a);
            }
            else {
                /** @type {?} */
                var mapData = sortList[0];
                /** @type {?} */
                var sortFiled = mapData.key;
                /** @type {?} */
                var sortValue = (sortList[0].reName || {})[(/** @type {?} */ (mapData.default))] || mapData.default;
                if (singleSort) {
                    sortValue = sortFiled + (singleSort.nameSeparator || '.') + sortValue;
                    sortFiled = singleSort.key || 'sort';
                }
                ret[(/** @type {?} */ (sortFiled))] = (/** @type {?} */ (sortValue));
            }
            return ret;
        };
        // #endregion
        // #region filter
        // #endregion
        // #region filter
        /**
         * @private
         * @param {?} columns
         * @return {?}
         */
        STDataSource.prototype.getReqFilterMap = 
        // #endregion
        // #region filter
        /**
         * @private
         * @param {?} columns
         * @return {?}
         */
        function (columns) {
            /** @type {?} */
            var ret = {};
            columns
                .filter((/**
             * @param {?} w
             * @return {?}
             */
            function (w) { return w.filter && w.filter.default === true; }))
                .forEach((/**
             * @param {?} col
             * @return {?}
             */
            function (col) {
                /** @type {?} */
                var values = (/** @type {?} */ (col.filter)).menus.filter((/**
                 * @param {?} f
                 * @return {?}
                 */
                function (f) { return f.checked === true; }));
                /** @type {?} */
                var obj = {};
                if ((/** @type {?} */ (col.filter)).reName) {
                    obj = (/** @type {?} */ ((/** @type {?} */ (col.filter)).reName))((/** @type {?} */ (col.filter)).menus, col);
                }
                else {
                    obj[(/** @type {?} */ ((/** @type {?} */ (col.filter)).key))] = values.map((/**
                     * @param {?} i
                     * @return {?}
                     */
                    function (i) { return i.value; })).join(',');
                }
                ret = __assign({}, ret, obj);
            }));
            return ret;
        };
        // #endregion
        // #region statistical
        // #endregion
        // #region statistical
        /**
         * @private
         * @param {?} columns
         * @param {?} list
         * @param {?} rawData
         * @return {?}
         */
        STDataSource.prototype.genStatistical = 
        // #endregion
        // #region statistical
        /**
         * @private
         * @param {?} columns
         * @param {?} list
         * @param {?} rawData
         * @return {?}
         */
        function (columns, list, rawData) {
            var _this = this;
            /** @type {?} */
            var res = {};
            columns.forEach((/**
             * @param {?} col
             * @param {?} index
             * @return {?}
             */
            function (col, index) {
                res[col.key ? col.key : index] = col.statistical == null ? {} : _this.getStatistical(col, index, list, rawData);
            }));
            return res;
        };
        /**
         * @private
         * @param {?} col
         * @param {?} index
         * @param {?} list
         * @param {?} rawData
         * @return {?}
         */
        STDataSource.prototype.getStatistical = /**
         * @private
         * @param {?} col
         * @param {?} index
         * @param {?} list
         * @param {?} rawData
         * @return {?}
         */
        function (col, index, list, rawData) {
            /** @type {?} */
            var val = col.statistical;
            /** @type {?} */
            var item = __assign({ digits: 2, currency: undefined }, (typeof val === 'string' ? { type: (/** @type {?} */ (val)) } : ((/** @type {?} */ (val)))));
            /** @type {?} */
            var res = { value: 0 };
            /** @type {?} */
            var currency = false;
            if (typeof item.type === 'function') {
                res = item.type(this.getValues(index, list), col, list, rawData);
                currency = true;
            }
            else {
                switch (item.type) {
                    case 'count':
                        res.value = list.length;
                        break;
                    case 'distinctCount':
                        res.value = this.getValues(index, list).filter((/**
                         * @param {?} value
                         * @param {?} idx
                         * @param {?} self
                         * @return {?}
                         */
                        function (value, idx, self) { return self.indexOf(value) === idx; })).length;
                        break;
                    case 'sum':
                        res.value = this.toFixed(this.getSum(index, list), (/** @type {?} */ (item.digits)));
                        currency = true;
                        break;
                    case 'average':
                        res.value = this.toFixed(this.getSum(index, list) / list.length, (/** @type {?} */ (item.digits)));
                        currency = true;
                        break;
                    case 'max':
                        res.value = Math.max.apply(Math, __spread(this.getValues(index, list)));
                        currency = true;
                        break;
                    case 'min':
                        res.value = Math.min.apply(Math, __spread(this.getValues(index, list)));
                        currency = true;
                        break;
                }
            }
            if (item.currency === true || (item.currency == null && currency === true)) {
                res.text = (/** @type {?} */ (this.currentyPipe.transform(res.value)));
            }
            else {
                res.text = String(res.value);
            }
            return res;
        };
        /**
         * @private
         * @param {?} val
         * @param {?} digits
         * @return {?}
         */
        STDataSource.prototype.toFixed = /**
         * @private
         * @param {?} val
         * @param {?} digits
         * @return {?}
         */
        function (val, digits) {
            if (isNaN(val) || !isFinite(val)) {
                return 0;
            }
            return parseFloat(val.toFixed(digits));
        };
        /**
         * @private
         * @param {?} index
         * @param {?} list
         * @return {?}
         */
        STDataSource.prototype.getValues = /**
         * @private
         * @param {?} index
         * @param {?} list
         * @return {?}
         */
        function (index, list) {
            return list.map((/**
             * @param {?} i
             * @return {?}
             */
            function (i) { return i._values[index].org; })).map((/**
             * @param {?} i
             * @return {?}
             */
            function (i) { return (i === '' || i == null ? 0 : i); }));
        };
        /**
         * @private
         * @param {?} index
         * @param {?} list
         * @return {?}
         */
        STDataSource.prototype.getSum = /**
         * @private
         * @param {?} index
         * @param {?} list
         * @return {?}
         */
        function (index, list) {
            return this.getValues(index, list).reduce((/**
             * @param {?} p
             * @param {?} i
             * @return {?}
             */
            function (p, i) { return (p += parseFloat(String(i))); }), 0);
        };
        STDataSource.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        STDataSource.ctorParameters = function () { return [
            { type: theme._HttpClient },
            { type: theme.CNCurrencyPipe, decorators: [{ type: core.Host }] },
            { type: theme.DatePipe, decorators: [{ type: core.Host }] },
            { type: theme.YNPipe, decorators: [{ type: core.Host }] },
            { type: common.DecimalPipe, decorators: [{ type: core.Host }] },
            { type: platformBrowser.DomSanitizer }
        ]; };
        return STDataSource;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var STExport = /** @class */ (function () {
        function STExport(xlsxSrv) {
            this.xlsxSrv = xlsxSrv;
        }
        /**
         * @private
         * @param {?} item
         * @param {?} col
         * @return {?}
         */
        STExport.prototype._stGet = /**
         * @private
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
                var val = util.deepGet(item, (/** @type {?} */ (col.index)), '');
                ret.v = val;
                switch (col.type) {
                    case 'currency':
                        ret.t = 'n';
                        break;
                    case 'date':
                        ret.t = 'd';
                        break;
                    case 'yn':
                        ret.v = ret.v === col.ynTruth ? col.ynYes || '是' : col.ynNo || '否';
                        break;
                }
            }
            return ret;
        };
        /**
         * @private
         * @param {?} opt
         * @return {?}
         */
        STExport.prototype.genSheet = /**
         * @private
         * @param {?} opt
         * @return {?}
         */
        function (opt) {
            /** @type {?} */
            var sheets = {};
            /** @type {?} */
            var sheet = (sheets[opt.sheetname || 'Sheet1'] = {});
            /** @type {?} */
            var colData = (/** @type {?} */ (opt._c)).filter((/**
             * @param {?} w
             * @return {?}
             */
            function (w) { return w.exported !== false && w.index && (!w.buttons || w.buttons.length === 0); }));
            /** @type {?} */
            var cc = colData.length;
            /** @type {?} */
            var dc = (/** @type {?} */ (opt._d)).length;
            // column
            for (var i = 0; i < cc; i++) {
                sheet[String.fromCharCode(i + 65) + "1"] = {
                    t: 's',
                    v: colData[i].title,
                };
            }
            // content
            for (var i = 0; i < dc; i++) {
                for (var j = 0; j < cc; j++) {
                    sheet["" + String.fromCharCode(j + 65) + (i + 2)] = this._stGet((/** @type {?} */ (opt._d))[i], colData[j]);
                }
            }
            if (cc > 0 && dc > 0) {
                sheet['!ref'] = "A1:" + String.fromCharCode(cc + 65 - 1) + (dc + 1);
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
        STExport.ctorParameters = function () { return [
            { type: xlsx.XlsxService, decorators: [{ type: core.Optional }] }
        ]; };
        return STExport;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var STComponent = /** @class */ (function () {
        // #endregion
        function STComponent(i18nSrv, cdr, cog, router, el, renderer, exportSrv, modalHelper, drawerHelper, doc, columnSource, dataSource, delonI18n) {
            var _this = this;
            this.cdr = cdr;
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
            this.unsubscribe$ = new rxjs.Subject();
            this.totalTpl = "";
            this.locale = {};
            this._data = [];
            this._statistical = {};
            this._isPagination = true;
            this._allChecked = false;
            this._allCheckedDisabled = false;
            this._indeterminate = false;
            this._columns = [];
            this.columns = [];
            this.ps = 10;
            this.pi = 1;
            this.total = 0;
            this._loading = false;
            /**
             * 是否显示Loading
             */
            this.loading = null;
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
            this.expandRowByClick = false;
            /**
             * 行单击多少时长之类为双击（单位：毫秒），默认：`200`
             */
            this.rowClickTime = 200;
            /**
             * 请求异常时回调
             */
            this.error = new core.EventEmitter();
            /**
             * 变化时回调，包括：`pi`、`ps`、`checkbox`、`radio`、`sort`、`filter`、`click`、`dblClick` 变动
             */
            this.change = new core.EventEmitter();
            this.rowClickCount = 0;
            this.delonI18n.change.pipe(operators.takeUntil(this.unsubscribe$)).subscribe((/**
             * @return {?}
             */
            function () {
                _this.locale = _this.delonI18n.getData('st');
                if (_this._columns.length > 0) {
                    _this.page = _this.clonePage;
                    _this.cd();
                }
            }));
            this.copyCog = util.deepMergeKey(new STConfig(), true, cog);
            delete this.copyCog.multiSort;
            Object.assign(this, this.copyCog);
            if (cog.multiSort && cog.multiSort.global !== false) {
                this.multiSort = __assign({}, cog.multiSort);
            }
            i18nSrv.change
                .pipe(operators.takeUntil(this.unsubscribe$), operators.filter((/**
             * @return {?}
             */
            function () { return _this._columns.length > 0; })))
                .subscribe((/**
             * @template THIS
             * @this {THIS}
             * @return {THIS}
             */
            function () { return _this.refreshColumns(); }));
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
                this._req = util.deepMerge({}, this._req, this.cog.req, value);
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
                /** @type {?} */
                var item = util.deepMergeKey({}, true, this.cog.res, value);
                /** @type {?} */
                var reName = item.reName;
                if (!Array.isArray(reName.list))
                    reName.list = reName.list.split('.');
                if (!Array.isArray(reName.total))
                    reName.total = reName.total.split('.');
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
                /** @type {?} */
                var item = util.deepMergeKey({}, true, this.cog.page, value);
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
             */
            function () {
                return this._multiSort;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                if (typeof value === 'boolean' && !util.toBoolean(value)) {
                    this._multiSort = null;
                    return;
                }
                this._multiSort = __assign({}, (typeof value === 'object' ? value : {}));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(STComponent.prototype, "widthMode", {
            get: /**
             * @return {?}
             */
            function () {
                return this._widthMode;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._widthMode = __assign({ type: 'default', strictBehavior: 'truncate' }, value);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @template THIS
         * @this {THIS}
         * @return {THIS}
         */
        STComponent.prototype.cd = /**
         * @template THIS
         * @this {THIS}
         * @return {THIS}
         */
        function () {
            (/** @type {?} */ (this)).cdr.detectChanges();
            return (/** @type {?} */ (this));
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
         * @param {?} column
         * @return {?}
         */
        STComponent.prototype.isTruncate = /**
         * @param {?} column
         * @return {?}
         */
        function (column) {
            return !!column.width && this.widthMode.strictBehavior === 'truncate';
        };
        /**
         * @param {?} column
         * @return {?}
         */
        STComponent.prototype.columnClass = /**
         * @param {?} column
         * @return {?}
         */
        function (column) {
            return column.className || (this.isTruncate(column) ? 'text-truncate' : null);
        };
        /**
         * @private
         * @param {?} type
         * @param {?=} data
         * @return {?}
         */
        STComponent.prototype.changeEmit = /**
         * @private
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
        Object.defineProperty(STComponent.prototype, "routerState", {
            get: /**
             * @private
             * @return {?}
             */
            function () {
                var _a = this, pi = _a.pi, ps = _a.ps, total = _a.total;
                return { pi: pi, ps: ps, total: total };
            },
            enumerable: true,
            configurable: true
        });
        // #region data
        // #region data
        /**
         * @private
         * @param {?} val
         * @return {?}
         */
        STComponent.prototype.setLoading = 
        // #region data
        /**
         * @private
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (this.loading == null) {
                this._loading = val;
            }
        };
        /**
         * @private
         * @return {?}
         */
        STComponent.prototype._load = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            var _a = this, pi = _a.pi, ps = _a.ps, data = _a.data, req = _a.req, res = _a.res, page = _a.page, total = _a.total, singleSort = _a.singleSort, multiSort = _a.multiSort, rowClassName = _a.rowClassName;
            this.setLoading(true);
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
                rowClassName: rowClassName,
            })
                .then((/**
             * @param {?} result
             * @return {?}
             */
            function (result) {
                _this.setLoading(false);
                if (typeof result.pi !== 'undefined') {
                    _this.pi = result.pi;
                }
                if (typeof result.ps !== 'undefined') {
                    _this.ps = result.ps;
                }
                if (typeof result.total !== 'undefined') {
                    _this.total = result.total;
                }
                if (typeof result.pageShow !== 'undefined') {
                    _this._isPagination = result.pageShow;
                }
                _this._data = (/** @type {?} */ (result.list));
                _this._statistical = (/** @type {?} */ (result.statistical));
                return _this._data;
            }))
                .then((/**
             * @template THIS
             * @this {THIS}
             * @return {THIS}
             */
            function () { return _this._refCheck(); }))
                .catch((/**
             * @template THIS
             * @this {THIS}
             * @param {?} error
             * @return {THIS}
             */
            function (error) {
                _this.setLoading(false);
                _this.cdr.detectChanges();
                _this.error.emit({ type: 'req', error: error });
                return _this;
            }));
        };
        /** 清空所有数据 */
        /**
         * 清空所有数据
         * @template THIS
         * @this {THIS}
         * @param {?=} cleanStatus
         * @return {THIS}
         */
        STComponent.prototype.clear = /**
         * 清空所有数据
         * @template THIS
         * @this {THIS}
         * @param {?=} cleanStatus
         * @return {THIS}
         */
        function (cleanStatus) {
            if (cleanStatus === void 0) { cleanStatus = true; }
            if (cleanStatus) {
                (/** @type {?} */ (this)).clearStatus();
            }
            (/** @type {?} */ (this))._data = [];
            return (/** @type {?} */ (this)).cd();
        };
        /** 清空所有状态 */
        /**
         * 清空所有状态
         * @template THIS
         * @this {THIS}
         * @return {THIS}
         */
        STComponent.prototype.clearStatus = /**
         * 清空所有状态
         * @template THIS
         * @this {THIS}
         * @return {THIS}
         */
        function () {
            return (/** @type {?} */ (this)).clearCheck()
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
         * @template THIS
         * @this {THIS}
         * @param {?=} pi 指定当前页码，默认：`1`
         * @param {?=} extraParams 重新指定 `extraParams` 值
         * @param {?=} options 选项
         * @return {THIS}
         */
        STComponent.prototype.load = /**
         * 根据页码重新加载数据
         *
         * @template THIS
         * @this {THIS}
         * @param {?=} pi 指定当前页码，默认：`1`
         * @param {?=} extraParams 重新指定 `extraParams` 值
         * @param {?=} options 选项
         * @return {THIS}
         */
        function (pi, extraParams, options) {
            if (pi === void 0) { pi = 1; }
            if (pi !== -1)
                (/** @type {?} */ (this)).pi = pi;
            if (typeof extraParams !== 'undefined') {
                (/** @type {?} */ (this))._req.params = options && options.merge ? __assign({}, (/** @type {?} */ (this))._req.params, extraParams) : extraParams;
            }
            (/** @type {?} */ (this))._change('pi');
            return (/** @type {?} */ (this));
        };
        /**
         * 重新刷新当前页
         * @param extraParams 重新指定 `extraParams` 值
         */
        /**
         * 重新刷新当前页
         * @template THIS
         * @this {THIS}
         * @param {?=} extraParams 重新指定 `extraParams` 值
         * @param {?=} options
         * @return {THIS}
         */
        STComponent.prototype.reload = /**
         * 重新刷新当前页
         * @template THIS
         * @this {THIS}
         * @param {?=} extraParams 重新指定 `extraParams` 值
         * @param {?=} options
         * @return {THIS}
         */
        function (extraParams, options) {
            return (/** @type {?} */ (this)).load(-1, extraParams, options);
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
         * @template THIS
         * @this {THIS}
         * @param {?=} extraParams 重新指定 `extraParams` 值
         * @param {?=} options
         * @return {THIS}
         */
        STComponent.prototype.reset = /**
         * 重置且重新设置 `pi` 为 `1`，包含以下值：
         * - `check` 数据
         * - `radio` 数据
         * - `sort` 数据
         * - `fileter` 数据
         *
         * @template THIS
         * @this {THIS}
         * @param {?=} extraParams 重新指定 `extraParams` 值
         * @param {?=} options
         * @return {THIS}
         */
        function (extraParams, options) {
            (/** @type {?} */ (this)).clearStatus().load(1, extraParams, options);
            return (/** @type {?} */ (this));
        };
        /**
         * @private
         * @return {?}
         */
        STComponent.prototype._toTop = /**
         * @private
         * @return {?}
         */
        function () {
            if (!this.page.toTop)
                return;
            /** @type {?} */
            var el = (/** @type {?} */ (this.el.nativeElement));
            if (this.scroll) {
                (/** @type {?} */ (el.querySelector('.ant-table-body'))).scrollTo(0, 0);
                return;
            }
            el.scrollIntoView();
            // fix header height
            this.doc.documentElement.scrollTop -= (/** @type {?} */ (this.page.toTopOffset));
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
            if (type === 'pi') {
                this._load().then((/**
                 * @return {?}
                 */
                function () {
                    _this._toTop();
                }));
            }
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
            var res = (/** @type {?} */ (col.click))(item, this);
            if (typeof res === 'string') {
                this.router.navigateByUrl(res, { state: this.routerState });
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
            if (((/** @type {?} */ (e.target))).nodeName === 'INPUT')
                return;
            var _a = this, expand = _a.expand, expandRowByClick = _a.expandRowByClick, rowClickTime = _a.rowClickTime;
            if (!!expand && item.showExpand !== false && expandRowByClick) {
                item.expand = !item.expand;
                this.changeEmit('expand', item);
                return;
            }
            ++this.rowClickCount;
            if (this.rowClickCount !== 1)
                return;
            setTimeout((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var data = { e: e, item: item, index: index };
                if (_this.rowClickCount === 1) {
                    _this.changeEmit('click', data);
                }
                else {
                    _this.changeEmit('dblClick', data);
                }
                _this.rowClickCount = 0;
            }), rowClickTime);
        };
        /**
         * @param {?} item
         * @return {?}
         */
        STComponent.prototype._expandChange = /**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            this.changeEmit('expand', item);
        };
        /** 移除某行数据 */
        /**
         * 移除某行数据
         * @template THIS
         * @this {THIS}
         * @param {?} data
         * @return {THIS}
         */
        STComponent.prototype.removeRow = /**
         * 移除某行数据
         * @template THIS
         * @this {THIS}
         * @param {?} data
         * @return {THIS}
         */
        function (data) {
            var _this = this;
            if (!Array.isArray(data)) {
                data = [data];
            }
            ((/** @type {?} */ (data)))
                .map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return (/** @type {?} */ (_this))._data.indexOf(item); }))
                .filter((/**
             * @param {?} pos
             * @return {?}
             */
            function (pos) { return pos !== -1; }))
                .forEach((/**
             * @param {?} pos
             * @return {?}
             */
            function (pos) { return (/** @type {?} */ (_this))._data.splice(pos, 1); }));
            // recalculate no
            (/** @type {?} */ (this))._columns
                .filter((/**
             * @param {?} w
             * @return {?}
             */
            function (w) { return w.type === 'no'; }))
                .forEach((/**
             * @param {?} c
             * @return {?}
             */
            function (c) {
                return (/** @type {?} */ (_this))._data.forEach((/**
                 * @param {?} i
                 * @param {?} idx
                 * @return {?}
                 */
                function (i, idx) { return (i._values[c.__point] = { text: (/** @type {?} */ (_this)).dataSource.getNoIndex(i, c, idx), org: idx }); }));
            }));
            return (/** @type {?} */ (this)).cd();
        };
        // #endregion
        // #region sort
        // #endregion
        // #region sort
        /**
         * @param {?} col
         * @param {?} idx
         * @param {?} value
         * @return {?}
         */
        STComponent.prototype.sort = 
        // #endregion
        // #region sort
        /**
         * @param {?} col
         * @param {?} idx
         * @param {?} value
         * @return {?}
         */
        function (col, idx, value) {
            if (this.multiSort) {
                col._sort.default = value;
                col._sort.tick = this.dataSource.nextSortTick;
            }
            else {
                this._columns.forEach((/**
                 * @param {?} item
                 * @param {?} index
                 * @return {?}
                 */
                function (item, index) { return (item._sort.default = index === idx ? value : null); }));
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
         * @template THIS
         * @this {THIS}
         * @return {THIS}
         */
        STComponent.prototype.clearSort = /**
         * @template THIS
         * @this {THIS}
         * @return {THIS}
         */
        function () {
            (/** @type {?} */ (this))._columns.forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return (item._sort.default = null); }));
            return (/** @type {?} */ (this));
        };
        // #endregion
        // #region filter
        // #endregion
        // #region filter
        /**
         * @private
         * @param {?} col
         * @return {?}
         */
        STComponent.prototype.handleFilter = 
        // #endregion
        // #region filter
        /**
         * @private
         * @param {?} col
         * @return {?}
         */
        function (col) {
            (/** @type {?} */ (col.filter)).default = (/** @type {?} */ (col.filter)).menus.findIndex((/**
             * @param {?} w
             * @return {?}
             */
            function (w) { return (/** @type {?} */ (w.checked)); })) !== -1;
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
            (/** @type {?} */ (col.filter)).menus.forEach((/**
             * @param {?} i
             * @return {?}
             */
            function (i) { return (i.checked = false); }));
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
            (/** @type {?} */ (col.filter)).menus.forEach((/**
             * @param {?} i
             * @return {?}
             */
            function (i) { return (i.checked = false); }));
            item.checked = checked;
        };
        /**
         * @template THIS
         * @this {THIS}
         * @return {THIS}
         */
        STComponent.prototype.clearFilter = /**
         * @template THIS
         * @this {THIS}
         * @return {THIS}
         */
        function () {
            (/** @type {?} */ (this))._columns
                .filter((/**
             * @param {?} w
             * @return {?}
             */
            function (w) { return w.filter && w.filter.default === true; }))
                .forEach((/**
             * @param {?} col
             * @return {?}
             */
            function (col) {
                (/** @type {?} */ (col.filter)).default = false;
                (/** @type {?} */ (col.filter)).menus.forEach((/**
                 * @param {?} f
                 * @return {?}
                 */
                function (f) { return (f.checked = false); }));
            }));
            return (/** @type {?} */ (this));
        };
        // #endregion
        // #region checkbox
        /** 清除所有 `checkbox` */
        // #endregion
        // #region checkbox
        /**
         * 清除所有 `checkbox`
         * @template THIS
         * @this {THIS}
         * @return {THIS}
         */
        STComponent.prototype.clearCheck = 
        // #endregion
        // #region checkbox
        /**
         * 清除所有 `checkbox`
         * @template THIS
         * @this {THIS}
         * @return {THIS}
         */
        function () {
            return (/** @type {?} */ (this))._checkAll(false);
        };
        /**
         * @private
         * @template THIS
         * @this {THIS}
         * @return {THIS}
         */
        STComponent.prototype._refCheck = /**
         * @private
         * @template THIS
         * @this {THIS}
         * @return {THIS}
         */
        function () {
            /** @type {?} */
            var validData = (/** @type {?} */ (this))._data.filter((/**
             * @param {?} w
             * @return {?}
             */
            function (w) { return !w.disabled; }));
            /** @type {?} */
            var checkedList = validData.filter((/**
             * @param {?} w
             * @return {?}
             */
            function (w) { return w.checked === true; }));
            (/** @type {?} */ (this))._allChecked = checkedList.length > 0 && checkedList.length === validData.length;
            /** @type {?} */
            var allUnChecked = validData.every((/**
             * @param {?} value
             * @return {?}
             */
            function (value) { return !value.checked; }));
            (/** @type {?} */ (this))._indeterminate = !(/** @type {?} */ (this))._allChecked && !allUnChecked;
            (/** @type {?} */ (this))._allCheckedDisabled = (/** @type {?} */ (this))._data.length === (/** @type {?} */ (this))._data.filter((/**
             * @param {?} w
             * @return {?}
             */
            function (w) { return w.disabled; })).length;
            (/** @type {?} */ (this)).cd();
            return (/** @type {?} */ (this));
        };
        /**
         * @template THIS
         * @this {THIS}
         * @param {?=} checked
         * @return {THIS}
         */
        STComponent.prototype._checkAll = /**
         * @template THIS
         * @this {THIS}
         * @param {?=} checked
         * @return {THIS}
         */
        function (checked) {
            checked = typeof checked === 'undefined' ? (/** @type {?} */ (this))._allChecked : checked;
            (/** @type {?} */ (this))._data.filter((/**
             * @param {?} w
             * @return {?}
             */
            function (w) { return !w.disabled; })).forEach((/**
             * @param {?} i
             * @return {?}
             */
            function (i) { return (i.checked = checked); }));
            return (/** @type {?} */ (this))._refCheck()._checkNotify();
        };
        /**
         * @template THIS
         * @this {THIS}
         * @param {?} i
         * @param {?} value
         * @return {THIS}
         */
        STComponent.prototype._checkSelection = /**
         * @template THIS
         * @this {THIS}
         * @param {?} i
         * @param {?} value
         * @return {THIS}
         */
        function (i, value) {
            i.checked = value;
            return (/** @type {?} */ (this))._refCheck()._checkNotify();
        };
        /**
         * @template THIS
         * @this {THIS}
         * @param {?} row
         * @return {THIS}
         */
        STComponent.prototype._rowSelection = /**
         * @template THIS
         * @this {THIS}
         * @param {?} row
         * @return {THIS}
         */
        function (row) {
            row.select((/** @type {?} */ (this))._data);
            return (/** @type {?} */ (this))._refCheck()._checkNotify();
        };
        /**
         * @template THIS
         * @this {THIS}
         * @return {THIS}
         */
        STComponent.prototype._checkNotify = /**
         * @template THIS
         * @this {THIS}
         * @return {THIS}
         */
        function () {
            /** @type {?} */
            var res = (/** @type {?} */ (this))._data.filter((/**
             * @param {?} w
             * @return {?}
             */
            function (w) { return !w.disabled && w.checked === true; }));
            (/** @type {?} */ (this)).changeEmit('checkbox', res);
            return (/** @type {?} */ (this));
        };
        // #endregion
        // #region radio
        /** 清除所有 `radio` */
        // #endregion
        // #region radio
        /**
         * 清除所有 `radio`
         * @template THIS
         * @this {THIS}
         * @return {THIS}
         */
        STComponent.prototype.clearRadio = 
        // #endregion
        // #region radio
        /**
         * 清除所有 `radio`
         * @template THIS
         * @this {THIS}
         * @return {THIS}
         */
        function () {
            (/** @type {?} */ (this))._data.filter((/**
             * @param {?} w
             * @return {?}
             */
            function (w) { return w.checked; })).forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return (item.checked = false); }));
            (/** @type {?} */ (this)).changeEmit('radio', null);
            return (/** @type {?} */ (this));
        };
        /**
         * @template THIS
         * @this {THIS}
         * @param {?} checked
         * @param {?} item
         * @return {THIS}
         */
        STComponent.prototype._refRadio = /**
         * @template THIS
         * @this {THIS}
         * @param {?} checked
         * @param {?} item
         * @return {THIS}
         */
        function (checked, item) {
            // if (item.disabled === true) return;
            (/** @type {?} */ (this))._data.filter((/**
             * @param {?} w
             * @return {?}
             */
            function (w) { return !w.disabled; })).forEach((/**
             * @param {?} i
             * @return {?}
             */
            function (i) { return (i.checked = false); }));
            item.checked = checked;
            (/** @type {?} */ (this)).changeEmit('radio', item);
            return (/** @type {?} */ (this));
        };
        // #endregion
        // #region buttons
        // #endregion
        // #region buttons
        /**
         * @param {?} e
         * @param {?} record
         * @param {?} btn
         * @return {?}
         */
        STComponent.prototype._btnClick = 
        // #endregion
        // #region buttons
        /**
         * @param {?} e
         * @param {?} record
         * @param {?} btn
         * @return {?}
         */
        function (e, record, btn) {
            var _this = this;
            var _a, _b;
            if (e) {
                e.stopPropagation();
                e.preventDefault();
            }
            if (btn.type === 'modal' || btn.type === 'static') {
                var modal = btn.modal;
                /** @type {?} */
                var obj = (_a = {}, _a[(/** @type {?} */ ((/** @type {?} */ (modal)).paramsName))] = record, _a);
                ((/** @type {?} */ (this.modalHelper[btn.type === 'modal' ? 'create' : 'createStatic'])))((/** @type {?} */ (modal)).component, __assign({}, obj, ((/** @type {?} */ (modal)).params && (/** @type {?} */ ((/** @type {?} */ (modal)).params))(record))), util.deepMergeKey({}, true, this.copyCog.modal, modal))
                    .pipe(operators.filter((/**
                 * @param {?} w
                 * @return {?}
                 */
                function (w) { return typeof w !== 'undefined'; })))
                    .subscribe((/**
                 * @param {?} res
                 * @return {?}
                 */
                function (res) { return _this.btnCallback(record, btn, res); }));
                return;
            }
            else if (btn.type === 'drawer') {
                var drawer = btn.drawer;
                /** @type {?} */
                var obj = (_b = {}, _b[(/** @type {?} */ ((/** @type {?} */ (drawer)).paramsName))] = record, _b);
                this.drawerHelper
                    .create((/** @type {?} */ ((/** @type {?} */ (drawer)).title)), (/** @type {?} */ (drawer)).component, __assign({}, obj, ((/** @type {?} */ (drawer)).params && (/** @type {?} */ ((/** @type {?} */ (drawer)).params))(record))), util.deepMergeKey({}, true, this.copyCog.drawer, drawer))
                    .pipe(operators.filter((/**
                 * @param {?} w
                 * @return {?}
                 */
                function (w) { return typeof w !== 'undefined'; })))
                    .subscribe((/**
                 * @param {?} res
                 * @return {?}
                 */
                function (res) { return _this.btnCallback(record, btn, res); }));
                return;
            }
            else if (btn.type === 'link') {
                /** @type {?} */
                var clickRes = this.btnCallback(record, btn);
                if (typeof clickRes === 'string') {
                    this.router.navigateByUrl(clickRes, { state: this.routerState });
                }
                return;
            }
            this.btnCallback(record, btn);
        };
        /**
         * @private
         * @param {?} record
         * @param {?} btn
         * @param {?=} modal
         * @return {?}
         */
        STComponent.prototype.btnCallback = /**
         * @private
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
            return (/** @type {?} */ (col.buttons)).filter((/**
             * @param {?} btn
             * @return {?}
             */
            function (btn) { return (/** @type {?} */ (btn.iif))(item, btn, col); }));
        };
        // #endregion
        // #region export
        /**
         * 导出当前页，确保已经注册 `XlsxModule`
         * @param newData 重新指定数据，例如希望导出所有数据非常有用
         * @param opt 额外参数
         */
        // #endregion
        // #region export
        /**
         * 导出当前页，确保已经注册 `XlsxModule`
         * @param {?=} newData 重新指定数据，例如希望导出所有数据非常有用
         * @param {?=} opt 额外参数
         * @return {?}
         */
        STComponent.prototype.export = 
        // #endregion
        // #region export
        /**
         * 导出当前页，确保已经注册 `XlsxModule`
         * @param {?=} newData 重新指定数据，例如希望导出所有数据非常有用
         * @param {?=} opt 额外参数
         * @return {?}
         */
        function (newData, opt) {
            var _this = this;
            (newData ? rxjs.of(newData) : rxjs.of(this._data)).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                return _this.exportSrv.export(__assign({}, opt, {
                    _d: res,
                    _c: _this._columns,
                }));
            }));
        };
        // #endregion
        // #endregion
        /**
         * @return {?}
         */
        STComponent.prototype.resetColumns = 
        // #endregion
        /**
         * @return {?}
         */
        function () {
            return this.refreshColumns()._load();
        };
        /**
         * @private
         * @template THIS
         * @this {THIS}
         * @return {THIS}
         */
        STComponent.prototype.refreshColumns = /**
         * @private
         * @template THIS
         * @this {THIS}
         * @return {THIS}
         */
        function () {
            (/** @type {?} */ (this))._columns = (/** @type {?} */ (this)).columnSource.process((/** @type {?} */ (this)).columns);
            return (/** @type {?} */ (this));
        };
        /**
         * @private
         * @return {?}
         */
        STComponent.prototype.setClass = /**
         * @private
         * @return {?}
         */
        function () {
            var _a;
            var _b = this.widthMode, type = _b.type, strictBehavior = _b.strictBehavior;
            util.updateHostClass(this.el.nativeElement, this.renderer, (_a = {},
                _a["st"] = true,
                _a["st__p-" + this.page.placement] = this.page.placement,
                _a["st__width-" + type] = true,
                _a["st__width-strict-" + strictBehavior] = type === 'strict',
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
                this.refreshColumns();
            }
            if (changes.data && changes.data.currentValue) {
                this._load();
            }
            if (changes.loading) {
                this._loading = changes.loading.currentValue;
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
            var unsubscribe$ = this.unsubscribe$;
            unsubscribe$.next();
            unsubscribe$.complete();
        };
        STComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'st',
                        exportAs: 'st',
                        template: "<ng-template #btnTpl let-i let-btn=\"btn\" let-sub=\"sub\">\n  <nz-popconfirm *ngIf=\"btn.pop === true\" [nzTitle]=\"btn.popTitle\" (nzOnConfirm)=\"_btnClick($event, i, btn)\">\n    <a *ngIf=\"!sub\" nz-popconfirm>\n      <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n    </a>\n    <span *ngIf=\"sub\" nz-popconfirm>\n      <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n    </span>\n  </nz-popconfirm>\n  <ng-container *ngIf=\"btn.pop !== true\">\n    <a *ngIf=\"!sub\" (click)=\"_btnClick($event, i, btn)\">\n      <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n    </a>\n    <span *ngIf=\"sub\" (click)=\"_btnClick($event, i, btn)\">\n      <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n    </span>\n  </ng-container>\n</ng-template>\n<ng-template #btnTextTpl let-i let-btn=\"btn\">\n  <i *ngIf=\"btn.icon\" nz-icon [type]=\"btn.icon.type\" [theme]=\"btn.icon.theme\" [spin]=\"btn.icon.spin\"\n     [twoToneColor]=\"btn.icon.twoToneColor\" [iconfont]=\"btn.icon.iconfont\"></i>\n  <span [innerHTML]=\"_btnText(i, btn)\" [ngClass]=\"{'pl-xs': btn.icon}\"></span>\n</ng-template>\n<nz-table [nzData]=\"_data\" [(nzPageIndex)]=\"pi\" (nzPageIndexChange)=\"_change('pi')\" [(nzPageSize)]=\"ps\"\n          (nzPageSizeChange)=\"_change('ps')\" [nzTotal]=\"total\" [nzShowPagination]=\"_isPagination\"\n          [nzFrontPagination]=\"false\" [nzBordered]=\"bordered\" [nzSize]=\"size\" [nzLoading]=\"_loading\"\n          [nzLoadingDelay]=\"loadingDelay\" [nzScroll]=\"scroll\" [nzTitle]=\"header\" [nzFooter]=\"footer\"\n          [nzNoResult]=\"noResult\" [nzPageSizeOptions]=\"page.pageSizes\" [nzShowQuickJumper]=\"page.showQuickJumper\"\n          [nzShowSizeChanger]=\"page.showSize\" [nzShowTotal]=\"totalTpl\">\n  <thead class=\"st__head\">\n    <tr>\n      <th *ngIf=\"expand\" [nzShowExpand]=\"expand\"></th>\n      <th *ngFor=\"let c of _columns; let index=index\" [nzWidth]=\"c.width\" [nzLeft]=\"c._left\"\n          [nzRight]=\"c._right\" [ngClass]=\"c.className\" [attr.colspan]=\"c.colSpan\" [attr.data-col]=\"c.indexKey\"\n          [nzShowSort]=\"c._sort.enabled\" [nzSort]=\"c._sort.default\" (nzSortChange)=\"sort(c, index, $event)\"\n          [nzCustomFilter]=\"c.filter\">\n        <ng-template #renderTitle [ngTemplateOutlet]=\"c.__renderTitle\" [ngTemplateOutletContext]=\"{$implicit: c, index: index }\"></ng-template>\n        <ng-container *ngIf=\"!c.__renderTitle; else renderTitle\">\n          <ng-container [ngSwitch]=\"c.type\">\n            <ng-container *ngSwitchCase=\"'checkbox'\">\n              <label nz-checkbox class=\"st__checkall\" [nzDisabled]=\"_allCheckedDisabled\"\n                     [(ngModel)]=\"_allChecked\" [nzIndeterminate]=\"_indeterminate\" (ngModelChange)=\"_checkAll()\"></label>\n              <nz-dropdown *ngIf=\"c.selections.length\" class=\"st__selection\">\n                <span nz-dropdown>\n                  <i nz-icon type=\"down\"></i>\n                </span>\n                <ul nz-menu>\n                  <li nz-menu-item *ngFor=\"let rw of c.selections\" (click)=\"_rowSelection(rw)\"\n                      [innerHTML]=\"rw.text\">\n                  </li>\n                </ul>\n              </nz-dropdown>\n            </ng-container>\n            <ng-container *ngSwitchDefault>\n              <span [innerHTML]=\"c.title\"></span>\n            </ng-container>\n          </ng-container>\n          <nz-dropdown *ngIf=\"c.filter\" class=\"st__filter\" nzTrigger=\"click\" nzTableFilter [hasFilterButton]=\"true\"\n                       [nzClickHide]=\"false\" [(nzVisible)]=\"c.filter.visible\">\n            <i nz-icon [type]=\"c.filter.icon\" theme=\"fill\" [class.ant-table-filter-selected]=\"c.filter.default\"\n               [class.ant-table-filter-open]=\"c.filter.visible\" nz-dropdown></i>\n            <ul nz-menu>\n              <ng-container *ngIf=\"c.filter.multiple\">\n                <li nz-menu-item *ngFor=\"let filter of c.filter.menus\">\n                  <label nz-checkbox [(ngModel)]=\"filter.checked\">{{filter.text}}</label>\n                </li>\n              </ng-container>\n              <ng-container *ngIf=\"!c.filter.multiple\">\n                <li nz-menu-item *ngFor=\"let filter of c.filter.menus\">\n                  <label nz-radio [ngModel]=\"filter.checked\" (ngModelChange)=\"_filterRadio(c, filter, $event)\">{{filter.text}}</label>\n                </li>\n              </ng-container>\n            </ul>\n            <div class=\"ant-table-filter-dropdown-btns\">\n              <a class=\"ant-table-filter-dropdown-link confirm\" (click)=\"c.filter.visible = false\">\n                <span (click)=\"_filterConfirm(c)\">{{c.filter.confirmText}}</span>\n              </a>\n              <a class=\"ant-table-filter-dropdown-link clear\" (click)=\"c.filter.visible = false\">\n                <span (click)=\"_filterClear(c)\">{{c.filter.clearText}}</span>\n              </a>\n            </div>\n          </nz-dropdown>\n        </ng-container>\n      </th>\n    </tr>\n  </thead>\n  <tbody class=\"st__body\">\n    <ng-container *ngIf=\"!_loading\">\n      <ng-template [ngTemplateOutlet]=\"bodyHeader\" [ngTemplateOutletContext]=\"{$implicit: _statistical }\"></ng-template>\n    </ng-container>\n    <ng-container *ngFor=\"let i of _data; let index=index\">\n      <tr [attr.data-index]=\"index\" (click)=\"_rowClick($event, i, index)\" [class]=\"i._rowClassName\">\n        <td *ngIf=\"expand\" [nzShowExpand]=\"expand && i.showExpand !== false\" [(nzExpand)]=\"i.expand\" (nzExpandChange)=\"_expandChange(i)\"></td>\n        <td *ngFor=\"let c of _columns; let cIdx=index\" [nzLeft]=\"c._left\" [nzRight]=\"c._right\"\n            [nzCheckbox]=\"c.type === 'checkbox'\" [ngClass]=\"columnClass(c)\" [attr.colspan]=\"c.colSpan\">\n          <span class=\"ant-table-rep__title\" [innerHTML]=\"c.title\"></span>\n          <span>\n            <ng-template #render [ngTemplateOutlet]=\"c.__render\" [ngTemplateOutletContext]=\"{$implicit: i, index: index, column: c }\"></ng-template>\n            <ng-container *ngIf=\"!c.__render; else render\">\n              <ng-container [ngSwitch]=\"c.type\">\n                <label *ngSwitchCase=\"'checkbox'\" nz-checkbox [nzDisabled]=\"i.disabled\" [ngModel]=\"i.checked\"\n                       (ngModelChange)=\"_checkSelection(i, $event)\"></label>\n                <label *ngSwitchCase=\"'radio'\" nz-radio [nzDisabled]=\"i.disabled\" [ngModel]=\"i.checked\"\n                       (ngModelChange)=\"_refRadio($event, i)\"></label>\n                <a *ngSwitchCase=\"'link'\" (click)=\"_click($event, i, c)\" [innerHTML]=\"i._values[cIdx].text\"></a>\n                <nz-tag *ngSwitchCase=\"'tag'\" [nzColor]=\"c.tag[i._values[cIdx].text].color\">{{c.tag[i._values[cIdx].text].text\n                  || i._values[cIdx].text}}</nz-tag>\n                <nz-badge *ngSwitchCase=\"'badge'\" [nzStatus]=\"c.badge[i._values[cIdx].text].color\"\n                          [nzText]=\"c.badge[i._values[cIdx].text].text || i._values[cIdx].text\"></nz-badge>\n                <span *ngSwitchDefault [innerHTML]=\"i._values[cIdx].text\" [attr.title]=\"isTruncate(c) ? i._values[cIdx].text : null\"></span>\n              </ng-container>\n              <ng-container *ngFor=\"let btn of _validBtns(i, c); let last=last\">\n                <nz-dropdown *ngIf=\"btn.children.length > 0\">\n                  <a class=\"ant-dropdown-link\" nz-dropdown>\n                    <span [innerHTML]=\"_btnText(i, btn)\"></span>\n                    <i nz-icon type=\"down\"></i>\n                  </a>\n                  <ul nz-menu>\n                    <ng-container *ngFor=\"let subBtn of btn.children\">\n                      <li nz-menu-item *ngIf=\"subBtn.iif(i, subBtn, c)\">\n                        <ng-template [ngTemplateOutlet]=\"btnTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: subBtn, sub: true }\"></ng-template>\n                      </li>\n                    </ng-container>\n                  </ul>\n                </nz-dropdown>\n                <ng-container *ngIf=\"btn.children.length == 0\">\n                  <ng-template [ngTemplateOutlet]=\"btnTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn, sub: false }\"></ng-template>\n                </ng-container>\n                <nz-divider *ngIf=\"!last\" nzType=\"vertical\"></nz-divider>\n              </ng-container>\n              <ng-template [ngIf]=\"!c.__renderExpanded\" [ngTemplateOutlet]=\"c.__renderExpanded\"\n                           [ngTemplateOutletContext]=\"{$implicit: i, index: index, column: c }\"></ng-template>\n            </ng-container>\n          </span>\n        </td>\n      </tr>\n      <tr [nzExpand]=\"i.expand\">\n        <td></td>\n        <td [attr.colspan]=\"_columns.length\">\n          <ng-template [ngTemplateOutlet]=\"expand\" [ngTemplateOutletContext]=\"{$implicit: i, index: index }\"></ng-template>\n        </td>\n      </tr>\n    </ng-container>\n    <ng-container *ngIf=\"!_loading\">\n      <ng-template [ngTemplateOutlet]=\"body\" [ngTemplateOutletContext]=\"{$implicit: _statistical }\"></ng-template>\n    </ng-container>\n  </tbody>\n  <ng-template #totalTpl let-range=\"range\" let-total>{{ renderTotal(total, range) }}</ng-template>\n</nz-table>\n",
                        providers: [STDataSource, STRowSource, STColumnSource, STExport, theme.CNCurrencyPipe, theme.DatePipe, theme.YNPipe, common.DecimalPipe],
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        STComponent.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [theme.ALAIN_I18N_TOKEN,] }] },
            { type: core.ChangeDetectorRef },
            { type: STConfig },
            { type: router.Router },
            { type: core.ElementRef },
            { type: core.Renderer2 },
            { type: STExport },
            { type: theme.ModalHelper },
            { type: theme.DrawerHelper },
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: STColumnSource },
            { type: STDataSource },
            { type: theme.DelonLocaleService }
        ]; };
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
            widthMode: [{ type: core.Input }],
            header: [{ type: core.Input }],
            footer: [{ type: core.Input }],
            bodyHeader: [{ type: core.Input }],
            body: [{ type: core.Input }],
            expandRowByClick: [{ type: core.Input }],
            expand: [{ type: core.Input }],
            noResult: [{ type: core.Input }],
            widthConfig: [{ type: core.Input }],
            rowClickTime: [{ type: core.Input }],
            responsiveHideHeaderFooter: [{ type: core.Input }],
            error: [{ type: core.Output }],
            change: [{ type: core.Output }]
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
            util.InputNumber(),
            __metadata("design:type", Object)
        ], STComponent.prototype, "loadingDelay", void 0);
        __decorate([
            util.InputBoolean(),
            __metadata("design:type", Object)
        ], STComponent.prototype, "bordered", void 0);
        __decorate([
            util.InputBoolean(),
            __metadata("design:type", Object)
        ], STComponent.prototype, "expandRowByClick", void 0);
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var COMPONENTS = [STComponent, STRowDirective];
    var STModule = /** @class */ (function () {
        function STModule() {
        }
        STModule.decorators = [
            { type: core.NgModule, args: [{
                        schemas: [core.NO_ERRORS_SCHEMA],
                        imports: [common.CommonModule, forms.FormsModule, util.DelonUtilModule, acl.DelonACLModule, ngZorroAntd.NgZorroAntdModule],
                        declarations: __spread(COMPONENTS),
                        exports: __spread(COMPONENTS),
                    },] }
        ];
        return STModule;
    }());

    exports.STColumnSource = STColumnSource;
    exports.STComponent = STComponent;
    exports.STConfig = STConfig;
    exports.STDataSource = STDataSource;
    exports.STExport = STExport;
    exports.STModule = STModule;
    exports.STRowDirective = STRowDirective;
    exports.ɵa = STRowSource;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=table.umd.js.map
