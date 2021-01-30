import { DisabledDateFn, DisabledTimeFn } from 'ng-zorro-antd/date-picker';
export declare class DateTimePickerUtil {
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
export declare const dateTimePickerUtil: DateTimePickerUtil;
