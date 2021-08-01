import { DecimalPipe } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { DatePipe, YNPipe, _HttpClient } from '@delon/theme';
import { CurrencyService } from '@delon/util/format';
import { STCustomRequestOptions, STData, STMultiSort, STMultiSortResultType, STPage, STReq, STRes, STRowClassName, STSingleSort, STStatisticalResults } from './st.interfaces';
import { _STColumn } from './st.types';
export interface STDataSourceOptions {
    pi: number;
    ps: number;
    paginator: boolean;
    data: string | STData[] | Observable<STData[]>;
    total: number;
    req: STReq;
    res: STRes;
    page: STPage;
    columns: _STColumn[];
    singleSort?: STSingleSort;
    multiSort?: STMultiSort;
    rowClassName?: STRowClassName;
    customRequest?: (options: STCustomRequestOptions) => Observable<NzSafeAny>;
}
export interface STDataSourceResult {
    /** 是否需要显示分页器 */
    pageShow: boolean;
    /** 新 `pi`，若返回 `undefined` 表示用户受控 */
    pi: number;
    /** 新 `ps`，若返回 `undefined` 表示用户受控 */
    ps: number;
    /** 新 `total`，若返回 `undefined` 表示用户受控 */
    total: number;
    /** 数据 */
    list: STData[];
    /** 统计数据 */
    statistical: STStatisticalResults;
}
export declare class STDataSource {
    private http;
    private datePipe;
    private ynPipe;
    private numberPipe;
    private currencySrv;
    private dom;
    private sortTick;
    constructor(http: _HttpClient, datePipe: DatePipe, ynPipe: YNPipe, numberPipe: DecimalPipe, currencySrv: CurrencyService, dom: DomSanitizer);
    process(options: STDataSourceOptions): Observable<STDataSourceResult>;
    private get;
    private getByRemote;
    optimizeData(options: {
        columns: _STColumn[];
        result: STData[];
        rowClassName?: STRowClassName;
    }): STData[];
    getNoIndex(item: STData, col: _STColumn, idx: number): number;
    private genButtons;
    private getValidSort;
    private getSorterFn;
    get nextSortTick(): number;
    getReqSortMap(singleSort: STSingleSort | undefined, multiSort: STMultiSort | undefined, columns: _STColumn[]): STMultiSortResultType;
    private getFilteredData;
    private getReqFilterMap;
    private genStatistical;
    private getStatistical;
    private toFixed;
    private getValues;
    private getSum;
}
