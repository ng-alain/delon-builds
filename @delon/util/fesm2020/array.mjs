import * as i0 from '@angular/core';
import { Injectable } from '@angular/core';
import { NzTreeNode } from 'ng-zorro-antd/core/tree';
import * as i1 from '@delon/util/config';

/* eslint-disable @typescript-eslint/no-explicit-any */
class ArrayService {
    constructor(cog) {
        this.c = cog.merge('utilArray', {
            deepMapName: 'deep',
            parentMapName: 'parent',
            idMapName: 'id',
            parentIdMapName: 'parent_id',
            childrenMapName: 'children',
            titleMapName: 'title',
            checkedMapname: 'checked',
            selectedMapname: 'selected',
            expandedMapname: 'expanded',
            disabledMapname: 'disabled'
        });
    }
    /**
     * Convert tree structure to array structure
     *
     * 将树结构转换成数组结构
     */
    treeToArr(tree, options) {
        const opt = {
            deepMapName: this.c.deepMapName,
            parentMapName: this.c.parentMapName,
            childrenMapName: this.c.childrenMapName,
            clearChildren: true,
            cb: null,
            ...options
        };
        const result = [];
        const inFn = (list, parent, deep = 0) => {
            for (const i of list) {
                i[opt.deepMapName] = deep;
                i[opt.parentMapName] = parent;
                if (opt.cb) {
                    opt.cb(i, parent, deep);
                }
                result.push(i);
                const children = i[opt.childrenMapName];
                if (children != null && Array.isArray(children) && children.length > 0) {
                    inFn(children, i, deep + 1);
                }
                if (opt.clearChildren) {
                    delete i[opt.childrenMapName];
                }
            }
        };
        inFn(tree, null);
        return result;
    }
    /**
     * Convert array structure to tree structure
     *
     * 数组转换成树数据
     */
    arrToTree(arr, options) {
        if (!Array.isArray(arr) || arr.length === 0) {
            return [];
        }
        const opt = {
            idMapName: this.c.idMapName,
            parentIdMapName: this.c.parentIdMapName,
            childrenMapName: this.c.childrenMapName,
            cb: null,
            ...options
        };
        const tree = [];
        const childrenOf = {};
        let rootPid = opt.rootParentIdValue;
        const arrType = arr;
        if (!rootPid) {
            const pids = arrType.map(i => i[opt.parentIdMapName]);
            const emptyPid = pids.findIndex(w => w == null);
            rootPid = emptyPid !== -1 ? pids[emptyPid] : pids.sort()[0];
        }
        for (const item of arrType) {
            const id = item[opt.idMapName];
            const pid = item[opt.parentIdMapName];
            childrenOf[id] = childrenOf[id] || [];
            item[opt.childrenMapName] = childrenOf[id];
            if (opt.cb) {
                opt.cb(item);
            }
            if (pid !== rootPid) {
                childrenOf[pid] = childrenOf[pid] || [];
                childrenOf[pid].push(item);
            }
            else {
                tree.push(item);
            }
        }
        return tree;
    }
    /**
     * 数组转换成 `nz-tree` 数据源，通过 `options` 转化项名，也可以使用 `options.cb` 更高级决定数据项
     */
    arrToTreeNode(arr, options) {
        const opt = {
            idMapName: this.c.idMapName,
            parentIdMapName: this.c.parentIdMapName,
            titleMapName: this.c.titleMapName,
            isLeafMapName: 'isLeaf',
            checkedMapname: this.c.checkedMapname,
            selectedMapname: this.c.selectedMapname,
            expandedMapname: this.c.expandedMapname,
            disabledMapname: this.c.disabledMapname,
            cb: null,
            ...options
        };
        const tree = this.arrToTree(arr, {
            idMapName: opt.idMapName,
            parentIdMapName: opt.parentIdMapName,
            childrenMapName: 'children'
        });
        this.visitTree(tree, (item, parent, deep) => {
            item.key = item[opt.idMapName];
            item.title = item[opt.titleMapName];
            item.checked = item[opt.checkedMapname];
            item.selected = item[opt.selectedMapname];
            item.expanded = item[opt.expandedMapname];
            item.disabled = item[opt.disabledMapname];
            if (item[opt.isLeafMapName] == null) {
                item.isLeaf = item.children.length === 0;
            }
            else {
                item.isLeaf = item[opt.isLeafMapName];
            }
            if (opt.cb) {
                opt.cb(item, parent, deep);
            }
        });
        return tree.map(node => new NzTreeNode(node));
    }
    /**
     * 递归访问整个树
     */
    visitTree(tree, cb, options) {
        options = {
            childrenMapName: this.c.childrenMapName,
            ...options
        };
        const inFn = (data, parent, deep) => {
            for (const item of data) {
                cb(item, parent, deep);
                const childrenVal = item[options.childrenMapName];
                if (Array.isArray(childrenVal) && childrenVal.length > 0) {
                    inFn(childrenVal, item, deep + 1);
                }
            }
        };
        inFn(tree, null, 1);
    }
    /**
     * Return the value of the first tree value in the tree where predicate is true, and `undefined` otherwise
     *
     * 根据条件返回树的第一个值，否则返回 `undefined`
     */
    findTree(tree, predicate, options) {
        let res;
        this.visitTree(tree, item => {
            if (res === undefined && predicate(item)) {
                res = item;
            }
        }, options);
        return res;
    }
    /**
     * 获取所有已经选中的 `key` 值
     */
    getKeysByTreeNode(tree, options) {
        const opt = {
            includeHalfChecked: true,
            ...options
        };
        const keys = [];
        this.visitTree(tree, (item, parent, deep) => {
            if (item.isChecked || (opt.includeHalfChecked && item.isHalfChecked)) {
                keys.push(opt.cb ? opt.cb(item, parent, deep) : opt.keyMapName ? item.origin[opt.keyMapName] : item.key);
            }
        });
        return keys;
    }
    baseFlat(array, depth, result = []) {
        let index = -1;
        while (++index < array.length) {
            const value = array[index];
            if (depth > 0 && Array.isArray(value)) {
                if (depth > 1) {
                    this.baseFlat(value, depth - 1, result);
                }
                else {
                    let pushIndex = -1;
                    const offset = result.length;
                    while (++pushIndex < value.length) {
                        result[offset + pushIndex] = value[pushIndex];
                    }
                }
            }
            else {
                result[result.length] = value;
            }
        }
        return result;
    }
    /**
     * Recursively flattens array
     *
     * 递归扁平数组
     * ```ts
     * srv.flat([1, [2, 3, [4, 5, [6]]]]) => [1,2,3,4,5,6]
     * srv.flat([1, [2, 3, [4, 5, [6]]]], 1) => [1,2,3,[4, 5, [6]]]
     * ```
     */
    flat(array, depth = 1 / 0) {
        return Array.isArray(array) ? this.baseFlat(array, depth) : array;
    }
    /**
     * Group the array
     *
     * 对数组进行分组
     * ```ts
     * srv.groupBy([6.1, 4.2, 6.3], Math.floor) => {"4":[4.2],"6":[6.1,6.3]}
     * srv.groupBy(['one', 'two', 'three'], v => v.length) => {"3":["one","two"],"5":["three"]}
     * ```
     */
    groupBy(array, iteratee) {
        if (!Array.isArray(array)) {
            return {};
        }
        return array.reduce((result, value) => {
            const key = iteratee(value);
            if (Object.prototype.hasOwnProperty.call(result, key)) {
                result[key].push(value);
            }
            else {
                result[key] = [value];
            }
            return result;
        }, {});
    }
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
    uniq(array, predicate) {
        return Array.from(array
            .reduce((map, value) => {
            const key = predicate
                ? typeof predicate === 'string'
                    ? value[predicate]
                    : predicate(value)
                : value;
            if (!map.has(key)) {
                map.set(key, value);
            }
            return map;
        }, new Map())
            .values());
    }
}
ArrayService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.9", ngImport: i0, type: ArrayService, deps: [{ token: i1.AlainConfigService }], target: i0.ɵɵFactoryTarget.Injectable });
ArrayService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.9", ngImport: i0, type: ArrayService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.9", ngImport: i0, type: ArrayService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: i1.AlainConfigService }]; } });

/**
 * Generated bundle index. Do not edit.
 */

export { ArrayService };
//# sourceMappingURL=array.mjs.map
