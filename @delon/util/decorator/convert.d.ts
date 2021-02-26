export declare type BooleanInput = boolean | string | undefined | null;
export declare type NumberInput = number | string | undefined | null;
export declare function toBoolean(value: any, allowUndefined?: boolean | null): boolean | undefined;
/**
 * Input decorator that handle a prop to do get/set automatically with toBoolean
 *
 * ```ts
 * {AT}Input() {AT}InputBoolean() visible: boolean = false;
 * {AT}Input() {AT}InputBoolean(null) visible: boolean = false;
 * ```
 */
export declare function InputBoolean(defaultValue?: boolean | null): any;
export declare function toNumber(value: any): number;
export declare function toNumber<D>(value: any, fallback: D): number | D;
/**
 * Input decorator that handle a prop to do get/set automatically with toNumber
 *
 * ```ts
 * {AT}Input() {AT}InputNumber() visible: number = 1;
 * {AT}Input() {AT}InputNumber(null) visible: number = 2;
 * ```
 */
export declare function InputNumber(defaultValue?: number | null): any;
