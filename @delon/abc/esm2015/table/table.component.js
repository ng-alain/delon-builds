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
        const item = deepMergeKey({}, true, this.cog.page, value);
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
        return !!column.width && this.widthMode.strictBehavior === 'truncate';
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
        return this.dataSource.process(Object.assign({ pi,
            ps,
            total,
            data,
            req,
            res,
            page, columns: this._columns, singleSort,
            multiSort,
            rowClassName, paginator: true }, options));
    }
    /**
     * @private
     * @return {?}
     */
    loadPageData() {
        this.setLoading(true);
        return this.loadData()
            .then((/**
         * @param {?} result
         * @return {?}
         */
        result => {
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
            return this._data;
        }))
            .then((/**
         * @template THIS
         * @this {THIS}
         * @return {THIS}
         */
        () => this._refCheck()))
            .catch((/**
         * @template THIS
         * @this {THIS}
         * @param {?} error
         * @return {THIS}
         */
        error => {
            this.setLoading(false);
            this.cdr.detectChanges();
            this.error.emit({ type: 'req', error });
            return this;
        }));
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
        if (options) {
            if (typeof options.columns !== 'undefined') {
                this.columns = options.columns;
            }
            if (typeof options.pi !== 'undefined') {
                this.pi = options.pi;
            }
            if (typeof options.ps !== 'undefined') {
                this.ps = options.ps;
            }
        }
        return this.refreshColumns().loadPageData();
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
        if (changes.data && changes.data.currentValue) {
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
                template: "<ng-template #btnTpl let-i let-btn=\"btn\" let-sub=\"sub\">\n  <nz-popconfirm *ngIf=\"btn.pop\" [nzTitle]=\"btn.popTitle\" (nzOnConfirm)=\"_btnClick(i, btn)\">\n    <a *ngIf=\"!sub\" nz-popconfirm>\n      <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n    </a>\n    <span *ngIf=\"sub\" nz-popconfirm>\n      <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n    </span>\n  </nz-popconfirm>\n  <ng-container *ngIf=\"!btn.pop\">\n    <a *ngIf=\"!sub\" (click)=\"_btnClick(i, btn)\">\n      <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n    </a>\n    <span *ngIf=\"sub\" (click)=\"_btnClick(i, btn)\">\n      <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n    </span>\n  </ng-container>\n</ng-template>\n<ng-template #btnTextTpl let-i let-btn=\"btn\">\n  <ng-container *ngIf=\"btn.icon\">\n    <i *ngIf=\"!btn.icon.iconfont\"\n      nz-icon [nzType]=\"btn.icon.type\"\n      [nzTheme]=\"btn.icon.theme\"\n      [nzSpin]=\"btn.icon.spin\"\n      [nzTwotoneColor]=\"btn.icon.twoToneColor\"></i>\n    <i *ngIf=\"btn.icon.iconfont\" nz-icon [nzIconfont]=\"btn.icon.iconfont\"></i>\n  </ng-container>\n  <span [innerHTML]=\"_btnText(i, btn)\" [ngClass]=\"{'pl-xs': btn.icon}\"></span>\n</ng-template>\n<ng-template #bodyTpl let-i let-index=\"index\">\n  <tr [attr.data-index]=\"index\" (click)=\"_rowClick($event, i, index)\" [class]=\"i._rowClassName\">\n    <td *ngIf=\"expand\" [nzShowExpand]=\"expand && i.showExpand !== false\" [(nzExpand)]=\"i.expand\" (nzExpandChange)=\"_expandChange(i)\"></td>\n    <td *ngFor=\"let c of _columns; let cIdx=index\" [nzLeft]=\"c._left\" [nzRight]=\"c._right\"\n        [nzCheckbox]=\"c.type === 'checkbox'\" [ngClass]=\"columnClass(c)\" [attr.colspan]=\"c.colSpan\">\n      <span class=\"ant-table-rep__title\" [innerHTML]=\"c.title\"></span>\n      <span>\n        <ng-template #render [ngTemplateOutlet]=\"c.__render\" [ngTemplateOutletContext]=\"{$implicit: i, index: index, column: c }\"></ng-template>\n        <ng-container *ngIf=\"!c.__render; else render\">\n          <ng-container [ngSwitch]=\"c.type\">\n            <label *ngSwitchCase=\"'checkbox'\" nz-checkbox [nzDisabled]=\"i.disabled\" [ngModel]=\"i.checked\"\n                   (ngModelChange)=\"_checkSelection(i, $event)\"></label>\n            <label *ngSwitchCase=\"'radio'\" nz-radio [nzDisabled]=\"i.disabled\" [ngModel]=\"i.checked\"\n                   (ngModelChange)=\"_refRadio($event, i)\"></label>\n            <a *ngSwitchCase=\"'link'\" (click)=\"_click($event, i, c)\" [innerHTML]=\"i._values[cIdx].text\"></a>\n            <nz-tag *ngSwitchCase=\"'tag'\" [nzColor]=\"c.tag[i._values[cIdx].text].color\">\n              {{c.tag[i._values[cIdx].text].text || i._values[cIdx].text}}\n            </nz-tag>\n            <nz-badge *ngSwitchCase=\"'badge'\"\n                      [nzStatus]=\"c.badge[i._values[cIdx].text].color\"\n                      [nzText]=\"c.badge[i._values[cIdx].text].text || i._values[cIdx].text\">\n            </nz-badge>\n            <span *ngSwitchDefault [innerHTML]=\"i._values[cIdx].text\" [attr.title]=\"isTruncate(c) ? i._values[cIdx].text : null\"></span>\n          </ng-container>\n          <ng-container *ngFor=\"let btn of _validBtns(c.buttons, i, c); let last=last\">\n            <nz-dropdown *ngIf=\"btn.children.length > 0\" nzOverlayClassName=\"st__btn-sub\">\n              <a nz-dropdown>\n                <span [innerHTML]=\"_btnText(i, btn)\"></span>\n                <i nz-icon nzType=\"down\"></i>\n              </a>\n              <ul nz-menu>\n                <ng-container *ngFor=\"let subBtn of _validBtns(btn.children, i, c)\">\n                  <li nz-menu-item [class.st__btn-disabled]=\"subBtn._disabled\">\n                    <ng-template [ngTemplateOutlet]=\"btnTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: subBtn, sub: true }\"></ng-template>\n                  </li>\n                </ng-container>\n              </ul>\n            </nz-dropdown>\n            <span *ngIf=\"btn.children.length == 0\" [class.st__btn-disabled]=\"btn._disabled\">\n              <ng-template [ngTemplateOutlet]=\"btnTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn, sub: false }\"></ng-template>\n            </span>\n            <nz-divider *ngIf=\"!last\" nzType=\"vertical\"></nz-divider>\n          </ng-container>\n          <ng-template [ngIf]=\"!c.__renderExpanded\" [ngTemplateOutlet]=\"c.__renderExpanded\"\n                       [ngTemplateOutletContext]=\"{$implicit: i, index: index, column: c }\"></ng-template>\n        </ng-container>\n      </span>\n    </td>\n  </tr>\n  <tr [nzExpand]=\"i.expand\">\n    <td></td>\n    <td [attr.colspan]=\"_columns.length\">\n      <ng-template [ngTemplateOutlet]=\"expand\" [ngTemplateOutletContext]=\"{$implicit: i, index: index }\"></ng-template>\n    </td>\n  </tr>\n</ng-template>\n<nz-table #table [nzData]=\"_data\" [(nzPageIndex)]=\"pi\" (nzPageIndexChange)=\"_change('pi')\" [(nzPageSize)]=\"ps\"\n          (nzPageSizeChange)=\"_change('ps')\" [nzTotal]=\"total\" [nzShowPagination]=\"_isPagination\"\n          [nzFrontPagination]=\"false\" [nzBordered]=\"bordered\" [nzSize]=\"size\" [nzLoading]=\"_loading\"\n          [nzLoadingDelay]=\"loadingDelay\" [nzLoadingIndicator]=\"loadingIndicator\"\n          [nzTitle]=\"header\" [nzFooter]=\"footer\"\n          [nzScroll]=\"scroll\" [nzVirtualScroll]=\"virtualScroll\" [nzVirtualItemSize]=\"virtualItemSize\"\n          [nzVirtualMaxBufferPx]=\"virtualMaxBufferPx\" [nzVirtualMinBufferPx]=\"virtualMinBufferPx\"\n          [nzNoResult]=\"noResult\" [nzPageSizeOptions]=\"page.pageSizes\" [nzShowQuickJumper]=\"page.showQuickJumper\"\n          [nzShowSizeChanger]=\"page.showSize\" [nzPaginationPosition]=\"page.position\" [nzShowTotal]=\"totalTpl\">\n  <thead class=\"st__head\">\n    <tr>\n      <th *ngIf=\"expand\" [nzShowExpand]=\"expand\"></th>\n      <th *ngFor=\"let c of _columns; let index=index\" [nzWidth]=\"c.width\" [nzLeft]=\"c._left\"\n          [nzRight]=\"c._right\" [ngClass]=\"c.className\" [attr.colspan]=\"c.colSpan\" [attr.data-col]=\"c.indexKey\"\n          [nzShowSort]=\"c._sort.enabled\" [nzSort]=\"c._sort.default\" (nzSortChange)=\"sort(c, index, $event)\"\n          [nzCustomFilter]=\"c.filter\">\n        <ng-template #renderTitle [ngTemplateOutlet]=\"c.__renderTitle\" [ngTemplateOutletContext]=\"{$implicit: c, index: index }\"></ng-template>\n        <ng-container *ngIf=\"!c.__renderTitle; else renderTitle\">\n          <ng-container [ngSwitch]=\"c.type\">\n            <ng-container *ngSwitchCase=\"'checkbox'\">\n              <label nz-checkbox class=\"st__checkall\" [nzDisabled]=\"_allCheckedDisabled\"\n                     [(ngModel)]=\"_allChecked\" [nzIndeterminate]=\"_indeterminate\" (ngModelChange)=\"_checkAll()\"></label>\n              <nz-dropdown *ngIf=\"c.selections.length\" class=\"st__selection\">\n                <span nz-dropdown>\n                  <i nz-icon nzType=\"down\"></i>\n                </span>\n                <ul nz-menu>\n                  <li nz-menu-item *ngFor=\"let rw of c.selections\" (click)=\"_rowSelection(rw)\" [innerHTML]=\"rw.text\"></li>\n                </ul>\n              </nz-dropdown>\n            </ng-container>\n            <span *ngSwitchDefault [innerHTML]=\"c.title\"></span>\n          </ng-container>\n          <nz-dropdown *ngIf=\"c.filter\" class=\"st__filter\" nzTrigger=\"click\" nzTableFilter [hasFilterButton]=\"true\"\n                       [nzClickHide]=\"false\" [(nzVisible)]=\"c.filter.visible\"\n                       nzOverlayClassName=\"st__filter-wrap\">\n            <i nz-icon [nzType]=\"c.filter.icon.type\" [nzTheme]=\"c.filter.icon.theme\"\n              class=\"ant-table-filter-icon\"\n              [class.ant-table-filter-selected]=\"c.filter.default\"\n              [class.ant-table-filter-open]=\"c.filter.visible\"\n              nz-dropdown></i>\n            <ng-container [ngSwitch]=\"c.filter.type\">\n              <div *ngSwitchCase=\"'keyword'\" class=\"st__filter-keyword\">\n                <input type=\"text\" nz-input [attr.placeholder]=\"c.filter.menus[0].text\" [(ngModel)]=\"c.filter.menus[0].value\" />\n              </div>\n              <ul *ngSwitchDefault nz-menu>\n                <ng-container *ngIf=\"c.filter.multiple\">\n                  <li nz-menu-item *ngFor=\"let filter of c.filter.menus\">\n                    <label nz-checkbox [(ngModel)]=\"filter.checked\">{{filter.text}}</label>\n                  </li>\n                </ng-container>\n                <ng-container *ngIf=\"!c.filter.multiple\">\n                  <li nz-menu-item *ngFor=\"let filter of c.filter.menus\">\n                    <label nz-radio [ngModel]=\"filter.checked\" (ngModelChange)=\"_filterRadio(c, filter, $event)\">{{filter.text}}</label>\n                  </li>\n                </ng-container>\n              </ul>\n            </ng-container>\n            <div class=\"ant-table-filter-dropdown-btns\">\n              <a class=\"ant-table-filter-dropdown-link confirm\" (click)=\"c.filter.visible = false\">\n                <span (click)=\"_filterConfirm(c)\">{{c.filter.confirmText || locale.filterConfirm}}</span>\n              </a>\n              <a class=\"ant-table-filter-dropdown-link clear\" (click)=\"c.filter.visible = false\">\n                <span (click)=\"_filterClear(c)\">{{c.filter.clearText || locale.filterReset}}</span>\n              </a>\n            </div>\n          </nz-dropdown>\n        </ng-container>\n      </th>\n    </tr>\n  </thead>\n  <tbody class=\"st__body\">\n    <ng-container *ngIf=\"!_loading\">\n      <ng-template [ngTemplateOutlet]=\"bodyHeader\" [ngTemplateOutletContext]=\"{$implicit: _statistical }\"></ng-template>\n    </ng-container>\n    <ng-container *ngIf=\"!virtualScroll\">\n      <ng-container *ngFor=\"let i of _data; let index=index\">\n        <ng-template [ngTemplateOutlet]=\"bodyTpl\" [ngTemplateOutletContext]=\"{$implicit: i, index: index }\"></ng-template>\n      </ng-container>\n    </ng-container>\n    <ng-container *ngIf=\"virtualScroll\">\n      <ng-template nz-virtual-scroll let-i let-index=\"index\">\n        <ng-template [ngTemplateOutlet]=\"bodyTpl\" [ngTemplateOutletContext]=\"{$implicit: i, index: index }\"></ng-template>\n      </ng-template>\n    </ng-container>\n    <ng-container *ngIf=\"!_loading\">\n      <ng-template [ngTemplateOutlet]=\"body\" [ngTemplateOutletContext]=\"{$implicit: _statistical }\"></ng-template>\n    </ng-container>\n  </tbody>\n  <ng-template #totalTpl let-range=\"range\" let-total>{{ renderTotal(total, range) }}</ng-template>\n</nz-table>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy90YWJsZS8iLCJzb3VyY2VzIjpbInRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDeEQsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFHTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLFNBQVMsRUFHVCxXQUFXLEVBQ1gsaUJBQWlCLEVBQ2pCLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUVMLGdCQUFnQixFQUNoQixjQUFjLEVBQ2QsUUFBUSxFQUNSLGtCQUFrQixFQUNsQixZQUFZLEVBRVosV0FBVyxFQUNYLE1BQU0sR0FDUCxNQUFNLGNBQWMsQ0FBQztBQUN0QixPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDN0csT0FBTyxFQUFFLEVBQUUsRUFBYyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQTJDLE1BQU0scUJBQXFCLENBQUM7QUFDNUYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRCxPQUFP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NEM7O0lBQzVDLG9DQUErQzs7SUFDL0Msc0NBQTZDOztJQUM3Qyx5Q0FBaUQ7O0lBQ2pELHlDQUFpRDs7Ozs7OztJQU1qRCxpQ0FBZ0Q7Ozs7O0lBQ2hELGlDQUF1Qzs7SUFDdkMsbUNBQXNDOzs7OztJQUN0QyxpQ0FBZ0M7Ozs7O0lBRWhDLDZCQUE0Qzs7Ozs7SUFFNUMsNkJBQTRDOzs7OztJQUU1QyxpQ0FBdUQ7Ozs7O0lBRXZELDJCQUFpRDs7SUFDakQsdUNBQWtEOztJQUNsRCxzQ0FBaUQ7Ozs7O0lBRWpELDZCQUFrRTs7SUFDbEUsK0JBQThDOztJQUM5QyxrQ0FBK0I7Ozs7O0lBRS9CLG1DQUEyQzs7SUFDM0MsaUNBQW9EOztJQUNwRCxpREFBNkQ7Ozs7O0lBRTdELDRCQUF1RDs7Ozs7SUFJdkQsNkJBQXlEOzs7OztJQUV6RCxvQ0FBMEI7Ozs7O0lBakh4QiwwQkFBOEI7Ozs7O0lBQzlCLDBCQUFxQjs7Ozs7SUFDckIsNkJBQXNCOzs7OztJQUN0Qix5QkFBc0I7Ozs7O0lBQ3RCLCtCQUEyQjs7Ozs7SUFDM0IsZ0NBQTJCOzs7OztJQUMzQixrQ0FBZ0M7Ozs7O0lBQ2hDLG1DQUFrQzs7Ozs7SUFDbEMsMEJBQWtDOzs7OztJQUNsQyxtQ0FBb0M7Ozs7O0lBQ3BDLGlDQUFnQzs7Ozs7SUFDaEMsZ0NBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGVjaW1hbFBpcGUsIERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZSxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBWaWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIEFsYWluSTE4TlNlcnZpY2UsXG4gIEFMQUlOX0kxOE5fVE9LRU4sXG4gIENOQ3VycmVuY3lQaXBlLFxuICBEYXRlUGlwZSxcbiAgRGVsb25Mb2NhbGVTZXJ2aWNlLFxuICBEcmF3ZXJIZWxwZXIsXG4gIExvY2FsZURhdGEsXG4gIE1vZGFsSGVscGVyLFxuICBZTlBpcGUsXG59IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBkZWVwTWVyZ2UsIGRlZXBNZXJnZUtleSwgdG9Cb29sZWFuLCB1cGRhdGVIb3N0Q2xhc3MsIElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbCc7XG5pbXBvcnQgeyBvZiwgT2JzZXJ2YWJsZSwgU3ViamVjdCwgZnJvbSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFNUQ29sdW1uU291cmNlIH0gZnJvbSAnLi90YWJsZS1jb2x1bW4tc291cmNlJztcbmltcG9ydCB7IFNURGF0YVNvdXJjZSwgU1REYXRhU291cmNlUmVzdWx0LCBTVERhdGFTb3VyY2VPcHRpb25zIH0gZnJvbSAnLi90YWJsZS1kYXRhLXNvdXJjZSc7XG5pbXBvcnQgeyBTVEV4cG9ydCB9IGZyb20gJy4vdGFibGUtZXhwb3J0JztcbmltcG9ydCB7IFNUUm93U291cmNlIH0gZnJvbSAnLi90YWJsZS1yb3cuZGlyZWN0aXZlJztcbmltcG9ydCB7IFNUQ29uZmlnIH0gZnJvbSAnLi90YWJsZS5jb25maWcnO1xuaW1wb3J0IHtcbiAgU1RDaGFuZ2UsXG4gIFNUQ2hhbmdlVHlwZSxcbiAgU1RDb2x1bW4sXG4gIFNUQ29sdW1uQnV0dG9uLFxuICBTVENvbHVtbkZpbHRlck1lbnUsXG4gIFNUQ29sdW1uU2VsZWN0aW9uLFxuICBTVERhdGEsXG4gIFNURXJyb3IsXG4gIFNURXhwb3J0T3B0aW9ucyxcbiAgU1RMb2FkT3B0aW9ucyxcbiAgU1RNdWx0aVNvcnQsXG4gIFNUUGFnZSxcbiAgU1RSZXEsXG4gIFNUUmVzLFxuICBTVFJvd0NsYXNzTmFtZSxcbiAgU1RTaW5nbGVTb3J0LFxuICBTVFN0YXRpc3RpY2FsUmVzdWx0cyxcbiAgU1RXaWR0aE1vZGUsXG4gIFNUUmVzZXRDb2x1bW5zT3B0aW9uLFxufSBmcm9tICcuL3RhYmxlLmludGVyZmFjZXMnO1xuaW1wb3J0IHsgTnpUYWJsZUNvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdCcsXG4gIGV4cG9ydEFzOiAnc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFibGUuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFtTVERhdGFTb3VyY2UsIFNUUm93U291cmNlLCBTVENvbHVtblNvdXJjZSwgU1RFeHBvcnQsIENOQ3VycmVuY3lQaXBlLCBEYXRlUGlwZSwgWU5QaXBlLCBEZWNpbWFsUGlwZV0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgU1RDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIEBWaWV3Q2hpbGQoJ3RhYmxlJywgeyBzdGF0aWM6IGZhbHNlIH0pIG9yZ1RhYmxlOiBOelRhYmxlQ29tcG9uZW50O1xuICAvKiog6K+35rGC5L2T6YWN572uICovXG4gIEBJbnB1dCgpXG4gIGdldCByZXEoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcTtcbiAgfVxuICBzZXQgcmVxKHZhbHVlOiBTVFJlcSkge1xuICAgIHRoaXMuX3JlcSA9IGRlZXBNZXJnZSh7fSwgdGhpcy5fcmVxLCB0aGlzLmNvZy5yZXEsIHZhbHVlKTtcbiAgfVxuICAvKiog6L+U5Zue5L2T6YWN572uICovXG4gIEBJbnB1dCgpXG4gIGdldCByZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcztcbiAgfVxuICBzZXQgcmVzKHZhbHVlOiBTVFJlcykge1xuICAgIGNvbnN0IGl0ZW0gPSBkZWVwTWVyZ2VLZXkoe30sIHRydWUsIHRoaXMuY29nLnJlcywgdmFsdWUpO1xuICAgIGNvbnN0IHJlTmFtZSA9IGl0ZW0ucmVOYW1lO1xuICAgIGlmICghQXJyYXkuaXNBcnJheShyZU5hbWUubGlzdCkpIHJlTmFtZS5saXN0ID0gcmVOYW1lLmxpc3Quc3BsaXQoJy4nKTtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkocmVOYW1lLnRvdGFsKSkgcmVOYW1lLnRvdGFsID0gcmVOYW1lLnRvdGFsLnNwbGl0KCcuJyk7XG4gICAgdGhpcy5fcmVzID0gaXRlbTtcbiAgfVxuICAvKiog5YiG6aG15Zmo6YWN572uICovXG4gIEBJbnB1dCgpXG4gIGdldCBwYWdlKCkge1xuICAgIHJldHVybiB0aGlzLl9wYWdlO1xuICB9XG4gIHNldCBwYWdlKHZhbHVlOiBTVFBhZ2UpIHtcbiAgICB0aGlzLmNsb25lUGFnZSA9IHZhbHVlO1xuICAgIGNvbnN0IGl0ZW0gPSBkZWVwTWVyZ2VLZXkoe30sIHRydWUsIHRoaXMuY29nLnBhZ2UsIHZhbHVlKTtcbiAgICBjb25zdCB7IHRvdGFsIH0gPSBpdGVtO1xuICAgIGlmICh0eXBlb2YgdG90YWwgPT09ICdzdHJpbmcnICYmIHRvdGFsLmxlbmd0aCkge1xuICAgICAgdGhpcy50b3RhbFRwbCA9IHRvdGFsO1xuICAgIH0gZWxzZSBpZiAodG9Cb29sZWFuKHRvdGFsKSkge1xuICAgICAgdGhpcy50b3RhbFRwbCA9IHRoaXMubG9jYWxlLnRvdGFsO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRvdGFsVHBsID0gJyc7XG4gICAgfVxuICAgIHRoaXMuX3BhZ2UgPSBpdGVtO1xuICB9XG4gIC8qKiDmmK/lkKblpJrmjpLluo/vvIzlvZMgYHNvcnRgIOWkmuS4quebuOWQjOWAvOaXtuiHquWKqOWQiOW5tu+8jOW7uuiuruWQjuerr+aUr+aMgeaXtuS9v+eUqCAqL1xuICBASW5wdXQoKVxuICBnZXQgbXVsdGlTb3J0KCkge1xuICAgIHJldHVybiB0aGlzLl9tdWx0aVNvcnQ7XG4gIH1cbiAgc2V0IG11bHRpU29ydCh2YWx1ZTogYW55KSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nICYmICF0b0Jvb2xlYW4odmFsdWUpKSB7XG4gICAgICB0aGlzLl9tdWx0aVNvcnQgPSBudWxsO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9tdWx0aVNvcnQgPSB7XG4gICAgICAuLi4odHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyA/IHZhbHVlIDoge30pLFxuICAgIH07XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHdpZHRoTW9kZSh2YWx1ZTogU1RXaWR0aE1vZGUpIHtcbiAgICB0aGlzLl93aWR0aE1vZGUgPSB7IHR5cGU6ICdkZWZhdWx0Jywgc3RyaWN0QmVoYXZpb3I6ICd0cnVuY2F0ZScsIC4uLnZhbHVlIH07XG4gIH1cbiAgZ2V0IHdpZHRoTW9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fd2lkdGhNb2RlO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoQUxBSU5fSTE4Tl9UT0tFTikgaTE4blNydjogQWxhaW5JMThOU2VydmljZSxcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBjb2c6IFNUQ29uZmlnLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBleHBvcnRTcnY6IFNURXhwb3J0LFxuICAgIHByaXZhdGUgbW9kYWxIZWxwZXI6IE1vZGFsSGVscGVyLFxuICAgIHByaXZhdGUgZHJhd2VySGVscGVyOiBEcmF3ZXJIZWxwZXIsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IGFueSxcbiAgICBwcml2YXRlIGNvbHVtblNvdXJjZTogU1RDb2x1bW5Tb3VyY2UsXG4gICAgcHJpdmF0ZSBkYXRhU291cmNlOiBTVERhdGFTb3VyY2UsXG4gICAgcHJpdmF0ZSBkZWxvbkkxOG46IERlbG9uTG9jYWxlU2VydmljZSxcbiAgKSB7XG4gICAgdGhpcy5kZWxvbkkxOG4uY2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMubG9jYWxlID0gdGhpcy5kZWxvbkkxOG4uZ2V0RGF0YSgnc3QnKTtcbiAgICAgIGlmICh0aGlzLl9jb2x1bW5zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5wYWdlID0gdGhpcy5jbG9uZVBhZ2U7XG4gICAgICAgIHRoaXMuY2QoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuY29weUNvZyA9IGRlZXBNZXJnZUtleShuZXcgU1RDb25maWcoKSwgdHJ1ZSwgY29nKTtcbiAgICBkZWxldGUgdGhpcy5jb3B5Q29nLm11bHRpU29ydDtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIHRoaXMuY29weUNvZyk7XG4gICAgaWYgKGNvZy5tdWx0aVNvcnQgJiYgY29nLm11bHRpU29ydC5nbG9iYWwgIT09IGZhbHNlKSB7XG4gICAgICB0aGlzLm11bHRpU29ydCA9IHsgLi4uY29nLm11bHRpU29ydCB9O1xuICAgIH1cblxuICAgIGkxOG5TcnYuY2hhbmdlXG4gICAgICAucGlwZShcbiAgICAgICAgdGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSxcbiAgICAgICAgZmlsdGVyKCgpID0+IHRoaXMuX2NvbHVtbnMubGVuZ3RoID4gMCksXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMucmVmcmVzaENvbHVtbnMoKSk7XG4gIH1cblxuICBwcml2YXRlIGdldCByb3V0ZXJTdGF0ZSgpIHtcbiAgICBjb25zdCB7IHBpLCBwcywgdG90YWwgfSA9IHRoaXM7XG4gICAgcmV0dXJuIHsgcGksIHBzLCB0b3RhbCB9O1xuICB9XG4gIHByaXZhdGUgdW5zdWJzY3JpYmUkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSB0b3RhbFRwbCA9IGBgO1xuICBwcml2YXRlIGNsb25lUGFnZTogU1RQYWdlO1xuICBwcml2YXRlIGNvcHlDb2c6IFNUQ29uZmlnO1xuICBsb2NhbGU6IExvY2FsZURhdGEgPSB7fTtcbiAgX2RhdGE6IFNURGF0YVtdID0gW107XG4gIF9zdGF0aXN0aWNhbDogU1RTdGF0aXN0aWNhbFJlc3VsdHMgPSB7fTtcbiAgX2lzUGFnaW5hdGlvbiA9IHRydWU7XG4gIF9hbGxDaGVja2VkID0gZmFsc2U7XG4gIF9hbGxDaGVja2VkRGlzYWJsZWQgPSBmYWxzZTtcbiAgX2luZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgX2NvbHVtbnM6IFNUQ29sdW1uW10gPSBbXTtcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCgpIGRhdGE6IHN0cmluZyB8IFNURGF0YVtdIHwgT2JzZXJ2YWJsZTxTVERhdGFbXT47XG4gIHByaXZhdGUgX3JlcTogU1RSZXE7XG4gIHByaXZhdGUgX3JlczogU1RSZXM7XG4gIEBJbnB1dCgpIGNvbHVtbnM6IFNUQ29sdW1uW10gPSBbXTtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgcHMgPSAxMDtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgcGkgPSAxO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSB0b3RhbCA9IDA7XG4gIHByaXZhdGUgX3BhZ2U6IFNUUGFnZTtcbiAgX2xvYWRpbmcgPSBmYWxzZTtcbiAgLyoqIOaYr+WQpuaYvuekukxvYWRpbmcgKi9cbiAgQElucHV0KCkgbG9hZGluZzogYm9vbGVhbiB8IG51bGwgPSBudWxsO1xuICAvKiog5bu26L+f5pi+56S65Yqg6L295pWI5p6c55qE5pe26Ze077yI6Ziy5q2i6Zeq54OB77yJICovXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGxvYWRpbmdEZWxheSA9IDA7XG4gIEBJbnB1dCgpIGxvYWRpbmdJbmRpY2F0b3I6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICAvKiog5piv5ZCm5pi+56S66L655qGGICovXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBib3JkZXJlZCA9IGZhbHNlO1xuICAvKiogdGFibGXlpKflsI8gKi9cbiAgQElucHV0KCkgc2l6ZTogJ3NtYWxsJyB8ICdtaWRkbGUnIHwgJ2RlZmF1bHQnO1xuICAvKiog57q15ZCR5pSv5oyB5rua5Yqo77yM5Lmf5Y+v55So5LqO5oyH5a6a5rua5Yqo5Yy65Z+f55qE6auY5bqm77yaYHsgeTogJzMwMHB4JywgeDogJzMwMHB4JyB9YCAqL1xuICBASW5wdXQoKSBzY3JvbGw6IHsgeT86IHN0cmluZzsgeD86IHN0cmluZyB9O1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgdmlydHVhbFNjcm9sbCA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSB2aXJ0dWFsSXRlbVNpemUgPSA1NDtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgdmlydHVhbE1heEJ1ZmZlclB4ID0gMjAwO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSB2aXJ0dWFsTWluQnVmZmVyUHggPSAxMDA7XG4gIC8qKlxuICAgKiDljZXmjpLluo/op4TliJlcbiAgICogLSDoi6XkuI3mjIflrprvvIzliJnov5Tlm57vvJpgY29sdW1uTmFtZT1hc2NlbmR8ZGVzY2VuZGBcbiAgICogLSDoi6XmjIflrprvvIzliJnov5Tlm57vvJpgc29ydD1jb2x1bW5OYW1lLihhc2NlbmR8ZGVzY2VuZClgXG4gICAqL1xuICBASW5wdXQoKSBzaW5nbGVTb3J0OiBTVFNpbmdsZVNvcnQgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBfbXVsdGlTb3J0OiBTVE11bHRpU29ydCB8IG51bGw7XG4gIEBJbnB1dCgpIHJvd0NsYXNzTmFtZTogU1RSb3dDbGFzc05hbWU7XG4gIHByaXZhdGUgX3dpZHRoTW9kZTogU1RXaWR0aE1vZGU7XG4gIC8qKiBgaGVhZGVyYCDmoIfpopggKi9cbiAgQElucHV0KCkgaGVhZGVyOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgLyoqIGBmb290ZXJgIOW6lemDqCAqL1xuICBASW5wdXQoKSBmb290ZXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICAvKiog6aKd5aSWIGBib2R5YCDpobbpg6jlhoXlrrkgKi9cbiAgQElucHV0KCkgYm9keUhlYWRlcjogVGVtcGxhdGVSZWY8U1RTdGF0aXN0aWNhbFJlc3VsdHM+O1xuICAvKiog6aKd5aSWIGBib2R5YCDlhoXlrrkgKi9cbiAgQElucHV0KCkgYm9keTogVGVtcGxhdGVSZWY8U1RTdGF0aXN0aWNhbFJlc3VsdHM+O1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZXhwYW5kUm93QnlDbGljayA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZXhwYW5kQWNjb3JkaW9uID0gZmFsc2U7XG4gIC8qKiBgZXhwYW5kYCDlj6/lsZXlvIDvvIzlvZPmlbDmja7mupDkuK3ljIXmi6wgYGV4cGFuZGAg6KGo56S65bGV5byA54q25oCBICovXG4gIEBJbnB1dCgpIGV4cGFuZDogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IHt9OyBjb2x1bW46IFNUQ29sdW1uIH0+O1xuICBASW5wdXQoKSBub1Jlc3VsdDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIHdpZHRoQ29uZmlnOiBzdHJpbmdbXTtcbiAgLyoqIOihjOWNleWHu+WkmuWwkeaXtumVv+S5i+exu+S4uuWPjOWHu++8iOWNleS9je+8muavq+enku+8ie+8jOm7mOiupO+8mmAyMDBgICovXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHJvd0NsaWNrVGltZSA9IDIwMDtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHJlc3BvbnNpdmU6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgcmVzcG9uc2l2ZUhpZGVIZWFkZXJGb290ZXI6IGJvb2xlYW47XG4gIC8qKiDor7fmsYLlvILluLjml7blm57osIMgKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGVycm9yID0gbmV3IEV2ZW50RW1pdHRlcjxTVEVycm9yPigpO1xuICAvKipcbiAgICog5Y+Y5YyW5pe25Zue6LCD77yM5YyF5ous77yaYHBpYOOAgWBwc2DjgIFgY2hlY2tib3hg44CBYHJhZGlvYOOAgWBzb3J0YOOAgWBmaWx0ZXJg44CBYGNsaWNrYOOAgWBkYmxDbGlja2Ag5Y+Y5YqoXG4gICAqL1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxTVENoYW5nZT4oKTtcblxuICBwcml2YXRlIHJvd0NsaWNrQ291bnQgPSAwO1xuXG4gIGNkKCkge1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlbmRlclRvdGFsKHRvdGFsOiBzdHJpbmcsIHJhbmdlOiBzdHJpbmdbXSkge1xuICAgIHJldHVybiB0aGlzLnRvdGFsVHBsXG4gICAgICA/IHRoaXMudG90YWxUcGxcbiAgICAgICAgICAucmVwbGFjZSgne3t0b3RhbH19JywgdG90YWwpXG4gICAgICAgICAgLnJlcGxhY2UoJ3t7cmFuZ2VbMF19fScsIHJhbmdlWzBdKVxuICAgICAgICAgIC5yZXBsYWNlKCd7e3JhbmdlWzFdfX0nLCByYW5nZVsxXSlcbiAgICAgIDogJyc7XG4gIH1cblxuICBpc1RydW5jYXRlKGNvbHVtbjogU1RDb2x1bW4pOiBib29sZWFuIHtcbiAgICByZXR1cm4gISFjb2x1bW4ud2lkdGggJiYgdGhpcy53aWR0aE1vZGUuc3RyaWN0QmVoYXZpb3IgPT09ICd0cnVuY2F0ZSc7XG4gIH1cblxuICBjb2x1bW5DbGFzcyhjb2x1bW46IFNUQ29sdW1uKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuIGNvbHVtbi5jbGFzc05hbWUgfHwgKHRoaXMuaXNUcnVuY2F0ZShjb2x1bW4pID8gJ3RleHQtdHJ1bmNhdGUnIDogbnVsbCk7XG4gIH1cblxuICBwcml2YXRlIGNoYW5nZUVtaXQodHlwZTogU1RDaGFuZ2VUeXBlLCBkYXRhPzogYW55KSB7XG4gICAgY29uc3QgcmVzOiBTVENoYW5nZSA9IHtcbiAgICAgIHR5cGUsXG4gICAgICBwaTogdGhpcy5waSxcbiAgICAgIHBzOiB0aGlzLnBzLFxuICAgICAgdG90YWw6IHRoaXMudG90YWwsXG4gICAgfTtcbiAgICBpZiAoZGF0YSAhPSBudWxsKSB7XG4gICAgICByZXNbdHlwZV0gPSBkYXRhO1xuICAgIH1cbiAgICB0aGlzLmNoYW5nZS5lbWl0KHJlcyk7XG4gIH1cblxuICAvLyAjcmVnaW9uIGRhdGFcblxuICAvKipcbiAgICog6I635Y+W6L+H5ruk5ZCO5omA5pyJ5pWw5o2uXG4gICAqIC0g5pys5Zyw5pWw5o2u77ya5YyF5ZCr5o6S5bqP44CB6L+H5ruk5ZCO5LiN5YiG6aG15pWw5o2uXG4gICAqIC0g6L+c56iL5pWw5o2u77ya5LiN5Lyg6YCSIGBwaWDjgIFgcHNgIOS4pOS4quWPguaVsFxuICAgKi9cbiAgZ2V0IGZpbHRlcmVkRGF0YSgpOiBQcm9taXNlPFNURGF0YVtdPiB7XG4gICAgcmV0dXJuIHRoaXMubG9hZERhdGEoeyBwYWdpbmF0b3I6IGZhbHNlIH0gYXMgYW55KS50aGVuKHJlcyA9PiByZXMubGlzdCk7XG4gIH1cblxuICBwcml2YXRlIHNldExvYWRpbmcodmFsOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubG9hZGluZyA9PSBudWxsKSB7XG4gICAgICB0aGlzLl9sb2FkaW5nID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbG9hZERhdGEob3B0aW9ucz86IFNURGF0YVNvdXJjZU9wdGlvbnMpOiBQcm9taXNlPFNURGF0YVNvdXJjZVJlc3VsdD4ge1xuICAgIGNvbnN0IHsgcGksIHBzLCBkYXRhLCByZXEsIHJlcywgcGFnZSwgdG90YWwsIHNpbmdsZVNvcnQsIG11bHRpU29ydCwgcm93Q2xhc3NOYW1lIH0gPSB0aGlzO1xuICAgIHJldHVybiB0aGlzLmRhdGFTb3VyY2UucHJvY2Vzcyh7XG4gICAgICBwaSxcbiAgICAgIHBzLFxuICAgICAgdG90YWwsXG4gICAgICBkYXRhLFxuICAgICAgcmVxLFxuICAgICAgcmVzLFxuICAgICAgcGFnZSxcbiAgICAgIGNvbHVtbnM6IHRoaXMuX2NvbHVtbnMsXG4gICAgICBzaW5nbGVTb3J0LFxuICAgICAgbXVsdGlTb3J0LFxuICAgICAgcm93Q2xhc3NOYW1lLFxuICAgICAgcGFnaW5hdG9yOiB0cnVlLFxuICAgICAgLi4ub3B0aW9ucyxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgbG9hZFBhZ2VEYXRhKCk6IFByb21pc2U8dGhpcz4ge1xuICAgIHRoaXMuc2V0TG9hZGluZyh0cnVlKTtcbiAgICByZXR1cm4gdGhpcy5sb2FkRGF0YSgpXG4gICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICB0aGlzLnNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdC5waSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aGlzLnBpID0gcmVzdWx0LnBpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0LnBzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRoaXMucHMgPSByZXN1bHQucHM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQudG90YWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhpcy50b3RhbCA9IHJlc3VsdC50b3RhbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdC5wYWdlU2hvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aGlzLl9pc1BhZ2luYXRpb24gPSByZXN1bHQucGFnZVNob3c7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZGF0YSA9IHJlc3VsdC5saXN0IGFzIFNURGF0YVtdO1xuICAgICAgICB0aGlzLl9zdGF0aXN0aWNhbCA9IHJlc3VsdC5zdGF0aXN0aWNhbCBhcyBTVFN0YXRpc3RpY2FsUmVzdWx0cztcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5fcmVmQ2hlY2soKSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIHRoaXMuc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgdGhpcy5lcnJvci5lbWl0KHsgdHlwZTogJ3JlcScsIGVycm9yIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqIOa4heepuuaJgOacieaVsOaNriAqL1xuICBjbGVhcihjbGVhblN0YXR1cyA9IHRydWUpOiB0aGlzIHtcbiAgICBpZiAoY2xlYW5TdGF0dXMpIHtcbiAgICAgIHRoaXMuY2xlYXJTdGF0dXMoKTtcbiAgICB9XG4gICAgdGhpcy5fZGF0YSA9IFtdO1xuICAgIHJldHVybiB0aGlzLmNkKCk7XG4gIH1cblxuICAvKiog5riF56m65omA5pyJ54q25oCBICovXG4gIGNsZWFyU3RhdHVzKCk6IHRoaXMge1xuICAgIHJldHVybiB0aGlzLmNsZWFyQ2hlY2soKVxuICAgICAgLmNsZWFyUmFkaW8oKVxuICAgICAgLmNsZWFyRmlsdGVyKClcbiAgICAgIC5jbGVhclNvcnQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmoLnmja7pobXnoIHph43mlrDliqDovb3mlbDmja5cbiAgICpcbiAgICogQHBhcmFtIHBpIOaMh+WumuW9k+WJjemhteegge+8jOm7mOiupO+8mmAxYFxuICAgKiBAcGFyYW0gZXh0cmFQYXJhbXMg6YeN5paw5oyH5a6aIGBleHRyYVBhcmFtc2Ag5YC8XG4gICAqIEBwYXJhbSBvcHRpb25zIOmAiemhuVxuICAgKi9cbiAgbG9hZChwaSA9IDEsIGV4dHJhUGFyYW1zPzoge30sIG9wdGlvbnM/OiBTVExvYWRPcHRpb25zKSB7XG4gICAgaWYgKHBpICE9PSAtMSkgdGhpcy5waSA9IHBpO1xuICAgIGlmICh0eXBlb2YgZXh0cmFQYXJhbXMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLl9yZXEucGFyYW1zID0gb3B0aW9ucyAmJiBvcHRpb25zLm1lcmdlID8geyAuLi50aGlzLl9yZXEucGFyYW1zLCAuLi5leHRyYVBhcmFtcyB9IDogZXh0cmFQYXJhbXM7XG4gICAgfVxuICAgIHRoaXMuX2NoYW5nZSgncGknKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiDph43mlrDliLfmlrDlvZPliY3pobVcbiAgICogQHBhcmFtIGV4dHJhUGFyYW1zIOmHjeaWsOaMh+WumiBgZXh0cmFQYXJhbXNgIOWAvFxuICAgKi9cbiAgcmVsb2FkKGV4dHJhUGFyYW1zPzoge30sIG9wdGlvbnM/OiBTVExvYWRPcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMubG9hZCgtMSwgZXh0cmFQYXJhbXMsIG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIOmHjee9ruS4lOmHjeaWsOiuvue9riBgcGlgIOS4uiBgMWDvvIzljIXlkKvku6XkuIvlgLzvvJpcbiAgICogLSBgY2hlY2tgIOaVsOaNrlxuICAgKiAtIGByYWRpb2Ag5pWw5o2uXG4gICAqIC0gYHNvcnRgIOaVsOaNrlxuICAgKiAtIGBmaWxldGVyYCDmlbDmja5cbiAgICpcbiAgICogQHBhcmFtIGV4dHJhUGFyYW1zIOmHjeaWsOaMh+WumiBgZXh0cmFQYXJhbXNgIOWAvFxuICAgKi9cbiAgcmVzZXQoZXh0cmFQYXJhbXM/OiB7fSwgb3B0aW9ucz86IFNUTG9hZE9wdGlvbnMpIHtcbiAgICB0aGlzLmNsZWFyU3RhdHVzKCkubG9hZCgxLCBleHRyYVBhcmFtcywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcml2YXRlIF90b1RvcCgpIHtcbiAgICBpZiAoIXRoaXMucGFnZS50b1RvcCkgcmV0dXJuO1xuICAgIGNvbnN0IGVsID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgIGlmICh0aGlzLnNjcm9sbCkge1xuICAgICAgZWwucXVlcnlTZWxlY3RvcignLmFudC10YWJsZS1ib2R5JykhLnNjcm9sbFRvKDAsIDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbC5zY3JvbGxJbnRvVmlldygpO1xuICAgIC8vIGZpeCBoZWFkZXIgaGVpZ2h0XG4gICAgdGhpcy5kb2MuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCAtPSB0aGlzLnBhZ2UudG9Ub3BPZmZzZXQhO1xuICB9XG5cbiAgX2NoYW5nZSh0eXBlOiAncGknIHwgJ3BzJykge1xuICAgIGlmICh0eXBlID09PSAncGknIHx8ICh0eXBlID09PSAncHMnICYmIHRoaXMucGkgPD0gTWF0aC5jZWlsKHRoaXMudG90YWwgLyB0aGlzLnBzKSkpIHtcbiAgICAgIHRoaXMubG9hZFBhZ2VEYXRhKCkudGhlbigoKSA9PiB0aGlzLl90b1RvcCgpKTtcbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZUVtaXQodHlwZSk7XG4gIH1cblxuICBfY2xpY2soZTogRXZlbnQsIGl0ZW06IFNURGF0YSwgY29sOiBTVENvbHVtbikge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IHJlcyA9IGNvbC5jbGljayEoaXRlbSwgdGhpcyk7XG4gICAgaWYgKHR5cGVvZiByZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHJlcywgeyBzdGF0ZTogdGhpcy5yb3V0ZXJTdGF0ZSB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHByaXZhdGUgY2xvc2VPdGhlckV4cGFuZChpdGVtOiBTVERhdGEpIHtcbiAgICBpZiAodGhpcy5leHBhbmRBY2NvcmRpb24gPT09IGZhbHNlKSByZXR1cm47XG4gICAgdGhpcy5fZGF0YS5maWx0ZXIoaSA9PiBpICE9PSBpdGVtKS5mb3JFYWNoKGkgPT4gKGkuZXhwYW5kID0gZmFsc2UpKTtcbiAgfVxuICBfcm93Q2xpY2soZTogRXZlbnQsIGl0ZW06IFNURGF0YSwgaW5kZXg6IG51bWJlcikge1xuICAgIGlmICgoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLm5vZGVOYW1lID09PSAnSU5QVVQnKSByZXR1cm47XG4gICAgY29uc3QgeyBleHBhbmQsIGV4cGFuZFJvd0J5Q2xpY2ssIHJvd0NsaWNrVGltZSB9ID0gdGhpcztcbiAgICBpZiAoISFleHBhbmQgJiYgaXRlbS5zaG93RXhwYW5kICE9PSBmYWxzZSAmJiBleHBhbmRSb3dCeUNsaWNrKSB7XG4gICAgICBpdGVtLmV4cGFuZCA9ICFpdGVtLmV4cGFuZDtcbiAgICAgIHRoaXMuY2xvc2VPdGhlckV4cGFuZChpdGVtKTtcbiAgICAgIHRoaXMuY2hhbmdlRW1pdCgnZXhwYW5kJywgaXRlbSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgICsrdGhpcy5yb3dDbGlja0NvdW50O1xuICAgIGlmICh0aGlzLnJvd0NsaWNrQ291bnQgIT09IDEpIHJldHVybjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSB7IGUsIGl0ZW0sIGluZGV4IH07XG4gICAgICBpZiAodGhpcy5yb3dDbGlja0NvdW50ID09PSAxKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlRW1pdCgnY2xpY2snLCBkYXRhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2hhbmdlRW1pdCgnZGJsQ2xpY2snLCBkYXRhKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucm93Q2xpY2tDb3VudCA9IDA7XG4gICAgfSwgcm93Q2xpY2tUaW1lKTtcbiAgfVxuXG4gIF9leHBhbmRDaGFuZ2UoaXRlbTogU1REYXRhKTogdm9pZCB7XG4gICAgdGhpcy5jbG9zZU90aGVyRXhwYW5kKGl0ZW0pO1xuICAgIHRoaXMuY2hhbmdlRW1pdCgnZXhwYW5kJywgaXRlbSk7XG4gIH1cblxuICAvKiog56e76Zmk5p+Q6KGM5pWw5o2uICovXG4gIHJlbW92ZVJvdyhkYXRhOiBTVERhdGEgfCBTVERhdGFbXSkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgZGF0YSA9IFtkYXRhXTtcbiAgICB9XG5cbiAgICAoZGF0YSBhcyBTVERhdGFbXSlcbiAgICAgIC5tYXAoaXRlbSA9PiB0aGlzLl9kYXRhLmluZGV4T2YoaXRlbSkpXG4gICAgICAuZmlsdGVyKHBvcyA9PiBwb3MgIT09IC0xKVxuICAgICAgLmZvckVhY2gocG9zID0+IHRoaXMuX2RhdGEuc3BsaWNlKHBvcywgMSkpO1xuXG4gICAgLy8gcmVjYWxjdWxhdGUgbm9cbiAgICB0aGlzLl9jb2x1bW5zXG4gICAgICAuZmlsdGVyKHcgPT4gdy50eXBlID09PSAnbm8nKVxuICAgICAgLmZvckVhY2goYyA9PiB0aGlzLl9kYXRhLmZvckVhY2goKGksIGlkeCkgPT4gKGkuX3ZhbHVlc1tjLl9fcG9pbnRdID0geyB0ZXh0OiB0aGlzLmRhdGFTb3VyY2UuZ2V0Tm9JbmRleChpLCBjLCBpZHgpLCBvcmc6IGlkeCB9KSkpO1xuXG4gICAgcmV0dXJuIHRoaXMuY2QoKTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIHNvcnRcblxuICBzb3J0KGNvbDogU1RDb2x1bW4sIGlkeDogbnVtYmVyLCB2YWx1ZTogYW55KSB7XG4gICAgaWYgKHRoaXMubXVsdGlTb3J0KSB7XG4gICAgICBjb2wuX3NvcnQuZGVmYXVsdCA9IHZhbHVlO1xuICAgICAgY29sLl9zb3J0LnRpY2sgPSB0aGlzLmRhdGFTb3VyY2UubmV4dFNvcnRUaWNrO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9jb2x1bW5zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiAoaXRlbS5fc29ydC5kZWZhdWx0ID0gaW5kZXggPT09IGlkeCA/IHZhbHVlIDogbnVsbCkpO1xuICAgIH1cbiAgICB0aGlzLmxvYWRQYWdlRGF0YSgpO1xuICAgIGNvbnN0IHJlcyA9IHtcbiAgICAgIHZhbHVlLFxuICAgICAgbWFwOiB0aGlzLmRhdGFTb3VyY2UuZ2V0UmVxU29ydE1hcCh0aGlzLnNpbmdsZVNvcnQsIHRoaXMubXVsdGlTb3J0LCB0aGlzLl9jb2x1bW5zKSxcbiAgICAgIGNvbHVtbjogY29sLFxuICAgIH07XG4gICAgdGhpcy5jaGFuZ2VFbWl0KCdzb3J0JywgcmVzKTtcbiAgfVxuXG4gIGNsZWFyU29ydCgpIHtcbiAgICB0aGlzLl9jb2x1bW5zLmZvckVhY2goaXRlbSA9PiAoaXRlbS5fc29ydC5kZWZhdWx0ID0gbnVsbCkpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gZmlsdGVyXG5cbiAgcHJpdmF0ZSBoYW5kbGVGaWx0ZXIoY29sOiBTVENvbHVtbikge1xuICAgIHRoaXMuY29sdW1uU291cmNlLnVwZGF0ZURlZmF1bHQoY29sLmZpbHRlciEpO1xuICAgIHRoaXMubG9hZFBhZ2VEYXRhKCk7XG4gICAgdGhpcy5jaGFuZ2VFbWl0KCdmaWx0ZXInLCBjb2wpO1xuICB9XG5cbiAgX2ZpbHRlckNvbmZpcm0oY29sOiBTVENvbHVtbikge1xuICAgIHRoaXMuaGFuZGxlRmlsdGVyKGNvbCk7XG4gIH1cblxuICBfZmlsdGVyUmFkaW8oY29sOiBTVENvbHVtbiwgaXRlbTogU1RDb2x1bW5GaWx0ZXJNZW51LCBjaGVja2VkOiBib29sZWFuKSB7XG4gICAgY29sLmZpbHRlciEubWVudXMhLmZvckVhY2goaSA9PiAoaS5jaGVja2VkID0gZmFsc2UpKTtcbiAgICBpdGVtLmNoZWNrZWQgPSBjaGVja2VkO1xuICB9XG5cbiAgX2ZpbHRlckNsZWFyKGNvbDogU1RDb2x1bW4pIHtcbiAgICB0aGlzLmNvbHVtblNvdXJjZS5jbGVhbkZpbHRlcihjb2wpO1xuICAgIHRoaXMuaGFuZGxlRmlsdGVyKGNvbCk7XG4gIH1cblxuICBjbGVhckZpbHRlcigpIHtcbiAgICB0aGlzLl9jb2x1bW5zLmZpbHRlcih3ID0+IHcuZmlsdGVyICYmIHcuZmlsdGVyLmRlZmF1bHQgPT09IHRydWUpLmZvckVhY2goY29sID0+IHRoaXMuY29sdW1uU291cmNlLmNsZWFuRmlsdGVyKGNvbCkpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gY2hlY2tib3hcblxuICAvKiog5riF6Zmk5omA5pyJIGBjaGVja2JveGAgKi9cbiAgY2xlYXJDaGVjaygpOiB0aGlzIHtcbiAgICByZXR1cm4gdGhpcy5fY2hlY2tBbGwoZmFsc2UpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVmQ2hlY2soKTogdGhpcyB7XG4gICAgY29uc3QgdmFsaWREYXRhID0gdGhpcy5fZGF0YS5maWx0ZXIodyA9PiAhdy5kaXNhYmxlZCk7XG4gICAgY29uc3QgY2hlY2tlZExpc3QgPSB2YWxpZERhdGEuZmlsdGVyKHcgPT4gdy5jaGVja2VkID09PSB0cnVlKTtcbiAgICB0aGlzLl9hbGxDaGVja2VkID0gY2hlY2tlZExpc3QubGVuZ3RoID4gMCAmJiBjaGVja2VkTGlzdC5sZW5ndGggPT09IHZhbGlkRGF0YS5sZW5ndGg7XG4gICAgY29uc3QgYWxsVW5DaGVja2VkID0gdmFsaWREYXRhLmV2ZXJ5KHZhbHVlID0+ICF2YWx1ZS5jaGVja2VkKTtcbiAgICB0aGlzLl9pbmRldGVybWluYXRlID0gIXRoaXMuX2FsbENoZWNrZWQgJiYgIWFsbFVuQ2hlY2tlZDtcbiAgICB0aGlzLl9hbGxDaGVja2VkRGlzYWJsZWQgPSB0aGlzLl9kYXRhLmxlbmd0aCA9PT0gdGhpcy5fZGF0YS5maWx0ZXIodyA9PiB3LmRpc2FibGVkKS5sZW5ndGg7XG4gICAgcmV0dXJuIHRoaXMuY2QoKTtcbiAgfVxuXG4gIF9jaGVja0FsbChjaGVja2VkPzogYm9vbGVhbik6IHRoaXMge1xuICAgIGNoZWNrZWQgPSB0eXBlb2YgY2hlY2tlZCA9PT0gJ3VuZGVmaW5lZCcgPyB0aGlzLl9hbGxDaGVja2VkIDogY2hlY2tlZDtcbiAgICB0aGlzLl9kYXRhLmZpbHRlcih3ID0+ICF3LmRpc2FibGVkKS5mb3JFYWNoKGkgPT4gKGkuY2hlY2tlZCA9IGNoZWNrZWQpKTtcbiAgICByZXR1cm4gdGhpcy5fcmVmQ2hlY2soKS5fY2hlY2tOb3RpZnkoKTtcbiAgfVxuXG4gIF9jaGVja1NlbGVjdGlvbihpOiBTVERhdGEsIHZhbHVlOiBib29sZWFuKSB7XG4gICAgaS5jaGVja2VkID0gdmFsdWU7XG4gICAgcmV0dXJuIHRoaXMuX3JlZkNoZWNrKCkuX2NoZWNrTm90aWZ5KCk7XG4gIH1cblxuICBfcm93U2VsZWN0aW9uKHJvdzogU1RDb2x1bW5TZWxlY3Rpb24pOiB0aGlzIHtcbiAgICByb3cuc2VsZWN0KHRoaXMuX2RhdGEpO1xuICAgIHJldHVybiB0aGlzLl9yZWZDaGVjaygpLl9jaGVja05vdGlmeSgpO1xuICB9XG5cbiAgX2NoZWNrTm90aWZ5KCk6IHRoaXMge1xuICAgIGNvbnN0IHJlcyA9IHRoaXMuX2RhdGEuZmlsdGVyKHcgPT4gIXcuZGlzYWJsZWQgJiYgdy5jaGVja2VkID09PSB0cnVlKTtcbiAgICB0aGlzLmNoYW5nZUVtaXQoJ2NoZWNrYm94JywgcmVzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIHJhZGlvXG5cbiAgLyoqIOa4hemZpOaJgOaciSBgcmFkaW9gICovXG4gIGNsZWFyUmFkaW8oKTogdGhpcyB7XG4gICAgdGhpcy5fZGF0YS5maWx0ZXIodyA9PiB3LmNoZWNrZWQpLmZvckVhY2goaXRlbSA9PiAoaXRlbS5jaGVja2VkID0gZmFsc2UpKTtcbiAgICB0aGlzLmNoYW5nZUVtaXQoJ3JhZGlvJywgbnVsbCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBfcmVmUmFkaW8oY2hlY2tlZDogYm9vbGVhbiwgaXRlbTogU1REYXRhKTogdGhpcyB7XG4gICAgLy8gaWYgKGl0ZW0uZGlzYWJsZWQgPT09IHRydWUpIHJldHVybjtcbiAgICB0aGlzLl9kYXRhLmZpbHRlcih3ID0+ICF3LmRpc2FibGVkKS5mb3JFYWNoKGkgPT4gKGkuY2hlY2tlZCA9IGZhbHNlKSk7XG4gICAgaXRlbS5jaGVja2VkID0gY2hlY2tlZDtcbiAgICB0aGlzLmNoYW5nZUVtaXQoJ3JhZGlvJywgaXRlbSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiBidXR0b25zXG5cbiAgX2J0bkNsaWNrKHJlY29yZDogU1REYXRhLCBidG46IFNUQ29sdW1uQnV0dG9uKSB7XG4gICAgaWYgKGJ0bi50eXBlID09PSAnbW9kYWwnIHx8IGJ0bi50eXBlID09PSAnc3RhdGljJykge1xuICAgICAgY29uc3QgeyBtb2RhbCB9ID0gYnRuO1xuICAgICAgY29uc3Qgb2JqID0geyBbbW9kYWwhLnBhcmFtc05hbWUhXTogcmVjb3JkIH07XG4gICAgICAodGhpcy5tb2RhbEhlbHBlcltidG4udHlwZSA9PT0gJ21vZGFsJyA/ICdjcmVhdGUnIDogJ2NyZWF0ZVN0YXRpYyddIGFzIGFueSkoXG4gICAgICAgIG1vZGFsIS5jb21wb25lbnQsXG4gICAgICAgIHsgLi4ub2JqLCAuLi4obW9kYWwhLnBhcmFtcyAmJiBtb2RhbCEucGFyYW1zIShyZWNvcmQpKSB9LFxuICAgICAgICBkZWVwTWVyZ2VLZXkoe30sIHRydWUsIHRoaXMuY29weUNvZy5tb2RhbCwgbW9kYWwpLFxuICAgICAgKVxuICAgICAgICAucGlwZShmaWx0ZXIodyA9PiB0eXBlb2YgdyAhPT0gJ3VuZGVmaW5lZCcpKVxuICAgICAgICAuc3Vic2NyaWJlKHJlcyA9PiB0aGlzLmJ0bkNhbGxiYWNrKHJlY29yZCwgYnRuLCByZXMpKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKGJ0bi50eXBlID09PSAnZHJhd2VyJykge1xuICAgICAgY29uc3QgeyBkcmF3ZXIgfSA9IGJ0bjtcbiAgICAgIGNvbnN0IG9iaiA9IHsgW2RyYXdlciEucGFyYW1zTmFtZSFdOiByZWNvcmQgfTtcbiAgICAgIHRoaXMuZHJhd2VySGVscGVyXG4gICAgICAgIC5jcmVhdGUoXG4gICAgICAgICAgZHJhd2VyIS50aXRsZSEsXG4gICAgICAgICAgZHJhd2VyIS5jb21wb25lbnQsXG4gICAgICAgICAgeyAuLi5vYmosIC4uLihkcmF3ZXIhLnBhcmFtcyAmJiBkcmF3ZXIhLnBhcmFtcyEocmVjb3JkKSkgfSxcbiAgICAgICAgICBkZWVwTWVyZ2VLZXkoe30sIHRydWUsIHRoaXMuY29weUNvZy5kcmF3ZXIsIGRyYXdlciksXG4gICAgICAgIClcbiAgICAgICAgLnBpcGUoZmlsdGVyKHcgPT4gdHlwZW9mIHcgIT09ICd1bmRlZmluZWQnKSlcbiAgICAgICAgLnN1YnNjcmliZShyZXMgPT4gdGhpcy5idG5DYWxsYmFjayhyZWNvcmQsIGJ0biwgcmVzKSk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChidG4udHlwZSA9PT0gJ2xpbmsnKSB7XG4gICAgICBjb25zdCBjbGlja1JlcyA9IHRoaXMuYnRuQ2FsbGJhY2socmVjb3JkLCBidG4pO1xuICAgICAgaWYgKHR5cGVvZiBjbGlja1JlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChjbGlja1JlcywgeyBzdGF0ZTogdGhpcy5yb3V0ZXJTdGF0ZSB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5idG5DYWxsYmFjayhyZWNvcmQsIGJ0bik7XG4gIH1cblxuICBwcml2YXRlIGJ0bkNhbGxiYWNrKHJlY29yZDogU1REYXRhLCBidG46IFNUQ29sdW1uQnV0dG9uLCBtb2RhbD86IGFueSkge1xuICAgIGlmICghYnRuLmNsaWNrKSByZXR1cm47XG4gICAgaWYgKHR5cGVvZiBidG4uY2xpY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICBzd2l0Y2ggKGJ0bi5jbGljaykge1xuICAgICAgICBjYXNlICdsb2FkJzpcbiAgICAgICAgICB0aGlzLmxvYWQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncmVsb2FkJzpcbiAgICAgICAgICB0aGlzLnJlbG9hZCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYnRuLmNsaWNrKHJlY29yZCwgbW9kYWwsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIF9idG5UZXh0KHJlY29yZDogU1REYXRhLCBidG46IFNUQ29sdW1uQnV0dG9uKSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkZXByZWNhdGlvblxuICAgIGlmIChidG4uZm9ybWF0KSB7XG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGRlcHJlY2F0aW9uXG4gICAgICByZXR1cm4gYnRuLmZvcm1hdChyZWNvcmQsIGJ0bik7XG4gICAgfVxuICAgIHJldHVybiB0eXBlb2YgYnRuLnRleHQgPT09ICdmdW5jdGlvbicgPyBidG4udGV4dChyZWNvcmQsIGJ0bikgOiBidG4udGV4dCB8fCAnJztcbiAgfVxuXG4gIF92YWxpZEJ0bnMoYnRuczogU1RDb2x1bW5CdXR0b25bXSwgaXRlbTogU1REYXRhLCBjb2w6IFNUQ29sdW1uKTogU1RDb2x1bW5CdXR0b25bXSB7XG4gICAgcmV0dXJuIGJ0bnMuZmlsdGVyKGJ0biA9PiB7XG4gICAgICBjb25zdCByZXN1bHQgPSBidG4uaWlmIShpdGVtLCBidG4sIGNvbCk7XG4gICAgICBjb25zdCBpc1JlbmRlckRpc2FibGVkID0gYnRuLmlpZkJlaGF2aW9yID09PSAnZGlzYWJsZWQnO1xuICAgICAgYnRuLl9yZXN1bHQgPSByZXN1bHQ7XG4gICAgICBidG4uX2Rpc2FibGVkID0gIXJlc3VsdCAmJiBpc1JlbmRlckRpc2FibGVkO1xuICAgICAgcmV0dXJuIHJlc3VsdCB8fCBpc1JlbmRlckRpc2FibGVkO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gZXhwb3J0XG5cbiAgLyoqXG4gICAqIOWvvOWHuuW9k+WJjemhte+8jOehruS/neW3sue7j+azqOWGjCBgWGxzeE1vZHVsZWBcbiAgICogQHBhcmFtIG5ld0RhdGEg6YeN5paw5oyH5a6a5pWw5o2u77yb6Iul5Li6IGB0cnVlYCDooajnpLrkvb/nlKggYGZpbHRlcmVkRGF0YWAg5pWw5o2uXG4gICAqIEBwYXJhbSBvcHQg6aKd5aSW5Y+C5pWwXG4gICAqL1xuICBleHBvcnQobmV3RGF0YT86IFNURGF0YVtdIHwgdHJ1ZSwgb3B0PzogU1RFeHBvcnRPcHRpb25zKSB7XG4gICAgKG5ld0RhdGEgPT09IHRydWUgPyBmcm9tKHRoaXMuZmlsdGVyZWREYXRhKSA6IG9mKG5ld0RhdGEgfHwgdGhpcy5fZGF0YSkpLnN1YnNjcmliZSgocmVzOiBTVERhdGFbXSkgPT5cbiAgICAgIHRoaXMuZXhwb3J0U3J2LmV4cG9ydCh7XG4gICAgICAgIC4uLm9wdCxcbiAgICAgICAgX2Q6IHJlcyxcbiAgICAgICAgX2M6IHRoaXMuX2NvbHVtbnMsXG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGdldCBjZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMub3JnVGFibGUuY2RrVmlydHVhbFNjcm9sbFZpZXdwb3J0O1xuICB9XG5cbiAgcmVzZXRDb2x1bW5zKG9wdGlvbnM/OiBTVFJlc2V0Q29sdW1uc09wdGlvbikge1xuICAgIGlmIChvcHRpb25zKSB7XG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMuY29sdW1ucyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5jb2x1bW5zID0gb3B0aW9ucy5jb2x1bW5zO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLnBpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLnBpID0gb3B0aW9ucy5waTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5wcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5wcyA9IG9wdGlvbnMucHM7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnJlZnJlc2hDb2x1bW5zKCkubG9hZFBhZ2VEYXRhKCk7XG4gIH1cblxuICBwcml2YXRlIHJlZnJlc2hDb2x1bW5zKCk6IHRoaXMge1xuICAgIHRoaXMuX2NvbHVtbnMgPSB0aGlzLmNvbHVtblNvdXJjZS5wcm9jZXNzKHRoaXMuY29sdW1ucyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcml2YXRlIHNldENsYXNzKCkge1xuICAgIGNvbnN0IHsgdHlwZSwgc3RyaWN0QmVoYXZpb3IgfSA9IHRoaXMud2lkdGhNb2RlO1xuICAgIHVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMucmVuZGVyZXIsIHtcbiAgICAgIFtgc3RgXTogdHJ1ZSxcbiAgICAgIFtgc3RfX3AtJHt0aGlzLnBhZ2UucGxhY2VtZW50fWBdOiB0aGlzLnBhZ2UucGxhY2VtZW50LFxuICAgICAgW2BzdF9fd2lkdGgtJHt0eXBlfWBdOiB0cnVlLFxuICAgICAgW2BzdF9fd2lkdGgtc3RyaWN0LSR7c3RyaWN0QmVoYXZpb3J9YF06IHR5cGUgPT09ICdzdHJpY3QnLFxuICAgICAgW2BhbnQtdGFibGUtcmVwYF06IHRoaXMucmVzcG9uc2l2ZSxcbiAgICAgIFtgYW50LXRhYmxlLXJlcF9faGlkZS1oZWFkZXItZm9vdGVyYF06IHRoaXMucmVzcG9uc2l2ZUhpZGVIZWFkZXJGb290ZXIsXG4gICAgfSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5jb2x1bW5Tb3VyY2UucmVzdG9yZUFsbFJlbmRlcih0aGlzLl9jb2x1bW5zKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW1AgaW4ga2V5b2YgdGhpc10/OiBTaW1wbGVDaGFuZ2UgfSAmIFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5jb2x1bW5zKSB7XG4gICAgICB0aGlzLnJlZnJlc2hDb2x1bW5zKCk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLmRhdGEgJiYgY2hhbmdlcy5kYXRhLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgdGhpcy5sb2FkUGFnZURhdGEoKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMubG9hZGluZykge1xuICAgICAgdGhpcy5fbG9hZGluZyA9IGNoYW5nZXMubG9hZGluZy5jdXJyZW50VmFsdWU7XG4gICAgfVxuICAgIHRoaXMuc2V0Q2xhc3MoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgdW5zdWJzY3JpYmUkIH0gPSB0aGlzO1xuICAgIHVuc3Vic2NyaWJlJC5uZXh0KCk7XG4gICAgdW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==