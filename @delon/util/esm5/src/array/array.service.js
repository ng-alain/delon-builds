/**
 * @fileoverview added by tsickle
 * Generated from: src/array/array.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { NzTreeNode } from 'ng-zorro-antd/core';
import { DelonUtilConfig } from '../util.config';
import * as i0 from "@angular/core";
import * as i1 from "../util.config";
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
        this.c = tslib_1.__assign({ deepMapName: 'deep', parentMapName: 'parent', idMapName: 'id', parentIdMapName: 'parent_id', childrenMapName: 'children', titleMapName: 'title', checkedMapname: 'checked', selectedMapname: 'selected', expandedMapname: 'expanded', disabledMapname: 'disabled' }, (cog && cog.array));
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
        var opt = (/** @type {?} */ (tslib_1.__assign({ deepMapName: this.c.deepMapName, parentMapName: this.c.parentMapName, childrenMapName: this.c.childrenMapName, clearChildren: true, cb: null }, options)));
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
                for (var list_1 = tslib_1.__values(list), list_1_1 = list_1.next(); !list_1_1.done; list_1_1 = list_1.next()) {
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
        var opt = (/** @type {?} */ (tslib_1.__assign({ idMapName: this.c.idMapName, parentIdMapName: this.c.parentIdMapName, childrenMapName: this.c.childrenMapName, cb: null }, options)));
        /** @type {?} */
        var tree = [];
        /** @type {?} */
        var childrenOf = {};
        try {
            for (var arr_1 = tslib_1.__values(arr), arr_1_1 = arr_1.next(); !arr_1_1.done; arr_1_1 = arr_1.next()) {
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
        var opt = (/** @type {?} */ (tslib_1.__assign({ idMapName: this.c.idMapName, parentIdMapName: this.c.parentIdMapName, titleMapName: this.c.titleMapName, isLeafMapName: 'isLeaf', checkedMapname: this.c.checkedMapname, selectedMapname: this.c.selectedMapname, expandedMapname: this.c.expandedMapname, disabledMapname: this.c.disabledMapname, cb: null }, options)));
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
        options = tslib_1.__assign({ childrenMapName: this.c.childrenMapName }, options);
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
                for (var data_1 = tslib_1.__values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
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
        var opt = (/** @type {?} */ (tslib_1.__assign({ includeHalfChecked: true }, options)));
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
        { type: DelonUtilConfig }
    ]; };
    /** @nocollapse */ ArrayService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ArrayService_Factory() { return new ArrayService(i0.ɵɵinject(i1.DelonUtilConfig)); }, token: ArrayService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi91dGlsLyIsInNvdXJjZXMiOlsic3JjL2FycmF5L2FycmF5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDaEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7QUFHakQsa0RBV0M7Ozs7OztJQVRDLG1EQUFxQjs7Ozs7SUFFckIscURBQXVCOzs7OztJQUV2Qix1REFBeUI7Ozs7O0lBRXpCLHFEQUF3Qjs7Ozs7SUFFeEIsMENBQW9EOzs7OztBQUd0RCxrREFTQzs7Ozs7O0lBUEMsaURBQW1COzs7OztJQUVuQix1REFBeUI7Ozs7O0lBRXpCLHVEQUF5Qjs7Ozs7SUFFekIsMENBQXlCOzs7OztBQUczQixzREFtQkM7Ozs7OztJQWpCQyxxREFBbUI7Ozs7O0lBRW5CLDJEQUF5Qjs7Ozs7SUFFekIsd0RBQXNCOzs7OztJQUV0Qix5REFBdUI7Ozs7O0lBRXZCLDBEQUF3Qjs7Ozs7SUFFeEIsMkRBQXlCOzs7OztJQUV6QiwyREFBeUI7Ozs7O0lBRXpCLDJEQUF5Qjs7Ozs7SUFFekIsOENBQW9EOzs7OztBQUd0RCwwREFPQzs7Ozs7O0lBTEMsa0VBQTZCOzs7OztJQUU3QiwwREFBb0I7Ozs7O0lBRXBCLGtEQUFpRTs7QUFHbkU7SUFHRSxzQkFBWSxHQUFvQjtRQUM5QixJQUFJLENBQUMsQ0FBQyxzQkFDSixXQUFXLEVBQUUsTUFBTSxFQUNuQixhQUFhLEVBQUUsUUFBUSxFQUN2QixTQUFTLEVBQUUsSUFBSSxFQUNmLGVBQWUsRUFBRSxXQUFXLEVBQzVCLGVBQWUsRUFBRSxVQUFVLEVBQzNCLFlBQVksRUFBRSxPQUFPLEVBQ3JCLGNBQWMsRUFBRSxTQUFTLEVBQ3pCLGVBQWUsRUFBRSxV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QVk7WUFDdEUsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsR0FBRyxDQUFDLGtCQUFrQixJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRTtnQkFDcEUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDMUc7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUNILE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Z0JBcktGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7Z0JBekR6QixlQUFlOzs7dUJBRnhCO0NBaU9DLEFBdEtELElBc0tDO1NBcktZLFlBQVk7Ozs7OztJQUN2Qix5QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOelRyZWVOb2RlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcbmltcG9ydCB7IERlbG9uVXRpbENvbmZpZyB9IGZyb20gJy4uL3V0aWwuY29uZmlnJztcbmltcG9ydCB7IEFycmF5Q29uZmlnIH0gZnJvbSAnLi9hcnJheS5jb25maWcnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFycmF5U2VydmljZVRyZWVUb0Fyck9wdGlvbnMge1xuICAvKiog5rex5bqm6aG55ZCN77yM6buY6K6k77yaYCdkZWVwJ2AgKi9cbiAgZGVlcE1hcE5hbWU/OiBzdHJpbmc7XG4gIC8qKiDmiYHlubPlkI7mlbDnu4TnmoTniLbmlbDmja7pobnlkI3vvIzpu5jorqTvvJpgJ3BhcmVudCdgICovXG4gIHBhcmVudE1hcE5hbWU/OiBzdHJpbmc7XG4gIC8qKiDmupDmlbDmja7lrZDpobnlkI3vvIzpu5jorqTvvJpgJ2NoaWxkcmVuJ2AgKi9cbiAgY2hpbGRyZW5NYXBOYW1lPzogc3RyaW5nO1xuICAvKiog5piv5ZCm56e76ZmkIGBjaGlsZHJlbmAg6IqC54K577yM6buY6K6k77yaYHRydWVgICovXG4gIGNsZWFyQ2hpbGRyZW4/OiBib29sZWFuO1xuICAvKiog6L2s5o2i5oiQ5pWw57uE57uT5p6E5pe25Zue6LCDICovXG4gIGNiPzogKGl0ZW06IGFueSwgcGFyZW50OiBhbnksIGRlZXA6IG51bWJlcikgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcnJheVNlcnZpY2VBcnJUb1RyZWVPcHRpb25zIHtcbiAgLyoqIOe8luWPt+mhueWQje+8jOm7mOiupO+8mmAnaWQnYCAqL1xuICBpZE1hcE5hbWU/OiBzdHJpbmc7XG4gIC8qKiDniLbnvJblj7fpobnlkI3vvIzpu5jorqTvvJpgJ3BhcmVudF9pZCdgICovXG4gIHBhcmVudElkTWFwTmFtZT86IHN0cmluZztcbiAgLyoqIOWtkOmhueWQje+8jOm7mOiupO+8mmAnY2hpbGRyZW4nYCAqL1xuICBjaGlsZHJlbk1hcE5hbWU/OiBzdHJpbmc7XG4gIC8qKiDovazmjaLmiJDmoJHmlbDmja7ml7blm57osIMgKi9cbiAgY2I/OiAoaXRlbTogYW55KSA9PiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFycmF5U2VydmljZUFyclRvVHJlZU5vZGVPcHRpb25zIHtcbiAgLyoqIOe8luWPt+mhueWQje+8jOm7mOiupO+8mmAnaWQnYCAqL1xuICBpZE1hcE5hbWU/OiBzdHJpbmc7XG4gIC8qKiDniLbnvJblj7fpobnlkI3vvIzpu5jorqTvvJpgJ3BhcmVudF9pZCdgICovXG4gIHBhcmVudElkTWFwTmFtZT86IHN0cmluZztcbiAgLyoqIOagh+mimOmhueWQje+8jOm7mOiupO+8mmAndGl0bGUnYCAqL1xuICB0aXRsZU1hcE5hbWU/OiBzdHJpbmc7XG4gIC8qKiDorr7nva7kuLrlj7blrZDoioLngrnpobnlkI3vvIzoi6XmlbDmja7mupDkuI3lrZjlnKjml7boh6rliqjmoLnmja4gYGNoaWxkcmVuYCDlgLzlhrPlrprmmK/lkKbkuLrlj7blrZDoioLngrnvvIzpu5jorqTvvJpgJ2lzTGVhZidgICovXG4gIGlzTGVhZk1hcE5hbWU/OiBzdHJpbmc7XG4gIC8qKiDoioLngrkgQ2hlY2tib3gg5piv5ZCm6YCJ5Lit6aG55ZCN77yM6buY6K6k77yaYCdjaGVja2VkJ2AgKi9cbiAgY2hlY2tlZE1hcG5hbWU/OiBzdHJpbmc7XG4gIC8qKiDoioLngrnmnKzouqvmmK/lkKbpgInkuK3pobnlkI3vvIzpu5jorqTvvJpgJ3NlbGVjdGVkJ2AgKi9cbiAgc2VsZWN0ZWRNYXBuYW1lPzogc3RyaW5nO1xuICAvKiog6IqC54K55piv5ZCm5bGV5byAKOWPtuWtkOiKgueCueaXoOaViCnpobnlkI3vvIzpu5jorqTvvJpgJ2V4cGFuZGVkJ2AgKi9cbiAgZXhwYW5kZWRNYXBuYW1lPzogc3RyaW5nO1xuICAvKiog6K6+572u5piv5ZCm56aB55So6IqC54K5KOS4jeWPr+i/m+ihjOS7u+S9leaTjeS9nCnpobnlkI3vvIzpu5jorqTvvJpgJ2Rpc2FibGVkJ2AgKi9cbiAgZGlzYWJsZWRNYXBuYW1lPzogc3RyaW5nO1xuICAvKiog6L2s5o2i5oiQ5qCR5pWw5o2u5ZCO77yM5omn6KGM55qE6YCS5b2S5Zue6LCDICovXG4gIGNiPzogKGl0ZW06IGFueSwgcGFyZW50OiBhbnksIGRlZXA6IG51bWJlcikgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcnJheVNlcnZpY2VHZXRLZXlzQnlUcmVlTm9kZU9wdGlvbnMge1xuICAvKiog5piv5ZCm5YyF5ZCr5Y2K6YCJ54q25oCB55qE5YC877yM6buY6K6k77yaYHRydWVgICovXG4gIGluY2x1ZGVIYWxmQ2hlY2tlZD86IGJvb2xlYW47XG4gIC8qKiDmmK/lkKbph43mlrDmjIflrpogYGtleWAg6ZSu5ZCN77yM6Iul5LiN5oyH5a6a6KGo56S65L2/55SoIGBOelRyZWVOb2RlLmtleWAg5YC8ICovXG4gIGtleU1hcE5hbWU/OiBzdHJpbmc7XG4gIC8qKiDlm57osIPvvIzov5Tlm57kuIDkuKrlgLwgYGtleWAg5YC877yM5LyY5YWI57qn6auY5LqO5YW25LuWICovXG4gIGNiPzogKGl0ZW06IE56VHJlZU5vZGUsIHBhcmVudDogTnpUcmVlTm9kZSwgZGVlcDogbnVtYmVyKSA9PiBhbnk7XG59XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQXJyYXlTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBjOiBBcnJheUNvbmZpZztcbiAgY29uc3RydWN0b3IoY29nOiBEZWxvblV0aWxDb25maWcpIHtcbiAgICB0aGlzLmMgPSB7XG4gICAgICBkZWVwTWFwTmFtZTogJ2RlZXAnLFxuICAgICAgcGFyZW50TWFwTmFtZTogJ3BhcmVudCcsXG4gICAgICBpZE1hcE5hbWU6ICdpZCcsXG4gICAgICBwYXJlbnRJZE1hcE5hbWU6ICdwYXJlbnRfaWQnLFxuICAgICAgY2hpbGRyZW5NYXBOYW1lOiAnY2hpbGRyZW4nLFxuICAgICAgdGl0bGVNYXBOYW1lOiAndGl0bGUnLFxuICAgICAgY2hlY2tlZE1hcG5hbWU6ICdjaGVja2VkJyxcbiAgICAgIHNlbGVjdGVkTWFwbmFtZTogJ3NlbGVjdGVkJyxcbiAgICAgIGV4cGFuZGVkTWFwbmFtZTogJ2V4cGFuZGVkJyxcbiAgICAgIGRpc2FibGVkTWFwbmFtZTogJ2Rpc2FibGVkJyxcbiAgICAgIC4uLihjb2cgJiYgY29nLmFycmF5KSxcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiDlsIbmoJHnu5PmnoTovazmjaLmiJDmlbDnu4Tnu5PmnoRcbiAgICovXG4gIHRyZWVUb0Fycih0cmVlOiBhbnlbXSwgb3B0aW9ucz86IEFycmF5U2VydmljZVRyZWVUb0Fyck9wdGlvbnMpOiBhbnlbXSB7XG4gICAgY29uc3Qgb3B0ID0ge1xuICAgICAgZGVlcE1hcE5hbWU6IHRoaXMuYy5kZWVwTWFwTmFtZSxcbiAgICAgIHBhcmVudE1hcE5hbWU6IHRoaXMuYy5wYXJlbnRNYXBOYW1lLFxuICAgICAgY2hpbGRyZW5NYXBOYW1lOiB0aGlzLmMuY2hpbGRyZW5NYXBOYW1lLFxuICAgICAgY2xlYXJDaGlsZHJlbjogdHJ1ZSxcbiAgICAgIGNiOiBudWxsLFxuICAgICAgLi4ub3B0aW9ucyxcbiAgICB9IGFzIEFycmF5U2VydmljZVRyZWVUb0Fyck9wdGlvbnM7XG4gICAgY29uc3QgcmVzdWx0OiBhbnlbXSA9IFtdO1xuICAgIGNvbnN0IGluRm4gPSAobGlzdDogYW55W10sIHBhcmVudDogYW55LCBkZWVwOiBudW1iZXIgPSAwKSA9PiB7XG4gICAgICBmb3IgKGNvbnN0IGkgb2YgbGlzdCkge1xuICAgICAgICBpW29wdC5kZWVwTWFwTmFtZSFdID0gZGVlcDtcbiAgICAgICAgaVtvcHQucGFyZW50TWFwTmFtZSFdID0gcGFyZW50O1xuICAgICAgICBpZiAob3B0LmNiKSB7XG4gICAgICAgICAgb3B0LmNiKGksIHBhcmVudCwgZGVlcCk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnB1c2goaSk7XG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gaVtvcHQuY2hpbGRyZW5NYXBOYW1lIV07XG4gICAgICAgIGlmIChjaGlsZHJlbiAhPSBudWxsICYmIEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pICYmIGNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpbkZuKGNoaWxkcmVuLCBpLCBkZWVwICsgMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdC5jbGVhckNoaWxkcmVuKSB7XG4gICAgICAgICAgZGVsZXRlIGlbb3B0LmNoaWxkcmVuTWFwTmFtZSFdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICBpbkZuKHRyZWUsIDEpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICog5pWw57uE6L2s5o2i5oiQ5qCR5pWw5o2uXG4gICAqL1xuICBhcnJUb1RyZWUoYXJyOiBhbnlbXSwgb3B0aW9ucz86IEFycmF5U2VydmljZUFyclRvVHJlZU9wdGlvbnMpOiBhbnlbXSB7XG4gICAgY29uc3Qgb3B0ID0ge1xuICAgICAgaWRNYXBOYW1lOiB0aGlzLmMuaWRNYXBOYW1lLFxuICAgICAgcGFyZW50SWRNYXBOYW1lOiB0aGlzLmMucGFyZW50SWRNYXBOYW1lLFxuICAgICAgY2hpbGRyZW5NYXBOYW1lOiB0aGlzLmMuY2hpbGRyZW5NYXBOYW1lLFxuICAgICAgY2I6IG51bGwsXG4gICAgICAuLi5vcHRpb25zLFxuICAgIH0gYXMgQXJyYXlTZXJ2aWNlQXJyVG9UcmVlT3B0aW9ucztcbiAgICBjb25zdCB0cmVlOiBhbnlbXSA9IFtdO1xuICAgIGNvbnN0IGNoaWxkcmVuT2YgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgYXJyKSB7XG4gICAgICBjb25zdCBpZCA9IGl0ZW1bb3B0LmlkTWFwTmFtZSFdO1xuICAgICAgY29uc3QgcGlkID0gaXRlbVtvcHQucGFyZW50SWRNYXBOYW1lIV07XG4gICAgICBjaGlsZHJlbk9mW2lkXSA9IGNoaWxkcmVuT2ZbaWRdIHx8IFtdO1xuICAgICAgaXRlbVtvcHQuY2hpbGRyZW5NYXBOYW1lIV0gPSBjaGlsZHJlbk9mW2lkXTtcbiAgICAgIGlmIChvcHQuY2IpIHtcbiAgICAgICAgb3B0LmNiKGl0ZW0pO1xuICAgICAgfVxuICAgICAgaWYgKHBpZCkge1xuICAgICAgICBjaGlsZHJlbk9mW3BpZF0gPSBjaGlsZHJlbk9mW3BpZF0gfHwgW107XG4gICAgICAgIGNoaWxkcmVuT2ZbcGlkXS5wdXNoKGl0ZW0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJlZS5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJlZTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmlbDnu4TovazmjaLmiJAgYG56LXRyZWVgIOaVsOaNrua6kO+8jOmAmui/hyBgb3B0aW9uc2Ag6L2s5YyW6aG55ZCN77yM5Lmf5Y+v5Lul5L2/55SoIGBvcHRpb25zLmNiYCDmm7Tpq5jnuqflhrPlrprmlbDmja7poblcbiAgICovXG4gIGFyclRvVHJlZU5vZGUoYXJyOiBhbnlbXSwgb3B0aW9ucz86IEFycmF5U2VydmljZUFyclRvVHJlZU5vZGVPcHRpb25zKTogTnpUcmVlTm9kZVtdIHtcbiAgICBjb25zdCBvcHQgPSB7XG4gICAgICBpZE1hcE5hbWU6IHRoaXMuYy5pZE1hcE5hbWUsXG4gICAgICBwYXJlbnRJZE1hcE5hbWU6IHRoaXMuYy5wYXJlbnRJZE1hcE5hbWUsXG4gICAgICB0aXRsZU1hcE5hbWU6IHRoaXMuYy50aXRsZU1hcE5hbWUsXG4gICAgICBpc0xlYWZNYXBOYW1lOiAnaXNMZWFmJyxcbiAgICAgIGNoZWNrZWRNYXBuYW1lOiB0aGlzLmMuY2hlY2tlZE1hcG5hbWUsXG4gICAgICBzZWxlY3RlZE1hcG5hbWU6IHRoaXMuYy5zZWxlY3RlZE1hcG5hbWUsXG4gICAgICBleHBhbmRlZE1hcG5hbWU6IHRoaXMuYy5leHBhbmRlZE1hcG5hbWUsXG4gICAgICBkaXNhYmxlZE1hcG5hbWU6IHRoaXMuYy5kaXNhYmxlZE1hcG5hbWUsXG4gICAgICBjYjogbnVsbCxcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgfSBhcyBBcnJheVNlcnZpY2VBcnJUb1RyZWVOb2RlT3B0aW9ucztcbiAgICBjb25zdCB0cmVlID0gdGhpcy5hcnJUb1RyZWUoYXJyLCB7XG4gICAgICBpZE1hcE5hbWU6IG9wdC5pZE1hcE5hbWUsXG4gICAgICBwYXJlbnRJZE1hcE5hbWU6IG9wdC5wYXJlbnRJZE1hcE5hbWUsXG4gICAgICBjaGlsZHJlbk1hcE5hbWU6ICdjaGlsZHJlbicsXG4gICAgfSk7XG4gICAgdGhpcy52aXNpdFRyZWUodHJlZSwgKGl0ZW06IGFueSwgcGFyZW50OiBhbnksIGRlZXA6IG51bWJlcikgPT4ge1xuICAgICAgaXRlbS5rZXkgPSBpdGVtW29wdC5pZE1hcE5hbWUhXTtcbiAgICAgIGl0ZW0udGl0bGUgPSBpdGVtW29wdC50aXRsZU1hcE5hbWUhXTtcbiAgICAgIGl0ZW0uY2hlY2tlZCA9IGl0ZW1bb3B0LmNoZWNrZWRNYXBuYW1lIV07XG4gICAgICBpdGVtLnNlbGVjdGVkID0gaXRlbVtvcHQuc2VsZWN0ZWRNYXBuYW1lIV07XG4gICAgICBpdGVtLmV4cGFuZGVkID0gaXRlbVtvcHQuZXhwYW5kZWRNYXBuYW1lIV07XG4gICAgICBpdGVtLmRpc2FibGVkID0gaXRlbVtvcHQuZGlzYWJsZWRNYXBuYW1lIV07XG4gICAgICBpZiAoaXRlbVtvcHQuaXNMZWFmTWFwTmFtZSFdID09IG51bGwpIHtcbiAgICAgICAgaXRlbS5pc0xlYWYgPSBpdGVtLmNoaWxkcmVuLmxlbmd0aCA9PT0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGl0ZW0uaXNMZWFmID0gaXRlbVtvcHQuaXNMZWFmTWFwTmFtZSFdO1xuICAgICAgfVxuICAgICAgaWYgKG9wdC5jYikge1xuICAgICAgICBvcHQuY2IoaXRlbSwgcGFyZW50LCBkZWVwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdHJlZS5tYXAobm9kZSA9PiBuZXcgTnpUcmVlTm9kZShub2RlKSk7XG4gIH1cblxuICAvKipcbiAgICog6YCS5b2S6K6/6Zeu5pW05Liq5qCRXG4gICAqL1xuICB2aXNpdFRyZWUoXG4gICAgdHJlZTogYW55W10sXG4gICAgY2I6IChpdGVtOiBhbnksIHBhcmVudDogYW55LCBkZWVwOiBudW1iZXIpID0+IHZvaWQsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKiDlrZDpobnlkI3vvIzpu5jorqTvvJpgJ2NoaWxkcmVuJ2AgKi9cbiAgICAgIGNoaWxkcmVuTWFwTmFtZT86IHN0cmluZztcbiAgICB9LFxuICApOiB2b2lkIHtcbiAgICBvcHRpb25zID0ge1xuICAgICAgY2hpbGRyZW5NYXBOYW1lOiB0aGlzLmMuY2hpbGRyZW5NYXBOYW1lLFxuICAgICAgLi4ub3B0aW9ucyxcbiAgICB9O1xuICAgIGNvbnN0IGluRm4gPSAoZGF0YTogYW55W10sIHBhcmVudDogYW55LCBkZWVwOiBudW1iZXIpID0+IHtcbiAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBkYXRhKSB7XG4gICAgICAgIGNiKGl0ZW0sIHBhcmVudCwgZGVlcCk7XG4gICAgICAgIGNvbnN0IGNoaWxkcmVuVmFsID0gaXRlbVtvcHRpb25zIS5jaGlsZHJlbk1hcE5hbWUhXTtcbiAgICAgICAgaWYgKGNoaWxkcmVuVmFsICYmIGNoaWxkcmVuVmFsLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpbkZuKGNoaWxkcmVuVmFsLCBpdGVtLCBkZWVwICsgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIGluRm4odHJlZSwgbnVsbCwgMSk7XG4gIH1cblxuICAvKipcbiAgICog6I635Y+W5omA5pyJ5bey57uP6YCJ5Lit55qEIGBrZXlgIOWAvFxuICAgKi9cbiAgZ2V0S2V5c0J5VHJlZU5vZGUodHJlZTogTnpUcmVlTm9kZVtdLCBvcHRpb25zPzogQXJyYXlTZXJ2aWNlR2V0S2V5c0J5VHJlZU5vZGVPcHRpb25zKTogYW55W10ge1xuICAgIGNvbnN0IG9wdCA9IHtcbiAgICAgIGluY2x1ZGVIYWxmQ2hlY2tlZDogdHJ1ZSxcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgfSBhcyBBcnJheVNlcnZpY2VHZXRLZXlzQnlUcmVlTm9kZU9wdGlvbnM7XG4gICAgY29uc3Qga2V5czogYW55W10gPSBbXTtcbiAgICB0aGlzLnZpc2l0VHJlZSh0cmVlLCAoaXRlbTogTnpUcmVlTm9kZSwgcGFyZW50OiBOelRyZWVOb2RlLCBkZWVwOiBudW1iZXIpID0+IHtcbiAgICAgIGlmIChpdGVtLmlzQ2hlY2tlZCB8fCAob3B0LmluY2x1ZGVIYWxmQ2hlY2tlZCAmJiBpdGVtLmlzSGFsZkNoZWNrZWQpKSB7XG4gICAgICAgIGtleXMucHVzaChvcHQuY2IgPyBvcHQuY2IoaXRlbSwgcGFyZW50LCBkZWVwKSA6IG9wdC5rZXlNYXBOYW1lID8gaXRlbS5vcmlnaW5bb3B0LmtleU1hcE5hbWVdIDogaXRlbS5rZXkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBrZXlzO1xuICB9XG59XG4iXX0=