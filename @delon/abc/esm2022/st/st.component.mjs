import { __decorate } from "tslib";
import { DecimalPipe, DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, EventEmitter, Host, inject, Inject, Input, Optional, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { from, isObservable, of, filter, catchError, map, finalize, throwError } from 'rxjs';
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
    get noColumns() {
        return this.columns == null;
    }
    constructor(i18nSrv, cdr, el, exportSrv, doc, columnSource, dataSource, delonI18n, configSrv, cms) {
        this.cdr = cdr;
        this.el = el;
        this.exportSrv = exportSrv;
        this.doc = doc;
        this.columnSource = columnSource;
        this.dataSource = dataSource;
        this.delonI18n = delonI18n;
        this.cms = cms;
        this.destroy$ = inject(DestroyRef);
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
        this.delonI18n.change.pipe(takeUntilDestroyed()).subscribe(() => {
            this.locale = this.delonI18n.getData('st');
            if (this._columns.length > 0) {
                this.updateTotalTpl();
                this.cd();
            }
        });
        i18nSrv.change
            .pipe(takeUntilDestroyed(), filter(() => this._columns.length > 0))
            .subscribe(() => this.refreshColumns());
        this.setCog(configSrv.merge('st', ST_DEFAULT_CONFIG));
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
        return this.loadData({ paginator: false }).pipe(map(res => res.list));
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
            singleSort,
            multiSort,
            rowClassName,
            paginator: true,
            customRequest: this.customRequest || this.cog.customRequest,
            ...options
        })
            .pipe(takeUntilDestroyed(this.destroy$));
    }
    loadPageData() {
        this.setLoading(true);
        return this.loadData().pipe(finalize(() => this.setLoading(false)), catchError(error => {
            this.error.emit({ type: 'req', error });
            return throwError(() => error);
        }), map(result => {
            const undefinedString = 'undefined';
            if (typeof result.pi !== undefinedString) {
                this.pi = result.pi;
            }
            if (typeof result.ps !== undefinedString) {
                this.ps = result.ps;
            }
            if (typeof result.total !== undefinedString) {
                this.total = result.total;
            }
            if (typeof result.pageShow !== undefinedString) {
                this._isPagination = result.pageShow;
            }
            this._data = result.list ?? [];
            this._statistical = result.statistical;
            this.changeEmit('loaded', result.list);
            // Should be re-render in next tike when using virtual scroll
            // https://github.com/ng-alain/ng-alain/issues/1836
            if (this.cdkVirtualScrollViewport != null) {
                Promise.resolve().then(() => this.cdkVirtualScrollViewport?.checkViewportSize());
            }
            this._refCheck();
            return this;
        }));
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
            this.loadPageData().subscribe(() => this._toTop(options?.toTop));
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
        this._columns.forEach(c => {
            this._data.forEach((i, idx) => {
                const values = i._values;
                if (c.type === 'no') {
                    const text = `${this.dataSource.getNoIndex(i, c, idx)}`;
                    values[c.__point] = {
                        text,
                        _text: text,
                        org: idx,
                        safeType: 'text'
                    };
                }
                values[c.__point].props = this.dataSource.getCell(c, i, idx);
            });
        });
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
        this.loadPageData().subscribe(() => {
            const res = {
                value,
                map: this.dataSource.getReqSortMap(this.singleSort, this.multiSort, this._columns),
                column: col
            };
            this.changeEmit('sort', res);
        });
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
        this.loadPageData().subscribe(() => this.changeEmit('filter', col));
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
            .pipe(takeUntilDestroyed(this.destroy$), filter(res => res.length > 0))
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
        return this.orgTable?.cdkVirtualScrollViewport;
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
            return of(this);
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
        ['_values', '_rowClassName'].forEach(key => delete copyItem[key]);
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
            this.loadPageData().subscribe();
        }
        if (changes.loading) {
            this._loading = changes.loading.currentValue;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: STComponent, deps: [{ token: ALAIN_I18N_TOKEN, optional: true }, { token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i1.STExport }, { token: DOCUMENT }, { token: i2.STColumnSource }, { token: i3.STDataSource }, { token: i4.DelonLocaleService }, { token: i5.AlainConfigService }, { token: i6.NzContextMenuService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.8", type: STComponent, selector: "st", inputs: { req: "req", res: "res", page: "page", data: "data", columns: "columns", contextmenu: "contextmenu", ps: "ps", pi: "pi", total: "total", loading: "loading", loadingDelay: "loadingDelay", loadingIndicator: "loadingIndicator", bordered: "bordered", size: "size", scroll: "scroll", singleSort: "singleSort", multiSort: "multiSort", rowClassName: "rowClassName", clickRowClassName: "clickRowClassName", widthMode: "widthMode", widthConfig: "widthConfig", resizable: "resizable", header: "header", showHeader: "showHeader", footer: "footer", bodyHeader: "bodyHeader", body: "body", expandRowByClick: "expandRowByClick", expandAccordion: "expandAccordion", expand: "expand", noResult: "noResult", responsive: "responsive", responsiveHideHeaderFooter: "responsiveHideHeaderFooter", virtualScroll: "virtualScroll", virtualItemSize: "virtualItemSize", virtualMaxBufferPx: "virtualMaxBufferPx", virtualMinBufferPx: "virtualMinBufferPx", customRequest: "customRequest", virtualForTrackBy: "virtualForTrackBy" }, outputs: { error: "error", change: "change" }, host: { properties: { "class.st": "true", "class.st__p-left": "page.placement === 'left'", "class.st__p-center": "page.placement === 'center'", "class.st__width-strict": "widthMode.type === 'strict'", "class.st__row-class": "rowClassName", "class.ant-table-rep": "responsive", "class.ant-table-rep__hide-header-footer": "responsiveHideHeaderFooter" } }, providers: [STDataSource, STRowSource, STColumnSource, STExport, DatePipe, YNPipe, DecimalPipe], viewQueries: [{ propertyName: "orgTable", first: true, predicate: ["table"], descendants: true }, { propertyName: "contextmenuTpl", first: true, predicate: ["contextmenuTpl"], descendants: true }], exportAs: ["st"], usesOnChanges: true, ngImport: i0, template: "<ng-template #titleTpl let-i>\n  <span [innerHTML]=\"i._text\"></span>\n  <small *ngIf=\"i.optional\" class=\"st__head-optional\" [innerHTML]=\"i.optional\"></small>\n  <i\n    *ngIf=\"i.optionalHelp\"\n    class=\"st__head-tip\"\n    nz-tooltip\n    [nzTooltipTitle]=\"i.optionalHelp\"\n    nz-icon\n    nzType=\"question-circle\"\n  ></i>\n</ng-template>\n<ng-template #chkAllTpl let-custom>\n  <label\n    nz-checkbox\n    class=\"st__checkall\"\n    [nzDisabled]=\"_allCheckedDisabled\"\n    [(ngModel)]=\"_allChecked\"\n    [nzIndeterminate]=\"_indeterminate\"\n    (ngModelChange)=\"checkAll()\"\n    [class.ant-table-selection-select-all-custom]=\"custom\"\n  ></label>\n</ng-template>\n<nz-table\n  #table\n  [nzData]=\"_data\"\n  [(nzPageIndex)]=\"pi\"\n  (nzPageIndexChange)=\"_change('pi')\"\n  [(nzPageSize)]=\"ps\"\n  (nzPageSizeChange)=\"_change('ps')\"\n  [nzTotal]=\"total\"\n  [nzShowPagination]=\"_isPagination\"\n  [nzFrontPagination]=\"false\"\n  [nzBordered]=\"bordered\"\n  [nzSize]=\"size\"\n  [nzLoading]=\"noColumns || _loading\"\n  [nzLoadingDelay]=\"loadingDelay\"\n  [nzLoadingIndicator]=\"loadingIndicator\"\n  [nzTitle]=\"header!\"\n  [nzFooter]=\"footer!\"\n  [nzScroll]=\"scroll\"\n  [nzVirtualItemSize]=\"virtualItemSize\"\n  [nzVirtualMaxBufferPx]=\"virtualMaxBufferPx\"\n  [nzVirtualMinBufferPx]=\"virtualMinBufferPx\"\n  [nzVirtualForTrackBy]=\"virtualForTrackBy\"\n  [nzNoResult]=\"noResult!\"\n  [nzPageSizeOptions]=\"page.pageSizes!\"\n  [nzShowQuickJumper]=\"page.showQuickJumper\"\n  [nzShowSizeChanger]=\"page.showSize\"\n  [nzPaginationPosition]=\"page.position!\"\n  [nzPaginationType]=\"page.type!\"\n  [nzItemRender]=\"page.itemRender!\"\n  [nzSimple]=\"page.simple\"\n  [nzShowTotal]=\"totalTpl\"\n  [nzWidthConfig]=\"_widthConfig\"\n  (contextmenu)=\"onContextmenu($event)\"\n  [class.st__no-column]=\"noColumns\"\n>\n  <thead *ngIf=\"showHeader\">\n    <tr *ngFor=\"let row of _headers; let rowFirst = first\">\n      <th *ngIf=\"rowFirst && expand\" nzWidth=\"50px\" [rowSpan]=\"_headers.length\"></th>\n      <ng-container *ngFor=\"let h of row; let index = index; let last = last\">\n        <th\n          *let=\"h.column as _c\"\n          [colSpan]=\"h.colSpan\"\n          [rowSpan]=\"h.rowSpan\"\n          [nzWidth]=\"$any(_c).width\"\n          [nzLeft]=\"_c._left!\"\n          [nzRight]=\"_c._right!\"\n          [ngClass]=\"_c._className\"\n          [attr.data-col]=\"_c.indexKey\"\n          [attr.data-col-index]=\"index\"\n          [nzShowSort]=\"_c._sort.enabled\"\n          [nzSortOrder]=\"$any(_c)._sort.default\"\n          (nzSortOrderChange)=\"sort(_c, index, $event)\"\n          [nzCustomFilter]=\"!!_c.filter\"\n          [class.st__has-filter]=\"_c.filter\"\n          nz-resizable\n          [nzDisabled]=\"last || $any(_c).resizable.disabled\"\n          [nzMaxWidth]=\"$any(_c).resizable.maxWidth\"\n          [nzMinWidth]=\"$any(_c).resizable.minWidth\"\n          [nzBounds]=\"$any(_c).resizable.bounds\"\n          [nzPreview]=\"$any(_c).resizable.preview\"\n          (nzResizeEnd)=\"colResize($event, _c)\"\n        >\n          <nz-resize-handle *ngIf=\"$any(!last && !$any(_c).resizable.disabled)\" nzDirection=\"right\">\n            <i></i>\n          </nz-resize-handle>\n          <ng-template\n            #renderTitle\n            [ngTemplateOutlet]=\"_c.__renderTitle!\"\n            [ngTemplateOutletContext]=\"{ $implicit: h.column, index: index }\"\n          />\n          <ng-container *ngIf=\"!_c.__renderTitle; else renderTitle\">\n            <ng-container [ngSwitch]=\"_c.type\">\n              <ng-container *ngSwitchCase=\"'checkbox'\">\n                <ng-container *ngIf=\"_c.selections!.length === 0\">\n                  <ng-template [ngTemplateOutlet]=\"chkAllTpl\" [ngTemplateOutletContext]=\"{ $implicit: false }\" />\n                </ng-container>\n                <div *ngIf=\"_c.selections!.length > 0\" class=\"ant-table-selection\">\n                  <ng-template [ngTemplateOutlet]=\"chkAllTpl\" [ngTemplateOutletContext]=\"{ $implicit: true }\" />\n                  <div *ngIf=\"_c.selections!.length\" class=\"ant-table-selection-extra\">\n                    <div\n                      nz-dropdown\n                      nzPlacement=\"bottomLeft\"\n                      [nzDropdownMenu]=\"selectionMenu\"\n                      class=\"ant-table-selection-down st__checkall-selection\"\n                    >\n                      <i nz-icon nzType=\"down\"></i>\n                    </div>\n                  </div>\n                  <nz-dropdown-menu #selectionMenu=\"nzDropdownMenu\">\n                    <ul nz-menu class=\"ant-table-selection-menu\">\n                      <li\n                        nz-menu-item\n                        *ngFor=\"let rw of _c.selections\"\n                        (click)=\"_rowSelection(rw)\"\n                        [innerHTML]=\"rw.text\"\n                      ></li>\n                    </ul>\n                  </nz-dropdown-menu>\n                </div>\n              </ng-container>\n              <ng-container *ngSwitchDefault>\n                <ng-template [ngTemplateOutlet]=\"titleTpl\" [ngTemplateOutletContext]=\"{ $implicit: _c.title }\" />\n              </ng-container>\n            </ng-container>\n          </ng-container>\n          <ng-container *ngIf=\"_c.filter\">\n            <st-filter\n              nz-th-extra\n              [col]=\"h.column\"\n              [f]=\"_c.filter\"\n              [locale]=\"locale\"\n              (n)=\"handleFilterNotify($event)\"\n              (handle)=\"_handleFilter(_c, $event)\"\n            />\n          </ng-container>\n        </th>\n      </ng-container>\n    </tr>\n  </thead>\n  <tbody class=\"st__body\">\n    <ng-container *ngIf=\"!_loading\">\n      <ng-template [ngTemplateOutlet]=\"bodyHeader!\" [ngTemplateOutletContext]=\"{ $implicit: _statistical }\" />\n    </ng-container>\n    <ng-template #bodyTpl let-i let-index=\"index\">\n      <tr\n        [attr.data-index]=\"index\"\n        (click)=\"_rowClick($event, i, index, false)\"\n        (dblclick)=\"_rowClick($event, i, index, true)\"\n        [ngClass]=\"i._rowClassName\"\n      >\n        <td\n          *ngIf=\"expand\"\n          [nzShowExpand]=\"expand && i.showExpand !== false\"\n          [nzExpand]=\"i.expand\"\n          (nzExpandChange)=\"_expandChange(i, $event)\"\n          (click)=\"_stopPropagation($event)\"\n          nzWidth=\"50px\"\n        ></td>\n        <ng-container *ngFor=\"let c of _columns; let cIdx = index\">\n          <td\n            *ngIf=\"i._values[cIdx].props?.colSpan > 0 && i._values[cIdx].props?.rowSpan > 0\"\n            [nzLeft]=\"!!c._left\"\n            [nzRight]=\"!!c._right\"\n            [attr.data-col-index]=\"cIdx\"\n            [ngClass]=\"c._className\"\n            [attr.colspan]=\"i._values[cIdx].props?.colSpan === 1 ? null : i._values[cIdx].props?.colSpan\"\n            [attr.rowspan]=\"i._values[cIdx].props?.rowSpan === 1 ? null : i._values[cIdx].props?.rowSpan\"\n          >\n            <span *ngIf=\"responsive\" class=\"ant-table-rep__title\">\n              <ng-template [ngTemplateOutlet]=\"titleTpl\" [ngTemplateOutletContext]=\"{ $implicit: c.title }\" />\n            </span>\n            <st-td [data]=\"_data\" [i]=\"i\" [index]=\"index\" [c]=\"c\" [cIdx]=\"cIdx\" (n)=\"_handleTd($event)\" />\n          </td>\n        </ng-container>\n      </tr>\n      <tr [nzExpand]=\"i.expand\">\n        <ng-template [ngTemplateOutlet]=\"expand\" [ngTemplateOutletContext]=\"{ $implicit: i, index: index }\" />\n      </tr>\n    </ng-template>\n    <ng-container *ngIf=\"!virtualScroll\">\n      <ng-container *ngFor=\"let i of _data; let index = index\">\n        <ng-template [ngTemplateOutlet]=\"bodyTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, index: index }\" />\n      </ng-container>\n    </ng-container>\n    <ng-container *ngIf=\"virtualScroll\">\n      <ng-template nz-virtual-scroll let-i let-index=\"index\">\n        <ng-template [ngTemplateOutlet]=\"bodyTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, index: index }\" />\n      </ng-template>\n    </ng-container>\n    <ng-container *ngIf=\"!_loading\">\n      <ng-template [ngTemplateOutlet]=\"body!\" [ngTemplateOutletContext]=\"{ $implicit: _statistical }\" />\n    </ng-container>\n  </tbody>\n  <ng-template #totalTpl let-range=\"range\" let-total>{{ renderTotal(total, range) }}</ng-template>\n</nz-table>\n<nz-dropdown-menu #contextmenuTpl=\"nzDropdownMenu\">\n  <ul nz-menu class=\"st__contextmenu\">\n    <ng-container *ngFor=\"let i of contextmenuList\">\n      <li nz-menu-item *ngIf=\"i.children!.length === 0\" (click)=\"i.fn!(i)\" [innerHTML]=\"i.text\"></li>\n      <li nz-submenu *ngIf=\"i.children!.length > 0\" [nzTitle]=\"i.text\">\n        <ul>\n          <li nz-menu-item *ngFor=\"let ci of i.children\" (click)=\"ci.fn!(ci)\" [innerHTML]=\"ci.text\"></li>\n        </ul>\n      </li>\n    </ng-container>\n  </ul>\n</nz-dropdown-menu>\n", dependencies: [{ kind: "directive", type: i0.forwardRef(function () { return i7.NgClass; }), selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i0.forwardRef(function () { return i7.NgForOf; }), selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i0.forwardRef(function () { return i7.NgIf; }), selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i0.forwardRef(function () { return i7.NgTemplateOutlet; }), selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i0.forwardRef(function () { return i7.NgSwitch; }), selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: i0.forwardRef(function () { return i7.NgSwitchCase; }), selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "directive", type: i0.forwardRef(function () { return i7.NgSwitchDefault; }), selector: "[ngSwitchDefault]" }, { kind: "directive", type: i0.forwardRef(function () { return i8.NgControlStatus; }), selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i0.forwardRef(function () { return i8.NgModel; }), selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i0.forwardRef(function () { return i9.LetDirective; }), selector: "[let]", inputs: ["let"] }, { kind: "component", type: i0.forwardRef(function () { return i10.NzTableComponent; }), selector: "nz-table", inputs: ["nzTableLayout", "nzShowTotal", "nzItemRender", "nzTitle", "nzFooter", "nzNoResult", "nzPageSizeOptions", "nzVirtualItemSize", "nzVirtualMaxBufferPx", "nzVirtualMinBufferPx", "nzVirtualForTrackBy", "nzLoadingDelay", "nzPageIndex", "nzPageSize", "nzTotal", "nzWidthConfig", "nzData", "nzCustomColumn", "nzPaginationPosition", "nzScroll", "nzPaginationType", "nzFrontPagination", "nzTemplateMode", "nzShowPagination", "nzLoading", "nzOuterBordered", "nzLoadingIndicator", "nzBordered", "nzSize", "nzShowSizeChanger", "nzHideOnSinglePage", "nzShowQuickJumper", "nzSimple"], outputs: ["nzPageSizeChange", "nzPageIndexChange", "nzQueryParams", "nzCurrentPageDataChange", "nzCustomColumnChange"], exportAs: ["nzTable"] }, { kind: "component", type: i0.forwardRef(function () { return i10.NzThAddOnComponent; }), selector: "th[nzColumnKey], th[nzSortFn], th[nzSortOrder], th[nzFilters], th[nzShowSort], th[nzShowFilter], th[nzCustomFilter]", inputs: ["nzColumnKey", "nzFilterMultiple", "nzSortOrder", "nzSortPriority", "nzSortDirections", "nzFilters", "nzSortFn", "nzFilterFn", "nzShowSort", "nzShowFilter", "nzCustomFilter"], outputs: ["nzCheckedChange", "nzSortOrderChange", "nzFilterChange"] }, { kind: "directive", type: i0.forwardRef(function () { return i10.NzTableCellDirective; }), selector: "th:not(.nz-disable-th):not([mat-cell]), td:not(.nz-disable-td):not([mat-cell])" }, { kind: "directive", type: i0.forwardRef(function () { return i10.NzThMeasureDirective; }), selector: "th", inputs: ["nzWidth", "colspan", "colSpan", "rowspan", "rowSpan"] }, { kind: "component", type: i0.forwardRef(function () { return i10.NzTdAddOnComponent; }), selector: "td[nzChecked], td[nzDisabled], td[nzIndeterminate], td[nzIndentSize], td[nzExpand], td[nzShowExpand], td[nzShowCheckbox]", inputs: ["nzChecked", "nzDisabled", "nzIndeterminate", "nzIndentSize", "nzShowExpand", "nzShowCheckbox", "nzExpand"], outputs: ["nzCheckedChange", "nzExpandChange"] }, { kind: "component", type: i0.forwardRef(function () { return i10.NzTheadComponent; }), selector: "thead:not(.ant-table-thead)", outputs: ["nzSortOrderChange"] }, { kind: "component", type: i0.forwardRef(function () { return i10.NzTbodyComponent; }), selector: "tbody" }, { kind: "directive", type: i0.forwardRef(function () { return i10.NzTrDirective; }), selector: "tr:not([mat-row]):not([mat-header-row]):not([nz-table-measure-row]):not([nzExpand]):not([nz-table-fixed-row])" }, { kind: "directive", type: i0.forwardRef(function () { return i10.NzTableVirtualScrollDirective; }), selector: "[nz-virtual-scroll]", exportAs: ["nzVirtualScroll"] }, { kind: "directive", type: i0.forwardRef(function () { return i10.NzCellFixedDirective; }), selector: "td[nzRight],th[nzRight],td[nzLeft],th[nzLeft]", inputs: ["nzRight", "nzLeft", "colspan", "colSpan"] }, { kind: "directive", type: i0.forwardRef(function () { return i10.NzTrExpandDirective; }), selector: "tr[nzExpand]", inputs: ["nzExpand"] }, { kind: "component", type: i0.forwardRef(function () { return i10.NzTableFixedRowComponent; }), selector: "tr[nz-table-fixed-row], tr[nzExpand]" }, { kind: "directive", type: i0.forwardRef(function () { return i11.NzIconDirective; }), selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "component", type: i0.forwardRef(function () { return i12.NzCheckboxComponent; }), selector: "[nz-checkbox]", inputs: ["nzValue", "nzAutoFocus", "nzDisabled", "nzIndeterminate", "nzChecked", "nzId"], outputs: ["nzCheckedChange"], exportAs: ["nzCheckbox"] }, { kind: "directive", type: i0.forwardRef(function () { return i13.NzMenuDirective; }), selector: "[nz-menu]", inputs: ["nzInlineIndent", "nzTheme", "nzMode", "nzInlineCollapsed", "nzSelectable"], outputs: ["nzClick"], exportAs: ["nzMenu"] }, { kind: "directive", type: i0.forwardRef(function () { return i13.NzMenuItemDirective; }), selector: "[nz-menu-item]", inputs: ["nzPaddingLeft", "nzDisabled", "nzSelected", "nzDanger", "nzMatchRouterExact", "nzMatchRouter"], exportAs: ["nzMenuItem"] }, { kind: "component", type: i0.forwardRef(function () { return i13.NzSubMenuComponent; }), selector: "[nz-submenu]", inputs: ["nzMenuClassName", "nzPaddingLeft", "nzTitle", "nzIcon", "nzOpen", "nzDisabled", "nzPlacement"], outputs: ["nzOpenChange"], exportAs: ["nzSubmenu"] }, { kind: "directive", type: i0.forwardRef(function () { return i6.NzDropDownDirective; }), selector: "[nz-dropdown]", inputs: ["nzDropdownMenu", "nzTrigger", "nzMatchWidthElement", "nzBackdrop", "nzClickHide", "nzDisabled", "nzVisible", "nzOverlayClassName", "nzOverlayStyle", "nzPlacement"], outputs: ["nzVisibleChange"], exportAs: ["nzDropdown"] }, { kind: "component", type: i0.forwardRef(function () { return i6.NzDropdownMenuComponent; }), selector: "nz-dropdown-menu", exportAs: ["nzDropdownMenu"] }, { kind: "directive", type: i0.forwardRef(function () { return i14.NzTooltipDirective; }), selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }, { kind: "directive", type: i0.forwardRef(function () { return i15.NzResizableDirective; }), selector: "[nz-resizable]", inputs: ["nzBounds", "nzMaxHeight", "nzMaxWidth", "nzMinHeight", "nzMinWidth", "nzGridColumnCount", "nzMaxColumn", "nzMinColumn", "nzLockAspectRatio", "nzPreview", "nzDisabled"], outputs: ["nzResize", "nzResizeEnd", "nzResizeStart"], exportAs: ["nzResizable"] }, { kind: "component", type: i0.forwardRef(function () { return i15.NzResizeHandleComponent; }), selector: "nz-resize-handle, [nz-resize-handle]", inputs: ["nzDirection"], outputs: ["nzMouseDown"], exportAs: ["nzResizeHandle"] }, { kind: "component", type: i0.forwardRef(function () { return i16.STFilterComponent; }), selector: "st-filter", inputs: ["col", "locale", "f"], outputs: ["n", "handle"] }, { kind: "component", type: i0.forwardRef(function () { return STTdComponent; }), selector: "st-td", inputs: ["c", "cIdx", "data", "i", "index"], outputs: ["n"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: STComponent, decorators: [{
            type: Component,
            args: [{ selector: 'st', exportAs: 'st', providers: [STDataSource, STRowSource, STColumnSource, STExport, DatePipe, YNPipe, DecimalPipe], host: {
                        '[class.st]': `true`,
                        '[class.st__p-left]': `page.placement === 'left'`,
                        '[class.st__p-center]': `page.placement === 'center'`,
                        '[class.st__width-strict]': `widthMode.type === 'strict'`,
                        '[class.st__row-class]': `rowClassName`,
                        '[class.ant-table-rep]': `responsive`,
                        '[class.ant-table-rep__hide-header-footer]': `responsiveHideHeaderFooter`
                    }, preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<ng-template #titleTpl let-i>\n  <span [innerHTML]=\"i._text\"></span>\n  <small *ngIf=\"i.optional\" class=\"st__head-optional\" [innerHTML]=\"i.optional\"></small>\n  <i\n    *ngIf=\"i.optionalHelp\"\n    class=\"st__head-tip\"\n    nz-tooltip\n    [nzTooltipTitle]=\"i.optionalHelp\"\n    nz-icon\n    nzType=\"question-circle\"\n  ></i>\n</ng-template>\n<ng-template #chkAllTpl let-custom>\n  <label\n    nz-checkbox\n    class=\"st__checkall\"\n    [nzDisabled]=\"_allCheckedDisabled\"\n    [(ngModel)]=\"_allChecked\"\n    [nzIndeterminate]=\"_indeterminate\"\n    (ngModelChange)=\"checkAll()\"\n    [class.ant-table-selection-select-all-custom]=\"custom\"\n  ></label>\n</ng-template>\n<nz-table\n  #table\n  [nzData]=\"_data\"\n  [(nzPageIndex)]=\"pi\"\n  (nzPageIndexChange)=\"_change('pi')\"\n  [(nzPageSize)]=\"ps\"\n  (nzPageSizeChange)=\"_change('ps')\"\n  [nzTotal]=\"total\"\n  [nzShowPagination]=\"_isPagination\"\n  [nzFrontPagination]=\"false\"\n  [nzBordered]=\"bordered\"\n  [nzSize]=\"size\"\n  [nzLoading]=\"noColumns || _loading\"\n  [nzLoadingDelay]=\"loadingDelay\"\n  [nzLoadingIndicator]=\"loadingIndicator\"\n  [nzTitle]=\"header!\"\n  [nzFooter]=\"footer!\"\n  [nzScroll]=\"scroll\"\n  [nzVirtualItemSize]=\"virtualItemSize\"\n  [nzVirtualMaxBufferPx]=\"virtualMaxBufferPx\"\n  [nzVirtualMinBufferPx]=\"virtualMinBufferPx\"\n  [nzVirtualForTrackBy]=\"virtualForTrackBy\"\n  [nzNoResult]=\"noResult!\"\n  [nzPageSizeOptions]=\"page.pageSizes!\"\n  [nzShowQuickJumper]=\"page.showQuickJumper\"\n  [nzShowSizeChanger]=\"page.showSize\"\n  [nzPaginationPosition]=\"page.position!\"\n  [nzPaginationType]=\"page.type!\"\n  [nzItemRender]=\"page.itemRender!\"\n  [nzSimple]=\"page.simple\"\n  [nzShowTotal]=\"totalTpl\"\n  [nzWidthConfig]=\"_widthConfig\"\n  (contextmenu)=\"onContextmenu($event)\"\n  [class.st__no-column]=\"noColumns\"\n>\n  <thead *ngIf=\"showHeader\">\n    <tr *ngFor=\"let row of _headers; let rowFirst = first\">\n      <th *ngIf=\"rowFirst && expand\" nzWidth=\"50px\" [rowSpan]=\"_headers.length\"></th>\n      <ng-container *ngFor=\"let h of row; let index = index; let last = last\">\n        <th\n          *let=\"h.column as _c\"\n          [colSpan]=\"h.colSpan\"\n          [rowSpan]=\"h.rowSpan\"\n          [nzWidth]=\"$any(_c).width\"\n          [nzLeft]=\"_c._left!\"\n          [nzRight]=\"_c._right!\"\n          [ngClass]=\"_c._className\"\n          [attr.data-col]=\"_c.indexKey\"\n          [attr.data-col-index]=\"index\"\n          [nzShowSort]=\"_c._sort.enabled\"\n          [nzSortOrder]=\"$any(_c)._sort.default\"\n          (nzSortOrderChange)=\"sort(_c, index, $event)\"\n          [nzCustomFilter]=\"!!_c.filter\"\n          [class.st__has-filter]=\"_c.filter\"\n          nz-resizable\n          [nzDisabled]=\"last || $any(_c).resizable.disabled\"\n          [nzMaxWidth]=\"$any(_c).resizable.maxWidth\"\n          [nzMinWidth]=\"$any(_c).resizable.minWidth\"\n          [nzBounds]=\"$any(_c).resizable.bounds\"\n          [nzPreview]=\"$any(_c).resizable.preview\"\n          (nzResizeEnd)=\"colResize($event, _c)\"\n        >\n          <nz-resize-handle *ngIf=\"$any(!last && !$any(_c).resizable.disabled)\" nzDirection=\"right\">\n            <i></i>\n          </nz-resize-handle>\n          <ng-template\n            #renderTitle\n            [ngTemplateOutlet]=\"_c.__renderTitle!\"\n            [ngTemplateOutletContext]=\"{ $implicit: h.column, index: index }\"\n          />\n          <ng-container *ngIf=\"!_c.__renderTitle; else renderTitle\">\n            <ng-container [ngSwitch]=\"_c.type\">\n              <ng-container *ngSwitchCase=\"'checkbox'\">\n                <ng-container *ngIf=\"_c.selections!.length === 0\">\n                  <ng-template [ngTemplateOutlet]=\"chkAllTpl\" [ngTemplateOutletContext]=\"{ $implicit: false }\" />\n                </ng-container>\n                <div *ngIf=\"_c.selections!.length > 0\" class=\"ant-table-selection\">\n                  <ng-template [ngTemplateOutlet]=\"chkAllTpl\" [ngTemplateOutletContext]=\"{ $implicit: true }\" />\n                  <div *ngIf=\"_c.selections!.length\" class=\"ant-table-selection-extra\">\n                    <div\n                      nz-dropdown\n                      nzPlacement=\"bottomLeft\"\n                      [nzDropdownMenu]=\"selectionMenu\"\n                      class=\"ant-table-selection-down st__checkall-selection\"\n                    >\n                      <i nz-icon nzType=\"down\"></i>\n                    </div>\n                  </div>\n                  <nz-dropdown-menu #selectionMenu=\"nzDropdownMenu\">\n                    <ul nz-menu class=\"ant-table-selection-menu\">\n                      <li\n                        nz-menu-item\n                        *ngFor=\"let rw of _c.selections\"\n                        (click)=\"_rowSelection(rw)\"\n                        [innerHTML]=\"rw.text\"\n                      ></li>\n                    </ul>\n                  </nz-dropdown-menu>\n                </div>\n              </ng-container>\n              <ng-container *ngSwitchDefault>\n                <ng-template [ngTemplateOutlet]=\"titleTpl\" [ngTemplateOutletContext]=\"{ $implicit: _c.title }\" />\n              </ng-container>\n            </ng-container>\n          </ng-container>\n          <ng-container *ngIf=\"_c.filter\">\n            <st-filter\n              nz-th-extra\n              [col]=\"h.column\"\n              [f]=\"_c.filter\"\n              [locale]=\"locale\"\n              (n)=\"handleFilterNotify($event)\"\n              (handle)=\"_handleFilter(_c, $event)\"\n            />\n          </ng-container>\n        </th>\n      </ng-container>\n    </tr>\n  </thead>\n  <tbody class=\"st__body\">\n    <ng-container *ngIf=\"!_loading\">\n      <ng-template [ngTemplateOutlet]=\"bodyHeader!\" [ngTemplateOutletContext]=\"{ $implicit: _statistical }\" />\n    </ng-container>\n    <ng-template #bodyTpl let-i let-index=\"index\">\n      <tr\n        [attr.data-index]=\"index\"\n        (click)=\"_rowClick($event, i, index, false)\"\n        (dblclick)=\"_rowClick($event, i, index, true)\"\n        [ngClass]=\"i._rowClassName\"\n      >\n        <td\n          *ngIf=\"expand\"\n          [nzShowExpand]=\"expand && i.showExpand !== false\"\n          [nzExpand]=\"i.expand\"\n          (nzExpandChange)=\"_expandChange(i, $event)\"\n          (click)=\"_stopPropagation($event)\"\n          nzWidth=\"50px\"\n        ></td>\n        <ng-container *ngFor=\"let c of _columns; let cIdx = index\">\n          <td\n            *ngIf=\"i._values[cIdx].props?.colSpan > 0 && i._values[cIdx].props?.rowSpan > 0\"\n            [nzLeft]=\"!!c._left\"\n            [nzRight]=\"!!c._right\"\n            [attr.data-col-index]=\"cIdx\"\n            [ngClass]=\"c._className\"\n            [attr.colspan]=\"i._values[cIdx].props?.colSpan === 1 ? null : i._values[cIdx].props?.colSpan\"\n            [attr.rowspan]=\"i._values[cIdx].props?.rowSpan === 1 ? null : i._values[cIdx].props?.rowSpan\"\n          >\n            <span *ngIf=\"responsive\" class=\"ant-table-rep__title\">\n              <ng-template [ngTemplateOutlet]=\"titleTpl\" [ngTemplateOutletContext]=\"{ $implicit: c.title }\" />\n            </span>\n            <st-td [data]=\"_data\" [i]=\"i\" [index]=\"index\" [c]=\"c\" [cIdx]=\"cIdx\" (n)=\"_handleTd($event)\" />\n          </td>\n        </ng-container>\n      </tr>\n      <tr [nzExpand]=\"i.expand\">\n        <ng-template [ngTemplateOutlet]=\"expand\" [ngTemplateOutletContext]=\"{ $implicit: i, index: index }\" />\n      </tr>\n    </ng-template>\n    <ng-container *ngIf=\"!virtualScroll\">\n      <ng-container *ngFor=\"let i of _data; let index = index\">\n        <ng-template [ngTemplateOutlet]=\"bodyTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, index: index }\" />\n      </ng-container>\n    </ng-container>\n    <ng-container *ngIf=\"virtualScroll\">\n      <ng-template nz-virtual-scroll let-i let-index=\"index\">\n        <ng-template [ngTemplateOutlet]=\"bodyTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, index: index }\" />\n      </ng-template>\n    </ng-container>\n    <ng-container *ngIf=\"!_loading\">\n      <ng-template [ngTemplateOutlet]=\"body!\" [ngTemplateOutletContext]=\"{ $implicit: _statistical }\" />\n    </ng-container>\n  </tbody>\n  <ng-template #totalTpl let-range=\"range\" let-total>{{ renderTotal(total, range) }}</ng-template>\n</nz-table>\n<nz-dropdown-menu #contextmenuTpl=\"nzDropdownMenu\">\n  <ul nz-menu class=\"st__contextmenu\">\n    <ng-container *ngFor=\"let i of contextmenuList\">\n      <li nz-menu-item *ngIf=\"i.children!.length === 0\" (click)=\"i.fn!(i)\" [innerHTML]=\"i.text\"></li>\n      <li nz-submenu *ngIf=\"i.children!.length > 0\" [nzTitle]=\"i.text\">\n        <ul>\n          <li nz-menu-item *ngFor=\"let ci of i.children\" (click)=\"ci.fn!(ci)\" [innerHTML]=\"ci.text\"></li>\n        </ul>\n      </li>\n    </ng-container>\n  </ul>\n</nz-dropdown-menu>\n" }]
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
    get routerState() {
        const { pi, ps, total } = this.stComp;
        return { pi, ps, total };
    }
    constructor(stComp, router, modalHelper, drawerHelper) {
        this.stComp = stComp;
        this.router = router;
        this.modalHelper = modalHelper;
        this.drawerHelper = drawerHelper;
        this.n = new EventEmitter();
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
        ev?.stopPropagation();
        const cog = this.stComp.cog;
        let record = this.i;
        if (btn.type === 'modal' || btn.type === 'static') {
            if (cog.modal.pureRecoard === true) {
                record = this.stComp.pureItem(record);
            }
            const modal = btn.modal;
            const obj = { [modal.paramsName]: record };
            this.modalHelper[btn.type === 'modal' ? 'create' : 'createStatic'](modal.component, { ...obj, ...(modal.params && modal.params(record)) }, deepMergeKey({}, true, cog.modal, modal))
                .pipe(filter(w => typeof w !== 'undefined'))
                .subscribe((res) => this.btnCallback(record, btn, res));
            return;
        }
        else if (btn.type === 'drawer') {
            if (cog.drawer.pureRecoard === true) {
                record = this.stComp.pureItem(record);
            }
            const drawer = btn.drawer;
            const obj = { [drawer.paramsName]: record };
            this.drawerHelper
                .create(drawer.title, drawer.component, { ...obj, ...(drawer.params && drawer.params(record)) }, deepMergeKey({}, true, cog.drawer, drawer))
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: STTdComponent, deps: [{ token: STComponent, host: true }, { token: i17.Router }, { token: i4.ModalHelper }, { token: i4.DrawerHelper }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.8", type: STTdComponent, selector: "st-td", inputs: { c: "c", cIdx: "cIdx", data: "data", i: "i", index: "index" }, outputs: { n: "n" }, ngImport: i0, template: "<ng-template #btnTpl let-i let-child=\"child\">\n  <ng-container *ngIf=\"!i.tooltip\">\n    <ng-template [ngTemplateOutlet]=\"btnItemTpl\" [ngTemplateOutletContext]=\"{ $implicit: i }\"></ng-template>\n  </ng-container>\n  <span *ngIf=\"i.tooltip\" nz-tooltip [nzTooltipTitle]=\"i.tooltip\" [class.d-block]=\"child\" [class.width-100]=\"child\">\n    <ng-template [ngTemplateOutlet]=\"btnItemTpl\" [ngTemplateOutletContext]=\"{ $implicit: i }\"></ng-template>\n  </span>\n</ng-template>\n<ng-template #btnItemTpl let-i>\n  <a\n    *ngIf=\"i.pop\"\n    nz-popconfirm\n    [nzPopconfirmTitle]=\"i.pop.title\"\n    [nzIcon]=\"i.pop.icon\"\n    [nzCondition]=\"i.pop.condition(i)\"\n    [nzCancelText]=\"i.pop.cancelText\"\n    [nzOkText]=\"i.pop.okText\"\n    [nzOkType]=\"i.pop.okType\"\n    (nzOnConfirm)=\"_btn(i)\"\n    class=\"st__btn-text\"\n    [ngClass]=\"i._className\"\n    (click)=\"_stopPropagation($event)\"\n  >\n    <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i }\" />\n  </a>\n  <a *ngIf=\"!i.pop\" (click)=\"_btn(i, $event)\" class=\"st__btn-text\" [ngClass]=\"i._className\">\n    <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i }\" />\n  </a>\n</ng-template>\n<ng-template #btnTextTpl let-i>\n  <ng-container *ngIf=\"i._icon\">\n    <i\n      *ngIf=\"!i._icon.iconfont\"\n      nz-icon\n      [nzType]=\"i._icon.type\"\n      [nzTheme]=\"i._icon.theme\"\n      [nzSpin]=\"i._icon.spin\"\n      [nzTwotoneColor]=\"i._icon.twoToneColor\"\n    ></i>\n    <i *ngIf=\"i._icon.iconfont\" nz-icon [nzIconfont]=\"i._icon.iconfont\"></i>\n  </ng-container>\n  <span [innerHTML]=\"i._text\" [ngClass]=\"{ 'pl-xs': i._icon }\"></span>\n</ng-template>\n<ng-template\n  #render\n  [ngTemplateOutlet]=\"c.__render!\"\n  [ngTemplateOutletContext]=\"{ $implicit: i, index: index, column: c }\"\n/>\n<ng-container *ngIf=\"!c.__render; else render\">\n  <ng-container [ngSwitch]=\"c.type\">\n    <label\n      *ngSwitchCase=\"'checkbox'\"\n      nz-checkbox\n      [nzDisabled]=\"i.disabled\"\n      [ngModel]=\"i.checked\"\n      (ngModelChange)=\"_checkbox($event)\"\n    ></label>\n    <label\n      *ngSwitchCase=\"'radio'\"\n      nz-radio\n      [nzDisabled]=\"i.disabled\"\n      [ngModel]=\"i.checked\"\n      (ngModelChange)=\"_radio()\"\n    ></label>\n    <a\n      *ngSwitchCase=\"'link'\"\n      (click)=\"_link($event)\"\n      [innerHTML]=\"i._values[cIdx]._text\"\n      [attr.title]=\"i._values[cIdx].text\"\n    ></a>\n    <ng-container *ngIf=\"i._values[cIdx].text\">\n      <nz-tag *ngSwitchCase=\"'tag'\" [nzColor]=\"i._values[cIdx].color\">\n        <span [innerHTML]=\"i._values[cIdx]._text\"></span>\n      </nz-tag>\n      <nz-badge *ngSwitchCase=\"'badge'\" [nzStatus]=\"i._values[cIdx].color\" [nzText]=\"i._values[cIdx].text\" />\n    </ng-container>\n    <ng-template *ngSwitchCase=\"'widget'\" st-widget-host [record]=\"i\" [column]=\"c\" />\n    <ng-container *ngSwitchDefault>\n      <span\n        *ngIf=\"c.safeType !== 'text'\"\n        [innerHTML]=\"i._values[cIdx]._text\"\n        [attr.title]=\"c._isTruncate ? i._values[cIdx].text : null\"\n      ></span>\n      <span\n        *ngIf=\"c.safeType === 'text'\"\n        [innerText]=\"i._values[cIdx]._text\"\n        [attr.title]=\"c._isTruncate ? i._values[cIdx].text : null\"\n      ></span>\n    </ng-container>\n  </ng-container>\n  <ng-container *ngFor=\"let btn of i._values[cIdx].buttons; let last = last\">\n    <a *ngIf=\"btn.children!.length > 0\" nz-dropdown [nzDropdownMenu]=\"btnMenu\" nzOverlayClassName=\"st__btn-sub\">\n      <span [innerHTML]=\"btn._text\"></span>\n      <i nz-icon nzType=\"down\"></i>\n    </a>\n    <nz-dropdown-menu #btnMenu=\"nzDropdownMenu\">\n      <ul nz-menu>\n        <ng-container *ngFor=\"let subBtn of btn.children!\">\n          <li *ngIf=\"subBtn.type !== 'divider'\" nz-menu-item [class.st__btn-disabled]=\"subBtn._disabled\">\n            <ng-template [ngTemplateOutlet]=\"btnTpl\" [ngTemplateOutletContext]=\"{ $implicit: subBtn, child: true }\" />\n          </li>\n          <li *ngIf=\"subBtn.type === 'divider'\" nz-menu-divider></li>\n        </ng-container>\n      </ul>\n    </nz-dropdown-menu>\n    <span *ngIf=\"btn.children!.length === 0\" [class.st__btn-disabled]=\"btn._disabled\">\n      <ng-template [ngTemplateOutlet]=\"btnTpl\" [ngTemplateOutletContext]=\"{ $implicit: btn, child: false }\" />\n    </span>\n    <nz-divider *ngIf=\"!last\" nzType=\"vertical\" />\n  </ng-container>\n</ng-container>\n", dependencies: [{ kind: "directive", type: i7.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i7.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i7.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i7.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i7.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: i7.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "directive", type: i7.NgSwitchDefault, selector: "[ngSwitchDefault]" }, { kind: "directive", type: i8.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i8.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i18.NzPopconfirmDirective, selector: "[nz-popconfirm]", inputs: ["nzPopconfirmArrowPointAtCenter", "nzPopconfirmTitle", "nz-popconfirm", "nzPopconfirmTrigger", "nzPopconfirmPlacement", "nzPopconfirmOrigin", "nzPopconfirmMouseEnterDelay", "nzPopconfirmMouseLeaveDelay", "nzPopconfirmOverlayClassName", "nzPopconfirmOverlayStyle", "nzPopconfirmVisible", "nzOkText", "nzOkType", "nzOkDanger", "nzCancelText", "nzBeforeConfirm", "nzIcon", "nzCondition", "nzPopconfirmShowArrow", "nzPopconfirmBackdrop", "nzAutofocus"], outputs: ["nzPopconfirmVisibleChange", "nzOnCancel", "nzOnConfirm"], exportAs: ["nzPopconfirm"] }, { kind: "directive", type: i11.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "component", type: i19.NzBadgeComponent, selector: "nz-badge", inputs: ["nzShowZero", "nzShowDot", "nzStandalone", "nzDot", "nzOverflowCount", "nzColor", "nzStyle", "nzText", "nzTitle", "nzStatus", "nzCount", "nzOffset", "nzSize"], exportAs: ["nzBadge"] }, { kind: "component", type: i12.NzCheckboxComponent, selector: "[nz-checkbox]", inputs: ["nzValue", "nzAutoFocus", "nzDisabled", "nzIndeterminate", "nzChecked", "nzId"], outputs: ["nzCheckedChange"], exportAs: ["nzCheckbox"] }, { kind: "component", type: i20.NzDividerComponent, selector: "nz-divider", inputs: ["nzText", "nzType", "nzOrientation", "nzDashed", "nzPlain"], exportAs: ["nzDivider"] }, { kind: "directive", type: i13.NzMenuDirective, selector: "[nz-menu]", inputs: ["nzInlineIndent", "nzTheme", "nzMode", "nzInlineCollapsed", "nzSelectable"], outputs: ["nzClick"], exportAs: ["nzMenu"] }, { kind: "directive", type: i13.NzMenuItemDirective, selector: "[nz-menu-item]", inputs: ["nzPaddingLeft", "nzDisabled", "nzSelected", "nzDanger", "nzMatchRouterExact", "nzMatchRouter"], exportAs: ["nzMenuItem"] }, { kind: "directive", type: i13.NzMenuDividerDirective, selector: "[nz-menu-divider]", exportAs: ["nzMenuDivider"] }, { kind: "directive", type: i6.NzDropDownDirective, selector: "[nz-dropdown]", inputs: ["nzDropdownMenu", "nzTrigger", "nzMatchWidthElement", "nzBackdrop", "nzClickHide", "nzDisabled", "nzVisible", "nzOverlayClassName", "nzOverlayStyle", "nzPlacement"], outputs: ["nzVisibleChange"], exportAs: ["nzDropdown"] }, { kind: "directive", type: i6.NzDropDownADirective, selector: "a[nz-dropdown]" }, { kind: "component", type: i6.NzDropdownMenuComponent, selector: "nz-dropdown-menu", exportAs: ["nzDropdownMenu"] }, { kind: "component", type: i21.NzRadioComponent, selector: "[nz-radio],[nz-radio-button]", inputs: ["nzValue", "nzDisabled", "nzAutoFocus"], exportAs: ["nzRadio"] }, { kind: "component", type: i22.NzTagComponent, selector: "nz-tag", inputs: ["nzMode", "nzColor", "nzChecked"], outputs: ["nzOnClose", "nzCheckedChange"], exportAs: ["nzTag"] }, { kind: "directive", type: i14.NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }, { kind: "directive", type: i23.STWidgetHostDirective, selector: "[st-widget-host]", inputs: ["record", "column"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.8", ngImport: i0, type: STTdComponent, decorators: [{
            type: Component,
            args: [{ selector: 'st-td', preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<ng-template #btnTpl let-i let-child=\"child\">\n  <ng-container *ngIf=\"!i.tooltip\">\n    <ng-template [ngTemplateOutlet]=\"btnItemTpl\" [ngTemplateOutletContext]=\"{ $implicit: i }\"></ng-template>\n  </ng-container>\n  <span *ngIf=\"i.tooltip\" nz-tooltip [nzTooltipTitle]=\"i.tooltip\" [class.d-block]=\"child\" [class.width-100]=\"child\">\n    <ng-template [ngTemplateOutlet]=\"btnItemTpl\" [ngTemplateOutletContext]=\"{ $implicit: i }\"></ng-template>\n  </span>\n</ng-template>\n<ng-template #btnItemTpl let-i>\n  <a\n    *ngIf=\"i.pop\"\n    nz-popconfirm\n    [nzPopconfirmTitle]=\"i.pop.title\"\n    [nzIcon]=\"i.pop.icon\"\n    [nzCondition]=\"i.pop.condition(i)\"\n    [nzCancelText]=\"i.pop.cancelText\"\n    [nzOkText]=\"i.pop.okText\"\n    [nzOkType]=\"i.pop.okType\"\n    (nzOnConfirm)=\"_btn(i)\"\n    class=\"st__btn-text\"\n    [ngClass]=\"i._className\"\n    (click)=\"_stopPropagation($event)\"\n  >\n    <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i }\" />\n  </a>\n  <a *ngIf=\"!i.pop\" (click)=\"_btn(i, $event)\" class=\"st__btn-text\" [ngClass]=\"i._className\">\n    <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i }\" />\n  </a>\n</ng-template>\n<ng-template #btnTextTpl let-i>\n  <ng-container *ngIf=\"i._icon\">\n    <i\n      *ngIf=\"!i._icon.iconfont\"\n      nz-icon\n      [nzType]=\"i._icon.type\"\n      [nzTheme]=\"i._icon.theme\"\n      [nzSpin]=\"i._icon.spin\"\n      [nzTwotoneColor]=\"i._icon.twoToneColor\"\n    ></i>\n    <i *ngIf=\"i._icon.iconfont\" nz-icon [nzIconfont]=\"i._icon.iconfont\"></i>\n  </ng-container>\n  <span [innerHTML]=\"i._text\" [ngClass]=\"{ 'pl-xs': i._icon }\"></span>\n</ng-template>\n<ng-template\n  #render\n  [ngTemplateOutlet]=\"c.__render!\"\n  [ngTemplateOutletContext]=\"{ $implicit: i, index: index, column: c }\"\n/>\n<ng-container *ngIf=\"!c.__render; else render\">\n  <ng-container [ngSwitch]=\"c.type\">\n    <label\n      *ngSwitchCase=\"'checkbox'\"\n      nz-checkbox\n      [nzDisabled]=\"i.disabled\"\n      [ngModel]=\"i.checked\"\n      (ngModelChange)=\"_checkbox($event)\"\n    ></label>\n    <label\n      *ngSwitchCase=\"'radio'\"\n      nz-radio\n      [nzDisabled]=\"i.disabled\"\n      [ngModel]=\"i.checked\"\n      (ngModelChange)=\"_radio()\"\n    ></label>\n    <a\n      *ngSwitchCase=\"'link'\"\n      (click)=\"_link($event)\"\n      [innerHTML]=\"i._values[cIdx]._text\"\n      [attr.title]=\"i._values[cIdx].text\"\n    ></a>\n    <ng-container *ngIf=\"i._values[cIdx].text\">\n      <nz-tag *ngSwitchCase=\"'tag'\" [nzColor]=\"i._values[cIdx].color\">\n        <span [innerHTML]=\"i._values[cIdx]._text\"></span>\n      </nz-tag>\n      <nz-badge *ngSwitchCase=\"'badge'\" [nzStatus]=\"i._values[cIdx].color\" [nzText]=\"i._values[cIdx].text\" />\n    </ng-container>\n    <ng-template *ngSwitchCase=\"'widget'\" st-widget-host [record]=\"i\" [column]=\"c\" />\n    <ng-container *ngSwitchDefault>\n      <span\n        *ngIf=\"c.safeType !== 'text'\"\n        [innerHTML]=\"i._values[cIdx]._text\"\n        [attr.title]=\"c._isTruncate ? i._values[cIdx].text : null\"\n      ></span>\n      <span\n        *ngIf=\"c.safeType === 'text'\"\n        [innerText]=\"i._values[cIdx]._text\"\n        [attr.title]=\"c._isTruncate ? i._values[cIdx].text : null\"\n      ></span>\n    </ng-container>\n  </ng-container>\n  <ng-container *ngFor=\"let btn of i._values[cIdx].buttons; let last = last\">\n    <a *ngIf=\"btn.children!.length > 0\" nz-dropdown [nzDropdownMenu]=\"btnMenu\" nzOverlayClassName=\"st__btn-sub\">\n      <span [innerHTML]=\"btn._text\"></span>\n      <i nz-icon nzType=\"down\"></i>\n    </a>\n    <nz-dropdown-menu #btnMenu=\"nzDropdownMenu\">\n      <ul nz-menu>\n        <ng-container *ngFor=\"let subBtn of btn.children!\">\n          <li *ngIf=\"subBtn.type !== 'divider'\" nz-menu-item [class.st__btn-disabled]=\"subBtn._disabled\">\n            <ng-template [ngTemplateOutlet]=\"btnTpl\" [ngTemplateOutletContext]=\"{ $implicit: subBtn, child: true }\" />\n          </li>\n          <li *ngIf=\"subBtn.type === 'divider'\" nz-menu-divider></li>\n        </ng-container>\n      </ul>\n    </nz-dropdown-menu>\n    <span *ngIf=\"btn.children!.length === 0\" [class.st__btn-disabled]=\"btn._disabled\">\n      <ng-template [ngTemplateOutlet]=\"btnTpl\" [ngTemplateOutletContext]=\"{ $implicit: btn, child: false }\" />\n    </span>\n    <nz-divider *ngIf=\"!last\" nzType=\"vertical\" />\n  </ng-container>\n</ng-container>\n" }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3N0L3N0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9zdC9zdC5jb21wb25lbnQuaHRtbCIsIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9zdC9zdC10ZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN4RCxPQUFPLEVBRUwsdUJBQXVCLEVBRXZCLFNBQVMsRUFDVCxVQUFVLEVBRVYsWUFBWSxFQUNaLElBQUksRUFDSixNQUFNLEVBQ04sTUFBTSxFQUNOLEtBQUssRUFFTCxRQUFRLEVBQ1IsTUFBTSxFQUtOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFaEUsT0FBTyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQWMsRUFBRSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFekcsT0FBTyxFQUVMLGdCQUFnQixFQUNoQixRQUFRLEVBS1IsTUFBTSxFQUNQLE1BQU0sY0FBYyxDQUFDO0FBRXRCLE9BQU8sRUFBZ0IsWUFBWSxFQUFFLFdBQVcsRUFBZSxTQUFTLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN4RyxPQUFPLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBTTNELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsWUFBWSxFQUEyQyxNQUFNLGtCQUFrQixDQUFDO0FBQ3pGLE9BQU8sRUFBRSxRQUFRLEVB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WUFBRSxPQUFPO1FBQ3ZCLElBQUksT0FBTyxHQUFHLENBQUMsS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUNqQyxRQUFRLEdBQUcsQ0FBQyxLQUFLLEVBQUU7Z0JBQ2pCLEtBQUssTUFBTTtvQkFDVCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNuQixNQUFNO2dCQUNSLEtBQUssUUFBUTtvQkFDWCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO29CQUNyQixNQUFNO2FBQ1Q7U0FDRjthQUFNO1lBQ0wsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzlDO0lBQ0gsQ0FBQzs4R0EzR1UsYUFBYTtrR0FBYixhQUFhLDBJRWg1QjFCLCs3SUErR0E7OzJGRml5QmEsYUFBYTtrQkFQekIsU0FBUzsrQkFDRSxPQUFPLHVCQUVJLEtBQUssbUJBQ1QsdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSTs7MEJBZ0JsQyxJQUFJO3VIQWJFLENBQUM7c0JBQVQsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLENBQUM7c0JBQVQsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ2EsQ0FBQztzQkFBbkIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zY3JvbGxpbmcnO1xuaW1wb3J0IHsgRGVjaW1hbFBpcGUsIERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBEZXN0cm95UmVmLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3QsXG4gIGluamVjdCxcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2UsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBUcmFja0J5RnVuY3Rpb24sXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB0YWtlVW50aWxEZXN0cm95ZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlL3J4anMtaW50ZXJvcCc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgZnJvbSwgaXNPYnNlcnZhYmxlLCBPYnNlcnZhYmxlLCBvZiwgZmlsdGVyLCBjYXRjaEVycm9yLCBtYXAsIGZpbmFsaXplLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7XG4gIEFsYWluSTE4TlNlcnZpY2UsXG4gIEFMQUlOX0kxOE5fVE9LRU4sXG4gIERhdGVQaXBlLFxuICBEZWxvbkxvY2FsZVNlcnZpY2UsXG4gIERyYXdlckhlbHBlcixcbiAgTG9jYWxlRGF0YSxcbiAgTW9kYWxIZWxwZXIsXG4gIFlOUGlwZVxufSBmcm9tICdAZGVsb24vdGhlbWUnO1xuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlLCBBbGFpblNUQ29uZmlnIH0gZnJvbSAnQGRlbG9uL3V0aWwvY29uZmlnJztcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciwgTnVtYmVySW5wdXQsIHRvQm9vbGVhbiB9IGZyb20gJ0BkZWxvbi91dGlsL2RlY29yYXRvcic7XG5pbXBvcnQgeyBkZWVwQ29weSwgZGVlcE1lcmdlS2V5IH0gZnJvbSAnQGRlbG9uL3V0aWwvb3RoZXInO1xuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgTnpDb250ZXh0TWVudVNlcnZpY2UsIE56RHJvcGRvd25NZW51Q29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC9kcm9wZG93bic7XG5pbXBvcnQgeyBOelJlc2l6ZUV2ZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC9yZXNpemFibGUnO1xuaW1wb3J0IHsgTnpUYWJsZUNvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvdGFibGUnO1xuXG5pbXBvcnQgeyBTVENvbHVtblNvdXJjZSB9IGZyb20gJy4vc3QtY29sdW1uLXNvdXJjZSc7XG5pbXBvcnQgeyBTVERhdGFTb3VyY2UsIFNURGF0YVNvdXJjZU9wdGlvbnMsIFNURGF0YVNvdXJjZVJlc3VsdCB9IGZyb20gJy4vc3QtZGF0YS1zb3VyY2UnO1xuaW1wb3J0IHsgU1RFeHBvcnQgfSBmcm9tICcuL3N0LWV4cG9ydCc7XG5pbXBvcnQgeyBTVFJvd1NvdXJjZSB9IGZyb20gJy4vc3Qtcm93LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBTVF9ERUZBVUxUX0NPTkZJRyB9IGZyb20gJy4vc3QuY29uZmlnJztcbmltcG9ydCB7XG4gIFNUQ2hhbmdlLFxuICBTVENoYW5nZVR5cGUsXG4gIFNUQ2xpY2tSb3dDbGFzc05hbWUsXG4gIFNUQ2xpY2tSb3dDbGFzc05hbWVUeXBlLFxuICBTVENvbHVtbixcbiAgU1RDb2x1bW5CdXR0b24sXG4gIFNUQ29sdW1uU2FmZVR5cGUsXG4gIFNUQ29sdW1uU2VsZWN0aW9uLFxuICBTVENvbnRleHRtZW51Rm4sXG4gIFNUQ29udGV4dG1lbnVJdGVtLFxuICBTVEN1c3RvbVJlcXVlc3RPcHRpb25zLFxuICBTVERhdGEsXG4gIFNURXJyb3IsXG4gIFNURXhwb3J0T3B0aW9ucyxcbiAgU1RMb2FkT3B0aW9ucyxcbiAgU1RNdWx0aVNvcnQsXG4gIFNUUGFnZSxcbiAgU1RSZXEsXG4gIFNUUmVzLFxuICBTVFJlc2V0Q29sdW1uc09wdGlvbixcbiAgU1RSZXNpemFibGUsXG4gIFNUUm93Q2xhc3NOYW1lLFxuICBTVFNpbmdsZVNvcnQsXG4gIFNUU3RhdGlzdGljYWxSZXN1bHRzLFxuICBTVFdpZHRoTW9kZVxufSBmcm9tICcuL3N0LmludGVyZmFjZXMnO1xuaW1wb3J0IHsgX1NUQ29sdW1uLCBfU1REYXRhVmFsdWUsIF9TVEhlYWRlciwgX1NUVGROb3RpZnksIF9TVFRkTm90aWZ5VHlwZSB9IGZyb20gJy4vc3QudHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdCcsXG4gIGV4cG9ydEFzOiAnc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3QuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFtTVERhdGFTb3VyY2UsIFNUUm93U291cmNlLCBTVENvbHVtblNvdXJjZSwgU1RFeHBvcnQsIERhdGVQaXBlLCBZTlBpcGUsIERlY2ltYWxQaXBlXSxcbiAgaG9zdDoge1xuICAgICdbY2xhc3Muc3RdJzogYHRydWVgLFxuICAgICdbY2xhc3Muc3RfX3AtbGVmdF0nOiBgcGFnZS5wbGFjZW1lbnQgPT09ICdsZWZ0J2AsXG4gICAgJ1tjbGFzcy5zdF9fcC1jZW50ZXJdJzogYHBhZ2UucGxhY2VtZW50ID09PSAnY2VudGVyJ2AsXG4gICAgJ1tjbGFzcy5zdF9fd2lkdGgtc3RyaWN0XSc6IGB3aWR0aE1vZGUudHlwZSA9PT0gJ3N0cmljdCdgLFxuICAgICdbY2xhc3Muc3RfX3Jvdy1jbGFzc10nOiBgcm93Q2xhc3NOYW1lYCxcbiAgICAnW2NsYXNzLmFudC10YWJsZS1yZXBdJzogYHJlc3BvbnNpdmVgLFxuICAgICdbY2xhc3MuYW50LXRhYmxlLXJlcF9faGlkZS1oZWFkZXItZm9vdGVyXSc6IGByZXNwb25zaXZlSGlkZUhlYWRlckZvb3RlcmBcbiAgfSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFNUQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3BzOiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3BpOiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3RvdGFsOiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2xvYWRpbmdEZWxheTogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9ib3JkZXJlZDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZXhwYW5kUm93QnlDbGljazogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZXhwYW5kQWNjb3JkaW9uOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9yZXNwb25zaXZlOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9yZXNwb25zaXZlSGlkZUhlYWRlckZvb3RlcjogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfdmlydHVhbFNjcm9sbDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfdmlydHVhbEl0ZW1TaXplOiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3ZpcnR1YWxNYXhCdWZmZXJQeDogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV92aXJ0dWFsTWluQnVmZmVyUHg6IE51bWJlcklucHV0O1xuXG4gIHByaXZhdGUgZGVzdHJveSQgPSBpbmplY3QoRGVzdHJveVJlZik7XG4gIHByaXZhdGUgdG90YWxUcGwgPSBgYDtcbiAgY29nITogQWxhaW5TVENvbmZpZztcbiAgcHJpdmF0ZSBfcmVxITogU1RSZXE7XG4gIHByaXZhdGUgX3JlcyE6IFNUUmVzO1xuICBwcml2YXRlIF9wYWdlITogU1RQYWdlO1xuICBwcml2YXRlIF93aWR0aE1vZGUhOiBTVFdpZHRoTW9kZTtcbiAgcHJpdmF0ZSBjdXN0b21XaWR0aENvbmZpZzogYm9vbGVhbiA9IGZhbHNlO1xuICBfd2lkdGhDb25maWc6IHN0cmluZ1tdID0gW107XG4gIGxvY2FsZTogTG9jYWxlRGF0YSA9IHt9O1xuICBfbG9hZGluZyA9IGZhbHNlO1xuICBfZGF0YTogU1REYXRhW10gPSBbXTtcbiAgX3N0YXRpc3RpY2FsOiBTVFN0YXRpc3RpY2FsUmVzdWx0cyA9IHt9O1xuICBfaXNQYWdpbmF0aW9uID0gdHJ1ZTtcbiAgX2FsbENoZWNrZWQgPSBmYWxzZTtcbiAgX2FsbENoZWNrZWREaXNhYmxlZCA9IGZhbHNlO1xuICBfaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICBfaGVhZGVyczogX1NUSGVhZGVyW11bXSA9IFtdO1xuICBfY29sdW1uczogX1NUQ29sdW1uW10gPSBbXTtcbiAgY29udGV4dG1lbnVMaXN0OiBTVENvbnRleHRtZW51SXRlbVtdID0gW107XG4gIEBWaWV3Q2hpbGQoJ3RhYmxlJykgcmVhZG9ubHkgb3JnVGFibGU/OiBOelRhYmxlQ29tcG9uZW50PFNURGF0YT47XG4gIEBWaWV3Q2hpbGQoJ2NvbnRleHRtZW51VHBsJykgcmVhZG9ubHkgY29udGV4dG1lbnVUcGwhOiBOekRyb3Bkb3duTWVudUNvbXBvbmVudDtcblxuICBASW5wdXQoKVxuICBnZXQgcmVxKCk6IFNUUmVxIHtcbiAgICByZXR1cm4gdGhpcy5fcmVxO1xuICB9XG4gIHNldCByZXEodmFsdWU6IFNUUmVxKSB7XG4gICAgdGhpcy5fcmVxID0gZGVlcE1lcmdlS2V5KHt9LCB0cnVlLCB0aGlzLmNvZy5yZXEsIHZhbHVlKTtcbiAgfVxuICAvKiog6L+U5Zue5L2T6YWN572uICovXG4gIEBJbnB1dCgpXG4gIGdldCByZXMoKTogU1RSZXMge1xuICAgIHJldHVybiB0aGlzLl9yZXM7XG4gIH1cbiAgc2V0IHJlcyh2YWx1ZTogU1RSZXMpIHtcbiAgICBjb25zdCBpdGVtID0gKHRoaXMuX3JlcyA9IGRlZXBNZXJnZUtleSh7fSwgdHJ1ZSwgdGhpcy5jb2cucmVzLCB2YWx1ZSkpO1xuICAgIGNvbnN0IHJlTmFtZSA9IGl0ZW0ucmVOYW1lITtcbiAgICBpZiAodHlwZW9mIHJlTmFtZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHJlTmFtZS5saXN0KSkgcmVOYW1lLmxpc3QgPSByZU5hbWUubGlzdCEuc3BsaXQoJy4nKTtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShyZU5hbWUudG90YWwpKSByZU5hbWUudG90YWwgPSByZU5hbWUudG90YWwhLnNwbGl0KCcuJyk7XG4gICAgfVxuICAgIHRoaXMuX3JlcyA9IGl0ZW07XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IHBhZ2UoKTogU1RQYWdlIHtcbiAgICByZXR1cm4gdGhpcy5fcGFnZTtcbiAgfVxuICBzZXQgcGFnZSh2YWx1ZTogU1RQYWdlKSB7XG4gICAgdGhpcy5fcGFnZSA9IHsgLi4udGhpcy5jb2cucGFnZSwgLi4udmFsdWUgfTtcbiAgICB0aGlzLnVwZGF0ZVRvdGFsVHBsKCk7XG4gIH1cbiAgQElucHV0KCkgZGF0YT86IHN0cmluZyB8IFNURGF0YVtdIHwgT2JzZXJ2YWJsZTxTVERhdGFbXT47XG4gIEBJbnB1dCgpIGNvbHVtbnM/OiBTVENvbHVtbltdIHwgbnVsbDtcbiAgQElucHV0KCkgY29udGV4dG1lbnU/OiBTVENvbnRleHRtZW51Rm4gfCBudWxsO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBwcyA9IDEwO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBwaSA9IDE7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHRvdGFsID0gMDtcbiAgQElucHV0KCkgbG9hZGluZzogYm9vbGVhbiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBsb2FkaW5nRGVsYXkgPSAwO1xuICBASW5wdXQoKSBsb2FkaW5nSW5kaWNhdG9yOiBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYm9yZGVyZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgc2l6ZSE6ICdzbWFsbCcgfCAnbWlkZGxlJyB8ICdkZWZhdWx0JztcbiAgQElucHV0KCkgc2Nyb2xsOiB7IHg/OiBzdHJpbmcgfCBudWxsOyB5Pzogc3RyaW5nIHwgbnVsbCB9ID0geyB4OiBudWxsLCB5OiBudWxsIH07XG4gIEBJbnB1dCgpIHNpbmdsZVNvcnQ/OiBTVFNpbmdsZVNvcnQgfCBudWxsO1xuICBwcml2YXRlIF9tdWx0aVNvcnQ/OiBTVE11bHRpU29ydDtcbiAgQElucHV0KClcbiAgZ2V0IG11bHRpU29ydCgpOiBOelNhZmVBbnkge1xuICAgIHJldHVybiB0aGlzLl9tdWx0aVNvcnQ7XG4gIH1cbiAgc2V0IG11bHRpU29ydCh2YWx1ZTogTnpTYWZlQW55KSB7XG4gICAgaWYgKFxuICAgICAgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nICYmICF0b0Jvb2xlYW4odmFsdWUpKSB8fFxuICAgICAgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMClcbiAgICApIHtcbiAgICAgIHRoaXMuX211bHRpU29ydCA9IHVuZGVmaW5lZDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fbXVsdGlTb3J0ID0ge1xuICAgICAgLi4uKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgPyB2YWx1ZSA6IHt9KVxuICAgIH07XG4gIH1cbiAgQElucHV0KCkgcm93Q2xhc3NOYW1lPzogU1RSb3dDbGFzc05hbWUgfCBudWxsO1xuICBASW5wdXQoKSBjbGlja1Jvd0NsYXNzTmFtZT86IFNUQ2xpY2tSb3dDbGFzc05hbWUgfCBudWxsO1xuICBASW5wdXQoKVxuICBzZXQgd2lkdGhNb2RlKHZhbHVlOiBTVFdpZHRoTW9kZSkge1xuICAgIHRoaXMuX3dpZHRoTW9kZSA9IHsgLi4udGhpcy5jb2cud2lkdGhNb2RlLCAuLi52YWx1ZSB9O1xuICB9XG4gIGdldCB3aWR0aE1vZGUoKTogU1RXaWR0aE1vZGUge1xuICAgIHJldHVybiB0aGlzLl93aWR0aE1vZGU7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHdpZHRoQ29uZmlnKHZhbDogc3RyaW5nW10pIHtcbiAgICB0aGlzLl93aWR0aENvbmZpZyA9IHZhbDtcbiAgICB0aGlzLmN1c3RvbVdpZHRoQ29uZmlnID0gdmFsICYmIHZhbC5sZW5ndGggPiAwO1xuICB9XG4gIHByaXZhdGUgX3Jlc2l6YWJsZT86IFNUUmVzaXphYmxlO1xuICBASW5wdXQoKVxuICBzZXQgcmVzaXphYmxlKHZhbDogU1RSZXNpemFibGUgfCBib29sZWFuIHwgc3RyaW5nKSB7XG4gICAgdGhpcy5fcmVzaXphYmxlID0gdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcgPyB2YWwgOiB7IGRpc2FibGVkOiAhdG9Cb29sZWFuKHZhbCkgfTtcbiAgfVxuICBASW5wdXQoKSBoZWFkZXI/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGw7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93SGVhZGVyID0gdHJ1ZTtcbiAgQElucHV0KCkgZm9vdGVyPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsO1xuICBASW5wdXQoKSBib2R5SGVhZGVyPzogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IFNUU3RhdGlzdGljYWxSZXN1bHRzIH0+IHwgbnVsbDtcbiAgQElucHV0KCkgYm9keT86IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBTVFN0YXRpc3RpY2FsUmVzdWx0cyB9PiB8IG51bGw7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBleHBhbmRSb3dCeUNsaWNrID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBleHBhbmRBY2NvcmRpb24gPSBmYWxzZTtcbiAgQElucHV0KCkgZXhwYW5kOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogTnpTYWZlQW55OyBpbmRleDogbnVtYmVyIH0+IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG5vUmVzdWx0Pzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgcmVzcG9uc2l2ZTogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSByZXNwb25zaXZlSGlkZUhlYWRlckZvb3Rlcj86IGJvb2xlYW47XG4gIEBPdXRwdXQoKSByZWFkb25seSBlcnJvciA9IG5ldyBFdmVudEVtaXR0ZXI8U1RFcnJvcj4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8U1RDaGFuZ2U+KCk7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSB2aXJ0dWFsU2Nyb2xsID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHZpcnR1YWxJdGVtU2l6ZSA9IDU0O1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSB2aXJ0dWFsTWF4QnVmZmVyUHggPSAyMDA7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHZpcnR1YWxNaW5CdWZmZXJQeCA9IDEwMDtcbiAgQElucHV0KCkgY3VzdG9tUmVxdWVzdD86IChvcHRpb25zOiBTVEN1c3RvbVJlcXVlc3RPcHRpb25zKSA9PiBPYnNlcnZhYmxlPE56U2FmZUFueT47XG4gIEBJbnB1dCgpIHZpcnR1YWxGb3JUcmFja0J5OiBUcmFja0J5RnVuY3Rpb248U1REYXRhPiA9IGluZGV4ID0+IGluZGV4O1xuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG51bWJlciBvZiB0aGUgY3VycmVudCBwYWdlXG4gICAqL1xuICBnZXQgY291bnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YS5sZW5ndGg7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBkYXRhIG9mIHRoZSBjdXJyZW50IHBhZ2VcbiAgICovXG4gIGdldCBsaXN0KCk6IFNURGF0YVtdIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgfVxuXG4gIGdldCBub0NvbHVtbnMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29sdW1ucyA9PSBudWxsO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChBTEFJTl9JMThOX1RPS0VOKSBpMThuU3J2OiBBbGFpbkkxOE5TZXJ2aWNlLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgZXhwb3J0U3J2OiBTVEV4cG9ydCxcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogTnpTYWZlQW55LFxuICAgIHByaXZhdGUgY29sdW1uU291cmNlOiBTVENvbHVtblNvdXJjZSxcbiAgICBwcml2YXRlIGRhdGFTb3VyY2U6IFNURGF0YVNvdXJjZSxcbiAgICBwcml2YXRlIGRlbG9uSTE4bjogRGVsb25Mb2NhbGVTZXJ2aWNlLFxuICAgIGNvbmZpZ1NydjogQWxhaW5Db25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgY21zOiBOekNvbnRleHRNZW51U2VydmljZVxuICApIHtcbiAgICB0aGlzLmRlbG9uSTE4bi5jaGFuZ2UucGlwZSh0YWtlVW50aWxEZXN0cm95ZWQoKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMubG9jYWxlID0gdGhpcy5kZWxvbkkxOG4uZ2V0RGF0YSgnc3QnKTtcbiAgICAgIGlmICh0aGlzLl9jb2x1bW5zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy51cGRhdGVUb3RhbFRwbCgpO1xuICAgICAgICB0aGlzLmNkKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpMThuU3J2LmNoYW5nZVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRha2VVbnRpbERlc3Ryb3llZCgpLFxuICAgICAgICBmaWx0ZXIoKCkgPT4gdGhpcy5fY29sdW1ucy5sZW5ndGggPiAwKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLnJlZnJlc2hDb2x1bW5zKCkpO1xuXG4gICAgdGhpcy5zZXRDb2coY29uZmlnU3J2Lm1lcmdlKCdzdCcsIFNUX0RFRkFVTFRfQ09ORklHKSEpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDb2coY29nOiBBbGFpblNUQ29uZmlnKTogdm9pZCB7XG4gICAgY29uc3QgY29weU11bHRpU29ydCA9IHsgLi4uY29nLm11bHRpU29ydCB9O1xuICAgIC8vIEJlY2F1c2UgbXVsdGlTb3J0Lmdsb2JhbCB3aWxsIGFmZmVjdCB0aGUgcmVzdWx0LCBpdCBzaG91bGQgYmUgcmVtb3ZlZCBmaXJzdCwgYW5kIG11bHRpU29ydCB3aWxsIGJlIG9wZXJhdGVkIGFnYWluIGFmdGVyIHByb2Nlc3NpbmcuXG4gICAgZGVsZXRlIGNvZy5tdWx0aVNvcnQ7XG4gICAgdGhpcy5jb2cgPSBjb2c7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb2cpO1xuXG4gICAgaWYgKGNvcHlNdWx0aVNvcnQuZ2xvYmFsICE9PSBmYWxzZSkge1xuICAgICAgdGhpcy5tdWx0aVNvcnQgPSBjb3B5TXVsdGlTb3J0O1xuICAgIH1cbiAgICB0aGlzLmNvbHVtblNvdXJjZS5zZXRDb2coY29nKTtcbiAgICB0aGlzLmRhdGFTb3VyY2Uuc2V0Q29nKGNvZyk7XG4gIH1cblxuICBjZCgpOiB0aGlzIHtcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcml2YXRlIHJlZnJlc2hEYXRhKCk6IHRoaXMge1xuICAgIHRoaXMuX2RhdGEgPSBbLi4udGhpcy5fZGF0YV07XG4gICAgcmV0dXJuIHRoaXMuY2QoKTtcbiAgfVxuXG4gIHJlbmRlclRvdGFsKHRvdGFsOiBzdHJpbmcsIHJhbmdlOiBzdHJpbmdbXSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMudG90YWxUcGxcbiAgICAgID8gdGhpcy50b3RhbFRwbC5yZXBsYWNlKCd7e3RvdGFsfX0nLCB0b3RhbCkucmVwbGFjZSgne3tyYW5nZVswXX19JywgcmFuZ2VbMF0pLnJlcGxhY2UoJ3t7cmFuZ2VbMV19fScsIHJhbmdlWzFdKVxuICAgICAgOiAnJztcbiAgfVxuXG4gIHByaXZhdGUgY2hhbmdlRW1pdCh0eXBlOiBTVENoYW5nZVR5cGUsIGRhdGE/OiBOelNhZmVBbnkpOiB2b2lkIHtcbiAgICBjb25zdCByZXM6IFNUQ2hhbmdlID0ge1xuICAgICAgdHlwZSxcbiAgICAgIHBpOiB0aGlzLnBpLFxuICAgICAgcHM6IHRoaXMucHMsXG4gICAgICB0b3RhbDogdGhpcy50b3RhbFxuICAgIH07XG4gICAgaWYgKGRhdGEgIT0gbnVsbCkge1xuICAgICAgcmVzW3R5cGVdID0gZGF0YTtcbiAgICB9XG4gICAgdGhpcy5jaGFuZ2UuZW1pdChyZXMpO1xuICB9XG5cbiAgLy8gI3JlZ2lvbiBkYXRhXG5cbiAgLyoqXG4gICAqIOiOt+WPlui/h+a7pOWQjuaJgOacieaVsOaNrlxuICAgKiAtIOacrOWcsOaVsOaNru+8muWMheWQq+aOkuW6j+OAgei/h+a7pOWQjuS4jeWIhumhteaVsOaNrlxuICAgKiAtIOi/nOeoi+aVsOaNru+8muS4jeS8oOmAkiBgcGlg44CBYHBzYCDkuKTkuKrlj4LmlbBcbiAgICovXG4gIGdldCBmaWx0ZXJlZERhdGEoKTogT2JzZXJ2YWJsZTxTVERhdGFbXT4ge1xuICAgIHJldHVybiB0aGlzLmxvYWREYXRhKHsgcGFnaW5hdG9yOiBmYWxzZSB9IGFzIHVua25vd24gYXMgU1REYXRhU291cmNlT3B0aW9ucykucGlwZShtYXAocmVzID0+IHJlcy5saXN0KSk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVRvdGFsVHBsKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgdG90YWwgfSA9IHRoaXMucGFnZTtcbiAgICBpZiAodHlwZW9mIHRvdGFsID09PSAnc3RyaW5nJyAmJiB0b3RhbC5sZW5ndGgpIHtcbiAgICAgIHRoaXMudG90YWxUcGwgPSB0b3RhbDtcbiAgICB9IGVsc2UgaWYgKHRvQm9vbGVhbih0b3RhbCkpIHtcbiAgICAgIHRoaXMudG90YWxUcGwgPSB0aGlzLmxvY2FsZS50b3RhbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50b3RhbFRwbCA9ICcnO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0TG9hZGluZyh2YWw6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5sb2FkaW5nID09IG51bGwpIHtcbiAgICAgIHRoaXMuX2xvYWRpbmcgPSB2YWw7XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBsb2FkRGF0YShvcHRpb25zPzogU1REYXRhU291cmNlT3B0aW9ucyk6IE9ic2VydmFibGU8U1REYXRhU291cmNlUmVzdWx0PiB7XG4gICAgY29uc3QgeyBwaSwgcHMsIGRhdGEsIHJlcSwgcmVzLCBwYWdlLCB0b3RhbCwgc2luZ2xlU29ydCwgbXVsdGlTb3J0LCByb3dDbGFzc05hbWUgfSA9IHRoaXM7XG4gICAgcmV0dXJuIHRoaXMuZGF0YVNvdXJjZVxuICAgICAgLnByb2Nlc3Moe1xuICAgICAgICBwaSxcbiAgICAgICAgcHMsXG4gICAgICAgIHRvdGFsLFxuICAgICAgICBkYXRhLFxuICAgICAgICByZXEsXG4gICAgICAgIHJlcyxcbiAgICAgICAgcGFnZSxcbiAgICAgICAgY29sdW1uczogdGhpcy5fY29sdW1ucyxcbiAgICAgICAgc2luZ2xlU29ydCxcbiAgICAgICAgbXVsdGlTb3J0LFxuICAgICAgICByb3dDbGFzc05hbWUsXG4gICAgICAgIHBhZ2luYXRvcjogdHJ1ZSxcbiAgICAgICAgY3VzdG9tUmVxdWVzdDogdGhpcy5jdXN0b21SZXF1ZXN0IHx8IHRoaXMuY29nLmN1c3RvbVJlcXVlc3QsXG4gICAgICAgIC4uLm9wdGlvbnNcbiAgICAgIH0pXG4gICAgICAucGlwZSh0YWtlVW50aWxEZXN0cm95ZWQodGhpcy5kZXN0cm95JCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkUGFnZURhdGEoKTogT2JzZXJ2YWJsZTx0aGlzPiB7XG4gICAgdGhpcy5zZXRMb2FkaW5nKHRydWUpO1xuICAgIHJldHVybiB0aGlzLmxvYWREYXRhKCkucGlwZShcbiAgICAgIGZpbmFsaXplKCgpID0+IHRoaXMuc2V0TG9hZGluZyhmYWxzZSkpLFxuICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB7XG4gICAgICAgIHRoaXMuZXJyb3IuZW1pdCh7IHR5cGU6ICdyZXEnLCBlcnJvciB9KTtcbiAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoKCkgPT4gZXJyb3IpO1xuICAgICAgfSksXG4gICAgICBtYXAocmVzdWx0ID0+IHtcbiAgICAgICAgY29uc3QgdW5kZWZpbmVkU3RyaW5nID0gJ3VuZGVmaW5lZCc7XG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0LnBpICE9PSB1bmRlZmluZWRTdHJpbmcpIHtcbiAgICAgICAgICB0aGlzLnBpID0gcmVzdWx0LnBpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0LnBzICE9PSB1bmRlZmluZWRTdHJpbmcpIHtcbiAgICAgICAgICB0aGlzLnBzID0gcmVzdWx0LnBzO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0LnRvdGFsICE9PSB1bmRlZmluZWRTdHJpbmcpIHtcbiAgICAgICAgICB0aGlzLnRvdGFsID0gcmVzdWx0LnRvdGFsO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0LnBhZ2VTaG93ICE9PSB1bmRlZmluZWRTdHJpbmcpIHtcbiAgICAgICAgICB0aGlzLl9pc1BhZ2luYXRpb24gPSByZXN1bHQucGFnZVNob3c7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZGF0YSA9IHJlc3VsdC5saXN0ID8/IFtdO1xuICAgICAgICB0aGlzLl9zdGF0aXN0aWNhbCA9IHJlc3VsdC5zdGF0aXN0aWNhbCBhcyBTVFN0YXRpc3RpY2FsUmVzdWx0cztcbiAgICAgICAgdGhpcy5jaGFuZ2VFbWl0KCdsb2FkZWQnLCByZXN1bHQubGlzdCk7XG4gICAgICAgIC8vIFNob3VsZCBiZSByZS1yZW5kZXIgaW4gbmV4dCB0aWtlIHdoZW4gdXNpbmcgdmlydHVhbCBzY3JvbGxcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL25nLWFsYWluL25nLWFsYWluL2lzc3Vlcy8xODM2XG4gICAgICAgIGlmICh0aGlzLmNka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydCAhPSBudWxsKSB7XG4gICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLmNka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydD8uY2hlY2tWaWV3cG9ydFNpemUoKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcmVmQ2hlY2soKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKiog5riF56m65omA5pyJ5pWw5o2uICovXG4gIGNsZWFyKGNsZWFuU3RhdHVzOiBib29sZWFuID0gdHJ1ZSk6IHRoaXMge1xuICAgIGlmIChjbGVhblN0YXR1cykge1xuICAgICAgdGhpcy5jbGVhclN0YXR1cygpO1xuICAgIH1cbiAgICB0aGlzLl9kYXRhID0gW107XG4gICAgcmV0dXJuIHRoaXMuY2QoKTtcbiAgfVxuXG4gIC8qKiDmuIXnqbrmiYDmnInnirbmgIEgKi9cbiAgY2xlYXJTdGF0dXMoKTogdGhpcyB7XG4gICAgcmV0dXJuIHRoaXMuY2xlYXJDaGVjaygpLmNsZWFyUmFkaW8oKS5jbGVhckZpbHRlcigpLmNsZWFyU29ydCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIOagueaNrumhteeggemHjeaWsOWKoOi9veaVsOaNrlxuICAgKlxuICAgKiBAcGFyYW0gcGkg5oyH5a6a5b2T5YmN6aG156CB77yM6buY6K6k77yaYDFgXG4gICAqIEBwYXJhbSBleHRyYVBhcmFtcyDph43mlrDmjIflrpogYGV4dHJhUGFyYW1zYCDlgLxcbiAgICogQHBhcmFtIG9wdGlvbnMg6YCJ6aG5XG4gICAqL1xuICBsb2FkKHBpOiBudW1iZXIgPSAxLCBleHRyYVBhcmFtcz86IE56U2FmZUFueSwgb3B0aW9ucz86IFNUTG9hZE9wdGlvbnMpOiB0aGlzIHtcbiAgICBpZiAocGkgIT09IC0xKSB0aGlzLnBpID0gcGk7XG4gICAgaWYgKHR5cGVvZiBleHRyYVBhcmFtcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVxLnBhcmFtcyA9IG9wdGlvbnMgJiYgb3B0aW9ucy5tZXJnZSA/IHsgLi4udGhpcy5yZXEucGFyYW1zLCAuLi5leHRyYVBhcmFtcyB9IDogZXh0cmFQYXJhbXM7XG4gICAgfVxuICAgIHRoaXMuX2NoYW5nZSgncGknLCBvcHRpb25zKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiDph43mlrDliLfmlrDlvZPliY3pobVcbiAgICpcbiAgICogQHBhcmFtIGV4dHJhUGFyYW1zIOmHjeaWsOaMh+WumiBgZXh0cmFQYXJhbXNgIOWAvFxuICAgKi9cbiAgcmVsb2FkKGV4dHJhUGFyYW1zPzogTnpTYWZlQW55LCBvcHRpb25zPzogU1RMb2FkT3B0aW9ucyk6IHRoaXMge1xuICAgIHJldHVybiB0aGlzLmxvYWQoLTEsIGV4dHJhUGFyYW1zLCBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDph43nva7kuJTph43mlrDorr7nva4gYHBpYCDkuLogYDFg77yM5YyF5ZCr5Lul5LiL5YC877yaXG4gICAqIC0gYGNoZWNrYCDmlbDmja5cbiAgICogLSBgcmFkaW9gIOaVsOaNrlxuICAgKiAtIGBzb3J0YCDmlbDmja5cbiAgICogLSBgZmlsZXRlcmAg5pWw5o2uXG4gICAqXG4gICAqIEBwYXJhbSBleHRyYVBhcmFtcyDph43mlrDmjIflrpogYGV4dHJhUGFyYW1zYCDlgLxcbiAgICovXG4gIHJlc2V0KGV4dHJhUGFyYW1zPzogTnpTYWZlQW55LCBvcHRpb25zPzogU1RMb2FkT3B0aW9ucyk6IHRoaXMge1xuICAgIHRoaXMuY2xlYXJTdGF0dXMoKS5sb2FkKDEsIGV4dHJhUGFyYW1zLCBvcHRpb25zKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByaXZhdGUgX3RvVG9wKGVuZm9yY2U/OiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKCEoZW5mb3JjZSA9PSBudWxsID8gdGhpcy5wYWdlLnRvVG9wIDogZW5mb3JjZSkpIHJldHVybjtcbiAgICBjb25zdCBlbCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICBlbC5zY3JvbGxJbnRvVmlldygpO1xuICAgIC8vIGZpeCBoZWFkZXIgaGVpZ2h0XG4gICAgdGhpcy5kb2MuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCAtPSB0aGlzLnBhZ2UudG9Ub3BPZmZzZXQhO1xuICAgIGlmICh0aGlzLnNjcm9sbCkge1xuICAgICAgaWYgKHRoaXMuY2RrVmlydHVhbFNjcm9sbFZpZXdwb3J0KSB7XG4gICAgICAgIHRoaXMuY2RrVmlydHVhbFNjcm9sbFZpZXdwb3J0LnNjcm9sbFRvKHtcbiAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgbGVmdDogMFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsLnF1ZXJ5U2VsZWN0b3IoJy5hbnQtdGFibGUtYm9keSwgLmFudC10YWJsZS1jb250ZW50Jyk/LnNjcm9sbFRvKDAsIDApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9jaGFuZ2UodHlwZTogJ3BpJyB8ICdwcycsIG9wdGlvbnM/OiBTVExvYWRPcHRpb25zKTogdm9pZCB7XG4gICAgaWYgKHR5cGUgPT09ICdwaScgfHwgKHR5cGUgPT09ICdwcycgJiYgdGhpcy5waSA8PSBNYXRoLmNlaWwodGhpcy50b3RhbCAvIHRoaXMucHMpKSkge1xuICAgICAgdGhpcy5sb2FkUGFnZURhdGEoKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5fdG9Ub3Aob3B0aW9ucz8udG9Ub3ApKTtcbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZUVtaXQodHlwZSk7XG4gIH1cblxuICBwcml2YXRlIGNsb3NlT3RoZXJFeHBhbmQoaXRlbTogU1REYXRhKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZXhwYW5kQWNjb3JkaW9uID09PSBmYWxzZSkgcmV0dXJuO1xuICAgIHRoaXMuX2RhdGEuZmlsdGVyKGkgPT4gaSAhPT0gaXRlbSkuZm9yRWFjaChpID0+IChpLmV4cGFuZCA9IGZhbHNlKSk7XG4gIH1cblxuICBfcm93Q2xpY2soZTogRXZlbnQsIGl0ZW06IFNURGF0YSwgaW5kZXg6IG51bWJlciwgZGJsOiBib29sZWFuKTogdm9pZCB7XG4gICAgY29uc3QgZWwgPSBlLnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICBpZiAoZWwubm9kZU5hbWUgPT09ICdJTlBVVCcpIHJldHVybjtcbiAgICBjb25zdCB7IGV4cGFuZCwgZXhwYW5kUm93QnlDbGljayB9ID0gdGhpcztcbiAgICBpZiAoISFleHBhbmQgJiYgaXRlbS5zaG93RXhwYW5kICE9PSBmYWxzZSAmJiBleHBhbmRSb3dCeUNsaWNrKSB7XG4gICAgICBpdGVtLmV4cGFuZCA9ICFpdGVtLmV4cGFuZDtcbiAgICAgIHRoaXMuY2xvc2VPdGhlckV4cGFuZChpdGVtKTtcbiAgICAgIHRoaXMuY2hhbmdlRW1pdCgnZXhwYW5kJywgaXRlbSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZGF0YSA9IHsgZSwgaXRlbSwgaW5kZXggfTtcbiAgICBpZiAoZGJsKSB7XG4gICAgICB0aGlzLmNoYW5nZUVtaXQoJ2RibENsaWNrJywgZGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NsaWNrUm93Q2xhc3NOYW1lKGVsLCBpdGVtLCBpbmRleCk7XG4gICAgICB0aGlzLmNoYW5nZUVtaXQoJ2NsaWNrJywgZGF0YSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY2xpY2tSb3dDbGFzc05hbWUoZWw6IEhUTUxFbGVtZW50LCBpdGVtOiBTVERhdGEsIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBjciA9IHRoaXMuY2xpY2tSb3dDbGFzc05hbWU7XG4gICAgaWYgKGNyID09IG51bGwpIHJldHVybjtcbiAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICBleGNsdXNpdmU6IGZhbHNlLFxuICAgICAgLi4uKHR5cGVvZiBjciA9PT0gJ3N0cmluZycgPyB7IGZuOiAoKSA9PiBjciB9IDogY3IpXG4gICAgfSBhcyBTVENsaWNrUm93Q2xhc3NOYW1lVHlwZTtcbiAgICBjb25zdCBjbGFzc05hbWUgPSBjb25maWcuZm4oaXRlbSwgaW5kZXgpO1xuICAgIGNvbnN0IHRyRWwgPSBlbC5jbG9zZXN0KCd0cicpIGFzIEhUTUxFbGVtZW50O1xuICAgIGlmIChjb25maWcuZXhjbHVzaXZlKSB7XG4gICAgICB0ckVsLnBhcmVudEVsZW1lbnQhIS5xdWVyeVNlbGVjdG9yQWxsKCd0cicpLmZvckVhY2goKGE6IEhUTUxFbGVtZW50KSA9PiBhLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKSk7XG4gICAgfVxuICAgIGlmICh0ckVsLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpKSB7XG4gICAgICB0ckVsLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHJFbC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgfVxuICB9XG5cbiAgX2V4cGFuZENoYW5nZShpdGVtOiBTVERhdGEsIGV4cGFuZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGl0ZW0uZXhwYW5kID0gZXhwYW5kO1xuICAgIHRoaXMuY2xvc2VPdGhlckV4cGFuZChpdGVtKTtcbiAgICB0aGlzLmNoYW5nZUVtaXQoJ2V4cGFuZCcsIGl0ZW0pO1xuICB9XG5cbiAgX3N0b3BQcm9wYWdhdGlvbihldjogRXZlbnQpOiB2b2lkIHtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIHByaXZhdGUgX3JlZkNvbEFuZERhdGEoKTogdGhpcyB7XG4gICAgdGhpcy5fY29sdW1ucy5mb3JFYWNoKGMgPT4ge1xuICAgICAgdGhpcy5fZGF0YS5mb3JFYWNoKChpLCBpZHgpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gaS5fdmFsdWVzIGFzIF9TVERhdGFWYWx1ZVtdO1xuICAgICAgICBpZiAoYy50eXBlID09PSAnbm8nKSB7XG4gICAgICAgICAgY29uc3QgdGV4dCA9IGAke3RoaXMuZGF0YVNvdXJjZS5nZXROb0luZGV4KGksIGMsIGlkeCl9YDtcbiAgICAgICAgICB2YWx1ZXNbYy5fX3BvaW50IV0gPSB7XG4gICAgICAgICAgICB0ZXh0LFxuICAgICAgICAgICAgX3RleHQ6IHRleHQsXG4gICAgICAgICAgICBvcmc6IGlkeCxcbiAgICAgICAgICAgIHNhZmVUeXBlOiAndGV4dCdcbiAgICAgICAgICB9IGFzIF9TVERhdGFWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICB2YWx1ZXNbYy5fX3BvaW50IV0ucHJvcHMgPSB0aGlzLmRhdGFTb3VyY2UuZ2V0Q2VsbChjLCBpLCBpZHgpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5yZWZyZXNoRGF0YSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIHJvd3MgaW4gdGhlIHRhYmxlLCBsaWtlIHRoaXM6XG4gICAqXG4gICAqIGBgYFxuICAgKiB0aGlzLnN0LmFkZFJvdyhzdERhdGFJdGVtKVxuICAgKiBgYGBcbiAgICpcbiAgICogKipUSVBTOioqIERvbid0IGNoYW5nZSB0aGUgYHRvdGFsYCB2YWx1ZSwgaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgcmVsb2FkYCBtZXRob2QgaWYgbmVlZGVkXG4gICAqL1xuICBhZGRSb3coZGF0YTogU1REYXRhIHwgU1REYXRhW10sIG9wdGlvbnM/OiB7IGluZGV4PzogbnVtYmVyIH0pOiB0aGlzIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZGF0YSkpIGRhdGEgPSBbZGF0YV07XG4gICAgdGhpcy5fZGF0YS5zcGxpY2Uob3B0aW9ucz8uaW5kZXggPz8gMCwgMCwgLi4uKGRhdGEgYXMgU1REYXRhW10pKTtcbiAgICByZXR1cm4gdGhpcy5vcHRpbWl6ZURhdGEoKS5fcmVmQ29sQW5kRGF0YSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhIHJvdyBpbiB0aGUgdGFibGUsIGxpa2UgdGhpczpcbiAgICpcbiAgICogYGBgXG4gICAqIHRoaXMuc3QucmVtb3ZlUm93KDApXG4gICAqIHRoaXMuc3QucmVtb3ZlUm93KHN0RGF0YUl0ZW0pXG4gICAqIGBgYFxuICAgKlxuICAgKiAqKlRJUFM6KiogRG9uJ3QgY2hhbmdlIHRoZSBgdG90YWxgIHZhbHVlLCBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGByZWxvYWRgIG1ldGhvZCBpZiBuZWVkZWRcbiAgICovXG4gIHJlbW92ZVJvdyhkYXRhOiBTVERhdGEgfCBTVERhdGFbXSB8IG51bWJlcik6IHRoaXMge1xuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHRoaXMuX2RhdGEuc3BsaWNlKGRhdGEsIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgZGF0YSA9IFtkYXRhXTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgY3VyRGF0YSA9IHRoaXMuX2RhdGE7XG4gICAgICBmb3IgKHZhciBpID0gY3VyRGF0YS5sZW5ndGg7IGktLTsgKSB7XG4gICAgICAgIGlmIChkYXRhLmluZGV4T2YoY3VyRGF0YVtpXSkgIT09IC0xKSB7XG4gICAgICAgICAgY3VyRGF0YS5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3JlZkNoZWNrKCkuX3JlZkNvbEFuZERhdGEoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSByb3cgdmFsdWUgZm9yIHRoZSBgaW5kZXhgIGluIHRoZSB0YWJsZSwgbGlrZSB0aGlzOlxuICAgKlxuICAgKiAtIGBvcHRpbm9zLnJlZnJlc2hTY2hlbWFgIFdoZXRoZXIgdG8gcmVmcmVzaCBvZiBzdCBzY2hlbWFzXG4gICAqIC0gYG9wdGlub3MuZW1pdFJlbG9hZGAgV2hldGhlciB0byB0cmlnZ2VyIGEgcmVsb2FkIGh0dHAgcmVxdWVzdCB3aGVuIGRhdGEgaXMgdXJsXG4gICAqXG4gICAqIGBgYFxuICAgKiB0aGlzLnN0LnNldFJvdygwLCB7IHByaWNlOiAxMDAgfSlcbiAgICogdGhpcy5zdC5zZXRSb3coMCwgeyBwcmljZTogMTAwLCBuYW1lOiAnYXNkZicgfSlcbiAgICogdGhpcy5zdC5zZXRSb3coaXRlbSwgeyBwcmljZTogMTAwIH0pXG4gICAqIGBgYFxuICAgKi9cbiAgc2V0Um93KGluZGV4OiBudW1iZXIgfCBTVERhdGEsIGl0ZW06IFNURGF0YSwgb3B0aW9ucz86IHsgcmVmcmVzaFNjaGVtYT86IGJvb2xlYW47IGVtaXRSZWxvYWQ/OiBib29sZWFuIH0pOiB0aGlzIHtcbiAgICBvcHRpb25zID0geyByZWZyZXNoU2NoZW1hOiBmYWxzZSwgZW1pdFJlbG9hZDogZmFsc2UsIC4uLm9wdGlvbnMgfTtcbiAgICBpZiAodHlwZW9mIGluZGV4ICE9PSAnbnVtYmVyJykge1xuICAgICAgaW5kZXggPSB0aGlzLl9kYXRhLmluZGV4T2YoaW5kZXgpO1xuICAgIH1cbiAgICB0aGlzLl9kYXRhW2luZGV4XSA9IGRlZXBNZXJnZUtleSh0aGlzLl9kYXRhW2luZGV4XSwgZmFsc2UsIGl0ZW0pO1xuICAgIHRoaXMub3B0aW1pemVEYXRhKCk7XG4gICAgaWYgKG9wdGlvbnMucmVmcmVzaFNjaGVtYSkge1xuICAgICAgdGhpcy5yZXNldENvbHVtbnMoeyBlbWl0UmVsb2FkOiBvcHRpb25zLmVtaXRSZWxvYWQgfSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucmVmcmVzaERhdGEoKTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIHNvcnRcblxuICBzb3J0KGNvbDogX1NUQ29sdW1uLCBpZHg6IG51bWJlciwgdmFsdWU6IE56U2FmZUFueSk6IHZvaWQge1xuICAgIGlmICh0aGlzLm11bHRpU29ydCkge1xuICAgICAgY29sLl9zb3J0LmRlZmF1bHQgPSB2YWx1ZTtcbiAgICAgIGNvbC5fc29ydC50aWNrID0gdGhpcy5kYXRhU291cmNlLm5leHRTb3J0VGljaztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY29sdW1ucy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4gKGl0ZW0uX3NvcnQuZGVmYXVsdCA9IGluZGV4ID09PSBpZHggPyB2YWx1ZSA6IG51bGwpKTtcbiAgICB9XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHRoaXMubG9hZFBhZ2VEYXRhKCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IHtcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIG1hcDogdGhpcy5kYXRhU291cmNlLmdldFJlcVNvcnRNYXAodGhpcy5zaW5nbGVTb3J0LCB0aGlzLm11bHRpU29ydCwgdGhpcy5fY29sdW1ucyksXG4gICAgICAgIGNvbHVtbjogY29sXG4gICAgICB9O1xuICAgICAgdGhpcy5jaGFuZ2VFbWl0KCdzb3J0JywgcmVzKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNsZWFyU29ydCgpOiB0aGlzIHtcbiAgICB0aGlzLl9jb2x1bW5zLmZvckVhY2goaXRlbSA9PiAoaXRlbS5fc29ydC5kZWZhdWx0ID0gbnVsbCkpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gZmlsdGVyXG5cbiAgX2hhbmRsZUZpbHRlcihjb2w6IF9TVENvbHVtbiwgY29uZmlybTogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICghY29uZmlybSkge1xuICAgICAgdGhpcy5jb2x1bW5Tb3VyY2UuY2xlYW5GaWx0ZXIoY29sKTtcbiAgICB9XG4gICAgLy8g6L+H5ruk6KGo56S65LiA56eN5pWw5o2u55qE5Y+Y5YyW5bqU6YeN572u6aG156CB5Li6IGAxYFxuICAgIHRoaXMucGkgPSAxO1xuICAgIHRoaXMuY29sdW1uU291cmNlLnVwZGF0ZURlZmF1bHQoY29sLmZpbHRlciEpO1xuICAgIHRoaXMubG9hZFBhZ2VEYXRhKCkuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2hhbmdlRW1pdCgnZmlsdGVyJywgY29sKSk7XG4gIH1cblxuICBoYW5kbGVGaWx0ZXJOb3RpZnkodmFsdWU/OiB1bmtub3duKTogdm9pZCB7XG4gICAgdGhpcy5jaGFuZ2VFbWl0KCdmaWx0ZXJDaGFuZ2UnLCB2YWx1ZSk7XG4gIH1cblxuICBjbGVhckZpbHRlcigpOiB0aGlzIHtcbiAgICB0aGlzLl9jb2x1bW5zLmZpbHRlcih3ID0+IHcuZmlsdGVyICYmIHcuZmlsdGVyLmRlZmF1bHQgPT09IHRydWUpLmZvckVhY2goY29sID0+IHRoaXMuY29sdW1uU291cmNlLmNsZWFuRmlsdGVyKGNvbCkpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIGNoZWNrYm94XG5cbiAgLyoqIOa4hemZpOaJgOaciSBgY2hlY2tib3hgICovXG4gIGNsZWFyQ2hlY2soKTogdGhpcyB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tBbGwoZmFsc2UpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVmQ2hlY2soKTogdGhpcyB7XG4gICAgY29uc3QgdmFsaWREYXRhID0gdGhpcy5fZGF0YS5maWx0ZXIodyA9PiAhdy5kaXNhYmxlZCk7XG4gICAgY29uc3QgY2hlY2tlZExpc3QgPSB2YWxpZERhdGEuZmlsdGVyKHcgPT4gdy5jaGVja2VkID09PSB0cnVlKTtcbiAgICB0aGlzLl9hbGxDaGVja2VkID0gY2hlY2tlZExpc3QubGVuZ3RoID4gMCAmJiBjaGVja2VkTGlzdC5sZW5ndGggPT09IHZhbGlkRGF0YS5sZW5ndGg7XG4gICAgY29uc3QgYWxsVW5DaGVja2VkID0gdmFsaWREYXRhLmV2ZXJ5KHZhbHVlID0+ICF2YWx1ZS5jaGVja2VkKTtcbiAgICB0aGlzLl9pbmRldGVybWluYXRlID0gIXRoaXMuX2FsbENoZWNrZWQgJiYgIWFsbFVuQ2hlY2tlZDtcbiAgICB0aGlzLl9hbGxDaGVja2VkRGlzYWJsZWQgPSB0aGlzLl9kYXRhLmxlbmd0aCA9PT0gdGhpcy5fZGF0YS5maWx0ZXIodyA9PiB3LmRpc2FibGVkKS5sZW5ndGg7XG4gICAgcmV0dXJuIHRoaXMuY2QoKTtcbiAgfVxuXG4gIGNoZWNrQWxsKGNoZWNrZWQ/OiBib29sZWFuKTogdGhpcyB7XG4gICAgY2hlY2tlZCA9IHR5cGVvZiBjaGVja2VkID09PSAndW5kZWZpbmVkJyA/IHRoaXMuX2FsbENoZWNrZWQgOiBjaGVja2VkO1xuICAgIHRoaXMuX2RhdGEuZmlsdGVyKHcgPT4gIXcuZGlzYWJsZWQpLmZvckVhY2goaSA9PiAoaS5jaGVja2VkID0gY2hlY2tlZCkpO1xuICAgIHJldHVybiB0aGlzLl9yZWZDaGVjaygpLl9jaGVja05vdGlmeSgpLnJlZnJlc2hEYXRhKCk7XG4gIH1cblxuICBfcm93U2VsZWN0aW9uKHJvdzogU1RDb2x1bW5TZWxlY3Rpb24pOiB0aGlzIHtcbiAgICByb3cuc2VsZWN0KHRoaXMuX2RhdGEpO1xuICAgIHJldHVybiB0aGlzLl9yZWZDaGVjaygpLl9jaGVja05vdGlmeSgpO1xuICB9XG5cbiAgX2NoZWNrTm90aWZ5KCk6IHRoaXMge1xuICAgIGNvbnN0IHJlcyA9IHRoaXMuX2RhdGEuZmlsdGVyKHcgPT4gIXcuZGlzYWJsZWQgJiYgdy5jaGVja2VkID09PSB0cnVlKTtcbiAgICB0aGlzLmNoYW5nZUVtaXQoJ2NoZWNrYm94JywgcmVzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIHJhZGlvXG5cbiAgLyoqIOa4hemZpOaJgOaciSBgcmFkaW9gICovXG4gIGNsZWFyUmFkaW8oKTogdGhpcyB7XG4gICAgdGhpcy5fZGF0YS5maWx0ZXIodyA9PiB3LmNoZWNrZWQpLmZvckVhY2goaXRlbSA9PiAoaXRlbS5jaGVja2VkID0gZmFsc2UpKTtcbiAgICB0aGlzLmNoYW5nZUVtaXQoJ3JhZGlvJywgbnVsbCk7XG4gICAgcmV0dXJuIHRoaXMucmVmcmVzaERhdGEoKTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICBfaGFuZGxlVGQoZXY6IF9TVFRkTm90aWZ5KTogdm9pZCB7XG4gICAgc3dpdGNoIChldi50eXBlKSB7XG4gICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICAgIHRoaXMuX3JlZkNoZWNrKCkuX2NoZWNrTm90aWZ5KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncmFkaW8nOlxuICAgICAgICB0aGlzLmNoYW5nZUVtaXQoJ3JhZGlvJywgZXYuaXRlbSk7XG4gICAgICAgIHRoaXMucmVmcmVzaERhdGEoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgLy8gI3JlZ2lvbiBleHBvcnRcblxuICAvKipcbiAgICog5a+85Ye65b2T5YmN6aG177yM56Gu5L+d5bey57uP5rOo5YaMIGBYbHN4TW9kdWxlYFxuICAgKlxuICAgKiBAcGFyYW0gbmV3RGF0YSDph43mlrDmjIflrprmlbDmja7vvJvoi6XkuLogYHRydWVgIOihqOekuuS9v+eUqCBgZmlsdGVyZWREYXRhYCDmlbDmja5cbiAgICogQHBhcmFtIG9wdCDpop3lpJblj4LmlbBcbiAgICovXG4gIGV4cG9ydChuZXdEYXRhPzogU1REYXRhW10gfCB0cnVlLCBvcHQ/OiBTVEV4cG9ydE9wdGlvbnMpOiB2b2lkIHtcbiAgICBjb25zdCBkYXRhID0gQXJyYXkuaXNBcnJheShuZXdEYXRhKVxuICAgICAgPyB0aGlzLmRhdGFTb3VyY2Uub3B0aW1pemVEYXRhKHsgY29sdW1uczogdGhpcy5fY29sdW1ucywgcmVzdWx0OiBuZXdEYXRhIH0pXG4gICAgICA6IHRoaXMuX2RhdGE7XG4gICAgKG5ld0RhdGEgPT09IHRydWUgPyBmcm9tKHRoaXMuZmlsdGVyZWREYXRhKSA6IG9mKGRhdGEpKS5zdWJzY3JpYmUoKHJlczogU1REYXRhW10pID0+XG4gICAgICB0aGlzLmV4cG9ydFNydi5leHBvcnQoe1xuICAgICAgICBjb2x1bWVuczogdGhpcy5fY29sdW1ucyxcbiAgICAgICAgLi4ub3B0LFxuICAgICAgICBkYXRhOiByZXNcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIHJlc2l6YWJsZVxuXG4gIGNvbFJlc2l6ZSh7IHdpZHRoIH06IE56UmVzaXplRXZlbnQsIGNvbHVtbjogX1NUQ29sdW1uKTogdm9pZCB7XG4gICAgY29sdW1uLndpZHRoID0gYCR7d2lkdGh9cHhgO1xuICAgIHRoaXMuY2hhbmdlRW1pdCgncmVzaXplJywgY29sdW1uKTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIGNvbnRleHRtZW51XG4gIG9uQ29udGV4dG1lbnUoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuY29udGV4dG1lbnUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCBjb2xFbCA9IChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsb3Nlc3QoJ1tkYXRhLWNvbC1pbmRleF0nKSBhcyBIVE1MRWxlbWVudDtcbiAgICBpZiAoIWNvbEVsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGNvbEluZGV4ID0gTnVtYmVyKGNvbEVsLmRhdGFzZXQuY29sSW5kZXgpO1xuICAgIGNvbnN0IHJvd0luZGV4ID0gTnVtYmVyKChjb2xFbC5jbG9zZXN0KCd0cicpIGFzIEhUTUxFbGVtZW50KS5kYXRhc2V0LmluZGV4KTtcbiAgICBjb25zdCBpc1RpdGxlID0gaXNOYU4ocm93SW5kZXgpO1xuICAgIGNvbnN0IG9icyQgPSB0aGlzLmNvbnRleHRtZW51KHtcbiAgICAgIGV2ZW50LFxuICAgICAgdHlwZTogaXNUaXRsZSA/ICdoZWFkJyA6ICdib2R5JyxcbiAgICAgIHJvd0luZGV4OiBpc1RpdGxlID8gbnVsbCA6IHJvd0luZGV4LFxuICAgICAgY29sSW5kZXgsXG4gICAgICBkYXRhOiBpc1RpdGxlID8gbnVsbCA6IHRoaXMubGlzdFtyb3dJbmRleF0sXG4gICAgICBjb2x1bW46IHRoaXMuX2NvbHVtbnNbY29sSW5kZXhdXG4gICAgfSk7XG4gICAgKGlzT2JzZXJ2YWJsZShvYnMkKSA/IG9icyQgOiBvZihvYnMkKSlcbiAgICAgIC5waXBlKFxuICAgICAgICB0YWtlVW50aWxEZXN0cm95ZWQodGhpcy5kZXN0cm95JCksXG4gICAgICAgIGZpbHRlcihyZXMgPT4gcmVzLmxlbmd0aCA+IDApXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgIHRoaXMuY29udGV4dG1lbnVMaXN0ID0gcmVzLm1hcChpID0+IHtcbiAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoaS5jaGlsZHJlbikpIHtcbiAgICAgICAgICAgIGkuY2hpbGRyZW4gPSBbXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIHRoaXMuY21zLmNyZWF0ZShldmVudCwgdGhpcy5jb250ZXh0bWVudVRwbCk7XG4gICAgICB9KTtcbiAgfVxuICAvLyAjZW5kcmVnaW9uXG5cbiAgZ2V0IGNka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydCgpOiBDZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLm9yZ1RhYmxlPy5jZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQ7XG4gIH1cblxuICByZXNldENvbHVtbnMob3B0aW9ucz86IFNUUmVzZXRDb2x1bW5zT3B0aW9uKTogT2JzZXJ2YWJsZTx0aGlzPiB7XG4gICAgb3B0aW9ucyA9IHsgZW1pdFJlbG9hZDogdHJ1ZSwgcHJlQ2xlYXJEYXRhOiBmYWxzZSwgLi4ub3B0aW9ucyB9O1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5jb2x1bW5zICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5jb2x1bW5zID0gb3B0aW9ucy5jb2x1bW5zO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMucGkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnBpID0gb3B0aW9ucy5waTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLnBzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5wcyA9IG9wdGlvbnMucHM7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLmVtaXRSZWxvYWQpIHtcbiAgICAgIC8vIFNob3VsZCBjbGVhbiBkYXRhLCBCZWNhdXNlIG9mIGNoYW5naW5nIGNvbHVtbnMgbWF5IGNhdXNlIGluYWNjdXJhdGUgZGF0YVxuICAgICAgb3B0aW9ucy5wcmVDbGVhckRhdGEgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5wcmVDbGVhckRhdGEpIHtcbiAgICAgIHRoaXMuX2RhdGEgPSBbXTtcbiAgICB9XG4gICAgdGhpcy5yZWZyZXNoQ29sdW1ucygpO1xuICAgIGlmIChvcHRpb25zLmVtaXRSZWxvYWQpIHtcbiAgICAgIHJldHVybiB0aGlzLmxvYWRQYWdlRGF0YSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNkKCk7XG4gICAgICByZXR1cm4gb2YodGhpcyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZWZyZXNoQ29sdW1ucygpOiB0aGlzIHtcbiAgICBjb25zdCByZXMgPSB0aGlzLmNvbHVtblNvdXJjZS5wcm9jZXNzKHRoaXMuY29sdW1ucyBhcyBfU1RDb2x1bW5bXSwge1xuICAgICAgd2lkdGhNb2RlOiB0aGlzLndpZHRoTW9kZSxcbiAgICAgIHJlc2l6YWJsZTogdGhpcy5fcmVzaXphYmxlLFxuICAgICAgc2FmZVR5cGU6IHRoaXMuY29nLnNhZmVUeXBlIGFzIFNUQ29sdW1uU2FmZVR5cGVcbiAgICB9KTtcbiAgICB0aGlzLl9jb2x1bW5zID0gcmVzLmNvbHVtbnM7XG4gICAgdGhpcy5faGVhZGVycyA9IHJlcy5oZWFkZXJzO1xuICAgIGlmICh0aGlzLmN1c3RvbVdpZHRoQ29uZmlnID09PSBmYWxzZSAmJiByZXMuaGVhZGVyV2lkdGhzICE9IG51bGwpIHtcbiAgICAgIHRoaXMuX3dpZHRoQ29uZmlnID0gcmVzLmhlYWRlcldpZHRocztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcml2YXRlIG9wdGltaXplRGF0YSgpOiB0aGlzIHtcbiAgICB0aGlzLl9kYXRhID0gdGhpcy5kYXRhU291cmNlLm9wdGltaXplRGF0YSh7XG4gICAgICBjb2x1bW5zOiB0aGlzLl9jb2x1bW5zLFxuICAgICAgcmVzdWx0OiB0aGlzLl9kYXRhLFxuICAgICAgcm93Q2xhc3NOYW1lOiB0aGlzLnJvd0NsYXNzTmFtZVxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBwdXJlIGRhdGEsIGBzdGAgaW50ZXJuYWxseSBtYWludGFpbnMgYSBzZXQgb2YgZGF0YSBmb3IgY2FjaGluZywgdGhpcyBwYXJ0IG9mIGRhdGEgbWF5IGFmZmVjdCB0aGUgYmFja2VuZFxuICAgKlxuICAgKiDov5Tlm57nuq/lh4DmlbDmja7vvIxgc3RgIOWGhemDqOS8mue7tOaKpOS4gOe7hOeUqOS6jue8k+WtmOeahOaVsOaNru+8jOi/memDqOWIhuaVsOaNruWPr+iDveS8muW9seWTjeWQjuerr1xuICAgKi9cbiAgcHVyZUl0ZW0oaXRlbU9ySW5kZXg6IFNURGF0YSB8IG51bWJlcik6IFNURGF0YSB8IG51bGwge1xuICAgIGlmICh0eXBlb2YgaXRlbU9ySW5kZXggPT09ICdudW1iZXInKSB7XG4gICAgICBpdGVtT3JJbmRleCA9IHRoaXMuX2RhdGFbaXRlbU9ySW5kZXhdO1xuICAgIH1cbiAgICBpZiAoIWl0ZW1PckluZGV4KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgY29weUl0ZW0gPSBkZWVwQ29weShpdGVtT3JJbmRleCk7XG4gICAgWydfdmFsdWVzJywgJ19yb3dDbGFzc05hbWUnXS5mb3JFYWNoKGtleSA9PiBkZWxldGUgY29weUl0ZW1ba2V5XSk7XG4gICAgcmV0dXJuIGNvcHlJdGVtO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY29sdW1uU291cmNlLnJlc3RvcmVBbGxSZW5kZXIodGhpcy5fY29sdW1ucyk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtQIGluIGtleW9mIHRoaXNdPzogU2ltcGxlQ2hhbmdlIH0gJiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMuY29sdW1ucykge1xuICAgICAgdGhpcy5yZWZyZXNoQ29sdW1ucygpLm9wdGltaXplRGF0YSgpO1xuICAgIH1cbiAgICBjb25zdCBjaGFuZ2VEYXRhID0gY2hhbmdlcy5kYXRhO1xuICAgIGlmIChjaGFuZ2VEYXRhICYmIGNoYW5nZURhdGEuY3VycmVudFZhbHVlICYmICEodGhpcy5yZXEubGF6eUxvYWQgJiYgY2hhbmdlRGF0YS5maXJzdENoYW5nZSkpIHtcbiAgICAgIHRoaXMubG9hZFBhZ2VEYXRhKCkuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLmxvYWRpbmcpIHtcbiAgICAgIHRoaXMuX2xvYWRpbmcgPSBjaGFuZ2VzLmxvYWRpbmcuY3VycmVudFZhbHVlO1xuICAgIH1cbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdC10ZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdC10ZC5jb21wb25lbnQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTVFRkQ29tcG9uZW50IHtcbiAgQElucHV0KCkgYyE6IF9TVENvbHVtbjtcbiAgQElucHV0KCkgY0lkeCE6IG51bWJlcjtcbiAgQElucHV0KCkgZGF0YSE6IFNURGF0YVtdO1xuICBASW5wdXQoKSBpITogU1REYXRhO1xuICBASW5wdXQoKSBpbmRleCE6IG51bWJlcjtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG4gPSBuZXcgRXZlbnRFbWl0dGVyPF9TVFRkTm90aWZ5PigpO1xuXG4gIHByaXZhdGUgZ2V0IHJvdXRlclN0YXRlKCk6IHsgcGk6IG51bWJlcjsgcHM6IG51bWJlcjsgdG90YWw6IG51bWJlciB9IHtcbiAgICBjb25zdCB7IHBpLCBwcywgdG90YWwgfSA9IHRoaXMuc3RDb21wO1xuICAgIHJldHVybiB7IHBpLCBwcywgdG90YWwgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBIb3N0KCkgcHJpdmF0ZSBzdENvbXA6IFNUQ29tcG9uZW50LFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBtb2RhbEhlbHBlcjogTW9kYWxIZWxwZXIsXG4gICAgcHJpdmF0ZSBkcmF3ZXJIZWxwZXI6IERyYXdlckhlbHBlclxuICApIHt9XG5cbiAgcHJpdmF0ZSByZXBvcnQodHlwZTogX1NUVGROb3RpZnlUeXBlKTogdm9pZCB7XG4gICAgdGhpcy5uLmVtaXQoeyB0eXBlLCBpdGVtOiB0aGlzLmksIGNvbDogdGhpcy5jIH0pO1xuICB9XG5cbiAgX2NoZWNrYm94KHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5pLmNoZWNrZWQgPSB2YWx1ZTtcbiAgICB0aGlzLnJlcG9ydCgnY2hlY2tib3gnKTtcbiAgfVxuXG4gIF9yYWRpbygpOiB2b2lkIHtcbiAgICB0aGlzLmRhdGEuZmlsdGVyKHcgPT4gIXcuZGlzYWJsZWQpLmZvckVhY2goaSA9PiAoaS5jaGVja2VkID0gZmFsc2UpKTtcbiAgICB0aGlzLmkuY2hlY2tlZCA9IHRydWU7XG4gICAgdGhpcy5yZXBvcnQoJ3JhZGlvJyk7XG4gIH1cblxuICBfbGluayhlOiBFdmVudCk6IGJvb2xlYW4ge1xuICAgIHRoaXMuX3N0b3BQcm9wYWdhdGlvbihlKTtcbiAgICBjb25zdCByZXMgPSB0aGlzLmMuY2xpY2shKHRoaXMuaSwgdGhpcy5zdENvbXApO1xuICAgIGlmICh0eXBlb2YgcmVzID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChyZXMsIHsgc3RhdGU6IHRoaXMucm91dGVyU3RhdGUgfSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIF9zdG9wUHJvcGFnYXRpb24oZXY6IEV2ZW50KTogdm9pZCB7XG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIF9idG4oYnRuOiBTVENvbHVtbkJ1dHRvbiwgZXY/OiBFdmVudCk6IHZvaWQge1xuICAgIGV2Py5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCBjb2cgPSB0aGlzLnN0Q29tcC5jb2c7XG4gICAgbGV0IHJlY29yZCA9IHRoaXMuaTtcbiAgICBpZiAoYnRuLnR5cGUgPT09ICdtb2RhbCcgfHwgYnRuLnR5cGUgPT09ICdzdGF0aWMnKSB7XG4gICAgICBpZiAoY29nLm1vZGFsIS5wdXJlUmVjb2FyZCA9PT0gdHJ1ZSkge1xuICAgICAgICByZWNvcmQgPSB0aGlzLnN0Q29tcC5wdXJlSXRlbShyZWNvcmQpITtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG1vZGFsID0gYnRuLm1vZGFsITtcbiAgICAgIGNvbnN0IG9iaiA9IHsgW21vZGFsLnBhcmFtc05hbWUhXTogcmVjb3JkIH07XG4gICAgICAodGhpcy5tb2RhbEhlbHBlcltidG4udHlwZSA9PT0gJ21vZGFsJyA/ICdjcmVhdGUnIDogJ2NyZWF0ZVN0YXRpYyddIGFzIE56U2FmZUFueSkoXG4gICAgICAgIG1vZGFsLmNvbXBvbmVudCxcbiAgICAgICAgeyAuLi5vYmosIC4uLihtb2RhbC5wYXJhbXMgJiYgbW9kYWwucGFyYW1zKHJlY29yZCkpIH0sXG4gICAgICAgIGRlZXBNZXJnZUtleSh7fSwgdHJ1ZSwgY29nLm1vZGFsLCBtb2RhbClcbiAgICAgIClcbiAgICAgICAgLnBpcGUoZmlsdGVyKHcgPT4gdHlwZW9mIHcgIT09ICd1bmRlZmluZWQnKSlcbiAgICAgICAgLnN1YnNjcmliZSgocmVzOiBOelNhZmVBbnkpID0+IHRoaXMuYnRuQ2FsbGJhY2socmVjb3JkLCBidG4sIHJlcykpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoYnRuLnR5cGUgPT09ICdkcmF3ZXInKSB7XG4gICAgICBpZiAoY29nLmRyYXdlciEucHVyZVJlY29hcmQgPT09IHRydWUpIHtcbiAgICAgICAgcmVjb3JkID0gdGhpcy5zdENvbXAucHVyZUl0ZW0ocmVjb3JkKSE7XG4gICAgICB9XG4gICAgICBjb25zdCBkcmF3ZXIgPSBidG4uZHJhd2VyITtcbiAgICAgIGNvbnN0IG9iaiA9IHsgW2RyYXdlci5wYXJhbXNOYW1lIV06IHJlY29yZCB9O1xuICAgICAgdGhpcy5kcmF3ZXJIZWxwZXJcbiAgICAgICAgLmNyZWF0ZShcbiAgICAgICAgICBkcmF3ZXIudGl0bGUhLFxuICAgICAgICAgIGRyYXdlci5jb21wb25lbnQsXG4gICAgICAgICAgeyAuLi5vYmosIC4uLihkcmF3ZXIucGFyYW1zICYmIGRyYXdlci5wYXJhbXMocmVjb3JkKSkgfSxcbiAgICAgICAgICBkZWVwTWVyZ2VLZXkoe30sIHRydWUsIGNvZy5kcmF3ZXIsIGRyYXdlcilcbiAgICAgICAgKVxuICAgICAgICAucGlwZShmaWx0ZXIodyA9PiB0eXBlb2YgdyAhPT0gJ3VuZGVmaW5lZCcpKVxuICAgICAgICAuc3Vic2NyaWJlKHJlcyA9PiB0aGlzLmJ0bkNhbGxiYWNrKHJlY29yZCwgYnRuLCByZXMpKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKGJ0bi50eXBlID09PSAnbGluaycpIHtcbiAgICAgIGNvbnN0IGNsaWNrUmVzID0gdGhpcy5idG5DYWxsYmFjayhyZWNvcmQsIGJ0bik7XG4gICAgICBpZiAodHlwZW9mIGNsaWNrUmVzID09PSAnc3RyaW5nJykge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKGNsaWNrUmVzLCB7IHN0YXRlOiB0aGlzLnJvdXRlclN0YXRlIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmJ0bkNhbGxiYWNrKHJlY29yZCwgYnRuKTtcbiAgfVxuXG4gIHByaXZhdGUgYnRuQ2FsbGJhY2socmVjb3JkOiBTVERhdGEsIGJ0bjogU1RDb2x1bW5CdXR0b24sIG1vZGFsPzogTnpTYWZlQW55KTogTnpTYWZlQW55IHtcbiAgICBpZiAoIWJ0bi5jbGljaykgcmV0dXJuO1xuICAgIGlmICh0eXBlb2YgYnRuLmNsaWNrID09PSAnc3RyaW5nJykge1xuICAgICAgc3dpdGNoIChidG4uY2xpY2spIHtcbiAgICAgICAgY2FzZSAnbG9hZCc6XG4gICAgICAgICAgdGhpcy5zdENvbXAubG9hZCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdyZWxvYWQnOlxuICAgICAgICAgIHRoaXMuc3RDb21wLnJlbG9hZCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYnRuLmNsaWNrKHJlY29yZCwgbW9kYWwsIHRoaXMuc3RDb21wKTtcbiAgICB9XG4gIH1cbn1cbiIsIjxuZy10ZW1wbGF0ZSAjdGl0bGVUcGwgbGV0LWk+XG4gIDxzcGFuIFtpbm5lckhUTUxdPVwiaS5fdGV4dFwiPjwvc3Bhbj5cbiAgPHNtYWxsICpuZ0lmPVwiaS5vcHRpb25hbFwiIGNsYXNzPVwic3RfX2hlYWQtb3B0aW9uYWxcIiBbaW5uZXJIVE1MXT1cImkub3B0aW9uYWxcIj48L3NtYWxsPlxuICA8aVxuICAgICpuZ0lmPVwiaS5vcHRpb25hbEhlbHBcIlxuICAgIGNsYXNzPVwic3RfX2hlYWQtdGlwXCJcbiAgICBuei10b29sdGlwXG4gICAgW256VG9vbHRpcFRpdGxlXT1cImkub3B0aW9uYWxIZWxwXCJcbiAgICBuei1pY29uXG4gICAgbnpUeXBlPVwicXVlc3Rpb24tY2lyY2xlXCJcbiAgPjwvaT5cbjwvbmctdGVtcGxhdGU+XG48bmctdGVtcGxhdGUgI2Noa0FsbFRwbCBsZXQtY3VzdG9tPlxuICA8bGFiZWxcbiAgICBuei1jaGVja2JveFxuICAgIGNsYXNzPVwic3RfX2NoZWNrYWxsXCJcbiAgICBbbnpEaXNhYmxlZF09XCJfYWxsQ2hlY2tlZERpc2FibGVkXCJcbiAgICBbKG5nTW9kZWwpXT1cIl9hbGxDaGVja2VkXCJcbiAgICBbbnpJbmRldGVybWluYXRlXT1cIl9pbmRldGVybWluYXRlXCJcbiAgICAobmdNb2RlbENoYW5nZSk9XCJjaGVja0FsbCgpXCJcbiAgICBbY2xhc3MuYW50LXRhYmxlLXNlbGVjdGlvbi1zZWxlY3QtYWxsLWN1c3RvbV09XCJjdXN0b21cIlxuICA+PC9sYWJlbD5cbjwvbmctdGVtcGxhdGU+XG48bnotdGFibGVcbiAgI3RhYmxlXG4gIFtuekRhdGFdPVwiX2RhdGFcIlxuICBbKG56UGFnZUluZGV4KV09XCJwaVwiXG4gIChuelBhZ2VJbmRleENoYW5nZSk9XCJfY2hhbmdlKCdwaScpXCJcbiAgWyhuelBhZ2VTaXplKV09XCJwc1wiXG4gIChuelBhZ2VTaXplQ2hhbmdlKT1cIl9jaGFuZ2UoJ3BzJylcIlxuICBbbnpUb3RhbF09XCJ0b3RhbFwiXG4gIFtuelNob3dQYWdpbmF0aW9uXT1cIl9pc1BhZ2luYXRpb25cIlxuICBbbnpGcm9udFBhZ2luYXRpb25dPVwiZmFsc2VcIlxuICBbbnpCb3JkZXJlZF09XCJib3JkZXJlZFwiXG4gIFtuelNpemVdPVwic2l6ZVwiXG4gIFtuekxvYWRpbmddPVwibm9Db2x1bW5zIHx8IF9sb2FkaW5nXCJcbiAgW256TG9hZGluZ0RlbGF5XT1cImxvYWRpbmdEZWxheVwiXG4gIFtuekxvYWRpbmdJbmRpY2F0b3JdPVwibG9hZGluZ0luZGljYXRvclwiXG4gIFtuelRpdGxlXT1cImhlYWRlciFcIlxuICBbbnpGb290ZXJdPVwiZm9vdGVyIVwiXG4gIFtuelNjcm9sbF09XCJzY3JvbGxcIlxuICBbbnpWaXJ0dWFsSXRlbVNpemVdPVwidmlydHVhbEl0ZW1TaXplXCJcbiAgW256VmlydHVhbE1heEJ1ZmZlclB4XT1cInZpcnR1YWxNYXhCdWZmZXJQeFwiXG4gIFtuelZpcnR1YWxNaW5CdWZmZXJQeF09XCJ2aXJ0dWFsTWluQnVmZmVyUHhcIlxuICBbbnpWaXJ0dWFsRm9yVHJhY2tCeV09XCJ2aXJ0dWFsRm9yVHJhY2tCeVwiXG4gIFtuek5vUmVzdWx0XT1cIm5vUmVzdWx0IVwiXG4gIFtuelBhZ2VTaXplT3B0aW9uc109XCJwYWdlLnBhZ2VTaXplcyFcIlxuICBbbnpTaG93UXVpY2tKdW1wZXJdPVwicGFnZS5zaG93UXVpY2tKdW1wZXJcIlxuICBbbnpTaG93U2l6ZUNoYW5nZXJdPVwicGFnZS5zaG93U2l6ZVwiXG4gIFtuelBhZ2luYXRpb25Qb3NpdGlvbl09XCJwYWdlLnBvc2l0aW9uIVwiXG4gIFtuelBhZ2luYXRpb25UeXBlXT1cInBhZ2UudHlwZSFcIlxuICBbbnpJdGVtUmVuZGVyXT1cInBhZ2UuaXRlbVJlbmRlciFcIlxuICBbbnpTaW1wbGVdPVwicGFnZS5zaW1wbGVcIlxuICBbbnpTaG93VG90YWxdPVwidG90YWxUcGxcIlxuICBbbnpXaWR0aENvbmZpZ109XCJfd2lkdGhDb25maWdcIlxuICAoY29udGV4dG1lbnUpPVwib25Db250ZXh0bWVudSgkZXZlbnQpXCJcbiAgW2NsYXNzLnN0X19uby1jb2x1bW5dPVwibm9Db2x1bW5zXCJcbj5cbiAgPHRoZWFkICpuZ0lmPVwic2hvd0hlYWRlclwiPlxuICAgIDx0ciAqbmdGb3I9XCJsZXQgcm93IG9mIF9oZWFkZXJzOyBsZXQgcm93Rmlyc3QgPSBmaXJzdFwiPlxuICAgICAgPHRoICpuZ0lmPVwicm93Rmlyc3QgJiYgZXhwYW5kXCIgbnpXaWR0aD1cIjUwcHhcIiBbcm93U3Bhbl09XCJfaGVhZGVycy5sZW5ndGhcIj48L3RoPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaCBvZiByb3c7IGxldCBpbmRleCA9IGluZGV4OyBsZXQgbGFzdCA9IGxhc3RcIj5cbiAgICAgICAgPHRoXG4gICAgICAgICAgKmxldD1cImguY29sdW1uIGFzIF9jXCJcbiAgICAgICAgICBbY29sU3Bhbl09XCJoLmNvbFNwYW5cIlxuICAgICAgICAgIFtyb3dTcGFuXT1cImgucm93U3BhblwiXG4gICAgICAgICAgW256V2lkdGhdPVwiJGFueShfYykud2lkdGhcIlxuICAgICAgICAgIFtuekxlZnRdPVwiX2MuX2xlZnQhXCJcbiAgICAgICAgICBbbnpSaWdodF09XCJfYy5fcmlnaHQhXCJcbiAgICAgICAgICBbbmdDbGFzc109XCJfYy5fY2xhc3NOYW1lXCJcbiAgICAgICAgICBbYXR0ci5kYXRhLWNvbF09XCJfYy5pbmRleEtleVwiXG4gICAgICAgICAgW2F0dHIuZGF0YS1jb2wtaW5kZXhdPVwiaW5kZXhcIlxuICAgICAgICAgIFtuelNob3dTb3J0XT1cIl9jLl9zb3J0LmVuYWJsZWRcIlxuICAgICAgICAgIFtuelNvcnRPcmRlcl09XCIkYW55KF9jKS5fc29ydC5kZWZhdWx0XCJcbiAgICAgICAgICAobnpTb3J0T3JkZXJDaGFuZ2UpPVwic29ydChfYywgaW5kZXgsICRldmVudClcIlxuICAgICAgICAgIFtuekN1c3RvbUZpbHRlcl09XCIhIV9jLmZpbHRlclwiXG4gICAgICAgICAgW2NsYXNzLnN0X19oYXMtZmlsdGVyXT1cIl9jLmZpbHRlclwiXG4gICAgICAgICAgbnotcmVzaXphYmxlXG4gICAgICAgICAgW256RGlzYWJsZWRdPVwibGFzdCB8fCAkYW55KF9jKS5yZXNpemFibGUuZGlzYWJsZWRcIlxuICAgICAgICAgIFtuek1heFdpZHRoXT1cIiRhbnkoX2MpLnJlc2l6YWJsZS5tYXhXaWR0aFwiXG4gICAgICAgICAgW256TWluV2lkdGhdPVwiJGFueShfYykucmVzaXphYmxlLm1pbldpZHRoXCJcbiAgICAgICAgICBbbnpCb3VuZHNdPVwiJGFueShfYykucmVzaXphYmxlLmJvdW5kc1wiXG4gICAgICAgICAgW256UHJldmlld109XCIkYW55KF9jKS5yZXNpemFibGUucHJldmlld1wiXG4gICAgICAgICAgKG56UmVzaXplRW5kKT1cImNvbFJlc2l6ZSgkZXZlbnQsIF9jKVwiXG4gICAgICAgID5cbiAgICAgICAgICA8bnotcmVzaXplLWhhbmRsZSAqbmdJZj1cIiRhbnkoIWxhc3QgJiYgISRhbnkoX2MpLnJlc2l6YWJsZS5kaXNhYmxlZClcIiBuekRpcmVjdGlvbj1cInJpZ2h0XCI+XG4gICAgICAgICAgICA8aT48L2k+XG4gICAgICAgICAgPC9uei1yZXNpemUtaGFuZGxlPlxuICAgICAgICAgIDxuZy10ZW1wbGF0ZVxuICAgICAgICAgICAgI3JlbmRlclRpdGxlXG4gICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJfYy5fX3JlbmRlclRpdGxlIVwiXG4gICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IGguY29sdW1uLCBpbmRleDogaW5kZXggfVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIV9jLl9fcmVuZGVyVGl0bGU7IGVsc2UgcmVuZGVyVGl0bGVcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cIl9jLnR5cGVcIj5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ2NoZWNrYm94J1wiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJfYy5zZWxlY3Rpb25zIS5sZW5ndGggPT09IDBcIj5cbiAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJjaGtBbGxUcGxcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IGZhbHNlIH1cIiAvPlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJfYy5zZWxlY3Rpb25zIS5sZW5ndGggPiAwXCIgY2xhc3M9XCJhbnQtdGFibGUtc2VsZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiY2hrQWxsVHBsXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiB0cnVlIH1cIiAvPlxuICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIl9jLnNlbGVjdGlvbnMhLmxlbmd0aFwiIGNsYXNzPVwiYW50LXRhYmxlLXNlbGVjdGlvbi1leHRyYVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgbnotZHJvcGRvd25cbiAgICAgICAgICAgICAgICAgICAgICBuelBsYWNlbWVudD1cImJvdHRvbUxlZnRcIlxuICAgICAgICAgICAgICAgICAgICAgIFtuekRyb3Bkb3duTWVudV09XCJzZWxlY3Rpb25NZW51XCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImFudC10YWJsZS1zZWxlY3Rpb24tZG93biBzdF9fY2hlY2thbGwtc2VsZWN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxpIG56LWljb24gbnpUeXBlPVwiZG93blwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxuei1kcm9wZG93bi1tZW51ICNzZWxlY3Rpb25NZW51PVwibnpEcm9wZG93bk1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHVsIG56LW1lbnUgY2xhc3M9XCJhbnQtdGFibGUtc2VsZWN0aW9uLW1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICAgIG56LW1lbnUtaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IHJ3IG9mIF9jLnNlbGVjdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIl9yb3dTZWxlY3Rpb24ocncpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtpbm5lckhUTUxdPVwicncudGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICA8L256LWRyb3Bkb3duLW1lbnU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaERlZmF1bHQ+XG4gICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRpdGxlVHBsXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBfYy50aXRsZSB9XCIgLz5cbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiX2MuZmlsdGVyXCI+XG4gICAgICAgICAgICA8c3QtZmlsdGVyXG4gICAgICAgICAgICAgIG56LXRoLWV4dHJhXG4gICAgICAgICAgICAgIFtjb2xdPVwiaC5jb2x1bW5cIlxuICAgICAgICAgICAgICBbZl09XCJfYy5maWx0ZXJcIlxuICAgICAgICAgICAgICBbbG9jYWxlXT1cImxvY2FsZVwiXG4gICAgICAgICAgICAgIChuKT1cImhhbmRsZUZpbHRlck5vdGlmeSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgKGhhbmRsZSk9XCJfaGFuZGxlRmlsdGVyKF9jLCAkZXZlbnQpXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvdGg+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L3RyPlxuICA8L3RoZWFkPlxuICA8dGJvZHkgY2xhc3M9XCJzdF9fYm9keVwiPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhX2xvYWRpbmdcIj5cbiAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJib2R5SGVhZGVyIVwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogX3N0YXRpc3RpY2FsIH1cIiAvPlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxuZy10ZW1wbGF0ZSAjYm9keVRwbCBsZXQtaSBsZXQtaW5kZXg9XCJpbmRleFwiPlxuICAgICAgPHRyXG4gICAgICAgIFthdHRyLmRhdGEtaW5kZXhdPVwiaW5kZXhcIlxuICAgICAgICAoY2xpY2spPVwiX3Jvd0NsaWNrKCRldmVudCwgaSwgaW5kZXgsIGZhbHNlKVwiXG4gICAgICAgIChkYmxjbGljayk9XCJfcm93Q2xpY2soJGV2ZW50LCBpLCBpbmRleCwgdHJ1ZSlcIlxuICAgICAgICBbbmdDbGFzc109XCJpLl9yb3dDbGFzc05hbWVcIlxuICAgICAgPlxuICAgICAgICA8dGRcbiAgICAgICAgICAqbmdJZj1cImV4cGFuZFwiXG4gICAgICAgICAgW256U2hvd0V4cGFuZF09XCJleHBhbmQgJiYgaS5zaG93RXhwYW5kICE9PSBmYWxzZVwiXG4gICAgICAgICAgW256RXhwYW5kXT1cImkuZXhwYW5kXCJcbiAgICAgICAgICAobnpFeHBhbmRDaGFuZ2UpPVwiX2V4cGFuZENoYW5nZShpLCAkZXZlbnQpXCJcbiAgICAgICAgICAoY2xpY2spPVwiX3N0b3BQcm9wYWdhdGlvbigkZXZlbnQpXCJcbiAgICAgICAgICBueldpZHRoPVwiNTBweFwiXG4gICAgICAgID48L3RkPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBjIG9mIF9jb2x1bW5zOyBsZXQgY0lkeCA9IGluZGV4XCI+XG4gICAgICAgICAgPHRkXG4gICAgICAgICAgICAqbmdJZj1cImkuX3ZhbHVlc1tjSWR4XS5wcm9wcz8uY29sU3BhbiA+IDAgJiYgaS5fdmFsdWVzW2NJZHhdLnByb3BzPy5yb3dTcGFuID4gMFwiXG4gICAgICAgICAgICBbbnpMZWZ0XT1cIiEhYy5fbGVmdFwiXG4gICAgICAgICAgICBbbnpSaWdodF09XCIhIWMuX3JpZ2h0XCJcbiAgICAgICAgICAgIFthdHRyLmRhdGEtY29sLWluZGV4XT1cImNJZHhcIlxuICAgICAgICAgICAgW25nQ2xhc3NdPVwiYy5fY2xhc3NOYW1lXCJcbiAgICAgICAgICAgIFthdHRyLmNvbHNwYW5dPVwiaS5fdmFsdWVzW2NJZHhdLnByb3BzPy5jb2xTcGFuID09PSAxID8gbnVsbCA6IGkuX3ZhbHVlc1tjSWR4XS5wcm9wcz8uY29sU3BhblwiXG4gICAgICAgICAgICBbYXR0ci5yb3dzcGFuXT1cImkuX3ZhbHVlc1tjSWR4XS5wcm9wcz8ucm93U3BhbiA9PT0gMSA/IG51bGwgOiBpLl92YWx1ZXNbY0lkeF0ucHJvcHM/LnJvd1NwYW5cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwicmVzcG9uc2l2ZVwiIGNsYXNzPVwiYW50LXRhYmxlLXJlcF9fdGl0bGVcIj5cbiAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRpdGxlVHBsXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBjLnRpdGxlIH1cIiAvPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHN0LXRkIFtkYXRhXT1cIl9kYXRhXCIgW2ldPVwiaVwiIFtpbmRleF09XCJpbmRleFwiIFtjXT1cImNcIiBbY0lkeF09XCJjSWR4XCIgKG4pPVwiX2hhbmRsZVRkKCRldmVudClcIiAvPlxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC90cj5cbiAgICAgIDx0ciBbbnpFeHBhbmRdPVwiaS5leHBhbmRcIj5cbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImV4cGFuZFwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogaSwgaW5kZXg6IGluZGV4IH1cIiAvPlxuICAgICAgPC90cj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhdmlydHVhbFNjcm9sbFwiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaSBvZiBfZGF0YTsgbGV0IGluZGV4ID0gaW5kZXhcIj5cbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImJvZHlUcGxcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IGksIGluZGV4OiBpbmRleCB9XCIgLz5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ2aXJ0dWFsU2Nyb2xsXCI+XG4gICAgICA8bmctdGVtcGxhdGUgbnotdmlydHVhbC1zY3JvbGwgbGV0LWkgbGV0LWluZGV4PVwiaW5kZXhcIj5cbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImJvZHlUcGxcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IGksIGluZGV4OiBpbmRleCB9XCIgLz5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFfbG9hZGluZ1wiPlxuICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImJvZHkhXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBfc3RhdGlzdGljYWwgfVwiIC8+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIDwvdGJvZHk+XG4gIDxuZy10ZW1wbGF0ZSAjdG90YWxUcGwgbGV0LXJhbmdlPVwicmFuZ2VcIiBsZXQtdG90YWw+e3sgcmVuZGVyVG90YWwodG90YWwsIHJhbmdlKSB9fTwvbmctdGVtcGxhdGU+XG48L256LXRhYmxlPlxuPG56LWRyb3Bkb3duLW1lbnUgI2NvbnRleHRtZW51VHBsPVwibnpEcm9wZG93bk1lbnVcIj5cbiAgPHVsIG56LW1lbnUgY2xhc3M9XCJzdF9fY29udGV4dG1lbnVcIj5cbiAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpIG9mIGNvbnRleHRtZW51TGlzdFwiPlxuICAgICAgPGxpIG56LW1lbnUtaXRlbSAqbmdJZj1cImkuY2hpbGRyZW4hLmxlbmd0aCA9PT0gMFwiIChjbGljayk9XCJpLmZuIShpKVwiIFtpbm5lckhUTUxdPVwiaS50ZXh0XCI+PC9saT5cbiAgICAgIDxsaSBuei1zdWJtZW51ICpuZ0lmPVwiaS5jaGlsZHJlbiEubGVuZ3RoID4gMFwiIFtuelRpdGxlXT1cImkudGV4dFwiPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpIG56LW1lbnUtaXRlbSAqbmdGb3I9XCJsZXQgY2kgb2YgaS5jaGlsZHJlblwiIChjbGljayk9XCJjaS5mbiEoY2kpXCIgW2lubmVySFRNTF09XCJjaS50ZXh0XCI+PC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbGk+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIDwvdWw+XG48L256LWRyb3Bkb3duLW1lbnU+XG4iLCI8bmctdGVtcGxhdGUgI2J0blRwbCBsZXQtaSBsZXQtY2hpbGQ9XCJjaGlsZFwiPlxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWkudG9vbHRpcFwiPlxuICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJidG5JdGVtVHBsXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBpIH1cIj48L25nLXRlbXBsYXRlPlxuICA8L25nLWNvbnRhaW5lcj5cbiAgPHNwYW4gKm5nSWY9XCJpLnRvb2x0aXBcIiBuei10b29sdGlwIFtuelRvb2x0aXBUaXRsZV09XCJpLnRvb2x0aXBcIiBbY2xhc3MuZC1ibG9ja109XCJjaGlsZFwiIFtjbGFzcy53aWR0aC0xMDBdPVwiY2hpbGRcIj5cbiAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYnRuSXRlbVRwbFwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogaSB9XCI+PC9uZy10ZW1wbGF0ZT5cbiAgPC9zcGFuPlxuPC9uZy10ZW1wbGF0ZT5cbjxuZy10ZW1wbGF0ZSAjYnRuSXRlbVRwbCBsZXQtaT5cbiAgPGFcbiAgICAqbmdJZj1cImkucG9wXCJcbiAgICBuei1wb3Bjb25maXJtXG4gICAgW256UG9wY29uZmlybVRpdGxlXT1cImkucG9wLnRpdGxlXCJcbiAgICBbbnpJY29uXT1cImkucG9wLmljb25cIlxuICAgIFtuekNvbmRpdGlvbl09XCJpLnBvcC5jb25kaXRpb24oaSlcIlxuICAgIFtuekNhbmNlbFRleHRdPVwiaS5wb3AuY2FuY2VsVGV4dFwiXG4gICAgW256T2tUZXh0XT1cImkucG9wLm9rVGV4dFwiXG4gICAgW256T2tUeXBlXT1cImkucG9wLm9rVHlwZVwiXG4gICAgKG56T25Db25maXJtKT1cIl9idG4oaSlcIlxuICAgIGNsYXNzPVwic3RfX2J0bi10ZXh0XCJcbiAgICBbbmdDbGFzc109XCJpLl9jbGFzc05hbWVcIlxuICAgIChjbGljayk9XCJfc3RvcFByb3BhZ2F0aW9uKCRldmVudClcIlxuICA+XG4gICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImJ0blRleHRUcGxcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IGkgfVwiIC8+XG4gIDwvYT5cbiAgPGEgKm5nSWY9XCIhaS5wb3BcIiAoY2xpY2spPVwiX2J0bihpLCAkZXZlbnQpXCIgY2xhc3M9XCJzdF9fYnRuLXRleHRcIiBbbmdDbGFzc109XCJpLl9jbGFzc05hbWVcIj5cbiAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYnRuVGV4dFRwbFwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogaSB9XCIgLz5cbiAgPC9hPlxuPC9uZy10ZW1wbGF0ZT5cbjxuZy10ZW1wbGF0ZSAjYnRuVGV4dFRwbCBsZXQtaT5cbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImkuX2ljb25cIj5cbiAgICA8aVxuICAgICAgKm5nSWY9XCIhaS5faWNvbi5pY29uZm9udFwiXG4gICAgICBuei1pY29uXG4gICAgICBbbnpUeXBlXT1cImkuX2ljb24udHlwZVwiXG4gICAgICBbbnpUaGVtZV09XCJpLl9pY29uLnRoZW1lXCJcbiAgICAgIFtuelNwaW5dPVwiaS5faWNvbi5zcGluXCJcbiAgICAgIFtuelR3b3RvbmVDb2xvcl09XCJpLl9pY29uLnR3b1RvbmVDb2xvclwiXG4gICAgPjwvaT5cbiAgICA8aSAqbmdJZj1cImkuX2ljb24uaWNvbmZvbnRcIiBuei1pY29uIFtuekljb25mb250XT1cImkuX2ljb24uaWNvbmZvbnRcIj48L2k+XG4gIDwvbmctY29udGFpbmVyPlxuICA8c3BhbiBbaW5uZXJIVE1MXT1cImkuX3RleHRcIiBbbmdDbGFzc109XCJ7ICdwbC14cyc6IGkuX2ljb24gfVwiPjwvc3Bhbj5cbjwvbmctdGVtcGxhdGU+XG48bmctdGVtcGxhdGVcbiAgI3JlbmRlclxuICBbbmdUZW1wbGF0ZU91dGxldF09XCJjLl9fcmVuZGVyIVwiXG4gIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogaSwgaW5kZXg6IGluZGV4LCBjb2x1bW46IGMgfVwiXG4vPlxuPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFjLl9fcmVuZGVyOyBlbHNlIHJlbmRlclwiPlxuICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJjLnR5cGVcIj5cbiAgICA8bGFiZWxcbiAgICAgICpuZ1N3aXRjaENhc2U9XCInY2hlY2tib3gnXCJcbiAgICAgIG56LWNoZWNrYm94XG4gICAgICBbbnpEaXNhYmxlZF09XCJpLmRpc2FibGVkXCJcbiAgICAgIFtuZ01vZGVsXT1cImkuY2hlY2tlZFwiXG4gICAgICAobmdNb2RlbENoYW5nZSk9XCJfY2hlY2tib3goJGV2ZW50KVwiXG4gICAgPjwvbGFiZWw+XG4gICAgPGxhYmVsXG4gICAgICAqbmdTd2l0Y2hDYXNlPVwiJ3JhZGlvJ1wiXG4gICAgICBuei1yYWRpb1xuICAgICAgW256RGlzYWJsZWRdPVwiaS5kaXNhYmxlZFwiXG4gICAgICBbbmdNb2RlbF09XCJpLmNoZWNrZWRcIlxuICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiX3JhZGlvKClcIlxuICAgID48L2xhYmVsPlxuICAgIDxhXG4gICAgICAqbmdTd2l0Y2hDYXNlPVwiJ2xpbmsnXCJcbiAgICAgIChjbGljayk9XCJfbGluaygkZXZlbnQpXCJcbiAgICAgIFtpbm5lckhUTUxdPVwiaS5fdmFsdWVzW2NJZHhdLl90ZXh0XCJcbiAgICAgIFthdHRyLnRpdGxlXT1cImkuX3ZhbHVlc1tjSWR4XS50ZXh0XCJcbiAgICA+PC9hPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpLl92YWx1ZXNbY0lkeF0udGV4dFwiPlxuICAgICAgPG56LXRhZyAqbmdTd2l0Y2hDYXNlPVwiJ3RhZydcIiBbbnpDb2xvcl09XCJpLl92YWx1ZXNbY0lkeF0uY29sb3JcIj5cbiAgICAgICAgPHNwYW4gW2lubmVySFRNTF09XCJpLl92YWx1ZXNbY0lkeF0uX3RleHRcIj48L3NwYW4+XG4gICAgICA8L256LXRhZz5cbiAgICAgIDxuei1iYWRnZSAqbmdTd2l0Y2hDYXNlPVwiJ2JhZGdlJ1wiIFtuelN0YXR1c109XCJpLl92YWx1ZXNbY0lkeF0uY29sb3JcIiBbbnpUZXh0XT1cImkuX3ZhbHVlc1tjSWR4XS50ZXh0XCIgLz5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8bmctdGVtcGxhdGUgKm5nU3dpdGNoQ2FzZT1cIid3aWRnZXQnXCIgc3Qtd2lkZ2V0LWhvc3QgW3JlY29yZF09XCJpXCIgW2NvbHVtbl09XCJjXCIgLz5cbiAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaERlZmF1bHQ+XG4gICAgICA8c3BhblxuICAgICAgICAqbmdJZj1cImMuc2FmZVR5cGUgIT09ICd0ZXh0J1wiXG4gICAgICAgIFtpbm5lckhUTUxdPVwiaS5fdmFsdWVzW2NJZHhdLl90ZXh0XCJcbiAgICAgICAgW2F0dHIudGl0bGVdPVwiYy5faXNUcnVuY2F0ZSA/IGkuX3ZhbHVlc1tjSWR4XS50ZXh0IDogbnVsbFwiXG4gICAgICA+PC9zcGFuPlxuICAgICAgPHNwYW5cbiAgICAgICAgKm5nSWY9XCJjLnNhZmVUeXBlID09PSAndGV4dCdcIlxuICAgICAgICBbaW5uZXJUZXh0XT1cImkuX3ZhbHVlc1tjSWR4XS5fdGV4dFwiXG4gICAgICAgIFthdHRyLnRpdGxlXT1cImMuX2lzVHJ1bmNhdGUgPyBpLl92YWx1ZXNbY0lkeF0udGV4dCA6IG51bGxcIlxuICAgICAgPjwvc3Bhbj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9uZy1jb250YWluZXI+XG4gIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGJ0biBvZiBpLl92YWx1ZXNbY0lkeF0uYnV0dG9uczsgbGV0IGxhc3QgPSBsYXN0XCI+XG4gICAgPGEgKm5nSWY9XCJidG4uY2hpbGRyZW4hLmxlbmd0aCA+IDBcIiBuei1kcm9wZG93biBbbnpEcm9wZG93bk1lbnVdPVwiYnRuTWVudVwiIG56T3ZlcmxheUNsYXNzTmFtZT1cInN0X19idG4tc3ViXCI+XG4gICAgICA8c3BhbiBbaW5uZXJIVE1MXT1cImJ0bi5fdGV4dFwiPjwvc3Bhbj5cbiAgICAgIDxpIG56LWljb24gbnpUeXBlPVwiZG93blwiPjwvaT5cbiAgICA8L2E+XG4gICAgPG56LWRyb3Bkb3duLW1lbnUgI2J0bk1lbnU9XCJuekRyb3Bkb3duTWVudVwiPlxuICAgICAgPHVsIG56LW1lbnU+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHN1YkJ0biBvZiBidG4uY2hpbGRyZW4hXCI+XG4gICAgICAgICAgPGxpICpuZ0lmPVwic3ViQnRuLnR5cGUgIT09ICdkaXZpZGVyJ1wiIG56LW1lbnUtaXRlbSBbY2xhc3Muc3RfX2J0bi1kaXNhYmxlZF09XCJzdWJCdG4uX2Rpc2FibGVkXCI+XG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYnRuVHBsXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBzdWJCdG4sIGNoaWxkOiB0cnVlIH1cIiAvPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpICpuZ0lmPVwic3ViQnRuLnR5cGUgPT09ICdkaXZpZGVyJ1wiIG56LW1lbnUtZGl2aWRlcj48L2xpPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvdWw+XG4gICAgPC9uei1kcm9wZG93bi1tZW51PlxuICAgIDxzcGFuICpuZ0lmPVwiYnRuLmNoaWxkcmVuIS5sZW5ndGggPT09IDBcIiBbY2xhc3Muc3RfX2J0bi1kaXNhYmxlZF09XCJidG4uX2Rpc2FibGVkXCI+XG4gICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYnRuVHBsXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBidG4sIGNoaWxkOiBmYWxzZSB9XCIgLz5cbiAgICA8L3NwYW4+XG4gICAgPG56LWRpdmlkZXIgKm5nSWY9XCIhbGFzdFwiIG56VHlwZT1cInZlcnRpY2FsXCIgLz5cbiAgPC9uZy1jb250YWluZXI+XG48L25nLWNvbnRhaW5lcj5cbiJdfQ==