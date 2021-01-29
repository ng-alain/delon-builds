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
export declare function ceil(number: number, precision?: number): number;
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
export declare function floor(number: number, precision?: number): number;
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
export declare function round(number: number, precision?: number): number;
