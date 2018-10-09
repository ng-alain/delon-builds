import { OnDestroy, OnChanges, SimpleChanges, EventEmitter, Renderer2, ElementRef, TemplateRef, SimpleChange, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ModalHelper, AlainI18NService, DrawerHelper, DelonLocaleService } from '@delon/theme';
import { STColumn, STChange, STColumnSelection, STColumnFilterMenu, STData, STColumnButton, STExportOptions, STReq, STError, STChangeRowClick, STRes, STPage, STLoadOptions } from './table.interfaces';
import { STConfig } from './table.config';
import { STExport } from './table-export';
import { STColumnSource } from './table-column-source';
import { STDataSource } from './table-data-source';
export declare class STComponent implements AfterViewInit, OnChanges, OnDestroy {
    private cd;
    private cog;
    private router;
    private el;
    private renderer;
    private exportSrv;
    private modalHelper;
    private drawerHelper;
    private doc;
    private columnSource;
    private dataSource;
    private delonI18n;
    private i18n$;
    private delonI18n$;
    private totalTpl;
    private locale;
    private clonePage;
    _data: STData[];
    _isPagination: boolean;
    _allChecked: boolean;
    _indeterminate: boolean;
    _columns: STColumn[];
    /** 数据源 */
    data: string | STData[] | Observable<STData[]>;
    /** 请求体配置 */
    req: STReq;
    private _req;
    /** 返回体配置 */
    res: STRes;
    private _res;
    /** 列描述  */
    columns: STColumn[];
    /** 每页数量，当设置为 `0` 表示不分页，默认：`10` */
    ps: number;
    /** 当前页码 */
    pi: number;
    /** 数据总量 */
    total: number;
    /** 分页器配置 */
    page: STPage;
    private _page;
    /** 是否显示Loading */
    loading: boolean;
    /** 延迟显示加载效果的时间（防止闪烁） */
    loadingDelay: number;
    /** 是否显示边框 */
    bordered: boolean;
    /** table大小 */
    size: 'small' | 'middle' | 'default';
    /** 纵向支持滚动，也可用于指定滚动区域的高度：`{ y: '300px', x: '300px' }` */
    scroll: {
        y?: string;
        x?: string;
    };
    /** 是否多排序，当 `sort` 多个相同值时自动合并，建议后端支持时使用 */
    multiSort: any;
    private _multiSort;
    /** `header` 标题 */
    header: string | TemplateRef<void>;
    /** `footer` 底部 */
    footer: string | TemplateRef<void>;
    /** 额外 `body` 内容 */
    body: TemplateRef<void>;
    /** `expand` 可展开，当数据源中包括 `expand` 表示展开状态 */
    expand: TemplateRef<{
        $implicit: any;
        column: STColumn;
    }>;
    noResult: string | TemplateRef<void>;
    widthConfig: string[];
    /** 请求异常时回调 */
    readonly error: EventEmitter<STError>;
    /**
     * 变化时回调，包括：`pi`、`ps`、`checkbox`、`radio`、`sort`、`filter`、`click`、`dblClick` 变动
     */
    readonly change: EventEmitter<STChange>;
    /** 行单击多少时长之类为双击（单位：毫秒），默认：`200` */
    rowClickTime: number;
    responsiveHideHeaderFooter: boolean;
    /**
     * checkbox变化时回调，参数为当前所选清单
     * @deprecated 使用 `change` 替代
     * @deprecated as of v3
     */
    readonly checkboxChange: EventEmitter<STData[]>;
    /**
     * radio变化时回调，参数为当前所选
     * @deprecated 使用 `change` 替代
     * @deprecated as of v3
     */
    readonly radioChange: EventEmitter<STData>;
    /**
     * 排序回调
     * @deprecated 使用 `change` 替代
     * @deprecated as of v3
     */
    readonly sortChange: EventEmitter<any>;
    /**
     * 过滤变化时回调
     * @deprecated 使用 `change` 替代
     * @deprecated as of v3
     */
    readonly filterChange: EventEmitter<STColumn>;
    /**
     * 行单击回调
     * @deprecated 使用 `change` 替代
     * @deprecated as of v3
     */
    readonly rowClick: EventEmitter<STChangeRowClick>;
    /**
     * 行双击回调
     * @deprecated 使用 `change` 替代
     * @deprecated as of v3
     */
    readonly rowDblClick: EventEmitter<STChangeRowClick>;
    constructor(cd: ChangeDetectorRef, cog: STConfig, router: Router, el: ElementRef, renderer: Renderer2, exportSrv: STExport, i18nSrv: AlainI18NService, modalHelper: ModalHelper, drawerHelper: DrawerHelper, doc: any, columnSource: STColumnSource, dataSource: STDataSource, delonI18n: DelonLocaleService);
    renderTotal(total: string, range: string[]): string;
    private changeEmit;
    private _load;
    /**
     * 根据页码重新加载数据
     *
     * @param pi 指定当前页码，默认：`1`
     * @param extraParams 重新指定 `extraParams` 值
     * @param options 选项
     */
    load(pi?: number, extraParams?: any, options?: STLoadOptions): void;
    /**
     * 重新刷新当前页
     * @param extraParams 重新指定 `extraParams` 值
     */
    reload(extraParams?: any, options?: STLoadOptions): void;
    /**
     * 重置且重新设置 `pi` 为 `1`，包含以下值：
     * - `check` 数据
     * - `radio` 数据
     * - `sort` 数据
     * - `fileter` 数据
     *
     * @param extraParams 重新指定 `extraParams` 值
     */
    reset(extraParams?: any, options?: STLoadOptions): void;
    private _toTop;
    _change(type: 'pi' | 'ps'): void;
    _click(e: Event, item: any, col: STColumn): boolean;
    private rowClickCount;
    _rowClick(e: Event, item: any, index: number): void;
    sort(col: STColumn, idx: number, value: any): void;
    clearSort(): void;
    private handleFilter;
    _filterConfirm(col: STColumn): void;
    _filterClear(col: STColumn): void;
    _filterRadio(col: STColumn, item: STColumnFilterMenu, checked: boolean): void;
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
    _btnClick(e: Event, record: any, btn: STColumnButton): void;
    private btnCallback;
    _btnText(record: any, btn: STColumnButton): string;
    /**
     * 导出当前页，确保已经注册 `XlsxModule`
     * @param newData 重新指定数据，例如希望导出所有数据非常有用
     * @param opt 额外参数
     */
    export(newData?: any[], opt?: STExportOptions): void;
    private updateColumns;
    private setClass;
    ngAfterViewInit(): void;
    ngOnChanges(changes: {
        [P in keyof this]?: SimpleChange;
    } & SimpleChanges): void;
    ngOnDestroy(): void;
}
