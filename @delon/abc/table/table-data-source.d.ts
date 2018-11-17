import { DecimalPipe } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { CNCurrencyPipe, DatePipe, YNPipe, _HttpClient } from '@delon/theme';
import { STData, STPage, STReq, STRes, STColumn, STMultiSort, STRowClassName, STSingleSort } from './table.interfaces';
export interface STDataSourceOptions {
    pi?: number;
    ps?: number;
    data?: string | STData[] | Observable<STData[]>;
    total?: number;
    req?: STReq;
    res?: STRes;
    page?: STPage;
    columns?: STColumn[];
    singleSort?: STSingleSort;
    multiSort?: STMultiSort;
    rowClassName?: STRowClassName;
}
export interface STDataSourceResult {
    /** 是否需要显示分页器 */
    pageShow?: boolean;
    /** 新 `pi`，若返回 `undefined` 表示用户受控 */
    pi?: number;
    /** 新 `total`，若返回 `undefined` 表示用户受控 */
    total?: number;
    /** 数据 */
    list?: STData[];
}
export declare class STDataSource {
    private http;
    private currenty;
    private date;
    private yn;
    private number;
    private dom;
    constructor(http: _HttpClient, currenty: CNCurrencyPipe, date: DatePipe, yn: YNPipe, number: DecimalPipe, dom: DomSanitizer);
    process(options: STDataSourceOptions): Promise<STDataSourceResult>;
    private get;
    private getByHttp;
    private getValidSort;
    private getSorterFn;
    getReqSortMap(singleSort: STSingleSort, multiSort: STMultiSort, columns: STColumn[]): {
        [key: string]: string;
    };
    private getReqFilterMap;
}
