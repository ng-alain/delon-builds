/**
 * @fileoverview added by tsickle
 * Generated from: st.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __awaiter, __decorate, __metadata } from "tslib";
import { DecimalPipe, DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Inject, Input, Optional, Output, TemplateRef, ViewChild, ViewEncapsulation, } from '@angular/core';
import { Router } from '@angular/router';
import { AlainConfigService, ALAIN_I18N_TOKEN, CNCurrencyPipe, DatePipe, DelonLocaleService, DrawerHelper, ModalHelper, YNPipe, } from '@delon/theme';
import { deepMergeKey, InputBoolean, InputNumber, toBoolean } from '@delon/util';
import { NzTableComponent, NzTableStyleService } from 'ng-zorro-antd/table';
import { from, of, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { STColumnSource } from './st-column-source';
import { STDataSource } from './st-data-source';
import { STExport } from './st-export';
import { STRowSource } from './st-row.directive';
import { ST_DEFULAT_CONFIG } from './st.config';
export class STComponent {
    /**
     * @param {?} i18nSrv
     * @param {?} cdr
     * @param {?} router
     * @param {?} el
     * @param {?} exportSrv
     * @param {?} modalHelper
     * @param {?} drawerHelper
     * @param {?} doc
     * @param {?} columnSource
     * @param {?} dataSource
     * @param {?} delonI18n
     * @param {?} configSrv
     */
    constructor(i18nSrv, cdr, router, el, exportSrv, modalHelper, drawerHelper, doc, columnSource, dataSource, delonI18n, configSrv) {
        this.cdr = cdr;
        this.router = router;
        this.el = el;
        this.exportSrv = exportSrv;
        this.modalHelper = modalHelper;
        this.drawerHelper = drawerHelper;
        this.doc = doc;
        this.columnSource = columnSource;
        this.dataSource = dataSource;
        this.delonI18n = delonI18n;
        this.unsubscribe$ = new Subject();
        this.totalTpl = ``;
        this.rowClickCount = 0;
        this.locale = {};
        this._loading = false;
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
        this.loading = null;
        this.loadingDelay = 0;
        this.bordered = false;
        this.expandRowByClick = false;
        this.expandAccordion = false;
        this.rowClickTime = 200;
        this.responsive = true;
        // tslint:disable-next-line:no-output-native
        this.error = new EventEmitter();
        // tslint:disable-next-line:no-output-native
        this.change = new EventEmitter();
        this.virtualScroll = false;
        this.virtualItemSize = 54;
        this.virtualMaxBufferPx = 200;
        this.virtualMinBufferPx = 100;
        this.virtualForTrackBy = (/**
         * @param {?} index
         * @return {?}
         */
        index => index);
        this.setCog(configSrv.merge('st', ST_DEFULAT_CONFIG));
        this.delonI18n.change.pipe(takeUntil(this.unsubscribe$)).subscribe((/**
         * @return {?}
         */
        () => {
            this.locale = this.delonI18n.getData('st');
            if (this._columns.length > 0) {
                this.updateTotalTpl();
                this.cd();
            }
        }));
        i18nSrv.change
            .pipe(takeUntil(this.unsubscribe$), filter((/**
         * @return {?}
         */
        () => this._columns.length > 0)))
            .subscribe((/**
         * @template THIS
         * @this {THIS}
         * @return {THIS}
         */
        () => this.refreshColumns()));
    }
    /**
     * @return {?}
     */
    get req() {
        return this._req;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set req(value) {
        this._req = deepMergeKey({}, true, this.cog.req, value);
    }
    /**
     * 返回体配置
     * @return {?}
     */
    get res() {
        return this._res;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set res(value) {
        /** @type {?} */
        const item = (this._res = deepMergeKey({}, true, this.cog.res, value));
        /** @type {?} */
        const reName = (/** @type {?} */ (item.reName));
        if (!Array.isArray(reName.list))
            reName.list = (/** @type {?} */ (reName.list)).split('.');
        if (!Array.isArray(reName.total))
            reName.total = (/** @type {?} */ (reName.total)).split('.');
        this._res = item;
    }
    /**
     * @return {?}
     */
    get page() {
        return this._page;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set page(value) {
        this._page = Object.assign(Object.assign({}, this.cog.page), value);
        this.updateTotalTpl();
    }
    /**
     * @return {?}
     */
    get multiSort() {
        return this._multiSort;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set multiSort(value) {
        if (typeof value === 'boolean' && !toBoolean(value)) {
            this._multiSort = undefined;
            return;
        }
        this._multiSort = Object.assign({}, (typeof value === 'object' ? value : {}));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set widthMode(value) {
        this._widthMode = Object.assign(Object.assign({}, this.cog.widthMode), value);
    }
    /**
     * @return {?}
     */
    get widthMode() {
        return this._widthMode;
    }
    /**
     * Get the number of the current page
     * @return {?}
     */
    get count() {
        return this._data.length;
    }
    /**
     * Get the data of the current page
     * @return {?}
     */
    get list() {
        return this._data;
    }
    /**
     * @private
     * @return {?}
     */
    get routerState() {
        const { pi, ps, total } = this;
        return { pi, ps, total };
    }
    /**
     * @private
     * @param {?} cog
     * @return {?}
     */
    setCog(cog) {
        /** @type {?} */
        const copyMultiSort = Object.assign({}, cog.multiSort);
        // Because multiSort.global will affect the result, it should be removed first, and multiSort will be operated again after processing.
        delete cog.multiSort;
        this.cog = cog;
        Object.assign(this, cog);
        if (copyMultiSort.global !== false) {
            this.multiSort = copyMultiSort;
        }
        this.columnSource.setCog(cog);
    }
    /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    cd() {
        (/** @type {?} */ (this)).cdr.detectChanges();
        return (/** @type {?} */ (this));
    }
    /**
     * @param {?} total
     * @param {?} range
     * @return {?}
     */
    renderTotal(total, range) {
        return this.totalTpl
            ? this.totalTpl.replace('{{total}}', total).replace('{{range[0]}}', range[0]).replace('{{range[1]}}', range[1])
            : '';
    }
    /**
     * @param {?} column
     * @return {?}
     */
    isTruncate(column) {
        return !!column.width && this.widthMode.strictBehavior === 'truncate' && column.type !== 'img';
    }
    /**
     * @param {?} column
     * @return {?}
     */
    columnClass(column) {
        return column.className || (this.isTruncate(column) ? 'text-truncate' : null);
    }
    /**
     * @private
     * @param {?} type
     * @param {?=} data
     * @return {?}
     */
    changeEmit(type, data) {
        /** @type {?} */
        const res = {
            type,
            pi: this.pi,
            ps: this.ps,
            total: this.total,
        };
        if (data != null) {
            res[type] = data;
        }
        this.change.emit(res);
    }
    // #region data
    /**
     * 获取过滤后所有数据
     * - 本地数据：包含排序、过滤后不分页数据
     * - 远程数据：不传递 `pi`、`ps` 两个参数
     * @return {?}
     */
    get filteredData() {
        return this.loadData((/** @type {?} */ ({ paginator: false }))).then((/**
         * @param {?} res
         * @return {?}
         */
        res => res.list));
    }
    /**
     * @private
     * @return {?}
     */
    updateTotalTpl() {
        const { total } = this.page;
        if (typeof total === 'string' && total.length) {
            this.totalTpl = total;
        }
        else if (toBoolean(total)) {
            this.totalTpl = this.locale.total;
        }
        else {
            this.totalTpl = '';
        }
    }
    /**
     * @private
     * @param {?} val
     * @return {?}
     */
    setLoading(val) {
        if (this.loading == null) {
            this._loading = val;
        }
    }
    /**
     * @private
     * @param {?=} options
     * @return {?}
     */
    loadData(options) {
        const { pi, ps, data, req, res, page, total, singleSort, multiSort, rowClassName } = this;
        return new Promise((/**
         * @param {?} resolvePromise
         * @param {?} rejectPromise
         * @return {?}
         */
        (resolvePromise, rejectPromise) => {
            if (this.data$) {
                this.data$.unsubscribe();
            }
            this.data$ = this.dataSource
                .process(Object.assign({ pi,
                ps,
                total,
                data,
                req,
                res,
                page, columns: this._columns, singleSort,
                multiSort,
                rowClassName, paginator: true }, options))
                .pipe(takeUntil(this.unsubscribe$))
                .subscribe((/**
             * @param {?} result
             * @return {?}
             */
            result => resolvePromise(result)), (/**
             * @param {?} error
             * @return {?}
             */
            error => rejectPromise(error)));
        }));
    }
    /**
     * @private
     * @return {?}
     */
    loadPageData() {
        return __awaiter(this, void 0, void 0, function* () {
            this.setLoading(true);
            try {
                /** @type {?} */
                const result = yield this.loadData();
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
                this.changeEmit('loaded', result.list);
                return this._refCheck();
            }
            catch (error) {
                this.setLoading(false);
                if (!this.unsubscribe$.isStopped) {
                    this.cdr.detectChanges();
                    this.error.emit({ type: 'req', error });
                }
                return this;
            }
        });
    }
    /**
     * 清空所有数据
     * @template THIS
     * @this {THIS}
     * @param {?=} cleanStatus
     * @return {THIS}
     */
    clear(cleanStatus = true) {
        if (cleanStatus) {
            (/** @type {?} */ (this)).clearStatus();
        }
        (/** @type {?} */ (this))._data = [];
        return (/** @type {?} */ (this)).cd();
    }
    /**
     * 清空所有状态
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    clearStatus() {
        return (/** @type {?} */ (this)).clearCheck().clearRadio().clearFilter().clearSort();
    }
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
    load(pi = 1, extraParams, options) {
        if (pi !== -1)
            (/** @type {?} */ (this)).pi = pi;
        if (typeof extraParams !== 'undefined') {
            (/** @type {?} */ (this)).req.params = options && options.merge ? Object.assign(Object.assign({}, (/** @type {?} */ (this)).req.params), extraParams) : extraParams;
        }
        (/** @type {?} */ (this))._change('pi', options);
        return (/** @type {?} */ (this));
    }
    /**
     * 重新刷新当前页
     * @template THIS
     * @this {THIS}
     * @param {?=} extraParams 重新指定 `extraParams` 值
     * @param {?=} options
     * @return {THIS}
     */
    reload(extraParams, options) {
        return (/** @type {?} */ (this)).load(-1, extraParams, options);
    }
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
    reset(extraParams, options) {
        (/** @type {?} */ (this)).clearStatus().load(1, extraParams, options);
        return (/** @type {?} */ (this));
    }
    /**
     * @private
     * @param {?=} enforce
     * @return {?}
     */
    _toTop(enforce) {
        if (!(enforce == null ? this.page.toTop : enforce))
            return;
        /** @type {?} */
        const el = (/** @type {?} */ (this.el.nativeElement));
        if (this.scroll) {
            (/** @type {?} */ (el.querySelector('.ant-table-body'))).scrollTo(0, 0);
            return;
        }
        el.scrollIntoView();
        // fix header height
        this.doc.documentElement.scrollTop -= (/** @type {?} */ (this.page.toTopOffset));
    }
    /**
     * @param {?} type
     * @param {?=} options
     * @return {?}
     */
    _change(type, options) {
        if (type === 'pi' || (type === 'ps' && this.pi <= Math.ceil(this.total / this.ps))) {
            this.loadPageData().then((/**
             * @return {?}
             */
            () => this._toTop(options === null || options === void 0 ? void 0 : options.toTop)));
        }
        this.changeEmit(type);
    }
    /**
     * @param {?} e
     * @param {?} item
     * @param {?} col
     * @return {?}
     */
    _click(e, item, col) {
        e.preventDefault();
        e.stopPropagation();
        /** @type {?} */
        const res = (/** @type {?} */ (col.click))(item, this);
        if (typeof res === 'string') {
            this.router.navigateByUrl(res, { state: this.routerState });
        }
        return false;
    }
    /**
     * @private
     * @param {?} item
     * @return {?}
     */
    closeOtherExpand(item) {
        if (this.expandAccordion === false)
            return;
        this._data.filter((/**
         * @param {?} i
         * @return {?}
         */
        i => i !== item)).forEach((/**
         * @param {?} i
         * @return {?}
         */
        i => (i.expand = false)));
    }
    /**
     * @param {?} e
     * @param {?} item
     * @param {?} index
     * @return {?}
     */
    _rowClick(e, item, index) {
        if (((/** @type {?} */ (e.target))).nodeName === 'INPUT')
            return;
        const { expand, expandRowByClick, rowClickTime } = this;
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
        () => {
            /** @type {?} */
            const data = { e, item, index };
            if (this.rowClickCount === 1) {
                this.changeEmit('click', data);
            }
            else {
                this.changeEmit('dblClick', data);
            }
            this.rowClickCount = 0;
        }), rowClickTime);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    _expandChange(item) {
        this.closeOtherExpand(item);
        this.changeEmit('expand', item);
    }
    /**
     * Remove a row in the table, like this:
     *
     * ```
     * this.st.removeRow(0)
     * this.st.removeRow(stDataItem)
     * ```
     * @template THIS
     * @this {THIS}
     * @param {?} data
     * @return {THIS}
     */
    removeRow(data) {
        if (typeof data === 'number') {
            (/** @type {?} */ (this))._data.splice(data, 1);
        }
        else {
            if (!Array.isArray(data)) {
                data = [data];
            }
            ((/** @type {?} */ (data)))
                .map((/**
             * @param {?} item
             * @return {?}
             */
            item => (/** @type {?} */ (this))._data.indexOf(item)))
                .filter((/**
             * @param {?} pos
             * @return {?}
             */
            pos => pos !== -1))
                .forEach((/**
             * @param {?} pos
             * @return {?}
             */
            pos => (/** @type {?} */ (this))._data.splice(pos, 1)));
        }
        // recalculate no
        (/** @type {?} */ (this))._columns
            .filter((/**
         * @param {?} w
         * @return {?}
         */
        w => w.type === 'no'))
            .forEach((/**
         * @param {?} c
         * @return {?}
         */
        c => (/** @type {?} */ (this))._data.forEach((/**
         * @param {?} i
         * @param {?} idx
         * @return {?}
         */
        (i, idx) => (i._values[c.__point] = { text: (/** @type {?} */ (this)).dataSource.getNoIndex(i, c, idx), org: idx })))));
        return (/** @type {?} */ (this)).cd();
    }
    /**
     * Sets the row value for the `index` in the table, like this:
     *
     * - `optinos.refreshSchema` Whether to refresh of st schemas
     * - `optinos.emitReload` Whether to trigger a reload http request when data is url
     *
     * ```
     * this.st.setRow(0, { price: 100 })
     * this.st.setRow(0, { price: 100, name: 'asdf' })
     * ```
     * @template THIS
     * @this {THIS}
     * @param {?} index
     * @param {?} item
     * @param {?=} options
     * @return {THIS}
     */
    setRow(index, item, options) {
        options = Object.assign({ refreshSchema: false, emitReload: false }, options);
        (/** @type {?} */ (this))._data[index] = deepMergeKey((/** @type {?} */ (this))._data[index], false, item);
        (/** @type {?} */ (this))._data = (/** @type {?} */ (this)).dataSource.optimizeData({ columns: (/** @type {?} */ (this))._columns, result: (/** @type {?} */ (this))._data, rowClassName: (/** @type {?} */ (this)).rowClassName });
        if (options.refreshSchema) {
            (/** @type {?} */ (this)).resetColumns({ emitReload: options.emitReload });
            return (/** @type {?} */ (this));
        }
        (/** @type {?} */ (this)).cdr.detectChanges();
        return (/** @type {?} */ (this));
    }
    // #endregion
    // #region sort
    /**
     * @param {?} col
     * @param {?} idx
     * @param {?} value
     * @return {?}
     */
    sort(col, idx, value) {
        if (this.multiSort) {
            (/** @type {?} */ (col._sort)).default = value;
            (/** @type {?} */ (col._sort)).tick = this.dataSource.nextSortTick;
        }
        else {
            this._columns.forEach((/**
             * @param {?} item
             * @param {?} index
             * @return {?}
             */
            (item, index) => ((/** @type {?} */ (item._sort)).default = index === idx ? value : null)));
        }
        this.loadPageData();
        /** @type {?} */
        const res = {
            value,
            map: this.dataSource.getReqSortMap(this.singleSort, this.multiSort, this._columns),
            column: col,
        };
        this.changeEmit('sort', res);
    }
    /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    clearSort() {
        (/** @type {?} */ (this))._columns.forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => ((/** @type {?} */ (item._sort)).default = null)));
        return (/** @type {?} */ (this));
    }
    // #endregion
    // #region filter
    /**
     * @private
     * @param {?} col
     * @return {?}
     */
    handleFilter(col) {
        this.columnSource.updateDefault((/** @type {?} */ (col.filter)));
        this.loadPageData();
        this.changeEmit('filter', col);
    }
    /**
     * @param {?} col
     * @return {?}
     */
    _filterConfirm(col) {
        this.handleFilter(col);
    }
    /**
     * @param {?} col
     * @param {?} item
     * @param {?} checked
     * @return {?}
     */
    _filterRadio(col, item, checked) {
        (/** @type {?} */ ((/** @type {?} */ (col.filter)).menus)).forEach((/**
         * @param {?} i
         * @return {?}
         */
        i => (i.checked = false)));
        item.checked = checked;
    }
    /**
     * @param {?} col
     * @return {?}
     */
    _filterClear(col) {
        this.columnSource.cleanFilter(col);
        this.handleFilter(col);
    }
    /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    clearFilter() {
        (/** @type {?} */ (this))._columns.filter((/**
         * @param {?} w
         * @return {?}
         */
        w => w.filter && w.filter.default === true)).forEach((/**
         * @param {?} col
         * @return {?}
         */
        col => (/** @type {?} */ (this)).columnSource.cleanFilter(col)));
        return (/** @type {?} */ (this));
    }
    // #endregion
    // #region checkbox
    /**
     * 清除所有 `checkbox`
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    clearCheck() {
        return (/** @type {?} */ (this))._checkAll(false);
    }
    /**
     * @private
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    _refCheck() {
        /** @type {?} */
        const validData = (/** @type {?} */ (this))._data.filter((/**
         * @param {?} w
         * @return {?}
         */
        w => !w.disabled));
        /** @type {?} */
        const checkedList = validData.filter((/**
         * @param {?} w
         * @return {?}
         */
        w => w.checked === true));
        (/** @type {?} */ (this))._allChecked = checkedList.length > 0 && checkedList.length === validData.length;
        /** @type {?} */
        const allUnChecked = validData.every((/**
         * @param {?} value
         * @return {?}
         */
        value => !value.checked));
        (/** @type {?} */ (this))._indeterminate = !(/** @type {?} */ (this))._allChecked && !allUnChecked;
        (/** @type {?} */ (this))._allCheckedDisabled = (/** @type {?} */ (this))._data.length === (/** @type {?} */ (this))._data.filter((/**
         * @param {?} w
         * @return {?}
         */
        w => w.disabled)).length;
        return (/** @type {?} */ (this)).cd();
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?=} checked
     * @return {THIS}
     */
    _checkAll(checked) {
        checked = typeof checked === 'undefined' ? (/** @type {?} */ (this))._allChecked : checked;
        (/** @type {?} */ (this))._data.filter((/**
         * @param {?} w
         * @return {?}
         */
        w => !w.disabled)).forEach((/**
         * @param {?} i
         * @return {?}
         */
        i => (i.checked = checked)));
        return (/** @type {?} */ (this))._refCheck()._checkNotify();
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} i
     * @param {?} value
     * @return {THIS}
     */
    _checkSelection(i, value) {
        i.checked = value;
        return (/** @type {?} */ (this))._refCheck()._checkNotify();
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} row
     * @return {THIS}
     */
    _rowSelection(row) {
        row.select((/** @type {?} */ (this))._data);
        return (/** @type {?} */ (this))._refCheck()._checkNotify();
    }
    /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    _checkNotify() {
        /** @type {?} */
        const res = (/** @type {?} */ (this))._data.filter((/**
         * @param {?} w
         * @return {?}
         */
        w => !w.disabled && w.checked === true));
        (/** @type {?} */ (this)).changeEmit('checkbox', res);
        return (/** @type {?} */ (this));
    }
    // #endregion
    // #region radio
    /**
     * 清除所有 `radio`
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    clearRadio() {
        (/** @type {?} */ (this))._data.filter((/**
         * @param {?} w
         * @return {?}
         */
        w => w.checked)).forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => (item.checked = false)));
        (/** @type {?} */ (this)).changeEmit('radio', null);
        return (/** @type {?} */ (this));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} checked
     * @param {?} item
     * @return {THIS}
     */
    _refRadio(checked, item) {
        // if (item.disabled === true) return;
        (/** @type {?} */ (this))._data.filter((/**
         * @param {?} w
         * @return {?}
         */
        w => !w.disabled)).forEach((/**
         * @param {?} i
         * @return {?}
         */
        i => (i.checked = false)));
        item.checked = checked;
        (/** @type {?} */ (this)).changeEmit('radio', item);
        return (/** @type {?} */ (this));
    }
    // #endregion
    // #region buttons
    /**
     * @param {?} record
     * @param {?} btn
     * @param {?=} e
     * @return {?}
     */
    _btnClick(record, btn, e) {
        // should be stop propagation when expandRowByClick is true
        if (e && this.expandRowByClick === true) {
            e.stopPropagation();
        }
        if (btn.type === 'modal' || btn.type === 'static') {
            const { modal } = btn;
            /** @type {?} */
            const obj = { [(/** @type {?} */ ((/** @type {?} */ (modal)).paramsName))]: record };
            ((/** @type {?} */ (this.modalHelper[btn.type === 'modal' ? 'create' : 'createStatic'])))((/** @type {?} */ (modal)).component, Object.assign(Object.assign({}, obj), ((/** @type {?} */ (modal)).params && (/** @type {?} */ ((/** @type {?} */ (modal)).params))(record))), deepMergeKey({}, true, this.cog.modal, modal))
                .pipe(filter((/**
             * @param {?} w
             * @return {?}
             */
            w => typeof w !== 'undefined')))
                .subscribe((/**
             * @param {?} res
             * @return {?}
             */
            (res) => this.btnCallback(record, btn, res)));
            return;
        }
        else if (btn.type === 'drawer') {
            const { drawer } = btn;
            /** @type {?} */
            const obj = { [(/** @type {?} */ ((/** @type {?} */ (drawer)).paramsName))]: record };
            this.drawerHelper
                .create((/** @type {?} */ ((/** @type {?} */ (drawer)).title)), (/** @type {?} */ (drawer)).component, Object.assign(Object.assign({}, obj), ((/** @type {?} */ (drawer)).params && (/** @type {?} */ ((/** @type {?} */ (drawer)).params))(record))), deepMergeKey({}, true, this.cog.drawer, drawer))
                .pipe(filter((/**
             * @param {?} w
             * @return {?}
             */
            w => typeof w !== 'undefined')))
                .subscribe((/**
             * @param {?} res
             * @return {?}
             */
            res => this.btnCallback(record, btn, res)));
            return;
        }
        else if (btn.type === 'link') {
            /** @type {?} */
            const clickRes = this.btnCallback(record, btn);
            if (typeof clickRes === 'string') {
                this.router.navigateByUrl(clickRes, { state: this.routerState });
            }
            return;
        }
        this.btnCallback(record, btn);
    }
    /**
     * @private
     * @param {?} record
     * @param {?} btn
     * @param {?=} modal
     * @return {?}
     */
    btnCallback(record, btn, modal) {
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
    }
    /**
     * @param {?} record
     * @param {?} btn
     * @return {?}
     */
    _btnText(record, btn) {
        return typeof btn.text === 'function' ? btn.text(record, btn) : btn.text || '';
    }
    /**
     * @param {?} btns
     * @param {?} item
     * @param {?} col
     * @return {?}
     */
    _validBtns(btns, item, col) {
        return btns.filter((/**
         * @param {?} btn
         * @return {?}
         */
        btn => {
            /** @type {?} */
            const result = (/** @type {?} */ (btn.iif))(item, btn, col);
            /** @type {?} */
            const isRenderDisabled = btn.iifBehavior === 'disabled';
            btn._result = result;
            btn._disabled = !result && isRenderDisabled;
            return result || isRenderDisabled;
        }));
    }
    // #endregion
    // #region export
    /**
     * 导出当前页，确保已经注册 `XlsxModule`
     * @param {?=} newData 重新指定数据；若为 `true` 表示使用 `filteredData` 数据
     * @param {?=} opt 额外参数
     * @return {?}
     */
    export(newData, opt) {
        (newData === true ? from(this.filteredData) : of(newData || this._data)).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        (res) => this.exportSrv.export(Object.assign(Object.assign({}, opt), { _d: res, _c: this._columns }))));
    }
    // #endregion
    /**
     * @return {?}
     */
    get cdkVirtualScrollViewport() {
        return this.orgTable.cdkVirtualScrollViewport;
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    resetColumns(options) {
        options = Object.assign({ emitReload: true }, options);
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
    }
    /**
     * @private
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    refreshColumns() {
        (/** @type {?} */ (this))._columns = (/** @type {?} */ (this)).columnSource.process((/** @type {?} */ (this)).columns);
        return (/** @type {?} */ (this));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.columnSource.restoreAllRender(this._columns);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.columns) {
            this.refreshColumns();
        }
        /** @type {?} */
        const changeData = changes.data;
        if (changeData && changeData.currentValue && !(this.req.lazyLoad && changeData.firstChange)) {
            this.loadPageData();
        }
        if (changes.loading) {
            this._loading = changes.loading.currentValue;
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        const { unsubscribe$ } = this;
        unsubscribe$.next();
        unsubscribe$.complete();
    }
}
STComponent.decorators = [
    { type: Component, args: [{
                selector: 'st',
                exportAs: 'st',
                template: "<ng-template #btnTpl let-i let-btn=\"btn\">\n  <ng-container *ngIf=\"!btn.tooltip\">\n    <ng-template [ngTemplateOutlet]=\"btnItemTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n  </ng-container>\n  <span *ngIf=\"btn.tooltip\" nz-tooltip [nzTooltipTitle]=\"btn.tooltip\">\n    <ng-template [ngTemplateOutlet]=\"btnItemTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n  </span>\n</ng-template>\n<ng-template #btnItemTpl let-i let-btn=\"btn\">\n  <a *ngIf=\"btn.pop\" nz-popconfirm [nzPopconfirmTitle]=\"btn.pop.title\" [nzIcon]=\"btn.pop.icon\"\n    [nzCondition]=\"btn.pop.condition(i)\" [nzCancelText]=\"btn.pop.cancelText\" [nzOkText]=\"btn.pop.okText\"\n    [nzOkType]=\"btn.pop.okType\" (nzOnConfirm)=\"_btnClick(i, btn, $event)\" class=\"st__btn-text\">\n    <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n  </a>\n  <a *ngIf=\"!btn.pop\" (click)=\"_btnClick(i, btn, $event)\" class=\"st__btn-text\">\n    <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n  </a>\n</ng-template>\n<ng-template #btnTextTpl let-i let-btn=\"btn\">\n  <ng-container *ngIf=\"btn.icon\">\n    <i *ngIf=\"!btn.icon.iconfont\" nz-icon [nzType]=\"btn.icon.type\" [nzTheme]=\"btn.icon.theme\" [nzSpin]=\"btn.icon.spin\"\n      [nzTwotoneColor]=\"btn.icon.twoToneColor\"></i>\n    <i *ngIf=\"btn.icon.iconfont\" nz-icon [nzIconfont]=\"btn.icon.iconfont\"></i>\n  </ng-container>\n  <span [innerHTML]=\"_btnText(i, btn)\" [ngClass]=\"{'pl-xs': btn.icon}\"></span>\n</ng-template>\n<ng-template #titleTpl let-i>\n  <span [innerHTML]=\"i._text\"></span>\n  <small *ngIf=\"i.optional\" class=\"st__head-optional\" [innerHTML]=\"i.optional\"></small>\n  <i *ngIf=\"i.optionalHelp\" class=\"st__head-tip\" nz-tooltip [nzTooltipTitle]=\"i.optionalHelp\" nz-icon nzType=\"question-circle\"></i>\n</ng-template>\n<ng-template #bodyTpl let-i let-index=\"index\">\n  <tr [attr.data-index]=\"index\" (click)=\"_rowClick($event, i, index)\" [ngClass]=\"i._rowClassName\">\n    <td *ngIf=\"expand\" [nzShowExpand]=\"expand && i.showExpand !== false\" [(nzExpand)]=\"i.expand\"\n      (nzExpandChange)=\"_expandChange(i)\" nzWidth=\"50px\"></td>\n    <td *ngFor=\"let c of _columns; let cIdx=index\" [nzLeft]=\"c._left\" [nzRight]=\"c._right\" [ngClass]=\"columnClass(c)\" [attr.colspan]=\"c.colSpan\">\n      <span *ngIf=\"responsive\" class=\"ant-table-rep__title\">\n        <ng-template [ngTemplateOutlet]=\"titleTpl\" [ngTemplateOutletContext]=\"{$implicit: c.title }\"></ng-template>\n      </span>\n      <span>\n        <ng-template #render [ngTemplateOutlet]=\"c.__render\" [ngTemplateOutletContext]=\"{$implicit: i, index: index, column: c }\"></ng-template>\n        <ng-container *ngIf=\"!c.__render; else render\">\n          <ng-container [ngSwitch]=\"c.type\">\n            <label *ngSwitchCase=\"'checkbox'\" nz-checkbox [nzDisabled]=\"i.disabled\" [ngModel]=\"i.checked\" (ngModelChange)=\"_checkSelection(i, $event)\"></label>\n            <label *ngSwitchCase=\"'radio'\" nz-radio [nzDisabled]=\"i.disabled\" [ngModel]=\"i.checked\" (ngModelChange)=\"_refRadio($event, i)\"></label>\n            <a *ngSwitchCase=\"'link'\" (click)=\"_click($event, i, c)\" [innerHTML]=\"i._values[cIdx]._text\"></a>\n            <ng-container *ngIf=\"i._values[cIdx].text\">\n              <nz-tag *ngSwitchCase=\"'tag'\" [nzColor]=\"i._values[cIdx].color\">\n                <span [innerHTML]=\"i._values[cIdx]._text\"></span>\n              </nz-tag>\n              <nz-badge *ngSwitchCase=\"'badge'\" [nzStatus]=\"i._values[cIdx].color\" [nzText]=\"i._values[cIdx].text\"></nz-badge>\n            </ng-container>\n            <ng-template *ngSwitchCase=\"'widget'\" st-widget-host [record]=\"i\" [column]=\"c\"></ng-template>\n            <span *ngSwitchDefault [innerHTML]=\"i._values[cIdx]._text\" [attr.title]=\"isTruncate(c) ? i._values[cIdx].text : null\"></span>\n          </ng-container>\n          <ng-container *ngFor=\"let btn of _validBtns(c.buttons, i, c); let last=last\">\n            <a *ngIf=\"btn.children.length > 0\" nz-dropdown [nzDropdownMenu]=\"btnMenu\" nzOverlayClassName=\"st__btn-sub\">\n              <span [innerHTML]=\"_btnText(i, btn)\"></span>\n              <i nz-icon nzType=\"down\"></i>\n            </a>\n            <nz-dropdown-menu #btnMenu=\"nzDropdownMenu\">\n              <ul nz-menu>\n                <ng-container *ngFor=\"let subBtn of _validBtns(btn.children, i, c)\">\n                  <li *ngIf=\"subBtn.type !== 'divider'\" nz-menu-item [class.st__btn-disabled]=\"subBtn._disabled\">\n                    <ng-template [ngTemplateOutlet]=\"btnTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: subBtn }\">\n                    </ng-template>\n                  </li>\n                  <li *ngIf=\"subBtn.type === 'divider'\" nz-menu-divider></li>\n                </ng-container>\n              </ul>\n            </nz-dropdown-menu>\n            <span *ngIf=\"btn.children.length == 0\" [class.st__btn-disabled]=\"btn._disabled\">\n              <ng-template [ngTemplateOutlet]=\"btnTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\">\n              </ng-template>\n            </span>\n            <nz-divider *ngIf=\"!last\" nzType=\"vertical\"></nz-divider>\n          </ng-container>\n          <ng-template [ngIf]=\"!c.__renderExpanded\" [ngTemplateOutlet]=\"c.__renderExpanded\" [ngTemplateOutletContext]=\"{$implicit: i, index: index, column: c }\"></ng-template>\n        </ng-container>\n      </span>\n    </td>\n  </tr>\n  <tr [nzExpand]=\"i.expand\">\n    <td></td>\n    <td [attr.colspan]=\"_columns.length\">\n      <ng-template [ngTemplateOutlet]=\"expand\" [ngTemplateOutletContext]=\"{$implicit: i, index: index }\"></ng-template>\n    </td>\n  </tr>\n</ng-template>\n<ng-template #chkAllTpl let-custom>\n  <label nz-checkbox class=\"st__checkall\" [nzDisabled]=\"_allCheckedDisabled\" [(ngModel)]=\"_allChecked\"\n    [nzIndeterminate]=\"_indeterminate\" (ngModelChange)=\"_checkAll()\"\n    [class.ant-table-selection-select-all-custom]=\"custom\"></label>\n</ng-template>\n<nz-table #table [nzData]=\"_data\" [(nzPageIndex)]=\"pi\" (nzPageIndexChange)=\"_change('pi')\" [(nzPageSize)]=\"ps\"\n  (nzPageSizeChange)=\"_change('ps')\" [nzTotal]=\"total\" [nzShowPagination]=\"_isPagination\" [nzFrontPagination]=\"false\"\n  [nzBordered]=\"bordered\" [nzSize]=\"size\" [nzLoading]=\"_loading\" [nzLoadingDelay]=\"loadingDelay\"\n  [nzLoadingIndicator]=\"loadingIndicator\" [nzTitle]=\"header\" [nzFooter]=\"footer\" [nzScroll]=\"scroll\"\n  [nzVirtualItemSize]=\"virtualItemSize\" [nzVirtualMaxBufferPx]=\"virtualMaxBufferPx\" [nzVirtualMinBufferPx]=\"virtualMinBufferPx\" [nzVirtualForTrackBy]=\"virtualForTrackBy\"\n  [nzNoResult]=\"noResult\" [nzPageSizeOptions]=\"page.pageSizes\" [nzShowQuickJumper]=\"page.showQuickJumper\" [nzShowSizeChanger]=\"page.showSize\" [nzPaginationPosition]=\"page.position\" [nzShowTotal]=\"totalTpl\">\n  <thead class=\"st__head\">\n    <tr>\n      <th *ngIf=\"expand\" [nzShowExpand]=\"expand\" nzWidth=\"50px\"></th>\n      <th *ngFor=\"let c of _columns; let index=index\" [nzWidth]=\"c.width\" [nzLeft]=\"c._left\" [nzRight]=\"c._right\"\n        [ngClass]=\"c.className\" [attr.colspan]=\"c.colSpan\" [attr.data-col]=\"c.indexKey\" [nzShowSort]=\"c._sort.enabled\"\n        [nzSortOrder]=\"c._sort.default\" (nzSortOrderChange)=\"sort(c, index, $event)\" [nzCustomFilter]=\"c.filter\">\n        <ng-template #renderTitle [ngTemplateOutlet]=\"c.__renderTitle\"\n          [ngTemplateOutletContext]=\"{$implicit: c, index: index }\"></ng-template>\n        <ng-container *ngIf=\"!c.__renderTitle; else renderTitle\">\n          <ng-container [ngSwitch]=\"c.type\">\n            <ng-container *ngSwitchCase=\"'checkbox'\">\n              <ng-container *ngIf=\"c.selections.length === 0\">\n                <ng-template [ngTemplateOutlet]=\"chkAllTpl\" [ngTemplateOutletContext]=\"{$implicit: false }\">\n                </ng-template>\n              </ng-container>\n              <div *ngIf=\"c.selections.length > 0\" class=\"ant-table-selection\">\n                <ng-template [ngTemplateOutlet]=\"chkAllTpl\" [ngTemplateOutletContext]=\"{$implicit: true }\">\n                </ng-template>\n                <div *ngIf=\"c.selections.length\" nz-dropdown nzPlacement=\"bottomLeft\" [nzDropdownMenu]=\"selectionMenu\" class=\"ant-table-selection-down st__checkall-selection\">\n                  <i nz-icon nzType=\"down\"></i>\n                </div>\n                <nz-dropdown-menu #selectionMenu=\"nzDropdownMenu\">\n                  <ul nz-menu class=\"ant-table-selection-menu\">\n                    <li nz-menu-item *ngFor=\"let rw of c.selections\" (click)=\"_rowSelection(rw)\" [innerHTML]=\"rw.text\">\n                    </li>\n                  </ul>\n                </nz-dropdown-menu>\n              </div>\n            </ng-container>\n            <ng-container *ngSwitchDefault>\n              <ng-template [ngTemplateOutlet]=\"titleTpl\" [ngTemplateOutletContext]=\"{$implicit: c.title }\">\n              </ng-template>\n            </ng-container>\n          </ng-container>\n        </ng-container>\n        <div nz-th-extra *ngIf=\"c.filter\" class=\"ant-table-filter-trigger-container st__filter\" [class.ant-table-filter-trigger-container-open]=\"c.filter.visible\">\n          <span class=\"ant-table-filter-trigger\" [class.ant-table-filter-open]=\"c.filter.default\" [class.active]=\"c.filter.visible\"\n            nz-dropdown [nzDropdownMenu]=\"filterMenu\" nzTrigger=\"click\" [nzClickHide]=\"false\" [(nzVisible)]=\"c.filter.visible\" nzOverlayClassName=\"st__filter-wrap\">\n            <i nz-icon [nzType]=\"c.filter.icon.type\" [nzTheme]=\"c.filter.icon.theme\"></i>\n          </span>\n          <nz-dropdown-menu #filterMenu=\"nzDropdownMenu\">\n            <div class=\"ant-table-filter-dropdown\">\n              <ng-container [ngSwitch]=\"c.filter.type\">\n                <div *ngSwitchCase=\"'keyword'\" class=\"st__filter-keyword\">\n                  <input type=\"text\" nz-input [attr.placeholder]=\"c.filter.menus[0].text\"\n                    [(ngModel)]=\"c.filter.menus[0].value\" />\n                </div>\n                <ul *ngSwitchDefault nz-menu>\n                  <ng-container *ngIf=\"c.filter.multiple\">\n                    <li nz-menu-item *ngFor=\"let filter of c.filter.menus\">\n                      <label nz-checkbox [(ngModel)]=\"filter.checked\">{{filter.text}}</label>\n                    </li>\n                  </ng-container>\n                  <ng-container *ngIf=\"!c.filter.multiple\">\n                    <li nz-menu-item *ngFor=\"let filter of c.filter.menus\">\n                      <label nz-radio [ngModel]=\"filter.checked\"\n                        (ngModelChange)=\"_filterRadio(c, filter, $event)\">{{filter.text}}</label>\n                    </li>\n                  </ng-container>\n                </ul>\n              </ng-container>\n              <div class=\"ant-table-filter-dropdown-btns\">\n                <a class=\"ant-table-filter-dropdown-link confirm\" (click)=\"c.filter.visible = false\">\n                  <span (click)=\"_filterConfirm(c)\">{{c.filter.confirmText || locale.filterConfirm}}</span>\n                </a>\n                <a class=\"ant-table-filter-dropdown-link clear\" (click)=\"c.filter.visible = false\">\n                  <span (click)=\"_filterClear(c)\">{{c.filter.clearText || locale.filterReset}}</span>\n                </a>\n              </div>\n            </div>\n          </nz-dropdown-menu>\n        </div>\n      </th>\n    </tr>\n  </thead>\n  <tbody class=\"st__body\">\n    <ng-container *ngIf=\"!_loading\">\n      <ng-template [ngTemplateOutlet]=\"bodyHeader\" [ngTemplateOutletContext]=\"{$implicit: _statistical }\"></ng-template>\n    </ng-container>\n    <ng-container *ngIf=\"!virtualScroll\">\n      <ng-container *ngFor=\"let i of _data; let index=index\">\n        <ng-template [ngTemplateOutlet]=\"bodyTpl\" [ngTemplateOutletContext]=\"{$implicit: i, index: index }\">\n        </ng-template>\n      </ng-container>\n    </ng-container>\n    <ng-container *ngIf=\"virtualScroll\">\n      <ng-template nz-virtual-scroll let-i let-index=\"index\">\n        <ng-template [ngTemplateOutlet]=\"bodyTpl\" [ngTemplateOutletContext]=\"{$implicit: i, index: index }\">\n        </ng-template>\n      </ng-template>\n    </ng-container>\n    <ng-container *ngIf=\"!_loading\">\n      <ng-template [ngTemplateOutlet]=\"body\" [ngTemplateOutletContext]=\"{$implicit: _statistical }\"></ng-template>\n    </ng-container>\n  </tbody>\n  <ng-template #totalTpl let-range=\"range\" let-total>{{ renderTotal(total, range) }}</ng-template>\n</nz-table>\n",
                providers: [NzTableStyleService, STDataSource, STRowSource, STColumnSource, STExport, CNCurrencyPipe, DatePipe, YNPipe, DecimalPipe],
                host: {
                    '[class.st]': `true`,
                    '[class.st__p-left]': `page.placement === 'left'`,
                    '[class.st__p-center]': `page.placement === 'center'`,
                    '[class.st__width-strict]': `widthMode.type === 'strict'`,
                    '[class.ant-table-rep]': `responsive`,
                    '[class.ant-table-rep__hide-header-footer]': `responsiveHideHeaderFooter`,
                },
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
STComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [ALAIN_I18N_TOKEN,] }] },
    { type: ChangeDetectorRef },
    { type: Router },
    { type: ElementRef },
    { type: STExport },
    { type: ModalHelper },
    { type: DrawerHelper },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: STColumnSource },
    { type: STDataSource },
    { type: DelonLocaleService },
    { type: AlainConfigService }
];
STComponent.propDecorators = {
    orgTable: [{ type: ViewChild, args: ['table', { static: false },] }],
    req: [{ type: Input }],
    res: [{ type: Input }],
    page: [{ type: Input }],
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
    singleSort: [{ type: Input }],
    multiSort: [{ type: Input }],
    rowClassName: [{ type: Input }],
    widthMode: [{ type: Input }],
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
    change: [{ type: Output }],
    virtualScroll: [{ type: Input }],
    virtualItemSize: [{ type: Input }],
    virtualMaxBufferPx: [{ type: Input }],
    virtualMinBufferPx: [{ type: Input }],
    virtualForTrackBy: [{ type: Input }]
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
    InputNumber(),
    __metadata("design:type", Object)
], STComponent.prototype, "loadingDelay", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], STComponent.prototype, "bordered", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], STComponent.prototype, "expandRowByClick", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], STComponent.prototype, "expandAccordion", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], STComponent.prototype, "rowClickTime", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], STComponent.prototype, "responsive", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Boolean)
], STComponent.prototype, "responsiveHideHeaderFooter", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], STComponent.prototype, "virtualScroll", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], STComponent.prototype, "virtualItemSize", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], STComponent.prototype, "virtualMaxBufferPx", void 0);
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], STComponent.prototype, "virtualMinBufferPx", void 0);
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
    STComponent.prototype.data$;
    /**
     * @type {?}
     * @private
     */
    STComponent.prototype.totalTpl;
    /**
     * @type {?}
     * @private
     */
    STComponent.prototype.cog;
    /**
     * @type {?}
     * @private
     */
    STComponent.prototype.rowClickCount;
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
    /**
     * @type {?}
     * @private
     */
    STComponent.prototype._page;
    /**
     * @type {?}
     * @private
     */
    STComponent.prototype._widthMode;
    /** @type {?} */
    STComponent.prototype.locale;
    /** @type {?} */
    STComponent.prototype._loading;
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
    STComponent.prototype.orgTable;
    /** @type {?} */
    STComponent.prototype.data;
    /** @type {?} */
    STComponent.prototype.columns;
    /** @type {?} */
    STComponent.prototype.ps;
    /** @type {?} */
    STComponent.prototype.pi;
    /** @type {?} */
    STComponent.prototype.total;
    /** @type {?} */
    STComponent.prototype.loading;
    /** @type {?} */
    STComponent.prototype.loadingDelay;
    /** @type {?} */
    STComponent.prototype.loadingIndicator;
    /** @type {?} */
    STComponent.prototype.bordered;
    /** @type {?} */
    STComponent.prototype.size;
    /** @type {?} */
    STComponent.prototype.scroll;
    /** @type {?} */
    STComponent.prototype.singleSort;
    /**
     * @type {?}
     * @private
     */
    STComponent.prototype._multiSort;
    /** @type {?} */
    STComponent.prototype.rowClassName;
    /** @type {?} */
    STComponent.prototype.header;
    /** @type {?} */
    STComponent.prototype.footer;
    /** @type {?} */
    STComponent.prototype.bodyHeader;
    /** @type {?} */
    STComponent.prototype.body;
    /** @type {?} */
    STComponent.prototype.expandRowByClick;
    /** @type {?} */
    STComponent.prototype.expandAccordion;
    /** @type {?} */
    STComponent.prototype.expand;
    /** @type {?} */
    STComponent.prototype.noResult;
    /** @type {?} */
    STComponent.prototype.widthConfig;
    /** @type {?} */
    STComponent.prototype.rowClickTime;
    /** @type {?} */
    STComponent.prototype.responsive;
    /** @type {?} */
    STComponent.prototype.responsiveHideHeaderFooter;
    /** @type {?} */
    STComponent.prototype.error;
    /** @type {?} */
    STComponent.prototype.change;
    /** @type {?} */
    STComponent.prototype.virtualScroll;
    /** @type {?} */
    STComponent.prototype.virtualItemSize;
    /** @type {?} */
    STComponent.prototype.virtualMaxBufferPx;
    /** @type {?} */
    STComponent.prototype.virtualMinBufferPx;
    /** @type {?} */
    STComponent.prototype.virtualForTrackBy;
    /**
     * @type {?}
     * @private
     */
    STComponent.prototype.cdr;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9zdC8iLCJzb3VyY2VzIjpbInN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3hELE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBR0wsUUFBUSxFQUNSLE1BQU0sRUFHTixXQUFXLEVBRVgsU0FBUyxFQUNULGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUNMLGtCQUFrQixFQUdsQixnQkFBZ0IsRUFDaEIsY0FBYyxFQUNkLFFBQVEsRUFDUixrQkFBa0IsRUFDbEIsWUFBWSxFQUVaLFdBQVcsRUFDWCxNQUFNLEdBQ1AsTUFBTSxjQUFjLENBQUM7QUFDdEIsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUVqRixPQUFPLEVBQUUsZ0JBQWdCLEVBQWUsbUJBQW1CLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN6RixPQUFPLEVBQUUsSUFBSSxFQUFjLEVBQUUsRUFBRSxPQUFPLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQ25FLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxZQUFZLEVBQTJDLE1BQU0sa0JBQWtCLENBQUM7QUFDekYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN2QyxPQUFPLEVBQUUsV0FBVyxF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SUFFN0QsNEJBQXVEOztJQUV2RCw2QkFBeUQ7O0lBQ3pELG9DQUErQzs7SUFDL0Msc0NBQTZDOztJQUM3Qyx5Q0FBaUQ7O0lBQ2pELHlDQUFpRDs7SUFDakQsd0NBQTBFOzs7OztJQXVCeEUsMEJBQThCOzs7OztJQUM5Qiw2QkFBc0I7Ozs7O0lBQ3RCLHlCQUFzQjs7Ozs7SUFDdEIsZ0NBQTJCOzs7OztJQUMzQixrQ0FBZ0M7Ozs7O0lBQ2hDLG1DQUFrQzs7Ozs7SUFDbEMsMEJBQWtDOzs7OztJQUNsQyxtQ0FBb0M7Ozs7O0lBQ3BDLGlDQUFnQzs7Ozs7SUFDaEMsZ0NBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGVjaW1hbFBpcGUsIERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2UsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBUcmFja0J5RnVuY3Rpb24sXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIEFsYWluQ29uZmlnU2VydmljZSxcbiAgQWxhaW5JMThOU2VydmljZSxcbiAgQWxhaW5TVENvbmZpZyxcbiAgQUxBSU5fSTE4Tl9UT0tFTixcbiAgQ05DdXJyZW5jeVBpcGUsXG4gIERhdGVQaXBlLFxuICBEZWxvbkxvY2FsZVNlcnZpY2UsXG4gIERyYXdlckhlbHBlcixcbiAgTG9jYWxlRGF0YSxcbiAgTW9kYWxIZWxwZXIsXG4gIFlOUGlwZSxcbn0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IGRlZXBNZXJnZUtleSwgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciwgdG9Cb29sZWFuIH0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IE56VGFibGVDb21wb25lbnQsIE56VGFibGVEYXRhLCBOelRhYmxlU3R5bGVTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC90YWJsZSc7XG5pbXBvcnQgeyBmcm9tLCBPYnNlcnZhYmxlLCBvZiwgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFNUQ29sdW1uU291cmNlIH0gZnJvbSAnLi9zdC1jb2x1bW4tc291cmNlJztcbmltcG9ydCB7IFNURGF0YVNvdXJjZSwgU1REYXRhU291cmNlT3B0aW9ucywgU1REYXRhU291cmNlUmVzdWx0IH0gZnJvbSAnLi9zdC1kYXRhLXNvdXJjZSc7XG5pbXBvcnQgeyBTVEV4cG9ydCB9IGZyb20gJy4vc3QtZXhwb3J0JztcbmltcG9ydCB7IFNUUm93U291cmNlIH0gZnJvbSAnLi9zdC1yb3cuZGlyZWN0aXZlJztcbmltcG9ydCB7IFNUX0RFRlVMQVRfQ09ORklHIH0gZnJvbSAnLi9zdC5jb25maWcnO1xuaW1wb3J0IHtcbiAgU1RDaGFuZ2UsXG4gIFNUQ2hhbmdlVHlwZSxcbiAgU1RDb2x1bW4sXG4gIFNUQ29sdW1uQnV0dG9uLFxuICBTVENvbHVtbkZpbHRlck1lbnUsXG4gIFNUQ29sdW1uU2VsZWN0aW9uLFxuICBTVERhdGEsXG4gIFNURXJyb3IsXG4gIFNURXhwb3J0T3B0aW9ucyxcbiAgU1RMb2FkT3B0aW9ucyxcbiAgU1RNdWx0aVNvcnQsXG4gIFNUUGFnZSxcbiAgU1RSZXEsXG4gIFNUUmVzLFxuICBTVFJlc2V0Q29sdW1uc09wdGlvbixcbiAgU1RSb3dDbGFzc05hbWUsXG4gIFNUU2luZ2xlU29ydCxcbiAgU1RTdGF0aXN0aWNhbFJlc3VsdHMsXG4gIFNUV2lkdGhNb2RlLFxufSBmcm9tICcuL3N0LmludGVyZmFjZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdCcsXG4gIGV4cG9ydEFzOiAnc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3QuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFtOelRhYmxlU3R5bGVTZXJ2aWNlLCBTVERhdGFTb3VyY2UsIFNUUm93U291cmNlLCBTVENvbHVtblNvdXJjZSwgU1RFeHBvcnQsIENOQ3VycmVuY3lQaXBlLCBEYXRlUGlwZSwgWU5QaXBlLCBEZWNpbWFsUGlwZV0sXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLnN0XSc6IGB0cnVlYCxcbiAgICAnW2NsYXNzLnN0X19wLWxlZnRdJzogYHBhZ2UucGxhY2VtZW50ID09PSAnbGVmdCdgLFxuICAgICdbY2xhc3Muc3RfX3AtY2VudGVyXSc6IGBwYWdlLnBsYWNlbWVudCA9PT0gJ2NlbnRlcidgLFxuICAgICdbY2xhc3Muc3RfX3dpZHRoLXN0cmljdF0nOiBgd2lkdGhNb2RlLnR5cGUgPT09ICdzdHJpY3QnYCxcbiAgICAnW2NsYXNzLmFudC10YWJsZS1yZXBdJzogYHJlc3BvbnNpdmVgLFxuICAgICdbY2xhc3MuYW50LXRhYmxlLXJlcF9faGlkZS1oZWFkZXItZm9vdGVyXSc6IGByZXNwb25zaXZlSGlkZUhlYWRlckZvb3RlcmAsXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgU1RDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgdW5zdWJzY3JpYmUkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSBkYXRhJDogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIHRvdGFsVHBsID0gYGA7XG4gIHByaXZhdGUgY29nOiBBbGFpblNUQ29uZmlnO1xuICBwcml2YXRlIHJvd0NsaWNrQ291bnQgPSAwO1xuICBwcml2YXRlIF9yZXE6IFNUUmVxO1xuICBwcml2YXRlIF9yZXM6IFNUUmVzO1xuICBwcml2YXRlIF9wYWdlOiBTVFBhZ2U7XG4gIHByaXZhdGUgX3dpZHRoTW9kZTogU1RXaWR0aE1vZGU7XG4gIGxvY2FsZTogTG9jYWxlRGF0YSA9IHt9O1xuICBfbG9hZGluZyA9IGZhbHNlO1xuICBfZGF0YTogU1REYXRhW10gPSBbXTtcbiAgX3N0YXRpc3RpY2FsOiBTVFN0YXRpc3RpY2FsUmVzdWx0cyA9IHt9O1xuICBfaXNQYWdpbmF0aW9uID0gdHJ1ZTtcbiAgX2FsbENoZWNrZWQgPSBmYWxzZTtcbiAgX2FsbENoZWNrZWREaXNhYmxlZCA9IGZhbHNlO1xuICBfaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICBfY29sdW1uczogU1RDb2x1bW5bXSA9IFtdO1xuICBAVmlld0NoaWxkKCd0YWJsZScsIHsgc3RhdGljOiBmYWxzZSB9KSByZWFkb25seSBvcmdUYWJsZTogTnpUYWJsZUNvbXBvbmVudDtcblxuICBASW5wdXQoKVxuICBnZXQgcmVxKCkge1xuICAgIHJldHVybiB0aGlzLl9yZXE7XG4gIH1cbiAgc2V0IHJlcSh2YWx1ZTogU1RSZXEpIHtcbiAgICB0aGlzLl9yZXEgPSBkZWVwTWVyZ2VLZXkoe30sIHRydWUsIHRoaXMuY29nLnJlcSwgdmFsdWUpO1xuICB9XG4gIC8qKiDov5Tlm57kvZPphY3nva4gKi9cbiAgQElucHV0KClcbiAgZ2V0IHJlcygpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzO1xuICB9XG4gIHNldCByZXModmFsdWU6IFNUUmVzKSB7XG4gICAgY29uc3QgaXRlbSA9ICh0aGlzLl9yZXMgPSBkZWVwTWVyZ2VLZXkoe30sIHRydWUsIHRoaXMuY29nLnJlcywgdmFsdWUpKTtcbiAgICBjb25zdCByZU5hbWUgPSBpdGVtLnJlTmFtZSE7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHJlTmFtZS5saXN0KSkgcmVOYW1lLmxpc3QgPSByZU5hbWUubGlzdCEuc3BsaXQoJy4nKTtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkocmVOYW1lLnRvdGFsKSkgcmVOYW1lLnRvdGFsID0gcmVOYW1lLnRvdGFsIS5zcGxpdCgnLicpO1xuICAgIHRoaXMuX3JlcyA9IGl0ZW07XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IHBhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhZ2U7XG4gIH1cbiAgc2V0IHBhZ2UodmFsdWU6IFNUUGFnZSkge1xuICAgIHRoaXMuX3BhZ2UgPSB7IC4uLnRoaXMuY29nLnBhZ2UsIC4uLnZhbHVlIH07XG4gICAgdGhpcy51cGRhdGVUb3RhbFRwbCgpO1xuICB9XG4gIEBJbnB1dCgpIGRhdGE6IHN0cmluZyB8IFNURGF0YVtdIHwgT2JzZXJ2YWJsZTxTVERhdGFbXT47XG4gIEBJbnB1dCgpIGNvbHVtbnM6IFNUQ29sdW1uW10gPSBbXTtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgcHMgPSAxMDtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgcGkgPSAxO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSB0b3RhbCA9IDA7XG4gIEBJbnB1dCgpIGxvYWRpbmc6IGJvb2xlYW4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgbG9hZGluZ0RlbGF5ID0gMDtcbiAgQElucHV0KCkgbG9hZGluZ0luZGljYXRvcjogVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBib3JkZXJlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBzaXplOiAnc21hbGwnIHwgJ21pZGRsZScgfCAnZGVmYXVsdCc7XG4gIEBJbnB1dCgpIHNjcm9sbDogeyB5Pzogc3RyaW5nOyB4Pzogc3RyaW5nIH07XG4gIEBJbnB1dCgpIHNpbmdsZVNvcnQ6IFNUU2luZ2xlU29ydDtcbiAgcHJpdmF0ZSBfbXVsdGlTb3J0PzogU1RNdWx0aVNvcnQ7XG4gIEBJbnB1dCgpXG4gIGdldCBtdWx0aVNvcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX211bHRpU29ydDtcbiAgfVxuICBzZXQgbXVsdGlTb3J0KHZhbHVlOiBOelNhZmVBbnkpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicgJiYgIXRvQm9vbGVhbih2YWx1ZSkpIHtcbiAgICAgIHRoaXMuX211bHRpU29ydCA9IHVuZGVmaW5lZDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fbXVsdGlTb3J0ID0ge1xuICAgICAgLi4uKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgPyB2YWx1ZSA6IHt9KSxcbiAgICB9O1xuICB9XG4gIEBJbnB1dCgpIHJvd0NsYXNzTmFtZTogU1RSb3dDbGFzc05hbWU7XG4gIEBJbnB1dCgpXG4gIHNldCB3aWR0aE1vZGUodmFsdWU6IFNUV2lkdGhNb2RlKSB7XG4gICAgdGhpcy5fd2lkdGhNb2RlID0geyAuLi50aGlzLmNvZy53aWR0aE1vZGUsIC4uLnZhbHVlIH07XG4gIH1cbiAgZ2V0IHdpZHRoTW9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fd2lkdGhNb2RlO1xuICB9XG4gIEBJbnB1dCgpIGhlYWRlcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIGZvb3Rlcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIGJvZHlIZWFkZXI6IFRlbXBsYXRlUmVmPFNUU3RhdGlzdGljYWxSZXN1bHRzPjtcbiAgQElucHV0KCkgYm9keTogVGVtcGxhdGVSZWY8U1RTdGF0aXN0aWNhbFJlc3VsdHM+O1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZXhwYW5kUm93QnlDbGljayA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZXhwYW5kQWNjb3JkaW9uID0gZmFsc2U7XG4gIEBJbnB1dCgpIGV4cGFuZDogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IHt9OyBjb2x1bW46IFNUQ29sdW1uIH0+O1xuICBASW5wdXQoKSBub1Jlc3VsdDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIHdpZHRoQ29uZmlnOiBzdHJpbmdbXTtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgcm93Q2xpY2tUaW1lID0gMjAwO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgcmVzcG9uc2l2ZTogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSByZXNwb25zaXZlSGlkZUhlYWRlckZvb3RlcjogYm9vbGVhbjtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLW91dHB1dC1uYXRpdmVcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGVycm9yID0gbmV3IEV2ZW50RW1pdHRlcjxTVEVycm9yPigpO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tb3V0cHV0LW5hdGl2ZVxuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxTVENoYW5nZT4oKTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHZpcnR1YWxTY3JvbGwgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgdmlydHVhbEl0ZW1TaXplID0gNTQ7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHZpcnR1YWxNYXhCdWZmZXJQeCA9IDIwMDtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgdmlydHVhbE1pbkJ1ZmZlclB4ID0gMTAwO1xuICBASW5wdXQoKSB2aXJ0dWFsRm9yVHJhY2tCeTogVHJhY2tCeUZ1bmN0aW9uPE56VGFibGVEYXRhPiA9IGluZGV4ID0+IGluZGV4O1xuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG51bWJlciBvZiB0aGUgY3VycmVudCBwYWdlXG4gICAqL1xuICBnZXQgY291bnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YS5sZW5ndGg7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBkYXRhIG9mIHRoZSBjdXJyZW50IHBhZ2VcbiAgICovXG4gIGdldCBsaXN0KCk6IFNURGF0YVtdIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IHJvdXRlclN0YXRlKCkge1xuICAgIGNvbnN0IHsgcGksIHBzLCB0b3RhbCB9ID0gdGhpcztcbiAgICByZXR1cm4geyBwaSwgcHMsIHRvdGFsIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KEFMQUlOX0kxOE5fVE9LRU4pIGkxOG5TcnY6IEFsYWluSTE4TlNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGV4cG9ydFNydjogU1RFeHBvcnQsXG4gICAgcHJpdmF0ZSBtb2RhbEhlbHBlcjogTW9kYWxIZWxwZXIsXG4gICAgcHJpdmF0ZSBkcmF3ZXJIZWxwZXI6IERyYXdlckhlbHBlcixcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogYW55LFxuICAgIHByaXZhdGUgY29sdW1uU291cmNlOiBTVENvbHVtblNvdXJjZSxcbiAgICBwcml2YXRlIGRhdGFTb3VyY2U6IFNURGF0YVNvdXJjZSxcbiAgICBwcml2YXRlIGRlbG9uSTE4bjogRGVsb25Mb2NhbGVTZXJ2aWNlLFxuICAgIGNvbmZpZ1NydjogQWxhaW5Db25maWdTZXJ2aWNlLFxuICApIHtcbiAgICB0aGlzLnNldENvZyhjb25maWdTcnYubWVyZ2U8QWxhaW5TVENvbmZpZywgJ3N0Jz4oJ3N0JywgU1RfREVGVUxBVF9DT05GSUcpKTtcblxuICAgIHRoaXMuZGVsb25JMThuLmNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmxvY2FsZSA9IHRoaXMuZGVsb25JMThuLmdldERhdGEoJ3N0Jyk7XG4gICAgICBpZiAodGhpcy5fY29sdW1ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMudXBkYXRlVG90YWxUcGwoKTtcbiAgICAgICAgdGhpcy5jZCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaTE4blNydi5jaGFuZ2VcbiAgICAgIC5waXBlKFxuICAgICAgICB0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpLFxuICAgICAgICBmaWx0ZXIoKCkgPT4gdGhpcy5fY29sdW1ucy5sZW5ndGggPiAwKSxcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5yZWZyZXNoQ29sdW1ucygpKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0Q29nKGNvZzogQWxhaW5TVENvbmZpZyk6IHZvaWQge1xuICAgIGNvbnN0IGNvcHlNdWx0aVNvcnQgPSB7IC4uLmNvZy5tdWx0aVNvcnQgfTtcbiAgICAvLyBCZWNhdXNlIG11bHRpU29ydC5nbG9iYWwgd2lsbCBhZmZlY3QgdGhlIHJlc3VsdCwgaXQgc2hvdWxkIGJlIHJlbW92ZWQgZmlyc3QsIGFuZCBtdWx0aVNvcnQgd2lsbCBiZSBvcGVyYXRlZCBhZ2FpbiBhZnRlciBwcm9jZXNzaW5nLlxuICAgIGRlbGV0ZSBjb2cubXVsdGlTb3J0O1xuICAgIHRoaXMuY29nID0gY29nO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29nKTtcblxuICAgIGlmIChjb3B5TXVsdGlTb3J0Lmdsb2JhbCAhPT0gZmFsc2UpIHtcbiAgICAgIHRoaXMubXVsdGlTb3J0ID0gY29weU11bHRpU29ydDtcbiAgICB9XG4gICAgdGhpcy5jb2x1bW5Tb3VyY2Uuc2V0Q29nKGNvZyk7XG4gIH1cblxuICBjZCgpIHtcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZW5kZXJUb3RhbCh0b3RhbDogc3RyaW5nLCByYW5nZTogc3RyaW5nW10pIHtcbiAgICByZXR1cm4gdGhpcy50b3RhbFRwbFxuICAgICAgPyB0aGlzLnRvdGFsVHBsLnJlcGxhY2UoJ3t7dG90YWx9fScsIHRvdGFsKS5yZXBsYWNlKCd7e3JhbmdlWzBdfX0nLCByYW5nZVswXSkucmVwbGFjZSgne3tyYW5nZVsxXX19JywgcmFuZ2VbMV0pXG4gICAgICA6ICcnO1xuICB9XG5cbiAgaXNUcnVuY2F0ZShjb2x1bW46IFNUQ29sdW1uKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhY29sdW1uLndpZHRoICYmIHRoaXMud2lkdGhNb2RlLnN0cmljdEJlaGF2aW9yID09PSAndHJ1bmNhdGUnICYmIGNvbHVtbi50eXBlICE9PSAnaW1nJztcbiAgfVxuXG4gIGNvbHVtbkNsYXNzKGNvbHVtbjogU1RDb2x1bW4pOiBzdHJpbmcgfCBudWxsIHtcbiAgICByZXR1cm4gY29sdW1uLmNsYXNzTmFtZSB8fCAodGhpcy5pc1RydW5jYXRlKGNvbHVtbikgPyAndGV4dC10cnVuY2F0ZScgOiBudWxsKTtcbiAgfVxuXG4gIHByaXZhdGUgY2hhbmdlRW1pdCh0eXBlOiBTVENoYW5nZVR5cGUsIGRhdGE/OiBhbnkpIHtcbiAgICBjb25zdCByZXM6IFNUQ2hhbmdlID0ge1xuICAgICAgdHlwZSxcbiAgICAgIHBpOiB0aGlzLnBpLFxuICAgICAgcHM6IHRoaXMucHMsXG4gICAgICB0b3RhbDogdGhpcy50b3RhbCxcbiAgICB9O1xuICAgIGlmIChkYXRhICE9IG51bGwpIHtcbiAgICAgIHJlc1t0eXBlXSA9IGRhdGE7XG4gICAgfVxuICAgIHRoaXMuY2hhbmdlLmVtaXQocmVzKTtcbiAgfVxuXG4gIC8vICNyZWdpb24gZGF0YVxuXG4gIC8qKlxuICAgKiDojrflj5bov4fmu6TlkI7miYDmnInmlbDmja5cbiAgICogLSDmnKzlnLDmlbDmja7vvJrljIXlkKvmjpLluo/jgIHov4fmu6TlkI7kuI3liIbpobXmlbDmja5cbiAgICogLSDov5znqIvmlbDmja7vvJrkuI3kvKDpgJIgYHBpYOOAgWBwc2Ag5Lik5Liq5Y+C5pWwXG4gICAqL1xuICBnZXQgZmlsdGVyZWREYXRhKCk6IFByb21pc2U8U1REYXRhW10+IHtcbiAgICByZXR1cm4gdGhpcy5sb2FkRGF0YSh7IHBhZ2luYXRvcjogZmFsc2UgfSBhcyBhbnkpLnRoZW4ocmVzID0+IHJlcy5saXN0KTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlVG90YWxUcGwoKTogdm9pZCB7XG4gICAgY29uc3QgeyB0b3RhbCB9ID0gdGhpcy5wYWdlO1xuICAgIGlmICh0eXBlb2YgdG90YWwgPT09ICdzdHJpbmcnICYmIHRvdGFsLmxlbmd0aCkge1xuICAgICAgdGhpcy50b3RhbFRwbCA9IHRvdGFsO1xuICAgIH0gZWxzZSBpZiAodG9Cb29sZWFuKHRvdGFsKSkge1xuICAgICAgdGhpcy50b3RhbFRwbCA9IHRoaXMubG9jYWxlLnRvdGFsO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRvdGFsVHBsID0gJyc7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRMb2FkaW5nKHZhbDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICh0aGlzLmxvYWRpbmcgPT0gbnVsbCkge1xuICAgICAgdGhpcy5fbG9hZGluZyA9IHZhbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGxvYWREYXRhKG9wdGlvbnM/OiBTVERhdGFTb3VyY2VPcHRpb25zKTogUHJvbWlzZTxTVERhdGFTb3VyY2VSZXN1bHQ+IHtcbiAgICBjb25zdCB7IHBpLCBwcywgZGF0YSwgcmVxLCByZXMsIHBhZ2UsIHRvdGFsLCBzaW5nbGVTb3J0LCBtdWx0aVNvcnQsIHJvd0NsYXNzTmFtZSB9ID0gdGhpcztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmVQcm9taXNlLCByZWplY3RQcm9taXNlKSA9PiB7XG4gICAgICBpZiAodGhpcy5kYXRhJCkge1xuICAgICAgICB0aGlzLmRhdGEkLnVuc3Vic2NyaWJlKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZGF0YSQgPSB0aGlzLmRhdGFTb3VyY2VcbiAgICAgICAgLnByb2Nlc3Moe1xuICAgICAgICAgIHBpLFxuICAgICAgICAgIHBzLFxuICAgICAgICAgIHRvdGFsLFxuICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgcmVxLFxuICAgICAgICAgIHJlcyxcbiAgICAgICAgICBwYWdlLFxuICAgICAgICAgIGNvbHVtbnM6IHRoaXMuX2NvbHVtbnMsXG4gICAgICAgICAgc2luZ2xlU29ydCxcbiAgICAgICAgICBtdWx0aVNvcnQsXG4gICAgICAgICAgcm93Q2xhc3NOYW1lLFxuICAgICAgICAgIHBhZ2luYXRvcjogdHJ1ZSxcbiAgICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICB9KVxuICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKVxuICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgIHJlc3VsdCA9PiByZXNvbHZlUHJvbWlzZShyZXN1bHQpLFxuICAgICAgICAgIGVycm9yID0+IHJlamVjdFByb21pc2UoZXJyb3IpLFxuICAgICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBsb2FkUGFnZURhdGEoKTogUHJvbWlzZTx0aGlzPiB7XG4gICAgdGhpcy5zZXRMb2FkaW5nKHRydWUpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmxvYWREYXRhKCk7XG4gICAgICB0aGlzLnNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgaWYgKHR5cGVvZiByZXN1bHQucGkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMucGkgPSByZXN1bHQucGk7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHJlc3VsdC5wcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5wcyA9IHJlc3VsdC5wcztcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgcmVzdWx0LnRvdGFsICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLnRvdGFsID0gcmVzdWx0LnRvdGFsO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiByZXN1bHQucGFnZVNob3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMuX2lzUGFnaW5hdGlvbiA9IHJlc3VsdC5wYWdlU2hvdztcbiAgICAgIH1cbiAgICAgIHRoaXMuX2RhdGEgPSByZXN1bHQubGlzdCBhcyBTVERhdGFbXTtcbiAgICAgIHRoaXMuX3N0YXRpc3RpY2FsID0gcmVzdWx0LnN0YXRpc3RpY2FsIGFzIFNUU3RhdGlzdGljYWxSZXN1bHRzO1xuICAgICAgdGhpcy5jaGFuZ2VFbWl0KCdsb2FkZWQnLCByZXN1bHQubGlzdCk7XG4gICAgICByZXR1cm4gdGhpcy5fcmVmQ2hlY2soKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5zZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIGlmICghdGhpcy51bnN1YnNjcmliZSQuaXNTdG9wcGVkKSB7XG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgdGhpcy5lcnJvci5lbWl0KHsgdHlwZTogJ3JlcScsIGVycm9yIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9XG5cbiAgLyoqIOa4heepuuaJgOacieaVsOaNriAqL1xuICBjbGVhcihjbGVhblN0YXR1cyA9IHRydWUpOiB0aGlzIHtcbiAgICBpZiAoY2xlYW5TdGF0dXMpIHtcbiAgICAgIHRoaXMuY2xlYXJTdGF0dXMoKTtcbiAgICB9XG4gICAgdGhpcy5fZGF0YSA9IFtdO1xuICAgIHJldHVybiB0aGlzLmNkKCk7XG4gIH1cblxuICAvKiog5riF56m65omA5pyJ54q25oCBICovXG4gIGNsZWFyU3RhdHVzKCk6IHRoaXMge1xuICAgIHJldHVybiB0aGlzLmNsZWFyQ2hlY2soKS5jbGVhclJhZGlvKCkuY2xlYXJGaWx0ZXIoKS5jbGVhclNvcnQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmoLnmja7pobXnoIHph43mlrDliqDovb3mlbDmja5cbiAgICpcbiAgICogQHBhcmFtIHBpIOaMh+WumuW9k+WJjemhteegge+8jOm7mOiupO+8mmAxYFxuICAgKiBAcGFyYW0gZXh0cmFQYXJhbXMg6YeN5paw5oyH5a6aIGBleHRyYVBhcmFtc2Ag5YC8XG4gICAqIEBwYXJhbSBvcHRpb25zIOmAiemhuVxuICAgKi9cbiAgbG9hZChwaSA9IDEsIGV4dHJhUGFyYW1zPzoge30sIG9wdGlvbnM/OiBTVExvYWRPcHRpb25zKSB7XG4gICAgaWYgKHBpICE9PSAtMSkgdGhpcy5waSA9IHBpO1xuICAgIGlmICh0eXBlb2YgZXh0cmFQYXJhbXMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlcS5wYXJhbXMgPSBvcHRpb25zICYmIG9wdGlvbnMubWVyZ2UgPyB7IC4uLnRoaXMucmVxLnBhcmFtcywgLi4uZXh0cmFQYXJhbXMgfSA6IGV4dHJhUGFyYW1zO1xuICAgIH1cbiAgICB0aGlzLl9jaGFuZ2UoJ3BpJywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICog6YeN5paw5Yi35paw5b2T5YmN6aG1XG4gICAqIEBwYXJhbSBleHRyYVBhcmFtcyDph43mlrDmjIflrpogYGV4dHJhUGFyYW1zYCDlgLxcbiAgICovXG4gIHJlbG9hZChleHRyYVBhcmFtcz86IHt9LCBvcHRpb25zPzogU1RMb2FkT3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLmxvYWQoLTEsIGV4dHJhUGFyYW1zLCBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDph43nva7kuJTph43mlrDorr7nva4gYHBpYCDkuLogYDFg77yM5YyF5ZCr5Lul5LiL5YC877yaXG4gICAqIC0gYGNoZWNrYCDmlbDmja5cbiAgICogLSBgcmFkaW9gIOaVsOaNrlxuICAgKiAtIGBzb3J0YCDmlbDmja5cbiAgICogLSBgZmlsZXRlcmAg5pWw5o2uXG4gICAqXG4gICAqIEBwYXJhbSBleHRyYVBhcmFtcyDph43mlrDmjIflrpogYGV4dHJhUGFyYW1zYCDlgLxcbiAgICovXG4gIHJlc2V0KGV4dHJhUGFyYW1zPzoge30sIG9wdGlvbnM/OiBTVExvYWRPcHRpb25zKSB7XG4gICAgdGhpcy5jbGVhclN0YXR1cygpLmxvYWQoMSwgZXh0cmFQYXJhbXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJpdmF0ZSBfdG9Ub3AoZW5mb3JjZT86IGJvb2xlYW4pIHtcbiAgICBpZiAoIShlbmZvcmNlID09IG51bGwgPyB0aGlzLnBhZ2UudG9Ub3AgOiBlbmZvcmNlKSkgcmV0dXJuO1xuICAgIGNvbnN0IGVsID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgIGlmICh0aGlzLnNjcm9sbCkge1xuICAgICAgZWwucXVlcnlTZWxlY3RvcignLmFudC10YWJsZS1ib2R5JykhLnNjcm9sbFRvKDAsIDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbC5zY3JvbGxJbnRvVmlldygpO1xuICAgIC8vIGZpeCBoZWFkZXIgaGVpZ2h0XG4gICAgdGhpcy5kb2MuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCAtPSB0aGlzLnBhZ2UudG9Ub3BPZmZzZXQhO1xuICB9XG5cbiAgX2NoYW5nZSh0eXBlOiAncGknIHwgJ3BzJywgb3B0aW9ucz86IFNUTG9hZE9wdGlvbnMpIHtcbiAgICBpZiAodHlwZSA9PT0gJ3BpJyB8fCAodHlwZSA9PT0gJ3BzJyAmJiB0aGlzLnBpIDw9IE1hdGguY2VpbCh0aGlzLnRvdGFsIC8gdGhpcy5wcykpKSB7XG4gICAgICB0aGlzLmxvYWRQYWdlRGF0YSgpLnRoZW4oKCkgPT4gdGhpcy5fdG9Ub3Aob3B0aW9ucz8udG9Ub3ApKTtcbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZUVtaXQodHlwZSk7XG4gIH1cblxuICBfY2xpY2soZTogRXZlbnQsIGl0ZW06IFNURGF0YSwgY29sOiBTVENvbHVtbikge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IHJlcyA9IGNvbC5jbGljayEoaXRlbSwgdGhpcyk7XG4gICAgaWYgKHR5cGVvZiByZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHJlcywgeyBzdGF0ZTogdGhpcy5yb3V0ZXJTdGF0ZSB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHByaXZhdGUgY2xvc2VPdGhlckV4cGFuZChpdGVtOiBTVERhdGEpIHtcbiAgICBpZiAodGhpcy5leHBhbmRBY2NvcmRpb24gPT09IGZhbHNlKSByZXR1cm47XG4gICAgdGhpcy5fZGF0YS5maWx0ZXIoaSA9PiBpICE9PSBpdGVtKS5mb3JFYWNoKGkgPT4gKGkuZXhwYW5kID0gZmFsc2UpKTtcbiAgfVxuICBfcm93Q2xpY2soZTogRXZlbnQsIGl0ZW06IFNURGF0YSwgaW5kZXg6IG51bWJlcikge1xuICAgIGlmICgoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLm5vZGVOYW1lID09PSAnSU5QVVQnKSByZXR1cm47XG4gICAgY29uc3QgeyBleHBhbmQsIGV4cGFuZFJvd0J5Q2xpY2ssIHJvd0NsaWNrVGltZSB9ID0gdGhpcztcbiAgICBpZiAoISFleHBhbmQgJiYgaXRlbS5zaG93RXhwYW5kICE9PSBmYWxzZSAmJiBleHBhbmRSb3dCeUNsaWNrKSB7XG4gICAgICBpdGVtLmV4cGFuZCA9ICFpdGVtLmV4cGFuZDtcbiAgICAgIHRoaXMuY2xvc2VPdGhlckV4cGFuZChpdGVtKTtcbiAgICAgIHRoaXMuY2hhbmdlRW1pdCgnZXhwYW5kJywgaXRlbSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgICsrdGhpcy5yb3dDbGlja0NvdW50O1xuICAgIGlmICh0aGlzLnJvd0NsaWNrQ291bnQgIT09IDEpIHJldHVybjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSB7IGUsIGl0ZW0sIGluZGV4IH07XG4gICAgICBpZiAodGhpcy5yb3dDbGlja0NvdW50ID09PSAxKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlRW1pdCgnY2xpY2snLCBkYXRhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2hhbmdlRW1pdCgnZGJsQ2xpY2snLCBkYXRhKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucm93Q2xpY2tDb3VudCA9IDA7XG4gICAgfSwgcm93Q2xpY2tUaW1lKTtcbiAgfVxuXG4gIF9leHBhbmRDaGFuZ2UoaXRlbTogU1REYXRhKTogdm9pZCB7XG4gICAgdGhpcy5jbG9zZU90aGVyRXhwYW5kKGl0ZW0pO1xuICAgIHRoaXMuY2hhbmdlRW1pdCgnZXhwYW5kJywgaXRlbSk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGEgcm93IGluIHRoZSB0YWJsZSwgbGlrZSB0aGlzOlxuICAgKlxuICAgKiBgYGBcbiAgICogdGhpcy5zdC5yZW1vdmVSb3coMClcbiAgICogdGhpcy5zdC5yZW1vdmVSb3coc3REYXRhSXRlbSlcbiAgICogYGBgXG4gICAqL1xuICByZW1vdmVSb3coZGF0YTogU1REYXRhIHwgU1REYXRhW10gfCBudW1iZXIpIHtcbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdudW1iZXInKSB7XG4gICAgICB0aGlzLl9kYXRhLnNwbGljZShkYXRhLCAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgIGRhdGEgPSBbZGF0YV07XG4gICAgICB9XG5cbiAgICAgIChkYXRhIGFzIFNURGF0YVtdKVxuICAgICAgICAubWFwKGl0ZW0gPT4gdGhpcy5fZGF0YS5pbmRleE9mKGl0ZW0pKVxuICAgICAgICAuZmlsdGVyKHBvcyA9PiBwb3MgIT09IC0xKVxuICAgICAgICAuZm9yRWFjaChwb3MgPT4gdGhpcy5fZGF0YS5zcGxpY2UocG9zLCAxKSk7XG4gICAgfVxuICAgIC8vIHJlY2FsY3VsYXRlIG5vXG4gICAgdGhpcy5fY29sdW1uc1xuICAgICAgLmZpbHRlcih3ID0+IHcudHlwZSA9PT0gJ25vJylcbiAgICAgIC5mb3JFYWNoKGMgPT4gdGhpcy5fZGF0YS5mb3JFYWNoKChpLCBpZHgpID0+IChpLl92YWx1ZXNbYy5fX3BvaW50XSA9IHsgdGV4dDogdGhpcy5kYXRhU291cmNlLmdldE5vSW5kZXgoaSwgYywgaWR4KSwgb3JnOiBpZHggfSkpKTtcblxuICAgIHJldHVybiB0aGlzLmNkKCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgcm93IHZhbHVlIGZvciB0aGUgYGluZGV4YCBpbiB0aGUgdGFibGUsIGxpa2UgdGhpczpcbiAgICpcbiAgICogLSBgb3B0aW5vcy5yZWZyZXNoU2NoZW1hYCBXaGV0aGVyIHRvIHJlZnJlc2ggb2Ygc3Qgc2NoZW1hc1xuICAgKiAtIGBvcHRpbm9zLmVtaXRSZWxvYWRgIFdoZXRoZXIgdG8gdHJpZ2dlciBhIHJlbG9hZCBodHRwIHJlcXVlc3Qgd2hlbiBkYXRhIGlzIHVybFxuICAgKlxuICAgKiBgYGBcbiAgICogdGhpcy5zdC5zZXRSb3coMCwgeyBwcmljZTogMTAwIH0pXG4gICAqIHRoaXMuc3Quc2V0Um93KDAsIHsgcHJpY2U6IDEwMCwgbmFtZTogJ2FzZGYnIH0pXG4gICAqIGBgYFxuICAgKi9cbiAgc2V0Um93KGluZGV4OiBudW1iZXIsIGl0ZW06IFNURGF0YSwgb3B0aW9ucz86IHsgcmVmcmVzaFNjaGVtYT86IGJvb2xlYW47IGVtaXRSZWxvYWQ/OiBib29sZWFuIH0pOiB0aGlzIHtcbiAgICBvcHRpb25zID0geyByZWZyZXNoU2NoZW1hOiBmYWxzZSwgZW1pdFJlbG9hZDogZmFsc2UsIC4uLm9wdGlvbnMgfTtcbiAgICB0aGlzLl9kYXRhW2luZGV4XSA9IGRlZXBNZXJnZUtleSh0aGlzLl9kYXRhW2luZGV4XSwgZmFsc2UsIGl0ZW0pO1xuICAgIHRoaXMuX2RhdGEgPSB0aGlzLmRhdGFTb3VyY2Uub3B0aW1pemVEYXRhKHsgY29sdW1uczogdGhpcy5fY29sdW1ucywgcmVzdWx0OiB0aGlzLl9kYXRhLCByb3dDbGFzc05hbWU6IHRoaXMucm93Q2xhc3NOYW1lIH0pO1xuICAgIGlmIChvcHRpb25zLnJlZnJlc2hTY2hlbWEpIHtcbiAgICAgIHRoaXMucmVzZXRDb2x1bW5zKHsgZW1pdFJlbG9hZDogb3B0aW9ucy5lbWl0UmVsb2FkIH0pO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIHNvcnRcblxuICBzb3J0KGNvbDogU1RDb2x1bW4sIGlkeDogbnVtYmVyLCB2YWx1ZTogYW55KSB7XG4gICAgaWYgKHRoaXMubXVsdGlTb3J0KSB7XG4gICAgICBjb2wuX3NvcnQhLmRlZmF1bHQgPSB2YWx1ZTtcbiAgICAgIGNvbC5fc29ydCEudGljayA9IHRoaXMuZGF0YVNvdXJjZS5uZXh0U29ydFRpY2s7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NvbHVtbnMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IChpdGVtLl9zb3J0IS5kZWZhdWx0ID0gaW5kZXggPT09IGlkeCA/IHZhbHVlIDogbnVsbCkpO1xuICAgIH1cbiAgICB0aGlzLmxvYWRQYWdlRGF0YSgpO1xuICAgIGNvbnN0IHJlcyA9IHtcbiAgICAgIHZhbHVlLFxuICAgICAgbWFwOiB0aGlzLmRhdGFTb3VyY2UuZ2V0UmVxU29ydE1hcCh0aGlzLnNpbmdsZVNvcnQsIHRoaXMubXVsdGlTb3J0LCB0aGlzLl9jb2x1bW5zKSxcbiAgICAgIGNvbHVtbjogY29sLFxuICAgIH07XG4gICAgdGhpcy5jaGFuZ2VFbWl0KCdzb3J0JywgcmVzKTtcbiAgfVxuXG4gIGNsZWFyU29ydCgpIHtcbiAgICB0aGlzLl9jb2x1bW5zLmZvckVhY2goaXRlbSA9PiAoaXRlbS5fc29ydCEuZGVmYXVsdCA9IG51bGwpKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIGZpbHRlclxuXG4gIHByaXZhdGUgaGFuZGxlRmlsdGVyKGNvbDogU1RDb2x1bW4pIHtcbiAgICB0aGlzLmNvbHVtblNvdXJjZS51cGRhdGVEZWZhdWx0KGNvbC5maWx0ZXIhKTtcbiAgICB0aGlzLmxvYWRQYWdlRGF0YSgpO1xuICAgIHRoaXMuY2hhbmdlRW1pdCgnZmlsdGVyJywgY29sKTtcbiAgfVxuXG4gIF9maWx0ZXJDb25maXJtKGNvbDogU1RDb2x1bW4pIHtcbiAgICB0aGlzLmhhbmRsZUZpbHRlcihjb2wpO1xuICB9XG5cbiAgX2ZpbHRlclJhZGlvKGNvbDogU1RDb2x1bW4sIGl0ZW06IFNUQ29sdW1uRmlsdGVyTWVudSwgY2hlY2tlZDogYm9vbGVhbikge1xuICAgIGNvbC5maWx0ZXIhLm1lbnVzIS5mb3JFYWNoKGkgPT4gKGkuY2hlY2tlZCA9IGZhbHNlKSk7XG4gICAgaXRlbS5jaGVja2VkID0gY2hlY2tlZDtcbiAgfVxuXG4gIF9maWx0ZXJDbGVhcihjb2w6IFNUQ29sdW1uKSB7XG4gICAgdGhpcy5jb2x1bW5Tb3VyY2UuY2xlYW5GaWx0ZXIoY29sKTtcbiAgICB0aGlzLmhhbmRsZUZpbHRlcihjb2wpO1xuICB9XG5cbiAgY2xlYXJGaWx0ZXIoKSB7XG4gICAgdGhpcy5fY29sdW1ucy5maWx0ZXIodyA9PiB3LmZpbHRlciAmJiB3LmZpbHRlci5kZWZhdWx0ID09PSB0cnVlKS5mb3JFYWNoKGNvbCA9PiB0aGlzLmNvbHVtblNvdXJjZS5jbGVhbkZpbHRlcihjb2wpKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIGNoZWNrYm94XG5cbiAgLyoqIOa4hemZpOaJgOaciSBgY2hlY2tib3hgICovXG4gIGNsZWFyQ2hlY2soKTogdGhpcyB7XG4gICAgcmV0dXJuIHRoaXMuX2NoZWNrQWxsKGZhbHNlKTtcbiAgfVxuXG4gIHByaXZhdGUgX3JlZkNoZWNrKCk6IHRoaXMge1xuICAgIGNvbnN0IHZhbGlkRGF0YSA9IHRoaXMuX2RhdGEuZmlsdGVyKHcgPT4gIXcuZGlzYWJsZWQpO1xuICAgIGNvbnN0IGNoZWNrZWRMaXN0ID0gdmFsaWREYXRhLmZpbHRlcih3ID0+IHcuY2hlY2tlZCA9PT0gdHJ1ZSk7XG4gICAgdGhpcy5fYWxsQ2hlY2tlZCA9IGNoZWNrZWRMaXN0Lmxlbmd0aCA+IDAgJiYgY2hlY2tlZExpc3QubGVuZ3RoID09PSB2YWxpZERhdGEubGVuZ3RoO1xuICAgIGNvbnN0IGFsbFVuQ2hlY2tlZCA9IHZhbGlkRGF0YS5ldmVyeSh2YWx1ZSA9PiAhdmFsdWUuY2hlY2tlZCk7XG4gICAgdGhpcy5faW5kZXRlcm1pbmF0ZSA9ICF0aGlzLl9hbGxDaGVja2VkICYmICFhbGxVbkNoZWNrZWQ7XG4gICAgdGhpcy5fYWxsQ2hlY2tlZERpc2FibGVkID0gdGhpcy5fZGF0YS5sZW5ndGggPT09IHRoaXMuX2RhdGEuZmlsdGVyKHcgPT4gdy5kaXNhYmxlZCkubGVuZ3RoO1xuICAgIHJldHVybiB0aGlzLmNkKCk7XG4gIH1cblxuICBfY2hlY2tBbGwoY2hlY2tlZD86IGJvb2xlYW4pOiB0aGlzIHtcbiAgICBjaGVja2VkID0gdHlwZW9mIGNoZWNrZWQgPT09ICd1bmRlZmluZWQnID8gdGhpcy5fYWxsQ2hlY2tlZCA6IGNoZWNrZWQ7XG4gICAgdGhpcy5fZGF0YS5maWx0ZXIodyA9PiAhdy5kaXNhYmxlZCkuZm9yRWFjaChpID0+IChpLmNoZWNrZWQgPSBjaGVja2VkKSk7XG4gICAgcmV0dXJuIHRoaXMuX3JlZkNoZWNrKCkuX2NoZWNrTm90aWZ5KCk7XG4gIH1cblxuICBfY2hlY2tTZWxlY3Rpb24oaTogU1REYXRhLCB2YWx1ZTogYm9vbGVhbikge1xuICAgIGkuY2hlY2tlZCA9IHZhbHVlO1xuICAgIHJldHVybiB0aGlzLl9yZWZDaGVjaygpLl9jaGVja05vdGlmeSgpO1xuICB9XG5cbiAgX3Jvd1NlbGVjdGlvbihyb3c6IFNUQ29sdW1uU2VsZWN0aW9uKTogdGhpcyB7XG4gICAgcm93LnNlbGVjdCh0aGlzLl9kYXRhKTtcbiAgICByZXR1cm4gdGhpcy5fcmVmQ2hlY2soKS5fY2hlY2tOb3RpZnkoKTtcbiAgfVxuXG4gIF9jaGVja05vdGlmeSgpOiB0aGlzIHtcbiAgICBjb25zdCByZXMgPSB0aGlzLl9kYXRhLmZpbHRlcih3ID0+ICF3LmRpc2FibGVkICYmIHcuY2hlY2tlZCA9PT0gdHJ1ZSk7XG4gICAgdGhpcy5jaGFuZ2VFbWl0KCdjaGVja2JveCcsIHJlcyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiByYWRpb1xuXG4gIC8qKiDmuIXpmaTmiYDmnIkgYHJhZGlvYCAqL1xuICBjbGVhclJhZGlvKCk6IHRoaXMge1xuICAgIHRoaXMuX2RhdGEuZmlsdGVyKHcgPT4gdy5jaGVja2VkKS5mb3JFYWNoKGl0ZW0gPT4gKGl0ZW0uY2hlY2tlZCA9IGZhbHNlKSk7XG4gICAgdGhpcy5jaGFuZ2VFbWl0KCdyYWRpbycsIG51bGwpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgX3JlZlJhZGlvKGNoZWNrZWQ6IGJvb2xlYW4sIGl0ZW06IFNURGF0YSk6IHRoaXMge1xuICAgIC8vIGlmIChpdGVtLmRpc2FibGVkID09PSB0cnVlKSByZXR1cm47XG4gICAgdGhpcy5fZGF0YS5maWx0ZXIodyA9PiAhdy5kaXNhYmxlZCkuZm9yRWFjaChpID0+IChpLmNoZWNrZWQgPSBmYWxzZSkpO1xuICAgIGl0ZW0uY2hlY2tlZCA9IGNoZWNrZWQ7XG4gICAgdGhpcy5jaGFuZ2VFbWl0KCdyYWRpbycsIGl0ZW0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gYnV0dG9uc1xuXG4gIF9idG5DbGljayhyZWNvcmQ6IFNURGF0YSwgYnRuOiBTVENvbHVtbkJ1dHRvbiwgZT86IEV2ZW50KSB7XG4gICAgLy8gc2hvdWxkIGJlIHN0b3AgcHJvcGFnYXRpb24gd2hlbiBleHBhbmRSb3dCeUNsaWNrIGlzIHRydWVcbiAgICBpZiAoZSAmJiB0aGlzLmV4cGFuZFJvd0J5Q2xpY2sgPT09IHRydWUpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICAgIGlmIChidG4udHlwZSA9PT0gJ21vZGFsJyB8fCBidG4udHlwZSA9PT0gJ3N0YXRpYycpIHtcbiAgICAgIGNvbnN0IHsgbW9kYWwgfSA9IGJ0bjtcbiAgICAgIGNvbnN0IG9iaiA9IHsgW21vZGFsIS5wYXJhbXNOYW1lIV06IHJlY29yZCB9O1xuICAgICAgKHRoaXMubW9kYWxIZWxwZXJbYnRuLnR5cGUgPT09ICdtb2RhbCcgPyAnY3JlYXRlJyA6ICdjcmVhdGVTdGF0aWMnXSBhcyBhbnkpKFxuICAgICAgICBtb2RhbCEuY29tcG9uZW50LFxuICAgICAgICB7IC4uLm9iaiwgLi4uKG1vZGFsIS5wYXJhbXMgJiYgbW9kYWwhLnBhcmFtcyEocmVjb3JkKSkgfSxcbiAgICAgICAgZGVlcE1lcmdlS2V5KHt9LCB0cnVlLCB0aGlzLmNvZy5tb2RhbCwgbW9kYWwpLFxuICAgICAgKVxuICAgICAgICAucGlwZShmaWx0ZXIodyA9PiB0eXBlb2YgdyAhPT0gJ3VuZGVmaW5lZCcpKVxuICAgICAgICAuc3Vic2NyaWJlKChyZXM6IE56U2FmZUFueSkgPT4gdGhpcy5idG5DYWxsYmFjayhyZWNvcmQsIGJ0biwgcmVzKSk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChidG4udHlwZSA9PT0gJ2RyYXdlcicpIHtcbiAgICAgIGNvbnN0IHsgZHJhd2VyIH0gPSBidG47XG4gICAgICBjb25zdCBvYmogPSB7IFtkcmF3ZXIhLnBhcmFtc05hbWUhXTogcmVjb3JkIH07XG4gICAgICB0aGlzLmRyYXdlckhlbHBlclxuICAgICAgICAuY3JlYXRlKFxuICAgICAgICAgIGRyYXdlciEudGl0bGUhLFxuICAgICAgICAgIGRyYXdlciEuY29tcG9uZW50LFxuICAgICAgICAgIHsgLi4ub2JqLCAuLi4oZHJhd2VyIS5wYXJhbXMgJiYgZHJhd2VyIS5wYXJhbXMhKHJlY29yZCkpIH0sXG4gICAgICAgICAgZGVlcE1lcmdlS2V5KHt9LCB0cnVlLCB0aGlzLmNvZy5kcmF3ZXIsIGRyYXdlciksXG4gICAgICAgIClcbiAgICAgICAgLnBpcGUoZmlsdGVyKHcgPT4gdHlwZW9mIHcgIT09ICd1bmRlZmluZWQnKSlcbiAgICAgICAgLnN1YnNjcmliZShyZXMgPT4gdGhpcy5idG5DYWxsYmFjayhyZWNvcmQsIGJ0biwgcmVzKSk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChidG4udHlwZSA9PT0gJ2xpbmsnKSB7XG4gICAgICBjb25zdCBjbGlja1JlcyA9IHRoaXMuYnRuQ2FsbGJhY2socmVjb3JkLCBidG4pO1xuICAgICAgaWYgKHR5cGVvZiBjbGlja1JlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChjbGlja1JlcywgeyBzdGF0ZTogdGhpcy5yb3V0ZXJTdGF0ZSB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5idG5DYWxsYmFjayhyZWNvcmQsIGJ0bik7XG4gIH1cblxuICBwcml2YXRlIGJ0bkNhbGxiYWNrKHJlY29yZDogU1REYXRhLCBidG46IFNUQ29sdW1uQnV0dG9uLCBtb2RhbD86IGFueSkge1xuICAgIGlmICghYnRuLmNsaWNrKSByZXR1cm47XG4gICAgaWYgKHR5cGVvZiBidG4uY2xpY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICBzd2l0Y2ggKGJ0bi5jbGljaykge1xuICAgICAgICBjYXNlICdsb2FkJzpcbiAgICAgICAgICB0aGlzLmxvYWQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncmVsb2FkJzpcbiAgICAgICAgICB0aGlzLnJlbG9hZCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYnRuLmNsaWNrKHJlY29yZCwgbW9kYWwsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIF9idG5UZXh0KHJlY29yZDogU1REYXRhLCBidG46IFNUQ29sdW1uQnV0dG9uKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBidG4udGV4dCA9PT0gJ2Z1bmN0aW9uJyA/IGJ0bi50ZXh0KHJlY29yZCwgYnRuKSA6IGJ0bi50ZXh0IHx8ICcnO1xuICB9XG5cbiAgX3ZhbGlkQnRucyhidG5zOiBTVENvbHVtbkJ1dHRvbltdLCBpdGVtOiBTVERhdGEsIGNvbDogU1RDb2x1bW4pOiBTVENvbHVtbkJ1dHRvbltdIHtcbiAgICByZXR1cm4gYnRucy5maWx0ZXIoYnRuID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGJ0bi5paWYhKGl0ZW0sIGJ0biwgY29sKTtcbiAgICAgIGNvbnN0IGlzUmVuZGVyRGlzYWJsZWQgPSBidG4uaWlmQmVoYXZpb3IgPT09ICdkaXNhYmxlZCc7XG4gICAgICBidG4uX3Jlc3VsdCA9IHJlc3VsdDtcbiAgICAgIGJ0bi5fZGlzYWJsZWQgPSAhcmVzdWx0ICYmIGlzUmVuZGVyRGlzYWJsZWQ7XG4gICAgICByZXR1cm4gcmVzdWx0IHx8IGlzUmVuZGVyRGlzYWJsZWQ7XG4gICAgfSk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiBleHBvcnRcblxuICAvKipcbiAgICog5a+85Ye65b2T5YmN6aG177yM56Gu5L+d5bey57uP5rOo5YaMIGBYbHN4TW9kdWxlYFxuICAgKiBAcGFyYW0gbmV3RGF0YSDph43mlrDmjIflrprmlbDmja7vvJvoi6XkuLogYHRydWVgIOihqOekuuS9v+eUqCBgZmlsdGVyZWREYXRhYCDmlbDmja5cbiAgICogQHBhcmFtIG9wdCDpop3lpJblj4LmlbBcbiAgICovXG4gIGV4cG9ydChuZXdEYXRhPzogU1REYXRhW10gfCB0cnVlLCBvcHQ/OiBTVEV4cG9ydE9wdGlvbnMpIHtcbiAgICAobmV3RGF0YSA9PT0gdHJ1ZSA/IGZyb20odGhpcy5maWx0ZXJlZERhdGEpIDogb2YobmV3RGF0YSB8fCB0aGlzLl9kYXRhKSkuc3Vic2NyaWJlKChyZXM6IFNURGF0YVtdKSA9PlxuICAgICAgdGhpcy5leHBvcnRTcnYuZXhwb3J0KHtcbiAgICAgICAgLi4ub3B0LFxuICAgICAgICBfZDogcmVzLFxuICAgICAgICBfYzogdGhpcy5fY29sdW1ucyxcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgZ2V0IGNka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcmdUYWJsZS5jZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQ7XG4gIH1cblxuICByZXNldENvbHVtbnMob3B0aW9ucz86IFNUUmVzZXRDb2x1bW5zT3B0aW9uKTogUHJvbWlzZTx0aGlzPiB7XG4gICAgb3B0aW9ucyA9IHsgZW1pdFJlbG9hZDogdHJ1ZSwgLi4ub3B0aW9ucyB9O1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5jb2x1bW5zICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5jb2x1bW5zID0gb3B0aW9ucy5jb2x1bW5zO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMucGkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnBpID0gb3B0aW9ucy5waTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLnBzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5wcyA9IG9wdGlvbnMucHM7XG4gICAgfVxuICAgIHRoaXMucmVmcmVzaENvbHVtbnMoKTtcbiAgICBpZiAob3B0aW9ucy5lbWl0UmVsb2FkID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5sb2FkUGFnZURhdGEoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jZCgpO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlZnJlc2hDb2x1bW5zKCk6IHRoaXMge1xuICAgIHRoaXMuX2NvbHVtbnMgPSB0aGlzLmNvbHVtblNvdXJjZS5wcm9jZXNzKHRoaXMuY29sdW1ucyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5jb2x1bW5Tb3VyY2UucmVzdG9yZUFsbFJlbmRlcih0aGlzLl9jb2x1bW5zKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW1AgaW4ga2V5b2YgdGhpc10/OiBTaW1wbGVDaGFuZ2UgfSAmIFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5jb2x1bW5zKSB7XG4gICAgICB0aGlzLnJlZnJlc2hDb2x1bW5zKCk7XG4gICAgfVxuICAgIGNvbnN0IGNoYW5nZURhdGEgPSBjaGFuZ2VzLmRhdGE7XG4gICAgaWYgKGNoYW5nZURhdGEgJiYgY2hhbmdlRGF0YS5jdXJyZW50VmFsdWUgJiYgISh0aGlzLnJlcS5sYXp5TG9hZCAmJiBjaGFuZ2VEYXRhLmZpcnN0Q2hhbmdlKSkge1xuICAgICAgdGhpcy5sb2FkUGFnZURhdGEoKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMubG9hZGluZykge1xuICAgICAgdGhpcy5fbG9hZGluZyA9IGNoYW5nZXMubG9hZGluZy5jdXJyZW50VmFsdWU7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgY29uc3QgeyB1bnN1YnNjcmliZSQgfSA9IHRoaXM7XG4gICAgdW5zdWJzY3JpYmUkLm5leHQoKTtcbiAgICB1bnN1YnNjcmliZSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19