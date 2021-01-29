import { NzSafeAny } from 'ng-zorro-antd/core/types';
export declare function toBoolean(value: any, allowUndefined?: boolean | null): boolean | undefined;
/**
 * Input decorator that handle a prop to do get/set automatically with toBoolean
 *
 * ```ts
 * @Input() InputBoolean() visible: boolean = false;
 * @Input() @InputBoolean(null) visible: boolean = false;
 * ```
 */
export declare function InputBoolean(defaultValue?: boolean | null): NzSafeAny;
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
export declare function InputNumber(defaultValue?: number | null): NzSafeAny;
export declare type BooleanInput = boolean | string | undefined | null;
export declare type NumberInput = number | string | undefined | null;
