import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnDestroy, SimpleChange, SimpleChanges, TemplateRef, TrackByFunction } from '@angular/core';
import { Router } from '@angular/router';
import { AlainI18NService, DelonLocaleService, DrawerHelper, LocaleData, ModalHelper } from '@delon/theme';
import { NzTableComponent, NzTableData } from 'ng-zorro-antd/table';
import { Observable } from 'rxjs';
import { STColumnSource } from './st-column-source';
import { STDataSource } from './st-data-source';
import { STExport } from './st-export';
import { STConfig } from './st.config';
import { STChange, STColumn, STColumnButton, STColumnFilterMenu, STColumnSelection, STData, STError, STExportOptions, STLoadOptions, STPage, STReq, STRes, STResetColumnsOption, STRowClassName, STSingleSort, STStatisticalResults, STWidthMode } from './st.interfaces';
export declare class STComponent implements AfterViewInit, OnChanges, OnDestroy {
    private cdr;
    private cog;
    private router;
    private el;
    private exportSrv;
    private modalHelper;
    private drawerHelper;
    private doc;
    private columnSource;
    private dataSource;
    private delonI18n;
    private unsubscribe$;
    private data$;
    private totalTpl;
    private clonePage;
    private copyCog;
    private rowClickCount;
    locale: LocaleData;
    _data: STData[];
    _statistical: STStatisticalResults;
    _isPagination: boolean;
    _allChecked: boolean;
    _allCheckedDisabled: boolean;
    _indeterminate: boolean;
    _columns: STColumn[];
    readonly orgTable: NzTableComponent;
    /** 请求体配置 */
    get req(): STReq;
    set req(value: STReq);
    /** 返回体配置 */
    get res(): STRes;
    set res(value: STRes);
    /** 分页器配置 */
    get page(): STPage;
    set page(value: STPage);
    /** 是否多排序，当 `sort` 多个相同值时自动合并，建议后端支持时使用 */
    get multiSort(): any;
    set multiSort(value: any);
    set widthMode(value: STWidthMode);
    get widthMode(): STWidthMode;
    private get routerState();
    data: string | STData[] | Observable<STData[]>;
    private _req;
    private _res;
    columns: STColumn[];
    ps: number;
    pi: number;
    total: number;
    private _page;
    _loading: boolean;
    /** 是否显示Loading */
    loading: boolean | null;
    /** 延迟显示加载效果的时间（防止闪烁） */
    loadingDelay: number;
    loadingIndicator: TemplateRef<void>;
    /** 是否显示边框 */
    bordered: boolean;
    /** table大小 */
    size: 'small' | 'middle' | 'default';
    /** 纵向支持滚动，也可用于指定滚动区域的高度：`{ y: '300px', x: '300px' }` */
    scroll: {
        y?: string;
        x?: string;
    };
    /**
     * 单排序规则
     * - 若不指定，则返回：`columnName=ascend|descend`
     * - 若指定，则返回：`sort=columnName.(ascend|descend)`
     */
    singleSort: STSingleSort | null;
    private _multiSort;
    rowClassName: STRowClassName;
    private _widthMode;
    /** `header` 标题 */
    header: string | TemplateRef<void>;
    /** `footer` 底部 */
    footer: string | TemplateRef<void>;
    /** 额外 `body` 顶部内容 */
    bodyHeader: TemplateRef<STStatisticalResults>;
    /** 额外 `body` 内容 */
    body: TemplateRef<STStatisticalResults>;
    expandRowByClick: boolean;
    expandAccordion: boolean;
    /** `expand` 可展开，当数据源中包括 `expand` 表示展开状态 */
    expand: TemplateRef<{
        $implicit: {};
        column: STColumn;
    }>;
    noResult: string | TemplateRef<void>;
    widthConfig: string[];
    /** 行单击多少时长之类为双击（单位：毫秒），默认：`200` */
    rowClickTime: number;
    responsive: boolean;
    responsiveHideHeaderFooter: boolean;
    /** 请求异常时回调 */
    readonly error: EventEmitter<STError>;
    /**
     * 变化时回调，包括：`pi`、`ps`、`checkbox`、`radio`、`sort`、`filter`、`click`、`dblClick` 变动
     */
    readonly change: EventEmitter<STChange>;
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
    constructor(i18nSrv: AlainI18NService, cdr: ChangeDetectorRef, cog: STConfig, router: Router, el: ElementRef, exportSrv: STExport, modalHelper: ModalHelper, drawerHelper: DrawerHelper, doc: any, columnSource: STColumnSource, dataSource: STDataSource, delonI18n: DelonLocaleService);
    cd(): this;
    renderTotal(total: string, range: string[]): string;
    isTruncate(column: STColumn): boolean;
    columnClass(column: STColumn): string | null;
    private changeEmit;
    /**
     * 获取过滤后所有数据
     * - 本地数据：包含排序、过滤后不分页数据
     * - 远程数据：不传递 `pi`、`ps` 两个参数
     */
    get filteredData(): Promise<STData[]>;
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
    _expandChange(item: STData): void;
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
     * ```
     * this.st.setRow(0, { price: 100 })
     * this.st.setRow(0, { price: 100, name: 'asdf' })
     * ```
     */
    setRow(index: number, item: STData): this;
    sort(col: STColumn, idx: number, value: any): void;
    clearSort(): this;
    private handleFilter;
    _filterConfirm(col: STColumn): void;
    _filterRadio(col: STColumn, item: STColumnFilterMenu, checked: boolean): void;
    _filterClear(col: STColumn): void;
    clearFilter(): this;
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
    get cdkVirtualScrollViewport(): import("@angular/cdk/scrolling").CdkVirtualScrollViewport;
    resetColumns(options?: STResetColumnsOption): Promise<this>;
    private refreshColumns;
    ngAfterViewInit(): void;
    ngOnChanges(changes: {
        [P in keyof this]?: SimpleChange;
    } & SimpleChanges): void;
    ngOnDestroy(): void;
}
