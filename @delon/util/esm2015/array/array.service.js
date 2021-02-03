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
                if (childrenVal && childrenVal.length > 0) {
                    inFn(childrenVal, item, deep + 1);
                }
            }
        });
        inFn(tree, null, 1);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3V0aWwvYXJyYXkvYXJyYXkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGtCQUFrQixFQUF3QixNQUFNLG9CQUFvQixDQUFDO0FBQzlFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7O0FBVXJELE1BQU0sT0FBTyxZQUFZOzs7O0lBR3ZCLFlBQVksR0FBdUI7UUFDakMsSUFBSSxDQUFDLENBQUMsR0FBRyxtQkFBQSxHQUFHLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRTtZQUM5QixXQUFXLEVBQUUsTUFBTTtZQUNuQixhQUFhLEVBQUUsUUFBUTtZQUN2QixTQUFTLEVBQUUsSUFBSTtZQUNmLGVBQWUsRUFBRSxXQUFXO1lBQzVCLGVBQWUsRUFBRSxVQUFVO1lBQzNCLFlBQVksRUFBRSxPQUFPO1lBQ3JCLGNBQWMsRUFBRSxTQUFTO1lBQ3pCLGVBQWUsRUFBRSxVQUFVO1lBQzNCLGVBQWUsRUFBRSxVQUFVO1lBQzNCLGVBQWUsRUFBRSxVQUFVO1NBQzVCLENBQUMsRUFBQyxDQUFDO0lBQ04sQ0FBQzs7Ozs7Ozs7OztJQU9ELFNBQVMsQ0FBeUIsSUFBc0IsRUFBRSxPQUF5Qzs7Y0FDM0YsR0FBRyxHQUFHLG1DQUNWLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFDL0IsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsYUFBYSxFQUNuQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxlQUFlLEVBQ3ZDLGFBQWEsRUFBRSxJQUFJLEVBQ25CLEVBQUUsRUFBRSxJQUFJLElBQ0wsT0FBTyxHQUNxQjs7Y0FDM0IsTUFBTSxHQUFrQyxFQUFFOztjQUMxQyxJQUFJOzs7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ZixLQUFLO2FBQ0YsTUFBTTs7Ozs7UUFBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRTs7a0JBQ2YsR0FBRyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLFNBQVMsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQUEsS0FBSyxFQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQUEsU0FBUyxFQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSztZQUMvRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDakIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDckI7WUFDRCxPQUFPLEdBQUcsQ0FBQztRQUNiLENBQUMsR0FBRSxJQUFJLEdBQUcsRUFBZ0MsQ0FBQzthQUMxQyxNQUFNLEVBQUUsQ0FDWixDQUFDO0lBQ0osQ0FBQzs7O1lBcFFGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7WUFWekIsa0JBQWtCOzs7Ozs7OztJQVl6Qix5QkFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UsIEFsYWluVXRpbEFycmF5Q29uZmlnIH0gZnJvbSAnQGRlbG9uL3V0aWwvY29uZmlnJztcbmltcG9ydCB7IE56VHJlZU5vZGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHJlZSc7XG5pbXBvcnQge1xuICBBcnJheVNlcnZpY2VBcnJUb1RyZWVOb2RlT3B0aW9ucyxcbiAgQXJyYXlTZXJ2aWNlQXJyVG9UcmVlT3B0aW9ucyxcbiAgQXJyYXlTZXJ2aWNlR2V0S2V5c0J5VHJlZU5vZGVPcHRpb25zLFxuICBBcnJheVNlcnZpY2VHcm91cEJ5UmVzdWx0LFxuICBBcnJheVNlcnZpY2VUcmVlVG9BcnJPcHRpb25zLFxufSBmcm9tICcuL2FycmF5LXR5cGUuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQXJyYXlTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBjOiBBbGFpblV0aWxBcnJheUNvbmZpZztcblxuICBjb25zdHJ1Y3Rvcihjb2c6IEFsYWluQ29uZmlnU2VydmljZSkge1xuICAgIHRoaXMuYyA9IGNvZy5tZXJnZSgndXRpbEFycmF5Jywge1xuICAgICAgZGVlcE1hcE5hbWU6ICdkZWVwJyxcbiAgICAgIHBhcmVudE1hcE5hbWU6ICdwYXJlbnQnLFxuICAgICAgaWRNYXBOYW1lOiAnaWQnLFxuICAgICAgcGFyZW50SWRNYXBOYW1lOiAncGFyZW50X2lkJyxcbiAgICAgIGNoaWxkcmVuTWFwTmFtZTogJ2NoaWxkcmVuJyxcbiAgICAgIHRpdGxlTWFwTmFtZTogJ3RpdGxlJyxcbiAgICAgIGNoZWNrZWRNYXBuYW1lOiAnY2hlY2tlZCcsXG4gICAgICBzZWxlY3RlZE1hcG5hbWU6ICdzZWxlY3RlZCcsXG4gICAgICBleHBhbmRlZE1hcG5hbWU6ICdleHBhbmRlZCcsXG4gICAgICBkaXNhYmxlZE1hcG5hbWU6ICdkaXNhYmxlZCcsXG4gICAgfSkhO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgdHJlZSBzdHJ1Y3R1cmUgdG8gYXJyYXkgc3RydWN0dXJlXG4gICAqXG4gICAqIOWwhuagkee7k+aehOi9rOaNouaIkOaVsOe7hOe7k+aehFxuICAgKi9cbiAgdHJlZVRvQXJyPFQgZXh0ZW5kcyBvYmplY3QgPSBhbnk+KHRyZWU6IFJlYWRvbmx5QXJyYXk8VD4sIG9wdGlvbnM/OiBBcnJheVNlcnZpY2VUcmVlVG9BcnJPcHRpb25zPFQ+KTogVFtdIHtcbiAgICBjb25zdCBvcHQgPSB7XG4gICAgICBkZWVwTWFwTmFtZTogdGhpcy5jLmRlZXBNYXBOYW1lLFxuICAgICAgcGFyZW50TWFwTmFtZTogdGhpcy5jLnBhcmVudE1hcE5hbWUsXG4gICAgICBjaGlsZHJlbk1hcE5hbWU6IHRoaXMuYy5jaGlsZHJlbk1hcE5hbWUsXG4gICAgICBjbGVhckNoaWxkcmVuOiB0cnVlLFxuICAgICAgY2I6IG51bGwsXG4gICAgICAuLi5vcHRpb25zLFxuICAgIH0gYXMgQXJyYXlTZXJ2aWNlVHJlZVRvQXJyT3B0aW9ucztcbiAgICBjb25zdCByZXN1bHQ6IEFycmF5PHsgW2tleTogc3RyaW5nXTogYW55IH0+ID0gW107XG4gICAgY29uc3QgaW5GbiA9IChsaXN0OiBSZWFkb25seUFycmF5PHsgW2tleTogc3RyaW5nXTogYW55IH0+LCBwYXJlbnQ6IFQgfCBudWxsLCBkZWVwOiBudW1iZXIgPSAwKSA9PiB7XG4gICAgICBmb3IgKGNvbnN0IGkgb2YgbGlzdCkge1xuICAgICAgICBpW29wdC5kZWVwTWFwTmFtZSFdID0gZGVlcDtcbiAgICAgICAgaVtvcHQucGFyZW50TWFwTmFtZSFdID0gcGFyZW50O1xuICAgICAgICBpZiAob3B0LmNiKSB7XG4gICAgICAgICAgb3B0LmNiKGksIHBhcmVudCwgZGVlcCk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnB1c2goaSk7XG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gaVtvcHQuY2hpbGRyZW5NYXBOYW1lIV07XG4gICAgICAgIGlmIChjaGlsZHJlbiAhPSBudWxsICYmIEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pICYmIGNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpbkZuKGNoaWxkcmVuLCBpIGFzIFQsIGRlZXAgKyAxKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0LmNsZWFyQ2hpbGRyZW4pIHtcbiAgICAgICAgICBkZWxldGUgaVtvcHQuY2hpbGRyZW5NYXBOYW1lIV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIGluRm4odHJlZSwgbnVsbCk7XG4gICAgcmV0dXJuIHJlc3VsdCBhcyBUW107XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydCBhcnJheSBzdHJ1Y3R1cmUgdG8gdHJlZSBzdHJ1Y3R1cmVcbiAgICpcbiAgICog5pWw57uE6L2s5o2i5oiQ5qCR5pWw5o2uXG4gICAqL1xuICBhcnJUb1RyZWU8VCBleHRlbmRzIG9iamVjdCA9IGFueT4oYXJyOiBSZWFkb25seUFycmF5PFQ+LCBvcHRpb25zPzogQXJyYXlTZXJ2aWNlQXJyVG9UcmVlT3B0aW9uczxUPik6IFRbXSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycikgfHwgYXJyLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGNvbnN0IG9wdCA9IHtcbiAgICAgIGlkTWFwTmFtZTogdGhpcy5jLmlkTWFwTmFtZSxcbiAgICAgIHBhcmVudElkTWFwTmFtZTogdGhpcy5jLnBhcmVudElkTWFwTmFtZSxcbiAgICAgIGNoaWxkcmVuTWFwTmFtZTogdGhpcy5jLmNoaWxkcmVuTWFwTmFtZSxcbiAgICAgIGNiOiBudWxsLFxuICAgICAgLi4ub3B0aW9ucyxcbiAgICB9IGFzIEFycmF5U2VydmljZUFyclRvVHJlZU9wdGlvbnM8VD47XG4gICAgY29uc3QgdHJlZTogVFtdID0gW107XG4gICAgY29uc3QgY2hpbGRyZW5PZjogeyBba2V5OiBzdHJpbmddOiBUW10gfSA9IHt9O1xuICAgIGxldCByb290UGlkID0gb3B0LnJvb3RQYXJlbnRJZFZhbHVlO1xuICAgIGNvbnN0IGFyclR5cGUgPSBhcnIgYXMgUmVhZG9ubHlBcnJheTx7IFtrZXk6IHN0cmluZ106IGFueSB9PjtcbiAgICBpZiAoIXJvb3RQaWQpIHtcbiAgICAgIGNvbnN0IHBpZHMgPSBhcnJUeXBlLm1hcChpID0+IGlbb3B0LnBhcmVudElkTWFwTmFtZSFdKTtcbiAgICAgIGNvbnN0IGVtcHR5UGlkID0gcGlkcy5maW5kSW5kZXgodyA9PiB3ID09IG51bGwpO1xuICAgICAgcm9vdFBpZCA9IGVtcHR5UGlkICE9PSAtMSA/IHBpZHNbZW1wdHlQaWRdIDogcGlkcy5zb3J0KClbMF07XG4gICAgfVxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBhcnJUeXBlKSB7XG4gICAgICBjb25zdCBpZCA9IGl0ZW1bb3B0LmlkTWFwTmFtZSFdO1xuICAgICAgY29uc3QgcGlkID0gaXRlbVtvcHQucGFyZW50SWRNYXBOYW1lIV07XG4gICAgICBjaGlsZHJlbk9mW2lkXSA9IGNoaWxkcmVuT2ZbaWRdIHx8IFtdO1xuICAgICAgaXRlbVtvcHQuY2hpbGRyZW5NYXBOYW1lIV0gPSBjaGlsZHJlbk9mW2lkXTtcbiAgICAgIGlmIChvcHQuY2IpIHtcbiAgICAgICAgb3B0LmNiKGl0ZW0gYXMgVCk7XG4gICAgICB9XG4gICAgICBpZiAocGlkICE9PSByb290UGlkKSB7XG4gICAgICAgIGNoaWxkcmVuT2ZbcGlkXSA9IGNoaWxkcmVuT2ZbcGlkXSB8fCBbXTtcbiAgICAgICAgY2hpbGRyZW5PZltwaWRdLnB1c2goaXRlbSBhcyBUKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyZWUucHVzaChpdGVtIGFzIFQpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJlZTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmlbDnu4TovazmjaLmiJAgYG56LXRyZWVgIOaVsOaNrua6kO+8jOmAmui/hyBgb3B0aW9uc2Ag6L2s5YyW6aG55ZCN77yM5Lmf5Y+v5Lul5L2/55SoIGBvcHRpb25zLmNiYCDmm7Tpq5jnuqflhrPlrprmlbDmja7poblcbiAgICovXG4gIGFyclRvVHJlZU5vZGU8VCBleHRlbmRzIG9iamVjdCA9IGFueT4oYXJyOiBSZWFkb25seUFycmF5PFQ+LCBvcHRpb25zPzogQXJyYXlTZXJ2aWNlQXJyVG9UcmVlTm9kZU9wdGlvbnMpOiBOelRyZWVOb2RlW10ge1xuICAgIGNvbnN0IG9wdCA9IHtcbiAgICAgIGlkTWFwTmFtZTogdGhpcy5jLmlkTWFwTmFtZSxcbiAgICAgIHBhcmVudElkTWFwTmFtZTogdGhpcy5jLnBhcmVudElkTWFwTmFtZSxcbiAgICAgIHRpdGxlTWFwTmFtZTogdGhpcy5jLnRpdGxlTWFwTmFtZSxcbiAgICAgIGlzTGVhZk1hcE5hbWU6ICdpc0xlYWYnLFxuICAgICAgY2hlY2tlZE1hcG5hbWU6IHRoaXMuYy5jaGVja2VkTWFwbmFtZSxcbiAgICAgIHNlbGVjdGVkTWFwbmFtZTogdGhpcy5jLnNlbGVjdGVkTWFwbmFtZSxcbiAgICAgIGV4cGFuZGVkTWFwbmFtZTogdGhpcy5jLmV4cGFuZGVkTWFwbmFtZSxcbiAgICAgIGRpc2FibGVkTWFwbmFtZTogdGhpcy5jLmRpc2FibGVkTWFwbmFtZSxcbiAgICAgIGNiOiBudWxsLFxuICAgICAgLi4ub3B0aW9ucyxcbiAgICB9IGFzIEFycmF5U2VydmljZUFyclRvVHJlZU5vZGVPcHRpb25zPFQ+O1xuICAgIGNvbnN0IHRyZWUgPSB0aGlzLmFyclRvVHJlZTxUPihhcnIsIHtcbiAgICAgIGlkTWFwTmFtZTogb3B0LmlkTWFwTmFtZSxcbiAgICAgIHBhcmVudElkTWFwTmFtZTogb3B0LnBhcmVudElkTWFwTmFtZSxcbiAgICAgIGNoaWxkcmVuTWFwTmFtZTogJ2NoaWxkcmVuJyxcbiAgICB9KTtcbiAgICB0aGlzLnZpc2l0VHJlZTxUPih0cmVlLCAoaXRlbTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSwgcGFyZW50LCBkZWVwKSA9PiB7XG4gICAgICBpdGVtLmtleSA9IGl0ZW1bb3B0LmlkTWFwTmFtZSFdO1xuICAgICAgaXRlbS50aXRsZSA9IGl0ZW1bb3B0LnRpdGxlTWFwTmFtZSFdO1xuICAgICAgaXRlbS5jaGVja2VkID0gaXRlbVtvcHQuY2hlY2tlZE1hcG5hbWUhXTtcbiAgICAgIGl0ZW0uc2VsZWN0ZWQgPSBpdGVtW29wdC5zZWxlY3RlZE1hcG5hbWUhXTtcbiAgICAgIGl0ZW0uZXhwYW5kZWQgPSBpdGVtW29wdC5leHBhbmRlZE1hcG5hbWUhXTtcbiAgICAgIGl0ZW0uZGlzYWJsZWQgPSBpdGVtW29wdC5kaXNhYmxlZE1hcG5hbWUhXTtcbiAgICAgIGlmIChpdGVtW29wdC5pc0xlYWZNYXBOYW1lIV0gPT0gbnVsbCkge1xuICAgICAgICBpdGVtLmlzTGVhZiA9IGl0ZW0uY2hpbGRyZW4ubGVuZ3RoID09PSAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXRlbS5pc0xlYWYgPSBpdGVtW29wdC5pc0xlYWZNYXBOYW1lIV07XG4gICAgICB9XG4gICAgICBpZiAob3B0LmNiKSB7XG4gICAgICAgIG9wdC5jYihpdGVtIGFzIGFueSwgcGFyZW50LCBkZWVwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdHJlZS5tYXAobm9kZSA9PiBuZXcgTnpUcmVlTm9kZShub2RlIGFzIGFueSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIOmAkuW9kuiuv+mXruaVtOS4quagkVxuICAgKi9cbiAgdmlzaXRUcmVlPFQgZXh0ZW5kcyBvYmplY3QgPSBhbnk+KFxuICAgIHRyZWU6IFJlYWRvbmx5QXJyYXk8VD4sXG4gICAgY2I6IChpdGVtOiBULCBwYXJlbnQ6IFQgfCBudWxsLCBkZWVwOiBudW1iZXIpID0+IHZvaWQsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKiDlrZDpobnlkI3vvIzpu5jorqTvvJpgJ2NoaWxkcmVuJ2AgKi9cbiAgICAgIGNoaWxkcmVuTWFwTmFtZT86IHN0cmluZztcbiAgICB9LFxuICApOiB2b2lkIHtcbiAgICBvcHRpb25zID0ge1xuICAgICAgY2hpbGRyZW5NYXBOYW1lOiB0aGlzLmMuY2hpbGRyZW5NYXBOYW1lLFxuICAgICAgLi4ub3B0aW9ucyxcbiAgICB9O1xuICAgIGNvbnN0IGluRm4gPSAoZGF0YTogUmVhZG9ubHlBcnJheTxUPiwgcGFyZW50OiBUIHwgbnVsbCwgZGVlcDogbnVtYmVyKSA9PiB7XG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZGF0YSkge1xuICAgICAgICBjYihpdGVtLCBwYXJlbnQsIGRlZXApO1xuICAgICAgICBjb25zdCBjaGlsZHJlblZhbCA9IChpdGVtIGFzIHsgW2tleTogc3RyaW5nXTogYW55IH0pW29wdGlvbnMhLmNoaWxkcmVuTWFwTmFtZSFdO1xuICAgICAgICBpZiAoY2hpbGRyZW5WYWwgJiYgY2hpbGRyZW5WYWwubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGluRm4oY2hpbGRyZW5WYWwsIGl0ZW0sIGRlZXAgKyAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgaW5Gbih0cmVlLCBudWxsLCAxKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDojrflj5bmiYDmnInlt7Lnu4/pgInkuK3nmoQgYGtleWAg5YC8XG4gICAqL1xuICBnZXRLZXlzQnlUcmVlTm9kZSh0cmVlOiBOelRyZWVOb2RlW10sIG9wdGlvbnM/OiBBcnJheVNlcnZpY2VHZXRLZXlzQnlUcmVlTm9kZU9wdGlvbnMpOiBhbnlbXSB7XG4gICAgY29uc3Qgb3B0ID0ge1xuICAgICAgaW5jbHVkZUhhbGZDaGVja2VkOiB0cnVlLFxuICAgICAgLi4ub3B0aW9ucyxcbiAgICB9IGFzIEFycmF5U2VydmljZUdldEtleXNCeVRyZWVOb2RlT3B0aW9ucztcbiAgICBjb25zdCBrZXlzOiBhbnlbXSA9IFtdO1xuICAgIHRoaXMudmlzaXRUcmVlPE56VHJlZU5vZGU+KHRyZWUsIChpdGVtLCBwYXJlbnQsIGRlZXApID0+IHtcbiAgICAgIGlmIChpdGVtLmlzQ2hlY2tlZCB8fCAob3B0LmluY2x1ZGVIYWxmQ2hlY2tlZCAmJiBpdGVtLmlzSGFsZkNoZWNrZWQpKSB7XG4gICAgICAgIGtleXMucHVzaChvcHQuY2IgPyBvcHQuY2IoaXRlbSwgcGFyZW50LCBkZWVwKSA6IG9wdC5rZXlNYXBOYW1lID8gaXRlbS5vcmlnaW5bb3B0LmtleU1hcE5hbWVdIDogaXRlbS5rZXkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBrZXlzO1xuICB9XG4gIHByaXZhdGUgYmFzZUZsYXQoYXJyYXk6IGFueVtdLCBkZXB0aDogbnVtYmVyLCByZXN1bHQ6IGFueVtdID0gW10pOiBhbnlbXSB7XG4gICAgbGV0IGluZGV4ID0gLTE7XG4gICAgd2hpbGUgKCsraW5kZXggPCBhcnJheS5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gYXJyYXlbaW5kZXhdO1xuICAgICAgaWYgKGRlcHRoID4gMCAmJiBBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICBpZiAoZGVwdGggPiAxKSB7XG4gICAgICAgICAgdGhpcy5iYXNlRmxhdCh2YWx1ZSwgZGVwdGggLSAxLCByZXN1bHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxldCBwdXNoSW5kZXggPSAtMTtcbiAgICAgICAgICBjb25zdCBvZmZzZXQgPSByZXN1bHQubGVuZ3RoO1xuXG4gICAgICAgICAgd2hpbGUgKCsrcHVzaEluZGV4IDwgdmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXN1bHRbb2Zmc2V0ICsgcHVzaEluZGV4XSA9IHZhbHVlW3B1c2hJbmRleF07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICAvKipcbiAgICogUmVjdXJzaXZlbHkgZmxhdHRlbnMgYXJyYXlcbiAgICpcbiAgICog6YCS5b2S5omB5bmz5pWw57uEXG4gICAqIGBgYHRzXG4gICAqIHNydi5mbGF0KFsxLCBbMiwgMywgWzQsIDUsIFs2XV1dXSkgPT4gWzEsMiwzLDQsNSw2XVxuICAgKiBzcnYuZmxhdChbMSwgWzIsIDMsIFs0LCA1LCBbNl1dXV0sIDEpID0+IFsxLDIsMyxbNCwgNSwgWzZdXV1cbiAgICogYGBgXG4gICAqL1xuICBmbGF0PFQ+KGFycmF5OiBSZWFkb25seUFycmF5PFQ+LCBkZXB0aDogbnVtYmVyID0gMSAvIDApOiBSZWFkb25seUFycmF5PFQ+IHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShhcnJheSkgPyB0aGlzLmJhc2VGbGF0KGFycmF5IGFzIGFueVtdLCBkZXB0aCkgOiBhcnJheTtcbiAgfVxuICAvKipcbiAgICogR3JvdXAgdGhlIGFycmF5XG4gICAqXG4gICAqIOWvueaVsOe7hOi/m+ihjOWIhue7hFxuICAgKiBgYGB0c1xuICAgKiBzcnYuZ3JvdXBCeShbNi4xLCA0LjIsIDYuM10sIE1hdGguZmxvb3IpID0+IHtcIjRcIjpbNC4yXSxcIjZcIjpbNi4xLDYuM119XG4gICAqIHNydi5ncm91cEJ5KFsnb25lJywgJ3R3bycsICd0aHJlZSddLCB2ID0+IHYubGVuZ3RoKSA9PiB7XCIzXCI6W1wib25lXCIsXCJ0d29cIl0sXCI1XCI6W1widGhyZWVcIl19XG4gICAqIGBgYFxuICAgKi9cbiAgZ3JvdXBCeTxUPihhcnJheTogUmVhZG9ubHlBcnJheTxUPiwgaXRlcmF0ZWU6ICh2YWx1ZTogVCkgPT4gc3RyaW5nIHwgbnVtYmVyKTogQXJyYXlTZXJ2aWNlR3JvdXBCeVJlc3VsdCB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5KSkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICByZXR1cm4gYXJyYXkucmVkdWNlKChyZXN1bHQsIHZhbHVlKSA9PiB7XG4gICAgICBjb25zdCBrZXkgPSBpdGVyYXRlZSh2YWx1ZSk7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHJlc3VsdCwga2V5KSkge1xuICAgICAgICByZXN1bHRba2V5XS5wdXNoKHZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdFtrZXldID0gW3ZhbHVlXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSwge30gYXMgQXJyYXlTZXJ2aWNlR3JvdXBCeVJlc3VsdCk7XG4gIH1cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBkdXBsaWNhdGUtZnJlZSB2ZXJzaW9uIG9mIGFuIGFycmF5XG4gICAqXG4gICAqIOWIm+W7uuWOu+mHjeWQjueahOaVsOe7hFxuICAgKiBgYGB0c1xuICAgKiB1bmlxKFsxLCAyLCAyLCAzLCAxXSkgPT4gWzEsMiwzXVxuICAgKiB1bmlxKFt7IGE6IDEgfSwgeyBhOiAxIH0sIHsgYTogMiB9XSwgJ2EnKSA9PiBbe1wiYVwiOjF9LHtcImFcIjoyfV1cbiAgICogdW5pcShbeyBhOiAxIH0sIHsgYTogMSB9LCB7IGE6IDIgfV0sIGkgPT4gKGkuYSA9PT0gMSA/ICdhJyA6ICdiJykpID0+IFt7XCJhXCI6MX0se1wiYVwiOjJ9XVxuICAgKiBgYGBcbiAgICovXG4gIHVuaXE8VD4oYXJyYXk6IFJlYWRvbmx5QXJyYXk8VD4sIHByZWRpY2F0ZT86IHN0cmluZyB8ICgodmFsdWU6IFQpID0+IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4pKTogUmVhZG9ubHlBcnJheTxUPiB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oXG4gICAgICBhcnJheVxuICAgICAgICAucmVkdWNlKChtYXAsIHZhbHVlKSA9PiB7XG4gICAgICAgICAgY29uc3Qga2V5ID0gcHJlZGljYXRlID8gKHR5cGVvZiBwcmVkaWNhdGUgPT09ICdzdHJpbmcnID8gKHZhbHVlIGFzIGFueSlbcHJlZGljYXRlXSA6IHByZWRpY2F0ZSEodmFsdWUpKSA6IHZhbHVlO1xuICAgICAgICAgIGlmICghbWFwLmhhcyhrZXkpKSB7XG4gICAgICAgICAgICBtYXAuc2V0KGtleSwgdmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbWFwO1xuICAgICAgICB9LCBuZXcgTWFwPHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4sIFQ+KCkpXG4gICAgICAgIC52YWx1ZXMoKSxcbiAgICApO1xuICB9XG59XG4iXX0=