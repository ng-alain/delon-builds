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
import { AlainConfigService, deepMergeKey, InputBoolean, InputNumber, toBoolean, } from '@delon/util';
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
                (/** @type {?} */ (el.querySelector('.ant-table-body'))).scrollTo(0, 0);
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
                template: "<ng-template #btnTpl let-i let-btn=\"btn\">\n  <ng-container *ngIf=\"!btn.tooltip\">\n    <ng-template [ngTemplateOutlet]=\"btnItemTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n  </ng-container>\n  <span *ngIf=\"btn.tooltip\" nz-tooltip [nzTooltipTitle]=\"btn.tooltip\">\n    <ng-template [ngTemplateOutlet]=\"btnItemTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n  </span>\n</ng-template>\n<ng-template #btnItemTpl let-i let-btn=\"btn\">\n  <a\n    *ngIf=\"btn.pop\"\n    nz-popconfirm\n    [nzPopconfirmTitle]=\"btn.pop.title\"\n    [nzIcon]=\"btn.pop.icon\"\n    [nzCondition]=\"btn.pop.condition(i)\"\n    [nzCancelText]=\"btn.pop.cancelText\"\n    [nzOkText]=\"btn.pop.okText\"\n    [nzOkType]=\"btn.pop.okType\"\n    (nzOnConfirm)=\"_btnClick(i, btn, $event)\"\n    class=\"st__btn-text\"\n    [ngClass]=\"btn.className\"\n  >\n    <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n  </a>\n  <a *ngIf=\"!btn.pop\" (click)=\"_btnClick(i, btn, $event)\" class=\"st__btn-text\" [ngClass]=\"btn.className\">\n    <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n  </a>\n</ng-template>\n<ng-template #btnTextTpl let-i let-btn=\"btn\">\n  <ng-container *ngIf=\"btn.icon\">\n    <i\n      *ngIf=\"!btn.icon.iconfont\"\n      nz-icon\n      [nzType]=\"btn.icon.type\"\n      [nzTheme]=\"btn.icon.theme\"\n      [nzSpin]=\"btn.icon.spin\"\n      [nzTwotoneColor]=\"btn.icon.twoToneColor\"\n    ></i>\n    <i *ngIf=\"btn.icon.iconfont\" nz-icon [nzIconfont]=\"btn.icon.iconfont\"></i>\n  </ng-container>\n  <span [innerHTML]=\"_btnText(i, btn)\" [ngClass]=\"{ 'pl-xs': btn.icon }\"></span>\n</ng-template>\n<ng-template #titleTpl let-i>\n  <span [innerHTML]=\"i._text\"></span>\n  <small *ngIf=\"i.optional\" class=\"st__head-optional\" [innerHTML]=\"i.optional\"></small>\n  <i *ngIf=\"i.optionalHelp\" class=\"st__head-tip\" nz-tooltip [nzTooltipTitle]=\"i.optionalHelp\" nz-icon nzType=\"question-circle\"></i>\n</ng-template>\n<ng-template #chkAllTpl let-custom>\n  <label\n    nz-checkbox\n    class=\"st__checkall\"\n    [nzDisabled]=\"_allCheckedDisabled\"\n    [(ngModel)]=\"_allChecked\"\n    [nzIndeterminate]=\"_indeterminate\"\n    (ngModelChange)=\"_checkAll()\"\n    [class.ant-table-selection-select-all-custom]=\"custom\"\n  ></label>\n</ng-template>\n<nz-table\n  #table\n  [nzData]=\"_data\"\n  [(nzPageIndex)]=\"pi\"\n  (nzPageIndexChange)=\"_change('pi')\"\n  [(nzPageSize)]=\"ps\"\n  (nzPageSizeChange)=\"_change('ps')\"\n  [nzTotal]=\"total\"\n  [nzShowPagination]=\"_isPagination\"\n  [nzFrontPagination]=\"false\"\n  [nzBordered]=\"bordered\"\n  [nzSize]=\"size\"\n  [nzLoading]=\"_loading\"\n  [nzLoadingDelay]=\"loadingDelay\"\n  [nzLoadingIndicator]=\"loadingIndicator\"\n  [nzTitle]=\"header\"\n  [nzFooter]=\"footer\"\n  [nzScroll]=\"scroll\"\n  [nzVirtualItemSize]=\"virtualItemSize\"\n  [nzVirtualMaxBufferPx]=\"virtualMaxBufferPx\"\n  [nzVirtualMinBufferPx]=\"virtualMinBufferPx\"\n  [nzVirtualForTrackBy]=\"virtualForTrackBy\"\n  [nzNoResult]=\"noResult\"\n  [nzPageSizeOptions]=\"page.pageSizes\"\n  [nzShowQuickJumper]=\"page.showQuickJumper\"\n  [nzShowSizeChanger]=\"page.showSize\"\n  [nzPaginationPosition]=\"page.position\"\n  [nzItemRender]=\"page.itemRender\"\n  [nzSimple]=\"page.simple\"\n  [nzShowTotal]=\"totalTpl\"\n  [nzWidthConfig]=\"_widthConfig\"\n>\n  <thead class=\"st__head\">\n    <tr *ngFor=\"let row of _headers; let rowFirst = first\">\n      <th *ngIf=\"rowFirst && expand\" nzWidth=\"50px\" [rowSpan]=\"_headers.length\"></th>\n      <th\n        *ngFor=\"let h of row; let index = index; let last = last\"\n        [colSpan]=\"h.colSpan\"\n        [rowSpan]=\"h.rowSpan\"\n        [nzWidth]=\"h.column.width\"\n        [nzLeft]=\"!!h.column._left\"\n        [nzRight]=\"!!h.column._right\"\n        [ngClass]=\"h.column.className\"\n        [attr.data-col]=\"h.column.indexKey\"\n        [nzShowSort]=\"h.column._sort.enabled\"\n        [nzSortOrder]=\"h.column._sort.default\"\n        (nzSortOrderChange)=\"sort(h.column, index, $event)\"\n        [nzCustomFilter]=\"h.column.filter\"\n        nz-resizable\n        [nzDisabled]=\"last || h.column.resizable.disabled\"\n        [nzMaxWidth]=\"h.column.resizable.maxWidth\"\n        [nzMinWidth]=\"h.column.resizable.minWidth\"\n        [nzBounds]=\"h.column.resizable.bounds\"\n        [nzPreview]=\"h.column.resizable.preview\"\n        (nzResizeEnd)=\"colResize($event, h.column)\"\n      >\n        <nz-resize-handle *ngIf=\"!last && !h.column.resizable.disabled\" nzDirection=\"right\"><i></i></nz-resize-handle>\n        <ng-template #renderTitle [ngTemplateOutlet]=\"h.column.__renderTitle\" [ngTemplateOutletContext]=\"{ $implicit: h.column, index: index }\"></ng-template>\n        <ng-container *ngIf=\"!h.column.__renderTitle; else renderTitle\">\n          <ng-container [ngSwitch]=\"h.column.type\">\n            <ng-container *ngSwitchCase=\"'checkbox'\">\n              <ng-container *ngIf=\"h.column.selections.length === 0\">\n                <ng-template [ngTemplateOutlet]=\"chkAllTpl\" [ngTemplateOutletContext]=\"{ $implicit: false }\"> </ng-template>\n              </ng-container>\n              <div *ngIf=\"h.column.selections.length > 0\" class=\"ant-table-selection\">\n                <ng-template [ngTemplateOutlet]=\"chkAllTpl\" [ngTemplateOutletContext]=\"{ $implicit: true }\"> </ng-template>\n                <div\n                  *ngIf=\"h.column.selections.length\"\n                  nz-dropdown\n                  nzPlacement=\"bottomLeft\"\n                  [nzDropdownMenu]=\"selectionMenu\"\n                  class=\"ant-table-selection-down st__checkall-selection\"\n                >\n                  <i nz-icon nzType=\"down\"></i>\n                </div>\n                <nz-dropdown-menu #selectionMenu=\"nzDropdownMenu\">\n                  <ul nz-menu class=\"ant-table-selection-menu\">\n                    <li nz-menu-item *ngFor=\"let rw of h.column.selections\" (click)=\"_rowSelection(rw)\" [innerHTML]=\"rw.text\"></li>\n                  </ul>\n                </nz-dropdown-menu>\n              </div>\n            </ng-container>\n            <ng-container *ngSwitchDefault>\n              <ng-template [ngTemplateOutlet]=\"titleTpl\" [ngTemplateOutletContext]=\"{ $implicit: h.column.title }\"></ng-template>\n            </ng-container>\n          </ng-container>\n        </ng-container>\n        <div\n          nz-th-extra\n          *ngIf=\"h.column.filter\"\n          class=\"ant-table-filter-trigger-container st__filter\"\n          [class.ant-table-filter-trigger-container-open]=\"h.column.filter.visible\"\n        >\n          <span\n            class=\"ant-table-filter-trigger\"\n            [class.active]=\"h.column.filter.visible || h.column.filter.default\"\n            nz-dropdown\n            [nzDropdownMenu]=\"filterMenu\"\n            nzTrigger=\"click\"\n            [nzClickHide]=\"false\"\n            [(nzVisible)]=\"h.column.filter.visible\"\n            nzOverlayClassName=\"st__filter-wrap\"\n            (click)=\"_filterClick($event)\"\n          >\n            <i nz-icon [nzType]=\"h.column.filter.icon.type\" [nzTheme]=\"h.column.filter.icon.theme\"></i>\n          </span>\n          <nz-dropdown-menu #filterMenu=\"nzDropdownMenu\">\n            <div class=\"ant-table-filter-dropdown\">\n              <ng-container [ngSwitch]=\"h.column.filter.type\">\n                <div *ngSwitchCase=\"'keyword'\" class=\"st__filter-keyword\">\n                  <input type=\"text\" nz-input [attr.placeholder]=\"h.column.filter.menus[0].text\" [(ngModel)]=\"h.column.filter.menus[0].value\" />\n                </div>\n                <ul *ngSwitchDefault nz-menu>\n                  <ng-container *ngIf=\"h.column.filter.multiple\">\n                    <li nz-menu-item *ngFor=\"let filter of h.column.filter.menus\">\n                      <label nz-checkbox [(ngModel)]=\"filter.checked\">{{ filter.text }}</label>\n                    </li>\n                  </ng-container>\n                  <ng-container *ngIf=\"!h.column.filter.multiple\">\n                    <li nz-menu-item *ngFor=\"let filter of h.column.filter.menus\">\n                      <label nz-radio [ngModel]=\"filter.checked\" (ngModelChange)=\"_filterRadio(h.column, filter, $event)\">{{ filter.text }}</label>\n                    </li>\n                  </ng-container>\n                </ul>\n              </ng-container>\n              <div class=\"ant-table-filter-dropdown-btns\">\n                <a class=\"ant-table-filter-dropdown-link confirm\" (click)=\"h.column.filter.visible = false\">\n                  <span (click)=\"_filterConfirm(h.column)\">{{ h.column.filter.confirmText || locale.filterConfirm }}</span>\n                </a>\n                <a class=\"ant-table-filter-dropdown-link clear\" (click)=\"h.column.filter.visible = false\">\n                  <span (click)=\"_filterClear(h.column)\">{{ h.column.filter.clearText || locale.filterReset }}</span>\n                </a>\n              </div>\n            </div>\n          </nz-dropdown-menu>\n        </div>\n      </th>\n    </tr>\n  </thead>\n  <tbody class=\"st__body\">\n    <ng-container *ngIf=\"!_loading\">\n      <ng-template [ngTemplateOutlet]=\"bodyHeader\" [ngTemplateOutletContext]=\"{ $implicit: _statistical }\"></ng-template>\n    </ng-container>\n    <ng-template #bodyTpl let-i let-index=\"index\">\n      <tr [attr.data-index]=\"index\" (click)=\"_rowClick($event, i, index)\" [ngClass]=\"i._rowClassName\">\n        <td\n          *ngIf=\"expand\"\n          [nzShowExpand]=\"expand && i.showExpand !== false\"\n          [nzExpand]=\"i.expand\"\n          (nzExpandChange)=\"_expandChange(i, $event)\"\n          nzWidth=\"50px\"\n        ></td>\n        <td *ngFor=\"let c of _columns; let cIdx = index\" [nzLeft]=\"!!c._left\" [nzRight]=\"!!c._right\" [ngClass]=\"c._className\" [attr.colspan]=\"c.colSpan\">\n          <span *ngIf=\"responsive\" class=\"ant-table-rep__title\">\n            <ng-template [ngTemplateOutlet]=\"titleTpl\" [ngTemplateOutletContext]=\"{ $implicit: c.title }\"></ng-template>\n          </span>\n          <span>\n            <ng-template #render [ngTemplateOutlet]=\"c.__render\" [ngTemplateOutletContext]=\"{ $implicit: i, index: index, column: c }\"></ng-template>\n            <ng-container *ngIf=\"!c.__render; else render\">\n              <ng-container [ngSwitch]=\"c.type\">\n                <label\n                  *ngSwitchCase=\"'checkbox'\"\n                  nz-checkbox\n                  [nzDisabled]=\"i.disabled\"\n                  [ngModel]=\"i.checked\"\n                  (ngModelChange)=\"_checkSelection(i, $event)\"\n                ></label>\n                <label *ngSwitchCase=\"'radio'\" nz-radio [nzDisabled]=\"i.disabled\" [ngModel]=\"i.checked\" (ngModelChange)=\"_refRadio($event, i)\"></label>\n                <a *ngSwitchCase=\"'link'\" (click)=\"_click($event, i, c)\" [innerHTML]=\"i._values[cIdx]._text\" [attr.title]=\"i._values[cIdx].text\"></a>\n                <ng-container *ngIf=\"i._values[cIdx].text\">\n                  <nz-tag *ngSwitchCase=\"'tag'\" [nzColor]=\"i._values[cIdx].color\">\n                    <span [innerHTML]=\"i._values[cIdx]._text\"></span>\n                  </nz-tag>\n                  <nz-badge *ngSwitchCase=\"'badge'\" [nzStatus]=\"i._values[cIdx].color\" [nzText]=\"i._values[cIdx].text\"></nz-badge>\n                </ng-container>\n                <ng-template *ngSwitchCase=\"'widget'\" st-widget-host [record]=\"i\" [column]=\"c\"></ng-template>\n                <span *ngSwitchDefault [innerHTML]=\"i._values[cIdx]._text\" [attr.title]=\"c._isTruncate ? i._values[cIdx].text : null\"></span>\n              </ng-container>\n              <ng-container *ngFor=\"let btn of _validBtns(c.buttons, i, c); let last = last\">\n                <a *ngIf=\"btn.children.length > 0\" nz-dropdown [nzDropdownMenu]=\"btnMenu\" nzOverlayClassName=\"st__btn-sub\">\n                  <span [innerHTML]=\"_btnText(i, btn)\"></span>\n                  <i nz-icon nzType=\"down\"></i>\n                </a>\n                <nz-dropdown-menu #btnMenu=\"nzDropdownMenu\">\n                  <ul nz-menu>\n                    <ng-container *ngFor=\"let subBtn of _validBtns(btn.children, i, c)\">\n                      <li *ngIf=\"subBtn.type !== 'divider'\" nz-menu-item [class.st__btn-disabled]=\"subBtn._disabled\">\n                        <ng-template [ngTemplateOutlet]=\"btnTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: subBtn }\"> </ng-template>\n                      </li>\n                      <li *ngIf=\"subBtn.type === 'divider'\" nz-menu-divider></li>\n                    </ng-container>\n                  </ul>\n                </nz-dropdown-menu>\n                <span *ngIf=\"btn.children.length == 0\" [class.st__btn-disabled]=\"btn._disabled\">\n                  <ng-template [ngTemplateOutlet]=\"btnTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"> </ng-template>\n                </span>\n                <nz-divider *ngIf=\"!last\" nzType=\"vertical\"></nz-divider>\n              </ng-container>\n              <ng-template\n                [ngIf]=\"!c.__renderExpanded\"\n                [ngTemplateOutlet]=\"c.__renderExpanded\"\n                [ngTemplateOutletContext]=\"{ $implicit: i, index: index, column: c }\"\n              ></ng-template>\n            </ng-container>\n          </span>\n        </td>\n      </tr>\n      <tr [nzExpand]=\"i.expand\">\n        <ng-template [ngTemplateOutlet]=\"expand\" [ngTemplateOutletContext]=\"{ $implicit: i, index: index }\"></ng-template>\n      </tr>\n    </ng-template>\n    <ng-container *ngIf=\"!virtualScroll\">\n      <ng-container *ngFor=\"let i of _data; let index = index\">\n        <ng-template [ngTemplateOutlet]=\"bodyTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, index: index }\"> </ng-template>\n      </ng-container>\n    </ng-container>\n    <ng-container *ngIf=\"virtualScroll\">\n      <ng-template nz-virtual-scroll let-i let-index=\"index\">\n        <ng-template [ngTemplateOutlet]=\"bodyTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, index: index }\"> </ng-template>\n      </ng-template>\n    </ng-container>\n    <ng-container *ngIf=\"!_loading\">\n      <ng-template [ngTemplateOutlet]=\"body\" [ngTemplateOutletContext]=\"{ $implicit: _statistical }\"></ng-template>\n    </ng-container>\n  </tbody>\n  <ng-template #totalTpl let-range=\"range\" let-total>{{ renderTotal(total, range) }}</ng-template>\n</nz-table>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9zdC8iLCJzb3VyY2VzIjpbInN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3hELE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBR0wsUUFBUSxFQUNSLE1BQU0sRUFHTixXQUFXLEVBRVgsU0FBUyxFQUNULGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUVMLGdCQUFnQixFQUNoQixjQUFjLEVBQ2QsUUFBUSxFQUNSLGtCQUFrQixFQUNsQixZQUFZLEVBRVosV0FBVyxFQUNYLE1BQU0sR0FDUCxNQUFNLGNBQWMsQ0FBQztBQUN0QixPQUFPLEVBQ0wsa0JBQWtCLEVBR2xCLFlBQVksRUFDWixZQUFZLEVBQ1osV0FBVyxFQUVYLFNBQVMsR0FDVixNQUFNLGFBQWEsQ0FBQztBQUdyQixPQUFPLEVBQUUsZ0JBQWdCLEVBQWUsTUFBTSxxQkFBcUIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsSUFBSSxFQUFjLEVBQUUsRUFBRSxPQUFPLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQ25FLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxZQUFZLEVBQTJDLE1BQU0sa0JBQWtCLENBQUM7QUFDekYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN2QyxPQUFPLEVBQUUsV0FBVyxF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Q0FBMkM7O0lBQzNDLGlDQUFvRDs7SUFDcEQsaURBQTZEOztJQUU3RCw0QkFBdUQ7O0lBRXZELDZCQUF5RDs7SUFDekQsb0NBQStDOztJQUMvQyxzQ0FBNkM7O0lBQzdDLHlDQUFpRDs7SUFDakQseUNBQWlEOztJQUNqRCx3Q0FBMEU7Ozs7O0lBdUJ4RSwwQkFBOEI7Ozs7O0lBQzlCLDZCQUFzQjs7Ozs7SUFDdEIseUJBQXNCOzs7OztJQUN0QixnQ0FBMkI7Ozs7O0lBQzNCLGtDQUFnQzs7Ozs7SUFDaEMsbUNBQWtDOzs7OztJQUNsQywwQkFBa0M7Ozs7O0lBQ2xDLG1DQUFvQzs7Ozs7SUFDcEMsaUNBQWdDOzs7OztJQUNoQyxnQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQgfSBmcm9tICdAYW5ndWxhci9jZGsvc2Nyb2xsaW5nJztcbmltcG9ydCB7IERlY2ltYWxQaXBlLCBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVHJhY2tCeUZ1bmN0aW9uLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBBbGFpbkkxOE5TZXJ2aWNlLFxuICBBTEFJTl9JMThOX1RPS0VOLFxuICBDTkN1cnJlbmN5UGlwZSxcbiAgRGF0ZVBpcGUsXG4gIERlbG9uTG9jYWxlU2VydmljZSxcbiAgRHJhd2VySGVscGVyLFxuICBMb2NhbGVEYXRhLFxuICBNb2RhbEhlbHBlcixcbiAgWU5QaXBlLFxufSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHtcbiAgQWxhaW5Db25maWdTZXJ2aWNlLFxuICBBbGFpblNUQ29uZmlnLFxuICBCb29sZWFuSW5wdXQsXG4gIGRlZXBNZXJnZUtleSxcbiAgSW5wdXRCb29sZWFuLFxuICBJbnB1dE51bWJlcixcbiAgTnVtYmVySW5wdXQsXG4gIHRvQm9vbGVhbixcbn0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IE56UmVzaXplRXZlbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL3Jlc2l6YWJsZSc7XG5pbXBvcnQgeyBOelRhYmxlQ29tcG9uZW50LCBOelRhYmxlRGF0YSB9IGZyb20gJ25nLXpvcnJvLWFudGQvdGFibGUnO1xuaW1wb3J0IHsgZnJvbSwgT2JzZXJ2YWJsZSwgb2YsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTVENvbHVtblNvdXJjZSB9IGZyb20gJy4vc3QtY29sdW1uLXNvdXJjZSc7XG5pbXBvcnQgeyBTVERhdGFTb3VyY2UsIFNURGF0YVNvdXJjZU9wdGlvbnMsIFNURGF0YVNvdXJjZVJlc3VsdCB9IGZyb20gJy4vc3QtZGF0YS1zb3VyY2UnO1xuaW1wb3J0IHsgU1RFeHBvcnQgfSBmcm9tICcuL3N0LWV4cG9ydCc7XG5pbXBvcnQgeyBTVFJvd1NvdXJjZSB9IGZyb20gJy4vc3Qtcm93LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBTVF9ERUZVTEFUX0NPTkZJRyB9IGZyb20gJy4vc3QuY29uZmlnJztcbmltcG9ydCB7XG4gIFNUQ2hhbmdlLFxuICBTVENoYW5nZVR5cGUsXG4gIFNUQ29sdW1uLFxuICBTVENvbHVtbkJ1dHRvbixcbiAgU1RDb2x1bW5GaWx0ZXJNZW51LFxuICBTVENvbHVtblNlbGVjdGlvbixcbiAgU1REYXRhLFxuICBTVEVycm9yLFxuICBTVEV4cG9ydE9wdGlvbnMsXG4gIFNUTG9hZE9wdGlvbnMsXG4gIFNUTXVsdGlTb3J0LFxuICBTVFBhZ2UsXG4gIFNUUmVxLFxuICBTVFJlcyxcbiAgU1RSZXNldENvbHVtbnNPcHRpb24sXG4gIFNUUmVzaXphYmxlLFxuICBTVFJvd0NsYXNzTmFtZSxcbiAgU1RTaW5nbGVTb3J0LFxuICBTVFN0YXRpc3RpY2FsUmVzdWx0cyxcbiAgU1RXaWR0aE1vZGUsXG59IGZyb20gJy4vc3QuaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBfU1RDb2x1bW4gfSBmcm9tICcuL3N0LnR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3QnLFxuICBleHBvcnRBczogJ3N0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0LmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbU1REYXRhU291cmNlLCBTVFJvd1NvdXJjZSwgU1RDb2x1bW5Tb3VyY2UsIFNURXhwb3J0LCBDTkN1cnJlbmN5UGlwZSwgRGF0ZVBpcGUsIFlOUGlwZSwgRGVjaW1hbFBpcGVdLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5zdF0nOiBgdHJ1ZWAsXG4gICAgJ1tjbGFzcy5zdF9fcC1sZWZ0XSc6IGBwYWdlLnBsYWNlbWVudCA9PT0gJ2xlZnQnYCxcbiAgICAnW2NsYXNzLnN0X19wLWNlbnRlcl0nOiBgcGFnZS5wbGFjZW1lbnQgPT09ICdjZW50ZXInYCxcbiAgICAnW2NsYXNzLnN0X193aWR0aC1zdHJpY3RdJzogYHdpZHRoTW9kZS50eXBlID09PSAnc3RyaWN0J2AsXG4gICAgJ1tjbGFzcy5hbnQtdGFibGUtcmVwXSc6IGByZXNwb25zaXZlYCxcbiAgICAnW2NsYXNzLmFudC10YWJsZS1yZXBfX2hpZGUtaGVhZGVyLWZvb3Rlcl0nOiBgcmVzcG9uc2l2ZUhpZGVIZWFkZXJGb290ZXJgLFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIFNUQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfcHM6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfcGk6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfdG90YWw6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbG9hZGluZ0RlbGF5OiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2JvcmRlcmVkOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9leHBhbmRSb3dCeUNsaWNrOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9leHBhbmRBY2NvcmRpb246IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3Jvd0NsaWNrVGltZTogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9yZXNwb25zaXZlOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9yZXNwb25zaXZlSGlkZUhlYWRlckZvb3RlcjogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfdmlydHVhbFNjcm9sbDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfdmlydHVhbEl0ZW1TaXplOiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3ZpcnR1YWxNYXhCdWZmZXJQeDogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV92aXJ0dWFsTWluQnVmZmVyUHg6IE51bWJlcklucHV0O1xuXG4gIHByaXZhdGUgdW5zdWJzY3JpYmUkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSBkYXRhJDogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIHRvdGFsVHBsID0gYGA7XG4gIHByaXZhdGUgY29nOiBBbGFpblNUQ29uZmlnO1xuICBwcml2YXRlIHJvd0NsaWNrQ291bnQgPSAwO1xuICBwcml2YXRlIF9yZXE6IFNUUmVxO1xuICBwcml2YXRlIF9yZXM6IFNUUmVzO1xuICBwcml2YXRlIF9wYWdlOiBTVFBhZ2U7XG4gIHByaXZhdGUgX3dpZHRoTW9kZTogU1RXaWR0aE1vZGU7XG4gIHByaXZhdGUgY3VzdG9tV2lkdGhDb25maWc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgX3dpZHRoQ29uZmlnOiBzdHJpbmdbXSA9IFtdO1xuICBsb2NhbGU6IExvY2FsZURhdGEgPSB7fTtcbiAgX2xvYWRpbmcgPSBmYWxzZTtcbiAgX2RhdGE6IFNURGF0YVtdID0gW107XG4gIF9zdGF0aXN0aWNhbDogU1RTdGF0aXN0aWNhbFJlc3VsdHMgPSB7fTtcbiAgX2lzUGFnaW5hdGlvbiA9IHRydWU7XG4gIF9hbGxDaGVja2VkID0gZmFsc2U7XG4gIF9hbGxDaGVja2VkRGlzYWJsZWQgPSBmYWxzZTtcbiAgX2luZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgX2hlYWRlcnM6IFNUQ29sdW1uW11bXSA9IFtdO1xuICBfY29sdW1uczogX1NUQ29sdW1uW10gPSBbXTtcbiAgQFZpZXdDaGlsZCgndGFibGUnLCB7IHN0YXRpYzogZmFsc2UgfSkgcmVhZG9ubHkgb3JnVGFibGU6IE56VGFibGVDb21wb25lbnQ7XG5cbiAgQElucHV0KClcbiAgZ2V0IHJlcSgpOiBTVFJlcSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcTtcbiAgfVxuICBzZXQgcmVxKHZhbHVlOiBTVFJlcSkge1xuICAgIHRoaXMuX3JlcSA9IGRlZXBNZXJnZUtleSh7fSwgdHJ1ZSwgdGhpcy5jb2cucmVxLCB2YWx1ZSk7XG4gIH1cbiAgLyoqIOi/lOWbnuS9k+mFjee9riAqL1xuICBASW5wdXQoKVxuICBnZXQgcmVzKCk6IFNUUmVzIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzO1xuICB9XG4gIHNldCByZXModmFsdWU6IFNUUmVzKSB7XG4gICAgY29uc3QgaXRlbSA9ICh0aGlzLl9yZXMgPSBkZWVwTWVyZ2VLZXkoe30sIHRydWUsIHRoaXMuY29nLnJlcywgdmFsdWUpKTtcbiAgICBjb25zdCByZU5hbWUgPSBpdGVtLnJlTmFtZSE7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHJlTmFtZS5saXN0KSkgcmVOYW1lLmxpc3QgPSByZU5hbWUubGlzdCEuc3BsaXQoJy4nKTtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkocmVOYW1lLnRvdGFsKSkgcmVOYW1lLnRvdGFsID0gcmVOYW1lLnRvdGFsIS5zcGxpdCgnLicpO1xuICAgIHRoaXMuX3JlcyA9IGl0ZW07XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IHBhZ2UoKTogU1RQYWdlIHtcbiAgICByZXR1cm4gdGhpcy5fcGFnZTtcbiAgfVxuICBzZXQgcGFnZSh2YWx1ZTogU1RQYWdlKSB7XG4gICAgdGhpcy5fcGFnZSA9IHsgLi4udGhpcy5jb2cucGFnZSwgLi4udmFsdWUgfTtcbiAgICB0aGlzLnVwZGF0ZVRvdGFsVHBsKCk7XG4gIH1cbiAgQElucHV0KCkgZGF0YTogc3RyaW5nIHwgU1REYXRhW10gfCBPYnNlcnZhYmxlPFNURGF0YVtdPjtcbiAgQElucHV0KCkgY29sdW1uczogU1RDb2x1bW5bXSA9IFtdO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBwcyA9IDEwO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBwaSA9IDE7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHRvdGFsID0gMDtcbiAgQElucHV0KCkgbG9hZGluZzogYm9vbGVhbiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBsb2FkaW5nRGVsYXkgPSAwO1xuICBASW5wdXQoKSBsb2FkaW5nSW5kaWNhdG9yOiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJvcmRlcmVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNpemU6ICdzbWFsbCcgfCAnbWlkZGxlJyB8ICdkZWZhdWx0JztcbiAgQElucHV0KCkgc2Nyb2xsOiB7IHk/OiBzdHJpbmc7IHg/OiBzdHJpbmcgfTtcbiAgQElucHV0KCkgc2luZ2xlU29ydDogU1RTaW5nbGVTb3J0O1xuICBwcml2YXRlIF9tdWx0aVNvcnQ/OiBTVE11bHRpU29ydDtcbiAgQElucHV0KClcbiAgZ2V0IG11bHRpU29ydCgpOiBOelNhZmVBbnkge1xuICAgIHJldHVybiB0aGlzLl9tdWx0aVNvcnQ7XG4gIH1cbiAgc2V0IG11bHRpU29ydCh2YWx1ZTogTnpTYWZlQW55KSB7XG4gICAgaWYgKCh0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJyAmJiAhdG9Cb29sZWFuKHZhbHVlKSkgfHwgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMCkpIHtcbiAgICAgIHRoaXMuX211bHRpU29ydCA9IHVuZGVmaW5lZDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fbXVsdGlTb3J0ID0ge1xuICAgICAgLi4uKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgPyB2YWx1ZSA6IHt9KSxcbiAgICB9O1xuICB9XG4gIEBJbnB1dCgpIHJvd0NsYXNzTmFtZTogU1RSb3dDbGFzc05hbWU7XG4gIEBJbnB1dCgpXG4gIHNldCB3aWR0aE1vZGUodmFsdWU6IFNUV2lkdGhNb2RlKSB7XG4gICAgdGhpcy5fd2lkdGhNb2RlID0geyAuLi50aGlzLmNvZy53aWR0aE1vZGUsIC4uLnZhbHVlIH07XG4gIH1cbiAgZ2V0IHdpZHRoTW9kZSgpOiBTVFdpZHRoTW9kZSB7XG4gICAgcmV0dXJuIHRoaXMuX3dpZHRoTW9kZTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgd2lkdGhDb25maWcodmFsOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3dpZHRoQ29uZmlnID0gdmFsO1xuICAgIHRoaXMuY3VzdG9tV2lkdGhDb25maWcgPSB2YWwgJiYgdmFsLmxlbmd0aCA+IDA7XG4gIH1cbiAgcHJpdmF0ZSBfcmVzaXphYmxlOiBTVFJlc2l6YWJsZTtcbiAgQElucHV0KClcbiAgc2V0IHJlc2l6YWJsZSh2YWw6IFNUUmVzaXphYmxlIHwgYm9vbGVhbikge1xuICAgIHRoaXMuX3Jlc2l6YWJsZSA9IHR5cGVvZiB2YWwgPT09ICdvYmplY3QnID8gdmFsIDogeyBkaXNhYmxlZDogIXRvQm9vbGVhbih2YWwpIH07XG4gIH1cbiAgQElucHV0KCkgaGVhZGVyOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgZm9vdGVyOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgYm9keUhlYWRlcjogVGVtcGxhdGVSZWY8U1RTdGF0aXN0aWNhbFJlc3VsdHM+O1xuICBASW5wdXQoKSBib2R5OiBUZW1wbGF0ZVJlZjxTVFN0YXRpc3RpY2FsUmVzdWx0cz47XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBleHBhbmRSb3dCeUNsaWNrID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBleHBhbmRBY2NvcmRpb24gPSBmYWxzZTtcbiAgQElucHV0KCkgZXhwYW5kOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDoge307IGNvbHVtbjogU1RDb2x1bW4gfT47XG4gIEBJbnB1dCgpIG5vUmVzdWx0OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgcm93Q2xpY2tUaW1lID0gMjAwO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgcmVzcG9uc2l2ZTogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSByZXNwb25zaXZlSGlkZUhlYWRlckZvb3RlcjogYm9vbGVhbjtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLW91dHB1dC1uYXRpdmVcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGVycm9yID0gbmV3IEV2ZW50RW1pdHRlcjxTVEVycm9yPigpO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tb3V0cHV0LW5hdGl2ZVxuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxTVENoYW5nZT4oKTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHZpcnR1YWxTY3JvbGwgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgdmlydHVhbEl0ZW1TaXplID0gNTQ7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHZpcnR1YWxNYXhCdWZmZXJQeCA9IDIwMDtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgdmlydHVhbE1pbkJ1ZmZlclB4ID0gMTAwO1xuICBASW5wdXQoKSB2aXJ0dWFsRm9yVHJhY2tCeTogVHJhY2tCeUZ1bmN0aW9uPE56VGFibGVEYXRhPiA9IGluZGV4ID0+IGluZGV4O1xuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG51bWJlciBvZiB0aGUgY3VycmVudCBwYWdlXG4gICAqL1xuICBnZXQgY291bnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YS5sZW5ndGg7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBkYXRhIG9mIHRoZSBjdXJyZW50IHBhZ2VcbiAgICovXG4gIGdldCBsaXN0KCk6IFNURGF0YVtdIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IHJvdXRlclN0YXRlKCk6IHsgcGk6IG51bWJlcjsgcHM6IG51bWJlcjsgdG90YWw6IG51bWJlciB9IHtcbiAgICBjb25zdCB7IHBpLCBwcywgdG90YWwgfSA9IHRoaXM7XG4gICAgcmV0dXJuIHsgcGksIHBzLCB0b3RhbCB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChBTEFJTl9JMThOX1RPS0VOKSBpMThuU3J2OiBBbGFpbkkxOE5TZXJ2aWNlLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBleHBvcnRTcnY6IFNURXhwb3J0LFxuICAgIHByaXZhdGUgbW9kYWxIZWxwZXI6IE1vZGFsSGVscGVyLFxuICAgIHByaXZhdGUgZHJhd2VySGVscGVyOiBEcmF3ZXJIZWxwZXIsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IGFueSxcbiAgICBwcml2YXRlIGNvbHVtblNvdXJjZTogU1RDb2x1bW5Tb3VyY2UsXG4gICAgcHJpdmF0ZSBkYXRhU291cmNlOiBTVERhdGFTb3VyY2UsXG4gICAgcHJpdmF0ZSBkZWxvbkkxOG46IERlbG9uTG9jYWxlU2VydmljZSxcbiAgICBjb25maWdTcnY6IEFsYWluQ29uZmlnU2VydmljZSxcbiAgKSB7XG4gICAgdGhpcy5zZXRDb2coY29uZmlnU3J2Lm1lcmdlKCdzdCcsIFNUX0RFRlVMQVRfQ09ORklHKSEpO1xuXG4gICAgdGhpcy5kZWxvbkkxOG4uY2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMubG9jYWxlID0gdGhpcy5kZWxvbkkxOG4uZ2V0RGF0YSgnc3QnKTtcbiAgICAgIGlmICh0aGlzLl9jb2x1bW5zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy51cGRhdGVUb3RhbFRwbCgpO1xuICAgICAgICB0aGlzLmNkKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpMThuU3J2LmNoYW5nZVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCksXG4gICAgICAgIGZpbHRlcigoKSA9PiB0aGlzLl9jb2x1bW5zLmxlbmd0aCA+IDApLFxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLnJlZnJlc2hDb2x1bW5zKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDb2coY29nOiBBbGFpblNUQ29uZmlnKTogdm9pZCB7XG4gICAgY29uc3QgY29weU11bHRpU29ydCA9IHsgLi4uY29nLm11bHRpU29ydCB9O1xuICAgIC8vIEJlY2F1c2UgbXVsdGlTb3J0Lmdsb2JhbCB3aWxsIGFmZmVjdCB0aGUgcmVzdWx0LCBpdCBzaG91bGQgYmUgcmVtb3ZlZCBmaXJzdCwgYW5kIG11bHRpU29ydCB3aWxsIGJlIG9wZXJhdGVkIGFnYWluIGFmdGVyIHByb2Nlc3NpbmcuXG4gICAgZGVsZXRlIGNvZy5tdWx0aVNvcnQ7XG4gICAgdGhpcy5jb2cgPSBjb2c7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb2cpO1xuXG4gICAgaWYgKGNvcHlNdWx0aVNvcnQuZ2xvYmFsICE9PSBmYWxzZSkge1xuICAgICAgdGhpcy5tdWx0aVNvcnQgPSBjb3B5TXVsdGlTb3J0O1xuICAgIH1cbiAgICB0aGlzLmNvbHVtblNvdXJjZS5zZXRDb2coY29nKTtcbiAgfVxuXG4gIGNkKCk6IHRoaXMge1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlbmRlclRvdGFsKHRvdGFsOiBzdHJpbmcsIHJhbmdlOiBzdHJpbmdbXSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMudG90YWxUcGxcbiAgICAgID8gdGhpcy50b3RhbFRwbC5yZXBsYWNlKCd7e3RvdGFsfX0nLCB0b3RhbCkucmVwbGFjZSgne3tyYW5nZVswXX19JywgcmFuZ2VbMF0pLnJlcGxhY2UoJ3t7cmFuZ2VbMV19fScsIHJhbmdlWzFdKVxuICAgICAgOiAnJztcbiAgfVxuXG4gIHByaXZhdGUgY2hhbmdlRW1pdCh0eXBlOiBTVENoYW5nZVR5cGUsIGRhdGE/OiBhbnkpOiB2b2lkIHtcbiAgICBjb25zdCByZXM6IFNUQ2hhbmdlID0ge1xuICAgICAgdHlwZSxcbiAgICAgIHBpOiB0aGlzLnBpLFxuICAgICAgcHM6IHRoaXMucHMsXG4gICAgICB0b3RhbDogdGhpcy50b3RhbCxcbiAgICB9O1xuICAgIGlmIChkYXRhICE9IG51bGwpIHtcbiAgICAgIHJlc1t0eXBlXSA9IGRhdGE7XG4gICAgfVxuICAgIHRoaXMuY2hhbmdlLmVtaXQocmVzKTtcbiAgfVxuXG4gIC8vICNyZWdpb24gZGF0YVxuXG4gIC8qKlxuICAgKiDojrflj5bov4fmu6TlkI7miYDmnInmlbDmja5cbiAgICogLSDmnKzlnLDmlbDmja7vvJrljIXlkKvmjpLluo/jgIHov4fmu6TlkI7kuI3liIbpobXmlbDmja5cbiAgICogLSDov5znqIvmlbDmja7vvJrkuI3kvKDpgJIgYHBpYOOAgWBwc2Ag5Lik5Liq5Y+C5pWwXG4gICAqL1xuICBnZXQgZmlsdGVyZWREYXRhKCk6IFByb21pc2U8U1REYXRhW10+IHtcbiAgICByZXR1cm4gdGhpcy5sb2FkRGF0YSh7IHBhZ2luYXRvcjogZmFsc2UgfSBhcyBhbnkpLnRoZW4ocmVzID0+IHJlcy5saXN0KTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlVG90YWxUcGwoKTogdm9pZCB7XG4gICAgY29uc3QgeyB0b3RhbCB9ID0gdGhpcy5wYWdlO1xuICAgIGlmICh0eXBlb2YgdG90YWwgPT09ICdzdHJpbmcnICYmIHRvdGFsLmxlbmd0aCkge1xuICAgICAgdGhpcy50b3RhbFRwbCA9IHRvdGFsO1xuICAgIH0gZWxzZSBpZiAodG9Cb29sZWFuKHRvdGFsKSkge1xuICAgICAgdGhpcy50b3RhbFRwbCA9IHRoaXMubG9jYWxlLnRvdGFsO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRvdGFsVHBsID0gJyc7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRMb2FkaW5nKHZhbDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICh0aGlzLmxvYWRpbmcgPT0gbnVsbCkge1xuICAgICAgdGhpcy5fbG9hZGluZyA9IHZhbDtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGxvYWREYXRhKG9wdGlvbnM/OiBTVERhdGFTb3VyY2VPcHRpb25zKTogUHJvbWlzZTxTVERhdGFTb3VyY2VSZXN1bHQ+IHtcbiAgICBjb25zdCB7IHBpLCBwcywgZGF0YSwgcmVxLCByZXMsIHBhZ2UsIHRvdGFsLCBzaW5nbGVTb3J0LCBtdWx0aVNvcnQsIHJvd0NsYXNzTmFtZSB9ID0gdGhpcztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmVQcm9taXNlLCByZWplY3RQcm9taXNlKSA9PiB7XG4gICAgICBpZiAodGhpcy5kYXRhJCkge1xuICAgICAgICB0aGlzLmRhdGEkLnVuc3Vic2NyaWJlKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZGF0YSQgPSB0aGlzLmRhdGFTb3VyY2VcbiAgICAgICAgLnByb2Nlc3Moe1xuICAgICAgICAgIHBpLFxuICAgICAgICAgIHBzLFxuICAgICAgICAgIHRvdGFsLFxuICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgcmVxLFxuICAgICAgICAgIHJlcyxcbiAgICAgICAgICBwYWdlLFxuICAgICAgICAgIGNvbHVtbnM6IHRoaXMuX2NvbHVtbnMsXG4gICAgICAgICAgc2luZ2xlU29ydCxcbiAgICAgICAgICBtdWx0aVNvcnQsXG4gICAgICAgICAgcm93Q2xhc3NOYW1lLFxuICAgICAgICAgIHBhZ2luYXRvcjogdHJ1ZSxcbiAgICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICB9KVxuICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKVxuICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgIHJlc3VsdCA9PiByZXNvbHZlUHJvbWlzZShyZXN1bHQpLFxuICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybignc3QubG9hZERhdGUnLCBlcnJvcik7XG4gICAgICAgICAgICByZWplY3RQcm9taXNlKGVycm9yKTtcbiAgICAgICAgICB9LFxuICAgICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBsb2FkUGFnZURhdGEoKTogUHJvbWlzZTx0aGlzPiB7XG4gICAgdGhpcy5zZXRMb2FkaW5nKHRydWUpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmxvYWREYXRhKCk7XG4gICAgICB0aGlzLnNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgaWYgKHR5cGVvZiByZXN1bHQucGkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMucGkgPSByZXN1bHQucGk7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHJlc3VsdC5wcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5wcyA9IHJlc3VsdC5wcztcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgcmVzdWx0LnRvdGFsICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLnRvdGFsID0gcmVzdWx0LnRvdGFsO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiByZXN1bHQucGFnZVNob3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMuX2lzUGFnaW5hdGlvbiA9IHJlc3VsdC5wYWdlU2hvdztcbiAgICAgIH1cbiAgICAgIHRoaXMuX2RhdGEgPSByZXN1bHQubGlzdCBhcyBTVERhdGFbXTtcbiAgICAgIHRoaXMuX3N0YXRpc3RpY2FsID0gcmVzdWx0LnN0YXRpc3RpY2FsIGFzIFNUU3RhdGlzdGljYWxSZXN1bHRzO1xuICAgICAgdGhpcy5jaGFuZ2VFbWl0KCdsb2FkZWQnLCByZXN1bHQubGlzdCk7XG4gICAgICAvLyBTaG91bGQgYmUgcmUtcmVuZGVyIGluIG5leHQgdGlrZSB3aGVuIHVzaW5nIHZpcnR1YWwgc2Nyb2xsXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbmctYWxhaW4vbmctYWxhaW4vaXNzdWVzLzE4MzZcbiAgICAgIGlmICh0aGlzLmNka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydCkge1xuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRoaXMuY2RrVmlydHVhbFNjcm9sbFZpZXdwb3J0LmNoZWNrVmlld3BvcnRTaXplKCkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuX3JlZkNoZWNrKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMuc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICBpZiAoIXRoaXMudW5zdWJzY3JpYmUkLmlzU3RvcHBlZCkge1xuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIHRoaXMuZXJyb3IuZW1pdCh7IHR5cGU6ICdyZXEnLCBlcnJvciB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfVxuXG4gIC8qKiDmuIXnqbrmiYDmnInmlbDmja4gKi9cbiAgY2xlYXIoY2xlYW5TdGF0dXM6IGJvb2xlYW4gPSB0cnVlKTogdGhpcyB7XG4gICAgaWYgKGNsZWFuU3RhdHVzKSB7XG4gICAgICB0aGlzLmNsZWFyU3RhdHVzKCk7XG4gICAgfVxuICAgIHRoaXMuX2RhdGEgPSBbXTtcbiAgICByZXR1cm4gdGhpcy5jZCgpO1xuICB9XG5cbiAgLyoqIOa4heepuuaJgOacieeKtuaAgSAqL1xuICBjbGVhclN0YXR1cygpOiB0aGlzIHtcbiAgICByZXR1cm4gdGhpcy5jbGVhckNoZWNrKCkuY2xlYXJSYWRpbygpLmNsZWFyRmlsdGVyKCkuY2xlYXJTb3J0KCk7XG4gIH1cblxuICAvKipcbiAgICog5qC55o2u6aG156CB6YeN5paw5Yqg6L295pWw5o2uXG4gICAqXG4gICAqIEBwYXJhbSBwaSDmjIflrprlvZPliY3pobXnoIHvvIzpu5jorqTvvJpgMWBcbiAgICogQHBhcmFtIGV4dHJhUGFyYW1zIOmHjeaWsOaMh+WumiBgZXh0cmFQYXJhbXNgIOWAvFxuICAgKiBAcGFyYW0gb3B0aW9ucyDpgInpoblcbiAgICovXG4gIGxvYWQocGk6IG51bWJlciA9IDEsIGV4dHJhUGFyYW1zPzoge30sIG9wdGlvbnM/OiBTVExvYWRPcHRpb25zKTogdGhpcyB7XG4gICAgaWYgKHBpICE9PSAtMSkgdGhpcy5waSA9IHBpO1xuICAgIGlmICh0eXBlb2YgZXh0cmFQYXJhbXMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlcS5wYXJhbXMgPSBvcHRpb25zICYmIG9wdGlvbnMubWVyZ2UgPyB7IC4uLnRoaXMucmVxLnBhcmFtcywgLi4uZXh0cmFQYXJhbXMgfSA6IGV4dHJhUGFyYW1zO1xuICAgIH1cbiAgICB0aGlzLl9jaGFuZ2UoJ3BpJywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICog6YeN5paw5Yi35paw5b2T5YmN6aG1XG4gICAqIEBwYXJhbSBleHRyYVBhcmFtcyDph43mlrDmjIflrpogYGV4dHJhUGFyYW1zYCDlgLxcbiAgICovXG4gIHJlbG9hZChleHRyYVBhcmFtcz86IHt9LCBvcHRpb25zPzogU1RMb2FkT3B0aW9ucyk6IHRoaXMge1xuICAgIHJldHVybiB0aGlzLmxvYWQoLTEsIGV4dHJhUGFyYW1zLCBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDph43nva7kuJTph43mlrDorr7nva4gYHBpYCDkuLogYDFg77yM5YyF5ZCr5Lul5LiL5YC877yaXG4gICAqIC0gYGNoZWNrYCDmlbDmja5cbiAgICogLSBgcmFkaW9gIOaVsOaNrlxuICAgKiAtIGBzb3J0YCDmlbDmja5cbiAgICogLSBgZmlsZXRlcmAg5pWw5o2uXG4gICAqXG4gICAqIEBwYXJhbSBleHRyYVBhcmFtcyDph43mlrDmjIflrpogYGV4dHJhUGFyYW1zYCDlgLxcbiAgICovXG4gIHJlc2V0KGV4dHJhUGFyYW1zPzoge30sIG9wdGlvbnM/OiBTVExvYWRPcHRpb25zKTogdGhpcyB7XG4gICAgdGhpcy5jbGVhclN0YXR1cygpLmxvYWQoMSwgZXh0cmFQYXJhbXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJpdmF0ZSBfdG9Ub3AoZW5mb3JjZT86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoIShlbmZvcmNlID09IG51bGwgPyB0aGlzLnBhZ2UudG9Ub3AgOiBlbmZvcmNlKSkgcmV0dXJuO1xuICAgIGNvbnN0IGVsID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgIGlmICh0aGlzLnNjcm9sbCkge1xuICAgICAgaWYgKHRoaXMuY2RrVmlydHVhbFNjcm9sbFZpZXdwb3J0KSB7XG4gICAgICAgIHRoaXMuY2RrVmlydHVhbFNjcm9sbFZpZXdwb3J0LnNjcm9sbFRvKHtcbiAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbC5xdWVyeVNlbGVjdG9yKCcuYW50LXRhYmxlLWJvZHknKSEuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgLy8gZml4IGhlYWRlciBoZWlnaHRcbiAgICB0aGlzLmRvYy5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIC09IHRoaXMucGFnZS50b1RvcE9mZnNldCE7XG4gIH1cblxuICBfY2hhbmdlKHR5cGU6ICdwaScgfCAncHMnLCBvcHRpb25zPzogU1RMb2FkT3B0aW9ucyk6IHZvaWQge1xuICAgIGlmICh0eXBlID09PSAncGknIHx8ICh0eXBlID09PSAncHMnICYmIHRoaXMucGkgPD0gTWF0aC5jZWlsKHRoaXMudG90YWwgLyB0aGlzLnBzKSkpIHtcbiAgICAgIHRoaXMubG9hZFBhZ2VEYXRhKCkudGhlbigoKSA9PiB0aGlzLl90b1RvcChvcHRpb25zPy50b1RvcCkpO1xuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlRW1pdCh0eXBlKTtcbiAgfVxuXG4gIF9jbGljayhlOiBFdmVudCwgaXRlbTogU1REYXRhLCBjb2w6IFNUQ29sdW1uKTogYm9vbGVhbiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3QgcmVzID0gY29sLmNsaWNrIShpdGVtLCB0aGlzKTtcbiAgICBpZiAodHlwZW9mIHJlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwocmVzLCB7IHN0YXRlOiB0aGlzLnJvdXRlclN0YXRlIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcHJpdmF0ZSBjbG9zZU90aGVyRXhwYW5kKGl0ZW06IFNURGF0YSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmV4cGFuZEFjY29yZGlvbiA9PT0gZmFsc2UpIHJldHVybjtcbiAgICB0aGlzLl9kYXRhLmZpbHRlcihpID0+IGkgIT09IGl0ZW0pLmZvckVhY2goaSA9PiAoaS5leHBhbmQgPSBmYWxzZSkpO1xuICB9XG4gIF9yb3dDbGljayhlOiBFdmVudCwgaXRlbTogU1REYXRhLCBpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKChlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkubm9kZU5hbWUgPT09ICdJTlBVVCcpIHJldHVybjtcbiAgICBjb25zdCB7IGV4cGFuZCwgZXhwYW5kUm93QnlDbGljaywgcm93Q2xpY2tUaW1lIH0gPSB0aGlzO1xuICAgIGlmICghIWV4cGFuZCAmJiBpdGVtLnNob3dFeHBhbmQgIT09IGZhbHNlICYmIGV4cGFuZFJvd0J5Q2xpY2spIHtcbiAgICAgIGl0ZW0uZXhwYW5kID0gIWl0ZW0uZXhwYW5kO1xuICAgICAgdGhpcy5jbG9zZU90aGVyRXhwYW5kKGl0ZW0pO1xuICAgICAgdGhpcy5jaGFuZ2VFbWl0KCdleHBhbmQnLCBpdGVtKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgKyt0aGlzLnJvd0NsaWNrQ291bnQ7XG4gICAgaWYgKHRoaXMucm93Q2xpY2tDb3VudCAhPT0gMSkgcmV0dXJuO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgZGF0YSA9IHsgZSwgaXRlbSwgaW5kZXggfTtcbiAgICAgIGlmICh0aGlzLnJvd0NsaWNrQ291bnQgPT09IDEpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VFbWl0KCdjbGljaycsIGRhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VFbWl0KCdkYmxDbGljaycsIGRhdGEpO1xuICAgICAgfVxuICAgICAgdGhpcy5yb3dDbGlja0NvdW50ID0gMDtcbiAgICB9LCByb3dDbGlja1RpbWUpO1xuICB9XG5cbiAgX2V4cGFuZENoYW5nZShpdGVtOiBTVERhdGEsIGV4cGFuZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICh0aGlzLmV4cGFuZFJvd0J5Q2xpY2spIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaXRlbS5leHBhbmQgPSBleHBhbmQ7XG4gICAgdGhpcy5jbG9zZU90aGVyRXhwYW5kKGl0ZW0pO1xuICAgIHRoaXMuY2hhbmdlRW1pdCgnZXhwYW5kJywgaXRlbSk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGEgcm93IGluIHRoZSB0YWJsZSwgbGlrZSB0aGlzOlxuICAgKlxuICAgKiBgYGBcbiAgICogdGhpcy5zdC5yZW1vdmVSb3coMClcbiAgICogdGhpcy5zdC5yZW1vdmVSb3coc3REYXRhSXRlbSlcbiAgICogYGBgXG4gICAqL1xuICByZW1vdmVSb3coZGF0YTogU1REYXRhIHwgU1REYXRhW10gfCBudW1iZXIpOiB0aGlzIHtcbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdudW1iZXInKSB7XG4gICAgICB0aGlzLl9kYXRhLnNwbGljZShkYXRhLCAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgIGRhdGEgPSBbZGF0YV07XG4gICAgICB9XG5cbiAgICAgIChkYXRhIGFzIFNURGF0YVtdKVxuICAgICAgICAubWFwKGl0ZW0gPT4gdGhpcy5fZGF0YS5pbmRleE9mKGl0ZW0pKVxuICAgICAgICAuZmlsdGVyKHBvcyA9PiBwb3MgIT09IC0xKVxuICAgICAgICAuZm9yRWFjaChwb3MgPT4gdGhpcy5fZGF0YS5zcGxpY2UocG9zLCAxKSk7XG4gICAgfVxuICAgIC8vIHJlY2FsY3VsYXRlIG5vXG4gICAgdGhpcy5fY29sdW1uc1xuICAgICAgLmZpbHRlcih3ID0+IHcudHlwZSA9PT0gJ25vJylcbiAgICAgIC5mb3JFYWNoKGMgPT4gdGhpcy5fZGF0YS5mb3JFYWNoKChpLCBpZHgpID0+IChpLl92YWx1ZXNbYy5fX3BvaW50IV0gPSB7IF90ZXh0OiB0aGlzLmRhdGFTb3VyY2UuZ2V0Tm9JbmRleChpLCBjLCBpZHgpLCBvcmc6IGlkeCB9KSkpO1xuXG4gICAgcmV0dXJuIHRoaXMuY2QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSByb3cgdmFsdWUgZm9yIHRoZSBgaW5kZXhgIGluIHRoZSB0YWJsZSwgbGlrZSB0aGlzOlxuICAgKlxuICAgKiAtIGBvcHRpbm9zLnJlZnJlc2hTY2hlbWFgIFdoZXRoZXIgdG8gcmVmcmVzaCBvZiBzdCBzY2hlbWFzXG4gICAqIC0gYG9wdGlub3MuZW1pdFJlbG9hZGAgV2hldGhlciB0byB0cmlnZ2VyIGEgcmVsb2FkIGh0dHAgcmVxdWVzdCB3aGVuIGRhdGEgaXMgdXJsXG4gICAqXG4gICAqIGBgYFxuICAgKiB0aGlzLnN0LnNldFJvdygwLCB7IHByaWNlOiAxMDAgfSlcbiAgICogdGhpcy5zdC5zZXRSb3coMCwgeyBwcmljZTogMTAwLCBuYW1lOiAnYXNkZicgfSlcbiAgICogYGBgXG4gICAqL1xuICBzZXRSb3coaW5kZXg6IG51bWJlciwgaXRlbTogU1REYXRhLCBvcHRpb25zPzogeyByZWZyZXNoU2NoZW1hPzogYm9vbGVhbjsgZW1pdFJlbG9hZD86IGJvb2xlYW4gfSk6IHRoaXMge1xuICAgIG9wdGlvbnMgPSB7IHJlZnJlc2hTY2hlbWE6IGZhbHNlLCBlbWl0UmVsb2FkOiBmYWxzZSwgLi4ub3B0aW9ucyB9O1xuICAgIHRoaXMuX2RhdGFbaW5kZXhdID0gZGVlcE1lcmdlS2V5KHRoaXMuX2RhdGFbaW5kZXhdLCBmYWxzZSwgaXRlbSk7XG4gICAgdGhpcy5vcHRpbWl6ZURhdGEoKTtcbiAgICBpZiAob3B0aW9ucy5yZWZyZXNoU2NoZW1hKSB7XG4gICAgICB0aGlzLnJlc2V0Q29sdW1ucyh7IGVtaXRSZWxvYWQ6IG9wdGlvbnMuZW1pdFJlbG9hZCB9KTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiBzb3J0XG5cbiAgc29ydChjb2w6IF9TVENvbHVtbiwgaWR4OiBudW1iZXIsIHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5tdWx0aVNvcnQpIHtcbiAgICAgIGNvbC5fc29ydCEuZGVmYXVsdCA9IHZhbHVlO1xuICAgICAgY29sLl9zb3J0IS50aWNrID0gdGhpcy5kYXRhU291cmNlLm5leHRTb3J0VGljaztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY29sdW1ucy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4gKGl0ZW0uX3NvcnQhLmRlZmF1bHQgPSBpbmRleCA9PT0gaWR4ID8gdmFsdWUgOiBudWxsKSk7XG4gICAgfVxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB0aGlzLmxvYWRQYWdlRGF0YSgpO1xuICAgIGNvbnN0IHJlcyA9IHtcbiAgICAgIHZhbHVlLFxuICAgICAgbWFwOiB0aGlzLmRhdGFTb3VyY2UuZ2V0UmVxU29ydE1hcCh0aGlzLnNpbmdsZVNvcnQsIHRoaXMubXVsdGlTb3J0LCB0aGlzLl9jb2x1bW5zKSxcbiAgICAgIGNvbHVtbjogY29sLFxuICAgIH07XG4gICAgdGhpcy5jaGFuZ2VFbWl0KCdzb3J0JywgcmVzKTtcbiAgfVxuXG4gIGNsZWFyU29ydCgpOiB0aGlzIHtcbiAgICB0aGlzLl9jb2x1bW5zLmZvckVhY2goaXRlbSA9PiAoaXRlbS5fc29ydCEuZGVmYXVsdCA9IG51bGwpKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIGZpbHRlclxuXG4gIHByaXZhdGUgaGFuZGxlRmlsdGVyKGNvbDogU1RDb2x1bW4pOiB2b2lkIHtcbiAgICAvLyDov4fmu6TooajnpLrkuIDnp43mlbDmja7nmoTlj5jljJblupTph43nva7pobXnoIHkuLogYDFgXG4gICAgdGhpcy5waSA9IDE7XG4gICAgdGhpcy5jb2x1bW5Tb3VyY2UudXBkYXRlRGVmYXVsdChjb2wuZmlsdGVyISk7XG4gICAgdGhpcy5sb2FkUGFnZURhdGEoKTtcbiAgICB0aGlzLmNoYW5nZUVtaXQoJ2ZpbHRlcicsIGNvbCk7XG4gIH1cblxuICBfZmlsdGVyQ29uZmlybShjb2w6IF9TVENvbHVtbik6IHZvaWQge1xuICAgIHRoaXMuaGFuZGxlRmlsdGVyKGNvbCk7XG4gIH1cblxuICBfZmlsdGVyUmFkaW8oY29sOiBfU1RDb2x1bW4sIGl0ZW06IFNUQ29sdW1uRmlsdGVyTWVudSwgY2hlY2tlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGNvbC5maWx0ZXIhLm1lbnVzIS5mb3JFYWNoKGkgPT4gKGkuY2hlY2tlZCA9IGZhbHNlKSk7XG4gICAgaXRlbS5jaGVja2VkID0gY2hlY2tlZDtcbiAgfVxuXG4gIF9maWx0ZXJDbGVhcihjb2w6IF9TVENvbHVtbik6IHZvaWQge1xuICAgIHRoaXMuY29sdW1uU291cmNlLmNsZWFuRmlsdGVyKGNvbCk7XG4gICAgdGhpcy5oYW5kbGVGaWx0ZXIoY29sKTtcbiAgfVxuXG4gIGNsZWFyRmlsdGVyKCk6IHRoaXMge1xuICAgIHRoaXMuX2NvbHVtbnMuZmlsdGVyKHcgPT4gdy5maWx0ZXIgJiYgdy5maWx0ZXIuZGVmYXVsdCA9PT0gdHJ1ZSkuZm9yRWFjaChjb2wgPT4gdGhpcy5jb2x1bW5Tb3VyY2UuY2xlYW5GaWx0ZXIoY29sKSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBfZmlsdGVyQ2xpY2soJGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIGNoZWNrYm94XG5cbiAgLyoqIOa4hemZpOaJgOaciSBgY2hlY2tib3hgICovXG4gIGNsZWFyQ2hlY2soKTogdGhpcyB7XG4gICAgcmV0dXJuIHRoaXMuX2NoZWNrQWxsKGZhbHNlKTtcbiAgfVxuXG4gIHByaXZhdGUgX3JlZkNoZWNrKCk6IHRoaXMge1xuICAgIGNvbnN0IHZhbGlkRGF0YSA9IHRoaXMuX2RhdGEuZmlsdGVyKHcgPT4gIXcuZGlzYWJsZWQpO1xuICAgIGNvbnN0IGNoZWNrZWRMaXN0ID0gdmFsaWREYXRhLmZpbHRlcih3ID0+IHcuY2hlY2tlZCA9PT0gdHJ1ZSk7XG4gICAgdGhpcy5fYWxsQ2hlY2tlZCA9IGNoZWNrZWRMaXN0Lmxlbmd0aCA+IDAgJiYgY2hlY2tlZExpc3QubGVuZ3RoID09PSB2YWxpZERhdGEubGVuZ3RoO1xuICAgIGNvbnN0IGFsbFVuQ2hlY2tlZCA9IHZhbGlkRGF0YS5ldmVyeSh2YWx1ZSA9PiAhdmFsdWUuY2hlY2tlZCk7XG4gICAgdGhpcy5faW5kZXRlcm1pbmF0ZSA9ICF0aGlzLl9hbGxDaGVja2VkICYmICFhbGxVbkNoZWNrZWQ7XG4gICAgdGhpcy5fYWxsQ2hlY2tlZERpc2FibGVkID0gdGhpcy5fZGF0YS5sZW5ndGggPT09IHRoaXMuX2RhdGEuZmlsdGVyKHcgPT4gdy5kaXNhYmxlZCkubGVuZ3RoO1xuICAgIHJldHVybiB0aGlzLmNkKCk7XG4gIH1cblxuICBfY2hlY2tBbGwoY2hlY2tlZD86IGJvb2xlYW4pOiB0aGlzIHtcbiAgICBjaGVja2VkID0gdHlwZW9mIGNoZWNrZWQgPT09ICd1bmRlZmluZWQnID8gdGhpcy5fYWxsQ2hlY2tlZCA6IGNoZWNrZWQ7XG4gICAgdGhpcy5fZGF0YS5maWx0ZXIodyA9PiAhdy5kaXNhYmxlZCkuZm9yRWFjaChpID0+IChpLmNoZWNrZWQgPSBjaGVja2VkKSk7XG4gICAgcmV0dXJuIHRoaXMuX3JlZkNoZWNrKCkuX2NoZWNrTm90aWZ5KCk7XG4gIH1cblxuICBfY2hlY2tTZWxlY3Rpb24oaTogU1REYXRhLCB2YWx1ZTogYm9vbGVhbik6IHRoaXMge1xuICAgIGkuY2hlY2tlZCA9IHZhbHVlO1xuICAgIHJldHVybiB0aGlzLl9yZWZDaGVjaygpLl9jaGVja05vdGlmeSgpO1xuICB9XG5cbiAgX3Jvd1NlbGVjdGlvbihyb3c6IFNUQ29sdW1uU2VsZWN0aW9uKTogdGhpcyB7XG4gICAgcm93LnNlbGVjdCh0aGlzLl9kYXRhKTtcbiAgICByZXR1cm4gdGhpcy5fcmVmQ2hlY2soKS5fY2hlY2tOb3RpZnkoKTtcbiAgfVxuXG4gIF9jaGVja05vdGlmeSgpOiB0aGlzIHtcbiAgICBjb25zdCByZXMgPSB0aGlzLl9kYXRhLmZpbHRlcih3ID0+ICF3LmRpc2FibGVkICYmIHcuY2hlY2tlZCA9PT0gdHJ1ZSk7XG4gICAgdGhpcy5jaGFuZ2VFbWl0KCdjaGVja2JveCcsIHJlcyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiByYWRpb1xuXG4gIC8qKiDmuIXpmaTmiYDmnIkgYHJhZGlvYCAqL1xuICBjbGVhclJhZGlvKCk6IHRoaXMge1xuICAgIHRoaXMuX2RhdGEuZmlsdGVyKHcgPT4gdy5jaGVja2VkKS5mb3JFYWNoKGl0ZW0gPT4gKGl0ZW0uY2hlY2tlZCA9IGZhbHNlKSk7XG4gICAgdGhpcy5jaGFuZ2VFbWl0KCdyYWRpbycsIG51bGwpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgX3JlZlJhZGlvKGNoZWNrZWQ6IGJvb2xlYW4sIGl0ZW06IFNURGF0YSk6IHRoaXMge1xuICAgIC8vIGlmIChpdGVtLmRpc2FibGVkID09PSB0cnVlKSByZXR1cm47XG4gICAgdGhpcy5fZGF0YS5maWx0ZXIodyA9PiAhdy5kaXNhYmxlZCkuZm9yRWFjaChpID0+IChpLmNoZWNrZWQgPSBmYWxzZSkpO1xuICAgIGl0ZW0uY2hlY2tlZCA9IGNoZWNrZWQ7XG4gICAgdGhpcy5jaGFuZ2VFbWl0KCdyYWRpbycsIGl0ZW0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gYnV0dG9uc1xuXG4gIF9idG5DbGljayhyZWNvcmQ6IFNURGF0YSwgYnRuOiBTVENvbHVtbkJ1dHRvbiwgZT86IEV2ZW50KTogdm9pZCB7XG4gICAgLy8gc2hvdWxkIGJlIHN0b3AgcHJvcGFnYXRpb24gd2hlbiBleHBhbmRSb3dCeUNsaWNrIGlzIHRydWVcbiAgICBpZiAoZSAmJiB0aGlzLmV4cGFuZFJvd0J5Q2xpY2sgPT09IHRydWUpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICAgIGlmIChidG4udHlwZSA9PT0gJ21vZGFsJyB8fCBidG4udHlwZSA9PT0gJ3N0YXRpYycpIHtcbiAgICAgIGNvbnN0IHsgbW9kYWwgfSA9IGJ0bjtcbiAgICAgIGNvbnN0IG9iaiA9IHsgW21vZGFsIS5wYXJhbXNOYW1lIV06IHJlY29yZCB9O1xuICAgICAgKHRoaXMubW9kYWxIZWxwZXJbYnRuLnR5cGUgPT09ICdtb2RhbCcgPyAnY3JlYXRlJyA6ICdjcmVhdGVTdGF0aWMnXSBhcyBhbnkpKFxuICAgICAgICBtb2RhbCEuY29tcG9uZW50LFxuICAgICAgICB7IC4uLm9iaiwgLi4uKG1vZGFsIS5wYXJhbXMgJiYgbW9kYWwhLnBhcmFtcyEocmVjb3JkKSkgfSxcbiAgICAgICAgZGVlcE1lcmdlS2V5KHt9LCB0cnVlLCB0aGlzLmNvZy5tb2RhbCwgbW9kYWwpLFxuICAgICAgKVxuICAgICAgICAucGlwZShmaWx0ZXIodyA9PiB0eXBlb2YgdyAhPT0gJ3VuZGVmaW5lZCcpKVxuICAgICAgICAuc3Vic2NyaWJlKChyZXM6IE56U2FmZUFueSkgPT4gdGhpcy5idG5DYWxsYmFjayhyZWNvcmQsIGJ0biwgcmVzKSk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChidG4udHlwZSA9PT0gJ2RyYXdlcicpIHtcbiAgICAgIGNvbnN0IHsgZHJhd2VyIH0gPSBidG47XG4gICAgICBjb25zdCBvYmogPSB7IFtkcmF3ZXIhLnBhcmFtc05hbWUhXTogcmVjb3JkIH07XG4gICAgICB0aGlzLmRyYXdlckhlbHBlclxuICAgICAgICAuY3JlYXRlKFxuICAgICAgICAgIGRyYXdlciEudGl0bGUhLFxuICAgICAgICAgIGRyYXdlciEuY29tcG9uZW50LFxuICAgICAgICAgIHsgLi4ub2JqLCAuLi4oZHJhd2VyIS5wYXJhbXMgJiYgZHJhd2VyIS5wYXJhbXMhKHJlY29yZCkpIH0sXG4gICAgICAgICAgZGVlcE1lcmdlS2V5KHt9LCB0cnVlLCB0aGlzLmNvZy5kcmF3ZXIsIGRyYXdlciksXG4gICAgICAgIClcbiAgICAgICAgLnBpcGUoZmlsdGVyKHcgPT4gdHlwZW9mIHcgIT09ICd1bmRlZmluZWQnKSlcbiAgICAgICAgLnN1YnNjcmliZShyZXMgPT4gdGhpcy5idG5DYWxsYmFjayhyZWNvcmQsIGJ0biwgcmVzKSk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChidG4udHlwZSA9PT0gJ2xpbmsnKSB7XG4gICAgICBjb25zdCBjbGlja1JlcyA9IHRoaXMuYnRuQ2FsbGJhY2socmVjb3JkLCBidG4pO1xuICAgICAgaWYgKHR5cGVvZiBjbGlja1JlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChjbGlja1JlcywgeyBzdGF0ZTogdGhpcy5yb3V0ZXJTdGF0ZSB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5idG5DYWxsYmFjayhyZWNvcmQsIGJ0bik7XG4gIH1cblxuICBwcml2YXRlIGJ0bkNhbGxiYWNrKHJlY29yZDogU1REYXRhLCBidG46IFNUQ29sdW1uQnV0dG9uLCBtb2RhbD86IGFueSk6IGFueSB7XG4gICAgaWYgKCFidG4uY2xpY2spIHJldHVybjtcbiAgICBpZiAodHlwZW9mIGJ0bi5jbGljayA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHN3aXRjaCAoYnRuLmNsaWNrKSB7XG4gICAgICAgIGNhc2UgJ2xvYWQnOlxuICAgICAgICAgIHRoaXMubG9hZCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdyZWxvYWQnOlxuICAgICAgICAgIHRoaXMucmVsb2FkKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBidG4uY2xpY2socmVjb3JkLCBtb2RhbCwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgX2J0blRleHQocmVjb3JkOiBTVERhdGEsIGJ0bjogU1RDb2x1bW5CdXR0b24pOiBzdHJpbmcge1xuICAgIHJldHVybiB0eXBlb2YgYnRuLnRleHQgPT09ICdmdW5jdGlvbicgPyBidG4udGV4dChyZWNvcmQsIGJ0bikgOiBidG4udGV4dCB8fCAnJztcbiAgfVxuXG4gIF92YWxpZEJ0bnMoYnRuczogU1RDb2x1bW5CdXR0b25bXSwgaXRlbTogU1REYXRhLCBjb2w6IFNUQ29sdW1uKTogU1RDb2x1bW5CdXR0b25bXSB7XG4gICAgcmV0dXJuIGJ0bnMuZmlsdGVyKGJ0biA9PiB7XG4gICAgICBjb25zdCByZXN1bHQgPSBidG4uaWlmIShpdGVtLCBidG4sIGNvbCk7XG4gICAgICBjb25zdCBpc1JlbmRlckRpc2FibGVkID0gYnRuLmlpZkJlaGF2aW9yID09PSAnZGlzYWJsZWQnO1xuICAgICAgYnRuLl9yZXN1bHQgPSByZXN1bHQ7XG4gICAgICBidG4uX2Rpc2FibGVkID0gIXJlc3VsdCAmJiBpc1JlbmRlckRpc2FibGVkO1xuICAgICAgcmV0dXJuIHJlc3VsdCB8fCBpc1JlbmRlckRpc2FibGVkO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gZXhwb3J0XG5cbiAgLyoqXG4gICAqIOWvvOWHuuW9k+WJjemhte+8jOehruS/neW3sue7j+azqOWGjCBgWGxzeE1vZHVsZWBcbiAgICogQHBhcmFtIG5ld0RhdGEg6YeN5paw5oyH5a6a5pWw5o2u77yb6Iul5Li6IGB0cnVlYCDooajnpLrkvb/nlKggYGZpbHRlcmVkRGF0YWAg5pWw5o2uXG4gICAqIEBwYXJhbSBvcHQg6aKd5aSW5Y+C5pWwXG4gICAqL1xuICBleHBvcnQobmV3RGF0YT86IFNURGF0YVtdIHwgdHJ1ZSwgb3B0PzogU1RFeHBvcnRPcHRpb25zKTogdm9pZCB7XG4gICAgKG5ld0RhdGEgPT09IHRydWUgPyBmcm9tKHRoaXMuZmlsdGVyZWREYXRhKSA6IG9mKG5ld0RhdGEgfHwgdGhpcy5fZGF0YSkpLnN1YnNjcmliZSgocmVzOiBTVERhdGFbXSkgPT5cbiAgICAgIHRoaXMuZXhwb3J0U3J2LmV4cG9ydCh7XG4gICAgICAgIC4uLm9wdCxcbiAgICAgICAgZGF0YTogcmVzLFxuICAgICAgICBjb2x1bWVuczogdGhpcy5fY29sdW1ucyxcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiByZXNpemFibGVcblxuICBjb2xSZXNpemUoeyB3aWR0aCB9OiBOelJlc2l6ZUV2ZW50LCBjb2x1bW46IF9TVENvbHVtbik6IHZvaWQge1xuICAgIGNvbHVtbi53aWR0aCA9IGAke3dpZHRofXB4YDtcbiAgICB0aGlzLmNoYW5nZUVtaXQoJ3Jlc2l6ZScsIGNvbHVtbik7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgZ2V0IGNka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydCgpOiBDZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQge1xuICAgIHJldHVybiB0aGlzLm9yZ1RhYmxlLmNka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydCE7XG4gIH1cblxuICByZXNldENvbHVtbnMob3B0aW9ucz86IFNUUmVzZXRDb2x1bW5zT3B0aW9uKTogUHJvbWlzZTx0aGlzPiB7XG4gICAgb3B0aW9ucyA9IHsgZW1pdFJlbG9hZDogdHJ1ZSwgcHJlQ2xlYXJEYXRhOiBmYWxzZSwgLi4ub3B0aW9ucyB9O1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5jb2x1bW5zICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5jb2x1bW5zID0gb3B0aW9ucy5jb2x1bW5zO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMucGkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnBpID0gb3B0aW9ucy5waTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLnBzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5wcyA9IG9wdGlvbnMucHM7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLmVtaXRSZWxvYWQpIHtcbiAgICAgIC8vIFNob3VsZCBjbGVhbiBkYXRhLCBCZWNhdXNlIG9mIGNoYW5naW5nIGNvbHVtbnMgbWF5IGNhdXNlIGluYWNjdXJhdGUgZGF0YVxuICAgICAgb3B0aW9ucy5wcmVDbGVhckRhdGEgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5wcmVDbGVhckRhdGEpIHtcbiAgICAgIHRoaXMuX2RhdGEgPSBbXTtcbiAgICB9XG4gICAgdGhpcy5yZWZyZXNoQ29sdW1ucygpO1xuICAgIGlmIChvcHRpb25zLmVtaXRSZWxvYWQpIHtcbiAgICAgIHJldHVybiB0aGlzLmxvYWRQYWdlRGF0YSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNkKCk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVmcmVzaENvbHVtbnMoKTogdGhpcyB7XG4gICAgY29uc3QgcmVzID0gdGhpcy5jb2x1bW5Tb3VyY2UucHJvY2Vzcyh0aGlzLmNvbHVtbnMgYXMgX1NUQ29sdW1uW10sIHsgd2lkdGhNb2RlOiB0aGlzLndpZHRoTW9kZSwgcmVzaXphYmxlOiB0aGlzLl9yZXNpemFibGUgfSk7XG4gICAgdGhpcy5fY29sdW1ucyA9IHJlcy5jb2x1bW5zO1xuICAgIHRoaXMuX2hlYWRlcnMgPSByZXMuaGVhZGVycztcbiAgICBpZiAodGhpcy5jdXN0b21XaWR0aENvbmZpZyA9PT0gZmFsc2UgJiYgcmVzLmhlYWRlcldpZHRocyAhPSBudWxsKSB7XG4gICAgICB0aGlzLl93aWR0aENvbmZpZyA9IHJlcy5oZWFkZXJXaWR0aHM7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJpdmF0ZSBvcHRpbWl6ZURhdGEoKTogdm9pZCB7XG4gICAgdGhpcy5fZGF0YSA9IHRoaXMuZGF0YVNvdXJjZS5vcHRpbWl6ZURhdGEoeyBjb2x1bW5zOiB0aGlzLl9jb2x1bW5zLCByZXN1bHQ6IHRoaXMuX2RhdGEsIHJvd0NsYXNzTmFtZTogdGhpcy5yb3dDbGFzc05hbWUgfSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jb2x1bW5Tb3VyY2UucmVzdG9yZUFsbFJlbmRlcih0aGlzLl9jb2x1bW5zKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW1AgaW4ga2V5b2YgdGhpc10/OiBTaW1wbGVDaGFuZ2UgfSAmIFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5jb2x1bW5zKSB7XG4gICAgICB0aGlzLnJlZnJlc2hDb2x1bW5zKCkub3B0aW1pemVEYXRhKCk7XG4gICAgfVxuICAgIGNvbnN0IGNoYW5nZURhdGEgPSBjaGFuZ2VzLmRhdGE7XG4gICAgaWYgKGNoYW5nZURhdGEgJiYgY2hhbmdlRGF0YS5jdXJyZW50VmFsdWUgJiYgISh0aGlzLnJlcS5sYXp5TG9hZCAmJiBjaGFuZ2VEYXRhLmZpcnN0Q2hhbmdlKSkge1xuICAgICAgdGhpcy5sb2FkUGFnZURhdGEoKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMubG9hZGluZykge1xuICAgICAgdGhpcy5fbG9hZGluZyA9IGNoYW5nZXMubG9hZGluZy5jdXJyZW50VmFsdWU7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgY29uc3QgeyB1bnN1YnNjcmliZSQgfSA9IHRoaXM7XG4gICAgdW5zdWJzY3JpYmUkLm5leHQoKTtcbiAgICB1bnN1YnNjcmliZSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19