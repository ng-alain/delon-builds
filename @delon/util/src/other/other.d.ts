/**
 * 类似 `_.get`，根据 `path` 获取安全值
 * jsperf: https://jsperf.com/es-deep-getttps://jsperf.com/es-deep-get
 *
 * @param obj 数据源，无效时直接返回 `defaultValue` 值
 * @param path 若 `null`、`[]`、未定义及未找到时返回 `defaultValue` 值
 * @param defaultValue 默认值
 */
export declare function deepGet(obj: any | null, path: string | string[] | null | undefined, defaultValue?: any): any;
/**
 * 基于 [extend](https://github.com/justmoon/node-extend) 的深度拷贝
 */
export declare function deepCopy(obj: any): any;
/**
 * 复制字符串文档至剪贴板
 */
export declare function copy(value: string): Promise<string>;
/**
 * 深度合并对象
 *
 * @param original 原始对象
 * @param ingoreArray 是否忽略数组，`true` 表示忽略数组的合并，`false` 表示会合并整个数组
 * @param objects 要合并的对象
 */
export declare function deepMergeKey(original: any, ingoreArray: boolean, ...objects: any[]): any;
/**
 * 深度合并对象
 *
 * @param original 原始对象
 * @param objects 要合并的对象
 */
export declare function deepMerge(original: any, ...objects: any[]): any;
