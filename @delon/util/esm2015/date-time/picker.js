/**
 * @fileoverview added by tsickle
 * Generated from: picker.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import addDays from 'date-fns/addDays';
import addSeconds from 'date-fns/addSeconds';
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays';
import format from 'date-fns/format';
// TODO: timezone process
export class DateTimePickerUtil {
    /**
     * Current local time
     *
     * 当前本地时间
     * @return {?}
     */
    get now() {
        return new Date();
    }
    /**
     * Current local date (not including time part)
     *
     * 当前本地日期（不包含时间部分）
     * @return {?}
     */
    get date() {
        return this.removeTime(this.now);
    }
    /**
     * Remove the time part of the date
     *
     * 移除日期的时间部分
     * @param {?} d
     * @return {?}
     */
    removeTime(d) {
        return new Date(d.toDateString());
    }
    /**
     * Format date-time
     *
     * 格式化日期
     * @param {?} d
     * @param {?=} formatString
     * @return {?}
     */
    format(d, formatString = 'yyyy-MM-dd HH:mm:ss') {
        return format(d, formatString);
    }
    /**
     * @private
     * @param {?} count
     * @return {?}
     */
    genTick(count) {
        return new Array(count).fill(0).map((/**
         * @param {?} _
         * @param {?} idx
         * @return {?}
         */
        (_, idx) => idx));
    }
    /**
     * Calculate the number of days between two dates, `0` means the same day
     *
     * 计算两个日期相差天数，`0` 表示同一天
     * @param {?} dateLeft
     * @param {?=} dateRight
     * @return {?}
     */
    getDiffDays(dateLeft, dateRight) {
        return differenceInCalendarDays(dateLeft, typeof dateRight === 'number' ? addDays(this.date, dateRight) : dateRight || this.date);
    }
    /**
     * Disabled Before date (Default: today), Generally serves `nzDisabledDate`
     *
     * 禁用之前日期（默认：今天），一般服务于 `nzDisabledDate`
     * @param {?=} options
     * @return {?}
     */
    disabledBeforeDate(options) {
        return (/**
         * @param {?} d
         * @return {?}
         */
        (d) => this.getDiffDays(d, options === null || options === void 0 ? void 0 : options.offsetDays) < 0);
    }
    /**
     * Disabled After date (Default: today), Generally serves `nzDisabledDate`
     *
     * 禁用之后日期（默认：今天），一般服务于 `nzDisabledDate`
     * @param {?=} options
     * @return {?}
     */
    disabledAfterDate(options) {
        return (/**
         * @param {?} d
         * @return {?}
         */
        (d) => this.getDiffDays(d, options === null || options === void 0 ? void 0 : options.offsetDays) > 0);
    }
    /**
     * @private
     * @param {?} type
     * @param {?=} offsetSeconds
     * @return {?}
     */
    baseDisabledTime(type, offsetSeconds) {
        /** @type {?} */
        const tick24 = this.genTick(24);
        /** @type {?} */
        const tick60 = this.genTick(60);
        return (/**
         * @param {?} current
         * @return {?}
         */
        (current) => {
            /** @type {?} */
            const cur = (/** @type {?} */ (current));
            if (cur == null) {
                return (/** @type {?} */ ({}));
            }
            /** @type {?} */
            const now = addSeconds(this.now, offsetSeconds || 0);
            /** @type {?} */
            const nowHours = now.getHours();
            /** @type {?} */
            const nowMinutes = now.getMinutes();
            /** @type {?} */
            const curHours = cur.getHours();
            /** @type {?} */
            const isToday = this.getDiffDays(this.removeTime(cur)) === 0;
            return {
                nzDisabledHours: (/**
                 * @return {?}
                 */
                () => {
                    if (!isToday)
                        return [];
                    return type === 'before' ? tick24.slice(0, nowHours) : tick24.slice(nowHours + 1);
                }),
                nzDisabledMinutes: (/**
                 * @return {?}
                 */
                () => {
                    if (isToday && curHours === nowHours) {
                        return type === 'before' ? tick60.slice(0, nowMinutes) : tick60.slice(nowMinutes + 1);
                    }
                    return [];
                }),
                nzDisabledSeconds: (/**
                 * @return {?}
                 */
                () => {
                    if (isToday && curHours === nowHours && cur.getMinutes() === nowMinutes) {
                        /** @type {?} */
                        const nowSeconds = now.getSeconds();
                        return type === 'before' ? tick60.slice(0, nowSeconds) : tick60.slice(nowSeconds + 1);
                    }
                    return [];
                }),
            };
        });
    }
    /**
     * Disabled Before time (Default: now), Generally serves `nzDisabledTime`
     *
     * 禁用之前时间（默认：现在），一般服务于 `nzDisabledTime`
     * @param {?=} options
     * @return {?}
     */
    disabledBeforeTime(options) {
        return this.baseDisabledTime('before', options === null || options === void 0 ? void 0 : options.offsetSeconds);
    }
    /**
     * Disabled After time (Default: now), Generally serves `nzDisabledTime`
     *
     * 禁用之后时间（默认：现在），一般服务于 `nzDisabledTime`
     * @param {?=} options
     * @return {?}
     */
    disabledAfterTime(options) {
        return this.baseDisabledTime('after', options === null || options === void 0 ? void 0 : options.offsetSeconds);
    }
}
/** @type {?} */
export const dateTimePickerUtil = new DateTimePickerUtil();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlja2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdXRpbC9kYXRlLXRpbWUvcGlja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxPQUFPLE1BQU0sa0JBQWtCLENBQUM7QUFDdkMsT0FBTyxVQUFVLE1BQU0scUJBQXFCLENBQUM7QUFDN0MsT0FBTyx3QkFBd0IsTUFBTSxtQ0FBbUMsQ0FBQztBQUN6RSxPQUFPLE1BQU0sTUFBTSxpQkFBaUIsQ0FBQzs7QUFJckMsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7OztJQU03QixJQUFJLEdBQUc7UUFDTCxPQUFPLElBQUksSUFBSSxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7Ozs7OztJQU1ELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Ozs7Ozs7SUFNRCxVQUFVLENBQUMsQ0FBTztRQUNoQixPQUFPLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7Ozs7OztJQU1ELE1BQU0sQ0FBQyxDQUFnQixFQUFFLGVBQXVCLHFCQUFxQjtRQUNuRSxPQUFPLE1BQU0sQ0FBQyxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDakMsQ0FBQzs7Ozs7O0lBQ08sT0FBTyxDQUFDLEtBQWE7UUFDM0IsT0FBTyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRzs7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7Ozs7OztJQU1ELFdBQVcsQ0FBQyxRQUF1QixFQUFFLFNBQXlCO1FBQzVELE9BQU8sd0JBQXdCLENBQUMsUUFBUSxFQUFFLE9BQU8sU0FBUyxLQUFLLFFB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QUFDO2dCQUNaLENBQUMsQ0FBQTthQUNGLENBQUM7UUFDSixDQUFDLEVBQUM7SUFDSixDQUFDOzs7Ozs7OztJQU1ELGtCQUFrQixDQUFDLE9BQW9DO1FBQ3JELE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsYUFBYSxDQUFDLENBQUM7SUFDakUsQ0FBQzs7Ozs7Ozs7SUFNRCxpQkFBaUIsQ0FBQyxPQUFvQztRQUNwRCxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7Q0FDRjs7QUFFRCxNQUFNLE9BQU8sa0JBQWtCLEdBQUcsSUFBSSxrQkFBa0IsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhZGREYXlzIGZyb20gJ2RhdGUtZm5zL2FkZERheXMnO1xuaW1wb3J0IGFkZFNlY29uZHMgZnJvbSAnZGF0ZS1mbnMvYWRkU2Vjb25kcyc7XG5pbXBvcnQgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzIGZyb20gJ2RhdGUtZm5zL2RpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyc7XG5pbXBvcnQgZm9ybWF0IGZyb20gJ2RhdGUtZm5zL2Zvcm1hdCc7XG5pbXBvcnQgeyBEaXNhYmxlZERhdGVGbiwgRGlzYWJsZWRUaW1lQ29uZmlnLCBEaXNhYmxlZFRpbWVGbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvZGF0ZS1waWNrZXInO1xuXG4vLyBUT0RPOiB0aW1lem9uZSBwcm9jZXNzXG5leHBvcnQgY2xhc3MgRGF0ZVRpbWVQaWNrZXJVdGlsIHtcbiAgLyoqXG4gICAqIEN1cnJlbnQgbG9jYWwgdGltZVxuICAgKlxuICAgKiDlvZPliY3mnKzlnLDml7bpl7RcbiAgICovXG4gIGdldCBub3coKTogRGF0ZSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKCk7XG4gIH1cbiAgLyoqXG4gICAqIEN1cnJlbnQgbG9jYWwgZGF0ZSAobm90IGluY2x1ZGluZyB0aW1lIHBhcnQpXG4gICAqXG4gICAqIOW9k+WJjeacrOWcsOaXpeacn++8iOS4jeWMheWQq+aXtumXtOmDqOWIhu+8iVxuICAgKi9cbiAgZ2V0IGRhdGUoKTogRGF0ZSB7XG4gICAgcmV0dXJuIHRoaXMucmVtb3ZlVGltZSh0aGlzLm5vdyk7XG4gIH1cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgdGltZSBwYXJ0IG9mIHRoZSBkYXRlXG4gICAqXG4gICAqIOenu+mZpOaXpeacn+eahOaXtumXtOmDqOWIhlxuICAgKi9cbiAgcmVtb3ZlVGltZShkOiBEYXRlKTogRGF0ZSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGQudG9EYXRlU3RyaW5nKCkpO1xuICB9XG4gIC8qKlxuICAgKiBGb3JtYXQgZGF0ZS10aW1lXG4gICAqXG4gICAqIOagvOW8j+WMluaXpeacn1xuICAgKi9cbiAgZm9ybWF0KGQ6IG51bWJlciB8IERhdGUsIGZvcm1hdFN0cmluZzogc3RyaW5nID0gJ3l5eXktTU0tZGQgSEg6bW06c3MnKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZm9ybWF0KGQsIGZvcm1hdFN0cmluZyk7XG4gIH1cbiAgcHJpdmF0ZSBnZW5UaWNrKGNvdW50OiBudW1iZXIpOiBudW1iZXJbXSB7XG4gICAgcmV0dXJuIG5ldyBBcnJheShjb3VudCkuZmlsbCgwKS5tYXAoKF8sIGlkeCkgPT4gaWR4KTtcbiAgfVxuICAvKipcbiAgICogQ2FsY3VsYXRlIHRoZSBudW1iZXIgb2YgZGF5cyBiZXR3ZWVuIHR3byBkYXRlcywgYDBgIG1lYW5zIHRoZSBzYW1lIGRheVxuICAgKlxuICAgKiDorqHnrpfkuKTkuKrml6XmnJ/nm7jlt67lpKnmlbDvvIxgMGAg6KGo56S65ZCM5LiA5aSpXG4gICAqL1xuICBnZXREaWZmRGF5cyhkYXRlTGVmdDogRGF0ZSB8IG51bWJlciwgZGF0ZVJpZ2h0PzogRGF0ZSB8IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhkYXRlTGVmdCwgdHlwZW9mIGRhdGVSaWdodCA9PT0gJ251bWJlcicgPyBhZGREYXlzKHRoaXMuZGF0ZSwgZGF0ZVJpZ2h0KSA6IGRhdGVSaWdodCB8fCB0aGlzLmRhdGUpO1xuICB9XG4gIC8qKlxuICAgKiBEaXNhYmxlZCBCZWZvcmUgZGF0ZSAoRGVmYXVsdDogdG9kYXkpLCBHZW5lcmFsbHkgc2VydmVzIGBuekRpc2FibGVkRGF0ZWBcbiAgICpcbiAgICog56aB55So5LmL5YmN5pel5pyf77yI6buY6K6k77ya5LuK5aSp77yJ77yM5LiA6Iis5pyN5Yqh5LqOIGBuekRpc2FibGVkRGF0ZWBcbiAgICovXG4gIGRpc2FibGVkQmVmb3JlRGF0ZShvcHRpb25zPzogeyBvZmZzZXREYXlzPzogRGF0ZSB8IG51bWJlciB9KTogRGlzYWJsZWREYXRlRm4ge1xuICAgIHJldHVybiAoZCk6IGJvb2xlYW4gPT4gdGhpcy5nZXREaWZmRGF5cyhkLCBvcHRpb25zPy5vZmZzZXREYXlzKSA8IDA7XG4gIH1cbiAgLyoqXG4gICAqIERpc2FibGVkIEFmdGVyIGRhdGUgKERlZmF1bHQ6IHRvZGF5KSwgR2VuZXJhbGx5IHNlcnZlcyBgbnpEaXNhYmxlZERhdGVgXG4gICAqXG4gICAqIOemgeeUqOS5i+WQjuaXpeacn++8iOm7mOiupO+8muS7iuWkqe+8ie+8jOS4gOiIrOacjeWKoeS6jiBgbnpEaXNhYmxlZERhdGVgXG4gICAqL1xuICBkaXNhYmxlZEFmdGVyRGF0ZShvcHRpb25zPzogeyBvZmZzZXREYXlzPzogRGF0ZSB8IG51bWJlciB9KTogRGlzYWJsZWREYXRlRm4ge1xuICAgIHJldHVybiAoZCk6IGJvb2xlYW4gPT4gdGhpcy5nZXREaWZmRGF5cyhkLCBvcHRpb25zPy5vZmZzZXREYXlzKSA+IDA7XG4gIH1cbiAgcHJpdmF0ZSBiYXNlRGlzYWJsZWRUaW1lKHR5cGU6ICdiZWZvcmUnIHwgJ2FmdGVyJywgb2Zmc2V0U2Vjb25kcz86IG51bWJlcik6IERpc2FibGVkVGltZUZuIHtcbiAgICBjb25zdCB0aWNrMjQgPSB0aGlzLmdlblRpY2soMjQpO1xuICAgIGNvbnN0IHRpY2s2MCA9IHRoaXMuZ2VuVGljayg2MCk7XG4gICAgcmV0dXJuIChjdXJyZW50KTogRGlzYWJsZWRUaW1lQ29uZmlnID0+IHtcbiAgICAgIGNvbnN0IGN1ciA9IGN1cnJlbnQgYXMgRGF0ZTtcbiAgICAgIGlmIChjdXIgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4ge30gYXMgYW55O1xuICAgICAgfVxuICAgICAgY29uc3Qgbm93ID0gYWRkU2Vjb25kcyh0aGlzLm5vdywgb2Zmc2V0U2Vjb25kcyB8fCAwKTtcbiAgICAgIGNvbnN0IG5vd0hvdXJzID0gbm93LmdldEhvdXJzKCk7XG4gICAgICBjb25zdCBub3dNaW51dGVzID0gbm93LmdldE1pbnV0ZXMoKTtcbiAgICAgIGNvbnN0IGN1ckhvdXJzID0gY3VyLmdldEhvdXJzKCk7XG4gICAgICBjb25zdCBpc1RvZGF5ID0gdGhpcy5nZXREaWZmRGF5cyh0aGlzLnJlbW92ZVRpbWUoY3VyKSkgPT09IDA7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuekRpc2FibGVkSG91cnM6ICgpID0+IHtcbiAgICAgICAgICBpZiAoIWlzVG9kYXkpIHJldHVybiBbXTtcbiAgICAgICAgICByZXR1cm4gdHlwZSA9PT0gJ2JlZm9yZScgPyB0aWNrMjQuc2xpY2UoMCwgbm93SG91cnMpIDogdGljazI0LnNsaWNlKG5vd0hvdXJzICsgMSk7XG4gICAgICAgIH0sXG4gICAgICAgIG56RGlzYWJsZWRNaW51dGVzOiAoKSA9PiB7XG4gICAgICAgICAgaWYgKGlzVG9kYXkgJiYgY3VySG91cnMgPT09IG5vd0hvdXJzKSB7XG4gICAgICAgICAgICByZXR1cm4gdHlwZSA9PT0gJ2JlZm9yZScgPyB0aWNrNjAuc2xpY2UoMCwgbm93TWludXRlcykgOiB0aWNrNjAuc2xpY2Uobm93TWludXRlcyArIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH0sXG4gICAgICAgIG56RGlzYWJsZWRTZWNvbmRzOiAoKSA9PiB7XG4gICAgICAgICAgaWYgKGlzVG9kYXkgJiYgY3VySG91cnMgPT09IG5vd0hvdXJzICYmIGN1ci5nZXRNaW51dGVzKCkgPT09IG5vd01pbnV0ZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vd1NlY29uZHMgPSBub3cuZ2V0U2Vjb25kcygpO1xuICAgICAgICAgICAgcmV0dXJuIHR5cGUgPT09ICdiZWZvcmUnID8gdGljazYwLnNsaWNlKDAsIG5vd1NlY29uZHMpIDogdGljazYwLnNsaWNlKG5vd1NlY29uZHMgKyAxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBEaXNhYmxlZCBCZWZvcmUgdGltZSAoRGVmYXVsdDogbm93KSwgR2VuZXJhbGx5IHNlcnZlcyBgbnpEaXNhYmxlZFRpbWVgXG4gICAqXG4gICAqIOemgeeUqOS5i+WJjeaXtumXtO+8iOm7mOiupO+8mueOsOWcqO+8ie+8jOS4gOiIrOacjeWKoeS6jiBgbnpEaXNhYmxlZFRpbWVgXG4gICAqL1xuICBkaXNhYmxlZEJlZm9yZVRpbWUob3B0aW9ucz86IHsgb2Zmc2V0U2Vjb25kcz86IG51bWJlciB9KTogRGlzYWJsZWRUaW1lRm4ge1xuICAgIHJldHVybiB0aGlzLmJhc2VEaXNhYmxlZFRpbWUoJ2JlZm9yZScsIG9wdGlvbnM/Lm9mZnNldFNlY29uZHMpO1xuICB9XG4gIC8qKlxuICAgKiBEaXNhYmxlZCBBZnRlciB0aW1lIChEZWZhdWx0OiBub3cpLCBHZW5lcmFsbHkgc2VydmVzIGBuekRpc2FibGVkVGltZWBcbiAgICpcbiAgICog56aB55So5LmL5ZCO5pe26Ze077yI6buY6K6k77ya546w5Zyo77yJ77yM5LiA6Iis5pyN5Yqh5LqOIGBuekRpc2FibGVkVGltZWBcbiAgICovXG4gIGRpc2FibGVkQWZ0ZXJUaW1lKG9wdGlvbnM/OiB7IG9mZnNldFNlY29uZHM/OiBudW1iZXIgfSk6IERpc2FibGVkVGltZUZuIHtcbiAgICByZXR1cm4gdGhpcy5iYXNlRGlzYWJsZWRUaW1lKCdhZnRlcicsIG9wdGlvbnM/Lm9mZnNldFNlY29uZHMpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBkYXRlVGltZVBpY2tlclV0aWwgPSBuZXcgRGF0ZVRpbWVQaWNrZXJVdGlsKCk7XG4iXX0=