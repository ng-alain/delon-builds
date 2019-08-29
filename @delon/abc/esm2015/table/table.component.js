/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
export class STComponent {
    // #endregion
    /**
     * @param {?} i18nSrv
     * @param {?} cdr
     * @param {?} cog
     * @param {?} router
     * @param {?} el
     * @param {?} renderer
     * @param {?} exportSrv
     * @param {?} modalHelper
     * @param {?} drawerHelper
     * @param {?} doc
     * @param {?} columnSource
     * @param {?} dataSource
     * @param {?} delonI18n
     */
    constructor(i18nSrv, cdr, cog, router, el, renderer, exportSrv, modalHelper, drawerHelper, doc, columnSource, dataSource, delonI18n) {
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
        this.totalTpl = ``;
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
        () => {
            this.locale = this.delonI18n.getData('st');
            if (this._columns.length > 0) {
                this.page = this.clonePage;
                this.cd();
            }
        }));
        this.copyCog = deepMergeKey(new STConfig(), true, cog);
        delete this.copyCog.multiSort;
        Object.assign(this, this.copyCog);
        if (cog.multiSort && cog.multiSort.global !== false) {
            this.multiSort = Object.assign({}, cog.multiSort);
        }
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
     * 请求体配置
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
        this._req = deepMerge({}, this._req, this.cog.req, value);
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
        const item = deepMergeKey({}, true, this.cog.res, value);
        /** @type {?} */
        const reName = item.reName;
        if (!Array.isArray(reName.list))
            reName.list = reName.list.split('.');
        if (!Array.isArray(reName.total))
            reName.total = reName.total.split('.');
        this._res = item;
    }
    /**
     * 分页器配置
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
        this.clonePage = value;
        /** @type {?} */
        const item = deepMergeKey({}, true, new STConfig().page, this.cog.page, value);
        const { total } = item;
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
    }
    /**
     * 是否多排序，当 `sort` 多个相同值时自动合并，建议后端支持时使用
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
            this._multiSort = null;
            return;
        }
        this._multiSort = Object.assign({}, (typeof value === 'object' ? value : {}));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set widthMode(value) {
        this._widthMode = Object.assign({ type: 'default', strictBehavior: 'truncate' }, value);
    }
    /**
     * @return {?}
     */
    get widthMode() {
        return this._widthMode;
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
            ? this.totalTpl
                .replace('{{total}}', total)
                .replace('{{range[0]}}', range[0])
                .replace('{{range[1]}}', range[1])
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
            return this.dataSource
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
                return this._refCheck();
            }
            catch (error) {
                this.setLoading(false);
                this.cdr.detectChanges();
                this.error.emit({ type: 'req', error });
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
        return (/** @type {?} */ (this)).clearCheck()
            .clearRadio()
            .clearFilter()
            .clearSort();
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
            (/** @type {?} */ (this))._req.params = options && options.merge ? Object.assign({}, (/** @type {?} */ (this))._req.params, extraParams) : extraParams;
        }
        (/** @type {?} */ (this))._change('pi');
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
     * @return {?}
     */
    _toTop() {
        if (!this.page.toTop)
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
     * @return {?}
     */
    _change(type) {
        if (type === 'pi' || (type === 'ps' && this.pi <= Math.ceil(this.total / this.ps))) {
            this.loadPageData().then((/**
             * @return {?}
             */
            () => this._toTop()));
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
     * 移除某行数据
     * @template THIS
     * @this {THIS}
     * @param {?} data
     * @return {THIS}
     */
    removeRow(data) {
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
            col._sort.default = value;
            col._sort.tick = this.dataSource.nextSortTick;
        }
        else {
            this._columns.forEach((/**
             * @param {?} item
             * @param {?} index
             * @return {?}
             */
            (item, index) => (item._sort.default = index === idx ? value : null)));
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
        item => (item._sort.default = null)));
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
     * @return {?}
     */
    _btnClick(record, btn) {
        if (btn.type === 'modal' || btn.type === 'static') {
            const { modal } = btn;
            /** @type {?} */
            const obj = { [(/** @type {?} */ ((/** @type {?} */ (modal)).paramsName))]: record };
            ((/** @type {?} */ (this.modalHelper[btn.type === 'modal' ? 'create' : 'createStatic'])))((/** @type {?} */ (modal)).component, Object.assign({}, obj, ((/** @type {?} */ (modal)).params && (/** @type {?} */ ((/** @type {?} */ (modal)).params))(record))), deepMergeKey({}, true, this.copyCog.modal, modal))
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
        else if (btn.type === 'drawer') {
            const { drawer } = btn;
            /** @type {?} */
            const obj = { [(/** @type {?} */ ((/** @type {?} */ (drawer)).paramsName))]: record };
            this.drawerHelper
                .create((/** @type {?} */ ((/** @type {?} */ (drawer)).title)), (/** @type {?} */ (drawer)).component, Object.assign({}, obj, ((/** @type {?} */ (drawer)).params && (/** @type {?} */ ((/** @type {?} */ (drawer)).params))(record))), deepMergeKey({}, true, this.copyCog.drawer, drawer))
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
        // tslint:disable-next-line: deprecation
        if (btn.format) {
            // tslint:disable-next-line: deprecation
            return btn.format(record, btn);
        }
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
        (res) => this.exportSrv.export(Object.assign({}, opt, { _d: res, _c: this._columns }))));
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
     * @private
     * @return {?}
     */
    setClass() {
        const { type, strictBehavior } = this.widthMode;
        updateHostClass(this.el.nativeElement, this.renderer, {
            [`st`]: true,
            [`st__p-${this.page.placement}`]: this.page.placement,
            [`st__width-${type}`]: true,
            [`st__width-strict-${strictBehavior}`]: type === 'strict',
            [`ant-table-rep`]: this.responsive,
            [`ant-table-rep__hide-header-footer`]: this.responsiveHideHeaderFooter,
        });
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
        this.setClass();
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
                template: "<ng-template #btnTpl let-i let-btn=\"btn\">\n  <ng-container *ngIf=\"!btn.tooltip\">\n    <ng-template [ngTemplateOutlet]=\"btnItemTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n  </ng-container>\n  <span *ngIf=\"btn.tooltip\" nz-tooltip [nzTitle]=\"btn.tooltip\">\n    <ng-template [ngTemplateOutlet]=\"btnItemTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n  </span>\n</ng-template>\n<ng-template #btnItemTpl let-i let-btn=\"btn\">\n  <a *ngIf=\"btn.pop\" nz-popconfirm [nzTitle]=\"btn.popTitle\" (nzOnConfirm)=\"_btnClick(i, btn)\" class=\"st__btn-text\">\n    <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n  </a>\n  <a *ngIf=\"!btn.pop\" (click)=\"_btnClick(i, btn)\" class=\"st__btn-text\">\n    <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n  </a>\n</ng-template>\n<ng-template #btnTextTpl let-i let-btn=\"btn\">\n  <ng-container *ngIf=\"btn.icon\">\n    <i *ngIf=\"!btn.icon.iconfont\"\n      nz-icon [nzType]=\"btn.icon.type\"\n      [nzTheme]=\"btn.icon.theme\"\n      [nzSpin]=\"btn.icon.spin\"\n      [nzTwotoneColor]=\"btn.icon.twoToneColor\"></i>\n    <i *ngIf=\"btn.icon.iconfont\" nz-icon [nzIconfont]=\"btn.icon.iconfont\"></i>\n  </ng-container>\n  <span [innerHTML]=\"_btnText(i, btn)\" [ngClass]=\"{'pl-xs': btn.icon}\"></span>\n</ng-template>\n<ng-template #titleTpl let-i>\n  <span [innerHTML]=\"i.text\"></span>\n  <small *ngIf=\"i.optional\" class=\"st__head-optional\" [innerHTML]=\"i.optional\"></small>\n  <i *ngIf=\"i.optionalHelp\" class=\"st__head-tip\" nz-tooltip [nzTitle]=\"i.optionalHelp\" nz-icon nzType=\"question-circle\"></i>\n</ng-template>\n<ng-template #bodyTpl let-i let-index=\"index\">\n  <tr [attr.data-index]=\"index\" (click)=\"_rowClick($event, i, index)\" [class]=\"i._rowClassName\">\n    <td *ngIf=\"expand\" [nzShowExpand]=\"expand && i.showExpand !== false\" [(nzExpand)]=\"i.expand\" (nzExpandChange)=\"_expandChange(i)\"></td>\n    <td *ngFor=\"let c of _columns; let cIdx=index\" [nzLeft]=\"c._left\" [nzRight]=\"c._right\"\n        [nzCheckbox]=\"c.type === 'checkbox'\" [ngClass]=\"columnClass(c)\" [attr.colspan]=\"c.colSpan\">\n      <span class=\"ant-table-rep__title\">\n        <ng-template [ngTemplateOutlet]=\"titleTpl\" [ngTemplateOutletContext]=\"{$implicit: c.title }\"></ng-template>\n      </span>\n      <span>\n        <ng-template #render [ngTemplateOutlet]=\"c.__render\" [ngTemplateOutletContext]=\"{$implicit: i, index: index, column: c }\"></ng-template>\n        <ng-container *ngIf=\"!c.__render; else render\">\n          <ng-container [ngSwitch]=\"c.type\">\n            <label *ngSwitchCase=\"'checkbox'\" nz-checkbox [nzDisabled]=\"i.disabled\" [ngModel]=\"i.checked\"\n                   (ngModelChange)=\"_checkSelection(i, $event)\"></label>\n            <label *ngSwitchCase=\"'radio'\" nz-radio [nzDisabled]=\"i.disabled\" [ngModel]=\"i.checked\"\n                   (ngModelChange)=\"_refRadio($event, i)\"></label>\n            <a *ngSwitchCase=\"'link'\" (click)=\"_click($event, i, c)\" [innerHTML]=\"i._values[cIdx].text\"></a>\n            <nz-tag *ngSwitchCase=\"'tag'\" [nzColor]=\"c.tag[i._values[cIdx].text].color\">\n              {{c.tag[i._values[cIdx].text].text || i._values[cIdx].text}}\n            </nz-tag>\n            <nz-badge *ngSwitchCase=\"'badge'\"\n                      [nzStatus]=\"c.badge[i._values[cIdx].text].color\"\n                      [nzText]=\"c.badge[i._values[cIdx].text].text || i._values[cIdx].text\">\n            </nz-badge>\n            <span *ngSwitchDefault [innerHTML]=\"i._values[cIdx].text\" [attr.title]=\"isTruncate(c) ? i._values[cIdx].text : null\"></span>\n          </ng-container>\n          <ng-container *ngFor=\"let btn of _validBtns(c.buttons, i, c); let last=last\">\n            <a *ngIf=\"btn.children.length > 0\" nz-dropdown [nzDropdownMenu]=\"btnMenu\" nzOverlayClassName=\"st__btn-sub\">\n              <span [innerHTML]=\"_btnText(i, btn)\"></span>\n              <i nz-icon nzType=\"down\"></i>\n            </a>\n            <nz-dropdown-menu #btnMenu=\"nzDropdownMenu\">\n              <ul nz-menu>\n                <ng-container *ngFor=\"let subBtn of _validBtns(btn.children, i, c)\">\n                  <li nz-menu-item [class.st__btn-disabled]=\"subBtn._disabled\">\n                    <ng-template [ngTemplateOutlet]=\"btnTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: subBtn }\"></ng-template>\n                  </li>\n                </ng-container>\n              </ul>\n            </nz-dropdown-menu>\n            <span *ngIf=\"btn.children.length == 0\" [class.st__btn-disabled]=\"btn._disabled\">\n              <ng-template [ngTemplateOutlet]=\"btnTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n            </span>\n            <nz-divider *ngIf=\"!last\" nzType=\"vertical\"></nz-divider>\n          </ng-container>\n          <ng-template [ngIf]=\"!c.__renderExpanded\" [ngTemplateOutlet]=\"c.__renderExpanded\"\n                       [ngTemplateOutletContext]=\"{$implicit: i, index: index, column: c }\"></ng-template>\n        </ng-container>\n      </span>\n    </td>\n  </tr>\n  <tr [nzExpand]=\"i.expand\">\n    <td></td>\n    <td [attr.colspan]=\"_columns.length\">\n      <ng-template [ngTemplateOutlet]=\"expand\" [ngTemplateOutletContext]=\"{$implicit: i, index: index }\"></ng-template>\n    </td>\n  </tr>\n</ng-template>\n<ng-template #chkAllTpl let-custom>\n  <label nz-checkbox class=\"st__checkall\"\n    [nzDisabled]=\"_allCheckedDisabled\"\n    [(ngModel)]=\"_allChecked\"\n    [nzIndeterminate]=\"_indeterminate\"\n    (ngModelChange)=\"_checkAll()\"\n    [class.ant-table-selection-select-all-custom]=\"custom\"></label>\n</ng-template>\n<nz-table #table [nzData]=\"_data\" [(nzPageIndex)]=\"pi\" (nzPageIndexChange)=\"_change('pi')\" [(nzPageSize)]=\"ps\"\n          (nzPageSizeChange)=\"_change('ps')\" [nzTotal]=\"total\" [nzShowPagination]=\"_isPagination\"\n          [nzFrontPagination]=\"false\" [nzBordered]=\"bordered\" [nzSize]=\"size\" [nzLoading]=\"_loading\"\n          [nzLoadingDelay]=\"loadingDelay\" [nzLoadingIndicator]=\"loadingIndicator\"\n          [nzTitle]=\"header\" [nzFooter]=\"footer\"\n          [nzScroll]=\"scroll\" [nzVirtualScroll]=\"virtualScroll\" [nzVirtualItemSize]=\"virtualItemSize\"\n          [nzVirtualMaxBufferPx]=\"virtualMaxBufferPx\" [nzVirtualMinBufferPx]=\"virtualMinBufferPx\"\n          [nzNoResult]=\"noResult\" [nzPageSizeOptions]=\"page.pageSizes\" [nzShowQuickJumper]=\"page.showQuickJumper\"\n          [nzShowSizeChanger]=\"page.showSize\" [nzPaginationPosition]=\"page.position\" [nzShowTotal]=\"totalTpl\">\n  <thead class=\"st__head\">\n    <tr>\n      <th *ngIf=\"expand\" [nzShowExpand]=\"expand\"></th>\n      <th *ngFor=\"let c of _columns; let index=index\" [nzWidth]=\"c.width\" [nzLeft]=\"c._left\"\n          [nzRight]=\"c._right\" [ngClass]=\"c.className\" [attr.colspan]=\"c.colSpan\" [attr.data-col]=\"c.indexKey\"\n          [nzShowSort]=\"c._sort.enabled\" [nzSort]=\"c._sort.default\" (nzSortChange)=\"sort(c, index, $event)\"\n          [nzCustomFilter]=\"c.filter\">\n        <ng-template #renderTitle [ngTemplateOutlet]=\"c.__renderTitle\" [ngTemplateOutletContext]=\"{$implicit: c, index: index }\"></ng-template>\n        <ng-container *ngIf=\"!c.__renderTitle; else renderTitle\">\n          <ng-container [ngSwitch]=\"c.type\">\n            <ng-container *ngSwitchCase=\"'checkbox'\">\n              <ng-container *ngIf=\"c.selections.length === 0\">\n                <ng-template [ngTemplateOutlet]=\"chkAllTpl\" [ngTemplateOutletContext]=\"{$implicit: false }\"></ng-template>\n              </ng-container>\n              <div *ngIf=\"c.selections.length > 0\" class=\"ant-table-selection\">\n                <ng-template [ngTemplateOutlet]=\"chkAllTpl\" [ngTemplateOutletContext]=\"{$implicit: true }\"></ng-template>\n                <div *ngIf=\"c.selections.length\" nz-dropdown nzPlacement=\"bottomLeft\" [nzDropdownMenu]=\"selectionMenu\" class=\"ant-table-selection-down\">\n                  <i nz-icon nzType=\"down\"></i>\n                </div>\n                <nz-dropdown-menu #selectionMenu=\"nzDropdownMenu\">\n                  <ul nz-menu class=\"ant-table-selection-menu\">\n                    <li nz-menu-item *ngFor=\"let rw of c.selections\" (click)=\"_rowSelection(rw)\" [innerHTML]=\"rw.text\"></li>\n                  </ul>\n                </nz-dropdown-menu>\n              </div>\n            </ng-container>\n            <ng-container *ngSwitchDefault>\n              <ng-template [ngTemplateOutlet]=\"titleTpl\" [ngTemplateOutletContext]=\"{$implicit: c.title }\"></ng-template>\n            </ng-container>\n          </ng-container>\n          <ng-container *ngIf=\"c.filter\">\n            <i nz-icon [nzType]=\"c.filter.icon.type\" [nzTheme]=\"c.filter.icon.theme\"\n              class=\"st__filter ant-table-filter-icon\"\n              [class.ant-table-filter-selected]=\"c.filter.default\"\n              [class.ant-table-filter-open]=\"c.filter.visible\"\n              nz-dropdown [nzDropdownMenu]=\"filterMenu\" nzTrigger=\"click\" nzTableFilter [hasFilterButton]=\"true\"\n              [nzClickHide]=\"false\" [(nzVisible)]=\"c.filter.visible\"\n              nzOverlayClassName=\"st__filter-wrap\"></i>\n            <nz-dropdown-menu #filterMenu=\"nzDropdownMenu\">\n              <ng-container [ngSwitch]=\"c.filter.type\">\n                <div *ngSwitchCase=\"'keyword'\" class=\"st__filter-keyword\">\n                  <input type=\"text\" nz-input [attr.placeholder]=\"c.filter.menus[0].text\" [(ngModel)]=\"c.filter.menus[0].value\" />\n                </div>\n                <ul *ngSwitchDefault nz-menu>\n                  <ng-container *ngIf=\"c.filter.multiple\">\n                    <li nz-menu-item *ngFor=\"let filter of c.filter.menus\">\n                      <label nz-checkbox [(ngModel)]=\"filter.checked\">{{filter.text}}</label>\n                    </li>\n                  </ng-container>\n                  <ng-container *ngIf=\"!c.filter.multiple\">\n                    <li nz-menu-item *ngFor=\"let filter of c.filter.menus\">\n                      <label nz-radio [ngModel]=\"filter.checked\" (ngModelChange)=\"_filterRadio(c, filter, $event)\">{{filter.text}}</label>\n                    </li>\n                  </ng-container>\n                </ul>\n              </ng-container>\n              <div class=\"ant-table-filter-dropdown-btns\">\n                <a class=\"ant-table-filter-dropdown-link confirm\" (click)=\"c.filter.visible = false\">\n                  <span (click)=\"_filterConfirm(c)\">{{c.filter.confirmText || locale.filterConfirm}}</span>\n                </a>\n                <a class=\"ant-table-filter-dropdown-link clear\" (click)=\"c.filter.visible = false\">\n                  <span (click)=\"_filterClear(c)\">{{c.filter.clearText || locale.filterReset}}</span>\n                </a>\n              </div>\n            </nz-dropdown-menu>\n          </ng-container>\n        </ng-container>\n      </th>\n    </tr>\n  </thead>\n  <tbody class=\"st__body\">\n    <ng-container *ngIf=\"!_loading\">\n      <ng-template [ngTemplateOutlet]=\"bodyHeader\" [ngTemplateOutletContext]=\"{$implicit: _statistical }\"></ng-template>\n    </ng-container>\n    <ng-container *ngIf=\"!virtualScroll\">\n      <ng-container *ngFor=\"let i of _data; let index=index\">\n        <ng-template [ngTemplateOutlet]=\"bodyTpl\" [ngTemplateOutletContext]=\"{$implicit: i, index: index }\"></ng-template>\n      </ng-container>\n    </ng-container>\n    <ng-container *ngIf=\"virtualScroll\">\n      <ng-template nz-virtual-scroll let-i let-index=\"index\">\n        <ng-template [ngTemplateOutlet]=\"bodyTpl\" [ngTemplateOutletContext]=\"{$implicit: i, index: index }\"></ng-template>\n      </ng-template>\n    </ng-container>\n    <ng-container *ngIf=\"!_loading\">\n      <ng-template [ngTemplateOutlet]=\"body\" [ngTemplateOutletContext]=\"{$implicit: _statistical }\"></ng-template>\n    </ng-container>\n  </tbody>\n  <ng-template #totalTpl let-range=\"range\" let-total>{{ renderTotal(total, range) }}</ng-template>\n</nz-table>\n",
                providers: [STDataSource, STRowSource, STColumnSource, STExport, CNCurrencyPipe, DatePipe, YNPipe, DecimalPipe],
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
STComponent.ctorParameters = () => [
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
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy90YWJsZS8iLCJzb3VyY2VzIjpbInRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDeEQsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFHTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLFNBQVMsRUFHVCxXQUFXLEVBQ1gsaUJBQWlCLEVBQ2pCLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUVMLGdCQUFnQixFQUNoQixjQUFjLEVBQ2QsUUFBUSxFQUNSLGtCQUFrQixFQUNsQixZQUFZLEVBRVosV0FBVyxFQUNYLE1BQU0sR0FDUCxNQUFNLGNBQWMsQ0FBQztBQUN0QixPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDN0csT0FBTyxFQUFFLEVBQUUsRUFBYyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQTJDLE1BQU0scUJBQXFCLENBQUM7QUFDNUYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRCxPQUFP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Q3RCLHlCQUFzQjs7Ozs7SUFDdEIsK0JBQTJCOzs7OztJQUMzQixnQ0FBMkI7Ozs7O0lBQzNCLGtDQUFnQzs7Ozs7SUFDaEMsbUNBQWtDOzs7OztJQUNsQywwQkFBa0M7Ozs7O0lBQ2xDLG1DQUFvQzs7Ozs7SUFDcEMsaUNBQWdDOzs7OztJQUNoQyxnQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZWNpbWFsUGlwZSwgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgQWxhaW5JMThOU2VydmljZSxcbiAgQUxBSU5fSTE4Tl9UT0tFTixcbiAgQ05DdXJyZW5jeVBpcGUsXG4gIERhdGVQaXBlLFxuICBEZWxvbkxvY2FsZVNlcnZpY2UsXG4gIERyYXdlckhlbHBlcixcbiAgTG9jYWxlRGF0YSxcbiAgTW9kYWxIZWxwZXIsXG4gIFlOUGlwZSxcbn0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IGRlZXBNZXJnZSwgZGVlcE1lcmdlS2V5LCB0b0Jvb2xlYW4sIHVwZGF0ZUhvc3RDbGFzcywgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciB9IGZyb20gJ0BkZWxvbi91dGlsJztcbmltcG9ydCB7IG9mLCBPYnNlcnZhYmxlLCBTdWJqZWN0LCBmcm9tIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgU1RDb2x1bW5Tb3VyY2UgfSBmcm9tICcuL3RhYmxlLWNvbHVtbi1zb3VyY2UnO1xuaW1wb3J0IHsgU1REYXRhU291cmNlLCBTVERhdGFTb3VyY2VSZXN1bHQsIFNURGF0YVNvdXJjZU9wdGlvbnMgfSBmcm9tICcuL3RhYmxlLWRhdGEtc291cmNlJztcbmltcG9ydCB7IFNURXhwb3J0IH0gZnJvbSAnLi90YWJsZS1leHBvcnQnO1xuaW1wb3J0IHsgU1RSb3dTb3VyY2UgfSBmcm9tICcuL3RhYmxlLXJvdy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU1RDb25maWcgfSBmcm9tICcuL3RhYmxlLmNvbmZpZyc7XG5pbXBvcnQge1xuICBTVENoYW5nZSxcbiAgU1RDaGFuZ2VUeXBlLFxuICBTVENvbHVtbixcbiAgU1RDb2x1bW5CdXR0b24sXG4gIFNUQ29sdW1uRmlsdGVyTWVudSxcbiAgU1RDb2x1bW5TZWxlY3Rpb24sXG4gIFNURGF0YSxcbiAgU1RFcnJvcixcbiAgU1RFeHBvcnRPcHRpb25zLFxuICBTVExvYWRPcHRpb25zLFxuICBTVE11bHRpU29ydCxcbiAgU1RQYWdlLFxuICBTVFJlcSxcbiAgU1RSZXMsXG4gIFNUUm93Q2xhc3NOYW1lLFxuICBTVFNpbmdsZVNvcnQsXG4gIFNUU3RhdGlzdGljYWxSZXN1bHRzLFxuICBTVFdpZHRoTW9kZSxcbiAgU1RSZXNldENvbHVtbnNPcHRpb24sXG59IGZyb20gJy4vdGFibGUuaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBOelRhYmxlQ29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N0JyxcbiAgZXhwb3J0QXM6ICdzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWJsZS5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW1NURGF0YVNvdXJjZSwgU1RSb3dTb3VyY2UsIFNUQ29sdW1uU291cmNlLCBTVEV4cG9ydCwgQ05DdXJyZW5jeVBpcGUsIERhdGVQaXBlLCBZTlBpcGUsIERlY2ltYWxQaXBlXSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBTVENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgQFZpZXdDaGlsZCgndGFibGUnLCB7IHN0YXRpYzogZmFsc2UgfSkgb3JnVGFibGU6IE56VGFibGVDb21wb25lbnQ7XG4gIC8qKiDor7fmsYLkvZPphY3nva4gKi9cbiAgQElucHV0KClcbiAgZ2V0IHJlcSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVxO1xuICB9XG4gIHNldCByZXEodmFsdWU6IFNUUmVxKSB7XG4gICAgdGhpcy5fcmVxID0gZGVlcE1lcmdlKHt9LCB0aGlzLl9yZXEsIHRoaXMuY29nLnJlcSwgdmFsdWUpO1xuICB9XG4gIC8qKiDov5Tlm57kvZPphY3nva4gKi9cbiAgQElucHV0KClcbiAgZ2V0IHJlcygpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzO1xuICB9XG4gIHNldCByZXModmFsdWU6IFNUUmVzKSB7XG4gICAgY29uc3QgaXRlbSA9IGRlZXBNZXJnZUtleSh7fSwgdHJ1ZSwgdGhpcy5jb2cucmVzLCB2YWx1ZSk7XG4gICAgY29uc3QgcmVOYW1lID0gaXRlbS5yZU5hbWU7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHJlTmFtZS5saXN0KSkgcmVOYW1lLmxpc3QgPSByZU5hbWUubGlzdC5zcGxpdCgnLicpO1xuICAgIGlmICghQXJyYXkuaXNBcnJheShyZU5hbWUudG90YWwpKSByZU5hbWUudG90YWwgPSByZU5hbWUudG90YWwuc3BsaXQoJy4nKTtcbiAgICB0aGlzLl9yZXMgPSBpdGVtO1xuICB9XG4gIC8qKiDliIbpobXlmajphY3nva4gKi9cbiAgQElucHV0KClcbiAgZ2V0IHBhZ2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhZ2U7XG4gIH1cbiAgc2V0IHBhZ2UodmFsdWU6IFNUUGFnZSkge1xuICAgIHRoaXMuY2xvbmVQYWdlID0gdmFsdWU7XG4gICAgY29uc3QgaXRlbSA9IGRlZXBNZXJnZUtleSh7fSwgdHJ1ZSwgbmV3IFNUQ29uZmlnKCkucGFnZSwgdGhpcy5jb2cucGFnZSwgdmFsdWUpO1xuICAgIGNvbnN0IHsgdG90YWwgfSA9IGl0ZW07XG4gICAgaWYgKHR5cGVvZiB0b3RhbCA9PT0gJ3N0cmluZycgJiYgdG90YWwubGVuZ3RoKSB7XG4gICAgICB0aGlzLnRvdGFsVHBsID0gdG90YWw7XG4gICAgfSBlbHNlIGlmICh0b0Jvb2xlYW4odG90YWwpKSB7XG4gICAgICB0aGlzLnRvdGFsVHBsID0gdGhpcy5sb2NhbGUudG90YWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudG90YWxUcGwgPSAnJztcbiAgICB9XG4gICAgdGhpcy5fcGFnZSA9IGl0ZW07XG4gIH1cbiAgLyoqIOaYr+WQpuWkmuaOkuW6j++8jOW9kyBgc29ydGAg5aSa5Liq55u45ZCM5YC85pe26Ieq5Yqo5ZCI5bm277yM5bu66K6u5ZCO56uv5pSv5oyB5pe25L2/55SoICovXG4gIEBJbnB1dCgpXG4gIGdldCBtdWx0aVNvcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX211bHRpU29ydDtcbiAgfVxuICBzZXQgbXVsdGlTb3J0KHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicgJiYgIXRvQm9vbGVhbih2YWx1ZSkpIHtcbiAgICAgIHRoaXMuX211bHRpU29ydCA9IG51bGw7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX211bHRpU29ydCA9IHtcbiAgICAgIC4uLih0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnID8gdmFsdWUgOiB7fSksXG4gICAgfTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgd2lkdGhNb2RlKHZhbHVlOiBTVFdpZHRoTW9kZSkge1xuICAgIHRoaXMuX3dpZHRoTW9kZSA9IHsgdHlwZTogJ2RlZmF1bHQnLCBzdHJpY3RCZWhhdmlvcjogJ3RydW5jYXRlJywgLi4udmFsdWUgfTtcbiAgfVxuICBnZXQgd2lkdGhNb2RlKCkge1xuICAgIHJldHVybiB0aGlzLl93aWR0aE1vZGU7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChBTEFJTl9JMThOX1RPS0VOKSBpMThuU3J2OiBBbGFpbkkxOE5TZXJ2aWNlLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIGNvZzogU1RDb25maWcsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGV4cG9ydFNydjogU1RFeHBvcnQsXG4gICAgcHJpdmF0ZSBtb2RhbEhlbHBlcjogTW9kYWxIZWxwZXIsXG4gICAgcHJpdmF0ZSBkcmF3ZXJIZWxwZXI6IERyYXdlckhlbHBlcixcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogYW55LFxuICAgIHByaXZhdGUgY29sdW1uU291cmNlOiBTVENvbHVtblNvdXJjZSxcbiAgICBwcml2YXRlIGRhdGFTb3VyY2U6IFNURGF0YVNvdXJjZSxcbiAgICBwcml2YXRlIGRlbG9uSTE4bjogRGVsb25Mb2NhbGVTZXJ2aWNlLFxuICApIHtcbiAgICB0aGlzLmRlbG9uSTE4bi5jaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5sb2NhbGUgPSB0aGlzLmRlbG9uSTE4bi5nZXREYXRhKCdzdCcpO1xuICAgICAgaWYgKHRoaXMuX2NvbHVtbnMubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLnBhZ2UgPSB0aGlzLmNsb25lUGFnZTtcbiAgICAgICAgdGhpcy5jZCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5jb3B5Q29nID0gZGVlcE1lcmdlS2V5KG5ldyBTVENvbmZpZygpLCB0cnVlLCBjb2cpO1xuICAgIGRlbGV0ZSB0aGlzLmNvcHlDb2cubXVsdGlTb3J0O1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgdGhpcy5jb3B5Q29nKTtcbiAgICBpZiAoY29nLm11bHRpU29ydCAmJiBjb2cubXVsdGlTb3J0Lmdsb2JhbCAhPT0gZmFsc2UpIHtcbiAgICAgIHRoaXMubXVsdGlTb3J0ID0geyAuLi5jb2cubXVsdGlTb3J0IH07XG4gICAgfVxuXG4gICAgaTE4blNydi5jaGFuZ2VcbiAgICAgIC5waXBlKFxuICAgICAgICB0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpLFxuICAgICAgICBmaWx0ZXIoKCkgPT4gdGhpcy5fY29sdW1ucy5sZW5ndGggPiAwKSxcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5yZWZyZXNoQ29sdW1ucygpKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IHJvdXRlclN0YXRlKCkge1xuICAgIGNvbnN0IHsgcGksIHBzLCB0b3RhbCB9ID0gdGhpcztcbiAgICByZXR1cm4geyBwaSwgcHMsIHRvdGFsIH07XG4gIH1cbiAgcHJpdmF0ZSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIHRvdGFsVHBsID0gYGA7XG4gIHByaXZhdGUgY2xvbmVQYWdlOiBTVFBhZ2U7XG4gIHByaXZhdGUgY29weUNvZzogU1RDb25maWc7XG4gIGxvY2FsZTogTG9jYWxlRGF0YSA9IHt9O1xuICBfZGF0YTogU1REYXRhW10gPSBbXTtcbiAgX3N0YXRpc3RpY2FsOiBTVFN0YXRpc3RpY2FsUmVzdWx0cyA9IHt9O1xuICBfaXNQYWdpbmF0aW9uID0gdHJ1ZTtcbiAgX2FsbENoZWNrZWQgPSBmYWxzZTtcbiAgX2FsbENoZWNrZWREaXNhYmxlZCA9IGZhbHNlO1xuICBfaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICBfY29sdW1uczogU1RDb2x1bW5bXSA9IFtdO1xuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KCkgZGF0YTogc3RyaW5nIHwgU1REYXRhW10gfCBPYnNlcnZhYmxlPFNURGF0YVtdPjtcbiAgcHJpdmF0ZSBfcmVxOiBTVFJlcTtcbiAgcHJpdmF0ZSBfcmVzOiBTVFJlcztcbiAgQElucHV0KCkgY29sdW1uczogU1RDb2x1bW5bXSA9IFtdO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBwcyA9IDEwO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBwaSA9IDE7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHRvdGFsID0gMDtcbiAgcHJpdmF0ZSBfcGFnZTogU1RQYWdlO1xuICBfbG9hZGluZyA9IGZhbHNlO1xuICAvKiog5piv5ZCm5pi+56S6TG9hZGluZyAqL1xuICBASW5wdXQoKSBsb2FkaW5nOiBib29sZWFuIHwgbnVsbCA9IG51bGw7XG4gIC8qKiDlu7bov5/mmL7npLrliqDovb3mlYjmnpznmoTml7bpl7TvvIjpmLLmraLpl6rng4HvvIkgKi9cbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgbG9hZGluZ0RlbGF5ID0gMDtcbiAgQElucHV0KCkgbG9hZGluZ0luZGljYXRvcjogVGVtcGxhdGVSZWY8dm9pZD47XG4gIC8qKiDmmK/lkKbmmL7npLrovrnmoYYgKi9cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJvcmRlcmVkID0gZmFsc2U7XG4gIC8qKiB0YWJsZeWkp+WwjyAqL1xuICBASW5wdXQoKSBzaXplOiAnc21hbGwnIHwgJ21pZGRsZScgfCAnZGVmYXVsdCc7XG4gIC8qKiDnurXlkJHmlK/mjIHmu5rliqjvvIzkuZ/lj6/nlKjkuo7mjIflrprmu5rliqjljLrln5/nmoTpq5jluqbvvJpgeyB5OiAnMzAwcHgnLCB4OiAnMzAwcHgnIH1gICovXG4gIEBJbnB1dCgpIHNjcm9sbDogeyB5Pzogc3RyaW5nOyB4Pzogc3RyaW5nIH07XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSB2aXJ0dWFsU2Nyb2xsID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHZpcnR1YWxJdGVtU2l6ZSA9IDU0O1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSB2aXJ0dWFsTWF4QnVmZmVyUHggPSAyMDA7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHZpcnR1YWxNaW5CdWZmZXJQeCA9IDEwMDtcbiAgLyoqXG4gICAqIOWNleaOkuW6j+inhOWImVxuICAgKiAtIOiLpeS4jeaMh+Wumu+8jOWImei/lOWbnu+8mmBjb2x1bW5OYW1lPWFzY2VuZHxkZXNjZW5kYFxuICAgKiAtIOiLpeaMh+Wumu+8jOWImei/lOWbnu+8mmBzb3J0PWNvbHVtbk5hbWUuKGFzY2VuZHxkZXNjZW5kKWBcbiAgICovXG4gIEBJbnB1dCgpIHNpbmdsZVNvcnQ6IFNUU2luZ2xlU29ydCB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIF9tdWx0aVNvcnQ6IFNUTXVsdGlTb3J0IHwgbnVsbDtcbiAgQElucHV0KCkgcm93Q2xhc3NOYW1lOiBTVFJvd0NsYXNzTmFtZTtcbiAgcHJpdmF0ZSBfd2lkdGhNb2RlOiBTVFdpZHRoTW9kZTtcbiAgLyoqIGBoZWFkZXJgIOagh+mimCAqL1xuICBASW5wdXQoKSBoZWFkZXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICAvKiogYGZvb3RlcmAg5bqV6YOoICovXG4gIEBJbnB1dCgpIGZvb3Rlcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIC8qKiDpop3lpJYgYGJvZHlgIOmhtumDqOWGheWuuSAqL1xuICBASW5wdXQoKSBib2R5SGVhZGVyOiBUZW1wbGF0ZVJlZjxTVFN0YXRpc3RpY2FsUmVzdWx0cz47XG4gIC8qKiDpop3lpJYgYGJvZHlgIOWGheWuuSAqL1xuICBASW5wdXQoKSBib2R5OiBUZW1wbGF0ZVJlZjxTVFN0YXRpc3RpY2FsUmVzdWx0cz47XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBleHBhbmRSb3dCeUNsaWNrID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBleHBhbmRBY2NvcmRpb24gPSBmYWxzZTtcbiAgLyoqIGBleHBhbmRgIOWPr+WxleW8gO+8jOW9k+aVsOaNrua6kOS4reWMheaLrCBgZXhwYW5kYCDooajnpLrlsZXlvIDnirbmgIEgKi9cbiAgQElucHV0KCkgZXhwYW5kOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDoge307IGNvbHVtbjogU1RDb2x1bW4gfT47XG4gIEBJbnB1dCgpIG5vUmVzdWx0OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgd2lkdGhDb25maWc6IHN0cmluZ1tdO1xuICAvKiog6KGM5Y2V5Ye75aSa5bCR5pe26ZW/5LmL57G75Li65Y+M5Ye777yI5Y2V5L2N77ya5q+r56eS77yJ77yM6buY6K6k77yaYDIwMGAgKi9cbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgcm93Q2xpY2tUaW1lID0gMjAwO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgcmVzcG9uc2l2ZTogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSByZXNwb25zaXZlSGlkZUhlYWRlckZvb3RlcjogYm9vbGVhbjtcbiAgLyoqIOivt+axguW8guW4uOaXtuWbnuiwgyAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgZXJyb3IgPSBuZXcgRXZlbnRFbWl0dGVyPFNURXJyb3I+KCk7XG4gIC8qKlxuICAgKiDlj5jljJbml7blm57osIPvvIzljIXmi6zvvJpgcGlg44CBYHBzYOOAgWBjaGVja2JveGDjgIFgcmFkaW9g44CBYHNvcnRg44CBYGZpbHRlcmDjgIFgY2xpY2tg44CBYGRibENsaWNrYCDlj5jliqhcbiAgICovXG4gIEBPdXRwdXQoKSByZWFkb25seSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFNUQ2hhbmdlPigpO1xuXG4gIHByaXZhdGUgcm93Q2xpY2tDb3VudCA9IDA7XG5cbiAgY2QoKSB7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVuZGVyVG90YWwodG90YWw6IHN0cmluZywgcmFuZ2U6IHN0cmluZ1tdKSB7XG4gICAgcmV0dXJuIHRoaXMudG90YWxUcGxcbiAgICAgID8gdGhpcy50b3RhbFRwbFxuICAgICAgICAgIC5yZXBsYWNlKCd7e3RvdGFsfX0nLCB0b3RhbClcbiAgICAgICAgICAucmVwbGFjZSgne3tyYW5nZVswXX19JywgcmFuZ2VbMF0pXG4gICAgICAgICAgLnJlcGxhY2UoJ3t7cmFuZ2VbMV19fScsIHJhbmdlWzFdKVxuICAgICAgOiAnJztcbiAgfVxuXG4gIGlzVHJ1bmNhdGUoY29sdW1uOiBTVENvbHVtbik6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIWNvbHVtbi53aWR0aCAmJiB0aGlzLndpZHRoTW9kZS5zdHJpY3RCZWhhdmlvciA9PT0gJ3RydW5jYXRlJyAmJiBjb2x1bW4udHlwZSAhPT0gJ2ltZyc7XG4gIH1cblxuICBjb2x1bW5DbGFzcyhjb2x1bW46IFNUQ29sdW1uKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuIGNvbHVtbi5jbGFzc05hbWUgfHwgKHRoaXMuaXNUcnVuY2F0ZShjb2x1bW4pID8gJ3RleHQtdHJ1bmNhdGUnIDogbnVsbCk7XG4gIH1cblxuICBwcml2YXRlIGNoYW5nZUVtaXQodHlwZTogU1RDaGFuZ2VUeXBlLCBkYXRhPzogYW55KSB7XG4gICAgY29uc3QgcmVzOiBTVENoYW5nZSA9IHtcbiAgICAgIHR5cGUsXG4gICAgICBwaTogdGhpcy5waSxcbiAgICAgIHBzOiB0aGlzLnBzLFxuICAgICAgdG90YWw6IHRoaXMudG90YWwsXG4gICAgfTtcbiAgICBpZiAoZGF0YSAhPSBudWxsKSB7XG4gICAgICByZXNbdHlwZV0gPSBkYXRhO1xuICAgIH1cbiAgICB0aGlzLmNoYW5nZS5lbWl0KHJlcyk7XG4gIH1cblxuICAvLyAjcmVnaW9uIGRhdGFcblxuICAvKipcbiAgICog6I635Y+W6L+H5ruk5ZCO5omA5pyJ5pWw5o2uXG4gICAqIC0g5pys5Zyw5pWw5o2u77ya5YyF5ZCr5o6S5bqP44CB6L+H5ruk5ZCO5LiN5YiG6aG15pWw5o2uXG4gICAqIC0g6L+c56iL5pWw5o2u77ya5LiN5Lyg6YCSIGBwaWDjgIFgcHNgIOS4pOS4quWPguaVsFxuICAgKi9cbiAgZ2V0IGZpbHRlcmVkRGF0YSgpOiBQcm9taXNlPFNURGF0YVtdPiB7XG4gICAgcmV0dXJuIHRoaXMubG9hZERhdGEoeyBwYWdpbmF0b3I6IGZhbHNlIH0gYXMgYW55KS50aGVuKHJlcyA9PiByZXMubGlzdCk7XG4gIH1cblxuICBwcml2YXRlIHNldExvYWRpbmcodmFsOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubG9hZGluZyA9PSBudWxsKSB7XG4gICAgICB0aGlzLl9sb2FkaW5nID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbG9hZERhdGEob3B0aW9ucz86IFNURGF0YVNvdXJjZU9wdGlvbnMpOiBQcm9taXNlPFNURGF0YVNvdXJjZVJlc3VsdD4ge1xuICAgIGNvbnN0IHsgcGksIHBzLCBkYXRhLCByZXEsIHJlcywgcGFnZSwgdG90YWwsIHNpbmdsZVNvcnQsIG11bHRpU29ydCwgcm93Q2xhc3NOYW1lIH0gPSB0aGlzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZVByb21pc2UsIHJlamVjdFByb21pc2UpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmRhdGFTb3VyY2VcbiAgICAgICAgLnByb2Nlc3Moe1xuICAgICAgICAgIHBpLFxuICAgICAgICAgIHBzLFxuICAgICAgICAgIHRvdGFsLFxuICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgcmVxLFxuICAgICAgICAgIHJlcyxcbiAgICAgICAgICBwYWdlLFxuICAgICAgICAgIGNvbHVtbnM6IHRoaXMuX2NvbHVtbnMsXG4gICAgICAgICAgc2luZ2xlU29ydCxcbiAgICAgICAgICBtdWx0aVNvcnQsXG4gICAgICAgICAgcm93Q2xhc3NOYW1lLFxuICAgICAgICAgIHBhZ2luYXRvcjogdHJ1ZSxcbiAgICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICB9KVxuICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKVxuICAgICAgICAuc3Vic2NyaWJlKHJlc3VsdCA9PiByZXNvbHZlUHJvbWlzZShyZXN1bHQpLCBlcnJvciA9PiByZWplY3RQcm9taXNlKGVycm9yKSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGxvYWRQYWdlRGF0YSgpOiBQcm9taXNlPHRoaXM+IHtcbiAgICB0aGlzLnNldExvYWRpbmcodHJ1ZSk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMubG9hZERhdGEoKTtcbiAgICAgIHRoaXMuc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICBpZiAodHlwZW9mIHJlc3VsdC5waSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5waSA9IHJlc3VsdC5waTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgcmVzdWx0LnBzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLnBzID0gcmVzdWx0LnBzO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiByZXN1bHQudG90YWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMudG90YWwgPSByZXN1bHQudG90YWw7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHJlc3VsdC5wYWdlU2hvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5faXNQYWdpbmF0aW9uID0gcmVzdWx0LnBhZ2VTaG93O1xuICAgICAgfVxuICAgICAgdGhpcy5fZGF0YSA9IHJlc3VsdC5saXN0IGFzIFNURGF0YVtdO1xuICAgICAgdGhpcy5fc3RhdGlzdGljYWwgPSByZXN1bHQuc3RhdGlzdGljYWwgYXMgU1RTdGF0aXN0aWNhbFJlc3VsdHM7XG4gICAgICByZXR1cm4gdGhpcy5fcmVmQ2hlY2soKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5zZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIHRoaXMuZXJyb3IuZW1pdCh7IHR5cGU6ICdyZXEnLCBlcnJvciB9KTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfVxuXG4gIC8qKiDmuIXnqbrmiYDmnInmlbDmja4gKi9cbiAgY2xlYXIoY2xlYW5TdGF0dXMgPSB0cnVlKTogdGhpcyB7XG4gICAgaWYgKGNsZWFuU3RhdHVzKSB7XG4gICAgICB0aGlzLmNsZWFyU3RhdHVzKCk7XG4gICAgfVxuICAgIHRoaXMuX2RhdGEgPSBbXTtcbiAgICByZXR1cm4gdGhpcy5jZCgpO1xuICB9XG5cbiAgLyoqIOa4heepuuaJgOacieeKtuaAgSAqL1xuICBjbGVhclN0YXR1cygpOiB0aGlzIHtcbiAgICByZXR1cm4gdGhpcy5jbGVhckNoZWNrKClcbiAgICAgIC5jbGVhclJhZGlvKClcbiAgICAgIC5jbGVhckZpbHRlcigpXG4gICAgICAuY2xlYXJTb3J0KCk7XG4gIH1cblxuICAvKipcbiAgICog5qC55o2u6aG156CB6YeN5paw5Yqg6L295pWw5o2uXG4gICAqXG4gICAqIEBwYXJhbSBwaSDmjIflrprlvZPliY3pobXnoIHvvIzpu5jorqTvvJpgMWBcbiAgICogQHBhcmFtIGV4dHJhUGFyYW1zIOmHjeaWsOaMh+WumiBgZXh0cmFQYXJhbXNgIOWAvFxuICAgKiBAcGFyYW0gb3B0aW9ucyDpgInpoblcbiAgICovXG4gIGxvYWQocGkgPSAxLCBleHRyYVBhcmFtcz86IHt9LCBvcHRpb25zPzogU1RMb2FkT3B0aW9ucykge1xuICAgIGlmIChwaSAhPT0gLTEpIHRoaXMucGkgPSBwaTtcbiAgICBpZiAodHlwZW9mIGV4dHJhUGFyYW1zICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5fcmVxLnBhcmFtcyA9IG9wdGlvbnMgJiYgb3B0aW9ucy5tZXJnZSA/IHsgLi4udGhpcy5fcmVxLnBhcmFtcywgLi4uZXh0cmFQYXJhbXMgfSA6IGV4dHJhUGFyYW1zO1xuICAgIH1cbiAgICB0aGlzLl9jaGFuZ2UoJ3BpJyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICog6YeN5paw5Yi35paw5b2T5YmN6aG1XG4gICAqIEBwYXJhbSBleHRyYVBhcmFtcyDph43mlrDmjIflrpogYGV4dHJhUGFyYW1zYCDlgLxcbiAgICovXG4gIHJlbG9hZChleHRyYVBhcmFtcz86IHt9LCBvcHRpb25zPzogU1RMb2FkT3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLmxvYWQoLTEsIGV4dHJhUGFyYW1zLCBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDph43nva7kuJTph43mlrDorr7nva4gYHBpYCDkuLogYDFg77yM5YyF5ZCr5Lul5LiL5YC877yaXG4gICAqIC0gYGNoZWNrYCDmlbDmja5cbiAgICogLSBgcmFkaW9gIOaVsOaNrlxuICAgKiAtIGBzb3J0YCDmlbDmja5cbiAgICogLSBgZmlsZXRlcmAg5pWw5o2uXG4gICAqXG4gICAqIEBwYXJhbSBleHRyYVBhcmFtcyDph43mlrDmjIflrpogYGV4dHJhUGFyYW1zYCDlgLxcbiAgICovXG4gIHJlc2V0KGV4dHJhUGFyYW1zPzoge30sIG9wdGlvbnM/OiBTVExvYWRPcHRpb25zKSB7XG4gICAgdGhpcy5jbGVhclN0YXR1cygpLmxvYWQoMSwgZXh0cmFQYXJhbXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJpdmF0ZSBfdG9Ub3AoKSB7XG4gICAgaWYgKCF0aGlzLnBhZ2UudG9Ub3ApIHJldHVybjtcbiAgICBjb25zdCBlbCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICBpZiAodGhpcy5zY3JvbGwpIHtcbiAgICAgIGVsLnF1ZXJ5U2VsZWN0b3IoJy5hbnQtdGFibGUtYm9keScpIS5zY3JvbGxUbygwLCAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAvLyBmaXggaGVhZGVyIGhlaWdodFxuICAgIHRoaXMuZG9jLmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgLT0gdGhpcy5wYWdlLnRvVG9wT2Zmc2V0ITtcbiAgfVxuXG4gIF9jaGFuZ2UodHlwZTogJ3BpJyB8ICdwcycpIHtcbiAgICBpZiAodHlwZSA9PT0gJ3BpJyB8fCAodHlwZSA9PT0gJ3BzJyAmJiB0aGlzLnBpIDw9IE1hdGguY2VpbCh0aGlzLnRvdGFsIC8gdGhpcy5wcykpKSB7XG4gICAgICB0aGlzLmxvYWRQYWdlRGF0YSgpLnRoZW4oKCkgPT4gdGhpcy5fdG9Ub3AoKSk7XG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2VFbWl0KHR5cGUpO1xuICB9XG5cbiAgX2NsaWNrKGU6IEV2ZW50LCBpdGVtOiBTVERhdGEsIGNvbDogU1RDb2x1bW4pIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCByZXMgPSBjb2wuY2xpY2shKGl0ZW0sIHRoaXMpO1xuICAgIGlmICh0eXBlb2YgcmVzID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChyZXMsIHsgc3RhdGU6IHRoaXMucm91dGVyU3RhdGUgfSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBwcml2YXRlIGNsb3NlT3RoZXJFeHBhbmQoaXRlbTogU1REYXRhKSB7XG4gICAgaWYgKHRoaXMuZXhwYW5kQWNjb3JkaW9uID09PSBmYWxzZSkgcmV0dXJuO1xuICAgIHRoaXMuX2RhdGEuZmlsdGVyKGkgPT4gaSAhPT0gaXRlbSkuZm9yRWFjaChpID0+IChpLmV4cGFuZCA9IGZhbHNlKSk7XG4gIH1cbiAgX3Jvd0NsaWNrKGU6IEV2ZW50LCBpdGVtOiBTVERhdGEsIGluZGV4OiBudW1iZXIpIHtcbiAgICBpZiAoKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5ub2RlTmFtZSA9PT0gJ0lOUFVUJykgcmV0dXJuO1xuICAgIGNvbnN0IHsgZXhwYW5kLCBleHBhbmRSb3dCeUNsaWNrLCByb3dDbGlja1RpbWUgfSA9IHRoaXM7XG4gICAgaWYgKCEhZXhwYW5kICYmIGl0ZW0uc2hvd0V4cGFuZCAhPT0gZmFsc2UgJiYgZXhwYW5kUm93QnlDbGljaykge1xuICAgICAgaXRlbS5leHBhbmQgPSAhaXRlbS5leHBhbmQ7XG4gICAgICB0aGlzLmNsb3NlT3RoZXJFeHBhbmQoaXRlbSk7XG4gICAgICB0aGlzLmNoYW5nZUVtaXQoJ2V4cGFuZCcsIGl0ZW0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICArK3RoaXMucm93Q2xpY2tDb3VudDtcbiAgICBpZiAodGhpcy5yb3dDbGlja0NvdW50ICE9PSAxKSByZXR1cm47XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBkYXRhID0geyBlLCBpdGVtLCBpbmRleCB9O1xuICAgICAgaWYgKHRoaXMucm93Q2xpY2tDb3VudCA9PT0gMSkge1xuICAgICAgICB0aGlzLmNoYW5nZUVtaXQoJ2NsaWNrJywgZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNoYW5nZUVtaXQoJ2RibENsaWNrJywgZGF0YSk7XG4gICAgICB9XG4gICAgICB0aGlzLnJvd0NsaWNrQ291bnQgPSAwO1xuICAgIH0sIHJvd0NsaWNrVGltZSk7XG4gIH1cblxuICBfZXhwYW5kQ2hhbmdlKGl0ZW06IFNURGF0YSk6IHZvaWQge1xuICAgIHRoaXMuY2xvc2VPdGhlckV4cGFuZChpdGVtKTtcbiAgICB0aGlzLmNoYW5nZUVtaXQoJ2V4cGFuZCcsIGl0ZW0pO1xuICB9XG5cbiAgLyoqIOenu+mZpOafkOihjOaVsOaNriAqL1xuICByZW1vdmVSb3coZGF0YTogU1REYXRhIHwgU1REYXRhW10pIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgIGRhdGEgPSBbZGF0YV07XG4gICAgfVxuXG4gICAgKGRhdGEgYXMgU1REYXRhW10pXG4gICAgICAubWFwKGl0ZW0gPT4gdGhpcy5fZGF0YS5pbmRleE9mKGl0ZW0pKVxuICAgICAgLmZpbHRlcihwb3MgPT4gcG9zICE9PSAtMSlcbiAgICAgIC5mb3JFYWNoKHBvcyA9PiB0aGlzLl9kYXRhLnNwbGljZShwb3MsIDEpKTtcblxuICAgIC8vIHJlY2FsY3VsYXRlIG5vXG4gICAgdGhpcy5fY29sdW1uc1xuICAgICAgLmZpbHRlcih3ID0+IHcudHlwZSA9PT0gJ25vJylcbiAgICAgIC5mb3JFYWNoKGMgPT4gdGhpcy5fZGF0YS5mb3JFYWNoKChpLCBpZHgpID0+IChpLl92YWx1ZXNbYy5fX3BvaW50XSA9IHsgdGV4dDogdGhpcy5kYXRhU291cmNlLmdldE5vSW5kZXgoaSwgYywgaWR4KSwgb3JnOiBpZHggfSkpKTtcblxuICAgIHJldHVybiB0aGlzLmNkKCk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiBzb3J0XG5cbiAgc29ydChjb2w6IFNUQ29sdW1uLCBpZHg6IG51bWJlciwgdmFsdWU6IGFueSkge1xuICAgIGlmICh0aGlzLm11bHRpU29ydCkge1xuICAgICAgY29sLl9zb3J0LmRlZmF1bHQgPSB2YWx1ZTtcbiAgICAgIGNvbC5fc29ydC50aWNrID0gdGhpcy5kYXRhU291cmNlLm5leHRTb3J0VGljaztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY29sdW1ucy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4gKGl0ZW0uX3NvcnQuZGVmYXVsdCA9IGluZGV4ID09PSBpZHggPyB2YWx1ZSA6IG51bGwpKTtcbiAgICB9XG4gICAgdGhpcy5sb2FkUGFnZURhdGEoKTtcbiAgICBjb25zdCByZXMgPSB7XG4gICAgICB2YWx1ZSxcbiAgICAgIG1hcDogdGhpcy5kYXRhU291cmNlLmdldFJlcVNvcnRNYXAodGhpcy5zaW5nbGVTb3J0LCB0aGlzLm11bHRpU29ydCwgdGhpcy5fY29sdW1ucyksXG4gICAgICBjb2x1bW46IGNvbCxcbiAgICB9O1xuICAgIHRoaXMuY2hhbmdlRW1pdCgnc29ydCcsIHJlcyk7XG4gIH1cblxuICBjbGVhclNvcnQoKSB7XG4gICAgdGhpcy5fY29sdW1ucy5mb3JFYWNoKGl0ZW0gPT4gKGl0ZW0uX3NvcnQuZGVmYXVsdCA9IG51bGwpKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIGZpbHRlclxuXG4gIHByaXZhdGUgaGFuZGxlRmlsdGVyKGNvbDogU1RDb2x1bW4pIHtcbiAgICB0aGlzLmNvbHVtblNvdXJjZS51cGRhdGVEZWZhdWx0KGNvbC5maWx0ZXIhKTtcbiAgICB0aGlzLmxvYWRQYWdlRGF0YSgpO1xuICAgIHRoaXMuY2hhbmdlRW1pdCgnZmlsdGVyJywgY29sKTtcbiAgfVxuXG4gIF9maWx0ZXJDb25maXJtKGNvbDogU1RDb2x1bW4pIHtcbiAgICB0aGlzLmhhbmRsZUZpbHRlcihjb2wpO1xuICB9XG5cbiAgX2ZpbHRlclJhZGlvKGNvbDogU1RDb2x1bW4sIGl0ZW06IFNUQ29sdW1uRmlsdGVyTWVudSwgY2hlY2tlZDogYm9vbGVhbikge1xuICAgIGNvbC5maWx0ZXIhLm1lbnVzIS5mb3JFYWNoKGkgPT4gKGkuY2hlY2tlZCA9IGZhbHNlKSk7XG4gICAgaXRlbS5jaGVja2VkID0gY2hlY2tlZDtcbiAgfVxuXG4gIF9maWx0ZXJDbGVhcihjb2w6IFNUQ29sdW1uKSB7XG4gICAgdGhpcy5jb2x1bW5Tb3VyY2UuY2xlYW5GaWx0ZXIoY29sKTtcbiAgICB0aGlzLmhhbmRsZUZpbHRlcihjb2wpO1xuICB9XG5cbiAgY2xlYXJGaWx0ZXIoKSB7XG4gICAgdGhpcy5fY29sdW1ucy5maWx0ZXIodyA9PiB3LmZpbHRlciAmJiB3LmZpbHRlci5kZWZhdWx0ID09PSB0cnVlKS5mb3JFYWNoKGNvbCA9PiB0aGlzLmNvbHVtblNvdXJjZS5jbGVhbkZpbHRlcihjb2wpKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIGNoZWNrYm94XG5cbiAgLyoqIOa4hemZpOaJgOaciSBgY2hlY2tib3hgICovXG4gIGNsZWFyQ2hlY2soKTogdGhpcyB7XG4gICAgcmV0dXJuIHRoaXMuX2NoZWNrQWxsKGZhbHNlKTtcbiAgfVxuXG4gIHByaXZhdGUgX3JlZkNoZWNrKCk6IHRoaXMge1xuICAgIGNvbnN0IHZhbGlkRGF0YSA9IHRoaXMuX2RhdGEuZmlsdGVyKHcgPT4gIXcuZGlzYWJsZWQpO1xuICAgIGNvbnN0IGNoZWNrZWRMaXN0ID0gdmFsaWREYXRhLmZpbHRlcih3ID0+IHcuY2hlY2tlZCA9PT0gdHJ1ZSk7XG4gICAgdGhpcy5fYWxsQ2hlY2tlZCA9IGNoZWNrZWRMaXN0Lmxlbmd0aCA+IDAgJiYgY2hlY2tlZExpc3QubGVuZ3RoID09PSB2YWxpZERhdGEubGVuZ3RoO1xuICAgIGNvbnN0IGFsbFVuQ2hlY2tlZCA9IHZhbGlkRGF0YS5ldmVyeSh2YWx1ZSA9PiAhdmFsdWUuY2hlY2tlZCk7XG4gICAgdGhpcy5faW5kZXRlcm1pbmF0ZSA9ICF0aGlzLl9hbGxDaGVja2VkICYmICFhbGxVbkNoZWNrZWQ7XG4gICAgdGhpcy5fYWxsQ2hlY2tlZERpc2FibGVkID0gdGhpcy5fZGF0YS5sZW5ndGggPT09IHRoaXMuX2RhdGEuZmlsdGVyKHcgPT4gdy5kaXNhYmxlZCkubGVuZ3RoO1xuICAgIHJldHVybiB0aGlzLmNkKCk7XG4gIH1cblxuICBfY2hlY2tBbGwoY2hlY2tlZD86IGJvb2xlYW4pOiB0aGlzIHtcbiAgICBjaGVja2VkID0gdHlwZW9mIGNoZWNrZWQgPT09ICd1bmRlZmluZWQnID8gdGhpcy5fYWxsQ2hlY2tlZCA6IGNoZWNrZWQ7XG4gICAgdGhpcy5fZGF0YS5maWx0ZXIodyA9PiAhdy5kaXNhYmxlZCkuZm9yRWFjaChpID0+IChpLmNoZWNrZWQgPSBjaGVja2VkKSk7XG4gICAgcmV0dXJuIHRoaXMuX3JlZkNoZWNrKCkuX2NoZWNrTm90aWZ5KCk7XG4gIH1cblxuICBfY2hlY2tTZWxlY3Rpb24oaTogU1REYXRhLCB2YWx1ZTogYm9vbGVhbikge1xuICAgIGkuY2hlY2tlZCA9IHZhbHVlO1xuICAgIHJldHVybiB0aGlzLl9yZWZDaGVjaygpLl9jaGVja05vdGlmeSgpO1xuICB9XG5cbiAgX3Jvd1NlbGVjdGlvbihyb3c6IFNUQ29sdW1uU2VsZWN0aW9uKTogdGhpcyB7XG4gICAgcm93LnNlbGVjdCh0aGlzLl9kYXRhKTtcbiAgICByZXR1cm4gdGhpcy5fcmVmQ2hlY2soKS5fY2hlY2tOb3RpZnkoKTtcbiAgfVxuXG4gIF9jaGVja05vdGlmeSgpOiB0aGlzIHtcbiAgICBjb25zdCByZXMgPSB0aGlzLl9kYXRhLmZpbHRlcih3ID0+ICF3LmRpc2FibGVkICYmIHcuY2hlY2tlZCA9PT0gdHJ1ZSk7XG4gICAgdGhpcy5jaGFuZ2VFbWl0KCdjaGVja2JveCcsIHJlcyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiByYWRpb1xuXG4gIC8qKiDmuIXpmaTmiYDmnIkgYHJhZGlvYCAqL1xuICBjbGVhclJhZGlvKCk6IHRoaXMge1xuICAgIHRoaXMuX2RhdGEuZmlsdGVyKHcgPT4gdy5jaGVja2VkKS5mb3JFYWNoKGl0ZW0gPT4gKGl0ZW0uY2hlY2tlZCA9IGZhbHNlKSk7XG4gICAgdGhpcy5jaGFuZ2VFbWl0KCdyYWRpbycsIG51bGwpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgX3JlZlJhZGlvKGNoZWNrZWQ6IGJvb2xlYW4sIGl0ZW06IFNURGF0YSk6IHRoaXMge1xuICAgIC8vIGlmIChpdGVtLmRpc2FibGVkID09PSB0cnVlKSByZXR1cm47XG4gICAgdGhpcy5fZGF0YS5maWx0ZXIodyA9PiAhdy5kaXNhYmxlZCkuZm9yRWFjaChpID0+IChpLmNoZWNrZWQgPSBmYWxzZSkpO1xuICAgIGl0ZW0uY2hlY2tlZCA9IGNoZWNrZWQ7XG4gICAgdGhpcy5jaGFuZ2VFbWl0KCdyYWRpbycsIGl0ZW0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gYnV0dG9uc1xuXG4gIF9idG5DbGljayhyZWNvcmQ6IFNURGF0YSwgYnRuOiBTVENvbHVtbkJ1dHRvbikge1xuICAgIGlmIChidG4udHlwZSA9PT0gJ21vZGFsJyB8fCBidG4udHlwZSA9PT0gJ3N0YXRpYycpIHtcbiAgICAgIGNvbnN0IHsgbW9kYWwgfSA9IGJ0bjtcbiAgICAgIGNvbnN0IG9iaiA9IHsgW21vZGFsIS5wYXJhbXNOYW1lIV06IHJlY29yZCB9O1xuICAgICAgKHRoaXMubW9kYWxIZWxwZXJbYnRuLnR5cGUgPT09ICdtb2RhbCcgPyAnY3JlYXRlJyA6ICdjcmVhdGVTdGF0aWMnXSBhcyBhbnkpKFxuICAgICAgICBtb2RhbCEuY29tcG9uZW50LFxuICAgICAgICB7IC4uLm9iaiwgLi4uKG1vZGFsIS5wYXJhbXMgJiYgbW9kYWwhLnBhcmFtcyEocmVjb3JkKSkgfSxcbiAgICAgICAgZGVlcE1lcmdlS2V5KHt9LCB0cnVlLCB0aGlzLmNvcHlDb2cubW9kYWwsIG1vZGFsKSxcbiAgICAgIClcbiAgICAgICAgLnBpcGUoZmlsdGVyKHcgPT4gdHlwZW9mIHcgIT09ICd1bmRlZmluZWQnKSlcbiAgICAgICAgLnN1YnNjcmliZShyZXMgPT4gdGhpcy5idG5DYWxsYmFjayhyZWNvcmQsIGJ0biwgcmVzKSk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChidG4udHlwZSA9PT0gJ2RyYXdlcicpIHtcbiAgICAgIGNvbnN0IHsgZHJhd2VyIH0gPSBidG47XG4gICAgICBjb25zdCBvYmogPSB7IFtkcmF3ZXIhLnBhcmFtc05hbWUhXTogcmVjb3JkIH07XG4gICAgICB0aGlzLmRyYXdlckhlbHBlclxuICAgICAgICAuY3JlYXRlKFxuICAgICAgICAgIGRyYXdlciEudGl0bGUhLFxuICAgICAgICAgIGRyYXdlciEuY29tcG9uZW50LFxuICAgICAgICAgIHsgLi4ub2JqLCAuLi4oZHJhd2VyIS5wYXJhbXMgJiYgZHJhd2VyIS5wYXJhbXMhKHJlY29yZCkpIH0sXG4gICAgICAgICAgZGVlcE1lcmdlS2V5KHt9LCB0cnVlLCB0aGlzLmNvcHlDb2cuZHJhd2VyLCBkcmF3ZXIpLFxuICAgICAgICApXG4gICAgICAgIC5waXBlKGZpbHRlcih3ID0+IHR5cGVvZiB3ICE9PSAndW5kZWZpbmVkJykpXG4gICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHRoaXMuYnRuQ2FsbGJhY2socmVjb3JkLCBidG4sIHJlcykpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoYnRuLnR5cGUgPT09ICdsaW5rJykge1xuICAgICAgY29uc3QgY2xpY2tSZXMgPSB0aGlzLmJ0bkNhbGxiYWNrKHJlY29yZCwgYnRuKTtcbiAgICAgIGlmICh0eXBlb2YgY2xpY2tSZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoY2xpY2tSZXMsIHsgc3RhdGU6IHRoaXMucm91dGVyU3RhdGUgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuYnRuQ2FsbGJhY2socmVjb3JkLCBidG4pO1xuICB9XG5cbiAgcHJpdmF0ZSBidG5DYWxsYmFjayhyZWNvcmQ6IFNURGF0YSwgYnRuOiBTVENvbHVtbkJ1dHRvbiwgbW9kYWw/OiBhbnkpIHtcbiAgICBpZiAoIWJ0bi5jbGljaykgcmV0dXJuO1xuICAgIGlmICh0eXBlb2YgYnRuLmNsaWNrID09PSAnc3RyaW5nJykge1xuICAgICAgc3dpdGNoIChidG4uY2xpY2spIHtcbiAgICAgICAgY2FzZSAnbG9hZCc6XG4gICAgICAgICAgdGhpcy5sb2FkKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3JlbG9hZCc6XG4gICAgICAgICAgdGhpcy5yZWxvYWQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGJ0bi5jbGljayhyZWNvcmQsIG1vZGFsLCB0aGlzKTtcbiAgICB9XG4gIH1cblxuICBfYnRuVGV4dChyZWNvcmQ6IFNURGF0YSwgYnRuOiBTVENvbHVtbkJ1dHRvbikge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGVwcmVjYXRpb25cbiAgICBpZiAoYnRuLmZvcm1hdCkge1xuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkZXByZWNhdGlvblxuICAgICAgcmV0dXJuIGJ0bi5mb3JtYXQocmVjb3JkLCBidG4pO1xuICAgIH1cbiAgICByZXR1cm4gdHlwZW9mIGJ0bi50ZXh0ID09PSAnZnVuY3Rpb24nID8gYnRuLnRleHQocmVjb3JkLCBidG4pIDogYnRuLnRleHQgfHwgJyc7XG4gIH1cblxuICBfdmFsaWRCdG5zKGJ0bnM6IFNUQ29sdW1uQnV0dG9uW10sIGl0ZW06IFNURGF0YSwgY29sOiBTVENvbHVtbik6IFNUQ29sdW1uQnV0dG9uW10ge1xuICAgIHJldHVybiBidG5zLmZpbHRlcihidG4gPT4ge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYnRuLmlpZiEoaXRlbSwgYnRuLCBjb2wpO1xuICAgICAgY29uc3QgaXNSZW5kZXJEaXNhYmxlZCA9IGJ0bi5paWZCZWhhdmlvciA9PT0gJ2Rpc2FibGVkJztcbiAgICAgIGJ0bi5fcmVzdWx0ID0gcmVzdWx0O1xuICAgICAgYnRuLl9kaXNhYmxlZCA9ICFyZXN1bHQgJiYgaXNSZW5kZXJEaXNhYmxlZDtcbiAgICAgIHJldHVybiByZXN1bHQgfHwgaXNSZW5kZXJEaXNhYmxlZDtcbiAgICB9KTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIGV4cG9ydFxuXG4gIC8qKlxuICAgKiDlr7zlh7rlvZPliY3pobXvvIznoa7kv53lt7Lnu4/ms6jlhowgYFhsc3hNb2R1bGVgXG4gICAqIEBwYXJhbSBuZXdEYXRhIOmHjeaWsOaMh+WumuaVsOaNru+8m+iLpeS4uiBgdHJ1ZWAg6KGo56S65L2/55SoIGBmaWx0ZXJlZERhdGFgIOaVsOaNrlxuICAgKiBAcGFyYW0gb3B0IOmineWkluWPguaVsFxuICAgKi9cbiAgZXhwb3J0KG5ld0RhdGE/OiBTVERhdGFbXSB8IHRydWUsIG9wdD86IFNURXhwb3J0T3B0aW9ucykge1xuICAgIChuZXdEYXRhID09PSB0cnVlID8gZnJvbSh0aGlzLmZpbHRlcmVkRGF0YSkgOiBvZihuZXdEYXRhIHx8IHRoaXMuX2RhdGEpKS5zdWJzY3JpYmUoKHJlczogU1REYXRhW10pID0+XG4gICAgICB0aGlzLmV4cG9ydFNydi5leHBvcnQoe1xuICAgICAgICAuLi5vcHQsXG4gICAgICAgIF9kOiByZXMsXG4gICAgICAgIF9jOiB0aGlzLl9jb2x1bW5zLFxuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICBnZXQgY2RrVmlydHVhbFNjcm9sbFZpZXdwb3J0KCkge1xuICAgIHJldHVybiB0aGlzLm9yZ1RhYmxlLmNka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydDtcbiAgfVxuXG4gIHJlc2V0Q29sdW1ucyhvcHRpb25zPzogU1RSZXNldENvbHVtbnNPcHRpb24pOiBQcm9taXNlPHRoaXM+IHtcbiAgICBvcHRpb25zID0geyBlbWl0UmVsb2FkOiB0cnVlLCAuLi5vcHRpb25zIH07XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLmNvbHVtbnMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLmNvbHVtbnMgPSBvcHRpb25zLmNvbHVtbnM7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5waSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucGkgPSBvcHRpb25zLnBpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMucHMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnBzID0gb3B0aW9ucy5wcztcbiAgICB9XG4gICAgdGhpcy5yZWZyZXNoQ29sdW1ucygpO1xuICAgIGlmIChvcHRpb25zLmVtaXRSZWxvYWQgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiB0aGlzLmxvYWRQYWdlRGF0YSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNkKCk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVmcmVzaENvbHVtbnMoKTogdGhpcyB7XG4gICAgdGhpcy5fY29sdW1ucyA9IHRoaXMuY29sdW1uU291cmNlLnByb2Nlc3ModGhpcy5jb2x1bW5zKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByaXZhdGUgc2V0Q2xhc3MoKSB7XG4gICAgY29uc3QgeyB0eXBlLCBzdHJpY3RCZWhhdmlvciB9ID0gdGhpcy53aWR0aE1vZGU7XG4gICAgdXBkYXRlSG9zdENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5yZW5kZXJlciwge1xuICAgICAgW2BzdGBdOiB0cnVlLFxuICAgICAgW2BzdF9fcC0ke3RoaXMucGFnZS5wbGFjZW1lbnR9YF06IHRoaXMucGFnZS5wbGFjZW1lbnQsXG4gICAgICBbYHN0X193aWR0aC0ke3R5cGV9YF06IHRydWUsXG4gICAgICBbYHN0X193aWR0aC1zdHJpY3QtJHtzdHJpY3RCZWhhdmlvcn1gXTogdHlwZSA9PT0gJ3N0cmljdCcsXG4gICAgICBbYGFudC10YWJsZS1yZXBgXTogdGhpcy5yZXNwb25zaXZlLFxuICAgICAgW2BhbnQtdGFibGUtcmVwX19oaWRlLWhlYWRlci1mb290ZXJgXTogdGhpcy5yZXNwb25zaXZlSGlkZUhlYWRlckZvb3RlcixcbiAgICB9KTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmNvbHVtblNvdXJjZS5yZXN0b3JlQWxsUmVuZGVyKHRoaXMuX2NvbHVtbnMpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogeyBbUCBpbiBrZXlvZiB0aGlzXT86IFNpbXBsZUNoYW5nZSB9ICYgU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLmNvbHVtbnMpIHtcbiAgICAgIHRoaXMucmVmcmVzaENvbHVtbnMoKTtcbiAgICB9XG4gICAgY29uc3QgY2hhbmdlRGF0YSA9IGNoYW5nZXMuZGF0YTtcbiAgICBpZiAoY2hhbmdlRGF0YSAmJiBjaGFuZ2VEYXRhLmN1cnJlbnRWYWx1ZSAmJiAhKHRoaXMucmVxLmxhenlMb2FkICYmIGNoYW5nZURhdGEuZmlyc3RDaGFuZ2UpKSB7XG4gICAgICB0aGlzLmxvYWRQYWdlRGF0YSgpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5sb2FkaW5nKSB7XG4gICAgICB0aGlzLl9sb2FkaW5nID0gY2hhbmdlcy5sb2FkaW5nLmN1cnJlbnRWYWx1ZTtcbiAgICB9XG4gICAgdGhpcy5zZXRDbGFzcygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgY29uc3QgeyB1bnN1YnNjcmliZSQgfSA9IHRoaXM7XG4gICAgdW5zdWJzY3JpYmUkLm5leHQoKTtcbiAgICB1bnN1YnNjcmliZSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19