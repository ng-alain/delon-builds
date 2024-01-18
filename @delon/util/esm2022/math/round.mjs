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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91bmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy91dGlsL21hdGgvcm91bmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztHQVNHO0FBQ0gsTUFBTSxVQUFVLElBQUksQ0FBQyxNQUFjLEVBQUUsWUFBb0IsQ0FBQztJQUN4RCxPQUFPLFdBQVcsQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ2hELENBQUM7QUFFRDs7Ozs7Ozs7O0dBU0c7QUFDSCxNQUFNLFVBQVUsS0FBSyxDQUFDLE1BQWMsRUFBRSxZQUFvQixDQUFDO0lBQ3pELE9BQU8sV0FBVyxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDakQsQ0FBQztBQUVEOzs7Ozs7Ozs7R0FTRztBQUNILE1BQU0sVUFBVSxLQUFLLENBQUMsTUFBYyxFQUFFLFlBQW9CLENBQUM7SUFDekQsT0FBTyxXQUFXLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNqRCxDQUFDO0FBRUQsU0FBUyxXQUFXLENBQUMsTUFBYyxFQUFFLFNBQWlCLEVBQUUsVUFBc0I7SUFDNUUsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBMEIsQ0FBQztJQUV2RCxTQUFTLEdBQUcsU0FBUyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUM3RCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDZixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBQ0Qsa0VBQWtFO0lBQ2xFLDZEQUE2RDtJQUM3RCxJQUFJLElBQUksR0FBRyxHQUFHLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNuQyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDeEUsSUFBSSxHQUFHLEdBQUcsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLE9BQU8sTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLEVBQUUsQ0FBQyxDQUFDO0FBQzdELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvbXB1dGVzIGBudW1iZXJgIHJvdW5kZWQgdXAgdG8gYHByZWNpc2lvbmAuXG4gKlxuICog5qC55o2uIGBwcmVjaXNpb25g77yI57K+5bqm77yJIOWQkeS4iuiIjeWFpSBgbnVtYmVyYOOAglxuICogYGBgdHNcbiAqIGNlaWwoNC4wMDYpOyAvLyA1XG4gKiBjZWlsKDYuMDA0LCAyKTsgLy8gNi4wMVxuICogY2VpbCg2MDQwLCAtMik7IC8vIDYxMDBcbiAqIGBgYFxuICovXG5leHBvcnQgZnVuY3Rpb24gY2VpbChudW1iZXI6IG51bWJlciwgcHJlY2lzaW9uOiBudW1iZXIgPSAwKTogbnVtYmVyIHtcbiAgcmV0dXJuIGNyZWF0ZVJvdW5kKG51bWJlciwgcHJlY2lzaW9uLCAnY2VpbCcpO1xufVxuXG4vKipcbiAqIENvbXB1dGVzIGBudW1iZXJgIHJvdW5kZWQgZG93biB0byBgcHJlY2lzaW9uYC5cbiAqXG4gKiDmoLnmja4gYHByZWNpc2lvbmDvvIjnsr7luqbvvIkg5ZCR5LiL6IiN5YWlIGBudW1iZXJg44CCXG4gKiBgYGB0c1xuICogZmxvb3IoNC4wMDYpOyAvLyA0XG4gKiBmbG9vcigwLjA0NiwgMik7IC8vIDAuMDRcbiAqIGZsb29yKDQwNjAsIC0yKTsgLy8gNDAwMFxuICogYGBgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmbG9vcihudW1iZXI6IG51bWJlciwgcHJlY2lzaW9uOiBudW1iZXIgPSAwKTogbnVtYmVyIHtcbiAgcmV0dXJuIGNyZWF0ZVJvdW5kKG51bWJlciwgcHJlY2lzaW9uLCAnZmxvb3InKTtcbn1cblxuLyoqXG4gKiBDb21wdXRlcyBgbnVtYmVyYCByb3VuZGVkIHRvIGBwcmVjaXNpb25gLlxuICpcbiAqIOagueaNriBgcHJlY2lzaW9uYO+8iOeyvuW6pu+8iSDlm5voiI3kupTlhaUgYG51bWJlcmDjgIJcbiAqIGBgYHRzXG4gKiByb3VuZCg0LjAwNik7IC8vIDRcbiAqIHJvdW5kKDQuMDA2LCAyKTsgLy8gNC4wMVxuICogcm91bmQoNDA2MCwgLTIpOyAvLyA0MTAwXG4gKiBgYGBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJvdW5kKG51bWJlcjogbnVtYmVyLCBwcmVjaXNpb246IG51bWJlciA9IDApOiBudW1iZXIge1xuICByZXR1cm4gY3JlYXRlUm91bmQobnVtYmVyLCBwcmVjaXNpb24sICdyb3VuZCcpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVSb3VuZChudW1iZXI6IG51bWJlciwgcHJlY2lzaW9uOiBudW1iZXIsIG1ldGhvZE5hbWU6IGtleW9mIE1hdGgpOiBudW1iZXIge1xuICBjb25zdCBmdW5jID0gTWF0aFttZXRob2ROYW1lXSBhcyAoeDogbnVtYmVyKSA9PiBudW1iZXI7XG5cbiAgcHJlY2lzaW9uID0gcHJlY2lzaW9uID09IG51bGwgPyAwIDogTWF0aC5taW4ocHJlY2lzaW9uLCAyOTIpO1xuICBpZiAoIXByZWNpc2lvbikge1xuICAgIHJldHVybiBmdW5jKG51bWJlcik7XG4gIH1cbiAgLy8gU2hpZnQgd2l0aCBleHBvbmVudGlhbCBub3RhdGlvbiB0byBhdm9pZCBmbG9hdGluZy1wb2ludCBpc3N1ZXMuXG4gIC8vIFNlZSBbTUROXShodHRwczovL21kbi5pby9yb3VuZCNFeGFtcGxlcykgZm9yIG1vcmUgZGV0YWlscy5cbiAgbGV0IHBhaXIgPSBgJHtudW1iZXJ9ZWAuc3BsaXQoJ2UnKTtcbiAgY29uc3QgdmFsdWUgPSBmdW5jKE51bWJlcihgJHtwYWlyWzBdfWUke051bWJlcihwYWlyWzFdKSArIHByZWNpc2lvbn1gKSk7XG4gIHBhaXIgPSBgJHt2YWx1ZX1lYC5zcGxpdCgnZScpO1xuICByZXR1cm4gTnVtYmVyKGAke3BhaXJbMF19ZSR7TnVtYmVyKHBhaXJbMV0pIC0gcHJlY2lzaW9ufWApO1xufVxuIl19