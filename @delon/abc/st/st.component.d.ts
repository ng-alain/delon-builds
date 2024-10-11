import type { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { AfterViewInit, EventEmitter, OnChanges, SimpleChange, SimpleChanges, TemplateRef, TrackByFunction } from '@angular/core';
import { Observable } from 'rxjs';
import { LocaleData } from '@delon/theme';
import { AlainConfigService, AlainSTConfig } from '@delon/util/config';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzDropdownMenuComponent } from 'ng-zorro-antd/dropdown';
import { NzResizeEvent } from 'ng-zorro-antd/resizable';
import { NzTableComponent } from 'ng-zorro-antd/table';
import type { STChange, STClickRowClassName, STColumn, STColumnButton, STColumnSelection, STContextmenuFn, STContextmenuItem, STCustomRequestOptions, STData, STError, STExportOptions, STLoadOptions, STPage, STReq, STRes, STResetColumnsOption, STResizable, STRowClassName, STSingleSort, STStatisticalResults, STWidthMode } from './st.interfaces';
import type { _STColumn, _STHeader, _STTdNotify } from './st.types';
import * as i0 from "@angular/core";
export declare class STComponent implements AfterViewInit, OnChanges {
    private readonly i18nSrv;
    private readonly el;
    private readonly cdr;
    private readonly doc;
    private readonly exportSrv;
    private readonly columnSource;
    private readonly dataSource;
    private readonly delonI18n;
    private readonly cms;
    private readonly destroy$;
    private totalTpl;
    private inied;
    cog: AlainSTConfig;
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
    readonly orgTable: NzTableComponent<STData>;
    readonly contextmenuTpl: NzDropdownMenuComponent;
    get req(): STReq;
    set req(value: STReq);
    /** 返回体配置 */
    get res(): STRes;
    set res(value: STRes);
    get page(): STPage;
    set page(value: STPage);
    data?: string | STData[] | Observable<STData[]>;
    columns?: STColumn[] | null;
    contextmenu?: STContextmenuFn | null;
    ps: number;
    pi: number;
    total: number;
    loading: boolean | null;
    loadingDelay: number;
    loadingIndicator: TemplateRef<void> | null;
    bordered: boolean;
    size: 'small' | 'middle' | 'default';
    scroll: {
        x?: string | null;
        y?: string | null;
    };
    singleSort?: STSingleSort | null;
    private _multiSort?;
    get multiSort(): NzSafeAny;
    set multiSort(value: NzSafeAny);
    rowClassName?: STRowClassName | null;
    clickRowClassName?: STClickRowClassName | null;
    set widthMode(value: STWidthMode);
    get widthMode(): STWidthMode;
    set widthConfig(val: string[]);
    private _resizable?;
    set resizable(val: STResizable | boolean | string);
    header?: string | TemplateRef<void> | null;
    showHeader: boolean;
    footer?: string | TemplateRef<void> | null;
    bodyHeader?: TemplateRef<{
        $implicit: STStatisticalResults;
    }> | null;
    body?: TemplateRef<{
        $implicit: STStatisticalResults;
    }> | null;
    expandRowByClick: boolean;
    expandAccordion: boolean;
    expand: TemplateRef<{
        $implicit: STData;
        index: number;
    }> | null;
    expandIcon: TemplateRef<{
        $implicit: STData;
        index: number;
    }> | null;
    noResult?: string | TemplateRef<void> | null;
    responsive: boolean;
    responsiveHideHeaderFooter?: boolean;
    readonly error: EventEmitter<STError>;
    readonly change: EventEmitter<STChange<any>>;
    virtualScroll: boolean;
    virtualItemSize: number;
    virtualMaxBufferPx: number;
    virtualMinBufferPx: number;
    customRequest?: (options: STCustomRequestOptions) => Observable<NzSafeAny>;
    virtualForTrackBy: TrackByFunction<STData>;
    trackBy: TrackByFunction<STData>;
    /**
     * Get the number of the current page
     */
    get count(): number;
    /**
     * Get the data of the current page
     */
    get list(): STData[];
    get noColumns(): boolean;
    constructor(configSrv: AlainConfigService);
    private setCog;
    cd(): this;
    private refreshData;
    renderTotal(total: string, range: string[]): string;
    private changeEmit;
    /**
     * 获取过滤后所有数据
     * - 本地数据：包含排序、过滤后不分页数据
     * - 远程数据：不传递 `pi`、`ps` 两个参数
     */
    get filteredData(): Observable<STData[]>;
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
    load(pi?: number, extraParams?: NzSafeAny, options?: STLoadOptions): this;
    /**
     * 重新刷新当前页
     *
     * @param extraParams 重新指定 `extraParams` 值
     */
    reload(extraParams?: NzSafeAny, options?: STLoadOptions): this;
    /**
     * 重置且重新设置 `pi` 为 `1`，包含以下值：
     * - `check` 数据
     * - `radio` 数据
     * - `sort` 数据
     * - `fileter` 数据
     *
     * @param extraParams 重新指定 `extraParams` 值
     */
    reset(extraParams?: NzSafeAny, options?: STLoadOptions): this;
    private _toTop;
    _change(type: 'pi' | 'ps', options?: STLoadOptions): void;
    private closeOtherExpand;
    _rowClick(e: Event, item: STData, index: number, dbl: boolean): void;
    private _clickRowClassName;
    _expandChange(item: STData, expand: boolean): void;
    _stopPropagation(ev: Event): void;
    private _refColAndData;
    /**
     * Add a rows in the table, like this:
     *
     * ```
     * this.st.addRow(stDataItem)
     * ```
     *
     * **TIPS:** Don't change the `total` value, it is recommended to use the `reload` method if needed
     */
    addRow(data: STData | STData[], options?: {
        index?: number;
    }): this;
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
    sort(col: _STColumn, value: NzSafeAny): void;
    clearSort(): this;
    _handleFilter(col: _STColumn, confirm: boolean): void;
    handleFilterNotify(value?: unknown): void;
    clearFilter(): this;
    /** 清除所有 `checkbox` */
    clearCheck(): this;
    private _refCheck;
    checkAll(checked?: boolean): this;
    _rowSelection(row: STColumnSelection): this;
    _checkNotify(): this;
    /** 清除所有 `radio` */
    clearRadio(): this;
    _handleTd(ev: _STTdNotify): void;
    /**
     * 导出当前页，确保已经注册 `XlsxModule`
     *
     * @param newData 重新指定数据；若为 `true` 表示使用 `filteredData` 数据
     * @param opt 额外参数
     */
    export(newData?: STData[] | true, opt?: STExportOptions): void;
    colResize({ width }: NzResizeEvent, column: _STColumn): void;
    onContextmenu(event: MouseEvent): void;
    get cdkVirtualScrollViewport(): CdkVirtualScrollViewport | undefined;
    private _resetColumns;
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
    static ɵfac: i0.ɵɵFactoryDeclaration<STComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<STComponent, "st", ["st"], { "req": { "alias": "req"; "required": false; }; "res": { "alias": "res"; "required": false; }; "page": { "alias": "page"; "required": false; }; "data": { "alias": "data"; "required": false; }; "columns": { "alias": "columns"; "required": false; }; "contextmenu": { "alias": "contextmenu"; "required": false; }; "ps": { "alias": "ps"; "required": false; }; "pi": { "alias": "pi"; "required": false; }; "total": { "alias": "total"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; "loadingDelay": { "alias": "loadingDelay"; "required": false; }; "loadingIndicator": { "alias": "loadingIndicator"; "required": false; }; "bordered": { "alias": "bordered"; "required": false; }; "size": { "alias": "size"; "required": false; }; "scroll": { "alias": "scroll"; "required": false; }; "singleSort": { "alias": "singleSort"; "required": false; }; "multiSort": { "alias": "multiSort"; "required": false; }; "rowClassName": { "alias": "rowClassName"; "required": false; }; "clickRowClassName": { "alias": "clickRowClassName"; "required": false; }; "widthMode": { "alias": "widthMode"; "required": false; }; "widthConfig": { "alias": "widthConfig"; "required": false; }; "resizable": { "alias": "resizable"; "required": false; }; "header": { "alias": "header"; "required": false; }; "showHeader": { "alias": "showHeader"; "required": false; }; "footer": { "alias": "footer"; "required": false; }; "bodyHeader": { "alias": "bodyHeader"; "required": false; }; "body": { "alias": "body"; "required": false; }; "expandRowByClick": { "alias": "expandRowByClick"; "required": false; }; "expandAccordion": { "alias": "expandAccordion"; "required": false; }; "expand": { "alias": "expand"; "required": false; }; "expandIcon": { "alias": "expandIcon"; "required": false; }; "noResult": { "alias": "noResult"; "required": false; }; "responsive": { "alias": "responsive"; "required": false; }; "responsiveHideHeaderFooter": { "alias": "responsiveHideHeaderFooter"; "required": false; }; "virtualScroll": { "alias": "virtualScroll"; "required": false; }; "virtualItemSize": { "alias": "virtualItemSize"; "required": false; }; "virtualMaxBufferPx": { "alias": "virtualMaxBufferPx"; "required": false; }; "virtualMinBufferPx": { "alias": "virtualMinBufferPx"; "required": false; }; "customRequest": { "alias": "customRequest"; "required": false; }; "virtualForTrackBy": { "alias": "virtualForTrackBy"; "required": false; }; "trackBy": { "alias": "trackBy"; "required": false; }; }, { "error": "error"; "change": "change"; }, never, never, false, never>;
    static ngAcceptInputType_ps: unknown;
    static ngAcceptInputType_pi: unknown;
    static ngAcceptInputType_total: unknown;
    static ngAcceptInputType_loadingDelay: unknown;
    static ngAcceptInputType_bordered: unknown;
    static ngAcceptInputType_showHeader: unknown;
    static ngAcceptInputType_expandRowByClick: unknown;
    static ngAcceptInputType_expandAccordion: unknown;
    static ngAcceptInputType_responsive: unknown;
    static ngAcceptInputType_responsiveHideHeaderFooter: unknown;
    static ngAcceptInputType_virtualScroll: unknown;
    static ngAcceptInputType_virtualItemSize: unknown;
    static ngAcceptInputType_virtualMaxBufferPx: unknown;
    static ngAcceptInputType_virtualMinBufferPx: unknown;
}
export declare class STTdComponent {
    private readonly stComp;
    private readonly router;
    private readonly modalHelper;
    private readonly drawerHelper;
    c: _STColumn;
    cIdx: number;
    data: STData[];
    i: STData;
    index: number;
    readonly n: EventEmitter<_STTdNotify>;
    private get routerState();
    private report;
    _checkbox(value: boolean): void;
    _radio(): void;
    _link(e: Event): boolean;
    _stopPropagation(ev: Event): void;
    _btn(btn: STColumnButton, ev?: Event): void;
    private btnCallback;
    static ɵfac: i0.ɵɵFactoryDeclaration<STTdComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<STTdComponent, "st-td", never, { "c": { "alias": "c"; "required": false; }; "cIdx": { "alias": "cIdx"; "required": false; }; "data": { "alias": "data"; "required": false; }; "i": { "alias": "i"; "required": false; }; "index": { "alias": "index"; "required": false; }; }, { "n": "n"; }, never, never, false, never>;
}
