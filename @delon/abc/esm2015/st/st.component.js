import { __awaiter, __decorate, __metadata } from "tslib";
import { DecimalPipe, DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Inject, Input, Optional, Output, TemplateRef, ViewChild, ViewEncapsulation, } from '@angular/core';
import { Router } from '@angular/router';
import { ALAIN_I18N_TOKEN, DatePipe, DelonLocaleService, DrawerHelper, ModalHelper, YNPipe, } from '@delon/theme';
import { AlainConfigService } from '@delon/util/config';
import { InputBoolean, InputNumber, toBoolean } from '@delon/util/decorator';
import { deepCopy, deepMergeKey } from '@delon/util/other';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NzContextMenuService, NzDropdownMenuComponent } from 'ng-zorro-antd/dropdown';
import { NzTableComponent } from 'ng-zorro-antd/table';
import { from, isObservable, of } from 'rxjs';
import { filter } from 'rxjs/operators';
import { STColumnSource } from './st-column-source';
import { STDataSource } from './st-data-source';
import { STExport } from './st-export';
import { STRowSource } from './st-row.directive';
import { ST_DEFAULT_CONFIG } from './st.config';
let STComponent = class STComponent {
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
        this.totalTpl = ``;
        this.rowClickCount = 0;
        this.customWidthConfig = false;
        this.destroy = false;
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
        this.delonI18n.change.pipe(untilDestroyed(this)).subscribe(() => {
            this.locale = this.delonI18n.getData('st');
            if (this._columns.length > 0) {
                this.updateTotalTpl();
                this.cd();
            }
        });
        i18nSrv.change
            .pipe(untilDestroyed(this), filter(() => this._columns.length > 0))
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
                rowClassName, paginator: true }, options))
                .pipe(untilDestroyed(this))
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
                if (!this.destroy) {
                    this.setLoading(false);
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
            .forEach(c => this._data.forEach((i, idx) => (i._values[c.__point] = { _text: this.dataSource.getNoIndex(i, c, idx), org: idx })));
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
    _btnText(record, btn) {
        return typeof btn.text === 'function' ? btn.text(record, btn) : btn.text || '';
    }
    _validBtns(btns, item, col) {
        return btns.filter(btn => {
            const result = btn.iif(item, btn, col);
            const isRenderDisabled = btn.iifBehavior === 'disabled';
            btn._result = result;
            btn._disabled = !result && isRenderDisabled;
            return result || isRenderDisabled;
        });
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
            .pipe(untilDestroyed(this), filter(res => res.length > 0))
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
        this._data = this.dataSource.optimizeData({ columns: this._columns, result: this._data, rowClassName: this.rowClassName });
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
        this.destroy = true;
    }
};
STComponent.decorators = [
    { type: Component, args: [{
                selector: 'st',
                exportAs: 'st',
                template: "<ng-template #btnTpl let-i let-btn=\"btn\">\n  <ng-container *ngIf=\"!btn.tooltip\">\n    <ng-template [ngTemplateOutlet]=\"btnItemTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n  </ng-container>\n  <span *ngIf=\"btn.tooltip\" nz-tooltip [nzTooltipTitle]=\"btn.tooltip\">\n    <ng-template [ngTemplateOutlet]=\"btnItemTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n  </span>\n</ng-template>\n<ng-template #btnItemTpl let-i let-btn=\"btn\">\n  <a\n    *ngIf=\"btn.pop\"\n    nz-popconfirm\n    [nzPopconfirmTitle]=\"btn.pop.title\"\n    [nzIcon]=\"btn.pop.icon\"\n    [nzCondition]=\"btn.pop.condition(i)\"\n    [nzCancelText]=\"btn.pop.cancelText\"\n    [nzOkText]=\"btn.pop.okText\"\n    [nzOkType]=\"btn.pop.okType\"\n    (nzOnConfirm)=\"$any(_btnClick)(i, btn, $event)\"\n    class=\"st__btn-text\"\n    [ngClass]=\"btn.className\"\n  >\n    <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n  </a>\n  <a *ngIf=\"!btn.pop\" (click)=\"_btnClick(i, btn, $event)\" class=\"st__btn-text\" [ngClass]=\"btn.className\">\n    <ng-template [ngTemplateOutlet]=\"btnTextTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"></ng-template>\n  </a>\n</ng-template>\n<ng-template #btnTextTpl let-i let-btn=\"btn\">\n  <ng-container *ngIf=\"btn.icon\">\n    <i\n      *ngIf=\"!btn.icon.iconfont\"\n      nz-icon\n      [nzType]=\"btn.icon.type\"\n      [nzTheme]=\"btn.icon.theme\"\n      [nzSpin]=\"btn.icon.spin\"\n      [nzTwotoneColor]=\"btn.icon.twoToneColor\"\n    ></i>\n    <i *ngIf=\"btn.icon.iconfont\" nz-icon [nzIconfont]=\"btn.icon.iconfont\"></i>\n  </ng-container>\n  <span [innerHTML]=\"_btnText(i, btn)\" [ngClass]=\"{ 'pl-xs': btn.icon }\"></span>\n</ng-template>\n<ng-template #titleTpl let-i>\n  <span [innerHTML]=\"i._text\"></span>\n  <small *ngIf=\"i.optional\" class=\"st__head-optional\" [innerHTML]=\"i.optional\"></small>\n  <i *ngIf=\"i.optionalHelp\" class=\"st__head-tip\" nz-tooltip [nzTooltipTitle]=\"i.optionalHelp\" nz-icon nzType=\"question-circle\"></i>\n</ng-template>\n<ng-template #chkAllTpl let-custom>\n  <label\n    nz-checkbox\n    class=\"st__checkall\"\n    [nzDisabled]=\"_allCheckedDisabled\"\n    [(ngModel)]=\"_allChecked\"\n    [nzIndeterminate]=\"_indeterminate\"\n    (ngModelChange)=\"_checkAll()\"\n    [class.ant-table-selection-select-all-custom]=\"custom\"\n  ></label>\n</ng-template>\n<nz-table\n  #table\n  [nzData]=\"_data\"\n  [(nzPageIndex)]=\"pi\"\n  (nzPageIndexChange)=\"_change('pi')\"\n  [(nzPageSize)]=\"ps\"\n  (nzPageSizeChange)=\"_change('ps')\"\n  [nzTotal]=\"total\"\n  [nzShowPagination]=\"_isPagination\"\n  [nzFrontPagination]=\"false\"\n  [nzBordered]=\"bordered\"\n  [nzSize]=\"size\"\n  [nzLoading]=\"_loading\"\n  [nzLoadingDelay]=\"loadingDelay\"\n  [nzLoadingIndicator]=\"loadingIndicator\"\n  [nzTitle]=\"header!\"\n  [nzFooter]=\"footer!\"\n  [nzScroll]=\"scroll\"\n  [nzVirtualItemSize]=\"virtualItemSize\"\n  [nzVirtualMaxBufferPx]=\"virtualMaxBufferPx\"\n  [nzVirtualMinBufferPx]=\"virtualMinBufferPx\"\n  [nzVirtualForTrackBy]=\"virtualForTrackBy\"\n  [nzNoResult]=\"noResult!\"\n  [nzPageSizeOptions]=\"page.pageSizes!\"\n  [nzShowQuickJumper]=\"page.showQuickJumper\"\n  [nzShowSizeChanger]=\"page.showSize\"\n  [nzPaginationPosition]=\"page.position!\"\n  [nzPaginationType]=\"page.type!\"\n  [nzItemRender]=\"page.itemRender!\"\n  [nzSimple]=\"page.simple\"\n  [nzShowTotal]=\"totalTpl\"\n  [nzWidthConfig]=\"_widthConfig\"\n  (contextmenu)=\"onContextmenu($event)\"\n>\n  <thead *ngIf=\"showHeader\">\n    <tr *ngFor=\"let row of _headers; let rowFirst = first\">\n      <th *ngIf=\"rowFirst && expand\" nzWidth=\"50px\" [rowSpan]=\"_headers.length\"></th>\n      <ng-container *ngFor=\"let h of row; let index = index; let last = last\">\n        <th\n          *let=\"h.column as _c\"\n          [colSpan]=\"h.colSpan\"\n          [rowSpan]=\"h.rowSpan\"\n          [nzWidth]=\"$any(_c).width\"\n          [nzLeft]=\"_c._left!\"\n          [nzRight]=\"_c._right!\"\n          [ngClass]=\"_c.className!\"\n          [attr.data-col]=\"_c.indexKey\"\n          [attr.data-col-index]=\"index\"\n          [nzShowSort]=\"_c._sort.enabled\"\n          [nzSortOrder]=\"$any(_c)._sort.default\"\n          (nzSortOrderChange)=\"sort(_c, index, $event)\"\n          [nzCustomFilter]=\"$any(_c).filter\"\n          nz-resizable\n          [nzDisabled]=\"last || $any(_c).resizable.disabled\"\n          [nzMaxWidth]=\"$any(_c).resizable.maxWidth\"\n          [nzMinWidth]=\"$any(_c).resizable.minWidth\"\n          [nzBounds]=\"$any(_c).resizable.bounds\"\n          [nzPreview]=\"$any(_c).resizable.preview\"\n          (nzResizeEnd)=\"colResize($event, _c)\"\n        >\n          <nz-resize-handle *ngIf=\"$any(!last && !$any(_c).resizable.disabled)\" nzDirection=\"right\"><i></i></nz-resize-handle>\n          <ng-template #renderTitle [ngTemplateOutlet]=\"_c.__renderTitle!\" [ngTemplateOutletContext]=\"{ $implicit: h.column, index: index }\"></ng-template>\n          <ng-container *ngIf=\"!_c.__renderTitle; else renderTitle\">\n            <ng-container [ngSwitch]=\"_c.type\">\n              <ng-container *ngSwitchCase=\"'checkbox'\">\n                <ng-container *ngIf=\"_c.selections!.length === 0\">\n                  <ng-template [ngTemplateOutlet]=\"chkAllTpl\" [ngTemplateOutletContext]=\"{ $implicit: false }\"> </ng-template>\n                </ng-container>\n                <div *ngIf=\"_c.selections!.length > 0\" class=\"ant-table-selection\">\n                  <ng-template [ngTemplateOutlet]=\"chkAllTpl\" [ngTemplateOutletContext]=\"{ $implicit: true }\"> </ng-template>\n                  <div\n                    *ngIf=\"_c.selections!.length\"\n                    nz-dropdown\n                    nzPlacement=\"bottomLeft\"\n                    [nzDropdownMenu]=\"selectionMenu\"\n                    class=\"ant-table-selection-down st__checkall-selection\"\n                  >\n                    <i nz-icon nzType=\"down\"></i>\n                  </div>\n                  <nz-dropdown-menu #selectionMenu=\"nzDropdownMenu\">\n                    <ul nz-menu class=\"ant-table-selection-menu\">\n                      <li nz-menu-item *ngFor=\"let rw of _c.selections\" (click)=\"_rowSelection(rw)\" [innerHTML]=\"rw.text\"></li>\n                    </ul>\n                  </nz-dropdown-menu>\n                </div>\n              </ng-container>\n              <ng-container *ngSwitchDefault>\n                <ng-template [ngTemplateOutlet]=\"titleTpl\" [ngTemplateOutletContext]=\"{ $implicit: _c.title }\"></ng-template>\n              </ng-container>\n            </ng-container>\n          </ng-container>\n          <ng-container *ngIf=\"_c.filter\">\n            <div\n              nz-th-extra\n              *let=\"_c.filter as _f\"\n              class=\"ant-table-filter-trigger-container st__filter\"\n              [class.ant-table-filter-trigger-container-open]=\"$any(_f).visible\"\n            >\n              <span\n                class=\"ant-table-filter-trigger\"\n                [class.active]=\"$any(_f).visible || _f.default\"\n                nz-dropdown\n                [nzDropdownMenu]=\"filterMenu\"\n                nzTrigger=\"click\"\n                [nzClickHide]=\"false\"\n                [(nzVisible)]=\"$any(_f).visible\"\n                nzOverlayClassName=\"st__filter-wrap\"\n                (click)=\"_filterClick($event)\"\n              >\n                <i nz-icon [nzType]=\"$any(_f).icon.type\" [nzTheme]=\"$any(_f).icon.theme\"></i>\n              </span>\n              <nz-dropdown-menu #filterMenu=\"nzDropdownMenu\">\n                <div class=\"ant-table-filter-dropdown\">\n                  <ng-container [ngSwitch]=\"_f.type\">\n                    <div *ngSwitchCase=\"'keyword'\" class=\"st__filter-keyword\">\n                      <input type=\"text\" nz-input [attr.placeholder]=\"$any(_f).menus[0].text\" [(ngModel)]=\"$any(_f).menus[0].value\" />\n                    </div>\n                    <ul *ngSwitchDefault nz-menu>\n                      <ng-container *ngIf=\"_f.multiple\">\n                        <li nz-menu-item *ngFor=\"let filter of _f.menus\">\n                          <label nz-checkbox [(ngModel)]=\"filter.checked\">{{ filter.text }}</label>\n                        </li>\n                      </ng-container>\n                      <ng-container *ngIf=\"!_f.multiple\">\n                        <li nz-menu-item *ngFor=\"let filter of _f.menus\">\n                          <label nz-radio [ngModel]=\"filter.checked\" (ngModelChange)=\"_filterRadio(h.column, filter, $event)\">{{ filter.text }}</label>\n                        </li>\n                      </ng-container>\n                    </ul>\n                  </ng-container>\n                  <div class=\"ant-table-filter-dropdown-btns\">\n                    <a class=\"ant-table-filter-dropdown-link confirm\" (click)=\"$any(_f).visible = false\">\n                      <span (click)=\"_filterConfirm(h.column)\">{{ _f.confirmText || locale.filterConfirm }}</span>\n                    </a>\n                    <a class=\"ant-table-filter-dropdown-link clear\" (click)=\"$any(_f).visible = false\">\n                      <span (click)=\"_filterClear(h.column)\">{{ _f.clearText || locale.filterReset }}</span>\n                    </a>\n                  </div>\n                </div>\n              </nz-dropdown-menu>\n            </div>\n          </ng-container>\n        </th>\n      </ng-container>\n    </tr>\n  </thead>\n  <tbody class=\"st__body\">\n    <ng-container *ngIf=\"!_loading\">\n      <ng-template [ngTemplateOutlet]=\"bodyHeader!\" [ngTemplateOutletContext]=\"{ $implicit: _statistical }\"></ng-template>\n    </ng-container>\n    <ng-template #bodyTpl let-i let-index=\"index\">\n      <tr [attr.data-index]=\"index\" (click)=\"_rowClick($event, i, index)\" [ngClass]=\"i._rowClassName\">\n        <td\n          *ngIf=\"expand\"\n          [nzShowExpand]=\"expand && i.showExpand !== false\"\n          [nzExpand]=\"i.expand\"\n          (nzExpandChange)=\"_expandChange(i, $event)\"\n          nzWidth=\"50px\"\n        ></td>\n        <td\n          *ngFor=\"let c of _columns; let cIdx = index\"\n          [nzLeft]=\"!!c._left\"\n          [nzRight]=\"!!c._right\"\n          [attr.data-col-index]=\"cIdx\"\n          [ngClass]=\"c._className!\"\n          [attr.colspan]=\"c.colSpan\"\n        >\n          <span *ngIf=\"responsive\" class=\"ant-table-rep__title\">\n            <ng-template [ngTemplateOutlet]=\"titleTpl\" [ngTemplateOutletContext]=\"{ $implicit: c.title }\"></ng-template>\n          </span>\n          <span>\n            <ng-template #render [ngTemplateOutlet]=\"c.__render!\" [ngTemplateOutletContext]=\"{ $implicit: i, index: index, column: c }\"></ng-template>\n            <ng-container *ngIf=\"!c.__render; else render\">\n              <ng-container [ngSwitch]=\"c.type\">\n                <label\n                  *ngSwitchCase=\"'checkbox'\"\n                  nz-checkbox\n                  [nzDisabled]=\"i.disabled\"\n                  [ngModel]=\"i.checked\"\n                  (ngModelChange)=\"_checkSelection(i, $event)\"\n                ></label>\n                <label *ngSwitchCase=\"'radio'\" nz-radio [nzDisabled]=\"i.disabled\" [ngModel]=\"i.checked\" (ngModelChange)=\"_refRadio($event, i)\"></label>\n                <a *ngSwitchCase=\"'link'\" (click)=\"_click($event, i, c)\" [innerHTML]=\"i._values[cIdx]._text\" [attr.title]=\"i._values[cIdx].text\"></a>\n                <ng-container *ngIf=\"i._values[cIdx].text\">\n                  <nz-tag *ngSwitchCase=\"'tag'\" [nzColor]=\"i._values[cIdx].color\">\n                    <span [innerHTML]=\"i._values[cIdx]._text\"></span>\n                  </nz-tag>\n                  <nz-badge *ngSwitchCase=\"'badge'\" [nzStatus]=\"i._values[cIdx].color\" [nzText]=\"i._values[cIdx].text\"></nz-badge>\n                </ng-container>\n                <ng-template *ngSwitchCase=\"'widget'\" st-widget-host [record]=\"i\" [column]=\"c\"></ng-template>\n                <span *ngSwitchDefault [innerHTML]=\"i._values[cIdx]._text\" [attr.title]=\"c._isTruncate ? i._values[cIdx].text : null\"></span>\n              </ng-container>\n              <ng-container *ngFor=\"let btn of _validBtns(c.buttons!, i, c); let last = last\">\n                <a *ngIf=\"btn.children!.length > 0\" nz-dropdown [nzDropdownMenu]=\"btnMenu\" nzOverlayClassName=\"st__btn-sub\">\n                  <span [innerHTML]=\"_btnText(i, btn)\"></span>\n                  <i nz-icon nzType=\"down\"></i>\n                </a>\n                <nz-dropdown-menu #btnMenu=\"nzDropdownMenu\">\n                  <ul nz-menu>\n                    <ng-container *ngFor=\"let subBtn of _validBtns(btn.children!, i, c)\">\n                      <li *ngIf=\"subBtn.type !== 'divider'\" nz-menu-item [class.st__btn-disabled]=\"subBtn._disabled\">\n                        <ng-template [ngTemplateOutlet]=\"btnTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: subBtn }\"> </ng-template>\n                      </li>\n                      <li *ngIf=\"subBtn.type === 'divider'\" nz-menu-divider></li>\n                    </ng-container>\n                  </ul>\n                </nz-dropdown-menu>\n                <span *ngIf=\"btn.children!.length == 0\" [class.st__btn-disabled]=\"btn._disabled\">\n                  <ng-template [ngTemplateOutlet]=\"btnTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, btn: btn }\"> </ng-template>\n                </span>\n                <nz-divider *ngIf=\"!last\" nzType=\"vertical\"></nz-divider>\n              </ng-container>\n            </ng-container>\n          </span>\n        </td>\n      </tr>\n      <tr [nzExpand]=\"i.expand\">\n        <ng-template [ngTemplateOutlet]=\"expand\" [ngTemplateOutletContext]=\"{ $implicit: i, index: index }\"></ng-template>\n      </tr>\n    </ng-template>\n    <ng-container *ngIf=\"!virtualScroll\">\n      <ng-container *ngFor=\"let i of _data; let index = index\">\n        <ng-template [ngTemplateOutlet]=\"bodyTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, index: index }\"> </ng-template>\n      </ng-container>\n    </ng-container>\n    <ng-container *ngIf=\"virtualScroll\">\n      <ng-template nz-virtual-scroll let-i let-index=\"index\">\n        <ng-template [ngTemplateOutlet]=\"bodyTpl\" [ngTemplateOutletContext]=\"{ $implicit: i, index: index }\"> </ng-template>\n      </ng-template>\n    </ng-container>\n    <ng-container *ngIf=\"!_loading\">\n      <ng-template [ngTemplateOutlet]=\"body!\" [ngTemplateOutletContext]=\"{ $implicit: _statistical }\"></ng-template>\n    </ng-container>\n  </tbody>\n  <ng-template #totalTpl let-range=\"range\" let-total>{{ renderTotal(total, range) }}</ng-template>\n</nz-table>\n<nz-dropdown-menu #contextmenuTpl=\"nzDropdownMenu\">\n  <ul nz-menu class=\"st__contextmenu\">\n    <ng-container *ngFor=\"let i of contextmenuList\">\n      <li nz-menu-item *ngIf=\"i.children!.length === 0\" (click)=\"i.fn!(i)\" [innerHTML]=\"i.text\"></li>\n      <li nz-submenu *ngIf=\"i.children!.length > 0\" [nzTitle]=\"i.text\">\n        <ul>\n          <li nz-menu-item *ngFor=\"let ci of i.children\" (click)=\"ci.fn!(ci)\" [innerHTML]=\"ci.text\"></li>\n        </ul>\n      </li>\n    </ng-container>\n  </ul>\n</nz-dropdown-menu>\n",
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
STComponent = __decorate([
    UntilDestroy(),
    __metadata("design:paramtypes", [Object, ChangeDetectorRef,
        Router,
        ElementRef,
        STExport,
        ModalHelper,
        DrawerHelper, Object, STColumnSource,
        STDataSource,
        DelonLocaleService,
        AlainConfigService,
        NzContextMenuService])
], STComponent);
export { STComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvYWJjL3N0L3N0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN4RCxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUdMLFFBQVEsRUFDUixNQUFNLEVBR04sV0FBVyxFQUVYLFNBQVMsRUFDVCxpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFFTCxnQkFBZ0IsRUFDaEIsUUFBUSxFQUNSLGtCQUFrQixFQUNsQixZQUFZLEVBRVosV0FBVyxFQUNYLE1BQU0sR0FDUCxNQUFNLGNBQWMsQ0FBQztBQUN0QixPQUFPLEVBQUUsa0JBQWtCLEVBQWlCLE1BQU0sb0JBQW9CLENBQUM7QUFDdkUsT0FBTyxFQUFnQixZQUFZLEVBQUUsV0FBVyxFQUFlLFNBQVMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3hHLE9BQU8sRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDM0QsT0FBTyxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVyRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV2RixPQUFPLEVBQUUsZ0JBQWdCLEVBQWUsTUFBTSxxQkFBcUIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBYyxFQUFFLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFB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RTs7dURBQTBCO0FBbEl0QyxXQUFXO0lBbEJ2QixZQUFZLEVBQUU7NkNBNEtFLGlCQUFpQjtRQUNkLE1BQU07UUFDVixVQUFVO1FBQ0gsUUFBUTtRQUNOLFdBQVc7UUFDVixZQUFZLFVBRVosY0FBYztRQUNoQixZQUFZO1FBQ2Isa0JBQWtCO1FBQzFCLGtCQUFrQjtRQUNoQixvQkFBb0I7R0FyS3hCLFdBQVcsQ0E2MEJ2QjtTQTcwQlksV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zY3JvbGxpbmcnO1xuaW1wb3J0IHsgRGVjaW1hbFBpcGUsIERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2UsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBUcmFja0J5RnVuY3Rpb24sXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIEFsYWluSTE4TlNlcnZpY2UsXG4gIEFMQUlOX0kxOE5fVE9LRU4sXG4gIERhdGVQaXBlLFxuICBEZWxvbkxvY2FsZVNlcnZpY2UsXG4gIERyYXdlckhlbHBlcixcbiAgTG9jYWxlRGF0YSxcbiAgTW9kYWxIZWxwZXIsXG4gIFlOUGlwZSxcbn0gZnJvbSAnQGRlbG9uL3RoZW1lJztcbmltcG9ydCB7IEFsYWluQ29uZmlnU2VydmljZSwgQWxhaW5TVENvbmZpZyB9IGZyb20gJ0BkZWxvbi91dGlsL2NvbmZpZyc7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIElucHV0Qm9vbGVhbiwgSW5wdXROdW1iZXIsIE51bWJlcklucHV0LCB0b0Jvb2xlYW4gfSBmcm9tICdAZGVsb24vdXRpbC9kZWNvcmF0b3InO1xuaW1wb3J0IHsgZGVlcENvcHksIGRlZXBNZXJnZUtleSB9IGZyb20gJ0BkZWxvbi91dGlsL290aGVyJztcbmltcG9ydCB7IFVudGlsRGVzdHJveSwgdW50aWxEZXN0cm95ZWQgfSBmcm9tICdAbmduZWF0L3VudGlsLWRlc3Ryb3knO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IE56Q29udGV4dE1lbnVTZXJ2aWNlLCBOekRyb3Bkb3duTWVudUNvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvZHJvcGRvd24nO1xuaW1wb3J0IHsgTnpSZXNpemVFdmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvcmVzaXphYmxlJztcbmltcG9ydCB7IE56VGFibGVDb21wb25lbnQsIE56VGFibGVEYXRhIH0gZnJvbSAnbmctem9ycm8tYW50ZC90YWJsZSc7XG5pbXBvcnQgeyBmcm9tLCBpc09ic2VydmFibGUsIE9ic2VydmFibGUsIG9mLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFNUQ29sdW1uU291cmNlIH0gZnJvbSAnLi9zdC1jb2x1bW4tc291cmNlJztcbmltcG9ydCB7IFNURGF0YVNvdXJjZSwgU1REYXRhU291cmNlT3B0aW9ucywgU1REYXRhU291cmNlUmVzdWx0IH0gZnJvbSAnLi9zdC1kYXRhLXNvdXJjZSc7XG5pbXBvcnQgeyBTVEV4cG9ydCB9IGZyb20gJy4vc3QtZXhwb3J0JztcbmltcG9ydCB7IFNUUm93U291cmNlIH0gZnJvbSAnLi9zdC1yb3cuZGlyZWN0aXZlJztcbmltcG9ydCB7IFNUX0RFRkFVTFRfQ09ORklHIH0gZnJvbSAnLi9zdC5jb25maWcnO1xuaW1wb3J0IHtcbiAgU1RDaGFuZ2UsXG4gIFNUQ2hhbmdlVHlwZSxcbiAgU1RDb2x1bW4sXG4gIFNUQ29sdW1uQnV0dG9uLFxuICBTVENvbHVtbkZpbHRlck1lbnUsXG4gIFNUQ29sdW1uU2VsZWN0aW9uLFxuICBTVENvbnRleHRtZW51Rm4sXG4gIFNUQ29udGV4dG1lbnVJdGVtLFxuICBTVERhdGEsXG4gIFNURXJyb3IsXG4gIFNURXhwb3J0T3B0aW9ucyxcbiAgU1RMb2FkT3B0aW9ucyxcbiAgU1RNdWx0aVNvcnQsXG4gIFNUUGFnZSxcbiAgU1RSZXEsXG4gIFNUUmVzLFxuICBTVFJlc2V0Q29sdW1uc09wdGlvbixcbiAgU1RSZXNpemFibGUsXG4gIFNUUm93Q2xhc3NOYW1lLFxuICBTVFNpbmdsZVNvcnQsXG4gIFNUU3RhdGlzdGljYWxSZXN1bHRzLFxuICBTVFdpZHRoTW9kZSxcbn0gZnJvbSAnLi9zdC5pbnRlcmZhY2VzJztcbmltcG9ydCB7IF9TVENvbHVtbiwgX1NUSGVhZGVyIH0gZnJvbSAnLi9zdC50eXBlcyc7XG5cbkBVbnRpbERlc3Ryb3koKVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3QnLFxuICBleHBvcnRBczogJ3N0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0LmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbU1REYXRhU291cmNlLCBTVFJvd1NvdXJjZSwgU1RDb2x1bW5Tb3VyY2UsIFNURXhwb3J0LCBEYXRlUGlwZSwgWU5QaXBlLCBEZWNpbWFsUGlwZV0sXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLnN0XSc6IGB0cnVlYCxcbiAgICAnW2NsYXNzLnN0X19wLWxlZnRdJzogYHBhZ2UucGxhY2VtZW50ID09PSAnbGVmdCdgLFxuICAgICdbY2xhc3Muc3RfX3AtY2VudGVyXSc6IGBwYWdlLnBsYWNlbWVudCA9PT0gJ2NlbnRlcidgLFxuICAgICdbY2xhc3Muc3RfX3dpZHRoLXN0cmljdF0nOiBgd2lkdGhNb2RlLnR5cGUgPT09ICdzdHJpY3QnYCxcbiAgICAnW2NsYXNzLmFudC10YWJsZS1yZXBdJzogYHJlc3BvbnNpdmVgLFxuICAgICdbY2xhc3MuYW50LXRhYmxlLXJlcF9faGlkZS1oZWFkZXItZm9vdGVyXSc6IGByZXNwb25zaXZlSGlkZUhlYWRlckZvb3RlcmAsXG4gIH0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgU1RDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9wczogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9waTogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV90b3RhbDogTnVtYmVySW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9sb2FkaW5nRGVsYXk6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfYm9yZGVyZWQ6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2V4cGFuZFJvd0J5Q2xpY2s6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2V4cGFuZEFjY29yZGlvbjogQm9vbGVhbklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfcm93Q2xpY2tUaW1lOiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3Jlc3BvbnNpdmU6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3Jlc3BvbnNpdmVIaWRlSGVhZGVyRm9vdGVyOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV92aXJ0dWFsU2Nyb2xsOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV92aXJ0dWFsSXRlbVNpemU6IE51bWJlcklucHV0O1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfdmlydHVhbE1heEJ1ZmZlclB4OiBOdW1iZXJJbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX3ZpcnR1YWxNaW5CdWZmZXJQeDogTnVtYmVySW5wdXQ7XG5cbiAgcHJpdmF0ZSBkYXRhJDogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIHRvdGFsVHBsID0gYGA7XG4gIHByaXZhdGUgY29nOiBBbGFpblNUQ29uZmlnO1xuICBwcml2YXRlIHJvd0NsaWNrQ291bnQgPSAwO1xuICBwcml2YXRlIF9yZXE6IFNUUmVxO1xuICBwcml2YXRlIF9yZXM6IFNUUmVzO1xuICBwcml2YXRlIF9wYWdlOiBTVFBhZ2U7XG4gIHByaXZhdGUgX3dpZHRoTW9kZTogU1RXaWR0aE1vZGU7XG4gIHByaXZhdGUgY3VzdG9tV2lkdGhDb25maWc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBkZXN0cm95ID0gZmFsc2U7XG4gIF93aWR0aENvbmZpZzogc3RyaW5nW10gPSBbXTtcbiAgbG9jYWxlOiBMb2NhbGVEYXRhID0ge307XG4gIF9sb2FkaW5nID0gZmFsc2U7XG4gIF9kYXRhOiBTVERhdGFbXSA9IFtdO1xuICBfc3RhdGlzdGljYWw6IFNUU3RhdGlzdGljYWxSZXN1bHRzID0ge307XG4gIF9pc1BhZ2luYXRpb24gPSB0cnVlO1xuICBfYWxsQ2hlY2tlZCA9IGZhbHNlO1xuICBfYWxsQ2hlY2tlZERpc2FibGVkID0gZmFsc2U7XG4gIF9pbmRldGVybWluYXRlID0gZmFsc2U7XG4gIF9oZWFkZXJzOiBfU1RIZWFkZXJbXVtdID0gW107XG4gIF9jb2x1bW5zOiBfU1RDb2x1bW5bXSA9IFtdO1xuICBjb250ZXh0bWVudUxpc3Q6IFNUQ29udGV4dG1lbnVJdGVtW10gPSBbXTtcbiAgQFZpZXdDaGlsZCgndGFibGUnKSByZWFkb25seSBvcmdUYWJsZTogTnpUYWJsZUNvbXBvbmVudDtcbiAgQFZpZXdDaGlsZCgnY29udGV4dG1lbnVUcGwnKSByZWFkb25seSBjb250ZXh0bWVudVRwbCE6IE56RHJvcGRvd25NZW51Q29tcG9uZW50O1xuXG4gIEBJbnB1dCgpXG4gIGdldCByZXEoKTogU1RSZXEge1xuICAgIHJldHVybiB0aGlzLl9yZXE7XG4gIH1cbiAgc2V0IHJlcSh2YWx1ZTogU1RSZXEpIHtcbiAgICB0aGlzLl9yZXEgPSBkZWVwTWVyZ2VLZXkoe30sIHRydWUsIHRoaXMuY29nLnJlcSwgdmFsdWUpO1xuICB9XG4gIC8qKiDov5Tlm57kvZPphY3nva4gKi9cbiAgQElucHV0KClcbiAgZ2V0IHJlcygpOiBTVFJlcyB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcztcbiAgfVxuICBzZXQgcmVzKHZhbHVlOiBTVFJlcykge1xuICAgIGNvbnN0IGl0ZW0gPSAodGhpcy5fcmVzID0gZGVlcE1lcmdlS2V5KHt9LCB0cnVlLCB0aGlzLmNvZy5yZXMsIHZhbHVlKSk7XG4gICAgY29uc3QgcmVOYW1lID0gaXRlbS5yZU5hbWUhO1xuICAgIGlmICghQXJyYXkuaXNBcnJheShyZU5hbWUubGlzdCkpIHJlTmFtZS5saXN0ID0gcmVOYW1lLmxpc3QhLnNwbGl0KCcuJyk7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHJlTmFtZS50b3RhbCkpIHJlTmFtZS50b3RhbCA9IHJlTmFtZS50b3RhbCEuc3BsaXQoJy4nKTtcbiAgICB0aGlzLl9yZXMgPSBpdGVtO1xuICB9XG4gIEBJbnB1dCgpXG4gIGdldCBwYWdlKCk6IFNUUGFnZSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhZ2U7XG4gIH1cbiAgc2V0IHBhZ2UodmFsdWU6IFNUUGFnZSkge1xuICAgIHRoaXMuX3BhZ2UgPSB7IC4uLnRoaXMuY29nLnBhZ2UsIC4uLnZhbHVlIH07XG4gICAgdGhpcy51cGRhdGVUb3RhbFRwbCgpO1xuICB9XG4gIEBJbnB1dCgpIGRhdGE6IHN0cmluZyB8IFNURGF0YVtdIHwgT2JzZXJ2YWJsZTxTVERhdGFbXT47XG4gIEBJbnB1dCgpIGNvbHVtbnM6IFNUQ29sdW1uW10gPSBbXTtcbiAgQElucHV0KCkgY29udGV4dG1lbnU/OiBTVENvbnRleHRtZW51Rm47XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHBzID0gMTA7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHBpID0gMTtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgdG90YWwgPSAwO1xuICBASW5wdXQoKSBsb2FkaW5nOiBib29sZWFuIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIGxvYWRpbmdEZWxheSA9IDA7XG4gIEBJbnB1dCgpIGxvYWRpbmdJbmRpY2F0b3I6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYm9yZGVyZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgc2l6ZTogJ3NtYWxsJyB8ICdtaWRkbGUnIHwgJ2RlZmF1bHQnO1xuICBASW5wdXQoKSBzY3JvbGw6IHsgeT86IHN0cmluZzsgeD86IHN0cmluZyB9O1xuICBASW5wdXQoKSBzaW5nbGVTb3J0OiBTVFNpbmdsZVNvcnQ7XG4gIHByaXZhdGUgX211bHRpU29ydD86IFNUTXVsdGlTb3J0O1xuICBASW5wdXQoKVxuICBnZXQgbXVsdGlTb3J0KCk6IE56U2FmZUFueSB7XG4gICAgcmV0dXJuIHRoaXMuX211bHRpU29ydDtcbiAgfVxuICBzZXQgbXVsdGlTb3J0KHZhbHVlOiBOelNhZmVBbnkpIHtcbiAgICBpZiAoKHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nICYmICF0b0Jvb2xlYW4odmFsdWUpKSB8fCAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwKSkge1xuICAgICAgdGhpcy5fbXVsdGlTb3J0ID0gdW5kZWZpbmVkO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9tdWx0aVNvcnQgPSB7XG4gICAgICAuLi4odHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyA/IHZhbHVlIDoge30pLFxuICAgIH07XG4gIH1cbiAgQElucHV0KCkgcm93Q2xhc3NOYW1lOiBTVFJvd0NsYXNzTmFtZTtcbiAgQElucHV0KClcbiAgc2V0IHdpZHRoTW9kZSh2YWx1ZTogU1RXaWR0aE1vZGUpIHtcbiAgICB0aGlzLl93aWR0aE1vZGUgPSB7IC4uLnRoaXMuY29nLndpZHRoTW9kZSwgLi4udmFsdWUgfTtcbiAgfVxuICBnZXQgd2lkdGhNb2RlKCk6IFNUV2lkdGhNb2RlIHtcbiAgICByZXR1cm4gdGhpcy5fd2lkdGhNb2RlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCB3aWR0aENvbmZpZyh2YWw6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fd2lkdGhDb25maWcgPSB2YWw7XG4gICAgdGhpcy5jdXN0b21XaWR0aENvbmZpZyA9IHZhbCAmJiB2YWwubGVuZ3RoID4gMDtcbiAgfVxuICBwcml2YXRlIF9yZXNpemFibGU6IFNUUmVzaXphYmxlO1xuICBASW5wdXQoKVxuICBzZXQgcmVzaXphYmxlKHZhbDogU1RSZXNpemFibGUgfCBib29sZWFuIHwgc3RyaW5nKSB7XG4gICAgdGhpcy5fcmVzaXphYmxlID0gdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcgPyB2YWwgOiB7IGRpc2FibGVkOiAhdG9Cb29sZWFuKHZhbCkgfTtcbiAgfVxuICBASW5wdXQoKSBoZWFkZXI/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGw7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzaG93SGVhZGVyID0gdHJ1ZTtcbiAgQElucHV0KCkgZm9vdGVyPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsO1xuICBASW5wdXQoKSBib2R5SGVhZGVyPzogVGVtcGxhdGVSZWY8U1RTdGF0aXN0aWNhbFJlc3VsdHM+IHwgbnVsbDtcbiAgQElucHV0KCkgYm9keT86IFRlbXBsYXRlUmVmPFNUU3RhdGlzdGljYWxSZXN1bHRzPiB8IG51bGw7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBleHBhbmRSb3dCeUNsaWNrID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBleHBhbmRBY2NvcmRpb24gPSBmYWxzZTtcbiAgQElucHV0KCkgZXhwYW5kOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDoge307IGNvbHVtbjogU1RDb2x1bW4gfT47XG4gIEBJbnB1dCgpIG5vUmVzdWx0Pzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSByb3dDbGlja1RpbWUgPSAyMDA7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSByZXNwb25zaXZlOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHJlc3BvbnNpdmVIaWRlSGVhZGVyRm9vdGVyOiBib29sZWFuO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgZXJyb3IgPSBuZXcgRXZlbnRFbWl0dGVyPFNURXJyb3I+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFNUQ2hhbmdlPigpO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgdmlydHVhbFNjcm9sbCA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSB2aXJ0dWFsSXRlbVNpemUgPSA1NDtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgdmlydHVhbE1heEJ1ZmZlclB4ID0gMjAwO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSB2aXJ0dWFsTWluQnVmZmVyUHggPSAxMDA7XG4gIEBJbnB1dCgpIHZpcnR1YWxGb3JUcmFja0J5OiBUcmFja0J5RnVuY3Rpb248TnpUYWJsZURhdGE+ID0gaW5kZXggPT4gaW5kZXg7XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbnVtYmVyIG9mIHRoZSBjdXJyZW50IHBhZ2VcbiAgICovXG4gIGdldCBjb3VudCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9kYXRhLmxlbmd0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGRhdGEgb2YgdGhlIGN1cnJlbnQgcGFnZVxuICAgKi9cbiAgZ2V0IGxpc3QoKTogU1REYXRhW10ge1xuICAgIHJldHVybiB0aGlzLl9kYXRhO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgcm91dGVyU3RhdGUoKTogeyBwaTogbnVtYmVyOyBwczogbnVtYmVyOyB0b3RhbDogbnVtYmVyIH0ge1xuICAgIGNvbnN0IHsgcGksIHBzLCB0b3RhbCB9ID0gdGhpcztcbiAgICByZXR1cm4geyBwaSwgcHMsIHRvdGFsIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KEFMQUlOX0kxOE5fVE9LRU4pIGkxOG5TcnY6IEFsYWluSTE4TlNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGV4cG9ydFNydjogU1RFeHBvcnQsXG4gICAgcHJpdmF0ZSBtb2RhbEhlbHBlcjogTW9kYWxIZWxwZXIsXG4gICAgcHJpdmF0ZSBkcmF3ZXJIZWxwZXI6IERyYXdlckhlbHBlcixcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogYW55LFxuICAgIHByaXZhdGUgY29sdW1uU291cmNlOiBTVENvbHVtblNvdXJjZSxcbiAgICBwcml2YXRlIGRhdGFTb3VyY2U6IFNURGF0YVNvdXJjZSxcbiAgICBwcml2YXRlIGRlbG9uSTE4bjogRGVsb25Mb2NhbGVTZXJ2aWNlLFxuICAgIGNvbmZpZ1NydjogQWxhaW5Db25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgY21zOiBOekNvbnRleHRNZW51U2VydmljZSxcbiAgKSB7XG4gICAgdGhpcy5zZXRDb2coY29uZmlnU3J2Lm1lcmdlKCdzdCcsIFNUX0RFRkFVTFRfQ09ORklHKSEpO1xuXG4gICAgdGhpcy5kZWxvbkkxOG4uY2hhbmdlLnBpcGUodW50aWxEZXN0cm95ZWQodGhpcykpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmxvY2FsZSA9IHRoaXMuZGVsb25JMThuLmdldERhdGEoJ3N0Jyk7XG4gICAgICBpZiAodGhpcy5fY29sdW1ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMudXBkYXRlVG90YWxUcGwoKTtcbiAgICAgICAgdGhpcy5jZCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaTE4blNydi5jaGFuZ2VcbiAgICAgIC5waXBlKFxuICAgICAgICB1bnRpbERlc3Ryb3llZCh0aGlzKSxcbiAgICAgICAgZmlsdGVyKCgpID0+IHRoaXMuX2NvbHVtbnMubGVuZ3RoID4gMCksXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMucmVmcmVzaENvbHVtbnMoKSk7XG4gIH1cblxuICBwcml2YXRlIHNldENvZyhjb2c6IEFsYWluU1RDb25maWcpOiB2b2lkIHtcbiAgICBjb25zdCBjb3B5TXVsdGlTb3J0ID0geyAuLi5jb2cubXVsdGlTb3J0IH07XG4gICAgLy8gQmVjYXVzZSBtdWx0aVNvcnQuZ2xvYmFsIHdpbGwgYWZmZWN0IHRoZSByZXN1bHQsIGl0IHNob3VsZCBiZSByZW1vdmVkIGZpcnN0LCBhbmQgbXVsdGlTb3J0IHdpbGwgYmUgb3BlcmF0ZWQgYWdhaW4gYWZ0ZXIgcHJvY2Vzc2luZy5cbiAgICBkZWxldGUgY29nLm11bHRpU29ydDtcbiAgICB0aGlzLmNvZyA9IGNvZztcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvZyk7XG5cbiAgICBpZiAoY29weU11bHRpU29ydC5nbG9iYWwgIT09IGZhbHNlKSB7XG4gICAgICB0aGlzLm11bHRpU29ydCA9IGNvcHlNdWx0aVNvcnQ7XG4gICAgfVxuICAgIHRoaXMuY29sdW1uU291cmNlLnNldENvZyhjb2cpO1xuICB9XG5cbiAgY2QoKTogdGhpcyB7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVuZGVyVG90YWwodG90YWw6IHN0cmluZywgcmFuZ2U6IHN0cmluZ1tdKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy50b3RhbFRwbFxuICAgICAgPyB0aGlzLnRvdGFsVHBsLnJlcGxhY2UoJ3t7dG90YWx9fScsIHRvdGFsKS5yZXBsYWNlKCd7e3JhbmdlWzBdfX0nLCByYW5nZVswXSkucmVwbGFjZSgne3tyYW5nZVsxXX19JywgcmFuZ2VbMV0pXG4gICAgICA6ICcnO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGFuZ2VFbWl0KHR5cGU6IFNUQ2hhbmdlVHlwZSwgZGF0YT86IGFueSk6IHZvaWQge1xuICAgIGNvbnN0IHJlczogU1RDaGFuZ2UgPSB7XG4gICAgICB0eXBlLFxuICAgICAgcGk6IHRoaXMucGksXG4gICAgICBwczogdGhpcy5wcyxcbiAgICAgIHRvdGFsOiB0aGlzLnRvdGFsLFxuICAgIH07XG4gICAgaWYgKGRhdGEgIT0gbnVsbCkge1xuICAgICAgcmVzW3R5cGVdID0gZGF0YTtcbiAgICB9XG4gICAgdGhpcy5jaGFuZ2UuZW1pdChyZXMpO1xuICB9XG5cbiAgLy8gI3JlZ2lvbiBkYXRhXG5cbiAgLyoqXG4gICAqIOiOt+WPlui/h+a7pOWQjuaJgOacieaVsOaNrlxuICAgKiAtIOacrOWcsOaVsOaNru+8muWMheWQq+aOkuW6j+OAgei/h+a7pOWQjuS4jeWIhumhteaVsOaNrlxuICAgKiAtIOi/nOeoi+aVsOaNru+8muS4jeS8oOmAkiBgcGlg44CBYHBzYCDkuKTkuKrlj4LmlbBcbiAgICovXG4gIGdldCBmaWx0ZXJlZERhdGEoKTogUHJvbWlzZTxTVERhdGFbXT4ge1xuICAgIHJldHVybiB0aGlzLmxvYWREYXRhKHsgcGFnaW5hdG9yOiBmYWxzZSB9IGFzIGFueSkudGhlbihyZXMgPT4gcmVzLmxpc3QpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVUb3RhbFRwbCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IHRvdGFsIH0gPSB0aGlzLnBhZ2U7XG4gICAgaWYgKHR5cGVvZiB0b3RhbCA9PT0gJ3N0cmluZycgJiYgdG90YWwubGVuZ3RoKSB7XG4gICAgICB0aGlzLnRvdGFsVHBsID0gdG90YWw7XG4gICAgfSBlbHNlIGlmICh0b0Jvb2xlYW4odG90YWwpKSB7XG4gICAgICB0aGlzLnRvdGFsVHBsID0gdGhpcy5sb2NhbGUudG90YWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudG90YWxUcGwgPSAnJztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldExvYWRpbmcodmFsOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubG9hZGluZyA9PSBudWxsKSB7XG4gICAgICB0aGlzLl9sb2FkaW5nID0gdmFsO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbG9hZERhdGEob3B0aW9ucz86IFNURGF0YVNvdXJjZU9wdGlvbnMpOiBQcm9taXNlPFNURGF0YVNvdXJjZVJlc3VsdD4ge1xuICAgIGNvbnN0IHsgcGksIHBzLCBkYXRhLCByZXEsIHJlcywgcGFnZSwgdG90YWwsIHNpbmdsZVNvcnQsIG11bHRpU29ydCwgcm93Q2xhc3NOYW1lIH0gPSB0aGlzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZVByb21pc2UsIHJlamVjdFByb21pc2UpID0+IHtcbiAgICAgIGlmICh0aGlzLmRhdGEkKSB7XG4gICAgICAgIHRoaXMuZGF0YSQudW5zdWJzY3JpYmUoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5kYXRhJCA9IHRoaXMuZGF0YVNvdXJjZVxuICAgICAgICAucHJvY2Vzcyh7XG4gICAgICAgICAgcGksXG4gICAgICAgICAgcHMsXG4gICAgICAgICAgdG90YWwsXG4gICAgICAgICAgZGF0YSxcbiAgICAgICAgICByZXEsXG4gICAgICAgICAgcmVzLFxuICAgICAgICAgIHBhZ2UsXG4gICAgICAgICAgY29sdW1uczogdGhpcy5fY29sdW1ucyxcbiAgICAgICAgICBzaW5nbGVTb3J0LFxuICAgICAgICAgIG11bHRpU29ydCxcbiAgICAgICAgICByb3dDbGFzc05hbWUsXG4gICAgICAgICAgcGFnaW5hdG9yOiB0cnVlLFxuICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgIH0pXG4gICAgICAgIC5waXBlKHVudGlsRGVzdHJveWVkKHRoaXMpKVxuICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgIHJlc3VsdCA9PiByZXNvbHZlUHJvbWlzZShyZXN1bHQpLFxuICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybignc3QubG9hZERhdGUnLCBlcnJvcik7XG4gICAgICAgICAgICByZWplY3RQcm9taXNlKGVycm9yKTtcbiAgICAgICAgICB9LFxuICAgICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBsb2FkUGFnZURhdGEoKTogUHJvbWlzZTx0aGlzPiB7XG4gICAgdGhpcy5zZXRMb2FkaW5nKHRydWUpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmxvYWREYXRhKCk7XG4gICAgICB0aGlzLnNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgaWYgKHR5cGVvZiByZXN1bHQucGkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMucGkgPSByZXN1bHQucGk7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHJlc3VsdC5wcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5wcyA9IHJlc3VsdC5wcztcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgcmVzdWx0LnRvdGFsICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLnRvdGFsID0gcmVzdWx0LnRvdGFsO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiByZXN1bHQucGFnZVNob3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMuX2lzUGFnaW5hdGlvbiA9IHJlc3VsdC5wYWdlU2hvdztcbiAgICAgIH1cbiAgICAgIHRoaXMuX2RhdGEgPSByZXN1bHQubGlzdCBhcyBTVERhdGFbXTtcbiAgICAgIHRoaXMuX3N0YXRpc3RpY2FsID0gcmVzdWx0LnN0YXRpc3RpY2FsIGFzIFNUU3RhdGlzdGljYWxSZXN1bHRzO1xuICAgICAgdGhpcy5jaGFuZ2VFbWl0KCdsb2FkZWQnLCByZXN1bHQubGlzdCk7XG4gICAgICAvLyBTaG91bGQgYmUgcmUtcmVuZGVyIGluIG5leHQgdGlrZSB3aGVuIHVzaW5nIHZpcnR1YWwgc2Nyb2xsXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbmctYWxhaW4vbmctYWxhaW4vaXNzdWVzLzE4MzZcbiAgICAgIGlmICh0aGlzLmNka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydCkge1xuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRoaXMuY2RrVmlydHVhbFNjcm9sbFZpZXdwb3J0LmNoZWNrVmlld3BvcnRTaXplKCkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuX3JlZkNoZWNrKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGlmICghdGhpcy5kZXN0cm95KSB7XG4gICAgICAgIHRoaXMuc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgdGhpcy5lcnJvci5lbWl0KHsgdHlwZTogJ3JlcScsIGVycm9yIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9XG5cbiAgLyoqIOa4heepuuaJgOacieaVsOaNriAqL1xuICBjbGVhcihjbGVhblN0YXR1czogYm9vbGVhbiA9IHRydWUpOiB0aGlzIHtcbiAgICBpZiAoY2xlYW5TdGF0dXMpIHtcbiAgICAgIHRoaXMuY2xlYXJTdGF0dXMoKTtcbiAgICB9XG4gICAgdGhpcy5fZGF0YSA9IFtdO1xuICAgIHJldHVybiB0aGlzLmNkKCk7XG4gIH1cblxuICAvKiog5riF56m65omA5pyJ54q25oCBICovXG4gIGNsZWFyU3RhdHVzKCk6IHRoaXMge1xuICAgIHJldHVybiB0aGlzLmNsZWFyQ2hlY2soKS5jbGVhclJhZGlvKCkuY2xlYXJGaWx0ZXIoKS5jbGVhclNvcnQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmoLnmja7pobXnoIHph43mlrDliqDovb3mlbDmja5cbiAgICpcbiAgICogQHBhcmFtIHBpIOaMh+WumuW9k+WJjemhteegge+8jOm7mOiupO+8mmAxYFxuICAgKiBAcGFyYW0gZXh0cmFQYXJhbXMg6YeN5paw5oyH5a6aIGBleHRyYVBhcmFtc2Ag5YC8XG4gICAqIEBwYXJhbSBvcHRpb25zIOmAiemhuVxuICAgKi9cbiAgbG9hZChwaTogbnVtYmVyID0gMSwgZXh0cmFQYXJhbXM/OiB7fSwgb3B0aW9ucz86IFNUTG9hZE9wdGlvbnMpOiB0aGlzIHtcbiAgICBpZiAocGkgIT09IC0xKSB0aGlzLnBpID0gcGk7XG4gICAgaWYgKHR5cGVvZiBleHRyYVBhcmFtcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVxLnBhcmFtcyA9IG9wdGlvbnMgJiYgb3B0aW9ucy5tZXJnZSA/IHsgLi4udGhpcy5yZXEucGFyYW1zLCAuLi5leHRyYVBhcmFtcyB9IDogZXh0cmFQYXJhbXM7XG4gICAgfVxuICAgIHRoaXMuX2NoYW5nZSgncGknLCBvcHRpb25zKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiDph43mlrDliLfmlrDlvZPliY3pobVcbiAgICogQHBhcmFtIGV4dHJhUGFyYW1zIOmHjeaWsOaMh+WumiBgZXh0cmFQYXJhbXNgIOWAvFxuICAgKi9cbiAgcmVsb2FkKGV4dHJhUGFyYW1zPzoge30sIG9wdGlvbnM/OiBTVExvYWRPcHRpb25zKTogdGhpcyB7XG4gICAgcmV0dXJuIHRoaXMubG9hZCgtMSwgZXh0cmFQYXJhbXMsIG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIOmHjee9ruS4lOmHjeaWsOiuvue9riBgcGlgIOS4uiBgMWDvvIzljIXlkKvku6XkuIvlgLzvvJpcbiAgICogLSBgY2hlY2tgIOaVsOaNrlxuICAgKiAtIGByYWRpb2Ag5pWw5o2uXG4gICAqIC0gYHNvcnRgIOaVsOaNrlxuICAgKiAtIGBmaWxldGVyYCDmlbDmja5cbiAgICpcbiAgICogQHBhcmFtIGV4dHJhUGFyYW1zIOmHjeaWsOaMh+WumiBgZXh0cmFQYXJhbXNgIOWAvFxuICAgKi9cbiAgcmVzZXQoZXh0cmFQYXJhbXM/OiB7fSwgb3B0aW9ucz86IFNUTG9hZE9wdGlvbnMpOiB0aGlzIHtcbiAgICB0aGlzLmNsZWFyU3RhdHVzKCkubG9hZCgxLCBleHRyYVBhcmFtcywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcml2YXRlIF90b1RvcChlbmZvcmNlPzogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICghKGVuZm9yY2UgPT0gbnVsbCA/IHRoaXMucGFnZS50b1RvcCA6IGVuZm9yY2UpKSByZXR1cm47XG4gICAgY29uc3QgZWwgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgaWYgKHRoaXMuc2Nyb2xsKSB7XG4gICAgICBpZiAodGhpcy5jZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQpIHtcbiAgICAgICAgdGhpcy5jZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQuc2Nyb2xsVG8oe1xuICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsLnF1ZXJ5U2VsZWN0b3IoJy5hbnQtdGFibGUtYm9keSwgLmFudC10YWJsZS1jb250ZW50Jyk/LnNjcm9sbFRvKDAsIDApO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbC5zY3JvbGxJbnRvVmlldygpO1xuICAgIC8vIGZpeCBoZWFkZXIgaGVpZ2h0XG4gICAgdGhpcy5kb2MuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCAtPSB0aGlzLnBhZ2UudG9Ub3BPZmZzZXQhO1xuICB9XG5cbiAgX2NoYW5nZSh0eXBlOiAncGknIHwgJ3BzJywgb3B0aW9ucz86IFNUTG9hZE9wdGlvbnMpOiB2b2lkIHtcbiAgICBpZiAodHlwZSA9PT0gJ3BpJyB8fCAodHlwZSA9PT0gJ3BzJyAmJiB0aGlzLnBpIDw9IE1hdGguY2VpbCh0aGlzLnRvdGFsIC8gdGhpcy5wcykpKSB7XG4gICAgICB0aGlzLmxvYWRQYWdlRGF0YSgpLnRoZW4oKCkgPT4gdGhpcy5fdG9Ub3Aob3B0aW9ucz8udG9Ub3ApKTtcbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZUVtaXQodHlwZSk7XG4gIH1cblxuICBfY2xpY2soZTogRXZlbnQsIGl0ZW06IFNURGF0YSwgY29sOiBTVENvbHVtbik6IGJvb2xlYW4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IHJlcyA9IGNvbC5jbGljayEoaXRlbSwgdGhpcyk7XG4gICAgaWYgKHR5cGVvZiByZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHJlcywgeyBzdGF0ZTogdGhpcy5yb3V0ZXJTdGF0ZSB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHByaXZhdGUgY2xvc2VPdGhlckV4cGFuZChpdGVtOiBTVERhdGEpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5leHBhbmRBY2NvcmRpb24gPT09IGZhbHNlKSByZXR1cm47XG4gICAgdGhpcy5fZGF0YS5maWx0ZXIoaSA9PiBpICE9PSBpdGVtKS5mb3JFYWNoKGkgPT4gKGkuZXhwYW5kID0gZmFsc2UpKTtcbiAgfVxuICBfcm93Q2xpY2soZTogRXZlbnQsIGl0ZW06IFNURGF0YSwgaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIGlmICgoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLm5vZGVOYW1lID09PSAnSU5QVVQnKSByZXR1cm47XG4gICAgY29uc3QgeyBleHBhbmQsIGV4cGFuZFJvd0J5Q2xpY2ssIHJvd0NsaWNrVGltZSB9ID0gdGhpcztcbiAgICBpZiAoISFleHBhbmQgJiYgaXRlbS5zaG93RXhwYW5kICE9PSBmYWxzZSAmJiBleHBhbmRSb3dCeUNsaWNrKSB7XG4gICAgICBpdGVtLmV4cGFuZCA9ICFpdGVtLmV4cGFuZDtcbiAgICAgIHRoaXMuY2xvc2VPdGhlckV4cGFuZChpdGVtKTtcbiAgICAgIHRoaXMuY2hhbmdlRW1pdCgnZXhwYW5kJywgaXRlbSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgICsrdGhpcy5yb3dDbGlja0NvdW50O1xuICAgIGlmICh0aGlzLnJvd0NsaWNrQ291bnQgIT09IDEpIHJldHVybjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSB7IGUsIGl0ZW0sIGluZGV4IH07XG4gICAgICBpZiAodGhpcy5yb3dDbGlja0NvdW50ID09PSAxKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlRW1pdCgnY2xpY2snLCBkYXRhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2hhbmdlRW1pdCgnZGJsQ2xpY2snLCBkYXRhKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucm93Q2xpY2tDb3VudCA9IDA7XG4gICAgfSwgcm93Q2xpY2tUaW1lKTtcbiAgfVxuXG4gIF9leHBhbmRDaGFuZ2UoaXRlbTogU1REYXRhLCBleHBhbmQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5leHBhbmRSb3dCeUNsaWNrKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGl0ZW0uZXhwYW5kID0gZXhwYW5kO1xuICAgIHRoaXMuY2xvc2VPdGhlckV4cGFuZChpdGVtKTtcbiAgICB0aGlzLmNoYW5nZUVtaXQoJ2V4cGFuZCcsIGl0ZW0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhIHJvdyBpbiB0aGUgdGFibGUsIGxpa2UgdGhpczpcbiAgICpcbiAgICogYGBgXG4gICAqIHRoaXMuc3QucmVtb3ZlUm93KDApXG4gICAqIHRoaXMuc3QucmVtb3ZlUm93KHN0RGF0YUl0ZW0pXG4gICAqIGBgYFxuICAgKi9cbiAgcmVtb3ZlUm93KGRhdGE6IFNURGF0YSB8IFNURGF0YVtdIHwgbnVtYmVyKTogdGhpcyB7XG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnbnVtYmVyJykge1xuICAgICAgdGhpcy5fZGF0YS5zcGxpY2UoZGF0YSwgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICBkYXRhID0gW2RhdGFdO1xuICAgICAgfVxuXG4gICAgICAoZGF0YSBhcyBTVERhdGFbXSlcbiAgICAgICAgLm1hcChpdGVtID0+IHRoaXMuX2RhdGEuaW5kZXhPZihpdGVtKSlcbiAgICAgICAgLmZpbHRlcihwb3MgPT4gcG9zICE9PSAtMSlcbiAgICAgICAgLmZvckVhY2gocG9zID0+IHRoaXMuX2RhdGEuc3BsaWNlKHBvcywgMSkpO1xuICAgIH1cbiAgICAvLyByZWNhbGN1bGF0ZSBub1xuICAgIHRoaXMuX2NvbHVtbnNcbiAgICAgIC5maWx0ZXIodyA9PiB3LnR5cGUgPT09ICdubycpXG4gICAgICAuZm9yRWFjaChjID0+IHRoaXMuX2RhdGEuZm9yRWFjaCgoaSwgaWR4KSA9PiAoaS5fdmFsdWVzW2MuX19wb2ludCFdID0geyBfdGV4dDogdGhpcy5kYXRhU291cmNlLmdldE5vSW5kZXgoaSwgYywgaWR4KSwgb3JnOiBpZHggfSkpKTtcblxuICAgIHJldHVybiB0aGlzLmNkKCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgcm93IHZhbHVlIGZvciB0aGUgYGluZGV4YCBpbiB0aGUgdGFibGUsIGxpa2UgdGhpczpcbiAgICpcbiAgICogLSBgb3B0aW5vcy5yZWZyZXNoU2NoZW1hYCBXaGV0aGVyIHRvIHJlZnJlc2ggb2Ygc3Qgc2NoZW1hc1xuICAgKiAtIGBvcHRpbm9zLmVtaXRSZWxvYWRgIFdoZXRoZXIgdG8gdHJpZ2dlciBhIHJlbG9hZCBodHRwIHJlcXVlc3Qgd2hlbiBkYXRhIGlzIHVybFxuICAgKlxuICAgKiBgYGBcbiAgICogdGhpcy5zdC5zZXRSb3coMCwgeyBwcmljZTogMTAwIH0pXG4gICAqIHRoaXMuc3Quc2V0Um93KDAsIHsgcHJpY2U6IDEwMCwgbmFtZTogJ2FzZGYnIH0pXG4gICAqIHRoaXMuc3Quc2V0Um93KGl0ZW0sIHsgcHJpY2U6IDEwMCB9KVxuICAgKiBgYGBcbiAgICovXG4gIHNldFJvdyhpbmRleDogbnVtYmVyIHwgU1REYXRhLCBpdGVtOiBTVERhdGEsIG9wdGlvbnM/OiB7IHJlZnJlc2hTY2hlbWE/OiBib29sZWFuOyBlbWl0UmVsb2FkPzogYm9vbGVhbiB9KTogdGhpcyB7XG4gICAgb3B0aW9ucyA9IHsgcmVmcmVzaFNjaGVtYTogZmFsc2UsIGVtaXRSZWxvYWQ6IGZhbHNlLCAuLi5vcHRpb25zIH07XG4gICAgaWYgKHR5cGVvZiBpbmRleCAhPT0gJ251bWJlcicpIHtcbiAgICAgIGluZGV4ID0gdGhpcy5fZGF0YS5pbmRleE9mKGluZGV4KTtcbiAgICB9XG4gICAgdGhpcy5fZGF0YVtpbmRleF0gPSBkZWVwTWVyZ2VLZXkodGhpcy5fZGF0YVtpbmRleF0sIGZhbHNlLCBpdGVtKTtcbiAgICB0aGlzLm9wdGltaXplRGF0YSgpO1xuICAgIGlmIChvcHRpb25zLnJlZnJlc2hTY2hlbWEpIHtcbiAgICAgIHRoaXMucmVzZXRDb2x1bW5zKHsgZW1pdFJlbG9hZDogb3B0aW9ucy5lbWl0UmVsb2FkIH0pO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIHNvcnRcblxuICBzb3J0KGNvbDogX1NUQ29sdW1uLCBpZHg6IG51bWJlciwgdmFsdWU6IGFueSk6IHZvaWQge1xuICAgIGlmICh0aGlzLm11bHRpU29ydCkge1xuICAgICAgY29sLl9zb3J0LmRlZmF1bHQgPSB2YWx1ZTtcbiAgICAgIGNvbC5fc29ydC50aWNrID0gdGhpcy5kYXRhU291cmNlLm5leHRTb3J0VGljaztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY29sdW1ucy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4gKGl0ZW0uX3NvcnQuZGVmYXVsdCA9IGluZGV4ID09PSBpZHggPyB2YWx1ZSA6IG51bGwpKTtcbiAgICB9XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHRoaXMubG9hZFBhZ2VEYXRhKCk7XG4gICAgY29uc3QgcmVzID0ge1xuICAgICAgdmFsdWUsXG4gICAgICBtYXA6IHRoaXMuZGF0YVNvdXJjZS5nZXRSZXFTb3J0TWFwKHRoaXMuc2luZ2xlU29ydCwgdGhpcy5tdWx0aVNvcnQsIHRoaXMuX2NvbHVtbnMpLFxuICAgICAgY29sdW1uOiBjb2wsXG4gICAgfTtcbiAgICB0aGlzLmNoYW5nZUVtaXQoJ3NvcnQnLCByZXMpO1xuICB9XG5cbiAgY2xlYXJTb3J0KCk6IHRoaXMge1xuICAgIHRoaXMuX2NvbHVtbnMuZm9yRWFjaChpdGVtID0+IChpdGVtLl9zb3J0LmRlZmF1bHQgPSBudWxsKSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiBmaWx0ZXJcblxuICBwcml2YXRlIGhhbmRsZUZpbHRlcihjb2w6IFNUQ29sdW1uKTogdm9pZCB7XG4gICAgLy8g6L+H5ruk6KGo56S65LiA56eN5pWw5o2u55qE5Y+Y5YyW5bqU6YeN572u6aG156CB5Li6IGAxYFxuICAgIHRoaXMucGkgPSAxO1xuICAgIHRoaXMuY29sdW1uU291cmNlLnVwZGF0ZURlZmF1bHQoY29sLmZpbHRlciEpO1xuICAgIHRoaXMubG9hZFBhZ2VEYXRhKCk7XG4gICAgdGhpcy5jaGFuZ2VFbWl0KCdmaWx0ZXInLCBjb2wpO1xuICB9XG5cbiAgX2ZpbHRlckNvbmZpcm0oY29sOiBfU1RDb2x1bW4pOiB2b2lkIHtcbiAgICB0aGlzLmhhbmRsZUZpbHRlcihjb2wpO1xuICB9XG5cbiAgX2ZpbHRlclJhZGlvKGNvbDogX1NUQ29sdW1uLCBpdGVtOiBTVENvbHVtbkZpbHRlck1lbnUsIGNoZWNrZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBjb2wuZmlsdGVyIS5tZW51cyEuZm9yRWFjaChpID0+IChpLmNoZWNrZWQgPSBmYWxzZSkpO1xuICAgIGl0ZW0uY2hlY2tlZCA9IGNoZWNrZWQ7XG4gIH1cblxuICBfZmlsdGVyQ2xlYXIoY29sOiBfU1RDb2x1bW4pOiB2b2lkIHtcbiAgICB0aGlzLmNvbHVtblNvdXJjZS5jbGVhbkZpbHRlcihjb2wpO1xuICAgIHRoaXMuaGFuZGxlRmlsdGVyKGNvbCk7XG4gIH1cblxuICBjbGVhckZpbHRlcigpOiB0aGlzIHtcbiAgICB0aGlzLl9jb2x1bW5zLmZpbHRlcih3ID0+IHcuZmlsdGVyICYmIHcuZmlsdGVyLmRlZmF1bHQgPT09IHRydWUpLmZvckVhY2goY29sID0+IHRoaXMuY29sdW1uU291cmNlLmNsZWFuRmlsdGVyKGNvbCkpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgX2ZpbHRlckNsaWNrKCRldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiBjaGVja2JveFxuXG4gIC8qKiDmuIXpmaTmiYDmnIkgYGNoZWNrYm94YCAqL1xuICBjbGVhckNoZWNrKCk6IHRoaXMge1xuICAgIHJldHVybiB0aGlzLl9jaGVja0FsbChmYWxzZSk7XG4gIH1cblxuICBwcml2YXRlIF9yZWZDaGVjaygpOiB0aGlzIHtcbiAgICBjb25zdCB2YWxpZERhdGEgPSB0aGlzLl9kYXRhLmZpbHRlcih3ID0+ICF3LmRpc2FibGVkKTtcbiAgICBjb25zdCBjaGVja2VkTGlzdCA9IHZhbGlkRGF0YS5maWx0ZXIodyA9PiB3LmNoZWNrZWQgPT09IHRydWUpO1xuICAgIHRoaXMuX2FsbENoZWNrZWQgPSBjaGVja2VkTGlzdC5sZW5ndGggPiAwICYmIGNoZWNrZWRMaXN0Lmxlbmd0aCA9PT0gdmFsaWREYXRhLmxlbmd0aDtcbiAgICBjb25zdCBhbGxVbkNoZWNrZWQgPSB2YWxpZERhdGEuZXZlcnkodmFsdWUgPT4gIXZhbHVlLmNoZWNrZWQpO1xuICAgIHRoaXMuX2luZGV0ZXJtaW5hdGUgPSAhdGhpcy5fYWxsQ2hlY2tlZCAmJiAhYWxsVW5DaGVja2VkO1xuICAgIHRoaXMuX2FsbENoZWNrZWREaXNhYmxlZCA9IHRoaXMuX2RhdGEubGVuZ3RoID09PSB0aGlzLl9kYXRhLmZpbHRlcih3ID0+IHcuZGlzYWJsZWQpLmxlbmd0aDtcbiAgICByZXR1cm4gdGhpcy5jZCgpO1xuICB9XG5cbiAgX2NoZWNrQWxsKGNoZWNrZWQ/OiBib29sZWFuKTogdGhpcyB7XG4gICAgY2hlY2tlZCA9IHR5cGVvZiBjaGVja2VkID09PSAndW5kZWZpbmVkJyA/IHRoaXMuX2FsbENoZWNrZWQgOiBjaGVja2VkO1xuICAgIHRoaXMuX2RhdGEuZmlsdGVyKHcgPT4gIXcuZGlzYWJsZWQpLmZvckVhY2goaSA9PiAoaS5jaGVja2VkID0gY2hlY2tlZCkpO1xuICAgIHJldHVybiB0aGlzLl9yZWZDaGVjaygpLl9jaGVja05vdGlmeSgpO1xuICB9XG5cbiAgX2NoZWNrU2VsZWN0aW9uKGk6IFNURGF0YSwgdmFsdWU6IGJvb2xlYW4pOiB0aGlzIHtcbiAgICBpLmNoZWNrZWQgPSB2YWx1ZTtcbiAgICByZXR1cm4gdGhpcy5fcmVmQ2hlY2soKS5fY2hlY2tOb3RpZnkoKTtcbiAgfVxuXG4gIF9yb3dTZWxlY3Rpb24ocm93OiBTVENvbHVtblNlbGVjdGlvbik6IHRoaXMge1xuICAgIHJvdy5zZWxlY3QodGhpcy5fZGF0YSk7XG4gICAgcmV0dXJuIHRoaXMuX3JlZkNoZWNrKCkuX2NoZWNrTm90aWZ5KCk7XG4gIH1cblxuICBfY2hlY2tOb3RpZnkoKTogdGhpcyB7XG4gICAgY29uc3QgcmVzID0gdGhpcy5fZGF0YS5maWx0ZXIodyA9PiAhdy5kaXNhYmxlZCAmJiB3LmNoZWNrZWQgPT09IHRydWUpO1xuICAgIHRoaXMuY2hhbmdlRW1pdCgnY2hlY2tib3gnLCByZXMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gcmFkaW9cblxuICAvKiog5riF6Zmk5omA5pyJIGByYWRpb2AgKi9cbiAgY2xlYXJSYWRpbygpOiB0aGlzIHtcbiAgICB0aGlzLl9kYXRhLmZpbHRlcih3ID0+IHcuY2hlY2tlZCkuZm9yRWFjaChpdGVtID0+IChpdGVtLmNoZWNrZWQgPSBmYWxzZSkpO1xuICAgIHRoaXMuY2hhbmdlRW1pdCgncmFkaW8nLCBudWxsKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIF9yZWZSYWRpbyhjaGVja2VkOiBib29sZWFuLCBpdGVtOiBTVERhdGEpOiB0aGlzIHtcbiAgICAvLyBpZiAoaXRlbS5kaXNhYmxlZCA9PT0gdHJ1ZSkgcmV0dXJuO1xuICAgIHRoaXMuX2RhdGEuZmlsdGVyKHcgPT4gIXcuZGlzYWJsZWQpLmZvckVhY2goaSA9PiAoaS5jaGVja2VkID0gZmFsc2UpKTtcbiAgICBpdGVtLmNoZWNrZWQgPSBjaGVja2VkO1xuICAgIHRoaXMuY2hhbmdlRW1pdCgncmFkaW8nLCBpdGVtKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIGJ1dHRvbnNcblxuICBfYnRuQ2xpY2socmVjb3JkOiBTVERhdGEsIGJ0bjogU1RDb2x1bW5CdXR0b24sIGU/OiBFdmVudCk6IHZvaWQge1xuICAgIC8vIHNob3VsZCBiZSBzdG9wIHByb3BhZ2F0aW9uIHdoZW4gZXhwYW5kUm93QnlDbGljayBpcyB0cnVlXG4gICAgaWYgKGUgJiYgdGhpcy5leHBhbmRSb3dCeUNsaWNrID09PSB0cnVlKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgICBpZiAoYnRuLnR5cGUgPT09ICdtb2RhbCcgfHwgYnRuLnR5cGUgPT09ICdzdGF0aWMnKSB7XG4gICAgICBjb25zdCB7IG1vZGFsIH0gPSBidG47XG4gICAgICBjb25zdCBvYmogPSB7IFttb2RhbCEucGFyYW1zTmFtZSFdOiByZWNvcmQgfTtcbiAgICAgICh0aGlzLm1vZGFsSGVscGVyW2J0bi50eXBlID09PSAnbW9kYWwnID8gJ2NyZWF0ZScgOiAnY3JlYXRlU3RhdGljJ10gYXMgYW55KShcbiAgICAgICAgbW9kYWwhLmNvbXBvbmVudCxcbiAgICAgICAgeyAuLi5vYmosIC4uLihtb2RhbCEucGFyYW1zICYmIG1vZGFsIS5wYXJhbXMhKHJlY29yZCkpIH0sXG4gICAgICAgIGRlZXBNZXJnZUtleSh7fSwgdHJ1ZSwgdGhpcy5jb2cubW9kYWwsIG1vZGFsKSxcbiAgICAgIClcbiAgICAgICAgLnBpcGUoZmlsdGVyKHcgPT4gdHlwZW9mIHcgIT09ICd1bmRlZmluZWQnKSlcbiAgICAgICAgLnN1YnNjcmliZSgocmVzOiBOelNhZmVBbnkpID0+IHRoaXMuYnRuQ2FsbGJhY2socmVjb3JkLCBidG4sIHJlcykpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoYnRuLnR5cGUgPT09ICdkcmF3ZXInKSB7XG4gICAgICBjb25zdCB7IGRyYXdlciB9ID0gYnRuO1xuICAgICAgY29uc3Qgb2JqID0geyBbZHJhd2VyIS5wYXJhbXNOYW1lIV06IHJlY29yZCB9O1xuICAgICAgdGhpcy5kcmF3ZXJIZWxwZXJcbiAgICAgICAgLmNyZWF0ZShcbiAgICAgICAgICBkcmF3ZXIhLnRpdGxlISxcbiAgICAgICAgICBkcmF3ZXIhLmNvbXBvbmVudCxcbiAgICAgICAgICB7IC4uLm9iaiwgLi4uKGRyYXdlciEucGFyYW1zICYmIGRyYXdlciEucGFyYW1zIShyZWNvcmQpKSB9LFxuICAgICAgICAgIGRlZXBNZXJnZUtleSh7fSwgdHJ1ZSwgdGhpcy5jb2cuZHJhd2VyLCBkcmF3ZXIpLFxuICAgICAgICApXG4gICAgICAgIC5waXBlKGZpbHRlcih3ID0+IHR5cGVvZiB3ICE9PSAndW5kZWZpbmVkJykpXG4gICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHRoaXMuYnRuQ2FsbGJhY2socmVjb3JkLCBidG4sIHJlcykpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoYnRuLnR5cGUgPT09ICdsaW5rJykge1xuICAgICAgY29uc3QgY2xpY2tSZXMgPSB0aGlzLmJ0bkNhbGxiYWNrKHJlY29yZCwgYnRuKTtcbiAgICAgIGlmICh0eXBlb2YgY2xpY2tSZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoY2xpY2tSZXMsIHsgc3RhdGU6IHRoaXMucm91dGVyU3RhdGUgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuYnRuQ2FsbGJhY2socmVjb3JkLCBidG4pO1xuICB9XG5cbiAgcHJpdmF0ZSBidG5DYWxsYmFjayhyZWNvcmQ6IFNURGF0YSwgYnRuOiBTVENvbHVtbkJ1dHRvbiwgbW9kYWw/OiBhbnkpOiBhbnkge1xuICAgIGlmICghYnRuLmNsaWNrKSByZXR1cm47XG4gICAgaWYgKHR5cGVvZiBidG4uY2xpY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICBzd2l0Y2ggKGJ0bi5jbGljaykge1xuICAgICAgICBjYXNlICdsb2FkJzpcbiAgICAgICAgICB0aGlzLmxvYWQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncmVsb2FkJzpcbiAgICAgICAgICB0aGlzLnJlbG9hZCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYnRuLmNsaWNrKHJlY29yZCwgbW9kYWwsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIF9idG5UZXh0KHJlY29yZDogU1REYXRhLCBidG46IFNUQ29sdW1uQnV0dG9uKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdHlwZW9mIGJ0bi50ZXh0ID09PSAnZnVuY3Rpb24nID8gYnRuLnRleHQocmVjb3JkLCBidG4pIDogYnRuLnRleHQgfHwgJyc7XG4gIH1cblxuICBfdmFsaWRCdG5zKGJ0bnM6IFNUQ29sdW1uQnV0dG9uW10sIGl0ZW06IFNURGF0YSwgY29sOiBTVENvbHVtbik6IFNUQ29sdW1uQnV0dG9uW10ge1xuICAgIHJldHVybiBidG5zLmZpbHRlcihidG4gPT4ge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYnRuLmlpZiEoaXRlbSwgYnRuLCBjb2wpO1xuICAgICAgY29uc3QgaXNSZW5kZXJEaXNhYmxlZCA9IGJ0bi5paWZCZWhhdmlvciA9PT0gJ2Rpc2FibGVkJztcbiAgICAgIGJ0bi5fcmVzdWx0ID0gcmVzdWx0O1xuICAgICAgYnRuLl9kaXNhYmxlZCA9ICFyZXN1bHQgJiYgaXNSZW5kZXJEaXNhYmxlZDtcbiAgICAgIHJldHVybiByZXN1bHQgfHwgaXNSZW5kZXJEaXNhYmxlZDtcbiAgICB9KTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIGV4cG9ydFxuXG4gIC8qKlxuICAgKiDlr7zlh7rlvZPliY3pobXvvIznoa7kv53lt7Lnu4/ms6jlhowgYFhsc3hNb2R1bGVgXG4gICAqIEBwYXJhbSBuZXdEYXRhIOmHjeaWsOaMh+WumuaVsOaNru+8m+iLpeS4uiBgdHJ1ZWAg6KGo56S65L2/55SoIGBmaWx0ZXJlZERhdGFgIOaVsOaNrlxuICAgKiBAcGFyYW0gb3B0IOmineWkluWPguaVsFxuICAgKi9cbiAgZXhwb3J0KG5ld0RhdGE/OiBTVERhdGFbXSB8IHRydWUsIG9wdD86IFNURXhwb3J0T3B0aW9ucyk6IHZvaWQge1xuICAgIChuZXdEYXRhID09PSB0cnVlID8gZnJvbSh0aGlzLmZpbHRlcmVkRGF0YSkgOiBvZihuZXdEYXRhIHx8IHRoaXMuX2RhdGEpKS5zdWJzY3JpYmUoKHJlczogU1REYXRhW10pID0+XG4gICAgICB0aGlzLmV4cG9ydFNydi5leHBvcnQoe1xuICAgICAgICBjb2x1bWVuczogdGhpcy5fY29sdW1ucyxcbiAgICAgICAgLi4ub3B0LFxuICAgICAgICBkYXRhOiByZXMsXG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gcmVzaXphYmxlXG5cbiAgY29sUmVzaXplKHsgd2lkdGggfTogTnpSZXNpemVFdmVudCwgY29sdW1uOiBfU1RDb2x1bW4pOiB2b2lkIHtcbiAgICBjb2x1bW4ud2lkdGggPSBgJHt3aWR0aH1weGA7XG4gICAgdGhpcy5jaGFuZ2VFbWl0KCdyZXNpemUnLCBjb2x1bW4pO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gY29udGV4dG1lbnVcbiAgb25Db250ZXh0bWVudShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5jb250ZXh0bWVudSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IGNvbEVsID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCkuY2xvc2VzdCgnW2RhdGEtY29sLWluZGV4XScpIGFzIEhUTUxFbGVtZW50O1xuICAgIGlmICghY29sRWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY29sSW5kZXggPSBOdW1iZXIoY29sRWwuZGF0YXNldC5jb2xJbmRleCk7XG4gICAgY29uc3Qgcm93SW5kZXggPSBOdW1iZXIoKGNvbEVsLmNsb3Nlc3QoJ3RyJykgYXMgSFRNTEVsZW1lbnQpLmRhdGFzZXQuaW5kZXgpO1xuICAgIGNvbnN0IGlzVGl0bGUgPSBpc05hTihyb3dJbmRleCk7XG4gICAgY29uc3Qgb2JzJCA9IHRoaXMuY29udGV4dG1lbnUoe1xuICAgICAgZXZlbnQsXG4gICAgICB0eXBlOiBpc1RpdGxlID8gJ2hlYWQnIDogJ2JvZHknLFxuICAgICAgcm93SW5kZXg6IGlzVGl0bGUgPyBudWxsIDogcm93SW5kZXgsXG4gICAgICBjb2xJbmRleCxcbiAgICAgIGRhdGE6IGlzVGl0bGUgPyBudWxsIDogdGhpcy5saXN0W3Jvd0luZGV4XSxcbiAgICAgIGNvbHVtbjogdGhpcy5fY29sdW1uc1tjb2xJbmRleF0sXG4gICAgfSk7XG4gICAgKGlzT2JzZXJ2YWJsZShvYnMkKSA/IG9icyQgOiBvZihvYnMkKSlcbiAgICAgIC5waXBlKFxuICAgICAgICB1bnRpbERlc3Ryb3llZCh0aGlzKSxcbiAgICAgICAgZmlsdGVyKHJlcyA9PiByZXMubGVuZ3RoID4gMCksXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgIHRoaXMuY29udGV4dG1lbnVMaXN0ID0gcmVzLm1hcChpID0+IHtcbiAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoaS5jaGlsZHJlbikpIHtcbiAgICAgICAgICAgIGkuY2hpbGRyZW4gPSBbXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIHRoaXMuY21zLmNyZWF0ZShldmVudCwgdGhpcy5jb250ZXh0bWVudVRwbCk7XG4gICAgICB9KTtcbiAgfVxuICAvLyAjZW5kcmVnaW9uXG5cbiAgZ2V0IGNka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydCgpOiBDZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQge1xuICAgIHJldHVybiB0aGlzLm9yZ1RhYmxlLmNka1ZpcnR1YWxTY3JvbGxWaWV3cG9ydCE7XG4gIH1cblxuICByZXNldENvbHVtbnMob3B0aW9ucz86IFNUUmVzZXRDb2x1bW5zT3B0aW9uKTogUHJvbWlzZTx0aGlzPiB7XG4gICAgb3B0aW9ucyA9IHsgZW1pdFJlbG9hZDogdHJ1ZSwgcHJlQ2xlYXJEYXRhOiBmYWxzZSwgLi4ub3B0aW9ucyB9O1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5jb2x1bW5zICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5jb2x1bW5zID0gb3B0aW9ucy5jb2x1bW5zO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMucGkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnBpID0gb3B0aW9ucy5waTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLnBzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5wcyA9IG9wdGlvbnMucHM7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLmVtaXRSZWxvYWQpIHtcbiAgICAgIC8vIFNob3VsZCBjbGVhbiBkYXRhLCBCZWNhdXNlIG9mIGNoYW5naW5nIGNvbHVtbnMgbWF5IGNhdXNlIGluYWNjdXJhdGUgZGF0YVxuICAgICAgb3B0aW9ucy5wcmVDbGVhckRhdGEgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5wcmVDbGVhckRhdGEpIHtcbiAgICAgIHRoaXMuX2RhdGEgPSBbXTtcbiAgICB9XG4gICAgdGhpcy5yZWZyZXNoQ29sdW1ucygpO1xuICAgIGlmIChvcHRpb25zLmVtaXRSZWxvYWQpIHtcbiAgICAgIHJldHVybiB0aGlzLmxvYWRQYWdlRGF0YSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNkKCk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVmcmVzaENvbHVtbnMoKTogdGhpcyB7XG4gICAgY29uc3QgcmVzID0gdGhpcy5jb2x1bW5Tb3VyY2UucHJvY2Vzcyh0aGlzLmNvbHVtbnMgYXMgX1NUQ29sdW1uW10sIHsgd2lkdGhNb2RlOiB0aGlzLndpZHRoTW9kZSwgcmVzaXphYmxlOiB0aGlzLl9yZXNpemFibGUgfSk7XG4gICAgdGhpcy5fY29sdW1ucyA9IHJlcy5jb2x1bW5zO1xuICAgIHRoaXMuX2hlYWRlcnMgPSByZXMuaGVhZGVycztcbiAgICBpZiAodGhpcy5jdXN0b21XaWR0aENvbmZpZyA9PT0gZmFsc2UgJiYgcmVzLmhlYWRlcldpZHRocyAhPSBudWxsKSB7XG4gICAgICB0aGlzLl93aWR0aENvbmZpZyA9IHJlcy5oZWFkZXJXaWR0aHM7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJpdmF0ZSBvcHRpbWl6ZURhdGEoKTogdm9pZCB7XG4gICAgdGhpcy5fZGF0YSA9IHRoaXMuZGF0YVNvdXJjZS5vcHRpbWl6ZURhdGEoeyBjb2x1bW5zOiB0aGlzLl9jb2x1bW5zLCByZXN1bHQ6IHRoaXMuX2RhdGEsIHJvd0NsYXNzTmFtZTogdGhpcy5yb3dDbGFzc05hbWUgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHB1cmUgZGF0YSwgYHN0YCBpbnRlcm5hbGx5IG1haW50YWlucyBhIHNldCBvZiBkYXRhIGZvciBjYWNoaW5nLCB0aGlzIHBhcnQgb2YgZGF0YSBtYXkgYWZmZWN0IHRoZSBiYWNrZW5kXG4gICAqXG4gICAqIOi/lOWbnue6r+WHgOaVsOaNru+8jGBzdGAg5YaF6YOo5Lya57u05oqk5LiA57uE55So5LqO57yT5a2Y55qE5pWw5o2u77yM6L+Z6YOo5YiG5pWw5o2u5Y+v6IO95Lya5b2x5ZON5ZCO56uvXG4gICAqL1xuICBwdXJlSXRlbShpdGVtT3JJbmRleDogU1REYXRhIHwgbnVtYmVyKTogU1REYXRhIHwgbnVsbCB7XG4gICAgaWYgKHR5cGVvZiBpdGVtT3JJbmRleCA9PT0gJ251bWJlcicpIHtcbiAgICAgIGl0ZW1PckluZGV4ID0gdGhpcy5fZGF0YVtpdGVtT3JJbmRleF07XG4gICAgfVxuICAgIGlmICghaXRlbU9ySW5kZXgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBjb3B5SXRlbSA9IGRlZXBDb3B5KGl0ZW1PckluZGV4KTtcbiAgICBkZWxldGUgY29weUl0ZW0uX3ZhbHVlcztcbiAgICByZXR1cm4gY29weUl0ZW07XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jb2x1bW5Tb3VyY2UucmVzdG9yZUFsbFJlbmRlcih0aGlzLl9jb2x1bW5zKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW1AgaW4ga2V5b2YgdGhpc10/OiBTaW1wbGVDaGFuZ2UgfSAmIFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5jb2x1bW5zKSB7XG4gICAgICB0aGlzLnJlZnJlc2hDb2x1bW5zKCkub3B0aW1pemVEYXRhKCk7XG4gICAgfVxuICAgIGNvbnN0IGNoYW5nZURhdGEgPSBjaGFuZ2VzLmRhdGE7XG4gICAgaWYgKGNoYW5nZURhdGEgJiYgY2hhbmdlRGF0YS5jdXJyZW50VmFsdWUgJiYgISh0aGlzLnJlcS5sYXp5TG9hZCAmJiBjaGFuZ2VEYXRhLmZpcnN0Q2hhbmdlKSkge1xuICAgICAgdGhpcy5sb2FkUGFnZURhdGEoKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMubG9hZGluZykge1xuICAgICAgdGhpcy5fbG9hZGluZyA9IGNoYW5nZXMubG9hZGluZy5jdXJyZW50VmFsdWU7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95ID0gdHJ1ZTtcbiAgfVxufVxuIl19