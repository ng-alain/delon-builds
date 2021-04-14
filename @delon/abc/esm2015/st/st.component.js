import { __awaiter, __decorate, __metadata } from "tslib";
import { DecimalPipe, DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Inject, Input, Optional, Output, TemplateRef, ViewChild, ViewEncapsulation, } from '@angular/core';
import { Router } from '@angular/router';
import { ALAIN_I18N_TOKEN, DatePipe, DelonLocaleService, DrawerHelper, ModalHelper, YNPipe, } from '@delon/theme';
import { AlainConfigService } from '@delon/util/config';
import { InputBoolean, InputNumber, toBoolean } from '@delon/util/decorator';
import { deepCopy, deepMergeKey } from '@delon/util/other';
import { NzContextMenuService, NzDropdownMenuComponent } from 'ng-zorro-antd/dropdown';
import { NzTableComponent } from 'ng-zorro-antd/table';
import { from, isObservable, of, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { STColumnSource } from './st-column-source';
import { STDataSource } from './st-data-source';
import { STExport } from './st-export';
import { STRowSource } from './st-row.directive';
import { ST_DEFAULT_CONFIG } from './st.config';
export class STComponent {
    constructor(i18nSrv, cdr, router, el, exportSrv, modalHelper, drawerHelper, doc, columnSource, dataSource, delonI18n, configSrv, cms) {
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
        this.cms = cms;
        this.destroy$ = new Subject();
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
        this.contextmenuList = [];
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
        if (!Array.isArray(reName.list))
            reName.list = reName.list.split('.');
        if (!Array.isArray(reName.total))
            reName.total = reName.total.split('.');
        this._res = item;
    }
    get page() {
        return this._page;
    }
    set page(value) {
        this._page = Object.assign(Object.assign({}, this.cog.page), value);
        this.updateTotalTpl();
    }
    get multiSort() {
        return this._multiSort;
    }
    set multiSort(value) {
        if ((typeof value === 'boolean' && !toBoolean(value)) || (typeof value === 'object' && Object.keys(value).length === 0)) {
            this._multiSort = undefined;
            return;
        }
        this._multiSort = Object.assign({}, (typeof value === 'object' ? value : {}));
    }
    set widthMode(value) {
        this._widthMode = Object.assign(Object.assign({}, this.cog.widthMode), value);
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
    get routerState() {
        const { pi, ps, total } = this;
        return { pi, ps, total };
    }
    setCog(cog) {
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
    cd() {
        this.cdr.detectChanges();
        return this;
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
                .process(Object.assign({ pi,
                ps,
                total,
                data,
                req,
                res,
                page, columns: this._columns, singleSort,
                multiSort,
                rowClassName, paginator: true, saftHtml: this.cog.saftHtml }, options))
                .pipe(takeUntil(this.destroy$))
                .subscribe(result => resolvePromise(result), error => {
                console.warn('st.loadDate', error);
                rejectPromise(error);
            });
        });
    }
    loadPageData() {
        return __awaiter(this, void 0, void 0, function* () {
            this.setLoading(true);
            try {
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
                if (!this.destroy$.isStopped) {
                    this.cdr.detectChanges();
                    this.error.emit({ type: 'req', error });
                }
                return this;
            }
        });
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
            this.req.params = options && options.merge ? Object.assign(Object.assign({}, this.req.params), extraParams) : extraParams;
        }
        this._change('pi', options);
        return this;
    }
    /**
     * 重新刷新当前页
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
        var _a;
        if (!(enforce == null ? this.page.toTop : enforce))
            return;
        const el = this.el.nativeElement;
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
        this.doc.documentElement.scrollTop -= this.page.toTopOffset;
    }
    _change(type, options) {
        if (type === 'pi' || (type === 'ps' && this.pi <= Math.ceil(this.total / this.ps))) {
            this.loadPageData().then(() => this._toTop(options === null || options === void 0 ? void 0 : options.toTop));
        }
        this.changeEmit(type);
    }
    _click(e, item, col) {
        e.preventDefault();
        e.stopPropagation();
        const res = col.click(item, this);
        if (typeof res === 'string') {
            this.router.navigateByUrl(res, { state: this.routerState });
        }
        return false;
    }
    closeOtherExpand(item) {
        if (this.expandAccordion === false)
            return;
        this._data.filter(i => i !== item).forEach(i => (i.expand = false));
    }
    _rowClick(e, item, index) {
        if (e.target.nodeName === 'INPUT')
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
        setTimeout(() => {
            const data = { e, item, index };
            if (this.rowClickCount === 1) {
                this.changeEmit('click', data);
            }
            else {
                this.changeEmit('dblClick', data);
            }
            this.rowClickCount = 0;
        }, rowClickTime);
    }
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
     */
    removeRow(data) {
        if (typeof data === 'number') {
            this._data.splice(data, 1);
        }
        else {
            if (!Array.isArray(data)) {
                data = [data];
            }
            data
                .map(item => this._data.indexOf(item))
                .filter(pos => pos !== -1)
                .forEach(pos => this._data.splice(pos, 1));
        }
        // recalculate no
        this._columns
            .filter(w => w.type === 'no')
            .forEach(c => this._data.forEach((i, idx) => {
            const text = `${this.dataSource.getNoIndex(i, c, idx)}`;
            i._values[c.__point] = { text, _text: text, org: idx };
        }));
        return this.cd();
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
        options = Object.assign({ refreshSchema: false, emitReload: false }, options);
        if (typeof index !== 'number') {
            index = this._data.indexOf(index);
        }
        this._data[index] = deepMergeKey(this._data[index], false, item);
        this.optimizeData();
        if (options.refreshSchema) {
            this.resetColumns({ emitReload: options.emitReload });
            return this;
        }
        this.cdr.detectChanges();
        return this;
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
            column: col,
        };
        this.changeEmit('sort', res);
    }
    clearSort() {
        this._columns.forEach(item => (item._sort.default = null));
        return this;
    }
    // #endregion
    // #region filter
    handleFilter(col) {
        // 过滤表示一种数据的变化应重置页码为 `1`
        this.pi = 1;
        this.columnSource.updateDefault(col.filter);
        this.loadPageData();
        this.changeEmit('filter', col);
    }
    _filterConfirm(col) {
        this.handleFilter(col);
    }
    _filterRadio(col, item, checked) {
        col.filter.menus.forEach(i => (i.checked = false));
        item.checked = checked;
    }
    _filterClear(col) {
        this.columnSource.cleanFilter(col);
        this.handleFilter(col);
    }
    clearFilter() {
        this._columns.filter(w => w.filter && w.filter.default === true).forEach(col => this.columnSource.cleanFilter(col));
        return this;
    }
    _filterClick($event) {
        $event.stopPropagation();
    }
    // #endregion
    // #region checkbox
    /** 清除所有 `checkbox` */
    clearCheck() {
        return this._checkAll(false);
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
    _checkAll(checked) {
        checked = typeof checked === 'undefined' ? this._allChecked : checked;
        this._data.filter(w => !w.disabled).forEach(i => (i.checked = checked));
        return this._refCheck()._checkNotify();
    }
    _checkSelection(i, value) {
        i.checked = value;
        return this._refCheck()._checkNotify();
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
        return this;
    }
    _refRadio(checked, item) {
        // if (item.disabled === true) return;
        this._data.filter(w => !w.disabled).forEach(i => (i.checked = false));
        item.checked = checked;
        this.changeEmit('radio', item);
        return this;
    }
    // #endregion
    // #region buttons
    _btnClick(record, btn, e) {
        // should be stop propagation when expandRowByClick is true
        if (e && this.expandRowByClick === true) {
            e.stopPropagation();
        }
        if (btn.type === 'modal' || btn.type === 'static') {
            const { modal } = btn;
            const obj = { [modal.paramsName]: record };
            this.modalHelper[btn.type === 'modal' ? 'create' : 'createStatic'](modal.component, Object.assign(Object.assign({}, obj), (modal.params && modal.params(record))), deepMergeKey({}, true, this.cog.modal, modal))
                .pipe(filter(w => typeof w !== 'undefined'))
                .subscribe((res) => this.btnCallback(record, btn, res));
            return;
        }
        else if (btn.type === 'drawer') {
            const { drawer } = btn;
            const obj = { [drawer.paramsName]: record };
            this.drawerHelper
                .create(drawer.title, drawer.component, Object.assign(Object.assign({}, obj), (drawer.params && drawer.params(record))), deepMergeKey({}, true, this.cog.drawer, drawer))
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
    // #endregion
    // #region export
    /**
     * 导出当前页，确保已经注册 `XlsxModule`
     * @param newData 重新指定数据；若为 `true` 表示使用 `filteredData` 数据
     * @param opt 额外参数
     */
    export(newData, opt) {
        (newData === true ? from(this.filteredData) : of(newData || this._data)).subscribe((res) => this.exportSrv.export(Object.assign(Object.assign({ columens: this._columns }, opt), { data: res })));
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
            column: this._columns[colIndex],
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
    refreshColumns() {
        const res = this.columnSource.process(this.columns, { widthMode: this.widthMode, resizable: this._resizable });
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
            rowClassName: this.rowClassName,
            safeHtml: this.cog.saftHtml,
        });
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
STComponent.decorators = [
    { type: Component, args: [{
                selector: 'st',
                exportAs: 'st',
                template: "<ng-template #btnTpl let-i let-btn=\"btn\">\n  <ng-container *ngIf=\"!btn.tooltip\">\n    <ng-template [ngTemplateOutlet]=\"btnItemTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n  </ng-container>\n  <span *ngIf=\"btn.tooltip\" nz-tooltip [nzTooltipTitle]=\"btn.tooltip\">\n    <ng-template [ngTemplateOutlet]=\"btnItemTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n  </span>\n</ng-template>\n<ng-template #btnItemTpl let-i let-btn=\"btn\">\n  <a\n    *ngIf=\"btn.pop\"\n    nz-popconfirm\n    [nzPopconfirmTitle]=\"btn.pop.title\"\n    [nzIcon]=\"btn.pop.icon\"\n    [nzCondition]=\"btn.pop.condition(i)\"\n    [nzCancelText]=\"btn.pop.cancelText\"\n    [nzOkText]=\"btn.pop.okText\"\n    [nzOkType]=\"btn.pop.okType\"\n    (nzOnConfirm)=\"$any(_btnClick)(i, btn, $event)\"\n    class=\"st__btn-text\"\n    [ngClass]=\"btn.className\"\n  >\n    <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n  </a>\n  <a *ngIf=\"!btn.pop\" (click)=\"_btnClick(i, btn, $event)\" class=\"st__btn-text\" [ngClass]=\"btn.className\">\n    <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n  </a>\n</ng-template>\n<ng-template #btnTextTpl let-i let-btn=\"btn\">\n  <ng-container *ngIf=\"btn.icon\">\n    <i\n      *ngIf=\"!btn.icon.iconfont\"\n      nz-icon\n      [nzType]=\"btn.icon.type\"\n      [nzTheme]=\"btn.icon.theme\"\n      [nzSpin]=\"btn.icon.spin\"\n      [nzTwotoneColor]=\"btn.icon.twoToneColor\"\n    ></i>\n    <i *ngIf=\"btn.icon.iconfont\" nz-icon [nzIconfont]=\"btn.icon.iconfont\"></i>\n  </ng-container>\n  <span [innerHTML]=\"btn._text\" [ngClass]=\"{ 'pl-xs': btn.icon }\"></span>\n</ng-template>\n<ng-template #titleTpl let-i>\n  <span [innerHTML]=\"i._text\"></span>\n  <small *ngIf=\"i.optional\" class=\"st__head-optional\" [innerHTML]=\"i.optional\"></small>\n  <i *ngIf=\"i.optionalHelp\" class=\"st__head-tip\" nz-tooltip [nzTooltipTitle]=\"i.optionalHelp\" nz-icon nzType=\"question-circle\"></i>\n</ng-template>\n<ng-template #chkAllTpl let-custom>\n  <label\n    nz-checkbox\n    class=\"st__checkall\"\n    [nzDisabled]=\"_allCheckedDisabled\"\n    [(ngModel)]=\"_allChecked\"\n    [nzIndeterminate]=\"_indeterminate\"\n    (ngModelChange)=\"_checkAll()\"\n    [class.ant-table-selection-select-all-custom]=\"custom\"\n  ></label>\n</ng-template>\n<nz-table\n  #table\n  [nzData]=\"_data\"\n  [(nzPageIndex)]=\"pi\"\n  (nzPageIndexChange)=\"_change('pi')\"\n  [(nzPageSize)]=\"ps\"\n  (nzPageSizeChange)=\"_change('ps')\"\n  [nzTotal]=\"total\"\n  [nzShowPagination]=\"_isPagination\"\n  [nzFrontPagination]=\"false\"\n  [nzBordered]=\"bordered\"\n  [nzSize]=\"size\"\n  [nzLoading]=\"_loading\"\n  [nzLoadingDelay]=\"loadingDelay\"\n  [nzLoadingIndicator]=\"loadingIndicator\"\n  [nzTitle]=\"header!\"\n  [nzFooter]=\"footer!\"\n  [nzScroll]=\"scroll\"\n  [nzVirtualItemSize]=\"virtualItemSize\"\n  [nzVirtualMaxBufferPx]=\"virtualMaxBufferPx\"\n  [nzVirtualMinBufferPx]=\"virtualMinBufferPx\"\n  [nzVirtualForTrackBy]=\"virtualForTrackBy\"\n  [nzNoResult]=\"noResult!\"\n  [nzPageSizeOptions]=\"page.pageSizes!\"\n  [nzShowQuickJumper]=\"page.showQuickJumper\"\n  [nzShowSizeChanger]=\"page.showSize\"\n  [nzPaginationPosition]=\"page.position!\"\n  [nzPaginationType]=\"page.type!\"\n  [nzItemRender]=\"page.itemRender!\"\n  [nzSimple]=\"page.simple\"\n  [nzShowTotal]=\"totalTpl\"\n  [nzWidthConfig]=\"_widthConfig\"\n  (contextmenu)=\"onContextmenu($event)\"\n>\n  <thead *ngIf=\"showHeader\">\n    <tr *ngFor=\"let row of _headers; let rowFirst = first\">\n      <th *ngIf=\"rowFirst && expand\" nzWidth=\"50px\" [rowSpan]=\"_headers.length\"></th>\n      <ng-container *ngFor=\"let h of row; let index = index; let last = last\">\n        <th\n          *let=\"h.column as _c\"\n          [colSpan]=\"h.colSpan\"\n          [rowSpan]=\"h.rowSpan\"\n          [nzWidth]=\"$any(_c).width\"\n          [nzLeft]=\"_c._left!\"\n          [nzRight]=\"_c._right!\"\n          [ngClass]=\"_c.className!\"\n          [attr.data-col]=\"_c.indexKey\"\n          [attr.data-col-index]=\"index\"\n          [nzShowSort]=\"_c._sort.enabled\"\n          [nzSortOrder]=\"$any(_c)._sort.default\"\n          (nzSortOrderChange)=\"sort(_c, index, $event)\"\n          [nzCustomFilter]=\"$any(_c).filter\"\n          nz-resizable\n          [nzDisabled]=\"last || $any(_c).resizable.disabled\"\n          [nzMaxWidth]=\"$any(_c).resizable.maxWidth\"\n          [nzMinWidth]=\"$any(_c).resizable.minWidth\"\n          [nzBounds]=\"$any(_c).resizable.bounds\"\n          [nzPreview]=\"$any(_c).resizable.preview\"\n          (nzResizeEnd)=\"colResize($event, _c)\"\n        >\n          <nz-resize-handle *ngIf=\"$any(!last && !$any(_c).resizable.disabled)\" nzDirection=\"right\"><i></i></nz-resize-handle>\n          <ng-template #renderTitle [ngTemplateOutlet]=\"_c.__renderTitle!\" [ngTemplateOutletContext]=\"{ $implicit: h.column, index: index }\"></ng-template>\n          <ng-container *ngIf=\"!_c.__renderTitle; else renderTitle\">\n            <ng-container [ngSwitch]=\"_c.type\">\n              <ng-container *ngSwitchCase=\"'checkbox'\">\n                <ng-container *ngIf=\"_c.selections!.length === 0\">\n                  <ng-template [ngTemplateOutlet]=\"chkAllTpl\" [ngTemplateOutletContext]=\"{ $implicit: false }\"> </ng-template>\n                </ng-container>\n                <div *ngIf=\"_c.selections!.length > 0\" class=\"ant-table-selection\">\n                  <ng-template [ngTemplateOutlet]=\"chkAllTpl\" [ngTemplateOutletContext]=\"{ $implicit: true }\"> </ng-template>\n                  <div\n                    *ngIf=\"_c.selections!.length\"\n                    nz-dropdown\n                    nzPlacement=\"bottomLeft\"\n                    [nzDropdownMenu]=\"selectionMenu\"\n                    class=\"ant-table-selection-down st__checkall-selection\"\n                  >\n                    <i nz-icon nzType=\"down\"></i>\n                  </div>\n                  <nz-dropdown-menu #selectionMenu=\"nzDropdownMenu\">\n                    <ul nz-menu class=\"ant-table-selection-menu\">\n                      <li nz-menu-item *ngFor=\"let rw of _c.selections\" (click)=\"_rowSelection(rw)\" [innerHTML]=\"rw.text\"></li>\n                    </ul>\n                  </nz-dropdown-menu>\n                </div>\n              </ng-container>\n              <ng-container *ngSwitchDefault>\n                <ng-template [ngTemplateOutlet]=\"titleTpl\" [ngTemplateOutletContext]=\"{ $implicit: _c.title }\"></ng-template>\n              </ng-container>\n            </ng-container>\n          </ng-container>\n          <ng-container *ngIf=\"_c.filter\">\n            <div\n              nz-th-extra\n              *let=\"_c.filter as _f\"\n              class=\"ant-table-filter-trigger-container st__filter\"\n              [class.ant-table-filter-trigger-container-open]=\"$any(_f).visible\"\n            >\n              <span\n                class=\"ant-table-filter-trigger\"\n                [class.active]=\"$any(_f).visible || _f.default\"\n                nz-dropdown\n                [nzDropdownMenu]=\"filterMenu\"\n                nzTrigger=\"click\"\n                [nzClickHide]=\"false\"\n                [(nzVisible)]=\"$any(_f).visible\"\n                nzOverlayClassName=\"st__filter-wrap\"\n                (click)=\"_filterClick($event)\"\n              >\n                <i nz-icon [nzType]=\"$any(_f).icon.type\" [nzTheme]=\"$any(_f).icon.theme\"></i>\n              </span>\n              <nz-dropdown-menu #filterMenu=\"nzDropdownMenu\">\n                <div class=\"ant-table-filter-dropdown\">\n                  <ng-container [ngSwitch]=\"_f.type\">\n                    <div *ngSwitchCase=\"'keyword'\" class=\"st__filter-keyword\">\n                      <input type=\"text\" nz-input [attr.placeholder]=\"$any(_f).menus[0].text\" [(ngModel)]=\"$any(_f).menus[0].value\" />\n                    </div>\n                    <ul *ngSwitchDefault nz-menu>\n                      <ng-container *ngIf=\"_f.multiple\">\n                        <li nz-menu-item *ngFor=\"let filter of _f.menus\">\n                          <label nz-checkbox [(ngModel)]=\"filter.checked\">{{ filter.text }}</label>\n                        </li>\n                      </ng-container>\n                      <ng-container *ngIf=\"!_f.multiple\">\n                        <li nz-menu-item *ngFor=\"let filter of _f.menus\">\n                          <label nz-radio [ngModel]=\"filter.checked\" (ngModelChange)=\"_filterRadio(h.column, filter, $event)\">{{ filter.text }}</label>\n                        </li>\n                      </ng-container>\n                    </ul>\n                  </ng-container>\n                  <div class=\"ant-table-filter-dropdown-btns\">\n                    <a class=\"ant-table-filter-dropdown-link confirm\" (click)=\"$any(_f).visible = false\">\n                      <span (click)=\"_filterConfirm(h.column)\">{{ _f.confirmText || locale.filterConfirm }}</span>\n                    </a>\n                    <a class=\"ant-table-filter-dropdown-link clear\" (click)=\"$any(_f).visible = false\">\n                      <span (click)=\"_filterClear(h.column)\">{{ _f.clearText || locale.filterReset }}</span>\n                    </a>\n                  </div>\n                </div>\n              </nz-dropdown-menu>\n            </div>\n          </ng-container>\n        </th>\n      </ng-container>\n    </tr>\n  </thead>\n  <tbody class=\"st__body\">\n    <ng-container *ngIf=\"!_loading\">\n      <ng-template [ngTemplateOutlet]=\"bodyHeader!\" [ngTemplateOutletContext]=\"{ $implicit: _statistical }\"></ng-template>\n    </ng-container>\n    <ng-template #bodyTpl let-i let-index=\"index\">\n      <tr [attr.data-index]=\"index\" (click)=\"_rowClick($event, i, index)\" [ngClass]=\"i._rowClassName\">\n        <td\n          *ngIf=\"expand\"\n          [nzShowExpand]=\"expand && i.showExpand !== false\"\n          [nzExpand]=\"i.expand\"\n          (nzExpandChange)=\"_expandChange(i, $event)\"\n          nzWidth=\"50px\"\n        ></td>\n        <td\n          *ngFor=\"let c of _columns; let cIdx = index\"\n          [nzLeft]=\"!!c._left\"\n          [nzRight]=\"!!c._right\"\n          [attr.data-col-index]=\"cIdx\"\n          [ngClass]=\"c._className!\"\n          [attr.colspan]=\"c.colSpan\"\n        >\n          <span *ngIf=\"responsive\" class=\"ant-table-rep__title\">\n            <ng-template [ngTemplateOutlet]=\"titleTpl\" [ngTemplateOutletContext]=\"{ $implicit: c.title }\"></ng-template>\n          </span>\n          <span>\n            <ng-template #render [ngTemplateOutlet]=\"c.__render!\" [ngTemplateOutletContext]=\"{ $implicit: i, index: index, column: c }\"></ng-template>\n            <ng-container *ngIf=\"!c.__render; else render\">\n              <ng-container [ngSwitch]=\"c.type\">\n                <label\n                  *ngSwitchCase=\"'checkbox'\"\n                  nz-checkbox\n                  [nzDisabled]=\"i.disabled\"\n                  [ngModel]=\"i.checked\"\n                  (ngModelChange)=\"_checkSelection(i, $event)\"\n                ></label>\n                <label *ngSwitchCase=\"'radio'\" nz-radio [nzDisabled]=\"i.disabled\" [ngModel]=\"i.checked\" (ngModelChange)=\"_refRadio($event, i)\"></label>\n                <a *ngSwitchCase=\"'link'\" (click)=\"_click($event, i, c)\" [innerHTML]=\"i._values[cIdx]._text\" [attr.title]=\"i._values[cIdx].text\"></a>\n                <ng-container *ngIf=\"i._values[cIdx].text\">\n                  <nz-tag *ngSwitchCase=\"'tag'\" [nzColor]=\"i._values[cIdx].color\">\n                    <span [innerHTML]=\"i._values[cIdx]._text\"></span>\n                  </nz-tag>\n                  <nz-badge *ngSwitchCase=\"'badge'\" [nzStatus]=\"i._values[cIdx].color\" [nzText]=\"i._values[cIdx].text\"></nz-badge>\n                </ng-container>\n                <ng-template *ngSwitchCase=\"'widget'\" st-widget-host [record]=\"i\" [column]=\"c\"></ng-template>\n                <span *ngSwitchDefault [innerHTML]=\"i._values[cIdx]._text\" [attr.title]=\"c._isTruncate ? i._values[cIdx].text : null\"></span>\n              </ng-container>\n              <ng-container *ngFor=\"let btn of i._values[cIdx].buttons; let last = last\">\n                <a *ngIf=\"btn.children!.length > 0\" nz-dropdown [nzDropdownMenu]=\"btnMenu\" nzOverlayClassName=\"st__btn-sub\">\n                  <span [innerHTML]=\"btn._text\"></span>\n                  <i nz-icon nzType=\"down\"></i>\n                </a>\n                <nz-dropdown-menu #btnMenu=\"nzDropdownMenu\">\n                  <ul nz-menu>\n                    <ng-container *ngFor=\"let subBtn of btn.children!\">\n                      <li *ngIf=\"subBtn.type !== 'divider'\" nz-menu-item [class.st__btn-disabled]=\"subBtn._disabled\">\n                        <ng-template [ngTemplateOutlet]=\"btnTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: subBtn }\"> </ng-template>\n                      </li>\n                      <li *ngIf=\"subBtn.type === 'divider'\" nz-menu-divider></li>\n                    </ng-container>\n                  </ul>\n                </nz-dropdown-menu>\n                <span *ngIf=\"btn.children!.length == 0\" [class.st__btn-disabled]=\"btn._disabled\">\n                  <ng-template [ngTemplateOutlet]=\"btnTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"> </ng-template>\n                </span>\n                <nz-divider *ngIf=\"!last\" nzType=\"vertical\"></nz-divider>\n              </ng-container>\n            </ng-container>\n          </span>\n        </td>\n      </tr>\n      <tr [nzExpand]=\"i.expand\">\n        <ng-template [ngTemplateOutlet]=\"expand\" [ngTemplateOutletContext]=\"{ $implicit: i, index: index }\"></ng-template>\n      </tr>\n    </ng-template>\n    <ng-container *ngIf=\"!virtualScroll\">\n      <ng-container *ngFor=\"let i of _data; let index = index\">\n        <ng-template [ngTemplateOutlet]=\"bodyTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, index: index }\"> </ng-template>\n      </ng-container>\n    </ng-container>\n    <ng-container *ngIf=\"virtualScroll\">\n      <ng-template nz-virtual-scroll let-i let-index=\"index\">\n        <ng-template [ngTemplateOutlet]=\"bodyTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, index: index }\"> </ng-template>\n      </ng-template>\n    </ng-container>\n    <ng-container *ngIf=\"!_loading\">\n      <ng-template [ngTemplateOutlet]=\"body!\" [ngTemplateOutletContext]=\"{ $implicit: _statistical }\"></ng-template>\n    </ng-container>\n  </tbody>\n  <ng-template #totalTpl let-range=\"range\" let-total>{{ renderTotal(total, range) }}</ng-template>\n</nz-table>\n<nz-dropdown-menu #contextmenuTpl=\"nzDropdownMenu\">\n  <ul nz-menu class=\"st__contextmenu\">\n    <ng-container *ngFor=\"let i of contextmenuList\">\n      <li nz-menu-item *ngIf=\"i.children!.length === 0\" (click)=\"i.fn!(i)\" [innerHTML]=\"i.text\"></li>\n      <li nz-submenu *ngIf=\"i.children!.length > 0\" [nzTitle]=\"i.text\">\n        <ul>\n          <li nz-menu-item *ngFor=\"let ci of i.children\" (click)=\"ci.fn!(ci)\" [innerHTML]=\"ci.text\"></li>\n        </ul>\n      </li>\n    </ng-container>\n  </ul>\n</nz-dropdown-menu>\n",
                providers: [STDataSource, STRowSource, STColumnSource, STExport, DatePipe, YNPipe, DecimalPipe],
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
            },] }
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
    { type: AlainConfigService },
    { type: NzContextMenuService }
];
STComponent.propDecorators = {
    orgTable: [{ type: ViewChild, args: ['table',] }],
    contextmenuTpl: [{ type: ViewChild, args: ['contextmenuTpl',] }],
    req: [{ type: Input }],
    res: [{ type: Input }],
    page: [{ type: Input }],
    data: [{ type: Input }],
    columns: [{ type: Input }],
    contextmenu: [{ type: Input }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3N0L3N0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN4RCxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUdMLFFBQVEsRUFDUixNQUFNLEVBR04sV0FBVyxFQUVYLFNBQVMsRUFDVCxpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFFTCxnQkFBZ0IsRUFDaEIsUUFBUSxFQUNSLGtCQUFrQixFQUNsQixZQUFZLEVBRVosV0FBVyxFQUNYLE1BQU0sR0FDUCxNQUFNLGNBQWMsQ0FBQztBQUN0QixPQUFPLEVBQUUsa0JBQWtCLEVBQWlCLE1BQU0sb0JBQW9CLENBQUM7QUFDdkUsT0FBTyxFQUFnQixZQUFZLEVBQUUsV0FBVyxFQUFlLFNBQVMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3hHLE9BQU8sRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFM0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLHVCQUF1QixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFdkYsT0FBTyxFQUFFLGdCQUFnQixFQUFlLE1BQU0scUJBQXFCLENBQUM7QUFDcEUsT0FBTyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQWMsRUFBRSxFQUFFLE9BQU8sRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDakYsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsY0FB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cUJBQ0wsS0FBSzt1QkFDTCxLQUFLOzJCQUNMLEtBQUs7eUJBQ0wsS0FBSzt5Q0FDTCxLQUFLO29CQUNMLE1BQU07cUJBQ04sTUFBTTs0QkFDTixLQUFLOzhCQUNMLEtBQUs7aUNBQ0wsS0FBSztpQ0FDTCxLQUFLO2dDQUNMLEtBQUs7O0FBNURrQjtJQUFkLFdBQVcsRUFBRTs7dUNBQVM7QUFDUjtJQUFkLFdBQVcsRUFBRTs7dUNBQVE7QUFDUDtJQUFkLFdBQVcsRUFBRTs7MENBQVc7QUFFVjtJQUFkLFdBQVcsRUFBRTs7aURBQWtCO0FBRWhCO0lBQWYsWUFBWSxFQUFFOzs2Q0FBa0I7QUFxQ2pCO0lBQWYsWUFBWSxFQUFFOzsrQ0FBbUI7QUFJbEI7SUFBZixZQUFZLEVBQUU7O3FEQUEwQjtBQUN6QjtJQUFmLFlBQVksRUFBRTs7b0RBQXlCO0FBR3pCO0lBQWQsV0FBVyxFQUFFOztpREFBb0I7QUFDbEI7SUFBZixZQUFZLEVBQUU7OytDQUE0QjtBQUMzQjtJQUFmLFlBQVksRUFBRTs7K0RBQXFDO0FBR3BDO0lBQWYsWUFBWSxFQUFFOztrREFBdUI7QUFDdkI7SUFBZCxXQUFXLEVBQUU7O29EQUFzQjtBQUNyQjtJQUFkLFdBQVcsRUFBRTs7dURBQTBCO0FBQ3pCO0lBQWQsV0FBVyxFQUFFOzt1REFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQgfSBmcm9tICdAYW5ndWxhci9jZGsvc2Nyb2xsaW5nJztcbmltcG9ydCB7IERlY2ltYWxQaXBlLCBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVHJhY2tCeUZ1bmN0aW9uLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBBbGFpbkkxOE5TZXJ2aWNlLFxuICBBTEFJTl9JMThOX1RPS0VOLFxuICBEYXRlUGlwZSxcbiAgRGVsb25Mb2NhbGVTZXJ2aWNlLFxuICBEcmF3ZXJIZWxwZXIsXG4gIExvY2FsZURhdGEsXG4gIE1vZGFsSGVscGVyLFxuICBZTlBpcGUsXG59IGZyb20gJ0BkZWxvbi90aGVtZSc7XG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UsIEFsYWluU1RDb25maWcgfSBmcm9tICdAZGVsb24vdXRpbC9jb25maWcnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBJbnB1dEJvb2xlYW4sIElucHV0TnVtYmVyLCBOdW1iZXJJbnB1dCwgdG9Cb29sZWFuIH0gZnJvbSAnQGRlbG9uL3V0aWwvZGVjb3JhdG9yJztcbmltcG9ydCB7IGRlZXBDb3B5LCBkZWVwTWVyZ2VLZXkgfSBmcm9tICdAZGVsb24vdXRpbC9vdGhlcic7XG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgTnpDb250ZXh0TWVudVNlcnZpY2UsIE56RHJvcGRvd25NZW51Q29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC9kcm9wZG93bic7XG5pbXBvcnQgeyBOelJlc2l6ZUV2ZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC9yZXNpemFibGUnO1xuaW1wb3J0IHsgTnpUYWJsZUNvbXBvbmVudCwgTnpUYWJsZURhdGEgfSBmcm9tICduZy16b3Jyby1hbnRkL3RhYmxlJztcbmltcG9ydCB7IGZyb20sIGlzT2JzZXJ2YWJsZSwgT2JzZXJ2YWJsZSwgb2YsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTVENvbHVtblNvdXJjZSB9IGZyb20gJy4vc3QtY29sdW1uLXNvdXJjZSc7XG5pbXBvcnQgeyBTVERhdGFTb3VyY2UsIFNURGF0YVNvdXJjZU9wdGlvbnMsIFNURGF0YVNvdXJjZVJlc3VsdCB9IGZyb20gJy4vc3QtZGF0YS1zb3VyY2UnO1xuaW1wb3J0IHsgU1RFeHBvcnQgfSBmcm9tICcuL3N0LWV4cG9ydCc7XG5pbXBvcnQgeyBTVFJvd1NvdXJjZSB9IGZyb20gJy4vc3Qtcm93LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBTVF9ERUZBVUxUX0NPTkZJRyB9IGZyb20gJy4vc3QuY29uZmlnJztcbmltcG9ydCB7XG4gIFNUQ2hhbmdlLFxuICBTVENoYW5nZVR5cGUsXG4gIFNUQ29sdW1uLFxuICBTVENvbHVtbkJ1dHRvbixcbiAgU1RDb2x1bW5GaWx0ZXJNZW51LFxuICBTVENvbHVtblNlbGVjdGlvbixcbiAgU1RDb250ZXh0bWVudUZuLFxuICBTVENvbnRleHRtZW51SXRlbSxcbiAgU1REYXRhLFxuICBTVEVycm9yLFxuICBTVEV4cG9ydE9wdGlvbnMsXG4gIFNUTG9hZE9wdGlvbnMsXG4gIFNUTXVsdGlTb3J0LFxuICBTVFBhZ2UsXG4gIFNUUmVxLFxuICBTVFJlcyxcbiAgU1RSZXNldENvbHVtbnNPcHRpb24sXG4gIFNUUmVzaXphYmxlLFxuICBTVFJvd0NsYXNzTmFtZSxcbiAgU1RTaW5nbGVTb3J0LFxuICBTVFN0YXRpc3RpY2FsUmVzdWx0cyxcbiAgU1RXaWR0aE1vZGUsXG59IGZyb20gJy4vc3QuaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBfU1RDb2x1bW4sIF9TVERhdGFWYWx1ZSwgX1NUSGVhZGVyIH0gZnJvbSAnLi9zdC50eXBlcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N0JyxcbiAgZXhwb3J0QXM6ICdzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zdC5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW1NURGF0YVNvdXJjZSwgU1RSb3dTb3VyY2UsIFNUQ29sdW1uU291cmNlLCBTVEV4cG9ydCwgRGF0ZVBpcGUsIFlOUGlwZSwgRGVjaW1hbFBpcGVdLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5zdF0nOiBgdHJ1ZWAsXG4gICAgJ1tjbGFzcy5zdF9fcC1sZWZ0XSc6IGBwYWdlLnBsYWNlbWVudCA9PT0gJ2xlZnQnYCxcbiAgICAnW2NsYXNzLnN0X19wLWNlbnRlcl0nOiBgcGFnZS5wbGFjZW1lbnQgPT09ICdjZW50ZXInYCxcbiAgICAnW2NsYXNzLnN0X193aWR0aC1zdHJpY3RdJzogYHdpZHRoTW9kZS50eXBlID09PSAnc3RyaWN0J2AsXG4gICAgJ1tjbGFzcy5hbnQtdGFibGUtcmVwXSc6IGByZXNwb25zaXZlYCxcbiAgICAnW2NsYXNzLmFudC10YWJsZS1yZXBfX2hpZGUtaGVhZGVyLWZvb3Rlcl0nOiBgcmVzcG9uc2l2ZUhpZGVIZWFkZXJGb290ZXJgLFxuICB9LFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIFNUQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfcHM6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfcGk6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfdG90YWw6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbG9hZGluZ0RlbGF5OiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2JvcmRlcmVkOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9leHBhbmRSb3dCeUNsaWNrOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9leHBhbmRBY2NvcmRpb246IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3Jvd0NsaWNrVGltZTogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9yZXNwb25zaXZlOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9yZXNwb25zaXZlSGlkZUhlYWRlckZvb3RlcjogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfdmlydHVhbFNjcm9sbDogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfdmlydHVhbEl0ZW1TaXplOiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3ZpcnR1YWxNYXhCdWZmZXJQeDogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV92aXJ0dWFsTWluQnVmZmVyUHg6IE51bWJlcklucHV0O1xuXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIGRhdGEkOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgdG90YWxUcGwgPSBgYDtcbiAgcHJpdmF0ZSBjb2c6IEFsYWluU1RDb25maWc7XG4gIHByaXZhdGUgcm93Q2xpY2tDb3VudCA9IDA7XG4gIHByaXZhdGUgX3JlcTogU1RSZXE7XG4gIHByaXZhdGUgX3JlczogU1RSZXM7XG4gIHByaXZhdGUgX3BhZ2U6IFNUUGFnZTtcbiAgcHJpdmF0ZSBfd2lkdGhNb2RlOiBTVFdpZHRoTW9kZTtcbiAgcHJpdmF0ZSBjdXN0b21XaWR0aENvbmZpZzogYm9vbGVhbiA9IGZhbHNlO1xuICBfd2lkdGhDb25maWc6IHN0cmluZ1tdID0gW107XG4gIGxvY2FsZTogTG9jYWxlRGF0YSA9IHt9O1xuICBfbG9hZGluZyA9IGZhbHNlO1xuICBfZGF0YTogU1REYXRhW10gPSBbXTtcbiAgX3N0YXRpc3RpY2FsOiBTVFN0YXRpc3RpY2FsUmVzdWx0cyA9IHt9O1xuICBfaXNQYWdpbmF0aW9uID0gdHJ1ZTtcbiAgX2FsbENoZWNrZWQgPSBmYWxzZTtcbiAgX2FsbENoZWNrZWREaXNhYmxlZCA9IGZhbHNlO1xuICBfaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICBfaGVhZGVyczogX1NUSGVhZGVyW11bXSA9IFtdO1xuICBfY29sdW1uczogX1NUQ29sdW1uW10gPSBbXTtcbiAgY29udGV4dG1lbnVMaXN0OiBTVENvbnRleHRtZW51SXRlbVtdID0gW107XG4gIEBWaWV3Q2hpbGQoJ3RhYmxlJykgcmVhZG9ubHkgb3JnVGFibGU6IE56VGFibGVDb21wb25lbnQ7XG4gIEBWaWV3Q2hpbGQoJ2NvbnRleHRtZW51VHBsJykgcmVhZG9ubHkgY29udGV4dG1lbnVUcGwhOiBOekRyb3Bkb3duTWVudUNvbXBvbmVudDtcblxuICBASW5wdXQoKVxuICBnZXQgcmVxKCk6IFNUUmVxIHtcbiAgICByZXR1cm4gdGhpcy5fcmVxO1xuICB9XG4gIHNldCByZXEodmFsdWU6IFNUUmVxKSB7XG4gICAgdGhpcy5fcmVxID0gZGVlcE1lcmdlS2V5KHt9LCB0cnVlLCB0aGlzLmNvZy5yZXEsIHZhbHVlKTtcbiAgfVxuICAvKiog6L+U5Zue5L2T6YWN572uICovXG4gIEBJbnB1dCgpXG4gIGdldCByZXMoKTogU1RSZXMge1xuICAgIHJldHVybiB0aGlzLl9yZXM7XG4gIH1cbiAgc2V0IHJlcyh2YWx1ZTogU1RSZXMpIHtcbiAgICBjb25zdCBpdGVtID0gKHRoaXMuX3JlcyA9IGRlZXBNZXJnZUtleSh7fSwgdHJ1ZSwgdGhpcy5jb2cucmVzLCB2YWx1ZSkpO1xuICAgIGNvbnN0IHJlTmFtZSA9IGl0ZW0ucmVOYW1lITtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkocmVOYW1lLmxpc3QpKSByZU5hbWUubGlzdCA9IHJlTmFtZS5saXN0IS5zcGxpdCgnLicpO1xuICAgIGlmICghQXJyYXkuaXNBcnJheShyZU5hbWUudG90YWwpKSByZU5hbWUudG90YWwgPSByZU5hbWUudG90YWwhLnNwbGl0KCcuJyk7XG4gICAgdGhpcy5fcmVzID0gaXRlbTtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgcGFnZSgpOiBTVFBhZ2Uge1xuICAgIHJldHVybiB0aGlzLl9wYWdlO1xuICB9XG4gIHNldCBwYWdlKHZhbHVlOiBTVFBhZ2UpIHtcbiAgICB0aGlzLl9wYWdlID0geyAuLi50aGlzLmNvZy5wYWdlLCAuLi52YWx1ZSB9O1xuICAgIHRoaXMudXBkYXRlVG90YWxUcGwoKTtcbiAgfVxuICBASW5wdXQoKSBkYXRhOiBzdHJpbmcgfCBTVERhdGFbXSB8IE9ic2VydmFibGU8U1REYXRhW10+O1xuICBASW5wdXQoKSBjb2x1bW5zOiBTVENvbHVtbltdID0gW107XG4gIEBJbnB1dCgpIGNvbnRleHRtZW51PzogU1RDb250ZXh0bWVudUZuO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBwcyA9IDEwO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBwaSA9IDE7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHRvdGFsID0gMDtcbiAgQElucHV0KCkgbG9hZGluZzogYm9vbGVhbiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBsb2FkaW5nRGVsYXkgPSAwO1xuICBASW5wdXQoKSBsb2FkaW5nSW5kaWNhdG9yOiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJvcmRlcmVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNpemU6ICdzbWFsbCcgfCAnbWlkZGxlJyB8ICdkZWZhdWx0JztcbiAgQElucHV0KCkgc2Nyb2xsOiB7IHk/OiBzdHJpbmc7IHg/OiBzdHJpbmcgfTtcbiAgQElucHV0KCkgc2luZ2xlU29ydDogU1RTaW5nbGVTb3J0O1xuICBwcml2YXRlIF9tdWx0aVNvcnQ/OiBTVE11bHRpU29ydDtcbiAgQElucHV0KClcbiAgZ2V0IG11bHRpU29ydCgpOiBOelNhZmVBbnkge1xuICAgIHJldHVybiB0aGlzLl9tdWx0aVNvcnQ7XG4gIH1cbiAgc2V0IG11bHRpU29ydCh2YWx1ZTogTnpTYWZlQW55KSB7XG4gICAgaWYgKCh0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJyAmJiAhdG9Cb29sZWFuKHZhbHVlKSkgfHwgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMCkpIHtcbiAgICAgIHRoaXMuX211bHRpU29ydCA9IHVuZGVmaW5lZDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fbXVsdGlTb3J0ID0ge1xuICAgICAgLi4uKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgPyB2YWx1ZSA6IHt9KSxcbiAgICB9O1xuICB9XG4gIEBJbnB1dCgpIHJvd0NsYXNzTmFtZTogU1RSb3dDbGFzc05hbWU7XG4gIEBJbnB1dCgpXG4gIHNldCB3aWR0aE1vZGUodmFsdWU6IFNUV2lkdGhNb2RlKSB7XG4gICAgdGhpcy5fd2lkdGhNb2RlID0geyAuLi50aGlzLmNvZy53aWR0aE1vZGUsIC4uLnZhbHVlIH07XG4gIH1cbiAgZ2V0IHdpZHRoTW9kZSgpOiBTVFdpZHRoTW9kZSB7XG4gICAgcmV0dXJuIHRoaXMuX3dpZHRoTW9kZTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgd2lkdGhDb25maWcodmFsOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3dpZHRoQ29uZmlnID0gdmFsO1xuICAgIHRoaXMuY3VzdG9tV2lkdGhDb25maWcgPSB2YWwgJiYgdmFsLmxlbmd0aCA+IDA7XG4gIH1cbiAgcHJpdmF0ZSBfcmVzaXphYmxlOiBTVFJlc2l6YWJsZTtcbiAgQElucHV0KClcbiAgc2V0IHJlc2l6YWJsZSh2YWw6IFNUUmVzaXphYmxlIHwgYm9vbGVhbiB8IHN0cmluZykge1xuICAgIHRoaXMuX3Jlc2l6YWJsZSA9IHR5cGVvZiB2YWwgPT09ICdvYmplY3QnID8gdmFsIDogeyBkaXNhYmxlZDogIXRvQm9vbGVhbih2YWwpIH07XG4gIH1cbiAgQElucHV0KCkgaGVhZGVyPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd0hlYWRlciA9IHRydWU7XG4gIEBJbnB1dCgpIGZvb3Rlcj86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbDtcbiAgQElucHV0KCkgYm9keUhlYWRlcj86IFRlbXBsYXRlUmVmPFNUU3RhdGlzdGljYWxSZXN1bHRzPiB8IG51bGw7XG4gIEBJbnB1dCgpIGJvZHk/OiBUZW1wbGF0ZVJlZjxTVFN0YXRpc3RpY2FsUmVzdWx0cz4gfCBudWxsO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZXhwYW5kUm93QnlDbGljayA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZXhwYW5kQWNjb3JkaW9uID0gZmFsc2U7XG4gIEBJbnB1dCgpIGV4cGFuZDogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IHt9OyBjb2x1bW46IFNUQ29sdW1uIH0+O1xuICBASW5wdXQoKSBub1Jlc3VsdD86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHwgbnVsbDtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgcm93Q2xpY2tUaW1lID0gMjAwO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgcmVzcG9uc2l2ZTogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSByZXNwb25zaXZlSGlkZUhlYWRlckZvb3RlcjogYm9vbGVhbjtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGVycm9yID0gbmV3IEV2ZW50RW1pdHRlcjxTVEVycm9yPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxTVENoYW5nZT4oKTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHZpcnR1YWxTY3JvbGwgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgdmlydHVhbEl0ZW1TaXplID0gNTQ7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHZpcnR1YWxNYXhCdWZmZXJQeCA9IDIwMDtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgdmlydHVhbE1pbkJ1ZmZlclB4ID0gMTAwO1xuICBASW5wdXQoKSB2aXJ0dWFsRm9yVHJhY2tCeTogVHJhY2tCeUZ1bmN0aW9uPE56VGFibGVEYXRhPiA9IGluZGV4ID0+IGluZGV4O1xuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG51bWJlciBvZiB0aGUgY3VycmVudCBwYWdlXG4gICAqL1xuICBnZXQgY291bnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YS5sZW5ndGg7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBkYXRhIG9mIHRoZSBjdXJyZW50IHBhZ2VcbiAgICovXG4gIGdldCBsaXN0KCk6IFNURGF0YVtdIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IHJvdXRlclN0YXRlKCk6IHsgcGk6IG51bWJlcjsgcHM6IG51bWJlcjsgdG90YWw6IG51bWJlciB9IHtcbiAgICBjb25zdCB7IHBpLCBwcywgdG90YWwgfSA9IHRoaXM7XG4gICAgcmV0dXJuIHsgcGksIHBzLCB0b3RhbCB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChBTEFJTl9JMThOX1RPS0VOKSBpMThuU3J2OiBBbGFpbkkxOE5TZXJ2aWNlLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBleHBvcnRTcnY6IFNURXhwb3J0LFxuICAgIHByaXZhdGUgbW9kYWxIZWxwZXI6IE1vZGFsSGVscGVyLFxuICAgIHByaXZhdGUgZHJhd2VySGVscGVyOiBEcmF3ZXJIZWxwZXIsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2M6IGFueSxcbiAgICBwcml2YXRlIGNvbHVtblNvdXJjZTogU1RDb2x1bW5Tb3VyY2UsXG4gICAgcHJpdmF0ZSBkYXRhU291cmNlOiBTVERhdGFTb3VyY2UsXG4gICAgcHJpdmF0ZSBkZWxvbkkxOG46IERlbG9uTG9jYWxlU2VydmljZSxcbiAgICBjb25maWdTcnY6IEFsYWluQ29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIGNtczogTnpDb250ZXh0TWVudVNlcnZpY2UsXG4gICkge1xuICAgIHRoaXMuc2V0Q29nKGNvbmZpZ1Nydi5tZXJnZSgnc3QnLCBTVF9ERUZBVUxUX0NPTkZJRykhKTtcblxuICAgIHRoaXMuZGVsb25JMThuLmNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMubG9jYWxlID0gdGhpcy5kZWxvbkkxOG4uZ2V0RGF0YSgnc3QnKTtcbiAgICAgIGlmICh0aGlzLl9jb2x1bW5zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy51cGRhdGVUb3RhbFRwbCgpO1xuICAgICAgICB0aGlzLmNkKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpMThuU3J2LmNoYW5nZVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcbiAgICAgICAgZmlsdGVyKCgpID0+IHRoaXMuX2NvbHVtbnMubGVuZ3RoID4gMCksXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMucmVmcmVzaENvbHVtbnMoKSk7XG4gIH1cblxuICBwcml2YXRlIHNldENvZyhjb2c6IEFsYWluU1RDb25maWcpOiB2b2lkIHtcbiAgICBjb25zdCBjb3B5TXVsdGlTb3J0ID0geyAuLi5jb2cubXVsdGlTb3J0IH07XG4gICAgLy8gQmVjYXVzZSBtdWx0aVNvcnQuZ2xvYmFsIHdpbGwgYWZmZWN0IHRoZSByZXN1bHQsIGl0IHNob3VsZCBiZSByZW1vdmVkIGZpcnN0LCBhbmQgbXVsdGlTb3J0IHdpbGwgYmUgb3BlcmF0ZWQgYWdhaW4gYWZ0ZXIgcHJvY2Vzc2luZy5cbiAgICBkZWxldGUgY29nLm11bHRpU29ydDtcbiAgICB0aGlzLmNvZyA9IGNvZztcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvZyk7XG5cbiAgICBpZiAoY29weU11bHRpU29ydC5nbG9iYWwgIT09IGZhbHNlKSB7XG4gICAgICB0aGlzLm11bHRpU29ydCA9IGNvcHlNdWx0aVNvcnQ7XG4gICAgfVxuICAgIHRoaXMuY29sdW1uU291cmNlLnNldENvZyhjb2cpO1xuICB9XG5cbiAgY2QoKTogdGhpcyB7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVuZGVyVG90YWwodG90YWw6IHN0cmluZywgcmFuZ2U6IHN0cmluZ1tdKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy50b3RhbFRwbFxuICAgICAgPyB0aGlzLnRvdGFsVHBsLnJlcGxhY2UoJ3t7dG90YWx9fScsIHRvdGFsKS5yZXBsYWNlKCd7e3JhbmdlWzBdfX0nLCByYW5nZVswXSkucmVwbGFjZSgne3tyYW5nZVsxXX19JywgcmFuZ2VbMV0pXG4gICAgICA6ICcnO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGFuZ2VFbWl0KHR5cGU6IFNUQ2hhbmdlVHlwZSwgZGF0YT86IGFueSk6IHZvaWQge1xuICAgIGNvbnN0IHJlczogU1RDaGFuZ2UgPSB7XG4gICAgICB0eXBlLFxuICAgICAgcGk6IHRoaXMucGksXG4gICAgICBwczogdGhpcy5wcyxcbiAgICAgIHRvdGFsOiB0aGlzLnRvdGFsLFxuICAgIH07XG4gICAgaWYgKGRhdGEgIT0gbnVsbCkge1xuICAgICAgcmVzW3R5cGVdID0gZGF0YTtcbiAgICB9XG4gICAgdGhpcy5jaGFuZ2UuZW1pdChyZXMpO1xuICB9XG5cbiAgLy8gI3JlZ2lvbiBkYXRhXG5cbiAgLyoqXG4gICAqIOiOt+WPlui/h+a7pOWQjuaJgOacieaVsOaNrlxuICAgKiAtIOacrOWcsOaVsOaNru+8muWMheWQq+aOkuW6j+OAgei/h+a7pOWQjuS4jeWIhumhteaVsOaNrlxuICAgKiAtIOi/nOeoi+aVsOaNru+8muS4jeS8oOmAkiBgcGlg44CBYHBzYCDkuKTkuKrlj4LmlbBcbiAgICovXG4gIGdldCBmaWx0ZXJlZERhdGEoKTogUHJvbWlzZTxTVERhdGFbXT4ge1xuICAgIHJldHVybiB0aGlzLmxvYWREYXRhKHsgcGFnaW5hdG9yOiBmYWxzZSB9IGFzIGFueSkudGhlbihyZXMgPT4gcmVzLmxpc3QpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVUb3RhbFRwbCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IHRvdGFsIH0gPSB0aGlzLnBhZ2U7XG4gICAgaWYgKHR5cGVvZiB0b3RhbCA9PT0gJ3N0cmluZycgJiYgdG90YWwubGVuZ3RoKSB7XG4gICAgICB0aGlzLnRvdGFsVHBsID0gdG90YWw7XG4gICAgfSBlbHNlIGlmICh0b0Jvb2xlYW4odG90YWwpKSB7XG4gICAgICB0aGlzLnRvdGFsVHBsID0gdGhpcy5sb2NhbGUudG90YWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudG90YWxUcGwgPSAnJztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldExvYWRpbmcodmFsOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubG9hZGluZyA9PSBudWxsKSB7XG4gICAgICB0aGlzLl9sb2FkaW5nID0gdmFsO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbG9hZERhdGEob3B0aW9ucz86IFNURGF0YVNvdXJjZU9wdGlvbnMpOiBQcm9taXNlPFNURGF0YVNvdXJjZVJlc3VsdD4ge1xuICAgIGNvbnN0IHsgcGksIHBzLCBkYXRhLCByZXEsIHJlcywgcGFnZSwgdG90YWwsIHNpbmdsZVNvcnQsIG11bHRpU29ydCwgcm93Q2xhc3NOYW1lIH0gPSB0aGlzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZVByb21pc2UsIHJlamVjdFByb21pc2UpID0+IHtcbiAgICAgIGlmICh0aGlzLmRhdGEkKSB7XG4gICAgICAgIHRoaXMuZGF0YSQudW5zdWJzY3JpYmUoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5kYXRhJCA9IHRoaXMuZGF0YVNvdXJjZVxuICAgICAgICAucHJvY2Vzcyh7XG4gICAgICAgICAgcGksXG4gICAgICAgICAgcHMsXG4gICAgICAgICAgdG90YWwsXG4gICAgICAgICAgZGF0YSxcbiAgICAgICAgICByZXEsXG4gICAgICAgICAgcmVzLFxuICAgICAgICAgIHBhZ2UsXG4gICAgICAgICAgY29sdW1uczogdGhpcy5fY29sdW1ucyxcbiAgICAgICAgICBzaW5nbGVTb3J0LFxuICAgICAgICAgIG11bHRpU29ydCxcbiAgICAgICAgICByb3dDbGFzc05hbWUsXG4gICAgICAgICAgcGFnaW5hdG9yOiB0cnVlLFxuICAgICAgICAgIHNhZnRIdG1sOiB0aGlzLmNvZy5zYWZ0SHRtbCEsXG4gICAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgfSlcbiAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgIHJlc3VsdCA9PiByZXNvbHZlUHJvbWlzZShyZXN1bHQpLFxuICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybignc3QubG9hZERhdGUnLCBlcnJvcik7XG4gICAgICAgICAgICByZWplY3RQcm9taXNlKGVycm9yKTtcbiAgICAgICAgICB9LFxuICAgICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBsb2FkUGFnZURhdGEoKTogUHJvbWlzZTx0aGlzPiB7XG4gICAgdGhpcy5zZXRMb2FkaW5nKHRydWUpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmxvYWREYXRhKCk7XG4gICAgICB0aGlzLnNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgaWYgKHR5cGVvZiByZXN1bHQucGkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMucGkgPSByZXN1bHQucGk7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHJlc3VsdC5wcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5wcyA9IHJlc3VsdC5wcztcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgcmVzdWx0LnRvdGFsICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLnRvdGFsID0gcmVzdWx0LnRvdGFsO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiByZXN1bHQucGFnZVNob3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMuX2lzUGFnaW5hdGlvbiA9IHJlc3VsdC5wYWdlU2hvdztcbiAgICAgIH1cbiAgICAgIHRoaXMuX2RhdGEgPSByZXN1bHQubGlzdDtcbiAgICAgIHRoaXMuX3N0YXRpc3RpY2FsID0gcmVzdWx0LnN0YXRpc3RpY2FsIGFzIFNUU3RhdGlzdGljYWxSZXN1bHRzO1xuICAgICAgdGhpcy5jaGFuZ2VFbWl0KCdsb2FkZWQnLCByZXN1bHQubGlzdCk7XG4gICAgICAvLyBTaG91bGQgYmUgcmUtcmVuZGVyIGluIG5leHQgdGlrZSB3aGVuIHVzaW5nIHZpcnR1YWwgc2Nyb2xsXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbmctYWxhaW4vbmctYWxhaW4vaXNzdWVzLzE4MzZcbiAgICAgIGlmICh0aGlzLmNka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydCkge1xuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRoaXMuY2RrVmlydHVhbFNjcm9sbFZpZXdwb3J0LmNoZWNrVmlld3BvcnRTaXplKCkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuX3JlZkNoZWNrKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMuc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICBpZiAoIXRoaXMuZGVzdHJveSQuaXNTdG9wcGVkKSB7XG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgdGhpcy5lcnJvci5lbWl0KHsgdHlwZTogJ3JlcScsIGVycm9yIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9XG5cbiAgLyoqIOa4heepuuaJgOacieaVsOaNriAqL1xuICBjbGVhcihjbGVhblN0YXR1czogYm9vbGVhbiA9IHRydWUpOiB0aGlzIHtcbiAgICBpZiAoY2xlYW5TdGF0dXMpIHtcbiAgICAgIHRoaXMuY2xlYXJTdGF0dXMoKTtcbiAgICB9XG4gICAgdGhpcy5fZGF0YSA9IFtdO1xuICAgIHJldHVybiB0aGlzLmNkKCk7XG4gIH1cblxuICAvKiog5riF56m65omA5pyJ54q25oCBICovXG4gIGNsZWFyU3RhdHVzKCk6IHRoaXMge1xuICAgIHJldHVybiB0aGlzLmNsZWFyQ2hlY2soKS5jbGVhclJhZGlvKCkuY2xlYXJGaWx0ZXIoKS5jbGVhclNvcnQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmoLnmja7pobXnoIHph43mlrDliqDovb3mlbDmja5cbiAgICpcbiAgICogQHBhcmFtIHBpIOaMh+WumuW9k+WJjemhteegge+8jOm7mOiupO+8mmAxYFxuICAgKiBAcGFyYW0gZXh0cmFQYXJhbXMg6YeN5paw5oyH5a6aIGBleHRyYVBhcmFtc2Ag5YC8XG4gICAqIEBwYXJhbSBvcHRpb25zIOmAiemhuVxuICAgKi9cbiAgbG9hZChwaTogbnVtYmVyID0gMSwgZXh0cmFQYXJhbXM/OiB7fSwgb3B0aW9ucz86IFNUTG9hZE9wdGlvbnMpOiB0aGlzIHtcbiAgICBpZiAocGkgIT09IC0xKSB0aGlzLnBpID0gcGk7XG4gICAgaWYgKHR5cGVvZiBleHRyYVBhcmFtcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVxLnBhcmFtcyA9IG9wdGlvbnMgJiYgb3B0aW9ucy5tZXJnZSA/IHsgLi4udGhpcy5yZXEucGFyYW1zLCAuLi5leHRyYVBhcmFtcyB9IDogZXh0cmFQYXJhbXM7XG4gICAgfVxuICAgIHRoaXMuX2NoYW5nZSgncGknLCBvcHRpb25zKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiDph43mlrDliLfmlrDlvZPliY3pobVcbiAgICogQHBhcmFtIGV4dHJhUGFyYW1zIOmHjeaWsOaMh+WumiBgZXh0cmFQYXJhbXNgIOWAvFxuICAgKi9cbiAgcmVsb2FkKGV4dHJhUGFyYW1zPzoge30sIG9wdGlvbnM/OiBTVExvYWRPcHRpb25zKTogdGhpcyB7XG4gICAgcmV0dXJuIHRoaXMubG9hZCgtMSwgZXh0cmFQYXJhbXMsIG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIOmHjee9ruS4lOmHjeaWsOiuvue9riBgcGlgIOS4uiBgMWDvvIzljIXlkKvku6XkuIvlgLzvvJpcbiAgICogLSBgY2hlY2tgIOaVsOaNrlxuICAgKiAtIGByYWRpb2Ag5pWw5o2uXG4gICAqIC0gYHNvcnRgIOaVsOaNrlxuICAgKiAtIGBmaWxldGVyYCDmlbDmja5cbiAgICpcbiAgICogQHBhcmFtIGV4dHJhUGFyYW1zIOmHjeaWsOaMh+WumiBgZXh0cmFQYXJhbXNgIOWAvFxuICAgKi9cbiAgcmVzZXQoZXh0cmFQYXJhbXM/OiB7fSwgb3B0aW9ucz86IFNUTG9hZE9wdGlvbnMpOiB0aGlzIHtcbiAgICB0aGlzLmNsZWFyU3RhdHVzKCkubG9hZCgxLCBleHRyYVBhcmFtcywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcml2YXRlIF90b1RvcChlbmZvcmNlPzogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICghKGVuZm9yY2UgPT0gbnVsbCA/IHRoaXMucGFnZS50b1RvcCA6IGVuZm9yY2UpKSByZXR1cm47XG4gICAgY29uc3QgZWwgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgaWYgKHRoaXMuc2Nyb2xsKSB7XG4gICAgICBpZiAodGhpcy5jZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQpIHtcbiAgICAgICAgdGhpcy5jZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQuc2Nyb2xsVG8oe1xuICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsLnF1ZXJ5U2VsZWN0b3IoJy5hbnQtdGFibGUtYm9keSwgLmFudC10YWJsZS1jb250ZW50Jyk/LnNjcm9sbFRvKDAsIDApO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbC5zY3JvbGxJbnRvVmlldygpO1xuICAgIC8vIGZpeCBoZWFkZXIgaGVpZ2h0XG4gICAgdGhpcy5kb2MuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCAtPSB0aGlzLnBhZ2UudG9Ub3BPZmZzZXQhO1xuICB9XG5cbiAgX2NoYW5nZSh0eXBlOiAncGknIHwgJ3BzJywgb3B0aW9ucz86IFNUTG9hZE9wdGlvbnMpOiB2b2lkIHtcbiAgICBpZiAodHlwZSA9PT0gJ3BpJyB8fCAodHlwZSA9PT0gJ3BzJyAmJiB0aGlzLnBpIDw9IE1hdGguY2VpbCh0aGlzLnRvdGFsIC8gdGhpcy5wcykpKSB7XG4gICAgICB0aGlzLmxvYWRQYWdlRGF0YSgpLnRoZW4oKCkgPT4gdGhpcy5fdG9Ub3Aob3B0aW9ucz8udG9Ub3ApKTtcbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZUVtaXQodHlwZSk7XG4gIH1cblxuICBfY2xpY2soZTogRXZlbnQsIGl0ZW06IFNURGF0YSwgY29sOiBTVENvbHVtbik6IGJvb2xlYW4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IHJlcyA9IGNvbC5jbGljayEoaXRlbSwgdGhpcyk7XG4gICAgaWYgKHR5cGVvZiByZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHJlcywgeyBzdGF0ZTogdGhpcy5yb3V0ZXJTdGF0ZSB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHByaXZhdGUgY2xvc2VPdGhlckV4cGFuZChpdGVtOiBTVERhdGEpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5leHBhbmRBY2NvcmRpb24gPT09IGZhbHNlKSByZXR1cm47XG4gICAgdGhpcy5fZGF0YS5maWx0ZXIoaSA9PiBpICE9PSBpdGVtKS5mb3JFYWNoKGkgPT4gKGkuZXhwYW5kID0gZmFsc2UpKTtcbiAgfVxuICBfcm93Q2xpY2soZTogRXZlbnQsIGl0ZW06IFNURGF0YSwgaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIGlmICgoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLm5vZGVOYW1lID09PSAnSU5QVVQnKSByZXR1cm47XG4gICAgY29uc3QgeyBleHBhbmQsIGV4cGFuZFJvd0J5Q2xpY2ssIHJvd0NsaWNrVGltZSB9ID0gdGhpcztcbiAgICBpZiAoISFleHBhbmQgJiYgaXRlbS5zaG93RXhwYW5kICE9PSBmYWxzZSAmJiBleHBhbmRSb3dCeUNsaWNrKSB7XG4gICAgICBpdGVtLmV4cGFuZCA9ICFpdGVtLmV4cGFuZDtcbiAgICAgIHRoaXMuY2xvc2VPdGhlckV4cGFuZChpdGVtKTtcbiAgICAgIHRoaXMuY2hhbmdlRW1pdCgnZXhwYW5kJywgaXRlbSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgICsrdGhpcy5yb3dDbGlja0NvdW50O1xuICAgIGlmICh0aGlzLnJvd0NsaWNrQ291bnQgIT09IDEpIHJldHVybjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSB7IGUsIGl0ZW0sIGluZGV4IH07XG4gICAgICBpZiAodGhpcy5yb3dDbGlja0NvdW50ID09PSAxKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlRW1pdCgnY2xpY2snLCBkYXRhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2hhbmdlRW1pdCgnZGJsQ2xpY2snLCBkYXRhKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucm93Q2xpY2tDb3VudCA9IDA7XG4gICAgfSwgcm93Q2xpY2tUaW1lKTtcbiAgfVxuXG4gIF9leHBhbmRDaGFuZ2UoaXRlbTogU1REYXRhLCBleHBhbmQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5leHBhbmRSb3dCeUNsaWNrKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGl0ZW0uZXhwYW5kID0gZXhwYW5kO1xuICAgIHRoaXMuY2xvc2VPdGhlckV4cGFuZChpdGVtKTtcbiAgICB0aGlzLmNoYW5nZUVtaXQoJ2V4cGFuZCcsIGl0ZW0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhIHJvdyBpbiB0aGUgdGFibGUsIGxpa2UgdGhpczpcbiAgICpcbiAgICogYGBgXG4gICAqIHRoaXMuc3QucmVtb3ZlUm93KDApXG4gICAqIHRoaXMuc3QucmVtb3ZlUm93KHN0RGF0YUl0ZW0pXG4gICAqIGBgYFxuICAgKi9cbiAgcmVtb3ZlUm93KGRhdGE6IFNURGF0YSB8IFNURGF0YVtdIHwgbnVtYmVyKTogdGhpcyB7XG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnbnVtYmVyJykge1xuICAgICAgdGhpcy5fZGF0YS5zcGxpY2UoZGF0YSwgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICBkYXRhID0gW2RhdGFdO1xuICAgICAgfVxuXG4gICAgICAoZGF0YSBhcyBTVERhdGFbXSlcbiAgICAgICAgLm1hcChpdGVtID0+IHRoaXMuX2RhdGEuaW5kZXhPZihpdGVtKSlcbiAgICAgICAgLmZpbHRlcihwb3MgPT4gcG9zICE9PSAtMSlcbiAgICAgICAgLmZvckVhY2gocG9zID0+IHRoaXMuX2RhdGEuc3BsaWNlKHBvcywgMSkpO1xuICAgIH1cbiAgICAvLyByZWNhbGN1bGF0ZSBub1xuICAgIHRoaXMuX2NvbHVtbnNcbiAgICAgIC5maWx0ZXIodyA9PiB3LnR5cGUgPT09ICdubycpXG4gICAgICAuZm9yRWFjaChjID0+XG4gICAgICAgIHRoaXMuX2RhdGEuZm9yRWFjaCgoaSwgaWR4KSA9PiB7XG4gICAgICAgICAgY29uc3QgdGV4dCA9IGAke3RoaXMuZGF0YVNvdXJjZS5nZXROb0luZGV4KGksIGMsIGlkeCl9YDtcbiAgICAgICAgICBpLl92YWx1ZXMhW2MuX19wb2ludCFdID0geyB0ZXh0LCBfdGV4dDogdGV4dCwgb3JnOiBpZHggfSBhcyBfU1REYXRhVmFsdWU7XG4gICAgICAgIH0pLFxuICAgICAgKTtcblxuICAgIHJldHVybiB0aGlzLmNkKCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgcm93IHZhbHVlIGZvciB0aGUgYGluZGV4YCBpbiB0aGUgdGFibGUsIGxpa2UgdGhpczpcbiAgICpcbiAgICogLSBgb3B0aW5vcy5yZWZyZXNoU2NoZW1hYCBXaGV0aGVyIHRvIHJlZnJlc2ggb2Ygc3Qgc2NoZW1hc1xuICAgKiAtIGBvcHRpbm9zLmVtaXRSZWxvYWRgIFdoZXRoZXIgdG8gdHJpZ2dlciBhIHJlbG9hZCBodHRwIHJlcXVlc3Qgd2hlbiBkYXRhIGlzIHVybFxuICAgKlxuICAgKiBgYGBcbiAgICogdGhpcy5zdC5zZXRSb3coMCwgeyBwcmljZTogMTAwIH0pXG4gICAqIHRoaXMuc3Quc2V0Um93KDAsIHsgcHJpY2U6IDEwMCwgbmFtZTogJ2FzZGYnIH0pXG4gICAqIHRoaXMuc3Quc2V0Um93KGl0ZW0sIHsgcHJpY2U6IDEwMCB9KVxuICAgKiBgYGBcbiAgICovXG4gIHNldFJvdyhpbmRleDogbnVtYmVyIHwgU1REYXRhLCBpdGVtOiBTVERhdGEsIG9wdGlvbnM/OiB7IHJlZnJlc2hTY2hlbWE/OiBib29sZWFuOyBlbWl0UmVsb2FkPzogYm9vbGVhbiB9KTogdGhpcyB7XG4gICAgb3B0aW9ucyA9IHsgcmVmcmVzaFNjaGVtYTogZmFsc2UsIGVtaXRSZWxvYWQ6IGZhbHNlLCAuLi5vcHRpb25zIH07XG4gICAgaWYgKHR5cGVvZiBpbmRleCAhPT0gJ251bWJlcicpIHtcbiAgICAgIGluZGV4ID0gdGhpcy5fZGF0YS5pbmRleE9mKGluZGV4KTtcbiAgICB9XG4gICAgdGhpcy5fZGF0YVtpbmRleF0gPSBkZWVwTWVyZ2VLZXkodGhpcy5fZGF0YVtpbmRleF0sIGZhbHNlLCBpdGVtKTtcbiAgICB0aGlzLm9wdGltaXplRGF0YSgpO1xuICAgIGlmIChvcHRpb25zLnJlZnJlc2hTY2hlbWEpIHtcbiAgICAgIHRoaXMucmVzZXRDb2x1bW5zKHsgZW1pdFJlbG9hZDogb3B0aW9ucy5lbWl0UmVsb2FkIH0pO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIHNvcnRcblxuICBzb3J0KGNvbDogX1NUQ29sdW1uLCBpZHg6IG51bWJlciwgdmFsdWU6IGFueSk6IHZvaWQge1xuICAgIGlmICh0aGlzLm11bHRpU29ydCkge1xuICAgICAgY29sLl9zb3J0LmRlZmF1bHQgPSB2YWx1ZTtcbiAgICAgIGNvbC5fc29ydC50aWNrID0gdGhpcy5kYXRhU291cmNlLm5leHRTb3J0VGljaztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY29sdW1ucy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4gKGl0ZW0uX3NvcnQuZGVmYXVsdCA9IGluZGV4ID09PSBpZHggPyB2YWx1ZSA6IG51bGwpKTtcbiAgICB9XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHRoaXMubG9hZFBhZ2VEYXRhKCk7XG4gICAgY29uc3QgcmVzID0ge1xuICAgICAgdmFsdWUsXG4gICAgICBtYXA6IHRoaXMuZGF0YVNvdXJjZS5nZXRSZXFTb3J0TWFwKHRoaXMuc2luZ2xlU29ydCwgdGhpcy5tdWx0aVNvcnQsIHRoaXMuX2NvbHVtbnMpLFxuICAgICAgY29sdW1uOiBjb2wsXG4gICAgfTtcbiAgICB0aGlzLmNoYW5nZUVtaXQoJ3NvcnQnLCByZXMpO1xuICB9XG5cbiAgY2xlYXJTb3J0KCk6IHRoaXMge1xuICAgIHRoaXMuX2NvbHVtbnMuZm9yRWFjaChpdGVtID0+IChpdGVtLl9zb3J0LmRlZmF1bHQgPSBudWxsKSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiBmaWx0ZXJcblxuICBwcml2YXRlIGhhbmRsZUZpbHRlcihjb2w6IFNUQ29sdW1uKTogdm9pZCB7XG4gICAgLy8g6L+H5ruk6KGo56S65LiA56eN5pWw5o2u55qE5Y+Y5YyW5bqU6YeN572u6aG156CB5Li6IGAxYFxuICAgIHRoaXMucGkgPSAxO1xuICAgIHRoaXMuY29sdW1uU291cmNlLnVwZGF0ZURlZmF1bHQoY29sLmZpbHRlciEpO1xuICAgIHRoaXMubG9hZFBhZ2VEYXRhKCk7XG4gICAgdGhpcy5jaGFuZ2VFbWl0KCdmaWx0ZXInLCBjb2wpO1xuICB9XG5cbiAgX2ZpbHRlckNvbmZpcm0oY29sOiBfU1RDb2x1bW4pOiB2b2lkIHtcbiAgICB0aGlzLmhhbmRsZUZpbHRlcihjb2wpO1xuICB9XG5cbiAgX2ZpbHRlclJhZGlvKGNvbDogX1NUQ29sdW1uLCBpdGVtOiBTVENvbHVtbkZpbHRlck1lbnUsIGNoZWNrZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBjb2wuZmlsdGVyIS5tZW51cyEuZm9yRWFjaChpID0+IChpLmNoZWNrZWQgPSBmYWxzZSkpO1xuICAgIGl0ZW0uY2hlY2tlZCA9IGNoZWNrZWQ7XG4gIH1cblxuICBfZmlsdGVyQ2xlYXIoY29sOiBfU1RDb2x1bW4pOiB2b2lkIHtcbiAgICB0aGlzLmNvbHVtblNvdXJjZS5jbGVhbkZpbHRlcihjb2wpO1xuICAgIHRoaXMuaGFuZGxlRmlsdGVyKGNvbCk7XG4gIH1cblxuICBjbGVhckZpbHRlcigpOiB0aGlzIHtcbiAgICB0aGlzLl9jb2x1bW5zLmZpbHRlcih3ID0+IHcuZmlsdGVyICYmIHcuZmlsdGVyLmRlZmF1bHQgPT09IHRydWUpLmZvckVhY2goY29sID0+IHRoaXMuY29sdW1uU291cmNlLmNsZWFuRmlsdGVyKGNvbCkpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgX2ZpbHRlckNsaWNrKCRldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiBjaGVja2JveFxuXG4gIC8qKiDmuIXpmaTmiYDmnIkgYGNoZWNrYm94YCAqL1xuICBjbGVhckNoZWNrKCk6IHRoaXMge1xuICAgIHJldHVybiB0aGlzLl9jaGVja0FsbChmYWxzZSk7XG4gIH1cblxuICBwcml2YXRlIF9yZWZDaGVjaygpOiB0aGlzIHtcbiAgICBjb25zdCB2YWxpZERhdGEgPSB0aGlzLl9kYXRhLmZpbHRlcih3ID0+ICF3LmRpc2FibGVkKTtcbiAgICBjb25zdCBjaGVja2VkTGlzdCA9IHZhbGlkRGF0YS5maWx0ZXIodyA9PiB3LmNoZWNrZWQgPT09IHRydWUpO1xuICAgIHRoaXMuX2FsbENoZWNrZWQgPSBjaGVja2VkTGlzdC5sZW5ndGggPiAwICYmIGNoZWNrZWRMaXN0Lmxlbmd0aCA9PT0gdmFsaWREYXRhLmxlbmd0aDtcbiAgICBjb25zdCBhbGxVbkNoZWNrZWQgPSB2YWxpZERhdGEuZXZlcnkodmFsdWUgPT4gIXZhbHVlLmNoZWNrZWQpO1xuICAgIHRoaXMuX2luZGV0ZXJtaW5hdGUgPSAhdGhpcy5fYWxsQ2hlY2tlZCAmJiAhYWxsVW5DaGVja2VkO1xuICAgIHRoaXMuX2FsbENoZWNrZWREaXNhYmxlZCA9IHRoaXMuX2RhdGEubGVuZ3RoID09PSB0aGlzLl9kYXRhLmZpbHRlcih3ID0+IHcuZGlzYWJsZWQpLmxlbmd0aDtcbiAgICByZXR1cm4gdGhpcy5jZCgpO1xuICB9XG5cbiAgX2NoZWNrQWxsKGNoZWNrZWQ/OiBib29sZWFuKTogdGhpcyB7XG4gICAgY2hlY2tlZCA9IHR5cGVvZiBjaGVja2VkID09PSAndW5kZWZpbmVkJyA/IHRoaXMuX2FsbENoZWNrZWQgOiBjaGVja2VkO1xuICAgIHRoaXMuX2RhdGEuZmlsdGVyKHcgPT4gIXcuZGlzYWJsZWQpLmZvckVhY2goaSA9PiAoaS5jaGVja2VkID0gY2hlY2tlZCkpO1xuICAgIHJldHVybiB0aGlzLl9yZWZDaGVjaygpLl9jaGVja05vdGlmeSgpO1xuICB9XG5cbiAgX2NoZWNrU2VsZWN0aW9uKGk6IFNURGF0YSwgdmFsdWU6IGJvb2xlYW4pOiB0aGlzIHtcbiAgICBpLmNoZWNrZWQgPSB2YWx1ZTtcbiAgICByZXR1cm4gdGhpcy5fcmVmQ2hlY2soKS5fY2hlY2tOb3RpZnkoKTtcbiAgfVxuXG4gIF9yb3dTZWxlY3Rpb24ocm93OiBTVENvbHVtblNlbGVjdGlvbik6IHRoaXMge1xuICAgIHJvdy5zZWxlY3QodGhpcy5fZGF0YSk7XG4gICAgcmV0dXJuIHRoaXMuX3JlZkNoZWNrKCkuX2NoZWNrTm90aWZ5KCk7XG4gIH1cblxuICBfY2hlY2tOb3RpZnkoKTogdGhpcyB7XG4gICAgY29uc3QgcmVzID0gdGhpcy5fZGF0YS5maWx0ZXIodyA9PiAhdy5kaXNhYmxlZCAmJiB3LmNoZWNrZWQgPT09IHRydWUpO1xuICAgIHRoaXMuY2hhbmdlRW1pdCgnY2hlY2tib3gnLCByZXMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gcmFkaW9cblxuICAvKiog5riF6Zmk5omA5pyJIGByYWRpb2AgKi9cbiAgY2xlYXJSYWRpbygpOiB0aGlzIHtcbiAgICB0aGlzLl9kYXRhLmZpbHRlcih3ID0+IHcuY2hlY2tlZCkuZm9yRWFjaChpdGVtID0+IChpdGVtLmNoZWNrZWQgPSBmYWxzZSkpO1xuICAgIHRoaXMuY2hhbmdlRW1pdCgncmFkaW8nLCBudWxsKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIF9yZWZSYWRpbyhjaGVja2VkOiBib29sZWFuLCBpdGVtOiBTVERhdGEpOiB0aGlzIHtcbiAgICAvLyBpZiAoaXRlbS5kaXNhYmxlZCA9PT0gdHJ1ZSkgcmV0dXJuO1xuICAgIHRoaXMuX2RhdGEuZmlsdGVyKHcgPT4gIXcuZGlzYWJsZWQpLmZvckVhY2goaSA9PiAoaS5jaGVja2VkID0gZmFsc2UpKTtcbiAgICBpdGVtLmNoZWNrZWQgPSBjaGVja2VkO1xuICAgIHRoaXMuY2hhbmdlRW1pdCgncmFkaW8nLCBpdGVtKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIGJ1dHRvbnNcblxuICBfYnRuQ2xpY2socmVjb3JkOiBTVERhdGEsIGJ0bjogU1RDb2x1bW5CdXR0b24sIGU/OiBFdmVudCk6IHZvaWQge1xuICAgIC8vIHNob3VsZCBiZSBzdG9wIHByb3BhZ2F0aW9uIHdoZW4gZXhwYW5kUm93QnlDbGljayBpcyB0cnVlXG4gICAgaWYgKGUgJiYgdGhpcy5leHBhbmRSb3dCeUNsaWNrID09PSB0cnVlKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgICBpZiAoYnRuLnR5cGUgPT09ICdtb2RhbCcgfHwgYnRuLnR5cGUgPT09ICdzdGF0aWMnKSB7XG4gICAgICBjb25zdCB7IG1vZGFsIH0gPSBidG47XG4gICAgICBjb25zdCBvYmogPSB7IFttb2RhbCEucGFyYW1zTmFtZSFdOiByZWNvcmQgfTtcbiAgICAgICh0aGlzLm1vZGFsSGVscGVyW2J0bi50eXBlID09PSAnbW9kYWwnID8gJ2NyZWF0ZScgOiAnY3JlYXRlU3RhdGljJ10gYXMgYW55KShcbiAgICAgICAgbW9kYWwhLmNvbXBvbmVudCxcbiAgICAgICAgeyAuLi5vYmosIC4uLihtb2RhbCEucGFyYW1zICYmIG1vZGFsIS5wYXJhbXMhKHJlY29yZCkpIH0sXG4gICAgICAgIGRlZXBNZXJnZUtleSh7fSwgdHJ1ZSwgdGhpcy5jb2cubW9kYWwsIG1vZGFsKSxcbiAgICAgIClcbiAgICAgICAgLnBpcGUoZmlsdGVyKHcgPT4gdHlwZW9mIHcgIT09ICd1bmRlZmluZWQnKSlcbiAgICAgICAgLnN1YnNjcmliZSgocmVzOiBOelNhZmVBbnkpID0+IHRoaXMuYnRuQ2FsbGJhY2socmVjb3JkLCBidG4sIHJlcykpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoYnRuLnR5cGUgPT09ICdkcmF3ZXInKSB7XG4gICAgICBjb25zdCB7IGRyYXdlciB9ID0gYnRuO1xuICAgICAgY29uc3Qgb2JqID0geyBbZHJhd2VyIS5wYXJhbXNOYW1lIV06IHJlY29yZCB9O1xuICAgICAgdGhpcy5kcmF3ZXJIZWxwZXJcbiAgICAgICAgLmNyZWF0ZShcbiAgICAgICAgICBkcmF3ZXIhLnRpdGxlISxcbiAgICAgICAgICBkcmF3ZXIhLmNvbXBvbmVudCxcbiAgICAgICAgICB7IC4uLm9iaiwgLi4uKGRyYXdlciEucGFyYW1zICYmIGRyYXdlciEucGFyYW1zIShyZWNvcmQpKSB9LFxuICAgICAgICAgIGRlZXBNZXJnZUtleSh7fSwgdHJ1ZSwgdGhpcy5jb2cuZHJhd2VyLCBkcmF3ZXIpLFxuICAgICAgICApXG4gICAgICAgIC5waXBlKGZpbHRlcih3ID0+IHR5cGVvZiB3ICE9PSAndW5kZWZpbmVkJykpXG4gICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHRoaXMuYnRuQ2FsbGJhY2socmVjb3JkLCBidG4sIHJlcykpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoYnRuLnR5cGUgPT09ICdsaW5rJykge1xuICAgICAgY29uc3QgY2xpY2tSZXMgPSB0aGlzLmJ0bkNhbGxiYWNrKHJlY29yZCwgYnRuKTtcbiAgICAgIGlmICh0eXBlb2YgY2xpY2tSZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoY2xpY2tSZXMsIHsgc3RhdGU6IHRoaXMucm91dGVyU3RhdGUgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuYnRuQ2FsbGJhY2socmVjb3JkLCBidG4pO1xuICB9XG5cbiAgcHJpdmF0ZSBidG5DYWxsYmFjayhyZWNvcmQ6IFNURGF0YSwgYnRuOiBTVENvbHVtbkJ1dHRvbiwgbW9kYWw/OiBhbnkpOiBhbnkge1xuICAgIGlmICghYnRuLmNsaWNrKSByZXR1cm47XG4gICAgaWYgKHR5cGVvZiBidG4uY2xpY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICBzd2l0Y2ggKGJ0bi5jbGljaykge1xuICAgICAgICBjYXNlICdsb2FkJzpcbiAgICAgICAgICB0aGlzLmxvYWQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncmVsb2FkJzpcbiAgICAgICAgICB0aGlzLnJlbG9hZCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYnRuLmNsaWNrKHJlY29yZCwgbW9kYWwsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIGV4cG9ydFxuXG4gIC8qKlxuICAgKiDlr7zlh7rlvZPliY3pobXvvIznoa7kv53lt7Lnu4/ms6jlhowgYFhsc3hNb2R1bGVgXG4gICAqIEBwYXJhbSBuZXdEYXRhIOmHjeaWsOaMh+WumuaVsOaNru+8m+iLpeS4uiBgdHJ1ZWAg6KGo56S65L2/55SoIGBmaWx0ZXJlZERhdGFgIOaVsOaNrlxuICAgKiBAcGFyYW0gb3B0IOmineWkluWPguaVsFxuICAgKi9cbiAgZXhwb3J0KG5ld0RhdGE/OiBTVERhdGFbXSB8IHRydWUsIG9wdD86IFNURXhwb3J0T3B0aW9ucyk6IHZvaWQge1xuICAgIChuZXdEYXRhID09PSB0cnVlID8gZnJvbSh0aGlzLmZpbHRlcmVkRGF0YSkgOiBvZihuZXdEYXRhIHx8IHRoaXMuX2RhdGEpKS5zdWJzY3JpYmUoKHJlczogU1REYXRhW10pID0+XG4gICAgICB0aGlzLmV4cG9ydFNydi5leHBvcnQoe1xuICAgICAgICBjb2x1bWVuczogdGhpcy5fY29sdW1ucyxcbiAgICAgICAgLi4ub3B0LFxuICAgICAgICBkYXRhOiByZXMsXG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gcmVzaXphYmxlXG5cbiAgY29sUmVzaXplKHsgd2lkdGggfTogTnpSZXNpemVFdmVudCwgY29sdW1uOiBfU1RDb2x1bW4pOiB2b2lkIHtcbiAgICBjb2x1bW4ud2lkdGggPSBgJHt3aWR0aH1weGA7XG4gICAgdGhpcy5jaGFuZ2VFbWl0KCdyZXNpemUnLCBjb2x1bW4pO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gY29udGV4dG1lbnVcbiAgb25Db250ZXh0bWVudShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5jb250ZXh0bWVudSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IGNvbEVsID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCkuY2xvc2VzdCgnW2RhdGEtY29sLWluZGV4XScpIGFzIEhUTUxFbGVtZW50O1xuICAgIGlmICghY29sRWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY29sSW5kZXggPSBOdW1iZXIoY29sRWwuZGF0YXNldC5jb2xJbmRleCk7XG4gICAgY29uc3Qgcm93SW5kZXggPSBOdW1iZXIoKGNvbEVsLmNsb3Nlc3QoJ3RyJykgYXMgSFRNTEVsZW1lbnQpLmRhdGFzZXQuaW5kZXgpO1xuICAgIGNvbnN0IGlzVGl0bGUgPSBpc05hTihyb3dJbmRleCk7XG4gICAgY29uc3Qgb2JzJCA9IHRoaXMuY29udGV4dG1lbnUoe1xuICAgICAgZXZlbnQsXG4gICAgICB0eXBlOiBpc1RpdGxlID8gJ2hlYWQnIDogJ2JvZHknLFxuICAgICAgcm93SW5kZXg6IGlzVGl0bGUgPyBudWxsIDogcm93SW5kZXgsXG4gICAgICBjb2xJbmRleCxcbiAgICAgIGRhdGE6IGlzVGl0bGUgPyBudWxsIDogdGhpcy5saXN0W3Jvd0luZGV4XSxcbiAgICAgIGNvbHVtbjogdGhpcy5fY29sdW1uc1tjb2xJbmRleF0sXG4gICAgfSk7XG4gICAgKGlzT2JzZXJ2YWJsZShvYnMkKSA/IG9icyQgOiBvZihvYnMkKSlcbiAgICAgIC5waXBlKFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXG4gICAgICAgIGZpbHRlcihyZXMgPT4gcmVzLmxlbmd0aCA+IDApLFxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICB0aGlzLmNvbnRleHRtZW51TGlzdCA9IHJlcy5tYXAoaSA9PiB7XG4gICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGkuY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBpLmNoaWxkcmVuID0gW107XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB0aGlzLmNtcy5jcmVhdGUoZXZlbnQsIHRoaXMuY29udGV4dG1lbnVUcGwpO1xuICAgICAgfSk7XG4gIH1cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGdldCBjZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQoKTogQ2RrVmlydHVhbFNjcm9sbFZpZXdwb3J0IHtcbiAgICByZXR1cm4gdGhpcy5vcmdUYWJsZS5jZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQhO1xuICB9XG5cbiAgcmVzZXRDb2x1bW5zKG9wdGlvbnM/OiBTVFJlc2V0Q29sdW1uc09wdGlvbik6IFByb21pc2U8dGhpcz4ge1xuICAgIG9wdGlvbnMgPSB7IGVtaXRSZWxvYWQ6IHRydWUsIHByZUNsZWFyRGF0YTogZmFsc2UsIC4uLm9wdGlvbnMgfTtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuY29sdW1ucyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMuY29sdW1ucyA9IG9wdGlvbnMuY29sdW1ucztcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLnBpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5waSA9IG9wdGlvbnMucGk7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5wcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucHMgPSBvcHRpb25zLnBzO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5lbWl0UmVsb2FkKSB7XG4gICAgICAvLyBTaG91bGQgY2xlYW4gZGF0YSwgQmVjYXVzZSBvZiBjaGFuZ2luZyBjb2x1bW5zIG1heSBjYXVzZSBpbmFjY3VyYXRlIGRhdGFcbiAgICAgIG9wdGlvbnMucHJlQ2xlYXJEYXRhID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMucHJlQ2xlYXJEYXRhKSB7XG4gICAgICB0aGlzLl9kYXRhID0gW107XG4gICAgfVxuICAgIHRoaXMucmVmcmVzaENvbHVtbnMoKTtcbiAgICBpZiAob3B0aW9ucy5lbWl0UmVsb2FkKSB7XG4gICAgICByZXR1cm4gdGhpcy5sb2FkUGFnZURhdGEoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jZCgpO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlZnJlc2hDb2x1bW5zKCk6IHRoaXMge1xuICAgIGNvbnN0IHJlcyA9IHRoaXMuY29sdW1uU291cmNlLnByb2Nlc3ModGhpcy5jb2x1bW5zIGFzIF9TVENvbHVtbltdLCB7IHdpZHRoTW9kZTogdGhpcy53aWR0aE1vZGUsIHJlc2l6YWJsZTogdGhpcy5fcmVzaXphYmxlIH0pO1xuICAgIHRoaXMuX2NvbHVtbnMgPSByZXMuY29sdW1ucztcbiAgICB0aGlzLl9oZWFkZXJzID0gcmVzLmhlYWRlcnM7XG4gICAgaWYgKHRoaXMuY3VzdG9tV2lkdGhDb25maWcgPT09IGZhbHNlICYmIHJlcy5oZWFkZXJXaWR0aHMgIT0gbnVsbCkge1xuICAgICAgdGhpcy5fd2lkdGhDb25maWcgPSByZXMuaGVhZGVyV2lkdGhzO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByaXZhdGUgb3B0aW1pemVEYXRhKCk6IHZvaWQge1xuICAgIHRoaXMuX2RhdGEgPSB0aGlzLmRhdGFTb3VyY2Uub3B0aW1pemVEYXRhKHtcbiAgICAgIGNvbHVtbnM6IHRoaXMuX2NvbHVtbnMsXG4gICAgICByZXN1bHQ6IHRoaXMuX2RhdGEsXG4gICAgICByb3dDbGFzc05hbWU6IHRoaXMucm93Q2xhc3NOYW1lLFxuICAgICAgc2FmZUh0bWw6IHRoaXMuY29nLnNhZnRIdG1sISxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gcHVyZSBkYXRhLCBgc3RgIGludGVybmFsbHkgbWFpbnRhaW5zIGEgc2V0IG9mIGRhdGEgZm9yIGNhY2hpbmcsIHRoaXMgcGFydCBvZiBkYXRhIG1heSBhZmZlY3QgdGhlIGJhY2tlbmRcbiAgICpcbiAgICog6L+U5Zue57qv5YeA5pWw5o2u77yMYHN0YCDlhoXpg6jkvJrnu7TmiqTkuIDnu4TnlKjkuo7nvJPlrZjnmoTmlbDmja7vvIzov5npg6jliIbmlbDmja7lj6/og73kvJrlvbHlk43lkI7nq69cbiAgICovXG4gIHB1cmVJdGVtKGl0ZW1PckluZGV4OiBTVERhdGEgfCBudW1iZXIpOiBTVERhdGEgfCBudWxsIHtcbiAgICBpZiAodHlwZW9mIGl0ZW1PckluZGV4ID09PSAnbnVtYmVyJykge1xuICAgICAgaXRlbU9ySW5kZXggPSB0aGlzLl9kYXRhW2l0ZW1PckluZGV4XTtcbiAgICB9XG4gICAgaWYgKCFpdGVtT3JJbmRleCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IGNvcHlJdGVtID0gZGVlcENvcHkoaXRlbU9ySW5kZXgpO1xuICAgIGRlbGV0ZSBjb3B5SXRlbS5fdmFsdWVzO1xuICAgIHJldHVybiBjb3B5SXRlbTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNvbHVtblNvdXJjZS5yZXN0b3JlQWxsUmVuZGVyKHRoaXMuX2NvbHVtbnMpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogeyBbUCBpbiBrZXlvZiB0aGlzXT86IFNpbXBsZUNoYW5nZSB9ICYgU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLmNvbHVtbnMpIHtcbiAgICAgIHRoaXMucmVmcmVzaENvbHVtbnMoKS5vcHRpbWl6ZURhdGEoKTtcbiAgICB9XG4gICAgY29uc3QgY2hhbmdlRGF0YSA9IGNoYW5nZXMuZGF0YTtcbiAgICBpZiAoY2hhbmdlRGF0YSAmJiBjaGFuZ2VEYXRhLmN1cnJlbnRWYWx1ZSAmJiAhKHRoaXMucmVxLmxhenlMb2FkICYmIGNoYW5nZURhdGEuZmlyc3RDaGFuZ2UpKSB7XG4gICAgICB0aGlzLmxvYWRQYWdlRGF0YSgpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5sb2FkaW5nKSB7XG4gICAgICB0aGlzLl9sb2FkaW5nID0gY2hhbmdlcy5sb2FkaW5nLmN1cnJlbnRWYWx1ZTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==