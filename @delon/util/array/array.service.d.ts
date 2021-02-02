import { AlainConfigService } from '@delon/util/config';
import { NzTreeNode } from 'ng-zorro-antd/core/tree';
import { ArrayServiceArrToTreeNodeOptions, ArrayServiceArrToTreeOptions, ArrayServiceGetKeysByTreeNodeOptions, ArrayServiceGroupByResult, ArrayServiceTreeToArrOptions } from './array-type.service';
export declare class ArrayService {
    private c;
    constructor(cog: AlainConfigService);
    /**
     * 将树结构转换成数组结构
     */
    treeToArr(tree: any[], options?: ArrayServiceTreeToArrOptions): any[];
    /**
     * 数组转换成树数据
     */
    arrToTree(arr: any[], options?: ArrayServiceArrToTreeOptions): any[];
    /**
     * 数组转换成 `nz-tree` 数据源，通过 `options` 转化项名，也可以使用 `options.cb` 更高级决定数据项
     */
    arrToTreeNode(arr: any[], options?: ArrayServiceArrToTreeNodeOptions): NzTreeNode[];
    /**
     * 递归访问整个树
     */
    visitTree(tree: any[], cb: (item: any, parent: any, deep: number) => void, options?: {
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
    flat(array: any[], depth?: number): any[];
    /**
     * Group the array
     *
     * 对数组进行分组
     * ```ts
     * srv.groupBy([6.1, 4.2, 6.3], Math.floor) => {"4":[4.2],"6":[6.1,6.3]}
     * srv.groupBy(['one', 'two', 'three'], v => v.length) => {"3":["one","two"],"5":["three"]}
     * ```
     */
    groupBy(array: any[], iteratee: (value: any) => any): ArrayServiceGroupByResult;
}
