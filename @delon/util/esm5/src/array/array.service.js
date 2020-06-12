/**
 * @fileoverview added by tsickle
 * Generated from: src/array/array.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __assign, __values } from "tslib";
import { Injectable } from '@angular/core';
import { NzTreeNode } from 'ng-zorro-antd/core/tree';
import { AlainConfigService } from '../config';
import * as i0 from "@angular/core";
import * as i1 from "../config/index";
/**
 * @record
 */
export function ArrayServiceTreeToArrOptions() { }
if (false) {
    /**
     * 深度项名，默认：`'deep'`
     * @type {?|undefined}
     */
    ArrayServiceTreeToArrOptions.prototype.deepMapName;
    /**
     * 扁平后数组的父数据项名，默认：`'parent'`
     * @type {?|undefined}
     */
    ArrayServiceTreeToArrOptions.prototype.parentMapName;
    /**
     * 源数据子项名，默认：`'children'`
     * @type {?|undefined}
     */
    ArrayServiceTreeToArrOptions.prototype.childrenMapName;
    /**
     * 是否移除 `children` 节点，默认：`true`
     * @type {?|undefined}
     */
    ArrayServiceTreeToArrOptions.prototype.clearChildren;
    /**
     * 转换成数组结构时回调
     * @type {?|undefined}
     */
    ArrayServiceTreeToArrOptions.prototype.cb;
}
/**
 * @record
 */
export function ArrayServiceArrToTreeOptions() { }
if (false) {
    /**
     * 编号项名，默认：`'id'`
     * @type {?|undefined}
     */
    ArrayServiceArrToTreeOptions.prototype.idMapName;
    /**
     * 父编号项名，默认：`'parent_id'`
     * @type {?|undefined}
     */
    ArrayServiceArrToTreeOptions.prototype.parentIdMapName;
    /**
     * 子项名，默认：`'children'`
     * @type {?|undefined}
     */
    ArrayServiceArrToTreeOptions.prototype.childrenMapName;
    /**
     * 转换成树数据时回调
     * @type {?|undefined}
     */
    ArrayServiceArrToTreeOptions.prototype.cb;
}
/**
 * @record
 */
export function ArrayServiceArrToTreeNodeOptions() { }
if (false) {
    /**
     * 编号项名，默认：`'id'`
     * @type {?|undefined}
     */
    ArrayServiceArrToTreeNodeOptions.prototype.idMapName;
    /**
     * 父编号项名，默认：`'parent_id'`
     * @type {?|undefined}
     */
    ArrayServiceArrToTreeNodeOptions.prototype.parentIdMapName;
    /**
     * 标题项名，默认：`'title'`
     * @type {?|undefined}
     */
    ArrayServiceArrToTreeNodeOptions.prototype.titleMapName;
    /**
     * 设置为叶子节点项名，若数据源不存在时自动根据 `children` 值决定是否为叶子节点，默认：`'isLeaf'`
     * @type {?|undefined}
     */
    ArrayServiceArrToTreeNodeOptions.prototype.isLeafMapName;
    /**
     * 节点 Checkbox 是否选中项名，默认：`'checked'`
     * @type {?|undefined}
     */
    ArrayServiceArrToTreeNodeOptions.prototype.checkedMapname;
    /**
     * 节点本身是否选中项名，默认：`'selected'`
     * @type {?|undefined}
     */
    ArrayServiceArrToTreeNodeOptions.prototype.selectedMapname;
    /**
     * 节点是否展开(叶子节点无效)项名，默认：`'expanded'`
     * @type {?|undefined}
     */
    ArrayServiceArrToTreeNodeOptions.prototype.expandedMapname;
    /**
     * 设置是否禁用节点(不可进行任何操作)项名，默认：`'disabled'`
     * @type {?|undefined}
     */
    ArrayServiceArrToTreeNodeOptions.prototype.disabledMapname;
    /**
     * 转换成树数据后，执行的递归回调
     * @type {?|undefined}
     */
    ArrayServiceArrToTreeNodeOptions.prototype.cb;
}
/**
 * @record
 */
export function ArrayServiceGetKeysByTreeNodeOptions() { }
if (false) {
    /**
     * 是否包含半选状态的值，默认：`true`
     * @type {?|undefined}
     */
    ArrayServiceGetKeysByTreeNodeOptions.prototype.includeHalfChecked;
    /**
     * 是否重新指定 `key` 键名，若不指定表示使用 `NzTreeNode.key` 值
     * @type {?|undefined}
     */
    ArrayServiceGetKeysByTreeNodeOptions.prototype.keyMapName;
    /**
     * 回调，返回一个值 `key` 值，优先级高于其他
     * @type {?|undefined}
     */
    ArrayServiceGetKeysByTreeNodeOptions.prototype.cb;
}
var ArrayService = /** @class */ (function () {
    function ArrayService(cog) {
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
        /** @type {?} */
        var opt = (/** @type {?} */ (__assign({ deepMapName: this.c.deepMapName, parentMapName: this.c.parentMapName, childrenMapName: this.c.childrenMapName, clearChildren: true, cb: null }, options)));
        /** @type {?} */
        var result = [];
        /** @type {?} */
        var inFn = (/**
         * @param {?} list
         * @param {?} parent
         * @param {?=} deep
         * @return {?}
         */
        function (list, parent, deep) {
            var e_1, _a;
            if (deep === void 0) { deep = 0; }
            try {
                for (var list_1 = __values(list), list_1_1 = list_1.next(); !list_1_1.done; list_1_1 = list_1.next()) {
                    var i = list_1_1.value;
                    i[(/** @type {?} */ (opt.deepMapName))] = deep;
                    i[(/** @type {?} */ (opt.parentMapName))] = parent;
                    if (opt.cb) {
                        opt.cb(i, parent, deep);
                    }
                    result.push(i);
                    /** @type {?} */
                    var children = i[(/** @type {?} */ (opt.childrenMapName))];
                    if (children != null && Array.isArray(children) && children.length > 0) {
                        inFn(children, i, deep + 1);
                    }
                    if (opt.clearChildren) {
                        delete i[(/** @type {?} */ (opt.childrenMapName))];
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (list_1_1 && !list_1_1.done && (_a = list_1.return)) _a.call(list_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        });
        inFn(tree, 1);
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
        /** @type {?} */
        var opt = (/** @type {?} */ (__assign({ idMapName: this.c.idMapName, parentIdMapName: this.c.parentIdMapName, childrenMapName: this.c.childrenMapName, cb: null }, options)));
        /** @type {?} */
        var tree = [];
        /** @type {?} */
        var childrenOf = {};
        try {
            for (var arr_1 = __values(arr), arr_1_1 = arr_1.next(); !arr_1_1.done; arr_1_1 = arr_1.next()) {
                var item = arr_1_1.value;
                /** @type {?} */
                var id = item[(/** @type {?} */ (opt.idMapName))];
                /** @type {?} */
                var pid = item[(/** @type {?} */ (opt.parentIdMapName))];
                childrenOf[id] = childrenOf[id] || [];
                item[(/** @type {?} */ (opt.childrenMapName))] = childrenOf[id];
                if (opt.cb) {
                    opt.cb(item);
                }
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
        /** @type {?} */
        var opt = (/** @type {?} */ (__assign({ idMapName: this.c.idMapName, parentIdMapName: this.c.parentIdMapName, titleMapName: this.c.titleMapName, isLeafMapName: 'isLeaf', checkedMapname: this.c.checkedMapname, selectedMapname: this.c.selectedMapname, expandedMapname: this.c.expandedMapname, disabledMapname: this.c.disabledMapname, cb: null }, options)));
        /** @type {?} */
        var tree = this.arrToTree(arr, {
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
        function (item, parent, deep) {
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
        function (node) { return new NzTreeNode(node); }));
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
        options = __assign({ childrenMapName: this.c.childrenMapName }, options);
        /** @type {?} */
        var inFn = (/**
         * @param {?} data
         * @param {?} parent
         * @param {?} deep
         * @return {?}
         */
        function (data, parent, deep) {
            var e_3, _a;
            try {
                for (var data_1 = __values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
                    var item = data_1_1.value;
                    cb(item, parent, deep);
                    /** @type {?} */
                    var childrenVal = item[(/** @type {?} */ ((/** @type {?} */ (options)).childrenMapName))];
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
        });
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
        /** @type {?} */
        var opt = (/** @type {?} */ (__assign({ includeHalfChecked: true }, options)));
        /** @type {?} */
        var keys = [];
        this.visitTree(tree, (/**
         * @param {?} item
         * @param {?} parent
         * @param {?} deep
         * @return {?}
         */
        function (item, parent, deep) {
            if (item.isChecked || (opt.includeHalfChecked && item.isHalfChecked)) {
                keys.push(opt.cb ? opt.cb(item, parent, deep) : opt.keyMapName ? item.origin[opt.keyMapName] : item.key);
            }
        }));
        return keys;
    };
    ArrayService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ArrayService.ctorParameters = function () { return [
        { type: AlainConfigService }
    ]; };
    /** @nocollapse */ ArrayService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ArrayService_Factory() { return new ArrayService(i0.ɵɵinject(i1.AlainConfigService)); }, token: ArrayService, providedIn: "root" });
    return ArrayService;
}());
export { ArrayService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ArrayService.prototype.c;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi91dGlsLyIsInNvdXJjZXMiOlsic3JjL2FycmF5L2FycmF5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFckQsT0FBTyxFQUFFLGtCQUFrQixFQUF3QixNQUFNLFdBQVcsQ0FBQzs7Ozs7O0FBRXJFLGtEQVdDOzs7Ozs7SUFUQyxtREFBcUI7Ozs7O0lBRXJCLHFEQUF1Qjs7Ozs7SUFFdkIsdURBQXlCOzs7OztJQUV6QixxREFBd0I7Ozs7O0lBRXhCLDBDQUFnRTs7Ozs7QUFHbEUsa0RBU0M7Ozs7OztJQVBDLGlEQUFtQjs7Ozs7SUFFbkIsdURBQXlCOzs7OztJQUV6Qix1REFBeUI7Ozs7O0lBRXpCLDBDQUErQjs7Ozs7QUFHakMsc0RBbUJDOzs7Ozs7SUFqQkMscURBQW1COzs7OztJQUVuQiwyREFBeUI7Ozs7O0lBRXpCLHdEQUFzQjs7Ozs7SUFFdEIseURBQXVCOzs7OztJQUV2QiwwREFBd0I7Ozs7O0lBRXhCLDJEQUF5Qjs7Ozs7SUFFekIsMkRBQXlCOzs7OztJQUV6QiwyREFBeUI7Ozs7O0lBRXpCLDhDQUFnRTs7Ozs7QUFHbEUsMERBT0M7Ozs7OztJQUxDLGtFQUE2Qjs7Ozs7SUFFN0IsMERBQW9COzs7OztJQUVwQixrREFBdUU7O0FBR3pFO0lBR0Usc0JBQVksR0FBdUI7UUFDakMsSUFBSSxDQUFDLENBQUMsR0FBRyxtQkFBQSxHQUFHLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRTtZQUM5QixXQUFXLEVBQUUsTUFBTTtZQUNuQixhQUFhLEVBQUUsUUFBUTtZQUN2QixTQUFTLEVBQUUsSUFBSTtZQUNmLGVBQWUsRUFBRSxXQUFXO1lBQzVCLGVBQWUsRUFBRSxVQUFVO1lBQzNCLFlBQVksRUFBRSxP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QixFQUFFLE1BQWtCLEVBQUUsSUFBWTtZQUN0RSxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxHQUFHLENBQUMsa0JBQWtCLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFO2dCQUNwRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUMxRztRQUNILENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOztnQkFwS0YsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztnQkF4RHpCLGtCQUFrQjs7O3VCQUgzQjtDQWdPQyxBQXJLRCxJQXFLQztTQXBLWSxZQUFZOzs7Ozs7SUFDdkIseUJBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpUcmVlTm9kZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90cmVlJztcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBBbGFpbkNvbmZpZ1NlcnZpY2UsIEFsYWluVXRpbEFycmF5Q29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJztcblxuZXhwb3J0IGludGVyZmFjZSBBcnJheVNlcnZpY2VUcmVlVG9BcnJPcHRpb25zIHtcbiAgLyoqIOa3seW6pumhueWQje+8jOm7mOiupO+8mmAnZGVlcCdgICovXG4gIGRlZXBNYXBOYW1lPzogc3RyaW5nO1xuICAvKiog5omB5bmz5ZCO5pWw57uE55qE54i25pWw5o2u6aG55ZCN77yM6buY6K6k77yaYCdwYXJlbnQnYCAqL1xuICBwYXJlbnRNYXBOYW1lPzogc3RyaW5nO1xuICAvKiog5rqQ5pWw5o2u5a2Q6aG55ZCN77yM6buY6K6k77yaYCdjaGlsZHJlbidgICovXG4gIGNoaWxkcmVuTWFwTmFtZT86IHN0cmluZztcbiAgLyoqIOaYr+WQpuenu+mZpCBgY2hpbGRyZW5gIOiKgueCue+8jOm7mOiupO+8mmB0cnVlYCAqL1xuICBjbGVhckNoaWxkcmVuPzogYm9vbGVhbjtcbiAgLyoqIOi9rOaNouaIkOaVsOe7hOe7k+aehOaXtuWbnuiwgyAqL1xuICBjYj86IChpdGVtOiBOelNhZmVBbnksIHBhcmVudDogTnpTYWZlQW55LCBkZWVwOiBudW1iZXIpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXJyYXlTZXJ2aWNlQXJyVG9UcmVlT3B0aW9ucyB7XG4gIC8qKiDnvJblj7fpobnlkI3vvIzpu5jorqTvvJpgJ2lkJ2AgKi9cbiAgaWRNYXBOYW1lPzogc3RyaW5nO1xuICAvKiog54i257yW5Y+36aG55ZCN77yM6buY6K6k77yaYCdwYXJlbnRfaWQnYCAqL1xuICBwYXJlbnRJZE1hcE5hbWU/OiBzdHJpbmc7XG4gIC8qKiDlrZDpobnlkI3vvIzpu5jorqTvvJpgJ2NoaWxkcmVuJ2AgKi9cbiAgY2hpbGRyZW5NYXBOYW1lPzogc3RyaW5nO1xuICAvKiog6L2s5o2i5oiQ5qCR5pWw5o2u5pe25Zue6LCDICovXG4gIGNiPzogKGl0ZW06IE56U2FmZUFueSkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcnJheVNlcnZpY2VBcnJUb1RyZWVOb2RlT3B0aW9ucyB7XG4gIC8qKiDnvJblj7fpobnlkI3vvIzpu5jorqTvvJpgJ2lkJ2AgKi9cbiAgaWRNYXBOYW1lPzogc3RyaW5nO1xuICAvKiog54i257yW5Y+36aG55ZCN77yM6buY6K6k77yaYCdwYXJlbnRfaWQnYCAqL1xuICBwYXJlbnRJZE1hcE5hbWU/OiBzdHJpbmc7XG4gIC8qKiDmoIfpopjpobnlkI3vvIzpu5jorqTvvJpgJ3RpdGxlJ2AgKi9cbiAgdGl0bGVNYXBOYW1lPzogc3RyaW5nO1xuICAvKiog6K6+572u5Li65Y+25a2Q6IqC54K56aG55ZCN77yM6Iul5pWw5o2u5rqQ5LiN5a2Y5Zyo5pe26Ieq5Yqo5qC55o2uIGBjaGlsZHJlbmAg5YC85Yaz5a6a5piv5ZCm5Li65Y+25a2Q6IqC54K577yM6buY6K6k77yaYCdpc0xlYWYnYCAqL1xuICBpc0xlYWZNYXBOYW1lPzogc3RyaW5nO1xuICAvKiog6IqC54K5IENoZWNrYm94IOaYr+WQpumAieS4remhueWQje+8jOm7mOiupO+8mmAnY2hlY2tlZCdgICovXG4gIGNoZWNrZWRNYXBuYW1lPzogc3RyaW5nO1xuICAvKiog6IqC54K55pys6Lqr5piv5ZCm6YCJ5Lit6aG55ZCN77yM6buY6K6k77yaYCdzZWxlY3RlZCdgICovXG4gIHNlbGVjdGVkTWFwbmFtZT86IHN0cmluZztcbiAgLyoqIOiKgueCueaYr+WQpuWxleW8gCjlj7blrZDoioLngrnml6DmlYgp6aG55ZCN77yM6buY6K6k77yaYCdleHBhbmRlZCdgICovXG4gIGV4cGFuZGVkTWFwbmFtZT86IHN0cmluZztcbiAgLyoqIOiuvue9ruaYr+WQpuemgeeUqOiKgueCuSjkuI3lj6/ov5vooYzku7vkvZXmk43kvZwp6aG55ZCN77yM6buY6K6k77yaYCdkaXNhYmxlZCdgICovXG4gIGRpc2FibGVkTWFwbmFtZT86IHN0cmluZztcbiAgLyoqIOi9rOaNouaIkOagkeaVsOaNruWQju+8jOaJp+ihjOeahOmAkuW9kuWbnuiwgyAqL1xuICBjYj86IChpdGVtOiBOelNhZmVBbnksIHBhcmVudDogTnpTYWZlQW55LCBkZWVwOiBudW1iZXIpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXJyYXlTZXJ2aWNlR2V0S2V5c0J5VHJlZU5vZGVPcHRpb25zIHtcbiAgLyoqIOaYr+WQpuWMheWQq+WNiumAieeKtuaAgeeahOWAvO+8jOm7mOiupO+8mmB0cnVlYCAqL1xuICBpbmNsdWRlSGFsZkNoZWNrZWQ/OiBib29sZWFuO1xuICAvKiog5piv5ZCm6YeN5paw5oyH5a6aIGBrZXlgIOmUruWQje+8jOiLpeS4jeaMh+WumuihqOekuuS9v+eUqCBgTnpUcmVlTm9kZS5rZXlgIOWAvCAqL1xuICBrZXlNYXBOYW1lPzogc3RyaW5nO1xuICAvKiog5Zue6LCD77yM6L+U5Zue5LiA5Liq5YC8IGBrZXlgIOWAvO+8jOS8mOWFiOe6p+mrmOS6juWFtuS7liAqL1xuICBjYj86IChpdGVtOiBOelRyZWVOb2RlLCBwYXJlbnQ6IE56VHJlZU5vZGUsIGRlZXA6IG51bWJlcikgPT4gTnpTYWZlQW55O1xufVxuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEFycmF5U2VydmljZSB7XG4gIHByaXZhdGUgYzogQWxhaW5VdGlsQXJyYXlDb25maWc7XG4gIGNvbnN0cnVjdG9yKGNvZzogQWxhaW5Db25maWdTZXJ2aWNlKSB7XG4gICAgdGhpcy5jID0gY29nLm1lcmdlKCd1dGlsQXJyYXknLCB7XG4gICAgICBkZWVwTWFwTmFtZTogJ2RlZXAnLFxuICAgICAgcGFyZW50TWFwTmFtZTogJ3BhcmVudCcsXG4gICAgICBpZE1hcE5hbWU6ICdpZCcsXG4gICAgICBwYXJlbnRJZE1hcE5hbWU6ICdwYXJlbnRfaWQnLFxuICAgICAgY2hpbGRyZW5NYXBOYW1lOiAnY2hpbGRyZW4nLFxuICAgICAgdGl0bGVNYXBOYW1lOiAndGl0bGUnLFxuICAgICAgY2hlY2tlZE1hcG5hbWU6ICdjaGVja2VkJyxcbiAgICAgIHNlbGVjdGVkTWFwbmFtZTogJ3NlbGVjdGVkJyxcbiAgICAgIGV4cGFuZGVkTWFwbmFtZTogJ2V4cGFuZGVkJyxcbiAgICAgIGRpc2FibGVkTWFwbmFtZTogJ2Rpc2FibGVkJyxcbiAgICB9KSE7XG4gIH1cbiAgLyoqXG4gICAqIOWwhuagkee7k+aehOi9rOaNouaIkOaVsOe7hOe7k+aehFxuICAgKi9cbiAgdHJlZVRvQXJyKHRyZWU6IE56U2FmZUFueVtdLCBvcHRpb25zPzogQXJyYXlTZXJ2aWNlVHJlZVRvQXJyT3B0aW9ucyk6IE56U2FmZUFueVtdIHtcbiAgICBjb25zdCBvcHQgPSB7XG4gICAgICBkZWVwTWFwTmFtZTogdGhpcy5jLmRlZXBNYXBOYW1lLFxuICAgICAgcGFyZW50TWFwTmFtZTogdGhpcy5jLnBhcmVudE1hcE5hbWUsXG4gICAgICBjaGlsZHJlbk1hcE5hbWU6IHRoaXMuYy5jaGlsZHJlbk1hcE5hbWUsXG4gICAgICBjbGVhckNoaWxkcmVuOiB0cnVlLFxuICAgICAgY2I6IG51bGwsXG4gICAgICAuLi5vcHRpb25zLFxuICAgIH0gYXMgQXJyYXlTZXJ2aWNlVHJlZVRvQXJyT3B0aW9ucztcbiAgICBjb25zdCByZXN1bHQ6IE56U2FmZUFueVtdID0gW107XG4gICAgY29uc3QgaW5GbiA9IChsaXN0OiBOelNhZmVBbnlbXSwgcGFyZW50OiBOelNhZmVBbnksIGRlZXA6IG51bWJlciA9IDApID0+IHtcbiAgICAgIGZvciAoY29uc3QgaSBvZiBsaXN0KSB7XG4gICAgICAgIGlbb3B0LmRlZXBNYXBOYW1lIV0gPSBkZWVwO1xuICAgICAgICBpW29wdC5wYXJlbnRNYXBOYW1lIV0gPSBwYXJlbnQ7XG4gICAgICAgIGlmIChvcHQuY2IpIHtcbiAgICAgICAgICBvcHQuY2IoaSwgcGFyZW50LCBkZWVwKTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQucHVzaChpKTtcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBpW29wdC5jaGlsZHJlbk1hcE5hbWUhXTtcbiAgICAgICAgaWYgKGNoaWxkcmVuICE9IG51bGwgJiYgQXJyYXkuaXNBcnJheShjaGlsZHJlbikgJiYgY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGluRm4oY2hpbGRyZW4sIGksIGRlZXAgKyAxKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0LmNsZWFyQ2hpbGRyZW4pIHtcbiAgICAgICAgICBkZWxldGUgaVtvcHQuY2hpbGRyZW5NYXBOYW1lIV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIGluRm4odHJlZSwgMSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiDmlbDnu4TovazmjaLmiJDmoJHmlbDmja5cbiAgICovXG4gIGFyclRvVHJlZShhcnI6IE56U2FmZUFueVtdLCBvcHRpb25zPzogQXJyYXlTZXJ2aWNlQXJyVG9UcmVlT3B0aW9ucyk6IE56U2FmZUFueVtdIHtcbiAgICBjb25zdCBvcHQgPSB7XG4gICAgICBpZE1hcE5hbWU6IHRoaXMuYy5pZE1hcE5hbWUsXG4gICAgICBwYXJlbnRJZE1hcE5hbWU6IHRoaXMuYy5wYXJlbnRJZE1hcE5hbWUsXG4gICAgICBjaGlsZHJlbk1hcE5hbWU6IHRoaXMuYy5jaGlsZHJlbk1hcE5hbWUsXG4gICAgICBjYjogbnVsbCxcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgfSBhcyBBcnJheVNlcnZpY2VBcnJUb1RyZWVPcHRpb25zO1xuICAgIGNvbnN0IHRyZWU6IE56U2FmZUFueVtdID0gW107XG4gICAgY29uc3QgY2hpbGRyZW5PZjogTnpTYWZlQW55ID0ge307XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGFycikge1xuICAgICAgY29uc3QgaWQgPSBpdGVtW29wdC5pZE1hcE5hbWUhXTtcbiAgICAgIGNvbnN0IHBpZCA9IGl0ZW1bb3B0LnBhcmVudElkTWFwTmFtZSFdO1xuICAgICAgY2hpbGRyZW5PZltpZF0gPSBjaGlsZHJlbk9mW2lkXSB8fCBbXTtcbiAgICAgIGl0ZW1bb3B0LmNoaWxkcmVuTWFwTmFtZSFdID0gY2hpbGRyZW5PZltpZF07XG4gICAgICBpZiAob3B0LmNiKSB7XG4gICAgICAgIG9wdC5jYihpdGVtKTtcbiAgICAgIH1cbiAgICAgIGlmIChwaWQpIHtcbiAgICAgICAgY2hpbGRyZW5PZltwaWRdID0gY2hpbGRyZW5PZltwaWRdIHx8IFtdO1xuICAgICAgICBjaGlsZHJlbk9mW3BpZF0ucHVzaChpdGVtKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyZWUucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRyZWU7XG4gIH1cblxuICAvKipcbiAgICog5pWw57uE6L2s5o2i5oiQIGBuei10cmVlYCDmlbDmja7mupDvvIzpgJrov4cgYG9wdGlvbnNgIOi9rOWMlumhueWQje+8jOS5n+WPr+S7peS9v+eUqCBgb3B0aW9ucy5jYmAg5pu06auY57qn5Yaz5a6a5pWw5o2u6aG5XG4gICAqL1xuICBhcnJUb1RyZWVOb2RlKGFycjogTnpTYWZlQW55W10sIG9wdGlvbnM/OiBBcnJheVNlcnZpY2VBcnJUb1RyZWVOb2RlT3B0aW9ucyk6IE56VHJlZU5vZGVbXSB7XG4gICAgY29uc3Qgb3B0ID0ge1xuICAgICAgaWRNYXBOYW1lOiB0aGlzLmMuaWRNYXBOYW1lLFxuICAgICAgcGFyZW50SWRNYXBOYW1lOiB0aGlzLmMucGFyZW50SWRNYXBOYW1lLFxuICAgICAgdGl0bGVNYXBOYW1lOiB0aGlzLmMudGl0bGVNYXBOYW1lLFxuICAgICAgaXNMZWFmTWFwTmFtZTogJ2lzTGVhZicsXG4gICAgICBjaGVja2VkTWFwbmFtZTogdGhpcy5jLmNoZWNrZWRNYXBuYW1lLFxuICAgICAgc2VsZWN0ZWRNYXBuYW1lOiB0aGlzLmMuc2VsZWN0ZWRNYXBuYW1lLFxuICAgICAgZXhwYW5kZWRNYXBuYW1lOiB0aGlzLmMuZXhwYW5kZWRNYXBuYW1lLFxuICAgICAgZGlzYWJsZWRNYXBuYW1lOiB0aGlzLmMuZGlzYWJsZWRNYXBuYW1lLFxuICAgICAgY2I6IG51bGwsXG4gICAgICAuLi5vcHRpb25zLFxuICAgIH0gYXMgQXJyYXlTZXJ2aWNlQXJyVG9UcmVlTm9kZU9wdGlvbnM7XG4gICAgY29uc3QgdHJlZSA9IHRoaXMuYXJyVG9UcmVlKGFyciwge1xuICAgICAgaWRNYXBOYW1lOiBvcHQuaWRNYXBOYW1lLFxuICAgICAgcGFyZW50SWRNYXBOYW1lOiBvcHQucGFyZW50SWRNYXBOYW1lLFxuICAgICAgY2hpbGRyZW5NYXBOYW1lOiAnY2hpbGRyZW4nLFxuICAgIH0pO1xuICAgIHRoaXMudmlzaXRUcmVlKHRyZWUsIChpdGVtOiBOelNhZmVBbnksIHBhcmVudDogTnpTYWZlQW55LCBkZWVwOiBudW1iZXIpID0+IHtcbiAgICAgIGl0ZW0ua2V5ID0gaXRlbVtvcHQuaWRNYXBOYW1lIV07XG4gICAgICBpdGVtLnRpdGxlID0gaXRlbVtvcHQudGl0bGVNYXBOYW1lIV07XG4gICAgICBpdGVtLmNoZWNrZWQgPSBpdGVtW29wdC5jaGVja2VkTWFwbmFtZSFdO1xuICAgICAgaXRlbS5zZWxlY3RlZCA9IGl0ZW1bb3B0LnNlbGVjdGVkTWFwbmFtZSFdO1xuICAgICAgaXRlbS5leHBhbmRlZCA9IGl0ZW1bb3B0LmV4cGFuZGVkTWFwbmFtZSFdO1xuICAgICAgaXRlbS5kaXNhYmxlZCA9IGl0ZW1bb3B0LmRpc2FibGVkTWFwbmFtZSFdO1xuICAgICAgaWYgKGl0ZW1bb3B0LmlzTGVhZk1hcE5hbWUhXSA9PSBudWxsKSB7XG4gICAgICAgIGl0ZW0uaXNMZWFmID0gaXRlbS5jaGlsZHJlbi5sZW5ndGggPT09IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpdGVtLmlzTGVhZiA9IGl0ZW1bb3B0LmlzTGVhZk1hcE5hbWUhXTtcbiAgICAgIH1cbiAgICAgIGlmIChvcHQuY2IpIHtcbiAgICAgICAgb3B0LmNiKGl0ZW0sIHBhcmVudCwgZGVlcCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHRyZWUubWFwKG5vZGUgPT4gbmV3IE56VHJlZU5vZGUobm9kZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIOmAkuW9kuiuv+mXruaVtOS4quagkVxuICAgKi9cbiAgdmlzaXRUcmVlKFxuICAgIHRyZWU6IE56U2FmZUFueVtdLFxuICAgIGNiOiAoaXRlbTogTnpTYWZlQW55LCBwYXJlbnQ6IE56U2FmZUFueSwgZGVlcDogbnVtYmVyKSA9PiB2b2lkLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKiog5a2Q6aG55ZCN77yM6buY6K6k77yaYCdjaGlsZHJlbidgICovXG4gICAgICBjaGlsZHJlbk1hcE5hbWU/OiBzdHJpbmc7XG4gICAgfSxcbiAgKTogdm9pZCB7XG4gICAgb3B0aW9ucyA9IHtcbiAgICAgIGNoaWxkcmVuTWFwTmFtZTogdGhpcy5jLmNoaWxkcmVuTWFwTmFtZSxcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgfTtcbiAgICBjb25zdCBpbkZuID0gKGRhdGE6IE56U2FmZUFueVtdLCBwYXJlbnQ6IE56U2FmZUFueSwgZGVlcDogbnVtYmVyKSA9PiB7XG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZGF0YSkge1xuICAgICAgICBjYihpdGVtLCBwYXJlbnQsIGRlZXApO1xuICAgICAgICBjb25zdCBjaGlsZHJlblZhbCA9IGl0ZW1bb3B0aW9ucyEuY2hpbGRyZW5NYXBOYW1lIV07XG4gICAgICAgIGlmIChjaGlsZHJlblZhbCAmJiBjaGlsZHJlblZhbC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaW5GbihjaGlsZHJlblZhbCwgaXRlbSwgZGVlcCArIDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBpbkZuKHRyZWUsIG51bGwsIDEpO1xuICB9XG5cbiAgLyoqXG4gICAqIOiOt+WPluaJgOacieW3sue7j+mAieS4reeahCBga2V5YCDlgLxcbiAgICovXG4gIGdldEtleXNCeVRyZWVOb2RlKHRyZWU6IE56VHJlZU5vZGVbXSwgb3B0aW9ucz86IEFycmF5U2VydmljZUdldEtleXNCeVRyZWVOb2RlT3B0aW9ucyk6IE56U2FmZUFueVtdIHtcbiAgICBjb25zdCBvcHQgPSB7XG4gICAgICBpbmNsdWRlSGFsZkNoZWNrZWQ6IHRydWUsXG4gICAgICAuLi5vcHRpb25zLFxuICAgIH0gYXMgQXJyYXlTZXJ2aWNlR2V0S2V5c0J5VHJlZU5vZGVPcHRpb25zO1xuICAgIGNvbnN0IGtleXM6IE56U2FmZUFueVtdID0gW107XG4gICAgdGhpcy52aXNpdFRyZWUodHJlZSwgKGl0ZW06IE56VHJlZU5vZGUsIHBhcmVudDogTnpUcmVlTm9kZSwgZGVlcDogbnVtYmVyKSA9PiB7XG4gICAgICBpZiAoaXRlbS5pc0NoZWNrZWQgfHwgKG9wdC5pbmNsdWRlSGFsZkNoZWNrZWQgJiYgaXRlbS5pc0hhbGZDaGVja2VkKSkge1xuICAgICAgICBrZXlzLnB1c2gob3B0LmNiID8gb3B0LmNiKGl0ZW0sIHBhcmVudCwgZGVlcCkgOiBvcHQua2V5TWFwTmFtZSA/IGl0ZW0ub3JpZ2luW29wdC5rZXlNYXBOYW1lXSA6IGl0ZW0ua2V5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4ga2V5cztcbiAgfVxufVxuIl19