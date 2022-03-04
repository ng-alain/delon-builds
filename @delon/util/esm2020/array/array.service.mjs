/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { NzTreeNode } from 'ng-zorro-antd/core/tree';
import * as i0 from "@angular/core";
import * as i1 from "@delon/util/config";
export class ArrayService {
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
ArrayService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: ArrayService, deps: [{ token: i1.AlainConfigService }], target: i0.ɵɵFactoryTarget.Injectable });
ArrayService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: ArrayService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.5", ngImport: i0, type: ArrayService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: i1.AlainConfigService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3V0aWwvYXJyYXkvYXJyYXkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1REFBdUQ7QUFDdkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0seUJBQXlCLENBQUM7OztBQVdyRCxNQUFNLE9BQU8sWUFBWTtJQUd2QixZQUFZLEdBQXVCO1FBQ2pDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUU7WUFDOUIsV0FBVyxFQUFFLE1BQU07WUFDbkIsYUFBYSxFQUFFLFFBQVE7WUFDdkIsU0FBUyxFQUFFLElBQUk7WUFDZixlQUFlLEVBQUUsV0FBVztZQUM1QixlQUFlLEVBQUUsVUFBVTtZQUMzQixZQUFZLEVBQUUsT0FBTztZQUNyQixjQUFjLEVBQUUsU0FBUztZQUN6QixlQUFlLEVBQUUsVUFBVTtZQUMzQixlQUFlLEVBQUUsVUFBVTtZQUMzQixlQUFlLEVBQUUsVUFBVTtTQUM1QixDQUFFLENBQUM7SUFDTixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILFNBQVMsQ0FBeUIsSUFBa0IsRUFBRSxPQUF5QztRQUM3RixNQUFNLEdBQUcsR0FBRztZQUNWLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQVc7WUFDL0IsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsYUFBYTtZQUNuQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxlQUFlO1lBQ3ZDLGFBQWEsRUFBRSxJQUFJO1lBQ25CLEVBQUUsRUFBRSxJQUFJO1lBQ1IsR0FBRyxPQUFPO1NBQ3FCLENBQUM7UUFDbEMsTUFBTSxNQUFNLEdBQWtDLEVBQUUsQ0FBQztRQUNqRCxNQUFNLElBQUksR0FBRyxDQUFDLElBQTJDLEVBQUUsTUFB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YUFDdkI7WUFDRCxPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDLEVBQUUsRUFBK0IsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFDRDs7Ozs7Ozs7O09BU0c7SUFDSCxJQUFJLENBQUksS0FBbUIsRUFBRSxTQUE4RDtRQUN6RixPQUFPLEtBQUssQ0FBQyxJQUFJLENBQ2YsS0FBSzthQUNGLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUNyQixNQUFNLEdBQUcsR0FBRyxTQUFTO2dCQUNuQixDQUFDLENBQUMsT0FBTyxTQUFTLEtBQUssUUFBUTtvQkFDN0IsQ0FBQyxDQUFFLEtBQWEsQ0FBQyxTQUFTLENBQUM7b0JBQzNCLENBQUMsQ0FBQyxTQUFVLENBQUMsS0FBSyxDQUFDO2dCQUNyQixDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ1YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ2pCLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ3JCO1lBQ0QsT0FBTyxHQUFHLENBQUM7UUFDYixDQUFDLEVBQUUsSUFBSSxHQUFHLEVBQWdDLENBQUM7YUFDMUMsTUFBTSxFQUFFLENBQ1osQ0FBQztJQUNKLENBQUM7O3lHQWpTVSxZQUFZOzZHQUFaLFlBQVksY0FEQyxNQUFNOzJGQUNuQixZQUFZO2tCQUR4QixVQUFVO21CQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgKi9cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWxhaW5Db25maWdTZXJ2aWNlLCBBbGFpblV0aWxBcnJheUNvbmZpZyB9IGZyb20gJ0BkZWxvbi91dGlsL2NvbmZpZyc7XG5pbXBvcnQgeyBOelRyZWVOb2RlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3RyZWUnO1xuXG5pbXBvcnQge1xuICBBcnJheVNlcnZpY2VBcnJUb1RyZWVOb2RlT3B0aW9ucyxcbiAgQXJyYXlTZXJ2aWNlQXJyVG9UcmVlT3B0aW9ucyxcbiAgQXJyYXlTZXJ2aWNlR2V0S2V5c0J5VHJlZU5vZGVPcHRpb25zLFxuICBBcnJheVNlcnZpY2VHcm91cEJ5UmVzdWx0LFxuICBBcnJheVNlcnZpY2VUcmVlVG9BcnJPcHRpb25zXG59IGZyb20gJy4vYXJyYXktdHlwZS5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBBcnJheVNlcnZpY2Uge1xuICBwcml2YXRlIGM6IEFsYWluVXRpbEFycmF5Q29uZmlnO1xuXG4gIGNvbnN0cnVjdG9yKGNvZzogQWxhaW5Db25maWdTZXJ2aWNlKSB7XG4gICAgdGhpcy5jID0gY29nLm1lcmdlKCd1dGlsQXJyYXknLCB7XG4gICAgICBkZWVwTWFwTmFtZTogJ2RlZXAnLFxuICAgICAgcGFyZW50TWFwTmFtZTogJ3BhcmVudCcsXG4gICAgICBpZE1hcE5hbWU6ICdpZCcsXG4gICAgICBwYXJlbnRJZE1hcE5hbWU6ICdwYXJlbnRfaWQnLFxuICAgICAgY2hpbGRyZW5NYXBOYW1lOiAnY2hpbGRyZW4nLFxuICAgICAgdGl0bGVNYXBOYW1lOiAndGl0bGUnLFxuICAgICAgY2hlY2tlZE1hcG5hbWU6ICdjaGVja2VkJyxcbiAgICAgIHNlbGVjdGVkTWFwbmFtZTogJ3NlbGVjdGVkJyxcbiAgICAgIGV4cGFuZGVkTWFwbmFtZTogJ2V4cGFuZGVkJyxcbiAgICAgIGRpc2FibGVkTWFwbmFtZTogJ2Rpc2FibGVkJ1xuICAgIH0pITtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0IHRyZWUgc3RydWN0dXJlIHRvIGFycmF5IHN0cnVjdHVyZVxuICAgKlxuICAgKiDlsIbmoJHnu5PmnoTovazmjaLmiJDmlbDnu4Tnu5PmnoRcbiAgICovXG4gIHRyZWVUb0FycjxUIGV4dGVuZHMgb2JqZWN0ID0gYW55Pih0cmVlOiByZWFkb25seSBUW10sIG9wdGlvbnM/OiBBcnJheVNlcnZpY2VUcmVlVG9BcnJPcHRpb25zPFQ+KTogVFtdIHtcbiAgICBjb25zdCBvcHQgPSB7XG4gICAgICBkZWVwTWFwTmFtZTogdGhpcy5jLmRlZXBNYXBOYW1lLFxuICAgICAgcGFyZW50TWFwTmFtZTogdGhpcy5jLnBhcmVudE1hcE5hbWUsXG4gICAgICBjaGlsZHJlbk1hcE5hbWU6IHRoaXMuYy5jaGlsZHJlbk1hcE5hbWUsXG4gICAgICBjbGVhckNoaWxkcmVuOiB0cnVlLFxuICAgICAgY2I6IG51bGwsXG4gICAgICAuLi5vcHRpb25zXG4gICAgfSBhcyBBcnJheVNlcnZpY2VUcmVlVG9BcnJPcHRpb25zO1xuICAgIGNvbnN0IHJlc3VsdDogQXJyYXk8eyBba2V5OiBzdHJpbmddOiBhbnkgfT4gPSBbXTtcbiAgICBjb25zdCBpbkZuID0gKGxpc3Q6IFJlYWRvbmx5QXJyYXk8eyBba2V5OiBzdHJpbmddOiBhbnkgfT4sIHBhcmVudDogVCB8IG51bGwsIGRlZXA6IG51bWJlciA9IDApOiB2b2lkID0+IHtcbiAgICAgIGZvciAoY29uc3QgaSBvZiBsaXN0KSB7XG4gICAgICAgIGlbb3B0LmRlZXBNYXBOYW1lIV0gPSBkZWVwO1xuICAgICAgICBpW29wdC5wYXJlbnRNYXBOYW1lIV0gPSBwYXJlbnQ7XG4gICAgICAgIGlmIChvcHQuY2IpIHtcbiAgICAgICAgICBvcHQuY2IoaSwgcGFyZW50LCBkZWVwKTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQucHVzaChpKTtcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBpW29wdC5jaGlsZHJlbk1hcE5hbWUhXTtcbiAgICAgICAgaWYgKGNoaWxkcmVuICE9IG51bGwgJiYgQXJyYXkuaXNBcnJheShjaGlsZHJlbikgJiYgY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGluRm4oY2hpbGRyZW4sIGkgYXMgVCwgZGVlcCArIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHQuY2xlYXJDaGlsZHJlbikge1xuICAgICAgICAgIGRlbGV0ZSBpW29wdC5jaGlsZHJlbk1hcE5hbWUhXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgaW5Gbih0cmVlLCBudWxsKTtcbiAgICByZXR1cm4gcmVzdWx0IGFzIFRbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0IGFycmF5IHN0cnVjdHVyZSB0byB0cmVlIHN0cnVjdHVyZVxuICAgKlxuICAgKiDmlbDnu4TovazmjaLmiJDmoJHmlbDmja5cbiAgICovXG4gIGFyclRvVHJlZTxUIGV4dGVuZHMgb2JqZWN0ID0gYW55PihhcnI6IHJlYWRvbmx5IFRbXSwgb3B0aW9ucz86IEFycmF5U2VydmljZUFyclRvVHJlZU9wdGlvbnM8VD4pOiBUW10ge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnIpIHx8IGFyci5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBjb25zdCBvcHQgPSB7XG4gICAgICBpZE1hcE5hbWU6IHRoaXMuYy5pZE1hcE5hbWUsXG4gICAgICBwYXJlbnRJZE1hcE5hbWU6IHRoaXMuYy5wYXJlbnRJZE1hcE5hbWUsXG4gICAgICBjaGlsZHJlbk1hcE5hbWU6IHRoaXMuYy5jaGlsZHJlbk1hcE5hbWUsXG4gICAgICBjYjogbnVsbCxcbiAgICAgIC4uLm9wdGlvbnNcbiAgICB9IGFzIEFycmF5U2VydmljZUFyclRvVHJlZU9wdGlvbnM8VD47XG4gICAgY29uc3QgdHJlZTogVFtdID0gW107XG4gICAgY29uc3QgY2hpbGRyZW5PZjogeyBba2V5OiBzdHJpbmddOiBUW10gfSA9IHt9O1xuICAgIGxldCByb290UGlkID0gb3B0LnJvb3RQYXJlbnRJZFZhbHVlO1xuICAgIGNvbnN0IGFyclR5cGUgPSBhcnIgYXMgUmVhZG9ubHlBcnJheTx7IFtrZXk6IHN0cmluZ106IGFueSB9PjtcbiAgICBpZiAoIXJvb3RQaWQpIHtcbiAgICAgIGNvbnN0IHBpZHMgPSBhcnJUeXBlLm1hcChpID0+IGlbb3B0LnBhcmVudElkTWFwTmFtZSFdKTtcbiAgICAgIGNvbnN0IGVtcHR5UGlkID0gcGlkcy5maW5kSW5kZXgodyA9PiB3ID09IG51bGwpO1xuICAgICAgcm9vdFBpZCA9IGVtcHR5UGlkICE9PSAtMSA/IHBpZHNbZW1wdHlQaWRdIDogcGlkcy5zb3J0KClbMF07XG4gICAgfVxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBhcnJUeXBlKSB7XG4gICAgICBjb25zdCBpZCA9IGl0ZW1bb3B0LmlkTWFwTmFtZSFdO1xuICAgICAgY29uc3QgcGlkID0gaXRlbVtvcHQucGFyZW50SWRNYXBOYW1lIV07XG4gICAgICBjaGlsZHJlbk9mW2lkXSA9IGNoaWxkcmVuT2ZbaWRdIHx8IFtdO1xuICAgICAgaXRlbVtvcHQuY2hpbGRyZW5NYXBOYW1lIV0gPSBjaGlsZHJlbk9mW2lkXTtcbiAgICAgIGlmIChvcHQuY2IpIHtcbiAgICAgICAgb3B0LmNiKGl0ZW0gYXMgVCk7XG4gICAgICB9XG4gICAgICBpZiAocGlkICE9PSByb290UGlkKSB7XG4gICAgICAgIGNoaWxkcmVuT2ZbcGlkXSA9IGNoaWxkcmVuT2ZbcGlkXSB8fCBbXTtcbiAgICAgICAgY2hpbGRyZW5PZltwaWRdLnB1c2goaXRlbSBhcyBUKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyZWUucHVzaChpdGVtIGFzIFQpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJlZTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmlbDnu4TovazmjaLmiJAgYG56LXRyZWVgIOaVsOaNrua6kO+8jOmAmui/hyBgb3B0aW9uc2Ag6L2s5YyW6aG55ZCN77yM5Lmf5Y+v5Lul5L2/55SoIGBvcHRpb25zLmNiYCDmm7Tpq5jnuqflhrPlrprmlbDmja7poblcbiAgICovXG4gIGFyclRvVHJlZU5vZGU8VCBleHRlbmRzIG9iamVjdCA9IGFueT4oYXJyOiByZWFkb25seSBUW10sIG9wdGlvbnM/OiBBcnJheVNlcnZpY2VBcnJUb1RyZWVOb2RlT3B0aW9ucyk6IE56VHJlZU5vZGVbXSB7XG4gICAgY29uc3Qgb3B0ID0ge1xuICAgICAgaWRNYXBOYW1lOiB0aGlzLmMuaWRNYXBOYW1lLFxuICAgICAgcGFyZW50SWRNYXBOYW1lOiB0aGlzLmMucGFyZW50SWRNYXBOYW1lLFxuICAgICAgdGl0bGVNYXBOYW1lOiB0aGlzLmMudGl0bGVNYXBOYW1lLFxuICAgICAgaXNMZWFmTWFwTmFtZTogJ2lzTGVhZicsXG4gICAgICBjaGVja2VkTWFwbmFtZTogdGhpcy5jLmNoZWNrZWRNYXBuYW1lLFxuICAgICAgc2VsZWN0ZWRNYXBuYW1lOiB0aGlzLmMuc2VsZWN0ZWRNYXBuYW1lLFxuICAgICAgZXhwYW5kZWRNYXBuYW1lOiB0aGlzLmMuZXhwYW5kZWRNYXBuYW1lLFxuICAgICAgZGlzYWJsZWRNYXBuYW1lOiB0aGlzLmMuZGlzYWJsZWRNYXBuYW1lLFxuICAgICAgY2I6IG51bGwsXG4gICAgICAuLi5vcHRpb25zXG4gICAgfSBhcyBBcnJheVNlcnZpY2VBcnJUb1RyZWVOb2RlT3B0aW9uczxUPjtcbiAgICBjb25zdCB0cmVlID0gdGhpcy5hcnJUb1RyZWU8VD4oYXJyLCB7XG4gICAgICBpZE1hcE5hbWU6IG9wdC5pZE1hcE5hbWUsXG4gICAgICBwYXJlbnRJZE1hcE5hbWU6IG9wdC5wYXJlbnRJZE1hcE5hbWUsXG4gICAgICBjaGlsZHJlbk1hcE5hbWU6ICdjaGlsZHJlbidcbiAgICB9KTtcbiAgICB0aGlzLnZpc2l0VHJlZTxUPih0cmVlLCAoaXRlbTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSwgcGFyZW50LCBkZWVwKSA9PiB7XG4gICAgICBpdGVtLmtleSA9IGl0ZW1bb3B0LmlkTWFwTmFtZSFdO1xuICAgICAgaXRlbS50aXRsZSA9IGl0ZW1bb3B0LnRpdGxlTWFwTmFtZSFdO1xuICAgICAgaXRlbS5jaGVja2VkID0gaXRlbVtvcHQuY2hlY2tlZE1hcG5hbWUhXTtcbiAgICAgIGl0ZW0uc2VsZWN0ZWQgPSBpdGVtW29wdC5zZWxlY3RlZE1hcG5hbWUhXTtcbiAgICAgIGl0ZW0uZXhwYW5kZWQgPSBpdGVtW29wdC5leHBhbmRlZE1hcG5hbWUhXTtcbiAgICAgIGl0ZW0uZGlzYWJsZWQgPSBpdGVtW29wdC5kaXNhYmxlZE1hcG5hbWUhXTtcbiAgICAgIGlmIChpdGVtW29wdC5pc0xlYWZNYXBOYW1lIV0gPT0gbnVsbCkge1xuICAgICAgICBpdGVtLmlzTGVhZiA9IGl0ZW0uY2hpbGRyZW4ubGVuZ3RoID09PSAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXRlbS5pc0xlYWYgPSBpdGVtW29wdC5pc0xlYWZNYXBOYW1lIV07XG4gICAgICB9XG4gICAgICBpZiAob3B0LmNiKSB7XG4gICAgICAgIG9wdC5jYihpdGVtIGFzIGFueSwgcGFyZW50LCBkZWVwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdHJlZS5tYXAobm9kZSA9PiBuZXcgTnpUcmVlTm9kZShub2RlIGFzIGFueSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIOmAkuW9kuiuv+mXruaVtOS4quagkVxuICAgKi9cbiAgdmlzaXRUcmVlPFQgZXh0ZW5kcyBvYmplY3QgPSBhbnk+KFxuICAgIHRyZWU6IHJlYWRvbmx5IFRbXSxcbiAgICBjYjogKGl0ZW06IFQsIHBhcmVudDogVCB8IG51bGwsIGRlZXA6IG51bWJlcikgPT4gdm9pZCxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqIOWtkOmhueWQje+8jOm7mOiupO+8mmAnY2hpbGRyZW4nYCAqL1xuICAgICAgY2hpbGRyZW5NYXBOYW1lPzogc3RyaW5nO1xuICAgIH1cbiAgKTogdm9pZCB7XG4gICAgb3B0aW9ucyA9IHtcbiAgICAgIGNoaWxkcmVuTWFwTmFtZTogdGhpcy5jLmNoaWxkcmVuTWFwTmFtZSxcbiAgICAgIC4uLm9wdGlvbnNcbiAgICB9O1xuICAgIGNvbnN0IGluRm4gPSAoZGF0YTogcmVhZG9ubHkgVFtdLCBwYXJlbnQ6IFQgfCBudWxsLCBkZWVwOiBudW1iZXIpOiB2b2lkID0+IHtcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBkYXRhKSB7XG4gICAgICAgIGNiKGl0ZW0sIHBhcmVudCwgZGVlcCk7XG4gICAgICAgIGNvbnN0IGNoaWxkcmVuVmFsID0gKGl0ZW0gYXMgeyBba2V5OiBzdHJpbmddOiBhbnkgfSlbb3B0aW9ucyEuY2hpbGRyZW5NYXBOYW1lIV07XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuVmFsKSAmJiBjaGlsZHJlblZhbC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaW5GbihjaGlsZHJlblZhbCwgaXRlbSwgZGVlcCArIDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBpbkZuKHRyZWUsIG51bGwsIDEpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgdmFsdWUgb2YgdGhlIGZpcnN0IHRyZWUgdmFsdWUgaW4gdGhlIHRyZWUgd2hlcmUgcHJlZGljYXRlIGlzIHRydWUsIGFuZCBgdW5kZWZpbmVkYCBvdGhlcndpc2VcbiAgICpcbiAgICog5qC55o2u5p2h5Lu26L+U5Zue5qCR55qE56ys5LiA5Liq5YC877yM5ZCm5YiZ6L+U5ZueIGB1bmRlZmluZWRgXG4gICAqL1xuICBmaW5kVHJlZTxUIGV4dGVuZHMgb2JqZWN0ID0gYW55PihcbiAgICB0cmVlOiByZWFkb25seSBUW10sXG4gICAgcHJlZGljYXRlOiAoaXRlbTogVCkgPT4gYm9vbGVhbixcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqIOWtkOmhueWQje+8jOm7mOiupO+8mmAnY2hpbGRyZW4nYCAqL1xuICAgICAgY2hpbGRyZW5NYXBOYW1lPzogc3RyaW5nO1xuICAgIH1cbiAgKTogVCB8IHVuZGVmaW5lZCB7XG4gICAgbGV0IHJlczogVCB8IHVuZGVmaW5lZDtcbiAgICB0aGlzLnZpc2l0VHJlZTxUPihcbiAgICAgIHRyZWUsXG4gICAgICBpdGVtID0+IHtcbiAgICAgICAgaWYgKHJlcyA9PT0gdW5kZWZpbmVkICYmIHByZWRpY2F0ZShpdGVtKSkge1xuICAgICAgICAgIHJlcyA9IGl0ZW07XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvcHRpb25zXG4gICAgKTtcbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgLyoqXG4gICAqIOiOt+WPluaJgOacieW3sue7j+mAieS4reeahCBga2V5YCDlgLxcbiAgICovXG4gIGdldEtleXNCeVRyZWVOb2RlKHRyZWU6IE56VHJlZU5vZGVbXSwgb3B0aW9ucz86IEFycmF5U2VydmljZUdldEtleXNCeVRyZWVOb2RlT3B0aW9ucyk6IGFueVtdIHtcbiAgICBjb25zdCBvcHQgPSB7XG4gICAgICBpbmNsdWRlSGFsZkNoZWNrZWQ6IHRydWUsXG4gICAgICAuLi5vcHRpb25zXG4gICAgfSBhcyBBcnJheVNlcnZpY2VHZXRLZXlzQnlUcmVlTm9kZU9wdGlvbnM7XG4gICAgY29uc3Qga2V5czogYW55W10gPSBbXTtcbiAgICB0aGlzLnZpc2l0VHJlZTxOelRyZWVOb2RlPih0cmVlLCAoaXRlbSwgcGFyZW50LCBkZWVwKSA9PiB7XG4gICAgICBpZiAoaXRlbS5pc0NoZWNrZWQgfHwgKG9wdC5pbmNsdWRlSGFsZkNoZWNrZWQgJiYgaXRlbS5pc0hhbGZDaGVja2VkKSkge1xuICAgICAgICBrZXlzLnB1c2gob3B0LmNiID8gb3B0LmNiKGl0ZW0sIHBhcmVudCwgZGVlcCkgOiBvcHQua2V5TWFwTmFtZSA/IGl0ZW0ub3JpZ2luW29wdC5rZXlNYXBOYW1lXSA6IGl0ZW0ua2V5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4ga2V5cztcbiAgfVxuICBwcml2YXRlIGJhc2VGbGF0KGFycmF5OiBhbnlbXSwgZGVwdGg6IG51bWJlciwgcmVzdWx0OiBhbnlbXSA9IFtdKTogYW55W10ge1xuICAgIGxldCBpbmRleCA9IC0xO1xuICAgIHdoaWxlICgrK2luZGV4IDwgYXJyYXkubGVuZ3RoKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGFycmF5W2luZGV4XTtcbiAgICAgIGlmIChkZXB0aCA+IDAgJiYgQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgaWYgKGRlcHRoID4gMSkge1xuICAgICAgICAgIHRoaXMuYmFzZUZsYXQodmFsdWUsIGRlcHRoIC0gMSwgcmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZXQgcHVzaEluZGV4ID0gLTE7XG4gICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gcmVzdWx0Lmxlbmd0aDtcblxuICAgICAgICAgIHdoaWxlICgrK3B1c2hJbmRleCA8IHZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgcmVzdWx0W29mZnNldCArIHB1c2hJbmRleF0gPSB2YWx1ZVtwdXNoSW5kZXhdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0W3Jlc3VsdC5sZW5ndGhdID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgLyoqXG4gICAqIFJlY3Vyc2l2ZWx5IGZsYXR0ZW5zIGFycmF5XG4gICAqXG4gICAqIOmAkuW9kuaJgeW5s+aVsOe7hFxuICAgKiBgYGB0c1xuICAgKiBzcnYuZmxhdChbMSwgWzIsIDMsIFs0LCA1LCBbNl1dXV0pID0+IFsxLDIsMyw0LDUsNl1cbiAgICogc3J2LmZsYXQoWzEsIFsyLCAzLCBbNCwgNSwgWzZdXV1dLCAxKSA9PiBbMSwyLDMsWzQsIDUsIFs2XV1dXG4gICAqIGBgYFxuICAgKi9cbiAgZmxhdDxUPihhcnJheTogcmVhZG9ubHkgVFtdLCBkZXB0aDogbnVtYmVyID0gMSAvIDApOiBUW10ge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGFycmF5KSA/IHRoaXMuYmFzZUZsYXQoYXJyYXkgYXMgYW55W10sIGRlcHRoKSA6IChhcnJheSBhcyBUW10pO1xuICB9XG4gIC8qKlxuICAgKiBHcm91cCB0aGUgYXJyYXlcbiAgICpcbiAgICog5a+55pWw57uE6L+b6KGM5YiG57uEXG4gICAqIGBgYHRzXG4gICAqIHNydi5ncm91cEJ5KFs2LjEsIDQuMiwgNi4zXSwgTWF0aC5mbG9vcikgPT4ge1wiNFwiOls0LjJdLFwiNlwiOls2LjEsNi4zXX1cbiAgICogc3J2Lmdyb3VwQnkoWydvbmUnLCAndHdvJywgJ3RocmVlJ10sIHYgPT4gdi5sZW5ndGgpID0+IHtcIjNcIjpbXCJvbmVcIixcInR3b1wiXSxcIjVcIjpbXCJ0aHJlZVwiXX1cbiAgICogYGBgXG4gICAqL1xuICBncm91cEJ5PFQ+KGFycmF5OiByZWFkb25seSBUW10sIGl0ZXJhdGVlOiAodmFsdWU6IFQpID0+IHN0cmluZyB8IG51bWJlcik6IEFycmF5U2VydmljZUdyb3VwQnlSZXN1bHQge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheSkpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5LnJlZHVjZSgocmVzdWx0LCB2YWx1ZSkgPT4ge1xuICAgICAgY29uc3Qga2V5ID0gaXRlcmF0ZWUodmFsdWUpO1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChyZXN1bHQsIGtleSkpIHtcbiAgICAgICAgcmVzdWx0W2tleV0ucHVzaCh2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRba2V5XSA9IFt2YWx1ZV07XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sIHt9IGFzIEFycmF5U2VydmljZUdyb3VwQnlSZXN1bHQpO1xuICB9XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgZHVwbGljYXRlLWZyZWUgdmVyc2lvbiBvZiBhbiBhcnJheVxuICAgKlxuICAgKiDliJvlu7rljrvph43lkI7nmoTmlbDnu4RcbiAgICogYGBgdHNcbiAgICogdW5pcShbMSwgMiwgMiwgMywgMV0pID0+IFsxLDIsM11cbiAgICogdW5pcShbeyBhOiAxIH0sIHsgYTogMSB9LCB7IGE6IDIgfV0sICdhJykgPT4gW3tcImFcIjoxfSx7XCJhXCI6Mn1dXG4gICAqIHVuaXEoW3sgYTogMSB9LCB7IGE6IDEgfSwgeyBhOiAyIH1dLCBpID0+IChpLmEgPT09IDEgPyAnYScgOiAnYicpKSA9PiBbe1wiYVwiOjF9LHtcImFcIjoyfV1cbiAgICogYGBgXG4gICAqL1xuICB1bmlxPFQ+KGFycmF5OiByZWFkb25seSBUW10sIHByZWRpY2F0ZT86IHN0cmluZyB8ICgodmFsdWU6IFQpID0+IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4pKTogVFtdIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShcbiAgICAgIGFycmF5XG4gICAgICAgIC5yZWR1Y2UoKG1hcCwgdmFsdWUpID0+IHtcbiAgICAgICAgICBjb25zdCBrZXkgPSBwcmVkaWNhdGVcbiAgICAgICAgICAgID8gdHlwZW9mIHByZWRpY2F0ZSA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgPyAodmFsdWUgYXMgYW55KVtwcmVkaWNhdGVdXG4gICAgICAgICAgICAgIDogcHJlZGljYXRlISh2YWx1ZSlcbiAgICAgICAgICAgIDogdmFsdWU7XG4gICAgICAgICAgaWYgKCFtYXAuaGFzKGtleSkpIHtcbiAgICAgICAgICAgIG1hcC5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBtYXA7XG4gICAgICAgIH0sIG5ldyBNYXA8c3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbiwgVD4oKSlcbiAgICAgICAgLnZhbHVlcygpXG4gICAgKTtcbiAgfVxufVxuIl19