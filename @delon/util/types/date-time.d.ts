import { AlainThemePipeDateFormatCustom } from '@delon/util/config';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { DateLocale } from 'ng-zorro-antd/i18n';
import { DisabledDateFn, DisabledTimeFn } from 'ng-zorro-antd/date-picker';

/**
 * Get the time range, return `[ Date, Date]` for the start and end dates
 *
 * 获取时间范围
 *
 * @param type 类型，带 `-` 表示过去一个时间，若指定 `number` 表示天数
 * @param time 开始时间
 * @param ignoreMaxTime 忽略追加结束日期的最大时间值
 */
declare function getTimeDistance(type: 'today' | '-today' | 'yesterday' | 'week' | '-week' | 'month' | '-month' | 'year' | '-year' | number, time?: Date | string | number, options?: {
    ignoreMaxTime?: boolean;
}): [Date, Date];
/**
 * fix time is the most, big value
 */
declare function fixEndTimeOfRange(dates: [Date, Date]): [Date, Date];
interface ToDateOptions {
    /** If parsing fails try to parse the date by pressing `formatString` */
    formatString?: string;
    /** If parsing fails returned default value, default: `new Date(NaN)` */
    defaultValue?: NzSafeAny;
    timestampSecond?: boolean;
}
/**
 * Convert to `Date` format
 *
 * @param value When is a number, it's treated as a timestamp; If it's seconds, you need to provide the `options.timestampSecond` parameter.
 */
declare function toDate(value?: Date | string | number | null, options?: string | ToDateOptions): Date;
/**
 * Format date, supports `Date, number, string` types
 *
 * @param value When is a number, it is treated as a timestamp (Support seconds and milliseconds timestamp).
 * @param formatString Please refer to [date-fnd format](https://date-fns.org/v2.30.0/docs/format) for string format
 * @param dateLocale Recommended to be consistent with NG-ZORRO by using `inject(NZ_DATE_LOCALE)`
 */
declare function formatDate(value: Date | string | number, formatString: string, options?: {
    locale?: DateLocale;
    customFormat?: AlainThemePipeDateFormatCustom;
}): string;

declare class DateTimePickerUtil {
    /**
     * Current local time
     *
     * 当前本地时间
     */
    get now(): Date;
    /**
     * Current local date (not including time part)
     *
     * 当前本地日期（不包含时间部分）
     */
    get date(): Date;
    /**
     * Remove the time part of the date
     *
     * 移除日期的时间部分
     */
    removeTime(d: Date): Date;
    /**
     * Format date-time
     *
     * 格式化日期
     */
    format(d: number | Date, formatString?: string): string;
    private genTick;
    /**
     * Calculate the number of days between two dates, `0` means the same day
     *
     * 计算两个日期相差天数，`0` 表示同一天
     */
    getDiffDays(dateLeft: Date | number, dateRight?: Date | number): number;
    /**
     * Disabled Before date (Default: today), Generally serves `nzDisabledDate`
     *
     * 禁用之前日期（默认：今天），一般服务于 `nzDisabledDate`
     */
    disabledBeforeDate(options?: {
        offsetDays?: Date | number;
    }): DisabledDateFn;
    /**
     * Disabled After date (Default: today), Generally serves `nzDisabledDate`
     *
     * 禁用之后日期（默认：今天），一般服务于 `nzDisabledDate`
     */
    disabledAfterDate(options?: {
        offsetDays?: Date | number;
    }): DisabledDateFn;
    private baseDisabledTime;
    /**
     * Disabled Before time (Default: now), Generally serves `nzDisabledTime`
     *
     * 禁用之前时间（默认：现在），一般服务于 `nzDisabledTime`
     */
    disabledBeforeTime(options?: {
        offsetSeconds?: number;
    }): DisabledTimeFn;
    /**
     * Disabled After time (Default: now), Generally serves `nzDisabledTime`
     *
     * 禁用之后时间（默认：现在），一般服务于 `nzDisabledTime`
     */
    disabledAfterTime(options?: {
        offsetSeconds?: number;
    }): DisabledTimeFn;
}
declare const dateTimePickerUtil: DateTimePickerUtil;

export { DateTimePickerUtil, dateTimePickerUtil, fixEndTimeOfRange, formatDate, getTimeDistance, toDate };
export type { ToDateOptions };
