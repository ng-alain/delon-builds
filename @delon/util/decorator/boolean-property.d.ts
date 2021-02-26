export declare type BooleanInput = boolean | string | undefined | null;
export declare function toBoolean(value: any, allowUndefined?: boolean | null): boolean | undefined;
/**
 * Input decorator that handle a prop to do get/set automatically with toBoolean
 *
 * ```ts
 * @Input() InputBoolean() visible: boolean = false;
 * @Input() @InputBoolean(null) visible: boolean = false;
 * ```
 */
export declare function InputBoolean(defaultValue?: boolean | null): any;
