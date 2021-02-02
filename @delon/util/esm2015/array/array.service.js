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
     * 将树结构转换成数组结构
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
                    inFn(children, i, deep + 1);
                }
                if (opt.clearChildren) {
                    delete i[(/** @type {?} */ (opt.childrenMapName))];
                }
            }
        });
        inFn(tree, 1);
        return result;
    }
    /**
     * 数组转换成树数据
     * @param {?} arr
     * @param {?=} options
     * @return {?}
     */
    arrToTree(arr, options) {
        /** @type {?} */
        const opt = (/** @type {?} */ (Object.assign({ idMapName: this.c.idMapName, parentIdMapName: this.c.parentIdMapName, childrenMapName: this.c.childrenMapName, cb: null }, options)));
        if (arr.length === 0) {
            return [];
        }
        /** @type {?} */
        const tree = [];
        /** @type {?} */
        const childrenOf = {};
        /** @type {?} */
        let rootPid = opt.rootParentIdValue;
        if (!rootPid) {
            /** @type {?} */
            const pids = arr.map((/**
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
        for (const item of arr) {
            /** @type {?} */
            const id = item[(/** @type {?} */ (opt.idMapName))];
            /** @type {?} */
            const pid = item[(/** @type {?} */ (opt.parentIdMapName))];
            childrenOf[id] = childrenOf[id] || [];
            item[(/** @type {?} */ (opt.childrenMapName))] = childrenOf[id];
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
                opt.cb(item, parent, deep);
            }
        }));
        return tree.map((/**
         * @param {?} node
         * @return {?}
         */
        node => new NzTreeNode(node)));
    }
    /**
     * 递归访问整个树
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
                const childrenVal = item[(/** @type {?} */ ((/** @type {?} */ (options)).childrenMapName))];
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
     * @param {?} array
     * @param {?=} depth
     * @return {?}
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
        }), {});
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3V0aWwvYXJyYXkvYXJyYXkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGtCQUFrQixFQUF3QixNQUFNLG9CQUFvQixDQUFDO0FBQzlFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7O0FBVXJELE1BQU0sT0FBTyxZQUFZOzs7O0lBR3ZCLFlBQVksR0FBdUI7UUFDakMsSUFBSSxDQUFDLENBQUMsR0FBRyxtQkFBQSxHQUFHLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRTtZQUM5QixXQUFXLEVBQUUsTUFBTTtZQUNuQixhQUFhLEVBQUUsUUFBUTtZQUN2QixTQUFTLEVBQUUsSUFBSTtZQUNmLGVBQWUsRUFBRSxXQUFXO1lBQzVCLGVBQWUsRUFBRSxVQUFVO1lBQzNCLFlBQVksRUFBRSxPQUFPO1lBQ3JCLGNBQWMsRUFBRSxTQUFTO1lBQ3pCLGVBQWUsRUFBRSxVQUFVO1lBQzNCLGVBQWUsRUFBRSxVQUFVO1lBQzNCLGVBQWUsRUFBRSxVQUFVO1NBQzVCLENBQUMsRUFBQyxDQUFDO0lBQ04sQ0FBQzs7Ozs7OztJQUtELFNBQVMsQ0FBQyxJQUFXLEVBQUUsT0FBc0M7O2NBQ3JELEdBQUcsR0FBRyxtQ0FDVixXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQy9CLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLGFBQWEsRUFDbkMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsZUFBZSxFQUN2QyxhQUFhLEVBQUUsSUFBSSxFQUNuQixFQUFFLEVBQUUsSUFBSSxJQUNMLE9BQU8sR0FDcUI7O2NBQzNCLE1BQU0sR0FBVSxFQUFFOztjQUNsQixJQUFJOzs7Ozs7UUFB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LENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ3BFLENBQUM7Ozs7Ozs7Ozs7Ozs7SUFVRCxPQUFPLENBQUMsS0FBWSxFQUFFLFFBQTZCO1FBQ2pELElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3pCLE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFDRCxPQUFPLEtBQUssQ0FBQyxNQUFNOzs7OztRQUFDLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFOztrQkFDOUIsR0FBRyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDM0IsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxFQUFFO2dCQUNyRCxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3pCO2lCQUFNO2dCQUNMLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3ZCO1lBQ0QsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQyxHQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQzs7O1lBdk9GLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7WUFWekIsa0JBQWtCOzs7Ozs7OztJQVl6Qix5QkFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UsIEFsYWluVXRpbEFycmF5Q29uZmlnIH0gZnJvbSAnQGRlbG9uL3V0aWwvY29uZmlnJztcbmltcG9ydCB7IE56VHJlZU5vZGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHJlZSc7XG5pbXBvcnQge1xuICBBcnJheVNlcnZpY2VBcnJUb1RyZWVOb2RlT3B0aW9ucyxcbiAgQXJyYXlTZXJ2aWNlQXJyVG9UcmVlT3B0aW9ucyxcbiAgQXJyYXlTZXJ2aWNlR2V0S2V5c0J5VHJlZU5vZGVPcHRpb25zLFxuICBBcnJheVNlcnZpY2VHcm91cEJ5UmVzdWx0LFxuICBBcnJheVNlcnZpY2VUcmVlVG9BcnJPcHRpb25zLFxufSBmcm9tICcuL2FycmF5LXR5cGUuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQXJyYXlTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBjOiBBbGFpblV0aWxBcnJheUNvbmZpZztcblxuICBjb25zdHJ1Y3Rvcihjb2c6IEFsYWluQ29uZmlnU2VydmljZSkge1xuICAgIHRoaXMuYyA9IGNvZy5tZXJnZSgndXRpbEFycmF5Jywge1xuICAgICAgZGVlcE1hcE5hbWU6ICdkZWVwJyxcbiAgICAgIHBhcmVudE1hcE5hbWU6ICdwYXJlbnQnLFxuICAgICAgaWRNYXBOYW1lOiAnaWQnLFxuICAgICAgcGFyZW50SWRNYXBOYW1lOiAncGFyZW50X2lkJyxcbiAgICAgIGNoaWxkcmVuTWFwTmFtZTogJ2NoaWxkcmVuJyxcbiAgICAgIHRpdGxlTWFwTmFtZTogJ3RpdGxlJyxcbiAgICAgIGNoZWNrZWRNYXBuYW1lOiAnY2hlY2tlZCcsXG4gICAgICBzZWxlY3RlZE1hcG5hbWU6ICdzZWxlY3RlZCcsXG4gICAgICBleHBhbmRlZE1hcG5hbWU6ICdleHBhbmRlZCcsXG4gICAgICBkaXNhYmxlZE1hcG5hbWU6ICdkaXNhYmxlZCcsXG4gICAgfSkhO1xuICB9XG5cbiAgLyoqXG4gICAqIOWwhuagkee7k+aehOi9rOaNouaIkOaVsOe7hOe7k+aehFxuICAgKi9cbiAgdHJlZVRvQXJyKHRyZWU6IGFueVtdLCBvcHRpb25zPzogQXJyYXlTZXJ2aWNlVHJlZVRvQXJyT3B0aW9ucyk6IGFueVtdIHtcbiAgICBjb25zdCBvcHQgPSB7XG4gICAgICBkZWVwTWFwTmFtZTogdGhpcy5jLmRlZXBNYXBOYW1lLFxuICAgICAgcGFyZW50TWFwTmFtZTogdGhpcy5jLnBhcmVudE1hcE5hbWUsXG4gICAgICBjaGlsZHJlbk1hcE5hbWU6IHRoaXMuYy5jaGlsZHJlbk1hcE5hbWUsXG4gICAgICBjbGVhckNoaWxkcmVuOiB0cnVlLFxuICAgICAgY2I6IG51bGwsXG4gICAgICAuLi5vcHRpb25zLFxuICAgIH0gYXMgQXJyYXlTZXJ2aWNlVHJlZVRvQXJyT3B0aW9ucztcbiAgICBjb25zdCByZXN1bHQ6IGFueVtdID0gW107XG4gICAgY29uc3QgaW5GbiA9IChsaXN0OiBhbnlbXSwgcGFyZW50OiBhbnksIGRlZXA6IG51bWJlciA9IDApID0+IHtcbiAgICAgIGZvciAoY29uc3QgaSBvZiBsaXN0KSB7XG4gICAgICAgIGlbb3B0LmRlZXBNYXBOYW1lIV0gPSBkZWVwO1xuICAgICAgICBpW29wdC5wYXJlbnRNYXBOYW1lIV0gPSBwYXJlbnQ7XG4gICAgICAgIGlmIChvcHQuY2IpIHtcbiAgICAgICAgICBvcHQuY2IoaSwgcGFyZW50LCBkZWVwKTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQucHVzaChpKTtcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBpW29wdC5jaGlsZHJlbk1hcE5hbWUhXTtcbiAgICAgICAgaWYgKGNoaWxkcmVuICE9IG51bGwgJiYgQXJyYXkuaXNBcnJheShjaGlsZHJlbikgJiYgY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGluRm4oY2hpbGRyZW4sIGksIGRlZXAgKyAxKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0LmNsZWFyQ2hpbGRyZW4pIHtcbiAgICAgICAgICBkZWxldGUgaVtvcHQuY2hpbGRyZW5NYXBOYW1lIV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIGluRm4odHJlZSwgMSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiDmlbDnu4TovazmjaLmiJDmoJHmlbDmja5cbiAgICovXG4gIGFyclRvVHJlZShhcnI6IGFueVtdLCBvcHRpb25zPzogQXJyYXlTZXJ2aWNlQXJyVG9UcmVlT3B0aW9ucyk6IGFueVtdIHtcbiAgICBjb25zdCBvcHQgPSB7XG4gICAgICBpZE1hcE5hbWU6IHRoaXMuYy5pZE1hcE5hbWUsXG4gICAgICBwYXJlbnRJZE1hcE5hbWU6IHRoaXMuYy5wYXJlbnRJZE1hcE5hbWUsXG4gICAgICBjaGlsZHJlbk1hcE5hbWU6IHRoaXMuYy5jaGlsZHJlbk1hcE5hbWUsXG4gICAgICBjYjogbnVsbCxcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgfSBhcyBBcnJheVNlcnZpY2VBcnJUb1RyZWVPcHRpb25zO1xuICAgIGlmIChhcnIubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGNvbnN0IHRyZWU6IGFueVtdID0gW107XG4gICAgY29uc3QgY2hpbGRyZW5PZjogYW55ID0ge307XG4gICAgbGV0IHJvb3RQaWQgPSBvcHQucm9vdFBhcmVudElkVmFsdWU7XG4gICAgaWYgKCFyb290UGlkKSB7XG4gICAgICBjb25zdCBwaWRzID0gYXJyLm1hcChpID0+IGlbb3B0LnBhcmVudElkTWFwTmFtZSFdKTtcbiAgICAgIGNvbnN0IGVtcHR5UGlkID0gcGlkcy5maW5kSW5kZXgodyA9PiB3ID09IG51bGwpO1xuICAgICAgcm9vdFBpZCA9IGVtcHR5UGlkICE9PSAtMSA/IHBpZHNbZW1wdHlQaWRdIDogcGlkcy5zb3J0KClbMF07XG4gICAgfVxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBhcnIpIHtcbiAgICAgIGNvbnN0IGlkID0gaXRlbVtvcHQuaWRNYXBOYW1lIV07XG4gICAgICBjb25zdCBwaWQgPSBpdGVtW29wdC5wYXJlbnRJZE1hcE5hbWUhXTtcbiAgICAgIGNoaWxkcmVuT2ZbaWRdID0gY2hpbGRyZW5PZltpZF0gfHwgW107XG4gICAgICBpdGVtW29wdC5jaGlsZHJlbk1hcE5hbWUhXSA9IGNoaWxkcmVuT2ZbaWRdO1xuICAgICAgaWYgKG9wdC5jYikge1xuICAgICAgICBvcHQuY2IoaXRlbSk7XG4gICAgICB9XG4gICAgICBpZiAocGlkICE9PSByb290UGlkKSB7XG4gICAgICAgIGNoaWxkcmVuT2ZbcGlkXSA9IGNoaWxkcmVuT2ZbcGlkXSB8fCBbXTtcbiAgICAgICAgY2hpbGRyZW5PZltwaWRdLnB1c2goaXRlbSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cmVlLnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cmVlO1xuICB9XG5cbiAgLyoqXG4gICAqIOaVsOe7hOi9rOaNouaIkCBgbnotdHJlZWAg5pWw5o2u5rqQ77yM6YCa6L+HIGBvcHRpb25zYCDovazljJbpobnlkI3vvIzkuZ/lj6/ku6Xkvb/nlKggYG9wdGlvbnMuY2JgIOabtOmrmOe6p+WGs+WumuaVsOaNrumhuVxuICAgKi9cbiAgYXJyVG9UcmVlTm9kZShhcnI6IGFueVtdLCBvcHRpb25zPzogQXJyYXlTZXJ2aWNlQXJyVG9UcmVlTm9kZU9wdGlvbnMpOiBOelRyZWVOb2RlW10ge1xuICAgIGNvbnN0IG9wdCA9IHtcbiAgICAgIGlkTWFwTmFtZTogdGhpcy5jLmlkTWFwTmFtZSxcbiAgICAgIHBhcmVudElkTWFwTmFtZTogdGhpcy5jLnBhcmVudElkTWFwTmFtZSxcbiAgICAgIHRpdGxlTWFwTmFtZTogdGhpcy5jLnRpdGxlTWFwTmFtZSxcbiAgICAgIGlzTGVhZk1hcE5hbWU6ICdpc0xlYWYnLFxuICAgICAgY2hlY2tlZE1hcG5hbWU6IHRoaXMuYy5jaGVja2VkTWFwbmFtZSxcbiAgICAgIHNlbGVjdGVkTWFwbmFtZTogdGhpcy5jLnNlbGVjdGVkTWFwbmFtZSxcbiAgICAgIGV4cGFuZGVkTWFwbmFtZTogdGhpcy5jLmV4cGFuZGVkTWFwbmFtZSxcbiAgICAgIGRpc2FibGVkTWFwbmFtZTogdGhpcy5jLmRpc2FibGVkTWFwbmFtZSxcbiAgICAgIGNiOiBudWxsLFxuICAgICAgLi4ub3B0aW9ucyxcbiAgICB9IGFzIEFycmF5U2VydmljZUFyclRvVHJlZU5vZGVPcHRpb25zO1xuICAgIGNvbnN0IHRyZWUgPSB0aGlzLmFyclRvVHJlZShhcnIsIHtcbiAgICAgIGlkTWFwTmFtZTogb3B0LmlkTWFwTmFtZSxcbiAgICAgIHBhcmVudElkTWFwTmFtZTogb3B0LnBhcmVudElkTWFwTmFtZSxcbiAgICAgIGNoaWxkcmVuTWFwTmFtZTogJ2NoaWxkcmVuJyxcbiAgICB9KTtcbiAgICB0aGlzLnZpc2l0VHJlZSh0cmVlLCAoaXRlbTogYW55LCBwYXJlbnQ6IGFueSwgZGVlcDogbnVtYmVyKSA9PiB7XG4gICAgICBpdGVtLmtleSA9IGl0ZW1bb3B0LmlkTWFwTmFtZSFdO1xuICAgICAgaXRlbS50aXRsZSA9IGl0ZW1bb3B0LnRpdGxlTWFwTmFtZSFdO1xuICAgICAgaXRlbS5jaGVja2VkID0gaXRlbVtvcHQuY2hlY2tlZE1hcG5hbWUhXTtcbiAgICAgIGl0ZW0uc2VsZWN0ZWQgPSBpdGVtW29wdC5zZWxlY3RlZE1hcG5hbWUhXTtcbiAgICAgIGl0ZW0uZXhwYW5kZWQgPSBpdGVtW29wdC5leHBhbmRlZE1hcG5hbWUhXTtcbiAgICAgIGl0ZW0uZGlzYWJsZWQgPSBpdGVtW29wdC5kaXNhYmxlZE1hcG5hbWUhXTtcbiAgICAgIGlmIChpdGVtW29wdC5pc0xlYWZNYXBOYW1lIV0gPT0gbnVsbCkge1xuICAgICAgICBpdGVtLmlzTGVhZiA9IGl0ZW0uY2hpbGRyZW4ubGVuZ3RoID09PSAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXRlbS5pc0xlYWYgPSBpdGVtW29wdC5pc0xlYWZNYXBOYW1lIV07XG4gICAgICB9XG4gICAgICBpZiAob3B0LmNiKSB7XG4gICAgICAgIG9wdC5jYihpdGVtLCBwYXJlbnQsIGRlZXApO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB0cmVlLm1hcChub2RlID0+IG5ldyBOelRyZWVOb2RlKG5vZGUpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDpgJLlvZLorr/pl67mlbTkuKrmoJFcbiAgICovXG4gIHZpc2l0VHJlZShcbiAgICB0cmVlOiBhbnlbXSxcbiAgICBjYjogKGl0ZW06IGFueSwgcGFyZW50OiBhbnksIGRlZXA6IG51bWJlcikgPT4gdm9pZCxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqIOWtkOmhueWQje+8jOm7mOiupO+8mmAnY2hpbGRyZW4nYCAqL1xuICAgICAgY2hpbGRyZW5NYXBOYW1lPzogc3RyaW5nO1xuICAgIH0sXG4gICk6IHZvaWQge1xuICAgIG9wdGlvbnMgPSB7XG4gICAgICBjaGlsZHJlbk1hcE5hbWU6IHRoaXMuYy5jaGlsZHJlbk1hcE5hbWUsXG4gICAgICAuLi5vcHRpb25zLFxuICAgIH07XG4gICAgY29uc3QgaW5GbiA9IChkYXRhOiBhbnlbXSwgcGFyZW50OiBhbnksIGRlZXA6IG51bWJlcikgPT4ge1xuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgY2IoaXRlbSwgcGFyZW50LCBkZWVwKTtcbiAgICAgICAgY29uc3QgY2hpbGRyZW5WYWwgPSBpdGVtW29wdGlvbnMhLmNoaWxkcmVuTWFwTmFtZSFdO1xuICAgICAgICBpZiAoY2hpbGRyZW5WYWwgJiYgY2hpbGRyZW5WYWwubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGluRm4oY2hpbGRyZW5WYWwsIGl0ZW0sIGRlZXAgKyAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgaW5Gbih0cmVlLCBudWxsLCAxKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDojrflj5bmiYDmnInlt7Lnu4/pgInkuK3nmoQgYGtleWAg5YC8XG4gICAqL1xuICBnZXRLZXlzQnlUcmVlTm9kZSh0cmVlOiBOelRyZWVOb2RlW10sIG9wdGlvbnM/OiBBcnJheVNlcnZpY2VHZXRLZXlzQnlUcmVlTm9kZU9wdGlvbnMpOiBhbnlbXSB7XG4gICAgY29uc3Qgb3B0ID0ge1xuICAgICAgaW5jbHVkZUhhbGZDaGVja2VkOiB0cnVlLFxuICAgICAgLi4ub3B0aW9ucyxcbiAgICB9IGFzIEFycmF5U2VydmljZUdldEtleXNCeVRyZWVOb2RlT3B0aW9ucztcbiAgICBjb25zdCBrZXlzOiBhbnlbXSA9IFtdO1xuICAgIHRoaXMudmlzaXRUcmVlKHRyZWUsIChpdGVtOiBOelRyZWVOb2RlLCBwYXJlbnQ6IE56VHJlZU5vZGUsIGRlZXA6IG51bWJlcikgPT4ge1xuICAgICAgaWYgKGl0ZW0uaXNDaGVja2VkIHx8IChvcHQuaW5jbHVkZUhhbGZDaGVja2VkICYmIGl0ZW0uaXNIYWxmQ2hlY2tlZCkpIHtcbiAgICAgICAga2V5cy5wdXNoKG9wdC5jYiA/IG9wdC5jYihpdGVtLCBwYXJlbnQsIGRlZXApIDogb3B0LmtleU1hcE5hbWUgPyBpdGVtLm9yaWdpbltvcHQua2V5TWFwTmFtZV0gOiBpdGVtLmtleSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGtleXM7XG4gIH1cbiAgcHJpdmF0ZSBiYXNlRmxhdChhcnJheTogYW55W10sIGRlcHRoOiBudW1iZXIsIHJlc3VsdDogYW55W10gPSBbXSk6IGFueVtdIHtcbiAgICBsZXQgaW5kZXggPSAtMTtcbiAgICB3aGlsZSAoKytpbmRleCA8IGFycmF5Lmxlbmd0aCkge1xuICAgICAgY29uc3QgdmFsdWUgPSBhcnJheVtpbmRleF07XG4gICAgICBpZiAoZGVwdGggPiAwICYmIEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIGlmIChkZXB0aCA+IDEpIHtcbiAgICAgICAgICB0aGlzLmJhc2VGbGF0KHZhbHVlLCBkZXB0aCAtIDEsIHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IHB1c2hJbmRleCA9IC0xO1xuICAgICAgICAgIGNvbnN0IG9mZnNldCA9IHJlc3VsdC5sZW5ndGg7XG5cbiAgICAgICAgICB3aGlsZSAoKytwdXNoSW5kZXggPCB2YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJlc3VsdFtvZmZzZXQgKyBwdXNoSW5kZXhdID0gdmFsdWVbcHVzaEluZGV4XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdFtyZXN1bHQubGVuZ3RoXSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIC8qKlxuICAgKiBSZWN1cnNpdmVseSBmbGF0dGVucyBhcnJheVxuICAgKlxuICAgKiDpgJLlvZLmiYHlubPmlbDnu4RcbiAgICogYGBgdHNcbiAgICogc3J2LmZsYXQoWzEsIFsyLCAzLCBbNCwgNSwgWzZdXV1dKSA9PiBbMSwyLDMsNCw1LDZdXG4gICAqIHNydi5mbGF0KFsxLCBbMiwgMywgWzQsIDUsIFs2XV1dXSwgMSkgPT4gWzEsMiwzLFs0LCA1LCBbNl1dXVxuICAgKiBgYGBcbiAgICovXG4gIGZsYXQoYXJyYXk6IGFueVtdLCBkZXB0aDogbnVtYmVyID0gMSAvIDApOiBhbnlbXSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXJyYXkpID8gdGhpcy5iYXNlRmxhdChhcnJheSwgZGVwdGgpIDogYXJyYXk7XG4gIH1cbiAgLyoqXG4gICAqIEdyb3VwIHRoZSBhcnJheVxuICAgKlxuICAgKiDlr7nmlbDnu4Tov5vooYzliIbnu4RcbiAgICogYGBgdHNcbiAgICogc3J2Lmdyb3VwQnkoWzYuMSwgNC4yLCA2LjNdLCBNYXRoLmZsb29yKSA9PiB7XCI0XCI6WzQuMl0sXCI2XCI6WzYuMSw2LjNdfVxuICAgKiBzcnYuZ3JvdXBCeShbJ29uZScsICd0d28nLCAndGhyZWUnXSwgdiA9PiB2Lmxlbmd0aCkgPT4ge1wiM1wiOltcIm9uZVwiLFwidHdvXCJdLFwiNVwiOltcInRocmVlXCJdfVxuICAgKiBgYGBcbiAgICovXG4gIGdyb3VwQnkoYXJyYXk6IGFueVtdLCBpdGVyYXRlZTogKHZhbHVlOiBhbnkpID0+IGFueSk6IEFycmF5U2VydmljZUdyb3VwQnlSZXN1bHQge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheSkpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5LnJlZHVjZSgocmVzdWx0LCB2YWx1ZSkgPT4ge1xuICAgICAgY29uc3Qga2V5ID0gaXRlcmF0ZWUodmFsdWUpO1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChyZXN1bHQsIGtleSkpIHtcbiAgICAgICAgcmVzdWx0W2tleV0ucHVzaCh2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRba2V5XSA9IFt2YWx1ZV07XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sIHt9KTtcbiAgfVxufVxuIl19