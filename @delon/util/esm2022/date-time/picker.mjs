import { addDays, addSeconds, differenceInCalendarDays, format } from 'date-fns';
// TODO: timezone process
export class DateTimePickerUtil {
    /**
     * Current local time
     *
     * 当前本地时间
     */
    get now() {
        return new Date();
    }
    /**
     * Current local date (not including time part)
     *
     * 当前本地日期（不包含时间部分）
     */
    get date() {
        return this.removeTime(this.now);
    }
    /**
     * Remove the time part of the date
     *
     * 移除日期的时间部分
     */
    removeTime(d) {
        return new Date(d.toDateString());
    }
    /**
     * Format date-time
     *
     * 格式化日期
     */
    format(d, formatString = 'yyyy-MM-dd HH:mm:ss') {
        return format(d, formatString);
    }
    genTick(count) {
        return new Array(count).fill(0).map((_, idx) => idx);
    }
    /**
     * Calculate the number of days between two dates, `0` means the same day
     *
     * 计算两个日期相差天数，`0` 表示同一天
     */
    getDiffDays(dateLeft, dateRight) {
        return differenceInCalendarDays(dateLeft, typeof dateRight === 'number' ? addDays(this.date, dateRight) : dateRight || this.date);
    }
    /**
     * Disabled Before date (Default: today), Generally serves `nzDisabledDate`
     *
     * 禁用之前日期（默认：今天），一般服务于 `nzDisabledDate`
     */
    disabledBeforeDate(options) {
        return (d) => this.getDiffDays(d, options?.offsetDays) < 0;
    }
    /**
     * Disabled After date (Default: today), Generally serves `nzDisabledDate`
     *
     * 禁用之后日期（默认：今天），一般服务于 `nzDisabledDate`
     */
    disabledAfterDate(options) {
        return (d) => this.getDiffDays(d, options?.offsetDays) > 0;
    }
    baseDisabledTime(type, offsetSeconds) {
        const tick24 = this.genTick(24);
        const tick60 = this.genTick(60);
        return (current) => {
            const cur = current;
            if (cur == null) {
                return {};
            }
            const now = addSeconds(this.now, offsetSeconds || 0);
            const nowHours = now.getHours();
            const nowMinutes = now.getMinutes();
            const curHours = cur.getHours();
            const isToday = this.getDiffDays(this.removeTime(cur)) === 0;
            return {
                nzDisabledHours: () => {
                    if (!isToday)
                        return [];
                    return type === 'before' ? tick24.slice(0, nowHours) : tick24.slice(nowHours + 1);
                },
                nzDisabledMinutes: () => {
                    if (isToday && curHours === nowHours) {
                        return type === 'before' ? tick60.slice(0, nowMinutes) : tick60.slice(nowMinutes + 1);
                    }
                    return [];
                },
                nzDisabledSeconds: () => {
                    if (isToday && curHours === nowHours && cur.getMinutes() === nowMinutes) {
                        const nowSeconds = now.getSeconds();
                        return type === 'before' ? tick60.slice(0, nowSeconds) : tick60.slice(nowSeconds + 1);
                    }
                    return [];
                }
            };
        };
    }
    /**
     * Disabled Before time (Default: now), Generally serves `nzDisabledTime`
     *
     * 禁用之前时间（默认：现在），一般服务于 `nzDisabledTime`
     */
    disabledBeforeTime(options) {
        return this.baseDisabledTime('before', options?.offsetSeconds);
    }
    /**
     * Disabled After time (Default: now), Generally serves `nzDisabledTime`
     *
     * 禁用之后时间（默认：现在），一般服务于 `nzDisabledTime`
     */
    disabledAfterTime(options) {
        return this.baseDisabledTime('after', options?.offsetSeconds);
    }
}
export const dateTimePickerUtil = new DateTimePickerUtil();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlja2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdXRpbC9kYXRlLXRpbWUvcGlja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLHdCQUF3QixFQUFFLE1BQU0sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUtqRix5QkFBeUI7QUFDekIsTUFBTSxPQUFPLGtCQUFrQjtJQUM3Qjs7OztPQUlHO0lBQ0gsSUFBSSxHQUFHO1FBQ0wsT0FBTyxJQUFJLElBQUksRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFDRDs7OztPQUlHO0lBQ0gsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBQ0Q7Ozs7T0FJRztJQUNILFVBQVUsQ0FBQyxDQUFPO1FBQ2hCLE9BQU8sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsQ0FBZ0IsRUFBRSxlQUF1QixxQkFBcUI7UUFDbkUsT0FBTyxNQUFNLENBQUMsQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFDTyxPQUFPLENBQUMsS0FBYTtRQUMzQixPQUFPLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBQ0Q7Ozs7T0FJRztJQUNILFdBQVcsQ0FBQyxRQUF1QixFQUFFLFNBQXlCO1FBQzVELE9BQU8sd0JBQXdCLENBQzdCLFFBQVEsRUFDUixPQUFPLFNBQVMsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJ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SixDQUFDO0lBQ0Q7Ozs7T0FJRztJQUNILGtCQUFrQixDQUFDLE9BQW9DO1FBQ3JELE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUNEOzs7O09BSUc7SUFDSCxpQkFBaUIsQ0FBQyxPQUFvQztRQUNwRCxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7Q0FDRjtBQUVELE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixHQUFHLElBQUksa0JBQWtCLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFkZERheXMsIGFkZFNlY29uZHMsIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cywgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnO1xuXG5pbXBvcnQgdHlwZSB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgdHlwZSB7IERpc2FibGVkRGF0ZUZuLCBEaXNhYmxlZFRpbWVDb25maWcsIERpc2FibGVkVGltZUZuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9kYXRlLXBpY2tlcic7XG5cbi8vIFRPRE86IHRpbWV6b25lIHByb2Nlc3NcbmV4cG9ydCBjbGFzcyBEYXRlVGltZVBpY2tlclV0aWwge1xuICAvKipcbiAgICogQ3VycmVudCBsb2NhbCB0aW1lXG4gICAqXG4gICAqIOW9k+WJjeacrOWcsOaXtumXtFxuICAgKi9cbiAgZ2V0IG5vdygpOiBEYXRlIHtcbiAgICByZXR1cm4gbmV3IERhdGUoKTtcbiAgfVxuICAvKipcbiAgICogQ3VycmVudCBsb2NhbCBkYXRlIChub3QgaW5jbHVkaW5nIHRpbWUgcGFydClcbiAgICpcbiAgICog5b2T5YmN5pys5Zyw5pel5pyf77yI5LiN5YyF5ZCr5pe26Ze06YOo5YiG77yJXG4gICAqL1xuICBnZXQgZGF0ZSgpOiBEYXRlIHtcbiAgICByZXR1cm4gdGhpcy5yZW1vdmVUaW1lKHRoaXMubm93KTtcbiAgfVxuICAvKipcbiAgICogUmVtb3ZlIHRoZSB0aW1lIHBhcnQgb2YgdGhlIGRhdGVcbiAgICpcbiAgICog56e76Zmk5pel5pyf55qE5pe26Ze06YOo5YiGXG4gICAqL1xuICByZW1vdmVUaW1lKGQ6IERhdGUpOiBEYXRlIHtcbiAgICByZXR1cm4gbmV3IERhdGUoZC50b0RhdGVTdHJpbmcoKSk7XG4gIH1cbiAgLyoqXG4gICAqIEZvcm1hdCBkYXRlLXRpbWVcbiAgICpcbiAgICog5qC85byP5YyW5pel5pyfXG4gICAqL1xuICBmb3JtYXQoZDogbnVtYmVyIHwgRGF0ZSwgZm9ybWF0U3RyaW5nOiBzdHJpbmcgPSAneXl5eS1NTS1kZCBISDptbTpzcycpOiBzdHJpbmcge1xuICAgIHJldHVybiBmb3JtYXQoZCwgZm9ybWF0U3RyaW5nKTtcbiAgfVxuICBwcml2YXRlIGdlblRpY2soY291bnQ6IG51bWJlcik6IG51bWJlcltdIHtcbiAgICByZXR1cm4gbmV3IEFycmF5KGNvdW50KS5maWxsKDApLm1hcCgoXywgaWR4KSA9PiBpZHgpO1xuICB9XG4gIC8qKlxuICAgKiBDYWxjdWxhdGUgdGhlIG51bWJlciBvZiBkYXlzIGJldHdlZW4gdHdvIGRhdGVzLCBgMGAgbWVhbnMgdGhlIHNhbWUgZGF5XG4gICAqXG4gICAqIOiuoeeul+S4pOS4quaXpeacn+ebuOW3ruWkqeaVsO+8jGAwYCDooajnpLrlkIzkuIDlpKlcbiAgICovXG4gIGdldERpZmZEYXlzKGRhdGVMZWZ0OiBEYXRlIHwgbnVtYmVyLCBkYXRlUmlnaHQ/OiBEYXRlIHwgbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKFxuICAgICAgZGF0ZUxlZnQsXG4gICAgICB0eXBlb2YgZGF0ZVJpZ2h0ID09PSAnbnVtYmVyJyA/IGFkZERheXModGhpcy5kYXRlLCBkYXRlUmlnaHQpIDogZGF0ZVJpZ2h0IHx8IHRoaXMuZGF0ZVxuICAgICk7XG4gIH1cbiAgLyoqXG4gICAqIERpc2FibGVkIEJlZm9yZSBkYXRlIChEZWZhdWx0OiB0b2RheSksIEdlbmVyYWxseSBzZXJ2ZXMgYG56RGlzYWJsZWREYXRlYFxuICAgKlxuICAgKiDnpoHnlKjkuYvliY3ml6XmnJ/vvIjpu5jorqTvvJrku4rlpKnvvInvvIzkuIDoiKzmnI3liqHkuo4gYG56RGlzYWJsZWREYXRlYFxuICAgKi9cbiAgZGlzYWJsZWRCZWZvcmVEYXRlKG9wdGlvbnM/OiB7IG9mZnNldERheXM/OiBEYXRlIHwgbnVtYmVyIH0pOiBEaXNhYmxlZERhdGVGbiB7XG4gICAgcmV0dXJuIChkKTogYm9vbGVhbiA9PiB0aGlzLmdldERpZmZEYXlzKGQsIG9wdGlvbnM/Lm9mZnNldERheXMpIDwgMDtcbiAgfVxuICAvKipcbiAgICogRGlzYWJsZWQgQWZ0ZXIgZGF0ZSAoRGVmYXVsdDogdG9kYXkpLCBHZW5lcmFsbHkgc2VydmVzIGBuekRpc2FibGVkRGF0ZWBcbiAgICpcbiAgICog56aB55So5LmL5ZCO5pel5pyf77yI6buY6K6k77ya5LuK5aSp77yJ77yM5LiA6Iis5pyN5Yqh5LqOIGBuekRpc2FibGVkRGF0ZWBcbiAgICovXG4gIGRpc2FibGVkQWZ0ZXJEYXRlKG9wdGlvbnM/OiB7IG9mZnNldERheXM/OiBEYXRlIHwgbnVtYmVyIH0pOiBEaXNhYmxlZERhdGVGbiB7XG4gICAgcmV0dXJuIChkKTogYm9vbGVhbiA9PiB0aGlzLmdldERpZmZEYXlzKGQsIG9wdGlvbnM/Lm9mZnNldERheXMpID4gMDtcbiAgfVxuICBwcml2YXRlIGJhc2VEaXNhYmxlZFRpbWUodHlwZTogJ2JlZm9yZScgfCAnYWZ0ZXInLCBvZmZzZXRTZWNvbmRzPzogbnVtYmVyKTogRGlzYWJsZWRUaW1lRm4ge1xuICAgIGNvbnN0IHRpY2syNCA9IHRoaXMuZ2VuVGljaygyNCk7XG4gICAgY29uc3QgdGljazYwID0gdGhpcy5nZW5UaWNrKDYwKTtcbiAgICByZXR1cm4gKGN1cnJlbnQpOiBEaXNhYmxlZFRpbWVDb25maWcgPT4ge1xuICAgICAgY29uc3QgY3VyID0gY3VycmVudCBhcyBEYXRlO1xuICAgICAgaWYgKGN1ciA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB7fSBhcyBOelNhZmVBbnk7XG4gICAgICB9XG4gICAgICBjb25zdCBub3cgPSBhZGRTZWNvbmRzKHRoaXMubm93LCBvZmZzZXRTZWNvbmRzIHx8IDApO1xuICAgICAgY29uc3Qgbm93SG91cnMgPSBub3cuZ2V0SG91cnMoKTtcbiAgICAgIGNvbnN0IG5vd01pbnV0ZXMgPSBub3cuZ2V0TWludXRlcygpO1xuICAgICAgY29uc3QgY3VySG91cnMgPSBjdXIuZ2V0SG91cnMoKTtcbiAgICAgIGNvbnN0IGlzVG9kYXkgPSB0aGlzLmdldERpZmZEYXlzKHRoaXMucmVtb3ZlVGltZShjdXIpKSA9PT0gMDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG56RGlzYWJsZWRIb3VyczogKCkgPT4ge1xuICAgICAgICAgIGlmICghaXNUb2RheSkgcmV0dXJuIFtdO1xuICAgICAgICAgIHJldHVybiB0eXBlID09PSAnYmVmb3JlJyA/IHRpY2syNC5zbGljZSgwLCBub3dIb3VycykgOiB0aWNrMjQuc2xpY2Uobm93SG91cnMgKyAxKTtcbiAgICAgICAgfSxcbiAgICAgICAgbnpEaXNhYmxlZE1pbnV0ZXM6ICgpID0+IHtcbiAgICAgICAgICBpZiAoaXNUb2RheSAmJiBjdXJIb3VycyA9PT0gbm93SG91cnMpIHtcbiAgICAgICAgICAgIHJldHVybiB0eXBlID09PSAnYmVmb3JlJyA/IHRpY2s2MC5zbGljZSgwLCBub3dNaW51dGVzKSA6IHRpY2s2MC5zbGljZShub3dNaW51dGVzICsgMSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfSxcbiAgICAgICAgbnpEaXNhYmxlZFNlY29uZHM6ICgpID0+IHtcbiAgICAgICAgICBpZiAoaXNUb2RheSAmJiBjdXJIb3VycyA9PT0gbm93SG91cnMgJiYgY3VyLmdldE1pbnV0ZXMoKSA9PT0gbm93TWludXRlcykge1xuICAgICAgICAgICAgY29uc3Qgbm93U2Vjb25kcyA9IG5vdy5nZXRTZWNvbmRzKCk7XG4gICAgICAgICAgICByZXR1cm4gdHlwZSA9PT0gJ2JlZm9yZScgPyB0aWNrNjAuc2xpY2UoMCwgbm93U2Vjb25kcykgOiB0aWNrNjAuc2xpY2Uobm93U2Vjb25kcyArIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfTtcbiAgfVxuICAvKipcbiAgICogRGlzYWJsZWQgQmVmb3JlIHRpbWUgKERlZmF1bHQ6IG5vdyksIEdlbmVyYWxseSBzZXJ2ZXMgYG56RGlzYWJsZWRUaW1lYFxuICAgKlxuICAgKiDnpoHnlKjkuYvliY3ml7bpl7TvvIjpu5jorqTvvJrnjrDlnKjvvInvvIzkuIDoiKzmnI3liqHkuo4gYG56RGlzYWJsZWRUaW1lYFxuICAgKi9cbiAgZGlzYWJsZWRCZWZvcmVUaW1lKG9wdGlvbnM/OiB7IG9mZnNldFNlY29uZHM/OiBudW1iZXIgfSk6IERpc2FibGVkVGltZUZuIHtcbiAgICByZXR1cm4gdGhpcy5iYXNlRGlzYWJsZWRUaW1lKCdiZWZvcmUnLCBvcHRpb25zPy5vZmZzZXRTZWNvbmRzKTtcbiAgfVxuICAvKipcbiAgICogRGlzYWJsZWQgQWZ0ZXIgdGltZSAoRGVmYXVsdDogbm93KSwgR2VuZXJhbGx5IHNlcnZlcyBgbnpEaXNhYmxlZFRpbWVgXG4gICAqXG4gICAqIOemgeeUqOS5i+WQjuaXtumXtO+8iOm7mOiupO+8mueOsOWcqO+8ie+8jOS4gOiIrOacjeWKoeS6jiBgbnpEaXNhYmxlZFRpbWVgXG4gICAqL1xuICBkaXNhYmxlZEFmdGVyVGltZShvcHRpb25zPzogeyBvZmZzZXRTZWNvbmRzPzogbnVtYmVyIH0pOiBEaXNhYmxlZFRpbWVGbiB7XG4gICAgcmV0dXJuIHRoaXMuYmFzZURpc2FibGVkVGltZSgnYWZ0ZXInLCBvcHRpb25zPy5vZmZzZXRTZWNvbmRzKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZGF0ZVRpbWVQaWNrZXJVdGlsID0gbmV3IERhdGVUaW1lUGlja2VyVXRpbCgpO1xuIl19