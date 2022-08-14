import type { NzSafeAny } from 'ng-zorro-antd/core/types';
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
 */
export declare function deepCopy<T extends {
    [key: string]: NzSafeAny;
} = NzSafeAny>(obj: T | null | undefined): T;
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
