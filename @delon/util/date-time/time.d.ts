import { NzSafeAny } from 'ng-zorro-antd/core/types';
/**
 * Get the time range, return `[ Date, Date]` for the start and end dates
 *
 * 获取时间范围
 * @param type 类型，带 `-` 表示过去一个时间，若指定 `number` 表示天数
 * @param time 开始时间
 */
export declare function getTimeDistance(type: 'today' | '-today' | 'yesterday' | 'week' | '-week' | 'month' | '-month' | 'year' | '-year' | number, time?: Date | string | number): [Date, Date];
/**
 * fix time is the most, big value
 */
export declare function fixEndTimeOfRange(dates: [Date, Date]): [Date, Date];
export declare type ToDateOptions = string | {
    formatString?: string;
    defaultValue?: NzSafeAny;
};
/**
 * Return the date parsed from string using the given format string
 * - If the argument is a number, it is treated as a timestamp.
 * @param formatString If parsing fails try to parse the date by pressing `formatString`
 * @param defaultValue If parsing fails returned default value, default: `new Date(NaN)`
 */
export declare function toDate(value: Date | string | number, options?: ToDateOptions): Date;
