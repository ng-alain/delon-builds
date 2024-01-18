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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tcmFuZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy91dGlsL21hdGgvaW4tcmFuZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWpEOzs7Ozs7Ozs7Ozs7R0FZRztBQUNILE1BQU0sVUFBVSxPQUFPLENBQUMsS0FBYSxFQUFFLEtBQWEsRUFBRSxHQUFZO0lBQ2hFLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRSxDQUFDO1FBQ3RCLEdBQUcsR0FBRyxLQUFLLENBQUM7UUFDWixLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQUNELFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQixZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEIsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2xCLE9BQU8sS0FBSyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztBQUN2RSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXNzZXJ0TnVtYmVyIH0gZnJvbSAnQGRlbG9uL3V0aWwvb3RoZXInO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGJldHdlZW4gYHN0YXJ0YCBhbmQgYGVuZGAgdG8sIGJ1dCBub3QgaW5jbHVkaW5nIGBlbmRgLiBJZiBgZW5kYCBpcyBub3Qgc3BlY2lmaWVkLCBpdCdzIHNldCB0byBzdGFydCB3aXRoIGBzdGFydGAgdGhlbiBzZXQgdG8gYDBgLiBJZiBgc3RhcnRgIGlzIGdyZWF0ZXIgdGhhbiBgZW5kYCB0aGUgcGFyYW1zIGFyZSBzd2FwcGVkIHRvIHN1cHBvcnQgbmVnYXRpdmUgcmFuZ2VzLlxuICpcbiAqIOajgOafpSBgdmFsdWVgIOaYr+WQpuWcqCBgc3RhcnRgIOS4jiBgZW5kYCDkuYvpl7TvvIzkvYbkuI3ljIXmi6wgYGVuZGDjgIIg5aaC5p6cIGBlbmRgIOayoeacieaMh+Wumu+8jOmCo+S5iCBgc3RhcnRgIOiuvue9ruS4uiBgMGDjgIIg5aaC5p6cIGBzdGFydGAg5aSn5LqOIGBlbmRg77yM6YKj5LmI5Y+C5pWw5Lya5Lqk5o2i5Lul5L6/5pSv5oyB6LSf6IyD5Zu044CCXG4gKiBgYGB0c1xuICogaW5SYW5nZSgzLCAyLCA0KTsgLy8gdHJ1ZVxuICogaW5SYW5nZSg0LCA4KTsgLy8gdHJ1ZVxuICogaW5SYW5nZSg0LCAyKTsgLy8gZmFsc2VcbiAqIGluUmFuZ2UoMiwgMik7IC8vIGZhbHNlXG4gKiBpblJhbmdlKDEuMiwgMik7IC8vIHRydWVcbiAqIGluUmFuZ2UoLTMsIC0yLCAtNik7IC8vIHRydWVcbiAqIGBgYFxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5SYW5nZSh2YWx1ZTogbnVtYmVyLCBzdGFydDogbnVtYmVyLCBlbmQ/OiBudW1iZXIpOiBib29sZWFuIHtcbiAgaWYgKGVuZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZW5kID0gc3RhcnQ7XG4gICAgc3RhcnQgPSAwO1xuICB9XG4gIGFzc2VydE51bWJlcih2YWx1ZSk7XG4gIGFzc2VydE51bWJlcihzdGFydCk7XG4gIGFzc2VydE51bWJlcihlbmQpO1xuICByZXR1cm4gdmFsdWUgPj0gTWF0aC5taW4oc3RhcnQsIGVuZCkgJiYgdmFsdWUgPCBNYXRoLm1heChzdGFydCwgZW5kKTtcbn1cbiJdfQ==