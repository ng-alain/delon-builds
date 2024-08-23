import { DecimalPipe, DOCUMENT } from '@angular/common';
import { booleanAttribute, ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, ElementRef, EventEmitter, inject, Input, numberAttribute, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { isObservable, of, filter, catchError, map, finalize, throwError, lastValueFrom } from 'rxjs';
import { ALAIN_I18N_TOKEN, DatePipe, DelonLocaleService, DrawerHelper, ModalHelper, YNPipe } from '@delon/theme';
import { deepCopy, deepMergeKey } from '@delon/util/other';
import { NzContextMenuService } from 'ng-zorro-antd/dropdown';
import { STColumnSource } from './st-column-source';
import { STDataSource } from './st-data-source';
import { STExport } from './st-export';
import { STRowSource } from './st-row.directive';
import { ST_DEFAULT_CONFIG } from './st.config';
import * as i0 from "@angular/core";
import * as i1 from "@delon/util/config";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
import * as i4 from "@delon/abc/let";
import * as i5 from "ng-zorro-antd/table";
import * as i6 from "ng-zorro-antd/icon";
import * as i7 from "ng-zorro-antd/checkbox";
import * as i8 from "ng-zorro-antd/menu";
import * as i9 from "ng-zorro-antd/dropdown";
import * as i10 from "ng-zorro-antd/tooltip";
import * as i11 from "ng-zorro-antd/resizable";
import * as i12 from "./st-filter.component";
import * as i13 from "@delon/abc/cell";
import * as i14 from "ng-zorro-antd/popconfirm";
import * as i15 from "ng-zorro-antd/badge";
import * as i16 from "ng-zorro-antd/divider";
import * as i17 from "ng-zorro-antd/radio";
import * as i18 from "ng-zorro-antd/tag";
import * as i19 from "./st-widget-host.directive";
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
        if ((typeof value === 'boolean' && !booleanAttribute(value)) ||
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
        this._resizable = typeof val === 'object' ? val : { disabled: !booleanAttribute(val) };
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
    constructor(configSrv) {
        this.i18nSrv = inject(ALAIN_I18N_TOKEN);
        this.el = inject(ElementRef).nativeElement;
        this.cdr = inject(ChangeDetectorRef);
        this.doc = inject(DOCUMENT);
        this.exportSrv = inject(STExport);
        this.columnSource = inject(STColumnSource);
        this.dataSource = inject(STDataSource);
        this.delonI18n = inject(DelonLocaleService);
        this.cms = inject(NzContextMenuService, { optional: true });
        this.destroy$ = inject(DestroyRef);
        this.totalTpl = ``;
        this.inied = false;
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
        this.expandIcon = null;
        this.responsive = true;
        this.error = new EventEmitter();
        this.change = new EventEmitter();
        this.virtualScroll = false;
        this.virtualItemSize = 54;
        this.virtualMaxBufferPx = 200;
        this.virtualMinBufferPx = 100;
        this.virtualForTrackBy = index => index;
        this.trackBy = (_, item) => item;
        this.delonI18n.change.pipe(takeUntilDestroyed()).subscribe(() => {
            this.locale = this.delonI18n.getData('st');
            if (this._columns.length > 0) {
                this.updateTotalTpl();
                this.cd();
            }
        });
        this.i18nSrv.change
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
        else if (booleanAttribute(total)) {
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
        const { pi, ps, data, req, res, page, total, singleSort, multiSort, rowClassName, _columns, _headers } = this;
        return this.dataSource
            .process({
            pi,
            ps,
            total,
            data,
            req,
            res,
            page,
            columns: _columns,
            headers: _headers,
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
            // Should be re-render in next tike when using virtual scroll
            // https://github.com/ng-alain/ng-alain/issues/1836
            if (this.cdkVirtualScrollViewport != null) {
                Promise.resolve().then(() => this.cdkVirtualScrollViewport?.checkViewportSize());
            }
            this._refCheck();
            this.changeEmit('loaded', result.list);
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
        const el = this.el;
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
    sort(col, value) {
        if (this.multiSort) {
            col._sort.default = value;
            col._sort.tick = this.dataSource.nextSortTick;
        }
        else {
            this._headers.forEach(row => {
                row.forEach(item => (item.column._sort.default = item.column === col ? value : null));
            });
        }
        this.cdr.detectChanges();
        this.loadPageData().subscribe(() => {
            const res = {
                value,
                map: this.dataSource.getReqSortMap(this.singleSort, this.multiSort, this._headers),
                column: col
            };
            this.changeEmit('sort', res);
        });
    }
    clearSort() {
        this._headers.forEach(row => {
            row.forEach(item => (item.column._sort.default = null));
        });
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
        (newData === true ? this.filteredData : of(data)).subscribe((res) => this.exportSrv.export({
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
            this.cms?.create(event, this.contextmenuTpl);
        });
    }
    // #endregion
    get cdkVirtualScrollViewport() {
        return this.orgTable?.cdkVirtualScrollViewport;
    }
    _resetColumns(options) {
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
    resetColumns(options) {
        return lastValueFrom(this._resetColumns(options));
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
        this.refreshColumns();
        if (!this.req.lazyLoad)
            this.loadPageData().subscribe();
        this.inied = true;
    }
    ngOnChanges(changes) {
        if (changes.loading) {
            this._loading = changes.loading.currentValue;
        }
        if (!this.inied)
            return;
        if (changes.columns) {
            this.refreshColumns().optimizeData();
        }
        if (changes.data) {
            this.loadPageData().subscribe();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.1", ngImport: i0, type: STComponent, deps: [{ token: i1.AlainConfigService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.1", type: STComponent, selector: "st", inputs: { req: "req", res: "res", page: "page", data: "data", columns: "columns", contextmenu: "contextmenu", ps: ["ps", "ps", (v) => numberAttribute(v, 10)], pi: ["pi", "pi", (v) => numberAttribute(v, 1)], total: ["total", "total", (v) => numberAttribute(v, 0)], loading: "loading", loadingDelay: ["loadingDelay", "loadingDelay", numberAttribute], loadingIndicator: "loadingIndicator", bordered: ["bordered", "bordered", booleanAttribute], size: "size", scroll: "scroll", singleSort: "singleSort", multiSort: "multiSort", rowClassName: "rowClassName", clickRowClassName: "clickRowClassName", widthMode: "widthMode", widthConfig: "widthConfig", resizable: "resizable", header: "header", showHeader: ["showHeader", "showHeader", booleanAttribute], footer: "footer", bodyHeader: "bodyHeader", body: "body", expandRowByClick: ["expandRowByClick", "expandRowByClick", booleanAttribute], expandAccordion: ["expandAccordion", "expandAccordion", booleanAttribute], expand: "expand", expandIcon: "expandIcon", noResult: "noResult", responsive: ["responsive", "responsive", booleanAttribute], responsiveHideHeaderFooter: ["responsiveHideHeaderFooter", "responsiveHideHeaderFooter", booleanAttribute], virtualScroll: ["virtualScroll", "virtualScroll", booleanAttribute], virtualItemSize: ["virtualItemSize", "virtualItemSize", numberAttribute], virtualMaxBufferPx: ["virtualMaxBufferPx", "virtualMaxBufferPx", numberAttribute], virtualMinBufferPx: ["virtualMinBufferPx", "virtualMinBufferPx", numberAttribute], customRequest: "customRequest", virtualForTrackBy: "virtualForTrackBy", trackBy: "trackBy" }, outputs: { error: "error", change: "change" }, host: { properties: { "class.st": "true", "class.st__p-left": "page.placement === 'left'", "class.st__p-center": "page.placement === 'center'", "class.st__width-strict": "widthMode.type === 'strict'", "class.st__row-class": "rowClassName", "class.ant-table-rep": "responsive", "class.ant-table-rep__hide-header-footer": "responsiveHideHeaderFooter" } }, providers: [STDataSource, STRowSource, STColumnSource, STExport, DatePipe, YNPipe, DecimalPipe], viewQueries: [{ propertyName: "orgTable", first: true, predicate: ["table"], descendants: true }, { propertyName: "contextmenuTpl", first: true, predicate: ["contextmenuTpl"], descendants: true }], exportAs: ["st"], usesOnChanges: true, ngImport: i0, template: "<ng-template #titleTpl let-i>\n  <span [innerHTML]=\"i._text\"></span>\n  @if (i.optional) {\n    <small class=\"st__head-optional\" [innerHTML]=\"i.optional\"></small>\n  }\n  @if (i.optionalHelp) {\n    <i class=\"st__head-tip\" nz-tooltip [nzTooltipTitle]=\"i.optionalHelp\" nz-icon nzType=\"question-circle\"></i>\n  }\n</ng-template>\n<ng-template #chkAllTpl let-custom>\n  <label\n    nz-checkbox\n    class=\"st__checkall\"\n    [nzDisabled]=\"_allCheckedDisabled\"\n    [(ngModel)]=\"_allChecked\"\n    [nzIndeterminate]=\"_indeterminate\"\n    (ngModelChange)=\"checkAll()\"\n    [class.ant-table-selection-select-all-custom]=\"custom\"\n  ></label>\n</ng-template>\n<nz-table\n  #table\n  [nzData]=\"_data\"\n  [(nzPageIndex)]=\"pi\"\n  (nzPageIndexChange)=\"_change('pi')\"\n  [(nzPageSize)]=\"ps\"\n  (nzPageSizeChange)=\"_change('ps')\"\n  [nzTotal]=\"total\"\n  [nzShowPagination]=\"_isPagination\"\n  [nzFrontPagination]=\"false\"\n  [nzBordered]=\"bordered\"\n  [nzSize]=\"size\"\n  [nzLoading]=\"noColumns || _loading\"\n  [nzLoadingDelay]=\"loadingDelay\"\n  [nzLoadingIndicator]=\"loadingIndicator\"\n  [nzTitle]=\"header!\"\n  [nzFooter]=\"footer!\"\n  [nzScroll]=\"scroll\"\n  [nzVirtualItemSize]=\"virtualItemSize\"\n  [nzVirtualMaxBufferPx]=\"virtualMaxBufferPx\"\n  [nzVirtualMinBufferPx]=\"virtualMinBufferPx\"\n  [nzVirtualForTrackBy]=\"virtualForTrackBy\"\n  [nzNoResult]=\"noResult!\"\n  [nzPageSizeOptions]=\"page.pageSizes!\"\n  [nzShowQuickJumper]=\"page.showQuickJumper\"\n  [nzShowSizeChanger]=\"page.showSize\"\n  [nzPaginationPosition]=\"page.position!\"\n  [nzPaginationType]=\"page.type!\"\n  [nzItemRender]=\"page.itemRender!\"\n  [nzSimple]=\"page.simple\"\n  [nzShowTotal]=\"totalTpl\"\n  [nzWidthConfig]=\"_widthConfig\"\n  (contextmenu)=\"onContextmenu($event)\"\n  [class.st__no-column]=\"noColumns\"\n>\n  @if (showHeader) {\n    <thead>\n      @for (row of _headers; track row) {\n        <tr>\n          @if ($first && expand) {\n            <th nzWidth=\"50px\" [rowSpan]=\"_headers.length\"></th>\n          }\n          @for (h of row; track h; let index = $index; let last = $last) {\n            <th\n              *let=\"h.column as _c\"\n              [colSpan]=\"h.colSpan\"\n              [rowSpan]=\"h.rowSpan\"\n              [nzWidth]=\"$any(_c).width\"\n              [nzLeft]=\"_c._left!\"\n              [nzRight]=\"_c._right!\"\n              [ngClass]=\"_c._className\"\n              [attr.data-col]=\"_c.indexKey\"\n              [attr.data-col-index]=\"index\"\n              [nzShowSort]=\"_c._sort.enabled\"\n              [nzSortOrder]=\"$any(_c)._sort.default\"\n              (nzSortOrderChange)=\"sort(_c, $event)\"\n              [nzCustomFilter]=\"!!_c.filter\"\n              [class.st__has-filter]=\"_c.filter\"\n              nz-resizable\n              [nzDisabled]=\"last || $any(_c).resizable.disabled\"\n              [nzMaxWidth]=\"$any(_c).resizable.maxWidth\"\n              [nzMinWidth]=\"$any(_c).resizable.minWidth\"\n              [nzBounds]=\"$any(_c).resizable.bounds\"\n              [nzPreview]=\"$any(_c).resizable.preview\"\n              (nzResizeEnd)=\"colResize($event, _c)\"\n            >\n              @if ($any(!last && !$any(_c).resizable.disabled)) {\n                <nz-resize-handle nzDirection=\"right\" (click)=\"_stopPropagation($event)\">\n                  <i></i>\n                </nz-resize-handle>\n              }\n              @if (_c.__renderTitle) {\n                <ng-template\n                  [ngTemplateOutlet]=\"_c.__renderTitle!\"\n                  [ngTemplateOutletContext]=\"{ $implicit: h.column, index: index }\"\n                />\n              } @else {\n                @switch (_c.type) {\n                  @case ('checkbox') {\n                    @if (_c.selections!.length === 0) {\n                      <ng-template [ngTemplateOutlet]=\"chkAllTpl\" [ngTemplateOutletContext]=\"{ $implicit: false }\" />\n                    } @else {\n                      <div class=\"ant-table-selection\">\n                        <ng-template [ngTemplateOutlet]=\"chkAllTpl\" [ngTemplateOutletContext]=\"{ $implicit: true }\" />\n                        @if (_c.selections!.length) {\n                          <div class=\"ant-table-selection-extra\">\n                            <div\n                              nz-dropdown\n                              nzPlacement=\"bottomLeft\"\n                              [nzDropdownMenu]=\"selectionMenu\"\n                              class=\"ant-table-selection-down st__checkall-selection\"\n                            >\n                              <i nz-icon nzType=\"down\"></i>\n                            </div>\n                          </div>\n                        }\n                        <nz-dropdown-menu #selectionMenu=\"nzDropdownMenu\">\n                          <ul nz-menu class=\"ant-table-selection-menu\">\n                            @for (rw of _c.selections; track $index) {\n                              <li nz-menu-item (click)=\"_rowSelection(rw)\" [innerHTML]=\"rw.text\"></li>\n                            }\n                          </ul>\n                        </nz-dropdown-menu>\n                      </div>\n                    }\n                  }\n                  @default {\n                    <ng-template [ngTemplateOutlet]=\"titleTpl\" [ngTemplateOutletContext]=\"{ $implicit: _c.title }\" />\n                  }\n                }\n              }\n              @if (_c.filter) {\n                <st-filter\n                  nz-th-extra\n                  [col]=\"h.column\"\n                  [f]=\"_c.filter\"\n                  [locale]=\"locale\"\n                  (n)=\"handleFilterNotify($event)\"\n                  (handle)=\"_handleFilter(_c, $event)\"\n                />\n              }\n            </th>\n          }\n        </tr>\n      }\n    </thead>\n  }\n  <tbody class=\"st__body\">\n    @if (!_loading) {\n      <ng-template [ngTemplateOutlet]=\"bodyHeader!\" [ngTemplateOutletContext]=\"{ $implicit: _statistical }\" />\n    }\n    <ng-template #bodyTpl let-i let-index=\"index\">\n      <tr\n        [attr.data-index]=\"index\"\n        (click)=\"_rowClick($event, i, index, false)\"\n        (dblclick)=\"_rowClick($event, i, index, true)\"\n        [ngClass]=\"i._rowClassName\"\n      >\n        @if (expand) {\n          <td\n            [nzShowExpand]=\"expand && i.showExpand !== false\"\n            [nzExpand]=\"i.expand\"\n            [nzExpandIcon]=\"expandIcon\"\n            (nzExpandChange)=\"_expandChange(i, $event)\"\n            (click)=\"_stopPropagation($event)\"\n            nzWidth=\"50px\"\n          ></td>\n        }\n        @for (c of _columns; track cIdx; let cIdx = $index) {\n          @if (i._values[cIdx].props?.colSpan > 0 && i._values[cIdx].props?.rowSpan > 0) {\n            <td\n              [nzLeft]=\"!!c._left\"\n              [nzRight]=\"!!c._right\"\n              [attr.data-col-index]=\"cIdx\"\n              [ngClass]=\"c._className\"\n              [attr.colspan]=\"i._values[cIdx].props?.colSpan === 1 ? null : i._values[cIdx].props?.colSpan\"\n              [attr.rowspan]=\"i._values[cIdx].props?.rowSpan === 1 ? null : i._values[cIdx].props?.rowSpan\"\n            >\n              @if (responsive) {\n                <span class=\"ant-table-rep__title\">\n                  <ng-template [ngTemplateOutlet]=\"titleTpl\" [ngTemplateOutletContext]=\"{ $implicit: c.title }\" />\n                </span>\n              }\n              <st-td [data]=\"_data\" [i]=\"i\" [index]=\"index\" [c]=\"c\" [cIdx]=\"cIdx\" (n)=\"_handleTd($event)\" />\n            </td>\n          }\n        }\n      </tr>\n      <tr [nzExpand]=\"i.expand\">\n        <ng-template [ngTemplateOutlet]=\"expand\" [ngTemplateOutletContext]=\"{ $implicit: i, index: index }\" />\n      </tr>\n    </ng-template>\n    @if (virtualScroll) {\n      <ng-template nz-virtual-scroll let-i let-index=\"index\">\n        <ng-template [ngTemplateOutlet]=\"bodyTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, index: index }\" />\n      </ng-template>\n    } @else {\n      @for (i of _data; track trackBy($index, i)) {\n        <ng-template [ngTemplateOutlet]=\"bodyTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, index: $index }\" />\n      }\n    }\n    @if (!_loading) {\n      <ng-template [ngTemplateOutlet]=\"body!\" [ngTemplateOutletContext]=\"{ $implicit: _statistical }\" />\n    }\n  </tbody>\n  <ng-template #totalTpl let-range=\"range\" let-total>{{ renderTotal(total, range) }}</ng-template>\n</nz-table>\n<nz-dropdown-menu #contextmenuTpl=\"nzDropdownMenu\">\n  <ul nz-menu class=\"st__contextmenu\">\n    @for (i of contextmenuList; track $index) {\n      @if (i.children!.length === 0) {\n        <li nz-menu-item (click)=\"i.fn!(i)\" [innerHTML]=\"i.text\"></li>\n      } @else {\n        <li nz-submenu [nzTitle]=\"i.text\">\n          <ul>\n            @for (ci of i.children; track $index) {\n              <li nz-menu-item (click)=\"ci.fn!(ci)\" [innerHTML]=\"ci.text\"></li>\n            }\n          </ul>\n        </li>\n      }\n    }\n  </ul>\n</nz-dropdown-menu>\n", dependencies: [{ kind: "directive", type: i0.forwardRef(() => i2.NgClass), selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i0.forwardRef(() => i2.NgTemplateOutlet), selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i0.forwardRef(() => i3.NgControlStatus), selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i0.forwardRef(() => i3.NgModel), selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i0.forwardRef(() => i4.LetDirective), selector: "[let]", inputs: ["let"] }, { kind: "component", type: i0.forwardRef(() => i5.NzTableComponent), selector: "nz-table", inputs: ["nzTableLayout", "nzShowTotal", "nzItemRender", "nzTitle", "nzFooter", "nzNoResult", "nzPageSizeOptions", "nzVirtualItemSize", "nzVirtualMaxBufferPx", "nzVirtualMinBufferPx", "nzVirtualForTrackBy", "nzLoadingDelay", "nzPageIndex", "nzPageSize", "nzTotal", "nzWidthConfig", "nzData", "nzCustomColumn", "nzPaginationPosition", "nzScroll", "noDataVirtualHeight", "nzPaginationType", "nzFrontPagination", "nzTemplateMode", "nzShowPagination", "nzLoading", "nzOuterBordered", "nzLoadingIndicator", "nzBordered", "nzSize", "nzShowSizeChanger", "nzHideOnSinglePage", "nzShowQuickJumper", "nzSimple"], outputs: ["nzPageSizeChange", "nzPageIndexChange", "nzQueryParams", "nzCurrentPageDataChange", "nzCustomColumnChange"], exportAs: ["nzTable"] }, { kind: "component", type: i0.forwardRef(() => i5.NzThAddOnComponent), selector: "th[nzColumnKey], th[nzSortFn], th[nzSortOrder], th[nzFilters], th[nzShowSort], th[nzShowFilter], th[nzCustomFilter]", inputs: ["nzColumnKey", "nzFilterMultiple", "nzSortOrder", "nzSortPriority", "nzSortDirections", "nzFilters", "nzSortFn", "nzFilterFn", "nzShowSort", "nzShowFilter", "nzCustomFilter"], outputs: ["nzCheckedChange", "nzSortOrderChange", "nzFilterChange"] }, { kind: "directive", type: i0.forwardRef(() => i5.NzTableCellDirective), selector: "th:not(.nz-disable-th):not([mat-cell]), td:not(.nz-disable-td):not([mat-cell])" }, { kind: "directive", type: i0.forwardRef(() => i5.NzThMeasureDirective), selector: "th", inputs: ["nzWidth", "colspan", "colSpan", "rowspan", "rowSpan"] }, { kind: "component", type: i0.forwardRef(() => i5.NzTdAddOnComponent), selector: "td[nzChecked], td[nzDisabled], td[nzIndeterminate], td[nzIndentSize], td[nzExpand], td[nzShowExpand], td[nzShowCheckbox]", inputs: ["nzChecked", "nzDisabled", "nzIndeterminate", "nzLabel", "nzIndentSize", "nzShowExpand", "nzShowCheckbox", "nzExpand", "nzExpandIcon"], outputs: ["nzCheckedChange", "nzExpandChange"] }, { kind: "component", type: i0.forwardRef(() => i5.NzTheadComponent), selector: "thead:not(.ant-table-thead)", outputs: ["nzSortOrderChange"] }, { kind: "component", type: i0.forwardRef(() => i5.NzTbodyComponent), selector: "tbody" }, { kind: "directive", type: i0.forwardRef(() => i5.NzTrDirective), selector: "tr:not([mat-row]):not([mat-header-row]):not([nz-table-measure-row]):not([nzExpand]):not([nz-table-fixed-row])" }, { kind: "directive", type: i0.forwardRef(() => i5.NzTableVirtualScrollDirective), selector: "[nz-virtual-scroll]", exportAs: ["nzVirtualScroll"] }, { kind: "directive", type: i0.forwardRef(() => i5.NzCellFixedDirective), selector: "td[nzRight],th[nzRight],td[nzLeft],th[nzLeft]", inputs: ["nzRight", "nzLeft", "colspan", "colSpan"] }, { kind: "directive", type: i0.forwardRef(() => i5.NzTrExpandDirective), selector: "tr[nzExpand]", inputs: ["nzExpand"] }, { kind: "component", type: i0.forwardRef(() => i5.NzTableFixedRowComponent), selector: "tr[nz-table-fixed-row], tr[nzExpand]" }, { kind: "directive", type: i0.forwardRef(() => i6.NzIconDirective), selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "component", type: i0.forwardRef(() => i7.NzCheckboxComponent), selector: "[nz-checkbox]", inputs: ["nzValue", "nzAutoFocus", "nzDisabled", "nzIndeterminate", "nzChecked", "nzId"], outputs: ["nzCheckedChange"], exportAs: ["nzCheckbox"] }, { kind: "directive", type: i0.forwardRef(() => i8.NzMenuDirective), selector: "[nz-menu]", inputs: ["nzInlineIndent", "nzTheme", "nzMode", "nzInlineCollapsed", "nzSelectable"], outputs: ["nzClick"], exportAs: ["nzMenu"] }, { kind: "component", type: i0.forwardRef(() => i8.NzMenuItemComponent), selector: "[nz-menu-item]", inputs: ["nzPaddingLeft", "nzDisabled", "nzSelected", "nzDanger", "nzMatchRouterExact", "nzMatchRouter"], exportAs: ["nzMenuItem"] }, { kind: "component", type: i0.forwardRef(() => i8.NzSubMenuComponent), selector: "[nz-submenu]", inputs: ["nzMenuClassName", "nzPaddingLeft", "nzTitle", "nzIcon", "nzOpen", "nzDisabled", "nzPlacement"], outputs: ["nzOpenChange"], exportAs: ["nzSubmenu"] }, { kind: "directive", type: i0.forwardRef(() => i9.NzDropDownDirective), selector: "[nz-dropdown]", inputs: ["nzDropdownMenu", "nzTrigger", "nzMatchWidthElement", "nzBackdrop", "nzClickHide", "nzDisabled", "nzVisible", "nzOverlayClassName", "nzOverlayStyle", "nzPlacement"], outputs: ["nzVisibleChange"], exportAs: ["nzDropdown"] }, { kind: "component", type: i0.forwardRef(() => i9.NzDropdownMenuComponent), selector: "nz-dropdown-menu", exportAs: ["nzDropdownMenu"] }, { kind: "directive", type: i0.forwardRef(() => i10.NzTooltipDirective), selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "cdkConnectedOverlayPush", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }, { kind: "directive", type: i0.forwardRef(() => i11.NzResizableDirective), selector: "[nz-resizable]", inputs: ["nzBounds", "nzMaxHeight", "nzMaxWidth", "nzMinHeight", "nzMinWidth", "nzGridColumnCount", "nzMaxColumn", "nzMinColumn", "nzLockAspectRatio", "nzPreview", "nzDisabled"], outputs: ["nzResize", "nzResizeEnd", "nzResizeStart"], exportAs: ["nzResizable"] }, { kind: "component", type: i0.forwardRef(() => i11.NzResizeHandleComponent), selector: "nz-resize-handle, [nz-resize-handle]", inputs: ["nzDirection", "nzCursorType"], outputs: ["nzMouseDown"], exportAs: ["nzResizeHandle"] }, { kind: "component", type: i0.forwardRef(() => i12.STFilterComponent), selector: "st-filter", inputs: ["col", "locale", "f"], outputs: ["n", "handle"] }, { kind: "component", type: i0.forwardRef(() => STTdComponent), selector: "st-td", inputs: ["c", "cIdx", "data", "i", "index"], outputs: ["n"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.1", ngImport: i0, type: STComponent, decorators: [{
            type: Component,
            args: [{ selector: 'st', exportAs: 'st', providers: [STDataSource, STRowSource, STColumnSource, STExport, DatePipe, YNPipe, DecimalPipe], host: {
                        '[class.st]': `true`,
                        '[class.st__p-left]': `page.placement === 'left'`,
                        '[class.st__p-center]': `page.placement === 'center'`,
                        '[class.st__width-strict]': `widthMode.type === 'strict'`,
                        '[class.st__row-class]': `rowClassName`,
                        '[class.ant-table-rep]': `responsive`,
                        '[class.ant-table-rep__hide-header-footer]': `responsiveHideHeaderFooter`
                    }, preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<ng-template #titleTpl let-i>\n  <span [innerHTML]=\"i._text\"></span>\n  @if (i.optional) {\n    <small class=\"st__head-optional\" [innerHTML]=\"i.optional\"></small>\n  }\n  @if (i.optionalHelp) {\n    <i class=\"st__head-tip\" nz-tooltip [nzTooltipTitle]=\"i.optionalHelp\" nz-icon nzType=\"question-circle\"></i>\n  }\n</ng-template>\n<ng-template #chkAllTpl let-custom>\n  <label\n    nz-checkbox\n    class=\"st__checkall\"\n    [nzDisabled]=\"_allCheckedDisabled\"\n    [(ngModel)]=\"_allChecked\"\n    [nzIndeterminate]=\"_indeterminate\"\n    (ngModelChange)=\"checkAll()\"\n    [class.ant-table-selection-select-all-custom]=\"custom\"\n  ></label>\n</ng-template>\n<nz-table\n  #table\n  [nzData]=\"_data\"\n  [(nzPageIndex)]=\"pi\"\n  (nzPageIndexChange)=\"_change('pi')\"\n  [(nzPageSize)]=\"ps\"\n  (nzPageSizeChange)=\"_change('ps')\"\n  [nzTotal]=\"total\"\n  [nzShowPagination]=\"_isPagination\"\n  [nzFrontPagination]=\"false\"\n  [nzBordered]=\"bordered\"\n  [nzSize]=\"size\"\n  [nzLoading]=\"noColumns || _loading\"\n  [nzLoadingDelay]=\"loadingDelay\"\n  [nzLoadingIndicator]=\"loadingIndicator\"\n  [nzTitle]=\"header!\"\n  [nzFooter]=\"footer!\"\n  [nzScroll]=\"scroll\"\n  [nzVirtualItemSize]=\"virtualItemSize\"\n  [nzVirtualMaxBufferPx]=\"virtualMaxBufferPx\"\n  [nzVirtualMinBufferPx]=\"virtualMinBufferPx\"\n  [nzVirtualForTrackBy]=\"virtualForTrackBy\"\n  [nzNoResult]=\"noResult!\"\n  [nzPageSizeOptions]=\"page.pageSizes!\"\n  [nzShowQuickJumper]=\"page.showQuickJumper\"\n  [nzShowSizeChanger]=\"page.showSize\"\n  [nzPaginationPosition]=\"page.position!\"\n  [nzPaginationType]=\"page.type!\"\n  [nzItemRender]=\"page.itemRender!\"\n  [nzSimple]=\"page.simple\"\n  [nzShowTotal]=\"totalTpl\"\n  [nzWidthConfig]=\"_widthConfig\"\n  (contextmenu)=\"onContextmenu($event)\"\n  [class.st__no-column]=\"noColumns\"\n>\n  @if (showHeader) {\n    <thead>\n      @for (row of _headers; track row) {\n        <tr>\n          @if ($first && expand) {\n            <th nzWidth=\"50px\" [rowSpan]=\"_headers.length\"></th>\n          }\n          @for (h of row; track h; let index = $index; let last = $last) {\n            <th\n              *let=\"h.column as _c\"\n              [colSpan]=\"h.colSpan\"\n              [rowSpan]=\"h.rowSpan\"\n              [nzWidth]=\"$any(_c).width\"\n              [nzLeft]=\"_c._left!\"\n              [nzRight]=\"_c._right!\"\n              [ngClass]=\"_c._className\"\n              [attr.data-col]=\"_c.indexKey\"\n              [attr.data-col-index]=\"index\"\n              [nzShowSort]=\"_c._sort.enabled\"\n              [nzSortOrder]=\"$any(_c)._sort.default\"\n              (nzSortOrderChange)=\"sort(_c, $event)\"\n              [nzCustomFilter]=\"!!_c.filter\"\n              [class.st__has-filter]=\"_c.filter\"\n              nz-resizable\n              [nzDisabled]=\"last || $any(_c).resizable.disabled\"\n              [nzMaxWidth]=\"$any(_c).resizable.maxWidth\"\n              [nzMinWidth]=\"$any(_c).resizable.minWidth\"\n              [nzBounds]=\"$any(_c).resizable.bounds\"\n              [nzPreview]=\"$any(_c).resizable.preview\"\n              (nzResizeEnd)=\"colResize($event, _c)\"\n            >\n              @if ($any(!last && !$any(_c).resizable.disabled)) {\n                <nz-resize-handle nzDirection=\"right\" (click)=\"_stopPropagation($event)\">\n                  <i></i>\n                </nz-resize-handle>\n              }\n              @if (_c.__renderTitle) {\n                <ng-template\n                  [ngTemplateOutlet]=\"_c.__renderTitle!\"\n                  [ngTemplateOutletContext]=\"{ $implicit: h.column, index: index }\"\n                />\n              } @else {\n                @switch (_c.type) {\n                  @case ('checkbox') {\n                    @if (_c.selections!.length === 0) {\n                      <ng-template [ngTemplateOutlet]=\"chkAllTpl\" [ngTemplateOutletContext]=\"{ $implicit: false }\" />\n                    } @else {\n                      <div class=\"ant-table-selection\">\n                        <ng-template [ngTemplateOutlet]=\"chkAllTpl\" [ngTemplateOutletContext]=\"{ $implicit: true }\" />\n                        @if (_c.selections!.length) {\n                          <div class=\"ant-table-selection-extra\">\n                            <div\n                              nz-dropdown\n                              nzPlacement=\"bottomLeft\"\n                              [nzDropdownMenu]=\"selectionMenu\"\n                              class=\"ant-table-selection-down st__checkall-selection\"\n                            >\n                              <i nz-icon nzType=\"down\"></i>\n                            </div>\n                          </div>\n                        }\n                        <nz-dropdown-menu #selectionMenu=\"nzDropdownMenu\">\n                          <ul nz-menu class=\"ant-table-selection-menu\">\n                            @for (rw of _c.selections; track $index) {\n                              <li nz-menu-item (click)=\"_rowSelection(rw)\" [innerHTML]=\"rw.text\"></li>\n                            }\n                          </ul>\n                        </nz-dropdown-menu>\n                      </div>\n                    }\n                  }\n                  @default {\n                    <ng-template [ngTemplateOutlet]=\"titleTpl\" [ngTemplateOutletContext]=\"{ $implicit: _c.title }\" />\n                  }\n                }\n              }\n              @if (_c.filter) {\n                <st-filter\n                  nz-th-extra\n                  [col]=\"h.column\"\n                  [f]=\"_c.filter\"\n                  [locale]=\"locale\"\n                  (n)=\"handleFilterNotify($event)\"\n                  (handle)=\"_handleFilter(_c, $event)\"\n                />\n              }\n            </th>\n          }\n        </tr>\n      }\n    </thead>\n  }\n  <tbody class=\"st__body\">\n    @if (!_loading) {\n      <ng-template [ngTemplateOutlet]=\"bodyHeader!\" [ngTemplateOutletContext]=\"{ $implicit: _statistical }\" />\n    }\n    <ng-template #bodyTpl let-i let-index=\"index\">\n      <tr\n        [attr.data-index]=\"index\"\n        (click)=\"_rowClick($event, i, index, false)\"\n        (dblclick)=\"_rowClick($event, i, index, true)\"\n        [ngClass]=\"i._rowClassName\"\n      >\n        @if (expand) {\n          <td\n            [nzShowExpand]=\"expand && i.showExpand !== false\"\n            [nzExpand]=\"i.expand\"\n            [nzExpandIcon]=\"expandIcon\"\n            (nzExpandChange)=\"_expandChange(i, $event)\"\n            (click)=\"_stopPropagation($event)\"\n            nzWidth=\"50px\"\n          ></td>\n        }\n        @for (c of _columns; track cIdx; let cIdx = $index) {\n          @if (i._values[cIdx].props?.colSpan > 0 && i._values[cIdx].props?.rowSpan > 0) {\n            <td\n              [nzLeft]=\"!!c._left\"\n              [nzRight]=\"!!c._right\"\n              [attr.data-col-index]=\"cIdx\"\n              [ngClass]=\"c._className\"\n              [attr.colspan]=\"i._values[cIdx].props?.colSpan === 1 ? null : i._values[cIdx].props?.colSpan\"\n              [attr.rowspan]=\"i._values[cIdx].props?.rowSpan === 1 ? null : i._values[cIdx].props?.rowSpan\"\n            >\n              @if (responsive) {\n                <span class=\"ant-table-rep__title\">\n                  <ng-template [ngTemplateOutlet]=\"titleTpl\" [ngTemplateOutletContext]=\"{ $implicit: c.title }\" />\n                </span>\n              }\n              <st-td [data]=\"_data\" [i]=\"i\" [index]=\"index\" [c]=\"c\" [cIdx]=\"cIdx\" (n)=\"_handleTd($event)\" />\n            </td>\n          }\n        }\n      </tr>\n      <tr [nzExpand]=\"i.expand\">\n        <ng-template [ngTemplateOutlet]=\"expand\" [ngTemplateOutletContext]=\"{ $implicit: i, index: index }\" />\n      </tr>\n    </ng-template>\n    @if (virtualScroll) {\n      <ng-template nz-virtual-scroll let-i let-index=\"index\">\n        <ng-template [ngTemplateOutlet]=\"bodyTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, index: index }\" />\n      </ng-template>\n    } @else {\n      @for (i of _data; track trackBy($index, i)) {\n        <ng-template [ngTemplateOutlet]=\"bodyTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, index: $index }\" />\n      }\n    }\n    @if (!_loading) {\n      <ng-template [ngTemplateOutlet]=\"body!\" [ngTemplateOutletContext]=\"{ $implicit: _statistical }\" />\n    }\n  </tbody>\n  <ng-template #totalTpl let-range=\"range\" let-total>{{ renderTotal(total, range) }}</ng-template>\n</nz-table>\n<nz-dropdown-menu #contextmenuTpl=\"nzDropdownMenu\">\n  <ul nz-menu class=\"st__contextmenu\">\n    @for (i of contextmenuList; track $index) {\n      @if (i.children!.length === 0) {\n        <li nz-menu-item (click)=\"i.fn!(i)\" [innerHTML]=\"i.text\"></li>\n      } @else {\n        <li nz-submenu [nzTitle]=\"i.text\">\n          <ul>\n            @for (ci of i.children; track $index) {\n              <li nz-menu-item (click)=\"ci.fn!(ci)\" [innerHTML]=\"ci.text\"></li>\n            }\n          </ul>\n        </li>\n      }\n    }\n  </ul>\n</nz-dropdown-menu>\n" }]
        }], ctorParameters: () => [{ type: i1.AlainConfigService }], propDecorators: { orgTable: [{
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
                type: Input,
                args: [{ transform: (v) => numberAttribute(v, 10) }]
            }], pi: [{
                type: Input,
                args: [{ transform: (v) => numberAttribute(v, 1) }]
            }], total: [{
                type: Input,
                args: [{ transform: (v) => numberAttribute(v, 0) }]
            }], loading: [{
                type: Input
            }], loadingDelay: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], loadingIndicator: [{
                type: Input
            }], bordered: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
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
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], footer: [{
                type: Input
            }], bodyHeader: [{
                type: Input
            }], body: [{
                type: Input
            }], expandRowByClick: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], expandAccordion: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], expand: [{
                type: Input
            }], expandIcon: [{
                type: Input
            }], noResult: [{
                type: Input
            }], responsive: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], responsiveHideHeaderFooter: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], error: [{
                type: Output
            }], change: [{
                type: Output
            }], virtualScroll: [{
                type: Input,
                args: [{ transform: booleanAttribute }]
            }], virtualItemSize: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], virtualMaxBufferPx: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], virtualMinBufferPx: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], customRequest: [{
                type: Input
            }], virtualForTrackBy: [{
                type: Input
            }], trackBy: [{
                type: Input
            }] } });
export class STTdComponent {
    constructor() {
        this.stComp = inject(STComponent, { host: true });
        this.router = inject(Router);
        this.modalHelper = inject(ModalHelper);
        this.drawerHelper = inject(DrawerHelper);
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.1", ngImport: i0, type: STTdComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.1", type: STTdComponent, selector: "st-td", inputs: { c: "c", cIdx: "cIdx", data: "data", i: "i", index: "index" }, outputs: { n: "n" }, ngImport: i0, template: "<ng-template #btnTpl let-i let-child=\"child\">\n  @if (i.tooltip) {\n    <span nz-tooltip [nzTooltipTitle]=\"i.tooltip\" [class.d-block]=\"child\" [class.width-100]=\"child\">\n      <ng-template [ngTemplateOutlet]=\"btnItemTpl\" [ngTemplateOutletContext]=\"{ $implicit: i }\" />\n    </span>\n  } @else {\n    <ng-template [ngTemplateOutlet]=\"btnItemTpl\" [ngTemplateOutletContext]=\"{ $implicit: i }\" />\n  }\n</ng-template>\n<ng-template #btnItemTpl let-i>\n  @if (i.pop) {\n    <a\n      nz-popconfirm\n      [nzPopconfirmTitle]=\"i.pop.title\"\n      [nzIcon]=\"i.pop.icon\"\n      [nzCondition]=\"i.pop.condition(i)\"\n      [nzCancelText]=\"i.pop.cancelText\"\n      [nzOkText]=\"i.pop.okText\"\n      [nzOkType]=\"i.pop.okType\"\n      (nzOnConfirm)=\"_btn(i)\"\n      class=\"st__btn-text\"\n      [ngClass]=\"i._className\"\n      (click)=\"_stopPropagation($event)\"\n    >\n      <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i }\" />\n    </a>\n  } @else {\n    <a (click)=\"_btn(i, $event)\" class=\"st__btn-text\" [ngClass]=\"i._className\">\n      <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i }\" />\n    </a>\n  }\n</ng-template>\n<ng-template #btnTextTpl let-i>\n  @if (i._icon) {\n    @if (i._icon.iconfont) {\n      <i nz-icon [nzIconfont]=\"i._icon.iconfont\"></i>\n    } @else {\n      <i\n        nz-icon\n        [nzType]=\"i._icon.type\"\n        [nzTheme]=\"i._icon.theme\"\n        [nzSpin]=\"i._icon.spin\"\n        [nzTwotoneColor]=\"i._icon.twoToneColor\"\n      ></i>\n    }\n  }\n  <span [innerHTML]=\"i._text\" [ngClass]=\"{ 'pl-xs': i._icon }\"></span>\n</ng-template>\n@if (c.__render) {\n  <ng-template [ngTemplateOutlet]=\"c.__render!\" [ngTemplateOutletContext]=\"{ $implicit: i, index: index, column: c }\" />\n} @else {\n  @switch (c.type) {\n    @case ('checkbox') {\n      <label nz-checkbox [nzDisabled]=\"i.disabled\" [ngModel]=\"i.checked\" (ngModelChange)=\"_checkbox($event)\"></label>\n    }\n    @case ('radio') {\n      <label nz-radio [nzDisabled]=\"i.disabled\" [ngModel]=\"i.checked\" (ngModelChange)=\"_radio()\"></label>\n    }\n    @case ('link') {\n      <a (click)=\"_link($event)\" [innerHTML]=\"i._values[cIdx]._text\" [attr.title]=\"i._values[cIdx].text\"></a>\n    }\n    @case ('tag') {\n      <nz-tag [nzColor]=\"i._values[cIdx].color\" [nz-tooltip]=\"i._values[cIdx].tooltip\">\n        <span [innerHTML]=\"i._values[cIdx]._text\"></span>\n      </nz-tag>\n    }\n    @case ('badge') {\n      <nz-badge\n        [nzStatus]=\"i._values[cIdx].color\"\n        [nzText]=\"i._values[cIdx].text\"\n        [nz-tooltip]=\"i._values[cIdx].tooltip\"\n      />\n    }\n    @case ('cell') {\n      <cell [value]=\"i._values[cIdx].text\" [options]=\"i._values[cIdx].cell ?? c.cell\" />\n    }\n    @case ('widget') {\n      <ng-template st-widget-host [record]=\"i\" [column]=\"c\" />\n    }\n    @default {\n      @if (c.safeType === 'text') {\n        <span [innerText]=\"i._values[cIdx]._text\" [attr.title]=\"c._isTruncate ? i._values[cIdx].text : null\"></span>\n      } @else {\n        <span [innerHTML]=\"i._values[cIdx]._text\" [attr.title]=\"c._isTruncate ? i._values[cIdx].text : null\"></span>\n      }\n    }\n  }\n  @for (btn of i._values[cIdx].buttons; track $index) {\n    @if (btn.children!.length > 0) {\n      <a nz-dropdown [nzDropdownMenu]=\"btnMenu\" nzOverlayClassName=\"st__btn-sub\">\n        <span [innerHTML]=\"btn._text\"></span>\n        <i nz-icon nzType=\"down\"></i>\n      </a>\n      <nz-dropdown-menu #btnMenu=\"nzDropdownMenu\">\n        <ul nz-menu>\n          @for (subBtn of btn.children; track $index) {\n            @if (subBtn.type === 'divider') {\n              <li nz-menu-divider></li>\n            } @else {\n              <li nz-menu-item [class.st__btn-disabled]=\"subBtn._disabled\">\n                <ng-template\n                  [ngTemplateOutlet]=\"btnTpl\"\n                  [ngTemplateOutletContext]=\"{ $implicit: subBtn, child: true }\"\n                />\n              </li>\n            }\n          }\n        </ul>\n      </nz-dropdown-menu>\n    } @else {\n      <span [class.st__btn-disabled]=\"btn._disabled\">\n        <ng-template [ngTemplateOutlet]=\"btnTpl\" [ngTemplateOutletContext]=\"{ $implicit: btn, child: false }\" />\n      </span>\n    }\n    @if (!$last) {\n      <nz-divider nzType=\"vertical\" />\n    }\n  }\n}\n", dependencies: [{ kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: i13.CellComponent, selector: "cell, [cell]", inputs: ["value", "options", "loading", "disabled"], outputs: ["valueChange"], exportAs: ["cell"] }, { kind: "directive", type: i14.NzPopconfirmDirective, selector: "[nz-popconfirm]", inputs: ["nzPopconfirmArrowPointAtCenter", "nzPopconfirmTitle", "nzPopconfirmTitleContext", "nz-popconfirm", "nzPopconfirmTrigger", "nzPopconfirmPlacement", "nzPopconfirmOrigin", "nzPopconfirmMouseEnterDelay", "nzPopconfirmMouseLeaveDelay", "nzPopconfirmOverlayClassName", "nzPopconfirmOverlayStyle", "nzPopconfirmVisible", "nzOkText", "nzOkType", "nzOkDisabled", "nzOkDanger", "nzCancelText", "nzBeforeConfirm", "nzIcon", "nzCondition", "nzPopconfirmShowArrow", "nzPopconfirmBackdrop", "nzAutofocus"], outputs: ["nzPopconfirmVisibleChange", "nzOnCancel", "nzOnConfirm"], exportAs: ["nzPopconfirm"] }, { kind: "directive", type: i6.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "component", type: i15.NzBadgeComponent, selector: "nz-badge", inputs: ["nzShowZero", "nzShowDot", "nzStandalone", "nzDot", "nzOverflowCount", "nzColor", "nzStyle", "nzText", "nzTitle", "nzStatus", "nzCount", "nzOffset", "nzSize"], exportAs: ["nzBadge"] }, { kind: "component", type: i7.NzCheckboxComponent, selector: "[nz-checkbox]", inputs: ["nzValue", "nzAutoFocus", "nzDisabled", "nzIndeterminate", "nzChecked", "nzId"], outputs: ["nzCheckedChange"], exportAs: ["nzCheckbox"] }, { kind: "component", type: i16.NzDividerComponent, selector: "nz-divider", inputs: ["nzText", "nzType", "nzOrientation", "nzDashed", "nzPlain"], exportAs: ["nzDivider"] }, { kind: "directive", type: i8.NzMenuDirective, selector: "[nz-menu]", inputs: ["nzInlineIndent", "nzTheme", "nzMode", "nzInlineCollapsed", "nzSelectable"], outputs: ["nzClick"], exportAs: ["nzMenu"] }, { kind: "component", type: i8.NzMenuItemComponent, selector: "[nz-menu-item]", inputs: ["nzPaddingLeft", "nzDisabled", "nzSelected", "nzDanger", "nzMatchRouterExact", "nzMatchRouter"], exportAs: ["nzMenuItem"] }, { kind: "directive", type: i8.NzMenuDividerDirective, selector: "[nz-menu-divider]", exportAs: ["nzMenuDivider"] }, { kind: "directive", type: i9.NzDropDownDirective, selector: "[nz-dropdown]", inputs: ["nzDropdownMenu", "nzTrigger", "nzMatchWidthElement", "nzBackdrop", "nzClickHide", "nzDisabled", "nzVisible", "nzOverlayClassName", "nzOverlayStyle", "nzPlacement"], outputs: ["nzVisibleChange"], exportAs: ["nzDropdown"] }, { kind: "directive", type: i9.NzDropDownADirective, selector: "a[nz-dropdown]" }, { kind: "component", type: i9.NzDropdownMenuComponent, selector: "nz-dropdown-menu", exportAs: ["nzDropdownMenu"] }, { kind: "component", type: i17.NzRadioComponent, selector: "[nz-radio],[nz-radio-button]", inputs: ["nzValue", "nzDisabled", "nzAutoFocus", "nz-radio-button"], exportAs: ["nzRadio"] }, { kind: "component", type: i18.NzTagComponent, selector: "nz-tag", inputs: ["nzMode", "nzColor", "nzChecked", "nzBordered"], outputs: ["nzOnClose", "nzCheckedChange"], exportAs: ["nzTag"] }, { kind: "directive", type: i10.NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "cdkConnectedOverlayPush", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }, { kind: "directive", type: i19.STWidgetHostDirective, selector: "[st-widget-host]", inputs: ["record", "column"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.1", ngImport: i0, type: STTdComponent, decorators: [{
            type: Component,
            args: [{ selector: 'st-td', preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<ng-template #btnTpl let-i let-child=\"child\">\n  @if (i.tooltip) {\n    <span nz-tooltip [nzTooltipTitle]=\"i.tooltip\" [class.d-block]=\"child\" [class.width-100]=\"child\">\n      <ng-template [ngTemplateOutlet]=\"btnItemTpl\" [ngTemplateOutletContext]=\"{ $implicit: i }\" />\n    </span>\n  } @else {\n    <ng-template [ngTemplateOutlet]=\"btnItemTpl\" [ngTemplateOutletContext]=\"{ $implicit: i }\" />\n  }\n</ng-template>\n<ng-template #btnItemTpl let-i>\n  @if (i.pop) {\n    <a\n      nz-popconfirm\n      [nzPopconfirmTitle]=\"i.pop.title\"\n      [nzIcon]=\"i.pop.icon\"\n      [nzCondition]=\"i.pop.condition(i)\"\n      [nzCancelText]=\"i.pop.cancelText\"\n      [nzOkText]=\"i.pop.okText\"\n      [nzOkType]=\"i.pop.okType\"\n      (nzOnConfirm)=\"_btn(i)\"\n      class=\"st__btn-text\"\n      [ngClass]=\"i._className\"\n      (click)=\"_stopPropagation($event)\"\n    >\n      <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i }\" />\n    </a>\n  } @else {\n    <a (click)=\"_btn(i, $event)\" class=\"st__btn-text\" [ngClass]=\"i._className\">\n      <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i }\" />\n    </a>\n  }\n</ng-template>\n<ng-template #btnTextTpl let-i>\n  @if (i._icon) {\n    @if (i._icon.iconfont) {\n      <i nz-icon [nzIconfont]=\"i._icon.iconfont\"></i>\n    } @else {\n      <i\n        nz-icon\n        [nzType]=\"i._icon.type\"\n        [nzTheme]=\"i._icon.theme\"\n        [nzSpin]=\"i._icon.spin\"\n        [nzTwotoneColor]=\"i._icon.twoToneColor\"\n      ></i>\n    }\n  }\n  <span [innerHTML]=\"i._text\" [ngClass]=\"{ 'pl-xs': i._icon }\"></span>\n</ng-template>\n@if (c.__render) {\n  <ng-template [ngTemplateOutlet]=\"c.__render!\" [ngTemplateOutletContext]=\"{ $implicit: i, index: index, column: c }\" />\n} @else {\n  @switch (c.type) {\n    @case ('checkbox') {\n      <label nz-checkbox [nzDisabled]=\"i.disabled\" [ngModel]=\"i.checked\" (ngModelChange)=\"_checkbox($event)\"></label>\n    }\n    @case ('radio') {\n      <label nz-radio [nzDisabled]=\"i.disabled\" [ngModel]=\"i.checked\" (ngModelChange)=\"_radio()\"></label>\n    }\n    @case ('link') {\n      <a (click)=\"_link($event)\" [innerHTML]=\"i._values[cIdx]._text\" [attr.title]=\"i._values[cIdx].text\"></a>\n    }\n    @case ('tag') {\n      <nz-tag [nzColor]=\"i._values[cIdx].color\" [nz-tooltip]=\"i._values[cIdx].tooltip\">\n        <span [innerHTML]=\"i._values[cIdx]._text\"></span>\n      </nz-tag>\n    }\n    @case ('badge') {\n      <nz-badge\n        [nzStatus]=\"i._values[cIdx].color\"\n        [nzText]=\"i._values[cIdx].text\"\n        [nz-tooltip]=\"i._values[cIdx].tooltip\"\n      />\n    }\n    @case ('cell') {\n      <cell [value]=\"i._values[cIdx].text\" [options]=\"i._values[cIdx].cell ?? c.cell\" />\n    }\n    @case ('widget') {\n      <ng-template st-widget-host [record]=\"i\" [column]=\"c\" />\n    }\n    @default {\n      @if (c.safeType === 'text') {\n        <span [innerText]=\"i._values[cIdx]._text\" [attr.title]=\"c._isTruncate ? i._values[cIdx].text : null\"></span>\n      } @else {\n        <span [innerHTML]=\"i._values[cIdx]._text\" [attr.title]=\"c._isTruncate ? i._values[cIdx].text : null\"></span>\n      }\n    }\n  }\n  @for (btn of i._values[cIdx].buttons; track $index) {\n    @if (btn.children!.length > 0) {\n      <a nz-dropdown [nzDropdownMenu]=\"btnMenu\" nzOverlayClassName=\"st__btn-sub\">\n        <span [innerHTML]=\"btn._text\"></span>\n        <i nz-icon nzType=\"down\"></i>\n      </a>\n      <nz-dropdown-menu #btnMenu=\"nzDropdownMenu\">\n        <ul nz-menu>\n          @for (subBtn of btn.children; track $index) {\n            @if (subBtn.type === 'divider') {\n              <li nz-menu-divider></li>\n            } @else {\n              <li nz-menu-item [class.st__btn-disabled]=\"subBtn._disabled\">\n                <ng-template\n                  [ngTemplateOutlet]=\"btnTpl\"\n                  [ngTemplateOutletContext]=\"{ $implicit: subBtn, child: true }\"\n                />\n              </li>\n            }\n          }\n        </ul>\n      </nz-dropdown-menu>\n    } @else {\n      <span [class.st__btn-disabled]=\"btn._disabled\">\n        <ng-template [ngTemplateOutlet]=\"btnTpl\" [ngTemplateOutletContext]=\"{ $implicit: btn, child: false }\" />\n      </span>\n    }\n    @if (!$last) {\n      <nz-divider nzType=\"vertical\" />\n    }\n  }\n}\n" }]
        }], propDecorators: { c: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3N0L3N0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9zdC9zdC5jb21wb25lbnQuaHRtbCIsIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9zdC9zdC10ZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3hELE9BQU8sRUFFTCxnQkFBZ0IsRUFDaEIsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFDTCxlQUFlLEVBRWYsTUFBTSxFQUtOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDaEUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQWMsRUFBRSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWxILE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsUUFBUSxFQUNSLGtCQUFrQixFQUNsQixZQUFZLEVBRVosV0FBVyxFQUNYLE1BQU0sRUFDUCxNQUFNLGNBQWMsQ0FBQztBQUV0QixPQUFPLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRTNELE9BQU8sRUFBRSxvQkFBb0IsRUFBMkIsTUFBTSx3QkFBd0IsQ0FBQztBQUl2RixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9C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QUssTUFBTTtvQkFDVCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNuQixNQUFNO2dCQUNSLEtBQUssUUFBUTtvQkFDWCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO29CQUNyQixNQUFNO1lBQ1YsQ0FBQztRQUNILENBQUM7YUFBTSxDQUFDO1lBQ04sT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9DLENBQUM7SUFDSCxDQUFDOzhHQXpHVSxhQUFhO2tHQUFiLGFBQWEsMElFNzRCMUIsNDFJQXVIQTs7MkZGc3hCYSxhQUFhO2tCQVB6QixTQUFTOytCQUNFLE9BQU8sdUJBRUksS0FBSyxtQkFDVCx1QkFBdUIsQ0FBQyxNQUFNLGlCQUNoQyxpQkFBaUIsQ0FBQyxJQUFJOzhCQVE1QixDQUFDO3NCQUFULEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxDQUFDO3NCQUFULEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNhLENBQUM7c0JBQW5CLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IENka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zY3JvbGxpbmcnO1xuaW1wb3J0IHsgRGVjaW1hbFBpcGUsIERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIGJvb2xlYW5BdHRyaWJ1dGUsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBEZXN0cm95UmVmLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIGluamVjdCxcbiAgSW5wdXQsXG4gIG51bWJlckF0dHJpYnV0ZSxcbiAgT25DaGFuZ2VzLFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZSxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFRyYWNrQnlGdW5jdGlvbixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRha2VVbnRpbERlc3Ryb3llZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvcnhqcy1pbnRlcm9wJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBpc09ic2VydmFibGUsIE9ic2VydmFibGUsIG9mLCBmaWx0ZXIsIGNhdGNoRXJyb3IsIG1hcCwgZmluYWxpemUsIHRocm93RXJyb3IsIGxhc3RWYWx1ZUZyb20gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHtcbiAgQUxBSU5fSTE4Tl9UT0tFTixcbiAgRGF0ZVBpcGUsXG4gIERlbG9uTG9jYWxlU2VydmljZSxcbiAgRHJhd2VySGVscGVyLFxuICBMb2NhbGVEYXRhLFxuICBNb2RhbEhlbHBlcixcbiAgWU5QaXBlXG59IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UsIEFsYWluU1RDb25maWcgfSBmcm9tICdAZGVsb24vdXRpbC9jb25maWcnO1xuaW1wb3J0IHsgZGVlcENvcHksIGRlZXBNZXJnZUtleSB9IGZyb20gJ0BkZWxvbi91dGlsL290aGVyJztcbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IE56Q29udGV4dE1lbnVTZXJ2aWNlLCBOekRyb3Bkb3duTWVudUNvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvZHJvcGRvd24nO1xuaW1wb3J0IHsgTnpSZXNpemVFdmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvcmVzaXphYmxlJztcbmltcG9ydCB7IE56VGFibGVDb21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL3RhYmxlJztcblxuaW1wb3J0IHsgU1RDb2x1bW5Tb3VyY2UgfSBmcm9tICcuL3N0LWNvbHVtbi1zb3VyY2UnO1xuaW1wb3J0IHsgU1REYXRhU291cmNlLCBTVERhdGFTb3VyY2VPcHRpb25zLCBTVERhdGFTb3VyY2VSZXN1bHQgfSBmcm9tICcuL3N0LWRhdGEtc291cmNlJztcbmltcG9ydCB7IFNURXhwb3J0IH0gZnJvbSAnLi9zdC1leHBvcnQnO1xuaW1wb3J0IHsgU1RSb3dTb3VyY2UgfSBmcm9tICcuL3N0LXJvdy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU1RfREVGQVVMVF9DT05GSUcgfSBmcm9tICcuL3N0LmNvbmZpZyc7XG5pbXBvcnQgdHlwZSB7XG4gIFNUQ2hhbmdlLFxuICBTVENoYW5nZVR5cGUsXG4gIFNUQ2xpY2tSb3dDbGFzc05hbWUsXG4gIFNUQ2xpY2tSb3dDbGFzc05hbWVUeXBlLFxuICBTVENvbHVtbixcbiAgU1RDb2x1bW5CdXR0b24sXG4gIFNUQ29sdW1uU2FmZVR5cGUsXG4gIFNUQ29sdW1uU2VsZWN0aW9uLFxuICBTVENvbnRleHRtZW51Rm4sXG4gIFNUQ29udGV4dG1lbnVJdGVtLFxuICBTVEN1c3RvbVJlcXVlc3RPcHRpb25zLFxuICBTVERhdGEsXG4gIFNURXJyb3IsXG4gIFNURXhwb3J0T3B0aW9ucyxcbiAgU1RMb2FkT3B0aW9ucyxcbiAgU1RNdWx0aVNvcnQsXG4gIFNUUGFnZSxcbiAgU1RSZXEsXG4gIFNUUmVzLFxuICBTVFJlc2V0Q29sdW1uc09wdGlvbixcbiAgU1RSZXNpemFibGUsXG4gIFNUUm93Q2xhc3NOYW1lLFxuICBTVFNpbmdsZVNvcnQsXG4gIFNUU3RhdGlzdGljYWxSZXN1bHRzLFxuICBTVFdpZHRoTW9kZVxufSBmcm9tICcuL3N0LmludGVyZmFjZXMnO1xuaW1wb3J0IHR5cGUgeyBfU1RDb2x1bW4sIF9TVERhdGFWYWx1ZSwgX1NUSGVhZGVyLCBfU1RUZE5vdGlmeSwgX1NUVGROb3RpZnlUeXBlIH0gZnJvbSAnLi9zdC50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N0JyxcbiAgZXhwb3J0QXM6ICdzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdC5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW1NURGF0YVNvdXJjZSwgU1RSb3dTb3VyY2UsIFNUQ29sdW1uU291cmNlLCBTVEV4cG9ydCwgRGF0ZVBpcGUsIFlOUGlwZSwgRGVjaW1hbFBpcGVdLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5zdF0nOiBgdHJ1ZWAsXG4gICAgJ1tjbGFzcy5zdF9fcC1sZWZ0XSc6IGBwYWdlLnBsYWNlbWVudCA9PT0gJ2xlZnQnYCxcbiAgICAnW2NsYXNzLnN0X19wLWNlbnRlcl0nOiBgcGFnZS5wbGFjZW1lbnQgPT09ICdjZW50ZXInYCxcbiAgICAnW2NsYXNzLnN0X193aWR0aC1zdHJpY3RdJzogYHdpZHRoTW9kZS50eXBlID09PSAnc3RyaWN0J2AsXG4gICAgJ1tjbGFzcy5zdF9fcm93LWNsYXNzXSc6IGByb3dDbGFzc05hbWVgLFxuICAgICdbY2xhc3MuYW50LXRhYmxlLXJlcF0nOiBgcmVzcG9uc2l2ZWAsXG4gICAgJ1tjbGFzcy5hbnQtdGFibGUtcmVwX19oaWRlLWhlYWRlci1mb290ZXJdJzogYHJlc3BvbnNpdmVIaWRlSGVhZGVyRm9vdGVyYFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU1RDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xuICBwcml2YXRlIHJlYWRvbmx5IGkxOG5TcnYgPSBpbmplY3QoQUxBSU5fSTE4Tl9UT0tFTik7XG4gIHByaXZhdGUgcmVhZG9ubHkgZWw6IEhUTUxFbGVtZW50ID0gaW5qZWN0KEVsZW1lbnRSZWYpLm5hdGl2ZUVsZW1lbnQ7XG4gIHByaXZhdGUgcmVhZG9ubHkgY2RyID0gaW5qZWN0KENoYW5nZURldGVjdG9yUmVmKTtcbiAgcHJpdmF0ZSByZWFkb25seSBkb2MgPSBpbmplY3QoRE9DVU1FTlQpO1xuICBwcml2YXRlIHJlYWRvbmx5IGV4cG9ydFNydiA9IGluamVjdChTVEV4cG9ydCk7XG4gIHByaXZhdGUgcmVhZG9ubHkgY29sdW1uU291cmNlID0gaW5qZWN0KFNUQ29sdW1uU291cmNlKTtcbiAgcHJpdmF0ZSByZWFkb25seSBkYXRhU291cmNlID0gaW5qZWN0KFNURGF0YVNvdXJjZSk7XG4gIHByaXZhdGUgcmVhZG9ubHkgZGVsb25JMThuID0gaW5qZWN0KERlbG9uTG9jYWxlU2VydmljZSk7XG4gIHByaXZhdGUgcmVhZG9ubHkgY21zID0gaW5qZWN0KE56Q29udGV4dE1lbnVTZXJ2aWNlLCB7IG9wdGlvbmFsOiB0cnVlIH0pO1xuICBwcml2YXRlIHJlYWRvbmx5IGRlc3Ryb3kkID0gaW5qZWN0KERlc3Ryb3lSZWYpO1xuXG4gIHByaXZhdGUgdG90YWxUcGwgPSBgYDtcbiAgcHJpdmF0ZSBpbmllZCA9IGZhbHNlO1xuICBjb2chOiBBbGFpblNUQ29uZmlnO1xuICBwcml2YXRlIF9yZXEhOiBTVFJlcTtcbiAgcHJpdmF0ZSBfcmVzITogU1RSZXM7XG4gIHByaXZhdGUgX3BhZ2UhOiBTVFBhZ2U7XG4gIHByaXZhdGUgX3dpZHRoTW9kZSE6IFNUV2lkdGhNb2RlO1xuICBwcml2YXRlIGN1c3RvbVdpZHRoQ29uZmlnOiBib29sZWFuID0gZmFsc2U7XG4gIF93aWR0aENvbmZpZzogc3RyaW5nW10gPSBbXTtcbiAgbG9jYWxlOiBMb2NhbGVEYXRhID0ge307XG4gIF9sb2FkaW5nID0gZmFsc2U7XG4gIF9kYXRhOiBTVERhdGFbXSA9IFtdO1xuICBfc3RhdGlzdGljYWw6IFNUU3RhdGlzdGljYWxSZXN1bHRzID0ge307XG4gIF9pc1BhZ2luYXRpb24gPSB0cnVlO1xuICBfYWxsQ2hlY2tlZCA9IGZhbHNlO1xuICBfYWxsQ2hlY2tlZERpc2FibGVkID0gZmFsc2U7XG4gIF9pbmRldGVybWluYXRlID0gZmFsc2U7XG4gIF9oZWFkZXJzOiBfU1RIZWFkZXJbXVtdID0gW107XG4gIF9jb2x1bW5zOiBfU1RDb2x1bW5bXSA9IFtdO1xuICBjb250ZXh0bWVudUxpc3Q6IFNUQ29udGV4dG1lbnVJdGVtW10gPSBbXTtcbiAgQFZpZXdDaGlsZCgndGFibGUnKSByZWFkb25seSBvcmdUYWJsZSE6IE56VGFibGVDb21wb25lbnQ8U1REYXRhPjtcbiAgQFZpZXdDaGlsZCgnY29udGV4dG1lbnVUcGwnKSByZWFkb25seSBjb250ZXh0bWVudVRwbCE6IE56RHJvcGRvd25NZW51Q29tcG9uZW50O1xuXG4gIEBJbnB1dCgpXG4gIGdldCByZXEoKTogU1RSZXEge1xuICAgIHJldHVybiB0aGlzLl9yZXE7XG4gIH1cbiAgc2V0IHJlcSh2YWx1ZTogU1RSZXEpIHtcbiAgICB0aGlzLl9yZXEgPSBkZWVwTWVyZ2VLZXkoe30sIHRydWUsIHRoaXMuY29nLnJlcSwgdmFsdWUpO1xuICB9XG4gIC8qKiDov5Tlm57kvZPphY3nva4gKi9cbiAgQElucHV0KClcbiAgZ2V0IHJlcygpOiBTVFJlcyB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcztcbiAgfVxuICBzZXQgcmVzKHZhbHVlOiBTVFJlcykge1xuICAgIGNvbnN0IGl0ZW0gPSAodGhpcy5fcmVzID0gZGVlcE1lcmdlS2V5KHt9LCB0cnVlLCB0aGlzLmNvZy5yZXMsIHZhbHVlKSk7XG4gICAgY29uc3QgcmVOYW1lID0gaXRlbS5yZU5hbWUhO1xuICAgIGlmICh0eXBlb2YgcmVOYW1lICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkocmVOYW1lLmxpc3QpKSByZU5hbWUubGlzdCA9IHJlTmFtZS5saXN0IS5zcGxpdCgnLicpO1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHJlTmFtZS50b3RhbCkpIHJlTmFtZS50b3RhbCA9IHJlTmFtZS50b3RhbCEuc3BsaXQoJy4nKTtcbiAgICB9XG4gICAgdGhpcy5fcmVzID0gaXRlbTtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgcGFnZSgpOiBTVFBhZ2Uge1xuICAgIHJldHVybiB0aGlzLl9wYWdlO1xuICB9XG4gIHNldCBwYWdlKHZhbHVlOiBTVFBhZ2UpIHtcbiAgICB0aGlzLl9wYWdlID0geyAuLi50aGlzLmNvZy5wYWdlLCAuLi52YWx1ZSB9O1xuICAgIHRoaXMudXBkYXRlVG90YWxUcGwoKTtcbiAgfVxuICBASW5wdXQoKSBkYXRhPzogc3RyaW5nIHwgU1REYXRhW10gfCBPYnNlcnZhYmxlPFNURGF0YVtdPjtcbiAgQElucHV0KCkgY29sdW1ucz86IFNUQ29sdW1uW10gfCBudWxsO1xuICBASW5wdXQoKSBjb250ZXh0bWVudT86IFNUQ29udGV4dG1lbnVGbiB8IG51bGw7XG4gIEBJbnB1dCh7IHRyYW5zZm9ybTogKHY6IHVua25vd24pID0+IG51bWJlckF0dHJpYnV0ZSh2LCAxMCkgfSkgcHMgPSAxMDtcbiAgQElucHV0KHsgdHJhbnNmb3JtOiAodjogdW5rbm93bikgPT4gbnVtYmVyQXR0cmlidXRlKHYsIDEpIH0pIHBpID0gMTtcbiAgQElucHV0KHsgdHJhbnNmb3JtOiAodjogdW5rbm93bikgPT4gbnVtYmVyQXR0cmlidXRlKHYsIDApIH0pIHRvdGFsID0gMDtcbiAgQElucHV0KCkgbG9hZGluZzogYm9vbGVhbiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoeyB0cmFuc2Zvcm06IG51bWJlckF0dHJpYnV0ZSB9KSBsb2FkaW5nRGVsYXkgPSAwO1xuICBASW5wdXQoKSBsb2FkaW5nSW5kaWNhdG9yOiBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoeyB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGUgfSkgYm9yZGVyZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgc2l6ZSE6ICdzbWFsbCcgfCAnbWlkZGxlJyB8ICdkZWZhdWx0JztcbiAgQElucHV0KCkgc2Nyb2xsOiB7IHg/OiBzdHJpbmcgfCBudWxsOyB5Pzogc3RyaW5nIHwgbnVsbCB9ID0geyB4OiBudWxsLCB5OiBudWxsIH07XG4gIEBJbnB1dCgpIHNpbmdsZVNvcnQ/OiBTVFNpbmdsZVNvcnQgfCBudWxsO1xuICBwcml2YXRlIF9tdWx0aVNvcnQ/OiBTVE11bHRpU29ydDtcbiAgQElucHV0KClcbiAgZ2V0IG11bHRpU29ydCgpOiBOelNhZmVBbnkge1xuICAgIHJldHVybiB0aGlzLl9tdWx0aVNvcnQ7XG4gIH1cbiAgc2V0IG11bHRpU29ydCh2YWx1ZTogTnpTYWZlQW55KSB7XG4gICAgaWYgKFxuICAgICAgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nICYmICFib29sZWFuQXR0cmlidXRlKHZhbHVlKSkgfHxcbiAgICAgICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDApXG4gICAgKSB7XG4gICAgICB0aGlzLl9tdWx0aVNvcnQgPSB1bmRlZmluZWQ7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX211bHRpU29ydCA9IHtcbiAgICAgIC4uLih0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnID8gdmFsdWUgOiB7fSlcbiAgICB9O1xuICB9XG4gIEBJbnB1dCgpIHJvd0NsYXNzTmFtZT86IFNUUm93Q2xhc3NOYW1lIHwgbnVsbDtcbiAgQElucHV0KCkgY2xpY2tSb3dDbGFzc05hbWU/OiBTVENsaWNrUm93Q2xhc3NOYW1lIHwgbnVsbDtcbiAgQElucHV0KClcbiAgc2V0IHdpZHRoTW9kZSh2YWx1ZTogU1RXaWR0aE1vZGUpIHtcbiAgICB0aGlzLl93aWR0aE1vZGUgPSB7IC4uLnRoaXMuY29nLndpZHRoTW9kZSwgLi4udmFsdWUgfTtcbiAgfVxuICBnZXQgd2lkdGhNb2RlKCk6IFNUV2lkdGhNb2RlIHtcbiAgICByZXR1cm4gdGhpcy5fd2lkdGhNb2RlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCB3aWR0aENvbmZpZyh2YWw6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fd2lkdGhDb25maWcgPSB2YWw7XG4gICAgdGhpcy5jdXN0b21XaWR0aENvbmZpZyA9IHZhbCAmJiB2YWwubGVuZ3RoID4gMDtcbiAgfVxuICBwcml2YXRlIF9yZXNpemFibGU/OiBTVFJlc2l6YWJsZTtcbiAgQElucHV0KClcbiAgc2V0IHJlc2l6YWJsZSh2YWw6IFNUUmVzaXphYmxlIHwgYm9vbGVhbiB8IHN0cmluZykge1xuICAgIHRoaXMuX3Jlc2l6YWJsZSA9IHR5cGVvZiB2YWwgPT09ICdvYmplY3QnID8gdmFsIDogeyBkaXNhYmxlZDogIWJvb2xlYW5BdHRyaWJ1dGUodmFsKSB9O1xuICB9XG4gIEBJbnB1dCgpIGhlYWRlcj86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbDtcbiAgQElucHV0KHsgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pIHNob3dIZWFkZXIgPSB0cnVlO1xuICBASW5wdXQoKSBmb290ZXI/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGw7XG4gIEBJbnB1dCgpIGJvZHlIZWFkZXI/OiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogU1RTdGF0aXN0aWNhbFJlc3VsdHMgfT4gfCBudWxsO1xuICBASW5wdXQoKSBib2R5PzogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IFNUU3RhdGlzdGljYWxSZXN1bHRzIH0+IHwgbnVsbDtcbiAgQElucHV0KHsgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pIGV4cGFuZFJvd0J5Q2xpY2sgPSBmYWxzZTtcbiAgQElucHV0KHsgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pIGV4cGFuZEFjY29yZGlvbiA9IGZhbHNlO1xuICBASW5wdXQoKSBleHBhbmQ6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBOelNhZmVBbnk7IGluZGV4OiBudW1iZXIgfT4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgZXhwYW5kSWNvbjogVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgbm9SZXN1bHQ/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGw7XG4gIEBJbnB1dCh7IHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZSB9KSByZXNwb25zaXZlOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KHsgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pIHJlc3BvbnNpdmVIaWRlSGVhZGVyRm9vdGVyPzogYm9vbGVhbjtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGVycm9yID0gbmV3IEV2ZW50RW1pdHRlcjxTVEVycm9yPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxTVENoYW5nZT4oKTtcbiAgQElucHV0KHsgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pIHZpcnR1YWxTY3JvbGwgPSBmYWxzZTtcbiAgQElucHV0KHsgdHJhbnNmb3JtOiBudW1iZXJBdHRyaWJ1dGUgfSkgdmlydHVhbEl0ZW1TaXplID0gNTQ7XG4gIEBJbnB1dCh7IHRyYW5zZm9ybTogbnVtYmVyQXR0cmlidXRlIH0pIHZpcnR1YWxNYXhCdWZmZXJQeCA9IDIwMDtcbiAgQElucHV0KHsgdHJhbnNmb3JtOiBudW1iZXJBdHRyaWJ1dGUgfSkgdmlydHVhbE1pbkJ1ZmZlclB4ID0gMTAwO1xuICBASW5wdXQoKSBjdXN0b21SZXF1ZXN0PzogKG9wdGlvbnM6IFNUQ3VzdG9tUmVxdWVzdE9wdGlvbnMpID0+IE9ic2VydmFibGU8TnpTYWZlQW55PjtcbiAgQElucHV0KCkgdmlydHVhbEZvclRyYWNrQnk6IFRyYWNrQnlGdW5jdGlvbjxTVERhdGE+ID0gaW5kZXggPT4gaW5kZXg7XG4gIEBJbnB1dCgpIHRyYWNrQnk6IFRyYWNrQnlGdW5jdGlvbjxTVERhdGE+ID0gKF8sIGl0ZW0pID0+IGl0ZW07XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbnVtYmVyIG9mIHRoZSBjdXJyZW50IHBhZ2VcbiAgICovXG4gIGdldCBjb3VudCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9kYXRhLmxlbmd0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGRhdGEgb2YgdGhlIGN1cnJlbnQgcGFnZVxuICAgKi9cbiAgZ2V0IGxpc3QoKTogU1REYXRhW10ge1xuICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICB9XG5cbiAgZ2V0IG5vQ29sdW1ucygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb2x1bW5zID09IG51bGw7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihjb25maWdTcnY6IEFsYWluQ29uZmlnU2VydmljZSkge1xuICAgIHRoaXMuZGVsb25JMThuLmNoYW5nZS5waXBlKHRha2VVbnRpbERlc3Ryb3llZCgpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5sb2NhbGUgPSB0aGlzLmRlbG9uSTE4bi5nZXREYXRhKCdzdCcpO1xuICAgICAgaWYgKHRoaXMuX2NvbHVtbnMubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVRvdGFsVHBsKCk7XG4gICAgICAgIHRoaXMuY2QoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuaTE4blNydi5jaGFuZ2VcbiAgICAgIC5waXBlKFxuICAgICAgICB0YWtlVW50aWxEZXN0cm95ZWQoKSxcbiAgICAgICAgZmlsdGVyKCgpID0+IHRoaXMuX2NvbHVtbnMubGVuZ3RoID4gMClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5yZWZyZXNoQ29sdW1ucygpKTtcblxuICAgIHRoaXMuc2V0Q29nKGNvbmZpZ1Nydi5tZXJnZSgnc3QnLCBTVF9ERUZBVUxUX0NPTkZJRykhKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0Q29nKGNvZzogQWxhaW5TVENvbmZpZyk6IHZvaWQge1xuICAgIGNvbnN0IGNvcHlNdWx0aVNvcnQgPSB7IC4uLmNvZy5tdWx0aVNvcnQgfTtcbiAgICAvLyBCZWNhdXNlIG11bHRpU29ydC5nbG9iYWwgd2lsbCBhZmZlY3QgdGhlIHJlc3VsdCwgaXQgc2hvdWxkIGJlIHJlbW92ZWQgZmlyc3QsIGFuZCBtdWx0aVNvcnQgd2lsbCBiZSBvcGVyYXRlZCBhZ2FpbiBhZnRlciBwcm9jZXNzaW5nLlxuICAgIGRlbGV0ZSBjb2cubXVsdGlTb3J0O1xuICAgIHRoaXMuY29nID0gY29nO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29nKTtcblxuICAgIGlmIChjb3B5TXVsdGlTb3J0Lmdsb2JhbCAhPT0gZmFsc2UpIHtcbiAgICAgIHRoaXMubXVsdGlTb3J0ID0gY29weU11bHRpU29ydDtcbiAgICB9XG4gICAgdGhpcy5jb2x1bW5Tb3VyY2Uuc2V0Q29nKGNvZyk7XG4gICAgdGhpcy5kYXRhU291cmNlLnNldENvZyhjb2cpO1xuICB9XG5cbiAgY2QoKTogdGhpcyB7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJpdmF0ZSByZWZyZXNoRGF0YSgpOiB0aGlzIHtcbiAgICB0aGlzLl9kYXRhID0gWy4uLnRoaXMuX2RhdGFdO1xuICAgIHJldHVybiB0aGlzLmNkKCk7XG4gIH1cblxuICByZW5kZXJUb3RhbCh0b3RhbDogc3RyaW5nLCByYW5nZTogc3RyaW5nW10pOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnRvdGFsVHBsXG4gICAgICA/IHRoaXMudG90YWxUcGwucmVwbGFjZSgne3t0b3RhbH19JywgdG90YWwpLnJlcGxhY2UoJ3t7cmFuZ2VbMF19fScsIHJhbmdlWzBdKS5yZXBsYWNlKCd7e3JhbmdlWzFdfX0nLCByYW5nZVsxXSlcbiAgICAgIDogJyc7XG4gIH1cblxuICBwcml2YXRlIGNoYW5nZUVtaXQodHlwZTogU1RDaGFuZ2VUeXBlLCBkYXRhPzogTnpTYWZlQW55KTogdm9pZCB7XG4gICAgY29uc3QgcmVzOiBTVENoYW5nZSA9IHtcbiAgICAgIHR5cGUsXG4gICAgICBwaTogdGhpcy5waSxcbiAgICAgIHBzOiB0aGlzLnBzLFxuICAgICAgdG90YWw6IHRoaXMudG90YWxcbiAgICB9O1xuICAgIGlmIChkYXRhICE9IG51bGwpIHtcbiAgICAgIHJlc1t0eXBlXSA9IGRhdGE7XG4gICAgfVxuICAgIHRoaXMuY2hhbmdlLmVtaXQocmVzKTtcbiAgfVxuXG4gIC8vICNyZWdpb24gZGF0YVxuXG4gIC8qKlxuICAgKiDojrflj5bov4fmu6TlkI7miYDmnInmlbDmja5cbiAgICogLSDmnKzlnLDmlbDmja7vvJrljIXlkKvmjpLluo/jgIHov4fmu6TlkI7kuI3liIbpobXmlbDmja5cbiAgICogLSDov5znqIvmlbDmja7vvJrkuI3kvKDpgJIgYHBpYOOAgWBwc2Ag5Lik5Liq5Y+C5pWwXG4gICAqL1xuICBnZXQgZmlsdGVyZWREYXRhKCk6IE9ic2VydmFibGU8U1REYXRhW10+IHtcbiAgICByZXR1cm4gdGhpcy5sb2FkRGF0YSh7IHBhZ2luYXRvcjogZmFsc2UgfSBhcyB1bmtub3duIGFzIFNURGF0YVNvdXJjZU9wdGlvbnMpLnBpcGUobWFwKHJlcyA9PiByZXMubGlzdCkpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVUb3RhbFRwbCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IHRvdGFsIH0gPSB0aGlzLnBhZ2U7XG4gICAgaWYgKHR5cGVvZiB0b3RhbCA9PT0gJ3N0cmluZycgJiYgdG90YWwubGVuZ3RoKSB7XG4gICAgICB0aGlzLnRvdGFsVHBsID0gdG90YWw7XG4gICAgfSBlbHNlIGlmIChib29sZWFuQXR0cmlidXRlKHRvdGFsKSkge1xuICAgICAgdGhpcy50b3RhbFRwbCA9IHRoaXMubG9jYWxlLnRvdGFsO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRvdGFsVHBsID0gJyc7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRMb2FkaW5nKHZhbDogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICh0aGlzLmxvYWRpbmcgPT0gbnVsbCkge1xuICAgICAgdGhpcy5fbG9hZGluZyA9IHZhbDtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGxvYWREYXRhKG9wdGlvbnM/OiBTVERhdGFTb3VyY2VPcHRpb25zKTogT2JzZXJ2YWJsZTxTVERhdGFTb3VyY2VSZXN1bHQ+IHtcbiAgICBjb25zdCB7IHBpLCBwcywgZGF0YSwgcmVxLCByZXMsIHBhZ2UsIHRvdGFsLCBzaW5nbGVTb3J0LCBtdWx0aVNvcnQsIHJvd0NsYXNzTmFtZSwgX2NvbHVtbnMsIF9oZWFkZXJzIH0gPSB0aGlzO1xuICAgIHJldHVybiB0aGlzLmRhdGFTb3VyY2VcbiAgICAgIC5wcm9jZXNzKHtcbiAgICAgICAgcGksXG4gICAgICAgIHBzLFxuICAgICAgICB0b3RhbCxcbiAgICAgICAgZGF0YSxcbiAgICAgICAgcmVxLFxuICAgICAgICByZXMsXG4gICAgICAgIHBhZ2UsXG4gICAgICAgIGNvbHVtbnM6IF9jb2x1bW5zLFxuICAgICAgICBoZWFkZXJzOiBfaGVhZGVycyxcbiAgICAgICAgc2luZ2xlU29ydCxcbiAgICAgICAgbXVsdGlTb3J0LFxuICAgICAgICByb3dDbGFzc05hbWUsXG4gICAgICAgIHBhZ2luYXRvcjogdHJ1ZSxcbiAgICAgICAgY3VzdG9tUmVxdWVzdDogdGhpcy5jdXN0b21SZXF1ZXN0IHx8IHRoaXMuY29nLmN1c3RvbVJlcXVlc3QsXG4gICAgICAgIC4uLm9wdGlvbnNcbiAgICAgIH0pXG4gICAgICAucGlwZSh0YWtlVW50aWxEZXN0cm95ZWQodGhpcy5kZXN0cm95JCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkUGFnZURhdGEoKTogT2JzZXJ2YWJsZTx0aGlzPiB7XG4gICAgdGhpcy5zZXRMb2FkaW5nKHRydWUpO1xuICAgIHJldHVybiB0aGlzLmxvYWREYXRhKCkucGlwZShcbiAgICAgIGZpbmFsaXplKCgpID0+IHRoaXMuc2V0TG9hZGluZyhmYWxzZSkpLFxuICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB7XG4gICAgICAgIHRoaXMuZXJyb3IuZW1pdCh7IHR5cGU6ICdyZXEnLCBlcnJvciB9KTtcbiAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoKCkgPT4gZXJyb3IpO1xuICAgICAgfSksXG4gICAgICBtYXAocmVzdWx0ID0+IHtcbiAgICAgICAgY29uc3QgdW5kZWZpbmVkU3RyaW5nID0gJ3VuZGVmaW5lZCc7XG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0LnBpICE9PSB1bmRlZmluZWRTdHJpbmcpIHtcbiAgICAgICAgICB0aGlzLnBpID0gcmVzdWx0LnBpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0LnBzICE9PSB1bmRlZmluZWRTdHJpbmcpIHtcbiAgICAgICAgICB0aGlzLnBzID0gcmVzdWx0LnBzO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0LnRvdGFsICE9PSB1bmRlZmluZWRTdHJpbmcpIHtcbiAgICAgICAgICB0aGlzLnRvdGFsID0gcmVzdWx0LnRvdGFsO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0LnBhZ2VTaG93ICE9PSB1bmRlZmluZWRTdHJpbmcpIHtcbiAgICAgICAgICB0aGlzLl9pc1BhZ2luYXRpb24gPSByZXN1bHQucGFnZVNob3c7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZGF0YSA9IHJlc3VsdC5saXN0ID8/IFtdO1xuICAgICAgICB0aGlzLl9zdGF0aXN0aWNhbCA9IHJlc3VsdC5zdGF0aXN0aWNhbCBhcyBTVFN0YXRpc3RpY2FsUmVzdWx0cztcbiAgICAgICAgLy8gU2hvdWxkIGJlIHJlLXJlbmRlciBpbiBuZXh0IHRpa2Ugd2hlbiB1c2luZyB2aXJ0dWFsIHNjcm9sbFxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbmctYWxhaW4vbmctYWxhaW4vaXNzdWVzLzE4MzZcbiAgICAgICAgaWYgKHRoaXMuY2RrVmlydHVhbFNjcm9sbFZpZXdwb3J0ICE9IG51bGwpIHtcbiAgICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRoaXMuY2RrVmlydHVhbFNjcm9sbFZpZXdwb3J0Py5jaGVja1ZpZXdwb3J0U2l6ZSgpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9yZWZDaGVjaygpO1xuICAgICAgICB0aGlzLmNoYW5nZUVtaXQoJ2xvYWRlZCcsIHJlc3VsdC5saXN0KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKiog5riF56m65omA5pyJ5pWw5o2uICovXG4gIGNsZWFyKGNsZWFuU3RhdHVzOiBib29sZWFuID0gdHJ1ZSk6IHRoaXMge1xuICAgIGlmIChjbGVhblN0YXR1cykge1xuICAgICAgdGhpcy5jbGVhclN0YXR1cygpO1xuICAgIH1cbiAgICB0aGlzLl9kYXRhID0gW107XG4gICAgcmV0dXJuIHRoaXMuY2QoKTtcbiAgfVxuXG4gIC8qKiDmuIXnqbrmiYDmnInnirbmgIEgKi9cbiAgY2xlYXJTdGF0dXMoKTogdGhpcyB7XG4gICAgcmV0dXJuIHRoaXMuY2xlYXJDaGVjaygpLmNsZWFyUmFkaW8oKS5jbGVhckZpbHRlcigpLmNsZWFyU29ydCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIOagueaNrumhteeggemHjeaWsOWKoOi9veaVsOaNrlxuICAgKlxuICAgKiBAcGFyYW0gcGkg5oyH5a6a5b2T5YmN6aG156CB77yM6buY6K6k77yaYDFgXG4gICAqIEBwYXJhbSBleHRyYVBhcmFtcyDph43mlrDmjIflrpogYGV4dHJhUGFyYW1zYCDlgLxcbiAgICogQHBhcmFtIG9wdGlvbnMg6YCJ6aG5XG4gICAqL1xuICBsb2FkKHBpOiBudW1iZXIgPSAxLCBleHRyYVBhcmFtcz86IE56U2FmZUFueSwgb3B0aW9ucz86IFNUTG9hZE9wdGlvbnMpOiB0aGlzIHtcbiAgICBpZiAocGkgIT09IC0xKSB0aGlzLnBpID0gcGk7XG4gICAgaWYgKHR5cGVvZiBleHRyYVBhcmFtcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVxLnBhcmFtcyA9IG9wdGlvbnMgJiYgb3B0aW9ucy5tZXJnZSA/IHsgLi4udGhpcy5yZXEucGFyYW1zLCAuLi5leHRyYVBhcmFtcyB9IDogZXh0cmFQYXJhbXM7XG4gICAgfVxuICAgIHRoaXMuX2NoYW5nZSgncGknLCBvcHRpb25zKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiDph43mlrDliLfmlrDlvZPliY3pobVcbiAgICpcbiAgICogQHBhcmFtIGV4dHJhUGFyYW1zIOmHjeaWsOaMh+WumiBgZXh0cmFQYXJhbXNgIOWAvFxuICAgKi9cbiAgcmVsb2FkKGV4dHJhUGFyYW1zPzogTnpTYWZlQW55LCBvcHRpb25zPzogU1RMb2FkT3B0aW9ucyk6IHRoaXMge1xuICAgIHJldHVybiB0aGlzLmxvYWQoLTEsIGV4dHJhUGFyYW1zLCBvcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDph43nva7kuJTph43mlrDorr7nva4gYHBpYCDkuLogYDFg77yM5YyF5ZCr5Lul5LiL5YC877yaXG4gICAqIC0gYGNoZWNrYCDmlbDmja5cbiAgICogLSBgcmFkaW9gIOaVsOaNrlxuICAgKiAtIGBzb3J0YCDmlbDmja5cbiAgICogLSBgZmlsZXRlcmAg5pWw5o2uXG4gICAqXG4gICAqIEBwYXJhbSBleHRyYVBhcmFtcyDph43mlrDmjIflrpogYGV4dHJhUGFyYW1zYCDlgLxcbiAgICovXG4gIHJlc2V0KGV4dHJhUGFyYW1zPzogTnpTYWZlQW55LCBvcHRpb25zPzogU1RMb2FkT3B0aW9ucyk6IHRoaXMge1xuICAgIHRoaXMuY2xlYXJTdGF0dXMoKS5sb2FkKDEsIGV4dHJhUGFyYW1zLCBvcHRpb25zKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByaXZhdGUgX3RvVG9wKGVuZm9yY2U/OiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKCEoZW5mb3JjZSA9PSBudWxsID8gdGhpcy5wYWdlLnRvVG9wIDogZW5mb3JjZSkpIHJldHVybjtcbiAgICBjb25zdCBlbCA9IHRoaXMuZWw7XG4gICAgZWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAvLyBmaXggaGVhZGVyIGhlaWdodFxuICAgIHRoaXMuZG9jLmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgLT0gdGhpcy5wYWdlLnRvVG9wT2Zmc2V0ITtcbiAgICBpZiAodGhpcy5zY3JvbGwpIHtcbiAgICAgIGlmICh0aGlzLmNka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydCkge1xuICAgICAgICB0aGlzLmNka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydC5zY3JvbGxUbyh7XG4gICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgIGxlZnQ6IDBcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbC5xdWVyeVNlbGVjdG9yKCcuYW50LXRhYmxlLWJvZHksIC5hbnQtdGFibGUtY29udGVudCcpPy5zY3JvbGxUbygwLCAwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfY2hhbmdlKHR5cGU6ICdwaScgfCAncHMnLCBvcHRpb25zPzogU1RMb2FkT3B0aW9ucyk6IHZvaWQge1xuICAgIGlmICh0eXBlID09PSAncGknIHx8ICh0eXBlID09PSAncHMnICYmIHRoaXMucGkgPD0gTWF0aC5jZWlsKHRoaXMudG90YWwgLyB0aGlzLnBzKSkpIHtcbiAgICAgIHRoaXMubG9hZFBhZ2VEYXRhKCkuc3Vic2NyaWJlKCgpID0+IHRoaXMuX3RvVG9wKG9wdGlvbnM/LnRvVG9wKSk7XG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2VFbWl0KHR5cGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBjbG9zZU90aGVyRXhwYW5kKGl0ZW06IFNURGF0YSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmV4cGFuZEFjY29yZGlvbiA9PT0gZmFsc2UpIHJldHVybjtcbiAgICB0aGlzLl9kYXRhLmZpbHRlcihpID0+IGkgIT09IGl0ZW0pLmZvckVhY2goaSA9PiAoaS5leHBhbmQgPSBmYWxzZSkpO1xuICB9XG5cbiAgX3Jvd0NsaWNrKGU6IEV2ZW50LCBpdGVtOiBTVERhdGEsIGluZGV4OiBudW1iZXIsIGRibDogYm9vbGVhbik6IHZvaWQge1xuICAgIGNvbnN0IGVsID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgaWYgKGVsLm5vZGVOYW1lID09PSAnSU5QVVQnKSByZXR1cm47XG4gICAgY29uc3QgeyBleHBhbmQsIGV4cGFuZFJvd0J5Q2xpY2sgfSA9IHRoaXM7XG4gICAgaWYgKCEhZXhwYW5kICYmIGl0ZW0uc2hvd0V4cGFuZCAhPT0gZmFsc2UgJiYgZXhwYW5kUm93QnlDbGljaykge1xuICAgICAgaXRlbS5leHBhbmQgPSAhaXRlbS5leHBhbmQ7XG4gICAgICB0aGlzLmNsb3NlT3RoZXJFeHBhbmQoaXRlbSk7XG4gICAgICB0aGlzLmNoYW5nZUVtaXQoJ2V4cGFuZCcsIGl0ZW0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRhdGEgPSB7IGUsIGl0ZW0sIGluZGV4IH07XG4gICAgaWYgKGRibCkge1xuICAgICAgdGhpcy5jaGFuZ2VFbWl0KCdkYmxDbGljaycsIGRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9jbGlja1Jvd0NsYXNzTmFtZShlbCwgaXRlbSwgaW5kZXgpO1xuICAgICAgdGhpcy5jaGFuZ2VFbWl0KCdjbGljaycsIGRhdGEpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NsaWNrUm93Q2xhc3NOYW1lKGVsOiBIVE1MRWxlbWVudCwgaXRlbTogU1REYXRhLCBpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgY3IgPSB0aGlzLmNsaWNrUm93Q2xhc3NOYW1lO1xuICAgIGlmIChjciA9PSBudWxsKSByZXR1cm47XG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgZXhjbHVzaXZlOiBmYWxzZSxcbiAgICAgIC4uLih0eXBlb2YgY3IgPT09ICdzdHJpbmcnID8geyBmbjogKCkgPT4gY3IgfSA6IGNyKVxuICAgIH0gYXMgU1RDbGlja1Jvd0NsYXNzTmFtZVR5cGU7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gY29uZmlnLmZuKGl0ZW0sIGluZGV4KTtcbiAgICBjb25zdCB0ckVsID0gZWwuY2xvc2VzdCgndHInKSBhcyBIVE1MRWxlbWVudDtcbiAgICBpZiAoY29uZmlnLmV4Y2x1c2l2ZSkge1xuICAgICAgdHJFbC5wYXJlbnRFbGVtZW50ISEucXVlcnlTZWxlY3RvckFsbCgndHInKS5mb3JFYWNoKChhOiBIVE1MRWxlbWVudCkgPT4gYS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSkpO1xuICAgIH1cbiAgICBpZiAodHJFbC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSkge1xuICAgICAgdHJFbC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyRWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIH1cbiAgfVxuXG4gIF9leHBhbmRDaGFuZ2UoaXRlbTogU1REYXRhLCBleHBhbmQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpdGVtLmV4cGFuZCA9IGV4cGFuZDtcbiAgICB0aGlzLmNsb3NlT3RoZXJFeHBhbmQoaXRlbSk7XG4gICAgdGhpcy5jaGFuZ2VFbWl0KCdleHBhbmQnLCBpdGVtKTtcbiAgfVxuXG4gIF9zdG9wUHJvcGFnYXRpb24oZXY6IEV2ZW50KTogdm9pZCB7XG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICBwcml2YXRlIF9yZWZDb2xBbmREYXRhKCk6IHRoaXMge1xuICAgIHRoaXMuX2NvbHVtbnMuZm9yRWFjaChjID0+IHtcbiAgICAgIHRoaXMuX2RhdGEuZm9yRWFjaCgoaSwgaWR4KSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IGkuX3ZhbHVlcyBhcyBfU1REYXRhVmFsdWVbXTtcbiAgICAgICAgaWYgKGMudHlwZSA9PT0gJ25vJykge1xuICAgICAgICAgIGNvbnN0IHRleHQgPSBgJHt0aGlzLmRhdGFTb3VyY2UuZ2V0Tm9JbmRleChpLCBjLCBpZHgpfWA7XG4gICAgICAgICAgdmFsdWVzW2MuX19wb2ludCFdID0ge1xuICAgICAgICAgICAgdGV4dCxcbiAgICAgICAgICAgIF90ZXh0OiB0ZXh0LFxuICAgICAgICAgICAgb3JnOiBpZHgsXG4gICAgICAgICAgICBzYWZlVHlwZTogJ3RleHQnXG4gICAgICAgICAgfSBhcyBfU1REYXRhVmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFsdWVzW2MuX19wb2ludCFdLnByb3BzID0gdGhpcy5kYXRhU291cmNlLmdldENlbGwoYywgaSwgaWR4KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMucmVmcmVzaERhdGEoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSByb3dzIGluIHRoZSB0YWJsZSwgbGlrZSB0aGlzOlxuICAgKlxuICAgKiBgYGBcbiAgICogdGhpcy5zdC5hZGRSb3coc3REYXRhSXRlbSlcbiAgICogYGBgXG4gICAqXG4gICAqICoqVElQUzoqKiBEb24ndCBjaGFuZ2UgdGhlIGB0b3RhbGAgdmFsdWUsIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgYHJlbG9hZGAgbWV0aG9kIGlmIG5lZWRlZFxuICAgKi9cbiAgYWRkUm93KGRhdGE6IFNURGF0YSB8IFNURGF0YVtdLCBvcHRpb25zPzogeyBpbmRleD86IG51bWJlciB9KTogdGhpcyB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGRhdGEpKSBkYXRhID0gW2RhdGFdO1xuICAgIHRoaXMuX2RhdGEuc3BsaWNlKG9wdGlvbnM/LmluZGV4ID8/IDAsIDAsIC4uLihkYXRhIGFzIFNURGF0YVtdKSk7XG4gICAgcmV0dXJuIHRoaXMub3B0aW1pemVEYXRhKCkuX3JlZkNvbEFuZERhdGEoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYSByb3cgaW4gdGhlIHRhYmxlLCBsaWtlIHRoaXM6XG4gICAqXG4gICAqIGBgYFxuICAgKiB0aGlzLnN0LnJlbW92ZVJvdygwKVxuICAgKiB0aGlzLnN0LnJlbW92ZVJvdyhzdERhdGFJdGVtKVxuICAgKiBgYGBcbiAgICpcbiAgICogKipUSVBTOioqIERvbid0IGNoYW5nZSB0aGUgYHRvdGFsYCB2YWx1ZSwgaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoZSBgcmVsb2FkYCBtZXRob2QgaWYgbmVlZGVkXG4gICAqL1xuICByZW1vdmVSb3coZGF0YTogU1REYXRhIHwgU1REYXRhW10gfCBudW1iZXIpOiB0aGlzIHtcbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdudW1iZXInKSB7XG4gICAgICB0aGlzLl9kYXRhLnNwbGljZShkYXRhLCAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgIGRhdGEgPSBbZGF0YV07XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGN1ckRhdGEgPSB0aGlzLl9kYXRhO1xuICAgICAgZm9yICh2YXIgaSA9IGN1ckRhdGEubGVuZ3RoOyBpLS07ICkge1xuICAgICAgICBpZiAoZGF0YS5pbmRleE9mKGN1ckRhdGFbaV0pICE9PSAtMSkge1xuICAgICAgICAgIGN1ckRhdGEuc3BsaWNlKGksIDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9yZWZDaGVjaygpLl9yZWZDb2xBbmREYXRhKCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgcm93IHZhbHVlIGZvciB0aGUgYGluZGV4YCBpbiB0aGUgdGFibGUsIGxpa2UgdGhpczpcbiAgICpcbiAgICogLSBgb3B0aW5vcy5yZWZyZXNoU2NoZW1hYCBXaGV0aGVyIHRvIHJlZnJlc2ggb2Ygc3Qgc2NoZW1hc1xuICAgKiAtIGBvcHRpbm9zLmVtaXRSZWxvYWRgIFdoZXRoZXIgdG8gdHJpZ2dlciBhIHJlbG9hZCBodHRwIHJlcXVlc3Qgd2hlbiBkYXRhIGlzIHVybFxuICAgKlxuICAgKiBgYGBcbiAgICogdGhpcy5zdC5zZXRSb3coMCwgeyBwcmljZTogMTAwIH0pXG4gICAqIHRoaXMuc3Quc2V0Um93KDAsIHsgcHJpY2U6IDEwMCwgbmFtZTogJ2FzZGYnIH0pXG4gICAqIHRoaXMuc3Quc2V0Um93KGl0ZW0sIHsgcHJpY2U6IDEwMCB9KVxuICAgKiBgYGBcbiAgICovXG4gIHNldFJvdyhpbmRleDogbnVtYmVyIHwgU1REYXRhLCBpdGVtOiBTVERhdGEsIG9wdGlvbnM/OiB7IHJlZnJlc2hTY2hlbWE/OiBib29sZWFuOyBlbWl0UmVsb2FkPzogYm9vbGVhbiB9KTogdGhpcyB7XG4gICAgb3B0aW9ucyA9IHsgcmVmcmVzaFNjaGVtYTogZmFsc2UsIGVtaXRSZWxvYWQ6IGZhbHNlLCAuLi5vcHRpb25zIH07XG4gICAgaWYgKHR5cGVvZiBpbmRleCAhPT0gJ251bWJlcicpIHtcbiAgICAgIGluZGV4ID0gdGhpcy5fZGF0YS5pbmRleE9mKGluZGV4KTtcbiAgICB9XG4gICAgdGhpcy5fZGF0YVtpbmRleF0gPSBkZWVwTWVyZ2VLZXkodGhpcy5fZGF0YVtpbmRleF0sIGZhbHNlLCBpdGVtKTtcbiAgICB0aGlzLm9wdGltaXplRGF0YSgpO1xuICAgIGlmIChvcHRpb25zLnJlZnJlc2hTY2hlbWEpIHtcbiAgICAgIHRoaXMucmVzZXRDb2x1bW5zKHsgZW1pdFJlbG9hZDogb3B0aW9ucy5lbWl0UmVsb2FkIH0pO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnJlZnJlc2hEYXRhKCk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiBzb3J0XG5cbiAgc29ydChjb2w6IF9TVENvbHVtbiwgdmFsdWU6IE56U2FmZUFueSk6IHZvaWQge1xuICAgIGlmICh0aGlzLm11bHRpU29ydCkge1xuICAgICAgY29sLl9zb3J0LmRlZmF1bHQgPSB2YWx1ZTtcbiAgICAgIGNvbC5fc29ydC50aWNrID0gdGhpcy5kYXRhU291cmNlLm5leHRTb3J0VGljaztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5faGVhZGVycy5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICAgIHJvdy5mb3JFYWNoKGl0ZW0gPT4gKGl0ZW0uY29sdW1uLl9zb3J0LmRlZmF1bHQgPSBpdGVtLmNvbHVtbiA9PT0gY29sID8gdmFsdWUgOiBudWxsKSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHRoaXMubG9hZFBhZ2VEYXRhKCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IHtcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIG1hcDogdGhpcy5kYXRhU291cmNlLmdldFJlcVNvcnRNYXAodGhpcy5zaW5nbGVTb3J0LCB0aGlzLm11bHRpU29ydCwgdGhpcy5faGVhZGVycyksXG4gICAgICAgIGNvbHVtbjogY29sXG4gICAgICB9O1xuICAgICAgdGhpcy5jaGFuZ2VFbWl0KCdzb3J0JywgcmVzKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNsZWFyU29ydCgpOiB0aGlzIHtcbiAgICB0aGlzLl9oZWFkZXJzLmZvckVhY2gocm93ID0+IHtcbiAgICAgIHJvdy5mb3JFYWNoKGl0ZW0gPT4gKGl0ZW0uY29sdW1uLl9zb3J0LmRlZmF1bHQgPSBudWxsKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiBmaWx0ZXJcblxuICBfaGFuZGxlRmlsdGVyKGNvbDogX1NUQ29sdW1uLCBjb25maXJtOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKCFjb25maXJtKSB7XG4gICAgICB0aGlzLmNvbHVtblNvdXJjZS5jbGVhbkZpbHRlcihjb2wpO1xuICAgIH1cbiAgICAvLyDov4fmu6TooajnpLrkuIDnp43mlbDmja7nmoTlj5jljJblupTph43nva7pobXnoIHkuLogYDFgXG4gICAgdGhpcy5waSA9IDE7XG4gICAgdGhpcy5jb2x1bW5Tb3VyY2UudXBkYXRlRGVmYXVsdChjb2wuZmlsdGVyISk7XG4gICAgdGhpcy5sb2FkUGFnZURhdGEoKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jaGFuZ2VFbWl0KCdmaWx0ZXInLCBjb2wpKTtcbiAgfVxuXG4gIGhhbmRsZUZpbHRlck5vdGlmeSh2YWx1ZT86IHVua25vd24pOiB2b2lkIHtcbiAgICB0aGlzLmNoYW5nZUVtaXQoJ2ZpbHRlckNoYW5nZScsIHZhbHVlKTtcbiAgfVxuXG4gIGNsZWFyRmlsdGVyKCk6IHRoaXMge1xuICAgIHRoaXMuX2NvbHVtbnMuZmlsdGVyKHcgPT4gdy5maWx0ZXIgJiYgdy5maWx0ZXIuZGVmYXVsdCA9PT0gdHJ1ZSkuZm9yRWFjaChjb2wgPT4gdGhpcy5jb2x1bW5Tb3VyY2UuY2xlYW5GaWx0ZXIoY29sKSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gY2hlY2tib3hcblxuICAvKiog5riF6Zmk5omA5pyJIGBjaGVja2JveGAgKi9cbiAgY2xlYXJDaGVjaygpOiB0aGlzIHtcbiAgICByZXR1cm4gdGhpcy5jaGVja0FsbChmYWxzZSk7XG4gIH1cblxuICBwcml2YXRlIF9yZWZDaGVjaygpOiB0aGlzIHtcbiAgICBjb25zdCB2YWxpZERhdGEgPSB0aGlzLl9kYXRhLmZpbHRlcih3ID0+ICF3LmRpc2FibGVkKTtcbiAgICBjb25zdCBjaGVja2VkTGlzdCA9IHZhbGlkRGF0YS5maWx0ZXIodyA9PiB3LmNoZWNrZWQgPT09IHRydWUpO1xuICAgIHRoaXMuX2FsbENoZWNrZWQgPSBjaGVja2VkTGlzdC5sZW5ndGggPiAwICYmIGNoZWNrZWRMaXN0Lmxlbmd0aCA9PT0gdmFsaWREYXRhLmxlbmd0aDtcbiAgICBjb25zdCBhbGxVbkNoZWNrZWQgPSB2YWxpZERhdGEuZXZlcnkodmFsdWUgPT4gIXZhbHVlLmNoZWNrZWQpO1xuICAgIHRoaXMuX2luZGV0ZXJtaW5hdGUgPSAhdGhpcy5fYWxsQ2hlY2tlZCAmJiAhYWxsVW5DaGVja2VkO1xuICAgIHRoaXMuX2FsbENoZWNrZWREaXNhYmxlZCA9IHRoaXMuX2RhdGEubGVuZ3RoID09PSB0aGlzLl9kYXRhLmZpbHRlcih3ID0+IHcuZGlzYWJsZWQpLmxlbmd0aDtcbiAgICByZXR1cm4gdGhpcy5jZCgpO1xuICB9XG5cbiAgY2hlY2tBbGwoY2hlY2tlZD86IGJvb2xlYW4pOiB0aGlzIHtcbiAgICBjaGVja2VkID0gdHlwZW9mIGNoZWNrZWQgPT09ICd1bmRlZmluZWQnID8gdGhpcy5fYWxsQ2hlY2tlZCA6IGNoZWNrZWQ7XG4gICAgdGhpcy5fZGF0YS5maWx0ZXIodyA9PiAhdy5kaXNhYmxlZCkuZm9yRWFjaChpID0+IChpLmNoZWNrZWQgPSBjaGVja2VkKSk7XG4gICAgcmV0dXJuIHRoaXMuX3JlZkNoZWNrKCkuX2NoZWNrTm90aWZ5KCkucmVmcmVzaERhdGEoKTtcbiAgfVxuXG4gIF9yb3dTZWxlY3Rpb24ocm93OiBTVENvbHVtblNlbGVjdGlvbik6IHRoaXMge1xuICAgIHJvdy5zZWxlY3QodGhpcy5fZGF0YSk7XG4gICAgcmV0dXJuIHRoaXMuX3JlZkNoZWNrKCkuX2NoZWNrTm90aWZ5KCk7XG4gIH1cblxuICBfY2hlY2tOb3RpZnkoKTogdGhpcyB7XG4gICAgY29uc3QgcmVzID0gdGhpcy5fZGF0YS5maWx0ZXIodyA9PiAhdy5kaXNhYmxlZCAmJiB3LmNoZWNrZWQgPT09IHRydWUpO1xuICAgIHRoaXMuY2hhbmdlRW1pdCgnY2hlY2tib3gnLCByZXMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gcmFkaW9cblxuICAvKiog5riF6Zmk5omA5pyJIGByYWRpb2AgKi9cbiAgY2xlYXJSYWRpbygpOiB0aGlzIHtcbiAgICB0aGlzLl9kYXRhLmZpbHRlcih3ID0+IHcuY2hlY2tlZCkuZm9yRWFjaChpdGVtID0+IChpdGVtLmNoZWNrZWQgPSBmYWxzZSkpO1xuICAgIHRoaXMuY2hhbmdlRW1pdCgncmFkaW8nLCBudWxsKTtcbiAgICByZXR1cm4gdGhpcy5yZWZyZXNoRGF0YSgpO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIF9oYW5kbGVUZChldjogX1NUVGROb3RpZnkpOiB2b2lkIHtcbiAgICBzd2l0Y2ggKGV2LnR5cGUpIHtcbiAgICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgICAgdGhpcy5fcmVmQ2hlY2soKS5fY2hlY2tOb3RpZnkoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdyYWRpbyc6XG4gICAgICAgIHRoaXMuY2hhbmdlRW1pdCgncmFkaW8nLCBldi5pdGVtKTtcbiAgICAgICAgdGhpcy5yZWZyZXNoRGF0YSgpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICAvLyAjcmVnaW9uIGV4cG9ydFxuXG4gIC8qKlxuICAgKiDlr7zlh7rlvZPliY3pobXvvIznoa7kv53lt7Lnu4/ms6jlhowgYFhsc3hNb2R1bGVgXG4gICAqXG4gICAqIEBwYXJhbSBuZXdEYXRhIOmHjeaWsOaMh+WumuaVsOaNru+8m+iLpeS4uiBgdHJ1ZWAg6KGo56S65L2/55SoIGBmaWx0ZXJlZERhdGFgIOaVsOaNrlxuICAgKiBAcGFyYW0gb3B0IOmineWkluWPguaVsFxuICAgKi9cbiAgZXhwb3J0KG5ld0RhdGE/OiBTVERhdGFbXSB8IHRydWUsIG9wdD86IFNURXhwb3J0T3B0aW9ucyk6IHZvaWQge1xuICAgIGNvbnN0IGRhdGEgPSBBcnJheS5pc0FycmF5KG5ld0RhdGEpXG4gICAgICA/IHRoaXMuZGF0YVNvdXJjZS5vcHRpbWl6ZURhdGEoeyBjb2x1bW5zOiB0aGlzLl9jb2x1bW5zLCByZXN1bHQ6IG5ld0RhdGEgfSlcbiAgICAgIDogdGhpcy5fZGF0YTtcbiAgICAobmV3RGF0YSA9PT0gdHJ1ZSA/IHRoaXMuZmlsdGVyZWREYXRhIDogb2YoZGF0YSkpLnN1YnNjcmliZSgocmVzOiBTVERhdGFbXSkgPT5cbiAgICAgIHRoaXMuZXhwb3J0U3J2LmV4cG9ydCh7XG4gICAgICAgIGNvbHVtZW5zOiB0aGlzLl9jb2x1bW5zLFxuICAgICAgICAuLi5vcHQsXG4gICAgICAgIGRhdGE6IHJlc1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gcmVzaXphYmxlXG5cbiAgY29sUmVzaXplKHsgd2lkdGggfTogTnpSZXNpemVFdmVudCwgY29sdW1uOiBfU1RDb2x1bW4pOiB2b2lkIHtcbiAgICBjb2x1bW4ud2lkdGggPSBgJHt3aWR0aH1weGA7XG4gICAgdGhpcy5jaGFuZ2VFbWl0KCdyZXNpemUnLCBjb2x1bW4pO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gY29udGV4dG1lbnVcbiAgb25Db250ZXh0bWVudShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5jb250ZXh0bWVudSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IGNvbEVsID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCkuY2xvc2VzdCgnW2RhdGEtY29sLWluZGV4XScpIGFzIEhUTUxFbGVtZW50O1xuICAgIGlmICghY29sRWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY29sSW5kZXggPSBOdW1iZXIoY29sRWwuZGF0YXNldC5jb2xJbmRleCk7XG4gICAgY29uc3Qgcm93SW5kZXggPSBOdW1iZXIoKGNvbEVsLmNsb3Nlc3QoJ3RyJykgYXMgSFRNTEVsZW1lbnQpLmRhdGFzZXQuaW5kZXgpO1xuICAgIGNvbnN0IGlzVGl0bGUgPSBpc05hTihyb3dJbmRleCk7XG4gICAgY29uc3Qgb2JzJCA9IHRoaXMuY29udGV4dG1lbnUoe1xuICAgICAgZXZlbnQsXG4gICAgICB0eXBlOiBpc1RpdGxlID8gJ2hlYWQnIDogJ2JvZHknLFxuICAgICAgcm93SW5kZXg6IGlzVGl0bGUgPyBudWxsIDogcm93SW5kZXgsXG4gICAgICBjb2xJbmRleCxcbiAgICAgIGRhdGE6IGlzVGl0bGUgPyBudWxsIDogdGhpcy5saXN0W3Jvd0luZGV4XSxcbiAgICAgIGNvbHVtbjogdGhpcy5fY29sdW1uc1tjb2xJbmRleF1cbiAgICB9KTtcbiAgICAoaXNPYnNlcnZhYmxlKG9icyQpID8gb2JzJCA6IG9mKG9icyQpKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRha2VVbnRpbERlc3Ryb3llZCh0aGlzLmRlc3Ryb3kkKSxcbiAgICAgICAgZmlsdGVyKHJlcyA9PiByZXMubGVuZ3RoID4gMClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgdGhpcy5jb250ZXh0bWVudUxpc3QgPSByZXMubWFwKGkgPT4ge1xuICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShpLmNoaWxkcmVuKSkge1xuICAgICAgICAgICAgaS5jaGlsZHJlbiA9IFtdO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgdGhpcy5jbXM/LmNyZWF0ZShldmVudCwgdGhpcy5jb250ZXh0bWVudVRwbCk7XG4gICAgICB9KTtcbiAgfVxuICAvLyAjZW5kcmVnaW9uXG5cbiAgZ2V0IGNka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydCgpOiBDZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLm9yZ1RhYmxlPy5jZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQgYXMgTnpTYWZlQW55O1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVzZXRDb2x1bW5zKG9wdGlvbnM/OiBTVFJlc2V0Q29sdW1uc09wdGlvbik6IE9ic2VydmFibGU8dGhpcz4ge1xuICAgIG9wdGlvbnMgPSB7IGVtaXRSZWxvYWQ6IHRydWUsIHByZUNsZWFyRGF0YTogZmFsc2UsIC4uLm9wdGlvbnMgfTtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuY29sdW1ucyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMuY29sdW1ucyA9IG9wdGlvbnMuY29sdW1ucztcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLnBpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5waSA9IG9wdGlvbnMucGk7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5wcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucHMgPSBvcHRpb25zLnBzO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5lbWl0UmVsb2FkKSB7XG4gICAgICAvLyBTaG91bGQgY2xlYW4gZGF0YSwgQmVjYXVzZSBvZiBjaGFuZ2luZyBjb2x1bW5zIG1heSBjYXVzZSBpbmFjY3VyYXRlIGRhdGFcbiAgICAgIG9wdGlvbnMucHJlQ2xlYXJEYXRhID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMucHJlQ2xlYXJEYXRhKSB7XG4gICAgICB0aGlzLl9kYXRhID0gW107XG4gICAgfVxuICAgIHRoaXMucmVmcmVzaENvbHVtbnMoKTtcbiAgICBpZiAob3B0aW9ucy5lbWl0UmVsb2FkKSB7XG4gICAgICByZXR1cm4gdGhpcy5sb2FkUGFnZURhdGEoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jZCgpO1xuICAgICAgcmV0dXJuIG9mKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0Q29sdW1ucyhvcHRpb25zPzogU1RSZXNldENvbHVtbnNPcHRpb24pOiBQcm9taXNlPHRoaXM+IHtcbiAgICByZXR1cm4gbGFzdFZhbHVlRnJvbSh0aGlzLl9yZXNldENvbHVtbnMob3B0aW9ucykpO1xuICB9XG5cbiAgcHJpdmF0ZSByZWZyZXNoQ29sdW1ucygpOiB0aGlzIHtcbiAgICBjb25zdCByZXMgPSB0aGlzLmNvbHVtblNvdXJjZS5wcm9jZXNzKHRoaXMuY29sdW1ucyBhcyBfU1RDb2x1bW5bXSwge1xuICAgICAgd2lkdGhNb2RlOiB0aGlzLndpZHRoTW9kZSxcbiAgICAgIHJlc2l6YWJsZTogdGhpcy5fcmVzaXphYmxlLFxuICAgICAgc2FmZVR5cGU6IHRoaXMuY29nLnNhZmVUeXBlIGFzIFNUQ29sdW1uU2FmZVR5cGVcbiAgICB9KTtcbiAgICB0aGlzLl9jb2x1bW5zID0gcmVzLmNvbHVtbnM7XG4gICAgdGhpcy5faGVhZGVycyA9IHJlcy5oZWFkZXJzO1xuICAgIGlmICh0aGlzLmN1c3RvbVdpZHRoQ29uZmlnID09PSBmYWxzZSAmJiByZXMuaGVhZGVyV2lkdGhzICE9IG51bGwpIHtcbiAgICAgIHRoaXMuX3dpZHRoQ29uZmlnID0gcmVzLmhlYWRlcldpZHRocztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcml2YXRlIG9wdGltaXplRGF0YSgpOiB0aGlzIHtcbiAgICB0aGlzLl9kYXRhID0gdGhpcy5kYXRhU291cmNlLm9wdGltaXplRGF0YSh7XG4gICAgICBjb2x1bW5zOiB0aGlzLl9jb2x1bW5zLFxuICAgICAgcmVzdWx0OiB0aGlzLl9kYXRhLFxuICAgICAgcm93Q2xhc3NOYW1lOiB0aGlzLnJvd0NsYXNzTmFtZVxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBwdXJlIGRhdGEsIGBzdGAgaW50ZXJuYWxseSBtYWludGFpbnMgYSBzZXQgb2YgZGF0YSBmb3IgY2FjaGluZywgdGhpcyBwYXJ0IG9mIGRhdGEgbWF5IGFmZmVjdCB0aGUgYmFja2VuZFxuICAgKlxuICAgKiDov5Tlm57nuq/lh4DmlbDmja7vvIxgc3RgIOWGhemDqOS8mue7tOaKpOS4gOe7hOeUqOS6jue8k+WtmOeahOaVsOaNru+8jOi/memDqOWIhuaVsOaNruWPr+iDveS8muW9seWTjeWQjuerr1xuICAgKi9cbiAgcHVyZUl0ZW0oaXRlbU9ySW5kZXg6IFNURGF0YSB8IG51bWJlcik6IFNURGF0YSB8IG51bGwge1xuICAgIGlmICh0eXBlb2YgaXRlbU9ySW5kZXggPT09ICdudW1iZXInKSB7XG4gICAgICBpdGVtT3JJbmRleCA9IHRoaXMuX2RhdGFbaXRlbU9ySW5kZXhdO1xuICAgIH1cbiAgICBpZiAoIWl0ZW1PckluZGV4KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgY29weUl0ZW0gPSBkZWVwQ29weShpdGVtT3JJbmRleCk7XG4gICAgWydfdmFsdWVzJywgJ19yb3dDbGFzc05hbWUnXS5mb3JFYWNoKGtleSA9PiBkZWxldGUgY29weUl0ZW1ba2V5XSk7XG4gICAgcmV0dXJuIGNvcHlJdGVtO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMucmVmcmVzaENvbHVtbnMoKTtcbiAgICBpZiAoIXRoaXMucmVxLmxhenlMb2FkKSB0aGlzLmxvYWRQYWdlRGF0YSgpLnN1YnNjcmliZSgpO1xuICAgIHRoaXMuaW5pZWQgPSB0cnVlO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogeyBbUCBpbiBrZXlvZiB0aGlzXT86IFNpbXBsZUNoYW5nZSB9ICYgU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLmxvYWRpbmcpIHtcbiAgICAgIHRoaXMuX2xvYWRpbmcgPSBjaGFuZ2VzLmxvYWRpbmcuY3VycmVudFZhbHVlO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuaW5pZWQpIHJldHVybjtcblxuICAgIGlmIChjaGFuZ2VzLmNvbHVtbnMpIHtcbiAgICAgIHRoaXMucmVmcmVzaENvbHVtbnMoKS5vcHRpbWl6ZURhdGEoKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuZGF0YSkge1xuICAgICAgdGhpcy5sb2FkUGFnZURhdGEoKS5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3QtdGQnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3QtdGQuY29tcG9uZW50Lmh0bWwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU1RUZENvbXBvbmVudCB7XG4gIHByaXZhdGUgcmVhZG9ubHkgc3RDb21wID0gaW5qZWN0KFNUQ29tcG9uZW50LCB7IGhvc3Q6IHRydWUgfSk7XG4gIHByaXZhdGUgcmVhZG9ubHkgcm91dGVyID0gaW5qZWN0KFJvdXRlcik7XG4gIHByaXZhdGUgcmVhZG9ubHkgbW9kYWxIZWxwZXIgPSBpbmplY3QoTW9kYWxIZWxwZXIpO1xuICBwcml2YXRlIHJlYWRvbmx5IGRyYXdlckhlbHBlciA9IGluamVjdChEcmF3ZXJIZWxwZXIpO1xuXG4gIEBJbnB1dCgpIGMhOiBfU1RDb2x1bW47XG4gIEBJbnB1dCgpIGNJZHghOiBudW1iZXI7XG4gIEBJbnB1dCgpIGRhdGEhOiBTVERhdGFbXTtcbiAgQElucHV0KCkgaSE6IFNURGF0YTtcbiAgQElucHV0KCkgaW5kZXghOiBudW1iZXI7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuID0gbmV3IEV2ZW50RW1pdHRlcjxfU1RUZE5vdGlmeT4oKTtcblxuICBwcml2YXRlIGdldCByb3V0ZXJTdGF0ZSgpOiB7IHBpOiBudW1iZXI7IHBzOiBudW1iZXI7IHRvdGFsOiBudW1iZXIgfSB7XG4gICAgY29uc3QgeyBwaSwgcHMsIHRvdGFsIH0gPSB0aGlzLnN0Q29tcDtcbiAgICByZXR1cm4geyBwaSwgcHMsIHRvdGFsIH07XG4gIH1cblxuICBwcml2YXRlIHJlcG9ydCh0eXBlOiBfU1RUZE5vdGlmeVR5cGUpOiB2b2lkIHtcbiAgICB0aGlzLm4uZW1pdCh7IHR5cGUsIGl0ZW06IHRoaXMuaSwgY29sOiB0aGlzLmMgfSk7XG4gIH1cblxuICBfY2hlY2tib3godmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmkuY2hlY2tlZCA9IHZhbHVlO1xuICAgIHRoaXMucmVwb3J0KCdjaGVja2JveCcpO1xuICB9XG5cbiAgX3JhZGlvKCk6IHZvaWQge1xuICAgIHRoaXMuZGF0YS5maWx0ZXIodyA9PiAhdy5kaXNhYmxlZCkuZm9yRWFjaChpID0+IChpLmNoZWNrZWQgPSBmYWxzZSkpO1xuICAgIHRoaXMuaS5jaGVja2VkID0gdHJ1ZTtcbiAgICB0aGlzLnJlcG9ydCgncmFkaW8nKTtcbiAgfVxuXG4gIF9saW5rKGU6IEV2ZW50KTogYm9vbGVhbiB7XG4gICAgdGhpcy5fc3RvcFByb3BhZ2F0aW9uKGUpO1xuICAgIGNvbnN0IHJlcyA9IHRoaXMuYy5jbGljayEodGhpcy5pLCB0aGlzLnN0Q29tcCk7XG4gICAgaWYgKHR5cGVvZiByZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHJlcywgeyBzdGF0ZTogdGhpcy5yb3V0ZXJTdGF0ZSB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgX3N0b3BQcm9wYWdhdGlvbihldjogRXZlbnQpOiB2b2lkIHtcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgX2J0bihidG46IFNUQ29sdW1uQnV0dG9uLCBldj86IEV2ZW50KTogdm9pZCB7XG4gICAgZXY/LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IGNvZyA9IHRoaXMuc3RDb21wLmNvZztcbiAgICBsZXQgcmVjb3JkID0gdGhpcy5pO1xuICAgIGlmIChidG4udHlwZSA9PT0gJ21vZGFsJyB8fCBidG4udHlwZSA9PT0gJ3N0YXRpYycpIHtcbiAgICAgIGlmIChjb2cubW9kYWwhLnB1cmVSZWNvYXJkID09PSB0cnVlKSB7XG4gICAgICAgIHJlY29yZCA9IHRoaXMuc3RDb21wLnB1cmVJdGVtKHJlY29yZCkhO1xuICAgICAgfVxuICAgICAgY29uc3QgbW9kYWwgPSBidG4ubW9kYWwhO1xuICAgICAgY29uc3Qgb2JqID0geyBbbW9kYWwucGFyYW1zTmFtZSFdOiByZWNvcmQgfTtcbiAgICAgICh0aGlzLm1vZGFsSGVscGVyW2J0bi50eXBlID09PSAnbW9kYWwnID8gJ2NyZWF0ZScgOiAnY3JlYXRlU3RhdGljJ10gYXMgTnpTYWZlQW55KShcbiAgICAgICAgbW9kYWwuY29tcG9uZW50LFxuICAgICAgICB7IC4uLm9iaiwgLi4uKG1vZGFsLnBhcmFtcyAmJiBtb2RhbC5wYXJhbXMocmVjb3JkKSkgfSxcbiAgICAgICAgZGVlcE1lcmdlS2V5KHt9LCB0cnVlLCBjb2cubW9kYWwsIG1vZGFsKVxuICAgICAgKVxuICAgICAgICAucGlwZShmaWx0ZXIodyA9PiB0eXBlb2YgdyAhPT0gJ3VuZGVmaW5lZCcpKVxuICAgICAgICAuc3Vic2NyaWJlKChyZXM6IE56U2FmZUFueSkgPT4gdGhpcy5idG5DYWxsYmFjayhyZWNvcmQsIGJ0biwgcmVzKSk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChidG4udHlwZSA9PT0gJ2RyYXdlcicpIHtcbiAgICAgIGlmIChjb2cuZHJhd2VyIS5wdXJlUmVjb2FyZCA9PT0gdHJ1ZSkge1xuICAgICAgICByZWNvcmQgPSB0aGlzLnN0Q29tcC5wdXJlSXRlbShyZWNvcmQpITtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGRyYXdlciA9IGJ0bi5kcmF3ZXIhO1xuICAgICAgY29uc3Qgb2JqID0geyBbZHJhd2VyLnBhcmFtc05hbWUhXTogcmVjb3JkIH07XG4gICAgICB0aGlzLmRyYXdlckhlbHBlclxuICAgICAgICAuY3JlYXRlKFxuICAgICAgICAgIGRyYXdlci50aXRsZSEsXG4gICAgICAgICAgZHJhd2VyLmNvbXBvbmVudCxcbiAgICAgICAgICB7IC4uLm9iaiwgLi4uKGRyYXdlci5wYXJhbXMgJiYgZHJhd2VyLnBhcmFtcyhyZWNvcmQpKSB9LFxuICAgICAgICAgIGRlZXBNZXJnZUtleSh7fSwgdHJ1ZSwgY29nLmRyYXdlciwgZHJhd2VyKVxuICAgICAgICApXG4gICAgICAgIC5waXBlKGZpbHRlcih3ID0+IHR5cGVvZiB3ICE9PSAndW5kZWZpbmVkJykpXG4gICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHRoaXMuYnRuQ2FsbGJhY2socmVjb3JkLCBidG4sIHJlcykpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoYnRuLnR5cGUgPT09ICdsaW5rJykge1xuICAgICAgY29uc3QgY2xpY2tSZXMgPSB0aGlzLmJ0bkNhbGxiYWNrKHJlY29yZCwgYnRuKTtcbiAgICAgIGlmICh0eXBlb2YgY2xpY2tSZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoY2xpY2tSZXMsIHsgc3RhdGU6IHRoaXMucm91dGVyU3RhdGUgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuYnRuQ2FsbGJhY2socmVjb3JkLCBidG4pO1xuICB9XG5cbiAgcHJpdmF0ZSBidG5DYWxsYmFjayhyZWNvcmQ6IFNURGF0YSwgYnRuOiBTVENvbHVtbkJ1dHRvbiwgbW9kYWw/OiBOelNhZmVBbnkpOiBOelNhZmVBbnkge1xuICAgIGlmICghYnRuLmNsaWNrKSByZXR1cm47XG4gICAgaWYgKHR5cGVvZiBidG4uY2xpY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICBzd2l0Y2ggKGJ0bi5jbGljaykge1xuICAgICAgICBjYXNlICdsb2FkJzpcbiAgICAgICAgICB0aGlzLnN0Q29tcC5sb2FkKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3JlbG9hZCc6XG4gICAgICAgICAgdGhpcy5zdENvbXAucmVsb2FkKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBidG4uY2xpY2socmVjb3JkLCBtb2RhbCwgdGhpcy5zdENvbXApO1xuICAgIH1cbiAgfVxufVxuIiwiPG5nLXRlbXBsYXRlICN0aXRsZVRwbCBsZXQtaT5cbiAgPHNwYW4gW2lubmVySFRNTF09XCJpLl90ZXh0XCI+PC9zcGFuPlxuICBAaWYgKGkub3B0aW9uYWwpIHtcbiAgICA8c21hbGwgY2xhc3M9XCJzdF9faGVhZC1vcHRpb25hbFwiIFtpbm5lckhUTUxdPVwiaS5vcHRpb25hbFwiPjwvc21hbGw+XG4gIH1cbiAgQGlmIChpLm9wdGlvbmFsSGVscCkge1xuICAgIDxpIGNsYXNzPVwic3RfX2hlYWQtdGlwXCIgbnotdG9vbHRpcCBbbnpUb29sdGlwVGl0bGVdPVwiaS5vcHRpb25hbEhlbHBcIiBuei1pY29uIG56VHlwZT1cInF1ZXN0aW9uLWNpcmNsZVwiPjwvaT5cbiAgfVxuPC9uZy10ZW1wbGF0ZT5cbjxuZy10ZW1wbGF0ZSAjY2hrQWxsVHBsIGxldC1jdXN0b20+XG4gIDxsYWJlbFxuICAgIG56LWNoZWNrYm94XG4gICAgY2xhc3M9XCJzdF9fY2hlY2thbGxcIlxuICAgIFtuekRpc2FibGVkXT1cIl9hbGxDaGVja2VkRGlzYWJsZWRcIlxuICAgIFsobmdNb2RlbCldPVwiX2FsbENoZWNrZWRcIlxuICAgIFtuekluZGV0ZXJtaW5hdGVdPVwiX2luZGV0ZXJtaW5hdGVcIlxuICAgIChuZ01vZGVsQ2hhbmdlKT1cImNoZWNrQWxsKClcIlxuICAgIFtjbGFzcy5hbnQtdGFibGUtc2VsZWN0aW9uLXNlbGVjdC1hbGwtY3VzdG9tXT1cImN1c3RvbVwiXG4gID48L2xhYmVsPlxuPC9uZy10ZW1wbGF0ZT5cbjxuei10YWJsZVxuICAjdGFibGVcbiAgW256RGF0YV09XCJfZGF0YVwiXG4gIFsobnpQYWdlSW5kZXgpXT1cInBpXCJcbiAgKG56UGFnZUluZGV4Q2hhbmdlKT1cIl9jaGFuZ2UoJ3BpJylcIlxuICBbKG56UGFnZVNpemUpXT1cInBzXCJcbiAgKG56UGFnZVNpemVDaGFuZ2UpPVwiX2NoYW5nZSgncHMnKVwiXG4gIFtuelRvdGFsXT1cInRvdGFsXCJcbiAgW256U2hvd1BhZ2luYXRpb25dPVwiX2lzUGFnaW5hdGlvblwiXG4gIFtuekZyb250UGFnaW5hdGlvbl09XCJmYWxzZVwiXG4gIFtuekJvcmRlcmVkXT1cImJvcmRlcmVkXCJcbiAgW256U2l6ZV09XCJzaXplXCJcbiAgW256TG9hZGluZ109XCJub0NvbHVtbnMgfHwgX2xvYWRpbmdcIlxuICBbbnpMb2FkaW5nRGVsYXldPVwibG9hZGluZ0RlbGF5XCJcbiAgW256TG9hZGluZ0luZGljYXRvcl09XCJsb2FkaW5nSW5kaWNhdG9yXCJcbiAgW256VGl0bGVdPVwiaGVhZGVyIVwiXG4gIFtuekZvb3Rlcl09XCJmb290ZXIhXCJcbiAgW256U2Nyb2xsXT1cInNjcm9sbFwiXG4gIFtuelZpcnR1YWxJdGVtU2l6ZV09XCJ2aXJ0dWFsSXRlbVNpemVcIlxuICBbbnpWaXJ0dWFsTWF4QnVmZmVyUHhdPVwidmlydHVhbE1heEJ1ZmZlclB4XCJcbiAgW256VmlydHVhbE1pbkJ1ZmZlclB4XT1cInZpcnR1YWxNaW5CdWZmZXJQeFwiXG4gIFtuelZpcnR1YWxGb3JUcmFja0J5XT1cInZpcnR1YWxGb3JUcmFja0J5XCJcbiAgW256Tm9SZXN1bHRdPVwibm9SZXN1bHQhXCJcbiAgW256UGFnZVNpemVPcHRpb25zXT1cInBhZ2UucGFnZVNpemVzIVwiXG4gIFtuelNob3dRdWlja0p1bXBlcl09XCJwYWdlLnNob3dRdWlja0p1bXBlclwiXG4gIFtuelNob3dTaXplQ2hhbmdlcl09XCJwYWdlLnNob3dTaXplXCJcbiAgW256UGFnaW5hdGlvblBvc2l0aW9uXT1cInBhZ2UucG9zaXRpb24hXCJcbiAgW256UGFnaW5hdGlvblR5cGVdPVwicGFnZS50eXBlIVwiXG4gIFtuekl0ZW1SZW5kZXJdPVwicGFnZS5pdGVtUmVuZGVyIVwiXG4gIFtuelNpbXBsZV09XCJwYWdlLnNpbXBsZVwiXG4gIFtuelNob3dUb3RhbF09XCJ0b3RhbFRwbFwiXG4gIFtueldpZHRoQ29uZmlnXT1cIl93aWR0aENvbmZpZ1wiXG4gIChjb250ZXh0bWVudSk9XCJvbkNvbnRleHRtZW51KCRldmVudClcIlxuICBbY2xhc3Muc3RfX25vLWNvbHVtbl09XCJub0NvbHVtbnNcIlxuPlxuICBAaWYgKHNob3dIZWFkZXIpIHtcbiAgICA8dGhlYWQ+XG4gICAgICBAZm9yIChyb3cgb2YgX2hlYWRlcnM7IHRyYWNrIHJvdykge1xuICAgICAgICA8dHI+XG4gICAgICAgICAgQGlmICgkZmlyc3QgJiYgZXhwYW5kKSB7XG4gICAgICAgICAgICA8dGggbnpXaWR0aD1cIjUwcHhcIiBbcm93U3Bhbl09XCJfaGVhZGVycy5sZW5ndGhcIj48L3RoPlxuICAgICAgICAgIH1cbiAgICAgICAgICBAZm9yIChoIG9mIHJvdzsgdHJhY2sgaDsgbGV0IGluZGV4ID0gJGluZGV4OyBsZXQgbGFzdCA9ICRsYXN0KSB7XG4gICAgICAgICAgICA8dGhcbiAgICAgICAgICAgICAgKmxldD1cImguY29sdW1uIGFzIF9jXCJcbiAgICAgICAgICAgICAgW2NvbFNwYW5dPVwiaC5jb2xTcGFuXCJcbiAgICAgICAgICAgICAgW3Jvd1NwYW5dPVwiaC5yb3dTcGFuXCJcbiAgICAgICAgICAgICAgW256V2lkdGhdPVwiJGFueShfYykud2lkdGhcIlxuICAgICAgICAgICAgICBbbnpMZWZ0XT1cIl9jLl9sZWZ0IVwiXG4gICAgICAgICAgICAgIFtuelJpZ2h0XT1cIl9jLl9yaWdodCFcIlxuICAgICAgICAgICAgICBbbmdDbGFzc109XCJfYy5fY2xhc3NOYW1lXCJcbiAgICAgICAgICAgICAgW2F0dHIuZGF0YS1jb2xdPVwiX2MuaW5kZXhLZXlcIlxuICAgICAgICAgICAgICBbYXR0ci5kYXRhLWNvbC1pbmRleF09XCJpbmRleFwiXG4gICAgICAgICAgICAgIFtuelNob3dTb3J0XT1cIl9jLl9zb3J0LmVuYWJsZWRcIlxuICAgICAgICAgICAgICBbbnpTb3J0T3JkZXJdPVwiJGFueShfYykuX3NvcnQuZGVmYXVsdFwiXG4gICAgICAgICAgICAgIChuelNvcnRPcmRlckNoYW5nZSk9XCJzb3J0KF9jLCAkZXZlbnQpXCJcbiAgICAgICAgICAgICAgW256Q3VzdG9tRmlsdGVyXT1cIiEhX2MuZmlsdGVyXCJcbiAgICAgICAgICAgICAgW2NsYXNzLnN0X19oYXMtZmlsdGVyXT1cIl9jLmZpbHRlclwiXG4gICAgICAgICAgICAgIG56LXJlc2l6YWJsZVxuICAgICAgICAgICAgICBbbnpEaXNhYmxlZF09XCJsYXN0IHx8ICRhbnkoX2MpLnJlc2l6YWJsZS5kaXNhYmxlZFwiXG4gICAgICAgICAgICAgIFtuek1heFdpZHRoXT1cIiRhbnkoX2MpLnJlc2l6YWJsZS5tYXhXaWR0aFwiXG4gICAgICAgICAgICAgIFtuek1pbldpZHRoXT1cIiRhbnkoX2MpLnJlc2l6YWJsZS5taW5XaWR0aFwiXG4gICAgICAgICAgICAgIFtuekJvdW5kc109XCIkYW55KF9jKS5yZXNpemFibGUuYm91bmRzXCJcbiAgICAgICAgICAgICAgW256UHJldmlld109XCIkYW55KF9jKS5yZXNpemFibGUucHJldmlld1wiXG4gICAgICAgICAgICAgIChuelJlc2l6ZUVuZCk9XCJjb2xSZXNpemUoJGV2ZW50LCBfYylcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBAaWYgKCRhbnkoIWxhc3QgJiYgISRhbnkoX2MpLnJlc2l6YWJsZS5kaXNhYmxlZCkpIHtcbiAgICAgICAgICAgICAgICA8bnotcmVzaXplLWhhbmRsZSBuekRpcmVjdGlvbj1cInJpZ2h0XCIgKGNsaWNrKT1cIl9zdG9wUHJvcGFnYXRpb24oJGV2ZW50KVwiPlxuICAgICAgICAgICAgICAgICAgPGk+PC9pPlxuICAgICAgICAgICAgICAgIDwvbnotcmVzaXplLWhhbmRsZT5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBAaWYgKF9jLl9fcmVuZGVyVGl0bGUpIHtcbiAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIl9jLl9fcmVuZGVyVGl0bGUhXCJcbiAgICAgICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogaC5jb2x1bW4sIGluZGV4OiBpbmRleCB9XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB9IEBlbHNlIHtcbiAgICAgICAgICAgICAgICBAc3dpdGNoIChfYy50eXBlKSB7XG4gICAgICAgICAgICAgICAgICBAY2FzZSAoJ2NoZWNrYm94Jykge1xuICAgICAgICAgICAgICAgICAgICBAaWYgKF9jLnNlbGVjdGlvbnMhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJjaGtBbGxUcGxcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IGZhbHNlIH1cIiAvPlxuICAgICAgICAgICAgICAgICAgICB9IEBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LXRhYmxlLXNlbGVjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNoa0FsbFRwbFwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogdHJ1ZSB9XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIEBpZiAoX2Muc2VsZWN0aW9ucyEubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtdGFibGUtc2VsZWN0aW9uLWV4dHJhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnotZHJvcGRvd25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG56UGxhY2VtZW50PVwiYm90dG9tTGVmdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbnpEcm9wZG93bk1lbnVdPVwic2VsZWN0aW9uTWVudVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImFudC10YWJsZS1zZWxlY3Rpb24tZG93biBzdF9fY2hlY2thbGwtc2VsZWN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBuei1pY29uIG56VHlwZT1cImRvd25cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPG56LWRyb3Bkb3duLW1lbnUgI3NlbGVjdGlvbk1lbnU9XCJuekRyb3Bkb3duTWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgbnotbWVudSBjbGFzcz1cImFudC10YWJsZS1zZWxlY3Rpb24tbWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBmb3IgKHJ3IG9mIF9jLnNlbGVjdGlvbnM7IHRyYWNrICRpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG56LW1lbnUtaXRlbSAoY2xpY2spPVwiX3Jvd1NlbGVjdGlvbihydylcIiBbaW5uZXJIVE1MXT1cInJ3LnRleHRcIj48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbnotZHJvcGRvd24tbWVudT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgQGRlZmF1bHQge1xuICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwidGl0bGVUcGxcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IF9jLnRpdGxlIH1cIiAvPlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBAaWYgKF9jLmZpbHRlcikge1xuICAgICAgICAgICAgICAgIDxzdC1maWx0ZXJcbiAgICAgICAgICAgICAgICAgIG56LXRoLWV4dHJhXG4gICAgICAgICAgICAgICAgICBbY29sXT1cImguY29sdW1uXCJcbiAgICAgICAgICAgICAgICAgIFtmXT1cIl9jLmZpbHRlclwiXG4gICAgICAgICAgICAgICAgICBbbG9jYWxlXT1cImxvY2FsZVwiXG4gICAgICAgICAgICAgICAgICAobik9XCJoYW5kbGVGaWx0ZXJOb3RpZnkoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAoaGFuZGxlKT1cIl9oYW5kbGVGaWx0ZXIoX2MsICRldmVudClcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgfVxuICAgICAgICA8L3RyPlxuICAgICAgfVxuICAgIDwvdGhlYWQ+XG4gIH1cbiAgPHRib2R5IGNsYXNzPVwic3RfX2JvZHlcIj5cbiAgICBAaWYgKCFfbG9hZGluZykge1xuICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImJvZHlIZWFkZXIhXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBfc3RhdGlzdGljYWwgfVwiIC8+XG4gICAgfVxuICAgIDxuZy10ZW1wbGF0ZSAjYm9keVRwbCBsZXQtaSBsZXQtaW5kZXg9XCJpbmRleFwiPlxuICAgICAgPHRyXG4gICAgICAgIFthdHRyLmRhdGEtaW5kZXhdPVwiaW5kZXhcIlxuICAgICAgICAoY2xpY2spPVwiX3Jvd0NsaWNrKCRldmVudCwgaSwgaW5kZXgsIGZhbHNlKVwiXG4gICAgICAgIChkYmxjbGljayk9XCJfcm93Q2xpY2soJGV2ZW50LCBpLCBpbmRleCwgdHJ1ZSlcIlxuICAgICAgICBbbmdDbGFzc109XCJpLl9yb3dDbGFzc05hbWVcIlxuICAgICAgPlxuICAgICAgICBAaWYgKGV4cGFuZCkge1xuICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgW256U2hvd0V4cGFuZF09XCJleHBhbmQgJiYgaS5zaG93RXhwYW5kICE9PSBmYWxzZVwiXG4gICAgICAgICAgICBbbnpFeHBhbmRdPVwiaS5leHBhbmRcIlxuICAgICAgICAgICAgW256RXhwYW5kSWNvbl09XCJleHBhbmRJY29uXCJcbiAgICAgICAgICAgIChuekV4cGFuZENoYW5nZSk9XCJfZXhwYW5kQ2hhbmdlKGksICRldmVudClcIlxuICAgICAgICAgICAgKGNsaWNrKT1cIl9zdG9wUHJvcGFnYXRpb24oJGV2ZW50KVwiXG4gICAgICAgICAgICBueldpZHRoPVwiNTBweFwiXG4gICAgICAgICAgPjwvdGQ+XG4gICAgICAgIH1cbiAgICAgICAgQGZvciAoYyBvZiBfY29sdW1uczsgdHJhY2sgY0lkeDsgbGV0IGNJZHggPSAkaW5kZXgpIHtcbiAgICAgICAgICBAaWYgKGkuX3ZhbHVlc1tjSWR4XS5wcm9wcz8uY29sU3BhbiA+IDAgJiYgaS5fdmFsdWVzW2NJZHhdLnByb3BzPy5yb3dTcGFuID4gMCkge1xuICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgIFtuekxlZnRdPVwiISFjLl9sZWZ0XCJcbiAgICAgICAgICAgICAgW256UmlnaHRdPVwiISFjLl9yaWdodFwiXG4gICAgICAgICAgICAgIFthdHRyLmRhdGEtY29sLWluZGV4XT1cImNJZHhcIlxuICAgICAgICAgICAgICBbbmdDbGFzc109XCJjLl9jbGFzc05hbWVcIlxuICAgICAgICAgICAgICBbYXR0ci5jb2xzcGFuXT1cImkuX3ZhbHVlc1tjSWR4XS5wcm9wcz8uY29sU3BhbiA9PT0gMSA/IG51bGwgOiBpLl92YWx1ZXNbY0lkeF0ucHJvcHM/LmNvbFNwYW5cIlxuICAgICAgICAgICAgICBbYXR0ci5yb3dzcGFuXT1cImkuX3ZhbHVlc1tjSWR4XS5wcm9wcz8ucm93U3BhbiA9PT0gMSA/IG51bGwgOiBpLl92YWx1ZXNbY0lkeF0ucHJvcHM/LnJvd1NwYW5cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBAaWYgKHJlc3BvbnNpdmUpIHtcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFudC10YWJsZS1yZXBfX3RpdGxlXCI+XG4gICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwidGl0bGVUcGxcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IGMudGl0bGUgfVwiIC8+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDxzdC10ZCBbZGF0YV09XCJfZGF0YVwiIFtpXT1cImlcIiBbaW5kZXhdPVwiaW5kZXhcIiBbY109XCJjXCIgW2NJZHhdPVwiY0lkeFwiIChuKT1cIl9oYW5kbGVUZCgkZXZlbnQpXCIgLz5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICA8L3RyPlxuICAgICAgPHRyIFtuekV4cGFuZF09XCJpLmV4cGFuZFwiPlxuICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiZXhwYW5kXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBpLCBpbmRleDogaW5kZXggfVwiIC8+XG4gICAgICA8L3RyPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgQGlmICh2aXJ0dWFsU2Nyb2xsKSB7XG4gICAgICA8bmctdGVtcGxhdGUgbnotdmlydHVhbC1zY3JvbGwgbGV0LWkgbGV0LWluZGV4PVwiaW5kZXhcIj5cbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImJvZHlUcGxcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IGksIGluZGV4OiBpbmRleCB9XCIgLz5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgfSBAZWxzZSB7XG4gICAgICBAZm9yIChpIG9mIF9kYXRhOyB0cmFjayB0cmFja0J5KCRpbmRleCwgaSkpIHtcbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImJvZHlUcGxcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IGksIGluZGV4OiAkaW5kZXggfVwiIC8+XG4gICAgICB9XG4gICAgfVxuICAgIEBpZiAoIV9sb2FkaW5nKSB7XG4gICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYm9keSFcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IF9zdGF0aXN0aWNhbCB9XCIgLz5cbiAgICB9XG4gIDwvdGJvZHk+XG4gIDxuZy10ZW1wbGF0ZSAjdG90YWxUcGwgbGV0LXJhbmdlPVwicmFuZ2VcIiBsZXQtdG90YWw+e3sgcmVuZGVyVG90YWwodG90YWwsIHJhbmdlKSB9fTwvbmctdGVtcGxhdGU+XG48L256LXRhYmxlPlxuPG56LWRyb3Bkb3duLW1lbnUgI2NvbnRleHRtZW51VHBsPVwibnpEcm9wZG93bk1lbnVcIj5cbiAgPHVsIG56LW1lbnUgY2xhc3M9XCJzdF9fY29udGV4dG1lbnVcIj5cbiAgICBAZm9yIChpIG9mIGNvbnRleHRtZW51TGlzdDsgdHJhY2sgJGluZGV4KSB7XG4gICAgICBAaWYgKGkuY2hpbGRyZW4hLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICA8bGkgbnotbWVudS1pdGVtIChjbGljayk9XCJpLmZuIShpKVwiIFtpbm5lckhUTUxdPVwiaS50ZXh0XCI+PC9saT5cbiAgICAgIH0gQGVsc2Uge1xuICAgICAgICA8bGkgbnotc3VibWVudSBbbnpUaXRsZV09XCJpLnRleHRcIj5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICBAZm9yIChjaSBvZiBpLmNoaWxkcmVuOyB0cmFjayAkaW5kZXgpIHtcbiAgICAgICAgICAgICAgPGxpIG56LW1lbnUtaXRlbSAoY2xpY2spPVwiY2kuZm4hKGNpKVwiIFtpbm5lckhUTUxdPVwiY2kudGV4dFwiPjwvbGk+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9saT5cbiAgICAgIH1cbiAgICB9XG4gIDwvdWw+XG48L256LWRyb3Bkb3duLW1lbnU+XG4iLCI8bmctdGVtcGxhdGUgI2J0blRwbCBsZXQtaSBsZXQtY2hpbGQ9XCJjaGlsZFwiPlxuICBAaWYgKGkudG9vbHRpcCkge1xuICAgIDxzcGFuIG56LXRvb2x0aXAgW256VG9vbHRpcFRpdGxlXT1cImkudG9vbHRpcFwiIFtjbGFzcy5kLWJsb2NrXT1cImNoaWxkXCIgW2NsYXNzLndpZHRoLTEwMF09XCJjaGlsZFwiPlxuICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImJ0bkl0ZW1UcGxcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IGkgfVwiIC8+XG4gICAgPC9zcGFuPlxuICB9IEBlbHNlIHtcbiAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYnRuSXRlbVRwbFwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogaSB9XCIgLz5cbiAgfVxuPC9uZy10ZW1wbGF0ZT5cbjxuZy10ZW1wbGF0ZSAjYnRuSXRlbVRwbCBsZXQtaT5cbiAgQGlmIChpLnBvcCkge1xuICAgIDxhXG4gICAgICBuei1wb3Bjb25maXJtXG4gICAgICBbbnpQb3Bjb25maXJtVGl0bGVdPVwiaS5wb3AudGl0bGVcIlxuICAgICAgW256SWNvbl09XCJpLnBvcC5pY29uXCJcbiAgICAgIFtuekNvbmRpdGlvbl09XCJpLnBvcC5jb25kaXRpb24oaSlcIlxuICAgICAgW256Q2FuY2VsVGV4dF09XCJpLnBvcC5jYW5jZWxUZXh0XCJcbiAgICAgIFtuek9rVGV4dF09XCJpLnBvcC5va1RleHRcIlxuICAgICAgW256T2tUeXBlXT1cImkucG9wLm9rVHlwZVwiXG4gICAgICAobnpPbkNvbmZpcm0pPVwiX2J0bihpKVwiXG4gICAgICBjbGFzcz1cInN0X19idG4tdGV4dFwiXG4gICAgICBbbmdDbGFzc109XCJpLl9jbGFzc05hbWVcIlxuICAgICAgKGNsaWNrKT1cIl9zdG9wUHJvcGFnYXRpb24oJGV2ZW50KVwiXG4gICAgPlxuICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImJ0blRleHRUcGxcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IGkgfVwiIC8+XG4gICAgPC9hPlxuICB9IEBlbHNlIHtcbiAgICA8YSAoY2xpY2spPVwiX2J0bihpLCAkZXZlbnQpXCIgY2xhc3M9XCJzdF9fYnRuLXRleHRcIiBbbmdDbGFzc109XCJpLl9jbGFzc05hbWVcIj5cbiAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJidG5UZXh0VHBsXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBpIH1cIiAvPlxuICAgIDwvYT5cbiAgfVxuPC9uZy10ZW1wbGF0ZT5cbjxuZy10ZW1wbGF0ZSAjYnRuVGV4dFRwbCBsZXQtaT5cbiAgQGlmIChpLl9pY29uKSB7XG4gICAgQGlmIChpLl9pY29uLmljb25mb250KSB7XG4gICAgICA8aSBuei1pY29uIFtuekljb25mb250XT1cImkuX2ljb24uaWNvbmZvbnRcIj48L2k+XG4gICAgfSBAZWxzZSB7XG4gICAgICA8aVxuICAgICAgICBuei1pY29uXG4gICAgICAgIFtuelR5cGVdPVwiaS5faWNvbi50eXBlXCJcbiAgICAgICAgW256VGhlbWVdPVwiaS5faWNvbi50aGVtZVwiXG4gICAgICAgIFtuelNwaW5dPVwiaS5faWNvbi5zcGluXCJcbiAgICAgICAgW256VHdvdG9uZUNvbG9yXT1cImkuX2ljb24udHdvVG9uZUNvbG9yXCJcbiAgICAgID48L2k+XG4gICAgfVxuICB9XG4gIDxzcGFuIFtpbm5lckhUTUxdPVwiaS5fdGV4dFwiIFtuZ0NsYXNzXT1cInsgJ3BsLXhzJzogaS5faWNvbiB9XCI+PC9zcGFuPlxuPC9uZy10ZW1wbGF0ZT5cbkBpZiAoYy5fX3JlbmRlcikge1xuICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYy5fX3JlbmRlciFcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IGksIGluZGV4OiBpbmRleCwgY29sdW1uOiBjIH1cIiAvPlxufSBAZWxzZSB7XG4gIEBzd2l0Y2ggKGMudHlwZSkge1xuICAgIEBjYXNlICgnY2hlY2tib3gnKSB7XG4gICAgICA8bGFiZWwgbnotY2hlY2tib3ggW256RGlzYWJsZWRdPVwiaS5kaXNhYmxlZFwiIFtuZ01vZGVsXT1cImkuY2hlY2tlZFwiIChuZ01vZGVsQ2hhbmdlKT1cIl9jaGVja2JveCgkZXZlbnQpXCI+PC9sYWJlbD5cbiAgICB9XG4gICAgQGNhc2UgKCdyYWRpbycpIHtcbiAgICAgIDxsYWJlbCBuei1yYWRpbyBbbnpEaXNhYmxlZF09XCJpLmRpc2FibGVkXCIgW25nTW9kZWxdPVwiaS5jaGVja2VkXCIgKG5nTW9kZWxDaGFuZ2UpPVwiX3JhZGlvKClcIj48L2xhYmVsPlxuICAgIH1cbiAgICBAY2FzZSAoJ2xpbmsnKSB7XG4gICAgICA8YSAoY2xpY2spPVwiX2xpbmsoJGV2ZW50KVwiIFtpbm5lckhUTUxdPVwiaS5fdmFsdWVzW2NJZHhdLl90ZXh0XCIgW2F0dHIudGl0bGVdPVwiaS5fdmFsdWVzW2NJZHhdLnRleHRcIj48L2E+XG4gICAgfVxuICAgIEBjYXNlICgndGFnJykge1xuICAgICAgPG56LXRhZyBbbnpDb2xvcl09XCJpLl92YWx1ZXNbY0lkeF0uY29sb3JcIiBbbnotdG9vbHRpcF09XCJpLl92YWx1ZXNbY0lkeF0udG9vbHRpcFwiPlxuICAgICAgICA8c3BhbiBbaW5uZXJIVE1MXT1cImkuX3ZhbHVlc1tjSWR4XS5fdGV4dFwiPjwvc3Bhbj5cbiAgICAgIDwvbnotdGFnPlxuICAgIH1cbiAgICBAY2FzZSAoJ2JhZGdlJykge1xuICAgICAgPG56LWJhZGdlXG4gICAgICAgIFtuelN0YXR1c109XCJpLl92YWx1ZXNbY0lkeF0uY29sb3JcIlxuICAgICAgICBbbnpUZXh0XT1cImkuX3ZhbHVlc1tjSWR4XS50ZXh0XCJcbiAgICAgICAgW256LXRvb2x0aXBdPVwiaS5fdmFsdWVzW2NJZHhdLnRvb2x0aXBcIlxuICAgICAgLz5cbiAgICB9XG4gICAgQGNhc2UgKCdjZWxsJykge1xuICAgICAgPGNlbGwgW3ZhbHVlXT1cImkuX3ZhbHVlc1tjSWR4XS50ZXh0XCIgW29wdGlvbnNdPVwiaS5fdmFsdWVzW2NJZHhdLmNlbGwgPz8gYy5jZWxsXCIgLz5cbiAgICB9XG4gICAgQGNhc2UgKCd3aWRnZXQnKSB7XG4gICAgICA8bmctdGVtcGxhdGUgc3Qtd2lkZ2V0LWhvc3QgW3JlY29yZF09XCJpXCIgW2NvbHVtbl09XCJjXCIgLz5cbiAgICB9XG4gICAgQGRlZmF1bHQge1xuICAgICAgQGlmIChjLnNhZmVUeXBlID09PSAndGV4dCcpIHtcbiAgICAgICAgPHNwYW4gW2lubmVyVGV4dF09XCJpLl92YWx1ZXNbY0lkeF0uX3RleHRcIiBbYXR0ci50aXRsZV09XCJjLl9pc1RydW5jYXRlID8gaS5fdmFsdWVzW2NJZHhdLnRleHQgOiBudWxsXCI+PC9zcGFuPlxuICAgICAgfSBAZWxzZSB7XG4gICAgICAgIDxzcGFuIFtpbm5lckhUTUxdPVwiaS5fdmFsdWVzW2NJZHhdLl90ZXh0XCIgW2F0dHIudGl0bGVdPVwiYy5faXNUcnVuY2F0ZSA/IGkuX3ZhbHVlc1tjSWR4XS50ZXh0IDogbnVsbFwiPjwvc3Bhbj5cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgQGZvciAoYnRuIG9mIGkuX3ZhbHVlc1tjSWR4XS5idXR0b25zOyB0cmFjayAkaW5kZXgpIHtcbiAgICBAaWYgKGJ0bi5jaGlsZHJlbiEubGVuZ3RoID4gMCkge1xuICAgICAgPGEgbnotZHJvcGRvd24gW256RHJvcGRvd25NZW51XT1cImJ0bk1lbnVcIiBuek92ZXJsYXlDbGFzc05hbWU9XCJzdF9fYnRuLXN1YlwiPlxuICAgICAgICA8c3BhbiBbaW5uZXJIVE1MXT1cImJ0bi5fdGV4dFwiPjwvc3Bhbj5cbiAgICAgICAgPGkgbnotaWNvbiBuelR5cGU9XCJkb3duXCI+PC9pPlxuICAgICAgPC9hPlxuICAgICAgPG56LWRyb3Bkb3duLW1lbnUgI2J0bk1lbnU9XCJuekRyb3Bkb3duTWVudVwiPlxuICAgICAgICA8dWwgbnotbWVudT5cbiAgICAgICAgICBAZm9yIChzdWJCdG4gb2YgYnRuLmNoaWxkcmVuOyB0cmFjayAkaW5kZXgpIHtcbiAgICAgICAgICAgIEBpZiAoc3ViQnRuLnR5cGUgPT09ICdkaXZpZGVyJykge1xuICAgICAgICAgICAgICA8bGkgbnotbWVudS1kaXZpZGVyPjwvbGk+XG4gICAgICAgICAgICB9IEBlbHNlIHtcbiAgICAgICAgICAgICAgPGxpIG56LW1lbnUtaXRlbSBbY2xhc3Muc3RfX2J0bi1kaXNhYmxlZF09XCJzdWJCdG4uX2Rpc2FibGVkXCI+XG4gICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJidG5UcGxcIlxuICAgICAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBzdWJCdG4sIGNoaWxkOiB0cnVlIH1cIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9uei1kcm9wZG93bi1tZW51PlxuICAgIH0gQGVsc2Uge1xuICAgICAgPHNwYW4gW2NsYXNzLnN0X19idG4tZGlzYWJsZWRdPVwiYnRuLl9kaXNhYmxlZFwiPlxuICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYnRuVHBsXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBidG4sIGNoaWxkOiBmYWxzZSB9XCIgLz5cbiAgICAgIDwvc3Bhbj5cbiAgICB9XG4gICAgQGlmICghJGxhc3QpIHtcbiAgICAgIDxuei1kaXZpZGVyIG56VHlwZT1cInZlcnRpY2FsXCIgLz5cbiAgICB9XG4gIH1cbn1cbiJdfQ==