export declare function isEmpty(element: HTMLElement): boolean;
export declare function toBoolean(value: any, allowUndefined?: boolean | null): boolean | undefined;
/**
 * Input decorator that handle a prop to do get/set automatically with toBoolean
 * @example
 * ```typescript
 * @Input() @InputBoolean() visible: boolean = false;
 * @Input() @InputBoolean(null) visible: boolean = false;
 * ```
 */
export declare function InputBoolean(allowUndefined?: boolean | null): any;
export declare function toNumber(value: any): number;
export declare function toNumber<D>(value: any, fallback: D): number | D;
/**
 * Input decorator that handle a prop to do get/set automatically with toNumber
 * @example
 * ```typescript
 * @Input() @InputNumber() visible: number = 1;
 * @Input() @InputNumber(null) visible: number = 2;
 * ```
 */
export declare function InputNumber(fallback?: number | null): any;
