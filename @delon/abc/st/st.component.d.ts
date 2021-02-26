import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnDestroy, SimpleChange, SimpleChanges, TemplateRef, TrackByFunction } from '@angular/core';
import { Router } from '@angular/router';
import { AlainI18NService, DelonLocaleService, DrawerHelper, LocaleData, ModalHelper } from '@delon/theme';
import { AlainConfigService } from '@delon/util/config';
import { BooleanInput, NumberInput } from '@delon/util/decorator';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzContextMenuService, NzDropdownMenuComponent } from 'ng-zorro-antd/dropdown';
import { NzResizeEvent } from 'ng-zorro-antd/resizable';
import { NzTableComponent, NzTableData } from 'ng-zorro-antd/table';
import { Observable } from 'rxjs';
import { STColumnSource } from './st-column-source';
import { STDataSource } from './st-data-source';
import { STExport } from './st-export';
import { STChange, STColumn, STColumnButton, STColumnFilterMenu, STColumnSelection, STContextmenuFn, STContextmenuItem, STData, STError, STExportOptions, STLoadOptions, STPage, STReq, STRes, STResetColumnsOption, STResizable, STRowClassName, STSingleSort, STStatisticalResults, STWidthMode } from './st.interfaces';
import { _STColumn, _STHeader } from './st.types';
export declare class STComponent implements AfterViewInit, OnChanges, OnDestroy {
    private cdr;
    private router;
    private el;
    private exportSrv;
    private modalHelper;
    private drawerHelper;
    private doc;
    private columnSource;
    private dataSource;
    private delonI18n;
    private cms;
    static ngAcceptInputType_ps: NumberInput;
    static ngAcceptInputType_pi: NumberInput;
    static ngAcceptInputType_total: NumberInput;
    static ngAcceptInputType_loadingDelay: NumberInput;
    static ngAcceptInputType_bordered: BooleanInput;
    static ngAcceptInputType_expandRowByClick: BooleanInput;
    static ngAcceptInputType_expandAccordion: BooleanInput;
    static ngAcceptInputType_rowClickTime: NumberInput;
    static ngAcceptInputType_responsive: BooleanInput;
    static ngAcceptInputType_responsiveHideHeaderFooter: BooleanInput;
    static ngAcceptInputType_virtualScroll: BooleanInput;
    static ngAcceptInputType_virtualItemSize: NumberInput;
    static ngAcceptInputType_virtualMaxBufferPx: NumberInput;
    static ngAcceptInputType_virtualMinBufferPx: NumberInput;
    private unsubscribe$;
    private data$;
    private totalTpl;
    private cog;
    private rowClickCount;
    private _req;
    private _res;
    private _page;
    private _widthMode;
    private customWidthConfig;
    _widthConfig: string[];
    locale: LocaleData;
    _loading: boolean;
    _data: STData[];
    _statistical: STStatisticalResults;
    _isPagination: boolean;
    _allChecked: boolean;
    _allCheckedDisabled: boolean;
    _indeterminate: boolean;
    _headers: _STHeader[][];
    _columns: _STColumn[];
    contextmenuList: STContextmenuItem[];
    readonly orgTable: NzTableComponent;
    readonly contextmenuTpl: NzDropdownMenuComponent;
    get req(): STReq;
    set req(value: STReq);
    /** 返回体配置 */
    get res(): STRes;
    set res(value: STRes);
    get page(): STPage;
    set page(value: STPage);
    data: string | STData[] | Observable<STData[]>;
    columns: STColumn[];
    contextmenu?: STContextmenuFn;
    ps: number;
    pi: number;
    total: number;
    loading: boolean | null;
    loadingDelay: number;
    loadingIndicator: TemplateRef<void>;
    bordered: boolean;
    size: 'small' | 'middle' | 'default';
    scroll: {
        y?: string;
        x?: string;
    };
    singleSort: STSingleSort;
    private _multiSort?;
    get multiSort(): NzSafeAny;
    set multiSort(value: NzSafeAny);
    rowClassName: STRowClassName;
    set widthMode(value: STWidthMode);
    get widthMode(): STWidthMode;
    set widthConfig(val: string[]);
    private _resizable;
    set resizable(val: STResizable | boolean | string);
    header: string | TemplateRef<void>;
    showHeader: boolean;
    footer: string | TemplateRef<void>;
    bodyHeader: TemplateRef<STStatisticalResults>;
    body: TemplateRef<STStatisticalResults>;
    expandRowByClick: boolean;
    expandAccordion: boolean;
    expand: TemplateRef<{
        $implicit: {};
        column: STColumn;
    }>;
    noResult: string | TemplateRef<void>;
    rowClickTime: number;
    responsive: boolean;
    responsiveHideHeaderFooter: boolean;
    readonly error: EventEmitter<STError>;
    readonly change: EventEmitter<STChange<any>>;
    virtualScroll: boolean;
    virtualItemSize: number;
    virtualMaxBufferPx: number;
    virtualMinBufferPx: number;
    virtualForTrackBy: TrackByFunction<NzTableData>;
    /**
     * Get the number of the current page
     */
    get count(): number;
    /**
     * Get the data of the current page
     */
    get list(): STData[];
    private get routerState();
    constructor(i18nSrv: AlainI18NService, cdr: ChangeDetectorRef, router: Router, el: ElementRef, exportSrv: STExport, modalHelper: ModalHelper, drawerHelper: DrawerHelper, doc: any, columnSource: STColumnSource, dataSource: STDataSource, delonI18n: DelonLocaleService, configSrv: AlainConfigService, cms: NzContextMenuService);
    private setCog;
    cd(): this;
    renderTotal(total: string, range: string[]): string;
    private changeEmit;
    /**
     * 获取过滤后所有数据
     * - 本地数据：包含排序、过滤后不分页数据
     * - 远程数据：不传递 `pi`、`ps` 两个参数
     */
    get filteredData(): Promise<STData[]>;
    private updateTotalTpl;
    private setLoading;
    private loadData;
    private loadPageData;
    /** 清空所有数据 */
    clear(cleanStatus?: boolean): this;
    /** 清空所有状态 */
    clearStatus(): this;
    /**
     * 根据页码重新加载数据
     *
     * @param pi 指定当前页码，默认：`1`
     * @param extraParams 重新指定 `extraParams` 值
     * @param options 选项
     */
    load(pi?: number, extraParams?: {}, options?: STLoadOptions): this;
    /**
     * 重新刷新当前页
     * @param extraParams 重新指定 `extraParams` 值
     */
    reload(extraParams?: {}, options?: STLoadOptions): this;
    /**
     * 重置且重新设置 `pi` 为 `1`，包含以下值：
     * - `check` 数据
     * - `radio` 数据
     * - `sort` 数据
     * - `fileter` 数据
     *
     * @param extraParams 重新指定 `extraParams` 值
     */
    reset(extraParams?: {}, options?: STLoadOptions): this;
    private _toTop;
    _change(type: 'pi' | 'ps', options?: STLoadOptions): void;
    _click(e: Event, item: STData, col: STColumn): boolean;
    private closeOtherExpand;
    _rowClick(e: Event, item: STData, index: number): void;
    _expandChange(item: STData, expand: boolean): void;
    /**
     * Remove a row in the table, like this:
     *
     * ```
     * this.st.removeRow(0)
     * this.st.removeRow(stDataItem)
     * ```
     */
    removeRow(data: STData | STData[] | number): this;
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
    setRow(index: number | STData, item: STData, options?: {
        refreshSchema?: boolean;
        emitReload?: boolean;
    }): this;
    sort(col: _STColumn, idx: number, value: any): void;
    clearSort(): this;
    private handleFilter;
    _filterConfirm(col: _STColumn): void;
    _filterRadio(col: _STColumn, item: STColumnFilterMenu, checked: boolean): void;
    _filterClear(col: _STColumn): void;
    clearFilter(): this;
    _filterClick($event: MouseEvent): void;
    /** 清除所有 `checkbox` */
    clearCheck(): this;
    private _refCheck;
    _checkAll(checked?: boolean): this;
    _checkSelection(i: STData, value: boolean): this;
    _rowSelection(row: STColumnSelection): this;
    _checkNotify(): this;
    /** 清除所有 `radio` */
    clearRadio(): this;
    _refRadio(checked: boolean, item: STData): this;
    _btnClick(record: STData, btn: STColumnButton, e?: Event): void;
    private btnCallback;
    _btnText(record: STData, btn: STColumnButton): string;
    _validBtns(btns: STColumnButton[], item: STData, col: STColumn): STColumnButton[];
    /**
     * 导出当前页，确保已经注册 `XlsxModule`
     * @param newData 重新指定数据；若为 `true` 表示使用 `filteredData` 数据
     * @param opt 额外参数
     */
    export(newData?: STData[] | true, opt?: STExportOptions): void;
    colResize({ width }: NzResizeEvent, column: _STColumn): void;
    onContextmenu(event: MouseEvent): void;
    get cdkVirtualScrollViewport(): CdkVirtualScrollViewport;
    resetColumns(options?: STResetColumnsOption): Promise<this>;
    private refreshColumns;
    private optimizeData;
    /**
     * Return pure data, `st` internally maintains a set of data for caching, this part of data may affect the backend
     *
     * 返回纯净数据，`st` 内部会维护一组用于缓存的数据，这部分数据可能会影响后端
     */
    pureItem(itemOrIndex: STData | number): STData | null;
    ngAfterViewInit(): void;
    ngOnChanges(changes: {
        [P in keyof this]?: SimpleChange;
    } & SimpleChanges): void;
    ngOnDestroy(): void;
}
