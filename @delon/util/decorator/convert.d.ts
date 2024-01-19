import type { NzSafeAny } from 'ng-zorro-antd/core/types';
export type BooleanInput = boolean | string | undefined | null;
export type NumberInput = number | string | undefined | null;
export declare function toBoolean(value: unknown, defaultValue?: boolean | null | undefined): boolean | null | undefined;
/**
 * @deprecated Recommended to use the built-in `transform` and `static ngAcceptInputType_` can be removed
 * - Use `@Input({ transform: booleanAttribute })` instead of `@InputBoolean()`
 * - Use `@Input({ transform: (v: unknown) => (v == null ? null : booleanAttribute(v)) })` instead of `@InputBoolean(null)`
 *
 * Input decorator that handle a prop to do get/set automatically with toBoolean
 *
 * ```ts
 * {AT}Input() {AT}InputBoolean() visible: boolean = false;
 * {AT}Input() {AT}InputBoolean(null) visible: boolean = false;
 * ```
 */
export declare function InputBoolean(defaultValue?: boolean | null): NzSafeAny;
export declare function toNumber(value: unknown): number;
export declare function toNumber<D>(value: unknown, fallback: D): number | D;
/**
 * @deprecated Recommended to use the built-in `transform` and `static ngAcceptInputType_` can be removed
 * - Use `@Input({ transform: numberAttribute })` instead of `@InputNumber()`
 * - Use `@Input({ transform: (v: unknown) => (v == null ? null : numberAttribute(v)) })` instead of `@InputNumber(null)`
 *
 * Input decorator that handle a prop to do get/set automatically with toNumber
 *
 * ```ts
 * {AT}Input() {AT}InputNumber() visible: number = 1;
 * {AT}Input() {AT}InputNumber(null) visible: number = 2;
 * ```
 */
export declare function InputNumber(defaultValue?: number | null): NzSafeAny;
