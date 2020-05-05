/**
 * @fileoverview added by tsickle
 * Generated from: st.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __awaiter, __decorate, __metadata } from "tslib";
import { DecimalPipe, DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Inject, Input, Optional, Output, TemplateRef, ViewChild, ViewEncapsulation, } from '@angular/core';
import { Router } from '@angular/router';
import { ALAIN_I18N_TOKEN, CNCurrencyPipe, DatePipe, DelonLocaleService, DrawerHelper, ModalHelper, YNPipe, } from '@delon/theme';
import { AlainConfigService, deepMergeKey, InputBoolean, InputNumber, toBoolean } from '@delon/util';
import { NzTableComponent } from 'ng-zorro-antd/table';
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
        this._headers = [];
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
            this.cdr.detectChanges();
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
            error => {
                console.warn('st.loadDate', error);
                rejectPromise(error);
            }));
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
     * @param {?} expand
     * @return {?}
     */
    _expandChange(item, expand) {
        if (this.expandRowByClick) {
            return;
        }
        item.expand = expand;
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
        /** @type {?} */
        const res = (/** @type {?} */ (this)).columnSource.process((/** @type {?} */ (this)).columns);
        (/** @type {?} */ (this))._columns = res.columns;
        (/** @type {?} */ (this))._headers = res.headers;
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
                template: "<ng-template #btnTpl let-i let-btn=\"btn\">\n  <ng-container *ngIf=\"!btn.tooltip\">\n    <ng-template [ngTemplateOutlet]=\"btnItemTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n  </ng-container>\n  <span *ngIf=\"btn.tooltip\" nz-tooltip [nzTooltipTitle]=\"btn.tooltip\">\n    <ng-template [ngTemplateOutlet]=\"btnItemTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n  </span>\n</ng-template>\n<ng-template #btnItemTpl let-i let-btn=\"btn\">\n  <a *ngIf=\"btn.pop\" nz-popconfirm [nzPopconfirmTitle]=\"btn.pop.title\" [nzIcon]=\"btn.pop.icon\"\n    [nzCondition]=\"btn.pop.condition(i)\" [nzCancelText]=\"btn.pop.cancelText\" [nzOkText]=\"btn.pop.okText\"\n    [nzOkType]=\"btn.pop.okType\" (nzOnConfirm)=\"_btnClick(i, btn, $event)\" class=\"st__btn-text\">\n    <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n  </a>\n  <a *ngIf=\"!btn.pop\" (click)=\"_btnClick(i, btn, $event)\" class=\"st__btn-text\">\n    <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n  </a>\n</ng-template>\n<ng-template #btnTextTpl let-i let-btn=\"btn\">\n  <ng-container *ngIf=\"btn.icon\">\n    <i *ngIf=\"!btn.icon.iconfont\" nz-icon [nzType]=\"btn.icon.type\" [nzTheme]=\"btn.icon.theme\" [nzSpin]=\"btn.icon.spin\"\n      [nzTwotoneColor]=\"btn.icon.twoToneColor\"></i>\n    <i *ngIf=\"btn.icon.iconfont\" nz-icon [nzIconfont]=\"btn.icon.iconfont\"></i>\n  </ng-container>\n  <span [innerHTML]=\"_btnText(i, btn)\" [ngClass]=\"{'pl-xs': btn.icon}\"></span>\n</ng-template>\n<ng-template #titleTpl let-i>\n  <span [innerHTML]=\"i._text\"></span>\n  <small *ngIf=\"i.optional\" class=\"st__head-optional\" [innerHTML]=\"i.optional\"></small>\n  <i *ngIf=\"i.optionalHelp\" class=\"st__head-tip\" nz-tooltip [nzTooltipTitle]=\"i.optionalHelp\" nz-icon nzType=\"question-circle\"></i>\n</ng-template>\n<ng-template #chkAllTpl let-custom>\n  <label nz-checkbox class=\"st__checkall\" [nzDisabled]=\"_allCheckedDisabled\" [(ngModel)]=\"_allChecked\"\n    [nzIndeterminate]=\"_indeterminate\" (ngModelChange)=\"_checkAll()\"\n    [class.ant-table-selection-select-all-custom]=\"custom\"></label>\n</ng-template>\n<nz-table #table [nzData]=\"_data\" [(nzPageIndex)]=\"pi\" (nzPageIndexChange)=\"_change('pi')\" [(nzPageSize)]=\"ps\"\n  (nzPageSizeChange)=\"_change('ps')\" [nzTotal]=\"total\" [nzShowPagination]=\"_isPagination\" [nzFrontPagination]=\"false\"\n  [nzBordered]=\"bordered\" [nzSize]=\"size\" [nzLoading]=\"_loading\" [nzLoadingDelay]=\"loadingDelay\"\n  [nzLoadingIndicator]=\"loadingIndicator\" [nzTitle]=\"header\" [nzFooter]=\"footer\" [nzScroll]=\"scroll\"\n  [nzVirtualItemSize]=\"virtualItemSize\" [nzVirtualMaxBufferPx]=\"virtualMaxBufferPx\" [nzVirtualMinBufferPx]=\"virtualMinBufferPx\" [nzVirtualForTrackBy]=\"virtualForTrackBy\"\n  [nzNoResult]=\"noResult\" [nzPageSizeOptions]=\"page.pageSizes\" [nzShowQuickJumper]=\"page.showQuickJumper\" [nzShowSizeChanger]=\"page.showSize\" [nzPaginationPosition]=\"page.position\" [nzShowTotal]=\"totalTpl\">\n  <thead class=\"st__head\">\n    <tr *ngFor=\"let row of _headers\">\n      <th *ngIf=\"expand\" nzWidth=\"50px\" [attr.rowspan]=\"3\"></th>\n      <th *ngFor=\"let h of row; let index=index;\" [attr.colspan]=\"h.colSpan\" [attr.rowspan]=\"h.rowSpan\"\n        [nzWidth]=\"h.column.width\" [nzLeft]=\"h.column._left\" [nzRight]=\"h.column._right\"\n        [ngClass]=\"h.column.className\" [attr.data-col]=\"h.column.indexKey\" [nzShowSort]=\"h.column._sort.enabled\"\n        [nzSortOrder]=\"h.column._sort.default\" (nzSortOrderChange)=\"sort(h.column, index, $event)\" [nzCustomFilter]=\"h.column.filter\">\n        <ng-template #renderTitle [ngTemplateOutlet]=\"h.column.__renderTitle\" [ngTemplateOutletContext]=\"{$implicit: c, index: index }\"></ng-template>\n        <ng-container *ngIf=\"!h.column.__renderTitle; else renderTitle\">\n          <ng-container [ngSwitch]=\"h.column.type\">\n            <ng-container *ngSwitchCase=\"'checkbox'\">\n              <ng-container *ngIf=\"h.column.selections.length === 0\">\n                <ng-template [ngTemplateOutlet]=\"chkAllTpl\" [ngTemplateOutletContext]=\"{$implicit: false }\">\n                </ng-template>\n              </ng-container>\n              <div *ngIf=\"h.column.selections.length > 0\" class=\"ant-table-selection\">\n                <ng-template [ngTemplateOutlet]=\"chkAllTpl\" [ngTemplateOutletContext]=\"{$implicit: true }\">\n                </ng-template>\n                <div *ngIf=\"h.column.selections.length\" nz-dropdown nzPlacement=\"bottomLeft\" [nzDropdownMenu]=\"selectionMenu\" class=\"ant-table-selection-down st__checkall-selection\">\n                  <i nz-icon nzType=\"down\"></i>\n                </div>\n                <nz-dropdown-menu #selectionMenu=\"nzDropdownMenu\">\n                  <ul nz-menu class=\"ant-table-selection-menu\">\n                    <li nz-menu-item *ngFor=\"let rw of h.column.selections\" (click)=\"_rowSelection(rw)\" [innerHTML]=\"rw.text\">\n                    </li>\n                  </ul>\n                </nz-dropdown-menu>\n              </div>\n            </ng-container>\n            <ng-container *ngSwitchDefault>\n              <ng-template [ngTemplateOutlet]=\"titleTpl\" [ngTemplateOutletContext]=\"{$implicit: h.column.title }\"></ng-template>\n            </ng-container>\n          </ng-container>\n        </ng-container>\n        <div nz-th-extra *ngIf=\"h.column.filter\" class=\"ant-table-filter-trigger-container st__filter\" [class.ant-table-filter-trigger-container-open]=\"h.column.filter.visible\">\n          <span class=\"ant-table-filter-trigger\" [class.ant-table-filter-open]=\"h.column.filter.default\" [class.active]=\"h.column.filter.visible\"\n            nz-dropdown [nzDropdownMenu]=\"filterMenu\" nzTrigger=\"click\" [nzClickHide]=\"false\" [(nzVisible)]=\"h.column.filter.visible\" nzOverlayClassName=\"st__filter-wrap\">\n            <i nz-icon [nzType]=\"h.column.filter.icon.type\" [nzTheme]=\"h.column.filter.icon.theme\"></i>\n          </span>\n          <nz-dropdown-menu #filterMenu=\"nzDropdownMenu\">\n            <div class=\"ant-table-filter-dropdown\">\n              <ng-container [ngSwitch]=\"h.column.filter.type\">\n                <div *ngSwitchCase=\"'keyword'\" class=\"st__filter-keyword\">\n                  <input type=\"text\" nz-input [attr.placeholder]=\"h.column.filter.menus[0].text\"\n                    [(ngModel)]=\"h.column.filter.menus[0].value\" />\n                </div>\n                <ul *ngSwitchDefault nz-menu>\n                  <ng-container *ngIf=\"h.column.filter.multiple\">\n                    <li nz-menu-item *ngFor=\"let filter of h.column.filter.menus\">\n                      <label nz-checkbox [(ngModel)]=\"filter.checked\">{{filter.text}}</label>\n                    </li>\n                  </ng-container>\n                  <ng-container *ngIf=\"!h.column.filter.multiple\">\n                    <li nz-menu-item *ngFor=\"let filter of h.column.filter.menus\">\n                      <label nz-radio [ngModel]=\"filter.checked\"\n                        (ngModelChange)=\"_filterRadio(c, filter, $event)\">{{filter.text}}</label>\n                    </li>\n                  </ng-container>\n                </ul>\n              </ng-container>\n              <div class=\"ant-table-filter-dropdown-btns\">\n                <a class=\"ant-table-filter-dropdown-link confirm\" (click)=\"h.column.filter.visible = false\">\n                  <span (click)=\"_filterConfirm(c)\">{{h.column.filter.confirmText || locale.filterConfirm}}</span>\n                </a>\n                <a class=\"ant-table-filter-dropdown-link clear\" (click)=\"h.column.filter.visible = false\">\n                  <span (click)=\"_filterClear(c)\">{{h.column.filter.clearText || locale.filterReset}}</span>\n                </a>\n              </div>\n            </div>\n          </nz-dropdown-menu>\n        </div>\n      </th>\n    </tr>\n  </thead>\n  <tbody class=\"st__body\">\n    <ng-container *ngIf=\"!_loading\">\n      <ng-template [ngTemplateOutlet]=\"bodyHeader\" [ngTemplateOutletContext]=\"{$implicit: _statistical }\"></ng-template>\n    </ng-container>\n    <ng-template #bodyTpl let-i let-index=\"index\">\n      <tr [attr.data-index]=\"index\" (click)=\"_rowClick($event, i, index)\" [ngClass]=\"i._rowClassName\">\n        <td *ngIf=\"expand\" [nzShowExpand]=\"expand && i.showExpand !== false\" [nzExpand]=\"i.expand\" (nzExpandChange)=\"_expandChange(i, $event)\" nzWidth=\"50px\"></td>\n        <td *ngFor=\"let c of _columns; let cIdx=index\" [nzLeft]=\"c._left\" [nzRight]=\"c._right\" [ngClass]=\"columnClass(c)\" [attr.colspan]=\"c.colSpan\">\n          <span *ngIf=\"responsive\" class=\"ant-table-rep__title\">\n            <ng-template [ngTemplateOutlet]=\"titleTpl\" [ngTemplateOutletContext]=\"{$implicit: c.title }\"></ng-template>\n          </span>\n          <span>\n            <ng-template #render [ngTemplateOutlet]=\"c.__render\" [ngTemplateOutletContext]=\"{$implicit: i, index: index, column: c }\"></ng-template>\n            <ng-container *ngIf=\"!c.__render; else render\">\n              <ng-container [ngSwitch]=\"c.type\">\n                <label *ngSwitchCase=\"'checkbox'\" nz-checkbox [nzDisabled]=\"i.disabled\" [ngModel]=\"i.checked\" (ngModelChange)=\"_checkSelection(i, $event)\"></label>\n                <label *ngSwitchCase=\"'radio'\" nz-radio [nzDisabled]=\"i.disabled\" [ngModel]=\"i.checked\" (ngModelChange)=\"_refRadio($event, i)\"></label>\n                <a *ngSwitchCase=\"'link'\" (click)=\"_click($event, i, c)\" [innerHTML]=\"i._values[cIdx]._text\"></a>\n                <ng-container *ngIf=\"i._values[cIdx].text\">\n                  <nz-tag *ngSwitchCase=\"'tag'\" [nzColor]=\"i._values[cIdx].color\">\n                    <span [innerHTML]=\"i._values[cIdx]._text\"></span>\n                  </nz-tag>\n                  <nz-badge *ngSwitchCase=\"'badge'\" [nzStatus]=\"i._values[cIdx].color\" [nzText]=\"i._values[cIdx].text\"></nz-badge>\n                </ng-container>\n                <ng-template *ngSwitchCase=\"'widget'\" st-widget-host [record]=\"i\" [column]=\"c\"></ng-template>\n                <span *ngSwitchDefault [innerHTML]=\"i._values[cIdx]._text\" [attr.title]=\"isTruncate(c) ? i._values[cIdx].text : null\"></span>\n              </ng-container>\n              <ng-container *ngFor=\"let btn of _validBtns(c.buttons, i, c); let last=last\">\n                <a *ngIf=\"btn.children.length > 0\" nz-dropdown [nzDropdownMenu]=\"btnMenu\" nzOverlayClassName=\"st__btn-sub\">\n                  <span [innerHTML]=\"_btnText(i, btn)\"></span>\n                  <i nz-icon nzType=\"down\"></i>\n                </a>\n                <nz-dropdown-menu #btnMenu=\"nzDropdownMenu\">\n                  <ul nz-menu>\n                    <ng-container *ngFor=\"let subBtn of _validBtns(btn.children, i, c)\">\n                      <li *ngIf=\"subBtn.type !== 'divider'\" nz-menu-item [class.st__btn-disabled]=\"subBtn._disabled\">\n                        <ng-template [ngTemplateOutlet]=\"btnTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: subBtn }\">\n                        </ng-template>\n                      </li>\n                      <li *ngIf=\"subBtn.type === 'divider'\" nz-menu-divider></li>\n                    </ng-container>\n                  </ul>\n                </nz-dropdown-menu>\n                <span *ngIf=\"btn.children.length == 0\" [class.st__btn-disabled]=\"btn._disabled\">\n                  <ng-template [ngTemplateOutlet]=\"btnTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\">\n                  </ng-template>\n                </span>\n                <nz-divider *ngIf=\"!last\" nzType=\"vertical\"></nz-divider>\n              </ng-container>\n              <ng-template [ngIf]=\"!c.__renderExpanded\" [ngTemplateOutlet]=\"c.__renderExpanded\" [ngTemplateOutletContext]=\"{$implicit: i, index: index, column: c }\"></ng-template>\n            </ng-container>\n          </span>\n        </td>\n      </tr>\n      <tr [nzExpand]=\"i.expand\">\n        <ng-template [ngTemplateOutlet]=\"expand\" [ngTemplateOutletContext]=\"{$implicit: i, index: index }\"></ng-template>\n      </tr>\n    </ng-template>\n    <ng-container *ngIf=\"!virtualScroll\">\n      <ng-container *ngFor=\"let i of _data; let index=index\">\n        <ng-template [ngTemplateOutlet]=\"bodyTpl\" [ngTemplateOutletContext]=\"{$implicit: i, index: index }\">\n        </ng-template>\n      </ng-container>\n    </ng-container>\n    <ng-container *ngIf=\"virtualScroll\">\n      <ng-template nz-virtual-scroll let-i let-index=\"index\">\n        <ng-template [ngTemplateOutlet]=\"bodyTpl\" [ngTemplateOutletContext]=\"{$implicit: i, index: index }\">\n        </ng-template>\n      </ng-template>\n    </ng-container>\n    <ng-container *ngIf=\"!_loading\">\n      <ng-template [ngTemplateOutlet]=\"body\" [ngTemplateOutletContext]=\"{$implicit: _statistical }\"></ng-template>\n    </ng-container>\n  </tbody>\n  <ng-template #totalTpl let-range=\"range\" let-total>{{ renderTotal(total, range) }}</ng-template>\n</nz-table>\n",
                providers: [STDataSource, STRowSource, STColumnSource, STExport, CNCurrencyPipe, DatePipe, YNPipe, DecimalPipe],
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
    STComponent.prototype._headers;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy9zdC8iLCJzb3VyY2VzIjpbInN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3hELE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBR0wsUUFBUSxFQUNSLE1BQU0sRUFHTixXQUFXLEVBRVgsU0FBUyxFQUNULGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUVMLGdCQUFnQixFQUNoQixjQUFjLEVBQ2QsUUFBUSxFQUNSLGtCQUFrQixFQUNsQixZQUFZLEVBRVosV0FBVyxFQUNYLE1BQU0sR0FDUCxNQUFNLGNBQWMsQ0FBQztBQUN0QixPQUFPLEVBQUUsa0JBQWtCLEVBQWlCLFlBQVksRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUVwSCxPQUFPLEVBQUUsZ0JBQWdCLEVBQWUsTUFBTSxxQkFBcUIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsSUFBSSxFQUFjLEVBQUUsRUFBRSxPQUFPLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQ25FLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxZQUFZLEVBQTJDLE1BQU0sa0JBQWtCLENBQUM7QUFDekYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN2QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JB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L0IsNEJBQWtDOztJQUNsQyw4QkFBd0M7O0lBQ3hDLG1DQUF5Qzs7SUFDekMsdUNBQTZDOztJQUM3QywrQkFBMEM7O0lBQzFDLDJCQUE4Qzs7SUFDOUMsNkJBQTRDOztJQUM1QyxpQ0FBa0M7Ozs7O0lBQ2xDLGlDQUFpQzs7SUFjakMsbUNBQXNDOztJQVF0Qyw2QkFBNEM7O0lBQzVDLDZCQUE0Qzs7SUFDNUMsaUNBQXVEOztJQUN2RCwyQkFBaUQ7O0lBQ2pELHVDQUFrRDs7SUFDbEQsc0NBQWlEOztJQUNqRCw2QkFBa0U7O0lBQ2xFLCtCQUE4Qzs7SUFDOUMsa0NBQStCOztJQUMvQixtQ0FBMkM7O0lBQzNDLGlDQUFvRDs7SUFDcEQsaURBQTZEOztJQUU3RCw0QkFBdUQ7O0lBRXZELDZCQUF5RDs7SUFDekQsb0NBQStDOztJQUMvQyxzQ0FBNkM7O0lBQzdDLHlDQUFpRDs7SUFDakQseUNBQWlEOztJQUNqRCx3Q0FBMEU7Ozs7O0lBdUJ4RSwwQkFBOEI7Ozs7O0lBQzlCLDZCQUFzQjs7Ozs7SUFDdEIseUJBQXNCOzs7OztJQUN0QixnQ0FBMkI7Ozs7O0lBQzNCLGtDQUFnQzs7Ozs7SUFDaEMsbUNBQWtDOzs7OztJQUNsQywwQkFBa0M7Ozs7O0lBQ2xDLG1DQUFvQzs7Ozs7SUFDcEMsaUNBQWdDOzs7OztJQUNoQyxnQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZWNpbWFsUGlwZSwgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZSxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFRyYWNrQnlGdW5jdGlvbixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgQWxhaW5JMThOU2VydmljZSxcbiAgQUxBSU5fSTE4Tl9UT0tFTixcbiAgQ05DdXJyZW5jeVBpcGUsXG4gIERhdGVQaXBlLFxuICBEZWxvbkxvY2FsZVNlcnZpY2UsXG4gIERyYXdlckhlbHBlcixcbiAgTG9jYWxlRGF0YSxcbiAgTW9kYWxIZWxwZXIsXG4gIFlOUGlwZSxcbn0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IEFsYWluQ29uZmlnU2VydmljZSwgQWxhaW5TVENvbmZpZywgZGVlcE1lcmdlS2V5LCBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyLCB0b0Jvb2xlYW4gfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgTnpUYWJsZUNvbXBvbmVudCwgTnpUYWJsZURhdGEgfSBmcm9tICduZy16b3Jyby1hbnRkL3RhYmxlJztcbmltcG9ydCB7IGZyb20sIE9ic2VydmFibGUsIG9mLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU1RDb2x1bW5Tb3VyY2UgfSBmcm9tICcuL3N0LWNvbHVtbi1zb3VyY2UnO1xuaW1wb3J0IHsgU1REYXRhU291cmNlLCBTVERhdGFTb3VyY2VPcHRpb25zLCBTVERhdGFTb3VyY2VSZXN1bHQgfSBmcm9tICcuL3N0LWRhdGEtc291cmNlJztcbmltcG9ydCB7IFNURXhwb3J0IH0gZnJvbSAnLi9zdC1leHBvcnQnO1xuaW1wb3J0IHsgU1RSb3dTb3VyY2UgfSBmcm9tICcuL3N0LXJvdy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU1RfREVGVUxBVF9DT05GSUcgfSBmcm9tICcuL3N0LmNvbmZpZyc7XG5pbXBvcnQge1xuICBTVENoYW5nZSxcbiAgU1RDaGFuZ2VUeXBlLFxuICBTVENvbHVtbixcbiAgU1RDb2x1bW5CdXR0b24sXG4gIFNUQ29sdW1uRmlsdGVyTWVudSxcbiAgU1RDb2x1bW5TZWxlY3Rpb24sXG4gIFNURGF0YSxcbiAgU1RFcnJvcixcbiAgU1RFeHBvcnRPcHRpb25zLFxuICBTVExvYWRPcHRpb25zLFxuICBTVE11bHRpU29ydCxcbiAgU1RQYWdlLFxuICBTVFJlcSxcbiAgU1RSZXMsXG4gIFNUUmVzZXRDb2x1bW5zT3B0aW9uLFxuICBTVFJvd0NsYXNzTmFtZSxcbiAgU1RTaW5nbGVTb3J0LFxuICBTVFN0YXRpc3RpY2FsUmVzdWx0cyxcbiAgU1RXaWR0aE1vZGUsXG59IGZyb20gJy4vc3QuaW50ZXJmYWNlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N0JyxcbiAgZXhwb3J0QXM6ICdzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdC5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW1NURGF0YVNvdXJjZSwgU1RSb3dTb3VyY2UsIFNUQ29sdW1uU291cmNlLCBTVEV4cG9ydCwgQ05DdXJyZW5jeVBpcGUsIERhdGVQaXBlLCBZTlBpcGUsIERlY2ltYWxQaXBlXSxcbiAgaG9zdDoge1xuICAgICdbY2xhc3Muc3RdJzogYHRydWVgLFxuICAgICdbY2xhc3Muc3RfX3AtbGVmdF0nOiBgcGFnZS5wbGFjZW1lbnQgPT09ICdsZWZ0J2AsXG4gICAgJ1tjbGFzcy5zdF9fcC1jZW50ZXJdJzogYHBhZ2UucGxhY2VtZW50ID09PSAnY2VudGVyJ2AsXG4gICAgJ1tjbGFzcy5zdF9fd2lkdGgtc3RyaWN0XSc6IGB3aWR0aE1vZGUudHlwZSA9PT0gJ3N0cmljdCdgLFxuICAgICdbY2xhc3MuYW50LXRhYmxlLXJlcF0nOiBgcmVzcG9uc2l2ZWAsXG4gICAgJ1tjbGFzcy5hbnQtdGFibGUtcmVwX19oaWRlLWhlYWRlci1mb290ZXJdJzogYHJlc3BvbnNpdmVIaWRlSGVhZGVyRm9vdGVyYCxcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBTVENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIGRhdGEkOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgdG90YWxUcGwgPSBgYDtcbiAgcHJpdmF0ZSBjb2c6IEFsYWluU1RDb25maWc7XG4gIHByaXZhdGUgcm93Q2xpY2tDb3VudCA9IDA7XG4gIHByaXZhdGUgX3JlcTogU1RSZXE7XG4gIHByaXZhdGUgX3JlczogU1RSZXM7XG4gIHByaXZhdGUgX3BhZ2U6IFNUUGFnZTtcbiAgcHJpdmF0ZSBfd2lkdGhNb2RlOiBTVFdpZHRoTW9kZTtcbiAgbG9jYWxlOiBMb2NhbGVEYXRhID0ge307XG4gIF9sb2FkaW5nID0gZmFsc2U7XG4gIF9kYXRhOiBTVERhdGFbXSA9IFtdO1xuICBfc3RhdGlzdGljYWw6IFNUU3RhdGlzdGljYWxSZXN1bHRzID0ge307XG4gIF9pc1BhZ2luYXRpb24gPSB0cnVlO1xuICBfYWxsQ2hlY2tlZCA9IGZhbHNlO1xuICBfYWxsQ2hlY2tlZERpc2FibGVkID0gZmFsc2U7XG4gIF9pbmRldGVybWluYXRlID0gZmFsc2U7XG4gIF9oZWFkZXJzOiBTVENvbHVtbltdW10gPSBbXTtcbiAgX2NvbHVtbnM6IFNUQ29sdW1uW10gPSBbXTtcbiAgQFZpZXdDaGlsZCgndGFibGUnLCB7IHN0YXRpYzogZmFsc2UgfSkgcmVhZG9ubHkgb3JnVGFibGU6IE56VGFibGVDb21wb25lbnQ7XG5cbiAgQElucHV0KClcbiAgZ2V0IHJlcSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVxO1xuICB9XG4gIHNldCByZXEodmFsdWU6IFNUUmVxKSB7XG4gICAgdGhpcy5fcmVxID0gZGVlcE1lcmdlS2V5KHt9LCB0cnVlLCB0aGlzLmNvZy5yZXEsIHZhbHVlKTtcbiAgfVxuICAvKiog6L+U5Zue5L2T6YWN572uICovXG4gIEBJbnB1dCgpXG4gIGdldCByZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcztcbiAgfVxuICBzZXQgcmVzKHZhbHVlOiBTVFJlcykge1xuICAgIGNvbnN0IGl0ZW0gPSAodGhpcy5fcmVzID0gZGVlcE1lcmdlS2V5KHt9LCB0cnVlLCB0aGlzLmNvZy5yZXMsIHZhbHVlKSk7XG4gICAgY29uc3QgcmVOYW1lID0gaXRlbS5yZU5hbWUhO1xuICAgIGlmICghQXJyYXkuaXNBcnJheShyZU5hbWUubGlzdCkpIHJlTmFtZS5saXN0ID0gcmVOYW1lLmxpc3QhLnNwbGl0KCcuJyk7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHJlTmFtZS50b3RhbCkpIHJlTmFtZS50b3RhbCA9IHJlTmFtZS50b3RhbCEuc3BsaXQoJy4nKTtcbiAgICB0aGlzLl9yZXMgPSBpdGVtO1xuICB9XG4gIEBJbnB1dCgpXG4gIGdldCBwYWdlKCkge1xuICAgIHJldHVybiB0aGlzLl9wYWdlO1xuICB9XG4gIHNldCBwYWdlKHZhbHVlOiBTVFBhZ2UpIHtcbiAgICB0aGlzLl9wYWdlID0geyAuLi50aGlzLmNvZy5wYWdlLCAuLi52YWx1ZSB9O1xuICAgIHRoaXMudXBkYXRlVG90YWxUcGwoKTtcbiAgfVxuICBASW5wdXQoKSBkYXRhOiBzdHJpbmcgfCBTVERhdGFbXSB8IE9ic2VydmFibGU8U1REYXRhW10+O1xuICBASW5wdXQoKSBjb2x1bW5zOiBTVENvbHVtbltdID0gW107XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHBzID0gMTA7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHBpID0gMTtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgdG90YWwgPSAwO1xuICBASW5wdXQoKSBsb2FkaW5nOiBib29sZWFuIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGxvYWRpbmdEZWxheSA9IDA7XG4gIEBJbnB1dCgpIGxvYWRpbmdJbmRpY2F0b3I6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYm9yZGVyZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgc2l6ZTogJ3NtYWxsJyB8ICdtaWRkbGUnIHwgJ2RlZmF1bHQnO1xuICBASW5wdXQoKSBzY3JvbGw6IHsgeT86IHN0cmluZzsgeD86IHN0cmluZyB9O1xuICBASW5wdXQoKSBzaW5nbGVTb3J0OiBTVFNpbmdsZVNvcnQ7XG4gIHByaXZhdGUgX211bHRpU29ydD86IFNUTXVsdGlTb3J0O1xuICBASW5wdXQoKVxuICBnZXQgbXVsdGlTb3J0KCkge1xuICAgIHJldHVybiB0aGlzLl9tdWx0aVNvcnQ7XG4gIH1cbiAgc2V0IG11bHRpU29ydCh2YWx1ZTogTnpTYWZlQW55KSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nICYmICF0b0Jvb2xlYW4odmFsdWUpKSB7XG4gICAgICB0aGlzLl9tdWx0aVNvcnQgPSB1bmRlZmluZWQ7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX211bHRpU29ydCA9IHtcbiAgICAgIC4uLih0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnID8gdmFsdWUgOiB7fSksXG4gICAgfTtcbiAgfVxuICBASW5wdXQoKSByb3dDbGFzc05hbWU6IFNUUm93Q2xhc3NOYW1lO1xuICBASW5wdXQoKVxuICBzZXQgd2lkdGhNb2RlKHZhbHVlOiBTVFdpZHRoTW9kZSkge1xuICAgIHRoaXMuX3dpZHRoTW9kZSA9IHsgLi4udGhpcy5jb2cud2lkdGhNb2RlLCAuLi52YWx1ZSB9O1xuICB9XG4gIGdldCB3aWR0aE1vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dpZHRoTW9kZTtcbiAgfVxuICBASW5wdXQoKSBoZWFkZXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBmb290ZXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBib2R5SGVhZGVyOiBUZW1wbGF0ZVJlZjxTVFN0YXRpc3RpY2FsUmVzdWx0cz47XG4gIEBJbnB1dCgpIGJvZHk6IFRlbXBsYXRlUmVmPFNUU3RhdGlzdGljYWxSZXN1bHRzPjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGV4cGFuZFJvd0J5Q2xpY2sgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGV4cGFuZEFjY29yZGlvbiA9IGZhbHNlO1xuICBASW5wdXQoKSBleHBhbmQ6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiB7fTsgY29sdW1uOiBTVENvbHVtbiB9PjtcbiAgQElucHV0KCkgbm9SZXN1bHQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSB3aWR0aENvbmZpZzogc3RyaW5nW107XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHJvd0NsaWNrVGltZSA9IDIwMDtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHJlc3BvbnNpdmU6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgcmVzcG9uc2l2ZUhpZGVIZWFkZXJGb290ZXI6IGJvb2xlYW47XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1vdXRwdXQtbmF0aXZlXG4gIEBPdXRwdXQoKSByZWFkb25seSBlcnJvciA9IG5ldyBFdmVudEVtaXR0ZXI8U1RFcnJvcj4oKTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLW91dHB1dC1uYXRpdmVcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8U1RDaGFuZ2U+KCk7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSB2aXJ0dWFsU2Nyb2xsID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHZpcnR1YWxJdGVtU2l6ZSA9IDU0O1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSB2aXJ0dWFsTWF4QnVmZmVyUHggPSAyMDA7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHZpcnR1YWxNaW5CdWZmZXJQeCA9IDEwMDtcbiAgQElucHV0KCkgdmlydHVhbEZvclRyYWNrQnk6IFRyYWNrQnlGdW5jdGlvbjxOelRhYmxlRGF0YT4gPSBpbmRleCA9PiBpbmRleDtcblxuICAvKipcbiAgICogR2V0IHRoZSBudW1iZXIgb2YgdGhlIGN1cnJlbnQgcGFnZVxuICAgKi9cbiAgZ2V0IGNvdW50KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGEubGVuZ3RoO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgZGF0YSBvZiB0aGUgY3VycmVudCBwYWdlXG4gICAqL1xuICBnZXQgbGlzdCgpOiBTVERhdGFbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gIH1cblxuICBwcml2YXRlIGdldCByb3V0ZXJTdGF0ZSgpIHtcbiAgICBjb25zdCB7IHBpLCBwcywgdG90YWwgfSA9IHRoaXM7XG4gICAgcmV0dXJuIHsgcGksIHBzLCB0b3RhbCB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChBTEFJTl9JMThOX1RPS0VOKSBpMThuU3J2OiBBbGFpbkkxOE5TZXJ2aWNlLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBleHBvcnRTcnY6IFNURXhwb3J0LFxuICAgIHByaXZhdGUgbW9kYWxIZWxwZXI6IE1vZGFsSGVscGVyLFxuICAgIHByaXZhdGUgZHJhd2VySGVscGVyOiBEcmF3ZXJIZWxwZXIsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IGFueSxcbiAgICBwcml2YXRlIGNvbHVtblNvdXJjZTogU1RDb2x1bW5Tb3VyY2UsXG4gICAgcHJpdmF0ZSBkYXRhU291cmNlOiBTVERhdGFTb3VyY2UsXG4gICAgcHJpdmF0ZSBkZWxvbkkxOG46IERlbG9uTG9jYWxlU2VydmljZSxcbiAgICBjb25maWdTcnY6IEFsYWluQ29uZmlnU2VydmljZSxcbiAgKSB7XG4gICAgdGhpcy5zZXRDb2coY29uZmlnU3J2Lm1lcmdlPEFsYWluU1RDb25maWcsICdzdCc+KCdzdCcsIFNUX0RFRlVMQVRfQ09ORklHKSk7XG5cbiAgICB0aGlzLmRlbG9uSTE4bi5jaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5sb2NhbGUgPSB0aGlzLmRlbG9uSTE4bi5nZXREYXRhKCdzdCcpO1xuICAgICAgaWYgKHRoaXMuX2NvbHVtbnMubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVRvdGFsVHBsKCk7XG4gICAgICAgIHRoaXMuY2QoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGkxOG5TcnYuY2hhbmdlXG4gICAgICAucGlwZShcbiAgICAgICAgdGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSxcbiAgICAgICAgZmlsdGVyKCgpID0+IHRoaXMuX2NvbHVtbnMubGVuZ3RoID4gMCksXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMucmVmcmVzaENvbHVtbnMoKSk7XG4gIH1cblxuICBwcml2YXRlIHNldENvZyhjb2c6IEFsYWluU1RDb25maWcpOiB2b2lkIHtcbiAgICBjb25zdCBjb3B5TXVsdGlTb3J0ID0geyAuLi5jb2cubXVsdGlTb3J0IH07XG4gICAgLy8gQmVjYXVzZSBtdWx0aVNvcnQuZ2xvYmFsIHdpbGwgYWZmZWN0IHRoZSByZXN1bHQsIGl0IHNob3VsZCBiZSByZW1vdmVkIGZpcnN0LCBhbmQgbXVsdGlTb3J0IHdpbGwgYmUgb3BlcmF0ZWQgYWdhaW4gYWZ0ZXIgcHJvY2Vzc2luZy5cbiAgICBkZWxldGUgY29nLm11bHRpU29ydDtcbiAgICB0aGlzLmNvZyA9IGNvZztcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvZyk7XG5cbiAgICBpZiAoY29weU11bHRpU29ydC5nbG9iYWwgIT09IGZhbHNlKSB7XG4gICAgICB0aGlzLm11bHRpU29ydCA9IGNvcHlNdWx0aVNvcnQ7XG4gICAgfVxuICAgIHRoaXMuY29sdW1uU291cmNlLnNldENvZyhjb2cpO1xuICB9XG5cbiAgY2QoKSB7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVuZGVyVG90YWwodG90YWw6IHN0cmluZywgcmFuZ2U6IHN0cmluZ1tdKSB7XG4gICAgcmV0dXJuIHRoaXMudG90YWxUcGxcbiAgICAgID8gdGhpcy50b3RhbFRwbC5yZXBsYWNlKCd7e3RvdGFsfX0nLCB0b3RhbCkucmVwbGFjZSgne3tyYW5nZVswXX19JywgcmFuZ2VbMF0pLnJlcGxhY2UoJ3t7cmFuZ2VbMV19fScsIHJhbmdlWzFdKVxuICAgICAgOiAnJztcbiAgfVxuXG4gIGlzVHJ1bmNhdGUoY29sdW1uOiBTVENvbHVtbik6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIWNvbHVtbi53aWR0aCAmJiB0aGlzLndpZHRoTW9kZS5zdHJpY3RCZWhhdmlvciA9PT0gJ3RydW5jYXRlJyAmJiBjb2x1bW4udHlwZSAhPT0gJ2ltZyc7XG4gIH1cblxuICBjb2x1bW5DbGFzcyhjb2x1bW46IFNUQ29sdW1uKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuIGNvbHVtbi5jbGFzc05hbWUgfHwgKHRoaXMuaXNUcnVuY2F0ZShjb2x1bW4pID8gJ3RleHQtdHJ1bmNhdGUnIDogbnVsbCk7XG4gIH1cblxuICBwcml2YXRlIGNoYW5nZUVtaXQodHlwZTogU1RDaGFuZ2VUeXBlLCBkYXRhPzogYW55KSB7XG4gICAgY29uc3QgcmVzOiBTVENoYW5nZSA9IHtcbiAgICAgIHR5cGUsXG4gICAgICBwaTogdGhpcy5waSxcbiAgICAgIHBzOiB0aGlzLnBzLFxuICAgICAgdG90YWw6IHRoaXMudG90YWwsXG4gICAgfTtcbiAgICBpZiAoZGF0YSAhPSBudWxsKSB7XG4gICAgICByZXNbdHlwZV0gPSBkYXRhO1xuICAgIH1cbiAgICB0aGlzLmNoYW5nZS5lbWl0KHJlcyk7XG4gIH1cblxuICAvLyAjcmVnaW9uIGRhdGFcblxuICAvKipcbiAgICog6I635Y+W6L+H5ruk5ZCO5omA5pyJ5pWw5o2uXG4gICAqIC0g5pys5Zyw5pWw5o2u77ya5YyF5ZCr5o6S5bqP44CB6L+H5ruk5ZCO5LiN5YiG6aG15pWw5o2uXG4gICAqIC0g6L+c56iL5pWw5o2u77ya5LiN5Lyg6YCSIGBwaWDjgIFgcHNgIOS4pOS4quWPguaVsFxuICAgKi9cbiAgZ2V0IGZpbHRlcmVkRGF0YSgpOiBQcm9taXNlPFNURGF0YVtdPiB7XG4gICAgcmV0dXJuIHRoaXMubG9hZERhdGEoeyBwYWdpbmF0b3I6IGZhbHNlIH0gYXMgYW55KS50aGVuKHJlcyA9PiByZXMubGlzdCk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVRvdGFsVHBsKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgdG90YWwgfSA9IHRoaXMucGFnZTtcbiAgICBpZiAodHlwZW9mIHRvdGFsID09PSAnc3RyaW5nJyAmJiB0b3RhbC5sZW5ndGgpIHtcbiAgICAgIHRoaXMudG90YWxUcGwgPSB0b3RhbDtcbiAgICB9IGVsc2UgaWYgKHRvQm9vbGVhbih0b3RhbCkpIHtcbiAgICAgIHRoaXMudG90YWxUcGwgPSB0aGlzLmxvY2FsZS50b3RhbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50b3RhbFRwbCA9ICcnO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0TG9hZGluZyh2YWw6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5sb2FkaW5nID09IG51bGwpIHtcbiAgICAgIHRoaXMuX2xvYWRpbmcgPSB2YWw7XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBsb2FkRGF0YShvcHRpb25zPzogU1REYXRhU291cmNlT3B0aW9ucyk6IFByb21pc2U8U1REYXRhU291cmNlUmVzdWx0PiB7XG4gICAgY29uc3QgeyBwaSwgcHMsIGRhdGEsIHJlcSwgcmVzLCBwYWdlLCB0b3RhbCwgc2luZ2xlU29ydCwgbXVsdGlTb3J0LCByb3dDbGFzc05hbWUgfSA9IHRoaXM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlUHJvbWlzZSwgcmVqZWN0UHJvbWlzZSkgPT4ge1xuICAgICAgaWYgKHRoaXMuZGF0YSQpIHtcbiAgICAgICAgdGhpcy5kYXRhJC51bnN1YnNjcmliZSgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmRhdGEkID0gdGhpcy5kYXRhU291cmNlXG4gICAgICAgIC5wcm9jZXNzKHtcbiAgICAgICAgICBwaSxcbiAgICAgICAgICBwcyxcbiAgICAgICAgICB0b3RhbCxcbiAgICAgICAgICBkYXRhLFxuICAgICAgICAgIHJlcSxcbiAgICAgICAgICByZXMsXG4gICAgICAgICAgcGFnZSxcbiAgICAgICAgICBjb2x1bW5zOiB0aGlzLl9jb2x1bW5zLFxuICAgICAgICAgIHNpbmdsZVNvcnQsXG4gICAgICAgICAgbXVsdGlTb3J0LFxuICAgICAgICAgIHJvd0NsYXNzTmFtZSxcbiAgICAgICAgICBwYWdpbmF0b3I6IHRydWUsXG4gICAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgfSlcbiAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSlcbiAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICByZXN1bHQgPT4gcmVzb2x2ZVByb21pc2UocmVzdWx0KSxcbiAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ3N0LmxvYWREYXRlJywgZXJyb3IpO1xuICAgICAgICAgICAgcmVqZWN0UHJvbWlzZShlcnJvcik7XG4gICAgICAgICAgfSxcbiAgICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgbG9hZFBhZ2VEYXRhKCk6IFByb21pc2U8dGhpcz4ge1xuICAgIHRoaXMuc2V0TG9hZGluZyh0cnVlKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5sb2FkRGF0YSgpO1xuICAgICAgdGhpcy5zZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIGlmICh0eXBlb2YgcmVzdWx0LnBpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLnBpID0gcmVzdWx0LnBpO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiByZXN1bHQucHMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMucHMgPSByZXN1bHQucHM7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHJlc3VsdC50b3RhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy50b3RhbCA9IHJlc3VsdC50b3RhbDtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgcmVzdWx0LnBhZ2VTaG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLl9pc1BhZ2luYXRpb24gPSByZXN1bHQucGFnZVNob3c7XG4gICAgICB9XG4gICAgICB0aGlzLl9kYXRhID0gcmVzdWx0Lmxpc3QgYXMgU1REYXRhW107XG4gICAgICB0aGlzLl9zdGF0aXN0aWNhbCA9IHJlc3VsdC5zdGF0aXN0aWNhbCBhcyBTVFN0YXRpc3RpY2FsUmVzdWx0cztcbiAgICAgIHRoaXMuY2hhbmdlRW1pdCgnbG9hZGVkJywgcmVzdWx0Lmxpc3QpO1xuICAgICAgcmV0dXJuIHRoaXMuX3JlZkNoZWNrKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMuc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICBpZiAoIXRoaXMudW5zdWJzY3JpYmUkLmlzU3RvcHBlZCkge1xuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIHRoaXMuZXJyb3IuZW1pdCh7IHR5cGU6ICdyZXEnLCBlcnJvciB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfVxuXG4gIC8qKiDmuIXnqbrmiYDmnInmlbDmja4gKi9cbiAgY2xlYXIoY2xlYW5TdGF0dXMgPSB0cnVlKTogdGhpcyB7XG4gICAgaWYgKGNsZWFuU3RhdHVzKSB7XG4gICAgICB0aGlzLmNsZWFyU3RhdHVzKCk7XG4gICAgfVxuICAgIHRoaXMuX2RhdGEgPSBbXTtcbiAgICByZXR1cm4gdGhpcy5jZCgpO1xuICB9XG5cbiAgLyoqIOa4heepuuaJgOacieeKtuaAgSAqL1xuICBjbGVhclN0YXR1cygpOiB0aGlzIHtcbiAgICByZXR1cm4gdGhpcy5jbGVhckNoZWNrKCkuY2xlYXJSYWRpbygpLmNsZWFyRmlsdGVyKCkuY2xlYXJTb3J0KCk7XG4gIH1cblxuICAvKipcbiAgICog5qC55o2u6aG156CB6YeN5paw5Yqg6L295pWw5o2uXG4gICAqXG4gICAqIEBwYXJhbSBwaSDmjIflrprlvZPliY3pobXnoIHvvIzpu5jorqTvvJpgMWBcbiAgICogQHBhcmFtIGV4dHJhUGFyYW1zIOmHjeaWsOaMh+WumiBgZXh0cmFQYXJhbXNgIOWAvFxuICAgKiBAcGFyYW0gb3B0aW9ucyDpgInpoblcbiAgICovXG4gIGxvYWQocGkgPSAxLCBleHRyYVBhcmFtcz86IHt9LCBvcHRpb25zPzogU1RMb2FkT3B0aW9ucykge1xuICAgIGlmIChwaSAhPT0gLTEpIHRoaXMucGkgPSBwaTtcbiAgICBpZiAodHlwZW9mIGV4dHJhUGFyYW1zICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZXEucGFyYW1zID0gb3B0aW9ucyAmJiBvcHRpb25zLm1lcmdlID8geyAuLi50aGlzLnJlcS5wYXJhbXMsIC4uLmV4dHJhUGFyYW1zIH0gOiBleHRyYVBhcmFtcztcbiAgICB9XG4gICAgdGhpcy5fY2hhbmdlKCdwaScsIG9wdGlvbnMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIOmHjeaWsOWIt+aWsOW9k+WJjemhtVxuICAgKiBAcGFyYW0gZXh0cmFQYXJhbXMg6YeN5paw5oyH5a6aIGBleHRyYVBhcmFtc2Ag5YC8XG4gICAqL1xuICByZWxvYWQoZXh0cmFQYXJhbXM/OiB7fSwgb3B0aW9ucz86IFNUTG9hZE9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5sb2FkKC0xLCBleHRyYVBhcmFtcywgb3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICog6YeN572u5LiU6YeN5paw6K6+572uIGBwaWAg5Li6IGAxYO+8jOWMheWQq+S7peS4i+WAvO+8mlxuICAgKiAtIGBjaGVja2Ag5pWw5o2uXG4gICAqIC0gYHJhZGlvYCDmlbDmja5cbiAgICogLSBgc29ydGAg5pWw5o2uXG4gICAqIC0gYGZpbGV0ZXJgIOaVsOaNrlxuICAgKlxuICAgKiBAcGFyYW0gZXh0cmFQYXJhbXMg6YeN5paw5oyH5a6aIGBleHRyYVBhcmFtc2Ag5YC8XG4gICAqL1xuICByZXNldChleHRyYVBhcmFtcz86IHt9LCBvcHRpb25zPzogU1RMb2FkT3B0aW9ucykge1xuICAgIHRoaXMuY2xlYXJTdGF0dXMoKS5sb2FkKDEsIGV4dHJhUGFyYW1zLCBvcHRpb25zKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByaXZhdGUgX3RvVG9wKGVuZm9yY2U/OiBib29sZWFuKSB7XG4gICAgaWYgKCEoZW5mb3JjZSA9PSBudWxsID8gdGhpcy5wYWdlLnRvVG9wIDogZW5mb3JjZSkpIHJldHVybjtcbiAgICBjb25zdCBlbCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICBpZiAodGhpcy5zY3JvbGwpIHtcbiAgICAgIGVsLnF1ZXJ5U2VsZWN0b3IoJy5hbnQtdGFibGUtYm9keScpIS5zY3JvbGxUbygwLCAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAvLyBmaXggaGVhZGVyIGhlaWdodFxuICAgIHRoaXMuZG9jLmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgLT0gdGhpcy5wYWdlLnRvVG9wT2Zmc2V0ITtcbiAgfVxuXG4gIF9jaGFuZ2UodHlwZTogJ3BpJyB8ICdwcycsIG9wdGlvbnM/OiBTVExvYWRPcHRpb25zKSB7XG4gICAgaWYgKHR5cGUgPT09ICdwaScgfHwgKHR5cGUgPT09ICdwcycgJiYgdGhpcy5waSA8PSBNYXRoLmNlaWwodGhpcy50b3RhbCAvIHRoaXMucHMpKSkge1xuICAgICAgdGhpcy5sb2FkUGFnZURhdGEoKS50aGVuKCgpID0+IHRoaXMuX3RvVG9wKG9wdGlvbnM/LnRvVG9wKSk7XG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2VFbWl0KHR5cGUpO1xuICB9XG5cbiAgX2NsaWNrKGU6IEV2ZW50LCBpdGVtOiBTVERhdGEsIGNvbDogU1RDb2x1bW4pIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCByZXMgPSBjb2wuY2xpY2shKGl0ZW0sIHRoaXMpO1xuICAgIGlmICh0eXBlb2YgcmVzID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChyZXMsIHsgc3RhdGU6IHRoaXMucm91dGVyU3RhdGUgfSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBwcml2YXRlIGNsb3NlT3RoZXJFeHBhbmQoaXRlbTogU1REYXRhKSB7XG4gICAgaWYgKHRoaXMuZXhwYW5kQWNjb3JkaW9uID09PSBmYWxzZSkgcmV0dXJuO1xuICAgIHRoaXMuX2RhdGEuZmlsdGVyKGkgPT4gaSAhPT0gaXRlbSkuZm9yRWFjaChpID0+IChpLmV4cGFuZCA9IGZhbHNlKSk7XG4gIH1cbiAgX3Jvd0NsaWNrKGU6IEV2ZW50LCBpdGVtOiBTVERhdGEsIGluZGV4OiBudW1iZXIpIHtcbiAgICBpZiAoKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5ub2RlTmFtZSA9PT0gJ0lOUFVUJykgcmV0dXJuO1xuICAgIGNvbnN0IHsgZXhwYW5kLCBleHBhbmRSb3dCeUNsaWNrLCByb3dDbGlja1RpbWUgfSA9IHRoaXM7XG4gICAgaWYgKCEhZXhwYW5kICYmIGl0ZW0uc2hvd0V4cGFuZCAhPT0gZmFsc2UgJiYgZXhwYW5kUm93QnlDbGljaykge1xuICAgICAgaXRlbS5leHBhbmQgPSAhaXRlbS5leHBhbmQ7XG4gICAgICB0aGlzLmNsb3NlT3RoZXJFeHBhbmQoaXRlbSk7XG4gICAgICB0aGlzLmNoYW5nZUVtaXQoJ2V4cGFuZCcsIGl0ZW0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICArK3RoaXMucm93Q2xpY2tDb3VudDtcbiAgICBpZiAodGhpcy5yb3dDbGlja0NvdW50ICE9PSAxKSByZXR1cm47XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBkYXRhID0geyBlLCBpdGVtLCBpbmRleCB9O1xuICAgICAgaWYgKHRoaXMucm93Q2xpY2tDb3VudCA9PT0gMSkge1xuICAgICAgICB0aGlzLmNoYW5nZUVtaXQoJ2NsaWNrJywgZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNoYW5nZUVtaXQoJ2RibENsaWNrJywgZGF0YSk7XG4gICAgICB9XG4gICAgICB0aGlzLnJvd0NsaWNrQ291bnQgPSAwO1xuICAgIH0sIHJvd0NsaWNrVGltZSk7XG4gIH1cblxuICBfZXhwYW5kQ2hhbmdlKGl0ZW06IFNURGF0YSwgZXhwYW5kOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZXhwYW5kUm93QnlDbGljaykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpdGVtLmV4cGFuZCA9IGV4cGFuZDtcbiAgICB0aGlzLmNsb3NlT3RoZXJFeHBhbmQoaXRlbSk7XG4gICAgdGhpcy5jaGFuZ2VFbWl0KCdleHBhbmQnLCBpdGVtKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYSByb3cgaW4gdGhlIHRhYmxlLCBsaWtlIHRoaXM6XG4gICAqXG4gICAqIGBgYFxuICAgKiB0aGlzLnN0LnJlbW92ZVJvdygwKVxuICAgKiB0aGlzLnN0LnJlbW92ZVJvdyhzdERhdGFJdGVtKVxuICAgKiBgYGBcbiAgICovXG4gIHJlbW92ZVJvdyhkYXRhOiBTVERhdGEgfCBTVERhdGFbXSB8IG51bWJlcikge1xuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHRoaXMuX2RhdGEuc3BsaWNlKGRhdGEsIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgZGF0YSA9IFtkYXRhXTtcbiAgICAgIH1cblxuICAgICAgKGRhdGEgYXMgU1REYXRhW10pXG4gICAgICAgIC5tYXAoaXRlbSA9PiB0aGlzLl9kYXRhLmluZGV4T2YoaXRlbSkpXG4gICAgICAgIC5maWx0ZXIocG9zID0+IHBvcyAhPT0gLTEpXG4gICAgICAgIC5mb3JFYWNoKHBvcyA9PiB0aGlzLl9kYXRhLnNwbGljZShwb3MsIDEpKTtcbiAgICB9XG4gICAgLy8gcmVjYWxjdWxhdGUgbm9cbiAgICB0aGlzLl9jb2x1bW5zXG4gICAgICAuZmlsdGVyKHcgPT4gdy50eXBlID09PSAnbm8nKVxuICAgICAgLmZvckVhY2goYyA9PiB0aGlzLl9kYXRhLmZvckVhY2goKGksIGlkeCkgPT4gKGkuX3ZhbHVlc1tjLl9fcG9pbnRdID0geyB0ZXh0OiB0aGlzLmRhdGFTb3VyY2UuZ2V0Tm9JbmRleChpLCBjLCBpZHgpLCBvcmc6IGlkeCB9KSkpO1xuXG4gICAgcmV0dXJuIHRoaXMuY2QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSByb3cgdmFsdWUgZm9yIHRoZSBgaW5kZXhgIGluIHRoZSB0YWJsZSwgbGlrZSB0aGlzOlxuICAgKlxuICAgKiAtIGBvcHRpbm9zLnJlZnJlc2hTY2hlbWFgIFdoZXRoZXIgdG8gcmVmcmVzaCBvZiBzdCBzY2hlbWFzXG4gICAqIC0gYG9wdGlub3MuZW1pdFJlbG9hZGAgV2hldGhlciB0byB0cmlnZ2VyIGEgcmVsb2FkIGh0dHAgcmVxdWVzdCB3aGVuIGRhdGEgaXMgdXJsXG4gICAqXG4gICAqIGBgYFxuICAgKiB0aGlzLnN0LnNldFJvdygwLCB7IHByaWNlOiAxMDAgfSlcbiAgICogdGhpcy5zdC5zZXRSb3coMCwgeyBwcmljZTogMTAwLCBuYW1lOiAnYXNkZicgfSlcbiAgICogYGBgXG4gICAqL1xuICBzZXRSb3coaW5kZXg6IG51bWJlciwgaXRlbTogU1REYXRhLCBvcHRpb25zPzogeyByZWZyZXNoU2NoZW1hPzogYm9vbGVhbjsgZW1pdFJlbG9hZD86IGJvb2xlYW4gfSk6IHRoaXMge1xuICAgIG9wdGlvbnMgPSB7IHJlZnJlc2hTY2hlbWE6IGZhbHNlLCBlbWl0UmVsb2FkOiBmYWxzZSwgLi4ub3B0aW9ucyB9O1xuICAgIHRoaXMuX2RhdGFbaW5kZXhdID0gZGVlcE1lcmdlS2V5KHRoaXMuX2RhdGFbaW5kZXhdLCBmYWxzZSwgaXRlbSk7XG4gICAgdGhpcy5fZGF0YSA9IHRoaXMuZGF0YVNvdXJjZS5vcHRpbWl6ZURhdGEoeyBjb2x1bW5zOiB0aGlzLl9jb2x1bW5zLCByZXN1bHQ6IHRoaXMuX2RhdGEsIHJvd0NsYXNzTmFtZTogdGhpcy5yb3dDbGFzc05hbWUgfSk7XG4gICAgaWYgKG9wdGlvbnMucmVmcmVzaFNjaGVtYSkge1xuICAgICAgdGhpcy5yZXNldENvbHVtbnMoeyBlbWl0UmVsb2FkOiBvcHRpb25zLmVtaXRSZWxvYWQgfSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gc29ydFxuXG4gIHNvcnQoY29sOiBTVENvbHVtbiwgaWR4OiBudW1iZXIsIHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodGhpcy5tdWx0aVNvcnQpIHtcbiAgICAgIGNvbC5fc29ydCEuZGVmYXVsdCA9IHZhbHVlO1xuICAgICAgY29sLl9zb3J0IS50aWNrID0gdGhpcy5kYXRhU291cmNlLm5leHRTb3J0VGljaztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY29sdW1ucy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4gKGl0ZW0uX3NvcnQhLmRlZmF1bHQgPSBpbmRleCA9PT0gaWR4ID8gdmFsdWUgOiBudWxsKSk7XG4gICAgfVxuICAgIHRoaXMubG9hZFBhZ2VEYXRhKCk7XG4gICAgY29uc3QgcmVzID0ge1xuICAgICAgdmFsdWUsXG4gICAgICBtYXA6IHRoaXMuZGF0YVNvdXJjZS5nZXRSZXFTb3J0TWFwKHRoaXMuc2luZ2xlU29ydCwgdGhpcy5tdWx0aVNvcnQsIHRoaXMuX2NvbHVtbnMpLFxuICAgICAgY29sdW1uOiBjb2wsXG4gICAgfTtcbiAgICB0aGlzLmNoYW5nZUVtaXQoJ3NvcnQnLCByZXMpO1xuICB9XG5cbiAgY2xlYXJTb3J0KCkge1xuICAgIHRoaXMuX2NvbHVtbnMuZm9yRWFjaChpdGVtID0+IChpdGVtLl9zb3J0IS5kZWZhdWx0ID0gbnVsbCkpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gZmlsdGVyXG5cbiAgcHJpdmF0ZSBoYW5kbGVGaWx0ZXIoY29sOiBTVENvbHVtbikge1xuICAgIHRoaXMuY29sdW1uU291cmNlLnVwZGF0ZURlZmF1bHQoY29sLmZpbHRlciEpO1xuICAgIHRoaXMubG9hZFBhZ2VEYXRhKCk7XG4gICAgdGhpcy5jaGFuZ2VFbWl0KCdmaWx0ZXInLCBjb2wpO1xuICB9XG5cbiAgX2ZpbHRlckNvbmZpcm0oY29sOiBTVENvbHVtbikge1xuICAgIHRoaXMuaGFuZGxlRmlsdGVyKGNvbCk7XG4gIH1cblxuICBfZmlsdGVyUmFkaW8oY29sOiBTVENvbHVtbiwgaXRlbTogU1RDb2x1bW5GaWx0ZXJNZW51LCBjaGVja2VkOiBib29sZWFuKSB7XG4gICAgY29sLmZpbHRlciEubWVudXMhLmZvckVhY2goaSA9PiAoaS5jaGVja2VkID0gZmFsc2UpKTtcbiAgICBpdGVtLmNoZWNrZWQgPSBjaGVja2VkO1xuICB9XG5cbiAgX2ZpbHRlckNsZWFyKGNvbDogU1RDb2x1bW4pIHtcbiAgICB0aGlzLmNvbHVtblNvdXJjZS5jbGVhbkZpbHRlcihjb2wpO1xuICAgIHRoaXMuaGFuZGxlRmlsdGVyKGNvbCk7XG4gIH1cblxuICBjbGVhckZpbHRlcigpIHtcbiAgICB0aGlzLl9jb2x1bW5zLmZpbHRlcih3ID0+IHcuZmlsdGVyICYmIHcuZmlsdGVyLmRlZmF1bHQgPT09IHRydWUpLmZvckVhY2goY29sID0+IHRoaXMuY29sdW1uU291cmNlLmNsZWFuRmlsdGVyKGNvbCkpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gY2hlY2tib3hcblxuICAvKiog5riF6Zmk5omA5pyJIGBjaGVja2JveGAgKi9cbiAgY2xlYXJDaGVjaygpOiB0aGlzIHtcbiAgICByZXR1cm4gdGhpcy5fY2hlY2tBbGwoZmFsc2UpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVmQ2hlY2soKTogdGhpcyB7XG4gICAgY29uc3QgdmFsaWREYXRhID0gdGhpcy5fZGF0YS5maWx0ZXIodyA9PiAhdy5kaXNhYmxlZCk7XG4gICAgY29uc3QgY2hlY2tlZExpc3QgPSB2YWxpZERhdGEuZmlsdGVyKHcgPT4gdy5jaGVja2VkID09PSB0cnVlKTtcbiAgICB0aGlzLl9hbGxDaGVja2VkID0gY2hlY2tlZExpc3QubGVuZ3RoID4gMCAmJiBjaGVja2VkTGlzdC5sZW5ndGggPT09IHZhbGlkRGF0YS5sZW5ndGg7XG4gICAgY29uc3QgYWxsVW5DaGVja2VkID0gdmFsaWREYXRhLmV2ZXJ5KHZhbHVlID0+ICF2YWx1ZS5jaGVja2VkKTtcbiAgICB0aGlzLl9pbmRldGVybWluYXRlID0gIXRoaXMuX2FsbENoZWNrZWQgJiYgIWFsbFVuQ2hlY2tlZDtcbiAgICB0aGlzLl9hbGxDaGVja2VkRGlzYWJsZWQgPSB0aGlzLl9kYXRhLmxlbmd0aCA9PT0gdGhpcy5fZGF0YS5maWx0ZXIodyA9PiB3LmRpc2FibGVkKS5sZW5ndGg7XG4gICAgcmV0dXJuIHRoaXMuY2QoKTtcbiAgfVxuXG4gIF9jaGVja0FsbChjaGVja2VkPzogYm9vbGVhbik6IHRoaXMge1xuICAgIGNoZWNrZWQgPSB0eXBlb2YgY2hlY2tlZCA9PT0gJ3VuZGVmaW5lZCcgPyB0aGlzLl9hbGxDaGVja2VkIDogY2hlY2tlZDtcbiAgICB0aGlzLl9kYXRhLmZpbHRlcih3ID0+ICF3LmRpc2FibGVkKS5mb3JFYWNoKGkgPT4gKGkuY2hlY2tlZCA9IGNoZWNrZWQpKTtcbiAgICByZXR1cm4gdGhpcy5fcmVmQ2hlY2soKS5fY2hlY2tOb3RpZnkoKTtcbiAgfVxuXG4gIF9jaGVja1NlbGVjdGlvbihpOiBTVERhdGEsIHZhbHVlOiBib29sZWFuKSB7XG4gICAgaS5jaGVja2VkID0gdmFsdWU7XG4gICAgcmV0dXJuIHRoaXMuX3JlZkNoZWNrKCkuX2NoZWNrTm90aWZ5KCk7XG4gIH1cblxuICBfcm93U2VsZWN0aW9uKHJvdzogU1RDb2x1bW5TZWxlY3Rpb24pOiB0aGlzIHtcbiAgICByb3cuc2VsZWN0KHRoaXMuX2RhdGEpO1xuICAgIHJldHVybiB0aGlzLl9yZWZDaGVjaygpLl9jaGVja05vdGlmeSgpO1xuICB9XG5cbiAgX2NoZWNrTm90aWZ5KCk6IHRoaXMge1xuICAgIGNvbnN0IHJlcyA9IHRoaXMuX2RhdGEuZmlsdGVyKHcgPT4gIXcuZGlzYWJsZWQgJiYgdy5jaGVja2VkID09PSB0cnVlKTtcbiAgICB0aGlzLmNoYW5nZUVtaXQoJ2NoZWNrYm94JywgcmVzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIHJhZGlvXG5cbiAgLyoqIOa4hemZpOaJgOaciSBgcmFkaW9gICovXG4gIGNsZWFyUmFkaW8oKTogdGhpcyB7XG4gICAgdGhpcy5fZGF0YS5maWx0ZXIodyA9PiB3LmNoZWNrZWQpLmZvckVhY2goaXRlbSA9PiAoaXRlbS5jaGVja2VkID0gZmFsc2UpKTtcbiAgICB0aGlzLmNoYW5nZUVtaXQoJ3JhZGlvJywgbnVsbCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBfcmVmUmFkaW8oY2hlY2tlZDogYm9vbGVhbiwgaXRlbTogU1REYXRhKTogdGhpcyB7XG4gICAgLy8gaWYgKGl0ZW0uZGlzYWJsZWQgPT09IHRydWUpIHJldHVybjtcbiAgICB0aGlzLl9kYXRhLmZpbHRlcih3ID0+ICF3LmRpc2FibGVkKS5mb3JFYWNoKGkgPT4gKGkuY2hlY2tlZCA9IGZhbHNlKSk7XG4gICAgaXRlbS5jaGVja2VkID0gY2hlY2tlZDtcbiAgICB0aGlzLmNoYW5nZUVtaXQoJ3JhZGlvJywgaXRlbSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiBidXR0b25zXG5cbiAgX2J0bkNsaWNrKHJlY29yZDogU1REYXRhLCBidG46IFNUQ29sdW1uQnV0dG9uLCBlPzogRXZlbnQpIHtcbiAgICAvLyBzaG91bGQgYmUgc3RvcCBwcm9wYWdhdGlvbiB3aGVuIGV4cGFuZFJvd0J5Q2xpY2sgaXMgdHJ1ZVxuICAgIGlmIChlICYmIHRoaXMuZXhwYW5kUm93QnlDbGljayA9PT0gdHJ1ZSkge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gICAgaWYgKGJ0bi50eXBlID09PSAnbW9kYWwnIHx8IGJ0bi50eXBlID09PSAnc3RhdGljJykge1xuICAgICAgY29uc3QgeyBtb2RhbCB9ID0gYnRuO1xuICAgICAgY29uc3Qgb2JqID0geyBbbW9kYWwhLnBhcmFtc05hbWUhXTogcmVjb3JkIH07XG4gICAgICAodGhpcy5tb2RhbEhlbHBlcltidG4udHlwZSA9PT0gJ21vZGFsJyA/ICdjcmVhdGUnIDogJ2NyZWF0ZVN0YXRpYyddIGFzIGFueSkoXG4gICAgICAgIG1vZGFsIS5jb21wb25lbnQsXG4gICAgICAgIHsgLi4ub2JqLCAuLi4obW9kYWwhLnBhcmFtcyAmJiBtb2RhbCEucGFyYW1zIShyZWNvcmQpKSB9LFxuICAgICAgICBkZWVwTWVyZ2VLZXkoe30sIHRydWUsIHRoaXMuY29nLm1vZGFsLCBtb2RhbCksXG4gICAgICApXG4gICAgICAgIC5waXBlKGZpbHRlcih3ID0+IHR5cGVvZiB3ICE9PSAndW5kZWZpbmVkJykpXG4gICAgICAgIC5zdWJzY3JpYmUoKHJlczogTnpTYWZlQW55KSA9PiB0aGlzLmJ0bkNhbGxiYWNrKHJlY29yZCwgYnRuLCByZXMpKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKGJ0bi50eXBlID09PSAnZHJhd2VyJykge1xuICAgICAgY29uc3QgeyBkcmF3ZXIgfSA9IGJ0bjtcbiAgICAgIGNvbnN0IG9iaiA9IHsgW2RyYXdlciEucGFyYW1zTmFtZSFdOiByZWNvcmQgfTtcbiAgICAgIHRoaXMuZHJhd2VySGVscGVyXG4gICAgICAgIC5jcmVhdGUoXG4gICAgICAgICAgZHJhd2VyIS50aXRsZSEsXG4gICAgICAgICAgZHJhd2VyIS5jb21wb25lbnQsXG4gICAgICAgICAgeyAuLi5vYmosIC4uLihkcmF3ZXIhLnBhcmFtcyAmJiBkcmF3ZXIhLnBhcmFtcyEocmVjb3JkKSkgfSxcbiAgICAgICAgICBkZWVwTWVyZ2VLZXkoe30sIHRydWUsIHRoaXMuY29nLmRyYXdlciwgZHJhd2VyKSxcbiAgICAgICAgKVxuICAgICAgICAucGlwZShmaWx0ZXIodyA9PiB0eXBlb2YgdyAhPT0gJ3VuZGVmaW5lZCcpKVxuICAgICAgICAuc3Vic2NyaWJlKHJlcyA9PiB0aGlzLmJ0bkNhbGxiYWNrKHJlY29yZCwgYnRuLCByZXMpKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKGJ0bi50eXBlID09PSAnbGluaycpIHtcbiAgICAgIGNvbnN0IGNsaWNrUmVzID0gdGhpcy5idG5DYWxsYmFjayhyZWNvcmQsIGJ0bik7XG4gICAgICBpZiAodHlwZW9mIGNsaWNrUmVzID09PSAnc3RyaW5nJykge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKGNsaWNrUmVzLCB7IHN0YXRlOiB0aGlzLnJvdXRlclN0YXRlIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmJ0bkNhbGxiYWNrKHJlY29yZCwgYnRuKTtcbiAgfVxuXG4gIHByaXZhdGUgYnRuQ2FsbGJhY2socmVjb3JkOiBTVERhdGEsIGJ0bjogU1RDb2x1bW5CdXR0b24sIG1vZGFsPzogYW55KSB7XG4gICAgaWYgKCFidG4uY2xpY2spIHJldHVybjtcbiAgICBpZiAodHlwZW9mIGJ0bi5jbGljayA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHN3aXRjaCAoYnRuLmNsaWNrKSB7XG4gICAgICAgIGNhc2UgJ2xvYWQnOlxuICAgICAgICAgIHRoaXMubG9hZCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdyZWxvYWQnOlxuICAgICAgICAgIHRoaXMucmVsb2FkKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBidG4uY2xpY2socmVjb3JkLCBtb2RhbCwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgX2J0blRleHQocmVjb3JkOiBTVERhdGEsIGJ0bjogU1RDb2x1bW5CdXR0b24pIHtcbiAgICByZXR1cm4gdHlwZW9mIGJ0bi50ZXh0ID09PSAnZnVuY3Rpb24nID8gYnRuLnRleHQocmVjb3JkLCBidG4pIDogYnRuLnRleHQgfHwgJyc7XG4gIH1cblxuICBfdmFsaWRCdG5zKGJ0bnM6IFNUQ29sdW1uQnV0dG9uW10sIGl0ZW06IFNURGF0YSwgY29sOiBTVENvbHVtbik6IFNUQ29sdW1uQnV0dG9uW10ge1xuICAgIHJldHVybiBidG5zLmZpbHRlcihidG4gPT4ge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYnRuLmlpZiEoaXRlbSwgYnRuLCBjb2wpO1xuICAgICAgY29uc3QgaXNSZW5kZXJEaXNhYmxlZCA9IGJ0bi5paWZCZWhhdmlvciA9PT0gJ2Rpc2FibGVkJztcbiAgICAgIGJ0bi5fcmVzdWx0ID0gcmVzdWx0O1xuICAgICAgYnRuLl9kaXNhYmxlZCA9ICFyZXN1bHQgJiYgaXNSZW5kZXJEaXNhYmxlZDtcbiAgICAgIHJldHVybiByZXN1bHQgfHwgaXNSZW5kZXJEaXNhYmxlZDtcbiAgICB9KTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIGV4cG9ydFxuXG4gIC8qKlxuICAgKiDlr7zlh7rlvZPliY3pobXvvIznoa7kv53lt7Lnu4/ms6jlhowgYFhsc3hNb2R1bGVgXG4gICAqIEBwYXJhbSBuZXdEYXRhIOmHjeaWsOaMh+WumuaVsOaNru+8m+iLpeS4uiBgdHJ1ZWAg6KGo56S65L2/55SoIGBmaWx0ZXJlZERhdGFgIOaVsOaNrlxuICAgKiBAcGFyYW0gb3B0IOmineWkluWPguaVsFxuICAgKi9cbiAgZXhwb3J0KG5ld0RhdGE/OiBTVERhdGFbXSB8IHRydWUsIG9wdD86IFNURXhwb3J0T3B0aW9ucykge1xuICAgIChuZXdEYXRhID09PSB0cnVlID8gZnJvbSh0aGlzLmZpbHRlcmVkRGF0YSkgOiBvZihuZXdEYXRhIHx8IHRoaXMuX2RhdGEpKS5zdWJzY3JpYmUoKHJlczogU1REYXRhW10pID0+XG4gICAgICB0aGlzLmV4cG9ydFNydi5leHBvcnQoe1xuICAgICAgICAuLi5vcHQsXG4gICAgICAgIF9kOiByZXMsXG4gICAgICAgIF9jOiB0aGlzLl9jb2x1bW5zLFxuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICBnZXQgY2RrVmlydHVhbFNjcm9sbFZpZXdwb3J0KCkge1xuICAgIHJldHVybiB0aGlzLm9yZ1RhYmxlLmNka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydDtcbiAgfVxuXG4gIHJlc2V0Q29sdW1ucyhvcHRpb25zPzogU1RSZXNldENvbHVtbnNPcHRpb24pOiBQcm9taXNlPHRoaXM+IHtcbiAgICBvcHRpb25zID0geyBlbWl0UmVsb2FkOiB0cnVlLCAuLi5vcHRpb25zIH07XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLmNvbHVtbnMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLmNvbHVtbnMgPSBvcHRpb25zLmNvbHVtbnM7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5waSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucGkgPSBvcHRpb25zLnBpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMucHMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnBzID0gb3B0aW9ucy5wcztcbiAgICB9XG4gICAgdGhpcy5yZWZyZXNoQ29sdW1ucygpO1xuICAgIGlmIChvcHRpb25zLmVtaXRSZWxvYWQgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiB0aGlzLmxvYWRQYWdlRGF0YSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNkKCk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVmcmVzaENvbHVtbnMoKTogdGhpcyB7XG4gICAgY29uc3QgcmVzID0gdGhpcy5jb2x1bW5Tb3VyY2UucHJvY2Vzcyh0aGlzLmNvbHVtbnMpO1xuICAgIHRoaXMuX2NvbHVtbnMgPSByZXMuY29sdW1ucztcbiAgICB0aGlzLl9oZWFkZXJzID0gcmVzLmhlYWRlcnM7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5jb2x1bW5Tb3VyY2UucmVzdG9yZUFsbFJlbmRlcih0aGlzLl9jb2x1bW5zKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW1AgaW4ga2V5b2YgdGhpc10/OiBTaW1wbGVDaGFuZ2UgfSAmIFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5jb2x1bW5zKSB7XG4gICAgICB0aGlzLnJlZnJlc2hDb2x1bW5zKCk7XG4gICAgfVxuICAgIGNvbnN0IGNoYW5nZURhdGEgPSBjaGFuZ2VzLmRhdGE7XG4gICAgaWYgKGNoYW5nZURhdGEgJiYgY2hhbmdlRGF0YS5jdXJyZW50VmFsdWUgJiYgISh0aGlzLnJlcS5sYXp5TG9hZCAmJiBjaGFuZ2VEYXRhLmZpcnN0Q2hhbmdlKSkge1xuICAgICAgdGhpcy5sb2FkUGFnZURhdGEoKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMubG9hZGluZykge1xuICAgICAgdGhpcy5fbG9hZGluZyA9IGNoYW5nZXMubG9hZGluZy5jdXJyZW50VmFsdWU7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgY29uc3QgeyB1bnN1YnNjcmliZSQgfSA9IHRoaXM7XG4gICAgdW5zdWJzY3JpYmUkLm5leHQoKTtcbiAgICB1bnN1YnNjcmliZSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19