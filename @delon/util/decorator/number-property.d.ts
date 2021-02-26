export declare type NumberInput = number | string | undefined | null;
export declare function toNumber(value: any): number;
export declare function toNumber<D>(value: any, fallback: D): number | D;
/**
 * Input decorator that handle a prop to do get/set automatically with toNumber
 *
 * ```ts
 * @Input() @InputNumber() visible: number = 1;
 * @Input() @InputNumber(null) visible: number = 2;
 * ```
 */
export declare function InputNumber(defaultValue?: number | null): any;
