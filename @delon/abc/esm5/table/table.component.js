/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DecimalPipe, DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Inject, Input, Optional, Output, Renderer2, TemplateRef, } from '@angular/core';
import { Router } from '@angular/router';
import { ALAIN_I18N_TOKEN, CNCurrencyPipe, DatePipe, DelonLocaleService, DrawerHelper, ModalHelper, YNPipe, } from '@delon/theme';
import { deepMerge, deepMergeKey, toBoolean, updateHostClass, InputBoolean, InputNumber } from '@delon/util';
import { of, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { STColumnSource } from './table-column-source';
import { STDataSource } from './table-data-source';
import { STExport } from './table-export';
import { STRowSource } from './table-row.directive';
import { STConfig } from './table.config';
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
            var item = deepMergeKey({}, true, this.cog.page, value);
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
        var _this = this;
        var _a, _b;
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
        (newData ? of(newData) : of(this._data)).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            return _this.exportSrv.export(tslib_1.__assign({}, opt, {
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
        { type: Component, args: [{
                    selector: 'st',
                    exportAs: 'st',
                    template: "<ng-template #btnTpl let-i let-btn=\"btn\" let-sub=\"sub\">\n  <nz-popconfirm *ngIf=\"btn.pop === true\" [nzTitle]=\"btn.popTitle\" (nzOnConfirm)=\"_btnClick(i, btn)\">\n    <a *ngIf=\"!sub\" nz-popconfirm>\n      <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n    </a>\n    <span *ngIf=\"sub\" nz-popconfirm>\n      <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n    </span>\n  </nz-popconfirm>\n  <ng-container *ngIf=\"btn.pop !== true\">\n    <a *ngIf=\"!sub\" (click)=\"_btnClick(i, btn)\">\n      <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n    </a>\n    <span *ngIf=\"sub\" (click)=\"_btnClick(i, btn)\">\n      <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n    </span>\n  </ng-container>\n</ng-template>\n<ng-template #btnTextTpl let-i let-btn=\"btn\">\n  <i *ngIf=\"btn.icon\" nz-icon [nzType]=\"btn.icon.type\" [nzTheme]=\"btn.icon.theme\" [nzSpin]=\"btn.icon.spin\"\n     [nzTwotoneColor]=\"btn.icon.twoToneColor\" [nzIconfont]=\"btn.icon.iconfont\"></i>\n  <span [innerHTML]=\"_btnText(i, btn)\" [ngClass]=\"{'pl-xs': btn.icon}\"></span>\n</ng-template>\n<nz-table [nzData]=\"_data\" [(nzPageIndex)]=\"pi\" (nzPageIndexChange)=\"_change('pi')\" [(nzPageSize)]=\"ps\"\n          (nzPageSizeChange)=\"_change('ps')\" [nzTotal]=\"total\" [nzShowPagination]=\"_isPagination\"\n          [nzFrontPagination]=\"false\" [nzBordered]=\"bordered\" [nzSize]=\"size\" [nzLoading]=\"_loading\"\n          [nzLoadingDelay]=\"loadingDelay\" [nzScroll]=\"scroll\" [nzTitle]=\"header\" [nzFooter]=\"footer\"\n          [nzNoResult]=\"noResult\" [nzPageSizeOptions]=\"page.pageSizes\" [nzShowQuickJumper]=\"page.showQuickJumper\"\n          [nzShowSizeChanger]=\"page.showSize\" [nzShowTotal]=\"totalTpl\">\n  <thead class=\"st__head\">\n    <tr>\n      <th *ngIf=\"expand\" [nzShowExpand]=\"expand\"></th>\n      <th *ngFor=\"let c of _columns; let index=index\" [nzWidth]=\"c.width\" [nzLeft]=\"c._left\"\n          [nzRight]=\"c._right\" [ngClass]=\"c.className\" [attr.colspan]=\"c.colSpan\" [attr.data-col]=\"c.indexKey\"\n          [nzShowSort]=\"c._sort.enabled\" [nzSort]=\"c._sort.default\" (nzSortChange)=\"sort(c, index, $event)\"\n          [nzCustomFilter]=\"c.filter\">\n        <ng-template #renderTitle [ngTemplateOutlet]=\"c.__renderTitle\" [ngTemplateOutletContext]=\"{$implicit: c, index: index }\"></ng-template>\n        <ng-container *ngIf=\"!c.__renderTitle; else renderTitle\">\n          <ng-container [ngSwitch]=\"c.type\">\n            <ng-container *ngSwitchCase=\"'checkbox'\">\n              <label nz-checkbox class=\"st__checkall\" [nzDisabled]=\"_allCheckedDisabled\"\n                     [(ngModel)]=\"_allChecked\" [nzIndeterminate]=\"_indeterminate\" (ngModelChange)=\"_checkAll()\"></label>\n              <nz-dropdown *ngIf=\"c.selections.length\" class=\"st__selection\">\n                <span nz-dropdown>\n                  <i nz-icon nzType=\"down\"></i>\n                </span>\n                <ul nz-menu>\n                  <li nz-menu-item *ngFor=\"let rw of c.selections\" (click)=\"_rowSelection(rw)\"\n                      [innerHTML]=\"rw.text\">\n                  </li>\n                </ul>\n              </nz-dropdown>\n            </ng-container>\n            <ng-container *ngSwitchDefault>\n              <span [innerHTML]=\"c.title\"></span>\n            </ng-container>\n          </ng-container>\n          <nz-dropdown *ngIf=\"c.filter\" class=\"st__filter\" nzTrigger=\"click\" nzTableFilter [hasFilterButton]=\"true\"\n                       [nzClickHide]=\"false\" [(nzVisible)]=\"c.filter.visible\">\n            <i nz-icon [nzType]=\"c.filter.icon\" nzTheme=\"fill\" [class.ant-table-filter-selected]=\"c.filter.default\"\n               [class.ant-table-filter-open]=\"c.filter.visible\" nz-dropdown></i>\n            <ul nz-menu>\n              <ng-container *ngIf=\"c.filter.multiple\">\n                <li nz-menu-item *ngFor=\"let filter of c.filter.menus\">\n                  <label nz-checkbox [(ngModel)]=\"filter.checked\">{{filter.text}}</label>\n                </li>\n              </ng-container>\n              <ng-container *ngIf=\"!c.filter.multiple\">\n                <li nz-menu-item *ngFor=\"let filter of c.filter.menus\">\n                  <label nz-radio [ngModel]=\"filter.checked\" (ngModelChange)=\"_filterRadio(c, filter, $event)\">{{filter.text}}</label>\n                </li>\n              </ng-container>\n            </ul>\n            <div class=\"ant-table-filter-dropdown-btns\">\n              <a class=\"ant-table-filter-dropdown-link confirm\" (click)=\"c.filter.visible = false\">\n                <span (click)=\"_filterConfirm(c)\">{{c.filter.confirmText}}</span>\n              </a>\n              <a class=\"ant-table-filter-dropdown-link clear\" (click)=\"c.filter.visible = false\">\n                <span (click)=\"_filterClear(c)\">{{c.filter.clearText}}</span>\n              </a>\n            </div>\n          </nz-dropdown>\n        </ng-container>\n      </th>\n    </tr>\n  </thead>\n  <tbody class=\"st__body\">\n    <ng-container *ngIf=\"!_loading\">\n      <ng-template [ngTemplateOutlet]=\"bodyHeader\" [ngTemplateOutletContext]=\"{$implicit: _statistical }\"></ng-template>\n    </ng-container>\n    <ng-container *ngFor=\"let i of _data; let index=index\">\n      <tr [attr.data-index]=\"index\" (click)=\"_rowClick($event, i, index)\" [class]=\"i._rowClassName\">\n        <td *ngIf=\"expand\" [nzShowExpand]=\"expand && i.showExpand !== false\" [(nzExpand)]=\"i.expand\" (nzExpandChange)=\"_expandChange(i)\"></td>\n        <td *ngFor=\"let c of _columns; let cIdx=index\" [nzLeft]=\"c._left\" [nzRight]=\"c._right\"\n            [nzCheckbox]=\"c.type === 'checkbox'\" [ngClass]=\"columnClass(c)\" [attr.colspan]=\"c.colSpan\">\n          <span class=\"ant-table-rep__title\" [innerHTML]=\"c.title\"></span>\n          <span>\n            <ng-template #render [ngTemplateOutlet]=\"c.__render\" [ngTemplateOutletContext]=\"{$implicit: i, index: index, column: c }\"></ng-template>\n            <ng-container *ngIf=\"!c.__render; else render\">\n              <ng-container [ngSwitch]=\"c.type\">\n                <label *ngSwitchCase=\"'checkbox'\" nz-checkbox [nzDisabled]=\"i.disabled\" [ngModel]=\"i.checked\"\n                       (ngModelChange)=\"_checkSelection(i, $event)\"></label>\n                <label *ngSwitchCase=\"'radio'\" nz-radio [nzDisabled]=\"i.disabled\" [ngModel]=\"i.checked\"\n                       (ngModelChange)=\"_refRadio($event, i)\"></label>\n                <a *ngSwitchCase=\"'link'\" (click)=\"_click($event, i, c)\" [innerHTML]=\"i._values[cIdx].text\"></a>\n                <nz-tag *ngSwitchCase=\"'tag'\" [nzColor]=\"c.tag[i._values[cIdx].text].color\">{{c.tag[i._values[cIdx].text].text\n                  || i._values[cIdx].text}}</nz-tag>\n                <nz-badge *ngSwitchCase=\"'badge'\" [nzStatus]=\"c.badge[i._values[cIdx].text].color\"\n                          [nzText]=\"c.badge[i._values[cIdx].text].text || i._values[cIdx].text\"></nz-badge>\n                <span *ngSwitchDefault [innerHTML]=\"i._values[cIdx].text\" [attr.title]=\"isTruncate(c) ? i._values[cIdx].text : null\"></span>\n              </ng-container>\n              <ng-container *ngFor=\"let btn of _validBtns(i, c); let last=last\">\n                <nz-dropdown *ngIf=\"btn.children.length > 0\">\n                  <a class=\"ant-dropdown-link\" nz-dropdown>\n                    <span [innerHTML]=\"_btnText(i, btn)\"></span>\n                    <i nz-icon nzType=\"down\"></i>\n                  </a>\n                  <ul nz-menu>\n                    <ng-container *ngFor=\"let subBtn of btn.children\">\n                      <li nz-menu-item *ngIf=\"subBtn.iif(i, subBtn, c)\">\n                        <ng-template [ngTemplateOutlet]=\"btnTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: subBtn, sub: true }\"></ng-template>\n                      </li>\n                    </ng-container>\n                  </ul>\n                </nz-dropdown>\n                <ng-container *ngIf=\"btn.children.length == 0\">\n                  <ng-template [ngTemplateOutlet]=\"btnTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn, sub: false }\"></ng-template>\n                </ng-container>\n                <nz-divider *ngIf=\"!last\" nzType=\"vertical\"></nz-divider>\n              </ng-container>\n              <ng-template [ngIf]=\"!c.__renderExpanded\" [ngTemplateOutlet]=\"c.__renderExpanded\"\n                           [ngTemplateOutletContext]=\"{$implicit: i, index: index, column: c }\"></ng-template>\n            </ng-container>\n          </span>\n        </td>\n      </tr>\n      <tr [nzExpand]=\"i.expand\">\n        <td></td>\n        <td [attr.colspan]=\"_columns.length\">\n          <ng-template [ngTemplateOutlet]=\"expand\" [ngTemplateOutletContext]=\"{$implicit: i, index: index }\"></ng-template>\n        </td>\n      </tr>\n    </ng-container>\n    <ng-container *ngIf=\"!_loading\">\n      <ng-template [ngTemplateOutlet]=\"body\" [ngTemplateOutletContext]=\"{$implicit: _statistical }\"></ng-template>\n    </ng-container>\n  </tbody>\n  <ng-template #totalTpl let-range=\"range\" let-total>{{ renderTotal(total, range) }}</ng-template>\n</nz-table>\n",
                    providers: [STDataSource, STRowSource, STColumnSource, STExport, CNCurrencyPipe, DatePipe, YNPipe, DecimalPipe],
                    changeDetection: ChangeDetectionStrategy.OnPush
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
        singleSort: [{ type: Input }],
        multiSort: [{ type: Input }],
        rowClassName: [{ type: Input }],
        widthMode: [{ type: Input }],
        header: [{ type: Input }],
        footer: [{ type: Input }],
        bodyHeader: [{ type: Input }],
        body: [{ type: Input }],
        expandRowByClick: [{ type: Input }],
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
    ], STComponent.prototype, "expandRowByClick", void 0);
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
    STComponent.prototype.locale;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy90YWJsZS8iLCJzb3VyY2VzIjpbInRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDeEQsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFHTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLFNBQVMsRUFHVCxXQUFXLEdBQ1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFFTCxnQkFBZ0IsRUFDaEIsY0FBYyxFQUNkLFFBQVEsRUFDUixrQkFBa0IsRUFDbEIsWUFBWSxFQUVaLFdBQVcsRUFDWCxNQUFNLEdBQ1AsTUFBTSxjQUFjLENBQUM7QUFDdEIsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzdHLE9BQU8sRUFBRSxFQUFFLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDMUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztB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QyxtQ0FBa0M7Ozs7O0lBQ2xDLDBCQUFrQzs7Ozs7SUFDbEMsbUNBQW9DOzs7OztJQUNwQyxpQ0FBZ0M7Ozs7O0lBQ2hDLGdDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERlY2ltYWxQaXBlLCBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2UsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBBbGFpbkkxOE5TZXJ2aWNlLFxuICBBTEFJTl9JMThOX1RPS0VOLFxuICBDTkN1cnJlbmN5UGlwZSxcbiAgRGF0ZVBpcGUsXG4gIERlbG9uTG9jYWxlU2VydmljZSxcbiAgRHJhd2VySGVscGVyLFxuICBMb2NhbGVEYXRhLFxuICBNb2RhbEhlbHBlcixcbiAgWU5QaXBlLFxufSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgZGVlcE1lcmdlLCBkZWVwTWVyZ2VLZXksIHRvQm9vbGVhbiwgdXBkYXRlSG9zdENsYXNzLCBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgb2YsIE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBTVENvbHVtblNvdXJjZSB9IGZyb20gJy4vdGFibGUtY29sdW1uLXNvdXJjZSc7XG5pbXBvcnQgeyBTVERhdGFTb3VyY2UgfSBmcm9tICcuL3RhYmxlLWRhdGEtc291cmNlJztcbmltcG9ydCB7IFNURXhwb3J0IH0gZnJvbSAnLi90YWJsZS1leHBvcnQnO1xuaW1wb3J0IHsgU1RSb3dTb3VyY2UgfSBmcm9tICcuL3RhYmxlLXJvdy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU1RDb25maWcgfSBmcm9tICcuL3RhYmxlLmNvbmZpZyc7XG5pbXBvcnQge1xuICBTVENoYW5nZSxcbiAgU1RDaGFuZ2VUeXBlLFxuICBTVENvbHVtbixcbiAgU1RDb2x1bW5CdXR0b24sXG4gIFNUQ29sdW1uRmlsdGVyTWVudSxcbiAgU1RDb2x1bW5TZWxlY3Rpb24sXG4gIFNURGF0YSxcbiAgU1RFcnJvcixcbiAgU1RFeHBvcnRPcHRpb25zLFxuICBTVExvYWRPcHRpb25zLFxuICBTVE11bHRpU29ydCxcbiAgU1RQYWdlLFxuICBTVFJlcSxcbiAgU1RSZXMsXG4gIFNUUm93Q2xhc3NOYW1lLFxuICBTVFNpbmdsZVNvcnQsXG4gIFNUU3RhdGlzdGljYWxSZXN1bHRzLFxuICBTVFdpZHRoTW9kZSxcbn0gZnJvbSAnLi90YWJsZS5pbnRlcmZhY2VzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3QnLFxuICBleHBvcnRBczogJ3N0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbU1REYXRhU291cmNlLCBTVFJvd1NvdXJjZSwgU1RDb2x1bW5Tb3VyY2UsIFNURXhwb3J0LCBDTkN1cnJlbmN5UGlwZSwgRGF0ZVBpcGUsIFlOUGlwZSwgRGVjaW1hbFBpcGVdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgU1RDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgdW5zdWJzY3JpYmUkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSB0b3RhbFRwbCA9IGBgO1xuICBwcml2YXRlIGxvY2FsZTogTG9jYWxlRGF0YSA9IHt9O1xuICBwcml2YXRlIGNsb25lUGFnZTogU1RQYWdlO1xuICBwcml2YXRlIGNvcHlDb2c6IFNUQ29uZmlnO1xuICBfZGF0YTogU1REYXRhW10gPSBbXTtcbiAgX3N0YXRpc3RpY2FsOiBTVFN0YXRpc3RpY2FsUmVzdWx0cyA9IHt9O1xuICBfaXNQYWdpbmF0aW9uID0gdHJ1ZTtcbiAgX2FsbENoZWNrZWQgPSBmYWxzZTtcbiAgX2FsbENoZWNrZWREaXNhYmxlZCA9IGZhbHNlO1xuICBfaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICBfY29sdW1uczogU1RDb2x1bW5bXSA9IFtdO1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KCkgZGF0YTogc3RyaW5nIHwgU1REYXRhW10gfCBPYnNlcnZhYmxlPFNURGF0YVtdPjtcbiAgLyoqIOivt+axguS9k+mFjee9riAqL1xuICBASW5wdXQoKVxuICBnZXQgcmVxKCkge1xuICAgIHJldHVybiB0aGlzLl9yZXE7XG4gIH1cbiAgc2V0IHJlcSh2YWx1ZTogU1RSZXEpIHtcbiAgICB0aGlzLl9yZXEgPSBkZWVwTWVyZ2Uoe30sIHRoaXMuX3JlcSwgdGhpcy5jb2cucmVxLCB2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfcmVxOiBTVFJlcTtcbiAgLyoqIOi/lOWbnuS9k+mFjee9riAqL1xuICBASW5wdXQoKVxuICBnZXQgcmVzKCkge1xuICAgIHJldHVybiB0aGlzLl9yZXM7XG4gIH1cbiAgc2V0IHJlcyh2YWx1ZTogU1RSZXMpIHtcbiAgICBjb25zdCBpdGVtID0gZGVlcE1lcmdlS2V5KHt9LCB0cnVlLCB0aGlzLmNvZy5yZXMsIHZhbHVlKTtcbiAgICBjb25zdCByZU5hbWUgPSBpdGVtLnJlTmFtZTtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkocmVOYW1lLmxpc3QpKSByZU5hbWUubGlzdCA9IHJlTmFtZS5saXN0LnNwbGl0KCcuJyk7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHJlTmFtZS50b3RhbCkpIHJlTmFtZS50b3RhbCA9IHJlTmFtZS50b3RhbC5zcGxpdCgnLicpO1xuICAgIHRoaXMuX3JlcyA9IGl0ZW07XG4gIH1cbiAgcHJpdmF0ZSBfcmVzOiBTVFJlcztcbiAgQElucHV0KCkgY29sdW1uczogU1RDb2x1bW5bXSA9IFtdO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBwcyA9IDEwO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBwaSA9IDE7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHRvdGFsID0gMDtcbiAgLyoqIOWIhumhteWZqOmFjee9riAqL1xuICBASW5wdXQoKVxuICBnZXQgcGFnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGFnZTtcbiAgfVxuICBzZXQgcGFnZSh2YWx1ZTogU1RQYWdlKSB7XG4gICAgdGhpcy5jbG9uZVBhZ2UgPSB2YWx1ZTtcbiAgICBjb25zdCBpdGVtID0gZGVlcE1lcmdlS2V5KHt9LCB0cnVlLCB0aGlzLmNvZy5wYWdlLCB2YWx1ZSk7XG4gICAgY29uc3QgeyB0b3RhbCB9ID0gaXRlbTtcbiAgICBpZiAodHlwZW9mIHRvdGFsID09PSAnc3RyaW5nJyAmJiB0b3RhbC5sZW5ndGgpIHtcbiAgICAgIHRoaXMudG90YWxUcGwgPSB0b3RhbDtcbiAgICB9IGVsc2UgaWYgKHRvQm9vbGVhbih0b3RhbCkpIHtcbiAgICAgIHRoaXMudG90YWxUcGwgPSB0aGlzLmxvY2FsZS50b3RhbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50b3RhbFRwbCA9ICcnO1xuICAgIH1cbiAgICB0aGlzLl9wYWdlID0gaXRlbTtcbiAgfVxuICBwcml2YXRlIF9wYWdlOiBTVFBhZ2U7XG4gIF9sb2FkaW5nID0gZmFsc2U7XG4gIC8qKiDmmK/lkKbmmL7npLpMb2FkaW5nICovXG4gIEBJbnB1dCgpIGxvYWRpbmc6IGJvb2xlYW4gfCBudWxsID0gbnVsbDtcbiAgLyoqIOW7tui/n+aYvuekuuWKoOi9veaViOaenOeahOaXtumXtO+8iOmYsuatoumXqueDge+8iSAqL1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBsb2FkaW5nRGVsYXkgPSAwO1xuICAvKiog5piv5ZCm5pi+56S66L655qGGICovXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBib3JkZXJlZCA9IGZhbHNlO1xuICAvKiogdGFibGXlpKflsI8gKi9cbiAgQElucHV0KCkgc2l6ZTogJ3NtYWxsJyB8ICdtaWRkbGUnIHwgJ2RlZmF1bHQnO1xuICAvKiog57q15ZCR5pSv5oyB5rua5Yqo77yM5Lmf5Y+v55So5LqO5oyH5a6a5rua5Yqo5Yy65Z+f55qE6auY5bqm77yaYHsgeTogJzMwMHB4JywgeDogJzMwMHB4JyB9YCAqL1xuICBASW5wdXQoKSBzY3JvbGw6IHsgeT86IHN0cmluZzsgeD86IHN0cmluZyB9O1xuICAvKipcbiAgICog5Y2V5o6S5bqP6KeE5YiZXG4gICAqIC0g6Iul5LiN5oyH5a6a77yM5YiZ6L+U5Zue77yaYGNvbHVtbk5hbWU9YXNjZW5kfGRlc2NlbmRgXG4gICAqIC0g6Iul5oyH5a6a77yM5YiZ6L+U5Zue77yaYHNvcnQ9Y29sdW1uTmFtZS4oYXNjZW5kfGRlc2NlbmQpYFxuICAgKi9cbiAgQElucHV0KCkgc2luZ2xlU29ydDogU1RTaW5nbGVTb3J0IHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgX211bHRpU29ydDogU1RNdWx0aVNvcnQgfCBudWxsO1xuICAvKiog5piv5ZCm5aSa5o6S5bqP77yM5b2TIGBzb3J0YCDlpJrkuKrnm7jlkIzlgLzml7boh6rliqjlkIjlubbvvIzlu7rorq7lkI7nq6/mlK/mjIHml7bkvb/nlKggKi9cbiAgQElucHV0KClcbiAgZ2V0IG11bHRpU29ydCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbXVsdGlTb3J0O1xuICB9XG4gIHNldCBtdWx0aVNvcnQodmFsdWU6IGFueSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJyAmJiAhdG9Cb29sZWFuKHZhbHVlKSkge1xuICAgICAgdGhpcy5fbXVsdGlTb3J0ID0gbnVsbDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fbXVsdGlTb3J0ID0ge1xuICAgICAgLi4uKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgPyB2YWx1ZSA6IHt9KSxcbiAgICB9O1xuICB9XG4gIEBJbnB1dCgpIHJvd0NsYXNzTmFtZTogU1RSb3dDbGFzc05hbWU7XG4gIEBJbnB1dCgpXG4gIHNldCB3aWR0aE1vZGUodmFsdWU6IFNUV2lkdGhNb2RlKSB7XG4gICAgdGhpcy5fd2lkdGhNb2RlID0geyB0eXBlOiAnZGVmYXVsdCcsIHN0cmljdEJlaGF2aW9yOiAndHJ1bmNhdGUnLCAuLi52YWx1ZSB9O1xuICB9XG4gIGdldCB3aWR0aE1vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dpZHRoTW9kZTtcbiAgfVxuICBwcml2YXRlIF93aWR0aE1vZGU6IFNUV2lkdGhNb2RlO1xuICAvKiogYGhlYWRlcmAg5qCH6aKYICovXG4gIEBJbnB1dCgpIGhlYWRlcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIC8qKiBgZm9vdGVyYCDlupXpg6ggKi9cbiAgQElucHV0KCkgZm9vdGVyOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgLyoqIOmineWkliBgYm9keWAg6aG26YOo5YaF5a65ICovXG4gIEBJbnB1dCgpIGJvZHlIZWFkZXI6IFRlbXBsYXRlUmVmPFNUU3RhdGlzdGljYWxSZXN1bHRzPjtcbiAgLyoqIOmineWkliBgYm9keWAg5YaF5a65ICovXG4gIEBJbnB1dCgpIGJvZHk6IFRlbXBsYXRlUmVmPFNUU3RhdGlzdGljYWxSZXN1bHRzPjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGV4cGFuZFJvd0J5Q2xpY2sgPSBmYWxzZTtcbiAgLyoqIGBleHBhbmRgIOWPr+WxleW8gO+8jOW9k+aVsOaNrua6kOS4reWMheaLrCBgZXhwYW5kYCDooajnpLrlsZXlvIDnirbmgIEgKi9cbiAgQElucHV0KCkgZXhwYW5kOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDoge307IGNvbHVtbjogU1RDb2x1bW4gfT47XG4gIEBJbnB1dCgpIG5vUmVzdWx0OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgd2lkdGhDb25maWc6IHN0cmluZ1tdO1xuICAvKiog6KGM5Y2V5Ye75aSa5bCR5pe26ZW/5LmL57G75Li65Y+M5Ye777yI5Y2V5L2N77ya5q+r56eS77yJ77yM6buY6K6k77yaYDIwMGAgKi9cbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgcm93Q2xpY2tUaW1lID0gMjAwO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgcmVzcG9uc2l2ZTogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSByZXNwb25zaXZlSGlkZUhlYWRlckZvb3RlcjogYm9vbGVhbjtcbiAgLyoqIOivt+axguW8guW4uOaXtuWbnuiwgyAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgZXJyb3IgPSBuZXcgRXZlbnRFbWl0dGVyPFNURXJyb3I+KCk7XG4gIC8qKlxuICAgKiDlj5jljJbml7blm57osIPvvIzljIXmi6zvvJpgcGlg44CBYHBzYOOAgWBjaGVja2JveGDjgIFgcmFkaW9g44CBYHNvcnRg44CBYGZpbHRlcmDjgIFgY2xpY2tg44CBYGRibENsaWNrYCDlj5jliqhcbiAgICovXG4gIEBPdXRwdXQoKSByZWFkb25seSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFNUQ2hhbmdlPigpO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KEFMQUlOX0kxOE5fVE9LRU4pIGkxOG5TcnY6IEFsYWluSTE4TlNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgY29nOiBTVENvbmZpZyxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgZXhwb3J0U3J2OiBTVEV4cG9ydCxcbiAgICBwcml2YXRlIG1vZGFsSGVscGVyOiBNb2RhbEhlbHBlcixcbiAgICBwcml2YXRlIGRyYXdlckhlbHBlcjogRHJhd2VySGVscGVyLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnksXG4gICAgcHJpdmF0ZSBjb2x1bW5Tb3VyY2U6IFNUQ29sdW1uU291cmNlLFxuICAgIHByaXZhdGUgZGF0YVNvdXJjZTogU1REYXRhU291cmNlLFxuICAgIHByaXZhdGUgZGVsb25JMThuOiBEZWxvbkxvY2FsZVNlcnZpY2UsXG4gICkge1xuICAgIHRoaXMuZGVsb25JMThuLmNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmxvY2FsZSA9IHRoaXMuZGVsb25JMThuLmdldERhdGEoJ3N0Jyk7XG4gICAgICBpZiAodGhpcy5fY29sdW1ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMucGFnZSA9IHRoaXMuY2xvbmVQYWdlO1xuICAgICAgICB0aGlzLmNkKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmNvcHlDb2cgPSBkZWVwTWVyZ2VLZXkobmV3IFNUQ29uZmlnKCksIHRydWUsIGNvZyk7XG4gICAgZGVsZXRlIHRoaXMuY29weUNvZy5tdWx0aVNvcnQ7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCB0aGlzLmNvcHlDb2cpO1xuICAgIGlmIChjb2cubXVsdGlTb3J0ICYmIGNvZy5tdWx0aVNvcnQuZ2xvYmFsICE9PSBmYWxzZSkge1xuICAgICAgdGhpcy5tdWx0aVNvcnQgPSB7IC4uLmNvZy5tdWx0aVNvcnQgfTtcbiAgICB9XG5cbiAgICBpMThuU3J2LmNoYW5nZVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCksXG4gICAgICAgIGZpbHRlcigoKSA9PiB0aGlzLl9jb2x1bW5zLmxlbmd0aCA+IDApLFxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLnJlZnJlc2hDb2x1bW5zKCkpO1xuICB9XG5cbiAgY2QoKSB7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVuZGVyVG90YWwodG90YWw6IHN0cmluZywgcmFuZ2U6IHN0cmluZ1tdKSB7XG4gICAgcmV0dXJuIHRoaXMudG90YWxUcGxcbiAgICAgID8gdGhpcy50b3RhbFRwbFxuICAgICAgICAgIC5yZXBsYWNlKCd7e3RvdGFsfX0nLCB0b3RhbClcbiAgICAgICAgICAucmVwbGFjZSgne3tyYW5nZVswXX19JywgcmFuZ2VbMF0pXG4gICAgICAgICAgLnJlcGxhY2UoJ3t7cmFuZ2VbMV19fScsIHJhbmdlWzFdKVxuICAgICAgOiAnJztcbiAgfVxuXG4gIGlzVHJ1bmNhdGUoY29sdW1uOiBTVENvbHVtbik6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIWNvbHVtbi53aWR0aCAmJiB0aGlzLndpZHRoTW9kZS5zdHJpY3RCZWhhdmlvciA9PT0gJ3RydW5jYXRlJztcbiAgfVxuXG4gIGNvbHVtbkNsYXNzKGNvbHVtbjogU1RDb2x1bW4pOiBzdHJpbmcgfCBudWxsIHtcbiAgICByZXR1cm4gY29sdW1uLmNsYXNzTmFtZSB8fCAodGhpcy5pc1RydW5jYXRlKGNvbHVtbikgPyAndGV4dC10cnVuY2F0ZScgOiBudWxsKTtcbiAgfVxuXG4gIHByaXZhdGUgY2hhbmdlRW1pdCh0eXBlOiBTVENoYW5nZVR5cGUsIGRhdGE/OiBhbnkpIHtcbiAgICBjb25zdCByZXM6IFNUQ2hhbmdlID0ge1xuICAgICAgdHlwZSxcbiAgICAgIHBpOiB0aGlzLnBpLFxuICAgICAgcHM6IHRoaXMucHMsXG4gICAgICB0b3RhbDogdGhpcy50b3RhbCxcbiAgICB9O1xuICAgIGlmIChkYXRhICE9IG51bGwpIHtcbiAgICAgIHJlc1t0eXBlXSA9IGRhdGE7XG4gICAgfVxuICAgIHRoaXMuY2hhbmdlLmVtaXQocmVzKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IHJvdXRlclN0YXRlKCkge1xuICAgIGNvbnN0IHsgcGksIHBzLCB0b3RhbCB9ID0gdGhpcztcbiAgICByZXR1cm4geyBwaSwgcHMsIHRvdGFsIH07XG4gIH1cblxuICAvLyAjcmVnaW9uIGRhdGFcblxuICBwcml2YXRlIHNldExvYWRpbmcodmFsOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubG9hZGluZyA9PSBudWxsKSB7XG4gICAgICB0aGlzLl9sb2FkaW5nID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2xvYWQoKTogUHJvbWlzZTx0aGlzPiB7XG4gICAgY29uc3QgeyBwaSwgcHMsIGRhdGEsIHJlcSwgcmVzLCBwYWdlLCB0b3RhbCwgc2luZ2xlU29ydCwgbXVsdGlTb3J0LCByb3dDbGFzc05hbWUgfSA9IHRoaXM7XG4gICAgdGhpcy5zZXRMb2FkaW5nKHRydWUpO1xuICAgIHJldHVybiB0aGlzLmRhdGFTb3VyY2VcbiAgICAgIC5wcm9jZXNzKHtcbiAgICAgICAgcGksXG4gICAgICAgIHBzLFxuICAgICAgICB0b3RhbCxcbiAgICAgICAgZGF0YSxcbiAgICAgICAgcmVxLFxuICAgICAgICByZXMsXG4gICAgICAgIHBhZ2UsXG4gICAgICAgIGNvbHVtbnM6IHRoaXMuX2NvbHVtbnMsXG4gICAgICAgIHNpbmdsZVNvcnQsXG4gICAgICAgIG11bHRpU29ydCxcbiAgICAgICAgcm93Q2xhc3NOYW1lLFxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgIHRoaXMuc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0LnBpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRoaXMucGkgPSByZXN1bHQucGk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQucHMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhpcy5wcyA9IHJlc3VsdC5wcztcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdC50b3RhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aGlzLnRvdGFsID0gcmVzdWx0LnRvdGFsO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0LnBhZ2VTaG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRoaXMuX2lzUGFnaW5hdGlvbiA9IHJlc3VsdC5wYWdlU2hvdztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9kYXRhID0gcmVzdWx0Lmxpc3QgYXMgU1REYXRhW107XG4gICAgICAgIHRoaXMuX3N0YXRpc3RpY2FsID0gcmVzdWx0LnN0YXRpc3RpY2FsIGFzIFNUU3RhdGlzdGljYWxSZXN1bHRzO1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgICAgIH0pXG4gICAgICAudGhlbigoKSA9PiB0aGlzLl9yZWZDaGVjaygpKVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgdGhpcy5zZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB0aGlzLmVycm9yLmVtaXQoeyB0eXBlOiAncmVxJywgZXJyb3IgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfSk7XG4gIH1cblxuICAvKiog5riF56m65omA5pyJ5pWw5o2uICovXG4gIGNsZWFyKGNsZWFuU3RhdHVzID0gdHJ1ZSk6IHRoaXMge1xuICAgIGlmIChjbGVhblN0YXR1cykge1xuICAgICAgdGhpcy5jbGVhclN0YXR1cygpO1xuICAgIH1cbiAgICB0aGlzLl9kYXRhID0gW107XG4gICAgcmV0dXJuIHRoaXMuY2QoKTtcbiAgfVxuXG4gIC8qKiDmuIXnqbrmiYDmnInnirbmgIEgKi9cbiAgY2xlYXJTdGF0dXMoKTogdGhpcyB7XG4gICAgcmV0dXJuIHRoaXMuY2xlYXJDaGVjaygpXG4gICAgICAuY2xlYXJSYWRpbygpXG4gICAgICAuY2xlYXJGaWx0ZXIoKVxuICAgICAgLmNsZWFyU29ydCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIOagueaNrumhteeggemHjeaWsOWKoOi9veaVsOaNrlxuICAgKlxuICAgKiBAcGFyYW0gcGkg5oyH5a6a5b2T5YmN6aG156CB77yM6buY6K6k77yaYDFgXG4gICAqIEBwYXJhbSBleHRyYVBhcmFtcyDph43mlrDmjIflrpogYGV4dHJhUGFyYW1zYCDlgLxcbiAgICogQHBhcmFtIG9wdGlvbnMg6YCJ6aG5XG4gICAqL1xuICBsb2FkKHBpID0gMSwgZXh0cmFQYXJhbXM/OiB7fSwgb3B0aW9ucz86IFNUTG9hZE9wdGlvbnMpIHtcbiAgICBpZiAocGkgIT09IC0xKSB0aGlzLnBpID0gcGk7XG4gICAgaWYgKHR5cGVvZiBleHRyYVBhcmFtcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMuX3JlcS5wYXJhbXMgPSBvcHRpb25zICYmIG9wdGlvbnMubWVyZ2UgPyB7IC4uLnRoaXMuX3JlcS5wYXJhbXMsIC4uLmV4dHJhUGFyYW1zIH0gOiBleHRyYVBhcmFtcztcbiAgICB9XG4gICAgdGhpcy5fY2hhbmdlKCdwaScpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIOmHjeaWsOWIt+aWsOW9k+WJjemhtVxuICAgKiBAcGFyYW0gZXh0cmFQYXJhbXMg6YeN5paw5oyH5a6aIGBleHRyYVBhcmFtc2Ag5YC8XG4gICAqL1xuICByZWxvYWQoZXh0cmFQYXJhbXM/OiB7fSwgb3B0aW9ucz86IFNUTG9hZE9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5sb2FkKC0xLCBleHRyYVBhcmFtcywgb3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICog6YeN572u5LiU6YeN5paw6K6+572uIGBwaWAg5Li6IGAxYO+8jOWMheWQq+S7peS4i+WAvO+8mlxuICAgKiAtIGBjaGVja2Ag5pWw5o2uXG4gICAqIC0gYHJhZGlvYCDmlbDmja5cbiAgICogLSBgc29ydGAg5pWw5o2uXG4gICAqIC0gYGZpbGV0ZXJgIOaVsOaNrlxuICAgKlxuICAgKiBAcGFyYW0gZXh0cmFQYXJhbXMg6YeN5paw5oyH5a6aIGBleHRyYVBhcmFtc2Ag5YC8XG4gICAqL1xuICByZXNldChleHRyYVBhcmFtcz86IHt9LCBvcHRpb25zPzogU1RMb2FkT3B0aW9ucykge1xuICAgIHRoaXMuY2xlYXJTdGF0dXMoKS5sb2FkKDEsIGV4dHJhUGFyYW1zLCBvcHRpb25zKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByaXZhdGUgX3RvVG9wKCkge1xuICAgIGlmICghdGhpcy5wYWdlLnRvVG9wKSByZXR1cm47XG4gICAgY29uc3QgZWwgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgaWYgKHRoaXMuc2Nyb2xsKSB7XG4gICAgICBlbC5xdWVyeVNlbGVjdG9yKCcuYW50LXRhYmxlLWJvZHknKSEuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgLy8gZml4IGhlYWRlciBoZWlnaHRcbiAgICB0aGlzLmRvYy5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIC09IHRoaXMucGFnZS50b1RvcE9mZnNldCE7XG4gIH1cblxuICBfY2hhbmdlKHR5cGU6ICdwaScgfCAncHMnKSB7XG4gICAgaWYgKHR5cGUgPT09ICdwaScpIHtcbiAgICAgIHRoaXMuX2xvYWQoKS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5fdG9Ub3AoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLmNoYW5nZUVtaXQodHlwZSk7XG4gIH1cblxuICBfY2xpY2soZTogRXZlbnQsIGl0ZW06IFNURGF0YSwgY29sOiBTVENvbHVtbikge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IHJlcyA9IGNvbC5jbGljayEoaXRlbSwgdGhpcyk7XG4gICAgaWYgKHR5cGVvZiByZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHJlcywgeyBzdGF0ZTogdGhpcy5yb3V0ZXJTdGF0ZSB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSByb3dDbGlja0NvdW50ID0gMDtcbiAgX3Jvd0NsaWNrKGU6IEV2ZW50LCBpdGVtOiBTVERhdGEsIGluZGV4OiBudW1iZXIpIHtcbiAgICBpZiAoKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5ub2RlTmFtZSA9PT0gJ0lOUFVUJykgcmV0dXJuO1xuICAgIGNvbnN0IHsgZXhwYW5kLCBleHBhbmRSb3dCeUNsaWNrLCByb3dDbGlja1RpbWUgfSA9IHRoaXM7XG4gICAgaWYgKCEhZXhwYW5kICYmIGl0ZW0uc2hvd0V4cGFuZCAhPT0gZmFsc2UgJiYgZXhwYW5kUm93QnlDbGljaykge1xuICAgICAgaXRlbS5leHBhbmQgPSAhaXRlbS5leHBhbmQ7XG4gICAgICB0aGlzLmNoYW5nZUVtaXQoJ2V4cGFuZCcsIGl0ZW0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICArK3RoaXMucm93Q2xpY2tDb3VudDtcbiAgICBpZiAodGhpcy5yb3dDbGlja0NvdW50ICE9PSAxKSByZXR1cm47XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBkYXRhID0geyBlLCBpdGVtLCBpbmRleCB9O1xuICAgICAgaWYgKHRoaXMucm93Q2xpY2tDb3VudCA9PT0gMSkge1xuICAgICAgICB0aGlzLmNoYW5nZUVtaXQoJ2NsaWNrJywgZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNoYW5nZUVtaXQoJ2RibENsaWNrJywgZGF0YSk7XG4gICAgICB9XG4gICAgICB0aGlzLnJvd0NsaWNrQ291bnQgPSAwO1xuICAgIH0sIHJvd0NsaWNrVGltZSk7XG4gIH1cblxuICBfZXhwYW5kQ2hhbmdlKGl0ZW06IFNURGF0YSk6IHZvaWQge1xuICAgIHRoaXMuY2hhbmdlRW1pdCgnZXhwYW5kJywgaXRlbSk7XG4gIH1cblxuICAvKiog56e76Zmk5p+Q6KGM5pWw5o2uICovXG4gIHJlbW92ZVJvdyhkYXRhOiBTVERhdGEgfCBTVERhdGFbXSkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgZGF0YSA9IFtkYXRhXTtcbiAgICB9XG5cbiAgICAoZGF0YSBhcyBTVERhdGFbXSlcbiAgICAgIC5tYXAoaXRlbSA9PiB0aGlzLl9kYXRhLmluZGV4T2YoaXRlbSkpXG4gICAgICAuZmlsdGVyKHBvcyA9PiBwb3MgIT09IC0xKVxuICAgICAgLmZvckVhY2gocG9zID0+IHRoaXMuX2RhdGEuc3BsaWNlKHBvcywgMSkpO1xuXG4gICAgLy8gcmVjYWxjdWxhdGUgbm9cbiAgICB0aGlzLl9jb2x1bW5zXG4gICAgICAuZmlsdGVyKHcgPT4gdy50eXBlID09PSAnbm8nKVxuICAgICAgLmZvckVhY2goYyA9PlxuICAgICAgICB0aGlzLl9kYXRhLmZvckVhY2goXG4gICAgICAgICAgKGksIGlkeCkgPT4gKGkuX3ZhbHVlc1tjLl9fcG9pbnRdID0geyB0ZXh0OiB0aGlzLmRhdGFTb3VyY2UuZ2V0Tm9JbmRleChpLCBjLCBpZHgpLCBvcmc6IGlkeCB9KSxcbiAgICAgICAgKSxcbiAgICAgICk7XG5cbiAgICByZXR1cm4gdGhpcy5jZCgpO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gc29ydFxuXG4gIHNvcnQoY29sOiBTVENvbHVtbiwgaWR4OiBudW1iZXIsIHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodGhpcy5tdWx0aVNvcnQpIHtcbiAgICAgIGNvbC5fc29ydC5kZWZhdWx0ID0gdmFsdWU7XG4gICAgICBjb2wuX3NvcnQudGljayA9IHRoaXMuZGF0YVNvdXJjZS5uZXh0U29ydFRpY2s7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NvbHVtbnMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IChpdGVtLl9zb3J0LmRlZmF1bHQgPSBpbmRleCA9PT0gaWR4ID8gdmFsdWUgOiBudWxsKSk7XG4gICAgfVxuICAgIHRoaXMuX2xvYWQoKTtcbiAgICBjb25zdCByZXMgPSB7XG4gICAgICB2YWx1ZSxcbiAgICAgIG1hcDogdGhpcy5kYXRhU291cmNlLmdldFJlcVNvcnRNYXAodGhpcy5zaW5nbGVTb3J0LCB0aGlzLm11bHRpU29ydCwgdGhpcy5fY29sdW1ucyksXG4gICAgICBjb2x1bW46IGNvbCxcbiAgICB9O1xuICAgIHRoaXMuY2hhbmdlRW1pdCgnc29ydCcsIHJlcyk7XG4gIH1cblxuICBjbGVhclNvcnQoKSB7XG4gICAgdGhpcy5fY29sdW1ucy5mb3JFYWNoKGl0ZW0gPT4gKGl0ZW0uX3NvcnQuZGVmYXVsdCA9IG51bGwpKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIGZpbHRlclxuXG4gIHByaXZhdGUgaGFuZGxlRmlsdGVyKGNvbDogU1RDb2x1bW4pIHtcbiAgICBjb2wuZmlsdGVyIS5kZWZhdWx0ID0gY29sLmZpbHRlciEubWVudXMuZmluZEluZGV4KHcgPT4gdy5jaGVja2VkISkgIT09IC0xO1xuICAgIHRoaXMuX2xvYWQoKTtcbiAgICB0aGlzLmNoYW5nZUVtaXQoJ2ZpbHRlcicsIGNvbCk7XG4gIH1cblxuICBfZmlsdGVyQ29uZmlybShjb2w6IFNUQ29sdW1uKSB7XG4gICAgdGhpcy5oYW5kbGVGaWx0ZXIoY29sKTtcbiAgfVxuXG4gIF9maWx0ZXJDbGVhcihjb2w6IFNUQ29sdW1uKSB7XG4gICAgY29sLmZpbHRlciEubWVudXMuZm9yRWFjaChpID0+IChpLmNoZWNrZWQgPSBmYWxzZSkpO1xuICAgIHRoaXMuaGFuZGxlRmlsdGVyKGNvbCk7XG4gIH1cblxuICBfZmlsdGVyUmFkaW8oY29sOiBTVENvbHVtbiwgaXRlbTogU1RDb2x1bW5GaWx0ZXJNZW51LCBjaGVja2VkOiBib29sZWFuKSB7XG4gICAgY29sLmZpbHRlciEubWVudXMuZm9yRWFjaChpID0+IChpLmNoZWNrZWQgPSBmYWxzZSkpO1xuICAgIGl0ZW0uY2hlY2tlZCA9IGNoZWNrZWQ7XG4gIH1cblxuICBjbGVhckZpbHRlcigpIHtcbiAgICB0aGlzLl9jb2x1bW5zXG4gICAgICAuZmlsdGVyKHcgPT4gdy5maWx0ZXIgJiYgdy5maWx0ZXIuZGVmYXVsdCA9PT0gdHJ1ZSlcbiAgICAgIC5mb3JFYWNoKGNvbCA9PiB7XG4gICAgICAgIGNvbC5maWx0ZXIhLmRlZmF1bHQgPSBmYWxzZTtcbiAgICAgICAgY29sLmZpbHRlciEubWVudXMuZm9yRWFjaChmID0+IChmLmNoZWNrZWQgPSBmYWxzZSkpO1xuICAgICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiBjaGVja2JveFxuXG4gIC8qKiDmuIXpmaTmiYDmnIkgYGNoZWNrYm94YCAqL1xuICBjbGVhckNoZWNrKCk6IHRoaXMge1xuICAgIHJldHVybiB0aGlzLl9jaGVja0FsbChmYWxzZSk7XG4gIH1cblxuICBwcml2YXRlIF9yZWZDaGVjaygpOiB0aGlzIHtcbiAgICBjb25zdCB2YWxpZERhdGEgPSB0aGlzLl9kYXRhLmZpbHRlcih3ID0+ICF3LmRpc2FibGVkKTtcbiAgICBjb25zdCBjaGVja2VkTGlzdCA9IHZhbGlkRGF0YS5maWx0ZXIodyA9PiB3LmNoZWNrZWQgPT09IHRydWUpO1xuICAgIHRoaXMuX2FsbENoZWNrZWQgPSBjaGVja2VkTGlzdC5sZW5ndGggPiAwICYmIGNoZWNrZWRMaXN0Lmxlbmd0aCA9PT0gdmFsaWREYXRhLmxlbmd0aDtcbiAgICBjb25zdCBhbGxVbkNoZWNrZWQgPSB2YWxpZERhdGEuZXZlcnkodmFsdWUgPT4gIXZhbHVlLmNoZWNrZWQpO1xuICAgIHRoaXMuX2luZGV0ZXJtaW5hdGUgPSAhdGhpcy5fYWxsQ2hlY2tlZCAmJiAhYWxsVW5DaGVja2VkO1xuICAgIHRoaXMuX2FsbENoZWNrZWREaXNhYmxlZCA9IHRoaXMuX2RhdGEubGVuZ3RoID09PSB0aGlzLl9kYXRhLmZpbHRlcih3ID0+IHcuZGlzYWJsZWQpLmxlbmd0aDtcbiAgICB0aGlzLmNkKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBfY2hlY2tBbGwoY2hlY2tlZD86IGJvb2xlYW4pOiB0aGlzIHtcbiAgICBjaGVja2VkID0gdHlwZW9mIGNoZWNrZWQgPT09ICd1bmRlZmluZWQnID8gdGhpcy5fYWxsQ2hlY2tlZCA6IGNoZWNrZWQ7XG4gICAgdGhpcy5fZGF0YS5maWx0ZXIodyA9PiAhdy5kaXNhYmxlZCkuZm9yRWFjaChpID0+IChpLmNoZWNrZWQgPSBjaGVja2VkKSk7XG4gICAgcmV0dXJuIHRoaXMuX3JlZkNoZWNrKCkuX2NoZWNrTm90aWZ5KCk7XG4gIH1cblxuICBfY2hlY2tTZWxlY3Rpb24oaTogU1REYXRhLCB2YWx1ZTogYm9vbGVhbikge1xuICAgIGkuY2hlY2tlZCA9IHZhbHVlO1xuICAgIHJldHVybiB0aGlzLl9yZWZDaGVjaygpLl9jaGVja05vdGlmeSgpO1xuICB9XG5cbiAgX3Jvd1NlbGVjdGlvbihyb3c6IFNUQ29sdW1uU2VsZWN0aW9uKTogdGhpcyB7XG4gICAgcm93LnNlbGVjdCh0aGlzLl9kYXRhKTtcbiAgICByZXR1cm4gdGhpcy5fcmVmQ2hlY2soKS5fY2hlY2tOb3RpZnkoKTtcbiAgfVxuXG4gIF9jaGVja05vdGlmeSgpOiB0aGlzIHtcbiAgICBjb25zdCByZXMgPSB0aGlzLl9kYXRhLmZpbHRlcih3ID0+ICF3LmRpc2FibGVkICYmIHcuY2hlY2tlZCA9PT0gdHJ1ZSk7XG4gICAgdGhpcy5jaGFuZ2VFbWl0KCdjaGVja2JveCcsIHJlcyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiByYWRpb1xuXG4gIC8qKiDmuIXpmaTmiYDmnIkgYHJhZGlvYCAqL1xuICBjbGVhclJhZGlvKCk6IHRoaXMge1xuICAgIHRoaXMuX2RhdGEuZmlsdGVyKHcgPT4gdy5jaGVja2VkKS5mb3JFYWNoKGl0ZW0gPT4gKGl0ZW0uY2hlY2tlZCA9IGZhbHNlKSk7XG4gICAgdGhpcy5jaGFuZ2VFbWl0KCdyYWRpbycsIG51bGwpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgX3JlZlJhZGlvKGNoZWNrZWQ6IGJvb2xlYW4sIGl0ZW06IFNURGF0YSk6IHRoaXMge1xuICAgIC8vIGlmIChpdGVtLmRpc2FibGVkID09PSB0cnVlKSByZXR1cm47XG4gICAgdGhpcy5fZGF0YS5maWx0ZXIodyA9PiAhdy5kaXNhYmxlZCkuZm9yRWFjaChpID0+IChpLmNoZWNrZWQgPSBmYWxzZSkpO1xuICAgIGl0ZW0uY2hlY2tlZCA9IGNoZWNrZWQ7XG4gICAgdGhpcy5jaGFuZ2VFbWl0KCdyYWRpbycsIGl0ZW0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gYnV0dG9uc1xuXG4gIF9idG5DbGljayhyZWNvcmQ6IFNURGF0YSwgYnRuOiBTVENvbHVtbkJ1dHRvbikge1xuICAgIGlmIChidG4udHlwZSA9PT0gJ21vZGFsJyB8fCBidG4udHlwZSA9PT0gJ3N0YXRpYycpIHtcbiAgICAgIGNvbnN0IHsgbW9kYWwgfSA9IGJ0bjtcbiAgICAgIGNvbnN0IG9iaiA9IHsgW21vZGFsIS5wYXJhbXNOYW1lIV06IHJlY29yZCB9O1xuICAgICAgKHRoaXMubW9kYWxIZWxwZXJbYnRuLnR5cGUgPT09ICdtb2RhbCcgPyAnY3JlYXRlJyA6ICdjcmVhdGVTdGF0aWMnXSBhcyBhbnkpKFxuICAgICAgICBtb2RhbCEuY29tcG9uZW50LFxuICAgICAgICB7IC4uLm9iaiwgLi4uKG1vZGFsIS5wYXJhbXMgJiYgbW9kYWwhLnBhcmFtcyEocmVjb3JkKSkgfSxcbiAgICAgICAgZGVlcE1lcmdlS2V5KHt9LCB0cnVlLCB0aGlzLmNvcHlDb2cubW9kYWwsIG1vZGFsKSxcbiAgICAgIClcbiAgICAgICAgLnBpcGUoZmlsdGVyKHcgPT4gdHlwZW9mIHcgIT09ICd1bmRlZmluZWQnKSlcbiAgICAgICAgLnN1YnNjcmliZShyZXMgPT4gdGhpcy5idG5DYWxsYmFjayhyZWNvcmQsIGJ0biwgcmVzKSk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChidG4udHlwZSA9PT0gJ2RyYXdlcicpIHtcbiAgICAgIGNvbnN0IHsgZHJhd2VyIH0gPSBidG47XG4gICAgICBjb25zdCBvYmogPSB7IFtkcmF3ZXIhLnBhcmFtc05hbWUhXTogcmVjb3JkIH07XG4gICAgICB0aGlzLmRyYXdlckhlbHBlclxuICAgICAgICAuY3JlYXRlKFxuICAgICAgICAgIGRyYXdlciEudGl0bGUhLFxuICAgICAgICAgIGRyYXdlciEuY29tcG9uZW50LFxuICAgICAgICAgIHsgLi4ub2JqLCAuLi4oZHJhd2VyIS5wYXJhbXMgJiYgZHJhd2VyIS5wYXJhbXMhKHJlY29yZCkpIH0sXG4gICAgICAgICAgZGVlcE1lcmdlS2V5KHt9LCB0cnVlLCB0aGlzLmNvcHlDb2cuZHJhd2VyLCBkcmF3ZXIpLFxuICAgICAgICApXG4gICAgICAgIC5waXBlKGZpbHRlcih3ID0+IHR5cGVvZiB3ICE9PSAndW5kZWZpbmVkJykpXG4gICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHRoaXMuYnRuQ2FsbGJhY2socmVjb3JkLCBidG4sIHJlcykpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoYnRuLnR5cGUgPT09ICdsaW5rJykge1xuICAgICAgY29uc3QgY2xpY2tSZXMgPSB0aGlzLmJ0bkNhbGxiYWNrKHJlY29yZCwgYnRuKTtcbiAgICAgIGlmICh0eXBlb2YgY2xpY2tSZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoY2xpY2tSZXMsIHsgc3RhdGU6IHRoaXMucm91dGVyU3RhdGUgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuYnRuQ2FsbGJhY2socmVjb3JkLCBidG4pO1xuICB9XG5cbiAgcHJpdmF0ZSBidG5DYWxsYmFjayhyZWNvcmQ6IFNURGF0YSwgYnRuOiBTVENvbHVtbkJ1dHRvbiwgbW9kYWw/OiBhbnkpIHtcbiAgICBpZiAoIWJ0bi5jbGljaykgcmV0dXJuO1xuICAgIGlmICh0eXBlb2YgYnRuLmNsaWNrID09PSAnc3RyaW5nJykge1xuICAgICAgc3dpdGNoIChidG4uY2xpY2spIHtcbiAgICAgICAgY2FzZSAnbG9hZCc6XG4gICAgICAgICAgdGhpcy5sb2FkKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3JlbG9hZCc6XG4gICAgICAgICAgdGhpcy5yZWxvYWQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGJ0bi5jbGljayhyZWNvcmQsIG1vZGFsLCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICBfYnRuVGV4dChyZWNvcmQ6IFNURGF0YSwgYnRuOiBTVENvbHVtbkJ1dHRvbikge1xuICAgIGlmIChidG4uZm9ybWF0KSByZXR1cm4gYnRuLmZvcm1hdChyZWNvcmQsIGJ0bik7XG4gICAgcmV0dXJuIGJ0bi50ZXh0IHx8ICcnO1xuICB9XG5cbiAgX3ZhbGlkQnRucyhpdGVtOiBTVERhdGEsIGNvbDogU1RDb2x1bW4pOiBTVENvbHVtbkJ1dHRvbltdIHtcbiAgICByZXR1cm4gY29sLmJ1dHRvbnMhLmZpbHRlcihidG4gPT4gYnRuLmlpZiEoaXRlbSwgYnRuLCBjb2wpKTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIGV4cG9ydFxuXG4gIC8qKlxuICAgKiDlr7zlh7rlvZPliY3pobXvvIznoa7kv53lt7Lnu4/ms6jlhowgYFhsc3hNb2R1bGVgXG4gICAqIEBwYXJhbSBuZXdEYXRhIOmHjeaWsOaMh+WumuaVsOaNru+8jOS+i+WmguW4jOacm+WvvOWHuuaJgOacieaVsOaNrumdnuW4uOacieeUqFxuICAgKiBAcGFyYW0gb3B0IOmineWkluWPguaVsFxuICAgKi9cbiAgZXhwb3J0KG5ld0RhdGE/OiBTVERhdGFbXSwgb3B0PzogU1RFeHBvcnRPcHRpb25zKSB7XG4gICAgKG5ld0RhdGEgPyBvZihuZXdEYXRhKSA6IG9mKHRoaXMuX2RhdGEpKS5zdWJzY3JpYmUoKHJlczogU1REYXRhW10pID0+XG4gICAgICB0aGlzLmV4cG9ydFNydi5leHBvcnQoe1xuICAgICAgICAuLi5vcHQsXG4gICAgICAgIC4uLntcbiAgICAgICAgICBfZDogcmVzLFxuICAgICAgICAgIF9jOiB0aGlzLl9jb2x1bW5zLFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICByZXNldENvbHVtbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVmcmVzaENvbHVtbnMoKS5fbG9hZCgpO1xuICB9XG5cbiAgcHJpdmF0ZSByZWZyZXNoQ29sdW1ucygpOiB0aGlzIHtcbiAgICB0aGlzLl9jb2x1bW5zID0gdGhpcy5jb2x1bW5Tb3VyY2UucHJvY2Vzcyh0aGlzLmNvbHVtbnMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDbGFzcygpIHtcbiAgICBjb25zdCB7IHR5cGUsIHN0cmljdEJlaGF2aW9yIH0gPSB0aGlzLndpZHRoTW9kZTtcbiAgICB1cGRhdGVIb3N0Q2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLnJlbmRlcmVyLCB7XG4gICAgICBbYHN0YF06IHRydWUsXG4gICAgICBbYHN0X19wLSR7dGhpcy5wYWdlLnBsYWNlbWVudH1gXTogdGhpcy5wYWdlLnBsYWNlbWVudCxcbiAgICAgIFtgc3RfX3dpZHRoLSR7dHlwZX1gXTogdHJ1ZSxcbiAgICAgIFtgc3RfX3dpZHRoLXN0cmljdC0ke3N0cmljdEJlaGF2aW9yfWBdOiB0eXBlID09PSAnc3RyaWN0JyxcbiAgICAgIFtgYW50LXRhYmxlLXJlcGBdOiB0aGlzLnJlc3BvbnNpdmUsXG4gICAgICBbYGFudC10YWJsZS1yZXBfX2hpZGUtaGVhZGVyLWZvb3RlcmBdOiB0aGlzLnJlc3BvbnNpdmVIaWRlSGVhZGVyRm9vdGVyLFxuICAgIH0pO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuY29sdW1uU291cmNlLnJlc3RvcmVBbGxSZW5kZXIodGhpcy5fY29sdW1ucyk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtQIGluIGtleW9mIHRoaXNdPzogU2ltcGxlQ2hhbmdlIH0gJiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMuY29sdW1ucykge1xuICAgICAgdGhpcy5yZWZyZXNoQ29sdW1ucygpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5kYXRhICYmIGNoYW5nZXMuZGF0YS5jdXJyZW50VmFsdWUpIHtcbiAgICAgIHRoaXMuX2xvYWQoKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMubG9hZGluZykge1xuICAgICAgdGhpcy5fbG9hZGluZyA9IGNoYW5nZXMubG9hZGluZy5jdXJyZW50VmFsdWU7XG4gICAgfVxuICAgIHRoaXMuc2V0Q2xhc3MoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgdW5zdWJzY3JpYmUkIH0gPSB0aGlzO1xuICAgIHVuc3Vic2NyaWJlJC5uZXh0KCk7XG4gICAgdW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==