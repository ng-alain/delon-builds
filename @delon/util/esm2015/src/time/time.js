/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import addDays from 'date-fns/add_days';
import endOfMonth from 'date-fns/end_of_month';
import endOfWeek from 'date-fns/end_of_week';
import endOfYear from 'date-fns/end_of_year';
import parse from 'date-fns/parse';
import startOfMonth from 'date-fns/start_of_month';
import startOfWeek from 'date-fns/start_of_week';
import startOfYear from 'date-fns/start_of_year';
import subMonths from 'date-fns/sub_months';
import subWeeks from 'date-fns/sub_weeks';
import subYears from 'date-fns/sub_years';
/**
 * 获取时间范围
 * @param {?} type 类型，带 `-` 表示过去一个时间，若指定 `number` 表示天数
 * @param {?=} time 开始时间
 * @return {?}
 */
export function getTimeDistance(type, time) {
    time = parse(time || new Date());
    switch (type) {
        case 'today':
            return [time, time];
        case '-today':
            return [addDays(time, -1), time];
        case 'week':
            return [startOfWeek(time), endOfWeek(time)];
        case '-week':
            return [startOfWeek(subWeeks(time, 1)), endOfWeek(subWeeks(time, 1))];
        case 'month':
            return [startOfMonth(time), endOfMonth(time)];
        case '-month':
            return [startOfMonth(subMonths(time, 1)), endOfMonth(subMonths(time, 1))];
        case 'year':
            return [startOfYear(time), endOfYear(time)];
        case '-year':
            return [startOfYear(subYears(time, 1)), endOfYear(subYears(time, 1))];
        default:
            return type > 0 ? [time, addDays(time, type)] : [addDays(time, type), time];
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi91dGlsLyIsInNvdXJjZXMiOlsic3JjL3RpbWUvdGltZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxPQUFPLE1BQU0sbUJBQW1CLENBQUM7QUFDeEMsT0FBTyxVQUFVLE1BQU0sdUJBQXVCLENBQUM7QUFDL0MsT0FBTyxTQUFTLE1BQU0sc0JBQXNCLENBQUM7QUFDN0MsT0FBTyxTQUFTLE1BQU0sc0JBQXNCLENBQUM7QUFDN0MsT0FBTyxLQUFLLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkMsT0FBTyxZQUFZLE1BQU0seUJBQXlCLENBQUM7QUFDbkQsT0FBTyxXQUFXLE1BQU0sd0JBQXdCLENBQUM7QUFDakQsT0FBTyxXQUFXLE1BQU0sd0JBQXdCLENBQUM7QUFDakQsT0FBTyxTQUFTLE1BQU0scUJBQXFCLENBQUM7QUFDNUMsT0FBTyxRQUFRLE1BQU0sb0JBQW9CLENBQUM7QUFDMUMsT0FBTyxRQUFRLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7QUFPMUMsTUFBTSxVQUFVLGVBQWUsQ0FDN0IsSUFBNEYsRUFDNUYsSUFBNkI7SUFFN0IsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBRWpDLFFBQVEsSUFBSSxFQUFFO1FBQ1osS0FBSyxPQUFPO1lBQ1YsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN0QixLQUFLLFFBQVE7WUFDWCxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ25DLEtBQUssTUFBTTtZQUNULE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDOUMsS0FBSyxPQUFPO1lBQ1YsT0FBTyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLEtBQUssT0FBTztZQUNWLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDaEQsS0FBSyxRQUFRO1lBQ1gsT0FBTyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVFLEtBQUssTUFBTTtZQUNULE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDOUMsS0FBSyxPQUFPO1lBQ1YsT0FBTyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hFO1lBQ0UsT0FBTyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztLQUMvRTtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYWRkRGF5cyBmcm9tICdkYXRlLWZucy9hZGRfZGF5cyc7XG5pbXBvcnQgZW5kT2ZNb250aCBmcm9tICdkYXRlLWZucy9lbmRfb2ZfbW9udGgnO1xuaW1wb3J0IGVuZE9mV2VlayBmcm9tICdkYXRlLWZucy9lbmRfb2Zfd2Vlayc7XG5pbXBvcnQgZW5kT2ZZZWFyIGZyb20gJ2RhdGUtZm5zL2VuZF9vZl95ZWFyJztcbmltcG9ydCBwYXJzZSBmcm9tICdkYXRlLWZucy9wYXJzZSc7XG5pbXBvcnQgc3RhcnRPZk1vbnRoIGZyb20gJ2RhdGUtZm5zL3N0YXJ0X29mX21vbnRoJztcbmltcG9ydCBzdGFydE9mV2VlayBmcm9tICdkYXRlLWZucy9zdGFydF9vZl93ZWVrJztcbmltcG9ydCBzdGFydE9mWWVhciBmcm9tICdkYXRlLWZucy9zdGFydF9vZl95ZWFyJztcbmltcG9ydCBzdWJNb250aHMgZnJvbSAnZGF0ZS1mbnMvc3ViX21vbnRocyc7XG5pbXBvcnQgc3ViV2Vla3MgZnJvbSAnZGF0ZS1mbnMvc3ViX3dlZWtzJztcbmltcG9ydCBzdWJZZWFycyBmcm9tICdkYXRlLWZucy9zdWJfeWVhcnMnO1xuXG4vKipcbiAqIOiOt+WPluaXtumXtOiMg+WbtFxuICogQHBhcmFtIHR5cGUg57G75Z6L77yM5bimIGAtYCDooajnpLrov4fljrvkuIDkuKrml7bpl7TvvIzoi6XmjIflrpogYG51bWJlcmAg6KGo56S65aSp5pWwXG4gKiBAcGFyYW0gdGltZSDlvIDlp4vml7bpl7RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFRpbWVEaXN0YW5jZShcbiAgdHlwZTogJ3RvZGF5JyB8ICctdG9kYXknIHwgJ3dlZWsnIHwgJy13ZWVrJyB8ICdtb250aCcgfCAnLW1vbnRoJyB8ICd5ZWFyJyB8ICcteWVhcicgfCBudW1iZXIsXG4gIHRpbWU/OiBEYXRlIHwgc3RyaW5nIHwgbnVtYmVyLFxuKTogW0RhdGUsIERhdGVdIHtcbiAgdGltZSA9IHBhcnNlKHRpbWUgfHwgbmV3IERhdGUoKSk7XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSAndG9kYXknOlxuICAgICAgcmV0dXJuIFt0aW1lLCB0aW1lXTtcbiAgICBjYXNlICctdG9kYXknOlxuICAgICAgcmV0dXJuIFthZGREYXlzKHRpbWUsIC0xKSwgdGltZV07XG4gICAgY2FzZSAnd2Vlayc6XG4gICAgICByZXR1cm4gW3N0YXJ0T2ZXZWVrKHRpbWUpLCBlbmRPZldlZWsodGltZSldO1xuICAgIGNhc2UgJy13ZWVrJzpcbiAgICAgIHJldHVybiBbc3RhcnRPZldlZWsoc3ViV2Vla3ModGltZSwgMSkpLCBlbmRPZldlZWsoc3ViV2Vla3ModGltZSwgMSkpXTtcbiAgICBjYXNlICdtb250aCc6XG4gICAgICByZXR1cm4gW3N0YXJ0T2ZNb250aCh0aW1lKSwgZW5kT2ZNb250aCh0aW1lKV07XG4gICAgY2FzZSAnLW1vbnRoJzpcbiAgICAgIHJldHVybiBbc3RhcnRPZk1vbnRoKHN1Yk1vbnRocyh0aW1lLCAxKSksIGVuZE9mTW9udGgoc3ViTW9udGhzKHRpbWUsIDEpKV07XG4gICAgY2FzZSAneWVhcic6XG4gICAgICByZXR1cm4gW3N0YXJ0T2ZZZWFyKHRpbWUpLCBlbmRPZlllYXIodGltZSldO1xuICAgIGNhc2UgJy15ZWFyJzpcbiAgICAgIHJldHVybiBbc3RhcnRPZlllYXIoc3ViWWVhcnModGltZSwgMSkpLCBlbmRPZlllYXIoc3ViWWVhcnModGltZSwgMSkpXTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHR5cGUgPiAwID8gW3RpbWUsIGFkZERheXModGltZSwgdHlwZSldIDogW2FkZERheXModGltZSwgdHlwZSksIHRpbWVdO1xuICB9XG59XG4iXX0=