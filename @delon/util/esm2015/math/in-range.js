import { assertNumber } from '@delon/util/other';
/**
 * Checks if `value` is between `start` and `end` to, but not including `end`. If `end` is not specified, it's set to start with `start` then set to `0`. If `start` is greater than `end` the params are swapped to support negative ranges.
 *
 * 检查 `value` 是否在 `start` 与 `end` 之间，但不包括 `end`。 如果 `end` 没有指定，那么 `start` 设置为 `0`。 如果 `start` 大于 `end`，那么参数会交换以便支持负范围。
 * ```ts
 * inRange(3, 2, 4); // true
 * inRange(4, 8); // true
 * inRange(4, 2); // false
 * inRange(2, 2); // false
 * inRange(1.2, 2); // true
 * inRange(-3, -2, -6); // true
 * ```
 */
export function inRange(value, start, end) {
    if (end === undefined) {
        end = start;
        start = 0;
    }
    assertNumber(value);
    assertNumber(start);
    assertNumber(end);
    return value >= Math.min(start, end) && value < Math.max(start, end);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tcmFuZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy91dGlsL21hdGgvaW4tcmFuZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpEOzs7Ozs7Ozs7Ozs7R0FZRztBQUNILE1BQU0sVUFBVSxPQUFPLENBQUMsS0FBYSxFQUFFLEtBQWEsRUFBRSxHQUFZO0lBQ2hFLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtRQUNyQixHQUFHLEdBQUcsS0FBSyxDQUFDO1FBQ1osS0FBSyxHQUFHLENBQUMsQ0FBQztLQUNYO0lBQ0QsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BCLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQixZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbEIsT0FBTyxLQUFLLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhc3NlcnROdW1iZXIgfSBmcm9tICdAZGVsb24vdXRpbC9vdGhlcic7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYmV0d2VlbiBgc3RhcnRgIGFuZCBgZW5kYCB0bywgYnV0IG5vdCBpbmNsdWRpbmcgYGVuZGAuIElmIGBlbmRgIGlzIG5vdCBzcGVjaWZpZWQsIGl0J3Mgc2V0IHRvIHN0YXJ0IHdpdGggYHN0YXJ0YCB0aGVuIHNldCB0byBgMGAuIElmIGBzdGFydGAgaXMgZ3JlYXRlciB0aGFuIGBlbmRgIHRoZSBwYXJhbXMgYXJlIHN3YXBwZWQgdG8gc3VwcG9ydCBuZWdhdGl2ZSByYW5nZXMuXG4gKlxuICog5qOA5p+lIGB2YWx1ZWAg5piv5ZCm5ZyoIGBzdGFydGAg5LiOIGBlbmRgIOS5i+mXtO+8jOS9huS4jeWMheaLrCBgZW5kYOOAgiDlpoLmnpwgYGVuZGAg5rKh5pyJ5oyH5a6a77yM6YKj5LmIIGBzdGFydGAg6K6+572u5Li6IGAwYOOAgiDlpoLmnpwgYHN0YXJ0YCDlpKfkuo4gYGVuZGDvvIzpgqPkuYjlj4LmlbDkvJrkuqTmjaLku6Xkvr/mlK/mjIHotJ/ojIPlm7TjgIJcbiAqIGBgYHRzXG4gKiBpblJhbmdlKDMsIDIsIDQpOyAvLyB0cnVlXG4gKiBpblJhbmdlKDQsIDgpOyAvLyB0cnVlXG4gKiBpblJhbmdlKDQsIDIpOyAvLyBmYWxzZVxuICogaW5SYW5nZSgyLCAyKTsgLy8gZmFsc2VcbiAqIGluUmFuZ2UoMS4yLCAyKTsgLy8gdHJ1ZVxuICogaW5SYW5nZSgtMywgLTIsIC02KTsgLy8gdHJ1ZVxuICogYGBgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpblJhbmdlKHZhbHVlOiBudW1iZXIsIHN0YXJ0OiBudW1iZXIsIGVuZD86IG51bWJlcik6IGJvb2xlYW4ge1xuICBpZiAoZW5kID09PSB1bmRlZmluZWQpIHtcbiAgICBlbmQgPSBzdGFydDtcbiAgICBzdGFydCA9IDA7XG4gIH1cbiAgYXNzZXJ0TnVtYmVyKHZhbHVlKTtcbiAgYXNzZXJ0TnVtYmVyKHN0YXJ0KTtcbiAgYXNzZXJ0TnVtYmVyKGVuZCk7XG4gIHJldHVybiB2YWx1ZSA+PSBNYXRoLm1pbihzdGFydCwgZW5kKSAmJiB2YWx1ZSA8IE1hdGgubWF4KHN0YXJ0LCBlbmQpO1xufVxuIl19