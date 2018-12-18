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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy90YWJsZS8iLCJzb3VyY2VzIjpbInRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDeEQsT0FBTyxFQUFpQix1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUF3QixRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBK0IsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNPLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQW9CLGdCQUFnQixFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBc0IsTUFBTSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3ZLLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN6RyxPQUFPLEVBQUUsRUFBRSxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7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Ozs7SUFFdEIsOEJBQXlDOzs7OztJQUV6QyxtQ0FBeUM7Ozs7O0lBRXpDLCtCQUEwQzs7Ozs7SUFFMUMsMkJBQThDOzs7OztJQUU5Qyw2QkFBNEM7Ozs7Ozs7SUFNNUMsaUNBQXlDOztJQUN6QyxpQ0FBZ0M7O0lBZ0JoQyxtQ0FBc0M7Ozs7O0lBRXRDLDZCQUE0Qzs7Ozs7SUFFNUMsNkJBQTRDOzs7OztJQUU1QywyQkFBaUM7O0lBQ2pDLHVDQUFrRDs7Ozs7SUFFbEQsNkJBQWtFOztJQUNsRSwrQkFBOEM7O0lBQzlDLGtDQUErQjs7Ozs7SUFFL0IsbUNBQTJDOztJQUMzQyxpREFBNkQ7Ozs7O0lBRTdELDRCQUF1RDs7Ozs7SUFJdkQsNkJBQXlEOztJQXFNekQsb0NBQTBCOztJQS9MeEIsMEJBQThCOztJQUM5QiwwQkFBcUI7O0lBQ3JCLDZCQUFzQjs7SUFDdEIseUJBQXNCOztJQUN0QiwrQkFBMkI7O0lBQzNCLGdDQUEyQjs7SUFDM0Isa0NBQWdDOztJQUNoQyxtQ0FBa0M7O0lBRWxDLDBCQUFrQzs7SUFDbEMsbUNBQW9DOztJQUNwQyxpQ0FBZ0M7O0lBQ2hDLGdDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERlY2ltYWxQaXBlLCBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbmplY3QsIElucHV0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT3B0aW9uYWwsIE91dHB1dCwgUmVuZGVyZXIyLCBTaW1wbGVDaGFuZ2UsIFNpbXBsZUNoYW5nZXMsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQWxhaW5JMThOU2VydmljZSwgQUxBSU5fSTE4Tl9UT0tFTiwgQ05DdXJyZW5jeVBpcGUsIERhdGVQaXBlLCBEZWxvbkxvY2FsZVNlcnZpY2UsIERyYXdlckhlbHBlciwgTW9kYWxIZWxwZXIsIE1vZGFsSGVscGVyT3B0aW9ucywgWU5QaXBlIH0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IGRlZXBDb3B5LCBkZWVwTWVyZ2UsIHRvQm9vbGVhbiwgdXBkYXRlSG9zdENsYXNzLCBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgb2YsIE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBTVENvbHVtblNvdXJjZSB9IGZyb20gJy4vdGFibGUtY29sdW1uLXNvdXJjZSc7XG5pbXBvcnQgeyBTVERhdGFTb3VyY2UgfSBmcm9tICcuL3RhYmxlLWRhdGEtc291cmNlJztcbmltcG9ydCB7IFNURXhwb3J0IH0gZnJvbSAnLi90YWJsZS1leHBvcnQnO1xuaW1wb3J0IHsgU1RSb3dTb3VyY2UgfSBmcm9tICcuL3RhYmxlLXJvdy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU1RDb25maWcgfSBmcm9tICcuL3RhYmxlLmNvbmZpZyc7XG5pbXBvcnQgeyBTVENoYW5nZSwgU1RDaGFuZ2VUeXBlLCBTVENvbHVtbiwgU1RDb2x1bW5CdXR0b24sIFNUQ29sdW1uRmlsdGVyTWVudSwgU1RDb2x1bW5TZWxlY3Rpb24sIFNURGF0YSwgU1RFcnJvciwgU1RFeHBvcnRPcHRpb25zLCBTVExvYWRPcHRpb25zLCBTVE11bHRpU29ydCwgU1RQYWdlLCBTVFJlcSwgU1RSZXMsIFNUUm93Q2xhc3NOYW1lLCBTVFNpbmdsZVNvcnQgfSBmcm9tICcuL3RhYmxlLmludGVyZmFjZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWJsZS5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogWyBTVERhdGFTb3VyY2UsIFNUUm93U291cmNlLCBTVENvbHVtblNvdXJjZSwgU1RFeHBvcnQsIENOQ3VycmVuY3lQaXBlLCBEYXRlUGlwZSwgWU5QaXBlLCBEZWNpbWFsUGlwZSBdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgU1RDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgdW5zdWJzY3JpYmUkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSB0b3RhbFRwbCA9IGBgO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHByaXZhdGUgbG9jYWxlOiBhbnkgPSB7fTtcbiAgcHJpdmF0ZSBjbG9uZVBhZ2U6IFNUUGFnZTtcbiAgX2RhdGE6IFNURGF0YVtdID0gW107XG4gIF9pc1BhZ2luYXRpb24gPSB0cnVlO1xuICBfYWxsQ2hlY2tlZCA9IGZhbHNlO1xuICBfaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICBfY29sdW1uczogU1RDb2x1bW5bXSA9IFtdO1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KCkgZGF0YTogc3RyaW5nIHwgU1REYXRhW10gfCBPYnNlcnZhYmxlPFNURGF0YVtdPjtcbiAgLyoqIOivt+axguS9k+mFjee9riAqL1xuICBASW5wdXQoKVxuICBnZXQgcmVxKCkge1xuICAgIHJldHVybiB0aGlzLl9yZXE7XG4gIH1cbiAgc2V0IHJlcSh2YWx1ZTogU1RSZXEpIHtcbiAgICBjb25zdCB7IHJlcSB9ID0gdGhpcy5jb2c7XG4gICAgY29uc3QgaXRlbSA9IHsgLi4ucmVxLCAuLi52YWx1ZSB9O1xuICAgIGlmIChpdGVtLnJlTmFtZSA9PSBudWxsKSB7XG4gICAgICBpdGVtLnJlTmFtZSA9IGRlZXBDb3B5KHJlcS5yZU5hbWUpO1xuICAgIH1cbiAgICB0aGlzLl9yZXEgPSBpdGVtO1xuICB9XG4gIHByaXZhdGUgX3JlcTogU1RSZXE7XG4gIC8qKiDov5Tlm57kvZPphY3nva4gKi9cbiAgQElucHV0KClcbiAgZ2V0IHJlcygpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzO1xuICB9XG4gIHNldCByZXModmFsdWU6IFNUUmVzKSB7XG4gICAgY29uc3QgeyByZXMgfSA9IHRoaXMuY29nO1xuICAgIGNvbnN0IGl0ZW0gPSB7IC4uLnJlcywgLi4udmFsdWUgfTtcbiAgICBpdGVtLnJlTmFtZSA9IHsgLi4ucmVzLnJlTmFtZSwgLi4uaXRlbS5yZU5hbWUgfTtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoaXRlbS5yZU5hbWUubGlzdCkpXG4gICAgICBpdGVtLnJlTmFtZS5saXN0ID0gaXRlbS5yZU5hbWUubGlzdC5zcGxpdCgnLicpO1xuICAgIGlmICghQXJyYXkuaXNBcnJheShpdGVtLnJlTmFtZS50b3RhbCkpXG4gICAgICBpdGVtLnJlTmFtZS50b3RhbCA9IGl0ZW0ucmVOYW1lLnRvdGFsLnNwbGl0KCcuJyk7XG4gICAgdGhpcy5fcmVzID0gaXRlbTtcbiAgfVxuICBwcml2YXRlIF9yZXM6IFNUUmVzO1xuICBASW5wdXQoKSBjb2x1bW5zOiBTVENvbHVtbltdID0gW107XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHBzID0gMTA7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHBpID0gMTtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgdG90YWwgPSAwO1xuICAvKiog5YiG6aG15Zmo6YWN572uICovXG4gIEBJbnB1dCgpXG4gIGdldCBwYWdlKCkge1xuICAgIHJldHVybiB0aGlzLl9wYWdlO1xuICB9XG4gIHNldCBwYWdlKHZhbHVlOiBTVFBhZ2UpIHtcbiAgICB0aGlzLmNsb25lUGFnZSA9IHZhbHVlO1xuICAgIGNvbnN0IHsgcGFnZSB9ID0gdGhpcy5jb2c7XG4gICAgY29uc3QgaXRlbSA9IHsgLi4uZGVlcENvcHkocGFnZSksIC4uLnZhbHVlIH07XG4gICAgY29uc3QgeyB0b3RhbCB9ID0gaXRlbTtcbiAgICBpZiAodHlwZW9mIHRvdGFsID09PSAnc3RyaW5nJyAmJiB0b3RhbC5sZW5ndGgpIHtcbiAgICAgIHRoaXMudG90YWxUcGwgPSB0b3RhbDtcbiAgICB9IGVsc2UgaWYgKHRvQm9vbGVhbih0b3RhbCkpIHtcbiAgICAgIHRoaXMudG90YWxUcGwgPSB0aGlzLmxvY2FsZS50b3RhbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50b3RhbFRwbCA9ICcnO1xuICAgIH1cbiAgICB0aGlzLl9wYWdlID0gaXRlbTtcbiAgfVxuICBwcml2YXRlIF9wYWdlOiBTVFBhZ2U7XG4gIC8qKiDmmK/lkKbmmL7npLpMb2FkaW5nICovXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBsb2FkaW5nID0gZmFsc2U7XG4gIC8qKiDlu7bov5/mmL7npLrliqDovb3mlYjmnpznmoTml7bpl7TvvIjpmLLmraLpl6rng4HvvIkgKi9cbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgbG9hZGluZ0RlbGF5ID0gMDtcbiAgLyoqIOaYr+WQpuaYvuekuui+ueahhiAqL1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYm9yZGVyZWQgPSBmYWxzZTtcbiAgLyoqIHRhYmxl5aSn5bCPICovXG4gIEBJbnB1dCgpIHNpemU6ICdzbWFsbCcgfCAnbWlkZGxlJyB8ICdkZWZhdWx0JztcbiAgLyoqIOe6teWQkeaUr+aMgea7muWKqO+8jOS5n+WPr+eUqOS6juaMh+Wumua7muWKqOWMuuWfn+eahOmrmOW6pu+8mmB7IHk6ICczMDBweCcsIHg6ICczMDBweCcgfWAgKi9cbiAgQElucHV0KCkgc2Nyb2xsOiB7IHk/OiBzdHJpbmc7IHg/OiBzdHJpbmcgfTtcbiAgLyoqXG4gICAqIOWNleaOkuW6j+inhOWImVxuICAgKiAtIOiLpeS4jeaMh+Wumu+8jOWImei/lOWbnu+8mmBjb2x1bW5OYW1lPWFzY2VuZHxkZXNjZW5kYFxuICAgKiAtIOiLpeaMh+Wumu+8jOWImei/lOWbnu+8mmBzb3J0PWNvbHVtbk5hbWUuKGFzY2VuZHxkZXNjZW5kKWBcbiAgICovXG4gIEBJbnB1dCgpIHNpbmdsZVNvcnQ6IFNUU2luZ2xlU29ydCA9IG51bGw7XG4gIHByaXZhdGUgX211bHRpU29ydDogU1RNdWx0aVNvcnQ7XG4gIC8qKiDmmK/lkKblpJrmjpLluo/vvIzlvZMgYHNvcnRgIOWkmuS4quebuOWQjOWAvOaXtuiHquWKqOWQiOW5tu+8jOW7uuiuruWQjuerr+aUr+aMgeaXtuS9v+eUqCAqL1xuICBASW5wdXQoKVxuICBnZXQgbXVsdGlTb3J0KCkge1xuICAgIHJldHVybiB0aGlzLl9tdWx0aVNvcnQ7XG4gIH1cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBzZXQgbXVsdGlTb3J0KHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicgJiYgIXRvQm9vbGVhbih2YWx1ZSkpIHtcbiAgICAgIHRoaXMuX211bHRpU29ydCA9IG51bGw7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX211bHRpU29ydCA9IHtcbiAgICAgIC4uLih0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnID8gdmFsdWUgOiB7fSksXG4gICAgfTtcbiAgfVxuICBASW5wdXQoKSByb3dDbGFzc05hbWU6IFNUUm93Q2xhc3NOYW1lO1xuICAvKiogYGhlYWRlcmAg5qCH6aKYICovXG4gIEBJbnB1dCgpIGhlYWRlcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIC8qKiBgZm9vdGVyYCDlupXpg6ggKi9cbiAgQElucHV0KCkgZm9vdGVyOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgLyoqIOmineWkliBgYm9keWAg5YaF5a65ICovXG4gIEBJbnB1dCgpIGJvZHk6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZXhwYW5kUm93QnlDbGljayA9IGZhbHNlO1xuICAvKiogYGV4cGFuZGAg5Y+v5bGV5byA77yM5b2T5pWw5o2u5rqQ5Lit5YyF5ousIGBleHBhbmRgIOihqOekuuWxleW8gOeKtuaAgSAqL1xuICBASW5wdXQoKSBleHBhbmQ6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiB7fTsgY29sdW1uOiBTVENvbHVtbiB9PjtcbiAgQElucHV0KCkgbm9SZXN1bHQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSB3aWR0aENvbmZpZzogc3RyaW5nW107XG4gIC8qKiDooYzljZXlh7vlpJrlsJHml7bplb/kuYvnsbvkuLrlj4zlh7vvvIjljZXkvY3vvJrmr6vnp5LvvInvvIzpu5jorqTvvJpgMjAwYCAqL1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSByb3dDbGlja1RpbWUgPSAyMDA7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSByZXNwb25zaXZlSGlkZUhlYWRlckZvb3RlcjogYm9vbGVhbjtcbiAgLyoqIOivt+axguW8guW4uOaXtuWbnuiwgyAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgZXJyb3IgPSBuZXcgRXZlbnRFbWl0dGVyPFNURXJyb3I+KCk7XG4gIC8qKlxuICAgKiDlj5jljJbml7blm57osIPvvIzljIXmi6zvvJpgcGlg44CBYHBzYOOAgWBjaGVja2JveGDjgIFgcmFkaW9g44CBYHNvcnRg44CBYGZpbHRlcmDjgIFgY2xpY2tg44CBYGRibENsaWNrYCDlj5jliqhcbiAgICovXG4gIEBPdXRwdXQoKSByZWFkb25seSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFNUQ2hhbmdlPigpO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KEFMQUlOX0kxOE5fVE9LRU4pIGkxOG5TcnY6IEFsYWluSTE4TlNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgY29nOiBTVENvbmZpZyxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgZXhwb3J0U3J2OiBTVEV4cG9ydCxcbiAgICBwcml2YXRlIG1vZGFsSGVscGVyOiBNb2RhbEhlbHBlcixcbiAgICBwcml2YXRlIGRyYXdlckhlbHBlcjogRHJhd2VySGVscGVyLFxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogYW55LFxuICAgIHByaXZhdGUgY29sdW1uU291cmNlOiBTVENvbHVtblNvdXJjZSxcbiAgICBwcml2YXRlIGRhdGFTb3VyY2U6IFNURGF0YVNvdXJjZSxcbiAgICBwcml2YXRlIGRlbG9uSTE4bjogRGVsb25Mb2NhbGVTZXJ2aWNlLFxuICApIHtcbiAgICBjb25zdCBjb3B5Q29nID0geyAuLi5jb2cgfTtcbiAgICBkZWxldGUgY29weUNvZy5tdWx0aVNvcnQ7XG4gICAgZGVlcE1lcmdlKHRoaXMsIGNvcHlDb2cpO1xuICAgIGlmIChjb2cubXVsdGlTb3J0ICYmIGNvZy5tdWx0aVNvcnQuZ2xvYmFsICE9PSBmYWxzZSkge1xuICAgICAgdGhpcy5tdWx0aVNvcnQgPSB7IC4uLmNvZy5tdWx0aVNvcnQgfTtcbiAgICB9XG5cbiAgICB0aGlzLmRlbG9uSTE4bi5jaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5sb2NhbGUgPSB0aGlzLmRlbG9uSTE4bi5nZXREYXRhKCdzdCcpO1xuICAgICAgaWYgKHRoaXMuX2NvbHVtbnMubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLnBhZ2UgPSB0aGlzLmNsb25lUGFnZTtcbiAgICAgICAgdGhpcy5jZCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaTE4blNydi5jaGFuZ2VcbiAgICAgIC5waXBlKFxuICAgICAgICB0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpLFxuICAgICAgICBmaWx0ZXIoKCkgPT4gdGhpcy5fY29sdW1ucy5sZW5ndGggPiAwKSxcbiAgICAgICkuc3Vic2NyaWJlKCgpID0+IHRoaXMudXBkYXRlQ29sdW1ucygpKTtcbiAgfVxuXG4gIGNkKCkge1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHJlbmRlclRvdGFsKHRvdGFsOiBzdHJpbmcsIHJhbmdlOiBzdHJpbmdbXSkge1xuICAgIHJldHVybiB0aGlzLnRvdGFsVHBsXG4gICAgICA/IHRoaXMudG90YWxUcGxcbiAgICAgICAgLnJlcGxhY2UoJ3t7dG90YWx9fScsIHRvdGFsKVxuICAgICAgICAucmVwbGFjZSgne3tyYW5nZVswXX19JywgcmFuZ2VbMF0pXG4gICAgICAgIC5yZXBsYWNlKCd7e3JhbmdlWzFdfX0nLCByYW5nZVsxXSlcbiAgICAgIDogJyc7XG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHByaXZhdGUgY2hhbmdlRW1pdCh0eXBlOiBTVENoYW5nZVR5cGUsIGRhdGE/OiBhbnkpIHtcbiAgICBjb25zdCByZXM6IFNUQ2hhbmdlID0ge1xuICAgICAgdHlwZSxcbiAgICAgIHBpOiB0aGlzLnBpLFxuICAgICAgcHM6IHRoaXMucHMsXG4gICAgICB0b3RhbDogdGhpcy50b3RhbCxcbiAgICB9O1xuICAgIGlmIChkYXRhICE9IG51bGwpIHtcbiAgICAgIHJlc1t0eXBlXSA9IGRhdGE7XG4gICAgfVxuICAgIHRoaXMuY2hhbmdlLmVtaXQocmVzKTtcbiAgfVxuXG4gIC8vI3JlZ2lvbiBkYXRhXG5cbiAgcHJpdmF0ZSBfbG9hZCgpIHtcbiAgICBjb25zdCB7IHBpLCBwcywgZGF0YSwgcmVxLCByZXMsIHBhZ2UsIHRvdGFsLCBzaW5nbGVTb3J0LCBtdWx0aVNvcnQsIHJvd0NsYXNzTmFtZSB9ID0gdGhpcztcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIHJldHVybiB0aGlzLmRhdGFTb3VyY2VcbiAgICAgIC5wcm9jZXNzKHtcbiAgICAgICAgcGksXG4gICAgICAgIHBzLFxuICAgICAgICB0b3RhbCxcbiAgICAgICAgZGF0YSxcbiAgICAgICAgcmVxLFxuICAgICAgICByZXMsXG4gICAgICAgIHBhZ2UsXG4gICAgICAgIGNvbHVtbnM6IHRoaXMuX2NvbHVtbnMsXG4gICAgICAgIHNpbmdsZVNvcnQsXG4gICAgICAgIG11bHRpU29ydCxcbiAgICAgICAgcm93Q2xhc3NOYW1lLFxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdC5waSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aGlzLnBpID0gcmVzdWx0LnBpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0LnBzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRoaXMucHMgPSByZXN1bHQucHM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQudG90YWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhpcy50b3RhbCA9IHJlc3VsdC50b3RhbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdC5wYWdlU2hvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aGlzLl9pc1BhZ2luYXRpb24gPSByZXN1bHQucGFnZVNob3c7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZGF0YSA9IHJlc3VsdC5saXN0O1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgICAgIH0pXG4gICAgICAudGhlbigoKSA9PiB0aGlzLl9yZWZDaGVjaygpKVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZXJyb3IuZW1pdCh7IHR5cGU6ICdyZXEnLCBlcnJvciB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqIOa4heepuuaJgOacieaVsOaNriAqL1xuICBjbGVhcihjbGVhblN0YXR1cyA9IHRydWUpIHtcbiAgICBpZiAoY2xlYW5TdGF0dXMpIHtcbiAgICAgIHRoaXMuY2xlYXJTdGF0dXMoKTtcbiAgICB9XG4gICAgdGhpcy5fZGF0YS5sZW5ndGggPSAwO1xuICAgIHRoaXMuY2QoKTtcbiAgfVxuXG4gIC8qKiDmuIXnqbrmiYDmnInnirbmgIEgKi9cbiAgY2xlYXJTdGF0dXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xlYXJDaGVjaygpXG4gICAgICAuY2xlYXJSYWRpbygpXG4gICAgICAuY2xlYXJGaWx0ZXIoKVxuICAgICAgLmNsZWFyU29ydCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIOagueaNrumhteeggemHjeaWsOWKoOi9veaVsOaNrlxuICAgKlxuICAgKiBAcGFyYW0gcGkg5oyH5a6a5b2T5YmN6aG156CB77yM6buY6K6k77yaYDFgXG4gICAqIEBwYXJhbSBleHRyYVBhcmFtcyDph43mlrDmjIflrpogYGV4dHJhUGFyYW1zYCDlgLxcbiAgICogQHBhcmFtIG9wdGlvbnMg6YCJ6aG5XG4gICAqL1xuICBsb2FkKHBpID0gMSwgZXh0cmFQYXJhbXM/OiB7fSwgb3B0aW9ucz86IFNUTG9hZE9wdGlvbnMpIHtcbiAgICBpZiAocGkgIT09IC0xKSB0aGlzLnBpID0gcGk7XG4gICAgaWYgKHR5cGVvZiBleHRyYVBhcmFtcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMuX3JlcS5wYXJhbXMgPVxuICAgICAgICBvcHRpb25zICYmIG9wdGlvbnMubWVyZ2VcbiAgICAgICAgICA/IHsgLi4udGhpcy5fcmVxLnBhcmFtcywgLi4uZXh0cmFQYXJhbXMgfVxuICAgICAgICAgIDogZXh0cmFQYXJhbXM7XG4gICAgfVxuICAgIHRoaXMuX2NoYW5nZSgncGknKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDph43mlrDliLfmlrDlvZPliY3pobVcbiAgICogQHBhcmFtIGV4dHJhUGFyYW1zIOmHjeaWsOaMh+WumiBgZXh0cmFQYXJhbXNgIOWAvFxuICAgKi9cbiAgcmVsb2FkKGV4dHJhUGFyYW1zPzoge30sIG9wdGlvbnM/OiBTVExvYWRPcHRpb25zKSB7XG4gICAgdGhpcy5sb2FkKC0xLCBleHRyYVBhcmFtcywgb3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICog6YeN572u5LiU6YeN5paw6K6+572uIGBwaWAg5Li6IGAxYO+8jOWMheWQq+S7peS4i+WAvO+8mlxuICAgKiAtIGBjaGVja2Ag5pWw5o2uXG4gICAqIC0gYHJhZGlvYCDmlbDmja5cbiAgICogLSBgc29ydGAg5pWw5o2uXG4gICAqIC0gYGZpbGV0ZXJgIOaVsOaNrlxuICAgKlxuICAgKiBAcGFyYW0gZXh0cmFQYXJhbXMg6YeN5paw5oyH5a6aIGBleHRyYVBhcmFtc2Ag5YC8XG4gICAqL1xuICByZXNldChleHRyYVBhcmFtcz86IHt9LCBvcHRpb25zPzogU1RMb2FkT3B0aW9ucykge1xuICAgIHRoaXMuY2xlYXJTdGF0dXMoKS5sb2FkKDEsIGV4dHJhUGFyYW1zLCBvcHRpb25zKTtcbiAgfVxuXG4gIHByaXZhdGUgX3RvVG9wKCkge1xuICAgIGlmICghdGhpcy5wYWdlLnRvVG9wKSByZXR1cm47XG4gICAgY29uc3QgZWwgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgaWYgKHRoaXMuc2Nyb2xsKSB7XG4gICAgICBlbC5xdWVyeVNlbGVjdG9yKCcuYW50LXRhYmxlLWJvZHknKS5zY3JvbGxUbygwLCAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAvLyBmaXggaGVhZGVyIGhlaWdodFxuICAgIHRoaXMuZG9jLmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgLT0gdGhpcy5wYWdlLnRvVG9wT2Zmc2V0O1xuICB9XG5cbiAgX2NoYW5nZSh0eXBlOiAncGknIHwgJ3BzJykge1xuICAgIHRoaXMuX2xvYWQoKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuX3RvVG9wKCk7XG4gICAgfSk7XG4gICAgdGhpcy5jaGFuZ2VFbWl0KHR5cGUpO1xuICB9XG5cbiAgX2NsaWNrKGU6IEV2ZW50LCBpdGVtOiBTVERhdGEsIGNvbDogU1RDb2x1bW4pIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCByZXMgPSBjb2wuY2xpY2soaXRlbSwgdGhpcyk7XG4gICAgaWYgKHR5cGVvZiByZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHJlcyk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgcm93Q2xpY2tDb3VudCA9IDA7XG4gIF9yb3dDbGljayhlOiBFdmVudCwgaXRlbTogU1REYXRhLCBpbmRleDogbnVtYmVyKSB7XG4gICAgaWYgKChlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkubm9kZU5hbWUgPT09ICdJTlBVVCcpIHJldHVybjtcbiAgICBjb25zdCB7IGV4cGFuZCwgZXhwYW5kUm93QnlDbGljaywgcm93Q2xpY2tUaW1lIH0gPSB0aGlzO1xuICAgIGlmICghIWV4cGFuZCAmJiBleHBhbmRSb3dCeUNsaWNrKSB7XG4gICAgICBpdGVtLmV4cGFuZCA9ICFpdGVtLmV4cGFuZDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgKyt0aGlzLnJvd0NsaWNrQ291bnQ7XG4gICAgaWYgKHRoaXMucm93Q2xpY2tDb3VudCAhPT0gMSkgcmV0dXJuO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgZGF0YSA9IHsgZSwgaXRlbSwgaW5kZXggfTtcbiAgICAgIGlmICh0aGlzLnJvd0NsaWNrQ291bnQgPT09IDEpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VFbWl0KCdjbGljaycsIGRhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VFbWl0KCdkYmxDbGljaycsIGRhdGEpO1xuICAgICAgfVxuICAgICAgdGhpcy5yb3dDbGlja0NvdW50ID0gMDtcbiAgICB9LCByb3dDbGlja1RpbWUpO1xuICB9XG5cbiAgLyoqIOenu+mZpOafkOihjOaVsOaNriAqL1xuICByZW1vdmVSb3coZGF0YTogU1REYXRhIHwgU1REYXRhW10pIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgIGRhdGEgPSBbZGF0YV07XG4gICAgfVxuXG4gICAgKGRhdGEgYXMgU1REYXRhW10pLm1hcChpdGVtID0+IHRoaXMuX2RhdGEuaW5kZXhPZihpdGVtKSlcbiAgICAgIC5maWx0ZXIocG9zID0+IHBvcyAhPT0gLTEpXG4gICAgICAuZm9yRWFjaChwb3MgPT4gdGhpcy5fZGF0YS5zcGxpY2UocG9zLCAxKSk7XG5cbiAgICB0aGlzLmNkKCk7XG4gIH1cblxuICAvLyNlbmRyZWdpb25cblxuICAvLyNyZWdpb24gc29ydFxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgc29ydChjb2w6IFNUQ29sdW1uLCBpZHg6IG51bWJlciwgdmFsdWU6IGFueSkge1xuICAgIGlmICh0aGlzLm11bHRpU29ydCkge1xuICAgICAgY29sLl9zb3J0LmRlZmF1bHQgPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY29sdW1ucy5mb3JFYWNoKFxuICAgICAgICAoaXRlbSwgaW5kZXgpID0+IChpdGVtLl9zb3J0LmRlZmF1bHQgPSBpbmRleCA9PT0gaWR4ID8gdmFsdWUgOiBudWxsKSxcbiAgICAgICk7XG4gICAgfVxuICAgIHRoaXMuX2xvYWQoKTtcbiAgICBjb25zdCByZXMgPSB7XG4gICAgICB2YWx1ZSxcbiAgICAgIG1hcDogdGhpcy5kYXRhU291cmNlLmdldFJlcVNvcnRNYXAodGhpcy5zaW5nbGVTb3J0LCB0aGlzLm11bHRpU29ydCwgdGhpcy5fY29sdW1ucyksXG4gICAgICBjb2x1bW46IGNvbCxcbiAgICB9O1xuICAgIHRoaXMuY2hhbmdlRW1pdCgnc29ydCcsIHJlcyk7XG4gIH1cblxuICBjbGVhclNvcnQoKSB7XG4gICAgdGhpcy5fY29sdW1ucy5mb3JFYWNoKGl0ZW0gPT4gKGl0ZW0uX3NvcnQuZGVmYXVsdCA9IG51bGwpKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vI2VuZHJlZ2lvblxuXG4gIC8vI3JlZ2lvbiBmaWx0ZXJcblxuICBwcml2YXRlIGhhbmRsZUZpbHRlcihjb2w6IFNUQ29sdW1uKSB7XG4gICAgY29sLmZpbHRlci5kZWZhdWx0ID0gY29sLmZpbHRlci5tZW51cy5maW5kSW5kZXgodyA9PiB3LmNoZWNrZWQpICE9PSAtMTtcbiAgICB0aGlzLl9sb2FkKCk7XG4gICAgdGhpcy5jaGFuZ2VFbWl0KCdmaWx0ZXInLCBjb2wpO1xuICB9XG5cbiAgX2ZpbHRlckNvbmZpcm0oY29sOiBTVENvbHVtbikge1xuICAgIHRoaXMuaGFuZGxlRmlsdGVyKGNvbCk7XG4gIH1cblxuICBfZmlsdGVyQ2xlYXIoY29sOiBTVENvbHVtbikge1xuICAgIGNvbC5maWx0ZXIubWVudXMuZm9yRWFjaChpID0+IChpLmNoZWNrZWQgPSBmYWxzZSkpO1xuICAgIHRoaXMuaGFuZGxlRmlsdGVyKGNvbCk7XG4gIH1cblxuICBfZmlsdGVyUmFkaW8oY29sOiBTVENvbHVtbiwgaXRlbTogU1RDb2x1bW5GaWx0ZXJNZW51LCBjaGVja2VkOiBib29sZWFuKSB7XG4gICAgY29sLmZpbHRlci5tZW51cy5mb3JFYWNoKGkgPT4gKGkuY2hlY2tlZCA9IGZhbHNlKSk7XG4gICAgaXRlbS5jaGVja2VkID0gY2hlY2tlZDtcbiAgfVxuXG4gIGNsZWFyRmlsdGVyKCkge1xuICAgIHRoaXMuX2NvbHVtbnNcbiAgICAgIC5maWx0ZXIodyA9PiB3LmZpbHRlciAmJiB3LmZpbHRlci5kZWZhdWx0ID09PSB0cnVlKVxuICAgICAgLmZvckVhY2goY29sID0+IHtcbiAgICAgICAgY29sLmZpbHRlci5kZWZhdWx0ID0gZmFsc2U7XG4gICAgICAgIGNvbC5maWx0ZXIubWVudXMuZm9yRWFjaChmID0+IChmLmNoZWNrZWQgPSBmYWxzZSkpO1xuICAgICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyNlbmRyZWdpb25cblxuICAvLyNyZWdpb24gY2hlY2tib3hcblxuICAvKiog5riF6Zmk5omA5pyJIGBjaGVja2JveGAgKi9cbiAgY2xlYXJDaGVjaygpOiB0aGlzIHtcbiAgICByZXR1cm4gdGhpcy5fY2hlY2tBbGwoZmFsc2UpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVmQ2hlY2soKTogdGhpcyB7XG4gICAgY29uc3QgdmFsaWREYXRhID0gdGhpcy5fZGF0YS5maWx0ZXIodyA9PiAhdy5kaXNhYmxlZCk7XG4gICAgY29uc3QgY2hlY2tlZExpc3QgPSB2YWxpZERhdGEuZmlsdGVyKHcgPT4gdy5jaGVja2VkID09PSB0cnVlKTtcbiAgICB0aGlzLl9hbGxDaGVja2VkID0gY2hlY2tlZExpc3QubGVuZ3RoID4gMCAmJiBjaGVja2VkTGlzdC5sZW5ndGggPT09IHZhbGlkRGF0YS5sZW5ndGg7XG4gICAgY29uc3QgYWxsVW5DaGVja2VkID0gdmFsaWREYXRhLmV2ZXJ5KHZhbHVlID0+ICF2YWx1ZS5jaGVja2VkKTtcbiAgICB0aGlzLl9pbmRldGVybWluYXRlID0gIXRoaXMuX2FsbENoZWNrZWQgJiYgIWFsbFVuQ2hlY2tlZDtcbiAgICB0aGlzLmNkKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBfY2hlY2tBbGwoY2hlY2tlZD86IGJvb2xlYW4pOiB0aGlzIHtcbiAgICBjaGVja2VkID0gdHlwZW9mIGNoZWNrZWQgPT09ICd1bmRlZmluZWQnID8gdGhpcy5fYWxsQ2hlY2tlZCA6IGNoZWNrZWQ7XG4gICAgdGhpcy5fZGF0YS5maWx0ZXIodyA9PiAhdy5kaXNhYmxlZCkuZm9yRWFjaChpID0+IChpLmNoZWNrZWQgPSBjaGVja2VkKSk7XG4gICAgcmV0dXJuIHRoaXMuX3JlZkNoZWNrKCkuX2NoZWNrTm90aWZ5KCk7XG4gIH1cblxuICBfY2hlY2tTZWxlY3Rpb24oaTogU1REYXRhLCB2YWx1ZTogYm9vbGVhbikge1xuICAgIGkuY2hlY2tlZCA9IHZhbHVlO1xuICAgIHJldHVybiB0aGlzLl9yZWZDaGVjaygpLl9jaGVja05vdGlmeSgpO1xuICB9XG5cbiAgX3Jvd1NlbGVjdGlvbihyb3c6IFNUQ29sdW1uU2VsZWN0aW9uKTogdGhpcyB7XG4gICAgcm93LnNlbGVjdCh0aGlzLl9kYXRhKTtcbiAgICByZXR1cm4gdGhpcy5fcmVmQ2hlY2soKS5fY2hlY2tOb3RpZnkoKTtcbiAgfVxuXG4gIF9jaGVja05vdGlmeSgpOiB0aGlzIHtcbiAgICBjb25zdCByZXMgPSB0aGlzLl9kYXRhLmZpbHRlcih3ID0+ICF3LmRpc2FibGVkICYmIHcuY2hlY2tlZCA9PT0gdHJ1ZSk7XG4gICAgdGhpcy5jaGFuZ2VFbWl0KCdjaGVja2JveCcsIHJlcyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyNlbmRyZWdpb25cblxuICAvLyNyZWdpb24gcmFkaW9cblxuICAvKiog5riF6Zmk5omA5pyJIGByYWRpb2AgKi9cbiAgY2xlYXJSYWRpbygpOiB0aGlzIHtcbiAgICB0aGlzLl9kYXRhLmZpbHRlcih3ID0+IHcuY2hlY2tlZCkuZm9yRWFjaChpdGVtID0+IChpdGVtLmNoZWNrZWQgPSBmYWxzZSkpO1xuICAgIHRoaXMuY2hhbmdlRW1pdCgncmFkaW8nLCBudWxsKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIF9yZWZSYWRpbyhjaGVja2VkOiBib29sZWFuLCBpdGVtOiBTVERhdGEpOiB0aGlzIHtcbiAgICAvLyBpZiAoaXRlbS5kaXNhYmxlZCA9PT0gdHJ1ZSkgcmV0dXJuO1xuICAgIHRoaXMuX2RhdGEuZmlsdGVyKHcgPT4gIXcuZGlzYWJsZWQpLmZvckVhY2goaSA9PiAoaS5jaGVja2VkID0gZmFsc2UpKTtcbiAgICBpdGVtLmNoZWNrZWQgPSBjaGVja2VkO1xuICAgIHRoaXMuY2hhbmdlRW1pdCgncmFkaW8nLCBpdGVtKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vI2VuZHJlZ2lvblxuXG4gIC8vI3JlZ2lvbiBidXR0b25zXG5cbiAgX2J0bkNsaWNrKGU6IEV2ZW50LCByZWNvcmQ6IFNURGF0YSwgYnRuOiBTVENvbHVtbkJ1dHRvbikge1xuICAgIGlmIChlKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICBpZiAoYnRuLnR5cGUgPT09ICdtb2RhbCcgfHwgYnRuLnR5cGUgPT09ICdzdGF0aWMnKSB7XG4gICAgICBjb25zdCB7IG1vZGFsIH0gPSBidG47XG4gICAgICBjb25zdCBvYmogPSB7IFttb2RhbC5wYXJhbXNOYW1lXTogcmVjb3JkIH07XG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgICAodGhpcy5tb2RhbEhlbHBlcltidG4udHlwZSA9PT0gJ21vZGFsJyA/ICdjcmVhdGUnIDogJ2NyZWF0ZVN0YXRpYyddIGFzIGFueSkoXG4gICAgICAgIG1vZGFsLmNvbXBvbmVudCxcbiAgICAgICAgeyAuLi5vYmosIC4uLihtb2RhbC5wYXJhbXMgJiYgbW9kYWwucGFyYW1zKHJlY29yZCkpIH0sXG4gICAgICAgIHsgLi4ubW9kYWwgfSxcbiAgICAgIClcbiAgICAgICAgLnBpcGUoZmlsdGVyKHcgPT4gdHlwZW9mIHcgIT09ICd1bmRlZmluZWQnKSlcbiAgICAgICAgLnN1YnNjcmliZShyZXMgPT4gdGhpcy5idG5DYWxsYmFjayhyZWNvcmQsIGJ0biwgcmVzKSk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChidG4udHlwZSA9PT0gJ2RyYXdlcicpIHtcbiAgICAgIGNvbnN0IHsgZHJhd2VyIH0gPSBidG47XG4gICAgICBjb25zdCBvYmogPSB7IFtkcmF3ZXIucGFyYW1zTmFtZV06IHJlY29yZCB9O1xuICAgICAgdGhpcy5kcmF3ZXJIZWxwZXJcbiAgICAgICAgLmNyZWF0ZShcbiAgICAgICAgICBkcmF3ZXIudGl0bGUsXG4gICAgICAgICAgZHJhd2VyLmNvbXBvbmVudCxcbiAgICAgICAgICB7IC4uLm9iaiwgLi4uKGRyYXdlci5wYXJhbXMgJiYgZHJhd2VyLnBhcmFtcyhyZWNvcmQpKSB9LFxuICAgICAgICAgIHsgLi4uZHJhd2VyIH0sXG4gICAgICAgIClcbiAgICAgICAgLnBpcGUoZmlsdGVyKHcgPT4gdHlwZW9mIHcgIT09ICd1bmRlZmluZWQnKSlcbiAgICAgICAgLnN1YnNjcmliZShyZXMgPT4gdGhpcy5idG5DYWxsYmFjayhyZWNvcmQsIGJ0biwgcmVzKSk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChidG4udHlwZSA9PT0gJ2xpbmsnKSB7XG4gICAgICBjb25zdCBjbGlja1JlcyA9IHRoaXMuYnRuQ2FsbGJhY2socmVjb3JkLCBidG4pO1xuICAgICAgaWYgKHR5cGVvZiBjbGlja1JlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChjbGlja1Jlcyk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuYnRuQ2FsbGJhY2socmVjb3JkLCBidG4pO1xuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBwcml2YXRlIGJ0bkNhbGxiYWNrKHJlY29yZDogU1REYXRhLCBidG46IFNUQ29sdW1uQnV0dG9uLCBtb2RhbD86IGFueSkge1xuICAgIGlmICghYnRuLmNsaWNrKSByZXR1cm47XG4gICAgaWYgKHR5cGVvZiBidG4uY2xpY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICBzd2l0Y2ggKGJ0bi5jbGljaykge1xuICAgICAgICBjYXNlICdsb2FkJzpcbiAgICAgICAgICB0aGlzLmxvYWQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncmVsb2FkJzpcbiAgICAgICAgICB0aGlzLnJlbG9hZCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYnRuLmNsaWNrKHJlY29yZCwgbW9kYWwsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIF9idG5UZXh0KHJlY29yZDogU1REYXRhLCBidG46IFNUQ29sdW1uQnV0dG9uKSB7XG4gICAgaWYgKGJ0bi5mb3JtYXQpIHJldHVybiBidG4uZm9ybWF0KHJlY29yZCwgYnRuKTtcbiAgICByZXR1cm4gYnRuLnRleHQgfHwgJyc7XG4gIH1cblxuICBfdmFsaWRCdG5zKGl0ZW06IFNURGF0YSwgY29sOiBTVENvbHVtbik6IFNUQ29sdW1uQnV0dG9uW10ge1xuICAgIHJldHVybiBjb2wuYnV0dG9ucy5maWx0ZXIoYnRuID0+IGJ0bi5paWYoaXRlbSwgYnRuLCBjb2wpKTtcbiAgfVxuXG4gIC8vI2VuZHJlZ2lvblxuXG4gIC8vI3JlZ2lvbiBleHBvcnRcblxuICAvKipcbiAgICog5a+85Ye65b2T5YmN6aG177yM56Gu5L+d5bey57uP5rOo5YaMIGBYbHN4TW9kdWxlYFxuICAgKiBAcGFyYW0gbmV3RGF0YSDph43mlrDmjIflrprmlbDmja7vvIzkvovlpoLluIzmnJvlr7zlh7rmiYDmnInmlbDmja7pnZ7luLjmnInnlKhcbiAgICogQHBhcmFtIG9wdCDpop3lpJblj4LmlbBcbiAgICovXG4gIGV4cG9ydChuZXdEYXRhPzogU1REYXRhW10sIG9wdD86IFNURXhwb3J0T3B0aW9ucykge1xuICAgIChuZXdEYXRhID8gb2YobmV3RGF0YSkgOiBvZih0aGlzLl9kYXRhKSkuc3Vic2NyaWJlKChyZXM6IFNURGF0YVtdKSA9PlxuICAgICAgdGhpcy5leHBvcnRTcnYuZXhwb3J0KFxuICAgICAgICB7XG4gICAgICAgICAgLi4ub3B0LFxuICAgICAgICAgIC4uLntcbiAgICAgICAgICAgIF9kOiByZXMsXG4gICAgICAgICAgICBfYzogdGhpcy5fY29sdW1ucyxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgKSxcbiAgICApO1xuICB9XG5cbiAgLy8jZW5kcmVnaW9uXG5cbiAgcHJpdmF0ZSB1cGRhdGVDb2x1bW5zKCkge1xuICAgIHRoaXMuX2NvbHVtbnMgPSB0aGlzLmNvbHVtblNvdXJjZS5wcm9jZXNzKHRoaXMuY29sdW1ucyk7XG4gIH1cblxuICBwcml2YXRlIHNldENsYXNzKCkge1xuICAgIHVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMucmVuZGVyZXIsIHtcbiAgICAgIFtgc3RgXTogdHJ1ZSxcbiAgICAgIFtgc3RfX3AtJHt0aGlzLnBhZ2UucGxhY2VtZW50fWBdOiB0aGlzLnBhZ2UucGxhY2VtZW50LFxuICAgICAgW2BhbnQtdGFibGUtcmVwX19oaWRlLWhlYWRlci1mb290ZXJgXTogdGhpcy5yZXNwb25zaXZlSGlkZUhlYWRlckZvb3RlcixcbiAgICB9KTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmNvbHVtblNvdXJjZS5yZXN0b3JlQWxsUmVuZGVyKHRoaXMuX2NvbHVtbnMpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoXG4gICAgY2hhbmdlczogeyBbUCBpbiBrZXlvZiB0aGlzXT86IFNpbXBsZUNoYW5nZSB9ICYgU2ltcGxlQ2hhbmdlcyxcbiAgKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMuY29sdW1ucykge1xuICAgICAgdGhpcy51cGRhdGVDb2x1bW5zKCk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLmRhdGEgJiYgY2hhbmdlcy5kYXRhLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgdGhpcy5fbG9hZCgpO1xuICAgIH1cbiAgICB0aGlzLnNldENsYXNzKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBjb25zdCB7IHVuc3Vic2NyaWJlJCB9ID0gdGhpcztcbiAgICB1bnN1YnNjcmliZSQubmV4dCgpO1xuICAgIHVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=