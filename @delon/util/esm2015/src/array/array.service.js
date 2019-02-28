/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DelonUtilConfig } from '../util.config';
import * as i0 from "@angular/core";
import * as i1 from "../util.config";
export class ArrayService {
    /**
     * @param {?} cog
     */
    constructor(cog) {
        this.c = Object.assign({ deepMapName: 'deep', parentMapName: 'parent', idMapName: 'id', parentIdMapName: 'parent_id', childrenMapName: 'children', titleMapName: 'title', checkedMapname: 'checked', selectedMapname: 'selected', expandedMapname: 'expanded', disabledMapname: 'disabled' }, (cog && cog.array));
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
        const inFn = (/**
         * @param {?} list
         * @param {?} parent
         * @param {?} deep
         * @return {?}
         */
        (list, parent, deep) => {
            for (const i of list) {
                i[options.deepMapName] = deep;
                i[options.parentMapName] = parent;
                if (options.cb) {
                    options.cb(i, parent, deep);
                }
                result.push(i);
                /** @type {?} */
                const children = i[options.childrenMapName];
                if (children != null && Array.isArray(children) && children.length > 0) {
                    inFn(children, i, deep + 1);
                }
                if (options.clearChildren) {
                    delete i[options.childrenMapName];
                }
            }
        });
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
        this.visitTree(tree, (/**
         * @param {?} item
         * @param {?} parent
         * @param {?} deep
         * @return {?}
         */
        (item, parent, deep) => {
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
        }));
        return tree;
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
                const childrenVal = item[options.childrenMapName];
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
        options = Object.assign({ includeHalfChecked: true }, options);
        /** @type {?} */
        const keys = [];
        this.visitTree(tree, (/**
         * @param {?} item
         * @param {?} parent
         * @param {?} deep
         * @return {?}
         */
        (item, parent, deep) => {
            if (item.isChecked || (options.includeHalfChecked && item.isHalfChecked)) {
                keys.push(options.cb
                    ? options.cb(item, parent, deep)
                    : options.keyMapName
                        ? item.origin[options.keyMapName]
                        : item.key);
            }
        }));
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
    /**
     * @type {?}
     * @private
     */
    ArrayService.prototype.c;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi91dGlsLyIsInNvdXJjZXMiOlsic3JjL2FycmF5L2FycmF5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFJakQsTUFBTSxPQUFPLFlBQVk7Ozs7SUFFdkIsWUFBWSxHQUFvQjtRQUM5QixJQUFJLENBQUMsQ0FBQyxtQkFDSixXQUFXLEVBQUUsTUFBTSxFQUNuQixhQUFhLEVBQUUsUUFBUSxFQUN2QixTQUFTLEVBQUUsSUFBSSxFQUNmLGVBQWUsRUFBRSxXQUFXLEVBQzVCLGVBQWUsRUFBRSxVQUFVLEVBQzNCLFlBQVksRUFBRSxPQUFPLEVBQ3JCLGNBQWMsRUFBRSxTQUFTLEVBQ3pCLGVBQWUsRUFBRSxVQUFVLEVBQzNCLGVBQWUsRUFBRSxVQUFVLEVBQzNCLGVBQWUsRUFBRSxVQUFVLElBQ3hCLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FDdEIsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7SUFJRCxTQUFTLENBQ1AsSUFBVyxFQUNYLE9BV0M7UUFFRCxPQUFPLG1CQUNMLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFDL0IsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsYUFBYSxFQUNuQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxlQUFlLEVBQ3ZDLGFBQWEsRUFBRSxJQUFJLEVBQ25CLEVBQUUsRUFBRSxJQUFJLElBQ0wsT0FBTyxDQUNYLENBQUM7O2NBQ0ksTUFBTSxHQUFVLEVBQUU7O2NBQ2xCLElBQUk7Ozs7OztRQUFHLENBQUMsSUFBVyxFQUFFLE1BQVcsRUFBRSxJQUFZLEVBQUUsRUFBRTtZQUN0RCxLQUFLLE1BQU0sQ0FBQyxJQUFJLElB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QyxhQUFhLENBQUMsRUFBRTtnQkFDeEUsSUFBSSxDQUFDLElBQUksQ0FDUCxPQUFPLENBQUMsRUFBRTtvQkFDUixDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQztvQkFDaEMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVO3dCQUNwQixDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO3dCQUNqQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDYixDQUFDO2FBQ0g7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUNILE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7O1lBck9GLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7WUFIekIsZUFBZTs7Ozs7Ozs7SUFLdEIseUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpUcmVlTm9kZSB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xuaW1wb3J0IHsgRGVsb25VdGlsQ29uZmlnIH0gZnJvbSAnLi4vdXRpbC5jb25maWcnO1xuaW1wb3J0IHsgQXJyYXlDb25maWcgfSBmcm9tICcuL2FycmF5LmNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQXJyYXlTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBjOiBBcnJheUNvbmZpZztcbiAgY29uc3RydWN0b3IoY29nOiBEZWxvblV0aWxDb25maWcpIHtcbiAgICB0aGlzLmMgPSB7XG4gICAgICBkZWVwTWFwTmFtZTogJ2RlZXAnLFxuICAgICAgcGFyZW50TWFwTmFtZTogJ3BhcmVudCcsXG4gICAgICBpZE1hcE5hbWU6ICdpZCcsXG4gICAgICBwYXJlbnRJZE1hcE5hbWU6ICdwYXJlbnRfaWQnLFxuICAgICAgY2hpbGRyZW5NYXBOYW1lOiAnY2hpbGRyZW4nLFxuICAgICAgdGl0bGVNYXBOYW1lOiAndGl0bGUnLFxuICAgICAgY2hlY2tlZE1hcG5hbWU6ICdjaGVja2VkJyxcbiAgICAgIHNlbGVjdGVkTWFwbmFtZTogJ3NlbGVjdGVkJyxcbiAgICAgIGV4cGFuZGVkTWFwbmFtZTogJ2V4cGFuZGVkJyxcbiAgICAgIGRpc2FibGVkTWFwbmFtZTogJ2Rpc2FibGVkJyxcbiAgICAgIC4uLihjb2cgJiYgY29nLmFycmF5KSxcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiDlsIbmoJHnu5PmnoTovazmjaLmiJDmlbDnu4Tnu5PmnoRcbiAgICovXG4gIHRyZWVUb0FycihcbiAgICB0cmVlOiBhbnlbXSxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqIOa3seW6pumhueWQje+8jOm7mOiupO+8mmAnZGVlcCdgICovXG4gICAgICBkZWVwTWFwTmFtZT86IHN0cmluZztcbiAgICAgIC8qKiDmiYHlubPlkI7mlbDnu4TnmoTniLbmlbDmja7pobnlkI3vvIzpu5jorqTvvJpgJ3BhcmVudCdgICovXG4gICAgICBwYXJlbnRNYXBOYW1lPzogc3RyaW5nO1xuICAgICAgLyoqIOa6kOaVsOaNruWtkOmhueWQje+8jOm7mOiupO+8mmAnY2hpbGRyZW4nYCAqL1xuICAgICAgY2hpbGRyZW5NYXBOYW1lPzogc3RyaW5nO1xuICAgICAgLyoqIOaYr+WQpuenu+mZpCBgY2hpbGRyZW5gIOiKgueCue+8jOm7mOiupO+8mmB0cnVlYCAqL1xuICAgICAgY2xlYXJDaGlsZHJlbj86IGJvb2xlYW47XG4gICAgICAvKiog6L2s5o2i5oiQ5pWw57uE57uT5p6E5pe25Zue6LCDICovXG4gICAgICBjYj86IChpdGVtOiBhbnksIHBhcmVudDogYW55LCBkZWVwOiBudW1iZXIpID0+IHZvaWQ7XG4gICAgfSxcbiAgKTogYW55W10ge1xuICAgIG9wdGlvbnMgPSB7XG4gICAgICBkZWVwTWFwTmFtZTogdGhpcy5jLmRlZXBNYXBOYW1lLFxuICAgICAgcGFyZW50TWFwTmFtZTogdGhpcy5jLnBhcmVudE1hcE5hbWUsXG4gICAgICBjaGlsZHJlbk1hcE5hbWU6IHRoaXMuYy5jaGlsZHJlbk1hcE5hbWUsXG4gICAgICBjbGVhckNoaWxkcmVuOiB0cnVlLFxuICAgICAgY2I6IG51bGwsXG4gICAgICAuLi5vcHRpb25zLFxuICAgIH07XG4gICAgY29uc3QgcmVzdWx0OiBhbnlbXSA9IFtdO1xuICAgIGNvbnN0IGluRm4gPSAobGlzdDogYW55W10sIHBhcmVudDogYW55LCBkZWVwOiBudW1iZXIpID0+IHtcbiAgICAgIGZvciAoY29uc3QgaSBvZiBsaXN0KSB7XG4gICAgICAgIGlbb3B0aW9ucy5kZWVwTWFwTmFtZV0gPSBkZWVwO1xuICAgICAgICBpW29wdGlvbnMucGFyZW50TWFwTmFtZV0gPSBwYXJlbnQ7XG4gICAgICAgIGlmIChvcHRpb25zLmNiKSB7XG4gICAgICAgICAgb3B0aW9ucy5jYihpLCBwYXJlbnQsIGRlZXApO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5wdXNoKGkpO1xuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IGlbb3B0aW9ucy5jaGlsZHJlbk1hcE5hbWVdO1xuICAgICAgICBpZiAoY2hpbGRyZW4gIT0gbnVsbCAmJiBBcnJheS5pc0FycmF5KGNoaWxkcmVuKSAmJiBjaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaW5GbihjaGlsZHJlbiwgaSwgZGVlcCArIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmNsZWFyQ2hpbGRyZW4pIHtcbiAgICAgICAgICBkZWxldGUgaVtvcHRpb25zLmNoaWxkcmVuTWFwTmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIGluRm4odHJlZSwgMSwgbnVsbCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiDmlbDnu4TovazmjaLmiJDmoJHmlbDmja5cbiAgICovXG4gIGFyclRvVHJlZShcbiAgICBhcnI6IGFueVtdLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKiog57yW5Y+36aG55ZCN77yM6buY6K6k77yaYCdpZCdgICovXG4gICAgICBpZE1hcE5hbWU/OiBzdHJpbmc7XG4gICAgICAvKiog54i257yW5Y+36aG55ZCN77yM6buY6K6k77yaYCdwYXJlbnRfaWQnYCAqL1xuICAgICAgcGFyZW50SWRNYXBOYW1lPzogc3RyaW5nO1xuICAgICAgLyoqIOWtkOmhueWQje+8jOm7mOiupO+8mmAnY2hpbGRyZW4nYCAqL1xuICAgICAgY2hpbGRyZW5NYXBOYW1lPzogc3RyaW5nO1xuICAgICAgLyoqIOi9rOaNouaIkOagkeaVsOaNruaXtuWbnuiwgyAqL1xuICAgICAgY2I/OiAoaXRlbTogYW55KSA9PiB2b2lkO1xuICAgIH0sXG4gICk6IGFueVtdIHtcbiAgICBvcHRpb25zID0ge1xuICAgICAgaWRNYXBOYW1lOiB0aGlzLmMuaWRNYXBOYW1lLFxuICAgICAgcGFyZW50SWRNYXBOYW1lOiB0aGlzLmMucGFyZW50SWRNYXBOYW1lLFxuICAgICAgY2hpbGRyZW5NYXBOYW1lOiB0aGlzLmMuY2hpbGRyZW5NYXBOYW1lLFxuICAgICAgY2I6IG51bGwsXG4gICAgICAuLi5vcHRpb25zLFxuICAgIH07XG4gICAgY29uc3QgdHJlZTogYW55W10gPSBbXTtcbiAgICBjb25zdCBjaGlsZHJlbk9mID0ge307XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGFycikge1xuICAgICAgY29uc3QgaWQgPSBpdGVtW29wdGlvbnMuaWRNYXBOYW1lXTtcbiAgICAgIGNvbnN0IHBpZCA9IGl0ZW1bb3B0aW9ucy5wYXJlbnRJZE1hcE5hbWVdO1xuICAgICAgY2hpbGRyZW5PZltpZF0gPSBjaGlsZHJlbk9mW2lkXSB8fCBbXTtcbiAgICAgIGl0ZW1bb3B0aW9ucy5jaGlsZHJlbk1hcE5hbWVdID0gY2hpbGRyZW5PZltpZF07XG4gICAgICBpZiAob3B0aW9ucy5jYikge1xuICAgICAgICBvcHRpb25zLmNiKGl0ZW0pO1xuICAgICAgfVxuICAgICAgaWYgKHBpZCkge1xuICAgICAgICBjaGlsZHJlbk9mW3BpZF0gPSBjaGlsZHJlbk9mW3BpZF0gfHwgW107XG4gICAgICAgIGNoaWxkcmVuT2ZbcGlkXS5wdXNoKGl0ZW0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJlZS5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJlZTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmlbDnu4TovazmjaLmiJAgYG56LXRyZWVgIOaVsOaNrua6kO+8jOmAmui/hyBgb3B0aW9uc2Ag6L2s5YyW6aG55ZCN77yM5Lmf5Y+v5Lul5L2/55SoIGBvcHRpb25zLmNiYCDmm7Tpq5jnuqflhrPlrprmlbDmja7poblcbiAgICovXG4gIGFyclRvVHJlZU5vZGUoXG4gICAgYXJyOiBhbnlbXSxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqIOe8luWPt+mhueWQje+8jOm7mOiupO+8mmAnaWQnYCAqL1xuICAgICAgaWRNYXBOYW1lPzogc3RyaW5nO1xuICAgICAgLyoqIOeItue8luWPt+mhueWQje+8jOm7mOiupO+8mmAncGFyZW50X2lkJ2AgKi9cbiAgICAgIHBhcmVudElkTWFwTmFtZT86IHN0cmluZztcbiAgICAgIC8qKiDmoIfpopjpobnlkI3vvIzpu5jorqTvvJpgJ3RpdGxlJ2AgKi9cbiAgICAgIHRpdGxlTWFwTmFtZT86IHN0cmluZztcbiAgICAgIC8qKiDorr7nva7kuLrlj7blrZDoioLngrnpobnlkI3vvIzoi6XmlbDmja7mupDkuI3lrZjlnKjml7boh6rliqjmoLnmja4gYGNoaWxkcmVuYCDlgLzlhrPlrprmmK/lkKbkuLrlj7blrZDoioLngrnvvIzpu5jorqTvvJpgJ2lzTGVhZidgICovXG4gICAgICBpc0xlYWZNYXBOYW1lPzogc3RyaW5nO1xuICAgICAgLyoqIOiKgueCuSBDaGVja2JveCDmmK/lkKbpgInkuK3pobnlkI3vvIzpu5jorqTvvJpgJ2NoZWNrZWQnYCAqL1xuICAgICAgY2hlY2tlZE1hcG5hbWU/OiBzdHJpbmc7XG4gICAgICAvKiog6IqC54K55pys6Lqr5piv5ZCm6YCJ5Lit6aG55ZCN77yM6buY6K6k77yaYCdzZWxlY3RlZCdgICovXG4gICAgICBzZWxlY3RlZE1hcG5hbWU/OiBzdHJpbmc7XG4gICAgICAvKiog6IqC54K55piv5ZCm5bGV5byAKOWPtuWtkOiKgueCueaXoOaViCnpobnlkI3vvIzpu5jorqTvvJpgJ2V4cGFuZGVkJ2AgKi9cbiAgICAgIGV4cGFuZGVkTWFwbmFtZT86IHN0cmluZztcbiAgICAgIC8qKiDorr7nva7mmK/lkKbnpoHnlKjoioLngrko5LiN5Y+v6L+b6KGM5Lu75L2V5pON5L2cKemhueWQje+8jOm7mOiupO+8mmAnZGlzYWJsZWQnYCAqL1xuICAgICAgZGlzYWJsZWRNYXBuYW1lPzogc3RyaW5nO1xuICAgICAgLyoqIOi9rOaNouaIkOagkeaVsOaNruWQju+8jOaJp+ihjOeahOmAkuW9kuWbnuiwgyAqL1xuICAgICAgY2I/OiAoaXRlbTogYW55LCBwYXJlbnQ6IGFueSwgZGVlcDogbnVtYmVyKSA9PiB2b2lkO1xuICAgIH0sXG4gICk6IGFueVtdIHtcbiAgICBvcHRpb25zID0ge1xuICAgICAgaWRNYXBOYW1lOiB0aGlzLmMuaWRNYXBOYW1lLFxuICAgICAgcGFyZW50SWRNYXBOYW1lOiB0aGlzLmMucGFyZW50SWRNYXBOYW1lLFxuICAgICAgdGl0bGVNYXBOYW1lOiB0aGlzLmMudGl0bGVNYXBOYW1lLFxuICAgICAgaXNMZWFmTWFwTmFtZTogJ2lzTGVhZicsXG4gICAgICBjaGVja2VkTWFwbmFtZTogdGhpcy5jLmNoZWNrZWRNYXBuYW1lLFxuICAgICAgc2VsZWN0ZWRNYXBuYW1lOiB0aGlzLmMuc2VsZWN0ZWRNYXBuYW1lLFxuICAgICAgZXhwYW5kZWRNYXBuYW1lOiB0aGlzLmMuZXhwYW5kZWRNYXBuYW1lLFxuICAgICAgZGlzYWJsZWRNYXBuYW1lOiB0aGlzLmMuZGlzYWJsZWRNYXBuYW1lLFxuICAgICAgY2I6IG51bGwsXG4gICAgICAuLi5vcHRpb25zLFxuICAgIH07XG4gICAgY29uc3QgdHJlZSA9IHRoaXMuYXJyVG9UcmVlKGFyciwge1xuICAgICAgaWRNYXBOYW1lOiBvcHRpb25zLmlkTWFwTmFtZSxcbiAgICAgIHBhcmVudElkTWFwTmFtZTogb3B0aW9ucy5wYXJlbnRJZE1hcE5hbWUsXG4gICAgICBjaGlsZHJlbk1hcE5hbWU6ICdjaGlsZHJlbicsXG4gICAgfSk7XG4gICAgdGhpcy52aXNpdFRyZWUodHJlZSwgKGl0ZW06IGFueSwgcGFyZW50OiBhbnksIGRlZXA6IG51bWJlcikgPT4ge1xuICAgICAgaXRlbS5rZXkgPSBpdGVtW29wdGlvbnMuaWRNYXBOYW1lXTtcbiAgICAgIGl0ZW0udGl0bGUgPSBpdGVtW29wdGlvbnMudGl0bGVNYXBOYW1lXTtcbiAgICAgIGl0ZW0uY2hlY2tlZCA9IGl0ZW1bb3B0aW9ucy5jaGVja2VkTWFwbmFtZV07XG4gICAgICBpdGVtLnNlbGVjdGVkID0gaXRlbVtvcHRpb25zLnNlbGVjdGVkTWFwbmFtZV07XG4gICAgICBpdGVtLmV4cGFuZGVkID0gaXRlbVtvcHRpb25zLmV4cGFuZGVkTWFwbmFtZV07XG4gICAgICBpdGVtLmRpc2FibGVkID0gaXRlbVtvcHRpb25zLmRpc2FibGVkTWFwbmFtZV07XG4gICAgICBpZiAoaXRlbVtvcHRpb25zLmlzTGVhZk1hcE5hbWVdID09IG51bGwpIHtcbiAgICAgICAgaXRlbS5pc0xlYWYgPSBpdGVtLmNoaWxkcmVuLmxlbmd0aCA9PT0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGl0ZW0uaXNMZWFmID0gaXRlbVtvcHRpb25zLmlzTGVhZk1hcE5hbWVdO1xuICAgICAgfVxuICAgICAgaWYgKG9wdGlvbnMuY2IpIHtcbiAgICAgICAgb3B0aW9ucy5jYihpdGVtLCBwYXJlbnQsIGRlZXApO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB0cmVlO1xuICB9XG5cbiAgLyoqXG4gICAqIOmAkuW9kuiuv+mXruaVtOS4quagkVxuICAgKi9cbiAgdmlzaXRUcmVlKFxuICAgIHRyZWU6IGFueVtdLFxuICAgIGNiOiAoaXRlbTogYW55LCBwYXJlbnQ6IGFueSwgZGVlcDogbnVtYmVyKSA9PiB2b2lkLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKiog5a2Q6aG55ZCN77yM6buY6K6k77yaYCdjaGlsZHJlbidgICovXG4gICAgICBjaGlsZHJlbk1hcE5hbWU/OiBzdHJpbmc7XG4gICAgfSxcbiAgKTogdm9pZCB7XG4gICAgb3B0aW9ucyA9IHtcbiAgICAgIGNoaWxkcmVuTWFwTmFtZTogdGhpcy5jLmNoaWxkcmVuTWFwTmFtZSxcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgfTtcbiAgICBjb25zdCBpbkZuID0gKGRhdGE6IGFueVtdLCBwYXJlbnQ6IGFueSwgZGVlcDogbnVtYmVyKSA9PiB7XG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZGF0YSkge1xuICAgICAgICBjYihpdGVtLCBwYXJlbnQsIGRlZXApO1xuICAgICAgICBjb25zdCBjaGlsZHJlblZhbCA9IGl0ZW1bb3B0aW9ucy5jaGlsZHJlbk1hcE5hbWVdO1xuICAgICAgICBpZiAoY2hpbGRyZW5WYWwgJiYgY2hpbGRyZW5WYWwubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGluRm4oY2hpbGRyZW5WYWwsIGl0ZW0sIGRlZXAgKyAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgaW5Gbih0cmVlLCBudWxsLCAxKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDojrflj5bmiYDmnInlt7Lnu4/pgInkuK3nmoQgYGtleWAg5YC8XG4gICAqL1xuICBnZXRLZXlzQnlUcmVlTm9kZShcbiAgICB0cmVlOiBOelRyZWVOb2RlW10sXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKiDmmK/lkKbljIXlkKvljYrpgInnirbmgIHnmoTlgLzvvIzpu5jorqTvvJpgdHJ1ZWAgKi9cbiAgICAgIGluY2x1ZGVIYWxmQ2hlY2tlZD86IGJvb2xlYW47XG4gICAgICAvKiog5piv5ZCm6YeN5paw5oyH5a6aIGBrZXlgIOmUruWQje+8jOiLpeS4jeaMh+WumuihqOekuuS9v+eUqCBgTnpUcmVlTm9kZS5rZXlgIOWAvCAqL1xuICAgICAga2V5TWFwTmFtZT86IHN0cmluZztcbiAgICAgIC8qKiDlm57osIPvvIzov5Tlm57kuIDkuKrlgLwgYGtleWAg5YC877yM5LyY5YWI57qn6auY5LqO5YW25LuWICovXG4gICAgICBjYj86IChpdGVtOiBOelRyZWVOb2RlLCBwYXJlbnQ6IE56VHJlZU5vZGUsIGRlZXA6IG51bWJlcikgPT4gYW55O1xuICAgIH0sXG4gICk6IGFueVtdIHtcbiAgICBvcHRpb25zID0ge1xuICAgICAgaW5jbHVkZUhhbGZDaGVja2VkOiB0cnVlLFxuICAgICAgLi4ub3B0aW9ucyxcbiAgICB9O1xuICAgIGNvbnN0IGtleXM6IGFueVtdID0gW107XG4gICAgdGhpcy52aXNpdFRyZWUodHJlZSwgKGl0ZW06IE56VHJlZU5vZGUsIHBhcmVudDogTnpUcmVlTm9kZSwgZGVlcDogbnVtYmVyKSA9PiB7XG4gICAgICBpZiAoaXRlbS5pc0NoZWNrZWQgfHwgKG9wdGlvbnMuaW5jbHVkZUhhbGZDaGVja2VkICYmIGl0ZW0uaXNIYWxmQ2hlY2tlZCkpIHtcbiAgICAgICAga2V5cy5wdXNoKFxuICAgICAgICAgIG9wdGlvbnMuY2JcbiAgICAgICAgICAgID8gb3B0aW9ucy5jYihpdGVtLCBwYXJlbnQsIGRlZXApXG4gICAgICAgICAgICA6IG9wdGlvbnMua2V5TWFwTmFtZVxuICAgICAgICAgICAgPyBpdGVtLm9yaWdpbltvcHRpb25zLmtleU1hcE5hbWVdXG4gICAgICAgICAgICA6IGl0ZW0ua2V5LFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBrZXlzO1xuICB9XG59XG4iXX0=