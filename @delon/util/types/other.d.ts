import { NzSafeAny } from "ng-zorro-antd/core/types";
import { Observable } from "rxjs";
import * as i0 from "@angular/core";
/**
 * Gets the value at `path` of `object`, like `_.get` in lodash.
 *
 * 类似 `_.get`，根据 `path` 获取安全值
 */
export declare function deepGet(obj: NzSafeAny, path: string | string[] | null | undefined, defaultValue?: unknown): NzSafeAny;
/**
 * Base on [extend](https://github.com/justmoon/node-extend) deep copy.
 *
 * 基于 [extend](https://github.com/justmoon/node-extend) 的深度拷贝
 *
 * NOTE: Don't a lot of recursion, maybe performance issues
 */
export declare function deepCopy<T extends Record<string, NzSafeAny> = NzSafeAny>(obj: T | null | undefined): T;
/**
 * Deep merge object.
 *
 * 深度合并对象
 *
 * @param original 原始对象
 * @param arrayProcessMethod 数组处理方式
 *  - `true` 表示替换新值，不管新值为哪种类型
 *  - `false` 表示会合并整个数组（将旧数据与新数据合并成新数组）
 * @param objects 要合并的对象
 */
export declare function deepMergeKey(original: unknown, arrayProcessMethod: boolean, ...objects: NzSafeAny[]): NzSafeAny;
/**
 * Deep merge object.
 *
 * 深度合并对象
 */
export declare function deepMerge(original: unknown, ...objects: unknown[]): NzSafeAny;
export declare const PREFIX = "[@DELON]:";
export declare const warn: (...args: NzSafeAny[]) => void;
export declare const warnDeprecation: (...args: NzSafeAny[]) => NzSafeAny;
export declare const log: (...args: NzSafeAny[]) => void;
export interface LazyResult {
  path: string;
  status: 'ok' | 'error' | 'loading';
  error?: NzSafeAny;
}
export interface LazyLoadItem {
  path: string;
  options?: LazyLoadOptions;
}
export interface LazyLoadOptions {
  innerContent?: string;
  attributes?: Record<string, string>;
  rel?: string;
}
/**
 * `LazyService` delay loading JS or CSS files.
 *
 * 延迟加载资源（js 或 css）服务
 */
export declare class LazyService {
  private readonly doc;
  private list;
  private cached;
  private _notify;
  get change(): Observable<LazyResult[]>;
  clear(): void;
  private attachAttributes;
  /**
   * Load script or style files
   */
  load(paths: string | LazyLoadItem | Array<string | LazyLoadItem>): Promise<LazyResult[]>;
  /**
   * Load a script file
   */
  loadScript(path: string, options?: LazyLoadOptions): Promise<LazyResult>;
  /**
   * Load a style file
   */
  loadStyle(path: string, options?: LazyLoadOptions): Promise<LazyResult>;
  static ɵfac: i0.ɵɵFactoryDeclaration<LazyService, never>;
  static ɵprov: i0.ɵɵInjectableDeclaration<any>;
}
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
export declare function assertEmpty(actual: unknown, msg?: string): void;
/**
 * Assert whether `number` type
 *
 * 断言是否 `number` 类型
 */
export declare function assertNumber(actual: unknown, msg?: string): void;
/**
 * Assert whether `string` type
 *
 * 断言是否 `string` 类型
 */
export declare function assertString(actual: unknown, msg?: string): void;
/**
 * Assert whether `array` type
 *
 * 断言是否 `array` 类型
 */
export declare function assertArray(actual: unknown, msg?: string): void;
/**
 * Assert whether `Observable` type
 *
 * 断言是否 `Observable` 类型
 */
export declare function assertObservable(obj: unknown, msg?: string): void;