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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: STComponent, deps: [{ token: i1.AlainConfigService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.1.0", type: STComponent, selector: "st", inputs: { req: "req", res: "res", page: "page", data: "data", columns: "columns", contextmenu: "contextmenu", ps: ["ps", "ps", numberAttribute], pi: ["pi", "pi", numberAttribute], total: ["total", "total", numberAttribute], loading: "loading", loadingDelay: ["loadingDelay", "loadingDelay", numberAttribute], loadingIndicator: "loadingIndicator", bordered: ["bordered", "bordered", booleanAttribute], size: "size", scroll: "scroll", singleSort: "singleSort", multiSort: "multiSort", rowClassName: "rowClassName", clickRowClassName: "clickRowClassName", widthMode: "widthMode", widthConfig: "widthConfig", resizable: "resizable", header: "header", showHeader: ["showHeader", "showHeader", booleanAttribute], footer: "footer", bodyHeader: "bodyHeader", body: "body", expandRowByClick: ["expandRowByClick", "expandRowByClick", booleanAttribute], expandAccordion: ["expandAccordion", "expandAccordion", booleanAttribute], expand: "expand", noResult: "noResult", responsive: ["responsive", "responsive", booleanAttribute], responsiveHideHeaderFooter: ["responsiveHideHeaderFooter", "responsiveHideHeaderFooter", booleanAttribute], virtualScroll: ["virtualScroll", "virtualScroll", booleanAttribute], virtualItemSize: ["virtualItemSize", "virtualItemSize", numberAttribute], virtualMaxBufferPx: ["virtualMaxBufferPx", "virtualMaxBufferPx", numberAttribute], virtualMinBufferPx: ["virtualMinBufferPx", "virtualMinBufferPx", numberAttribute], customRequest: "customRequest", virtualForTrackBy: "virtualForTrackBy" }, outputs: { error: "error", change: "change" }, host: { properties: { "class.st": "true", "class.st__p-left": "page.placement === 'left'", "class.st__p-center": "page.placement === 'center'", "class.st__width-strict": "widthMode.type === 'strict'", "class.st__row-class": "rowClassName", "class.ant-table-rep": "responsive", "class.ant-table-rep__hide-header-footer": "responsiveHideHeaderFooter" } }, providers: [STDataSource, STRowSource, STColumnSource, STExport, DatePipe, YNPipe, DecimalPipe], viewQueries: [{ propertyName: "orgTable", first: true, predicate: ["table"], descendants: true }, { propertyName: "contextmenuTpl", first: true, predicate: ["contextmenuTpl"], descendants: true }], exportAs: ["st"], usesOnChanges: true, ngImport: i0, template: "<ng-template #titleTpl let-i>\n  <span [innerHTML]=\"i._text\"></span>\n  @if (i.optional) {\n    <small class=\"st__head-optional\" [innerHTML]=\"i.optional\"></small>\n  }\n  @if (i.optionalHelp) {\n    <i class=\"st__head-tip\" nz-tooltip [nzTooltipTitle]=\"i.optionalHelp\" nz-icon nzType=\"question-circle\"></i>\n  }\n</ng-template>\n<ng-template #chkAllTpl let-custom>\n  <label\n    nz-checkbox\n    class=\"st__checkall\"\n    [nzDisabled]=\"_allCheckedDisabled\"\n    [(ngModel)]=\"_allChecked\"\n    [nzIndeterminate]=\"_indeterminate\"\n    (ngModelChange)=\"checkAll()\"\n    [class.ant-table-selection-select-all-custom]=\"custom\"\n  ></label>\n</ng-template>\n<nz-table\n  #table\n  [nzData]=\"_data\"\n  [(nzPageIndex)]=\"pi\"\n  (nzPageIndexChange)=\"_change('pi')\"\n  [(nzPageSize)]=\"ps\"\n  (nzPageSizeChange)=\"_change('ps')\"\n  [nzTotal]=\"total\"\n  [nzShowPagination]=\"_isPagination\"\n  [nzFrontPagination]=\"false\"\n  [nzBordered]=\"bordered\"\n  [nzSize]=\"size\"\n  [nzLoading]=\"noColumns || _loading\"\n  [nzLoadingDelay]=\"loadingDelay\"\n  [nzLoadingIndicator]=\"loadingIndicator\"\n  [nzTitle]=\"header!\"\n  [nzFooter]=\"footer!\"\n  [nzScroll]=\"scroll\"\n  [nzVirtualItemSize]=\"virtualItemSize\"\n  [nzVirtualMaxBufferPx]=\"virtualMaxBufferPx\"\n  [nzVirtualMinBufferPx]=\"virtualMinBufferPx\"\n  [nzVirtualForTrackBy]=\"virtualForTrackBy\"\n  [nzNoResult]=\"noResult!\"\n  [nzPageSizeOptions]=\"page.pageSizes!\"\n  [nzShowQuickJumper]=\"page.showQuickJumper\"\n  [nzShowSizeChanger]=\"page.showSize\"\n  [nzPaginationPosition]=\"page.position!\"\n  [nzPaginationType]=\"page.type!\"\n  [nzItemRender]=\"page.itemRender!\"\n  [nzSimple]=\"page.simple\"\n  [nzShowTotal]=\"totalTpl\"\n  [nzWidthConfig]=\"_widthConfig\"\n  (contextmenu)=\"onContextmenu($event)\"\n  [class.st__no-column]=\"noColumns\"\n>\n  @if (showHeader) {\n    <thead>\n      @for (row of _headers; track $index) {\n        <tr>\n          @if ($first && expand) {\n            <th nzWidth=\"50px\" [rowSpan]=\"_headers.length\"></th>\n          }\n          @for (h of row; track index; let index = $index; let last = $last) {\n            <th\n              *let=\"h.column as _c\"\n              [colSpan]=\"h.colSpan\"\n              [rowSpan]=\"h.rowSpan\"\n              [nzWidth]=\"$any(_c).width\"\n              [nzLeft]=\"_c._left!\"\n              [nzRight]=\"_c._right!\"\n              [ngClass]=\"_c._className\"\n              [attr.data-col]=\"_c.indexKey\"\n              [attr.data-col-index]=\"index\"\n              [nzShowSort]=\"_c._sort.enabled\"\n              [nzSortOrder]=\"$any(_c)._sort.default\"\n              (nzSortOrderChange)=\"sort(_c, index, $event)\"\n              [nzCustomFilter]=\"!!_c.filter\"\n              [class.st__has-filter]=\"_c.filter\"\n              nz-resizable\n              [nzDisabled]=\"last || $any(_c).resizable.disabled\"\n              [nzMaxWidth]=\"$any(_c).resizable.maxWidth\"\n              [nzMinWidth]=\"$any(_c).resizable.minWidth\"\n              [nzBounds]=\"$any(_c).resizable.bounds\"\n              [nzPreview]=\"$any(_c).resizable.preview\"\n              (nzResizeEnd)=\"colResize($event, _c)\"\n            >\n              @if ($any(!last && !$any(_c).resizable.disabled)) {\n                <nz-resize-handle nzDirection=\"right\">\n                  <i></i>\n                </nz-resize-handle>\n              }\n              @if (_c.__renderTitle) {\n                <ng-template\n                  [ngTemplateOutlet]=\"_c.__renderTitle!\"\n                  [ngTemplateOutletContext]=\"{ $implicit: h.column, index: index }\"\n                />\n              } @else {\n                @switch (_c.type) {\n                  @case ('checkbox') {\n                    @if (_c.selections!.length === 0) {\n                      <ng-template [ngTemplateOutlet]=\"chkAllTpl\" [ngTemplateOutletContext]=\"{ $implicit: false }\" />\n                    } @else {\n                      <div class=\"ant-table-selection\">\n                        <ng-template [ngTemplateOutlet]=\"chkAllTpl\" [ngTemplateOutletContext]=\"{ $implicit: true }\" />\n                        @if (_c.selections!.length) {\n                          <div class=\"ant-table-selection-extra\">\n                            <div\n                              nz-dropdown\n                              nzPlacement=\"bottomLeft\"\n                              [nzDropdownMenu]=\"selectionMenu\"\n                              class=\"ant-table-selection-down st__checkall-selection\"\n                            >\n                              <i nz-icon nzType=\"down\"></i>\n                            </div>\n                          </div>\n                        }\n                        <nz-dropdown-menu #selectionMenu=\"nzDropdownMenu\">\n                          <ul nz-menu class=\"ant-table-selection-menu\">\n                            @for (rw of _c.selections; track $index) {\n                              <li nz-menu-item (click)=\"_rowSelection(rw)\" [innerHTML]=\"rw.text\"></li>\n                            }\n                          </ul>\n                        </nz-dropdown-menu>\n                      </div>\n                    }\n                  }\n                  @default {\n                    <ng-template [ngTemplateOutlet]=\"titleTpl\" [ngTemplateOutletContext]=\"{ $implicit: _c.title }\" />\n                  }\n                }\n              }\n              @if (_c.filter) {\n                <st-filter\n                  nz-th-extra\n                  [col]=\"h.column\"\n                  [f]=\"_c.filter\"\n                  [locale]=\"locale\"\n                  (n)=\"handleFilterNotify($event)\"\n                  (handle)=\"_handleFilter(_c, $event)\"\n                />\n              }\n            </th>\n          }\n        </tr>\n      }\n    </thead>\n  }\n  <tbody class=\"st__body\">\n    @if (!_loading) {\n      <ng-template [ngTemplateOutlet]=\"bodyHeader!\" [ngTemplateOutletContext]=\"{ $implicit: _statistical }\" />\n    }\n    <ng-template #bodyTpl let-i let-index=\"index\">\n      <tr\n        [attr.data-index]=\"index\"\n        (click)=\"_rowClick($event, i, index, false)\"\n        (dblclick)=\"_rowClick($event, i, index, true)\"\n        [ngClass]=\"i._rowClassName\"\n      >\n        @if (expand) {\n          <td\n            [nzShowExpand]=\"expand && i.showExpand !== false\"\n            [nzExpand]=\"i.expand\"\n            (nzExpandChange)=\"_expandChange(i, $event)\"\n            (click)=\"_stopPropagation($event)\"\n            nzWidth=\"50px\"\n          ></td>\n        }\n        @for (c of _columns; track cIdx; let cIdx = $index) {\n          @if (i._values[cIdx].props?.colSpan > 0 && i._values[cIdx].props?.rowSpan > 0) {\n            <td\n              [nzLeft]=\"!!c._left\"\n              [nzRight]=\"!!c._right\"\n              [attr.data-col-index]=\"cIdx\"\n              [ngClass]=\"c._className\"\n              [attr.colspan]=\"i._values[cIdx].props?.colSpan === 1 ? null : i._values[cIdx].props?.colSpan\"\n              [attr.rowspan]=\"i._values[cIdx].props?.rowSpan === 1 ? null : i._values[cIdx].props?.rowSpan\"\n            >\n              @if (responsive) {\n                <span class=\"ant-table-rep__title\">\n                  <ng-template [ngTemplateOutlet]=\"titleTpl\" [ngTemplateOutletContext]=\"{ $implicit: c.title }\" />\n                </span>\n              }\n              <st-td [data]=\"_data\" [i]=\"i\" [index]=\"index\" [c]=\"c\" [cIdx]=\"cIdx\" (n)=\"_handleTd($event)\" />\n            </td>\n          }\n        }\n      </tr>\n      <tr [nzExpand]=\"i.expand\">\n        <ng-template [ngTemplateOutlet]=\"expand\" [ngTemplateOutletContext]=\"{ $implicit: i, index: index }\" />\n      </tr>\n    </ng-template>\n    @if (virtualScroll) {\n      <ng-template nz-virtual-scroll let-i let-index=\"index\">\n        <ng-template [ngTemplateOutlet]=\"bodyTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, index: index }\" />\n      </ng-template>\n    } @else {\n      @for (i of _data; track $index) {\n        <ng-template [ngTemplateOutlet]=\"bodyTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, index: $index }\" />\n      }\n    }\n    @if (!_loading) {\n      <ng-template [ngTemplateOutlet]=\"body!\" [ngTemplateOutletContext]=\"{ $implicit: _statistical }\" />\n    }\n  </tbody>\n  <ng-template #totalTpl let-range=\"range\" let-total>{{ renderTotal(total, range) }}</ng-template>\n</nz-table>\n<nz-dropdown-menu #contextmenuTpl=\"nzDropdownMenu\">\n  <ul nz-menu class=\"st__contextmenu\">\n    @for (i of contextmenuList; track $index) {\n      @if (i.children!.length === 0) {\n        <li nz-menu-item (click)=\"i.fn!(i)\" [innerHTML]=\"i.text\"></li>\n      } @else {\n        <li nz-submenu [nzTitle]=\"i.text\">\n          <ul>\n            @for (ci of i.children; track $index) {\n              <li nz-menu-item (click)=\"ci.fn!(ci)\" [innerHTML]=\"ci.text\"></li>\n            }\n          </ul>\n        </li>\n      }\n    }\n  </ul>\n</nz-dropdown-menu>\n", dependencies: [{ kind: "directive", type: i0.forwardRef(() => i2.NgClass), selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i0.forwardRef(() => i2.NgTemplateOutlet), selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i0.forwardRef(() => i3.NgControlStatus), selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i0.forwardRef(() => i3.NgModel), selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i0.forwardRef(() => i4.LetDirective), selector: "[let]", inputs: ["let"] }, { kind: "component", type: i0.forwardRef(() => i5.NzTableComponent), selector: "nz-table", inputs: ["nzTableLayout", "nzShowTotal", "nzItemRender", "nzTitle", "nzFooter", "nzNoResult", "nzPageSizeOptions", "nzVirtualItemSize", "nzVirtualMaxBufferPx", "nzVirtualMinBufferPx", "nzVirtualForTrackBy", "nzLoadingDelay", "nzPageIndex", "nzPageSize", "nzTotal", "nzWidthConfig", "nzData", "nzCustomColumn", "nzPaginationPosition", "nzScroll", "nzPaginationType", "nzFrontPagination", "nzTemplateMode", "nzShowPagination", "nzLoading", "nzOuterBordered", "nzLoadingIndicator", "nzBordered", "nzSize", "nzShowSizeChanger", "nzHideOnSinglePage", "nzShowQuickJumper", "nzSimple"], outputs: ["nzPageSizeChange", "nzPageIndexChange", "nzQueryParams", "nzCurrentPageDataChange", "nzCustomColumnChange"], exportAs: ["nzTable"] }, { kind: "component", type: i0.forwardRef(() => i5.NzThAddOnComponent), selector: "th[nzColumnKey], th[nzSortFn], th[nzSortOrder], th[nzFilters], th[nzShowSort], th[nzShowFilter], th[nzCustomFilter]", inputs: ["nzColumnKey", "nzFilterMultiple", "nzSortOrder", "nzSortPriority", "nzSortDirections", "nzFilters", "nzSortFn", "nzFilterFn", "nzShowSort", "nzShowFilter", "nzCustomFilter"], outputs: ["nzCheckedChange", "nzSortOrderChange", "nzFilterChange"] }, { kind: "directive", type: i0.forwardRef(() => i5.NzTableCellDirective), selector: "th:not(.nz-disable-th):not([mat-cell]), td:not(.nz-disable-td):not([mat-cell])" }, { kind: "directive", type: i0.forwardRef(() => i5.NzThMeasureDirective), selector: "th", inputs: ["nzWidth", "colspan", "colSpan", "rowspan", "rowSpan"] }, { kind: "component", type: i0.forwardRef(() => i5.NzTdAddOnComponent), selector: "td[nzChecked], td[nzDisabled], td[nzIndeterminate], td[nzIndentSize], td[nzExpand], td[nzShowExpand], td[nzShowCheckbox]", inputs: ["nzChecked", "nzDisabled", "nzIndeterminate", "nzLabel", "nzIndentSize", "nzShowExpand", "nzShowCheckbox", "nzExpand", "nzExpandIcon"], outputs: ["nzCheckedChange", "nzExpandChange"] }, { kind: "component", type: i0.forwardRef(() => i5.NzTheadComponent), selector: "thead:not(.ant-table-thead)", outputs: ["nzSortOrderChange"] }, { kind: "component", type: i0.forwardRef(() => i5.NzTbodyComponent), selector: "tbody" }, { kind: "directive", type: i0.forwardRef(() => i5.NzTrDirective), selector: "tr:not([mat-row]):not([mat-header-row]):not([nz-table-measure-row]):not([nzExpand]):not([nz-table-fixed-row])" }, { kind: "directive", type: i0.forwardRef(() => i5.NzTableVirtualScrollDirective), selector: "[nz-virtual-scroll]", exportAs: ["nzVirtualScroll"] }, { kind: "directive", type: i0.forwardRef(() => i5.NzCellFixedDirective), selector: "td[nzRight],th[nzRight],td[nzLeft],th[nzLeft]", inputs: ["nzRight", "nzLeft", "colspan", "colSpan"] }, { kind: "directive", type: i0.forwardRef(() => i5.NzTrExpandDirective), selector: "tr[nzExpand]", inputs: ["nzExpand"] }, { kind: "component", type: i0.forwardRef(() => i5.NzTableFixedRowComponent), selector: "tr[nz-table-fixed-row], tr[nzExpand]" }, { kind: "directive", type: i0.forwardRef(() => i6.NzIconDirective), selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "component", type: i0.forwardRef(() => i7.NzCheckboxComponent), selector: "[nz-checkbox]", inputs: ["nzValue", "nzAutoFocus", "nzDisabled", "nzIndeterminate", "nzChecked", "nzId"], outputs: ["nzCheckedChange"], exportAs: ["nzCheckbox"] }, { kind: "directive", type: i0.forwardRef(() => i8.NzMenuDirective), selector: "[nz-menu]", inputs: ["nzInlineIndent", "nzTheme", "nzMode", "nzInlineCollapsed", "nzSelectable"], outputs: ["nzClick"], exportAs: ["nzMenu"] }, { kind: "component", type: i0.forwardRef(() => i8.NzMenuItemComponent), selector: "[nz-menu-item]", inputs: ["nzPaddingLeft", "nzDisabled", "nzSelected", "nzDanger", "nzMatchRouterExact", "nzMatchRouter"], exportAs: ["nzMenuItem"] }, { kind: "component", type: i0.forwardRef(() => i8.NzSubMenuComponent), selector: "[nz-submenu]", inputs: ["nzMenuClassName", "nzPaddingLeft", "nzTitle", "nzIcon", "nzOpen", "nzDisabled", "nzPlacement"], outputs: ["nzOpenChange"], exportAs: ["nzSubmenu"] }, { kind: "directive", type: i0.forwardRef(() => i9.NzDropDownDirective), selector: "[nz-dropdown]", inputs: ["nzDropdownMenu", "nzTrigger", "nzMatchWidthElement", "nzBackdrop", "nzClickHide", "nzDisabled", "nzVisible", "nzOverlayClassName", "nzOverlayStyle", "nzPlacement"], outputs: ["nzVisibleChange"], exportAs: ["nzDropdown"] }, { kind: "component", type: i0.forwardRef(() => i9.NzDropdownMenuComponent), selector: "nz-dropdown-menu", exportAs: ["nzDropdownMenu"] }, { kind: "directive", type: i0.forwardRef(() => i10.NzTooltipDirective), selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "cdkConnectedOverlayPush", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }, { kind: "directive", type: i0.forwardRef(() => i11.NzResizableDirective), selector: "[nz-resizable]", inputs: ["nzBounds", "nzMaxHeight", "nzMaxWidth", "nzMinHeight", "nzMinWidth", "nzGridColumnCount", "nzMaxColumn", "nzMinColumn", "nzLockAspectRatio", "nzPreview", "nzDisabled"], outputs: ["nzResize", "nzResizeEnd", "nzResizeStart"], exportAs: ["nzResizable"] }, { kind: "component", type: i0.forwardRef(() => i11.NzResizeHandleComponent), selector: "nz-resize-handle, [nz-resize-handle]", inputs: ["nzDirection", "nzCursorType"], outputs: ["nzMouseDown"], exportAs: ["nzResizeHandle"] }, { kind: "component", type: i0.forwardRef(() => i12.STFilterComponent), selector: "st-filter", inputs: ["col", "locale", "f"], outputs: ["n", "handle"] }, { kind: "component", type: i0.forwardRef(() => STTdComponent), selector: "st-td", inputs: ["c", "cIdx", "data", "i", "index"], outputs: ["n"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: STComponent, decorators: [{
            type: Component,
            args: [{ selector: 'st', exportAs: 'st', providers: [STDataSource, STRowSource, STColumnSource, STExport, DatePipe, YNPipe, DecimalPipe], host: {
                        '[class.st]': `true`,
                        '[class.st__p-left]': `page.placement === 'left'`,
                        '[class.st__p-center]': `page.placement === 'center'`,
                        '[class.st__width-strict]': `widthMode.type === 'strict'`,
                        '[class.st__row-class]': `rowClassName`,
                        '[class.ant-table-rep]': `responsive`,
                        '[class.ant-table-rep__hide-header-footer]': `responsiveHideHeaderFooter`
                    }, preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<ng-template #titleTpl let-i>\n  <span [innerHTML]=\"i._text\"></span>\n  @if (i.optional) {\n    <small class=\"st__head-optional\" [innerHTML]=\"i.optional\"></small>\n  }\n  @if (i.optionalHelp) {\n    <i class=\"st__head-tip\" nz-tooltip [nzTooltipTitle]=\"i.optionalHelp\" nz-icon nzType=\"question-circle\"></i>\n  }\n</ng-template>\n<ng-template #chkAllTpl let-custom>\n  <label\n    nz-checkbox\n    class=\"st__checkall\"\n    [nzDisabled]=\"_allCheckedDisabled\"\n    [(ngModel)]=\"_allChecked\"\n    [nzIndeterminate]=\"_indeterminate\"\n    (ngModelChange)=\"checkAll()\"\n    [class.ant-table-selection-select-all-custom]=\"custom\"\n  ></label>\n</ng-template>\n<nz-table\n  #table\n  [nzData]=\"_data\"\n  [(nzPageIndex)]=\"pi\"\n  (nzPageIndexChange)=\"_change('pi')\"\n  [(nzPageSize)]=\"ps\"\n  (nzPageSizeChange)=\"_change('ps')\"\n  [nzTotal]=\"total\"\n  [nzShowPagination]=\"_isPagination\"\n  [nzFrontPagination]=\"false\"\n  [nzBordered]=\"bordered\"\n  [nzSize]=\"size\"\n  [nzLoading]=\"noColumns || _loading\"\n  [nzLoadingDelay]=\"loadingDelay\"\n  [nzLoadingIndicator]=\"loadingIndicator\"\n  [nzTitle]=\"header!\"\n  [nzFooter]=\"footer!\"\n  [nzScroll]=\"scroll\"\n  [nzVirtualItemSize]=\"virtualItemSize\"\n  [nzVirtualMaxBufferPx]=\"virtualMaxBufferPx\"\n  [nzVirtualMinBufferPx]=\"virtualMinBufferPx\"\n  [nzVirtualForTrackBy]=\"virtualForTrackBy\"\n  [nzNoResult]=\"noResult!\"\n  [nzPageSizeOptions]=\"page.pageSizes!\"\n  [nzShowQuickJumper]=\"page.showQuickJumper\"\n  [nzShowSizeChanger]=\"page.showSize\"\n  [nzPaginationPosition]=\"page.position!\"\n  [nzPaginationType]=\"page.type!\"\n  [nzItemRender]=\"page.itemRender!\"\n  [nzSimple]=\"page.simple\"\n  [nzShowTotal]=\"totalTpl\"\n  [nzWidthConfig]=\"_widthConfig\"\n  (contextmenu)=\"onContextmenu($event)\"\n  [class.st__no-column]=\"noColumns\"\n>\n  @if (showHeader) {\n    <thead>\n      @for (row of _headers; track $index) {\n        <tr>\n          @if ($first && expand) {\n            <th nzWidth=\"50px\" [rowSpan]=\"_headers.length\"></th>\n          }\n          @for (h of row; track index; let index = $index; let last = $last) {\n            <th\n              *let=\"h.column as _c\"\n              [colSpan]=\"h.colSpan\"\n              [rowSpan]=\"h.rowSpan\"\n              [nzWidth]=\"$any(_c).width\"\n              [nzLeft]=\"_c._left!\"\n              [nzRight]=\"_c._right!\"\n              [ngClass]=\"_c._className\"\n              [attr.data-col]=\"_c.indexKey\"\n              [attr.data-col-index]=\"index\"\n              [nzShowSort]=\"_c._sort.enabled\"\n              [nzSortOrder]=\"$any(_c)._sort.default\"\n              (nzSortOrderChange)=\"sort(_c, index, $event)\"\n              [nzCustomFilter]=\"!!_c.filter\"\n              [class.st__has-filter]=\"_c.filter\"\n              nz-resizable\n              [nzDisabled]=\"last || $any(_c).resizable.disabled\"\n              [nzMaxWidth]=\"$any(_c).resizable.maxWidth\"\n              [nzMinWidth]=\"$any(_c).resizable.minWidth\"\n              [nzBounds]=\"$any(_c).resizable.bounds\"\n              [nzPreview]=\"$any(_c).resizable.preview\"\n              (nzResizeEnd)=\"colResize($event, _c)\"\n            >\n              @if ($any(!last && !$any(_c).resizable.disabled)) {\n                <nz-resize-handle nzDirection=\"right\">\n                  <i></i>\n                </nz-resize-handle>\n              }\n              @if (_c.__renderTitle) {\n                <ng-template\n                  [ngTemplateOutlet]=\"_c.__renderTitle!\"\n                  [ngTemplateOutletContext]=\"{ $implicit: h.column, index: index }\"\n                />\n              } @else {\n                @switch (_c.type) {\n                  @case ('checkbox') {\n                    @if (_c.selections!.length === 0) {\n                      <ng-template [ngTemplateOutlet]=\"chkAllTpl\" [ngTemplateOutletContext]=\"{ $implicit: false }\" />\n                    } @else {\n                      <div class=\"ant-table-selection\">\n                        <ng-template [ngTemplateOutlet]=\"chkAllTpl\" [ngTemplateOutletContext]=\"{ $implicit: true }\" />\n                        @if (_c.selections!.length) {\n                          <div class=\"ant-table-selection-extra\">\n                            <div\n                              nz-dropdown\n                              nzPlacement=\"bottomLeft\"\n                              [nzDropdownMenu]=\"selectionMenu\"\n                              class=\"ant-table-selection-down st__checkall-selection\"\n                            >\n                              <i nz-icon nzType=\"down\"></i>\n                            </div>\n                          </div>\n                        }\n                        <nz-dropdown-menu #selectionMenu=\"nzDropdownMenu\">\n                          <ul nz-menu class=\"ant-table-selection-menu\">\n                            @for (rw of _c.selections; track $index) {\n                              <li nz-menu-item (click)=\"_rowSelection(rw)\" [innerHTML]=\"rw.text\"></li>\n                            }\n                          </ul>\n                        </nz-dropdown-menu>\n                      </div>\n                    }\n                  }\n                  @default {\n                    <ng-template [ngTemplateOutlet]=\"titleTpl\" [ngTemplateOutletContext]=\"{ $implicit: _c.title }\" />\n                  }\n                }\n              }\n              @if (_c.filter) {\n                <st-filter\n                  nz-th-extra\n                  [col]=\"h.column\"\n                  [f]=\"_c.filter\"\n                  [locale]=\"locale\"\n                  (n)=\"handleFilterNotify($event)\"\n                  (handle)=\"_handleFilter(_c, $event)\"\n                />\n              }\n            </th>\n          }\n        </tr>\n      }\n    </thead>\n  }\n  <tbody class=\"st__body\">\n    @if (!_loading) {\n      <ng-template [ngTemplateOutlet]=\"bodyHeader!\" [ngTemplateOutletContext]=\"{ $implicit: _statistical }\" />\n    }\n    <ng-template #bodyTpl let-i let-index=\"index\">\n      <tr\n        [attr.data-index]=\"index\"\n        (click)=\"_rowClick($event, i, index, false)\"\n        (dblclick)=\"_rowClick($event, i, index, true)\"\n        [ngClass]=\"i._rowClassName\"\n      >\n        @if (expand) {\n          <td\n            [nzShowExpand]=\"expand && i.showExpand !== false\"\n            [nzExpand]=\"i.expand\"\n            (nzExpandChange)=\"_expandChange(i, $event)\"\n            (click)=\"_stopPropagation($event)\"\n            nzWidth=\"50px\"\n          ></td>\n        }\n        @for (c of _columns; track cIdx; let cIdx = $index) {\n          @if (i._values[cIdx].props?.colSpan > 0 && i._values[cIdx].props?.rowSpan > 0) {\n            <td\n              [nzLeft]=\"!!c._left\"\n              [nzRight]=\"!!c._right\"\n              [attr.data-col-index]=\"cIdx\"\n              [ngClass]=\"c._className\"\n              [attr.colspan]=\"i._values[cIdx].props?.colSpan === 1 ? null : i._values[cIdx].props?.colSpan\"\n              [attr.rowspan]=\"i._values[cIdx].props?.rowSpan === 1 ? null : i._values[cIdx].props?.rowSpan\"\n            >\n              @if (responsive) {\n                <span class=\"ant-table-rep__title\">\n                  <ng-template [ngTemplateOutlet]=\"titleTpl\" [ngTemplateOutletContext]=\"{ $implicit: c.title }\" />\n                </span>\n              }\n              <st-td [data]=\"_data\" [i]=\"i\" [index]=\"index\" [c]=\"c\" [cIdx]=\"cIdx\" (n)=\"_handleTd($event)\" />\n            </td>\n          }\n        }\n      </tr>\n      <tr [nzExpand]=\"i.expand\">\n        <ng-template [ngTemplateOutlet]=\"expand\" [ngTemplateOutletContext]=\"{ $implicit: i, index: index }\" />\n      </tr>\n    </ng-template>\n    @if (virtualScroll) {\n      <ng-template nz-virtual-scroll let-i let-index=\"index\">\n        <ng-template [ngTemplateOutlet]=\"bodyTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, index: index }\" />\n      </ng-template>\n    } @else {\n      @for (i of _data; track $index) {\n        <ng-template [ngTemplateOutlet]=\"bodyTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, index: $index }\" />\n      }\n    }\n    @if (!_loading) {\n      <ng-template [ngTemplateOutlet]=\"body!\" [ngTemplateOutletContext]=\"{ $implicit: _statistical }\" />\n    }\n  </tbody>\n  <ng-template #totalTpl let-range=\"range\" let-total>{{ renderTotal(total, range) }}</ng-template>\n</nz-table>\n<nz-dropdown-menu #contextmenuTpl=\"nzDropdownMenu\">\n  <ul nz-menu class=\"st__contextmenu\">\n    @for (i of contextmenuList; track $index) {\n      @if (i.children!.length === 0) {\n        <li nz-menu-item (click)=\"i.fn!(i)\" [innerHTML]=\"i.text\"></li>\n      } @else {\n        <li nz-submenu [nzTitle]=\"i.text\">\n          <ul>\n            @for (ci of i.children; track $index) {\n              <li nz-menu-item (click)=\"ci.fn!(ci)\" [innerHTML]=\"ci.text\"></li>\n            }\n          </ul>\n        </li>\n      }\n    }\n  </ul>\n</nz-dropdown-menu>\n" }]
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
                args: [{ transform: numberAttribute }]
            }], pi: [{
                type: Input,
                args: [{ transform: numberAttribute }]
            }], total: [{
                type: Input,
                args: [{ transform: numberAttribute }]
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: STTdComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.1.0", type: STTdComponent, selector: "st-td", inputs: { c: "c", cIdx: "cIdx", data: "data", i: "i", index: "index" }, outputs: { n: "n" }, ngImport: i0, template: "<ng-template #btnTpl let-i let-child=\"child\">\n  @if (i.tooltip) {\n    <span nz-tooltip [nzTooltipTitle]=\"i.tooltip\" [class.d-block]=\"child\" [class.width-100]=\"child\">\n      <ng-template [ngTemplateOutlet]=\"btnItemTpl\" [ngTemplateOutletContext]=\"{ $implicit: i }\" />\n    </span>\n  } @else {\n    <ng-template [ngTemplateOutlet]=\"btnItemTpl\" [ngTemplateOutletContext]=\"{ $implicit: i }\" />\n  }\n</ng-template>\n<ng-template #btnItemTpl let-i>\n  @if (i.pop) {\n    <a\n      nz-popconfirm\n      [nzPopconfirmTitle]=\"i.pop.title\"\n      [nzIcon]=\"i.pop.icon\"\n      [nzCondition]=\"i.pop.condition(i)\"\n      [nzCancelText]=\"i.pop.cancelText\"\n      [nzOkText]=\"i.pop.okText\"\n      [nzOkType]=\"i.pop.okType\"\n      (nzOnConfirm)=\"_btn(i)\"\n      class=\"st__btn-text\"\n      [ngClass]=\"i._className\"\n      (click)=\"_stopPropagation($event)\"\n    >\n      <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i }\" />\n    </a>\n  } @else {\n    <a (click)=\"_btn(i, $event)\" class=\"st__btn-text\" [ngClass]=\"i._className\">\n      <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i }\" />\n    </a>\n  }\n</ng-template>\n<ng-template #btnTextTpl let-i>\n  @if (i._icon) {\n    @if (i._icon.iconfont) {\n      <i nz-icon [nzIconfont]=\"i._icon.iconfont\"></i>\n    } @else {\n      <i\n        nz-icon\n        [nzType]=\"i._icon.type\"\n        [nzTheme]=\"i._icon.theme\"\n        [nzSpin]=\"i._icon.spin\"\n        [nzTwotoneColor]=\"i._icon.twoToneColor\"\n      ></i>\n    }\n  }\n  <span [innerHTML]=\"i._text\" [ngClass]=\"{ 'pl-xs': i._icon }\"></span>\n</ng-template>\n@if (c.__render) {\n  <ng-template [ngTemplateOutlet]=\"c.__render!\" [ngTemplateOutletContext]=\"{ $implicit: i, index: index, column: c }\" />\n} @else {\n  @switch (c.type) {\n    @case ('checkbox') {\n      <label nz-checkbox [nzDisabled]=\"i.disabled\" [ngModel]=\"i.checked\" (ngModelChange)=\"_checkbox($event)\"></label>\n    }\n    @case ('radio') {\n      <label nz-radio [nzDisabled]=\"i.disabled\" [ngModel]=\"i.checked\" (ngModelChange)=\"_radio()\"></label>\n    }\n    @case ('link') {\n      <a (click)=\"_link($event)\" [innerHTML]=\"i._values[cIdx]._text\" [attr.title]=\"i._values[cIdx].text\"></a>\n    }\n    @case ('tag') {\n      <nz-tag [nzColor]=\"i._values[cIdx].color\" [nz-tooltip]=\"i._values[cIdx].tooltip\">\n        <span [innerHTML]=\"i._values[cIdx]._text\"></span>\n      </nz-tag>\n    }\n    @case ('badge') {\n      <nz-badge\n        [nzStatus]=\"i._values[cIdx].color\"\n        [nzText]=\"i._values[cIdx].text\"\n        [nz-tooltip]=\"i._values[cIdx].tooltip\"\n      />\n    }\n    @case ('cell') {\n      <cell [value]=\"i._values[cIdx].text\" [options]=\"i._values[cIdx].cell ?? c.cell\" />\n    }\n    @case ('widget') {\n      <ng-template st-widget-host [record]=\"i\" [column]=\"c\" />\n    }\n    @default {\n      @if (c.safeType === 'text') {\n        <span [innerText]=\"i._values[cIdx]._text\" [attr.title]=\"c._isTruncate ? i._values[cIdx].text : null\"></span>\n      } @else {\n        <span [innerHTML]=\"i._values[cIdx]._text\" [attr.title]=\"c._isTruncate ? i._values[cIdx].text : null\"></span>\n      }\n    }\n  }\n  @for (btn of i._values[cIdx].buttons; track $index) {\n    @if (btn.children!.length > 0) {\n      <a nz-dropdown [nzDropdownMenu]=\"btnMenu\" nzOverlayClassName=\"st__btn-sub\">\n        <span [innerHTML]=\"btn._text\"></span>\n        <i nz-icon nzType=\"down\"></i>\n      </a>\n      <nz-dropdown-menu #btnMenu=\"nzDropdownMenu\">\n        <ul nz-menu>\n          @for (subBtn of btn.children; track $index) {\n            @if (subBtn.type === 'divider') {\n              <li nz-menu-divider></li>\n            } @else {\n              <li nz-menu-item [class.st__btn-disabled]=\"subBtn._disabled\">\n                <ng-template\n                  [ngTemplateOutlet]=\"btnTpl\"\n                  [ngTemplateOutletContext]=\"{ $implicit: subBtn, child: true }\"\n                />\n              </li>\n            }\n          }\n        </ul>\n      </nz-dropdown-menu>\n    } @else {\n      <span [class.st__btn-disabled]=\"btn._disabled\">\n        <ng-template [ngTemplateOutlet]=\"btnTpl\" [ngTemplateOutletContext]=\"{ $implicit: btn, child: false }\" />\n      </span>\n    }\n    @if (!$last) {\n      <nz-divider nzType=\"vertical\" />\n    }\n  }\n}\n", dependencies: [{ kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: i13.CellComponent, selector: "cell, [cell]", inputs: ["value", "options", "loading", "disabled"], outputs: ["valueChange"], exportAs: ["cell"] }, { kind: "directive", type: i14.NzPopconfirmDirective, selector: "[nz-popconfirm]", inputs: ["nzPopconfirmArrowPointAtCenter", "nzPopconfirmTitle", "nz-popconfirm", "nzPopconfirmTrigger", "nzPopconfirmPlacement", "nzPopconfirmOrigin", "nzPopconfirmMouseEnterDelay", "nzPopconfirmMouseLeaveDelay", "nzPopconfirmOverlayClassName", "nzPopconfirmOverlayStyle", "nzPopconfirmVisible", "nzOkText", "nzOkType", "nzOkDanger", "nzCancelText", "nzBeforeConfirm", "nzIcon", "nzCondition", "nzPopconfirmShowArrow", "nzPopconfirmBackdrop", "nzAutofocus"], outputs: ["nzPopconfirmVisibleChange", "nzOnCancel", "nzOnConfirm"], exportAs: ["nzPopconfirm"] }, { kind: "directive", type: i6.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "component", type: i15.NzBadgeComponent, selector: "nz-badge", inputs: ["nzShowZero", "nzShowDot", "nzStandalone", "nzDot", "nzOverflowCount", "nzColor", "nzStyle", "nzText", "nzTitle", "nzStatus", "nzCount", "nzOffset", "nzSize"], exportAs: ["nzBadge"] }, { kind: "component", type: i7.NzCheckboxComponent, selector: "[nz-checkbox]", inputs: ["nzValue", "nzAutoFocus", "nzDisabled", "nzIndeterminate", "nzChecked", "nzId"], outputs: ["nzCheckedChange"], exportAs: ["nzCheckbox"] }, { kind: "component", type: i16.NzDividerComponent, selector: "nz-divider", inputs: ["nzText", "nzType", "nzOrientation", "nzDashed", "nzPlain"], exportAs: ["nzDivider"] }, { kind: "directive", type: i8.NzMenuDirective, selector: "[nz-menu]", inputs: ["nzInlineIndent", "nzTheme", "nzMode", "nzInlineCollapsed", "nzSelectable"], outputs: ["nzClick"], exportAs: ["nzMenu"] }, { kind: "component", type: i8.NzMenuItemComponent, selector: "[nz-menu-item]", inputs: ["nzPaddingLeft", "nzDisabled", "nzSelected", "nzDanger", "nzMatchRouterExact", "nzMatchRouter"], exportAs: ["nzMenuItem"] }, { kind: "directive", type: i8.NzMenuDividerDirective, selector: "[nz-menu-divider]", exportAs: ["nzMenuDivider"] }, { kind: "directive", type: i9.NzDropDownDirective, selector: "[nz-dropdown]", inputs: ["nzDropdownMenu", "nzTrigger", "nzMatchWidthElement", "nzBackdrop", "nzClickHide", "nzDisabled", "nzVisible", "nzOverlayClassName", "nzOverlayStyle", "nzPlacement"], outputs: ["nzVisibleChange"], exportAs: ["nzDropdown"] }, { kind: "directive", type: i9.NzDropDownADirective, selector: "a[nz-dropdown]" }, { kind: "component", type: i9.NzDropdownMenuComponent, selector: "nz-dropdown-menu", exportAs: ["nzDropdownMenu"] }, { kind: "component", type: i17.NzRadioComponent, selector: "[nz-radio],[nz-radio-button]", inputs: ["nzValue", "nzDisabled", "nzAutoFocus"], exportAs: ["nzRadio"] }, { kind: "component", type: i18.NzTagComponent, selector: "nz-tag", inputs: ["nzMode", "nzColor", "nzChecked"], outputs: ["nzOnClose", "nzCheckedChange"], exportAs: ["nzTag"] }, { kind: "directive", type: i10.NzTooltipDirective, selector: "[nz-tooltip]", inputs: ["nzTooltipTitle", "nzTooltipTitleContext", "nz-tooltip", "nzTooltipTrigger", "nzTooltipPlacement", "nzTooltipOrigin", "nzTooltipVisible", "nzTooltipMouseEnterDelay", "nzTooltipMouseLeaveDelay", "nzTooltipOverlayClassName", "nzTooltipOverlayStyle", "nzTooltipArrowPointAtCenter", "cdkConnectedOverlayPush", "nzTooltipColor"], outputs: ["nzTooltipVisibleChange"], exportAs: ["nzTooltip"] }, { kind: "directive", type: i19.STWidgetHostDirective, selector: "[st-widget-host]", inputs: ["record", "column"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0", ngImport: i0, type: STTdComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3N0L3N0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9zdC9zdC5jb21wb25lbnQuaHRtbCIsIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2FiYy9zdC9zdC10ZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3hELE9BQU8sRUFFTCxnQkFBZ0IsRUFDaEIsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFDTCxlQUFlLEVBRWYsTUFBTSxFQUtOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDaEUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQWMsRUFBRSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWxILE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsUUFBUSxFQUNSLGtCQUFrQixFQUNsQixZQUFZLEVBRVosV0FBVyxFQUNYLE1BQU0sRUFDUCxNQUFNLGNBQWMsQ0FBQztBQUV0QixPQUFPLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRTNELE9BQU8sRUFBRSxvQkFBb0IsRUFBMkIsTUFBTSx3QkFBd0IsQ0FBQztBQUl2RixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9C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QUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7WUFDbkUsQ0FBQztZQUNELE9BQU87UUFDVCxDQUFDO1FBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVPLFdBQVcsQ0FBQyxNQUFjLEVBQUUsR0FBbUIsRUFBRSxLQUFpQjtRQUN4RSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUs7WUFBRSxPQUFPO1FBQ3ZCLElBQUksT0FBTyxHQUFHLENBQUMsS0FBSyxLQUFLLFFBQVEsRUFBRSxDQUFDO1lBQ2xDLFFBQVEsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNsQixLQUFLLE1BQU07b0JBQ1QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDbkIsTUFBTTtnQkFDUixLQUFLLFFBQVE7b0JBQ1gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFDckIsTUFBTTtZQUNWLENBQUM7UUFDSCxDQUFDO2FBQU0sQ0FBQztZQUNOLE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvQyxDQUFDO0lBQ0gsQ0FBQzs4R0F6R1UsYUFBYTtrR0FBYixhQUFhLDBJRXQ0QjFCLDQxSUF1SEE7OzJGRit3QmEsYUFBYTtrQkFQekIsU0FBUzsrQkFDRSxPQUFPLHVCQUVJLEtBQUssbUJBQ1QsdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSTs4QkFRNUIsQ0FBQztzQkFBVCxLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csQ0FBQztzQkFBVCxLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDYSxDQUFDO3NCQUFuQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2RrVmlydHVhbFNjcm9sbFZpZXdwb3J0IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3Njcm9sbGluZyc7XG5pbXBvcnQgeyBEZWNpbWFsUGlwZSwgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgYm9vbGVhbkF0dHJpYnV0ZSxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIERlc3Ryb3lSZWYsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgaW5qZWN0LFxuICBJbnB1dCxcbiAgbnVtYmVyQXR0cmlidXRlLFxuICBPbkNoYW5nZXMsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVHJhY2tCeUZ1bmN0aW9uLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdGFrZVVudGlsRGVzdHJveWVkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZS9yeGpzLWludGVyb3AnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IGlzT2JzZXJ2YWJsZSwgT2JzZXJ2YWJsZSwgb2YsIGZpbHRlciwgY2F0Y2hFcnJvciwgbWFwLCBmaW5hbGl6ZSwgdGhyb3dFcnJvciwgbGFzdFZhbHVlRnJvbSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQge1xuICBBTEFJTl9JMThOX1RPS0VOLFxuICBEYXRlUGlwZSxcbiAgRGVsb25Mb2NhbGVTZXJ2aWNlLFxuICBEcmF3ZXJIZWxwZXIsXG4gIExvY2FsZURhdGEsXG4gIE1vZGFsSGVscGVyLFxuICBZTlBpcGVcbn0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IEFsYWluQ29uZmlnU2VydmljZSwgQWxhaW5TVENvbmZpZyB9IGZyb20gJ0BkZWxvbi91dGlsL2NvbmZpZyc7XG5pbXBvcnQgeyBkZWVwQ29weSwgZGVlcE1lcmdlS2V5IH0gZnJvbSAnQGRlbG9uL3V0aWwvb3RoZXInO1xuaW1wb3J0IHR5cGUgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgTnpDb250ZXh0TWVudVNlcnZpY2UsIE56RHJvcGRvd25NZW51Q29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC9kcm9wZG93bic7XG5pbXBvcnQgeyBOelJlc2l6ZUV2ZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC9yZXNpemFibGUnO1xuaW1wb3J0IHsgTnpUYWJsZUNvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvdGFibGUnO1xuXG5pbXBvcnQgeyBTVENvbHVtblNvdXJjZSB9IGZyb20gJy4vc3QtY29sdW1uLXNvdXJjZSc7XG5pbXBvcnQgeyBTVERhdGFTb3VyY2UsIFNURGF0YVNvdXJjZU9wdGlvbnMsIFNURGF0YVNvdXJjZVJlc3VsdCB9IGZyb20gJy4vc3QtZGF0YS1zb3VyY2UnO1xuaW1wb3J0IHsgU1RFeHBvcnQgfSBmcm9tICcuL3N0LWV4cG9ydCc7XG5pbXBvcnQgeyBTVFJvd1NvdXJjZSB9IGZyb20gJy4vc3Qtcm93LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBTVF9ERUZBVUxUX0NPTkZJRyB9IGZyb20gJy4vc3QuY29uZmlnJztcbmltcG9ydCB0eXBlIHtcbiAgU1RDaGFuZ2UsXG4gIFNUQ2hhbmdlVHlwZSxcbiAgU1RDbGlja1Jvd0NsYXNzTmFtZSxcbiAgU1RDbGlja1Jvd0NsYXNzTmFtZVR5cGUsXG4gIFNUQ29sdW1uLFxuICBTVENvbHVtbkJ1dHRvbixcbiAgU1RDb2x1bW5TYWZlVHlwZSxcbiAgU1RDb2x1bW5TZWxlY3Rpb24sXG4gIFNUQ29udGV4dG1lbnVGbixcbiAgU1RDb250ZXh0bWVudUl0ZW0sXG4gIFNUQ3VzdG9tUmVxdWVzdE9wdGlvbnMsXG4gIFNURGF0YSxcbiAgU1RFcnJvcixcbiAgU1RFeHBvcnRPcHRpb25zLFxuICBTVExvYWRPcHRpb25zLFxuICBTVE11bHRpU29ydCxcbiAgU1RQYWdlLFxuICBTVFJlcSxcbiAgU1RSZXMsXG4gIFNUUmVzZXRDb2x1bW5zT3B0aW9uLFxuICBTVFJlc2l6YWJsZSxcbiAgU1RSb3dDbGFzc05hbWUsXG4gIFNUU2luZ2xlU29ydCxcbiAgU1RTdGF0aXN0aWNhbFJlc3VsdHMsXG4gIFNUV2lkdGhNb2RlXG59IGZyb20gJy4vc3QuaW50ZXJmYWNlcyc7XG5pbXBvcnQgdHlwZSB7IF9TVENvbHVtbiwgX1NURGF0YVZhbHVlLCBfU1RIZWFkZXIsIF9TVFRkTm90aWZ5LCBfU1RUZE5vdGlmeVR5cGUgfSBmcm9tICcuL3N0LnR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3QnLFxuICBleHBvcnRBczogJ3N0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0LmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbU1REYXRhU291cmNlLCBTVFJvd1NvdXJjZSwgU1RDb2x1bW5Tb3VyY2UsIFNURXhwb3J0LCBEYXRlUGlwZSwgWU5QaXBlLCBEZWNpbWFsUGlwZV0sXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLnN0XSc6IGB0cnVlYCxcbiAgICAnW2NsYXNzLnN0X19wLWxlZnRdJzogYHBhZ2UucGxhY2VtZW50ID09PSAnbGVmdCdgLFxuICAgICdbY2xhc3Muc3RfX3AtY2VudGVyXSc6IGBwYWdlLnBsYWNlbWVudCA9PT0gJ2NlbnRlcidgLFxuICAgICdbY2xhc3Muc3RfX3dpZHRoLXN0cmljdF0nOiBgd2lkdGhNb2RlLnR5cGUgPT09ICdzdHJpY3QnYCxcbiAgICAnW2NsYXNzLnN0X19yb3ctY2xhc3NdJzogYHJvd0NsYXNzTmFtZWAsXG4gICAgJ1tjbGFzcy5hbnQtdGFibGUtcmVwXSc6IGByZXNwb25zaXZlYCxcbiAgICAnW2NsYXNzLmFudC10YWJsZS1yZXBfX2hpZGUtaGVhZGVyLWZvb3Rlcl0nOiBgcmVzcG9uc2l2ZUhpZGVIZWFkZXJGb290ZXJgXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTVENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XG4gIHByaXZhdGUgcmVhZG9ubHkgaTE4blNydiA9IGluamVjdChBTEFJTl9JMThOX1RPS0VOLCB7IG9wdGlvbmFsOiB0cnVlIH0pO1xuICBwcml2YXRlIHJlYWRvbmx5IGVsOiBIVE1MRWxlbWVudCA9IGluamVjdChFbGVtZW50UmVmKS5uYXRpdmVFbGVtZW50O1xuICBwcml2YXRlIHJlYWRvbmx5IGNkciA9IGluamVjdChDaGFuZ2VEZXRlY3RvclJlZik7XG4gIHByaXZhdGUgcmVhZG9ubHkgZG9jID0gaW5qZWN0KERPQ1VNRU5UKTtcbiAgcHJpdmF0ZSByZWFkb25seSBleHBvcnRTcnYgPSBpbmplY3QoU1RFeHBvcnQpO1xuICBwcml2YXRlIHJlYWRvbmx5IGNvbHVtblNvdXJjZSA9IGluamVjdChTVENvbHVtblNvdXJjZSk7XG4gIHByaXZhdGUgcmVhZG9ubHkgZGF0YVNvdXJjZSA9IGluamVjdChTVERhdGFTb3VyY2UpO1xuICBwcml2YXRlIHJlYWRvbmx5IGRlbG9uSTE4biA9IGluamVjdChEZWxvbkxvY2FsZVNlcnZpY2UpO1xuICBwcml2YXRlIHJlYWRvbmx5IGNtcyA9IGluamVjdChOekNvbnRleHRNZW51U2VydmljZSk7XG4gIHByaXZhdGUgcmVhZG9ubHkgZGVzdHJveSQgPSBpbmplY3QoRGVzdHJveVJlZik7XG5cbiAgcHJpdmF0ZSB0b3RhbFRwbCA9IGBgO1xuICBwcml2YXRlIGluaWVkID0gZmFsc2U7XG4gIGNvZyE6IEFsYWluU1RDb25maWc7XG4gIHByaXZhdGUgX3JlcSE6IFNUUmVxO1xuICBwcml2YXRlIF9yZXMhOiBTVFJlcztcbiAgcHJpdmF0ZSBfcGFnZSE6IFNUUGFnZTtcbiAgcHJpdmF0ZSBfd2lkdGhNb2RlITogU1RXaWR0aE1vZGU7XG4gIHByaXZhdGUgY3VzdG9tV2lkdGhDb25maWc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgX3dpZHRoQ29uZmlnOiBzdHJpbmdbXSA9IFtdO1xuICBsb2NhbGU6IExvY2FsZURhdGEgPSB7fTtcbiAgX2xvYWRpbmcgPSBmYWxzZTtcbiAgX2RhdGE6IFNURGF0YVtdID0gW107XG4gIF9zdGF0aXN0aWNhbDogU1RTdGF0aXN0aWNhbFJlc3VsdHMgPSB7fTtcbiAgX2lzUGFnaW5hdGlvbiA9IHRydWU7XG4gIF9hbGxDaGVja2VkID0gZmFsc2U7XG4gIF9hbGxDaGVja2VkRGlzYWJsZWQgPSBmYWxzZTtcbiAgX2luZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgX2hlYWRlcnM6IF9TVEhlYWRlcltdW10gPSBbXTtcbiAgX2NvbHVtbnM6IF9TVENvbHVtbltdID0gW107XG4gIGNvbnRleHRtZW51TGlzdDogU1RDb250ZXh0bWVudUl0ZW1bXSA9IFtdO1xuICBAVmlld0NoaWxkKCd0YWJsZScpIHJlYWRvbmx5IG9yZ1RhYmxlITogTnpUYWJsZUNvbXBvbmVudDxTVERhdGE+O1xuICBAVmlld0NoaWxkKCdjb250ZXh0bWVudVRwbCcpIHJlYWRvbmx5IGNvbnRleHRtZW51VHBsITogTnpEcm9wZG93bk1lbnVDb21wb25lbnQ7XG5cbiAgQElucHV0KClcbiAgZ2V0IHJlcSgpOiBTVFJlcSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcTtcbiAgfVxuICBzZXQgcmVxKHZhbHVlOiBTVFJlcSkge1xuICAgIHRoaXMuX3JlcSA9IGRlZXBNZXJnZUtleSh7fSwgdHJ1ZSwgdGhpcy5jb2cucmVxLCB2YWx1ZSk7XG4gIH1cbiAgLyoqIOi/lOWbnuS9k+mFjee9riAqL1xuICBASW5wdXQoKVxuICBnZXQgcmVzKCk6IFNUUmVzIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzO1xuICB9XG4gIHNldCByZXModmFsdWU6IFNUUmVzKSB7XG4gICAgY29uc3QgaXRlbSA9ICh0aGlzLl9yZXMgPSBkZWVwTWVyZ2VLZXkoe30sIHRydWUsIHRoaXMuY29nLnJlcywgdmFsdWUpKTtcbiAgICBjb25zdCByZU5hbWUgPSBpdGVtLnJlTmFtZSE7XG4gICAgaWYgKHR5cGVvZiByZU5hbWUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShyZU5hbWUubGlzdCkpIHJlTmFtZS5saXN0ID0gcmVOYW1lLmxpc3QhLnNwbGl0KCcuJyk7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkocmVOYW1lLnRvdGFsKSkgcmVOYW1lLnRvdGFsID0gcmVOYW1lLnRvdGFsIS5zcGxpdCgnLicpO1xuICAgIH1cbiAgICB0aGlzLl9yZXMgPSBpdGVtO1xuICB9XG4gIEBJbnB1dCgpXG4gIGdldCBwYWdlKCk6IFNUUGFnZSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhZ2U7XG4gIH1cbiAgc2V0IHBhZ2UodmFsdWU6IFNUUGFnZSkge1xuICAgIHRoaXMuX3BhZ2UgPSB7IC4uLnRoaXMuY29nLnBhZ2UsIC4uLnZhbHVlIH07XG4gICAgdGhpcy51cGRhdGVUb3RhbFRwbCgpO1xuICB9XG4gIEBJbnB1dCgpIGRhdGE/OiBzdHJpbmcgfCBTVERhdGFbXSB8IE9ic2VydmFibGU8U1REYXRhW10+O1xuICBASW5wdXQoKSBjb2x1bW5zPzogU1RDb2x1bW5bXSB8IG51bGw7XG4gIEBJbnB1dCgpIGNvbnRleHRtZW51PzogU1RDb250ZXh0bWVudUZuIHwgbnVsbDtcbiAgQElucHV0KHsgdHJhbnNmb3JtOiBudW1iZXJBdHRyaWJ1dGUgfSkgcHMgPSAxMDtcbiAgQElucHV0KHsgdHJhbnNmb3JtOiBudW1iZXJBdHRyaWJ1dGUgfSkgcGkgPSAxO1xuICBASW5wdXQoeyB0cmFuc2Zvcm06IG51bWJlckF0dHJpYnV0ZSB9KSB0b3RhbCA9IDA7XG4gIEBJbnB1dCgpIGxvYWRpbmc6IGJvb2xlYW4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KHsgdHJhbnNmb3JtOiBudW1iZXJBdHRyaWJ1dGUgfSkgbG9hZGluZ0RlbGF5ID0gMDtcbiAgQElucHV0KCkgbG9hZGluZ0luZGljYXRvcjogVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KHsgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlIH0pIGJvcmRlcmVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNpemUhOiAnc21hbGwnIHwgJ21pZGRsZScgfCAnZGVmYXVsdCc7XG4gIEBJbnB1dCgpIHNjcm9sbDogeyB4Pzogc3RyaW5nIHwgbnVsbDsgeT86IHN0cmluZyB8IG51bGwgfSA9IHsgeDogbnVsbCwgeTogbnVsbCB9O1xuICBASW5wdXQoKSBzaW5nbGVTb3J0PzogU1RTaW5nbGVTb3J0IHwgbnVsbDtcbiAgcHJpdmF0ZSBfbXVsdGlTb3J0PzogU1RNdWx0aVNvcnQ7XG4gIEBJbnB1dCgpXG4gIGdldCBtdWx0aVNvcnQoKTogTnpTYWZlQW55IHtcbiAgICByZXR1cm4gdGhpcy5fbXVsdGlTb3J0O1xuICB9XG4gIHNldCBtdWx0aVNvcnQodmFsdWU6IE56U2FmZUFueSkge1xuICAgIGlmIChcbiAgICAgICh0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJyAmJiAhYm9vbGVhbkF0dHJpYnV0ZSh2YWx1ZSkpIHx8XG4gICAgICAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwKVxuICAgICkge1xuICAgICAgdGhpcy5fbXVsdGlTb3J0ID0gdW5kZWZpbmVkO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9tdWx0aVNvcnQgPSB7XG4gICAgICAuLi4odHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyA/IHZhbHVlIDoge30pXG4gICAgfTtcbiAgfVxuICBASW5wdXQoKSByb3dDbGFzc05hbWU/OiBTVFJvd0NsYXNzTmFtZSB8IG51bGw7XG4gIEBJbnB1dCgpIGNsaWNrUm93Q2xhc3NOYW1lPzogU1RDbGlja1Jvd0NsYXNzTmFtZSB8IG51bGw7XG4gIEBJbnB1dCgpXG4gIHNldCB3aWR0aE1vZGUodmFsdWU6IFNUV2lkdGhNb2RlKSB7XG4gICAgdGhpcy5fd2lkdGhNb2RlID0geyAuLi50aGlzLmNvZy53aWR0aE1vZGUsIC4uLnZhbHVlIH07XG4gIH1cbiAgZ2V0IHdpZHRoTW9kZSgpOiBTVFdpZHRoTW9kZSB7XG4gICAgcmV0dXJuIHRoaXMuX3dpZHRoTW9kZTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgd2lkdGhDb25maWcodmFsOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3dpZHRoQ29uZmlnID0gdmFsO1xuICAgIHRoaXMuY3VzdG9tV2lkdGhDb25maWcgPSB2YWwgJiYgdmFsLmxlbmd0aCA+IDA7XG4gIH1cbiAgcHJpdmF0ZSBfcmVzaXphYmxlPzogU1RSZXNpemFibGU7XG4gIEBJbnB1dCgpXG4gIHNldCByZXNpemFibGUodmFsOiBTVFJlc2l6YWJsZSB8IGJvb2xlYW4gfCBzdHJpbmcpIHtcbiAgICB0aGlzLl9yZXNpemFibGUgPSB0eXBlb2YgdmFsID09PSAnb2JqZWN0JyA/IHZhbCA6IHsgZGlzYWJsZWQ6ICFib29sZWFuQXR0cmlidXRlKHZhbCkgfTtcbiAgfVxuICBASW5wdXQoKSBoZWFkZXI/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGw7XG4gIEBJbnB1dCh7IHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZSB9KSBzaG93SGVhZGVyID0gdHJ1ZTtcbiAgQElucHV0KCkgZm9vdGVyPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsO1xuICBASW5wdXQoKSBib2R5SGVhZGVyPzogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IFNUU3RhdGlzdGljYWxSZXN1bHRzIH0+IHwgbnVsbDtcbiAgQElucHV0KCkgYm9keT86IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBTVFN0YXRpc3RpY2FsUmVzdWx0cyB9PiB8IG51bGw7XG4gIEBJbnB1dCh7IHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZSB9KSBleHBhbmRSb3dCeUNsaWNrID0gZmFsc2U7XG4gIEBJbnB1dCh7IHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZSB9KSBleHBhbmRBY2NvcmRpb24gPSBmYWxzZTtcbiAgQElucHV0KCkgZXhwYW5kOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogTnpTYWZlQW55OyBpbmRleDogbnVtYmVyIH0+IHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG5vUmVzdWx0Pzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsO1xuICBASW5wdXQoeyB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGUgfSkgcmVzcG9uc2l2ZTogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCh7IHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZSB9KSByZXNwb25zaXZlSGlkZUhlYWRlckZvb3Rlcj86IGJvb2xlYW47XG4gIEBPdXRwdXQoKSByZWFkb25seSBlcnJvciA9IG5ldyBFdmVudEVtaXR0ZXI8U1RFcnJvcj4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8U1RDaGFuZ2U+KCk7XG4gIEBJbnB1dCh7IHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZSB9KSB2aXJ0dWFsU2Nyb2xsID0gZmFsc2U7XG4gIEBJbnB1dCh7IHRyYW5zZm9ybTogbnVtYmVyQXR0cmlidXRlIH0pIHZpcnR1YWxJdGVtU2l6ZSA9IDU0O1xuICBASW5wdXQoeyB0cmFuc2Zvcm06IG51bWJlckF0dHJpYnV0ZSB9KSB2aXJ0dWFsTWF4QnVmZmVyUHggPSAyMDA7XG4gIEBJbnB1dCh7IHRyYW5zZm9ybTogbnVtYmVyQXR0cmlidXRlIH0pIHZpcnR1YWxNaW5CdWZmZXJQeCA9IDEwMDtcbiAgQElucHV0KCkgY3VzdG9tUmVxdWVzdD86IChvcHRpb25zOiBTVEN1c3RvbVJlcXVlc3RPcHRpb25zKSA9PiBPYnNlcnZhYmxlPE56U2FmZUFueT47XG4gIEBJbnB1dCgpIHZpcnR1YWxGb3JUcmFja0J5OiBUcmFja0J5RnVuY3Rpb248U1REYXRhPiA9IGluZGV4ID0+IGluZGV4O1xuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG51bWJlciBvZiB0aGUgY3VycmVudCBwYWdlXG4gICAqL1xuICBnZXQgY291bnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YS5sZW5ndGg7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBkYXRhIG9mIHRoZSBjdXJyZW50IHBhZ2VcbiAgICovXG4gIGdldCBsaXN0KCk6IFNURGF0YVtdIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgfVxuXG4gIGdldCBub0NvbHVtbnMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29sdW1ucyA9PSBudWxsO1xuICB9XG5cbiAgY29uc3RydWN0b3IoY29uZmlnU3J2OiBBbGFpbkNvbmZpZ1NlcnZpY2UpIHtcbiAgICB0aGlzLmRlbG9uSTE4bi5jaGFuZ2UucGlwZSh0YWtlVW50aWxEZXN0cm95ZWQoKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMubG9jYWxlID0gdGhpcy5kZWxvbkkxOG4uZ2V0RGF0YSgnc3QnKTtcbiAgICAgIGlmICh0aGlzLl9jb2x1bW5zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy51cGRhdGVUb3RhbFRwbCgpO1xuICAgICAgICB0aGlzLmNkKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmkxOG5TcnY/LmNoYW5nZVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRha2VVbnRpbERlc3Ryb3llZCgpLFxuICAgICAgICBmaWx0ZXIoKCkgPT4gdGhpcy5fY29sdW1ucy5sZW5ndGggPiAwKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLnJlZnJlc2hDb2x1bW5zKCkpO1xuXG4gICAgdGhpcy5zZXRDb2coY29uZmlnU3J2Lm1lcmdlKCdzdCcsIFNUX0RFRkFVTFRfQ09ORklHKSEpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDb2coY29nOiBBbGFpblNUQ29uZmlnKTogdm9pZCB7XG4gICAgY29uc3QgY29weU11bHRpU29ydCA9IHsgLi4uY29nLm11bHRpU29ydCB9O1xuICAgIC8vIEJlY2F1c2UgbXVsdGlTb3J0Lmdsb2JhbCB3aWxsIGFmZmVjdCB0aGUgcmVzdWx0LCBpdCBzaG91bGQgYmUgcmVtb3ZlZCBmaXJzdCwgYW5kIG11bHRpU29ydCB3aWxsIGJlIG9wZXJhdGVkIGFnYWluIGFmdGVyIHByb2Nlc3NpbmcuXG4gICAgZGVsZXRlIGNvZy5tdWx0aVNvcnQ7XG4gICAgdGhpcy5jb2cgPSBjb2c7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb2cpO1xuXG4gICAgaWYgKGNvcHlNdWx0aVNvcnQuZ2xvYmFsICE9PSBmYWxzZSkge1xuICAgICAgdGhpcy5tdWx0aVNvcnQgPSBjb3B5TXVsdGlTb3J0O1xuICAgIH1cbiAgICB0aGlzLmNvbHVtblNvdXJjZS5zZXRDb2coY29nKTtcbiAgICB0aGlzLmRhdGFTb3VyY2Uuc2V0Q29nKGNvZyk7XG4gIH1cblxuICBjZCgpOiB0aGlzIHtcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcml2YXRlIHJlZnJlc2hEYXRhKCk6IHRoaXMge1xuICAgIHRoaXMuX2RhdGEgPSBbLi4udGhpcy5fZGF0YV07XG4gICAgcmV0dXJuIHRoaXMuY2QoKTtcbiAgfVxuXG4gIHJlbmRlclRvdGFsKHRvdGFsOiBzdHJpbmcsIHJhbmdlOiBzdHJpbmdbXSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMudG90YWxUcGxcbiAgICAgID8gdGhpcy50b3RhbFRwbC5yZXBsYWNlKCd7e3RvdGFsfX0nLCB0b3RhbCkucmVwbGFjZSgne3tyYW5nZVswXX19JywgcmFuZ2VbMF0pLnJlcGxhY2UoJ3t7cmFuZ2VbMV19fScsIHJhbmdlWzFdKVxuICAgICAgOiAnJztcbiAgfVxuXG4gIHByaXZhdGUgY2hhbmdlRW1pdCh0eXBlOiBTVENoYW5nZVR5cGUsIGRhdGE/OiBOelNhZmVBbnkpOiB2b2lkIHtcbiAgICBjb25zdCByZXM6IFNUQ2hhbmdlID0ge1xuICAgICAgdHlwZSxcbiAgICAgIHBpOiB0aGlzLnBpLFxuICAgICAgcHM6IHRoaXMucHMsXG4gICAgICB0b3RhbDogdGhpcy50b3RhbFxuICAgIH07XG4gICAgaWYgKGRhdGEgIT0gbnVsbCkge1xuICAgICAgcmVzW3R5cGVdID0gZGF0YTtcbiAgICB9XG4gICAgdGhpcy5jaGFuZ2UuZW1pdChyZXMpO1xuICB9XG5cbiAgLy8gI3JlZ2lvbiBkYXRhXG5cbiAgLyoqXG4gICAqIOiOt+WPlui/h+a7pOWQjuaJgOacieaVsOaNrlxuICAgKiAtIOacrOWcsOaVsOaNru+8muWMheWQq+aOkuW6j+OAgei/h+a7pOWQjuS4jeWIhumhteaVsOaNrlxuICAgKiAtIOi/nOeoi+aVsOaNru+8muS4jeS8oOmAkiBgcGlg44CBYHBzYCDkuKTkuKrlj4LmlbBcbiAgICovXG4gIGdldCBmaWx0ZXJlZERhdGEoKTogT2JzZXJ2YWJsZTxTVERhdGFbXT4ge1xuICAgIHJldHVybiB0aGlzLmxvYWREYXRhKHsgcGFnaW5hdG9yOiBmYWxzZSB9IGFzIHVua25vd24gYXMgU1REYXRhU291cmNlT3B0aW9ucykucGlwZShtYXAocmVzID0+IHJlcy5saXN0KSk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVRvdGFsVHBsKCk6IHZvaWQge1xuICAgIGNvbnN0IHsgdG90YWwgfSA9IHRoaXMucGFnZTtcbiAgICBpZiAodHlwZW9mIHRvdGFsID09PSAnc3RyaW5nJyAmJiB0b3RhbC5sZW5ndGgpIHtcbiAgICAgIHRoaXMudG90YWxUcGwgPSB0b3RhbDtcbiAgICB9IGVsc2UgaWYgKGJvb2xlYW5BdHRyaWJ1dGUodG90YWwpKSB7XG4gICAgICB0aGlzLnRvdGFsVHBsID0gdGhpcy5sb2NhbGUudG90YWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudG90YWxUcGwgPSAnJztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldExvYWRpbmcodmFsOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubG9hZGluZyA9PSBudWxsKSB7XG4gICAgICB0aGlzLl9sb2FkaW5nID0gdmFsO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbG9hZERhdGEob3B0aW9ucz86IFNURGF0YVNvdXJjZU9wdGlvbnMpOiBPYnNlcnZhYmxlPFNURGF0YVNvdXJjZVJlc3VsdD4ge1xuICAgIGNvbnN0IHsgcGksIHBzLCBkYXRhLCByZXEsIHJlcywgcGFnZSwgdG90YWwsIHNpbmdsZVNvcnQsIG11bHRpU29ydCwgcm93Q2xhc3NOYW1lIH0gPSB0aGlzO1xuICAgIHJldHVybiB0aGlzLmRhdGFTb3VyY2VcbiAgICAgIC5wcm9jZXNzKHtcbiAgICAgICAgcGksXG4gICAgICAgIHBzLFxuICAgICAgICB0b3RhbCxcbiAgICAgICAgZGF0YSxcbiAgICAgICAgcmVxLFxuICAgICAgICByZXMsXG4gICAgICAgIHBhZ2UsXG4gICAgICAgIGNvbHVtbnM6IHRoaXMuX2NvbHVtbnMsXG4gICAgICAgIHNpbmdsZVNvcnQsXG4gICAgICAgIG11bHRpU29ydCxcbiAgICAgICAgcm93Q2xhc3NOYW1lLFxuICAgICAgICBwYWdpbmF0b3I6IHRydWUsXG4gICAgICAgIGN1c3RvbVJlcXVlc3Q6IHRoaXMuY3VzdG9tUmVxdWVzdCB8fCB0aGlzLmNvZy5jdXN0b21SZXF1ZXN0LFxuICAgICAgICAuLi5vcHRpb25zXG4gICAgICB9KVxuICAgICAgLnBpcGUodGFrZVVudGlsRGVzdHJveWVkKHRoaXMuZGVzdHJveSQpKTtcbiAgfVxuXG4gIHByaXZhdGUgbG9hZFBhZ2VEYXRhKCk6IE9ic2VydmFibGU8dGhpcz4ge1xuICAgIHRoaXMuc2V0TG9hZGluZyh0cnVlKTtcbiAgICByZXR1cm4gdGhpcy5sb2FkRGF0YSgpLnBpcGUoXG4gICAgICBmaW5hbGl6ZSgoKSA9PiB0aGlzLnNldExvYWRpbmcoZmFsc2UpKSxcbiAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4ge1xuICAgICAgICB0aGlzLmVycm9yLmVtaXQoeyB0eXBlOiAncmVxJywgZXJyb3IgfSk7XG4gICAgICAgIHJldHVybiB0aHJvd0Vycm9yKCgpID0+IGVycm9yKTtcbiAgICAgIH0pLFxuICAgICAgbWFwKHJlc3VsdCA9PiB7XG4gICAgICAgIGNvbnN0IHVuZGVmaW5lZFN0cmluZyA9ICd1bmRlZmluZWQnO1xuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdC5waSAhPT0gdW5kZWZpbmVkU3RyaW5nKSB7XG4gICAgICAgICAgdGhpcy5waSA9IHJlc3VsdC5waTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdC5wcyAhPT0gdW5kZWZpbmVkU3RyaW5nKSB7XG4gICAgICAgICAgdGhpcy5wcyA9IHJlc3VsdC5wcztcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdC50b3RhbCAhPT0gdW5kZWZpbmVkU3RyaW5nKSB7XG4gICAgICAgICAgdGhpcy50b3RhbCA9IHJlc3VsdC50b3RhbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdC5wYWdlU2hvdyAhPT0gdW5kZWZpbmVkU3RyaW5nKSB7XG4gICAgICAgICAgdGhpcy5faXNQYWdpbmF0aW9uID0gcmVzdWx0LnBhZ2VTaG93O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2RhdGEgPSByZXN1bHQubGlzdCA/PyBbXTtcbiAgICAgICAgdGhpcy5fc3RhdGlzdGljYWwgPSByZXN1bHQuc3RhdGlzdGljYWwgYXMgU1RTdGF0aXN0aWNhbFJlc3VsdHM7XG4gICAgICAgIC8vIFNob3VsZCBiZSByZS1yZW5kZXIgaW4gbmV4dCB0aWtlIHdoZW4gdXNpbmcgdmlydHVhbCBzY3JvbGxcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL25nLWFsYWluL25nLWFsYWluL2lzc3Vlcy8xODM2XG4gICAgICAgIGlmICh0aGlzLmNka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydCAhPSBudWxsKSB7XG4gICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLmNka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydD8uY2hlY2tWaWV3cG9ydFNpemUoKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcmVmQ2hlY2soKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VFbWl0KCdsb2FkZWQnLCByZXN1bHQubGlzdCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqIOa4heepuuaJgOacieaVsOaNriAqL1xuICBjbGVhcihjbGVhblN0YXR1czogYm9vbGVhbiA9IHRydWUpOiB0aGlzIHtcbiAgICBpZiAoY2xlYW5TdGF0dXMpIHtcbiAgICAgIHRoaXMuY2xlYXJTdGF0dXMoKTtcbiAgICB9XG4gICAgdGhpcy5fZGF0YSA9IFtdO1xuICAgIHJldHVybiB0aGlzLmNkKCk7XG4gIH1cblxuICAvKiog5riF56m65omA5pyJ54q25oCBICovXG4gIGNsZWFyU3RhdHVzKCk6IHRoaXMge1xuICAgIHJldHVybiB0aGlzLmNsZWFyQ2hlY2soKS5jbGVhclJhZGlvKCkuY2xlYXJGaWx0ZXIoKS5jbGVhclNvcnQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmoLnmja7pobXnoIHph43mlrDliqDovb3mlbDmja5cbiAgICpcbiAgICogQHBhcmFtIHBpIOaMh+WumuW9k+WJjemhteegge+8jOm7mOiupO+8mmAxYFxuICAgKiBAcGFyYW0gZXh0cmFQYXJhbXMg6YeN5paw5oyH5a6aIGBleHRyYVBhcmFtc2Ag5YC8XG4gICAqIEBwYXJhbSBvcHRpb25zIOmAiemhuVxuICAgKi9cbiAgbG9hZChwaTogbnVtYmVyID0gMSwgZXh0cmFQYXJhbXM/OiBOelNhZmVBbnksIG9wdGlvbnM/OiBTVExvYWRPcHRpb25zKTogdGhpcyB7XG4gICAgaWYgKHBpICE9PSAtMSkgdGhpcy5waSA9IHBpO1xuICAgIGlmICh0eXBlb2YgZXh0cmFQYXJhbXMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlcS5wYXJhbXMgPSBvcHRpb25zICYmIG9wdGlvbnMubWVyZ2UgPyB7IC4uLnRoaXMucmVxLnBhcmFtcywgLi4uZXh0cmFQYXJhbXMgfSA6IGV4dHJhUGFyYW1zO1xuICAgIH1cbiAgICB0aGlzLl9jaGFuZ2UoJ3BpJywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICog6YeN5paw5Yi35paw5b2T5YmN6aG1XG4gICAqXG4gICAqIEBwYXJhbSBleHRyYVBhcmFtcyDph43mlrDmjIflrpogYGV4dHJhUGFyYW1zYCDlgLxcbiAgICovXG4gIHJlbG9hZChleHRyYVBhcmFtcz86IE56U2FmZUFueSwgb3B0aW9ucz86IFNUTG9hZE9wdGlvbnMpOiB0aGlzIHtcbiAgICByZXR1cm4gdGhpcy5sb2FkKC0xLCBleHRyYVBhcmFtcywgb3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICog6YeN572u5LiU6YeN5paw6K6+572uIGBwaWAg5Li6IGAxYO+8jOWMheWQq+S7peS4i+WAvO+8mlxuICAgKiAtIGBjaGVja2Ag5pWw5o2uXG4gICAqIC0gYHJhZGlvYCDmlbDmja5cbiAgICogLSBgc29ydGAg5pWw5o2uXG4gICAqIC0gYGZpbGV0ZXJgIOaVsOaNrlxuICAgKlxuICAgKiBAcGFyYW0gZXh0cmFQYXJhbXMg6YeN5paw5oyH5a6aIGBleHRyYVBhcmFtc2Ag5YC8XG4gICAqL1xuICByZXNldChleHRyYVBhcmFtcz86IE56U2FmZUFueSwgb3B0aW9ucz86IFNUTG9hZE9wdGlvbnMpOiB0aGlzIHtcbiAgICB0aGlzLmNsZWFyU3RhdHVzKCkubG9hZCgxLCBleHRyYVBhcmFtcywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcml2YXRlIF90b1RvcChlbmZvcmNlPzogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICghKGVuZm9yY2UgPT0gbnVsbCA/IHRoaXMucGFnZS50b1RvcCA6IGVuZm9yY2UpKSByZXR1cm47XG4gICAgY29uc3QgZWwgPSB0aGlzLmVsO1xuICAgIGVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgLy8gZml4IGhlYWRlciBoZWlnaHRcbiAgICB0aGlzLmRvYy5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIC09IHRoaXMucGFnZS50b1RvcE9mZnNldCE7XG4gICAgaWYgKHRoaXMuc2Nyb2xsKSB7XG4gICAgICBpZiAodGhpcy5jZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQpIHtcbiAgICAgICAgdGhpcy5jZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQuc2Nyb2xsVG8oe1xuICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICBsZWZ0OiAwXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWwucXVlcnlTZWxlY3RvcignLmFudC10YWJsZS1ib2R5LCAuYW50LXRhYmxlLWNvbnRlbnQnKT8uc2Nyb2xsVG8oMCwgMCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX2NoYW5nZSh0eXBlOiAncGknIHwgJ3BzJywgb3B0aW9ucz86IFNUTG9hZE9wdGlvbnMpOiB2b2lkIHtcbiAgICBpZiAodHlwZSA9PT0gJ3BpJyB8fCAodHlwZSA9PT0gJ3BzJyAmJiB0aGlzLnBpIDw9IE1hdGguY2VpbCh0aGlzLnRvdGFsIC8gdGhpcy5wcykpKSB7XG4gICAgICB0aGlzLmxvYWRQYWdlRGF0YSgpLnN1YnNjcmliZSgoKSA9PiB0aGlzLl90b1RvcChvcHRpb25zPy50b1RvcCkpO1xuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlRW1pdCh0eXBlKTtcbiAgfVxuXG4gIHByaXZhdGUgY2xvc2VPdGhlckV4cGFuZChpdGVtOiBTVERhdGEpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5leHBhbmRBY2NvcmRpb24gPT09IGZhbHNlKSByZXR1cm47XG4gICAgdGhpcy5fZGF0YS5maWx0ZXIoaSA9PiBpICE9PSBpdGVtKS5mb3JFYWNoKGkgPT4gKGkuZXhwYW5kID0gZmFsc2UpKTtcbiAgfVxuXG4gIF9yb3dDbGljayhlOiBFdmVudCwgaXRlbTogU1REYXRhLCBpbmRleDogbnVtYmVyLCBkYmw6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBjb25zdCBlbCA9IGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgIGlmIChlbC5ub2RlTmFtZSA9PT0gJ0lOUFVUJykgcmV0dXJuO1xuICAgIGNvbnN0IHsgZXhwYW5kLCBleHBhbmRSb3dCeUNsaWNrIH0gPSB0aGlzO1xuICAgIGlmICghIWV4cGFuZCAmJiBpdGVtLnNob3dFeHBhbmQgIT09IGZhbHNlICYmIGV4cGFuZFJvd0J5Q2xpY2spIHtcbiAgICAgIGl0ZW0uZXhwYW5kID0gIWl0ZW0uZXhwYW5kO1xuICAgICAgdGhpcy5jbG9zZU90aGVyRXhwYW5kKGl0ZW0pO1xuICAgICAgdGhpcy5jaGFuZ2VFbWl0KCdleHBhbmQnLCBpdGVtKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkYXRhID0geyBlLCBpdGVtLCBpbmRleCB9O1xuICAgIGlmIChkYmwpIHtcbiAgICAgIHRoaXMuY2hhbmdlRW1pdCgnZGJsQ2xpY2snLCBkYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY2xpY2tSb3dDbGFzc05hbWUoZWwsIGl0ZW0sIGluZGV4KTtcbiAgICAgIHRoaXMuY2hhbmdlRW1pdCgnY2xpY2snLCBkYXRhKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jbGlja1Jvd0NsYXNzTmFtZShlbDogSFRNTEVsZW1lbnQsIGl0ZW06IFNURGF0YSwgaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IGNyID0gdGhpcy5jbGlja1Jvd0NsYXNzTmFtZTtcbiAgICBpZiAoY3IgPT0gbnVsbCkgcmV0dXJuO1xuICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgIGV4Y2x1c2l2ZTogZmFsc2UsXG4gICAgICAuLi4odHlwZW9mIGNyID09PSAnc3RyaW5nJyA/IHsgZm46ICgpID0+IGNyIH0gOiBjcilcbiAgICB9IGFzIFNUQ2xpY2tSb3dDbGFzc05hbWVUeXBlO1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IGNvbmZpZy5mbihpdGVtLCBpbmRleCk7XG4gICAgY29uc3QgdHJFbCA9IGVsLmNsb3Nlc3QoJ3RyJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgaWYgKGNvbmZpZy5leGNsdXNpdmUpIHtcbiAgICAgIHRyRWwucGFyZW50RWxlbWVudCEhLnF1ZXJ5U2VsZWN0b3JBbGwoJ3RyJykuZm9yRWFjaCgoYTogSFRNTEVsZW1lbnQpID0+IGEuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpKTtcbiAgICB9XG4gICAgaWYgKHRyRWwuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkpIHtcbiAgICAgIHRyRWwuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0ckVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICB9XG4gIH1cblxuICBfZXhwYW5kQ2hhbmdlKGl0ZW06IFNURGF0YSwgZXhwYW5kOiBib29sZWFuKTogdm9pZCB7XG4gICAgaXRlbS5leHBhbmQgPSBleHBhbmQ7XG4gICAgdGhpcy5jbG9zZU90aGVyRXhwYW5kKGl0ZW0pO1xuICAgIHRoaXMuY2hhbmdlRW1pdCgnZXhwYW5kJywgaXRlbSk7XG4gIH1cblxuICBfc3RvcFByb3BhZ2F0aW9uKGV2OiBFdmVudCk6IHZvaWQge1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVmQ29sQW5kRGF0YSgpOiB0aGlzIHtcbiAgICB0aGlzLl9jb2x1bW5zLmZvckVhY2goYyA9PiB7XG4gICAgICB0aGlzLl9kYXRhLmZvckVhY2goKGksIGlkeCkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSBpLl92YWx1ZXMgYXMgX1NURGF0YVZhbHVlW107XG4gICAgICAgIGlmIChjLnR5cGUgPT09ICdubycpIHtcbiAgICAgICAgICBjb25zdCB0ZXh0ID0gYCR7dGhpcy5kYXRhU291cmNlLmdldE5vSW5kZXgoaSwgYywgaWR4KX1gO1xuICAgICAgICAgIHZhbHVlc1tjLl9fcG9pbnQhXSA9IHtcbiAgICAgICAgICAgIHRleHQsXG4gICAgICAgICAgICBfdGV4dDogdGV4dCxcbiAgICAgICAgICAgIG9yZzogaWR4LFxuICAgICAgICAgICAgc2FmZVR5cGU6ICd0ZXh0J1xuICAgICAgICAgIH0gYXMgX1NURGF0YVZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHZhbHVlc1tjLl9fcG9pbnQhXS5wcm9wcyA9IHRoaXMuZGF0YVNvdXJjZS5nZXRDZWxsKGMsIGksIGlkeCk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLnJlZnJlc2hEYXRhKCk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgcm93cyBpbiB0aGUgdGFibGUsIGxpa2UgdGhpczpcbiAgICpcbiAgICogYGBgXG4gICAqIHRoaXMuc3QuYWRkUm93KHN0RGF0YUl0ZW0pXG4gICAqIGBgYFxuICAgKlxuICAgKiAqKlRJUFM6KiogRG9uJ3QgY2hhbmdlIHRoZSBgdG90YWxgIHZhbHVlLCBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhlIGByZWxvYWRgIG1ldGhvZCBpZiBuZWVkZWRcbiAgICovXG4gIGFkZFJvdyhkYXRhOiBTVERhdGEgfCBTVERhdGFbXSwgb3B0aW9ucz86IHsgaW5kZXg/OiBudW1iZXIgfSk6IHRoaXMge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShkYXRhKSkgZGF0YSA9IFtkYXRhXTtcbiAgICB0aGlzLl9kYXRhLnNwbGljZShvcHRpb25zPy5pbmRleCA/PyAwLCAwLCAuLi4oZGF0YSBhcyBTVERhdGFbXSkpO1xuICAgIHJldHVybiB0aGlzLm9wdGltaXplRGF0YSgpLl9yZWZDb2xBbmREYXRhKCk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGEgcm93IGluIHRoZSB0YWJsZSwgbGlrZSB0aGlzOlxuICAgKlxuICAgKiBgYGBcbiAgICogdGhpcy5zdC5yZW1vdmVSb3coMClcbiAgICogdGhpcy5zdC5yZW1vdmVSb3coc3REYXRhSXRlbSlcbiAgICogYGBgXG4gICAqXG4gICAqICoqVElQUzoqKiBEb24ndCBjaGFuZ2UgdGhlIGB0b3RhbGAgdmFsdWUsIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGUgYHJlbG9hZGAgbWV0aG9kIGlmIG5lZWRlZFxuICAgKi9cbiAgcmVtb3ZlUm93KGRhdGE6IFNURGF0YSB8IFNURGF0YVtdIHwgbnVtYmVyKTogdGhpcyB7XG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnbnVtYmVyJykge1xuICAgICAgdGhpcy5fZGF0YS5zcGxpY2UoZGF0YSwgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICBkYXRhID0gW2RhdGFdO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjdXJEYXRhID0gdGhpcy5fZGF0YTtcbiAgICAgIGZvciAodmFyIGkgPSBjdXJEYXRhLmxlbmd0aDsgaS0tOyApIHtcbiAgICAgICAgaWYgKGRhdGEuaW5kZXhPZihjdXJEYXRhW2ldKSAhPT0gLTEpIHtcbiAgICAgICAgICBjdXJEYXRhLnNwbGljZShpLCAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fcmVmQ2hlY2soKS5fcmVmQ29sQW5kRGF0YSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHJvdyB2YWx1ZSBmb3IgdGhlIGBpbmRleGAgaW4gdGhlIHRhYmxlLCBsaWtlIHRoaXM6XG4gICAqXG4gICAqIC0gYG9wdGlub3MucmVmcmVzaFNjaGVtYWAgV2hldGhlciB0byByZWZyZXNoIG9mIHN0IHNjaGVtYXNcbiAgICogLSBgb3B0aW5vcy5lbWl0UmVsb2FkYCBXaGV0aGVyIHRvIHRyaWdnZXIgYSByZWxvYWQgaHR0cCByZXF1ZXN0IHdoZW4gZGF0YSBpcyB1cmxcbiAgICpcbiAgICogYGBgXG4gICAqIHRoaXMuc3Quc2V0Um93KDAsIHsgcHJpY2U6IDEwMCB9KVxuICAgKiB0aGlzLnN0LnNldFJvdygwLCB7IHByaWNlOiAxMDAsIG5hbWU6ICdhc2RmJyB9KVxuICAgKiB0aGlzLnN0LnNldFJvdyhpdGVtLCB7IHByaWNlOiAxMDAgfSlcbiAgICogYGBgXG4gICAqL1xuICBzZXRSb3coaW5kZXg6IG51bWJlciB8IFNURGF0YSwgaXRlbTogU1REYXRhLCBvcHRpb25zPzogeyByZWZyZXNoU2NoZW1hPzogYm9vbGVhbjsgZW1pdFJlbG9hZD86IGJvb2xlYW4gfSk6IHRoaXMge1xuICAgIG9wdGlvbnMgPSB7IHJlZnJlc2hTY2hlbWE6IGZhbHNlLCBlbWl0UmVsb2FkOiBmYWxzZSwgLi4ub3B0aW9ucyB9O1xuICAgIGlmICh0eXBlb2YgaW5kZXggIT09ICdudW1iZXInKSB7XG4gICAgICBpbmRleCA9IHRoaXMuX2RhdGEuaW5kZXhPZihpbmRleCk7XG4gICAgfVxuICAgIHRoaXMuX2RhdGFbaW5kZXhdID0gZGVlcE1lcmdlS2V5KHRoaXMuX2RhdGFbaW5kZXhdLCBmYWxzZSwgaXRlbSk7XG4gICAgdGhpcy5vcHRpbWl6ZURhdGEoKTtcbiAgICBpZiAob3B0aW9ucy5yZWZyZXNoU2NoZW1hKSB7XG4gICAgICB0aGlzLnJlc2V0Q29sdW1ucyh7IGVtaXRSZWxvYWQ6IG9wdGlvbnMuZW1pdFJlbG9hZCB9KTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5yZWZyZXNoRGF0YSgpO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gc29ydFxuXG4gIHNvcnQoY29sOiBfU1RDb2x1bW4sIGlkeDogbnVtYmVyLCB2YWx1ZTogTnpTYWZlQW55KTogdm9pZCB7XG4gICAgaWYgKHRoaXMubXVsdGlTb3J0KSB7XG4gICAgICBjb2wuX3NvcnQuZGVmYXVsdCA9IHZhbHVlO1xuICAgICAgY29sLl9zb3J0LnRpY2sgPSB0aGlzLmRhdGFTb3VyY2UubmV4dFNvcnRUaWNrO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9jb2x1bW5zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiAoaXRlbS5fc29ydC5kZWZhdWx0ID0gaW5kZXggPT09IGlkeCA/IHZhbHVlIDogbnVsbCkpO1xuICAgIH1cbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgdGhpcy5sb2FkUGFnZURhdGEoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgY29uc3QgcmVzID0ge1xuICAgICAgICB2YWx1ZSxcbiAgICAgICAgbWFwOiB0aGlzLmRhdGFTb3VyY2UuZ2V0UmVxU29ydE1hcCh0aGlzLnNpbmdsZVNvcnQsIHRoaXMubXVsdGlTb3J0LCB0aGlzLl9jb2x1bW5zKSxcbiAgICAgICAgY29sdW1uOiBjb2xcbiAgICAgIH07XG4gICAgICB0aGlzLmNoYW5nZUVtaXQoJ3NvcnQnLCByZXMpO1xuICAgIH0pO1xuICB9XG5cbiAgY2xlYXJTb3J0KCk6IHRoaXMge1xuICAgIHRoaXMuX2NvbHVtbnMuZm9yRWFjaChpdGVtID0+IChpdGVtLl9zb3J0LmRlZmF1bHQgPSBudWxsKSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiBmaWx0ZXJcblxuICBfaGFuZGxlRmlsdGVyKGNvbDogX1NUQ29sdW1uLCBjb25maXJtOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKCFjb25maXJtKSB7XG4gICAgICB0aGlzLmNvbHVtblNvdXJjZS5jbGVhbkZpbHRlcihjb2wpO1xuICAgIH1cbiAgICAvLyDov4fmu6TooajnpLrkuIDnp43mlbDmja7nmoTlj5jljJblupTph43nva7pobXnoIHkuLogYDFgXG4gICAgdGhpcy5waSA9IDE7XG4gICAgdGhpcy5jb2x1bW5Tb3VyY2UudXBkYXRlRGVmYXVsdChjb2wuZmlsdGVyISk7XG4gICAgdGhpcy5sb2FkUGFnZURhdGEoKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jaGFuZ2VFbWl0KCdmaWx0ZXInLCBjb2wpKTtcbiAgfVxuXG4gIGhhbmRsZUZpbHRlck5vdGlmeSh2YWx1ZT86IHVua25vd24pOiB2b2lkIHtcbiAgICB0aGlzLmNoYW5nZUVtaXQoJ2ZpbHRlckNoYW5nZScsIHZhbHVlKTtcbiAgfVxuXG4gIGNsZWFyRmlsdGVyKCk6IHRoaXMge1xuICAgIHRoaXMuX2NvbHVtbnMuZmlsdGVyKHcgPT4gdy5maWx0ZXIgJiYgdy5maWx0ZXIuZGVmYXVsdCA9PT0gdHJ1ZSkuZm9yRWFjaChjb2wgPT4gdGhpcy5jb2x1bW5Tb3VyY2UuY2xlYW5GaWx0ZXIoY29sKSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gY2hlY2tib3hcblxuICAvKiog5riF6Zmk5omA5pyJIGBjaGVja2JveGAgKi9cbiAgY2xlYXJDaGVjaygpOiB0aGlzIHtcbiAgICByZXR1cm4gdGhpcy5jaGVja0FsbChmYWxzZSk7XG4gIH1cblxuICBwcml2YXRlIF9yZWZDaGVjaygpOiB0aGlzIHtcbiAgICBjb25zdCB2YWxpZERhdGEgPSB0aGlzLl9kYXRhLmZpbHRlcih3ID0+ICF3LmRpc2FibGVkKTtcbiAgICBjb25zdCBjaGVja2VkTGlzdCA9IHZhbGlkRGF0YS5maWx0ZXIodyA9PiB3LmNoZWNrZWQgPT09IHRydWUpO1xuICAgIHRoaXMuX2FsbENoZWNrZWQgPSBjaGVja2VkTGlzdC5sZW5ndGggPiAwICYmIGNoZWNrZWRMaXN0Lmxlbmd0aCA9PT0gdmFsaWREYXRhLmxlbmd0aDtcbiAgICBjb25zdCBhbGxVbkNoZWNrZWQgPSB2YWxpZERhdGEuZXZlcnkodmFsdWUgPT4gIXZhbHVlLmNoZWNrZWQpO1xuICAgIHRoaXMuX2luZGV0ZXJtaW5hdGUgPSAhdGhpcy5fYWxsQ2hlY2tlZCAmJiAhYWxsVW5DaGVja2VkO1xuICAgIHRoaXMuX2FsbENoZWNrZWREaXNhYmxlZCA9IHRoaXMuX2RhdGEubGVuZ3RoID09PSB0aGlzLl9kYXRhLmZpbHRlcih3ID0+IHcuZGlzYWJsZWQpLmxlbmd0aDtcbiAgICByZXR1cm4gdGhpcy5jZCgpO1xuICB9XG5cbiAgY2hlY2tBbGwoY2hlY2tlZD86IGJvb2xlYW4pOiB0aGlzIHtcbiAgICBjaGVja2VkID0gdHlwZW9mIGNoZWNrZWQgPT09ICd1bmRlZmluZWQnID8gdGhpcy5fYWxsQ2hlY2tlZCA6IGNoZWNrZWQ7XG4gICAgdGhpcy5fZGF0YS5maWx0ZXIodyA9PiAhdy5kaXNhYmxlZCkuZm9yRWFjaChpID0+IChpLmNoZWNrZWQgPSBjaGVja2VkKSk7XG4gICAgcmV0dXJuIHRoaXMuX3JlZkNoZWNrKCkuX2NoZWNrTm90aWZ5KCkucmVmcmVzaERhdGEoKTtcbiAgfVxuXG4gIF9yb3dTZWxlY3Rpb24ocm93OiBTVENvbHVtblNlbGVjdGlvbik6IHRoaXMge1xuICAgIHJvdy5zZWxlY3QodGhpcy5fZGF0YSk7XG4gICAgcmV0dXJuIHRoaXMuX3JlZkNoZWNrKCkuX2NoZWNrTm90aWZ5KCk7XG4gIH1cblxuICBfY2hlY2tOb3RpZnkoKTogdGhpcyB7XG4gICAgY29uc3QgcmVzID0gdGhpcy5fZGF0YS5maWx0ZXIodyA9PiAhdy5kaXNhYmxlZCAmJiB3LmNoZWNrZWQgPT09IHRydWUpO1xuICAgIHRoaXMuY2hhbmdlRW1pdCgnY2hlY2tib3gnLCByZXMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gcmFkaW9cblxuICAvKiog5riF6Zmk5omA5pyJIGByYWRpb2AgKi9cbiAgY2xlYXJSYWRpbygpOiB0aGlzIHtcbiAgICB0aGlzLl9kYXRhLmZpbHRlcih3ID0+IHcuY2hlY2tlZCkuZm9yRWFjaChpdGVtID0+IChpdGVtLmNoZWNrZWQgPSBmYWxzZSkpO1xuICAgIHRoaXMuY2hhbmdlRW1pdCgncmFkaW8nLCBudWxsKTtcbiAgICByZXR1cm4gdGhpcy5yZWZyZXNoRGF0YSgpO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIF9oYW5kbGVUZChldjogX1NUVGROb3RpZnkpOiB2b2lkIHtcbiAgICBzd2l0Y2ggKGV2LnR5cGUpIHtcbiAgICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgICAgdGhpcy5fcmVmQ2hlY2soKS5fY2hlY2tOb3RpZnkoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdyYWRpbyc6XG4gICAgICAgIHRoaXMuY2hhbmdlRW1pdCgncmFkaW8nLCBldi5pdGVtKTtcbiAgICAgICAgdGhpcy5yZWZyZXNoRGF0YSgpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICAvLyAjcmVnaW9uIGV4cG9ydFxuXG4gIC8qKlxuICAgKiDlr7zlh7rlvZPliY3pobXvvIznoa7kv53lt7Lnu4/ms6jlhowgYFhsc3hNb2R1bGVgXG4gICAqXG4gICAqIEBwYXJhbSBuZXdEYXRhIOmHjeaWsOaMh+WumuaVsOaNru+8m+iLpeS4uiBgdHJ1ZWAg6KGo56S65L2/55SoIGBmaWx0ZXJlZERhdGFgIOaVsOaNrlxuICAgKiBAcGFyYW0gb3B0IOmineWkluWPguaVsFxuICAgKi9cbiAgZXhwb3J0KG5ld0RhdGE/OiBTVERhdGFbXSB8IHRydWUsIG9wdD86IFNURXhwb3J0T3B0aW9ucyk6IHZvaWQge1xuICAgIGNvbnN0IGRhdGEgPSBBcnJheS5pc0FycmF5KG5ld0RhdGEpXG4gICAgICA/IHRoaXMuZGF0YVNvdXJjZS5vcHRpbWl6ZURhdGEoeyBjb2x1bW5zOiB0aGlzLl9jb2x1bW5zLCByZXN1bHQ6IG5ld0RhdGEgfSlcbiAgICAgIDogdGhpcy5fZGF0YTtcbiAgICAobmV3RGF0YSA9PT0gdHJ1ZSA/IHRoaXMuZmlsdGVyZWREYXRhIDogb2YoZGF0YSkpLnN1YnNjcmliZSgocmVzOiBTVERhdGFbXSkgPT5cbiAgICAgIHRoaXMuZXhwb3J0U3J2LmV4cG9ydCh7XG4gICAgICAgIGNvbHVtZW5zOiB0aGlzLl9jb2x1bW5zLFxuICAgICAgICAuLi5vcHQsXG4gICAgICAgIGRhdGE6IHJlc1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gcmVzaXphYmxlXG5cbiAgY29sUmVzaXplKHsgd2lkdGggfTogTnpSZXNpemVFdmVudCwgY29sdW1uOiBfU1RDb2x1bW4pOiB2b2lkIHtcbiAgICBjb2x1bW4ud2lkdGggPSBgJHt3aWR0aH1weGA7XG4gICAgdGhpcy5jaGFuZ2VFbWl0KCdyZXNpemUnLCBjb2x1bW4pO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gY29udGV4dG1lbnVcbiAgb25Db250ZXh0bWVudShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5jb250ZXh0bWVudSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IGNvbEVsID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCkuY2xvc2VzdCgnW2RhdGEtY29sLWluZGV4XScpIGFzIEhUTUxFbGVtZW50O1xuICAgIGlmICghY29sRWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY29sSW5kZXggPSBOdW1iZXIoY29sRWwuZGF0YXNldC5jb2xJbmRleCk7XG4gICAgY29uc3Qgcm93SW5kZXggPSBOdW1iZXIoKGNvbEVsLmNsb3Nlc3QoJ3RyJykgYXMgSFRNTEVsZW1lbnQpLmRhdGFzZXQuaW5kZXgpO1xuICAgIGNvbnN0IGlzVGl0bGUgPSBpc05hTihyb3dJbmRleCk7XG4gICAgY29uc3Qgb2JzJCA9IHRoaXMuY29udGV4dG1lbnUoe1xuICAgICAgZXZlbnQsXG4gICAgICB0eXBlOiBpc1RpdGxlID8gJ2hlYWQnIDogJ2JvZHknLFxuICAgICAgcm93SW5kZXg6IGlzVGl0bGUgPyBudWxsIDogcm93SW5kZXgsXG4gICAgICBjb2xJbmRleCxcbiAgICAgIGRhdGE6IGlzVGl0bGUgPyBudWxsIDogdGhpcy5saXN0W3Jvd0luZGV4XSxcbiAgICAgIGNvbHVtbjogdGhpcy5fY29sdW1uc1tjb2xJbmRleF1cbiAgICB9KTtcbiAgICAoaXNPYnNlcnZhYmxlKG9icyQpID8gb2JzJCA6IG9mKG9icyQpKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRha2VVbnRpbERlc3Ryb3llZCh0aGlzLmRlc3Ryb3kkKSxcbiAgICAgICAgZmlsdGVyKHJlcyA9PiByZXMubGVuZ3RoID4gMClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgdGhpcy5jb250ZXh0bWVudUxpc3QgPSByZXMubWFwKGkgPT4ge1xuICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShpLmNoaWxkcmVuKSkge1xuICAgICAgICAgICAgaS5jaGlsZHJlbiA9IFtdO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgdGhpcy5jbXMuY3JlYXRlKGV2ZW50LCB0aGlzLmNvbnRleHRtZW51VHBsKTtcbiAgICAgIH0pO1xuICB9XG4gIC8vICNlbmRyZWdpb25cblxuICBnZXQgY2RrVmlydHVhbFNjcm9sbFZpZXdwb3J0KCk6IENka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMub3JnVGFibGU/LmNka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydDtcbiAgfVxuXG4gIHByaXZhdGUgX3Jlc2V0Q29sdW1ucyhvcHRpb25zPzogU1RSZXNldENvbHVtbnNPcHRpb24pOiBPYnNlcnZhYmxlPHRoaXM+IHtcbiAgICBvcHRpb25zID0geyBlbWl0UmVsb2FkOiB0cnVlLCBwcmVDbGVhckRhdGE6IGZhbHNlLCAuLi5vcHRpb25zIH07XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLmNvbHVtbnMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLmNvbHVtbnMgPSBvcHRpb25zLmNvbHVtbnM7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5waSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucGkgPSBvcHRpb25zLnBpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMucHMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnBzID0gb3B0aW9ucy5wcztcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuZW1pdFJlbG9hZCkge1xuICAgICAgLy8gU2hvdWxkIGNsZWFuIGRhdGEsIEJlY2F1c2Ugb2YgY2hhbmdpbmcgY29sdW1ucyBtYXkgY2F1c2UgaW5hY2N1cmF0ZSBkYXRhXG4gICAgICBvcHRpb25zLnByZUNsZWFyRGF0YSA9IHRydWU7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLnByZUNsZWFyRGF0YSkge1xuICAgICAgdGhpcy5fZGF0YSA9IFtdO1xuICAgIH1cbiAgICB0aGlzLnJlZnJlc2hDb2x1bW5zKCk7XG4gICAgaWYgKG9wdGlvbnMuZW1pdFJlbG9hZCkge1xuICAgICAgcmV0dXJuIHRoaXMubG9hZFBhZ2VEYXRhKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2QoKTtcbiAgICAgIHJldHVybiBvZih0aGlzKTtcbiAgICB9XG4gIH1cblxuICByZXNldENvbHVtbnMob3B0aW9ucz86IFNUUmVzZXRDb2x1bW5zT3B0aW9uKTogUHJvbWlzZTx0aGlzPiB7XG4gICAgcmV0dXJuIGxhc3RWYWx1ZUZyb20odGhpcy5fcmVzZXRDb2x1bW5zKG9wdGlvbnMpKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVmcmVzaENvbHVtbnMoKTogdGhpcyB7XG4gICAgY29uc3QgcmVzID0gdGhpcy5jb2x1bW5Tb3VyY2UucHJvY2Vzcyh0aGlzLmNvbHVtbnMgYXMgX1NUQ29sdW1uW10sIHtcbiAgICAgIHdpZHRoTW9kZTogdGhpcy53aWR0aE1vZGUsXG4gICAgICByZXNpemFibGU6IHRoaXMuX3Jlc2l6YWJsZSxcbiAgICAgIHNhZmVUeXBlOiB0aGlzLmNvZy5zYWZlVHlwZSBhcyBTVENvbHVtblNhZmVUeXBlXG4gICAgfSk7XG4gICAgdGhpcy5fY29sdW1ucyA9IHJlcy5jb2x1bW5zO1xuICAgIHRoaXMuX2hlYWRlcnMgPSByZXMuaGVhZGVycztcbiAgICBpZiAodGhpcy5jdXN0b21XaWR0aENvbmZpZyA9PT0gZmFsc2UgJiYgcmVzLmhlYWRlcldpZHRocyAhPSBudWxsKSB7XG4gICAgICB0aGlzLl93aWR0aENvbmZpZyA9IHJlcy5oZWFkZXJXaWR0aHM7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJpdmF0ZSBvcHRpbWl6ZURhdGEoKTogdGhpcyB7XG4gICAgdGhpcy5fZGF0YSA9IHRoaXMuZGF0YVNvdXJjZS5vcHRpbWl6ZURhdGEoe1xuICAgICAgY29sdW1uczogdGhpcy5fY29sdW1ucyxcbiAgICAgIHJlc3VsdDogdGhpcy5fZGF0YSxcbiAgICAgIHJvd0NsYXNzTmFtZTogdGhpcy5yb3dDbGFzc05hbWVcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gcHVyZSBkYXRhLCBgc3RgIGludGVybmFsbHkgbWFpbnRhaW5zIGEgc2V0IG9mIGRhdGEgZm9yIGNhY2hpbmcsIHRoaXMgcGFydCBvZiBkYXRhIG1heSBhZmZlY3QgdGhlIGJhY2tlbmRcbiAgICpcbiAgICog6L+U5Zue57qv5YeA5pWw5o2u77yMYHN0YCDlhoXpg6jkvJrnu7TmiqTkuIDnu4TnlKjkuo7nvJPlrZjnmoTmlbDmja7vvIzov5npg6jliIbmlbDmja7lj6/og73kvJrlvbHlk43lkI7nq69cbiAgICovXG4gIHB1cmVJdGVtKGl0ZW1PckluZGV4OiBTVERhdGEgfCBudW1iZXIpOiBTVERhdGEgfCBudWxsIHtcbiAgICBpZiAodHlwZW9mIGl0ZW1PckluZGV4ID09PSAnbnVtYmVyJykge1xuICAgICAgaXRlbU9ySW5kZXggPSB0aGlzLl9kYXRhW2l0ZW1PckluZGV4XTtcbiAgICB9XG4gICAgaWYgKCFpdGVtT3JJbmRleCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IGNvcHlJdGVtID0gZGVlcENvcHkoaXRlbU9ySW5kZXgpO1xuICAgIFsnX3ZhbHVlcycsICdfcm93Q2xhc3NOYW1lJ10uZm9yRWFjaChrZXkgPT4gZGVsZXRlIGNvcHlJdGVtW2tleV0pO1xuICAgIHJldHVybiBjb3B5SXRlbTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlZnJlc2hDb2x1bW5zKCk7XG4gICAgaWYgKCF0aGlzLnJlcS5sYXp5TG9hZCkgdGhpcy5sb2FkUGFnZURhdGEoKS5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLmluaWVkID0gdHJ1ZTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW1AgaW4ga2V5b2YgdGhpc10/OiBTaW1wbGVDaGFuZ2UgfSAmIFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5sb2FkaW5nKSB7XG4gICAgICB0aGlzLl9sb2FkaW5nID0gY2hhbmdlcy5sb2FkaW5nLmN1cnJlbnRWYWx1ZTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmluaWVkKSByZXR1cm47XG5cbiAgICBpZiAoY2hhbmdlcy5jb2x1bW5zKSB7XG4gICAgICB0aGlzLnJlZnJlc2hDb2x1bW5zKCkub3B0aW1pemVEYXRhKCk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLmRhdGEpIHtcbiAgICAgIHRoaXMubG9hZFBhZ2VEYXRhKCkuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N0LXRkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0LXRkLmNvbXBvbmVudC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFNUVGRDb21wb25lbnQge1xuICBwcml2YXRlIHJlYWRvbmx5IHN0Q29tcCA9IGluamVjdChTVENvbXBvbmVudCwgeyBob3N0OiB0cnVlIH0pO1xuICBwcml2YXRlIHJlYWRvbmx5IHJvdXRlciA9IGluamVjdChSb3V0ZXIpO1xuICBwcml2YXRlIHJlYWRvbmx5IG1vZGFsSGVscGVyID0gaW5qZWN0KE1vZGFsSGVscGVyKTtcbiAgcHJpdmF0ZSByZWFkb25seSBkcmF3ZXJIZWxwZXIgPSBpbmplY3QoRHJhd2VySGVscGVyKTtcblxuICBASW5wdXQoKSBjITogX1NUQ29sdW1uO1xuICBASW5wdXQoKSBjSWR4ITogbnVtYmVyO1xuICBASW5wdXQoKSBkYXRhITogU1REYXRhW107XG4gIEBJbnB1dCgpIGkhOiBTVERhdGE7XG4gIEBJbnB1dCgpIGluZGV4ITogbnVtYmVyO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbiA9IG5ldyBFdmVudEVtaXR0ZXI8X1NUVGROb3RpZnk+KCk7XG5cbiAgcHJpdmF0ZSBnZXQgcm91dGVyU3RhdGUoKTogeyBwaTogbnVtYmVyOyBwczogbnVtYmVyOyB0b3RhbDogbnVtYmVyIH0ge1xuICAgIGNvbnN0IHsgcGksIHBzLCB0b3RhbCB9ID0gdGhpcy5zdENvbXA7XG4gICAgcmV0dXJuIHsgcGksIHBzLCB0b3RhbCB9O1xuICB9XG5cbiAgcHJpdmF0ZSByZXBvcnQodHlwZTogX1NUVGROb3RpZnlUeXBlKTogdm9pZCB7XG4gICAgdGhpcy5uLmVtaXQoeyB0eXBlLCBpdGVtOiB0aGlzLmksIGNvbDogdGhpcy5jIH0pO1xuICB9XG5cbiAgX2NoZWNrYm94KHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5pLmNoZWNrZWQgPSB2YWx1ZTtcbiAgICB0aGlzLnJlcG9ydCgnY2hlY2tib3gnKTtcbiAgfVxuXG4gIF9yYWRpbygpOiB2b2lkIHtcbiAgICB0aGlzLmRhdGEuZmlsdGVyKHcgPT4gIXcuZGlzYWJsZWQpLmZvckVhY2goaSA9PiAoaS5jaGVja2VkID0gZmFsc2UpKTtcbiAgICB0aGlzLmkuY2hlY2tlZCA9IHRydWU7XG4gICAgdGhpcy5yZXBvcnQoJ3JhZGlvJyk7XG4gIH1cblxuICBfbGluayhlOiBFdmVudCk6IGJvb2xlYW4ge1xuICAgIHRoaXMuX3N0b3BQcm9wYWdhdGlvbihlKTtcbiAgICBjb25zdCByZXMgPSB0aGlzLmMuY2xpY2shKHRoaXMuaSwgdGhpcy5zdENvbXApO1xuICAgIGlmICh0eXBlb2YgcmVzID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChyZXMsIHsgc3RhdGU6IHRoaXMucm91dGVyU3RhdGUgfSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIF9zdG9wUHJvcGFnYXRpb24oZXY6IEV2ZW50KTogdm9pZCB7XG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIF9idG4oYnRuOiBTVENvbHVtbkJ1dHRvbiwgZXY/OiBFdmVudCk6IHZvaWQge1xuICAgIGV2Py5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCBjb2cgPSB0aGlzLnN0Q29tcC5jb2c7XG4gICAgbGV0IHJlY29yZCA9IHRoaXMuaTtcbiAgICBpZiAoYnRuLnR5cGUgPT09ICdtb2RhbCcgfHwgYnRuLnR5cGUgPT09ICdzdGF0aWMnKSB7XG4gICAgICBpZiAoY29nLm1vZGFsIS5wdXJlUmVjb2FyZCA9PT0gdHJ1ZSkge1xuICAgICAgICByZWNvcmQgPSB0aGlzLnN0Q29tcC5wdXJlSXRlbShyZWNvcmQpITtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG1vZGFsID0gYnRuLm1vZGFsITtcbiAgICAgIGNvbnN0IG9iaiA9IHsgW21vZGFsLnBhcmFtc05hbWUhXTogcmVjb3JkIH07XG4gICAgICAodGhpcy5tb2RhbEhlbHBlcltidG4udHlwZSA9PT0gJ21vZGFsJyA/ICdjcmVhdGUnIDogJ2NyZWF0ZVN0YXRpYyddIGFzIE56U2FmZUFueSkoXG4gICAgICAgIG1vZGFsLmNvbXBvbmVudCxcbiAgICAgICAgeyAuLi5vYmosIC4uLihtb2RhbC5wYXJhbXMgJiYgbW9kYWwucGFyYW1zKHJlY29yZCkpIH0sXG4gICAgICAgIGRlZXBNZXJnZUtleSh7fSwgdHJ1ZSwgY29nLm1vZGFsLCBtb2RhbClcbiAgICAgIClcbiAgICAgICAgLnBpcGUoZmlsdGVyKHcgPT4gdHlwZW9mIHcgIT09ICd1bmRlZmluZWQnKSlcbiAgICAgICAgLnN1YnNjcmliZSgocmVzOiBOelNhZmVBbnkpID0+IHRoaXMuYnRuQ2FsbGJhY2socmVjb3JkLCBidG4sIHJlcykpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoYnRuLnR5cGUgPT09ICdkcmF3ZXInKSB7XG4gICAgICBpZiAoY29nLmRyYXdlciEucHVyZVJlY29hcmQgPT09IHRydWUpIHtcbiAgICAgICAgcmVjb3JkID0gdGhpcy5zdENvbXAucHVyZUl0ZW0ocmVjb3JkKSE7XG4gICAgICB9XG4gICAgICBjb25zdCBkcmF3ZXIgPSBidG4uZHJhd2VyITtcbiAgICAgIGNvbnN0IG9iaiA9IHsgW2RyYXdlci5wYXJhbXNOYW1lIV06IHJlY29yZCB9O1xuICAgICAgdGhpcy5kcmF3ZXJIZWxwZXJcbiAgICAgICAgLmNyZWF0ZShcbiAgICAgICAgICBkcmF3ZXIudGl0bGUhLFxuICAgICAgICAgIGRyYXdlci5jb21wb25lbnQsXG4gICAgICAgICAgeyAuLi5vYmosIC4uLihkcmF3ZXIucGFyYW1zICYmIGRyYXdlci5wYXJhbXMocmVjb3JkKSkgfSxcbiAgICAgICAgICBkZWVwTWVyZ2VLZXkoe30sIHRydWUsIGNvZy5kcmF3ZXIsIGRyYXdlcilcbiAgICAgICAgKVxuICAgICAgICAucGlwZShmaWx0ZXIodyA9PiB0eXBlb2YgdyAhPT0gJ3VuZGVmaW5lZCcpKVxuICAgICAgICAuc3Vic2NyaWJlKHJlcyA9PiB0aGlzLmJ0bkNhbGxiYWNrKHJlY29yZCwgYnRuLCByZXMpKTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKGJ0bi50eXBlID09PSAnbGluaycpIHtcbiAgICAgIGNvbnN0IGNsaWNrUmVzID0gdGhpcy5idG5DYWxsYmFjayhyZWNvcmQsIGJ0bik7XG4gICAgICBpZiAodHlwZW9mIGNsaWNrUmVzID09PSAnc3RyaW5nJykge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKGNsaWNrUmVzLCB7IHN0YXRlOiB0aGlzLnJvdXRlclN0YXRlIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmJ0bkNhbGxiYWNrKHJlY29yZCwgYnRuKTtcbiAgfVxuXG4gIHByaXZhdGUgYnRuQ2FsbGJhY2socmVjb3JkOiBTVERhdGEsIGJ0bjogU1RDb2x1bW5CdXR0b24sIG1vZGFsPzogTnpTYWZlQW55KTogTnpTYWZlQW55IHtcbiAgICBpZiAoIWJ0bi5jbGljaykgcmV0dXJuO1xuICAgIGlmICh0eXBlb2YgYnRuLmNsaWNrID09PSAnc3RyaW5nJykge1xuICAgICAgc3dpdGNoIChidG4uY2xpY2spIHtcbiAgICAgICAgY2FzZSAnbG9hZCc6XG4gICAgICAgICAgdGhpcy5zdENvbXAubG9hZCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdyZWxvYWQnOlxuICAgICAgICAgIHRoaXMuc3RDb21wLnJlbG9hZCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYnRuLmNsaWNrKHJlY29yZCwgbW9kYWwsIHRoaXMuc3RDb21wKTtcbiAgICB9XG4gIH1cbn1cbiIsIjxuZy10ZW1wbGF0ZSAjdGl0bGVUcGwgbGV0LWk+XG4gIDxzcGFuIFtpbm5lckhUTUxdPVwiaS5fdGV4dFwiPjwvc3Bhbj5cbiAgQGlmIChpLm9wdGlvbmFsKSB7XG4gICAgPHNtYWxsIGNsYXNzPVwic3RfX2hlYWQtb3B0aW9uYWxcIiBbaW5uZXJIVE1MXT1cImkub3B0aW9uYWxcIj48L3NtYWxsPlxuICB9XG4gIEBpZiAoaS5vcHRpb25hbEhlbHApIHtcbiAgICA8aSBjbGFzcz1cInN0X19oZWFkLXRpcFwiIG56LXRvb2x0aXAgW256VG9vbHRpcFRpdGxlXT1cImkub3B0aW9uYWxIZWxwXCIgbnotaWNvbiBuelR5cGU9XCJxdWVzdGlvbi1jaXJjbGVcIj48L2k+XG4gIH1cbjwvbmctdGVtcGxhdGU+XG48bmctdGVtcGxhdGUgI2Noa0FsbFRwbCBsZXQtY3VzdG9tPlxuICA8bGFiZWxcbiAgICBuei1jaGVja2JveFxuICAgIGNsYXNzPVwic3RfX2NoZWNrYWxsXCJcbiAgICBbbnpEaXNhYmxlZF09XCJfYWxsQ2hlY2tlZERpc2FibGVkXCJcbiAgICBbKG5nTW9kZWwpXT1cIl9hbGxDaGVja2VkXCJcbiAgICBbbnpJbmRldGVybWluYXRlXT1cIl9pbmRldGVybWluYXRlXCJcbiAgICAobmdNb2RlbENoYW5nZSk9XCJjaGVja0FsbCgpXCJcbiAgICBbY2xhc3MuYW50LXRhYmxlLXNlbGVjdGlvbi1zZWxlY3QtYWxsLWN1c3RvbV09XCJjdXN0b21cIlxuICA+PC9sYWJlbD5cbjwvbmctdGVtcGxhdGU+XG48bnotdGFibGVcbiAgI3RhYmxlXG4gIFtuekRhdGFdPVwiX2RhdGFcIlxuICBbKG56UGFnZUluZGV4KV09XCJwaVwiXG4gIChuelBhZ2VJbmRleENoYW5nZSk9XCJfY2hhbmdlKCdwaScpXCJcbiAgWyhuelBhZ2VTaXplKV09XCJwc1wiXG4gIChuelBhZ2VTaXplQ2hhbmdlKT1cIl9jaGFuZ2UoJ3BzJylcIlxuICBbbnpUb3RhbF09XCJ0b3RhbFwiXG4gIFtuelNob3dQYWdpbmF0aW9uXT1cIl9pc1BhZ2luYXRpb25cIlxuICBbbnpGcm9udFBhZ2luYXRpb25dPVwiZmFsc2VcIlxuICBbbnpCb3JkZXJlZF09XCJib3JkZXJlZFwiXG4gIFtuelNpemVdPVwic2l6ZVwiXG4gIFtuekxvYWRpbmddPVwibm9Db2x1bW5zIHx8IF9sb2FkaW5nXCJcbiAgW256TG9hZGluZ0RlbGF5XT1cImxvYWRpbmdEZWxheVwiXG4gIFtuekxvYWRpbmdJbmRpY2F0b3JdPVwibG9hZGluZ0luZGljYXRvclwiXG4gIFtuelRpdGxlXT1cImhlYWRlciFcIlxuICBbbnpGb290ZXJdPVwiZm9vdGVyIVwiXG4gIFtuelNjcm9sbF09XCJzY3JvbGxcIlxuICBbbnpWaXJ0dWFsSXRlbVNpemVdPVwidmlydHVhbEl0ZW1TaXplXCJcbiAgW256VmlydHVhbE1heEJ1ZmZlclB4XT1cInZpcnR1YWxNYXhCdWZmZXJQeFwiXG4gIFtuelZpcnR1YWxNaW5CdWZmZXJQeF09XCJ2aXJ0dWFsTWluQnVmZmVyUHhcIlxuICBbbnpWaXJ0dWFsRm9yVHJhY2tCeV09XCJ2aXJ0dWFsRm9yVHJhY2tCeVwiXG4gIFtuek5vUmVzdWx0XT1cIm5vUmVzdWx0IVwiXG4gIFtuelBhZ2VTaXplT3B0aW9uc109XCJwYWdlLnBhZ2VTaXplcyFcIlxuICBbbnpTaG93UXVpY2tKdW1wZXJdPVwicGFnZS5zaG93UXVpY2tKdW1wZXJcIlxuICBbbnpTaG93U2l6ZUNoYW5nZXJdPVwicGFnZS5zaG93U2l6ZVwiXG4gIFtuelBhZ2luYXRpb25Qb3NpdGlvbl09XCJwYWdlLnBvc2l0aW9uIVwiXG4gIFtuelBhZ2luYXRpb25UeXBlXT1cInBhZ2UudHlwZSFcIlxuICBbbnpJdGVtUmVuZGVyXT1cInBhZ2UuaXRlbVJlbmRlciFcIlxuICBbbnpTaW1wbGVdPVwicGFnZS5zaW1wbGVcIlxuICBbbnpTaG93VG90YWxdPVwidG90YWxUcGxcIlxuICBbbnpXaWR0aENvbmZpZ109XCJfd2lkdGhDb25maWdcIlxuICAoY29udGV4dG1lbnUpPVwib25Db250ZXh0bWVudSgkZXZlbnQpXCJcbiAgW2NsYXNzLnN0X19uby1jb2x1bW5dPVwibm9Db2x1bW5zXCJcbj5cbiAgQGlmIChzaG93SGVhZGVyKSB7XG4gICAgPHRoZWFkPlxuICAgICAgQGZvciAocm93IG9mIF9oZWFkZXJzOyB0cmFjayAkaW5kZXgpIHtcbiAgICAgICAgPHRyPlxuICAgICAgICAgIEBpZiAoJGZpcnN0ICYmIGV4cGFuZCkge1xuICAgICAgICAgICAgPHRoIG56V2lkdGg9XCI1MHB4XCIgW3Jvd1NwYW5dPVwiX2hlYWRlcnMubGVuZ3RoXCI+PC90aD5cbiAgICAgICAgICB9XG4gICAgICAgICAgQGZvciAoaCBvZiByb3c7IHRyYWNrIGluZGV4OyBsZXQgaW5kZXggPSAkaW5kZXg7IGxldCBsYXN0ID0gJGxhc3QpIHtcbiAgICAgICAgICAgIDx0aFxuICAgICAgICAgICAgICAqbGV0PVwiaC5jb2x1bW4gYXMgX2NcIlxuICAgICAgICAgICAgICBbY29sU3Bhbl09XCJoLmNvbFNwYW5cIlxuICAgICAgICAgICAgICBbcm93U3Bhbl09XCJoLnJvd1NwYW5cIlxuICAgICAgICAgICAgICBbbnpXaWR0aF09XCIkYW55KF9jKS53aWR0aFwiXG4gICAgICAgICAgICAgIFtuekxlZnRdPVwiX2MuX2xlZnQhXCJcbiAgICAgICAgICAgICAgW256UmlnaHRdPVwiX2MuX3JpZ2h0IVwiXG4gICAgICAgICAgICAgIFtuZ0NsYXNzXT1cIl9jLl9jbGFzc05hbWVcIlxuICAgICAgICAgICAgICBbYXR0ci5kYXRhLWNvbF09XCJfYy5pbmRleEtleVwiXG4gICAgICAgICAgICAgIFthdHRyLmRhdGEtY29sLWluZGV4XT1cImluZGV4XCJcbiAgICAgICAgICAgICAgW256U2hvd1NvcnRdPVwiX2MuX3NvcnQuZW5hYmxlZFwiXG4gICAgICAgICAgICAgIFtuelNvcnRPcmRlcl09XCIkYW55KF9jKS5fc29ydC5kZWZhdWx0XCJcbiAgICAgICAgICAgICAgKG56U29ydE9yZGVyQ2hhbmdlKT1cInNvcnQoX2MsIGluZGV4LCAkZXZlbnQpXCJcbiAgICAgICAgICAgICAgW256Q3VzdG9tRmlsdGVyXT1cIiEhX2MuZmlsdGVyXCJcbiAgICAgICAgICAgICAgW2NsYXNzLnN0X19oYXMtZmlsdGVyXT1cIl9jLmZpbHRlclwiXG4gICAgICAgICAgICAgIG56LXJlc2l6YWJsZVxuICAgICAgICAgICAgICBbbnpEaXNhYmxlZF09XCJsYXN0IHx8ICRhbnkoX2MpLnJlc2l6YWJsZS5kaXNhYmxlZFwiXG4gICAgICAgICAgICAgIFtuek1heFdpZHRoXT1cIiRhbnkoX2MpLnJlc2l6YWJsZS5tYXhXaWR0aFwiXG4gICAgICAgICAgICAgIFtuek1pbldpZHRoXT1cIiRhbnkoX2MpLnJlc2l6YWJsZS5taW5XaWR0aFwiXG4gICAgICAgICAgICAgIFtuekJvdW5kc109XCIkYW55KF9jKS5yZXNpemFibGUuYm91bmRzXCJcbiAgICAgICAgICAgICAgW256UHJldmlld109XCIkYW55KF9jKS5yZXNpemFibGUucHJldmlld1wiXG4gICAgICAgICAgICAgIChuelJlc2l6ZUVuZCk9XCJjb2xSZXNpemUoJGV2ZW50LCBfYylcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBAaWYgKCRhbnkoIWxhc3QgJiYgISRhbnkoX2MpLnJlc2l6YWJsZS5kaXNhYmxlZCkpIHtcbiAgICAgICAgICAgICAgICA8bnotcmVzaXplLWhhbmRsZSBuekRpcmVjdGlvbj1cInJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICA8aT48L2k+XG4gICAgICAgICAgICAgICAgPC9uei1yZXNpemUtaGFuZGxlPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIEBpZiAoX2MuX19yZW5kZXJUaXRsZSkge1xuICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwiX2MuX19yZW5kZXJUaXRsZSFcIlxuICAgICAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBoLmNvbHVtbiwgaW5kZXg6IGluZGV4IH1cIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIH0gQGVsc2Uge1xuICAgICAgICAgICAgICAgIEBzd2l0Y2ggKF9jLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgIEBjYXNlICgnY2hlY2tib3gnKSB7XG4gICAgICAgICAgICAgICAgICAgIEBpZiAoX2Muc2VsZWN0aW9ucyEubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNoa0FsbFRwbFwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogZmFsc2UgfVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIH0gQGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtdGFibGUtc2VsZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiY2hrQWxsVHBsXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiB0cnVlIH1cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgQGlmIChfYy5zZWxlY3Rpb25zIS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFudC10YWJsZS1zZWxlY3Rpb24tZXh0cmFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuei1kcm9wZG93blxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnpQbGFjZW1lbnQ9XCJib3R0b21MZWZ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuekRyb3Bkb3duTWVudV09XCJzZWxlY3Rpb25NZW51XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYW50LXRhYmxlLXNlbGVjdGlvbi1kb3duIHN0X19jaGVja2FsbC1zZWxlY3Rpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIG56LWljb24gbnpUeXBlPVwiZG93blwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8bnotZHJvcGRvd24tbWVudSAjc2VsZWN0aW9uTWVudT1cIm56RHJvcGRvd25NZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBuei1tZW51IGNsYXNzPVwiYW50LXRhYmxlLXNlbGVjdGlvbi1tZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGZvciAocncgb2YgX2Muc2VsZWN0aW9uczsgdHJhY2sgJGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgbnotbWVudS1pdGVtIChjbGljayk9XCJfcm93U2VsZWN0aW9uKHJ3KVwiIFtpbm5lckhUTUxdPVwicncudGV4dFwiPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uei1kcm9wZG93bi1tZW51PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBAZGVmYXVsdCB7XG4gICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJ0aXRsZVRwbFwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogX2MudGl0bGUgfVwiIC8+XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIEBpZiAoX2MuZmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgPHN0LWZpbHRlclxuICAgICAgICAgICAgICAgICAgbnotdGgtZXh0cmFcbiAgICAgICAgICAgICAgICAgIFtjb2xdPVwiaC5jb2x1bW5cIlxuICAgICAgICAgICAgICAgICAgW2ZdPVwiX2MuZmlsdGVyXCJcbiAgICAgICAgICAgICAgICAgIFtsb2NhbGVdPVwibG9jYWxlXCJcbiAgICAgICAgICAgICAgICAgIChuKT1cImhhbmRsZUZpbHRlck5vdGlmeSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgIChoYW5kbGUpPVwiX2hhbmRsZUZpbHRlcihfYywgJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICB9XG4gICAgICAgIDwvdHI+XG4gICAgICB9XG4gICAgPC90aGVhZD5cbiAgfVxuICA8dGJvZHkgY2xhc3M9XCJzdF9fYm9keVwiPlxuICAgIEBpZiAoIV9sb2FkaW5nKSB7XG4gICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYm9keUhlYWRlciFcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IF9zdGF0aXN0aWNhbCB9XCIgLz5cbiAgICB9XG4gICAgPG5nLXRlbXBsYXRlICNib2R5VHBsIGxldC1pIGxldC1pbmRleD1cImluZGV4XCI+XG4gICAgICA8dHJcbiAgICAgICAgW2F0dHIuZGF0YS1pbmRleF09XCJpbmRleFwiXG4gICAgICAgIChjbGljayk9XCJfcm93Q2xpY2soJGV2ZW50LCBpLCBpbmRleCwgZmFsc2UpXCJcbiAgICAgICAgKGRibGNsaWNrKT1cIl9yb3dDbGljaygkZXZlbnQsIGksIGluZGV4LCB0cnVlKVwiXG4gICAgICAgIFtuZ0NsYXNzXT1cImkuX3Jvd0NsYXNzTmFtZVwiXG4gICAgICA+XG4gICAgICAgIEBpZiAoZXhwYW5kKSB7XG4gICAgICAgICAgPHRkXG4gICAgICAgICAgICBbbnpTaG93RXhwYW5kXT1cImV4cGFuZCAmJiBpLnNob3dFeHBhbmQgIT09IGZhbHNlXCJcbiAgICAgICAgICAgIFtuekV4cGFuZF09XCJpLmV4cGFuZFwiXG4gICAgICAgICAgICAobnpFeHBhbmRDaGFuZ2UpPVwiX2V4cGFuZENoYW5nZShpLCAkZXZlbnQpXCJcbiAgICAgICAgICAgIChjbGljayk9XCJfc3RvcFByb3BhZ2F0aW9uKCRldmVudClcIlxuICAgICAgICAgICAgbnpXaWR0aD1cIjUwcHhcIlxuICAgICAgICAgID48L3RkPlxuICAgICAgICB9XG4gICAgICAgIEBmb3IgKGMgb2YgX2NvbHVtbnM7IHRyYWNrIGNJZHg7IGxldCBjSWR4ID0gJGluZGV4KSB7XG4gICAgICAgICAgQGlmIChpLl92YWx1ZXNbY0lkeF0ucHJvcHM/LmNvbFNwYW4gPiAwICYmIGkuX3ZhbHVlc1tjSWR4XS5wcm9wcz8ucm93U3BhbiA+IDApIHtcbiAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICBbbnpMZWZ0XT1cIiEhYy5fbGVmdFwiXG4gICAgICAgICAgICAgIFtuelJpZ2h0XT1cIiEhYy5fcmlnaHRcIlxuICAgICAgICAgICAgICBbYXR0ci5kYXRhLWNvbC1pbmRleF09XCJjSWR4XCJcbiAgICAgICAgICAgICAgW25nQ2xhc3NdPVwiYy5fY2xhc3NOYW1lXCJcbiAgICAgICAgICAgICAgW2F0dHIuY29sc3Bhbl09XCJpLl92YWx1ZXNbY0lkeF0ucHJvcHM/LmNvbFNwYW4gPT09IDEgPyBudWxsIDogaS5fdmFsdWVzW2NJZHhdLnByb3BzPy5jb2xTcGFuXCJcbiAgICAgICAgICAgICAgW2F0dHIucm93c3Bhbl09XCJpLl92YWx1ZXNbY0lkeF0ucHJvcHM/LnJvd1NwYW4gPT09IDEgPyBudWxsIDogaS5fdmFsdWVzW2NJZHhdLnByb3BzPy5yb3dTcGFuXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQGlmIChyZXNwb25zaXZlKSB7XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJhbnQtdGFibGUtcmVwX190aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRpdGxlVHBsXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBjLnRpdGxlIH1cIiAvPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8c3QtdGQgW2RhdGFdPVwiX2RhdGFcIiBbaV09XCJpXCIgW2luZGV4XT1cImluZGV4XCIgW2NdPVwiY1wiIFtjSWR4XT1cImNJZHhcIiAobik9XCJfaGFuZGxlVGQoJGV2ZW50KVwiIC8+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgPC90cj5cbiAgICAgIDx0ciBbbnpFeHBhbmRdPVwiaS5leHBhbmRcIj5cbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImV4cGFuZFwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogaSwgaW5kZXg6IGluZGV4IH1cIiAvPlxuICAgICAgPC90cj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIEBpZiAodmlydHVhbFNjcm9sbCkge1xuICAgICAgPG5nLXRlbXBsYXRlIG56LXZpcnR1YWwtc2Nyb2xsIGxldC1pIGxldC1pbmRleD1cImluZGV4XCI+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJib2R5VHBsXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBpLCBpbmRleDogaW5kZXggfVwiIC8+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgIH0gQGVsc2Uge1xuICAgICAgQGZvciAoaSBvZiBfZGF0YTsgdHJhY2sgJGluZGV4KSB7XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJib2R5VHBsXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBpLCBpbmRleDogJGluZGV4IH1cIiAvPlxuICAgICAgfVxuICAgIH1cbiAgICBAaWYgKCFfbG9hZGluZykge1xuICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImJvZHkhXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBfc3RhdGlzdGljYWwgfVwiIC8+XG4gICAgfVxuICA8L3Rib2R5PlxuICA8bmctdGVtcGxhdGUgI3RvdGFsVHBsIGxldC1yYW5nZT1cInJhbmdlXCIgbGV0LXRvdGFsPnt7IHJlbmRlclRvdGFsKHRvdGFsLCByYW5nZSkgfX08L25nLXRlbXBsYXRlPlxuPC9uei10YWJsZT5cbjxuei1kcm9wZG93bi1tZW51ICNjb250ZXh0bWVudVRwbD1cIm56RHJvcGRvd25NZW51XCI+XG4gIDx1bCBuei1tZW51IGNsYXNzPVwic3RfX2NvbnRleHRtZW51XCI+XG4gICAgQGZvciAoaSBvZiBjb250ZXh0bWVudUxpc3Q7IHRyYWNrICRpbmRleCkge1xuICAgICAgQGlmIChpLmNoaWxkcmVuIS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgPGxpIG56LW1lbnUtaXRlbSAoY2xpY2spPVwiaS5mbiEoaSlcIiBbaW5uZXJIVE1MXT1cImkudGV4dFwiPjwvbGk+XG4gICAgICB9IEBlbHNlIHtcbiAgICAgICAgPGxpIG56LXN1Ym1lbnUgW256VGl0bGVdPVwiaS50ZXh0XCI+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgQGZvciAoY2kgb2YgaS5jaGlsZHJlbjsgdHJhY2sgJGluZGV4KSB7XG4gICAgICAgICAgICAgIDxsaSBuei1tZW51LWl0ZW0gKGNsaWNrKT1cImNpLmZuIShjaSlcIiBbaW5uZXJIVE1MXT1cImNpLnRleHRcIj48L2xpPlxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbGk+XG4gICAgICB9XG4gICAgfVxuICA8L3VsPlxuPC9uei1kcm9wZG93bi1tZW51PlxuIiwiPG5nLXRlbXBsYXRlICNidG5UcGwgbGV0LWkgbGV0LWNoaWxkPVwiY2hpbGRcIj5cbiAgQGlmIChpLnRvb2x0aXApIHtcbiAgICA8c3BhbiBuei10b29sdGlwIFtuelRvb2x0aXBUaXRsZV09XCJpLnRvb2x0aXBcIiBbY2xhc3MuZC1ibG9ja109XCJjaGlsZFwiIFtjbGFzcy53aWR0aC0xMDBdPVwiY2hpbGRcIj5cbiAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJidG5JdGVtVHBsXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBpIH1cIiAvPlxuICAgIDwvc3Bhbj5cbiAgfSBAZWxzZSB7XG4gICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImJ0bkl0ZW1UcGxcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IGkgfVwiIC8+XG4gIH1cbjwvbmctdGVtcGxhdGU+XG48bmctdGVtcGxhdGUgI2J0bkl0ZW1UcGwgbGV0LWk+XG4gIEBpZiAoaS5wb3ApIHtcbiAgICA8YVxuICAgICAgbnotcG9wY29uZmlybVxuICAgICAgW256UG9wY29uZmlybVRpdGxlXT1cImkucG9wLnRpdGxlXCJcbiAgICAgIFtuekljb25dPVwiaS5wb3AuaWNvblwiXG4gICAgICBbbnpDb25kaXRpb25dPVwiaS5wb3AuY29uZGl0aW9uKGkpXCJcbiAgICAgIFtuekNhbmNlbFRleHRdPVwiaS5wb3AuY2FuY2VsVGV4dFwiXG4gICAgICBbbnpPa1RleHRdPVwiaS5wb3Aub2tUZXh0XCJcbiAgICAgIFtuek9rVHlwZV09XCJpLnBvcC5va1R5cGVcIlxuICAgICAgKG56T25Db25maXJtKT1cIl9idG4oaSlcIlxuICAgICAgY2xhc3M9XCJzdF9fYnRuLXRleHRcIlxuICAgICAgW25nQ2xhc3NdPVwiaS5fY2xhc3NOYW1lXCJcbiAgICAgIChjbGljayk9XCJfc3RvcFByb3BhZ2F0aW9uKCRldmVudClcIlxuICAgID5cbiAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJidG5UZXh0VHBsXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBpIH1cIiAvPlxuICAgIDwvYT5cbiAgfSBAZWxzZSB7XG4gICAgPGEgKGNsaWNrKT1cIl9idG4oaSwgJGV2ZW50KVwiIGNsYXNzPVwic3RfX2J0bi10ZXh0XCIgW25nQ2xhc3NdPVwiaS5fY2xhc3NOYW1lXCI+XG4gICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiYnRuVGV4dFRwbFwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogaSB9XCIgLz5cbiAgICA8L2E+XG4gIH1cbjwvbmctdGVtcGxhdGU+XG48bmctdGVtcGxhdGUgI2J0blRleHRUcGwgbGV0LWk+XG4gIEBpZiAoaS5faWNvbikge1xuICAgIEBpZiAoaS5faWNvbi5pY29uZm9udCkge1xuICAgICAgPGkgbnotaWNvbiBbbnpJY29uZm9udF09XCJpLl9pY29uLmljb25mb250XCI+PC9pPlxuICAgIH0gQGVsc2Uge1xuICAgICAgPGlcbiAgICAgICAgbnotaWNvblxuICAgICAgICBbbnpUeXBlXT1cImkuX2ljb24udHlwZVwiXG4gICAgICAgIFtuelRoZW1lXT1cImkuX2ljb24udGhlbWVcIlxuICAgICAgICBbbnpTcGluXT1cImkuX2ljb24uc3BpblwiXG4gICAgICAgIFtuelR3b3RvbmVDb2xvcl09XCJpLl9pY29uLnR3b1RvbmVDb2xvclwiXG4gICAgICA+PC9pPlxuICAgIH1cbiAgfVxuICA8c3BhbiBbaW5uZXJIVE1MXT1cImkuX3RleHRcIiBbbmdDbGFzc109XCJ7ICdwbC14cyc6IGkuX2ljb24gfVwiPjwvc3Bhbj5cbjwvbmctdGVtcGxhdGU+XG5AaWYgKGMuX19yZW5kZXIpIHtcbiAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImMuX19yZW5kZXIhXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBpLCBpbmRleDogaW5kZXgsIGNvbHVtbjogYyB9XCIgLz5cbn0gQGVsc2Uge1xuICBAc3dpdGNoIChjLnR5cGUpIHtcbiAgICBAY2FzZSAoJ2NoZWNrYm94Jykge1xuICAgICAgPGxhYmVsIG56LWNoZWNrYm94IFtuekRpc2FibGVkXT1cImkuZGlzYWJsZWRcIiBbbmdNb2RlbF09XCJpLmNoZWNrZWRcIiAobmdNb2RlbENoYW5nZSk9XCJfY2hlY2tib3goJGV2ZW50KVwiPjwvbGFiZWw+XG4gICAgfVxuICAgIEBjYXNlICgncmFkaW8nKSB7XG4gICAgICA8bGFiZWwgbnotcmFkaW8gW256RGlzYWJsZWRdPVwiaS5kaXNhYmxlZFwiIFtuZ01vZGVsXT1cImkuY2hlY2tlZFwiIChuZ01vZGVsQ2hhbmdlKT1cIl9yYWRpbygpXCI+PC9sYWJlbD5cbiAgICB9XG4gICAgQGNhc2UgKCdsaW5rJykge1xuICAgICAgPGEgKGNsaWNrKT1cIl9saW5rKCRldmVudClcIiBbaW5uZXJIVE1MXT1cImkuX3ZhbHVlc1tjSWR4XS5fdGV4dFwiIFthdHRyLnRpdGxlXT1cImkuX3ZhbHVlc1tjSWR4XS50ZXh0XCI+PC9hPlxuICAgIH1cbiAgICBAY2FzZSAoJ3RhZycpIHtcbiAgICAgIDxuei10YWcgW256Q29sb3JdPVwiaS5fdmFsdWVzW2NJZHhdLmNvbG9yXCIgW256LXRvb2x0aXBdPVwiaS5fdmFsdWVzW2NJZHhdLnRvb2x0aXBcIj5cbiAgICAgICAgPHNwYW4gW2lubmVySFRNTF09XCJpLl92YWx1ZXNbY0lkeF0uX3RleHRcIj48L3NwYW4+XG4gICAgICA8L256LXRhZz5cbiAgICB9XG4gICAgQGNhc2UgKCdiYWRnZScpIHtcbiAgICAgIDxuei1iYWRnZVxuICAgICAgICBbbnpTdGF0dXNdPVwiaS5fdmFsdWVzW2NJZHhdLmNvbG9yXCJcbiAgICAgICAgW256VGV4dF09XCJpLl92YWx1ZXNbY0lkeF0udGV4dFwiXG4gICAgICAgIFtuei10b29sdGlwXT1cImkuX3ZhbHVlc1tjSWR4XS50b29sdGlwXCJcbiAgICAgIC8+XG4gICAgfVxuICAgIEBjYXNlICgnY2VsbCcpIHtcbiAgICAgIDxjZWxsIFt2YWx1ZV09XCJpLl92YWx1ZXNbY0lkeF0udGV4dFwiIFtvcHRpb25zXT1cImkuX3ZhbHVlc1tjSWR4XS5jZWxsID8/IGMuY2VsbFwiIC8+XG4gICAgfVxuICAgIEBjYXNlICgnd2lkZ2V0Jykge1xuICAgICAgPG5nLXRlbXBsYXRlIHN0LXdpZGdldC1ob3N0IFtyZWNvcmRdPVwiaVwiIFtjb2x1bW5dPVwiY1wiIC8+XG4gICAgfVxuICAgIEBkZWZhdWx0IHtcbiAgICAgIEBpZiAoYy5zYWZlVHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICAgIDxzcGFuIFtpbm5lclRleHRdPVwiaS5fdmFsdWVzW2NJZHhdLl90ZXh0XCIgW2F0dHIudGl0bGVdPVwiYy5faXNUcnVuY2F0ZSA/IGkuX3ZhbHVlc1tjSWR4XS50ZXh0IDogbnVsbFwiPjwvc3Bhbj5cbiAgICAgIH0gQGVsc2Uge1xuICAgICAgICA8c3BhbiBbaW5uZXJIVE1MXT1cImkuX3ZhbHVlc1tjSWR4XS5fdGV4dFwiIFthdHRyLnRpdGxlXT1cImMuX2lzVHJ1bmNhdGUgPyBpLl92YWx1ZXNbY0lkeF0udGV4dCA6IG51bGxcIj48L3NwYW4+XG4gICAgICB9XG4gICAgfVxuICB9XG4gIEBmb3IgKGJ0biBvZiBpLl92YWx1ZXNbY0lkeF0uYnV0dG9uczsgdHJhY2sgJGluZGV4KSB7XG4gICAgQGlmIChidG4uY2hpbGRyZW4hLmxlbmd0aCA+IDApIHtcbiAgICAgIDxhIG56LWRyb3Bkb3duIFtuekRyb3Bkb3duTWVudV09XCJidG5NZW51XCIgbnpPdmVybGF5Q2xhc3NOYW1lPVwic3RfX2J0bi1zdWJcIj5cbiAgICAgICAgPHNwYW4gW2lubmVySFRNTF09XCJidG4uX3RleHRcIj48L3NwYW4+XG4gICAgICAgIDxpIG56LWljb24gbnpUeXBlPVwiZG93blwiPjwvaT5cbiAgICAgIDwvYT5cbiAgICAgIDxuei1kcm9wZG93bi1tZW51ICNidG5NZW51PVwibnpEcm9wZG93bk1lbnVcIj5cbiAgICAgICAgPHVsIG56LW1lbnU+XG4gICAgICAgICAgQGZvciAoc3ViQnRuIG9mIGJ0bi5jaGlsZHJlbjsgdHJhY2sgJGluZGV4KSB7XG4gICAgICAgICAgICBAaWYgKHN1YkJ0bi50eXBlID09PSAnZGl2aWRlcicpIHtcbiAgICAgICAgICAgICAgPGxpIG56LW1lbnUtZGl2aWRlcj48L2xpPlxuICAgICAgICAgICAgfSBAZWxzZSB7XG4gICAgICAgICAgICAgIDxsaSBuei1tZW51LWl0ZW0gW2NsYXNzLnN0X19idG4tZGlzYWJsZWRdPVwic3ViQnRuLl9kaXNhYmxlZFwiPlxuICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwiYnRuVHBsXCJcbiAgICAgICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogc3ViQnRuLCBjaGlsZDogdHJ1ZSB9XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbnotZHJvcGRvd24tbWVudT5cbiAgICB9IEBlbHNlIHtcbiAgICAgIDxzcGFuIFtjbGFzcy5zdF9fYnRuLWRpc2FibGVkXT1cImJ0bi5fZGlzYWJsZWRcIj5cbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImJ0blRwbFwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogYnRuLCBjaGlsZDogZmFsc2UgfVwiIC8+XG4gICAgICA8L3NwYW4+XG4gICAgfVxuICAgIEBpZiAoISRsYXN0KSB7XG4gICAgICA8bnotZGl2aWRlciBuelR5cGU9XCJ2ZXJ0aWNhbFwiIC8+XG4gICAgfVxuICB9XG59XG4iXX0=