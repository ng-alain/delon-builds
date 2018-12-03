/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// tslint:disable:no-any
import { Injectable } from '@angular/core';
import { NzTreeNode } from 'ng-zorro-antd';
import { DelonUtilConfig } from '../util.config';
import * as i0 from "@angular/core";
import * as i1 from "../util.config";
var ArrayService = /** @class */ (function () {
    function ArrayService(cog) {
        this.c = tslib_1.__assign({}, (/** @type {?} */ ({
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
        options = tslib_1.__assign({ deepMapName: this.c.deepMapName, parentMapName: this.c.parentMapName, childrenMapName: this.c.childrenMapName, clearChildren: true, cb: null }, options);
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
                    if (options.cb) {
                        options.cb(i, parent, deep);
                    }
                    result.push(i);
                    /** @type {?} */
                    var children = i[options.childrenMapName];
                    if (children != null &&
                        Array.isArray(children) &&
                        children.length > 0) {
                        inFn(children, i, deep + 1);
                    }
                    if (options.clearChildren) {
                        delete i[options.childrenMapName];
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
        options = tslib_1.__assign({ idMapName: this.c.idMapName, parentIdMapName: this.c.parentIdMapName, childrenMapName: this.c.childrenMapName, cb: null }, options);
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
        options = tslib_1.__assign({ idMapName: this.c.idMapName, parentIdMapName: this.c.parentIdMapName, titleMapName: this.c.titleMapName, isLeafMapName: 'isLeaf', checkedMapname: this.c.checkedMapname, selectedMapname: this.c.selectedMapname, expandedMapname: this.c.expandedMapname, disabledMapname: this.c.disabledMapname, cb: null }, options);
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
            if (options.cb) {
                options.cb(item, parent, deep);
            }
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
        options = tslib_1.__assign({ childrenMapName: this.c.childrenMapName }, options);
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
        options = tslib_1.__assign({ includeHalfChecked: true }, options);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi91dGlsLyIsInNvdXJjZXMiOlsic3JjL2FycmF5L2FycmF5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBR2pEO0lBR0Usc0JBQVksR0FBb0I7UUFDOUIsSUFBSSxDQUFDLENBQUMsd0JBQ0QsbUJBQUE7WUFDRCxXQUFXLEVBQUUsTUFBTTtZQUNuQixhQUFhLEVBQUUsUUFBUTtZQUN2QixTQUFTLEVBQUUsSUFBSTtZQUNmLGVBQWUsRUFBRSxXQUFXO1lBQzVCLGVBQWUsRUFBRSxVQUFVO1lBQzNCLFlBQVksRUFBRSxPQUFPO1lBQ3JCLGNBQWMsRUFBRSxTQUFTO1lBQ3pCLGVBQWUsRUFBRSxVQUFVO1lBQzNCLGVBQWUsRUFBRSxVQUFVO1lBQzNCLGVBQWUsRUFBRSxVQUFVO1NBQzVCLEVBQWUsRUFDYixDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQ3RCLENBQUM7SUFDSixDQUFDO0lBQ0Q7O09BRUc7Ozs7Ozs7SUFDSCxnQ0FBUzs7Ozs7O0lBQVQsVUFDRSxJQUFXLEVBQ1gsT0FXQztRQUVELE9BQU8sc0JBQ0wsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUMvQixhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQ25DLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLGVBQWUsRUFDdkMsYUFBYSxFQUFFLElBQUksRUFDbkIsRUFBRSxFQUFFLElBQUksSUFDTCxPQUFPLENBQ1gsQ0FBQzs7WUFDSSxNQUFNLEdBQVUsRUFBRTs7WUFDbEIsSUFBSSxHQUFHLFVBQUMs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SUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUQ7O09BRUc7Ozs7Ozs7SUFDSCx3Q0FBaUI7Ozs7OztJQUFqQixVQUNFLElBQWtCLEVBQ2xCLE9BT0M7UUFFRCxPQUFPLHNCQUNMLGtCQUFrQixFQUFFLElBQUksSUFDckIsT0FBTyxDQUNYLENBQUM7O1lBQ0ksSUFBSSxHQUFVLEVBQUU7UUFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FDWixJQUFJLEVBQ0osVUFBQyxJQUFnQixFQUFFLE1BQWtCLEVBQUUsSUFBWTtZQUNqRCxJQUNFLElBQUksQ0FBQyxTQUFTO2dCQUNkLENBQUMsT0FBTyxDQUFDLGtCQUFrQixJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsRUFDbEQ7Z0JBQ0EsSUFBSSxDQUFDLElBQUksQ0FDUCxPQUFPLENBQUMsRUFBRTtvQkFDUixDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQztvQkFDaEMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVO3dCQUNsQixDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO3dCQUNqQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDZixDQUFDO2FBQ0g7UUFDSCxDQUFDLENBQ0YsQ0FBQztRQUNGLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Z0JBek9GLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7Z0JBSHpCLGVBQWU7Ozt1QkFIeEI7Q0FnUEMsQUExT0QsSUEwT0M7U0F6T1ksWUFBWTs7O0lBQ3ZCLHlCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOm5vLWFueVxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpUcmVlTm9kZSB9IGZyb20gJ25nLXpvcnJvLWFudGQnO1xuaW1wb3J0IHsgRGVsb25VdGlsQ29uZmlnIH0gZnJvbSAnLi4vdXRpbC5jb25maWcnO1xuaW1wb3J0IHsgQXJyYXlDb25maWcgfSBmcm9tICcuL2FycmF5LmNvbmZpZyc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQXJyYXlTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBjOiBBcnJheUNvbmZpZztcbiAgY29uc3RydWN0b3IoY29nOiBEZWxvblV0aWxDb25maWcpIHtcbiAgICB0aGlzLmMgPSB7XG4gICAgICAuLi57XG4gICAgICAgIGRlZXBNYXBOYW1lOiAnZGVlcCcsXG4gICAgICAgIHBhcmVudE1hcE5hbWU6ICdwYXJlbnQnLFxuICAgICAgICBpZE1hcE5hbWU6ICdpZCcsXG4gICAgICAgIHBhcmVudElkTWFwTmFtZTogJ3BhcmVudF9pZCcsXG4gICAgICAgIGNoaWxkcmVuTWFwTmFtZTogJ2NoaWxkcmVuJyxcbiAgICAgICAgdGl0bGVNYXBOYW1lOiAndGl0bGUnLFxuICAgICAgICBjaGVja2VkTWFwbmFtZTogJ2NoZWNrZWQnLFxuICAgICAgICBzZWxlY3RlZE1hcG5hbWU6ICdzZWxlY3RlZCcsXG4gICAgICAgIGV4cGFuZGVkTWFwbmFtZTogJ2V4cGFuZGVkJyxcbiAgICAgICAgZGlzYWJsZWRNYXBuYW1lOiAnZGlzYWJsZWQnLFxuICAgICAgfSBhcyBBcnJheUNvbmZpZyxcbiAgICAgIC4uLihjb2cgJiYgY29nLmFycmF5KSxcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiDlsIbmoJHnu5PmnoTovazmjaLmiJDmlbDnu4Tnu5PmnoRcbiAgICovXG4gIHRyZWVUb0FycihcbiAgICB0cmVlOiBhbnlbXSxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqIOa3seW6pumhueWQje+8jOm7mOiupO+8mmAnZGVlcCdgICovXG4gICAgICBkZWVwTWFwTmFtZT86IHN0cmluZztcbiAgICAgIC8qKiDmiYHlubPlkI7mlbDnu4TnmoTniLbmlbDmja7pobnlkI3vvIzpu5jorqTvvJpgJ3BhcmVudCdgICovXG4gICAgICBwYXJlbnRNYXBOYW1lPzogc3RyaW5nO1xuICAgICAgLyoqIOa6kOaVsOaNruWtkOmhueWQje+8jOm7mOiupO+8mmAnY2hpbGRyZW4nYCAqL1xuICAgICAgY2hpbGRyZW5NYXBOYW1lPzogc3RyaW5nO1xuICAgICAgLyoqIOaYr+WQpuenu+mZpCBgY2hpbGRyZW5gIOiKgueCue+8jOm7mOiupO+8mmB0cnVlYCAqL1xuICAgICAgY2xlYXJDaGlsZHJlbj86IGJvb2xlYW47XG4gICAgICAvKiog6L2s5o2i5oiQ5pWw57uE57uT5p6E5pe25Zue6LCDICovXG4gICAgICBjYj8oaXRlbTogYW55LCBwYXJlbnQ6IGFueSwgZGVlcDogbnVtYmVyKTogdm9pZDtcbiAgICB9LFxuICApOiBhbnlbXSB7XG4gICAgb3B0aW9ucyA9IHtcbiAgICAgIGRlZXBNYXBOYW1lOiB0aGlzLmMuZGVlcE1hcE5hbWUsXG4gICAgICBwYXJlbnRNYXBOYW1lOiB0aGlzLmMucGFyZW50TWFwTmFtZSxcbiAgICAgIGNoaWxkcmVuTWFwTmFtZTogdGhpcy5jLmNoaWxkcmVuTWFwTmFtZSxcbiAgICAgIGNsZWFyQ2hpbGRyZW46IHRydWUsXG4gICAgICBjYjogbnVsbCxcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgfTtcbiAgICBjb25zdCByZXN1bHQ6IGFueVtdID0gW107XG4gICAgY29uc3QgaW5GbiA9IChsaXN0OiBhbnlbXSwgcGFyZW50OiBhbnksIGRlZXA6IG51bWJlcikgPT4ge1xuICAgICAgZm9yIChjb25zdCBpIG9mIGxpc3QpIHtcbiAgICAgICAgaVtvcHRpb25zLmRlZXBNYXBOYW1lXSA9IGRlZXA7XG4gICAgICAgIGlbb3B0aW9ucy5wYXJlbnRNYXBOYW1lXSA9IHBhcmVudDtcbiAgICAgICAgaWYgKG9wdGlvbnMuY2IpIHsgb3B0aW9ucy5jYihpLCBwYXJlbnQsIGRlZXApOyB9XG4gICAgICAgIHJlc3VsdC5wdXNoKGkpO1xuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IGlbb3B0aW9ucy5jaGlsZHJlbk1hcE5hbWVdO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgY2hpbGRyZW4gIT0gbnVsbCAmJlxuICAgICAgICAgIEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pICYmXG4gICAgICAgICAgY2hpbGRyZW4ubGVuZ3RoID4gMFxuICAgICAgICApIHtcbiAgICAgICAgICBpbkZuKGNoaWxkcmVuLCBpLCBkZWVwICsgMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMuY2xlYXJDaGlsZHJlbikgeyBkZWxldGUgaVtvcHRpb25zLmNoaWxkcmVuTWFwTmFtZV07IH1cbiAgICAgIH1cbiAgICB9O1xuICAgIGluRm4odHJlZSwgMSwgbnVsbCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiDmlbDnu4TovazmjaLmiJDmoJHmlbDmja5cbiAgICovXG4gIGFyclRvVHJlZShcbiAgICBhcnI6IGFueVtdLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKiog57yW5Y+36aG55ZCN77yM6buY6K6k77yaYCdpZCdgICovXG4gICAgICBpZE1hcE5hbWU/OiBzdHJpbmc7XG4gICAgICAvKiog54i257yW5Y+36aG55ZCN77yM6buY6K6k77yaYCdwYXJlbnRfaWQnYCAqL1xuICAgICAgcGFyZW50SWRNYXBOYW1lPzogc3RyaW5nO1xuICAgICAgLyoqIOWtkOmhueWQje+8jOm7mOiupO+8mmAnY2hpbGRyZW4nYCAqL1xuICAgICAgY2hpbGRyZW5NYXBOYW1lPzogc3RyaW5nO1xuICAgICAgLyoqIOi9rOaNouaIkOagkeaVsOaNruaXtuWbnuiwgyAqL1xuICAgICAgY2I/KGl0ZW06IGFueSk6IHZvaWQ7XG4gICAgfSxcbiAgKTogYW55W10ge1xuICAgIG9wdGlvbnMgPSB7XG4gICAgICBpZE1hcE5hbWU6IHRoaXMuYy5pZE1hcE5hbWUsXG4gICAgICBwYXJlbnRJZE1hcE5hbWU6IHRoaXMuYy5wYXJlbnRJZE1hcE5hbWUsXG4gICAgICBjaGlsZHJlbk1hcE5hbWU6IHRoaXMuYy5jaGlsZHJlbk1hcE5hbWUsXG4gICAgICBjYjogbnVsbCxcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgfTtcbiAgICBjb25zdCB0cmVlOiBhbnlbXSA9IFtdO1xuICAgIGNvbnN0IGNoaWxkcmVuT2YgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgYXJyKSB7XG4gICAgICBjb25zdCBpZCA9IGl0ZW1bb3B0aW9ucy5pZE1hcE5hbWVdO1xuICAgICAgY29uc3QgcGlkID0gaXRlbVtvcHRpb25zLnBhcmVudElkTWFwTmFtZV07XG4gICAgICBjaGlsZHJlbk9mW2lkXSA9IGNoaWxkcmVuT2ZbaWRdIHx8IFtdO1xuICAgICAgaXRlbVtvcHRpb25zLmNoaWxkcmVuTWFwTmFtZV0gPSBjaGlsZHJlbk9mW2lkXTtcbiAgICAgIGlmIChvcHRpb25zLmNiKSB7IG9wdGlvbnMuY2IoaXRlbSk7IH1cbiAgICAgIGlmIChwaWQpIHtcbiAgICAgICAgY2hpbGRyZW5PZltwaWRdID0gY2hpbGRyZW5PZltwaWRdIHx8IFtdO1xuICAgICAgICBjaGlsZHJlbk9mW3BpZF0ucHVzaChpdGVtKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyZWUucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRyZWU7XG4gIH1cblxuICAvKipcbiAgICog5pWw57uE6L2s5o2i5oiQIGBuei10cmVlYCDmlbDmja7mupDvvIzpgJrov4cgYG9wdGlvbnNgIOi9rOWMlumhueWQje+8jOS5n+WPr+S7peS9v+eUqCBgb3B0aW9ucy5jYmAg5pu06auY57qn5Yaz5a6a5pWw5o2u6aG5XG4gICAqL1xuICBhcnJUb1RyZWVOb2RlKFxuICAgIGFycjogYW55W10sXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKiDnvJblj7fpobnlkI3vvIzpu5jorqTvvJpgJ2lkJ2AgKi9cbiAgICAgIGlkTWFwTmFtZT86IHN0cmluZztcbiAgICAgIC8qKiDniLbnvJblj7fpobnlkI3vvIzpu5jorqTvvJpgJ3BhcmVudF9pZCdgICovXG4gICAgICBwYXJlbnRJZE1hcE5hbWU/OiBzdHJpbmc7XG4gICAgICAvKiog5qCH6aKY6aG55ZCN77yM6buY6K6k77yaYCd0aXRsZSdgICovXG4gICAgICB0aXRsZU1hcE5hbWU/OiBzdHJpbmc7XG4gICAgICAvKiog6K6+572u5Li65Y+25a2Q6IqC54K56aG55ZCN77yM6Iul5pWw5o2u5rqQ5LiN5a2Y5Zyo5pe26Ieq5Yqo5qC55o2uIGBjaGlsZHJlbmAg5YC85Yaz5a6a5piv5ZCm5Li65Y+25a2Q6IqC54K577yM6buY6K6k77yaYCdpc0xlYWYnYCAqL1xuICAgICAgaXNMZWFmTWFwTmFtZT86IHN0cmluZztcbiAgICAgIC8qKiDoioLngrkgQ2hlY2tib3gg5piv5ZCm6YCJ5Lit6aG55ZCN77yM6buY6K6k77yaYCdjaGVja2VkJ2AgKi9cbiAgICAgIGNoZWNrZWRNYXBuYW1lPzogc3RyaW5nO1xuICAgICAgLyoqIOiKgueCueacrOi6q+aYr+WQpumAieS4remhueWQje+8jOm7mOiupO+8mmAnc2VsZWN0ZWQnYCAqL1xuICAgICAgc2VsZWN0ZWRNYXBuYW1lPzogc3RyaW5nO1xuICAgICAgLyoqIOiKgueCueaYr+WQpuWxleW8gCjlj7blrZDoioLngrnml6DmlYgp6aG55ZCN77yM6buY6K6k77yaYCdleHBhbmRlZCdgICovXG4gICAgICBleHBhbmRlZE1hcG5hbWU/OiBzdHJpbmc7XG4gICAgICAvKiog6K6+572u5piv5ZCm56aB55So6IqC54K5KOS4jeWPr+i/m+ihjOS7u+S9leaTjeS9nCnpobnlkI3vvIzpu5jorqTvvJpgJ2Rpc2FibGVkJ2AgKi9cbiAgICAgIGRpc2FibGVkTWFwbmFtZT86IHN0cmluZztcbiAgICAgIC8qKiDovazmjaLmiJDmoJHmlbDmja7lkI7vvIzmiafooYznmoTpgJLlvZLlm57osIMgKi9cbiAgICAgIGNiPyhpdGVtOiBhbnksIHBhcmVudDogYW55LCBkZWVwOiBudW1iZXIpOiB2b2lkO1xuICAgIH0sXG4gICk6IE56VHJlZU5vZGVbXSB7XG4gICAgb3B0aW9ucyA9IHtcbiAgICAgIGlkTWFwTmFtZTogdGhpcy5jLmlkTWFwTmFtZSxcbiAgICAgIHBhcmVudElkTWFwTmFtZTogdGhpcy5jLnBhcmVudElkTWFwTmFtZSxcbiAgICAgIHRpdGxlTWFwTmFtZTogdGhpcy5jLnRpdGxlTWFwTmFtZSxcbiAgICAgIGlzTGVhZk1hcE5hbWU6ICdpc0xlYWYnLFxuICAgICAgY2hlY2tlZE1hcG5hbWU6IHRoaXMuYy5jaGVja2VkTWFwbmFtZSxcbiAgICAgIHNlbGVjdGVkTWFwbmFtZTogdGhpcy5jLnNlbGVjdGVkTWFwbmFtZSxcbiAgICAgIGV4cGFuZGVkTWFwbmFtZTogdGhpcy5jLmV4cGFuZGVkTWFwbmFtZSxcbiAgICAgIGRpc2FibGVkTWFwbmFtZTogdGhpcy5jLmRpc2FibGVkTWFwbmFtZSxcbiAgICAgIGNiOiBudWxsLFxuICAgICAgLi4ub3B0aW9ucyxcbiAgICB9O1xuICAgIGNvbnN0IHRyZWUgPSB0aGlzLmFyclRvVHJlZShhcnIsIHtcbiAgICAgIGlkTWFwTmFtZTogb3B0aW9ucy5pZE1hcE5hbWUsXG4gICAgICBwYXJlbnRJZE1hcE5hbWU6IG9wdGlvbnMucGFyZW50SWRNYXBOYW1lLFxuICAgICAgY2hpbGRyZW5NYXBOYW1lOiAnY2hpbGRyZW4nLFxuICAgIH0pO1xuICAgIHRoaXMudmlzaXRUcmVlKHRyZWUsIChpdGVtOiBhbnksIHBhcmVudDogYW55LCBkZWVwOiBudW1iZXIpID0+IHtcbiAgICAgIGl0ZW0ua2V5ID0gaXRlbVtvcHRpb25zLmlkTWFwTmFtZV07XG4gICAgICBpdGVtLnRpdGxlID0gaXRlbVtvcHRpb25zLnRpdGxlTWFwTmFtZV07XG4gICAgICBpdGVtLmNoZWNrZWQgPSBpdGVtW29wdGlvbnMuY2hlY2tlZE1hcG5hbWVdO1xuICAgICAgaXRlbS5zZWxlY3RlZCA9IGl0ZW1bb3B0aW9ucy5zZWxlY3RlZE1hcG5hbWVdO1xuICAgICAgaXRlbS5leHBhbmRlZCA9IGl0ZW1bb3B0aW9ucy5leHBhbmRlZE1hcG5hbWVdO1xuICAgICAgaXRlbS5kaXNhYmxlZCA9IGl0ZW1bb3B0aW9ucy5kaXNhYmxlZE1hcG5hbWVdO1xuICAgICAgaWYgKGl0ZW1bb3B0aW9ucy5pc0xlYWZNYXBOYW1lXSA9PSBudWxsKSB7XG4gICAgICAgIGl0ZW0uaXNMZWFmID0gaXRlbS5jaGlsZHJlbi5sZW5ndGggPT09IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpdGVtLmlzTGVhZiA9IGl0ZW1bb3B0aW9ucy5pc0xlYWZNYXBOYW1lXTtcbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25zLmNiKSB7IG9wdGlvbnMuY2IoaXRlbSwgcGFyZW50LCBkZWVwKTsgfVxuICAgIH0pO1xuICAgIHJldHVybiB0cmVlLm1hcChub2RlID0+IG5ldyBOelRyZWVOb2RlKG5vZGUpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDpgJLlvZLorr/pl67mlbTkuKrmoJFcbiAgICovXG4gIHZpc2l0VHJlZShcbiAgICB0cmVlOiBhbnlbXSxcbiAgICBjYjogKGl0ZW06IGFueSwgcGFyZW50OiBhbnksIGRlZXA6IG51bWJlcikgPT4gdm9pZCxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqIOWtkOmhueWQje+8jOm7mOiupO+8mmAnY2hpbGRyZW4nYCAqL1xuICAgICAgY2hpbGRyZW5NYXBOYW1lPzogc3RyaW5nO1xuICAgIH0sXG4gICk6IHZvaWQge1xuICAgIG9wdGlvbnMgPSB7XG4gICAgICBjaGlsZHJlbk1hcE5hbWU6IHRoaXMuYy5jaGlsZHJlbk1hcE5hbWUsXG4gICAgICAuLi5vcHRpb25zLFxuICAgIH07XG4gICAgY29uc3QgaW5GbiA9IChkYXRhOiBhbnlbXSwgcGFyZW50OiBhbnksIGRlZXA6IG51bWJlcikgPT4ge1xuICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGRhdGEpIHtcbiAgICAgICAgY2IoaXRlbSwgcGFyZW50LCBkZWVwKTtcbiAgICAgICAgY29uc3QgY2hpbGRyZW5WYWwgPSBpdGVtW29wdGlvbnMuY2hpbGRyZW5NYXBOYW1lXTtcbiAgICAgICAgaWYgKGNoaWxkcmVuVmFsICYmIGNoaWxkcmVuVmFsLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpbkZuKGNoaWxkcmVuVmFsLCBpdGVtLCBkZWVwICsgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIGluRm4odHJlZSwgbnVsbCwgMSk7XG4gIH1cblxuICAvKipcbiAgICog6I635Y+W5omA5pyJ5bey57uP6YCJ5Lit55qEIGBrZXlgIOWAvFxuICAgKi9cbiAgZ2V0S2V5c0J5VHJlZU5vZGUoXG4gICAgdHJlZTogTnpUcmVlTm9kZVtdLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKiog5piv5ZCm5YyF5ZCr5Y2K6YCJ54q25oCB55qE5YC877yM6buY6K6k77yaYHRydWVgICovXG4gICAgICBpbmNsdWRlSGFsZkNoZWNrZWQ/OiBib29sZWFuO1xuICAgICAgLyoqIOaYr+WQpumHjeaWsOaMh+WumiBga2V5YCDplK7lkI3vvIzoi6XkuI3mjIflrprooajnpLrkvb/nlKggYE56VHJlZU5vZGUua2V5YCDlgLwgKi9cbiAgICAgIGtleU1hcE5hbWU/OiBzdHJpbmc7XG4gICAgICAvKiog5Zue6LCD77yM6L+U5Zue5LiA5Liq5YC8IGBrZXlgIOWAvO+8jOS8mOWFiOe6p+mrmOS6juWFtuS7liAqL1xuICAgICAgY2I/KGl0ZW06IE56VHJlZU5vZGUsIHBhcmVudDogTnpUcmVlTm9kZSwgZGVlcDogbnVtYmVyKTogYW55O1xuICAgIH0sXG4gICk6IGFueVtdIHtcbiAgICBvcHRpb25zID0ge1xuICAgICAgaW5jbHVkZUhhbGZDaGVja2VkOiB0cnVlLFxuICAgICAgLi4ub3B0aW9ucyxcbiAgICB9O1xuICAgIGNvbnN0IGtleXM6IGFueVtdID0gW107XG4gICAgdGhpcy52aXNpdFRyZWUoXG4gICAgICB0cmVlLFxuICAgICAgKGl0ZW06IE56VHJlZU5vZGUsIHBhcmVudDogTnpUcmVlTm9kZSwgZGVlcDogbnVtYmVyKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBpdGVtLmlzQ2hlY2tlZCB8fFxuICAgICAgICAgIChvcHRpb25zLmluY2x1ZGVIYWxmQ2hlY2tlZCAmJiBpdGVtLmlzSGFsZkNoZWNrZWQpXG4gICAgICAgICkge1xuICAgICAgICAgIGtleXMucHVzaChcbiAgICAgICAgICAgIG9wdGlvbnMuY2JcbiAgICAgICAgICAgICAgPyBvcHRpb25zLmNiKGl0ZW0sIHBhcmVudCwgZGVlcClcbiAgICAgICAgICAgICAgOiBvcHRpb25zLmtleU1hcE5hbWVcbiAgICAgICAgICAgICAgICA/IGl0ZW0ub3JpZ2luW29wdGlvbnMua2V5TWFwTmFtZV1cbiAgICAgICAgICAgICAgICA6IGl0ZW0ua2V5LFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgKTtcbiAgICByZXR1cm4ga2V5cztcbiAgfVxufVxuIl19