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
        this.i18nSrv = inject(ALAIN_I18N_TOKEN, { optional: true });
        this.el = inject(ElementRef).nativeElement;
        this.cdr = inject(ChangeDetectorRef);
        this.doc = inject(DOCUMENT);
        this.exportSrv = inject(STExport);
        this.columnSource = inject(STColumnSource);
        this.dataSource = inject(STDataSource);
        this.delonI18n = inject(DelonLocaleService);
        this.cms = inject(NzContextMenuService);
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
        this.i18nSrv?.change
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
            this.cms.create(event, this.contextmenuTpl);
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.4", ngImport: i0, type: STComponent, deps: [{ token: i1.AlainConfigService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.2.4", type: STComponent, selector: "st", inputs: { req: "req", res: "res", page: "page", data: "data", columns: "columns", contextmenu: "contextmenu", ps: ["ps", "ps", (v) => numberAttribute(v, 10)], pi: ["pi", "pi", (v) => numberAttribute(v, 1)], total: ["total", "total", (v) => numberAttribute(v, 0)], loading: "loading", loadingDelay: ["loadingDelay", "loadingDelay", numberAttribute], loadingIndicator: "loadingIndicator", bordered: ["bordered", "bordered", booleanAttribute], size: "size", scroll: "scroll", singleSort: "singleSort", multiSort: "multiSort", rowClassName: "rowClassName", clickRowClassName: "clickRowClassName", widthMode: "widthMode", widthConfig: "widthConfig", resizable: "resizable", header: "header", showHeader: ["showHeader", "showHeader", booleanAttribute], footer: "footer", bodyHeader: "bodyHeader", body: "body", expandRowByClick: ["expandRowByClick", "expandRowByClick", booleanAttribute], expandAccordion: ["expandAccordion", "expandAccordion", booleanAttribute], expand: "expand", noResult: "noResult", responsive: ["responsive", "responsive", booleanAttribute], responsiveHideHeaderFooter: ["responsiveHideHeaderFooter", "responsiveHideHeaderFooter", booleanAttribute], virtualScroll: ["virtualScroll", "virtualScroll", booleanAttribute], virtualItemSize: ["virtualItemSize", "virtualItemSize", numberAttribute], virtualMaxBufferPx: ["virtualMaxBufferPx", "virtualMaxBufferPx", numberAttribute], virtualMinBufferPx: ["virtualMinBufferPx", "virtualMinBufferPx", numberAttribute], customRequest: "customRequest", virtualForTrackBy: "virtualForTrackBy", trackBy: "trackBy" }, outputs: { error: "error", change: "change" }, host: { properties: { "class.st": "true", "class.st__p-left": "page.placement === 'left'", "class.st__p-center": "page.placement === 'center'", "class.st__width-strict": "widthMode.type === 'strict'", "class.st__row-class": "rowClassName", "class.ant-table-rep": "responsive", "class.ant-table-rep__hide-header-footer": "responsiveHideHeaderFooter" } }, providers: [STDataSource, STRowSource, STColumnSource, STExport, DatePipe, YNPipe, DecimalPipe], viewQueries: [{ propertyName: "orgTable", first: true, predicate: ["table"], descendants: true }, { propertyName: "contextmenuTpl", first: true, predicate: ["contextmenuTpl"], descendants: true }], exportAs: ["st"], usesOnChanges: true, ngImport: i0, template: "<ng-template #titleTpl let-i>\n  <span [innerHTML]=\"i._text\"></span>\n  @if (i.optional) {\n    <small class=\"st__head-optional\" [innerHTML]=\"i.optional\"></small>\n  }\n  @if (i.optionalHelp) {\n    <i class=\"st__head-tip\" nz-tooltip [nzTooltipTitle]=\"i.optionalHelp\" nz-icon nzType=\"question-circle\"></i>\n  }\n</ng-template>\n<ng-template #chkAllTpl let-custom>\n  <label\n    nz-checkbox\n    class=\"st__checkall\"\n    [nzDisabled]=\"_allCheckedDisabled\"\n    [(ngModel)]=\"_allChecked\"\n    [nzIndeterminate]=\"_indeterminate\"\n    (ngModelChange)=\"checkAll()\"\n    [class.ant-table-selection-select-all-custom]=\"custom\"\n  ></label>\n</ng-template>\n<nz-table\n  #table\n  [nzData]=\"_data\"\n  [(nzPageIndex)]=\"pi\"\n  (nzPageIndexChange)=\"_change('pi')\"\n  [(nzPageSize)]=\"ps\"\n  (nzPageSizeChange)=\"_change('ps')\"\n  [nzTotal]=\"total\"\n  [nzShowPagination]=\"_isPagination\"\n  [nzFrontPagination]=\"false\"\n  [nzBordered]=\"bordered\"\n  [nzSize]=\"size\"\n  [nzLoading]=\"noColumns || _loading\"\n  [nzLoadingDelay]=\"loadingDelay\"\n  [nzLoadingIndicator]=\"loadingIndicator\"\n  [nzTitle]=\"header!\"\n  [nzFooter]=\"footer!\"\n  [nzScroll]=\"scroll\"\n  [nzVirtualItemSize]=\"virtualItemSize\"\n  [nzVirtualMaxBufferPx]=\"virtualMaxBufferPx\"\n  [nzVirtualMinBufferPx]=\"virtualMinBufferPx\"\n  [nzVirtualForTrackBy]=\"virtualForTrackBy\"\n  [nzNoResult]=\"noResult!\"\n  [nzPageSizeOptions]=\"page.pageSizes!\"\n  [nzShowQuickJumper]=\"page.showQuickJumper\"\n  [nzShowSizeChanger]=\"page.showSize\"\n  [nzPaginationPosition]=\"page.position!\"\n  [nzPaginationType]=\"page.type!\"\n  [nzItemRender]=\"page.itemRender!\"\n  [nzSimple]=\"page.simple\"\n  [nzShowTotal]=\"totalTpl\"\n  [nzWidthConfig]=\"_widthConfig\"\n  (contextmenu)=\"onContextmenu($event)\"\n  [class.st__no-column]=\"noColumns\"\n>\n  @if (showHeader) {\n    <thead>\n      @for (row of _headers; track row) {\n        <tr>\n          @if ($first && expand) {\n            <th nzWidth=\"50px\" [rowSpan]=\"_headers.length\"></th>\n          }\n          @for (h of row; track h; let index = $index; let last = $last) {\n            <th\n              *let=\"h.column as _c\"\n              [colSpan]=\"h.colSpan\"\n              [rowSpan]=\"h.rowSpan\"\n              [nzWidth]=\"$any(_c).width\"\n              [nzLeft]=\"_c._left!\"\n              [nzRight]=\"_c._right!\"\n              [ngClass]=\"_c._className\"\n              [attr.data-col]=\"_c.indexKey\"\n              [attr.data-col-index]=\"index\"\n              [nzShowSort]=\"_c._sort.enabled\"\n              [nzSortOrder]=\"$any(_c)._sort.default\"\n              (nzSortOrderChange)=\"sort(_c, $event)\"\n              [nzCustomFilter]=\"!!_c.filter\"\n              [class.st__has-filter]=\"_c.filter\"\n              nz-resizable\n              [nzDisabled]=\"last || $any(_c).resizable.disabled\"\n              [nzMaxWidth]=\"$any(_c).resizable.maxWidth\"\n              [nzMinWidth]=\"$any(_c).resizable.minWidth\"\n              [nzBounds]=\"$any(_c).resizable.bounds\"\n              [nzPreview]=\"$any(_c).resizable.preview\"\n              (nzResizeEnd)=\"colResize($event, _c)\"\n            >\n              @if ($any(!last && !$any(_c).resizable.disabled)) {\n                <nz-resize-handle nzDirection=\"right\" (click)=\"_stopPropagation($event)\">\n                  <i></i>\n                </nz-resize-handle>\n              }\n              @if (_c.__renderTitle) {\n                <ng-template\n                  [ngTemplateOutlet]=\"_c.__renderTitle!\"\n                  [ngTemplateOutletContext]=\"{ $implicit: h.column, index: index }\"\n                />\n              } @else {\n                @switch (_c.type) {\n                  @case ('checkbox') {\n                    @if (_c.selections!.length === 0) {\n                      <ng-template [ngTemplateOutlet]=\"chkAllTpl\" [ngTemplateOutletContext]=\"{ $implicit: false }\" />\n                    } @else {\n                      <div class=\"ant-table-selection\">\n                        <ng-template [ngTemplateOutlet]=\"chkAllTpl\" [ngTemplateOutletContext]=\"{ $implicit: true }\" />\n                        @if (_c.selections!.length) {\n                          <div class=\"ant-table-selection-extra\">\n                            <div\n                              nz-dropdown\n                              nzPlacement=\"bottomLeft\"\n                              [nzDropdownMenu]=\"selectionMenu\"\n                              class=\"ant-table-selection-down st__checkall-selection\"\n                            >\n                              <i nz-icon nzType=\"down\"></i>\n                            </div>\n                          </div>\n                        }\n                        <nz-dropdown-menu #selectionMenu=\"nzDropdownMenu\">\n                          <ul nz-menu class=\"ant-table-selection-menu\">\n                            @for (rw of _c.selections; track $index) {\n                              <li nz-menu-item (click)=\"_rowSelection(rw)\" [innerHTML]=\"rw.text\"></li>\n                            }\n                          </ul>\n                        </nz-dropdown-menu>\n                      </div>\n                    }\n                  }\n                  @default {\n                    <ng-template [ngTemplateOutlet]=\"titleTpl\" [ngTemplateOutletContext]=\"{ $implicit: _c.title }\" />\n                  }\n                }\n              }\n              @if (_c.filter) {\n                <st-filter\n                  nz-th-extra\n                  [col]=\"h.column\"\n                  [f]=\"_c.filter\"\n                  [locale]=\"locale\"\n                  (n)=\"handleFilterNotify($event)\"\n                  (handle)=\"_handleFilter(_c, $event)\"\n                />\n              }\n            </th>\n          }\n        </tr>\n      }\n    </thead>\n  }\n  <tbody class=\"st__body\">\n    @if (!_loading) {\n      <ng-template [ngTemplateOutlet]=\"bodyHeader!\" [ngTemplateOutletContext]=\"{ $implicit: _statistical }\" />\n    }\n    <ng-template #bodyTpl let-i let-index=\"index\">\n      <tr\n        [attr.data-index]=\"index\"\n        (click)=\"_rowClick($event, i, index, false)\"\n        (dblclick)=\"_rowClick($event, i, index, true)\"\n        [ngClass]=\"i._rowClassName\"\n      >\n        @if (expand) {\n          <td\n            [nzShowExpand]=\"expand && i.showExpand !== false\"\n            [nzExpand]=\"i.expand\"\n            (nzExpandChange)=\"_expandChange(i, $event)\"\n            (click)=\"_stopPropagation($event)\"\n            nzWidth=\"50px\"\n          ></td>\n        }\n        @for (c of _columns; track cIdx; let cIdx = $index) {\n          @if (i._values[cIdx].props?.colSpan > 0 && i._values[cIdx].props?.rowSpan > 0) {\n            <td\n              [nzLeft]=\"!!c._left\"\n              [nzRight]=\"!!c._right\"\n              [attr.data-col-index]=\"cIdx\"\n              [ngClass]=\"c._className\"\n              [attr.colspan]=\"i._values[cIdx].props?.colSpan === 1 ? null : i._values[cIdx].props?.colSpan\"\n              [attr.rowspan]=\"i._values[cIdx].props?.rowSpan === 1 ? null : i._values[cIdx].props?.rowSpan\"\n            >\n              @if (responsive) {\n                <span class=\"ant-table-rep__title\">\n                  <ng-template [ngTemplateOutlet]=\"titleTpl\" [ngTemplateOutletContext]=\"{ $implicit: c.title }\" />\n                </span>\n              }\n              <st-td [data]=\"_data\" [i]=\"i\" [index]=\"index\" [c]=\"c\" [cIdx]=\"cIdx\" (n)=\"_handleTd($event)\" />\n            </td>\n          }\n        }\n      </tr>\n      <tr [nzExpand]=\"i.expand\">\n        <ng-template [ngTemplateOutlet]=\"expand\" [ngTemplateOutletContext]=\"{ $implicit: i, index: index }\" />\n      </tr>\n    </ng-template>\n    @if (virtualScroll) {\n      <ng-template nz-virtual-scroll let-i let-index=\"index\">\n        <ng-template [ngTemplateOutlet]=\"bodyTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, index: index }\" />\n      </ng-template>\n    } @else {\n      @for (i of _data; track trackBy($index, i)) {\n        <ng-template [ngTemplateOutlet]=\"bodyTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, index: $index }\" />\n      }\n    }\n    @if (!_loading) {\n      <ng-template [ngTemplateOutlet]=\"body!\" [ngTemplateOutletContext]=\"{ $implicit: _statistical }\" />\n    }\n  </tbody>\n  <ng-template #totalTpl let-range=\"range\" let-total>{{ renderTotal(total, range) }}</ng-template>\n</nz-table>\n<nz-dropdown-menu #contextmenuTpl=\"nzDropdownMenu\">\n  <ul nz-menu class=\"st__contextmenu\">\n    @for (i of contextmenuList; track $index) {\n      @if (i.children!.length === 0) {\n        <li nz-menu-item (click)=\"i.fn!(i)\" [innerHTML]=\"i.text\"></li>\n      } @else {\n        <li nz-submenu [nzTitle]=\"i.text\">\n          <ul>\n            @for (ci of i.children; track $index) {\n              <li nz-menu-item (click)=\"ci.fn!(ci)\" [innerHTML]=\"ci.text\"></li>\n            }\n          </ul>\n        </li>\n      }\n    }\n  </ul>\n</nz-dropdown-menu>\n", dependencies: [{ kind: "directive", type: i0.forwardRef(() => i2.NgClass), selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i0.forwardRef(() => i2.NgTemplateOutlet), selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i0.forwardRef(() => i3.NgControlStatus), selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i0.forwardRef(() => i3.NgModel), selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i0.forwardRef(() => i4.LetDirective), selector: "[let]", inputs: ["let"] }, { kind: "component", type: i0.forwardRef(() => i5.NzTableComponent), selector: "nz-table", inputs: ["nzTableLayout", "nzShowTotal", "nzItemRender", "nzTitle", "nzFooter", "nzNoResult", "nzPageSizeOptions", "nzVirtualItemSize", "nzVirtualMaxBufferPx", "nzVirtualMinBufferPx", "nzVirtualForTrackBy", "nzLoadingDelay", "nzPageIndex", "nzPageSize", "nzTotal", "nzWidthConfig", "nzData", "nzCustomColumn", "nzPaginationPosition", "nzScroll", "nzPaginationType", "nzFrontPagination", "nzTemplateMode", "nzShowPagination", "nzLoading", "nzOuterBordered", "nzLoadingIndicator", "nzBordered", "nzSize", "nzShowSizeChanger", "nzHideOnSinglePage", "nzShowQuickJumper", "nzSimple"], outputs: ["nzPageSizeChange", "nzPageIndexChange", "nzQueryParams", "nzCurrentPageDataChange", "nzCustomColumnChange"], exportAs: ["nzTable"] }, { kind: "component", type: i0.forwardRef(() => i5.NzThAddOnComponent), selector: "th[nzColumnKey], th[nzSortFn], th[nzSortOrder], th[nzFilters], th[nzShowSort], th[nzShowFilter], th[nzCustomFilter]", inputs: ["nzColumnKey", "nzFilterMultiple", "nzSortOrder", "nzSortPriority", "nzSortDirections", "nzFilters", "nzSortFn", "nzFilterFn", "nzShowSort", "nzShowFilter", "nzCustomFilter"], outputs: ["nzCheckedChange", "nzSortOrderChange", "nzFilterChange"] }, { kind: "directive", type: i0.forwardRef(() => i5.NzTableCellDirective), selector: "th:not(.nz-disable-th):not([mat-cell]), td:not(.nz-disable-td):not([mat-cell])" }, { kind: "directive", type: i0.forwardRef(() => i5.NzThMeasureDirective), selector: "th", inputs: ["nzWidth", "colspan", "colSpan", "rowspan", "rowSpan"] }, { kind: "component", type: i0.forwardRef(() => i5.NzTdAddOnComponent), selector: "td[nzChecked], td[nzDisabled], td[nzIndeterminate], td[nzIndentSize], td[nzExpand], td[nzShowExpand], td[nzShowCheckbox]", inputs: ["nzChecked", "nzDisabled", "nzIndeterminate", "nzLabel", "nzIndentSize", "nzShowExpand", "nzShowCheckbox", "nzExpand", "nzExpandIcon"], outputs: ["nzCheckedChange", "nzExpandChange"] }, { kind: "component", type: i0.forwardRef(() => i5.NzTheadComponent), selector: "thead:not(.ant-table-thead)", outputs: ["nzSortOrderChange"] }, { kind: "component", type: i0.forwardRef(() => i5.NzTbodyComponent), selector: "tbody" }, { kind: "directive", type: i0.forwardRef(() => i5.NzTrDirective), selector: "tr:not([mat-row]):not([mat-header-row]):not([nz-table-measure-row]):not([nzExpand]):not([nz-table-fixed-row])" }, { kind: "directive", type: i0.forwardRef(() => i5.NzTableVirtualScrollDirective), selector: "[nz-virtual-scroll]", exportAs: ["nzVirtualScroll"] }, { kind: "directive", type: i0.forwardRef(() => i5.NzCellFixedDirective), selector: "td[nzRight],th[nzRight],td[nzLeft],th[nzLeft]", inputs: ["nzRight", "nzLeft", "colspan", "colSpan"] }, { kind: "directive", type: i0.forwardRef(() => i5.NzTrExpandDirective), selector: "tr[nzExpand]", inputs: ["nzExpand"] }, { kind: "component", type: i0.forwardRef(() => i5.NzTableFixedRowComponent), selector: "tr[nz-table-fixed-row], tr[nzExpand]" }, { kind: "directive", type: i0.forwardRef(() => i6.NzIconDirective), selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "component", type: i0.forwardRef(() => i7.NzCheckboxComponent), selector: "[nz-checkbox]", inputs: ["nzValue", "nzAutoFocus", "nzDisabled", "nzIndeterminate", "nzChecked", "nzId"], outputs: ["nzCheckedChange"], exportAs: ["nzCheckbox"] }, { kind: "directive", type: i0.forwardRef(() => i8.NzMenuDirective), selector: "[nz-menu]", inputs: ["nzInlineIndent", "nzTheme", "nzMode", "nzInlineCollapsed", "nzSelectable"], outputs: ["nzClick"], exportAs: ["nzMenu"] }, { kind: "component", type: i0.forwardRef(() => i8.NzMenuItemComponent), selector: "[nz-menu-item]", inputs: ["nzPaddingLeft", "nzDisabled", "nzSelected", "nzDanger", "nzMatchRouterExact", "nzMatchRouter"], exportAs: ["nzMenuItem"] }, { kind: "component", type: i0.forwardRef(() => i8.NzSubMenuComponent), selector: "[nz-submenu]", inputs: ["nzMenuClassName", "nzPaddingLeft", "nzTitle", "nzIcon", "nzOpen", "nzDisabled", "nzPlacement"], outputs: ["nzOpenChange"], exportAs: ["nzSubmenu"] }, { kind: "directive", type: i0.forwardRef(() => i9.NzDropDownDirective), selector: "[nz-dropdown]", inputs: ["nzDropdownMenu", "nzTrigger", "nzMatchWidthElement", "nzBackdrop", "nzClickHide", "nzDisabled", "nzVisible", "nzOverlayClassName", "nzOverlayStyle", "nzPlacement"], outputs: ["nzVisibleChange"], exportAs: ["nzDropdown"] }, { kind: "component", type: i0.forwardRef(() => i9.NzDropdownMenuComponent), selector: "nz-dropdown-menu", exportAs: ["nzDropdownMenu"] }, { kind: "directive", type: i0.forwardRef(() => i10.NzTooltipDirective), selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "cdkConnectedOverlayPush", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }, { kind: "directive", type: i0.forwardRef(() => i11.NzResizableDirective), selector: "[nz-resizable]", inputs: ["nzBounds", "nzMaxHeight", "nzMaxWidth", "nzMinHeight", "nzMinWidth", "nzGridColumnCount", "nzMaxColumn", "nzMinColumn", "nzLockAspectRatio", "nzPreview", "nzDisabled"], outputs: ["nzResize", "nzResizeEnd", "nzResizeStart"], exportAs: ["nzResizable"] }, { kind: "component", type: i0.forwardRef(() => i11.NzResizeHandleComponent), selector: "nz-resize-handle, [nz-resize-handle]", inputs: ["nzDirection", "nzCursorType"], outputs: ["nzMouseDown"], exportAs: ["nzResizeHandle"] }, { kind: "component", type: i0.forwardRef(() => i12.STFilterComponent), selector: "st-filter", inputs: ["col", "locale", "f"], outputs: ["n", "handle"] }, { kind: "component", type: i0.forwardRef(() => STTdComponent), selector: "st-td", inputs: ["c", "cIdx", "data", "i", "index"], outputs: ["n"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.4", ngImport: i0, type: STComponent, decorators: [{
            type: Component,
            args: [{ selector: 'st', exportAs: 'st', providers: [STDataSource, STRowSource, STColumnSource, STExport, DatePipe, YNPipe, DecimalPipe], host: {
                        '[class.st]': `true`,
                        '[class.st__p-left]': `page.placement === 'left'`,
                        '[class.st__p-center]': `page.placement === 'center'`,
                        '[class.st__width-strict]': `widthMode.type === 'strict'`,
                        '[class.st__row-class]': `rowClassName`,
                        '[class.ant-table-rep]': `responsive`,
                        '[class.ant-table-rep__hide-header-footer]': `responsiveHideHeaderFooter`
                    }, preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<ng-template #titleTpl let-i>\n  <span [innerHTML]=\"i._text\"></span>\n  @if (i.optional) {\n    <small class=\"st__head-optional\" [innerHTML]=\"i.optional\"></small>\n  }\n  @if (i.optionalHelp) {\n    <i class=\"st__head-tip\" nz-tooltip [nzTooltipTitle]=\"i.optionalHelp\" nz-icon nzType=\"question-circle\"></i>\n  }\n</ng-template>\n<ng-template #chkAllTpl let-custom>\n  <label\n    nz-checkbox\n    class=\"st__checkall\"\n    [nzDisabled]=\"_allCheckedDisabled\"\n    [(ngModel)]=\"_allChecked\"\n    [nzIndeterminate]=\"_indeterminate\"\n    (ngModelChange)=\"checkAll()\"\n    [class.ant-table-selection-select-all-custom]=\"custom\"\n  ></label>\n</ng-template>\n<nz-table\n  #table\n  [nzData]=\"_data\"\n  [(nzPageIndex)]=\"pi\"\n  (nzPageIndexChange)=\"_change('pi')\"\n  [(nzPageSize)]=\"ps\"\n  (nzPageSizeChange)=\"_change('ps')\"\n  [nzTotal]=\"total\"\n  [nzShowPagination]=\"_isPagination\"\n  [nzFrontPagination]=\"false\"\n  [nzBordered]=\"bordered\"\n  [nzSize]=\"size\"\n  [nzLoading]=\"noColumns || _loading\"\n  [nzLoadingDelay]=\"loadingDelay\"\n  [nzLoadingIndicator]=\"loadingIndicator\"\n  [nzTitle]=\"header!\"\n  [nzFooter]=\"footer!\"\n  [nzScroll]=\"scroll\"\n  [nzVirtualItemSize]=\"virtualItemSize\"\n  [nzVirtualMaxBufferPx]=\"virtualMaxBufferPx\"\n  [nzVirtualMinBufferPx]=\"virtualMinBufferPx\"\n  [nzVirtualForTrackBy]=\"virtualForTrackBy\"\n  [nzNoResult]=\"noResult!\"\n  [nzPageSizeOptions]=\"page.pageSizes!\"\n  [nzShowQuickJumper]=\"page.showQuickJumper\"\n  [nzShowSizeChanger]=\"page.showSize\"\n  [nzPaginationPosition]=\"page.position!\"\n  [nzPaginationType]=\"page.type!\"\n  [nzItemRender]=\"page.itemRender!\"\n  [nzSimple]=\"page.simple\"\n  [nzShowTotal]=\"totalTpl\"\n  [nzWidthConfig]=\"_widthConfig\"\n  (contextmenu)=\"onContextmenu($event)\"\n  [class.st__no-column]=\"noColumns\"\n>\n  @if (showHeader) {\n    <thead>\n      @for (row of _headers; track row) {\n        <tr>\n          @if ($first && expand) {\n            <th nzWidth=\"50px\" [rowSpan]=\"_headers.length\"></th>\n          }\n          @for (h of row; track h; let index = $index; let last = $last) {\n            <th\n              *let=\"h.column as _c\"\n              [colSpan]=\"h.colSpan\"\n              [rowSpan]=\"h.rowSpan\"\n              [nzWidth]=\"$any(_c).width\"\n              [nzLeft]=\"_c._left!\"\n              [nzRight]=\"_c._right!\"\n              [ngClass]=\"_c._className\"\n              [attr.data-col]=\"_c.indexKey\"\n              [attr.data-col-index]=\"index\"\n              [nzShowSort]=\"_c._sort.enabled\"\n              [nzSortOrder]=\"$any(_c)._sort.default\"\n              (nzSortOrderChange)=\"sort(_c, $event)\"\n              [nzCustomFilter]=\"!!_c.filter\"\n              [class.st__has-filter]=\"_c.filter\"\n              nz-resizable\n              [nzDisabled]=\"last || $any(_c).resizable.disabled\"\n              [nzMaxWidth]=\"$any(_c).resizable.maxWidth\"\n              [nzMinWidth]=\"$any(_c).resizable.minWidth\"\n              [nzBounds]=\"$any(_c).resizable.bounds\"\n              [nzPreview]=\"$any(_c).resizable.preview\"\n              (nzResizeEnd)=\"colResize($event, _c)\"\n            >\n              @if ($any(!last && !$any(_c).resizable.disabled)) {\n                <nz-resize-handle nzDirection=\"right\" (click)=\"_stopPropagation($event)\">\n                  <i></i>\n                </nz-resize-handle>\n              }\n              @if (_c.__renderTitle) {\n                <ng-template\n                  [ngTemplateOutlet]=\"_c.__renderTitle!\"\n                  [ngTemplateOutletContext]=\"{ $implicit: h.column, index: index }\"\n                />\n              } @else {\n                @switch (_c.type) {\n                  @case ('checkbox') {\n                    @if (_c.selections!.length === 0) {\n                      <ng-template [ngTemplateOutlet]=\"chkAllTpl\" [ngTemplateOutletContext]=\"{ $implicit: false }\" />\n                    } @else {\n                      <div class=\"ant-table-selection\">\n                        <ng-template [ngTemplateOutlet]=\"chkAllTpl\" [ngTemplateOutletContext]=\"{ $implicit: true }\" />\n                        @if (_c.selections!.length) {\n                          <div class=\"ant-table-selection-extra\">\n                            <div\n                              nz-dropdown\n                              nzPlacement=\"bottomLeft\"\n                              [nzDropdownMenu]=\"selectionMenu\"\n                              class=\"ant-table-selection-down st__checkall-selection\"\n                            >\n                              <i nz-icon nzType=\"down\"></i>\n                            </div>\n                          </div>\n                        }\n                        <nz-dropdown-menu #selectionMenu=\"nzDropdownMenu\">\n                          <ul nz-menu class=\"ant-table-selection-menu\">\n                            @for (rw of _c.selections; track $index) {\n                              <li nz-menu-item (click)=\"_rowSelection(rw)\" [innerHTML]=\"rw.text\"></li>\n                            }\n                          </ul>\n                        </nz-dropdown-menu>\n                      </div>\n                    }\n                  }\n                  @default {\n                    <ng-template [ngTemplateOutlet]=\"titleTpl\" [ngTemplateOutletContext]=\"{ $implicit: _c.title }\" />\n                  }\n                }\n              }\n              @if (_c.filter) {\n                <st-filter\n                  nz-th-extra\n                  [col]=\"h.column\"\n                  [f]=\"_c.filter\"\n                  [locale]=\"locale\"\n                  (n)=\"handleFilterNotify($event)\"\n                  (handle)=\"_handleFilter(_c, $event)\"\n                />\n              }\n            </th>\n          }\n        </tr>\n      }\n    </thead>\n  }\n  <tbody class=\"st__body\">\n    @if (!_loading) {\n      <ng-template [ngTemplateOutlet]=\"bodyHeader!\" [ngTemplateOutletContext]=\"{ $implicit: _statistical }\" />\n    }\n    <ng-template #bodyTpl let-i let-index=\"index\">\n      <tr\n        [attr.data-index]=\"index\"\n        (click)=\"_rowClick($event, i, index, false)\"\n        (dblclick)=\"_rowClick($event, i, index, true)\"\n        [ngClass]=\"i._rowClassName\"\n      >\n        @if (expand) {\n          <td\n            [nzShowExpand]=\"expand && i.showExpand !== false\"\n            [nzExpand]=\"i.expand\"\n            (nzExpandChange)=\"_expandChange(i, $event)\"\n            (click)=\"_stopPropagation($event)\"\n            nzWidth=\"50px\"\n          ></td>\n        }\n        @for (c of _columns; track cIdx; let cIdx = $index) {\n          @if (i._values[cIdx].props?.colSpan > 0 && i._values[cIdx].props?.rowSpan > 0) {\n            <td\n              [nzLeft]=\"!!c._left\"\n              [nzRight]=\"!!c._right\"\n              [attr.data-col-index]=\"cIdx\"\n              [ngClass]=\"c._className\"\n              [attr.colspan]=\"i._values[cIdx].props?.colSpan === 1 ? null : i._values[cIdx].props?.colSpan\"\n              [attr.rowspan]=\"i._values[cIdx].props?.rowSpan === 1 ? null : i._values[cIdx].props?.rowSpan\"\n            >\n              @if (responsive) {\n                <span class=\"ant-table-rep__title\">\n                  <ng-template [ngTemplateOutlet]=\"titleTpl\" [ngTemplateOutletContext]=\"{ $implicit: c.title }\" />\n                </span>\n              }\n              <st-td [data]=\"_data\" [i]=\"i\" [index]=\"index\" [c]=\"c\" [cIdx]=\"cIdx\" (n)=\"_handleTd($event)\" />\n            </td>\n          }\n        }\n      </tr>\n      <tr [nzExpand]=\"i.expand\">\n        <ng-template [ngTemplateOutlet]=\"expand\" [ngTemplateOutletContext]=\"{ $implicit: i, index: index }\" />\n      </tr>\n    </ng-template>\n    @if (virtualScroll) {\n      <ng-template nz-virtual-scroll let-i let-index=\"index\">\n        <ng-template [ngTemplateOutlet]=\"bodyTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, index: index }\" />\n      </ng-template>\n    } @else {\n      @for (i of _data; track trackBy($index, i)) {\n        <ng-template [ngTemplateOutlet]=\"bodyTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, index: $index }\" />\n      }\n    }\n    @if (!_loading) {\n      <ng-template [ngTemplateOutlet]=\"body!\" [ngTemplateOutletContext]=\"{ $implicit: _statistical }\" />\n    }\n  </tbody>\n  <ng-template #totalTpl let-range=\"range\" let-total>{{ renderTotal(total, range) }}</ng-template>\n</nz-table>\n<nz-dropdown-menu #contextmenuTpl=\"nzDropdownMenu\">\n  <ul nz-menu class=\"st__contextmenu\">\n    @for (i of contextmenuList; track $index) {\n      @if (i.children!.length === 0) {\n        <li nz-menu-item (click)=\"i.fn!(i)\" [innerHTML]=\"i.text\"></li>\n      } @else {\n        <li nz-submenu [nzTitle]=\"i.text\">\n          <ul>\n            @for (ci of i.children; track $index) {\n              <li nz-menu-item (click)=\"ci.fn!(ci)\" [innerHTML]=\"ci.text\"></li>\n            }\n          </ul>\n        </li>\n      }\n    }\n  </ul>\n</nz-dropdown-menu>\n" }]
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.4", ngImport: i0, type: STTdComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.2.4", type: STTdComponent, selector: "st-td", inputs: { c: "c", cIdx: "cIdx", data: "data", i: "i", index: "index" }, outputs: { n: "n" }, ngImport: i0, template: "<ng-template #btnTpl let-i let-child=\"child\">\n  @if (i.tooltip) {\n    <span nz-tooltip [nzTooltipTitle]=\"i.tooltip\" [class.d-block]=\"child\" [class.width-100]=\"child\">\n      <ng-template [ngTemplateOutlet]=\"btnItemTpl\" [ngTemplateOutletContext]=\"{ $implicit: i }\" />\n    </span>\n  } @else {\n    <ng-template [ngTemplateOutlet]=\"btnItemTpl\" [ngTemplateOutletContext]=\"{ $implicit: i }\" />\n  }\n</ng-template>\n<ng-template #btnItemTpl let-i>\n  @if (i.pop) {\n    <a\n      nz-popconfirm\n      [nzPopconfirmTitle]=\"i.pop.title\"\n      [nzIcon]=\"i.pop.icon\"\n      [nzCondition]=\"i.pop.condition(i)\"\n      [nzCancelText]=\"i.pop.cancelText\"\n      [nzOkText]=\"i.pop.okText\"\n      [nzOkType]=\"i.pop.okType\"\n      (nzOnConfirm)=\"_btn(i)\"\n      class=\"st__btn-text\"\n      [ngClass]=\"i._className\"\n      (click)=\"_stopPropagation($event)\"\n    >\n      <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i }\" />\n    </a>\n  } @else {\n    <a (click)=\"_btn(i, $event)\" class=\"st__btn-text\" [ngClass]=\"i._className\">\n      <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i }\" />\n    </a>\n  }\n</ng-template>\n<ng-template #btnTextTpl let-i>\n  @if (i._icon) {\n    @if (i._icon.iconfont) {\n      <i nz-icon [nzIconfont]=\"i._icon.iconfont\"></i>\n    } @else {\n      <i\n        nz-icon\n        [nzType]=\"i._icon.type\"\n        [nzTheme]=\"i._icon.theme\"\n        [nzSpin]=\"i._icon.spin\"\n        [nzTwotoneColor]=\"i._icon.twoToneColor\"\n      ></i>\n    }\n  }\n  <span [innerHTML]=\"i._text\" [ngClass]=\"{ 'pl-xs': i._icon }\"></span>\n</ng-template>\n@if (c.__render) {\n  <ng-template [ngTemplateOutlet]=\"c.__render!\" [ngTemplateOutletContext]=\"{ $implicit: i, index: index, column: c }\" />\n} @else {\n  @switch (c.type) {\n    @case ('checkbox') {\n      <label nz-checkbox [nzDisabled]=\"i.disabled\" [ngModel]=\"i.checked\" (ngModelChange)=\"_checkbox($event)\"></label>\n    }\n    @case ('radio') {\n      <label nz-radio [nzDisabled]=\"i.disabled\" [ngModel]=\"i.checked\" (ngModelChange)=\"_radio()\"></label>\n    }\n    @case ('link') {\n      <a (click)=\"_link($event)\" [innerHTML]=\"i._values[cIdx]._text\" [attr.title]=\"i._values[cIdx].text\"></a>\n    }\n    @case ('tag') {\n      <nz-tag [nzColor]=\"i._values[cIdx].color\" [nz-tooltip]=\"i._values[cIdx].tooltip\">\n        <span [innerHTML]=\"i._values[cIdx]._text\"></span>\n      </nz-tag>\n    }\n    @case ('badge') {\n      <nz-badge\n        [nzStatus]=\"i._values[cIdx].color\"\n        [nzText]=\"i._values[cIdx].text\"\n        [nz-tooltip]=\"i._values[cIdx].tooltip\"\n      />\n    }\n    @case ('cell') {\n      <cell [value]=\"i._values[cIdx].text\" [options]=\"i._values[cIdx].cell ?? c.cell\" />\n    }\n    @case ('widget') {\n      <ng-template st-widget-host [record]=\"i\" [column]=\"c\" />\n    }\n    @default {\n      @if (c.safeType === 'text') {\n        <span [innerText]=\"i._values[cIdx]._text\" [attr.title]=\"c._isTruncate ? i._values[cIdx].text : null\"></span>\n      } @else {\n        <span [innerHTML]=\"i._values[cIdx]._text\" [attr.title]=\"c._isTruncate ? i._values[cIdx].text : null\"></span>\n      }\n    }\n  }\n  @for (btn of i._values[cIdx].buttons; track $index) {\n    @if (btn.children!.length > 0) {\n      <a nz-dropdown [nzDropdownMenu]=\"btnMenu\" nzOverlayClassName=\"st__btn-sub\">\n        <span [innerHTML]=\"btn._text\"></span>\n        <i nz-icon nzType=\"down\"></i>\n      </a>\n      <nz-dropdown-menu #btnMenu=\"nzDropdownMenu\">\n        <ul nz-menu>\n          @for (subBtn of btn.children; track $index) {\n            @if (subBtn.type === 'divider') {\n              <li nz-menu-divider></li>\n            } @else {\n              <li nz-menu-item [class.st__btn-disabled]=\"subBtn._disabled\">\n                <ng-template\n                  [ngTemplateOutlet]=\"btnTpl\"\n                  [ngTemplateOutletContext]=\"{ $implicit: subBtn, child: true }\"\n                />\n              </li>\n            }\n          }\n        </ul>\n      </nz-dropdown-menu>\n    } @else {\n      <span [class.st__btn-disabled]=\"btn._disabled\">\n        <ng-template [ngTemplateOutlet]=\"btnTpl\" [ngTemplateOutletContext]=\"{ $implicit: btn, child: false }\" />\n      </span>\n    }\n    @if (!$last) {\n      <nz-divider nzType=\"vertical\" />\n    }\n  }\n}\n", dependencies: [{ kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: i13.CellComponent, selector: "cell, [cell]", inputs: ["value", "options", "loading", "disabled"], outputs: ["valueChange"], exportAs: ["cell"] }, { kind: "directive", type: i14.NzPopconfirmDirective, selector: "[nz-popconfirm]", inputs: ["nzPopconfirmArrowPointAtCenter", "nzPopconfirmTitle", "nz-popconfirm", "nzPopconfirmTrigger", "nzPopconfirmPlacement", "nzPopconfirmOrigin", "nzPopconfirmMouseEnterDelay", "nzPopconfirmMouseLeaveDelay", "nzPopconfirmOverlayClassName", "nzPopconfirmOverlayStyle", "nzPopconfirmVisible", "nzOkText", "nzOkType", "nzOkDanger", "nzCancelText", "nzBeforeConfirm", "nzIcon", "nzCondition", "nzPopconfirmShowArrow", "nzPopconfirmBackdrop", "nzAutofocus"], outputs: ["nzPopconfirmVisibleChange", "nzOnCancel", "nzOnConfirm"], exportAs: ["nzPopconfirm"] }, { kind: "directive", type: i6.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "component", type: i15.NzBadgeComponent, selector: "nz-badge", inputs: ["nzShowZero", "nzShowDot", "nzStandalone", "nzDot", "nzOverflowCount", "nzColor", "nzStyle", "nzText", "nzTitle", "nzStatus", "nzCount", "nzOffset", "nzSize"], exportAs: ["nzBadge"] }, { kind: "component", type: i7.NzCheckboxComponent, selector: "[nz-checkbox]", inputs: ["nzValue", "nzAutoFocus", "nzDisabled", "nzIndeterminate", "nzChecked", "nzId"], outputs: ["nzCheckedChange"], exportAs: ["nzCheckbox"] }, { kind: "component", type: i16.NzDividerComponent, selector: "nz-divider", inputs: ["nzText", "nzType", "nzOrientation", "nzDashed", "nzPlain"], exportAs: ["nzDivider"] }, { kind: "directive", type: i8.NzMenuDirective, selector: "[nz-menu]", inputs: ["nzInlineIndent", "nzTheme", "nzMode", "nzInlineCollapsed", "nzSelectable"], outputs: ["nzClick"], exportAs: ["nzMenu"] }, { kind: "component", type: i8.NzMenuItemComponent, selector: "[nz-menu-item]", inputs: ["nzPaddingLeft", "nzDisabled", "nzSelected", "nzDanger", "nzMatchRouterExact", "nzMatchRouter"], exportAs: ["nzMenuItem"] }, { kind: "directive", type: i8.NzMenuDividerDirective, selector: "[nz-menu-divider]", exportAs: ["nzMenuDivider"] }, { kind: "directive", type: i9.NzDropDownDirective, selector: "[nz-dropdown]", inputs: ["nzDropdownMenu", "nzTrigger", "nzMatchWidthElement", "nzBackdrop", "nzClickHide", "nzDisabled", "nzVisible", "nzOverlayClassName", "nzOverlayStyle", "nzPlacement"], outputs: ["nzVisibleChange"], exportAs: ["nzDropdown"] }, { kind: "directive", type: i9.NzDropDownADirective, selector: "a[nz-dropdown]" }, { kind: "component", type: i9.NzDropdownMenuComponent, selector: "nz-dropdown-menu", exportAs: ["nzDropdownMenu"] }, { kind: "component", type: i17.NzRadioComponent, selector: "[nz-radio],[nz-radio-button]", inputs: ["nzValue", "nzDisabled", "nzAutoFocus", "nz-radio-button"], exportAs: ["nzRadio"] }, { kind: "component", type: i18.NzTagComponent, selector: "nz-tag", inputs: ["nzMode", "nzColor", "nzChecked", "nzBordered"], outputs: ["nzOnClose", "nzCheckedChange"], exportAs: ["nzTag"] }, { kind: "directive", type: i10.NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "cdkConnectedOverlayPush", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }, { kind: "directive", type: i19.STWidgetHostDirective, selector: "[st-widget-host]", inputs: ["record", "column"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.4", ngImport: i0, type: STTdComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3N0L3N0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9zdC9zdC5jb21wb25lbnQuaHRtbCIsIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9zdC9zdC10ZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3hELE9BQU8sRUFFTCxnQkFBZ0IsRUFDaEIsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFDTCxlQUFlLEVBRWYsTUFBTSxFQUtOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDaEUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQWMsRUFBRSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWxILE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsUUFBUSxFQUNSLGtCQUFrQixFQUNsQixZQUFZLEVBRVosV0FBVyxFQUNYLE1BQU0sRUFDUCxNQUFNLGNBQWMsQ0FBQztBQUV0QixPQUFPLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRTNELE9BQU8sRUFBRSxvQkFBb0IsRUFBMkIsTUFBTSx3QkFBd0IsQ0FBQztBQUl2RixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9C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b0JBQ25CLE1BQU07Z0JBQ1IsS0FBSyxRQUFRO29CQUNYLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQ3JCLE1BQU07WUFDVixDQUFDO1FBQ0gsQ0FBQzthQUFNLENBQUM7WUFDTixPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0MsQ0FBQztJQUNILENBQUM7OEdBekdVLGFBQWE7a0dBQWIsYUFBYSwwSUU1NEIxQiw0MUlBdUhBOzsyRkZxeEJhLGFBQWE7a0JBUHpCLFNBQVM7K0JBQ0UsT0FBTyx1QkFFSSxLQUFLLG1CQUNULHVCQUF1QixDQUFDLE1BQU0saUJBQ2hDLGlCQUFpQixDQUFDLElBQUk7OEJBUTVCLENBQUM7c0JBQVQsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLENBQUM7c0JBQVQsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ2EsQ0FBQztzQkFBbkIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zY3JvbGxpbmcnO1xuaW1wb3J0IHsgRGVjaW1hbFBpcGUsIERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIGJvb2xlYW5BdHRyaWJ1dGUsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBEZXN0cm95UmVmLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIGluamVjdCxcbiAgSW5wdXQsXG4gIG51bWJlckF0dHJpYnV0ZSxcbiAgT25DaGFuZ2VzLFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZSxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFRyYWNrQnlGdW5jdGlvbixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRha2VVbnRpbERlc3Ryb3llZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvcnhqcy1pbnRlcm9wJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBpc09ic2VydmFibGUsIE9ic2VydmFibGUsIG9mLCBmaWx0ZXIsIGNhdGNoRXJyb3IsIG1hcCwgZmluYWxpemUsIHRocm93RXJyb3IsIGxhc3RWYWx1ZUZyb20gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHtcbiAgQUxBSU5fSTE4Tl9UT0tFTixcbiAgRGF0ZVBpcGUsXG4gIERlbG9uTG9jYWxlU2VydmljZSxcbiAgRHJhd2VySGVscGVyLFxuICBMb2NhbGVEYXRhLFxuICBNb2RhbEhlbHBlcixcbiAgWU5QaXBlXG59IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UsIEFsYWluU1RDb25maWcgfSBmcm9tICdAZGVsb24vdXRpbC9jb25maWcnO1xuaW1wb3J0IHsgZGVlcENvcHksIGRlZXBNZXJnZUtleSB9IGZyb20gJ0BkZWxvbi91dGlsL290aGVyJztcbmltcG9ydCB0eXBlIHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IE56Q29udGV4dE1lbnVTZXJ2aWNlLCBOekRyb3Bkb3duTWVudUNvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvZHJvcGRvd24nO1xuaW1wb3J0IHsgTnpSZXNpemVFdmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvcmVzaXphYmxlJztcbmltcG9ydCB7IE56VGFibGVDb21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL3RhYmxlJztcblxuaW1wb3J0IHsgU1RDb2x1bW5Tb3VyY2UgfSBmcm9tICcuL3N0LWNvbHVtbi1zb3VyY2UnO1xuaW1wb3J0IHsgU1REYXRhU291cmNlLCBTVERhdGFTb3VyY2VPcHRpb25zLCBTVERhdGFTb3VyY2VSZXN1bHQgfSBmcm9tICcuL3N0LWRhdGEtc291cmNlJztcbmltcG9ydCB7IFNURXhwb3J0IH0gZnJvbSAnLi9zdC1leHBvcnQnO1xuaW1wb3J0IHsgU1RSb3dTb3VyY2UgfSBmcm9tICcuL3N0LXJvdy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU1RfREVGQVVMVF9DT05GSUcgfSBmcm9tICcuL3N0LmNvbmZpZyc7XG5pbXBvcnQgdHlwZSB7XG4gIFNUQ2hhbmdlLFxuICBTVENoYW5nZVR5cGUsXG4gIFNUQ2xpY2tSb3dDbGFzc05hbWUsXG4gIFNUQ2xpY2tSb3dDbGFzc05hbWVUeXBlLFxuICBTVENvbHVtbixcbiAgU1RDb2x1bW5CdXR0b24sXG4gIFNUQ29sdW1uU2FmZVR5cGUsXG4gIFNUQ29sdW1uU2VsZWN0aW9uLFxuICBTVENvbnRleHRtZW51Rm4sXG4gIFNUQ29udGV4dG1lbnVJdGVtLFxuICBTVEN1c3RvbVJlcXVlc3RPcHRpb25zLFxuICBTVERhdGEsXG4gIFNURXJyb3IsXG4gIFNURXhwb3J0T3B0aW9ucyxcbiAgU1RMb2FkT3B0aW9ucyxcbiAgU1RNdWx0aVNvcnQsXG4gIFNUUGFnZSxcbiAgU1RSZXEsXG4gIFNUUmVzLFxuICBTVFJlc2V0Q29sdW1uc09wdGlvbixcbiAgU1RSZXNpemFibGUsXG4gIFNUUm93Q2xhc3NOYW1lLFxuICBTVFNpbmdsZVNvcnQsXG4gIFNUU3RhdGlzdGljYWxSZXN1bHRzLFxuICBTVFdpZHRoTW9kZVxufSBmcm9tICcuL3N0LmludGVyZmFjZXMnO1xuaW1wb3J0IHR5cGUgeyBfU1RDb2x1bW4sIF9TVERhdGFWYWx1ZSwgX1NUSGVhZGVyLCBfU1RUZE5vdGlmeSwgX1NUVGROb3RpZnlUeXBlIH0gZnJvbSAnLi9zdC50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N0JyxcbiAgZXhwb3J0QXM6ICdzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdC5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW1NURGF0YVNvdXJjZSwgU1RSb3dTb3VyY2UsIFNUQ29sdW1uU291cmNlLCBTVEV4cG9ydCwgRGF0ZVBpcGUsIFlOUGlwZSwgRGVjaW1hbFBpcGVdLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5zdF0nOiBgdHJ1ZWAsXG4gICAgJ1tjbGFzcy5zdF9fcC1sZWZ0XSc6IGBwYWdlLnBsYWNlbWVudCA9PT0gJ2xlZnQnYCxcbiAgICAnW2NsYXNzLnN0X19wLWNlbnRlcl0nOiBgcGFnZS5wbGFjZW1lbnQgPT09ICdjZW50ZXInYCxcbiAgICAnW2NsYXNzLnN0X193aWR0aC1zdHJpY3RdJzogYHdpZHRoTW9kZS50eXBlID09PSAnc3RyaWN0J2AsXG4gICAgJ1tjbGFzcy5zdF9fcm93LWNsYXNzXSc6IGByb3dDbGFzc05hbWVgLFxuICAgICdbY2xhc3MuYW50LXRhYmxlLXJlcF0nOiBgcmVzcG9uc2l2ZWAsXG4gICAgJ1tjbGFzcy5hbnQtdGFibGUtcmVwX19oaWRlLWhlYWRlci1mb290ZXJdJzogYHJlc3BvbnNpdmVIaWRlSGVhZGVyRm9vdGVyYFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU1RDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xuICBwcml2YXRlIHJlYWRvbmx5IGkxOG5TcnYgPSBpbmplY3QoQUxBSU5fSTE4Tl9UT0tFTiwgeyBvcHRpb25hbDogdHJ1ZSB9KTtcbiAgcHJpdmF0ZSByZWFkb25seSBlbDogSFRNTEVsZW1lbnQgPSBpbmplY3QoRWxlbWVudFJlZikubmF0aXZlRWxlbWVudDtcbiAgcHJpdmF0ZSByZWFkb25seSBjZHIgPSBpbmplY3QoQ2hhbmdlRGV0ZWN0b3JSZWYpO1xuICBwcml2YXRlIHJlYWRvbmx5IGRvYyA9IGluamVjdChET0NVTUVOVCk7XG4gIHByaXZhdGUgcmVhZG9ubHkgZXhwb3J0U3J2ID0gaW5qZWN0KFNURXhwb3J0KTtcbiAgcHJpdmF0ZSByZWFkb25seSBjb2x1bW5Tb3VyY2UgPSBpbmplY3QoU1RDb2x1bW5Tb3VyY2UpO1xuICBwcml2YXRlIHJlYWRvbmx5IGRhdGFTb3VyY2UgPSBpbmplY3QoU1REYXRhU291cmNlKTtcbiAgcHJpdmF0ZSByZWFkb25seSBkZWxvbkkxOG4gPSBpbmplY3QoRGVsb25Mb2NhbGVTZXJ2aWNlKTtcbiAgcHJpdmF0ZSByZWFkb25seSBjbXMgPSBpbmplY3QoTnpDb250ZXh0TWVudVNlcnZpY2UpO1xuICBwcml2YXRlIHJlYWRvbmx5IGRlc3Ryb3kkID0gaW5qZWN0KERlc3Ryb3lSZWYpO1xuXG4gIHByaXZhdGUgdG90YWxUcGwgPSBgYDtcbiAgcHJpdmF0ZSBpbmllZCA9IGZhbHNlO1xuICBjb2chOiBBbGFpblNUQ29uZmlnO1xuICBwcml2YXRlIF9yZXEhOiBTVFJlcTtcbiAgcHJpdmF0ZSBfcmVzITogU1RSZXM7XG4gIHByaXZhdGUgX3BhZ2UhOiBTVFBhZ2U7XG4gIHByaXZhdGUgX3dpZHRoTW9kZSE6IFNUV2lkdGhNb2RlO1xuICBwcml2YXRlIGN1c3RvbVdpZHRoQ29uZmlnOiBib29sZWFuID0gZmFsc2U7XG4gIF93aWR0aENvbmZpZzogc3RyaW5nW10gPSBbXTtcbiAgbG9jYWxlOiBMb2NhbGVEYXRhID0ge307XG4gIF9sb2FkaW5nID0gZmFsc2U7XG4gIF9kYXRhOiBTVERhdGFbXSA9IFtdO1xuICBfc3RhdGlzdGljYWw6IFNUU3RhdGlzdGljYWxSZXN1bHRzID0ge307XG4gIF9pc1BhZ2luYXRpb24gPSB0cnVlO1xuICBfYWxsQ2hlY2tlZCA9IGZhbHNlO1xuICBfYWxsQ2hlY2tlZERpc2FibGVkID0gZmFsc2U7XG4gIF9pbmRldGVybWluYXRlID0gZmFsc2U7XG4gIF9oZWFkZXJzOiBfU1RIZWFkZXJbXVtdID0gW107XG4gIF9jb2x1bW5zOiBfU1RDb2x1bW5bXSA9IFtdO1xuICBjb250ZXh0bWVudUxpc3Q6IFNUQ29udGV4dG1lbnVJdGVtW10gPSBbXTtcbiAgQFZpZXdDaGlsZCgndGFibGUnKSByZWFkb25seSBvcmdUYWJsZSE6IE56VGFibGVDb21wb25lbnQ8U1REYXRhPjtcbiAgQFZpZXdDaGlsZCgnY29udGV4dG1lbnVUcGwnKSByZWFkb25seSBjb250ZXh0bWVudVRwbCE6IE56RHJvcGRvd25NZW51Q29tcG9uZW50O1xuXG4gIEBJbnB1dCgpXG4gIGdldCByZXEoKTogU1RSZXEge1xuICAgIHJldHVybiB0aGlzLl9yZXE7XG4gIH1cbiAgc2V0IHJlcSh2YWx1ZTogU1RSZXEpIHtcbiAgICB0aGlzLl9yZXEgPSBkZWVwTWVyZ2VLZXkoe30sIHRydWUsIHRoaXMuY29nLnJlcSwgdmFsdWUpO1xuICB9XG4gIC8qKiDov5Tlm57kvZPphY3nva4gKi9cbiAgQElucHV0KClcbiAgZ2V0IHJlcygpOiBTVFJlcyB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcztcbiAgfVxuICBzZXQgcmVzKHZhbHVlOiBTVFJlcykge1xuICAgIGNvbnN0IGl0ZW0gPSAodGhpcy5fcmVzID0gZGVlcE1lcmdlS2V5KHt9LCB0cnVlLCB0aGlzLmNvZy5yZXMsIHZhbHVlKSk7XG4gICAgY29uc3QgcmVOYW1lID0gaXRlbS5yZU5hbWUhO1xuICAgIGlmICh0eXBlb2YgcmVOYW1lICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkocmVOYW1lLmxpc3QpKSByZU5hbWUubGlzdCA9IHJlTmFtZS5saXN0IS5zcGxpdCgnLicpO1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHJlTmFtZS50b3RhbCkpIHJlTmFtZS50b3RhbCA9IHJlTmFtZS50b3RhbCEuc3BsaXQoJy4nKTtcbiAgICB9XG4gICAgdGhpcy5fcmVzID0gaXRlbTtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgcGFnZSgpOiBTVFBhZ2Uge1xuICAgIHJldHVybiB0aGlzLl9wYWdlO1xuICB9XG4gIHNldCBwYWdlKHZhbHVlOiBTVFBhZ2UpIHtcbiAgICB0aGlzLl9wYWdlID0geyAuLi50aGlzLmNvZy5wYWdlLCAuLi52YWx1ZSB9O1xuICAgIHRoaXMudXBkYXRlVG90YWxUcGwoKTtcbiAgfVxuICBASW5wdXQoKSBkYXRhPzogc3RyaW5nIHwgU1REYXRhW10gfCBPYnNlcnZhYmxlPFNURGF0YVtdPjtcbiAgQElucHV0KCkgY29sdW1ucz86IFNUQ29sdW1uW10gfCBudWxsO1xuICBASW5wdXQoKSBjb250ZXh0bWVudT86IFNUQ29udGV4dG1lbnVGbiB8IG51bGw7XG4gIEBJbnB1dCh7IHRyYW5zZm9ybTogKHY6IHVua25vd24pID0+IG51bWJlckF0dHJpYnV0ZSh2LCAxMCkgfSkgcHMgPSAxMDtcbiAgQElucHV0KHsgdHJhbnNmb3JtOiAodjogdW5rbm93bikgPT4gbnVtYmVyQXR0cmlidXRlKHYsIDEpIH0pIHBpID0gMTtcbiAgQElucHV0KHsgdHJhbnNmb3JtOiAodjogdW5rbm93bikgPT4gbnVtYmVyQXR0cmlidXRlKHYsIDApIH0pIHRvdGFsID0gMDtcbiAgQElucHV0KCkgbG9hZGluZzogYm9vbGVhbiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoeyB0cmFuc2Zvcm06IG51bWJlckF0dHJpYnV0ZSB9KSBsb2FkaW5nRGVsYXkgPSAwO1xuICBASW5wdXQoKSBsb2FkaW5nSW5kaWNhdG9yOiBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoeyB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGUgfSkgYm9yZGVyZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgc2l6ZSE6ICdzbWFsbCcgfCAnbWlkZGxlJyB8ICdkZWZhdWx0JztcbiAgQElucHV0KCkgc2Nyb2xsOiB7IHg/OiBzdHJpbmcgfCBudWxsOyB5Pzogc3RyaW5nIHwgbnVsbCB9ID0geyB4OiBudWxsLCB5OiBudWxsIH07XG4gIEBJbnB1dCgpIHNpbmdsZVNvcnQ/OiBTVFNpbmdsZVNvcnQgfCBudWxsO1xuICBwcml2YXRlIF9tdWx0aVNvcnQ/OiBTVE11bHRpU29ydDtcbiAgQElucHV0KClcbiAgZ2V0IG11bHRpU29ydCgpOiBOelNhZmVBbnkge1xuICAgIHJldHVybiB0aGlzLl9tdWx0aVNvcnQ7XG4gIH1cbiAgc2V0IG11bHRpU29ydCh2YWx1ZTogTnpTYWZlQW55KSB7XG4gICAgaWYgKFxuICAgICAgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nICYmICFib29sZWFuQXR0cmlidXRlKHZhbHVlKSkgfHxcbiAgICAgICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDApXG4gICAgKSB7XG4gICAgICB0aGlzLl9tdWx0aVNvcnQgPSB1bmRlZmluZWQ7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX211bHRpU29ydCA9IHtcbiAgICAgIC4uLih0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnID8gdmFsdWUgOiB7fSlcbiAgICB9O1xuICB9XG4gIEBJbnB1dCgpIHJvd0NsYXNzTmFtZT86IFNUUm93Q2xhc3NOYW1lIHwgbnVsbDtcbiAgQElucHV0KCkgY2xpY2tSb3dDbGFzc05hbWU/OiBTVENsaWNrUm93Q2xhc3NOYW1lIHwgbnVsbDtcbiAgQElucHV0KClcbiAgc2V0IHdpZHRoTW9kZSh2YWx1ZTogU1RXaWR0aE1vZGUpIHtcbiAgICB0aGlzLl93aWR0aE1vZGUgPSB7IC4uLnRoaXMuY29nLndpZHRoTW9kZSwgLi4udmFsdWUgfTtcbiAgfVxuICBnZXQgd2lkdGhNb2RlKCk6IFNUV2lkdGhNb2RlIHtcbiAgICByZXR1cm4gdGhpcy5fd2lkdGhNb2RlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCB3aWR0aENvbmZpZyh2YWw6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fd2lkdGhDb25maWcgPSB2YWw7XG4gICAgdGhpcy5jdXN0b21XaWR0aENvbmZpZyA9IHZhbCAmJiB2YWwubGVuZ3RoID4gMDtcbiAgfVxuICBwcml2YXRlIF9yZXNpemFibGU/OiBTVFJlc2l6YWJsZTtcbiAgQElucHV0KClcbiAgc2V0IHJlc2l6YWJsZSh2YWw6IFNUUmVzaXphYmxlIHwgYm9vbGVhbiB8IHN0cmluZykge1xuICAgIHRoaXMuX3Jlc2l6YWJsZSA9IHR5cGVvZiB2YWwgPT09ICdvYmplY3QnID8gdmFsIDogeyBkaXNhYmxlZDogIWJvb2xlYW5BdHRyaWJ1dGUodmFsKSB9O1xuICB9XG4gIEBJbnB1dCgpIGhlYWRlcj86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbDtcbiAgQElucHV0KHsgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pIHNob3dIZWFkZXIgPSB0cnVlO1xuICBASW5wdXQoKSBmb290ZXI/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGw7XG4gIEBJbnB1dCgpIGJvZHlIZWFkZXI/OiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogU1RTdGF0aXN0aWNhbFJlc3VsdHMgfT4gfCBudWxsO1xuICBASW5wdXQoKSBib2R5PzogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IFNUU3RhdGlzdGljYWxSZXN1bHRzIH0+IHwgbnVsbDtcbiAgQElucHV0KHsgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pIGV4cGFuZFJvd0J5Q2xpY2sgPSBmYWxzZTtcbiAgQElucHV0KHsgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pIGV4cGFuZEFjY29yZGlvbiA9IGZhbHNlO1xuICBASW5wdXQoKSBleHBhbmQ6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBOelNhZmVBbnk7IGluZGV4OiBudW1iZXIgfT4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgbm9SZXN1bHQ/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGw7XG4gIEBJbnB1dCh7IHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZSB9KSByZXNwb25zaXZlOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KHsgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pIHJlc3BvbnNpdmVIaWRlSGVhZGVyRm9vdGVyPzogYm9vbGVhbjtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGVycm9yID0gbmV3IEV2ZW50RW1pdHRlcjxTVEVycm9yPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxTVENoYW5nZT4oKTtcbiAgQElucHV0KHsgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pIHZpcnR1YWxTY3JvbGwgPSBmYWxzZTtcbiAgQElucHV0KHsgdHJhbnNmb3JtOiBudW1iZXJBdHRyaWJ1dGUgfSkgdmlydHVhbEl0ZW1TaXplID0gNTQ7XG4gIEBJbnB1dCh7IHRyYW5zZm9ybTogbnVtYmVyQXR0cmlidXRlIH0pIHZpcnR1YWxNYXhCdWZmZXJQeCA9IDIwMDtcbiAgQElucHV0KHsgdHJhbnNmb3JtOiBudW1iZXJBdHRyaWJ1dGUgfSkgdmlydHVhbE1pbkJ1ZmZlclB4ID0gMTAwO1xuICBASW5wdXQoKSBjdXN0b21SZXF1ZXN0PzogKG9wdGlvbnM6IFNUQ3VzdG9tUmVxdWVzdE9wdGlvbnMpID0+IE9ic2VydmFibGU8TnpTYWZlQW55PjtcbiAgQElucHV0KCkgdmlydHVhbEZvclRyYWNrQnk6IFRyYWNrQnlGdW5jdGlvbjxTVERhdGE+ID0gaW5kZXggPT4gaW5kZXg7XG4gIEBJbnB1dCgpIHRyYWNrQnk6IFRyYWNrQnlGdW5jdGlvbjxTVERhdGE+ID0gKF8sIGl0ZW0pID0+IGl0ZW07XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbnVtYmVyIG9mIHRoZSBjdXJyZW50IHBhZ2VcbiAgICovXG4gIGdldCBjb3VudCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9kYXRhLmxlbmd0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGRhdGEgb2YgdGhlIGN1cnJlbnQgcGFnZVxuICAgKi9cbiAgZ2V0IGxpc3QoKTogU1REYXRhW10ge1xuICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICB9XG5cbiAgZ2V0IG5vQ29sdW1ucygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb2x1bW5zID09IG51bGw7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihjb25maWdTcnY6IEFsYWluQ29uZmlnU2VydmljZSkge1xuICAgIHRoaXMuZGVsb25JMThuLmNoYW5nZS5waXBlKHRha2VVbnRpbERlc3Ryb3llZCgpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5sb2NhbGUgPSB0aGlzLmRlbG9uSTE4bi5nZXREYXRhKCdzdCcpO1xuICAgICAgaWYgKHRoaXMuX2NvbHVtbnMubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVRvdGFsVHBsKCk7XG4gICAgICAgIHRoaXMuY2QoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuaTE4blNydj8uY2hhbmdlXG4gICAgICAucGlwZShcbiAgICAgICAgdGFrZVVudGlsRGVzdHJveWVkKCksXG4gICAgICAgIGZpbHRlcigoKSA9PiB0aGlzLl9jb2x1bW5zLmxlbmd0aCA+IDApXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMucmVmcmVzaENvbHVtbnMoKSk7XG5cbiAgICB0aGlzLnNldENvZyhjb25maWdTcnYubWVyZ2UoJ3N0JywgU1RfREVGQVVMVF9DT05GSUcpISk7XG4gIH1cblxuICBwcml2YXRlIHNldENvZyhjb2c6IEFsYWluU1RDb25maWcpOiB2b2lkIHtcbiAgICBjb25zdCBjb3B5TXVsdGlTb3J0ID0geyAuLi5jb2cubXVsdGlTb3J0IH07XG4gICAgLy8gQmVjYXVzZSBtdWx0aVNvcnQuZ2xvYmFsIHdpbGwgYWZmZWN0IHRoZSByZXN1bHQsIGl0IHNob3VsZCBiZSByZW1vdmVkIGZpcnN0LCBhbmQgbXVsdGlTb3J0IHdpbGwgYmUgb3BlcmF0ZWQgYWdhaW4gYWZ0ZXIgcHJvY2Vzc2luZy5cbiAgICBkZWxldGUgY29nLm11bHRpU29ydDtcbiAgICB0aGlzLmNvZyA9IGNvZztcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvZyk7XG5cbiAgICBpZiAoY29weU11bHRpU29ydC5nbG9iYWwgIT09IGZhbHNlKSB7XG4gICAgICB0aGlzLm11bHRpU29ydCA9IGNvcHlNdWx0aVNvcnQ7XG4gICAgfVxuICAgIHRoaXMuY29sdW1uU291cmNlLnNldENvZyhjb2cpO1xuICAgIHRoaXMuZGF0YVNvdXJjZS5zZXRDb2coY29nKTtcbiAgfVxuXG4gIGNkKCk6IHRoaXMge1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByaXZhdGUgcmVmcmVzaERhdGEoKTogdGhpcyB7XG4gICAgdGhpcy5fZGF0YSA9IFsuLi50aGlzLl9kYXRhXTtcbiAgICByZXR1cm4gdGhpcy5jZCgpO1xuICB9XG5cbiAgcmVuZGVyVG90YWwodG90YWw6IHN0cmluZywgcmFuZ2U6IHN0cmluZ1tdKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy50b3RhbFRwbFxuICAgICAgPyB0aGlzLnRvdGFsVHBsLnJlcGxhY2UoJ3t7dG90YWx9fScsIHRvdGFsKS5yZXBsYWNlKCd7e3JhbmdlWzBdfX0nLCByYW5nZVswXSkucmVwbGFjZSgne3tyYW5nZVsxXX19JywgcmFuZ2VbMV0pXG4gICAgICA6ICcnO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGFuZ2VFbWl0KHR5cGU6IFNUQ2hhbmdlVHlwZSwgZGF0YT86IE56U2FmZUFueSk6IHZvaWQge1xuICAgIGNvbnN0IHJlczogU1RDaGFuZ2UgPSB7XG4gICAgICB0eXBlLFxuICAgICAgcGk6IHRoaXMucGksXG4gICAgICBwczogdGhpcy5wcyxcbiAgICAgIHRvdGFsOiB0aGlzLnRvdGFsXG4gICAgfTtcbiAgICBpZiAoZGF0YSAhPSBudWxsKSB7XG4gICAgICByZXNbdHlwZV0gPSBkYXRhO1xuICAgIH1cbiAgICB0aGlzLmNoYW5nZS5lbWl0KHJlcyk7XG4gIH1cblxuICAvLyAjcmVnaW9uIGRhdGFcblxuICAvKipcbiAgICog6I635Y+W6L+H5ruk5ZCO5omA5pyJ5pWw5o2uXG4gICAqIC0g5pys5Zyw5pWw5o2u77ya5YyF5ZCr5o6S5bqP44CB6L+H5ruk5ZCO5LiN5YiG6aG15pWw5o2uXG4gICAqIC0g6L+c56iL5pWw5o2u77ya5LiN5Lyg6YCSIGBwaWDjgIFgcHNgIOS4pOS4quWPguaVsFxuICAgKi9cbiAgZ2V0IGZpbHRlcmVkRGF0YSgpOiBPYnNlcnZhYmxlPFNURGF0YVtdPiB7XG4gICAgcmV0dXJuIHRoaXMubG9hZERhdGEoeyBwYWdpbmF0b3I6IGZhbHNlIH0gYXMgdW5rbm93biBhcyBTVERhdGFTb3VyY2VPcHRpb25zKS5waXBlKG1hcChyZXMgPT4gcmVzLmxpc3QpKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlVG90YWxUcGwoKTogdm9pZCB7XG4gICAgY29uc3QgeyB0b3RhbCB9ID0gdGhpcy5wYWdlO1xuICAgIGlmICh0eXBlb2YgdG90YWwgPT09ICdzdHJpbmcnICYmIHRvdGFsLmxlbmd0aCkge1xuICAgICAgdGhpcy50b3RhbFRwbCA9IHRvdGFsO1xuICAgIH0gZWxzZSBpZiAoYm9vbGVhbkF0dHJpYnV0ZSh0b3RhbCkpIHtcbiAgICAgIHRoaXMudG90YWxUcGwgPSB0aGlzLmxvY2FsZS50b3RhbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50b3RhbFRwbCA9ICcnO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0TG9hZGluZyh2YWw6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5sb2FkaW5nID09IG51bGwpIHtcbiAgICAgIHRoaXMuX2xvYWRpbmcgPSB2YWw7XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBsb2FkRGF0YShvcHRpb25zPzogU1REYXRhU291cmNlT3B0aW9ucyk6IE9ic2VydmFibGU8U1REYXRhU291cmNlUmVzdWx0PiB7XG4gICAgY29uc3QgeyBwaSwgcHMsIGRhdGEsIHJlcSwgcmVzLCBwYWdlLCB0b3RhbCwgc2luZ2xlU29ydCwgbXVsdGlTb3J0LCByb3dDbGFzc05hbWUsIF9jb2x1bW5zLCBfaGVhZGVycyB9ID0gdGhpcztcbiAgICByZXR1cm4gdGhpcy5kYXRhU291cmNlXG4gICAgICAucHJvY2Vzcyh7XG4gICAgICAgIHBpLFxuICAgICAgICBwcyxcbiAgICAgICAgdG90YWwsXG4gICAgICAgIGRhdGEsXG4gICAgICAgIHJlcSxcbiAgICAgICAgcmVzLFxuICAgICAgICBwYWdlLFxuICAgICAgICBjb2x1bW5zOiBfY29sdW1ucyxcbiAgICAgICAgaGVhZGVyczogX2hlYWRlcnMsXG4gICAgICAgIHNpbmdsZVNvcnQsXG4gICAgICAgIG11bHRpU29ydCxcbiAgICAgICAgcm93Q2xhc3NOYW1lLFxuICAgICAgICBwYWdpbmF0b3I6IHRydWUsXG4gICAgICAgIGN1c3RvbVJlcXVlc3Q6IHRoaXMuY3VzdG9tUmVxdWVzdCB8fCB0aGlzLmNvZy5jdXN0b21SZXF1ZXN0LFxuICAgICAgICAuLi5vcHRpb25zXG4gICAgICB9KVxuICAgICAgLnBpcGUodGFrZVVudGlsRGVzdHJveWVkKHRoaXMuZGVzdHJveSQpKTtcbiAgfVxuXG4gIHByaXZhdGUgbG9hZFBhZ2VEYXRhKCk6IE9ic2VydmFibGU8dGhpcz4ge1xuICAgIHRoaXMuc2V0TG9hZGluZyh0cnVlKTtcbiAgICByZXR1cm4gdGhpcy5sb2FkRGF0YSgpLnBpcGUoXG4gICAgICBmaW5hbGl6ZSgoKSA9PiB0aGlzLnNldExvYWRpbmcoZmFsc2UpKSxcbiAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4ge1xuICAgICAgICB0aGlzLmVycm9yLmVtaXQoeyB0eXBlOiAncmVxJywgZXJyb3IgfSk7XG4gICAgICAgIHJldHVybiB0aHJvd0Vycm9yKCgpID0+IGVycm9yKTtcbiAgICAgIH0pLFxuICAgICAgbWFwKHJlc3VsdCA9PiB7XG4gICAgICAgIGNvbnN0IHVuZGVmaW5lZFN0cmluZyA9ICd1bmRlZmluZWQnO1xuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdC5waSAhPT0gdW5kZWZpbmVkU3RyaW5nKSB7XG4gICAgICAgICAgdGhpcy5waSA9IHJlc3VsdC5waTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdC5wcyAhPT0gdW5kZWZpbmVkU3RyaW5nKSB7XG4gICAgICAgICAgdGhpcy5wcyA9IHJlc3VsdC5wcztcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdC50b3RhbCAhPT0gdW5kZWZpbmVkU3RyaW5nKSB7XG4gICAgICAgICAgdGhpcy50b3RhbCA9IHJlc3VsdC50b3RhbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdC5wYWdlU2hvdyAhPT0gdW5kZWZpbmVkU3RyaW5nKSB7XG4gICAgICAgICAgdGhpcy5faXNQYWdpbmF0aW9uID0gcmVzdWx0LnBhZ2VTaG93O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2RhdGEgPSByZXN1bHQubGlzdCA/PyBbXTtcbiAgICAgICAgdGhpcy5fc3RhdGlzdGljYWwgPSByZXN1bHQuc3RhdGlzdGljYWwgYXMgU1RTdGF0aXN0aWNhbFJlc3VsdHM7XG4gICAgICAgIC8vIFNob3VsZCBiZSByZS1yZW5kZXIgaW4gbmV4dCB0aWtlIHdoZW4gdXNpbmcgdmlydHVhbCBzY3JvbGxcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL25nLWFsYWluL25nLWFsYWluL2lzc3Vlcy8xODM2XG4gICAgICAgIGlmICh0aGlzLmNka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydCAhPSBudWxsKSB7XG4gICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLmNka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydD8uY2hlY2tWaWV3cG9ydFNpemUoKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcmVmQ2hlY2soKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VFbWl0KCdsb2FkZWQnLCByZXN1bHQubGlzdCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqIOa4heepuuaJgOacieaVsOaNriAqL1xuICBjbGVhcihjbGVhblN0YXR1czogYm9vbGVhbiA9IHRydWUpOiB0aGlzIHtcbiAgICBpZiAoY2xlYW5TdGF0dXMpIHtcbiAgICAgIHRoaXMuY2xlYXJTdGF0dXMoKTtcbiAgICB9XG4gICAgdGhpcy5fZGF0YSA9IFtdO1xuICAgIHJldHVybiB0aGlzLmNkKCk7XG4gIH1cblxuICAvKiog5riF56m65omA5pyJ54q25oCBICovXG4gIGNsZWFyU3RhdHVzKCk6IHRoaXMge1xuICAgIHJldHVybiB0aGlzLmNsZWFyQ2hlY2soKS5jbGVhclJhZGlvKCkuY2xlYXJGaWx0ZXIoKS5jbGVhclNvcnQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmoLnmja7pobXnoIHph43mlrDliqDovb3mlbDmja5cbiAgICpcbiAgICogQHBhcmFtIHBpIOaMh+WumuW9k+WJjemhteegge+8jOm7mOiupO+8mmAxYFxuICAgKiBAcGFyYW0gZXh0cmFQYXJhbXMg6YeN5paw5oyH5a6aIGBleHRyYVBhcmFtc2Ag5YC8XG4gICAqIEBwYXJhbSBvcHRpb25zIOmAiemhuVxuICAgKi9cbiAgbG9hZChwaTogbnVtYmVyID0gMSwgZXh0cmFQYXJhbXM/OiBOelNhZmVBbnksIG9wdGlvbnM/OiBTVExvYWRPcHRpb25zKTogdGhpcyB7XG4gICAgaWYgKHBpICE9PSAtMSkgdGhpcy5waSA9IHBpO1xuICAgIGlmICh0eXBlb2YgZXh0cmFQYXJhbXMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlcS5wYXJhbXMgPSBvcHRpb25zICYmIG9wdGlvbnMubWVyZ2UgPyB7IC4uLnRoaXMucmVxLnBhcmFtcywgLi4uZXh0cmFQYXJhbXMgfSA6IGV4dHJhUGFyYW1zO1xuICAgIH1cbiAgICB0aGlzLl9jaGFuZ2UoJ3BpJywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICog6YeN5paw5Yi35paw5b2T5YmN6aG1XG4gICAqXG4gICAqIEBwYXJhbSBleHRyYVBhcmFtcyDph43mlrDmjIflrpogYGV4dHJhUGFyYW1zYCDlgLxcbiAgICovXG4gIHJlbG9hZChleHRyYVBhcmFtcz86IE56U2FmZUFueSwgb3B0aW9ucz86IFNUTG9hZE9wdGlvbnMpOiB0aGlzIHtcbiAgICByZXR1cm4gdGhpcy5sb2FkKC0xLCBleHRyYVBhcmFtcywgb3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICog6YeN572u5LiU6YeN5paw6K6+572uIGBwaWAg5Li6IGAxYO+8jOWMheWQq+S7peS4i+WAvO+8mlxuICAgKiAtIGBjaGVja2Ag5pWw5o2uXG4gICAqIC0gYHJhZGlvYCDmlbDmja5cbiAgICogLSBgc29ydGAg5pWw5o2uXG4gICAqIC0gYGZpbGV0ZXJgIOaVsOaNrlxuICAgKlxuICAgKiBAcGFyYW0gZXh0cmFQYXJhbXMg6YeN5paw5oyH5a6aIGBleHRyYVBhcmFtc2Ag5YC8XG4gICAqL1xuICByZXNldChleHRyYVBhcmFtcz86IE56U2FmZUFueSwgb3B0aW9ucz86IFNUTG9hZE9wdGlvbnMpOiB0aGlzIHtcbiAgICB0aGlzLmNsZWFyU3RhdHVzKCkubG9hZCgxLCBleHRyYVBhcmFtcywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcml2YXRlIF90b1RvcChlbmZvcmNlPzogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICghKGVuZm9yY2UgPT0gbnVsbCA/IHRoaXMucGFnZS50b1RvcCA6IGVuZm9yY2UpKSByZXR1cm47XG4gICAgY29uc3QgZWwgPSB0aGlzLmVsO1xuICAgIGVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgLy8gZml4IGhlYWRlciBoZWlnaHRcbiAgICB0aGlzLmRvYy5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIC09IHRoaXMucGFnZS50b1RvcE9mZnNldCE7XG4gICAgaWYgKHRoaXMuc2Nyb2xsKSB7XG4gICAgICBpZiAodGhpcy5jZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQpIHtcbiAgICAgICAgdGhpcy5jZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQuc2Nyb2xsVG8oe1xuICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICBsZWZ0OiAwXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWwucXVlcnlTZWxlY3RvcignLmFudC10YWJsZS1ib2R5LCAuYW50LXRhYmxlLWNvbnRlbnQnKT8uc2Nyb2xsVG8oMCwgMCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX2NoYW5nZSh0eXBlOiAncGknIHwgJ3BzJywgb3B0aW9ucz86IFNUTG9hZE9wdGlvbnMpOiB2b2lkIHtcbiAgICBpZiAodHlwZSA9PT0gJ3BpJyB8fCAodHlwZSA9PT0gJ3BzJyAmJiB0aGlzLnBpIDw9IE1hdGguY2VpbCh0aGlzLnRvdGFsIC8gdGhpcy5wcykpKSB7XG4gICAgICB0aGlzLmxvYWRQYWdlRGF0YSgpLnN1YnNjcmliZSgoKSA9PiB0aGlzLl90b1RvcChvcHRpb25zPy50b1RvcCkpO1xuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlRW1pdCh0eXBlKTtcbiAgfVxuXG4gIHByaXZhdGUgY2xvc2VPdGhlckV4cGFuZChpdGVtOiBTVERhdGEpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5leHBhbmRBY2NvcmRpb24gPT09IGZhbHNlKSByZXR1cm47XG4gICAgdGhpcy5fZGF0YS5maWx0ZXIoaSA9PiBpICE9PSBpdGVtKS5mb3JFYWNoKGkgPT4gKGkuZXhwYW5kID0gZmFsc2UpKTtcbiAgfVxuXG4gIF9yb3dDbGljayhlOiBFdmVudCwgaXRlbTogU1REYXRhLCBpbmRleDogbnVtYmVyLCBkYmw6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBjb25zdCBlbCA9IGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgIGlmIChlbC5ub2RlTmFtZSA9PT0gJ0lOUFVUJykgcmV0dXJuO1xuICAgIGNvbnN0IHsgZXhwYW5kLCBleHBhbmRSb3dCeUNsaWNrIH0gPSB0aGlzO1xuICAgIGlmICghIWV4cGFuZCAmJiBpdGVtLnNob3dFeHBhbmQgIT09IGZhbHNlICYmIGV4cGFuZFJvd0J5Q2xpY2spIHtcbiAgICAgIGl0ZW0uZXhwYW5kID0gIWl0ZW0uZXhwYW5kO1xuICAgICAgdGhpcy5jbG9zZU90aGVyRXhwYW5kKGl0ZW0pO1xuICAgICAgdGhpcy5jaGFuZ2VFbWl0KCdleHBhbmQnLCBpdGVtKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkYXRhID0geyBlLCBpdGVtLCBpbmRleCB9O1xuICAgIGlmIChkYmwpIHtcbiAgICAgIHRoaXMuY2hhbmdlRW1pdCgnZGJsQ2xpY2snLCBkYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY2xpY2tSb3dDbGFzc05hbWUoZWwsIGl0ZW0sIGluZGV4KTtcbiAgICAgIHRoaXMuY2hhbmdlRW1pdCgnY2xpY2snLCBkYXRhKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jbGlja1Jvd0NsYXNzTmFtZShlbDogSFRNTEVsZW1lbnQsIGl0ZW06IFNURGF0YSwgaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IGNyID0gdGhpcy5jbGlja1Jvd0NsYXNzTmFtZTtcbiAgICBpZiAoY3IgPT0gbnVsbCkgcmV0dXJuO1xuICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgIGV4Y2x1c2l2ZTogZmFsc2UsXG4gICAgICAuLi4odHlwZW9mIGNyID09PSAnc3RyaW5nJyA/IHsgZm46ICgpID0+IGNyIH0gOiBjcilcbiAgICB9IGFzIFNUQ2xpY2tSb3dDbGFzc05hbWVUeXBlO1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IGNvbmZpZy5mbihpdGVtLCBpbmRleCk7XG4gICAgY29uc3QgdHJFbCA9IGVsLmNsb3Nlc3QoJ3RyJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgaWYgKGNvbmZpZy5leGNsdXNpdmUpIHtcbiAgICAgIHRyRWwucGFyZW50RWxlbWVudCEhLnF1ZXJ5U2VsZWN0b3JBbGwoJ3RyJykuZm9yRWFjaCgoYTogSFRNTEVsZW1lbnQpID0+IGEuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpKTtcbiAgICB9XG4gICAgaWYgKHRyRWwuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkpIHtcbiAgICAgIHRyRWwuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0ckVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICB9XG4gIH1cblxuICBfZXhwYW5kQ2hhbmdlKGl0ZW06IFNURGF0YSwgZXhwYW5kOiBib29sZWFuKTogdm9pZCB7XG4gICAgaXRlbS5leHBhbmQgPSBleHBhbmQ7XG4gICAgdGhpcy5jbG9zZU90aGVyRXhwYW5kKGl0ZW0pO1xuICAgIHRoaXMuY2hhbmdlRW1pdCgnZXhwYW5kJywgaXRlbSk7XG4gIH1cblxuICBfc3RvcFByb3BhZ2F0aW9uKGV2OiBFdmVudCk6IHZvaWQge1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVmQ29sQW5kRGF0YSgpOiB0aGlzIHtcbiAgICB0aGlzLl9jb2x1bW5zLmZvckVhY2goYyA9PiB7XG4gICAgICB0aGlzLl9kYXRhLmZvckVhY2goKGksIGlkeCkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSBpLl92YWx1ZXMgYXMgX1NURGF0YVZhbHVlW107XG4gICAgICAgIGlmIChjLnR5cGUgPT09ICdubycpIHtcbiAgICAgICAgICBjb25zdCB0ZXh0ID0gYCR7dGhpcy5kYXRhU291cmNlLmdldE5vSW5kZXgoaSwgYywgaWR4KX1gO1xuICAgICAgICAgIHZhbHVlc1tjLl9fcG9pbnQhXSA9IHtcbiAgICAgICAgICAgIHRleHQsXG4gICAgICAgICAgICBfdGV4dDogdGV4dCxcbiAgICAgICAgICAgIG9yZzogaWR4LFxuICAgICAgICAgICAgc2FmZVR5cGU6ICd0ZXh0J1xuICAgICAgICAgIH0gYXMgX1NURGF0YVZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHZhbHVlc1tjLl9fcG9pbnQhXS5wcm9wcyA9IHRoaXMuZGF0YVNvdXJjZS5nZXRDZWxsKGMsIGksIGlkeCk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLnJlZnJlc2hEYXRhKCk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgcm93cyBpbiB0aGUgdGFibGUsIGxpa2UgdGhpczpcbiAgICpcbiAgICogYGBgXG4gICAqIHRoaXMuc3QuYWRkUm93KHN0RGF0YUl0ZW0pXG4gICAqIGBgYFxuICAgKlxuICAgKiAqKlRJUFM6KiogRG9uJ3QgY2hhbmdlIHRoZSBgdG90YWxgIHZhbHVlLCBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGByZWxvYWRgIG1ldGhvZCBpZiBuZWVkZWRcbiAgICovXG4gIGFkZFJvdyhkYXRhOiBTVERhdGEgfCBTVERhdGFbXSwgb3B0aW9ucz86IHsgaW5kZXg/OiBudW1iZXIgfSk6IHRoaXMge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShkYXRhKSkgZGF0YSA9IFtkYXRhXTtcbiAgICB0aGlzLl9kYXRhLnNwbGljZShvcHRpb25zPy5pbmRleCA/PyAwLCAwLCAuLi4oZGF0YSBhcyBTVERhdGFbXSkpO1xuICAgIHJldHVybiB0aGlzLm9wdGltaXplRGF0YSgpLl9yZWZDb2xBbmREYXRhKCk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGEgcm93IGluIHRoZSB0YWJsZSwgbGlrZSB0aGlzOlxuICAgKlxuICAgKiBgYGBcbiAgICogdGhpcy5zdC5yZW1vdmVSb3coMClcbiAgICogdGhpcy5zdC5yZW1vdmVSb3coc3REYXRhSXRlbSlcbiAgICogYGBgXG4gICAqXG4gICAqICoqVElQUzoqKiBEb24ndCBjaGFuZ2UgdGhlIGB0b3RhbGAgdmFsdWUsIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgYHJlbG9hZGAgbWV0aG9kIGlmIG5lZWRlZFxuICAgKi9cbiAgcmVtb3ZlUm93KGRhdGE6IFNURGF0YSB8IFNURGF0YVtdIHwgbnVtYmVyKTogdGhpcyB7XG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnbnVtYmVyJykge1xuICAgICAgdGhpcy5fZGF0YS5zcGxpY2UoZGF0YSwgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICBkYXRhID0gW2RhdGFdO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjdXJEYXRhID0gdGhpcy5fZGF0YTtcbiAgICAgIGZvciAodmFyIGkgPSBjdXJEYXRhLmxlbmd0aDsgaS0tOyApIHtcbiAgICAgICAgaWYgKGRhdGEuaW5kZXhPZihjdXJEYXRhW2ldKSAhPT0gLTEpIHtcbiAgICAgICAgICBjdXJEYXRhLnNwbGljZShpLCAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fcmVmQ2hlY2soKS5fcmVmQ29sQW5kRGF0YSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHJvdyB2YWx1ZSBmb3IgdGhlIGBpbmRleGAgaW4gdGhlIHRhYmxlLCBsaWtlIHRoaXM6XG4gICAqXG4gICAqIC0gYG9wdGlub3MucmVmcmVzaFNjaGVtYWAgV2hldGhlciB0byByZWZyZXNoIG9mIHN0IHNjaGVtYXNcbiAgICogLSBgb3B0aW5vcy5lbWl0UmVsb2FkYCBXaGV0aGVyIHRvIHRyaWdnZXIgYSByZWxvYWQgaHR0cCByZXF1ZXN0IHdoZW4gZGF0YSBpcyB1cmxcbiAgICpcbiAgICogYGBgXG4gICAqIHRoaXMuc3Quc2V0Um93KDAsIHsgcHJpY2U6IDEwMCB9KVxuICAgKiB0aGlzLnN0LnNldFJvdygwLCB7IHByaWNlOiAxMDAsIG5hbWU6ICdhc2RmJyB9KVxuICAgKiB0aGlzLnN0LnNldFJvdyhpdGVtLCB7IHByaWNlOiAxMDAgfSlcbiAgICogYGBgXG4gICAqL1xuICBzZXRSb3coaW5kZXg6IG51bWJlciB8IFNURGF0YSwgaXRlbTogU1REYXRhLCBvcHRpb25zPzogeyByZWZyZXNoU2NoZW1hPzogYm9vbGVhbjsgZW1pdFJlbG9hZD86IGJvb2xlYW4gfSk6IHRoaXMge1xuICAgIG9wdGlvbnMgPSB7IHJlZnJlc2hTY2hlbWE6IGZhbHNlLCBlbWl0UmVsb2FkOiBmYWxzZSwgLi4ub3B0aW9ucyB9O1xuICAgIGlmICh0eXBlb2YgaW5kZXggIT09ICdudW1iZXInKSB7XG4gICAgICBpbmRleCA9IHRoaXMuX2RhdGEuaW5kZXhPZihpbmRleCk7XG4gICAgfVxuICAgIHRoaXMuX2RhdGFbaW5kZXhdID0gZGVlcE1lcmdlS2V5KHRoaXMuX2RhdGFbaW5kZXhdLCBmYWxzZSwgaXRlbSk7XG4gICAgdGhpcy5vcHRpbWl6ZURhdGEoKTtcbiAgICBpZiAob3B0aW9ucy5yZWZyZXNoU2NoZW1hKSB7XG4gICAgICB0aGlzLnJlc2V0Q29sdW1ucyh7IGVtaXRSZWxvYWQ6IG9wdGlvbnMuZW1pdFJlbG9hZCB9KTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5yZWZyZXNoRGF0YSgpO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gc29ydFxuXG4gIHNvcnQoY29sOiBfU1RDb2x1bW4sIHZhbHVlOiBOelNhZmVBbnkpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5tdWx0aVNvcnQpIHtcbiAgICAgIGNvbC5fc29ydC5kZWZhdWx0ID0gdmFsdWU7XG4gICAgICBjb2wuX3NvcnQudGljayA9IHRoaXMuZGF0YVNvdXJjZS5uZXh0U29ydFRpY2s7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2hlYWRlcnMuZm9yRWFjaChyb3cgPT4ge1xuICAgICAgICByb3cuZm9yRWFjaChpdGVtID0+IChpdGVtLmNvbHVtbi5fc29ydC5kZWZhdWx0ID0gaXRlbS5jb2x1bW4gPT09IGNvbCA/IHZhbHVlIDogbnVsbCkpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB0aGlzLmxvYWRQYWdlRGF0YSgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBjb25zdCByZXMgPSB7XG4gICAgICAgIHZhbHVlLFxuICAgICAgICBtYXA6IHRoaXMuZGF0YVNvdXJjZS5nZXRSZXFTb3J0TWFwKHRoaXMuc2luZ2xlU29ydCwgdGhpcy5tdWx0aVNvcnQsIHRoaXMuX2hlYWRlcnMpLFxuICAgICAgICBjb2x1bW46IGNvbFxuICAgICAgfTtcbiAgICAgIHRoaXMuY2hhbmdlRW1pdCgnc29ydCcsIHJlcyk7XG4gICAgfSk7XG4gIH1cblxuICBjbGVhclNvcnQoKTogdGhpcyB7XG4gICAgdGhpcy5faGVhZGVycy5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICByb3cuZm9yRWFjaChpdGVtID0+IChpdGVtLmNvbHVtbi5fc29ydC5kZWZhdWx0ID0gbnVsbCkpO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gZmlsdGVyXG5cbiAgX2hhbmRsZUZpbHRlcihjb2w6IF9TVENvbHVtbiwgY29uZmlybTogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICghY29uZmlybSkge1xuICAgICAgdGhpcy5jb2x1bW5Tb3VyY2UuY2xlYW5GaWx0ZXIoY29sKTtcbiAgICB9XG4gICAgLy8g6L+H5ruk6KGo56S65LiA56eN5pWw5o2u55qE5Y+Y5YyW5bqU6YeN572u6aG156CB5Li6IGAxYFxuICAgIHRoaXMucGkgPSAxO1xuICAgIHRoaXMuY29sdW1uU291cmNlLnVwZGF0ZURlZmF1bHQoY29sLmZpbHRlciEpO1xuICAgIHRoaXMubG9hZFBhZ2VEYXRhKCkuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2hhbmdlRW1pdCgnZmlsdGVyJywgY29sKSk7XG4gIH1cblxuICBoYW5kbGVGaWx0ZXJOb3RpZnkodmFsdWU/OiB1bmtub3duKTogdm9pZCB7XG4gICAgdGhpcy5jaGFuZ2VFbWl0KCdmaWx0ZXJDaGFuZ2UnLCB2YWx1ZSk7XG4gIH1cblxuICBjbGVhckZpbHRlcigpOiB0aGlzIHtcbiAgICB0aGlzLl9jb2x1bW5zLmZpbHRlcih3ID0+IHcuZmlsdGVyICYmIHcuZmlsdGVyLmRlZmF1bHQgPT09IHRydWUpLmZvckVhY2goY29sID0+IHRoaXMuY29sdW1uU291cmNlLmNsZWFuRmlsdGVyKGNvbCkpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIGNoZWNrYm94XG5cbiAgLyoqIOa4hemZpOaJgOaciSBgY2hlY2tib3hgICovXG4gIGNsZWFyQ2hlY2soKTogdGhpcyB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tBbGwoZmFsc2UpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVmQ2hlY2soKTogdGhpcyB7XG4gICAgY29uc3QgdmFsaWREYXRhID0gdGhpcy5fZGF0YS5maWx0ZXIodyA9PiAhdy5kaXNhYmxlZCk7XG4gICAgY29uc3QgY2hlY2tlZExpc3QgPSB2YWxpZERhdGEuZmlsdGVyKHcgPT4gdy5jaGVja2VkID09PSB0cnVlKTtcbiAgICB0aGlzLl9hbGxDaGVja2VkID0gY2hlY2tlZExpc3QubGVuZ3RoID4gMCAmJiBjaGVja2VkTGlzdC5sZW5ndGggPT09IHZhbGlkRGF0YS5sZW5ndGg7XG4gICAgY29uc3QgYWxsVW5DaGVja2VkID0gdmFsaWREYXRhLmV2ZXJ5KHZhbHVlID0+ICF2YWx1ZS5jaGVja2VkKTtcbiAgICB0aGlzLl9pbmRldGVybWluYXRlID0gIXRoaXMuX2FsbENoZWNrZWQgJiYgIWFsbFVuQ2hlY2tlZDtcbiAgICB0aGlzLl9hbGxDaGVja2VkRGlzYWJsZWQgPSB0aGlzLl9kYXRhLmxlbmd0aCA9PT0gdGhpcy5fZGF0YS5maWx0ZXIodyA9PiB3LmRpc2FibGVkKS5sZW5ndGg7XG4gICAgcmV0dXJuIHRoaXMuY2QoKTtcbiAgfVxuXG4gIGNoZWNrQWxsKGNoZWNrZWQ/OiBib29sZWFuKTogdGhpcyB7XG4gICAgY2hlY2tlZCA9IHR5cGVvZiBjaGVja2VkID09PSAndW5kZWZpbmVkJyA/IHRoaXMuX2FsbENoZWNrZWQgOiBjaGVja2VkO1xuICAgIHRoaXMuX2RhdGEuZmlsdGVyKHcgPT4gIXcuZGlzYWJsZWQpLmZvckVhY2goaSA9PiAoaS5jaGVja2VkID0gY2hlY2tlZCkpO1xuICAgIHJldHVybiB0aGlzLl9yZWZDaGVjaygpLl9jaGVja05vdGlmeSgpLnJlZnJlc2hEYXRhKCk7XG4gIH1cblxuICBfcm93U2VsZWN0aW9uKHJvdzogU1RDb2x1bW5TZWxlY3Rpb24pOiB0aGlzIHtcbiAgICByb3cuc2VsZWN0KHRoaXMuX2RhdGEpO1xuICAgIHJldHVybiB0aGlzLl9yZWZDaGVjaygpLl9jaGVja05vdGlmeSgpO1xuICB9XG5cbiAgX2NoZWNrTm90aWZ5KCk6IHRoaXMge1xuICAgIGNvbnN0IHJlcyA9IHRoaXMuX2RhdGEuZmlsdGVyKHcgPT4gIXcuZGlzYWJsZWQgJiYgdy5jaGVja2VkID09PSB0cnVlKTtcbiAgICB0aGlzLmNoYW5nZUVtaXQoJ2NoZWNrYm94JywgcmVzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIHJhZGlvXG5cbiAgLyoqIOa4hemZpOaJgOaciSBgcmFkaW9gICovXG4gIGNsZWFyUmFkaW8oKTogdGhpcyB7XG4gICAgdGhpcy5fZGF0YS5maWx0ZXIodyA9PiB3LmNoZWNrZWQpLmZvckVhY2goaXRlbSA9PiAoaXRlbS5jaGVja2VkID0gZmFsc2UpKTtcbiAgICB0aGlzLmNoYW5nZUVtaXQoJ3JhZGlvJywgbnVsbCk7XG4gICAgcmV0dXJuIHRoaXMucmVmcmVzaERhdGEoKTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICBfaGFuZGxlVGQoZXY6IF9TVFRkTm90aWZ5KTogdm9pZCB7XG4gICAgc3dpdGNoIChldi50eXBlKSB7XG4gICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICAgIHRoaXMuX3JlZkNoZWNrKCkuX2NoZWNrTm90aWZ5KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncmFkaW8nOlxuICAgICAgICB0aGlzLmNoYW5nZUVtaXQoJ3JhZGlvJywgZXYuaXRlbSk7XG4gICAgICAgIHRoaXMucmVmcmVzaERhdGEoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgLy8gI3JlZ2lvbiBleHBvcnRcblxuICAvKipcbiAgICog5a+85Ye65b2T5YmN6aG177yM56Gu5L+d5bey57uP5rOo5YaMIGBYbHN4TW9kdWxlYFxuICAgKlxuICAgKiBAcGFyYW0gbmV3RGF0YSDph43mlrDmjIflrprmlbDmja7vvJvoi6XkuLogYHRydWVgIOihqOekuuS9v+eUqCBgZmlsdGVyZWREYXRhYCDmlbDmja5cbiAgICogQHBhcmFtIG9wdCDpop3lpJblj4LmlbBcbiAgICovXG4gIGV4cG9ydChuZXdEYXRhPzogU1REYXRhW10gfCB0cnVlLCBvcHQ/OiBTVEV4cG9ydE9wdGlvbnMpOiB2b2lkIHtcbiAgICBjb25zdCBkYXRhID0gQXJyYXkuaXNBcnJheShuZXdEYXRhKVxuICAgICAgPyB0aGlzLmRhdGFTb3VyY2Uub3B0aW1pemVEYXRhKHsgY29sdW1uczogdGhpcy5fY29sdW1ucywgcmVzdWx0OiBuZXdEYXRhIH0pXG4gICAgICA6IHRoaXMuX2RhdGE7XG4gICAgKG5ld0RhdGEgPT09IHRydWUgPyB0aGlzLmZpbHRlcmVkRGF0YSA6IG9mKGRhdGEpKS5zdWJzY3JpYmUoKHJlczogU1REYXRhW10pID0+XG4gICAgICB0aGlzLmV4cG9ydFNydi5leHBvcnQoe1xuICAgICAgICBjb2x1bWVuczogdGhpcy5fY29sdW1ucyxcbiAgICAgICAgLi4ub3B0LFxuICAgICAgICBkYXRhOiByZXNcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIHJlc2l6YWJsZVxuXG4gIGNvbFJlc2l6ZSh7IHdpZHRoIH06IE56UmVzaXplRXZlbnQsIGNvbHVtbjogX1NUQ29sdW1uKTogdm9pZCB7XG4gICAgY29sdW1uLndpZHRoID0gYCR7d2lkdGh9cHhgO1xuICAgIHRoaXMuY2hhbmdlRW1pdCgncmVzaXplJywgY29sdW1uKTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIGNvbnRleHRtZW51XG4gIG9uQ29udGV4dG1lbnUoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuY29udGV4dG1lbnUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCBjb2xFbCA9IChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsb3Nlc3QoJ1tkYXRhLWNvbC1pbmRleF0nKSBhcyBIVE1MRWxlbWVudDtcbiAgICBpZiAoIWNvbEVsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGNvbEluZGV4ID0gTnVtYmVyKGNvbEVsLmRhdGFzZXQuY29sSW5kZXgpO1xuICAgIGNvbnN0IHJvd0luZGV4ID0gTnVtYmVyKChjb2xFbC5jbG9zZXN0KCd0cicpIGFzIEhUTUxFbGVtZW50KS5kYXRhc2V0LmluZGV4KTtcbiAgICBjb25zdCBpc1RpdGxlID0gaXNOYU4ocm93SW5kZXgpO1xuICAgIGNvbnN0IG9icyQgPSB0aGlzLmNvbnRleHRtZW51KHtcbiAgICAgIGV2ZW50LFxuICAgICAgdHlwZTogaXNUaXRsZSA/ICdoZWFkJyA6ICdib2R5JyxcbiAgICAgIHJvd0luZGV4OiBpc1RpdGxlID8gbnVsbCA6IHJvd0luZGV4LFxuICAgICAgY29sSW5kZXgsXG4gICAgICBkYXRhOiBpc1RpdGxlID8gbnVsbCA6IHRoaXMubGlzdFtyb3dJbmRleF0sXG4gICAgICBjb2x1bW46IHRoaXMuX2NvbHVtbnNbY29sSW5kZXhdXG4gICAgfSk7XG4gICAgKGlzT2JzZXJ2YWJsZShvYnMkKSA/IG9icyQgOiBvZihvYnMkKSlcbiAgICAgIC5waXBlKFxuICAgICAgICB0YWtlVW50aWxEZXN0cm95ZWQodGhpcy5kZXN0cm95JCksXG4gICAgICAgIGZpbHRlcihyZXMgPT4gcmVzLmxlbmd0aCA+IDApXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgIHRoaXMuY29udGV4dG1lbnVMaXN0ID0gcmVzLm1hcChpID0+IHtcbiAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoaS5jaGlsZHJlbikpIHtcbiAgICAgICAgICAgIGkuY2hpbGRyZW4gPSBbXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIHRoaXMuY21zLmNyZWF0ZShldmVudCwgdGhpcy5jb250ZXh0bWVudVRwbCk7XG4gICAgICB9KTtcbiAgfVxuICAvLyAjZW5kcmVnaW9uXG5cbiAgZ2V0IGNka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydCgpOiBDZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLm9yZ1RhYmxlPy5jZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQ7XG4gIH1cblxuICBwcml2YXRlIF9yZXNldENvbHVtbnMob3B0aW9ucz86IFNUUmVzZXRDb2x1bW5zT3B0aW9uKTogT2JzZXJ2YWJsZTx0aGlzPiB7XG4gICAgb3B0aW9ucyA9IHsgZW1pdFJlbG9hZDogdHJ1ZSwgcHJlQ2xlYXJEYXRhOiBmYWxzZSwgLi4ub3B0aW9ucyB9O1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5jb2x1bW5zICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5jb2x1bW5zID0gb3B0aW9ucy5jb2x1bW5zO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMucGkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnBpID0gb3B0aW9ucy5waTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLnBzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5wcyA9IG9wdGlvbnMucHM7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLmVtaXRSZWxvYWQpIHtcbiAgICAgIC8vIFNob3VsZCBjbGVhbiBkYXRhLCBCZWNhdXNlIG9mIGNoYW5naW5nIGNvbHVtbnMgbWF5IGNhdXNlIGluYWNjdXJhdGUgZGF0YVxuICAgICAgb3B0aW9ucy5wcmVDbGVhckRhdGEgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5wcmVDbGVhckRhdGEpIHtcbiAgICAgIHRoaXMuX2RhdGEgPSBbXTtcbiAgICB9XG4gICAgdGhpcy5yZWZyZXNoQ29sdW1ucygpO1xuICAgIGlmIChvcHRpb25zLmVtaXRSZWxvYWQpIHtcbiAgICAgIHJldHVybiB0aGlzLmxvYWRQYWdlRGF0YSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNkKCk7XG4gICAgICByZXR1cm4gb2YodGhpcyk7XG4gICAgfVxuICB9XG5cbiAgcmVzZXRDb2x1bW5zKG9wdGlvbnM/OiBTVFJlc2V0Q29sdW1uc09wdGlvbik6IFByb21pc2U8dGhpcz4ge1xuICAgIHJldHVybiBsYXN0VmFsdWVGcm9tKHRoaXMuX3Jlc2V0Q29sdW1ucyhvcHRpb25zKSk7XG4gIH1cblxuICBwcml2YXRlIHJlZnJlc2hDb2x1bW5zKCk6IHRoaXMge1xuICAgIGNvbnN0IHJlcyA9IHRoaXMuY29sdW1uU291cmNlLnByb2Nlc3ModGhpcy5jb2x1bW5zIGFzIF9TVENvbHVtbltdLCB7XG4gICAgICB3aWR0aE1vZGU6IHRoaXMud2lkdGhNb2RlLFxuICAgICAgcmVzaXphYmxlOiB0aGlzLl9yZXNpemFibGUsXG4gICAgICBzYWZlVHlwZTogdGhpcy5jb2cuc2FmZVR5cGUgYXMgU1RDb2x1bW5TYWZlVHlwZVxuICAgIH0pO1xuICAgIHRoaXMuX2NvbHVtbnMgPSByZXMuY29sdW1ucztcbiAgICB0aGlzLl9oZWFkZXJzID0gcmVzLmhlYWRlcnM7XG4gICAgaWYgKHRoaXMuY3VzdG9tV2lkdGhDb25maWcgPT09IGZhbHNlICYmIHJlcy5oZWFkZXJXaWR0aHMgIT0gbnVsbCkge1xuICAgICAgdGhpcy5fd2lkdGhDb25maWcgPSByZXMuaGVhZGVyV2lkdGhzO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByaXZhdGUgb3B0aW1pemVEYXRhKCk6IHRoaXMge1xuICAgIHRoaXMuX2RhdGEgPSB0aGlzLmRhdGFTb3VyY2Uub3B0aW1pemVEYXRhKHtcbiAgICAgIGNvbHVtbnM6IHRoaXMuX2NvbHVtbnMsXG4gICAgICByZXN1bHQ6IHRoaXMuX2RhdGEsXG4gICAgICByb3dDbGFzc05hbWU6IHRoaXMucm93Q2xhc3NOYW1lXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHB1cmUgZGF0YSwgYHN0YCBpbnRlcm5hbGx5IG1haW50YWlucyBhIHNldCBvZiBkYXRhIGZvciBjYWNoaW5nLCB0aGlzIHBhcnQgb2YgZGF0YSBtYXkgYWZmZWN0IHRoZSBiYWNrZW5kXG4gICAqXG4gICAqIOi/lOWbnue6r+WHgOaVsOaNru+8jGBzdGAg5YaF6YOo5Lya57u05oqk5LiA57uE55So5LqO57yT5a2Y55qE5pWw5o2u77yM6L+Z6YOo5YiG5pWw5o2u5Y+v6IO95Lya5b2x5ZON5ZCO56uvXG4gICAqL1xuICBwdXJlSXRlbShpdGVtT3JJbmRleDogU1REYXRhIHwgbnVtYmVyKTogU1REYXRhIHwgbnVsbCB7XG4gICAgaWYgKHR5cGVvZiBpdGVtT3JJbmRleCA9PT0gJ251bWJlcicpIHtcbiAgICAgIGl0ZW1PckluZGV4ID0gdGhpcy5fZGF0YVtpdGVtT3JJbmRleF07XG4gICAgfVxuICAgIGlmICghaXRlbU9ySW5kZXgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBjb3B5SXRlbSA9IGRlZXBDb3B5KGl0ZW1PckluZGV4KTtcbiAgICBbJ192YWx1ZXMnLCAnX3Jvd0NsYXNzTmFtZSddLmZvckVhY2goa2V5ID0+IGRlbGV0ZSBjb3B5SXRlbVtrZXldKTtcbiAgICByZXR1cm4gY29weUl0ZW07XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5yZWZyZXNoQ29sdW1ucygpO1xuICAgIGlmICghdGhpcy5yZXEubGF6eUxvYWQpIHRoaXMubG9hZFBhZ2VEYXRhKCkuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5pbmllZCA9IHRydWU7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtQIGluIGtleW9mIHRoaXNdPzogU2ltcGxlQ2hhbmdlIH0gJiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMubG9hZGluZykge1xuICAgICAgdGhpcy5fbG9hZGluZyA9IGNoYW5nZXMubG9hZGluZy5jdXJyZW50VmFsdWU7XG4gICAgfVxuICAgIGlmICghdGhpcy5pbmllZCkgcmV0dXJuO1xuXG4gICAgaWYgKGNoYW5nZXMuY29sdW1ucykge1xuICAgICAgdGhpcy5yZWZyZXNoQ29sdW1ucygpLm9wdGltaXplRGF0YSgpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5kYXRhKSB7XG4gICAgICB0aGlzLmxvYWRQYWdlRGF0YSgpLnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdC10ZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdC10ZC5jb21wb25lbnQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTVFRkQ29tcG9uZW50IHtcbiAgcHJpdmF0ZSByZWFkb25seSBzdENvbXAgPSBpbmplY3QoU1RDb21wb25lbnQsIHsgaG9zdDogdHJ1ZSB9KTtcbiAgcHJpdmF0ZSByZWFkb25seSByb3V0ZXIgPSBpbmplY3QoUm91dGVyKTtcbiAgcHJpdmF0ZSByZWFkb25seSBtb2RhbEhlbHBlciA9IGluamVjdChNb2RhbEhlbHBlcik7XG4gIHByaXZhdGUgcmVhZG9ubHkgZHJhd2VySGVscGVyID0gaW5qZWN0KERyYXdlckhlbHBlcik7XG5cbiAgQElucHV0KCkgYyE6IF9TVENvbHVtbjtcbiAgQElucHV0KCkgY0lkeCE6IG51bWJlcjtcbiAgQElucHV0KCkgZGF0YSE6IFNURGF0YVtdO1xuICBASW5wdXQoKSBpITogU1REYXRhO1xuICBASW5wdXQoKSBpbmRleCE6IG51bWJlcjtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG4gPSBuZXcgRXZlbnRFbWl0dGVyPF9TVFRkTm90aWZ5PigpO1xuXG4gIHByaXZhdGUgZ2V0IHJvdXRlclN0YXRlKCk6IHsgcGk6IG51bWJlcjsgcHM6IG51bWJlcjsgdG90YWw6IG51bWJlciB9IHtcbiAgICBjb25zdCB7IHBpLCBwcywgdG90YWwgfSA9IHRoaXMuc3RDb21wO1xuICAgIHJldHVybiB7IHBpLCBwcywgdG90YWwgfTtcbiAgfVxuXG4gIHByaXZhdGUgcmVwb3J0KHR5cGU6IF9TVFRkTm90aWZ5VHlwZSk6IHZvaWQge1xuICAgIHRoaXMubi5lbWl0KHsgdHlwZSwgaXRlbTogdGhpcy5pLCBjb2w6IHRoaXMuYyB9KTtcbiAgfVxuXG4gIF9jaGVja2JveCh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuaS5jaGVja2VkID0gdmFsdWU7XG4gICAgdGhpcy5yZXBvcnQoJ2NoZWNrYm94Jyk7XG4gIH1cblxuICBfcmFkaW8oKTogdm9pZCB7XG4gICAgdGhpcy5kYXRhLmZpbHRlcih3ID0+ICF3LmRpc2FibGVkKS5mb3JFYWNoKGkgPT4gKGkuY2hlY2tlZCA9IGZhbHNlKSk7XG4gICAgdGhpcy5pLmNoZWNrZWQgPSB0cnVlO1xuICAgIHRoaXMucmVwb3J0KCdyYWRpbycpO1xuICB9XG5cbiAgX2xpbmsoZTogRXZlbnQpOiBib29sZWFuIHtcbiAgICB0aGlzLl9zdG9wUHJvcGFnYXRpb24oZSk7XG4gICAgY29uc3QgcmVzID0gdGhpcy5jLmNsaWNrISh0aGlzLmksIHRoaXMuc3RDb21wKTtcbiAgICBpZiAodHlwZW9mIHJlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwocmVzLCB7IHN0YXRlOiB0aGlzLnJvdXRlclN0YXRlIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBfc3RvcFByb3BhZ2F0aW9uKGV2OiBFdmVudCk6IHZvaWQge1xuICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICBfYnRuKGJ0bjogU1RDb2x1bW5CdXR0b24sIGV2PzogRXZlbnQpOiB2b2lkIHtcbiAgICBldj8uc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3QgY29nID0gdGhpcy5zdENvbXAuY29nO1xuICAgIGxldCByZWNvcmQgPSB0aGlzLmk7XG4gICAgaWYgKGJ0bi50eXBlID09PSAnbW9kYWwnIHx8IGJ0bi50eXBlID09PSAnc3RhdGljJykge1xuICAgICAgaWYgKGNvZy5tb2RhbCEucHVyZVJlY29hcmQgPT09IHRydWUpIHtcbiAgICAgICAgcmVjb3JkID0gdGhpcy5zdENvbXAucHVyZUl0ZW0ocmVjb3JkKSE7XG4gICAgICB9XG4gICAgICBjb25zdCBtb2RhbCA9IGJ0bi5tb2RhbCE7XG4gICAgICBjb25zdCBvYmogPSB7IFttb2RhbC5wYXJhbXNOYW1lIV06IHJlY29yZCB9O1xuICAgICAgKHRoaXMubW9kYWxIZWxwZXJbYnRuLnR5cGUgPT09ICdtb2RhbCcgPyAnY3JlYXRlJyA6ICdjcmVhdGVTdGF0aWMnXSBhcyBOelNhZmVBbnkpKFxuICAgICAgICBtb2RhbC5jb21wb25lbnQsXG4gICAgICAgIHsgLi4ub2JqLCAuLi4obW9kYWwucGFyYW1zICYmIG1vZGFsLnBhcmFtcyhyZWNvcmQpKSB9LFxuICAgICAgICBkZWVwTWVyZ2VLZXkoe30sIHRydWUsIGNvZy5tb2RhbCwgbW9kYWwpXG4gICAgICApXG4gICAgICAgIC5waXBlKGZpbHRlcih3ID0+IHR5cGVvZiB3ICE9PSAndW5kZWZpbmVkJykpXG4gICAgICAgIC5zdWJzY3JpYmUoKHJlczogTnpTYWZlQW55KSA9PiB0aGlzLmJ0bkNhbGxiYWNrKHJlY29yZCwgYnRuLCByZXMpKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKGJ0bi50eXBlID09PSAnZHJhd2VyJykge1xuICAgICAgaWYgKGNvZy5kcmF3ZXIhLnB1cmVSZWNvYXJkID09PSB0cnVlKSB7XG4gICAgICAgIHJlY29yZCA9IHRoaXMuc3RDb21wLnB1cmVJdGVtKHJlY29yZCkhO1xuICAgICAgfVxuICAgICAgY29uc3QgZHJhd2VyID0gYnRuLmRyYXdlciE7XG4gICAgICBjb25zdCBvYmogPSB7IFtkcmF3ZXIucGFyYW1zTmFtZSFdOiByZWNvcmQgfTtcbiAgICAgIHRoaXMuZHJhd2VySGVscGVyXG4gICAgICAgIC5jcmVhdGUoXG4gICAgICAgICAgZHJhd2VyLnRpdGxlISxcbiAgICAgICAgICBkcmF3ZXIuY29tcG9uZW50LFxuICAgICAgICAgIHsgLi4ub2JqLCAuLi4oZHJhd2VyLnBhcmFtcyAmJiBkcmF3ZXIucGFyYW1zKHJlY29yZCkpIH0sXG4gICAgICAgICAgZGVlcE1lcmdlS2V5KHt9LCB0cnVlLCBjb2cuZHJhd2VyLCBkcmF3ZXIpXG4gICAgICAgIClcbiAgICAgICAgLnBpcGUoZmlsdGVyKHcgPT4gdHlwZW9mIHcgIT09ICd1bmRlZmluZWQnKSlcbiAgICAgICAgLnN1YnNjcmliZShyZXMgPT4gdGhpcy5idG5DYWxsYmFjayhyZWNvcmQsIGJ0biwgcmVzKSk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChidG4udHlwZSA9PT0gJ2xpbmsnKSB7XG4gICAgICBjb25zdCBjbGlja1JlcyA9IHRoaXMuYnRuQ2FsbGJhY2socmVjb3JkLCBidG4pO1xuICAgICAgaWYgKHR5cGVvZiBjbGlja1JlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChjbGlja1JlcywgeyBzdGF0ZTogdGhpcy5yb3V0ZXJTdGF0ZSB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5idG5DYWxsYmFjayhyZWNvcmQsIGJ0bik7XG4gIH1cblxuICBwcml2YXRlIGJ0bkNhbGxiYWNrKHJlY29yZDogU1REYXRhLCBidG46IFNUQ29sdW1uQnV0dG9uLCBtb2RhbD86IE56U2FmZUFueSk6IE56U2FmZUFueSB7XG4gICAgaWYgKCFidG4uY2xpY2spIHJldHVybjtcbiAgICBpZiAodHlwZW9mIGJ0bi5jbGljayA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHN3aXRjaCAoYnRuLmNsaWNrKSB7XG4gICAgICAgIGNhc2UgJ2xvYWQnOlxuICAgICAgICAgIHRoaXMuc3RDb21wLmxvYWQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncmVsb2FkJzpcbiAgICAgICAgICB0aGlzLnN0Q29tcC5yZWxvYWQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGJ0bi5jbGljayhyZWNvcmQsIG1vZGFsLCB0aGlzLnN0Q29tcCk7XG4gICAgfVxuICB9XG59XG4iLCI8bmctdGVtcGxhdGUgI3RpdGxlVHBsIGxldC1pPlxuICA8c3BhbiBbaW5uZXJIVE1MXT1cImkuX3RleHRcIj48L3NwYW4+XG4gIEBpZiAoaS5vcHRpb25hbCkge1xuICAgIDxzbWFsbCBjbGFzcz1cInN0X19oZWFkLW9wdGlvbmFsXCIgW2lubmVySFRNTF09XCJpLm9wdGlvbmFsXCI+PC9zbWFsbD5cbiAgfVxuICBAaWYgKGkub3B0aW9uYWxIZWxwKSB7XG4gICAgPGkgY2xhc3M9XCJzdF9faGVhZC10aXBcIiBuei10b29sdGlwIFtuelRvb2x0aXBUaXRsZV09XCJpLm9wdGlvbmFsSGVscFwiIG56LWljb24gbnpUeXBlPVwicXVlc3Rpb24tY2lyY2xlXCI+PC9pPlxuICB9XG48L25nLXRlbXBsYXRlPlxuPG5nLXRlbXBsYXRlICNjaGtBbGxUcGwgbGV0LWN1c3RvbT5cbiAgPGxhYmVsXG4gICAgbnotY2hlY2tib3hcbiAgICBjbGFzcz1cInN0X19jaGVja2FsbFwiXG4gICAgW256RGlzYWJsZWRdPVwiX2FsbENoZWNrZWREaXNhYmxlZFwiXG4gICAgWyhuZ01vZGVsKV09XCJfYWxsQ2hlY2tlZFwiXG4gICAgW256SW5kZXRlcm1pbmF0ZV09XCJfaW5kZXRlcm1pbmF0ZVwiXG4gICAgKG5nTW9kZWxDaGFuZ2UpPVwiY2hlY2tBbGwoKVwiXG4gICAgW2NsYXNzLmFudC10YWJsZS1zZWxlY3Rpb24tc2VsZWN0LWFsbC1jdXN0b21dPVwiY3VzdG9tXCJcbiAgPjwvbGFiZWw+XG48L25nLXRlbXBsYXRlPlxuPG56LXRhYmxlXG4gICN0YWJsZVxuICBbbnpEYXRhXT1cIl9kYXRhXCJcbiAgWyhuelBhZ2VJbmRleCldPVwicGlcIlxuICAobnpQYWdlSW5kZXhDaGFuZ2UpPVwiX2NoYW5nZSgncGknKVwiXG4gIFsobnpQYWdlU2l6ZSldPVwicHNcIlxuICAobnpQYWdlU2l6ZUNoYW5nZSk9XCJfY2hhbmdlKCdwcycpXCJcbiAgW256VG90YWxdPVwidG90YWxcIlxuICBbbnpTaG93UGFnaW5hdGlvbl09XCJfaXNQYWdpbmF0aW9uXCJcbiAgW256RnJvbnRQYWdpbmF0aW9uXT1cImZhbHNlXCJcbiAgW256Qm9yZGVyZWRdPVwiYm9yZGVyZWRcIlxuICBbbnpTaXplXT1cInNpemVcIlxuICBbbnpMb2FkaW5nXT1cIm5vQ29sdW1ucyB8fCBfbG9hZGluZ1wiXG4gIFtuekxvYWRpbmdEZWxheV09XCJsb2FkaW5nRGVsYXlcIlxuICBbbnpMb2FkaW5nSW5kaWNhdG9yXT1cImxvYWRpbmdJbmRpY2F0b3JcIlxuICBbbnpUaXRsZV09XCJoZWFkZXIhXCJcbiAgW256Rm9vdGVyXT1cImZvb3RlciFcIlxuICBbbnpTY3JvbGxdPVwic2Nyb2xsXCJcbiAgW256VmlydHVhbEl0ZW1TaXplXT1cInZpcnR1YWxJdGVtU2l6ZVwiXG4gIFtuelZpcnR1YWxNYXhCdWZmZXJQeF09XCJ2aXJ0dWFsTWF4QnVmZmVyUHhcIlxuICBbbnpWaXJ0dWFsTWluQnVmZmVyUHhdPVwidmlydHVhbE1pbkJ1ZmZlclB4XCJcbiAgW256VmlydHVhbEZvclRyYWNrQnldPVwidmlydHVhbEZvclRyYWNrQnlcIlxuICBbbnpOb1Jlc3VsdF09XCJub1Jlc3VsdCFcIlxuICBbbnpQYWdlU2l6ZU9wdGlvbnNdPVwicGFnZS5wYWdlU2l6ZXMhXCJcbiAgW256U2hvd1F1aWNrSnVtcGVyXT1cInBhZ2Uuc2hvd1F1aWNrSnVtcGVyXCJcbiAgW256U2hvd1NpemVDaGFuZ2VyXT1cInBhZ2Uuc2hvd1NpemVcIlxuICBbbnpQYWdpbmF0aW9uUG9zaXRpb25dPVwicGFnZS5wb3NpdGlvbiFcIlxuICBbbnpQYWdpbmF0aW9uVHlwZV09XCJwYWdlLnR5cGUhXCJcbiAgW256SXRlbVJlbmRlcl09XCJwYWdlLml0ZW1SZW5kZXIhXCJcbiAgW256U2ltcGxlXT1cInBhZ2Uuc2ltcGxlXCJcbiAgW256U2hvd1RvdGFsXT1cInRvdGFsVHBsXCJcbiAgW256V2lkdGhDb25maWddPVwiX3dpZHRoQ29uZmlnXCJcbiAgKGNvbnRleHRtZW51KT1cIm9uQ29udGV4dG1lbnUoJGV2ZW50KVwiXG4gIFtjbGFzcy5zdF9fbm8tY29sdW1uXT1cIm5vQ29sdW1uc1wiXG4+XG4gIEBpZiAoc2hvd0hlYWRlcikge1xuICAgIDx0aGVhZD5cbiAgICAgIEBmb3IgKHJvdyBvZiBfaGVhZGVyczsgdHJhY2sgcm93KSB7XG4gICAgICAgIDx0cj5cbiAgICAgICAgICBAaWYgKCRmaXJzdCAmJiBleHBhbmQpIHtcbiAgICAgICAgICAgIDx0aCBueldpZHRoPVwiNTBweFwiIFtyb3dTcGFuXT1cIl9oZWFkZXJzLmxlbmd0aFwiPjwvdGg+XG4gICAgICAgICAgfVxuICAgICAgICAgIEBmb3IgKGggb2Ygcm93OyB0cmFjayBoOyBsZXQgaW5kZXggPSAkaW5kZXg7IGxldCBsYXN0ID0gJGxhc3QpIHtcbiAgICAgICAgICAgIDx0aFxuICAgICAgICAgICAgICAqbGV0PVwiaC5jb2x1bW4gYXMgX2NcIlxuICAgICAgICAgICAgICBbY29sU3Bhbl09XCJoLmNvbFNwYW5cIlxuICAgICAgICAgICAgICBbcm93U3Bhbl09XCJoLnJvd1NwYW5cIlxuICAgICAgICAgICAgICBbbnpXaWR0aF09XCIkYW55KF9jKS53aWR0aFwiXG4gICAgICAgICAgICAgIFtuekxlZnRdPVwiX2MuX2xlZnQhXCJcbiAgICAgICAgICAgICAgW256UmlnaHRdPVwiX2MuX3JpZ2h0IVwiXG4gICAgICAgICAgICAgIFtuZ0NsYXNzXT1cIl9jLl9jbGFzc05hbWVcIlxuICAgICAgICAgICAgICBbYXR0ci5kYXRhLWNvbF09XCJfYy5pbmRleEtleVwiXG4gICAgICAgICAgICAgIFthdHRyLmRhdGEtY29sLWluZGV4XT1cImluZGV4XCJcbiAgICAgICAgICAgICAgW256U2hvd1NvcnRdPVwiX2MuX3NvcnQuZW5hYmxlZFwiXG4gICAgICAgICAgICAgIFtuelNvcnRPcmRlcl09XCIkYW55KF9jKS5fc29ydC5kZWZhdWx0XCJcbiAgICAgICAgICAgICAgKG56U29ydE9yZGVyQ2hhbmdlKT1cInNvcnQoX2MsICRldmVudClcIlxuICAgICAgICAgICAgICBbbnpDdXN0b21GaWx0ZXJdPVwiISFfYy5maWx0ZXJcIlxuICAgICAgICAgICAgICBbY2xhc3Muc3RfX2hhcy1maWx0ZXJdPVwiX2MuZmlsdGVyXCJcbiAgICAgICAgICAgICAgbnotcmVzaXphYmxlXG4gICAgICAgICAgICAgIFtuekRpc2FibGVkXT1cImxhc3QgfHwgJGFueShfYykucmVzaXphYmxlLmRpc2FibGVkXCJcbiAgICAgICAgICAgICAgW256TWF4V2lkdGhdPVwiJGFueShfYykucmVzaXphYmxlLm1heFdpZHRoXCJcbiAgICAgICAgICAgICAgW256TWluV2lkdGhdPVwiJGFueShfYykucmVzaXphYmxlLm1pbldpZHRoXCJcbiAgICAgICAgICAgICAgW256Qm91bmRzXT1cIiRhbnkoX2MpLnJlc2l6YWJsZS5ib3VuZHNcIlxuICAgICAgICAgICAgICBbbnpQcmV2aWV3XT1cIiRhbnkoX2MpLnJlc2l6YWJsZS5wcmV2aWV3XCJcbiAgICAgICAgICAgICAgKG56UmVzaXplRW5kKT1cImNvbFJlc2l6ZSgkZXZlbnQsIF9jKVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEBpZiAoJGFueSghbGFzdCAmJiAhJGFueShfYykucmVzaXphYmxlLmRpc2FibGVkKSkge1xuICAgICAgICAgICAgICAgIDxuei1yZXNpemUtaGFuZGxlIG56RGlyZWN0aW9uPVwicmlnaHRcIiAoY2xpY2spPVwiX3N0b3BQcm9wYWdhdGlvbigkZXZlbnQpXCI+XG4gICAgICAgICAgICAgICAgICA8aT48L2k+XG4gICAgICAgICAgICAgICAgPC9uei1yZXNpemUtaGFuZGxlPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIEBpZiAoX2MuX19yZW5kZXJUaXRsZSkge1xuICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwiX2MuX19yZW5kZXJUaXRsZSFcIlxuICAgICAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBoLmNvbHVtbiwgaW5kZXg6IGluZGV4IH1cIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIH0gQGVsc2Uge1xuICAgICAgICAgICAgICAgIEBzd2l0Y2ggKF9jLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgIEBjYXNlICgnY2hlY2tib3gnKSB7XG4gICAgICAgICAgICAgICAgICAgIEBpZiAoX2Muc2VsZWN0aW9ucyEubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNoa0FsbFRwbFwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogZmFsc2UgfVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIH0gQGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtdGFibGUtc2VsZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiY2hrQWxsVHBsXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiB0cnVlIH1cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgQGlmIChfYy5zZWxlY3Rpb25zIS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFudC10YWJsZS1zZWxlY3Rpb24tZXh0cmFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuei1kcm9wZG93blxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnpQbGFjZW1lbnQ9XCJib3R0b21MZWZ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuekRyb3Bkb3duTWVudV09XCJzZWxlY3Rpb25NZW51XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYW50LXRhYmxlLXNlbGVjdGlvbi1kb3duIHN0X19jaGVja2FsbC1zZWxlY3Rpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIG56LWljb24gbnpUeXBlPVwiZG93blwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8bnotZHJvcGRvd24tbWVudSAjc2VsZWN0aW9uTWVudT1cIm56RHJvcGRvd25NZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBuei1tZW51IGNsYXNzPVwiYW50LXRhYmxlLXNlbGVjdGlvbi1tZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGZvciAocncgb2YgX2Muc2VsZWN0aW9uczsgdHJhY2sgJGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgbnotbWVudS1pdGVtIChjbGljayk9XCJfcm93U2VsZWN0aW9uKHJ3KVwiIFtpbm5lckhUTUxdPVwicncudGV4dFwiPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uei1kcm9wZG93bi1tZW51PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBAZGVmYXVsdCB7XG4gICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJ0aXRsZVRwbFwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogX2MudGl0bGUgfVwiIC8+XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIEBpZiAoX2MuZmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgPHN0LWZpbHRlclxuICAgICAgICAgICAgICAgICAgbnotdGgtZXh0cmFcbiAgICAgICAgICAgICAgICAgIFtjb2xdPVwiaC5jb2x1bW5cIlxuICAgICAgICAgICAgICAgICAgW2ZdPVwiX2MuZmlsdGVyXCJcbiAgICAgICAgICAgICAgICAgIFtsb2NhbGVdPVwibG9jYWxlXCJcbiAgICAgICAgICAgICAgICAgIChuKT1cImhhbmRsZUZpbHRlck5vdGlmeSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgIChoYW5kbGUpPVwiX2hhbmRsZUZpbHRlcihfYywgJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICB9XG4gICAgICAgIDwvdHI+XG4gICAgICB9XG4gICAgPC90aGVhZD5cbiAgfVxuICA8dGJvZHkgY2xhc3M9XCJzdF9fYm9keVwiPlxuICAgIEBpZiAoIV9sb2FkaW5nKSB7XG4gICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYm9keUhlYWRlciFcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IF9zdGF0aXN0aWNhbCB9XCIgLz5cbiAgICB9XG4gICAgPG5nLXRlbXBsYXRlICNib2R5VHBsIGxldC1pIGxldC1pbmRleD1cImluZGV4XCI+XG4gICAgICA8dHJcbiAgICAgICAgW2F0dHIuZGF0YS1pbmRleF09XCJpbmRleFwiXG4gICAgICAgIChjbGljayk9XCJfcm93Q2xpY2soJGV2ZW50LCBpLCBpbmRleCwgZmFsc2UpXCJcbiAgICAgICAgKGRibGNsaWNrKT1cIl9yb3dDbGljaygkZXZlbnQsIGksIGluZGV4LCB0cnVlKVwiXG4gICAgICAgIFtuZ0NsYXNzXT1cImkuX3Jvd0NsYXNzTmFtZVwiXG4gICAgICA+XG4gICAgICAgIEBpZiAoZXhwYW5kKSB7XG4gICAgICAgICAgPHRkXG4gICAgICAgICAgICBbbnpTaG93RXhwYW5kXT1cImV4cGFuZCAmJiBpLnNob3dFeHBhbmQgIT09IGZhbHNlXCJcbiAgICAgICAgICAgIFtuekV4cGFuZF09XCJpLmV4cGFuZFwiXG4gICAgICAgICAgICAobnpFeHBhbmRDaGFuZ2UpPVwiX2V4cGFuZENoYW5nZShpLCAkZXZlbnQpXCJcbiAgICAgICAgICAgIChjbGljayk9XCJfc3RvcFByb3BhZ2F0aW9uKCRldmVudClcIlxuICAgICAgICAgICAgbnpXaWR0aD1cIjUwcHhcIlxuICAgICAgICAgID48L3RkPlxuICAgICAgICB9XG4gICAgICAgIEBmb3IgKGMgb2YgX2NvbHVtbnM7IHRyYWNrIGNJZHg7IGxldCBjSWR4ID0gJGluZGV4KSB7XG4gICAgICAgICAgQGlmIChpLl92YWx1ZXNbY0lkeF0ucHJvcHM/LmNvbFNwYW4gPiAwICYmIGkuX3ZhbHVlc1tjSWR4XS5wcm9wcz8ucm93U3BhbiA+IDApIHtcbiAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICBbbnpMZWZ0XT1cIiEhYy5fbGVmdFwiXG4gICAgICAgICAgICAgIFtuelJpZ2h0XT1cIiEhYy5fcmlnaHRcIlxuICAgICAgICAgICAgICBbYXR0ci5kYXRhLWNvbC1pbmRleF09XCJjSWR4XCJcbiAgICAgICAgICAgICAgW25nQ2xhc3NdPVwiYy5fY2xhc3NOYW1lXCJcbiAgICAgICAgICAgICAgW2F0dHIuY29sc3Bhbl09XCJpLl92YWx1ZXNbY0lkeF0ucHJvcHM/LmNvbFNwYW4gPT09IDEgPyBudWxsIDogaS5fdmFsdWVzW2NJZHhdLnByb3BzPy5jb2xTcGFuXCJcbiAgICAgICAgICAgICAgW2F0dHIucm93c3Bhbl09XCJpLl92YWx1ZXNbY0lkeF0ucHJvcHM/LnJvd1NwYW4gPT09IDEgPyBudWxsIDogaS5fdmFsdWVzW2NJZHhdLnByb3BzPy5yb3dTcGFuXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQGlmIChyZXNwb25zaXZlKSB7XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJhbnQtdGFibGUtcmVwX190aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRpdGxlVHBsXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBjLnRpdGxlIH1cIiAvPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8c3QtdGQgW2RhdGFdPVwiX2RhdGFcIiBbaV09XCJpXCIgW2luZGV4XT1cImluZGV4XCIgW2NdPVwiY1wiIFtjSWR4XT1cImNJZHhcIiAobik9XCJfaGFuZGxlVGQoJGV2ZW50KVwiIC8+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgPC90cj5cbiAgICAgIDx0ciBbbnpFeHBhbmRdPVwiaS5leHBhbmRcIj5cbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImV4cGFuZFwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogaSwgaW5kZXg6IGluZGV4IH1cIiAvPlxuICAgICAgPC90cj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIEBpZiAodmlydHVhbFNjcm9sbCkge1xuICAgICAgPG5nLXRlbXBsYXRlIG56LXZpcnR1YWwtc2Nyb2xsIGxldC1pIGxldC1pbmRleD1cImluZGV4XCI+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJib2R5VHBsXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBpLCBpbmRleDogaW5kZXggfVwiIC8+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgIH0gQGVsc2Uge1xuICAgICAgQGZvciAoaSBvZiBfZGF0YTsgdHJhY2sgdHJhY2tCeSgkaW5kZXgsIGkpKSB7XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJib2R5VHBsXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBpLCBpbmRleDogJGluZGV4IH1cIiAvPlxuICAgICAgfVxuICAgIH1cbiAgICBAaWYgKCFfbG9hZGluZykge1xuICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImJvZHkhXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBfc3RhdGlzdGljYWwgfVwiIC8+XG4gICAgfVxuICA8L3Rib2R5PlxuICA8bmctdGVtcGxhdGUgI3RvdGFsVHBsIGxldC1yYW5nZT1cInJhbmdlXCIgbGV0LXRvdGFsPnt7IHJlbmRlclRvdGFsKHRvdGFsLCByYW5nZSkgfX08L25nLXRlbXBsYXRlPlxuPC9uei10YWJsZT5cbjxuei1kcm9wZG93bi1tZW51ICNjb250ZXh0bWVudVRwbD1cIm56RHJvcGRvd25NZW51XCI+XG4gIDx1bCBuei1tZW51IGNsYXNzPVwic3RfX2NvbnRleHRtZW51XCI+XG4gICAgQGZvciAoaSBvZiBjb250ZXh0bWVudUxpc3Q7IHRyYWNrICRpbmRleCkge1xuICAgICAgQGlmIChpLmNoaWxkcmVuIS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgPGxpIG56LW1lbnUtaXRlbSAoY2xpY2spPVwiaS5mbiEoaSlcIiBbaW5uZXJIVE1MXT1cImkudGV4dFwiPjwvbGk+XG4gICAgICB9IEBlbHNlIHtcbiAgICAgICAgPGxpIG56LXN1Ym1lbnUgW256VGl0bGVdPVwiaS50ZXh0XCI+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgQGZvciAoY2kgb2YgaS5jaGlsZHJlbjsgdHJhY2sgJGluZGV4KSB7XG4gICAgICAgICAgICAgIDxsaSBuei1tZW51LWl0ZW0gKGNsaWNrKT1cImNpLmZuIShjaSlcIiBbaW5uZXJIVE1MXT1cImNpLnRleHRcIj48L2xpPlxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbGk+XG4gICAgICB9XG4gICAgfVxuICA8L3VsPlxuPC9uei1kcm9wZG93bi1tZW51PlxuIiwiPG5nLXRlbXBsYXRlICNidG5UcGwgbGV0LWkgbGV0LWNoaWxkPVwiY2hpbGRcIj5cbiAgQGlmIChpLnRvb2x0aXApIHtcbiAgICA8c3BhbiBuei10b29sdGlwIFtuelRvb2x0aXBUaXRsZV09XCJpLnRvb2x0aXBcIiBbY2xhc3MuZC1ibG9ja109XCJjaGlsZFwiIFtjbGFzcy53aWR0aC0xMDBdPVwiY2hpbGRcIj5cbiAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJidG5JdGVtVHBsXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBpIH1cIiAvPlxuICAgIDwvc3Bhbj5cbiAgfSBAZWxzZSB7XG4gICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImJ0bkl0ZW1UcGxcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IGkgfVwiIC8+XG4gIH1cbjwvbmctdGVtcGxhdGU+XG48bmctdGVtcGxhdGUgI2J0bkl0ZW1UcGwgbGV0LWk+XG4gIEBpZiAoaS5wb3ApIHtcbiAgICA8YVxuICAgICAgbnotcG9wY29uZmlybVxuICAgICAgW256UG9wY29uZmlybVRpdGxlXT1cImkucG9wLnRpdGxlXCJcbiAgICAgIFtuekljb25dPVwiaS5wb3AuaWNvblwiXG4gICAgICBbbnpDb25kaXRpb25dPVwiaS5wb3AuY29uZGl0aW9uKGkpXCJcbiAgICAgIFtuekNhbmNlbFRleHRdPVwiaS5wb3AuY2FuY2VsVGV4dFwiXG4gICAgICBbbnpPa1RleHRdPVwiaS5wb3Aub2tUZXh0XCJcbiAgICAgIFtuek9rVHlwZV09XCJpLnBvcC5va1R5cGVcIlxuICAgICAgKG56T25Db25maXJtKT1cIl9idG4oaSlcIlxuICAgICAgY2xhc3M9XCJzdF9fYnRuLXRleHRcIlxuICAgICAgW25nQ2xhc3NdPVwiaS5fY2xhc3NOYW1lXCJcbiAgICAgIChjbGljayk9XCJfc3RvcFByb3BhZ2F0aW9uKCRldmVudClcIlxuICAgID5cbiAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJidG5UZXh0VHBsXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBpIH1cIiAvPlxuICAgIDwvYT5cbiAgfSBAZWxzZSB7XG4gICAgPGEgKGNsaWNrKT1cIl9idG4oaSwgJGV2ZW50KVwiIGNsYXNzPVwic3RfX2J0bi10ZXh0XCIgW25nQ2xhc3NdPVwiaS5fY2xhc3NOYW1lXCI+XG4gICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYnRuVGV4dFRwbFwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogaSB9XCIgLz5cbiAgICA8L2E+XG4gIH1cbjwvbmctdGVtcGxhdGU+XG48bmctdGVtcGxhdGUgI2J0blRleHRUcGwgbGV0LWk+XG4gIEBpZiAoaS5faWNvbikge1xuICAgIEBpZiAoaS5faWNvbi5pY29uZm9udCkge1xuICAgICAgPGkgbnotaWNvbiBbbnpJY29uZm9udF09XCJpLl9pY29uLmljb25mb250XCI+PC9pPlxuICAgIH0gQGVsc2Uge1xuICAgICAgPGlcbiAgICAgICAgbnotaWNvblxuICAgICAgICBbbnpUeXBlXT1cImkuX2ljb24udHlwZVwiXG4gICAgICAgIFtuelRoZW1lXT1cImkuX2ljb24udGhlbWVcIlxuICAgICAgICBbbnpTcGluXT1cImkuX2ljb24uc3BpblwiXG4gICAgICAgIFtuelR3b3RvbmVDb2xvcl09XCJpLl9pY29uLnR3b1RvbmVDb2xvclwiXG4gICAgICA+PC9pPlxuICAgIH1cbiAgfVxuICA8c3BhbiBbaW5uZXJIVE1MXT1cImkuX3RleHRcIiBbbmdDbGFzc109XCJ7ICdwbC14cyc6IGkuX2ljb24gfVwiPjwvc3Bhbj5cbjwvbmctdGVtcGxhdGU+XG5AaWYgKGMuX19yZW5kZXIpIHtcbiAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImMuX19yZW5kZXIhXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBpLCBpbmRleDogaW5kZXgsIGNvbHVtbjogYyB9XCIgLz5cbn0gQGVsc2Uge1xuICBAc3dpdGNoIChjLnR5cGUpIHtcbiAgICBAY2FzZSAoJ2NoZWNrYm94Jykge1xuICAgICAgPGxhYmVsIG56LWNoZWNrYm94IFtuekRpc2FibGVkXT1cImkuZGlzYWJsZWRcIiBbbmdNb2RlbF09XCJpLmNoZWNrZWRcIiAobmdNb2RlbENoYW5nZSk9XCJfY2hlY2tib3goJGV2ZW50KVwiPjwvbGFiZWw+XG4gICAgfVxuICAgIEBjYXNlICgncmFkaW8nKSB7XG4gICAgICA8bGFiZWwgbnotcmFkaW8gW256RGlzYWJsZWRdPVwiaS5kaXNhYmxlZFwiIFtuZ01vZGVsXT1cImkuY2hlY2tlZFwiIChuZ01vZGVsQ2hhbmdlKT1cIl9yYWRpbygpXCI+PC9sYWJlbD5cbiAgICB9XG4gICAgQGNhc2UgKCdsaW5rJykge1xuICAgICAgPGEgKGNsaWNrKT1cIl9saW5rKCRldmVudClcIiBbaW5uZXJIVE1MXT1cImkuX3ZhbHVlc1tjSWR4XS5fdGV4dFwiIFthdHRyLnRpdGxlXT1cImkuX3ZhbHVlc1tjSWR4XS50ZXh0XCI+PC9hPlxuICAgIH1cbiAgICBAY2FzZSAoJ3RhZycpIHtcbiAgICAgIDxuei10YWcgW256Q29sb3JdPVwiaS5fdmFsdWVzW2NJZHhdLmNvbG9yXCIgW256LXRvb2x0aXBdPVwiaS5fdmFsdWVzW2NJZHhdLnRvb2x0aXBcIj5cbiAgICAgICAgPHNwYW4gW2lubmVySFRNTF09XCJpLl92YWx1ZXNbY0lkeF0uX3RleHRcIj48L3NwYW4+XG4gICAgICA8L256LXRhZz5cbiAgICB9XG4gICAgQGNhc2UgKCdiYWRnZScpIHtcbiAgICAgIDxuei1iYWRnZVxuICAgICAgICBbbnpTdGF0dXNdPVwiaS5fdmFsdWVzW2NJZHhdLmNvbG9yXCJcbiAgICAgICAgW256VGV4dF09XCJpLl92YWx1ZXNbY0lkeF0udGV4dFwiXG4gICAgICAgIFtuei10b29sdGlwXT1cImkuX3ZhbHVlc1tjSWR4XS50b29sdGlwXCJcbiAgICAgIC8+XG4gICAgfVxuICAgIEBjYXNlICgnY2VsbCcpIHtcbiAgICAgIDxjZWxsIFt2YWx1ZV09XCJpLl92YWx1ZXNbY0lkeF0udGV4dFwiIFtvcHRpb25zXT1cImkuX3ZhbHVlc1tjSWR4XS5jZWxsID8/IGMuY2VsbFwiIC8+XG4gICAgfVxuICAgIEBjYXNlICgnd2lkZ2V0Jykge1xuICAgICAgPG5nLXRlbXBsYXRlIHN0LXdpZGdldC1ob3N0IFtyZWNvcmRdPVwiaVwiIFtjb2x1bW5dPVwiY1wiIC8+XG4gICAgfVxuICAgIEBkZWZhdWx0IHtcbiAgICAgIEBpZiAoYy5zYWZlVHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICAgIDxzcGFuIFtpbm5lclRleHRdPVwiaS5fdmFsdWVzW2NJZHhdLl90ZXh0XCIgW2F0dHIudGl0bGVdPVwiYy5faXNUcnVuY2F0ZSA/IGkuX3ZhbHVlc1tjSWR4XS50ZXh0IDogbnVsbFwiPjwvc3Bhbj5cbiAgICAgIH0gQGVsc2Uge1xuICAgICAgICA8c3BhbiBbaW5uZXJIVE1MXT1cImkuX3ZhbHVlc1tjSWR4XS5fdGV4dFwiIFthdHRyLnRpdGxlXT1cImMuX2lzVHJ1bmNhdGUgPyBpLl92YWx1ZXNbY0lkeF0udGV4dCA6IG51bGxcIj48L3NwYW4+XG4gICAgICB9XG4gICAgfVxuICB9XG4gIEBmb3IgKGJ0biBvZiBpLl92YWx1ZXNbY0lkeF0uYnV0dG9uczsgdHJhY2sgJGluZGV4KSB7XG4gICAgQGlmIChidG4uY2hpbGRyZW4hLmxlbmd0aCA+IDApIHtcbiAgICAgIDxhIG56LWRyb3Bkb3duIFtuekRyb3Bkb3duTWVudV09XCJidG5NZW51XCIgbnpPdmVybGF5Q2xhc3NOYW1lPVwic3RfX2J0bi1zdWJcIj5cbiAgICAgICAgPHNwYW4gW2lubmVySFRNTF09XCJidG4uX3RleHRcIj48L3NwYW4+XG4gICAgICAgIDxpIG56LWljb24gbnpUeXBlPVwiZG93blwiPjwvaT5cbiAgICAgIDwvYT5cbiAgICAgIDxuei1kcm9wZG93bi1tZW51ICNidG5NZW51PVwibnpEcm9wZG93bk1lbnVcIj5cbiAgICAgICAgPHVsIG56LW1lbnU+XG4gICAgICAgICAgQGZvciAoc3ViQnRuIG9mIGJ0bi5jaGlsZHJlbjsgdHJhY2sgJGluZGV4KSB7XG4gICAgICAgICAgICBAaWYgKHN1YkJ0bi50eXBlID09PSAnZGl2aWRlcicpIHtcbiAgICAgICAgICAgICAgPGxpIG56LW1lbnUtZGl2aWRlcj48L2xpPlxuICAgICAgICAgICAgfSBAZWxzZSB7XG4gICAgICAgICAgICAgIDxsaSBuei1tZW51LWl0ZW0gW2NsYXNzLnN0X19idG4tZGlzYWJsZWRdPVwic3ViQnRuLl9kaXNhYmxlZFwiPlxuICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwiYnRuVHBsXCJcbiAgICAgICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogc3ViQnRuLCBjaGlsZDogdHJ1ZSB9XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbnotZHJvcGRvd24tbWVudT5cbiAgICB9IEBlbHNlIHtcbiAgICAgIDxzcGFuIFtjbGFzcy5zdF9fYnRuLWRpc2FibGVkXT1cImJ0bi5fZGlzYWJsZWRcIj5cbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImJ0blRwbFwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogYnRuLCBjaGlsZDogZmFsc2UgfVwiIC8+XG4gICAgICA8L3NwYW4+XG4gICAgfVxuICAgIEBpZiAoISRsYXN0KSB7XG4gICAgICA8bnotZGl2aWRlciBuelR5cGU9XCJ2ZXJ0aWNhbFwiIC8+XG4gICAgfVxuICB9XG59XG4iXX0=