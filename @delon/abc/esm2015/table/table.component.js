/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Inject, Input, Output, EventEmitter, Renderer2, ElementRef, TemplateRef, Optional, ChangeDetectionStrategy, ChangeDetectorRef, } from '@angular/core';
import { DecimalPipe, DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { filter } from 'rxjs/operators';
import { CNCurrencyPipe, DatePipe, YNPipe, ModalHelper, ALAIN_I18N_TOKEN, DrawerHelper, DelonLocaleService, } from '@delon/theme';
import { deepCopy, toBoolean, updateHostClass, InputBoolean, InputNumber, } from '@delon/util';
import { STConfig } from './table.config';
import { STExport } from './table-export';
import { STColumnSource } from './table-column-source';
import { STRowSource } from './table-row.directive';
import { STDataSource } from './table-data-source';
export class STComponent {
    //#endregion
    /**
     * @param {?} cd
     * @param {?} cog
     * @param {?} router
     * @param {?} el
     * @param {?} renderer
     * @param {?} exportSrv
     * @param {?} i18nSrv
     * @param {?} modalHelper
     * @param {?} drawerHelper
     * @param {?} doc
     * @param {?} columnSource
     * @param {?} dataSource
     * @param {?} delonI18n
     */
    constructor(cd, cog, router, el, renderer, exportSrv, i18nSrv, modalHelper, drawerHelper, doc, columnSource, dataSource, delonI18n) {
        this.cd = cd;
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
        this.totalTpl = ``;
        this.locale = {};
        this._data = [];
        this._isPagination = true;
        this._allChecked = false;
        this._indeterminate = false;
        this._columns = [];
        /**
         * 列描述
         */
        this.columns = [];
        /**
         * 每页数量，当设置为 `0` 表示不分页，默认：`10`
         */
        this.ps = 10;
        /**
         * 当前页码
         */
        this.pi = 1;
        /**
         * 数据总量
         */
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
         * 请求异常时回调
         */
        this.error = new EventEmitter();
        /**
         * 变化时回调，包括：`pi`、`ps`、`checkbox`、`radio`、`sort`、`filter`、`click`、`dblClick` 变动
         */
        this.change = new EventEmitter();
        /**
         * 行单击多少时长之类为双击（单位：毫秒），默认：`200`
         */
        this.rowClickTime = 200;
        // #endregion
        // #region compatible
        /**
         * checkbox变化时回调，参数为当前所选清单
         * @deprecated 使用 `change` 替代
         */
        this.checkboxChange = new EventEmitter();
        /**
         * radio变化时回调，参数为当前所选
         * @deprecated 使用 `change` 替代
         */
        this.radioChange = new EventEmitter();
        /**
         * 排序回调
         * @deprecated 使用 `change` 替代
         */
        this.sortChange = new EventEmitter();
        /**
         * 过滤变化时回调
         * @deprecated 使用 `change` 替代
         */
        this.filterChange = new EventEmitter();
        /**
         * 行单击回调
         * @deprecated 使用 `change` 替代
         */
        this.rowClick = new EventEmitter();
        /**
         * 行双击回调
         * @deprecated 使用 `change` 替代
         */
        this.rowDblClick = new EventEmitter();
        this.rowClickCount = 0;
        this.delonI18n$ = this.delonI18n.change.subscribe(() => {
            this.locale = this.delonI18n.getData('st');
            if (this._columns.length > 0) {
                this.page = this.clonePage;
                this.cd.detectChanges();
            }
        });
        Object.assign(this, deepCopy(cog));
        if (i18nSrv) {
            this.i18n$ = i18nSrv.change
                .pipe(filter(() => this._columns.length > 0))
                .subscribe(() => this.updateColumns());
        }
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
        const { req } = this.cog;
        /** @type {?} */
        const item = Object.assign({}, req, value);
        if (item.reName == null) {
            item.reName = deepCopy(req.reName);
        }
        this._req = item;
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
        const { res } = this.cog;
        /** @type {?} */
        const item = Object.assign({}, res, value);
        item.reName = Object.assign({}, res.reName, item.reName);
        if (!Array.isArray(item.reName.list))
            item.reName.list = item.reName.list.split('.');
        if (!Array.isArray(item.reName.total))
            item.reName.total = item.reName.total.split('.');
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
        const { page } = this.cog;
        /** @type {?} */
        const item = Object.assign({}, deepCopy(page), value);
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
        this._multiSort = Object.assign((/** @type {?} */ ({
            key: 'sort',
            separator: '-',
            nameSeparator: '.',
        })), typeof value === 'object' ? value : {});
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
    //#region data
    /**
     * @return {?}
     */
    _load() {
        const { pi, ps, data, req, res, page, total, multiSort } = this;
        this.loading = true;
        return this.dataSource
            .process({
            pi,
            ps,
            total,
            data,
            req,
            res,
            page,
            columns: this._columns,
            multiSort,
        })
            .then(result => {
            this.loading = false;
            if (typeof result.pi !== 'undefined') {
                this.pi = result.pi;
            }
            if (typeof result.total !== 'undefined') {
                this.total = result.total;
            }
            if (typeof result.pageShow !== 'undefined') {
                this._isPagination = result.pageShow;
            }
            this._data = result.list;
            return this._data;
        })
            .then(() => this._refCheck())
            .catch(error => {
            this.loading = false;
            this.error.emit({ type: 'req', error });
        });
    }
    /**
     * 根据页码重新加载数据
     *
     * @param {?=} pi 指定当前页码，默认：`1`
     * @param {?=} extraParams 重新指定 `extraParams` 值
     * @param {?=} options 选项
     * @return {?}
     */
    load(pi = 1, extraParams, options) {
        if (pi !== -1)
            this.pi = pi;
        if (typeof extraParams !== 'undefined') {
            this._req.params =
                options && options.merge
                    ? Object.assign(this._req.params, extraParams)
                    : extraParams;
        }
        this._change('pi');
    }
    /**
     * 重新刷新当前页
     * @param {?=} extraParams 重新指定 `extraParams` 值
     * @param {?=} options
     * @return {?}
     */
    reload(extraParams, options) {
        this.load(-1, extraParams, options);
    }
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
    reset(extraParams, options) {
        this.clearCheck()
            .clearRadio()
            .clearFilter()
            .clearSort();
        this.load(1, extraParams, options);
    }
    /**
     * @return {?}
     */
    _toTop() {
        if (!this.page.toTop)
            return;
        /** @type {?} */
        const el = (/** @type {?} */ (this.el.nativeElement));
        if (this.scroll) {
            el.querySelector('.ant-table-body').scrollTo(0, 0);
            return;
        }
        el.scrollIntoView();
        // fix header height
        this.doc.documentElement.scrollTop -= this.page.toTopOffset;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    _change(type) {
        this._load().then(() => {
            this._toTop();
        });
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
        const res = col.click(item, this);
        if (typeof res === 'string') {
            this.router.navigateByUrl(res);
        }
        return false;
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
        ++this.rowClickCount;
        if (this.rowClickCount !== 1)
            return;
        setTimeout(() => {
            /** @type {?} */
            const data = { e, item, index };
            if (this.rowClickCount === 1) {
                this.changeEmit('click', data);
                // @deprecated as of v3
                this.rowClick.emit(data);
            }
            else {
                this.changeEmit('dblClick', data);
                // @deprecated as of v3
                this.rowDblClick.emit(data);
            }
            this.rowClickCount = 0;
        }, this.rowClickTime);
    }
    /**
     * 移除某行数据
     * @param {?} data
     * @return {?}
     */
    removeRow(data) {
        if (!Array.isArray(data)) {
            data = [data];
        }
        ((/** @type {?} */ (data))).map(item => this._data.indexOf(item))
            .filter(pos => pos !== -1)
            .forEach(pos => this._data.splice(pos, 1));
        this.cd.detectChanges();
    }
    //#endregion
    //#region sort
    /**
     * @param {?} col
     * @param {?} idx
     * @param {?} value
     * @return {?}
     */
    sort(col, idx, value) {
        if (this.multiSort) {
            col._sort.default = value;
        }
        else {
            this._columns.forEach((item, index) => (item._sort.default = index === idx ? value : null));
        }
        this._load();
        /** @type {?} */
        const res = {
            value,
            map: this.dataSource.getReqSortMap(this.multiSort, this._columns),
            column: col,
        };
        this.changeEmit('sort', res);
        // @deprecated as of v3
        this.sortChange.emit(res);
    }
    /**
     * @return {?}
     */
    clearSort() {
        this._columns.forEach(item => (item._sort.default = null));
    }
    //#endregion
    //#region filter
    /**
     * @param {?} col
     * @return {?}
     */
    handleFilter(col) {
        col.filter.default = col.filter.menus.findIndex(w => w.checked) !== -1;
        this._load();
        this.changeEmit('filter', col);
        // @deprecated as of v3
        this.filterChange.emit(col);
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
     * @return {?}
     */
    _filterClear(col) {
        col.filter.menus.forEach(i => (i.checked = false));
        this.handleFilter(col);
    }
    /**
     * @param {?} col
     * @param {?} item
     * @param {?} checked
     * @return {?}
     */
    _filterRadio(col, item, checked) {
        col.filter.menus.forEach(i => (i.checked = false));
        item.checked = checked;
    }
    /**
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    clearFilter() {
        (/** @type {?} */ (this))._columns
            .filter(w => w.filter && w.filter.default === true)
            .forEach(col => {
            col.filter.default = false;
            col.filter.menus.forEach(f => (f.checked = false));
        });
        return (/** @type {?} */ (this));
    }
    //#endregion
    //#region checkbox
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
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    _refCheck() {
        /** @type {?} */
        const validData = (/** @type {?} */ (this))._data.filter(w => !w.disabled);
        /** @type {?} */
        const checkedList = validData.filter(w => w.checked === true);
        (/** @type {?} */ (this))._allChecked =
            checkedList.length > 0 && checkedList.length === validData.length;
        /** @type {?} */
        const allUnChecked = validData.every(value => !value.checked);
        (/** @type {?} */ (this))._indeterminate = !(/** @type {?} */ (this))._allChecked && !allUnChecked;
        (/** @type {?} */ (this)).cd.detectChanges();
        return (/** @type {?} */ (this));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?=} checked
     * @return {THIS}
     */
    _checkAll(checked) {
        checked = typeof checked === 'undefined' ? (/** @type {?} */ (this))._allChecked : checked;
        (/** @type {?} */ (this))._data.filter(w => !w.disabled).forEach(i => (i.checked = checked));
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
        const res = (/** @type {?} */ (this))._data.filter(w => !w.disabled && w.checked === true);
        (/** @type {?} */ (this)).changeEmit('checkbox', res);
        // @deprecated as of v3
        (/** @type {?} */ (this)).checkboxChange.emit(res);
        return (/** @type {?} */ (this));
    }
    //#endregion
    //#region radio
    /**
     * 清除所有 `radio`
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    clearRadio() {
        (/** @type {?} */ (this))._data.filter(w => w.checked).forEach(item => (item.checked = false));
        (/** @type {?} */ (this)).changeEmit('radio', null);
        // @deprecated as of v3
        (/** @type {?} */ (this)).radioChange.emit(null);
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
        (/** @type {?} */ (this))._data.filter(w => !w.disabled).forEach(i => (i.checked = false));
        item.checked = checked;
        (/** @type {?} */ (this)).changeEmit('radio', item);
        // @deprecated as of v3
        (/** @type {?} */ (this)).radioChange.emit(item);
        return (/** @type {?} */ (this));
    }
    //#endregion
    //#region buttons
    /**
     * @param {?} e
     * @param {?} record
     * @param {?} btn
     * @return {?}
     */
    _btnClick(e, record, btn) {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        if (btn.type === 'modal' || btn.type === 'static') {
            /** @type {?} */
            const obj = {};
            const { modal } = btn;
            obj[modal.paramsName] = record;
            /** @type {?} */
            const options = Object.assign({}, modal);
            ((/** @type {?} */ (this.modalHelper[btn.type === 'modal' ? 'create' : 'createStatic'])))(modal.component, Object.assign(obj, modal.params && modal.params(record)), options)
                .pipe(filter(w => typeof w !== 'undefined'))
                .subscribe(res => this.btnCallback(record, btn, res));
            return;
        }
        else if (btn.type === 'drawer') {
            /** @type {?} */
            const obj = {};
            const { drawer } = btn;
            obj[drawer.paramsName] = record;
            this.drawerHelper
                .create(drawer.title, drawer.component, Object.assign(obj, drawer.params && drawer.params(record)), Object.assign({}, drawer))
                .pipe(filter(w => typeof w !== 'undefined'))
                .subscribe(res => this.btnCallback(record, btn, res));
            return;
        }
        else if (btn.type === 'link') {
            /** @type {?} */
            const clickRes = this.btnCallback(record, btn);
            if (typeof clickRes === 'string') {
                this.router.navigateByUrl(clickRes);
            }
            return;
        }
        this.btnCallback(record, btn);
    }
    /**
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
        if (btn.format)
            return btn.format(record, btn);
        return btn.text;
    }
    /**
     * @param {?} item
     * @param {?} col
     * @return {?}
     */
    _validBtns(item, col) {
        return col.buttons.filter(btn => btn.iif(item, btn, col));
    }
    //#endregion
    //#region export
    /**
     * 导出当前页，确保已经注册 `XlsxModule`
     * @param {?=} newData 重新指定数据，例如希望导出所有数据非常有用
     * @param {?=} opt 额外参数
     * @return {?}
     */
    export(newData, opt) {
        (newData ? of(newData) : of(this._data)).subscribe((res) => this.exportSrv.export(Object.assign({}, opt, (/** @type {?} */ ({
            _d: res,
            _c: this._columns,
        })))));
    }
    //#endregion
    /**
     * @return {?}
     */
    updateColumns() {
        this._columns = this.columnSource.process(this.columns);
    }
    /**
     * @return {?}
     */
    setClass() {
        updateHostClass(this.el.nativeElement, this.renderer, {
            [`st`]: true,
            [`st__p-${this.page.placement}`]: this.page.placement,
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
            this.updateColumns();
        }
        if (changes.data && changes.data.currentValue) {
            this._load();
        }
        this.setClass();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.delonI18n$.unsubscribe();
        if (this.i18n$)
            this.i18n$.unsubscribe();
    }
}
STComponent.decorators = [
    { type: Component, args: [{
                selector: 'st',
                template: "<ng-template #btnTpl let-i let-btn=\"btn\" let-sub=\"sub\">\n  <nz-popconfirm *ngIf=\"btn.pop === true\" [nzTitle]=\"btn.popTitle\" (nzOnConfirm)=\"_btnClick($event, i, btn)\">\n    <a *ngIf=\"!sub\" nz-popconfirm>\n      <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n    </a>\n    <span *ngIf=\"sub\" nz-popconfirm>\n      <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n    </span>\n  </nz-popconfirm>\n  <ng-container *ngIf=\"btn.pop !== true\">\n    <a *ngIf=\"!sub\" (click)=\"_btnClick($event, i, btn)\">\n      <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n    </a>\n    <span *ngIf=\"sub\" (click)=\"_btnClick($event, i, btn)\">\n      <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n    </span>\n  </ng-container>\n</ng-template>\n<ng-template #btnTextTpl let-i let-btn=\"btn\">\n  <i *ngIf=\"btn.icon\" nz-icon [type]=\"btn.icon.type\" [theme]=\"btn.icon.theme\" [spin]=\"btn.icon.spin\" [twoToneColor]=\"btn.icon.twoToneColor\" [iconfont]=\"btn.icon.iconfont\"></i>\n  <span [innerHTML]=\"_btnText(i, btn)\" [ngClass]=\"{'pl-xs': btn.icon}\"></span>\n</ng-template>\n<nz-table [nzData]=\"_data\"\n  [(nzPageIndex)]=\"pi\" (nzPageIndexChange)=\"_change('pi')\"\n  [(nzPageSize)]=\"ps\" (nzPageSizeChange)=\"_change('ps')\"\n  [nzTotal]=\"total\"\n  [nzShowPagination]=\"_isPagination\"\n  [nzFrontPagination]=\"false\"\n  [nzBordered]=\"bordered\"\n  [nzSize]=\"size\"\n  [nzLoading]=\"loading\"\n  [nzLoadingDelay]=\"loadingDelay\"\n  [nzScroll]=\"scroll\"\n  [nzTitle]=\"header\" [nzFooter]=\"footer\" [nzNoResult]=\"noResult\"\n  [nzPageSizeOptions]=\"page.pageSizes\"\n  [nzShowQuickJumper]=\"page.showQuickJumper\"\n  [nzShowSizeChanger]=\"page.showSize\"\n  [nzShowTotal]=\"totalTpl\">\n  <thead class=\"st__head\">\n    <tr>\n      <th *ngIf=\"expand\" [nzShowExpand]=\"expand\"></th>\n      <th *ngFor=\"let c of _columns; let index=index\" [nzWidth]=\"c.width\" [nzLeft]=\"c._left\" [nzRight]=\"c._right\" [ngClass]=\"c.className\"\n        [attr.colspan]=\"c.colSpan\" [attr.data-col]=\"c.indexKey\"\n        [nzShowSort]=\"c._sort.enabled\" [nzSort]=\"c._sort.default\" (nzSortChange)=\"sort(c, index, $event)\"\n        nzCustomFilter>\n        <ng-template #renderTitle [ngTemplateOutlet]=\"c.__renderTitle\" [ngTemplateOutletContext]=\"{$implicit: c, index: index }\"></ng-template>\n        <ng-container *ngIf=\"!c.__renderTitle; else renderTitle\">\n          <ng-container [ngSwitch]=\"c.type\">\n            <ng-container *ngSwitchCase=\"'checkbox'\">\n              <label nz-checkbox class=\"st__checkall\" [(ngModel)]=\"_allChecked\" [nzIndeterminate]=\"_indeterminate\" (ngModelChange)=\"_checkAll()\"></label>\n              <nz-dropdown *ngIf=\"c.selections.length\" class=\"st__selection\">\n                <span nz-dropdown>\n                  <i nz-icon type=\"down\"></i>\n                </span>\n                <ul nz-menu>\n                  <li nz-menu-item *ngFor=\"let rw of c.selections\" (click)=\"_rowSelection(rw)\" [innerHTML]=\"rw.text\">\n                  </li>\n                </ul>\n              </nz-dropdown>\n            </ng-container>\n            <ng-container *ngSwitchDefault>\n              <span [innerHTML]=\"c.title\"></span>\n            </ng-container>\n          </ng-container>\n          <nz-dropdown *ngIf=\"c.filter\"\n            class=\"st__filter\" nzTrigger=\"click\" [hasFilterButton]=\"true\" [nzClickHide]=\"false\"\n            [(nzVisible)]=\"c.filter.visible\">\n            <i nz-icon [type]=\"c.filter.icon\" theme=\"fill\"\n              [class.ant-table-filter-selected]=\"c.filter.default\"\n              [class.ant-table-filter-open]=\"c.filter.visible\" nz-dropdown></i>\n            <ul nz-menu>\n              <ng-container *ngIf=\"c.filter.multiple\">\n                <li nz-menu-item *ngFor=\"let filter of c.filter.menus\">\n                  <label nz-checkbox [(ngModel)]=\"filter.checked\">{{filter.text}}</label>\n                </li>\n              </ng-container>\n              <ng-container *ngIf=\"!c.filter.multiple\">\n                <li nz-menu-item *ngFor=\"let filter of c.filter.menus\">\n                  <label nz-radio [ngModel]=\"filter.checked\" (ngModelChange)=\"_filterRadio(c, filter, $event)\">{{filter.text}}</label>\n                </li>\n              </ng-container>\n            </ul>\n            <div class=\"ant-table-filter-dropdown-btns\">\n              <a class=\"ant-table-filter-dropdown-link confirm\" (click)=\"c.filter.visible = false\">\n                <span (click)=\"_filterConfirm(c)\">{{c.filter.confirmText}}</span>\n              </a>\n              <a class=\"ant-table-filter-dropdown-link clear\" (click)=\"c.filter.visible = false\">\n                <span (click)=\"_filterClear(c)\">{{c.filter.clearText}}</span>\n              </a>\n            </div>\n          </nz-dropdown>\n        </ng-container>\n      </th>\n    </tr>\n  </thead>\n  <tbody class=\"st__body\">\n    <ng-container *ngFor=\"let i of _data; let index=index\">\n      <tr [attr.data-index]=\"index\" (click)=\"_rowClick($event, i, index)\">\n        <td *ngIf=\"expand\" [nzShowExpand]=\"expand\" [(nzExpand)]=\"i.expand\"></td>\n        <td *ngFor=\"let c of _columns; let cIdx=index\" [nzLeft]=\"c._left\" [nzRight]=\"c._right\" [nzCheckbox]=\"c.type === 'checkbox'\" [ngClass]=\"c.className\"\n          [attr.colspan]=\"c.colSpan\">\n          <span class=\"ant-table-rep__title\" [innerHTML]=\"c.title\"></span>\n          <ng-template #render [ngTemplateOutlet]=\"c.__render\" [ngTemplateOutletContext]=\"{$implicit: i, index: index, column: c }\"></ng-template>\n          <ng-container *ngIf=\"!c.__render; else render\">\n            <ng-container [ngSwitch]=\"c.type\">\n              <label *ngSwitchCase=\"'checkbox'\" nz-checkbox [nzDisabled]=\"i.disabled\" [ngModel]=\"i.checked\" (ngModelChange)=\"_checkSelection(i, $event)\"></label>\n              <label *ngSwitchCase=\"'radio'\" nz-radio [nzDisabled]=\"i.disabled\" [ngModel]=\"i.checked\" (ngModelChange)=\"_refRadio($event, i)\"></label>\n              <a *ngSwitchCase=\"'link'\" (click)=\"_click($event, i, c)\" [innerHTML]=\"i._values[cIdx]\"></a>\n              <nz-tag *ngSwitchCase=\"'tag'\" [nzColor]=\"c.tag[i._values[cIdx]].color\">{{c.tag[i._values[cIdx]].text || i._values[cIdx]}}</nz-tag>\n              <nz-badge *ngSwitchCase=\"'badge'\" [nzStatus]=\"c.badge[i._values[cIdx]].color\" [nzText]=\"c.badge[i._values[cIdx]].text || i._values[cIdx]\"></nz-badge>\n              <span *ngSwitchDefault [innerHTML]=\"i._values[cIdx]\"></span>\n            </ng-container>\n            <ng-container *ngFor=\"let btn of _validBtns(i, c); let last=last\">\n              <nz-dropdown *ngIf=\"btn.children.length > 0\">\n                <a class=\"ant-dropdown-link\" nz-dropdown>\n                  <span [innerHTML]=\"_btnText(i, btn)\"></span>\n                  <i nz-icon type=\"down\"></i>\n                </a>\n                <ul nz-menu>\n                  <ng-container *ngFor=\"let subBtn of btn.children\">\n                    <li nz-menu-item *ngIf=\"subBtn.iif(i, subBtn, c)\">\n                      <ng-template [ngTemplateOutlet]=\"btnTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: subBtn, sub: true }\"></ng-template>\n                    </li>\n                  </ng-container>\n                </ul>\n              </nz-dropdown>\n              <ng-container *ngIf=\"btn.children.length == 0\">\n                <ng-template [ngTemplateOutlet]=\"btnTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn, sub: false }\"></ng-template>\n              </ng-container>\n              <nz-divider *ngIf=\"!last\" nzType=\"vertical\"></nz-divider>\n            </ng-container>\n            <ng-template [ngIf]=\"!c.__renderExpanded\" [ngTemplateOutlet]=\"c.__renderExpanded\" [ngTemplateOutletContext]=\"{$implicit: i, index: index, column: c }\"></ng-template>\n          </ng-container>\n        </td>\n      </tr>\n      <tr [nzExpand]=\"i.expand\">\n        <td></td>\n        <td [attr.colspan]=\"_columns.length\">\n          <ng-template [ngTemplateOutlet]=\"expand\" [ngTemplateOutletContext]=\"{$implicit: i, index: index }\"></ng-template>\n        </td>\n      </tr>\n    </ng-container>\n    <ng-template [ngIf]=\"!loading\" [ngTemplateOutlet]=\"body\"></ng-template>\n  </tbody>\n  <ng-template #totalTpl let-range=\"range\" let-total>{{ renderTotal(total, range) }}</ng-template>\n</nz-table>\n",
                providers: [
                    STDataSource,
                    STRowSource,
                    STColumnSource,
                    STExport,
                    CNCurrencyPipe,
                    DatePipe,
                    YNPipe,
                    DecimalPipe,
                ],
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
STComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: STConfig },
    { type: Router },
    { type: ElementRef },
    { type: Renderer2 },
    { type: STExport },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [ALAIN_I18N_TOKEN,] }] },
    { type: ModalHelper },
    { type: DrawerHelper },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: STColumnSource },
    { type: STDataSource },
    { type: DelonLocaleService }
];
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
    multiSort: [{ type: Input }],
    header: [{ type: Input }],
    footer: [{ type: Input }],
    body: [{ type: Input }],
    expand: [{ type: Input }],
    noResult: [{ type: Input }],
    widthConfig: [{ type: Input }],
    error: [{ type: Output }],
    change: [{ type: Output }],
    rowClickTime: [{ type: Input }],
    responsiveHideHeaderFooter: [{ type: Input }],
    checkboxChange: [{ type: Output }],
    radioChange: [{ type: Output }],
    sortChange: [{ type: Output }],
    filterChange: [{ type: Output }],
    rowClick: [{ type: Output }],
    rowDblClick: [{ type: Output }]
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
    InputNumber(),
    tslib_1.__metadata("design:type", Object)
], STComponent.prototype, "rowClickTime", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], STComponent.prototype, "responsiveHideHeaderFooter", void 0);
if (false) {
    /** @type {?} */
    STComponent.prototype.i18n$;
    /** @type {?} */
    STComponent.prototype.delonI18n$;
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
    /**
     * 数据源
     * @type {?}
     */
    STComponent.prototype.data;
    /** @type {?} */
    STComponent.prototype._req;
    /** @type {?} */
    STComponent.prototype._res;
    /**
     * 列描述
     * @type {?}
     */
    STComponent.prototype.columns;
    /**
     * 每页数量，当设置为 `0` 表示不分页，默认：`10`
     * @type {?}
     */
    STComponent.prototype.ps;
    /**
     * 当前页码
     * @type {?}
     */
    STComponent.prototype.pi;
    /**
     * 数据总量
     * @type {?}
     */
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
    /** @type {?} */
    STComponent.prototype._multiSort;
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
     * 行单击多少时长之类为双击（单位：毫秒），默认：`200`
     * @type {?}
     */
    STComponent.prototype.rowClickTime;
    /** @type {?} */
    STComponent.prototype.responsiveHideHeaderFooter;
    /**
     * checkbox变化时回调，参数为当前所选清单
     * @deprecated 使用 `change` 替代
     * @type {?}
     */
    STComponent.prototype.checkboxChange;
    /**
     * radio变化时回调，参数为当前所选
     * @deprecated 使用 `change` 替代
     * @type {?}
     */
    STComponent.prototype.radioChange;
    /**
     * 排序回调
     * @deprecated 使用 `change` 替代
     * @type {?}
     */
    STComponent.prototype.sortChange;
    /**
     * 过滤变化时回调
     * @deprecated 使用 `change` 替代
     * @type {?}
     */
    STComponent.prototype.filterChange;
    /**
     * 行单击回调
     * @deprecated 使用 `change` 替代
     * @type {?}
     */
    STComponent.prototype.rowClick;
    /**
     * 行双击回调
     * @deprecated 使用 `change` 替代
     * @type {?}
     */
    STComponent.prototype.rowDblClick;
    /** @type {?} */
    STComponent.prototype.rowClickCount;
    /** @type {?} */
    STComponent.prototype.cd;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlbG9uL2FiYy90YWJsZS8iLCJzb3VyY2VzIjpbInRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsTUFBTSxFQUNOLEtBQUssRUFDTCxNQUFNLEVBSU4sWUFBWSxFQUNaLFNBQVMsRUFDVCxVQUFVLEVBQ1YsV0FBVyxFQUVYLFFBQVEsRUFFUix1QkFBdUIsRUFDdkIsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBNEIsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QyxPQUFPLEVBQ0wsY0FBYyxFQUNkLFFBQVEsRUFDUixNQUFNLEVBQ04sV0FBVyxFQUVYLGdCQUFnQixFQUVoQixZQUFZLEVBRVosa0JBQWtCLEdBQ25CLE1BQU0sY0FBYyxDQUFDO0FBQ3RCLE9BQU8sRUFDTCxRQUFRLEVBQ1IsU0FBUyxFQUNULGVBQWUsRUFDZixZQUFZLEVBQ1osV0FBVyxHQUNaLE1BQU0sYUFBYSxDQUFDO0FBbUJyQixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDMUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBa0JuRCxNQUFNLE9BQU8sV0FBVzs7Ozs7Ozs7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LHlCQUVROzs7OztJQUVSLHlCQUVPOzs7OztJQUVQLDRCQUVVOztJQW9CViw0QkFBc0I7Ozs7O0lBRXRCLDhCQUVnQjs7Ozs7SUFFaEIsbUNBRWlCOzs7OztJQUVqQiwrQkFFaUI7Ozs7O0lBRWpCLDJCQUNxQzs7Ozs7SUFFckMsNkJBQ21DOztJQW9CbkMsaUNBQWdDOzs7OztJQUVoQyw2QkFDbUM7Ozs7O0lBRW5DLDZCQUNtQzs7Ozs7SUFFbkMsMkJBQ3dCOzs7OztJQUV4Qiw2QkFDMEQ7O0lBQzFELCtCQUNxQzs7SUFDckMsa0NBQ3NCOzs7OztJQUV0Qiw0QkFDNkM7Ozs7O0lBSTdDLDZCQUMrQzs7Ozs7SUFFL0MsbUNBRW1COztJQUVuQixpREFFb0M7Ozs7OztJQVdwQyxxQ0FDdUQ7Ozs7OztJQU12RCxrQ0FDa0Q7Ozs7OztJQU1sRCxpQ0FDOEM7Ozs7OztJQU05QyxtQ0FDcUQ7Ozs7OztJQU1yRCwrQkFDeUQ7Ozs7OztJQU16RCxrQ0FDNEQ7O0lBdUs1RCxvQ0FBMEI7O0lBbkt4Qix5QkFBNkI7O0lBQzdCLDBCQUFxQjs7SUFDckIsNkJBQXNCOztJQUN0Qix5QkFBc0I7O0lBQ3RCLCtCQUEyQjs7SUFDM0IsZ0NBQTJCOztJQUkzQixrQ0FBZ0M7O0lBQ2hDLG1DQUFrQzs7SUFDbEMsMEJBQWtDOztJQUNsQyxtQ0FBb0M7O0lBQ3BDLGlDQUFnQzs7SUFDaEMsZ0NBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIE9uRGVzdHJveSxcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBFdmVudEVtaXR0ZXIsXG4gIFJlbmRlcmVyMixcbiAgRWxlbWVudFJlZixcbiAgVGVtcGxhdGVSZWYsXG4gIFNpbXBsZUNoYW5nZSxcbiAgT3B0aW9uYWwsXG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEZWNpbWFsUGlwZSwgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7XG4gIENOQ3VycmVuY3lQaXBlLFxuICBEYXRlUGlwZSxcbiAgWU5QaXBlLFxuICBNb2RhbEhlbHBlcixcbiAgTW9kYWxIZWxwZXJPcHRpb25zLFxuICBBTEFJTl9JMThOX1RPS0VOLFxuICBBbGFpbkkxOE5TZXJ2aWNlLFxuICBEcmF3ZXJIZWxwZXIsXG4gIERyYXdlckhlbHBlck9wdGlvbnMsXG4gIERlbG9uTG9jYWxlU2VydmljZSxcbn0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7XG4gIGRlZXBDb3B5LFxuICB0b0Jvb2xlYW4sXG4gIHVwZGF0ZUhvc3RDbGFzcyxcbiAgSW5wdXRCb29sZWFuLFxuICBJbnB1dE51bWJlcixcbn0gZnJvbSAnQGRlbG9uL3V0aWwnO1xuXG5pbXBvcnQge1xuICBTVENvbHVtbixcbiAgU1RDaGFuZ2UsXG4gIFNUQ29sdW1uU2VsZWN0aW9uLFxuICBTVENvbHVtbkZpbHRlck1lbnUsXG4gIFNURGF0YSxcbiAgU1RDb2x1bW5CdXR0b24sXG4gIFNURXhwb3J0T3B0aW9ucyxcbiAgU1RNdWx0aVNvcnQsXG4gIFNUUmVxLFxuICBTVEVycm9yLFxuICBTVENoYW5nZVR5cGUsXG4gIFNUQ2hhbmdlUm93Q2xpY2ssXG4gIFNUUmVzLFxuICBTVFBhZ2UsXG4gIFNUTG9hZE9wdGlvbnMsXG59IGZyb20gJy4vdGFibGUuaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBTVENvbmZpZyB9IGZyb20gJy4vdGFibGUuY29uZmlnJztcbmltcG9ydCB7IFNURXhwb3J0IH0gZnJvbSAnLi90YWJsZS1leHBvcnQnO1xuaW1wb3J0IHsgU1RDb2x1bW5Tb3VyY2UgfSBmcm9tICcuL3RhYmxlLWNvbHVtbi1zb3VyY2UnO1xuaW1wb3J0IHsgU1RSb3dTb3VyY2UgfSBmcm9tICcuL3RhYmxlLXJvdy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU1REYXRhU291cmNlIH0gZnJvbSAnLi90YWJsZS1kYXRhLXNvdXJjZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAgU1REYXRhU291cmNlLFxuICAgIFNUUm93U291cmNlLFxuICAgIFNUQ29sdW1uU291cmNlLFxuICAgIFNURXhwb3J0LFxuICAgIENOQ3VycmVuY3lQaXBlLFxuICAgIERhdGVQaXBlLFxuICAgIFlOUGlwZSxcbiAgICBEZWNpbWFsUGlwZSxcbiAgXSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBTVENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBpMThuJDogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIGRlbG9uSTE4biQ6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSB0b3RhbFRwbCA9IGBgO1xuICBwcml2YXRlIGxvY2FsZTogYW55ID0ge307XG4gIHByaXZhdGUgY2xvbmVQYWdlOiBTVFBhZ2U7XG4gIF9kYXRhOiBTVERhdGFbXSA9IFtdO1xuICBfaXNQYWdpbmF0aW9uID0gdHJ1ZTtcbiAgX2FsbENoZWNrZWQgPSBmYWxzZTtcbiAgX2luZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgX2NvbHVtbnM6IFNUQ29sdW1uW10gPSBbXTtcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIC8qKiDmlbDmja7mupAgKi9cbiAgQElucHV0KClcbiAgZGF0YTogc3RyaW5nIHwgU1REYXRhW10gfCBPYnNlcnZhYmxlPFNURGF0YVtdPjtcbiAgLyoqIOivt+axguS9k+mFjee9riAqL1xuICBASW5wdXQoKVxuICBnZXQgcmVxKCkge1xuICAgIHJldHVybiB0aGlzLl9yZXE7XG4gIH1cbiAgc2V0IHJlcSh2YWx1ZTogU1RSZXEpIHtcbiAgICBjb25zdCB7IHJlcSB9ID0gdGhpcy5jb2c7XG4gICAgY29uc3QgaXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIHJlcSwgdmFsdWUpO1xuICAgIGlmIChpdGVtLnJlTmFtZSA9PSBudWxsKSB7XG4gICAgICBpdGVtLnJlTmFtZSA9IGRlZXBDb3B5KHJlcS5yZU5hbWUpO1xuICAgIH1cbiAgICB0aGlzLl9yZXEgPSBpdGVtO1xuICB9XG4gIHByaXZhdGUgX3JlcTogU1RSZXE7XG4gIC8qKiDov5Tlm57kvZPphY3nva4gKi9cbiAgQElucHV0KClcbiAgZ2V0IHJlcygpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzO1xuICB9XG4gIHNldCByZXModmFsdWU6IFNUUmVzKSB7XG4gICAgY29uc3QgeyByZXMgfSA9IHRoaXMuY29nO1xuICAgIGNvbnN0IGl0ZW0gPSBPYmplY3QuYXNzaWduKHt9LCByZXMsIHZhbHVlKTtcbiAgICBpdGVtLnJlTmFtZSA9IE9iamVjdC5hc3NpZ24oe30sIHJlcy5yZU5hbWUsIGl0ZW0ucmVOYW1lKTtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoaXRlbS5yZU5hbWUubGlzdCkpXG4gICAgICBpdGVtLnJlTmFtZS5saXN0ID0gaXRlbS5yZU5hbWUubGlzdC5zcGxpdCgnLicpO1xuICAgIGlmICghQXJyYXkuaXNBcnJheShpdGVtLnJlTmFtZS50b3RhbCkpXG4gICAgICBpdGVtLnJlTmFtZS50b3RhbCA9IGl0ZW0ucmVOYW1lLnRvdGFsLnNwbGl0KCcuJyk7XG4gICAgdGhpcy5fcmVzID0gaXRlbTtcbiAgfVxuICBwcml2YXRlIF9yZXM6IFNUUmVzO1xuICAvKiog5YiX5o+P6L+wICAqL1xuICBASW5wdXQoKVxuICBjb2x1bW5zOiBTVENvbHVtbltdID0gW107XG4gIC8qKiDmr4/pobXmlbDph4/vvIzlvZPorr7nva7kuLogYDBgIOihqOekuuS4jeWIhumhte+8jOm7mOiupO+8mmAxMGAgKi9cbiAgQElucHV0KClcbiAgQElucHV0TnVtYmVyKClcbiAgcHMgPSAxMDtcbiAgLyoqIOW9k+WJjemhteeggSAqL1xuICBASW5wdXQoKVxuICBASW5wdXROdW1iZXIoKVxuICBwaSA9IDE7XG4gIC8qKiDmlbDmja7mgLvph48gKi9cbiAgQElucHV0KClcbiAgQElucHV0TnVtYmVyKClcbiAgdG90YWwgPSAwO1xuICAvKiog5YiG6aG15Zmo6YWN572uICovXG4gIEBJbnB1dCgpXG4gIGdldCBwYWdlKCkge1xuICAgIHJldHVybiB0aGlzLl9wYWdlO1xuICB9XG4gIHNldCBwYWdlKHZhbHVlOiBTVFBhZ2UpIHtcbiAgICB0aGlzLmNsb25lUGFnZSA9IHZhbHVlO1xuICAgIGNvbnN0IHsgcGFnZSB9ID0gdGhpcy5jb2c7XG4gICAgY29uc3QgaXRlbSA9IE9iamVjdC5hc3NpZ24oe30sIGRlZXBDb3B5KHBhZ2UpLCB2YWx1ZSk7XG4gICAgY29uc3QgeyB0b3RhbCB9ID0gaXRlbTtcbiAgICBpZiAodHlwZW9mIHRvdGFsID09PSAnc3RyaW5nJyAmJiB0b3RhbC5sZW5ndGgpIHtcbiAgICAgIHRoaXMudG90YWxUcGwgPSB0b3RhbDtcbiAgICB9IGVsc2UgaWYgKHRvQm9vbGVhbih0b3RhbCkpIHtcbiAgICAgIHRoaXMudG90YWxUcGwgPSB0aGlzLmxvY2FsZS50b3RhbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50b3RhbFRwbCA9ICcnO1xuICAgIH1cbiAgICB0aGlzLl9wYWdlID0gaXRlbTtcbiAgfVxuICBwcml2YXRlIF9wYWdlOiBTVFBhZ2U7XG4gIC8qKiDmmK/lkKbmmL7npLpMb2FkaW5nICovXG4gIEBJbnB1dCgpXG4gIEBJbnB1dEJvb2xlYW4oKVxuICBsb2FkaW5nID0gZmFsc2U7XG4gIC8qKiDlu7bov5/mmL7npLrliqDovb3mlYjmnpznmoTml7bpl7TvvIjpmLLmraLpl6rng4HvvIkgKi9cbiAgQElucHV0KClcbiAgQElucHV0TnVtYmVyKClcbiAgbG9hZGluZ0RlbGF5ID0gMDtcbiAgLyoqIOaYr+WQpuaYvuekuui+ueahhiAqL1xuICBASW5wdXQoKVxuICBASW5wdXRCb29sZWFuKClcbiAgYm9yZGVyZWQgPSBmYWxzZTtcbiAgLyoqIHRhYmxl5aSn5bCPICovXG4gIEBJbnB1dCgpXG4gIHNpemU6ICdzbWFsbCcgfCAnbWlkZGxlJyB8ICdkZWZhdWx0JztcbiAgLyoqIOe6teWQkeaUr+aMgea7muWKqO+8jOS5n+WPr+eUqOS6juaMh+Wumua7muWKqOWMuuWfn+eahOmrmOW6pu+8mmB7IHk6ICczMDBweCcsIHg6ICczMDBweCcgfWAgKi9cbiAgQElucHV0KClcbiAgc2Nyb2xsOiB7IHk/OiBzdHJpbmc7IHg/OiBzdHJpbmcgfTtcbiAgLyoqIOaYr+WQpuWkmuaOkuW6j++8jOW9kyBgc29ydGAg5aSa5Liq55u45ZCM5YC85pe26Ieq5Yqo5ZCI5bm277yM5bu66K6u5ZCO56uv5pSv5oyB5pe25L2/55SoICovXG4gIEBJbnB1dCgpXG4gIGdldCBtdWx0aVNvcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX211bHRpU29ydDtcbiAgfVxuICBzZXQgbXVsdGlTb3J0KHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicgJiYgIXRvQm9vbGVhbih2YWx1ZSkpIHtcbiAgICAgIHRoaXMuX211bHRpU29ydCA9IG51bGw7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX211bHRpU29ydCA9IE9iamVjdC5hc3NpZ24oXG4gICAgICA8U1RNdWx0aVNvcnQ+e1xuICAgICAgICBrZXk6ICdzb3J0JyxcbiAgICAgICAgc2VwYXJhdG9yOiAnLScsXG4gICAgICAgIG5hbWVTZXBhcmF0b3I6ICcuJyxcbiAgICAgIH0sXG4gICAgICB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnID8gdmFsdWUgOiB7fSxcbiAgICApO1xuICB9XG4gIHByaXZhdGUgX211bHRpU29ydDogU1RNdWx0aVNvcnQ7XG4gIC8qKiBgaGVhZGVyYCDmoIfpopggKi9cbiAgQElucHV0KClcbiAgaGVhZGVyOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgLyoqIGBmb290ZXJgIOW6lemDqCAqL1xuICBASW5wdXQoKVxuICBmb290ZXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICAvKiog6aKd5aSWIGBib2R5YCDlhoXlrrkgKi9cbiAgQElucHV0KClcbiAgYm9keTogVGVtcGxhdGVSZWY8dm9pZD47XG4gIC8qKiBgZXhwYW5kYCDlj6/lsZXlvIDvvIzlvZPmlbDmja7mupDkuK3ljIXmi6wgYGV4cGFuZGAg6KGo56S65bGV5byA54q25oCBICovXG4gIEBJbnB1dCgpXG4gIGV4cGFuZDogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IGFueTsgY29sdW1uOiBTVENvbHVtbiB9PjtcbiAgQElucHV0KClcbiAgbm9SZXN1bHQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKVxuICB3aWR0aENvbmZpZzogc3RyaW5nW107XG4gIC8qKiDor7fmsYLlvILluLjml7blm57osIMgKi9cbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IGVycm9yID0gbmV3IEV2ZW50RW1pdHRlcjxTVEVycm9yPigpO1xuICAvKipcbiAgICog5Y+Y5YyW5pe25Zue6LCD77yM5YyF5ous77yaYHBpYOOAgWBwc2DjgIFgY2hlY2tib3hg44CBYHJhZGlvYOOAgWBzb3J0YOOAgWBmaWx0ZXJg44CBYGNsaWNrYOOAgWBkYmxDbGlja2Ag5Y+Y5YqoXG4gICAqL1xuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxTVENoYW5nZT4oKTtcbiAgLyoqIOihjOWNleWHu+WkmuWwkeaXtumVv+S5i+exu+S4uuWPjOWHu++8iOWNleS9je+8muavq+enku+8ie+8jOm7mOiupO+8mmAyMDBgICovXG4gIEBJbnB1dCgpXG4gIEBJbnB1dE51bWJlcigpXG4gIHJvd0NsaWNrVGltZSA9IDIwMDtcblxuICBASW5wdXQoKVxuICBASW5wdXRCb29sZWFuKClcbiAgcmVzcG9uc2l2ZUhpZGVIZWFkZXJGb290ZXI6IGJvb2xlYW47XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gY29tcGF0aWJsZVxuXG4gIC8qKlxuICAgKiBjaGVja2JveOWPmOWMluaXtuWbnuiwg++8jOWPguaVsOS4uuW9k+WJjeaJgOmAiea4heWNlVxuICAgKiBAZGVwcmVjYXRlZCDkvb/nlKggYGNoYW5nZWAg5pu/5LujXG4gICAqIEBkZXByZWNhdGVkIGFzIG9mIHYzXG4gICAqL1xuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgY2hlY2tib3hDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFNURGF0YVtdPigpO1xuICAvKipcbiAgICogcmFkaW/lj5jljJbml7blm57osIPvvIzlj4LmlbDkuLrlvZPliY3miYDpgIlcbiAgICogQGRlcHJlY2F0ZWQg5L2/55SoIGBjaGFuZ2VgIOabv+S7o1xuICAgKiBAZGVwcmVjYXRlZCBhcyBvZiB2M1xuICAgKi9cbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IHJhZGlvQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxTVERhdGE+KCk7XG4gIC8qKlxuICAgKiDmjpLluo/lm57osINcbiAgICogQGRlcHJlY2F0ZWQg5L2/55SoIGBjaGFuZ2VgIOabv+S7o1xuICAgKiBAZGVwcmVjYXRlZCBhcyBvZiB2M1xuICAgKi9cbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IHNvcnRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgLyoqXG4gICAqIOi/h+a7pOWPmOWMluaXtuWbnuiwg1xuICAgKiBAZGVwcmVjYXRlZCDkvb/nlKggYGNoYW5nZWAg5pu/5LujXG4gICAqIEBkZXByZWNhdGVkIGFzIG9mIHYzXG4gICAqL1xuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgZmlsdGVyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxTVENvbHVtbj4oKTtcbiAgLyoqXG4gICAqIOihjOWNleWHu+Wbnuiwg1xuICAgKiBAZGVwcmVjYXRlZCDkvb/nlKggYGNoYW5nZWAg5pu/5LujXG4gICAqIEBkZXByZWNhdGVkIGFzIG9mIHYzXG4gICAqL1xuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgcm93Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPFNUQ2hhbmdlUm93Q2xpY2s+KCk7XG4gIC8qKlxuICAgKiDooYzlj4zlh7vlm57osINcbiAgICogQGRlcHJlY2F0ZWQg5L2/55SoIGBjaGFuZ2VgIOabv+S7o1xuICAgKiBAZGVwcmVjYXRlZCBhcyBvZiB2M1xuICAgKi9cbiAgQE91dHB1dCgpXG4gIHJlYWRvbmx5IHJvd0RibENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxTVENoYW5nZVJvd0NsaWNrPigpO1xuICAvLyNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIGNvZzogU1RDb25maWcsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGV4cG9ydFNydjogU1RFeHBvcnQsXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KEFMQUlOX0kxOE5fVE9LRU4pXG4gICAgaTE4blNydjogQWxhaW5JMThOU2VydmljZSxcbiAgICBwcml2YXRlIG1vZGFsSGVscGVyOiBNb2RhbEhlbHBlcixcbiAgICBwcml2YXRlIGRyYXdlckhlbHBlcjogRHJhd2VySGVscGVyLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnksXG4gICAgcHJpdmF0ZSBjb2x1bW5Tb3VyY2U6IFNUQ29sdW1uU291cmNlLFxuICAgIHByaXZhdGUgZGF0YVNvdXJjZTogU1REYXRhU291cmNlLFxuICAgIHByaXZhdGUgZGVsb25JMThuOiBEZWxvbkxvY2FsZVNlcnZpY2UsXG4gICkge1xuICAgIHRoaXMuZGVsb25JMThuJCA9IHRoaXMuZGVsb25JMThuLmNoYW5nZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5sb2NhbGUgPSB0aGlzLmRlbG9uSTE4bi5nZXREYXRhKCdzdCcpO1xuICAgICAgaWYgKHRoaXMuX2NvbHVtbnMubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLnBhZ2UgPSB0aGlzLmNsb25lUGFnZTtcbiAgICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkZWVwQ29weShjb2cpKTtcbiAgICBpZiAoaTE4blNydikge1xuICAgICAgdGhpcy5pMThuJCA9IGkxOG5TcnYuY2hhbmdlXG4gICAgICAgIC5waXBlKGZpbHRlcigoKSA9PiB0aGlzLl9jb2x1bW5zLmxlbmd0aCA+IDApKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMudXBkYXRlQ29sdW1ucygpKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXJUb3RhbCh0b3RhbDogc3RyaW5nLCByYW5nZTogc3RyaW5nW10pIHtcbiAgICByZXR1cm4gdGhpcy50b3RhbFRwbFxuICAgICAgPyB0aGlzLnRvdGFsVHBsXG4gICAgICAgICAgLnJlcGxhY2UoJ3t7dG90YWx9fScsIHRvdGFsKVxuICAgICAgICAgIC5yZXBsYWNlKCd7e3JhbmdlWzBdfX0nLCByYW5nZVswXSlcbiAgICAgICAgICAucmVwbGFjZSgne3tyYW5nZVsxXX19JywgcmFuZ2VbMV0pXG4gICAgICA6ICcnO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGFuZ2VFbWl0KHR5cGU6IFNUQ2hhbmdlVHlwZSwgZGF0YT86IGFueSkge1xuICAgIGNvbnN0IHJlczogU1RDaGFuZ2UgPSB7XG4gICAgICB0eXBlLFxuICAgICAgcGk6IHRoaXMucGksXG4gICAgICBwczogdGhpcy5wcyxcbiAgICAgIHRvdGFsOiB0aGlzLnRvdGFsLFxuICAgIH07XG4gICAgaWYgKGRhdGEgIT0gbnVsbCkge1xuICAgICAgcmVzW3R5cGVdID0gZGF0YTtcbiAgICB9XG4gICAgdGhpcy5jaGFuZ2UuZW1pdChyZXMpO1xuICB9XG5cbiAgLy8jcmVnaW9uIGRhdGFcblxuICBwcml2YXRlIF9sb2FkKCkge1xuICAgIGNvbnN0IHsgcGksIHBzLCBkYXRhLCByZXEsIHJlcywgcGFnZSwgdG90YWwsIG11bHRpU29ydCB9ID0gdGhpcztcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIHJldHVybiB0aGlzLmRhdGFTb3VyY2VcbiAgICAgIC5wcm9jZXNzKHtcbiAgICAgICAgcGksXG4gICAgICAgIHBzLFxuICAgICAgICB0b3RhbCxcbiAgICAgICAgZGF0YSxcbiAgICAgICAgcmVxLFxuICAgICAgICByZXMsXG4gICAgICAgIHBhZ2UsXG4gICAgICAgIGNvbHVtbnM6IHRoaXMuX2NvbHVtbnMsXG4gICAgICAgIG11bHRpU29ydCxcbiAgICAgIH0pXG4gICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQucGkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdGhpcy5waSA9IHJlc3VsdC5waTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdC50b3RhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aGlzLnRvdGFsID0gcmVzdWx0LnRvdGFsO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0LnBhZ2VTaG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRoaXMuX2lzUGFnaW5hdGlvbiA9IHJlc3VsdC5wYWdlU2hvdztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9kYXRhID0gcmVzdWx0Lmxpc3Q7XG4gICAgICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICAgICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHRoaXMuX3JlZkNoZWNrKCkpXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5lcnJvci5lbWl0KHsgdHlwZTogJ3JlcScsIGVycm9yIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICog5qC55o2u6aG156CB6YeN5paw5Yqg6L295pWw5o2uXG4gICAqXG4gICAqIEBwYXJhbSBwaSDmjIflrprlvZPliY3pobXnoIHvvIzpu5jorqTvvJpgMWBcbiAgICogQHBhcmFtIGV4dHJhUGFyYW1zIOmHjeaWsOaMh+WumiBgZXh0cmFQYXJhbXNgIOWAvFxuICAgKiBAcGFyYW0gb3B0aW9ucyDpgInpoblcbiAgICovXG4gIGxvYWQocGkgPSAxLCBleHRyYVBhcmFtcz86IGFueSwgb3B0aW9ucz86IFNUTG9hZE9wdGlvbnMpIHtcbiAgICBpZiAocGkgIT09IC0xKSB0aGlzLnBpID0gcGk7XG4gICAgaWYgKHR5cGVvZiBleHRyYVBhcmFtcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMuX3JlcS5wYXJhbXMgPVxuICAgICAgICBvcHRpb25zICYmIG9wdGlvbnMubWVyZ2VcbiAgICAgICAgICA/IE9iamVjdC5hc3NpZ24odGhpcy5fcmVxLnBhcmFtcywgZXh0cmFQYXJhbXMpXG4gICAgICAgICAgOiBleHRyYVBhcmFtcztcbiAgICB9XG4gICAgdGhpcy5fY2hhbmdlKCdwaScpO1xuICB9XG5cbiAgLyoqXG4gICAqIOmHjeaWsOWIt+aWsOW9k+WJjemhtVxuICAgKiBAcGFyYW0gZXh0cmFQYXJhbXMg6YeN5paw5oyH5a6aIGBleHRyYVBhcmFtc2Ag5YC8XG4gICAqL1xuICByZWxvYWQoZXh0cmFQYXJhbXM/OiBhbnksIG9wdGlvbnM/OiBTVExvYWRPcHRpb25zKSB7XG4gICAgdGhpcy5sb2FkKC0xLCBleHRyYVBhcmFtcywgb3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICog6YeN572u5LiU6YeN5paw6K6+572uIGBwaWAg5Li6IGAxYO+8jOWMheWQq+S7peS4i+WAvO+8mlxuICAgKiAtIGBjaGVja2Ag5pWw5o2uXG4gICAqIC0gYHJhZGlvYCDmlbDmja5cbiAgICogLSBgc29ydGAg5pWw5o2uXG4gICAqIC0gYGZpbGV0ZXJgIOaVsOaNrlxuICAgKlxuICAgKiBAcGFyYW0gZXh0cmFQYXJhbXMg6YeN5paw5oyH5a6aIGBleHRyYVBhcmFtc2Ag5YC8XG4gICAqL1xuICByZXNldChleHRyYVBhcmFtcz86IGFueSwgb3B0aW9ucz86IFNUTG9hZE9wdGlvbnMpIHtcbiAgICB0aGlzLmNsZWFyQ2hlY2soKVxuICAgICAgLmNsZWFyUmFkaW8oKVxuICAgICAgLmNsZWFyRmlsdGVyKClcbiAgICAgIC5jbGVhclNvcnQoKTtcbiAgICB0aGlzLmxvYWQoMSwgZXh0cmFQYXJhbXMsIG9wdGlvbnMpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdG9Ub3AoKSB7XG4gICAgaWYgKCF0aGlzLnBhZ2UudG9Ub3ApIHJldHVybjtcbiAgICBjb25zdCBlbCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICBpZiAodGhpcy5zY3JvbGwpIHtcbiAgICAgIGVsLnF1ZXJ5U2VsZWN0b3IoJy5hbnQtdGFibGUtYm9keScpLnNjcm9sbFRvKDAsIDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbC5zY3JvbGxJbnRvVmlldygpO1xuICAgIC8vIGZpeCBoZWFkZXIgaGVpZ2h0XG4gICAgdGhpcy5kb2MuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCAtPSB0aGlzLnBhZ2UudG9Ub3BPZmZzZXQ7XG4gIH1cblxuICBfY2hhbmdlKHR5cGU6ICdwaScgfCAncHMnKSB7XG4gICAgdGhpcy5fbG9hZCgpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5fdG9Ub3AoKTtcbiAgICB9KTtcbiAgICB0aGlzLmNoYW5nZUVtaXQodHlwZSk7XG4gIH1cblxuICBfY2xpY2soZTogRXZlbnQsIGl0ZW06IGFueSwgY29sOiBTVENvbHVtbikge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IHJlcyA9IGNvbC5jbGljayhpdGVtLCB0aGlzKTtcbiAgICBpZiAodHlwZW9mIHJlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwocmVzKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSByb3dDbGlja0NvdW50ID0gMDtcbiAgX3Jvd0NsaWNrKGU6IEV2ZW50LCBpdGVtOiBhbnksIGluZGV4OiBudW1iZXIpIHtcbiAgICBpZiAoKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5ub2RlTmFtZSA9PT0gJ0lOUFVUJykgcmV0dXJuO1xuICAgICsrdGhpcy5yb3dDbGlja0NvdW50O1xuICAgIGlmICh0aGlzLnJvd0NsaWNrQ291bnQgIT09IDEpIHJldHVybjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSB7IGUsIGl0ZW0sIGluZGV4IH07XG4gICAgICBpZiAodGhpcy5yb3dDbGlja0NvdW50ID09PSAxKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlRW1pdCgnY2xpY2snLCBkYXRhKTtcbiAgICAgICAgLy8gQGRlcHJlY2F0ZWQgYXMgb2YgdjNcbiAgICAgICAgdGhpcy5yb3dDbGljay5lbWl0KGRhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VFbWl0KCdkYmxDbGljaycsIGRhdGEpO1xuICAgICAgICAvLyBAZGVwcmVjYXRlZCBhcyBvZiB2M1xuICAgICAgICB0aGlzLnJvd0RibENsaWNrLmVtaXQoZGF0YSk7XG4gICAgICB9XG4gICAgICB0aGlzLnJvd0NsaWNrQ291bnQgPSAwO1xuICAgIH0sIHRoaXMucm93Q2xpY2tUaW1lKTtcbiAgfVxuXG4gIC8qKiDnp7vpmaTmn5DooYzmlbDmja4gKi9cbiAgcmVtb3ZlUm93KGRhdGE6IFNURGF0YSB8IFNURGF0YVtdKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICBkYXRhID0gWyBkYXRhIF07XG4gICAgfVxuXG4gICAgKGRhdGEgYXMgU1REYXRhW10pLm1hcChpdGVtID0+IHRoaXMuX2RhdGEuaW5kZXhPZihpdGVtKSlcbiAgICAgICAgLmZpbHRlcihwb3MgPT4gcG9zICE9PSAtMSlcbiAgICAgICAgLmZvckVhY2gocG9zID0+IHRoaXMuX2RhdGEuc3BsaWNlKHBvcywgMSkpO1xuXG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICAvLyNlbmRyZWdpb25cblxuICAvLyNyZWdpb24gc29ydFxuXG4gIHNvcnQoY29sOiBTVENvbHVtbiwgaWR4OiBudW1iZXIsIHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodGhpcy5tdWx0aVNvcnQpIHtcbiAgICAgIGNvbC5fc29ydC5kZWZhdWx0ID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NvbHVtbnMuZm9yRWFjaChcbiAgICAgICAgKGl0ZW0sIGluZGV4KSA9PiAoaXRlbS5fc29ydC5kZWZhdWx0ID0gaW5kZXggPT09IGlkeCA/IHZhbHVlIDogbnVsbCksXG4gICAgICApO1xuICAgIH1cbiAgICB0aGlzLl9sb2FkKCk7XG4gICAgY29uc3QgcmVzID0ge1xuICAgICAgdmFsdWUsXG4gICAgICBtYXA6IHRoaXMuZGF0YVNvdXJjZS5nZXRSZXFTb3J0TWFwKHRoaXMubXVsdGlTb3J0LCB0aGlzLl9jb2x1bW5zKSxcbiAgICAgIGNvbHVtbjogY29sLFxuICAgIH07XG4gICAgdGhpcy5jaGFuZ2VFbWl0KCdzb3J0JywgcmVzKTtcbiAgICAvLyBAZGVwcmVjYXRlZCBhcyBvZiB2M1xuICAgIHRoaXMuc29ydENoYW5nZS5lbWl0KHJlcyk7XG4gIH1cblxuICBjbGVhclNvcnQoKSB7XG4gICAgdGhpcy5fY29sdW1ucy5mb3JFYWNoKGl0ZW0gPT4gKGl0ZW0uX3NvcnQuZGVmYXVsdCA9IG51bGwpKTtcbiAgfVxuXG4gIC8vI2VuZHJlZ2lvblxuXG4gIC8vI3JlZ2lvbiBmaWx0ZXJcblxuICBwcml2YXRlIGhhbmRsZUZpbHRlcihjb2w6IFNUQ29sdW1uKSB7XG4gICAgY29sLmZpbHRlci5kZWZhdWx0ID0gY29sLmZpbHRlci5tZW51cy5maW5kSW5kZXgodyA9PiB3LmNoZWNrZWQpICE9PSAtMTtcbiAgICB0aGlzLl9sb2FkKCk7XG4gICAgdGhpcy5jaGFuZ2VFbWl0KCdmaWx0ZXInLCBjb2wpO1xuICAgIC8vIEBkZXByZWNhdGVkIGFzIG9mIHYzXG4gICAgdGhpcy5maWx0ZXJDaGFuZ2UuZW1pdChjb2wpO1xuICB9XG5cbiAgX2ZpbHRlckNvbmZpcm0oY29sOiBTVENvbHVtbikge1xuICAgIHRoaXMuaGFuZGxlRmlsdGVyKGNvbCk7XG4gIH1cblxuICBfZmlsdGVyQ2xlYXIoY29sOiBTVENvbHVtbikge1xuICAgIGNvbC5maWx0ZXIubWVudXMuZm9yRWFjaChpID0+IChpLmNoZWNrZWQgPSBmYWxzZSkpO1xuICAgIHRoaXMuaGFuZGxlRmlsdGVyKGNvbCk7XG4gIH1cblxuICBfZmlsdGVyUmFkaW8oY29sOiBTVENvbHVtbiwgaXRlbTogU1RDb2x1bW5GaWx0ZXJNZW51LCBjaGVja2VkOiBib29sZWFuKSB7XG4gICAgY29sLmZpbHRlci5tZW51cy5mb3JFYWNoKGkgPT4gKGkuY2hlY2tlZCA9IGZhbHNlKSk7XG4gICAgaXRlbS5jaGVja2VkID0gY2hlY2tlZDtcbiAgfVxuXG4gIGNsZWFyRmlsdGVyKCkge1xuICAgIHRoaXMuX2NvbHVtbnNcbiAgICAgIC5maWx0ZXIodyA9PiB3LmZpbHRlciAmJiB3LmZpbHRlci5kZWZhdWx0ID09PSB0cnVlKVxuICAgICAgLmZvckVhY2goY29sID0+IHtcbiAgICAgICAgY29sLmZpbHRlci5kZWZhdWx0ID0gZmFsc2U7XG4gICAgICAgIGNvbC5maWx0ZXIubWVudXMuZm9yRWFjaChmID0+IChmLmNoZWNrZWQgPSBmYWxzZSkpO1xuICAgICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyNlbmRyZWdpb25cblxuICAvLyNyZWdpb24gY2hlY2tib3hcblxuICAvKiog5riF6Zmk5omA5pyJIGBjaGVja2JveGAgKi9cbiAgY2xlYXJDaGVjaygpOiB0aGlzIHtcbiAgICByZXR1cm4gdGhpcy5fY2hlY2tBbGwoZmFsc2UpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVmQ2hlY2soKTogdGhpcyB7XG4gICAgY29uc3QgdmFsaWREYXRhID0gdGhpcy5fZGF0YS5maWx0ZXIodyA9PiAhdy5kaXNhYmxlZCk7XG4gICAgY29uc3QgY2hlY2tlZExpc3QgPSB2YWxpZERhdGEuZmlsdGVyKHcgPT4gdy5jaGVja2VkID09PSB0cnVlKTtcbiAgICB0aGlzLl9hbGxDaGVja2VkID1cbiAgICAgIGNoZWNrZWRMaXN0Lmxlbmd0aCA+IDAgJiYgY2hlY2tlZExpc3QubGVuZ3RoID09PSB2YWxpZERhdGEubGVuZ3RoO1xuICAgIGNvbnN0IGFsbFVuQ2hlY2tlZCA9IHZhbGlkRGF0YS5ldmVyeSh2YWx1ZSA9PiAhdmFsdWUuY2hlY2tlZCk7XG4gICAgdGhpcy5faW5kZXRlcm1pbmF0ZSA9ICF0aGlzLl9hbGxDaGVja2VkICYmICFhbGxVbkNoZWNrZWQ7XG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBfY2hlY2tBbGwoY2hlY2tlZD86IGJvb2xlYW4pOiB0aGlzIHtcbiAgICBjaGVja2VkID0gdHlwZW9mIGNoZWNrZWQgPT09ICd1bmRlZmluZWQnID8gdGhpcy5fYWxsQ2hlY2tlZCA6IGNoZWNrZWQ7XG4gICAgdGhpcy5fZGF0YS5maWx0ZXIodyA9PiAhdy5kaXNhYmxlZCkuZm9yRWFjaChpID0+IChpLmNoZWNrZWQgPSBjaGVja2VkKSk7XG4gICAgcmV0dXJuIHRoaXMuX3JlZkNoZWNrKCkuX2NoZWNrTm90aWZ5KCk7XG4gIH1cblxuICBfY2hlY2tTZWxlY3Rpb24oaTogU1REYXRhLCB2YWx1ZTogYm9vbGVhbikge1xuICAgIGkuY2hlY2tlZCA9IHZhbHVlO1xuICAgIHJldHVybiB0aGlzLl9yZWZDaGVjaygpLl9jaGVja05vdGlmeSgpO1xuICB9XG5cbiAgX3Jvd1NlbGVjdGlvbihyb3c6IFNUQ29sdW1uU2VsZWN0aW9uKTogdGhpcyB7XG4gICAgcm93LnNlbGVjdCh0aGlzLl9kYXRhKTtcbiAgICByZXR1cm4gdGhpcy5fcmVmQ2hlY2soKS5fY2hlY2tOb3RpZnkoKTtcbiAgfVxuXG4gIF9jaGVja05vdGlmeSgpOiB0aGlzIHtcbiAgICBjb25zdCByZXMgPSB0aGlzLl9kYXRhLmZpbHRlcih3ID0+ICF3LmRpc2FibGVkICYmIHcuY2hlY2tlZCA9PT0gdHJ1ZSk7XG4gICAgdGhpcy5jaGFuZ2VFbWl0KCdjaGVja2JveCcsIHJlcyk7XG4gICAgLy8gQGRlcHJlY2F0ZWQgYXMgb2YgdjNcbiAgICB0aGlzLmNoZWNrYm94Q2hhbmdlLmVtaXQocmVzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vI2VuZHJlZ2lvblxuXG4gIC8vI3JlZ2lvbiByYWRpb1xuXG4gIC8qKiDmuIXpmaTmiYDmnIkgYHJhZGlvYCAqL1xuICBjbGVhclJhZGlvKCk6IHRoaXMge1xuICAgIHRoaXMuX2RhdGEuZmlsdGVyKHcgPT4gdy5jaGVja2VkKS5mb3JFYWNoKGl0ZW0gPT4gKGl0ZW0uY2hlY2tlZCA9IGZhbHNlKSk7XG4gICAgdGhpcy5jaGFuZ2VFbWl0KCdyYWRpbycsIG51bGwpO1xuICAgIC8vIEBkZXByZWNhdGVkIGFzIG9mIHYzXG4gICAgdGhpcy5yYWRpb0NoYW5nZS5lbWl0KG51bGwpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgX3JlZlJhZGlvKGNoZWNrZWQ6IGJvb2xlYW4sIGl0ZW06IFNURGF0YSk6IHRoaXMge1xuICAgIC8vIGlmIChpdGVtLmRpc2FibGVkID09PSB0cnVlKSByZXR1cm47XG4gICAgdGhpcy5fZGF0YS5maWx0ZXIodyA9PiAhdy5kaXNhYmxlZCkuZm9yRWFjaChpID0+IChpLmNoZWNrZWQgPSBmYWxzZSkpO1xuICAgIGl0ZW0uY2hlY2tlZCA9IGNoZWNrZWQ7XG4gICAgdGhpcy5jaGFuZ2VFbWl0KCdyYWRpbycsIGl0ZW0pO1xuICAgIC8vIEBkZXByZWNhdGVkIGFzIG9mIHYzXG4gICAgdGhpcy5yYWRpb0NoYW5nZS5lbWl0KGl0ZW0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8jZW5kcmVnaW9uXG5cbiAgLy8jcmVnaW9uIGJ1dHRvbnNcblxuICBfYnRuQ2xpY2soZTogRXZlbnQsIHJlY29yZDogYW55LCBidG46IFNUQ29sdW1uQnV0dG9uKSB7XG4gICAgaWYgKGUpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIGlmIChidG4udHlwZSA9PT0gJ21vZGFsJyB8fCBidG4udHlwZSA9PT0gJ3N0YXRpYycpIHtcbiAgICAgIGNvbnN0IG9iaiA9IHt9O1xuICAgICAgY29uc3QgeyBtb2RhbCB9ID0gYnRuO1xuICAgICAgb2JqW21vZGFsLnBhcmFtc05hbWVdID0gcmVjb3JkO1xuICAgICAgY29uc3Qgb3B0aW9uczogTW9kYWxIZWxwZXJPcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgbW9kYWwpO1xuICAgICAgKHRoaXMubW9kYWxIZWxwZXJbXG4gICAgICAgIGJ0bi50eXBlID09PSAnbW9kYWwnID8gJ2NyZWF0ZScgOiAnY3JlYXRlU3RhdGljJ1xuICAgICAgXSBhcyBhbnkpKFxuICAgICAgICBtb2RhbC5jb21wb25lbnQsXG4gICAgICAgIE9iamVjdC5hc3NpZ24ob2JqLCBtb2RhbC5wYXJhbXMgJiYgbW9kYWwucGFyYW1zKHJlY29yZCkpLFxuICAgICAgICBvcHRpb25zLFxuICAgICAgKVxuICAgICAgICAucGlwZShmaWx0ZXIodyA9PiB0eXBlb2YgdyAhPT0gJ3VuZGVmaW5lZCcpKVxuICAgICAgICAuc3Vic2NyaWJlKHJlcyA9PiB0aGlzLmJ0bkNhbGxiYWNrKHJlY29yZCwgYnRuLCByZXMpKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKGJ0bi50eXBlID09PSAnZHJhd2VyJykge1xuICAgICAgY29uc3Qgb2JqID0ge307XG4gICAgICBjb25zdCB7IGRyYXdlciB9ID0gYnRuO1xuICAgICAgb2JqW2RyYXdlci5wYXJhbXNOYW1lXSA9IHJlY29yZDtcbiAgICAgIHRoaXMuZHJhd2VySGVscGVyXG4gICAgICAgIC5jcmVhdGUoXG4gICAgICAgICAgZHJhd2VyLnRpdGxlLFxuICAgICAgICAgIGRyYXdlci5jb21wb25lbnQsXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihvYmosIGRyYXdlci5wYXJhbXMgJiYgZHJhd2VyLnBhcmFtcyhyZWNvcmQpKSxcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBkcmF3ZXIpLFxuICAgICAgICApXG4gICAgICAgIC5waXBlKGZpbHRlcih3ID0+IHR5cGVvZiB3ICE9PSAndW5kZWZpbmVkJykpXG4gICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHRoaXMuYnRuQ2FsbGJhY2socmVjb3JkLCBidG4sIHJlcykpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoYnRuLnR5cGUgPT09ICdsaW5rJykge1xuICAgICAgY29uc3QgY2xpY2tSZXMgPSB0aGlzLmJ0bkNhbGxiYWNrKHJlY29yZCwgYnRuKTtcbiAgICAgIGlmICh0eXBlb2YgY2xpY2tSZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoY2xpY2tSZXMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmJ0bkNhbGxiYWNrKHJlY29yZCwgYnRuKTtcbiAgfVxuXG4gIHByaXZhdGUgYnRuQ2FsbGJhY2socmVjb3JkOiBhbnksIGJ0bjogU1RDb2x1bW5CdXR0b24sIG1vZGFsPzogYW55KSB7XG4gICAgaWYgKCFidG4uY2xpY2spIHJldHVybjtcbiAgICBpZiAodHlwZW9mIGJ0bi5jbGljayA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHN3aXRjaCAoYnRuLmNsaWNrKSB7XG4gICAgICAgIGNhc2UgJ2xvYWQnOlxuICAgICAgICAgIHRoaXMubG9hZCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdyZWxvYWQnOlxuICAgICAgICAgIHRoaXMucmVsb2FkKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBidG4uY2xpY2socmVjb3JkLCBtb2RhbCwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgX2J0blRleHQocmVjb3JkOiBhbnksIGJ0bjogU1RDb2x1bW5CdXR0b24pIHtcbiAgICBpZiAoYnRuLmZvcm1hdCkgcmV0dXJuIGJ0bi5mb3JtYXQocmVjb3JkLCBidG4pO1xuICAgIHJldHVybiBidG4udGV4dDtcbiAgfVxuXG4gIF92YWxpZEJ0bnMoaXRlbTogU1REYXRhLCBjb2w6IFNUQ29sdW1uKTogU1RDb2x1bW5CdXR0b25bXSB7XG4gICAgcmV0dXJuIGNvbC5idXR0b25zLmZpbHRlcihidG4gPT4gYnRuLmlpZihpdGVtLCBidG4sIGNvbCkpO1xuICB9XG5cbiAgLy8jZW5kcmVnaW9uXG5cbiAgLy8jcmVnaW9uIGV4cG9ydFxuXG4gIC8qKlxuICAgKiDlr7zlh7rlvZPliY3pobXvvIznoa7kv53lt7Lnu4/ms6jlhowgYFhsc3hNb2R1bGVgXG4gICAqIEBwYXJhbSBuZXdEYXRhIOmHjeaWsOaMh+WumuaVsOaNru+8jOS+i+WmguW4jOacm+WvvOWHuuaJgOacieaVsOaNrumdnuW4uOacieeUqFxuICAgKiBAcGFyYW0gb3B0IOmineWkluWPguaVsFxuICAgKi9cbiAgZXhwb3J0KG5ld0RhdGE/OiBhbnlbXSwgb3B0PzogU1RFeHBvcnRPcHRpb25zKSB7XG4gICAgKG5ld0RhdGEgPyBvZihuZXdEYXRhKSA6IG9mKHRoaXMuX2RhdGEpKS5zdWJzY3JpYmUoKHJlczogYW55W10pID0+XG4gICAgICB0aGlzLmV4cG9ydFNydi5leHBvcnQoXG4gICAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdCwgPFNURXhwb3J0T3B0aW9ucz57XG4gICAgICAgICAgX2Q6IHJlcyxcbiAgICAgICAgICBfYzogdGhpcy5fY29sdW1ucyxcbiAgICAgICAgfSksXG4gICAgICApLFxuICAgICk7XG4gIH1cblxuICAvLyNlbmRyZWdpb25cblxuICBwcml2YXRlIHVwZGF0ZUNvbHVtbnMoKSB7XG4gICAgdGhpcy5fY29sdW1ucyA9IHRoaXMuY29sdW1uU291cmNlLnByb2Nlc3ModGhpcy5jb2x1bW5zKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0Q2xhc3MoKSB7XG4gICAgdXBkYXRlSG9zdENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgdGhpcy5yZW5kZXJlciwge1xuICAgICAgW2BzdGBdOiB0cnVlLFxuICAgICAgW2BzdF9fcC0ke3RoaXMucGFnZS5wbGFjZW1lbnR9YF06IHRoaXMucGFnZS5wbGFjZW1lbnQsXG4gICAgICBbYGFudC10YWJsZS1yZXBfX2hpZGUtaGVhZGVyLWZvb3RlcmBdOiB0aGlzLnJlc3BvbnNpdmVIaWRlSGVhZGVyRm9vdGVyLFxuICAgIH0pO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuY29sdW1uU291cmNlLnJlc3RvcmVBbGxSZW5kZXIodGhpcy5fY29sdW1ucyk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhcbiAgICBjaGFuZ2VzOiB7IFtQIGluIGtleW9mIHRoaXNdPzogU2ltcGxlQ2hhbmdlIH0gJiBTaW1wbGVDaGFuZ2VzLFxuICApOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5jb2x1bW5zKSB7XG4gICAgICB0aGlzLnVwZGF0ZUNvbHVtbnMoKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuZGF0YSAmJiBjaGFuZ2VzLmRhdGEuY3VycmVudFZhbHVlKSB7XG4gICAgICB0aGlzLl9sb2FkKCk7XG4gICAgfVxuICAgIHRoaXMuc2V0Q2xhc3MoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVsb25JMThuJC51bnN1YnNjcmliZSgpO1xuICAgIGlmICh0aGlzLmkxOG4kKSB0aGlzLmkxOG4kLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==