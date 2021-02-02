/**
 * @fileoverview added by tsickle
 * Generated from: st.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __awaiter, __decorate, __metadata } from "tslib";
import { DecimalPipe, DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Inject, Input, Optional, Output, TemplateRef, ViewChild, ViewEncapsulation, } from '@angular/core';
import { Router } from '@angular/router';
import { ALAIN_I18N_TOKEN, CNCurrencyPipe, DatePipe, DelonLocaleService, DrawerHelper, ModalHelper, YNPipe, } from '@delon/theme';
import { AlainConfigService } from '@delon/util/config';
import { InputBoolean, InputNumber, toBoolean } from '@delon/util/decorator';
import { deepCopy, deepMergeKey } from '@delon/util/other';
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
        this.customWidthConfig = false;
        this._widthConfig = [];
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
        this.showHeader = true;
        this.expandRowByClick = false;
        this.expandAccordion = false;
        this.rowClickTime = 200;
        this.responsive = true;
        this.error = new EventEmitter();
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
        this.setCog((/** @type {?} */ (configSrv.merge('st', ST_DEFULAT_CONFIG))));
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
        if ((typeof value === 'boolean' && !toBoolean(value)) || (typeof value === 'object' && Object.keys(value).length === 0)) {
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
     * @param {?} val
     * @return {?}
     */
    set widthConfig(val) {
        this._widthConfig = val;
        this.customWidthConfig = val && val.length > 0;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set resizable(val) {
        this._resizable = typeof val === 'object' ? val : { disabled: !toBoolean(val) };
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
                // Should be re-render in next tike when using virtual scroll
                // https://github.com/ng-alain/ng-alain/issues/1836
                if (this.cdkVirtualScrollViewport) {
                    Promise.resolve().then((/**
                     * @return {?}
                     */
                    () => this.cdkVirtualScrollViewport.checkViewportSize()));
                }
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
        var _a;
        if (!(enforce == null ? this.page.toTop : enforce))
            return;
        /** @type {?} */
        const el = (/** @type {?} */ (this.el.nativeElement));
        if (this.scroll) {
            if (this.cdkVirtualScrollViewport) {
                this.cdkVirtualScrollViewport.scrollTo({
                    top: 0,
                    left: 0,
                });
            }
            else {
                (_a = el.querySelector('.ant-table-body, .ant-table-content')) === null || _a === void 0 ? void 0 : _a.scrollTo(0, 0);
            }
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
     * @param {?} column
     * @param {?} index
     * @return {?}
     */
    _click(e, item, column, index) {
        e.preventDefault();
        e.stopPropagation();
        /** @type {?} */
        const res = column.click ? (/** @type {?} */ (column.click))(item, this) : (/** @type {?} */ (column.event))({ record: item, instance: this, event: e, column, index });
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
        (i, idx) => (i._values[(/** @type {?} */ (c.__point))] = { _text: (/** @type {?} */ (this)).dataSource.getNoIndex(i, c, idx), org: idx })))));
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
     * this.st.setRow(item, { price: 100 })
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
        if (typeof index !== 'number') {
            index = (/** @type {?} */ (this))._data.indexOf(index);
        }
        (/** @type {?} */ (this))._data[index] = deepMergeKey((/** @type {?} */ (this))._data[index], false, item);
        (/** @type {?} */ (this)).optimizeData();
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
        this.cdr.detectChanges();
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
        // 过滤表示一种数据的变化应重置页码为 `1`
        this.pi = 1;
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
    /**
     * @param {?} $event
     * @return {?}
     */
    _filterClick($event) {
        $event.stopPropagation();
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
            (res) => this.btnCallback(record, btn, e, res)));
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
            res => this.btnCallback(record, btn, e, res)));
            return;
        }
        else if (btn.type === 'link') {
            /** @type {?} */
            const clickRes = this.btnCallback(record, btn, e);
            if (typeof clickRes === 'string') {
                this.router.navigateByUrl(clickRes, { state: this.routerState });
            }
            return;
        }
        this.btnCallback(record, btn, e);
    }
    /**
     * @private
     * @param {?} record
     * @param {?} btn
     * @param {?=} event
     * @param {?=} modal
     * @return {?}
     */
    btnCallback(record, btn, event, modal) {
        /** @type {?} */
        const fn = btn.click || btn.event;
        if (!fn)
            return;
        if (typeof fn === 'string') {
            switch (fn) {
                case 'load':
                    this.load();
                    break;
                case 'reload':
                    this.reload();
                    break;
            }
        }
        else {
            if (btn.click) {
                return ((/** @type {?} */ (btn.click)))(record, modal, this);
            }
            else {
                return ((/** @type {?} */ (btn.event)))({ record, modal, instance: this, event, btn });
            }
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
        (res) => this.exportSrv.export(Object.assign(Object.assign({}, opt), { data: res, columens: this._columns }))));
    }
    // #endregion
    // #region resizable
    /**
     * @param {?} __0
     * @param {?} column
     * @return {?}
     */
    colResize({ width }, column) {
        column.width = `${width}px`;
        this.changeEmit('resize', column);
    }
    // #endregion
    /**
     * @return {?}
     */
    get cdkVirtualScrollViewport() {
        return (/** @type {?} */ (this.orgTable.cdkVirtualScrollViewport));
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    resetColumns(options) {
        options = Object.assign({ emitReload: true, preClearData: false }, options);
        if (typeof options.columns !== 'undefined') {
            this.columns = options.columns;
        }
        if (typeof options.pi !== 'undefined') {
            this.pi = options.pi;
        }
        if (typeof options.ps !== 'undefined') {
            this.ps = options.ps;
        }
        if (options.emitReload) {
            // Should clean data, Because of changing columns may cause inaccurate data
            options.preClearData = true;
        }
        if (options.preClearData) {
            this._data = [];
        }
        this.refreshColumns();
        if (options.emitReload) {
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
        const res = (/** @type {?} */ (this)).columnSource.process((/** @type {?} */ ((/** @type {?} */ (this)).columns)), { widthMode: (/** @type {?} */ (this)).widthMode, resizable: (/** @type {?} */ (this))._resizable });
        (/** @type {?} */ (this))._columns = res.columns;
        (/** @type {?} */ (this))._headers = res.headers;
        if ((/** @type {?} */ (this)).customWidthConfig === false && res.headerWidths != null) {
            (/** @type {?} */ (this))._widthConfig = res.headerWidths;
        }
        return (/** @type {?} */ (this));
    }
    /**
     * @private
     * @return {?}
     */
    optimizeData() {
        this._data = this.dataSource.optimizeData({ columns: this._columns, result: this._data, rowClassName: this.rowClassName });
    }
    /**
     * Return pure data, `st` internally maintains a set of data for caching, this part of data may affect the backend
     *
     * 返回纯净数据，`st` 内部会维护一组用于缓存的数据，这部分数据可能会影响后端
     * @param {?} itemOrIndex
     * @return {?}
     */
    pureItem(itemOrIndex) {
        if (typeof itemOrIndex === 'number') {
            itemOrIndex = this._data[itemOrIndex];
        }
        if (!itemOrIndex) {
            return null;
        }
        /** @type {?} */
        const copyItem = deepCopy(itemOrIndex);
        delete copyItem._values;
        return copyItem;
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
            this.refreshColumns().optimizeData();
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
                template: "<ng-template #btnTpl let-i let-btn=\"btn\">\n  <ng-container *ngIf=\"!btn.tooltip\">\n    <ng-template [ngTemplateOutlet]=\"btnItemTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n  </ng-container>\n  <span *ngIf=\"btn.tooltip\" nz-tooltip [nzTooltipTitle]=\"btn.tooltip\">\n    <ng-template [ngTemplateOutlet]=\"btnItemTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n  </span>\n</ng-template>\n<ng-template #btnItemTpl let-i let-btn=\"btn\">\n  <a\n    *ngIf=\"btn.pop\"\n    nz-popconfirm\n    [nzPopconfirmTitle]=\"btn.pop.title\"\n    [nzIcon]=\"btn.pop.icon\"\n    [nzCondition]=\"btn.pop.condition(i)\"\n    [nzCancelText]=\"btn.pop.cancelText\"\n    [nzOkText]=\"btn.pop.okText\"\n    [nzOkType]=\"btn.pop.okType\"\n    (nzOnConfirm)=\"_btnClick(i, btn, $event)\"\n    class=\"st__btn-text\"\n    [ngClass]=\"btn.className\"\n  >\n    <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n  </a>\n  <a *ngIf=\"!btn.pop\" (click)=\"_btnClick(i, btn, $event)\" class=\"st__btn-text\" [ngClass]=\"btn.className\">\n    <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n  </a>\n</ng-template>\n<ng-template #btnTextTpl let-i let-btn=\"btn\">\n  <ng-container *ngIf=\"btn.icon\">\n    <i\n      *ngIf=\"!btn.icon.iconfont\"\n      nz-icon\n      [nzType]=\"btn.icon.type\"\n      [nzTheme]=\"btn.icon.theme\"\n      [nzSpin]=\"btn.icon.spin\"\n      [nzTwotoneColor]=\"btn.icon.twoToneColor\"\n    ></i>\n    <i *ngIf=\"btn.icon.iconfont\" nz-icon [nzIconfont]=\"btn.icon.iconfont\"></i>\n  </ng-container>\n  <span [innerHTML]=\"_btnText(i, btn)\" [ngClass]=\"{ 'pl-xs': btn.icon }\"></span>\n</ng-template>\n<ng-template #titleTpl let-i>\n  <span [innerHTML]=\"i._text\"></span>\n  <small *ngIf=\"i.optional\" class=\"st__head-optional\" [innerHTML]=\"i.optional\"></small>\n  <i *ngIf=\"i.optionalHelp\" class=\"st__head-tip\" nz-tooltip [nzTooltipTitle]=\"i.optionalHelp\" nz-icon nzType=\"question-circle\"></i>\n</ng-template>\n<ng-template #chkAllTpl let-custom>\n  <label\n    nz-checkbox\n    class=\"st__checkall\"\n    [nzDisabled]=\"_allCheckedDisabled\"\n    [(ngModel)]=\"_allChecked\"\n    [nzIndeterminate]=\"_indeterminate\"\n    (ngModelChange)=\"_checkAll()\"\n    [class.ant-table-selection-select-all-custom]=\"custom\"\n  ></label>\n</ng-template>\n<nz-table\n  #table\n  [nzData]=\"_data\"\n  [(nzPageIndex)]=\"pi\"\n  (nzPageIndexChange)=\"_change('pi')\"\n  [(nzPageSize)]=\"ps\"\n  (nzPageSizeChange)=\"_change('ps')\"\n  [nzTotal]=\"total\"\n  [nzShowPagination]=\"_isPagination\"\n  [nzFrontPagination]=\"false\"\n  [nzBordered]=\"bordered\"\n  [nzSize]=\"size\"\n  [nzLoading]=\"_loading\"\n  [nzLoadingDelay]=\"loadingDelay\"\n  [nzLoadingIndicator]=\"loadingIndicator\"\n  [nzTitle]=\"header\"\n  [nzFooter]=\"footer\"\n  [nzScroll]=\"scroll\"\n  [nzVirtualItemSize]=\"virtualItemSize\"\n  [nzVirtualMaxBufferPx]=\"virtualMaxBufferPx\"\n  [nzVirtualMinBufferPx]=\"virtualMinBufferPx\"\n  [nzVirtualForTrackBy]=\"virtualForTrackBy\"\n  [nzNoResult]=\"noResult\"\n  [nzPageSizeOptions]=\"page.pageSizes\"\n  [nzShowQuickJumper]=\"page.showQuickJumper\"\n  [nzShowSizeChanger]=\"page.showSize\"\n  [nzPaginationPosition]=\"page.position\"\n  [nzPaginationType]=\"page.type\"\n  [nzItemRender]=\"page.itemRender\"\n  [nzSimple]=\"page.simple\"\n  [nzShowTotal]=\"totalTpl\"\n  [nzWidthConfig]=\"_widthConfig\"\n>\n  <thead *ngIf=\"showHeader\" class=\"st__head\">\n    <tr *ngFor=\"let row of _headers; let rowFirst = first\">\n      <th *ngIf=\"rowFirst && expand\" nzWidth=\"50px\" [rowSpan]=\"_headers.length\"></th>\n      <th\n        *ngFor=\"let h of row; let index = index; let last = last\"\n        [colSpan]=\"h.colSpan\"\n        [rowSpan]=\"h.rowSpan\"\n        [nzWidth]=\"h.column.width\"\n        [nzLeft]=\"!!h.column._left\"\n        [nzRight]=\"!!h.column._right\"\n        [ngClass]=\"h.column.className\"\n        [attr.data-col]=\"h.column.indexKey\"\n        [nzShowSort]=\"h.column._sort.enabled\"\n        [nzSortOrder]=\"h.column._sort.default\"\n        (nzSortOrderChange)=\"sort(h.column, index, $event)\"\n        [nzCustomFilter]=\"h.column.filter\"\n        nz-resizable\n        [nzDisabled]=\"last || h.column.resizable.disabled\"\n        [nzMaxWidth]=\"h.column.resizable.maxWidth\"\n        [nzMinWidth]=\"h.column.resizable.minWidth\"\n        [nzBounds]=\"h.column.resizable.bounds\"\n        [nzPreview]=\"h.column.resizable.preview\"\n        (nzResizeEnd)=\"colResize($event, h.column)\"\n      >\n        <nz-resize-handle *ngIf=\"!last && !h.column.resizable.disabled\" nzDirection=\"right\"><i></i></nz-resize-handle>\n        <ng-template #renderTitle [ngTemplateOutlet]=\"h.column.__renderTitle\" [ngTemplateOutletContext]=\"{ $implicit: h.column, index: index }\"></ng-template>\n        <ng-container *ngIf=\"!h.column.__renderTitle; else renderTitle\">\n          <ng-container [ngSwitch]=\"h.column.type\">\n            <ng-container *ngSwitchCase=\"'checkbox'\">\n              <ng-container *ngIf=\"h.column.selections.length === 0\">\n                <ng-template [ngTemplateOutlet]=\"chkAllTpl\" [ngTemplateOutletContext]=\"{ $implicit: false }\"> </ng-template>\n              </ng-container>\n              <div *ngIf=\"h.column.selections.length > 0\" class=\"ant-table-selection\">\n                <ng-template [ngTemplateOutlet]=\"chkAllTpl\" [ngTemplateOutletContext]=\"{ $implicit: true }\"> </ng-template>\n                <div\n                  *ngIf=\"h.column.selections.length\"\n                  nz-dropdown\n                  nzPlacement=\"bottomLeft\"\n                  [nzDropdownMenu]=\"selectionMenu\"\n                  class=\"ant-table-selection-down st__checkall-selection\"\n                >\n                  <i nz-icon nzType=\"down\"></i>\n                </div>\n                <nz-dropdown-menu #selectionMenu=\"nzDropdownMenu\">\n                  <ul nz-menu class=\"ant-table-selection-menu\">\n                    <li nz-menu-item *ngFor=\"let rw of h.column.selections\" (click)=\"_rowSelection(rw)\" [innerHTML]=\"rw.text\"></li>\n                  </ul>\n                </nz-dropdown-menu>\n              </div>\n            </ng-container>\n            <ng-container *ngSwitchDefault>\n              <ng-template [ngTemplateOutlet]=\"titleTpl\" [ngTemplateOutletContext]=\"{ $implicit: h.column.title }\"></ng-template>\n            </ng-container>\n          </ng-container>\n        </ng-container>\n        <div\n          nz-th-extra\n          *ngIf=\"h.column.filter\"\n          class=\"ant-table-filter-trigger-container st__filter\"\n          [class.ant-table-filter-trigger-container-open]=\"h.column.filter.visible\"\n        >\n          <span\n            class=\"ant-table-filter-trigger\"\n            [class.active]=\"h.column.filter.visible || h.column.filter.default\"\n            nz-dropdown\n            [nzDropdownMenu]=\"filterMenu\"\n            nzTrigger=\"click\"\n            [nzClickHide]=\"false\"\n            [(nzVisible)]=\"h.column.filter.visible\"\n            nzOverlayClassName=\"st__filter-wrap\"\n            (click)=\"_filterClick($event)\"\n          >\n            <i nz-icon [nzType]=\"h.column.filter.icon.type\" [nzTheme]=\"h.column.filter.icon.theme\"></i>\n          </span>\n          <nz-dropdown-menu #filterMenu=\"nzDropdownMenu\">\n            <div class=\"ant-table-filter-dropdown\">\n              <ng-container [ngSwitch]=\"h.column.filter.type\">\n                <div *ngSwitchCase=\"'keyword'\" class=\"st__filter-keyword\">\n                  <input type=\"text\" nz-input [attr.placeholder]=\"h.column.filter.menus[0].text\" [(ngModel)]=\"h.column.filter.menus[0].value\" />\n                </div>\n                <ul *ngSwitchDefault nz-menu>\n                  <ng-container *ngIf=\"h.column.filter.multiple\">\n                    <li nz-menu-item *ngFor=\"let filter of h.column.filter.menus\">\n                      <label nz-checkbox [(ngModel)]=\"filter.checked\">{{ filter.text }}</label>\n                    </li>\n                  </ng-container>\n                  <ng-container *ngIf=\"!h.column.filter.multiple\">\n                    <li nz-menu-item *ngFor=\"let filter of h.column.filter.menus\">\n                      <label nz-radio [ngModel]=\"filter.checked\" (ngModelChange)=\"_filterRadio(h.column, filter, $event)\">{{ filter.text }}</label>\n                    </li>\n                  </ng-container>\n                </ul>\n              </ng-container>\n              <div class=\"ant-table-filter-dropdown-btns\">\n                <a class=\"ant-table-filter-dropdown-link confirm\" (click)=\"h.column.filter.visible = false\">\n                  <span (click)=\"_filterConfirm(h.column)\">{{ h.column.filter.confirmText || locale.filterConfirm }}</span>\n                </a>\n                <a class=\"ant-table-filter-dropdown-link clear\" (click)=\"h.column.filter.visible = false\">\n                  <span (click)=\"_filterClear(h.column)\">{{ h.column.filter.clearText || locale.filterReset }}</span>\n                </a>\n              </div>\n            </div>\n          </nz-dropdown-menu>\n        </div>\n      </th>\n    </tr>\n  </thead>\n  <tbody class=\"st__body\">\n    <ng-container *ngIf=\"!_loading\">\n      <ng-template [ngTemplateOutlet]=\"bodyHeader\" [ngTemplateOutletContext]=\"{ $implicit: _statistical }\"></ng-template>\n    </ng-container>\n    <ng-template #bodyTpl let-i let-index=\"index\">\n      <tr [attr.data-index]=\"index\" (click)=\"_rowClick($event, i, index)\" [ngClass]=\"i._rowClassName\">\n        <td\n          *ngIf=\"expand\"\n          [nzShowExpand]=\"expand && i.showExpand !== false\"\n          [nzExpand]=\"i.expand\"\n          (nzExpandChange)=\"_expandChange(i, $event)\"\n          nzWidth=\"50px\"\n        ></td>\n        <td *ngFor=\"let c of _columns; let cIdx = index\" [nzLeft]=\"!!c._left\" [nzRight]=\"!!c._right\" [ngClass]=\"c._className\" [attr.colspan]=\"c.colSpan\">\n          <span *ngIf=\"responsive\" class=\"ant-table-rep__title\">\n            <ng-template [ngTemplateOutlet]=\"titleTpl\" [ngTemplateOutletContext]=\"{ $implicit: c.title }\"></ng-template>\n          </span>\n          <span>\n            <ng-template #render [ngTemplateOutlet]=\"c.__render\" [ngTemplateOutletContext]=\"{ $implicit: i, index: index, column: c }\"></ng-template>\n            <ng-container *ngIf=\"!c.__render; else render\">\n              <ng-container [ngSwitch]=\"c.type\">\n                <label\n                  *ngSwitchCase=\"'checkbox'\"\n                  nz-checkbox\n                  [nzDisabled]=\"i.disabled\"\n                  [ngModel]=\"i.checked\"\n                  (ngModelChange)=\"_checkSelection(i, $event)\"\n                ></label>\n                <label *ngSwitchCase=\"'radio'\" nz-radio [nzDisabled]=\"i.disabled\" [ngModel]=\"i.checked\" (ngModelChange)=\"_refRadio($event, i)\"></label>\n                <a *ngSwitchCase=\"'link'\" (click)=\"_click($event, i, c, index)\" [innerHTML]=\"i._values[cIdx]._text\" [attr.title]=\"i._values[cIdx].text\"></a>\n                <ng-container *ngIf=\"i._values[cIdx].text\">\n                  <nz-tag *ngSwitchCase=\"'tag'\" [nzColor]=\"i._values[cIdx].color\">\n                    <span [innerHTML]=\"i._values[cIdx]._text\"></span>\n                  </nz-tag>\n                  <nz-badge *ngSwitchCase=\"'badge'\" [nzStatus]=\"i._values[cIdx].color\" [nzText]=\"i._values[cIdx].text\"></nz-badge>\n                </ng-container>\n                <ng-template *ngSwitchCase=\"'widget'\" st-widget-host [record]=\"i\" [column]=\"c\"></ng-template>\n                <span *ngSwitchDefault [innerHTML]=\"i._values[cIdx]._text\" [attr.title]=\"c._isTruncate ? i._values[cIdx].text : null\"></span>\n              </ng-container>\n              <ng-container *ngFor=\"let btn of _validBtns(c.buttons, i, c); let last = last\">\n                <a *ngIf=\"btn.children.length > 0\" nz-dropdown [nzDropdownMenu]=\"btnMenu\" nzOverlayClassName=\"st__btn-sub\">\n                  <span [innerHTML]=\"_btnText(i, btn)\"></span>\n                  <i nz-icon nzType=\"down\"></i>\n                </a>\n                <nz-dropdown-menu #btnMenu=\"nzDropdownMenu\">\n                  <ul nz-menu>\n                    <ng-container *ngFor=\"let subBtn of _validBtns(btn.children, i, c)\">\n                      <li *ngIf=\"subBtn.type !== 'divider'\" nz-menu-item [class.st__btn-disabled]=\"subBtn._disabled\">\n                        <ng-template [ngTemplateOutlet]=\"btnTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: subBtn }\"> </ng-template>\n                      </li>\n                      <li *ngIf=\"subBtn.type === 'divider'\" nz-menu-divider></li>\n                    </ng-container>\n                  </ul>\n                </nz-dropdown-menu>\n                <span *ngIf=\"btn.children.length == 0\" [class.st__btn-disabled]=\"btn._disabled\">\n                  <ng-template [ngTemplateOutlet]=\"btnTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"> </ng-template>\n                </span>\n                <nz-divider *ngIf=\"!last\" nzType=\"vertical\"></nz-divider>\n              </ng-container>\n            </ng-container>\n          </span>\n        </td>\n      </tr>\n      <tr [nzExpand]=\"i.expand\">\n        <ng-template [ngTemplateOutlet]=\"expand\" [ngTemplateOutletContext]=\"{ $implicit: i, index: index }\"></ng-template>\n      </tr>\n    </ng-template>\n    <ng-container *ngIf=\"!virtualScroll\">\n      <ng-container *ngFor=\"let i of _data; let index = index\">\n        <ng-template [ngTemplateOutlet]=\"bodyTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, index: index }\"> </ng-template>\n      </ng-container>\n    </ng-container>\n    <ng-container *ngIf=\"virtualScroll\">\n      <ng-template nz-virtual-scroll let-i let-index=\"index\">\n        <ng-template [ngTemplateOutlet]=\"bodyTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, index: index }\"> </ng-template>\n      </ng-template>\n    </ng-container>\n    <ng-container *ngIf=\"!_loading\">\n      <ng-template [ngTemplateOutlet]=\"body\" [ngTemplateOutletContext]=\"{ $implicit: _statistical }\"></ng-template>\n    </ng-container>\n  </tbody>\n  <ng-template #totalTpl let-range=\"range\" let-total>{{ renderTotal(total, range) }}</ng-template>\n</nz-table>\n",
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
    widthConfig: [{ type: Input }],
    resizable: [{ type: Input }],
    header: [{ type: Input }],
    showHeader: [{ type: Input }],
    footer: [{ type: Input }],
    bodyHeader: [{ type: Input }],
    body: [{ type: Input }],
    expandRowByClick: [{ type: Input }],
    expandAccordion: [{ type: Input }],
    expand: [{ type: Input }],
    noResult: [{ type: Input }],
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
], STComponent.prototype, "showHeader", void 0);
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
    /** @type {?} */
    STComponent.ngAcceptInputType_ps;
    /** @type {?} */
    STComponent.ngAcceptInputType_pi;
    /** @type {?} */
    STComponent.ngAcceptInputType_total;
    /** @type {?} */
    STComponent.ngAcceptInputType_loadingDelay;
    /** @type {?} */
    STComponent.ngAcceptInputType_bordered;
    /** @type {?} */
    STComponent.ngAcceptInputType_expandRowByClick;
    /** @type {?} */
    STComponent.ngAcceptInputType_expandAccordion;
    /** @type {?} */
    STComponent.ngAcceptInputType_rowClickTime;
    /** @type {?} */
    STComponent.ngAcceptInputType_responsive;
    /** @type {?} */
    STComponent.ngAcceptInputType_responsiveHideHeaderFooter;
    /** @type {?} */
    STComponent.ngAcceptInputType_virtualScroll;
    /** @type {?} */
    STComponent.ngAcceptInputType_virtualItemSize;
    /** @type {?} */
    STComponent.ngAcceptInputType_virtualMaxBufferPx;
    /** @type {?} */
    STComponent.ngAcceptInputType_virtualMinBufferPx;
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
    /**
     * @type {?}
     * @private
     */
    STComponent.prototype.customWidthConfig;
    /** @type {?} */
    STComponent.prototype._widthConfig;
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
    /**
     * @type {?}
     * @private
     */
    STComponent.prototype._resizable;
    /** @type {?} */
    STComponent.prototype.header;
    /** @type {?} */
    STComponent.prototype.showHeader;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3N0L3N0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3hELE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBR0wsUUFBUSxFQUNSLE1BQU0sRUFHTixXQUFXLEVBRVgsU0FBUyxFQUNULGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUVMLGdCQUFnQixFQUNoQixjQUFjLEVBQ2QsUUFBUSxFQUNSLGtCQUFrQixFQUNsQixZQUFZLEVBRVosV0FBVyxFQUNYLE1BQU0sR0FDUCxNQUFNLGNBQWMsQ0FBQztBQUN0QixPQUFPLEVBQUUsa0JBQWtCLEVBQWlCLE1BQU0sb0JBQW9CLENBQUM7QUFDdkUsT0FBTyxFQUFnQixZQUFZLEVBQUUsV0FBVyxFQUFlLFNBQVMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3hHLE9BQU8sRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFHM0QsT0FBTyxFQUFFLGdCQUFnQixFQUFlLE1BQU0scUJBQXFCLENBQUM7QUFDcEUsT0FBTyxFQUFFLElBQUksRUFBYyxFQUFFLEVBQUUsT0FBTyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUNuRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsWUFBWSxFQUEyQyxN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OztJQUN2RCwyQkFBaUQ7O0lBQ2pELHVDQUFrRDs7SUFDbEQsc0NBQWlEOztJQUNqRCw2QkFBa0U7O0lBQ2xFLCtCQUE4Qzs7SUFDOUMsbUNBQTJDOztJQUMzQyxpQ0FBb0Q7O0lBQ3BELGlEQUE2RDs7SUFDN0QsNEJBQXVEOztJQUN2RCw2QkFBeUQ7O0lBQ3pELG9DQUErQzs7SUFDL0Msc0NBQTZDOztJQUM3Qyx5Q0FBaUQ7O0lBQ2pELHlDQUFpRDs7SUFDakQsd0NBQTBFOzs7OztJQXVCeEUsMEJBQThCOzs7OztJQUM5Qiw2QkFBc0I7Ozs7O0lBQ3RCLHlCQUFzQjs7Ozs7SUFDdEIsZ0NBQTJCOzs7OztJQUMzQixrQ0FBZ0M7Ozs7O0lBQ2hDLG1DQUFrQzs7Ozs7SUFDbEMsMEJBQWtDOzs7OztJQUNsQyxtQ0FBb0M7Ozs7O0lBQ3BDLGlDQUFnQzs7Ozs7SUFDaEMsZ0NBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2RrVmlydHVhbFNjcm9sbFZpZXdwb3J0IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3Njcm9sbGluZyc7XG5pbXBvcnQgeyBEZWNpbWFsUGlwZSwgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZSxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFRyYWNrQnlGdW5jdGlvbixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgQWxhaW5JMThOU2VydmljZSxcbiAgQUxBSU5fSTE4Tl9UT0tFTixcbiAgQ05DdXJyZW5jeVBpcGUsXG4gIERhdGVQaXBlLFxuICBEZWxvbkxvY2FsZVNlcnZpY2UsXG4gIERyYXdlckhlbHBlcixcbiAgTG9jYWxlRGF0YSxcbiAgTW9kYWxIZWxwZXIsXG4gIFlOUGlwZSxcbn0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IEFsYWluQ29uZmlnU2VydmljZSwgQWxhaW5TVENvbmZpZyB9IGZyb20gJ0BkZWxvbi91dGlsL2NvbmZpZyc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIsIE51bWJlcklucHV0LCB0b0Jvb2xlYW4gfSBmcm9tICdAZGVsb24vdXRpbC9kZWNvcmF0b3InO1xuaW1wb3J0IHsgZGVlcENvcHksIGRlZXBNZXJnZUtleSB9IGZyb20gJ0BkZWxvbi91dGlsL290aGVyJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBOelJlc2l6ZUV2ZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC9yZXNpemFibGUnO1xuaW1wb3J0IHsgTnpUYWJsZUNvbXBvbmVudCwgTnpUYWJsZURhdGEgfSBmcm9tICduZy16b3Jyby1hbnRkL3RhYmxlJztcbmltcG9ydCB7IGZyb20sIE9ic2VydmFibGUsIG9mLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU1RDb2x1bW5Tb3VyY2UgfSBmcm9tICcuL3N0LWNvbHVtbi1zb3VyY2UnO1xuaW1wb3J0IHsgU1REYXRhU291cmNlLCBTVERhdGFTb3VyY2VPcHRpb25zLCBTVERhdGFTb3VyY2VSZXN1bHQgfSBmcm9tICcuL3N0LWRhdGEtc291cmNlJztcbmltcG9ydCB7IFNURXhwb3J0IH0gZnJvbSAnLi9zdC1leHBvcnQnO1xuaW1wb3J0IHsgU1RSb3dTb3VyY2UgfSBmcm9tICcuL3N0LXJvdy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU1RfREVGVUxBVF9DT05GSUcgfSBmcm9tICcuL3N0LmNvbmZpZyc7XG5pbXBvcnQge1xuICBTVENoYW5nZSxcbiAgU1RDaGFuZ2VUeXBlLFxuICBTVENvbHVtbixcbiAgU1RDb2x1bW5CdXR0b24sXG4gIFNUQ29sdW1uQnV0dG9uRXZlbnRPcHRpb25zLFxuICBTVENvbHVtbkZpbHRlck1lbnUsXG4gIFNUQ29sdW1uU2VsZWN0aW9uLFxuICBTVERhdGEsXG4gIFNURXJyb3IsXG4gIFNURXhwb3J0T3B0aW9ucyxcbiAgU1RMb2FkT3B0aW9ucyxcbiAgU1RNdWx0aVNvcnQsXG4gIFNUUGFnZSxcbiAgU1RSZXEsXG4gIFNUUmVzLFxuICBTVFJlc2V0Q29sdW1uc09wdGlvbixcbiAgU1RSZXNpemFibGUsXG4gIFNUUm93Q2xhc3NOYW1lLFxuICBTVFNpbmdsZVNvcnQsXG4gIFNUU3RhdGlzdGljYWxSZXN1bHRzLFxuICBTVFdpZHRoTW9kZSxcbn0gZnJvbSAnLi9zdC5pbnRlcmZhY2VzJztcbmltcG9ydCB7IF9TVENvbHVtbiB9IGZyb20gJy4vc3QudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdCcsXG4gIGV4cG9ydEFzOiAnc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3QuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFtTVERhdGFTb3VyY2UsIFNUUm93U291cmNlLCBTVENvbHVtblNvdXJjZSwgU1RFeHBvcnQsIENOQ3VycmVuY3lQaXBlLCBEYXRlUGlwZSwgWU5QaXBlLCBEZWNpbWFsUGlwZV0sXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLnN0XSc6IGB0cnVlYCxcbiAgICAnW2NsYXNzLnN0X19wLWxlZnRdJzogYHBhZ2UucGxhY2VtZW50ID09PSAnbGVmdCdgLFxuICAgICdbY2xhc3Muc3RfX3AtY2VudGVyXSc6IGBwYWdlLnBsYWNlbWVudCA9PT0gJ2NlbnRlcidgLFxuICAgICdbY2xhc3Muc3RfX3dpZHRoLXN0cmljdF0nOiBgd2lkdGhNb2RlLnR5cGUgPT09ICdzdHJpY3QnYCxcbiAgICAnW2NsYXNzLmFudC10YWJsZS1yZXBdJzogYHJlc3BvbnNpdmVgLFxuICAgICdbY2xhc3MuYW50LXRhYmxlLXJlcF9faGlkZS1oZWFkZXItZm9vdGVyXSc6IGByZXNwb25zaXZlSGlkZUhlYWRlckZvb3RlcmAsXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgU1RDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9wczogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9waTogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV90b3RhbDogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9sb2FkaW5nRGVsYXk6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYm9yZGVyZWQ6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2V4cGFuZFJvd0J5Q2xpY2s6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2V4cGFuZEFjY29yZGlvbjogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfcm93Q2xpY2tUaW1lOiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3Jlc3BvbnNpdmU6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3Jlc3BvbnNpdmVIaWRlSGVhZGVyRm9vdGVyOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV92aXJ0dWFsU2Nyb2xsOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV92aXJ0dWFsSXRlbVNpemU6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfdmlydHVhbE1heEJ1ZmZlclB4OiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3ZpcnR1YWxNaW5CdWZmZXJQeDogTnVtYmVySW5wdXQ7XG5cbiAgcHJpdmF0ZSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIGRhdGEkOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgdG90YWxUcGwgPSBgYDtcbiAgcHJpdmF0ZSBjb2c6IEFsYWluU1RDb25maWc7XG4gIHByaXZhdGUgcm93Q2xpY2tDb3VudCA9IDA7XG4gIHByaXZhdGUgX3JlcTogU1RSZXE7XG4gIHByaXZhdGUgX3JlczogU1RSZXM7XG4gIHByaXZhdGUgX3BhZ2U6IFNUUGFnZTtcbiAgcHJpdmF0ZSBfd2lkdGhNb2RlOiBTVFdpZHRoTW9kZTtcbiAgcHJpdmF0ZSBjdXN0b21XaWR0aENvbmZpZzogYm9vbGVhbiA9IGZhbHNlO1xuICBfd2lkdGhDb25maWc6IHN0cmluZ1tdID0gW107XG4gIGxvY2FsZTogTG9jYWxlRGF0YSA9IHt9O1xuICBfbG9hZGluZyA9IGZhbHNlO1xuICBfZGF0YTogU1REYXRhW10gPSBbXTtcbiAgX3N0YXRpc3RpY2FsOiBTVFN0YXRpc3RpY2FsUmVzdWx0cyA9IHt9O1xuICBfaXNQYWdpbmF0aW9uID0gdHJ1ZTtcbiAgX2FsbENoZWNrZWQgPSBmYWxzZTtcbiAgX2FsbENoZWNrZWREaXNhYmxlZCA9IGZhbHNlO1xuICBfaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICBfaGVhZGVyczogX1NUQ29sdW1uW11bXSA9IFtdO1xuICBfY29sdW1uczogX1NUQ29sdW1uW10gPSBbXTtcbiAgQFZpZXdDaGlsZCgndGFibGUnLCB7IHN0YXRpYzogZmFsc2UgfSkgcmVhZG9ubHkgb3JnVGFibGU6IE56VGFibGVDb21wb25lbnQ7XG5cbiAgQElucHV0KClcbiAgZ2V0IHJlcSgpOiBTVFJlcSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcTtcbiAgfVxuICBzZXQgcmVxKHZhbHVlOiBTVFJlcSkge1xuICAgIHRoaXMuX3JlcSA9IGRlZXBNZXJnZUtleSh7fSwgdHJ1ZSwgdGhpcy5jb2cucmVxLCB2YWx1ZSk7XG4gIH1cbiAgLyoqIOi/lOWbnuS9k+mFjee9riAqL1xuICBASW5wdXQoKVxuICBnZXQgcmVzKCk6IFNUUmVzIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzO1xuICB9XG4gIHNldCByZXModmFsdWU6IFNUUmVzKSB7XG4gICAgY29uc3QgaXRlbSA9ICh0aGlzLl9yZXMgPSBkZWVwTWVyZ2VLZXkoe30sIHRydWUsIHRoaXMuY29nLnJlcywgdmFsdWUpKTtcbiAgICBjb25zdCByZU5hbWUgPSBpdGVtLnJlTmFtZSE7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHJlTmFtZS5saXN0KSkgcmVOYW1lLmxpc3QgPSByZU5hbWUubGlzdCEuc3BsaXQoJy4nKTtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkocmVOYW1lLnRvdGFsKSkgcmVOYW1lLnRvdGFsID0gcmVOYW1lLnRvdGFsIS5zcGxpdCgnLicpO1xuICAgIHRoaXMuX3JlcyA9IGl0ZW07XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IHBhZ2UoKTogU1RQYWdlIHtcbiAgICByZXR1cm4gdGhpcy5fcGFnZTtcbiAgfVxuICBzZXQgcGFnZSh2YWx1ZTogU1RQYWdlKSB7XG4gICAgdGhpcy5fcGFnZSA9IHsgLi4udGhpcy5jb2cucGFnZSwgLi4udmFsdWUgfTtcbiAgICB0aGlzLnVwZGF0ZVRvdGFsVHBsKCk7XG4gIH1cbiAgQElucHV0KCkgZGF0YTogc3RyaW5nIHwgU1REYXRhW10gfCBPYnNlcnZhYmxlPFNURGF0YVtdPjtcbiAgQElucHV0KCkgY29sdW1uczogU1RDb2x1bW5bXSA9IFtdO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBwcyA9IDEwO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBwaSA9IDE7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHRvdGFsID0gMDtcbiAgQElucHV0KCkgbG9hZGluZzogYm9vbGVhbiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBsb2FkaW5nRGVsYXkgPSAwO1xuICBASW5wdXQoKSBsb2FkaW5nSW5kaWNhdG9yOiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJvcmRlcmVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNpemU6ICdzbWFsbCcgfCAnbWlkZGxlJyB8ICdkZWZhdWx0JztcbiAgQElucHV0KCkgc2Nyb2xsOiB7IHk/OiBzdHJpbmc7IHg/OiBzdHJpbmcgfTtcbiAgQElucHV0KCkgc2luZ2xlU29ydDogU1RTaW5nbGVTb3J0O1xuICBwcml2YXRlIF9tdWx0aVNvcnQ/OiBTVE11bHRpU29ydDtcbiAgQElucHV0KClcbiAgZ2V0IG11bHRpU29ydCgpOiBOelNhZmVBbnkge1xuICAgIHJldHVybiB0aGlzLl9tdWx0aVNvcnQ7XG4gIH1cbiAgc2V0IG11bHRpU29ydCh2YWx1ZTogTnpTYWZlQW55KSB7XG4gICAgaWYgKCh0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJyAmJiAhdG9Cb29sZWFuKHZhbHVlKSkgfHwgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMCkpIHtcbiAgICAgIHRoaXMuX211bHRpU29ydCA9IHVuZGVmaW5lZDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fbXVsdGlTb3J0ID0ge1xuICAgICAgLi4uKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgPyB2YWx1ZSA6IHt9KSxcbiAgICB9O1xuICB9XG4gIEBJbnB1dCgpIHJvd0NsYXNzTmFtZTogU1RSb3dDbGFzc05hbWU7XG4gIEBJbnB1dCgpXG4gIHNldCB3aWR0aE1vZGUodmFsdWU6IFNUV2lkdGhNb2RlKSB7XG4gICAgdGhpcy5fd2lkdGhNb2RlID0geyAuLi50aGlzLmNvZy53aWR0aE1vZGUsIC4uLnZhbHVlIH07XG4gIH1cbiAgZ2V0IHdpZHRoTW9kZSgpOiBTVFdpZHRoTW9kZSB7XG4gICAgcmV0dXJuIHRoaXMuX3dpZHRoTW9kZTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgd2lkdGhDb25maWcodmFsOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3dpZHRoQ29uZmlnID0gdmFsO1xuICAgIHRoaXMuY3VzdG9tV2lkdGhDb25maWcgPSB2YWwgJiYgdmFsLmxlbmd0aCA+IDA7XG4gIH1cbiAgcHJpdmF0ZSBfcmVzaXphYmxlOiBTVFJlc2l6YWJsZTtcbiAgQElucHV0KClcbiAgc2V0IHJlc2l6YWJsZSh2YWw6IFNUUmVzaXphYmxlIHwgYm9vbGVhbikge1xuICAgIHRoaXMuX3Jlc2l6YWJsZSA9IHR5cGVvZiB2YWwgPT09ICdvYmplY3QnID8gdmFsIDogeyBkaXNhYmxlZDogIXRvQm9vbGVhbih2YWwpIH07XG4gIH1cbiAgQElucHV0KCkgaGVhZGVyOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dIZWFkZXIgPSB0cnVlO1xuICBASW5wdXQoKSBmb290ZXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBib2R5SGVhZGVyOiBUZW1wbGF0ZVJlZjxTVFN0YXRpc3RpY2FsUmVzdWx0cz47XG4gIEBJbnB1dCgpIGJvZHk6IFRlbXBsYXRlUmVmPFNUU3RhdGlzdGljYWxSZXN1bHRzPjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGV4cGFuZFJvd0J5Q2xpY2sgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGV4cGFuZEFjY29yZGlvbiA9IGZhbHNlO1xuICBASW5wdXQoKSBleHBhbmQ6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiB7fTsgY29sdW1uOiBTVENvbHVtbiB9PjtcbiAgQElucHV0KCkgbm9SZXN1bHQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSByb3dDbGlja1RpbWUgPSAyMDA7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSByZXNwb25zaXZlOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHJlc3BvbnNpdmVIaWRlSGVhZGVyRm9vdGVyOiBib29sZWFuO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgZXJyb3IgPSBuZXcgRXZlbnRFbWl0dGVyPFNURXJyb3I+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFNUQ2hhbmdlPigpO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgdmlydHVhbFNjcm9sbCA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSB2aXJ0dWFsSXRlbVNpemUgPSA1NDtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgdmlydHVhbE1heEJ1ZmZlclB4ID0gMjAwO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSB2aXJ0dWFsTWluQnVmZmVyUHggPSAxMDA7XG4gIEBJbnB1dCgpIHZpcnR1YWxGb3JUcmFja0J5OiBUcmFja0J5RnVuY3Rpb248TnpUYWJsZURhdGE+ID0gaW5kZXggPT4gaW5kZXg7XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbnVtYmVyIG9mIHRoZSBjdXJyZW50IHBhZ2VcbiAgICovXG4gIGdldCBjb3VudCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9kYXRhLmxlbmd0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGRhdGEgb2YgdGhlIGN1cnJlbnQgcGFnZVxuICAgKi9cbiAgZ2V0IGxpc3QoKTogU1REYXRhW10ge1xuICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgcm91dGVyU3RhdGUoKTogeyBwaTogbnVtYmVyOyBwczogbnVtYmVyOyB0b3RhbDogbnVtYmVyIH0ge1xuICAgIGNvbnN0IHsgcGksIHBzLCB0b3RhbCB9ID0gdGhpcztcbiAgICByZXR1cm4geyBwaSwgcHMsIHRvdGFsIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KEFMQUlOX0kxOE5fVE9LRU4pIGkxOG5TcnY6IEFsYWluSTE4TlNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGV4cG9ydFNydjogU1RFeHBvcnQsXG4gICAgcHJpdmF0ZSBtb2RhbEhlbHBlcjogTW9kYWxIZWxwZXIsXG4gICAgcHJpdmF0ZSBkcmF3ZXJIZWxwZXI6IERyYXdlckhlbHBlcixcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogYW55LFxuICAgIHByaXZhdGUgY29sdW1uU291cmNlOiBTVENvbHVtblNvdXJjZSxcbiAgICBwcml2YXRlIGRhdGFTb3VyY2U6IFNURGF0YVNvdXJjZSxcbiAgICBwcml2YXRlIGRlbG9uSTE4bjogRGVsb25Mb2NhbGVTZXJ2aWNlLFxuICAgIGNvbmZpZ1NydjogQWxhaW5Db25maWdTZXJ2aWNlLFxuICApIHtcbiAgICB0aGlzLnNldENvZyhjb25maWdTcnYubWVyZ2UoJ3N0JywgU1RfREVGVUxBVF9DT05GSUcpISk7XG5cbiAgICB0aGlzLmRlbG9uSTE4bi5jaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5sb2NhbGUgPSB0aGlzLmRlbG9uSTE4bi5nZXREYXRhKCdzdCcpO1xuICAgICAgaWYgKHRoaXMuX2NvbHVtbnMubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVRvdGFsVHBsKCk7XG4gICAgICAgIHRoaXMuY2QoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGkxOG5TcnYuY2hhbmdlXG4gICAgICAucGlwZShcbiAgICAgICAgdGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSxcbiAgICAgICAgZmlsdGVyKCgpID0+IHRoaXMuX2NvbHVtbnMubGVuZ3RoID4gMCksXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMucmVmcmVzaENvbHVtbnMoKSk7XG4gIH1cblxuICBwcml2YXRlIHNldENvZyhjb2c6IEFsYWluU1RDb25maWcpOiB2b2lkIHtcbiAgICBjb25zdCBjb3B5TXVsdGlTb3J0ID0geyAuLi5jb2cubXVsdGlTb3J0IH07XG4gICAgLy8gQmVjYXVzZSBtdWx0aVNvcnQuZ2xvYmFsIHdpbGwgYWZmZWN0IHRoZSByZXN1bHQsIGl0IHNob3VsZCBiZSByZW1vdmVkIGZpcnN0LCBhbmQgbXVsdGlTb3J0IHdpbGwgYmUgb3BlcmF0ZWQgYWdhaW4gYWZ0ZXIgcHJvY2Vzc2luZy5cbiAgICBkZWxldGUgY29nLm11bHRpU29ydDtcbiAgICB0aGlzLmNvZyA9IGNvZztcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvZyk7XG5cbiAgICBpZiAoY29weU11bHRpU29ydC5nbG9iYWwgIT09IGZhbHNlKSB7XG4gICAgICB0aGlzLm11bHRpU29ydCA9IGNvcHlNdWx0aVNvcnQ7XG4gICAgfVxuICAgIHRoaXMuY29sdW1uU291cmNlLnNldENvZyhjb2cpO1xuICB9XG5cbiAgY2QoKTogdGhpcyB7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVuZGVyVG90YWwodG90YWw6IHN0cmluZywgcmFuZ2U6IHN0cmluZ1tdKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy50b3RhbFRwbFxuICAgICAgPyB0aGlzLnRvdGFsVHBsLnJlcGxhY2UoJ3t7dG90YWx9fScsIHRvdGFsKS5yZXBsYWNlKCd7e3JhbmdlWzBdfX0nLCByYW5nZVswXSkucmVwbGFjZSgne3tyYW5nZVsxXX19JywgcmFuZ2VbMV0pXG4gICAgICA6ICcnO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGFuZ2VFbWl0KHR5cGU6IFNUQ2hhbmdlVHlwZSwgZGF0YT86IGFueSk6IHZvaWQge1xuICAgIGNvbnN0IHJlczogU1RDaGFuZ2UgPSB7XG4gICAgICB0eXBlLFxuICAgICAgcGk6IHRoaXMucGksXG4gICAgICBwczogdGhpcy5wcyxcbiAgICAgIHRvdGFsOiB0aGlzLnRvdGFsLFxuICAgIH07XG4gICAgaWYgKGRhdGEgIT0gbnVsbCkge1xuICAgICAgcmVzW3R5cGVdID0gZGF0YTtcbiAgICB9XG4gICAgdGhpcy5jaGFuZ2UuZW1pdChyZXMpO1xuICB9XG5cbiAgLy8gI3JlZ2lvbiBkYXRhXG5cbiAgLyoqXG4gICAqIOiOt+WPlui/h+a7pOWQjuaJgOacieaVsOaNrlxuICAgKiAtIOacrOWcsOaVsOaNru+8muWMheWQq+aOkuW6j+OAgei/h+a7pOWQjuS4jeWIhumhteaVsOaNrlxuICAgKiAtIOi/nOeoi+aVsOaNru+8muS4jeS8oOmAkiBgcGlg44CBYHBzYCDkuKTkuKrlj4LmlbBcbiAgICovXG4gIGdldCBmaWx0ZXJlZERhdGEoKTogUHJvbWlzZTxTVERhdGFbXT4ge1xuICAgIHJldHVybiB0aGlzLmxvYWREYXRhKHsgcGFnaW5hdG9yOiBmYWxzZSB9IGFzIGFueSkudGhlbihyZXMgPT4gcmVzLmxpc3QpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVUb3RhbFRwbCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IHRvdGFsIH0gPSB0aGlzLnBhZ2U7XG4gICAgaWYgKHR5cGVvZiB0b3RhbCA9PT0gJ3N0cmluZycgJiYgdG90YWwubGVuZ3RoKSB7XG4gICAgICB0aGlzLnRvdGFsVHBsID0gdG90YWw7XG4gICAgfSBlbHNlIGlmICh0b0Jvb2xlYW4odG90YWwpKSB7XG4gICAgICB0aGlzLnRvdGFsVHBsID0gdGhpcy5sb2NhbGUudG90YWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudG90YWxUcGwgPSAnJztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldExvYWRpbmcodmFsOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubG9hZGluZyA9PSBudWxsKSB7XG4gICAgICB0aGlzLl9sb2FkaW5nID0gdmFsO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbG9hZERhdGEob3B0aW9ucz86IFNURGF0YVNvdXJjZU9wdGlvbnMpOiBQcm9taXNlPFNURGF0YVNvdXJjZVJlc3VsdD4ge1xuICAgIGNvbnN0IHsgcGksIHBzLCBkYXRhLCByZXEsIHJlcywgcGFnZSwgdG90YWwsIHNpbmdsZVNvcnQsIG11bHRpU29ydCwgcm93Q2xhc3NOYW1lIH0gPSB0aGlzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZVByb21pc2UsIHJlamVjdFByb21pc2UpID0+IHtcbiAgICAgIGlmICh0aGlzLmRhdGEkKSB7XG4gICAgICAgIHRoaXMuZGF0YSQudW5zdWJzY3JpYmUoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5kYXRhJCA9IHRoaXMuZGF0YVNvdXJjZVxuICAgICAgICAucHJvY2Vzcyh7XG4gICAgICAgICAgcGksXG4gICAgICAgICAgcHMsXG4gICAgICAgICAgdG90YWwsXG4gICAgICAgICAgZGF0YSxcbiAgICAgICAgICByZXEsXG4gICAgICAgICAgcmVzLFxuICAgICAgICAgIHBhZ2UsXG4gICAgICAgICAgY29sdW1uczogdGhpcy5fY29sdW1ucyxcbiAgICAgICAgICBzaW5nbGVTb3J0LFxuICAgICAgICAgIG11bHRpU29ydCxcbiAgICAgICAgICByb3dDbGFzc05hbWUsXG4gICAgICAgICAgcGFnaW5hdG9yOiB0cnVlLFxuICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgIH0pXG4gICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpXG4gICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgcmVzdWx0ID0+IHJlc29sdmVQcm9taXNlKHJlc3VsdCksXG4gICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdzdC5sb2FkRGF0ZScsIGVycm9yKTtcbiAgICAgICAgICAgIHJlamVjdFByb21pc2UoZXJyb3IpO1xuICAgICAgICAgIH0sXG4gICAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGxvYWRQYWdlRGF0YSgpOiBQcm9taXNlPHRoaXM+IHtcbiAgICB0aGlzLnNldExvYWRpbmcodHJ1ZSk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMubG9hZERhdGEoKTtcbiAgICAgIHRoaXMuc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICBpZiAodHlwZW9mIHJlc3VsdC5waSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5waSA9IHJlc3VsdC5waTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgcmVzdWx0LnBzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLnBzID0gcmVzdWx0LnBzO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiByZXN1bHQudG90YWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMudG90YWwgPSByZXN1bHQudG90YWw7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHJlc3VsdC5wYWdlU2hvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5faXNQYWdpbmF0aW9uID0gcmVzdWx0LnBhZ2VTaG93O1xuICAgICAgfVxuICAgICAgdGhpcy5fZGF0YSA9IHJlc3VsdC5saXN0IGFzIFNURGF0YVtdO1xuICAgICAgdGhpcy5fc3RhdGlzdGljYWwgPSByZXN1bHQuc3RhdGlzdGljYWwgYXMgU1RTdGF0aXN0aWNhbFJlc3VsdHM7XG4gICAgICB0aGlzLmNoYW5nZUVtaXQoJ2xvYWRlZCcsIHJlc3VsdC5saXN0KTtcbiAgICAgIC8vIFNob3VsZCBiZSByZS1yZW5kZXIgaW4gbmV4dCB0aWtlIHdoZW4gdXNpbmcgdmlydHVhbCBzY3JvbGxcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9uZy1hbGFpbi9uZy1hbGFpbi9pc3N1ZXMvMTgzNlxuICAgICAgaWYgKHRoaXMuY2RrVmlydHVhbFNjcm9sbFZpZXdwb3J0KSB7XG4gICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gdGhpcy5jZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQuY2hlY2tWaWV3cG9ydFNpemUoKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5fcmVmQ2hlY2soKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5zZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIGlmICghdGhpcy51bnN1YnNjcmliZSQuaXNTdG9wcGVkKSB7XG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgdGhpcy5lcnJvci5lbWl0KHsgdHlwZTogJ3JlcScsIGVycm9yIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9XG5cbiAgLyoqIOa4heepuuaJgOacieaVsOaNriAqL1xuICBjbGVhcihjbGVhblN0YXR1czogYm9vbGVhbiA9IHRydWUpOiB0aGlzIHtcbiAgICBpZiAoY2xlYW5TdGF0dXMpIHtcbiAgICAgIHRoaXMuY2xlYXJTdGF0dXMoKTtcbiAgICB9XG4gICAgdGhpcy5fZGF0YSA9IFtdO1xuICAgIHJldHVybiB0aGlzLmNkKCk7XG4gIH1cblxuICAvKiog5riF56m65omA5pyJ54q25oCBICovXG4gIGNsZWFyU3RhdHVzKCk6IHRoaXMge1xuICAgIHJldHVybiB0aGlzLmNsZWFyQ2hlY2soKS5jbGVhclJhZGlvKCkuY2xlYXJGaWx0ZXIoKS5jbGVhclNvcnQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmoLnmja7pobXnoIHph43mlrDliqDovb3mlbDmja5cbiAgICpcbiAgICogQHBhcmFtIHBpIOaMh+WumuW9k+WJjemhteegge+8jOm7mOiupO+8mmAxYFxuICAgKiBAcGFyYW0gZXh0cmFQYXJhbXMg6YeN5paw5oyH5a6aIGBleHRyYVBhcmFtc2Ag5YC8XG4gICAqIEBwYXJhbSBvcHRpb25zIOmAiemhuVxuICAgKi9cbiAgbG9hZChwaTogbnVtYmVyID0gMSwgZXh0cmFQYXJhbXM/OiB7fSwgb3B0aW9ucz86IFNUTG9hZE9wdGlvbnMpOiB0aGlzIHtcbiAgICBpZiAocGkgIT09IC0xKSB0aGlzLnBpID0gcGk7XG4gICAgaWYgKHR5cGVvZiBleHRyYVBhcmFtcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVxLnBhcmFtcyA9IG9wdGlvbnMgJiYgb3B0aW9ucy5tZXJnZSA/IHsgLi4udGhpcy5yZXEucGFyYW1zLCAuLi5leHRyYVBhcmFtcyB9IDogZXh0cmFQYXJhbXM7XG4gICAgfVxuICAgIHRoaXMuX2NoYW5nZSgncGknLCBvcHRpb25zKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiDph43mlrDliLfmlrDlvZPliY3pobVcbiAgICogQHBhcmFtIGV4dHJhUGFyYW1zIOmHjeaWsOaMh+WumiBgZXh0cmFQYXJhbXNgIOWAvFxuICAgKi9cbiAgcmVsb2FkKGV4dHJhUGFyYW1zPzoge30sIG9wdGlvbnM/OiBTVExvYWRPcHRpb25zKTogdGhpcyB7XG4gICAgcmV0dXJuIHRoaXMubG9hZCgtMSwgZXh0cmFQYXJhbXMsIG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIOmHjee9ruS4lOmHjeaWsOiuvue9riBgcGlgIOS4uiBgMWDvvIzljIXlkKvku6XkuIvlgLzvvJpcbiAgICogLSBgY2hlY2tgIOaVsOaNrlxuICAgKiAtIGByYWRpb2Ag5pWw5o2uXG4gICAqIC0gYHNvcnRgIOaVsOaNrlxuICAgKiAtIGBmaWxldGVyYCDmlbDmja5cbiAgICpcbiAgICogQHBhcmFtIGV4dHJhUGFyYW1zIOmHjeaWsOaMh+WumiBgZXh0cmFQYXJhbXNgIOWAvFxuICAgKi9cbiAgcmVzZXQoZXh0cmFQYXJhbXM/OiB7fSwgb3B0aW9ucz86IFNUTG9hZE9wdGlvbnMpOiB0aGlzIHtcbiAgICB0aGlzLmNsZWFyU3RhdHVzKCkubG9hZCgxLCBleHRyYVBhcmFtcywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcml2YXRlIF90b1RvcChlbmZvcmNlPzogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICghKGVuZm9yY2UgPT0gbnVsbCA/IHRoaXMucGFnZS50b1RvcCA6IGVuZm9yY2UpKSByZXR1cm47XG4gICAgY29uc3QgZWwgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgaWYgKHRoaXMuc2Nyb2xsKSB7XG4gICAgICBpZiAodGhpcy5jZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQpIHtcbiAgICAgICAgdGhpcy5jZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQuc2Nyb2xsVG8oe1xuICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsLnF1ZXJ5U2VsZWN0b3IoJy5hbnQtdGFibGUtYm9keSwgLmFudC10YWJsZS1jb250ZW50Jyk/LnNjcm9sbFRvKDAsIDApO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbC5zY3JvbGxJbnRvVmlldygpO1xuICAgIC8vIGZpeCBoZWFkZXIgaGVpZ2h0XG4gICAgdGhpcy5kb2MuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCAtPSB0aGlzLnBhZ2UudG9Ub3BPZmZzZXQhO1xuICB9XG5cbiAgX2NoYW5nZSh0eXBlOiAncGknIHwgJ3BzJywgb3B0aW9ucz86IFNUTG9hZE9wdGlvbnMpOiB2b2lkIHtcbiAgICBpZiAodHlwZSA9PT0gJ3BpJyB8fCAodHlwZSA9PT0gJ3BzJyAmJiB0aGlzLnBpIDw9IE1hdGguY2VpbCh0aGlzLnRvdGFsIC8gdGhpcy5wcykpKSB7XG4gICAgICB0aGlzLmxvYWRQYWdlRGF0YSgpLnRoZW4oKCkgPT4gdGhpcy5fdG9Ub3Aob3B0aW9ucz8udG9Ub3ApKTtcbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZUVtaXQodHlwZSk7XG4gIH1cblxuICBfY2xpY2soZTogRXZlbnQsIGl0ZW06IFNURGF0YSwgY29sdW1uOiBTVENvbHVtbiwgaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IHJlcyA9IGNvbHVtbi5jbGljayA/IGNvbHVtbi5jbGljayEoaXRlbSwgdGhpcykgOiBjb2x1bW4uZXZlbnQhKHsgcmVjb3JkOiBpdGVtLCBpbnN0YW5jZTogdGhpcywgZXZlbnQ6IGUsIGNvbHVtbiwgaW5kZXggfSk7XG4gICAgaWYgKHR5cGVvZiByZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHJlcywgeyBzdGF0ZTogdGhpcy5yb3V0ZXJTdGF0ZSB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHByaXZhdGUgY2xvc2VPdGhlckV4cGFuZChpdGVtOiBTVERhdGEpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5leHBhbmRBY2NvcmRpb24gPT09IGZhbHNlKSByZXR1cm47XG4gICAgdGhpcy5fZGF0YS5maWx0ZXIoaSA9PiBpICE9PSBpdGVtKS5mb3JFYWNoKGkgPT4gKGkuZXhwYW5kID0gZmFsc2UpKTtcbiAgfVxuXG4gIF9yb3dDbGljayhlOiBFdmVudCwgaXRlbTogU1REYXRhLCBpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKChlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkubm9kZU5hbWUgPT09ICdJTlBVVCcpIHJldHVybjtcbiAgICBjb25zdCB7IGV4cGFuZCwgZXhwYW5kUm93QnlDbGljaywgcm93Q2xpY2tUaW1lIH0gPSB0aGlzO1xuICAgIGlmICghIWV4cGFuZCAmJiBpdGVtLnNob3dFeHBhbmQgIT09IGZhbHNlICYmIGV4cGFuZFJvd0J5Q2xpY2spIHtcbiAgICAgIGl0ZW0uZXhwYW5kID0gIWl0ZW0uZXhwYW5kO1xuICAgICAgdGhpcy5jbG9zZU90aGVyRXhwYW5kKGl0ZW0pO1xuICAgICAgdGhpcy5jaGFuZ2VFbWl0KCdleHBhbmQnLCBpdGVtKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgKyt0aGlzLnJvd0NsaWNrQ291bnQ7XG4gICAgaWYgKHRoaXMucm93Q2xpY2tDb3VudCAhPT0gMSkgcmV0dXJuO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgZGF0YSA9IHsgZSwgaXRlbSwgaW5kZXggfTtcbiAgICAgIGlmICh0aGlzLnJvd0NsaWNrQ291bnQgPT09IDEpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VFbWl0KCdjbGljaycsIGRhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VFbWl0KCdkYmxDbGljaycsIGRhdGEpO1xuICAgICAgfVxuICAgICAgdGhpcy5yb3dDbGlja0NvdW50ID0gMDtcbiAgICB9LCByb3dDbGlja1RpbWUpO1xuICB9XG5cbiAgX2V4cGFuZENoYW5nZShpdGVtOiBTVERhdGEsIGV4cGFuZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICh0aGlzLmV4cGFuZFJvd0J5Q2xpY2spIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaXRlbS5leHBhbmQgPSBleHBhbmQ7XG4gICAgdGhpcy5jbG9zZU90aGVyRXhwYW5kKGl0ZW0pO1xuICAgIHRoaXMuY2hhbmdlRW1pdCgnZXhwYW5kJywgaXRlbSk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGEgcm93IGluIHRoZSB0YWJsZSwgbGlrZSB0aGlzOlxuICAgKlxuICAgKiBgYGBcbiAgICogdGhpcy5zdC5yZW1vdmVSb3coMClcbiAgICogdGhpcy5zdC5yZW1vdmVSb3coc3REYXRhSXRlbSlcbiAgICogYGBgXG4gICAqL1xuICByZW1vdmVSb3coZGF0YTogU1REYXRhIHwgU1REYXRhW10gfCBudW1iZXIpOiB0aGlzIHtcbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdudW1iZXInKSB7XG4gICAgICB0aGlzLl9kYXRhLnNwbGljZShkYXRhLCAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgIGRhdGEgPSBbZGF0YV07XG4gICAgICB9XG5cbiAgICAgIChkYXRhIGFzIFNURGF0YVtdKVxuICAgICAgICAubWFwKGl0ZW0gPT4gdGhpcy5fZGF0YS5pbmRleE9mKGl0ZW0pKVxuICAgICAgICAuZmlsdGVyKHBvcyA9PiBwb3MgIT09IC0xKVxuICAgICAgICAuZm9yRWFjaChwb3MgPT4gdGhpcy5fZGF0YS5zcGxpY2UocG9zLCAxKSk7XG4gICAgfVxuICAgIC8vIHJlY2FsY3VsYXRlIG5vXG4gICAgdGhpcy5fY29sdW1uc1xuICAgICAgLmZpbHRlcih3ID0+IHcudHlwZSA9PT0gJ25vJylcbiAgICAgIC5mb3JFYWNoKGMgPT4gdGhpcy5fZGF0YS5mb3JFYWNoKChpLCBpZHgpID0+IChpLl92YWx1ZXNbYy5fX3BvaW50IV0gPSB7IF90ZXh0OiB0aGlzLmRhdGFTb3VyY2UuZ2V0Tm9JbmRleChpLCBjLCBpZHgpLCBvcmc6IGlkeCB9KSkpO1xuXG4gICAgcmV0dXJuIHRoaXMuY2QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSByb3cgdmFsdWUgZm9yIHRoZSBgaW5kZXhgIGluIHRoZSB0YWJsZSwgbGlrZSB0aGlzOlxuICAgKlxuICAgKiAtIGBvcHRpbm9zLnJlZnJlc2hTY2hlbWFgIFdoZXRoZXIgdG8gcmVmcmVzaCBvZiBzdCBzY2hlbWFzXG4gICAqIC0gYG9wdGlub3MuZW1pdFJlbG9hZGAgV2hldGhlciB0byB0cmlnZ2VyIGEgcmVsb2FkIGh0dHAgcmVxdWVzdCB3aGVuIGRhdGEgaXMgdXJsXG4gICAqXG4gICAqIGBgYFxuICAgKiB0aGlzLnN0LnNldFJvdygwLCB7IHByaWNlOiAxMDAgfSlcbiAgICogdGhpcy5zdC5zZXRSb3coMCwgeyBwcmljZTogMTAwLCBuYW1lOiAnYXNkZicgfSlcbiAgICogdGhpcy5zdC5zZXRSb3coaXRlbSwgeyBwcmljZTogMTAwIH0pXG4gICAqIGBgYFxuICAgKi9cbiAgc2V0Um93KGluZGV4OiBudW1iZXIgfCBTVERhdGEsIGl0ZW06IFNURGF0YSwgb3B0aW9ucz86IHsgcmVmcmVzaFNjaGVtYT86IGJvb2xlYW47IGVtaXRSZWxvYWQ/OiBib29sZWFuIH0pOiB0aGlzIHtcbiAgICBvcHRpb25zID0geyByZWZyZXNoU2NoZW1hOiBmYWxzZSwgZW1pdFJlbG9hZDogZmFsc2UsIC4uLm9wdGlvbnMgfTtcbiAgICBpZiAodHlwZW9mIGluZGV4ICE9PSAnbnVtYmVyJykge1xuICAgICAgaW5kZXggPSB0aGlzLl9kYXRhLmluZGV4T2YoaW5kZXgpO1xuICAgIH1cbiAgICB0aGlzLl9kYXRhW2luZGV4XSA9IGRlZXBNZXJnZUtleSh0aGlzLl9kYXRhW2luZGV4XSwgZmFsc2UsIGl0ZW0pO1xuICAgIHRoaXMub3B0aW1pemVEYXRhKCk7XG4gICAgaWYgKG9wdGlvbnMucmVmcmVzaFNjaGVtYSkge1xuICAgICAgdGhpcy5yZXNldENvbHVtbnMoeyBlbWl0UmVsb2FkOiBvcHRpb25zLmVtaXRSZWxvYWQgfSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gc29ydFxuXG4gIHNvcnQoY29sOiBfU1RDb2x1bW4sIGlkeDogbnVtYmVyLCB2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgaWYgKHRoaXMubXVsdGlTb3J0KSB7XG4gICAgICBjb2wuX3NvcnQhLmRlZmF1bHQgPSB2YWx1ZTtcbiAgICAgIGNvbC5fc29ydCEudGljayA9IHRoaXMuZGF0YVNvdXJjZS5uZXh0U29ydFRpY2s7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NvbHVtbnMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IChpdGVtLl9zb3J0IS5kZWZhdWx0ID0gaW5kZXggPT09IGlkeCA/IHZhbHVlIDogbnVsbCkpO1xuICAgIH1cbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgdGhpcy5sb2FkUGFnZURhdGEoKTtcbiAgICBjb25zdCByZXMgPSB7XG4gICAgICB2YWx1ZSxcbiAgICAgIG1hcDogdGhpcy5kYXRhU291cmNlLmdldFJlcVNvcnRNYXAodGhpcy5zaW5nbGVTb3J0LCB0aGlzLm11bHRpU29ydCwgdGhpcy5fY29sdW1ucyksXG4gICAgICBjb2x1bW46IGNvbCxcbiAgICB9O1xuICAgIHRoaXMuY2hhbmdlRW1pdCgnc29ydCcsIHJlcyk7XG4gIH1cblxuICBjbGVhclNvcnQoKTogdGhpcyB7XG4gICAgdGhpcy5fY29sdW1ucy5mb3JFYWNoKGl0ZW0gPT4gKGl0ZW0uX3NvcnQhLmRlZmF1bHQgPSBudWxsKSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiBmaWx0ZXJcblxuICBwcml2YXRlIGhhbmRsZUZpbHRlcihjb2w6IFNUQ29sdW1uKTogdm9pZCB7XG4gICAgLy8g6L+H5ruk6KGo56S65LiA56eN5pWw5o2u55qE5Y+Y5YyW5bqU6YeN572u6aG156CB5Li6IGAxYFxuICAgIHRoaXMucGkgPSAxO1xuICAgIHRoaXMuY29sdW1uU291cmNlLnVwZGF0ZURlZmF1bHQoY29sLmZpbHRlciEpO1xuICAgIHRoaXMubG9hZFBhZ2VEYXRhKCk7XG4gICAgdGhpcy5jaGFuZ2VFbWl0KCdmaWx0ZXInLCBjb2wpO1xuICB9XG5cbiAgX2ZpbHRlckNvbmZpcm0oY29sOiBfU1RDb2x1bW4pOiB2b2lkIHtcbiAgICB0aGlzLmhhbmRsZUZpbHRlcihjb2wpO1xuICB9XG5cbiAgX2ZpbHRlclJhZGlvKGNvbDogX1NUQ29sdW1uLCBpdGVtOiBTVENvbHVtbkZpbHRlck1lbnUsIGNoZWNrZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBjb2wuZmlsdGVyIS5tZW51cyEuZm9yRWFjaChpID0+IChpLmNoZWNrZWQgPSBmYWxzZSkpO1xuICAgIGl0ZW0uY2hlY2tlZCA9IGNoZWNrZWQ7XG4gIH1cblxuICBfZmlsdGVyQ2xlYXIoY29sOiBfU1RDb2x1bW4pOiB2b2lkIHtcbiAgICB0aGlzLmNvbHVtblNvdXJjZS5jbGVhbkZpbHRlcihjb2wpO1xuICAgIHRoaXMuaGFuZGxlRmlsdGVyKGNvbCk7XG4gIH1cblxuICBjbGVhckZpbHRlcigpOiB0aGlzIHtcbiAgICB0aGlzLl9jb2x1bW5zLmZpbHRlcih3ID0+IHcuZmlsdGVyICYmIHcuZmlsdGVyLmRlZmF1bHQgPT09IHRydWUpLmZvckVhY2goY29sID0+IHRoaXMuY29sdW1uU291cmNlLmNsZWFuRmlsdGVyKGNvbCkpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgX2ZpbHRlckNsaWNrKCRldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiBjaGVja2JveFxuXG4gIC8qKiDmuIXpmaTmiYDmnIkgYGNoZWNrYm94YCAqL1xuICBjbGVhckNoZWNrKCk6IHRoaXMge1xuICAgIHJldHVybiB0aGlzLl9jaGVja0FsbChmYWxzZSk7XG4gIH1cblxuICBwcml2YXRlIF9yZWZDaGVjaygpOiB0aGlzIHtcbiAgICBjb25zdCB2YWxpZERhdGEgPSB0aGlzLl9kYXRhLmZpbHRlcih3ID0+ICF3LmRpc2FibGVkKTtcbiAgICBjb25zdCBjaGVja2VkTGlzdCA9IHZhbGlkRGF0YS5maWx0ZXIodyA9PiB3LmNoZWNrZWQgPT09IHRydWUpO1xuICAgIHRoaXMuX2FsbENoZWNrZWQgPSBjaGVja2VkTGlzdC5sZW5ndGggPiAwICYmIGNoZWNrZWRMaXN0Lmxlbmd0aCA9PT0gdmFsaWREYXRhLmxlbmd0aDtcbiAgICBjb25zdCBhbGxVbkNoZWNrZWQgPSB2YWxpZERhdGEuZXZlcnkodmFsdWUgPT4gIXZhbHVlLmNoZWNrZWQpO1xuICAgIHRoaXMuX2luZGV0ZXJtaW5hdGUgPSAhdGhpcy5fYWxsQ2hlY2tlZCAmJiAhYWxsVW5DaGVja2VkO1xuICAgIHRoaXMuX2FsbENoZWNrZWREaXNhYmxlZCA9IHRoaXMuX2RhdGEubGVuZ3RoID09PSB0aGlzLl9kYXRhLmZpbHRlcih3ID0+IHcuZGlzYWJsZWQpLmxlbmd0aDtcbiAgICByZXR1cm4gdGhpcy5jZCgpO1xuICB9XG5cbiAgX2NoZWNrQWxsKGNoZWNrZWQ/OiBib29sZWFuKTogdGhpcyB7XG4gICAgY2hlY2tlZCA9IHR5cGVvZiBjaGVja2VkID09PSAndW5kZWZpbmVkJyA/IHRoaXMuX2FsbENoZWNrZWQgOiBjaGVja2VkO1xuICAgIHRoaXMuX2RhdGEuZmlsdGVyKHcgPT4gIXcuZGlzYWJsZWQpLmZvckVhY2goaSA9PiAoaS5jaGVja2VkID0gY2hlY2tlZCkpO1xuICAgIHJldHVybiB0aGlzLl9yZWZDaGVjaygpLl9jaGVja05vdGlmeSgpO1xuICB9XG5cbiAgX2NoZWNrU2VsZWN0aW9uKGk6IFNURGF0YSwgdmFsdWU6IGJvb2xlYW4pOiB0aGlzIHtcbiAgICBpLmNoZWNrZWQgPSB2YWx1ZTtcbiAgICByZXR1cm4gdGhpcy5fcmVmQ2hlY2soKS5fY2hlY2tOb3RpZnkoKTtcbiAgfVxuXG4gIF9yb3dTZWxlY3Rpb24ocm93OiBTVENvbHVtblNlbGVjdGlvbik6IHRoaXMge1xuICAgIHJvdy5zZWxlY3QodGhpcy5fZGF0YSk7XG4gICAgcmV0dXJuIHRoaXMuX3JlZkNoZWNrKCkuX2NoZWNrTm90aWZ5KCk7XG4gIH1cblxuICBfY2hlY2tOb3RpZnkoKTogdGhpcyB7XG4gICAgY29uc3QgcmVzID0gdGhpcy5fZGF0YS5maWx0ZXIodyA9PiAhdy5kaXNhYmxlZCAmJiB3LmNoZWNrZWQgPT09IHRydWUpO1xuICAgIHRoaXMuY2hhbmdlRW1pdCgnY2hlY2tib3gnLCByZXMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gcmFkaW9cblxuICAvKiog5riF6Zmk5omA5pyJIGByYWRpb2AgKi9cbiAgY2xlYXJSYWRpbygpOiB0aGlzIHtcbiAgICB0aGlzLl9kYXRhLmZpbHRlcih3ID0+IHcuY2hlY2tlZCkuZm9yRWFjaChpdGVtID0+IChpdGVtLmNoZWNrZWQgPSBmYWxzZSkpO1xuICAgIHRoaXMuY2hhbmdlRW1pdCgncmFkaW8nLCBudWxsKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIF9yZWZSYWRpbyhjaGVja2VkOiBib29sZWFuLCBpdGVtOiBTVERhdGEpOiB0aGlzIHtcbiAgICAvLyBpZiAoaXRlbS5kaXNhYmxlZCA9PT0gdHJ1ZSkgcmV0dXJuO1xuICAgIHRoaXMuX2RhdGEuZmlsdGVyKHcgPT4gIXcuZGlzYWJsZWQpLmZvckVhY2goaSA9PiAoaS5jaGVja2VkID0gZmFsc2UpKTtcbiAgICBpdGVtLmNoZWNrZWQgPSBjaGVja2VkO1xuICAgIHRoaXMuY2hhbmdlRW1pdCgncmFkaW8nLCBpdGVtKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIGJ1dHRvbnNcblxuICBfYnRuQ2xpY2socmVjb3JkOiBTVERhdGEsIGJ0bjogU1RDb2x1bW5CdXR0b24sIGU/OiBFdmVudCk6IHZvaWQge1xuICAgIC8vIHNob3VsZCBiZSBzdG9wIHByb3BhZ2F0aW9uIHdoZW4gZXhwYW5kUm93QnlDbGljayBpcyB0cnVlXG4gICAgaWYgKGUgJiYgdGhpcy5leHBhbmRSb3dCeUNsaWNrID09PSB0cnVlKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgICBpZiAoYnRuLnR5cGUgPT09ICdtb2RhbCcgfHwgYnRuLnR5cGUgPT09ICdzdGF0aWMnKSB7XG4gICAgICBjb25zdCB7IG1vZGFsIH0gPSBidG47XG4gICAgICBjb25zdCBvYmogPSB7IFttb2RhbCEucGFyYW1zTmFtZSFdOiByZWNvcmQgfTtcbiAgICAgICh0aGlzLm1vZGFsSGVscGVyW2J0bi50eXBlID09PSAnbW9kYWwnID8gJ2NyZWF0ZScgOiAnY3JlYXRlU3RhdGljJ10gYXMgYW55KShcbiAgICAgICAgbW9kYWwhLmNvbXBvbmVudCxcbiAgICAgICAgeyAuLi5vYmosIC4uLihtb2RhbCEucGFyYW1zICYmIG1vZGFsIS5wYXJhbXMhKHJlY29yZCkpIH0sXG4gICAgICAgIGRlZXBNZXJnZUtleSh7fSwgdHJ1ZSwgdGhpcy5jb2cubW9kYWwsIG1vZGFsKSxcbiAgICAgIClcbiAgICAgICAgLnBpcGUoZmlsdGVyKHcgPT4gdHlwZW9mIHcgIT09ICd1bmRlZmluZWQnKSlcbiAgICAgICAgLnN1YnNjcmliZSgocmVzOiBOelNhZmVBbnkpID0+IHRoaXMuYnRuQ2FsbGJhY2socmVjb3JkLCBidG4sIGUsIHJlcykpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoYnRuLnR5cGUgPT09ICdkcmF3ZXInKSB7XG4gICAgICBjb25zdCB7IGRyYXdlciB9ID0gYnRuO1xuICAgICAgY29uc3Qgb2JqID0geyBbZHJhd2VyIS5wYXJhbXNOYW1lIV06IHJlY29yZCB9O1xuICAgICAgdGhpcy5kcmF3ZXJIZWxwZXJcbiAgICAgICAgLmNyZWF0ZShcbiAgICAgICAgICBkcmF3ZXIhLnRpdGxlISxcbiAgICAgICAgICBkcmF3ZXIhLmNvbXBvbmVudCxcbiAgICAgICAgICB7IC4uLm9iaiwgLi4uKGRyYXdlciEucGFyYW1zICYmIGRyYXdlciEucGFyYW1zIShyZWNvcmQpKSB9LFxuICAgICAgICAgIGRlZXBNZXJnZUtleSh7fSwgdHJ1ZSwgdGhpcy5jb2cuZHJhd2VyLCBkcmF3ZXIpLFxuICAgICAgICApXG4gICAgICAgIC5waXBlKGZpbHRlcih3ID0+IHR5cGVvZiB3ICE9PSAndW5kZWZpbmVkJykpXG4gICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHRoaXMuYnRuQ2FsbGJhY2socmVjb3JkLCBidG4sIGUsIHJlcykpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoYnRuLnR5cGUgPT09ICdsaW5rJykge1xuICAgICAgY29uc3QgY2xpY2tSZXMgPSB0aGlzLmJ0bkNhbGxiYWNrKHJlY29yZCwgYnRuLCBlKTtcbiAgICAgIGlmICh0eXBlb2YgY2xpY2tSZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoY2xpY2tSZXMsIHsgc3RhdGU6IHRoaXMucm91dGVyU3RhdGUgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuYnRuQ2FsbGJhY2socmVjb3JkLCBidG4sIGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBidG5DYWxsYmFjayhyZWNvcmQ6IFNURGF0YSwgYnRuOiBTVENvbHVtbkJ1dHRvbiwgZXZlbnQ/OiBFdmVudCwgbW9kYWw/OiBhbnkpOiBhbnkge1xuICAgIGNvbnN0IGZuID0gYnRuLmNsaWNrIHx8IGJ0bi5ldmVudDtcbiAgICBpZiAoIWZuKSByZXR1cm47XG4gICAgaWYgKHR5cGVvZiBmbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHN3aXRjaCAoZm4pIHtcbiAgICAgICAgY2FzZSAnbG9hZCc6XG4gICAgICAgICAgdGhpcy5sb2FkKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3JlbG9hZCc6XG4gICAgICAgICAgdGhpcy5yZWxvYWQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGJ0bi5jbGljaykge1xuICAgICAgICByZXR1cm4gKGJ0bi5jbGljayBhcyAocmVjb3JkOiBTVERhdGEsIG1vZGFsPzogYW55LCBpbnN0YW5jZT86IFNUQ29tcG9uZW50KSA9PiBhbnkpKHJlY29yZCwgbW9kYWwsIHRoaXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChidG4uZXZlbnQgYXMgKG9wdGlvbnM6IFNUQ29sdW1uQnV0dG9uRXZlbnRPcHRpb25zKSA9PiBhbnkpKHsgcmVjb3JkLCBtb2RhbCwgaW5zdGFuY2U6IHRoaXMsIGV2ZW50LCBidG4gfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX2J0blRleHQocmVjb3JkOiBTVERhdGEsIGJ0bjogU1RDb2x1bW5CdXR0b24pOiBzdHJpbmcge1xuICAgIHJldHVybiB0eXBlb2YgYnRuLnRleHQgPT09ICdmdW5jdGlvbicgPyBidG4udGV4dChyZWNvcmQsIGJ0bikgOiBidG4udGV4dCB8fCAnJztcbiAgfVxuXG4gIF92YWxpZEJ0bnMoYnRuczogU1RDb2x1bW5CdXR0b25bXSwgaXRlbTogU1REYXRhLCBjb2w6IFNUQ29sdW1uKTogU1RDb2x1bW5CdXR0b25bXSB7XG4gICAgcmV0dXJuIGJ0bnMuZmlsdGVyKGJ0biA9PiB7XG4gICAgICBjb25zdCByZXN1bHQgPSBidG4uaWlmIShpdGVtLCBidG4sIGNvbCk7XG4gICAgICBjb25zdCBpc1JlbmRlckRpc2FibGVkID0gYnRuLmlpZkJlaGF2aW9yID09PSAnZGlzYWJsZWQnO1xuICAgICAgYnRuLl9yZXN1bHQgPSByZXN1bHQ7XG4gICAgICBidG4uX2Rpc2FibGVkID0gIXJlc3VsdCAmJiBpc1JlbmRlckRpc2FibGVkO1xuICAgICAgcmV0dXJuIHJlc3VsdCB8fCBpc1JlbmRlckRpc2FibGVkO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gZXhwb3J0XG5cbiAgLyoqXG4gICAqIOWvvOWHuuW9k+WJjemhte+8jOehruS/neW3sue7j+azqOWGjCBgWGxzeE1vZHVsZWBcbiAgICogQHBhcmFtIG5ld0RhdGEg6YeN5paw5oyH5a6a5pWw5o2u77yb6Iul5Li6IGB0cnVlYCDooajnpLrkvb/nlKggYGZpbHRlcmVkRGF0YWAg5pWw5o2uXG4gICAqIEBwYXJhbSBvcHQg6aKd5aSW5Y+C5pWwXG4gICAqL1xuICBleHBvcnQobmV3RGF0YT86IFNURGF0YVtdIHwgdHJ1ZSwgb3B0PzogU1RFeHBvcnRPcHRpb25zKTogdm9pZCB7XG4gICAgKG5ld0RhdGEgPT09IHRydWUgPyBmcm9tKHRoaXMuZmlsdGVyZWREYXRhKSA6IG9mKG5ld0RhdGEgfHwgdGhpcy5fZGF0YSkpLnN1YnNjcmliZSgocmVzOiBTVERhdGFbXSkgPT5cbiAgICAgIHRoaXMuZXhwb3J0U3J2LmV4cG9ydCh7XG4gICAgICAgIC4uLm9wdCxcbiAgICAgICAgZGF0YTogcmVzLFxuICAgICAgICBjb2x1bWVuczogdGhpcy5fY29sdW1ucyxcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiByZXNpemFibGVcblxuICBjb2xSZXNpemUoeyB3aWR0aCB9OiBOelJlc2l6ZUV2ZW50LCBjb2x1bW46IF9TVENvbHVtbik6IHZvaWQge1xuICAgIGNvbHVtbi53aWR0aCA9IGAke3dpZHRofXB4YDtcbiAgICB0aGlzLmNoYW5nZUVtaXQoJ3Jlc2l6ZScsIGNvbHVtbik7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgZ2V0IGNka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydCgpOiBDZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQge1xuICAgIHJldHVybiB0aGlzLm9yZ1RhYmxlLmNka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydCE7XG4gIH1cblxuICByZXNldENvbHVtbnMob3B0aW9ucz86IFNUUmVzZXRDb2x1bW5zT3B0aW9uKTogUHJvbWlzZTx0aGlzPiB7XG4gICAgb3B0aW9ucyA9IHsgZW1pdFJlbG9hZDogdHJ1ZSwgcHJlQ2xlYXJEYXRhOiBmYWxzZSwgLi4ub3B0aW9ucyB9O1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5jb2x1bW5zICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5jb2x1bW5zID0gb3B0aW9ucy5jb2x1bW5zO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMucGkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnBpID0gb3B0aW9ucy5waTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLnBzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5wcyA9IG9wdGlvbnMucHM7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLmVtaXRSZWxvYWQpIHtcbiAgICAgIC8vIFNob3VsZCBjbGVhbiBkYXRhLCBCZWNhdXNlIG9mIGNoYW5naW5nIGNvbHVtbnMgbWF5IGNhdXNlIGluYWNjdXJhdGUgZGF0YVxuICAgICAgb3B0aW9ucy5wcmVDbGVhckRhdGEgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5wcmVDbGVhckRhdGEpIHtcbiAgICAgIHRoaXMuX2RhdGEgPSBbXTtcbiAgICB9XG4gICAgdGhpcy5yZWZyZXNoQ29sdW1ucygpO1xuICAgIGlmIChvcHRpb25zLmVtaXRSZWxvYWQpIHtcbiAgICAgIHJldHVybiB0aGlzLmxvYWRQYWdlRGF0YSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNkKCk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVmcmVzaENvbHVtbnMoKTogdGhpcyB7XG4gICAgY29uc3QgcmVzID0gdGhpcy5jb2x1bW5Tb3VyY2UucHJvY2Vzcyh0aGlzLmNvbHVtbnMgYXMgX1NUQ29sdW1uW10sIHsgd2lkdGhNb2RlOiB0aGlzLndpZHRoTW9kZSwgcmVzaXphYmxlOiB0aGlzLl9yZXNpemFibGUgfSk7XG4gICAgdGhpcy5fY29sdW1ucyA9IHJlcy5jb2x1bW5zO1xuICAgIHRoaXMuX2hlYWRlcnMgPSByZXMuaGVhZGVycztcbiAgICBpZiAodGhpcy5jdXN0b21XaWR0aENvbmZpZyA9PT0gZmFsc2UgJiYgcmVzLmhlYWRlcldpZHRocyAhPSBudWxsKSB7XG4gICAgICB0aGlzLl93aWR0aENvbmZpZyA9IHJlcy5oZWFkZXJXaWR0aHM7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJpdmF0ZSBvcHRpbWl6ZURhdGEoKTogdm9pZCB7XG4gICAgdGhpcy5fZGF0YSA9IHRoaXMuZGF0YVNvdXJjZS5vcHRpbWl6ZURhdGEoeyBjb2x1bW5zOiB0aGlzLl9jb2x1bW5zLCByZXN1bHQ6IHRoaXMuX2RhdGEsIHJvd0NsYXNzTmFtZTogdGhpcy5yb3dDbGFzc05hbWUgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHB1cmUgZGF0YSwgYHN0YCBpbnRlcm5hbGx5IG1haW50YWlucyBhIHNldCBvZiBkYXRhIGZvciBjYWNoaW5nLCB0aGlzIHBhcnQgb2YgZGF0YSBtYXkgYWZmZWN0IHRoZSBiYWNrZW5kXG4gICAqXG4gICAqIOi/lOWbnue6r+WHgOaVsOaNru+8jGBzdGAg5YaF6YOo5Lya57u05oqk5LiA57uE55So5LqO57yT5a2Y55qE5pWw5o2u77yM6L+Z6YOo5YiG5pWw5o2u5Y+v6IO95Lya5b2x5ZON5ZCO56uvXG4gICAqL1xuICBwdXJlSXRlbShpdGVtT3JJbmRleDogU1REYXRhIHwgbnVtYmVyKTogU1REYXRhIHwgbnVsbCB7XG4gICAgaWYgKHR5cGVvZiBpdGVtT3JJbmRleCA9PT0gJ251bWJlcicpIHtcbiAgICAgIGl0ZW1PckluZGV4ID0gdGhpcy5fZGF0YVtpdGVtT3JJbmRleF07XG4gICAgfVxuICAgIGlmICghaXRlbU9ySW5kZXgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBjb3B5SXRlbSA9IGRlZXBDb3B5KGl0ZW1PckluZGV4KTtcbiAgICBkZWxldGUgY29weUl0ZW0uX3ZhbHVlcztcbiAgICByZXR1cm4gY29weUl0ZW07XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jb2x1bW5Tb3VyY2UucmVzdG9yZUFsbFJlbmRlcih0aGlzLl9jb2x1bW5zKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW1AgaW4ga2V5b2YgdGhpc10/OiBTaW1wbGVDaGFuZ2UgfSAmIFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5jb2x1bW5zKSB7XG4gICAgICB0aGlzLnJlZnJlc2hDb2x1bW5zKCkub3B0aW1pemVEYXRhKCk7XG4gICAgfVxuICAgIGNvbnN0IGNoYW5nZURhdGEgPSBjaGFuZ2VzLmRhdGE7XG4gICAgaWYgKGNoYW5nZURhdGEgJiYgY2hhbmdlRGF0YS5jdXJyZW50VmFsdWUgJiYgISh0aGlzLnJlcS5sYXp5TG9hZCAmJiBjaGFuZ2VEYXRhLmZpcnN0Q2hhbmdlKSkge1xuICAgICAgdGhpcy5sb2FkUGFnZURhdGEoKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMubG9hZGluZykge1xuICAgICAgdGhpcy5fbG9hZGluZyA9IGNoYW5nZXMubG9hZGluZy5jdXJyZW50VmFsdWU7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgY29uc3QgeyB1bnN1YnNjcmliZSQgfSA9IHRoaXM7XG4gICAgdW5zdWJzY3JpYmUkLm5leHQoKTtcbiAgICB1bnN1YnNjcmliZSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19