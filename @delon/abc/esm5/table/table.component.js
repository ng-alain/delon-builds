/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DecimalPipe, DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Inject, Input, Optional, Output, Renderer2, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { ALAIN_I18N_TOKEN, CNCurrencyPipe, DatePipe, DelonLocaleService, DrawerHelper, ModalHelper, YNPipe } from '@delon/theme';
import { deepCopy, deepMerge, toBoolean, updateHostClass, InputBoolean, InputNumber } from '@delon/util';
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
        // tslint:disable-next-line:no-any
        this.locale = {};
        this._data = [];
        this._isPagination = true;
        this._allChecked = false;
        this._indeterminate = false;
        this._columns = [];
        this.columns = [];
        this.ps = 10;
        this.pi = 1;
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
        this.expandRowByClick = false;
        /**
         * 行单击多少时长之类为双击（单位：毫秒），默认：`200`
         */
        this.rowClickTime = 200;
        /**
         * 请求异常时回调
         */
        this.error = new EventEmitter();
        /**
         * 变化时回调，包括：`pi`、`ps`、`checkbox`、`radio`、`sort`、`filter`、`click`、`dblClick` 变动
         */
        this.change = new EventEmitter();
        this.rowClickCount = 0;
        /** @type {?} */
        var copyCog = tslib_1.__assign({}, cog);
        delete copyCog.multiSort;
        deepMerge(this, copyCog);
        if (cog.multiSort && cog.multiSort.global !== false) {
            this.multiSort = tslib_1.__assign({}, cog.multiSort);
        }
        this.delonI18n.change.pipe(takeUntil(this.unsubscribe$)).subscribe(function () {
            _this.locale = _this.delonI18n.getData('st');
            if (_this._columns.length > 0) {
                _this.page = _this.clonePage;
                _this.cd();
            }
        });
        i18nSrv.change
            .pipe(takeUntil(this.unsubscribe$), filter(function () { return _this._columns.length > 0; })).subscribe(function () { return _this.updateColumns(); });
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
            var item = tslib_1.__assign({}, req, value);
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
            var item = tslib_1.__assign({}, res, value);
            item.reName = tslib_1.__assign({}, res.reName, item.reName);
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
            var item = tslib_1.__assign({}, deepCopy(page), value);
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
        // tslint:disable-next-line:no-any
        set: 
        // tslint:disable-next-line:no-any
        /**
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
    /**
     * @return {?}
     */
    STComponent.prototype.cd = /**
     * @return {?}
     */
    function () {
        this.cdr.detectChanges();
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
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {?} type
     * @param {?=} data
     * @return {?}
     */
    STComponent.prototype.changeEmit = 
    // tslint:disable-next-line:no-any
    /**
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
    //#region data
    //#region data
    /**
     * @return {?}
     */
    STComponent.prototype._load = 
    //#region data
    /**
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
            rowClassName: rowClassName,
        })
            .then(function (result) {
            _this.loading = false;
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
        if (cleanStatus === void 0) { cleanStatus = true; }
        if (cleanStatus) {
            this.clearStatus();
        }
        this._data.length = 0;
        this.cd();
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
                    ? tslib_1.__assign({}, this._req.params, extraParams) : extraParams;
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
        var el = (/** @type {?} */ (this.el.nativeElement));
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
        if (((/** @type {?} */ (e.target))).nodeName === 'INPUT')
            return;
        var _a = this, expand = _a.expand, expandRowByClick = _a.expandRowByClick, rowClickTime = _a.rowClickTime;
        if (!!expand && expandRowByClick) {
            item.expand = !item.expand;
            return;
        }
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
        }, rowClickTime);
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
        ((/** @type {?} */ (data))).map(function (item) { return _this._data.indexOf(item); })
            .filter(function (pos) { return pos !== -1; })
            .forEach(function (pos) { return _this._data.splice(pos, 1); });
        // recalculate no
        this._columns
            .filter(function (w) { return w.type === 'no'; })
            .forEach(function (c) { return _this._data.forEach(function (i, idx) { return i._values[c.__point] = c.noIndex + idx; }); });
        this.cd();
    };
    //#endregion
    //#region sort
    // tslint:disable-next-line:no-any
    //#endregion
    //#region sort
    // tslint:disable-next-line:no-any
    /**
     * @param {?} col
     * @param {?} idx
     * @param {?} value
     * @return {?}
     */
    STComponent.prototype.sort = 
    //#endregion
    //#region sort
    // tslint:disable-next-line:no-any
    /**
     * @param {?} col
     * @param {?} idx
     * @param {?} value
     * @return {?}
     */
    function (col, idx, value) {
        if (this.multiSort) {
            col._sort.default = value;
        }
        else {
            this._columns.forEach(function (item, index) { return (item._sort.default = index === idx ? value : null); });
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
        (/** @type {?} */ (this))._columns.forEach(function (item) { return (item._sort.default = null); });
        return (/** @type {?} */ (this));
    };
    //#endregion
    //#region filter
    //#endregion
    //#region filter
    /**
     * @param {?} col
     * @return {?}
     */
    STComponent.prototype.handleFilter = 
    //#endregion
    //#region filter
    /**
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
            .filter(function (w) { return w.filter && w.filter.default === true; })
            .forEach(function (col) {
            col.filter.default = false;
            col.filter.menus.forEach(function (f) { return (f.checked = false); });
        });
        return (/** @type {?} */ (this));
    };
    //#endregion
    //#region checkbox
    /** 清除所有 `checkbox` */
    //#endregion
    //#region checkbox
    /**
     * 清除所有 `checkbox`
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    STComponent.prototype.clearCheck = 
    //#endregion
    //#region checkbox
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
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    STComponent.prototype._refCheck = /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    function () {
        /** @type {?} */
        var validData = (/** @type {?} */ (this))._data.filter(function (w) { return !w.disabled; });
        /** @type {?} */
        var checkedList = validData.filter(function (w) { return w.checked === true; });
        (/** @type {?} */ (this))._allChecked = checkedList.length > 0 && checkedList.length === validData.length;
        /** @type {?} */
        var allUnChecked = validData.every(function (value) { return !value.checked; });
        (/** @type {?} */ (this))._indeterminate = !(/** @type {?} */ (this))._allChecked && !allUnChecked;
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
        (/** @type {?} */ (this))._data.filter(function (w) { return !w.disabled; }).forEach(function (i) { return (i.checked = checked); });
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
        var res = (/** @type {?} */ (this))._data.filter(function (w) { return !w.disabled && w.checked === true; });
        (/** @type {?} */ (this)).changeEmit('checkbox', res);
        return (/** @type {?} */ (this));
    };
    //#endregion
    //#region radio
    /** 清除所有 `radio` */
    //#endregion
    //#region radio
    /**
     * 清除所有 `radio`
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    STComponent.prototype.clearRadio = 
    //#endregion
    //#region radio
    /**
     * 清除所有 `radio`
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    function () {
        (/** @type {?} */ (this))._data.filter(function (w) { return w.checked; }).forEach(function (item) { return (item.checked = false); });
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
        (/** @type {?} */ (this))._data.filter(function (w) { return !w.disabled; }).forEach(function (i) { return (i.checked = false); });
        item.checked = checked;
        (/** @type {?} */ (this)).changeEmit('radio', item);
        return (/** @type {?} */ (this));
    };
    //#endregion
    //#region buttons
    //#endregion
    //#region buttons
    /**
     * @param {?} e
     * @param {?} record
     * @param {?} btn
     * @return {?}
     */
    STComponent.prototype._btnClick = 
    //#endregion
    //#region buttons
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
            var obj = (_a = {}, _a[modal.paramsName] = record, _a);
            // tslint:disable-next-line:no-any
            ((/** @type {?} */ (this.modalHelper[btn.type === 'modal' ? 'create' : 'createStatic'])))(modal.component, tslib_1.__assign({}, obj, (modal.params && modal.params(record))), tslib_1.__assign({}, modal))
                .pipe(filter(function (w) { return typeof w !== 'undefined'; }))
                .subscribe(function (res) { return _this.btnCallback(record, btn, res); });
            return;
        }
        else if (btn.type === 'drawer') {
            var drawer = btn.drawer;
            /** @type {?} */
            var obj = (_b = {}, _b[drawer.paramsName] = record, _b);
            this.drawerHelper
                .create(drawer.title, drawer.component, tslib_1.__assign({}, obj, (drawer.params && drawer.params(record))), tslib_1.__assign({}, drawer))
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
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @param {?} record
     * @param {?} btn
     * @param {?=} modal
     * @return {?}
     */
    STComponent.prototype.btnCallback = 
    // tslint:disable-next-line:no-any
    /**
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
    //#endregion
    //#region export
    /**
     * 导出当前页，确保已经注册 `XlsxModule`
     * @param {?=} newData 重新指定数据，例如希望导出所有数据非常有用
     * @param {?=} opt 额外参数
     * @return {?}
     */
    STComponent.prototype.export = 
    //#endregion
    //#region export
    /**
     * 导出当前页，确保已经注册 `XlsxModule`
     * @param {?=} newData 重新指定数据，例如希望导出所有数据非常有用
     * @param {?=} opt 额外参数
     * @return {?}
     */
    function (newData, opt) {
        var _this = this;
        (newData ? of(newData) : of(this._data)).subscribe(function (res) {
            return _this.exportSrv.export(tslib_1.__assign({}, opt, {
                _d: res,
                _c: _this._columns,
            }));
        });
    };
    //#endregion
    //#endregion
    /**
     * @return {?}
     */
    STComponent.prototype.updateColumns = 
    //#endregion
    /**
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
        var unsubscribe$ = this.unsubscribe$;
        unsubscribe$.next();
        unsubscribe$.complete();
    };
    STComponent.decorators = [
        { type: Component, args: [{
                    selector: 'st',
                    template: "<ng-template #btnTpl let-i let-btn=\"btn\" let-sub=\"sub\">\n  <nz-popconfirm *ngIf=\"btn.pop === true\" [nzTitle]=\"btn.popTitle\" (nzOnConfirm)=\"_btnClick($event, i, btn)\">\n    <a *ngIf=\"!sub\" nz-popconfirm>\n      <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n    </a>\n    <span *ngIf=\"sub\" nz-popconfirm>\n      <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n    </span>\n  </nz-popconfirm>\n  <ng-container *ngIf=\"btn.pop !== true\">\n    <a *ngIf=\"!sub\" (click)=\"_btnClick($event, i, btn)\">\n      <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n    </a>\n    <span *ngIf=\"sub\" (click)=\"_btnClick($event, i, btn)\">\n      <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n    </span>\n  </ng-container>\n</ng-template>\n<ng-template #btnTextTpl let-i let-btn=\"btn\">\n  <i *ngIf=\"btn.icon\" nz-icon [type]=\"btn.icon.type\" [theme]=\"btn.icon.theme\" [spin]=\"btn.icon.spin\" [twoToneColor]=\"btn.icon.twoToneColor\" [iconfont]=\"btn.icon.iconfont\"></i>\n  <span [innerHTML]=\"_btnText(i, btn)\" [ngClass]=\"{'pl-xs': btn.icon}\"></span>\n</ng-template>\n<nz-table [nzData]=\"_data\"\n  [(nzPageIndex)]=\"pi\" (nzPageIndexChange)=\"_change('pi')\"\n  [(nzPageSize)]=\"ps\" (nzPageSizeChange)=\"_change('ps')\"\n  [nzTotal]=\"total\"\n  [nzShowPagination]=\"_isPagination\"\n  [nzFrontPagination]=\"false\"\n  [nzBordered]=\"bordered\"\n  [nzSize]=\"size\"\n  [nzLoading]=\"loading\"\n  [nzLoadingDelay]=\"loadingDelay\"\n  [nzScroll]=\"scroll\"\n  [nzTitle]=\"header\" [nzFooter]=\"footer\" [nzNoResult]=\"noResult\"\n  [nzPageSizeOptions]=\"page.pageSizes\"\n  [nzShowQuickJumper]=\"page.showQuickJumper\"\n  [nzShowSizeChanger]=\"page.showSize\"\n  [nzShowTotal]=\"totalTpl\">\n  <thead class=\"st__head\">\n    <tr>\n      <th *ngIf=\"expand\" [nzShowExpand]=\"expand\"></th>\n      <th *ngFor=\"let c of _columns; let index=index\" [nzWidth]=\"c.width\" [nzLeft]=\"c._left\" [nzRight]=\"c._right\" [ngClass]=\"c.className\"\n        [attr.colspan]=\"c.colSpan\" [attr.data-col]=\"c.indexKey\"\n        [nzShowSort]=\"c._sort.enabled\" [nzSort]=\"c._sort.default\" (nzSortChange)=\"sort(c, index, $event)\"\n        [nzCustomFilter]=\"c.filter\">\n        <ng-template #renderTitle [ngTemplateOutlet]=\"c.__renderTitle\" [ngTemplateOutletContext]=\"{$implicit: c, index: index }\"></ng-template>\n        <ng-container *ngIf=\"!c.__renderTitle; else renderTitle\">\n          <ng-container [ngSwitch]=\"c.type\">\n            <ng-container *ngSwitchCase=\"'checkbox'\">\n              <label nz-checkbox class=\"st__checkall\" [(ngModel)]=\"_allChecked\" [nzIndeterminate]=\"_indeterminate\" (ngModelChange)=\"_checkAll()\"></label>\n              <nz-dropdown *ngIf=\"c.selections.length\" class=\"st__selection\">\n                <span nz-dropdown>\n                  <i nz-icon type=\"down\"></i>\n                </span>\n                <ul nz-menu>\n                  <li nz-menu-item *ngFor=\"let rw of c.selections\" (click)=\"_rowSelection(rw)\" [innerHTML]=\"rw.text\">\n                  </li>\n                </ul>\n              </nz-dropdown>\n            </ng-container>\n            <ng-container *ngSwitchDefault>\n              <span [innerHTML]=\"c.title\"></span>\n            </ng-container>\n          </ng-container>\n          <nz-dropdown *ngIf=\"c.filter\"\n            class=\"st__filter\" nzTrigger=\"click\" [hasFilterButton]=\"true\" [nzClickHide]=\"false\"\n            [(nzVisible)]=\"c.filter.visible\">\n            <i nz-icon [type]=\"c.filter.icon\" theme=\"fill\"\n              [class.ant-table-filter-selected]=\"c.filter.default\"\n              [class.ant-table-filter-open]=\"c.filter.visible\" nz-dropdown></i>\n            <ul nz-menu>\n              <ng-container *ngIf=\"c.filter.multiple\">\n                <li nz-menu-item *ngFor=\"let filter of c.filter.menus\">\n                  <label nz-checkbox [(ngModel)]=\"filter.checked\">{{filter.text}}</label>\n                </li>\n              </ng-container>\n              <ng-container *ngIf=\"!c.filter.multiple\">\n                <li nz-menu-item *ngFor=\"let filter of c.filter.menus\">\n                  <label nz-radio [ngModel]=\"filter.checked\" (ngModelChange)=\"_filterRadio(c, filter, $event)\">{{filter.text}}</label>\n                </li>\n              </ng-container>\n            </ul>\n            <div class=\"ant-table-filter-dropdown-btns\">\n              <a class=\"ant-table-filter-dropdown-link confirm\" (click)=\"c.filter.visible = false\">\n                <span (click)=\"_filterConfirm(c)\">{{c.filter.confirmText}}</span>\n              </a>\n              <a class=\"ant-table-filter-dropdown-link clear\" (click)=\"c.filter.visible = false\">\n                <span (click)=\"_filterClear(c)\">{{c.filter.clearText}}</span>\n              </a>\n            </div>\n          </nz-dropdown>\n        </ng-container>\n      </th>\n    </tr>\n  </thead>\n  <tbody class=\"st__body\">\n    <ng-container *ngFor=\"let i of _data; let index=index\">\n      <tr [attr.data-index]=\"index\" (click)=\"_rowClick($event, i, index)\" [class]=\"i._rowClassName\">\n        <td *ngIf=\"expand\" [nzShowExpand]=\"expand\" [(nzExpand)]=\"i.expand\"></td>\n        <td *ngFor=\"let c of _columns; let cIdx=index\" [nzLeft]=\"c._left\" [nzRight]=\"c._right\" [nzCheckbox]=\"c.type === 'checkbox'\" [ngClass]=\"c.className\"\n          [attr.colspan]=\"c.colSpan\">\n          <span class=\"ant-table-rep__title\" [innerHTML]=\"c.title\"></span>\n          <span>\n            <ng-template #render [ngTemplateOutlet]=\"c.__render\" [ngTemplateOutletContext]=\"{$implicit: i, index: index, column: c }\"></ng-template>\n            <ng-container *ngIf=\"!c.__render; else render\">\n              <ng-container [ngSwitch]=\"c.type\">\n                <label *ngSwitchCase=\"'checkbox'\" nz-checkbox [nzDisabled]=\"i.disabled\" [ngModel]=\"i.checked\" (ngModelChange)=\"_checkSelection(i, $event)\"></label>\n                <label *ngSwitchCase=\"'radio'\" nz-radio [nzDisabled]=\"i.disabled\" [ngModel]=\"i.checked\" (ngModelChange)=\"_refRadio($event, i)\"></label>\n                <a *ngSwitchCase=\"'link'\" (click)=\"_click($event, i, c)\" [innerHTML]=\"i._values[cIdx]\"></a>\n                <nz-tag *ngSwitchCase=\"'tag'\" [nzColor]=\"c.tag[i._values[cIdx]].color\">{{c.tag[i._values[cIdx]].text || i._values[cIdx]}}</nz-tag>\n                <nz-badge *ngSwitchCase=\"'badge'\" [nzStatus]=\"c.badge[i._values[cIdx]].color\" [nzText]=\"c.badge[i._values[cIdx]].text || i._values[cIdx]\"></nz-badge>\n                <span *ngSwitchDefault [innerHTML]=\"i._values[cIdx]\"></span>\n              </ng-container>\n              <ng-container *ngFor=\"let btn of _validBtns(i, c); let last=last\">\n                <nz-dropdown *ngIf=\"btn.children.length > 0\">\n                  <a class=\"ant-dropdown-link\" nz-dropdown>\n                    <span [innerHTML]=\"_btnText(i, btn)\"></span>\n                    <i nz-icon type=\"down\"></i>\n                  </a>\n                  <ul nz-menu>\n                    <ng-container *ngFor=\"let subBtn of btn.children\">\n                      <li nz-menu-item *ngIf=\"subBtn.iif(i, subBtn, c)\">\n                        <ng-template [ngTemplateOutlet]=\"btnTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: subBtn, sub: true }\"></ng-template>\n                      </li>\n                    </ng-container>\n                  </ul>\n                </nz-dropdown>\n                <ng-container *ngIf=\"btn.children.length == 0\">\n                  <ng-template [ngTemplateOutlet]=\"btnTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn, sub: false }\"></ng-template>\n                </ng-container>\n                <nz-divider *ngIf=\"!last\" nzType=\"vertical\"></nz-divider>\n              </ng-container>\n              <ng-template [ngIf]=\"!c.__renderExpanded\" [ngTemplateOutlet]=\"c.__renderExpanded\" [ngTemplateOutletContext]=\"{$implicit: i, index: index, column: c }\"></ng-template>\n            </ng-container>\n          </span>\n        </td>\n      </tr>\n      <tr [nzExpand]=\"i.expand\">\n        <td></td>\n        <td [attr.colspan]=\"_columns.length\">\n          <ng-template [ngTemplateOutlet]=\"expand\" [ngTemplateOutletContext]=\"{$implicit: i, index: index }\"></ng-template>\n        </td>\n      </tr>\n    </ng-container>\n    <ng-container *ngIf=\"!loading\">\n      <ng-template [ngTemplateOutlet]=\"body\"></ng-template>\n    </ng-container>\n  </tbody>\n  <ng-template #totalTpl let-range=\"range\" let-total>{{ renderTotal(total, range) }}</ng-template>\n</nz-table>\n",
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
        header: [{ type: Input }],
        footer: [{ type: Input }],
        body: [{ type: Input }],
        expandRowByClick: [{ type: Input }],
        expand: [{ type: Input }],
        noResult: [{ type: Input }],
        widthConfig: [{ type: Input }],
        rowClickTime: [{ type: Input }],
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
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], STComponent.prototype, "loading", void 0);
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
    ], STComponent.prototype, "responsiveHideHeaderFooter", void 0);
    return STComponent;
}());
export { STComponent };
if (false) {
    /** @type {?} */
    STComponent.prototype.unsubscribe$;
    /** @type {?} */
    STComponent.prototype.totalTpl;
    /** @type {?} */
    STComponent.prototype.locale;
    /** @type {?} */
    STComponent.prototype.clonePage;
    /** @type {?} */
    STComponent.prototype._data;
    /** @type {?} */
    STComponent.prototype._isPagination;
    /** @type {?} */
    STComponent.prototype._allChecked;
    /** @type {?} */
    STComponent.prototype._indeterminate;
    /** @type {?} */
    STComponent.prototype._columns;
    /** @type {?} */
    STComponent.prototype.data;
    /** @type {?} */
    STComponent.prototype._req;
    /** @type {?} */
    STComponent.prototype._res;
    /** @type {?} */
    STComponent.prototype.columns;
    /** @type {?} */
    STComponent.prototype.ps;
    /** @type {?} */
    STComponent.prototype.pi;
    /** @type {?} */
    STComponent.prototype.total;
    /** @type {?} */
    STComponent.prototype._page;
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
    /** @type {?} */
    STComponent.prototype._multiSort;
    /** @type {?} */
    STComponent.prototype.rowClassName;
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
    /** @type {?} */
    STComponent.prototype.rowClickCount;
    /** @type {?} */
    STComponent.prototype.cdr;
    /** @type {?} */
    STComponent.prototype.cog;
    /** @type {?} */
    STComponent.prototype.router;
    /** @type {?} */
    STComponent.prototype.el;
    /** @type {?} */
    STComponent.prototype.renderer;
    /** @type {?} */
    STComponent.prototype.exportSrv;
    /** @type {?} */
    STComponent.prototype.modalHelper;
    /** @type {?} */
    STComponent.prototype.drawerHelper;
    /** @type {?} */
    STComponent.prototype.doc;
    /** @type {?} */
    STComponent.prototype.columnSource;
    /** @type {?} */
    STComponent.prototype.dataSource;
    /** @type {?} */
    STComponent.prototype.delonI18n;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy90YWJsZS8iLCJzb3VyY2VzIjpbInRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDeEQsT0FBTyxFQUFpQix1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUF3QixRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBK0IsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNPLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQW9CLGdCQUFnQixFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBc0IsTUFBTSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3ZLLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN6RyxPQUFPLEVBQUUsRUFBRSxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7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QUNsQjtRQUFmLFlBQVksRUFBRTs7bUVBQXFDO0lBMmUvRCxrQkFBQztDQUFBLEFBcG1CRCxJQW9tQkM7U0E5bEJZLFdBQVc7OztJQUN0QixtQ0FBMkM7O0lBQzNDLCtCQUFzQjs7SUFFdEIsNkJBQXlCOztJQUN6QixnQ0FBMEI7O0lBQzFCLDRCQUFxQjs7SUFDckIsb0NBQXFCOztJQUNyQixrQ0FBb0I7O0lBQ3BCLHFDQUF1Qjs7SUFDdkIsK0JBQTBCOztJQUkxQiwyQkFBd0Q7O0lBY3hELDJCQUFvQjs7SUFnQnBCLDJCQUFvQjs7SUFDcEIsOEJBQWtDOztJQUNsQyx5QkFBZ0M7O0lBQ2hDLHlCQUErQjs7SUFDL0IsNEJBQWtDOztJQW9CbEMsNEJBQXNCOzs7OztJQUV0Qiw4QkFBeUM7Ozs7O0lBRXpDLG1DQUF5Qzs7Ozs7SUFFekMsK0JBQTBDOzs7OztJQUUxQywyQkFBOEM7Ozs7O0lBRTlDLDZCQUE0Qzs7Ozs7OztJQU01QyxpQ0FBeUM7O0lBQ3pDLGlDQUFnQzs7SUFnQmhDLG1DQUFzQzs7Ozs7SUFFdEMsNkJBQTRDOzs7OztJQUU1Qyw2QkFBNEM7Ozs7O0lBRTVDLDJCQUFpQzs7SUFDakMsdUNBQWtEOzs7OztJQUVsRCw2QkFBa0U7O0lBQ2xFLCtCQUE4Qzs7SUFDOUMsa0NBQStCOzs7OztJQUUvQixtQ0FBMkM7O0lBQzNDLGlEQUE2RDs7Ozs7SUFFN0QsNEJBQXVEOzs7OztJQUl2RCw2QkFBeUQ7O0lBcU16RCxvQ0FBMEI7O0lBL0x4QiwwQkFBOEI7O0lBQzlCLDBCQUFxQjs7SUFDckIsNkJBQXNCOztJQUN0Qix5QkFBc0I7O0lBQ3RCLCtCQUEyQjs7SUFDM0IsZ0NBQTJCOztJQUMzQixrQ0FBZ0M7O0lBQ2hDLG1DQUFrQzs7SUFFbEMsMEJBQWtDOztJQUNsQyxtQ0FBb0M7O0lBQ3BDLGlDQUFnQzs7SUFDaEMsZ0NBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGVjaW1hbFBpcGUsIERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEluamVjdCwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPcHRpb25hbCwgT3V0cHV0LCBSZW5kZXJlcjIsIFNpbXBsZUNoYW5nZSwgU2ltcGxlQ2hhbmdlcywgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBbGFpbkkxOE5TZXJ2aWNlLCBBTEFJTl9JMThOX1RPS0VOLCBDTkN1cnJlbmN5UGlwZSwgRGF0ZVBpcGUsIERlbG9uTG9jYWxlU2VydmljZSwgRHJhd2VySGVscGVyLCBNb2RhbEhlbHBlciwgTW9kYWxIZWxwZXJPcHRpb25zLCBZTlBpcGUgfSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgZGVlcENvcHksIGRlZXBNZXJnZSwgdG9Cb29sZWFuLCB1cGRhdGVIb3N0Q2xhc3MsIElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBvZiwgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFNUQ29sdW1uU291cmNlIH0gZnJvbSAnLi90YWJsZS1jb2x1bW4tc291cmNlJztcbmltcG9ydCB7IFNURGF0YVNvdXJjZSB9IGZyb20gJy4vdGFibGUtZGF0YS1zb3VyY2UnO1xuaW1wb3J0IHsgU1RFeHBvcnQgfSBmcm9tICcuL3RhYmxlLWV4cG9ydCc7XG5pbXBvcnQgeyBTVFJvd1NvdXJjZSB9IGZyb20gJy4vdGFibGUtcm93LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBTVENvbmZpZyB9IGZyb20gJy4vdGFibGUuY29uZmlnJztcbmltcG9ydCB7IFNUQ2hhbmdlLCBTVENoYW5nZVR5cGUsIFNUQ29sdW1uLCBTVENvbHVtbkJ1dHRvbiwgU1RDb2x1bW5GaWx0ZXJNZW51LCBTVENvbHVtblNlbGVjdGlvbiwgU1REYXRhLCBTVEVycm9yLCBTVEV4cG9ydE9wdGlvbnMsIFNUTG9hZE9wdGlvbnMsIFNUTXVsdGlTb3J0LCBTVFBhZ2UsIFNUUmVxLCBTVFJlcywgU1RSb3dDbGFzc05hbWUsIFNUU2luZ2xlU29ydCB9IGZyb20gJy4vdGFibGUuaW50ZXJmYWNlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbIFNURGF0YVNvdXJjZSwgU1RSb3dTb3VyY2UsIFNUQ29sdW1uU291cmNlLCBTVEV4cG9ydCwgQ05DdXJyZW5jeVBpcGUsIERhdGVQaXBlLCBZTlBpcGUsIERlY2ltYWxQaXBlIF0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBTVENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIHRvdGFsVHBsID0gYGA7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgcHJpdmF0ZSBsb2NhbGU6IGFueSA9IHt9O1xuICBwcml2YXRlIGNsb25lUGFnZTogU1RQYWdlO1xuICBfZGF0YTogU1REYXRhW10gPSBbXTtcbiAgX2lzUGFnaW5hdGlvbiA9IHRydWU7XG4gIF9hbGxDaGVja2VkID0gZmFsc2U7XG4gIF9pbmRldGVybWluYXRlID0gZmFsc2U7XG4gIF9jb2x1bW5zOiBTVENvbHVtbltdID0gW107XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKSBkYXRhOiBzdHJpbmcgfCBTVERhdGFbXSB8IE9ic2VydmFibGU8U1REYXRhW10+O1xuICAvKiog6K+35rGC5L2T6YWN572uICovXG4gIEBJbnB1dCgpXG4gIGdldCByZXEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcTtcbiAgfVxuICBzZXQgcmVxKHZhbHVlOiBTVFJlcSkge1xuICAgIGNvbnN0IHsgcmVxIH0gPSB0aGlzLmNvZztcbiAgICBjb25zdCBpdGVtID0geyAuLi5yZXEsIC4uLnZhbHVlIH07XG4gICAgaWYgKGl0ZW0ucmVOYW1lID09IG51bGwpIHtcbiAgICAgIGl0ZW0ucmVOYW1lID0gZGVlcENvcHkocmVxLnJlTmFtZSk7XG4gICAgfVxuICAgIHRoaXMuX3JlcSA9IGl0ZW07XG4gIH1cbiAgcHJpdmF0ZSBfcmVxOiBTVFJlcTtcbiAgLyoqIOi/lOWbnuS9k+mFjee9riAqL1xuICBASW5wdXQoKVxuICBnZXQgcmVzKCkge1xuICAgIHJldHVybiB0aGlzLl9yZXM7XG4gIH1cbiAgc2V0IHJlcyh2YWx1ZTogU1RSZXMpIHtcbiAgICBjb25zdCB7IHJlcyB9ID0gdGhpcy5jb2c7XG4gICAgY29uc3QgaXRlbSA9IHsgLi4ucmVzLCAuLi52YWx1ZSB9O1xuICAgIGl0ZW0ucmVOYW1lID0geyAuLi5yZXMucmVOYW1lLCAuLi5pdGVtLnJlTmFtZSB9O1xuICAgIGlmICghQXJyYXkuaXNBcnJheShpdGVtLnJlTmFtZS5saXN0KSlcbiAgICAgIGl0ZW0ucmVOYW1lLmxpc3QgPSBpdGVtLnJlTmFtZS5saXN0LnNwbGl0KCcuJyk7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGl0ZW0ucmVOYW1lLnRvdGFsKSlcbiAgICAgIGl0ZW0ucmVOYW1lLnRvdGFsID0gaXRlbS5yZU5hbWUudG90YWwuc3BsaXQoJy4nKTtcbiAgICB0aGlzLl9yZXMgPSBpdGVtO1xuICB9XG4gIHByaXZhdGUgX3JlczogU1RSZXM7XG4gIEBJbnB1dCgpIGNvbHVtbnM6IFNUQ29sdW1uW10gPSBbXTtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgcHMgPSAxMDtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgcGkgPSAxO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSB0b3RhbCA9IDA7XG4gIC8qKiDliIbpobXlmajphY3nva4gKi9cbiAgQElucHV0KClcbiAgZ2V0IHBhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhZ2U7XG4gIH1cbiAgc2V0IHBhZ2UodmFsdWU6IFNUUGFnZSkge1xuICAgIHRoaXMuY2xvbmVQYWdlID0gdmFsdWU7XG4gICAgY29uc3QgeyBwYWdlIH0gPSB0aGlzLmNvZztcbiAgICBjb25zdCBpdGVtID0geyAuLi5kZWVwQ29weShwYWdlKSwgLi4udmFsdWUgfTtcbiAgICBjb25zdCB7IHRvdGFsIH0gPSBpdGVtO1xuICAgIGlmICh0eXBlb2YgdG90YWwgPT09ICdzdHJpbmcnICYmIHRvdGFsLmxlbmd0aCkge1xuICAgICAgdGhpcy50b3RhbFRwbCA9IHRvdGFsO1xuICAgIH0gZWxzZSBpZiAodG9Cb29sZWFuKHRvdGFsKSkge1xuICAgICAgdGhpcy50b3RhbFRwbCA9IHRoaXMubG9jYWxlLnRvdGFsO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRvdGFsVHBsID0gJyc7XG4gICAgfVxuICAgIHRoaXMuX3BhZ2UgPSBpdGVtO1xuICB9XG4gIHByaXZhdGUgX3BhZ2U6IFNUUGFnZTtcbiAgLyoqIOaYr+WQpuaYvuekukxvYWRpbmcgKi9cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGxvYWRpbmcgPSBmYWxzZTtcbiAgLyoqIOW7tui/n+aYvuekuuWKoOi9veaViOaenOeahOaXtumXtO+8iOmYsuatoumXqueDge+8iSAqL1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBsb2FkaW5nRGVsYXkgPSAwO1xuICAvKiog5piv5ZCm5pi+56S66L655qGGICovXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBib3JkZXJlZCA9IGZhbHNlO1xuICAvKiogdGFibGXlpKflsI8gKi9cbiAgQElucHV0KCkgc2l6ZTogJ3NtYWxsJyB8ICdtaWRkbGUnIHwgJ2RlZmF1bHQnO1xuICAvKiog57q15ZCR5pSv5oyB5rua5Yqo77yM5Lmf5Y+v55So5LqO5oyH5a6a5rua5Yqo5Yy65Z+f55qE6auY5bqm77yaYHsgeTogJzMwMHB4JywgeDogJzMwMHB4JyB9YCAqL1xuICBASW5wdXQoKSBzY3JvbGw6IHsgeT86IHN0cmluZzsgeD86IHN0cmluZyB9O1xuICAvKipcbiAgICog5Y2V5o6S5bqP6KeE5YiZXG4gICAqIC0g6Iul5LiN5oyH5a6a77yM5YiZ6L+U5Zue77yaYGNvbHVtbk5hbWU9YXNjZW5kfGRlc2NlbmRgXG4gICAqIC0g6Iul5oyH5a6a77yM5YiZ6L+U5Zue77yaYHNvcnQ9Y29sdW1uTmFtZS4oYXNjZW5kfGRlc2NlbmQpYFxuICAgKi9cbiAgQElucHV0KCkgc2luZ2xlU29ydDogU1RTaW5nbGVTb3J0ID0gbnVsbDtcbiAgcHJpdmF0ZSBfbXVsdGlTb3J0OiBTVE11bHRpU29ydDtcbiAgLyoqIOaYr+WQpuWkmuaOkuW6j++8jOW9kyBgc29ydGAg5aSa5Liq55u45ZCM5YC85pe26Ieq5Yqo5ZCI5bm277yM5bu66K6u5ZCO56uv5pSv5oyB5pe25L2/55SoICovXG4gIEBJbnB1dCgpXG4gIGdldCBtdWx0aVNvcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX211bHRpU29ydDtcbiAgfVxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHNldCBtdWx0aVNvcnQodmFsdWU6IGFueSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJyAmJiAhdG9Cb29sZWFuKHZhbHVlKSkge1xuICAgICAgdGhpcy5fbXVsdGlTb3J0ID0gbnVsbDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fbXVsdGlTb3J0ID0ge1xuICAgICAgLi4uKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgPyB2YWx1ZSA6IHt9KSxcbiAgICB9O1xuICB9XG4gIEBJbnB1dCgpIHJvd0NsYXNzTmFtZTogU1RSb3dDbGFzc05hbWU7XG4gIC8qKiBgaGVhZGVyYCDmoIfpopggKi9cbiAgQElucHV0KCkgaGVhZGVyOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgLyoqIGBmb290ZXJgIOW6lemDqCAqL1xuICBASW5wdXQoKSBmb290ZXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICAvKiog6aKd5aSWIGBib2R5YCDlhoXlrrkgKi9cbiAgQElucHV0KCkgYm9keTogVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBleHBhbmRSb3dCeUNsaWNrID0gZmFsc2U7XG4gIC8qKiBgZXhwYW5kYCDlj6/lsZXlvIDvvIzlvZPmlbDmja7mupDkuK3ljIXmi6wgYGV4cGFuZGAg6KGo56S65bGV5byA54q25oCBICovXG4gIEBJbnB1dCgpIGV4cGFuZDogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IHt9OyBjb2x1bW46IFNUQ29sdW1uIH0+O1xuICBASW5wdXQoKSBub1Jlc3VsdDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIHdpZHRoQ29uZmlnOiBzdHJpbmdbXTtcbiAgLyoqIOihjOWNleWHu+WkmuWwkeaXtumVv+S5i+exu+S4uuWPjOWHu++8iOWNleS9je+8muavq+enku+8ie+8jOm7mOiupO+8mmAyMDBgICovXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHJvd0NsaWNrVGltZSA9IDIwMDtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHJlc3BvbnNpdmVIaWRlSGVhZGVyRm9vdGVyOiBib29sZWFuO1xuICAvKiog6K+35rGC5byC5bi45pe25Zue6LCDICovXG4gIEBPdXRwdXQoKSByZWFkb25seSBlcnJvciA9IG5ldyBFdmVudEVtaXR0ZXI8U1RFcnJvcj4oKTtcbiAgLyoqXG4gICAqIOWPmOWMluaXtuWbnuiwg++8jOWMheaLrO+8mmBwaWDjgIFgcHNg44CBYGNoZWNrYm94YOOAgWByYWRpb2DjgIFgc29ydGDjgIFgZmlsdGVyYOOAgWBjbGlja2DjgIFgZGJsQ2xpY2tgIOWPmOWKqFxuICAgKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8U1RDaGFuZ2U+KCk7XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoQUxBSU5fSTE4Tl9UT0tFTikgaTE4blNydjogQWxhaW5JMThOU2VydmljZSxcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBjb2c6IFNUQ29uZmlnLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBleHBvcnRTcnY6IFNURXhwb3J0LFxuICAgIHByaXZhdGUgbW9kYWxIZWxwZXI6IE1vZGFsSGVscGVyLFxuICAgIHByaXZhdGUgZHJhd2VySGVscGVyOiBEcmF3ZXJIZWxwZXIsXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnksXG4gICAgcHJpdmF0ZSBjb2x1bW5Tb3VyY2U6IFNUQ29sdW1uU291cmNlLFxuICAgIHByaXZhdGUgZGF0YVNvdXJjZTogU1REYXRhU291cmNlLFxuICAgIHByaXZhdGUgZGVsb25JMThuOiBEZWxvbkxvY2FsZVNlcnZpY2UsXG4gICkge1xuICAgIGNvbnN0IGNvcHlDb2cgPSB7IC4uLmNvZyB9O1xuICAgIGRlbGV0ZSBjb3B5Q29nLm11bHRpU29ydDtcbiAgICBkZWVwTWVyZ2UodGhpcywgY29weUNvZyk7XG4gICAgaWYgKGNvZy5tdWx0aVNvcnQgJiYgY29nLm11bHRpU29ydC5nbG9iYWwgIT09IGZhbHNlKSB7XG4gICAgICB0aGlzLm11bHRpU29ydCA9IHsgLi4uY29nLm11bHRpU29ydCB9O1xuICAgIH1cblxuICAgIHRoaXMuZGVsb25JMThuLmNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmxvY2FsZSA9IHRoaXMuZGVsb25JMThuLmdldERhdGEoJ3N0Jyk7XG4gICAgICBpZiAodGhpcy5fY29sdW1ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMucGFnZSA9IHRoaXMuY2xvbmVQYWdlO1xuICAgICAgICB0aGlzLmNkKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpMThuU3J2LmNoYW5nZVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCksXG4gICAgICAgIGZpbHRlcigoKSA9PiB0aGlzLl9jb2x1bW5zLmxlbmd0aCA+IDApLFxuICAgICAgKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy51cGRhdGVDb2x1bW5zKCkpO1xuICB9XG5cbiAgY2QoKSB7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgcmVuZGVyVG90YWwodG90YWw6IHN0cmluZywgcmFuZ2U6IHN0cmluZ1tdKSB7XG4gICAgcmV0dXJuIHRoaXMudG90YWxUcGxcbiAgICAgID8gdGhpcy50b3RhbFRwbFxuICAgICAgICAucmVwbGFjZSgne3t0b3RhbH19JywgdG90YWwpXG4gICAgICAgIC5yZXBsYWNlKCd7e3JhbmdlWzBdfX0nLCByYW5nZVswXSlcbiAgICAgICAgLnJlcGxhY2UoJ3t7cmFuZ2VbMV19fScsIHJhbmdlWzFdKVxuICAgICAgOiAnJztcbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgcHJpdmF0ZSBjaGFuZ2VFbWl0KHR5cGU6IFNUQ2hhbmdlVHlwZSwgZGF0YT86IGFueSkge1xuICAgIGNvbnN0IHJlczogU1RDaGFuZ2UgPSB7XG4gICAgICB0eXBlLFxuICAgICAgcGk6IHRoaXMucGksXG4gICAgICBwczogdGhpcy5wcyxcbiAgICAgIHRvdGFsOiB0aGlzLnRvdGFsLFxuICAgIH07XG4gICAgaWYgKGRhdGEgIT0gbnVsbCkge1xuICAgICAgcmVzW3R5cGVdID0gZGF0YTtcbiAgICB9XG4gICAgdGhpcy5jaGFuZ2UuZW1pdChyZXMpO1xuICB9XG5cbiAgLy8jcmVnaW9uIGRhdGFcblxuICBwcml2YXRlIF9sb2FkKCkge1xuICAgIGNvbnN0IHsgcGksIHBzLCBkYXRhLCByZXEsIHJlcywgcGFnZSwgdG90YWwsIHNpbmdsZVNvcnQsIG11bHRpU29ydCwgcm93Q2xhc3NOYW1lIH0gPSB0aGlzO1xuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgcmV0dXJuIHRoaXMuZGF0YVNvdXJjZVxuICAgICAgLnByb2Nlc3Moe1xuICAgICAgICBwaSxcbiAgICAgICAgcHMsXG4gICAgICAgIHRvdGFsLFxuICAgICAgICBkYXRhLFxuICAgICAgICByZXEsXG4gICAgICAgIHJlcyxcbiAgICAgICAgcGFnZSxcbiAgICAgICAgY29sdW1uczogdGhpcy5fY29sdW1ucyxcbiAgICAgICAgc2luZ2xlU29ydCxcbiAgICAgICAgbXVsdGlTb3J0LFxuICAgICAgICByb3dDbGFzc05hbWUsXG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0LnBpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRoaXMucGkgPSByZXN1bHQucGk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQucHMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhpcy5wcyA9IHJlc3VsdC5wcztcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdC50b3RhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aGlzLnRvdGFsID0gcmVzdWx0LnRvdGFsO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0LnBhZ2VTaG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRoaXMuX2lzUGFnaW5hdGlvbiA9IHJlc3VsdC5wYWdlU2hvdztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9kYXRhID0gcmVzdWx0Lmxpc3Q7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICAgICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHRoaXMuX3JlZkNoZWNrKCkpXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5lcnJvci5lbWl0KHsgdHlwZTogJ3JlcScsIGVycm9yIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICAvKiog5riF56m65omA5pyJ5pWw5o2uICovXG4gIGNsZWFyKGNsZWFuU3RhdHVzID0gdHJ1ZSkge1xuICAgIGlmIChjbGVhblN0YXR1cykge1xuICAgICAgdGhpcy5jbGVhclN0YXR1cygpO1xuICAgIH1cbiAgICB0aGlzLl9kYXRhLmxlbmd0aCA9IDA7XG4gICAgdGhpcy5jZCgpO1xuICB9XG5cbiAgLyoqIOa4heepuuaJgOacieeKtuaAgSAqL1xuICBjbGVhclN0YXR1cygpIHtcbiAgICByZXR1cm4gdGhpcy5jbGVhckNoZWNrKClcbiAgICAgIC5jbGVhclJhZGlvKClcbiAgICAgIC5jbGVhckZpbHRlcigpXG4gICAgICAuY2xlYXJTb3J0KCk7XG4gIH1cblxuICAvKipcbiAgICog5qC55o2u6aG156CB6YeN5paw5Yqg6L295pWw5o2uXG4gICAqXG4gICAqIEBwYXJhbSBwaSDmjIflrprlvZPliY3pobXnoIHvvIzpu5jorqTvvJpgMWBcbiAgICogQHBhcmFtIGV4dHJhUGFyYW1zIOmHjeaWsOaMh+WumiBgZXh0cmFQYXJhbXNgIOWAvFxuICAgKiBAcGFyYW0gb3B0aW9ucyDpgInpoblcbiAgICovXG4gIGxvYWQocGkgPSAxLCBleHRyYVBhcmFtcz86IHt9LCBvcHRpb25zPzogU1RMb2FkT3B0aW9ucykge1xuICAgIGlmIChwaSAhPT0gLTEpIHRoaXMucGkgPSBwaTtcbiAgICBpZiAodHlwZW9mIGV4dHJhUGFyYW1zICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5fcmVxLnBhcmFtcyA9XG4gICAgICAgIG9wdGlvbnMgJiYgb3B0aW9ucy5tZXJnZVxuICAgICAgICAgID8geyAuLi50aGlzLl9yZXEucGFyYW1zLCAuLi5leHRyYVBhcmFtcyB9XG4gICAgICAgICAgOiBleHRyYVBhcmFtcztcbiAgICB9XG4gICAgdGhpcy5fY2hhbmdlKCdwaScpO1xuICB9XG5cbiAgLyoqXG4gICAqIOmHjeaWsOWIt+aWsOW9k+WJjemhtVxuICAgKiBAcGFyYW0gZXh0cmFQYXJhbXMg6YeN5paw5oyH5a6aIGBleHRyYVBhcmFtc2Ag5YC8XG4gICAqL1xuICByZWxvYWQoZXh0cmFQYXJhbXM/OiB7fSwgb3B0aW9ucz86IFNUTG9hZE9wdGlvbnMpIHtcbiAgICB0aGlzLmxvYWQoLTEsIGV4dHJhUGFyYW1zLCBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDph43nva7kuJTph43mlrDorr7nva4gYHBpYCDkuLogYDFg77yM5YyF5ZCr5Lul5LiL5YC877yaXG4gICAqIC0gYGNoZWNrYCDmlbDmja5cbiAgICogLSBgcmFkaW9gIOaVsOaNrlxuICAgKiAtIGBzb3J0YCDmlbDmja5cbiAgICogLSBgZmlsZXRlcmAg5pWw5o2uXG4gICAqXG4gICAqIEBwYXJhbSBleHRyYVBhcmFtcyDph43mlrDmjIflrpogYGV4dHJhUGFyYW1zYCDlgLxcbiAgICovXG4gIHJlc2V0KGV4dHJhUGFyYW1zPzoge30sIG9wdGlvbnM/OiBTVExvYWRPcHRpb25zKSB7XG4gICAgdGhpcy5jbGVhclN0YXR1cygpLmxvYWQoMSwgZXh0cmFQYXJhbXMsIG9wdGlvbnMpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdG9Ub3AoKSB7XG4gICAgaWYgKCF0aGlzLnBhZ2UudG9Ub3ApIHJldHVybjtcbiAgICBjb25zdCBlbCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICBpZiAodGhpcy5zY3JvbGwpIHtcbiAgICAgIGVsLnF1ZXJ5U2VsZWN0b3IoJy5hbnQtdGFibGUtYm9keScpLnNjcm9sbFRvKDAsIDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbC5zY3JvbGxJbnRvVmlldygpO1xuICAgIC8vIGZpeCBoZWFkZXIgaGVpZ2h0XG4gICAgdGhpcy5kb2MuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCAtPSB0aGlzLnBhZ2UudG9Ub3BPZmZzZXQ7XG4gIH1cblxuICBfY2hhbmdlKHR5cGU6ICdwaScgfCAncHMnKSB7XG4gICAgdGhpcy5fbG9hZCgpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5fdG9Ub3AoKTtcbiAgICB9KTtcbiAgICB0aGlzLmNoYW5nZUVtaXQodHlwZSk7XG4gIH1cblxuICBfY2xpY2soZTogRXZlbnQsIGl0ZW06IFNURGF0YSwgY29sOiBTVENvbHVtbikge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IHJlcyA9IGNvbC5jbGljayhpdGVtLCB0aGlzKTtcbiAgICBpZiAodHlwZW9mIHJlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwocmVzKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSByb3dDbGlja0NvdW50ID0gMDtcbiAgX3Jvd0NsaWNrKGU6IEV2ZW50LCBpdGVtOiBTVERhdGEsIGluZGV4OiBudW1iZXIpIHtcbiAgICBpZiAoKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5ub2RlTmFtZSA9PT0gJ0lOUFVUJykgcmV0dXJuO1xuICAgIGNvbnN0IHsgZXhwYW5kLCBleHBhbmRSb3dCeUNsaWNrLCByb3dDbGlja1RpbWUgfSA9IHRoaXM7XG4gICAgaWYgKCEhZXhwYW5kICYmIGV4cGFuZFJvd0J5Q2xpY2spIHtcbiAgICAgIGl0ZW0uZXhwYW5kID0gIWl0ZW0uZXhwYW5kO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICArK3RoaXMucm93Q2xpY2tDb3VudDtcbiAgICBpZiAodGhpcy5yb3dDbGlja0NvdW50ICE9PSAxKSByZXR1cm47XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBkYXRhID0geyBlLCBpdGVtLCBpbmRleCB9O1xuICAgICAgaWYgKHRoaXMucm93Q2xpY2tDb3VudCA9PT0gMSkge1xuICAgICAgICB0aGlzLmNoYW5nZUVtaXQoJ2NsaWNrJywgZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNoYW5nZUVtaXQoJ2RibENsaWNrJywgZGF0YSk7XG4gICAgICB9XG4gICAgICB0aGlzLnJvd0NsaWNrQ291bnQgPSAwO1xuICAgIH0sIHJvd0NsaWNrVGltZSk7XG4gIH1cblxuICAvKiog56e76Zmk5p+Q6KGM5pWw5o2uICovXG4gIHJlbW92ZVJvdyhkYXRhOiBTVERhdGEgfCBTVERhdGFbXSkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgZGF0YSA9IFtkYXRhXTtcbiAgICB9XG5cbiAgICAoZGF0YSBhcyBTVERhdGFbXSkubWFwKGl0ZW0gPT4gdGhpcy5fZGF0YS5pbmRleE9mKGl0ZW0pKVxuICAgICAgLmZpbHRlcihwb3MgPT4gcG9zICE9PSAtMSlcbiAgICAgIC5mb3JFYWNoKHBvcyA9PiB0aGlzLl9kYXRhLnNwbGljZShwb3MsIDEpKTtcblxuICAgIC8vIHJlY2FsY3VsYXRlIG5vXG4gICAgdGhpcy5fY29sdW1uc1xuICAgICAgICAuZmlsdGVyKHcgPT4gdy50eXBlID09PSAnbm8nKVxuICAgICAgICAuZm9yRWFjaChjID0+IHRoaXMuX2RhdGEuZm9yRWFjaCgoaSwgaWR4KSA9PiBpLl92YWx1ZXNbYy5fX3BvaW50XSA9IGMubm9JbmRleCArIGlkeCkpO1xuXG4gICAgdGhpcy5jZCgpO1xuICB9XG5cbiAgLy8jZW5kcmVnaW9uXG5cbiAgLy8jcmVnaW9uIHNvcnRcblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHNvcnQoY29sOiBTVENvbHVtbiwgaWR4OiBudW1iZXIsIHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodGhpcy5tdWx0aVNvcnQpIHtcbiAgICAgIGNvbC5fc29ydC5kZWZhdWx0ID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NvbHVtbnMuZm9yRWFjaChcbiAgICAgICAgKGl0ZW0sIGluZGV4KSA9PiAoaXRlbS5fc29ydC5kZWZhdWx0ID0gaW5kZXggPT09IGlkeCA/IHZhbHVlIDogbnVsbCksXG4gICAgICApO1xuICAgIH1cbiAgICB0aGlzLl9sb2FkKCk7XG4gICAgY29uc3QgcmVzID0ge1xuICAgICAgdmFsdWUsXG4gICAgICBtYXA6IHRoaXMuZGF0YVNvdXJjZS5nZXRSZXFTb3J0TWFwKHRoaXMuc2luZ2xlU29ydCwgdGhpcy5tdWx0aVNvcnQsIHRoaXMuX2NvbHVtbnMpLFxuICAgICAgY29sdW1uOiBjb2wsXG4gICAgfTtcbiAgICB0aGlzLmNoYW5nZUVtaXQoJ3NvcnQnLCByZXMpO1xuICB9XG5cbiAgY2xlYXJTb3J0KCkge1xuICAgIHRoaXMuX2NvbHVtbnMuZm9yRWFjaChpdGVtID0+IChpdGVtLl9zb3J0LmRlZmF1bHQgPSBudWxsKSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyNlbmRyZWdpb25cblxuICAvLyNyZWdpb24gZmlsdGVyXG5cbiAgcHJpdmF0ZSBoYW5kbGVGaWx0ZXIoY29sOiBTVENvbHVtbikge1xuICAgIGNvbC5maWx0ZXIuZGVmYXVsdCA9IGNvbC5maWx0ZXIubWVudXMuZmluZEluZGV4KHcgPT4gdy5jaGVja2VkKSAhPT0gLTE7XG4gICAgdGhpcy5fbG9hZCgpO1xuICAgIHRoaXMuY2hhbmdlRW1pdCgnZmlsdGVyJywgY29sKTtcbiAgfVxuXG4gIF9maWx0ZXJDb25maXJtKGNvbDogU1RDb2x1bW4pIHtcbiAgICB0aGlzLmhhbmRsZUZpbHRlcihjb2wpO1xuICB9XG5cbiAgX2ZpbHRlckNsZWFyKGNvbDogU1RDb2x1bW4pIHtcbiAgICBjb2wuZmlsdGVyLm1lbnVzLmZvckVhY2goaSA9PiAoaS5jaGVja2VkID0gZmFsc2UpKTtcbiAgICB0aGlzLmhhbmRsZUZpbHRlcihjb2wpO1xuICB9XG5cbiAgX2ZpbHRlclJhZGlvKGNvbDogU1RDb2x1bW4sIGl0ZW06IFNUQ29sdW1uRmlsdGVyTWVudSwgY2hlY2tlZDogYm9vbGVhbikge1xuICAgIGNvbC5maWx0ZXIubWVudXMuZm9yRWFjaChpID0+IChpLmNoZWNrZWQgPSBmYWxzZSkpO1xuICAgIGl0ZW0uY2hlY2tlZCA9IGNoZWNrZWQ7XG4gIH1cblxuICBjbGVhckZpbHRlcigpIHtcbiAgICB0aGlzLl9jb2x1bW5zXG4gICAgICAuZmlsdGVyKHcgPT4gdy5maWx0ZXIgJiYgdy5maWx0ZXIuZGVmYXVsdCA9PT0gdHJ1ZSlcbiAgICAgIC5mb3JFYWNoKGNvbCA9PiB7XG4gICAgICAgIGNvbC5maWx0ZXIuZGVmYXVsdCA9IGZhbHNlO1xuICAgICAgICBjb2wuZmlsdGVyLm1lbnVzLmZvckVhY2goZiA9PiAoZi5jaGVja2VkID0gZmFsc2UpKTtcbiAgICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8jZW5kcmVnaW9uXG5cbiAgLy8jcmVnaW9uIGNoZWNrYm94XG5cbiAgLyoqIOa4hemZpOaJgOaciSBgY2hlY2tib3hgICovXG4gIGNsZWFyQ2hlY2soKTogdGhpcyB7XG4gICAgcmV0dXJuIHRoaXMuX2NoZWNrQWxsKGZhbHNlKTtcbiAgfVxuXG4gIHByaXZhdGUgX3JlZkNoZWNrKCk6IHRoaXMge1xuICAgIGNvbnN0IHZhbGlkRGF0YSA9IHRoaXMuX2RhdGEuZmlsdGVyKHcgPT4gIXcuZGlzYWJsZWQpO1xuICAgIGNvbnN0IGNoZWNrZWRMaXN0ID0gdmFsaWREYXRhLmZpbHRlcih3ID0+IHcuY2hlY2tlZCA9PT0gdHJ1ZSk7XG4gICAgdGhpcy5fYWxsQ2hlY2tlZCA9IGNoZWNrZWRMaXN0Lmxlbmd0aCA+IDAgJiYgY2hlY2tlZExpc3QubGVuZ3RoID09PSB2YWxpZERhdGEubGVuZ3RoO1xuICAgIGNvbnN0IGFsbFVuQ2hlY2tlZCA9IHZhbGlkRGF0YS5ldmVyeSh2YWx1ZSA9PiAhdmFsdWUuY2hlY2tlZCk7XG4gICAgdGhpcy5faW5kZXRlcm1pbmF0ZSA9ICF0aGlzLl9hbGxDaGVja2VkICYmICFhbGxVbkNoZWNrZWQ7XG4gICAgdGhpcy5jZCgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgX2NoZWNrQWxsKGNoZWNrZWQ/OiBib29sZWFuKTogdGhpcyB7XG4gICAgY2hlY2tlZCA9IHR5cGVvZiBjaGVja2VkID09PSAndW5kZWZpbmVkJyA/IHRoaXMuX2FsbENoZWNrZWQgOiBjaGVja2VkO1xuICAgIHRoaXMuX2RhdGEuZmlsdGVyKHcgPT4gIXcuZGlzYWJsZWQpLmZvckVhY2goaSA9PiAoaS5jaGVja2VkID0gY2hlY2tlZCkpO1xuICAgIHJldHVybiB0aGlzLl9yZWZDaGVjaygpLl9jaGVja05vdGlmeSgpO1xuICB9XG5cbiAgX2NoZWNrU2VsZWN0aW9uKGk6IFNURGF0YSwgdmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpLmNoZWNrZWQgPSB2YWx1ZTtcbiAgICByZXR1cm4gdGhpcy5fcmVmQ2hlY2soKS5fY2hlY2tOb3RpZnkoKTtcbiAgfVxuXG4gIF9yb3dTZWxlY3Rpb24ocm93OiBTVENvbHVtblNlbGVjdGlvbik6IHRoaXMge1xuICAgIHJvdy5zZWxlY3QodGhpcy5fZGF0YSk7XG4gICAgcmV0dXJuIHRoaXMuX3JlZkNoZWNrKCkuX2NoZWNrTm90aWZ5KCk7XG4gIH1cblxuICBfY2hlY2tOb3RpZnkoKTogdGhpcyB7XG4gICAgY29uc3QgcmVzID0gdGhpcy5fZGF0YS5maWx0ZXIodyA9PiAhdy5kaXNhYmxlZCAmJiB3LmNoZWNrZWQgPT09IHRydWUpO1xuICAgIHRoaXMuY2hhbmdlRW1pdCgnY2hlY2tib3gnLCByZXMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8jZW5kcmVnaW9uXG5cbiAgLy8jcmVnaW9uIHJhZGlvXG5cbiAgLyoqIOa4hemZpOaJgOaciSBgcmFkaW9gICovXG4gIGNsZWFyUmFkaW8oKTogdGhpcyB7XG4gICAgdGhpcy5fZGF0YS5maWx0ZXIodyA9PiB3LmNoZWNrZWQpLmZvckVhY2goaXRlbSA9PiAoaXRlbS5jaGVja2VkID0gZmFsc2UpKTtcbiAgICB0aGlzLmNoYW5nZUVtaXQoJ3JhZGlvJywgbnVsbCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBfcmVmUmFkaW8oY2hlY2tlZDogYm9vbGVhbiwgaXRlbTogU1REYXRhKTogdGhpcyB7XG4gICAgLy8gaWYgKGl0ZW0uZGlzYWJsZWQgPT09IHRydWUpIHJldHVybjtcbiAgICB0aGlzLl9kYXRhLmZpbHRlcih3ID0+ICF3LmRpc2FibGVkKS5mb3JFYWNoKGkgPT4gKGkuY2hlY2tlZCA9IGZhbHNlKSk7XG4gICAgaXRlbS5jaGVja2VkID0gY2hlY2tlZDtcbiAgICB0aGlzLmNoYW5nZUVtaXQoJ3JhZGlvJywgaXRlbSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyNlbmRyZWdpb25cblxuICAvLyNyZWdpb24gYnV0dG9uc1xuXG4gIF9idG5DbGljayhlOiBFdmVudCwgcmVjb3JkOiBTVERhdGEsIGJ0bjogU1RDb2x1bW5CdXR0b24pIHtcbiAgICBpZiAoZSkge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgaWYgKGJ0bi50eXBlID09PSAnbW9kYWwnIHx8IGJ0bi50eXBlID09PSAnc3RhdGljJykge1xuICAgICAgY29uc3QgeyBtb2RhbCB9ID0gYnRuO1xuICAgICAgY29uc3Qgb2JqID0geyBbbW9kYWwucGFyYW1zTmFtZV06IHJlY29yZCB9O1xuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgICAgKHRoaXMubW9kYWxIZWxwZXJbYnRuLnR5cGUgPT09ICdtb2RhbCcgPyAnY3JlYXRlJyA6ICdjcmVhdGVTdGF0aWMnXSBhcyBhbnkpKFxuICAgICAgICBtb2RhbC5jb21wb25lbnQsXG4gICAgICAgIHsgLi4ub2JqLCAuLi4obW9kYWwucGFyYW1zICYmIG1vZGFsLnBhcmFtcyhyZWNvcmQpKSB9LFxuICAgICAgICB7IC4uLm1vZGFsIH0sXG4gICAgICApXG4gICAgICAgIC5waXBlKGZpbHRlcih3ID0+IHR5cGVvZiB3ICE9PSAndW5kZWZpbmVkJykpXG4gICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHRoaXMuYnRuQ2FsbGJhY2socmVjb3JkLCBidG4sIHJlcykpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoYnRuLnR5cGUgPT09ICdkcmF3ZXInKSB7XG4gICAgICBjb25zdCB7IGRyYXdlciB9ID0gYnRuO1xuICAgICAgY29uc3Qgb2JqID0geyBbZHJhd2VyLnBhcmFtc05hbWVdOiByZWNvcmQgfTtcbiAgICAgIHRoaXMuZHJhd2VySGVscGVyXG4gICAgICAgIC5jcmVhdGUoXG4gICAgICAgICAgZHJhd2VyLnRpdGxlLFxuICAgICAgICAgIGRyYXdlci5jb21wb25lbnQsXG4gICAgICAgICAgeyAuLi5vYmosIC4uLihkcmF3ZXIucGFyYW1zICYmIGRyYXdlci5wYXJhbXMocmVjb3JkKSkgfSxcbiAgICAgICAgICB7IC4uLmRyYXdlciB9LFxuICAgICAgICApXG4gICAgICAgIC5waXBlKGZpbHRlcih3ID0+IHR5cGVvZiB3ICE9PSAndW5kZWZpbmVkJykpXG4gICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHRoaXMuYnRuQ2FsbGJhY2socmVjb3JkLCBidG4sIHJlcykpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoYnRuLnR5cGUgPT09ICdsaW5rJykge1xuICAgICAgY29uc3QgY2xpY2tSZXMgPSB0aGlzLmJ0bkNhbGxiYWNrKHJlY29yZCwgYnRuKTtcbiAgICAgIGlmICh0eXBlb2YgY2xpY2tSZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoY2xpY2tSZXMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmJ0bkNhbGxiYWNrKHJlY29yZCwgYnRuKTtcbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgcHJpdmF0ZSBidG5DYWxsYmFjayhyZWNvcmQ6IFNURGF0YSwgYnRuOiBTVENvbHVtbkJ1dHRvbiwgbW9kYWw/OiBhbnkpIHtcbiAgICBpZiAoIWJ0bi5jbGljaykgcmV0dXJuO1xuICAgIGlmICh0eXBlb2YgYnRuLmNsaWNrID09PSAnc3RyaW5nJykge1xuICAgICAgc3dpdGNoIChidG4uY2xpY2spIHtcbiAgICAgICAgY2FzZSAnbG9hZCc6XG4gICAgICAgICAgdGhpcy5sb2FkKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3JlbG9hZCc6XG4gICAgICAgICAgdGhpcy5yZWxvYWQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGJ0bi5jbGljayhyZWNvcmQsIG1vZGFsLCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICBfYnRuVGV4dChyZWNvcmQ6IFNURGF0YSwgYnRuOiBTVENvbHVtbkJ1dHRvbikge1xuICAgIGlmIChidG4uZm9ybWF0KSByZXR1cm4gYnRuLmZvcm1hdChyZWNvcmQsIGJ0bik7XG4gICAgcmV0dXJuIGJ0bi50ZXh0IHx8ICcnO1xuICB9XG5cbiAgX3ZhbGlkQnRucyhpdGVtOiBTVERhdGEsIGNvbDogU1RDb2x1bW4pOiBTVENvbHVtbkJ1dHRvbltdIHtcbiAgICByZXR1cm4gY29sLmJ1dHRvbnMuZmlsdGVyKGJ0biA9PiBidG4uaWlmKGl0ZW0sIGJ0biwgY29sKSk7XG4gIH1cblxuICAvLyNlbmRyZWdpb25cblxuICAvLyNyZWdpb24gZXhwb3J0XG5cbiAgLyoqXG4gICAqIOWvvOWHuuW9k+WJjemhte+8jOehruS/neW3sue7j+azqOWGjCBgWGxzeE1vZHVsZWBcbiAgICogQHBhcmFtIG5ld0RhdGEg6YeN5paw5oyH5a6a5pWw5o2u77yM5L6L5aaC5biM5pyb5a+85Ye65omA5pyJ5pWw5o2u6Z2e5bi45pyJ55SoXG4gICAqIEBwYXJhbSBvcHQg6aKd5aSW5Y+C5pWwXG4gICAqL1xuICBleHBvcnQobmV3RGF0YT86IFNURGF0YVtdLCBvcHQ/OiBTVEV4cG9ydE9wdGlvbnMpIHtcbiAgICAobmV3RGF0YSA/IG9mKG5ld0RhdGEpIDogb2YodGhpcy5fZGF0YSkpLnN1YnNjcmliZSgocmVzOiBTVERhdGFbXSkgPT5cbiAgICAgIHRoaXMuZXhwb3J0U3J2LmV4cG9ydChcbiAgICAgICAge1xuICAgICAgICAgIC4uLm9wdCxcbiAgICAgICAgICAuLi57XG4gICAgICAgICAgICBfZDogcmVzLFxuICAgICAgICAgICAgX2M6IHRoaXMuX2NvbHVtbnMsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICksXG4gICAgKTtcbiAgfVxuXG4gIC8vI2VuZHJlZ2lvblxuXG4gIHByaXZhdGUgdXBkYXRlQ29sdW1ucygpIHtcbiAgICB0aGlzLl9jb2x1bW5zID0gdGhpcy5jb2x1bW5Tb3VyY2UucHJvY2Vzcyh0aGlzLmNvbHVtbnMpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDbGFzcygpIHtcbiAgICB1cGRhdGVIb3N0Q2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCB0aGlzLnJlbmRlcmVyLCB7XG4gICAgICBbYHN0YF06IHRydWUsXG4gICAgICBbYHN0X19wLSR7dGhpcy5wYWdlLnBsYWNlbWVudH1gXTogdGhpcy5wYWdlLnBsYWNlbWVudCxcbiAgICAgIFtgYW50LXRhYmxlLXJlcF9faGlkZS1oZWFkZXItZm9vdGVyYF06IHRoaXMucmVzcG9uc2l2ZUhpZGVIZWFkZXJGb290ZXIsXG4gICAgfSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5jb2x1bW5Tb3VyY2UucmVzdG9yZUFsbFJlbmRlcih0aGlzLl9jb2x1bW5zKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKFxuICAgIGNoYW5nZXM6IHsgW1AgaW4ga2V5b2YgdGhpc10/OiBTaW1wbGVDaGFuZ2UgfSAmIFNpbXBsZUNoYW5nZXMsXG4gICk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLmNvbHVtbnMpIHtcbiAgICAgIHRoaXMudXBkYXRlQ29sdW1ucygpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5kYXRhICYmIGNoYW5nZXMuZGF0YS5jdXJyZW50VmFsdWUpIHtcbiAgICAgIHRoaXMuX2xvYWQoKTtcbiAgICB9XG4gICAgdGhpcy5zZXRDbGFzcygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgY29uc3QgeyB1bnN1YnNjcmliZSQgfSA9IHRoaXM7XG4gICAgdW5zdWJzY3JpYmUkLm5leHQoKTtcbiAgICB1bnN1YnNjcmliZSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19