/**
 * @fileoverview added by tsickle
 * Generated from: array.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { AlainConfigService } from '@delon/util/config';
import { NzTreeNode } from 'ng-zorro-antd/core/tree';
import * as i0 from "@angular/core";
import * as i1 from "@delon/util/config";
export class ArrayService {
    /**
     * @param {?} cog
     */
    constructor(cog) {
        this.c = (/** @type {?} */ (cog.merge('utilArray', {
            deepMapName: 'deep',
            parentMapName: 'parent',
            idMapName: 'id',
            parentIdMapName: 'parent_id',
            childrenMapName: 'children',
            titleMapName: 'title',
            checkedMapname: 'checked',
            selectedMapname: 'selected',
            expandedMapname: 'expanded',
            disabledMapname: 'disabled',
        })));
    }
    /**
     * Convert tree structure to array structure
     *
     * 将树结构转换成数组结构
     * @template T
     * @param {?} tree
     * @param {?=} options
     * @return {?}
     */
    treeToArr(tree, options) {
        /** @type {?} */
        const opt = (/** @type {?} */ (Object.assign({ deepMapName: this.c.deepMapName, parentMapName: this.c.parentMapName, childrenMapName: this.c.childrenMapName, clearChildren: true, cb: null }, options)));
        /** @type {?} */
        const result = [];
        /** @type {?} */
        const inFn = (/**
         * @param {?} list
         * @param {?} parent
         * @param {?=} deep
         * @return {?}
         */
        (list, parent, deep = 0) => {
            for (const i of list) {
                i[(/** @type {?} */ (opt.deepMapName))] = deep;
                i[(/** @type {?} */ (opt.parentMapName))] = parent;
                if (opt.cb) {
                    opt.cb(i, parent, deep);
                }
                result.push(i);
                /** @type {?} */
                const children = i[(/** @type {?} */ (opt.childrenMapName))];
                if (children != null && Array.isArray(children) && children.length > 0) {
                    inFn(children, (/** @type {?} */ (i)), deep + 1);
                }
                if (opt.clearChildren) {
                    delete i[(/** @type {?} */ (opt.childrenMapName))];
                }
            }
        });
        inFn(tree, null);
        return (/** @type {?} */ (result));
    }
    /**
     * Convert array structure to tree structure
     *
     * 数组转换成树数据
     * @template T
     * @param {?} arr
     * @param {?=} options
     * @return {?}
     */
    arrToTree(arr, options) {
        if (!Array.isArray(arr) || arr.length === 0) {
            return [];
        }
        /** @type {?} */
        const opt = (/** @type {?} */ (Object.assign({ idMapName: this.c.idMapName, parentIdMapName: this.c.parentIdMapName, childrenMapName: this.c.childrenMapName, cb: null }, options)));
        /** @type {?} */
        const tree = [];
        /** @type {?} */
        const childrenOf = {};
        /** @type {?} */
        let rootPid = opt.rootParentIdValue;
        /** @type {?} */
        const arrType = (/** @type {?} */ (arr));
        if (!rootPid) {
            /** @type {?} */
            const pids = arrType.map((/**
             * @param {?} i
             * @return {?}
             */
            i => i[(/** @type {?} */ (opt.parentIdMapName))]));
            /** @type {?} */
            const emptyPid = pids.findIndex((/**
             * @param {?} w
             * @return {?}
             */
            w => w == null));
            rootPid = emptyPid !== -1 ? pids[emptyPid] : pids.sort()[0];
        }
        for (const item of arrType) {
            /** @type {?} */
            const id = item[(/** @type {?} */ (opt.idMapName))];
            /** @type {?} */
            const pid = item[(/** @type {?} */ (opt.parentIdMapName))];
            childrenOf[id] = childrenOf[id] || [];
            item[(/** @type {?} */ (opt.childrenMapName))] = childrenOf[id];
            if (opt.cb) {
                opt.cb((/** @type {?} */ (item)));
            }
            if (pid !== rootPid) {
                childrenOf[pid] = childrenOf[pid] || [];
                childrenOf[pid].push((/** @type {?} */ (item)));
            }
            else {
                tree.push((/** @type {?} */ (item)));
            }
        }
        return tree;
    }
    /**
     * 数组转换成 `nz-tree` 数据源，通过 `options` 转化项名，也可以使用 `options.cb` 更高级决定数据项
     * @template T
     * @param {?} arr
     * @param {?=} options
     * @return {?}
     */
    arrToTreeNode(arr, options) {
        /** @type {?} */
        const opt = (/** @type {?} */ (Object.assign({ idMapName: this.c.idMapName, parentIdMapName: this.c.parentIdMapName, titleMapName: this.c.titleMapName, isLeafMapName: 'isLeaf', checkedMapname: this.c.checkedMapname, selectedMapname: this.c.selectedMapname, expandedMapname: this.c.expandedMapname, disabledMapname: this.c.disabledMapname, cb: null }, options)));
        /** @type {?} */
        const tree = this.arrToTree(arr, {
            idMapName: opt.idMapName,
            parentIdMapName: opt.parentIdMapName,
            childrenMapName: 'children',
        });
        this.visitTree(tree, (/**
         * @param {?} item
         * @param {?} parent
         * @param {?} deep
         * @return {?}
         */
        (item, parent, deep) => {
            item.key = item[(/** @type {?} */ (opt.idMapName))];
            item.title = item[(/** @type {?} */ (opt.titleMapName))];
            item.checked = item[(/** @type {?} */ (opt.checkedMapname))];
            item.selected = item[(/** @type {?} */ (opt.selectedMapname))];
            item.expanded = item[(/** @type {?} */ (opt.expandedMapname))];
            item.disabled = item[(/** @type {?} */ (opt.disabledMapname))];
            if (item[(/** @type {?} */ (opt.isLeafMapName))] == null) {
                item.isLeaf = item.children.length === 0;
            }
            else {
                item.isLeaf = item[(/** @type {?} */ (opt.isLeafMapName))];
            }
            if (opt.cb) {
                opt.cb((/** @type {?} */ (item)), parent, deep);
            }
        }));
        return tree.map((/**
         * @param {?} node
         * @return {?}
         */
        node => new NzTreeNode((/** @type {?} */ (node)))));
    }
    /**
     * 递归访问整个树
     * @template T
     * @param {?} tree
     * @param {?} cb
     * @param {?=} options
     * @return {?}
     */
    visitTree(tree, cb, options) {
        options = Object.assign({ childrenMapName: this.c.childrenMapName }, options);
        /** @type {?} */
        const inFn = (/**
         * @param {?} data
         * @param {?} parent
         * @param {?} deep
         * @return {?}
         */
        (data, parent, deep) => {
            for (const item of data) {
                cb(item, parent, deep);
                /** @type {?} */
                const childrenVal = ((/** @type {?} */ (item)))[(/** @type {?} */ ((/** @type {?} */ (options)).childrenMapName))];
                if (Array.isArray(childrenVal) && childrenVal.length > 0) {
                    inFn(childrenVal, item, deep + 1);
                }
            }
        });
        inFn(tree, null, 1);
    }
    /**
     * Return the value of the first tree value in the tree where predicate is true, and `undefined` otherwise
     *
     * 根据条件返回树的第一个值，否则返回 `undefined`
     * @template T
     * @param {?} tree
     * @param {?} predicate
     * @param {?=} options
     * @return {?}
     */
    findTree(tree, predicate, options) {
        /** @type {?} */
        let res;
        this.visitTree(tree, (/**
         * @param {?} item
         * @return {?}
         */
        item => {
            if (res === undefined && predicate(item)) {
                res = item;
            }
        }), options);
        return res;
    }
    /**
     * 获取所有已经选中的 `key` 值
     * @param {?} tree
     * @param {?=} options
     * @return {?}
     */
    getKeysByTreeNode(tree, options) {
        /** @type {?} */
        const opt = (/** @type {?} */ (Object.assign({ includeHalfChecked: true }, options)));
        /** @type {?} */
        const keys = [];
        this.visitTree(tree, (/**
         * @param {?} item
         * @param {?} parent
         * @param {?} deep
         * @return {?}
         */
        (item, parent, deep) => {
            if (item.isChecked || (opt.includeHalfChecked && item.isHalfChecked)) {
                keys.push(opt.cb ? opt.cb(item, parent, deep) : opt.keyMapName ? item.origin[opt.keyMapName] : item.key);
            }
        }));
        return keys;
    }
    /**
     * @private
     * @param {?} array
     * @param {?} depth
     * @param {?=} result
     * @return {?}
     */
    baseFlat(array, depth, result = []) {
        /** @type {?} */
        let index = -1;
        while (++index < array.length) {
            /** @type {?} */
            const value = array[index];
            if (depth > 0 && Array.isArray(value)) {
                if (depth > 1) {
                    this.baseFlat(value, depth - 1, result);
                }
                else {
                    /** @type {?} */
                    let pushIndex = -1;
                    /** @type {?} */
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
     * @template T
     * @param {?} array
     * @param {?=} depth
     * @return {?}
     */
    flat(array, depth = 1 / 0) {
        return Array.isArray(array) ? this.baseFlat((/** @type {?} */ (array)), depth) : array;
    }
    /**
     * Group the array
     *
     * 对数组进行分组
     * ```ts
     * srv.groupBy([6.1, 4.2, 6.3], Math.floor) => {"4":[4.2],"6":[6.1,6.3]}
     * srv.groupBy(['one', 'two', 'three'], v => v.length) => {"3":["one","two"],"5":["three"]}
     * ```
     * @template T
     * @param {?} array
     * @param {?} iteratee
     * @return {?}
     */
    groupBy(array, iteratee) {
        if (!Array.isArray(array)) {
            return {};
        }
        return array.reduce((/**
         * @param {?} result
         * @param {?} value
         * @return {?}
         */
        (result, value) => {
            /** @type {?} */
            const key = iteratee(value);
            if (Object.prototype.hasOwnProperty.call(result, key)) {
                result[key].push(value);
            }
            else {
                result[key] = [value];
            }
            return result;
        }), (/** @type {?} */ ({})));
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
     * @template T
     * @param {?} array
     * @param {?=} predicate
     * @return {?}
     */
    uniq(array, predicate) {
        return Array.from(array
            .reduce((/**
         * @param {?} map
         * @param {?} value
         * @return {?}
         */
        (map, value) => {
            /** @type {?} */
            const key = predicate ? (typeof predicate === 'string' ? ((/** @type {?} */ (value)))[predicate] : (/** @type {?} */ (predicate))(value)) : value;
            if (!map.has(key)) {
                map.set(key, value);
            }
            return map;
        }), new Map())
            .values());
    }
}
ArrayService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ArrayService.ctorParameters = () => [
    { type: AlainConfigService }
];
/** @nocollapse */ ArrayService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ArrayService_Factory() { return new ArrayService(i0.ɵɵinject(i1.AlainConfigService)); }, token: ArrayService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ArrayService.prototype.c;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3V0aWwvYXJyYXkvYXJyYXkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGtCQUFrQixFQUF3QixNQUFNLG9CQUFvQixDQUFDO0FBQzlFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7O0FBVXJELE1BQU0sT0FBTyxZQUFZOzs7O0lBR3ZCLFlBQVksR0FBdUI7UUFDakMsSUFBSSxDQUFDLENBQUMsR0FBRyxtQkFBQSxHQUFHLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRTtZQUM5QixXQUFXLEVBQUUsTUFBTTtZQUNuQixhQUFhLEVBQUUsUUFBUTtZQUN2QixTQUFTLEVBQUUsSUFBSTtZQUNmLGVBQWUsRUFBRSxXQUFXO1lBQzVCLGVBQWUsRUFBRSxVQUFVO1lBQzNCLFlBQVksRUFBRSxPQUFPO1lBQ3JCLGNBQWMsRUFBRSxTQUFTO1lBQ3pCLGVBQWUsRUFBRSxVQUFVO1lBQzNCLGVBQWUsRUFBRSxVQUFVO1lBQzNCLGVBQWUsRUFBRSxVQUFVO1NBQzVCLENBQUMsRUFBQyxDQUFDO0lBQ04sQ0FBQzs7Ozs7Ozs7OztJQU9ELFNBQVMsQ0FBeUIsSUFBc0IsRUFBRSxPQUF5Qzs7Y0FDM0YsR0FBRyxHQUFHLG1DQUNWLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFDL0IsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsYUFBYSxFQUNuQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxlQUFlLEVBQ3ZDLGFBQWEsRUFBRSxJQUFJLEVBQ25CLEVBQUUsRUFBRSxJQUFJLElBQ0wsT0FBTyxHQUNxQjs7Y0FDM0IsTUFBTSxHQUFrQyxFQUFFOztjQUMxQyxJQUFJOzs7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RSxHQUFHLENBQUMsRUFBRTtnQkFDckQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN6QjtpQkFBTTtnQkFDTCxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN2QjtZQUNELE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUMsR0FBRSxtQkFBQSxFQUFFLEVBQTZCLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7SUFXRCxJQUFJLENBQUksS0FBdUIsRUFBRSxTQUE4RDtRQUM3RixPQUFPLEtBQUssQ0FBQyxJQUFJLENBQ2YsS0FBSzthQUNGLE1BQU07Ozs7O1FBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUU7O2tCQUNmLEdBQUcsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxTQUFTLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFBLEtBQUssRUFBTyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFBLFNBQVMsRUFBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUs7WUFDL0csSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ2pCLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ3JCO1lBQ0QsT0FBTyxHQUFHLENBQUM7UUFDYixDQUFDLEdBQUUsSUFBSSxHQUFHLEVBQWdDLENBQUM7YUFDMUMsTUFBTSxFQUFFLENBQ1osQ0FBQztJQUNKLENBQUM7OztZQTlSRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O1lBVnpCLGtCQUFrQjs7Ozs7Ozs7SUFZekIseUJBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlLCBBbGFpblV0aWxBcnJheUNvbmZpZyB9IGZyb20gJ0BkZWxvbi91dGlsL2NvbmZpZyc7XG5pbXBvcnQgeyBOelRyZWVOb2RlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3RyZWUnO1xuaW1wb3J0IHtcbiAgQXJyYXlTZXJ2aWNlQXJyVG9UcmVlTm9kZU9wdGlvbnMsXG4gIEFycmF5U2VydmljZUFyclRvVHJlZU9wdGlvbnMsXG4gIEFycmF5U2VydmljZUdldEtleXNCeVRyZWVOb2RlT3B0aW9ucyxcbiAgQXJyYXlTZXJ2aWNlR3JvdXBCeVJlc3VsdCxcbiAgQXJyYXlTZXJ2aWNlVHJlZVRvQXJyT3B0aW9ucyxcbn0gZnJvbSAnLi9hcnJheS10eXBlLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEFycmF5U2VydmljZSB7XG4gIHByaXZhdGUgYzogQWxhaW5VdGlsQXJyYXlDb25maWc7XG5cbiAgY29uc3RydWN0b3IoY29nOiBBbGFpbkNvbmZpZ1NlcnZpY2UpIHtcbiAgICB0aGlzLmMgPSBjb2cubWVyZ2UoJ3V0aWxBcnJheScsIHtcbiAgICAgIGRlZXBNYXBOYW1lOiAnZGVlcCcsXG4gICAgICBwYXJlbnRNYXBOYW1lOiAncGFyZW50JyxcbiAgICAgIGlkTWFwTmFtZTogJ2lkJyxcbiAgICAgIHBhcmVudElkTWFwTmFtZTogJ3BhcmVudF9pZCcsXG4gICAgICBjaGlsZHJlbk1hcE5hbWU6ICdjaGlsZHJlbicsXG4gICAgICB0aXRsZU1hcE5hbWU6ICd0aXRsZScsXG4gICAgICBjaGVja2VkTWFwbmFtZTogJ2NoZWNrZWQnLFxuICAgICAgc2VsZWN0ZWRNYXBuYW1lOiAnc2VsZWN0ZWQnLFxuICAgICAgZXhwYW5kZWRNYXBuYW1lOiAnZXhwYW5kZWQnLFxuICAgICAgZGlzYWJsZWRNYXBuYW1lOiAnZGlzYWJsZWQnLFxuICAgIH0pITtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0IHRyZWUgc3RydWN0dXJlIHRvIGFycmF5IHN0cnVjdHVyZVxuICAgKlxuICAgKiDlsIbmoJHnu5PmnoTovazmjaLmiJDmlbDnu4Tnu5PmnoRcbiAgICovXG4gIHRyZWVUb0FycjxUIGV4dGVuZHMgb2JqZWN0ID0gYW55Pih0cmVlOiBSZWFkb25seUFycmF5PFQ+LCBvcHRpb25zPzogQXJyYXlTZXJ2aWNlVHJlZVRvQXJyT3B0aW9uczxUPik6IFRbXSB7XG4gICAgY29uc3Qgb3B0ID0ge1xuICAgICAgZGVlcE1hcE5hbWU6IHRoaXMuYy5kZWVwTWFwTmFtZSxcbiAgICAgIHBhcmVudE1hcE5hbWU6IHRoaXMuYy5wYXJlbnRNYXBOYW1lLFxuICAgICAgY2hpbGRyZW5NYXBOYW1lOiB0aGlzLmMuY2hpbGRyZW5NYXBOYW1lLFxuICAgICAgY2xlYXJDaGlsZHJlbjogdHJ1ZSxcbiAgICAgIGNiOiBudWxsLFxuICAgICAgLi4ub3B0aW9ucyxcbiAgICB9IGFzIEFycmF5U2VydmljZVRyZWVUb0Fyck9wdGlvbnM7XG4gICAgY29uc3QgcmVzdWx0OiBBcnJheTx7IFtrZXk6IHN0cmluZ106IGFueSB9PiA9IFtdO1xuICAgIGNvbnN0IGluRm4gPSAobGlzdDogUmVhZG9ubHlBcnJheTx7IFtrZXk6IHN0cmluZ106IGFueSB9PiwgcGFyZW50OiBUIHwgbnVsbCwgZGVlcDogbnVtYmVyID0gMCkgPT4ge1xuICAgICAgZm9yIChjb25zdCBpIG9mIGxpc3QpIHtcbiAgICAgICAgaVtvcHQuZGVlcE1hcE5hbWUhXSA9IGRlZXA7XG4gICAgICAgIGlbb3B0LnBhcmVudE1hcE5hbWUhXSA9IHBhcmVudDtcbiAgICAgICAgaWYgKG9wdC5jYikge1xuICAgICAgICAgIG9wdC5jYihpLCBwYXJlbnQsIGRlZXApO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5wdXNoKGkpO1xuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IGlbb3B0LmNoaWxkcmVuTWFwTmFtZSFdO1xuICAgICAgICBpZiAoY2hpbGRyZW4gIT0gbnVsbCAmJiBBcnJheS5pc0FycmF5KGNoaWxkcmVuKSAmJiBjaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaW5GbihjaGlsZHJlbiwgaSBhcyBULCBkZWVwICsgMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdC5jbGVhckNoaWxkcmVuKSB7XG4gICAgICAgICAgZGVsZXRlIGlbb3B0LmNoaWxkcmVuTWFwTmFtZSFdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBpbkZuKHRyZWUsIG51bGwpO1xuICAgIHJldHVybiByZXN1bHQgYXMgVFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgYXJyYXkgc3RydWN0dXJlIHRvIHRyZWUgc3RydWN0dXJlXG4gICAqXG4gICAqIOaVsOe7hOi9rOaNouaIkOagkeaVsOaNrlxuICAgKi9cbiAgYXJyVG9UcmVlPFQgZXh0ZW5kcyBvYmplY3QgPSBhbnk+KGFycjogUmVhZG9ubHlBcnJheTxUPiwgb3B0aW9ucz86IEFycmF5U2VydmljZUFyclRvVHJlZU9wdGlvbnM8VD4pOiBUW10ge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnIpIHx8IGFyci5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBjb25zdCBvcHQgPSB7XG4gICAgICBpZE1hcE5hbWU6IHRoaXMuYy5pZE1hcE5hbWUsXG4gICAgICBwYXJlbnRJZE1hcE5hbWU6IHRoaXMuYy5wYXJlbnRJZE1hcE5hbWUsXG4gICAgICBjaGlsZHJlbk1hcE5hbWU6IHRoaXMuYy5jaGlsZHJlbk1hcE5hbWUsXG4gICAgICBjYjogbnVsbCxcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgfSBhcyBBcnJheVNlcnZpY2VBcnJUb1RyZWVPcHRpb25zPFQ+O1xuICAgIGNvbnN0IHRyZWU6IFRbXSA9IFtdO1xuICAgIGNvbnN0IGNoaWxkcmVuT2Y6IHsgW2tleTogc3RyaW5nXTogVFtdIH0gPSB7fTtcbiAgICBsZXQgcm9vdFBpZCA9IG9wdC5yb290UGFyZW50SWRWYWx1ZTtcbiAgICBjb25zdCBhcnJUeXBlID0gYXJyIGFzIFJlYWRvbmx5QXJyYXk8eyBba2V5OiBzdHJpbmddOiBhbnkgfT47XG4gICAgaWYgKCFyb290UGlkKSB7XG4gICAgICBjb25zdCBwaWRzID0gYXJyVHlwZS5tYXAoaSA9PiBpW29wdC5wYXJlbnRJZE1hcE5hbWUhXSk7XG4gICAgICBjb25zdCBlbXB0eVBpZCA9IHBpZHMuZmluZEluZGV4KHcgPT4gdyA9PSBudWxsKTtcbiAgICAgIHJvb3RQaWQgPSBlbXB0eVBpZCAhPT0gLTEgPyBwaWRzW2VtcHR5UGlkXSA6IHBpZHMuc29ydCgpWzBdO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgYXJyVHlwZSkge1xuICAgICAgY29uc3QgaWQgPSBpdGVtW29wdC5pZE1hcE5hbWUhXTtcbiAgICAgIGNvbnN0IHBpZCA9IGl0ZW1bb3B0LnBhcmVudElkTWFwTmFtZSFdO1xuICAgICAgY2hpbGRyZW5PZltpZF0gPSBjaGlsZHJlbk9mW2lkXSB8fCBbXTtcbiAgICAgIGl0ZW1bb3B0LmNoaWxkcmVuTWFwTmFtZSFdID0gY2hpbGRyZW5PZltpZF07XG4gICAgICBpZiAob3B0LmNiKSB7XG4gICAgICAgIG9wdC5jYihpdGVtIGFzIFQpO1xuICAgICAgfVxuICAgICAgaWYgKHBpZCAhPT0gcm9vdFBpZCkge1xuICAgICAgICBjaGlsZHJlbk9mW3BpZF0gPSBjaGlsZHJlbk9mW3BpZF0gfHwgW107XG4gICAgICAgIGNoaWxkcmVuT2ZbcGlkXS5wdXNoKGl0ZW0gYXMgVCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cmVlLnB1c2goaXRlbSBhcyBUKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRyZWU7XG4gIH1cblxuICAvKipcbiAgICog5pWw57uE6L2s5o2i5oiQIGBuei10cmVlYCDmlbDmja7mupDvvIzpgJrov4cgYG9wdGlvbnNgIOi9rOWMlumhueWQje+8jOS5n+WPr+S7peS9v+eUqCBgb3B0aW9ucy5jYmAg5pu06auY57qn5Yaz5a6a5pWw5o2u6aG5XG4gICAqL1xuICBhcnJUb1RyZWVOb2RlPFQgZXh0ZW5kcyBvYmplY3QgPSBhbnk+KGFycjogUmVhZG9ubHlBcnJheTxUPiwgb3B0aW9ucz86IEFycmF5U2VydmljZUFyclRvVHJlZU5vZGVPcHRpb25zKTogTnpUcmVlTm9kZVtdIHtcbiAgICBjb25zdCBvcHQgPSB7XG4gICAgICBpZE1hcE5hbWU6IHRoaXMuYy5pZE1hcE5hbWUsXG4gICAgICBwYXJlbnRJZE1hcE5hbWU6IHRoaXMuYy5wYXJlbnRJZE1hcE5hbWUsXG4gICAgICB0aXRsZU1hcE5hbWU6IHRoaXMuYy50aXRsZU1hcE5hbWUsXG4gICAgICBpc0xlYWZNYXBOYW1lOiAnaXNMZWFmJyxcbiAgICAgIGNoZWNrZWRNYXBuYW1lOiB0aGlzLmMuY2hlY2tlZE1hcG5hbWUsXG4gICAgICBzZWxlY3RlZE1hcG5hbWU6IHRoaXMuYy5zZWxlY3RlZE1hcG5hbWUsXG4gICAgICBleHBhbmRlZE1hcG5hbWU6IHRoaXMuYy5leHBhbmRlZE1hcG5hbWUsXG4gICAgICBkaXNhYmxlZE1hcG5hbWU6IHRoaXMuYy5kaXNhYmxlZE1hcG5hbWUsXG4gICAgICBjYjogbnVsbCxcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgfSBhcyBBcnJheVNlcnZpY2VBcnJUb1RyZWVOb2RlT3B0aW9uczxUPjtcbiAgICBjb25zdCB0cmVlID0gdGhpcy5hcnJUb1RyZWU8VD4oYXJyLCB7XG4gICAgICBpZE1hcE5hbWU6IG9wdC5pZE1hcE5hbWUsXG4gICAgICBwYXJlbnRJZE1hcE5hbWU6IG9wdC5wYXJlbnRJZE1hcE5hbWUsXG4gICAgICBjaGlsZHJlbk1hcE5hbWU6ICdjaGlsZHJlbicsXG4gICAgfSk7XG4gICAgdGhpcy52aXNpdFRyZWU8VD4odHJlZSwgKGl0ZW06IHsgW2tleTogc3RyaW5nXTogYW55IH0sIHBhcmVudCwgZGVlcCkgPT4ge1xuICAgICAgaXRlbS5rZXkgPSBpdGVtW29wdC5pZE1hcE5hbWUhXTtcbiAgICAgIGl0ZW0udGl0bGUgPSBpdGVtW29wdC50aXRsZU1hcE5hbWUhXTtcbiAgICAgIGl0ZW0uY2hlY2tlZCA9IGl0ZW1bb3B0LmNoZWNrZWRNYXBuYW1lIV07XG4gICAgICBpdGVtLnNlbGVjdGVkID0gaXRlbVtvcHQuc2VsZWN0ZWRNYXBuYW1lIV07XG4gICAgICBpdGVtLmV4cGFuZGVkID0gaXRlbVtvcHQuZXhwYW5kZWRNYXBuYW1lIV07XG4gICAgICBpdGVtLmRpc2FibGVkID0gaXRlbVtvcHQuZGlzYWJsZWRNYXBuYW1lIV07XG4gICAgICBpZiAoaXRlbVtvcHQuaXNMZWFmTWFwTmFtZSFdID09IG51bGwpIHtcbiAgICAgICAgaXRlbS5pc0xlYWYgPSBpdGVtLmNoaWxkcmVuLmxlbmd0aCA9PT0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGl0ZW0uaXNMZWFmID0gaXRlbVtvcHQuaXNMZWFmTWFwTmFtZSFdO1xuICAgICAgfVxuICAgICAgaWYgKG9wdC5jYikge1xuICAgICAgICBvcHQuY2IoaXRlbSBhcyBhbnksIHBhcmVudCwgZGVlcCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHRyZWUubWFwKG5vZGUgPT4gbmV3IE56VHJlZU5vZGUobm9kZSBhcyBhbnkpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDpgJLlvZLorr/pl67mlbTkuKrmoJFcbiAgICovXG4gIHZpc2l0VHJlZTxUIGV4dGVuZHMgb2JqZWN0ID0gYW55PihcbiAgICB0cmVlOiBSZWFkb25seUFycmF5PFQ+LFxuICAgIGNiOiAoaXRlbTogVCwgcGFyZW50OiBUIHwgbnVsbCwgZGVlcDogbnVtYmVyKSA9PiB2b2lkLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKiog5a2Q6aG55ZCN77yM6buY6K6k77yaYCdjaGlsZHJlbidgICovXG4gICAgICBjaGlsZHJlbk1hcE5hbWU/OiBzdHJpbmc7XG4gICAgfSxcbiAgKTogdm9pZCB7XG4gICAgb3B0aW9ucyA9IHtcbiAgICAgIGNoaWxkcmVuTWFwTmFtZTogdGhpcy5jLmNoaWxkcmVuTWFwTmFtZSxcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgfTtcbiAgICBjb25zdCBpbkZuID0gKGRhdGE6IFJlYWRvbmx5QXJyYXk8VD4sIHBhcmVudDogVCB8IG51bGwsIGRlZXA6IG51bWJlcikgPT4ge1xuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgY2IoaXRlbSwgcGFyZW50LCBkZWVwKTtcbiAgICAgICAgY29uc3QgY2hpbGRyZW5WYWwgPSAoaXRlbSBhcyB7IFtrZXk6IHN0cmluZ106IGFueSB9KVtvcHRpb25zIS5jaGlsZHJlbk1hcE5hbWUhXTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW5WYWwpICYmIGNoaWxkcmVuVmFsLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpbkZuKGNoaWxkcmVuVmFsLCBpdGVtLCBkZWVwICsgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIGluRm4odHJlZSwgbnVsbCwgMSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSB2YWx1ZSBvZiB0aGUgZmlyc3QgdHJlZSB2YWx1ZSBpbiB0aGUgdHJlZSB3aGVyZSBwcmVkaWNhdGUgaXMgdHJ1ZSwgYW5kIGB1bmRlZmluZWRgIG90aGVyd2lzZVxuICAgKlxuICAgKiDmoLnmja7mnaHku7bov5Tlm57moJHnmoTnrKzkuIDkuKrlgLzvvIzlkKbliJnov5Tlm54gYHVuZGVmaW5lZGBcbiAgICovXG4gIGZpbmRUcmVlPFQgZXh0ZW5kcyBvYmplY3QgPSBhbnk+KFxuICAgIHRyZWU6IFJlYWRvbmx5QXJyYXk8VD4sXG4gICAgcHJlZGljYXRlOiAoaXRlbTogVCkgPT4gYm9vbGVhbixcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqIOWtkOmhueWQje+8jOm7mOiupO+8mmAnY2hpbGRyZW4nYCAqL1xuICAgICAgY2hpbGRyZW5NYXBOYW1lPzogc3RyaW5nO1xuICAgIH0sXG4gICk6IFQgfCB1bmRlZmluZWQge1xuICAgIGxldCByZXM6IFQgfCB1bmRlZmluZWQ7XG4gICAgdGhpcy52aXNpdFRyZWU8VD4oXG4gICAgICB0cmVlLFxuICAgICAgaXRlbSA9PiB7XG4gICAgICAgIGlmIChyZXMgPT09IHVuZGVmaW5lZCAmJiBwcmVkaWNhdGUoaXRlbSkpIHtcbiAgICAgICAgICByZXMgPSBpdGVtO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb3B0aW9ucyxcbiAgICApO1xuICAgIHJldHVybiByZXM7XG4gIH1cblxuICAvKipcbiAgICog6I635Y+W5omA5pyJ5bey57uP6YCJ5Lit55qEIGBrZXlgIOWAvFxuICAgKi9cbiAgZ2V0S2V5c0J5VHJlZU5vZGUodHJlZTogTnpUcmVlTm9kZVtdLCBvcHRpb25zPzogQXJyYXlTZXJ2aWNlR2V0S2V5c0J5VHJlZU5vZGVPcHRpb25zKTogYW55W10ge1xuICAgIGNvbnN0IG9wdCA9IHtcbiAgICAgIGluY2x1ZGVIYWxmQ2hlY2tlZDogdHJ1ZSxcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgfSBhcyBBcnJheVNlcnZpY2VHZXRLZXlzQnlUcmVlTm9kZU9wdGlvbnM7XG4gICAgY29uc3Qga2V5czogYW55W10gPSBbXTtcbiAgICB0aGlzLnZpc2l0VHJlZTxOelRyZWVOb2RlPih0cmVlLCAoaXRlbSwgcGFyZW50LCBkZWVwKSA9PiB7XG4gICAgICBpZiAoaXRlbS5pc0NoZWNrZWQgfHwgKG9wdC5pbmNsdWRlSGFsZkNoZWNrZWQgJiYgaXRlbS5pc0hhbGZDaGVja2VkKSkge1xuICAgICAgICBrZXlzLnB1c2gob3B0LmNiID8gb3B0LmNiKGl0ZW0sIHBhcmVudCwgZGVlcCkgOiBvcHQua2V5TWFwTmFtZSA/IGl0ZW0ub3JpZ2luW29wdC5rZXlNYXBOYW1lXSA6IGl0ZW0ua2V5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4ga2V5cztcbiAgfVxuICBwcml2YXRlIGJhc2VGbGF0KGFycmF5OiBhbnlbXSwgZGVwdGg6IG51bWJlciwgcmVzdWx0OiBhbnlbXSA9IFtdKTogYW55W10ge1xuICAgIGxldCBpbmRleCA9IC0xO1xuICAgIHdoaWxlICgrK2luZGV4IDwgYXJyYXkubGVuZ3RoKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGFycmF5W2luZGV4XTtcbiAgICAgIGlmIChkZXB0aCA+IDAgJiYgQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgaWYgKGRlcHRoID4gMSkge1xuICAgICAgICAgIHRoaXMuYmFzZUZsYXQodmFsdWUsIGRlcHRoIC0gMSwgcmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZXQgcHVzaEluZGV4ID0gLTE7XG4gICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gcmVzdWx0Lmxlbmd0aDtcblxuICAgICAgICAgIHdoaWxlICgrK3B1c2hJbmRleCA8IHZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgcmVzdWx0W29mZnNldCArIHB1c2hJbmRleF0gPSB2YWx1ZVtwdXNoSW5kZXhdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0W3Jlc3VsdC5sZW5ndGhdID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgLyoqXG4gICAqIFJlY3Vyc2l2ZWx5IGZsYXR0ZW5zIGFycmF5XG4gICAqXG4gICAqIOmAkuW9kuaJgeW5s+aVsOe7hFxuICAgKiBgYGB0c1xuICAgKiBzcnYuZmxhdChbMSwgWzIsIDMsIFs0LCA1LCBbNl1dXV0pID0+IFsxLDIsMyw0LDUsNl1cbiAgICogc3J2LmZsYXQoWzEsIFsyLCAzLCBbNCwgNSwgWzZdXV1dLCAxKSA9PiBbMSwyLDMsWzQsIDUsIFs2XV1dXG4gICAqIGBgYFxuICAgKi9cbiAgZmxhdDxUPihhcnJheTogUmVhZG9ubHlBcnJheTxUPiwgZGVwdGg6IG51bWJlciA9IDEgLyAwKTogUmVhZG9ubHlBcnJheTxUPiB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXJyYXkpID8gdGhpcy5iYXNlRmxhdChhcnJheSBhcyBhbnlbXSwgZGVwdGgpIDogYXJyYXk7XG4gIH1cbiAgLyoqXG4gICAqIEdyb3VwIHRoZSBhcnJheVxuICAgKlxuICAgKiDlr7nmlbDnu4Tov5vooYzliIbnu4RcbiAgICogYGBgdHNcbiAgICogc3J2Lmdyb3VwQnkoWzYuMSwgNC4yLCA2LjNdLCBNYXRoLmZsb29yKSA9PiB7XCI0XCI6WzQuMl0sXCI2XCI6WzYuMSw2LjNdfVxuICAgKiBzcnYuZ3JvdXBCeShbJ29uZScsICd0d28nLCAndGhyZWUnXSwgdiA9PiB2Lmxlbmd0aCkgPT4ge1wiM1wiOltcIm9uZVwiLFwidHdvXCJdLFwiNVwiOltcInRocmVlXCJdfVxuICAgKiBgYGBcbiAgICovXG4gIGdyb3VwQnk8VD4oYXJyYXk6IFJlYWRvbmx5QXJyYXk8VD4sIGl0ZXJhdGVlOiAodmFsdWU6IFQpID0+IHN0cmluZyB8IG51bWJlcik6IEFycmF5U2VydmljZUdyb3VwQnlSZXN1bHQge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheSkpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5LnJlZHVjZSgocmVzdWx0LCB2YWx1ZSkgPT4ge1xuICAgICAgY29uc3Qga2V5ID0gaXRlcmF0ZWUodmFsdWUpO1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChyZXN1bHQsIGtleSkpIHtcbiAgICAgICAgcmVzdWx0W2tleV0ucHVzaCh2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRba2V5XSA9IFt2YWx1ZV07XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sIHt9IGFzIEFycmF5U2VydmljZUdyb3VwQnlSZXN1bHQpO1xuICB9XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgZHVwbGljYXRlLWZyZWUgdmVyc2lvbiBvZiBhbiBhcnJheVxuICAgKlxuICAgKiDliJvlu7rljrvph43lkI7nmoTmlbDnu4RcbiAgICogYGBgdHNcbiAgICogdW5pcShbMSwgMiwgMiwgMywgMV0pID0+IFsxLDIsM11cbiAgICogdW5pcShbeyBhOiAxIH0sIHsgYTogMSB9LCB7IGE6IDIgfV0sICdhJykgPT4gW3tcImFcIjoxfSx7XCJhXCI6Mn1dXG4gICAqIHVuaXEoW3sgYTogMSB9LCB7IGE6IDEgfSwgeyBhOiAyIH1dLCBpID0+IChpLmEgPT09IDEgPyAnYScgOiAnYicpKSA9PiBbe1wiYVwiOjF9LHtcImFcIjoyfV1cbiAgICogYGBgXG4gICAqL1xuICB1bmlxPFQ+KGFycmF5OiBSZWFkb25seUFycmF5PFQ+LCBwcmVkaWNhdGU/OiBzdHJpbmcgfCAoKHZhbHVlOiBUKSA9PiBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuKSk6IFJlYWRvbmx5QXJyYXk8VD4ge1xuICAgIHJldHVybiBBcnJheS5mcm9tKFxuICAgICAgYXJyYXlcbiAgICAgICAgLnJlZHVjZSgobWFwLCB2YWx1ZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGtleSA9IHByZWRpY2F0ZSA/ICh0eXBlb2YgcHJlZGljYXRlID09PSAnc3RyaW5nJyA/ICh2YWx1ZSBhcyBhbnkpW3ByZWRpY2F0ZV0gOiBwcmVkaWNhdGUhKHZhbHVlKSkgOiB2YWx1ZTtcbiAgICAgICAgICBpZiAoIW1hcC5oYXMoa2V5KSkge1xuICAgICAgICAgICAgbWFwLnNldChrZXksIHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG1hcDtcbiAgICAgICAgfSwgbmV3IE1hcDxzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuLCBUPigpKVxuICAgICAgICAudmFsdWVzKCksXG4gICAgKTtcbiAgfVxufVxuIl19