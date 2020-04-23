import { NzSafeAny } from 'ng-zorro-antd/core/types';
/**
 * 类似 `_.get`，根据 `path` 获取安全值
 * jsperf: https://jsperf.com/es-deep-getttps://jsperf.com/es-deep-get
 *
 * @param obj 数据源，无效时直接返回 `defaultValue` 值
 * @param path 若 `null`、`[]`、未定义及未找到时返回 `defaultValue` 值
 * @param defaultValue 默认值
 */
export declare function deepGet(obj: NzSafeAny | null, path: string | string[] | null | undefined, defaultValue?: NzSafeAny): NzSafeAny;
/**
 * 基于 [extend](https://github.com/justmoon/node-extend) 的深度拷贝
 */
export declare function deepCopy(obj: NzSafeAny): NzSafeAny;
/**
 * 复制字符串文档至剪贴板
 */
export declare function copy(value: string): Promise<string>;
/**
 * 深度合并对象
 *
 * @param original 原始对象
 * @param arrayProcessMethod 数组处理方式
 *  - `true` 表示替换新值，不管新值为哪种类型
 *  - `false` 表示会合并整个数组（将旧数据与新数据合并成新数组）
 * @param objects 要合并的对象
 */
export declare function deepMergeKey(original: any, arrayProcessMethod: boolean, ...objects: any[]): any;
/**
 * 深度合并对象
 *
 * @param original 原始对象
 * @param objects 要合并的对象
 */
export declare function deepMerge(original: any, ...objects: any[]): any;
