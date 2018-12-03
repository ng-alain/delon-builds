/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { NzTreeNode } from 'ng-zorro-antd';
import { DelonUtilConfig } from '../util.config';
import * as i0 from "@angular/core";
import * as i1 from "../util.config";
var ArrayService = /** @class */ (function () {
    function ArrayService(cog) {
        this.c = Object.assign((/** @type {?} */ ({
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
        })), cog && cog.array);
    }
    /**
     * 将树结构转换成数组结构
     */
    /**
     * 将树结构转换成数组结构
     * @param {?} tree
     * @param {?=} options
     * @return {?}
     */
    ArrayService.prototype.treeToArr = /**
     * 将树结构转换成数组结构
     * @param {?} tree
     * @param {?=} options
     * @return {?}
     */
    function (tree, options) {
        options = Object.assign({
            deepMapName: this.c.deepMapName,
            parentMapName: this.c.parentMapName,
            childrenMapName: this.c.childrenMapName,
            clearChildren: true,
            cb: null,
        }, options);
        /** @type {?} */
        var result = [];
        /** @type {?} */
        var inFn = function (list, parent, deep) {
            var e_1, _a;
            try {
                for (var list_1 = tslib_1.__values(list), list_1_1 = list_1.next(); !list_1_1.done; list_1_1 = list_1.next()) {
                    var i = list_1_1.value;
                    i[options.deepMapName] = deep;
                    i[options.parentMapName] = parent;
                    if (options.cb)
                        options.cb(i, parent, deep);
                    result.push(i);
                    /** @type {?} */
                    var children = i[options.childrenMapName];
                    if (children != null &&
                        Array.isArray(children) &&
                        children.length > 0) {
                        inFn(children, i, deep + 1);
                    }
                    if (options.clearChildren)
                        delete i[options.childrenMapName];
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (list_1_1 && !list_1_1.done && (_a = list_1.return)) _a.call(list_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        inFn(tree, 1, null);
        return result;
    };
    /**
     * 数组转换成树数据
     */
    /**
     * 数组转换成树数据
     * @param {?} arr
     * @param {?=} options
     * @return {?}
     */
    ArrayService.prototype.arrToTree = /**
     * 数组转换成树数据
     * @param {?} arr
     * @param {?=} options
     * @return {?}
     */
    function (arr, options) {
        var e_2, _a;
        options = Object.assign({
            idMapName: this.c.idMapName,
            parentIdMapName: this.c.parentIdMapName,
            childrenMapName: this.c.childrenMapName,
            cb: null,
        }, options);
        /** @type {?} */
        var tree = [];
        /** @type {?} */
        var childrenOf = {};
        try {
            for (var arr_1 = tslib_1.__values(arr), arr_1_1 = arr_1.next(); !arr_1_1.done; arr_1_1 = arr_1.next()) {
                var item = arr_1_1.value;
                /** @type {?} */
                var id = item[options.idMapName];
                /** @type {?} */
                var pid = item[options.parentIdMapName];
                childrenOf[id] = childrenOf[id] || [];
                item[options.childrenMapName] = childrenOf[id];
                if (options.cb)
                    options.cb(item);
                if (pid) {
                    childrenOf[pid] = childrenOf[pid] || [];
                    childrenOf[pid].push(item);
                }
                else {
                    tree.push(item);
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (arr_1_1 && !arr_1_1.done && (_a = arr_1.return)) _a.call(arr_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return tree;
    };
    /**
     * 数组转换成 `nz-tree` 数据源，通过 `options` 转化项名，也可以使用 `options.cb` 更高级决定数据项
     */
    /**
     * 数组转换成 `nz-tree` 数据源，通过 `options` 转化项名，也可以使用 `options.cb` 更高级决定数据项
     * @param {?} arr
     * @param {?=} options
     * @return {?}
     */
    ArrayService.prototype.arrToTreeNode = /**
     * 数组转换成 `nz-tree` 数据源，通过 `options` 转化项名，也可以使用 `options.cb` 更高级决定数据项
     * @param {?} arr
     * @param {?=} options
     * @return {?}
     */
    function (arr, options) {
        options = Object.assign({
            expanded: false,
            idMapName: this.c.idMapName,
            parentIdMapName: this.c.parentIdMapName,
            titleMapName: this.c.titleMapName,
            isLeafMapName: 'isLeaf',
            checkedMapname: this.c.checkedMapname,
            selectedMapname: this.c.selectedMapname,
            expandedMapname: this.c.expandedMapname,
            disabledMapname: this.c.disabledMapname,
            cb: null,
        }, options);
        /** @type {?} */
        var tree = this.arrToTree(arr, {
            idMapName: options.idMapName,
            parentIdMapName: options.parentIdMapName,
            childrenMapName: 'children',
        });
        this.visitTree(tree, function (item, parent, deep) {
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
            if (options.cb)
                options.cb(item, parent, deep);
        });
        return tree.map(function (node) { return new NzTreeNode(node); });
    };
    /**
     * 递归访问整个树
     */
    /**
     * 递归访问整个树
     * @param {?} tree
     * @param {?} cb
     * @param {?=} options
     * @return {?}
     */
    ArrayService.prototype.visitTree = /**
     * 递归访问整个树
     * @param {?} tree
     * @param {?} cb
     * @param {?=} options
     * @return {?}
     */
    function (tree, cb, options) {
        options = Object.assign({
            childrenMapName: this.c.childrenMapName,
        }, options);
        /** @type {?} */
        var inFn = function (data, parent, deep) {
            var e_3, _a;
            try {
                for (var data_1 = tslib_1.__values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
                    var item = data_1_1.value;
                    cb(item, parent, deep);
                    /** @type {?} */
                    var childrenVal = item[options.childrenMapName];
                    if (childrenVal && childrenVal.length > 0) {
                        inFn(childrenVal, item, deep + 1);
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (data_1_1 && !data_1_1.done && (_a = data_1.return)) _a.call(data_1);
                }
                finally { if (e_3) throw e_3.error; }
            }
        };
        inFn(tree, null, 1);
    };
    /**
     * 获取所有已经选中的 `key` 值
     */
    /**
     * 获取所有已经选中的 `key` 值
     * @param {?} tree
     * @param {?=} options
     * @return {?}
     */
    ArrayService.prototype.getKeysByTreeNode = /**
     * 获取所有已经选中的 `key` 值
     * @param {?} tree
     * @param {?=} options
     * @return {?}
     */
    function (tree, options) {
        options = Object.assign({
            includeHalfChecked: true,
        }, options);
        /** @type {?} */
        var keys = [];
        this.visitTree(tree, function (item, parent, deep) {
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
    };
    ArrayService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ArrayService.ctorParameters = function () { return [
        { type: DelonUtilConfig }
    ]; };
    /** @nocollapse */ ArrayService.ngInjectableDef = i0.defineInjectable({ factory: function ArrayService_Factory() { return new ArrayService(i0.inject(i1.DelonUtilConfig)); }, token: ArrayService, providedIn: "root" });
    return ArrayService;
}());
export { ArrayService };
if (false) {
    /** @type {?} */
    ArrayService.prototype.c;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi91dGlsLyIsInNvdXJjZXMiOlsic3JjL2FycmF5L2FycmF5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFHakQ7SUFHRSxzQkFBWSxHQUFvQjtRQUM5QixJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQ3BCLG1CQUFhO1lBQ1gsV0FBVyxFQUFFLE1BQU07WUFDbkIsYUFBYSxFQUFFLFFBQVE7WUFDdkIsU0FBUyxFQUFFLElBQUk7WUFDZixlQUFlLEVBQUUsV0FBVztZQUM1QixlQUFlLEVBQUUsVUFBVTtZQUMzQixZQUFZLEVBQUUsT0FBTztZQUNyQixjQUFjLEVBQUUsU0FBUztZQUN6QixlQUFlLEVBQUUsVUFBVTtZQUMzQixlQUFlLEVBQUUsVUFBVTtZQUMzQixlQUFlLEVBQUUsVUFBVTtTQUM1QixFQUFBLEVBQ0QsR0FBRyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQ2pCLENBQUM7SUFDSixDQUFDO0lBQ0Q7O09BRUc7Ozs7Ozs7SUFDSCxnQ0FBUzs7Ozs7O0lBQVQsVUFDRSxJQUFXLEVBQ1gsT0FXQztRQUVELE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUNyQjtZQUNFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQVc7WUFDL0IsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsYUFBYTtZQUNuQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxlQUFlO1lBQ3ZDLGFBQWEsRUFBRSxJQUFJO1lBQ25CLEVBQUUsRUFBRSxJQUFJO1NBQ1QsRUFDRCxPQUFPLENBQ1IsQ0FBQzs7WUFD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cnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOelRyZWVOb2RlIH0gZnJvbSAnbmctem9ycm8tYW50ZCc7XG5pbXBvcnQgeyBEZWxvblV0aWxDb25maWcgfSBmcm9tICcuLi91dGlsLmNvbmZpZyc7XG5pbXBvcnQgeyBBcnJheUNvbmZpZyB9IGZyb20gJy4vYXJyYXkuY29uZmlnJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBBcnJheVNlcnZpY2Uge1xuICBwcml2YXRlIGM6IEFycmF5Q29uZmlnO1xuICBjb25zdHJ1Y3Rvcihjb2c6IERlbG9uVXRpbENvbmZpZykge1xuICAgIHRoaXMuYyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICA8QXJyYXlDb25maWc+e1xuICAgICAgICBkZWVwTWFwTmFtZTogJ2RlZXAnLFxuICAgICAgICBwYXJlbnRNYXBOYW1lOiAncGFyZW50JyxcbiAgICAgICAgaWRNYXBOYW1lOiAnaWQnLFxuICAgICAgICBwYXJlbnRJZE1hcE5hbWU6ICdwYXJlbnRfaWQnLFxuICAgICAgICBjaGlsZHJlbk1hcE5hbWU6ICdjaGlsZHJlbicsXG4gICAgICAgIHRpdGxlTWFwTmFtZTogJ3RpdGxlJyxcbiAgICAgICAgY2hlY2tlZE1hcG5hbWU6ICdjaGVja2VkJyxcbiAgICAgICAgc2VsZWN0ZWRNYXBuYW1lOiAnc2VsZWN0ZWQnLFxuICAgICAgICBleHBhbmRlZE1hcG5hbWU6ICdleHBhbmRlZCcsXG4gICAgICAgIGRpc2FibGVkTWFwbmFtZTogJ2Rpc2FibGVkJyxcbiAgICAgIH0sXG4gICAgICBjb2cgJiYgY29nLmFycmF5LFxuICAgICk7XG4gIH1cbiAgLyoqXG4gICAqIOWwhuagkee7k+aehOi9rOaNouaIkOaVsOe7hOe7k+aehFxuICAgKi9cbiAgdHJlZVRvQXJyKFxuICAgIHRyZWU6IGFueVtdLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKiog5rex5bqm6aG55ZCN77yM6buY6K6k77yaYCdkZWVwJ2AgKi9cbiAgICAgIGRlZXBNYXBOYW1lPzogc3RyaW5nO1xuICAgICAgLyoqIOaJgeW5s+WQjuaVsOe7hOeahOeItuaVsOaNrumhueWQje+8jOm7mOiupO+8mmAncGFyZW50J2AgKi9cbiAgICAgIHBhcmVudE1hcE5hbWU/OiBzdHJpbmc7XG4gICAgICAvKiog5rqQ5pWw5o2u5a2Q6aG55ZCN77yM6buY6K6k77yaYCdjaGlsZHJlbidgICovXG4gICAgICBjaGlsZHJlbk1hcE5hbWU/OiBzdHJpbmc7XG4gICAgICAvKiog5piv5ZCm56e76ZmkIGBjaGlsZHJlbmAg6IqC54K577yM6buY6K6k77yaYHRydWVgICovXG4gICAgICBjbGVhckNoaWxkcmVuPzogYm9vbGVhbjtcbiAgICAgIC8qKiDovazmjaLmiJDmlbDnu4Tnu5PmnoTml7blm57osIMgKi9cbiAgICAgIGNiPzogKGl0ZW06IGFueSwgcGFyZW50OiBhbnksIGRlZXA6IG51bWJlcikgPT4gdm9pZDtcbiAgICB9LFxuICApOiBhbnlbXSB7XG4gICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7XG4gICAgICAgIGRlZXBNYXBOYW1lOiB0aGlzLmMuZGVlcE1hcE5hbWUsXG4gICAgICAgIHBhcmVudE1hcE5hbWU6IHRoaXMuYy5wYXJlbnRNYXBOYW1lLFxuICAgICAgICBjaGlsZHJlbk1hcE5hbWU6IHRoaXMuYy5jaGlsZHJlbk1hcE5hbWUsXG4gICAgICAgIGNsZWFyQ2hpbGRyZW46IHRydWUsXG4gICAgICAgIGNiOiBudWxsLFxuICAgICAgfSxcbiAgICAgIG9wdGlvbnMsXG4gICAgKTtcbiAgICBjb25zdCByZXN1bHQ6IGFueVtdID0gW107XG4gICAgY29uc3QgaW5GbiA9IChsaXN0OiBhbnlbXSwgcGFyZW50OiBhbnksIGRlZXA6IG51bWJlcikgPT4ge1xuICAgICAgZm9yIChjb25zdCBpIG9mIGxpc3QpIHtcbiAgICAgICAgaVtvcHRpb25zLmRlZXBNYXBOYW1lXSA9IGRlZXA7XG4gICAgICAgIGlbb3B0aW9ucy5wYXJlbnRNYXBOYW1lXSA9IHBhcmVudDtcbiAgICAgICAgaWYgKG9wdGlvbnMuY2IpIG9wdGlvbnMuY2IoaSwgcGFyZW50LCBkZWVwKTtcbiAgICAgICAgcmVzdWx0LnB1c2goaSk7XG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gaVtvcHRpb25zLmNoaWxkcmVuTWFwTmFtZV07XG4gICAgICAgIGlmIChcbiAgICAgICAgICBjaGlsZHJlbiAhPSBudWxsICYmXG4gICAgICAgICAgQXJyYXkuaXNBcnJheShjaGlsZHJlbikgJiZcbiAgICAgICAgICBjaGlsZHJlbi5sZW5ndGggPiAwXG4gICAgICAgICkge1xuICAgICAgICAgIGluRm4oY2hpbGRyZW4sIGksIGRlZXAgKyAxKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5jbGVhckNoaWxkcmVuKSBkZWxldGUgaVtvcHRpb25zLmNoaWxkcmVuTWFwTmFtZV07XG4gICAgICB9XG4gICAgfTtcbiAgICBpbkZuKHRyZWUsIDEsIG51bGwpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICog5pWw57uE6L2s5o2i5oiQ5qCR5pWw5o2uXG4gICAqL1xuICBhcnJUb1RyZWUoXG4gICAgYXJyOiBhbnlbXSxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqIOe8luWPt+mhueWQje+8jOm7mOiupO+8mmAnaWQnYCAqL1xuICAgICAgaWRNYXBOYW1lPzogc3RyaW5nO1xuICAgICAgLyoqIOeItue8luWPt+mhueWQje+8jOm7mOiupO+8mmAncGFyZW50X2lkJ2AgKi9cbiAgICAgIHBhcmVudElkTWFwTmFtZT86IHN0cmluZztcbiAgICAgIC8qKiDlrZDpobnlkI3vvIzpu5jorqTvvJpgJ2NoaWxkcmVuJ2AgKi9cbiAgICAgIGNoaWxkcmVuTWFwTmFtZT86IHN0cmluZztcbiAgICAgIC8qKiDovazmjaLmiJDmoJHmlbDmja7ml7blm57osIMgKi9cbiAgICAgIGNiPzogKGl0ZW06IGFueSkgPT4gdm9pZDtcbiAgICB9LFxuICApOiBhbnlbXSB7XG4gICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7XG4gICAgICAgIGlkTWFwTmFtZTogdGhpcy5jLmlkTWFwTmFtZSxcbiAgICAgICAgcGFyZW50SWRNYXBOYW1lOiB0aGlzLmMucGFyZW50SWRNYXBOYW1lLFxuICAgICAgICBjaGlsZHJlbk1hcE5hbWU6IHRoaXMuYy5jaGlsZHJlbk1hcE5hbWUsXG4gICAgICAgIGNiOiBudWxsLFxuICAgICAgfSxcbiAgICAgIG9wdGlvbnMsXG4gICAgKTtcbiAgICBjb25zdCB0cmVlOiBhbnlbXSA9IFtdO1xuICAgIGNvbnN0IGNoaWxkcmVuT2YgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgYXJyKSB7XG4gICAgICBjb25zdCBpZCA9IGl0ZW1bb3B0aW9ucy5pZE1hcE5hbWVdLFxuICAgICAgICBwaWQgPSBpdGVtW29wdGlvbnMucGFyZW50SWRNYXBOYW1lXTtcbiAgICAgIGNoaWxkcmVuT2ZbaWRdID0gY2hpbGRyZW5PZltpZF0gfHwgW107XG4gICAgICBpdGVtW29wdGlvbnMuY2hpbGRyZW5NYXBOYW1lXSA9IGNoaWxkcmVuT2ZbaWRdO1xuICAgICAgaWYgKG9wdGlvbnMuY2IpIG9wdGlvbnMuY2IoaXRlbSk7XG4gICAgICBpZiAocGlkKSB7XG4gICAgICAgIGNoaWxkcmVuT2ZbcGlkXSA9IGNoaWxkcmVuT2ZbcGlkXSB8fCBbXTtcbiAgICAgICAgY2hpbGRyZW5PZltwaWRdLnB1c2goaXRlbSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cmVlLnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cmVlO1xuICB9XG5cbiAgLyoqXG4gICAqIOaVsOe7hOi9rOaNouaIkCBgbnotdHJlZWAg5pWw5o2u5rqQ77yM6YCa6L+HIGBvcHRpb25zYCDovazljJbpobnlkI3vvIzkuZ/lj6/ku6Xkvb/nlKggYG9wdGlvbnMuY2JgIOabtOmrmOe6p+WGs+WumuaVsOaNrumhuVxuICAgKi9cbiAgYXJyVG9UcmVlTm9kZShcbiAgICBhcnI6IGFueVtdLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKiog57yW5Y+36aG55ZCN77yM6buY6K6k77yaYCdpZCdgICovXG4gICAgICBpZE1hcE5hbWU/OiBzdHJpbmc7XG4gICAgICAvKiog54i257yW5Y+36aG55ZCN77yM6buY6K6k77yaYCdwYXJlbnRfaWQnYCAqL1xuICAgICAgcGFyZW50SWRNYXBOYW1lPzogc3RyaW5nO1xuICAgICAgLyoqIOagh+mimOmhueWQje+8jOm7mOiupO+8mmAndGl0bGUnYCAqL1xuICAgICAgdGl0bGVNYXBOYW1lPzogc3RyaW5nO1xuICAgICAgLyoqIOiuvue9ruS4uuWPtuWtkOiKgueCuemhueWQje+8jOiLpeaVsOaNrua6kOS4jeWtmOWcqOaXtuiHquWKqOagueaNriBgY2hpbGRyZW5gIOWAvOWGs+WumuaYr+WQpuS4uuWPtuWtkOiKgueCue+8jOm7mOiupO+8mmAnaXNMZWFmJ2AgKi9cbiAgICAgIGlzTGVhZk1hcE5hbWU/OiBzdHJpbmc7XG4gICAgICAvKiog6IqC54K5IENoZWNrYm94IOaYr+WQpumAieS4remhueWQje+8jOm7mOiupO+8mmAnY2hlY2tlZCdgICovXG4gICAgICBjaGVja2VkTWFwbmFtZT86IHN0cmluZztcbiAgICAgIC8qKiDoioLngrnmnKzouqvmmK/lkKbpgInkuK3pobnlkI3vvIzpu5jorqTvvJpgJ3NlbGVjdGVkJ2AgKi9cbiAgICAgIHNlbGVjdGVkTWFwbmFtZT86IHN0cmluZztcbiAgICAgIC8qKiDoioLngrnmmK/lkKblsZXlvIAo5Y+25a2Q6IqC54K55peg5pWIKemhueWQje+8jOm7mOiupO+8mmAnZXhwYW5kZWQnYCAqL1xuICAgICAgZXhwYW5kZWRNYXBuYW1lPzogc3RyaW5nO1xuICAgICAgLyoqIOiuvue9ruaYr+WQpuemgeeUqOiKgueCuSjkuI3lj6/ov5vooYzku7vkvZXmk43kvZwp6aG55ZCN77yM6buY6K6k77yaYCdkaXNhYmxlZCdgICovXG4gICAgICBkaXNhYmxlZE1hcG5hbWU/OiBzdHJpbmc7XG4gICAgICAvKiog6L2s5o2i5oiQ5qCR5pWw5o2u5ZCO77yM5omn6KGM55qE6YCS5b2S5Zue6LCDICovXG4gICAgICBjYj86IChpdGVtOiBhbnksIHBhcmVudDogYW55LCBkZWVwOiBudW1iZXIpID0+IHZvaWQ7XG4gICAgfSxcbiAgKTogTnpUcmVlTm9kZVtdIHtcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHtcbiAgICAgICAgZXhwYW5kZWQ6IGZhbHNlLFxuICAgICAgICBpZE1hcE5hbWU6IHRoaXMuYy5pZE1hcE5hbWUsXG4gICAgICAgIHBhcmVudElkTWFwTmFtZTogdGhpcy5jLnBhcmVudElkTWFwTmFtZSxcbiAgICAgICAgdGl0bGVNYXBOYW1lOiB0aGlzLmMudGl0bGVNYXBOYW1lLFxuICAgICAgICBpc0xlYWZNYXBOYW1lOiAnaXNMZWFmJyxcbiAgICAgICAgY2hlY2tlZE1hcG5hbWU6IHRoaXMuYy5jaGVja2VkTWFwbmFtZSxcbiAgICAgICAgc2VsZWN0ZWRNYXBuYW1lOiB0aGlzLmMuc2VsZWN0ZWRNYXBuYW1lLFxuICAgICAgICBleHBhbmRlZE1hcG5hbWU6IHRoaXMuYy5leHBhbmRlZE1hcG5hbWUsXG4gICAgICAgIGRpc2FibGVkTWFwbmFtZTogdGhpcy5jLmRpc2FibGVkTWFwbmFtZSxcbiAgICAgICAgY2I6IG51bGwsXG4gICAgICB9LFxuICAgICAgb3B0aW9ucyxcbiAgICApO1xuICAgIGNvbnN0IHRyZWUgPSB0aGlzLmFyclRvVHJlZShhcnIsIHtcbiAgICAgIGlkTWFwTmFtZTogb3B0aW9ucy5pZE1hcE5hbWUsXG4gICAgICBwYXJlbnRJZE1hcE5hbWU6IG9wdGlvbnMucGFyZW50SWRNYXBOYW1lLFxuICAgICAgY2hpbGRyZW5NYXBOYW1lOiAnY2hpbGRyZW4nLFxuICAgIH0pO1xuICAgIHRoaXMudmlzaXRUcmVlKHRyZWUsIChpdGVtOiBhbnksIHBhcmVudDogYW55LCBkZWVwOiBudW1iZXIpID0+IHtcbiAgICAgIGl0ZW0ua2V5ID0gaXRlbVtvcHRpb25zLmlkTWFwTmFtZV07XG4gICAgICBpdGVtLnRpdGxlID0gaXRlbVtvcHRpb25zLnRpdGxlTWFwTmFtZV07XG4gICAgICBpdGVtLmNoZWNrZWQgPSBpdGVtW29wdGlvbnMuY2hlY2tlZE1hcG5hbWVdO1xuICAgICAgaXRlbS5zZWxlY3RlZCA9IGl0ZW1bb3B0aW9ucy5zZWxlY3RlZE1hcG5hbWVdO1xuICAgICAgaXRlbS5leHBhbmRlZCA9IGl0ZW1bb3B0aW9ucy5leHBhbmRlZE1hcG5hbWVdO1xuICAgICAgaXRlbS5kaXNhYmxlZCA9IGl0ZW1bb3B0aW9ucy5kaXNhYmxlZE1hcG5hbWVdO1xuICAgICAgaWYgKGl0ZW1bb3B0aW9ucy5pc0xlYWZNYXBOYW1lXSA9PSBudWxsKSB7XG4gICAgICAgIGl0ZW0uaXNMZWFmID0gaXRlbS5jaGlsZHJlbi5sZW5ndGggPT09IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpdGVtLmlzTGVhZiA9IGl0ZW1bb3B0aW9ucy5pc0xlYWZNYXBOYW1lXTtcbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25zLmNiKSBvcHRpb25zLmNiKGl0ZW0sIHBhcmVudCwgZGVlcCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRyZWUubWFwKG5vZGUgPT4gbmV3IE56VHJlZU5vZGUobm9kZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIOmAkuW9kuiuv+mXruaVtOS4quagkVxuICAgKi9cbiAgdmlzaXRUcmVlKFxuICAgIHRyZWU6IGFueVtdLFxuICAgIGNiOiAoaXRlbTogYW55LCBwYXJlbnQ6IGFueSwgZGVlcDogbnVtYmVyKSA9PiB2b2lkLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKiog5a2Q6aG55ZCN77yM6buY6K6k77yaYCdjaGlsZHJlbidgICovXG4gICAgICBjaGlsZHJlbk1hcE5hbWU/OiBzdHJpbmc7XG4gICAgfSxcbiAgKSB7XG4gICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7XG4gICAgICAgIGNoaWxkcmVuTWFwTmFtZTogdGhpcy5jLmNoaWxkcmVuTWFwTmFtZSxcbiAgICAgIH0sXG4gICAgICBvcHRpb25zLFxuICAgICk7XG4gICAgY29uc3QgaW5GbiA9IChkYXRhOiBhbnlbXSwgcGFyZW50OiBhbnksIGRlZXA6IG51bWJlcikgPT4ge1xuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgY2IoaXRlbSwgcGFyZW50LCBkZWVwKTtcbiAgICAgICAgY29uc3QgY2hpbGRyZW5WYWwgPSBpdGVtW29wdGlvbnMuY2hpbGRyZW5NYXBOYW1lXTtcbiAgICAgICAgaWYgKGNoaWxkcmVuVmFsICYmIGNoaWxkcmVuVmFsLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpbkZuKGNoaWxkcmVuVmFsLCBpdGVtLCBkZWVwICsgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIGluRm4odHJlZSwgbnVsbCwgMSk7XG4gIH1cblxuICAvKipcbiAgICog6I635Y+W5omA5pyJ5bey57uP6YCJ5Lit55qEIGBrZXlgIOWAvFxuICAgKi9cbiAgZ2V0S2V5c0J5VHJlZU5vZGUoXG4gICAgdHJlZTogTnpUcmVlTm9kZVtdLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKiog5piv5ZCm5YyF5ZCr5Y2K6YCJ54q25oCB55qE5YC877yM6buY6K6k77yaYHRydWVgICovXG4gICAgICBpbmNsdWRlSGFsZkNoZWNrZWQ/OiBib29sZWFuO1xuICAgICAgLyoqIOaYr+WQpumHjeaWsOaMh+WumiBga2V5YCDplK7lkI3vvIzoi6XkuI3mjIflrprooajnpLrkvb/nlKggYE56VHJlZU5vZGUua2V5YCDlgLwgKi9cbiAgICAgIGtleU1hcE5hbWU/OiBzdHJpbmc7XG4gICAgICAvKiog5Zue6LCD77yM6L+U5Zue5LiA5Liq5YC8IGBrZXlgIOWAvO+8jOS8mOWFiOe6p+mrmOS6juWFtuS7liAqL1xuICAgICAgY2I/OiAoaXRlbTogTnpUcmVlTm9kZSwgcGFyZW50OiBOelRyZWVOb2RlLCBkZWVwOiBudW1iZXIpID0+IGFueTtcbiAgICB9LFxuICApOiBhbnlbXSB7XG4gICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7XG4gICAgICAgIGluY2x1ZGVIYWxmQ2hlY2tlZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBvcHRpb25zLFxuICAgICk7XG4gICAgY29uc3Qga2V5czogYW55W10gPSBbXTtcbiAgICB0aGlzLnZpc2l0VHJlZShcbiAgICAgIHRyZWUsXG4gICAgICAoaXRlbTogTnpUcmVlTm9kZSwgcGFyZW50OiBOelRyZWVOb2RlLCBkZWVwOiBudW1iZXIpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGl0ZW0uaXNDaGVja2VkIHx8XG4gICAgICAgICAgKG9wdGlvbnMuaW5jbHVkZUhhbGZDaGVja2VkICYmIGl0ZW0uaXNIYWxmQ2hlY2tlZClcbiAgICAgICAgKSB7XG4gICAgICAgICAga2V5cy5wdXNoKFxuICAgICAgICAgICAgb3B0aW9ucy5jYlxuICAgICAgICAgICAgICA/IG9wdGlvbnMuY2IoaXRlbSwgcGFyZW50LCBkZWVwKVxuICAgICAgICAgICAgICA6IG9wdGlvbnMua2V5TWFwTmFtZVxuICAgICAgICAgICAgICAgID8gaXRlbS5vcmlnaW5bb3B0aW9ucy5rZXlNYXBOYW1lXVxuICAgICAgICAgICAgICAgIDogaXRlbS5rZXksXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICApO1xuICAgIHJldHVybiBrZXlzO1xuICB9XG59XG4iXX0=