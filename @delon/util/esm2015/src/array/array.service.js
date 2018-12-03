/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
// tslint:disable:no-any
import { Injectable } from '@angular/core';
import { NzTreeNode } from 'ng-zorro-antd';
import { DelonUtilConfig } from '../util.config';
import * as i0 from "@angular/core";
import * as i1 from "../util.config";
export class ArrayService {
    /**
     * @param {?} cog
     */
    constructor(cog) {
        this.c = Object.assign({}, (/** @type {?} */ ({
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
        })), (cog && cog.array));
    }
    /**
     * 将树结构转换成数组结构
     * @param {?} tree
     * @param {?=} options
     * @return {?}
     */
    treeToArr(tree, options) {
        options = Object.assign({ deepMapName: this.c.deepMapName, parentMapName: this.c.parentMapName, childrenMapName: this.c.childrenMapName, clearChildren: true, cb: null }, options);
        /** @type {?} */
        const result = [];
        /** @type {?} */
        const inFn = (list, parent, deep) => {
            for (const i of list) {
                i[options.deepMapName] = deep;
                i[options.parentMapName] = parent;
                if (options.cb) {
                    options.cb(i, parent, deep);
                }
                result.push(i);
                /** @type {?} */
                const children = i[options.childrenMapName];
                if (children != null &&
                    Array.isArray(children) &&
                    children.length > 0) {
                    inFn(children, i, deep + 1);
                }
                if (options.clearChildren) {
                    delete i[options.childrenMapName];
                }
            }
        };
        inFn(tree, 1, null);
        return result;
    }
    /**
     * 数组转换成树数据
     * @param {?} arr
     * @param {?=} options
     * @return {?}
     */
    arrToTree(arr, options) {
        options = Object.assign({ idMapName: this.c.idMapName, parentIdMapName: this.c.parentIdMapName, childrenMapName: this.c.childrenMapName, cb: null }, options);
        /** @type {?} */
        const tree = [];
        /** @type {?} */
        const childrenOf = {};
        for (const item of arr) {
            /** @type {?} */
            const id = item[options.idMapName];
            /** @type {?} */
            const pid = item[options.parentIdMapName];
            childrenOf[id] = childrenOf[id] || [];
            item[options.childrenMapName] = childrenOf[id];
            if (options.cb) {
                options.cb(item);
            }
            if (pid) {
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
        options = Object.assign({ idMapName: this.c.idMapName, parentIdMapName: this.c.parentIdMapName, titleMapName: this.c.titleMapName, isLeafMapName: 'isLeaf', checkedMapname: this.c.checkedMapname, selectedMapname: this.c.selectedMapname, expandedMapname: this.c.expandedMapname, disabledMapname: this.c.disabledMapname, cb: null }, options);
        /** @type {?} */
        const tree = this.arrToTree(arr, {
            idMapName: options.idMapName,
            parentIdMapName: options.parentIdMapName,
            childrenMapName: 'children',
        });
        this.visitTree(tree, (item, parent, deep) => {
            item.key = item[options.idMapName];
            item.title = item[options.titleMapName];
            item.checked = item[options.checkedMapname];
            item.selected = item[options.selectedMapname];
            item.expanded = item[options.expandedMapname];
            item.disabled = item[options.disabledMapname];
            if (item[options.isLeafMapName] == null) {
                item.isLeaf = item.children.length === 0;
            }
            else {
                item.isLeaf = item[options.isLeafMapName];
            }
            if (options.cb) {
                options.cb(item, parent, deep);
            }
        });
        return tree.map(node => new NzTreeNode(node));
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
        const inFn = (data, parent, deep) => {
            for (const item of data) {
                cb(item, parent, deep);
                /** @type {?} */
                const childrenVal = item[options.childrenMapName];
                if (childrenVal && childrenVal.length > 0) {
                    inFn(childrenVal, item, deep + 1);
                }
            }
        };
        inFn(tree, null, 1);
    }
    /**
     * 获取所有已经选中的 `key` 值
     * @param {?} tree
     * @param {?=} options
     * @return {?}
     */
    getKeysByTreeNode(tree, options) {
        options = Object.assign({ includeHalfChecked: true }, options);
        /** @type {?} */
        const keys = [];
        this.visitTree(tree, (item, parent, deep) => {
            if (item.isChecked ||
                (options.includeHalfChecked && item.isHalfChecked)) {
                keys.push(options.cb
                    ? options.cb(item, parent, deep)
                    : options.keyMapName
                        ? item.origin[options.keyMapName]
                        : item.key);
            }
        });
        return keys;
    }
}
ArrayService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ArrayService.ctorParameters = () => [
    { type: DelonUtilConfig }
];
/** @nocollapse */ ArrayService.ngInjectableDef = i0.defineInjectable({ factory: function ArrayService_Factory() { return new ArrayService(i0.inject(i1.DelonUtilConfig)); }, token: ArrayService, providedIn: "root" });
if (false) {
    /** @type {?} */
    ArrayService.prototype.c;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi91dGlsLyIsInNvdXJjZXMiOlsic3JjL2FycmF5L2FycmF5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFJakQsTUFBTSxPQUFPLFlBQVk7Ozs7SUFFdkIsWUFBWSxHQUFvQjtRQUM5QixJQUFJLENBQUMsQ0FBQyxxQkFDRCxtQkFBQTtZQUNELFdBQVcsRUFBRSxNQUFNO1lBQ25CLGFBQWEsRUFBRSxRQUFRO1lBQ3ZCLFNBQVMsRUFBRSxJQUFJO1lBQ2YsZUFBZSxFQUFFLFdBQVc7WUFDNUIsZUFBZSxFQUFFLFVBQVU7WUFDM0IsWUFBWSxFQUFFLE9BQU87WUFDckIsY0FBYyxFQUFFLFNBQVM7WUFDekIsZUFBZSxFQUFFLFVBQVU7WUFDM0IsZUFBZSxFQUFFLFVBQVU7WUFDM0IsZUFBZSxFQUFFLFVBQVU7U0FDNUIsRUFBZSxFQUNiLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FDdEIsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7SUFJRCxTQUFTLENBQ1AsSUFBVyxFQUNYLE9BV0M7UUFFRCxPQUFPLG1CQUNMLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFDL0IsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsYUFBYSxFQUNuQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxlQUFlLEVBQ3ZDLGFBQWEsRUFBRSxJQUFJLEVBQ25CLEVBQUUsRUFBRSxJQUFJLElBQ0wsT0FBTyxDQUNYLENBQUM7O2NBQ0ksTUFBTSxHQUFVLEVBQUU7O2NBQ2xCLElBQUksR0FBRyxDQUFDLElBQVcs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QUFnQixFQUFFLE1BQWtCLEVBQUUsSUFBWSxFQUFFLEVBQUU7WUFDckQsSUFDRSxJQUFJLENBQUMsU0FBUztnQkFDZCxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQ2xEO2dCQUNBLElBQUksQ0FBQyxJQUFJLENBQ1AsT0FBTyxDQUFDLEVBQUU7b0JBQ1IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUM7b0JBQ2hDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVTt3QkFDbEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQzt3QkFDakMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ2YsQ0FBQzthQUNIO1FBQ0gsQ0FBQyxDQUNGLENBQUM7UUFDRixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7OztZQXpPRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O1lBSHpCLGVBQWU7Ozs7O0lBS3RCLHlCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOm5vLWFueVxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpUcmVlTm9kZSB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xuaW1wb3J0IHsgRGVsb25VdGlsQ29uZmlnIH0gZnJvbSAnLi4vdXRpbC5jb25maWcnO1xuaW1wb3J0IHsgQXJyYXlDb25maWcgfSBmcm9tICcuL2FycmF5LmNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQXJyYXlTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBjOiBBcnJheUNvbmZpZztcbiAgY29uc3RydWN0b3IoY29nOiBEZWxvblV0aWxDb25maWcpIHtcbiAgICB0aGlzLmMgPSB7XG4gICAgICAuLi57XG4gICAgICAgIGRlZXBNYXBOYW1lOiAnZGVlcCcsXG4gICAgICAgIHBhcmVudE1hcE5hbWU6ICdwYXJlbnQnLFxuICAgICAgICBpZE1hcE5hbWU6ICdpZCcsXG4gICAgICAgIHBhcmVudElkTWFwTmFtZTogJ3BhcmVudF9pZCcsXG4gICAgICAgIGNoaWxkcmVuTWFwTmFtZTogJ2NoaWxkcmVuJyxcbiAgICAgICAgdGl0bGVNYXBOYW1lOiAndGl0bGUnLFxuICAgICAgICBjaGVja2VkTWFwbmFtZTogJ2NoZWNrZWQnLFxuICAgICAgICBzZWxlY3RlZE1hcG5hbWU6ICdzZWxlY3RlZCcsXG4gICAgICAgIGV4cGFuZGVkTWFwbmFtZTogJ2V4cGFuZGVkJyxcbiAgICAgICAgZGlzYWJsZWRNYXBuYW1lOiAnZGlzYWJsZWQnLFxuICAgICAgfSBhcyBBcnJheUNvbmZpZyxcbiAgICAgIC4uLihjb2cgJiYgY29nLmFycmF5KSxcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiDlsIbmoJHnu5PmnoTovazmjaLmiJDmlbDnu4Tnu5PmnoRcbiAgICovXG4gIHRyZWVUb0FycihcbiAgICB0cmVlOiBhbnlbXSxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqIOa3seW6pumhueWQje+8jOm7mOiupO+8mmAnZGVlcCdgICovXG4gICAgICBkZWVwTWFwTmFtZT86IHN0cmluZztcbiAgICAgIC8qKiDmiYHlubPlkI7mlbDnu4TnmoTniLbmlbDmja7pobnlkI3vvIzpu5jorqTvvJpgJ3BhcmVudCdgICovXG4gICAgICBwYXJlbnRNYXBOYW1lPzogc3RyaW5nO1xuICAgICAgLyoqIOa6kOaVsOaNruWtkOmhueWQje+8jOm7mOiupO+8mmAnY2hpbGRyZW4nYCAqL1xuICAgICAgY2hpbGRyZW5NYXBOYW1lPzogc3RyaW5nO1xuICAgICAgLyoqIOaYr+WQpuenu+mZpCBgY2hpbGRyZW5gIOiKgueCue+8jOm7mOiupO+8mmB0cnVlYCAqL1xuICAgICAgY2xlYXJDaGlsZHJlbj86IGJvb2xlYW47XG4gICAgICAvKiog6L2s5o2i5oiQ5pWw57uE57uT5p6E5pe25Zue6LCDICovXG4gICAgICBjYj8oaXRlbTogYW55LCBwYXJlbnQ6IGFueSwgZGVlcDogbnVtYmVyKTogdm9pZDtcbiAgICB9LFxuICApOiBhbnlbXSB7XG4gICAgb3B0aW9ucyA9IHtcbiAgICAgIGRlZXBNYXBOYW1lOiB0aGlzLmMuZGVlcE1hcE5hbWUsXG4gICAgICBwYXJlbnRNYXBOYW1lOiB0aGlzLmMucGFyZW50TWFwTmFtZSxcbiAgICAgIGNoaWxkcmVuTWFwTmFtZTogdGhpcy5jLmNoaWxkcmVuTWFwTmFtZSxcbiAgICAgIGNsZWFyQ2hpbGRyZW46IHRydWUsXG4gICAgICBjYjogbnVsbCxcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgfTtcbiAgICBjb25zdCByZXN1bHQ6IGFueVtdID0gW107XG4gICAgY29uc3QgaW5GbiA9IChsaXN0OiBhbnlbXSwgcGFyZW50OiBhbnksIGRlZXA6IG51bWJlcikgPT4ge1xuICAgICAgZm9yIChjb25zdCBpIG9mIGxpc3QpIHtcbiAgICAgICAgaVtvcHRpb25zLmRlZXBNYXBOYW1lXSA9IGRlZXA7XG4gICAgICAgIGlbb3B0aW9ucy5wYXJlbnRNYXBOYW1lXSA9IHBhcmVudDtcbiAgICAgICAgaWYgKG9wdGlvbnMuY2IpIHsgb3B0aW9ucy5jYihpLCBwYXJlbnQsIGRlZXApOyB9XG4gICAgICAgIHJlc3VsdC5wdXNoKGkpO1xuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IGlbb3B0aW9ucy5jaGlsZHJlbk1hcE5hbWVdO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgY2hpbGRyZW4gIT0gbnVsbCAmJlxuICAgICAgICAgIEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pICYmXG4gICAgICAgICAgY2hpbGRyZW4ubGVuZ3RoID4gMFxuICAgICAgICApIHtcbiAgICAgICAgICBpbkZuKGNoaWxkcmVuLCBpLCBkZWVwICsgMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMuY2xlYXJDaGlsZHJlbikgeyBkZWxldGUgaVtvcHRpb25zLmNoaWxkcmVuTWFwTmFtZV07IH1cbiAgICAgIH1cbiAgICB9O1xuICAgIGluRm4odHJlZSwgMSwgbnVsbCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiDmlbDnu4TovazmjaLmiJDmoJHmlbDmja5cbiAgICovXG4gIGFyclRvVHJlZShcbiAgICBhcnI6IGFueVtdLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKiog57yW5Y+36aG55ZCN77yM6buY6K6k77yaYCdpZCdgICovXG4gICAgICBpZE1hcE5hbWU/OiBzdHJpbmc7XG4gICAgICAvKiog54i257yW5Y+36aG55ZCN77yM6buY6K6k77yaYCdwYXJlbnRfaWQnYCAqL1xuICAgICAgcGFyZW50SWRNYXBOYW1lPzogc3RyaW5nO1xuICAgICAgLyoqIOWtkOmhueWQje+8jOm7mOiupO+8mmAnY2hpbGRyZW4nYCAqL1xuICAgICAgY2hpbGRyZW5NYXBOYW1lPzogc3RyaW5nO1xuICAgICAgLyoqIOi9rOaNouaIkOagkeaVsOaNruaXtuWbnuiwgyAqL1xuICAgICAgY2I/KGl0ZW06IGFueSk6IHZvaWQ7XG4gICAgfSxcbiAgKTogYW55W10ge1xuICAgIG9wdGlvbnMgPSB7XG4gICAgICBpZE1hcE5hbWU6IHRoaXMuYy5pZE1hcE5hbWUsXG4gICAgICBwYXJlbnRJZE1hcE5hbWU6IHRoaXMuYy5wYXJlbnRJZE1hcE5hbWUsXG4gICAgICBjaGlsZHJlbk1hcE5hbWU6IHRoaXMuYy5jaGlsZHJlbk1hcE5hbWUsXG4gICAgICBjYjogbnVsbCxcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgfTtcbiAgICBjb25zdCB0cmVlOiBhbnlbXSA9IFtdO1xuICAgIGNvbnN0IGNoaWxkcmVuT2YgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgYXJyKSB7XG4gICAgICBjb25zdCBpZCA9IGl0ZW1bb3B0aW9ucy5pZE1hcE5hbWVdO1xuICAgICAgY29uc3QgcGlkID0gaXRlbVtvcHRpb25zLnBhcmVudElkTWFwTmFtZV07XG4gICAgICBjaGlsZHJlbk9mW2lkXSA9IGNoaWxkcmVuT2ZbaWRdIHx8IFtdO1xuICAgICAgaXRlbVtvcHRpb25zLmNoaWxkcmVuTWFwTmFtZV0gPSBjaGlsZHJlbk9mW2lkXTtcbiAgICAgIGlmIChvcHRpb25zLmNiKSB7IG9wdGlvbnMuY2IoaXRlbSk7IH1cbiAgICAgIGlmIChwaWQpIHtcbiAgICAgICAgY2hpbGRyZW5PZltwaWRdID0gY2hpbGRyZW5PZltwaWRdIHx8IFtdO1xuICAgICAgICBjaGlsZHJlbk9mW3BpZF0ucHVzaChpdGVtKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyZWUucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRyZWU7XG4gIH1cblxuICAvKipcbiAgICog5pWw57uE6L2s5o2i5oiQIGBuei10cmVlYCDmlbDmja7mupDvvIzpgJrov4cgYG9wdGlvbnNgIOi9rOWMlumhueWQje+8jOS5n+WPr+S7peS9v+eUqCBgb3B0aW9ucy5jYmAg5pu06auY57qn5Yaz5a6a5pWw5o2u6aG5XG4gICAqL1xuICBhcnJUb1RyZWVOb2RlKFxuICAgIGFycjogYW55W10sXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKiDnvJblj7fpobnlkI3vvIzpu5jorqTvvJpgJ2lkJ2AgKi9cbiAgICAgIGlkTWFwTmFtZT86IHN0cmluZztcbiAgICAgIC8qKiDniLbnvJblj7fpobnlkI3vvIzpu5jorqTvvJpgJ3BhcmVudF9pZCdgICovXG4gICAgICBwYXJlbnRJZE1hcE5hbWU/OiBzdHJpbmc7XG4gICAgICAvKiog5qCH6aKY6aG55ZCN77yM6buY6K6k77yaYCd0aXRsZSdgICovXG4gICAgICB0aXRsZU1hcE5hbWU/OiBzdHJpbmc7XG4gICAgICAvKiog6K6+572u5Li65Y+25a2Q6IqC54K56aG55ZCN77yM6Iul5pWw5o2u5rqQ5LiN5a2Y5Zyo5pe26Ieq5Yqo5qC55o2uIGBjaGlsZHJlbmAg5YC85Yaz5a6a5piv5ZCm5Li65Y+25a2Q6IqC54K577yM6buY6K6k77yaYCdpc0xlYWYnYCAqL1xuICAgICAgaXNMZWFmTWFwTmFtZT86IHN0cmluZztcbiAgICAgIC8qKiDoioLngrkgQ2hlY2tib3gg5piv5ZCm6YCJ5Lit6aG55ZCN77yM6buY6K6k77yaYCdjaGVja2VkJ2AgKi9cbiAgICAgIGNoZWNrZWRNYXBuYW1lPzogc3RyaW5nO1xuICAgICAgLyoqIOiKgueCueacrOi6q+aYr+WQpumAieS4remhueWQje+8jOm7mOiupO+8mmAnc2VsZWN0ZWQnYCAqL1xuICAgICAgc2VsZWN0ZWRNYXBuYW1lPzogc3RyaW5nO1xuICAgICAgLyoqIOiKgueCueaYr+WQpuWxleW8gCjlj7blrZDoioLngrnml6DmlYgp6aG55ZCN77yM6buY6K6k77yaYCdleHBhbmRlZCdgICovXG4gICAgICBleHBhbmRlZE1hcG5hbWU/OiBzdHJpbmc7XG4gICAgICAvKiog6K6+572u5piv5ZCm56aB55So6IqC54K5KOS4jeWPr+i/m+ihjOS7u+S9leaTjeS9nCnpobnlkI3vvIzpu5jorqTvvJpgJ2Rpc2FibGVkJ2AgKi9cbiAgICAgIGRpc2FibGVkTWFwbmFtZT86IHN0cmluZztcbiAgICAgIC8qKiDovazmjaLmiJDmoJHmlbDmja7lkI7vvIzmiafooYznmoTpgJLlvZLlm57osIMgKi9cbiAgICAgIGNiPyhpdGVtOiBhbnksIHBhcmVudDogYW55LCBkZWVwOiBudW1iZXIpOiB2b2lkO1xuICAgIH0sXG4gICk6IE56VHJlZU5vZGVbXSB7XG4gICAgb3B0aW9ucyA9IHtcbiAgICAgIGlkTWFwTmFtZTogdGhpcy5jLmlkTWFwTmFtZSxcbiAgICAgIHBhcmVudElkTWFwTmFtZTogdGhpcy5jLnBhcmVudElkTWFwTmFtZSxcbiAgICAgIHRpdGxlTWFwTmFtZTogdGhpcy5jLnRpdGxlTWFwTmFtZSxcbiAgICAgIGlzTGVhZk1hcE5hbWU6ICdpc0xlYWYnLFxuICAgICAgY2hlY2tlZE1hcG5hbWU6IHRoaXMuYy5jaGVja2VkTWFwbmFtZSxcbiAgICAgIHNlbGVjdGVkTWFwbmFtZTogdGhpcy5jLnNlbGVjdGVkTWFwbmFtZSxcbiAgICAgIGV4cGFuZGVkTWFwbmFtZTogdGhpcy5jLmV4cGFuZGVkTWFwbmFtZSxcbiAgICAgIGRpc2FibGVkTWFwbmFtZTogdGhpcy5jLmRpc2FibGVkTWFwbmFtZSxcbiAgICAgIGNiOiBudWxsLFxuICAgICAgLi4ub3B0aW9ucyxcbiAgICB9O1xuICAgIGNvbnN0IHRyZWUgPSB0aGlzLmFyclRvVHJlZShhcnIsIHtcbiAgICAgIGlkTWFwTmFtZTogb3B0aW9ucy5pZE1hcE5hbWUsXG4gICAgICBwYXJlbnRJZE1hcE5hbWU6IG9wdGlvbnMucGFyZW50SWRNYXBOYW1lLFxuICAgICAgY2hpbGRyZW5NYXBOYW1lOiAnY2hpbGRyZW4nLFxuICAgIH0pO1xuICAgIHRoaXMudmlzaXRUcmVlKHRyZWUsIChpdGVtOiBhbnksIHBhcmVudDogYW55LCBkZWVwOiBudW1iZXIpID0+IHtcbiAgICAgIGl0ZW0ua2V5ID0gaXRlbVtvcHRpb25zLmlkTWFwTmFtZV07XG4gICAgICBpdGVtLnRpdGxlID0gaXRlbVtvcHRpb25zLnRpdGxlTWFwTmFtZV07XG4gICAgICBpdGVtLmNoZWNrZWQgPSBpdGVtW29wdGlvbnMuY2hlY2tlZE1hcG5hbWVdO1xuICAgICAgaXRlbS5zZWxlY3RlZCA9IGl0ZW1bb3B0aW9ucy5zZWxlY3RlZE1hcG5hbWVdO1xuICAgICAgaXRlbS5leHBhbmRlZCA9IGl0ZW1bb3B0aW9ucy5leHBhbmRlZE1hcG5hbWVdO1xuICAgICAgaXRlbS5kaXNhYmxlZCA9IGl0ZW1bb3B0aW9ucy5kaXNhYmxlZE1hcG5hbWVdO1xuICAgICAgaWYgKGl0ZW1bb3B0aW9ucy5pc0xlYWZNYXBOYW1lXSA9PSBudWxsKSB7XG4gICAgICAgIGl0ZW0uaXNMZWFmID0gaXRlbS5jaGlsZHJlbi5sZW5ndGggPT09IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpdGVtLmlzTGVhZiA9IGl0ZW1bb3B0aW9ucy5pc0xlYWZNYXBOYW1lXTtcbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25zLmNiKSB7IG9wdGlvbnMuY2IoaXRlbSwgcGFyZW50LCBkZWVwKTsgfVxuICAgIH0pO1xuICAgIHJldHVybiB0cmVlLm1hcChub2RlID0+IG5ldyBOelRyZWVOb2RlKG5vZGUpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDpgJLlvZLorr/pl67mlbTkuKrmoJFcbiAgICovXG4gIHZpc2l0VHJlZShcbiAgICB0cmVlOiBhbnlbXSxcbiAgICBjYjogKGl0ZW06IGFueSwgcGFyZW50OiBhbnksIGRlZXA6IG51bWJlcikgPT4gdm9pZCxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqIOWtkOmhueWQje+8jOm7mOiupO+8mmAnY2hpbGRyZW4nYCAqL1xuICAgICAgY2hpbGRyZW5NYXBOYW1lPzogc3RyaW5nO1xuICAgIH0sXG4gICk6IHZvaWQge1xuICAgIG9wdGlvbnMgPSB7XG4gICAgICBjaGlsZHJlbk1hcE5hbWU6IHRoaXMuYy5jaGlsZHJlbk1hcE5hbWUsXG4gICAgICAuLi5vcHRpb25zLFxuICAgIH07XG4gICAgY29uc3QgaW5GbiA9IChkYXRhOiBhbnlbXSwgcGFyZW50OiBhbnksIGRlZXA6IG51bWJlcikgPT4ge1xuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgY2IoaXRlbSwgcGFyZW50LCBkZWVwKTtcbiAgICAgICAgY29uc3QgY2hpbGRyZW5WYWwgPSBpdGVtW29wdGlvbnMuY2hpbGRyZW5NYXBOYW1lXTtcbiAgICAgICAgaWYgKGNoaWxkcmVuVmFsICYmIGNoaWxkcmVuVmFsLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpbkZuKGNoaWxkcmVuVmFsLCBpdGVtLCBkZWVwICsgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIGluRm4odHJlZSwgbnVsbCwgMSk7XG4gIH1cblxuICAvKipcbiAgICog6I635Y+W5omA5pyJ5bey57uP6YCJ5Lit55qEIGBrZXlgIOWAvFxuICAgKi9cbiAgZ2V0S2V5c0J5VHJlZU5vZGUoXG4gICAgdHJlZTogTnpUcmVlTm9kZVtdLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKiog5piv5ZCm5YyF5ZCr5Y2K6YCJ54q25oCB55qE5YC877yM6buY6K6k77yaYHRydWVgICovXG4gICAgICBpbmNsdWRlSGFsZkNoZWNrZWQ/OiBib29sZWFuO1xuICAgICAgLyoqIOaYr+WQpumHjeaWsOaMh+WumiBga2V5YCDplK7lkI3vvIzoi6XkuI3mjIflrprooajnpLrkvb/nlKggYE56VHJlZU5vZGUua2V5YCDlgLwgKi9cbiAgICAgIGtleU1hcE5hbWU/OiBzdHJpbmc7XG4gICAgICAvKiog5Zue6LCD77yM6L+U5Zue5LiA5Liq5YC8IGBrZXlgIOWAvO+8jOS8mOWFiOe6p+mrmOS6juWFtuS7liAqL1xuICAgICAgY2I/KGl0ZW06IE56VHJlZU5vZGUsIHBhcmVudDogTnpUcmVlTm9kZSwgZGVlcDogbnVtYmVyKTogYW55O1xuICAgIH0sXG4gICk6IGFueVtdIHtcbiAgICBvcHRpb25zID0ge1xuICAgICAgaW5jbHVkZUhhbGZDaGVja2VkOiB0cnVlLFxuICAgICAgLi4ub3B0aW9ucyxcbiAgICB9O1xuICAgIGNvbnN0IGtleXM6IGFueVtdID0gW107XG4gICAgdGhpcy52aXNpdFRyZWUoXG4gICAgICB0cmVlLFxuICAgICAgKGl0ZW06IE56VHJlZU5vZGUsIHBhcmVudDogTnpUcmVlTm9kZSwgZGVlcDogbnVtYmVyKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBpdGVtLmlzQ2hlY2tlZCB8fFxuICAgICAgICAgIChvcHRpb25zLmluY2x1ZGVIYWxmQ2hlY2tlZCAmJiBpdGVtLmlzSGFsZkNoZWNrZWQpXG4gICAgICAgICkge1xuICAgICAgICAgIGtleXMucHVzaChcbiAgICAgICAgICAgIG9wdGlvbnMuY2JcbiAgICAgICAgICAgICAgPyBvcHRpb25zLmNiKGl0ZW0sIHBhcmVudCwgZGVlcClcbiAgICAgICAgICAgICAgOiBvcHRpb25zLmtleU1hcE5hbWVcbiAgICAgICAgICAgICAgICA/IGl0ZW0ub3JpZ2luW29wdGlvbnMua2V5TWFwTmFtZV1cbiAgICAgICAgICAgICAgICA6IGl0ZW0ua2V5LFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgKTtcbiAgICByZXR1cm4ga2V5cztcbiAgfVxufVxuIl19