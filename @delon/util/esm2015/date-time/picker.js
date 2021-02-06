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
                },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlja2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvdXRpbC9kYXRlLXRpbWUvcGlja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sT0FBTyxNQUFNLGtCQUFrQixDQUFDO0FBQ3ZDLE9BQU8sVUFBVSxNQUFNLHFCQUFxQixDQUFDO0FBQzdDLE9BQU8sd0JBQXdCLE1BQU0sbUNBQW1DLENBQUM7QUFDekUsT0FBTyxNQUFNLE1BQU0saUJBQWlCLENBQUM7QUFHckMseUJBQXlCO0FBQ3pCLE1BQU0sT0FBTyxrQkFBa0I7SUFDN0I7Ozs7T0FJRztJQUNILElBQUksR0FBRztRQUNMLE9BQU8sSUFBSSxJQUFJLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBQ0Q7Ozs7T0FJRztJQUNILElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUNEOzs7O09BSUc7SUFDSCxVQUFVLENBQUMsQ0FBTztRQUNoQixPQUFPLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLENBQWdCLEVBQUUsZUFBdUIscUJBQXFCO1FBQ25FLE9BQU8sTUFBTSxDQUFDLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBQ08sT0FBTyxDQUFDLEtBQWE7UUFDM0IsT0FBTyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUNEOzs7O09BSUc7SUFDSCxXQUFXLENBQUMsUUFBdUIsRUFBRSxTQUF5QjtRQUM1RCxPQUFPLHdCQUF3QixDQUFDLFFBQVEsRUFBRSxPQUFPLFNBQVMsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BJLENBQUM7SUFDRDs7OztPQUlHO0lBQ0gsa0JBQWtCLENBQUMsT0FBd0M7UUFDekQsT0FBTyxDQUFDLENBQUMsRUFBVyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBQ0Q7Ozs7T0FJRztJQUNILGlCQUFpQixDQUFDLE9BQXdDO1FBQ3hELE9BQU8sQ0FBQyxDQUFDLEVBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUNPLGdCQUFnQixDQUFDLElBQXdCLEVBQUUsYUFBc0I7UUFDdkUsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNoQyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2hDLE9BQU8sQ0FBQyxPQUFPLEVBQXNCLEVBQUU7WUFDckMsTUFBTSxHQUFHLEdBQUcsT0FBZSxDQUFDO1lBQzVCLElBQUksR0FBRyxJQUFJLElBQUksRUFBRTtnQkFDZixPQUFPLEVBQVMsQ0FBQzthQUNsQjtZQUNELE1BQU0sR0FBRyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLGFBQWEsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNyRCxNQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDaEMsTUFBTSxVQUFVLEdBQUcsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3BDLE1BQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNoQyxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0QsT0FBTztnQkFDTCxlQUFlLEVBQUUsR0FBRyxFQUFFO29CQUNwQixJQUFJLENBQUMsT0FBTzt3QkFBRSxPQUFPLEVBQUUsQ0FBQztvQkFDeEIsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BGLENBQUM7Z0JBQ0QsaUJBQWlCLEVBQUUsR0FBRyxFQUFFO29CQUN0QixJQUFJLE9BQU8sSUFBSSxRQUFRLEtBQUssUUFBUSxFQUFFO3dCQUNwQyxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQztxQkFDdkY7b0JBQ0QsT0FBTyxFQUFFLENBQUM7Z0JBQ1osQ0FBQztnQkFDRCxpQkFBaUIsRUFBRSxHQUFHLEVBQUU7b0JBQ3RCLElBQUksT0FBTyxJQUFJLFFBQVEsS0FBSyxRQUFRLElBQUksR0FBRyxDQUFDLFVBQVUsRUFBRSxLQUFLLFVBQVUsRUFBRTt3QkFDdkUsTUFBTSxVQUFVLEdBQUcsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFDO3dCQUNwQyxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQztxQkFDdkY7b0JBQ0QsT0FBTyxFQUFFLENBQUM7Z0JBQ1osQ0FBQzthQUNGLENBQUM7UUFDSixDQUFDLENBQUM7SUFDSixDQUFDO0lBQ0Q7Ozs7T0FJRztJQUNILGtCQUFrQixDQUFDLE9BQW9DO1FBQ3JELE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsYUFBYSxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUNEOzs7O09BSUc7SUFDSCxpQkFBaUIsQ0FBQyxPQUFvQztRQUNwRCxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7Q0FDRjtBQUVELE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixHQUFHLElBQUksa0JBQWtCLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhZGREYXlzIGZyb20gJ2RhdGUtZm5zL2FkZERheXMnO1xuaW1wb3J0IGFkZFNlY29uZHMgZnJvbSAnZGF0ZS1mbnMvYWRkU2Vjb25kcyc7XG5pbXBvcnQgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzIGZyb20gJ2RhdGUtZm5zL2RpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyc7XG5pbXBvcnQgZm9ybWF0IGZyb20gJ2RhdGUtZm5zL2Zvcm1hdCc7XG5pbXBvcnQgeyBEaXNhYmxlZERhdGVGbiwgRGlzYWJsZWRUaW1lQ29uZmlnLCBEaXNhYmxlZFRpbWVGbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvZGF0ZS1waWNrZXInO1xuXG4vLyBUT0RPOiB0aW1lem9uZSBwcm9jZXNzXG5leHBvcnQgY2xhc3MgRGF0ZVRpbWVQaWNrZXJVdGlsIHtcbiAgLyoqXG4gICAqIEN1cnJlbnQgbG9jYWwgdGltZVxuICAgKlxuICAgKiDlvZPliY3mnKzlnLDml7bpl7RcbiAgICovXG4gIGdldCBub3coKTogRGF0ZSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKCk7XG4gIH1cbiAgLyoqXG4gICAqIEN1cnJlbnQgbG9jYWwgZGF0ZSAobm90IGluY2x1ZGluZyB0aW1lIHBhcnQpXG4gICAqXG4gICAqIOW9k+WJjeacrOWcsOaXpeacn++8iOS4jeWMheWQq+aXtumXtOmDqOWIhu+8iVxuICAgKi9cbiAgZ2V0IGRhdGUoKTogRGF0ZSB7XG4gICAgcmV0dXJuIHRoaXMucmVtb3ZlVGltZSh0aGlzLm5vdyk7XG4gIH1cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgdGltZSBwYXJ0IG9mIHRoZSBkYXRlXG4gICAqXG4gICAqIOenu+mZpOaXpeacn+eahOaXtumXtOmDqOWIhlxuICAgKi9cbiAgcmVtb3ZlVGltZShkOiBEYXRlKTogRGF0ZSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGQudG9EYXRlU3RyaW5nKCkpO1xuICB9XG4gIC8qKlxuICAgKiBGb3JtYXQgZGF0ZS10aW1lXG4gICAqXG4gICAqIOagvOW8j+WMluaXpeacn1xuICAgKi9cbiAgZm9ybWF0KGQ6IG51bWJlciB8IERhdGUsIGZvcm1hdFN0cmluZzogc3RyaW5nID0gJ3l5eXktTU0tZGQgSEg6bW06c3MnKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZm9ybWF0KGQsIGZvcm1hdFN0cmluZyk7XG4gIH1cbiAgcHJpdmF0ZSBnZW5UaWNrKGNvdW50OiBudW1iZXIpOiBudW1iZXJbXSB7XG4gICAgcmV0dXJuIG5ldyBBcnJheShjb3VudCkuZmlsbCgwKS5tYXAoKF8sIGlkeCkgPT4gaWR4KTtcbiAgfVxuICAvKipcbiAgICogQ2FsY3VsYXRlIHRoZSBudW1iZXIgb2YgZGF5cyBiZXR3ZWVuIHR3byBkYXRlcywgYDBgIG1lYW5zIHRoZSBzYW1lIGRheVxuICAgKlxuICAgKiDorqHnrpfkuKTkuKrml6XmnJ/nm7jlt67lpKnmlbDvvIxgMGAg6KGo56S65ZCM5LiA5aSpXG4gICAqL1xuICBnZXREaWZmRGF5cyhkYXRlTGVmdDogRGF0ZSB8IG51bWJlciwgZGF0ZVJpZ2h0PzogRGF0ZSB8IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhkYXRlTGVmdCwgdHlwZW9mIGRhdGVSaWdodCA9PT0gJ251bWJlcicgPyBhZGREYXlzKHRoaXMuZGF0ZSwgZGF0ZVJpZ2h0KSA6IGRhdGVSaWdodCB8fCB0aGlzLmRhdGUpO1xuICB9XG4gIC8qKlxuICAgKiBEaXNhYmxlZCBCZWZvcmUgZGF0ZSAoRGVmYXVsdDogdG9kYXkpLCBHZW5lcmFsbHkgc2VydmVzIGBuekRpc2FibGVkRGF0ZWBcbiAgICpcbiAgICog56aB55So5LmL5YmN5pel5pyf77yI6buY6K6k77ya5LuK5aSp77yJ77yM5LiA6Iis5pyN5Yqh5LqOIGBuekRpc2FibGVkRGF0ZWBcbiAgICovXG4gIGRpc2FibGVkQmVmb3JlRGF0ZShvcHRpb25zPzogeyBvZmZzZXREYXlzPzogRGF0ZSB8IG51bWJlciB9KTogRGlzYWJsZWREYXRlRm4ge1xuICAgIHJldHVybiAoZCk6IGJvb2xlYW4gPT4gdGhpcy5nZXREaWZmRGF5cyhkLCBvcHRpb25zPy5vZmZzZXREYXlzKSA8IDA7XG4gIH1cbiAgLyoqXG4gICAqIERpc2FibGVkIEFmdGVyIGRhdGUgKERlZmF1bHQ6IHRvZGF5KSwgR2VuZXJhbGx5IHNlcnZlcyBgbnpEaXNhYmxlZERhdGVgXG4gICAqXG4gICAqIOemgeeUqOS5i+WQjuaXpeacn++8iOm7mOiupO+8muS7iuWkqe+8ie+8jOS4gOiIrOacjeWKoeS6jiBgbnpEaXNhYmxlZERhdGVgXG4gICAqL1xuICBkaXNhYmxlZEFmdGVyRGF0ZShvcHRpb25zPzogeyBvZmZzZXREYXlzPzogRGF0ZSB8IG51bWJlciB9KTogRGlzYWJsZWREYXRlRm4ge1xuICAgIHJldHVybiAoZCk6IGJvb2xlYW4gPT4gdGhpcy5nZXREaWZmRGF5cyhkLCBvcHRpb25zPy5vZmZzZXREYXlzKSA+IDA7XG4gIH1cbiAgcHJpdmF0ZSBiYXNlRGlzYWJsZWRUaW1lKHR5cGU6ICdiZWZvcmUnIHwgJ2FmdGVyJywgb2Zmc2V0U2Vjb25kcz86IG51bWJlcik6IERpc2FibGVkVGltZUZuIHtcbiAgICBjb25zdCB0aWNrMjQgPSB0aGlzLmdlblRpY2soMjQpO1xuICAgIGNvbnN0IHRpY2s2MCA9IHRoaXMuZ2VuVGljayg2MCk7XG4gICAgcmV0dXJuIChjdXJyZW50KTogRGlzYWJsZWRUaW1lQ29uZmlnID0+IHtcbiAgICAgIGNvbnN0IGN1ciA9IGN1cnJlbnQgYXMgRGF0ZTtcbiAgICAgIGlmIChjdXIgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4ge30gYXMgYW55O1xuICAgICAgfVxuICAgICAgY29uc3Qgbm93ID0gYWRkU2Vjb25kcyh0aGlzLm5vdywgb2Zmc2V0U2Vjb25kcyB8fCAwKTtcbiAgICAgIGNvbnN0IG5vd0hvdXJzID0gbm93LmdldEhvdXJzKCk7XG4gICAgICBjb25zdCBub3dNaW51dGVzID0gbm93LmdldE1pbnV0ZXMoKTtcbiAgICAgIGNvbnN0IGN1ckhvdXJzID0gY3VyLmdldEhvdXJzKCk7XG4gICAgICBjb25zdCBpc1RvZGF5ID0gdGhpcy5nZXREaWZmRGF5cyh0aGlzLnJlbW92ZVRpbWUoY3VyKSkgPT09IDA7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuekRpc2FibGVkSG91cnM6ICgpID0+IHtcbiAgICAgICAgICBpZiAoIWlzVG9kYXkpIHJldHVybiBbXTtcbiAgICAgICAgICByZXR1cm4gdHlwZSA9PT0gJ2JlZm9yZScgPyB0aWNrMjQuc2xpY2UoMCwgbm93SG91cnMpIDogdGljazI0LnNsaWNlKG5vd0hvdXJzICsgMSk7XG4gICAgICAgIH0sXG4gICAgICAgIG56RGlzYWJsZWRNaW51dGVzOiAoKSA9PiB7XG4gICAgICAgICAgaWYgKGlzVG9kYXkgJiYgY3VySG91cnMgPT09IG5vd0hvdXJzKSB7XG4gICAgICAgICAgICByZXR1cm4gdHlwZSA9PT0gJ2JlZm9yZScgPyB0aWNrNjAuc2xpY2UoMCwgbm93TWludXRlcykgOiB0aWNrNjAuc2xpY2Uobm93TWludXRlcyArIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH0sXG4gICAgICAgIG56RGlzYWJsZWRTZWNvbmRzOiAoKSA9PiB7XG4gICAgICAgICAgaWYgKGlzVG9kYXkgJiYgY3VySG91cnMgPT09IG5vd0hvdXJzICYmIGN1ci5nZXRNaW51dGVzKCkgPT09IG5vd01pbnV0ZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vd1NlY29uZHMgPSBub3cuZ2V0U2Vjb25kcygpO1xuICAgICAgICAgICAgcmV0dXJuIHR5cGUgPT09ICdiZWZvcmUnID8gdGljazYwLnNsaWNlKDAsIG5vd1NlY29uZHMpIDogdGljazYwLnNsaWNlKG5vd1NlY29uZHMgKyAxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBEaXNhYmxlZCBCZWZvcmUgdGltZSAoRGVmYXVsdDogbm93KSwgR2VuZXJhbGx5IHNlcnZlcyBgbnpEaXNhYmxlZFRpbWVgXG4gICAqXG4gICAqIOemgeeUqOS5i+WJjeaXtumXtO+8iOm7mOiupO+8mueOsOWcqO+8ie+8jOS4gOiIrOacjeWKoeS6jiBgbnpEaXNhYmxlZFRpbWVgXG4gICAqL1xuICBkaXNhYmxlZEJlZm9yZVRpbWUob3B0aW9ucz86IHsgb2Zmc2V0U2Vjb25kcz86IG51bWJlciB9KTogRGlzYWJsZWRUaW1lRm4ge1xuICAgIHJldHVybiB0aGlzLmJhc2VEaXNhYmxlZFRpbWUoJ2JlZm9yZScsIG9wdGlvbnM/Lm9mZnNldFNlY29uZHMpO1xuICB9XG4gIC8qKlxuICAgKiBEaXNhYmxlZCBBZnRlciB0aW1lIChEZWZhdWx0OiBub3cpLCBHZW5lcmFsbHkgc2VydmVzIGBuekRpc2FibGVkVGltZWBcbiAgICpcbiAgICog56aB55So5LmL5ZCO5pe26Ze077yI6buY6K6k77ya546w5Zyo77yJ77yM5LiA6Iis5pyN5Yqh5LqOIGBuekRpc2FibGVkVGltZWBcbiAgICovXG4gIGRpc2FibGVkQWZ0ZXJUaW1lKG9wdGlvbnM/OiB7IG9mZnNldFNlY29uZHM/OiBudW1iZXIgfSk6IERpc2FibGVkVGltZUZuIHtcbiAgICByZXR1cm4gdGhpcy5iYXNlRGlzYWJsZWRUaW1lKCdhZnRlcicsIG9wdGlvbnM/Lm9mZnNldFNlY29uZHMpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBkYXRlVGltZVBpY2tlclV0aWwgPSBuZXcgRGF0ZVRpbWVQaWNrZXJVdGlsKCk7XG4iXX0=