import { NzTreeNode } from 'ng-zorro-antd/core/tree';
import * as i0 from '@angular/core';

interface ArrayServiceTreeToArrOptions<T extends object = any> {
    /** 深度项名，默认：`'deep'` */
    deepMapName?: string;
    /** 扁平后数组的父数据项名，默认：`'parent'` */
    parentMapName?: string;
    /** 源数据子项名，默认：`'children'` */
    childrenMapName?: string;
    /** 是否移除 `children` 节点，默认：`true` */
    clearChildren?: boolean;
    /** 转换成数组结构时回调 */
    cb?: (item: T, parent: T | null, deep: number) => void;
}
interface ArrayServiceArrToTreeOptions<T extends object = any> {
    /** 编号项名，默认：`'id'` */
    idMapName?: string;
    /** 父编号项名，默认：`'parent_id'` */
    parentIdMapName?: string;
    /**
     * 根父编号值，默认会自动计算得到最合适的根父编号值，例如：
     *
     * @example
     * ```ts
     * const res = srv.arrToTree([
     *    { id: 2, parent_id: 'a', title: 'c1' },
     *    { id: 4, parent_id: 2, title: 't1' },
     *  ],
     *  { rootParentValue: 'a' });
     * ```
     */
    rootParentIdValue?: any;
    /** 子项名，默认：`'children'` */
    childrenMapName?: string;
    /** 转换成树数据时回调 */
    cb?: (item: T) => void;
}
interface ArrayServiceArrToTreeNodeOptions<T extends object = any> {
    /** 编号项名，默认：`'id'` */
    idMapName?: string;
    /** 父编号项名，默认：`'parent_id'` */
    parentIdMapName?: string;
    /** 标题项名，默认：`'title'` */
    titleMapName?: string;
    /** 设置为叶子节点项名，若数据源不存在时自动根据 `children` 值决定是否为叶子节点，默认：`'isLeaf'` */
    isLeafMapName?: string;
    /** 节点 Checkbox 是否选中项名，默认：`'checked'` */
    checkedMapname?: string;
    /** 节点本身是否选中项名，默认：`'selected'` */
    selectedMapname?: string;
    /** 节点是否展开(叶子节点无效)项名，默认：`'expanded'` */
    expandedMapname?: string;
    /** 设置是否禁用节点(不可进行任何操作)项名，默认：`'disabled'` */
    disabledMapname?: string;
    /** 转换成树数据后，执行的递归回调 */
    cb?: (item: T, parent: T | null, deep: number) => void;
}
interface ArrayServiceGetKeysByTreeNodeOptions {
    /** 是否包含半选状态的值，默认：`true` */
    includeHalfChecked?: boolean;
    /** 是否重新指定 `key` 键名，若不指定表示使用 `NzTreeNode.key` 值 */
    keyMapName?: string;
    /** 回调，返回一个值 `key` 值，优先级高于其他 */
    cb?: (item: NzTreeNode, parent: NzTreeNode | null, deep: number) => any;
}
interface ArrayServiceGroupByResult {
    [key: string]: any;
    [key: number]: any;
}

declare class ArrayService {
    private readonly cogSrv;
    private c;
    constructor();
    /**
     * Convert tree structure to array structure
     *
     * 将树结构转换成数组结构
     */
    treeToArr<T extends object = any>(tree: readonly T[], options?: ArrayServiceTreeToArrOptions<T>): T[];
    /**
     * Convert array structure to tree structure
     *
     * 数组转换成树数据
     */
    arrToTree<T extends object = any>(arr: readonly T[], options?: ArrayServiceArrToTreeOptions<T>): T[];
    /**
     * 数组转换成 `nz-tree` 数据源，通过 `options` 转化项名，也可以使用 `options.cb` 更高级决定数据项
     */
    arrToTreeNode<T extends object = any>(arr: readonly T[], options?: ArrayServiceArrToTreeNodeOptions): NzTreeNode[];
    /**
     * 递归访问整个树
     */
    visitTree<T extends object = any>(tree: readonly T[], cb: (item: T, parent: T | null, deep: number) => void, options?: {
        /** 子项名，默认：`'children'` */
        childrenMapName?: string;
    }): void;
    /**
     * Return the value of the first tree value in the tree where predicate is true, and `undefined` otherwise
     *
     * 根据条件返回树的第一个值，否则返回 `undefined`
     */
    findTree<T extends object = any>(tree: readonly T[], predicate: (item: T) => boolean, options?: {
        /** 子项名，默认：`'children'` */
        childrenMapName?: string;
    }): T | undefined;
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
    flat<T>(array: readonly T[], depth?: number): T[];
    /**
     * Group the array
     *
     * 对数组进行分组
     * ```ts
     * srv.groupBy([6.1, 4.2, 6.3], Math.floor) => {"4":[4.2],"6":[6.1,6.3]}
     * srv.groupBy(['one', 'two', 'three'], v => v.length) => {"3":["one","two"],"5":["three"]}
     * ```
     */
    groupBy<T>(array: readonly T[], iteratee: (value: T) => string | number): ArrayServiceGroupByResult;
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
    uniq<T>(array: readonly T[], predicate?: string | ((value: T) => string | number | boolean)): T[];
    static ɵfac: i0.ɵɵFactoryDeclaration<ArrayService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ArrayService>;
}

export { ArrayService };
export type { ArrayServiceArrToTreeNodeOptions, ArrayServiceArrToTreeOptions, ArrayServiceGetKeysByTreeNodeOptions, ArrayServiceGroupByResult, ArrayServiceTreeToArrOptions };
