/**
 * @fileoverview added by tsickle
 * Generated from: src/time/time.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import addDays from 'date-fns/addDays';
import endOfDay from 'date-fns/endOfDay';
import endOfMonth from 'date-fns/endOfMonth';
import endOfWeek from 'date-fns/endOfWeek';
import endOfYear from 'date-fns/endOfYear';
import parseISO from 'date-fns/parseISO';
import startOfDay from 'date-fns/startOfDay';
import startOfMonth from 'date-fns/startOfMonth';
import startOfWeek from 'date-fns/startOfWeek';
import startOfYear from 'date-fns/startOfYear';
import subMonths from 'date-fns/subMonths';
import subWeeks from 'date-fns/subWeeks';
import subYears from 'date-fns/subYears';
/**
 * 获取时间范围
 * @param {?} type 类型，带 `-` 表示过去一个时间，若指定 `number` 表示天数
 * @param {?=} time 开始时间
 * @return {?}
 */
export function getTimeDistance(type, time) {
    time = time ? (typeof time === 'string' ? parseISO(time) : new Date(time)) : new Date();
    /** @type {?} */
    var options = { weekStartsOn: 1 };
    /** @type {?} */
    var res;
    switch (type) {
        case 'today':
            res = [time, time];
            break;
        case '-today':
            res = [addDays(time, -1), time];
            break;
        case 'yesterday':
            res = [addDays(time, -1), addDays(time, -1)];
            break;
        case 'week':
            res = [startOfWeek(time, options), endOfWeek(time, options)];
            break;
        case '-week':
            res = [startOfWeek(subWeeks(time, 1), options), endOfWeek(subWeeks(time, 1), options)];
            break;
        case 'month':
            res = [startOfMonth(time), endOfMonth(time)];
            break;
        case '-month':
            res = [startOfMonth(subMonths(time, 1)), endOfMonth(subMonths(time, 1))];
            break;
        case 'year':
            res = [startOfYear(time), endOfYear(time)];
            break;
        case '-year':
            res = [startOfYear(subYears(time, 1)), endOfYear(subYears(time, 1))];
            break;
        default:
            res = type > 0 ? [time, addDays(time, type)] : [addDays(time, type), time];
            break;
    }
    return fixEndTimeOfRange(res);
}
/**
 * fix time is the most, big value
 * @param {?} dates
 * @return {?}
 */
export function fixEndTimeOfRange(dates) {
    return [startOfDay(dates[0]), endOfDay(dates[1])];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi91dGlsLyIsInNvdXJjZXMiOlsic3JjL3RpbWUvdGltZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sT0FBTyxNQUFNLGtCQUFrQixDQUFDO0FBQ3ZDLE9BQU8sUUFBUSxNQUFNLG1CQUFtQixDQUFDO0FBQ3pDLE9BQU8sVUFBVSxNQUFNLHFCQUFxQixDQUFDO0FBQzdDLE9BQU8sU0FBUyxNQUFNLG9CQUFvQixDQUFDO0FBQzNDLE9BQU8sU0FBUyxNQUFNLG9CQUFvQixDQUFDO0FBQzNDLE9BQU8sUUFBUSxNQUFNLG1CQUFtQixDQUFDO0FBQ3pDLE9BQU8sVUFBVSxNQUFNLHFCQUFxQixDQUFDO0FBQzdDLE9BQU8sWUFBWSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sV0FBVyxNQUFNLHNCQUFzQixDQUFDO0FBQy9DLE9BQU8sV0FBVyxNQUFNLHNCQUFzQixDQUFDO0FBQy9DLE9BQU8sU0FBUyxNQUFNLG9CQUFvQixDQUFDO0FBQzNDLE9BQU8sUUFBUSxNQUFNLG1CQUFtQixDQUFDO0FBQ3pDLE9BQU8sUUFBUSxNQUFNLG1CQUFtQixDQUFDOzs7Ozs7O0FBT3pDLE1BQU0sVUFBVSxlQUFlLENBQzdCLElBQTBHLEVBQzFHLElBQTZCO0lBRTdCLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7O1FBQ2xGLE9BQU8sR0FBd0IsRUFBRSxZQUFZLEVBQUUsQ0FBQyxFQUFFOztRQUVwRCxHQUFpQjtJQUNyQixRQUFRLElBQUksRUFBRTtRQUNaLEtBQUssT0FBTztZQUNWLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNuQixNQUFNO1FBQ1IsS0FBSyxRQUFRO1lBQ1gsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ2hDLE1BQU07UUFDUixLQUFLLFdBQVc7WUFDZCxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0MsTUFBTTtRQUNSLEtBQUssTUFBTTtZQUNULEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEVBQUUsU0FBUyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQzdELE1BQU07UUFDUixLQUFLLE9BQU87WUFDVixHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsRUFBRSxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3ZGLE1BQU07UUFDUixLQUFLLE9BQU87WUFDVixHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDN0MsTUFBTTtRQUNSLEtBQUssUUFBUTtZQUNYLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pFLE1BQU07UUFDUixLQUFLLE1BQU07WUFDVCxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDM0MsTUFBTTtRQUNSLEtBQUssT0FBTztZQUNWLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JFLE1BQU07UUFDUjtZQUNFLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUMzRSxNQUFNO0tBQ1Q7SUFDRCxPQUFPLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2hDLENBQUM7Ozs7OztBQUtELE1BQU0sVUFBVSxpQkFBaUIsQ0FBQyxLQUFtQjtJQUNuRCxPQUFPLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3BELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYWRkRGF5cyBmcm9tICdkYXRlLWZucy9hZGREYXlzJztcbmltcG9ydCBlbmRPZkRheSBmcm9tICdkYXRlLWZucy9lbmRPZkRheSc7XG5pbXBvcnQgZW5kT2ZNb250aCBmcm9tICdkYXRlLWZucy9lbmRPZk1vbnRoJztcbmltcG9ydCBlbmRPZldlZWsgZnJvbSAnZGF0ZS1mbnMvZW5kT2ZXZWVrJztcbmltcG9ydCBlbmRPZlllYXIgZnJvbSAnZGF0ZS1mbnMvZW5kT2ZZZWFyJztcbmltcG9ydCBwYXJzZUlTTyBmcm9tICdkYXRlLWZucy9wYXJzZUlTTyc7XG5pbXBvcnQgc3RhcnRPZkRheSBmcm9tICdkYXRlLWZucy9zdGFydE9mRGF5JztcbmltcG9ydCBzdGFydE9mTW9udGggZnJvbSAnZGF0ZS1mbnMvc3RhcnRPZk1vbnRoJztcbmltcG9ydCBzdGFydE9mV2VlayBmcm9tICdkYXRlLWZucy9zdGFydE9mV2Vlayc7XG5pbXBvcnQgc3RhcnRPZlllYXIgZnJvbSAnZGF0ZS1mbnMvc3RhcnRPZlllYXInO1xuaW1wb3J0IHN1Yk1vbnRocyBmcm9tICdkYXRlLWZucy9zdWJNb250aHMnO1xuaW1wb3J0IHN1YldlZWtzIGZyb20gJ2RhdGUtZm5zL3N1YldlZWtzJztcbmltcG9ydCBzdWJZZWFycyBmcm9tICdkYXRlLWZucy9zdWJZZWFycyc7XG5cbi8qKlxuICog6I635Y+W5pe26Ze06IyD5Zu0XG4gKiBAcGFyYW0gdHlwZSDnsbvlnovvvIzluKYgYC1gIOihqOekuui/h+WOu+S4gOS4quaXtumXtO+8jOiLpeaMh+WumiBgbnVtYmVyYCDooajnpLrlpKnmlbBcbiAqIEBwYXJhbSB0aW1lIOW8gOWni+aXtumXtFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGltZURpc3RhbmNlKFxuICB0eXBlOiAndG9kYXknIHwgJy10b2RheScgfCAneWVzdGVyZGF5JyB8ICd3ZWVrJyB8ICctd2VlaycgfCAnbW9udGgnIHwgJy1tb250aCcgfCAneWVhcicgfCAnLXllYXInIHwgbnVtYmVyLFxuICB0aW1lPzogRGF0ZSB8IHN0cmluZyB8IG51bWJlcixcbik6IFtEYXRlLCBEYXRlXSB7XG4gIHRpbWUgPSB0aW1lID8gKHR5cGVvZiB0aW1lID09PSAnc3RyaW5nJyA/IHBhcnNlSVNPKHRpbWUpIDogbmV3IERhdGUodGltZSkpIDogbmV3IERhdGUoKTtcbiAgY29uc3Qgb3B0aW9uczogeyB3ZWVrU3RhcnRzT246IDEgfSA9IHsgd2Vla1N0YXJ0c09uOiAxIH07XG5cbiAgbGV0IHJlczogW0RhdGUsIERhdGVdO1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICd0b2RheSc6XG4gICAgICByZXMgPSBbdGltZSwgdGltZV07XG4gICAgICBicmVhaztcbiAgICBjYXNlICctdG9kYXknOlxuICAgICAgcmVzID0gW2FkZERheXModGltZSwgLTEpLCB0aW1lXTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3llc3RlcmRheSc6XG4gICAgICByZXMgPSBbYWRkRGF5cyh0aW1lLCAtMSksIGFkZERheXModGltZSwgLTEpXTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3dlZWsnOlxuICAgICAgcmVzID0gW3N0YXJ0T2ZXZWVrKHRpbWUsIG9wdGlvbnMpLCBlbmRPZldlZWsodGltZSwgb3B0aW9ucyldO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnLXdlZWsnOlxuICAgICAgcmVzID0gW3N0YXJ0T2ZXZWVrKHN1YldlZWtzKHRpbWUsIDEpLCBvcHRpb25zKSwgZW5kT2ZXZWVrKHN1YldlZWtzKHRpbWUsIDEpLCBvcHRpb25zKV07XG4gICAgICBicmVhaztcbiAgICBjYXNlICdtb250aCc6XG4gICAgICByZXMgPSBbc3RhcnRPZk1vbnRoKHRpbWUpLCBlbmRPZk1vbnRoKHRpbWUpXTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJy1tb250aCc6XG4gICAgICByZXMgPSBbc3RhcnRPZk1vbnRoKHN1Yk1vbnRocyh0aW1lLCAxKSksIGVuZE9mTW9udGgoc3ViTW9udGhzKHRpbWUsIDEpKV07XG4gICAgICBicmVhaztcbiAgICBjYXNlICd5ZWFyJzpcbiAgICAgIHJlcyA9IFtzdGFydE9mWWVhcih0aW1lKSwgZW5kT2ZZZWFyKHRpbWUpXTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJy15ZWFyJzpcbiAgICAgIHJlcyA9IFtzdGFydE9mWWVhcihzdWJZZWFycyh0aW1lLCAxKSksIGVuZE9mWWVhcihzdWJZZWFycyh0aW1lLCAxKSldO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJlcyA9IHR5cGUgPiAwID8gW3RpbWUsIGFkZERheXModGltZSwgdHlwZSldIDogW2FkZERheXModGltZSwgdHlwZSksIHRpbWVdO1xuICAgICAgYnJlYWs7XG4gIH1cbiAgcmV0dXJuIGZpeEVuZFRpbWVPZlJhbmdlKHJlcyk7XG59XG5cbi8qKlxuICogZml4IHRpbWUgaXMgdGhlIG1vc3QsIGJpZyB2YWx1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZml4RW5kVGltZU9mUmFuZ2UoZGF0ZXM6IFtEYXRlLCBEYXRlXSk6IFtEYXRlLCBEYXRlXSB7XG4gIHJldHVybiBbc3RhcnRPZkRheShkYXRlc1swXSksIGVuZE9mRGF5KGRhdGVzWzFdKV07XG59XG4iXX0=