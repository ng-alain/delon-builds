/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { NzTreeNode } from 'ng-zorro-antd';
import { DelonUtilConfig } from '../util.config';
import * as i0 from "@angular/core";
import * as i1 from "../util.config";
var ArrayService = /** @class */ (function () {
    function ArrayService(cog) {
        this.c = Object.assign(/** @type {?} */ ({
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
        }), cog && cog.array);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWxvbi91dGlsLyIsInNvdXJjZXMiOlsic3JjL2FycmF5L2FycmF5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0lBTS9DLHNCQUFZLEdBQW9CO1FBQzlCLElBQUksQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sbUJBQ1A7WUFDWCxXQUFXLEVBQUUsTUFBTTtZQUNuQixhQUFhLEVBQUUsUUFBUTtZQUN2QixTQUFTLEVBQUUsSUFBSTtZQUNmLGVBQWUsRUFBRSxXQUFXO1lBQzVCLGVBQWUsRUFBRSxVQUFVO1lBQzNCLFlBQVksRUFBRSxPQUFPO1lBQ3JCLGNBQWMsRUFBRSxTQUFTO1lBQ3pCLGVBQWUsRUFBRSxVQUFVO1lBQzNCLGVBQWUsRUFBRSxVQUFVO1lBQzNCLGVBQWUsRUFBRSxVQUFVO1NBQzVCLEdBQ0QsR0FBRyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQ2pCLENBQUM7S0FDSDtJQUNEOztPQUVHOzs7Ozs7O0lBQ0gsZ0NBQVM7Ozs7OztJQUFULFVBQ0UsSUFBVyxFQUNYLE9BV0M7UUFFRCxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FDckI7WUFDRSxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxXQUFXO1lBQy9CLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLGFBQWE7WUFDbkMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsZUFBZTtZQUN2QyxhQUFhLEVBQUUsSUFBSTtZQUNuQixFQUFFLEVBQUUsSUFBSTtTQUNULEVBQ0QsT0FBTyxDQUNSLENBQUM7O1FBQ0YsSUFBTSxNQUFNLEdBQVUsRUFB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ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56VHJlZU5vZGUgfSBmcm9tICduZy16b3Jyby1hbnRkJztcbmltcG9ydCB7IERlbG9uVXRpbENvbmZpZyB9IGZyb20gJy4uL3V0aWwuY29uZmlnJztcbmltcG9ydCB7IEFycmF5Q29uZmlnIH0gZnJvbSAnLi9hcnJheS5jb25maWcnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEFycmF5U2VydmljZSB7XG4gIHByaXZhdGUgYzogQXJyYXlDb25maWc7XG4gIGNvbnN0cnVjdG9yKGNvZzogRGVsb25VdGlsQ29uZmlnKSB7XG4gICAgdGhpcy5jID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIDxBcnJheUNvbmZpZz57XG4gICAgICAgIGRlZXBNYXBOYW1lOiAnZGVlcCcsXG4gICAgICAgIHBhcmVudE1hcE5hbWU6ICdwYXJlbnQnLFxuICAgICAgICBpZE1hcE5hbWU6ICdpZCcsXG4gICAgICAgIHBhcmVudElkTWFwTmFtZTogJ3BhcmVudF9pZCcsXG4gICAgICAgIGNoaWxkcmVuTWFwTmFtZTogJ2NoaWxkcmVuJyxcbiAgICAgICAgdGl0bGVNYXBOYW1lOiAndGl0bGUnLFxuICAgICAgICBjaGVja2VkTWFwbmFtZTogJ2NoZWNrZWQnLFxuICAgICAgICBzZWxlY3RlZE1hcG5hbWU6ICdzZWxlY3RlZCcsXG4gICAgICAgIGV4cGFuZGVkTWFwbmFtZTogJ2V4cGFuZGVkJyxcbiAgICAgICAgZGlzYWJsZWRNYXBuYW1lOiAnZGlzYWJsZWQnLFxuICAgICAgfSxcbiAgICAgIGNvZyAmJiBjb2cuYXJyYXksXG4gICAgKTtcbiAgfVxuICAvKipcbiAgICog5bCG5qCR57uT5p6E6L2s5o2i5oiQ5pWw57uE57uT5p6EXG4gICAqL1xuICB0cmVlVG9BcnIoXG4gICAgdHJlZTogYW55W10sXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKiDmt7HluqbpobnlkI3vvIzpu5jorqTvvJpgJ2RlZXAnYCAqL1xuICAgICAgZGVlcE1hcE5hbWU/OiBzdHJpbmc7XG4gICAgICAvKiog5omB5bmz5ZCO5pWw57uE55qE54i25pWw5o2u6aG55ZCN77yM6buY6K6k77yaYCdwYXJlbnQnYCAqL1xuICAgICAgcGFyZW50TWFwTmFtZT86IHN0cmluZztcbiAgICAgIC8qKiDmupDmlbDmja7lrZDpobnlkI3vvIzpu5jorqTvvJpgJ2NoaWxkcmVuJ2AgKi9cbiAgICAgIGNoaWxkcmVuTWFwTmFtZT86IHN0cmluZztcbiAgICAgIC8qKiDmmK/lkKbnp7vpmaQgYGNoaWxkcmVuYCDoioLngrnvvIzpu5jorqTvvJpgdHJ1ZWAgKi9cbiAgICAgIGNsZWFyQ2hpbGRyZW4/OiBib29sZWFuO1xuICAgICAgLyoqIOi9rOaNouaIkOaVsOe7hOe7k+aehOaXtuWbnuiwgyAqL1xuICAgICAgY2I/OiAoaXRlbTogYW55LCBwYXJlbnQ6IGFueSwgZGVlcDogbnVtYmVyKSA9PiB2b2lkO1xuICAgIH0sXG4gICk6IGFueVtdIHtcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHtcbiAgICAgICAgZGVlcE1hcE5hbWU6IHRoaXMuYy5kZWVwTWFwTmFtZSxcbiAgICAgICAgcGFyZW50TWFwTmFtZTogdGhpcy5jLnBhcmVudE1hcE5hbWUsXG4gICAgICAgIGNoaWxkcmVuTWFwTmFtZTogdGhpcy5jLmNoaWxkcmVuTWFwTmFtZSxcbiAgICAgICAgY2xlYXJDaGlsZHJlbjogdHJ1ZSxcbiAgICAgICAgY2I6IG51bGwsXG4gICAgICB9LFxuICAgICAgb3B0aW9ucyxcbiAgICApO1xuICAgIGNvbnN0IHJlc3VsdDogYW55W10gPSBbXTtcbiAgICBjb25zdCBpbkZuID0gKGxpc3Q6IGFueVtdLCBwYXJlbnQ6IGFueSwgZGVlcDogbnVtYmVyKSA9PiB7XG4gICAgICBmb3IgKGNvbnN0IGkgb2YgbGlzdCkge1xuICAgICAgICBpW29wdGlvbnMuZGVlcE1hcE5hbWVdID0gZGVlcDtcbiAgICAgICAgaVtvcHRpb25zLnBhcmVudE1hcE5hbWVdID0gcGFyZW50O1xuICAgICAgICBpZiAob3B0aW9ucy5jYikgb3B0aW9ucy5jYihpLCBwYXJlbnQsIGRlZXApO1xuICAgICAgICByZXN1bHQucHVzaChpKTtcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBpW29wdGlvbnMuY2hpbGRyZW5NYXBOYW1lXTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGNoaWxkcmVuICE9IG51bGwgJiZcbiAgICAgICAgICBBcnJheS5pc0FycmF5KGNoaWxkcmVuKSAmJlxuICAgICAgICAgIGNoaWxkcmVuLmxlbmd0aCA+IDBcbiAgICAgICAgKSB7XG4gICAgICAgICAgaW5GbihjaGlsZHJlbiwgaSwgZGVlcCArIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmNsZWFyQ2hpbGRyZW4pIGRlbGV0ZSBpW29wdGlvbnMuY2hpbGRyZW5NYXBOYW1lXTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGluRm4odHJlZSwgMSwgbnVsbCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiDmlbDnu4TovazmjaLmiJDmoJHmlbDmja5cbiAgICovXG4gIGFyclRvVHJlZShcbiAgICBhcnI6IGFueVtdLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKiog57yW5Y+36aG55ZCN77yM6buY6K6k77yaYCdpZCdgICovXG4gICAgICBpZE1hcE5hbWU/OiBzdHJpbmc7XG4gICAgICAvKiog54i257yW5Y+36aG55ZCN77yM6buY6K6k77yaYCdwYXJlbnRfaWQnYCAqL1xuICAgICAgcGFyZW50SWRNYXBOYW1lPzogc3RyaW5nO1xuICAgICAgLyoqIOWtkOmhueWQje+8jOm7mOiupO+8mmAnY2hpbGRyZW4nYCAqL1xuICAgICAgY2hpbGRyZW5NYXBOYW1lPzogc3RyaW5nO1xuICAgICAgLyoqIOi9rOaNouaIkOagkeaVsOaNruaXtuWbnuiwgyAqL1xuICAgICAgY2I/OiAoaXRlbTogYW55KSA9PiB2b2lkO1xuICAgIH0sXG4gICk6IGFueVtdIHtcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHtcbiAgICAgICAgaWRNYXBOYW1lOiB0aGlzLmMuaWRNYXBOYW1lLFxuICAgICAgICBwYXJlbnRJZE1hcE5hbWU6IHRoaXMuYy5wYXJlbnRJZE1hcE5hbWUsXG4gICAgICAgIGNoaWxkcmVuTWFwTmFtZTogdGhpcy5jLmNoaWxkcmVuTWFwTmFtZSxcbiAgICAgICAgY2I6IG51bGwsXG4gICAgICB9LFxuICAgICAgb3B0aW9ucyxcbiAgICApO1xuICAgIGNvbnN0IHRyZWU6IGFueVtdID0gW107XG4gICAgY29uc3QgY2hpbGRyZW5PZiA9IHt9O1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiBhcnIpIHtcbiAgICAgIGNvbnN0IGlkID0gaXRlbVtvcHRpb25zLmlkTWFwTmFtZV0sXG4gICAgICAgIHBpZCA9IGl0ZW1bb3B0aW9ucy5wYXJlbnRJZE1hcE5hbWVdO1xuICAgICAgY2hpbGRyZW5PZltpZF0gPSBjaGlsZHJlbk9mW2lkXSB8fCBbXTtcbiAgICAgIGl0ZW1bb3B0aW9ucy5jaGlsZHJlbk1hcE5hbWVdID0gY2hpbGRyZW5PZltpZF07XG4gICAgICBpZiAob3B0aW9ucy5jYikgb3B0aW9ucy5jYihpdGVtKTtcbiAgICAgIGlmIChwaWQpIHtcbiAgICAgICAgY2hpbGRyZW5PZltwaWRdID0gY2hpbGRyZW5PZltwaWRdIHx8IFtdO1xuICAgICAgICBjaGlsZHJlbk9mW3BpZF0ucHVzaChpdGVtKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyZWUucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRyZWU7XG4gIH1cblxuICAvKipcbiAgICog5pWw57uE6L2s5o2i5oiQIGBuei10cmVlYCDmlbDmja7mupDvvIzpgJrov4cgYG9wdGlvbnNgIOi9rOWMlumhueWQje+8jOS5n+WPr+S7peS9v+eUqCBgb3B0aW9ucy5jYmAg5pu06auY57qn5Yaz5a6a5pWw5o2u6aG5XG4gICAqL1xuICBhcnJUb1RyZWVOb2RlKFxuICAgIGFycjogYW55W10sXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKiDnvJblj7fpobnlkI3vvIzpu5jorqTvvJpgJ2lkJ2AgKi9cbiAgICAgIGlkTWFwTmFtZT86IHN0cmluZztcbiAgICAgIC8qKiDniLbnvJblj7fpobnlkI3vvIzpu5jorqTvvJpgJ3BhcmVudF9pZCdgICovXG4gICAgICBwYXJlbnRJZE1hcE5hbWU/OiBzdHJpbmc7XG4gICAgICAvKiog5qCH6aKY6aG55ZCN77yM6buY6K6k77yaYCd0aXRsZSdgICovXG4gICAgICB0aXRsZU1hcE5hbWU/OiBzdHJpbmc7XG4gICAgICAvKiog6K6+572u5Li65Y+25a2Q6IqC54K56aG55ZCN77yM6Iul5pWw5o2u5rqQ5LiN5a2Y5Zyo5pe26Ieq5Yqo5qC55o2uIGBjaGlsZHJlbmAg5YC85Yaz5a6a5piv5ZCm5Li65Y+25a2Q6IqC54K577yM6buY6K6k77yaYCdpc0xlYWYnYCAqL1xuICAgICAgaXNMZWFmTWFwTmFtZT86IHN0cmluZztcbiAgICAgIC8qKiDoioLngrkgQ2hlY2tib3gg5piv5ZCm6YCJ5Lit6aG55ZCN77yM6buY6K6k77yaYCdjaGVja2VkJ2AgKi9cbiAgICAgIGNoZWNrZWRNYXBuYW1lPzogc3RyaW5nO1xuICAgICAgLyoqIOiKgueCueacrOi6q+aYr+WQpumAieS4remhueWQje+8jOm7mOiupO+8mmAnc2VsZWN0ZWQnYCAqL1xuICAgICAgc2VsZWN0ZWRNYXBuYW1lPzogc3RyaW5nO1xuICAgICAgLyoqIOiKgueCueaYr+WQpuWxleW8gCjlj7blrZDoioLngrnml6DmlYgp6aG55ZCN77yM6buY6K6k77yaYCdleHBhbmRlZCdgICovXG4gICAgICBleHBhbmRlZE1hcG5hbWU/OiBzdHJpbmc7XG4gICAgICAvKiog6K6+572u5piv5ZCm56aB55So6IqC54K5KOS4jeWPr+i/m+ihjOS7u+S9leaTjeS9nCnpobnlkI3vvIzpu5jorqTvvJpgJ2Rpc2FibGVkJ2AgKi9cbiAgICAgIGRpc2FibGVkTWFwbmFtZT86IHN0cmluZztcbiAgICAgIC8qKiDovazmjaLmiJDmoJHmlbDmja7lkI7vvIzmiafooYznmoTpgJLlvZLlm57osIMgKi9cbiAgICAgIGNiPzogKGl0ZW06IGFueSwgcGFyZW50OiBhbnksIGRlZXA6IG51bWJlcikgPT4gdm9pZDtcbiAgICB9LFxuICApOiBOelRyZWVOb2RlW10ge1xuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKFxuICAgICAge1xuICAgICAgICBleHBhbmRlZDogZmFsc2UsXG4gICAgICAgIGlkTWFwTmFtZTogdGhpcy5jLmlkTWFwTmFtZSxcbiAgICAgICAgcGFyZW50SWRNYXBOYW1lOiB0aGlzLmMucGFyZW50SWRNYXBOYW1lLFxuICAgICAgICB0aXRsZU1hcE5hbWU6IHRoaXMuYy50aXRsZU1hcE5hbWUsXG4gICAgICAgIGlzTGVhZk1hcE5hbWU6ICdpc0xlYWYnLFxuICAgICAgICBjaGVja2VkTWFwbmFtZTogdGhpcy5jLmNoZWNrZWRNYXBuYW1lLFxuICAgICAgICBzZWxlY3RlZE1hcG5hbWU6IHRoaXMuYy5zZWxlY3RlZE1hcG5hbWUsXG4gICAgICAgIGV4cGFuZGVkTWFwbmFtZTogdGhpcy5jLmV4cGFuZGVkTWFwbmFtZSxcbiAgICAgICAgZGlzYWJsZWRNYXBuYW1lOiB0aGlzLmMuZGlzYWJsZWRNYXBuYW1lLFxuICAgICAgICBjYjogbnVsbCxcbiAgICAgIH0sXG4gICAgICBvcHRpb25zLFxuICAgICk7XG4gICAgY29uc3QgdHJlZSA9IHRoaXMuYXJyVG9UcmVlKGFyciwge1xuICAgICAgaWRNYXBOYW1lOiBvcHRpb25zLmlkTWFwTmFtZSxcbiAgICAgIHBhcmVudElkTWFwTmFtZTogb3B0aW9ucy5wYXJlbnRJZE1hcE5hbWUsXG4gICAgICBjaGlsZHJlbk1hcE5hbWU6ICdjaGlsZHJlbicsXG4gICAgfSk7XG4gICAgdGhpcy52aXNpdFRyZWUodHJlZSwgKGl0ZW06IGFueSwgcGFyZW50OiBhbnksIGRlZXA6IG51bWJlcikgPT4ge1xuICAgICAgaXRlbS5rZXkgPSBpdGVtW29wdGlvbnMuaWRNYXBOYW1lXTtcbiAgICAgIGl0ZW0udGl0bGUgPSBpdGVtW29wdGlvbnMudGl0bGVNYXBOYW1lXTtcbiAgICAgIGl0ZW0uY2hlY2tlZCA9IGl0ZW1bb3B0aW9ucy5jaGVja2VkTWFwbmFtZV07XG4gICAgICBpdGVtLnNlbGVjdGVkID0gaXRlbVtvcHRpb25zLnNlbGVjdGVkTWFwbmFtZV07XG4gICAgICBpdGVtLmV4cGFuZGVkID0gaXRlbVtvcHRpb25zLmV4cGFuZGVkTWFwbmFtZV07XG4gICAgICBpdGVtLmRpc2FibGVkID0gaXRlbVtvcHRpb25zLmRpc2FibGVkTWFwbmFtZV07XG4gICAgICBpZiAoaXRlbVtvcHRpb25zLmlzTGVhZk1hcE5hbWVdID09IG51bGwpIHtcbiAgICAgICAgaXRlbS5pc0xlYWYgPSBpdGVtLmNoaWxkcmVuLmxlbmd0aCA9PT0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGl0ZW0uaXNMZWFmID0gaXRlbVtvcHRpb25zLmlzTGVhZk1hcE5hbWVdO1xuICAgICAgfVxuICAgICAgaWYgKG9wdGlvbnMuY2IpIG9wdGlvbnMuY2IoaXRlbSwgcGFyZW50LCBkZWVwKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdHJlZS5tYXAobm9kZSA9PiBuZXcgTnpUcmVlTm9kZShub2RlKSk7XG4gIH1cblxuICAvKipcbiAgICog6YCS5b2S6K6/6Zeu5pW05Liq5qCRXG4gICAqL1xuICB2aXNpdFRyZWUoXG4gICAgdHJlZTogYW55W10sXG4gICAgY2I6IChpdGVtOiBhbnksIHBhcmVudDogYW55LCBkZWVwOiBudW1iZXIpID0+IHZvaWQsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKiDlrZDpobnlkI3vvIzpu5jorqTvvJpgJ2NoaWxkcmVuJ2AgKi9cbiAgICAgIGNoaWxkcmVuTWFwTmFtZT86IHN0cmluZztcbiAgICB9LFxuICApIHtcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHtcbiAgICAgICAgY2hpbGRyZW5NYXBOYW1lOiB0aGlzLmMuY2hpbGRyZW5NYXBOYW1lLFxuICAgICAgfSxcbiAgICAgIG9wdGlvbnMsXG4gICAgKTtcbiAgICBjb25zdCBpbkZuID0gKGRhdGE6IGFueVtdLCBwYXJlbnQ6IGFueSwgZGVlcDogbnVtYmVyKSA9PiB7XG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgZGF0YSkge1xuICAgICAgICBjYihpdGVtLCBwYXJlbnQsIGRlZXApO1xuICAgICAgICBjb25zdCBjaGlsZHJlblZhbCA9IGl0ZW1bb3B0aW9ucy5jaGlsZHJlbk1hcE5hbWVdO1xuICAgICAgICBpZiAoY2hpbGRyZW5WYWwgJiYgY2hpbGRyZW5WYWwubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGluRm4oY2hpbGRyZW5WYWwsIGl0ZW0sIGRlZXAgKyAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgaW5Gbih0cmVlLCBudWxsLCAxKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDojrflj5bmiYDmnInlt7Lnu4/pgInkuK3nmoQgYGtleWAg5YC8XG4gICAqL1xuICBnZXRLZXlzQnlUcmVlTm9kZShcbiAgICB0cmVlOiBOelRyZWVOb2RlW10sXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKiDmmK/lkKbljIXlkKvljYrpgInnirbmgIHnmoTlgLzvvIzpu5jorqTvvJpgdHJ1ZWAgKi9cbiAgICAgIGluY2x1ZGVIYWxmQ2hlY2tlZD86IGJvb2xlYW47XG4gICAgICAvKiog5piv5ZCm6YeN5paw5oyH5a6aIGBrZXlgIOmUruWQje+8jOiLpeS4jeaMh+WumuihqOekuuS9v+eUqCBgTnpUcmVlTm9kZS5rZXlgIOWAvCAqL1xuICAgICAga2V5TWFwTmFtZT86IHN0cmluZztcbiAgICAgIC8qKiDlm57osIPvvIzov5Tlm57kuIDkuKrlgLwgYGtleWAg5YC877yM5LyY5YWI57qn6auY5LqO5YW25LuWICovXG4gICAgICBjYj86IChpdGVtOiBOelRyZWVOb2RlLCBwYXJlbnQ6IE56VHJlZU5vZGUsIGRlZXA6IG51bWJlcikgPT4gYW55O1xuICAgIH0sXG4gICk6IGFueVtdIHtcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHtcbiAgICAgICAgaW5jbHVkZUhhbGZDaGVja2VkOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIG9wdGlvbnMsXG4gICAgKTtcbiAgICBjb25zdCBrZXlzOiBhbnlbXSA9IFtdO1xuICAgIHRoaXMudmlzaXRUcmVlKFxuICAgICAgdHJlZSxcbiAgICAgIChpdGVtOiBOelRyZWVOb2RlLCBwYXJlbnQ6IE56VHJlZU5vZGUsIGRlZXA6IG51bWJlcikgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaXRlbS5pc0NoZWNrZWQgfHxcbiAgICAgICAgICAob3B0aW9ucy5pbmNsdWRlSGFsZkNoZWNrZWQgJiYgaXRlbS5pc0hhbGZDaGVja2VkKVxuICAgICAgICApIHtcbiAgICAgICAgICBrZXlzLnB1c2goXG4gICAgICAgICAgICBvcHRpb25zLmNiXG4gICAgICAgICAgICAgID8gb3B0aW9ucy5jYihpdGVtLCBwYXJlbnQsIGRlZXApXG4gICAgICAgICAgICAgIDogb3B0aW9ucy5rZXlNYXBOYW1lXG4gICAgICAgICAgICAgICAgPyBpdGVtLm9yaWdpbltvcHRpb25zLmtleU1hcE5hbWVdXG4gICAgICAgICAgICAgICAgOiBpdGVtLmtleSxcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICk7XG4gICAgcmV0dXJuIGtleXM7XG4gIH1cbn1cbiJdfQ==