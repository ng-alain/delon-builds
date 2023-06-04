/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { NzTreeNode } from 'ng-zorro-antd/core/tree';
import * as i0 from "@angular/core";
import * as i1 from "@delon/util/config";
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: ArrayService, deps: [{ token: i1.AlainConfigService }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: ArrayService, providedIn: 'root' }); }
}
export { ArrayService };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.4", ngImport: i0, type: ArrayService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: i1.AlainConfigService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3V0aWwvYXJyYXkvYXJyYXkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1REFBdUQ7QUFDdkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0seUJBQXlCLENBQUM7OztBQVVyRCxNQUNhLFlBQVk7SUFHdkIsWUFBWSxHQUF1QjtRQUNqQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFO1lBQzlCLFdBQVcsRUFBRSxNQUFNO1lBQ25CLGFBQWEsRUFBRSxRQUFRO1lBQ3ZCLFNBQVMsRUFBRSxJQUFJO1lBQ2YsZUFBZSxFQUFFLFdBQVc7WUFDNUIsZUFBZSxFQUFFLFVBQVU7WUFDM0IsWUFBWSxFQUFFLE9BQU87WUFDckIsY0FBYyxFQUFFLFNBQVM7WUFDekIsZUFBZSxFQUFFLFVBQVU7WUFDM0IsZUFBZSxFQUFFLFVBQVU7WUFDM0IsZUFBZSxFQUFFLFVBQVU7U0FDNUIsQ0FBRSxDQUFDO0lBQ04sQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxTQUFTLENBQXlCLElBQWtCLEVBQUUsT0FBeUM7UUFDN0YsTUFBTSxHQUFHLEdBQUc7WUFDVixXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxXQUFXO1lBQy9CLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLGFBQWE7WUFDbkMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsZUFBZTtZQUN2QyxhQUFhLEVBQUUsSUFBSTtZQUNuQixFQUFFLEVBQUUsSUFBSTtZQUNSLEdBQUcsT0FBTztTQUNxQixDQUFDO1FBQ2xDLE1BQU0sTUFBTSxHQUFrQyxFQUFFLENBQUM7UUFDakQsTUFBTSxJQUFJLEdBQUcsQ0FBQyxJQUEyQyxFQUFFLE1BQWdCLEVB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O1lBQ0QsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQyxFQUFFLEVBQStCLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBQ0Q7Ozs7Ozs7OztPQVNHO0lBQ0gsSUFBSSxDQUFJLEtBQW1CLEVBQUUsU0FBOEQ7UUFDekYsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUNmLEtBQUs7YUFDRixNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDckIsTUFBTSxHQUFHLEdBQUcsU0FBUztnQkFDbkIsQ0FBQyxDQUFDLE9BQU8sU0FBUyxLQUFLLFFBQVE7b0JBQzdCLENBQUMsQ0FBRSxLQUFhLENBQUMsU0FBUyxDQUFDO29CQUMzQixDQUFDLENBQUMsU0FBVSxDQUFDLEtBQUssQ0FBQztnQkFDckIsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUNWLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNqQixHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQzthQUNyQjtZQUNELE9BQU8sR0FBRyxDQUFDO1FBQ2IsQ0FBQyxFQUFFLElBQUksR0FBRyxFQUFnQyxDQUFDO2FBQzFDLE1BQU0sRUFBRSxDQUNaLENBQUM7SUFDSixDQUFDOzhHQWpTVSxZQUFZO2tIQUFaLFlBQVksY0FEQyxNQUFNOztTQUNuQixZQUFZOzJGQUFaLFlBQVk7a0JBRHhCLFVBQVU7bUJBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAqL1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UsIEFsYWluVXRpbEFycmF5Q29uZmlnIH0gZnJvbSAnQGRlbG9uL3V0aWwvY29uZmlnJztcbmltcG9ydCB7IE56VHJlZU5vZGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHJlZSc7XG5cbmltcG9ydCB7XG4gIEFycmF5U2VydmljZUFyclRvVHJlZU5vZGVPcHRpb25zLFxuICBBcnJheVNlcnZpY2VBcnJUb1RyZWVPcHRpb25zLFxuICBBcnJheVNlcnZpY2VHZXRLZXlzQnlUcmVlTm9kZU9wdGlvbnMsXG4gIEFycmF5U2VydmljZUdyb3VwQnlSZXN1bHQsXG4gIEFycmF5U2VydmljZVRyZWVUb0Fyck9wdGlvbnNcbn0gZnJvbSAnLi9hcnJheS10eXBlLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEFycmF5U2VydmljZSB7XG4gIHByaXZhdGUgYzogQWxhaW5VdGlsQXJyYXlDb25maWc7XG5cbiAgY29uc3RydWN0b3IoY29nOiBBbGFpbkNvbmZpZ1NlcnZpY2UpIHtcbiAgICB0aGlzLmMgPSBjb2cubWVyZ2UoJ3V0aWxBcnJheScsIHtcbiAgICAgIGRlZXBNYXBOYW1lOiAnZGVlcCcsXG4gICAgICBwYXJlbnRNYXBOYW1lOiAncGFyZW50JyxcbiAgICAgIGlkTWFwTmFtZTogJ2lkJyxcbiAgICAgIHBhcmVudElkTWFwTmFtZTogJ3BhcmVudF9pZCcsXG4gICAgICBjaGlsZHJlbk1hcE5hbWU6ICdjaGlsZHJlbicsXG4gICAgICB0aXRsZU1hcE5hbWU6ICd0aXRsZScsXG4gICAgICBjaGVja2VkTWFwbmFtZTogJ2NoZWNrZWQnLFxuICAgICAgc2VsZWN0ZWRNYXBuYW1lOiAnc2VsZWN0ZWQnLFxuICAgICAgZXhwYW5kZWRNYXBuYW1lOiAnZXhwYW5kZWQnLFxuICAgICAgZGlzYWJsZWRNYXBuYW1lOiAnZGlzYWJsZWQnXG4gICAgfSkhO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgdHJlZSBzdHJ1Y3R1cmUgdG8gYXJyYXkgc3RydWN0dXJlXG4gICAqXG4gICAqIOWwhuagkee7k+aehOi9rOaNouaIkOaVsOe7hOe7k+aehFxuICAgKi9cbiAgdHJlZVRvQXJyPFQgZXh0ZW5kcyBvYmplY3QgPSBhbnk+KHRyZWU6IHJlYWRvbmx5IFRbXSwgb3B0aW9ucz86IEFycmF5U2VydmljZVRyZWVUb0Fyck9wdGlvbnM8VD4pOiBUW10ge1xuICAgIGNvbnN0IG9wdCA9IHtcbiAgICAgIGRlZXBNYXBOYW1lOiB0aGlzLmMuZGVlcE1hcE5hbWUsXG4gICAgICBwYXJlbnRNYXBOYW1lOiB0aGlzLmMucGFyZW50TWFwTmFtZSxcbiAgICAgIGNoaWxkcmVuTWFwTmFtZTogdGhpcy5jLmNoaWxkcmVuTWFwTmFtZSxcbiAgICAgIGNsZWFyQ2hpbGRyZW46IHRydWUsXG4gICAgICBjYjogbnVsbCxcbiAgICAgIC4uLm9wdGlvbnNcbiAgICB9IGFzIEFycmF5U2VydmljZVRyZWVUb0Fyck9wdGlvbnM7XG4gICAgY29uc3QgcmVzdWx0OiBBcnJheTx7IFtrZXk6IHN0cmluZ106IGFueSB9PiA9IFtdO1xuICAgIGNvbnN0IGluRm4gPSAobGlzdDogUmVhZG9ubHlBcnJheTx7IFtrZXk6IHN0cmluZ106IGFueSB9PiwgcGFyZW50OiBUIHwgbnVsbCwgZGVlcDogbnVtYmVyID0gMCk6IHZvaWQgPT4ge1xuICAgICAgZm9yIChjb25zdCBpIG9mIGxpc3QpIHtcbiAgICAgICAgaVtvcHQuZGVlcE1hcE5hbWUhXSA9IGRlZXA7XG4gICAgICAgIGlbb3B0LnBhcmVudE1hcE5hbWUhXSA9IHBhcmVudDtcbiAgICAgICAgaWYgKG9wdC5jYikge1xuICAgICAgICAgIG9wdC5jYihpLCBwYXJlbnQsIGRlZXApO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5wdXNoKGkpO1xuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IGlbb3B0LmNoaWxkcmVuTWFwTmFtZSFdO1xuICAgICAgICBpZiAoY2hpbGRyZW4gIT0gbnVsbCAmJiBBcnJheS5pc0FycmF5KGNoaWxkcmVuKSAmJiBjaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaW5GbihjaGlsZHJlbiwgaSBhcyBULCBkZWVwICsgMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdC5jbGVhckNoaWxkcmVuKSB7XG4gICAgICAgICAgZGVsZXRlIGlbb3B0LmNoaWxkcmVuTWFwTmFtZSFdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBpbkZuKHRyZWUsIG51bGwpO1xuICAgIHJldHVybiByZXN1bHQgYXMgVFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgYXJyYXkgc3RydWN0dXJlIHRvIHRyZWUgc3RydWN0dXJlXG4gICAqXG4gICAqIOaVsOe7hOi9rOaNouaIkOagkeaVsOaNrlxuICAgKi9cbiAgYXJyVG9UcmVlPFQgZXh0ZW5kcyBvYmplY3QgPSBhbnk+KGFycjogcmVhZG9ubHkgVFtdLCBvcHRpb25zPzogQXJyYXlTZXJ2aWNlQXJyVG9UcmVlT3B0aW9uczxUPik6IFRbXSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycikgfHwgYXJyLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGNvbnN0IG9wdCA9IHtcbiAgICAgIGlkTWFwTmFtZTogdGhpcy5jLmlkTWFwTmFtZSxcbiAgICAgIHBhcmVudElkTWFwTmFtZTogdGhpcy5jLnBhcmVudElkTWFwTmFtZSxcbiAgICAgIGNoaWxkcmVuTWFwTmFtZTogdGhpcy5jLmNoaWxkcmVuTWFwTmFtZSxcbiAgICAgIGNiOiBudWxsLFxuICAgICAgLi4ub3B0aW9uc1xuICAgIH0gYXMgQXJyYXlTZXJ2aWNlQXJyVG9UcmVlT3B0aW9uczxUPjtcbiAgICBjb25zdCB0cmVlOiBUW10gPSBbXTtcbiAgICBjb25zdCBjaGlsZHJlbk9mOiB7IFtrZXk6IHN0cmluZ106IFRbXSB9ID0ge307XG4gICAgbGV0IHJvb3RQaWQgPSBvcHQucm9vdFBhcmVudElkVmFsdWU7XG4gICAgY29uc3QgYXJyVHlwZSA9IGFyciBhcyBSZWFkb25seUFycmF5PHsgW2tleTogc3RyaW5nXTogYW55IH0+O1xuICAgIGlmICghcm9vdFBpZCkge1xuICAgICAgY29uc3QgcGlkcyA9IGFyclR5cGUubWFwKGkgPT4gaVtvcHQucGFyZW50SWRNYXBOYW1lIV0pO1xuICAgICAgY29uc3QgZW1wdHlQaWQgPSBwaWRzLmZpbmRJbmRleCh3ID0+IHcgPT0gbnVsbCk7XG4gICAgICByb290UGlkID0gZW1wdHlQaWQgIT09IC0xID8gcGlkc1tlbXB0eVBpZF0gOiBwaWRzLnNvcnQoKVswXTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGFyclR5cGUpIHtcbiAgICAgIGNvbnN0IGlkID0gaXRlbVtvcHQuaWRNYXBOYW1lIV07XG4gICAgICBjb25zdCBwaWQgPSBpdGVtW29wdC5wYXJlbnRJZE1hcE5hbWUhXTtcbiAgICAgIGNoaWxkcmVuT2ZbaWRdID0gY2hpbGRyZW5PZltpZF0gfHwgW107XG4gICAgICBpdGVtW29wdC5jaGlsZHJlbk1hcE5hbWUhXSA9IGNoaWxkcmVuT2ZbaWRdO1xuICAgICAgaWYgKG9wdC5jYikge1xuICAgICAgICBvcHQuY2IoaXRlbSBhcyBUKTtcbiAgICAgIH1cbiAgICAgIGlmIChwaWQgIT09IHJvb3RQaWQpIHtcbiAgICAgICAgY2hpbGRyZW5PZltwaWRdID0gY2hpbGRyZW5PZltwaWRdIHx8IFtdO1xuICAgICAgICBjaGlsZHJlbk9mW3BpZF0ucHVzaChpdGVtIGFzIFQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJlZS5wdXNoKGl0ZW0gYXMgVCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cmVlO1xuICB9XG5cbiAgLyoqXG4gICAqIOaVsOe7hOi9rOaNouaIkCBgbnotdHJlZWAg5pWw5o2u5rqQ77yM6YCa6L+HIGBvcHRpb25zYCDovazljJbpobnlkI3vvIzkuZ/lj6/ku6Xkvb/nlKggYG9wdGlvbnMuY2JgIOabtOmrmOe6p+WGs+WumuaVsOaNrumhuVxuICAgKi9cbiAgYXJyVG9UcmVlTm9kZTxUIGV4dGVuZHMgb2JqZWN0ID0gYW55PihhcnI6IHJlYWRvbmx5IFRbXSwgb3B0aW9ucz86IEFycmF5U2VydmljZUFyclRvVHJlZU5vZGVPcHRpb25zKTogTnpUcmVlTm9kZVtdIHtcbiAgICBjb25zdCBvcHQgPSB7XG4gICAgICBpZE1hcE5hbWU6IHRoaXMuYy5pZE1hcE5hbWUsXG4gICAgICBwYXJlbnRJZE1hcE5hbWU6IHRoaXMuYy5wYXJlbnRJZE1hcE5hbWUsXG4gICAgICB0aXRsZU1hcE5hbWU6IHRoaXMuYy50aXRsZU1hcE5hbWUsXG4gICAgICBpc0xlYWZNYXBOYW1lOiAnaXNMZWFmJyxcbiAgICAgIGNoZWNrZWRNYXBuYW1lOiB0aGlzLmMuY2hlY2tlZE1hcG5hbWUsXG4gICAgICBzZWxlY3RlZE1hcG5hbWU6IHRoaXMuYy5zZWxlY3RlZE1hcG5hbWUsXG4gICAgICBleHBhbmRlZE1hcG5hbWU6IHRoaXMuYy5leHBhbmRlZE1hcG5hbWUsXG4gICAgICBkaXNhYmxlZE1hcG5hbWU6IHRoaXMuYy5kaXNhYmxlZE1hcG5hbWUsXG4gICAgICBjYjogbnVsbCxcbiAgICAgIC4uLm9wdGlvbnNcbiAgICB9IGFzIEFycmF5U2VydmljZUFyclRvVHJlZU5vZGVPcHRpb25zPFQ+O1xuICAgIGNvbnN0IHRyZWUgPSB0aGlzLmFyclRvVHJlZTxUPihhcnIsIHtcbiAgICAgIGlkTWFwTmFtZTogb3B0LmlkTWFwTmFtZSxcbiAgICAgIHBhcmVudElkTWFwTmFtZTogb3B0LnBhcmVudElkTWFwTmFtZSxcbiAgICAgIGNoaWxkcmVuTWFwTmFtZTogJ2NoaWxkcmVuJ1xuICAgIH0pO1xuICAgIHRoaXMudmlzaXRUcmVlPFQ+KHRyZWUsIChpdGVtOiB7IFtrZXk6IHN0cmluZ106IGFueSB9LCBwYXJlbnQsIGRlZXApID0+IHtcbiAgICAgIGl0ZW0ua2V5ID0gaXRlbVtvcHQuaWRNYXBOYW1lIV07XG4gICAgICBpdGVtLnRpdGxlID0gaXRlbVtvcHQudGl0bGVNYXBOYW1lIV07XG4gICAgICBpdGVtLmNoZWNrZWQgPSBpdGVtW29wdC5jaGVja2VkTWFwbmFtZSFdO1xuICAgICAgaXRlbS5zZWxlY3RlZCA9IGl0ZW1bb3B0LnNlbGVjdGVkTWFwbmFtZSFdO1xuICAgICAgaXRlbS5leHBhbmRlZCA9IGl0ZW1bb3B0LmV4cGFuZGVkTWFwbmFtZSFdO1xuICAgICAgaXRlbS5kaXNhYmxlZCA9IGl0ZW1bb3B0LmRpc2FibGVkTWFwbmFtZSFdO1xuICAgICAgaWYgKGl0ZW1bb3B0LmlzTGVhZk1hcE5hbWUhXSA9PSBudWxsKSB7XG4gICAgICAgIGl0ZW0uaXNMZWFmID0gaXRlbS5jaGlsZHJlbi5sZW5ndGggPT09IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpdGVtLmlzTGVhZiA9IGl0ZW1bb3B0LmlzTGVhZk1hcE5hbWUhXTtcbiAgICAgIH1cbiAgICAgIGlmIChvcHQuY2IpIHtcbiAgICAgICAgb3B0LmNiKGl0ZW0gYXMgYW55LCBwYXJlbnQsIGRlZXApO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB0cmVlLm1hcChub2RlID0+IG5ldyBOelRyZWVOb2RlKG5vZGUgYXMgYW55KSk7XG4gIH1cblxuICAvKipcbiAgICog6YCS5b2S6K6/6Zeu5pW05Liq5qCRXG4gICAqL1xuICB2aXNpdFRyZWU8VCBleHRlbmRzIG9iamVjdCA9IGFueT4oXG4gICAgdHJlZTogcmVhZG9ubHkgVFtdLFxuICAgIGNiOiAoaXRlbTogVCwgcGFyZW50OiBUIHwgbnVsbCwgZGVlcDogbnVtYmVyKSA9PiB2b2lkLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKiog5a2Q6aG55ZCN77yM6buY6K6k77yaYCdjaGlsZHJlbidgICovXG4gICAgICBjaGlsZHJlbk1hcE5hbWU/OiBzdHJpbmc7XG4gICAgfVxuICApOiB2b2lkIHtcbiAgICBvcHRpb25zID0ge1xuICAgICAgY2hpbGRyZW5NYXBOYW1lOiB0aGlzLmMuY2hpbGRyZW5NYXBOYW1lLFxuICAgICAgLi4ub3B0aW9uc1xuICAgIH07XG4gICAgY29uc3QgaW5GbiA9IChkYXRhOiByZWFkb25seSBUW10sIHBhcmVudDogVCB8IG51bGwsIGRlZXA6IG51bWJlcik6IHZvaWQgPT4ge1xuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgY2IoaXRlbSwgcGFyZW50LCBkZWVwKTtcbiAgICAgICAgY29uc3QgY2hpbGRyZW5WYWwgPSAoaXRlbSBhcyB7IFtrZXk6IHN0cmluZ106IGFueSB9KVtvcHRpb25zIS5jaGlsZHJlbk1hcE5hbWUhXTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW5WYWwpICYmIGNoaWxkcmVuVmFsLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpbkZuKGNoaWxkcmVuVmFsLCBpdGVtLCBkZWVwICsgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIGluRm4odHJlZSwgbnVsbCwgMSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSB2YWx1ZSBvZiB0aGUgZmlyc3QgdHJlZSB2YWx1ZSBpbiB0aGUgdHJlZSB3aGVyZSBwcmVkaWNhdGUgaXMgdHJ1ZSwgYW5kIGB1bmRlZmluZWRgIG90aGVyd2lzZVxuICAgKlxuICAgKiDmoLnmja7mnaHku7bov5Tlm57moJHnmoTnrKzkuIDkuKrlgLzvvIzlkKbliJnov5Tlm54gYHVuZGVmaW5lZGBcbiAgICovXG4gIGZpbmRUcmVlPFQgZXh0ZW5kcyBvYmplY3QgPSBhbnk+KFxuICAgIHRyZWU6IHJlYWRvbmx5IFRbXSxcbiAgICBwcmVkaWNhdGU6IChpdGVtOiBUKSA9PiBib29sZWFuLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKiog5a2Q6aG55ZCN77yM6buY6K6k77yaYCdjaGlsZHJlbidgICovXG4gICAgICBjaGlsZHJlbk1hcE5hbWU/OiBzdHJpbmc7XG4gICAgfVxuICApOiBUIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgcmVzOiBUIHwgdW5kZWZpbmVkO1xuICAgIHRoaXMudmlzaXRUcmVlPFQ+KFxuICAgICAgdHJlZSxcbiAgICAgIGl0ZW0gPT4ge1xuICAgICAgICBpZiAocmVzID09PSB1bmRlZmluZWQgJiYgcHJlZGljYXRlKGl0ZW0pKSB7XG4gICAgICAgICAgcmVzID0gaXRlbTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9wdGlvbnNcbiAgICApO1xuICAgIHJldHVybiByZXM7XG4gIH1cblxuICAvKipcbiAgICog6I635Y+W5omA5pyJ5bey57uP6YCJ5Lit55qEIGBrZXlgIOWAvFxuICAgKi9cbiAgZ2V0S2V5c0J5VHJlZU5vZGUodHJlZTogTnpUcmVlTm9kZVtdLCBvcHRpb25zPzogQXJyYXlTZXJ2aWNlR2V0S2V5c0J5VHJlZU5vZGVPcHRpb25zKTogYW55W10ge1xuICAgIGNvbnN0IG9wdCA9IHtcbiAgICAgIGluY2x1ZGVIYWxmQ2hlY2tlZDogdHJ1ZSxcbiAgICAgIC4uLm9wdGlvbnNcbiAgICB9IGFzIEFycmF5U2VydmljZUdldEtleXNCeVRyZWVOb2RlT3B0aW9ucztcbiAgICBjb25zdCBrZXlzOiBhbnlbXSA9IFtdO1xuICAgIHRoaXMudmlzaXRUcmVlPE56VHJlZU5vZGU+KHRyZWUsIChpdGVtLCBwYXJlbnQsIGRlZXApID0+IHtcbiAgICAgIGlmIChpdGVtLmlzQ2hlY2tlZCB8fCAob3B0LmluY2x1ZGVIYWxmQ2hlY2tlZCAmJiBpdGVtLmlzSGFsZkNoZWNrZWQpKSB7XG4gICAgICAgIGtleXMucHVzaChvcHQuY2IgPyBvcHQuY2IoaXRlbSwgcGFyZW50LCBkZWVwKSA6IG9wdC5rZXlNYXBOYW1lID8gaXRlbS5vcmlnaW5bb3B0LmtleU1hcE5hbWVdIDogaXRlbS5rZXkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBrZXlzO1xuICB9XG4gIHByaXZhdGUgYmFzZUZsYXQoYXJyYXk6IGFueVtdLCBkZXB0aDogbnVtYmVyLCByZXN1bHQ6IGFueVtdID0gW10pOiBhbnlbXSB7XG4gICAgbGV0IGluZGV4ID0gLTE7XG4gICAgd2hpbGUgKCsraW5kZXggPCBhcnJheS5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gYXJyYXlbaW5kZXhdO1xuICAgICAgaWYgKGRlcHRoID4gMCAmJiBBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICBpZiAoZGVwdGggPiAxKSB7XG4gICAgICAgICAgdGhpcy5iYXNlRmxhdCh2YWx1ZSwgZGVwdGggLSAxLCByZXN1bHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxldCBwdXNoSW5kZXggPSAtMTtcbiAgICAgICAgICBjb25zdCBvZmZzZXQgPSByZXN1bHQubGVuZ3RoO1xuXG4gICAgICAgICAgd2hpbGUgKCsrcHVzaEluZGV4IDwgdmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXN1bHRbb2Zmc2V0ICsgcHVzaEluZGV4XSA9IHZhbHVlW3B1c2hJbmRleF07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICAvKipcbiAgICogUmVjdXJzaXZlbHkgZmxhdHRlbnMgYXJyYXlcbiAgICpcbiAgICog6YCS5b2S5omB5bmz5pWw57uEXG4gICAqIGBgYHRzXG4gICAqIHNydi5mbGF0KFsxLCBbMiwgMywgWzQsIDUsIFs2XV1dXSkgPT4gWzEsMiwzLDQsNSw2XVxuICAgKiBzcnYuZmxhdChbMSwgWzIsIDMsIFs0LCA1LCBbNl1dXV0sIDEpID0+IFsxLDIsMyxbNCwgNSwgWzZdXV1cbiAgICogYGBgXG4gICAqL1xuICBmbGF0PFQ+KGFycmF5OiByZWFkb25seSBUW10sIGRlcHRoOiBudW1iZXIgPSAxIC8gMCk6IFRbXSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXJyYXkpID8gdGhpcy5iYXNlRmxhdChhcnJheSBhcyBhbnlbXSwgZGVwdGgpIDogKGFycmF5IGFzIFRbXSk7XG4gIH1cbiAgLyoqXG4gICAqIEdyb3VwIHRoZSBhcnJheVxuICAgKlxuICAgKiDlr7nmlbDnu4Tov5vooYzliIbnu4RcbiAgICogYGBgdHNcbiAgICogc3J2Lmdyb3VwQnkoWzYuMSwgNC4yLCA2LjNdLCBNYXRoLmZsb29yKSA9PiB7XCI0XCI6WzQuMl0sXCI2XCI6WzYuMSw2LjNdfVxuICAgKiBzcnYuZ3JvdXBCeShbJ29uZScsICd0d28nLCAndGhyZWUnXSwgdiA9PiB2Lmxlbmd0aCkgPT4ge1wiM1wiOltcIm9uZVwiLFwidHdvXCJdLFwiNVwiOltcInRocmVlXCJdfVxuICAgKiBgYGBcbiAgICovXG4gIGdyb3VwQnk8VD4oYXJyYXk6IHJlYWRvbmx5IFRbXSwgaXRlcmF0ZWU6ICh2YWx1ZTogVCkgPT4gc3RyaW5nIHwgbnVtYmVyKTogQXJyYXlTZXJ2aWNlR3JvdXBCeVJlc3VsdCB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5KSkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICByZXR1cm4gYXJyYXkucmVkdWNlKChyZXN1bHQsIHZhbHVlKSA9PiB7XG4gICAgICBjb25zdCBrZXkgPSBpdGVyYXRlZSh2YWx1ZSk7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHJlc3VsdCwga2V5KSkge1xuICAgICAgICByZXN1bHRba2V5XS5wdXNoKHZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdFtrZXldID0gW3ZhbHVlXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSwge30gYXMgQXJyYXlTZXJ2aWNlR3JvdXBCeVJlc3VsdCk7XG4gIH1cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBkdXBsaWNhdGUtZnJlZSB2ZXJzaW9uIG9mIGFuIGFycmF5XG4gICAqXG4gICAqIOWIm+W7uuWOu+mHjeWQjueahOaVsOe7hFxuICAgKiBgYGB0c1xuICAgKiB1bmlxKFsxLCAyLCAyLCAzLCAxXSkgPT4gWzEsMiwzXVxuICAgKiB1bmlxKFt7IGE6IDEgfSwgeyBhOiAxIH0sIHsgYTogMiB9XSwgJ2EnKSA9PiBbe1wiYVwiOjF9LHtcImFcIjoyfV1cbiAgICogdW5pcShbeyBhOiAxIH0sIHsgYTogMSB9LCB7IGE6IDIgfV0sIGkgPT4gKGkuYSA9PT0gMSA/ICdhJyA6ICdiJykpID0+IFt7XCJhXCI6MX0se1wiYVwiOjJ9XVxuICAgKiBgYGBcbiAgICovXG4gIHVuaXE8VD4oYXJyYXk6IHJlYWRvbmx5IFRbXSwgcHJlZGljYXRlPzogc3RyaW5nIHwgKCh2YWx1ZTogVCkgPT4gc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbikpOiBUW10ge1xuICAgIHJldHVybiBBcnJheS5mcm9tKFxuICAgICAgYXJyYXlcbiAgICAgICAgLnJlZHVjZSgobWFwLCB2YWx1ZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGtleSA9IHByZWRpY2F0ZVxuICAgICAgICAgICAgPyB0eXBlb2YgcHJlZGljYXRlID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgICA/ICh2YWx1ZSBhcyBhbnkpW3ByZWRpY2F0ZV1cbiAgICAgICAgICAgICAgOiBwcmVkaWNhdGUhKHZhbHVlKVxuICAgICAgICAgICAgOiB2YWx1ZTtcbiAgICAgICAgICBpZiAoIW1hcC5oYXMoa2V5KSkge1xuICAgICAgICAgICAgbWFwLnNldChrZXksIHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG1hcDtcbiAgICAgICAgfSwgbmV3IE1hcDxzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuLCBUPigpKVxuICAgICAgICAudmFsdWVzKClcbiAgICApO1xuICB9XG59XG4iXX0=