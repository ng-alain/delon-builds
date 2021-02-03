import { AlainConfigService } from '@delon/util/config';
import { NzTreeNode } from 'ng-zorro-antd/core/tree';
import { ArrayServiceArrToTreeNodeOptions, ArrayServiceArrToTreeOptions, ArrayServiceGetKeysByTreeNodeOptions, ArrayServiceGroupByResult, ArrayServiceTreeToArrOptions } from './array-type.service';
export declare class ArrayService {
    private c;
    constructor(cog: AlainConfigService);
    /**
     * Convert tree structure to array structure
     *
     * 将树结构转换成数组结构
     */
    treeToArr<T extends object = any>(tree: ReadonlyArray<T>, options?: ArrayServiceTreeToArrOptions<T>): T[];
    /**
     * Convert array structure to tree structure
     *
     * 数组转换成树数据
     */
    arrToTree<T extends object = any>(arr: ReadonlyArray<T>, options?: ArrayServiceArrToTreeOptions<T>): T[];
    /**
     * 数组转换成 `nz-tree` 数据源，通过 `options` 转化项名，也可以使用 `options.cb` 更高级决定数据项
     */
    arrToTreeNode<T extends object = any>(arr: ReadonlyArray<T>, options?: ArrayServiceArrToTreeNodeOptions): NzTreeNode[];
    /**
     * 递归访问整个树
     */
    visitTree<T extends object = any>(tree: ReadonlyArray<T>, cb: (item: T, parent: T | null, deep: number) => void, options?: {
        /** 子项名，默认：`'children'` */
        childrenMapName?: string;
    }): void;
    /**
     * 获取所有已经选中的 `key` 值
     */
    getKeysByTreeNode(tree: NzTreeNode[], options?: ArrayServiceGetKeysByTreeNodeOptions): any[];
    private baseFlat;
    /**
     * Recursively flattens array
     *
     * 递归扁平数组
     * ```ts
     * srv.flat([1, [2, 3, [4, 5, [6]]]]) => [1,2,3,4,5,6]
     * srv.flat([1, [2, 3, [4, 5, [6]]]], 1) => [1,2,3,[4, 5, [6]]]
     * ```
     */
    flat<T>(array: ReadonlyArray<T>, depth?: number): ReadonlyArray<T>;
    /**
     * Group the array
     *
     * 对数组进行分组
     * ```ts
     * srv.groupBy([6.1, 4.2, 6.3], Math.floor) => {"4":[4.2],"6":[6.1,6.3]}
     * srv.groupBy(['one', 'two', 'three'], v => v.length) => {"3":["one","two"],"5":["three"]}
     * ```
     */
    groupBy<T>(array: ReadonlyArray<T>, iteratee: (value: T) => string | number): ArrayServiceGroupByResult;
    /**
     * Creates a duplicate-free version of an array
     *
     * 创建去重后的数组
     * ```ts
     * uniq([1, 2, 2, 3, 1]) => [1,2,3]
     * uniq([{ a: 1 }, { a: 1 }, { a: 2 }], 'a') => [{"a":1},{"a":2}]
     * uniq([{ a: 1 }, { a: 1 }, { a: 2 }], i => (i.a === 1 ? 'a' : 'b')) => [{"a":1},{"a":2}]
     * ```
     */
    uniq<T>(array: ReadonlyArray<T>, predicate?: string | ((value: T) => string | number | boolean)): ReadonlyArray<T>;
}
