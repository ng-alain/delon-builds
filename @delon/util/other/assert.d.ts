/**
 * Assert whether the expression and throw an error into console in dev mode
 *
 * 断言表达式是否符合预期，并在开发模式下会在控制台抛出一个错误
 */
export declare function assert(expression: boolean, msg?: string): void;
/**
 * Assert whether empty (`null` or `undefined`)
 *
 * 断言是否空值（`null` 或 `undefined`）
 */
export declare function assertEmpty(actual: any, msg?: string): void;
/**
 * Assert whether `number` type
 *
 * 断言是否 `number` 类型
 */
export declare function assertNumber(actual: any, msg?: string): void;
/**
 * Assert whether `string` type
 *
 * 断言是否 `string` 类型
 */
export declare function assertString(actual: any, msg?: string): void;
/**
 * Assert whether `array` type
 *
 * 断言是否 `array` 类型
 */
export declare function assertArray(actual: any, msg?: string): void;
/**
 * Assert whether `Observable` type
 *
 * 断言是否 `Observable` 类型
 */
export declare function assertObservable(obj: any, msg?: string): void;
