import { __decorate } from "tslib";
import { DecimalPipe, DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Host, Inject, Input, Optional, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { from, isObservable, of, Subject, filter, takeUntil } from 'rxjs';
import { ALAIN_I18N_TOKEN, DatePipe, YNPipe } from '@delon/theme';
import { InputBoolean, InputNumber, toBoolean } from '@delon/util/decorator';
import { deepCopy, deepMergeKey } from '@delon/util/other';
import { STColumnSource } from './st-column-source';
import { STDataSource } from './st-data-source';
import { STExport } from './st-export';
import { STRowSource } from './st-row.directive';
import { ST_DEFAULT_CONFIG } from './st.config';
import * as i0 from "@angular/core";
import * as i1 from "./st-export";
import * as i2 from "./st-column-source";
import * as i3 from "./st-data-source";
import * as i4 from "@delon/theme";
import * as i5 from "@delon/util/config";
import * as i6 from "ng-zorro-antd/dropdown";
import * as i7 from "@angular/common";
import * as i8 from "@angular/forms";
import * as i9 from "@delon/abc/let";
import * as i10 from "ng-zorro-antd/table";
import * as i11 from "ng-zorro-antd/icon";
import * as i12 from "ng-zorro-antd/checkbox";
import * as i13 from "ng-zorro-antd/menu";
import * as i14 from "ng-zorro-antd/tooltip";
import * as i15 from "ng-zorro-antd/resizable";
import * as i16 from "./st-filter.component";
import * as i17 from "@angular/router";
import * as i18 from "ng-zorro-antd/popconfirm";
import * as i19 from "ng-zorro-antd/badge";
import * as i20 from "ng-zorro-antd/divider";
import * as i21 from "ng-zorro-antd/radio";
import * as i22 from "ng-zorro-antd/tag";
import * as i23 from "./st-widget-host.directive";
export class STComponent {
    constructor(i18nSrv, cdr, el, exportSrv, doc, columnSource, dataSource, delonI18n, configSrv, cms) {
        this.cdr = cdr;
        this.el = el;
        this.exportSrv = exportSrv;
        this.doc = doc;
        this.columnSource = columnSource;
        this.dataSource = dataSource;
        this.delonI18n = delonI18n;
        this.cms = cms;
        this.destroy$ = new Subject();
        this.totalTpl = ``;
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
        this.contextmenuList = [];
        this.columns = [];
        this.ps = 10;
        this.pi = 1;
        this.total = 0;
        this.loading = null;
        this.loadingDelay = 0;
        this.loadingIndicator = null;
        this.bordered = false;
        this.scroll = { x: null, y: null };
        this.showHeader = true;
        this.expandRowByClick = false;
        this.expandAccordion = false;
        this.expand = null;
        this.responsive = true;
        this.error = new EventEmitter();
        this.change = new EventEmitter();
        this.virtualScroll = false;
        this.virtualItemSize = 54;
        this.virtualMaxBufferPx = 200;
        this.virtualMinBufferPx = 100;
        this.virtualForTrackBy = index => index;
        this.setCog(configSrv.merge('st', ST_DEFAULT_CONFIG));
        this.delonI18n.change.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.locale = this.delonI18n.getData('st');
            if (this._columns.length > 0) {
                this.updateTotalTpl();
                this.cd();
            }
        });
        i18nSrv.change
            .pipe(takeUntil(this.destroy$), filter(() => this._columns.length > 0))
            .subscribe(() => this.refreshColumns());
    }
    get req() {
        return this._req;
    }
    set req(value) {
        this._req = deepMergeKey({}, true, this.cog.req, value);
    }
    /** 返回体配置 */
    get res() {
        return this._res;
    }
    set res(value) {
        const item = (this._res = deepMergeKey({}, true, this.cog.res, value));
        const reName = item.reName;
        if (typeof reName !== 'function') {
            if (!Array.isArray(reName.list))
                reName.list = reName.list.split('.');
            if (!Array.isArray(reName.total))
                reName.total = reName.total.split('.');
        }
        this._res = item;
    }
    get page() {
        return this._page;
    }
    set page(value) {
        this._page = { ...this.cog.page, ...value };
        this.updateTotalTpl();
    }
    get multiSort() {
        return this._multiSort;
    }
    set multiSort(value) {
        if ((typeof value === 'boolean' && !toBoolean(value)) ||
            (typeof value === 'object' && Object.keys(value).length === 0)) {
            this._multiSort = undefined;
            return;
        }
        this._multiSort = {
            ...(typeof value === 'object' ? value : {})
        };
    }
    set widthMode(value) {
        this._widthMode = { ...this.cog.widthMode, ...value };
    }
    get widthMode() {
        return this._widthMode;
    }
    set widthConfig(val) {
        this._widthConfig = val;
        this.customWidthConfig = val && val.length > 0;
    }
    set resizable(val) {
        this._resizable = typeof val === 'object' ? val : { disabled: !toBoolean(val) };
    }
    /**
     * Get the number of the current page
     */
    get count() {
        return this._data.length;
    }
    /**
     * Get the data of the current page
     */
    get list() {
        return this._data;
    }
    setCog(cog) {
        const copyMultiSort = { ...cog.multiSort };
        // Because multiSort.global will affect the result, it should be removed first, and multiSort will be operated again after processing.
        delete cog.multiSort;
        this.cog = cog;
        Object.assign(this, cog);
        if (copyMultiSort.global !== false) {
            this.multiSort = copyMultiSort;
        }
        this.columnSource.setCog(cog);
        this.dataSource.setCog(cog);
    }
    cd() {
        this.cdr.detectChanges();
        return this;
    }
    refreshData() {
        this._data = [...this._data];
        return this.cd();
    }
    renderTotal(total, range) {
        return this.totalTpl
            ? this.totalTpl.replace('{{total}}', total).replace('{{range[0]}}', range[0]).replace('{{range[1]}}', range[1])
            : '';
    }
    changeEmit(type, data) {
        const res = {
            type,
            pi: this.pi,
            ps: this.ps,
            total: this.total
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
     */
    get filteredData() {
        return this.loadData({ paginator: false }).then(res => res.list);
    }
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
    setLoading(val) {
        if (this.loading == null) {
            this._loading = val;
            this.cdr.detectChanges();
        }
    }
    loadData(options) {
        const { pi, ps, data, req, res, page, total, singleSort, multiSort, rowClassName } = this;
        return new Promise((resolvePromise, rejectPromise) => {
            if (this.data$) {
                this.data$.unsubscribe();
            }
            this.data$ = this.dataSource
                .process({
                pi,
                ps,
                total,
                data,
                req,
                res,
                page,
                columns: this._columns,
                singleSort,
                multiSort,
                rowClassName,
                paginator: true,
                customRequest: this.customRequest || this.cog.customRequest,
                ...options
            })
                .pipe(takeUntil(this.destroy$))
                .subscribe({
                next: result => resolvePromise(result),
                error: error => {
                    if (typeof ngDevMode === 'undefined' || ngDevMode) {
                        console.warn('st.loadDate', error);
                    }
                    rejectPromise(error);
                }
            });
        });
    }
    async loadPageData() {
        this.setLoading(true);
        try {
            const result = await this.loadData();
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
            this._data = result.list;
            this._statistical = result.statistical;
            this.changeEmit('loaded', result.list);
            // Should be re-render in next tike when using virtual scroll
            // https://github.com/ng-alain/ng-alain/issues/1836
            if (this.cdkVirtualScrollViewport) {
                Promise.resolve().then(() => this.cdkVirtualScrollViewport.checkViewportSize());
            }
            return this._refCheck();
        }
        catch (error) {
            this.setLoading(false);
            if (!this.destroy$.closed) {
                this.cdr.detectChanges();
                this.error.emit({ type: 'req', error });
            }
            return this;
        }
    }
    /** 清空所有数据 */
    clear(cleanStatus = true) {
        if (cleanStatus) {
            this.clearStatus();
        }
        this._data = [];
        return this.cd();
    }
    /** 清空所有状态 */
    clearStatus() {
        return this.clearCheck().clearRadio().clearFilter().clearSort();
    }
    /**
     * 根据页码重新加载数据
     *
     * @param pi 指定当前页码，默认：`1`
     * @param extraParams 重新指定 `extraParams` 值
     * @param options 选项
     */
    load(pi = 1, extraParams, options) {
        if (pi !== -1)
            this.pi = pi;
        if (typeof extraParams !== 'undefined') {
            this.req.params = options && options.merge ? { ...this.req.params, ...extraParams } : extraParams;
        }
        this._change('pi', options);
        return this;
    }
    /**
     * 重新刷新当前页
     *
     * @param extraParams 重新指定 `extraParams` 值
     */
    reload(extraParams, options) {
        return this.load(-1, extraParams, options);
    }
    /**
     * 重置且重新设置 `pi` 为 `1`，包含以下值：
     * - `check` 数据
     * - `radio` 数据
     * - `sort` 数据
     * - `fileter` 数据
     *
     * @param extraParams 重新指定 `extraParams` 值
     */
    reset(extraParams, options) {
        this.clearStatus().load(1, extraParams, options);
        return this;
    }
    _toTop(enforce) {
        if (!(enforce == null ? this.page.toTop : enforce))
            return;
        const el = this.el.nativeElement;
        el.scrollIntoView();
        // fix header height
        this.doc.documentElement.scrollTop -= this.page.toTopOffset;
        if (this.scroll) {
            if (this.cdkVirtualScrollViewport) {
                this.cdkVirtualScrollViewport.scrollTo({
                    top: 0,
                    left: 0
                });
            }
            else {
                el.querySelector('.ant-table-body, .ant-table-content')?.scrollTo(0, 0);
            }
        }
    }
    _change(type, options) {
        if (type === 'pi' || (type === 'ps' && this.pi <= Math.ceil(this.total / this.ps))) {
            this.loadPageData().then(() => this._toTop(options?.toTop));
        }
        this.changeEmit(type);
    }
    closeOtherExpand(item) {
        if (this.expandAccordion === false)
            return;
        this._data.filter(i => i !== item).forEach(i => (i.expand = false));
    }
    _rowClick(e, item, index, dbl) {
        const el = e.target;
        if (el.nodeName === 'INPUT')
            return;
        const { expand, expandRowByClick } = this;
        if (!!expand && item.showExpand !== false && expandRowByClick) {
            item.expand = !item.expand;
            this.closeOtherExpand(item);
            this.changeEmit('expand', item);
            return;
        }
        const data = { e, item, index };
        if (dbl) {
            this.changeEmit('dblClick', data);
        }
        else {
            this._clickRowClassName(el, item, index);
            this.changeEmit('click', data);
        }
    }
    _clickRowClassName(el, item, index) {
        const cr = this.clickRowClassName;
        if (cr == null)
            return;
        const config = {
            exclusive: false,
            ...(typeof cr === 'string' ? { fn: () => cr } : cr)
        };
        const className = config.fn(item, index);
        const trEl = el.closest('tr');
        if (config.exclusive) {
            trEl.parentElement.querySelectorAll('tr').forEach((a) => a.classList.remove(className));
        }
        if (trEl.classList.contains(className)) {
            trEl.classList.remove(className);
        }
        else {
            trEl.classList.add(className);
        }
    }
    _expandChange(item, expand) {
        item.expand = expand;
        this.closeOtherExpand(item);
        this.changeEmit('expand', item);
    }
    _stopPropagation(ev) {
        ev.stopPropagation();
    }
    _refColAndData() {
        this._columns
            .filter(w => w.type === 'no')
            .forEach(c => this._data.forEach((i, idx) => {
            const text = `${this.dataSource.getNoIndex(i, c, idx)}`;
            i._values[c.__point] = { text, _text: text, org: idx, safeType: 'text' };
        }));
        return this.refreshData();
    }
    /**
     * Add a rows in the table, like this:
     *
     * ```
     * this.st.addRow(stDataItem)
     * ```
     *
     * **TIPS:** Don't change the `total` value, it is recommended to use the `reload` method if needed
     */
    addRow(data, options) {
        if (!Array.isArray(data))
            data = [data];
        this._data.splice(options?.index ?? 0, 0, ...data);
        return this.optimizeData()._refColAndData();
    }
    /**
     * Remove a row in the table, like this:
     *
     * ```
     * this.st.removeRow(0)
     * this.st.removeRow(stDataItem)
     * ```
     *
     * **TIPS:** Don't change the `total` value, it is recommended to use the `reload` method if needed
     */
    removeRow(data) {
        if (typeof data === 'number') {
            this._data.splice(data, 1);
        }
        else {
            if (!Array.isArray(data)) {
                data = [data];
            }
            const curData = this._data;
            for (var i = curData.length; i--;) {
                if (data.indexOf(curData[i]) !== -1) {
                    curData.splice(i, 1);
                }
            }
        }
        return this._refCheck()._refColAndData();
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
     */
    setRow(index, item, options) {
        options = { refreshSchema: false, emitReload: false, ...options };
        if (typeof index !== 'number') {
            index = this._data.indexOf(index);
        }
        this._data[index] = deepMergeKey(this._data[index], false, item);
        this.optimizeData();
        if (options.refreshSchema) {
            this.resetColumns({ emitReload: options.emitReload });
            return this;
        }
        return this.refreshData();
    }
    // #endregion
    // #region sort
    sort(col, idx, value) {
        if (this.multiSort) {
            col._sort.default = value;
            col._sort.tick = this.dataSource.nextSortTick;
        }
        else {
            this._columns.forEach((item, index) => (item._sort.default = index === idx ? value : null));
        }
        this.cdr.detectChanges();
        this.loadPageData();
        const res = {
            value,
            map: this.dataSource.getReqSortMap(this.singleSort, this.multiSort, this._columns),
            column: col
        };
        this.changeEmit('sort', res);
    }
    clearSort() {
        this._columns.forEach(item => (item._sort.default = null));
        return this;
    }
    // #endregion
    // #region filter
    _handleFilter(col, confirm) {
        if (!confirm) {
            this.columnSource.cleanFilter(col);
        }
        // 过滤表示一种数据的变化应重置页码为 `1`
        this.pi = 1;
        this.columnSource.updateDefault(col.filter);
        this.loadPageData();
        this.changeEmit('filter', col);
    }
    handleFilterNotify(value) {
        this.changeEmit('filterChange', value);
    }
    clearFilter() {
        this._columns.filter(w => w.filter && w.filter.default === true).forEach(col => this.columnSource.cleanFilter(col));
        return this;
    }
    // #endregion
    // #region checkbox
    /** 清除所有 `checkbox` */
    clearCheck() {
        return this.checkAll(false);
    }
    _refCheck() {
        const validData = this._data.filter(w => !w.disabled);
        const checkedList = validData.filter(w => w.checked === true);
        this._allChecked = checkedList.length > 0 && checkedList.length === validData.length;
        const allUnChecked = validData.every(value => !value.checked);
        this._indeterminate = !this._allChecked && !allUnChecked;
        this._allCheckedDisabled = this._data.length === this._data.filter(w => w.disabled).length;
        return this.cd();
    }
    checkAll(checked) {
        checked = typeof checked === 'undefined' ? this._allChecked : checked;
        this._data.filter(w => !w.disabled).forEach(i => (i.checked = checked));
        return this._refCheck()._checkNotify().refreshData();
    }
    _rowSelection(row) {
        row.select(this._data);
        return this._refCheck()._checkNotify();
    }
    _checkNotify() {
        const res = this._data.filter(w => !w.disabled && w.checked === true);
        this.changeEmit('checkbox', res);
        return this;
    }
    // #endregion
    // #region radio
    /** 清除所有 `radio` */
    clearRadio() {
        this._data.filter(w => w.checked).forEach(item => (item.checked = false));
        this.changeEmit('radio', null);
        return this.refreshData();
    }
    // #endregion
    _handleTd(ev) {
        switch (ev.type) {
            case 'checkbox':
                this._refCheck()._checkNotify();
                break;
            case 'radio':
                this.changeEmit('radio', ev.item);
                this.refreshData();
                break;
        }
    }
    // #region export
    /**
     * 导出当前页，确保已经注册 `XlsxModule`
     *
     * @param newData 重新指定数据；若为 `true` 表示使用 `filteredData` 数据
     * @param opt 额外参数
     */
    export(newData, opt) {
        const data = Array.isArray(newData)
            ? this.dataSource.optimizeData({ columns: this._columns, result: newData })
            : this._data;
        (newData === true ? from(this.filteredData) : of(data)).subscribe((res) => this.exportSrv.export({
            columens: this._columns,
            ...opt,
            data: res
        }));
    }
    // #endregion
    // #region resizable
    colResize({ width }, column) {
        column.width = `${width}px`;
        this.changeEmit('resize', column);
    }
    // #endregion
    // #region contextmenu
    onContextmenu(event) {
        if (!this.contextmenu) {
            return;
        }
        event.preventDefault();
        event.stopPropagation();
        const colEl = event.target.closest('[data-col-index]');
        if (!colEl) {
            return;
        }
        const colIndex = Number(colEl.dataset.colIndex);
        const rowIndex = Number(colEl.closest('tr').dataset.index);
        const isTitle = isNaN(rowIndex);
        const obs$ = this.contextmenu({
            event,
            type: isTitle ? 'head' : 'body',
            rowIndex: isTitle ? null : rowIndex,
            colIndex,
            data: isTitle ? null : this.list[rowIndex],
            column: this._columns[colIndex]
        });
        (isObservable(obs$) ? obs$ : of(obs$))
            .pipe(takeUntil(this.destroy$), filter(res => res.length > 0))
            .subscribe(res => {
            this.contextmenuList = res.map(i => {
                if (!Array.isArray(i.children)) {
                    i.children = [];
                }
                return i;
            });
            this.cdr.detectChanges();
            this.cms.create(event, this.contextmenuTpl);
        });
    }
    // #endregion
    get cdkVirtualScrollViewport() {
        return this.orgTable.cdkVirtualScrollViewport;
    }
    resetColumns(options) {
        options = { emitReload: true, preClearData: false, ...options };
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
    refreshColumns() {
        const res = this.columnSource.process(this.columns, {
            widthMode: this.widthMode,
            resizable: this._resizable,
            safeType: this.cog.safeType
        });
        this._columns = res.columns;
        this._headers = res.headers;
        if (this.customWidthConfig === false && res.headerWidths != null) {
            this._widthConfig = res.headerWidths;
        }
        return this;
    }
    optimizeData() {
        this._data = this.dataSource.optimizeData({
            columns: this._columns,
            result: this._data,
            rowClassName: this.rowClassName
        });
        return this;
    }
    /**
     * Return pure data, `st` internally maintains a set of data for caching, this part of data may affect the backend
     *
     * 返回纯净数据，`st` 内部会维护一组用于缓存的数据，这部分数据可能会影响后端
     */
    pureItem(itemOrIndex) {
        if (typeof itemOrIndex === 'number') {
            itemOrIndex = this._data[itemOrIndex];
        }
        if (!itemOrIndex) {
            return null;
        }
        const copyItem = deepCopy(itemOrIndex);
        delete copyItem._values;
        return copyItem;
    }
    ngAfterViewInit() {
        this.columnSource.restoreAllRender(this._columns);
    }
    ngOnChanges(changes) {
        if (changes.columns) {
            this.refreshColumns().optimizeData();
        }
        const changeData = changes.data;
        if (changeData && changeData.currentValue && !(this.req.lazyLoad && changeData.firstChange)) {
            this.loadPageData();
        }
        if (changes.loading) {
            this._loading = changes.loading.currentValue;
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
STComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: STComponent, deps: [{ token: ALAIN_I18N_TOKEN, optional: true }, { token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i1.STExport }, { token: DOCUMENT }, { token: i2.STColumnSource }, { token: i3.STDataSource }, { token: i4.DelonLocaleService }, { token: i5.AlainConfigService }, { token: i6.NzContextMenuService }], target: i0.ɵɵFactoryTarget.Component });
STComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.0", type: STComponent, selector: "st", inputs: { req: "req", res: "res", page: "page", data: "data", columns: "columns", contextmenu: "contextmenu", ps: "ps", pi: "pi", total: "total", loading: "loading", loadingDelay: "loadingDelay", loadingIndicator: "loadingIndicator", bordered: "bordered", size: "size", scroll: "scroll", singleSort: "singleSort", multiSort: "multiSort", rowClassName: "rowClassName", clickRowClassName: "clickRowClassName", widthMode: "widthMode", widthConfig: "widthConfig", resizable: "resizable", header: "header", showHeader: "showHeader", footer: "footer", bodyHeader: "bodyHeader", body: "body", expandRowByClick: "expandRowByClick", expandAccordion: "expandAccordion", expand: "expand", noResult: "noResult", responsive: "responsive", responsiveHideHeaderFooter: "responsiveHideHeaderFooter", virtualScroll: "virtualScroll", virtualItemSize: "virtualItemSize", virtualMaxBufferPx: "virtualMaxBufferPx", virtualMinBufferPx: "virtualMinBufferPx", customRequest: "customRequest", virtualForTrackBy: "virtualForTrackBy" }, outputs: { error: "error", change: "change" }, host: { properties: { "class.st": "true", "class.st__p-left": "page.placement === 'left'", "class.st__p-center": "page.placement === 'center'", "class.st__width-strict": "widthMode.type === 'strict'", "class.ant-table-rep": "responsive", "class.ant-table-rep__hide-header-footer": "responsiveHideHeaderFooter" } }, providers: [STDataSource, STRowSource, STColumnSource, STExport, DatePipe, YNPipe, DecimalPipe], viewQueries: [{ propertyName: "orgTable", first: true, predicate: ["table"], descendants: true }, { propertyName: "contextmenuTpl", first: true, predicate: ["contextmenuTpl"], descendants: true }], exportAs: ["st"], usesOnChanges: true, ngImport: i0, template: "<ng-template #titleTpl let-i>\n  <span [innerHTML]=\"i._text\"></span>\n  <small *ngIf=\"i.optional\" class=\"st__head-optional\" [innerHTML]=\"i.optional\"></small>\n  <i\n    *ngIf=\"i.optionalHelp\"\n    class=\"st__head-tip\"\n    nz-tooltip\n    [nzTooltipTitle]=\"i.optionalHelp\"\n    nz-icon\n    nzType=\"question-circle\"\n  ></i>\n</ng-template>\n<ng-template #chkAllTpl let-custom>\n  <label\n    nz-checkbox\n    class=\"st__checkall\"\n    [nzDisabled]=\"_allCheckedDisabled\"\n    [(ngModel)]=\"_allChecked\"\n    [nzIndeterminate]=\"_indeterminate\"\n    (ngModelChange)=\"checkAll()\"\n    [class.ant-table-selection-select-all-custom]=\"custom\"\n  ></label>\n</ng-template>\n<nz-table\n  #table\n  [nzData]=\"_data\"\n  [(nzPageIndex)]=\"pi\"\n  (nzPageIndexChange)=\"_change('pi')\"\n  [(nzPageSize)]=\"ps\"\n  (nzPageSizeChange)=\"_change('ps')\"\n  [nzTotal]=\"total\"\n  [nzShowPagination]=\"_isPagination\"\n  [nzFrontPagination]=\"false\"\n  [nzBordered]=\"bordered\"\n  [nzSize]=\"size\"\n  [nzLoading]=\"_loading\"\n  [nzLoadingDelay]=\"loadingDelay\"\n  [nzLoadingIndicator]=\"loadingIndicator\"\n  [nzTitle]=\"header!\"\n  [nzFooter]=\"footer!\"\n  [nzScroll]=\"scroll\"\n  [nzVirtualItemSize]=\"virtualItemSize\"\n  [nzVirtualMaxBufferPx]=\"virtualMaxBufferPx\"\n  [nzVirtualMinBufferPx]=\"virtualMinBufferPx\"\n  [nzVirtualForTrackBy]=\"virtualForTrackBy\"\n  [nzNoResult]=\"noResult!\"\n  [nzPageSizeOptions]=\"page.pageSizes!\"\n  [nzShowQuickJumper]=\"page.showQuickJumper\"\n  [nzShowSizeChanger]=\"page.showSize\"\n  [nzPaginationPosition]=\"page.position!\"\n  [nzPaginationType]=\"page.type!\"\n  [nzItemRender]=\"page.itemRender!\"\n  [nzSimple]=\"page.simple\"\n  [nzShowTotal]=\"totalTpl\"\n  [nzWidthConfig]=\"_widthConfig\"\n  (contextmenu)=\"onContextmenu($event)\"\n>\n  <thead *ngIf=\"showHeader\">\n    <tr *ngFor=\"let row of _headers; let rowFirst = first\">\n      <th *ngIf=\"rowFirst && expand\" nzWidth=\"50px\" [rowSpan]=\"_headers.length\"></th>\n      <ng-container *ngFor=\"let h of row; let index = index; let last = last\">\n        <th\n          *let=\"h.column as _c\"\n          [colSpan]=\"h.colSpan\"\n          [rowSpan]=\"h.rowSpan\"\n          [nzWidth]=\"$any(_c).width\"\n          [nzLeft]=\"_c._left!\"\n          [nzRight]=\"_c._right!\"\n          [ngClass]=\"_c.className!\"\n          [attr.data-col]=\"_c.indexKey\"\n          [attr.data-col-index]=\"index\"\n          [nzShowSort]=\"_c._sort.enabled\"\n          [nzSortOrder]=\"$any(_c)._sort.default\"\n          (nzSortOrderChange)=\"sort(_c, index, $event)\"\n          [nzCustomFilter]=\"$any(_c).filter\"\n          nz-resizable\n          [nzDisabled]=\"last || $any(_c).resizable.disabled\"\n          [nzMaxWidth]=\"$any(_c).resizable.maxWidth\"\n          [nzMinWidth]=\"$any(_c).resizable.minWidth\"\n          [nzBounds]=\"$any(_c).resizable.bounds\"\n          [nzPreview]=\"$any(_c).resizable.preview\"\n          (nzResizeEnd)=\"colResize($event, _c)\"\n        >\n          <nz-resize-handle *ngIf=\"$any(!last && !$any(_c).resizable.disabled)\" nzDirection=\"right\">\n            <i></i>\n          </nz-resize-handle>\n          <ng-template\n            #renderTitle\n            [ngTemplateOutlet]=\"_c.__renderTitle!\"\n            [ngTemplateOutletContext]=\"{ $implicit: h.column, index: index }\"\n          ></ng-template>\n          <ng-container *ngIf=\"!_c.__renderTitle; else renderTitle\">\n            <ng-container [ngSwitch]=\"_c.type\">\n              <ng-container *ngSwitchCase=\"'checkbox'\">\n                <ng-container *ngIf=\"_c.selections!.length === 0\">\n                  <ng-template [ngTemplateOutlet]=\"chkAllTpl\" [ngTemplateOutletContext]=\"{ $implicit: false }\">\n                  </ng-template>\n                </ng-container>\n                <div *ngIf=\"_c.selections!.length > 0\" class=\"ant-table-selection\">\n                  <ng-template [ngTemplateOutlet]=\"chkAllTpl\" [ngTemplateOutletContext]=\"{ $implicit: true }\">\n                  </ng-template>\n                  <div *ngIf=\"_c.selections!.length\" class=\"ant-table-selection-extra\">\n                    <div\n                      nz-dropdown\n                      nzPlacement=\"bottomLeft\"\n                      [nzDropdownMenu]=\"selectionMenu\"\n                      class=\"ant-table-selection-down st__checkall-selection\"\n                    >\n                      <i nz-icon nzType=\"down\"></i>\n                    </div>\n                  </div>\n                  <nz-dropdown-menu #selectionMenu=\"nzDropdownMenu\">\n                    <ul nz-menu class=\"ant-table-selection-menu\">\n                      <li\n                        nz-menu-item\n                        *ngFor=\"let rw of _c.selections\"\n                        (click)=\"_rowSelection(rw)\"\n                        [innerHTML]=\"rw.text\"\n                      ></li>\n                    </ul>\n                  </nz-dropdown-menu>\n                </div>\n              </ng-container>\n              <ng-container *ngSwitchDefault>\n                <ng-template\n                  [ngTemplateOutlet]=\"titleTpl\"\n                  [ngTemplateOutletContext]=\"{ $implicit: _c.title }\"\n                ></ng-template>\n              </ng-container>\n            </ng-container>\n          </ng-container>\n          <ng-container *ngIf=\"_c.filter\">\n            <st-filter\n              nz-th-extra\n              [col]=\"h.column\"\n              [f]=\"_c.filter\"\n              [locale]=\"locale\"\n              (n)=\"handleFilterNotify($event)\"\n              (handle)=\"_handleFilter(_c, $event)\"\n            ></st-filter>\n          </ng-container>\n        </th>\n      </ng-container>\n    </tr>\n  </thead>\n  <tbody class=\"st__body\">\n    <ng-container *ngIf=\"!_loading\">\n      <ng-template\n        [ngTemplateOutlet]=\"bodyHeader!\"\n        [ngTemplateOutletContext]=\"{ $implicit: _statistical }\"\n      ></ng-template>\n    </ng-container>\n    <ng-template #bodyTpl let-i let-index=\"index\">\n      <tr\n        [attr.data-index]=\"index\"\n        (click)=\"_rowClick($event, i, index, false)\"\n        (dblclick)=\"_rowClick($event, i, index, true)\"\n        [ngClass]=\"i._rowClassName\"\n      >\n        <td\n          *ngIf=\"expand\"\n          [nzShowExpand]=\"expand && i.showExpand !== false\"\n          [nzExpand]=\"i.expand\"\n          (nzExpandChange)=\"_expandChange(i, $event)\"\n          (click)=\"_stopPropagation($event)\"\n          nzWidth=\"50px\"\n        ></td>\n        <td\n          *ngFor=\"let c of _columns; let cIdx = index\"\n          [nzLeft]=\"!!c._left\"\n          [nzRight]=\"!!c._right\"\n          [attr.data-col-index]=\"cIdx\"\n          [ngClass]=\"c._className!\"\n          [attr.colspan]=\"c.colSpan\"\n        >\n          <span *ngIf=\"responsive\" class=\"ant-table-rep__title\">\n            <ng-template [ngTemplateOutlet]=\"titleTpl\" [ngTemplateOutletContext]=\"{ $implicit: c.title }\"></ng-template>\n          </span>\n          <st-td [data]=\"_data\" [i]=\"i\" [index]=\"index\" [c]=\"c\" [cIdx]=\"cIdx\" (n)=\"_handleTd($event)\"></st-td>\n        </td>\n      </tr>\n      <tr [nzExpand]=\"i.expand\">\n        <ng-template\n          [ngTemplateOutlet]=\"expand\"\n          [ngTemplateOutletContext]=\"{ $implicit: i, index: index }\"\n        ></ng-template>\n      </tr>\n    </ng-template>\n    <ng-container *ngIf=\"!virtualScroll\">\n      <ng-container *ngFor=\"let i of _data; let index = index\">\n        <ng-template [ngTemplateOutlet]=\"bodyTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, index: index }\">\n        </ng-template>\n      </ng-container>\n    </ng-container>\n    <ng-container *ngIf=\"virtualScroll\">\n      <ng-template nz-virtual-scroll let-i let-index=\"index\">\n        <ng-template [ngTemplateOutlet]=\"bodyTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, index: index }\">\n        </ng-template>\n      </ng-template>\n    </ng-container>\n    <ng-container *ngIf=\"!_loading\">\n      <ng-template [ngTemplateOutlet]=\"body!\" [ngTemplateOutletContext]=\"{ $implicit: _statistical }\"></ng-template>\n    </ng-container>\n  </tbody>\n  <ng-template #totalTpl let-range=\"range\" let-total>{{ renderTotal(total, range) }}</ng-template>\n</nz-table>\n<nz-dropdown-menu #contextmenuTpl=\"nzDropdownMenu\">\n  <ul nz-menu class=\"st__contextmenu\">\n    <ng-container *ngFor=\"let i of contextmenuList\">\n      <li nz-menu-item *ngIf=\"i.children!.length === 0\" (click)=\"i.fn!(i)\" [innerHTML]=\"i.text\"></li>\n      <li nz-submenu *ngIf=\"i.children!.length > 0\" [nzTitle]=\"i.text\">\n        <ul>\n          <li nz-menu-item *ngFor=\"let ci of i.children\" (click)=\"ci.fn!(ci)\" [innerHTML]=\"ci.text\"></li>\n        </ul>\n      </li>\n    </ng-container>\n  </ul>\n</nz-dropdown-menu>\n", dependencies: [{ kind: "directive", type: i0.forwardRef(function () { return i7.NgClass; }), selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i0.forwardRef(function () { return i7.NgForOf; }), selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i0.forwardRef(function () { return i7.NgIf; }), selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i0.forwardRef(function () { return i7.NgTemplateOutlet; }), selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i0.forwardRef(function () { return i7.NgSwitch; }), selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: i0.forwardRef(function () { return i7.NgSwitchCase; }), selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "directive", type: i0.forwardRef(function () { return i7.NgSwitchDefault; }), selector: "[ngSwitchDefault]" }, { kind: "directive", type: i0.forwardRef(function () { return i8.NgControlStatus; }), selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i0.forwardRef(function () { return i8.NgModel; }), selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i0.forwardRef(function () { return i9.LetDirective; }), selector: "[let]", inputs: ["let"] }, { kind: "component", type: i0.forwardRef(function () { return i10.NzTableComponent; }), selector: "nz-table", inputs: ["nzTableLayout", "nzShowTotal", "nzItemRender", "nzTitle", "nzFooter", "nzNoResult", "nzPageSizeOptions", "nzVirtualItemSize", "nzVirtualMaxBufferPx", "nzVirtualMinBufferPx", "nzVirtualForTrackBy", "nzLoadingDelay", "nzPageIndex", "nzPageSize", "nzTotal", "nzWidthConfig", "nzData", "nzPaginationPosition", "nzScroll", "nzPaginationType", "nzFrontPagination", "nzTemplateMode", "nzShowPagination", "nzLoading", "nzOuterBordered", "nzLoadingIndicator", "nzBordered", "nzSize", "nzShowSizeChanger", "nzHideOnSinglePage", "nzShowQuickJumper", "nzSimple"], outputs: ["nzPageSizeChange", "nzPageIndexChange", "nzQueryParams", "nzCurrentPageDataChange"], exportAs: ["nzTable"] }, { kind: "component", type: i0.forwardRef(function () { return i10.NzThAddOnComponent; }), selector: "th[nzColumnKey], th[nzSortFn], th[nzSortOrder], th[nzFilters], th[nzShowSort], th[nzShowFilter], th[nzCustomFilter]", inputs: ["nzColumnKey", "nzFilterMultiple", "nzSortOrder", "nzSortPriority", "nzSortDirections", "nzFilters", "nzSortFn", "nzFilterFn", "nzShowSort", "nzShowFilter", "nzCustomFilter"], outputs: ["nzCheckedChange", "nzSortOrderChange", "nzFilterChange"] }, { kind: "directive", type: i0.forwardRef(function () { return i10.NzTableCellDirective; }), selector: "th:not(.nz-disable-th):not([mat-cell]), td:not(.nz-disable-td):not([mat-cell])" }, { kind: "directive", type: i0.forwardRef(function () { return i10.NzThMeasureDirective; }), selector: "th", inputs: ["nzWidth", "colspan", "colSpan", "rowspan", "rowSpan"] }, { kind: "component", type: i0.forwardRef(function () { return i10.NzTdAddOnComponent; }), selector: "td[nzChecked], td[nzDisabled], td[nzIndeterminate], td[nzIndentSize], td[nzExpand], td[nzShowExpand], td[nzShowCheckbox]", inputs: ["nzChecked", "nzDisabled", "nzIndeterminate", "nzIndentSize", "nzShowExpand", "nzShowCheckbox", "nzExpand"], outputs: ["nzCheckedChange", "nzExpandChange"] }, { kind: "component", type: i0.forwardRef(function () { return i10.NzTheadComponent; }), selector: "thead:not(.ant-table-thead)", outputs: ["nzSortOrderChange"] }, { kind: "component", type: i0.forwardRef(function () { return i10.NzTbodyComponent; }), selector: "tbody" }, { kind: "directive", type: i0.forwardRef(function () { return i10.NzTrDirective; }), selector: "tr:not([mat-row]):not([mat-header-row]):not([nz-table-measure-row]):not([nzExpand]):not([nz-table-fixed-row])" }, { kind: "directive", type: i0.forwardRef(function () { return i10.NzTableVirtualScrollDirective; }), selector: "[nz-virtual-scroll]", exportAs: ["nzVirtualScroll"] }, { kind: "directive", type: i0.forwardRef(function () { return i10.NzCellFixedDirective; }), selector: "td[nzRight],th[nzRight],td[nzLeft],th[nzLeft]", inputs: ["nzRight", "nzLeft", "colspan", "colSpan"] }, { kind: "directive", type: i0.forwardRef(function () { return i10.NzTrExpandDirective; }), selector: "tr[nzExpand]", inputs: ["nzExpand"] }, { kind: "component", type: i0.forwardRef(function () { return i10.NzTableFixedRowComponent; }), selector: "tr[nz-table-fixed-row], tr[nzExpand]" }, { kind: "directive", type: i0.forwardRef(function () { return i11.NzIconDirective; }), selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "component", type: i0.forwardRef(function () { return i12.NzCheckboxComponent; }), selector: "[nz-checkbox]", inputs: ["nzValue", "nzAutoFocus", "nzDisabled", "nzIndeterminate", "nzChecked", "nzId"], outputs: ["nzCheckedChange"], exportAs: ["nzCheckbox"] }, { kind: "directive", type: i0.forwardRef(function () { return i13.NzMenuDirective; }), selector: "[nz-menu]", inputs: ["nzInlineIndent", "nzTheme", "nzMode", "nzInlineCollapsed", "nzSelectable"], outputs: ["nzClick"], exportAs: ["nzMenu"] }, { kind: "directive", type: i0.forwardRef(function () { return i13.NzMenuItemDirective; }), selector: "[nz-menu-item]", inputs: ["nzPaddingLeft", "nzDisabled", "nzSelected", "nzDanger", "nzMatchRouterExact", "nzMatchRouter"], exportAs: ["nzMenuItem"] }, { kind: "component", type: i0.forwardRef(function () { return i13.NzSubMenuComponent; }), selector: "[nz-submenu]", inputs: ["nzMenuClassName", "nzPaddingLeft", "nzTitle", "nzIcon", "nzOpen", "nzDisabled"], outputs: ["nzOpenChange"], exportAs: ["nzSubmenu"] }, { kind: "directive", type: i0.forwardRef(function () { return i6.NzDropDownDirective; }), selector: "[nz-dropdown]", inputs: ["nzDropdownMenu", "nzTrigger", "nzMatchWidthElement", "nzBackdrop", "nzClickHide", "nzDisabled", "nzVisible", "nzOverlayClassName", "nzOverlayStyle", "nzPlacement"], outputs: ["nzVisibleChange"], exportAs: ["nzDropdown"] }, { kind: "component", type: i0.forwardRef(function () { return i6.NzDropdownMenuComponent; }), selector: "nz-dropdown-menu", exportAs: ["nzDropdownMenu"] }, { kind: "directive", type: i0.forwardRef(function () { return i14.NzTooltipDirective; }), selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }, { kind: "directive", type: i0.forwardRef(function () { return i15.NzResizableDirective; }), selector: "[nz-resizable]", inputs: ["nzBounds", "nzMaxHeight", "nzMaxWidth", "nzMinHeight", "nzMinWidth", "nzGridColumnCount", "nzMaxColumn", "nzMinColumn", "nzLockAspectRatio", "nzPreview", "nzDisabled"], outputs: ["nzResize", "nzResizeEnd", "nzResizeStart"], exportAs: ["nzResizable"] }, { kind: "component", type: i0.forwardRef(function () { return i15.NzResizeHandleComponent; }), selector: "nz-resize-handle, [nz-resize-handle]", inputs: ["nzDirection"], outputs: ["nzMouseDown"], exportAs: ["nzResizeHandle"] }, { kind: "component", type: i0.forwardRef(function () { return i16.STFilterComponent; }), selector: "st-filter", inputs: ["col", "locale", "f"], outputs: ["n", "handle"] }, { kind: "component", type: i0.forwardRef(function () { return STTdComponent; }), selector: "st-td", inputs: ["c", "cIdx", "data", "i", "index"], outputs: ["n"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
__decorate([
    InputNumber()
], STComponent.prototype, "ps", void 0);
__decorate([
    InputNumber()
], STComponent.prototype, "pi", void 0);
__decorate([
    InputNumber()
], STComponent.prototype, "total", void 0);
__decorate([
    InputNumber()
], STComponent.prototype, "loadingDelay", void 0);
__decorate([
    InputBoolean()
], STComponent.prototype, "bordered", void 0);
__decorate([
    InputBoolean()
], STComponent.prototype, "showHeader", void 0);
__decorate([
    InputBoolean()
], STComponent.prototype, "expandRowByClick", void 0);
__decorate([
    InputBoolean()
], STComponent.prototype, "expandAccordion", void 0);
__decorate([
    InputBoolean()
], STComponent.prototype, "responsive", void 0);
__decorate([
    InputBoolean()
], STComponent.prototype, "responsiveHideHeaderFooter", void 0);
__decorate([
    InputBoolean()
], STComponent.prototype, "virtualScroll", void 0);
__decorate([
    InputNumber()
], STComponent.prototype, "virtualItemSize", void 0);
__decorate([
    InputNumber()
], STComponent.prototype, "virtualMaxBufferPx", void 0);
__decorate([
    InputNumber()
], STComponent.prototype, "virtualMinBufferPx", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: STComponent, decorators: [{
            type: Component,
            args: [{ selector: 'st', exportAs: 'st', providers: [STDataSource, STRowSource, STColumnSource, STExport, DatePipe, YNPipe, DecimalPipe], host: {
                        '[class.st]': `true`,
                        '[class.st__p-left]': `page.placement === 'left'`,
                        '[class.st__p-center]': `page.placement === 'center'`,
                        '[class.st__width-strict]': `widthMode.type === 'strict'`,
                        '[class.ant-table-rep]': `responsive`,
                        '[class.ant-table-rep__hide-header-footer]': `responsiveHideHeaderFooter`
                    }, preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<ng-template #titleTpl let-i>\n  <span [innerHTML]=\"i._text\"></span>\n  <small *ngIf=\"i.optional\" class=\"st__head-optional\" [innerHTML]=\"i.optional\"></small>\n  <i\n    *ngIf=\"i.optionalHelp\"\n    class=\"st__head-tip\"\n    nz-tooltip\n    [nzTooltipTitle]=\"i.optionalHelp\"\n    nz-icon\n    nzType=\"question-circle\"\n  ></i>\n</ng-template>\n<ng-template #chkAllTpl let-custom>\n  <label\n    nz-checkbox\n    class=\"st__checkall\"\n    [nzDisabled]=\"_allCheckedDisabled\"\n    [(ngModel)]=\"_allChecked\"\n    [nzIndeterminate]=\"_indeterminate\"\n    (ngModelChange)=\"checkAll()\"\n    [class.ant-table-selection-select-all-custom]=\"custom\"\n  ></label>\n</ng-template>\n<nz-table\n  #table\n  [nzData]=\"_data\"\n  [(nzPageIndex)]=\"pi\"\n  (nzPageIndexChange)=\"_change('pi')\"\n  [(nzPageSize)]=\"ps\"\n  (nzPageSizeChange)=\"_change('ps')\"\n  [nzTotal]=\"total\"\n  [nzShowPagination]=\"_isPagination\"\n  [nzFrontPagination]=\"false\"\n  [nzBordered]=\"bordered\"\n  [nzSize]=\"size\"\n  [nzLoading]=\"_loading\"\n  [nzLoadingDelay]=\"loadingDelay\"\n  [nzLoadingIndicator]=\"loadingIndicator\"\n  [nzTitle]=\"header!\"\n  [nzFooter]=\"footer!\"\n  [nzScroll]=\"scroll\"\n  [nzVirtualItemSize]=\"virtualItemSize\"\n  [nzVirtualMaxBufferPx]=\"virtualMaxBufferPx\"\n  [nzVirtualMinBufferPx]=\"virtualMinBufferPx\"\n  [nzVirtualForTrackBy]=\"virtualForTrackBy\"\n  [nzNoResult]=\"noResult!\"\n  [nzPageSizeOptions]=\"page.pageSizes!\"\n  [nzShowQuickJumper]=\"page.showQuickJumper\"\n  [nzShowSizeChanger]=\"page.showSize\"\n  [nzPaginationPosition]=\"page.position!\"\n  [nzPaginationType]=\"page.type!\"\n  [nzItemRender]=\"page.itemRender!\"\n  [nzSimple]=\"page.simple\"\n  [nzShowTotal]=\"totalTpl\"\n  [nzWidthConfig]=\"_widthConfig\"\n  (contextmenu)=\"onContextmenu($event)\"\n>\n  <thead *ngIf=\"showHeader\">\n    <tr *ngFor=\"let row of _headers; let rowFirst = first\">\n      <th *ngIf=\"rowFirst && expand\" nzWidth=\"50px\" [rowSpan]=\"_headers.length\"></th>\n      <ng-container *ngFor=\"let h of row; let index = index; let last = last\">\n        <th\n          *let=\"h.column as _c\"\n          [colSpan]=\"h.colSpan\"\n          [rowSpan]=\"h.rowSpan\"\n          [nzWidth]=\"$any(_c).width\"\n          [nzLeft]=\"_c._left!\"\n          [nzRight]=\"_c._right!\"\n          [ngClass]=\"_c.className!\"\n          [attr.data-col]=\"_c.indexKey\"\n          [attr.data-col-index]=\"index\"\n          [nzShowSort]=\"_c._sort.enabled\"\n          [nzSortOrder]=\"$any(_c)._sort.default\"\n          (nzSortOrderChange)=\"sort(_c, index, $event)\"\n          [nzCustomFilter]=\"$any(_c).filter\"\n          nz-resizable\n          [nzDisabled]=\"last || $any(_c).resizable.disabled\"\n          [nzMaxWidth]=\"$any(_c).resizable.maxWidth\"\n          [nzMinWidth]=\"$any(_c).resizable.minWidth\"\n          [nzBounds]=\"$any(_c).resizable.bounds\"\n          [nzPreview]=\"$any(_c).resizable.preview\"\n          (nzResizeEnd)=\"colResize($event, _c)\"\n        >\n          <nz-resize-handle *ngIf=\"$any(!last && !$any(_c).resizable.disabled)\" nzDirection=\"right\">\n            <i></i>\n          </nz-resize-handle>\n          <ng-template\n            #renderTitle\n            [ngTemplateOutlet]=\"_c.__renderTitle!\"\n            [ngTemplateOutletContext]=\"{ $implicit: h.column, index: index }\"\n          ></ng-template>\n          <ng-container *ngIf=\"!_c.__renderTitle; else renderTitle\">\n            <ng-container [ngSwitch]=\"_c.type\">\n              <ng-container *ngSwitchCase=\"'checkbox'\">\n                <ng-container *ngIf=\"_c.selections!.length === 0\">\n                  <ng-template [ngTemplateOutlet]=\"chkAllTpl\" [ngTemplateOutletContext]=\"{ $implicit: false }\">\n                  </ng-template>\n                </ng-container>\n                <div *ngIf=\"_c.selections!.length > 0\" class=\"ant-table-selection\">\n                  <ng-template [ngTemplateOutlet]=\"chkAllTpl\" [ngTemplateOutletContext]=\"{ $implicit: true }\">\n                  </ng-template>\n                  <div *ngIf=\"_c.selections!.length\" class=\"ant-table-selection-extra\">\n                    <div\n                      nz-dropdown\n                      nzPlacement=\"bottomLeft\"\n                      [nzDropdownMenu]=\"selectionMenu\"\n                      class=\"ant-table-selection-down st__checkall-selection\"\n                    >\n                      <i nz-icon nzType=\"down\"></i>\n                    </div>\n                  </div>\n                  <nz-dropdown-menu #selectionMenu=\"nzDropdownMenu\">\n                    <ul nz-menu class=\"ant-table-selection-menu\">\n                      <li\n                        nz-menu-item\n                        *ngFor=\"let rw of _c.selections\"\n                        (click)=\"_rowSelection(rw)\"\n                        [innerHTML]=\"rw.text\"\n                      ></li>\n                    </ul>\n                  </nz-dropdown-menu>\n                </div>\n              </ng-container>\n              <ng-container *ngSwitchDefault>\n                <ng-template\n                  [ngTemplateOutlet]=\"titleTpl\"\n                  [ngTemplateOutletContext]=\"{ $implicit: _c.title }\"\n                ></ng-template>\n              </ng-container>\n            </ng-container>\n          </ng-container>\n          <ng-container *ngIf=\"_c.filter\">\n            <st-filter\n              nz-th-extra\n              [col]=\"h.column\"\n              [f]=\"_c.filter\"\n              [locale]=\"locale\"\n              (n)=\"handleFilterNotify($event)\"\n              (handle)=\"_handleFilter(_c, $event)\"\n            ></st-filter>\n          </ng-container>\n        </th>\n      </ng-container>\n    </tr>\n  </thead>\n  <tbody class=\"st__body\">\n    <ng-container *ngIf=\"!_loading\">\n      <ng-template\n        [ngTemplateOutlet]=\"bodyHeader!\"\n        [ngTemplateOutletContext]=\"{ $implicit: _statistical }\"\n      ></ng-template>\n    </ng-container>\n    <ng-template #bodyTpl let-i let-index=\"index\">\n      <tr\n        [attr.data-index]=\"index\"\n        (click)=\"_rowClick($event, i, index, false)\"\n        (dblclick)=\"_rowClick($event, i, index, true)\"\n        [ngClass]=\"i._rowClassName\"\n      >\n        <td\n          *ngIf=\"expand\"\n          [nzShowExpand]=\"expand && i.showExpand !== false\"\n          [nzExpand]=\"i.expand\"\n          (nzExpandChange)=\"_expandChange(i, $event)\"\n          (click)=\"_stopPropagation($event)\"\n          nzWidth=\"50px\"\n        ></td>\n        <td\n          *ngFor=\"let c of _columns; let cIdx = index\"\n          [nzLeft]=\"!!c._left\"\n          [nzRight]=\"!!c._right\"\n          [attr.data-col-index]=\"cIdx\"\n          [ngClass]=\"c._className!\"\n          [attr.colspan]=\"c.colSpan\"\n        >\n          <span *ngIf=\"responsive\" class=\"ant-table-rep__title\">\n            <ng-template [ngTemplateOutlet]=\"titleTpl\" [ngTemplateOutletContext]=\"{ $implicit: c.title }\"></ng-template>\n          </span>\n          <st-td [data]=\"_data\" [i]=\"i\" [index]=\"index\" [c]=\"c\" [cIdx]=\"cIdx\" (n)=\"_handleTd($event)\"></st-td>\n        </td>\n      </tr>\n      <tr [nzExpand]=\"i.expand\">\n        <ng-template\n          [ngTemplateOutlet]=\"expand\"\n          [ngTemplateOutletContext]=\"{ $implicit: i, index: index }\"\n        ></ng-template>\n      </tr>\n    </ng-template>\n    <ng-container *ngIf=\"!virtualScroll\">\n      <ng-container *ngFor=\"let i of _data; let index = index\">\n        <ng-template [ngTemplateOutlet]=\"bodyTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, index: index }\">\n        </ng-template>\n      </ng-container>\n    </ng-container>\n    <ng-container *ngIf=\"virtualScroll\">\n      <ng-template nz-virtual-scroll let-i let-index=\"index\">\n        <ng-template [ngTemplateOutlet]=\"bodyTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, index: index }\">\n        </ng-template>\n      </ng-template>\n    </ng-container>\n    <ng-container *ngIf=\"!_loading\">\n      <ng-template [ngTemplateOutlet]=\"body!\" [ngTemplateOutletContext]=\"{ $implicit: _statistical }\"></ng-template>\n    </ng-container>\n  </tbody>\n  <ng-template #totalTpl let-range=\"range\" let-total>{{ renderTotal(total, range) }}</ng-template>\n</nz-table>\n<nz-dropdown-menu #contextmenuTpl=\"nzDropdownMenu\">\n  <ul nz-menu class=\"st__contextmenu\">\n    <ng-container *ngFor=\"let i of contextmenuList\">\n      <li nz-menu-item *ngIf=\"i.children!.length === 0\" (click)=\"i.fn!(i)\" [innerHTML]=\"i.text\"></li>\n      <li nz-submenu *ngIf=\"i.children!.length > 0\" [nzTitle]=\"i.text\">\n        <ul>\n          <li nz-menu-item *ngFor=\"let ci of i.children\" (click)=\"ci.fn!(ci)\" [innerHTML]=\"ci.text\"></li>\n        </ul>\n      </li>\n    </ng-container>\n  </ul>\n</nz-dropdown-menu>\n" }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [ALAIN_I18N_TOKEN]
                }] }, { type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i1.STExport }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: i2.STColumnSource }, { type: i3.STDataSource }, { type: i4.DelonLocaleService }, { type: i5.AlainConfigService }, { type: i6.NzContextMenuService }]; }, propDecorators: { orgTable: [{
                type: ViewChild,
                args: ['table']
            }], contextmenuTpl: [{
                type: ViewChild,
                args: ['contextmenuTpl']
            }], req: [{
                type: Input
            }], res: [{
                type: Input
            }], page: [{
                type: Input
            }], data: [{
                type: Input
            }], columns: [{
                type: Input
            }], contextmenu: [{
                type: Input
            }], ps: [{
                type: Input
            }], pi: [{
                type: Input
            }], total: [{
                type: Input
            }], loading: [{
                type: Input
            }], loadingDelay: [{
                type: Input
            }], loadingIndicator: [{
                type: Input
            }], bordered: [{
                type: Input
            }], size: [{
                type: Input
            }], scroll: [{
                type: Input
            }], singleSort: [{
                type: Input
            }], multiSort: [{
                type: Input
            }], rowClassName: [{
                type: Input
            }], clickRowClassName: [{
                type: Input
            }], widthMode: [{
                type: Input
            }], widthConfig: [{
                type: Input
            }], resizable: [{
                type: Input
            }], header: [{
                type: Input
            }], showHeader: [{
                type: Input
            }], footer: [{
                type: Input
            }], bodyHeader: [{
                type: Input
            }], body: [{
                type: Input
            }], expandRowByClick: [{
                type: Input
            }], expandAccordion: [{
                type: Input
            }], expand: [{
                type: Input
            }], noResult: [{
                type: Input
            }], responsive: [{
                type: Input
            }], responsiveHideHeaderFooter: [{
                type: Input
            }], error: [{
                type: Output
            }], change: [{
                type: Output
            }], virtualScroll: [{
                type: Input
            }], virtualItemSize: [{
                type: Input
            }], virtualMaxBufferPx: [{
                type: Input
            }], virtualMinBufferPx: [{
                type: Input
            }], customRequest: [{
                type: Input
            }], virtualForTrackBy: [{
                type: Input
            }] } });
export class STTdComponent {
    constructor(stComp, router, modalHelper, drawerHelper) {
        this.stComp = stComp;
        this.router = router;
        this.modalHelper = modalHelper;
        this.drawerHelper = drawerHelper;
        this.n = new EventEmitter();
    }
    get routerState() {
        const { pi, ps, total } = this.stComp;
        return { pi, ps, total };
    }
    report(type) {
        this.n.emit({ type, item: this.i, col: this.c });
    }
    _checkbox(value) {
        this.i.checked = value;
        this.report('checkbox');
    }
    _radio() {
        this.data.filter(w => !w.disabled).forEach(i => (i.checked = false));
        this.i.checked = true;
        this.report('radio');
    }
    _link(e) {
        this._stopPropagation(e);
        const res = this.c.click(this.i, this.stComp);
        if (typeof res === 'string') {
            this.router.navigateByUrl(res, { state: this.routerState });
        }
        return false;
    }
    _stopPropagation(ev) {
        ev.preventDefault();
        ev.stopPropagation();
    }
    _btn(btn, ev) {
        if (ev) {
            ev.stopPropagation();
        }
        const record = this.i;
        if (btn.type === 'modal' || btn.type === 'static') {
            const { modal } = btn;
            const obj = { [modal.paramsName]: record };
            this.modalHelper[btn.type === 'modal' ? 'create' : 'createStatic'](modal.component, { ...obj, ...(modal.params && modal.params(record)) }, deepMergeKey({}, true, this.stComp['cog'].modal, modal))
                .pipe(filter(w => typeof w !== 'undefined'))
                .subscribe((res) => this.btnCallback(record, btn, res));
            return;
        }
        else if (btn.type === 'drawer') {
            const { drawer } = btn;
            const obj = { [drawer.paramsName]: record };
            this.drawerHelper
                .create(drawer.title, drawer.component, { ...obj, ...(drawer.params && drawer.params(record)) }, deepMergeKey({}, true, this.stComp['cog'].drawer, drawer))
                .pipe(filter(w => typeof w !== 'undefined'))
                .subscribe(res => this.btnCallback(record, btn, res));
            return;
        }
        else if (btn.type === 'link') {
            const clickRes = this.btnCallback(record, btn);
            if (typeof clickRes === 'string') {
                this.router.navigateByUrl(clickRes, { state: this.routerState });
            }
            return;
        }
        this.btnCallback(record, btn);
    }
    btnCallback(record, btn, modal) {
        if (!btn.click)
            return;
        if (typeof btn.click === 'string') {
            switch (btn.click) {
                case 'load':
                    this.stComp.load();
                    break;
                case 'reload':
                    this.stComp.reload();
                    break;
            }
        }
        else {
            return btn.click(record, modal, this.stComp);
        }
    }
}
STTdComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: STTdComponent, deps: [{ token: STComponent, host: true }, { token: i17.Router }, { token: i4.ModalHelper }, { token: i4.DrawerHelper }], target: i0.ɵɵFactoryTarget.Component });
STTdComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.0", type: STTdComponent, selector: "st-td", inputs: { c: "c", cIdx: "cIdx", data: "data", i: "i", index: "index" }, outputs: { n: "n" }, ngImport: i0, template: "<ng-template #btnTpl let-i let-child=\"child\">\n  <ng-container *ngIf=\"!i.tooltip\">\n    <ng-template [ngTemplateOutlet]=\"btnItemTpl\" [ngTemplateOutletContext]=\"{ $implicit: i }\"></ng-template>\n  </ng-container>\n  <span *ngIf=\"i.tooltip\" nz-tooltip [nzTooltipTitle]=\"i.tooltip\" [class.d-block]=\"child\" [class.width-100]=\"child\">\n    <ng-template [ngTemplateOutlet]=\"btnItemTpl\" [ngTemplateOutletContext]=\"{ $implicit: i }\"></ng-template>\n  </span>\n</ng-template>\n<ng-template #btnItemTpl let-i>\n  <a\n    *ngIf=\"i.pop\"\n    nz-popconfirm\n    [nzPopconfirmTitle]=\"i.pop.title\"\n    [nzIcon]=\"i.pop.icon\"\n    [nzCondition]=\"i.pop.condition(i)\"\n    [nzCancelText]=\"i.pop.cancelText\"\n    [nzOkText]=\"i.pop.okText\"\n    [nzOkType]=\"i.pop.okType\"\n    (nzOnConfirm)=\"_btn(i)\"\n    class=\"st__btn-text\"\n    [ngClass]=\"i.className\"\n    (click)=\"_stopPropagation($event)\"\n  >\n    <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i }\"></ng-template>\n  </a>\n  <a *ngIf=\"!i.pop\" (click)=\"_btn(i, $event)\" class=\"st__btn-text\" [ngClass]=\"i.className\">\n    <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i }\"></ng-template>\n  </a>\n</ng-template>\n<ng-template #btnTextTpl let-i>\n  <ng-container *ngIf=\"i.icon\">\n    <i\n      *ngIf=\"!i.icon.iconfont\"\n      nz-icon\n      [nzType]=\"i.icon.type\"\n      [nzTheme]=\"i.icon.theme\"\n      [nzSpin]=\"i.icon.spin\"\n      [nzTwotoneColor]=\"i.icon.twoToneColor\"\n    ></i>\n    <i *ngIf=\"i.icon.iconfont\" nz-icon [nzIconfont]=\"i.icon.iconfont\"></i>\n  </ng-container>\n  <span [innerHTML]=\"i._text\" [ngClass]=\"{ 'pl-xs': i.icon }\"></span>\n</ng-template>\n<ng-template\n  #render\n  [ngTemplateOutlet]=\"c.__render!\"\n  [ngTemplateOutletContext]=\"{ $implicit: i, index: index, column: c }\"\n></ng-template>\n<ng-container *ngIf=\"!c.__render; else render\">\n  <ng-container [ngSwitch]=\"c.type\">\n    <label\n      *ngSwitchCase=\"'checkbox'\"\n      nz-checkbox\n      [nzDisabled]=\"i.disabled\"\n      [ngModel]=\"i.checked\"\n      (ngModelChange)=\"_checkbox($event)\"\n    ></label>\n    <label\n      *ngSwitchCase=\"'radio'\"\n      nz-radio\n      [nzDisabled]=\"i.disabled\"\n      [ngModel]=\"i.checked\"\n      (ngModelChange)=\"_radio()\"\n    ></label>\n    <a\n      *ngSwitchCase=\"'link'\"\n      (click)=\"_link($event)\"\n      [innerHTML]=\"i._values[cIdx]._text\"\n      [attr.title]=\"i._values[cIdx].text\"\n    ></a>\n    <ng-container *ngIf=\"i._values[cIdx].text\">\n      <nz-tag *ngSwitchCase=\"'tag'\" [nzColor]=\"i._values[cIdx].color\">\n        <span [innerHTML]=\"i._values[cIdx]._text\"></span>\n      </nz-tag>\n      <nz-badge *ngSwitchCase=\"'badge'\" [nzStatus]=\"i._values[cIdx].color\" [nzText]=\"i._values[cIdx].text\"></nz-badge>\n    </ng-container>\n    <ng-template *ngSwitchCase=\"'widget'\" st-widget-host [record]=\"i\" [column]=\"c\"></ng-template\n    ><ng-container *ngSwitchDefault>\n      <span\n        *ngIf=\"c.safeType !== 'text'\"\n        [innerHTML]=\"i._values[cIdx]._text\"\n        [attr.title]=\"c._isTruncate ? i._values[cIdx].text : null\"\n      ></span>\n      <span\n        *ngIf=\"c.safeType === 'text'\"\n        [innerText]=\"i._values[cIdx]._text\"\n        [attr.title]=\"c._isTruncate ? i._values[cIdx].text : null\"\n      ></span>\n    </ng-container>\n  </ng-container>\n  <ng-container *ngFor=\"let btn of i._values[cIdx].buttons; let last = last\">\n    <a *ngIf=\"btn.children!.length > 0\" nz-dropdown [nzDropdownMenu]=\"btnMenu\" nzOverlayClassName=\"st__btn-sub\">\n      <span [innerHTML]=\"btn._text\"></span>\n      <i nz-icon nzType=\"down\"></i>\n    </a>\n    <nz-dropdown-menu #btnMenu=\"nzDropdownMenu\">\n      <ul nz-menu>\n        <ng-container *ngFor=\"let subBtn of btn.children!\">\n          <li *ngIf=\"subBtn.type !== 'divider'\" nz-menu-item [class.st__btn-disabled]=\"subBtn._disabled\">\n            <ng-template [ngTemplateOutlet]=\"btnTpl\" [ngTemplateOutletContext]=\"{ $implicit: subBtn, child: true }\">\n            </ng-template>\n          </li>\n          <li *ngIf=\"subBtn.type === 'divider'\" nz-menu-divider></li>\n        </ng-container>\n      </ul>\n    </nz-dropdown-menu>\n    <span *ngIf=\"btn.children!.length === 0\" [class.st__btn-disabled]=\"btn._disabled\">\n      <ng-template [ngTemplateOutlet]=\"btnTpl\" [ngTemplateOutletContext]=\"{ $implicit: btn, child: false }\">\n      </ng-template>\n    </span>\n    <nz-divider *ngIf=\"!last\" nzType=\"vertical\"></nz-divider>\n  </ng-container>\n</ng-container>\n", dependencies: [{ kind: "directive", type: i7.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i7.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i7.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i7.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i7.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: i7.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "directive", type: i7.NgSwitchDefault, selector: "[ngSwitchDefault]" }, { kind: "directive", type: i8.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i8.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i18.NzPopconfirmDirective, selector: "[nz-popconfirm]", inputs: ["nzPopconfirmArrowPointAtCenter", "nzPopconfirmTitle", "nz-popconfirm", "nzPopconfirmTrigger", "nzPopconfirmPlacement", "nzPopconfirmOrigin", "nzPopconfirmMouseEnterDelay", "nzPopconfirmMouseLeaveDelay", "nzPopconfirmOverlayClassName", "nzPopconfirmOverlayStyle", "nzPopconfirmVisible", "nzOkText", "nzOkType", "nzOkDanger", "nzCancelText", "nzBeforeConfirm", "nzIcon", "nzCondition", "nzPopconfirmShowArrow", "nzPopconfirmBackdrop", "nzAutofocus"], outputs: ["nzPopconfirmVisibleChange", "nzOnCancel", "nzOnConfirm"], exportAs: ["nzPopconfirm"] }, { kind: "directive", type: i11.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "component", type: i19.NzBadgeComponent, selector: "nz-badge", inputs: ["nzShowZero", "nzShowDot", "nzStandalone", "nzDot", "nzOverflowCount", "nzColor", "nzStyle", "nzText", "nzTitle", "nzStatus", "nzCount", "nzOffset", "nzSize"], exportAs: ["nzBadge"] }, { kind: "component", type: i12.NzCheckboxComponent, selector: "[nz-checkbox]", inputs: ["nzValue", "nzAutoFocus", "nzDisabled", "nzIndeterminate", "nzChecked", "nzId"], outputs: ["nzCheckedChange"], exportAs: ["nzCheckbox"] }, { kind: "component", type: i20.NzDividerComponent, selector: "nz-divider", inputs: ["nzText", "nzType", "nzOrientation", "nzDashed", "nzPlain"], exportAs: ["nzDivider"] }, { kind: "directive", type: i13.NzMenuDirective, selector: "[nz-menu]", inputs: ["nzInlineIndent", "nzTheme", "nzMode", "nzInlineCollapsed", "nzSelectable"], outputs: ["nzClick"], exportAs: ["nzMenu"] }, { kind: "directive", type: i13.NzMenuItemDirective, selector: "[nz-menu-item]", inputs: ["nzPaddingLeft", "nzDisabled", "nzSelected", "nzDanger", "nzMatchRouterExact", "nzMatchRouter"], exportAs: ["nzMenuItem"] }, { kind: "directive", type: i13.NzMenuDividerDirective, selector: "[nz-menu-divider]", exportAs: ["nzMenuDivider"] }, { kind: "directive", type: i6.NzDropDownDirective, selector: "[nz-dropdown]", inputs: ["nzDropdownMenu", "nzTrigger", "nzMatchWidthElement", "nzBackdrop", "nzClickHide", "nzDisabled", "nzVisible", "nzOverlayClassName", "nzOverlayStyle", "nzPlacement"], outputs: ["nzVisibleChange"], exportAs: ["nzDropdown"] }, { kind: "directive", type: i6.NzDropDownADirective, selector: "a[nz-dropdown]" }, { kind: "component", type: i6.NzDropdownMenuComponent, selector: "nz-dropdown-menu", exportAs: ["nzDropdownMenu"] }, { kind: "component", type: i21.NzRadioComponent, selector: "[nz-radio],[nz-radio-button]", inputs: ["nzValue", "nzDisabled", "nzAutoFocus"], exportAs: ["nzRadio"] }, { kind: "component", type: i22.NzTagComponent, selector: "nz-tag", inputs: ["nzMode", "nzColor", "nzChecked"], outputs: ["nzOnClose", "nzCheckedChange"], exportAs: ["nzTag"] }, { kind: "directive", type: i14.NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }, { kind: "directive", type: i23.STWidgetHostDirective, selector: "[st-widget-host]", inputs: ["record", "column"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: STTdComponent, decorators: [{
            type: Component,
            args: [{ selector: 'st-td', preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<ng-template #btnTpl let-i let-child=\"child\">\n  <ng-container *ngIf=\"!i.tooltip\">\n    <ng-template [ngTemplateOutlet]=\"btnItemTpl\" [ngTemplateOutletContext]=\"{ $implicit: i }\"></ng-template>\n  </ng-container>\n  <span *ngIf=\"i.tooltip\" nz-tooltip [nzTooltipTitle]=\"i.tooltip\" [class.d-block]=\"child\" [class.width-100]=\"child\">\n    <ng-template [ngTemplateOutlet]=\"btnItemTpl\" [ngTemplateOutletContext]=\"{ $implicit: i }\"></ng-template>\n  </span>\n</ng-template>\n<ng-template #btnItemTpl let-i>\n  <a\n    *ngIf=\"i.pop\"\n    nz-popconfirm\n    [nzPopconfirmTitle]=\"i.pop.title\"\n    [nzIcon]=\"i.pop.icon\"\n    [nzCondition]=\"i.pop.condition(i)\"\n    [nzCancelText]=\"i.pop.cancelText\"\n    [nzOkText]=\"i.pop.okText\"\n    [nzOkType]=\"i.pop.okType\"\n    (nzOnConfirm)=\"_btn(i)\"\n    class=\"st__btn-text\"\n    [ngClass]=\"i.className\"\n    (click)=\"_stopPropagation($event)\"\n  >\n    <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i }\"></ng-template>\n  </a>\n  <a *ngIf=\"!i.pop\" (click)=\"_btn(i, $event)\" class=\"st__btn-text\" [ngClass]=\"i.className\">\n    <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i }\"></ng-template>\n  </a>\n</ng-template>\n<ng-template #btnTextTpl let-i>\n  <ng-container *ngIf=\"i.icon\">\n    <i\n      *ngIf=\"!i.icon.iconfont\"\n      nz-icon\n      [nzType]=\"i.icon.type\"\n      [nzTheme]=\"i.icon.theme\"\n      [nzSpin]=\"i.icon.spin\"\n      [nzTwotoneColor]=\"i.icon.twoToneColor\"\n    ></i>\n    <i *ngIf=\"i.icon.iconfont\" nz-icon [nzIconfont]=\"i.icon.iconfont\"></i>\n  </ng-container>\n  <span [innerHTML]=\"i._text\" [ngClass]=\"{ 'pl-xs': i.icon }\"></span>\n</ng-template>\n<ng-template\n  #render\n  [ngTemplateOutlet]=\"c.__render!\"\n  [ngTemplateOutletContext]=\"{ $implicit: i, index: index, column: c }\"\n></ng-template>\n<ng-container *ngIf=\"!c.__render; else render\">\n  <ng-container [ngSwitch]=\"c.type\">\n    <label\n      *ngSwitchCase=\"'checkbox'\"\n      nz-checkbox\n      [nzDisabled]=\"i.disabled\"\n      [ngModel]=\"i.checked\"\n      (ngModelChange)=\"_checkbox($event)\"\n    ></label>\n    <label\n      *ngSwitchCase=\"'radio'\"\n      nz-radio\n      [nzDisabled]=\"i.disabled\"\n      [ngModel]=\"i.checked\"\n      (ngModelChange)=\"_radio()\"\n    ></label>\n    <a\n      *ngSwitchCase=\"'link'\"\n      (click)=\"_link($event)\"\n      [innerHTML]=\"i._values[cIdx]._text\"\n      [attr.title]=\"i._values[cIdx].text\"\n    ></a>\n    <ng-container *ngIf=\"i._values[cIdx].text\">\n      <nz-tag *ngSwitchCase=\"'tag'\" [nzColor]=\"i._values[cIdx].color\">\n        <span [innerHTML]=\"i._values[cIdx]._text\"></span>\n      </nz-tag>\n      <nz-badge *ngSwitchCase=\"'badge'\" [nzStatus]=\"i._values[cIdx].color\" [nzText]=\"i._values[cIdx].text\"></nz-badge>\n    </ng-container>\n    <ng-template *ngSwitchCase=\"'widget'\" st-widget-host [record]=\"i\" [column]=\"c\"></ng-template\n    ><ng-container *ngSwitchDefault>\n      <span\n        *ngIf=\"c.safeType !== 'text'\"\n        [innerHTML]=\"i._values[cIdx]._text\"\n        [attr.title]=\"c._isTruncate ? i._values[cIdx].text : null\"\n      ></span>\n      <span\n        *ngIf=\"c.safeType === 'text'\"\n        [innerText]=\"i._values[cIdx]._text\"\n        [attr.title]=\"c._isTruncate ? i._values[cIdx].text : null\"\n      ></span>\n    </ng-container>\n  </ng-container>\n  <ng-container *ngFor=\"let btn of i._values[cIdx].buttons; let last = last\">\n    <a *ngIf=\"btn.children!.length > 0\" nz-dropdown [nzDropdownMenu]=\"btnMenu\" nzOverlayClassName=\"st__btn-sub\">\n      <span [innerHTML]=\"btn._text\"></span>\n      <i nz-icon nzType=\"down\"></i>\n    </a>\n    <nz-dropdown-menu #btnMenu=\"nzDropdownMenu\">\n      <ul nz-menu>\n        <ng-container *ngFor=\"let subBtn of btn.children!\">\n          <li *ngIf=\"subBtn.type !== 'divider'\" nz-menu-item [class.st__btn-disabled]=\"subBtn._disabled\">\n            <ng-template [ngTemplateOutlet]=\"btnTpl\" [ngTemplateOutletContext]=\"{ $implicit: subBtn, child: true }\">\n            </ng-template>\n          </li>\n          <li *ngIf=\"subBtn.type === 'divider'\" nz-menu-divider></li>\n        </ng-container>\n      </ul>\n    </nz-dropdown-menu>\n    <span *ngIf=\"btn.children!.length === 0\" [class.st__btn-disabled]=\"btn._disabled\">\n      <ng-template [ngTemplateOutlet]=\"btnTpl\" [ngTemplateOutletContext]=\"{ $implicit: btn, child: false }\">\n      </ng-template>\n    </span>\n    <nz-divider *ngIf=\"!last\" nzType=\"vertical\"></nz-divider>\n  </ng-container>\n</ng-container>\n" }]
        }], ctorParameters: function () { return [{ type: STComponent, decorators: [{
                    type: Host
                }] }, { type: i17.Router }, { type: i4.ModalHelper }, { type: i4.DrawerHelper }]; }, propDecorators: { c: [{
                type: Input
            }], cIdx: [{
                type: Input
            }], data: [{
                type: Input
            }], i: [{
                type: Input
            }], index: [{
                type: Input
            }], n: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3N0L3N0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9zdC9zdC5jb21wb25lbnQuaHRtbCIsIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9zdC9zdC10ZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN4RCxPQUFPLEVBRUwsdUJBQXVCLEVBRXZCLFNBQVMsRUFFVCxZQUFZLEVBQ1osSUFBSSxFQUNKLE1BQU0sRUFDTixLQUFLLEVBR0wsUUFBUSxFQUNSLE1BQU0sRUFLTixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFjLEVBQUUsRUFBRSxPQUFPLEVBQWdCLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFcEcsT0FBTyxFQUVMLGdCQUFnQixFQUNoQixRQUFRLEVBS1IsTUFBTSxFQUNQLE1BQU0sY0FBYyxDQUFDO0FBRXRCLE9BQU8sRUFBZ0IsWUFBWSxFQUFFLFdBQVcsRUFBZSxTQUFTLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN4RyxPQUFPLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBTTNELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsWUFBWSxFQUEyQyxNQUFNLGtCQUFrQixDQUFDO0FBQ3pGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDdkMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxpQkFBaUIs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WCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO29CQUNyQixNQUFNO2FBQ1Q7U0FDRjthQUFNO1lBQ0wsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzlDO0lBQ0gsQ0FBQzs7MEdBdEdVLGFBQWEsa0JBY0UsV0FBVzs4RkFkMUIsYUFBYSwwSUV2NUIxQix1aUpBaUhBOzJGRnN5QmEsYUFBYTtrQkFQekIsU0FBUzsrQkFDRSxPQUFPLHVCQUVJLEtBQUssbUJBQ1QsdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSTswREFnQlgsV0FBVzswQkFBbEMsSUFBSTt1SEFiRSxDQUFDO3NCQUFULEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxDQUFDO3NCQUFULEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNhLENBQUM7c0JBQW5CLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQgfSBmcm9tICdAYW5ndWxhci9jZGsvc2Nyb2xsaW5nJztcbmltcG9ydCB7IERlY2ltYWxQaXBlLCBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0LFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVHJhY2tCeUZ1bmN0aW9uLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IGZyb20sIGlzT2JzZXJ2YWJsZSwgT2JzZXJ2YWJsZSwgb2YsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiwgZmlsdGVyLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHtcbiAgQWxhaW5JMThOU2VydmljZSxcbiAgQUxBSU5fSTE4Tl9UT0tFTixcbiAgRGF0ZVBpcGUsXG4gIERlbG9uTG9jYWxlU2VydmljZSxcbiAgRHJhd2VySGVscGVyLFxuICBMb2NhbGVEYXRhLFxuICBNb2RhbEhlbHBlcixcbiAgWU5QaXBlXG59IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UsIEFsYWluU1RDb25maWcgfSBmcm9tICdAZGVsb24vdXRpbC9jb25maWcnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyLCBOdW1iZXJJbnB1dCwgdG9Cb29sZWFuIH0gZnJvbSAnQGRlbG9uL3V0aWwvZGVjb3JhdG9yJztcbmltcG9ydCB7IGRlZXBDb3B5LCBkZWVwTWVyZ2VLZXkgfSBmcm9tICdAZGVsb24vdXRpbC9vdGhlcic7XG5pbXBvcnQgdHlwZSB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBOekNvbnRleHRNZW51U2VydmljZSwgTnpEcm9wZG93bk1lbnVDb21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL2Ryb3Bkb3duJztcbmltcG9ydCB7IE56UmVzaXplRXZlbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL3Jlc2l6YWJsZSc7XG5pbXBvcnQgeyBOelRhYmxlQ29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC90YWJsZSc7XG5cbmltcG9ydCB7IFNUQ29sdW1uU291cmNlIH0gZnJvbSAnLi9zdC1jb2x1bW4tc291cmNlJztcbmltcG9ydCB7IFNURGF0YVNvdXJjZSwgU1REYXRhU291cmNlT3B0aW9ucywgU1REYXRhU291cmNlUmVzdWx0IH0gZnJvbSAnLi9zdC1kYXRhLXNvdXJjZSc7XG5pbXBvcnQgeyBTVEV4cG9ydCB9IGZyb20gJy4vc3QtZXhwb3J0JztcbmltcG9ydCB7IFNUUm93U291cmNlIH0gZnJvbSAnLi9zdC1yb3cuZGlyZWN0aXZlJztcbmltcG9ydCB7IFNUX0RFRkFVTFRfQ09ORklHIH0gZnJvbSAnLi9zdC5jb25maWcnO1xuaW1wb3J0IHtcbiAgU1RDaGFuZ2UsXG4gIFNUQ2hhbmdlVHlwZSxcbiAgU1RDbGlja1Jvd0NsYXNzTmFtZSxcbiAgU1RDbGlja1Jvd0NsYXNzTmFtZVR5cGUsXG4gIFNUQ29sdW1uLFxuICBTVENvbHVtbkJ1dHRvbixcbiAgU1RDb2x1bW5TYWZlVHlwZSxcbiAgU1RDb2x1bW5TZWxlY3Rpb24sXG4gIFNUQ29udGV4dG1lbnVGbixcbiAgU1RDb250ZXh0bWVudUl0ZW0sXG4gIFNUQ3VzdG9tUmVxdWVzdE9wdGlvbnMsXG4gIFNURGF0YSxcbiAgU1RFcnJvcixcbiAgU1RFeHBvcnRPcHRpb25zLFxuICBTVExvYWRPcHRpb25zLFxuICBTVE11bHRpU29ydCxcbiAgU1RQYWdlLFxuICBTVFJlcSxcbiAgU1RSZXMsXG4gIFNUUmVzZXRDb2x1bW5zT3B0aW9uLFxuICBTVFJlc2l6YWJsZSxcbiAgU1RSb3dDbGFzc05hbWUsXG4gIFNUU2luZ2xlU29ydCxcbiAgU1RTdGF0aXN0aWNhbFJlc3VsdHMsXG4gIFNUV2lkdGhNb2RlXG59IGZyb20gJy4vc3QuaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBfU1RDb2x1bW4sIF9TVERhdGFWYWx1ZSwgX1NUSGVhZGVyLCBfU1RUZE5vdGlmeSwgX1NUVGROb3RpZnlUeXBlIH0gZnJvbSAnLi9zdC50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N0JyxcbiAgZXhwb3J0QXM6ICdzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdC5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW1NURGF0YVNvdXJjZSwgU1RSb3dTb3VyY2UsIFNUQ29sdW1uU291cmNlLCBTVEV4cG9ydCwgRGF0ZVBpcGUsIFlOUGlwZSwgRGVjaW1hbFBpcGVdLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5zdF0nOiBgdHJ1ZWAsXG4gICAgJ1tjbGFzcy5zdF9fcC1sZWZ0XSc6IGBwYWdlLnBsYWNlbWVudCA9PT0gJ2xlZnQnYCxcbiAgICAnW2NsYXNzLnN0X19wLWNlbnRlcl0nOiBgcGFnZS5wbGFjZW1lbnQgPT09ICdjZW50ZXInYCxcbiAgICAnW2NsYXNzLnN0X193aWR0aC1zdHJpY3RdJzogYHdpZHRoTW9kZS50eXBlID09PSAnc3RyaWN0J2AsXG4gICAgJ1tjbGFzcy5hbnQtdGFibGUtcmVwXSc6IGByZXNwb25zaXZlYCxcbiAgICAnW2NsYXNzLmFudC10YWJsZS1yZXBfX2hpZGUtaGVhZGVyLWZvb3Rlcl0nOiBgcmVzcG9uc2l2ZUhpZGVIZWFkZXJGb290ZXJgXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTVENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3BzOiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3BpOiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3RvdGFsOiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2xvYWRpbmdEZWxheTogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9ib3JkZXJlZDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZXhwYW5kUm93QnlDbGljazogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZXhwYW5kQWNjb3JkaW9uOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9yZXNwb25zaXZlOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9yZXNwb25zaXZlSGlkZUhlYWRlckZvb3RlcjogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfdmlydHVhbFNjcm9sbDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfdmlydHVhbEl0ZW1TaXplOiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3ZpcnR1YWxNYXhCdWZmZXJQeDogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV92aXJ0dWFsTWluQnVmZmVyUHg6IE51bWJlcklucHV0O1xuXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIGRhdGEkPzogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIHRvdGFsVHBsID0gYGA7XG4gIHByaXZhdGUgY29nITogQWxhaW5TVENvbmZpZztcbiAgcHJpdmF0ZSBfcmVxITogU1RSZXE7XG4gIHByaXZhdGUgX3JlcyE6IFNUUmVzO1xuICBwcml2YXRlIF9wYWdlITogU1RQYWdlO1xuICBwcml2YXRlIF93aWR0aE1vZGUhOiBTVFdpZHRoTW9kZTtcbiAgcHJpdmF0ZSBjdXN0b21XaWR0aENvbmZpZzogYm9vbGVhbiA9IGZhbHNlO1xuICBfd2lkdGhDb25maWc6IHN0cmluZ1tdID0gW107XG4gIGxvY2FsZTogTG9jYWxlRGF0YSA9IHt9O1xuICBfbG9hZGluZyA9IGZhbHNlO1xuICBfZGF0YTogU1REYXRhW10gPSBbXTtcbiAgX3N0YXRpc3RpY2FsOiBTVFN0YXRpc3RpY2FsUmVzdWx0cyA9IHt9O1xuICBfaXNQYWdpbmF0aW9uID0gdHJ1ZTtcbiAgX2FsbENoZWNrZWQgPSBmYWxzZTtcbiAgX2FsbENoZWNrZWREaXNhYmxlZCA9IGZhbHNlO1xuICBfaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICBfaGVhZGVyczogX1NUSGVhZGVyW11bXSA9IFtdO1xuICBfY29sdW1uczogX1NUQ29sdW1uW10gPSBbXTtcbiAgY29udGV4dG1lbnVMaXN0OiBTVENvbnRleHRtZW51SXRlbVtdID0gW107XG4gIEBWaWV3Q2hpbGQoJ3RhYmxlJykgcmVhZG9ubHkgb3JnVGFibGUhOiBOelRhYmxlQ29tcG9uZW50PFNURGF0YT47XG4gIEBWaWV3Q2hpbGQoJ2NvbnRleHRtZW51VHBsJykgcmVhZG9ubHkgY29udGV4dG1lbnVUcGwhOiBOekRyb3Bkb3duTWVudUNvbXBvbmVudDtcblxuICBASW5wdXQoKVxuICBnZXQgcmVxKCk6IFNUUmVxIHtcbiAgICByZXR1cm4gdGhpcy5fcmVxO1xuICB9XG4gIHNldCByZXEodmFsdWU6IFNUUmVxKSB7XG4gICAgdGhpcy5fcmVxID0gZGVlcE1lcmdlS2V5KHt9LCB0cnVlLCB0aGlzLmNvZy5yZXEsIHZhbHVlKTtcbiAgfVxuICAvKiog6L+U5Zue5L2T6YWN572uICovXG4gIEBJbnB1dCgpXG4gIGdldCByZXMoKTogU1RSZXMge1xuICAgIHJldHVybiB0aGlzLl9yZXM7XG4gIH1cbiAgc2V0IHJlcyh2YWx1ZTogU1RSZXMpIHtcbiAgICBjb25zdCBpdGVtID0gKHRoaXMuX3JlcyA9IGRlZXBNZXJnZUtleSh7fSwgdHJ1ZSwgdGhpcy5jb2cucmVzLCB2YWx1ZSkpO1xuICAgIGNvbnN0IHJlTmFtZSA9IGl0ZW0ucmVOYW1lITtcbiAgICBpZiAodHlwZW9mIHJlTmFtZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHJlTmFtZS5saXN0KSkgcmVOYW1lLmxpc3QgPSByZU5hbWUubGlzdCEuc3BsaXQoJy4nKTtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShyZU5hbWUudG90YWwpKSByZU5hbWUudG90YWwgPSByZU5hbWUudG90YWwhLnNwbGl0KCcuJyk7XG4gICAgfVxuICAgIHRoaXMuX3JlcyA9IGl0ZW07XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IHBhZ2UoKTogU1RQYWdlIHtcbiAgICByZXR1cm4gdGhpcy5fcGFnZTtcbiAgfVxuICBzZXQgcGFnZSh2YWx1ZTogU1RQYWdlKSB7XG4gICAgdGhpcy5fcGFnZSA9IHsgLi4udGhpcy5jb2cucGFnZSwgLi4udmFsdWUgfTtcbiAgICB0aGlzLnVwZGF0ZVRvdGFsVHBsKCk7XG4gIH1cbiAgQElucHV0KCkgZGF0YSE6IHN0cmluZyB8IFNURGF0YVtdIHwgT2JzZXJ2YWJsZTxTVERhdGFbXT47XG4gIEBJbnB1dCgpIGNvbHVtbnM6IFNUQ29sdW1uW10gPSBbXTtcbiAgQElucHV0KCkgY29udGV4dG1lbnU/OiBTVENvbnRleHRtZW51Rm4gfCBudWxsO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBwcyA9IDEwO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBwaSA9IDE7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHRvdGFsID0gMDtcbiAgQElucHV0KCkgbG9hZGluZzogYm9vbGVhbiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBsb2FkaW5nRGVsYXkgPSAwO1xuICBASW5wdXQoKSBsb2FkaW5nSW5kaWNhdG9yOiBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYm9yZGVyZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgc2l6ZSE6ICdzbWFsbCcgfCAnbWlkZGxlJyB8ICdkZWZhdWx0JztcbiAgQElucHV0KCkgc2Nyb2xsOiB7IHg/OiBzdHJpbmcgfCBudWxsOyB5Pzogc3RyaW5nIHwgbnVsbCB9ID0geyB4OiBudWxsLCB5OiBudWxsIH07XG4gIEBJbnB1dCgpIHNpbmdsZVNvcnQ/OiBTVFNpbmdsZVNvcnQgfCBudWxsO1xuICBwcml2YXRlIF9tdWx0aVNvcnQ/OiBTVE11bHRpU29ydDtcbiAgQElucHV0KClcbiAgZ2V0IG11bHRpU29ydCgpOiBOelNhZmVBbnkge1xuICAgIHJldHVybiB0aGlzLl9tdWx0aVNvcnQ7XG4gIH1cbiAgc2V0IG11bHRpU29ydCh2YWx1ZTogTnpTYWZlQW55KSB7XG4gICAgaWYgKFxuICAgICAgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nICYmICF0b0Jvb2xlYW4odmFsdWUpKSB8fFxuICAgICAgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMClcbiAgICApIHtcbiAgICAgIHRoaXMuX211bHRpU29ydCA9IHVuZGVmaW5lZDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fbXVsdGlTb3J0ID0ge1xuICAgICAgLi4uKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgPyB2YWx1ZSA6IHt9KVxuICAgIH07XG4gIH1cbiAgQElucHV0KCkgcm93Q2xhc3NOYW1lPzogU1RSb3dDbGFzc05hbWUgfCBudWxsO1xuICBASW5wdXQoKSBjbGlja1Jvd0NsYXNzTmFtZT86IFNUQ2xpY2tSb3dDbGFzc05hbWUgfCBudWxsO1xuICBASW5wdXQoKVxuICBzZXQgd2lkdGhNb2RlKHZhbHVlOiBTVFdpZHRoTW9kZSkge1xuICAgIHRoaXMuX3dpZHRoTW9kZSA9IHsgLi4udGhpcy5jb2cud2lkdGhNb2RlLCAuLi52YWx1ZSB9O1xuICB9XG4gIGdldCB3aWR0aE1vZGUoKTogU1RXaWR0aE1vZGUge1xuICAgIHJldHVybiB0aGlzLl93aWR0aE1vZGU7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHdpZHRoQ29uZmlnKHZhbDogc3RyaW5nW10pIHtcbiAgICB0aGlzLl93aWR0aENvbmZpZyA9IHZhbDtcbiAgICB0aGlzLmN1c3RvbVdpZHRoQ29uZmlnID0gdmFsICYmIHZhbC5sZW5ndGggPiAwO1xuICB9XG4gIHByaXZhdGUgX3Jlc2l6YWJsZT86IFNUUmVzaXphYmxlO1xuICBASW5wdXQoKVxuICBzZXQgcmVzaXphYmxlKHZhbDogU1RSZXNpemFibGUgfCBib29sZWFuIHwgc3RyaW5nKSB7XG4gICAgdGhpcy5fcmVzaXphYmxlID0gdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcgPyB2YWwgOiB7IGRpc2FibGVkOiAhdG9Cb29sZWFuKHZhbCkgfTtcbiAgfVxuICBASW5wdXQoKSBoZWFkZXI/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGw7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93SGVhZGVyID0gdHJ1ZTtcbiAgQElucHV0KCkgZm9vdGVyPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsO1xuICBASW5wdXQoKSBib2R5SGVhZGVyPzogVGVtcGxhdGVSZWY8U1RTdGF0aXN0aWNhbFJlc3VsdHM+IHwgbnVsbDtcbiAgQElucHV0KCkgYm9keT86IFRlbXBsYXRlUmVmPFNUU3RhdGlzdGljYWxSZXN1bHRzPiB8IG51bGw7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBleHBhbmRSb3dCeUNsaWNrID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBleHBhbmRBY2NvcmRpb24gPSBmYWxzZTtcbiAgQElucHV0KCkgZXhwYW5kOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogTnpTYWZlQW55OyBjb2x1bW46IFNUQ29sdW1uIH0+IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG5vUmVzdWx0Pzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgcmVzcG9uc2l2ZTogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSByZXNwb25zaXZlSGlkZUhlYWRlckZvb3Rlcj86IGJvb2xlYW47XG4gIEBPdXRwdXQoKSByZWFkb25seSBlcnJvciA9IG5ldyBFdmVudEVtaXR0ZXI8U1RFcnJvcj4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8U1RDaGFuZ2U+KCk7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSB2aXJ0dWFsU2Nyb2xsID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHZpcnR1YWxJdGVtU2l6ZSA9IDU0O1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSB2aXJ0dWFsTWF4QnVmZmVyUHggPSAyMDA7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHZpcnR1YWxNaW5CdWZmZXJQeCA9IDEwMDtcbiAgQElucHV0KCkgY3VzdG9tUmVxdWVzdD86IChvcHRpb25zOiBTVEN1c3RvbVJlcXVlc3RPcHRpb25zKSA9PiBPYnNlcnZhYmxlPE56U2FmZUFueT47XG4gIEBJbnB1dCgpIHZpcnR1YWxGb3JUcmFja0J5OiBUcmFja0J5RnVuY3Rpb248U1REYXRhPiA9IGluZGV4ID0+IGluZGV4O1xuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG51bWJlciBvZiB0aGUgY3VycmVudCBwYWdlXG4gICAqL1xuICBnZXQgY291bnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YS5sZW5ndGg7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBkYXRhIG9mIHRoZSBjdXJyZW50IHBhZ2VcbiAgICovXG4gIGdldCBsaXN0KCk6IFNURGF0YVtdIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoQUxBSU5fSTE4Tl9UT0tFTikgaTE4blNydjogQWxhaW5JMThOU2VydmljZSxcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGV4cG9ydFNydjogU1RFeHBvcnQsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IE56U2FmZUFueSxcbiAgICBwcml2YXRlIGNvbHVtblNvdXJjZTogU1RDb2x1bW5Tb3VyY2UsXG4gICAgcHJpdmF0ZSBkYXRhU291cmNlOiBTVERhdGFTb3VyY2UsXG4gICAgcHJpdmF0ZSBkZWxvbkkxOG46IERlbG9uTG9jYWxlU2VydmljZSxcbiAgICBjb25maWdTcnY6IEFsYWluQ29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIGNtczogTnpDb250ZXh0TWVudVNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5zZXRDb2coY29uZmlnU3J2Lm1lcmdlKCdzdCcsIFNUX0RFRkFVTFRfQ09ORklHKSEpO1xuXG4gICAgdGhpcy5kZWxvbkkxOG4uY2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5sb2NhbGUgPSB0aGlzLmRlbG9uSTE4bi5nZXREYXRhKCdzdCcpO1xuICAgICAgaWYgKHRoaXMuX2NvbHVtbnMubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVRvdGFsVHBsKCk7XG4gICAgICAgIHRoaXMuY2QoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGkxOG5TcnYuY2hhbmdlXG4gICAgICAucGlwZShcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLFxuICAgICAgICBmaWx0ZXIoKCkgPT4gdGhpcy5fY29sdW1ucy5sZW5ndGggPiAwKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLnJlZnJlc2hDb2x1bW5zKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDb2coY29nOiBBbGFpblNUQ29uZmlnKTogdm9pZCB7XG4gICAgY29uc3QgY29weU11bHRpU29ydCA9IHsgLi4uY29nLm11bHRpU29ydCB9O1xuICAgIC8vIEJlY2F1c2UgbXVsdGlTb3J0Lmdsb2JhbCB3aWxsIGFmZmVjdCB0aGUgcmVzdWx0LCBpdCBzaG91bGQgYmUgcmVtb3ZlZCBmaXJzdCwgYW5kIG11bHRpU29ydCB3aWxsIGJlIG9wZXJhdGVkIGFnYWluIGFmdGVyIHByb2Nlc3NpbmcuXG4gICAgZGVsZXRlIGNvZy5tdWx0aVNvcnQ7XG4gICAgdGhpcy5jb2cgPSBjb2c7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb2cpO1xuXG4gICAgaWYgKGNvcHlNdWx0aVNvcnQuZ2xvYmFsICE9PSBmYWxzZSkge1xuICAgICAgdGhpcy5tdWx0aVNvcnQgPSBjb3B5TXVsdGlTb3J0O1xuICAgIH1cbiAgICB0aGlzLmNvbHVtblNvdXJjZS5zZXRDb2coY29nKTtcbiAgICB0aGlzLmRhdGFTb3VyY2Uuc2V0Q29nKGNvZyk7XG4gIH1cblxuICBjZCgpOiB0aGlzIHtcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcml2YXRlIHJlZnJlc2hEYXRhKCk6IHRoaXMge1xuICAgIHRoaXMuX2RhdGEgPSBbLi4udGhpcy5fZGF0YV07XG4gICAgcmV0dXJuIHRoaXMuY2QoKTtcbiAgfVxuXG4gIHJlbmRlclRvdGFsKHRvdGFsOiBzdHJpbmcsIHJhbmdlOiBzdHJpbmdbXSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMudG90YWxUcGxcbiAgICAgID8gdGhpcy50b3RhbFRwbC5yZXBsYWNlKCd7e3RvdGFsfX0nLCB0b3RhbCkucmVwbGFjZSgne3tyYW5nZVswXX19JywgcmFuZ2VbMF0pLnJlcGxhY2UoJ3t7cmFuZ2VbMV19fScsIHJhbmdlWzFdKVxuICAgICAgOiAnJztcbiAgfVxuXG4gIHByaXZhdGUgY2hhbmdlRW1pdCh0eXBlOiBTVENoYW5nZVR5cGUsIGRhdGE/OiBOelNhZmVBbnkpOiB2b2lkIHtcbiAgICBjb25zdCByZXM6IFNUQ2hhbmdlID0ge1xuICAgICAgdHlwZSxcbiAgICAgIHBpOiB0aGlzLnBpLFxuICAgICAgcHM6IHRoaXMucHMsXG4gICAgICB0b3RhbDogdGhpcy50b3RhbFxuICAgIH07XG4gICAgaWYgKGRhdGEgIT0gbnVsbCkge1xuICAgICAgcmVzW3R5cGVdID0gZGF0YTtcbiAgICB9XG4gICAgdGhpcy5jaGFuZ2UuZW1pdChyZXMpO1xuICB9XG5cbiAgLy8gI3JlZ2lvbiBkYXRhXG5cbiAgLyoqXG4gICAqIOiOt+WPlui/h+a7pOWQjuaJgOacieaVsOaNrlxuICAgKiAtIOacrOWcsOaVsOaNru+8muWMheWQq+aOkuW6j+OAgei/h+a7pOWQjuS4jeWIhumhteaVsOaNrlxuICAgKiAtIOi/nOeoi+aVsOaNru+8muS4jeS8oOmAkiBgcGlg44CBYHBzYCDkuKTkuKrlj4LmlbBcbiAgICovXG4gIGdldCBmaWx0ZXJlZERhdGEoKTogUHJvbWlzZTxTVERhdGFbXT4ge1xuICAgIHJldHVybiB0aGlzLmxvYWREYXRhKHsgcGFnaW5hdG9yOiBmYWxzZSB9IGFzIE56U2FmZUFueSkudGhlbihyZXMgPT4gcmVzLmxpc3QpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVUb3RhbFRwbCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IHRvdGFsIH0gPSB0aGlzLnBhZ2U7XG4gICAgaWYgKHR5cGVvZiB0b3RhbCA9PT0gJ3N0cmluZycgJiYgdG90YWwubGVuZ3RoKSB7XG4gICAgICB0aGlzLnRvdGFsVHBsID0gdG90YWw7XG4gICAgfSBlbHNlIGlmICh0b0Jvb2xlYW4odG90YWwpKSB7XG4gICAgICB0aGlzLnRvdGFsVHBsID0gdGhpcy5sb2NhbGUudG90YWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudG90YWxUcGwgPSAnJztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldExvYWRpbmcodmFsOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubG9hZGluZyA9PSBudWxsKSB7XG4gICAgICB0aGlzLl9sb2FkaW5nID0gdmFsO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbG9hZERhdGEob3B0aW9ucz86IFNURGF0YVNvdXJjZU9wdGlvbnMpOiBQcm9taXNlPFNURGF0YVNvdXJjZVJlc3VsdD4ge1xuICAgIGNvbnN0IHsgcGksIHBzLCBkYXRhLCByZXEsIHJlcywgcGFnZSwgdG90YWwsIHNpbmdsZVNvcnQsIG11bHRpU29ydCwgcm93Q2xhc3NOYW1lIH0gPSB0aGlzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZVByb21pc2UsIHJlamVjdFByb21pc2UpID0+IHtcbiAgICAgIGlmICh0aGlzLmRhdGEkKSB7XG4gICAgICAgIHRoaXMuZGF0YSQudW5zdWJzY3JpYmUoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5kYXRhJCA9IHRoaXMuZGF0YVNvdXJjZVxuICAgICAgICAucHJvY2Vzcyh7XG4gICAgICAgICAgcGksXG4gICAgICAgICAgcHMsXG4gICAgICAgICAgdG90YWwsXG4gICAgICAgICAgZGF0YSxcbiAgICAgICAgICByZXEsXG4gICAgICAgICAgcmVzLFxuICAgICAgICAgIHBhZ2UsXG4gICAgICAgICAgY29sdW1uczogdGhpcy5fY29sdW1ucyxcbiAgICAgICAgICBzaW5nbGVTb3J0LFxuICAgICAgICAgIG11bHRpU29ydCxcbiAgICAgICAgICByb3dDbGFzc05hbWUsXG4gICAgICAgICAgcGFnaW5hdG9yOiB0cnVlLFxuICAgICAgICAgIGN1c3RvbVJlcXVlc3Q6IHRoaXMuY3VzdG9tUmVxdWVzdCB8fCB0aGlzLmNvZy5jdXN0b21SZXF1ZXN0LFxuICAgICAgICAgIC4uLm9wdGlvbnNcbiAgICAgICAgfSlcbiAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgICAuc3Vic2NyaWJlKHtcbiAgICAgICAgICBuZXh0OiByZXN1bHQgPT4gcmVzb2x2ZVByb21pc2UocmVzdWx0KSxcbiAgICAgICAgICBlcnJvcjogZXJyb3IgPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBuZ0Rldk1vZGUgPT09ICd1bmRlZmluZWQnIHx8IG5nRGV2TW9kZSkge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ3N0LmxvYWREYXRlJywgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVqZWN0UHJvbWlzZShlcnJvcik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgbG9hZFBhZ2VEYXRhKCk6IFByb21pc2U8dGhpcz4ge1xuICAgIHRoaXMuc2V0TG9hZGluZyh0cnVlKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5sb2FkRGF0YSgpO1xuICAgICAgdGhpcy5zZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIGlmICh0eXBlb2YgcmVzdWx0LnBpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLnBpID0gcmVzdWx0LnBpO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiByZXN1bHQucHMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMucHMgPSByZXN1bHQucHM7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHJlc3VsdC50b3RhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy50b3RhbCA9IHJlc3VsdC50b3RhbDtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgcmVzdWx0LnBhZ2VTaG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLl9pc1BhZ2luYXRpb24gPSByZXN1bHQucGFnZVNob3c7XG4gICAgICB9XG4gICAgICB0aGlzLl9kYXRhID0gcmVzdWx0Lmxpc3Q7XG4gICAgICB0aGlzLl9zdGF0aXN0aWNhbCA9IHJlc3VsdC5zdGF0aXN0aWNhbCBhcyBTVFN0YXRpc3RpY2FsUmVzdWx0cztcbiAgICAgIHRoaXMuY2hhbmdlRW1pdCgnbG9hZGVkJywgcmVzdWx0Lmxpc3QpO1xuICAgICAgLy8gU2hvdWxkIGJlIHJlLXJlbmRlciBpbiBuZXh0IHRpa2Ugd2hlbiB1c2luZyB2aXJ0dWFsIHNjcm9sbFxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL25nLWFsYWluL25nLWFsYWluL2lzc3Vlcy8xODM2XG4gICAgICBpZiAodGhpcy5jZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQpIHtcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLmNka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydC5jaGVja1ZpZXdwb3J0U2l6ZSgpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLl9yZWZDaGVjaygpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLnNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgaWYgKCF0aGlzLmRlc3Ryb3kkLmNsb3NlZCkge1xuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIHRoaXMuZXJyb3IuZW1pdCh7IHR5cGU6ICdyZXEnLCBlcnJvciB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfVxuXG4gIC8qKiDmuIXnqbrmiYDmnInmlbDmja4gKi9cbiAgY2xlYXIoY2xlYW5TdGF0dXM6IGJvb2xlYW4gPSB0cnVlKTogdGhpcyB7XG4gICAgaWYgKGNsZWFuU3RhdHVzKSB7XG4gICAgICB0aGlzLmNsZWFyU3RhdHVzKCk7XG4gICAgfVxuICAgIHRoaXMuX2RhdGEgPSBbXTtcbiAgICByZXR1cm4gdGhpcy5jZCgpO1xuICB9XG5cbiAgLyoqIOa4heepuuaJgOacieeKtuaAgSAqL1xuICBjbGVhclN0YXR1cygpOiB0aGlzIHtcbiAgICByZXR1cm4gdGhpcy5jbGVhckNoZWNrKCkuY2xlYXJSYWRpbygpLmNsZWFyRmlsdGVyKCkuY2xlYXJTb3J0KCk7XG4gIH1cblxuICAvKipcbiAgICog5qC55o2u6aG156CB6YeN5paw5Yqg6L295pWw5o2uXG4gICAqXG4gICAqIEBwYXJhbSBwaSDmjIflrprlvZPliY3pobXnoIHvvIzpu5jorqTvvJpgMWBcbiAgICogQHBhcmFtIGV4dHJhUGFyYW1zIOmHjeaWsOaMh+WumiBgZXh0cmFQYXJhbXNgIOWAvFxuICAgKiBAcGFyYW0gb3B0aW9ucyDpgInpoblcbiAgICovXG4gIGxvYWQocGk6IG51bWJlciA9IDEsIGV4dHJhUGFyYW1zPzogTnpTYWZlQW55LCBvcHRpb25zPzogU1RMb2FkT3B0aW9ucyk6IHRoaXMge1xuICAgIGlmIChwaSAhPT0gLTEpIHRoaXMucGkgPSBwaTtcbiAgICBpZiAodHlwZW9mIGV4dHJhUGFyYW1zICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZXEucGFyYW1zID0gb3B0aW9ucyAmJiBvcHRpb25zLm1lcmdlID8geyAuLi50aGlzLnJlcS5wYXJhbXMsIC4uLmV4dHJhUGFyYW1zIH0gOiBleHRyYVBhcmFtcztcbiAgICB9XG4gICAgdGhpcy5fY2hhbmdlKCdwaScsIG9wdGlvbnMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIOmHjeaWsOWIt+aWsOW9k+WJjemhtVxuICAgKlxuICAgKiBAcGFyYW0gZXh0cmFQYXJhbXMg6YeN5paw5oyH5a6aIGBleHRyYVBhcmFtc2Ag5YC8XG4gICAqL1xuICByZWxvYWQoZXh0cmFQYXJhbXM/OiBOelNhZmVBbnksIG9wdGlvbnM/OiBTVExvYWRPcHRpb25zKTogdGhpcyB7XG4gICAgcmV0dXJuIHRoaXMubG9hZCgtMSwgZXh0cmFQYXJhbXMsIG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIOmHjee9ruS4lOmHjeaWsOiuvue9riBgcGlgIOS4uiBgMWDvvIzljIXlkKvku6XkuIvlgLzvvJpcbiAgICogLSBgY2hlY2tgIOaVsOaNrlxuICAgKiAtIGByYWRpb2Ag5pWw5o2uXG4gICAqIC0gYHNvcnRgIOaVsOaNrlxuICAgKiAtIGBmaWxldGVyYCDmlbDmja5cbiAgICpcbiAgICogQHBhcmFtIGV4dHJhUGFyYW1zIOmHjeaWsOaMh+WumiBgZXh0cmFQYXJhbXNgIOWAvFxuICAgKi9cbiAgcmVzZXQoZXh0cmFQYXJhbXM/OiBOelNhZmVBbnksIG9wdGlvbnM/OiBTVExvYWRPcHRpb25zKTogdGhpcyB7XG4gICAgdGhpcy5jbGVhclN0YXR1cygpLmxvYWQoMSwgZXh0cmFQYXJhbXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJpdmF0ZSBfdG9Ub3AoZW5mb3JjZT86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoIShlbmZvcmNlID09IG51bGwgPyB0aGlzLnBhZ2UudG9Ub3AgOiBlbmZvcmNlKSkgcmV0dXJuO1xuICAgIGNvbnN0IGVsID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgIGVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgLy8gZml4IGhlYWRlciBoZWlnaHRcbiAgICB0aGlzLmRvYy5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIC09IHRoaXMucGFnZS50b1RvcE9mZnNldCE7XG4gICAgaWYgKHRoaXMuc2Nyb2xsKSB7XG4gICAgICBpZiAodGhpcy5jZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQpIHtcbiAgICAgICAgdGhpcy5jZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQuc2Nyb2xsVG8oe1xuICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICBsZWZ0OiAwXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWwucXVlcnlTZWxlY3RvcignLmFudC10YWJsZS1ib2R5LCAuYW50LXRhYmxlLWNvbnRlbnQnKT8uc2Nyb2xsVG8oMCwgMCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX2NoYW5nZSh0eXBlOiAncGknIHwgJ3BzJywgb3B0aW9ucz86IFNUTG9hZE9wdGlvbnMpOiB2b2lkIHtcbiAgICBpZiAodHlwZSA9PT0gJ3BpJyB8fCAodHlwZSA9PT0gJ3BzJyAmJiB0aGlzLnBpIDw9IE1hdGguY2VpbCh0aGlzLnRvdGFsIC8gdGhpcy5wcykpKSB7XG4gICAgICB0aGlzLmxvYWRQYWdlRGF0YSgpLnRoZW4oKCkgPT4gdGhpcy5fdG9Ub3Aob3B0aW9ucz8udG9Ub3ApKTtcbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZUVtaXQodHlwZSk7XG4gIH1cblxuICBwcml2YXRlIGNsb3NlT3RoZXJFeHBhbmQoaXRlbTogU1REYXRhKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZXhwYW5kQWNjb3JkaW9uID09PSBmYWxzZSkgcmV0dXJuO1xuICAgIHRoaXMuX2RhdGEuZmlsdGVyKGkgPT4gaSAhPT0gaXRlbSkuZm9yRWFjaChpID0+IChpLmV4cGFuZCA9IGZhbHNlKSk7XG4gIH1cblxuICBfcm93Q2xpY2soZTogRXZlbnQsIGl0ZW06IFNURGF0YSwgaW5kZXg6IG51bWJlciwgZGJsOiBib29sZWFuKTogdm9pZCB7XG4gICAgY29uc3QgZWwgPSBlLnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICBpZiAoZWwubm9kZU5hbWUgPT09ICdJTlBVVCcpIHJldHVybjtcbiAgICBjb25zdCB7IGV4cGFuZCwgZXhwYW5kUm93QnlDbGljayB9ID0gdGhpcztcbiAgICBpZiAoISFleHBhbmQgJiYgaXRlbS5zaG93RXhwYW5kICE9PSBmYWxzZSAmJiBleHBhbmRSb3dCeUNsaWNrKSB7XG4gICAgICBpdGVtLmV4cGFuZCA9ICFpdGVtLmV4cGFuZDtcbiAgICAgIHRoaXMuY2xvc2VPdGhlckV4cGFuZChpdGVtKTtcbiAgICAgIHRoaXMuY2hhbmdlRW1pdCgnZXhwYW5kJywgaXRlbSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZGF0YSA9IHsgZSwgaXRlbSwgaW5kZXggfTtcbiAgICBpZiAoZGJsKSB7XG4gICAgICB0aGlzLmNoYW5nZUVtaXQoJ2RibENsaWNrJywgZGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NsaWNrUm93Q2xhc3NOYW1lKGVsLCBpdGVtLCBpbmRleCk7XG4gICAgICB0aGlzLmNoYW5nZUVtaXQoJ2NsaWNrJywgZGF0YSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY2xpY2tSb3dDbGFzc05hbWUoZWw6IEhUTUxFbGVtZW50LCBpdGVtOiBTVERhdGEsIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBjciA9IHRoaXMuY2xpY2tSb3dDbGFzc05hbWU7XG4gICAgaWYgKGNyID09IG51bGwpIHJldHVybjtcbiAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICBleGNsdXNpdmU6IGZhbHNlLFxuICAgICAgLi4uKHR5cGVvZiBjciA9PT0gJ3N0cmluZycgPyB7IGZuOiAoKSA9PiBjciB9IDogY3IpXG4gICAgfSBhcyBTVENsaWNrUm93Q2xhc3NOYW1lVHlwZTtcbiAgICBjb25zdCBjbGFzc05hbWUgPSBjb25maWcuZm4oaXRlbSwgaW5kZXgpO1xuICAgIGNvbnN0IHRyRWwgPSBlbC5jbG9zZXN0KCd0cicpIGFzIEhUTUxFbGVtZW50O1xuICAgIGlmIChjb25maWcuZXhjbHVzaXZlKSB7XG4gICAgICB0ckVsLnBhcmVudEVsZW1lbnQhIS5xdWVyeVNlbGVjdG9yQWxsKCd0cicpLmZvckVhY2goKGE6IEhUTUxFbGVtZW50KSA9PiBhLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKSk7XG4gICAgfVxuICAgIGlmICh0ckVsLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpKSB7XG4gICAgICB0ckVsLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHJFbC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgfVxuICB9XG5cbiAgX2V4cGFuZENoYW5nZShpdGVtOiBTVERhdGEsIGV4cGFuZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGl0ZW0uZXhwYW5kID0gZXhwYW5kO1xuICAgIHRoaXMuY2xvc2VPdGhlckV4cGFuZChpdGVtKTtcbiAgICB0aGlzLmNoYW5nZUVtaXQoJ2V4cGFuZCcsIGl0ZW0pO1xuICB9XG5cbiAgX3N0b3BQcm9wYWdhdGlvbihldjogRXZlbnQpOiB2b2lkIHtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIHByaXZhdGUgX3JlZkNvbEFuZERhdGEoKTogdGhpcyB7XG4gICAgdGhpcy5fY29sdW1uc1xuICAgICAgLmZpbHRlcih3ID0+IHcudHlwZSA9PT0gJ25vJylcbiAgICAgIC5mb3JFYWNoKGMgPT5cbiAgICAgICAgdGhpcy5fZGF0YS5mb3JFYWNoKChpLCBpZHgpID0+IHtcbiAgICAgICAgICBjb25zdCB0ZXh0ID0gYCR7dGhpcy5kYXRhU291cmNlLmdldE5vSW5kZXgoaSwgYywgaWR4KX1gO1xuICAgICAgICAgIGkuX3ZhbHVlcyFbYy5fX3BvaW50IV0gPSB7IHRleHQsIF90ZXh0OiB0ZXh0LCBvcmc6IGlkeCwgc2FmZVR5cGU6ICd0ZXh0JyB9IGFzIF9TVERhdGFWYWx1ZTtcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICByZXR1cm4gdGhpcy5yZWZyZXNoRGF0YSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIHJvd3MgaW4gdGhlIHRhYmxlLCBsaWtlIHRoaXM6XG4gICAqXG4gICAqIGBgYFxuICAgKiB0aGlzLnN0LmFkZFJvdyhzdERhdGFJdGVtKVxuICAgKiBgYGBcbiAgICpcbiAgICogKipUSVBTOioqIERvbid0IGNoYW5nZSB0aGUgYHRvdGFsYCB2YWx1ZSwgaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgcmVsb2FkYCBtZXRob2QgaWYgbmVlZGVkXG4gICAqL1xuICBhZGRSb3coZGF0YTogU1REYXRhIHwgU1REYXRhW10sIG9wdGlvbnM/OiB7IGluZGV4PzogbnVtYmVyIH0pOiB0aGlzIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZGF0YSkpIGRhdGEgPSBbZGF0YV07XG4gICAgdGhpcy5fZGF0YS5zcGxpY2Uob3B0aW9ucz8uaW5kZXggPz8gMCwgMCwgLi4uKGRhdGEgYXMgU1REYXRhW10pKTtcbiAgICByZXR1cm4gdGhpcy5vcHRpbWl6ZURhdGEoKS5fcmVmQ29sQW5kRGF0YSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhIHJvdyBpbiB0aGUgdGFibGUsIGxpa2UgdGhpczpcbiAgICpcbiAgICogYGBgXG4gICAqIHRoaXMuc3QucmVtb3ZlUm93KDApXG4gICAqIHRoaXMuc3QucmVtb3ZlUm93KHN0RGF0YUl0ZW0pXG4gICAqIGBgYFxuICAgKlxuICAgKiAqKlRJUFM6KiogRG9uJ3QgY2hhbmdlIHRoZSBgdG90YWxgIHZhbHVlLCBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGByZWxvYWRgIG1ldGhvZCBpZiBuZWVkZWRcbiAgICovXG4gIHJlbW92ZVJvdyhkYXRhOiBTVERhdGEgfCBTVERhdGFbXSB8IG51bWJlcik6IHRoaXMge1xuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHRoaXMuX2RhdGEuc3BsaWNlKGRhdGEsIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgZGF0YSA9IFtkYXRhXTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgY3VyRGF0YSA9IHRoaXMuX2RhdGE7XG4gICAgICBmb3IgKHZhciBpID0gY3VyRGF0YS5sZW5ndGg7IGktLTsgKSB7XG4gICAgICAgIGlmIChkYXRhLmluZGV4T2YoY3VyRGF0YVtpXSkgIT09IC0xKSB7XG4gICAgICAgICAgY3VyRGF0YS5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3JlZkNoZWNrKCkuX3JlZkNvbEFuZERhdGEoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSByb3cgdmFsdWUgZm9yIHRoZSBgaW5kZXhgIGluIHRoZSB0YWJsZSwgbGlrZSB0aGlzOlxuICAgKlxuICAgKiAtIGBvcHRpbm9zLnJlZnJlc2hTY2hlbWFgIFdoZXRoZXIgdG8gcmVmcmVzaCBvZiBzdCBzY2hlbWFzXG4gICAqIC0gYG9wdGlub3MuZW1pdFJlbG9hZGAgV2hldGhlciB0byB0cmlnZ2VyIGEgcmVsb2FkIGh0dHAgcmVxdWVzdCB3aGVuIGRhdGEgaXMgdXJsXG4gICAqXG4gICAqIGBgYFxuICAgKiB0aGlzLnN0LnNldFJvdygwLCB7IHByaWNlOiAxMDAgfSlcbiAgICogdGhpcy5zdC5zZXRSb3coMCwgeyBwcmljZTogMTAwLCBuYW1lOiAnYXNkZicgfSlcbiAgICogdGhpcy5zdC5zZXRSb3coaXRlbSwgeyBwcmljZTogMTAwIH0pXG4gICAqIGBgYFxuICAgKi9cbiAgc2V0Um93KGluZGV4OiBudW1iZXIgfCBTVERhdGEsIGl0ZW06IFNURGF0YSwgb3B0aW9ucz86IHsgcmVmcmVzaFNjaGVtYT86IGJvb2xlYW47IGVtaXRSZWxvYWQ/OiBib29sZWFuIH0pOiB0aGlzIHtcbiAgICBvcHRpb25zID0geyByZWZyZXNoU2NoZW1hOiBmYWxzZSwgZW1pdFJlbG9hZDogZmFsc2UsIC4uLm9wdGlvbnMgfTtcbiAgICBpZiAodHlwZW9mIGluZGV4ICE9PSAnbnVtYmVyJykge1xuICAgICAgaW5kZXggPSB0aGlzLl9kYXRhLmluZGV4T2YoaW5kZXgpO1xuICAgIH1cbiAgICB0aGlzLl9kYXRhW2luZGV4XSA9IGRlZXBNZXJnZUtleSh0aGlzLl9kYXRhW2luZGV4XSwgZmFsc2UsIGl0ZW0pO1xuICAgIHRoaXMub3B0aW1pemVEYXRhKCk7XG4gICAgaWYgKG9wdGlvbnMucmVmcmVzaFNjaGVtYSkge1xuICAgICAgdGhpcy5yZXNldENvbHVtbnMoeyBlbWl0UmVsb2FkOiBvcHRpb25zLmVtaXRSZWxvYWQgfSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucmVmcmVzaERhdGEoKTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIHNvcnRcblxuICBzb3J0KGNvbDogX1NUQ29sdW1uLCBpZHg6IG51bWJlciwgdmFsdWU6IE56U2FmZUFueSk6IHZvaWQge1xuICAgIGlmICh0aGlzLm11bHRpU29ydCkge1xuICAgICAgY29sLl9zb3J0LmRlZmF1bHQgPSB2YWx1ZTtcbiAgICAgIGNvbC5fc29ydC50aWNrID0gdGhpcy5kYXRhU291cmNlLm5leHRTb3J0VGljaztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY29sdW1ucy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4gKGl0ZW0uX3NvcnQuZGVmYXVsdCA9IGluZGV4ID09PSBpZHggPyB2YWx1ZSA6IG51bGwpKTtcbiAgICB9XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHRoaXMubG9hZFBhZ2VEYXRhKCk7XG4gICAgY29uc3QgcmVzID0ge1xuICAgICAgdmFsdWUsXG4gICAgICBtYXA6IHRoaXMuZGF0YVNvdXJjZS5nZXRSZXFTb3J0TWFwKHRoaXMuc2luZ2xlU29ydCwgdGhpcy5tdWx0aVNvcnQsIHRoaXMuX2NvbHVtbnMpLFxuICAgICAgY29sdW1uOiBjb2xcbiAgICB9O1xuICAgIHRoaXMuY2hhbmdlRW1pdCgnc29ydCcsIHJlcyk7XG4gIH1cblxuICBjbGVhclNvcnQoKTogdGhpcyB7XG4gICAgdGhpcy5fY29sdW1ucy5mb3JFYWNoKGl0ZW0gPT4gKGl0ZW0uX3NvcnQuZGVmYXVsdCA9IG51bGwpKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIGZpbHRlclxuXG4gIF9oYW5kbGVGaWx0ZXIoY29sOiBfU1RDb2x1bW4sIGNvbmZpcm06IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoIWNvbmZpcm0pIHtcbiAgICAgIHRoaXMuY29sdW1uU291cmNlLmNsZWFuRmlsdGVyKGNvbCk7XG4gICAgfVxuICAgIC8vIOi/h+a7pOihqOekuuS4gOenjeaVsOaNrueahOWPmOWMluW6lOmHjee9rumhteeggeS4uiBgMWBcbiAgICB0aGlzLnBpID0gMTtcbiAgICB0aGlzLmNvbHVtblNvdXJjZS51cGRhdGVEZWZhdWx0KGNvbC5maWx0ZXIhKTtcbiAgICB0aGlzLmxvYWRQYWdlRGF0YSgpO1xuICAgIHRoaXMuY2hhbmdlRW1pdCgnZmlsdGVyJywgY29sKTtcbiAgfVxuXG4gIGhhbmRsZUZpbHRlck5vdGlmeSh2YWx1ZT86IHVua25vd24pOiB2b2lkIHtcbiAgICB0aGlzLmNoYW5nZUVtaXQoJ2ZpbHRlckNoYW5nZScsIHZhbHVlKTtcbiAgfVxuXG4gIGNsZWFyRmlsdGVyKCk6IHRoaXMge1xuICAgIHRoaXMuX2NvbHVtbnMuZmlsdGVyKHcgPT4gdy5maWx0ZXIgJiYgdy5maWx0ZXIuZGVmYXVsdCA9PT0gdHJ1ZSkuZm9yRWFjaChjb2wgPT4gdGhpcy5jb2x1bW5Tb3VyY2UuY2xlYW5GaWx0ZXIoY29sKSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gY2hlY2tib3hcblxuICAvKiog5riF6Zmk5omA5pyJIGBjaGVja2JveGAgKi9cbiAgY2xlYXJDaGVjaygpOiB0aGlzIHtcbiAgICByZXR1cm4gdGhpcy5jaGVja0FsbChmYWxzZSk7XG4gIH1cblxuICBwcml2YXRlIF9yZWZDaGVjaygpOiB0aGlzIHtcbiAgICBjb25zdCB2YWxpZERhdGEgPSB0aGlzLl9kYXRhLmZpbHRlcih3ID0+ICF3LmRpc2FibGVkKTtcbiAgICBjb25zdCBjaGVja2VkTGlzdCA9IHZhbGlkRGF0YS5maWx0ZXIodyA9PiB3LmNoZWNrZWQgPT09IHRydWUpO1xuICAgIHRoaXMuX2FsbENoZWNrZWQgPSBjaGVja2VkTGlzdC5sZW5ndGggPiAwICYmIGNoZWNrZWRMaXN0Lmxlbmd0aCA9PT0gdmFsaWREYXRhLmxlbmd0aDtcbiAgICBjb25zdCBhbGxVbkNoZWNrZWQgPSB2YWxpZERhdGEuZXZlcnkodmFsdWUgPT4gIXZhbHVlLmNoZWNrZWQpO1xuICAgIHRoaXMuX2luZGV0ZXJtaW5hdGUgPSAhdGhpcy5fYWxsQ2hlY2tlZCAmJiAhYWxsVW5DaGVja2VkO1xuICAgIHRoaXMuX2FsbENoZWNrZWREaXNhYmxlZCA9IHRoaXMuX2RhdGEubGVuZ3RoID09PSB0aGlzLl9kYXRhLmZpbHRlcih3ID0+IHcuZGlzYWJsZWQpLmxlbmd0aDtcbiAgICByZXR1cm4gdGhpcy5jZCgpO1xuICB9XG5cbiAgY2hlY2tBbGwoY2hlY2tlZD86IGJvb2xlYW4pOiB0aGlzIHtcbiAgICBjaGVja2VkID0gdHlwZW9mIGNoZWNrZWQgPT09ICd1bmRlZmluZWQnID8gdGhpcy5fYWxsQ2hlY2tlZCA6IGNoZWNrZWQ7XG4gICAgdGhpcy5fZGF0YS5maWx0ZXIodyA9PiAhdy5kaXNhYmxlZCkuZm9yRWFjaChpID0+IChpLmNoZWNrZWQgPSBjaGVja2VkKSk7XG4gICAgcmV0dXJuIHRoaXMuX3JlZkNoZWNrKCkuX2NoZWNrTm90aWZ5KCkucmVmcmVzaERhdGEoKTtcbiAgfVxuXG4gIF9yb3dTZWxlY3Rpb24ocm93OiBTVENvbHVtblNlbGVjdGlvbik6IHRoaXMge1xuICAgIHJvdy5zZWxlY3QodGhpcy5fZGF0YSk7XG4gICAgcmV0dXJuIHRoaXMuX3JlZkNoZWNrKCkuX2NoZWNrTm90aWZ5KCk7XG4gIH1cblxuICBfY2hlY2tOb3RpZnkoKTogdGhpcyB7XG4gICAgY29uc3QgcmVzID0gdGhpcy5fZGF0YS5maWx0ZXIodyA9PiAhdy5kaXNhYmxlZCAmJiB3LmNoZWNrZWQgPT09IHRydWUpO1xuICAgIHRoaXMuY2hhbmdlRW1pdCgnY2hlY2tib3gnLCByZXMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gcmFkaW9cblxuICAvKiog5riF6Zmk5omA5pyJIGByYWRpb2AgKi9cbiAgY2xlYXJSYWRpbygpOiB0aGlzIHtcbiAgICB0aGlzLl9kYXRhLmZpbHRlcih3ID0+IHcuY2hlY2tlZCkuZm9yRWFjaChpdGVtID0+IChpdGVtLmNoZWNrZWQgPSBmYWxzZSkpO1xuICAgIHRoaXMuY2hhbmdlRW1pdCgncmFkaW8nLCBudWxsKTtcbiAgICByZXR1cm4gdGhpcy5yZWZyZXNoRGF0YSgpO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIF9oYW5kbGVUZChldjogX1NUVGROb3RpZnkpOiB2b2lkIHtcbiAgICBzd2l0Y2ggKGV2LnR5cGUpIHtcbiAgICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgICAgdGhpcy5fcmVmQ2hlY2soKS5fY2hlY2tOb3RpZnkoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdyYWRpbyc6XG4gICAgICAgIHRoaXMuY2hhbmdlRW1pdCgncmFkaW8nLCBldi5pdGVtKTtcbiAgICAgICAgdGhpcy5yZWZyZXNoRGF0YSgpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICAvLyAjcmVnaW9uIGV4cG9ydFxuXG4gIC8qKlxuICAgKiDlr7zlh7rlvZPliY3pobXvvIznoa7kv53lt7Lnu4/ms6jlhowgYFhsc3hNb2R1bGVgXG4gICAqXG4gICAqIEBwYXJhbSBuZXdEYXRhIOmHjeaWsOaMh+WumuaVsOaNru+8m+iLpeS4uiBgdHJ1ZWAg6KGo56S65L2/55SoIGBmaWx0ZXJlZERhdGFgIOaVsOaNrlxuICAgKiBAcGFyYW0gb3B0IOmineWkluWPguaVsFxuICAgKi9cbiAgZXhwb3J0KG5ld0RhdGE/OiBTVERhdGFbXSB8IHRydWUsIG9wdD86IFNURXhwb3J0T3B0aW9ucyk6IHZvaWQge1xuICAgIGNvbnN0IGRhdGEgPSBBcnJheS5pc0FycmF5KG5ld0RhdGEpXG4gICAgICA/IHRoaXMuZGF0YVNvdXJjZS5vcHRpbWl6ZURhdGEoeyBjb2x1bW5zOiB0aGlzLl9jb2x1bW5zLCByZXN1bHQ6IG5ld0RhdGEgfSlcbiAgICAgIDogdGhpcy5fZGF0YTtcbiAgICAobmV3RGF0YSA9PT0gdHJ1ZSA/IGZyb20odGhpcy5maWx0ZXJlZERhdGEpIDogb2YoZGF0YSkpLnN1YnNjcmliZSgocmVzOiBTVERhdGFbXSkgPT5cbiAgICAgIHRoaXMuZXhwb3J0U3J2LmV4cG9ydCh7XG4gICAgICAgIGNvbHVtZW5zOiB0aGlzLl9jb2x1bW5zLFxuICAgICAgICAuLi5vcHQsXG4gICAgICAgIGRhdGE6IHJlc1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gcmVzaXphYmxlXG5cbiAgY29sUmVzaXplKHsgd2lkdGggfTogTnpSZXNpemVFdmVudCwgY29sdW1uOiBfU1RDb2x1bW4pOiB2b2lkIHtcbiAgICBjb2x1bW4ud2lkdGggPSBgJHt3aWR0aH1weGA7XG4gICAgdGhpcy5jaGFuZ2VFbWl0KCdyZXNpemUnLCBjb2x1bW4pO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gY29udGV4dG1lbnVcbiAgb25Db250ZXh0bWVudShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5jb250ZXh0bWVudSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IGNvbEVsID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCkuY2xvc2VzdCgnW2RhdGEtY29sLWluZGV4XScpIGFzIEhUTUxFbGVtZW50O1xuICAgIGlmICghY29sRWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY29sSW5kZXggPSBOdW1iZXIoY29sRWwuZGF0YXNldC5jb2xJbmRleCk7XG4gICAgY29uc3Qgcm93SW5kZXggPSBOdW1iZXIoKGNvbEVsLmNsb3Nlc3QoJ3RyJykgYXMgSFRNTEVsZW1lbnQpLmRhdGFzZXQuaW5kZXgpO1xuICAgIGNvbnN0IGlzVGl0bGUgPSBpc05hTihyb3dJbmRleCk7XG4gICAgY29uc3Qgb2JzJCA9IHRoaXMuY29udGV4dG1lbnUoe1xuICAgICAgZXZlbnQsXG4gICAgICB0eXBlOiBpc1RpdGxlID8gJ2hlYWQnIDogJ2JvZHknLFxuICAgICAgcm93SW5kZXg6IGlzVGl0bGUgPyBudWxsIDogcm93SW5kZXgsXG4gICAgICBjb2xJbmRleCxcbiAgICAgIGRhdGE6IGlzVGl0bGUgPyBudWxsIDogdGhpcy5saXN0W3Jvd0luZGV4XSxcbiAgICAgIGNvbHVtbjogdGhpcy5fY29sdW1uc1tjb2xJbmRleF1cbiAgICB9KTtcbiAgICAoaXNPYnNlcnZhYmxlKG9icyQpID8gb2JzJCA6IG9mKG9icyQpKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcbiAgICAgICAgZmlsdGVyKHJlcyA9PiByZXMubGVuZ3RoID4gMClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgdGhpcy5jb250ZXh0bWVudUxpc3QgPSByZXMubWFwKGkgPT4ge1xuICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShpLmNoaWxkcmVuKSkge1xuICAgICAgICAgICAgaS5jaGlsZHJlbiA9IFtdO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgdGhpcy5jbXMuY3JlYXRlKGV2ZW50LCB0aGlzLmNvbnRleHRtZW51VHBsKTtcbiAgICAgIH0pO1xuICB9XG4gIC8vICNlbmRyZWdpb25cblxuICBnZXQgY2RrVmlydHVhbFNjcm9sbFZpZXdwb3J0KCk6IENka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydCB7XG4gICAgcmV0dXJuIHRoaXMub3JnVGFibGUuY2RrVmlydHVhbFNjcm9sbFZpZXdwb3J0ITtcbiAgfVxuXG4gIHJlc2V0Q29sdW1ucyhvcHRpb25zPzogU1RSZXNldENvbHVtbnNPcHRpb24pOiBQcm9taXNlPHRoaXM+IHtcbiAgICBvcHRpb25zID0geyBlbWl0UmVsb2FkOiB0cnVlLCBwcmVDbGVhckRhdGE6IGZhbHNlLCAuLi5vcHRpb25zIH07XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLmNvbHVtbnMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLmNvbHVtbnMgPSBvcHRpb25zLmNvbHVtbnM7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5waSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucGkgPSBvcHRpb25zLnBpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMucHMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnBzID0gb3B0aW9ucy5wcztcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuZW1pdFJlbG9hZCkge1xuICAgICAgLy8gU2hvdWxkIGNsZWFuIGRhdGEsIEJlY2F1c2Ugb2YgY2hhbmdpbmcgY29sdW1ucyBtYXkgY2F1c2UgaW5hY2N1cmF0ZSBkYXRhXG4gICAgICBvcHRpb25zLnByZUNsZWFyRGF0YSA9IHRydWU7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLnByZUNsZWFyRGF0YSkge1xuICAgICAgdGhpcy5fZGF0YSA9IFtdO1xuICAgIH1cbiAgICB0aGlzLnJlZnJlc2hDb2x1bW5zKCk7XG4gICAgaWYgKG9wdGlvbnMuZW1pdFJlbG9hZCkge1xuICAgICAgcmV0dXJuIHRoaXMubG9hZFBhZ2VEYXRhKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2QoKTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZWZyZXNoQ29sdW1ucygpOiB0aGlzIHtcbiAgICBjb25zdCByZXMgPSB0aGlzLmNvbHVtblNvdXJjZS5wcm9jZXNzKHRoaXMuY29sdW1ucyBhcyBfU1RDb2x1bW5bXSwge1xuICAgICAgd2lkdGhNb2RlOiB0aGlzLndpZHRoTW9kZSxcbiAgICAgIHJlc2l6YWJsZTogdGhpcy5fcmVzaXphYmxlLFxuICAgICAgc2FmZVR5cGU6IHRoaXMuY29nLnNhZmVUeXBlIGFzIFNUQ29sdW1uU2FmZVR5cGVcbiAgICB9KTtcbiAgICB0aGlzLl9jb2x1bW5zID0gcmVzLmNvbHVtbnM7XG4gICAgdGhpcy5faGVhZGVycyA9IHJlcy5oZWFkZXJzO1xuICAgIGlmICh0aGlzLmN1c3RvbVdpZHRoQ29uZmlnID09PSBmYWxzZSAmJiByZXMuaGVhZGVyV2lkdGhzICE9IG51bGwpIHtcbiAgICAgIHRoaXMuX3dpZHRoQ29uZmlnID0gcmVzLmhlYWRlcldpZHRocztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcml2YXRlIG9wdGltaXplRGF0YSgpOiB0aGlzIHtcbiAgICB0aGlzLl9kYXRhID0gdGhpcy5kYXRhU291cmNlLm9wdGltaXplRGF0YSh7XG4gICAgICBjb2x1bW5zOiB0aGlzLl9jb2x1bW5zLFxuICAgICAgcmVzdWx0OiB0aGlzLl9kYXRhLFxuICAgICAgcm93Q2xhc3NOYW1lOiB0aGlzLnJvd0NsYXNzTmFtZVxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBwdXJlIGRhdGEsIGBzdGAgaW50ZXJuYWxseSBtYWludGFpbnMgYSBzZXQgb2YgZGF0YSBmb3IgY2FjaGluZywgdGhpcyBwYXJ0IG9mIGRhdGEgbWF5IGFmZmVjdCB0aGUgYmFja2VuZFxuICAgKlxuICAgKiDov5Tlm57nuq/lh4DmlbDmja7vvIxgc3RgIOWGhemDqOS8mue7tOaKpOS4gOe7hOeUqOS6jue8k+WtmOeahOaVsOaNru+8jOi/memDqOWIhuaVsOaNruWPr+iDveS8muW9seWTjeWQjuerr1xuICAgKi9cbiAgcHVyZUl0ZW0oaXRlbU9ySW5kZXg6IFNURGF0YSB8IG51bWJlcik6IFNURGF0YSB8IG51bGwge1xuICAgIGlmICh0eXBlb2YgaXRlbU9ySW5kZXggPT09ICdudW1iZXInKSB7XG4gICAgICBpdGVtT3JJbmRleCA9IHRoaXMuX2RhdGFbaXRlbU9ySW5kZXhdO1xuICAgIH1cbiAgICBpZiAoIWl0ZW1PckluZGV4KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgY29weUl0ZW0gPSBkZWVwQ29weShpdGVtT3JJbmRleCk7XG4gICAgZGVsZXRlIGNvcHlJdGVtLl92YWx1ZXM7XG4gICAgcmV0dXJuIGNvcHlJdGVtO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY29sdW1uU291cmNlLnJlc3RvcmVBbGxSZW5kZXIodGhpcy5fY29sdW1ucyk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtQIGluIGtleW9mIHRoaXNdPzogU2ltcGxlQ2hhbmdlIH0gJiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMuY29sdW1ucykge1xuICAgICAgdGhpcy5yZWZyZXNoQ29sdW1ucygpLm9wdGltaXplRGF0YSgpO1xuICAgIH1cbiAgICBjb25zdCBjaGFuZ2VEYXRhID0gY2hhbmdlcy5kYXRhO1xuICAgIGlmIChjaGFuZ2VEYXRhICYmIGNoYW5nZURhdGEuY3VycmVudFZhbHVlICYmICEodGhpcy5yZXEubGF6eUxvYWQgJiYgY2hhbmdlRGF0YS5maXJzdENoYW5nZSkpIHtcbiAgICAgIHRoaXMubG9hZFBhZ2VEYXRhKCk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLmxvYWRpbmcpIHtcbiAgICAgIHRoaXMuX2xvYWRpbmcgPSBjaGFuZ2VzLmxvYWRpbmcuY3VycmVudFZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdC10ZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdC10ZC5jb21wb25lbnQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTVFRkQ29tcG9uZW50IHtcbiAgQElucHV0KCkgYyE6IF9TVENvbHVtbjtcbiAgQElucHV0KCkgY0lkeCE6IG51bWJlcjtcbiAgQElucHV0KCkgZGF0YSE6IFNURGF0YVtdO1xuICBASW5wdXQoKSBpITogU1REYXRhO1xuICBASW5wdXQoKSBpbmRleCE6IG51bWJlcjtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG4gPSBuZXcgRXZlbnRFbWl0dGVyPF9TVFRkTm90aWZ5PigpO1xuXG4gIHByaXZhdGUgZ2V0IHJvdXRlclN0YXRlKCk6IHsgcGk6IG51bWJlcjsgcHM6IG51bWJlcjsgdG90YWw6IG51bWJlciB9IHtcbiAgICBjb25zdCB7IHBpLCBwcywgdG90YWwgfSA9IHRoaXMuc3RDb21wO1xuICAgIHJldHVybiB7IHBpLCBwcywgdG90YWwgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBIb3N0KCkgcHJpdmF0ZSBzdENvbXA6IFNUQ29tcG9uZW50LFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBtb2RhbEhlbHBlcjogTW9kYWxIZWxwZXIsXG4gICAgcHJpdmF0ZSBkcmF3ZXJIZWxwZXI6IERyYXdlckhlbHBlclxuICApIHt9XG5cbiAgcHJpdmF0ZSByZXBvcnQodHlwZTogX1NUVGROb3RpZnlUeXBlKTogdm9pZCB7XG4gICAgdGhpcy5uLmVtaXQoeyB0eXBlLCBpdGVtOiB0aGlzLmksIGNvbDogdGhpcy5jIH0pO1xuICB9XG5cbiAgX2NoZWNrYm94KHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5pLmNoZWNrZWQgPSB2YWx1ZTtcbiAgICB0aGlzLnJlcG9ydCgnY2hlY2tib3gnKTtcbiAgfVxuXG4gIF9yYWRpbygpOiB2b2lkIHtcbiAgICB0aGlzLmRhdGEuZmlsdGVyKHcgPT4gIXcuZGlzYWJsZWQpLmZvckVhY2goaSA9PiAoaS5jaGVja2VkID0gZmFsc2UpKTtcbiAgICB0aGlzLmkuY2hlY2tlZCA9IHRydWU7XG4gICAgdGhpcy5yZXBvcnQoJ3JhZGlvJyk7XG4gIH1cblxuICBfbGluayhlOiBFdmVudCk6IGJvb2xlYW4ge1xuICAgIHRoaXMuX3N0b3BQcm9wYWdhdGlvbihlKTtcbiAgICBjb25zdCByZXMgPSB0aGlzLmMuY2xpY2shKHRoaXMuaSwgdGhpcy5zdENvbXApO1xuICAgIGlmICh0eXBlb2YgcmVzID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChyZXMsIHsgc3RhdGU6IHRoaXMucm91dGVyU3RhdGUgfSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIF9zdG9wUHJvcGFnYXRpb24oZXY6IEV2ZW50KTogdm9pZCB7XG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIF9idG4oYnRuOiBTVENvbHVtbkJ1dHRvbiwgZXY/OiBFdmVudCk6IHZvaWQge1xuICAgIGlmIChldikge1xuICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICAgIGNvbnN0IHJlY29yZCA9IHRoaXMuaTtcbiAgICBpZiAoYnRuLnR5cGUgPT09ICdtb2RhbCcgfHwgYnRuLnR5cGUgPT09ICdzdGF0aWMnKSB7XG4gICAgICBjb25zdCB7IG1vZGFsIH0gPSBidG47XG4gICAgICBjb25zdCBvYmogPSB7IFttb2RhbCEucGFyYW1zTmFtZSFdOiByZWNvcmQgfTtcbiAgICAgICh0aGlzLm1vZGFsSGVscGVyW2J0bi50eXBlID09PSAnbW9kYWwnID8gJ2NyZWF0ZScgOiAnY3JlYXRlU3RhdGljJ10gYXMgTnpTYWZlQW55KShcbiAgICAgICAgbW9kYWwhLmNvbXBvbmVudCxcbiAgICAgICAgeyAuLi5vYmosIC4uLihtb2RhbCEucGFyYW1zICYmIG1vZGFsIS5wYXJhbXMhKHJlY29yZCkpIH0sXG4gICAgICAgIGRlZXBNZXJnZUtleSh7fSwgdHJ1ZSwgdGhpcy5zdENvbXBbJ2NvZyddLm1vZGFsLCBtb2RhbClcbiAgICAgIClcbiAgICAgICAgLnBpcGUoZmlsdGVyKHcgPT4gdHlwZW9mIHcgIT09ICd1bmRlZmluZWQnKSlcbiAgICAgICAgLnN1YnNjcmliZSgocmVzOiBOelNhZmVBbnkpID0+IHRoaXMuYnRuQ2FsbGJhY2socmVjb3JkLCBidG4sIHJlcykpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoYnRuLnR5cGUgPT09ICdkcmF3ZXInKSB7XG4gICAgICBjb25zdCB7IGRyYXdlciB9ID0gYnRuO1xuICAgICAgY29uc3Qgb2JqID0geyBbZHJhd2VyIS5wYXJhbXNOYW1lIV06IHJlY29yZCB9O1xuICAgICAgdGhpcy5kcmF3ZXJIZWxwZXJcbiAgICAgICAgLmNyZWF0ZShcbiAgICAgICAgICBkcmF3ZXIhLnRpdGxlISxcbiAgICAgICAgICBkcmF3ZXIhLmNvbXBvbmVudCxcbiAgICAgICAgICB7IC4uLm9iaiwgLi4uKGRyYXdlciEucGFyYW1zICYmIGRyYXdlciEucGFyYW1zIShyZWNvcmQpKSB9LFxuICAgICAgICAgIGRlZXBNZXJnZUtleSh7fSwgdHJ1ZSwgdGhpcy5zdENvbXBbJ2NvZyddLmRyYXdlciwgZHJhd2VyKVxuICAgICAgICApXG4gICAgICAgIC5waXBlKGZpbHRlcih3ID0+IHR5cGVvZiB3ICE9PSAndW5kZWZpbmVkJykpXG4gICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHRoaXMuYnRuQ2FsbGJhY2socmVjb3JkLCBidG4sIHJlcykpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoYnRuLnR5cGUgPT09ICdsaW5rJykge1xuICAgICAgY29uc3QgY2xpY2tSZXMgPSB0aGlzLmJ0bkNhbGxiYWNrKHJlY29yZCwgYnRuKTtcbiAgICAgIGlmICh0eXBlb2YgY2xpY2tSZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoY2xpY2tSZXMsIHsgc3RhdGU6IHRoaXMucm91dGVyU3RhdGUgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuYnRuQ2FsbGJhY2socmVjb3JkLCBidG4pO1xuICB9XG5cbiAgcHJpdmF0ZSBidG5DYWxsYmFjayhyZWNvcmQ6IFNURGF0YSwgYnRuOiBTVENvbHVtbkJ1dHRvbiwgbW9kYWw/OiBOelNhZmVBbnkpOiBOelNhZmVBbnkge1xuICAgIGlmICghYnRuLmNsaWNrKSByZXR1cm47XG4gICAgaWYgKHR5cGVvZiBidG4uY2xpY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICBzd2l0Y2ggKGJ0bi5jbGljaykge1xuICAgICAgICBjYXNlICdsb2FkJzpcbiAgICAgICAgICB0aGlzLnN0Q29tcC5sb2FkKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3JlbG9hZCc6XG4gICAgICAgICAgdGhpcy5zdENvbXAucmVsb2FkKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBidG4uY2xpY2socmVjb3JkLCBtb2RhbCwgdGhpcy5zdENvbXApO1xuICAgIH1cbiAgfVxufVxuIiwiPG5nLXRlbXBsYXRlICN0aXRsZVRwbCBsZXQtaT5cbiAgPHNwYW4gW2lubmVySFRNTF09XCJpLl90ZXh0XCI+PC9zcGFuPlxuICA8c21hbGwgKm5nSWY9XCJpLm9wdGlvbmFsXCIgY2xhc3M9XCJzdF9faGVhZC1vcHRpb25hbFwiIFtpbm5lckhUTUxdPVwiaS5vcHRpb25hbFwiPjwvc21hbGw+XG4gIDxpXG4gICAgKm5nSWY9XCJpLm9wdGlvbmFsSGVscFwiXG4gICAgY2xhc3M9XCJzdF9faGVhZC10aXBcIlxuICAgIG56LXRvb2x0aXBcbiAgICBbbnpUb29sdGlwVGl0bGVdPVwiaS5vcHRpb25hbEhlbHBcIlxuICAgIG56LWljb25cbiAgICBuelR5cGU9XCJxdWVzdGlvbi1jaXJjbGVcIlxuICA+PC9pPlxuPC9uZy10ZW1wbGF0ZT5cbjxuZy10ZW1wbGF0ZSAjY2hrQWxsVHBsIGxldC1jdXN0b20+XG4gIDxsYWJlbFxuICAgIG56LWNoZWNrYm94XG4gICAgY2xhc3M9XCJzdF9fY2hlY2thbGxcIlxuICAgIFtuekRpc2FibGVkXT1cIl9hbGxDaGVja2VkRGlzYWJsZWRcIlxuICAgIFsobmdNb2RlbCldPVwiX2FsbENoZWNrZWRcIlxuICAgIFtuekluZGV0ZXJtaW5hdGVdPVwiX2luZGV0ZXJtaW5hdGVcIlxuICAgIChuZ01vZGVsQ2hhbmdlKT1cImNoZWNrQWxsKClcIlxuICAgIFtjbGFzcy5hbnQtdGFibGUtc2VsZWN0aW9uLXNlbGVjdC1hbGwtY3VzdG9tXT1cImN1c3RvbVwiXG4gID48L2xhYmVsPlxuPC9uZy10ZW1wbGF0ZT5cbjxuei10YWJsZVxuICAjdGFibGVcbiAgW256RGF0YV09XCJfZGF0YVwiXG4gIFsobnpQYWdlSW5kZXgpXT1cInBpXCJcbiAgKG56UGFnZUluZGV4Q2hhbmdlKT1cIl9jaGFuZ2UoJ3BpJylcIlxuICBbKG56UGFnZVNpemUpXT1cInBzXCJcbiAgKG56UGFnZVNpemVDaGFuZ2UpPVwiX2NoYW5nZSgncHMnKVwiXG4gIFtuelRvdGFsXT1cInRvdGFsXCJcbiAgW256U2hvd1BhZ2luYXRpb25dPVwiX2lzUGFnaW5hdGlvblwiXG4gIFtuekZyb250UGFnaW5hdGlvbl09XCJmYWxzZVwiXG4gIFtuekJvcmRlcmVkXT1cImJvcmRlcmVkXCJcbiAgW256U2l6ZV09XCJzaXplXCJcbiAgW256TG9hZGluZ109XCJfbG9hZGluZ1wiXG4gIFtuekxvYWRpbmdEZWxheV09XCJsb2FkaW5nRGVsYXlcIlxuICBbbnpMb2FkaW5nSW5kaWNhdG9yXT1cImxvYWRpbmdJbmRpY2F0b3JcIlxuICBbbnpUaXRsZV09XCJoZWFkZXIhXCJcbiAgW256Rm9vdGVyXT1cImZvb3RlciFcIlxuICBbbnpTY3JvbGxdPVwic2Nyb2xsXCJcbiAgW256VmlydHVhbEl0ZW1TaXplXT1cInZpcnR1YWxJdGVtU2l6ZVwiXG4gIFtuelZpcnR1YWxNYXhCdWZmZXJQeF09XCJ2aXJ0dWFsTWF4QnVmZmVyUHhcIlxuICBbbnpWaXJ0dWFsTWluQnVmZmVyUHhdPVwidmlydHVhbE1pbkJ1ZmZlclB4XCJcbiAgW256VmlydHVhbEZvclRyYWNrQnldPVwidmlydHVhbEZvclRyYWNrQnlcIlxuICBbbnpOb1Jlc3VsdF09XCJub1Jlc3VsdCFcIlxuICBbbnpQYWdlU2l6ZU9wdGlvbnNdPVwicGFnZS5wYWdlU2l6ZXMhXCJcbiAgW256U2hvd1F1aWNrSnVtcGVyXT1cInBhZ2Uuc2hvd1F1aWNrSnVtcGVyXCJcbiAgW256U2hvd1NpemVDaGFuZ2VyXT1cInBhZ2Uuc2hvd1NpemVcIlxuICBbbnpQYWdpbmF0aW9uUG9zaXRpb25dPVwicGFnZS5wb3NpdGlvbiFcIlxuICBbbnpQYWdpbmF0aW9uVHlwZV09XCJwYWdlLnR5cGUhXCJcbiAgW256SXRlbVJlbmRlcl09XCJwYWdlLml0ZW1SZW5kZXIhXCJcbiAgW256U2ltcGxlXT1cInBhZ2Uuc2ltcGxlXCJcbiAgW256U2hvd1RvdGFsXT1cInRvdGFsVHBsXCJcbiAgW256V2lkdGhDb25maWddPVwiX3dpZHRoQ29uZmlnXCJcbiAgKGNvbnRleHRtZW51KT1cIm9uQ29udGV4dG1lbnUoJGV2ZW50KVwiXG4+XG4gIDx0aGVhZCAqbmdJZj1cInNob3dIZWFkZXJcIj5cbiAgICA8dHIgKm5nRm9yPVwibGV0IHJvdyBvZiBfaGVhZGVyczsgbGV0IHJvd0ZpcnN0ID0gZmlyc3RcIj5cbiAgICAgIDx0aCAqbmdJZj1cInJvd0ZpcnN0ICYmIGV4cGFuZFwiIG56V2lkdGg9XCI1MHB4XCIgW3Jvd1NwYW5dPVwiX2hlYWRlcnMubGVuZ3RoXCI+PC90aD5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGggb2Ygcm93OyBsZXQgaW5kZXggPSBpbmRleDsgbGV0IGxhc3QgPSBsYXN0XCI+XG4gICAgICAgIDx0aFxuICAgICAgICAgICpsZXQ9XCJoLmNvbHVtbiBhcyBfY1wiXG4gICAgICAgICAgW2NvbFNwYW5dPVwiaC5jb2xTcGFuXCJcbiAgICAgICAgICBbcm93U3Bhbl09XCJoLnJvd1NwYW5cIlxuICAgICAgICAgIFtueldpZHRoXT1cIiRhbnkoX2MpLndpZHRoXCJcbiAgICAgICAgICBbbnpMZWZ0XT1cIl9jLl9sZWZ0IVwiXG4gICAgICAgICAgW256UmlnaHRdPVwiX2MuX3JpZ2h0IVwiXG4gICAgICAgICAgW25nQ2xhc3NdPVwiX2MuY2xhc3NOYW1lIVwiXG4gICAgICAgICAgW2F0dHIuZGF0YS1jb2xdPVwiX2MuaW5kZXhLZXlcIlxuICAgICAgICAgIFthdHRyLmRhdGEtY29sLWluZGV4XT1cImluZGV4XCJcbiAgICAgICAgICBbbnpTaG93U29ydF09XCJfYy5fc29ydC5lbmFibGVkXCJcbiAgICAgICAgICBbbnpTb3J0T3JkZXJdPVwiJGFueShfYykuX3NvcnQuZGVmYXVsdFwiXG4gICAgICAgICAgKG56U29ydE9yZGVyQ2hhbmdlKT1cInNvcnQoX2MsIGluZGV4LCAkZXZlbnQpXCJcbiAgICAgICAgICBbbnpDdXN0b21GaWx0ZXJdPVwiJGFueShfYykuZmlsdGVyXCJcbiAgICAgICAgICBuei1yZXNpemFibGVcbiAgICAgICAgICBbbnpEaXNhYmxlZF09XCJsYXN0IHx8ICRhbnkoX2MpLnJlc2l6YWJsZS5kaXNhYmxlZFwiXG4gICAgICAgICAgW256TWF4V2lkdGhdPVwiJGFueShfYykucmVzaXphYmxlLm1heFdpZHRoXCJcbiAgICAgICAgICBbbnpNaW5XaWR0aF09XCIkYW55KF9jKS5yZXNpemFibGUubWluV2lkdGhcIlxuICAgICAgICAgIFtuekJvdW5kc109XCIkYW55KF9jKS5yZXNpemFibGUuYm91bmRzXCJcbiAgICAgICAgICBbbnpQcmV2aWV3XT1cIiRhbnkoX2MpLnJlc2l6YWJsZS5wcmV2aWV3XCJcbiAgICAgICAgICAobnpSZXNpemVFbmQpPVwiY29sUmVzaXplKCRldmVudCwgX2MpXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxuei1yZXNpemUtaGFuZGxlICpuZ0lmPVwiJGFueSghbGFzdCAmJiAhJGFueShfYykucmVzaXphYmxlLmRpc2FibGVkKVwiIG56RGlyZWN0aW9uPVwicmlnaHRcIj5cbiAgICAgICAgICAgIDxpPjwvaT5cbiAgICAgICAgICA8L256LXJlc2l6ZS1oYW5kbGU+XG4gICAgICAgICAgPG5nLXRlbXBsYXRlXG4gICAgICAgICAgICAjcmVuZGVyVGl0bGVcbiAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIl9jLl9fcmVuZGVyVGl0bGUhXCJcbiAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogaC5jb2x1bW4sIGluZGV4OiBpbmRleCB9XCJcbiAgICAgICAgICA+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIV9jLl9fcmVuZGVyVGl0bGU7IGVsc2UgcmVuZGVyVGl0bGVcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cIl9jLnR5cGVcIj5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ2NoZWNrYm94J1wiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJfYy5zZWxlY3Rpb25zIS5sZW5ndGggPT09IDBcIj5cbiAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJjaGtBbGxUcGxcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IGZhbHNlIH1cIj5cbiAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIl9jLnNlbGVjdGlvbnMhLmxlbmd0aCA+IDBcIiBjbGFzcz1cImFudC10YWJsZS1zZWxlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJjaGtBbGxUcGxcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IHRydWUgfVwiPlxuICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJfYy5zZWxlY3Rpb25zIS5sZW5ndGhcIiBjbGFzcz1cImFudC10YWJsZS1zZWxlY3Rpb24tZXh0cmFcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIG56LWRyb3Bkb3duXG4gICAgICAgICAgICAgICAgICAgICAgbnpQbGFjZW1lbnQ9XCJib3R0b21MZWZ0XCJcbiAgICAgICAgICAgICAgICAgICAgICBbbnpEcm9wZG93bk1lbnVdPVwic2VsZWN0aW9uTWVudVwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJhbnQtdGFibGUtc2VsZWN0aW9uLWRvd24gc3RfX2NoZWNrYWxsLXNlbGVjdGlvblwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8aSBuei1pY29uIG56VHlwZT1cImRvd25cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8bnotZHJvcGRvd24tbWVudSAjc2VsZWN0aW9uTWVudT1cIm56RHJvcGRvd25NZW51XCI+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBuei1tZW51IGNsYXNzPVwiYW50LXRhYmxlLXNlbGVjdGlvbi1tZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICBuei1tZW51LWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBydyBvZiBfYy5zZWxlY3Rpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJfcm93U2VsZWN0aW9uKHJ3KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbaW5uZXJIVE1MXT1cInJ3LnRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgID48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgPC9uei1kcm9wZG93bi1tZW51PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hEZWZhdWx0PlxuICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwidGl0bGVUcGxcIlxuICAgICAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBfYy50aXRsZSB9XCJcbiAgICAgICAgICAgICAgICA+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiX2MuZmlsdGVyXCI+XG4gICAgICAgICAgICA8c3QtZmlsdGVyXG4gICAgICAgICAgICAgIG56LXRoLWV4dHJhXG4gICAgICAgICAgICAgIFtjb2xdPVwiaC5jb2x1bW5cIlxuICAgICAgICAgICAgICBbZl09XCJfYy5maWx0ZXJcIlxuICAgICAgICAgICAgICBbbG9jYWxlXT1cImxvY2FsZVwiXG4gICAgICAgICAgICAgIChuKT1cImhhbmRsZUZpbHRlck5vdGlmeSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgKGhhbmRsZSk9XCJfaGFuZGxlRmlsdGVyKF9jLCAkZXZlbnQpXCJcbiAgICAgICAgICAgID48L3N0LWZpbHRlcj5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC90aD5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvdHI+XG4gIDwvdGhlYWQ+XG4gIDx0Ym9keSBjbGFzcz1cInN0X19ib2R5XCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFfbG9hZGluZ1wiPlxuICAgICAgPG5nLXRlbXBsYXRlXG4gICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImJvZHlIZWFkZXIhXCJcbiAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBfc3RhdGlzdGljYWwgfVwiXG4gICAgICA+PC9uZy10ZW1wbGF0ZT5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8bmctdGVtcGxhdGUgI2JvZHlUcGwgbGV0LWkgbGV0LWluZGV4PVwiaW5kZXhcIj5cbiAgICAgIDx0clxuICAgICAgICBbYXR0ci5kYXRhLWluZGV4XT1cImluZGV4XCJcbiAgICAgICAgKGNsaWNrKT1cIl9yb3dDbGljaygkZXZlbnQsIGksIGluZGV4LCBmYWxzZSlcIlxuICAgICAgICAoZGJsY2xpY2spPVwiX3Jvd0NsaWNrKCRldmVudCwgaSwgaW5kZXgsIHRydWUpXCJcbiAgICAgICAgW25nQ2xhc3NdPVwiaS5fcm93Q2xhc3NOYW1lXCJcbiAgICAgID5cbiAgICAgICAgPHRkXG4gICAgICAgICAgKm5nSWY9XCJleHBhbmRcIlxuICAgICAgICAgIFtuelNob3dFeHBhbmRdPVwiZXhwYW5kICYmIGkuc2hvd0V4cGFuZCAhPT0gZmFsc2VcIlxuICAgICAgICAgIFtuekV4cGFuZF09XCJpLmV4cGFuZFwiXG4gICAgICAgICAgKG56RXhwYW5kQ2hhbmdlKT1cIl9leHBhbmRDaGFuZ2UoaSwgJGV2ZW50KVwiXG4gICAgICAgICAgKGNsaWNrKT1cIl9zdG9wUHJvcGFnYXRpb24oJGV2ZW50KVwiXG4gICAgICAgICAgbnpXaWR0aD1cIjUwcHhcIlxuICAgICAgICA+PC90ZD5cbiAgICAgICAgPHRkXG4gICAgICAgICAgKm5nRm9yPVwibGV0IGMgb2YgX2NvbHVtbnM7IGxldCBjSWR4ID0gaW5kZXhcIlxuICAgICAgICAgIFtuekxlZnRdPVwiISFjLl9sZWZ0XCJcbiAgICAgICAgICBbbnpSaWdodF09XCIhIWMuX3JpZ2h0XCJcbiAgICAgICAgICBbYXR0ci5kYXRhLWNvbC1pbmRleF09XCJjSWR4XCJcbiAgICAgICAgICBbbmdDbGFzc109XCJjLl9jbGFzc05hbWUhXCJcbiAgICAgICAgICBbYXR0ci5jb2xzcGFuXT1cImMuY29sU3BhblwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiAqbmdJZj1cInJlc3BvbnNpdmVcIiBjbGFzcz1cImFudC10YWJsZS1yZXBfX3RpdGxlXCI+XG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwidGl0bGVUcGxcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IGMudGl0bGUgfVwiPjwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzdC10ZCBbZGF0YV09XCJfZGF0YVwiIFtpXT1cImlcIiBbaW5kZXhdPVwiaW5kZXhcIiBbY109XCJjXCIgW2NJZHhdPVwiY0lkeFwiIChuKT1cIl9oYW5kbGVUZCgkZXZlbnQpXCI+PC9zdC10ZD5cbiAgICAgICAgPC90ZD5cbiAgICAgIDwvdHI+XG4gICAgICA8dHIgW256RXhwYW5kXT1cImkuZXhwYW5kXCI+XG4gICAgICAgIDxuZy10ZW1wbGF0ZVxuICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImV4cGFuZFwiXG4gICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBpLCBpbmRleDogaW5kZXggfVwiXG4gICAgICAgID48L25nLXRlbXBsYXRlPlxuICAgICAgPC90cj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhdmlydHVhbFNjcm9sbFwiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaSBvZiBfZGF0YTsgbGV0IGluZGV4ID0gaW5kZXhcIj5cbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImJvZHlUcGxcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IGksIGluZGV4OiBpbmRleCB9XCI+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidmlydHVhbFNjcm9sbFwiPlxuICAgICAgPG5nLXRlbXBsYXRlIG56LXZpcnR1YWwtc2Nyb2xsIGxldC1pIGxldC1pbmRleD1cImluZGV4XCI+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJib2R5VHBsXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBpLCBpbmRleDogaW5kZXggfVwiPlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIV9sb2FkaW5nXCI+XG4gICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYm9keSFcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IF9zdGF0aXN0aWNhbCB9XCI+PC9uZy10ZW1wbGF0ZT5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC90Ym9keT5cbiAgPG5nLXRlbXBsYXRlICN0b3RhbFRwbCBsZXQtcmFuZ2U9XCJyYW5nZVwiIGxldC10b3RhbD57eyByZW5kZXJUb3RhbCh0b3RhbCwgcmFuZ2UpIH19PC9uZy10ZW1wbGF0ZT5cbjwvbnotdGFibGU+XG48bnotZHJvcGRvd24tbWVudSAjY29udGV4dG1lbnVUcGw9XCJuekRyb3Bkb3duTWVudVwiPlxuICA8dWwgbnotbWVudSBjbGFzcz1cInN0X19jb250ZXh0bWVudVwiPlxuICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGkgb2YgY29udGV4dG1lbnVMaXN0XCI+XG4gICAgICA8bGkgbnotbWVudS1pdGVtICpuZ0lmPVwiaS5jaGlsZHJlbiEubGVuZ3RoID09PSAwXCIgKGNsaWNrKT1cImkuZm4hKGkpXCIgW2lubmVySFRNTF09XCJpLnRleHRcIj48L2xpPlxuICAgICAgPGxpIG56LXN1Ym1lbnUgKm5nSWY9XCJpLmNoaWxkcmVuIS5sZW5ndGggPiAwXCIgW256VGl0bGVdPVwiaS50ZXh0XCI+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGkgbnotbWVudS1pdGVtICpuZ0Zvcj1cImxldCBjaSBvZiBpLmNoaWxkcmVuXCIgKGNsaWNrKT1cImNpLmZuIShjaSlcIiBbaW5uZXJIVE1MXT1cImNpLnRleHRcIj48L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9saT5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC91bD5cbjwvbnotZHJvcGRvd24tbWVudT5cbiIsIjxuZy10ZW1wbGF0ZSAjYnRuVHBsIGxldC1pIGxldC1jaGlsZD1cImNoaWxkXCI+XG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaS50b29sdGlwXCI+XG4gICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImJ0bkl0ZW1UcGxcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IGkgfVwiPjwvbmctdGVtcGxhdGU+XG4gIDwvbmctY29udGFpbmVyPlxuICA8c3BhbiAqbmdJZj1cImkudG9vbHRpcFwiIG56LXRvb2x0aXAgW256VG9vbHRpcFRpdGxlXT1cImkudG9vbHRpcFwiIFtjbGFzcy5kLWJsb2NrXT1cImNoaWxkXCIgW2NsYXNzLndpZHRoLTEwMF09XCJjaGlsZFwiPlxuICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJidG5JdGVtVHBsXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBpIH1cIj48L25nLXRlbXBsYXRlPlxuICA8L3NwYW4+XG48L25nLXRlbXBsYXRlPlxuPG5nLXRlbXBsYXRlICNidG5JdGVtVHBsIGxldC1pPlxuICA8YVxuICAgICpuZ0lmPVwiaS5wb3BcIlxuICAgIG56LXBvcGNvbmZpcm1cbiAgICBbbnpQb3Bjb25maXJtVGl0bGVdPVwiaS5wb3AudGl0bGVcIlxuICAgIFtuekljb25dPVwiaS5wb3AuaWNvblwiXG4gICAgW256Q29uZGl0aW9uXT1cImkucG9wLmNvbmRpdGlvbihpKVwiXG4gICAgW256Q2FuY2VsVGV4dF09XCJpLnBvcC5jYW5jZWxUZXh0XCJcbiAgICBbbnpPa1RleHRdPVwiaS5wb3Aub2tUZXh0XCJcbiAgICBbbnpPa1R5cGVdPVwiaS5wb3Aub2tUeXBlXCJcbiAgICAobnpPbkNvbmZpcm0pPVwiX2J0bihpKVwiXG4gICAgY2xhc3M9XCJzdF9fYnRuLXRleHRcIlxuICAgIFtuZ0NsYXNzXT1cImkuY2xhc3NOYW1lXCJcbiAgICAoY2xpY2spPVwiX3N0b3BQcm9wYWdhdGlvbigkZXZlbnQpXCJcbiAgPlxuICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJidG5UZXh0VHBsXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBpIH1cIj48L25nLXRlbXBsYXRlPlxuICA8L2E+XG4gIDxhICpuZ0lmPVwiIWkucG9wXCIgKGNsaWNrKT1cIl9idG4oaSwgJGV2ZW50KVwiIGNsYXNzPVwic3RfX2J0bi10ZXh0XCIgW25nQ2xhc3NdPVwiaS5jbGFzc05hbWVcIj5cbiAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYnRuVGV4dFRwbFwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogaSB9XCI+PC9uZy10ZW1wbGF0ZT5cbiAgPC9hPlxuPC9uZy10ZW1wbGF0ZT5cbjxuZy10ZW1wbGF0ZSAjYnRuVGV4dFRwbCBsZXQtaT5cbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImkuaWNvblwiPlxuICAgIDxpXG4gICAgICAqbmdJZj1cIiFpLmljb24uaWNvbmZvbnRcIlxuICAgICAgbnotaWNvblxuICAgICAgW256VHlwZV09XCJpLmljb24udHlwZVwiXG4gICAgICBbbnpUaGVtZV09XCJpLmljb24udGhlbWVcIlxuICAgICAgW256U3Bpbl09XCJpLmljb24uc3BpblwiXG4gICAgICBbbnpUd290b25lQ29sb3JdPVwiaS5pY29uLnR3b1RvbmVDb2xvclwiXG4gICAgPjwvaT5cbiAgICA8aSAqbmdJZj1cImkuaWNvbi5pY29uZm9udFwiIG56LWljb24gW256SWNvbmZvbnRdPVwiaS5pY29uLmljb25mb250XCI+PC9pPlxuICA8L25nLWNvbnRhaW5lcj5cbiAgPHNwYW4gW2lubmVySFRNTF09XCJpLl90ZXh0XCIgW25nQ2xhc3NdPVwieyAncGwteHMnOiBpLmljb24gfVwiPjwvc3Bhbj5cbjwvbmctdGVtcGxhdGU+XG48bmctdGVtcGxhdGVcbiAgI3JlbmRlclxuICBbbmdUZW1wbGF0ZU91dGxldF09XCJjLl9fcmVuZGVyIVwiXG4gIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogaSwgaW5kZXg6IGluZGV4LCBjb2x1bW46IGMgfVwiXG4+PC9uZy10ZW1wbGF0ZT5cbjxuZy1jb250YWluZXIgKm5nSWY9XCIhYy5fX3JlbmRlcjsgZWxzZSByZW5kZXJcIj5cbiAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwiYy50eXBlXCI+XG4gICAgPGxhYmVsXG4gICAgICAqbmdTd2l0Y2hDYXNlPVwiJ2NoZWNrYm94J1wiXG4gICAgICBuei1jaGVja2JveFxuICAgICAgW256RGlzYWJsZWRdPVwiaS5kaXNhYmxlZFwiXG4gICAgICBbbmdNb2RlbF09XCJpLmNoZWNrZWRcIlxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiX2NoZWNrYm94KCRldmVudClcIlxuICAgID48L2xhYmVsPlxuICAgIDxsYWJlbFxuICAgICAgKm5nU3dpdGNoQ2FzZT1cIidyYWRpbydcIlxuICAgICAgbnotcmFkaW9cbiAgICAgIFtuekRpc2FibGVkXT1cImkuZGlzYWJsZWRcIlxuICAgICAgW25nTW9kZWxdPVwiaS5jaGVja2VkXCJcbiAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIl9yYWRpbygpXCJcbiAgICA+PC9sYWJlbD5cbiAgICA8YVxuICAgICAgKm5nU3dpdGNoQ2FzZT1cIidsaW5rJ1wiXG4gICAgICAoY2xpY2spPVwiX2xpbmsoJGV2ZW50KVwiXG4gICAgICBbaW5uZXJIVE1MXT1cImkuX3ZhbHVlc1tjSWR4XS5fdGV4dFwiXG4gICAgICBbYXR0ci50aXRsZV09XCJpLl92YWx1ZXNbY0lkeF0udGV4dFwiXG4gICAgPjwvYT5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaS5fdmFsdWVzW2NJZHhdLnRleHRcIj5cbiAgICAgIDxuei10YWcgKm5nU3dpdGNoQ2FzZT1cIid0YWcnXCIgW256Q29sb3JdPVwiaS5fdmFsdWVzW2NJZHhdLmNvbG9yXCI+XG4gICAgICAgIDxzcGFuIFtpbm5lckhUTUxdPVwiaS5fdmFsdWVzW2NJZHhdLl90ZXh0XCI+PC9zcGFuPlxuICAgICAgPC9uei10YWc+XG4gICAgICA8bnotYmFkZ2UgKm5nU3dpdGNoQ2FzZT1cIidiYWRnZSdcIiBbbnpTdGF0dXNdPVwiaS5fdmFsdWVzW2NJZHhdLmNvbG9yXCIgW256VGV4dF09XCJpLl92YWx1ZXNbY0lkeF0udGV4dFwiPjwvbnotYmFkZ2U+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPG5nLXRlbXBsYXRlICpuZ1N3aXRjaENhc2U9XCInd2lkZ2V0J1wiIHN0LXdpZGdldC1ob3N0IFtyZWNvcmRdPVwiaVwiIFtjb2x1bW5dPVwiY1wiPjwvbmctdGVtcGxhdGVcbiAgICA+PG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hEZWZhdWx0PlxuICAgICAgPHNwYW5cbiAgICAgICAgKm5nSWY9XCJjLnNhZmVUeXBlICE9PSAndGV4dCdcIlxuICAgICAgICBbaW5uZXJIVE1MXT1cImkuX3ZhbHVlc1tjSWR4XS5fdGV4dFwiXG4gICAgICAgIFthdHRyLnRpdGxlXT1cImMuX2lzVHJ1bmNhdGUgPyBpLl92YWx1ZXNbY0lkeF0udGV4dCA6IG51bGxcIlxuICAgICAgPjwvc3Bhbj5cbiAgICAgIDxzcGFuXG4gICAgICAgICpuZ0lmPVwiYy5zYWZlVHlwZSA9PT0gJ3RleHQnXCJcbiAgICAgICAgW2lubmVyVGV4dF09XCJpLl92YWx1ZXNbY0lkeF0uX3RleHRcIlxuICAgICAgICBbYXR0ci50aXRsZV09XCJjLl9pc1RydW5jYXRlID8gaS5fdmFsdWVzW2NJZHhdLnRleHQgOiBudWxsXCJcbiAgICAgID48L3NwYW4+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIDwvbmctY29udGFpbmVyPlxuICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBidG4gb2YgaS5fdmFsdWVzW2NJZHhdLmJ1dHRvbnM7IGxldCBsYXN0ID0gbGFzdFwiPlxuICAgIDxhICpuZ0lmPVwiYnRuLmNoaWxkcmVuIS5sZW5ndGggPiAwXCIgbnotZHJvcGRvd24gW256RHJvcGRvd25NZW51XT1cImJ0bk1lbnVcIiBuek92ZXJsYXlDbGFzc05hbWU9XCJzdF9fYnRuLXN1YlwiPlxuICAgICAgPHNwYW4gW2lubmVySFRNTF09XCJidG4uX3RleHRcIj48L3NwYW4+XG4gICAgICA8aSBuei1pY29uIG56VHlwZT1cImRvd25cIj48L2k+XG4gICAgPC9hPlxuICAgIDxuei1kcm9wZG93bi1tZW51ICNidG5NZW51PVwibnpEcm9wZG93bk1lbnVcIj5cbiAgICAgIDx1bCBuei1tZW51PlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBzdWJCdG4gb2YgYnRuLmNoaWxkcmVuIVwiPlxuICAgICAgICAgIDxsaSAqbmdJZj1cInN1YkJ0bi50eXBlICE9PSAnZGl2aWRlcidcIiBuei1tZW51LWl0ZW0gW2NsYXNzLnN0X19idG4tZGlzYWJsZWRdPVwic3ViQnRuLl9kaXNhYmxlZFwiPlxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImJ0blRwbFwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogc3ViQnRuLCBjaGlsZDogdHJ1ZSB9XCI+XG4gICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpICpuZ0lmPVwic3ViQnRuLnR5cGUgPT09ICdkaXZpZGVyJ1wiIG56LW1lbnUtZGl2aWRlcj48L2xpPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvdWw+XG4gICAgPC9uei1kcm9wZG93bi1tZW51PlxuICAgIDxzcGFuICpuZ0lmPVwiYnRuLmNoaWxkcmVuIS5sZW5ndGggPT09IDBcIiBbY2xhc3Muc3RfX2J0bi1kaXNhYmxlZF09XCJidG4uX2Rpc2FibGVkXCI+XG4gICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYnRuVHBsXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBidG4sIGNoaWxkOiBmYWxzZSB9XCI+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgIDwvc3Bhbj5cbiAgICA8bnotZGl2aWRlciAqbmdJZj1cIiFsYXN0XCIgbnpUeXBlPVwidmVydGljYWxcIj48L256LWRpdmlkZXI+XG4gIDwvbmctY29udGFpbmVyPlxuPC9uZy1jb250YWluZXI+XG4iXX0=