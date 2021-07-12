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
        return (d) => this.getDiffDays(d, options === null || options === void 0 ? void 0 : options.offsetDays) < 0;
    }
    /**
     * Disabled After date (Default: today), Generally serves `nzDisabledDate`
     *
     * 禁用之后日期（默认：今天），一般服务于 `nzDisabledDate`
     */
    disabledAfterDate(options) {
        return (d) => this.getDiffDays(d, options === null || options === void 0 ? void 0 : options.offsetDays) > 0;
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
        return this.baseDisabledTime('before', options === null || options === void 0 ? void 0 : options.offsetSeconds);
    }
    /**
     * Disabled After time (Default: now), Generally serves `nzDisabledTime`
     *
     * 禁用之后时间（默认：现在），一般服务于 `nzDisabledTime`
     */
    disabledAfterTime(options) {
        return this.baseDisabledTime('after', options === null || options === void 0 ? void 0 : options.offsetSeconds);
    }
}
export const dateTimePickerUtil = new DateTimePickerUtil();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlja2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdXRpbC9kYXRlLXRpbWUvcGlja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLHdCQUF3QixFQUFFLE1BQU0sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUtqRix5QkFBeUI7QUFDekIsTUFBTSxPQUFPLGtCQUFrQjtJQUM3Qjs7OztPQUlHO0lBQ0gsSUFBSSxHQUFHO1FBQ0wsT0FBTyxJQUFJLElBQUksRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFDRDs7OztPQUlHO0lBQ0gsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBQ0Q7Ozs7T0FJRztJQUNILFVBQVUsQ0FBQyxDQUFPO1FBQ2hCLE9BQU8sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsQ0FBZ0IsRUFBRSxlQUF1QixxQkFBcUI7UUFDbkUsT0FBTyxNQUFNLENBQUMsQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFDTyxPQUFPLENBQUMsS0FBYTtRQUMzQixPQUFPLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBQ0Q7Ozs7T0FJRztJQUNILFdBQVcsQ0FBQyxRQUF1QixFQUFFLFNBQXlCO1FBQzVELE9BQU8sd0JBQXdCLENBQzdCLFFBQVEsRUFDUixPQUFPLFNBQVMsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJ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QUM7Z0JBQ1osQ0FBQzthQUNGLENBQUM7UUFDSixDQUFDLENBQUM7SUFDSixDQUFDO0lBQ0Q7Ozs7T0FJRztJQUNILGtCQUFrQixDQUFDLE9BQW9DO1FBQ3JELE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsYUFBYSxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUNEOzs7O09BSUc7SUFDSCxpQkFBaUIsQ0FBQyxPQUFvQztRQUNwRCxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7Q0FDRjtBQUVELE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixHQUFHLElBQUksa0JBQWtCLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFkZERheXMsIGFkZFNlY29uZHMsIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cywgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnO1xuXG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgRGlzYWJsZWREYXRlRm4sIERpc2FibGVkVGltZUNvbmZpZywgRGlzYWJsZWRUaW1lRm4gfSBmcm9tICduZy16b3Jyby1hbnRkL2RhdGUtcGlja2VyJztcblxuLy8gVE9ETzogdGltZXpvbmUgcHJvY2Vzc1xuZXhwb3J0IGNsYXNzIERhdGVUaW1lUGlja2VyVXRpbCB7XG4gIC8qKlxuICAgKiBDdXJyZW50IGxvY2FsIHRpbWVcbiAgICpcbiAgICog5b2T5YmN5pys5Zyw5pe26Ze0XG4gICAqL1xuICBnZXQgbm93KCk6IERhdGUge1xuICAgIHJldHVybiBuZXcgRGF0ZSgpO1xuICB9XG4gIC8qKlxuICAgKiBDdXJyZW50IGxvY2FsIGRhdGUgKG5vdCBpbmNsdWRpbmcgdGltZSBwYXJ0KVxuICAgKlxuICAgKiDlvZPliY3mnKzlnLDml6XmnJ/vvIjkuI3ljIXlkKvml7bpl7Tpg6jliIbvvIlcbiAgICovXG4gIGdldCBkYXRlKCk6IERhdGUge1xuICAgIHJldHVybiB0aGlzLnJlbW92ZVRpbWUodGhpcy5ub3cpO1xuICB9XG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIHRpbWUgcGFydCBvZiB0aGUgZGF0ZVxuICAgKlxuICAgKiDnp7vpmaTml6XmnJ/nmoTml7bpl7Tpg6jliIZcbiAgICovXG4gIHJlbW92ZVRpbWUoZDogRGF0ZSk6IERhdGUge1xuICAgIHJldHVybiBuZXcgRGF0ZShkLnRvRGF0ZVN0cmluZygpKTtcbiAgfVxuICAvKipcbiAgICogRm9ybWF0IGRhdGUtdGltZVxuICAgKlxuICAgKiDmoLzlvI/ljJbml6XmnJ9cbiAgICovXG4gIGZvcm1hdChkOiBudW1iZXIgfCBEYXRlLCBmb3JtYXRTdHJpbmc6IHN0cmluZyA9ICd5eXl5LU1NLWRkIEhIOm1tOnNzJyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGZvcm1hdChkLCBmb3JtYXRTdHJpbmcpO1xuICB9XG4gIHByaXZhdGUgZ2VuVGljayhjb3VudDogbnVtYmVyKTogbnVtYmVyW10ge1xuICAgIHJldHVybiBuZXcgQXJyYXkoY291bnQpLmZpbGwoMCkubWFwKChfLCBpZHgpID0+IGlkeCk7XG4gIH1cbiAgLyoqXG4gICAqIENhbGN1bGF0ZSB0aGUgbnVtYmVyIG9mIGRheXMgYmV0d2VlbiB0d28gZGF0ZXMsIGAwYCBtZWFucyB0aGUgc2FtZSBkYXlcbiAgICpcbiAgICog6K6h566X5Lik5Liq5pel5pyf55u45beu5aSp5pWw77yMYDBgIOihqOekuuWQjOS4gOWkqVxuICAgKi9cbiAgZ2V0RGlmZkRheXMoZGF0ZUxlZnQ6IERhdGUgfCBudW1iZXIsIGRhdGVSaWdodD86IERhdGUgfCBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoXG4gICAgICBkYXRlTGVmdCxcbiAgICAgIHR5cGVvZiBkYXRlUmlnaHQgPT09ICdudW1iZXInID8gYWRkRGF5cyh0aGlzLmRhdGUsIGRhdGVSaWdodCkgOiBkYXRlUmlnaHQgfHwgdGhpcy5kYXRlXG4gICAgKTtcbiAgfVxuICAvKipcbiAgICogRGlzYWJsZWQgQmVmb3JlIGRhdGUgKERlZmF1bHQ6IHRvZGF5KSwgR2VuZXJhbGx5IHNlcnZlcyBgbnpEaXNhYmxlZERhdGVgXG4gICAqXG4gICAqIOemgeeUqOS5i+WJjeaXpeacn++8iOm7mOiupO+8muS7iuWkqe+8ie+8jOS4gOiIrOacjeWKoeS6jiBgbnpEaXNhYmxlZERhdGVgXG4gICAqL1xuICBkaXNhYmxlZEJlZm9yZURhdGUob3B0aW9ucz86IHsgb2Zmc2V0RGF5cz86IERhdGUgfCBudW1iZXIgfSk6IERpc2FibGVkRGF0ZUZuIHtcbiAgICByZXR1cm4gKGQpOiBib29sZWFuID0+IHRoaXMuZ2V0RGlmZkRheXMoZCwgb3B0aW9ucz8ub2Zmc2V0RGF5cykgPCAwO1xuICB9XG4gIC8qKlxuICAgKiBEaXNhYmxlZCBBZnRlciBkYXRlIChEZWZhdWx0OiB0b2RheSksIEdlbmVyYWxseSBzZXJ2ZXMgYG56RGlzYWJsZWREYXRlYFxuICAgKlxuICAgKiDnpoHnlKjkuYvlkI7ml6XmnJ/vvIjpu5jorqTvvJrku4rlpKnvvInvvIzkuIDoiKzmnI3liqHkuo4gYG56RGlzYWJsZWREYXRlYFxuICAgKi9cbiAgZGlzYWJsZWRBZnRlckRhdGUob3B0aW9ucz86IHsgb2Zmc2V0RGF5cz86IERhdGUgfCBudW1iZXIgfSk6IERpc2FibGVkRGF0ZUZuIHtcbiAgICByZXR1cm4gKGQpOiBib29sZWFuID0+IHRoaXMuZ2V0RGlmZkRheXMoZCwgb3B0aW9ucz8ub2Zmc2V0RGF5cykgPiAwO1xuICB9XG4gIHByaXZhdGUgYmFzZURpc2FibGVkVGltZSh0eXBlOiAnYmVmb3JlJyB8ICdhZnRlcicsIG9mZnNldFNlY29uZHM/OiBudW1iZXIpOiBEaXNhYmxlZFRpbWVGbiB7XG4gICAgY29uc3QgdGljazI0ID0gdGhpcy5nZW5UaWNrKDI0KTtcbiAgICBjb25zdCB0aWNrNjAgPSB0aGlzLmdlblRpY2soNjApO1xuICAgIHJldHVybiAoY3VycmVudCk6IERpc2FibGVkVGltZUNvbmZpZyA9PiB7XG4gICAgICBjb25zdCBjdXIgPSBjdXJyZW50IGFzIERhdGU7XG4gICAgICBpZiAoY3VyID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHt9IGFzIE56U2FmZUFueTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG5vdyA9IGFkZFNlY29uZHModGhpcy5ub3csIG9mZnNldFNlY29uZHMgfHwgMCk7XG4gICAgICBjb25zdCBub3dIb3VycyA9IG5vdy5nZXRIb3VycygpO1xuICAgICAgY29uc3Qgbm93TWludXRlcyA9IG5vdy5nZXRNaW51dGVzKCk7XG4gICAgICBjb25zdCBjdXJIb3VycyA9IGN1ci5nZXRIb3VycygpO1xuICAgICAgY29uc3QgaXNUb2RheSA9IHRoaXMuZ2V0RGlmZkRheXModGhpcy5yZW1vdmVUaW1lKGN1cikpID09PSAwO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbnpEaXNhYmxlZEhvdXJzOiAoKSA9PiB7XG4gICAgICAgICAgaWYgKCFpc1RvZGF5KSByZXR1cm4gW107XG4gICAgICAgICAgcmV0dXJuIHR5cGUgPT09ICdiZWZvcmUnID8gdGljazI0LnNsaWNlKDAsIG5vd0hvdXJzKSA6IHRpY2syNC5zbGljZShub3dIb3VycyArIDEpO1xuICAgICAgICB9LFxuICAgICAgICBuekRpc2FibGVkTWludXRlczogKCkgPT4ge1xuICAgICAgICAgIGlmIChpc1RvZGF5ICYmIGN1ckhvdXJzID09PSBub3dIb3Vycykge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGUgPT09ICdiZWZvcmUnID8gdGljazYwLnNsaWNlKDAsIG5vd01pbnV0ZXMpIDogdGljazYwLnNsaWNlKG5vd01pbnV0ZXMgKyAxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9LFxuICAgICAgICBuekRpc2FibGVkU2Vjb25kczogKCkgPT4ge1xuICAgICAgICAgIGlmIChpc1RvZGF5ICYmIGN1ckhvdXJzID09PSBub3dIb3VycyAmJiBjdXIuZ2V0TWludXRlcygpID09PSBub3dNaW51dGVzKSB7XG4gICAgICAgICAgICBjb25zdCBub3dTZWNvbmRzID0gbm93LmdldFNlY29uZHMoKTtcbiAgICAgICAgICAgIHJldHVybiB0eXBlID09PSAnYmVmb3JlJyA/IHRpY2s2MC5zbGljZSgwLCBub3dTZWNvbmRzKSA6IHRpY2s2MC5zbGljZShub3dTZWNvbmRzICsgMSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBEaXNhYmxlZCBCZWZvcmUgdGltZSAoRGVmYXVsdDogbm93KSwgR2VuZXJhbGx5IHNlcnZlcyBgbnpEaXNhYmxlZFRpbWVgXG4gICAqXG4gICAqIOemgeeUqOS5i+WJjeaXtumXtO+8iOm7mOiupO+8mueOsOWcqO+8ie+8jOS4gOiIrOacjeWKoeS6jiBgbnpEaXNhYmxlZFRpbWVgXG4gICAqL1xuICBkaXNhYmxlZEJlZm9yZVRpbWUob3B0aW9ucz86IHsgb2Zmc2V0U2Vjb25kcz86IG51bWJlciB9KTogRGlzYWJsZWRUaW1lRm4ge1xuICAgIHJldHVybiB0aGlzLmJhc2VEaXNhYmxlZFRpbWUoJ2JlZm9yZScsIG9wdGlvbnM/Lm9mZnNldFNlY29uZHMpO1xuICB9XG4gIC8qKlxuICAgKiBEaXNhYmxlZCBBZnRlciB0aW1lIChEZWZhdWx0OiBub3cpLCBHZW5lcmFsbHkgc2VydmVzIGBuekRpc2FibGVkVGltZWBcbiAgICpcbiAgICog56aB55So5LmL5ZCO5pe26Ze077yI6buY6K6k77ya546w5Zyo77yJ77yM5LiA6Iis5pyN5Yqh5LqOIGBuekRpc2FibGVkVGltZWBcbiAgICovXG4gIGRpc2FibGVkQWZ0ZXJUaW1lKG9wdGlvbnM/OiB7IG9mZnNldFNlY29uZHM/OiBudW1iZXIgfSk6IERpc2FibGVkVGltZUZuIHtcbiAgICByZXR1cm4gdGhpcy5iYXNlRGlzYWJsZWRUaW1lKCdhZnRlcicsIG9wdGlvbnM/Lm9mZnNldFNlY29uZHMpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBkYXRlVGltZVBpY2tlclV0aWwgPSBuZXcgRGF0ZVRpbWVQaWNrZXJVdGlsKCk7XG4iXX0=