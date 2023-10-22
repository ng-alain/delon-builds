import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { DateLocale } from 'ng-zorro-antd/i18n';
/**
 * Get the time range, return `[ Date, Date]` for the start and end dates
 *
 * 获取时间范围
 *
 * @param type 类型，带 `-` 表示过去一个时间，若指定 `number` 表示天数
 * @param time 开始时间
 * @param ignoreMaxTime 忽略追加结束日期的最大时间值
 */
export declare function getTimeDistance(type: 'today' | '-today' | 'yesterday' | 'week' | '-week' | 'month' | '-month' | 'year' | '-year' | number, time?: Date | string | number, options?: {
    ignoreMaxTime?: boolean;
}): [Date, Date];
/**
 * fix time is the most, big value
 */
export declare function fixEndTimeOfRange(dates: [Date, Date]): [Date, Date];
export interface ToDateOptions {
    /** If parsing fails try to parse the date by pressing `formatString` */
    formatString?: string;
    /** If parsing fails returned default value, default: `new Date(NaN)` */
    defaultValue?: NzSafeAny;
}
/**
 * Convert to `Date` format
 *
 * @param value When is a number, it is treated as a timestamp (Support seconds and milliseconds timestamp).
 */
export declare function toDate(value?: Date | string | number | null, options?: string | ToDateOptions): Date;
/**
 * Format date, supports `Date, number, string` types
 *
 * @param value When is a number, it is treated as a timestamp (Support seconds and milliseconds timestamp).
 * @param formatString Please refer to [date-fnd format](https://date-fns.org/v2.30.0/docs/format) for string format
 * @param dateLocale Recommended to be consistent with NG-ZORRO by using `inject(NZ_DATE_LOCALE)`
 */
export declare function formatDate(value: Date | string | number, formatString: string, dateLocale?: DateLocale): string;
