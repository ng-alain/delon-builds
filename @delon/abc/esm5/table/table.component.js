/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DecimalPipe, DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Inject, Input, Optional, Output, Renderer2, TemplateRef, ViewEncapsulation, ViewChild, } from '@angular/core';
import { Router } from '@angular/router';
import { ALAIN_I18N_TOKEN, CNCurrencyPipe, DatePipe, DelonLocaleService, DrawerHelper, ModalHelper, YNPipe, } from '@delon/theme';
import { deepMerge, deepMergeKey, toBoolean, updateHostClass, InputBoolean, InputNumber } from '@delon/util';
import { of, Subject, from } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { STColumnSource } from './table-column-source';
import { STDataSource } from './table-data-source';
import { STExport } from './table-export';
import { STRowSource } from './table-row.directive';
import { STConfig } from './table.config';
import { NzTableComponent } from 'ng-zorro-antd';
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
        this.unsubscribe$ = new Subject();
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
        this.virtualScroll = false;
        this.virtualItemSize = 54;
        this.virtualMaxBufferPx = 200;
        this.virtualMinBufferPx = 100;
        /**
         * 单排序规则
         * - 若不指定，则返回：`columnName=ascend|descend`
         * - 若指定，则返回：`sort=columnName.(ascend|descend)`
         */
        this.singleSort = null;
        this.expandRowByClick = false;
        this.expandAccordion = false;
        /**
         * 行单击多少时长之类为双击（单位：毫秒），默认：`200`
         */
        this.rowClickTime = 200;
        this.responsive = true;
        /**
         * 请求异常时回调
         */
        this.error = new EventEmitter();
        /**
         * 变化时回调，包括：`pi`、`ps`、`checkbox`、`radio`、`sort`、`filter`、`click`、`dblClick` 变动
         */
        this.change = new EventEmitter();
        this.rowClickCount = 0;
        this.delonI18n.change.pipe(takeUntil(this.unsubscribe$)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.locale = _this.delonI18n.getData('st');
            if (_this._columns.length > 0) {
                _this.page = _this.clonePage;
                _this.cd();
            }
        }));
        this.copyCog = deepMergeKey(new STConfig(), true, cog);
        delete this.copyCog.multiSort;
        Object.assign(this, this.copyCog);
        if (cog.multiSort && cog.multiSort.global !== false) {
            this.multiSort = tslib_1.__assign({}, cog.multiSort);
        }
        i18nSrv.change
            .pipe(takeUntil(this.unsubscribe$), filter((/**
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
            this._req = deepMerge({}, this._req, this.cog.req, value);
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
            var item = deepMergeKey({}, true, this.cog.res, value);
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
            var item = deepMergeKey({}, true, new STConfig().page, this.cog.page, value);
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
            this._multiSort = tslib_1.__assign({}, (typeof value === 'object' ? value : {}));
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
            this._widthMode = tslib_1.__assign({ type: 'default', strictBehavior: 'truncate' }, value);
        },
        enumerable: true,
        configurable: true
    });
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
        return !!column.width && this.widthMode.strictBehavior === 'truncate' && column.type !== 'img';
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
    Object.defineProperty(STComponent.prototype, "filteredData", {
        // #region data
        /**
         * 获取过滤后所有数据
         * - 本地数据：包含排序、过滤后不分页数据
         * - 远程数据：不传递 `pi`、`ps` 两个参数
         */
        get: 
        // #region data
        /**
         * 获取过滤后所有数据
         * - 本地数据：包含排序、过滤后不分页数据
         * - 远程数据：不传递 `pi`、`ps` 两个参数
         * @return {?}
         */
        function () {
            return this.loadData((/** @type {?} */ ({ paginator: false }))).then((/**
             * @param {?} res
             * @return {?}
             */
            function (res) { return res.list; }));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @param {?} val
     * @return {?}
     */
    STComponent.prototype.setLoading = /**
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
     * @param {?=} options
     * @return {?}
     */
    STComponent.prototype.loadData = /**
     * @private
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        var _this = this;
        var _a = this, pi = _a.pi, ps = _a.ps, data = _a.data, req = _a.req, res = _a.res, page = _a.page, total = _a.total, singleSort = _a.singleSort, multiSort = _a.multiSort, rowClassName = _a.rowClassName;
        return new Promise((/**
         * @param {?} resolvePromise
         * @param {?} rejectPromise
         * @return {?}
         */
        function (resolvePromise, rejectPromise) {
            return _this.dataSource
                .process(tslib_1.__assign({ pi: pi,
                ps: ps,
                total: total,
                data: data,
                req: req,
                res: res,
                page: page, columns: _this._columns, singleSort: singleSort,
                multiSort: multiSort,
                rowClassName: rowClassName, paginator: true }, options))
                .pipe(takeUntil(_this.unsubscribe$))
                .subscribe((/**
             * @param {?} result
             * @return {?}
             */
            function (result) { return resolvePromise(result); }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return rejectPromise(error); }));
        }));
    };
    /**
     * @private
     * @return {?}
     */
    STComponent.prototype.loadPageData = /**
     * @private
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result, error_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setLoading(true);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.loadData()];
                    case 2:
                        result = _a.sent();
                        this.setLoading(false);
                        if (typeof result.pi !== 'undefined') {
                            this.pi = result.pi;
                        }
                        if (typeof result.ps !== 'undefined') {
                            this.ps = result.ps;
                        }
                        if (typeof result.total !== 'undefined') {
                            this.total = result.total;
                        }
                        if (typeof result.pageShow !== 'undefined') {
                            this._isPagination = result.pageShow;
                        }
                        this._data = (/** @type {?} */ (result.list));
                        this._statistical = (/** @type {?} */ (result.statistical));
                        return [2 /*return*/, this._refCheck()];
                    case 3:
                        error_1 = _a.sent();
                        this.setLoading(false);
                        this.cdr.detectChanges();
                        this.error.emit({ type: 'req', error: error_1 });
                        return [2 /*return*/, this];
                    case 4: return [2 /*return*/];
                }
            });
        });
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
            (/** @type {?} */ (this))._req.params = options && options.merge ? tslib_1.__assign({}, (/** @type {?} */ (this))._req.params, extraParams) : extraParams;
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
        if (type === 'pi' || (type === 'ps' && this.pi <= Math.ceil(this.total / this.ps))) {
            this.loadPageData().then((/**
             * @return {?}
             */
            function () { return _this._toTop(); }));
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
     * @private
     * @param {?} item
     * @return {?}
     */
    STComponent.prototype.closeOtherExpand = /**
     * @private
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (this.expandAccordion === false)
            return;
        this._data.filter((/**
         * @param {?} i
         * @return {?}
         */
        function (i) { return i !== item; })).forEach((/**
         * @param {?} i
         * @return {?}
         */
        function (i) { return (i.expand = false); }));
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
            this.closeOtherExpand(item);
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
        this.closeOtherExpand(item);
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
        function (c) { return (/** @type {?} */ (_this))._data.forEach((/**
         * @param {?} i
         * @param {?} idx
         * @return {?}
         */
        function (i, idx) { return (i._values[c.__point] = { text: (/** @type {?} */ (_this)).dataSource.getNoIndex(i, c, idx), org: idx }); })); }));
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
        this.loadPageData();
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
        this.columnSource.updateDefault((/** @type {?} */ (col.filter)));
        this.loadPageData();
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
        (/** @type {?} */ ((/** @type {?} */ (col.filter)).menus)).forEach((/**
         * @param {?} i
         * @return {?}
         */
        function (i) { return (i.checked = false); }));
        item.checked = checked;
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
        this.columnSource.cleanFilter(col);
        this.handleFilter(col);
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
        var _this = this;
        (/** @type {?} */ (this))._columns.filter((/**
         * @param {?} w
         * @return {?}
         */
        function (w) { return w.filter && w.filter.default === true; })).forEach((/**
         * @param {?} col
         * @return {?}
         */
        function (col) { return (/** @type {?} */ (_this)).columnSource.cleanFilter(col); }));
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
        return (/** @type {?} */ (this)).cd();
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
     * @param {?} record
     * @param {?} btn
     * @return {?}
     */
    STComponent.prototype._btnClick = 
    // #endregion
    // #region buttons
    /**
     * @param {?} record
     * @param {?} btn
     * @return {?}
     */
    function (record, btn) {
        var _a, _b;
        var _this = this;
        if (btn.type === 'modal' || btn.type === 'static') {
            var modal = btn.modal;
            /** @type {?} */
            var obj = (_a = {}, _a[(/** @type {?} */ ((/** @type {?} */ (modal)).paramsName))] = record, _a);
            ((/** @type {?} */ (this.modalHelper[btn.type === 'modal' ? 'create' : 'createStatic'])))((/** @type {?} */ (modal)).component, tslib_1.__assign({}, obj, ((/** @type {?} */ (modal)).params && (/** @type {?} */ ((/** @type {?} */ (modal)).params))(record))), deepMergeKey({}, true, this.copyCog.modal, modal))
                .pipe(filter((/**
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
                .create((/** @type {?} */ ((/** @type {?} */ (drawer)).title)), (/** @type {?} */ (drawer)).component, tslib_1.__assign({}, obj, ((/** @type {?} */ (drawer)).params && (/** @type {?} */ ((/** @type {?} */ (drawer)).params))(record))), deepMergeKey({}, true, this.copyCog.drawer, drawer))
                .pipe(filter((/**
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
        // tslint:disable-next-line: deprecation
        if (btn.format) {
            // tslint:disable-next-line: deprecation
            return btn.format(record, btn);
        }
        return typeof btn.text === 'function' ? btn.text(record, btn) : btn.text || '';
    };
    /**
     * @param {?} btns
     * @param {?} item
     * @param {?} col
     * @return {?}
     */
    STComponent.prototype._validBtns = /**
     * @param {?} btns
     * @param {?} item
     * @param {?} col
     * @return {?}
     */
    function (btns, item, col) {
        return btns.filter((/**
         * @param {?} btn
         * @return {?}
         */
        function (btn) {
            /** @type {?} */
            var result = (/** @type {?} */ (btn.iif))(item, btn, col);
            /** @type {?} */
            var isRenderDisabled = btn.iifBehavior === 'disabled';
            btn._result = result;
            btn._disabled = !result && isRenderDisabled;
            return result || isRenderDisabled;
        }));
    };
    // #endregion
    // #region export
    /**
     * 导出当前页，确保已经注册 `XlsxModule`
     * @param newData 重新指定数据；若为 `true` 表示使用 `filteredData` 数据
     * @param opt 额外参数
     */
    // #endregion
    // #region export
    /**
     * 导出当前页，确保已经注册 `XlsxModule`
     * @param {?=} newData 重新指定数据；若为 `true` 表示使用 `filteredData` 数据
     * @param {?=} opt 额外参数
     * @return {?}
     */
    STComponent.prototype.export = 
    // #endregion
    // #region export
    /**
     * 导出当前页，确保已经注册 `XlsxModule`
     * @param {?=} newData 重新指定数据；若为 `true` 表示使用 `filteredData` 数据
     * @param {?=} opt 额外参数
     * @return {?}
     */
    function (newData, opt) {
        var _this = this;
        (newData === true ? from(this.filteredData) : of(newData || this._data)).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            return _this.exportSrv.export(tslib_1.__assign({}, opt, { _d: res, _c: _this._columns }));
        }));
    };
    Object.defineProperty(STComponent.prototype, "cdkVirtualScrollViewport", {
        // #endregion
        get: 
        // #endregion
        /**
         * @return {?}
         */
        function () {
            return this.orgTable.cdkVirtualScrollViewport;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?=} options
     * @return {?}
     */
    STComponent.prototype.resetColumns = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        options = tslib_1.__assign({ emitReload: true }, options);
        if (typeof options.columns !== 'undefined') {
            this.columns = options.columns;
        }
        if (typeof options.pi !== 'undefined') {
            this.pi = options.pi;
        }
        if (typeof options.ps !== 'undefined') {
            this.ps = options.ps;
        }
        this.refreshColumns();
        if (options.emitReload === true) {
            return this.loadPageData();
        }
        else {
            this.cd();
            return Promise.resolve(this);
        }
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
        updateHostClass(this.el.nativeElement, this.renderer, (_a = {},
            _a["st"] = true,
            _a["st__p-" + this.page.placement] = this.page.placement,
            _a["st__width-" + type] = true,
            _a["st__width-strict-" + strictBehavior] = type === 'strict',
            _a["ant-table-rep"] = this.responsive,
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
        /** @type {?} */
        var changeData = changes.data;
        if (changeData && changeData.currentValue && !(this.req.lazyLoad && changeData.firstChange)) {
            this.loadPageData();
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
        { type: Component, args: [{
                    selector: 'st',
                    exportAs: 'st',
                    template: "<ng-template #btnTpl let-i let-btn=\"btn\">\n  <ng-container *ngIf=\"!btn.tooltip\">\n    <ng-template [ngTemplateOutlet]=\"btnItemTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n  </ng-container>\n  <span *ngIf=\"btn.tooltip\" nz-tooltip [nzTitle]=\"btn.tooltip\">\n    <ng-template [ngTemplateOutlet]=\"btnItemTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n  </span>\n</ng-template>\n<ng-template #btnItemTpl let-i let-btn=\"btn\">\n  <a *ngIf=\"btn.pop\"\n    nz-popconfirm [nzPopconfirmTitle]=\"btn.pop.title\" [nzIcon]=\"btn.pop.icon\" [nzCondition]=\"btn.pop.condition(i)\"\n    [nzCancelText]=\"btn.pop.cancelText\" [nzOkText]=\"btn.pop.okText\" [nzOkType]=\"btn.pop.okType\"\n    (nzOnConfirm)=\"_btnClick(i, btn)\"\n    class=\"st__btn-text\">\n    <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n  </a>\n  <a *ngIf=\"!btn.pop\" (click)=\"_btnClick(i, btn)\" class=\"st__btn-text\">\n    <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n  </a>\n</ng-template>\n<ng-template #btnTextTpl let-i let-btn=\"btn\">\n  <ng-container *ngIf=\"btn.icon\">\n    <i *ngIf=\"!btn.icon.iconfont\"\n      nz-icon [nzType]=\"btn.icon.type\"\n      [nzTheme]=\"btn.icon.theme\"\n      [nzSpin]=\"btn.icon.spin\"\n      [nzTwotoneColor]=\"btn.icon.twoToneColor\"></i>\n    <i *ngIf=\"btn.icon.iconfont\" nz-icon [nzIconfont]=\"btn.icon.iconfont\"></i>\n  </ng-container>\n  <span [innerHTML]=\"_btnText(i, btn)\" [ngClass]=\"{'pl-xs': btn.icon}\"></span>\n</ng-template>\n<ng-template #titleTpl let-i>\n  <span [innerHTML]=\"i.text\"></span>\n  <small *ngIf=\"i.optional\" class=\"st__head-optional\" [innerHTML]=\"i.optional\"></small>\n  <i *ngIf=\"i.optionalHelp\" class=\"st__head-tip\" nz-tooltip [nzTitle]=\"i.optionalHelp\" nz-icon nzType=\"question-circle\"></i>\n</ng-template>\n<ng-template #bodyTpl let-i let-index=\"index\">\n  <tr [attr.data-index]=\"index\" (click)=\"_rowClick($event, i, index)\" [class]=\"i._rowClassName\">\n    <td *ngIf=\"expand\" [nzShowExpand]=\"expand && i.showExpand !== false\" [(nzExpand)]=\"i.expand\" (nzExpandChange)=\"_expandChange(i)\"></td>\n    <td *ngFor=\"let c of _columns; let cIdx=index\" [nzLeft]=\"c._left\" [nzRight]=\"c._right\"\n        [nzCheckbox]=\"c.type === 'checkbox'\" [ngClass]=\"columnClass(c)\" [attr.colspan]=\"c.colSpan\">\n      <span class=\"ant-table-rep__title\">\n        <ng-template [ngTemplateOutlet]=\"titleTpl\" [ngTemplateOutletContext]=\"{$implicit: c.title }\"></ng-template>\n      </span>\n      <span>\n        <ng-template #render [ngTemplateOutlet]=\"c.__render\" [ngTemplateOutletContext]=\"{$implicit: i, index: index, column: c }\"></ng-template>\n        <ng-container *ngIf=\"!c.__render; else render\">\n          <ng-container [ngSwitch]=\"c.type\">\n            <label *ngSwitchCase=\"'checkbox'\" nz-checkbox [nzDisabled]=\"i.disabled\" [ngModel]=\"i.checked\"\n                   (ngModelChange)=\"_checkSelection(i, $event)\"></label>\n            <label *ngSwitchCase=\"'radio'\" nz-radio [nzDisabled]=\"i.disabled\" [ngModel]=\"i.checked\"\n                   (ngModelChange)=\"_refRadio($event, i)\"></label>\n            <a *ngSwitchCase=\"'link'\" (click)=\"_click($event, i, c)\" [innerHTML]=\"i._values[cIdx].text\"></a>\n            <nz-tag *ngSwitchCase=\"'tag'\" [nzColor]=\"c.tag[i._values[cIdx].text].color\">\n              {{c.tag[i._values[cIdx].text].text || i._values[cIdx].text}}\n            </nz-tag>\n            <nz-badge *ngSwitchCase=\"'badge'\"\n                      [nzStatus]=\"c.badge[i._values[cIdx].text].color\"\n                      [nzText]=\"c.badge[i._values[cIdx].text].text || i._values[cIdx].text\">\n            </nz-badge>\n            <span *ngSwitchDefault [innerHTML]=\"i._values[cIdx].text\" [attr.title]=\"isTruncate(c) ? i._values[cIdx].text : null\"></span>\n          </ng-container>\n          <ng-container *ngFor=\"let btn of _validBtns(c.buttons, i, c); let last=last\">\n            <a *ngIf=\"btn.children.length > 0\" nz-dropdown [nzDropdownMenu]=\"btnMenu\" nzOverlayClassName=\"st__btn-sub\">\n              <span [innerHTML]=\"_btnText(i, btn)\"></span>\n              <i nz-icon nzType=\"down\"></i>\n            </a>\n            <nz-dropdown-menu #btnMenu=\"nzDropdownMenu\">\n              <ul nz-menu>\n                <ng-container *ngFor=\"let subBtn of _validBtns(btn.children, i, c)\">\n                  <li nz-menu-item [class.st__btn-disabled]=\"subBtn._disabled\">\n                    <ng-template [ngTemplateOutlet]=\"btnTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: subBtn }\"></ng-template>\n                  </li>\n                </ng-container>\n              </ul>\n            </nz-dropdown-menu>\n            <span *ngIf=\"btn.children.length == 0\" [class.st__btn-disabled]=\"btn._disabled\">\n              <ng-template [ngTemplateOutlet]=\"btnTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n            </span>\n            <nz-divider *ngIf=\"!last\" nzType=\"vertical\"></nz-divider>\n          </ng-container>\n          <ng-template [ngIf]=\"!c.__renderExpanded\" [ngTemplateOutlet]=\"c.__renderExpanded\"\n                       [ngTemplateOutletContext]=\"{$implicit: i, index: index, column: c }\"></ng-template>\n        </ng-container>\n      </span>\n    </td>\n  </tr>\n  <tr [nzExpand]=\"i.expand\">\n    <td></td>\n    <td [attr.colspan]=\"_columns.length\">\n      <ng-template [ngTemplateOutlet]=\"expand\" [ngTemplateOutletContext]=\"{$implicit: i, index: index }\"></ng-template>\n    </td>\n  </tr>\n</ng-template>\n<ng-template #chkAllTpl let-custom>\n  <label nz-checkbox class=\"st__checkall\"\n    [nzDisabled]=\"_allCheckedDisabled\"\n    [(ngModel)]=\"_allChecked\"\n    [nzIndeterminate]=\"_indeterminate\"\n    (ngModelChange)=\"_checkAll()\"\n    [class.ant-table-selection-select-all-custom]=\"custom\"></label>\n</ng-template>\n<nz-table #table [nzData]=\"_data\" [(nzPageIndex)]=\"pi\" (nzPageIndexChange)=\"_change('pi')\" [(nzPageSize)]=\"ps\"\n          (nzPageSizeChange)=\"_change('ps')\" [nzTotal]=\"total\" [nzShowPagination]=\"_isPagination\"\n          [nzFrontPagination]=\"false\" [nzBordered]=\"bordered\" [nzSize]=\"size\" [nzLoading]=\"_loading\"\n          [nzLoadingDelay]=\"loadingDelay\" [nzLoadingIndicator]=\"loadingIndicator\"\n          [nzTitle]=\"header\" [nzFooter]=\"footer\"\n          [nzScroll]=\"scroll\" [nzVirtualScroll]=\"virtualScroll\" [nzVirtualItemSize]=\"virtualItemSize\"\n          [nzVirtualMaxBufferPx]=\"virtualMaxBufferPx\" [nzVirtualMinBufferPx]=\"virtualMinBufferPx\"\n          [nzNoResult]=\"noResult\" [nzPageSizeOptions]=\"page.pageSizes\" [nzShowQuickJumper]=\"page.showQuickJumper\"\n          [nzShowSizeChanger]=\"page.showSize\" [nzPaginationPosition]=\"page.position\" [nzShowTotal]=\"totalTpl\">\n  <thead class=\"st__head\">\n    <tr>\n      <th *ngIf=\"expand\" [nzShowExpand]=\"expand\"></th>\n      <th *ngFor=\"let c of _columns; let index=index\" [nzWidth]=\"c.width\" [nzLeft]=\"c._left\"\n          [nzRight]=\"c._right\" [ngClass]=\"c.className\" [attr.colspan]=\"c.colSpan\" [attr.data-col]=\"c.indexKey\"\n          [nzShowSort]=\"c._sort.enabled\" [nzSort]=\"c._sort.default\" (nzSortChange)=\"sort(c, index, $event)\"\n          [nzCustomFilter]=\"c.filter\">\n        <ng-template #renderTitle [ngTemplateOutlet]=\"c.__renderTitle\" [ngTemplateOutletContext]=\"{$implicit: c, index: index }\"></ng-template>\n        <ng-container *ngIf=\"!c.__renderTitle; else renderTitle\">\n          <ng-container [ngSwitch]=\"c.type\">\n            <ng-container *ngSwitchCase=\"'checkbox'\">\n              <ng-container *ngIf=\"c.selections.length === 0\">\n                <ng-template [ngTemplateOutlet]=\"chkAllTpl\" [ngTemplateOutletContext]=\"{$implicit: false }\"></ng-template>\n              </ng-container>\n              <div *ngIf=\"c.selections.length > 0\" class=\"ant-table-selection\">\n                <ng-template [ngTemplateOutlet]=\"chkAllTpl\" [ngTemplateOutletContext]=\"{$implicit: true }\"></ng-template>\n                <div *ngIf=\"c.selections.length\" nz-dropdown nzPlacement=\"bottomLeft\" [nzDropdownMenu]=\"selectionMenu\" class=\"ant-table-selection-down\">\n                  <i nz-icon nzType=\"down\"></i>\n                </div>\n                <nz-dropdown-menu #selectionMenu=\"nzDropdownMenu\">\n                  <ul nz-menu class=\"ant-table-selection-menu\">\n                    <li nz-menu-item *ngFor=\"let rw of c.selections\" (click)=\"_rowSelection(rw)\" [innerHTML]=\"rw.text\"></li>\n                  </ul>\n                </nz-dropdown-menu>\n              </div>\n            </ng-container>\n            <ng-container *ngSwitchDefault>\n              <ng-template [ngTemplateOutlet]=\"titleTpl\" [ngTemplateOutletContext]=\"{$implicit: c.title }\"></ng-template>\n            </ng-container>\n          </ng-container>\n          <ng-container *ngIf=\"c.filter\">\n            <i nz-icon [nzType]=\"c.filter.icon.type\" [nzTheme]=\"c.filter.icon.theme\"\n              class=\"st__filter ant-table-filter-icon\"\n              [class.ant-table-filter-selected]=\"c.filter.default\"\n              [class.ant-table-filter-open]=\"c.filter.visible\"\n              nz-dropdown [nzDropdownMenu]=\"filterMenu\" nzTrigger=\"click\" nzTableFilter [hasFilterButton]=\"true\"\n              [nzClickHide]=\"false\" [(nzVisible)]=\"c.filter.visible\"\n              nzOverlayClassName=\"st__filter-wrap\"></i>\n            <nz-dropdown-menu #filterMenu=\"nzDropdownMenu\">\n              <ng-container [ngSwitch]=\"c.filter.type\">\n                <div *ngSwitchCase=\"'keyword'\" class=\"st__filter-keyword\">\n                  <input type=\"text\" nz-input [attr.placeholder]=\"c.filter.menus[0].text\" [(ngModel)]=\"c.filter.menus[0].value\" />\n                </div>\n                <ul *ngSwitchDefault nz-menu>\n                  <ng-container *ngIf=\"c.filter.multiple\">\n                    <li nz-menu-item *ngFor=\"let filter of c.filter.menus\">\n                      <label nz-checkbox [(ngModel)]=\"filter.checked\">{{filter.text}}</label>\n                    </li>\n                  </ng-container>\n                  <ng-container *ngIf=\"!c.filter.multiple\">\n                    <li nz-menu-item *ngFor=\"let filter of c.filter.menus\">\n                      <label nz-radio [ngModel]=\"filter.checked\" (ngModelChange)=\"_filterRadio(c, filter, $event)\">{{filter.text}}</label>\n                    </li>\n                  </ng-container>\n                </ul>\n              </ng-container>\n              <div class=\"ant-table-filter-dropdown-btns\">\n                <a class=\"ant-table-filter-dropdown-link confirm\" (click)=\"c.filter.visible = false\">\n                  <span (click)=\"_filterConfirm(c)\">{{c.filter.confirmText || locale.filterConfirm}}</span>\n                </a>\n                <a class=\"ant-table-filter-dropdown-link clear\" (click)=\"c.filter.visible = false\">\n                  <span (click)=\"_filterClear(c)\">{{c.filter.clearText || locale.filterReset}}</span>\n                </a>\n              </div>\n            </nz-dropdown-menu>\n          </ng-container>\n        </ng-container>\n      </th>\n    </tr>\n  </thead>\n  <tbody class=\"st__body\">\n    <ng-container *ngIf=\"!_loading\">\n      <ng-template [ngTemplateOutlet]=\"bodyHeader\" [ngTemplateOutletContext]=\"{$implicit: _statistical }\"></ng-template>\n    </ng-container>\n    <ng-container *ngIf=\"!virtualScroll\">\n      <ng-container *ngFor=\"let i of _data; let index=index\">\n        <ng-template [ngTemplateOutlet]=\"bodyTpl\" [ngTemplateOutletContext]=\"{$implicit: i, index: index }\"></ng-template>\n      </ng-container>\n    </ng-container>\n    <ng-container *ngIf=\"virtualScroll\">\n      <ng-template nz-virtual-scroll let-i let-index=\"index\">\n        <ng-template [ngTemplateOutlet]=\"bodyTpl\" [ngTemplateOutletContext]=\"{$implicit: i, index: index }\"></ng-template>\n      </ng-template>\n    </ng-container>\n    <ng-container *ngIf=\"!_loading\">\n      <ng-template [ngTemplateOutlet]=\"body\" [ngTemplateOutletContext]=\"{$implicit: _statistical }\"></ng-template>\n    </ng-container>\n  </tbody>\n  <ng-template #totalTpl let-range=\"range\" let-total>{{ renderTotal(total, range) }}</ng-template>\n</nz-table>\n",
                    providers: [STDataSource, STRowSource, STColumnSource, STExport, CNCurrencyPipe, DatePipe, YNPipe, DecimalPipe],
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    STComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [ALAIN_I18N_TOKEN,] }] },
        { type: ChangeDetectorRef },
        { type: STConfig },
        { type: Router },
        { type: ElementRef },
        { type: Renderer2 },
        { type: STExport },
        { type: ModalHelper },
        { type: DrawerHelper },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: STColumnSource },
        { type: STDataSource },
        { type: DelonLocaleService }
    ]; };
    STComponent.propDecorators = {
        orgTable: [{ type: ViewChild, args: ['table', { static: false },] }],
        req: [{ type: Input }],
        res: [{ type: Input }],
        page: [{ type: Input }],
        multiSort: [{ type: Input }],
        widthMode: [{ type: Input }],
        data: [{ type: Input }],
        columns: [{ type: Input }],
        ps: [{ type: Input }],
        pi: [{ type: Input }],
        total: [{ type: Input }],
        loading: [{ type: Input }],
        loadingDelay: [{ type: Input }],
        loadingIndicator: [{ type: Input }],
        bordered: [{ type: Input }],
        size: [{ type: Input }],
        scroll: [{ type: Input }],
        virtualScroll: [{ type: Input }],
        virtualItemSize: [{ type: Input }],
        virtualMaxBufferPx: [{ type: Input }],
        virtualMinBufferPx: [{ type: Input }],
        singleSort: [{ type: Input }],
        rowClassName: [{ type: Input }],
        header: [{ type: Input }],
        footer: [{ type: Input }],
        bodyHeader: [{ type: Input }],
        body: [{ type: Input }],
        expandRowByClick: [{ type: Input }],
        expandAccordion: [{ type: Input }],
        expand: [{ type: Input }],
        noResult: [{ type: Input }],
        widthConfig: [{ type: Input }],
        rowClickTime: [{ type: Input }],
        responsive: [{ type: Input }],
        responsiveHideHeaderFooter: [{ type: Input }],
        error: [{ type: Output }],
        change: [{ type: Output }]
    };
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Object)
    ], STComponent.prototype, "ps", void 0);
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Object)
    ], STComponent.prototype, "pi", void 0);
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Object)
    ], STComponent.prototype, "total", void 0);
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Object)
    ], STComponent.prototype, "loadingDelay", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], STComponent.prototype, "bordered", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], STComponent.prototype, "virtualScroll", void 0);
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Object)
    ], STComponent.prototype, "virtualItemSize", void 0);
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Object)
    ], STComponent.prototype, "virtualMaxBufferPx", void 0);
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Object)
    ], STComponent.prototype, "virtualMinBufferPx", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], STComponent.prototype, "expandRowByClick", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], STComponent.prototype, "expandAccordion", void 0);
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Object)
    ], STComponent.prototype, "rowClickTime", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], STComponent.prototype, "responsive", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], STComponent.prototype, "responsiveHideHeaderFooter", void 0);
    return STComponent;
}());
export { STComponent };
if (false) {
    /** @type {?} */
    STComponent.prototype.orgTable;
    /**
     * @type {?}
     * @private
     */
    STComponent.prototype.unsubscribe$;
    /**
     * @type {?}
     * @private
     */
    STComponent.prototype.totalTpl;
    /**
     * @type {?}
     * @private
     */
    STComponent.prototype.clonePage;
    /**
     * @type {?}
     * @private
     */
    STComponent.prototype.copyCog;
    /** @type {?} */
    STComponent.prototype.locale;
    /** @type {?} */
    STComponent.prototype._data;
    /** @type {?} */
    STComponent.prototype._statistical;
    /** @type {?} */
    STComponent.prototype._isPagination;
    /** @type {?} */
    STComponent.prototype._allChecked;
    /** @type {?} */
    STComponent.prototype._allCheckedDisabled;
    /** @type {?} */
    STComponent.prototype._indeterminate;
    /** @type {?} */
    STComponent.prototype._columns;
    /** @type {?} */
    STComponent.prototype.data;
    /**
     * @type {?}
     * @private
     */
    STComponent.prototype._req;
    /**
     * @type {?}
     * @private
     */
    STComponent.prototype._res;
    /** @type {?} */
    STComponent.prototype.columns;
    /** @type {?} */
    STComponent.prototype.ps;
    /** @type {?} */
    STComponent.prototype.pi;
    /** @type {?} */
    STComponent.prototype.total;
    /**
     * @type {?}
     * @private
     */
    STComponent.prototype._page;
    /** @type {?} */
    STComponent.prototype._loading;
    /**
     * 是否显示Loading
     * @type {?}
     */
    STComponent.prototype.loading;
    /**
     * 延迟显示加载效果的时间（防止闪烁）
     * @type {?}
     */
    STComponent.prototype.loadingDelay;
    /** @type {?} */
    STComponent.prototype.loadingIndicator;
    /**
     * 是否显示边框
     * @type {?}
     */
    STComponent.prototype.bordered;
    /**
     * table大小
     * @type {?}
     */
    STComponent.prototype.size;
    /**
     * 纵向支持滚动，也可用于指定滚动区域的高度：`{ y: '300px', x: '300px' }`
     * @type {?}
     */
    STComponent.prototype.scroll;
    /** @type {?} */
    STComponent.prototype.virtualScroll;
    /** @type {?} */
    STComponent.prototype.virtualItemSize;
    /** @type {?} */
    STComponent.prototype.virtualMaxBufferPx;
    /** @type {?} */
    STComponent.prototype.virtualMinBufferPx;
    /**
     * 单排序规则
     * - 若不指定，则返回：`columnName=ascend|descend`
     * - 若指定，则返回：`sort=columnName.(ascend|descend)`
     * @type {?}
     */
    STComponent.prototype.singleSort;
    /**
     * @type {?}
     * @private
     */
    STComponent.prototype._multiSort;
    /** @type {?} */
    STComponent.prototype.rowClassName;
    /**
     * @type {?}
     * @private
     */
    STComponent.prototype._widthMode;
    /**
     * `header` 标题
     * @type {?}
     */
    STComponent.prototype.header;
    /**
     * `footer` 底部
     * @type {?}
     */
    STComponent.prototype.footer;
    /**
     * 额外 `body` 顶部内容
     * @type {?}
     */
    STComponent.prototype.bodyHeader;
    /**
     * 额外 `body` 内容
     * @type {?}
     */
    STComponent.prototype.body;
    /** @type {?} */
    STComponent.prototype.expandRowByClick;
    /** @type {?} */
    STComponent.prototype.expandAccordion;
    /**
     * `expand` 可展开，当数据源中包括 `expand` 表示展开状态
     * @type {?}
     */
    STComponent.prototype.expand;
    /** @type {?} */
    STComponent.prototype.noResult;
    /** @type {?} */
    STComponent.prototype.widthConfig;
    /**
     * 行单击多少时长之类为双击（单位：毫秒），默认：`200`
     * @type {?}
     */
    STComponent.prototype.rowClickTime;
    /** @type {?} */
    STComponent.prototype.responsive;
    /** @type {?} */
    STComponent.prototype.responsiveHideHeaderFooter;
    /**
     * 请求异常时回调
     * @type {?}
     */
    STComponent.prototype.error;
    /**
     * 变化时回调，包括：`pi`、`ps`、`checkbox`、`radio`、`sort`、`filter`、`click`、`dblClick` 变动
     * @type {?}
     */
    STComponent.prototype.change;
    /**
     * @type {?}
     * @private
     */
    STComponent.prototype.rowClickCount;
    /**
     * @type {?}
     * @private
     */
    STComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    STComponent.prototype.cog;
    /**
     * @type {?}
     * @private
     */
    STComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    STComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    STComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    STComponent.prototype.exportSrv;
    /**
     * @type {?}
     * @private
     */
    STComponent.prototype.modalHelper;
    /**
     * @type {?}
     * @private
     */
    STComponent.prototype.drawerHelper;
    /**
     * @type {?}
     * @private
     */
    STComponent.prototype.doc;
    /**
     * @type {?}
     * @private
     */
    STComponent.prototype.columnSource;
    /**
     * @type {?}
     * @private
     */
    STComponent.prototype.dataSource;
    /**
     * @type {?}
     * @private
     */
    STComponent.prototype.delonI18n;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy90YWJsZS8iLCJzb3VyY2VzIjpbInRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDeEQsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFHTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLFNBQVMsRUFHVCxXQUFXLEVBQ1gsaUJBQWlCLEVBQ2pCLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUVMLGdCQUFnQixFQUNoQixjQUFjLEVBQ2QsUUFBUSxFQUNSLGtCQUFrQixFQUNsQixZQUFZLEVBRVosV0FBVyxFQUNYLE1BQU0sR0FDUCxNQUFNLGNBQWMsQ0FBQztBQUN0QixPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDN0csT0FBTyxFQUFFLEVBQUUsRUFBYyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQTJDLE1BQU0scUJBQXFCLENBQUM7QUFDNUYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRCxPQUFP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LDJCQUE4Qzs7Ozs7SUFFOUMsNkJBQTRDOztJQUM1QyxvQ0FBK0M7O0lBQy9DLHNDQUE2Qzs7SUFDN0MseUNBQWlEOztJQUNqRCx5Q0FBaUQ7Ozs7Ozs7SUFNakQsaUNBQWdEOzs7OztJQUNoRCxpQ0FBdUM7O0lBQ3ZDLG1DQUFzQzs7Ozs7SUFDdEMsaUNBQWdDOzs7OztJQUVoQyw2QkFBNEM7Ozs7O0lBRTVDLDZCQUE0Qzs7Ozs7SUFFNUMsaUNBQXVEOzs7OztJQUV2RCwyQkFBaUQ7O0lBQ2pELHVDQUFrRDs7SUFDbEQsc0NBQWlEOzs7OztJQUVqRCw2QkFBa0U7O0lBQ2xFLCtCQUE4Qzs7SUFDOUMsa0NBQStCOzs7OztJQUUvQixtQ0FBMkM7O0lBQzNDLGlDQUFvRDs7SUFDcEQsaURBQTZEOzs7OztJQUU3RCw0QkFBdUQ7Ozs7O0lBSXZELDZCQUF5RDs7Ozs7SUFFekQsb0NBQTBCOzs7OztJQWpIeEIsMEJBQThCOzs7OztJQUM5QiwwQkFBcUI7Ozs7O0lBQ3JCLDZCQUFzQjs7Ozs7SUFDdEIseUJBQXNCOzs7OztJQUN0QiwrQkFBMkI7Ozs7O0lBQzNCLGdDQUEyQjs7Ozs7SUFDM0Isa0NBQWdDOzs7OztJQUNoQyxtQ0FBa0M7Ozs7O0lBQ2xDLDBCQUFrQzs7Ozs7SUFDbEMsbUNBQW9DOzs7OztJQUNwQyxpQ0FBZ0M7Ozs7O0lBQ2hDLGdDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERlY2ltYWxQaXBlLCBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2UsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgVmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBBbGFpbkkxOE5TZXJ2aWNlLFxuICBBTEFJTl9JMThOX1RPS0VOLFxuICBDTkN1cnJlbmN5UGlwZSxcbiAgRGF0ZVBpcGUsXG4gIERlbG9uTG9jYWxlU2VydmljZSxcbiAgRHJhd2VySGVscGVyLFxuICBMb2NhbGVEYXRhLFxuICBNb2RhbEhlbHBlcixcbiAgWU5QaXBlLFxufSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgZGVlcE1lcmdlLCBkZWVwTWVyZ2VLZXksIHRvQm9vbGVhbiwgdXBkYXRlSG9zdENsYXNzLCBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgb2YsIE9ic2VydmFibGUsIFN1YmplY3QsIGZyb20gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBTVENvbHVtblNvdXJjZSB9IGZyb20gJy4vdGFibGUtY29sdW1uLXNvdXJjZSc7XG5pbXBvcnQgeyBTVERhdGFTb3VyY2UsIFNURGF0YVNvdXJjZVJlc3VsdCwgU1REYXRhU291cmNlT3B0aW9ucyB9IGZyb20gJy4vdGFibGUtZGF0YS1zb3VyY2UnO1xuaW1wb3J0IHsgU1RFeHBvcnQgfSBmcm9tICcuL3RhYmxlLWV4cG9ydCc7XG5pbXBvcnQgeyBTVFJvd1NvdXJjZSB9IGZyb20gJy4vdGFibGUtcm93LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBTVENvbmZpZyB9IGZyb20gJy4vdGFibGUuY29uZmlnJztcbmltcG9ydCB7XG4gIFNUQ2hhbmdlLFxuICBTVENoYW5nZVR5cGUsXG4gIFNUQ29sdW1uLFxuICBTVENvbHVtbkJ1dHRvbixcbiAgU1RDb2x1bW5GaWx0ZXJNZW51LFxuICBTVENvbHVtblNlbGVjdGlvbixcbiAgU1REYXRhLFxuICBTVEVycm9yLFxuICBTVEV4cG9ydE9wdGlvbnMsXG4gIFNUTG9hZE9wdGlvbnMsXG4gIFNUTXVsdGlTb3J0LFxuICBTVFBhZ2UsXG4gIFNUUmVxLFxuICBTVFJlcyxcbiAgU1RSb3dDbGFzc05hbWUsXG4gIFNUU2luZ2xlU29ydCxcbiAgU1RTdGF0aXN0aWNhbFJlc3VsdHMsXG4gIFNUV2lkdGhNb2RlLFxuICBTVFJlc2V0Q29sdW1uc09wdGlvbixcbn0gZnJvbSAnLi90YWJsZS5pbnRlcmZhY2VzJztcbmltcG9ydCB7IE56VGFibGVDb21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3QnLFxuICBleHBvcnRBczogJ3N0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbU1REYXRhU291cmNlLCBTVFJvd1NvdXJjZSwgU1RDb2x1bW5Tb3VyY2UsIFNURXhwb3J0LCBDTkN1cnJlbmN5UGlwZSwgRGF0ZVBpcGUsIFlOUGlwZSwgRGVjaW1hbFBpcGVdLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIFNUQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBAVmlld0NoaWxkKCd0YWJsZScsIHsgc3RhdGljOiBmYWxzZSB9KSBvcmdUYWJsZTogTnpUYWJsZUNvbXBvbmVudDtcbiAgLyoqIOivt+axguS9k+mFjee9riAqL1xuICBASW5wdXQoKVxuICBnZXQgcmVxKCkge1xuICAgIHJldHVybiB0aGlzLl9yZXE7XG4gIH1cbiAgc2V0IHJlcSh2YWx1ZTogU1RSZXEpIHtcbiAgICB0aGlzLl9yZXEgPSBkZWVwTWVyZ2Uoe30sIHRoaXMuX3JlcSwgdGhpcy5jb2cucmVxLCB2YWx1ZSk7XG4gIH1cbiAgLyoqIOi/lOWbnuS9k+mFjee9riAqL1xuICBASW5wdXQoKVxuICBnZXQgcmVzKCkge1xuICAgIHJldHVybiB0aGlzLl9yZXM7XG4gIH1cbiAgc2V0IHJlcyh2YWx1ZTogU1RSZXMpIHtcbiAgICBjb25zdCBpdGVtID0gZGVlcE1lcmdlS2V5KHt9LCB0cnVlLCB0aGlzLmNvZy5yZXMsIHZhbHVlKTtcbiAgICBjb25zdCByZU5hbWUgPSBpdGVtLnJlTmFtZTtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkocmVOYW1lLmxpc3QpKSByZU5hbWUubGlzdCA9IHJlTmFtZS5saXN0LnNwbGl0KCcuJyk7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHJlTmFtZS50b3RhbCkpIHJlTmFtZS50b3RhbCA9IHJlTmFtZS50b3RhbC5zcGxpdCgnLicpO1xuICAgIHRoaXMuX3JlcyA9IGl0ZW07XG4gIH1cbiAgLyoqIOWIhumhteWZqOmFjee9riAqL1xuICBASW5wdXQoKVxuICBnZXQgcGFnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGFnZTtcbiAgfVxuICBzZXQgcGFnZSh2YWx1ZTogU1RQYWdlKSB7XG4gICAgdGhpcy5jbG9uZVBhZ2UgPSB2YWx1ZTtcbiAgICBjb25zdCBpdGVtID0gZGVlcE1lcmdlS2V5KHt9LCB0cnVlLCBuZXcgU1RDb25maWcoKS5wYWdlLCB0aGlzLmNvZy5wYWdlLCB2YWx1ZSk7XG4gICAgY29uc3QgeyB0b3RhbCB9ID0gaXRlbTtcbiAgICBpZiAodHlwZW9mIHRvdGFsID09PSAnc3RyaW5nJyAmJiB0b3RhbC5sZW5ndGgpIHtcbiAgICAgIHRoaXMudG90YWxUcGwgPSB0b3RhbDtcbiAgICB9IGVsc2UgaWYgKHRvQm9vbGVhbih0b3RhbCkpIHtcbiAgICAgIHRoaXMudG90YWxUcGwgPSB0aGlzLmxvY2FsZS50b3RhbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50b3RhbFRwbCA9ICcnO1xuICAgIH1cbiAgICB0aGlzLl9wYWdlID0gaXRlbTtcbiAgfVxuICAvKiog5piv5ZCm5aSa5o6S5bqP77yM5b2TIGBzb3J0YCDlpJrkuKrnm7jlkIzlgLzml7boh6rliqjlkIjlubbvvIzlu7rorq7lkI7nq6/mlK/mjIHml7bkvb/nlKggKi9cbiAgQElucHV0KClcbiAgZ2V0IG11bHRpU29ydCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbXVsdGlTb3J0O1xuICB9XG4gIHNldCBtdWx0aVNvcnQodmFsdWU6IGFueSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJyAmJiAhdG9Cb29sZWFuKHZhbHVlKSkge1xuICAgICAgdGhpcy5fbXVsdGlTb3J0ID0gbnVsbDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fbXVsdGlTb3J0ID0ge1xuICAgICAgLi4uKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgPyB2YWx1ZSA6IHt9KSxcbiAgICB9O1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCB3aWR0aE1vZGUodmFsdWU6IFNUV2lkdGhNb2RlKSB7XG4gICAgdGhpcy5fd2lkdGhNb2RlID0geyB0eXBlOiAnZGVmYXVsdCcsIHN0cmljdEJlaGF2aW9yOiAndHJ1bmNhdGUnLCAuLi52YWx1ZSB9O1xuICB9XG4gIGdldCB3aWR0aE1vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dpZHRoTW9kZTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KEFMQUlOX0kxOE5fVE9LRU4pIGkxOG5TcnY6IEFsYWluSTE4TlNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgY29nOiBTVENvbmZpZyxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgZXhwb3J0U3J2OiBTVEV4cG9ydCxcbiAgICBwcml2YXRlIG1vZGFsSGVscGVyOiBNb2RhbEhlbHBlcixcbiAgICBwcml2YXRlIGRyYXdlckhlbHBlcjogRHJhd2VySGVscGVyLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnksXG4gICAgcHJpdmF0ZSBjb2x1bW5Tb3VyY2U6IFNUQ29sdW1uU291cmNlLFxuICAgIHByaXZhdGUgZGF0YVNvdXJjZTogU1REYXRhU291cmNlLFxuICAgIHByaXZhdGUgZGVsb25JMThuOiBEZWxvbkxvY2FsZVNlcnZpY2UsXG4gICkge1xuICAgIHRoaXMuZGVsb25JMThuLmNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmxvY2FsZSA9IHRoaXMuZGVsb25JMThuLmdldERhdGEoJ3N0Jyk7XG4gICAgICBpZiAodGhpcy5fY29sdW1ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMucGFnZSA9IHRoaXMuY2xvbmVQYWdlO1xuICAgICAgICB0aGlzLmNkKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmNvcHlDb2cgPSBkZWVwTWVyZ2VLZXkobmV3IFNUQ29uZmlnKCksIHRydWUsIGNvZyk7XG4gICAgZGVsZXRlIHRoaXMuY29weUNvZy5tdWx0aVNvcnQ7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCB0aGlzLmNvcHlDb2cpO1xuICAgIGlmIChjb2cubXVsdGlTb3J0ICYmIGNvZy5tdWx0aVNvcnQuZ2xvYmFsICE9PSBmYWxzZSkge1xuICAgICAgdGhpcy5tdWx0aVNvcnQgPSB7IC4uLmNvZy5tdWx0aVNvcnQgfTtcbiAgICB9XG5cbiAgICBpMThuU3J2LmNoYW5nZVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCksXG4gICAgICAgIGZpbHRlcigoKSA9PiB0aGlzLl9jb2x1bW5zLmxlbmd0aCA+IDApLFxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLnJlZnJlc2hDb2x1bW5zKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgcm91dGVyU3RhdGUoKSB7XG4gICAgY29uc3QgeyBwaSwgcHMsIHRvdGFsIH0gPSB0aGlzO1xuICAgIHJldHVybiB7IHBpLCBwcywgdG90YWwgfTtcbiAgfVxuICBwcml2YXRlIHVuc3Vic2NyaWJlJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHByaXZhdGUgdG90YWxUcGwgPSBgYDtcbiAgcHJpdmF0ZSBjbG9uZVBhZ2U6IFNUUGFnZTtcbiAgcHJpdmF0ZSBjb3B5Q29nOiBTVENvbmZpZztcbiAgbG9jYWxlOiBMb2NhbGVEYXRhID0ge307XG4gIF9kYXRhOiBTVERhdGFbXSA9IFtdO1xuICBfc3RhdGlzdGljYWw6IFNUU3RhdGlzdGljYWxSZXN1bHRzID0ge307XG4gIF9pc1BhZ2luYXRpb24gPSB0cnVlO1xuICBfYWxsQ2hlY2tlZCA9IGZhbHNlO1xuICBfYWxsQ2hlY2tlZERpc2FibGVkID0gZmFsc2U7XG4gIF9pbmRldGVybWluYXRlID0gZmFsc2U7XG4gIF9jb2x1bW5zOiBTVENvbHVtbltdID0gW107XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKSBkYXRhOiBzdHJpbmcgfCBTVERhdGFbXSB8IE9ic2VydmFibGU8U1REYXRhW10+O1xuICBwcml2YXRlIF9yZXE6IFNUUmVxO1xuICBwcml2YXRlIF9yZXM6IFNUUmVzO1xuICBASW5wdXQoKSBjb2x1bW5zOiBTVENvbHVtbltdID0gW107XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHBzID0gMTA7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHBpID0gMTtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgdG90YWwgPSAwO1xuICBwcml2YXRlIF9wYWdlOiBTVFBhZ2U7XG4gIF9sb2FkaW5nID0gZmFsc2U7XG4gIC8qKiDmmK/lkKbmmL7npLpMb2FkaW5nICovXG4gIEBJbnB1dCgpIGxvYWRpbmc6IGJvb2xlYW4gfCBudWxsID0gbnVsbDtcbiAgLyoqIOW7tui/n+aYvuekuuWKoOi9veaViOaenOeahOaXtumXtO+8iOmYsuatoumXqueDge+8iSAqL1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBsb2FkaW5nRGVsYXkgPSAwO1xuICBASW5wdXQoKSBsb2FkaW5nSW5kaWNhdG9yOiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgLyoqIOaYr+WQpuaYvuekuui+ueahhiAqL1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYm9yZGVyZWQgPSBmYWxzZTtcbiAgLyoqIHRhYmxl5aSn5bCPICovXG4gIEBJbnB1dCgpIHNpemU6ICdzbWFsbCcgfCAnbWlkZGxlJyB8ICdkZWZhdWx0JztcbiAgLyoqIOe6teWQkeaUr+aMgea7muWKqO+8jOS5n+WPr+eUqOS6juaMh+Wumua7muWKqOWMuuWfn+eahOmrmOW6pu+8mmB7IHk6ICczMDBweCcsIHg6ICczMDBweCcgfWAgKi9cbiAgQElucHV0KCkgc2Nyb2xsOiB7IHk/OiBzdHJpbmc7IHg/OiBzdHJpbmcgfTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHZpcnR1YWxTY3JvbGwgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgdmlydHVhbEl0ZW1TaXplID0gNTQ7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHZpcnR1YWxNYXhCdWZmZXJQeCA9IDIwMDtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgdmlydHVhbE1pbkJ1ZmZlclB4ID0gMTAwO1xuICAvKipcbiAgICog5Y2V5o6S5bqP6KeE5YiZXG4gICAqIC0g6Iul5LiN5oyH5a6a77yM5YiZ6L+U5Zue77yaYGNvbHVtbk5hbWU9YXNjZW5kfGRlc2NlbmRgXG4gICAqIC0g6Iul5oyH5a6a77yM5YiZ6L+U5Zue77yaYHNvcnQ9Y29sdW1uTmFtZS4oYXNjZW5kfGRlc2NlbmQpYFxuICAgKi9cbiAgQElucHV0KCkgc2luZ2xlU29ydDogU1RTaW5nbGVTb3J0IHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgX211bHRpU29ydDogU1RNdWx0aVNvcnQgfCBudWxsO1xuICBASW5wdXQoKSByb3dDbGFzc05hbWU6IFNUUm93Q2xhc3NOYW1lO1xuICBwcml2YXRlIF93aWR0aE1vZGU6IFNUV2lkdGhNb2RlO1xuICAvKiogYGhlYWRlcmAg5qCH6aKYICovXG4gIEBJbnB1dCgpIGhlYWRlcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIC8qKiBgZm9vdGVyYCDlupXpg6ggKi9cbiAgQElucHV0KCkgZm9vdGVyOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgLyoqIOmineWkliBgYm9keWAg6aG26YOo5YaF5a65ICovXG4gIEBJbnB1dCgpIGJvZHlIZWFkZXI6IFRlbXBsYXRlUmVmPFNUU3RhdGlzdGljYWxSZXN1bHRzPjtcbiAgLyoqIOmineWkliBgYm9keWAg5YaF5a65ICovXG4gIEBJbnB1dCgpIGJvZHk6IFRlbXBsYXRlUmVmPFNUU3RhdGlzdGljYWxSZXN1bHRzPjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGV4cGFuZFJvd0J5Q2xpY2sgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGV4cGFuZEFjY29yZGlvbiA9IGZhbHNlO1xuICAvKiogYGV4cGFuZGAg5Y+v5bGV5byA77yM5b2T5pWw5o2u5rqQ5Lit5YyF5ousIGBleHBhbmRgIOihqOekuuWxleW8gOeKtuaAgSAqL1xuICBASW5wdXQoKSBleHBhbmQ6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiB7fTsgY29sdW1uOiBTVENvbHVtbiB9PjtcbiAgQElucHV0KCkgbm9SZXN1bHQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSB3aWR0aENvbmZpZzogc3RyaW5nW107XG4gIC8qKiDooYzljZXlh7vlpJrlsJHml7bplb/kuYvnsbvkuLrlj4zlh7vvvIjljZXkvY3vvJrmr6vnp5LvvInvvIzpu5jorqTvvJpgMjAwYCAqL1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSByb3dDbGlja1RpbWUgPSAyMDA7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSByZXNwb25zaXZlOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHJlc3BvbnNpdmVIaWRlSGVhZGVyRm9vdGVyOiBib29sZWFuO1xuICAvKiog6K+35rGC5byC5bi45pe25Zue6LCDICovXG4gIEBPdXRwdXQoKSByZWFkb25seSBlcnJvciA9IG5ldyBFdmVudEVtaXR0ZXI8U1RFcnJvcj4oKTtcbiAgLyoqXG4gICAqIOWPmOWMluaXtuWbnuiwg++8jOWMheaLrO+8mmBwaWDjgIFgcHNg44CBYGNoZWNrYm94YOOAgWByYWRpb2DjgIFgc29ydGDjgIFgZmlsdGVyYOOAgWBjbGlja2DjgIFgZGJsQ2xpY2tgIOWPmOWKqFxuICAgKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8U1RDaGFuZ2U+KCk7XG5cbiAgcHJpdmF0ZSByb3dDbGlja0NvdW50ID0gMDtcblxuICBjZCgpIHtcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZW5kZXJUb3RhbCh0b3RhbDogc3RyaW5nLCByYW5nZTogc3RyaW5nW10pIHtcbiAgICByZXR1cm4gdGhpcy50b3RhbFRwbFxuICAgICAgPyB0aGlzLnRvdGFsVHBsXG4gICAgICAgICAgLnJlcGxhY2UoJ3t7dG90YWx9fScsIHRvdGFsKVxuICAgICAgICAgIC5yZXBsYWNlKCd7e3JhbmdlWzBdfX0nLCByYW5nZVswXSlcbiAgICAgICAgICAucmVwbGFjZSgne3tyYW5nZVsxXX19JywgcmFuZ2VbMV0pXG4gICAgICA6ICcnO1xuICB9XG5cbiAgaXNUcnVuY2F0ZShjb2x1bW46IFNUQ29sdW1uKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhY29sdW1uLndpZHRoICYmIHRoaXMud2lkdGhNb2RlLnN0cmljdEJlaGF2aW9yID09PSAndHJ1bmNhdGUnICYmIGNvbHVtbi50eXBlICE9PSAnaW1nJztcbiAgfVxuXG4gIGNvbHVtbkNsYXNzKGNvbHVtbjogU1RDb2x1bW4pOiBzdHJpbmcgfCBudWxsIHtcbiAgICByZXR1cm4gY29sdW1uLmNsYXNzTmFtZSB8fCAodGhpcy5pc1RydW5jYXRlKGNvbHVtbikgPyAndGV4dC10cnVuY2F0ZScgOiBudWxsKTtcbiAgfVxuXG4gIHByaXZhdGUgY2hhbmdlRW1pdCh0eXBlOiBTVENoYW5nZVR5cGUsIGRhdGE/OiBhbnkpIHtcbiAgICBjb25zdCByZXM6IFNUQ2hhbmdlID0ge1xuICAgICAgdHlwZSxcbiAgICAgIHBpOiB0aGlzLnBpLFxuICAgICAgcHM6IHRoaXMucHMsXG4gICAgICB0b3RhbDogdGhpcy50b3RhbCxcbiAgICB9O1xuICAgIGlmIChkYXRhICE9IG51bGwpIHtcbiAgICAgIHJlc1t0eXBlXSA9IGRhdGE7XG4gICAgfVxuICAgIHRoaXMuY2hhbmdlLmVtaXQocmVzKTtcbiAgfVxuXG4gIC8vICNyZWdpb24gZGF0YVxuXG4gIC8qKlxuICAgKiDojrflj5bov4fmu6TlkI7miYDmnInmlbDmja5cbiAgICogLSDmnKzlnLDmlbDmja7vvJrljIXlkKvmjpLluo/jgIHov4fmu6TlkI7kuI3liIbpobXmlbDmja5cbiAgICogLSDov5znqIvmlbDmja7vvJrkuI3kvKDpgJIgYHBpYOOAgWBwc2Ag5Lik5Liq5Y+C5pWwXG4gICAqL1xuICBnZXQgZmlsdGVyZWREYXRhKCk6IFByb21pc2U8U1REYXRhW10+IHtcbiAgICByZXR1cm4gdGhpcy5sb2FkRGF0YSh7IHBhZ2luYXRvcjogZmFsc2UgfSBhcyBhbnkpLnRoZW4ocmVzID0+IHJlcy5saXN0KTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0TG9hZGluZyh2YWw6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5sb2FkaW5nID09IG51bGwpIHtcbiAgICAgIHRoaXMuX2xvYWRpbmcgPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBsb2FkRGF0YShvcHRpb25zPzogU1REYXRhU291cmNlT3B0aW9ucyk6IFByb21pc2U8U1REYXRhU291cmNlUmVzdWx0PiB7XG4gICAgY29uc3QgeyBwaSwgcHMsIGRhdGEsIHJlcSwgcmVzLCBwYWdlLCB0b3RhbCwgc2luZ2xlU29ydCwgbXVsdGlTb3J0LCByb3dDbGFzc05hbWUgfSA9IHRoaXM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlUHJvbWlzZSwgcmVqZWN0UHJvbWlzZSkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuZGF0YVNvdXJjZVxuICAgICAgICAucHJvY2Vzcyh7XG4gICAgICAgICAgcGksXG4gICAgICAgICAgcHMsXG4gICAgICAgICAgdG90YWwsXG4gICAgICAgICAgZGF0YSxcbiAgICAgICAgICByZXEsXG4gICAgICAgICAgcmVzLFxuICAgICAgICAgIHBhZ2UsXG4gICAgICAgICAgY29sdW1uczogdGhpcy5fY29sdW1ucyxcbiAgICAgICAgICBzaW5nbGVTb3J0LFxuICAgICAgICAgIG11bHRpU29ydCxcbiAgICAgICAgICByb3dDbGFzc05hbWUsXG4gICAgICAgICAgcGFnaW5hdG9yOiB0cnVlLFxuICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgIH0pXG4gICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpXG4gICAgICAgIC5zdWJzY3JpYmUocmVzdWx0ID0+IHJlc29sdmVQcm9taXNlKHJlc3VsdCksIGVycm9yID0+IHJlamVjdFByb21pc2UoZXJyb3IpKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgbG9hZFBhZ2VEYXRhKCk6IFByb21pc2U8dGhpcz4ge1xuICAgIHRoaXMuc2V0TG9hZGluZyh0cnVlKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5sb2FkRGF0YSgpO1xuICAgICAgdGhpcy5zZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIGlmICh0eXBlb2YgcmVzdWx0LnBpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLnBpID0gcmVzdWx0LnBpO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiByZXN1bHQucHMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMucHMgPSByZXN1bHQucHM7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHJlc3VsdC50b3RhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy50b3RhbCA9IHJlc3VsdC50b3RhbDtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgcmVzdWx0LnBhZ2VTaG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLl9pc1BhZ2luYXRpb24gPSByZXN1bHQucGFnZVNob3c7XG4gICAgICB9XG4gICAgICB0aGlzLl9kYXRhID0gcmVzdWx0Lmxpc3QgYXMgU1REYXRhW107XG4gICAgICB0aGlzLl9zdGF0aXN0aWNhbCA9IHJlc3VsdC5zdGF0aXN0aWNhbCBhcyBTVFN0YXRpc3RpY2FsUmVzdWx0cztcbiAgICAgIHJldHVybiB0aGlzLl9yZWZDaGVjaygpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLnNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgdGhpcy5lcnJvci5lbWl0KHsgdHlwZTogJ3JlcScsIGVycm9yIH0pO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9XG5cbiAgLyoqIOa4heepuuaJgOacieaVsOaNriAqL1xuICBjbGVhcihjbGVhblN0YXR1cyA9IHRydWUpOiB0aGlzIHtcbiAgICBpZiAoY2xlYW5TdGF0dXMpIHtcbiAgICAgIHRoaXMuY2xlYXJTdGF0dXMoKTtcbiAgICB9XG4gICAgdGhpcy5fZGF0YSA9IFtdO1xuICAgIHJldHVybiB0aGlzLmNkKCk7XG4gIH1cblxuICAvKiog5riF56m65omA5pyJ54q25oCBICovXG4gIGNsZWFyU3RhdHVzKCk6IHRoaXMge1xuICAgIHJldHVybiB0aGlzLmNsZWFyQ2hlY2soKVxuICAgICAgLmNsZWFyUmFkaW8oKVxuICAgICAgLmNsZWFyRmlsdGVyKClcbiAgICAgIC5jbGVhclNvcnQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmoLnmja7pobXnoIHph43mlrDliqDovb3mlbDmja5cbiAgICpcbiAgICogQHBhcmFtIHBpIOaMh+WumuW9k+WJjemhteegge+8jOm7mOiupO+8mmAxYFxuICAgKiBAcGFyYW0gZXh0cmFQYXJhbXMg6YeN5paw5oyH5a6aIGBleHRyYVBhcmFtc2Ag5YC8XG4gICAqIEBwYXJhbSBvcHRpb25zIOmAiemhuVxuICAgKi9cbiAgbG9hZChwaSA9IDEsIGV4dHJhUGFyYW1zPzoge30sIG9wdGlvbnM/OiBTVExvYWRPcHRpb25zKSB7XG4gICAgaWYgKHBpICE9PSAtMSkgdGhpcy5waSA9IHBpO1xuICAgIGlmICh0eXBlb2YgZXh0cmFQYXJhbXMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLl9yZXEucGFyYW1zID0gb3B0aW9ucyAmJiBvcHRpb25zLm1lcmdlID8geyAuLi50aGlzLl9yZXEucGFyYW1zLCAuLi5leHRyYVBhcmFtcyB9IDogZXh0cmFQYXJhbXM7XG4gICAgfVxuICAgIHRoaXMuX2NoYW5nZSgncGknKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiDph43mlrDliLfmlrDlvZPliY3pobVcbiAgICogQHBhcmFtIGV4dHJhUGFyYW1zIOmHjeaWsOaMh+WumiBgZXh0cmFQYXJhbXNgIOWAvFxuICAgKi9cbiAgcmVsb2FkKGV4dHJhUGFyYW1zPzoge30sIG9wdGlvbnM/OiBTVExvYWRPcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMubG9hZCgtMSwgZXh0cmFQYXJhbXMsIG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIOmHjee9ruS4lOmHjeaWsOiuvue9riBgcGlgIOS4uiBgMWDvvIzljIXlkKvku6XkuIvlgLzvvJpcbiAgICogLSBgY2hlY2tgIOaVsOaNrlxuICAgKiAtIGByYWRpb2Ag5pWw5o2uXG4gICAqIC0gYHNvcnRgIOaVsOaNrlxuICAgKiAtIGBmaWxldGVyYCDmlbDmja5cbiAgICpcbiAgICogQHBhcmFtIGV4dHJhUGFyYW1zIOmHjeaWsOaMh+WumiBgZXh0cmFQYXJhbXNgIOWAvFxuICAgKi9cbiAgcmVzZXQoZXh0cmFQYXJhbXM/OiB7fSwgb3B0aW9ucz86IFNUTG9hZE9wdGlvbnMpIHtcbiAgICB0aGlzLmNsZWFyU3RhdHVzKCkubG9hZCgxLCBleHRyYVBhcmFtcywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcml2YXRlIF90b1RvcCgpIHtcbiAgICBpZiAoIXRoaXMucGFnZS50b1RvcCkgcmV0dXJuO1xuICAgIGNvbnN0IGVsID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgIGlmICh0aGlzLnNjcm9sbCkge1xuICAgICAgZWwucXVlcnlTZWxlY3RvcignLmFudC10YWJsZS1ib2R5JykhLnNjcm9sbFRvKDAsIDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbC5zY3JvbGxJbnRvVmlldygpO1xuICAgIC8vIGZpeCBoZWFkZXIgaGVpZ2h0XG4gICAgdGhpcy5kb2MuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCAtPSB0aGlzLnBhZ2UudG9Ub3BPZmZzZXQhO1xuICB9XG5cbiAgX2NoYW5nZSh0eXBlOiAncGknIHwgJ3BzJykge1xuICAgIGlmICh0eXBlID09PSAncGknIHx8ICh0eXBlID09PSAncHMnICYmIHRoaXMucGkgPD0gTWF0aC5jZWlsKHRoaXMudG90YWwgLyB0aGlzLnBzKSkpIHtcbiAgICAgIHRoaXMubG9hZFBhZ2VEYXRhKCkudGhlbigoKSA9PiB0aGlzLl90b1RvcCgpKTtcbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZUVtaXQodHlwZSk7XG4gIH1cblxuICBfY2xpY2soZTogRXZlbnQsIGl0ZW06IFNURGF0YSwgY29sOiBTVENvbHVtbikge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IHJlcyA9IGNvbC5jbGljayEoaXRlbSwgdGhpcyk7XG4gICAgaWYgKHR5cGVvZiByZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHJlcywgeyBzdGF0ZTogdGhpcy5yb3V0ZXJTdGF0ZSB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHByaXZhdGUgY2xvc2VPdGhlckV4cGFuZChpdGVtOiBTVERhdGEpIHtcbiAgICBpZiAodGhpcy5leHBhbmRBY2NvcmRpb24gPT09IGZhbHNlKSByZXR1cm47XG4gICAgdGhpcy5fZGF0YS5maWx0ZXIoaSA9PiBpICE9PSBpdGVtKS5mb3JFYWNoKGkgPT4gKGkuZXhwYW5kID0gZmFsc2UpKTtcbiAgfVxuICBfcm93Q2xpY2soZTogRXZlbnQsIGl0ZW06IFNURGF0YSwgaW5kZXg6IG51bWJlcikge1xuICAgIGlmICgoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLm5vZGVOYW1lID09PSAnSU5QVVQnKSByZXR1cm47XG4gICAgY29uc3QgeyBleHBhbmQsIGV4cGFuZFJvd0J5Q2xpY2ssIHJvd0NsaWNrVGltZSB9ID0gdGhpcztcbiAgICBpZiAoISFleHBhbmQgJiYgaXRlbS5zaG93RXhwYW5kICE9PSBmYWxzZSAmJiBleHBhbmRSb3dCeUNsaWNrKSB7XG4gICAgICBpdGVtLmV4cGFuZCA9ICFpdGVtLmV4cGFuZDtcbiAgICAgIHRoaXMuY2xvc2VPdGhlckV4cGFuZChpdGVtKTtcbiAgICAgIHRoaXMuY2hhbmdlRW1pdCgnZXhwYW5kJywgaXRlbSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgICsrdGhpcy5yb3dDbGlja0NvdW50O1xuICAgIGlmICh0aGlzLnJvd0NsaWNrQ291bnQgIT09IDEpIHJldHVybjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSB7IGUsIGl0ZW0sIGluZGV4IH07XG4gICAgICBpZiAodGhpcy5yb3dDbGlja0NvdW50ID09PSAxKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlRW1pdCgnY2xpY2snLCBkYXRhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2hhbmdlRW1pdCgnZGJsQ2xpY2snLCBkYXRhKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucm93Q2xpY2tDb3VudCA9IDA7XG4gICAgfSwgcm93Q2xpY2tUaW1lKTtcbiAgfVxuXG4gIF9leHBhbmRDaGFuZ2UoaXRlbTogU1REYXRhKTogdm9pZCB7XG4gICAgdGhpcy5jbG9zZU90aGVyRXhwYW5kKGl0ZW0pO1xuICAgIHRoaXMuY2hhbmdlRW1pdCgnZXhwYW5kJywgaXRlbSk7XG4gIH1cblxuICAvKiog56e76Zmk5p+Q6KGM5pWw5o2uICovXG4gIHJlbW92ZVJvdyhkYXRhOiBTVERhdGEgfCBTVERhdGFbXSkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgZGF0YSA9IFtkYXRhXTtcbiAgICB9XG5cbiAgICAoZGF0YSBhcyBTVERhdGFbXSlcbiAgICAgIC5tYXAoaXRlbSA9PiB0aGlzLl9kYXRhLmluZGV4T2YoaXRlbSkpXG4gICAgICAuZmlsdGVyKHBvcyA9PiBwb3MgIT09IC0xKVxuICAgICAgLmZvckVhY2gocG9zID0+IHRoaXMuX2RhdGEuc3BsaWNlKHBvcywgMSkpO1xuXG4gICAgLy8gcmVjYWxjdWxhdGUgbm9cbiAgICB0aGlzLl9jb2x1bW5zXG4gICAgICAuZmlsdGVyKHcgPT4gdy50eXBlID09PSAnbm8nKVxuICAgICAgLmZvckVhY2goYyA9PiB0aGlzLl9kYXRhLmZvckVhY2goKGksIGlkeCkgPT4gKGkuX3ZhbHVlc1tjLl9fcG9pbnRdID0geyB0ZXh0OiB0aGlzLmRhdGFTb3VyY2UuZ2V0Tm9JbmRleChpLCBjLCBpZHgpLCBvcmc6IGlkeCB9KSkpO1xuXG4gICAgcmV0dXJuIHRoaXMuY2QoKTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIHNvcnRcblxuICBzb3J0KGNvbDogU1RDb2x1bW4sIGlkeDogbnVtYmVyLCB2YWx1ZTogYW55KSB7XG4gICAgaWYgKHRoaXMubXVsdGlTb3J0KSB7XG4gICAgICBjb2wuX3NvcnQuZGVmYXVsdCA9IHZhbHVlO1xuICAgICAgY29sLl9zb3J0LnRpY2sgPSB0aGlzLmRhdGFTb3VyY2UubmV4dFNvcnRUaWNrO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9jb2x1bW5zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiAoaXRlbS5fc29ydC5kZWZhdWx0ID0gaW5kZXggPT09IGlkeCA/IHZhbHVlIDogbnVsbCkpO1xuICAgIH1cbiAgICB0aGlzLmxvYWRQYWdlRGF0YSgpO1xuICAgIGNvbnN0IHJlcyA9IHtcbiAgICAgIHZhbHVlLFxuICAgICAgbWFwOiB0aGlzLmRhdGFTb3VyY2UuZ2V0UmVxU29ydE1hcCh0aGlzLnNpbmdsZVNvcnQsIHRoaXMubXVsdGlTb3J0LCB0aGlzLl9jb2x1bW5zKSxcbiAgICAgIGNvbHVtbjogY29sLFxuICAgIH07XG4gICAgdGhpcy5jaGFuZ2VFbWl0KCdzb3J0JywgcmVzKTtcbiAgfVxuXG4gIGNsZWFyU29ydCgpIHtcbiAgICB0aGlzLl9jb2x1bW5zLmZvckVhY2goaXRlbSA9PiAoaXRlbS5fc29ydC5kZWZhdWx0ID0gbnVsbCkpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gZmlsdGVyXG5cbiAgcHJpdmF0ZSBoYW5kbGVGaWx0ZXIoY29sOiBTVENvbHVtbikge1xuICAgIHRoaXMuY29sdW1uU291cmNlLnVwZGF0ZURlZmF1bHQoY29sLmZpbHRlciEpO1xuICAgIHRoaXMubG9hZFBhZ2VEYXRhKCk7XG4gICAgdGhpcy5jaGFuZ2VFbWl0KCdmaWx0ZXInLCBjb2wpO1xuICB9XG5cbiAgX2ZpbHRlckNvbmZpcm0oY29sOiBTVENvbHVtbikge1xuICAgIHRoaXMuaGFuZGxlRmlsdGVyKGNvbCk7XG4gIH1cblxuICBfZmlsdGVyUmFkaW8oY29sOiBTVENvbHVtbiwgaXRlbTogU1RDb2x1bW5GaWx0ZXJNZW51LCBjaGVja2VkOiBib29sZWFuKSB7XG4gICAgY29sLmZpbHRlciEubWVudXMhLmZvckVhY2goaSA9PiAoaS5jaGVja2VkID0gZmFsc2UpKTtcbiAgICBpdGVtLmNoZWNrZWQgPSBjaGVja2VkO1xuICB9XG5cbiAgX2ZpbHRlckNsZWFyKGNvbDogU1RDb2x1bW4pIHtcbiAgICB0aGlzLmNvbHVtblNvdXJjZS5jbGVhbkZpbHRlcihjb2wpO1xuICAgIHRoaXMuaGFuZGxlRmlsdGVyKGNvbCk7XG4gIH1cblxuICBjbGVhckZpbHRlcigpIHtcbiAgICB0aGlzLl9jb2x1bW5zLmZpbHRlcih3ID0+IHcuZmlsdGVyICYmIHcuZmlsdGVyLmRlZmF1bHQgPT09IHRydWUpLmZvckVhY2goY29sID0+IHRoaXMuY29sdW1uU291cmNlLmNsZWFuRmlsdGVyKGNvbCkpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gY2hlY2tib3hcblxuICAvKiog5riF6Zmk5omA5pyJIGBjaGVja2JveGAgKi9cbiAgY2xlYXJDaGVjaygpOiB0aGlzIHtcbiAgICByZXR1cm4gdGhpcy5fY2hlY2tBbGwoZmFsc2UpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVmQ2hlY2soKTogdGhpcyB7XG4gICAgY29uc3QgdmFsaWREYXRhID0gdGhpcy5fZGF0YS5maWx0ZXIodyA9PiAhdy5kaXNhYmxlZCk7XG4gICAgY29uc3QgY2hlY2tlZExpc3QgPSB2YWxpZERhdGEuZmlsdGVyKHcgPT4gdy5jaGVja2VkID09PSB0cnVlKTtcbiAgICB0aGlzLl9hbGxDaGVja2VkID0gY2hlY2tlZExpc3QubGVuZ3RoID4gMCAmJiBjaGVja2VkTGlzdC5sZW5ndGggPT09IHZhbGlkRGF0YS5sZW5ndGg7XG4gICAgY29uc3QgYWxsVW5DaGVja2VkID0gdmFsaWREYXRhLmV2ZXJ5KHZhbHVlID0+ICF2YWx1ZS5jaGVja2VkKTtcbiAgICB0aGlzLl9pbmRldGVybWluYXRlID0gIXRoaXMuX2FsbENoZWNrZWQgJiYgIWFsbFVuQ2hlY2tlZDtcbiAgICB0aGlzLl9hbGxDaGVja2VkRGlzYWJsZWQgPSB0aGlzLl9kYXRhLmxlbmd0aCA9PT0gdGhpcy5fZGF0YS5maWx0ZXIodyA9PiB3LmRpc2FibGVkKS5sZW5ndGg7XG4gICAgcmV0dXJuIHRoaXMuY2QoKTtcbiAgfVxuXG4gIF9jaGVja0FsbChjaGVja2VkPzogYm9vbGVhbik6IHRoaXMge1xuICAgIGNoZWNrZWQgPSB0eXBlb2YgY2hlY2tlZCA9PT0gJ3VuZGVmaW5lZCcgPyB0aGlzLl9hbGxDaGVja2VkIDogY2hlY2tlZDtcbiAgICB0aGlzLl9kYXRhLmZpbHRlcih3ID0+ICF3LmRpc2FibGVkKS5mb3JFYWNoKGkgPT4gKGkuY2hlY2tlZCA9IGNoZWNrZWQpKTtcbiAgICByZXR1cm4gdGhpcy5fcmVmQ2hlY2soKS5fY2hlY2tOb3RpZnkoKTtcbiAgfVxuXG4gIF9jaGVja1NlbGVjdGlvbihpOiBTVERhdGEsIHZhbHVlOiBib29sZWFuKSB7XG4gICAgaS5jaGVja2VkID0gdmFsdWU7XG4gICAgcmV0dXJuIHRoaXMuX3JlZkNoZWNrKCkuX2NoZWNrTm90aWZ5KCk7XG4gIH1cblxuICBfcm93U2VsZWN0aW9uKHJvdzogU1RDb2x1bW5TZWxlY3Rpb24pOiB0aGlzIHtcbiAgICByb3cuc2VsZWN0KHRoaXMuX2RhdGEpO1xuICAgIHJldHVybiB0aGlzLl9yZWZDaGVjaygpLl9jaGVja05vdGlmeSgpO1xuICB9XG5cbiAgX2NoZWNrTm90aWZ5KCk6IHRoaXMge1xuICAgIGNvbnN0IHJlcyA9IHRoaXMuX2RhdGEuZmlsdGVyKHcgPT4gIXcuZGlzYWJsZWQgJiYgdy5jaGVja2VkID09PSB0cnVlKTtcbiAgICB0aGlzLmNoYW5nZUVtaXQoJ2NoZWNrYm94JywgcmVzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIHJhZGlvXG5cbiAgLyoqIOa4hemZpOaJgOaciSBgcmFkaW9gICovXG4gIGNsZWFyUmFkaW8oKTogdGhpcyB7XG4gICAgdGhpcy5fZGF0YS5maWx0ZXIodyA9PiB3LmNoZWNrZWQpLmZvckVhY2goaXRlbSA9PiAoaXRlbS5jaGVja2VkID0gZmFsc2UpKTtcbiAgICB0aGlzLmNoYW5nZUVtaXQoJ3JhZGlvJywgbnVsbCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBfcmVmUmFkaW8oY2hlY2tlZDogYm9vbGVhbiwgaXRlbTogU1REYXRhKTogdGhpcyB7XG4gICAgLy8gaWYgKGl0ZW0uZGlzYWJsZWQgPT09IHRydWUpIHJldHVybjtcbiAgICB0aGlzLl9kYXRhLmZpbHRlcih3ID0+ICF3LmRpc2FibGVkKS5mb3JFYWNoKGkgPT4gKGkuY2hlY2tlZCA9IGZhbHNlKSk7XG4gICAgaXRlbS5jaGVja2VkID0gY2hlY2tlZDtcbiAgICB0aGlzLmNoYW5nZUVtaXQoJ3JhZGlvJywgaXRlbSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiBidXR0b25zXG5cbiAgX2J0bkNsaWNrKHJlY29yZDogU1REYXRhLCBidG46IFNUQ29sdW1uQnV0dG9uKSB7XG4gICAgaWYgKGJ0bi50eXBlID09PSAnbW9kYWwnIHx8IGJ0bi50eXBlID09PSAnc3RhdGljJykge1xuICAgICAgY29uc3QgeyBtb2RhbCB9ID0gYnRuO1xuICAgICAgY29uc3Qgb2JqID0geyBbbW9kYWwhLnBhcmFtc05hbWUhXTogcmVjb3JkIH07XG4gICAgICAodGhpcy5tb2RhbEhlbHBlcltidG4udHlwZSA9PT0gJ21vZGFsJyA/ICdjcmVhdGUnIDogJ2NyZWF0ZVN0YXRpYyddIGFzIGFueSkoXG4gICAgICAgIG1vZGFsIS5jb21wb25lbnQsXG4gICAgICAgIHsgLi4ub2JqLCAuLi4obW9kYWwhLnBhcmFtcyAmJiBtb2RhbCEucGFyYW1zIShyZWNvcmQpKSB9LFxuICAgICAgICBkZWVwTWVyZ2VLZXkoe30sIHRydWUsIHRoaXMuY29weUNvZy5tb2RhbCwgbW9kYWwpLFxuICAgICAgKVxuICAgICAgICAucGlwZShmaWx0ZXIodyA9PiB0eXBlb2YgdyAhPT0gJ3VuZGVmaW5lZCcpKVxuICAgICAgICAuc3Vic2NyaWJlKHJlcyA9PiB0aGlzLmJ0bkNhbGxiYWNrKHJlY29yZCwgYnRuLCByZXMpKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKGJ0bi50eXBlID09PSAnZHJhd2VyJykge1xuICAgICAgY29uc3QgeyBkcmF3ZXIgfSA9IGJ0bjtcbiAgICAgIGNvbnN0IG9iaiA9IHsgW2RyYXdlciEucGFyYW1zTmFtZSFdOiByZWNvcmQgfTtcbiAgICAgIHRoaXMuZHJhd2VySGVscGVyXG4gICAgICAgIC5jcmVhdGUoXG4gICAgICAgICAgZHJhd2VyIS50aXRsZSEsXG4gICAgICAgICAgZHJhd2VyIS5jb21wb25lbnQsXG4gICAgICAgICAgeyAuLi5vYmosIC4uLihkcmF3ZXIhLnBhcmFtcyAmJiBkcmF3ZXIhLnBhcmFtcyEocmVjb3JkKSkgfSxcbiAgICAgICAgICBkZWVwTWVyZ2VLZXkoe30sIHRydWUsIHRoaXMuY29weUNvZy5kcmF3ZXIsIGRyYXdlciksXG4gICAgICAgIClcbiAgICAgICAgLnBpcGUoZmlsdGVyKHcgPT4gdHlwZW9mIHcgIT09ICd1bmRlZmluZWQnKSlcbiAgICAgICAgLnN1YnNjcmliZShyZXMgPT4gdGhpcy5idG5DYWxsYmFjayhyZWNvcmQsIGJ0biwgcmVzKSk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChidG4udHlwZSA9PT0gJ2xpbmsnKSB7XG4gICAgICBjb25zdCBjbGlja1JlcyA9IHRoaXMuYnRuQ2FsbGJhY2socmVjb3JkLCBidG4pO1xuICAgICAgaWYgKHR5cGVvZiBjbGlja1JlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChjbGlja1JlcywgeyBzdGF0ZTogdGhpcy5yb3V0ZXJTdGF0ZSB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5idG5DYWxsYmFjayhyZWNvcmQsIGJ0bik7XG4gIH1cblxuICBwcml2YXRlIGJ0bkNhbGxiYWNrKHJlY29yZDogU1REYXRhLCBidG46IFNUQ29sdW1uQnV0dG9uLCBtb2RhbD86IGFueSkge1xuICAgIGlmICghYnRuLmNsaWNrKSByZXR1cm47XG4gICAgaWYgKHR5cGVvZiBidG4uY2xpY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICBzd2l0Y2ggKGJ0bi5jbGljaykge1xuICAgICAgICBjYXNlICdsb2FkJzpcbiAgICAgICAgICB0aGlzLmxvYWQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncmVsb2FkJzpcbiAgICAgICAgICB0aGlzLnJlbG9hZCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYnRuLmNsaWNrKHJlY29yZCwgbW9kYWwsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIF9idG5UZXh0KHJlY29yZDogU1REYXRhLCBidG46IFNUQ29sdW1uQnV0dG9uKSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkZXByZWNhdGlvblxuICAgIGlmIChidG4uZm9ybWF0KSB7XG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGRlcHJlY2F0aW9uXG4gICAgICByZXR1cm4gYnRuLmZvcm1hdChyZWNvcmQsIGJ0bik7XG4gICAgfVxuICAgIHJldHVybiB0eXBlb2YgYnRuLnRleHQgPT09ICdmdW5jdGlvbicgPyBidG4udGV4dChyZWNvcmQsIGJ0bikgOiBidG4udGV4dCB8fCAnJztcbiAgfVxuXG4gIF92YWxpZEJ0bnMoYnRuczogU1RDb2x1bW5CdXR0b25bXSwgaXRlbTogU1REYXRhLCBjb2w6IFNUQ29sdW1uKTogU1RDb2x1bW5CdXR0b25bXSB7XG4gICAgcmV0dXJuIGJ0bnMuZmlsdGVyKGJ0biA9PiB7XG4gICAgICBjb25zdCByZXN1bHQgPSBidG4uaWlmIShpdGVtLCBidG4sIGNvbCk7XG4gICAgICBjb25zdCBpc1JlbmRlckRpc2FibGVkID0gYnRuLmlpZkJlaGF2aW9yID09PSAnZGlzYWJsZWQnO1xuICAgICAgYnRuLl9yZXN1bHQgPSByZXN1bHQ7XG4gICAgICBidG4uX2Rpc2FibGVkID0gIXJlc3VsdCAmJiBpc1JlbmRlckRpc2FibGVkO1xuICAgICAgcmV0dXJuIHJlc3VsdCB8fCBpc1JlbmRlckRpc2FibGVkO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gZXhwb3J0XG5cbiAgLyoqXG4gICAqIOWvvOWHuuW9k+WJjemhte+8jOehruS/neW3sue7j+azqOWGjCBgWGxzeE1vZHVsZWBcbiAgICogQHBhcmFtIG5ld0RhdGEg6YeN5paw5oyH5a6a5pWw5o2u77yb6Iul5Li6IGB0cnVlYCDooajnpLrkvb/nlKggYGZpbHRlcmVkRGF0YWAg5pWw5o2uXG4gICAqIEBwYXJhbSBvcHQg6aKd5aSW5Y+C5pWwXG4gICAqL1xuICBleHBvcnQobmV3RGF0YT86IFNURGF0YVtdIHwgdHJ1ZSwgb3B0PzogU1RFeHBvcnRPcHRpb25zKSB7XG4gICAgKG5ld0RhdGEgPT09IHRydWUgPyBmcm9tKHRoaXMuZmlsdGVyZWREYXRhKSA6IG9mKG5ld0RhdGEgfHwgdGhpcy5fZGF0YSkpLnN1YnNjcmliZSgocmVzOiBTVERhdGFbXSkgPT5cbiAgICAgIHRoaXMuZXhwb3J0U3J2LmV4cG9ydCh7XG4gICAgICAgIC4uLm9wdCxcbiAgICAgICAgX2Q6IHJlcyxcbiAgICAgICAgX2M6IHRoaXMuX2NvbHVtbnMsXG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGdldCBjZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMub3JnVGFibGUuY2RrVmlydHVhbFNjcm9sbFZpZXdwb3J0O1xuICB9XG5cbiAgcmVzZXRDb2x1bW5zKG9wdGlvbnM/OiBTVFJlc2V0Q29sdW1uc09wdGlvbik6IFByb21pc2U8dGhpcz4ge1xuICAgIG9wdGlvbnMgPSB7IGVtaXRSZWxvYWQ6IHRydWUsIC4uLm9wdGlvbnMgfTtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuY29sdW1ucyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMuY29sdW1ucyA9IG9wdGlvbnMuY29sdW1ucztcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLnBpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5waSA9IG9wdGlvbnMucGk7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5wcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucHMgPSBvcHRpb25zLnBzO1xuICAgIH1cbiAgICB0aGlzLnJlZnJlc2hDb2x1bW5zKCk7XG4gICAgaWYgKG9wdGlvbnMuZW1pdFJlbG9hZCA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMubG9hZFBhZ2VEYXRhKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2QoKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZWZyZXNoQ29sdW1ucygpOiB0aGlzIHtcbiAgICB0aGlzLl9jb2x1bW5zID0gdGhpcy5jb2x1bW5Tb3VyY2UucHJvY2Vzcyh0aGlzLmNvbHVtbnMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDbGFzcygpIHtcbiAgICBjb25zdCB7IHR5cGUsIHN0cmljdEJlaGF2aW9yIH0gPSB0aGlzLndpZHRoTW9kZTtcbiAgICB1cGRhdGVIb3N0Q2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLnJlbmRlcmVyLCB7XG4gICAgICBbYHN0YF06IHRydWUsXG4gICAgICBbYHN0X19wLSR7dGhpcy5wYWdlLnBsYWNlbWVudH1gXTogdGhpcy5wYWdlLnBsYWNlbWVudCxcbiAgICAgIFtgc3RfX3dpZHRoLSR7dHlwZX1gXTogdHJ1ZSxcbiAgICAgIFtgc3RfX3dpZHRoLXN0cmljdC0ke3N0cmljdEJlaGF2aW9yfWBdOiB0eXBlID09PSAnc3RyaWN0JyxcbiAgICAgIFtgYW50LXRhYmxlLXJlcGBdOiB0aGlzLnJlc3BvbnNpdmUsXG4gICAgICBbYGFudC10YWJsZS1yZXBfX2hpZGUtaGVhZGVyLWZvb3RlcmBdOiB0aGlzLnJlc3BvbnNpdmVIaWRlSGVhZGVyRm9vdGVyLFxuICAgIH0pO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuY29sdW1uU291cmNlLnJlc3RvcmVBbGxSZW5kZXIodGhpcy5fY29sdW1ucyk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtQIGluIGtleW9mIHRoaXNdPzogU2ltcGxlQ2hhbmdlIH0gJiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMuY29sdW1ucykge1xuICAgICAgdGhpcy5yZWZyZXNoQ29sdW1ucygpO1xuICAgIH1cbiAgICBjb25zdCBjaGFuZ2VEYXRhID0gY2hhbmdlcy5kYXRhO1xuICAgIGlmIChjaGFuZ2VEYXRhICYmIGNoYW5nZURhdGEuY3VycmVudFZhbHVlICYmICEodGhpcy5yZXEubGF6eUxvYWQgJiYgY2hhbmdlRGF0YS5maXJzdENoYW5nZSkpIHtcbiAgICAgIHRoaXMubG9hZFBhZ2VEYXRhKCk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLmxvYWRpbmcpIHtcbiAgICAgIHRoaXMuX2xvYWRpbmcgPSBjaGFuZ2VzLmxvYWRpbmcuY3VycmVudFZhbHVlO1xuICAgIH1cbiAgICB0aGlzLnNldENsYXNzKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBjb25zdCB7IHVuc3Vic2NyaWJlJCB9ID0gdGhpcztcbiAgICB1bnN1YnNjcmliZSQubmV4dCgpO1xuICAgIHVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=