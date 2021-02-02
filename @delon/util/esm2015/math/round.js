/**
 * Computes `number` rounded up to `precision`.
 *
 * 根据 `precision`（精度） 向上舍入 `number`。
 * ```ts
 * ceil(4.006); // 5
 * ceil(6.004, 2); // 6.01
 * ceil(6040, -2); // 6100
 * ```
 */
export function ceil(number, precision = 0) {
    return createRound(number, precision, 'ceil');
}
/**
 * Computes `number` rounded down to `precision`.
 *
 * 根据 `precision`（精度） 向下舍入 `number`。
 * ```ts
 * floor(4.006); // 4
 * floor(0.046, 2); // 0.04
 * floor(4060, -2); // 4000
 * ```
 */
export function floor(number, precision = 0) {
    return createRound(number, precision, 'floor');
}
/**
 * Computes `number` rounded to `precision`.
 *
 * 根据 `precision`（精度） 四舍五入 `number`。
 * ```ts
 * round(4.006); // 4
 * round(4.006, 2); // 4.01
 * round(4060, -2); // 4100
 * ```
 */
export function round(number, precision = 0) {
    return createRound(number, precision, 'round');
}
function createRound(number, precision, methodName) {
    const func = Math[methodName];
    precision = precision == null ? 0 : Math.min(precision, 292);
    if (!precision) {
        return func(number);
    }
    // Shift with exponential notation to avoid floating-point issues.
    // See [MDN](https://mdn.io/round#Examples) for more details.
    let pair = `${number}e`.split('e');
    const value = func(Number(`${pair[0]}e${Number(pair[1]) + precision}`));
    pair = `${value}e`.split('e');
    return Number(`${pair[0]}e${Number(pair[1]) - precision}`);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91bmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy91dGlsL21hdGgvcm91bmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztHQVNHO0FBQ0gsTUFBTSxVQUFVLElBQUksQ0FBQyxNQUFjLEVBQUUsWUFBb0IsQ0FBQztJQUN4RCxPQUFPLFdBQVcsQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ2hELENBQUM7QUFFRDs7Ozs7Ozs7O0dBU0c7QUFDSCxNQUFNLFVBQVUsS0FBSyxDQUFDLE1BQWMsRUFBRSxZQUFvQixDQUFDO0lBQ3pELE9BQU8sV0FBVyxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDakQsQ0FBQztBQUVEOzs7Ozs7Ozs7R0FTRztBQUNILE1BQU0sVUFBVSxLQUFLLENBQUMsTUFBYyxFQUFFLFlBQW9CLENBQUM7SUFDekQsT0FBTyxXQUFXLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNqRCxDQUFDO0FBRUQsU0FBUyxXQUFXLENBQUMsTUFBYyxFQUFFLFNBQWlCLEVBQUUsVUFBc0I7SUFDNUUsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBMEIsQ0FBQztJQUV2RCxTQUFTLEdBQUcsU0FBUyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUM3RCxJQUFJLENBQUMsU0FBUyxFQUFFO1FBQ2QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDckI7SUFDRCxrRUFBa0U7SUFDbEUsNkRBQTZEO0lBQzdELElBQUksSUFBSSxHQUFHLEdBQUcsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25DLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN4RSxJQUFJLEdBQUcsR0FBRyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDOUIsT0FBTyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsRUFBRSxDQUFDLENBQUM7QUFDN0QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29tcHV0ZXMgYG51bWJlcmAgcm91bmRlZCB1cCB0byBgcHJlY2lzaW9uYC5cbiAqXG4gKiDmoLnmja4gYHByZWNpc2lvbmDvvIjnsr7luqbvvIkg5ZCR5LiK6IiN5YWlIGBudW1iZXJg44CCXG4gKiBgYGB0c1xuICogY2VpbCg0LjAwNik7IC8vIDVcbiAqIGNlaWwoNi4wMDQsIDIpOyAvLyA2LjAxXG4gKiBjZWlsKDYwNDAsIC0yKTsgLy8gNjEwMFxuICogYGBgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjZWlsKG51bWJlcjogbnVtYmVyLCBwcmVjaXNpb246IG51bWJlciA9IDApOiBudW1iZXIge1xuICByZXR1cm4gY3JlYXRlUm91bmQobnVtYmVyLCBwcmVjaXNpb24sICdjZWlsJyk7XG59XG5cbi8qKlxuICogQ29tcHV0ZXMgYG51bWJlcmAgcm91bmRlZCBkb3duIHRvIGBwcmVjaXNpb25gLlxuICpcbiAqIOagueaNriBgcHJlY2lzaW9uYO+8iOeyvuW6pu+8iSDlkJHkuIvoiI3lhaUgYG51bWJlcmDjgIJcbiAqIGBgYHRzXG4gKiBmbG9vcig0LjAwNik7IC8vIDRcbiAqIGZsb29yKDAuMDQ2LCAyKTsgLy8gMC4wNFxuICogZmxvb3IoNDA2MCwgLTIpOyAvLyA0MDAwXG4gKiBgYGBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZsb29yKG51bWJlcjogbnVtYmVyLCBwcmVjaXNpb246IG51bWJlciA9IDApOiBudW1iZXIge1xuICByZXR1cm4gY3JlYXRlUm91bmQobnVtYmVyLCBwcmVjaXNpb24sICdmbG9vcicpO1xufVxuXG4vKipcbiAqIENvbXB1dGVzIGBudW1iZXJgIHJvdW5kZWQgdG8gYHByZWNpc2lvbmAuXG4gKlxuICog5qC55o2uIGBwcmVjaXNpb25g77yI57K+5bqm77yJIOWbm+iIjeS6lOWFpSBgbnVtYmVyYOOAglxuICogYGBgdHNcbiAqIHJvdW5kKDQuMDA2KTsgLy8gNFxuICogcm91bmQoNC4wMDYsIDIpOyAvLyA0LjAxXG4gKiByb3VuZCg0MDYwLCAtMik7IC8vIDQxMDBcbiAqIGBgYFxuICovXG5leHBvcnQgZnVuY3Rpb24gcm91bmQobnVtYmVyOiBudW1iZXIsIHByZWNpc2lvbjogbnVtYmVyID0gMCk6IG51bWJlciB7XG4gIHJldHVybiBjcmVhdGVSb3VuZChudW1iZXIsIHByZWNpc2lvbiwgJ3JvdW5kJyk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJvdW5kKG51bWJlcjogbnVtYmVyLCBwcmVjaXNpb246IG51bWJlciwgbWV0aG9kTmFtZToga2V5b2YgTWF0aCk6IG51bWJlciB7XG4gIGNvbnN0IGZ1bmMgPSBNYXRoW21ldGhvZE5hbWVdIGFzICh4OiBudW1iZXIpID0+IG51bWJlcjtcblxuICBwcmVjaXNpb24gPSBwcmVjaXNpb24gPT0gbnVsbCA/IDAgOiBNYXRoLm1pbihwcmVjaXNpb24sIDI5Mik7XG4gIGlmICghcHJlY2lzaW9uKSB7XG4gICAgcmV0dXJuIGZ1bmMobnVtYmVyKTtcbiAgfVxuICAvLyBTaGlmdCB3aXRoIGV4cG9uZW50aWFsIG5vdGF0aW9uIHRvIGF2b2lkIGZsb2F0aW5nLXBvaW50IGlzc3Vlcy5cbiAgLy8gU2VlIFtNRE5dKGh0dHBzOi8vbWRuLmlvL3JvdW5kI0V4YW1wbGVzKSBmb3IgbW9yZSBkZXRhaWxzLlxuICBsZXQgcGFpciA9IGAke251bWJlcn1lYC5zcGxpdCgnZScpO1xuICBjb25zdCB2YWx1ZSA9IGZ1bmMoTnVtYmVyKGAke3BhaXJbMF19ZSR7TnVtYmVyKHBhaXJbMV0pICsgcHJlY2lzaW9ufWApKTtcbiAgcGFpciA9IGAke3ZhbHVlfWVgLnNwbGl0KCdlJyk7XG4gIHJldHVybiBOdW1iZXIoYCR7cGFpclswXX1lJHtOdW1iZXIocGFpclsxXSkgLSBwcmVjaXNpb259YCk7XG59XG4iXX0=